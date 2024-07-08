import * as React from "react";
import { DialogProps, DialogState } from "@matrix-org/react-sdk-module-api/lib/components/DialogContent";
import { DialogContent } from "@matrix-org/react-sdk-module-api/lib/components/DialogContent";

export class CantAddDialog extends DialogContent<DialogProps, DialogState> {
    public async trySubmit(): Promise<null> {
        return Promise.resolve(null);
    }

    public render() {
        return <div>
            <p> Coucou externe tu n'as pas le droit </p>
        </div>;
    }
}
