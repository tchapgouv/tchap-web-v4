/*
Copyright 2026 DINUM / Tchap
SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only
*/

import SdkConfig, { type ConfigOptions } from "~tchap-web/src/SdkConfig";
import TchapUtils from "~tchap-web/src/tchap/util/TchapUtils";

describe("TchapUtils.fetchHomeserverForEmail", () => {
    const homeserverList = [
        { base_url: "https://matrix.dev01.tchap.incubateur.net", server_name: "Agents 1" },
        { base_url: "https://matrix.dev02.tchap.incubateur.net", server_name: "Agents 2" },
        { base_url: "https://matrix.ext01.tchap.incubateur.net", server_name: "Externes" },
    ];
    const email = "user@example.org";

    beforeAll(() => {
        SdkConfig.reset(); // in case other tests didn't clean up
        // mock SdkConfig.get("homeserver_list")
        SdkConfig.put({ homeserver_list: homeserverList } as unknown as ConfigOptions);
        // Keep the homeserver list order deterministic
        jest.spyOn(Math, "random").mockReturnValue(0.9999);
    });

    const okResponse = (hs: string): Response =>
        ({
            ok: true,
            json: async () => ({ hs }),
        }) as unknown as Response;

    it("returns the homeserver of the first successful response", async () => {
        const fetchSpy = jest.spyOn(global, "fetch").mockResolvedValue(okResponse("dev01.tchap.incubateur.net"));

        const result = await TchapUtils.fetchHomeserverForEmail(email);

        expect(result).toEqual({
            base_url: "https://matrix.dev01.tchap.incubateur.net",
            server_name: "Agents 1",
        });
        expect(fetchSpy).toHaveBeenCalledTimes(1);
        expect(fetchSpy).toHaveBeenCalledWith(
            "https://matrix.dev01.tchap.incubateur.net/_matrix/identity/api/v1/info?medium=email&address=" + email,
        );
    });

    it("retries on a different homeserver when the first request fails", async () => {
        const fetchSpy = jest.spyOn(global, "fetch").mockImplementation(async (url) => {
            if ((url as string).startsWith("https://matrix.dev01")) {
                throw new Error("network error");
            }
            return okResponse("dev02.tchap.incubateur.net");
        });

        const result = await TchapUtils.fetchHomeserverForEmail(email);

        expect(result).toEqual({
            base_url: "https://matrix.dev02.tchap.incubateur.net",
            server_name: "Agents 2",
        });
        expect(fetchSpy).toHaveBeenCalledTimes(2);
    });

    it("retries on the next homeserver when the response is not ok", async () => {
        const fetchSpy = jest.spyOn(global, "fetch").mockImplementation(async (url) => {
            if ((url as string).startsWith("https://matrix.dev01")) {
                return { ok: false, status: 500 } as Response;
            }
            return okResponse("dev02.tchap.incubateur.net");
        });

        const result = await TchapUtils.fetchHomeserverForEmail(email);

        expect(result).toEqual({
            base_url: "https://matrix.dev02.tchap.incubateur.net",
            server_name: "Agents 2",
        });
        expect(fetchSpy).toHaveBeenCalledTimes(2);
    });

    it("returns undefined when every homeserver of the list fails", async () => {
        const fetchSpy = jest.spyOn(global, "fetch").mockRejectedValue(new Error("network error"));

        const result = await TchapUtils.fetchHomeserverForEmail(email);

        expect(result).toBeUndefined();
        // every homeserver was tried exactly once
        expect(fetchSpy).toHaveBeenCalledTimes(homeserverList.length);
    });
});
