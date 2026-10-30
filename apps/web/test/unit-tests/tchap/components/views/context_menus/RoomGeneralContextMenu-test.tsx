// @vitest-environment happy-dom

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { logRoles, render, screen } from "test-utils-rtl";

import { type MatrixClient, PendingEventOrdering, Room, JoinRule, KnownMembership } from "matrix-js-sdk/src/matrix";
import React from "react";

import { stubClient } from "test-utils/test-utils";
import { clearAllModals } from "test-utils";
import { ChevronFace } from "~tchap-web/src/components/structures/ContextMenu";
import {
    RoomGeneralContextMenu,
    type RoomGeneralContextMenuProps,
} from "~tchap-web/src/components/views/context_menus/RoomGeneralContextMenu";
import MatrixClientContext from "~tchap-web/src/contexts/MatrixClientContext";
import { MatrixClientPeg } from "~tchap-web/src/MatrixClientPeg";
import { DefaultTagID } from "~tchap-web/src/stores/room-list-v3/skip-list/tag";
import * as getTagsForRoomUtils from "~tchap-web/src/utils/room/getTagsForRoom";
import DMRoomMap from "~tchap-web/src/utils/DMRoomMap";
import TchapRoomUtils from "~tchap-web/src/tchap/util/TchapRoomUtils";

vi.mock("~tchap-web/src/tchap/util/TchapRoomUtils");

describe("RoomGeneralContextMenu", () => {
    const ROOM_ID = "!123:matrix.org";

    let room: Room;
    let mockClient: MatrixClient;

    let onFinished: () => void;

    const mockedTchapRoomUtils = vi.mocked(TchapRoomUtils);

    function getComponent(props?: Partial<RoomGeneralContextMenuProps>) {
        return render(
            <MatrixClientContext.Provider value={mockClient}>
                <RoomGeneralContextMenu
                    room={room}
                    onFinished={onFinished}
                    {...props}
                    managed={true}
                    mountAsChild={true}
                    left={1}
                    top={1}
                    chevronFace={ChevronFace.Left}
                />
            </MatrixClientContext.Provider>,
        );
    }

    beforeEach(() => {
        vi.clearAllMocks();

        stubClient();
        mockClient = vi.mocked(MatrixClientPeg.safeGet());

        room = new Room(ROOM_ID, mockClient, mockClient.getUserId() ?? "", {
            pendingEventOrdering: PendingEventOrdering.Detached,
        });

        const dmRoomMap = {
            getUserIdForRoomId: vi.fn().mockReturnValue(null),
        } as unknown as DMRoomMap;
        DMRoomMap.setShared(dmRoomMap);

        vi.spyOn(getTagsForRoomUtils, "getTagsForRoom").mockReturnValueOnce([
            DefaultTagID.DM,
            DefaultTagID.Favourite,
        ]);

        room.updateMyMembership(KnownMembership.Join);
        vi.spyOn(room, "canInvite").mockReturnValue(true);

        onFinished = vi.fn();
    });

    afterEach(async () => {
        await clearAllModals();
    });

    it("renders the default context menu", async () => {
        mockedTchapRoomUtils.getRoomJoinRule.mockImplementation(() => JoinRule.Public);
        const { container } = getComponent({});
        expect(container).toMatchSnapshot();
    });

    it("able the copy link button when joinrule is public", () => {
        mockedTchapRoomUtils.getRoomJoinRule.mockImplementation(() => JoinRule.Public);

        const { container } = getComponent({});

        logRoles(container);

        const roomLinkButton = screen.getByRole("menuitem", { name: "Copy link" });

        expect(roomLinkButton).not.toHaveAttribute("aria-disabled");
    });

    it("disable the copy link button when joinrule is not public", () => {
        mockedTchapRoomUtils.getRoomJoinRule.mockImplementation(() => JoinRule.Invite);

        getComponent({});

        const roomLinkButton = screen.getByRole("menuitem", { name: "Copy link" });

        expect(roomLinkButton).toHaveAttribute("aria-disabled", "true");
    });
});
