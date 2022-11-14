/*
Copyright 2017 Vector Creations Ltd
Copyright 2022 DINUM

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

import React from 'react';
import { _t } from 'matrix-react-sdk/src/languageHandler';

import sdk from 'matrix-react-sdk/src/index';
import dis from 'matrix-react-sdk/src/dispatcher/dispatcher';

// export default React.createClass({
//     displayName: 'ExportE2eKeysSuccessDialog',

//     propTypes: {
//         onFinished: PropTypes.func.isRequired,
//     },

interface IProps {
    onFinished: (success: boolean) => void;
}

export default class TchapExportE2eKeysSuccessDialog extends React.Component<IProps> {
    constructor(props) {
        super(props);

        this.onLogoutConfirm = this.onLogoutConfirm.bind(this);
    }

    // componentWillMount: function() {
    //     this._unmounted = false;
    // },

    // componentWillUnmount: function() {
    //     this._unmounted = true;
    // },

    // private onCancelClick(ev) {
    //     ev.preventDefault();
    //     this.props.onFinished(false);
    //     return false;
    // }

    private onLogoutConfirm() {
        this.props.onFinished(true);
        dis.dispatch({ action: 'logout' });
    }

    render() {
        const BaseDialog = sdk.getComponent('views.dialogs.BaseDialog');

        return (
            <BaseDialog className='mx_exportE2eKeysSuccessDialog'
                onFinished={this.props.onFinished}
                title={_t("Export room keys successful")}
            >
                <div className="mx_Dialog_content">
                    <div className="tc_exportE2eKeysSuccessDialog_img">
                        <img src={require('../../../../../res/img/tchap/key-saved.svg')} alt="Export logo" width="70" />
                    </div>

                    <p>{_t('Your Tchap Keys (encryption keys) have been saved successfully.', {}, {
                        b: (sub) => <b>{sub}</b>,
                    })}</p>
                    <p>{_t('You can import them the next time you log in to unlock your messages.')}</p>
                    <p>{_t("Messages received after this save cannot be unlocked. So you won't be able to read them.")}</p>
                </div>
                <div className='mx_Dialog_buttons'>
                    <button className="mx_Dialog_primary" onClick={this.onLogoutConfirm}>
                        { _t("Sign out") }
                    </button>
                </div>
            </BaseDialog>
        );
    }
}
