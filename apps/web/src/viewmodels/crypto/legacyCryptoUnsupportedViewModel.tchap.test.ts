import { vi, describe, it, expect, beforeEach, afterEach } from "vitest";

import { LegacyCryptoUnsupportedViewModel } from "./legacyCryptoUnsupportedViewModel";
import { MatrixDispatcher } from "../../dispatcher/dispatcher";
import Modal from "../../Modal";
import SdkConfig from "../../SdkConfig";
import BugReportDialog from "../../components/views/dialogs/BugReportDialog";

describe("LegacyCryptoUnsupportedViewModel (Tchap)", () => {
    let dispatcher: MatrixDispatcher;

    beforeEach(() => {
        dispatcher = new MatrixDispatcher();
    });

    afterEach(() => {
        SdkConfig.reset();
        vi.restoreAllMocks();
    });

    it("does not offer to send logs when no bug report endpoint is configured", () => {
        const vm = new LegacyCryptoUnsupportedViewModel({ dispatcher, brand: "Tchap" });

        expect(vm.onSendLogsClick).toBeUndefined();
    });

    it("opens the bug report dialog with a dedicated label and message", () => {
        SdkConfig.add({ bug_report_endpoint_url: "https://example.org/bugreports" });
        const createDialog = vi.spyOn(Modal, "createDialog").mockReturnValue({} as any);
        const vm = new LegacyCryptoUnsupportedViewModel({ dispatcher, brand: "Tchap" });

        vm.onSendLogsClick!({} as any);

        expect(createDialog).toHaveBeenCalledWith(BugReportDialog, {
            label: "legacy-crypto-unsupported",
            initialText: expect.any(String),
        });
    });
});
