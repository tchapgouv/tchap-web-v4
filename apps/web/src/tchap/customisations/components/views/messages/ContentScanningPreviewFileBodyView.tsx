/*
Copyright 2026 DINUM

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE in the repository root for full details.
*/

import React, { type JSX } from "react";
import { _t, MediaPreviewGroupPreview, type MediaPreviewGroupViewModel } from "@element-hq/web-shared-components";
import { ContentScanningStatus } from "~tchap-web/src/tchap/components/views/elements/ContentScanningStatus";
import TextWithTooltip from "~tchap-web/src/components/views/elements/TextWithTooltip";
import { presentableTextForFile } from "~tchap-web/src/utils/FileUtils";
import { type MediaEventContent } from "matrix-js-sdk/src/types";
import { InlineSpinner } from "@vector-im/compound-web";
import { type ScanState } from "~tchap-web/src/tchap/content-scanner/ContentScannerMediaHelper";

/** Props for a file preview protected by content scanning. */
interface ContentScanningPreviewFileBodyViewProps {
    /** View model for the file preview tile. */
    vm: MediaPreviewGroupViewModel;
    content: MediaEventContent;
    scanState: ScanState;
}

const scanningPlaceholder = (
    textComponent: React.ReactNode,
    icon: React.ReactNode,
    presentableFileName: string,
): React.ReactNode => {
    return (
        <>
            <div className="mx_MediaBody mx_MFileBody_info">
                {icon}
                <TextWithTooltip tooltip={presentableFileName}>
                    <span className="mx_MFileBody_info_filename">{presentableFileName}</span>
                </TextWithTooltip>
            </div>
            {textComponent}
        </>
    );
};

/** Displays the scan state, then the file preview and its successful scan status. */
export function ContentScanningPreviewFileBodyView({
    vm,
    content,
    scanState,
}: Readonly<ContentScanningPreviewFileBodyViewProps>): JSX.Element {
    const presentableFileName = presentableTextForFile(content, _t("common|attachment"), true, true);
    let icon = <span className="mx_MFileBody_info_icon" />;
    let textComponent = <ContentScanningStatus fileName={presentableFileName} status="scanning" />;
    switch (scanState) {
        case "scanning":
            icon = (
                <span className="mx_MFileBody_info_icon">
                    <InlineSpinner size={20} />
                </span>
            );
            return (
                <span className="mx_MFileBody mx_MFileBody_scanning">
                    {scanningPlaceholder(textComponent, icon, presentableFileName)}
                </span>
            );
        case "unsafe":
            textComponent = <ContentScanningStatus fileName={presentableFileName} status="unsafe" />;
            icon = <span className="mx_MFileBody_unsafe_icon" />;
            return (
                <span className="mx_MFileBody mx_MFileBody_unsafe">
                    {scanningPlaceholder(textComponent, icon, presentableFileName)}
                </span>
            );
        case "error":
            textComponent = <ContentScanningStatus fileName={presentableFileName} status="error" />;
            icon = <span className="mx_MFileBody_unsafe_icon" />;
            return (
                <span className="mx_MFileBody mx_MFileBody_error">
                    {scanningPlaceholder(textComponent, icon, presentableFileName)}
                </span>
            );
        default:
            return (
                <div>
                    <MediaPreviewGroupPreview vm={vm} />
                    <ContentScanningStatus status="done" />
                </div>
            );
    }
}
