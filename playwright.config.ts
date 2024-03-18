
import { defineConfig } from "@playwright/test";
import dotenv from 'dotenv';

// Read from default ".env" file.
dotenv.config();


const baseURL = process.env["BASE_URL"] ?? "http://localhost:8080";

export default defineConfig({
    use: {
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        video: "retain-on-failure",
        baseURL,
        permissions: ["clipboard-write", "clipboard-read", "microphone"],
        launchOptions: {
            args: ["--use-fake-ui-for-media-stream", "--use-fake-device-for-media-stream", "--mute-audio"],
        },
        trace: "on-first-retry",
    },
    webServer: {
        command: "npx yarn start",
        url: `${baseURL}/config.json`,
        reuseExistingServer: true,
    },
    testDir: "playwright/e2e",
    outputDir: "playwright/test-results",
    workers: 1,
    retries: process.env.CI ? 2 : 0,
    reporter: process.env.CI ? "blob" : [["html", { outputFolder: "playwright/html-report" }]],
    snapshotDir: "playwright/snapshots",
    snapshotPathTemplate: "{snapshotDir}/{testFilePath}/{arg}-{platform}{ext}",
});
