/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE in the repository root for full details.
 */

import {
    BaseViewModel,
    type LegacyCryptoUnsupportedViewSnapshot,
    type LegacyCryptoUnsupportedViewModel as LegacyCryptoUnsupportedViewModelInterface,
} from "@element-hq/web-shared-components";

import type { MatrixDispatcher } from "../../dispatcher/dispatcher";
// :TCHAP: legacy-crypto-unsupported-send-logs
import Modal from "../../Modal";
import SdkConfig from "../../SdkConfig";
import BugReportDialog from "../../components/views/dialogs/BugReportDialog";
import { _t } from "../../languageHandler";
// end :TCHAP:

/**
 * The last release that could still migrate a libolm crypto store. Users on an older session must
 * downgrade to this version to migrate, or remove the device and sign in again.
 */
export const LAST_LEGACY_CRYPTO_VERSION = "v1.12.30";

interface LegacyCryptoUnsupportedViewModelProps {
    /**
     * Dispatcher used to trigger the sign out.
     */
    dispatcher: MatrixDispatcher;
    /**
     * The brand name for the client.
     */
    brand: string;
}

/**
 * ViewModel for the screen shown when the session's crypto store predates the current crypto stack
 * and cannot be migrated. The only action offered is signing out.
 */
export class LegacyCryptoUnsupportedViewModel
    extends BaseViewModel<LegacyCryptoUnsupportedViewSnapshot, LegacyCryptoUnsupportedViewModelProps>
    implements LegacyCryptoUnsupportedViewModelInterface
{
    public constructor(props: LegacyCryptoUnsupportedViewModelProps) {
        super(props, {
            brand: props.brand,
            version: LAST_LEGACY_CRYPTO_VERSION,
        });
    }

    /**
     * Signs the user out. The crypto store cannot be migrated, so removing the device is the only way forward.
     */
    public onSignOutClick = (): void => {
        this.props.dispatcher.dispatch({ action: "logout" });
    };

    // :TCHAP: legacy-crypto-unsupported-send-logs - Tchap users cannot downgrade, so let them send their logs to support
    public onSendLogsClick = SdkConfig.get().bug_report_endpoint_url
        ? (): void => {
              Modal.createDialog(BugReportDialog, {
                  label: "legacy-crypto-unsupported",
                  initialText: _t("error|legacy_crypto_unsupported|bug_report_text"),
              });
          }
        : undefined;
    // end :TCHAP:
}
