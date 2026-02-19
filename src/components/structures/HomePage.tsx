/*
Copyright 2024 New Vector Ltd.
Copyright 2020 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { type JSX } from "react";
import { useContext, useState } from "react";
import { BackupIcon, ChatSolidIcon, ExploreIcon, GroupIcon, GuideIcon, InstallationIcon } from "@vector-im/compound-design-tokens/assets/web/icons";

import AutoHideScrollbar from "./AutoHideScrollbar";
import { getHomePageUrl } from "../../utils/pages";
import { _t, _tDom } from "../../languageHandler";
import SdkConfig from "../../SdkConfig";
// import dis from "../../dispatcher/dispatcher"; // :TCHAP:
// import { Action } from "../../dispatcher/actions"; // :TCHAP:
import BaseAvatar from "../views/avatars/BaseAvatar";
import { OwnProfileStore } from "../../stores/OwnProfileStore";
import AccessibleButton, { type ButtonEvent } from "../views/elements/AccessibleButton";
import { UPDATE_EVENT } from "../../stores/AsyncStore";
import { useEventEmitter } from "../../hooks/useEventEmitter";
import MatrixClientContext, { useMatrixClientContext } from "../../contexts/MatrixClientContext";
import MiniAvatarUploader, { AVATAR_SIZE } from "../views/elements/MiniAvatarUploader";
import PosthogTrackers from "../../PosthogTrackers";
import EmbeddedPage from "./EmbeddedPage";

import { accessSecretStorage } from "~tchap-web/src/SecurityManager"; // :TCHAP:
import TchapUrls from "~tchap-web/src/tchap/util/TchapUrls"; // :TCHAP:

/**
 * 
 * :TCHAP:
 */
// const onClickSendDm = (ev: ButtonEvent): void => {
//     PosthogTrackers.trackInteraction("WebHomeCreateChatButton", ev);
//     dis.dispatch({ action: Action.CreateChat });
// };

// const onClickExplore = (ev: ButtonEvent): void => {
//     PosthogTrackers.trackInteraction("WebHomeExploreRoomsButton", ev);
//     dis.fire(Action.ViewRoomDirectory);
// };

// const onClickNewRoom = (ev: ButtonEvent): void => {
//     PosthogTrackers.trackInteraction("WebHomeCreateRoomButton", ev);
//     dis.dispatch({ action: Action.CreateRoom });
// };
const onClickFAQ = (ev: ButtonEvent): void => {
    TchapUrls.openHelper(TchapUrls.helpBaseUrl);
};

const onClickActivateSecureStorage = (ev: ButtonEvent): void => {
    accessSecretStorage();
};

const onClickDownloadApps = (ev: ButtonEvent): void => {
    TchapUrls.openHelper(TchapUrls.landingPage);
};
// end :TCHAP:

interface IProps {
    justRegistered?: boolean;
}

const getOwnProfile = (
    userId: string,
): {
    displayName: string;
    avatarUrl?: string;
} => ({
    displayName: OwnProfileStore.instance.displayName || userId,
    avatarUrl: OwnProfileStore.instance.getHttpAvatarUrl(parseInt(AVATAR_SIZE, 10)) ?? undefined,
});

const UserWelcomeTop: React.FC = () => {
    const cli = useContext(MatrixClientContext);
    const userId = cli.getUserId()!;
    const [ownProfile, setOwnProfile] = useState(getOwnProfile(userId));
    useEventEmitter(OwnProfileStore.instance, UPDATE_EVENT, () => {
        setOwnProfile(getOwnProfile(userId));
    });

    return (
        <div>
            <MiniAvatarUploader
                hasAvatar={!!ownProfile.avatarUrl}
                hasAvatarLabel={_t("onboarding|has_avatar_label")}
                noAvatarLabel={_t("onboarding|no_avatar_label")}
                setAvatarUrl={(url) => cli.setAvatarUrl(url)}
                isUserAvatar
                onClick={(ev) => PosthogTrackers.trackInteraction("WebHomeMiniAvatarUploadButton", ev)}
            >
                <BaseAvatar
                    idName={userId}
                    name={ownProfile.displayName}
                    url={ownProfile.avatarUrl}
                    size={AVATAR_SIZE}
                />
            </MiniAvatarUploader>

            <h1>{_tDom("onboarding|welcome_user", { name: ownProfile.displayName })}</h1>
            <h2>{_tDom("onboarding|welcome_detail")}</h2>
        </div>
    );
};

const HomePage: React.FC<IProps> = ({ justRegistered = false }) => {
    const cli = useMatrixClientContext();
    const config = SdkConfig.get();
    const pageUrl = getHomePageUrl(config, cli);

    if (pageUrl) {
        return <EmbeddedPage className="mx_HomePage" url={pageUrl} scrollbar={true} />;
    }

    let introSection: JSX.Element;
    if (justRegistered || !OwnProfileStore.instance.getHttpAvatarUrl(parseInt(AVATAR_SIZE, 10))) {
        introSection = <UserWelcomeTop />;
    } else {
        const brandingConfig = SdkConfig.getObject("branding");
        const logoUrl = brandingConfig?.get("auth_header_logo_url") ?? "themes/element/img/logos/element-logo.svg";

        introSection = (
            <React.Fragment>
                {/* :TCHAP: only decorative logo, no need for alt - <img src={logoUrl} alt={config.brand} /> */}
                <img src={logoUrl} alt="" />
                <h1>{_tDom("onboarding|intro_welcome", { appName: config.brand })}</h1>
                <h2>{_tDom("onboarding|intro_byline")}</h2>
            </React.Fragment>
        );
    }

    return (
        <AutoHideScrollbar className="mx_HomePage mx_HomePage_default" element="main">
            <div className="mx_HomePage_default_wrapper">
                {introSection}
                <div className="mx_HomePage_default_buttons">
                    {/*:TCHAP: <AccessibleButton onClick={onClickSendDm} className="mx_HomePage_button_sendDm"> */}
                    <AccessibleButton onClick={onClickFAQ} className="mx_HomePage_button_sendDm">
                        <GuideIcon />
                        {_tDom("onboarding|send_dm")}
                    </AccessibleButton>
                    {/* :TCHAP: <AccessibleButton onClick={onClickExplore} className="mx_HomePage_button_explore"> */}
                    <AccessibleButton onClick={onClickActivateSecureStorage} className="mx_HomePage_button_explore">
                        <BackupIcon />
                        {_tDom("onboarding|explore_rooms")}
                    </AccessibleButton>
                    {/* :TCHAP: <AccessibleButton onClick={onClickNewRoom} className="mx_HomePage_button_createGroup"> */}
                    <AccessibleButton onClick={onClickDownloadApps} className="mx_HomePage_button_createGroup">
                        <InstallationIcon />
                        {_tDom("onboarding|create_room")}
                    </AccessibleButton>
                </div>
            </div>
        </AutoHideScrollbar>
    );
};

export default HomePage;
