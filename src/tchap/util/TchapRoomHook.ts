import { Room } from "matrix-js-sdk/src/matrix";
import { useCallback, useState } from "react";
import { TchapRoomType } from "../@types/tchap";
import TchapRoomUtils from "./TchapRoomUtils";

export const useTchapRoom = (room: Room ) => {
    const [currentRoomType, setCurrentType] = useState(TchapRoomType.Unknown);

    const currentTchapRoomType = useCallback(async () => {

        try {
            const result = await TchapRoomUtils.getTchapRoomType(room);
            setCurrentType(result);
            return result;
        } catch (err) {
            console.error("TCHAP: Error getting tchap type", err);
        }
    }, [TchapRoomUtils.getTchapRoomType]);

  return { currentRoomType, currentTchapRoomType }
}