/*
Copyright 2023 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { test as base, expect as baseExpect, Locator, Page, ExpectMatcherState, ElementHandle } from "@playwright/test";
import _ from "lodash";

import { Credentials, HomeserverInstance } from "./plugins/homeserver";
import { Synapse } from "./plugins/homeserver/synapse";

// import { TchapAppPage } from "./pages/TchapAppPage";
// import { Bot, CreateBotOpts } from "matrix-react-sdk/playwright/pages/bot";

import CONFIG_JSON from "../config.json";

interface CredentialsWithDisplayName extends Credentials {
    displayName: string;
}

export const test = base.extend<
    {
        // The contents of the config.json to send
        config: typeof CONFIG_JSON;
        homeserver: HomeserverInstance;
        credentials: CredentialsWithDisplayName;

        /**
         * The same as {@link https://playwright.dev/docs/api/class-fixtures#fixtures-page|`page`},
         * but adds an initScript which will populate localStorage with the user's details from
         * {@link #credentials} and {@link #homeserver}.
         *
         * Similar to {@link #user}, but doesn't load the app.
         */
        pageWithCredentials: Page;

        user: CredentialsWithDisplayName;
        displayName?: string;
        // app: TchapAppPage;
        // botCreateOpts: CreateBotOpts;
        // bot: Bot;
        labsFlags: string[];
    }
>({
    config: CONFIG_JSON,

    homeserver: ({ request }, use) => {
        let server: HomeserverInstance = new Synapse(request);

        use(server);
    },

    displayName: undefined,
    credentials: async ({ homeserver, displayName: testDisplayName }, use) => {
        const names = ["user_e2e_1", "user_e2e_2"];
        const password = _.uniqueId("password_");
        const displayName = testDisplayName ?? _.sample(names)!;

        const credentials = await homeserver.registerUser("user", password, displayName);
        console.log(`Registered test user @user:localhost with displayname ${displayName}`);

        await use({
            ...credentials,
            displayName,
        });
    },
    labsFlags: [],

    pageWithCredentials: async ({ page, homeserver, credentials }, use) => {
        await page.addInitScript(
            ({ baseUrl, credentials }) => {
                // Seed the localStorage with the required credentials
                window.localStorage.setItem("mx_hs_url", baseUrl);
                window.localStorage.setItem("mx_user_id", credentials.userId);
                window.localStorage.setItem("mx_access_token", credentials.accessToken);
                window.localStorage.setItem("mx_device_id", credentials.deviceId);
                window.localStorage.setItem("mx_is_guest", "false");
                window.localStorage.setItem("mx_has_pickle_key", "false");
                window.localStorage.setItem("mx_has_access_token", "true");

                // Ensure the language is set to a consistent value
                window.localStorage.setItem("mx_local_settings", '{"language":"en"}');
            },
            { baseUrl: homeserver.config.baseUrl, credentials },
        );
        await use(page);
    },

    user: async ({ pageWithCredentials: page, credentials }, use) => {
        await page.goto("/");
        await page.waitForSelector(".mx_MatrixChat", { timeout: 30000 });
        await use(credentials);
    },
    // app: async ({ page }, use) => {
    //     const app = new TchapAppPage(page);
    //     await use(app);
    // },
    // botCreateOpts: {},
    // bot: async ({ page, homeserver, botCreateOpts, user }, use) => {
    //     const bot = new Bot(page, homeserver, botCreateOpts);
    //     await bot.prepareClient(); // eagerly register the bot
    //     await use(bot);
    // },
});

export const expect = baseExpect.extend({
    async toMatchScreenshot(
        this: ExpectMatcherState,
        receiver: Page | Locator,
        name?: `${string}.png`,
        options?: {
            mask?: Array<Locator>;
            omitBackground?: boolean;
            timeout?: number;
            css?: string;
        },
    ) {
        const page = "page" in receiver ? receiver.page() : receiver;

        // We add a custom style tag before taking screenshots
        const style = (await page.addStyleTag({
            content: `
                .mx_MessagePanel_myReadMarker {
                    display: none !important;
                }
                .mx_RoomView_MessageList {
                    height: auto !important;
                }
                .mx_DisambiguatedProfile_displayName {
                    color: var(--cpd-color-blue-1200) !important;
                }
                .mx_BaseAvatar {
                    background-color: var(--cpd-color-fuchsia-1200) !important;
                    color: white !important;
                }
                .mx_ReplyChain {
                    border-left-color: var(--cpd-color-blue-1200) !important;
                }
                /* Use monospace font for timestamp for consistent mask width */
                .mx_MessageTimestamp {
                    font-family: Inconsolata !important;
                }
                ${options?.css ?? ""}
            `,
        })) as ElementHandle<Element>;

        await baseExpect(receiver).toHaveScreenshot(name, options);

        await style.evaluate((tag) => tag.remove());
        return { pass: true, message: () => "", name: "toMatchScreenshot" };
    },
});
