/*
Copyright 2017 Michael Telatynski <7t3chguy@gmail.com>
Copyright 2020, 2021 The Matrix.org Foundation C.I.C.

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

import React, { ChangeEvent, createRef, KeyboardEvent, SyntheticEvent } from "react";
import { Room } from "matrix-js-sdk/src/models/room";
import { JoinRule, Preset, Visibility } from "matrix-js-sdk/src/@types/partials";

import SdkConfig from 'matrix-react-sdk/src/SdkConfig';
import withValidation, { IFieldState } from 'matrix-react-sdk/src/components/views/elements/Validation';
import { _t } from 'matrix-react-sdk/src/languageHandler';
import { MatrixClientPeg } from 'matrix-react-sdk/src/MatrixClientPeg';
import { IOpts, privateShouldBeEncrypted } from "matrix-react-sdk/src/createRoom";
import { CommunityPrototypeStore } from "matrix-react-sdk/src/stores/CommunityPrototypeStore";
import { replaceableComponent } from "matrix-react-sdk/src/utils/replaceableComponent";
import Field from "matrix-react-sdk/src/components/views/elements/Field";
import RoomAliasField from "matrix-react-sdk/src/components/views/elements/RoomAliasField";
import LabelledToggleSwitch from "matrix-react-sdk/src/components/views/elements/LabelledToggleSwitch";
import DialogButtons from "matrix-react-sdk/src/components/views/elements/DialogButtons";
import BaseDialog from "matrix-react-sdk/src/components/views/dialogs/BaseDialog";
import SpaceStore from "matrix-react-sdk/src/stores/spaces/SpaceStore";
import Dropdown from "matrix-react-sdk/src/components/views/elements/Dropdown";
import { getKeyBindingsManager } from "matrix-react-sdk/src/KeyBindingsManager";
import { KeyBindingAction } from "matrix-react-sdk/src/accessibility/KeyboardShortcuts";

// todo remove unused imports at the end.

// todo maybe move this somewhere else ?
export enum TchapRoomType {
    Direct = "direct", // todo not used in this file, we haven't implemented DMs yet
    Private = "private",
    External = "external",
    Forum = "forum",
}

interface IProps {
    defaultPublic?: boolean;
    defaultName?: string;
    parentSpace?: Room;
    defaultEncrypted?: boolean;
    onFinished(proceed: boolean, opts?: IOpts): void;
}

interface IState {
//    joinRule: JoinRule;
 //   isPublic: boolean;
  //  isEncrypted: boolean;
    name: string;
    //topic: string;
   // alias: string;
    //detailsOpen: boolean;
    //noFederate: boolean;
    nameIsValid: boolean;
    //canChangeEncryption: boolean;
    tchapRoomType: TchapRoomType;
}

export default class TchapCreateRoomDialog extends React.Component<IProps, IState> {
    private nameField = createRef<Field>();

    constructor(props) {
        super(props);

        this.state = {
            name: this.props.defaultName || "",
            nameIsValid: false,
            tchapRoomType: TchapRoomType.Private,
        };
    }

    componentDidMount() {
        // move focus to first field when showing dialog
        this.nameField.current.focus();
    }

    componentWillUnmount() {
    }

    private onCancel = () => {
        this.props.onFinished(false);
    };

    private onTchapRoomTypeChange = (tchapRoomType: TchapRoomType) => {
        this.setState({ tchapRoomType });
    };

    private onNameChange = (ev: ChangeEvent<HTMLInputElement>) => {
        this.setState({ name: ev.target.value });
    };

    private onNameValidate = async (fieldState: IFieldState) => {
        const result = await TchapCreateRoomDialog.validateRoomName(fieldState);
        this.setState({ nameIsValid: result.valid });
        return result;
    };

    private static validateRoomName = withValidation({
        rules: [
            {
                key: "required",
                test: async ({ value }) => !!value,
                invalid: () => _t("Please enter a name for the room"),
            },
        ],
    });

    private onKeyDown = (event: KeyboardEvent) => {
        const action = getKeyBindingsManager().getAccessibilityAction(event);
        switch (action) {
            case KeyBindingAction.Enter:
                this.onOk();
                event.preventDefault();
                event.stopPropagation();
                break;
        }
    };

    private onOk = async () => {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement) {
            activeElement.blur();
        }
        await this.nameField.current.validate({ allowEmpty: false });
        // Validation and state updates are async, so we need to wait for them to complete
        // first. Queue a `setState` callback and wait for it to resolve.
        await new Promise<void>(resolve => this.setState({}, resolve));
        if (this.state.nameIsValid) {
            this.props.onFinished(true, this.roomCreateOptions());
        } else {
            let field;
            if (!this.state.nameIsValid) {
                field = this.nameField.current;
            }
            if (field) {
                field.focus();
                field.validate({ allowEmpty: false, focused: true });
            }
        }
    };

    private roomCreateOptions() {
        const opts: IOpts = {};
        const createOpts: IOpts["createOpts"] = opts.createOpts = {};
        createOpts.name = this.state.name;
        return opts;
    }

    render() {
        const title = _t("Create a room");
        /* todo do we need this ?
        if (CommunityPrototypeStore.instance.getSelectedCommunityId()) {
            const name = CommunityPrototypeStore.instance.getSelectedCommunityName();
            title = _t("Create a room in %(communityName)s", { communityName: name });
        } else if (!this.props.parentSpace) {
            title = this.state.joinRule === JoinRule.Public ? _t('Create a public room') : _t('Create a private room');
        }
        */

        return (
            <BaseDialog
                className="mx_CreateRoomDialog"
                onFinished={this.props.onFinished}
                title={title}
                screenName="CreateRoom"
            >
                <form onSubmit={this.onOk} onKeyDown={this.onKeyDown}>
                    <div className="mx_Dialog_content">
                        <Field
                            ref={this.nameField}
                            label={_t('Name')}
                            onChange={this.onNameChange}
                            onValidate={this.onNameValidate}
                            value={this.state.name}
                            className="mx_CreateRoomDialog_name"
                        />

                        { /** todo move this to another file */ }
                        <Dropdown
                            id="tc_TchapRoomTypeDropdown"
                            className="tc_TchapRoomTypeDropdown"
                            onOptionChange={this.onTchapRoomTypeChange}
                            menuWidth={448}
                            value={this.state.tchapRoomType}
                            label={_t("Type of room")}
                        >
                            <div key={TchapRoomType.Private}>
                                { _t("Salon without externs") }
                            </div>
                            <div key={TchapRoomType.External}>
                                { _t("Salon with externs") }
                            </div>
                            <div key={TchapRoomType.Forum}>
                                { _t("Forum") }
                            </div>
                        </Dropdown>

                    </div>
                </form>
                <DialogButtons primaryButton={_t('Create Room')}
                    onPrimaryButtonClick={this.onOk}
                    onCancel={this.onCancel} />
            </BaseDialog>
        );
    }
}
