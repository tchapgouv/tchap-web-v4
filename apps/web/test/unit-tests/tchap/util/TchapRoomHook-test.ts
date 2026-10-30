// @vitest-environment happy-dom

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { waitFor, renderHook, act } from "test-utils-rtl";
import { type Room, type MatrixClient } from "matrix-js-sdk/src/matrix";

import { useTchapRoom } from "~tchap-web/src/tchap/util/TchapRoomHook";
import { mkRoom, stubClient } from "test-utils";
import { TchapRoomType } from "~tchap-web/src/tchap/@types/tchap";
import { MatrixClientPeg } from "~tchap-web/src/MatrixClientPeg";
import { TchapStore } from "~tchap-web/src/tchap/util/TchapStore";

describe("useTchapRoomHook", () => {
    let cli: MatrixClient;
    let room: Room;

    beforeEach(() => {
        stubClient();
        cli = MatrixClientPeg.safeGet();
        room = mkRoom(cli, "!test-room");
    });

    afterEach(() => {
        vi.resetAllMocks();
    });

    it("should do initial fetch of room type", async () => {
        // Mock the store to return some room type
        vi.spyOn(TchapStore.instance, "getRoomType").mockImplementation(async () => {
            return TchapRoomType.Forum;
        });

        act(async () => {
            const { result } = renderHook(() => useTchapRoom(room));
            await waitFor(() => {
                expect(result.current.currentRoomType).toBe(TchapRoomType.Forum);
            });
        });
    });

    it("should fetch new room type on store update", () => {
        // Mock the store to return some room type
        vi.spyOn(TchapStore.instance, "getRoomType").mockImplementation(async () => {
            return TchapRoomType.Private;
        });

        vi.spyOn(TchapStore, "getTchapTypeChangedEventName").mockImplementation((room) => {
            return "UPDATE";
        });

        act(async () => {
            const { result } = renderHook(() => useTchapRoom(room));
            // initialisation
            await waitFor(() => {
                expect(result.current.currentRoomType).toBe(TchapRoomType.Private);
            });

            // Mock the uodate of the roomType
            vi.spyOn(TchapStore.instance, "getRoomType").mockImplementation(async () => {
                return TchapRoomType.External;
            });

            TchapStore.instance.emit("UPDATE");
            await waitFor(() => {
                expect(result.current.currentRoomType).toBe(TchapRoomType.External);
            });
        });
    });
});
