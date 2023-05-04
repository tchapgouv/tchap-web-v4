import React from "react";
// eslint-disable-next-line deprecate/import
import { mount, ReactWrapper } from "enzyme";
// eslint-disable-next-line deprecate/import
import { act } from "react-dom/test-utils";
import toJson from "enzyme-to-json";
import { MatrixClientPeg } from "matrix-react-sdk/src/MatrixClientPeg";
import { EventEmitter } from "events";

import { TchapRoomType } from "../../../../../src/tchap/@types/tchap";
import TchapUtils from "../../../../../src/tchap/util/TchapUtils";
import TchapCreateRoomDialog from "../../../../../src/components/views/dialogs/TchapCreateRoomDialog";

//mocking module with jest.mock should be done outside the test. Before any import of the mocked module.
//I could not make a mock of TchapCreateRoomDialog, the real implementation was taken each time. Then I used jest spyOn

/*    return {
    jest.mock('../../src/lib/createTchapRoom',() => {
        __esModule: true,
        default: jest.fn(() => 42),
        roomCreateOptions: jest.fn(() => 43),
    };
});
*/

/*
 * This unit test targets the TchapCreateRoomDialog react component. It is mounted virtually to be tested thanks to enzyme framework.
 * With the act function, a state is set inside the component, meanwhile the submitForm function submits the form in order to make action on the internal state of the component.
 * No html snapshot is used in this test. Jest mocking is used to simulate behaviour of depending modules such as TchapUtils, TchapCreateRoomDialog, MatrixClientPeg
 */
describe("TchapCreateRoomDialog", () => {
    let mockClient;
    const roomName = "roomName";

    // default props for the component, will be overriden
    const defaultProps = {
        defaultPublic: undefined, // unused for Tchap version
        defaultName: undefined, // unused for Tchap version
        parentSpace: undefined, // unused for Tchap version
        defaultEncrypted: undefined, // unused for Tchap version
        onFinished: jest.fn(),
    };

    //simulate the submit of the form
    const submitForm = async (wrapper: ReactWrapper) => {
        act(() => {
            wrapper.find("form").simulate("submit", { preventDefault: () => {} });
        });
        await new Promise(process.nextTick);
    };

    // build a new component using enzyme
    const getComponent = (props = {}): ReactWrapper => mount(<TchapCreateRoomDialog {...defaultProps} {...props} />);

    /*
    // Note : you can also build a shallow component https://fr.reactjs.org/docs/shallow-renderer.html
    // can be used for simple component
    // not used in this test
    const getShallowComponent = (props={}) => {
        shallow(<TchapCreateRoomDialog {...defaultProps} {...props} />);
    }
    */

    beforeEach(() => {
        jest.resetAllMocks();

        //mock matrix client
        mockClient = new MockClient();
        jest.spyOn(MatrixClientPeg, "get").mockReturnValue(mockClient);

        //mock tchap utils
        jest.spyOn(TchapUtils, "getShortDomain").mockReturnValue("AGENT");
        jest.spyOn(TchapUtils, "getRoomFederationOptions").mockReturnValue({
            showForumFederationSwitch: true,
            forumFederationSwitchDefaultValue: false,
        });
    });

    it("should render the whole component with with the allow access switch", () => {
        jest.spyOn(TchapUtils, "getRoomFederationOptions").mockReturnValue({
            showForumFederationSwitch: true,
            forumFederationSwitchDefaultValue: false,
        });
        const component = getComponent();
        const allowAccessSwitch = component.find(".mx_SettingsFlag");
        expect(toJson(allowAccessSwitch)).toMatchSnapshot(
            "allow access switch is present, allows other domain than AGENT",
        );
    });

    it("should render the room dialog without the allow access switch", () => {
        jest.spyOn(TchapUtils, "getRoomFederationOptions").mockReturnValue({
            showForumFederationSwitch: false,
            forumFederationSwitchDefaultValue: false,
        });
        const component = getComponent();
        const allowAccessSwitch = component.find(".mx_SettingsFlag");
        expect(allowAccessSwitch).toEqual({});
    });

    it("Should not create any room wihout a name", async () => {
        const onFinished = jest.fn();
        const wrapper = getComponent({ onFinished });
        // set state in component
        act(() => {
            wrapper.setState({
                name: "",
                tchapRoomType: TchapRoomType.Private,
            });
        });

        await submitForm(wrapper);

        expect(onFinished).toBeCalledTimes(0);
    });

    it("Should create a room with default value", async () => {
        const onFinished = jest.fn();
        const defaultName = "defaultName";
        const wrapper = getComponent({ onFinished, defaultName });
        // set state in component
        act(() => {
            wrapper.setState({
                tchapRoomType: TchapRoomType.Private,
            });
        });

        await submitForm(wrapper);

        expect(onFinished).toBeCalledTimes(1);
    });

    it("Should create a private room", async () => {
        const onFinished = jest.fn();

        const privateRoomExpectedOpts = {
            createOpts: {
                name: roomName,
                creation_content: {
                    "m.federate": true,
                },
                initial_state: [
                    {
                        content: {
                            rule: "restricted",
                        },
                        state_key: "",
                        type: "im.vector.room.access_rules",
                    },
                ],
                visibility: "private",
                preset: "private_chat",
            },
            guestAccess: false,
            joinRule: "invite",
            encryption: true,
            historyVisibility: "invited",
        };

        const wrapper = getComponent({ onFinished });

        // set state in component
        act(() => {
            wrapper.setState({
                name: roomName,
                tchapRoomType: TchapRoomType.Private,
                showFederateSwitch: false,
            });
        });

        await submitForm(wrapper);

        expect(onFinished).toHaveBeenCalledWith(true, privateRoomExpectedOpts);
    });

    it("Should create a public room without federation", async () => {
        const onFinished = jest.fn();

        const publicRoomWithoutFederationExpectedOpts = {
            createOpts: {
                name: roomName,
                creation_content: {
                    "m.federate": false,
                },
                initial_state: [
                    {
                        content: {
                            rule: "restricted",
                        },
                        state_key: "",
                        type: "im.vector.room.access_rules",
                    },
                ],
                visibility: "public",
                preset: "public_chat",
            },
            guestAccess: false,
            joinRule: "public",
            encryption: false,
            historyVisibility: "shared",
        };
        const wrapper = getComponent({ onFinished });

        // set state in component
        act(() => {
            wrapper.setState({
                name: roomName,
                tchapRoomType: TchapRoomType.Forum,
                forumFederationSwitchValue: false,
                showFederateSwitch: true,
            });
        });

        await submitForm(wrapper);

        expect(onFinished).toHaveBeenCalledWith(true, publicRoomWithoutFederationExpectedOpts);
    });

    it("Should create a public room with federation and switch", async () => {
        const onFinished = jest.fn();

        const publicRoomWithFederationExpectedOpts = {
            createOpts: {
                name: roomName,
                creation_content: {
                    "m.federate": true,
                },
                initial_state: [
                    {
                        content: {
                            rule: "restricted",
                        },
                        state_key: "",
                        type: "im.vector.room.access_rules",
                    },
                ],
                visibility: "public",
                preset: "public_chat",
            },
            guestAccess: false,
            joinRule: "public",
            encryption: false,
            historyVisibility: "shared",
        };
        const wrapper = getComponent({ onFinished });

        // set state in component
        act(() => {
            wrapper.setState({
                name: roomName,
                tchapRoomType: TchapRoomType.Forum,
                forumFederationSwitchValue: true,
                showFederateSwitch: true,
            });
        });

        await submitForm(wrapper);

        expect(onFinished).toHaveBeenCalledWith(true, publicRoomWithFederationExpectedOpts);
    });

    it("Should create a public room with federation but no switch", async () => {
        const onFinished = jest.fn();

        const publicRoomWithFederationExpectedOpts = {
            createOpts: {
                name: roomName,
                creation_content: {
                    "m.federate": true,
                },
                initial_state: [
                    {
                        content: {
                            rule: "restricted",
                        },
                        state_key: "",
                        type: "im.vector.room.access_rules",
                    },
                ],
                visibility: "public",
                preset: "public_chat",
            },
            guestAccess: false,
            joinRule: "public",
            encryption: false,
            historyVisibility: "shared",
        };
        const wrapper = getComponent({ onFinished });

        // set state in component
        act(() => {
            wrapper.setState({
                name: roomName,
                tchapRoomType: TchapRoomType.Forum,
                showFederateSwitch: false,
            });
        });

        await submitForm(wrapper);

        expect(onFinished).toHaveBeenCalledWith(true, publicRoomWithFederationExpectedOpts);
    });

    it("Should create an external room", async () => {
        const onFinished = jest.fn();

        const externalRoomExpectedOpts = {
            createOpts: {
                name: roomName,
                creation_content: {
                    "m.federate": true,
                },
                initial_state: [
                    {
                        content: {
                            rule: "unrestricted",
                        },
                        state_key: "",
                        type: "im.vector.room.access_rules",
                    },
                ],
                visibility: "private",
                preset: "private_chat",
            },
            guestAccess: false,
            joinRule: "invite",
            encryption: true,
            historyVisibility: "invited",
        };
        const wrapper = getComponent({ onFinished });

        // set state in component
        act(() => {
            wrapper.setState({
                name: roomName,
                tchapRoomType: TchapRoomType.External,
                showFederateSwitch: false,
            });
        });

        await submitForm(wrapper);

        expect(onFinished).toHaveBeenCalledWith(true, externalRoomExpectedOpts);
    });
});

class MockClient extends EventEmitter {
    // getUserId = jest.fn();
    // getKeyBackupVersion = jest.fn().mockResolvedValue(undefined);
    // getRooms = jest.fn().mockReturnValue([]);
    // doesServerSupportUnstableFeature = jest.fn().mockResolvedValue(true);
    // isCrossSigningReady = jest.fn().mockResolvedValue(true);
    // isSecretStorageReady = jest.fn().mockResolvedValue(true);
    // isCryptoEnabled = jest.fn().mockReturnValue(true);
    // isInitialSyncComplete = jest.fn().mockReturnValue(true);
    // getKeyBackupEnabled = jest.fn();
    // getStoredDevicesForUser = jest.fn().mockReturnValue([]);
    // getCrossSigningId = jest.fn();
    // getStoredCrossSigningForUser = jest.fn();
    // waitForClientWellKnown = jest.fn();
    // downloadKeys = jest.fn();
    // isRoomEncrypted = jest.fn();
    // getClientWellKnown = jest.fn();
    getDomain = jest.fn();
}
