/*
Copyright 2019, 2020 New Vector Ltd

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

import React, { CSSProperties } from 'react';
import SdkConfig from 'matrix-react-sdk/src/SdkConfig';

import VectorAuthFooter from "./VectorAuthFooter";

export default class TchapAuthPage extends React.PureComponent {

    public render() {
        const pageStyle = {
            background: 'rgb(55, 76, 114)'
        };

        const modalStyle: CSSProperties = {
            position: 'relative',
            background: 'initial',
        };

        const blurStyle: CSSProperties = {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            filter: 'blur(40px)',
            background: pageStyle.background,
        };

        const modalContentStyle: CSSProperties = {
            display: 'flex',
            zIndex: 1,
            background: 'rgba(255, 255, 255, 0.59)',
            borderRadius: '8px',
        };

        return (
            <div className="mx_AuthPage" style={pageStyle}>
                <div className="mx_AuthPage_modal" style={modalStyle}>
                    <div className="mx_AuthPage_modalBlur" style={blurStyle} />
                    <div className="mx_AuthPage_modalContent" style={modalContentStyle}>
                        { this.props.children }
                    </div>
                </div>
                <TchapAuthFooter />
            </div>
        );
    }
}
