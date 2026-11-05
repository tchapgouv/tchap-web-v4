import { _t } from "@element-hq/web-shared-components"
import { ChatIcon } from "@vector-im/compound-design-tokens/assets/web/icons"
import { ThreepidMedium } from "matrix-js-sdk/src/matrix"
import React, { useCallback, useEffect, useState } from "react"
import { JSX } from "react"
import { ThirdPartyIdentifier } from "~tchap-web/src/AddThreepid"
import { IconizedContextMenuOption } from "~tchap-web/src/components/views/context_menus/IconizedContextMenu"
import { useMatrixClientContext } from "~tchap-web/src/contexts/MatrixClientContext"

/* See below for more information on script versioning */
const SUPPORT_SCRIPT_SRC =
  'https://lasuite.numerique.gouv.fr/widgets/support-v1.0.0.js'
const SUPPORT_SCRIPT_INTEGRITY =
  'sha384-6nbJvljqwiFzIRxXjto3vT834fuUFQtvUC6g1qcrbsergKqNXoSI6hXY0AKVpeDo'
const SUPPORT_API = 'https://lasuite.numerique.gouv.fr/api/support/'
/* To fill-in with your app name, e.g. "grist". Check out the list of accepted channels in src/lib/support/channels.ts */
const SUPPORT_CHANNEL = "tchap"


export const HelpButtonComponent = (): JSX.Element => {
    const [emails, setEmails] = useState<ThirdPartyIdentifier[] | undefined>();
    const client = useMatrixClientContext();
    
    const updateThreepids = useCallback(async () => {
        try {
            if (!emails) {
                const threepids = await client.getThreePids();
                setEmails(threepids.threepids.filter((a) => a.medium === ThreepidMedium.Email));
            }
        } catch {
            console.error("[Tchap] Contact support - error getting email");
        }
    }, [client]);

    useEffect(() => {
        void updateThreepids();
        /**
         * Load the support script only when clicking the button to prevent loading it for nothing
         *
         * This is obviously a simple example that could be improved or adapted to your app's context.
         */
        if (!document.getElementById('lasuite-support-widget')) {
            const script = document.createElement('script')
            script.id = 'lasuite-support-widget'
            script.src = SUPPORT_SCRIPT_SRC
            script.integrity = SUPPORT_SCRIPT_INTEGRITY
            script.crossOrigin = 'anonymous'
            script.async = true
            document.body.appendChild(script)
        }

        return () => {
            if(window._lasuite_widget) {
                window._lasuite_widget.push(['support', 'close'])
            }
        }
    }, [updateThreepids]);
    
    const supportButtonClick = () => {
        window._lasuite_widget = window._lasuite_widget || []
        /**
         * The form can be initialized with the logged in user's email address, so that it doesn't show the email input.
         * If no email is provided, the form renders an email input.
         */    
        const email = emails ? emails[0].address : undefined

        window._lasuite_widget.push([
            'support',
            'init',
            {
                api: SUPPORT_API,
                channel: SUPPORT_CHANNEL,
                position: 'bottom-left',
                ...(email ? { email } : {}),
                // You can force the `locale` here ("en" and "fr" are supported),
                // but it automatically adapts to the document's lang if not provided.
            },
        ])
    }

    return (
        <IconizedContextMenuOption
            id="lasuite-widget-support-root"
            icon={<ChatIcon />}
            label={_t("quick_faq|contact")}
            aria-controls="lasuite-widget-support-root"
            onClick={(e) => {
                supportButtonClick();
            }}
        />
    );

}