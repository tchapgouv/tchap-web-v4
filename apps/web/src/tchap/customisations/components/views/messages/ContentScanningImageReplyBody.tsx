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
import Spinner from "~tchap-web/src/components/views/elements/Spinner";
import { IBodyProps } from "~tchap-web/src/components/views/messages/IBodyProps";
import { type MediaEventContent } from "matrix-js-sdk/src/types";
import { _t } from "~tchap-web/src/languageHandler";
import { presentableTextForFile } from "~tchap-web/src/utils/FileUtils";

import OriginalImageReplyBody from "../../../../components/views/messages/OriginalImageReplyBody";
import { BlockedIcon } from "../../../../components/views/elements/BlockedIcon";
import { ContentScanningStatus } from "../../../../components/views/elements/ContentScanningStatus";
import { Media } from "../../../ContentScanningMedia";
import { ScanState } from "~tchap-web/src/tchap/content-scanner/ContentScannerMediaHelper";

const FORCED_IMAGE_HEIGHT = 44;

interface State {
    scanState: ScanState
}
export default class ContentScanningImageReplyBody extends React.PureComponent<IBodyProps, State> {
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
        if (this.state.scanState === "scanning") {
            return (
                <>
                    <div className="mx_MImageBody mx_MImageBody_pending" style={{ height: FORCED_IMAGE_HEIGHT }}>
                        <Spinner />
                    </div>
                    <ContentScanningStatus fileName={this.fileName} status="scanning" />
                </>
            );
        } else if (this.state.scanState === "error") {
            return (
                <>
                    <div className="mx_MImageBody mx_MImageBody_error" style={{ height: FORCED_IMAGE_HEIGHT }}>
                        <BlockedIcon className="mx_MImageBody_BlockedIcon" />
                    </div>
                    <ContentScanningStatus fileName={this.fileName} status="error" />
                </>
            );
        } else if (this.state.scanState === "unsafe") {
            return (
                <>
                    <div className="mx_MImageBody mx_MImageBody_unsafe" style={{ height: FORCED_IMAGE_HEIGHT }}>
                        <BlockedIcon className="mx_MImageBody_BlockedIcon" />
                    </div>
                    <ContentScanningStatus fileName={this.fileName} status="unsafe" />
                </>
            );
        }

        return (
            <>
                {this.renderOriginal()}
                <ContentScanningStatus status="done" />
            </>
        );
    }

    protected renderOriginal() {
        return <OriginalImageReplyBody {...this.props} />;
    }

    private get media(): Media {
        return this.props.mediaEventHelper!.media as any as Media;
    }

    private get fileName() {
        return presentableTextForFile(this.content, _t("common|image"), true, false);
    }

    private get content(): MediaEventContent {
        return this.props.mxEvent.getContent<MediaEventContent>();
    }
}
