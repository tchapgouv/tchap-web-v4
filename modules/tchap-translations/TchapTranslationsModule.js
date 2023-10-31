/*
Copyright 2023 DINUM
*/
import { RuntimeModule } from "@matrix-org/react-sdk-module-api/lib/RuntimeModule";

import tchapTranslations from "./tchap_translations.json";
export default class TchapTranslationsModule extends RuntimeModule {
    constructor(moduleApi) {
        super(moduleApi);

        this.moduleApi.registerTranslations(tchapTranslations);
    }
}
