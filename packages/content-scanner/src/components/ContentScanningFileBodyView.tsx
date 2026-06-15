import React, { useState, useEffect } from "react";
import { type MediaScannerWrapperProps } from "@element-hq/element-web-module-api";
import { type MediaEventContent } from "matrix-js-sdk/src/types";
import { InlineSpinner, Text, Tooltip } from "compound-web-tchap";

// ============================================================================
// Types
// ============================================================================

interface ContentScanningWrapperProps extends MediaScannerWrapperProps {
    contentScannerUrl: string;
    OriginalComponent: React.FC;
}

type ScanStatus = "scanning" | "unsafe" | "error" | "done";

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Extract file name from media event content.
 * Falls back to provided default if name is not found.
 */
function extractFileName(content: MediaEventContent, defaultName: string = "File"): string {
    if (content.body && typeof content.body === "string") {
        return content.body;
    }
    return defaultName;
}

/**
 * Get a truncated/displayable version of a file name.
 * Handles long file names by limiting length and preserving extension.
 */
function getDisplayFileName(fileName: string, maxLength: number = 50): string {
    if (fileName.length <= maxLength) {
        return fileName;
    }
    // Preserve extension by splitting at the last dot
    const lastDotIndex = fileName.lastIndexOf(".");
    if (lastDotIndex === -1) {
        return fileName.substring(0, maxLength - 3) + "...";
    }
    const extension = fileName.substring(lastDotIndex);
    const nameWithoutExt = fileName.substring(0, lastDotIndex);
    const availableLength = maxLength - extension.length - 3;
    return nameWithoutExt.substring(0, Math.max(1, availableLength)) + "..." + extension;
}

// ============================================================================
// Local Components
// ============================================================================

/**
 * StatusIcon component that shows visual indicator based on scanning state.
 */
const StatusIcon: React.FC<{ status: ScanStatus }> = ({ status }) => {
    if (status === "scanning") {
        return (
            <span className="mx_MFileBody_info_icon" style={{ display: "flex", alignItems: "center" }}>
                <InlineSpinner />
            </span>
        );
    }
    // For unsafe and error states, use CSS class for styling
    return <span className="mx_MFileBody_unsafe_icon" />;
};

/**
 * ContentScanningStatus component that displays status text with tooltip.
 * Uses compound-web Text and Tooltip components.
 */
const ContentScanningStatus: React.FC<{ fileName: string; status: ScanStatus }> = ({ fileName, status }) => {
    const getStatusText = (): string => {
        switch (status) {
            case "scanning":
                return "Scanning";
            case "unsafe":
                return "Content blocked";
            case "error":
                return "Scan unavailable";
            case "done":
            default:
                return "Trusted";
        }
    };

    const getStatusClass = (): string => {
        const baseClass = "mx_ContentScanningStatus";
        switch (status) {
            case "scanning":
                return `${baseClass} ${baseClass}_scanning`;
            case "unsafe":
                return `${baseClass} ${baseClass}_unsafe`;
            case "error":
                return `${baseClass} ${baseClass}_error`;
            case "done":
            default:
                return `${baseClass} ${baseClass}_done`;
        }
    };

    return (
        <div className={getStatusClass()}>
            <Tooltip label={fileName}>
                <Text>{getStatusText()}</Text>
            </Tooltip>
        </div>
    );
};

/**
 * FileInfoDisplay component that shows file name with tooltip.
 */
const FileInfoDisplay: React.FC<{ fileName: string; displayName: string }> = ({ fileName, displayName }) => {
    return (
        <div className="mx_MediaBody mx_MFileBody_info">
            <Tooltip label={fileName}>
                <span className="mx_MFileBody_info_filename">{displayName}</span>
            </Tooltip>
        </div>
    );
};

// ============================================================================
// Main Component
// ============================================================================

/**
 * Content scanning wrapper component that wraps a file body view.
 * Scans media files before displaying them and shows appropriate UI states.
 *
 * This component is completely self-contained and independent from the main
 * application. It uses only compound-web components and matrix-js-sdk types.
 *
 * The original file body component is rendered only after media has been
 * verified as safe by the content scanner. During scanning or if content
 * is unsafe/error, a placeholder with status information is shown instead.
 */
export const ContentScanningFileBodyView: React.FC<ContentScanningWrapperProps> = ({
    OriginalComponent,
    contentScannerUrl,
    ...bodyProps
}) => {
    const [isScanning, setIsScanning] = useState(true);
    const [isSafe, setIsSafe] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        // Extract media from body props
        const media = bodyProps.mediaEventHelper?.media as any;
        if (!media) {
            setIsScanning(false);
            setHasError(true);
            return;
        }

        // Perform content scanning on both source and thumbnail
        Promise.all([media.scanSource(), media.scanThumbnail()])
            .then(([sourceOk, thumbnailOk]) => {
                setIsScanning(false);
                setIsSafe(sourceOk && thumbnailOk);
            })
            .catch((error) => {
                console.error("Content scanning error:", error);
                setIsScanning(false);
                setHasError(true);
            });
    }, [bodyProps.mediaEventHelper]);

    // Extract file information from the media event
    const content = bodyProps.mxEvent.getContent<MediaEventContent>();
    const fileName = extractFileName(content, "File");
    const displayFileName = getDisplayFileName(fileName);

    if (isScanning) {
        return (
            <span className="mx_MFileBody mx_MFileBody_scanning">
                <StatusIcon status="scanning" />
                <FileInfoDisplay fileName={fileName} displayName={displayFileName} />
                <ContentScanningStatus fileName={fileName} status="scanning" />
            </span>
        );
    }

    if (hasError) {
        return (
            <span className="mx_MFileBody mx_MFileBody_error">
                <StatusIcon status="error" />
                <FileInfoDisplay fileName={fileName} displayName={displayFileName} />
                <ContentScanningStatus fileName={fileName} status="error" />
            </span>
        );
    }

    if (!isSafe) {
        return (
            <span className="mx_MFileBody mx_MFileBody_unsafe">
                <StatusIcon status="unsafe" />
                <FileInfoDisplay fileName={fileName} displayName={displayFileName} />
                <ContentScanningStatus fileName={fileName} status="unsafe" />
            </span>
        );
    }

    // Media is safe, render the original file body component
    return <OriginalComponent {...bodyProps} />;
};
