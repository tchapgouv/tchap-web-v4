/**
 * Copyright 2022 DINUM
 */

import React from "react";
import { MatrixEvent } from "matrix-js-sdk/src/matrix";
import { _t } from "~tchap-web/src/languageHandler"; // :TCHAP:
interface IProps {
    mxEvent: MatrixEvent;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLDivElement>;
}

const TchapUnknownBody = ({ mxEvent, children, ref }: IProps) =>  {
    // :TCHAP: user-friendly message in the case of lost keys
    const content = mxEvent.getContent();
    if (content.msgtype && content.msgtype === "m.bad.encrypted") {
        const userFriendlyText = _t(
            "Decryption fail: Please open Tchap on an other connected device to allow key sharing.",
        );
        return (
            <div className="mx_UnknownBody" ref={ref}>
                {userFriendlyText}
                {children}
            </div>
        );
    }
    // end :TCHAP:

    const text = mxEvent.getContent().body;
    return (
        <div className="mx_UnknownBody" ref={ref}>
            {text}
            {children}
        </div>
    );
};

export default TchapUnknownBody;