export default class RandomUtils {
    /**
     * Generate a random string to a length of max 10 char
     * @param length < 10
     * @returns random string
     */
    public static generateRandom(length: number): string {
        return (Math.random() + 1).toString(36).substring(2, 2+length);
    }
}
