/*
Copyright 2023 DINUM
*/
import { RuntimeModule } from "@matrix-org/react-sdk-module-api/lib/RuntimeModule";

import tchapTranslationsWeb from "./tchap_translations_web.json";
import tchapTranslationsReactSdk from "./tchap_translations_react-sdk.json";

export default class TchapTranslationsModule extends RuntimeModule {
    constructor(moduleApi) {
        super(moduleApi);

        const allTranslations = { ...tchapTranslationsWeb, ...tchapTranslationsReactSdk };
        // Note : in case of conflict, the last translation file will override the one before it.

        this.moduleApi.registerTranslations(allTranslations);
    }
}
