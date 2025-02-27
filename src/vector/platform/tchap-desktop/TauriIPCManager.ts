/*
Copyright 2022-2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only
Please see LICENSE files in the repository root for full details.
*/
import { invoke } from '@tauri-apps/api/core';
import { logger } from 'matrix-js-sdk/src/logger';

export class TauriIPCManager {

    public constructor() {
        if (!window.__TAURI__) {
            throw new Error("Cannot instantiate Tauri plateform, window.__TAURI__ is not set");
        }
    }

    public async call(name: string, args?: Record<string, any>): Promise<any> {
        // Maybe add a timeout to these? Probably not necessary.
        logger.log("[Tauri] IPCManager calling name", name);
        logger.log("[Tauri] IPCManager calling args", args);
        try {
            const result = await invoke(name, args);
        
            return result;
        } catch(e) {
            logger.error(e);
            throw e;
        }
    }
}
