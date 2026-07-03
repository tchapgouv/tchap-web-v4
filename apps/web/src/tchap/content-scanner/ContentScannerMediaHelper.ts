import { type MatrixEvent } from "matrix-js-sdk/src/matrix";
import { logger } from "matrix-js-sdk/src/logger";

import { LazyValue } from "../../utils/LazyValue";
import { MediaEventHelper } from "../../utils/MediaEventHelper";
import { type IDestroyable } from "../../utils/IDestroyable";
import { type Media } from "../customisations/ContentScanningMedia";

export type ScanState = "scanning" | "unsafe" | "error" | "done";

/**
 * Drop-in replacement for MediaEventHelper with eager content scanning.
 * Blocks blob access if the scan result is not "done".
 */
export class ContentScannerMediaHelper implements IDestroyable {
    private scanState: ScanState = "scanning";
    private readonly scanStateCallbacks = new Set<() => void>();
    private readonly inner: MediaEventHelper;

    public readonly media: Media;
    public readonly sourceUrl: LazyValue<string | null>;
    public readonly thumbnailUrl: LazyValue<string | null>;
    public readonly sourceBlob: LazyValue<Blob>;
    public readonly thumbnailBlob: LazyValue<Blob | null>;

    public constructor(event: MatrixEvent) {
        this.inner = new MediaEventHelper(event);
        this.media = this.inner.media as unknown as Media;

        // Proxy URLs directly - no scan needed to display previews
        this.sourceUrl = this.inner.sourceUrl;
        this.thumbnailUrl = this.inner.thumbnailUrl;

        // Guard blob access behind scan gate
        this.sourceBlob = new LazyValue(async () => {
            await this.waitForScan();
            if (this.scanState !== "done") throw new Error(`Download blocked: scan result is "${this.scanState}"`);
            return this.inner.sourceBlob.value;
        });

        this.thumbnailBlob = new LazyValue(async () => {
            await this.waitForScan();
            if (this.scanState !== "done") return null;
            return this.inner.thumbnailBlob.value;
        });

        void this.startScan();
    }

    public get fileName(): string {
        return this.inner.fileName;
    }

    public destroy(): void {
        this.inner.destroy();
    }

    public getScanState(): ScanState {
        return this.scanState;
    }

    /**
     * Registers a callback invoked when scan state changes.
     * Invoked immediately if scan already completed.
     * Returns a cleanup/unsubscribe function.
     */
    public onScanStateChange(callback: () => void): () => void {
        this.scanStateCallbacks.add(callback);
        if (this.scanState !== "scanning") callback();
        return () => this.scanStateCallbacks.delete(callback);
    }

    private waitForScan(): Promise<void> {
        if (this.scanState !== "scanning") return Promise.resolve();
        return new Promise((resolve) => {
            const unsubscribe = this.onScanStateChange(() => {
                unsubscribe();
                resolve();
            });
        });
    }

    private async startScan(): Promise<void> {
        try {
            const [sourceClean, thumbnailClean] = await Promise.all([
                this.media.scanSource(),
                this.media.scanThumbnail(),
            ]);
            this.scanState = sourceClean && thumbnailClean ? "done" : "unsafe";
        } catch (error) {
            logger.warn("ContentScannerMediaHelper: scan error:", error);
            this.scanState = "error";
        }
        this.notifyCallbacks();
    }

    private notifyCallbacks(): void {
        for (const cb of this.scanStateCallbacks) cb();
    }

    public static isEligible(event: MatrixEvent): boolean {
        return MediaEventHelper.isEligible(event);
    }

    public static canHide(event: MatrixEvent): boolean {
        return MediaEventHelper.canHide(event);
    }
}
