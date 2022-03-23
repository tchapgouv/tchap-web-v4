/*
Copyright 2020-2021 The Matrix.org Foundation C.I.C.

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

import React from "react";
import SdkConfig from 'matrix-react-sdk/src/SdkConfig';
import { _t } from "matrix-react-sdk/src/languageHandler";
// We import components from the react-sdk like this to avoid " Attempted to get a component before a skin
// has been loaded"
import * as sdk from 'matrix-react-sdk/src/index';
import AutoDiscoveryUtils, { ValidatedServerConfig } from "matrix-react-sdk/src/utils/AutoDiscoveryUtils";

interface IProps {
    title?: string;
    serverConfig: ValidatedServerConfig;
    onFinished(config?: ValidatedServerConfig): void;
}

interface IState {
    selectedHomeServerUrl: string;
}

export default class TchapServerPickerDialog extends React.PureComponent<IProps, IState> {
    static replaces = 'ServerPickerDialog';

    homeServerList;

    constructor(props) {
        super(props);
        this.homeServerList = SdkConfig.get()['homeserver_list'];
        this.state = {
            selectedHomeServerUrl: props.serverConfig.hsUrl,
        };
    }

    private findHomeServerInListByUrl = url => {
        return this.homeServerList.find(homeServer => homeServer.base_url === url);
    };

    private onSubmit = async (ev) => {
        ev.preventDefault();

        const selectedHomeServer = this.findHomeServerInListByUrl(this.state.selectedHomeServerUrl);

        // Fake the discovery process, we don't need it since we know our own servers.
        const discoveryResult = {
            "m.homeserver": {
                state: "SUCCESS",
                error: null,
                base_url: selectedHomeServer.base_url,
                server_name: selectedHomeServer.server_name,
            },
            "m.identity_server": {
                state: "PROMPT",
                error: null,
                base_url: selectedHomeServer.base_url, // On Tchap our Identity server urls and home server urls are the same
                server_name: selectedHomeServer.server_name,
            },
        };
        // Then continue the same flow as the original ServerPickerDialog.
        const validatedConf = AutoDiscoveryUtils.buildValidatedConfigFromDiscovery(
            discoveryResult['m.homeserver'].server_name, discoveryResult);
        this.props.onFinished(validatedConf);
    };

    private onHomeServerSelected = (homeServerUrl) => {
        this.setState({
            selectedHomeServerUrl: homeServerUrl,
        });
    };

    public render() {
        // Imports
        const BaseDialog = sdk.getComponent('dialogs.BaseDialog');
        const AccessibleButton = sdk.getComponent('elements.AccessibleButton');
        const StyledRadioGroup = sdk.getComponent('elements.StyledRadioGroup');

        const radioButtonOptions = this.homeServerList.map(homeServer => {
            return {
                value: homeServer.base_url,
                label: <span>{ homeServer.server_name }</span>,
                description: <span> { _t("Examples:") } { homeServer.email_examples }</span>,
            };
        });

        return <BaseDialog
            title={this.props.title || _t("Sign into your homeserver")}
            className="mx_ServerPickerDialog"
            contentId="mx_ServerPickerDialog"
            onFinished={this.props.onFinished}
            fixedWidth={false}
            hasCancel={true}
        >
            <form>
                <div>
                    <label htmlFor="homeservers"> { _t("Choose a homeserver :") }</label>
                </div>
                <div>
                    <StyledRadioGroup
                        name="homeservers"
                        value={this.state.selectedHomeServerUrl}
                        onChange={this.onHomeServerSelected}
                        definitions={radioButtonOptions}
                    />
                </div>

                <AccessibleButton className="mx_ServerPickerDialog_continue" kind="primary" onClick={this.onSubmit}>
                    { _t("Continue") }
                </AccessibleButton>

                <h4>{ _t("Learn more") }</h4>
                <a href="https://matrix.org/faq/#what-is-a-homeserver%3F" target="_blank" rel="noreferrer noopener">
                    { _t("About homeservers") }
                </a>

            </form>
        </BaseDialog>;
    }
}
