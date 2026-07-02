/* eslint-disable max-len */
/*
Copyright 2021 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React, { JSX, ReactNode, useState } from "react";
import { JoinRule, RestrictedAllowType, type Room, EventType } from "matrix-js-sdk/src/matrix";
import StyledRadioGroup, { IDefinition } from "~tchap-web/src/components/views/elements/StyledRadioGroup";
import { _t } from "~tchap-web/src/languageHandler";
import AccessibleButton from "~tchap-web/src/components/views/elements/AccessibleButton";
import SpaceStore from "~tchap-web/src/stores/spaces/SpaceStore";
import RoomAvatar from "~tchap-web/src/components/views/avatars/RoomAvatar";
import Modal from "~tchap-web/src/Modal";
import ManageRestrictedJoinRuleDialog from "~tchap-web/src/components/views/dialogs/ManageRestrictedJoinRuleDialog";
import RoomUpgradeWarningDialog, {
    IFinishedOpts,
} from "~tchap-web/src/components/views/dialogs/RoomUpgradeWarningDialog";
import { upgradeRoom } from "~tchap-web/src/utils/RoomUpgrade";
import { arrayHasDiff } from "~tchap-web/src/utils/arrays";
import { useLocalEcho } from "~tchap-web/src/hooks/useLocalEcho";
import dis from "~tchap-web/src/dispatcher/dispatcher";
import { Action } from "~tchap-web/src/dispatcher/actions";
import { ViewRoomPayload } from "~tchap-web/src/dispatcher/payloads/ViewRoomPayload";
import { doesRoomVersionSupport, PreferredRoomVersions } from "~tchap-web/src/utils/PreferredRoomVersions";
import QuestionDialog from "~tchap-web/src/components/views/dialogs/QuestionDialog";

import TchapUIFeature from "../../../util/TchapUIFeature";
import {
    TchapRoomAccessRule,
    TchapIAccessRuleEventContent,
    TchapRoomAccessRulesEventId,
    TchapRoomType,
} from "../../../@types/tchap";
import TchapRoomLinkAccess from "../rooms/TchapRoomLinkAccess";
import TchapRoomUtils from "../../../util/TchapRoomUtils";
import { RoomJoinRulesEventContent } from "matrix-js-sdk/src/types";
import { RoomSettingsTab } from "~tchap-web/src/components/views/dialogs/RoomSettingsDialog";
import { Form, SettingsToggleInput } from "@vector-im/compound-web";
import { useTchapRoom } from "~tchap-web/src/tchap/util/TchapRoomHook";

interface JoinRuleSettingsProps {
    room: Room;
    promptUpgrade?: boolean;
    closeSettingsFn(): void;
    onError(error: unknown): void;
    beforeChange?(joinRule: JoinRule): Promise<boolean>; // if returns false then aborts the change
    aliasWarning?: ReactNode;
    disabledOptions?: Set<JoinRule>;
    hiddenOptions?: Set<JoinRule>;
    recommendedOption?: JoinRule;
}

const JoinRuleSettings: React.FC<JoinRuleSettingsProps> = ({
    room,
    promptUpgrade,
    aliasWarning,
    onError,
    beforeChange,
    closeSettingsFn,
    disabledOptions,
    hiddenOptions,
    recommendedOption,
}) => {
    const cli = room.client;

    // Used to hide join rule option if link is activated
    const [isShareLinkActivated, setIsLinkSharingActivated] = useState(false);

    const roomSupportsRestricted = doesRoomVersionSupport(room.getVersion(), PreferredRoomVersions.RestrictedRooms);
    const preferredRestrictionVersion =
        !roomSupportsRestricted && promptUpgrade ? PreferredRoomVersions.RestrictedRooms : undefined;

    const disabled = !room.currentState.mayClientSendStateEvent(EventType.RoomJoinRules, cli);

    const [content, setContent] = useLocalEcho<RoomJoinRulesEventContent | undefined, RoomJoinRulesEventContent>(
        () => room.currentState.getStateEvents(EventType.RoomJoinRules, "")?.getContent(),
        (content) => cli.sendStateEvent(room.roomId, EventType.RoomJoinRules, content, ""),
        onError,
    );
    const { join_rule: joinRule = JoinRule.Invite } = content || {};
    const restrictedAllowRoomIds =
        joinRule === JoinRule.Restricted
            ? content?.allow?.filter((o) => o.type === RestrictedAllowType.RoomMembership).map((o) => o.room_id)
            : undefined;

    const { currentRoomType } = useTchapRoom(room);
    const [contentTchapAccessRule, setTchapAccessRule] = useLocalEcho<TchapIAccessRuleEventContent>(
        () => room.currentState.getStateEvents(TchapRoomAccessRulesEventId, "")?.getContent(),
        (content) => cli.sendStateEvent(room.roomId, TchapRoomAccessRulesEventId, content, ""),
        onError,
    );
    const { rule: accessRule = undefined, encrypted = undefined } = contentTchapAccessRule || {};

    const editRestrictedRoomIds = async (): Promise<string[] | undefined> => {
        let selected = restrictedAllowRoomIds;
        if (!selected?.length && SpaceStore.instance.activeSpaceRoom) {
            selected = [SpaceStore.instance.activeSpaceRoom.roomId];
        }

        const { finished } = Modal.createDialog(
            ManageRestrictedJoinRuleDialog,
            {
                room,
                selected,
            },
            "mx_ManageRestrictedJoinRuleDialog_wrapper",
        );

        const [roomIds] = await finished;
        return roomIds;
    };

    const upgradeRequiredDialog = (targetVersion: string, description?: ReactNode): void => {
        Modal.createDialog(RoomUpgradeWarningDialog, {
            roomId: room.roomId,
            targetVersion,
            description,
            doUpgrade: async (
                opts: IFinishedOpts,
                fn: (progressText: string, progress: number, total: number) => void,
            ): Promise<void> => {
                const roomId = await upgradeRoom(room, targetVersion, opts.invite, true, true, true, (progress) => {
                    const total = 2 + progress.updateSpacesTotal + progress.inviteUsersTotal;
                    if (!progress.roomUpgraded) {
                        fn(_t("room_settings|security|join_rule_upgrade_upgrading_room"), 0, total);
                    } else if (!progress.roomSynced) {
                        fn(_t("room_settings|security|join_rule_upgrade_awaiting_room"), 1, total);
                    } else if (
                        progress.inviteUsersProgress !== undefined &&
                        progress.inviteUsersProgress < progress.inviteUsersTotal
                    ) {
                        fn(
                            _t("room_settings|security|join_rule_upgrade_sending_invites", {
                                progress: progress.inviteUsersProgress,
                                count: progress.inviteUsersTotal,
                            }),
                            2 + progress.inviteUsersProgress,
                            total,
                        );
                    } else if (
                        progress.updateSpacesProgress !== undefined &&
                        progress.updateSpacesProgress < progress.updateSpacesTotal
                    ) {
                        fn(
                            _t("room_settings|security|join_rule_upgrade_updating_spaces", {
                                progress: progress.updateSpacesProgress,
                                count: progress.updateSpacesTotal,
                            }),
                            2 + (progress.inviteUsersProgress ?? 0) + progress.updateSpacesProgress,
                            total,
                        );
                    }
                });

                closeSettingsFn?.();

                // switch to the new room in the background
                dis.dispatch<ViewRoomPayload>({
                    action: Action.ViewRoom,
                    room_id: roomId,
                    metricsTrigger: undefined, // other
                });

                // open new settings on this tab
                dis.dispatch({
                    action: "open_room_settings",
                    initial_tab_id: RoomSettingsTab.Security,
                });
            },
        });
    };

    const openedToExternalUsers = accessRule === TchapRoomAccessRule.Unrestricted;
    // should not authorize external user in forum
    const disableOpenToExternalUsers = openedToExternalUsers || currentRoomType === TchapRoomType.Forum;

    const onExternalAccessChange = async () => {
        const { finished } = Modal.createDialog(QuestionDialog, {
            title: _t("Allow external users to join this room"),
            description:
                _t("This action is irreversible.") +
                " " +
                _t("Are you sure you want to allow the externals to join this room ?"),
            button: _t("action|ok"),
        });
        const [confirmed] = await finished;
        if (!confirmed) return;
        setTchapAccessRule({ rule: TchapRoomAccessRule.Unrestricted, encrypted });
    };

    const renderStandaloneExternalButton = () => {
        return (
            <Form.Root
                className="tc_JoinRuleSettings_externs_switch"
                onSubmit={(evt) => {
                    evt.preventDefault();
                    evt.stopPropagation();
                }}
            >
                <SettingsToggleInput
                    name="open_to_external_switch"
                    label={_t("Allow external users to join this room")}
                    onChange={onExternalAccessChange}
                    checked={openedToExternalUsers}
                    disabled={disableOpenToExternalUsers}
                    helpMessage={_t("room_settings|security|link_sharing_caption")}
                />
            </Form.Root>
        );
    };

    /* code from element web
    const definitions: IDefinition<JoinRule>[] = [{
        value: JoinRule.Invite,
        label: _t("Private (invite only)"),
        description: _t("room_settings|security|join_rule_invite_description"),
        checked: joinRule === JoinRule.Invite || (joinRule === JoinRule.Restricted && !restrictedAllowRoomIds?.length),
    }, {
        value: JoinRule.Public,
        label: _t("common|public"),
        description: <>
            { _t("Anyone can find and join.") }
            { aliasWarning }
        </>,
    }]; */

    // :TCHAP: we do not permit to change the type of room, thus display only one option
    const definitions: IDefinition<JoinRule>[] = [];

    // :TCHAP: do we need to add the following condition as well (joinRule === JoinRule.Restricted && !restrictedAllowRoomIds?.length)?
    if (joinRule === JoinRule.Invite) {
        let privateRoomDescription = <div>{_t("room_settings|security|join_rule_invite_description")}</div>;
        // :TCHAP: We could add functions in 'TchapUtils' to determine the type of room and rely on this logic to display components as we did in Android :
        // :TCHAP: https://github.com/tchapgouv/tchap-android/blob/develop/vector/src/main/java/fr/gouv/tchap/core/utils/RoomUtils.kt#L31
        if (accessRule) {
            privateRoomDescription = (
                <div>
                    <div>{_t("room_settings|security|join_rule_invite_description")}</div>
                    <span>{renderStandaloneExternalButton()}</span>
                </div>
            );
        }

        definitions.push({
            value: JoinRule.Invite,
            label: _t("create_room|join_rule_invite"),
            description: privateRoomDescription,
            checked: true,
        });
    } else if (joinRule === JoinRule.Public) {
        definitions.push({
            value: JoinRule.Public,
            label: _t("common|public"),
            description: (
                <>
                    {_t("room_settings|security|join_rule_public_description")}
                    {aliasWarning}
                </>
            ),
        });
    }

    /**
     * TCHAP : disable space-related options if create space feature is not enabled
     */
    if (TchapUIFeature.isSpaceDisplayEnabled) {
        if (roomSupportsRestricted || preferredRestrictionVersion || joinRule === JoinRule.Restricted) {
            let upgradeRequiredPill;
            if (preferredRestrictionVersion) {
                upgradeRequiredPill = (
                    <span className="mx_JoinRuleSettings_upgradeRequired">
                        {_t("room_settings|security|join_rule_upgrade_required")}
                    </span>
                );
            }

            let description;
            if (joinRule === JoinRule.Restricted && restrictedAllowRoomIds?.length) {
                // only show the first 4 spaces we know about, so that the UI doesn't grow out of proportion there are lots.
                const shownSpaces = restrictedAllowRoomIds
                    .map((roomId) => cli.getRoom(roomId))
                    .filter((room) => room?.isSpaceRoom())
                    .slice(0, 4) as Room[];

                let moreText;
                if (shownSpaces.length < restrictedAllowRoomIds.length) {
                    if (shownSpaces.length > 0) {
                        moreText = _t("room_settings|security|join_rule_restricted_n_more", {
                            count: restrictedAllowRoomIds.length - shownSpaces.length,
                        });
                    } else {
                        moreText = _t("room_settings|security|join_rule_restricted_summary", {
                            count: restrictedAllowRoomIds.length,
                        });
                    }
                }

                const onRestrictedRoomIdsChange = (newAllowRoomIds: string[]) => {
                    if (!arrayHasDiff(restrictedAllowRoomIds || [], newAllowRoomIds)) return;

                    if (!newAllowRoomIds.length) {
                        setContent({
                            join_rule: JoinRule.Invite,
                        });
                        return;
                    }

                    setContent({
                        join_rule: JoinRule.Restricted,
                        allow: newAllowRoomIds.map((roomId) => ({
                            type: RestrictedAllowType.RoomMembership,
                            room_id: roomId,
                        })),
                    });
                };

                const onEditRestrictedClick = async () => {
                    const restrictedAllowRoomIds = await editRestrictedRoomIds();
                    if (!Array.isArray(restrictedAllowRoomIds)) return;
                    if (restrictedAllowRoomIds.length > 0) {
                        onRestrictedRoomIdsChange(restrictedAllowRoomIds);
                    } else {
                        onChange(JoinRule.Invite);
                    }
                };

                description = (
                    <div>
                        <span>
                            {_t(
                                "room_settings|security|join_rule_restricted_description",
                                {},
                                {
                                    a: (sub) => (
                                        <AccessibleButton
                                            disabled={disabled}
                                            onClick={onEditRestrictedClick}
                                            kind="link_inline"
                                        >
                                            {sub}
                                        </AccessibleButton>
                                    ),
                                },
                            )}
                        </span>

                        <div className="mx_JoinRuleSettings_spacesWithAccess">
                            <h4>{_t("room_settings|security|join_rule_restricted_description_spaces")}</h4>
                            {shownSpaces.map((room) => {
                                return (
                                    <span key={room.roomId}>
                                        <RoomAvatar room={room} size="32px" />
                                        {room.name}
                                    </span>
                                );
                            })}
                            {moreText && <span>{moreText}</span>}
                        </div>
                    </div>
                );
            } else if (SpaceStore.instance.activeSpaceRoom) {
                description = _t(
                    "room_settings|security|join_rule_restricted_description_active_space",
                    {},
                    {
                        spaceName: () => <b>{SpaceStore.instance.activeSpaceRoom!.name}</b>,
                    },
                );
            } else {
                description = _t("room_settings|security|join_rule_restricted_description_prompt");
            }

            definitions.splice(1, 0, {
                value: JoinRule.Restricted,
                label: (
                    <>
                        {_t("room_settings|security|join_rule_restricted")}

                        {/* :tchap: do not show the pill upgrade room as it is not user friendly
                        https://github.com/tchapgouv/tchap-web-v4/issues/578
                         {upgradeRequiredPill} */}
                    </>
                ),
                description,
                // if there are 0 allowed spaces then render it as invite only instead
                checked: joinRule === JoinRule.Restricted && !!restrictedAllowRoomIds?.length,
            });
        }
    }

    const onChange = async (joinRule: JoinRule) => {
        const beforeJoinRule = content?.join_rule;

        let restrictedAllowRoomIds: string[] | undefined;
        if (joinRule === JoinRule.Restricted) {
            if (beforeJoinRule === JoinRule.Restricted || roomSupportsRestricted) {
                // Have the user pick which spaces to allow joins from
                restrictedAllowRoomIds = await editRestrictedRoomIds();
                if (!Array.isArray(restrictedAllowRoomIds)) return;
            } else if (preferredRestrictionVersion) {
                // Block this action on a room upgrade otherwise it'd make their room unjoinable
                const targetVersion = preferredRestrictionVersion;

                let warning: JSX.Element | undefined;
                const userId = cli.getUserId()!;
                const unableToUpdateSomeParents = Array.from(SpaceStore.instance.getKnownParents(room.roomId)).some(
                    (roomId) => !cli.getRoom(roomId)?.currentState.maySendStateEvent(EventType.SpaceChild, userId),
                );
                if (unableToUpdateSomeParents) {
                    warning = <b>{_t("room_settings|security|join_rule_restricted_upgrade_warning")}</b>;
                }

                upgradeRequiredDialog(
                    targetVersion,
                    <>
                        {_t("room_settings|security|join_rule_restricted_upgrade_description")}
                        {warning}
                    </>,
                );
            }
            // when setting to 0 allowed rooms/spaces set to invite only instead as per the note
            if (!restrictedAllowRoomIds?.length) {
                joinRule = JoinRule.Invite;
            }
        }

        if (beforeJoinRule === joinRule && !restrictedAllowRoomIds) return;
        if (beforeChange && !(await beforeChange(joinRule))) return;

        const newContent: RoomJoinRulesEventContent = {
            join_rule: joinRule,
        };

        // pre-set the accepted spaces with the currently viewed one as per the microcopy
        if (joinRule === JoinRule.Restricted) {
            newContent.allow = restrictedAllowRoomIds?.map((roomId) => ({
                type: RestrictedAllowType.RoomMembership,
                room_id: roomId,
            }));
        }

        setContent(newContent);
    };

    // This is a callback function  used by the child link sharing component
    // It will indicate wether or not to hide the joinrule options or not
    const activateLinkSharingChange = async (checked: boolean, init: boolean) => {
        // hide or display the join rules
        setIsLinkSharingActivated(checked);

        // if its the initialisation phase we dont need to do anything more other than hide or not the join options
        if (init) return;

        // deactivating the share link
        if (!checked) {
            const currentJoinRule = TchapRoomUtils.getRoomJoinRule(room);
            setContent(currentJoinRule ? { join_rule: JoinRule.Invite } : ({} as RoomJoinRulesEventContent));
        }
    };

    const renderLinkSharing = () => {
        return <TchapRoomLinkAccess room={room} onUpdateParentView={activateLinkSharingChange}></TchapRoomLinkAccess>;
    };

    return (
        <>
            {!isShareLinkActivated && (
                <StyledRadioGroup
                    name="joinRule"
                    value={joinRule}
                    onChange={onChange}
                    definitions={definitions}
                    disabled={disabled}
                    className="mx_JoinRuleSettings_radioButton"
                />
            )}
            {isShareLinkActivated && renderStandaloneExternalButton()}
            {renderLinkSharing()}
        </>
    );
};

export default JoinRuleSettings;
