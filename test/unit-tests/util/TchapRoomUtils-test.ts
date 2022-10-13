
import { TchapRoomType } from '../../../src/@types/tchap';
import TchapRoomUtils from '../../../src/util/TchapRoomUtils';


describe("Provides utils method to get room type and state", () => {

    beforeEach(() => {
    });

    it("returns room type depending on encryption and access rule", (done) => {
        expect(TchapRoomUtils.getTchapRoomType(true, "restricted")).toStrictEqual(TchapRoomType.Private);
        expect(TchapRoomUtils.getTchapRoomType(true, "unrestricted")).toStrictEqual(TchapRoomType.External);
        expect(TchapRoomUtils.getTchapRoomType(false)).toStrictEqual(TchapRoomType.Forum);
        expect(TchapRoomUtils.getTchapRoomType(true)).toStrictEqual(TchapRoomType.Unknown);
        expect(TchapRoomUtils.getTchapRoomType(true, "any")).toStrictEqual(TchapRoomType.Unknown);
        expect(TchapRoomUtils.getTchapRoomType(true, undefined)).toStrictEqual(TchapRoomType.Unknown);
        done();
    });

    
})