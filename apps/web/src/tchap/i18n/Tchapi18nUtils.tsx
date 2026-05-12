import React from "react";
import { _t } from "~tchap-web/src/languageHandler";
import TchapUrls, { TCHAP_AVAILABLE_LINK } from "../util/TchapUrls";


export default class Tchapi18nUtils {

    public static getServerDownMessage(errCode? : string){
        return _t(
            "Tchap is not available at the moment %(errCode)s. <a>View the status of services</a>.",
            {errCode: errCode ?? ''},
            {
                a: (sub) => (
                    <a target="_blank" rel="noreferrer noopener" href={TchapUrls.statusPage}>
                        {sub}
                    </a>
                ),
            },
        )
    }

    public static simpleLink(sub: string, link: TCHAP_AVAILABLE_LINK) {
        return (
            <a href={TchapUrls[link]} rel="noreferrer noopener" target="_blank">
                {sub}
            </a>
        )
    }
}


