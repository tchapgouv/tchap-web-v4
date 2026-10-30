// @vitest-environment happy-dom

import { afterEach, beforeEach, describe, expect, it, type Mocked, vi, type Mock as vitest_Mock } from "vitest";
import React from "react";
import { cleanup, render, screen, waitFor } from "test-utils-rtl";
import userEvent from "@testing-library/user-event";
import { EventTimeline, type MatrixClient, MatrixError, Room } from "matrix-js-sdk/src/matrix";


import InviteDialog from "~tchap-web/src/components/views/dialogs/InviteDialog";
import { InviteKind } from "~tchap-web/src/components/views/dialogs/InviteDialogTypes";
import DMRoomMap from "~tchap-web/src/utils/DMRoomMap";
import SdkConfig from "~tchap-web/src/SdkConfig";
import { type ValidatedServerConfig } from "~tchap-web/src/utils/ValidatedServerConfig";
import { type IConfigOptions } from "~tchap-web/src/IConfigOptions";
import { type IProfileInfo } from "~tchap-web/src/hooks/useProfileInfo";
import Modal from "~tchap-web/src/Modal";
import { filterConsole, flushPromises, getMockClientWithEventEmitter, TestSDKContext } from "test-utils";
import { TchapStore } from "~tchap-web/src/tchap/util/TchapStore";
import { TchapRoomType } from "~tchap-web/src/tchap/@types/tchap";
import TchapUtils from "~tchap-web/src/tchap/util/TchapUtils";
import { SDKContextClass } from "~tchap-web/src/contexts/SDKContextClass";

// Mock TchapUtils to control checkIfEmailIsExternal in tests
vi.mock("~tchap-web/src/tchap/util/TchapUtils");

const getSearchField = () => screen.getByTestId("invite-dialog-input");

const enterIntoSearchField = async (value: string) => {
    const searchField = getSearchField();
    await userEvent.clear(searchField);
    await userEvent.type(searchField, value + "{enter}");
};

const pasteIntoSearchField = async (value: string) => {
    const searchField = getSearchField();
    await userEvent.clear(searchField);
    searchField.focus();
    await userEvent.paste(value);
    await userEvent.type(searchField, value + "{enter}");
};

const roomId = "!111111111111111111:example.org";
const aliceId = "@alice:example.org";
const aliceEmail = "foobar@email.com";
const aliceUppercaseEmail = "FOOBar@email.com";

const aliceProfileInfo: IProfileInfo = {
    user_id: aliceId,
    display_name: "Alice",
};

const bobId = "@bob:example.org";
const bobProfileInfo: IProfileInfo = {
    user_id: bobId,
    display_name: "Bob",
};

const externalEmail = "imexternal@test.fr";

describe("InviteDialog", () => {
    let mockClient: Mocked<MatrixClient>;
    let room: Room;
    let sdkContext: TestSDKContext;

    filterConsole(
        "Error retrieving profile for userId @carol:example.com",
        "Error retrieving profile for userId @localpart:server.tld",
        "Error retrieving profile for userId @localpart:server:tld",
        "[Invite:Recents] Excluding @alice:example.org from recents",
    );

    beforeEach(() => {
        mockClient = getMockClientWithEventEmitter({
            getUserId: vi.fn().mockReturnValue(bobId),
            getDomain: vi.fn().mockReturnValue("tchap.gouv.fr"),
            getSafeUserId: vi.fn().mockReturnValue(bobId),
            isGuest: vi.fn().mockReturnValue(false),
            getVisibleRooms: vi.fn().mockReturnValue([]),
            getRoom: vi.fn(),
            getRooms: vi.fn(),
            getAccountData: vi.fn(),
            getPushActionsForEvent: vi.fn(),
            mxcUrlToHttp: vi.fn().mockReturnValue(""),
            isRoomEncrypted: vi.fn().mockReturnValue(false),
            getProfileInfo: vi.fn().mockImplementation(async (userId: string) => {
                if (userId === aliceId) return aliceProfileInfo;
                if (userId === bobId) return bobProfileInfo;

                throw new MatrixError({
                    errcode: "M_NOT_FOUND",
                    error: "Profile not found",
                });
            }),
            getIdentityServerUrl: vi.fn(),
            searchUserDirectory: vi.fn().mockResolvedValue({}),
            lookupThreePid: vi.fn(),
            registerWithIdentityServer: vi.fn().mockResolvedValue({
                access_token: "access_token",
                token: "token",
            }),
            getOpenIdToken: vi.fn().mockResolvedValue({}),
            getIdentityAccount: vi.fn().mockResolvedValue({}),
            getTerms: vi.fn().mockResolvedValue({ policies: [] }),
            supportsThreads: vi.fn().mockReturnValue(false),
            isInitialSyncComplete: vi.fn().mockReturnValue(true),
            getClientWellKnown: vi.fn().mockResolvedValue({}),
        });
        SdkConfig.put({ validated_server_config: {} as ValidatedServerConfig } as IConfigOptions);
        DMRoomMap.makeShared(mockClient);

        room = new Room(roomId, mockClient, mockClient.getSafeUserId());

        vi.spyOn(DMRoomMap.shared(), "getUniqueRoomsWithIndividuals").mockReturnValue({
            [aliceId]: room,
        });
        mockClient.getRooms.mockReturnValue([room]);
        mockClient.getRoom.mockReturnValue(room);
        mockClient.getIdentityServerUrl.mockReturnValue("https://identity-server");
        mockClient.lookupThreePid.mockResolvedValue({});
        sdkContext = new TestSDKContext();
        // @ts-ignore UserMenuViewModel uses SDKContext in the constructor
        SDKContextClass.instance = sdkContext;
        sdkContext._client = mockClient;

        // Default: emails are not external
        vi.spyOn(TchapUtils, "checkIfEmailIsExternal").mockResolvedValue(false);

    });

    afterEach(() => {
        Modal.closeCurrentModal();
        cleanup();
        SDKContextClass.instance.onLoggedOut();
        vi.resetAllMocks();
    });

    it("should entered values as lowercase", async () => {
        vi.spyOn(TchapStore.instance, "getRoomType").mockImplementation(async (room) => {
            return TchapRoomType.Private;
        });

        vi.spyOn(room.getLiveTimeline().getState(EventTimeline.FORWARDS)!, "mayClientSendStateEvent").mockReturnValue(
            true,
        );

        render(<InviteDialog kind={InviteKind.Invite} roomId={roomId} onFinished={vi.fn()} />);

        const input = getSearchField();
        input.focus();

        // Type and enter
        await enterIntoSearchField(aliceUppercaseEmail);

        // Because it has been transoformed to lowercase, it should not be found in the document
        expect(screen.queryByText(aliceUppercaseEmail)).not.toBeInTheDocument();

        expect(screen.queryByText(aliceEmail)).toBeInTheDocument();

        // If it was transformed correctly to a pill, the input should have no value
        expect(input).toHaveValue("");
    });

    it("should add pasted email values as lowercase", async () => {
        vi.spyOn(TchapStore.instance, "getRoomType").mockImplementation(async (room) => {
            return TchapRoomType.Private;
        });
        vi.spyOn(room.getLiveTimeline().getState(EventTimeline.FORWARDS)!, "mayClientSendStateEvent").mockReturnValue(
            true,
        );
        render(<InviteDialog kind={InviteKind.Invite} roomId={roomId} onFinished={vi.fn()} />);

        // Juste paste some values without enter
        await pasteIntoSearchField(aliceUppercaseEmail);

        await flushPromises();

        // Because it has been transoformed to lowercase, it shoyld not be found in the document
        expect(screen.queryByText(aliceUppercaseEmail)).not.toBeInTheDocument();

        // contrary to the entered values, on this paste test we don't enter, so we have multiple result
        expect(screen.queryAllByText(aliceEmail)[0]).toBeInTheDocument();
    });

    it("should not crash if empty values are entered", async () => {
        vi.spyOn(TchapStore.instance, "getRoomType").mockImplementation(async (room) => {
            return TchapRoomType.Private;
        });
        vi.spyOn(room.getLiveTimeline().getState(EventTimeline.FORWARDS)!, "mayClientSendStateEvent").mockReturnValue(
            true,
        );

        render(<InviteDialog kind={InviteKind.Invite} roomId={roomId} onFinished={vi.fn()} />);

        const input = getSearchField();
        input.focus();

        // Type and enter
        await enterIntoSearchField("");

        expect(input).toHaveValue("");
    });

    it("should not crash if empty values are pasted", async () => {
        vi.spyOn(TchapStore.instance, "getRoomType").mockImplementation(async (room) => {
            return TchapRoomType.Private;
        });
        vi.spyOn(room.getLiveTimeline().getState(EventTimeline.FORWARDS)!, "mayClientSendStateEvent").mockReturnValue(
            true,
        );

        render(<InviteDialog kind={InviteKind.Invite} roomId={roomId} onFinished={vi.fn()} />);
        const input = getSearchField();

        // Juste paste some values without enter
        await pasteIntoSearchField("");

        expect(input).toHaveValue("");
    });

    it("should display external warning when a user email is selected in private room", async () => {
        // Mock checkIfEmailIsExternal to return true for external emails
        (TchapUtils.checkIfEmailIsExternal as vitest_Mock).mockResolvedValue(true);

        vi.spyOn(TchapStore.instance, "getRoomType").mockImplementation(async (room) => {
            return TchapRoomType.Private;
        });
        vi.spyOn(room.getLiveTimeline().getState(EventTimeline.FORWARDS)!, "mayClientSendStateEvent").mockReturnValue(
            true,
        );
        render(<InviteDialog kind={InviteKind.Invite} roomId={roomId} onFinished={vi.fn()} />);

        // Paste an external email
        await pasteIntoSearchField(externalEmail);
        await flushPromises();

        await waitFor(() => {
            expect(screen.getByTestId("tc_warning")).toMatchSnapshot();
        });
    });

    it("should not display external warning when room is already open to external users", async () => {
        // Mock checkIfEmailIsExternal to return true for external emails
        (TchapUtils.checkIfEmailIsExternal as vitest_Mock).mockResolvedValue(true);

        vi.spyOn(TchapStore.instance, "getRoomType").mockImplementation(async (room) => {
            return TchapRoomType.External;
        });
        vi.spyOn(room.getLiveTimeline().getState(EventTimeline.FORWARDS)!, "mayClientSendStateEvent").mockReturnValue(
            true,
        );
        render(<InviteDialog kind={InviteKind.Invite} roomId={roomId} onFinished={vi.fn()} />);

        // Juste paste some values without enter
        await pasteIntoSearchField(externalEmail);
        await flushPromises();

        await waitFor(() => {
            expect(screen.queryByTestId("tc_warning")).not.toBeInTheDocument();
        });
    });

    it("should warn when room is public so not possible to add external", async () => {
        // Mock checkIfEmailIsExternal to return true for external emails
        (TchapUtils.checkIfEmailIsExternal as vitest_Mock).mockResolvedValue(true);

        vi.spyOn(TchapStore.instance, "getRoomType").mockImplementation(async (room) => {
            return TchapRoomType.Forum;
        });
        vi.spyOn(room.getLiveTimeline().getState(EventTimeline.FORWARDS)!, "mayClientSendStateEvent").mockReturnValue(
            true,
        );

        render(<InviteDialog kind={InviteKind.Invite} roomId={roomId} onFinished={vi.fn()} />);

        // Juste paste some values without enter
        await pasteIntoSearchField(externalEmail);
        await flushPromises();

        await waitFor(() => {
            expect(screen.getByTestId("tc_warning")).toMatchSnapshot();
        });
    });

    it("should invite button be disable when user doesnt have permission to change to external room", async () => {
        // Mock checkIfEmailIsExternal to return true for external emails
        (TchapUtils.checkIfEmailIsExternal as vitest_Mock).mockResolvedValue(true);

        vi.spyOn(TchapStore.instance, "getRoomType").mockImplementation(async (room) => {
            return TchapRoomType.Private;
        });

        // No permission to change access_rules
        vi.spyOn(room.getLiveTimeline().getState(EventTimeline.FORWARDS)!, "mayClientSendStateEvent").mockReturnValue(
            false,
        );

        render(<InviteDialog kind={InviteKind.Invite} roomId={roomId} onFinished={vi.fn()} />);

        // Juste paste some values without enter
        await pasteIntoSearchField(externalEmail);
        await flushPromises();

        await waitFor(() => {
            expect(screen.getByRole("button", { name: "Invite" })).toHaveAttribute("aria-disabled", "true");
        });
    });

    it("should not show any warning if the invitedialog type is DM", async () => {
        // Mock checkIfEmailIsExternal to return true for external emails
        (TchapUtils.checkIfEmailIsExternal as vitest_Mock).mockResolvedValue(true);

        vi.spyOn(TchapStore.instance, "getRoomType").mockImplementation(async (room) => {
            return TchapRoomType.Private;
        });
        vi.spyOn(room.getLiveTimeline().getState(EventTimeline.FORWARDS)!, "mayClientSendStateEvent").mockReturnValue(
            true,
        );

        render(<InviteDialog kind={InviteKind.Dm} onFinished={vi.fn()} />);

        // Juste paste some values without enter
        await pasteIntoSearchField(externalEmail);
        await flushPromises();

        await waitFor(() => {
            expect(screen.queryByTestId("tc_warning")).not.toBeInTheDocument();
        });
    });

    it("should display external warning when a text is mxId in encrypted room", async () => {
        (TchapUtils.isExternalHomeserver as vitest_Mock).mockResolvedValue(true);

        vi.spyOn(TchapStore.instance, "getRoomType").mockImplementation(async (room) => {
            return TchapRoomType.Private;
        });
        vi.spyOn(room.getLiveTimeline().getState(EventTimeline.FORWARDS)!, "mayClientSendStateEvent").mockReturnValue(
            true,
        );
        render(<InviteDialog kind={InviteKind.Invite} roomId={roomId} onFinished={vi.fn()} />);

        // Paste an external email
        await pasteIntoSearchField("@user.test-yopext.tchap.incubateur.net:ext01.tchap.incubateur.net");
        await flushPromises();

        await waitFor(() => {
            expect(screen.getByTestId("tc_warning")).toMatchSnapshot();
        });
    });
});
