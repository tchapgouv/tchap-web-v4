import { MatrixClientPeg } from 'matrix-react-sdk/src/MatrixClientPeg';
import SdkConfig from 'matrix-react-sdk/src/SdkConfig';

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
        // todo doesn't work for preprod
        return this.capitalize(domain) || 'Tchap';
    }

    static DEFAULT_ROOM_FEDERATION_OPTIONS = { showRoomFederationOption: false, roomFederationDefault: true };
    /**
     * For the current user, get the room federation options.
     *
     * @returns { showRoomFederationOption: boolean, roomFederationDefault: boolean } options
     */
    static getRoomFederationOptions(): { showRoomFederationOption: boolean, roomFederationDefault: boolean } {
        const cli = MatrixClientPeg.get();
        const baseDomain = cli.getDomain();

        const findRoomFederationOptionsInConfig = baseDomain => {  // todo untested !
            const homeServerList = SdkConfig.get()['homeserver_list'];

            const homeServerConfig = homeServerList.find(homeServer => {
                return homeServer.base_url.split('https://matrix.')[1] === baseDomain;
            });

            if (!homeServerConfig) {
                return undefined;
            }

            return {
                showRoomFederationOption: homeServerConfig.show_room_federation_option,
                roomFederationDefault: homeServerConfig.room_federation_default,
            };
        };

        const options = findRoomFederationOptionsInConfig(baseDomain);
        if (!options) {
            return this.DEFAULT_ROOM_FEDERATION_OPTIONS;
        }
        if (!options.showRoomFederationOption) {
            options.showRoomFederationOption = this.DEFAULT_ROOM_FEDERATION_OPTIONS.showRoomFederationOption;
        }
        if (!options.roomFederationDefault) {
            options.roomFederationDefault = this.DEFAULT_ROOM_FEDERATION_OPTIONS.roomFederationDefault;
        }
        return options;
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
