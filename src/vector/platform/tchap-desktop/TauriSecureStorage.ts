import { encodeUnpaddedBase64 } from "matrix-js-sdk/src/matrix";
import {
    getPassword,
    setPassword,
    deletePassword,
  } from "tauri-plugin-keyring-api";
   

// Tauri secure storage - using stronghold
export class TauriSecureStorage {
    private serviceName: string;

    public constructor(serviceName: string) {
        this.serviceName = serviceName;
    }

    public getRandom32BytesEncoded(): string {
        const buf = crypto.getRandomValues(new Uint8Array(32))
        return encodeUnpaddedBase64(buf);
    }

    public async getItem(key: string): Promise<any> {
        try {
            const item = await getPassword(this.serviceName, key);
            return item
        } catch(err) {
            console.error("[tauri-secure-storage] getItem", err);
        }
    }

    public async createItem(key: string, value: any): Promise<any> {
        try {
            await setPassword(this.serviceName, key, value);
        } catch(err) {
            console.error("[tauri-secure-storage] createItem", err);
        }
    }

    public async removeItem(key: string): Promise<any> {
        try {
            await deletePassword(this.serviceName, key);
        } catch(err) {
            console.error("[tauri-secure-storage] removeItem", err);
        }
    }
}