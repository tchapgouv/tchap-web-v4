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

import { MatrixEvent } from "matrix-js-sdk/src/matrix";
import React from "react";
import classNames from "classnames";
import { MediaEventHelper } from "matrix-react-sdk/src/utils/MediaEventHelper";
import { FileDownloader } from "matrix-react-sdk/src/utils/FileDownloader";
import { _t, _td } from "matrix-react-sdk/src/languageHandler";
import Spinner from "matrix-react-sdk/src/components/views/elements/Spinner";
import { RovingAccessibleTooltipButton } from "matrix-react-sdk/src/accessibility/RovingTabIndex";

import { Media } from "../../../ContentScanningMedia";
import { BlockedIcon } from "../../../../components/views/elements/BlockedIcon";

interface IProps {
    mxEvent: MatrixEvent;

    // XXX: It can take a cycle or two for the MessageActionBar to have all the props/setup
    // required to get us a MediaEventHelper, so we use a getter function instead to prod for
    // one.
    mediaEventHelperGet: () => MediaEventHelper;
}

interface IState {
    loading: boolean;
    blob?: Blob;
    tooltip: string;
    isSafe: boolean;
    isScanning: boolean;
    hasError: boolean;
    downloadClicked: boolean;
}

/**
 * Replacement for the default download action button.
 * Displays content scanning status and prohibits downloading unsafe content.
 */
export default class ContentScanningDownloadActionButton extends React.PureComponent<IProps, IState> {
    private downloader = new FileDownloader();

    public constructor(props: IProps) {
        super(props);

        this.state = {
            hasError: false,
            isSafe: false,
            isScanning: false,
            loading: false,
            tooltip: _td("Downloading"),
            downloadClicked: false,
        };
    }

    private onDownloadClick = async () => {
        if (this.state.loading || this.state.isScanning) return;

        this.setState({
            downloadClicked: true,
            loading: true,
        });

        if (this.state.blob) {
            // Cheat and trigger a download, again.
            return this.doDownload();
        }

        this.setState({ isScanning: true });
        const media = this.props.mediaEventHelperGet().media as any as Media;
        const safe = await Promise.all([
            media.scanSource(),
            media.scanThumbnail(),
        ]).then(([ok1, ok2]) => {
            const isSafe = ok1 && ok2;
            this.setState({
                isScanning: false,
                isSafe,
            });
            return isSafe;
        }).catch(() => {
            this.setState({
                isScanning: false,
                hasError: true,
            });
        });

        if (!safe) {
            return; // don't download
        }

        const blob = await this.props.mediaEventHelperGet().sourceBlob.value;
        this.setState({ blob });
        await this.doDownload();
    };

    private async doDownload() {
        await this.downloader.download({
            blob: this.state.blob,
            name: this.props.mediaEventHelperGet().fileName,
        });
        this.setState({ loading: false });
    }

    public render() {
        let spinner: JSX.Element;
        if (this.state.loading) {
            spinner = <Spinner w={18} h={18} />;
        }

        const classes = classNames({
            'mx_MessageActionBar_maskButton': true,
            'mx_MessageActionBar_downloadButton': true,
            'mx_MessageActionBar_downloadSpinnerButton': !!spinner,
        });

        let tooltip: string;

        if (!this.state.downloadClicked) {
            tooltip = this.state.loading ? _t("Decrypting") : _t("Download");
        } else {
            if (this.state.isScanning) {
                tooltip = _t("Scanning");
            } else if (this.state.hasError) {
                spinner = <BlockedIcon className="mx_BlockedIcon_messageContext" />;
                tooltip = _t("Scan unavailable");
            } else if (this.state.isSafe) {
                tooltip = this.state.loading ? _t("Decrypting") : _t("Download");
            } else {
                spinner = <BlockedIcon className="mx_BlockedIcon_messageContext" />;
                tooltip = _t("Content blocked");
            }
        }

        return <RovingAccessibleTooltipButton
            className={classes}
            title={tooltip}
            onClick={this.onDownloadClick}
            disabled={!!spinner}
        >
            { spinner }
        </RovingAccessibleTooltipButton>;
    }
}
