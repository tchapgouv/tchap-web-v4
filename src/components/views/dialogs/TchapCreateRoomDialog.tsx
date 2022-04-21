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

/*
Note on imports : because this file will be copied to a different directory by the customisations
mechanism, imports must use absolute paths.
Except when importing from other customisation files. Then imports must use relative paths.
*/
import React, { ChangeEvent, createRef, KeyboardEvent } from "react";
import { Room } from "matrix-js-sdk/src/models/room";
import withValidation, { IFieldState } from 'matrix-react-sdk/src/components/views/elements/Validation';
import { _t } from 'matrix-react-sdk/src/languageHandler';
import { IOpts } from "matrix-react-sdk/src/createRoom";
import { getKeyBindingsManager } from "matrix-react-sdk/src/KeyBindingsManager";
import { KeyBindingAction } from "matrix-react-sdk/src/accessibility/KeyboardShortcuts";
import * as sdk from 'matrix-react-sdk/src/index';
import Field from "matrix-react-sdk/src/components/views/elements/Field";

import TchapUtils from '../../../util/TchapUtils';
import TchapRoomTypeSelector from "./../elements/TchapRoomTypeSelector";
import { TchapRoomType } from "../../../@types/tchap";
import roomCreateOptions from "../../../lib/createTchapRoom";
// todo remove unused imports at the end.

interface IProps {
    defaultPublic?: boolean;
    defaultName?: string;
    parentSpace?: Room;
    defaultEncrypted?: boolean;
    onFinished(proceed: boolean, opts?: IOpts): void;
}

interface IState {
    name: string;
    nameIsValid: boolean;
    tchapRoomType: TchapRoomType;
    isFederated: boolean;
}

export default class TchapCreateRoomDialog extends React.Component<IProps, IState> {
    private nameField = createRef<Field>();

    constructor(props) {
        super(props);

        this.state = {
            name: this.props.defaultName || "",
            nameIsValid: false,
            tchapRoomType: TchapRoomType.Private,
            isFederated: true,
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

    private onFederatedChange = (isFederated: boolean) => {
        this.setState({ isFederated: isFederated });
    };

    private onTchapRoomTypeChange = (tchapRoomType: TchapRoomType) => {
        this.setState({ tchapRoomType: tchapRoomType });
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
            this.props.onFinished(true, roomCreateOptions(
                this.state.name,
                this.state.tchapRoomType,
                this.state.isFederated));
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

    render() {
        const shortDomain: string = TchapUtils.getShortDomain();
        const showFederateSwitch: boolean = shortDomain!=="Agent";
        const Field = sdk.getComponent("elements.Field");
        const DialogButtons = sdk.getComponent("elements.DialogButtons");
        const BaseDialog =sdk.getComponent("dialogs.BaseDialog");

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

                        <TchapRoomTypeSelector
                            onChange={this.onTchapRoomTypeChange}
                            value={this.state.tchapRoomType}
                            label={_t("Type of room")}
                            showFederateSwitch={showFederateSwitch}
                            shortDomain={shortDomain}
                            isFederated={this.state.isFederated}
                            onFederatedChange={this.onFederatedChange}
                        />

                    </div>
                </form>
                <DialogButtons primaryButton={_t('Create Room')}
                    onPrimaryButtonClick={this.onOk}
                    onCancel={this.onCancel} />
            </BaseDialog>
        );
    }
}
