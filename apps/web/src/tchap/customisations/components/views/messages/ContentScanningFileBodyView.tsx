import React, { type JSX } from "react";
import { useViewModel, FileBodyView, FileBodyViewModel, _t } from "@element-hq/web-shared-components";
import { ContentScanningStatus } from "~tchap-web/src/tchap/components/views/elements/ContentScanningStatus";
import TextWithTooltip from "~tchap-web/src/components/views/elements/TextWithTooltip";
import { presentableTextForFile } from "~tchap-web/src/utils/FileUtils";
import { MediaEventContent } from "matrix-js-sdk/src/types";
import { InlineSpinner } from "@vector-im/compound-web";
import { ScanState } from "~tchap-web/src/tchap/content-scanner/ContentScannerMediaHelper";

interface ContentScanningFileBodyViewProps {
    /**
     * The view model for the component.
     */
    vm: FileBodyViewModel;

    /**
     * Optional iframe ref for encrypted download flow
     */
    refIFrame?: React.RefObject<HTMLIFrameElement>;

    /**
     * Optional hidden anchor ref used for encrypted download flow
     */
    refLink?: React.RefObject<HTMLAnchorElement>;
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

export function ContentScanningFileBodyView({
    vm,
    refIFrame,
    refLink,
    content,
    scanState,
}: Readonly<ContentScanningFileBodyViewProps>): JSX.Element {
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
                    <FileBodyView vm={vm} refIFrame={refIFrame} refLink={refLink} className="mx_MFileBody" />
                    <ContentScanningStatus status="done" />
                </div>
            );
    }
}
