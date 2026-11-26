import { useAsyncMemo } from "./useAsyncMemo";
import TchapElementCallSupport, {
    type ElementCallSupportState,
} from "~tchap-web/src/tchap/util/TchapElementCallSupport";

/**
 * Whether Element Call (LiveKit) can be used on this machine.
 * On PM instances the websocket check result is persisted: once supported, it stays
 * supported, and once blocked, it stays blocked — the room header call buttons never
 * flicker. The initial state shows the buttons unless the machine is known-blocked;
 * the buttons can only disappear once a pm instance has been positively probed.
 */
export function useElementCallSupport(): ElementCallSupportState {
    return useAsyncMemo(() => TchapElementCallSupport.getSupportState(), [], {
        ecUnblocked: !TchapElementCallSupport.isPersistedBlocked(),
    });
}
