/**
 * Metadata about a media file being scanned.
 * @alpha Subject to change.
 */
export type MediaMetadata = {
    /** The MIME type of the file. */
    mimeType: string;
    /** The file name, if available. */
    fileName?: string;
    /** The file size in bytes. */
    fileSize: number;
};

/**
 * Result of scanning a media file.
 * @alpha Subject to change.
 */
export type MediaScanResult = {
    /** Whether the media is safe to use. */
    safe: boolean;
    /** If not safe, a reason why the file was flagged. */
    reason?: string;
    /** URL to more information about why the file was flagged. */
    infoUrl?: string;
};

/**
 * Props passed to a media scanner wrapper component.
 * @alpha Subject to change.
 */
export type MediaScannerWrapperProps<TOriginalComponentProps = Record<string, any>> = {
    /** The original component being wrapped, as a React component type. */
    OriginalComponent: React.ComponentType<TOriginalComponentProps>;
    scannerAccessToken: string;
    /** Props to pass through to the original component. */
    [key: string]: any;
};

/**
 * Factory function that creates a custom Media instance.
 * @alpha Subject to change.
 */
export type CustomMediaFactory = (
    content: any, // Partial<MediaEventContent>
    client?: any, // MatrixClient
) => any; // Media

/**
 * API for modules to register media scanning handlers.
 * When multiple handlers are registered, they are called in priority order (highest first).
 * All handlers must pass (return safe=true) for a file to be allowed.
 * @alpha Subject to change.
 */
export interface MediaScanningApi {
    /**
     * Register a wrapper component for file body views.
     * @param wrapper - A React component that wraps the original file body component
     */
    registerWrapperFileBodyView(wrapper: React.ComponentType<MediaScannerWrapperProps>): void;

    /**
     * Get the registered wrapper for file body views.
     * @returns The registered wrapper component, or null if none is registered
     */
    getWrapperFileBodyView(): React.ComponentType<MediaScannerWrapperProps> | null;


    /**
     * Register a custom Media factory.
     * This allows modules to wrap or extend the default Media implementation.
     * @param factory - A function that creates Media instances
     */
    registerCustomMediaFactory(factory: CustomMediaFactory): void;

    /**
     * Get the registered custom Media factory.
     * @returns The registered factory, or null if none is registered
     */
    getCustomMediaFactory(): CustomMediaFactory | null;

}
