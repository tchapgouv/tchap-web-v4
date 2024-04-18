import { renderHook } from "@testing-library/react-hooks";

import { useUserOnboardingTasks } from "~matrix-react-sdk/src/hooks/useUserOnboardingTasks";

describe("useUserOnboardingTasks", () => {
    it.each([
        {
            context: {
                hasAvatar: false,
                hasDevices: false,
                hasDmRooms: false,
                hasNotificationsEnabled: false,
                hasSecureStorage: false,
            },
        },
        {
            context: {
                hasAvatar: true,
                hasDevices: false,
                hasDmRooms: false,
                hasNotificationsEnabled: true,
                hasSecureStorage: false,
            },
        },
    ])("sequence should stay static", async ({ context }) => {
        const { result } = renderHook(() => useUserOnboardingTasks(context));

        expect(result.current).toHaveLength(4);
        expect(result.current[0].id).toBe("enable-secure-backup");
        expect(result.current[1].id).toBe("setup-profile");
        expect(result.current[2].id).toBe("find-friends");
        expect(result.current[3].id).toBe("download-apps");
    });
});
