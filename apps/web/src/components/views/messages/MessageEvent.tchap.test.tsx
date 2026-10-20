// @vitest-environment happy-dom

import React from "react";
import { afterEach, expect, it, vi } from "vitest";
import { render } from "test-utils-rtl";
import { EventType } from "matrix-js-sdk/src/matrix";
import { mkEvent, mkRoom, stubClient } from "test-utils";

import MessageEvent from "./MessageEvent";
import MatrixClientContext from "../../../contexts/MatrixClientContext";
import { RoomPermalinkCreator } from "../../../utils/permalinks/Permalinks";
import { _t } from "../../../languageHandler";
import SettingsStore from "../../../settings/SettingsStore";

afterEach(() => {
    vi.restoreAllMocks();
});

it("renders the Tchap message for m.bad.encrypted fallback events", () => {
    vi.spyOn(SettingsStore, "getValue").mockReturnValue(false);
    const client = stubClient();
    const room = mkRoom(client, "!room:example.com");
    vi.spyOn(client, "getRoom").mockReturnValue(room);
    const event = mkEvent({
        event: true,
        type: EventType.RoomMessage,
        user: "@alice:example.com",
        room: room.roomId,
        content: {
            msgtype: "m.bad.encrypted",
            body: "Original error",
        },
    });

    const result = render(
        <MatrixClientContext.Provider value={client}>
            <MessageEvent mxEvent={event} permalinkCreator={new RoomPermalinkCreator(room)} />
        </MatrixClientContext.Provider>,
    );

    expect(
        result.getByText(_t("Decryption fail: Please open Tchap on an other connected device to allow key sharing.")),
    ).toBeInTheDocument();
    expect(result.queryByText("Original error")).not.toBeInTheDocument();
});
