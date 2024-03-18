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

import { test, expect } from "matrix-react-sdk/playwright/element-web-test";

test.describe("Login", () => {
    test.describe("m.login.password", () => {
        test.use({ startHomeserverOpts: "consent" });

        const username = "user1234";
        const password = "p4s5W0rD";

        test.beforeEach(async ({ page }) => {
            await page.goto("/#/login");
        });

        test("logs in with an existing account and lands on the home screen", async ({
            page,
        }) => {

            await page.getByRole("textbox", { name: "Username" }).fill(username);
            await page.getByPlaceholder("Password").fill(password);
            await page.getByRole("button", { name: "Sign in" }).click();

            await expect(page).toHaveURL(/\/#\/home$/);
        });
    });

    test.describe("logout", () => {
        test.use({ startHomeserverOpts: "consent" });

        test("should go to login page on logout", async ({ page, user }) => {
            await page.getByRole("button", { name: "User menu" }).click();
            await expect(page.getByText(user.displayName, { exact: true })).toBeVisible();

            // Allow the outstanding requests queue to settle before logging out
            await page.waitForTimeout(2000);

            await page.locator(".mx_UserMenu_contextMenu").getByRole("menuitem", { name: "Sign out" }).click();
            await expect(page).toHaveURL(/\/#\/login$/);
        });
    });

    test.describe("logout with logout_redirect_url", () => {
        test.use({
            startHomeserverOpts: "consent",
            config: {
                // We redirect to decoder-ring because it's a predictable page that isn't Element itself.
                // We could use example.org, matrix.org, or something else, however this puts dependency of external
                // infrastructure on our tests. In the same vein, we don't really want to figure out how to ship a
                // `test-landing.html` page when running with an uncontrolled Element (via `yarn start`).
                // Using the decoder-ring is just as fine, and we can search for strategic names.
                logout_redirect_url: "/decoder-ring/",
            },
        });

        test("should respect logout_redirect_url", async ({ page, user }) => {
            await page.getByRole("button", { name: "User menu" }).click();
            await expect(page.getByText(user.displayName, { exact: true })).toBeVisible();

            // give a change for the outstanding requests queue to settle before logging out
            await page.waitForTimeout(2000);

            await page.locator(".mx_UserMenu_contextMenu").getByRole("menuitem", { name: "Sign out" }).click();
            await expect(page).toHaveURL(/\/decoder-ring\/$/);
        });
    });
});
