import { MatrixEvent, Room, RoomStateEvent } from "matrix-js-sdk/src/matrix";
import { useCallback, useEffect, useState } from "react";
import { TchapRoomAccessRulesEventId, TchapRoomType } from "../@types/tchap";
import TchapRoomUtils from "./TchapRoomUtils";
import { useTypedEventEmitter } from "~tchap-web/src/hooks/useEventEmitter";

export const useTchapRoom = (room: Room | undefined ) => {
    const [currentRoomType, setCurrentType] = useState(TchapRoomType.Unknown);

    //listen to events to refresh the value if needed
    useTypedEventEmitter(room?.currentState, RoomStateEvent.Events, async (ev: MatrixEvent) => {
        if (ev.getType() === TchapRoomAccessRulesEventId && room) {
            // The modification to external as succeeded
            const result = await TchapRoomUtils.getTchapRoomType(room);
            setCurrentType(result);
        }
    });

    // initilize icon value
    const getTchapRoomType = useCallback(async ()  => {
        try {
            if (!room) {
                return currentRoomType;
            }
            const result = await TchapRoomUtils.getTchapRoomType(room);
            setCurrentType(result);
            return result;
        } catch (err) {
            console.error("TCHAP: Error getting tchap type", err);
            return TchapRoomType.Unknown
        }
    }, [room]);

    useEffect(() => {
        getTchapRoomType()
    }, [getTchapRoomType])

  return { currentRoomType, getTchapRoomType }
}