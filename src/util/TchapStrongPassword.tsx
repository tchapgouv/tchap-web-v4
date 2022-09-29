/* eslint-disable @typescript-eslint/naming-convention */
import React from "react";
import { IFieldState, IValidationResult } from "matrix-react-sdk/src/components/views/elements/Validation";

import TchapApi from './TchapApi';

/**
 * Strong Password utils.
 * File copied from v2.
 */
export default class TchapStrongPassword {
    static async _getRules(hsUrl) {
        const res = await fetch(`${hsUrl}${TchapApi.passwordRulesUrl}`);
        return await res.json();
    }

    static validate = async (fieldState: IFieldState): Promise<IValidationResult> => {
        const passwordValue: string = fieldState.value;

        // todo get hsUrl
        // todo avoid getting rules from server everytime, they don't change often.
        const rules = await this._getRules("https://matrix.agent.dinum.tchap.gouv.fr");

        // todo translation
        const applyRule = (ruleName: string, ruleValue): string => {
            switch (ruleName) {
                case "m.minimum_length":
                    return this._minimum_length(passwordValue, ruleValue) ? "" : "minimum length";
                case "m.require_digit":
                    return this._require_digit(passwordValue, ruleValue) ? "" : "require_digit";
                case "m.require_symbol":
                    return this._require_symbol(passwordValue, ruleValue) ? "" : "require_symbol";
                case "m.require_lowercase":
                    return this._require_lowercase(passwordValue, ruleValue) ? "" : "require_lowercase";
                case "m.require_uppercase":
                    return this._require_uppercase(passwordValue, ruleValue) ? "" : "require_uppercase";
                default:
                    throw new Error("Unknown password rule : " + ruleName);
            }
        };

        const errors = Object.entries(rules).reduce((result, [ruleName, ruleValue]) => {
            const error = applyRule(ruleName, ruleValue);
            if (error.length) {
                result.push(error);
            }
            return result;
        }, []);

        if (errors.length === 0) {
            return {
                valid: true,
            };
        }

        return {
            valid: false,
            feedback: (
                <div className="mx_Validation">
                    <ul className="mx_Validation_details">
                        {
                            errors.map((error) => {
                                return (
                                    <li className="mx_Validation_detail mx_Validation_invalid">
                                        { error }
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            ),
        };
    };

    static _minimum_length(pwd, len) {
        return pwd.length >= len;
    }

    static _require_uppercase(pwd, c) {
        if (c) {
            return (/[A-Z]/.test(pwd));
        }
        return true;
    }

    static _require_symbol(pwd, c) {
        if (c) {
            return (/[^a-zA-Z0-9]/.test(pwd));
        }
        return true;
    }

    static _require_digit(pwd, c) {
        if (c) {
            return (/[0-9]/.test(pwd));
        }
        return true;
    }

    static _require_lowercase(pwd, c) {
        if (c) {
            return (/[a-z]/.test(pwd));
        }
        return true;
    }
}
