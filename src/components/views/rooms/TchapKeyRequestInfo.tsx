/**
 * Copyright 2022 DINUM
 */
import React, { ComponentType } from "react";
import { _t } from 'matrix-react-sdk/src/languageHandler';
import AccessibleButton from 'matrix-react-sdk/src/components/views/elements/AccessibleButton';
import TooltipButton from 'matrix-react-sdk/src/components/views/elements/TooltipButton';
import Modal from 'matrix-react-sdk/src/Modal';
import { MatrixClientPeg } from "matrix-react-sdk/src/MatrixClientPeg";

interface TchapKeyRequestInfoProps {
    previouslyRequestedKeys: boolean;
    onRequestKeysClick: () => void;
    isEncryptionFailure: boolean;
    isRedacted: boolean;
}

export const TchapKeyRequestInfo: React.FC<TchapKeyRequestInfoProps> = (props: TchapKeyRequestInfoProps) => {
    // :TCHAP:
    const onImportE2eKeysClicked = (): void => {
        Modal.createDialogAsync(
            import(
                'matrix-react-sdk/src/async-components/views/dialogs/security/ImportE2eKeysDialog'
            ) as unknown as Promise<ComponentType<{}>>,
            { matrixClient: MatrixClientPeg.get() },
        );
    };
    // end :TCHAP:

    const keyRequestHelpText =
        <div className="mx_EventTile_keyRequestInfo_tooltip_contents">
            <p>
                { props.previouslyRequestedKeys ?
                    // :TCHAP: use "device" instead of "session"
                    _t("Your key share request has been sent - " +
                        "please check your other devices for key share requests.") :
                    _t("Tchap Key share requests are sent to your other devices automatically. " +
                        "If you rejected or dismissed the key share request on your other devices, " +
                        "click here to request the Tchap Keys again.")
                    // end :TCHAP:
                }
            </p>
            <p>
                {
                    // :TCHAP: use "device" instead of "session"
                    _t("If your other devices do not have the key for this message, " +
                        "you will not be able to decrypt them.")
                    // end :TCHAP:
                }
            </p>
        </div>;

    const keyRequestInfoContent = props.previouslyRequestedKeys ?
        _t('Request in progress...') : // :TCHAP: better text
        _t(
            '<requestLink>Re-send a request to your other devices</requestLink>', // :TCHAP: better text
            {},
            {
                'requestLink': (sub) =>
                    <AccessibleButton
                        className="mx_EventTile_rerequestKeysCta"
                        kind='link_inline'
                        tabIndex={0}
                        onClick={props.onRequestKeysClick}
                    >
                        { sub }
                    </AccessibleButton>,
            },
        );

    // :TCHAP:
    const keyRequestImportLink = _t(
        '<requestLink>Import from saved file</requestLink>',
        {},
        {
            'requestLink': (sub) =>
                <AccessibleButton
                    className="mx_EventTile_rerequestKeysCta"
                    kind='link_inline'
                    tabIndex={0}
                    onClick={onImportE2eKeysClicked}
                >
                    { sub }
                </AccessibleButton>,
        },
    );
    // end :TCHAP:

    const keyRequestInfo = props.isEncryptionFailure && !props.isRedacted ?
        <div className="mx_EventTile_keyRequestInfo">
            <span className="mx_EventTile_keyRequestInfo_text">
                { /** :TCHAP: */ }
                { keyRequestImportLink }
                <br />
                { /** end :TCHAP: */ }
                { keyRequestInfoContent }
            </span>
            <TooltipButton helpText={keyRequestHelpText} />
        </div> : null;

    return keyRequestInfo;
};
