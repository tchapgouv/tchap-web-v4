import { MatrixEvent, Room, RoomStateEvent } from 'matrix-js-sdk/src/matrix';
import { useTypedEventEmitter } from 'matrix-react-sdk/src/hooks/useEventEmitter';
import React, { useEffect, useState } from 'react';

import { TchapRoomAccessRule, TchapRoomAccessRulesEventId } from '../../../@types/tchap';
import TchapRoomUtils from '../../../util/TchapRoomUtils';

import "../../../../res/css/views/rooms/_TchapExternalRoomHeader.pcss";

export interface IProps {
    room?: Room;
}

export function checkExternalAllowed(room: Room): boolean {
    return TchapRoomUtils.getTchapRoomAccessRule(room) === TchapRoomAccessRule.Unrestricted;
}

//define a function to manage internal state
//inspired by RoomTopic.tsx
function useExternalAllowed(room: Room): boolean {
    //define the hook functions and initialize the state
    const [isExternalAllowed, setExternalAllowed] = useState(checkExternalAllowed(room));

    //listen to events to refresh the value if needed 
    useTypedEventEmitter(room.currentState, RoomStateEvent.Events, (ev: MatrixEvent) => {
        console.log(ev.getType());
        if (ev.getType() === TchapRoomAccessRulesEventId) {
            setExternalAllowed(checkExternalAllowed(room));
        }
    });
    //refresh the state after rendering
    useEffect(() => {
        setExternalAllowed(checkExternalAllowed(room));
    }, [room]);// Only re-run the effect if room changes

    return isExternalAllowed;
}

export default function TchapExternalRoomHeader({
    room,
}: IProps) {
    const isExternalAllowed = useExternalAllowed(room);

    return (
        isExternalAllowed ?
            <div className="mx_room tc_RoomHeader_external">
                <span>ouvert aux externes</span>
            </div>
            : null);
}

