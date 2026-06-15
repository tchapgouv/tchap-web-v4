import React from "react";
import type { Module, Api, MediaScannerWrapperProps } from "@element-hq/element-web-module-api";
import { ContentScanningFileBodyView } from "./components/ContentScanningFileBodyView";
import { ContentScanner } from "./utils/ContentScanner";
import { Media as ContentMediaImplementation } from "./utils/ContentMediaImplementation";

export default class ContentScannerModule implements Module {
    public moduleApiVersion = "^0.1.0";

    public constructor(private api: Api) {}

    public async load(): Promise<void> {
        // Get scanner URL from config
        const scannerUrl = this.api.config.get("content_scanner_url");

        if (!scannerUrl) {
            console.warn("Content scanner URL not configured, skipping content scanner wrapper registration");
            return;
        }

        // Get the MatrixClient from the Api
        const matrixClient = await this.api.client.getClient();

        if (!matrixClient) {
            console.warn("MatrixClient not available, skipping content scanner registration");
            return;
        }

        // Initialize the ContentScanner singleton
        ContentScanner.initialize(scannerUrl, matrixClient);

        // Register wrapper component for file body views
        const ContentScannerWrapper: React.FC<MediaScannerWrapperProps> = (props) => {
            return <ContentScanningFileBodyView {...props} />;
        };
        // Register the wrapper for file body views
        this.api.mediaCustomisations.registerWrapperFileBodyView(ContentScannerWrapper);

        this.api.mediaCustomisations.registerCustomMediaFactory(ContentMediaImplementation);
    }
}
