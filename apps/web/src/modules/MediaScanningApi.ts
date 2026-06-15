/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import type { MediaScannerWrapperProps, CustomMediaFactory, MediaScanningApi } from "@element-hq/element-web-module-api";

/**
 * Implementation of the MediaScanning API for Element Web.
 * Manages registration and execution of media scanning handlers.
 */
export class ElementWebMediaScanningApi implements MediaScanningApi {
    private wrapperFileBodyView: React.ComponentType<MediaScannerWrapperProps> | null = null;
    private customMediaFactory: CustomMediaFactory | null = null;

    /**
     * Register a custom Media factory.
     */
    public registerCustomMediaFactory(factory: CustomMediaFactory): void {
        this.customMediaFactory = factory;
    }

    /**
     * Get the registered custom Media factory.
     */
    public getCustomMediaFactory(): CustomMediaFactory | null {
        return this.customMediaFactory;
    }

    /**
     * Register a custom Media factory.
     */
    public registerWrapperFileBodyView(wrapper: React.ComponentType<MediaScannerWrapperProps>): void {
        this.wrapperFileBodyView = wrapper;
    }

    /**
     * Get the registered custom Media factory.
     */
    public getWrapperFileBodyView(): CustomMediaFactory | null {
        return this.wrapperFileBodyView;
    }
}
