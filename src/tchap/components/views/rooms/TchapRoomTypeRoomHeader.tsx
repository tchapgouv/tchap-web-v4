import { Room } from "matrix-js-sdk/src/matrix";
import React from "react";
import { _t } from "~tchap-web/src/languageHandler";

import { TchapRoomType } from "../../../@types/tchap";
import { useTchapRoom } from "~tchap-web/src/tchap/util/TchapRoomHook";
import { Badge } from "compound-web-tchap";
import { LockIcon, PublicIcon, LockOffIcon } from "@vector-im/compound-design-tokens/assets/web/icons";

export interface IProps {
    room?: Room;
}


export default function TchapRoomTypeRoomHeader({ room }: IProps) {
    const { currentRoomType }= useTchapRoom(room);

    const externalBadge = () => ( 
        <Badge kind="default" className="external">
            <PublicIcon width="1em"/>
            <span className="description">
                {_t("badge|external_guests")}
            </span>
        </Badge>
    )

    const encryptedBadge = () => (
        <Badge kind="green">
            <LockIcon width="1em"/>
            <span className="description">
                {_t("common|encrypted")}
            </span>
        </Badge>
    )

    const unencryptedBadge = () => (
        <Badge kind="grey">
            <LockOffIcon width="1em"/>
            <span className="description">
                {_t("common|unencrypted")}
            </span>
        </Badge>
    )

    const publicBadge = () => (
        <Badge kind="grey">
            <PublicIcon width="1em"/>
            <span className="description">
                {_t("common|public")}
            </span>
        </Badge>
    )

    switch(currentRoomType) {
        case TchapRoomType.External:
            return (
                <div className="tc_badge">
                    {externalBadge()}
                    {encryptedBadge()}
                </div>
            )
        case TchapRoomType.PrivateNonEncrypted: 
            return (
                <div className="tc_badge">
                    {unencryptedBadge()}
                </div>
            )
        case TchapRoomType.PrivateNonEncryptedExternal: 
            return (
                <div className="tc_badge">
                    {externalBadge()}
                    {unencryptedBadge()}
                </div>
            )
        case TchapRoomType.Private: 
            return (
                <div className="tc_badge">
                    {encryptedBadge()}
                </div>
            )
        case TchapRoomType.Forum: 
            return (
                <div className="tc_badge">
                    {publicBadge()}
                </div>
            )
        default:
            return null
    }
}
