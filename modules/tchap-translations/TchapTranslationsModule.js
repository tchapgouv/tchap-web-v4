/*
Copyright 2023 DINUM
*/
import { RuntimeModule } from "@matrix-org/react-sdk-module-api/lib/RuntimeModule";

export default class TchapTranslationsModule extends RuntimeModule {
    constructor(moduleApi) {
        super(moduleApi);

        this.moduleApi.registerTranslations({
            "Explore public rooms": {
                "en": "Explore public roommmmmms",
                "fr": "Rejoindre un forumnnnnn"
            },
        });
    }
}
