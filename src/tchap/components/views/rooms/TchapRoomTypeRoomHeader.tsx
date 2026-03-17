import { Room } from "matrix-js-sdk/src/matrix";
import React, { useEffect } from "react";
import { _t } from "~tchap-web/src/languageHandler";

import { TchapRoomType } from "../../../@types/tchap";
import { useTchapRoom } from "~tchap-web/src/tchap/util/TchapRoomHook";

export interface IProps {
    room?: Room;
}


export default function TchapRoomTypeRoomHeader({ room }: IProps) {
    const { currentRoomType }= useTchapRoom(room);

    switch(currentRoomType) {
        case TchapRoomType.External:
            return (<div className="tc_RoomHeader_external">
                <span>{_t("External users allowed")}</span>
            </div>);
        case TchapRoomType.PrivateNonEncrypted: 
            return (<div className="tc_RoomHeader_private-non-encrypted">
                <span>{_t("icon|private_non_encrypted_title")}</span>
            </div>)
        default:
            return null
    }
}
