import { logger } from "matrix-js-sdk/src/logger";

import { MatrixClientPeg } from "~tchap-web/src/MatrixClientPeg";
import { CallStore } from "~tchap-web/src/stores/CallStore";

// mirrors the websocketTimeout used by livekit-client's ConnectionCheck
const WEBSOCKET_CHECK_TIMEOUT_MS = 15_000;

export type WebsocketCheckFailureReason = "network-error" | "blocked";

export type WebsocketCheckResult = { ok: true } | { ok: false; reason: WebsocketCheckFailureReason };

export interface ElementCallSupportState {
    ecUnblocked: boolean;
}

/**
 * The SFU connection data returned by a LiveKit JWT service, as consumed by element-call.
 */
interface LivekitSfuConfig {
    url: string;
    jwt: string;
}

/**
 * Tchap Element Call (LiveKit) support detection.
 *
 * On PM instances (feature_use_ec_in_dm enabled on the homeserver resolved from the user's
 * email), Element Call is only usable if the machine can reach the SFU over WebSocket.
 * A positive result is persisted in localStorage so the room header never flickers: a
 * machine that succeeded once is always considered supported. Negative results are kept
 * in memory only and re-checked on the next app start.
 */
export default class TchapElementCallSupport {
    private static statePromise: Promise<ElementCallSupportState> | null = null;
    private static pmPromise: Promise<boolean> | null = null;

    /**
     * Resolves once per app session whether the current instance is a PM instance and
     * whether Element Call can be used on this machine.
     */
    public static getSupportState(): Promise<ElementCallSupportState> {
        if (!TchapElementCallSupport.statePromise) {
            TchapElementCallSupport.statePromise = TchapElementCallSupport.resolveSupportState();
        }
        return TchapElementCallSupport.statePromise;
    }

    /**
     * Synchronously reads the persisted result, so repeat visits render the call buttons
     * immediately without waiting for the check.
     */
    public static isPersistedSupported(): boolean {
        try {
            const domain = MatrixClientPeg.safeGet().getDomain() ?? "unknown";
            return window.localStorage.getItem(TchapElementCallSupport.storageKey(domain)) === "true";
        } catch {
            return false;
        }
    }

    /**
     * Synchronously reads the persisted blocked state: a machine where websockets are
     * blocked stays blocked, and the probe does not need to run again.
     */
    public static isPersistedBlocked(): boolean {
        try {
            const domain = MatrixClientPeg.safeGet().getDomain() ?? "unknown";
            return window.localStorage.getItem(TchapElementCallSupport.storageKey(domain)) === "blocked";
        } catch {
            return false;
        }
    }

    /**
     * Whether the current instance is a PM instance: the homeserver resolved from the
     * user's email has feature_use_ec_in_dm enabled.
     */
    public static isPmInstance(): Promise<boolean> {
        if (!TchapElementCallSupport.pmPromise) {
            TchapElementCallSupport.pmPromise = TchapElementCallSupport.resolvePmInstance();
        }
        return TchapElementCallSupport.pmPromise;
    }

    /**
     * The base URL of the configured LiveKit JWT service, if any. It hands out the SFU
     * url and the tokens to connect to it; it is not the SFU itself.
     */
    public static getLivekitServiceUrl(): string | undefined {
        const transports = CallStore.instance.getConfiguredRTCTransports();
        for (const transport of transports) {
            if (transport.type === "livekit") {
                if (typeof transport.livekit_service_url === "string") return transport.livekit_service_url;
                if (typeof transport.url === "string") return transport.url.replace(/^ws/, "http");
            }
        }
        return undefined;
    }

    /**
     * Tries to open a WebSocket to the LiveKit signal endpoint (<sfu url>/rtc?access_token=…,
     * the URL livekit-client's ConnectionCheck connects to). The connection being opened is
     * enough to consider websockets unblocked. A timeout is reported as a transient network
     * error, an immediate failure as websockets being blocked.
     */
    public static async checkWebsocket(livekitServiceUrl: string): Promise<WebsocketCheckResult> {
        let sfuConfig: LivekitSfuConfig;
        try {
            sfuConfig = await TchapElementCallSupport.fetchSfuConfig(livekitServiceUrl);
        } catch (e) {
            logger.warn("TchapElementCallSupport: failed to fetch LiveKit SFU config", e);
            return { ok: false, reason: "network-error" };
        }

        const probeUrl = new URL(sfuConfig.url);
        if (!probeUrl.pathname.endsWith("/rtc")) {
            probeUrl.pathname = `${probeUrl.pathname.endsWith("/") ? probeUrl.pathname : `${probeUrl.pathname}/`}rtc`;
        }
        probeUrl.searchParams.set("access_token", sfuConfig.jwt);
        probeUrl.searchParams.set("auto_subscribe", "1");
        probeUrl.searchParams.set("sdk", "js");

        return new Promise((resolve) => {
            let settled = false;
            const ws = new WebSocket(probeUrl.toString());
            const finish = (result: WebsocketCheckResult): void => {
                if (settled) return;
                settled = true;
                clearTimeout(timeout);
                ws.onopen = null;
                ws.onerror = null;
                ws.onclose = null;
                resolve(result);
            };
            const timeout = setTimeout(() => {
                ws.close();
                finish({ ok: false, reason: "network-error" });
            }, WEBSOCKET_CHECK_TIMEOUT_MS);
            ws.onopen = () => {
                ws.close();
                finish({ ok: true });
            };
            ws.onerror = () => finish({ ok: false, reason: "blocked" });
            ws.onclose = () => finish({ ok: false, reason: "blocked" });
        });
    }

    /**
     * Gets the SFU url and a short-lived JWT from the LiveKit JWT service, like element-call
     * does before connecting: an OpenID token is exchanged on the service's matrix 2.0
     * /get_token endpoint, with the legacy /sfu/get endpoint as fallback.
     */
    private static async fetchSfuConfig(livekitServiceUrl: string): Promise<LivekitSfuConfig> {
        const client = MatrixClientPeg.safeGet();
        const room = client.getRooms()[0];
        if (!room) throw new Error("no room available to request a LiveKit token");
        const userId = client.getUserId() ?? "";
        const deviceId = client.getDeviceId() ?? "";
        // the service validates the token against the federation API of matrix_server_name
        const openIdToken = await client.getOpenIdToken();

        const request = async (path: string, body: object): Promise<Response> =>
            await fetch(new URL(path, livekitServiceUrl).toString(), {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

        // matrix 2.0 endpoint: POST /get_token
        let response = await request("get_token", {
            room_id: room.roomId,
            slot_id: "m.call#ROOM",
            openid_token: openIdToken,
            member: { id: `${userId}:${deviceId}`, claimed_user_id: userId, claimed_device_id: deviceId },
        });
        // legacy endpoint: POST /sfu/get
        if (!response.ok) {
            response = await request("sfu/get", {
                room: room.roomId,
                openid_token: openIdToken,
                device_id: deviceId,
            });
        }
        if (!response.ok) {
            throw new Error(`LiveKit JWT service answered ${response.status}`);
        }
        return (await response.json()) as LivekitSfuConfig;
    }

    private static storageKey(serverName: string): string {
        return `tchap:ec_supported:${serverName}`;
    }

    private static async resolvePmInstance(): Promise<boolean> {
        const loginDomain = MatrixClientPeg.safeGet().getDomain() ?? "";
        // dev instances live under tchap.incubateur.net, production ones under tchap.gouv.fr
        const isDevServer = loginDomain.endsWith("tchap.incubateur.net");
        // Hard code agent pm server url, if more case, needs to move to config ?
        const pmDomain = isDevServer ? "dev02.tchap.incubateur.net" : "agent.pm.tchap.gouv.fr";
        return loginDomain === pmDomain;
    }

    private static async resolveSupportState(): Promise<ElementCallSupportState> {
        const isPm = await TchapElementCallSupport.isPmInstance();
        logger.warn(`*** isPm`, isPm);
        if (!isPm) return { ecUnblocked: true };
        if (TchapElementCallSupport.isPersistedSupported()) return { ecUnblocked: true };
        if (TchapElementCallSupport.isPersistedBlocked()) return { ecUnblocked: false };

        const livekitServiceUrl = TchapElementCallSupport.getLivekitServiceUrl();
        if (!livekitServiceUrl) {
            logger.warn("*** TchapElementCallSupport: no LiveKit service url configured, Element Call disabled");
            return { ecUnblocked: false };
        }
        const result = await TchapElementCallSupport.checkWebsocket(livekitServiceUrl);
        const domain = MatrixClientPeg.safeGet().getDomain() ?? "unknown";
        if (!result.ok) {
            logger.warn(`*** TchapElementCallSupport: websocket check failed (${result.reason}) for ${livekitServiceUrl}`);
            // a machine where websockets are blocked stays blocked: persist it so the probe
            // does not run again. network errors are transient and are not persisted.
            if (result.reason === "blocked") {
                window.localStorage.setItem(TchapElementCallSupport.storageKey(domain), "blocked");
            }
            return { ecUnblocked: false };
        }
        try {
            window.localStorage.setItem(TchapElementCallSupport.storageKey(domain), "true");
        } catch {
            // localStorage unavailable, keep the result in memory only
        }
        return { ecUnblocked: true };
    }
}
