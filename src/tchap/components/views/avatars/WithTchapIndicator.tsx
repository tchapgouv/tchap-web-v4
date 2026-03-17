/*
Copyright 2024 New Vector Ltd.
Copyright 2024 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { useEffect, type JSX, type ReactNode } from "react";
import { type Room } from "matrix-js-sdk/src/matrix";
import { Tooltip } from "@vector-im/compound-web";

import { _t } from "~tchap-web/src/languageHandler";
import DMRoomMap from "~tchap-web/src/utils/DMRoomMap";
import { getJoinedNonFunctionalMembers } from "~tchap-web/src/utils/room/getJoinedNonFunctionalMembers";
import { TchapRoomType } from "~tchap-web/src/tchap/@types/tchap";
import TchapRoomUtils from "~tchap-web/src/tchap/util/TchapRoomUtils";
import { LockOffIcon, LockSolidIcon, PublicIcon } from "@vector-im/compound-design-tokens/assets/web/icons";
import { useTchapRoom } from "~tchap-web/src/tchap/util/TchapRoomHook";

interface Props {
    room: Room;
    size: string; // CSS size
    tooltipProps?: {
        tabIndex?: number;
    };
    children: ReactNode;
}

enum Icon {
    // Note: the names here are used in CSS class names
    None = "NONE", // ... except this one
    // :TCHAP: tchap-room-icons - add icons for custom room types
    Forum = "FORUM",
    Private = "PRIVATE",
    External = "EXTERNAL",
    PrivateNonEncrypted = "PRIVATE_NON_ENCRYPTED",
}

function tooltipText(variant: Icon): string | undefined {
    switch (variant) {
        case Icon.Forum:
            return _t("This room is a public forum");
        case Icon.Private:
            return _t("This room is private");
        case Icon.External:
            return _t("This room is private and open to external users");
        case Icon.PrivateNonEncrypted:
            return _t("icon|private_non_encrypted");
    }
}

const calculateIcon = (room: Room, roomType: TchapRoomType): [JSX.Element | null, Icon] => {
    let icon: JSX.Element | null = null;
    let iconText = Icon.None
    // We look at the DMRoomMap and not the tag here so that we don't exclude DMs in Favourites
    const otherUserId = DMRoomMap.shared().getUserIdForRoomId(room.roomId);
    if (otherUserId && getJoinedNonFunctionalMembers(room).length === 2) {
        return [null, Icon.None];
    }
    switch(roomType) {
        case TchapRoomType.Forum:
            icon = <PublicIcon width="30px" color="var(--timeline-text-color)" className={`mx_DecoratedRoomAvatar_icon`}/>;
            iconText = Icon.Forum;
            break;
        case TchapRoomType.Private:
            icon = <LockSolidIcon width="30px" color="var(--private-color)" className={`mx_DecoratedRoomAvatar_icon mx_DecoratedRoomAvatar_icon_${Icon.Private.toLowerCase()}`} />
            iconText = Icon.Private;
            break;
        case TchapRoomType.External:
            icon = <LockSolidIcon width="30px" color="var(--external-color)" className={`mx_DecoratedRoomAvatar_icon mx_DecoratedRoomAvatar_icon_${Icon.External.toLowerCase()}`} />;
            iconText = Icon.External;
            break;
        case TchapRoomType.PrivateNonEncrypted:
            icon = <LockOffIcon width="30px" color="var(--timeline-text-color)" className={`mx_DecoratedRoomAvatar_icon mx_DecoratedRoomAvatar_icon_${Icon.PrivateNonEncrypted.toLowerCase()}`} />;
            iconText = Icon.PrivateNonEncrypted;
            break;
    }

    return [icon, iconText];
}

const WithTchapIndicator: React.FC<Props> = ({ room, size, tooltipProps, children }) => {
    const { currentRoomType } = useTchapRoom(room);
    const [icon, iconText] = calculateIcon(room, currentRoomType);
    
    return <>
            {children}
            {icon && (
                <Tooltip label={tooltipText(iconText)!} placement="bottom">
                    {icon}
                </Tooltip>
            )}
        </>
};

export default WithTchapIndicator;

