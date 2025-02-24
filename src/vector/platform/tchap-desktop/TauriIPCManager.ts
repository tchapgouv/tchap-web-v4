/*
Copyright 2022-2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only
Please see LICENSE files in the repository root for full details.
*/
import { createTauRPCProxy } from './types/bindings.ts';

export class TauriIPCManager {

    private domain: string;

    private taurpc = createTauRPCProxy();

    public constructor(domain: string) {
        if (!window.__TAURI__) {
            throw new Error("Cannot instantiate Tauri plateform, window.__TAURI__ is not set");
        }
        this.domain = domain;
    }

    public async call(name: string, ...args: any[]): Promise<any> {
        const commands = this.getIPCFromDomain();
        // Maybe add a timeout to these? Probably not necessary.
        const result = await (commands as any)![name](args);
    
        return result;
    }

    public getIPCFromDomain(): Record<string, any> {
        switch(this.domain) {
            case 'common': 
                return this.taurpc.common;
            case 'seshat': 
                return this.taurpc.seshat;
            default:
                return this.taurpc.common;
        }
    }
}
