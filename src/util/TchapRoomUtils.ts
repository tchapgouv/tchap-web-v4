
/**
 * Tchap Room utils.
 */

import { Room } from "matrix-js-sdk/src/matrix";
import { MatrixClientPeg } from "matrix-react-sdk/src/MatrixClientPeg";

import { TchapRoomAccessRule, TchapRoomAccessRulesEventId, TchapRoomType } from "../@types/tchap";

export default class TchapRoomUtils {
    //inspired by https://github.com/tchapgouv/tchap-android/blob/develop/vector/src/main/java/fr/gouv/tchap/core/utils/RoomUtils.kt#L31
    //direct type is not handled yet
    static getTchapRoomType(isEncrypted: boolean, tchapRoomAccessRule?: string): TchapRoomType {
        if (!isEncrypted) {
            return TchapRoomType.Forum;
        }
        if (!tchapRoomAccessRule) {
            return TchapRoomType.Unknown;
        }
        if (tchapRoomAccessRule === TchapRoomAccessRule.Restricted) {
            return TchapRoomType.Private;
        }
        if (tchapRoomAccessRule === TchapRoomAccessRule.Unrestricted) {
            return TchapRoomType.External;
        }
    }

    /**
     * Get Tchap Room Access Rule
     * @param room
     * @returns string that matches of one TchapRoomAccessRule //todo or null? or empty?
     */
    static getTchapRoomAccessRule(room: Room): string {
        return room.currentState.getStateEvents(TchapRoomAccessRulesEventId, "")?.getContent().rule;
    }

    /**
     * Is room encrypted? search in local storage or in server if needed
     * @param roomId 
     * @returns true if room is encrypted, false if not
     */
    static isRoomEncrypted(roomId: string): boolean {
        return MatrixClientPeg.get().isRoomEncrypted(roomId);
    }


    /**
     * Helper method
     * @returns true of room is a Forum
     */
    static isRoomOfTypeForum(roomId: string): boolean {
        const isRoomEncrypted: boolean = TchapRoomUtils.isRoomEncrypted(roomId);//is this ressource consuming?
        return TchapRoomUtils.getTchapRoomType(isRoomEncrypted) === TchapRoomType.Forum;
    }
}
