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

    static validate = async (fieldState: IFieldState): IValidationResult => {
        const passwordValue: string = fieldState.value;

        // todo get hsUrl
        // todo avoid getting rules from server everytime, they don't change often.
        const rules = await this._getRules("https://matrix.agent.dinum.tchap.gouv.fr");

        const applyRule = (ruleName: string, ruleValue): boolean => {
            switch (ruleName) {
                case "m.minimum_length":
                    return TchapStrongPassword._minimum_length(passwordValue, ruleValue);
                case "m.require_digit":
                    return TchapStrongPassword._require_digit(passwordValue, ruleValue);
                case "m.require_symbol":
                    return TchapStrongPassword._require_symbol(passwordValue, ruleValue);
                case "m.require_lowercase":
                    return TchapStrongPassword._require_lowercase(passwordValue, ruleValue);
                case "m.require_uppercase":
                    return TchapStrongPassword._require_uppercase(passwordValue, ruleValue);
                default:
                    throw new Error("Unknown password rule : " + ruleName);
            }
        };

        const isPasswordValid = Object.entries(rules).every(([ruleName, ruleValue]) => {
            return applyRule(ruleName, ruleValue);
        });

        if (isPasswordValid) {
            return {
                valid: true,
            };
        }

        return {
            valid: false,
            feedback: (
                <div className="mx_Validation">
                    <ul className="mx_Validation_details">
                        <li className="mx_Validation_detail mx_Validation_invalid">
                            Bad password // todo proper message
                        </li>
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
