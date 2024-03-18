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

import * as crypto from "node:crypto";
import { APIRequestContext } from "@playwright/test";

import { HomeserverConfig, HomeserverInstance, Credentials } from "..";

export class Synapse implements HomeserverInstance {
    public config: HomeserverConfig;

    public constructor(private readonly request: APIRequestContext) {}

    // The admin endpoints are not opened in Tchap, so for now we cannot use those kind of methods
    public async registerUser(username: string, password: string, displayName?: string): Promise<Credentials> {
        const url = `${this.config.baseUrl}/_synapse/admin/v1/register`;
        const { nonce } = await this.request.get(url).then((r) => r.json());
        const mac = crypto
            .createHmac("sha1", this.config.registrationSecret)
            .update(`${nonce}\0${username}\0${password}\0notadmin`)
            .digest("hex");
        const res = await this.request.post(url, {
            data: {
                nonce,
                username,
                password,
                mac,
                admin: false,
                displayname: displayName,
            },
        });

        if (!res.ok()) {
            throw await res.json();
        }

        const data = await res.json();
        return {
            homeServer: data.home_server,
            accessToken: data.access_token,
            userId: data.user_id,
            deviceId: data.device_id,
            password,
            displayName,
        };
    }

    public async loginUser(userId: string, password: string): Promise<Credentials> {
        const url = `${this.config.baseUrl}/_matrix/client/v3/login`;
        const res = await this.request.post(url, {
            data: {
                type: "m.login.password",
                identifier: {
                    type: "m.id.user",
                    user: userId,
                },
                password: password,
            },
        });
        const json = await res.json();

        return {
            password,
            accessToken: json.access_token,
            userId: json.user_id,
            deviceId: json.device_id,
            homeServer: json.home_server,
        };
    }
}
