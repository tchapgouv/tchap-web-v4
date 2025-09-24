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
import { _t, _td } from "~tchap-web/src/languageHandler";

import AuthPage from "~tchap-web/src/components/views/auth/AuthPage";
import AuthBody from "~tchap-web/src/components/views/auth/AuthBody";
import AuthHeader from "~tchap-web/src/components/views/auth/AuthHeader";
import EmailField from "~tchap-web/src/components/views/auth/EmailField";
import Field from "~tchap-web/src/components/views/elements/Field";
import Spinner from "~tchap-web/src/components/views/elements/Spinner";
import AccessibleButton, { ButtonEvent } from "~tchap-web/src/components/views/elements/AccessibleButton";
import PlatformPeg from "~tchap-web/src/PlatformPeg";

import { ErrorMessage } from "~tchap-web/src/components/structures/ErrorMessage";
import { SSOAction } from "matrix-js-sdk/src/matrix";
import Login, { OidcNativeFlow } from "~tchap-web/src/Login";
import TchapUtils from "../../../util/TchapUtils";
import { ValidatedServerConfig } from "~tchap-web/src/utils/ValidatedServerConfig";
import * as Email from "~tchap-web/src/email";
import "~tchap-web/res/css/views/sso/TchapSSO.pcss";
import TchapUIFeature from "~tchap-web/src/tchap/util/TchapUIFeature";
import { startOidcLogin } from "../../../../utils/oidc/authorize";


interface IProps {
    //propagate the server config change
    onServerConfigChange(config: ValidatedServerConfig): void;
}

//This page is map to EMAIL_PRECHECK_SSO
//It aims at selecting the homeserver based on user email input, then it redirects to MAS
export default function EmailVerificationPage(props: IProps) {

    const [loading, setLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
    const [errorText, setErrorText] = useState<string>("");

    const isMASFlow= TchapUIFeature.isMASFlowActive();
    const isMASmigration= TchapUIFeature.isMASmigration();

    const submitButtonLabel = isMASFlow ? _t("action|continue") : _t("auth|proconnect|continue");
    const submitButtonChild = loading ? <Spinner w={16} h={16} /> : submitButtonLabel;


    const emailFieldRef = useRef<Field>(null);

    const checkEmailField = async (fieldString: string = email) : Promise<boolean> => {
        const fieldOk = await emailFieldRef.current?.validate({ allowEmpty: false, focused: true });
        return !!fieldOk && Email.looksValid(fieldString);
    }

    const displayError = (errorString: string): void => {
        setErrorText(errorString);
        setLoading(false); 
    }

    const setUpCurrentHs = async (hs: Record<string, any>): Promise<ValidatedServerConfig | null> => {
        try {
            const validatedServerConfig: ValidatedServerConfig = await TchapUtils.makeValidatedServerConfig(hs);
            return validatedServerConfig; 
        } catch(err) {
            return null
        }

    }

    const isSSOFlowActive = async (login: Login): Promise<boolean> => {
        const flows = await login.getFlows();
        return !!flows?.find((flow: Record<string, any>) => flow.type === "m.login.sso");
    }

    const onSubmit = async (event: React.FormEvent): Promise<void> => {
        event.preventDefault();
        setLoading(true);
        const isFieldCorrect = await checkEmailField();

        if (!isFieldCorrect) {
            displayError(_t("auth|proconnect|error_email"));
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
                displayError(_t("auth|proconnect|error_homeserver"));
                return
            }
            /* use oidcNativeFlow */
            if(isMASFlow){

                const login = new Login(hs.base_url, hs.base_url, null, {
                    delegatedAuthentication: validatedServerConfig.delegatedAuthentication,
                });
                
                const loginFlows = await login.getFlows(false);

                //only usefull during synapse + MAS migration
                //when homeserver is not MAS ready
                //propagate the serverConfig and switch to legacy login page
                //activateLoginLegacyDuringMASMigration code can be cleared after MAS migration
                if(isMASmigration && 
                    loginFlows?.find((flow: Record<string, any>) => flow.type === "m.login.password")){
                    //console.log("Synapse support lm.ogin.password, use legacy flows");
                    props.onServerConfigChange(validatedServerConfig);
                    onLoginByPasswordClick();
                    return;
                }

                let oidcNativeFlow: OidcNativeFlow | undefined;
                oidcNativeFlow = loginFlows.find((f) => f.type === "oidcNativeFlow") as OidcNativeFlow;
                
                await startOidcLogin(
                    validatedServerConfig.delegatedAuthentication!,
                    oidcNativeFlow.clientId,
                    validatedServerConfig.hsUrl,
                    validatedServerConfig.isUrl,
                    false,
                    email
                );
                
                setLoading(false);

                return;
                
            }

            //MAS Flow is not active
            //legacy sso code
            const login = new Login(hs.base_url, hs.base_url, null, {});

            const matrixClient= login.createTemporaryClient();

            // check if oidc is activated on HS
            const canSSO = await isSSOFlowActive(login);
            if (!canSSO) {
                displayError(_t("auth|proconnect|error_sso_inactive"));
                return
            }

            // start SSO flow since we got the homeserver
            PlatformPeg.get()?.startSingleSignOn(matrixClient, "sso", "/home", "", SSOAction.LOGIN, email);

            setLoading(false);

        } catch(err) {
            displayError(_t("auth|proconnect|error"));
        }
    }

    const onInputChanged = async (event: React.FormEvent<HTMLInputElement>) => {
        const emailString = event.currentTarget.value
        setEmail(emailString);
        const isEmailValid = await checkEmailField(emailString);
        setButtonDisabled(!isEmailValid);
    }

    const onLoginByPasswordClick = () => {
        window.location.assign("#/login"); 
    }

    const getTitleLabel = () => {
        if (isMASFlow) {
            return _t("action|sign_in");
        }
        return _t("auth|proconnect|email_title");
    }

    const getButtonGroup = () => {
        if (isMASFlow) {
            return (
                <AccessibleButton
                        type="submit"
                        data-testid="mas-submit"
                        title={_t("action|continue")}
                        className="tc_ButtonParent tc_ButtonProconnect"
                        element="button"
                        kind="link"
                        disabled={buttonDisabled}
                        onClick={(e: ButtonEvent) => {
                            onSubmit(e);
                        }}
                    >
                        {submitButtonChild}
                </AccessibleButton>
            )
        }
        return <>
            <AccessibleButton
                type="submit"
                data-testid="proconnect-submit"
                title={_t("auth|proconnect|continue")}
                className="tc_ButtonParent tc_ButtonProconnect tc_Button_iconPC"
                element="button"
                kind="link"
                disabled={buttonDisabled}
                onClick={(e: ButtonEvent) => {
                    onSubmit(e);
                }}
            >
                {submitButtonChild}
            </AccessibleButton>
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
                    {_t("auth|proconnect|sign_in_password_instead")}
                </AccessibleButton>
            </div>
        </>
    }

    return (
        <AuthPage>
            <AuthHeader/>
            <AuthBody>
                <h1>
                    {getTitleLabel()}
                </h1>
                <form onSubmit={onSubmit} className="tc_pronnect">
                    <fieldset disabled={loading} className="tc_login">
                        <div className="mx_AuthBody_fieldRow">
                            <EmailField
                                name="check_email" // define a name so browser's password autofill gets less confused
                                label={_td("auth|proconnect|email_placeholder")}
                                labelRequired={_td("auth|forgot_password_email_required")}
                                labelInvalid={_td("auth|forgot_password_email_invalid")}
                                value={email}
                                autoFocus={true}
                                onChange={(event: React.FormEvent<HTMLInputElement>) => onInputChanged(event)}
                                fieldRef={emailFieldRef}
                            />
                        </div>
                        {errorText && <ErrorMessage message={errorText} />}
                        {getButtonGroup()}
                    </fieldset>
                </form>
            </AuthBody>
        </AuthPage>
    );
}
