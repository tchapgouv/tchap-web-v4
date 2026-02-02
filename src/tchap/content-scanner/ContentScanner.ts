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

import { getHttpUriForMxc } from "matrix-js-sdk/src/content-repo";
import { type EncryptedFile } from "matrix-js-sdk/src/types";
import { ResizeMethod } from "matrix-js-sdk/src/@types/partials";
import { MatrixClientPeg } from "~tchap-web/src/MatrixClientPeg";
import SdkConfig from "~tchap-web/src/SdkConfig";
import { IConfigOptions } from "~tchap-web/src/IConfigOptions";

export enum ScanErrorReason {
    RequestFailed = "MCS_MEDIA_REQUEST_FAILED",
    DecryptFailed = "MCS_MEDIA_FAILED_TO_DECRYPT",
    NotClean = "MCS_MEDIA_NOT_CLEAN",
    BadDecryption = "MCS_BAD_DECRYPTION",
    Malformed = "MCS_MALFORMED_JSON",
}

export interface ScanError {
    info: string;
    reason: ScanErrorReason;
}

export interface ScanResult {
    clean: boolean;
    scanned: boolean;
}

interface ContentScannerConfig extends IConfigOptions {
    content_scanner?: {
        url?: string;
    };
}

/**
 * Content scanner implementation that interacts with a Matrix Content Scanner.
 * @see https://github.com/matrix-org/matrix-content-scanner
 */
export class ContentScanner {
    private static internalInstance: ContentScanner;

    private publicKey?: string;
    private cachedScans = new Map<string, Promise<boolean>>();

    constructor(private scannerUrl: string) {}

    public getAuthHeaders() {
        const cli = MatrixClientPeg.safeGet();
        const accessToken = cli.getAccessToken()
        return { Authorization : `Bearer ${accessToken}` };
    }

    public urlForMxc(mxc: string, width?: number, height?: number, method?: ResizeMethod): string {
        const matrixUrl = getHttpUriForMxc(this.scannerUrl, mxc, width, height, method);
        return matrixUrl.replace(/media\/r0/, "media_proxy/unstable");
    }

    public async download(mxc: string, file?: EncryptedFile): Promise<Response> {
        const authHeaders = this.getAuthHeaders();
        if (!file) {
            return fetch(this.urlForMxc(mxc));
        }

        if (!this.publicKey) {
            await this.fetchKey();
        }

        const encryptedData = this.encryptData(file); 
        return fetch(this.scannerUrl + "/_matrix/media_proxy/unstable/download_encrypted", {
            method: "POST",
            body: JSON.stringify({
                encrypted_body: encryptedData,
            }),
            headers: {
                "Content-Type": "application/json",
                ...authHeaders
            },
        });
    }

    public async scan(mxc: string, file?: EncryptedFile): Promise<boolean> {
        // XXX: we're assuming that encryption won't be a differentiating factor and that the MXC URIs
        // will be different.
        if (this.cachedScans.has(mxc)) {
            return this.cachedScans.get(mxc);
        }

        const prom = this.doScan(mxc, file);
        this.cachedScans.set(mxc, prom);
        return prom;
    }

    private async doScan(mxc: string, file?: EncryptedFile): Promise<boolean> {
        let response: Response;
        const authHeaders = this.getAuthHeaders();

        if (file) {
            if (!this.publicKey) {
                await this.fetchKey();
            }
            const encryptedData = this.encryptData(file); 
            response = await fetch(this.scannerUrl + "/_matrix/media_proxy/unstable/scan_encrypted", {
                method: "POST",
                body: JSON.stringify({
                    encrypted_body: encryptedData
                }),
                headers: {
                    "Content-Type": "application/json",
                    ...authHeaders
                },
            });
        } else {
            const url = this.scannerUrl + `/_matrix/media_proxy/unstable/scan/${mxc.substring("mxc://".length)}`;
            response = await fetch(url, {
                method: "GET",
                headers: authHeaders
            });
        }

        const responseJson: ScanResult = await response.json();
        return responseJson.clean;
    }

    private async fetchKey() {
        const response = await fetch(this.scannerUrl + "/_matrix/media_proxy/unstable/public_key").then((r) =>
            r.json(),
        );
        this.publicKey = response["public_key"];
    }

    private encryptData(file: EncryptedFile) {
        const crypto = MatrixClientPeg.get()?.getCrypto();
        const encryptedData = crypto?.pkEncryptString(this.publicKey!, JSON.stringify({ file }))
        return encryptedData;
    }
    /**
     * Returns a ContentScanner instance.
     * The ContentScanner uses the same URL as the matrix client.
     * If content_scanner.url is set in the config, this URL is used instead.
     */
    public static get instance(): ContentScanner {
        if (!ContentScanner.internalInstance) {
            ContentScanner.internalInstance = new ContentScanner(this.contentScannerUrl);
        }

        return ContentScanner.internalInstance;
    }

    private static get contentScannerUrl(): string {
        return (
            (SdkConfig.get() as ContentScannerConfig)?.content_scanner?.url ?? MatrixClientPeg.get()?.getHomeserverUrl()
        );
    }
}

