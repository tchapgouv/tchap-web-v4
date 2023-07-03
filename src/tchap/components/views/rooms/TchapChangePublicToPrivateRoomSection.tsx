import React, { useState } from 'react';
import _ from 'lodash';
import { _t } from "matrix-react-sdk/src/languageHandler";
import AccessibleButton from "matrix-react-sdk/src/components/views/elements/AccessibleButton";
import Spinner from "matrix-react-sdk/src/components/views/elements/Spinner";
import { EventType } from "matrix-js-sdk/src/@types/event";
import { JoinRule } from "matrix-js-sdk/src/@types/partials";

import TchapRoomUtils from "../../../util/TchapRoomUtils";

export default function TchapChangePublicToPrivateRoomSection({ room }) {
    const joinRules = room?.currentState.getStateEvents(EventType.RoomJoinRules, "");
    const [changePublicToPrivateRoomError, setChangePublicToPrivateRoomError] = useState(false);
    const [changePublicToPrivateRoomLoader, setChangePublicToPrivateRoomLoader] = useState(false);
    const [isRoomPublic, setIsRoomPublic] = useState(joinRules?.getContent()["join_rule"] === JoinRule.Public ?? true);

    const isRoomAdmin = () => {
        const userMatrixID = _.get(room, 'myUserId');
        const roomMembers = _.get(room, 'currentState.members');
        const { powerLevel: userPowerLevelInRoom } = _.get(roomMembers, userMatrixID);

        return userPowerLevelInRoom === 100;
    };

    const onChangeToPrivateRoom = async () => {
        const roomId = room?.roomId;

        try {
            setChangePublicToPrivateRoomLoader(true);
            await TchapRoomUtils.updateRoomJoinRuleToInvite(roomId);
            await TchapRoomUtils.turnOnEncryptionInThisRoom(roomId);
            await TchapRoomUtils.removeRoomFromRoomDirectory(roomId);
            
            setChangePublicToPrivateRoomLoader(false);
            setIsRoomPublic(false);
            location.reload();

        } catch (err) {
            setChangePublicToPrivateRoomError(true);
            setChangePublicToPrivateRoomLoader(false);
        }
    };

    return isRoomAdmin && isRoomPublic ? (
        <>
            <span className="mx_SettingsTab_subheading">{_t("Change to private room")}</span>
            <div className="mx_SettingsTab_section">
                <AccessibleButton kind="primary" onClick={onChangeToPrivateRoom}>
                    {_t("Change to private room")}
                    {changePublicToPrivateRoomLoader && <div style={{ marginLeft: 7 }}><Spinner w={18} h={18} /></div>}
                </AccessibleButton>

                {changePublicToPrivateRoomError && (
                    <p className="text-error">{_t("Failure in converting this forum into a private room.")}</p>
                )}
            </div>
        </>
    ) : null;
}