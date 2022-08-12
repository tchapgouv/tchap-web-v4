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

import { IEncryptedFile, ResizeMethod } from "matrix-js-sdk/src/matrix";

export interface ContentScannerInterface {
    urlForMxc: (mxc: string, width?: number, height?: number, method?: ResizeMethod) => string;
    download: (mxc: string, file?: IEncryptedFile) => Promise<Response>;
    scan: (mxc: string, file?: IEncryptedFile) => Promise<boolean>;
}
