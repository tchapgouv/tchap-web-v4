/*
Copyright 2024 New Vector Ltd.
Copyright 2024 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { type JSX, type ReactNode } from "react";
import { type Room } from "matrix-js-sdk/src/matrix";
import { Tooltip } from "@vector-im/compound-web";

import { _t } from "~tchap-web/src/languageHandler";
import DMRoomMap from "~tchap-web/src/utils/DMRoomMap";
import { getJoinedNonFunctionalMembers } from "~tchap-web/src/utils/room/getJoinedNonFunctionalMembers";
import { TchapRoomType } from "~tchap-web/src/tchap/@types/tchap";
import TchapRoomUtils from "~tchap-web/src/tchap/util/TchapRoomUtils";
import { PadlockExternalIcon, PadlockForumIcon, PadlockPrivateIcon } from "@vector-im/compound-design-tokens/assets/web/icons";

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
}

function tooltipText(variant: Icon): string | undefined {
    switch (variant) {
        case Icon.Forum:
            return _t("This room is a public forum");
        case Icon.Private:
            return _t("This room is private");
        case Icon.External:
            return _t("This room is private and open to external users");
    }
}

const calculateIcon = (room: Room): [JSX.Element | null, Icon] => {
    let icon: JSX.Element | null = null;
    let iconText = Icon.None
    // We look at the DMRoomMap and not the tag here so that we don't exclude DMs in Favourites
    const otherUserId = DMRoomMap.shared().getUserIdForRoomId(room.roomId);
    if (otherUserId && getJoinedNonFunctionalMembers(room).length === 2) {
        return [null, Icon.None];
    }
    const roomType: TchapRoomType = TchapRoomUtils.getTchapRoomType(room);
    switch(roomType) {
        case TchapRoomType.Forum:
            icon = <PadlockForumIcon width="24px" className={`mx_DecoratedRoomAvatar_icon mx_DecoratedRoomAvatar_icon_${Icon.Forum.toLowerCase()}`} />;
            iconText = Icon.Forum;
            break;
        case TchapRoomType.Private:
            icon = <PadlockPrivateIcon width="24px" className={`mx_DecoratedRoomAvatar_icon mx_DecoratedRoomAvatar_icon_${Icon.Private.toLowerCase()}`} />
            iconText = Icon.Private;
            break;
        case TchapRoomType.External:
            icon = <PadlockExternalIcon width="24px" className={`mx_DecoratedRoomAvatar_icon mx_DecoratedRoomAvatar_icon_${Icon.External.toLowerCase()}`} />;
            iconText = Icon.External;
            break;
    }

    return [icon, iconText];
}

const WithTchapIndicator: React.FC<Props> = ({ room, size, tooltipProps, children }) => {
    const [icon, iconText] = calculateIcon(room);

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

