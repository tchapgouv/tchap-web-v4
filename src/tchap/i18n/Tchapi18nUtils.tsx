import React from "react";
import { _t } from "matrix-react-sdk/src/languageHandler";
import TchapUrls from "../util/TchapUrls";


export default class Tchapi18nUtils {

    public static getServerDownMessage(errCode? : string){
        return _t(
            "Review Tchap services status : url",
            errCode ? {"errCode": " "+errCode} : {"errCode": ""},
            {
                a: (sub) => (
                    <a target="_blank" rel="noreferrer noopener" href={TchapUrls.statusPage}>
                        {sub}
                    </a>
                ),
            },
        )
    }
}


