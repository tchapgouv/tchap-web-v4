import type { Module, Api } from "@element-hq/element-web-module-api";

import tchapTranslations from "../tchap_translations.json";
export default class TchapTranslationsModule implements Module {
    public static readonly moduleApiVersion = "^1.0.0"; 
    public constructor(private api: Api) {}
    public async load(): Promise<void> {

        this.api.i18n.register(tchapTranslations);
    }
}
