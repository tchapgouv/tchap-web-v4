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

import { env } from "process";

import type { Config } from "jest";

/*
"jest-comments": {
    "README": "For the tests to work, you need matrix-react-sdk to be git-cloned and yarn linked into this project.",
    "snapshotSerializers": "used for jest snapshot",
    "testEnvironment": "switch to jsdom like in matrix-react-sdk",
    "testMatch": "execute only tests in unit-tests directory",
    "setupFilesAfterEnv": "duplicate enzyme configuration in our own setup file '<rootDir>/test/setupTests.js'",
    "moduleNameMapper": "use mapper from element-web, helps at mocking {module, ressources} directly with regexp",
    "transformIgnorePatterns": "make regexp inline {matrix-js-sdk|matrix-react-sdk} else it does not work"
}
*/
const config: Config = {
    snapshotSerializers: ["enzyme-to-json/serializer"],
    testEnvironment: "jsdom",
    testEnvironmentOptions: {
        url: "http://localhost/",
    },
    testMatch: ["<rootDir>/test/unit-tests/**/*-test.[tj]s?(x)"],
    setupFiles: ["jest-canvas-mock"],
    setupFilesAfterEnv: [
        "<rootDir>/node_modules/matrix-react-sdk/test/setupTests.ts",
        "<rootDir>/test/setup/setupLanguage.ts",
        // "<rootDir>/test/setupTests.ts", TCHAP had this, still needed ?
    ],
    moduleNameMapper: {
        "\\.(css|scss|pcss)$": "<rootDir>/__mocks__/cssMock.js",
        "\\.(gif|png|ttf|woff2)$": "<rootDir>/node_modules/matrix-react-sdk/__mocks__/imageMock.js",
        "\\.svg$": "<rootDir>/node_modules/matrix-react-sdk/__mocks__/svg.js",
        "\\$webapp/i18n/languages.json": "<rootDir>/node_modules/matrix-react-sdk/__mocks__/languages.json",
        "^react$": "<rootDir>/node_modules/react",
        "^react-dom$": "<rootDir>/node_modules/react-dom",
        "^matrix-js-sdk$": "<rootDir>/node_modules/matrix-js-sdk/src",
        "^matrix-react-sdk$": "<rootDir>/node_modules/matrix-react-sdk/src",
        "decoderWorker\\.min\\.js": "<rootDir>/node_modules/matrix-react-sdk/__mocks__/empty.js",
        "decoderWorker\\.min\\.wasm": "<rootDir>/node_modules/matrix-react-sdk/__mocks__/empty.js",
        "waveWorker\\.min\\.js": "<rootDir>/node_modules/matrix-react-sdk/__mocks__/empty.js",
        "context-filter-polyfill": "<rootDir>/node_modules/matrix-react-sdk/__mocks__/empty.js",
        "FontManager.ts": "<rootDir>/node_modules/matrix-react-sdk/__mocks__/FontManager.js",
        "workers/(.+)\\.worker\\.ts": "<rootDir>/node_modules/matrix-react-sdk/__mocks__/workerMock.js",
        "^!!raw-loader!.*": "jest-raw-loader",
        "RecorderWorklet": "<rootDir>/node_modules/matrix-react-sdk/__mocks__/empty.js",
        "MImageBody": "<rootDir>/src/tchap/customisations/components/views/messages/ContentScanningImageBody.tsx",
        "../../../../../../src/tchap/components/views/messages/OriginalFileBody":
            "<rootDir>/node_modules/matrix-react-sdk/src/components/views/messages/MImageBody.tsx",
        "MAudioBody": "<rootDir>/src/tchap/customisations/components/views/messages/ContentScanningAudioBody.tsx",
        "../../../../../../src/tchap/components/views/messages/OriginalAudioBody":
            "<rootDir>/node_modules/matrix-react-sdk/src/components/views/messages/MAudioBody.tsx",
        "MStickerBody": "<rootDir>/src/tchap/customisations/components/views/messages/ContentScanningStickerBody.tsx",
        "^fetch-mock$": "<rootDir>/node_modules/fetch-mock",
    },
    transformIgnorePatterns: ["/node_modules/(?!matrix-js-sdk|matrix-react-sdk).+$"],
    coverageReporters: ["text-summary", "lcov"],
    testResultsProcessor: "@casualbot/jest-sonar-reporter",
};

// if we're running under GHA, enable the GHA reporter
if (env["GITHUB_ACTIONS"] !== undefined) {
    config.reporters = [["github-actions", { silent: false }], "summary"];
}

export default config;
