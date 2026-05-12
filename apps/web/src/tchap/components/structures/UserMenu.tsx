import React, { type JSX, type ReactNode } from "react";

import { MatrixClientPeg } from "~tchap-web/src/MatrixClientPeg";
import defaultDispatcher from "~tchap-web/src/dispatcher/dispatcher";
import { Action } from "~tchap-web/src/dispatcher/actions";
import { _t } from "~tchap-web/src/languageHandler";
import { type OpenToTabPayload } from "~tchap-web/src/dispatcher/payloads/OpenToTabPayload";
import { type ButtonEvent } from "~tchap-web/src/components/views/elements/AccessibleButton";
import { OwnProfileStore } from "~tchap-web/src/stores/OwnProfileStore";
import BaseAvatar from "~tchap-web/src/components/views/avatars/BaseAvatar";

interface IProps {
    isPanelCollapsed: boolean;
    children?: ReactNode;
}

interface IState {}


export default class UserMenu extends React.Component<IProps, IState> {

    public constructor(props: IProps) {
        super(props);
    }
    private onSettingsOpen = (ev: ButtonEvent, tabId?: string, props?: Record<string, any>): void => {
        ev.preventDefault();
        ev.stopPropagation();

        const payload: OpenToTabPayload = { action: Action.ViewUserSettings, initialTabId: tabId, props };
        defaultDispatcher.dispatch(payload);
    };

    public render(): React.ReactNode {
        const avatarSize = 32; // should match border-radius of the avatar

        const userId = MatrixClientPeg.safeGet().getSafeUserId();
        const displayName = OwnProfileStore.instance.displayName || userId;
        const avatarUrl = OwnProfileStore.instance.getHttpAvatarUrl(avatarSize);

        let name: JSX.Element | undefined;
        if (!this.props.isPanelCollapsed) {
            name = <div className="mx_UserMenu_name">{displayName}</div>;
        }

        
        return (
            <div className="mx_UserMenu">
                <div className="mx_UserMenu_userAvatar">
                    <BaseAvatar
                        idName={userId}
                        name={displayName}
                        url={avatarUrl}
                        size={avatarSize + "px"}
                        className="mx_UserMenu_userAvatar_BaseAvatar"
                        onClick={(e) => this.onSettingsOpen(e)}
                    />
                </div>
                {name}
                {this.props.children}
            </div>
        );
    }
}
