/*
Copyright 2019 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React, { useState, useRef } from "react";
import { _t, _td } from "matrix-react-sdk/src/languageHandler";

import AuthPage from "matrix-react-sdk/src/components/views/auth/AuthPage";
import AuthBody from "matrix-react-sdk/src/components/views/auth/AuthBody";
import AuthHeader from "matrix-react-sdk/src/components/views/auth/AuthHeader";
import EmailField from "matrix-react-sdk/src/components/views/auth/EmailField";
import Field from "matrix-react-sdk/src/components/views/elements/Field";
import Spinner from "matrix-react-sdk/src/components/views/elements/Spinner";
import AccessibleButton, { ButtonEvent } from "matrix-react-sdk/src/components/views/elements/AccessibleButton";
import PlatformPeg from "matrix-react-sdk/src/PlatformPeg";

import { ErrorMessage } from "matrix-react-sdk/src/components/structures/ErrorMessage";
import { SSOAction } from "matrix-js-sdk/src/matrix";
import Login from "matrix-react-sdk/src/Login";
import TchapUtils from "../../../util/TchapUtils";
import { ValidatedServerConfig } from "matrix-react-sdk/src/utils/ValidatedServerConfig";

import "../../../../../res/css/views/sso/TchapSSO.pcss";

export default function EmailVerificationPage() {

    const [loading, setLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [errorText, setErrorText] = useState<string>("");

    const submitButtonChild = loading ? <Spinner w={16} h={16} /> : _t("auth|sso|proconnect_continue");

    const emailFieldRef = useRef<Field>(null);

    const displayError = (errorString: string): void => {
        emailFieldRef.current?.focus();
        emailFieldRef.current?.validate({ allowEmpty: false, focused: true });
        setErrorText(errorString);
        setLoading(false); 
    }

    const setUpCurrentHs = async (hs: Record<string, any>): Promise<ValidatedServerConfig | null> => {
        try {
            const validatedServerConfig: ValidatedServerConfig = await TchapUtils.makeValidatedServerConfig(hs);
            return validatedServerConfig; 
        } catch(err) {
            window.location.assign("email-precheck-sso")
            return null
        }

    }

    const onSubmit = async (event: React.FormEvent): Promise<void> => {
        event.preventDefault();
        setLoading(true);
        const isFieldCorrect = await emailFieldRef.current?.validate({ allowEmpty: false });

        if (!isFieldCorrect) {
            emailFieldRef.current?.focus();
            emailFieldRef.current?.validate({ allowEmpty: false, focused: true });
            setErrorText(_td("auth|sso|error_email"));
            setLoading(false);
            return;
        }

         // check email domain and start sso with agentconnect
         try {
            // get user homeserver from his email
            const hs: Record<string, any> | void = await TchapUtils.fetchHomeserverForEmail(email);
            if (!hs) {
                displayError("This email address cannot be used in Tchap");
                return;
            }

            const validatedServerConfig = await setUpCurrentHs(hs);

            if (!validatedServerConfig) {
                displayError(_td("auth|sso|error_homeserver"));
                return
            }
            
            const login = new Login(hs.base_url, hs.base_url, null, {});

            const matrixClient= login.createTemporaryClient();

            // start SSO flow since we got the homeserver
            PlatformPeg.get()?.startSingleSignOn(matrixClient, "sso", "/home", "", SSOAction.LOGIN);

            setLoading(false);

        } catch(err) {
            displayError(_td("auth|sso|error"));
        }
    }

    const onInputChanged = (event: React.FormEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value);
    }

    const onLoginByPasswordClick = () => {
        window.location.assign("#/login"); 
    }

    return (
        <AuthPage>
            <AuthHeader/>
            <AuthBody>
                <h1>
                    {_t("auth|sso|email_title")}
                </h1>
                <form onSubmit={onSubmit} className="tc_pronnect">
                    <fieldset disabled={loading} className="tc_login">
                        <div className="mx_AuthBody_fieldRow">
                            <EmailField
                                name="check_email" // define a name so browser's password autofill gets less confused
                                label={_td("auth|sso|email_placeholder")}
                                labelRequired={_td("auth|forgot_password_email_required")}
                                labelInvalid={_td("auth|forgot_password_email_invalid")}
                                value={email}
                                autoFocus={true}
                                onChange={(event: React.FormEvent<HTMLInputElement>) => onInputChanged(event)}
                                fieldRef={emailFieldRef}
                            />
                        </div>
                        {errorText && <ErrorMessage message={errorText} />}
                        <button type="submit" className="tc_ButtonParent tc_ButtonProconnect tc_Button_iconPC">
                            {submitButtonChild}
                        </button>
                        <div className="mx_AuthBody_button-container tc_bottomButton">
                            <AccessibleButton
                                className="mx_AuthBody_sign-in-instead-button"
                                element="button"
                                kind="link"
                                onClick={(e: ButtonEvent) => {
                                    e.preventDefault();
                                    onLoginByPasswordClick();
                                }}
                            >
                                {_t("auth|sso|sign_in_password_instead")}
                            </AccessibleButton>
                        </div>
                    </fieldset>
                </form>
            </AuthBody>
        </AuthPage>
    );
}
