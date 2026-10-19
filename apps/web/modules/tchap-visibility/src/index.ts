// Copyright 2026 DINUM. SPDX-License-Identifier: MIT
import type { Api, Module, ModuleFactory } from "@element-hq/element-web-module-api";

declare module "@element-hq/element-web-module-api" {
    interface Config {
        tchap_features?: Record<string, string[]>;
    }
}

class TchapVisibilityModule implements Module {
    public static readonly moduleApiVersion = "^1.17.0";

    public constructor(private readonly api: Api) {}

    public async load(): Promise<void> {
        this.api.customisations.registerShouldShowComponent((component) => {
            if (component !== "UIComponent.spaceCreation") return;

            const servers = this.api.config.get("tchap_features")?.feature_space || [];
            // Preserve Tchap's existing configuration semantics.
            if (servers.indexOf("*") > -1) return true;

            // Modules load before login: read the current user on every check.
            const userId = this.api.profile.value.userId;
            // Match MatrixClient.getDomain(): keep the complete server name, including its port.
            const domain = userId?.replace(/^.*?:/, "");
            return servers.includes(domain!);
        });
    }
}

export default TchapVisibilityModule satisfies ModuleFactory;
