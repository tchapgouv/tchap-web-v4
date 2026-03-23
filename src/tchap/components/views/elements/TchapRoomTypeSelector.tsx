/*
Copyright 2022 DINUM
*/

import React, { JSX } from "react";
import classNames from "classnames";
import { _t } from "~tchap-web/src/languageHandler";
import StyledRadioButton from "~tchap-web/src/components/views/elements/StyledRadioButton";

import { TchapRoomType } from "../../../@types/tchap";
import { Form, SettingsToggleInput } from "@vector-im/compound-web";
import {LockSolidIcon, PublicIcon, LockOffIcon } from "@vector-im/compound-design-tokens/assets/web/icons";


interface IProps {
    value: TchapRoomType;
    label: string;
    width?: number;
    showFederateSwitch: boolean;
    shortDomain: string;
    forumFederationSwitchValue?: boolean;
    setRoomType(value: TchapRoomType): void;
    setForumFederationSwitchValue(forumFederationSwitchValue: boolean): void;
    createRoomInSpace: boolean;
}

interface IState {
    roomType: TchapRoomType;
}

export default class TchapRoomTypeSelector extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);

        this.state = {
            roomType: TchapRoomType.Private,
        };
    }

    private onRoomTypeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const roomType = e.target.value as TchapRoomType;

        this.setState({ roomType: roomType });
        this.props.setRoomType(roomType);
    };

    public render(): JSX.Element {
        const privateClasses = classNames("tc_TchapRoomTypeSelector_RadioButton", "tc_TchapRoomTypeSelector_private", {
            tc_TchapRoomTypeSelector_RadioButton_selected: this.props.value == TchapRoomType.Private,
        });
        const externalClasses = classNames(
            "tc_TchapRoomTypeSelector_RadioButton",
            "tc_TchapRoomTypeSelector_external",
            {
                tc_TchapRoomTypeSelector_RadioButton_selected: this.props.value == TchapRoomType.External,
            },
        );
        const forumClasses = classNames("tc_TchapRoomTypeSelector_RadioButton", "tc_TchapRoomTypeSelector_forum", {
            tc_TchapRoomTypeSelector_RadioButton_selected: this.props.value === TchapRoomType.Forum,
        });
        const pNonEncryptedClasses = classNames("tc_TchapRoomTypeSelector_RadioButton", "tc_TchapRoomTypeSelector_private_non_encrypted", {
            tc_TchapRoomTypeSelector_RadioButton_selected: (this.props.value === TchapRoomType.PrivateNonEncrypted || this.props.value === TchapRoomType.PrivateNonEncryptedExternal),
        });

        let roomFederateOpt;
        if (this.props.showFederateSwitch) {
            roomFederateOpt = (
                <Form.Root
                onSubmit={(evt) => {
                    evt.preventDefault();
                    evt.stopPropagation();
                }}
            >
                <SettingsToggleInput
                    name="only_joined_members"
                    label={_t('Allow access to this room to all users, even outside "%(domain)s" domain', {
                        domain: this.props.shortDomain,
                    })}
                    onChange={(e) => this.props.setForumFederationSwitchValue(e.target.checked)}
                    checked={this.props.forumFederationSwitchValue}
                />
            </Form.Root>
            );
        }

        return (
            <div className="tc_TchapRoomTypeSelector">
                <label className={privateClasses}>
                    <StyledRadioButton
                        name="roomType"
                        value={TchapRoomType.Private}
                        checked={this.props.value === TchapRoomType.Private}
                        onChange={this.onRoomTypeChange}
                    >
                        <div className="tc_TchapRoomTypeSelector_RadioButton_title">
                            <LockSolidIcon width="30px" />
                            {_t("Private room")}
                        </div>
                        <div>{this.props.createRoomInSpace ? _t("Private discussions accessible to all users of this space.")  : _t("Accessible to all users by invitation from an administrator.")}</div>
                    </StyledRadioButton>
                </label>
                <label className={externalClasses}>
                    <StyledRadioButton
                        name="roomType"
                        value={TchapRoomType.External}
                        checked={this.props.value == TchapRoomType.External}
                        onChange={this.onRoomTypeChange}
                    >
                        <div className="tc_TchapRoomTypeSelector_RadioButton_title">
                            <LockSolidIcon width="30px"  color="var(--external-color)"/>
                            {_t("Private room open to external users")}
                        </div>
                        <div>
                            {this.props.createRoomInSpace ? _t("Private discussions accessible to all users of this space and to external guests by invitation of an administrator.") : _t("Accessible to all users and to external guests by invitation of an administrator.")}
                        </div>
                    </StyledRadioButton>
                </label>
                <label className={pNonEncryptedClasses}>
                    <StyledRadioButton
                        name="roomType"
                        value={TchapRoomType.PrivateNonEncrypted}
                        checked={this.props.value == TchapRoomType.PrivateNonEncrypted}
                        onChange={this.onRoomTypeChange}
                    >
                        <div className="tc_TchapRoomTypeSelector_RadioButton_title">
                            <LockOffIcon width="30px" color="var(--timeline-text-color)" />
                            {_t("icon|private_non_encrypted_title")}
                        </div>
                        <div>{this.props.createRoomInSpace ? _t("Private discussions accessible to all users of this space.")  : _t("Accessible to all users by invitation from an administrator.")}</div>
                    </StyledRadioButton>
                </label>
                <label className={forumClasses}>
                    <StyledRadioButton
                        name="roomType"
                        value={TchapRoomType.Forum}
                        checked={this.props.value == TchapRoomType.Forum}
                        onChange={this.onRoomTypeChange}
                    >
                        <div className="tc_TchapRoomTypeSelector_RadioButton_title">
                            <PublicIcon width="30px" color="var(--timeline-text-color)" />
                            {_t("Forum room")}
                        </div>
                        <div>{this.props.createRoomInSpace ? _t("Public discussion accessible to all users of this space or from a shared link.") : _t("Accessible to all users from the forum directory or from a shared link.")}</div>
                        {roomFederateOpt}
                    </StyledRadioButton>
                </label>
            </div>
        );
    }
}
