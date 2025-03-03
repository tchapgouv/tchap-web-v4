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
import { logger } from "@sentry/core";

interface ISearchConfig {
    limit: number;
    before_limit: number;
    after_limit: number;
    order_by_recency: boolean;
    room_id: string;
    next_batch: string;
}
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

        let passphrase = await this.platform.getSecureStorageInstance().getItem(key);
        console.log("[init_event_index] key", key);
        console.log("[init_event_index] passphrase", passphrase);
        if (!passphrase) {
            console.log("[init_event_index] Passphrase was not found, creating new one");
            const ramdom32Bytes = this.platform.getSecureStorageInstance().getRandom32Bytes();
            this.platform.getSecureStorageInstance().createItem(key, ramdom32Bytes);
            passphrase = ramdom32Bytes;
        }
        
        return this.ipc.call("init_event_index", {passphrase: new TextDecoder().decode(passphrase)});
    }

    public async addEventToIndex(event: IMatrixEvent, profile: IMatrixProfile): Promise<void> {
        logger.log("[addliveenent] ", event);

        const seshatEvent = {
            event_type: event.type,
            content_value: event.content.body,
            msgtype: event.content.msgtype,
            event_id: event.event_id,
            sender: event.sender,
            room_id: event.room_id,
            server_ts: event.origin_server_ts,
            source: event
        };
        return this.ipc.call("add_event_to_index", {event: seshatEvent, profile});
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
        const result = await this.ipc.call("search_event_index", {term: searchArgs.search_term, searchConfig: searchArgs as ISearchConfig});
        logger.log("[searcheventindex]", result);
        return result;
    }

    public async addHistoricEvents(
        events: IEventAndProfile[],
        newCheckpoint: ICrawlerCheckpoint | null,
        oldCheckpoint: ICrawlerCheckpoint | null,
    ): Promise<boolean> {
        const results = await this.ipc.call("add_historic_events", { events, newCheckpoint, oldCheckpoint });
        logger.log("[addhistoricevent] results", results);
        return results;
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
