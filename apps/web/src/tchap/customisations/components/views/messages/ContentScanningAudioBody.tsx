/*
 * Copyright 2022 New Vector Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import { IBodyProps } from "~tchap-web/src/components/views/messages/IBodyProps";

import { Media } from "../../../ContentScanningMedia";
import OriginalAudioBody from "../../../../components/views/messages/OriginalAudioBody";
import { ContentScanningStatus } from "../../../../components/views/elements/ContentScanningStatus";
import { FileBodyFactory } from "~tchap-web/src/components/views/messages/MBodyFactory";
import { type ContentScannerMediaHelper, ScanState } from "~tchap-web/src/tchap/content-scanner/ContentScannerMediaHelper";

interface State {
    scanState: ScanState
}

/**
 * Content scanning component, that wraps MAudioBody from react-sdk.
 * On success it displays the original component (of which a copy exists in this repo).
 */
export default class ContentScanningAudioBody extends React.PureComponent<IBodyProps, State> {
    public static defaultProps = {
        showGenericPlaceholder: true,
    };

    public constructor(props: IBodyProps) {
        super(props);
        this.state = {
            scanState: "scanning"
        };

        if (props.mediaEventHelper) {
            (props.mediaEventHelper as any as ContentScannerMediaHelper).onScanStateChange(() => {
                const scanState = props.mediaEventHelper.getScanState();
                console.log("*** scanState", scanState);
                if (this.state.scanState !== scanState) {
                    this.setState({
                        scanState
                    })
                }
            })
        } else {
            this.state = {
                scanState: "done"
            };
        }
    }

    public render() {
        if (this.state.scanState !== "done") {
            return <FileBodyFactory {...this.props} />
        }

        return (
            <div>
                <OriginalAudioBody {...this.props} />
                <ContentScanningStatus status="done" />
            </div>
        );
    }

    private get media(): Media {
        return this.props.mediaEventHelper!.media as any as Media;
    }
}
