import { MatrixClient } from "matrix-js-sdk/src/matrix";
import React, { JSX } from "react";

import { _t } from "~tchap-web/src/languageHandler";
interface ProconnectButtonProps {
    client?: MatrixClient;
}
export default function ProconnectButton(props: ProconnectButtonProps): JSX.Element {
    return (
        <div className="tc_pronnect">
            <a href="#/email-precheck-sso" className="tc_ButtonParent tc_ButtonProconnect tc_Button_iconPC">
                <div>
                    {_t(
                        "auth|proconnect|button_title",
                        {},
                        {
                            b: (sub) => <span style={{ fontWeight: "bold" }}>{sub}</span>,
                            br: () => <></>,
                        },
                    )}
                </div>
            </a>
        </div>
    );
}
