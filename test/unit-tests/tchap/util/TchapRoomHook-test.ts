// import { waitFor, renderHook, act } from "jest-matrix-react";
// import { type Room, type MatrixClient } from "matrix-js-sdk/src/matrix";

// import { useTchapRoom } from "~tchap-web/src/tchap/util/TchapRoomHook";
// import { mkRoom, stubClient } from "~tchap-web/test/test-utils";
// import TchapRoomUtils from "~tchap-web/src/tchap/util/TchapRoomUtils";
// import { TchapRoomType } from "~tchap-web/src/tchap/@types/tchap";
// import { MatrixClientPeg } from "~tchap-web/src/MatrixClientPeg";

// function render(room: Room) {
//     return renderHook(() => useTchapRoom(room));
// }

// describe("useProfileInfo", () => {
//     let cli: MatrixClient;
//     let room: Room;
    
//     beforeEach(() => {
//         stubClient();
//         cli = MatrixClientPeg.safeGet();
//         room = mkRoom(cli, "!test-room");
//     });

//     afterEach(()=> {
//         jest.resetAllMocks();
//     })

//     it("should return forum type", async () => {
//         const { result } = await render(room);
//         jest.spyOn(TchapRoomUtils, "getTchapRoomType").mockResolvedValue(TchapRoomType.Forum);
//         await waitFor(() => {
//             act(() => {
//                 expect(result.current.currentRoomType).toBe(TchapRoomType.Forum);
//             });
//         });         
//     });
//     it("should return private type", async () => {
//         const { result } = await render(room);
//         jest.spyOn(TchapRoomUtils, "getTchapRoomType").mockResolvedValue(TchapRoomType.Private);
//         await waitFor(() => {
//             act(() => {
//                 expect(result.current.currentRoomType).toBe(TchapRoomType.Private);
//             });
//         });     
//     });
//     it("should return external type", async () => {
//         const { result } = await render(room);
//         jest.spyOn(TchapRoomUtils, "getTchapRoomType").mockResolvedValue(TchapRoomType.External);

//         await waitFor(() => {
//             act(() => {
//                 expect(result.current.currentRoomType).toBe(TchapRoomType.External);
//             });
//         });         
//     });

//     it("should return private non encrypted type", async () => {
//         const { result } = await render(room);
//         jest.spyOn(TchapRoomUtils, "getTchapRoomType").mockResolvedValue(TchapRoomType.PrivateNonEncrypted);
//         await waitFor(() => {
//             act(() => {
//                 expect(result.current.currentRoomType).toBe(TchapRoomType.PrivateNonEncrypted);
//             });
//         });     
//     });

// });
