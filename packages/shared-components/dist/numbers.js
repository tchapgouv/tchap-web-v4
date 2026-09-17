//#region src/core/utils/numbers.ts
function e(e, t) {
	return Number.isFinite(e) ? Number(e) : t;
}
function t(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
function n(...e) {
	return [...e].reduce((e, t) => t + e, 0);
}
function r(e, t, n) {
	return e * (n - t) + t;
}
function i(e, t, n) {
	let r = (e - t) / (n - t);
	return Number.isNaN(r) ? 0 : r;
}
//#endregion
export { t as clamp, e as defaultNumber, i as percentageOf, r as percentageWithin, n as sum };
