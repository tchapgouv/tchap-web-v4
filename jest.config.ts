/*
Copyright 2024 New Vector Ltd.
Copyright 2023 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
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
    testEnvironment: "jest-fixed-jsdom",
    testEnvironmentOptions: {
        url: "http://localhost/",
        // This is needed to be able to load dual CJS/ESM WASM packages e.g. rust crypto & matrix-wywiwyg
        customExportConditions: ["browser", "node"],
    },
    testMatch: ["<rootDir>/test/**/*-test.[tj]s?(x)"],
    globalSetup: "<rootDir>/test/globalSetup.ts",
    setupFiles: ["jest-canvas-mock", "web-streams-polyfill/polyfill"],
    setupFilesAfterEnv: ["<rootDir>/test/setupTests.ts"],
    moduleNameMapper: {
        // Support CSS module
        "\\.(module.css)$": "identity-obj-proxy",
        "\\.(css|scss|pcss)$": "<rootDir>/__mocks__/cssMock.js",
        "\\.(gif|png|ttf|woff2)$": "<rootDir>/__mocks__/imageMock.js",
        "\\.svg$": "<rootDir>/__mocks__/svg.js",
        "\\$webapp/i18n/languages.json": "<rootDir>/__mocks__/languages.json",
        "^react$": "<rootDir>/node_modules/react",
        "^react-dom$": "<rootDir>/node_modules/react-dom",
        "^matrix-js-sdk$": "<rootDir>/node_modules/matrix-js-sdk/src",
        "^matrix-react-sdk$": "<rootDir>/src",
        "decoderWorker\\.min\\.js": "<rootDir>/__mocks__/empty.js",
        "decoderWorker\\.min\\.wasm": "<rootDir>/__mocks__/empty.js",
        "waveWorker\\.min\\.js": "<rootDir>/__mocks__/empty.js",
        "context-filter-polyfill": "<rootDir>/__mocks__/empty.js",
        "workers/(.+)Factory": "<rootDir>/__mocks__/workerFactoryMock.js",
        "^!!raw-loader!.*": "jest-raw-loader",
        "recorderWorkletFactory": "<rootDir>/__mocks__/empty.js",
<<<<<<< HEAD
        "^fetch-mock$": "<rootDir>/node_modules/fetch-mock",
        // :TCHAP:
        "MImageBody": "<rootDir>/src/tchap/customisations/components/views/messages/ContentScanningImageBody.tsx",
        "MImageReplyBody":
            "<rootDir>/src/tchap/customisations/components/views/messages/ContentScanningImageReplyBody.tsx",
        "<rootDir>/src/tchap/components/views/messages/OriginalImageBody":
            "<rootDir>/node_modules/matrix-react-sdk/src/components/views/messages/MImageBody.tsx",
        "<rootDir>/src/tchap/components/views/messages/OriginalFileBody":
            "<rootDir>/node_modules/matrix-react-sdk/src/components/views/messages/MFileBody.tsx",
        "MAudioBody": "<rootDir>/src/tchap/customisations/components/views/messages/ContentScanningAudioBody.tsx",
        "<rootDir>/src/tchap/components/views/messages/OriginalAudioBody":
            "<rootDir>/node_modules/matrix-react-sdk/src/components/views/messages/MAudioBody.tsx",
        "MStickerBody": "<rootDir>/src/tchap/customisations/components/views/messages/ContentScanningStickerBody.tsx",
        "~tchap-web/(.*)": "<rootDir>/$1",
        // we use tchap own compound-web package
        "@vector-im/compound-web": "<rootDir>/node_modules/compound-web-tchap",
        // end :TCHAP:
=======
        "counterpart": "<rootDir>/node_modules/counterpart",
>>>>>>> v1.12.9
    },
    transformIgnorePatterns: [
        "/node_modules/(?!(mime|matrix-js-sdk|uuid|p-retry|is-network-error|react-merge-refs|is-ip|ip-regex|super-regex|function-timeout|time-span|convert-hrtime|clone-regexp|is-regexp|matrix-web-i18n)).+$",
    ],
    collectCoverageFrom: [
        "<rootDir>/src/**/*.{js,ts,tsx}",
        "<rootDir>/packages/**/*.{js,ts,tsx}",
        // getSessionLock is piped into a different JS context via stringification, and the coverage functionality is
        // not available in that contest. So, turn off coverage instrumentation for it.
        "!<rootDir>/src/utils/SessionLock.ts",
        // Coverage chokes on type definition files
        "!<rootDir>/src/**/*.d.ts",
    ],
    coverageReporters: ["text-summary", "lcov"],
    testResultsProcessor: "@casualbot/jest-sonar-reporter",
    prettierPath: null,
    moduleDirectories: ["node_modules", "test/test-utils"],
};

// if we're running under GHA, enable the GHA reporter
if (env["GITHUB_ACTIONS"] !== undefined) {
    const reporters: Config["reporters"] = [["github-actions", { silent: false }], "summary"];

    // if we're running against the develop branch, also enable the slow test reporter
    if (env["GITHUB_REF"] == "refs/heads/develop") {
        reporters.push("<rootDir>/test/slowReporter.cjs");
    }
    config.reporters = reporters;
}

export default config;
