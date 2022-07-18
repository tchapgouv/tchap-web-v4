
import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';

import TchapCreateRoomDialog from "../../../../src/components/views/dialogs/TchapCreateRoomDialog";
import { TchapRoomType } from '../../../../src/@types/tchap';
import { MatrixClientPeg } from 'matrix-react-sdk/src/MatrixClientPeg';
import { EventEmitter } from "events";

import TchapUtils from '../../../../src/util/TchapUtils';



/*
does not work, undefined is answered anyway, why??
jest.mock('../../src/lib/createTchapRoom',() => {
    return {
      __esModule: true,
      default: jest.fn(() => 42),
      roomCreateOptions: jest.fn(() => 43),
    };
  });
*/

describe("TchapCreateRoomDiaglog", () => {
    let mockClient;
    const roomName = "roomName";
    
    const defaultProps = {
        defaultPublic: undefined, // unused for Tchap version
        defaultName: undefined, // unused for Tchap version
        parentSpace: undefined, // unused for Tchap version
        defaultEncrypted: undefined, // unused for Tchap version
        onFinished: jest.fn()
    };

    const submitForm = async (wrapper: ReactWrapper) =>{
        act(() => {
            wrapper.find('form').simulate('submit', { preventDefault: () => { } });
        })
        await new Promise(process.nextTick);
    }
    
    const getComponent = (props ={}): ReactWrapper =>
            mount(<TchapCreateRoomDialog {...defaultProps} {...props} />);

    beforeEach(() => {
        jest.resetAllMocks();
        
        //mock matrix client
        mockClient = new MockClient();
        jest.spyOn(MatrixClientPeg, 'get').mockReturnValue(mockClient);
        
        //mock tchap utils
        jest.spyOn(TchapUtils, 'getShortDomain').mockReturnValue("Tchap");
    });

    it("Should not create any room wihout a name", async () => {
        const onFinished = jest.fn();
        const wrapper = getComponent({ onFinished});
        // force into valid state
        act(() => {
            wrapper.setState({
                name: "",
                tchapRoomType: TchapRoomType.Private
            });
        });

        await submitForm(wrapper);

        expect(onFinished).toBeCalledTimes(0);
    })

    it("Should create a room with default value", async () => {
        const onFinished = jest.fn();
        const defaultName = "defaultName";
        const wrapper = getComponent({ onFinished, defaultName});
        // force into valid state
        act(() => {
            wrapper.setState({
                tchapRoomType: TchapRoomType.Private
            });
        });

        await submitForm(wrapper);

        expect(onFinished).toBeCalledTimes(1);
    })

    it("Should create a private room", async () => {
        const onFinished = jest.fn();
        
        const privateRoomExpectedOpts = {
            createOpts: {
                name: roomName,
                creation_content: {
                    "m.federate": true,
                },
                accessRule: "restricted",
                visibility: "private",
                preset: "private_chat",
            },
            guestAccess: false,
            joinRule: "invite",
            encryption: true,
            historyVisibility: "joined",
        };
        const wrapper = getComponent({ onFinished});
        
        // force into valid state
        act(() => {
            wrapper.setState({
                name: roomName,
                tchapRoomType: TchapRoomType.Private
            });
        });

        await submitForm(wrapper);

        expect(onFinished).toHaveBeenCalledWith(true, privateRoomExpectedOpts);
    })


    it("Should create a public room without federation", async () => {
        const onFinished = jest.fn();
        
        const publicRoomWithoutFederationExpectedOpts = {
            createOpts: {
                name: roomName,
                creation_content: {
                    "m.federate": false,
                },
                accessRule: "restricted",
                visibility: "public",
                preset: "public_chat",
            },
            guestAccess: false,
            joinRule: "public",
            encryption: false,
            historyVisibility: "shared",
        };
        const wrapper = getComponent({ onFinished});
        
        // force into valid state
        act(() => {
            wrapper.setState({
                name: roomName,
                tchapRoomType: TchapRoomType.Forum, 
                isFederated:false
            });
        });

        await submitForm(wrapper);

        expect(onFinished).toHaveBeenCalledWith(true, publicRoomWithoutFederationExpectedOpts);
    })

    it("Should create a public room with federation", async () => {
        const onFinished = jest.fn();
        
        const publicRoomWithFederationExpectedOpts = {
            createOpts: {
                name: roomName,
                creation_content: {
                    "m.federate": true,
                },
                accessRule: "restricted",
                visibility: "public",
                preset: "public_chat",
            },
            guestAccess: false,
            joinRule: "public",
            encryption: false,
            historyVisibility: "shared",
        };
        const wrapper = getComponent({ onFinished});
        
        // force into valid state
        act(() => {
            wrapper.setState({
                name: roomName,
                tchapRoomType: TchapRoomType.Forum, 
                isFederated:true
            });
        });
        
        await submitForm(wrapper);

        expect(onFinished).toHaveBeenCalledWith(true, publicRoomWithFederationExpectedOpts);
    })

    it("Should create an external room", async () => {
        const onFinished = jest.fn();
        
        const externalRoomExpectedOpts = {
            createOpts: {
                name: roomName,
                creation_content: {
                    "m.federate": true,
                },
                accessRule: "unrestricted",
                visibility: "private",
                preset: "private_chat",
            },
            guestAccess: false,
            joinRule: "invite",
            encryption: true,
            historyVisibility: "joined",
        };
        const wrapper = getComponent({ onFinished});
        
        // set state
        act(() => {
            wrapper.setState({
                name: roomName,
                tchapRoomType: TchapRoomType.External
            });
        });
        
        await submitForm(wrapper);

        expect(onFinished).toHaveBeenCalledWith(true, externalRoomExpectedOpts);
    })
})


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


