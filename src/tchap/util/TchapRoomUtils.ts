/**
 * Tchap Room utils.
 */

import { EventTimeline, EventType, Room, Visibility } from "matrix-js-sdk/src/matrix";
import { MatrixClientPeg } from "~tchap-web/src/MatrixClientPeg";

import { TchapRoomAccessRule, TchapRoomAccessRulesEventId, TchapRoomType } from "../@types/tchap";
import { GuestAccess, JoinRule } from "matrix-js-sdk/src/matrix";


export default class TchapRoomUtils {
    //inspired by https://github.com/tchapgouv/tchap-android/blob/develop/vector/src/main/java/fr/gouv/tchap/core/utils/RoomUtils.kt#L31
    //direct type is not handled yet
    static getTchapRoomType(room: Room): Promise<TchapRoomType> {
        const isEncrypted: boolean = this.isRoomEncrypted(room.roomId);
        const tchapRoomAccessRule: TchapRoomAccessRule = this.getTchapRoomAccessRule(room);
        return this.getTchapRoomTypeInternal(isEncrypted, tchapRoomAccessRule, room);
    }

    static async getTchapRoomTypeInternal(isEncrypted: boolean, tchapRoomAccessRule: TchapRoomAccessRule, room: Room): Promise<TchapRoomType> {
        // need to have visibility private or public to know if it is a forum or not
        if (!isEncrypted) {
            const visibility = await this.getRoomVisibility(room);
            console.log("**** TCHAP visibility", visibility);
            if (visibility == Visibility.Private) {
                return TchapRoomType.PrivateNonEncrypted;
            }
            return TchapRoomType.Forum;
        }
        switch(tchapRoomAccessRule) {
            case TchapRoomAccessRule.Restricted:
                return TchapRoomType.Private;
            case TchapRoomAccessRule.Unrestricted:
                return TchapRoomType.External;
            default:
                return TchapRoomType.Unknown;
        }
    }

    /**
     * Get Tchap Room Access Rule
     * @param room
     * @returns string that matches of one TchapRoomAccessRule //todo or null? or empty?
     */
    static getTchapRoomAccessRule(room: Room): TchapRoomAccessRule {
        return room.getLiveTimeline().getState(EventTimeline.FORWARDS)?.getStateEvents(TchapRoomAccessRulesEventId, "")?.getContent().rule;
    }

    /**
     * Is room encrypted? search in local storage or in server if needed
     * @param roomId
     * @returns true if room is encrypted, false if not
     */
    static isRoomEncrypted(roomId: string): boolean {
        return !!MatrixClientPeg.get()?.isRoomEncrypted(roomId);
    }

    /**
     * Get if current is admin of the room
     * @param room 
     * @returns 
     */
    static isUserAdmin(room: Room) : boolean {
        const userId = room.client.getSafeUserId();
        return room.getMember(userId)?.powerLevel == 100
    }

    static getRoomJoinRule(room: Room): JoinRule|undefined {
        return room
            .getLiveTimeline()
            .getState(EventTimeline.FORWARDS)
            ?.getStateEvents(EventType.RoomJoinRules, "")
            ?.getContent().join_rule
    }

    static getRoomGuessAccessRule(room: Room): GuestAccess {
        const event : GuestAccess = room
            .getLiveTimeline()
            .getState(EventTimeline.FORWARDS)
            ?.getStateEvents(EventType.RoomGuestAccess, "")
            ?.getContent().guest_access;

        if (!event) {
            // default to can_join
            return GuestAccess.CanJoin;
        }
        return event;
    }

    // check at least one admin in the list
    static roomHasAtLeastOneAdmin(usersLevels: Record<string, number>) : boolean{
        const userLevelValues = Object.values(usersLevels);

        // At least one user as the pL 100 which means he is admin
        return userLevelValues.some((uL) => uL === 100);

    }

    static async getRoomVisibility(room: Room): Promise<Visibility> {
        const visibility = await room.client.getRoomDirectoryVisibility(room.roomId);
        return visibility.visibility;
    }
}
