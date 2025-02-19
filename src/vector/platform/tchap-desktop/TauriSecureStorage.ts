import { Client, Store, Stronghold } from '@tauri-apps/plugin-stronghold';
import { appDataDir } from '@tauri-apps/api/path';

// singleton class storage 
export class TauriSecureStorage {
    private store: Store | undefined;
    private client: Stronghold | undefined;

    private static my_instance: TauriSecureStorage;

    public constructor() {
    }

    public static get instance(): TauriSecureStorage{
        if (!TauriSecureStorage.my_instance) {
            TauriSecureStorage.my_instance = new TauriSecureStorage();
        }
        return TauriSecureStorage.my_instance;

    }

    public getRandom32Bytes(): Uint8Array {
        const randomArray = new Uint8Array(32);
        return crypto.getRandomValues(randomArray);   
    }

    public async getItem(key: string): Promise<any> {
        if (!this.store) return Promise.reject(new Error("No stronghold store found"));
        return this.store.get(key);
    }

    public async createItem(key: string, value: any): Promise<any> {
        if (!this.store) return Promise.reject(new Error("No stronghold store found"));

        this.store?.insert(key, Array.from(value));

        // Save your updates
        await this.client?.save();
    }

    public async removeItem(key: string): Promise<any> {
        if (!this.store) return Promise.reject(new Error("No stronghold store found"));

        return this.store?.remove(key);
    }

    // On dev build, loading the stronghold vault takes a really long time https://github.com/tauri-apps/tauri/issues/4197
    public async initStronghold(): Promise<void> {
        try {
            if (!this.store) {
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
              
                this.store = client.getStore();
                this.client = stronghold;
            }
        } catch (err) {
            console.error("Error in init stronghold", err);
        }
    };
}