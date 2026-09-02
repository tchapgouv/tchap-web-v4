import { Room } from "matrix-js-sdk/src/matrix";
import React from "react";
import { _t } from "~tchap-web/src/languageHandler";

import { TchapRoomType } from "../../../@types/tchap";
import { useTchapRoom } from "~tchap-web/src/tchap/util/TchapRoomHook";
import { Badge } from "@vector-im/compound-web";
import { LockIcon, PublicIcon, LockOffIcon, LockSolidIcon } from "@vector-im/compound-design-tokens/assets/web/icons";

export interface IProps {
    room?: Room;
    isDM?: boolean;
}

export default function TchapRoomTypeRoomHeader({ room, isDM }: IProps) {
    const externalBadge = () => (
        <Badge kind="default" className="badge-content external">
            <PublicIcon width="1em" />
            <span className="description">{_t("badge|external_guests")}</span>
        </Badge>
    );

    const encryptedBadge = () => (
        <Badge kind="green" className="badge-content">
            <LockSolidIcon width="1em" />
            <span className="description">{_t("common|encrypted")}</span>
        </Badge>
    );

    const unencryptedBadge = () => (
        <Badge kind="grey" className="badge-content">
            <LockOffIcon width="1em" />
            <span className="description">{_t("common|unencrypted")}</span>
        </Badge>
    );

    const publicBadge = () => (
        <Badge kind="grey" className="badge-content">
            <PublicIcon width="1em" />
            <span className="description">{_t("common|public")}</span>
        </Badge>
    );

    if (isDM) {
        return <div className="tc_badge">{encryptedBadge()}</div>;
    }

    const { currentRoomType } = useTchapRoom(room);

    switch (currentRoomType) {
        case TchapRoomType.External:
            return (
                <div className="tc_badge">
                    {encryptedBadge()}
                    {externalBadge()}
                </div>
            );
        case TchapRoomType.PrivateNonEncrypted:
            return <div className="tc_badge">{unencryptedBadge()}</div>;
        case TchapRoomType.PrivateNonEncryptedExternal:
            return (
                <div className="tc_badge">
                    {unencryptedBadge()}
                    {externalBadge()}
                </div>
            );
        case TchapRoomType.Private:
            return <div className="tc_badge">{encryptedBadge()}</div>;
        case TchapRoomType.Forum:
            return (
                <div className="tc_badge">
                    {unencryptedBadge()}
                    {publicBadge()}
                </div>
            );
        default:
            return null;
    }
}
