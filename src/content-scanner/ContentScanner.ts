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
import { IEncryptedFile } from "matrix-react-sdk/src/customisations/models/IMediaEventContent";
import { PkEncryption } from "@matrix-org/olm";
import { ResizeMethod } from "matrix-js-sdk/src/@types/partials";
import { MatrixClientPeg } from "matrix-react-sdk/src/MatrixClientPeg";

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

/**
 * Content scanner implementation that interacts with a Matrix Content Scanner.
 * @see https://github.com/matrix-org/matrix-content-scanner
 */
export class ContentScanner {
    private static internalInstance: ContentScanner;

    private mcsKey: PkEncryption = new global.Olm.PkEncryption();
    private hasKey = false;
    private pendingScans = new Map<string, Promise<boolean>>();

    constructor(private scannerUrl: string) {
    }

    public urlForMxc(mxc: string, width?: number, height?: number, method?: ResizeMethod): string {
        const matrixUrl = getHttpUriForMxc(this.scannerUrl, mxc, width, height, method);
        return matrixUrl.replace(/media\/r0/, "media_proxy/unstable");
    }

    public async download(mxc: string, file?: IEncryptedFile): Promise<Response> {
        if (!file) {
            return fetch(this.urlForMxc(mxc));
        }

        if (!this.hasKey) {
            const k = await fetch(this.scannerUrl + "/_matrix/media_proxy/unstable/public_key").then(r => r.json());
            this.mcsKey.set_recipient_key(k['public_key']);
            this.hasKey = true;
        }

        return fetch(this.scannerUrl + "/_matrix/media_proxy/unstable/download_encrypted", {
            method: "POST",
            body: JSON.stringify({
                encrypted_body: this.mcsKey.encrypt(JSON.stringify({ file })),
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    public async scan(mxc: string, file?: IEncryptedFile): Promise<boolean> {
        // XXX: we're assuming that encryption won't be a differentiating factor and that the MXC URIs
        // will be different.
        if (this.pendingScans.has(mxc)) {
            return this.pendingScans.get(mxc);
        }

        // eslint-disable-next-line no-async-promise-executor
        const promise = new Promise<boolean>(async (resolve, reject) => {
            let response: Response;

            if (file) {
                if (!this.hasKey) {
                    try {
                        const k = await fetch(this.scannerUrl + "/_matrix/media_proxy/unstable/public_key")
                            .then(r => r.json());
                        this.mcsKey.set_recipient_key(k["public_key"]);
                        this.hasKey = true;
                    } catch (err) {
                        reject(err);
                        return;
                    }
                }

                try {
                    response = await fetch(this.scannerUrl + "/_matrix/media_proxy/unstable/scan_encrypted", {
                        method: "POST",
                        body: JSON.stringify({
                            encrypted_body: this.mcsKey.encrypt(JSON.stringify({ file })),
                        }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });
                } catch (err) {
                    reject(err);
                    return;
                }
            } else {
                const url = this.scannerUrl + `/_matrix/media_proxy/unstable/scan/${mxc.substring('mxc://'.length)}`;
                try {
                    response = await fetch(url);
                } catch (err) {
                    reject(err);
                    return;
                }
            }

            const responseJson: ScanResult = await response.json();
            resolve(responseJson.clean);
        });
        this.pendingScans.set(mxc, promise);
        return promise;
    }

    public static get instance(): ContentScanner {
        if (!ContentScanner.internalInstance) {
            ContentScanner.internalInstance = new ContentScanner(MatrixClientPeg.get().getHomeserverUrl());
        }

        return ContentScanner.internalInstance;
    }
}
