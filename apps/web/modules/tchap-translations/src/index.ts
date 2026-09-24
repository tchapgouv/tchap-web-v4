/**
 * This is the new runtime module system, but NOT WORKING. The translations are not applied, dont know why yet

Some more configuratioon was needed
2. Added a line in webpack.config file in order to add the previously created local module into the webapp

            new CopyWebpackPlugin({
                patterns: [
                    ...
                    {
                        from: "**",
                        context: path.join(__dirname, "modules/translations/lib"),
                        to: path.join(__dirname, "webapp", "modules", "translations", "lib"),
                    },
                ],
            }),

3. Added the modules in config.json
"modules":["/modules/translations/lib/index.js"]

4. Run pnpm build inside the module to create the index.js file in lib
 
 */

import type { Module, Api } from "@element-hq/element-web-module-api";
import tchapTranslations from "./tchap_translations.json";

export default class TchapTranslationsModule implements Module {
    public static readonly moduleApiVersion = "^1.0.0"; 
    public constructor(private api: Api) {}
    public async load(): Promise<void> {

        this.api.i18n.register(tchapTranslations);
    }
}
