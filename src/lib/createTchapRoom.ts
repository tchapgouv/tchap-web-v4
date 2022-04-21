import * as matrixJsSdk from "matrix-js-sdk";

import { IOpts } from "../../../matrix-react-sdk-v4/src/createRoom";
import { TchapRoomAccessRule, TchapRoomType } from "../@types/tchap";

export interface ITchapCreateRoomOpts extends matrixJsSdk.ICreateRoomOpts{
    accessRule?: TchapRoomAccessRule;
}

export const DEFAULT_FEDERATE_VALUE = true;

/**
 * Build the room creation options
 * @param name name of the room
 * @param tchapRoomType type of room
 * @param federate is the room federated
 * @returns rooms options
 */
export default function roomCreateOptions(name: string, tchapRoomType: TchapRoomType, federate?: boolean): IOpts {
    federate = (federate != undefined) ? federate : DEFAULT_FEDERATE_VALUE;
    const opts: IOpts = {};
    const createRoomOpts: ITchapCreateRoomOpts = {};
    opts.createOpts = createRoomOpts;

    //tchap common options
    createRoomOpts.name = name;
    opts.guestAccess = false; //guest access are not authorized in tchap

    createRoomOpts.creation_content = { 'm.federate': federate };

    switch (tchapRoomType) {
        case TchapRoomType.Forum: {
            //"Forum" only for tchap members and not encrypted
            createRoomOpts.accessRule = TchapRoomAccessRule.Restricted;
            createRoomOpts.visibility = matrixJsSdk.Visibility.Public;
            createRoomOpts.preset = matrixJsSdk.Preset.PublicChat;
            opts.joinRule = matrixJsSdk.JoinRule.Public;
            opts.encryption = false;
            opts.historyVisibility = matrixJsSdk.HistoryVisibility.Shared;
            break;
        }
        case TchapRoomType.Private: {
            //"Salon", only for tchap member and encrypted
            createRoomOpts.accessRule = TchapRoomAccessRule.Restricted;
            createRoomOpts.visibility =matrixJsSdk. Visibility.Private;
            createRoomOpts.preset = matrixJsSdk.Preset.PrivateChat;
            opts.joinRule = matrixJsSdk.JoinRule.Invite;
            opts.encryption = true;
            opts.historyVisibility = matrixJsSdk.HistoryVisibility.Joined;
            break;
        }
        case TchapRoomType.External: {
            //open to external and encrypted,
            createRoomOpts.accessRule = TchapRoomAccessRule.Unrestricted;
            createRoomOpts.visibility = matrixJsSdk.Visibility.Private;
            createRoomOpts.preset = matrixJsSdk.Preset.PrivateChat;
            opts.joinRule = matrixJsSdk.JoinRule.Invite;
            opts.encryption = true;
            opts.historyVisibility = matrixJsSdk.HistoryVisibility.Joined;
            break;
        }
    }
    return opts;
}
