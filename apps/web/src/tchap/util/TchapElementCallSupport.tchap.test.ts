/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

// @vitest-environment happy-dom

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { type MatrixClient, type Room } from "matrix-js-sdk/src/matrix";

import TchapElementCallSupport, {
    type ElementCallSupportState,
} from "./TchapElementCallSupport";
import { mkStubRoom, stubClient } from "test-utils";
import { MatrixClientPeg } from "~tchap-web/src/MatrixClientPeg";
import { CallStore } from "~tchap-web/src/stores/CallStore";

const PM_DOMAIN = "dev02.tchap.incubateur.net";
const STORAGE_KEY = `tchap:ec_supported:${PM_DOMAIN}`;
const SERVICE_URL = "https://lk-jwt.example.org";
const SFU_CONFIG = { url: "wss://sfu.example.org/ws", jwt: "jwt-token" };

/**
 * The class caches its result promises at module level: reset them between tests.
 */
function resetCaches(): void {
    const caches = TchapElementCallSupport as unknown as {
        statePromise: Promise<ElementCallSupportState> | null;
        pmPromise: Promise<boolean> | null;
    };
    caches.statePromise = null;
    caches.pmPromise = null;
}

/**
 * Minimal controllable WebSocket double.
 */
class FakeWebSocket {
    public static instances: FakeWebSocket[] = [];
    public url: string;
    public onopen: (() => void) | null = null;
    public onerror: (() => void) | null = null;
    public onclose: (() => void) | null = null;
    public closed = false;

    public constructor(url: string) {
        this.url = url;
        FakeWebSocket.instances.push(this);
    }

    public close(): void {
        this.closed = true;
    }
}

const jsonResponse = (body: object, ok = true): Response =>
    ({ ok, status: ok ? 200 : 500, json: async () => body }) as unknown as Response;

const stubOpenIdToken = (client: MatrixClient): void => {
    vi.mocked(client.getOpenIdToken).mockResolvedValue({
        access_token: "openid-token",
        token_type: "Bearer",
        matrix_server_name: "example.org",
        expires_in: 3600,
    });
};

async function openConnection(): Promise<void> {
    await vi.waitFor(() => expect(FakeWebSocket.instances).toHaveLength(1));
    FakeWebSocket.instances[0].onopen?.();
}

describe("TchapElementCallSupport", () => {
    let client: MatrixClient;

    beforeEach(() => {
        stubClient();
        client = MatrixClientPeg.safeGet();
        vi.mocked(client.getRooms).mockReturnValue([
            mkStubRoom("!room:example.org", "!room:example.org", client) as unknown as Room,
        ]);
        vi.spyOn(CallStore.instance, "getConfiguredRTCTransports").mockReturnValue([
            { type: "livekit", livekit_service_url: SERVICE_URL },
        ]);
    });

    afterEach(() => {
        vi.unstubAllGlobals();
        vi.resetAllMocks();
        window.localStorage.clear();
        FakeWebSocket.instances = [];
        resetCaches();
    });

    describe("getLivekitServiceUrl", () => {
        it("prefers the livekit_service_url of the transport", () => {
            vi.mocked(CallStore.instance.getConfiguredRTCTransports).mockReturnValue([
                { type: "livekit", url: "wss://sfu.example.org", livekit_service_url: SERVICE_URL },
            ]);
            expect(TchapElementCallSupport.getLivekitServiceUrl()).toEqual(SERVICE_URL);
        });

        it("derives an http url from a transport with only a websocket url", () => {
            vi.mocked(CallStore.instance.getConfiguredRTCTransports).mockReturnValue([
                { type: "livekit", url: "wss://sfu.example.org" },
            ]);
            expect(TchapElementCallSupport.getLivekitServiceUrl()).toEqual("https://sfu.example.org");
        });

        it("returns undefined without a livekit transport", () => {
            vi.mocked(CallStore.instance.getConfiguredRTCTransports).mockReturnValue([{ type: "other" }]);
            expect(TchapElementCallSupport.getLivekitServiceUrl()).toBeUndefined();
        });
    });

    describe("checkWebsocket", () => {
        beforeEach(() => {
            vi.stubGlobal("WebSocket", FakeWebSocket);
            stubOpenIdToken(client);
        });

        it("opens a websocket on the sfu with the jwt from the matrix 2.0 endpoint", async () => {
            const fetchMock = vi.fn().mockResolvedValue(jsonResponse(SFU_CONFIG));
            vi.stubGlobal("fetch", fetchMock);

            const promise = TchapElementCallSupport.checkWebsocket(SERVICE_URL);
            await openConnection();

            await expect(promise).resolves.toEqual({ ok: true });
            expect(FakeWebSocket.instances[0].url).toEqual(
                "wss://sfu.example.org/ws/rtc?access_token=jwt-token&auto_subscribe=1&sdk=js",
            );
            expect(FakeWebSocket.instances[0].closed).toBe(true);
            expect(vi.mocked(fetchMock).mock.calls[0][0]).toEqual(`${SERVICE_URL}/get_token`);
        });

        it("falls back to the legacy endpoint when the matrix 2.0 endpoint fails", async () => {
            const fetchMock = vi
                .fn()
                .mockResolvedValueOnce(jsonResponse({}, false))
                .mockResolvedValueOnce(jsonResponse(SFU_CONFIG));
            vi.stubGlobal("fetch", fetchMock);

            const promise = TchapElementCallSupport.checkWebsocket(SERVICE_URL);
            await openConnection();

            await expect(promise).resolves.toEqual({ ok: true });
            expect(vi.mocked(fetchMock).mock.calls[1][0]).toEqual(`${SERVICE_URL}/sfu/get`);
        });

        it("reports a network error when the jwt service is unreachable", async () => {
            vi.stubGlobal("fetch", vi.fn().mockResolvedValue(jsonResponse({}, false)));

            await expect(TchapElementCallSupport.checkWebsocket(SERVICE_URL)).resolves.toEqual({
                ok: false,
                reason: "network-error",
            });
            expect(FakeWebSocket.instances).toHaveLength(0);
        });

        it("reports blocked when the websocket fails to open", async () => {
            vi.stubGlobal("fetch", vi.fn().mockResolvedValue(jsonResponse(SFU_CONFIG)));

            const promise = TchapElementCallSupport.checkWebsocket(SERVICE_URL);
            await vi.waitFor(() => expect(FakeWebSocket.instances).toHaveLength(1));
            FakeWebSocket.instances[0].onerror?.();

            await expect(promise).resolves.toEqual({ ok: false, reason: "blocked" });
        });

        it("reports a network error when the websocket never opens", async () => {
            vi.stubGlobal("fetch", vi.fn().mockResolvedValue(jsonResponse(SFU_CONFIG)));
            vi.useFakeTimers();

            try {
                const promise = TchapElementCallSupport.checkWebsocket(SERVICE_URL);
                await vi.advanceTimersByTimeAsync(1);
                expect(FakeWebSocket.instances).toHaveLength(1);

                await vi.advanceTimersByTimeAsync(15_000);

                await expect(promise).resolves.toEqual({ ok: false, reason: "network-error" });
                expect(FakeWebSocket.instances[0].closed).toBe(true);
            } finally {
                vi.useRealTimers();
            }
        });
    });

    describe("isPmInstance", () => {
        it("detects the pm domain on dev instances", async () => {
            vi.mocked(client.getDomain).mockReturnValue(PM_DOMAIN);
            await expect(TchapElementCallSupport.isPmInstance()).resolves.toBe(true);
        });

        it("detects the pm domain on production", async () => {
            vi.mocked(client.getDomain).mockReturnValue("agent.pm.tchap.gouv.fr");
            await expect(TchapElementCallSupport.isPmInstance()).resolves.toBe(true);
        });

        it("is false on any other domain", async () => {
            await expect(TchapElementCallSupport.isPmInstance()).resolves.toBe(false);
            vi.mocked(client.getDomain).mockReturnValue("dev01.tchap.incubateur.net");
            await expect(TchapElementCallSupport.isPmInstance()).resolves.toBe(false);
        });
    });

    describe("getSupportState", () => {
        beforeEach(() => {
            vi.stubGlobal("WebSocket", FakeWebSocket);
            stubOpenIdToken(client);
        });

        it("allows element call without probing on a non-pm domain", async () => {
            const fetchMock = vi.fn().mockResolvedValue(jsonResponse(SFU_CONFIG));
            vi.stubGlobal("fetch", fetchMock);

            await expect(TchapElementCallSupport.getSupportState()).resolves.toEqual({ ecUnblocked: true });
            expect(fetchMock).not.toHaveBeenCalled();
        });

        it("allows element call on a pm domain when the sfu is reachable and persists the result", async () => {
            vi.mocked(client.getDomain).mockReturnValue(PM_DOMAIN);
            vi.stubGlobal("fetch", vi.fn().mockResolvedValue(jsonResponse(SFU_CONFIG)));

            const promise = TchapElementCallSupport.getSupportState();
            await openConnection();

            await expect(promise).resolves.toEqual({ ecUnblocked: true });
            expect(window.localStorage.getItem(STORAGE_KEY)).toBe("true");
        });

        it("allows element call on a pm domain without probing when it was persisted", async () => {
            vi.mocked(client.getDomain).mockReturnValue(PM_DOMAIN);
            window.localStorage.setItem(STORAGE_KEY, "true");
            const fetchMock = vi.fn().mockResolvedValue(jsonResponse(SFU_CONFIG));
            vi.stubGlobal("fetch", fetchMock);

            await expect(TchapElementCallSupport.getSupportState()).resolves.toEqual({ ecUnblocked: true });
            expect(fetchMock).not.toHaveBeenCalled();
        });

        it("blocks element call on a pm domain when the sfu is unreachable and does not persist it", async () => {
            vi.mocked(client.getDomain).mockReturnValue(PM_DOMAIN);
            vi.stubGlobal("fetch", vi.fn().mockResolvedValue(jsonResponse(SFU_CONFIG)));

            const promise = TchapElementCallSupport.getSupportState();
            await vi.waitFor(() => expect(FakeWebSocket.instances).toHaveLength(1));
            FakeWebSocket.instances[0].onerror?.();

            await expect(promise).resolves.toEqual({ ecUnblocked: false });
            expect(window.localStorage.getItem(STORAGE_KEY)).toBe("blocked");
        });

        it("blocks element call on a pm domain without probing when it was persisted as blocked", async () => {
            vi.mocked(client.getDomain).mockReturnValue(PM_DOMAIN);
            window.localStorage.setItem(STORAGE_KEY, "blocked");
            const fetchMock = vi.fn().mockResolvedValue(jsonResponse(SFU_CONFIG));
            vi.stubGlobal("fetch", fetchMock);

            await expect(TchapElementCallSupport.getSupportState()).resolves.toEqual({ ecUnblocked: false });
            expect(fetchMock).not.toHaveBeenCalled();
        });

        it("blocks element call on a pm domain when the jwt service is reachable but fails", async () => {
            vi.mocked(client.getDomain).mockReturnValue(PM_DOMAIN);
            const fetchMock = vi.fn().mockResolvedValue(jsonResponse({}, false));
            vi.stubGlobal("fetch", fetchMock);

            await expect(TchapElementCallSupport.getSupportState()).resolves.toEqual({ ecUnblocked: false });
            // network errors are transient: nothing persisted
            expect(window.localStorage.getItem(STORAGE_KEY)).toBeNull();
        });

        it("blocks element call on a pm domain when no livekit service is configured", async () => {
            vi.mocked(client.getDomain).mockReturnValue(PM_DOMAIN);
            const fetchMock = vi.fn().mockResolvedValue(jsonResponse(SFU_CONFIG));
            vi.stubGlobal("fetch", fetchMock);
            vi.mocked(CallStore.instance.getConfiguredRTCTransports).mockReturnValue([]);

            await expect(TchapElementCallSupport.getSupportState()).resolves.toEqual({ ecUnblocked: false });
            expect(fetchMock).not.toHaveBeenCalled();
        });
    });
});
