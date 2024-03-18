/**
 * In Tchap we directly use the dev server as homeserver and not a local docker 
 * We still try to keep the same structure and logic as the matrix sdk
 */

export interface HomeserverConfig {
    readonly configDir: string;
    readonly baseUrl: string;
    readonly registrationSecret: string;
}

export interface HomeserverInstance {
    readonly config: HomeserverConfig;

    /**
     * Register a user on the given Homeserver using the shared registration secret.
     * @param username the username of the user to register
     * @param password the password of the user to register
     * @param displayName optional display name to set on the newly registered user
     */
    registerUser(username: string, password: string, displayName?: string): Promise<Credentials>;

    /**
     * Logs into synapse with the given username/password
     * @param userId login username
     * @param password login password
     */
    loginUser(userId: string, password: string): Promise<Credentials>;
}

export interface Credentials {
    accessToken: string;
    userId: string;
    deviceId: string;
    homeServer: string;
    password: string | null; // null for password-less users
    displayName?: string;
}
