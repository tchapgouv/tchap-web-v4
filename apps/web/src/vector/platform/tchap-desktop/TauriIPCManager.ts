import { invoke } from '@tauri-apps/api/core';
import { logger } from 'matrix-js-sdk/src/logger';

export class TauriIPCManager {

    public constructor() {
        if (!window.__TAURI__) {
            throw new Error("Cannot instantiate Tauri plateform, window.__TAURI__ is not set");
        }
    }

    public async call(name: string, args?: Record<string, any>): Promise<any> {
        try {
            const result = await invoke(name, args);

            return result;
        } catch(e) {
            logger.error(e);
            throw e;
        }
    }
}
