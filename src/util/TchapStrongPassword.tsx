import React from "react";
import { IFieldState, IValidationResult } from "matrix-react-sdk/src/components/views/elements/Validation";
import { _t } from "matrix-react-sdk/src/languageHandler";

import TchapApi from './TchapApi';
import TchapUtils from "./TchapUtils";

/**
 * Strong Password utils.
 * File copied from v2 and modified.
 */
export default class TchapStrongPassword {
    private static passwordRules: { ruleName: string, ruleValue: number|string} = null;

    private static async getRules() {
        if (!this.passwordRules) {
            const hsUrl = TchapUtils.randomHomeServer().base_url;
            const res = await fetch(`${hsUrl}${TchapApi.passwordRulesUrl}`);
            this.passwordRules = await res.json();
        }
        return this.passwordRules;
    }

    static validate = async (fieldState: IFieldState): Promise<IValidationResult> => {
        const passwordValue: string = fieldState.value;

        const rules = await this.getRules();

        const applyRule = (ruleName: string, ruleValue): string => {
            switch (ruleName) {
                case "m.minimum_length":
                    return this.minimumLength(passwordValue, ruleValue) ? "" :
                        _t("a minimum of %(number)s characters", { number: ruleValue });
                case "m.require_digit":
                    return this.requireDigit(passwordValue, ruleValue) ? "" :
                        _t("a number");
                case "m.require_symbol":
                    return this.requireSymbol(passwordValue, ruleValue) ? "" :
                        _t("a symbol");
                case "m.require_lowercase":
                    return this.requireLowercase(passwordValue, ruleValue) ? "" :
                        _t("a lowercase letter");
                case "m.require_uppercase":
                    return this.requireUppercase(passwordValue, ruleValue) ? "" :
                        _t("an uppercase letter");
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
                <div className="mx_Validation mx_Validation_invalid">
                    <div className="mx_Validation_description mx_Validation_invalid">
                        { _t("Your password must include:") }
                    </div>
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

    private static minimumLength(pwd, len) {
        return pwd.length >= len;
    }

    private static requireUppercase(pwd, c) {
        if (c) {
            return (/[A-Z]/.test(pwd));
        }
        return true;
    }

    private static requireSymbol(pwd, c) {
        if (c) {
            return (/[^a-zA-Z0-9]/.test(pwd));
        }
        return true;
    }

    private static requireDigit(pwd, c) {
        if (c) {
            return (/[0-9]/.test(pwd));
        }
        return true;
    }

    private static requireLowercase(pwd, c) {
        if (c) {
            return (/[a-z]/.test(pwd));
        }
        return true;
    }
}
