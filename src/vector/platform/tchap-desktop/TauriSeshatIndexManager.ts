// eslint-disable-next-line no-restricted-imports
import { IMatrixProfile, IEventWithRoomId as IMatrixEvent, IResultRoomEvents } from "matrix-js-sdk/src/@types/search";
import { logger } from "matrix-js-sdk/src/logger";

import BaseEventIndexManager, {
    ICrawlerCheckpoint,
    IEventAndProfile,
    IIndexStats,
    ISearchArgs,
    ILoadArgs,
} from "../../../indexing/BaseEventIndexManager";
import { TauriIPCManager as IPCManager } from "./TauriIPCManager";
import TauriPlatform from "./TauriPlatform";

export class TauriSeshatIndexManager extends BaseEventIndexManager {
    private readonly ipc = new IPCManager();
    private platform: TauriPlatform;

    public constructor(platform: TauriPlatform) {
        super();
        this.platform = platform;
    }

    public async supportsEventIndexing(): Promise<boolean> {
        return this.ipc.call("supports_event_indexing");
    }

    public async initEventIndex(userId: string, deviceId: string): Promise<void> {
        const key = `seshat|${userId}|${deviceId}`;

        let passphrase: Uint8Array = await this.platform.getSecureStorageInstance().getItem(key);
        logger.log("[init_event_index] key", key);

        if (!passphrase) {
            logger.log("[init_event_index] Passphrase was not found, creating new one");
            const ramdom32Bytes: Uint8Array = this.platform.getSecureStorageInstance().getRandom32Bytes();
            this.platform.getSecureStorageInstance().createItem(key, ramdom32Bytes);
            passphrase = ramdom32Bytes;
        }
        
        const passphraseString: string = new TextDecoder().decode(passphrase);
        logger.log("[init_event_index] passphrase decoded", passphraseString);
        return this.ipc.call("init_event_index", {passphrase: passphraseString});
    }

    public async addEventToIndex(event: IMatrixEvent, profile: IMatrixProfile): Promise<void> {
        logger.log("[addliveenent] ", event);

        // return this.ipc.call("add_event_to_index", {event: seshatEvent, profile});
        return this.ipc.call("add_event_to_index", {event, profile});
    }

    public async deleteEvent(eventId: string): Promise<boolean> {
        return this.ipc.call("delete_event", {eventId});
    }

    public async isEventIndexEmpty(): Promise<boolean> {
        return this.ipc.call("is_event_index_empty");
    }

    public async isRoomIndexed(roomId: string): Promise<boolean> {
        return this.ipc.call("is_room_indexed", {roomId});
    }

    public async commitLiveEvents(): Promise<void> {
        return this.ipc.call("commit_live_events");
    }

    public async searchEventIndex(searchArgs: ISearchArgs): Promise<IResultRoomEvents> {
        const result = await this.ipc.call("search_event_index", {searchConfig: searchArgs});
        logger.log("[searcheventindex]", result);
        return result;
    }

    public async addHistoricEvents(
        events: IEventAndProfile[],
        newCheckpoint: ICrawlerCheckpoint | null,
        oldCheckpoint: ICrawlerCheckpoint | null,
    ): Promise<boolean> {
        return this.ipc.call("add_historic_events", { events, newCheckpoint, oldCheckpoint });
    }

    public async addCrawlerCheckpoint(checkpoint: ICrawlerCheckpoint): Promise<void> {
        return this.ipc.call("add_crawler_checkpoint", { checkpoint });
    }

    public async removeCrawlerCheckpoint(checkpoint: ICrawlerCheckpoint): Promise<void> {
        return this.ipc.call("remove_crawler_checkpoint", { checkpoint });
    }

    public async loadFileEvents(loadConfig: ILoadArgs): Promise<IEventAndProfile[]> {
        return this.ipc.call("load_file_events", { loadConfig });
    }

    public async loadCheckpoints(): Promise<ICrawlerCheckpoint[]> {
        return this.ipc.call("load_checkpoints");
    }

    public async closeEventIndex(): Promise<void> {
        return this.ipc.call("close_event_index");
    }

    public async getStats(): Promise<IIndexStats> {
        return this.ipc.call("get_stats");
    }

    public async getUserVersion(): Promise<number> {
        return this.ipc.call("get_user_version");
    }

    public async setUserVersion(version: number): Promise<void> {
        return this.ipc.call("set_user_version", {version});
    }

    public async deleteEventIndex(): Promise<void> {
        return this.ipc.call("delete_event_index");
    }
}
