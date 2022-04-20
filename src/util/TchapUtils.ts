import { MatrixClientPeg } from 'matrix-react-sdk/src/MatrixClientPeg';

/**
 * Tchap utils.
 */

export default class TchapUtils {
    /**
         * Return a short value for getDomain().
         * @returns {string} The shortened value of getDomain().
         */
    static getShortDomain() {
        const cli = MatrixClientPeg.get();
        const baseDomain = cli.getDomain();
        const domain = baseDomain.split('.tchap.gouv.fr')[0].split('.').reverse().filter(Boolean)[0];

        return this.capitalize(domain) || 'Tchap';
    }

    /**
     * Capitalize a string.
     * @param {string} s The sting to capitalize.
     * @returns {string} The capitalized string.
     * @private
     */
    static capitalize(s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }
}
