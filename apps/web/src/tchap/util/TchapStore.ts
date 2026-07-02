import { type Room, type EmptyObject } from "matrix-js-sdk/src/matrix";

import { AsyncStoreWithClient } from "../../stores/AsyncStoreWithClient";
import defaultDispatcher from "../../dispatcher/dispatcher";

import { UPDATE_EVENT } from "../../stores/AsyncStore";
import { TchapRoomType } from "../@types/tchap";
import TchapRoomUtils from "./TchapRoomUtils";
import { ActionPayload } from "~tchap-web/src/dispatcher/payloads";

// Emitted event for when a room's tchap type has changed. First argument will the room for which
// the change happened.
const ROOM_TCHAP_TYPE_CHANGED = "room_tchap_type_changed";

export class TchapStore extends AsyncStoreWithClient<EmptyObject> {
    // null indicates the preview is empty / irrelevant
    private roomTypeList = new Map<string, TchapRoomType | null>();

    private static readonly internalInstance = (() => {
        const instance = new TchapStore();
        instance.start();
        return instance;
    })();

    /**
     * @internal Public for test only
     */
    public static testInstance(): TchapStore {
        return new TchapStore();
    }

    private constructor() {
        super(defaultDispatcher, {});
    }

    public static get instance(): TchapStore {
        return TchapStore.internalInstance;
    }

    public static getTchapTypeChangedEventName(room: Room | undefined): string {
        if (!room) return `${ROOM_TCHAP_TYPE_CHANGED}:undefined`;
        return `${ROOM_TCHAP_TYPE_CHANGED}:${room?.roomId}`;
    }

    public async getRoomType(room: Room): Promise<TchapRoomType> {
        if (!room) return TchapRoomType.Unknown; // invalid room, just return unknown

        const roomType = await TchapRoomUtils.getTchapRoomType(room);
        const existingRoomType = this.roomTypeList.get(room.roomId);
        // nothing changed no need to emit
        if (existingRoomType && existingRoomType == roomType) return roomType;

        // set/update the new value for the room
        this.roomTypeList.set(room.roomId, roomType);
        this.emit(UPDATE_EVENT, this);
        this.emit(TchapStore.getTchapTypeChangedEventName(room), roomType);

        return roomType;
    }

    protected async onAction(payload: ActionPayload): Promise<void> {
        if (!this.matrixClient) return;
    }
}
