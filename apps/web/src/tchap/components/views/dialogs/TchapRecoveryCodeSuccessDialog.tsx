import React from "react";

import AccessibleButton from "~tchap-web/src/components/views/elements/AccessibleButton";
import BaseDialog from "~tchap-web/src/components/views/dialogs/BaseDialog";

import { _t } from "../../../../languageHandler";



interface IProps {
    onFinished(): void;
}

export default class TchapRecoveryCodeSuccessDialog extends React.Component<IProps> {


    public constructor(props: IProps) {
        super(props);
    }

    public render(): React.ReactNode {
        return (
            <BaseDialog
                onFinished={this.props.onFinished}
                title={_t("encryption|verification|modal_success_title")}
            >
                <div>
                    <div className="mx_CompleteSecurity_heroIcon mx_E2EIcon_verified" />
                    <p>{_t("encryption|verification|modal_success_description")}</p>
                    <div className="mx_CompleteSecurity_actionRow">
                        <AccessibleButton kind="primary" onClick={this.props.onFinished}>
                            {_t("action|done")}
                        </AccessibleButton>
                    </div>
                </div>
            </BaseDialog>
        );
    }
}
