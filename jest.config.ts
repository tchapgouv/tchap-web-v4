/*
Copyright 2024 New Vector Ltd.
Copyright 2023 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only
Please see LICENSE files in the repository root for full details.
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
    testEnvironment: "jsdom",
    testEnvironmentOptions: {
        url: "http://localhost/",
    },
    testMatch: ["<rootDir>/test/unit-tests/tchap/**/*-test.[tj]s?(x)"], // :TCHAP: only tchap tests
    setupFiles: ["jest-canvas-mock"],
    setupFilesAfterEnv: [
        "<rootDir>/node_modules/matrix-react-sdk/test/setupTests.ts",
        "<rootDir>/test/setup/setupLanguage.ts",
        "<rootDir>/test/setupTests.ts",
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
        "workers/(.+)Factory": "<rootDir>/node_modules/matrix-react-sdk/__mocks__/workerFactoryMock.js",
        "^!!raw-loader!.*": "jest-raw-loader",
        "recorderWorkletFactory": "<rootDir>/node_modules/matrix-react-sdk/__mocks__/empty.js",
        "^fetch-mock$": "<rootDir>/node_modules/fetch-mock",
        // :TCHAP:
        "MImageBody": "<rootDir>/src/tchap/customisations/components/views/messages/ContentScanningImageBody.tsx",
        "../../../../../../src/tchap/components/views/messages/OriginalFileBody":
            "<rootDir>/node_modules/matrix-react-sdk/src/components/views/messages/MImageBody.tsx",
        "MAudioBody": "<rootDir>/src/tchap/customisations/components/views/messages/ContentScanningAudioBody.tsx",
        "../../../../../../src/tchap/components/views/messages/OriginalAudioBody":
            "<rootDir>/node_modules/matrix-react-sdk/src/components/views/messages/MAudioBody.tsx",
        "MStickerBody": "<rootDir>/src/tchap/customisations/components/views/messages/ContentScanningStickerBody.tsx",
        "~matrix-react-sdk/(.*)": "<rootDir>/linked-dependencies/matrix-react-sdk/$1",
        "~tchap-web/(.*)": "<rootDir>/$1",
        "matrix-react-sdk/(.*)": "<rootDir>/linked-dependencies/matrix-react-sdk/$1",
        // end :TCHAP:
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
