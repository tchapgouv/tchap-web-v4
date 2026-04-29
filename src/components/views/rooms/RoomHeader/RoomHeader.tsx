/*
Copyright (C) 2025 Element Creations Ltd
Copyright 2024 New Vector Ltd.
Copyright 2023 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { type JSX, useCallback, useEffect, useState } from "react";
import { Text, Button, IconButton, Menu, MenuItem, Tooltip } from "@vector-im/compound-web";
import VideoCallIcon from "@vector-im/compound-design-tokens/assets/web/icons/video-call-solid";
import VoiceCallIcon from "@vector-im/compound-design-tokens/assets/web/icons/voice-call-solid";
import CloseCallIcon from "@vector-im/compound-design-tokens/assets/web/icons/close";
import ThreadsIcon from "@vector-im/compound-design-tokens/assets/web/icons/threads-solid";
import RoomInfoIcon from "@vector-im/compound-design-tokens/assets/web/icons/info-solid";
import NotificationsIcon from "@vector-im/compound-design-tokens/assets/web/icons/notifications-solid";
import { type Room } from "matrix-js-sdk/src/matrix";
import { type ViewRoomOpts } from "@matrix-org/react-sdk-module-api/lib/lifecycles/RoomViewLifecycle";
import { Flex, Box } from "@element-hq/web-shared-components";
import { CallType } from "matrix-js-sdk/src/webrtc/call";

import { useRoomName } from "../../../../hooks/useRoomName.ts";
import { RightPanelPhases } from "../../../../stores/right-panel/RightPanelStorePhases.ts";
import { useMatrixClientContext } from "../../../../contexts/MatrixClientContext.tsx";
import { useRoomMemberCount, useRoomMembers } from "../../../../hooks/useRoomMembers.ts";
import { _t } from "../../../../languageHandler.tsx";
import { getPlatformCallTypeProps, useRoomCall } from "../../../../hooks/room/useRoomCall.tsx";
import { useRoomThreadNotifications } from "../../../../hooks/room/useRoomThreadNotifications.ts";
import { useGlobalNotificationState } from "../../../../hooks/useGlobalNotificationState.ts";
import { useFeatureEnabled } from "../../../../hooks/useSettings.ts";
import { useEncryptionStatus } from "../../../../hooks/useEncryptionStatus.ts";
import FacePile from "../../elements/FacePile.tsx";
import { useRoomState } from "../../../../hooks/useRoomState.ts";
import RoomAvatar from "../../avatars/RoomAvatar.tsx";
import { formatCount } from "../../../../utils/FormattingUtils.ts";
import RightPanelStore from "../../../../stores/right-panel/RightPanelStore.ts";
import PosthogTrackers from "../../../../PosthogTrackers.ts";
import { VideoRoomChatButton } from "./VideoRoomChatButton.tsx";
import { RoomKnocksBar } from "../RoomKnocksBar.tsx";
import { isVideoRoom as calcIsVideoRoom } from "../../../../utils/video-rooms.ts";
import { notificationLevelToIndicator } from "../../../../utils/notifications.ts";
import { CallGuestLinkButton } from "./CallGuestLinkButton.tsx";
import { type ButtonEvent } from "../../elements/AccessibleButton.tsx";
import WithPresenceIndicator, { useDmMember } from "../../avatars/WithPresenceIndicator.tsx";
import { type IOOBData } from "../../../../stores/ThreepidInviteStore.ts";
import { MainSplitContentType } from "../../../structures/RoomView.tsx";
import defaultDispatcher from "../../../../dispatcher/dispatcher.ts";
import { RoomSettingsTab } from "../../dialogs/RoomSettingsDialog.tsx";
import { useScopedRoomContext } from "../../../../contexts/ScopedRoomContext.tsx";
import { ToggleableIcon } from "./toggle/ToggleableIcon.tsx";
import { CurrentRightPanelPhaseContextProvider } from "../../../../contexts/CurrentRightPanelPhaseContext.tsx";
import { LocalRoom } from "../../../../models/LocalRoom.ts";
import QuestionDialog from "../../dialogs/QuestionDialog.tsx";

import TchapUIFeature from "~tchap-web/src/tchap/util/TchapUIFeature"; // :TCHAP: customize-room-header-bar
import { TchapRoomType } from "~tchap-web/src/tchap/@types/tchap.ts";
import Modal from "~tchap-web/src/Modal.tsx";
import { useTchapRoom } from "~tchap-web/src/tchap/util/TchapRoomHook.ts";
import TchapRoomTypeRoomHeader from "~tchap-web/src/tchap/components/views/rooms/TchapRoomTypeRoomHeader.tsx"; // :TCHAP: customize-room-header-bar



function RoomHeaderButtons({
    room,
    additionalButtons,
}: {
    room: Room;
    additionalButtons?: ViewRoomOpts["buttons"];
}): JSX.Element {
    const members = useRoomMembers(room, 2500);
    const memberCount = useRoomMemberCount(room, { throttleWait: 2500, includeInvited: true });

    const {
        voiceCallDisabledReason,
        voiceCallClick,
        videoCallDisabledReason,
        videoCallClick,
        toggleCallMaximized: toggleCall,
        isViewingCall,
        isConnectedToCall,
        activeCallSessionType,
        callOptions,
        showVoiceCallButton,
        showVideoCallButton,
    } = useRoomCall(room);

    const threadNotifications = useRoomThreadNotifications(room);
    const globalNotificationState = useGlobalNotificationState();

    const dmMember = useDmMember(room);
    const isDirectMessage = !!dmMember;

    const notificationsEnabled = useFeatureEnabled("feature_notifications");

    const askToJoinEnabled = useFeatureEnabled("feature_ask_to_join");

    // :TCHAP: group-call-modal-confirmation
    // const videoClick = useCallback(
    //      (ev: React.MouseEvent) => videoCallClick(ev, callOptions[0]),
    //      [callOptions, videoCallClick],
    // );
    const videoClick = useCallback(
        async (ev: React.MouseEvent, isJoin: boolean = false) => {
            // directly start call if join click or is a DM video call
            if (isJoin || isDirectMessage) {
                videoCallClick(ev, callOptions[0]);
                return;
            }
            const { finished } = Modal.createDialog(QuestionDialog, {
                title: _t("voip|modal_confirmation_title"),
                description: (
                    <div>
                        <p>{_t(_t("voip|modal_confirmation_description"))}</p>
                    </div>
                ),
                button: _t("action|continue"),
                cancelButton: _t("action|cancel"),
            });
            const [confirmed] = await finished;
            if (confirmed) {
                videoCallClick(ev, callOptions[0])
            }
        },
        [callOptions, isDirectMessage, videoCallClick],
    );
    // end :TCHAP:

    const voiceClick = useCallback(
        (ev: React.MouseEvent) => voiceCallClick(ev, callOptions[0]),
        [callOptions, voiceCallClick],
    );

    const toggleCallButton = (
        <Tooltip label={isViewingCall ? _t("voip|minimise_call") : _t("voip|maximise_call")}>
            <IconButton onClick={toggleCall}>
                <VideoCallIcon />
            </IconButton>
        </Tooltip>
    );

    const joinCallButton = (
        <Tooltip
            label={
                videoCallDisabledReason ??
                (activeCallSessionType === CallType.Voice ? _t("voip|voice_call") : _t("voip|video_call"))
            }
        >
            <Button
                size="sm"
                // :TCHAP: add distinction between join click and start click
                // onClick={videoClick}
                onClick={(ev: React.MouseEvent) => videoClick(ev, true)}
                Icon={activeCallSessionType === CallType.Voice ? VoiceCallIcon : VideoCallIcon}
                className="mx_RoomHeader_join_button"
                disabled={!!videoCallDisabledReason}
                color="primary"
                aria-label={
                    videoCallDisabledReason ??
                    (activeCallSessionType === CallType.Voice
                        ? _t("room|header|join_voice_call")
                        : _t("room|header|join_video_call"))
                }
                data-testId="join-call-button"
            >
                {_t("action|join")}
            </Button>
        </Tooltip>
    );

    const videoCallIconWithTooltip = (
        <Tooltip label={videoCallDisabledReason ?? _t("voip|video_call")}>
            <VideoCallIcon />
        </Tooltip>
    );

    const voiceCallIconWithTooltip = (
        <Tooltip label={videoCallDisabledReason ?? _t("voip|voice_call")}>
            <VoiceCallIcon />
        </Tooltip>
    );

    const [videoMenuOpen, setVideoMenuOpen] = useState(false);

    const onVideoOpenChange = useCallback(
        (newOpen: boolean) => {
            if (!videoCallDisabledReason) setVideoMenuOpen(newOpen);
        },
        [videoCallDisabledReason],
    );

    const [voiceMenuOpen, setVoiceMenuOpen] = useState(false);

    const onVoiceOpenChange = useCallback(
        (newOpen: boolean) => {
            if (!voiceCallDisabledReason) setVoiceMenuOpen(newOpen);
        },
        [voiceCallDisabledReason],
    );

    const startVideoCallButton = (
        <>
            {/* Can be either a menu or just a button depending on the number of call options.*/}
            {callOptions.length > 1 ? (
                <Menu
                    open={videoMenuOpen}
                    onOpenChange={onVideoOpenChange}
                    title={_t("voip|video_call_using")}
                    trigger={
                        <IconButton
                            disabled={!!videoCallDisabledReason}
                            aria-label={videoCallDisabledReason ?? _t("voip|video_call")}
                        >
                            {videoCallIconWithTooltip}
                        </IconButton>
                    }
                    side="left"
                    align="start"
                >
                    {callOptions.map((option) => {
                        const { label, children } = getPlatformCallTypeProps(option);
                        return (
                            <MenuItem
                                key={option}
                                label={label}
                                aria-label={label}
                                children={children}
                                className="mx_RoomHeader_videoCallOption"
                                onClick={(ev) => videoCallClick(ev, option)}
                                Icon={VideoCallIcon}
                                onSelect={() => {} /* Dummy handler since we want the click event.*/}
                            />
                        );
                    })}
                </Menu>
            ) : (
                <IconButton
                    disabled={!!videoCallDisabledReason}
                    aria-label={videoCallDisabledReason ?? _t("voip|video_call")}
                    onClick={videoClick}
                >
                    {videoCallIconWithTooltip}
                </IconButton>
            )}
        </>
    );
    const startVoiceCallButton = (
        <>
            {/* Can be either a menu or just a button depending on the number of call options.*/}
            {callOptions.length > 1 ? (
                <Menu
                    open={voiceMenuOpen}
                    onOpenChange={onVoiceOpenChange}
                    title={_t("voip|voice_call_using")}
                    trigger={
                        <IconButton
                            disabled={!!voiceCallDisabledReason}
                            aria-label={voiceCallDisabledReason ?? _t("voip|voice_call")}
                        >
                            {voiceCallIconWithTooltip}
                        </IconButton>
                    }
                    side="left"
                    align="start"
                >
                    {callOptions.map((option) => {
                        const { label, children } = getPlatformCallTypeProps(option, true);
                        return (
                            <MenuItem
                                key={option}
                                label={label}
                                aria-label={label}
                                children={children}
                                className="mx_RoomHeader_videoCallOption"
                                onClick={(ev) => {
                                    setVoiceMenuOpen(false);
                                    voiceCallClick(ev, option);
                                }}
                                Icon={VoiceCallIcon}
                                onSelect={() => {} /* Dummy handler since we want the click event.*/}
                            />
                        );
                    })}
                </Menu>
            ) : (
                <IconButton
                    disabled={!!voiceCallDisabledReason}
                    aria-label={voiceCallDisabledReason ?? _t("voip|voice_call")}
                    onClick={voiceClick}
                >
                    {voiceCallIconWithTooltip}
                </IconButton>
            )}
        </>
    );

    const closeLobbyButton = (
        <Tooltip label={_t("voip|close_lobby")}>
            <IconButton onClick={toggleCall}>
                <CloseCallIcon />
            </IconButton>
        </Tooltip>
    );
    let videoCallButton: JSX.Element | undefined = startVideoCallButton;
    let voiceCallButton: JSX.Element | undefined = startVoiceCallButton;
    if (isConnectedToCall) {
        videoCallButton = toggleCallButton;
        voiceCallButton = undefined;
    } else if (isViewingCall) {
        videoCallButton = closeLobbyButton;
        voiceCallButton = undefined;
    }

    if (!showVideoCallButton) {
        videoCallButton = undefined;
    }

    if (!showVoiceCallButton) {
        voiceCallButton = undefined;
    }

    const roomContext = useScopedRoomContext("mainSplitContentType");
    const isVideoRoom = calcIsVideoRoom(room);
    const showChatButton =
        isVideoRoom ||
        roomContext.mainSplitContentType === MainSplitContentType.MaximisedWidget ||
        roomContext.mainSplitContentType === MainSplitContentType.Call;

    // :TCHAP:
    const { currentRoomType }  = useTchapRoom(room);

    return (
        <>
            {additionalButtons?.map((props) => {
                const label = props.label();

                return (
                    <Tooltip label={label} key={props.id}>
                        <IconButton
                            aria-label={label}
                            onClick={(event) => {
                                event.stopPropagation();
                                props.onClick();
                            }}
                        >
                            {typeof props.icon === "function" ? props.icon() : props.icon}
                        </IconButton>
                    </Tooltip>
                );
            })}

            {isViewingCall && <CallGuestLinkButton room={room} />}

            {activeCallSessionType && !isConnectedToCall && !isViewingCall ? (
                joinCallButton
            ) : (
                <>
                    { /* :TCHAP: customize-room-header-bar - activate video call only if directmessage and if feature is activated on homeserver }
                    {!isVideoRoom && videoCallButton}
                    */ }
                    {!isDirectMessage && TchapUIFeature.isFeatureActiveForHomeserver("feature_video_group_call") &&
                        currentRoomType !== TchapRoomType.Forum &&
                        !isVideoRoom && videoCallButton}

                    {isDirectMessage && TchapUIFeature.isFeatureActiveForHomeserver("feature_video_call") &&
                        !isVideoRoom && videoCallButton}
                    {/* end :TCHAP: */}

                    { /* :TCHAP: customize-room-header-bar - activate audio call only if directmessage and if feature is activated on homeserver
                    {!isVideoRoom(room) && voiceCallButton}
                    */ }
                    {isDirectMessage && TchapUIFeature.isFeatureActiveForHomeserver("feature_audio_call") &&
                        !isVideoRoom && voiceCallButton}
                    {/* end :TCHAP: */}
                </>
            )}

            {showChatButton && <VideoRoomChatButton room={room} />}
            
            {/* :TCHAP: extend-remove-thread-buttons <Tooltip label={_t("common|threads")}>

            <Tooltip label={_t("common|threads")}>
                <IconButton
                    indicator={notificationLevelToIndicator(threadNotifications)}
                    onClick={(evt) => {
                        evt.stopPropagation();
                        RightPanelStore.instance.showOrHidePhase(RightPanelPhases.ThreadPanel);
                        PosthogTrackers.trackInteraction("WebRoomHeaderButtonsThreadsButton", evt);
                    }}
                    aria-label={_t("common|threads")}
                >
                    <ToggleableIcon Icon={ThreadsIcon} phase={RightPanelPhases.ThreadPanel} />
                </IconButton>
            </Tooltip> */}
            {
                TchapUIFeature.isFeatureActiveForHomeserver("feature_thread") ?
                    <Tooltip label={_t("common|threads")} data-testid="room-header-thread-button">
                        <IconButton
                            indicator={notificationLevelToIndicator(threadNotifications)}
                            onClick={(evt) => {
                                evt.stopPropagation();
                                RightPanelStore.instance.showOrHidePhase(RightPanelPhases.ThreadPanel);
                                PosthogTrackers.trackInteraction("WebRoomHeaderButtonsThreadsButton", evt);
                            }}
                            aria-label={_t("common|threads")}
                        >
                            <ThreadsIcon />
                        </IconButton>
                    </Tooltip>
                : null
            }
            {/* end :TCHAP: */}
            {notificationsEnabled && (
                <Tooltip label={_t("notifications|enable_prompt_toast_title")}>
                    <IconButton
                        indicator={notificationLevelToIndicator(globalNotificationState.level)}
                        onClick={(evt) => {
                            evt.stopPropagation();
                            RightPanelStore.instance.showOrHidePhase(RightPanelPhases.NotificationPanel);
                        }}
                        aria-label={_t("notifications|enable_prompt_toast_title")}
                    >
                        <ToggleableIcon Icon={NotificationsIcon} phase={RightPanelPhases.NotificationPanel} />
                    </IconButton>
                </Tooltip>
            )}

            <Tooltip label={_t("right_panel|room_summary_card|title")}>
                <IconButton
                    onClick={(evt) => {
                        evt.stopPropagation();
                        RightPanelStore.instance.showOrHidePhase(RightPanelPhases.RoomSummary);
                    }}
                    aria-label={_t("right_panel|room_summary_card|title")}
                >
                    <ToggleableIcon Icon={RoomInfoIcon} phase={RightPanelPhases.RoomSummary} />
                </IconButton>
            </Tooltip>

            {!isDirectMessage && (
                <Text as="div" size="sm" weight="medium">
                    <FacePile
                        className="mx_RoomHeader_members"
                        members={members.slice(0, 3)}
                        size="20px"
                        overflow={false}
                        viewUserOnClick={false}
                        tooltipLabel={_t("room|header_face_pile_tooltip")}
                        onClick={(e: ButtonEvent) => {
                            RightPanelStore.instance.showOrHidePhase(RightPanelPhases.MemberList);
                            e.stopPropagation();
                        }}
                        aria-label={_t("common|n_members", { count: memberCount })}
                    >
                        {formatCount(memberCount)}
                    </FacePile>
                </Text>
            )}
        </>
    );
}

export default function RoomHeader({
    room,
    additionalButtons,
    oobData,
}: {
    room: Room | LocalRoom;
    additionalButtons?: ViewRoomOpts["buttons"];
    oobData?: IOOBData;
}): JSX.Element {
    const client = useMatrixClientContext();
    const roomName = useRoomName(room);
    const joinRule = useRoomState(room, (state) => state.getJoinRule());
    const dmMember = useDmMember(room);
    const isDirectMessage = !!dmMember;
    const e2eStatus = useEncryptionStatus(client, room);
    const askToJoinEnabled = useFeatureEnabled("feature_ask_to_join");
    const onAvatarClick = (): void => {
        defaultDispatcher.dispatch({
            action: "open_room_settings",
            initial_tab_id: RoomSettingsTab.General,
        });
    };

    return (
        <>
            <CurrentRightPanelPhaseContextProvider roomId={room.roomId}>
                <Flex as="header" align="center" gap="var(--cpd-space-3x)" className="mx_RoomHeader light-panel">
                    <WithPresenceIndicator room={room} size="8px">
                    {/* We hide this from the tabIndex list as it is a pointer shortcut and superfluous for a11y } */}
                        <RoomAvatar
                            room={room}
                            size="40px"
                            oobData={oobData}
                            onClick={room instanceof LocalRoom ? undefined : onAvatarClick}
                            tabIndex={-1}
                            aria-label={_t("room|header_avatar_open_settings_label")}
                        />
                    </WithPresenceIndicator>
                    <button
                        aria-label={_t("right_panel|room_summary_card|title")}
                        tabIndex={0}
                        onClick={
                            room instanceof LocalRoom
                                ? undefined
                                : () => RightPanelStore.instance.showOrHidePhase(RightPanelPhases.RoomSummary)
                        }
                        className="mx_RoomHeader_infoWrapper"
                    >
                        <Box flex="1" className="mx_RoomHeader_info">
                            <Text
                                as="div"
                                size="lg"
                                weight="semibold"
                                dir="auto"
                                role="heading"
                                aria-level={1}
                                className="mx_RoomHeader_heading"
                            >
                                <span className="mx_RoomHeader_truncated mx_lineClamp">{roomName}</span>
                                {/* :tchap: customize-room-header-bar - remove public forum icon
                                {!isDirectMessage && joinRule === JoinRule.Public && (
                                    <Tooltip label={_t("common|public_room")} placement="right">
                                        <PublicIcon
                                            width="16px"
                                            height="16px"
                                            className="mx_RoomHeader_icon"
                                            color="var(--cpd-color-icon-info-primary)"
                                            aria-label={_t("common|public_room")}
                                        />
                                    </Tooltip>
                                )}
                                */}

                                {/* :tchap: customize-room-header-bar - do not show e2eStatus
                                {isDirectMessage && e2eStatus === E2EStatus.Verified && (
                                    <Tooltip label={_t("common|verified")} placement="right">
                                        <VerifiedIcon
                                            width="16px"
                                            height="16px"
                                            className="mx_RoomHeader_icon mx_Verified"
                                            aria-label={_t("common|verified")}
                                        />
                                    </Tooltip>
                                )}
                                */}

                                {/* :tchap: customize-room-header-bar - do not show E2EStatus.Warning
                                {isDirectMessage && e2eStatus === E2EStatus.Warning && (
                                    <Tooltip label={_t("room|header_untrusted_label")} placement="right">
                                        <ErrorIcon
                                            width="16px"
                                            height="16px"
                                            className="mx_RoomHeader_icon mx_Untrusted"
                                            aria-label={_t("room|header_untrusted_label")}
                                        />
                                    </Tooltip>
                                )}
                                */}
                            </Text>
                            {/* :tchap: customize-room-header-bar - Add external caption when room is open to external */}
                            <TchapRoomTypeRoomHeader room={room} isDM={isDirectMessage} />
                            {/* :tchap: end */}
                        </Box>
                    </button>
                    {/* If the room is local-only then we don't want to show any additional buttons, as it won't work */}
                    {room instanceof LocalRoom === false && (
                        <RoomHeaderButtons room={room} additionalButtons={additionalButtons} />
                    )}
                </Flex>
                {askToJoinEnabled && <RoomKnocksBar room={room} />}
            </CurrentRightPanelPhaseContextProvider>
        </>
    );
}
