/*
Copyright 2023 DINUM
*/

import { defineConfig } from "cypress";
import "dotenv/config";

// :TCHAP: Check for the env vars we need and crash if needed.
const foundEnv = {};
const getVar = (name) => {
    const value = process.env[name];
    if (!value) {
        throw Error("Env var not found : cypress needs " + name + ". Set it in the .env file.");
    }
    foundEnv[name] = value;
};
getVar("E2E_TEST_USER_EMAIL");
getVar("E2E_TEST_USER_PASSWORD");
getVar("E2E_TEST_USER_SECURITY_KEY");
getVar("E2E_TEST_USER_HOMESERVER_URL");
getVar("E2E_TEST_USER_HOMESERVER_SHORT");

// We inherit from matrix-react-sdk's config and add our fields.
const matrixReactSdkConfig = require("matrix-react-sdk/cypress.config");
const tchapConfig = {
    ...matrixReactSdkConfig.default,
    env: {
        ...matrixReactSdkConfig.default.env,
        ...foundEnv,
    },
    e2e: {
        ...matrixReactSdkConfig.default.e2e,
        // override react-sdk's setupNodeEvents, to use our own index.ts
        setupNodeEvents(on, config) {
            return require("./cypress/plugins/index.ts").default(on, config);
        },
    },
};
export default defineConfig(tchapConfig);
