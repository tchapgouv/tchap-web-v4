import { MatrixClientPeg } from 'matrix-react-sdk/src/MatrixClientPeg';

/**
 * Tchap utils.
 */

export default class TchapUtils {
    /**
         * Return a short value for getDomain().
         * @returns {string} The shortened value of getDomain().
         */
    static getShortDomain(): string {
        const cli = MatrixClientPeg.get();
        const baseDomain = cli.getDomain();
        const domain = baseDomain.split('.tchap.gouv.fr')[0].split('.').reverse().filter(Boolean)[0];

        return this.capitalize(domain) || 'Tchap';
    }

    /**
     * For the current user, get the room federation options.
     *
     * @returns { showRoomFederationOption: boolean, roomFederationDefault: boolean } options
     */
    static getRoomFederationOptions(): { showRoomFederationOption: boolean, roomFederationDefault: boolean } {
        const cli = MatrixClientPeg.get();
        const baseDomain = cli.getDomain();

        // Only show the federate switch to defense users : it's difficult to understand, so we avoid
        // displaying it unless it's really necessary.
        if (baseDomain === 'agent.intradef.tchap.gouv.fr') {
            return { showRoomFederationOption: true, roomFederationDefault: false };
        }

        return { showRoomFederationOption: false, roomFederationDefault: true };
    }

    /**
     * Capitalize a string.
     * @param {string} s The sting to capitalize.
     * @returns {string} The capitalized string.
     * @private
     */
    static capitalize(s: string): string {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }
}
