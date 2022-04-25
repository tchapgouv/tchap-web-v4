import { IOpts } from "matrix-react-sdk/src/createRoom";
import { ICreateRoomOpts } from "matrix-js-sdk/src/@types/requests";
import { HistoryVisibility, JoinRule, Preset, Visibility } from "matrix-js-sdk/src/@types/partials";

import { TchapRoomAccessRule, TchapRoomType } from "../@types/tchap";

export interface ITchapCreateRoomOpts extends ICreateRoomOpts {
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
export default function roomCreateOptions(
    name: string, tchapRoomType: TchapRoomType, federate: boolean = DEFAULT_FEDERATE_VALUE): IOpts {
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
            createRoomOpts.visibility = Visibility.Public;
            createRoomOpts.preset = Preset.PublicChat;
            opts.joinRule = JoinRule.Public;
            opts.encryption = false;
            opts.historyVisibility = HistoryVisibility.Shared;
            break;
        }
        case TchapRoomType.Private: {
            //"Salon", only for tchap member and encrypted
            createRoomOpts.accessRule = TchapRoomAccessRule.Restricted;
            createRoomOpts.visibility = Visibility.Private;
            createRoomOpts.preset = Preset.PrivateChat;
            opts.joinRule = JoinRule.Invite;
            opts.encryption = true;
            opts.historyVisibility = HistoryVisibility.Joined;
            break;
        }
        case TchapRoomType.External: {
            //open to external and encrypted,
            createRoomOpts.accessRule = TchapRoomAccessRule.Unrestricted;
            createRoomOpts.visibility = Visibility.Private;
            createRoomOpts.preset = Preset.PrivateChat;
            opts.joinRule = JoinRule.Invite;
            opts.encryption = true;
            opts.historyVisibility = HistoryVisibility.Joined;
            break;
        }
    }
    return opts;
}
