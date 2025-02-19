/*
Copyright 2024 New Vector Ltd.
Copyright 2022 Šimon Brandner <simon.bra.ag@gmail.com>
Copyright 2018-2021 New Vector Ltd
Copyright 2019 Michael Telatynski <7t3chguy@gmail.com>
Copyright 2016 Aviral Dasgupta
Copyright 2016 OpenMarket Ltd

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only
Please see LICENSE files in the repository root for full details.
*/
// import { listen } from '@tauri-apps/api/event';
import { getVersion } from '@tauri-apps/api/app';
import { Client, Store, Stronghold } from '@tauri-apps/plugin-stronghold';
import { appDataDir } from '@tauri-apps/api/path';

import BasePlatform from "../../../BasePlatform";
import dis from "../../../dispatcher/dispatcher";
import SdkConfig from "../../../SdkConfig";
import { ActionPayload } from "../../../dispatcher/payloads";
import { MatrixClientPeg } from "../../../MatrixClientPeg";
// import { TauriSeshatIndexManager as SeshatIndexManager } from "./TauriSeshatIndexManager";
import { TauriIPCManager as IPCManager } from "./TauriIPCManager";
import { _t } from "../../../languageHandler";
import { TauriSeshatIndexManager } from './TauriSeshatIndexManager';

import BaseEventIndexManager from '~tchap-web/src/indexing/BaseEventIndexManager';

function onAction(payload: ActionPayload): void {
    // Whitelist payload actions, no point sending most across
    if (["call_state"].includes(payload.action)) {
        window.__TAURI__.core.invoke("app_onAction", payload);
    }
}


function platformFriendlyName(): string {
    // used to use window.process but the same info is available here
    if (navigator.userAgent.includes("Macintosh")) {
        return "macOS";
    } else if (navigator.userAgent.includes("FreeBSD")) {
        return "FreeBSD";
    } else if (navigator.userAgent.includes("OpenBSD")) {
        return "OpenBSD";
    } else if (navigator.userAgent.includes("SunOS")) {
        return "SunOS";
    } else if (navigator.userAgent.includes("Windows")) {
        return "Windows";
    } else if (navigator.userAgent.includes("Linux")) {
        return "Linux";
    } else {
        return "Unknown";
    }
}

export default class TauriPlatform extends BasePlatform {
    private readonly ipc = new IPCManager("common");

    private strongholdStore: Store | undefined;
    private stronghold: Stronghold | undefined;
    private readonly eventIndexManager: BaseEventIndexManager = new TauriSeshatIndexManager(this);

    public constructor() {
        super();

        if (!window.__TAURI__) {
            throw new Error("Canwnot instantiate TauriPlatform, window.__TAURI__ is not set");
        }

        dis.register(onAction);

        // this.ipc.call("set_homeserver_url", MatrixClientPeg.get()?.getHomeserverUrl());
    }

    public async getPickleKey(userId: string, deviceId: string): Promise<string | null> {
        try {
            await this.initStronghold();

            const key = `${userId}|${deviceId}`;
            // Read a record from store
            const value = await this.strongholdStore?.get(key);
            console.log('In getpicklekey value', value);
            console.log(value); // 'secret value'

            // Save your updates
            await this.stronghold?.save();

            return value ? new TextDecoder().decode(value) : null;
        } catch {
            // if we can't connect to the password storage, assume there's no
            // pickle key
            return null;
        }
    }

    public async createPickleKey(userId: string, deviceId: string): Promise<string | null> {
        try {
            const key = `${userId}|${deviceId}`;
            const value = this.getRandom32Bytes();
            // Insert a record to the store
            this.strongholdStore?.insert(key, Array.from(value));

            // Save your updates
            await this.stronghold?.save();

            return value ? new TextDecoder().decode(value) : null;
        } catch {
            // if we can't connect to the password storage, assume there's no
            // pickle key
            return null;
        }
    }

    public async destroyPickleKey(userId: string, deviceId: string): Promise<void> {
        try {
            const key = `${userId}|${deviceId}`;
            // Remove a record from store
            await this.strongholdStore?.remove(key);
        } catch {}
    }

    public async clearStorage(): Promise<void> {
        try {
            await super.clearStorage();
            await this.ipc.call("clearStorage");
        } catch {}
    }

    public getRandom32Bytes(): Uint8Array {
        const randomArray = new Uint8Array(32);
        return crypto.getRandomValues(randomArray);   
    }

    public async initStronghold(): Promise<void> {
        try {
            if (!this.strongholdStore) {
                const vaultPath = `${await appDataDir()}/vault.hold`;
                const vaultPassword = 'tchap-desktop-vault321';
                const stronghold = await Stronghold.load(vaultPath, vaultPassword);
            
                const clientName = 'tchap-desktop';
                let client: Client;
                try {
                    client = await stronghold.loadClient(clientName);
                } catch {
                    client = await stronghold.createClient(clientName);
                }
              
                this.strongholdStore = client.getStore();
                this.stronghold = stronghold;
            }
        } catch (err) {
            console.error("Error in init stronghold", err);
        }
    };
      
    public getEventIndexingManager(): BaseEventIndexManager | null {
        return this.eventIndexManager;
    }
    
    public get baseUrl(): string {
        // This configuration is element-desktop specific so the types here do not know about it
        return (SdkConfig.get() as unknown as Record<string, string>)["web_base_url"] ?? "https://www.tchap.gouv.fr/";
    }

    public async getAppVersion(): Promise<string> {
        return await getVersion();
    }

    public getHumanReadableName(): string {
        return "Tauri Platform"; // no translation required: only used for analytics
    }

    public requestNotificationPermission(): Promise<string> {
        return Promise.resolve("granted");
    }


    public getDefaultDeviceDisplayName(): string {
        const brand = SdkConfig.get().brand;
        return _t("desktop_default_device_name", {
            brand,
            platformName: platformFriendlyName(),
        });
    }

    public reload(): void {
        window.location.reload();
    }
}
