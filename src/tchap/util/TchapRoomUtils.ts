/**
 * Tchap Room utils.
 */

import { EventTimeline, EventType, Room } from "matrix-js-sdk/src/matrix";

import { TchapRoomAccessRule, TchapRoomType } from "../@types/tchap";

export default class TchapRoomUtils {
    //inspired by https://github.com/tchapgouv/tchap-android/blob/develop/vector/src/main/java/fr/gouv/tchap/core/utils/RoomUtils.kt#L31
    //direct type is not handled yet
    static getTchapRoomType(room: Room): TchapRoomType {
        const isEncrypted: boolean = this.isRoomEncrypted(room);
        const tchapRoomAccessRule: TchapRoomAccessRule = this.getTchapRoomAccessRule(room);
        return this.getTchapRoomTypeInternal(isEncrypted, tchapRoomAccessRule);
    }

    static getTchapRoomTypeInternal(isEncrypted: boolean, tchapRoomAccessRule: TchapRoomAccessRule): TchapRoomType {
        if (!isEncrypted) {
            return TchapRoomType.Forum;
        }
        if (!tchapRoomAccessRule) {
            return TchapRoomType.Unknown;
        }
        if (tchapRoomAccessRule === TchapRoomAccessRule.Restricted || tchapRoomAccessRule === TchapRoomAccessRule.Invite) {
            return TchapRoomType.Private;
        }
        if (tchapRoomAccessRule === TchapRoomAccessRule.Unrestricted || tchapRoomAccessRule === TchapRoomAccessRule.Public) {
            return TchapRoomType.External;
        }
        return TchapRoomType.Unknown;
    }

    /**
     * Get Tchap Room Access Rule
     * @param room
     * @returns string that matches of one TchapRoomAccessRule //todo or null? or empty?
     */
    static getTchapRoomAccessRule(room: Room): TchapRoomAccessRule {
        // the state event TchapRoomAccessRulesEventId is working only when the rule access is invite -> maybe a change in the backend configuration ? needs to check
        // That's is why sometimes the last state events is undefined, here we are not directly using getJoinRule because of types compatibility
        const lastEvent =  room.getLiveTimeline().getState(EventTimeline.FORWARDS)?.getStateEvents(EventType.RoomJoinRules)[0];

        return lastEvent?.getContent().join_rule;
    }

    /**
     * Is room encrypted? search in local storage or in server if needed
     * @param roomId
     * @returns true if room is encrypted, false if not
     */
    static isRoomEncrypted(room: Room): boolean {
        return room.hasEncryptionStateEvent();
    }
}
