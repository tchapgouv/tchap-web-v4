/*
Copyright 2026 Element Creations Ltd.
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React from "react";
import {
    render,
    screen,
    fireEvent,
    act,
    cleanup,
    waitFor,
    within,
} from "jest-matrix-react";
import { mocked } from "jest-mock";
import { type MatrixClient, type Room } from "matrix-js-sdk/src/matrix";

import { MatrixClientPeg } from "~tchap-web/src/MatrixClientPeg";
import { MetaSpace, type SpaceKey } from "~tchap-web/src/stores/spaces";
import { shouldShowComponent } from "~tchap-web/src/customisations/helpers/UIComponents";
import { UIComponent } from "~tchap-web/src/settings/UIFeature";
import {
    mkStubRoom,
    wrapInMatrixClientContext,
    wrapInSdkContext,
} from "~tchap-web/test/test-utils";
import { TestSDKContext } from "~tchap-web/test/unit-tests/TestSDKContext.ts";
import DMRoomMap from "~tchap-web/src/utils/DMRoomMap";
import { type SpaceNotificationState } from "~tchap-web/src/stores/notifications/SpaceNotificationState";
import SettingsStore from "~tchap-web/src/settings/SettingsStore";
import UnwrappedSpacePanel from "~tchap-web/src/components/views/spaces/SpacePanel";
import defaultDispatcher from "~tchap-web/src/dispatcher/dispatcher";
import { Action } from "~tchap-web/src/dispatcher/actions";
import TchapUIFeature from "~tchap-web/src/tchap/util/TchapUIFeature";

// DND test utilities based on
// https://github.com/colinrobertbrooks/react-beautiful-dnd-test-utils/issues/18#issuecomment-1373388693
enum Keys {
    SPACE = 32,
    ARROW_LEFT = 37,
    ARROW_UP = 38,
    ARROW_RIGHT = 39,
    ARROW_DOWN = 40,
}

/* oxlint-disable typescript/prefer-literal-enum-member */
enum DragDirection {
    LEFT = Keys.ARROW_LEFT,
    UP = Keys.ARROW_UP,
    RIGHT = Keys.ARROW_RIGHT,
    DOWN = Keys.ARROW_DOWN,
}
/* oxlint-enable typescript/prefer-literal-enum-member */

// taken from https://github.com/hello-pangea/dnd/blob/main/test/unit/integration/util/controls.ts#L20
const createTransitionEndEvent = (): Event => {
    const event = new Event("transitionend", {
        bubbles: true,
        cancelable: true,
    }) as TransitionEvent;

    // cheating and adding property to event as
    // TransitionEvent constructor does not exist.
    // This is needed because of the following check
    //   https://github.com/atlassian/react-beautiful-dnd/blob/master/src/view/draggable/draggable.jsx#L130
    (event as any).propertyName = "transform";

    return event;
};

const pickUp = async (element: HTMLElement) => {
    fireEvent.keyDown(element, {
        keyCode: Keys.SPACE,
    });
    await screen.findByText(/You have lifted an item/i);

    act(() => {
        jest.runOnlyPendingTimers();
    });
};

const move = async (element: HTMLElement, direction: DragDirection) => {
    fireEvent.keyDown(element, {
        keyCode: direction,
    });
    await screen.findByText(
        /(You have moved the item | has been combined with)/i,
    );
};

const drop = async (element: HTMLElement) => {
    fireEvent.keyDown(element, {
        keyCode: Keys.SPACE,
    });
    fireEvent(element.parentElement!, createTransitionEndEvent());

    await screen.findByText(/You have dropped the item/i);
};

jest.mock("~tchap-web/src/stores/spaces/SpaceStore", () => {
    const EventEmitter = jest.requireActual("events");
    class MockSpaceStore extends EventEmitter {
        invitedSpaces: SpaceKey[] = [];
        enabledMetaSpaces: MetaSpace[] = [];
        spacePanelSpaces: string[] = [];
        activeSpace: SpaceKey = "!space1";
        getChildSpaces = () => [] as Room[];
        getNotificationState = () => null as SpaceNotificationState | null;
        setActiveSpace = jest.fn();
        moveRootSpace = jest.fn();
        start = jest.fn();
    }
    return MockSpaceStore;
});

jest.mock("~tchap-web/src/customisations/helpers/UIComponents", () => ({
    shouldShowComponent: jest.fn(),
}));

describe("<SpacePanel />", () => {
    const mockClient = {
        getUserId: jest.fn().mockReturnValue("@test:test"),
        getSafeUserId: jest.fn().mockReturnValue("@test:test"),
        getClientWellKnown: jest.fn(),
        mxcUrlToHttp: jest.fn(),
        getRoom: jest.fn(),
        isGuest: jest.fn(),
        getAccountData: jest.fn(),
        on: jest.fn(),
        off: jest.fn(),
        removeListener: jest.fn(),
        isVersionSupported: jest.fn().mockResolvedValue(true),
        doesServerSupportUnstableFeature: jest.fn().mockResolvedValue(false),
        getAuthMetadata: jest.fn().mockRejectedValue(new Error("Legacy auth")),
    } as unknown as MatrixClient;
    const sdkContext = new TestSDKContext();
    const SpacePanel = wrapInSdkContext(
        wrapInMatrixClientContext(UnwrappedSpacePanel),
        sdkContext,
    );

    const featureThreadName: string = "feature_thread";

    beforeAll(() => {
        jest.spyOn(MatrixClientPeg, "get").mockReturnValue(mockClient);
        jest.spyOn(MatrixClientPeg, "safeGet").mockReturnValue(mockClient);
        jest.spyOn(
            TchapUIFeature,
            "isFeatureActiveForHomeserver",
        ).mockImplementation(
            (featureName: string) => featureName === featureThreadName,
        );
        sdkContext._client = mockClient;
    });

    beforeEach(() => {
        sdkContext.spaceStore.enabledMetaSpaces.push(
            MetaSpace.Home,
            MetaSpace.Orphans,
            MetaSpace.VideoRooms,
        );
        mocked(shouldShowComponent).mockClear().mockReturnValue(true);
    });
    afterEach(() => {
        cleanup();
    });

    it("should show all activated MetaSpaces in the correct order", async () => {
        const originalGetValue = SettingsStore.getValue;
        const spySettingsStore = jest
            .spyOn(SettingsStore, "getValue")
            .mockImplementation((setting) => {
                return setting === "feature_video_rooms"
                    ? true
                    : originalGetValue(setting);
            });
        render(<SpacePanel />);

        // Inspect the order of the rendered MetaSpaces, excluding the "Create a space" button.
        const tree = screen.getByRole("tree", { name: "Spaces" });
        const spaceButtons = within(tree)
            .getAllByRole("treeitem")
            .filter(
                (el) =>
                    within(el).queryByRole("button", {
                        name: "Create a space",
                    }) === null,
            );

        const metaSpaceLabels = Array.from(spaceButtons).map((li) =>
            within(li)
                .getByRole("button", { name: /^(?!Options$).*/ }) // filter out the 'options' buttons within the buttons
                .getAttribute("aria-label"),
        );
        expect(metaSpaceLabels).toEqual(["Home", "Other rooms", "Conferences"]);

        spySettingsStore.mockRestore();
    });

    describe("create new space button", () => {
        it("renders create space button when UIComponent.CreateSpaces component should be shown", () => {
            render(<SpacePanel />);
            screen.getByTestId("create-space-button");
        });

        it("does not render create space button when UIComponent.CreateSpaces component should not be shown", () => {
            mocked(shouldShowComponent).mockReturnValue(false);
            render(<SpacePanel />);
            expect(shouldShowComponent).toHaveBeenCalledWith(
                UIComponent.CreateSpaces,
            );
            expect(screen.queryByTestId("create-space-button")).toBeFalsy();
        });
    });

    it("should allow rearranging via drag and drop", async () => {
        (sdkContext.spaceStore.spacePanelSpaces as any) = [
            mkStubRoom("!room1:server", "Room 1", mockClient),
            mkStubRoom("!room2:server", "Room 2", mockClient),
            mkStubRoom("!room3:server", "Room 3", mockClient),
        ];
        DMRoomMap.makeShared(mockClient);
        jest.useFakeTimers();

        const { getByLabelText } = render(<SpacePanel />);

        const room1 = getByLabelText("Room 1");
        await pickUp(room1);
        await move(room1, DragDirection.DOWN);
        await drop(room1);

        expect(sdkContext.spaceStore.moveRootSpace).toHaveBeenCalledWith(0, 1);
    });

    it("should be able to open the user menu via dispatcher", async () => {
        const { baseElement } = render(<SpacePanel />);
        defaultDispatcher.dispatch({ action: Action.ToggleUserMenu });
        await waitFor(() => {
            // Menu exists outside the component due to Portals, so select it manually.
            expect(
                baseElement.querySelector("div[aria-label='User menu']"),
            ).toBeInTheDocument();
        });
    });

    // :TCHAP:
    describe("tchap custo", () => {
        it("should render as expected", async () => {
            const { container } = render(<SpacePanel />);

            expect(container).toMatchSnapshot();
        });

        it("returns true when the the homeserver include thread feature", () => {
            jest.spyOn(
                TchapUIFeature,
                "isFeatureActiveForHomeserver",
            ).mockReturnValue(true);
            const { container } = render(<SpacePanel />);

            expect(
                container.getElementsByClassName(
                    "mx_ThreadsActivityCentre_container",
                ).length,
            ).toBe(1);
        });

        it("returns false when the the homeserver doesnt include thread feature", async () => {
            jest.spyOn(
                TchapUIFeature,
                "isFeatureActiveForHomeserver",
            ).mockReturnValue(false);
            const { container } = render(<SpacePanel />);

            expect(
                container.getElementsByClassName(
                    "mx_ThreadsActivityCentre_container",
                ).length,
            ).toBe(0);
        });
    });
});
