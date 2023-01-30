/*
Copyright 2022 The Matrix.org Foundation C.I.C.

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

// TCHAP: copied from matrix-rect-sdk
import { defineConfig } from 'cypress';
import 'dotenv/config';

// :TCHAP: Check for the env vars we need and crash if needed.
const foundEnv = {};
const getVar = (name) => {
    const value = process.env[name];
    if (!value) {
        throw Error('Env var not found : cypress needs ' + name +
            '. Set it in the .env file.');
    }
    foundEnv[name] = value;
};
getVar('E2E_TEST_USER_EMAIL');
getVar('E2E_TEST_USER_PASSWORD');
getVar('E2E_TEST_USER_SECURITY_KEY');
getVar('E2E_TEST_USER_HOMESERVER_URL');
getVar('E2E_TEST_USER_HOMESERVER_SHORT');

export default defineConfig({
    watchForFileChanges : false,
    videoUploadOnPasses: false,
    projectId: 'x8og2r',
    experimentalInteractiveRunEvents: true,
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
    e2e: {
        setupNodeEvents(on, config) {
            return require('./cypress/plugins/index.ts').default(on, config);
        },
        baseUrl: 'http://localhost:8080',
        experimentalSessionAndOrigin: true,
        specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    },
    env: foundEnv,
});
