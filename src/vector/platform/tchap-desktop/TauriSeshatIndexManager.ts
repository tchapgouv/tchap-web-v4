// eslint-disable-next-line no-restricted-imports
import { IMatrixProfile, IEventWithRoomId as IMatrixEvent, IResultRoomEvents } from "matrix-js-sdk/src/@types/search";

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
        return this.ipc.call("supportsEventIndexing");
    }

    public async initEventIndex(userId: string, deviceId: string): Promise<void> {
        const key = `seshat|${userId}|${deviceId}`;
        let passphrase = await this.platform.getSecureStorageInstance().getItem(key);
        if (!passphrase) {
            passphrase = this.platform.getSecureStorageInstance().getRandom32Bytes();
        }
        return this.ipc.call("init_event_index", {passphrase});
    }

    public async addEventToIndex(event: IMatrixEvent, profile: IMatrixProfile): Promise<void> {
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

    public async searchEventIndex(searchConfig: ISearchArgs): Promise<IResultRoomEvents> {
        return this.ipc.call("search_event_index", {searchConfig});
    }

    public async addHistoricEvents(
        events: IEventAndProfile[],
        newCheckpoint: ICrawlerCheckpoint | null,
        oldCheckpoint: ICrawlerCheckpoint | null,
    ): Promise<boolean> {
        return this.ipc.call("add_historic_events", { events, newCheckpoint, oldCheckpoint });
    }

    public async addCrawlerCheckpoint(checkpoint: ICrawlerCheckpoint): Promise<void> {
        return this.ipc.call("add_crawler_checkpoint", checkpoint);
    }

    public async removeCrawlerCheckpoint(checkpoint: ICrawlerCheckpoint): Promise<void> {
        return this.ipc.call("remove_crawler_checkpoint", checkpoint);
    }

    public async loadFileEvents(loadConfig: ILoadArgs): Promise<IEventAndProfile[]> {
        return this.ipc.call("load_file_events", loadConfig);
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
        return this.ipc.call("set_user_version", version);
    }

    public async deleteEventIndex(): Promise<void> {
        return this.ipc.call("delete_event_index");
    }
}
