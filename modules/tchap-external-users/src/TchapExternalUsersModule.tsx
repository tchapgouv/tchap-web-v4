/*
Copyright 2022 New Vector Ltd. t/a Element

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

import { RuntimeModule } from "@matrix-org/react-sdk-module-api/lib/RuntimeModule";
import { ModuleApi } from "@matrix-org/react-sdk-module-api/lib/ModuleApi";
import { CantAddDialog  } from "./components/CantAddDialog";
import { AddRoomListener, ExternalUsersLifecycle } from "@matrix-org/react-sdk-module-api/lib/tchap/lifecycles/ExternalUsers";
import { DialogProps } from "@matrix-org/react-sdk-module-api/lib/components/DialogContent";

import React from "react";

export default class TchapExternalUsersModule extends RuntimeModule {
    private domain: String;

    public constructor(moduleApi: ModuleApi) {
        super(moduleApi);

        // const rawConfig = this.moduleApi.getConfigValue(
        //     TCHAP_EXTERNAL_USERS_MODULE_CONFIG_NAMESPACE,
        //     TCHAP_EXTERNAL_USERS_MODULE_CONFIG_KEY,
        //   );
      
        //   assertValidGuestModuleConfig(rawConfig);
        //   this.config = rawConfig;

        this.on(ExternalUsersLifecycle.AddRoom, this.onAddRoom);
    }

    protected onAddRoom: AddRoomListener = async () => {
        await this.moduleApi.openDialog<null, DialogProps, CantAddDialog>("test", (props, ref) => <CantAddDialog ref={ref} {...props} />);
    };
}
