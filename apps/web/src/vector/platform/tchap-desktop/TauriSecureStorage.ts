import { encodeUnpaddedBase64 } from "matrix-js-sdk/src/matrix";

import { type TauriIPCManager } from "./TauriIPCManager";
   

// Tauri secure storage - using stronghold
export class TauriSecureStorage {
    private serviceName: string;
    private ipc: TauriIPCManager;

    public constructor(serviceName: string, ipcManager: TauriIPCManager) {
        this.serviceName = serviceName;
        this.ipc = ipcManager;
    }

    public getRandom32BytesEncoded(): string {
        const buf = crypto.getRandomValues(new Uint8Array(32))
        return encodeUnpaddedBase64(buf);
    }

    public async getItem(key: string): Promise<any> {
        try {
            const item = await this.ipc.call("get_password", {service: this.serviceName, user: key});
            return item
        } catch(err) {
            console.error("[tauri-secure-storage] getItem", err);
        }
    }

    public async createItem(key: string, value: any): Promise<any> {
        try {
            await this.ipc.call("set_password", {service: this.serviceName, user: key, password: value});
        } catch(err) {
            console.error("[tauri-secure-storage] createItem", err);
        }
    }

    public async removeItem(key: string): Promise<any> {
        try {
            await this.ipc.call("delete_password", {service: this.serviceName, user: key});
        } catch(err) {
            console.error("[tauri-secure-storage] removeItem", err);
        }
    }
}