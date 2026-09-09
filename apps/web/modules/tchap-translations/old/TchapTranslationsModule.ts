/*
  Copyright 2023 DINUM
  Not used anymore, this was with the old runtime module system,
  where a build_config.yml file was conigured with optionalDependies set in package.json to initialize the translation
*/
import { RuntimeModule } from "@matrix-org/react-sdk-module-api/lib/RuntimeModule";

import tchapTranslations from "../src/tchap_translations.json";

export default class TchapTranslationsModule extends RuntimeModule {
    constructor(moduleApi) {
        super(moduleApi);

        this.moduleApi.registerTranslations(tchapTranslations);
    }
}
