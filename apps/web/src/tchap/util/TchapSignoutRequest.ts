/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable camelcase */
// Taken from oidc-client-ts lib and adapted as standalone function
interface SignoutRequestArgs {
    // mandatory
    url: string;

    // optional
    id_token_hint?: string;
    client_id?: string;
    post_logout_redirect_uri?: string;
    extraQueryParams?: Record<string, string | number | boolean>;

    // special
    request_type?: string;
    /** custom "state", which can be used by a caller to have "data" round tripped */
    state_data?: unknown;
    url_state?: string;
}

interface State {
    id: string;
    data?: unknown;
    created?: number;
    request_type?: string;
    url_state?: string;
}

export const tchapCreateSignoutRequest = ({
        url,
        state_data, id_token_hint, post_logout_redirect_uri, extraQueryParams, request_type, client_id, url_state,
    }: SignoutRequestArgs) => {
    const epochTime = () => Math.floor(Date.now() / 1000);
    const buildState = (data?: unknown, request_type?: string, url_state?: string) => {
        return {
            id: crypto.randomUUID(),
            data,
            created: epochTime(),
            request_type,
            url_state
        }
    }
    const URL_STATE_DELIMITER = ";";


    if (!url) {
        console.error("ctor: No url passed");
        throw new Error("url");
    }

    const parsedUrl = new URL(url);
    if (id_token_hint) {
        parsedUrl.searchParams.append("id_token_hint", id_token_hint);
    }
    if (client_id) {
        parsedUrl.searchParams.append("client_id", client_id);
    }

    if (post_logout_redirect_uri) {
        parsedUrl.searchParams.append("post_logout_redirect_uri", post_logout_redirect_uri);

        // Add state if either data needs to be stored, or url_state set for an intermediate proxy
        if (state_data || url_state) {
            const state: State = buildState(state_data, request_type, url_state);

            let stateParam: string = state.id;
            if (url_state) {
                stateParam = `${stateParam}${URL_STATE_DELIMITER}${url_state}`;
            }
            parsedUrl.searchParams.append("state", stateParam);
        }
    }

    for (const [key, value] of Object.entries({ ...extraQueryParams })) {
        if (value != null) {
            parsedUrl.searchParams.append(key, value.toString());
        }
    }

    return parsedUrl.href;
}
