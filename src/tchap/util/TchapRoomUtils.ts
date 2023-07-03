/**
 * Tchap Room utils.
 */

import { Room } from "matrix-js-sdk/src/matrix";
import { MatrixClientPeg } from "matrix-react-sdk/src/MatrixClientPeg";
import { ISendEventResponse } from "matrix-js-sdk/src/@types/requests";
import * as utils from "matrix-js-sdk/src/utils";
import { Method } from "matrix-js-sdk/src/http-api";

import { TchapRoomAccessRule, TchapRoomAccessRulesEventId, TchapRoomType } from "../@types/tchap";

export default class TchapRoomUtils {
    //inspired by https://github.com/tchapgouv/tchap-android/blob/develop/vector/src/main/java/fr/gouv/tchap/core/utils/RoomUtils.kt#L31
    //direct type is not handled yet
    static getTchapRoomType(room: Room): TchapRoomType {
        const isEncrypted: boolean = this.isRoomEncrypted(room.roomId);
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
        if (tchapRoomAccessRule === TchapRoomAccessRule.Restricted) {
            return TchapRoomType.Private;
        }
        if (tchapRoomAccessRule === TchapRoomAccessRule.Unrestricted) {
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
     * Update public room join rule to "invite" state (so that the room be private).
     * @returns Promise which resolves: to an ISendEventResponse object
     * @returns Rejects: with an error response.
     */
    static updateRoomJoinRuleToInvite(
        roomId: string,
    ): Promise<ISendEventResponse> {
        const client = MatrixClientPeg.get();
        const content = { join_rule: 'invite' };
        const path = utils.encodeUri("/rooms/$roomId/state/m.room.join_rules", {
            $roomId: roomId,
        });

        return client.http.authedRequest(Method.Put, path, undefined, content);
    }

    /**
     * Turn on the encryption in a room (if this is not already done).
     * @returns Promise which resolves: to an ISendEventResponse object
     * @returns Rejects: with an error response.
     */
    static turnOnEncryptionInThisRoom(
        roomId: string,
    ): Promise<ISendEventResponse> {
        const client = MatrixClientPeg.get();
        const content = { algorithm: 'm.megolm.v1.aes-sha2' };
        const path = utils.encodeUri("/rooms/$roomId/state/m.room.encryption", {
            $roomId: roomId,
        });

        return client.http.authedRequest(Method.Put, path, undefined, content);
    }

    /**
     * Remove a room from the room directory.
     * @returns Promise which resolves: to an ISendEventResponse object
     * @returns Rejects: with an error response.
     */
    static removeRoomFromRoomDirectory(
        roomId: string,
    ): Promise<ISendEventResponse> {
        const client = MatrixClientPeg.get();
        const content = { visibility: 'private' };
        const path = utils.encodeUri("/rooms/$roomId/state/m.room.history_visibility", {
            $roomId: roomId,
        });

        return client.http.authedRequest(Method.Put, path, undefined, content);
    }
}
