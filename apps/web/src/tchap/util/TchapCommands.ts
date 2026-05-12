import PosthogTrackers, { InteractionName } from "~tchap-web/src/PosthogTrackers";

const LASUITE_VISIO_URL = "https://visio.numerique.gouv.fr/";
const ROOM_ID_ALLOWED_CHARACTERS = "abcdefghijklmnopqrstuvwxyz";

const getRandomChar = (): string => {
    const randomIndex = Math.floor(Math.random() * ROOM_ID_ALLOWED_CHARACTERS.length);
    return ROOM_ID_ALLOWED_CHARACTERS[randomIndex];
};

const generateSegment = (length: number): string => {
    return Array.from({length}, () => getRandomChar()).join('');
};

const visioCommand = (): string => {
    PosthogTrackers.trackInteraction("WebTchapVisioCommand" as InteractionName);
    return `${LASUITE_VISIO_URL}${generateSegment(3)}-${generateSegment(4)}-${generateSegment(3)}`;
};


export { visioCommand };