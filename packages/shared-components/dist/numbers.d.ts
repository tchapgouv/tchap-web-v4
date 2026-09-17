export declare function clamp(i: number, min: number, max: number): number;

/**
 * Returns the default number if the given value, i, is not a number. Otherwise
 * returns the given value.
 * @param {*} i The value to check.
 * @param {number} def The default value.
 * @returns {number} Either the value or the default value, whichever is a number.
 */
export declare function defaultNumber(i: unknown, def: number): number;

export declare function percentageOf(val: number, min: number, max: number): number;

export declare function percentageWithin(pct: number, min: number, max: number): number;

export declare function sum(...i: number[]): number;

export { }
