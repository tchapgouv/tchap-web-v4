import { MatrixClient, SSOAction } from "matrix-js-sdk/src/matrix";
import React, { JSX } from "react";
import AccessibleButton from "~tchap-web/src/components/views/elements/AccessibleButton";

import { _t } from "~tchap-web/src/languageHandler";
import PlatformPeg from "~tchap-web/src/PlatformPeg";
import TchapUIFeature from "~tchap-web/src/tchap/util/TchapUIFeature";

interface ProconnectButtonProps {
    client?: MatrixClient;
}
export default function ProconnectButton(props: ProconnectButtonProps ): JSX.Element {

    // Used during MAS migration where login/register by directly email is still working
    if (TchapUIFeature.isMASmigration()) {
        return <div className="tc_pronnect">
            <AccessibleButton 
                className="tc_ButtonParent tc_ButtonProconnect tc_Button_iconPC"
                key="register"
                onClick={() => {
                    PlatformPeg.get()?.startSingleSignOn(props.client!, "sso", "/home", "", SSOAction.LOGIN);
                }}>
                <div>{_t("auth|proconnect|button_title", 
                    {},
                    {
                        b: (sub) => (
                            <span style={{fontWeight: "bold"}}>
                                {sub}
                            </span>
                        ),
                        br: () => (<></>)
                    })}
                </div>
            </AccessibleButton>
        </div>
    }
    return (
        <div className="tc_pronnect">
            <a href="#/email-precheck-sso" className="tc_ButtonParent tc_ButtonProconnect tc_Button_iconPC">
                <div>{_t("auth|proconnect|button_title", 
                    {},
                    {
                        b: (sub) => (
                            <span style={{fontWeight: "bold"}}>
                                {sub}
                            </span>
                        ),
                        br: () => (<></>)
                    })}
                </div>
            </a>
        </div>
    );
}