import { type Mocked, mocked } from "jest-mock";
import { type CryptoApi } from "matrix-js-sdk/src/crypto-api";
import { type Room, Visibility, type MatrixClient } from "matrix-js-sdk/src/matrix";

import { TchapRoomAccessRule, TchapRoomAccessRuleVisibility, TchapRoomType } from "~tchap-web/src/tchap/@types/tchap";
import TchapRoomUtils from "~tchap-web/src/tchap/util/TchapRoomUtils";
import { mkRoom, stubClient } from "~tchap-web/test/test-utils";

describe("Provides utils method to get room type and state", () => {
    let room: Mocked<Room>;
    let client: Mocked<MatrixClient>;
    let cryptoApi: Mocked<CryptoApi>;

    beforeEach(() => {
        client = mocked(stubClient());
        room = mkRoom(client, "test");
        cryptoApi = mocked(client.getCrypto()!);
    });

    it("returns correct room type for room with encryption", async () => {
        jest.spyOn(client, "getRoomDirectoryVisibility").mockResolvedValue({ visibility: Visibility.Private });
        jest.spyOn(cryptoApi, "isEncryptionEnabledInRoom").mockResolvedValue(true);
        const resultRestricted = await TchapRoomUtils.getTchapRoomTypeInternal(
            { rule: TchapRoomAccessRule.Restricted },
            room,
        );
        const resultUnRestricted = await TchapRoomUtils.getTchapRoomTypeInternal(
            { rule: TchapRoomAccessRule.Unrestricted },
            room,
        );
        expect(resultRestricted).toStrictEqual(TchapRoomType.Private);
        expect(resultUnRestricted).toStrictEqual(TchapRoomType.External);
    });

    it("returns room type Private with non encryption external for room", async () => {
        jest.spyOn(client, "getRoomDirectoryVisibility").mockResolvedValue({ visibility: Visibility.Private });
        jest.spyOn(cryptoApi, "isEncryptionEnabledInRoom").mockResolvedValue(false);

        const result = await TchapRoomUtils.getTchapRoomTypeInternal(
            {
                rule: TchapRoomAccessRule.Unrestricted,
                force_unencrypted_at_creation: true,
                visibility: TchapRoomAccessRuleVisibility.Private,
            },
            room,
        );
        expect(result).toStrictEqual(TchapRoomType.PrivateNonEncryptedExternal);
    });

    it("returns room type Private with non encryption for room without encryption", async () => {
        jest.spyOn(client, "getRoomDirectoryVisibility").mockResolvedValue({ visibility: Visibility.Private });
        jest.spyOn(cryptoApi, "isEncryptionEnabledInRoom").mockResolvedValue(false);

        const result = await TchapRoomUtils.getTchapRoomTypeInternal(
            {
                rule: TchapRoomAccessRule.Restricted,
                force_unencrypted_at_creation: true,
                visibility: TchapRoomAccessRuleVisibility.Private,
            },
            room,
        );
        expect(result).toStrictEqual(TchapRoomType.PrivateNonEncrypted);
    });

    it("returns room type Forum for room without encryption and visibility public", async () => {
        jest.spyOn(client, "getRoomDirectoryVisibility").mockResolvedValue({ visibility: Visibility.Public });
        jest.spyOn(cryptoApi, "isEncryptionEnabledInRoom").mockResolvedValue(false);
        const result = await TchapRoomUtils.getTchapRoomTypeInternal({ rule: TchapRoomAccessRule.Restricted }, room);
        expect(result).toStrictEqual(TchapRoomType.Forum);
    });

    it("returns room type External for room with encryption and unrestricted access rule", async () => {
        jest.spyOn(client, "getRoomDirectoryVisibility").mockResolvedValue({ visibility: Visibility.Private });
        jest.spyOn(cryptoApi, "isEncryptionEnabledInRoom").mockResolvedValue(true);
        const result = await TchapRoomUtils.getTchapRoomTypeInternal({ rule: TchapRoomAccessRule.Unrestricted }, room);
        expect(result).toStrictEqual(TchapRoomType.External);
    });
});
