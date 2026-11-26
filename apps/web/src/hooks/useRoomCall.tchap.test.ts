/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

// @vitest-environment happy-dom

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { renderHook, waitFor } from "test-utils-rtl";
import {
    createStubMatrixRTC,
    getMockClientWithEventEmitter,
    mkRoom,
    mockClientMethodsRooms,
    mockClientMethodsServer,
    mockClientMethodsUser,
    setupAsyncStoreWithClient,
    withContexts,
} from "test-utils";

import { PlatformCallType, useRoomCall } from "./room/useRoomCall";
import RoomContext, { type RoomContextType } from "../contexts/RoomContext";
import type LegacyCallHandler from "../LegacyCallHandler";
import { CallStore } from "../stores/CallStore";
import { SDKContextClass } from "../contexts/SDKContextClass";
import TchapUIFeature from "~tchap-web/src/tchap/util/TchapUIFeature";
import TchapElementCallSupport from "~tchap-web/src/tchap/util/TchapElementCallSupport";

describe("useRoomCall tchap", () => {
    const matrixRTC = createStubMatrixRTC();
    const client = getMockClientWithEventEmitter({
        ...mockClientMethodsUser(),
        ...mockClientMethodsServer(),
        ...mockClientMethodsRooms(),
        matrixRTC,
        _unstable_getRTCTransports: vi.fn().mockResolvedValue([]),
        getCrypto: () => null,
    });

    const room = mkRoom(client, "!test-room");
    // Create a stable room context for this test
    const mockRoomViewStore = {
        isViewingCall: vi.fn().mockReturnValue(false),
        on: vi.fn(),
        off: vi.fn(),
        emit: vi.fn(),
    };

    const roomContext = {
        ...RoomContext,
        roomId: room.roomId,
        roomViewStore: mockRoomViewStore,
    } as unknown as RoomContextType;

    /**
     * Stubs the element call support detection: true if the sfu websocket is reachable.
     */
    const mockElementCallSupport = (ecUnblocked: boolean): void => {
        vi.spyOn(TchapElementCallSupport, "isPersistedSupported").mockReturnValue(ecUnblocked);
        vi.spyOn(TchapElementCallSupport, "getSupportState").mockResolvedValue({ ecUnblocked });
    };

    function render() {
        return renderHook(
            () => useRoomCall(room),
            withContexts({ matrixClient: client, roomContext, sdkContext: SDKContextClass.instance }),
        );
    }

    beforeEach(async () => {
        const callHandler = {
            getCallForRoom: vi.fn().mockReturnValue(null),
            isCallSidebarShown: vi.fn().mockReturnValue(true),
            addListener: vi.fn(),
            removeListener: vi.fn(),
            on: vi.fn(),
            off: vi.fn(),
        };
        vi.spyOn(SDKContextClass.instance, "legacyCallHandler", "get").mockReturnValue(
            callHandler as unknown as LegacyCallHandler,
        );
        vi.mocked(client.cachedRtcTransports.get).mockReturnValue([
            { type: "livekit", livekit_service_url: "https://example.org" },
        ]);
        await setupAsyncStoreWithClient(CallStore.instance, client);
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    describe("DM (2 members or less)", () => {
        beforeEach(() => {
            vi.mocked(room.getJoinedMemberCount).mockReturnValue(2);
            vi.spyOn(TchapUIFeature, "isFeatureActiveForHomeserver").mockReturnValue(true);
        });

        it("uses Element Call when the sfu websocket is reachable", async () => {
            mockElementCallSupport(true);
            const { result } = render();
            await waitFor(() => expect(result.current.callOptions).toEqual([PlatformCallType.ElementCall]));
        });

        it("falls back to legacy call when the sfu websocket is blocked", async () => {
            mockElementCallSupport(false);
            const { result } = render();
            await waitFor(() => expect(result.current.callOptions).toEqual([PlatformCallType.LegacyCall]));
            expect(result.current.showVoiceCallButton).toBe(true);
            expect(result.current.showVideoCallButton).toBe(true);
        });

        it("falls back to legacy call when feature_use_ec_in_dm is disabled", async () => {
            vi.spyOn(TchapUIFeature, "isFeatureActiveForHomeserver").mockReturnValue(false);
            mockElementCallSupport(true);
            const { result } = render();
            await waitFor(() => expect(result.current.callOptions).toEqual([PlatformCallType.LegacyCall]));
        });
    });

    describe("group room", () => {
        beforeEach(() => {
            vi.mocked(room.getJoinedMemberCount).mockReturnValue(3);
            vi.spyOn(TchapUIFeature, "isFeatureActiveForHomeserver").mockReturnValue(true);
        });

        it("keeps the group call options whatever the sfu websocket state", async () => {
            mockElementCallSupport(false);
            const { result } = render();
            await waitFor(() => expect(result.current.callOptions).toEqual([PlatformCallType.ElementCall]));
        });
    });
});
