import { MatrixEvent, Room, RoomStateEvent } from "matrix-js-sdk/src/matrix";
import { useCallback, useEffect, useState } from "react";
import { TchapRoomAccessRulesEventId, TchapRoomType } from "../@types/tchap";

import { useEventEmitter, useTypedEventEmitter } from "~tchap-web/src/hooks/useEventEmitter";
import { TchapStore } from "./TchapStore";

export const useTchapRoom = (room: Room | undefined ) => {
    const [currentRoomType, setCurrentType] = useState(TchapRoomType.Unknown);

    // //listen to events to refresh the value if needed
    // // Make it reactive on new room creation and room state changes (open to external for ex)
    useTypedEventEmitter(room?.currentState, RoomStateEvent.Events, async (ev: MatrixEvent) => {
        if (ev.getType() === TchapRoomAccessRulesEventId && room) {
            // The modification to external as succeeded
            updateTchapRoomType();
        }
    });

    useEventEmitter(TchapStore.instance, TchapStore.getTchapTypeChangedEventName(room), () => {
        updateTchapRoomType();
    });

    // initilize tchap room type value
    const updateTchapRoomType = useCallback(async ()  => {
        try {
            if (!room) {
                return currentRoomType;
            }
            const result = await TchapStore.instance.getRoomType(room);
            // if nothing change, dont need to update
            if (result != currentRoomType) {
                setCurrentType(result);
            }

            return result;
        } catch (err) {
            console.error("TCHAP: Error getting tchap type", err);
            return TchapRoomType.Unknown
        }
    }, [room]);

    useEffect(() => {
        updateTchapRoomType()
    }, [updateTchapRoomType])

  return { currentRoomType, updateTchapRoomType }
}
