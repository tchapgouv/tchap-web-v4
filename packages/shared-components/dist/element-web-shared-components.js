import { clamp as e, defaultNumber as t, percentageOf as n, percentageWithin as r, sum as i } from "./numbers.js";
import * as a from "react";
import o, { Children as s, cloneElement as c, createContext as l, createElement as u, forwardRef as d, isValidElement as f, memo as p, startTransition as m, useCallback as h, useContext as g, useEffect as _, useId as v, useImperativeHandle as y, useInsertionEffect as b, useLayoutEffect as x, useMemo as S, useReducer as C, useRef as w, useState as T, useSyncExternalStore as E, version as ee } from "react";
import { Avatar as D, AvatarStack as te, Badge as O, Button as k, ChatFilter as A, CheckboxMenuItem as ne, ContextMenu as re, Dropdown as j, Field as ie, H1 as ae, Heading as oe, IconButton as M, IndicatorIcon as se, InlineSpinner as ce, Link as le, Menu as ue, MenuItem as N, MenuTitle as de, RadioMenuItem as fe, ReleaseAnnouncement as pe, Root as me, Separator as he, SubMenu as ge, Submit as _e, Text as P, TextControl as ve, Toast as ye, ToggleMenuItem as be, Tooltip as F, Unread as xe, UnreadCounter as Se } from "@vector-im/compound-web";
import { DATA_BY_CATEGORY as Ce, getEmojiFromUnicode as we } from "@matrix-org/emojibase-bindings";
import { Virtuoso as Te, VirtuosoMockContext as Ee } from "react-virtuoso";
import { flushSync as De } from "react-dom";
import { Group as Oe, Group as ke, Panel as Ae, Panel as je, Separator as Me, Separator as Ne, usePanelCallbackRef as Pe } from "react-resizable-panels";
//#region \0rolldown/runtime.js
var Fe = Object.create, Ie = Object.defineProperty, Le = Object.getOwnPropertyDescriptor, Re = Object.getOwnPropertyNames, ze = Object.getPrototypeOf, Be = Object.prototype.hasOwnProperty, Ve = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, I = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), He = (e, t) => {
	let n = {};
	for (var r in e) Ie(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || Ie(n, Symbol.toStringTag, { value: "Module" }), n;
}, Ue = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = Re(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !Be.call(e, s) && s !== n && Ie(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = Le(t, s)) || r.enumerable
	});
	return e;
}, We = (e, t, n) => (n = e == null ? {} : Fe(ze(e)), Ue(t || !e || !e.__esModule || !Be.call(e, "default") ? Ie(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), Ge = (e) => Be.call(e, "module.exports") ? e["module.exports"] : Ue(Ie({}, "__esModule", { value: !0 }), e), Ke = globalThis.Temporal, qe = (e, t) => `Non-positive ${e}: ${t}`, Je = (e, t) => `Non-finite ${e}: ${t}`, Ye = (e) => `Cannot convert bigint to ${e}`, Xe = "Invalid object", Ze = (e, t, n, r) => Qe(e, t) + `; must be between ${n}-${r}`, Qe = (e, t) => `Invalid ${e}: ${t}`, $e = 1e3, et = 1e6, tt = 1e9, nt = 6e10, rt = 36e11;
function it(e) {
	return e === void 0 ? Object.create(null) : dt(e);
}
function at(e, t = "number") {
	if (typeof e == "bigint") throw TypeError(Ye(t));
	if (e = Number(e), !Number.isFinite(e)) throw RangeError(Je(t, e));
	return e;
}
function ot(e, t) {
	return Math.trunc(at(e, t)) || 0;
}
function st(e, t) {
	return ct(ot(e, t), t);
}
function ct(e, t = "number") {
	if (e <= 0) throw RangeError(qe(t, e));
	return e;
}
function lt(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
function ut(e) {
	return e !== null && (typeof e == "object" || typeof e == "function");
}
function dt(e) {
	if (!ut(e)) throw TypeError(Xe);
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/temporal-polyfill@1.0.1/node_modules/temporal-polyfill/chunks/internal.js
var ft = Qe, pt = (e) => `Missing ${e}`, mt = (e) => "No valid fields: " + e.join(), ht = (e, t, n) => Qe(e, t) + "; must be " + Object.keys(n).join(), gt = "Cannot use valueOf", _t = "Invalid calling context", vt = (e) => "Missing year" + (e ? "/era/eraYear" : ""), yt = "Invalid leap month", bt = (e) => Qe("Calendar", e), xt = (e, t) => `Unknown calendar ${e}; might need ${t}`, St = (e) => Qe("TimeZone", e), Ct = (e) => `Cannot parse: ${e}`, wt = (e) => `Invalid substring: ${e}`, Tt = lt, Et = ut;
function L(e) {
	throw RangeError(e);
}
function Dt(e) {
	throw TypeError(e);
}
function Ot(e, t, n, r, i) {
	return kt(t, ((e, t) => {
		let n = e[t];
		return n === void 0 && Dt(pt(t)), n;
	})(e, t), n, r, i);
}
function kt(e, t, n, r, i, a) {
	let o = Tt(t, n, r);
	return i && t !== o && L(((e, t, n, r, i) => i ? Ze(e, i[t], i[n], i[r]) : Ze(e, t, n, r))(e, t, n, r, a)), o;
}
function At(e, t = Map) {
	let n = new t();
	return (t, ...r) => {
		if (n.has(t)) return n.get(t);
		let i = e(t, ...r);
		return n.set(t, i), i;
	};
}
var jt = (e) => Mt({ name: e }, 1), Mt = (e, t) => Pt((e) => ({
	value: e,
	configurable: 1,
	writable: !t
}), e), Nt = (e) => ({ [Symbol.toStringTag]: {
	value: e,
	configurable: 1
} });
function Pt(e, t) {
	let n = {};
	for (let r in t) n[r] = e(t[r], r);
	return n;
}
function Ft(e, t) {
	let n = {};
	for (let r of e) n[r] = t;
	return n;
}
function It(e) {
	let t = {};
	for (let n of e) t[n] = (e) => e[n];
	return t;
}
function Lt(e, t, n = Object.create(null)) {
	for (let r of e) n[r] = t[r];
	return n;
}
function Rt(e, t, n) {
	for (let r of e) if (t[r] !== n[r]) return 0;
	return 1;
}
function zt(e, t, n) {
	let r = { ...n };
	for (let n = 0; n < t; n++) r[e[n]] = 0;
	return r;
}
function Bt(e, ...t) {
	return (...n) => e(...t, ...n);
}
function Vt() {}
function Ht(e) {
	return e[0].toUpperCase() + e.substring(1);
}
function Ut(...e) {
	return [].concat(...e).sort();
}
function Wt(e) {
	return RegExp(`^${e}$`, "i");
}
function Gt(e) {
	return parseInt(e.padEnd(9, "0"));
}
function Kt(e) {
	return e && e !== "+" ? -1 : 1;
}
function qt(e) {
	return e === void 0 ? 0 : parseInt(e);
}
function Jt(e, t) {
	return String(t).padStart(e, "0");
}
var Yt = /*@__PURE__*/ Bt(Jt, 2);
function Xt(e, t) {
	return Math.sign(e - t);
}
function Zt(e, t) {
	return e < t ? -1 : +(e > t);
}
function Qt(e, t) {
	let n = e / t;
	return e % t < 0n ? n - 1n : n;
}
function $t(e, t) {
	let n = Qt(e, t);
	return [n, e - n * t];
}
function en(e, t) {
	return [Math.floor(e / t), tn(e, t)];
}
function tn(e, t) {
	return (e % t + t) % t;
}
function nn(e, t) {
	return Math.trunc(e / t) || 0;
}
function rn(e, t) {
	return e % t || 0;
}
function an(e, t = 1) {
	return t * (.5 + e / 5);
}
function on(e) {
	return Math.abs(e % 1) === .5;
}
var sn = "iso8601", cn = {
	bce: -1,
	ce: 0
};
function ln(e) {
	let t = e.normalize("NFD").toLowerCase().replace(/[^a-z0-9]/g, "");
	return t === "bc" || t === "b" ? "bce" : t === "ad" || t === "a" ? "ce" : t;
}
function un(e) {
	return e === void 0 ? "iso8601" : e === 0 ? "gregory" : e.id;
}
var dn = /^M(\d{2})(L?)$/;
function fn(e) {
	let t = dn.exec(e);
	return t || L(((e) => `Invalid monthCode: ${e}`)(e)), [parseInt(t[1]), !!t[2]];
}
function pn(e, t) {
	return "M" + Yt(e) + (t ? "L" : "");
}
function mn(e, t, n) {
	return e + (t || n && e >= n ? 1 : 0);
}
var hn = {
	nanosecond: 0,
	microsecond: 1,
	millisecond: 2,
	second: 3,
	minute: 4,
	hour: 5,
	day: 6,
	week: 7,
	month: 8,
	year: 9
}, gn = /*@__PURE__*/ Object.keys(hn), _n = $e, vn = et, yn = tt, bn = nt, xn = rt, Sn = 864e11, Cn = [
	1,
	_n,
	vn,
	yn,
	bn,
	xn,
	Sn
], wn = /*@__PURE__*/ BigInt(_n), Tn = /*@__PURE__*/ BigInt(vn), En = /*@__PURE__*/ BigInt(yn), Dn = /*@__PURE__*/ BigInt(bn), On = /*@__PURE__*/ BigInt(xn), kn = /*@__PURE__*/ BigInt(Sn);
function An(e, t) {
	let n = Number(e / kn), r = Number(e % kn);
	return Sn / t * n + (Math.trunc(r / t) + r % t / t);
}
var jn = /*@__PURE__*/ gn.slice(0, 6), Mn = /*@__PURE__*/ It(jn), Nn = ["year"], Pn = ["day"], Fn = [
	"day",
	"month",
	"year"
], In = ["offset"], Ln = ["timeZone"], Rn = ["era", "eraYear"], zn = [
	"era",
	"eraYear",
	"year"
], Bn = ["month", "monthCode"], Vn = [
	"day",
	"month",
	"monthCode"
], Hn = /*@__PURE__*/ Ut(jn), Un = /*@__PURE__*/ Ut(Rn, Nn), Wn = /*@__PURE__*/ Ut(Bn, Nn), Gn = /*@__PURE__*/ Ut(Rn, Wn), Kn = /*@__PURE__*/ Ut(["monthCode"], Nn), qn = /*@__PURE__*/ Ut(Rn, Kn), Jn = /*@__PURE__*/ Ut(Pn, ["monthCode"]), Yn = /*@__PURE__*/ Ut(Pn, Wn), Xn = /*@__PURE__*/ Ut(Pn, Rn, Wn), Zn = /*@__PURE__*/ Ut(Yn, jn), Qn = /*@__PURE__*/ Ut(Xn, jn), $n = /*@__PURE__*/ Ut(Yn, jn, In), er = /*@__PURE__*/ Ut(Xn, jn, In), tr = /*@__PURE__*/ Ut(Yn, jn, In, Ln), nr = /*@__PURE__*/ Ut(Xn, jn, In, Ln), rr = /*@__PURE__*/ Ut(Pn, Kn), ir = /*@__PURE__*/ Ut(Pn, Rn, Kn), ar = /*@__PURE__*/ Ft(jn, 0);
function or(e) {
	return cr(e, 1), e;
}
var sr = {
	hour: 23,
	minute: 59,
	second: 59
};
function cr(e, t) {
	let n = {};
	for (let r of jn) n[r] = kt(r, e[r], 0, sr[r] || 999, t);
	return n;
}
function lr(e) {
	return dr(e) * yn + fr(e);
}
function ur(e) {
	return 1e3 * dr(e) + e.millisecond;
}
function dr(e) {
	return 3600 * e.hour + 60 * e.minute + e.second;
}
function fr(e) {
	return e.millisecond * vn + e.microsecond * _n + e.nanosecond;
}
function pr(e) {
	let [t, n] = en(e, Sn);
	return [mr(n), t];
}
function mr(e) {
	let [t, n] = en(e, vn), [r, i] = en(n, _n);
	return hr(t, r, i);
}
function hr(e, t = 0, n = 0) {
	let [r, i] = en(e, 36e5), [a, o] = en(i, 6e4), [s, c] = en(o, 1e3);
	return {
		hour: r,
		minute: a,
		second: s,
		millisecond: c,
		microsecond: t,
		nanosecond: n
	};
}
function gr(e) {
	let [t, n] = $t(e, En);
	return [Number(t), Number(n)];
}
function _r(e) {
	return yr(e) + BigInt(lr(e));
}
function vr(e) {
	return br(e) + ur(e);
}
function yr(e) {
	return BigInt(xr(e)) * kn;
}
function br(e) {
	return 864e5 * xr(e);
}
function xr(e) {
	return Sr(e.year, e.month, e.day);
}
function Sr(e, t = 1, n = 1) {
	let r = t - 1;
	return e += Math.floor(r / 12), t = tn(r, 12), Date.UTC(e % 400 - 400, t, 0) / 864e5 + 146097 * (nn(e, 400) + 1) + n;
}
function Cr(e) {
	let [t, n] = $t(e, kn);
	return {
		...wr(Number(t)),
		...mr(Number(n))
	};
}
function wr(e) {
	let t = /* @__PURE__ */ new Date(864e5 * tn(e, 146097));
	return {
		year: t.getUTCFullYear() + 400 * Math.floor(e / 146097),
		month: t.getUTCMonth() + 1,
		day: t.getUTCDate()
	};
}
function Tr(e) {
	return [e, 0];
}
function Er(e, t) {
	if (!t) return {
		year: 1972,
		month: e
	};
}
function Dr(e, t, n) {
	return {
		year: e,
		month: t,
		day: n
	};
}
function Or(e, t) {
	switch (t) {
		case 2: return Ar(e) ? 29 : 28;
		case 4:
		case 6:
		case 9:
		case 11: return 30;
	}
	return 31;
}
function kr(e) {
	return Ar(e) ? 366 : 365;
}
function Ar(e) {
	return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function jr(e, t, n) {
	return e += nn(n, 12), (t += rn(n, 12)) < 1 ? (e--, t += 12) : t > 12 && (e++, t -= 12), {
		year: e,
		month: t
	};
}
function Mr(e, t, n, r) {
	return 12 * (n - e) + r - t;
}
function Nr(e) {
	return tn(Sr(e.year, e.month, e.day) + 4, 7) || 7;
}
function Pr(e) {
	return Sr(e.year, e.month, e.day) - Sr(e.year) + 1;
}
function Fr(e) {
	let t = e.year, n = Math.floor((Pr(e) - Nr(e) + 10) / 7), r = Ir(t);
	return n < 1 ? n = r = Ir(--t) : n > r && (n = 1, r = Ir(++t)), {
		weekOfYear: n,
		yearOfWeek: t,
		Ie: r
	};
}
function Ir(e) {
	let t = Nr({
		year: e,
		month: 1,
		day: 1
	});
	return t === 4 || t === 3 && Ar(e) ? 53 : 52;
}
function Lr({ year: e }) {
	return e < 1 ? {
		era: "bce",
		eraYear: 1 - e
	} : {
		era: "ce",
		eraYear: e
	};
}
function Rr(e) {
	return zr(e), or(e);
}
function zr(e) {
	return Vr(e, 1), e;
}
function Br(e) {
	return Rt(Fn, e, Vr(e));
}
function Vr(e, t) {
	let { year: n } = e, r = Ot(e, "month", 1, 12, t);
	return {
		year: n,
		month: r,
		day: Ot(e, "day", 1, Or(n, r), t)
	};
}
function Hr(e, t) {
	return e ? e.ie(t) : t;
}
function Ur(e, t, n) {
	return e ? e.O(t, n) : Tr(n);
}
function Wr(e, t) {
	return e === 0 ? Lr(t) : e ? e.h(t) : {};
}
function Gr(e, t, n, r) {
	return e ? e.je(t, n, r) : Dr(t, n, r);
}
function Kr(e, t) {
	return e ? e.k(t) : 12;
}
function qr(e, t, n) {
	return e ? e.p(t, n) : Or(t, n);
}
function Jr(e, t) {
	let { year: n, month: r } = Hr(e, t), [i, a] = Ur(e, n, r);
	return pn(i, a);
}
function Yr(e, t) {
	let { year: n } = Hr(e, t);
	return e ? e.u(n) : Ar(n);
}
function Xr(e, t) {
	let { year: n } = Hr(e, t);
	return Kr(e, n);
}
function Zr(e, t) {
	let { year: n, month: r } = Hr(e, t);
	return qr(e, n, r);
}
function Qr(e, t) {
	let { year: n } = Hr(e, t);
	return e ? e.j(n) : kr(n);
}
function $r(e, t) {
	if (!e) return Pr(t);
	let { year: n } = Hr(e, t), r = Gr(e, n, 1, 1);
	return xr(t) - xr(r) + 1;
}
function ei(e, t) {
	return e === void 0 ? Fr(t).weekOfYear : void 0;
}
function ti(e, t) {
	return e === void 0 ? Fr(t).yearOfWeek : void 0;
}
var ni = /*@__PURE__*/ gn.map((e) => e + "s"), ri = /*@__PURE__*/ It(ni), ii = /*@__PURE__*/ Ut(ni), ai = /*@__PURE__*/ ni.slice(0, 6), oi = /*@__PURE__*/ ni.slice(6), si = /*@__PURE__*/ oi.slice(1), ci = /*@__PURE__*/ ni.reduce((e, t, n) => (e[t] = n, e), {}), li = /*@__PURE__*/ Ft(ni, 0), ui = /*@__PURE__*/ Ft(ai, 0), di = /*@__PURE__*/ Bt(zt, ni);
function fi(e, t) {
	return t ?? L(pt(e)), t;
}
var pi = /*@__PURE__*/ Bt(mi, "string");
function mi(e, t, n = e) {
	return typeof t !== e && Dt(ft(n, t)), t;
}
function hi(e, t = "number") {
	return Number.isInteger(e) || L(((e, t) => `Non-integer ${e}: ${t}`)(t, e)), e || 0;
}
function gi(e) {
	return typeof e == "symbol" && Dt("Cannot convert Symbol to string"), String(e);
}
function _i(e, t) {
	return ut(e) ? String(e) : pi(e, t);
}
function vi(e) {
	return typeof e == "boolean" ? BigInt(+!!e) : typeof e == "string" ? BigInt(e) : (typeof e != "bigint" && Dt(`Invalid bigint: ${e}`), e);
}
function yi(e, t) {
	return hi(at(e, t), t);
}
function bi(e, t) {
	return typeof e == "string" ? ((e, t) => {
		let n = Object.create(null);
		return n[e] = t, n;
	})(t, e) : dt(e);
}
var xi = "smallestUnit", Si = {
	constrain: 0,
	reject: 1
}, Ci = {
	compatible: 0,
	reject: 1,
	earlier: 2,
	later: 3
}, wi = {
	reject: 0,
	use: 1,
	prefer: 2,
	ignore: 3
}, Ti = {
	auto: 0,
	never: 1,
	critical: 2,
	always: 3
}, Ei = {
	auto: 0,
	never: 1,
	critical: 2
}, Di = {
	auto: 0,
	never: 1
}, Oi = {
	floor: 0,
	halfFloor: 1,
	ceil: 2,
	halfCeil: 3,
	trunc: 4,
	halfTrunc: 5,
	expand: 6,
	halfExpand: 7,
	halfEven: 8
}, ki = [
	Math.floor,
	(e) => on(e) ? Math.floor(e) : Math.round(e),
	Math.ceil,
	(e) => on(e) ? Math.ceil(e) : Math.round(e),
	Math.trunc,
	(e) => on(e) ? Math.trunc(e) || 0 : Math.round(e),
	(e) => e < 0 ? Math.floor(e) : Math.ceil(e),
	(e) => Math.sign(e) * Math.round(Math.abs(e)) || 0,
	(e) => on(e) ? (e = Math.trunc(e) || 0) + e % 2 : Math.round(e)
], Ai = {
	previous: -1,
	next: 1
};
function ji(e) {
	let t = e.roundingIncrement;
	return t === void 0 ? 1 : ot(t, "roundingIncrement");
}
function Mi(e) {
	let t = e.fractionalSecondDigits;
	if (t !== void 0) {
		if (typeof t != "number") {
			if (gi(t) === "auto") return;
			L(ft("fractionalSecondDigits", t));
		}
		t = kt("fractionalSecondDigits", Math.floor(t), 0, 9, 1);
	}
	return t;
}
function Ni(e, t, n = 0, r) {
	let i = t[e];
	if (i === void 0) return r ? n : void 0;
	if (i = gi(i), i === "auto") return r ? n : null;
	let a = hn[i];
	return a === void 0 && (a = ci[i]), a === void 0 && L(ht(e, i, hn)), a;
}
function Pi(e, t, n, r = 0) {
	let i = n[e];
	if (i === void 0) return r;
	let a = gi(i), o = t[a];
	return o === void 0 && L(ht(e, a, t)), o;
}
var Fi = /*@__PURE__*/ Bt(Ni, xi), Ii = /*@__PURE__*/ Bt(Ni, "largestUnit"), Li = /*@__PURE__*/ Bt(Ni, "unit"), Ri = /*@__PURE__*/ Bt(Pi, "overflow", Si), zi = /*@__PURE__*/ Bt(Pi, "disambiguation", Ci), Bi = /*@__PURE__*/ Bt(Pi, "offset", wi), Vi = /*@__PURE__*/ Bt(Pi, "calendarName", Ti), Hi = /*@__PURE__*/ Bt(Pi, "timeZoneName", Ei), Ui = /*@__PURE__*/ Bt(Pi, "offset", Di), Wi = /*@__PURE__*/ Bt(Pi, "roundingMode", Oi), Gi = /*@__PURE__*/ Bt(Pi, "direction", Ai);
function Ki(e, t, n, r) {
	let i = r ? Sn : Cn[t + 1];
	if (i) {
		let n = Cn[t];
		i % ((e = kt("roundingIncrement", e, 1, i / n - +!r, 1)) * n) && L(ft("roundingIncrement", e));
	} else e = kt("roundingIncrement", e, 1, n ? 10 ** 9 : 1, 1);
	return e;
}
function qi(e, t, n, r) {
	return t != null && kt(e, t, n, r, 1, gn), t;
}
function Ji(e, t) {
	t > e && L("smallestUnit > largestUnit");
}
function Yi(e, t, n, r = 9, i = 0, a = 4) {
	t = it(t);
	let o = Ii(t, i), s = ji(t), c = Wi(t, a), l = Fi(t, i, 1);
	return o = qi("largestUnit", o, i, r), l = qi(xi, l, i, r), o == null ? o = Math.max(n, l) : Ji(o, l), s = Ki(s, l, 1), e && (c = ((e) => e < 4 ? (e + 2) % 4 : e)(c)), [
		o,
		l,
		s,
		c
	];
}
function Xi(e, t = 6, n) {
	let r = ji(e = bi(e, xi)), i = Wi(e, 7), a = Fi(e);
	return a = fi(xi, a), a = qi(xi, a, 0, t), r = Ki(r, a, void 0, n), [
		a,
		r,
		i
	];
}
function Zi(e, t) {
	return Lt(Fn, e, Lt(jn, t));
}
function Qi(e) {
	return e === void 0 ? 0 : Ri(dt(e));
}
function $i(e, t = 0) {
	e = it(e);
	let n = zi(e), r = Bi(e, t);
	return [
		Ri(e),
		r,
		n
	];
}
var ea = /*@__PURE__*/ BigInt(1e8) * kn, ta = /*@__PURE__*/ BigInt(-1e8) * kn, na = ta - kn, ra = -3261848;
function ia(e) {
	let t = 12 * e.year + e.month;
	return (t < ra || t > 3309129) && L("Out-of-bounds date"), e;
}
function aa(e, t = 1) {
	return sa(yr(e), t), e;
}
function oa(e) {
	let t = yr(e);
	return sa(t), t !== na || lr(e) || L("Out-of-bounds date"), e;
}
function sa(e, t = 1) {
	(e < (t ? na : ta) || e > ea) && L("Out-of-bounds date");
}
function ca(e) {
	return (e < ta || e > ea) && L("Out-of-bounds date"), e;
}
function la(e, t) {
	return ca(yr(e) + BigInt(lr(e) - t));
}
function ua(e) {
	return { epochNanoseconds: e };
}
function da(e, t, n) {
	return {
		calendar: n,
		timeZone: t,
		epochNanoseconds: e
	};
}
function fa(e, t) {
	return Lt(jn, e, pa(e, t));
}
function pa(e, t) {
	return Lt(Fn, e, { calendar: t });
}
function ma(e) {
	return Lt(jn, e);
}
function ha(e) {
	return Lt(ni, e, { sign: Bo(e) });
}
function ga(e) {
	return t = e.epochNanoseconds, Number(Qt(t, Tn));
	var t;
}
function _a(e) {
	return e.epochNanoseconds;
}
function va(e, t, n) {
	let r = Yo(t), [i, a] = ((e, t) => {
		let n = t((e = bi(e, "unit")).relativeTo), r = Li(e);
		return r = fi("unit", r), [r, n];
	})(n, e);
	if (!a && jo(Math.max(i, r), a)) return ba(t, i);
	if (a || L("Missing relativeTo"), !t.sign && jo(i, a)) return 0;
	let o = To(a), s = o.G(o.i, t);
	Oo(o, s);
	let c = o.re(o.i, s, i);
	return jo(i, a) ? ba(c, i) : ya(c, o.V(s), i, o);
}
function ya(e, t, n, r) {
	let i = Bo(e) || 1, a = xa(di(n, e), n, i, r, t), o = a.ae, s = a.de, c = Number(s - o), l = Number(t - o);
	return a.ye[ni[n]] + l / c * i;
}
function ba(e, t) {
	return An(Uo(e), Cn[t]);
}
function xa(e, t, n, r, i) {
	let a = ni[t], o = e, s = 0, c = Sa(o, a, n, r);
	return i && !((e, t, n, r) => r > 0 ? Zt(t, e) <= 0 && Zt(e, n) <= 0 : Zt(n, e) <= 0 && Zt(e, t) <= 0)(i, c.ae, c.de, Math.sign(n)) && (o = {
		...e,
		[a]: e[a] + n
	}, s = 1, c = Sa(o, a, n, r)), {
		...c,
		ye: o,
		He: s
	};
}
function Sa(e, t, n, r) {
	let i = {
		...e,
		[t]: e[t] + n
	};
	return {
		ae: Eo(r, e),
		de: Eo(r, i),
		Ae: i
	};
}
function Ca(e, t, n) {
	let r = n - t, i = e - t;
	if (!i) return 0;
	let a = i < 0n ? -i : i, o = r < 0n ? -r : r, s = Zt(i, 0n) === Zt(r, 0n) ? 1 : -1;
	return Zt(a, o) <= 0 ? a === o ? s : an(Zt(2n * a, o), s) : Number(i) / Number(r);
}
function wa(e, t, n, r) {
	let { epochNanoseconds: i } = e, { timeZone: a, calendar: o } = e;
	if (t === 0 && n === 1) return {
		epochNanoseconds: i,
		timeZone: a,
		calendar: o
	};
	if (t === 6) {
		let t = Zi(Ua(e), ar), n = Zi(to(t, 1), ar), o = qa(a, t), s = qa(a, n);
		i = Ra(Ca(i, o, s), r) ? s : o;
	} else {
		let o = Ua(e), s = o.offsetNanoseconds;
		i = Ga(a, Da(o, Aa(t, n), r), s, 2, 0, 1);
	}
	return {
		epochNanoseconds: i,
		timeZone: a,
		calendar: o
	};
}
function Ta(e) {
	let { timeZone: t } = e, n = Zi(Ua(e), ar), r = Zi(to(n, 1), ar), i = qa(t, n);
	return An(qa(t, r) - i, xn);
}
function Ea(e) {
	let { timeZone: t, calendar: n } = e;
	return da(qa(t, Zi(Ua(e), ar)), t, n);
}
function Da(e, t, n) {
	let [r, i] = Oa(e, t, n), a = Zi(to(e, i), r);
	return oa(a), a;
}
function Oa(e, t, n) {
	return pr(La(lr(e), t, n));
}
function ka(e) {
	return La(e, bn, 7);
}
function Aa(e, t) {
	return Cn[e] * t;
}
function ja(e, t) {
	return BigInt(Cn[e]) * BigInt(t);
}
function Ma(e, t, n) {
	let r = Math.min(Yo(e), 6);
	return Ko(Pa(Uo(e), BigInt(t), n), r);
}
function Na(e, t, n, r, i, a, o) {
	if (r === 0 && i === 1) return e;
	let s = Bo(e) || 1, [c, l, u] = (jo(r, o.i) ? Do(o.i) && r < 6 && n >= 6 ? Ba : za : Va)(s, e, t, n, r, i, a, o);
	return u && r !== 7 && (c = ((e, t, n, r, i, a) => {
		for (let o = r + 1; o <= n; o++) {
			if (o === 7 && n !== 7) continue;
			let r = di(o, e);
			r[ni[o]] += i;
			let s = Zt(t, Eo(a, r));
			if (s && s !== i) break;
			e = r;
		}
		return e;
	})(c, l, n, Math.max(6, r), s, o)), c;
}
function Pa(e, t, n) {
	return Ia(e, t, n, e / t % 2n);
}
function Fa(e, t, n) {
	let [r, i] = $t(e, kn), a = r * kn;
	return a + Ia(i, t, n, (a / t + i / t) % 2n);
}
function Ia(e, t, n, r) {
	let i = e / t, a = e % t, o = 0;
	a && (o = an(Zt(2n * (a < 0n ? -a : a), t), Math.sign(Number(a))));
	let s = Ra(Number(r) + o, n);
	return (i - r + BigInt(s)) * t;
}
function La(e, t, n) {
	return Ra(e / t, n) * t;
}
function Ra(e, t) {
	return ki[t](e);
}
function za(e, t, n, r, i, a, o) {
	let s = Uo(t), c = Pa(s, ja(i, a), o), l = c - s, u = Math.sign(Number(c / kn) - Number(s / kn)) === e, d = Ko(c, Math.min(r, 6));
	return [
		{
			...t,
			...d
		},
		n + l,
		u
	];
}
function Ba(e, t, n, r, i, a, o, s) {
	let c = Number(Wo(t)), l = Aa(i, a), u = La(c, l, o), d = xa({
		...t,
		...ui
	}, 6, e, s, n), f = d.ae, p = d.de, m = u - Number(p - f), h = 0;
	m && Math.sign(m) !== e ? n = f + BigInt(u) : (h += e, u = La(m, l, o), n = p + BigInt(u));
	let g = qo(u);
	return [
		{
			...t,
			...g,
			days: t.days + h
		},
		n,
		!!h
	];
}
function Va(e, t, n, r, i, a, o, s) {
	let c = ni[i], l = di(i, t);
	i === 7 && (t = {
		...t,
		weeks: t.weeks + Math.trunc(t.days / 7)
	}), l[c] = nn(t[c], a) * a;
	let u = xa(l, i, a * e, s, n), d = u.ae, f = u.de, p = Ca(n, d, f), m = u.ye[c], h = u.Ae[c], g = La(m + p * e * a, a, o), _ = g === h;
	return l[c] = g, [
		l,
		_ ? f : d,
		u.He || _
	];
}
function Ha(e, t) {
	return e.timeZone.U(e.epochNanoseconds, ((e) => {
		let t = Gi(bi(e, "direction"), 0);
		return t || L(ft("direction", t)), t;
	})(t));
}
var Ua = /*@__PURE__*/ At(Wa, WeakMap);
function Wa(e) {
	let { epochNanoseconds: t, timeZone: n } = e, r = n.C(t);
	return {
		...Cr(t + BigInt(r)),
		offsetNanoseconds: r
	};
}
function Ga(e, t, n, r = 0, i = 0, a, o) {
	if (n !== void 0 && r === 1 && (r === 1 || o)) return la(t, n);
	r !== 2 && r !== 0 || aa(t, 0);
	let s = e.R(t);
	if (n !== void 0 && r !== 3) {
		let e = ((e, t, n, r) => {
			let i = _r(t);
			r && (n = ka(n));
			for (let t of e) {
				let e = Number(i - t);
				if (r && (e = ka(e)), e === n) return t;
			}
		})(s, t, n, a);
		if (e !== void 0) return e;
		r === 0 && L("Invalid TimeZone offset");
	}
	return o ? _r(t) : Ka(e, t, i, s);
}
function Ka(e, t, n = 0, r = e.R(t)) {
	if (r.length === 1) return r[0];
	if (n === 1 && L("Ambiguous offset"), r.length) return r[+(n === 3)];
	let i = _r(t), a = ((e, t) => {
		let n = e.C(t - kn);
		return ((e) => (e > 864e11 && L("Out-of-bounds TimeZone gap"), e))(e.C(t + kn) - n);
	})(e, i), o = Cr(i + BigInt(a * (n === 2 ? -1 : 1)));
	return (r = e.R(o))[n === 2 ? 0 : r.length - 1];
}
function qa(e, t) {
	let n = e.R(t);
	if (n.length) return n[0];
	let r = _r(t) - kn;
	return e.U(r, 1);
}
function Ja(e, t, n, r, i) {
	let a = Qi(i);
	return r.sign && Yo(r) < 8 && L("Cannot use small units"), $a(t, no(t, aa($a(t, n)), e ? zo(r) : r, a));
}
function Ya(e, t) {
	return ca(e + (Jo(n = t) && L("Cannot use large units"), Wo(n)));
	var n;
}
function Xa(e, t, n) {
	let { calendar: r, epochNanoseconds: i, timeZone: a } = e, o = Wo(t), s = i;
	if (Jo(t)) {
		let i = Ua(e);
		s = Ka(a, Zi(Qa(r, i, {
			...t,
			...ui
		}, n), i)) + o;
	} else s += o, Qi(n);
	return {
		...e,
		epochNanoseconds: ca(s)
	};
}
function Za(e, t, n, r) {
	let [i, a] = eo(t, n), o = Zi(Qa(e, t, {
		...n,
		...ui,
		days: n.days + a
	}, r), i);
	return oa(o), o;
}
function Qa(e, t, n, r) {
	if (n.years || n.months || n.weeks) return no(e, t, n, Qi(r));
	Qi(r);
	let i = n.days + Number(Wo(n) / kn);
	return i ? aa(to(t, i)) : t;
}
function $a(e, t) {
	return to(t, 1 - Hr(e, t).day);
}
function eo(e, t) {
	let n = Wo(t), r = Number(n / kn), i = Number(n % kn), [a, o] = pr(lr(e) + i);
	return [a, r + o];
}
function to(e, t) {
	return t ? wr(xr(e) + t) : e;
}
function no(e, t, n, r) {
	let { years: i, months: a, weeks: o, days: s } = n, c;
	if (s += Number(Wo(n) / kn), i || a) c = ro(e, t, i, a, r);
	else {
		if (!o && !s) return t;
		c = t;
	}
	return (o || s) && (c = to(c, 7 * o + s)), aa(c);
}
function ro(e, t, n, r, i) {
	let { year: a, month: o, day: s } = Hr(e, t);
	if (n) {
		let [t, r] = Ur(e, a, o);
		a += n, o = io(e, t, r, e ? e.q(a) : void 0, i), o = kt("month", o, 1, Kr(e, a), i);
	}
	if (r) {
		let t = e ? e.N(a, o, r) : jr(a, o, r);
		({year: a, month: o} = t);
	}
	return s = kt("day", s, 1, qr(e, a, o), i), Gr(e, a, o, s);
}
function io(e, t, n, r, i) {
	if (n) {
		let n = e ? e.m : void 0;
		return r !== void 0 && (n < 0 || r === t + 1) ? r : (i === 1 && L(yt), n < 0 ? -n : t);
	}
	return mn(t, 0, r);
}
function ao(e, t) {
	return un(e) !== un(t) && L("Mismatching Calendars"), e;
}
function oo(e, t) {
	return e.o !== t.o && L("Mismatching TimeZones"), e;
}
function so(e) {
	return e.timeZone.id;
}
function co(e, t, n, r) {
	let [i, a, o, s] = Yi(e, r, 3, 5), c = So(t.epochNanoseconds, n.epochNanoseconds, i, a, o, s);
	return ha(e ? zo(c) : c);
}
function lo(e, t, n, r, i) {
	let [a, o, s, c] = Yi(e, i, 5), l = n.epochNanoseconds, u = r.epochNanoseconds, d;
	return Zt(u, l) ? a < 6 ? d = So(l, u, a, o, s, c) : (d = go(oo(n.timeZone, r.timeZone), t, n, r, a), d = Na(d, u, a, o, s, c, wo(n, _a, Xa))) : d = li, ha(e ? zo(d) : d);
}
function uo(e, t, n, r, i) {
	let [a, o, s, c] = Yi(e, i, 6), l = _r(n), u = _r(r), d = Zt(u, l), f;
	return d ? a <= 6 ? f = So(l, u, a, o, s, c) : (f = vo(t, n, r, d, a), f = Na(f, u, a, o, s, c, wo(n, _r, Bt(Za, t)))) : f = li, ha(e ? zo(f) : f);
}
function fo(e, t, n, r, i) {
	let [a, o, s, c] = Yi(e, i, 6, 9, 6);
	return mo(e, t, n, r, a, o, s, c);
}
function po(e, t, n, r, i) {
	let [a, o, s, c] = Yi(e, i, 9, 9, 8), l = $a(t, n), u = $a(t, r);
	return bo(l, u) ? mo(e, t, aa(l), aa(u), a, o, s, c, 8) : ha(li);
}
function mo(e, t, n, r, i, a, o, s, c = 6) {
	let l = yr(n), u = yr(r), d;
	return Zt(u, l) ? i === 6 ? d = So(l, u, i, a, o, s) : (d = yo(t, n, r, i), a === c && o === 1 || (d = Na(d, u, i, a, o, s, wo(n, yr, Bt(Qa, t))))) : d = li, ha(e ? zo(d) : d);
}
function ho(e, t, n, r) {
	let [i, a, o, s] = Yi(e, r, 5, 5), c = La(lr(n) - lr(t), Aa(a, o), s), l = {
		...li,
		...qo(c, i)
	};
	return ha(e ? zo(l) : l);
}
function go(e, t, n, r, i) {
	let a = Zt(r.epochNanoseconds, n.epochNanoseconds);
	if (!a) return li;
	if (i < 6) return {
		...li,
		...Ko(r.epochNanoseconds - n.epochNanoseconds, i)
	};
	if (!bo(Ua(n), Ua(r))) return {
		...li,
		...Ko(r.epochNanoseconds - n.epochNanoseconds, 5)
	};
	let [o, s, c] = xo(e, n, r, a);
	return {
		...i === 6 ? {
			...li,
			days: Co(o, s)
		} : yo(t, o, s, i),
		...qo(c)
	};
}
function _o(e, t, n, r) {
	let i = _r(t), a = _r(n), o = Zt(a, i);
	return o ? r <= 6 ? {
		...li,
		...Ko(a - i, r)
	} : vo(e, t, n, o, r) : li;
}
function vo(e, t, n, r, i) {
	let a = n, o = lr(n) - lr(t);
	return Math.sign(o) === -r && (a = to(n, -r), o += 864e11 * r), {
		...yo(e, t, a, i),
		...qo(o)
	};
}
function yo(e, t, n, r) {
	if (r <= 7) {
		let e = Co(t, n);
		return r === 7 ? {
			...li,
			weeks: nn(e, 7),
			days: rn(e, 7)
		} : {
			...li,
			days: e
		};
	}
	let i = Hr(e, t), a = Hr(e, n);
	if (r === 8) {
		let { year: r, month: o, day: s } = i, { year: c, month: l, day: u } = a, d = Math.sign(Xt(c, r) || Xt(l, o) || Co(t, n)), f = 0, p = 0;
		if (d) {
			f = e ? e.ne(r, o, c, l) : Mr(r, o, c, l);
			let i = ro(e, t, 0, f, 0);
			d * Xt(s, u) > 0 && (f -= d, i = ro(e, t, 0, f, 0)), p = Co(i, n);
		}
		return {
			...li,
			months: f,
			days: p
		};
	}
	let { year: o, month: s, day: c } = i, { year: l, month: u, day: d } = a, f = l - o, p = u - s, m = d - c;
	if (f || p) {
		let t = Math.sign(f || p), n = qr(e, l, u), r = 0;
		if (Math.sign(d - c) === -t) {
			let i = n, a = e ? e.N(l, u, -t) : jr(l, u, -t);
			({year: l, month: u} = a), f = l - o, p = u - s, n = qr(e, l, u), r = t < 0 ? -i : n;
		}
		if (m = d - Math.min(c, n) + r, f) {
			let [n, r] = Ur(e, o, s), [i, a] = Ur(e, l, u), c = e ? e.m : void 0;
			if (p = c !== void 0 && r && !a && (c < 0 ? t > 0 && i === -c : t < 0 && i === n) ? 0 : i - n || Number(a) - Number(r), Math.sign(p) === -t) {
				let i = t < 0 && -Kr(e, l);
				l -= t, f = l - o, p = u - io(e, n, r, e ? e.q(l) : void 0, 0) + (i || Kr(e, l));
			} else if (e) {
				let t = io(e, n, r, e.q(l), 0);
				p = e.ne(l, t, l, u);
			}
		}
	}
	return {
		...li,
		years: f,
		months: p,
		days: m
	};
}
function bo(e, t) {
	return Xt(e.year, t.year) || Xt(e.month, t.month) || Xt(e.day, t.day);
}
function xo(e, t, n, r) {
	let i = Ua(t), a = Ua(n), o = n.epochNanoseconds, s = 0, c = lr(a) - lr(i);
	Math.sign(c) === -r && s++;
	let l = s + +(r > 0);
	for (; s <= l; s++) {
		let t = to(a, s * -r), n = Ka(e, Zi(t, i));
		if (Zt(o, n) !== -r) return [
			i,
			t,
			Number(o - n)
		];
	}
}
function So(e, t, n, r, i, a) {
	return {
		...li,
		...Ko(Pa(t - e, ja(r, i), a), n)
	};
}
function Co(e, t) {
	return xr(t) - xr(e);
}
function wo(e, t, n) {
	return {
		i: e,
		V: t,
		G: n
	};
}
function To(e) {
	let { calendar: t } = e;
	if (Do(e)) {
		let { timeZone: n } = e;
		return {
			i: e,
			V: _a,
			G: Xa,
			re: Bt(go, n, t)
		};
	}
	return {
		i: ko(e),
		V: _r,
		G: Bt(Za, t),
		re: Bt(_o, t)
	};
}
function Eo(e, t) {
	return e.V(e.G(e.i, t));
}
function Do(e) {
	return "timeZone" in e;
}
function Oo(e, t) {
	Do(e.i) || (Ao(e.i), Ao(t));
}
function ko(e) {
	return Zi(e, "hour" in e ? e : ar);
}
function Ao(e) {
	oa(ko(e));
}
function jo(e, t) {
	return e <= 6 - (t && Do(t) ? 1 : 0);
}
function Mo(e, t, n) {
	let r = {};
	for (let i = t; i >= 0; i--) {
		let t = Cn[i];
		r[n[i]] = nn(e, t), e = rn(e, t);
	}
	return r;
}
var No = 2 ** 53;
function Po(e, t, n, r, i) {
	let a = e(it(i).relativeTo), o = Math.max(Yo(n), Yo(r));
	if (jo(o, a)) return Fo(t, n, r, o);
	a || L("Missing relativeTo"), t && (r = zo(r));
	let s = To(a), c = s.G(s.i, n), l = s.G(c, r);
	return ha(s.re(s.i, l, o));
}
function Fo(e, t, n, r) {
	return ha(Vo(((e, t, n, r) => {
		let i = Uo(e) + Uo(t) * BigInt(r ? -1 : 1);
		return Number.isFinite(Number(i / kn)) || L("Out-of-bounds date"), {
			...li,
			...Ko(i, n)
		};
	})(t, n, r, e)));
}
function Io(e, t, n) {
	let r = Yo(t), [i, a, o, s, c] = ((e, t, n) => {
		e = bi(e, xi);
		let r = Ii(e), i = n(e.relativeTo), a = ji(e), o = Wi(e, 7), s = Fi(e);
		return r === void 0 && s === void 0 && L("Required smallestUnit or largestUnit"), s ??= 0, r ??= Math.max(s, t), Ji(r, s), a = Ki(a, s, 1), a > 1 && s > 5 && r !== s && L("For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit"), [
			r,
			s,
			a,
			o,
			i
		];
	})(n, r, e);
	if (!c && Math.max(r, i) <= 6) return ha(Vo(((e, t, n, r, i) => {
		let a = Pa(Uo(e), ja(n, r), i);
		return {
			...li,
			...Ko(a, t)
		};
	})(t, i, a, o, s)));
	let l = c && Do(c) && i >= 6 && a < 6;
	if (!t.sign && !l) return t;
	c || L("Missing relativeTo");
	let u = To(c), d = u.G(u.i, t);
	Oo(u, d);
	let f = u.re(u.i, d, i);
	return f = Na(f, u.V(d), i, a, o, s, u), ha(f);
}
function Lo(e) {
	return e.sign === -1 ? Ro(e) : e;
}
function Ro(e) {
	return ha(zo(e));
}
function zo(e) {
	let t = {};
	for (let n of ni) t[n] = -1 * e[n] || 0;
	return t;
}
function Bo(e, t = ni) {
	let n = 0;
	for (let r of t) {
		let t = Math.sign(e[r]);
		t && (n && n !== t && L("Cannot mix duration signs"), n = t);
	}
	return n;
}
function Vo(e) {
	for (let t of si) kt(t, e[t], -4294967295, 4294967295, 1);
	let t = Uo(e);
	return Ho(Number(t / En)), e;
}
function Ho(e) {
	Number.isSafeInteger(e) || L("Out-of-bounds duration");
}
function Uo(e) {
	return BigInt(e.days) * kn + Wo(e);
}
function Wo(e) {
	return BigInt(e.hours) * On + BigInt(e.minutes) * Dn + Go(e);
}
function Go(e) {
	return BigInt(e.seconds) * En + BigInt(e.milliseconds) * Tn + BigInt(e.microseconds) * wn + BigInt(e.nanoseconds);
}
function Ko(e, t = 6) {
	let n = Number(e / kn), r = Number(e % kn), i = Cn[t], a = t <= 3 ? Number(e / BigInt(i)) : Sn / i * n + nn(r, i);
	Number.isFinite(a) || L("Out-of-bounds date"), t <= 3 && Math.abs(a) / (yn / Cn[t]) >= No && L("Out-of-bounds date");
	let o = Mo(r, t, ni);
	return o[ni[t]] = a, o;
}
function qo(e, t = 5) {
	return Mo(e, t, ni);
}
function Jo(e) {
	return !!Bo(e, oi);
}
function Yo(e) {
	let t = 9;
	for (; t > 0 && !e[ni[t]]; t--);
	return t;
}
function Xo(e, t) {
	return Zt(e.epochNanoseconds, t.epochNanoseconds);
}
function Zo(e, t) {
	return Zt(e.epochNanoseconds, t.epochNanoseconds);
}
function Qo(e, t, n, r) {
	let i = e(it(r).relativeTo), a = Math.max(Yo(t), Yo(n));
	if (Rt(ni, t, n)) return 0;
	if (jo(a, i)) return Zt(Uo(t), Uo(n));
	i || L("Missing relativeTo");
	let o = To(i);
	return Zt(Eo(o, t), Eo(o, n));
}
function $o(e, t) {
	return es(e, t) || ts(e, t);
}
function es(e, t) {
	return Xt(xr(e), xr(t));
}
function ts(e, t) {
	return Xt(lr(e), lr(t));
}
function ns(e, t) {
	return !Xo(e, t);
}
function rs(e, t) {
	return !Zo(e, t) && e.timeZone.o === t.timeZone.o && e.calendar === t.calendar;
}
function is(e, t) {
	return !$o(e, t) && e.calendar === t.calendar;
}
function as(e, t) {
	return !es(e, t) && e.calendar === t.calendar;
}
function os(e, t) {
	return !es(e, t) && e.calendar === t.calendar;
}
function ss(e, t) {
	return !es(e, t) && e.calendar === t.calendar;
}
function cs(e, t) {
	return !ts(e, t);
}
function ls(e) {
	return e === 0 ? cn : e ? e.l : void 0;
}
function us(e, t, n = t) {
	return ls(e) ? n : t;
}
function ds(e, t) {
	let n = e || void 0, r = ls(e), { era: i, eraYear: a, year: o } = t;
	if (o !== void 0 && (o = ot(o, "year")), a !== void 0 && (a = ot(a, "eraYear")), i !== void 0 || a !== void 0) {
		i !== void 0 && a !== void 0 || Dt("Mismatching era/eraYear"), r || L("Forbidden era/eraYear");
		let e = ln(i), t = r[e];
		t === void 0 && L(((e) => `Invalid era: ${e}`)(i));
		let s = n?.te ? n.te(a, e, t) : ms(a, t);
		o !== void 0 && o !== s && L("Mismatching year/eraYear"), o = s;
	} else o === void 0 && Dt(vt(r));
	return o;
}
function fs(e, t, n, r, i) {
	let { month: a, monthCode: o } = t;
	if (o !== void 0) {
		let t = ((e, t, n, r, i = fn(t)) => {
			let a = e ? e.q(n) : void 0, [o, s] = i, c = mn(o, s, a);
			if (s) {
				let t = e ? e.m : void 0;
				t === void 0 && L(yt), t > 0 ? (c > t && L(yt), a !== c && (r === 1 && L(yt), c = mn(o, 0, a))) : (c !== -t && L(yt), a === void 0 && r === 1 && L(yt));
			}
			return c;
		})(e, o, n, r, i);
		a !== void 0 && a !== t && L("Mismatching month/monthCode"), a = t, r = 1;
	} else a === void 0 && Dt("Missing month/monthCode");
	return kt("month", a, 1, Kr(e, n), r);
}
function ps(e, t, n, r, i) {
	return Ot(t, "day", 1, qr(e, r, n), i);
}
function ms(e, t) {
	return (t + e) * (Math.sign(t) || 1) || 0;
}
function hs(e, t) {
	return cr(Lt(jn, {
		...ar,
		...e
	}), t);
}
var gs = /*@__PURE__*/ Wt("([+-])(\\d{2})(?::?(\\d{2})(?::?(\\d{2})(?:[.,](\\d{1,9}))?)?)?");
function _s(e) {
	let t = vs(e);
	return t === void 0 && L(Ct(e)), t;
}
function vs(e, t) {
	let n = gs.exec(e);
	if (n && ((e) => ((e) => {
		e[0] !== "T" && e[0] !== "t" || (e = e.slice(1));
		let t = e.search(/[.,]/), n = t < 0 ? e : e.slice(0, t), r = n.split(":");
		return r.length === 1 ? /^(?:\d{2}|\d{4}|\d{6})$/i.test(n) : (r.length === 2 || r.length === 3) && r.every((e) => e.length === 2 && /^\d{2}$/i.test(e));
	})(e.slice(1)))(n[0])) return ((e, t) => {
		let n = e[4] || e[5];
		return t && n && L(wt(n)), r = (qt(e[2]) * xn + qt(e[3]) * bn + qt(e[4]) * yn + Gt(e[5] || "")) * Kt(e[1]), Math.abs(r) >= 864e11 && L("Out-of-bounds offset"), r;
		var r;
	})(n, t);
}
var ys = {
	era: _i,
	month: st,
	monthCode(e, t = "monthCode") {
		return ((e, t) => {
			if (typeof e == "string") return e;
			if (e && typeof e == "object") {
				let n = e.toString;
				if (typeof n == "function") return pi(n.call(e), t);
			}
			return pi(e, t);
		})(e, t);
	},
	day: st
}, bs = /*@__PURE__*/ Ft(jn, ot), xs = /*@__PURE__*/ Ft(ni, yi), Ss = { offset(e) {
	return _s(_i(e));
} }, Cs = /*@__PURE__*/ Object.assign({}, ys, bs), ws = /*@__PURE__*/ Object.assign({}, Cs, Ss);
function Ts(e, t, n, r, i = !r) {
	let a = {}, o = 0;
	for (let i of t) {
		let t = e[i];
		if (t !== void 0) {
			o = 1;
			let e = n[i];
			e && (t = e(t, i)), a[i] = t;
		} else r && r.includes(i) && Dt(pt(i));
	}
	return i && !o && Dt(mt(t)), a;
}
function Es(e, t = ar, n) {
	let r = Zi(e, t);
	return oa(r), fa(r, n);
}
function Ds(e, t, n) {
	return ks(e, t, js(e, t), Qi(n));
}
function Os(e, t, n) {
	let r = js(e, t), i = n();
	return [ks(e, t, r, i[0]), ...i];
}
function ks(e, t, n, r) {
	let i = n[1], a = fs(e, t, i, r, n[0]);
	return pa(aa(Gr(e, i, a, ps(e, t, a, i, r))), e);
}
function As(e) {
	if (e.monthCode !== void 0) return fn(e.monthCode);
}
function js(e, t) {
	let n = ls(e);
	return t.year !== void 0 || t.era !== void 0 && t.eraYear !== void 0 || Dt(vt(n)), t.monthCode === void 0 && t.month === void 0 && Dt("Missing month/monthCode"), t.day === void 0 && Dt(pt("day")), [As(t), ds(e, t)];
}
function Ms(e, t, n) {
	let r = ls(e);
	t.year !== void 0 || t.era !== void 0 && t.eraYear !== void 0 || Dt(vt(r)), t.monthCode === void 0 && t.month === void 0 && Dt("Missing month/monthCode");
	let i = As(t), a = ds(e, t);
	return pa(ia(Gr(e, a, fs(e, t, a, Qi(n), i), 1)), e);
}
function Ns(e, t, n) {
	let r = e === void 0, i = ls(e);
	t.day === void 0 && Dt(pt("day")), r || t.month === void 0 || t.year !== void 0 || t.era !== void 0 && t.eraYear !== void 0 || Dt(vt(i));
	let a = As(t), o = t.eraYear !== void 0 || t.year !== void 0 ? ds(e, t) : void 0, s = Qi(n), c, l, u;
	if (o === void 0 && r && (o = 1972), o !== void 0) {
		r || aa(Gr(e, o, 1, 1));
		let n = fs(e, t, o, s, a);
		c = ps(e, t, n, o, s), [l, u] = Ur(e, o, n);
	} else {
		t.monthCode === void 0 && Dt("Missing month/monthCode"), [l, u] = a;
		let n = e ? e.ge : 1972;
		if (n !== void 0) c = ps(e, t, fs(e, t, n, s, a), n, s);
		else {
			let n = s === 0 && e ? e.ke?.(l, u, t.day) : void 0;
			c = n === void 0 ? t.day : n;
		}
	}
	u && ((e && e.Z?.[l]) ?? Infinity) < t.day && (s === 1 && L(yt), u = 0, c = Tt(t.day, 1, (e && e.X) ?? Infinity));
	let d = e ? e.v(l, !!u, c) : Er(l, !!u);
	for (; !d && s === 0 && c > 1;) c--, d = e ? e.v(l, !!u, c) : Er(l, !!u);
	d || L("Cannot guess year");
	let { year: f, month: p } = d;
	return pa(aa(Gr(e, f, p, c)), e);
}
var Ps = Intl.DateTimeFormat;
function Fs(e, t) {
	t < -864e13 && L("Out-of-bounds date");
	let n = e.formatToParts(t), r = {};
	for (let e of n) r[e.type] = e.value;
	return r;
}
var Is = {
	El_Aaiun: 17,
	Tucuman: 12,
	Tirane: 11,
	Riga: 10,
	Simferopol: 9,
	Vienna: 9,
	Tunis: 8,
	Boa_Vista: 6,
	Fortaleza: 6,
	Maceio: 6,
	Noronha: 6,
	Recife: 6,
	Gaza: 6,
	Hebron: 6,
	DeNoronha: 6
}, Ls = -388152e4;
function Rs(e, t = 4) {
	let n = Mi(e);
	return [Wi(e, 4), ...Vs(qi(xi, Fi(e), 0, t), n)];
}
function zs(e) {
	return Vi(it(e));
}
function Bs(e, t) {
	return Rs(it(e), t);
}
function Vs(e, t) {
	return e == null ? [t === void 0 ? 1 : 10 ** (9 - t), t] : [Cn[e], e < 4 ? 9 - 3 * e : -1];
}
function Hs(e, t, n) {
	let [r, i, a, o] = ((e) => {
		let t = Mi(e = it(e)), n = Wi(e, 4), r = Fi(e);
		return [
			e.timeZone,
			n,
			...Vs(qi(xi, r, 0, 4), t)
		];
	})(n), s = r !== void 0;
	return ((e, t, n, r, i, a) => {
		n = Fa(n, BigInt(i), r);
		let o = t.C(n);
		return ec(Cr(n + BigInt(o)), a) + (e ? ac(ka(o)) : "Z");
	})(s, yc(s ? e(r) : "UTC"), t.epochNanoseconds, i, a, o);
}
function Us(e, t) {
	let n = ((e) => {
		e = it(e);
		let t = Vi(e), n = Mi(e), r = Ui(e), i = Wi(e, 4), a = Fi(e);
		return [
			t,
			Hi(e),
			r,
			i,
			...Vs(qi(xi, a, 0, 4), n)
		];
	})(t);
	return ((e, t, n, r, i, a, o, s, c, l) => {
		r = Fa(r, BigInt(c), s);
		let u = n.C(r);
		return ec(Cr(r + BigInt(u)), l) + ac(ka(u), o) + oc(t, a) + sc(e, i);
	})(e.calendar, e.timeZone.id, e.timeZone, e.epochNanoseconds, ...n);
}
function Ws(e, t) {
	let n = ((e) => (e = it(e), [Vi(e), ...Rs(e)]))(t);
	return ((e, t, n, r, i, a) => ec(Da(t, i, r), a) + sc(e, n))(e.calendar, e, ...n);
}
function Gs(e, t) {
	return n = e.calendar, r = e, i = zs(t), tc(r) + sc(n, i);
	var n, r, i;
}
function Ks(e, t) {
	return Js(e.calendar, nc, e, zs(t));
}
function qs(e, t) {
	return Js(e.calendar, rc, e, zs(t));
}
function Js(e, t, n, r) {
	return r === 1 ? e === void 0 ? t(n) : tc(n) : r > 1 || r === 0 && e !== void 0 ? tc(n) + cc(un(e), r === 2) : t(n);
}
function Ys(e, t) {
	return ((e, t, n, r) => ic(Oa(e, n, t)[0], r))(e, ...Bs(t));
}
function Xs(e, t) {
	let [n, r, i] = Bs(t, 3);
	return r > 1 && Vo(e = {
		...e,
		...Ma(e, r, n)
	}), Zs(e, i);
}
function Zs(e, t) {
	let { sign: n } = e, r = n === -1 ? zo(e) : e, { hours: i, minutes: a } = r, o = Go(r), s = Number(o / En), c = Number(o % En);
	Ho(s);
	let l = uc(c, t), u = t >= 0 || !n || l;
	return (n < 0 ? "-" : "") + "P" + Qs({
		Y: $s(r.years),
		M: $s(r.months),
		W: $s(r.weeks),
		D: $s(r.days)
	}) + (i || a || s || u ? "T" + Qs({
		H: $s(i),
		M: $s(a),
		S: $s(s, u) + l
	}) : "");
}
function Qs(e) {
	let t = [];
	for (let n in e) {
		let r = e[n];
		r && t.push(r, n);
	}
	return t.join("");
}
function $s(e, t) {
	if (!e && !t) return "";
	let n = Object.create(null);
	return n.useGrouping = 0, e.toLocaleString("fullwide", n);
}
function ec(e, t) {
	return tc(e) + "T" + ic(e, t);
}
function tc(e) {
	return nc(e) + "-" + Yt(e.day);
}
function nc(e) {
	let { year: t } = e;
	return (t < 0 || t > 9999 ? dc(t) + Jt(6, Math.abs(t)) : Jt(4, t)) + "-" + Yt(e.month);
}
function rc(e) {
	return Yt(e.month) + "-" + Yt(e.day);
}
function ic(e, t) {
	let n = [Yt(e.hour), Yt(e.minute)];
	return t !== -1 && n.push(Yt(e.second) + ((e, t, n, r) => uc(e * vn + t * _n + n, r))(e.millisecond, e.microsecond, e.nanosecond, t)), n.join(":");
}
function ac(e, t = 0) {
	if (t === 1) return "";
	let [n, r] = en(Math.abs(e), xn), [i, a] = en(r, bn), [o, s] = en(a, yn);
	return dc(e) + Yt(n) + ":" + Yt(i) + (o || s ? ":" + Yt(o) + uc(s) : "");
}
function oc(e, t) {
	return t === 1 ? "" : "[" + (t === 2 ? "!" : "") + e + "]";
}
function sc(e, t) {
	return t > 1 || t === 0 && e !== void 0 ? cc(un(e), t === 2) : "";
}
function cc(e, t) {
	return "[" + (t ? "!" : "") + "u-ca=" + e + "]";
}
var lc = /0+$/;
function uc(e, t) {
	let n = Jt(9, e);
	return n = t === void 0 ? n.replace(lc, "") : n.slice(0, t), n ? "." + n : "";
}
function dc(e) {
	return e < 0 ? "-" : "+";
}
var fc = /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/, pc = /[^\w\/:+-]+/;
function mc(e) {
	return hc(pi(e));
}
function hc(e) {
	return gc(e).id;
}
function gc(e) {
	let t = e.toUpperCase(), n = ((e) => {
		let t = vs(e, 1);
		if (t !== void 0) return {
			id: ac(t),
			_: t,
			o: t
		};
	})(t);
	return n ? {
		kind: "fixed",
		...n
	} : _c(t === "UTC" ? "UTC" : ((e) => (pc.test(e) && L(St(e)), fc.test(e) && L("Forbidden ICU TimeZone"), e.toLowerCase().split("/").map((e, t) => (e.length <= 3 || /\d/.test(e)) && !/etc|yap/.test(e) ? e.toUpperCase() : e.replace(/baja|dumont|[a-z]+/g, (e, n) => e.length <= 2 && !t || e === "in" || e === "chat" ? e.toUpperCase() : e.length > 2 || !n ? Ht(e).replace(/island|noronha|murdo|rivadavia|urville/, Ht) : e)).join("/")))(e));
}
var _c = /*@__PURE__*/ At((e) => {
	if (e === "UTC") return {
		kind: "utc",
		id: e,
		o: e
	};
	let t = vc(e.toUpperCase());
	return {
		kind: "named",
		id: e,
		format: t,
		o: t.resolvedOptions().timeZone
	};
}), vc = /*@__PURE__*/ At((e) => new Ps("en-u-hc-h23", {
	calendar: "iso8601",
	timeZone: e,
	era: "short",
	year: "numeric",
	month: "numeric",
	day: "numeric",
	hour: "numeric",
	minute: "numeric",
	second: "numeric"
}));
function yc(e) {
	let t = gc(e);
	return bc(t.id, t);
}
var bc = /*@__PURE__*/ At((e, t) => t.kind === "named" ? new Sc(e, t.o, t.format) : new xc(e, t.o, t.kind === "fixed" ? t._ : 0)), xc = class {
	constructor(e, t, n) {
		this.id = e, this.o = t, this._ = n;
	}
	C() {
		return this._;
	}
	R(e) {
		return [la(e, this._)];
	}
	U() {}
}, Sc = class {
	constructor(e, t, n) {
		this.id = e, this.o = t, this.qe = ((e, t) => {
			let n = At(e), r = At(wc), i = 86400 * t;
			function a(e) {
				let [t, a] = Tc(e, i), s = Ec(t), c = Ec(a), l = n(s), u = n(c);
				return l === u ? l : o(r(s, c), l, u, e);
			}
			function o(t, n, r, i) {
				let a, o;
				for (; (i === void 0 || (a = i < t[0] ? n : i >= t[1] ? r : void 0) === void 0) && (o = t[1] - t[0]);) {
					let n = t[0] + Math.floor(o / 2);
					e(n) === r ? t[1] = n : t[0] = n + 1;
				}
				return a;
			}
			return {
				Ee(e) {
					let t = a(e - 86400), n = a(e + 86400), r = e - t, i = e - n;
					if (t === n) return [r];
					let o = a(r);
					return o === a(i) ? [e - o] : t > n ? [r, i] : [];
				},
				De: a,
				U: function e(t, a) {
					if (a > 0 && t >= 864e10) return;
					if (a < 0) {
						if (t <= Ls) return;
						let n = Cc() + 94867200;
						if (t > n) return e(n, -1);
					}
					let [s, c] = Tc(a > 0 ? Math.max(t, Ls) : t, i), l = i * a, u = a > 0 ? Math.max(t, Cc()) + 94867200 : Ls, d = () => a < 0 ? c > u : s < u;
					for (; d();) {
						let e = Ec(s), i = Ec(c), u = n(e), d = n(i);
						if (u !== d) {
							let n = r(e, i);
							o(n, u, d);
							let s = n[0];
							if ((Xt(s, t) || 1) === a) return s;
						}
						s += l, c += l;
					}
				}
			};
		})(((e) => (t) => {
			let n = Fs(e, 1e3 * t);
			return 86400 * Sr(((e) => {
				let t = e.relatedYear;
				if (t !== void 0) return parseInt(t);
				let n = parseInt(e.year);
				return e.era !== void 0 && ln(e.era) === "bce" ? 1 - n : n;
			})(n), parseInt(n.month), parseInt(n.day)) + 3600 * parseInt(n.hour) + 60 * parseInt(n.minute) + parseInt(n.second) - t;
		})(n), ((e) => Is[e.split("/").pop()] || 60)(e));
	}
	C(e) {
		return this.qe.De(((e) => gr(e)[0])(e)) * yn;
	}
	R(e) {
		let t = 86400 * xr(e) + dr(e), n = fr(e);
		return this.qe.Ee(t).map((e) => ca(BigInt(e) * En + BigInt(n)));
	}
	U(e, t) {
		let [n, r] = gr(e), i = this.qe.U(n + (t > 0 || r ? 1 : 0), t);
		if (i !== void 0) return BigInt(i) * En;
	}
};
function Cc() {
	return Math.floor(Date.now() / 1e3);
}
function wc(e, t) {
	return [e, t];
}
function Tc(e, t) {
	let n = Math.floor(e / t) * t;
	return [n, n + t];
}
function Ec(e) {
	return Tt(e, -1e10, 864e10);
}
function Dc(e, t, n) {
	let r = Ts(n, us(t, tr, nr), ws, [], 0);
	if (r.timeZone !== void 0) {
		let n = Ds(t, r), i = hs(r), a = yc(e(r.timeZone));
		return {
			epochNanoseconds: Ga(a, Zi(n, i), r.offset),
			timeZone: a,
			calendar: t
		};
	}
	return Ds(t, r);
}
function Oc(e, t, n, r) {
	let i = Ts(n, us(t, tr, nr), ws, Ln, 0), a = e(i.timeZone), [o, s, c, l] = Os(t, i, () => $i(r)), u = hs(i, s), d = yc(a);
	return da(Ga(d, Zi(o, u), i.offset, c, l), d, t);
}
function kc(e, t, n) {
	let r = Ts(t, us(e, Zn, Qn), Cs, [], 0), [i, a] = Os(e, r, () => [Qi(n)]);
	return Es(i, hs(r, a), e);
}
function Ac(e, t, n, r = []) {
	return Ds(e, Ts(t, us(e, Yn, Xn), ys, r), n);
}
function jc(e, t, n, r) {
	return Ms(e, Ts(t, us(e, Wn, Gn), ys, r), n);
}
function Mc(e, t, n, r) {
	let i = Ts(n, us(e, Yn, Xn), ys, Pn, 0);
	return t && i.month !== void 0 && i.monthCode === void 0 && i.year === void 0 && (i.year = 1972), Ns(e, i, r);
}
function Nc(e, t) {
	return hs(Ts(e, Hn, bs, [], 1), Qi(t));
}
function Pc(e) {
	let t = Ts(e, ii, xs);
	return ha(Vo({
		...li,
		...t
	}));
}
function Fc(e) {
	L(Ct(e));
}
function Ic(e) {
	let t = ul(e = _i(e)), n;
	return t || Fc(e), t.F ? n = 0 : t.offset ? n = _s(t.offset) : Fc(e), t.timeZoneId && vs(t.timeZoneId, 1), Rr(t), ua(la(t, n));
}
function Lc(e, t) {
	let n = ul(pi(e));
	return n || Fc(e), n.timeZoneId ? Qc(n, t, void 0) : (n.F && Fc(e), el(n, t));
}
function Rc(e, t, n) {
	let r = ul(pi(e));
	return r && r.timeZoneId || Fc(e), Qc(r, t, n);
}
function zc(e, t) {
	let n = ul(pi(e));
	return n && !n.F || Fc(e), $c(n, t);
}
function Bc(e, t) {
	let n = Yc(Jc(pi(e)), void 0, t);
	return pa(n, n.calendar);
}
function Vc(e, t) {
	let n = dl(pi(e));
	if (n) return Hc(n), pa(ia(zr(n)), t(n.calendarId));
	let r = Yc(Jc(e), Xc, t), { calendar: i } = r;
	return pa($a(i, r), i);
}
function Hc(e) {
	e.calendarId !== "iso8601" && L(wt(e.calendarId));
}
function Uc(e, t) {
	let n = fl(pi(e));
	if (n) return Hc(n), pa(zr(n), t(n.calendarId));
	let r = Yc(Jc(e), Zc, t), { calendar: i } = r, { year: a, month: o, day: s } = Hr(i, r), [c, l] = Ur(i, a, o), { year: u, month: d } = ((e, t, n, r) => {
		let i = e ? e.v(t, n, r) : Er(t, n);
		return i || L("Cannot guess year"), i;
	})(i, c, l, s);
	return pa(aa(Gr(i, u, d, s)), i);
}
function Wc(e) {
	let t = ((e) => {
		let t = pl(e);
		return t ? (gl(t[13]), ml(t, 1)) : void 0;
	})(e = pi(e)), n;
	return t || (t = ul(e), t ? (t.fe || Fc(e), t.F && L(wt("Z")), Hc(t)) : Fc(e)), (n = dl(e)) && Br(n) && Fc(e), (n = fl(e)) && Br(n) && Fc(e), ma(or(t));
}
function Gc(e) {
	let t = ((e) => {
		let t = ll.exec(e);
		return t ? ((e) => {
			let t = 0, n = 0, r = 0, i = {
				years: a(e[2]),
				months: a(e[3]),
				weeks: a(e[4]),
				days: a(e[5]),
				hours: a(e[6], e[7], 5),
				minutes: a(e[8], e[9], 4),
				seconds: a(e[10], e[11], 3),
				...Mo(r, 2, ni)
			};
			return t || L(mt(ni)), Kt(e[1]) < 0 && (i = zo(i)), i;
			function a(e, i, a) {
				let o = 0, s = 0;
				return a && ([o, r] = en(r, Cn[a])), e !== void 0 && (n && L(wt(e)), s = ((e) => {
					let t = parseInt(e);
					return Number.isFinite(t) || L(wt(e)), t;
				})(e), t = 1, i && (r = Gt(i) * (Cn[a] / yn), n = 1)), o + s;
			}
		})(t) : void 0;
	})(pi(e));
	return t || Fc(e), ha(Vo(t));
}
function Kc(e) {
	let t = ul(e) || dl(e) || fl(e);
	if (t) return t.calendarId;
	let n = pl(e);
	return n ? gl(n[13]).calendarId : e;
}
function qc(e) {
	let t = ul(e);
	return t && (t.timeZoneId || t.F && "UTC" || t.offset) || e;
}
function Jc(e) {
	let t = ul(e);
	return t && !t.F || Fc(e), t;
}
function Yc(e, t, n) {
	return t && e.calendarId === "iso8601" ? (zr(e), e.fe && or(e), el(t(e), n)) : e.fe ? $c(e, n) : el(e, n);
}
function Xc(e) {
	let t = 12 * e.year + e.month === ra ? 20 : 1;
	return {
		...e,
		day: t
	};
}
function Zc(e) {
	return {
		...e,
		year: 1972
	};
}
function Qc(e, t, n) {
	let r = yc(hc(e.timeZoneId)), i;
	if (Rr(e), e.fe) {
		let t = e.offset ? _s(e.offset) : void 0, [, o, s] = $i(n);
		i = Ga(r, e, t, o, s, !(r._ || e.offset === void 0 || (a = e.offset, a.replace(/\D/g, "").length > 4)), e.F);
	} else $i(n), i = qa(r, e);
	var a;
	return ca(i), da(i, r, t(e.calendarId));
}
function $c(e, t) {
	return Rr(e), oa(e), {
		...Zi(e, e),
		calendar: t(e.calendarId)
	};
}
function el(e, t) {
	return zr(e), aa(e), {
		calendar: t(e.calendarId),
		year: e.year,
		month: e.month,
		day: e.day
	};
}
function tl(e) {
	return `(\\d{2})(?:(:?)(\\d{2})(?:\\${e}(\\d{2})(?:[.,](\\d{1,9}))?)?)?`;
}
function nl(e) {
	return "([+-])" + tl(e);
}
var rl = "(?:(?:([+-])(\\d{6}))|(\\d{4}))(-?)(\\d{2})\\4(\\d{2})(?:[T ]" + tl(8) + "(Z|" + nl(15) + ")?)?", il = /*@__PURE__*/ Wt("(?:(?:([+-])(\\d{6}))|(\\d{4}))-?(\\d{2})((?:\\[(!?)([^\\]]*)\\]){0,9})"), al = /*@__PURE__*/ Wt("(?:--)?(\\d{2})-?(\\d{2})((?:\\[(!?)([^\\]]*)\\]){0,9})"), ol = /*@__PURE__*/ Wt(rl + "((?:\\[(!?)([^\\]]*)\\]){0,9})"), sl = /*@__PURE__*/ Wt("T?" + tl(2) + `(${nl(9)})?((?:\\[(!?)([^\\]]*)\\]){0,9})`), cl = /*@__PURE__*/ RegExp("\\[(!?)([^\\]]*)\\]", "g"), ll = /*@__PURE__*/ Wt("([+-])?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?:(\\d+)(?:[.,](\\d{1,9}))?H)?(?:(\\d+)(?:[.,](\\d{1,9}))?M)?(?:(\\d+)(?:[.,](\\d{1,9}))?S)?)?");
function ul(e) {
	let t = ol.exec(e);
	return t ? ((e) => {
		let t = e[12], n = (t || "").toUpperCase() === "Z";
		return {
			year: hl(e),
			month: parseInt(e[5]),
			day: parseInt(e[6]),
			...ml(e, 7),
			...gl(e[19]),
			fe: !!e[7],
			F: n,
			offset: n ? void 0 : t
		};
	})(t) : void 0;
}
function dl(e) {
	let t = il.exec(e);
	if (t) return ((e) => ({
		year: hl(e),
		month: parseInt(e[4]),
		day: 1,
		...gl(e[5])
	}))(t);
}
function fl(e) {
	let t = al.exec(e);
	return t ? ((e) => ({
		year: 1972,
		month: parseInt(e[1]),
		day: parseInt(e[2]),
		...gl(e[3])
	}))(t) : void 0;
}
function pl(e) {
	let t = sl.exec(e);
	if (t) return t[6] && _s(t[6]), t;
}
function ml(e, t) {
	let n = qt(e[t + 3]);
	return {
		...pr(Gt(e[t + 4] || ""))[0],
		hour: qt(e[t]),
		minute: qt(e[t + 2]),
		second: n === 60 ? 59 : n
	};
}
function hl(e) {
	let t = Kt(e[1]), n = parseInt(e[2] || e[3]);
	return t < 0 && !n && L(wt(-0)), t * n;
}
function gl(e) {
	let t, n, r = [];
	return e.replace(cl, (e, i, a) => {
		let o = !!i, [s, c] = a.split("=").reverse();
		return c ? c === "u-ca" ? (r.push(s.toLowerCase()), t ||= o) : (o || /[A-Z]/.test(c)) && L(wt(e)) : (n && L(wt(e)), n = s), "";
	}), r.length > 1 && t && L(wt(e)), {
		timeZoneId: n,
		calendarId: r[0] || "iso8601"
	};
}
function _l(e, t, n) {
	let r = Object.assign(Object.create(null), t);
	return vl(r, n, Bn), ls(e) && (vl(r, n, zn), e && e.le && vl(r, n, Vn, Rn)), r;
}
function vl(e, t, n, r) {
	let i = 0, a = [];
	for (let e of n) t[e] === void 0 ? a.push(e) : i = 1;
	if (Object.assign(e, t), i) for (let t of r || a) delete e[t];
}
function yl(e, t, n) {
	let { calendar: r, timeZone: i } = e, a = us(r, $n, er), o = Ua(e), { year: s, month: c, day: l } = Hr(r, o), u = {
		year: s,
		monthCode: El(r, s, c),
		day: l,
		hour: o.hour,
		minute: o.minute,
		second: o.second,
		millisecond: o.millisecond,
		microsecond: o.microsecond,
		nanosecond: o.nanosecond,
		offset: o.offsetNanoseconds
	}, d = Ts(t, a, ws), f = _l(r, u, d), p = {
		...u,
		...d
	}, [m, h, g, _] = Os(r, f, () => $i(n, 2));
	return da(Ga(i, Zi(m, cr(p, h)), p.offset, g, _), i, r);
}
function bl(e, t, n) {
	let { calendar: r } = e, i = us(r, Zn, Qn), { year: a, month: o, day: s } = Hr(r, e), c = {
		year: a,
		monthCode: El(r, a, o),
		day: s,
		hour: e.hour,
		minute: e.minute,
		second: e.second,
		millisecond: e.millisecond,
		microsecond: e.microsecond,
		nanosecond: e.nanosecond
	}, l = Ts(t, i, Cs), u = _l(r, c, l), d = {
		...c,
		...l
	}, [f, p] = Os(r, u, () => [Qi(n)]);
	return Es(f, cr(d, p), r);
}
function xl(e, t, n) {
	let { calendar: r } = e, i = us(r, Yn, Xn), { year: a, month: o, day: s } = Hr(r, e);
	return Ds(r, _l(r, {
		year: a,
		monthCode: El(r, a, o),
		day: s
	}, Ts(t, i, ys)), n);
}
function Sl(e, t, n) {
	let { calendar: r } = e, i = us(r, Wn, Gn), { year: a, month: o } = Hr(r, e);
	return Ms(r, _l(r, {
		year: a,
		monthCode: El(r, a, o)
	}, Ts(t, i, ys)), n);
}
function Cl(e, t, n) {
	let { calendar: r } = e, i = us(r, Yn, Xn), { year: a, month: o, day: s } = Hr(r, e);
	return Ns(r, _l(r, {
		monthCode: El(r, a, o),
		day: s
	}, Ts(t, i, ys)), n);
}
function wl(e, t, n) {
	return ((e, t, n) => hs({
		...Lt(Hn, e),
		...Ts(t, Hn, bs)
	}, Qi(n)))(e, t, n);
}
function Tl(e, t) {
	return ha((n = e, r = t, Vo({
		...n,
		...Ts(r, ii, xs)
	})));
	var n, r;
}
function El(e, t, n) {
	let [r, i] = Ur(e, t, n);
	return pn(r, i);
}
function Dl(e, t, n) {
	return da(e.epochNanoseconds, t, n);
}
function Ol(e) {
	return ua(e.epochNanoseconds);
}
function kl(e) {
	return fa(Ua(e), e.calendar);
}
function Al(e) {
	return pa(Ua(e), e.calendar);
}
function jl(e) {
	return ma(Ua(e));
}
function Ml(e, t, n) {
	return da(ca(((e, t, n) => Ka(e, t, ((e) => zi(it(e)))(n)))(t, e, n)), t, e.calendar);
}
function Nl(e, t, n, r) {
	let i = e(r.timeZone), a = r.plainTime, o = a === void 0 ? void 0 : t(a), s = yc(i), c;
	return c = o ? Ka(s, Zi(n, o)) : qa(s, Zi(n, ar)), da(c, s, n.calendar);
}
function Pl(e, t, n) {
	return Rl(e, Lt(us(e, Kn, qn), t), Ts(dt(n), Pn, ys, []));
}
function Fl(e, t, n) {
	let r = us(e, Nn, Un);
	return Rl(e, Lt(Jn, t), Ts(dt(n), r, ys, []));
}
function Il(e, t) {
	return Ns(e, Ts(t, Jn, ys));
}
function Ll(e, t, n) {
	return Ms(e, Ts(t, us(e, Kn, qn), ys), n);
}
function Rl(e, t, n) {
	let r = us(e, rr, ir), i = _l(e, t, n);
	return i = Ts(i, r, ys, []), Ds(e, i);
}
function zl(e) {
	return ua(ca(BigInt(yi(e)) * Tn));
}
function Bl(e) {
	return ua(ca(vi(e)));
}
function Vl(e) {
	return e.timeZone = "UTC", ["full", "long"].includes(e.timeStyle) && (e.timeStyle = "medium"), e;
}
function Hl(e, t) {
	return e.timeZone !== void 0 && Dt("Cannot specify TimeZone"), e.timeZone = t, e;
}
function Ul(e, t, n) {
	let r = e.resolvedOptions().calendar;
	!n && t.calendar === void 0 || un(t.calendar) === r || L("Mismatching Calendars");
}
function Wl(e, t, n, r, i) {
	let a = new Set(e), o = new Set(t), s = new Set(n);
	return (e, t) => {
		let n = ((e, t, n, r) => {
			let i = {
				dateStyle: void 0,
				timeStyle: void 0,
				me: {},
				pe: {},
				xe: {},
				oe: 0,
				ue: 0
			};
			for (let a of Object.keys(e)) {
				let o = e[a];
				o === void 0 || r.has(a) || (t.has(a) ? a === "dateStyle" ? i.dateStyle = o : a === "timeStyle" ? i.timeStyle = o : i.me[a] = o : a === "era" ? i.pe[a] = o : n.has(a) ? a === "dateStyle" || a === "timeStyle" ? i.ue = 1 : i.oe = 1 : i.xe[a] = o);
			}
			return i;
		})(e, a, o, s), c = n.dateStyle !== void 0, l = n.timeStyle !== void 0, u = c || l, d = Object.keys(n.me).length > 0, f = n.oe || n.ue, p = d || c || l, m = Object.keys(n.pe).length > 0, h = d || m || n.oe;
		(!t && f || t && f && !p || u && h) && Dt("Invalid formatting options");
		let g = {};
		return u || p || Object.assign(g, r), Object.assign(g, n.me, n.pe, n.xe), c && (i ? Object.assign(g, i[n.dateStyle]) : g.dateStyle = n.dateStyle), l && (g.timeStyle = n.timeStyle), g;
	};
}
var Gl = {
	year: "numeric",
	month: "numeric",
	day: "numeric"
}, Kl = {
	hour: "numeric",
	minute: "numeric",
	second: "numeric"
}, ql = /*@__PURE__*/ Object.assign({}, Gl, Kl), Jl = /*@__PURE__*/ Object.assign({}, ql, { timeZoneName: "short" }), Yl = {
	year: "numeric",
	month: "numeric"
}, Xl = {
	month: "numeric",
	day: "numeric"
}, Zl = [
	"weekday",
	"year",
	"month",
	"day",
	"dateStyle"
], Ql = [
	"dayPeriod",
	"hour",
	"minute",
	"second",
	"fractionalSecondDigits",
	"timeStyle"
], $l = /*@__PURE__*/ Zl.concat(Ql), eu = /*@__PURE__*/ ["weekday", "day"].concat(Ql), tu = /*@__PURE__*/ ["weekday", "year"].concat(Ql), nu = /*@__PURE__*/ Wl($l, [], [], ql), ru = /*@__PURE__*/ Wl($l, [], [], Jl), iu = /*@__PURE__*/ Wl($l, [], ["timeZoneName"], ql), au = /*@__PURE__*/ Wl(Zl, Ql, ["timeZoneName"], Gl), ou = /*@__PURE__*/ Wl(Ql, Zl, ["timeZoneName", "era"], Kl), su = /*@__PURE__*/ Wl([
	"year",
	"month",
	"dateStyle"
], eu, ["timeZoneName"], Yl, {
	full: {
		year: "numeric",
		month: "long"
	},
	long: {
		year: "numeric",
		month: "long"
	},
	medium: {
		year: "numeric",
		month: "short"
	},
	short: {
		year: "2-digit",
		month: "numeric"
	}
}), cu = /*@__PURE__*/ Wl([
	"month",
	"day",
	"dateStyle"
], tu, ["timeZoneName", "era"], Xl, {
	full: {
		month: "long",
		day: "numeric"
	},
	long: {
		month: "long",
		day: "numeric"
	},
	medium: {
		month: "short",
		day: "numeric"
	},
	short: {
		month: "numeric",
		day: "numeric"
	}
});
function lu(e, t) {
	let { timeZone: n } = e, r = Ua(e), { offsetNanoseconds: i } = r, a = t || ar, o;
	return o = t ? Ga(n, Zi(r, a), i, 2) : qa(n, Zi(r, a)), da(o, n, e.calendar);
}
function uu(e) {
	let t = du(), n = e.C(t);
	return Cr(t + BigInt(n));
}
function du() {
	return BigInt(Date.now()) * Tn;
}
function fu() {
	return new Ps().resolvedOptions().timeZone;
}
//#endregion
//#region ../../node_modules/.pnpm/temporal-polyfill@1.0.1/node_modules/temporal-polyfill/chunks/apiHelpers.js
var pu = "PlainYearMonth", mu = "PlainMonthDay", hu = "PlainDate", gu = "PlainDateTime", _u = "PlainTime", vu = "ZonedDateTime", yu = "Instant", bu = "Duration";
function xu(e, t, n, ...r) {
	Object.defineProperties(t, jt(e)), Object.defineProperties(t.prototype, Nt("Temporal." + e));
	for (let e of r) Su(t.prototype, n, e);
	return t;
}
function Su(e, t, n) {
	Object.defineProperties(e, Pt((e) => ({
		get() {
			return e(t(this));
		},
		configurable: 1
	}), n));
}
var Cu = Vt.name === "noop" ? (e) => {
	Object.defineProperty(e, "_str_", { value: e.toJSON() });
} : Vt;
function wu() {
	Dt(_t);
}
function Tu() {
	Dt(gt);
}
var Eu = {
	era(e) {
		return Wr(e.calendar, e).era;
	},
	eraYear(e) {
		return Wr(e.calendar, e).eraYear;
	},
	year(e) {
		return Hr(e.calendar, e).year;
	},
	month(e) {
		return Hr(e.calendar, e).month;
	},
	monthCode(e) {
		return Jr(e.calendar, e);
	}
}, Du = {
	era(e) {
		return Wr(e.calendar, e).era;
	},
	eraYear(e) {
		return Wr(e.calendar, e).eraYear;
	},
	year(e) {
		return Hr(e.calendar, e).year;
	},
	month(e) {
		return Hr(e.calendar, e).month;
	},
	monthCode(e) {
		return Jr(e.calendar, e);
	},
	day(e) {
		return Hr(e.calendar, e).day;
	}
}, Ou = {
	monthCode(e) {
		return Jr(e.calendar, e);
	},
	day(e) {
		return Hr(e.calendar, e).day;
	}
}, ku = {
	daysInMonth(e) {
		return Zr(e.calendar, e);
	},
	daysInYear(e) {
		return Qr(e.calendar, e);
	},
	monthsInYear(e) {
		return Xr(e.calendar, e);
	},
	inLeapYear(e) {
		return Yr(e.calendar, e);
	}
}, Au = {
	dayOfWeek(e) {
		return Nr(e);
	},
	dayOfYear(e) {
		return $r(e.calendar, e);
	},
	weekOfYear(e) {
		return ei(e.calendar, e);
	},
	yearOfWeek(e) {
		return ti(e.calendar, e);
	},
	daysInWeek() {
		return 7;
	},
	daysInMonth(e) {
		return Zr(e.calendar, e);
	},
	daysInYear(e) {
		return Qr(e.calendar, e);
	},
	monthsInYear(e) {
		return Xr(e.calendar, e);
	},
	inLeapYear(e) {
		return Yr(e.calendar, e);
	}
};
function ju(e) {
	return It(Object.keys(e));
}
ju(ku), ju(Au);
//#endregion
//#region ../../node_modules/.pnpm/temporal-polyfill@1.0.1/node_modules/temporal-polyfill/chunks/classApi-basic.js
function Mu(e) {
	let t = pi(e).toLowerCase();
	return t === "iso8601" ? void 0 : t === "gregory" ? 0 : void L(xt(e, "temporal-polyfill/full"));
}
function Nu(e = sn) {
	return Mu(e);
}
var Pu = /*@__PURE__*/ new WeakMap(), Fu = /*@__PURE__*/ xu(vu, class {
	constructor(e, t, n = void 0) {
		let r = ca(vi(e)), i = yc(mc(t)), a = Nu(n);
		Vu(this, da(r, i, a));
	}
	static from(e, t = void 0) {
		return Iu(Bu(e, t));
	}
	static compare(e, t) {
		return Zo(Bu(e), Bu(t));
	}
	get calendarId() {
		return un(Lu(this).calendar);
	}
	get timeZoneId() {
		return Lu(this).timeZone.id;
	}
	get epochMilliseconds() {
		return ga(Lu(this));
	}
	get epochNanoseconds() {
		return _a(Lu(this));
	}
	get offset() {
		return ac(Ua(Lu(this)).offsetNanoseconds);
	}
	get offsetNanoseconds() {
		return Ua(Lu(this)).offsetNanoseconds;
	}
	get hoursInDay() {
		return Ta(Lu(this));
	}
	with(e, t = void 0) {
		return Iu(yl(Lu(this), fd(e), t));
	}
	withCalendar(e) {
		return Iu({
			...Lu(this),
			calendar: Ld(e)
		});
	}
	withTimeZone(e) {
		return Iu({
			...Lu(this),
			timeZone: yc(Hu(e))
		});
	}
	withPlainTime(e = void 0) {
		return Iu(lu(Lu(this), yd(e)));
	}
	add(e, t = void 0) {
		return Iu(Xa(Lu(this), Ud(e), t));
	}
	subtract(e, t = void 0) {
		return Iu(Xa(Lu(this), zo(Ud(e)), t));
	}
	until(e, t = void 0) {
		let n = Lu(this), r = Bu(e);
		return Bd(ha(lo(0, ao(n.calendar, r.calendar), n, r, t)));
	}
	since(e, t = void 0) {
		let n = Lu(this), r = Bu(e);
		return Bd(ha(lo(1, ao(n.calendar, r.calendar), n, r, t)));
	}
	round(e) {
		let t = Lu(this), [n, r, i] = Xi(e);
		return Iu(wa(t, n, r, i));
	}
	startOfDay() {
		return Iu(Ea(Lu(this)));
	}
	equals(e) {
		return rs(Lu(this), Bu(e));
	}
	toInstant() {
		return Gu(Ol(Lu(this)));
	}
	toPlainDateTime() {
		return Cd(kl(Lu(this)));
	}
	toPlainDate() {
		return Ad(Al(Lu(this)));
	}
	toPlainTime() {
		return hd(jl(Lu(this)));
	}
	toLocaleString(e = void 0, t = {}) {
		let n = Lu(this), r = new Ps(e, Hl(ru(t), so(n)));
		return Ul(r, n), r.format(ga(n));
	}
	toString(e = void 0) {
		return Us(Lu(this), e);
	}
	toJSON() {
		return Us(Lu(this));
	}
	getTimeZoneTransition(e) {
		let t = Lu(this), n = Ha(t, e);
		return n ? Iu({
			...t,
			epochNanoseconds: n
		}) : null;
	}
	valueOf() {
		return Tu();
	}
}, Ru, Du, Au, Mn);
function Iu(e) {
	return Vu(Object.create(Fu.prototype), e);
}
function Lu(e) {
	return zu(e) || wu();
}
function Ru(e) {
	let t = Lu(e);
	return {
		...Ua(t),
		calendar: t.calendar
	};
}
function zu(e) {
	return Pu.get(e);
}
function Bu(e, t) {
	if (Et(e)) {
		let n = zu(e);
		return n ? ($i(t), n) : Oc(Hu, Fd(e), e, t);
	}
	return Rc(e, Mu, t);
}
function Vu(e, t) {
	return Pu.set(e, t), Cu(e), e;
}
function Hu(e) {
	if (Et(e)) {
		let t = zu(e);
		return t || Dt(St(e)), t.timeZone.id;
	}
	return ((e) => hc(qc(pi(e))))(e);
}
var Uu = /*@__PURE__*/ new WeakMap(), Wu = /*@__PURE__*/ xu(yu, class {
	constructor(e) {
		let t = ca(vi(e));
		Xu(this, ua(t));
	}
	static from(e) {
		return Gu(Ju(e));
	}
	static fromEpochMilliseconds(e) {
		return Gu(zl(e));
	}
	static fromEpochNanoseconds(e) {
		return Gu(Bl(e));
	}
	static compare(e, t) {
		return Xo(Ju(e), Ju(t));
	}
	get epochMilliseconds() {
		return ga(Ku(this));
	}
	get epochNanoseconds() {
		return _a(Ku(this));
	}
	add(e) {
		return Gu(ua(Ya(Ku(this).epochNanoseconds, Ud(e))));
	}
	subtract(e) {
		return Gu(ua(Ya(Ku(this).epochNanoseconds, zo(Ud(e)))));
	}
	until(e, t = void 0) {
		return Bd(co(0, Ku(this), Ju(e), t));
	}
	since(e, t = void 0) {
		return Bd(co(1, Ku(this), Ju(e), t));
	}
	round(e) {
		let t = Ku(this), [n, r, i] = Xi(e, 5, 1);
		return Gu(ua(Fa(t.epochNanoseconds, ja(n, r), i)));
	}
	equals(e) {
		return ns(Ku(this), Ju(e));
	}
	toZonedDateTimeISO(e) {
		return Iu(Dl(Ku(this), yc(Hu(e))));
	}
	toLocaleString(e = void 0, t = {}) {
		let n = Ku(this);
		return new Ps(e, nu(t)).format(ga(n));
	}
	toString(e = void 0) {
		return Hs(Hu, Ku(this), e);
	}
	toJSON() {
		return Hs(Hu, Ku(this));
	}
	valueOf() {
		return Tu();
	}
});
function Gu(e) {
	return Xu(Object.create(Wu.prototype), e);
}
function Ku(e) {
	return qu(e) || wu();
}
function qu(e) {
	return Uu.get(e);
}
function Ju(e) {
	if (Et(e)) {
		let t = qu(e);
		if (t) return t;
		let n = zu(e);
		if (n) return ua(n.epochNanoseconds);
	}
	return Ic(e);
}
var { toTemporalInstant: Yu } = { toTemporalInstant() {
	let e = Date.prototype.valueOf.call(this);
	return Gu(ua(BigInt(hi(e)) * Tn));
} };
function Xu(e, t) {
	return Uu.set(e, t), Cu(e), e;
}
var Zu = /*@__PURE__*/ new WeakMap(), Qu = /*@__PURE__*/ xu(mu, class {
	constructor(e, t, n = void 0, r) {
		let i = ot(e), a = ot(t), o = Nu(n), s = aa(zr({
			year: ot(r ?? 1972),
			month: i,
			day: a
		}));
		rd(this, pa(s, o));
	}
	static from(e, t = void 0) {
		return $u(nd(e, t));
	}
	get calendarId() {
		return un(ed(this).calendar);
	}
	with(e, t = void 0) {
		return $u(Cl(ed(this), fd(e), t));
	}
	equals(e) {
		return ss(ed(this), nd(e));
	}
	toPlainDate(e) {
		return Ad(Fl(ed(this).calendar, this, e));
	}
	toLocaleString(e = void 0, t = {}) {
		let n = ed(this), r = new Ps(e, Vl(cu(t)));
		return Ul(r, n, 1), r.format(br(n));
	}
	toString(e = void 0) {
		return qs(ed(this), e);
	}
	toJSON() {
		return qs(ed(this));
	}
	valueOf() {
		return Tu();
	}
}, ed, Ou);
function $u(e) {
	return rd(Object.create(Qu.prototype), e);
}
function ed(e) {
	return td(e) || wu();
}
function td(e) {
	return Zu.get(e);
}
function nd(e, t) {
	if (Et(e)) {
		let n = td(e);
		if (n) return Qi(t), n;
		let r = Id(e);
		return Mc(r === void 0 ? void 0 : r, r === void 0, e, t);
	}
	let n = Uc(e, Mu);
	return Qi(t), n;
}
function rd(e, t) {
	return Zu.set(e, t), Cu(e), e;
}
var id = /*@__PURE__*/ new WeakMap(), ad = /*@__PURE__*/ xu(pu, class {
	constructor(e, t, n = void 0, r) {
		let i = ot(e), a = ot(t), o = Nu(n), s = ia(zr({
			year: i,
			month: a,
			day: ot(r ?? 1)
		}));
		ud(this, pa(s, o));
	}
	static from(e, t = void 0) {
		return od(ld(e, t));
	}
	static compare(e, t) {
		return es(ld(e), ld(t));
	}
	get calendarId() {
		return un(sd(this).calendar);
	}
	with(e, t = void 0) {
		return od(Sl(sd(this), fd(e), t));
	}
	add(e, t = void 0) {
		let n = sd(this);
		return od(pa(Ja(0, n.calendar, n, Ud(e), t), n.calendar));
	}
	subtract(e, t = void 0) {
		let n = sd(this);
		return od(pa(Ja(1, n.calendar, n, Ud(e), t), n.calendar));
	}
	until(e, t = void 0) {
		let n = sd(this), r = ld(e);
		return Bd(po(0, ao(n.calendar, r.calendar), n, r, t));
	}
	since(e, t = void 0) {
		let n = sd(this), r = ld(e);
		return Bd(po(1, ao(n.calendar, r.calendar), n, r, t));
	}
	equals(e) {
		return os(sd(this), ld(e));
	}
	toPlainDate(e) {
		return Ad(Pl(sd(this).calendar, this, e));
	}
	toLocaleString(e = void 0, t = {}) {
		let n = sd(this), r = new Ps(e, Vl(su(t)));
		return Ul(r, n, 1), r.format(br(n));
	}
	toString(e = void 0) {
		return Ks(sd(this), e);
	}
	toJSON() {
		return Ks(sd(this));
	}
	valueOf() {
		return Tu();
	}
}, sd, Eu, ku);
function od(e) {
	return ud(Object.create(ad.prototype), e);
}
function sd(e) {
	return cd(e) || wu();
}
function cd(e) {
	return id.get(e);
}
function ld(e, t) {
	if (Et(e)) {
		let n = cd(e);
		return n ? (Qi(t), n) : jc(Fd(e), e, t);
	}
	let n = Vc(e, Mu);
	return Qi(t), n;
}
function ud(e, t) {
	return id.set(e, t), Cu(e), e;
}
function dd(e) {
	if (!Et(e)) return;
	let t = qu(e);
	return t ? [yu, t] : (t = zu(e), t ? [vu, t] : (t = Td(e), t ? [gu, t] : (t = Md(e), t ? [hu, t] : (t = _d(e), t ? [_u, t] : (t = cd(e), t ? [pu, t] : (t = td(e), t ? [mu, t] : (t = Hd(e), t ? [bu, t] : void 0)))))));
}
function fd(e) {
	return (dd(e) || e.calendar !== void 0 || e.timeZone !== void 0) && Dt("Invalid bag"), e;
}
var pd = /*@__PURE__*/ new WeakMap(), md = /*@__PURE__*/ xu(_u, class {
	constructor(e = 0, t = 0, n = 0, r = 0, i = 0, a = 0) {
		let o = or(Pt(ot, {
			hour: e,
			minute: t,
			second: n,
			millisecond: r,
			microsecond: i,
			nanosecond: a
		}));
		bd(this, ma(o));
	}
	static from(e, t = void 0) {
		return hd(vd(e, t));
	}
	static compare(e, t) {
		return ts(vd(e), vd(t));
	}
	with(e, t = void 0) {
		return hd(wl(gd(this), fd(e), t));
	}
	add(e) {
		return hd(eo(gd(this), Ud(e))[0]);
	}
	subtract(e) {
		return hd(eo(gd(this), zo(Ud(e)))[0]);
	}
	until(e, t = void 0) {
		return Bd(ho(0, gd(this), vd(e), t));
	}
	since(e, t = void 0) {
		return Bd(ho(1, gd(this), vd(e), t));
	}
	round(e) {
		let t = gd(this), [n, r, i] = Xi(e, 5);
		return hd(Oa(t, Aa(n, r), i)[0]);
	}
	equals(e) {
		return cs(gd(this), vd(e));
	}
	toLocaleString(e = void 0, t = {}) {
		let n = gd(this);
		return new Ps(e, Vl(ou(t))).format(ur(n));
	}
	toString(e = void 0) {
		return Ys(gd(this), e);
	}
	toJSON() {
		return Ys(gd(this));
	}
	valueOf() {
		return Tu();
	}
}, gd, Mn);
function hd(e) {
	return bd(Object.create(md.prototype), e);
}
function gd(e) {
	return _d(e) || wu();
}
function _d(e) {
	return pd.get(e);
}
function vd(e, t) {
	if (Et(e)) {
		let n = _d(e);
		if (n) return Qi(t), n;
		let r = Td(e);
		if (r) return Qi(t), ma(r);
		let i = zu(e);
		return i ? (Qi(t), jl(i)) : Nc(e, t);
	}
	let n = Wc(e);
	return Qi(t), n;
}
function yd(e) {
	return e === void 0 ? void 0 : vd(e);
}
function bd(e, t) {
	return pd.set(e, t), Cu(e), e;
}
var xd = /*@__PURE__*/ new WeakMap(), Sd = /*@__PURE__*/ xu(gu, class {
	constructor(e, t, n, r = 0, i = 0, a = 0, o = 0, s = 0, c = 0, l = void 0) {
		let u = oa(Rr(Pt(ot, {
			year: e,
			month: t,
			day: n,
			hour: r,
			minute: i,
			second: a,
			millisecond: o,
			microsecond: s,
			nanosecond: c
		}))), d = Nu(l);
		Dd(this, fa(u, d));
	}
	static from(e, t = void 0) {
		return Cd(Ed(e, t));
	}
	static compare(e, t) {
		return $o(Ed(e), Ed(t));
	}
	get calendarId() {
		return un(wd(this).calendar);
	}
	with(e, t = void 0) {
		return Cd(bl(wd(this), fd(e), t));
	}
	withCalendar(e) {
		return Cd(fa(wd(this), Ld(e)));
	}
	withPlainTime(e = void 0) {
		let t = wd(this);
		return Cd(Es(t, yd(e), t.calendar));
	}
	add(e, t = void 0) {
		let n = wd(this);
		return Cd(fa(Za(n.calendar, n, Ud(e), t), n.calendar));
	}
	subtract(e, t = void 0) {
		let n = wd(this);
		return Cd(fa(Za(n.calendar, n, zo(Ud(e)), t), n.calendar));
	}
	until(e, t = void 0) {
		let n = wd(this), r = Ed(e);
		return Bd(uo(0, ao(n.calendar, r.calendar), n, r, t));
	}
	since(e, t = void 0) {
		let n = wd(this), r = Ed(e);
		return Bd(uo(1, ao(n.calendar, r.calendar), n, r, t));
	}
	round(e) {
		let t = wd(this), [n, r, i] = Xi(e);
		return Cd(fa(Da(t, Aa(n, r), i), t.calendar));
	}
	equals(e) {
		return is(wd(this), Ed(e));
	}
	toZonedDateTime(e, t = void 0) {
		return Iu(Ml(wd(this), yc(Hu(e)), t));
	}
	toPlainDate() {
		let e = wd(this);
		return Ad(pa(e, e.calendar));
	}
	toPlainTime() {
		return hd(ma(wd(this)));
	}
	toLocaleString(e = void 0, t = {}) {
		let n = wd(this), r = new Ps(e, Vl(iu(t)));
		return Ul(r, n), r.format(vr(n));
	}
	toString(e = void 0) {
		return Ws(wd(this), e);
	}
	toJSON() {
		return Ws(wd(this));
	}
	valueOf() {
		return Tu();
	}
}, wd, Du, Au, Mn);
function Cd(e) {
	return Dd(Object.create(Sd.prototype), e);
}
function wd(e) {
	return Td(e) || wu();
}
function Td(e) {
	return xd.get(e);
}
function Ed(e, t) {
	if (Et(e)) {
		let n = Td(e);
		if (n) return Qi(t), n;
		let r = Md(e);
		if (r) return Qi(t), fa(Zi(r, ar), r.calendar);
		let i = zu(e);
		return i ? (Qi(t), kl(i)) : kc(Fd(e), e, t);
	}
	let n = zc(e, Mu);
	return Qi(t), n;
}
function Dd(e, t) {
	return xd.set(e, t), Cu(e), e;
}
var Od = /*@__PURE__*/ new WeakMap(), kd = /*@__PURE__*/ xu(hu, class {
	constructor(e, t, n, r = void 0) {
		let i = aa(zr(Pt(ot, {
			year: e,
			month: t,
			day: n
		}))), a = Nu(r);
		Pd(this, pa(i, a));
	}
	static from(e, t = void 0) {
		return Ad(Nd(e, t));
	}
	static compare(e, t) {
		return es(Nd(e), Nd(t));
	}
	get calendarId() {
		return un(jd(this).calendar);
	}
	with(e, t = void 0) {
		return Ad(xl(jd(this), fd(e), t));
	}
	withCalendar(e) {
		return Ad(pa(jd(this), Ld(e)));
	}
	add(e, t = void 0) {
		let n = jd(this);
		return Ad(pa(Qa(n.calendar, n, Ud(e), t), n.calendar));
	}
	subtract(e, t = void 0) {
		let n = jd(this);
		return Ad(pa(Qa(n.calendar, n, zo(Ud(e)), t), n.calendar));
	}
	until(e, t = void 0) {
		let n = jd(this), r = Nd(e);
		return Bd(fo(0, ao(n.calendar, r.calendar), n, r, t));
	}
	since(e, t = void 0) {
		let n = jd(this), r = Nd(e);
		return Bd(fo(1, ao(n.calendar, r.calendar), n, r, t));
	}
	equals(e) {
		return as(jd(this), Nd(e));
	}
	toZonedDateTime(e) {
		let t = Et(e) ? {
			timeZone: e.timeZone,
			plainTime: e.plainTime
		} : { timeZone: e };
		return Iu(Nl(Hu, vd, jd(this), t));
	}
	toPlainDateTime(e = void 0) {
		let t = jd(this);
		return Cd(Es(t, yd(e), t.calendar));
	}
	toPlainYearMonth() {
		return od(Ll(jd(this).calendar, this));
	}
	toPlainMonthDay() {
		return $u(Il(jd(this).calendar, this));
	}
	toLocaleString(e = void 0, t = {}) {
		let n = jd(this), r = new Ps(e, Vl(au(t)));
		return Ul(r, n), r.format(br(n));
	}
	toString(e = void 0) {
		return Gs(jd(this), e);
	}
	toJSON() {
		return Gs(jd(this));
	}
	valueOf() {
		return Tu();
	}
}, jd, Du, Au);
function Ad(e) {
	return Pd(Object.create(kd.prototype), e);
}
function jd(e) {
	return Md(e) || wu();
}
function Md(e) {
	return Od.get(e);
}
function Nd(e, t) {
	if (Et(e)) {
		let n = Md(e);
		if (n) return Qi(t), n;
		let r = Td(e);
		if (r) return Qi(t), pa(r, r.calendar);
		let i = zu(e);
		return i ? (Qi(t), Al(i)) : Ac(Fd(e), e, t);
	}
	let n = Bc(e, Mu);
	return Qi(t), n;
}
function Pd(e, t) {
	return Od.set(e, t), Cu(e), e;
}
function Fd(e) {
	let t = Id(e);
	return t === void 0 ? void 0 : t;
}
function Id(e) {
	let { calendar: t } = e;
	if (t !== void 0) return Ld(t);
}
function Ld(e) {
	if (Et(e)) {
		let t = Md(e) || Td(e) || zu(e) || td(e) || cd(e);
		return t || Dt(bt(e)), t.calendar;
	}
	return ((e) => Mu(Kc(pi(e))))(e);
}
var Rd = /*@__PURE__*/ new WeakMap(), zd = /*@__PURE__*/ xu(bu, class {
	constructor(e = 0, t = 0, n = 0, r = 0, i = 0, a = 0, o = 0, s = 0, c = 0, l = 0) {
		let u = Vo(Pt(yi, {
			years: e,
			months: t,
			weeks: n,
			days: r,
			hours: i,
			minutes: a,
			seconds: o,
			milliseconds: s,
			microseconds: c,
			nanoseconds: l
		}));
		Gd(this, ha(u));
	}
	static from(e) {
		return Bd(Ud(e));
	}
	static compare(e, t, n = void 0) {
		return Qo(Wd, Ud(e), Ud(t), n);
	}
	get sign() {
		return Vd(this).sign;
	}
	get blank() {
		return !Vd(this).sign;
	}
	with(e) {
		return Bd(Tl(Vd(this), e));
	}
	negated() {
		return Bd(Ro(Vd(this)));
	}
	abs() {
		return Bd(Lo(Vd(this)));
	}
	add(e, t = void 0) {
		return Bd(Po(Wd, 0, Vd(this), Ud(e), t));
	}
	subtract(e, t = void 0) {
		return Bd(Po(Wd, 1, Vd(this), Ud(e), t));
	}
	round(e) {
		return Bd(Io(Wd, Vd(this), e));
	}
	total(e) {
		return va(Wd, Vd(this), e);
	}
	toLocaleString(e = void 0, t) {
		let n = Vd(this);
		return Intl.DurationFormat ? new Intl.DurationFormat(e, t).format(n) : Xs(n, t);
	}
	toString(e = void 0) {
		return Xs(Vd(this), e);
	}
	toJSON() {
		return Xs(Vd(this));
	}
	valueOf() {
		return Tu();
	}
}, Vd, ri);
function Bd(e) {
	return Gd(Object.create(zd.prototype), e);
}
function Vd(e) {
	return Hd(e) || wu();
}
function Hd(e) {
	return Rd.get(e);
}
function Ud(e) {
	return Et(e) ? Hd(e) || Pc(e) : Gc(e);
}
function Wd(e) {
	if (e !== void 0) {
		if (Et(e)) {
			let t = zu(e);
			if (t) return t;
			let n = Md(e);
			if (n) return n;
			let r = Td(e);
			return r ? pa(r, r.calendar) : Dc(Hu, Fd(e), e);
		}
		return Lc(e, Mu);
	}
}
function Gd(e, t) {
	return Rd.set(e, t), Cu(e), e;
}
var Kd = /*@__PURE__*/ Object.defineProperties({}, {
	...Nt("Temporal.Now"),
	...Mt({
		timeZoneId() {
			return fu();
		},
		instant() {
			return Gu(ua(du()));
		},
		zonedDateTimeISO(e = fu()) {
			let t = yc(Hu(e));
			return Iu(da(du(), t));
		},
		plainDateTimeISO(e = fu()) {
			return Cd(fa(uu(yc(Hu(e)))));
		},
		plainDateISO(e = fu()) {
			return Ad(pa(uu(yc(Hu(e)))));
		},
		plainTimeISO(e = fu()) {
			return hd(ma(uu(yc(Hu(e)))));
		}
	})
}), qd = /*@__PURE__*/ Object.defineProperties({}, {
	...Nt("Temporal"),
	...Mt({
		PlainYearMonth: ad,
		PlainMonthDay: Qu,
		PlainDate: kd,
		PlainTime: md,
		PlainDateTime: Sd,
		ZonedDateTime: Fu,
		Instant: Wu,
		Duration: zd,
		Now: Kd
	})
}), Jd = Ke || qd;
Ke && Date.prototype.toTemporalInstant;
//#endregion
//#region src/core/utils/DateUtils.ts
var R = /* @__PURE__ */ We((/* @__PURE__ */ I(((e, t) => {
	(function() {
		var e = {}.hasOwnProperty;
		function n() {
			for (var e = "", t = 0; t < arguments.length; t++) {
				var n = arguments[t];
				n && (e = i(e, r(n)));
			}
			return e;
		}
		function r(t) {
			if (typeof t == "string" || typeof t == "number") return t;
			if (typeof t != "object") return "";
			if (Array.isArray(t)) return n.apply(null, t);
			if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]")) return t.toString();
			var r = "";
			for (var a in t) e.call(t, a) && t[a] && (r = i(r, a));
			return r;
		}
		function i(e, t) {
			return t ? e ? e + " " + t : e + t : e;
		}
		t !== void 0 && t.exports ? (n.default = n, t.exports = n) : typeof define == "function" && typeof define.amd == "object" && define.amd ? define("classnames", [], function() {
			return n;
		}) : window.classNames = n;
	})();
})))(), 1);
function Yd(e, t) {
	let n = e < 0;
	e = Math.abs(e);
	let r = Math.floor(e / 3600).toFixed(0).padStart(t?.hoursMaxLength ?? 2, "0"), i = Math.floor(e % 3600 / 60).toFixed(0).padStart(t?.minutesMaxLength ?? 2, "0"), a = Math.floor(e % 3600 % 60).toFixed(0).padStart(2, "0"), o = "";
	return r !== "00" && (o += `${r}:`), o += `${i}:${a}`, n && (o = "-" + o), o;
}
function Xd(e) {
	return `${`${e.getFullYear()}`.padStart(4, "0")}-${`${e.getMonth() + 1}`.padStart(2, "0")}-${`${e.getDate()}`.padStart(2, "0")}`;
}
//#endregion
//#region ../../node_modules/.pnpm/react@19.2.8/node_modules/react/cjs/react-jsx-runtime.production.js
var Zd = /* @__PURE__ */ I(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), Qd = /* @__PURE__ */ I(((e, t) => {
	t.exports = { ...a };
})), $d = /* @__PURE__ */ I(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === D ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case _: return "Fragment";
				case y: return "Profiler";
				case v: return "StrictMode";
				case C: return "Suspense";
				case w: return "SuspenseList";
				case ee: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case g: return "Portal";
				case x: return e.displayName || "Context";
				case b: return (e._context.displayName || "Context") + ".Consumer";
				case S:
					var n = e.render;
					return e = e.displayName, e ||= (e = n.displayName || n.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case T: return n = e.displayName || null, n === null ? t(e.type) || "Memo" : n;
				case E:
					n = e._payload, e = e._init;
					try {
						return t(e(n));
					} catch {}
			}
			return null;
		}
		function n(e) {
			return "" + e;
		}
		function r(e) {
			try {
				n(e);
				var t = !1;
			} catch {
				t = !0;
			}
			if (t) {
				t = console;
				var r = t.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
				return r.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", i), n(e);
			}
		}
		function i(e) {
			if (e === _) return "<>";
			if (typeof e == "object" && e && e.$$typeof === E) return "<...>";
			try {
				var n = t(e);
				return n ? "<" + n + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function a() {
			var e = te.A;
			return e === null ? null : e.getOwner();
		}
		function o() {
			return Error("react-stack-top-frame");
		}
		function s(e) {
			if (O.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function c(e, t) {
			function n() {
				ne || (ne = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function l() {
			var e = t(this.type);
			return re[e] || (re[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
		}
		function u(e, t, n, r, i, a) {
			var o = n.ref;
			return e = {
				$$typeof: h,
				type: e,
				key: t,
				props: n,
				_owner: r
			}, (o === void 0 ? null : o) === null ? Object.defineProperty(e, "ref", {
				enumerable: !1,
				value: null
			}) : Object.defineProperty(e, "ref", {
				enumerable: !1,
				get: l
			}), e._store = {}, Object.defineProperty(e._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			}), Object.defineProperty(e, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			}), Object.defineProperty(e, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: i
			}), Object.defineProperty(e, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: a
			}), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
		}
		function d(e, n, i, o, l, d) {
			var p = n.children;
			if (p !== void 0) if (o) if (k(p)) {
				for (o = 0; o < p.length; o++) f(p[o]);
				Object.freeze && Object.freeze(p);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else f(p);
			if (O.call(n, "key")) {
				p = t(e);
				var m = Object.keys(n).filter(function(e) {
					return e !== "key";
				});
				o = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", ae[p + o] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", o, p, m, p), ae[p + o] = !0);
			}
			if (p = null, i !== void 0 && (r(i), p = "" + i), s(n) && (r(n.key), p = "" + n.key), "key" in n) for (var h in i = {}, n) h !== "key" && (i[h] = n[h]);
			else i = n;
			return p && c(i, typeof e == "function" ? e.displayName || e.name || "Unknown" : e), u(e, p, i, a(), l, d);
		}
		function f(e) {
			p(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === E && (e._payload.status === "fulfilled" ? p(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function p(e) {
			return typeof e == "object" && !!e && e.$$typeof === h;
		}
		var m = Qd(), h = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), x = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), ee = Symbol.for("react.activity"), D = Symbol.for("react.client.reference"), te = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, O = Object.prototype.hasOwnProperty, k = Array.isArray, A = console.createTask ? console.createTask : function() {
			return null;
		};
		m = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var ne, re = {}, j = m.react_stack_bottom_frame.bind(m, o)(), ie = A(i(o)), ae = {};
		e.Fragment = _, e.jsx = function(e, t, n) {
			var r = 1e4 > te.recentlyCreatedOwnerStacks++;
			return d(e, t, n, !1, r ? Error("react-stack-top-frame") : j, r ? A(i(e)) : ie);
		}, e.jsxs = function(e, t, n) {
			var r = 1e4 > te.recentlyCreatedOwnerStacks++;
			return d(e, t, n, !0, r ? Error("react-stack-top-frame") : j, r ? A(i(e)) : ie);
		};
	})();
})), z = (/* @__PURE__ */ I(((e, t) => {
	t.exports = process.env.NODE_ENV === "production" ? Zd() : $d();
})))();
function ef({ seconds: e, className: t, minutesMaxLength: n, hoursMaxLength: r, ...i }) {
	let a = S(() => Math.floor(e), [e]), o = S(() => tf(a), [a]);
	return /* @__PURE__ */ (0, z.jsx)("time", {
		dateTime: o,
		className: (0, R.default)("mx_Clock", t),
		...i,
		children: Yd(e, {
			minutesMaxLength: n,
			hoursMaxLength: r
		})
	});
}
function tf(e) {
	if (!isNaN(e)) return new Jd.Duration(0, 0, 0, 0, 0, 0, Math.round(e)).round({
		smallestUnit: "seconds",
		largestUnit: "hours"
	}).toString();
}
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/play-solid.js
function nf(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "m8.98 4.677 9.921 5.58c1.36.764 1.36 2.722 0 3.486l-9.92 5.58C7.647 20.073 6 19.11 6 17.58V6.42c0-1.53 1.647-2.493 2.98-1.743" })
	});
}
nf.displayName = "PlaySolidIcon";
var rf = d(nf);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/pause-solid.js
function af(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M8 4a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V6a2 2 0 0 0-2-2m8 0a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V6a2 2 0 0 0-2-2" })
	});
}
af.displayName = "PauseSolidIcon";
var of = d(af), sf = { button: "_button_13syj_8" }, cf = l(null);
cf.displayName = "I18nContext";
function B() {
	let e = g(cf);
	if (!e) throw Error("useI18n must be used within an I18nContext.Provider");
	return e;
}
//#endregion
//#region src/audio/PlayPauseButton/PlayPauseButton.tsx
function lf({ disabled: e = !1, playing: t = !1, togglePlay: n, className: r, ...i }) {
	let { translate: a } = B(), o = a(t ? "action|pause" : "action|play");
	return /* @__PURE__ */ (0, z.jsx)(M, {
		size: "32px",
		"aria-label": o,
		tooltip: o,
		onClick: n,
		className: (0, R.default)(sf.button, r),
		disabled: e,
		...i,
		children: t ? /* @__PURE__ */ (0, z.jsx)(of, {}) : /* @__PURE__ */ (0, z.jsx)(rf, {})
	});
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_freeGlobal.js
var uf = typeof global == "object" && global && global.Object === Object && global, df = typeof self == "object" && self && self.Object === Object && self, ff = uf || df || Function("return this")(), pf = ff.Symbol, mf = Object.prototype, hf = mf.hasOwnProperty, gf = mf.toString, _f = pf ? pf.toStringTag : void 0;
function vf(e) {
	var t = hf.call(e, _f), n = e[_f];
	try {
		e[_f] = void 0;
		var r = !0;
	} catch {}
	var i = gf.call(e);
	return r && (t ? e[_f] = n : delete e[_f]), i;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_objectToString.js
var yf = Object.prototype.toString;
function bf(e) {
	return yf.call(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseGetTag.js
var xf = "[object Null]", Sf = "[object Undefined]", Cf = pf ? pf.toStringTag : void 0;
function wf(e) {
	return e == null ? e === void 0 ? Sf : xf : Cf && Cf in Object(e) ? vf(e) : bf(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isObjectLike.js
function Tf(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isSymbol.js
var Ef = "[object Symbol]";
function Df(e) {
	return typeof e == "symbol" || Tf(e) && wf(e) == Ef;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayMap.js
function Of(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
	return i;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isArray.js
var kf = Array.isArray, Af = Infinity, jf = pf ? pf.prototype : void 0, Mf = jf ? jf.toString : void 0;
function Nf(e) {
	if (typeof e == "string") return e;
	if (kf(e)) return Of(e, Nf) + "";
	if (Df(e)) return Mf ? Mf.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -Af ? "-0" : t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_trimmedEndIndex.js
var Pf = /\s/;
function Ff(e) {
	for (var t = e.length; t-- && Pf.test(e.charAt(t)););
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseTrim.js
var If = /^\s+/;
function Lf(e) {
	return e && e.slice(0, Ff(e) + 1).replace(If, "");
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isObject.js
function Rf(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/toNumber.js
var zf = NaN, Bf = /^[-+]0x[0-9a-f]+$/i, Vf = /^0b[01]+$/i, Hf = /^0o[0-7]+$/i, Uf = parseInt;
function Wf(e) {
	if (typeof e == "number") return e;
	if (Df(e)) return zf;
	if (Rf(e)) {
		var t = typeof e.valueOf == "function" ? e.valueOf() : e;
		e = Rf(t) ? t + "" : t;
	}
	if (typeof e != "string") return e === 0 ? e : +e;
	e = Lf(e);
	var n = Vf.test(e);
	return n || Hf.test(e) ? Uf(e.slice(2), n ? 2 : 8) : Bf.test(e) ? zf : +e;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/identity.js
function Gf(e) {
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isFunction.js
var Kf = "[object AsyncFunction]", qf = "[object Function]", Jf = "[object GeneratorFunction]", Yf = "[object Proxy]";
function Xf(e) {
	if (!Rf(e)) return !1;
	var t = wf(e);
	return t == qf || t == Jf || t == Kf || t == Yf;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_coreJsData.js
var Zf = ff["__core-js_shared__"], Qf = function() {
	var e = /[^.]+$/.exec(Zf && Zf.keys && Zf.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function $f(e) {
	return !!Qf && Qf in e;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_toSource.js
var ep = Function.prototype.toString;
function tp(e) {
	if (e != null) {
		try {
			return ep.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsNative.js
var np = /[\\^$.*+?()[\]{}|]/g, rp = /^\[object .+?Constructor\]$/, ip = Function.prototype, ap = Object.prototype, op = ip.toString, sp = ap.hasOwnProperty, cp = RegExp("^" + op.call(sp).replace(np, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function lp(e) {
	return !Rf(e) || $f(e) ? !1 : (Xf(e) ? cp : rp).test(tp(e));
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getValue.js
function up(e, t) {
	return e?.[t];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getNative.js
function dp(e, t) {
	var n = up(e, t);
	return lp(n) ? n : void 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_WeakMap.js
var fp = dp(ff, "WeakMap"), pp = Object.create, mp = function() {
	function e() {}
	return function(t) {
		if (!Rf(t)) return {};
		if (pp) return pp(t);
		e.prototype = t;
		var n = new e();
		return e.prototype = void 0, n;
	};
}();
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_apply.js
function hp(e, t, n) {
	switch (n.length) {
		case 0: return e.call(t);
		case 1: return e.call(t, n[0]);
		case 2: return e.call(t, n[0], n[1]);
		case 3: return e.call(t, n[0], n[1], n[2]);
	}
	return e.apply(t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copyArray.js
function gp(e, t) {
	var n = -1, r = e.length;
	for (t ||= Array(r); ++n < r;) t[n] = e[n];
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_shortOut.js
var _p = 800, vp = 16, yp = Date.now;
function bp(e) {
	var t = 0, n = 0;
	return function() {
		var r = yp(), i = vp - (r - n);
		if (n = r, i > 0) {
			if (++t >= _p) return arguments[0];
		} else t = 0;
		return e.apply(void 0, arguments);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/constant.js
function xp(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_defineProperty.js
var Sp = function() {
	try {
		var e = dp(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}(), Cp = bp(Sp ? function(e, t) {
	return Sp(e, "toString", {
		configurable: !0,
		enumerable: !1,
		value: xp(t),
		writable: !0
	});
} : Gf);
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayEach.js
function wp(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isIndex.js
var Tp = 9007199254740991, Ep = /^(?:0|[1-9]\d*)$/;
function Dp(e, t) {
	var n = typeof e;
	return t ??= Tp, !!t && (n == "number" || n != "symbol" && Ep.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseAssignValue.js
function Op(e, t, n) {
	t == "__proto__" && Sp ? Sp(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/eq.js
function kp(e, t) {
	return e === t || e !== e && t !== t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_assignValue.js
var Ap = Object.prototype.hasOwnProperty;
function jp(e, t, n) {
	var r = e[t];
	(!(Ap.call(e, t) && kp(r, n)) || n === void 0 && !(t in e)) && Op(e, t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copyObject.js
function Mp(e, t, n, r) {
	var i = !n;
	n ||= {};
	for (var a = -1, o = t.length; ++a < o;) {
		var s = t[a], c = r ? r(n[s], e[s], s, n, e) : void 0;
		c === void 0 && (c = e[s]), i ? Op(n, s, c) : jp(n, s, c);
	}
	return n;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_overRest.js
var Np = Math.max;
function Pp(e, t, n) {
	return t = Np(t === void 0 ? e.length - 1 : t, 0), function() {
		for (var r = arguments, i = -1, a = Np(r.length - t, 0), o = Array(a); ++i < a;) o[i] = r[t + i];
		i = -1;
		for (var s = Array(t + 1); ++i < t;) s[i] = r[i];
		return s[t] = n(o), hp(e, this, s);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isLength.js
var Fp = 9007199254740991;
function Ip(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Fp;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isArrayLike.js
function Lp(e) {
	return e != null && Ip(e.length) && !Xf(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isPrototype.js
var Rp = Object.prototype;
function zp(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || Rp);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseTimes.js
function Bp(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsArguments.js
var Vp = "[object Arguments]";
function Hp(e) {
	return Tf(e) && wf(e) == Vp;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isArguments.js
var Up = Object.prototype, Wp = Up.hasOwnProperty, Gp = Up.propertyIsEnumerable, Kp = Hp(function() {
	return arguments;
}()) ? Hp : function(e) {
	return Tf(e) && Wp.call(e, "callee") && !Gp.call(e, "callee");
};
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/stubFalse.js
function qp() {
	return !1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isBuffer.js
var Jp = typeof exports == "object" && exports && !exports.nodeType && exports, Yp = Jp && typeof module == "object" && module && !module.nodeType && module, Xp = Yp && Yp.exports === Jp ? ff.Buffer : void 0, Zp = (Xp ? Xp.isBuffer : void 0) || qp, Qp = "[object Arguments]", $p = "[object Array]", em = "[object Boolean]", tm = "[object Date]", nm = "[object Error]", rm = "[object Function]", im = "[object Map]", am = "[object Number]", om = "[object Object]", sm = "[object RegExp]", cm = "[object Set]", lm = "[object String]", um = "[object WeakMap]", dm = "[object ArrayBuffer]", fm = "[object DataView]", pm = "[object Float32Array]", mm = "[object Float64Array]", hm = "[object Int8Array]", gm = "[object Int16Array]", _m = "[object Int32Array]", vm = "[object Uint8Array]", ym = "[object Uint8ClampedArray]", bm = "[object Uint16Array]", xm = "[object Uint32Array]", Sm = {};
Sm[pm] = Sm[mm] = Sm[hm] = Sm[gm] = Sm[_m] = Sm[vm] = Sm[ym] = Sm[bm] = Sm[xm] = !0, Sm[Qp] = Sm[$p] = Sm[dm] = Sm[em] = Sm[fm] = Sm[tm] = Sm[nm] = Sm[rm] = Sm[im] = Sm[am] = Sm[om] = Sm[sm] = Sm[cm] = Sm[lm] = Sm[um] = !1;
function Cm(e) {
	return Tf(e) && Ip(e.length) && !!Sm[wf(e)];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseUnary.js
function wm(e) {
	return function(t) {
		return e(t);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nodeUtil.js
var Tm = typeof exports == "object" && exports && !exports.nodeType && exports, Em = Tm && typeof module == "object" && module && !module.nodeType && module, Dm = Em && Em.exports === Tm && uf.process, Om = function() {
	try {
		return Em && Em.require && Em.require("util").types || Dm && Dm.binding && Dm.binding("util");
	} catch {}
}(), km = Om && Om.isTypedArray, Am = km ? wm(km) : Cm, jm = Object.prototype.hasOwnProperty;
function Mm(e, t) {
	var n = kf(e), r = !n && Kp(e), i = !n && !r && Zp(e), a = !n && !r && !i && Am(e), o = n || r || i || a, s = o ? Bp(e.length, String) : [], c = s.length;
	for (var l in e) (t || jm.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || Dp(l, c))) && s.push(l);
	return s;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_overArg.js
function Nm(e, t) {
	return function(n) {
		return e(t(n));
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nativeKeys.js
var Pm = Nm(Object.keys, Object), Fm = Object.prototype.hasOwnProperty;
function Im(e) {
	if (!zp(e)) return Pm(e);
	var t = [];
	for (var n in Object(e)) Fm.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/keys.js
function Lm(e) {
	return Lp(e) ? Mm(e) : Im(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nativeKeysIn.js
function Rm(e) {
	var t = [];
	if (e != null) for (var n in Object(e)) t.push(n);
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseKeysIn.js
var zm = Object.prototype.hasOwnProperty;
function Bm(e) {
	if (!Rf(e)) return Rm(e);
	var t = zp(e), n = [];
	for (var r in e) r == "constructor" && (t || !zm.call(e, r)) || n.push(r);
	return n;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/keysIn.js
function Vm(e) {
	return Lp(e) ? Mm(e, !0) : Bm(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isKey.js
var Hm = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Um = /^\w*$/;
function Wm(e, t) {
	if (kf(e)) return !1;
	var n = typeof e;
	return n == "number" || n == "symbol" || n == "boolean" || e == null || Df(e) ? !0 : Um.test(e) || !Hm.test(e) || t != null && e in Object(t);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nativeCreate.js
var Gm = dp(Object, "create");
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashClear.js
function Km() {
	this.__data__ = Gm ? Gm(null) : {}, this.size = 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashDelete.js
function qm(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= +!!t, t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashGet.js
var Jm = "__lodash_hash_undefined__", Ym = Object.prototype.hasOwnProperty;
function Xm(e) {
	var t = this.__data__;
	if (Gm) {
		var n = t[e];
		return n === Jm ? void 0 : n;
	}
	return Ym.call(t, e) ? t[e] : void 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashHas.js
var Zm = Object.prototype.hasOwnProperty;
function Qm(e) {
	var t = this.__data__;
	return Gm ? t[e] !== void 0 : Zm.call(t, e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashSet.js
var $m = "__lodash_hash_undefined__";
function eh(e, t) {
	var n = this.__data__;
	return this.size += +!this.has(e), n[e] = Gm && t === void 0 ? $m : t, this;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Hash.js
function th(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
th.prototype.clear = Km, th.prototype.delete = qm, th.prototype.get = Xm, th.prototype.has = Qm, th.prototype.set = eh;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheClear.js
function nh() {
	this.__data__ = [], this.size = 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_assocIndexOf.js
function rh(e, t) {
	for (var n = e.length; n--;) if (kp(e[n][0], t)) return n;
	return -1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheDelete.js
var ih = Array.prototype.splice;
function ah(e) {
	var t = this.__data__, n = rh(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : ih.call(t, n, 1), --this.size, !0);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheGet.js
function oh(e) {
	var t = this.__data__, n = rh(t, e);
	return n < 0 ? void 0 : t[n][1];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheHas.js
function sh(e) {
	return rh(this.__data__, e) > -1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheSet.js
function ch(e, t) {
	var n = this.__data__, r = rh(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_ListCache.js
function lh(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
lh.prototype.clear = nh, lh.prototype.delete = ah, lh.prototype.get = oh, lh.prototype.has = sh, lh.prototype.set = ch;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Map.js
var uh = dp(ff, "Map");
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheClear.js
function dh() {
	this.size = 0, this.__data__ = {
		hash: new th(),
		map: new (uh || lh)(),
		string: new th()
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isKeyable.js
function fh(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getMapData.js
function ph(e, t) {
	var n = e.__data__;
	return fh(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheDelete.js
function mh(e) {
	var t = ph(this, e).delete(e);
	return this.size -= +!!t, t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheGet.js
function hh(e) {
	return ph(this, e).get(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheHas.js
function gh(e) {
	return ph(this, e).has(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheSet.js
function _h(e, t) {
	var n = ph(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_MapCache.js
function vh(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
vh.prototype.clear = dh, vh.prototype.delete = mh, vh.prototype.get = hh, vh.prototype.has = gh, vh.prototype.set = _h;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/memoize.js
var yh = "Expected a function";
function bh(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(yh);
	var n = function() {
		var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	};
	return n.cache = new (bh.Cache || vh)(), n;
}
bh.Cache = vh;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_memoizeCapped.js
var xh = 500;
function Sh(e) {
	var t = bh(e, function(e) {
		return n.size === xh && n.clear(), e;
	}), n = t.cache;
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stringToPath.js
var Ch = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, wh = /\\(\\)?/g, Th = Sh(function(e) {
	var t = [];
	return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ch, function(e, n, r, i) {
		t.push(r ? i.replace(wh, "$1") : n || e);
	}), t;
});
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/toString.js
function Eh(e) {
	return e == null ? "" : Nf(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_castPath.js
function Dh(e, t) {
	return kf(e) ? e : Wm(e, t) ? [e] : Th(Eh(e));
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_toKey.js
var Oh = Infinity;
function kh(e) {
	if (typeof e == "string" || Df(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -Oh ? "-0" : t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseGet.js
function Ah(e, t) {
	t = Dh(t, e);
	for (var n = 0, r = t.length; e != null && n < r;) e = e[kh(t[n++])];
	return n && n == r ? e : void 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayPush.js
function jh(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isFlattenable.js
var Mh = pf ? pf.isConcatSpreadable : void 0;
function Nh(e) {
	return kf(e) || Kp(e) || !!(Mh && e && e[Mh]);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseFlatten.js
function Ph(e, t, n, r, i) {
	var a = -1, o = e.length;
	for (n ||= Nh, i ||= []; ++a < o;) {
		var s = e[a];
		t > 0 && n(s) ? t > 1 ? Ph(s, t - 1, n, r, i) : jh(i, s) : r || (i[i.length] = s);
	}
	return i;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/flatten.js
function Fh(e) {
	return e != null && e.length ? Ph(e, 1) : [];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_flatRest.js
function Ih(e) {
	return Cp(Pp(e, void 0, Fh), e + "");
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getPrototype.js
var Lh = Nm(Object.getPrototypeOf, Object), Rh = "[object Object]", zh = Function.prototype, Bh = Object.prototype, Vh = zh.toString, Hh = Bh.hasOwnProperty, Uh = Vh.call(Object);
function Wh(e) {
	if (!Tf(e) || wf(e) != Rh) return !1;
	var t = Lh(e);
	if (t === null) return !0;
	var n = Hh.call(t, "constructor") && t.constructor;
	return typeof n == "function" && n instanceof n && Vh.call(n) == Uh;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseSlice.js
function Gh(e, t, n) {
	var r = -1, i = e.length;
	t < 0 && (t = -t > i ? 0 : i + t), n = n > i ? i : n, n < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
	for (var a = Array(i); ++r < i;) a[r] = e[r + t];
	return a;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_castSlice.js
function Kh(e, t, n) {
	var r = e.length;
	return n = n === void 0 ? r : n, !t && n >= r ? e : Gh(e, t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hasUnicode.js
var qh = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
function Jh(e) {
	return qh.test(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_asciiToArray.js
function Yh(e) {
	return e.split("");
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_unicodeToArray.js
var Xh = "\\ud800-\\udfff", Zh = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", Qh = "\\ufe0e\\ufe0f", $h = "[" + Xh + "]", eg = "[" + Zh + "]", tg = "\\ud83c[\\udffb-\\udfff]", ng = "(?:" + eg + "|" + tg + ")", rg = "[^" + Xh + "]", ig = "(?:\\ud83c[\\udde6-\\uddff]){2}", ag = "[\\ud800-\\udbff][\\udc00-\\udfff]", og = "\\u200d", sg = ng + "?", cg = "[" + Qh + "]?", lg = "(?:" + og + "(?:" + [
	rg,
	ig,
	ag
].join("|") + ")" + cg + sg + ")*", ug = cg + sg + lg, dg = "(?:" + [
	rg + eg + "?",
	eg,
	ig,
	ag,
	$h
].join("|") + ")", fg = RegExp(tg + "(?=" + tg + ")|" + dg + ug, "g");
function pg(e) {
	return e.match(fg) || [];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stringToArray.js
function mg(e) {
	return Jh(e) ? pg(e) : Yh(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_createCaseFirst.js
function hg(e) {
	return function(t) {
		t = Eh(t);
		var n = Jh(t) ? mg(t) : void 0, r = n ? n[0] : t.charAt(0), i = n ? Kh(n, 1).join("") : t.slice(1);
		return r[e]() + i;
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/upperFirst.js
var gg = hg("toUpperCase");
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/capitalize.js
function _g(e) {
	return gg(Eh(e).toLowerCase());
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackClear.js
function vg() {
	this.__data__ = new lh(), this.size = 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackDelete.js
function yg(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackGet.js
function bg(e) {
	return this.__data__.get(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackHas.js
function xg(e) {
	return this.__data__.has(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackSet.js
var Sg = 200;
function Cg(e, t) {
	var n = this.__data__;
	if (n instanceof lh) {
		var r = n.__data__;
		if (!uh || r.length < Sg - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new vh(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Stack.js
function wg(e) {
	var t = this.__data__ = new lh(e);
	this.size = t.size;
}
wg.prototype.clear = vg, wg.prototype.delete = yg, wg.prototype.get = bg, wg.prototype.has = xg, wg.prototype.set = Cg;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseAssign.js
function Tg(e, t) {
	return e && Mp(t, Lm(t), e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseAssignIn.js
function Eg(e, t) {
	return e && Mp(t, Vm(t), e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneBuffer.js
var Dg = typeof exports == "object" && exports && !exports.nodeType && exports, Og = Dg && typeof module == "object" && module && !module.nodeType && module, kg = Og && Og.exports === Dg ? ff.Buffer : void 0, Ag = kg ? kg.allocUnsafe : void 0;
function jg(e, t) {
	if (t) return e.slice();
	var n = e.length, r = Ag ? Ag(n) : new e.constructor(n);
	return e.copy(r), r;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayFilter.js
function Mg(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/stubArray.js
function Ng() {
	return [];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getSymbols.js
var Pg = Object.prototype.propertyIsEnumerable, Fg = Object.getOwnPropertySymbols, Ig = Fg ? function(e) {
	return e == null ? [] : (e = Object(e), Mg(Fg(e), function(t) {
		return Pg.call(e, t);
	}));
} : Ng;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copySymbols.js
function Lg(e, t) {
	return Mp(e, Ig(e), t);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getSymbolsIn.js
var Rg = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) jh(t, Ig(e)), e = Lh(e);
	return t;
} : Ng;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copySymbolsIn.js
function zg(e, t) {
	return Mp(e, Rg(e), t);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseGetAllKeys.js
function Bg(e, t, n) {
	var r = t(e);
	return kf(e) ? r : jh(r, n(e));
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getAllKeys.js
function Vg(e) {
	return Bg(e, Lm, Ig);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getAllKeysIn.js
function Hg(e) {
	return Bg(e, Vm, Rg);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_DataView.js
var Ug = dp(ff, "DataView"), Wg = dp(ff, "Promise"), Gg = dp(ff, "Set"), Kg = "[object Map]", qg = "[object Object]", Jg = "[object Promise]", Yg = "[object Set]", Xg = "[object WeakMap]", Zg = "[object DataView]", Qg = tp(Ug), $g = tp(uh), e_ = tp(Wg), t_ = tp(Gg), n_ = tp(fp), r_ = wf;
(Ug && r_(new Ug(/* @__PURE__ */ new ArrayBuffer(1))) != Zg || uh && r_(new uh()) != Kg || Wg && r_(Wg.resolve()) != Jg || Gg && r_(new Gg()) != Yg || fp && r_(new fp()) != Xg) && (r_ = function(e) {
	var t = wf(e), n = t == qg ? e.constructor : void 0, r = n ? tp(n) : "";
	if (r) switch (r) {
		case Qg: return Zg;
		case $g: return Kg;
		case e_: return Jg;
		case t_: return Yg;
		case n_: return Xg;
	}
	return t;
});
var i_ = r_, a_ = Object.prototype.hasOwnProperty;
function o_(e) {
	var t = e.length, n = new e.constructor(t);
	return t && typeof e[0] == "string" && a_.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Uint8Array.js
var s_ = ff.Uint8Array;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneArrayBuffer.js
function c_(e) {
	var t = new e.constructor(e.byteLength);
	return new s_(t).set(new s_(e)), t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneDataView.js
function l_(e, t) {
	var n = t ? c_(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.byteLength);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneRegExp.js
var u_ = /\w*$/;
function d_(e) {
	var t = new e.constructor(e.source, u_.exec(e));
	return t.lastIndex = e.lastIndex, t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneSymbol.js
var f_ = pf ? pf.prototype : void 0, p_ = f_ ? f_.valueOf : void 0;
function m_(e) {
	return p_ ? Object(p_.call(e)) : {};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneTypedArray.js
function h_(e, t) {
	var n = t ? c_(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.length);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_initCloneByTag.js
var g_ = "[object Boolean]", __ = "[object Date]", v_ = "[object Map]", y_ = "[object Number]", b_ = "[object RegExp]", x_ = "[object Set]", S_ = "[object String]", C_ = "[object Symbol]", w_ = "[object ArrayBuffer]", T_ = "[object DataView]", E_ = "[object Float32Array]", D_ = "[object Float64Array]", O_ = "[object Int8Array]", k_ = "[object Int16Array]", A_ = "[object Int32Array]", j_ = "[object Uint8Array]", M_ = "[object Uint8ClampedArray]", N_ = "[object Uint16Array]", P_ = "[object Uint32Array]";
function F_(e, t, n) {
	var r = e.constructor;
	switch (t) {
		case w_: return c_(e);
		case g_:
		case __: return new r(+e);
		case T_: return l_(e, n);
		case E_:
		case D_:
		case O_:
		case k_:
		case A_:
		case j_:
		case M_:
		case N_:
		case P_: return h_(e, n);
		case v_: return new r();
		case y_:
		case S_: return new r(e);
		case b_: return d_(e);
		case x_: return new r();
		case C_: return m_(e);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_initCloneObject.js
function I_(e) {
	return typeof e.constructor == "function" && !zp(e) ? mp(Lh(e)) : {};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsMap.js
var L_ = "[object Map]";
function R_(e) {
	return Tf(e) && i_(e) == L_;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isMap.js
var z_ = Om && Om.isMap, B_ = z_ ? wm(z_) : R_, V_ = "[object Set]";
function H_(e) {
	return Tf(e) && i_(e) == V_;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isSet.js
var U_ = Om && Om.isSet, W_ = U_ ? wm(U_) : H_, G_ = 1, K_ = 2, q_ = 4, J_ = "[object Arguments]", Y_ = "[object Array]", X_ = "[object Boolean]", Z_ = "[object Date]", Q_ = "[object Error]", $_ = "[object Function]", ev = "[object GeneratorFunction]", tv = "[object Map]", nv = "[object Number]", rv = "[object Object]", iv = "[object RegExp]", av = "[object Set]", ov = "[object String]", sv = "[object Symbol]", cv = "[object WeakMap]", lv = "[object ArrayBuffer]", uv = "[object DataView]", dv = "[object Float32Array]", fv = "[object Float64Array]", pv = "[object Int8Array]", mv = "[object Int16Array]", hv = "[object Int32Array]", gv = "[object Uint8Array]", _v = "[object Uint8ClampedArray]", vv = "[object Uint16Array]", yv = "[object Uint32Array]", bv = {};
bv[J_] = bv[Y_] = bv[lv] = bv[uv] = bv[X_] = bv[Z_] = bv[dv] = bv[fv] = bv[pv] = bv[mv] = bv[hv] = bv[tv] = bv[nv] = bv[rv] = bv[iv] = bv[av] = bv[ov] = bv[sv] = bv[gv] = bv[_v] = bv[vv] = bv[yv] = !0, bv[Q_] = bv[$_] = bv[cv] = !1;
function xv(e, t, n, r, i, a) {
	var o, s = t & G_, c = t & K_, l = t & q_;
	if (n && (o = i ? n(e, r, i, a) : n(e)), o !== void 0) return o;
	if (!Rf(e)) return e;
	var u = kf(e);
	if (u) {
		if (o = o_(e), !s) return gp(e, o);
	} else {
		var d = i_(e), f = d == $_ || d == ev;
		if (Zp(e)) return jg(e, s);
		if (d == rv || d == J_ || f && !i) {
			if (o = c || f ? {} : I_(e), !s) return c ? zg(e, Eg(o, e)) : Lg(e, Tg(o, e));
		} else {
			if (!bv[d]) return i ? e : {};
			o = F_(e, d, s);
		}
	}
	a ||= new wg();
	var p = a.get(e);
	if (p) return p;
	a.set(e, o), W_(e) ? e.forEach(function(r) {
		o.add(xv(r, t, n, r, e, a));
	}) : B_(e) && e.forEach(function(r, i) {
		o.set(i, xv(r, t, n, i, e, a));
	});
	var m = u ? void 0 : (l ? c ? Hg : Vg : c ? Vm : Lm)(e);
	return wp(m || e, function(r, i) {
		m && (i = r, r = e[i]), jp(o, i, xv(r, t, n, i, e, a));
	}), o;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_setCacheAdd.js
var Sv = "__lodash_hash_undefined__";
function Cv(e) {
	return this.__data__.set(e, Sv), this;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_setCacheHas.js
function wv(e) {
	return this.__data__.has(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_SetCache.js
function Tv(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.__data__ = new vh(); ++t < n;) this.add(e[t]);
}
Tv.prototype.add = Tv.prototype.push = Cv, Tv.prototype.has = wv;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arraySome.js
function Ev(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
	return !1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cacheHas.js
function Dv(e, t) {
	return e.has(t);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_equalArrays.js
var Ov = 1, kv = 2;
function Av(e, t, n, r, i, a) {
	var o = n & Ov, s = e.length, c = t.length;
	if (s != c && !(o && c > s)) return !1;
	var l = a.get(e), u = a.get(t);
	if (l && u) return l == t && u == e;
	var d = -1, f = !0, p = n & kv ? new Tv() : void 0;
	for (a.set(e, t), a.set(t, e); ++d < s;) {
		var m = e[d], h = t[d];
		if (r) var g = o ? r(h, m, d, t, e, a) : r(m, h, d, e, t, a);
		if (g !== void 0) {
			if (g) continue;
			f = !1;
			break;
		}
		if (p) {
			if (!Ev(t, function(e, t) {
				if (!Dv(p, t) && (m === e || i(m, e, n, r, a))) return p.push(t);
			})) {
				f = !1;
				break;
			}
		} else if (!(m === h || i(m, h, n, r, a))) {
			f = !1;
			break;
		}
	}
	return a.delete(e), a.delete(t), f;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapToArray.js
function jv(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e, r) {
		n[++t] = [r, e];
	}), n;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_setToArray.js
function Mv(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e) {
		n[++t] = e;
	}), n;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_equalByTag.js
var Nv = 1, Pv = 2, Fv = "[object Boolean]", Iv = "[object Date]", Lv = "[object Error]", Rv = "[object Map]", zv = "[object Number]", Bv = "[object RegExp]", Vv = "[object Set]", Hv = "[object String]", Uv = "[object Symbol]", Wv = "[object ArrayBuffer]", Gv = "[object DataView]", Kv = pf ? pf.prototype : void 0, qv = Kv ? Kv.valueOf : void 0;
function Jv(e, t, n, r, i, a, o) {
	switch (n) {
		case Gv:
			if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
			e = e.buffer, t = t.buffer;
		case Wv: return !(e.byteLength != t.byteLength || !a(new s_(e), new s_(t)));
		case Fv:
		case Iv:
		case zv: return kp(+e, +t);
		case Lv: return e.name == t.name && e.message == t.message;
		case Bv:
		case Hv: return e == t + "";
		case Rv: var s = jv;
		case Vv:
			var c = r & Nv;
			if (s ||= Mv, e.size != t.size && !c) return !1;
			var l = o.get(e);
			if (l) return l == t;
			r |= Pv, o.set(e, t);
			var u = Av(s(e), s(t), r, i, a, o);
			return o.delete(e), u;
		case Uv: if (qv) return qv.call(e) == qv.call(t);
	}
	return !1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_equalObjects.js
var Yv = 1, Xv = Object.prototype.hasOwnProperty;
function Zv(e, t, n, r, i, a) {
	var o = n & Yv, s = Vg(e), c = s.length;
	if (c != Vg(t).length && !o) return !1;
	for (var l = c; l--;) {
		var u = s[l];
		if (!(o ? u in t : Xv.call(t, u))) return !1;
	}
	var d = a.get(e), f = a.get(t);
	if (d && f) return d == t && f == e;
	var p = !0;
	a.set(e, t), a.set(t, e);
	for (var m = o; ++l < c;) {
		u = s[l];
		var h = e[u], g = t[u];
		if (r) var _ = o ? r(g, h, u, t, e, a) : r(h, g, u, e, t, a);
		if (!(_ === void 0 ? h === g || i(h, g, n, r, a) : _)) {
			p = !1;
			break;
		}
		m ||= u == "constructor";
	}
	if (p && !m) {
		var v = e.constructor, y = t.constructor;
		v != y && "constructor" in e && "constructor" in t && !(typeof v == "function" && v instanceof v && typeof y == "function" && y instanceof y) && (p = !1);
	}
	return a.delete(e), a.delete(t), p;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsEqualDeep.js
var Qv = 1, $v = "[object Arguments]", ey = "[object Array]", ty = "[object Object]", ny = Object.prototype.hasOwnProperty;
function ry(e, t, n, r, i, a) {
	var o = kf(e), s = kf(t), c = o ? ey : i_(e), l = s ? ey : i_(t);
	c = c == $v ? ty : c, l = l == $v ? ty : l;
	var u = c == ty, d = l == ty, f = c == l;
	if (f && Zp(e)) {
		if (!Zp(t)) return !1;
		o = !0, u = !1;
	}
	if (f && !u) return a ||= new wg(), o || Am(e) ? Av(e, t, n, r, i, a) : Jv(e, t, c, n, r, i, a);
	if (!(n & Qv)) {
		var p = u && ny.call(e, "__wrapped__"), m = d && ny.call(t, "__wrapped__");
		if (p || m) {
			var h = p ? e.value() : e, g = m ? t.value() : t;
			return a ||= new wg(), i(h, g, n, r, a);
		}
	}
	return f ? (a ||= new wg(), Zv(e, t, n, r, i, a)) : !1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsEqual.js
function iy(e, t, n, r, i) {
	return e === t ? !0 : e == null || t == null || !Tf(e) && !Tf(t) ? e !== e && t !== t : ry(e, t, n, r, iy, i);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/now.js
var ay = function() {
	return ff.Date.now();
}, oy = "Expected a function", sy = Math.max, cy = Math.min;
function ly(e, t, n) {
	var r, i, a, o, s, c, l = 0, u = !1, d = !1, f = !0;
	if (typeof e != "function") throw TypeError(oy);
	t = Wf(t) || 0, Rf(n) && (u = !!n.leading, d = "maxWait" in n, a = d ? sy(Wf(n.maxWait) || 0, t) : a, f = "trailing" in n ? !!n.trailing : f);
	function p(t) {
		var n = r, a = i;
		return r = i = void 0, l = t, o = e.apply(a, n), o;
	}
	function m(e) {
		return l = e, s = setTimeout(_, t), u ? p(e) : o;
	}
	function h(e) {
		var n = e - c, r = e - l, i = t - n;
		return d ? cy(i, a - r) : i;
	}
	function g(e) {
		var n = e - c, r = e - l;
		return c === void 0 || n >= t || n < 0 || d && r >= a;
	}
	function _() {
		var e = ay();
		if (g(e)) return v(e);
		s = setTimeout(_, h(e));
	}
	function v(e) {
		return s = void 0, f && r ? p(e) : (r = i = void 0, o);
	}
	function y() {
		s !== void 0 && clearTimeout(s), l = 0, r = c = i = s = void 0;
	}
	function b() {
		return s === void 0 ? o : v(ay());
	}
	function x() {
		var e = ay(), n = g(e);
		if (r = arguments, i = this, c = e, n) {
			if (s === void 0) return m(c);
			if (d) return clearTimeout(s), s = setTimeout(_, t), p(c);
		}
		return s === void 0 && (s = setTimeout(_, t)), o;
	}
	return x.cancel = y, x.flush = b, x;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/last.js
function uy(e) {
	var t = e == null ? 0 : e.length;
	return t ? e[t - 1] : void 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_parent.js
function dy(e, t) {
	return t.length < 2 ? e : Ah(e, Gh(t, 0, -1));
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isEqual.js
function fy(e, t) {
	return iy(e, t);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseUnset.js
var py = Object.prototype.hasOwnProperty;
function my(e, t) {
	t = Dh(t, e);
	var n = -1, r = t.length;
	if (!r) return !0;
	for (; ++n < r;) {
		var i = kh(t[n]);
		if (i === "__proto__" && !py.call(e, "__proto__") || (i === "constructor" || i === "prototype") && n < r - 1) return !1;
	}
	var a = dy(e, t);
	return a == null || delete a[kh(uy(t))];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_customOmitClone.js
function hy(e) {
	return Wh(e) ? void 0 : e;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/omit.js
var gy = 1, _y = 2, vy = 4, yy = Ih(function(e, t) {
	var n = {};
	if (e == null) return n;
	var r = !1;
	t = Of(t, function(t) {
		return t = Dh(t, e), r ||= t.length > 1, t;
	}), Mp(e, Hg(e), n), r && (n = xv(n, gy | _y | vy, hy));
	for (var i = t.length; i--;) my(n, t[i]);
	return n;
}), by = "Expected a function";
function xy(e, t, n) {
	var r = !0, i = !0;
	if (typeof e != "function") throw TypeError(by);
	return Rf(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), ly(e, t, {
		leading: r,
		maxWait: t,
		trailing: i
	});
}
var Sy = { seekBar: "_seekBar_16dv7_14" };
//#endregion
//#region src/audio/SeekBar/SeekBar.tsx
function Cy({ value: e = 0, className: t, ...n }) {
	let { translate: r } = B(), [i, a] = T(e), o = S(() => xy(a, 10), []);
	return _(() => {
		o(e);
	}, [e, o]), /* @__PURE__ */ (0, z.jsx)("input", {
		type: "range",
		className: (0, R.default)(Sy.seekBar, t),
		onMouseDown: (e) => e.stopPropagation(),
		min: 0,
		max: 100,
		value: i,
		step: 1,
		style: { "--fillTo": i / 100 },
		"aria-label": r("a11y|seek_bar_label"),
		...n
	});
}
var wy = {
	avatarWithDetails: "_avatarWithDetails_10imw_8",
	title: "_title_10imw_17",
	details: "_details_10imw_28"
}, Ty = { flex: "_flex_4dswl_9" };
//#endregion
//#region src/core/utils/Flex/Flex.ts
function V({ as: e = "div", display: t = "flex", direction: n = "row", align: r = "start", justify: i = "start", gap: a = "0", wrap: s = "nowrap", className: c, children: l, ...u }) {
	let d = S(() => ({
		"--mx-flex-display": t,
		"--mx-flex-direction": n,
		"--mx-flex-align": r,
		"--mx-flex-justify": i,
		"--mx-flex-gap": a,
		"--mx-flex-wrap": s
	}), [
		r,
		n,
		t,
		a,
		i,
		s
	]);
	return o.createElement(e, {
		...u,
		className: (0, R.default)(Ty.flex, c),
		style: d
	}, l);
}
//#endregion
//#region src/core/AvatarWithDetails/AvatarWithDetails.tsx
function Ey({ as: e, className: t, details: n, avatar: r, title: i, ...a }) {
	return /* @__PURE__ */ (0, z.jsxs)(e || "div", {
		className: (0, R.default)(wy.avatarWithDetails, t),
		...a,
		children: [r, /* @__PURE__ */ (0, z.jsxs)(V, {
			direction: "column",
			children: [/* @__PURE__ */ (0, z.jsx)("span", {
				className: wy.title,
				children: i
			}), /* @__PURE__ */ (0, z.jsx)("span", {
				className: wy.details,
				children: n
			})]
		})]
	});
}
//#endregion
//#region src/core/viewmodel/Disposables.ts
var Dy = class {
	disposables = [];
	_isDisposed = !1;
	dispose() {
		if (!this.isDisposed) {
			this._isDisposed = !0;
			for (let e of this.disposables) typeof e == "function" ? e() : e.dispose();
		}
	}
	track(e) {
		return this.throwIfDisposed(), this.disposables.push(e), e;
	}
	trackListener(e, t, n) {
		this.throwIfDisposed(), e.on(t, n), this.track(() => {
			e.off(t, n);
		});
	}
	throwIfDisposed() {
		if (this.isDisposed) throw Error("Disposable is already disposed");
	}
	get isDisposed() {
		return this._isDisposed;
	}
}, Oy = class {
	snapshot;
	emit;
	constructor(e, t) {
		this.snapshot = e, this.emit = t;
	}
	set(e) {
		this.snapshot = e, this.emit();
	}
	merge(e) {
		Object.keys(e).some((t) => !Object.is(e[t], this.snapshot[t])) && (this.snapshot = {
			...this.snapshot,
			...e
		}, this.emit());
	}
	get current() {
		return this.snapshot;
	}
}, ky = class {
	listeners = /* @__PURE__ */ new Set();
	add = (e) => (this.listeners.add(e), () => {
		this.listeners.delete(e);
	});
	emit = () => {
		for (let e of this.listeners) e();
	};
}, Ay = class {
	subs;
	snapshot;
	props;
	disposables = new Dy();
	constructor(e, t) {
		this.props = e, this.subs = new ky(), this.snapshot = new Oy(t, () => {
			this.subs.emit();
		});
	}
	subscribe = (e) => this.subs.add(e);
	getSnapshot = () => this.snapshot.current;
	dispose() {
		this.disposables.dispose();
	}
	get isDisposed() {
		return this.disposables.isDisposed;
	}
}, jy = class {
	snapshot;
	constructor(e) {
		this.snapshot = e;
	}
	getSnapshot = () => this.snapshot;
	subscribe(e) {
		return () => void 0;
	}
};
//#endregion
//#region src/core/viewmodel/useCreateAutoDisposedViewModel.ts
function My(e) {
	let [t, n] = T(e);
	return _(() => {
		let r = t;
		if (t.isDisposed) {
			let t = e();
			r = t, n(t);
		}
		return () => {
			r.dispose();
		};
	}, []), t;
}
//#endregion
//#region src/core/viewmodel/useMockedViewModel.ts
function Ny(e, t) {
	return S(() => {
		let n = new jy(e);
		return Object.assign(n, t), n;
	}, [e, t]);
}
//#endregion
//#region src/core/viewmodel/useViewModel.ts
function H(e) {
	return E(e.subscribe, e.getSnapshot, e.getSnapshot);
}
//#endregion
//#region src/core/MemberAvatar/MemberAvatarView.tsx
function Py(e) {
	let { name: t, id: n, url: r, size: i } = H(e.vm);
	return /* @__PURE__ */ (0, z.jsx)(D, {
		className: e.classNames,
		name: t,
		id: n,
		src: r,
		size: i
	});
}
//#endregion
//#region ../../node_modules/.pnpm/matrix-web-i18n@3.6.0_supports-color@10.2.2/node_modules/matrix-web-i18n/lib/utils.js
function Fy(e) {
	return e.toLowerCase().replace("_", "-");
}
function Iy(e) {
	let t = [], n = Fy(e), r = n.split("-");
	return r.length === 2 && r[0] === r[1] ? t.push(r[0]) : (t.push(n), r.length === 2 && t.push(r[0])), t;
}
//#endregion
//#region ../../node_modules/.pnpm/matrix-web-i18n@3.6.0_supports-color@10.2.2/node_modules/matrix-web-i18n/lib/index.js
var Ly = "|", Ry = /* @__PURE__ */ I(((e, t) => {
	var n = Object.prototype.hasOwnProperty, r = Object.prototype.toString, i = Object.defineProperty, a = Object.getOwnPropertyDescriptor, o = function(e) {
		return typeof Array.isArray == "function" ? Array.isArray(e) : r.call(e) === "[object Array]";
	}, s = function(e) {
		if (!e || r.call(e) !== "[object Object]") return !1;
		var t = n.call(e, "constructor"), i = e.constructor && e.constructor.prototype && n.call(e.constructor.prototype, "isPrototypeOf");
		if (e.constructor && !t && !i) return !1;
		for (var a in e);
		return a === void 0 || n.call(e, a);
	}, c = function(e, t) {
		i && t.name === "__proto__" ? i(e, t.name, {
			enumerable: !0,
			configurable: !0,
			value: t.newValue,
			writable: !0
		}) : e[t.name] = t.newValue;
	}, l = function(e, t) {
		if (t === "__proto__") {
			if (!n.call(e, t)) return;
			if (a) return a(e, t).value;
		}
		return e[t];
	};
	t.exports = function e() {
		var t, n, r, i, a, u, d = arguments[0], f = 1, p = arguments.length, m = !1;
		for (typeof d == "boolean" && (m = d, d = arguments[1] || {}, f = 2), (d == null || typeof d != "object" && typeof d != "function") && (d = {}); f < p; ++f) if (t = arguments[f], t != null) for (n in t) r = l(d, n), i = l(t, n), d !== i && (m && i && (s(i) || (a = o(i))) ? (a ? (a = !1, u = r && o(r) ? r : []) : u = r && s(r) ? r : {}, c(d, {
			name: n,
			newValue: e(m, u, i)
		})) : i !== void 0 && c(d, {
			name: n,
			newValue: i
		}));
		return d;
	};
})), zy = /* @__PURE__ */ I(((e, t) => {
	t.exports = function() {
		if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
		if (typeof Symbol.iterator == "symbol") return !0;
		var e = {}, t = Symbol("test"), n = Object(t);
		if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]") return !1;
		var r = 42;
		for (var i in e[t] = r, e) return !1;
		if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0) return !1;
		var a = Object.getOwnPropertySymbols(e);
		if (a.length !== 1 || a[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
		if (typeof Object.getOwnPropertyDescriptor == "function") {
			var o = Object.getOwnPropertyDescriptor(e, t);
			if (o.value !== r || o.enumerable !== !0) return !1;
		}
		return !0;
	};
})), By = /* @__PURE__ */ I(((e, t) => {
	var n = zy();
	t.exports = function() {
		return n() && !!Symbol.toStringTag;
	};
})), Vy = /* @__PURE__ */ I(((e, t) => {
	t.exports = Object;
})), Hy = /* @__PURE__ */ I(((e, t) => {
	t.exports = Error;
})), Uy = /* @__PURE__ */ I(((e, t) => {
	t.exports = EvalError;
})), Wy = /* @__PURE__ */ I(((e, t) => {
	t.exports = RangeError;
})), Gy = /* @__PURE__ */ I(((e, t) => {
	t.exports = ReferenceError;
})), Ky = /* @__PURE__ */ I(((e, t) => {
	t.exports = SyntaxError;
})), qy = /* @__PURE__ */ I(((e, t) => {
	t.exports = TypeError;
})), Jy = /* @__PURE__ */ I(((e, t) => {
	t.exports = URIError;
})), Yy = /* @__PURE__ */ I(((e, t) => {
	t.exports = Math.abs;
})), Xy = /* @__PURE__ */ I(((e, t) => {
	t.exports = Math.floor;
})), Zy = /* @__PURE__ */ I(((e, t) => {
	t.exports = Math.max;
})), Qy = /* @__PURE__ */ I(((e, t) => {
	t.exports = Math.min;
})), $y = /* @__PURE__ */ I(((e, t) => {
	t.exports = Math.pow;
})), eb = /* @__PURE__ */ I(((e, t) => {
	t.exports = Math.round;
})), tb = /* @__PURE__ */ I(((e, t) => {
	t.exports = Number.isNaN || function(e) {
		return e !== e;
	};
})), nb = /* @__PURE__ */ I(((e, t) => {
	var n = tb();
	t.exports = function(e) {
		return n(e) || e === 0 ? e : e < 0 ? -1 : 1;
	};
})), rb = /* @__PURE__ */ I(((e, t) => {
	t.exports = Object.getOwnPropertyDescriptor;
})), ib = /* @__PURE__ */ I(((e, t) => {
	var n = rb();
	if (n) try {
		n([], "length");
	} catch {
		n = null;
	}
	t.exports = n;
})), ab = /* @__PURE__ */ I(((e, t) => {
	var n = Object.defineProperty || !1;
	if (n) try {
		n({}, "a", { value: 1 });
	} catch {
		n = !1;
	}
	t.exports = n;
})), ob = /* @__PURE__ */ I(((e, t) => {
	var n = typeof Symbol < "u" && Symbol, r = zy();
	t.exports = function() {
		return typeof n != "function" || typeof Symbol != "function" || typeof n("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : r();
	};
})), sb = /* @__PURE__ */ I(((e, t) => {
	t.exports = typeof Reflect < "u" && Reflect.getPrototypeOf || null;
})), cb = /* @__PURE__ */ I(((e, t) => {
	t.exports = Vy().getPrototypeOf || null;
})), lb = /* @__PURE__ */ I(((e, t) => {
	var n = Object.prototype.toString, r = Math.max, i = "[object Function]", a = function(e, t) {
		for (var n = [], r = 0; r < e.length; r += 1) n[r] = e[r];
		for (var i = 0; i < t.length; i += 1) n[i + e.length] = t[i];
		return n;
	}, o = function(e, t) {
		for (var n = [], r = t || 0, i = 0; r < e.length; r += 1, i += 1) n[i] = e[r];
		return n;
	}, s = function(e, t) {
		for (var n = "", r = 0; r < e.length; r += 1) n += e[r], r + 1 < e.length && (n += t);
		return n;
	};
	t.exports = function(e) {
		var t = this;
		if (typeof t != "function" || n.apply(t) !== i) throw TypeError("Function.prototype.bind called on incompatible " + t);
		for (var c = o(arguments, 1), l, u = function() {
			if (this instanceof l) {
				var n = t.apply(this, a(c, arguments));
				return Object(n) === n ? n : this;
			}
			return t.apply(e, a(c, arguments));
		}, d = r(0, t.length - c.length), f = [], p = 0; p < d; p++) f[p] = "$" + p;
		if (l = Function("binder", "return function (" + s(f, ",") + "){ return binder.apply(this,arguments); }")(u), t.prototype) {
			var m = function() {};
			m.prototype = t.prototype, l.prototype = new m(), m.prototype = null;
		}
		return l;
	};
})), ub = /* @__PURE__ */ I(((e, t) => {
	var n = lb();
	t.exports = Function.prototype.bind || n;
})), db = /* @__PURE__ */ I(((e, t) => {
	t.exports = Function.prototype.call;
})), fb = /* @__PURE__ */ I(((e, t) => {
	t.exports = Function.prototype.apply;
})), pb = /* @__PURE__ */ I(((e, t) => {
	t.exports = typeof Reflect < "u" && Reflect && Reflect.apply;
})), mb = /* @__PURE__ */ I(((e, t) => {
	var n = ub(), r = fb(), i = db();
	t.exports = pb() || n.call(i, r);
})), hb = /* @__PURE__ */ I(((e, t) => {
	var n = ub(), r = qy(), i = db(), a = mb();
	t.exports = function(e) {
		if (e.length < 1 || typeof e[0] != "function") throw new r("a function is required");
		return a(n, i, e);
	};
})), gb = /* @__PURE__ */ I(((e, t) => {
	var n = hb(), r = ib(), i;
	try {
		i = [].__proto__ === Array.prototype;
	} catch (e) {
		if (!e || typeof e != "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") throw e;
	}
	var a = !!i && r && r(Object.prototype, "__proto__"), o = Object, s = o.getPrototypeOf;
	t.exports = a && typeof a.get == "function" ? n([a.get]) : typeof s == "function" && function(e) {
		return s(e == null ? e : o(e));
	};
})), _b = /* @__PURE__ */ I(((e, t) => {
	var n = sb(), r = cb(), i = gb();
	t.exports = n ? function(e) {
		return n(e);
	} : r ? function(e) {
		if (!e || typeof e != "object" && typeof e != "function") throw TypeError("getProto: not an object");
		return r(e);
	} : i ? function(e) {
		return i(e);
	} : null;
})), vb = /* @__PURE__ */ I(((e, t) => {
	var n = Function.prototype.call, r = Object.prototype.hasOwnProperty;
	t.exports = ub().call(n, r);
})), yb = /* @__PURE__ */ I(((e, t) => {
	var n, r = Vy(), i = Hy(), a = Uy(), o = Wy(), s = Gy(), c = Ky(), l = qy(), u = Jy(), d = Yy(), f = Xy(), p = Zy(), m = Qy(), h = $y(), g = eb(), _ = nb(), v = Function, y = function(e) {
		try {
			return v("\"use strict\"; return (" + e + ").constructor;")();
		} catch {}
	}, b = ib(), x = ab(), S = function() {
		throw new l();
	}, C = b ? function() {
		try {
			return arguments.callee, S;
		} catch {
			try {
				return b(arguments, "callee").get;
			} catch {
				return S;
			}
		}
	}() : S, w = ob()(), T = _b(), E = cb(), ee = sb(), D = fb(), te = db(), O = {}, k = typeof Uint8Array > "u" || !T ? n : T(Uint8Array), A = {
		__proto__: null,
		"%AggregateError%": typeof AggregateError > "u" ? n : AggregateError,
		"%Array%": Array,
		"%ArrayBuffer%": typeof ArrayBuffer > "u" ? n : ArrayBuffer,
		"%ArrayIteratorPrototype%": w && T ? T([][Symbol.iterator]()) : n,
		"%AsyncFromSyncIteratorPrototype%": n,
		"%AsyncFunction%": O,
		"%AsyncGenerator%": O,
		"%AsyncGeneratorFunction%": O,
		"%AsyncIteratorPrototype%": O,
		"%Atomics%": typeof Atomics > "u" ? n : Atomics,
		"%BigInt%": typeof BigInt > "u" ? n : BigInt,
		"%BigInt64Array%": typeof BigInt64Array > "u" ? n : BigInt64Array,
		"%BigUint64Array%": typeof BigUint64Array > "u" ? n : BigUint64Array,
		"%Boolean%": Boolean,
		"%DataView%": typeof DataView > "u" ? n : DataView,
		"%Date%": Date,
		"%decodeURI%": decodeURI,
		"%decodeURIComponent%": decodeURIComponent,
		"%encodeURI%": encodeURI,
		"%encodeURIComponent%": encodeURIComponent,
		"%Error%": i,
		"%eval%": eval,
		"%EvalError%": a,
		"%Float16Array%": typeof Float16Array > "u" ? n : Float16Array,
		"%Float32Array%": typeof Float32Array > "u" ? n : Float32Array,
		"%Float64Array%": typeof Float64Array > "u" ? n : Float64Array,
		"%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? n : FinalizationRegistry,
		"%Function%": v,
		"%GeneratorFunction%": O,
		"%Int8Array%": typeof Int8Array > "u" ? n : Int8Array,
		"%Int16Array%": typeof Int16Array > "u" ? n : Int16Array,
		"%Int32Array%": typeof Int32Array > "u" ? n : Int32Array,
		"%isFinite%": isFinite,
		"%isNaN%": isNaN,
		"%IteratorPrototype%": w && T ? T(T([][Symbol.iterator]())) : n,
		"%JSON%": typeof JSON == "object" ? JSON : n,
		"%Map%": typeof Map > "u" ? n : Map,
		"%MapIteratorPrototype%": typeof Map > "u" || !w || !T ? n : T((/* @__PURE__ */ new Map())[Symbol.iterator]()),
		"%Math%": Math,
		"%Number%": Number,
		"%Object%": r,
		"%Object.getOwnPropertyDescriptor%": b,
		"%parseFloat%": parseFloat,
		"%parseInt%": parseInt,
		"%Promise%": typeof Promise > "u" ? n : Promise,
		"%Proxy%": typeof Proxy > "u" ? n : Proxy,
		"%RangeError%": o,
		"%ReferenceError%": s,
		"%Reflect%": typeof Reflect > "u" ? n : Reflect,
		"%RegExp%": RegExp,
		"%Set%": typeof Set > "u" ? n : Set,
		"%SetIteratorPrototype%": typeof Set > "u" || !w || !T ? n : T((/* @__PURE__ */ new Set())[Symbol.iterator]()),
		"%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? n : SharedArrayBuffer,
		"%String%": String,
		"%StringIteratorPrototype%": w && T ? T(""[Symbol.iterator]()) : n,
		"%Symbol%": w ? Symbol : n,
		"%SyntaxError%": c,
		"%ThrowTypeError%": C,
		"%TypedArray%": k,
		"%TypeError%": l,
		"%Uint8Array%": typeof Uint8Array > "u" ? n : Uint8Array,
		"%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? n : Uint8ClampedArray,
		"%Uint16Array%": typeof Uint16Array > "u" ? n : Uint16Array,
		"%Uint32Array%": typeof Uint32Array > "u" ? n : Uint32Array,
		"%URIError%": u,
		"%WeakMap%": typeof WeakMap > "u" ? n : WeakMap,
		"%WeakRef%": typeof WeakRef > "u" ? n : WeakRef,
		"%WeakSet%": typeof WeakSet > "u" ? n : WeakSet,
		"%Function.prototype.call%": te,
		"%Function.prototype.apply%": D,
		"%Object.defineProperty%": x,
		"%Object.getPrototypeOf%": E,
		"%Math.abs%": d,
		"%Math.floor%": f,
		"%Math.max%": p,
		"%Math.min%": m,
		"%Math.pow%": h,
		"%Math.round%": g,
		"%Math.sign%": _,
		"%Reflect.getPrototypeOf%": ee
	};
	if (T) try {
		null.error;
	} catch (e) {
		A["%Error.prototype%"] = T(T(e));
	}
	var ne = function e(t) {
		var n;
		if (t === "%AsyncFunction%") n = y("async function () {}");
		else if (t === "%GeneratorFunction%") n = y("function* () {}");
		else if (t === "%AsyncGeneratorFunction%") n = y("async function* () {}");
		else if (t === "%AsyncGenerator%") {
			var r = e("%AsyncGeneratorFunction%");
			r && (n = r.prototype);
		} else if (t === "%AsyncIteratorPrototype%") {
			var i = e("%AsyncGenerator%");
			i && T && (n = T(i.prototype));
		}
		return A[t] = n, n;
	}, re = {
		__proto__: null,
		"%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
		"%ArrayPrototype%": ["Array", "prototype"],
		"%ArrayProto_entries%": [
			"Array",
			"prototype",
			"entries"
		],
		"%ArrayProto_forEach%": [
			"Array",
			"prototype",
			"forEach"
		],
		"%ArrayProto_keys%": [
			"Array",
			"prototype",
			"keys"
		],
		"%ArrayProto_values%": [
			"Array",
			"prototype",
			"values"
		],
		"%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
		"%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
		"%AsyncGeneratorPrototype%": [
			"AsyncGeneratorFunction",
			"prototype",
			"prototype"
		],
		"%BooleanPrototype%": ["Boolean", "prototype"],
		"%DataViewPrototype%": ["DataView", "prototype"],
		"%DatePrototype%": ["Date", "prototype"],
		"%ErrorPrototype%": ["Error", "prototype"],
		"%EvalErrorPrototype%": ["EvalError", "prototype"],
		"%Float32ArrayPrototype%": ["Float32Array", "prototype"],
		"%Float64ArrayPrototype%": ["Float64Array", "prototype"],
		"%FunctionPrototype%": ["Function", "prototype"],
		"%Generator%": ["GeneratorFunction", "prototype"],
		"%GeneratorPrototype%": [
			"GeneratorFunction",
			"prototype",
			"prototype"
		],
		"%Int8ArrayPrototype%": ["Int8Array", "prototype"],
		"%Int16ArrayPrototype%": ["Int16Array", "prototype"],
		"%Int32ArrayPrototype%": ["Int32Array", "prototype"],
		"%JSONParse%": ["JSON", "parse"],
		"%JSONStringify%": ["JSON", "stringify"],
		"%MapPrototype%": ["Map", "prototype"],
		"%NumberPrototype%": ["Number", "prototype"],
		"%ObjectPrototype%": ["Object", "prototype"],
		"%ObjProto_toString%": [
			"Object",
			"prototype",
			"toString"
		],
		"%ObjProto_valueOf%": [
			"Object",
			"prototype",
			"valueOf"
		],
		"%PromisePrototype%": ["Promise", "prototype"],
		"%PromiseProto_then%": [
			"Promise",
			"prototype",
			"then"
		],
		"%Promise_all%": ["Promise", "all"],
		"%Promise_reject%": ["Promise", "reject"],
		"%Promise_resolve%": ["Promise", "resolve"],
		"%RangeErrorPrototype%": ["RangeError", "prototype"],
		"%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
		"%RegExpPrototype%": ["RegExp", "prototype"],
		"%SetPrototype%": ["Set", "prototype"],
		"%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
		"%StringPrototype%": ["String", "prototype"],
		"%SymbolPrototype%": ["Symbol", "prototype"],
		"%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
		"%TypedArrayPrototype%": ["TypedArray", "prototype"],
		"%TypeErrorPrototype%": ["TypeError", "prototype"],
		"%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
		"%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
		"%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
		"%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
		"%URIErrorPrototype%": ["URIError", "prototype"],
		"%WeakMapPrototype%": ["WeakMap", "prototype"],
		"%WeakSetPrototype%": ["WeakSet", "prototype"]
	}, j = ub(), ie = vb(), ae = j.call(te, Array.prototype.concat), oe = j.call(D, Array.prototype.splice), M = j.call(te, String.prototype.replace), se = j.call(te, String.prototype.slice), ce = j.call(te, RegExp.prototype.exec), le = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, ue = /\\(\\)?/g, N = function(e) {
		var t = se(e, 0, 1), n = se(e, -1);
		if (t === "%" && n !== "%") throw new c("invalid intrinsic syntax, expected closing `%`");
		if (n === "%" && t !== "%") throw new c("invalid intrinsic syntax, expected opening `%`");
		var r = [];
		return M(e, le, function(e, t, n, i) {
			r[r.length] = n ? M(i, ue, "$1") : t || e;
		}), r;
	}, de = function(e, t) {
		var n = e, r;
		if (ie(re, n) && (r = re[n], n = "%" + r[0] + "%"), ie(A, n)) {
			var i = A[n];
			if (i === O && (i = ne(n)), i === void 0 && !t) throw new l("intrinsic " + e + " exists, but is not available. Please file an issue!");
			return {
				alias: r,
				name: n,
				value: i
			};
		}
		throw new c("intrinsic " + e + " does not exist!");
	};
	t.exports = function(e, t) {
		if (typeof e != "string" || e.length === 0) throw new l("intrinsic name must be a non-empty string");
		if (arguments.length > 1 && typeof t != "boolean") throw new l("\"allowMissing\" argument must be a boolean");
		if (ce(/^%?[^%]*%?$/, e) === null) throw new c("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
		var n = N(e), r = n.length > 0 ? n[0] : "", i = de("%" + r + "%", t), a = i.name, o = i.value, s = !1, u = i.alias;
		u && (r = u[0], oe(n, ae([0, 1], u)));
		for (var d = 1, f = !0; d < n.length; d += 1) {
			var p = n[d], m = se(p, 0, 1), h = se(p, -1);
			if ((m === "\"" || m === "'" || m === "`" || h === "\"" || h === "'" || h === "`") && m !== h) throw new c("property names with quotes must have matching quotes");
			if ((p === "constructor" || !f) && (s = !0), r += "." + p, a = "%" + r + "%", ie(A, a)) o = A[a];
			else if (o != null) {
				if (!(p in o)) {
					if (!t) throw new l("base intrinsic for " + e + " exists, but the property is not available.");
					return;
				}
				if (b && d + 1 >= n.length) {
					var g = b(o, p);
					f = !!g, o = f && "get" in g && !("originalValue" in g.get) ? g.get : o[p];
				} else f = ie(o, p), o = o[p];
				f && !s && (A[a] = o);
			}
		}
		return o;
	};
})), bb = /* @__PURE__ */ I(((e, t) => {
	var n = yb(), r = hb(), i = r([n("%String.prototype.indexOf%")]);
	t.exports = function(e, t) {
		var a = n(e, !!t);
		return typeof a == "function" && i(e, ".prototype.") > -1 ? r([a]) : a;
	};
})), xb = /* @__PURE__ */ I(((e, t) => {
	var n = By()(), r = bb()("Object.prototype.toString"), i = function(e) {
		return n && e && typeof e == "object" && Symbol.toStringTag in e ? !1 : r(e) === "[object Arguments]";
	}, a = function(e) {
		return i(e) ? !0 : typeof e == "object" && !!e && "length" in e && typeof e.length == "number" && e.length >= 0 && r(e) !== "[object Array]" && "callee" in e && r(e.callee) === "[object Function]";
	}, o = function() {
		return i(arguments);
	}();
	i.isLegacyArguments = a, t.exports = o ? i : a;
})), Sb = /* @__PURE__ */ I(((e, t) => {
	var n = bb(), r = By()(), i = vb(), a = ib(), o;
	if (r) {
		var s = n("RegExp.prototype.exec"), c = {}, l = function() {
			throw c;
		}, u = {
			toString: l,
			valueOf: l
		};
		typeof Symbol.toPrimitive == "symbol" && (u[Symbol.toPrimitive] = l), o = function(e) {
			if (!e || typeof e != "object") return !1;
			var t = a(e, "lastIndex");
			if (!(t && i(t, "value"))) return !1;
			try {
				s(e, u);
			} catch (e) {
				return e === c;
			}
		};
	} else {
		var d = n("Object.prototype.toString"), f = "[object RegExp]";
		o = function(e) {
			return !e || typeof e != "object" && typeof e != "function" ? !1 : d(e) === f;
		};
	}
	t.exports = o;
})), Cb = /* @__PURE__ */ I(((e, t) => {
	var n = bb(), r = Sb(), i = n("RegExp.prototype.exec"), a = qy();
	t.exports = function(e) {
		if (!r(e)) throw new a("`regex` must be a RegExp");
		return function(t) {
			return i(e, t) !== null;
		};
	};
})), wb = /* @__PURE__ */ I(((e, t) => {
	var n = function* () {}.constructor;
	t.exports = () => n;
})), Tb = /* @__PURE__ */ I(((e, t) => {
	var n = bb(), r = Cb()(/^\s*(?:function)?\*/), i = By()(), a = _b(), o = n("Object.prototype.toString"), s = n("Function.prototype.toString"), c = wb();
	t.exports = function(e) {
		if (typeof e != "function") return !1;
		if (r(s(e))) return !0;
		if (!i) return o(e) === "[object GeneratorFunction]";
		if (!a) return !1;
		var t = c();
		return t && a(e) === t.prototype;
	};
})), Eb = /* @__PURE__ */ I(((e, t) => {
	var n = Function.prototype.toString, r = typeof Reflect == "object" && Reflect !== null && Reflect.apply, i, a;
	if (typeof r == "function" && typeof Object.defineProperty == "function") try {
		i = Object.defineProperty({}, "length", { get: function() {
			throw a;
		} }), a = {}, r(function() {
			throw 42;
		}, null, i);
	} catch (e) {
		e !== a && (r = null);
	}
	else r = null;
	var o = /^\s*class\b/, s = function(e) {
		try {
			var t = n.call(e);
			return o.test(t);
		} catch {
			return !1;
		}
	}, c = function(e) {
		try {
			return !s(e) && (n.call(e), !0);
		} catch {
			return !1;
		}
	}, l = Object.prototype.toString, u = "[object Object]", d = "[object Function]", f = "[object GeneratorFunction]", p = "[object HTMLAllCollection]", m = "[object HTML document.all class]", h = "[object HTMLCollection]", g = typeof Symbol == "function" && !!Symbol.toStringTag, _ = !(0 in [,]), v = function() {
		return !1;
	};
	if (typeof document == "object") {
		var y = document.all;
		l.call(y) === l.call(document.all) && (v = function(e) {
			if ((_ || !e) && (e === void 0 || typeof e == "object")) try {
				var t = l.call(e);
				return (t === p || t === m || t === h || t === u) && e("") == null;
			} catch {}
			return !1;
		});
	}
	t.exports = r ? function(e) {
		if (v(e)) return !0;
		if (!e || typeof e != "function" && typeof e != "object") return !1;
		try {
			r(e, null, i);
		} catch (e) {
			if (e !== a) return !1;
		}
		return !s(e) && c(e);
	} : function(e) {
		if (v(e)) return !0;
		if (!e || typeof e != "function" && typeof e != "object") return !1;
		if (g) return c(e);
		if (s(e)) return !1;
		var t = l.call(e);
		return t !== d && t !== f && !/^\[object HTML/.test(t) ? !1 : c(e);
	};
})), Db = /* @__PURE__ */ I(((e, t) => {
	var n = Eb(), r = Object.prototype.toString, i = Object.prototype.hasOwnProperty, a = function(e, t, n) {
		for (var r = 0, a = e.length; r < a; r++) i.call(e, r) && (n == null ? t(e[r], r, e) : t.call(n, e[r], r, e));
	}, o = function(e, t, n) {
		for (var r = 0, i = e.length; r < i; r++) n == null ? t(e.charAt(r), r, e) : t.call(n, e.charAt(r), r, e);
	}, s = function(e, t, n) {
		for (var r in e) i.call(e, r) && (n == null ? t(e[r], r, e) : t.call(n, e[r], r, e));
	};
	function c(e) {
		return r.call(e) === "[object Array]";
	}
	t.exports = function(e, t, r) {
		if (!n(t)) throw TypeError("iterator must be a function");
		var i;
		arguments.length >= 3 && (i = r), c(e) ? a(e, t, i) : typeof e == "string" ? o(e, t, i) : s(e, t, i);
	};
})), Ob = /* @__PURE__ */ I(((e, t) => {
	t.exports = [
		"Float16Array",
		"Float32Array",
		"Float64Array",
		"Int8Array",
		"Int16Array",
		"Int32Array",
		"Uint8Array",
		"Uint8ClampedArray",
		"Uint16Array",
		"Uint32Array",
		"BigInt64Array",
		"BigUint64Array"
	];
})), kb = /* @__PURE__ */ I(((e, t) => {
	var n = Ob(), r = typeof globalThis > "u" ? global : globalThis;
	t.exports = function() {
		for (var e = [], t = 0; t < n.length; t++) typeof r[n[t]] == "function" && (e[e.length] = n[t]);
		return e;
	};
})), Ab = /* @__PURE__ */ I(((e, t) => {
	var n = ab(), r = Ky(), i = qy(), a = ib();
	t.exports = function(e, t, o) {
		if (!e || typeof e != "object" && typeof e != "function") throw new i("`obj` must be an object or a function`");
		if (typeof t != "string" && typeof t != "symbol") throw new i("`property` must be a string or a symbol`");
		if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null) throw new i("`nonEnumerable`, if provided, must be a boolean or null");
		if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null) throw new i("`nonWritable`, if provided, must be a boolean or null");
		if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null) throw new i("`nonConfigurable`, if provided, must be a boolean or null");
		if (arguments.length > 6 && typeof arguments[6] != "boolean") throw new i("`loose`, if provided, must be a boolean");
		var s = arguments.length > 3 ? arguments[3] : null, c = arguments.length > 4 ? arguments[4] : null, l = arguments.length > 5 ? arguments[5] : null, u = arguments.length > 6 && arguments[6], d = !!a && a(e, t);
		if (n) n(e, t, {
			configurable: l === null && d ? d.configurable : !l,
			enumerable: s === null && d ? d.enumerable : !s,
			value: o,
			writable: c === null && d ? d.writable : !c
		});
		else if (u || !s && !c && !l) e[t] = o;
		else throw new r("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
	};
})), jb = /* @__PURE__ */ I(((e, t) => {
	var n = ab(), r = function() {
		return !!n;
	};
	r.hasArrayLengthDefineBug = function() {
		if (!n) return null;
		try {
			return n([], "length", { value: 1 }).length !== 1;
		} catch {
			return !0;
		}
	}, t.exports = r;
})), Mb = /* @__PURE__ */ I(((e, t) => {
	var n = yb(), r = Ab(), i = jb()(), a = ib(), o = qy(), s = n("%Math.floor%");
	t.exports = function(e, t) {
		if (typeof e != "function") throw new o("`fn` is not a function");
		if (typeof t != "number" || t < 0 || t > 4294967295 || s(t) !== t) throw new o("`length` must be a positive 32-bit integer");
		var n = arguments.length > 2 && !!arguments[2], c = !0, l = !0;
		if ("length" in e && a) {
			var u = a(e, "length");
			u && !u.configurable && (c = !1), u && !u.writable && (l = !1);
		}
		return (c || l || !n) && (i ? r(e, "length", t, !0, !0) : r(e, "length", t)), e;
	};
})), Nb = /* @__PURE__ */ I(((e, t) => {
	var n = ub(), r = fb(), i = mb();
	t.exports = function() {
		return i(n, r, arguments);
	};
})), Pb = /* @__PURE__ */ I(((e, t) => {
	var n = Mb(), r = ab(), i = hb(), a = Nb();
	t.exports = function(e) {
		var t = i(arguments), r = e.length - (arguments.length - 1);
		return n(t, 1 + (r > 0 ? r : 0), !0);
	}, r ? r(t.exports, "apply", { value: a }) : t.exports.apply = a;
})), Fb = /* @__PURE__ */ I(((e, t) => {
	var n = Db(), r = kb(), i = Pb(), a = bb(), o = ib(), s = _b(), c = a("Object.prototype.toString"), l = By()(), u = typeof globalThis > "u" ? global : globalThis, d = r(), f = a("String.prototype.slice"), p = a("Array.prototype.indexOf", !0) || function(e, t) {
		for (var n = 0; n < e.length; n += 1) if (e[n] === t) return n;
		return -1;
	}, m = { __proto__: null };
	l && o && s ? n(d, function(e) {
		var t = new u[e]();
		if (Symbol.toStringTag in t && s) {
			var n = s(t), r = o(n, Symbol.toStringTag);
			if (!r && n && (r = o(s(n), Symbol.toStringTag)), r && r.get) {
				var a = i(r.get);
				m["$" + e] = a;
			}
		}
	}) : n(d, function(e) {
		var t = new u[e](), n = t.slice || t.set;
		if (n) {
			var r = i(n);
			m["$" + e] = r;
		}
	});
	var h = function(e) {
		var t = !1;
		return n(m, function(n, r) {
			if (!t) try {
				"$" + n(e) === r && (t = f(r, 1));
			} catch {}
		}), t;
	}, g = function(e) {
		var t = !1;
		return n(m, function(n, r) {
			if (!t) try {
				n(e), t = f(r, 1);
			} catch {}
		}), t;
	};
	t.exports = function(e) {
		if (!e || typeof e != "object") return !1;
		if (!l) {
			var t = f(c(e), 8, -1);
			return p(d, t) > -1 ? t : t === "Object" && g(e);
		}
		return o ? h(e) : null;
	};
})), Ib = /* @__PURE__ */ I(((e, t) => {
	var n = Fb();
	t.exports = function(e) {
		return !!n(e);
	};
})), Lb = /* @__PURE__ */ I(((e) => {
	var t = xb(), n = Tb(), r = Fb(), i = Ib();
	function a(e) {
		return e.call.bind(e);
	}
	var o = typeof BigInt < "u", s = typeof Symbol < "u", c = a(Object.prototype.toString), l = a(Number.prototype.valueOf), u = a(String.prototype.valueOf), d = a(Boolean.prototype.valueOf);
	if (o) var f = a(BigInt.prototype.valueOf);
	if (s) var p = a(Symbol.prototype.valueOf);
	function m(e, t) {
		if (typeof e != "object") return !1;
		try {
			return t(e), !0;
		} catch {
			return !1;
		}
	}
	e.isArgumentsObject = t, e.isGeneratorFunction = n, e.isTypedArray = i;
	function h(e) {
		return typeof Promise < "u" && e instanceof Promise || typeof e == "object" && !!e && typeof e.then == "function" && typeof e.catch == "function";
	}
	e.isPromise = h;
	function g(e) {
		return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(e) : i(e) || M(e);
	}
	e.isArrayBufferView = g;
	function _(e) {
		return r(e) === "Uint8Array";
	}
	e.isUint8Array = _;
	function v(e) {
		return r(e) === "Uint8ClampedArray";
	}
	e.isUint8ClampedArray = v;
	function y(e) {
		return r(e) === "Uint16Array";
	}
	e.isUint16Array = y;
	function b(e) {
		return r(e) === "Uint32Array";
	}
	e.isUint32Array = b;
	function x(e) {
		return r(e) === "Int8Array";
	}
	e.isInt8Array = x;
	function S(e) {
		return r(e) === "Int16Array";
	}
	e.isInt16Array = S;
	function C(e) {
		return r(e) === "Int32Array";
	}
	e.isInt32Array = C;
	function w(e) {
		return r(e) === "Float32Array";
	}
	e.isFloat32Array = w;
	function T(e) {
		return r(e) === "Float64Array";
	}
	e.isFloat64Array = T;
	function E(e) {
		return r(e) === "BigInt64Array";
	}
	e.isBigInt64Array = E;
	function ee(e) {
		return r(e) === "BigUint64Array";
	}
	e.isBigUint64Array = ee;
	function D(e) {
		return c(e) === "[object Map]";
	}
	D.working = typeof Map < "u" && D(/* @__PURE__ */ new Map());
	function te(e) {
		return typeof Map > "u" ? !1 : D.working ? D(e) : e instanceof Map;
	}
	e.isMap = te;
	function O(e) {
		return c(e) === "[object Set]";
	}
	O.working = typeof Set < "u" && O(/* @__PURE__ */ new Set());
	function k(e) {
		return typeof Set > "u" ? !1 : O.working ? O(e) : e instanceof Set;
	}
	e.isSet = k;
	function A(e) {
		return c(e) === "[object WeakMap]";
	}
	A.working = typeof WeakMap < "u" && A(/* @__PURE__ */ new WeakMap());
	function ne(e) {
		return typeof WeakMap > "u" ? !1 : A.working ? A(e) : e instanceof WeakMap;
	}
	e.isWeakMap = ne;
	function re(e) {
		return c(e) === "[object WeakSet]";
	}
	re.working = typeof WeakSet < "u" && re(/* @__PURE__ */ new WeakSet());
	function j(e) {
		return re(e);
	}
	e.isWeakSet = j;
	function ie(e) {
		return c(e) === "[object ArrayBuffer]";
	}
	ie.working = typeof ArrayBuffer < "u" && ie(/* @__PURE__ */ new ArrayBuffer());
	function ae(e) {
		return typeof ArrayBuffer > "u" ? !1 : ie.working ? ie(e) : e instanceof ArrayBuffer;
	}
	e.isArrayBuffer = ae;
	function oe(e) {
		return c(e) === "[object DataView]";
	}
	oe.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && oe(new DataView(/* @__PURE__ */ new ArrayBuffer(1), 0, 1));
	function M(e) {
		return typeof DataView > "u" ? !1 : oe.working ? oe(e) : e instanceof DataView;
	}
	e.isDataView = M;
	var se = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
	function ce(e) {
		return c(e) === "[object SharedArrayBuffer]";
	}
	function le(e) {
		return se !== void 0 && (ce.working === void 0 && (ce.working = ce(new se())), ce.working ? ce(e) : e instanceof se);
	}
	e.isSharedArrayBuffer = le;
	function ue(e) {
		return c(e) === "[object AsyncFunction]";
	}
	e.isAsyncFunction = ue;
	function N(e) {
		return c(e) === "[object Map Iterator]";
	}
	e.isMapIterator = N;
	function de(e) {
		return c(e) === "[object Set Iterator]";
	}
	e.isSetIterator = de;
	function fe(e) {
		return c(e) === "[object Generator]";
	}
	e.isGeneratorObject = fe;
	function pe(e) {
		return c(e) === "[object WebAssembly.Module]";
	}
	e.isWebAssemblyCompiledModule = pe;
	function me(e) {
		return m(e, l);
	}
	e.isNumberObject = me;
	function he(e) {
		return m(e, u);
	}
	e.isStringObject = he;
	function ge(e) {
		return m(e, d);
	}
	e.isBooleanObject = ge;
	function _e(e) {
		return o && m(e, f);
	}
	e.isBigIntObject = _e;
	function P(e) {
		return s && m(e, p);
	}
	e.isSymbolObject = P;
	function ve(e) {
		return me(e) || he(e) || ge(e) || _e(e) || P(e);
	}
	e.isBoxedPrimitive = ve;
	function ye(e) {
		return typeof Uint8Array < "u" && (ae(e) || le(e));
	}
	e.isAnyArrayBuffer = ye, [
		"isProxy",
		"isExternal",
		"isModuleNamespaceObject"
	].forEach(function(t) {
		Object.defineProperty(e, t, {
			enumerable: !1,
			value: function() {
				throw Error(t + " is not supported in userland");
			}
		});
	});
})), Rb = /* @__PURE__ */ I(((e, t) => {
	t.exports = function(e) {
		return e && typeof e == "object" && typeof e.copy == "function" && typeof e.fill == "function" && typeof e.readUInt8 == "function";
	};
})), zb = /* @__PURE__ */ I(((e, t) => {
	t.exports = typeof Object.create == "function" ? function(e, t) {
		t && (e.super_ = t, e.prototype = Object.create(t.prototype, { constructor: {
			value: e,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }));
	} : function(e, t) {
		if (t) {
			e.super_ = t;
			var n = function() {};
			n.prototype = t.prototype, e.prototype = new n(), e.prototype.constructor = e;
		}
	};
})), Bb = /* @__PURE__ */ I(((e) => {
	var t = Object.getOwnPropertyDescriptors || function(e) {
		for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) n[t[r]] = Object.getOwnPropertyDescriptor(e, t[r]);
		return n;
	}, n = /%[sdj%]/g;
	e.format = function(e) {
		if (!x(e)) {
			for (var t = [], r = 0; r < arguments.length; r++) t.push(o(arguments[r]));
			return t.join(" ");
		}
		for (var r = 1, i = arguments, a = i.length, s = String(e).replace(n, function(e) {
			if (e === "%%") return "%";
			if (r >= a) return e;
			switch (e) {
				case "%s": return String(i[r++]);
				case "%d": return Number(i[r++]);
				case "%j": try {
					return JSON.stringify(i[r++]);
				} catch {
					return "[Circular]";
				}
				default: return e;
			}
		}), c = i[r]; r < a; c = i[++r]) v(c) || !T(c) ? s += " " + c : s += " " + o(c);
		return s;
	}, e.deprecate = function(t, n) {
		if (typeof process < "u" && process.noDeprecation === !0) return t;
		if (typeof process > "u") return function() {
			return e.deprecate(t, n).apply(this, arguments);
		};
		var r = !1;
		function i() {
			if (!r) {
				if (process.throwDeprecation) throw Error(n);
				process.traceDeprecation ? console.trace(n) : console.error(n), r = !0;
			}
			return t.apply(this, arguments);
		}
		return i;
	};
	var r = {}, i = /^$/;
	if (process.env.NODE_DEBUG) {
		var a = process.env.NODE_DEBUG;
		a = a.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), i = RegExp("^" + a + "$", "i");
	}
	e.debuglog = function(t) {
		if (t = t.toUpperCase(), !r[t]) if (i.test(t)) {
			var n = process.pid;
			r[t] = function() {
				var r = e.format.apply(e, arguments);
				console.error("%s %d: %s", t, n, r);
			};
		} else r[t] = function() {};
		return r[t];
	};
	function o(t, n) {
		var r = {
			seen: [],
			stylize: c
		};
		return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), _(n) ? r.showHidden = n : n && e._extend(r, n), C(r.showHidden) && (r.showHidden = !1), C(r.depth) && (r.depth = 2), C(r.colors) && (r.colors = !1), C(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = s), u(r, t, r.depth);
	}
	e.inspect = o, o.colors = {
		bold: [1, 22],
		italic: [3, 23],
		underline: [4, 24],
		inverse: [7, 27],
		white: [37, 39],
		grey: [90, 39],
		black: [30, 39],
		blue: [34, 39],
		cyan: [36, 39],
		green: [32, 39],
		magenta: [35, 39],
		red: [31, 39],
		yellow: [33, 39]
	}, o.styles = {
		special: "cyan",
		number: "yellow",
		boolean: "yellow",
		undefined: "grey",
		null: "bold",
		string: "green",
		date: "magenta",
		regexp: "red"
	};
	function s(e, t) {
		var n = o.styles[t];
		return n ? "\x1B[" + o.colors[n][0] + "m" + e + "\x1B[" + o.colors[n][1] + "m" : e;
	}
	function c(e, t) {
		return e;
	}
	function l(e) {
		var t = {};
		return e.forEach(function(e, n) {
			t[e] = !0;
		}), t;
	}
	function u(t, n, r) {
		if (t.customInspect && n && D(n.inspect) && n.inspect !== e.inspect && !(n.constructor && n.constructor.prototype === n)) {
			var i = n.inspect(r, t);
			return x(i) || (i = u(t, i, r)), i;
		}
		var a = d(t, n);
		if (a) return a;
		var o = Object.keys(n), s = l(o);
		if (t.showHidden && (o = Object.getOwnPropertyNames(n)), ee(n) && (o.indexOf("message") >= 0 || o.indexOf("description") >= 0)) return f(n);
		if (o.length === 0) {
			if (D(n)) {
				var c = n.name ? ": " + n.name : "";
				return t.stylize("[Function" + c + "]", "special");
			}
			if (w(n)) return t.stylize(RegExp.prototype.toString.call(n), "regexp");
			if (E(n)) return t.stylize(Date.prototype.toString.call(n), "date");
			if (ee(n)) return f(n);
		}
		var _ = "", v = !1, y = ["{", "}"];
		if (g(n) && (v = !0, y = ["[", "]"]), D(n) && (_ = " [Function" + (n.name ? ": " + n.name : "") + "]"), w(n) && (_ = " " + RegExp.prototype.toString.call(n)), E(n) && (_ = " " + Date.prototype.toUTCString.call(n)), ee(n) && (_ = " " + f(n)), o.length === 0 && (!v || n.length == 0)) return y[0] + _ + y[1];
		if (r < 0) return w(n) ? t.stylize(RegExp.prototype.toString.call(n), "regexp") : t.stylize("[Object]", "special");
		t.seen.push(n);
		var b = v ? p(t, n, r, s, o) : o.map(function(e) {
			return m(t, n, r, s, e, v);
		});
		return t.seen.pop(), h(b, _, y);
	}
	function d(e, t) {
		if (C(t)) return e.stylize("undefined", "undefined");
		if (x(t)) {
			var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, "\"") + "'";
			return e.stylize(n, "string");
		}
		if (b(t)) return e.stylize("" + t, "number");
		if (_(t)) return e.stylize("" + t, "boolean");
		if (v(t)) return e.stylize("null", "null");
	}
	function f(e) {
		return "[" + Error.prototype.toString.call(e) + "]";
	}
	function p(e, t, n, r, i) {
		for (var a = [], o = 0, s = t.length; o < s; ++o) re(t, String(o)) ? a.push(m(e, t, n, r, String(o), !0)) : a.push("");
		return i.forEach(function(i) {
			i.match(/^\d+$/) || a.push(m(e, t, n, r, i, !0));
		}), a;
	}
	function m(e, t, n, r, i, a) {
		var o, s, c = Object.getOwnPropertyDescriptor(t, i) || { value: t[i] };
		if (c.get ? s = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (s = e.stylize("[Setter]", "special")), re(r, i) || (o = "[" + i + "]"), s || (e.seen.indexOf(c.value) < 0 ? (s = v(n) ? u(e, c.value, null) : u(e, c.value, n - 1), s.indexOf("\n") > -1 && (s = a ? s.split("\n").map(function(e) {
			return "  " + e;
		}).join("\n").slice(2) : "\n" + s.split("\n").map(function(e) {
			return "   " + e;
		}).join("\n"))) : s = e.stylize("[Circular]", "special")), C(o)) {
			if (a && i.match(/^\d+$/)) return s;
			o = JSON.stringify("" + i), o.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (o = o.slice(1, -1), o = e.stylize(o, "name")) : (o = o.replace(/'/g, "\\'").replace(/\\"/g, "\"").replace(/(^"|"$)/g, "'"), o = e.stylize(o, "string"));
		}
		return o + ": " + s;
	}
	function h(e, t, n) {
		var r = 0;
		return e.reduce(function(e, t) {
			return r++, t.indexOf("\n") >= 0 && r++, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
		}, 0) > 60 ? n[0] + (t === "" ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1] : n[0] + t + " " + e.join(", ") + " " + n[1];
	}
	e.types = Lb();
	function g(e) {
		return Array.isArray(e);
	}
	e.isArray = g;
	function _(e) {
		return typeof e == "boolean";
	}
	e.isBoolean = _;
	function v(e) {
		return e === null;
	}
	e.isNull = v;
	function y(e) {
		return e == null;
	}
	e.isNullOrUndefined = y;
	function b(e) {
		return typeof e == "number";
	}
	e.isNumber = b;
	function x(e) {
		return typeof e == "string";
	}
	e.isString = x;
	function S(e) {
		return typeof e == "symbol";
	}
	e.isSymbol = S;
	function C(e) {
		return e === void 0;
	}
	e.isUndefined = C;
	function w(e) {
		return T(e) && O(e) === "[object RegExp]";
	}
	e.isRegExp = w, e.types.isRegExp = w;
	function T(e) {
		return typeof e == "object" && !!e;
	}
	e.isObject = T;
	function E(e) {
		return T(e) && O(e) === "[object Date]";
	}
	e.isDate = E, e.types.isDate = E;
	function ee(e) {
		return T(e) && (O(e) === "[object Error]" || e instanceof Error);
	}
	e.isError = ee, e.types.isNativeError = ee;
	function D(e) {
		return typeof e == "function";
	}
	e.isFunction = D;
	function te(e) {
		return e === null || typeof e == "boolean" || typeof e == "number" || typeof e == "string" || typeof e == "symbol" || e === void 0;
	}
	e.isPrimitive = te, e.isBuffer = Rb();
	function O(e) {
		return Object.prototype.toString.call(e);
	}
	function k(e) {
		return e < 10 ? "0" + e.toString(10) : e.toString(10);
	}
	var A = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	];
	function ne() {
		var e = /* @__PURE__ */ new Date(), t = [
			k(e.getHours()),
			k(e.getMinutes()),
			k(e.getSeconds())
		].join(":");
		return [
			e.getDate(),
			A[e.getMonth()],
			t
		].join(" ");
	}
	e.log = function() {
		console.log("%s - %s", ne(), e.format.apply(e, arguments));
	}, e.inherits = zb(), e._extend = function(e, t) {
		if (!t || !T(t)) return e;
		for (var n = Object.keys(t), r = n.length; r--;) e[n[r]] = t[n[r]];
		return e;
	};
	function re(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t);
	}
	var j = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
	e.promisify = function(e) {
		if (typeof e != "function") throw TypeError("The \"original\" argument must be of type Function");
		if (j && e[j]) {
			var n = e[j];
			if (typeof n != "function") throw TypeError("The \"util.promisify.custom\" argument must be of type Function");
			return Object.defineProperty(n, j, {
				value: n,
				enumerable: !1,
				writable: !1,
				configurable: !0
			}), n;
		}
		function n() {
			for (var t, n, r = new Promise(function(e, r) {
				t = e, n = r;
			}), i = [], a = 0; a < arguments.length; a++) i.push(arguments[a]);
			i.push(function(e, r) {
				e ? n(e) : t(r);
			});
			try {
				e.apply(this, i);
			} catch (e) {
				n(e);
			}
			return r;
		}
		return Object.setPrototypeOf(n, Object.getPrototypeOf(e)), j && Object.defineProperty(n, j, {
			value: n,
			enumerable: !1,
			writable: !1,
			configurable: !0
		}), Object.defineProperties(n, t(e));
	}, e.promisify.custom = j;
	function ie(e, t) {
		if (!e) {
			var n = /* @__PURE__ */ Error("Promise was rejected with a falsy value");
			n.reason = e, e = n;
		}
		return t(e);
	}
	function ae(e) {
		if (typeof e != "function") throw TypeError("The \"original\" argument must be of type Function");
		function n() {
			for (var t = [], n = 0; n < arguments.length; n++) t.push(arguments[n]);
			var r = t.pop();
			if (typeof r != "function") throw TypeError("The last argument must be of type Function");
			var i = this, a = function() {
				return r.apply(i, arguments);
			};
			e.apply(this, t).then(function(e) {
				process.nextTick(a.bind(null, null, e));
			}, function(e) {
				process.nextTick(ie.bind(null, e, a));
			});
		}
		return Object.setPrototypeOf(n, Object.getPrototypeOf(e)), Object.defineProperties(n, t(e)), n;
	}
	e.callbackify = ae;
})), Vb = /* @__PURE__ */ I(((e) => {
	(function() {
		var t = {
			not_string: /[^s]/,
			not_bool: /[^t]/,
			not_type: /[^T]/,
			not_primitive: /[^v]/,
			number: /[diefg]/,
			numeric_arg: /[bcdiefguxX]/,
			json: /[j]/,
			not_json: /[^j]/,
			text: /^[^\x25]+/,
			modulo: /^\x25{2}/,
			placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
			key: /^([a-z_][a-z_\d]*)/i,
			key_access: /^\.([a-z_][a-z_\d]*)/i,
			index_access: /^\[(\d+)\]/,
			sign: /^[+-]/
		};
		function n(e) {
			return i(o(e), arguments);
		}
		function r(e, t) {
			return n.apply(null, [e].concat(t || []));
		}
		function i(e, r) {
			var i = 1, a = e.length, o, s = "", c, l, u, d, f, p, m, h;
			for (c = 0; c < a; c++) if (typeof e[c] == "string") s += e[c];
			else if (typeof e[c] == "object") {
				if (u = e[c], u.keys) for (o = r[i], l = 0; l < u.keys.length; l++) {
					if (o == null) throw Error(n("[sprintf] Cannot access property \"%s\" of undefined value \"%s\"", u.keys[l], u.keys[l - 1]));
					o = o[u.keys[l]];
				}
				else o = u.param_no ? r[u.param_no] : r[i++];
				if (t.not_type.test(u.type) && t.not_primitive.test(u.type) && o instanceof Function && (o = o()), t.numeric_arg.test(u.type) && typeof o != "number" && isNaN(o)) throw TypeError(n("[sprintf] expecting number but found %T", o));
				switch (t.number.test(u.type) && (m = o >= 0), u.type) {
					case "b":
						o = parseInt(o, 10).toString(2);
						break;
					case "c":
						o = String.fromCharCode(parseInt(o, 10));
						break;
					case "d":
					case "i":
						o = parseInt(o, 10);
						break;
					case "j":
						o = JSON.stringify(o, null, u.width ? parseInt(u.width) : 0);
						break;
					case "e":
						o = u.precision ? parseFloat(o).toExponential(u.precision) : parseFloat(o).toExponential();
						break;
					case "f":
						o = u.precision ? parseFloat(o).toFixed(u.precision) : parseFloat(o);
						break;
					case "g":
						o = u.precision ? String(Number(o.toPrecision(u.precision))) : parseFloat(o);
						break;
					case "o":
						o = (parseInt(o, 10) >>> 0).toString(8);
						break;
					case "s":
						o = String(o), o = u.precision ? o.substring(0, u.precision) : o;
						break;
					case "t":
						o = String(!!o), o = u.precision ? o.substring(0, u.precision) : o;
						break;
					case "T":
						o = Object.prototype.toString.call(o).slice(8, -1).toLowerCase(), o = u.precision ? o.substring(0, u.precision) : o;
						break;
					case "u":
						o = parseInt(o, 10) >>> 0;
						break;
					case "v":
						o = o.valueOf(), o = u.precision ? o.substring(0, u.precision) : o;
						break;
					case "x":
						o = (parseInt(o, 10) >>> 0).toString(16);
						break;
					case "X": o = (parseInt(o, 10) >>> 0).toString(16).toUpperCase();
				}
				t.json.test(u.type) ? s += o : (t.number.test(u.type) && (!m || u.sign) ? (h = m ? "+" : "-", o = o.toString().replace(t.sign, "")) : h = "", f = u.pad_char ? u.pad_char === "0" ? "0" : u.pad_char.charAt(1) : " ", p = u.width - (h + o).length, d = u.width && p > 0 ? f.repeat(p) : "", s += u.align ? h + o + d : f === "0" ? h + d + o : d + h + o);
			}
			return s;
		}
		var a = Object.create(null);
		function o(e) {
			if (a[e]) return a[e];
			for (var n = e, r, i = [], o = 0; n;) {
				if ((r = t.text.exec(n)) !== null) i.push(r[0]);
				else if ((r = t.modulo.exec(n)) !== null) i.push("%");
				else if ((r = t.placeholder.exec(n)) !== null) {
					if (r[2]) {
						o |= 1;
						var s = [], c = r[2], l = [];
						if ((l = t.key.exec(c)) !== null) for (s.push(l[1]); (c = c.substring(l[0].length)) !== "";) if ((l = t.key_access.exec(c)) !== null) s.push(l[1]);
						else if ((l = t.index_access.exec(c)) !== null) s.push(l[1]);
						else throw SyntaxError("[sprintf] failed to parse named argument key");
						else throw SyntaxError("[sprintf] failed to parse named argument key");
						r[2] = s;
					} else o |= 2;
					if (o === 3) throw Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
					i.push({
						placeholder: r[0],
						param_no: r[1],
						keys: r[2],
						sign: r[3],
						pad_char: r[4],
						align: r[5],
						width: r[6],
						precision: r[7],
						type: r[8]
					});
				} else throw SyntaxError("[sprintf] unexpected placeholder");
				n = n.substring(r[0].length);
			}
			return a[e] = i;
		}
		e !== void 0 && (e.sprintf = n, e.vsprintf = r), typeof window < "u" && (window.sprintf = n, window.vsprintf = r, typeof define == "function" && define.amd && define(function() {
			return {
				sprintf: n,
				vsprintf: r
			};
		}));
	})();
})), Hb = /* @__PURE__ */ I(((e, t) => {
	var n = typeof Reflect == "object" ? Reflect : null, r = n && typeof n.apply == "function" ? n.apply : function(e, t, n) {
		return Function.prototype.apply.call(e, t, n);
	}, i = n && typeof n.ownKeys == "function" ? n.ownKeys : Object.getOwnPropertySymbols ? function(e) {
		return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
	} : function(e) {
		return Object.getOwnPropertyNames(e);
	};
	function a(e) {
		console && console.warn && console.warn(e);
	}
	var o = Number.isNaN || function(e) {
		return e !== e;
	};
	function s() {
		s.init.call(this);
	}
	t.exports = s, t.exports.once = y, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
	var c = 10;
	function l(e) {
		if (typeof e != "function") throw TypeError("The \"listener\" argument must be of type Function. Received type " + typeof e);
	}
	Object.defineProperty(s, "defaultMaxListeners", {
		enumerable: !0,
		get: function() {
			return c;
		},
		set: function(e) {
			if (typeof e != "number" || e < 0 || o(e)) throw RangeError("The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received " + e + ".");
			c = e;
		}
	}), s.init = function() {
		(this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
	}, s.prototype.setMaxListeners = function(e) {
		if (typeof e != "number" || e < 0 || o(e)) throw RangeError("The value of \"n\" is out of range. It must be a non-negative number. Received " + e + ".");
		return this._maxListeners = e, this;
	};
	function u(e) {
		return e._maxListeners === void 0 ? s.defaultMaxListeners : e._maxListeners;
	}
	s.prototype.getMaxListeners = function() {
		return u(this);
	}, s.prototype.emit = function(e) {
		for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
		var i = e === "error", a = this._events;
		if (a !== void 0) i &&= a.error === void 0;
		else if (!i) return !1;
		if (i) {
			var o;
			if (t.length > 0 && (o = t[0]), o instanceof Error) throw o;
			var s = /* @__PURE__ */ Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
			throw s.context = o, s;
		}
		var c = a[e];
		if (c === void 0) return !1;
		if (typeof c == "function") r(c, this, t);
		else for (var l = c.length, u = g(c, l), n = 0; n < l; ++n) r(u[n], this, t);
		return !0;
	};
	function d(e, t, n, r) {
		var i, o, s;
		if (l(n), o = e._events, o === void 0 ? (o = e._events = Object.create(null), e._eventsCount = 0) : (o.newListener !== void 0 && (e.emit("newListener", t, n.listener ? n.listener : n), o = e._events), s = o[t]), s === void 0) s = o[t] = n, ++e._eventsCount;
		else if (typeof s == "function" ? s = o[t] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n), i = u(e), i > 0 && s.length > i && !s.warned) {
			s.warned = !0;
			var c = /* @__PURE__ */ Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
			c.name = "MaxListenersExceededWarning", c.emitter = e, c.type = t, c.count = s.length, a(c);
		}
		return e;
	}
	s.prototype.addListener = function(e, t) {
		return d(this, e, t, !1);
	}, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function(e, t) {
		return d(this, e, t, !0);
	};
	function f() {
		if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
	}
	function p(e, t, n) {
		var r = {
			fired: !1,
			wrapFn: void 0,
			target: e,
			type: t,
			listener: n
		}, i = f.bind(r);
		return i.listener = n, r.wrapFn = i, i;
	}
	s.prototype.once = function(e, t) {
		return l(t), this.on(e, p(this, e, t)), this;
	}, s.prototype.prependOnceListener = function(e, t) {
		return l(t), this.prependListener(e, p(this, e, t)), this;
	}, s.prototype.removeListener = function(e, t) {
		var n, r, i, a, o;
		if (l(t), r = this._events, r === void 0 || (n = r[e], n === void 0)) return this;
		if (n === t || n.listener === t) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
		else if (typeof n != "function") {
			for (i = -1, a = n.length - 1; a >= 0; a--) if (n[a] === t || n[a].listener === t) {
				o = n[a].listener, i = a;
				break;
			}
			if (i < 0) return this;
			i === 0 ? n.shift() : _(n, i), n.length === 1 && (r[e] = n[0]), r.removeListener !== void 0 && this.emit("removeListener", e, o || t);
		}
		return this;
	}, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function(e) {
		var t, n = this._events, r;
		if (n === void 0) return this;
		if (n.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : n[e] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete n[e]), this;
		if (arguments.length === 0) {
			var i = Object.keys(n), a;
			for (r = 0; r < i.length; ++r) a = i[r], a !== "removeListener" && this.removeAllListeners(a);
			return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
		}
		if (t = n[e], typeof t == "function") this.removeListener(e, t);
		else if (t !== void 0) for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
		return this;
	};
	function m(e, t, n) {
		var r = e._events;
		if (r === void 0) return [];
		var i = r[t];
		return i === void 0 ? [] : typeof i == "function" ? n ? [i.listener || i] : [i] : n ? v(i) : g(i, i.length);
	}
	s.prototype.listeners = function(e) {
		return m(this, e, !0);
	}, s.prototype.rawListeners = function(e) {
		return m(this, e, !1);
	}, s.listenerCount = function(e, t) {
		return typeof e.listenerCount == "function" ? e.listenerCount(t) : h.call(e, t);
	}, s.prototype.listenerCount = h;
	function h(e) {
		var t = this._events;
		if (t !== void 0) {
			var n = t[e];
			if (typeof n == "function") return 1;
			if (n !== void 0) return n.length;
		}
		return 0;
	}
	s.prototype.eventNames = function() {
		return this._eventsCount > 0 ? i(this._events) : [];
	};
	function g(e, t) {
		for (var n = Array(t), r = 0; r < t; ++r) n[r] = e[r];
		return n;
	}
	function _(e, t) {
		for (; t + 1 < e.length; t++) e[t] = e[t + 1];
		e.pop();
	}
	function v(e) {
		for (var t = Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
		return t;
	}
	function y(e, t) {
		return new Promise(function(n, r) {
			function i(n) {
				e.removeListener(t, a), r(n);
			}
			function a() {
				typeof e.removeListener == "function" && e.removeListener("error", i), n([].slice.call(arguments));
			}
			x(e, t, a, { once: !0 }), t !== "error" && b(e, i, { once: !0 });
		});
	}
	function b(e, t, n) {
		typeof e.on == "function" && x(e, "error", t, n);
	}
	function x(e, t, n, r) {
		if (typeof e.on == "function") r.once ? e.once(t, n) : e.on(t, n);
		else if (typeof e.addEventListener == "function") e.addEventListener(t, function i(a) {
			r.once && e.removeEventListener(t, i), n(a);
		});
		else throw TypeError("The \"emitter\" argument must be of type EventEmitter. Received type " + typeof e);
	}
})), Ub = /* @__PURE__ */ I(((e, t) => {
	var n = [].indexOf;
	t.exports = function(e, t) {
		if (n) return e.indexOf(t);
		for (var r = 0; r < e.length; ++r) if (e[r] === t) return r;
		return -1;
	};
})), Wb = /* @__PURE__ */ I(((e, t) => {
	var n = Array.prototype, r = n.concat, i = n.slice, a = Ub();
	function o(e) {
		var t = {}, o = r.apply(n, i.call(arguments, 1));
		for (var s in e) a(o, s) === -1 && (t[s] = e[s]);
		return t;
	}
	t.exports = o;
})), Gb = /* @__PURE__ */ I(((e, t) => {
	t.exports = {
		__locale: "en",
		days: [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		],
		abbreviated_days: [
			"Sun",
			"Mon",
			"Tue",
			"Wed",
			"Thu",
			"Fri",
			"Sat"
		],
		months: [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		],
		abbreviated_months: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec"
		],
		am: "AM",
		pm: "PM"
	};
})), Kb = /* @__PURE__ */ I(((e, t) => {
	t.exports = Gb();
})), qb = /* @__PURE__ */ I(((e, t) => {
	var n = Kb();
	function r(e, t, c) {
		var l = e.getTime();
		return c ||= n, t.replace(/%([-_0]?.)/g, function(t, n) {
			var u = null;
			if (n.length == 2) {
				switch (n[0]) {
					case "-":
						u = "";
						break;
					case "_":
						u = " ";
						break;
					case "0":
						u = "0";
						break;
					default: return t;
				}
				n = n[1];
			}
			switch (n) {
				case "A": return c.days[e.getDay()];
				case "a": return c.abbreviated_days[e.getDay()];
				case "B": return c.months[e.getMonth()];
				case "b": return c.abbreviated_months[e.getMonth()];
				case "C": return i(Math.floor(e.getFullYear() / 100), u);
				case "D": return r(e, "%m/%d/%y");
				case "d": return i(e.getDate(), u);
				case "e": return e.getDate();
				case "F": return r(e, "%Y-%m-%d");
				case "H": return i(e.getHours(), u);
				case "h": return c.abbreviated_months[e.getMonth()];
				case "I": return i(a(e), u);
				case "j": return i(Math.ceil((e.getTime() - new Date(e.getFullYear(), 0, 1).getTime()) / 864e5), 3);
				case "k": return i(e.getHours(), u === null ? " " : u);
				case "L": return i(Math.floor(l % 1e3), 3);
				case "l": return i(a(e), u === null ? " " : u);
				case "M": return i(e.getMinutes(), u);
				case "m": return i(e.getMonth() + 1, u);
				case "n": return "\n";
				case "o": return String(e.getDate()) + o(e.getDate());
				case "P": return e.getHours() < 12 ? c.am.toLowerCase() : c.pm.toLowerCase();
				case "p": return e.getHours() < 12 ? c.am.toUpperCase() : c.pm.toUpperCase();
				case "R": return r(e, "%H:%M");
				case "r": return r(e, "%I:%M:%S %p");
				case "S": return i(e.getSeconds(), u);
				case "s": return Math.floor(l / 1e3);
				case "T": return r(e, "%H:%M:%S");
				case "t": return "	";
				case "U": return i(s(e, "sunday"), u);
				case "u": return e.getDay() === 0 ? 7 : e.getDay();
				case "v": return r(e, "%e-%b-%Y");
				case "W": return i(s(e, "monday"), u);
				case "w": return e.getDay();
				case "Y": return e.getFullYear();
				case "y":
					var d = String(e.getFullYear());
					return d.slice(d.length - 2);
				case "Z":
					var f = e.toString().match(/\((\w+)\)/);
					return f && f[1] || "";
				case "z":
					var p = e.getTimezoneOffset();
					return (p > 0 ? "-" : "+") + i(Math.round(Math.abs(p / 60)), 2) + ":" + i(p % 60, 2);
				default: return n;
			}
		});
	}
	function i(e, t, n) {
		typeof t == "number" && (n = t, t = "0"), t === null && (t = "0"), n ||= 2;
		var r = String(e);
		if (t) for (; r.length < n;) r = t + r;
		return r;
	}
	function a(e) {
		var t = e.getHours();
		return t === 0 ? t = 12 : t > 12 && (t -= 12), t;
	}
	function o(e) {
		var t = e % 10, n = e % 100;
		if (n >= 11 && n <= 13 || t === 0 || t >= 4) return "th";
		switch (t) {
			case 1: return "st";
			case 2: return "nd";
			case 3: return "rd";
		}
	}
	function s(e, t) {
		t ||= "sunday";
		var n = e.getDay();
		t == "monday" && (n === 0 ? n = 6 : n--);
		var r = ((e - new Date(e.getFullYear(), 0, 1)) / 864e5 + 7 - n) / 7;
		return Math.floor(r);
	}
	t.exports = r;
})), Jb = /* @__PURE__ */ I(((e, t) => {
	t.exports = function(e, t) {
		var n;
		return t === 0 && "zero" in e && (n = "zero"), n ||= t === 1 ? "one" : "other", e[n];
	};
})), Yb = /* @__PURE__ */ I(((e, t) => {
	t.exports = { counterpart: {
		names: Gb(),
		pluralize: Jb(),
		formats: {
			date: {
				default: "%a, %e %b %Y",
				long: "%A, %B %o, %Y",
				short: "%b %e"
			},
			time: {
				default: "%H:%M",
				long: "%H:%M:%S %z",
				short: "%H:%M"
			},
			datetime: {
				default: "%a, %e %b %Y %H:%M",
				long: "%A, %B %o, %Y %H:%M:%S %z",
				short: "%e %b %H:%M"
			}
		}
	} };
})), Xb = /* @__PURE__ */ We((/* @__PURE__ */ I(((e, t) => {
	var n = Ry(), r = Bb().isArray, i = Bb().isDate, a = Vb().sprintf, o = Hb(), s = Wb(), c = qb(), l = "counterpart";
	function u(e) {
		return typeof e == "string" || Object.prototype.toString.call(e) === "[object String]";
	}
	function d(e) {
		return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
	}
	function f(e) {
		return e !== null && Object.prototype.toString.call(e) === "[object Object]";
	}
	function p(e) {
		return u(e) && e[0] === ":";
	}
	function m(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t);
	}
	function h(e, t) {
		return t.reduce(function(e, t) {
			return f(e) && m(e, t) ? e[t] : null;
		}, e);
	}
	function g() {
		o.EventEmitter.apply(this), this._registry = {
			locale: "en",
			interpolate: !0,
			fallbackLocales: [],
			scope: null,
			translations: {},
			interpolations: {},
			normalizedKeys: {},
			separator: ".",
			keepTrailingDot: !1,
			keyTransformer: function(e) {
				return e;
			},
			generateMissingEntry: function(e) {
				return "missing translation: " + e;
			}
		}, this.registerTranslations("en", Yb()), this.setMaxListeners(0);
	}
	g.prototype = o.EventEmitter.prototype, g.prototype.constructor = o.EventEmitter, g.prototype.getLocale = function() {
		return this._registry.locale;
	}, g.prototype.setLocale = function(e) {
		var t = this._registry.locale;
		return t != e && (this._registry.locale = e, this.emit("localechange", e, t)), t;
	}, g.prototype.getFallbackLocale = function() {
		return this._registry.fallbackLocales;
	}, g.prototype.setFallbackLocale = function(e) {
		var t = this._registry.fallbackLocales;
		return this._registry.fallbackLocales = [].concat(e || []), t;
	}, g.prototype.getAvailableLocales = function() {
		return this._registry.availableLocales || Object.keys(this._registry.translations);
	}, g.prototype.setAvailableLocales = function(e) {
		var t = this.getAvailableLocales();
		return this._registry.availableLocales = e, t;
	}, g.prototype.getSeparator = function() {
		return this._registry.separator;
	}, g.prototype.setSeparator = function(e) {
		var t = this._registry.separator;
		return this._registry.separator = e, t;
	}, g.prototype.setInterpolate = function(e) {
		var t = this._registry.interpolate;
		return this._registry.interpolate = e, t;
	}, g.prototype.getInterpolate = function() {
		return this._registry.interpolate;
	}, g.prototype.setKeyTransformer = function(e) {
		var t = this._registry.keyTransformer;
		return this._registry.keyTransformer = e, t;
	}, g.prototype.getKeyTransformer = function() {
		return this._registry.keyTransformer;
	}, g.prototype.setMissingEntryGenerator = function(e) {
		var t = this._registry.generateMissingEntry;
		return this._registry.generateMissingEntry = e, t;
	}, g.prototype.getMissingEntryGenerator = function() {
		return this._registry.generateMissingEntry;
	}, g.prototype.registerTranslations = function(e, t) {
		var r = {};
		return r[e] = t, n(!0, this._registry.translations, r), r;
	}, g.prototype.registerInterpolations = function(e) {
		return n(!0, this._registry.interpolations, e);
	}, g.prototype.onLocaleChange = g.prototype.addLocaleChangeListener = function(e) {
		this.addListener("localechange", e);
	}, g.prototype.offLocaleChange = g.prototype.removeLocaleChangeListener = function(e) {
		this.removeListener("localechange", e);
	}, g.prototype.onTranslationNotFound = g.prototype.addTranslationNotFoundListener = function(e) {
		this.addListener("translationnotfound", e);
	}, g.prototype.offTranslationNotFound = g.prototype.removeTranslationNotFoundListener = function(e) {
		this.removeListener("translationnotfound", e);
	}, g.prototype.onError = g.prototype.addErrorListener = function(e) {
		this.addListener("error", e);
	}, g.prototype.offError = g.prototype.removeErrorListener = function(e) {
		this.removeListener("error", e);
	}, g.prototype.translate = function(e, t) {
		if (!r(e) && !u(e) || !e.length) throw Error("invalid argument: key");
		p(e) && (e = e.substr(1)), e = this._registry.keyTransformer(e, t), t = n(!0, {}, t);
		var i = t.locale || this._registry.locale;
		delete t.locale;
		var a = t.scope || this._registry.scope;
		delete t.scope;
		var o = t.separator || this._registry.separator;
		delete t.separator;
		var s = [].concat(t.fallbackLocale || this._registry.fallbackLocales);
		delete t.fallbackLocale;
		var c = this._normalizeKeys(i, a, e, o), l = h(this._registry.translations, c);
		if (l === null && (this.emit("translationnotfound", i, e, t.fallback, a), t.fallback && (l = this._fallback(i, a, e, t.fallback, t))), l === null && s.length > 0 && s.indexOf(i) === -1) for (var d = 0, f = s.length; d < f; d++) {
			var m = s[d], g = this._normalizeKeys(m, a, e, o);
			if (l = h(this._registry.translations, g), l) {
				i = m;
				break;
			}
		}
		return l === null && (l = this._registry.generateMissingEntry(c.join(o))), l = this._pluralize(i, l, t.count), this._registry.interpolate !== !1 && t.interpolate !== !1 && (l = this._interpolate(l, t)), l;
	}, g.prototype.localize = function(e, t) {
		if (!i(e)) throw Error("invalid argument: object must be a date");
		t = n(!0, {}, t);
		var r = t.locale || this._registry.locale, a = t.scope || l, o = t.type || "datetime", s = t.format || "default";
		return t = {
			locale: r,
			scope: a,
			interpolate: !1
		}, s = this.translate([
			"formats",
			o,
			s
		], n(!0, {}, t)), c(e, s, this.translate("names", t));
	}, g.prototype._pluralize = function(e, t, n) {
		if (typeof t != "object" || !t || typeof n != "number") return t;
		var r = this.translate("pluralize", {
			locale: e,
			scope: l
		});
		return Object.prototype.toString.call(r) === "[object Function]" ? r(t, n) : r;
	}, g.prototype.withLocale = function(e, t, n) {
		var r = this._registry.locale;
		this._registry.locale = e;
		var i = t.call(n);
		return this._registry.locale = r, i;
	}, g.prototype.withScope = function(e, t, n) {
		var r = this._registry.scope;
		this._registry.scope = e;
		var i = t.call(n);
		return this._registry.scope = r, i;
	}, g.prototype.withSeparator = function(e, t, n) {
		var r = this.setSeparator(e), i = t.call(n);
		return this.setSeparator(r), i;
	}, g.prototype._normalizeKeys = function(e, t, n, r) {
		var i = [];
		return i = i.concat(this._normalizeKey(e, r)), i = i.concat(this._normalizeKey(t, r)), i = i.concat(this._normalizeKey(n, r)), i;
	}, g.prototype._normalizeKey = function(e, t) {
		return this._registry.normalizedKeys[t] = this._registry.normalizedKeys[t] || {}, this._registry.normalizedKeys[t][e] = this._registry.normalizedKeys[t][e] || function(e) {
			if (r(e)) {
				var n = e.map(function(e) {
					return this._normalizeKey(e, t);
				}.bind(this));
				return [].concat.apply([], n);
			}
			if (e == null) return [];
			for (var i = e.split(t), a = i.length - 1; a >= 0; a--) i[a] === "" && (i.splice(a, 1), this._registry.keepTrailingDot === !0 && a == i.length && (i[i.length - 1] += "" + t));
			return i;
		}.bind(this)(e), this._registry.normalizedKeys[t][e];
	}, g.prototype._interpolate = function(e, t) {
		if (typeof e != "string") return e;
		try {
			return a(e, n({}, this._registry.interpolations, t));
		} catch (n) {
			if (this.listenerCount("error") > 0) this.emit("error", n, e, t);
			else throw n;
			return null;
		}
	}, g.prototype._resolve = function(e, t, r, i, a) {
		if (a ||= {}, a.resolve === !1) return i;
		var o;
		if (p(i)) o = this.translate(i, n({}, a, {
			locale: e,
			scope: t
		}));
		else if (d(i)) {
			var s;
			a.object ? (s = a.object, delete a.object) : s = r, o = this._resolve(e, t, r, i(s, a));
		} else o = i;
		return /^missing translation:/.test(o) ? null : o;
	}, g.prototype._fallback = function(e, t, n, i, a) {
		if (a = s(a, "fallback"), r(i)) {
			for (var o = 0, c = i.length; o < c; o++) {
				var l = this._resolve(e, t, n, i[o], a);
				if (l) return l;
			}
			return null;
		}
		return this._resolve(e, t, n, i, a);
	};
	var _ = new g();
	function v() {
		return _.translate.apply(_, arguments);
	}
	n(v, _, {
		Instance: g,
		Translator: g
	}), t.exports = v;
})))(), 1), Zb = "i18n/";
Xb.default.setSeparator("|");
var Qb = "en";
Xb.default.setFallbackLocale(Qb);
function $b(e, t) {
	Xb.default.registerTranslations(e, t);
}
function ex(e) {
	Xb.default.setMissingEntryGenerator(e);
}
function tx() {
	return Xb.default.getLocale();
}
function nx(e) {
	return Xb.default.setLocale(e);
}
function rx(e) {
	return e;
}
function ix(e) {
	return typeof e == "string" && !e.startsWith("missing translation:");
}
var ax = (e, t) => {
	let n = Xb.default.translate(e, {
		...t,
		fallbackLocale: Xb.default.getLocale()
	});
	if (ix(n)) return { translated: n };
	let r = Xb.default.translate(e, {
		...t,
		locale: Qb
	});
	return ix(r) ? {
		translated: r,
		isFallback: !0
	} : {
		translated: e,
		isFallback: !0
	};
};
function ox(e, t) {
	let n = {
		...t,
		interpolate: !1
	};
	return n && typeof n == "object" && Object.keys(n).forEach((e) => {
		n[e] === void 0 && (console.warn("safeCounterpartTranslate called with undefined interpolation name: " + e), n[e] = "undefined"), n[e] === null && (console.warn("safeCounterpartTranslate called with null interpolation name: " + e), n[e] = "null");
	}), ax(e, n);
}
var sx = (e, t) => e;
function U(e, t, n) {
	let { translated: r } = ox(e, t);
	return sx(dx(r, t, n), e);
}
function cx(e) {
	return ox(e, {}).translated;
}
function lx(e, t, n) {
	let { translated: r, isFallback: i } = ox(e, t), a = dx(r, t, n);
	return sx(i ? /* @__PURE__ */ (0, z.jsx)("span", {
		lang: "en",
		children: a
	}) : a, e);
}
function ux(e) {
	return e.replace(/%\(([^)]*)\)/g, "%\xA0($1)");
}
function dx(e, t, n) {
	let r = e;
	if (t !== void 0) {
		let e = {};
		for (let n in t) e[`%\\(${n}\\)s`] = t[n];
		r = fx(r, e);
	}
	if (n !== void 0) {
		let e = {};
		for (let t in n) e[`(<${t}>(.*?)<\\/${t}>|<${t}>|<${t}\\s*\\/>)`] = n[t];
		r = fx(r, e);
	}
	return r;
}
function fx(e, t) {
	let n = [e], r = !1;
	for (let i in t) {
		let a = new RegExp(i, "g"), o = !1;
		for (let e = 0; e < n.length; e++) {
			let s = n[e];
			if (typeof s != "string") continue;
			let c = a.exec(s);
			if (!c) continue;
			o = !0;
			let l = s.slice(0, c.index), u = [], d;
			for (; c;) {
				d = c;
				let e = c.slice(2), n;
				n = t[i] instanceof Function ? t[i](...e) : t[i], typeof n == "object" && (r = !0), (typeof n != "string" || n !== "") && u.push(n), c = a.exec(s);
				let o;
				if (c) {
					let e = d.index + d[0].length;
					o = s.slice(e, c.index);
				} else o = s.slice(d.index + d[0].length);
				o && u.push(o);
			}
			n.splice(e, 1, ...u), l !== "" && n.splice(e, 0, l);
		}
		o || i !== "%\\(count\\)s" && i !== "%\\(locale\\)s" && console.log(`Could not find ${a} in ${e}`);
	}
	return r ? o.createElement("span", null, ...n) : n.join("");
}
async function px(e) {
	let t = await hx(), n = e in t ? e : "en", r = await mx(Zb + t[n]);
	Xb.default.registerTranslations(n, r), Xb.default.setLocale(n);
}
async function mx(e) {
	console.log("Loading language from", e);
	let t = await fetch(e, { method: "GET" });
	if (!t.ok) throw Error(`Failed to load ${e}, got ${t.status}`);
	return t.json();
}
async function hx() {
	let e = `${Zb}languages.json?${Date.now()}`, t = await fetch(e, { method: "GET" });
	if (!t.ok) throw Error(`Failed to load ${e}, got ${t.status}`);
	return t.json();
}
var gx = { scrollbar: "_scrollbar_1d5jg_8" };
//#endregion
//#region src/core/utils/Scrollbar/AutoHideScrollbar.ts
function _x(e) {
	let { as: t = "div", className: n, onScroll: r, tabIndex: i, wrappedRef: a, children: s, ...c } = e, l = o.useRef(null), u = o.useRef(a);
	u.current = a;
	let d = o.useCallback((e) => {
		l.current = e;
	}, []);
	return o.useLayoutEffect(() => (u.current?.(l.current), () => {
		u.current?.(null);
	}), []), o.useLayoutEffect(() => {
		let e = l.current;
		if (!(!e || !r)) return e.addEventListener("scroll", r, { passive: !0 }), () => {
			e.removeEventListener("scroll", r);
		};
	}, [r]), o.createElement(t, {
		...c,
		ref: d,
		className: (0, R.default)(gx.scrollbar, n),
		tabIndex: i ?? -1
	}, s);
}
//#endregion
//#region src/core/roving/RovingTabIndex.tsx
function vx(e) {
	return e instanceof Element && e.matches("input:not([type=\"radio\"]):not([type=\"checkbox\"]), textarea, select, [contenteditable=true]");
}
var yx = l({
	state: { nodes: [] },
	dispatch: () => {}
});
yx.displayName = "RovingTabIndexContext";
var bx = /* @__PURE__ */ function(e) {
	return e.Register = "REGISTER", e.Unregister = "UNREGISTER", e.SetFocus = "SET_FOCUS", e.Update = "UPDATE", e;
}({}), xx = /* @__PURE__ */ function(e) {
	return e.Home = "HOME", e.End = "END", e.ArrowLeft = "ARROW_LEFT", e.ArrowUp = "ARROW_UP", e.ArrowRight = "ARROW_RIGHT", e.ArrowDown = "ARROW_DOWN", e.Tab = "TAB", e;
}({}), Sx = (e, t) => {
	if (e === t) return 0;
	let n = e.compareDocumentPosition(t);
	return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}, Cx = (e, t) => t >= e.length ? Ox(e, e.length - 1) : Dx(e, t) || Ox(e, t), wx = (e, t) => {
	e.activeNode = Cx(e.nodes, t), document.activeElement === document.body && setTimeout(() => e.activeNode?.focus(), 0);
}, Tx = (e, t) => {
	switch (t.type) {
		case "REGISTER": return e.activeNode ??= t.payload.node, e.nodes.includes(t.payload.node) ? e : (e.nodes.push(t.payload.node), e.nodes.sort(Sx), { ...e });
		case "UNREGISTER": {
			let n = e.nodes.indexOf(t.payload.node);
			return n === -1 ? e : (e.nodes.splice(n, 1)[0] === e.activeNode && wx(e, n), { ...e });
		}
		case "SET_FOCUS": return e.activeNode === t.payload.node ? e : (e.activeNode = t.payload.node, { ...e });
		case "UPDATE": return e.nodes.sort(Sx), { ...e };
		default: return e;
	}
}, Ex = (e, t, n, r) => {
	if (r === 1) {
		for (let i = t; i < n; i += r) if (e[i]?.offsetParent !== null) return e[i];
	} else for (let i = t; i > n; i += r) if (e[i]?.offsetParent !== null) return e[i];
}, Dx = (e, t, n = !1) => {
	let r = Ex(e, t, e.length, 1);
	return r || !n ? r : Ex(e.slice(0, t), 0, t, 1);
}, Ox = (e, t, n = !1) => {
	let r = Ex(e, t, -1, -1);
	if (r || !n) return r;
	let i = e.slice(t + 1);
	return Ex(i, i.length - 1, -1, -1);
}, kx = (e) => {
	switch (e.key) {
		case "Home": return "HOME";
		case "End": return "END";
		case "ArrowLeft": return "ARROW_LEFT";
		case "ArrowUp": return "ARROW_UP";
		case "ArrowRight": return "ARROW_RIGHT";
		case "ArrowDown": return "ARROW_DOWN";
		case "Tab": return "TAB";
		default: return;
	}
}, Ax = (e, t, n, r = !1) => {
	if (e.length === 0 || !t) return;
	let i = e.indexOf(t) + (n ? -1 : 1);
	return n ? Ox(e, i, r) : Dx(e, i, r);
}, jx = (e, t, n, r) => e === "TAB" ? {
	handled: !0,
	focusNode: Ax(t, n, r)
} : { handled: !1 }, Mx = (e, t, n, r, i) => ({
	HOME: {
		enabled: t,
		getFocusNode: (e) => Dx(e.nodes, 0)
	},
	END: {
		enabled: t,
		getFocusNode: (e) => Ox(e.nodes, e.nodes.length - 1)
	},
	ARROW_DOWN: {
		enabled: n,
		getFocusNode: (e) => Ax(e.nodes, e.activeNode, !1, i)
	},
	ARROW_RIGHT: {
		enabled: r,
		getFocusNode: (e) => Ax(e.nodes, e.activeNode, !1, i)
	},
	ARROW_UP: {
		enabled: n,
		getFocusNode: (e) => Ax(e.nodes, e.activeNode, !0, i)
	},
	ARROW_LEFT: {
		enabled: r,
		getFocusNode: (e) => Ax(e.nodes, e.activeNode, !0, i)
	},
	TAB: {
		enabled: !1,
		getFocusNode: () => void 0
	}
}), Nx = (e, t, n, r, i, a) => {
	if (!e) return { handled: !1 };
	let o = Mx(t, n, r, i, a)[e];
	return o?.enabled ? {
		handled: !0,
		focusNode: o.getFocusNode(t)
	} : { handled: !1 };
}, Px = ({ children: e, handleHomeEnd: t, handleUpDown: n, handleLeftRight: r, handleLoop: i, handleInputFields: a, scrollIntoView: o, onKeyDown: s, getAction: c = kx }) => {
	let [l, u] = C(Tx, { nodes: [] }), d = S(() => ({
		state: l,
		dispatch: u
	}), [l]), f = h((e) => {
		if (s && (s(e, d.state, d.dispatch), e.defaultPrevented)) return;
		let l = c(e), { handled: f, focusNode: p } = !a && vx(e.target) ? jx(l, d.state.nodes, d.state.activeNode, e.shiftKey) : Nx(l, d.state, t ?? !1, n ?? !1, r ?? !1, i ?? !1);
		f && (e.preventDefault(), e.stopPropagation()), p && (p.focus(), u({
			type: "SET_FOCUS",
			payload: { node: p }
		}), o && p.scrollIntoView(o));
	}, [
		d,
		c,
		s,
		t,
		n,
		r,
		i,
		a,
		o
	]), p = h(() => {
		u({ type: "UPDATE" });
	}, []);
	return /* @__PURE__ */ (0, z.jsx)(yx.Provider, {
		value: d,
		children: e({
			onKeyDownHandler: f,
			onDragEndHandler: p
		})
	});
}, Fx = (e) => {
	let t = g(yx), n = w(null);
	e && (n = e);
	let r = h((e) => {
		e ? (n.current = e, t.dispatch({
			type: "REGISTER",
			payload: { node: e }
		})) : (t.dispatch({
			type: "UNREGISTER",
			payload: { node: n.current }
		}), n.current = null);
	}, []);
	return [
		h(() => {
			if (!n.current) {
				console.warn("useRovingTabIndex.onFocus called but the react ref does not point to any DOM element!");
				return;
			}
			t.dispatch({
				type: "SET_FOCUS",
				payload: { node: n.current }
			});
		}, []),
		t.state.activeNode === n.current,
		r,
		n
	];
}, Ix = (e) => e.parentElement ?? void 0, Lx = (e) => {
	let t = e.children[0];
	return t instanceof HTMLElement ? t : void 0;
}, Rx = (e) => e === xx.ArrowLeft || e === xx.ArrowRight || e === xx.ArrowUp || e === xx.ArrowDown, zx = (e, t, n) => {
	if (!t.activeNode) return;
	let r = t.nodes.indexOf(t.activeNode);
	if (r !== -1) {
		if (e === xx.ArrowLeft) return Ox(t.nodes, r - 1, n);
		if (e === xx.ArrowRight) return Dx(t.nodes, r + 1, n);
	}
}, Bx = (e, t, n, r, i) => {
	if (!t.activeNode) return;
	let a = r(t.activeNode), o = n(t.activeNode);
	if (!a || !o) return;
	let s = Array.from(a.children).indexOf(o), c = t.nodes.indexOf(t.activeNode);
	if (s === -1 || c === -1) return;
	let l = e === xx.ArrowUp ? c - s - 1 : c - s + a.children.length, u = r(t.nodes[l]);
	if (u) {
		if (!(u instanceof HTMLElement) || u.offsetParent === null || u.children.length === 0) return;
		let e = Math.min(s, u.children.length - 1), n = i(u.children[e]);
		if (n?.offsetParent && t.nodes.includes(n)) return n;
	}
}, Vx = (e, t, n, r) => typeof e == "function" ? e(t, n, r) : e ?? !0, Hx = ({ children: e, getAction: t, getGridCell: n = Ix, getRow: r, getRovingNode: i = Lx, handleInputFields: a, handleLoop: o, moveFocus: s, onGridNavigation: c, onKeyDown: l, scrollIntoView: u, ...d }) => {
	let f = h((e) => r?.(e) ?? n(e)?.parentElement ?? void 0, [n, r]), p = h((e, r, d) => {
		if (l?.(e, r, d), e.defaultPrevented) return;
		let p = t?.(e) ?? Ux(e);
		if (!Rx(p) || !r.activeNode || !a && e.target instanceof HTMLElement && vx(e.target)) return;
		let m = p === xx.ArrowUp || p === xx.ArrowDown ? Bx(p, r, n, f, i) : zx(p, r, o);
		e.preventDefault(), e.stopPropagation(), m && (Vx(s, m, e, r) && m.focus(), d({
			type: bx.SetFocus,
			payload: { node: m }
		}), u && m.scrollIntoView(u), c?.(e, m, r, d));
	}, [
		t,
		n,
		i,
		a,
		o,
		s,
		c,
		l,
		f,
		u
	]);
	return /* @__PURE__ */ (0, z.jsx)(Px, {
		...d,
		getAction: t,
		handleInputFields: a,
		handleLoop: o,
		onKeyDown: p,
		scrollIntoView: u,
		children: e
	});
}, Ux = (e) => {
	switch (e.key) {
		case "ArrowLeft": return xx.ArrowLeft;
		case "ArrowUp": return xx.ArrowUp;
		case "ArrowRight": return xx.ArrowRight;
		case "ArrowDown": return xx.ArrowDown;
		default: return;
	}
}, Wx = ({ children: e, inputRef: t }) => {
	let [n, r, i] = Fx(t);
	return e({
		onFocus: n,
		isActive: r,
		ref: i
	});
}, Gx = (e) => {
	switch (e.key) {
		case "ArrowUp": return xx.ArrowUp;
		case "ArrowDown": return xx.ArrowDown;
		default: return;
	}
}, Kx = ({ children: e, ref: t, getAction: n, ...r }) => /* @__PURE__ */ (0, z.jsx)(Px, {
	handleHomeEnd: !0,
	handleLeftRight: !0,
	handleUpDown: !0,
	onKeyDown: (e) => {
		let t = e.target;
		if (t.tagName === "INPUT") return;
		let r = !0;
		switch (n?.(e) ?? Gx(e)) {
			case xx.ArrowUp:
			case xx.ArrowDown:
				t.hasAttribute("aria-haspopup") && t.click();
				break;
			default: r = !1;
		}
		r && (e.preventDefault(), e.stopPropagation());
	},
	getAction: n,
	children: ({ onKeyDownHandler: n }) => /* @__PURE__ */ (0, z.jsx)("div", {
		...r,
		onKeyDown: n,
		role: "toolbar",
		ref: t,
		children: e
	})
}), W = {
	picker: "_picker_1ezem_9",
	body: "_body_1ezem_20",
	header: "_header_1ezem_26",
	anchor: "_anchor_1ezem_31",
	anchorSelected: "_anchorSelected_1ezem_68",
	search: "_search_1ezem_72",
	searchIcon: "_searchIcon_1ezem_107",
	category: "_category_1ezem_118",
	categoryLabel: "_categoryLabel_1ezem_122",
	list: "_list_1ezem_127",
	row: "_row_1ezem_134",
	itemWrapper: "_itemWrapper_1ezem_139",
	bodyShowHighlight: "_bodyShowHighlight_1ezem_150",
	item: "_item_1ezem_139",
	itemSelected: "_itemSelected_1ezem_169",
	previewName: "_previewName_1ezem_176",
	footer: "_footer_1ezem_182",
	previewEmoji: "_previewEmoji_1ezem_191",
	previewText: "_previewText_1ezem_196",
	name: "_name_1ezem_205",
	shortcode: "_shortcode_1ezem_209",
	quick: "_quick_1ezem_220",
	quickHeader: "_quickHeader_1ezem_225"
}, qx = (e) => {
	switch (e.key) {
		case "ArrowLeft": return xx.ArrowLeft;
		case "ArrowRight": return xx.ArrowRight;
		case "Home": return xx.Home;
		case "End": return xx.End;
		default: return;
	}
}, Jx = ({ categories: e, enabledCategories: t, selectedCategory: n, onAnchorClick: r, pickerBodyId: i, getAction: a }) => {
	let s = h((n, r) => {
		n += e.length;
		let i = [
			...e,
			...e,
			...e
		];
		for (; n < i.length && n >= 0;) {
			if (t.includes(i[n].id)) return n % e.length;
			n += r > 0 ? 1 : -1;
		}
	}, [e, t]), c = h((t, n = 1) => {
		let i = e[s(t, n)];
		i && (r(i.id), d.current[i.id]?.current?.focus());
	}, [
		e,
		s,
		r
	]), l = h((t) => {
		let r = e.findIndex((e) => e.id === n);
		c(r + t, t);
	}, [
		e,
		n,
		c
	]), u = h((t) => {
		let n = !0;
		switch (a?.(t) ?? qx(t)) {
			case xx.ArrowLeft:
				l(-1);
				break;
			case xx.ArrowRight:
				l(1);
				break;
			case xx.Home:
				c(0);
				break;
			case xx.End:
				c(e.length - 1, -1);
				break;
			default: n = !1;
		}
		n && (t.preventDefault(), t.stopPropagation());
	}, [
		a,
		l,
		c,
		e.length
	]), d = w({});
	if (!d.current.recent) for (let t of e) d.current[t.id] = o.createRef();
	return /* @__PURE__ */ (0, z.jsx)("nav", {
		className: W.header,
		role: "tablist",
		"aria-label": U("emoji|categories"),
		onKeyDown: u,
		children: e.map((e) => {
			let a = (0, R.default)(W.anchor, { [W.anchorSelected]: e.id === n });
			return /* @__PURE__ */ (0, z.jsx)("button", {
				type: "button",
				disabled: !t.includes(e.id),
				ref: d.current[e.id],
				className: a,
				onClick: () => r(e.id),
				title: U(e.untranslatedName),
				role: "tab",
				tabIndex: e.id === n ? 0 : -1,
				"aria-selected": e.id === n,
				"aria-controls": i,
				children: e.emoji
			}, e.id);
		})
	});
};
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/arrow-down.js
function Yx(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M12 4.5a1 1 0 0 1 1 1v10.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 1 1 1.414-1.414L11 16.086V5.5a1 1 0 0 1 1-1" })
	});
}
Yx.displayName = "ArrowDownIcon";
var Xx = d(Yx);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/arrow-right.js
function Zx(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M11.793 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L16.086 13H5.5a1 1 0 1 1 0-2h10.586l-4.293-4.293a1 1 0 0 1 0-1.414" })
	});
}
Zx.displayName = "ArrowRightIcon";
var Qx = d(Zx);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/ask-to-join.js
function $x(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M12 18.156q.478 0 .802-.323.323-.324.323-.802h-2.25q0 .478.323.802.324.323.802.323M8.063 16.47h7.874a.54.54 0 0 0 .394-.169.54.54 0 0 0 0-.788.54.54 0 0 0-.393-.168h-.563V12.7q0-1.237-.675-2.25a3 3 0 0 0-1.856-1.294v-.281a.82.82 0 0 0-.24-.605.82.82 0 0 0-.604-.239.82.82 0 0 0-.844.844v.281A3 3 0 0 0 9.3 10.45a3.97 3.97 0 0 0-.675 2.25v2.644h-.562a.54.54 0 0 0-.394.168.54.54 0 0 0 0 .788.54.54 0 0 0 .394.169M3 19.844V9.719q0-.534.24-1.013.238-.478.66-.787l6.75-5.063q.31-.225.647-.337.338-.113.703-.113.366 0 .703.113.337.112.647.337L20.1 7.92q.422.309.66.787.24.479.24 1.013v10.125q0 .927-.66 1.589-.662.66-1.59.66H5.25q-.928 0-1.59-.66-.66-.66-.66-1.59m2.25 0h13.5V9.719L12 4.656 5.25 9.72z" })
	});
}
$x.displayName = "AskToJoinIcon";
var eS = d($x);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/attachment.js
function tS(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M11.5 22q-2.3 0-3.9-1.6T6 16.5V6q0-1.65 1.175-2.825T10 2t2.825 1.175T14 6v9.5q0 1.05-.725 1.775T11.5 18t-1.775-.725T9 15.5V6.75A.73.73 0 0 1 9.75 6a.73.73 0 0 1 .75.75v8.75q0 .424.287.712.288.288.713.288.424 0 .713-.288a.97.97 0 0 0 .287-.712V6q0-1.05-.725-1.775T10 3.5t-1.775.725T7.5 6v10.5q0 1.65 1.175 2.825T11.5 20.5t2.825-1.175T15.5 16.5V6.75a.73.73 0 0 1 .75-.75.73.73 0 0 1 .75.75v9.75q0 2.3-1.6 3.9T11.5 22" })
	});
}
tS.displayName = "AttachmentIcon";
var nS = d(tS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/block.js
function rS(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M12 22a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12q0-1.35-.437-2.6A8 8 0 0 0 18.3 7.1L7.1 18.3q1.05.825 2.3 1.262T12 20m-6.3-3.1L16.9 5.7a8 8 0 0 0-2.3-1.263A7.8 7.8 0 0 0 12 4Q8.65 4 6.325 6.325T4 12q0 1.35.438 2.6A8 8 0 0 0 5.7 16.9" })
	});
}
rS.displayName = "BlockIcon";
var iS = d(rS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/chat-problem.js
function aS(e, t) {
	return /*#__PURE__*/ (0, z.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ (0, z.jsx)("path", { d: "M12.713 16.713A.97.97 0 0 1 12 17a.97.97 0 0 1-.713-.288A.97.97 0 0 1 11 16q0-.424.287-.713A.97.97 0 0 1 12 15q.424 0 .713.287.287.288.287.713 0 .424-.287.712m0-3.999A.97.97 0 0 1 12 13a.97.97 0 0 1-.713-.287A.97.97 0 0 1 11 12V8q0-.424.287-.713A.97.97 0 0 1 12 7q.424 0 .713.287Q13 7.576 13 8v4q0 .424-.287.713" }), /*#__PURE__*/ (0, z.jsx)("path", { d: "M2.95 16.3a10.2 10.2 0 0 1-.712-2.1A10.2 10.2 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22q-1.125 0-2.2-.238a10.2 10.2 0 0 1-2.1-.712L2.75 22.5a.94.94 0 0 1-1-.25.94.94 0 0 1-.25-1zm4.2 2.8a1 1 0 0 1 .275-.062q.15-.013.275-.013.225 0 .438.038.212.036.412.137a7.4 7.4 0 0 0 1.675.6Q11.1 20 12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12q0 .9.2 1.775t.6 1.675q.176.325.188.688t-.088.712l-.95 3.2z" })]
	});
}
aS.displayName = "ChatProblemIcon";
var oS = d(aS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/chat.js
function sS(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "m1.5 21.25 1.45-4.95a10.2 10.2 0 0 1-.712-2.1A10.2 10.2 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22q-1.125 0-2.2-.238a10.2 10.2 0 0 1-2.1-.712L2.75 22.5a.94.94 0 0 1-1-.25.94.94 0 0 1-.25-1m2.45-1.2 3.2-.95a1 1 0 0 1 .275-.062q.15-.013.275-.013.225 0 .438.038.212.036.412.137a7.4 7.4 0 0 0 1.675.6Q11.1 20 12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12q0 .9.2 1.775t.6 1.675q.176.325.188.688t-.088.712z" })
	});
}
sS.displayName = "ChatIcon";
var cS = d(sS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/check-circle.js
function lS(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "m10.6 13.8-2.15-2.15a.95.95 0 0 0-.7-.275.95.95 0 0 0-.7.275.95.95 0 0 0-.275.7q0 .425.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65a.95.95 0 0 0 .275-.7.95.95 0 0 0-.275-.7.95.95 0 0 0-.7-.275.95.95 0 0 0-.7.275zM12 22a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20" })
	});
}
lS.displayName = "CheckCircleIcon";
var uS = d(lS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/check.js
function dS(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M9.55 17.575q-.2 0-.375-.062a.9.9 0 0 1-.325-.213L4.55 13q-.274-.274-.262-.713.012-.437.287-.712a.95.95 0 0 1 .7-.275q.425 0 .7.275L9.55 15.15l8.475-8.475q.274-.275.713-.275.437 0 .712.275.275.274.275.713 0 .437-.275.712l-9.2 9.2q-.15.15-.325.212a1.1 1.1 0 0 1-.375.063" })
	});
}
dS.displayName = "CheckIcon";
var fS = d(dS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-down.js
function pS(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M12 14.95q-.2 0-.375-.062a.9.9 0 0 1-.325-.213l-4.6-4.6a.95.95 0 0 1-.275-.7q0-.425.275-.7a.95.95 0 0 1 .7-.275q.425 0 .7.275l3.9 3.9 3.9-3.9a.95.95 0 0 1 .7-.275q.425 0 .7.275a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7l-4.6 4.6q-.15.15-.325.212a1.1 1.1 0 0 1-.375.063" })
	});
}
pS.displayName = "ChevronDownIcon";
var mS = d(pS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-left.js
function hS(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "m13.3 17.3-4.6-4.6a.9.9 0 0 1-.213-.325A1.1 1.1 0 0 1 8.425 12q0-.2.062-.375A.9.9 0 0 1 8.7 11.3l4.6-4.6a.95.95 0 0 1 .7-.275q.425 0 .7.275a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7L10.8 12l3.9 3.9a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275" })
	});
}
hS.displayName = "ChevronLeftIcon";
var gS = d(hS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-right.js
function _S(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M8.7 17.3a.95.95 0 0 1-.275-.7q0-.425.275-.7l3.9-3.9-3.9-3.9a.95.95 0 0 1-.275-.7q0-.425.275-.7a.95.95 0 0 1 .7-.275q.425 0 .7.275l4.6 4.6q.15.15.213.325.062.175.062.375t-.062.375a.9.9 0 0 1-.213.325l-4.6 4.6a.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275" })
	});
}
_S.displayName = "ChevronRightIcon";
var vS = d(_S);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-up.js
function yS(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "m12 10.775-3.9 3.9a.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275.95.95 0 0 1-.275-.7q0-.425.275-.7l4.6-4.6q.15-.15.325-.212Q11.8 8.4 12 8.4t.375.063a.9.9 0 0 1 .325.212l4.6 4.6a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275z" })
	});
}
yS.displayName = "ChevronUpIcon";
var bS = d(yS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/close.js
function xS(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M6.293 6.293a1 1 0 0 1 1.414 0L12 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414L13.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.586 12 6.293 7.707a1 1 0 0 1 0-1.414" })
	});
}
xS.displayName = "CloseIcon";
var SS = d(xS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/collapse-all.js
function CS(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "m12 16.975-3.9 3.9a.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275.95.95 0 0 1-.275-.7q0-.425.275-.7l3.875-3.875q.575-.575 1.425-.575t1.425.575l3.875 3.875a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275zm0-9.8 3.9-3.9A.95.95 0 0 1 16.6 3q.425 0 .7.275a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7L13.425 8.55q-.575.575-1.425.575t-1.425-.575L6.7 4.675a.95.95 0 0 1-.275-.7q0-.425.275-.7A.95.95 0 0 1 7.4 3q.425 0 .7.275z" })
	});
}
CS.displayName = "CollapseAllIcon";
var wS = d(CS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/collapse.js
function TS(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M12 11.034a1 1 0 0 0 .29.702l.005.005c.18.18.43.29.705.29h8a1 1 0 0 0 0-2h-5.586L22 3.445a1 1 0 0 0-1.414-1.414L14 8.617V3.031a1 1 0 1 0-2 0zm0 1.963a1 1 0 0 0-.29-.702l-.005-.004A1 1 0 0 0 11 12H3a1 1 0 1 0 0 2h5.586L2 20.586A1 1 0 1 0 3.414 22L10 15.414V21a1 1 0 0 0 2 0z" })
	});
}
TS.displayName = "CollapseIcon";
var ES = d(TS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/delete.js
function DS(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M7 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 5 19V6a.97.97 0 0 1-.713-.287A.97.97 0 0 1 4 5q0-.424.287-.713A.97.97 0 0 1 5 4h4q0-.424.287-.712A.97.97 0 0 1 10 3h4q.424 0 .713.288Q15 3.575 15 4h4q.424 0 .712.287Q20 4.576 20 5t-.288.713A.97.97 0 0 1 19 6v13q0 .824-.587 1.413A1.93 1.93 0 0 1 17 21zM7 6v13h10V6zm2 10q0 .424.287.712Q9.576 17 10 17t.713-.288A.97.97 0 0 0 11 16V9a.97.97 0 0 0-.287-.713A.97.97 0 0 0 10 8a.97.97 0 0 0-.713.287A.97.97 0 0 0 9 9zm4 0q0 .424.287.712.288.288.713.288.424 0 .713-.288A.97.97 0 0 0 15 16V9a.97.97 0 0 0-.287-.713A.97.97 0 0 0 14 8a.97.97 0 0 0-.713.287A.97.97 0 0 0 13 9z" })
	});
}
DS.displayName = "DeleteIcon";
var OS = d(DS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/devices.js
function kS(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M3.5 20q-.625 0-1.062-.437A1.45 1.45 0 0 1 2 18.5q0-.625.438-1.062A1.45 1.45 0 0 1 3.5 17H4V6q0-.824.588-1.412A1.93 1.93 0 0 1 6 4h14q.424 0 .712.287Q21 4.576 21 5t-.288.713A.97.97 0 0 1 20 6H6v11h4.5q.624 0 1.063.438.437.437.437 1.062t-.437 1.063A1.45 1.45 0 0 1 10.5 20zM15 20a.97.97 0 0 1-.713-.288A.97.97 0 0 1 14 19V9q0-.424.287-.713A.97.97 0 0 1 15 8h6q.424 0 .712.287Q22 8.576 22 9v10q0 .424-.288.712A.97.97 0 0 1 21 20zm1-3h4v-7h-4z" })
	});
}
kS.displayName = "DevicesIcon";
var AS = d(kS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/dial-pad.js
function jS(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M12 18.6c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8M6.6 2.4c-.99 0-1.8.81-1.8 1.8S5.61 6 6.6 6s1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0 5.4c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0 5.4c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8M17.4 6c.99 0 1.8-.81 1.8-1.8s-.81-1.8-1.8-1.8-1.8.81-1.8 1.8.81 1.8 1.8 1.8M12 13.2c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m5.4 0c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0-5.4c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m-5.4 0c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0-5.4c-.99 0-1.8.81-1.8 1.8S11.01 6 12 6s1.8-.81 1.8-1.8-.81-1.8-1.8-1.8" })
	});
}
jS.displayName = "DialPadIcon";
var MS = d(jS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/download.js
function NS(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M12 15.575q-.2 0-.375-.062a.9.9 0 0 1-.325-.213l-3.6-3.6a.95.95 0 0 1-.275-.7q0-.425.275-.7.274-.275.712-.288t.713.263L11 12.15V5q0-.424.287-.713A.97.97 0 0 1 12 4q.424 0 .713.287Q13 4.576 13 5v7.15l1.875-1.875q.274-.274.713-.263.437.014.712.288a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7l-3.6 3.6q-.15.15-.325.212a1.1 1.1 0 0 1-.375.063M6 20q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 18v-2q0-.424.287-.713A.97.97 0 0 1 5 15q.424 0 .713.287Q6 15.576 6 16v2h12v-2q0-.424.288-.713A.97.97 0 0 1 19 15q.424 0 .712.287.288.288.288.713v2q0 .824-.587 1.413A1.93 1.93 0 0 1 18 20z" })
	});
}
NS.displayName = "DownloadIcon";
var PS = d(NS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/drag-list.js
function FS(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M5 15a.97.97 0 0 1-.713-.287A.97.97 0 0 1 4 14q0-.424.287-.713A.97.97 0 0 1 5 13h14q.424 0 .712.287.288.288.288.713 0 .424-.288.713A.97.97 0 0 1 19 15zm0-4a.97.97 0 0 1-.713-.287A.97.97 0 0 1 4 10q0-.424.287-.713A.97.97 0 0 1 5 9h14q.424 0 .712.287Q20 9.576 20 10t-.288.713A.97.97 0 0 1 19 11z" })
	});
}
FS.displayName = "DragListIcon";
var IS = d(FS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/edit.js
function LS(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", {
			fillRule: "evenodd",
			d: "M15.706 2.637a2 2 0 0 1 2.829 0l2.828 2.828a2 2 0 0 1 0 2.829L9.605 20.052a1 1 0 0 1-.465.263L3.483 21.73a1 1 0 0 1-1.212-1.213l1.414-5.657a1 1 0 0 1 .263-.465zm1.224 7.262L14.102 7.07l-8.544 8.544-.943 3.771 3.771-.943z",
			clipRule: "evenodd"
		})
	});
}
LS.displayName = "EditIcon";
var RS = d(LS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/email-solid.js
function zS(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 5.111a1 1 0 0 0 .514.874l7 3.89a1 1 0 0 0 .972 0l7-3.89a1 1 0 1 0-.972-1.748L12 11.856 5.486 8.237A1 1 0 0 0 4 9.111" })
	});
}
zS.displayName = "EmailSolidIcon";
var BS = d(zS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/error-solid.js
function VS(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M12 17q.424 0 .713-.288A.97.97 0 0 0 13 16a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 15a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 16q0 .424.287.712.288.288.713.288m0-4q.424 0 .713-.287A.97.97 0 0 0 13 12V8a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 7a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 8v4q0 .424.287.713.288.287.713.287m0 9a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22" })
	});
}
VS.displayName = "ErrorSolidIcon";
var HS = d(VS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/error.js
function US(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M12 17q.424 0 .713-.288A.97.97 0 0 0 13 16a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 15a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 16q0 .424.287.712.288.288.713.288m0-4q.424 0 .713-.287A.97.97 0 0 0 13 12V8a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 7a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 8v4q0 .424.287.713.288.287.713.287m0 9a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20" })
	});
}
US.displayName = "ErrorIcon";
var WS = d(US);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/expand-all.js
function GS(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "m12 19.2 3.9-3.9a.95.95 0 0 1 .7-.275q.425 0 .7.275a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7l-3.875 3.875q-.575.575-1.425.575t-1.425-.575L6.7 16.7a.95.95 0 0 1-.275-.7q0-.425.275-.7a.95.95 0 0 1 .7-.275q.425 0 .7.275zm0-14.25-3.9 3.9a.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275.95.95 0 0 1-.275-.7q0-.425.275-.7l3.875-3.875Q11.15 3 12 3t1.425.575L17.3 7.45a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275z" })
	});
}
GS.displayName = "ExpandAllIcon";
var KS = d(GS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/expand.js
function qS(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M21 3.997a1 1 0 0 0-.29-.702l-.005-.004A1 1 0 0 0 20 3h-8a1 1 0 1 0 0 2h5.586L5 17.586V12a1 1 0 1 0-2 0v8.003a1 1 0 0 0 .29.702l.005.004c.18.18.43.291.705.291h8a1 1 0 1 0 0-2H6.414L19 6.414V12a1 1 0 1 0 2 0z" })
	});
}
qS.displayName = "ExpandIcon";
var JS = d(qS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/explore.js
function YS(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M12 13a.97.97 0 0 1-.713-.287A.97.97 0 0 1 11 12q0-.424.287-.713A.97.97 0 0 1 12 11q.424 0 .713.287.287.288.287.713 0 .424-.287.713A.97.97 0 0 1 12 13m0 9a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20m0 0q-3.35 0-5.675-2.325T4 12t2.325-5.675T12 4t5.675 2.325T20 12t-2.325 5.675T12 20m1.675-5.85q.15-.075.275-.2t.2-.275l2.925-6.25q.125-.25-.062-.437-.188-.188-.438-.063l-6.25 2.925q-.15.075-.275.2t-.2.275l-2.925 6.25q-.125.25.063.438.186.186.437.062z" })
	});
}
YS.displayName = "ExploreIcon";
var XS = d(YS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/favourite.js
function ZS(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M13.905 9.378 12 5.52l-1.905 3.86-4.259.618 3.082 3.004-.727 4.242L12 15.24l3.81 2.003-.728-4.242 3.082-3.004zM8.767 7.55l2.336-4.733a1 1 0 0 1 1.794 0l2.336 4.733 5.223.76a1 1 0 0 1 .555 1.705L17.23 13.7l.892 5.202a1 1 0 0 1-1.45 1.054L12 17.5l-4.672 2.456a1 1 0 0 1-1.451-1.054l.892-5.202-3.78-3.685a1 1 0 0 1 .555-1.706z" })
	});
}
ZS.displayName = "FavouriteIcon";
var QS = d(ZS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/file-error.js
function $S(e, t) {
	return /*#__PURE__*/ (0, z.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ (0, z.jsx)("path", { d: "M6 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 20V4q0-.824.588-1.412A1.93 1.93 0 0 1 6 2h7.175a1.98 1.98 0 0 1 1.4.575l4.85 4.85q.275.275.425.638.15.361.15.762v3.516A6 6 0 0 0 18 12V9h-4a.97.97 0 0 1-.713-.287A.97.97 0 0 1 13 8V4H6v16h6.341c.264.745.67 1.423 1.187 2z" }), /*#__PURE__*/ (0, z.jsx)("path", { d: "M18 14a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m-1 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0" })]
	});
}
$S.displayName = "FileErrorIcon";
var eC = d($S);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/history.js
function tC(e, t) {
	return /*#__PURE__*/ (0, z.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ (0, z.jsx)("path", { d: "M18.93 8A8 8 0 1 1 4 12a1 1 0 1 0-2 0c0 5.523 4.477 10 10 10s10-4.477 10-10a10 10 0 0 0-.832-4A10 10 0 0 0 12 2a9.99 9.99 0 0 0-8 3.999V4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2H5.755A7.99 7.99 0 0 1 12 4a8 8 0 0 1 6.93 4" }), /*#__PURE__*/ (0, z.jsx)("path", { d: "M13 8a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l2.83 2.83a1 1 0 0 0 1.414-1.414L13 11.586z" })]
	});
}
tC.displayName = "HistoryIcon";
var nC = d(tC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/home.js
function rC(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", {
			fillRule: "evenodd",
			d: "M16 11v8h3V9.177l-7-3.889-7 3.889V19h3v-8zm-6 10H5a2 2 0 0 1-2-2V9.177a2 2 0 0 1 1.029-1.748l7-3.89a2 2 0 0 1 1.942 0l7 3.89A2 2 0 0 1 21 9.177V19a2 2 0 0 1-2 2h-5v-8h-4z",
			clipRule: "evenodd"
		})
	});
}
rC.displayName = "HomeIcon";
var iC = d(rC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/image-error.js
function aC(e, t) {
	return /*#__PURE__*/ (0, z.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ (0, z.jsx)("path", { d: "M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.803a6 6 0 0 1-.72-2H5v-3.172l4-4 3.585 3.585a6 6 0 0 1 1.172-1.656l-3.343-3.343a2 2 0 0 0-2.828 0L5 13V5h14v7.083c.718.12 1.393.368 2 .72V5a2 2 0 0 0-2-2z" }), /*#__PURE__*/ (0, z.jsx)("path", { d: "M17 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0m1 5a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m-1 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0" })]
	});
}
aC.displayName = "ImageErrorIcon";
var oC = d(aC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/info.js
function sC(e, t) {
	return /*#__PURE__*/ (0, z.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ (0, z.jsx)("path", { d: "M11.288 7.288A.97.97 0 0 1 12 7q.424 0 .713.287Q13 7.576 13 8t-.287.713A.97.97 0 0 1 12 9a.97.97 0 0 1-.713-.287A.97.97 0 0 1 11 8q0-.424.287-.713m.001 4.001A.97.97 0 0 1 12 11q.424 0 .713.287.287.288.287.713v4q0 .424-.287.712A.97.97 0 0 1 12 17a.97.97 0 0 1-.713-.288A.97.97 0 0 1 11 16v-4q0-.424.287-.713" }), /*#__PURE__*/ (0, z.jsx)("path", {
			fillRule: "evenodd",
			d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0",
			clipRule: "evenodd"
		})]
	});
}
sC.displayName = "InfoIcon";
var cC = d(sC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/inline-code.js
function lC(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M14.958 5.62a1 1 0 0 0-1.916-.574l-4 13.333a1 1 0 0 0 1.916.575zM5.974 7.232a1 1 0 0 0-1.409.128l-3.333 4a1 1 0 0 0 0 1.28l3.333 4a1 1 0 1 0 1.537-1.28L3.302 12l2.8-3.36a1 1 0 0 0-.128-1.408m12.053 0a1 1 0 0 1 1.408.128l3.333 4a1 1 0 0 1 0 1.28l-3.333 4a1 1 0 1 1-1.537-1.28l2.8-3.36-2.8-3.36a1 1 0 0 1 .128-1.408" })
	});
}
lC.displayName = "InlineCodeIcon";
var uC = d(lC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/leave.js
function dC(e, t) {
	return /*#__PURE__*/ (0, z.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ (0, z.jsx)("path", { d: "M14 13q.424 0 .713-.287A.97.97 0 0 0 15 12a.97.97 0 0 0-.287-.713A.97.97 0 0 0 14 11a.97.97 0 0 0-.713.287A.97.97 0 0 0 13 12q0 .424.287.713.288.287.713.287" }), /*#__PURE__*/ (0, z.jsx)("path", { d: "M10.385 21.788A1 1 0 0 1 10 21V3a1.003 1.003 0 0 1 1.242-.97l8 2A1 1 0 0 1 20 5v14a1 1 0 0 1-.758.97l-8 2a1 1 0 0 1-.857-.182M18 5.781l-6-1.5v15.438l6-1.5zM9 6H7v12h2v2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2z" })]
	});
}
dC.displayName = "LeaveIcon";
var fC = d(dC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/link.js
function pC(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M12 19.071q-1.467 1.467-3.536 1.467-2.067 0-3.535-1.467t-1.467-3.535q0-2.07 1.467-3.536L7.05 9.879q.3-.3.707-.3t.707.3.301.707-.3.707l-2.122 2.121a2.9 2.9 0 0 0-.884 2.122q0 1.237.884 2.12.884.885 2.121.885t2.122-.884l2.121-2.121q.3-.3.707-.3t.707.3.3.707q0 .405-.3.707zm-1.414-4.243q-.3.3-.707.301a.97.97 0 0 1-.707-.3q-.3-.3-.301-.708 0-.405.3-.707l4.243-4.242q.3-.3.707-.3t.707.3.3.707-.3.707zm6.364-.707q-.3.3-.707.3a.97.97 0 0 1-.707-.3q-.3-.3-.301-.707 0-.405.3-.707l2.122-2.121q.884-.885.884-2.121 0-1.238-.884-2.122a2.9 2.9 0 0 0-2.121-.884q-1.237 0-2.122.884l-2.121 2.122q-.3.3-.707.3a.97.97 0 0 1-.707-.3q-.3-.3-.3-.708 0-.405.3-.707L12 4.93q1.467-1.467 3.536-1.467t3.535 1.467 1.467 3.536T19.071 12z" })
	});
}
pC.displayName = "LinkIcon";
var mC = d(pC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/lock-solid.js
function hC(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M6 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 20V10q0-.825.588-1.412A1.93 1.93 0 0 1 6 8h1V6q0-2.075 1.463-3.537Q9.926 1 12 1q2.075 0 3.537 1.463Q17 3.925 17 6v2h1q.824 0 1.413.588Q20 9.175 20 10v10q0 .824-.587 1.413A1.93 1.93 0 0 1 18 22zM9 8h6V6q0-1.25-.875-2.125A2.9 2.9 0 0 0 12 3q-1.25 0-2.125.875A2.9 2.9 0 0 0 9 6z" })
	});
}
hC.displayName = "LockSolidIcon";
var gC = d(hC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/lock.js
function _C(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M6 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 20V10q0-.825.588-1.412A1.93 1.93 0 0 1 6 8h1V6q0-2.075 1.463-3.537Q9.926 1 12 1q2.075 0 3.537 1.463Q17 3.925 17 6v2h1q.824 0 1.413.588Q20 9.175 20 10v10q0 .824-.587 1.413A1.93 1.93 0 0 1 18 22zm0-2h12V10H6zM9 8h6V6q0-1.25-.875-2.125A2.9 2.9 0 0 0 12 3q-1.25 0-2.125.875A2.9 2.9 0 0 0 9 6z" })
	});
}
_C.displayName = "LockIcon";
var vC = d(_C);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/mark-as-read.js
function yC(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M21.324 9.13c0-.66-.339-1.237-.862-1.558l-7.37-4.318a1.81 1.81 0 0 0-1.851 0L3.87 7.572C3.348 7.892 3 8.47 3 9.13v9.167c0 1.008.825 1.833 1.833 1.833H19.5a1.84 1.84 0 0 0 1.833-1.833zm-10.129 3.978-6.6-4.124 6.646-3.896a1.81 1.81 0 0 1 1.851 0l6.646 3.896-6.6 4.124a1.85 1.85 0 0 1-1.943 0" })
	});
}
yC.displayName = "MarkAsReadIcon";
var bC = d(yC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/mark-as-unread.js
function xC(e, t) {
	return /*#__PURE__*/ (0, z.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ (0, z.jsx)("path", { d: "M20 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" }), /*#__PURE__*/ (0, z.jsx)("path", {
			fillRule: "evenodd",
			d: "M17 5H5a2 2 0 0 0-2 2v10.4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7.83a3 3 0 0 1-2 0q-.316-.113-.595-.288L12 11.89 5 7.138V7h12.764A3 3 0 0 1 17 5m-4.438 8.927L19 9.555V17.4H5V9.555l6.438 4.372a1 1 0 0 0 1.124 0",
			clipRule: "evenodd"
		})]
	});
}
xC.displayName = "MarkAsUnreadIcon";
var SC = d(xC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/mention.js
function CC(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M12 4a8 8 0 1 0 0 16 1 1 0 1 1 0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10v1.5a3.5 3.5 0 0 1-6.396 1.966A5 5 0 1 1 17 12v1.5a1.5 1.5 0 0 0 3 0V12a8 8 0 0 0-8-8m3 8a3 3 0 1 0-6 0 3 3 0 0 0 6 0" })
	});
}
CC.displayName = "MentionIcon";
var wC = d(CC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/minus.js
function TC(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M6 13a.97.97 0 0 1-.713-.287A.97.97 0 0 1 5 12q0-.424.287-.713A.97.97 0 0 1 6 11h12q.424 0 .712.287.288.288.288.713 0 .424-.288.713A.97.97 0 0 1 18 13z" })
	});
}
TC.displayName = "MinusIcon";
var EC = d(TC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/notifications-off-solid.js
function DC(e, t) {
	return /*#__PURE__*/ (0, z.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ (0, z.jsx)("path", { d: "m4.917 2.083 17 17a1 1 0 0 1-1.414 1.414L19.006 19H4.414c-.89 0-1.337-1.077-.707-1.707L5 16v-6s0-2.034 1.096-3.91L3.504 3.498a1 1 0 0 1 1.414-1.414M19 13.35 9.136 3.484C9.93 3.181 10.874 3 12 3c7 0 7 7 7 7z" }), /*#__PURE__*/ (0, z.jsx)("path", { d: "M10 20h4a2 2 0 0 1-4 0" })]
	});
}
DC.displayName = "NotificationsOffSolidIcon";
var OC = d(DC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/notifications-solid.js
function kC(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M20.293 17.293c.63.63.184 1.707-.707 1.707H4.414c-.89 0-1.337-1.077-.707-1.707L5 16v-6s0-7 7-7 7 7 7 7v6zM12 22a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2" })
	});
}
kC.displayName = "NotificationsSolidIcon";
var AC = d(kC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/overflow-horizontal.js
function jC(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M6 14q-.824 0-1.412-.588A1.93 1.93 0 0 1 4 12q0-.825.588-1.412A1.93 1.93 0 0 1 6 10q.824 0 1.412.588Q8 11.175 8 12t-.588 1.412A1.93 1.93 0 0 1 6 14m6 0q-.825 0-1.412-.588A1.93 1.93 0 0 1 10 12q0-.825.588-1.412A1.93 1.93 0 0 1 12 10q.825 0 1.412.588Q14 11.175 14 12t-.588 1.412A1.93 1.93 0 0 1 12 14m6 0q-.824 0-1.413-.588A1.93 1.93 0 0 1 16 12q0-.825.587-1.412A1.93 1.93 0 0 1 18 10q.824 0 1.413.588Q20 11.175 20 12t-.587 1.412A1.93 1.93 0 0 1 18 14" })
	});
}
jC.displayName = "OverflowHorizontalIcon";
var MC = d(jC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/pin-solid.js
function NC(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M5.769 2.857A.5.5 0 0 1 6.119 2h11.762a.5.5 0 0 1 .35.857L16.15 4.9a.5.5 0 0 0-.15.357v4.487a.5.5 0 0 0 .15.356l3.7 3.644a.5.5 0 0 1 .15.356v1.4a.5.5 0 0 1-.5.5H13v6a1 1 0 1 1-2 0v-6H4.5a.5.5 0 0 1-.5-.5v-1.4a.5.5 0 0 1 .15-.356l3.7-3.644A.5.5 0 0 0 8 9.744V5.257a.5.5 0 0 0-.15-.357z" })
	});
}
NC.displayName = "PinSolidIcon";
var PC = d(NC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/pin.js
function FC(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", {
			fillRule: "evenodd",
			d: "M6.119 2a.5.5 0 0 0-.35.857L7.85 4.9a.5.5 0 0 1 .15.357v4.487a.5.5 0 0 1-.15.356l-3.7 3.644A.5.5 0 0 0 4 14.1v1.4a.5.5 0 0 0 .5.5H11v6a1 1 0 1 0 2 0v-6h6.5a.5.5 0 0 0 .5-.5v-1.4a.5.5 0 0 0-.15-.356l-3.7-3.644a.5.5 0 0 1-.15-.356V5.257a.5.5 0 0 1 .15-.357l2.081-2.043a.5.5 0 0 0-.35-.857zM10 4h4v5.744a2.5 2.5 0 0 0 .746 1.781L17.26 14H6.74l2.514-2.475A2.5 2.5 0 0 0 10 9.744z",
			clipRule: "evenodd"
		})
	});
}
FC.displayName = "PinIcon";
var IC = d(FC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/plus.js
function LC(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M11 13H6a.97.97 0 0 1-.713-.287A.97.97 0 0 1 5 12q0-.424.287-.713A.97.97 0 0 1 6 11h5V6q0-.424.287-.713A.97.97 0 0 1 12 5q.424 0 .713.287Q13 5.576 13 6v5h5q.424 0 .712.287.288.288.288.713 0 .424-.288.713A.97.97 0 0 1 18 13h-5v5q0 .424-.287.712A.97.97 0 0 1 12 19a.97.97 0 0 1-.713-.288A.97.97 0 0 1 11 18z" })
	});
}
LC.displayName = "PlusIcon";
var RC = d(LC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/pop-out.js
function zC(e, t) {
	return /*#__PURE__*/ (0, z.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ (0, z.jsx)("path", { d: "M5 3h6a1 1 0 1 1 0 2H5v14h14v-6a1 1 0 1 1 2 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2" }), /*#__PURE__*/ (0, z.jsx)("path", { d: "M15 3h5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V6.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L17.586 5H15a1 1 0 1 1 0-2" })]
	});
}
zC.displayName = "PopOutIcon";
var BC = d(zC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/preferences.js
function VC(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", {
			fillRule: "evenodd",
			d: "M6.5 2h11a4.5 4.5 0 1 1 0 9h-11a4.5 4.5 0 0 1 0-9m0 2h7.258A4.5 4.5 0 0 0 13 6.5c0 .925.28 1.785.758 2.5H6.5a2.5 2.5 0 0 1 0-5M15 6.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0m-13 11A4.5 4.5 0 0 1 6.5 13h11a4.5 4.5 0 1 1 0 9h-11q-.233 0-.46-.023A4.5 4.5 0 0 1 2 17.5m8.242-2.5H17.5a2.5 2.5 0 0 1 0 5h-7.258A4.5 4.5 0 0 0 11 17.5c0-.925-.28-1.785-.758-2.5M6.5 15a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5",
			clipRule: "evenodd"
		})
	});
}
VC.displayName = "PreferencesIcon";
var HC = d(VC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/reaction-add.js
function UC(e, t) {
	return /*#__PURE__*/ (0, z.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ (0, z.jsx)("path", { d: "M14.74 2.38C13.87 2.133 12.95 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-.95-.133-1.87-.38-2.74a5 5 0 0 1-1.886.687 8 8 0 1 1-5.68-5.68c.1-.684.339-1.323.687-1.887" }), /*#__PURE__*/ (0, z.jsx)("path", { d: "M15.536 14.121a1 1 0 0 1 0 1.415A5 5 0 0 1 12 17c-1.38 0-2.632-.56-3.535-1.464a1 1 0 1 1 1.414-1.415A3 3 0 0 0 12 15c.829 0 1.577-.335 2.121-.879a1 1 0 0 1 1.415 0M8.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m8.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M18 6h-1a.97.97 0 0 1-.712-.287A.97.97 0 0 1 16 5q0-.424.288-.713A.97.97 0 0 1 17 4h1V3q0-.424.288-.712A.97.97 0 0 1 19 2q.424 0 .712.288Q20 2.575 20 3v1h1q.424 0 .712.287Q22 4.576 22 5t-.288.713A.97.97 0 0 1 21 6h-1v1q0 .424-.288.713A.97.97 0 0 1 19 8a.97.97 0 0 1-.712-.287A.97.97 0 0 1 18 7z" })]
	});
}
UC.displayName = "ReactionAddIcon";
var WC = d(UC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/reaction.js
function GC(e, t) {
	return /*#__PURE__*/ (0, z.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ (0, z.jsx)("path", { d: "M15.536 15.536a1 1 0 0 0-1.415-1.415 3 3 0 0 1-2.12.879 3 3 0 0 1-2.122-.879 1 1 0 1 0-1.414 1.415A5 5 0 0 0 12 17c1.38 0 2.632-.56 3.536-1.464M10 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" }), /*#__PURE__*/ (0, z.jsx)("path", { d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0" })]
	});
}
GC.displayName = "ReactionIcon";
var KC = d(GC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/reply.js
function qC(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M9.405 5.708c.39-.39.39-1.025 0-1.416a.996.996 0 0 0-1.412 0L3.294 9.006a1.004 1.004 0 0 0 0 1.416l4.699 4.714a.996.996 0 0 0 1.412 0c.39-.39.39-1.025 0-1.416l-3.043-3.053h9.153c1.887 0 3.485 1.604 3.485 3.666C19 16.396 17.402 18 15.515 18h-2.093a1 1 0 1 0 0 2h2.093C18.58 20 21 17.425 21 14.333s-2.419-5.666-5.485-5.666H6.456z" })
	});
}
qC.displayName = "ReplyIcon";
var JC = d(qC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/restart.js
function YC(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M18.93 8A8 8 0 1 1 4 12a1 1 0 1 0-2 0c0 5.523 4.477 10 10 10s10-4.477 10-10a10 10 0 0 0-.832-4A10 10 0 0 0 12 2a9.99 9.99 0 0 0-8 3.999V4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2H5.755A7.99 7.99 0 0 1 12 4a8 8 0 0 1 6.93 4" })
	});
}
YC.displayName = "RestartIcon";
var XC = d(YC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/room.js
function ZC(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "m8.566 17-.944 4.094q-.086.406-.372.656t-.687.25q-.543 0-.887-.469a1.18 1.18 0 0 1-.2-1.031l.801-3.5H3.158q-.572 0-.916-.484a1.27 1.27 0 0 1-.2-1.078 1.12 1.12 0 0 1 1.116-.938H6.85l1.145-5h-3.12q-.57 0-.915-.484a1.27 1.27 0 0 1-.2-1.078A1.12 1.12 0 0 1 4.875 7h3.691l.945-4.094q.085-.406.372-.656.286-.25.686-.25.544 0 .887.469.345.468.2 1.031l-.8 3.5h4.578l.944-4.094q.085-.406.372-.656.286-.25.687-.25.543 0 .887.469t.2 1.031L17.723 7h3.119q.573 0 .916.484.343.485.2 1.079a1.12 1.12 0 0 1-1.116.937H17.15l-1.145 5h3.12q.57 0 .915.484.343.485.2 1.079a1.12 1.12 0 0 1-1.116.937h-3.691l-.944 4.094q-.087.406-.373.656t-.686.25q-.544 0-.887-.469a1.18 1.18 0 0 1-.2-1.031l.8-3.5zm.573-2.5h4.578l1.144-5h-4.578z" })
	});
}
ZC.displayName = "RoomIcon";
var QC = d(ZC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/search.js
function $C(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M15.05 16.463a7.5 7.5 0 1 1 1.414-1.414l3.243 3.244a1 1 0 0 1-1.414 1.414zM16 10.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0" })
	});
}
$C.displayName = "SearchIcon";
var ew = d($C);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/section.js
function tw(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M16 7a.97.97 0 0 0-.713.287A.97.97 0 0 0 15 8q0 .424.287.713Q15.576 9 16 9t.712-.287A.97.97 0 0 0 17 8a.97.97 0 0 0-.288-.713A.97.97 0 0 0 16 7m0 4a.97.97 0 0 0-.713.287A.97.97 0 0 0 15 12q0 .424.287.713.288.287.713.287.424 0 .712-.287A.97.97 0 0 0 17 12a.97.97 0 0 0-.288-.713A.97.97 0 0 0 16 11m0 4a.97.97 0 0 0-.713.287A.97.97 0 0 0 15 16q0 .424.287.712.288.288.713.288.424 0 .712-.288A.97.97 0 0 0 17 16a.97.97 0 0 0-.288-.713A.97.97 0 0 0 16 15m-4-8H8a.97.97 0 0 0-.713.287A.97.97 0 0 0 7 8q0 .424.287.713Q7.576 9 8 9h4q.424 0 .713-.287A.97.97 0 0 0 13 8a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 7m0 4H8a.97.97 0 0 0-.713.287A.97.97 0 0 0 7 12q0 .424.287.713Q7.576 13 8 13h4q.424 0 .713-.287A.97.97 0 0 0 13 12a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 11m0 4H8a.97.97 0 0 0-.713.287A.97.97 0 0 0 7 16q0 .424.287.712Q7.576 17 8 17h4q.424 0 .713-.288A.97.97 0 0 0 13 16a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 15m7-12q.824 0 1.413.587Q21 4.176 21 5v14q0 .824-.587 1.413A1.93 1.93 0 0 1 19 21H5q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19V5q0-.824.587-1.412A1.93 1.93 0 0 1 5 3zm0 2H5v14h14z" })
	});
}
tw.displayName = "SectionIcon";
var nw = d(tw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/settings.js
function rw(e, t) {
	return /*#__PURE__*/ (0, z.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ (0, z.jsx)("path", { d: "M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-2 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0" }), /*#__PURE__*/ (0, z.jsx)("path", { d: "M11.312 2h1.376A2.31 2.31 0 0 1 15 4.312v.247l.002.003c.01.014.031.033.064.047.03.013.056.013.07.01h.002l.177-.177a2.31 2.31 0 0 1 3.27 0l.973.974a2.31 2.31 0 0 1 0 3.269l-.177.177v.003a.13.13 0 0 0 .01.07.15.15 0 0 0 .047.063l.003.002h.247A2.31 2.31 0 0 1 22 11.312v1.376A2.31 2.31 0 0 1 19.688 15h-.247l-.003.002a.15.15 0 0 0-.047.064.13.13 0 0 0-.01.07v.002l.177.177a2.31 2.31 0 0 1 0 3.27l-.974.973a2.31 2.31 0 0 1-3.269 0l-.177-.177h-.003a.13.13 0 0 0-.07.01.15.15 0 0 0-.063.047l-.002.003v.247A2.31 2.31 0 0 1 12.688 22h-1.376A2.31 2.31 0 0 1 9 19.688v-.247l-.002-.003a.15.15 0 0 0-.064-.047.13.13 0 0 0-.07-.01h-.002l-.177.177a2.31 2.31 0 0 1-3.27 0l-.973-.974a2.31 2.31 0 0 1 0-3.269l.177-.177v-.003a.14.14 0 0 0-.01-.07.15.15 0 0 0-.047-.063L4.559 15h-.247A2.31 2.31 0 0 1 2 12.688v-1.376A2.31 2.31 0 0 1 4.312 9h.247l.003-.002a.15.15 0 0 0 .047-.064.14.14 0 0 0 .01-.07v-.002l-.177-.177a2.31 2.31 0 0 1 0-3.27l.974-.973a2.31 2.31 0 0 1 3.269 0l.177.177h.003a.14.14 0 0 0 .07-.01.15.15 0 0 0 .063-.047L9 4.559v-.247A2.31 2.31 0 0 1 11.312 2M11 4.312v.257c0 .893-.59 1.593-1.299 1.887-.716.297-1.622.21-2.248-.418l-.182-.182a.31.31 0 0 0-.441 0l-.974.974a.31.31 0 0 0 0 .44l.182.183c.627.626.715 1.531.418 2.248C6.162 10.41 5.462 11 4.569 11h-.257a.31.31 0 0 0-.312.312v1.376c0 .172.14.312.312.312h.257c.893 0 1.593.59 1.887 1.299.297.716.21 1.622-.418 2.248l-.182.182a.31.31 0 0 0 0 .441l.974.973a.31.31 0 0 0 .44 0l.183-.181c.626-.627 1.532-.715 2.248-.418.709.294 1.299.994 1.299 1.887v.257c0 .172.14.312.312.312h1.376c.172 0 .312-.14.312-.312v-.257c0-.893.59-1.593 1.299-1.887.716-.297 1.622-.21 2.249.418l.181.181c.122.122.32.122.441 0l.973-.973a.31.31 0 0 0 0-.44l-.181-.183c-.627-.626-.715-1.532-.418-2.248.294-.709.994-1.299 1.887-1.299h.257c.172 0 .312-.14.312-.312v-1.376a.31.31 0 0 0-.312-.312h-.257c-.893 0-1.593-.59-1.887-1.299-.297-.717-.21-1.622.418-2.248l.181-.182a.31.31 0 0 0 0-.441l-.973-.974a.31.31 0 0 0-.44 0l-.183.182c-.626.627-1.532.715-2.248.418C13.59 6.162 13 5.462 13 4.569v-.257A.31.31 0 0 0 12.688 4h-1.376a.31.31 0 0 0-.312.312" })]
	});
}
rw.displayName = "SettingsIcon";
var iw = d(rw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/threads-solid.js
function aw(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M4 3h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6l-2.293 2.293c-.63.63-1.707.184-1.707-.707V5a2 2 0 0 1 2-2m3 7h10q.424 0 .712-.287A.97.97 0 0 0 18 9a.97.97 0 0 0-.288-.713A.97.97 0 0 0 17 8H7a.97.97 0 0 0-.713.287A.97.97 0 0 0 6 9q0 .424.287.713Q6.576 10 7 10m0 4h6q.424 0 .713-.287A.97.97 0 0 0 14 13a.97.97 0 0 0-.287-.713A.97.97 0 0 0 13 12H7a.97.97 0 0 0-.713.287A.97.97 0 0 0 6 13q0 .424.287.713Q6.576 14 7 14" })
	});
}
aw.displayName = "ThreadsSolidIcon";
var ow = d(aw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/threads.js
function sw(e, t) {
	return /*#__PURE__*/ (0, z.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ (0, z.jsx)("path", { d: "M7 10a.97.97 0 0 1-.713-.287A.97.97 0 0 1 6 9q0-.424.287-.713A.97.97 0 0 1 7 8h10q.424 0 .712.287Q18 8.576 18 9t-.288.713A.97.97 0 0 1 17 10zm0 4a.97.97 0 0 1-.713-.287A.97.97 0 0 1 6 13q0-.424.287-.713A.97.97 0 0 1 7 12h6q.424 0 .713.287.287.288.287.713 0 .424-.287.713A.97.97 0 0 1 13 14z" }), /*#__PURE__*/ (0, z.jsx)("path", { d: "M3.707 21.293c-.63.63-1.707.184-1.707-.707V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6zM6 17h14V5H4v13.172l.586-.586A2 2 0 0 1 6 17" })]
	});
}
sw.displayName = "ThreadsIcon";
var cw = d(sw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/unpin.js
function lw(e, t) {
	return /*#__PURE__*/ (0, z.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ (0, z.jsx)("path", {
			fillRule: "evenodd",
			d: "M5.457 2.083a1 1 0 0 0-1.414 1.414L8.04 7.494v2.25a.5.5 0 0 1-.15.356l-3.7 3.644a.5.5 0 0 0-.15.356v1.4a.5.5 0 0 0 .5.5h6.5v6a1 1 0 0 0 2 0v-6h3.506l4.497 4.497a1 1 0 0 0 1.414-1.414zM14.546 14 10.04 9.494v.25a2.5 2.5 0 0 1-.746 1.781L6.78 14z",
			clipRule: "evenodd"
		}), /*#__PURE__*/ (0, z.jsx)("path", { d: "M14.04 4v3.85l2.015 2.015a.5.5 0 0 1-.015-.12V5.257a.5.5 0 0 1 .15-.357l2.081-2.043a.5.5 0 0 0-.35-.857h-9.73l2 2z" })]
	});
}
lw.displayName = "UnpinIcon";
var uw = d(lw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/user-add.js
function dw(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M10 12q-1.65 0-2.825-1.175T6 8t1.175-2.825T10 4t2.825 1.175T14 8t-1.175 2.825T10 12m-8 6v-.8q0-.85.438-1.562.437-.713 1.162-1.088a14.8 14.8 0 0 1 3.15-1.163A13.8 13.8 0 0 1 10 13q1.65 0 3.25.387 1.6.388 3.15 1.163.724.375 1.163 1.087Q18 16.35 18 17.2v.8q0 .824-.587 1.413A1.93 1.93 0 0 1 16 20H4q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 18m2 0h12v-.8a.97.97 0 0 0-.5-.85q-1.35-.675-2.725-1.012a11.6 11.6 0 0 0-5.55 0Q5.85 15.675 4.5 16.35a.97.97 0 0 0-.5.85zm6-8q.825 0 1.412-.588Q12 8.826 12 8q0-.824-.588-1.412A1.93 1.93 0 0 0 10 6q-.825 0-1.412.588A1.93 1.93 0 0 0 8 8q0 .825.588 1.412Q9.175 10 10 10m7 1h2v2q0 .424.288.713.287.287.712.287.424 0 .712-.287A.97.97 0 0 0 21 13v-2h2q.424 0 .712-.287A.97.97 0 0 0 24 10a.97.97 0 0 0-.288-.713A.97.97 0 0 0 23 9h-2V7a.97.97 0 0 0-.288-.713A.97.97 0 0 0 20 6a.97.97 0 0 0-.712.287A.97.97 0 0 0 19 7v2h-2a.97.97 0 0 0-.712.287A.97.97 0 0 0 16 10q0 .424.288.713.287.287.712.287" })
	});
}
dw.displayName = "UserAddIcon";
var fw = d(dw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/user-profile-solid.js
function pw(e, t) {
	return /*#__PURE__*/ (0, z.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ (0, z.jsx)("path", { d: "M12 15q-1.65 0-2.825-1.175T8 11t1.175-2.825T12 7t2.825 1.175T16 11t-1.175 2.825T12 15" }), /*#__PURE__*/ (0, z.jsx)("path", { d: "M19.528 18.583A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 2.52.933 4.824 2.472 6.583A9.98 9.98 0 0 0 12 22a9.98 9.98 0 0 0 7.528-3.417M8.75 16.388q-1.373.332-2.709.95a8 8 0 1 1 11.918 0 14.7 14.7 0 0 0-2.709-.95A13.8 13.8 0 0 0 12 16q-1.65 0-3.25.387" })]
	});
}
pw.displayName = "UserProfileSolidIcon";
var mw = d(pw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/video-call-declined-solid.js
function hw(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M2 8a4 4 0 0 1 4-4h10a2 2 0 0 1 2 2v4.286l3.35-2.871a1 1 0 0 1 1.65.76v7.65a1 1 0 0 1-1.65.76L18 13.715V18a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4zm10.828 6.828q.3-.3.3-.707 0-.405-.3-.707L11.414 12l1.414-1.414q.3-.3.3-.707t-.3-.707-.707-.301q-.405 0-.707.3L10 10.587 8.586 9.172q-.3-.3-.707-.301-.407 0-.707.3t-.3.708q0 .405.3.707L8.586 12l-1.414 1.414q-.3.3-.3.707t.3.707.707.3q.405 0 .707-.3L10 13.414l1.414 1.414q.3.3.707.3t.707-.3" })
	});
}
hw.displayName = "VideoCallDeclinedSolidIcon";
var gw = d(hw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/video-call-solid.js
function _w(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M6 4h10a2 2 0 0 1 2 2v4.286l3.35-2.871a1 1 0 0 1 1.65.76v7.65a1 1 0 0 1-1.65.76L18 13.715V18a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4" })
	});
}
_w.displayName = "VideoCallSolidIcon";
var vw = d(_w);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/video-call.js
function yw(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M2 8a4 4 0 0 1 4-4h10a2 2 0 0 1 2 2v4.286l3.35-2.871a1 1 0 0 1 1.65.76v7.65a1 1 0 0 1-1.65.76L18 13.715V18a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10V6zm15 7.652v-3.303L19.073 12z" })
	});
}
yw.displayName = "VideoCallIcon";
var bw = d(yw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/visibility-off.js
function xw(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "m16.1 13.3-1.45-1.45q.225-1.175-.675-2.2t-2.325-.8L10.2 7.4q.424-.2.863-.3A4.2 4.2 0 0 1 12 7q1.875 0 3.188 1.312Q16.5 9.625 16.5 11.5q0 .5-.1.938t-.3.862m3.2 3.15-1.45-1.4a11 11 0 0 0 1.688-1.588A9 9 0 0 0 20.8 11.5q-1.25-2.524-3.588-4.013Q14.875 6 12 6q-.724 0-1.425.1a10 10 0 0 0-1.375.3L7.65 4.85A11.1 11.1 0 0 1 12 4q3.575 0 6.425 1.887T22.7 10.8a.8.8 0 0 1 .1.313q.025.188.025.387a2 2 0 0 1-.125.7 10.9 10.9 0 0 1-3.4 4.25m-.2 5.45-3.5-3.45q-.874.274-1.762.413Q12.95 19 12 19q-3.575 0-6.425-1.887T1.3 12.2a.8.8 0 0 1-.1-.312 3 3 0 0 1 0-.763.8.8 0 0 1 .1-.3Q1.825 9.7 2.55 8.75A13.3 13.3 0 0 1 4.15 7L2.075 4.9a.93.93 0 0 1-.275-.688q0-.412.3-.712a.95.95 0 0 1 .7-.275q.425 0 .7.275l17 17q.275.275.288.688a.93.93 0 0 1-.288.712.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275M5.55 8.4q-.725.65-1.325 1.425A9 9 0 0 0 3.2 11.5q1.25 2.524 3.588 4.012T12 17q.5 0 .975-.062.475-.063.975-.138l-.9-.95q-.274.075-.525.113A3.5 3.5 0 0 1 12 16q-1.875 0-3.187-1.312Q7.5 13.375 7.5 11.5q0-.274.038-.525.037-.25.112-.525z" })
	});
}
xw.displayName = "VisibilityOffIcon";
var Sw = d(xw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/visibility-on.js
function Cw(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M12 16q1.875 0 3.188-1.312Q16.5 13.375 16.5 11.5t-1.312-3.187T12 7 8.813 8.313 7.5 11.5t1.313 3.188T12 16m0-1.8q-1.125 0-1.912-.787A2.6 2.6 0 0 1 9.3 11.5q0-1.125.787-1.912A2.6 2.6 0 0 1 12 8.8q1.125 0 1.912.787.788.788.788 1.913t-.787 1.912A2.6 2.6 0 0 1 12 14.2m0 4.8q-3.475 0-6.35-1.837Q2.775 15.324 1.3 12.2a.8.8 0 0 1-.1-.312 3 3 0 0 1 0-.775.8.8 0 0 1 .1-.313q1.475-3.125 4.35-4.962Q8.525 4 12 4t6.35 1.838T22.7 10.8a.8.8 0 0 1 .1.313 3 3 0 0 1 0 .774.8.8 0 0 1-.1.313q-1.475 3.125-4.35 4.963Q15.475 19 12 19m0-2a9.54 9.54 0 0 0 5.188-1.488A9.77 9.77 0 0 0 20.8 11.5a9.77 9.77 0 0 0-3.613-4.012A9.54 9.54 0 0 0 12 6a9.55 9.55 0 0 0-5.187 1.487A9.77 9.77 0 0 0 3.2 11.5a9.77 9.77 0 0 0 3.613 4.012A9.54 9.54 0 0 0 12 17" })
	});
}
Cw.displayName = "VisibilityOnIcon";
var ww = d(Cw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/voice-call-declined-solid.js
function Tw(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "M7.623 3.04a1.07 1.07 0 0 1 1.086.929l.542 3.954q.039.27-.038.504a1.1 1.1 0 0 1-.272.427l-1.64 1.64Q7.806 11.5 8.456 12.4c.433.601 1.444 1.697 1.444 1.697.013.012 1.098 1.014 1.696 1.444q.9.65 1.909 1.153l1.64-1.64q.194-.194.426-.27a1.1 1.1 0 0 1 .504-.04l3.953.543q.407.058.67.358.26.301.26.728l.04 3.527q0 .427-.33.756-.33.33-.756.33a16 16 0 0 1-6.57-1.105 16.2 16.2 0 0 1-5.563-3.663 16.1 16.1 0 0 1-3.653-5.573 16.3 16.3 0 0 1-1.116-6.56q0-.426.329-.756Q3.67 3 4.095 3zM20.25 3q.405 0 .707.3.3.301.3.708t-.3.707l-1.414 1.414 1.414 1.414q.3.3.3.707t-.3.707-.707.3-.707-.3l-1.414-1.414-1.414 1.414q-.3.3-.707.3t-.707-.3T15 8.25q0-.406.3-.707l1.415-1.414L15.3 4.715q-.3-.3-.301-.707 0-.407.3-.707t.71-.301q.405 0 .707.3l1.414 1.415L19.543 3.3q.3-.3.707-.301" })
	});
}
Tw.displayName = "VoiceCallDeclinedSolidIcon";
var Ew = d(Tw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/voice-call-solid.js
function Dw(e, t) {
	return /*#__PURE__*/ (0, z.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, z.jsx)("path", { d: "m20.958 16.374.039 3.527q0 .427-.33.756-.33.33-.756.33a16 16 0 0 1-6.57-1.105 16.2 16.2 0 0 1-5.563-3.663 16.1 16.1 0 0 1-3.653-5.573 16.3 16.3 0 0 1-1.115-6.56q0-.427.33-.757T4.095 3l3.528.039a1.07 1.07 0 0 1 1.085.93l.543 3.954q.039.271-.039.504a1.1 1.1 0 0 1-.271.426l-1.64 1.64q.505 1.008 1.154 1.909c.433.6 1.444 1.696 1.444 1.696s1.095 1.01 1.696 1.444q.9.65 1.909 1.153l1.64-1.64q.193-.193.426-.27t.504-.04l3.954.543q.406.059.668.359t.262.727" })
	});
}
Dw.displayName = "VoiceCallSolidIcon";
var Ow = d(Dw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_ca8f1db8e569de9f748c5a5488a7eccd/node_modules/@vector-im/compound-design-tokens/assets/web/icons/volume-on-solid.js
function kw(e, t) {
	return /*#__PURE__*/ (0, z.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ (0, z.jsx)("path", { d: "M3 14v-4a2 2 0 0 1 2-2h2l3.293-3.293c.63-.63 1.707-.184 1.707.707v13.172c0 .89-1.077 1.337-1.707.707L7 16H5a2 2 0 0 1-2-2m11.122-5.536a1 1 0 0 1 1.414 0A5 5 0 0 1 17 12c0 1.38-.56 2.632-1.464 3.536a1 1 0 0 1-1.415-1.415 3 3 0 0 0 .88-2.121c0-.829-.335-1.577-.88-2.121a1 1 0 0 1 0-1.415" }), /*#__PURE__*/ (0, z.jsx)("path", { d: "M16.95 5.636a1 1 0 0 1 1.414 0A8.98 8.98 0 0 1 21 12a8.98 8.98 0 0 1-2.636 6.364 1 1 0 0 1-1.414-1.414A6.98 6.98 0 0 0 19 12a6.98 6.98 0 0 0-2.05-4.95 1 1 0 0 1 0-1.414" })]
	});
}
kw.displayName = "VolumeOnSolidIcon";
var Aw = d(kw), jw = ({ query: e, onChange: t, onEnter: n, onKeyDown: r, inputRef: i, controlsId: a }) => {
	let o = g(yx);
	_(() => {
		i.current?.focus();
	}, [i]);
	let s = h((e) => {
		e.key === "Enter" ? (n(), e.stopPropagation(), e.preventDefault()) : r(e);
	}, [n, r]), c;
	return c = e ? /* @__PURE__ */ (0, z.jsx)("button", {
		type: "button",
		onClick: () => t(""),
		title: U("emoji_picker|cancel_search_label"),
		children: /* @__PURE__ */ (0, z.jsx)(SS, {})
	}) : /* @__PURE__ */ (0, z.jsx)("span", {
		className: W.searchIcon,
		children: /* @__PURE__ */ (0, z.jsx)(ew, {})
	}), /* @__PURE__ */ (0, z.jsxs)("div", {
		className: W.search,
		children: [/* @__PURE__ */ (0, z.jsx)("input", {
			autoFocus: !0,
			type: "text",
			placeholder: U("action|search"),
			"aria-label": U("action|search"),
			value: e,
			onChange: (e) => t(e.target.value),
			onKeyDown: s,
			ref: i,
			"aria-activedescendant": e ? o.state.activeNode?.id : void 0,
			"aria-controls": a,
			"aria-haspopup": "grid",
			"aria-autocomplete": "list"
		}), c]
	});
}, Mw = ({ emoji: e }) => {
	let { unicode: t, label: n, shortcodes: [r] } = e;
	return /* @__PURE__ */ (0, z.jsxs)("div", {
		className: W.footer,
		children: [/* @__PURE__ */ (0, z.jsx)("div", {
			className: W.previewEmoji,
			children: t
		}), /* @__PURE__ */ (0, z.jsxs)("div", {
			className: W.previewText,
			children: [/* @__PURE__ */ (0, z.jsx)("div", {
				className: (0, R.default)(W.name, W.previewName),
				children: n
			}), /* @__PURE__ */ (0, z.jsx)("div", {
				className: W.shortcode,
				children: r
			})]
		})]
	});
};
//#endregion
//#region src/core/EmojiPicker/RovingButton.tsx
function Nw({ onClick: e, disabled: t, focusOnMouseOver: n, onFocus: r, onMouseOver: i, onKeyDown: a, onKeyUp: o, role: s = "button", children: c, ...l }) {
	let [u, d, f] = Fx(), p = {
		onKeyDown: a,
		onKeyUp: o
	};
	return t ? p["aria-disabled"] = !0 : p = {
		onClick: e,
		onKeyDown: (t) => {
			switch (t.key) {
				case "Enter":
					t.stopPropagation(), t.preventDefault(), e(t);
					break;
				case " ":
					t.stopPropagation(), t.preventDefault();
					break;
				default: a?.(t);
			}
		},
		onKeyUp: (t) => {
			switch (t.key) {
				case "Enter":
					t.stopPropagation(), t.preventDefault();
					break;
				case " ":
					t.stopPropagation(), t.preventDefault(), e(t);
					break;
				default: o?.(t);
			}
		}
	}, /* @__PURE__ */ (0, z.jsx)("div", {
		...l,
		...p,
		role: s,
		ref: f,
		tabIndex: d ? 0 : -1,
		onFocus: (e) => {
			u(), r?.(e);
		},
		onMouseOver: (e) => {
			n && u(), i?.(e);
		},
		children: c
	});
}
//#endregion
//#region src/core/EmojiPicker/Emoji.tsx
var Pw = o.memo(function({ onClick: e, onMouseEnter: t, onMouseLeave: n, emoji: r, selectedEmojis: i, disabled: a, id: o, className: s }) {
	let c = i?.has(r.unicode), l = h(() => t(r), [t, r]), u = h(() => n(r), [n, r]);
	return /* @__PURE__ */ (0, z.jsx)(Nw, {
		id: o,
		onClick: (t) => e(t, r),
		onMouseEnter: l,
		onMouseLeave: u,
		className: s,
		disabled: a || void 0,
		role: i ? "checkbox" : void 0,
		"aria-checked": c,
		focusOnMouseOver: !0,
		children: /* @__PURE__ */ (0, z.jsx)("div", {
			className: (0, R.default)(W.item, { [W.itemSelected]: c }),
			children: r.unicode
		})
	});
}), Fw = [
	"👍",
	"👎",
	"😄",
	"🎉",
	"😕",
	"❤️",
	"🚀",
	"👀"
].map((e) => {
	let t = we(e);
	if (!t) throw Error(`Emoji ${e} doesn't exist in emojibase`);
	return t;
}), Iw = ({ selectedEmojis: e, onClick: t, getAction: n }) => {
	let [r, i] = T(void 0), a = h((e) => {
		i(e);
	}, []), s = h(() => {
		i(void 0);
	}, []);
	return /* @__PURE__ */ (0, z.jsxs)("section", {
		className: (0, R.default)(W.footer, W.quick, W.category),
		children: [/* @__PURE__ */ (0, z.jsx)(oe, {
			as: "h2",
			className: (0, R.default)(W.quickHeader, W.categoryLabel),
			children: r ? /* @__PURE__ */ (0, z.jsxs)(o.Fragment, { children: [/* @__PURE__ */ (0, z.jsx)("span", {
				className: W.name,
				children: r.label
			}), /* @__PURE__ */ (0, z.jsx)("span", {
				className: W.shortcode,
				children: r.shortcodes[0]
			})] }) : U("emoji|quick_reactions")
		}), /* @__PURE__ */ (0, z.jsx)(Kx, {
			className: W.list,
			"aria-label": U("emoji|quick_reactions"),
			getAction: n,
			children: Fw.map((n) => /* @__PURE__ */ (0, z.jsx)(Pw, {
				emoji: n,
				onClick: t,
				onMouseEnter: a,
				onMouseLeave: s,
				selectedEmojis: e,
				className: W.itemWrapper
			}, n.hexcode))
		})]
	});
}, Lw = "‍", Rw = [
	{
		id: "recent",
		untranslatedName: rx("emoji|category_frequently_used"),
		emoji: "🕒"
	},
	{
		id: "people",
		untranslatedName: rx("emoji|category_smileys_people"),
		emoji: "😀"
	},
	{
		id: "nature",
		untranslatedName: rx("emoji|category_animals_nature"),
		emoji: "🐕"
	},
	{
		id: "foods",
		untranslatedName: rx("emoji|category_food_drink"),
		emoji: "🍎"
	},
	{
		id: "activity",
		untranslatedName: rx("emoji|category_activities"),
		emoji: "⚽️"
	},
	{
		id: "places",
		untranslatedName: rx("emoji|category_travel_places"),
		emoji: "🚗"
	},
	{
		id: "objects",
		untranslatedName: rx("emoji|category_objects"),
		emoji: "💡"
	},
	{
		id: "symbols",
		untranslatedName: rx("emoji|category_symbols"),
		emoji: "⁉️"
	},
	{
		id: "flags",
		untranslatedName: rx("emoji|category_flags"),
		emoji: "🏁"
	}
], zw = {
	List: ({ ref: e, ...t }) => /* @__PURE__ */ (0, z.jsx)("div", {
		...t,
		ref: e,
		className: W.list,
		role: "grid",
		"aria-multiselectable": !0
	}),
	Item: ({ item: e, ...t }) => e.type === "header" ? /* @__PURE__ */ (0, z.jsx)("div", {
		...t,
		role: "row"
	}) : /* @__PURE__ */ (0, z.jsx)("div", {
		...t,
		role: "row",
		className: W.row
	})
};
function Bw(e) {
	return Array.from(new Set((e ?? []).map(we).filter((e) => !!e)));
}
function Vw(e, t) {
	return t.includes(Lw) && (t = t.split(Lw, 2)[0]), e.label.toLowerCase().includes(t) || (Array.isArray(e.emoticon) ? e.emoticon.some((e) => e.includes(t)) : e.emoticon?.includes(t)) || e.shortcodes.some((e) => e.toLowerCase().includes(t)) || e.unicode.split(Lw).includes(t);
}
function Hw(e, t) {
	return t === "" ? e : e.filter((e) => Vw(e, t)).sort((e, n) => {
		let r = e.shortcodes[0].indexOf(t), i = n.shortcodes[0].indexOf(t);
		return r == -1 || i == -1 ? i - r : r == 0 && i == 0 ? e.shortcodes[0].length - n.shortcodes[0].length : r - i;
	});
}
function Uw({ selectedEmojis: e, onChoose: t, onFinished: n, isEmojiDisabled: r, recentEmojis: i, onRecordRecent: a, getAction: o, showQuickReactions: s = !0 }) {
	let [c, l] = T(""), [u, d] = T(void 0), [f, p] = T(!1), [m, g] = T(null), _ = w(null), y = w(null), b = S(() => Bw(i), [i]), x = c.toLowerCase().trim(), { dataByCategory: C, enabledCategories: E } = S(() => {
		let e = {}, t = [];
		for (let n of Rw) {
			let r = Hw(n.id === "recent" ? b : Ce[n.id], x);
			e[n.id] = r, r.length > 0 && t.push(n.id);
		}
		return {
			dataByCategory: e,
			enabledCategories: t
		};
	}, [x, b]), [ee, D] = T(b.length > 0 ? "recent" : "people"), te = h((e) => {
		g(e);
	}, []), O = S(() => {
		let e = [];
		for (let t of Rw) {
			let n = C[t.id];
			if (n.length !== 0) {
				e.push({
					type: "header",
					category: t
				});
				for (let r = 0; r < n.length; r += 8) e.push({
					type: "row",
					emojis: n.slice(r, r + 8),
					categoryId: t.id
				});
			}
		}
		return e;
	}, [C]), k = h((e) => {
		let t = /* @__PURE__ */ new Set();
		for (let n = e.startIndex; n <= e.endIndex; n++) {
			let e = O[n];
			e && t.add(e.type === "header" ? e.category.id : e.categoryId);
		}
		D(Rw.find((e) => t.has(e.id))?.id ?? "people");
	}, [O]), A = h((e) => e?.parentElement ?? void 0, []), ne = h((e) => A(e)?.parentElement ?? void 0, [A]), re = h((e) => {
		let t = e.children[0];
		return t instanceof HTMLElement ? t : void 0;
	}, []), j = h((e, t, n) => {
		if (t.activeNode && [
			"ArrowDown",
			"ArrowRight",
			"ArrowLeft",
			"ArrowUp"
		].includes(e.key) && !f) {
			p(!0), t.nodes.length > 0 && n({
				type: bx.SetFocus,
				payload: { node: t.nodes[0] }
			}), e.preventDefault(), e.stopPropagation();
			return;
		}
	}, [f]), ie = h(() => document.activeElement !== _.current, []), ae = h((e, t, n) => {
		ne(n.activeNode) !== ne(t) && t.scrollIntoView({
			behavior: "auto",
			block: "center",
			inline: "center"
		});
	}, [ne]), M = h((e) => {
		let t = O.findIndex((t) => t.type === "header" && t.category.id === e);
		t >= 0 && y.current?.scrollToIndex({
			index: t,
			align: "start"
		});
	}, [O]), se = h((e) => {
		l(e), p(e.trim() !== "");
	}, []), ce = h(() => {
		f && ((m?.querySelector("[role=\"gridcell\"] [tabindex=\"0\"]"))?.click(), n());
	}, [
		f,
		m,
		n
	]), le = h((e) => {
		d(e);
	}, []), ue = h(() => {
		d(void 0);
	}, []), N = h((e, r) => {
		t(r.unicode) !== !1 && a?.(r.unicode), e.key === "Enter" && n();
	}, [
		t,
		a,
		n
	]), de = v(), fe = h((t, n) => {
		if (n.type === "header") {
			let e = n.category;
			return /* @__PURE__ */ (0, z.jsx)("div", {
				className: W.category,
				"data-category-id": e.id,
				role: "gridcell",
				children: /* @__PURE__ */ (0, z.jsx)(oe, {
					as: "h2",
					className: W.categoryLabel,
					children: U(e.untranslatedName)
				})
			});
		}
		return n.emojis.map((t) => /* @__PURE__ */ (0, z.jsx)("div", {
			role: "gridcell",
			className: W.itemWrapper,
			children: /* @__PURE__ */ (0, z.jsx)(Pw, {
				id: `${de}-${n.categoryId}-${t.hexcode}`,
				emoji: t,
				selectedEmojis: e,
				onClick: N,
				onMouseEnter: le,
				onMouseLeave: ue,
				disabled: r?.(t.unicode)
			})
		}, t.hexcode));
	}, [
		e,
		N,
		le,
		ue,
		r,
		de
	]), pe = v();
	return /* @__PURE__ */ (0, z.jsx)(Hx, {
		getGridCell: A,
		getRow: ne,
		getRovingNode: re,
		handleInputFields: !0,
		moveFocus: ie,
		onGridNavigation: ae,
		onKeyDown: j,
		getAction: o,
		children: ({ onKeyDownHandler: t }) => /* @__PURE__ */ (0, z.jsxs)("section", {
			className: W.picker,
			onKeyDown: t,
			"aria-label": U("emoji_picker|emoji_picker"),
			children: [
				/* @__PURE__ */ (0, z.jsx)(Jx, {
					categories: Rw,
					enabledCategories: E,
					selectedCategory: ee,
					onAnchorClick: M,
					pickerBodyId: pe,
					getAction: o
				}),
				/* @__PURE__ */ (0, z.jsx)(jw, {
					query: c,
					onChange: se,
					onEnter: ce,
					onKeyDown: t,
					inputRef: _,
					controlsId: pe
				}),
				/* @__PURE__ */ (0, z.jsx)(_x, {
					id: pe,
					className: (0, R.default)(W.body, { [W.bodyShowHighlight]: f }),
					wrappedRef: te,
					children: m && /* @__PURE__ */ (0, z.jsx)(Te, {
						ref: y,
						customScrollParent: m,
						data: O,
						defaultItemHeight: 35,
						components: zw,
						itemContent: fe,
						rangeChanged: k
					})
				}),
				s && (u ? /* @__PURE__ */ (0, z.jsx)(Mw, { emoji: u }) : /* @__PURE__ */ (0, z.jsx)(Iw, {
					onClick: N,
					selectedEmojis: e,
					getAction: o
				}))
			]
		})
	});
}
//#endregion
//#region src/core/FacePile/FacePileView.tsx
function Ww(e) {
	let { memberAvatarViewModels: t } = H(e.vm);
	return t.length === 0 ? null : /* @__PURE__ */ (0, z.jsx)(te, {
		className: e.classNames,
		children: t.map((e) => /* @__PURE__ */ (0, z.jsx)(Py, { vm: e }, e.getSnapshot().id))
	});
}
var Gw = {
	banner: "_banner_n7ud0_8",
	content: "_content_n7ud0_38",
	icon: "_icon_n7ud0_50",
	actions: "_actions_n7ud0_61"
};
//#endregion
//#region src/room/composer/Banner/Banner.tsx
function Kw({ type: e, children: t, avatar: n, className: r, actions: i, onClose: a, ...o }) {
	let s = (0, R.default)(Gw.banner, r), c = S(() => {
		switch (e) {
			case "critical": return /* @__PURE__ */ (0, z.jsx)(WS, { fontSize: 24 });
			case "info": return /* @__PURE__ */ (0, z.jsx)(cC, { fontSize: 24 });
			case "success": return /* @__PURE__ */ (0, z.jsx)(uS, { fontSize: 24 });
			default: return /* @__PURE__ */ (0, z.jsx)(cC, { fontSize: 24 });
		}
	}, [e]);
	return /* @__PURE__ */ (0, z.jsxs)("div", {
		...o,
		className: s,
		"data-type": e,
		children: [
			/* @__PURE__ */ (0, z.jsx)("div", {
				className: Gw.icon,
				children: n ?? c
			}),
			/* @__PURE__ */ (0, z.jsx)("div", {
				className: Gw.content,
				children: t
			}),
			/* @__PURE__ */ (0, z.jsxs)("div", {
				className: Gw.actions,
				children: [i, a && /* @__PURE__ */ (0, z.jsx)(k, {
					kind: "secondary",
					size: "md",
					onClick: a,
					children: U("action|dismiss")
				})]
			})
		]
	});
}
//#endregion
//#region src/room/composer/UploadButton/UploadButton.tsx
function qw({ vm: e, defaultOpen: t = !1, ...n }) {
	let r = B(), [i, a] = T(t), { options: o } = H(e), s = h((t) => {
		t.ctrlKey && (t.preventDefault(), t.stopPropagation(), e.onUploadOptionSelected(o[0].type));
	}, [o, e]);
	if (o.length === 1) {
		let { label: t, icon: r } = o[0];
		return /* @__PURE__ */ (0, z.jsx)(M, {
			size: "26px",
			...n,
			tooltip: t,
			"aria-label": t,
			onClick: () => e.onUploadOptionSelected(o[0].type),
			children: r ? /* @__PURE__ */ (0, z.jsx)(r, {}) : /* @__PURE__ */ (0, z.jsx)(nS, {})
		});
	}
	let c = /* @__PURE__ */ (0, z.jsx)(M, {
		...n,
		size: "26px",
		tooltip: r.translate("common|attachment"),
		onClick: s,
		title: r.translate("common|attachment"),
		children: /* @__PURE__ */ (0, z.jsx)(nS, {})
	});
	return /* @__PURE__ */ (0, z.jsx)(ue, {
		side: "top",
		title: r.translate("common|attachment"),
		showTitle: !1,
		trigger: c,
		open: i,
		onOpenChange: (e) => a(e),
		children: o.map((t) => /* @__PURE__ */ (0, z.jsx)(N, {
			label: t.label,
			Icon: t.icon,
			onSelect: () => e.onUploadOptionSelected(t.type)
		}, t.label))
	});
}
var Jw = {
	container: "_container_1j8rk_8",
	text: "_text_1j8rk_24",
	description: "_description_1j8rk_32",
	image: "_image_1j8rk_45"
}, Yw = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", Xw = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Zw = "numeric", Qw = "ascii", $w = "alpha", eT = "asciinumeric", tT = "alphanumeric", nT = "domain", rT = "emoji", iT = "scheme", aT = "slashscheme", oT = "whitespace";
function sT(e, t) {
	return e in t || (t[e] = []), t[e];
}
function cT(e, t, n) {
	t[Zw] && (t[eT] = !0, t[tT] = !0), t[Qw] && (t[eT] = !0, t[$w] = !0), t[eT] && (t[tT] = !0), t[$w] && (t[tT] = !0), t[tT] && (t[nT] = !0), t[rT] && (t[nT] = !0);
	for (let r in t) {
		let t = sT(r, n);
		t.indexOf(e) < 0 && t.push(e);
	}
}
function lT(e, t) {
	let n = {};
	for (let r in t) t[r].indexOf(e) >= 0 && (n[r] = !0);
	return n;
}
function uT(e = null) {
	this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
uT.groups = {}, uT.prototype = {
	accepts() {
		return !!this.t;
	},
	go(e) {
		let t = this, n = t.j[e];
		if (n) return n;
		for (let n = 0; n < t.jr.length; n++) {
			let r = t.jr[n][0], i = t.jr[n][1];
			if (i && r.test(e)) return i;
		}
		return t.jd;
	},
	has(e, t = !1) {
		return t ? e in this.j : !!this.go(e);
	},
	ta(e, t, n, r) {
		for (let i = 0; i < e.length; i++) this.tt(e[i], t, n, r);
	},
	tr(e, t, n, r) {
		r ||= uT.groups;
		let i;
		return t && t.j ? i = t : (i = new uT(t), n && r && cT(t, n, r)), this.jr.push([e, i]), i;
	},
	ts(e, t, n, r) {
		let i = this, a = e.length;
		if (!a) return i;
		for (let t = 0; t < a - 1; t++) i = i.tt(e[t]);
		return i.tt(e[a - 1], t, n, r);
	},
	tt(e, t, n, r) {
		r ||= uT.groups;
		let i = this;
		if (t && t.j) return i.j[e] = t, t;
		let a = t, o, s = i.go(e);
		return s ? (o = new uT(), Object.assign(o.j, s.j), o.jr.push.apply(o.jr, s.jr), o.jd = s.jd, o.t = s.t) : o = new uT(), a && (r && (o.t && typeof o.t == "string" ? cT(a, Object.assign(lT(o.t, r), n), r) : n && cT(a, n, r)), o.t = a), i.j[e] = o, o;
	}
};
var G = (e, t, n, r, i) => e.ta(t, n, r, i), dT = (e, t, n, r, i) => e.tr(t, n, r, i), fT = (e, t, n, r, i) => e.ts(t, n, r, i), K = (e, t, n, r, i) => e.tt(t, n, r, i), pT = "WORD", mT = "UWORD", hT = "ASCIINUMERICAL", gT = "ALPHANUMERICAL", _T = "LOCALHOST", vT = "TLD", yT = "UTLD", bT = "SCHEME", xT = "SLASH_SCHEME", ST = "NUM", CT = "WS", wT = "NL", TT = "OPENBRACE", ET = "CLOSEBRACE", DT = "OPENBRACKET", OT = "CLOSEBRACKET", kT = "OPENPAREN", AT = "CLOSEPAREN", jT = "OPENANGLEBRACKET", MT = "CLOSEANGLEBRACKET", NT = "FULLWIDTHLEFTPAREN", PT = "FULLWIDTHRIGHTPAREN", FT = "LEFTCORNERBRACKET", IT = "RIGHTCORNERBRACKET", LT = "LEFTWHITECORNERBRACKET", RT = "RIGHTWHITECORNERBRACKET", zT = "FULLWIDTHLESSTHAN", BT = "FULLWIDTHGREATERTHAN", VT = "AMPERSAND", HT = "APOSTROPHE", UT = "ASTERISK", WT = "AT", GT = "BACKSLASH", KT = "BACKTICK", qT = "CARET", JT = "COLON", YT = "COMMA", XT = "DOLLAR", ZT = "DOT", QT = "EQUALS", $T = "EXCLAMATION", eE = "HYPHEN", tE = "PERCENT", nE = "PIPE", rE = "PLUS", iE = "POUND", aE = "QUERY", oE = "QUOTE", sE = "FULLWIDTHMIDDLEDOT", cE = "SEMI", lE = "SLASH", uE = "TILDE", dE = "UNDERSCORE", fE = "EMOJI", pE = "SYM", mE = /*#__PURE__*/ Object.freeze({
	__proto__: null,
	ALPHANUMERICAL: gT,
	AMPERSAND: VT,
	APOSTROPHE: HT,
	ASCIINUMERICAL: hT,
	ASTERISK: UT,
	AT: WT,
	BACKSLASH: GT,
	BACKTICK: KT,
	CARET: qT,
	CLOSEANGLEBRACKET: MT,
	CLOSEBRACE: ET,
	CLOSEBRACKET: OT,
	CLOSEPAREN: AT,
	COLON: JT,
	COMMA: YT,
	DOLLAR: XT,
	DOT: ZT,
	EMOJI: fE,
	EQUALS: QT,
	EXCLAMATION: $T,
	FULLWIDTHGREATERTHAN: BT,
	FULLWIDTHLEFTPAREN: NT,
	FULLWIDTHLESSTHAN: zT,
	FULLWIDTHMIDDLEDOT: sE,
	FULLWIDTHRIGHTPAREN: PT,
	HYPHEN: eE,
	LEFTCORNERBRACKET: FT,
	LEFTWHITECORNERBRACKET: LT,
	LOCALHOST: _T,
	NL: wT,
	NUM: ST,
	OPENANGLEBRACKET: jT,
	OPENBRACE: TT,
	OPENBRACKET: DT,
	OPENPAREN: kT,
	PERCENT: tE,
	PIPE: nE,
	PLUS: rE,
	POUND: iE,
	QUERY: aE,
	QUOTE: oE,
	RIGHTCORNERBRACKET: IT,
	RIGHTWHITECORNERBRACKET: RT,
	SCHEME: bT,
	SEMI: cE,
	SLASH: lE,
	SLASH_SCHEME: xT,
	SYM: pE,
	TILDE: uE,
	TLD: vT,
	UNDERSCORE: dE,
	UTLD: yT,
	UWORD: mT,
	WORD: pT,
	WS: CT
}), hE = /[a-z]/, gE = /\p{L}/u, _E = /\p{Emoji}/u, vE = /\d/, yE = /\s/, bE = "\r", xE = "\n", SE = "️", CE = "‍", wE = "￼", TE = null, EE = null;
function DE(e = []) {
	let t = {};
	uT.groups = t;
	let n = new uT();
	TE ??= jE(Yw), EE ??= jE(Xw), K(n, "'", HT), K(n, "{", TT), K(n, "}", ET), K(n, "[", DT), K(n, "]", OT), K(n, "(", kT), K(n, ")", AT), K(n, "<", jT), K(n, ">", MT), K(n, "（", NT), K(n, "）", PT), K(n, "「", FT), K(n, "」", IT), K(n, "『", LT), K(n, "』", RT), K(n, "＜", zT), K(n, "＞", BT), K(n, "&", VT), K(n, "*", UT), K(n, "@", WT), K(n, "`", KT), K(n, "^", qT), K(n, ":", JT), K(n, ",", YT), K(n, "$", XT), K(n, ".", ZT), K(n, "=", QT), K(n, "!", $T), K(n, "-", eE), K(n, "%", tE), K(n, "|", nE), K(n, "+", rE), K(n, "#", iE), K(n, "?", aE), K(n, "\"", oE), K(n, "/", lE), K(n, ";", cE), K(n, "~", uE), K(n, "_", dE), K(n, "\\", GT), K(n, "・", sE);
	let r = dT(n, vE, ST, { [Zw]: !0 });
	dT(r, vE, r);
	let i = dT(r, hE, hT, { [eT]: !0 }), a = dT(r, gE, gT, { [tT]: !0 }), o = dT(n, hE, pT, { [Qw]: !0 });
	dT(o, vE, i), dT(o, hE, o), dT(i, vE, i), dT(i, hE, i);
	let s = dT(n, gE, mT, { [$w]: !0 });
	dT(s, hE), dT(s, vE, a), dT(s, gE, s), dT(a, vE, a), dT(a, hE), dT(a, gE, a);
	let c = K(n, xE, wT, { [oT]: !0 }), l = K(n, bE, CT, { [oT]: !0 }), u = dT(n, yE, CT, { [oT]: !0 });
	K(n, wE, u), K(l, xE, c), K(l, wE, u), dT(l, yE, u), K(u, bE), K(u, xE), dT(u, yE, u), K(u, wE, u);
	let d = dT(n, _E, fE, { [rT]: !0 });
	K(d, "#"), dT(d, _E, d), K(d, SE, d);
	let f = K(d, CE);
	K(f, "#"), dT(f, _E, d);
	let p = [[hE, o], [vE, i]], m = [
		[hE, null],
		[gE, s],
		[vE, a]
	];
	for (let e = 0; e < TE.length; e++) AE(n, TE[e], vT, pT, p);
	for (let e = 0; e < EE.length; e++) AE(n, EE[e], yT, mT, m);
	cT(vT, {
		tld: !0,
		ascii: !0
	}, t), cT(yT, {
		utld: !0,
		alpha: !0
	}, t), AE(n, "file", bT, pT, p), AE(n, "mailto", bT, pT, p), AE(n, "http", xT, pT, p), AE(n, "https", xT, pT, p), AE(n, "ftp", xT, pT, p), AE(n, "ftps", xT, pT, p), cT(bT, {
		scheme: !0,
		ascii: !0
	}, t), cT(xT, {
		slashscheme: !0,
		ascii: !0
	}, t), e = e.sort((e, t) => e[0] > t[0] ? 1 : -1);
	for (let t = 0; t < e.length; t++) {
		let r = e[t][0], i = e[t][1] ? { [iT]: !0 } : { [aT]: !0 };
		r.indexOf("-") >= 0 ? i[nT] = !0 : hE.test(r) ? vE.test(r) ? i[eT] = !0 : i[Qw] = !0 : i[Zw] = !0, fT(n, r, r, i);
	}
	return fT(n, "localhost", _T, { ascii: !0 }), n.jd = new uT(pE), {
		start: n,
		tokens: Object.assign({ groups: t }, mE)
	};
}
function OE(e, t) {
	let n = kE(t.replace(/[A-Z]/g, (e) => e.toLowerCase())), r = n.length, i = [], a = 0, o = 0;
	for (; o < r;) {
		let s = e, c = null, l = 0, u = null, d = -1, f = -1;
		for (; o < r && (c = s.go(n[o]));) s = c, s.accepts() ? (d = 0, f = 0, u = s) : d >= 0 && (d += n[o].length, f++), l += n[o].length, a += n[o].length, o++;
		a -= d, o -= f, l -= d, i.push({
			t: u.t,
			v: t.slice(a - l, a),
			s: a - l,
			e: a
		});
	}
	return i;
}
function kE(e) {
	let t = [], n = e.length, r = 0;
	for (; r < n;) {
		let i = e.charCodeAt(r), a, o = i < 55296 || i > 56319 || r + 1 === n || (a = e.charCodeAt(r + 1)) < 56320 || a > 57343 ? e[r] : e.slice(r, r + 2);
		t.push(o), r += o.length;
	}
	return t;
}
function AE(e, t, n, r, i) {
	let a, o = t.length;
	for (let n = 0; n < o - 1; n++) {
		let o = t[n];
		e.j[o] ? a = e.j[o] : (a = new uT(r), a.jr = i.slice(), e.j[o] = a), e = a;
	}
	return a = new uT(n), a.jr = i.slice(), e.j[t[o - 1]] = a, a;
}
function jE(e) {
	let t = [], n = [], r = 0;
	for (; r < e.length;) {
		let i = 0;
		for (; "0123456789".indexOf(e[r + i]) >= 0;) i++;
		if (i > 0) {
			t.push(n.join(""));
			for (let t = parseInt(e.substring(r, r + i), 10); t > 0; t--) n.pop();
			r += i;
		} else n.push(e[r]), r++;
	}
	return t;
}
var ME = {
	defaultProtocol: "http",
	events: null,
	format: PE,
	formatHref: PE,
	nl2br: !1,
	tagName: "a",
	target: null,
	rel: null,
	validate: !0,
	truncate: Infinity,
	className: null,
	attributes: null,
	ignoreTags: [],
	render: null
};
function NE(e, t = null) {
	let n = Object.assign({}, ME);
	e && (n = Object.assign(n, e instanceof NE ? e.o : e));
	let r = n.ignoreTags, i = [];
	for (let e = 0; e < r.length; e++) i.push(r[e].toUpperCase());
	this.o = n, t && (this.defaultRender = t), this.ignoreTags = i;
}
NE.prototype = {
	o: ME,
	ignoreTags: [],
	defaultRender(e) {
		return e;
	},
	check(e) {
		return this.get("validate", e.toString(), e);
	},
	get(e, t, n) {
		let r = t != null, i = this.o[e];
		return i && (typeof i == "object" ? (i = n.t in i ? i[n.t] : ME[e], typeof i == "function" && r && (i = i(t, n))) : typeof i == "function" && r && (i = i(t, n.t, n)), i);
	},
	getObj(e, t, n) {
		let r = this.o[e];
		return typeof r == "function" && t != null && (r = r(t, n.t, n)), r;
	},
	render(e) {
		let t = e.render(this);
		return (this.get("render", null, e) || this.defaultRender)(t, e.t, e);
	}
};
function PE(e) {
	return e;
}
function FE(e, t) {
	this.t = "token", this.v = e, this.tk = t;
}
FE.prototype = {
	isLink: !1,
	toString() {
		return this.v;
	},
	toHref(e) {
		return this.toString();
	},
	toFormattedString(e) {
		let t = this.toString(), n = e.get("truncate", t, this), r = e.get("format", t, this);
		return n && r.length > n ? r.substring(0, n) + "…" : r;
	},
	toFormattedHref(e) {
		return e.get("formatHref", this.toHref(e.get("defaultProtocol")), this);
	},
	startIndex() {
		return this.tk[0].s;
	},
	endIndex() {
		return this.tk[this.tk.length - 1].e;
	},
	toObject(e = ME.defaultProtocol) {
		return {
			type: this.t,
			value: this.toString(),
			isLink: this.isLink,
			href: this.toHref(e),
			start: this.startIndex(),
			end: this.endIndex()
		};
	},
	toFormattedObject(e) {
		return {
			type: this.t,
			value: this.toFormattedString(e),
			isLink: this.isLink,
			href: this.toFormattedHref(e),
			start: this.startIndex(),
			end: this.endIndex()
		};
	},
	validate(e) {
		return e.get("validate", this.toString(), this);
	},
	render(e) {
		let t = this, n = this.toHref(e.get("defaultProtocol")), r = e.get("formatHref", n, this), i = e.get("tagName", n, t), a = this.toFormattedString(e), o = {}, s = e.get("className", n, t), c = e.get("target", n, t), l = e.get("rel", n, t), u = e.getObj("attributes", n, t), d = e.getObj("events", n, t);
		return o.href = r, s && (o.class = s), c && (o.target = c), l && (o.rel = l), u && Object.assign(o, u), {
			tagName: i,
			attributes: o,
			content: a,
			eventListeners: d
		};
	}
};
function IE(e, t) {
	class n extends FE {
		constructor(t, n) {
			super(t, n), this.t = e;
		}
	}
	for (let e in t) n.prototype[e] = t[e];
	return n.t = e, n;
}
var LE = IE("email", {
	isLink: !0,
	toHref() {
		return "mailto:" + this.toString();
	}
}), RE = IE("text"), zE = IE("nl"), BE = IE("url", {
	isLink: !0,
	toHref(e = ME.defaultProtocol) {
		return this.hasProtocol() ? this.v : `${e}://${this.v}`;
	},
	hasProtocol() {
		let e = this.tk;
		return e.length >= 2 && e[0].t !== _T && e[1].t === JT;
	}
}), VE = (e) => new uT(e);
function HE({ groups: e }) {
	let t = e.domain.concat([
		VT,
		UT,
		WT,
		GT,
		KT,
		qT,
		XT,
		QT,
		eE,
		ST,
		tE,
		nE,
		rE,
		iE,
		lE,
		pE,
		uE,
		dE
	]), n = [
		HT,
		JT,
		YT,
		ZT,
		$T,
		tE,
		aE,
		oE,
		cE,
		jT,
		MT,
		TT,
		ET,
		OT,
		DT,
		kT,
		AT,
		NT,
		PT,
		FT,
		IT,
		LT,
		RT,
		zT,
		BT
	], r = [
		VT,
		HT,
		UT,
		GT,
		KT,
		qT,
		XT,
		QT,
		eE,
		TT,
		ET,
		tE,
		nE,
		rE,
		iE,
		aE,
		lE,
		pE,
		uE,
		dE
	], i = VE(), a = K(i, uE);
	G(a, r, a), G(a, e.domain, a);
	let o = VE(), s = VE(), c = VE();
	G(i, e.domain, o), G(i, e.scheme, s), G(i, e.slashscheme, c), G(o, r, a), G(o, e.domain, o);
	let l = K(o, WT);
	K(a, WT, l), K(s, WT, l), K(c, WT, l);
	let u = K(a, ZT);
	G(u, r, a), G(u, e.domain, a);
	let d = VE();
	G(l, e.domain, d), G(d, e.domain, d);
	let f = K(d, ZT);
	G(f, e.domain, d);
	let p = VE(LE);
	G(f, e.tld, p), G(f, e.utld, p), K(l, _T, p);
	let m = K(d, eE);
	K(m, eE, m), G(m, e.domain, d), G(p, e.domain, d), K(p, ZT, f), K(p, eE, m);
	let h = K(o, eE), g = K(o, ZT);
	K(h, eE, h), G(h, e.domain, o), G(g, r, a), G(g, e.domain, o);
	let _ = VE(BE);
	G(g, e.tld, _), G(g, e.utld, _), G(_, e.domain, o), G(_, r, a), K(_, ZT, g), K(_, eE, h), K(_, WT, l);
	let v = K(_, JT), y = VE(BE);
	G(v, e.numeric, y);
	let b = VE(BE), x = VE();
	G(b, t, b), G(b, n, x), G(x, t, b), G(x, n, x), K(_, lE, b), K(y, lE, b);
	let S = K(s, JT), C = K(K(K(c, JT), lE), lE);
	G(s, e.domain, o), K(s, ZT, g), K(s, eE, h), G(c, e.domain, o), K(c, ZT, g), K(c, eE, h), G(S, e.domain, b), K(S, lE, b), K(S, aE, b), G(C, e.domain, b), G(C, t, b), K(C, lE, b);
	let w = [
		[TT, ET],
		[DT, OT],
		[kT, AT],
		[jT, MT],
		[NT, PT],
		[FT, IT],
		[LT, RT],
		[zT, BT]
	];
	for (let e = 0; e < w.length; e++) {
		let [r, i] = w[e], a = K(b, r);
		K(x, r, a);
		let o = VE(BE);
		G(a, t, o);
		let s = VE();
		G(a, n, s), K(a, i, b), G(o, t, o), G(o, n, s), G(s, t, o), G(s, n, s), K(o, i, b), K(s, i, b);
	}
	return K(i, _T, _), K(i, wT, zE), {
		start: i,
		tokens: mE
	};
}
function UE(e, t, n) {
	let r = n.length, i = 0, a = [], o = [];
	for (; i < r;) {
		let s = e, c = null, l = null, u = 0, d = null, f = -1;
		for (; i < r && !(c = s.go(n[i].t));) o.push(n[i++]);
		for (; i < r && (l = c || s.go(n[i].t));) c = null, s = l, s.accepts() ? (f = 0, d = s) : f >= 0 && f++, i++, u++;
		if (f < 0) i -= u, i < r && (o.push(n[i]), i++);
		else {
			o.length > 0 && (a.push(WE(RE, t, o)), o = []), i -= f, u -= f;
			let e = d.t, r = n.slice(i - u, i);
			a.push(WE(e, t, r));
		}
	}
	return o.length > 0 && a.push(WE(RE, t, o)), a;
}
function WE(e, t, n) {
	let r = n[0].s, i = n[n.length - 1].e;
	return new e(t.slice(r, i), n);
}
var GE = typeof console < "u" && console && console.warn || (() => {}), KE = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", qE = {
	scanner: null,
	parser: null,
	tokenQueue: [],
	pluginQueue: [],
	customSchemes: [],
	initialized: !1
};
function JE(e, t) {
	if (typeof t != "function") throw Error(`linkifyjs: Invalid plugin ${t} (expects function)`);
	for (let n = 0; n < qE.pluginQueue.length; n++) if (e === qE.pluginQueue[n][0]) {
		GE(`linkifyjs: plugin "${e}" already registered - will be overwritten`), qE.pluginQueue[n] = [e, t];
		return;
	}
	qE.pluginQueue.push([e, t]), qE.initialized && GE(`linkifyjs: already initialized - will not register plugin "${e}" ${KE}`);
}
function YE(e, t = !1) {
	if (qE.initialized && GE(`linkifyjs: already initialized - will not register custom scheme "${e}" ${KE}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(e)) throw Error("linkifyjs: incorrect scheme format.\n1. Must only contain digits, lowercase ASCII letters or \"-\"\n2. Cannot start or end with \"-\"\n3. \"-\" cannot repeat");
	qE.customSchemes.push([e, t]);
}
function XE() {
	qE.scanner = DE(qE.customSchemes);
	for (let e = 0; e < qE.tokenQueue.length; e++) qE.tokenQueue[e][1]({ scanner: qE.scanner });
	qE.parser = HE(qE.scanner.tokens);
	for (let e = 0; e < qE.pluginQueue.length; e++) qE.pluginQueue[e][1]({
		scanner: qE.scanner,
		parser: qE.parser
	});
	return qE.initialized = !0, qE;
}
function ZE(e) {
	return qE.initialized || XE(), UE(qE.parser.start, e, OE(qE.scanner.start, e));
}
ZE.scan = OE;
function QE(e, t = null, n = null) {
	if (t && typeof t == "object") {
		if (n) throw Error(`linkifyjs: Invalid link type ${t}; must be a string`);
		n = t, t = null;
	}
	let r = new NE(n), i = ZE(e), a = [];
	for (let e = 0; e < i.length; e++) {
		let n = i[e];
		n.isLink && (!t || n.t === t) && r.check(n) && a.push(n.toFormattedObject(r));
	}
	return a;
}
function $E(e, t = null) {
	let n = ZE(e);
	return n.length === 1 && n[0].isLink && (!t || n[0].t === t);
}
//#endregion
//#region ../../node_modules/.pnpm/linkify-react@4.3.3_linkifyjs@4.3.3_react@19.2.8/node_modules/linkify-react/dist/linkify-react.mjs
function eD(e, t, n) {
	let r = ZE(e), i = [];
	for (let e = 0; e < r.length; e++) {
		let o = r[e];
		if (o.t === "nl" && t.get("nl2br")) {
			let e = `__linkify-el-${n.elementId++}`;
			i.push(a.createElement("br", { key: e }));
		} else if (!o.isLink || !t.check(o)) i.push(o.toString());
		else {
			let e = t.render(o);
			if (!("key" in e.props)) {
				let t = `__linkify-el-${n.elementId++}`, r = Object.assign({ key: t }, e.props);
				e = a.cloneElement(e, r);
			}
			i.push(e);
		}
	}
	return i;
}
function tD(e, t, n) {
	if (a.Children.count(e.props.children) === 0) return e;
	let r = [];
	a.Children.forEach(e.props.children, (e) => {
		typeof e == "string" ? r.push.apply(r, eD(e, t, n)) : a.isValidElement(e) ? typeof e.type == "string" && t.ignoreTags.indexOf(e.type.toUpperCase()) >= 0 ? r.push(e) : r.push(tD(e, t, n)) : r.push(e);
	});
	let i = `__linkify-el-${n.elementId++}`, o = Object.assign({ key: i }, e.props);
	return a.cloneElement(e, o, r);
}
var nD = (e) => {
	let t = 0, n = ({ tagName: e, attributes: n, content: r }) => (n.key = `__linkify-lnk-${t++}`, n.class && (n.className = n.class, delete n.class), a.createElement(e, n, r)), r = { key: "__linkify-wrapper" };
	for (let t in e) t !== "options" && t !== "as" && t !== "tagName" && t !== "children" && (r[t] = e[t]);
	let i = new NE(e.options, n), o = e.as || e.tagName || a.Fragment || "span", s = e.children;
	return tD(a.createElement(o, r, s), i, { elementId: 0 });
}, rD = { container: "_container_15awj_8" };
//#endregion
//#region ../../node_modules/.pnpm/linkify-string@4.3.3_linkifyjs@4.3.3/node_modules/linkify-string/dist/linkify-string.mjs
function iD(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function aD(e) {
	return e.replace(/"/g, "&quot;");
}
function oD(e) {
	let t = [];
	for (let n in e) {
		let r = e[n] + "";
		t.push(`${n}="${aD(r)}"`);
	}
	return t.join(" ");
}
function sD({ tagName: e, attributes: t, content: n }) {
	return `<${e} ${oD(t)}>${iD(n)}</${e}>`;
}
function cD(e, t = {}) {
	t = new NE(t, sD);
	let n = ZE(e), r = [];
	for (let e = 0; e < n.length; e++) {
		let i = n[e];
		i.t === "nl" && t.get("nl2br") ? r.push("<br>\n") : !i.isLink || !t.check(i) ? r.push(iD(i.toString())) : r.push(t.render(i));
	}
	return r.join("");
}
String.prototype.linkify || Object.defineProperty(String.prototype, "linkify", {
	writable: !1,
	value: function(e) {
		return cD(this, e);
	}
});
//#endregion
//#region ../../node_modules/.pnpm/linkify-html@4.3.3_patch_hash=1761c1eabe25d9fae83f74f27a20b3d24515840a4a8747bb04828df46bcfdea2_linkifyjs@4.3.3/node_modules/linkify-html/dist/linkify-html.mjs
var lD = {
	amp: "&",
	gt: ">",
	lt: "<",
	nbsp: "\xA0",
	quot: "\""
}, uD = /^#[xX]([A-Fa-f0-9]+)$/, dD = /^#([0-9]+)$/, fD = /^([A-Za-z0-9]+)$/, pD = function() {
	function e(e) {
		this.named = e;
	}
	return e.prototype.parse = function(e) {
		if (e) {
			var t = e.match(uD);
			if (t) return String.fromCharCode(parseInt(t[1], 16));
			if (t = e.match(dD), t) return String.fromCharCode(parseInt(t[1], 10));
			if (t = e.match(fD), t) return this.named[t[1]] || "&" + t[1] + ";";
		}
	}, e;
}(), mD = /[\t\n\f ]/, hD = /[A-Za-z]/, gD = /\r\n?/g;
function _D(e) {
	return mD.test(e);
}
function vD(e) {
	return hD.test(e);
}
function yD(e) {
	return e.replace(gD, "\n");
}
var bD = function() {
	function e(e, t, n) {
		n === void 0 && (n = "precompile"), this.delegate = e, this.entityParser = t, this.mode = n, this.state = "beforeData", this.line = -1, this.column = -1, this.input = "", this.index = -1, this.tagNameBuffer = "", this.states = {
			beforeData: function() {
				var e = this.peek();
				if (e === "<" && !this.isIgnoredEndTag()) this.transitionTo("tagOpen"), this.markTagStart(), this.consume();
				else {
					if (this.mode === "precompile" && e === "\n") {
						var t = this.tagNameBuffer.toLowerCase();
						(t === "pre" || t === "textarea") && this.consume();
					}
					this.transitionTo("data"), this.delegate.beginData();
				}
			},
			data: function() {
				var e = this.peek(), t = this.tagNameBuffer;
				e === "<" && !this.isIgnoredEndTag() ? (this.delegate.finishData(), this.transitionTo("tagOpen"), this.markTagStart(), this.consume()) : e === "&" && t !== "script" && t !== "style" ? (this.consume(), this.delegate.appendToData(this.consumeCharRef() || "&")) : (this.consume(), this.delegate.appendToData(e));
			},
			tagOpen: function() {
				var e = this.consume();
				e === "!" ? this.transitionTo("markupDeclarationOpen") : e === "/" ? this.transitionTo("endTagOpen") : (e === "@" || e === ":" || vD(e)) && (this.transitionTo("tagName"), this.tagNameBuffer = "", this.delegate.beginStartTag(), this.appendToTagName(e));
			},
			markupDeclarationOpen: function() {
				var e = this.consume();
				e === "-" && this.peek() === "-" ? (this.consume(), this.transitionTo("commentStart"), this.delegate.beginComment()) : e.toUpperCase() + this.input.substring(this.index, this.index + 6).toUpperCase() === "DOCTYPE" && (this.consume(), this.consume(), this.consume(), this.consume(), this.consume(), this.consume(), this.transitionTo("doctype"), this.delegate.beginDoctype && this.delegate.beginDoctype());
			},
			doctype: function() {
				_D(this.consume()) && this.transitionTo("beforeDoctypeName");
			},
			beforeDoctypeName: function() {
				var e = this.consume();
				_D(e) || (this.transitionTo("doctypeName"), this.delegate.appendToDoctypeName && this.delegate.appendToDoctypeName(e.toLowerCase()));
			},
			doctypeName: function() {
				var e = this.consume();
				_D(e) ? this.transitionTo("afterDoctypeName") : e === ">" ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : this.delegate.appendToDoctypeName && this.delegate.appendToDoctypeName(e.toLowerCase());
			},
			afterDoctypeName: function() {
				var e = this.consume();
				if (!_D(e)) if (e === ">") this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData");
				else {
					var t = e.toUpperCase() + this.input.substring(this.index, this.index + 5).toUpperCase(), n = t.toUpperCase() === "PUBLIC", r = t.toUpperCase() === "SYSTEM";
					(n || r) && (this.consume(), this.consume(), this.consume(), this.consume(), this.consume(), this.consume()), n ? this.transitionTo("afterDoctypePublicKeyword") : r && this.transitionTo("afterDoctypeSystemKeyword");
				}
			},
			afterDoctypePublicKeyword: function() {
				var e = this.peek();
				if (_D(e)) this.transitionTo("beforeDoctypePublicIdentifier"), this.consume();
				else if (e === "\"") this.transitionTo("doctypePublicIdentifierDoubleQuoted"), this.consume();
				else if (e === "'") this.transitionTo("doctypePublicIdentifierSingleQuoted"), this.consume();
				else if (e === ">") this.consume(), this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData");
				else throw Error("Unexpected token");
			},
			doctypePublicIdentifierDoubleQuoted: function() {
				var e = this.consume();
				e === "\"" ? this.transitionTo("afterDoctypePublicIdentifier") : e === ">" ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : this.delegate.appendToDoctypePublicIdentifier && this.delegate.appendToDoctypePublicIdentifier(e);
			},
			doctypePublicIdentifierSingleQuoted: function() {
				var e = this.consume();
				e === "'" ? this.transitionTo("afterDoctypePublicIdentifier") : e === ">" ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : this.delegate.appendToDoctypePublicIdentifier && this.delegate.appendToDoctypePublicIdentifier(e);
			},
			afterDoctypePublicIdentifier: function() {
				var e = this.consume();
				_D(e) ? this.transitionTo("betweenDoctypePublicAndSystemIdentifiers") : e === ">" ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : e === "\"" ? this.transitionTo("doctypeSystemIdentifierDoubleQuoted") : e === "'" && this.transitionTo("doctypeSystemIdentifierSingleQuoted");
			},
			betweenDoctypePublicAndSystemIdentifiers: function() {
				var e = this.consume();
				_D(e) || (e === ">" ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : e === "\"" ? this.transitionTo("doctypeSystemIdentifierDoubleQuoted") : e === "'" && this.transitionTo("doctypeSystemIdentifierSingleQuoted"));
			},
			doctypeSystemIdentifierDoubleQuoted: function() {
				var e = this.consume();
				e === "\"" ? this.transitionTo("afterDoctypeSystemIdentifier") : e === ">" ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : this.delegate.appendToDoctypeSystemIdentifier && this.delegate.appendToDoctypeSystemIdentifier(e);
			},
			doctypeSystemIdentifierSingleQuoted: function() {
				var e = this.consume();
				e === "'" ? this.transitionTo("afterDoctypeSystemIdentifier") : e === ">" ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : this.delegate.appendToDoctypeSystemIdentifier && this.delegate.appendToDoctypeSystemIdentifier(e);
			},
			afterDoctypeSystemIdentifier: function() {
				var e = this.consume();
				_D(e) || e === ">" && (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData"));
			},
			commentStart: function() {
				var e = this.consume();
				e === "-" && this.peek() === "-" ? this.transitionTo("commentStartDash") : e === ">" ? (this.delegate.finishComment(), this.transitionTo("beforeData")) : (this.delegate.appendToCommentData(e), this.transitionTo("comment"));
			},
			commentStartDash: function() {
				var e = this.consume();
				e === "-" ? this.transitionTo("commentEnd") : e === ">" ? (this.delegate.finishComment(), this.transitionTo("beforeData")) : (this.delegate.appendToCommentData("-"), this.transitionTo("comment"));
			},
			comment: function() {
				var e = this.consume();
				e === "-" ? this.transitionTo("commentEndDash") : this.delegate.appendToCommentData(e);
			},
			commentEndDash: function() {
				var e = this.consume();
				e === "-" && this.peek() === "-" ? this.delegate.appendToCommentData(e) : e === "-" ? this.transitionTo("commentEnd") : (this.delegate.appendToCommentData("-" + e), this.transitionTo("comment"));
			},
			commentEnd: function() {
				var e = this.consume();
				e === ">" ? (this.delegate.finishComment(), this.transitionTo("beforeData")) : (this.delegate.appendToCommentData("--" + e), this.transitionTo("comment"));
			},
			tagName: function() {
				var e = this.consume();
				_D(e) ? this.transitionTo("beforeAttributeName") : e === "/" ? this.transitionTo("selfClosingStartTag") : e === ">" ? (this.delegate.finishTag(), this.transitionTo("beforeData")) : this.appendToTagName(e);
			},
			endTagName: function() {
				var e = this.consume();
				_D(e) ? (this.transitionTo("beforeAttributeName"), this.tagNameBuffer = "") : e === "/" ? (this.transitionTo("selfClosingStartTag"), this.tagNameBuffer = "") : e === ">" ? (this.delegate.finishTag(), this.transitionTo("beforeData"), this.tagNameBuffer = "") : this.appendToTagName(e);
			},
			beforeAttributeName: function() {
				var e = this.peek();
				if (_D(e)) {
					this.consume();
					return;
				}
				e === "/" ? (this.transitionTo("selfClosingStartTag"), this.consume()) : e === ">" ? (this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : e === "=" ? (this.delegate.reportSyntaxError("attribute name cannot start with equals sign"), this.transitionTo("attributeName"), this.delegate.beginAttribute(), this.consume(), this.delegate.appendToAttributeName(e)) : (this.transitionTo("attributeName"), this.delegate.beginAttribute());
			},
			attributeName: function() {
				var e = this.peek();
				_D(e) ? (this.transitionTo("afterAttributeName"), this.consume()) : e === "/" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("selfClosingStartTag")) : e === "=" ? (this.transitionTo("beforeAttributeValue"), this.consume()) : e === ">" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : e === "\"" || e === "'" || e === "<" ? (this.delegate.reportSyntaxError(e + " is not a valid character within attribute names"), this.consume(), this.delegate.appendToAttributeName(e)) : (this.consume(), this.delegate.appendToAttributeName(e));
			},
			afterAttributeName: function() {
				var e = this.peek();
				if (_D(e)) {
					this.consume();
					return;
				}
				e === "/" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("selfClosingStartTag")) : e === "=" ? (this.consume(), this.transitionTo("beforeAttributeValue")) : e === ">" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.transitionTo("attributeName"), this.delegate.beginAttribute(), this.consume(), this.delegate.appendToAttributeName(e));
			},
			beforeAttributeValue: function() {
				var e = this.peek();
				_D(e) ? this.consume() : e === "\"" ? (this.transitionTo("attributeValueDoubleQuoted"), this.delegate.beginAttributeValue(!0), this.consume()) : e === "'" ? (this.transitionTo("attributeValueSingleQuoted"), this.delegate.beginAttributeValue(!0), this.consume()) : e === ">" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : (this.transitionTo("attributeValueUnquoted"), this.delegate.beginAttributeValue(!1), this.consume(), this.delegate.appendToAttributeValue(e));
			},
			attributeValueDoubleQuoted: function() {
				var e = this.consume();
				e === "\"" ? (this.delegate.finishAttributeValue(), this.transitionTo("afterAttributeValueQuoted")) : e === "&" ? this.delegate.appendToAttributeValue(this.consumeCharRef() || "&") : this.delegate.appendToAttributeValue(e);
			},
			attributeValueSingleQuoted: function() {
				var e = this.consume();
				e === "'" ? (this.delegate.finishAttributeValue(), this.transitionTo("afterAttributeValueQuoted")) : e === "&" ? this.delegate.appendToAttributeValue(this.consumeCharRef() || "&") : this.delegate.appendToAttributeValue(e);
			},
			attributeValueUnquoted: function() {
				var e = this.peek();
				_D(e) ? (this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("beforeAttributeName")) : e === "/" ? (this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("selfClosingStartTag")) : e === "&" ? (this.consume(), this.delegate.appendToAttributeValue(this.consumeCharRef() || "&")) : e === ">" ? (this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : (this.consume(), this.delegate.appendToAttributeValue(e));
			},
			afterAttributeValueQuoted: function() {
				var e = this.peek();
				_D(e) ? (this.consume(), this.transitionTo("beforeAttributeName")) : e === "/" ? (this.consume(), this.transitionTo("selfClosingStartTag")) : e === ">" ? (this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : this.transitionTo("beforeAttributeName");
			},
			selfClosingStartTag: function() {
				this.peek() === ">" ? (this.consume(), this.delegate.markTagAsSelfClosing(), this.delegate.finishTag(), this.transitionTo("beforeData")) : this.transitionTo("beforeAttributeName");
			},
			endTagOpen: function() {
				var e = this.consume();
				(e === "@" || e === ":" || vD(e)) && (this.transitionTo("endTagName"), this.tagNameBuffer = "", this.delegate.beginEndTag(), this.appendToTagName(e));
			}
		}, this.reset();
	}
	return e.prototype.reset = function() {
		this.transitionTo("beforeData"), this.input = "", this.tagNameBuffer = "", this.index = 0, this.line = 1, this.column = 0, this.delegate.reset();
	}, e.prototype.transitionTo = function(e) {
		this.state = e;
	}, e.prototype.tokenize = function(e) {
		this.reset(), this.tokenizePart(e), this.tokenizeEOF();
	}, e.prototype.tokenizePart = function(e) {
		for (this.input += yD(e); this.index < this.input.length;) {
			var t = this.states[this.state];
			if (t !== void 0) t.call(this);
			else throw Error("unhandled state " + this.state);
		}
	}, e.prototype.tokenizeEOF = function() {
		this.flushData();
	}, e.prototype.flushData = function() {
		this.state === "data" && (this.delegate.finishData(), this.transitionTo("beforeData"));
	}, e.prototype.peek = function() {
		return this.input.charAt(this.index);
	}, e.prototype.consume = function() {
		var e = this.peek();
		return this.index++, e === "\n" ? (this.line++, this.column = 0) : this.column++, e;
	}, e.prototype.consumeCharRef = function() {
		var e = this.input.indexOf(";", this.index);
		if (e !== -1) {
			var t = this.input.slice(this.index, e), n = this.entityParser.parse(t);
			if (n) {
				for (var r = t.length; r;) this.consume(), r--;
				return this.consume(), n;
			}
		}
	}, e.prototype.markTagStart = function() {
		this.delegate.tagOpen();
	}, e.prototype.appendToTagName = function(e) {
		this.tagNameBuffer += e, this.delegate.appendToTagName(e);
	}, e.prototype.isIgnoredEndTag = function() {
		var e = this.tagNameBuffer;
		return e === "title" && this.input.substring(this.index, this.index + 8) !== "</title>" || e === "style" && this.input.substring(this.index, this.index + 8) !== "</style>" || e === "script" && this.input.substring(this.index, this.index + 9) !== "<\/script>";
	}, e;
}(), xD = function() {
	function e(e, t) {
		t === void 0 && (t = {}), this.options = t, this.token = null, this.startLine = 1, this.startColumn = 0, this.tokens = [], this.tokenizer = new bD(this, e, t.mode), this._currentAttribute = void 0;
	}
	return e.prototype.tokenize = function(e) {
		return this.tokens = [], this.tokenizer.tokenize(e), this.tokens;
	}, e.prototype.tokenizePart = function(e) {
		return this.tokens = [], this.tokenizer.tokenizePart(e), this.tokens;
	}, e.prototype.tokenizeEOF = function() {
		return this.tokens = [], this.tokenizer.tokenizeEOF(), this.tokens[0];
	}, e.prototype.reset = function() {
		this.token = null, this.startLine = 1, this.startColumn = 0;
	}, e.prototype.current = function() {
		var e = this.token;
		if (e === null) throw Error("token was unexpectedly null");
		if (arguments.length === 0) return e;
		for (var t = 0; t < arguments.length; t++) if (e.type === arguments[t]) return e;
		throw Error("token type was unexpectedly " + e.type);
	}, e.prototype.push = function(e) {
		this.token = e, this.tokens.push(e);
	}, e.prototype.currentAttribute = function() {
		return this._currentAttribute;
	}, e.prototype.addLocInfo = function() {
		this.options.loc && (this.current().loc = {
			start: {
				line: this.startLine,
				column: this.startColumn
			},
			end: {
				line: this.tokenizer.line,
				column: this.tokenizer.column
			}
		}), this.startLine = this.tokenizer.line, this.startColumn = this.tokenizer.column;
	}, e.prototype.beginDoctype = function() {
		this.push({
			type: "Doctype",
			name: ""
		});
	}, e.prototype.appendToDoctypeName = function(e) {
		this.current("Doctype").name += e;
	}, e.prototype.appendToDoctypePublicIdentifier = function(e) {
		var t = this.current("Doctype");
		t.publicIdentifier === void 0 ? t.publicIdentifier = e : t.publicIdentifier += e;
	}, e.prototype.appendToDoctypeSystemIdentifier = function(e) {
		var t = this.current("Doctype");
		t.systemIdentifier === void 0 ? t.systemIdentifier = e : t.systemIdentifier += e;
	}, e.prototype.endDoctype = function() {
		this.addLocInfo();
	}, e.prototype.beginData = function() {
		this.push({
			type: "Chars",
			chars: ""
		});
	}, e.prototype.appendToData = function(e) {
		this.current("Chars").chars += e;
	}, e.prototype.finishData = function() {
		this.addLocInfo();
	}, e.prototype.beginComment = function() {
		this.push({
			type: "Comment",
			chars: ""
		});
	}, e.prototype.appendToCommentData = function(e) {
		this.current("Comment").chars += e;
	}, e.prototype.finishComment = function() {
		this.addLocInfo();
	}, e.prototype.tagOpen = function() {}, e.prototype.beginStartTag = function() {
		this.push({
			type: "StartTag",
			tagName: "",
			attributes: [],
			selfClosing: !1
		});
	}, e.prototype.beginEndTag = function() {
		this.push({
			type: "EndTag",
			tagName: ""
		});
	}, e.prototype.finishTag = function() {
		this.addLocInfo();
	}, e.prototype.markTagAsSelfClosing = function() {
		this.current("StartTag").selfClosing = !0;
	}, e.prototype.appendToTagName = function(e) {
		this.current("StartTag", "EndTag").tagName += e;
	}, e.prototype.beginAttribute = function() {
		this._currentAttribute = [
			"",
			"",
			!1
		];
	}, e.prototype.appendToAttributeName = function(e) {
		this.currentAttribute()[0] += e;
	}, e.prototype.beginAttributeValue = function(e) {
		this.currentAttribute()[2] = e;
	}, e.prototype.appendToAttributeValue = function(e) {
		this.currentAttribute()[1] += e;
	}, e.prototype.finishAttributeValue = function() {
		this.current("StartTag").attributes.push(this._currentAttribute);
	}, e.prototype.reportSyntaxError = function(e) {
		this.current().syntaxError = e;
	}, e;
}();
function SD(e, t) {
	return new xD(new pD(lD), t).tokenize(e);
}
var CD = "LinkifyResult", wD = "StartTag", TD = "EndTag", ED = "Chars", DD = "Comment", OD = "Doctype";
function kD(e, t = {}) {
	let n = SD(e), r = [], i = [], a = new NE(t, MD);
	for (let e = 0; e < n.length; e++) {
		let t = n[e];
		if (t.type === wD) {
			r.push(t);
			let i = t.tagName.toUpperCase();
			if (!(i === "A" || a.ignoreTags.indexOf(i) >= 0)) continue;
			let o = r.length;
			jD(i, n, ++e, r), e += r.length - o - 1;
		} else if (t.type !== ED) r.push(t);
		else {
			let e = AD(t.chars, a);
			r.push.apply(r, e);
		}
	}
	for (let e = 0; e < r.length; e++) {
		let t = r[e];
		switch (t.type) {
			case CD:
				i.push(t.rendered);
				break;
			case wD: {
				let e = "<" + t.tagName;
				t.attributes.length > 0 && (e += " " + ID(t.attributes).join(" ")), t.selfClosing && (e += " /"), e += ">", i.push(e);
				break;
			}
			case TD:
				i.push(`</${t.tagName}>`);
				break;
			case ED:
				i.push(ND(t.chars));
				break;
			case DD:
				i.push(`<!--${ND(t.chars)}-->`);
				break;
			case OD: {
				let e = `<!DOCTYPE ${t.name}`;
				t.publicIdentifier && (e += ` PUBLIC "${t.publicIdentifier}"`), t.systemIdentifier && (e += ` "${t.systemIdentifier}"`), e += ">", i.push(e);
				break;
			}
		}
	}
	return i.join("");
}
function AD(e, t) {
	let n = ZE(e), r = [];
	for (let e = 0; e < n.length; e++) {
		let i = n[e];
		i.t === "nl" && t.get("nl2br") ? r.push({
			type: wD,
			tagName: "br",
			attributes: [],
			selfClosing: !0
		}) : !i.isLink || !t.check(i) ? r.push({
			type: ED,
			chars: i.toString()
		}) : r.push({
			type: CD,
			rendered: t.render(i)
		});
	}
	return r;
}
function jD(e, t, n, r) {
	let i = 1;
	for (; n < t.length && i > 0;) {
		let a = t[n];
		a.type === wD && a.tagName.toUpperCase() === e ? i++ : a.type === TD && a.tagName.toUpperCase() === e && i--, r.push(a), n++;
	}
	return r;
}
function MD({ tagName: e, attributes: t, content: n }) {
	return `<${e} ${FD(t)}>${ND(n)}</${e}>`;
}
function ND(e) {
	return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function PD(e) {
	return e.replace(/"/g, "&quot;");
}
function FD(e) {
	let t = [];
	for (let n in e) {
		let r = e[n] + "";
		t.push(`${n}="${PD(r)}"`);
	}
	return t.join(" ");
}
function ID(e) {
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n][0], i = e[n][1] + "";
		t.push(`${r}="${PD(i)}"`);
	}
	return t;
}
//#endregion
//#region src/core/utils/linkify.ts
var LD = [
	"file",
	"mailto",
	"http",
	"https",
	"ftp",
	"ftps"
], RD = [
	"bitcoin",
	"geo",
	"im",
	"magnet",
	"mailto",
	"matrix",
	"news",
	"openpgp4fpr",
	"sip",
	"sms",
	"smsto",
	"tel",
	"urn",
	"xmpp"
], zD = [...LD, ...RD], BD = /* @__PURE__ */ function(e) {
	return e.URL = "url", e.UserId = "userid", e.RoomAlias = "roomalias", e;
}({});
function VD({ scanner: e, parser: t, token: n, name: r }) {
	let { DOT: i, NUM: a, COLON: o, SYM: s, SLASH: c, EQUALS: l, HYPHEN: u, UNDERSCORE: d } = e.tokens, { domain: f } = e.tokens.groups, p = [
		i,
		s,
		c,
		l,
		d,
		u
	], m = [u], h = new uT(IE(r, { isLink: !0 })), g = new uT(IE(r, { isLink: !0 })), _ = t.start.tt(n), v = new uT();
	_.ta(f, v), _.ta(p, v), v.ta(f, v), v.ta(p, v);
	let y = v.tt(o);
	y.ta(f, h), y.ta(m, h), h.ta(f, h), h.ta(m, h), h.tt(i, y), h.tt(o).tt(a, g);
}
function HD({ urlListener: e, roomAliasListener: t, userIdListener: n, urlTargetTransformer: r, hrefTransformer: i, onLinkClick: a }) {
	let o = (r, i) => {
		switch (i) {
			case "url":
				if (e) return e(r);
				break;
			case "userid":
				if (n) return n(r);
				break;
			case "roomalias": if (t) return t(r);
		}
		return {};
	};
	return {
		rel: "noreferrer noopener",
		ignoreTags: [
			"a",
			"pre",
			"code"
		],
		defaultProtocol: "https",
		events: o,
		attributes: (e, t) => {
			let n = { [`data-${GD}`]: "true" }, r = o(e, t);
			return r?.click && (n.onClick = r.click), a && (n.onClick = (e) => {
				a(e), r?.click?.(e);
			}), n;
		},
		target(e, t) {
			return t === "url" && r ? r(e) : "_blank";
		},
		...i ? { formatHref: (e, t) => i(e, t) } : void 0,
		validate: (e, r) => !!(r === "userid" && n) || !!(r === "roomalias" && t) || !!(r === "url" && URL.canParse(e))
	};
}
function UD(e) {
	return QE(e);
}
function WD(e) {
	return $E(e);
}
var GD = "linkified", KD = !1;
function qD() {
	KD ||= (JE("roomalias", ({ scanner: e, parser: t }) => {
		let n = e.tokens.POUND;
		VD({
			scanner: e,
			parser: t,
			token: n,
			name: "roomalias"
		});
	}), JE("userid", ({ scanner: e, parser: t }) => {
		let n = e.tokens.AT;
		VD({
			scanner: e,
			parser: t,
			token: n,
			name: "userid"
		});
	}), YE("mxc", !1), zD.forEach((e) => {
		LD.includes(e) || YE(e, RD.includes(e));
	}), !0);
}
qD();
//#endregion
//#region src/core/utils/LinkedText/LinkedTextContext.ts
var JD = l(null);
JD.displayName = "LinkedTextContext";
function YD() {
	let e = g(JD);
	if (!e) throw Error("useLinkedTextContextOpts must be used within an LinkedTextContext.Provider");
	return e;
}
//#endregion
//#region src/core/utils/LinkedText/LinkedText.tsx
function XD({ children: e, className: t, onLinkClick: n, ...r }) {
	let i = HD({
		...YD(),
		onLinkClick: n
	});
	return /* @__PURE__ */ (0, z.jsx)(nD, {
		className: (0, R.default)(rD.container, t),
		as: P,
		options: {
			...i,
			render: le
		},
		...r,
		children: e
	});
}
var ZD = {
	preview: "_preview_u46gn_8",
	containerCollapsed: "_containerCollapsed_u46gn_12",
	textContent: "_textContent_u46gn_26",
	siteName: "_siteName_u46gn_47",
	title: "_title_u46gn_51",
	containerExpanded: "_containerExpanded_u46gn_62",
	inline: "_inline_u46gn_76",
	siteAvatar: "_siteAvatar_u46gn_85",
	caption: "_caption_u46gn_106",
	playButton: "_playButton_u46gn_130",
	description: "_description_u46gn_150"
};
//#endregion
//#region src/room/timeline/event-tile/UrlPreviewGroupView/LinkPreview/LinkPreview.tsx
function QD({ title: e, showTooltipOnLink: t, link: n }) {
	let r = new URL(n).toString(), i = /* @__PURE__ */ (0, z.jsx)(P, {
		as: "a",
		type: "body",
		weight: "semibold",
		size: "md",
		className: ZD.title,
		href: n,
		target: "_blank",
		rel: "noreferrer noopener",
		children: e
	});
	return t ? /* @__PURE__ */ (0, z.jsx)(F, {
		label: r,
		children: i
	}) : i;
}
function $D({ siteIcon: e, siteName: t }) {
	return /* @__PURE__ */ (0, z.jsxs)("div", {
		className: ZD.siteName,
		children: [e && /* @__PURE__ */ (0, z.jsx)(D, {
			size: "16px",
			name: t,
			id: t,
			src: e
		}), /* @__PURE__ */ (0, z.jsx)(P, {
			as: "span",
			size: "sm",
			weight: "regular",
			children: t
		})]
	});
}
function eO({ title: e, showTooltipOnLink: t, siteIcon: n, siteName: r, link: i }) {
	return /* @__PURE__ */ (0, z.jsxs)("div", {
		className: (0, R.default)(ZD.containerExpanded, ZD.inline),
		children: [n && /* @__PURE__ */ (0, z.jsx)("div", {
			className: ZD.siteAvatar,
			children: /* @__PURE__ */ (0, z.jsx)(D, {
				type: "square",
				size: "48px",
				name: e,
				id: e,
				src: n
			})
		}), /* @__PURE__ */ (0, z.jsxs)("div", {
			className: (0, R.default)(ZD.textContent, ZD.inline),
			children: [/* @__PURE__ */ (0, z.jsx)(QD, {
				title: e,
				showTooltipOnLink: t,
				link: i
			}), r && /* @__PURE__ */ (0, z.jsx)($D, { siteName: r })]
		})]
	});
}
function tO(e) {
	return e.collapsed ? /* @__PURE__ */ (0, z.jsx)(rO, { ...e }) : /* @__PURE__ */ (0, z.jsx)(iO, { ...e });
}
function nO({ onImageClick: e, ...t }) {
	return (n) => {
		n.button != 0 || n.metaKey || (n.preventDefault(), t.image?.imageFull && e());
	};
}
function rO(e) {
	let { translate: t } = B(), n;
	return e.image && !e.image.playable && (n = /* @__PURE__ */ (0, z.jsx)("div", {
		className: ZD.preview,
		children: /* @__PURE__ */ (0, z.jsx)("button", {
			type: "button",
			style: { backgroundImage: `url('${e.image.imageThumb}')` },
			onClick: nO(e),
			"aria-label": t("timeline|url_preview|view_image")
		})
	})), /* @__PURE__ */ (0, z.jsxs)("div", {
		className: ZD.containerCollapsed,
		children: [n, /* @__PURE__ */ (0, z.jsxs)("div", {
			className: ZD.textContent,
			children: [/* @__PURE__ */ (0, z.jsx)(QD, {
				title: e.title,
				showTooltipOnLink: e.showTooltipOnLink,
				link: e.link
			}), e.siteName && /* @__PURE__ */ (0, z.jsx)($D, { siteName: e.siteName })]
		})]
	});
}
function iO(e) {
	let { translate: t } = B();
	if (!e.image && !e.author && !e.description) return /* @__PURE__ */ (0, z.jsx)(eO, { ...e });
	let n;
	return e.image && (n = e.image.playable ? /* @__PURE__ */ (0, z.jsx)("div", {
		style: { backgroundImage: `url('${e.image.imageThumb}')` },
		className: ZD.preview,
		children: /* @__PURE__ */ (0, z.jsx)(k, {
			as: "a",
			href: e.link,
			"aria-label": t("timeline|url_preview|open_link"),
			className: ZD.playButton,
			target: "_blank",
			rel: "noreferrer noopener",
			kind: "primary",
			children: /* @__PURE__ */ (0, z.jsx)(rf, {
				width: "24px",
				height: "24px"
			})
		})
	}) : /* @__PURE__ */ (0, z.jsx)("button", {
		style: { backgroundImage: `url('${e.image.imageThumb}')` },
		className: ZD.preview,
		onClick: nO(e),
		"aria-label": t("timeline|url_preview|view_image"),
		type: "button"
	})), /* @__PURE__ */ (0, z.jsxs)("div", {
		className: ZD.containerExpanded,
		children: [n, /* @__PURE__ */ (0, z.jsxs)("div", {
			className: ZD.textContent,
			children: [
				e.author && /* @__PURE__ */ (0, z.jsx)(P, {
					as: "span",
					size: "md",
					weight: "semibold",
					children: e.author
				}),
				/* @__PURE__ */ (0, z.jsx)(QD, {
					title: e.title,
					showTooltipOnLink: e.showTooltipOnLink,
					link: e.link
				}),
				/* @__PURE__ */ (0, z.jsx)(XD, {
					type: "body",
					size: "md",
					className: ZD.description,
					children: e.description
				}),
				e.siteName && /* @__PURE__ */ (0, z.jsx)($D, {
					siteName: e.siteName,
					siteIcon: e.siteIcon
				})
			]
		})]
	});
}
//#endregion
//#region src/room/composer/MessageComposerUrlPreview/MessageComposerUrlPreview.tsx
function aO({ vm: e, className: t }) {
	let { previews: n } = H(e);
	if (n.length === 0) return null;
	let r = n.slice(0, 1).map((e) => /* @__PURE__ */ (0, z.jsx)("div", {
		className: (0, R.default)(t, Jw.container),
		children: /* @__PURE__ */ (0, z.jsxs)("div", { children: [e?.image?.imageThumb && /* @__PURE__ */ (0, z.jsx)("img", {
			className: Jw.image,
			src: e.image?.imageThumb,
			alt: e.image.alt
		}), /* @__PURE__ */ (0, z.jsxs)("div", {
			className: Jw.text,
			children: [
				/* @__PURE__ */ (0, z.jsx)($D, { ...e }),
				/* @__PURE__ */ (0, z.jsx)(QD, { ...e }),
				/* @__PURE__ */ (0, z.jsx)(P, {
					className: Jw.description,
					children: e?.description
				})
			]
		})] })
	}, e.link));
	return /* @__PURE__ */ (0, z.jsx)(z.Fragment, { children: r });
}
//#endregion
//#region src/crypto/SasEmoji/SasEmojiTranslate.ts
var oO = new Map((/* @__PURE__ */ JSON.parse("[{\"number\":0,\"emoji\":\"🐶\",\"description\":\"Dog\",\"unicode\":\"U+1F436\",\"translated_descriptions\":{\"ar\":\"كلب\",\"bg\":\"Куче\",\"ca\":\"Gos\",\"cs\":\"Pes\",\"de\":\"Hund\",\"eo\":\"Hundo\",\"es\":\"Perro\",\"et\":\"Koer\",\"fa\":\"سگ\",\"fi\":\"Koira\",\"fr\":\"Chien\",\"hr\":\"pas\",\"hu\":\"Kutya\",\"id\":\"Anjing\",\"it\":\"Cane\",\"ja\":\"犬\",\"nb_NO\":\"Hund\",\"nl\":\"Hond\",\"pt\":\"Cão\",\"pt_BR\":\"Cachorro\",\"ru\":\"Собака\",\"si\":\"බල්ලා\",\"sk\":\"Pes\",\"sq\":\"Qen\",\"sr\":\"пас\",\"sv\":\"Hund\",\"szl\":null,\"tzm\":\"Aydi\",\"uk\":\"Пес\",\"vi\":\"Chó\",\"zh_Hans\":\"狗\",\"zh_Hant\":\"狗\"}},{\"number\":1,\"emoji\":\"🐱\",\"description\":\"Cat\",\"unicode\":\"U+1F431\",\"translated_descriptions\":{\"ar\":\"هِرَّة\",\"bg\":\"Котка\",\"ca\":\"Gat\",\"cs\":\"Kočka\",\"de\":\"Katze\",\"eo\":\"Kato\",\"es\":\"Gato\",\"et\":\"Kass\",\"fa\":\"گربه\",\"fi\":\"Kissa\",\"fr\":\"Chat\",\"hr\":\"mačka\",\"hu\":\"Macska\",\"id\":\"Kucing\",\"it\":\"Gatto\",\"ja\":\"猫\",\"nb_NO\":\"Katt\",\"nl\":\"Kat\",\"pt\":\"Gato\",\"pt_BR\":\"Gato\",\"ru\":\"Кошка\",\"si\":\"පූසා\",\"sk\":\"Mačka\",\"sq\":\"Mace\",\"sr\":\"мачка\",\"sv\":\"Katt\",\"szl\":null,\"tzm\":\"Amuc\",\"uk\":\"Кіт\",\"vi\":\"Mèo\",\"zh_Hans\":\"猫\",\"zh_Hant\":\"貓\"}},{\"number\":2,\"emoji\":\"🦁\",\"description\":\"Lion\",\"unicode\":\"U+1F981\",\"translated_descriptions\":{\"ar\":\"أَسَد\",\"bg\":\"Лъв\",\"ca\":\"Lleó\",\"cs\":\"Lev\",\"de\":\"Löwe\",\"eo\":\"Leono\",\"es\":\"León\",\"et\":\"Lõvi\",\"fa\":\"شیر\",\"fi\":\"Leijona\",\"fr\":\"Lion\",\"hr\":\"lav\",\"hu\":\"Oroszlán\",\"id\":\"Singa\",\"it\":\"Leone\",\"ja\":\"ライオン\",\"nb_NO\":\"Løve\",\"nl\":\"Leeuw\",\"pt\":\"Leão\",\"pt_BR\":\"Leão\",\"ru\":\"Лев\",\"si\":\"සිංහයා\",\"sk\":\"Lev\",\"sq\":\"Luan\",\"sr\":\"лав\",\"sv\":\"Lejon\",\"szl\":null,\"tzm\":\"Izem\",\"uk\":\"Лев\",\"vi\":\"Sư tử\",\"zh_Hans\":\"狮子\",\"zh_Hant\":\"獅子\"}},{\"number\":3,\"emoji\":\"🐎\",\"description\":\"Horse\",\"unicode\":\"U+1F40E\",\"translated_descriptions\":{\"ar\":\"حِصَان\",\"bg\":\"Кон\",\"ca\":\"Cavall\",\"cs\":\"Kůň\",\"de\":\"Pferd\",\"eo\":\"Ĉevalo\",\"es\":\"Caballo\",\"et\":\"Hobune\",\"fa\":\"اسب\",\"fi\":\"Hevonen\",\"fr\":\"Cheval\",\"hr\":\"konj\",\"hu\":\"Ló\",\"id\":\"Kuda\",\"it\":\"Cavallo\",\"ja\":\"馬\",\"nb_NO\":\"Hest\",\"nl\":\"Paard\",\"pt\":\"Cavalo\",\"pt_BR\":\"Cavalo\",\"ru\":\"Лошадь\",\"si\":\"අශ්වයා\",\"sk\":\"Kôň\",\"sq\":\"Kalë\",\"sr\":\"коњ\",\"sv\":\"Häst\",\"szl\":null,\"tzm\":\"Ayyis\",\"uk\":\"Кінь\",\"vi\":\"Ngựa\",\"zh_Hans\":\"马\",\"zh_Hant\":\"馬\"}},{\"number\":4,\"emoji\":\"🦄\",\"description\":\"Unicorn\",\"unicode\":\"U+1F984\",\"translated_descriptions\":{\"ar\":\"حصان وحيد القرن\",\"bg\":\"Еднорог\",\"ca\":\"Unicorn\",\"cs\":\"Jednorožec\",\"de\":\"Einhorn\",\"eo\":\"Unukorno\",\"es\":\"Unicornio\",\"et\":\"Ükssarvik\",\"fa\":\"تک شاخ\",\"fi\":\"Yksisarvinen\",\"fr\":\"Licorne\",\"hr\":\"jednorog\",\"hu\":\"Egyszarvú\",\"id\":\"Unicorn\",\"it\":\"Unicorno\",\"ja\":\"ユニコーン\",\"nb_NO\":\"Enhjørning\",\"nl\":\"Eenhoorn\",\"pt\":\"Unicórnio\",\"pt_BR\":\"Unicórnio\",\"ru\":\"Единорог\",\"si\":null,\"sk\":\"Jednorožec\",\"sq\":\"Njëbrirësh\",\"sr\":\"једнорог\",\"sv\":\"Enhörning\",\"szl\":null,\"tzm\":null,\"uk\":\"Єдиноріг\",\"vi\":\"Kỳ lân\",\"zh_Hans\":\"独角兽\",\"zh_Hant\":\"獨角獸\"}},{\"number\":5,\"emoji\":\"🐷\",\"description\":\"Pig\",\"unicode\":\"U+1F437\",\"translated_descriptions\":{\"ar\":\"خِنزِير\",\"bg\":\"Прасе\",\"ca\":\"Porc\",\"cs\":\"Prase\",\"de\":\"Schwein\",\"eo\":\"Porko\",\"es\":\"Cerdo\",\"et\":\"Siga\",\"fa\":\"خوک\",\"fi\":\"Sika\",\"fr\":\"Cochon\",\"hr\":\"svinja\",\"hu\":\"Malac\",\"id\":\"Babi\",\"it\":\"Maiale\",\"ja\":\"ブタ\",\"nb_NO\":\"Gris\",\"nl\":\"Varken\",\"pt\":\"Porco\",\"pt_BR\":\"Porco\",\"ru\":\"Свинья\",\"si\":null,\"sk\":\"Prasa\",\"sq\":\"Derr\",\"sr\":\"прасе\",\"sv\":\"Gris\",\"szl\":null,\"tzm\":\"Ilef\",\"uk\":\"Свиня\",\"vi\":\"Heo\",\"zh_Hans\":\"猪\",\"zh_Hant\":\"豬\"}},{\"number\":6,\"emoji\":\"🐘\",\"description\":\"Elephant\",\"unicode\":\"U+1F418\",\"translated_descriptions\":{\"ar\":\"فِيل\",\"bg\":\"Слон\",\"ca\":\"Elefant\",\"cs\":\"Slon\",\"de\":\"Elefant\",\"eo\":\"Elefanto\",\"es\":\"Elefante\",\"et\":\"Elevant\",\"fa\":\"فیل\",\"fi\":\"Norsu\",\"fr\":\"Éléphant\",\"hr\":\"slon\",\"hu\":\"Elefánt\",\"id\":\"Gajah\",\"it\":\"Elefante\",\"ja\":\"ゾウ\",\"nb_NO\":\"Elefant\",\"nl\":\"Olifant\",\"pt\":\"Elefante\",\"pt_BR\":\"Elefante\",\"ru\":\"Слон\",\"si\":null,\"sk\":\"Slon\",\"sq\":\"Elefant\",\"sr\":\"слон\",\"sv\":\"Elefant\",\"szl\":null,\"tzm\":\"Ilu\",\"uk\":\"Слон\",\"vi\":\"Voi\",\"zh_Hans\":\"大象\",\"zh_Hant\":\"大象\"}},{\"number\":7,\"emoji\":\"🐰\",\"description\":\"Rabbit\",\"unicode\":\"U+1F430\",\"translated_descriptions\":{\"ar\":\"أَرنَب\",\"bg\":\"Заек\",\"ca\":\"Conill\",\"cs\":\"Králík\",\"de\":\"Hase\",\"eo\":\"Kuniklo\",\"es\":\"Conejo\",\"et\":\"Jänes\",\"fa\":\"خرگوش\",\"fi\":\"Kani\",\"fr\":\"Lapin\",\"hr\":\"zec\",\"hu\":\"Nyúl\",\"id\":\"Kelinci\",\"it\":\"Coniglio\",\"ja\":\"うさぎ\",\"nb_NO\":\"Kanin\",\"nl\":\"Konijn\",\"pt\":\"Coelho\",\"pt_BR\":\"Coelho\",\"ru\":\"Кролик\",\"si\":null,\"sk\":\"Zajac\",\"sq\":\"Lepur\",\"sr\":\"зец\",\"sv\":\"Kanin\",\"szl\":null,\"tzm\":\"Agnin\",\"uk\":\"Кріль\",\"vi\":\"Thỏ\",\"zh_Hans\":\"兔子\",\"zh_Hant\":\"兔子\"}},{\"number\":8,\"emoji\":\"🐼\",\"description\":\"Panda\",\"unicode\":\"U+1F43C\",\"translated_descriptions\":{\"ar\":\"باندَا\",\"bg\":\"Панда\",\"ca\":\"Panda\",\"cs\":\"Panda\",\"de\":\"Panda\",\"eo\":\"Pando\",\"es\":\"Panda\",\"et\":\"Panda\",\"fa\":\"پاندا\",\"fi\":\"Panda\",\"fr\":\"Panda\",\"hr\":\"panda\",\"hu\":\"Panda\",\"id\":\"Panda\",\"it\":\"Panda\",\"ja\":\"パンダ\",\"nb_NO\":\"Panda\",\"nl\":\"Panda\",\"pt\":\"Panda\",\"pt_BR\":\"Panda\",\"ru\":\"Панда\",\"si\":null,\"sk\":\"Panda\",\"sq\":\"Panda\",\"sr\":\"панда\",\"sv\":\"Panda\",\"szl\":null,\"tzm\":null,\"uk\":\"Панда\",\"vi\":\"Gấu trúc\",\"zh_Hans\":\"熊猫\",\"zh_Hant\":\"熊貓\"}},{\"number\":9,\"emoji\":\"🐓\",\"description\":\"Rooster\",\"unicode\":\"U+1F413\",\"translated_descriptions\":{\"ar\":\"دِيك\",\"bg\":\"Петел\",\"ca\":\"Gall\",\"cs\":\"Kohout\",\"de\":\"Hahn\",\"eo\":\"Virkoko\",\"es\":\"Gallo\",\"et\":\"Kukk\",\"fa\":\"خروس\",\"fi\":\"Kukko\",\"fr\":\"Coq\",\"hr\":\"kokot\",\"hu\":\"Kakas\",\"id\":\"Ayam\",\"it\":\"Gallo\",\"ja\":\"ニワトリ\",\"nb_NO\":\"Hane\",\"nl\":\"Haan\",\"pt\":\"Galo\",\"pt_BR\":\"Galo\",\"ru\":\"Петух\",\"si\":null,\"sk\":\"Kohút\",\"sq\":\"Këndes\",\"sr\":\"петао\",\"sv\":\"Tupp\",\"szl\":null,\"tzm\":\"Ayaẓiḍ\",\"uk\":\"Когут\",\"vi\":\"Gà trống\",\"zh_Hans\":\"公鸡\",\"zh_Hant\":\"公雞\"}},{\"number\":10,\"emoji\":\"🐧\",\"description\":\"Penguin\",\"unicode\":\"U+1F427\",\"translated_descriptions\":{\"ar\":\"بطريق\",\"bg\":\"Пингвин\",\"ca\":\"Pingüí\",\"cs\":\"Tučňák\",\"de\":\"Pinguin\",\"eo\":\"Pingveno\",\"es\":\"Pingüino\",\"et\":\"Pingviin\",\"fa\":\"پنگوئن\",\"fi\":\"Pingviini\",\"fr\":\"Manchot\",\"hr\":\"pingvin\",\"hu\":\"Pingvin\",\"id\":\"Penguin\",\"it\":\"Pinguino\",\"ja\":\"ペンギン\",\"nb_NO\":\"Pingvin\",\"nl\":\"Pinguïn\",\"pt\":\"Pinguim\",\"pt_BR\":\"Pinguim\",\"ru\":\"Пингвин\",\"si\":null,\"sk\":\"Tučniak\",\"sq\":\"Pinguin\",\"sr\":\"пингвин\",\"sv\":\"Pingvin\",\"szl\":null,\"tzm\":null,\"uk\":\"Пінгвін\",\"vi\":\"Chim cánh cụt\",\"zh_Hans\":\"企鹅\",\"zh_Hant\":\"企鵝\"}},{\"number\":11,\"emoji\":\"🐢\",\"description\":\"Turtle\",\"unicode\":\"U+1F422\",\"translated_descriptions\":{\"ar\":\"سُلحفاة\",\"bg\":\"Костенурка\",\"ca\":\"Tortuga\",\"cs\":\"Želva\",\"de\":\"Schildkröte\",\"eo\":\"Testudo\",\"es\":\"Tortuga\",\"et\":\"Kilpkonn\",\"fa\":\"لاک‌پشت\",\"fi\":\"Kilpikonna\",\"fr\":\"Tortue\",\"hr\":\"kornjača\",\"hu\":\"Teknős\",\"id\":\"Kura-Kura\",\"it\":\"Tartaruga\",\"ja\":\"亀\",\"nb_NO\":\"Skilpadde\",\"nl\":\"Schildpad\",\"pt\":\"Tartaruga\",\"pt_BR\":\"Tartaruga\",\"ru\":\"Черепаха\",\"si\":null,\"sk\":\"Korytnačka\",\"sq\":\"Breshkë\",\"sr\":\"корњача\",\"sv\":\"Sköldpadda\",\"szl\":null,\"tzm\":\"Ifker\",\"uk\":\"Черепаха\",\"vi\":\"Rùa\",\"zh_Hans\":\"乌龟\",\"zh_Hant\":\"烏龜\"}},{\"number\":12,\"emoji\":\"🐟\",\"description\":\"Fish\",\"unicode\":\"U+1F41F\",\"translated_descriptions\":{\"ar\":\"سَمَكة\",\"bg\":\"Риба\",\"ca\":\"Peix\",\"cs\":\"Ryba\",\"de\":\"Fisch\",\"eo\":\"Fiŝo\",\"es\":\"Pez\",\"et\":\"Kala\",\"fa\":\"ماهی\",\"fi\":\"Kala\",\"fr\":\"Poisson\",\"hr\":\"riba\",\"hu\":\"Hal\",\"id\":\"Ikan\",\"it\":\"Pesce\",\"ja\":\"魚\",\"nb_NO\":\"Fisk\",\"nl\":\"Vis\",\"pt\":\"Peixe\",\"pt_BR\":\"Peixe\",\"ru\":\"Рыба\",\"si\":null,\"sk\":\"Ryba\",\"sq\":\"Peshk\",\"sr\":\"риба\",\"sv\":\"Fisk\",\"szl\":null,\"tzm\":\"Aselm\",\"uk\":\"Риба\",\"vi\":\"Cá\",\"zh_Hans\":\"鱼\",\"zh_Hant\":\"魚\"}},{\"number\":13,\"emoji\":\"🐙\",\"description\":\"Octopus\",\"unicode\":\"U+1F419\",\"translated_descriptions\":{\"ar\":\"أُخطُبُوط\",\"bg\":\"Октопод\",\"ca\":\"Pop\",\"cs\":\"Chobotnice\",\"de\":\"Oktopus\",\"eo\":\"Polpo\",\"es\":\"Pulpo\",\"et\":\"Kaheksajalg\",\"fa\":\"اختاپوس\",\"fi\":\"Tursas\",\"fr\":\"Poulpe\",\"hr\":\"hobotnica\",\"hu\":\"Polip\",\"id\":\"Gurita\",\"it\":\"Polpo\",\"ja\":\"たこ\",\"nb_NO\":\"Blekksprut\",\"nl\":\"Octopus\",\"pt\":\"Polvo\",\"pt_BR\":\"Polvo\",\"ru\":\"Осьминог\",\"si\":null,\"sk\":\"Chobotnica\",\"sq\":\"Oktapod\",\"sr\":\"октопод\",\"sv\":\"Bläckfisk\",\"szl\":null,\"tzm\":null,\"uk\":\"Восьминіг\",\"vi\":\"Bạch tuộc\",\"zh_Hans\":\"章鱼\",\"zh_Hant\":\"章魚\"}},{\"number\":14,\"emoji\":\"🦋\",\"description\":\"Butterfly\",\"unicode\":\"U+1F98B\",\"translated_descriptions\":{\"ar\":\"فَرَاشَة\",\"bg\":\"Пеперуда\",\"ca\":\"Papallona\",\"cs\":\"Motýl\",\"de\":\"Schmetterling\",\"eo\":\"Papilio\",\"es\":\"Mariposa\",\"et\":\"Liblikas\",\"fa\":\"پروانه\",\"fi\":\"Perhonen\",\"fr\":\"Papillon\",\"hr\":\"leptir\",\"hu\":\"Pillangó\",\"id\":\"Kupu-Kupu\",\"it\":\"Farfalla\",\"ja\":\"ちょうちょ\",\"nb_NO\":\"Sommerfugl\",\"nl\":\"Vlinder\",\"pt\":\"Borboleta\",\"pt_BR\":\"Borboleta\",\"ru\":\"Бабочка\",\"si\":null,\"sk\":\"Motýľ\",\"sq\":\"Flutur\",\"sr\":\"лептир\",\"sv\":\"Fjäril\",\"szl\":null,\"tzm\":null,\"uk\":\"Метелик\",\"vi\":\"Bướm\",\"zh_Hans\":\"蝴蝶\",\"zh_Hant\":\"蝴蝶\"}},{\"number\":15,\"emoji\":\"🌷\",\"description\":\"Flower\",\"unicode\":\"U+1F337\",\"translated_descriptions\":{\"ar\":\"زَهرَة\",\"bg\":\"Цвете\",\"ca\":\"Flor\",\"cs\":\"Květina\",\"de\":\"Blume\",\"eo\":\"Floro\",\"es\":\"Flor\",\"et\":\"Lill\",\"fa\":\"گل\",\"fi\":\"Kukka\",\"fr\":\"Fleur\",\"hr\":\"svijet\",\"hu\":\"Virág\",\"id\":\"Bunga\",\"it\":\"Fiore\",\"ja\":\"花\",\"nb_NO\":\"Blomst\",\"nl\":\"Bloem\",\"pt\":\"Flor\",\"pt_BR\":\"Flor\",\"ru\":\"Цветок\",\"si\":null,\"sk\":\"Kvet\",\"sq\":\"Lule\",\"sr\":\"цвет\",\"sv\":\"Blomma\",\"szl\":null,\"tzm\":null,\"uk\":\"Квітка\",\"vi\":\"Hoa\",\"zh_Hans\":\"花\",\"zh_Hant\":\"花\"}},{\"number\":16,\"emoji\":\"🌳\",\"description\":\"Tree\",\"unicode\":\"U+1F333\",\"translated_descriptions\":{\"ar\":\"شَجَرَة\",\"bg\":\"Дърво\",\"ca\":\"Arbre\",\"cs\":\"Strom\",\"de\":\"Baum\",\"eo\":\"Arbo\",\"es\":\"Árbol\",\"et\":\"Puu\",\"fa\":\"درخت\",\"fi\":\"Puu\",\"fr\":\"Arbre\",\"hr\":\"drvo\",\"hu\":\"Fa\",\"id\":\"Pohon\",\"it\":\"Albero\",\"ja\":\"木\",\"nb_NO\":\"Tre\",\"nl\":\"Boom\",\"pt\":\"Árvore\",\"pt_BR\":\"Árvore\",\"ru\":\"Дерево\",\"si\":null,\"sk\":\"Strom\",\"sq\":\"Pemë\",\"sr\":\"дрво\",\"sv\":\"Träd\",\"szl\":null,\"tzm\":\"Aseklu\",\"uk\":\"Дерево\",\"vi\":\"Cây\",\"zh_Hans\":\"树\",\"zh_Hant\":\"樹\"}},{\"number\":17,\"emoji\":\"🌵\",\"description\":\"Cactus\",\"unicode\":\"U+1F335\",\"translated_descriptions\":{\"ar\":\"صبار\",\"bg\":\"Кактус\",\"ca\":\"Cactus\",\"cs\":\"Kaktus\",\"de\":\"Kaktus\",\"eo\":\"Kakto\",\"es\":\"Cactus\",\"et\":\"Kaktus\",\"fa\":\"کاکتوس\",\"fi\":\"Kaktus\",\"fr\":\"Cactus\",\"hr\":\"kaktus\",\"hu\":\"Kaktusz\",\"id\":\"Kaktus\",\"it\":\"Cactus\",\"ja\":\"サボテン\",\"nb_NO\":\"Kaktus\",\"nl\":\"Cactus\",\"pt\":\"Cato\",\"pt_BR\":\"Cacto\",\"ru\":\"Кактус\",\"si\":null,\"sk\":\"Kaktus\",\"sq\":\"Kaktus\",\"sr\":\"кактус\",\"sv\":\"Kaktus\",\"szl\":null,\"tzm\":null,\"uk\":\"Кактус\",\"vi\":\"Xương rồng\",\"zh_Hans\":\"仙人掌\",\"zh_Hant\":\"仙人掌\"}},{\"number\":18,\"emoji\":\"🍄\",\"description\":\"Mushroom\",\"unicode\":\"U+1F344\",\"translated_descriptions\":{\"ar\":\"فُطر\",\"bg\":\"Гъба\",\"ca\":\"Bolet\",\"cs\":\"Houba\",\"de\":\"Pilz\",\"eo\":\"Fungo\",\"es\":\"Seta\",\"et\":\"Seen\",\"fa\":\"قارچ\",\"fi\":\"Sieni\",\"fr\":\"Champignon\",\"hr\":\"gljiva\",\"hu\":\"Gomba\",\"id\":\"Jamur\",\"it\":\"Fungo\",\"ja\":\"きのこ\",\"nb_NO\":\"Sopp\",\"nl\":\"Paddenstoel\",\"pt\":\"Cogumelo\",\"pt_BR\":\"Cogumelo\",\"ru\":\"Гриб\",\"si\":null,\"sk\":\"Huba\",\"sq\":\"Kërpudhë\",\"sr\":\"печурка\",\"sv\":\"Svamp\",\"szl\":null,\"tzm\":\"Agursel\",\"uk\":\"Гриб\",\"vi\":\"Nấm\",\"zh_Hans\":\"蘑菇\",\"zh_Hant\":\"蘑菇\"}},{\"number\":19,\"emoji\":\"🌏\",\"description\":\"Globe\",\"unicode\":\"U+1F30F\",\"translated_descriptions\":{\"ar\":\"كُرَةٌ أرضِيَّة\",\"bg\":\"Глобус\",\"ca\":\"Globus terraqüi\",\"cs\":\"Zeměkoule\",\"de\":\"Globus\",\"eo\":\"Globo\",\"es\":\"Globo\",\"et\":\"Maakera\",\"fa\":\"زمین\",\"fi\":\"Maapallo\",\"fr\":\"Globe\",\"hr\":\"Globus\",\"hu\":\"Földgömb\",\"id\":\"Bola Dunia\",\"it\":\"Globo\",\"ja\":\"地球\",\"nb_NO\":\"Globus\",\"nl\":\"Wereldbol\",\"pt\":\"Globo\",\"pt_BR\":\"Globo\",\"ru\":\"Глобус\",\"si\":null,\"sk\":\"Zemeguľa\",\"sq\":\"Rruzull\",\"sr\":\"глобус\",\"sv\":\"Jordklot\",\"szl\":null,\"tzm\":null,\"uk\":\"Глобус\",\"vi\":\"Địa cầu\",\"zh_Hans\":\"地球\",\"zh_Hant\":\"地球\"}},{\"number\":20,\"emoji\":\"🌙\",\"description\":\"Moon\",\"unicode\":\"U+1F319\",\"translated_descriptions\":{\"ar\":\"قَمَر\",\"bg\":\"Луна\",\"ca\":\"Lluna\",\"cs\":\"Měsíc\",\"de\":\"Mond\",\"eo\":\"Luno\",\"es\":\"Luna\",\"et\":\"Kuu\",\"fa\":\"ماه\",\"fi\":\"Kuu\",\"fr\":\"Lune\",\"hr\":\"mjesec\",\"hu\":\"Hold\",\"id\":\"Bulan\",\"it\":\"Luna\",\"ja\":\"月\",\"nb_NO\":\"Måne\",\"nl\":\"Maan\",\"pt\":\"Lua\",\"pt_BR\":\"Lua\",\"ru\":\"Луна\",\"si\":null,\"sk\":\"Mesiac\",\"sq\":\"Hënë\",\"sr\":\"месец\",\"sv\":\"Måne\",\"szl\":null,\"tzm\":\"Ayyur\",\"uk\":\"Місяць\",\"vi\":\"Mặt trăng\",\"zh_Hans\":\"月亮\",\"zh_Hant\":\"月亮\"}},{\"number\":21,\"emoji\":\"☁️\",\"description\":\"Cloud\",\"unicode\":\"U+2601U+FE0F\",\"translated_descriptions\":{\"ar\":\"سَحابَة\",\"bg\":\"Облак\",\"ca\":\"Núvol\",\"cs\":\"Mrak\",\"de\":\"Wolke\",\"eo\":\"Nubo\",\"es\":\"Nube\",\"et\":\"Pilv\",\"fa\":\"ابر\",\"fi\":\"Pilvi\",\"fr\":\"Nuage\",\"hr\":\"oblak\",\"hu\":\"Felhő\",\"id\":\"Awan\",\"it\":\"Nuvola\",\"ja\":\"雲\",\"nb_NO\":\"Sky\",\"nl\":\"Wolk\",\"pt\":\"Nuvem\",\"pt_BR\":\"Nuvem\",\"ru\":\"Облако\",\"si\":null,\"sk\":\"Oblak\",\"sq\":\"Re\",\"sr\":\"облак\",\"sv\":\"Moln\",\"szl\":null,\"tzm\":null,\"uk\":\"Хмара\",\"vi\":\"Mây\",\"zh_Hans\":\"云\",\"zh_Hant\":\"雲朵\"}},{\"number\":22,\"emoji\":\"🔥\",\"description\":\"Fire\",\"unicode\":\"U+1F525\",\"translated_descriptions\":{\"ar\":\"نار\",\"bg\":\"Огън\",\"ca\":\"Foc\",\"cs\":\"Oheň\",\"de\":\"Feuer\",\"eo\":\"Fajro\",\"es\":\"Fuego\",\"et\":\"Tuli\",\"fa\":\"آتش\",\"fi\":\"Tuli\",\"fr\":\"Feu\",\"hr\":\"vatra\",\"hu\":\"Tűz\",\"id\":\"Api\",\"it\":\"Fuoco\",\"ja\":\"炎\",\"nb_NO\":\"Flamme\",\"nl\":\"Vuur\",\"pt\":\"Fogo\",\"pt_BR\":\"Fogo\",\"ru\":\"Огонь\",\"si\":null,\"sk\":\"Oheň\",\"sq\":\"Zjarr\",\"sr\":\"ватра\",\"sv\":\"Eld\",\"szl\":null,\"tzm\":\"Timessi\",\"uk\":\"Вогонь\",\"vi\":\"Lửa\",\"zh_Hans\":\"火\",\"zh_Hant\":\"火\"}},{\"number\":23,\"emoji\":\"🍌\",\"description\":\"Banana\",\"unicode\":\"U+1F34C\",\"translated_descriptions\":{\"ar\":\"مَوزَة\",\"bg\":\"Банан\",\"ca\":\"Plàtan\",\"cs\":\"Banán\",\"de\":\"Banane\",\"eo\":\"Banano\",\"es\":\"Plátano\",\"et\":\"Banaan\",\"fa\":\"موز\",\"fi\":\"Banaani\",\"fr\":\"Banane\",\"hr\":\"banana\",\"hu\":\"Banán\",\"id\":\"Pisang\",\"it\":\"Banana\",\"ja\":\"バナナ\",\"nb_NO\":\"Banan\",\"nl\":\"Banaan\",\"pt\":\"Banana\",\"pt_BR\":\"Banana\",\"ru\":\"Банан\",\"si\":null,\"sk\":\"Banán\",\"sq\":\"Banane\",\"sr\":\"банана\",\"sv\":\"Banan\",\"szl\":null,\"tzm\":\"Tabanant\",\"uk\":\"Банан\",\"vi\":\"Chuối\",\"zh_Hans\":\"香蕉\",\"zh_Hant\":\"香蕉\"}},{\"number\":24,\"emoji\":\"🍎\",\"description\":\"Apple\",\"unicode\":\"U+1F34E\",\"translated_descriptions\":{\"ar\":\"تُفَّاحَة\",\"bg\":\"Ябълка\",\"ca\":\"Poma\",\"cs\":\"Jablko\",\"de\":\"Apfel\",\"eo\":\"Pomo\",\"es\":\"Manzana\",\"et\":\"Õun\",\"fa\":\"سیب\",\"fi\":\"Omena\",\"fr\":\"Pomme\",\"hr\":\"jabuka\",\"hu\":\"Alma\",\"id\":\"Apel\",\"it\":\"Mela\",\"ja\":\"リンゴ\",\"nb_NO\":\"Eple\",\"nl\":\"Appel\",\"pt\":\"Maçã\",\"pt_BR\":\"Maçã\",\"ru\":\"Яблоко\",\"si\":null,\"sk\":\"Jablko\",\"sq\":\"Mollë\",\"sr\":\"јабука\",\"sv\":\"Äpple\",\"szl\":null,\"tzm\":\"Tadeffuyt\",\"uk\":\"Яблуко\",\"vi\":\"Táo\",\"zh_Hans\":\"苹果\",\"zh_Hant\":\"蘋果\"}},{\"number\":25,\"emoji\":\"🍓\",\"description\":\"Strawberry\",\"unicode\":\"U+1F353\",\"translated_descriptions\":{\"ar\":\"فَراوِلَة\",\"bg\":\"Ягода\",\"ca\":\"Maduixa\",\"cs\":\"Jahoda\",\"de\":\"Erdbeere\",\"eo\":\"Frago\",\"es\":\"Fresa\",\"et\":\"Maasikas\",\"fa\":\"توت فرنگی\",\"fi\":\"Mansikka\",\"fr\":\"Fraise\",\"hr\":\"jagoda\",\"hu\":\"Eper\",\"id\":\"Stroberi\",\"it\":\"Fragola\",\"ja\":\"いちご\",\"nb_NO\":\"Jordbær\",\"nl\":\"Aardbei\",\"pt\":\"Morango\",\"pt_BR\":\"Morango\",\"ru\":\"Клубника\",\"si\":null,\"sk\":\"Jahoda\",\"sq\":\"Luleshtrydhe\",\"sr\":\"јагода\",\"sv\":\"Jordgubbe\",\"szl\":null,\"tzm\":null,\"uk\":\"Полуниця\",\"vi\":\"Dâu tây\",\"zh_Hans\":\"草莓\",\"zh_Hant\":\"草莓\"}},{\"number\":26,\"emoji\":\"🌽\",\"description\":\"Corn\",\"unicode\":\"U+1F33D\",\"translated_descriptions\":{\"ar\":\"ذُرَة\",\"bg\":\"Царевица\",\"ca\":\"Blat de moro\",\"cs\":\"Kukuřice\",\"de\":\"Mais\",\"eo\":\"Maizo\",\"es\":\"Maíz\",\"et\":\"Mais\",\"fa\":\"ذرت\",\"fi\":\"Maissi\",\"fr\":\"Maïs\",\"hr\":\"kukuruza\",\"hu\":\"Kukorica\",\"id\":\"Jagung\",\"it\":\"Mais\",\"ja\":\"とうもろこし\",\"nb_NO\":\"Mais\",\"nl\":\"Maïs\",\"pt\":\"Milho\",\"pt_BR\":\"Milho\",\"ru\":\"Кукуруза\",\"si\":null,\"sk\":\"Kukurica\",\"sq\":\"Misër\",\"sr\":\"кукуруз\",\"sv\":\"Majs\",\"szl\":null,\"tzm\":null,\"uk\":\"Кукурудза\",\"vi\":\"Bắp\",\"zh_Hans\":\"玉米\",\"zh_Hant\":\"玉米\"}},{\"number\":27,\"emoji\":\"🍕\",\"description\":\"Pizza\",\"unicode\":\"U+1F355\",\"translated_descriptions\":{\"ar\":\"بِيتزا\",\"bg\":\"Пица\",\"ca\":\"Pizza\",\"cs\":\"Pizza\",\"de\":\"Pizza\",\"eo\":\"Pico\",\"es\":\"Pizza\",\"et\":\"Pitsa\",\"fa\":\"پیتزا\",\"fi\":\"Pizza\",\"fr\":\"Pizza\",\"hr\":\"pizza\",\"hu\":\"Pizza\",\"id\":\"Pizza\",\"it\":\"Pizza\",\"ja\":\"ピザ\",\"nb_NO\":\"Pizza\",\"nl\":\"Pizza\",\"pt\":\"Piza\",\"pt_BR\":\"Pizza\",\"ru\":\"Пицца\",\"si\":null,\"sk\":\"Pizza\",\"sq\":\"Picë\",\"sr\":\"пица\",\"sv\":\"Pizza\",\"szl\":null,\"tzm\":null,\"uk\":\"Піца\",\"vi\":\"Pizza\",\"zh_Hans\":\"披萨\",\"zh_Hant\":\"披薩\"}},{\"number\":28,\"emoji\":\"🎂\",\"description\":\"Cake\",\"unicode\":\"U+1F382\",\"translated_descriptions\":{\"ar\":\"كَعكَة\",\"bg\":\"Торта\",\"ca\":\"Pastís\",\"cs\":\"Dort\",\"de\":\"Kuchen\",\"eo\":\"Torto\",\"es\":\"Tarta\",\"et\":\"Kook\",\"fa\":\"کیک\",\"fi\":\"Kakku\",\"fr\":\"Gâteau\",\"hr\":\"torta\",\"hu\":\"Süti\",\"id\":\"Kue\",\"it\":\"Torta\",\"ja\":\"ケーキ\",\"nb_NO\":\"Kake\",\"nl\":\"Taart\",\"pt\":\"Bolo\",\"pt_BR\":\"Bolo\",\"ru\":\"Торт\",\"si\":null,\"sk\":\"Torta\",\"sq\":\"Tortë\",\"sr\":\"торта\",\"sv\":\"Tårta\",\"szl\":null,\"tzm\":null,\"uk\":\"Пиріг\",\"vi\":\"Bánh\",\"zh_Hans\":\"蛋糕\",\"zh_Hant\":\"蛋糕\"}},{\"number\":29,\"emoji\":\"❤️\",\"description\":\"Heart\",\"unicode\":\"U+2764U+FE0F\",\"translated_descriptions\":{\"ar\":\"قَلب\",\"bg\":\"Сърце\",\"ca\":\"Cor\",\"cs\":\"Srdce\",\"de\":\"Herz\",\"eo\":\"Koro\",\"es\":\"Corazón\",\"et\":\"Süda\",\"fa\":\"قلب\",\"fi\":\"Sydän\",\"fr\":\"Cœur\",\"hr\":\"srca\",\"hu\":\"Szív\",\"id\":\"Hati\",\"it\":\"Cuore\",\"ja\":\"ハート\",\"nb_NO\":\"Hjerte\",\"nl\":\"Hart\",\"pt\":\"Coração\",\"pt_BR\":\"Coração\",\"ru\":\"Сердце\",\"si\":null,\"sk\":\"Srdce\",\"sq\":\"Zemër\",\"sr\":\"срце\",\"sv\":\"Hjärta\",\"szl\":null,\"tzm\":\"Ul\",\"uk\":\"Серце\",\"vi\":\"Tim\",\"zh_Hans\":\"心\",\"zh_Hant\":\"愛心\"}},{\"number\":30,\"emoji\":\"😀\",\"description\":\"Smiley\",\"unicode\":\"U+1F600\",\"translated_descriptions\":{\"ar\":\"اِبتِسَامَة\",\"bg\":\"Усмивка\",\"ca\":\"Somrient\",\"cs\":\"Smajlík\",\"de\":\"Lächeln\",\"eo\":\"Rideto\",\"es\":\"Emoticono\",\"et\":\"Smaili\",\"fa\":\"خنده\",\"fi\":\"Hymynaama\",\"fr\":\"Sourire\",\"hr\":\"smajlića\",\"hu\":\"Mosoly\",\"id\":\"Senyuman\",\"it\":\"Faccina sorridente\",\"ja\":\"スマイル\",\"nb_NO\":\"Smilefjes\",\"nl\":\"Smiley\",\"pt\":\"Sorriso\",\"pt_BR\":\"Sorriso\",\"ru\":\"Улыбка\",\"si\":null,\"sk\":\"Smajlík\",\"sq\":\"Emotikon\",\"sr\":\"смајли\",\"sv\":\"Smiley\",\"szl\":null,\"tzm\":null,\"uk\":\"Посмішка\",\"vi\":\"Mặt cười\",\"zh_Hans\":\"笑脸\",\"zh_Hant\":\"笑臉\"}},{\"number\":31,\"emoji\":\"🤖\",\"description\":\"Robot\",\"unicode\":\"U+1F916\",\"translated_descriptions\":{\"ar\":\"رُوبُوت\",\"bg\":\"Робот\",\"ca\":\"Robot\",\"cs\":\"Robot\",\"de\":\"Roboter\",\"eo\":\"Roboto\",\"es\":\"Robot\",\"et\":\"Robot\",\"fa\":\"ربات\",\"fi\":\"Robotti\",\"fr\":\"Robot\",\"hr\":\"robot\",\"hu\":\"Robot\",\"id\":\"Robot\",\"it\":\"Robot\",\"ja\":\"ロボット\",\"nb_NO\":\"Robot\",\"nl\":\"Robot\",\"pt\":\"Robô\",\"pt_BR\":\"Robô\",\"ru\":\"Робот\",\"si\":null,\"sk\":\"Robot\",\"sq\":\"Robot\",\"sr\":\"робот\",\"sv\":\"Robot\",\"szl\":null,\"tzm\":\"Aṛubu\",\"uk\":\"Робот\",\"vi\":\"Rô-bô\",\"zh_Hans\":\"机器人\",\"zh_Hant\":\"機器人\"}},{\"number\":32,\"emoji\":\"🎩\",\"description\":\"Hat\",\"unicode\":\"U+1F3A9\",\"translated_descriptions\":{\"ar\":\"قُبَّعَة\",\"bg\":\"Шапка\",\"ca\":\"Barret\",\"cs\":\"Klobouk\",\"de\":\"Hut\",\"eo\":\"Ĉapelo\",\"es\":\"Sombrero\",\"et\":\"Kübar\",\"fa\":\"کلاه\",\"fi\":\"Hattu\",\"fr\":\"Chapeau\",\"hr\":\"kapa\",\"hu\":\"Kalap\",\"id\":\"Topi\",\"it\":\"Cappello\",\"ja\":\"帽子\",\"nb_NO\":\"Hatt\",\"nl\":\"Hoed\",\"pt\":\"Chapéu\",\"pt_BR\":\"Chapéu\",\"ru\":\"Шляпа\",\"si\":null,\"sk\":\"Klobúk\",\"sq\":\"Kapë\",\"sr\":\"шешир\",\"sv\":\"Hatt\",\"szl\":null,\"tzm\":\"Taraza\",\"uk\":\"Капелюх\",\"vi\":\"Mũ\",\"zh_Hans\":\"帽子\",\"zh_Hant\":\"帽子\"}},{\"number\":33,\"emoji\":\"👓\",\"description\":\"Glasses\",\"unicode\":\"U+1F453\",\"translated_descriptions\":{\"ar\":\"نَظَّارَة\",\"bg\":\"Очила\",\"ca\":\"Ulleres\",\"cs\":\"Brýle\",\"de\":\"Brille\",\"eo\":\"Okulvitroj\",\"es\":\"Gafas\",\"et\":\"Prillid\",\"fa\":\"عینک\",\"fi\":\"Silmälasit\",\"fr\":\"Lunettes\",\"hr\":\"naočale\",\"hu\":\"Szemüveg\",\"id\":\"Kacamata\",\"it\":\"Occhiali\",\"ja\":\"めがね\",\"nb_NO\":\"Briller\",\"nl\":\"Bril\",\"pt\":\"Óculos\",\"pt_BR\":\"Óculos\",\"ru\":\"Очки\",\"si\":null,\"sk\":\"Okuliare\",\"sq\":\"Syze\",\"sr\":\"наочаре\",\"sv\":\"Glasögon\",\"szl\":null,\"tzm\":null,\"uk\":\"Окуляри\",\"vi\":\"Kính mắt\",\"zh_Hans\":\"眼镜\",\"zh_Hant\":\"眼鏡\"}},{\"number\":34,\"emoji\":\"🔧\",\"description\":\"Spanner\",\"unicode\":\"U+1F527\",\"translated_descriptions\":{\"ar\":\"مِفتَاحُ رَبط\",\"bg\":\"Гаечен ключ\",\"ca\":\"Clau anglesa\",\"cs\":\"Klíč\",\"de\":\"Schraubenschlüssel\",\"eo\":\"Ŝraŭbŝlosilo\",\"es\":\"Llave inglesa\",\"et\":\"Mutrivõti\",\"fa\":\"آچار\",\"fi\":\"Kiintoavain\",\"fr\":\"Clé à molette\",\"hr\":\"ključ\",\"hu\":\"Csavarkulcs\",\"id\":\"Kunci Bengkel\",\"it\":\"Chiave inglese\",\"ja\":\"スパナ\",\"nb_NO\":\"Fastnøkkel\",\"nl\":\"Moersleutel\",\"pt\":\"Chave inglesa\",\"pt_BR\":\"Chave inglesa\",\"ru\":\"Ключ\",\"si\":null,\"sk\":\"Vidlicový kľúč\",\"sq\":\"Çelës\",\"sr\":\"кључ\",\"sv\":\"Skruvnyckel\",\"szl\":null,\"tzm\":null,\"uk\":\"Гайковий ключ\",\"vi\":\"Cờ-lê\",\"zh_Hans\":\"扳手\",\"zh_Hant\":\"扳手\"}},{\"number\":35,\"emoji\":\"🎅\",\"description\":\"Santa\",\"unicode\":\"U+1F385\",\"translated_descriptions\":{\"ar\":\"سانتا\",\"bg\":\"Дядо Коледа\",\"ca\":\"Pare Noél\",\"cs\":\"Mikuláš\",\"de\":\"Weihnachtsmann\",\"eo\":\"Kristnaska viro\",\"es\":\"Papá Noel\",\"et\":\"Jõuluvana\",\"fa\":\"بابا نوئل\",\"fi\":\"Joulupukki\",\"fr\":\"Père Noël\",\"hr\":\"deda Mraz\",\"hu\":\"Télapó\",\"id\":\"Santa\",\"it\":\"Babbo Natale\",\"ja\":\"サンタ\",\"nb_NO\":\"Julenisse\",\"nl\":\"Kerstman\",\"pt\":\"Pai Natal\",\"pt_BR\":\"Papai-noel\",\"ru\":\"Санта\",\"si\":null,\"sk\":\"Mikuláš\",\"sq\":\"Babagjyshi i Vitit të Ri\",\"sr\":\"деда Мраз\",\"sv\":\"Tomte\",\"szl\":null,\"tzm\":null,\"uk\":\"Санта Клаус\",\"vi\":\"ông già Nô-en\",\"zh_Hans\":\"圣诞老人\",\"zh_Hant\":\"聖誕老人\"}},{\"number\":36,\"emoji\":\"👍\",\"description\":\"Thumbs Up\",\"unicode\":\"U+1F44D\",\"translated_descriptions\":{\"ar\":\"رَفعُ إِبهَام\",\"bg\":\"Палец нагоре\",\"ca\":\"Polzes amunt\",\"cs\":\"Palec nahoru\",\"de\":\"Daumen Hoch\",\"eo\":\"Dikfingro supren\",\"es\":\"Pulgar arriba\",\"et\":\"Pöidlad püsti\",\"fa\":\"لایک\",\"fi\":\"Peukalo ylös\",\"fr\":\"Pouce en l’air\",\"hr\":\"palac gore\",\"hu\":\"Hüvelykujj fel\",\"id\":\"Jempol\",\"it\":\"Pollice alzato\",\"ja\":\"いいね\",\"nb_NO\":\"Tommel Opp\",\"nl\":\"Duim omhoog\",\"pt\":\"Polegar para cima\",\"pt_BR\":\"Joinha\",\"ru\":\"Большой палец вверх\",\"si\":null,\"sk\":\"Palec nahor\",\"sq\":null,\"sr\":\"палчић горе\",\"sv\":\"Tummen upp\",\"szl\":null,\"tzm\":null,\"uk\":\"Великий палець вгору\",\"vi\":\"Thích\",\"zh_Hans\":\"赞\",\"zh_Hant\":\"讚\"}},{\"number\":37,\"emoji\":\"☂️\",\"description\":\"Umbrella\",\"unicode\":\"U+2602U+FE0F\",\"translated_descriptions\":{\"ar\":\"مِظَلَّة\",\"bg\":\"Чадър\",\"ca\":\"Paraigües\",\"cs\":\"Deštník\",\"de\":\"Regenschirm\",\"eo\":\"Ombrelo\",\"es\":\"Paraguas\",\"et\":\"Vihmavari\",\"fa\":\"چتر\",\"fi\":\"Sateenvarjo\",\"fr\":\"Parapluie\",\"hr\":\"kišobran\",\"hu\":\"Esernyő\",\"id\":\"Payung\",\"it\":\"Ombrello\",\"ja\":\"傘\",\"nb_NO\":\"Paraply\",\"nl\":\"Paraplu\",\"pt\":\"Guarda-chuva\",\"pt_BR\":\"Guarda-chuva\",\"ru\":\"Зонт\",\"si\":null,\"sk\":\"Dáždnik\",\"sq\":\"Ombrellë\",\"sr\":\"кишобран\",\"sv\":\"Paraply\",\"szl\":null,\"tzm\":null,\"uk\":\"Парасолька\",\"vi\":\"Cái ô\",\"zh_Hans\":\"伞\",\"zh_Hant\":\"雨傘\"}},{\"number\":38,\"emoji\":\"⌛\",\"description\":\"Hourglass\",\"unicode\":\"U+231B\",\"translated_descriptions\":{\"ar\":\"سَاعَةٌ رَملِيَّة\",\"bg\":\"Пясъчен часовник\",\"ca\":\"Rellotge de sorra\",\"cs\":\"Přesýpací hodiny\",\"de\":\"Sanduhr\",\"eo\":\"Sablohorloĝo\",\"es\":\"Reloj de arena\",\"et\":\"Liivakell\",\"fa\":\"ساعت شنی\",\"fi\":\"Tiimalasi\",\"fr\":\"Sablier\",\"hr\":\"pješčani sat\",\"hu\":\"Homokóra\",\"id\":\"Jam Pasir\",\"it\":\"Clessidra\",\"ja\":\"砂時計\",\"nb_NO\":\"Timeglass\",\"nl\":\"Zandloper\",\"pt\":\"Ampulheta\",\"pt_BR\":\"Ampulheta\",\"ru\":\"Песочные часы\",\"si\":null,\"sk\":\"Presýpacie hodiny\",\"sq\":\"Klepsidër\",\"sr\":\"пешчаник\",\"sv\":\"Timglas\",\"szl\":null,\"tzm\":null,\"uk\":\"Пісковий годинник\",\"vi\":\"Đồng hồ cát\",\"zh_Hans\":\"沙漏\",\"zh_Hant\":\"沙漏\"}},{\"number\":39,\"emoji\":\"⏰\",\"description\":\"Clock\",\"unicode\":\"U+23F0\",\"translated_descriptions\":{\"ar\":\"سَاعَة\",\"bg\":\"Часовник\",\"ca\":\"Rellotge\",\"cs\":\"Hodiny\",\"de\":\"Uhr\",\"eo\":\"Horloĝo\",\"es\":\"Reloj\",\"et\":\"Kell\",\"fa\":\"ساعت\",\"fi\":\"Pöytäkello\",\"fr\":\"Réveil\",\"hr\":\"sat\",\"hu\":\"Óra\",\"id\":\"Jam\",\"it\":\"Orologio\",\"ja\":\"時計\",\"nb_NO\":\"Klokke\",\"nl\":\"Wekker\",\"pt\":\"Relógio\",\"pt_BR\":\"Relógio\",\"ru\":\"Часы\",\"si\":null,\"sk\":\"Budík\",\"sq\":\"Sahat\",\"sr\":\"сат\",\"sv\":\"Klocka\",\"szl\":null,\"tzm\":null,\"uk\":\"Годинник\",\"vi\":\"Đồng hồ\",\"zh_Hans\":\"时钟\",\"zh_Hant\":\"時鐘\"}},{\"number\":40,\"emoji\":\"🎁\",\"description\":\"Gift\",\"unicode\":\"U+1F381\",\"translated_descriptions\":{\"ar\":\"هَدِيَّة\",\"bg\":\"Подарък\",\"ca\":\"Regal\",\"cs\":\"Dárek\",\"de\":\"Geschenk\",\"eo\":\"Donaco\",\"es\":\"Regalo\",\"et\":\"Kingitus\",\"fa\":\"هدیه\",\"fi\":\"Lahja\",\"fr\":\"Cadeau\",\"hr\":\"poklon\",\"hu\":\"Ajándék\",\"id\":\"Kado\",\"it\":\"Regalo\",\"ja\":\"ギフト\",\"nb_NO\":\"Gave\",\"nl\":\"Geschenk\",\"pt\":\"Presente\",\"pt_BR\":\"Presente\",\"ru\":\"Подарок\",\"si\":null,\"sk\":\"Darček\",\"sq\":\"Dhuratë\",\"sr\":\"поклон\",\"sv\":\"Present\",\"szl\":null,\"tzm\":null,\"uk\":\"Подарунок\",\"vi\":\"Quà tặng\",\"zh_Hans\":\"礼物\",\"zh_Hant\":\"禮物\"}},{\"number\":41,\"emoji\":\"💡\",\"description\":\"Light Bulb\",\"unicode\":\"U+1F4A1\",\"translated_descriptions\":{\"ar\":\"مِصبَاح\",\"bg\":\"Лампа\",\"ca\":\"Bombeta\",\"cs\":\"Žárovka\",\"de\":\"Glühbirne\",\"eo\":\"Lampo\",\"es\":\"Bombilla\",\"et\":\"Lambipirn\",\"fa\":\"لامپ\",\"fi\":\"Hehkulamppu\",\"fr\":\"Ampoule\",\"hr\":\"žarulja\",\"hu\":\"Égő\",\"id\":\"Bohlam Lampu\",\"it\":\"Lampadina\",\"ja\":\"電球\",\"nb_NO\":\"Lyspære\",\"nl\":\"Gloeilamp\",\"pt\":\"Lâmpada\",\"pt_BR\":\"Lâmpada\",\"ru\":\"Лампочка\",\"si\":null,\"sk\":\"Žiarovka\",\"sq\":\"Llambë\",\"sr\":\"сијалица\",\"sv\":\"Lampa\",\"szl\":null,\"tzm\":null,\"uk\":\"Лампочка\",\"vi\":\"Bóng đèn tròn\",\"zh_Hans\":\"灯泡\",\"zh_Hant\":\"燈泡\"}},{\"number\":42,\"emoji\":\"📕\",\"description\":\"Book\",\"unicode\":\"U+1F4D5\",\"translated_descriptions\":{\"ar\":\"كِتَاب\",\"bg\":\"Книга\",\"ca\":\"Llibre\",\"cs\":\"Kniha\",\"de\":\"Buch\",\"eo\":\"Libro\",\"es\":\"Libro\",\"et\":\"Raamat\",\"fa\":\"کتاب\",\"fi\":\"Kirja\",\"fr\":\"Livre\",\"hr\":\"knjiga\",\"hu\":\"Könyv\",\"id\":\"Buku\",\"it\":\"Libro\",\"ja\":\"本\",\"nb_NO\":\"Bok\",\"nl\":\"Boek\",\"pt\":\"Livro\",\"pt_BR\":\"Livro\",\"ru\":\"Книга\",\"si\":null,\"sk\":\"Kniha\",\"sq\":\"Libër\",\"sr\":\"књига\",\"sv\":\"Bok\",\"szl\":null,\"tzm\":\"Adlis\",\"uk\":\"Книга\",\"vi\":\"Sách\",\"zh_Hans\":\"书\",\"zh_Hant\":\"書\"}},{\"number\":43,\"emoji\":\"✏️\",\"description\":\"Pencil\",\"unicode\":\"U+270FU+FE0F\",\"translated_descriptions\":{\"ar\":\"قَلَمُ رَصاص\",\"bg\":\"Молив\",\"ca\":\"Llapis\",\"cs\":\"Tužka\",\"de\":\"Bleistift\",\"eo\":\"Krajono\",\"es\":\"Lápiz\",\"et\":\"Pliiats\",\"fa\":\"مداد\",\"fi\":\"Lyijykynä\",\"fr\":\"Crayon\",\"hr\":\"olovka\",\"hu\":\"Ceruza\",\"id\":\"Pensil\",\"it\":\"Matita\",\"ja\":\"鉛筆\",\"nb_NO\":\"Blyant\",\"nl\":\"Potlood\",\"pt\":\"Lápis\",\"pt_BR\":\"Lápis\",\"ru\":\"Карандаш\",\"si\":null,\"sk\":\"Ceruzka\",\"sq\":\"Laps\",\"sr\":\"оловка\",\"sv\":\"Penna\",\"szl\":null,\"tzm\":null,\"uk\":\"Олівець\",\"vi\":\"Viết chì\",\"zh_Hans\":\"铅笔\",\"zh_Hant\":\"鉛筆\"}},{\"number\":44,\"emoji\":\"📎\",\"description\":\"Paperclip\",\"unicode\":\"U+1F4CE\",\"translated_descriptions\":{\"ar\":\"مِشبَكُ وَرَق\",\"bg\":\"Кламер\",\"ca\":\"Clip\",\"cs\":\"Sponka\",\"de\":\"Büroklammer\",\"eo\":\"Paperkuntenilo\",\"es\":\"Clip\",\"et\":\"Kirjaklamber\",\"fa\":\"گیره کاغذ\",\"fi\":\"Paperiliitin\",\"fr\":\"Trombone\",\"hr\":\"spajalica\",\"hu\":\"Gémkapocs\",\"id\":\"Klip Kertas\",\"it\":\"Graffetta\",\"ja\":\"クリップ\",\"nb_NO\":\"BInders\",\"nl\":\"Papierklemmetje\",\"pt\":\"Clipe\",\"pt_BR\":\"Clipe de papel\",\"ru\":\"Скрепка\",\"si\":null,\"sk\":\"Kancelárska sponka\",\"sq\":\"Kapëse\",\"sr\":\"спајалица\",\"sv\":\"Gem\",\"szl\":null,\"tzm\":null,\"uk\":\"Спиначка\",\"vi\":\"Kẹp giấy\",\"zh_Hans\":\"回形针\",\"zh_Hant\":\"迴紋針\"}},{\"number\":45,\"emoji\":\"✂️\",\"description\":\"Scissors\",\"unicode\":\"U+2702U+FE0F\",\"translated_descriptions\":{\"ar\":\"مِقَصّ\",\"bg\":\"Ножици\",\"ca\":\"Tisores\",\"cs\":\"Nůžky\",\"de\":\"Schere\",\"eo\":\"Tondilo\",\"es\":\"Tijeras\",\"et\":\"Käärid\",\"fa\":\"قیچی\",\"fi\":\"Sakset\",\"fr\":\"Ciseaux\",\"hr\":\"škare\",\"hu\":\"Olló\",\"id\":\"Gunting\",\"it\":\"Forbici\",\"ja\":\"はさみ\",\"nb_NO\":\"Saks\",\"nl\":\"Schaar\",\"pt\":\"Tesoura\",\"pt_BR\":\"Tesoura\",\"ru\":\"Ножницы\",\"si\":null,\"sk\":\"Nožnice\",\"sq\":\"Gërshërë\",\"sr\":\"маказе\",\"sv\":\"Sax\",\"szl\":null,\"tzm\":null,\"uk\":\"Ножиці\",\"vi\":\"Cái kéo\",\"zh_Hans\":\"剪刀\",\"zh_Hant\":\"剪刀\"}},{\"number\":46,\"emoji\":\"🔒\",\"description\":\"Lock\",\"unicode\":\"U+1F512\",\"translated_descriptions\":{\"ar\":\"قُفل\",\"bg\":\"Катинар\",\"ca\":\"Cadenat\",\"cs\":\"Zámek\",\"de\":\"Schloss\",\"eo\":\"Seruro\",\"es\":\"Candado\",\"et\":\"Lukk\",\"fa\":\"قفل\",\"fi\":\"Lukko\",\"fr\":\"Cadenas\",\"hr\":\"zaključati\",\"hu\":\"Lakat\",\"id\":\"Gembok\",\"it\":\"Lucchetto\",\"ja\":\"錠前\",\"nb_NO\":\"Lås\",\"nl\":\"Slot\",\"pt\":\"Cadeado\",\"pt_BR\":\"Cadeado\",\"ru\":\"Замок\",\"si\":null,\"sk\":\"Zámka\",\"sq\":\"Dry\",\"sr\":\"катанац\",\"sv\":\"Lås\",\"szl\":null,\"tzm\":null,\"uk\":\"Замок\",\"vi\":\"Ổ khóa\",\"zh_Hans\":\"锁\",\"zh_Hant\":\"鎖頭\"}},{\"number\":47,\"emoji\":\"🔑\",\"description\":\"Key\",\"unicode\":\"U+1F511\",\"translated_descriptions\":{\"ar\":\"مِفتَاح\",\"bg\":\"Ключ\",\"ca\":\"Clau\",\"cs\":\"Klíč ke dveřím\",\"de\":\"Schlüssel\",\"eo\":\"Ŝlosilo\",\"es\":\"Llave\",\"et\":\"Võti\",\"fa\":\"کلید\",\"fi\":\"Avain\",\"fr\":\"Clé\",\"hr\":\"ključ\",\"hu\":\"Kulcs\",\"id\":\"Kunci\",\"it\":\"Chiave\",\"ja\":\"鍵\",\"nb_NO\":\"Nøkkel\",\"nl\":\"Sleutel\",\"pt\":\"Chave\",\"pt_BR\":\"Chave\",\"ru\":\"Ключ\",\"si\":null,\"sk\":\"Kľúč\",\"sq\":\"Çelës\",\"sr\":\"кључ\",\"sv\":\"Nyckel\",\"szl\":null,\"tzm\":\"Tasarut\",\"uk\":\"Ключ\",\"vi\":\"Chìa khóa\",\"zh_Hans\":\"钥匙\",\"zh_Hant\":\"鑰匙\"}},{\"number\":48,\"emoji\":\"🔨\",\"description\":\"Hammer\",\"unicode\":\"U+1F528\",\"translated_descriptions\":{\"ar\":\"مِطرَقَة\",\"bg\":\"Чук\",\"ca\":\"Martell\",\"cs\":\"Kladivo\",\"de\":\"Hammer\",\"eo\":\"Martelo\",\"es\":\"Martillo\",\"et\":\"Haamer\",\"fa\":\"چکش\",\"fi\":\"Vasara\",\"fr\":\"Marteau\",\"hr\":\"čekić\",\"hu\":\"Kalapács\",\"id\":\"Palu\",\"it\":\"Martello\",\"ja\":\"金槌\",\"nb_NO\":\"Hammer\",\"nl\":\"Hamer\",\"pt\":\"Martelo\",\"pt_BR\":\"Martelo\",\"ru\":\"Молоток\",\"si\":null,\"sk\":\"Kladivo\",\"sq\":\"Çekiç\",\"sr\":\"чекић\",\"sv\":\"Hammare\",\"szl\":null,\"tzm\":null,\"uk\":\"Молоток\",\"vi\":\"Búa\",\"zh_Hans\":\"锤子\",\"zh_Hant\":\"鎚子\"}},{\"number\":49,\"emoji\":\"☎️\",\"description\":\"Telephone\",\"unicode\":\"U+260EU+FE0F\",\"translated_descriptions\":{\"ar\":\"تِلِفُون\",\"bg\":\"Телефон\",\"ca\":\"Telèfon\",\"cs\":\"Telefon\",\"de\":\"Telefon\",\"eo\":\"Telefono\",\"es\":\"Teléfono\",\"et\":\"Telefon\",\"fa\":\"تلفن\",\"fi\":\"Puhelin\",\"fr\":\"Téléphone\",\"hr\":\"telefon\",\"hu\":\"Telefon\",\"id\":\"Telepon\",\"it\":\"Telefono\",\"ja\":\"電話機\",\"nb_NO\":\"Telefon\",\"nl\":\"Telefoon\",\"pt\":\"Telefone\",\"pt_BR\":\"Telefone\",\"ru\":\"Телефон\",\"si\":null,\"sk\":\"Telefón\",\"sq\":\"Telefon\",\"sr\":\"телефон\",\"sv\":\"Telefon\",\"szl\":null,\"tzm\":\"Atilifun\",\"uk\":\"Телефон\",\"vi\":\"Điện thoại\",\"zh_Hans\":\"电话\",\"zh_Hant\":\"電話\"}},{\"number\":50,\"emoji\":\"🏁\",\"description\":\"Flag\",\"unicode\":\"U+1F3C1\",\"translated_descriptions\":{\"ar\":\"عَلَم\",\"bg\":\"Флаг\",\"ca\":\"Bandera\",\"cs\":\"Vlajka\",\"de\":\"Flagge\",\"eo\":\"Flago\",\"es\":\"Bandera\",\"et\":\"Lipp\",\"fa\":\"پرچم\",\"fi\":\"Lippu\",\"fr\":\"Drapeau\",\"hr\":\"zastava\",\"hu\":\"Zászló\",\"id\":\"Bendera\",\"it\":\"Bandiera\",\"ja\":\"旗\",\"nb_NO\":\"Flagg\",\"nl\":\"Vlag\",\"pt\":\"Bandeira\",\"pt_BR\":\"Bandeira\",\"ru\":\"Флаг\",\"si\":null,\"sk\":\"Zástava\",\"sq\":\"Flamur\",\"sr\":\"застава\",\"sv\":\"Flagga\",\"szl\":null,\"tzm\":\"Acenyal\",\"uk\":\"Прапор\",\"vi\":\"Lá cờ\",\"zh_Hans\":\"旗帜\",\"zh_Hant\":\"旗幟\"}},{\"number\":51,\"emoji\":\"🚂\",\"description\":\"Train\",\"unicode\":\"U+1F682\",\"translated_descriptions\":{\"ar\":\"قِطَار\",\"bg\":\"Влак\",\"ca\":\"Tren\",\"cs\":\"Vlak\",\"de\":\"Zug\",\"eo\":\"Vagonaro\",\"es\":\"Tren\",\"et\":\"Rong\",\"fa\":\"قطار\",\"fi\":\"Juna\",\"fr\":\"Train\",\"hr\":\"vlak\",\"hu\":\"Vonat\",\"id\":\"Kereta Api\",\"it\":\"Treno\",\"ja\":\"電車\",\"nb_NO\":\"Tog\",\"nl\":\"Trein\",\"pt\":\"Comboio\",\"pt_BR\":\"Trem\",\"ru\":\"Поезд\",\"si\":null,\"sk\":\"Vlak\",\"sq\":\"Tren\",\"sr\":\"воз\",\"sv\":\"Tåg\",\"szl\":null,\"tzm\":null,\"uk\":\"Потяг\",\"vi\":\"Xe lửa\",\"zh_Hans\":\"火车\",\"zh_Hant\":\"火車\"}},{\"number\":52,\"emoji\":\"🚲\",\"description\":\"Bicycle\",\"unicode\":\"U+1F6B2\",\"translated_descriptions\":{\"ar\":\"دَرّاجَة\",\"bg\":\"Колело\",\"ca\":\"Bicicleta\",\"cs\":\"Kolo\",\"de\":\"Fahrrad\",\"eo\":\"Biciklo\",\"es\":\"Bicicleta\",\"et\":\"Jalgratas\",\"fa\":\"دوچرخه\",\"fi\":\"Polkupyörä\",\"fr\":\"Vélo\",\"hr\":\"bicikl\",\"hu\":\"Kerékpár\",\"id\":\"Sepeda\",\"it\":\"Bicicletta\",\"ja\":\"自転車\",\"nb_NO\":\"Sykkel\",\"nl\":\"Fiets\",\"pt\":\"Bicicleta\",\"pt_BR\":\"Bicicleta\",\"ru\":\"Велосипед\",\"si\":null,\"sk\":\"Bicykel\",\"sq\":\"Biçikletë\",\"sr\":\"бицикл\",\"sv\":\"Cykel\",\"szl\":null,\"tzm\":null,\"uk\":\"Велосипед\",\"vi\":\"Xe đạp\",\"zh_Hans\":\"自行车\",\"zh_Hant\":\"腳踏車\"}},{\"number\":53,\"emoji\":\"✈️\",\"description\":\"Aeroplane\",\"unicode\":\"U+2708U+FE0F\",\"translated_descriptions\":{\"ar\":\"طَائِرة\",\"bg\":\"Самолет\",\"ca\":\"Avió\",\"cs\":\"Letadlo\",\"de\":\"Flugzeug\",\"eo\":\"Aviadilo\",\"es\":\"Avión\",\"et\":\"Lennuk\",\"fa\":\"هواپیما\",\"fi\":\"Lentokone\",\"fr\":\"Avion\",\"hr\":\"avion\",\"hu\":\"Repülő\",\"id\":\"Pesawat\",\"it\":\"Aeroplano\",\"ja\":\"飛行機\",\"nb_NO\":\"Fly\",\"nl\":\"Vliegtuig\",\"pt\":\"Avião\",\"pt_BR\":\"Avião\",\"ru\":\"Самолет\",\"si\":null,\"sk\":\"Lietadlo\",\"sq\":\"Avion\",\"sr\":\"авион\",\"sv\":\"Flygplan\",\"szl\":null,\"tzm\":null,\"uk\":\"Літак\",\"vi\":\"Máy bay\",\"zh_Hans\":\"飞机\",\"zh_Hant\":\"飛機\"}},{\"number\":54,\"emoji\":\"🚀\",\"description\":\"Rocket\",\"unicode\":\"U+1F680\",\"translated_descriptions\":{\"ar\":\"صَارُوخ\",\"bg\":\"Ракета\",\"ca\":\"Coet\",\"cs\":\"Raketa\",\"de\":\"Rakete\",\"eo\":\"Raketo\",\"es\":\"Cohete\",\"et\":\"Rakett\",\"fa\":\"موشک\",\"fi\":\"Raketti\",\"fr\":\"Fusée\",\"hr\":\"raketa\",\"hu\":\"Rakáta\",\"id\":\"Roket\",\"it\":\"Razzo\",\"ja\":\"ロケット\",\"nb_NO\":\"Rakett\",\"nl\":\"Raket\",\"pt\":\"Foguetão\",\"pt_BR\":\"Foguete\",\"ru\":\"Ракета\",\"si\":null,\"sk\":\"Raketa\",\"sq\":\"Raketë\",\"sr\":\"ракета\",\"sv\":\"Raket\",\"szl\":null,\"tzm\":null,\"uk\":\"Ракета\",\"vi\":\"Tên lửa\",\"zh_Hans\":\"火箭\",\"zh_Hant\":\"火箭\"}},{\"number\":55,\"emoji\":\"🏆\",\"description\":\"Trophy\",\"unicode\":\"U+1F3C6\",\"translated_descriptions\":{\"ar\":\"كَأسُ النَّصر\",\"bg\":\"Трофей\",\"ca\":\"Trofeu\",\"cs\":\"Pohár\",\"de\":\"Pokal\",\"eo\":\"Trofeo\",\"es\":\"Trofeo\",\"et\":\"Auhind\",\"fa\":\"جام\",\"fi\":\"Palkinto\",\"fr\":\"Trophée\",\"hr\":\"trofej\",\"hu\":\"Trófea\",\"id\":\"Piala\",\"it\":\"Trofeo\",\"ja\":\"トロフィー\",\"nb_NO\":\"Pokal\",\"nl\":\"Trofee\",\"pt\":\"Troféu\",\"pt_BR\":\"Troféu\",\"ru\":\"Кубок\",\"si\":null,\"sk\":\"Trofej\",\"sq\":\"Trofe\",\"sr\":\"пехар\",\"sv\":\"Trofé\",\"szl\":null,\"tzm\":null,\"uk\":\"Приз\",\"vi\":\"Cúp\",\"zh_Hans\":\"奖杯\",\"zh_Hant\":\"獎盃\"}},{\"number\":56,\"emoji\":\"⚽\",\"description\":\"Ball\",\"unicode\":\"U+26BD\",\"translated_descriptions\":{\"ar\":\"كُرَة\",\"bg\":\"Топка\",\"ca\":\"Pilota\",\"cs\":\"Míč\",\"de\":\"Ball\",\"eo\":\"Pilko\",\"es\":\"Bola\",\"et\":\"Pall\",\"fa\":\"توپ\",\"fi\":\"Pallo\",\"fr\":\"Ballon\",\"hr\":\"lopta\",\"hu\":\"Labda\",\"id\":\"Bola\",\"it\":\"Palla\",\"ja\":\"ボール\",\"nb_NO\":\"Ball\",\"nl\":\"Bal\",\"pt\":\"Bola\",\"pt_BR\":\"Bola\",\"ru\":\"Мяч\",\"si\":null,\"sk\":\"Lopta\",\"sq\":\"Top\",\"sr\":\"лопта\",\"sv\":\"Boll\",\"szl\":null,\"tzm\":\"Tcama\",\"uk\":\"М'яч\",\"vi\":\"Banh\",\"zh_Hans\":\"球\",\"zh_Hant\":\"足球\"}},{\"number\":57,\"emoji\":\"🎸\",\"description\":\"Guitar\",\"unicode\":\"U+1F3B8\",\"translated_descriptions\":{\"ar\":\"غيتار\",\"bg\":\"Китара\",\"ca\":\"Guitarra\",\"cs\":\"Kytara\",\"de\":\"Gitarre\",\"eo\":\"Gitaro\",\"es\":\"Guitarra\",\"et\":\"Kitarr\",\"fa\":\"گیتار\",\"fi\":\"Kitara\",\"fr\":\"Guitare\",\"hr\":\"gitara\",\"hu\":\"Gitár\",\"id\":\"Gitar\",\"it\":\"Chitarra\",\"ja\":\"ギター\",\"nb_NO\":\"Gitar\",\"nl\":\"Gitaar\",\"pt\":\"Guitarra\",\"pt_BR\":\"Guitarra\",\"ru\":\"Гитара\",\"si\":null,\"sk\":\"Gitara\",\"sq\":\"Kitarë\",\"sr\":\"гитара\",\"sv\":\"Gitarr\",\"szl\":null,\"tzm\":\"Agiṭaṛ\",\"uk\":\"Гітара\",\"vi\":\"Ghi-ta\",\"zh_Hans\":\"吉他\",\"zh_Hant\":\"吉他\"}},{\"number\":58,\"emoji\":\"🎺\",\"description\":\"Trumpet\",\"unicode\":\"U+1F3BA\",\"translated_descriptions\":{\"ar\":\"بُوق\",\"bg\":\"Тромпет\",\"ca\":\"Trompeta\",\"cs\":\"Trumpeta\",\"de\":\"Trompete\",\"eo\":\"Trumpeto\",\"es\":\"Trompeta\",\"et\":\"Trompet\",\"fa\":\"شیپور\",\"fi\":\"Trumpetti\",\"fr\":\"Trompette\",\"hr\":\"truba\",\"hu\":\"Trombita\",\"id\":\"Terompet\",\"it\":\"Trombetta\",\"ja\":\"トランペット\",\"nb_NO\":\"Trompet\",\"nl\":\"Trompet\",\"pt\":\"Trompete\",\"pt_BR\":\"Trombeta\",\"ru\":\"Труба\",\"si\":null,\"sk\":\"Trúbka\",\"sq\":\"Trombë\",\"sr\":\"труба\",\"sv\":\"Trumpet\",\"szl\":null,\"tzm\":null,\"uk\":\"Труба\",\"vi\":\"Kèn\",\"zh_Hans\":\"喇叭\",\"zh_Hant\":\"喇叭\"}},{\"number\":59,\"emoji\":\"🔔\",\"description\":\"Bell\",\"unicode\":\"U+1F514\",\"translated_descriptions\":{\"ar\":\"جَرَس\",\"bg\":\"Звънец\",\"ca\":\"Campana\",\"cs\":\"Zvonek\",\"de\":\"Glocke\",\"eo\":\"Sonorilo\",\"es\":\"Campana\",\"et\":\"Kelluke\",\"fa\":\"زنگ\",\"fi\":\"Soittokello\",\"fr\":\"Cloche\",\"hr\":\"zvono\",\"hu\":\"Harang\",\"id\":\"Lonceng\",\"it\":\"Campana\",\"ja\":\"ベル\",\"nb_NO\":\"Bjelle\",\"nl\":\"Bel\",\"pt\":\"Sino\",\"pt_BR\":\"Sino\",\"ru\":\"Колокол\",\"si\":null,\"sk\":\"Zvonec\",\"sq\":\"Kambanë\",\"sr\":\"звоно\",\"sv\":\"Bjällra\",\"szl\":null,\"tzm\":null,\"uk\":\"Дзвін\",\"vi\":\"Chuông\",\"zh_Hans\":\"铃铛\",\"zh_Hant\":\"鈴鐺\"}},{\"number\":60,\"emoji\":\"⚓\",\"description\":\"Anchor\",\"unicode\":\"U+2693\",\"translated_descriptions\":{\"ar\":\"مِرسَاة\",\"bg\":\"Котва\",\"ca\":\"Àncora\",\"cs\":\"Kotva\",\"de\":\"Anker\",\"eo\":\"Ankro\",\"es\":\"Ancla\",\"et\":\"Ankur\",\"fa\":\"لنگر\",\"fi\":\"Ankkuri\",\"fr\":\"Ancre\",\"hr\":\"sidro\",\"hu\":\"Horgony\",\"id\":\"Jangkar\",\"it\":\"Ancora\",\"ja\":\"いかり\",\"nb_NO\":\"Anker\",\"nl\":\"Anker\",\"pt\":\"Âncora\",\"pt_BR\":\"Âncora\",\"ru\":\"Якорь\",\"si\":null,\"sk\":\"Kotva\",\"sq\":\"Spirancë\",\"sr\":\"сидро\",\"sv\":\"Ankare\",\"szl\":null,\"tzm\":null,\"uk\":\"Якір\",\"vi\":\"Mỏ neo\",\"zh_Hans\":\"锚\",\"zh_Hant\":\"船錨\"}},{\"number\":61,\"emoji\":\"🎧\",\"description\":\"Headphones\",\"unicode\":\"U+1F3A7\",\"translated_descriptions\":{\"ar\":\"سَمّاعَة رَأس\",\"bg\":\"Слушалки\",\"ca\":\"Auriculars\",\"cs\":\"Sluchátka\",\"de\":\"Kopfhörer\",\"eo\":\"Kapaŭdilo\",\"es\":\"Cascos\",\"et\":\"Kõrvaklapid\",\"fa\":\"هدفون\",\"fi\":\"Kuulokkeet\",\"fr\":\"Casque audio\",\"hr\":\"slušalice\",\"hu\":\"Fejhallgató\",\"id\":\"Headphone\",\"it\":\"Cuffie\",\"ja\":\"ヘッドホン\",\"nb_NO\":\"Hodetelefoner\",\"nl\":\"Koptelefoon\",\"pt\":\"Fones\",\"pt_BR\":\"Fones de ouvido\",\"ru\":\"Наушники\",\"si\":null,\"sk\":\"Slúchadlá\",\"sq\":\"Kufje\",\"sr\":\"слушалице\",\"sv\":\"Hörlurar\",\"szl\":null,\"tzm\":null,\"uk\":\"Навушники\",\"vi\":\"Tai nghe\",\"zh_Hans\":\"耳机\",\"zh_Hant\":\"耳機\"}},{\"number\":62,\"emoji\":\"📁\",\"description\":\"Folder\",\"unicode\":\"U+1F4C1\",\"translated_descriptions\":{\"ar\":\"مُجَلَّد\",\"bg\":\"Папка\",\"ca\":\"Carpeta\",\"cs\":\"Složka\",\"de\":\"Ordner\",\"eo\":\"Dosierujo\",\"es\":\"Carpeta\",\"et\":\"Kaust\",\"fa\":\"پوشه\",\"fi\":\"Kansio\",\"fr\":\"Dossier\",\"hr\":\"mapu\",\"hu\":\"Mappa\",\"id\":\"Map\",\"it\":\"Cartella\",\"ja\":\"フォルダー\",\"nb_NO\":\"Mappe\",\"nl\":\"Map\",\"pt\":\"Pasta\",\"pt_BR\":\"Pasta\",\"ru\":\"Папка\",\"si\":null,\"sk\":\"Fascikel\",\"sq\":\"Dosje\",\"sr\":\"фасцикла\",\"sv\":\"Mapp\",\"szl\":null,\"tzm\":\"Asdaw\",\"uk\":\"Тека\",\"vi\":\"Thư mục\",\"zh_Hans\":\"文件夹\",\"zh_Hant\":\"資料夾\"}},{\"number\":63,\"emoji\":\"📌\",\"description\":\"Pin\",\"unicode\":\"U+1F4CC\",\"translated_descriptions\":{\"ar\":\"دَبُّوس\",\"bg\":\"Кабърче\",\"ca\":\"Xinxeta\",\"cs\":\"Špendlík\",\"de\":\"Stecknadel\",\"eo\":\"Pinglo\",\"es\":\"Alfiler\",\"et\":\"Nööpnõel\",\"fa\":\"سنجاق\",\"fi\":\"Nuppineula\",\"fr\":\"Punaise\",\"hr\":\"pribadača\",\"hu\":\"Rajszeg\",\"id\":\"Pin\",\"it\":\"Puntina\",\"ja\":\"ピン\",\"nb_NO\":\"Tegnestift\",\"nl\":\"Duimspijker\",\"pt\":\"Pionés\",\"pt_BR\":\"Alfinete\",\"ru\":\"Булавка\",\"si\":null,\"sk\":\"Špendlík\",\"sq\":\"Karficë\",\"sr\":\"чиода\",\"sv\":\"Häftstift\",\"szl\":null,\"tzm\":null,\"uk\":\"Кнопка\",\"vi\":\"Ghim\",\"zh_Hans\":\"图钉\",\"zh_Hant\":\"圖釘\"}}]")).map(({ emoji: e, description: t, translated_descriptions: n }) => [e, [t, Object.keys(n).reduce((e, t) => {
	for (let r of Iy(t)) e[r] = n[t];
	return e;
}, {})]]));
function sO(e, t) {
	let n = oO.get(e);
	if (!n) throw Error(`Emoji mapping not found for emoji ${e}`);
	let [r, i] = n;
	for (let e of Iy(t)) if (i[e]) return i[e];
	return r;
}
var cO = {
	container: "_container_1lqqy_8",
	segment: "_segment_1lqqy_15",
	emoji: "_emoji_1lqqy_23",
	label: "_label_1lqqy_29"
};
//#endregion
//#region src/crypto/SasEmoji/SasEmoji.tsx
function lO({ emoji: e, className: t }) {
	let { language: n } = B(), r = e.map((e, t) => /* @__PURE__ */ (0, z.jsxs)("div", {
		className: cO.segment,
		children: [/* @__PURE__ */ (0, z.jsx)("div", {
			className: cO.emoji,
			"aria-hidden": !0,
			children: e
		}), /* @__PURE__ */ (0, z.jsx)("div", {
			className: cO.label,
			children: sO(e, n)
		})]
	}, t));
	return /* @__PURE__ */ (0, z.jsx)("div", {
		className: (0, R.default)(cO.container, t),
		children: r
	});
}
var uO = {
	wrapper: "_wrapper_dt4lj_8",
	container: "_container_dt4lj_15",
	profile: "_profile_dt4lj_23",
	displayname: "_displayname_dt4lj_37",
	userId: "_userId_dt4lj_42",
	createAccount: "_createAccount_dt4lj_47",
	profilePrimary: "_profilePrimary_dt4lj_52",
	profileSecondary: "_profileSecondary_dt4lj_56",
	actions: "_actions_dt4lj_59",
	avatarWrapper: "_avatarWrapper_dt4lj_73",
	iconStatusEmoji: "_iconStatusEmoji_dt4lj_79",
	triggerButton: "_triggerButton_dt4lj_96",
	displayName: "_displayName_dt4lj_118"
}, dO = {
	statusPill: "_statusPill_1uwxs_8",
	menuStatusEmoji: "_menuStatusEmoji_1uwxs_21",
	menuStatusText: "_menuStatusText_1uwxs_25"
}, fO = ({ status: e, clearStatus: t, ref: n, ...r }) => /* @__PURE__ */ (0, z.jsxs)("div", {
	ref: n,
	...r,
	className: dO.statusPill,
	children: [
		/* @__PURE__ */ (0, z.jsx)(P, {
			as: "span",
			className: dO.menuStatusEmoji,
			children: e.emoji
		}),
		/* @__PURE__ */ (0, z.jsx)(P, {
			as: "span",
			className: dO.menuStatusText,
			children: e.text
		}),
		/* @__PURE__ */ (0, z.jsx)(M, {
			onClick: t,
			"aria-label": U("menus|user_menu|clear_status"),
			tooltip: U("menus|user_menu|clear_status"),
			size: "28px",
			children: /* @__PURE__ */ (0, z.jsx)(SS, {})
		})
	]
}), pO = {
	customStatus: "_customStatus_hgzko_8",
	emojiButton: "_emojiButton_hgzko_18",
	selected: "_selected_hgzko_34",
	textField: "_textField_hgzko_40",
	action: "_action_hgzko_45",
	pickerMenu: "_pickerMenu_hgzko_51"
}, mO = "😄";
function hO({ onSave: e, onCancel: t }) {
	let [n, r] = T(mO), [i, a] = T(""), [o, s] = T(!1), c = i.trim(), l = h((e) => (r(e), s(!1), !1), []), u = h(() => {
		c ? e({
			emoji: n,
			text: c
		}) : t();
	}, [
		c,
		n,
		e,
		t
	]), d = h((e) => {
		(e.key === "Enter" || e.key === " ") && (e.preventDefault(), u());
	}, [u]), f = h((t) => {
		t.preventDefault(), c && e({
			emoji: n,
			text: c
		});
	}, [
		c,
		n,
		e
	]);
	return /* @__PURE__ */ (0, z.jsxs)(me, {
		className: pO.customStatus,
		onSubmit: f,
		children: [
			/* @__PURE__ */ (0, z.jsx)(ue, {
				open: o,
				onOpenChange: s,
				title: U("status|set_status|choose_emoji"),
				showTitle: !1,
				align: "start",
				className: pO.pickerMenu,
				trigger: /* @__PURE__ */ (0, z.jsx)("button", {
					type: "button",
					className: (0, R.default)(pO.emojiButton, { [pO.selected]: o }),
					"aria-label": U("status|set_status|choose_emoji"),
					children: n
				}),
				children: /* @__PURE__ */ (0, z.jsx)(Uw, {
					onChoose: l,
					onFinished: () => s(!1),
					showQuickReactions: !1
				})
			}),
			/* @__PURE__ */ (0, z.jsx)(ie, {
				name: "custom-status",
				className: pO.textField,
				children: /* @__PURE__ */ (0, z.jsx)(ve, {
					value: i,
					onChange: (e) => a(e.currentTarget.value),
					placeholder: U("status|set_status|set_status_prompt"),
					"aria-label": U("status|set_status|set_status_prompt"),
					autoFocus: !0
				})
			}),
			/* @__PURE__ */ (0, z.jsx)(le, {
				kind: "primary",
				size: "md",
				role: "button",
				tabIndex: 0,
				className: pO.action,
				onClick: u,
				onKeyDown: d,
				children: U(c ? "action|save" : "action|cancel")
			})
		]
	});
}
var gO = {
	setStatusContainer: "_setStatusContainer_x2rgl_8",
	setStatusTrigger: "_setStatusTrigger_x2rgl_13",
	menuItem: "_menuItem_x2rgl_26",
	dropdownEmoji: "_dropdownEmoji_x2rgl_34"
}, _O = {
	in_a_meeting: {
		emoji: "💬",
		textKey: rx("status|set_status|in_a_meeting")
	},
	focus_time: {
		emoji: "💡",
		textKey: rx("status|set_status|focus_time")
	},
	on_the_road: {
		emoji: "🚙",
		textKey: rx("status|set_status|on_the_road")
	},
	be_right_back: {
		emoji: "☕️",
		textKey: rx("status|set_status|be_right_back")
	},
	away: {
		emoji: "🌴",
		textKey: rx("status|set_status|away")
	},
	custom: {
		emoji: "✍️",
		textKey: rx("status|set_status|custom")
	}
}, vO = Object.keys(_O);
function yO({ value: e }) {
	return /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [/* @__PURE__ */ (0, z.jsx)("span", {
		className: gO.dropdownEmoji,
		children: _O[e].emoji
	}), /* @__PURE__ */ (0, z.jsx)("span", { children: U(_O[e].textKey) })] });
}
function bO({ vm: e }) {
	let { userStatus: t } = H(e), [n, r] = T(!1), i = h((e) => e === null ? null : /* @__PURE__ */ (0, z.jsx)(yO, { value: e }), []);
	if (t) return /* @__PURE__ */ (0, z.jsx)(fO, {
		status: t,
		clearStatus: e.clearStatus
	});
	if (n) return /* @__PURE__ */ (0, z.jsx)(hO, {
		onSave: (t) => {
			r(!1), e.setStatus(t);
		},
		onCancel: () => r(!1)
	});
	let a = (e) => /* @__PURE__ */ (0, z.jsx)("div", {
		className: gO.setStatusContainer,
		children: /* @__PURE__ */ (0, z.jsxs)(le, {
			className: gO.setStatusTrigger,
			"aria-label": U("status|set_status|set_status_prompt"),
			...e,
			children: [/* @__PURE__ */ (0, z.jsx)(KC, {}), /* @__PURE__ */ (0, z.jsx)(P, {
				as: "span",
				type: "body",
				size: "md",
				weight: "medium",
				children: U("status|set_status|set_status_prompt")
			})]
		})
	});
	return e.onSetStatusClick ? a({ onClick: e.onSetStatusClick }) : /* @__PURE__ */ (0, z.jsx)(j, {
		values: vO,
		label: null,
		trigger: a,
		onValueChange: (t) => {
			if (t === "custom") {
				r(!0);
				return;
			}
			let n = _O[t];
			n && e.setStatus({
				emoji: n.emoji,
				text: U(n.textKey)
			});
		},
		renderItem: i
	});
}
//#endregion
//#region src/menus/UserMenu/UserMenu.tsx
function xO({ vm: e, className: t }) {
	let { userId: n, displayName: r, avatarUrl: i, expanded: a, open: o, manageAccountHref: s, actions: c, showAvatar: l, userStatus: u, setStatusViewModel: d, showUserStatus: f = !0 } = H(e), { translate: p } = B(), m = /* @__PURE__ */ (0, z.jsx)("button", {
		className: uO.triggerButton,
		"aria-label": p("menus|user_menu|title"),
		type: "button",
		children: /* @__PURE__ */ (0, z.jsxs)("div", {
			className: uO.avatarWrapper,
			children: [/* @__PURE__ */ (0, z.jsx)(D, {
				id: n,
				name: r,
				type: "round",
				size: "36px",
				src: i
			}), u && /* @__PURE__ */ (0, z.jsx)(P, {
				as: "div",
				className: uO.iconStatusEmoji,
				children: u.emoji
			})]
		})
	});
	return /* @__PURE__ */ (0, z.jsxs)("div", {
		className: (0, R.default)(uO.wrapper, t),
		children: [/* @__PURE__ */ (0, z.jsxs)(ue, {
			open: o,
			showTitle: !1,
			title: p("menus|user_menu|title"),
			trigger: m,
			onOpenChange: e.setOpen,
			align: "start",
			side: "right",
			className: uO.container,
			children: [
				/* @__PURE__ */ (0, z.jsxs)("section", {
					className: (0, R.default)(uO.profile, uO.profilePrimary),
					children: [
						l && /* @__PURE__ */ (0, z.jsx)(D, {
							id: n,
							name: r,
							type: "round",
							size: "64px",
							src: i
						}),
						/* @__PURE__ */ (0, z.jsx)(P, {
							className: uO.displayname,
							type: "body",
							size: "lg",
							weight: "semibold",
							as: "span",
							children: r
						}),
						f && /* @__PURE__ */ (0, z.jsx)(bO, { vm: d })
					]
				}),
				/* @__PURE__ */ (0, z.jsxs)("section", {
					className: (0, R.default)(uO.profile, uO.profileSecondary),
					children: [
						/* @__PURE__ */ (0, z.jsx)(P, {
							"data-testid": "userId",
							size: "md",
							as: "span",
							type: "body",
							className: uO.userId,
							children: n
						}),
						s && /* @__PURE__ */ (0, z.jsx)(k, {
							as: "a",
							size: "md",
							kind: "tertiary",
							href: s,
							Icon: BC,
							children: p("menus|user_menu|manage_account")
						}),
						c.createAccount && /* @__PURE__ */ (0, z.jsx)(k, {
							className: uO.createAccount,
							size: "md",
							as: "button",
							kind: "primary",
							onClick: e.createAccount,
							children: p("menus|user_menu|create_an_account")
						}),
						c.signIn && /* @__PURE__ */ (0, z.jsxs)(P, {
							as: "span",
							weight: "medium",
							children: [p("menus|user_menu|got_an_account"), /* @__PURE__ */ (0, z.jsx)(le, {
								as: "button",
								onClick: e.signIn,
								children: p("menus|user_menu|sign_in")
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, z.jsx)(he, {}),
				/* @__PURE__ */ (0, z.jsxs)("section", {
					className: uO.actions,
					children: [
						c.openHomePage && /* @__PURE__ */ (0, z.jsx)(N, {
							Icon: iC,
							label: p("user_menu|open_home"),
							onSelect: e.openHomePage
						}),
						c.linkNewDevice && /* @__PURE__ */ (0, z.jsx)(N, {
							Icon: AS,
							label: p("user_menu|link_new_device"),
							onSelect: e.linkNewDevice
						}),
						c.openSecurity && /* @__PURE__ */ (0, z.jsx)(N, {
							Icon: vC,
							label: p("user_menu|open_security"),
							onSelect: e.openSecurity
						}),
						c.openFeedback && /* @__PURE__ */ (0, z.jsx)(N, {
							Icon: oS,
							label: p("user_menu|open_feedback"),
							onSelect: e.openFeedback
						}),
						c.openSettings && /* @__PURE__ */ (0, z.jsx)(N, {
							Icon: iw,
							label: p("user_menu|open_settings"),
							onSelect: e.openSettings
						})
					]
				})
			]
		}), a && /* @__PURE__ */ (0, z.jsx)(P, {
			type: "heading",
			size: "sm",
			as: "span",
			weight: "semibold",
			className: uO.displayName,
			children: r
		})]
	});
}
var SO = {
	notificationBadge: "_notificationBadge_19whq_8",
	visible: "_visible_19whq_16",
	dot: "_dot_19whq_33",
	count: "_count_19whq_40",
	notification: "_notification_19whq_8",
	highlight: "_highlight_19whq_48",
	badge2Char: "_badge2Char_19whq_57",
	badge3Char: "_badge3Char_19whq_63"
};
//#endregion
//#region src/notifications/NotificationBadgeView/NotificationBadgeView.tsx
function CO({ vm: e, className: t }) {
	let { translate: n } = B(), { shouldRender: r, isVisible: i, isNotification: a, isHighlight: o, isKnocked: s, badgeType: c, symbol: l, isClickable: u, ariaLabel: d, tabIndex: f, showUnsentTooltip: p } = H(e);
	if (!r) return /* @__PURE__ */ (0, z.jsx)(z.Fragment, {});
	let m = (0, R.default)(t, SO.notificationBadge, {
		[SO.visible]: i,
		[SO.notification]: a,
		[SO.highlight]: o,
		[SO.dot]: c === "dot",
		[SO.badge2Char]: c === "badge_2char",
		[SO.badge3Char]: c === "badge_3char",
		"cpd-theme-light": c !== "dot"
	}), h = o ? "highlight" : a ? "notification" : void 0, g = s ? /* @__PURE__ */ (0, z.jsx)(eS, { "aria-label": n("room|knock_sent") }) : /* @__PURE__ */ (0, z.jsx)("span", {
		className: SO.count,
		children: l
	}), _ = u ? /* @__PURE__ */ (0, z.jsx)("button", {
		type: "button",
		"data-testid": "notification-badge",
		"data-badge-type": c,
		"data-notification-level": h,
		className: m,
		"aria-label": d,
		tabIndex: f,
		onClick: e.onClick,
		children: g
	}) : /* @__PURE__ */ (0, z.jsx)("div", {
		"data-testid": "notification-badge",
		"data-badge-type": c,
		"data-notification-level": h,
		className: m,
		children: g
	});
	return p ? /* @__PURE__ */ (0, z.jsx)(F, {
		label: n("notifications|message_didnt_send"),
		placement: "right",
		children: _
	}) : _;
}
var wO = {
	readMarker: "_readMarker_1rvym_8",
	line: "_line_1rvym_15"
};
//#endregion
//#region src/room/timeline/ReadMarker/ReadMarker.tsx
function TO({ eventId: e, kind: t, showLine: n = !0, onCurrentMarkerRef: r, onGhostLineRef: i, onGhostTransitionEnd: a, className: o }) {
	let s = null;
	return t === "ghost" ? s = /* @__PURE__ */ (0, z.jsx)("hr", {
		className: wO.line,
		ref: i,
		onTransitionEnd: a,
		"data-eventid": e
	}) : n && (s = /* @__PURE__ */ (0, z.jsx)("hr", { className: wO.line })), /* @__PURE__ */ (0, z.jsx)("li", {
		className: (0, R.default)(o, wO.readMarker),
		ref: t === "current" ? r : void 0,
		"data-scroll-tokens": t === "current" ? e : void 0,
		children: s
	});
}
//#endregion
//#region src/room/timeline/EventPresentation/EventPresentationContext.ts
var EO = {
	layout: "group",
	density: "default"
}, DO = l(EO);
DO.displayName = "EventPresentationContext";
var OO = DO.Provider;
function kO() {
	return g(DO);
}
function AO() {
	let { layout: e, density: t } = kO();
	return {
		"data-event-layout": e,
		"data-event-density": t
	};
}
//#endregion
//#region ../../node_modules/.pnpm/html-dom-parser@8.0.0/node_modules/html-dom-parser/lib/client/constants.js
var jO = /* @__PURE__ */ I(((e) => {
	e.CASE_SENSITIVE_TAG_NAMES_MAP = (/* @__PURE__ */ "animateMotion.animateTransform.clipPath.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.foreignObject.linearGradient.radialGradient.textPath".split(".")).reduce((e, t) => (e[t.toLowerCase()] = t, e), {});
}));
//#endregion
//#region ../../node_modules/.pnpm/domelementtype@3.0.0/node_modules/domelementtype/dist/index.js
function MO(e) {
	return e.type === NO.Tag || e.type === NO.Script || e.type === NO.Style;
}
var NO, PO = Ve((() => {
	(function(e) {
		e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype";
	})(NO ||= {}), NO.Root, NO.Text, NO.Directive, NO.Comment, NO.Script, NO.Style, NO.Tag, NO.CDATA, NO.Doctype;
}));
//#endregion
//#region ../../node_modules/.pnpm/domhandler@6.0.1/node_modules/domhandler/dist/node.js
function FO(e) {
	return MO(e);
}
function IO(e) {
	return e.type === NO.CDATA;
}
function LO(e) {
	return e.type === NO.Text;
}
function RO(e) {
	return e.type === NO.Comment;
}
function zO(e) {
	return e.type === NO.Directive;
}
function BO(e) {
	return e.type === NO.Root;
}
function VO(e) {
	return Object.hasOwn(e, "children");
}
function HO(e, t = !1) {
	let n;
	if (LO(e)) n = new KO(e.data);
	else if (RO(e)) n = new qO(e.data);
	else if (FO(e)) {
		let r = t ? UO(e.children) : [], i = new QO(e.name, { ...e.attribs }, r);
		for (let e of r) e.parent = i;
		e.namespace != null && (i.namespace = e.namespace), e["x-attribsNamespace"] && (i["x-attribsNamespace"] = { ...e["x-attribsNamespace"] }), e["x-attribsPrefix"] && (i["x-attribsPrefix"] = { ...e["x-attribsPrefix"] }), n = i;
	} else if (IO(e)) {
		let r = t ? UO(e.children) : [], i = new XO(r);
		for (let e of r) e.parent = i;
		n = i;
	} else if (BO(e)) {
		let r = t ? UO(e.children) : [], i = new ZO(r);
		for (let e of r) e.parent = i;
		e["x-mode"] && (i["x-mode"] = e["x-mode"]), n = i;
	} else if (zO(e)) {
		let t = new JO(e.name, e.data);
		e["x-name"] != null && (t["x-name"] = e["x-name"], t["x-publicId"] = e["x-publicId"], t["x-systemId"] = e["x-systemId"]), n = t;
	} else throw Error(`Not implemented yet: ${e.type}`);
	return n.startIndex = e.startIndex, n.endIndex = e.endIndex, e.sourceCodeLocation != null && (n.sourceCodeLocation = e.sourceCodeLocation), n;
}
function UO(e) {
	let t = e.map((e) => HO(e, !0));
	for (let e = 1; e < t.length; e++) t[e].prev = t[e - 1], t[e - 1].next = t[e];
	return t;
}
var WO, GO, KO, qO, JO, YO, XO, ZO, QO, $O = Ve((() => {
	PO(), WO = class {
		parent = null;
		prev = null;
		next = null;
		startIndex = null;
		endIndex = null;
		get parentNode() {
			return this.parent;
		}
		set parentNode(e) {
			this.parent = e;
		}
		get previousSibling() {
			return this.prev;
		}
		set previousSibling(e) {
			this.prev = e;
		}
		get nextSibling() {
			return this.next;
		}
		set nextSibling(e) {
			this.next = e;
		}
		cloneNode(e = !1) {
			return HO(this, e);
		}
	}, GO = class extends WO {
		data;
		constructor(e) {
			super(), this.data = e;
		}
		get nodeValue() {
			return this.data;
		}
		set nodeValue(e) {
			this.data = e;
		}
	}, KO = class extends GO {
		type = NO.Text;
		get nodeType() {
			return 3;
		}
	}, qO = class extends GO {
		type = NO.Comment;
		get nodeType() {
			return 8;
		}
	}, JO = class extends GO {
		type = NO.Directive;
		name;
		constructor(e, t) {
			super(t), this.name = e;
		}
		get nodeType() {
			return 1;
		}
		"x-name";
		"x-publicId";
		"x-systemId";
	}, YO = class extends WO {
		children;
		constructor(e) {
			super(), this.children = e;
		}
		get firstChild() {
			return this.children[0] ?? null;
		}
		get lastChild() {
			return this.children.length > 0 ? this.children[this.children.length - 1] : null;
		}
		get childNodes() {
			return this.children;
		}
		set childNodes(e) {
			this.children = e;
		}
	}, XO = class extends YO {
		type = NO.CDATA;
		get nodeType() {
			return 4;
		}
	}, ZO = class extends YO {
		type = NO.Root;
		get nodeType() {
			return 9;
		}
	}, QO = class extends YO {
		name;
		attribs;
		type;
		constructor(e, t, n = [], r = e === "script" ? NO.Script : e === "style" ? NO.Style : NO.Tag) {
			super(n), this.name = e, this.attribs = t, this.type = r;
		}
		get nodeType() {
			return 1;
		}
		get tagName() {
			return this.name;
		}
		set tagName(e) {
			this.name = e;
		}
		get attributes() {
			return Object.keys(this.attribs).map((e) => ({
				name: e,
				value: this.attribs[e],
				namespace: this["x-attribsNamespace"]?.[e],
				prefix: this["x-attribsPrefix"]?.[e]
			}));
		}
		namespace;
		"x-attribsNamespace";
		"x-attribsPrefix";
	};
})), ek = /* @__PURE__ */ He({
	CDATA: () => XO,
	Comment: () => qO,
	DataNode: () => GO,
	Document: () => ZO,
	DomHandler: () => nk,
	Element: () => QO,
	Node: () => WO,
	NodeWithChildren: () => YO,
	ProcessingInstruction: () => JO,
	Text: () => KO,
	cloneNode: () => HO,
	default: () => nk,
	hasChildren: () => VO,
	isCDATA: () => IO,
	isComment: () => RO,
	isDirective: () => zO,
	isDocument: () => BO,
	isTag: () => FO,
	isText: () => LO
}), tk, nk, rk = Ve((() => {
	PO(), $O(), $O(), tk = {
		withStartIndices: !1,
		withEndIndices: !1,
		xmlMode: !1
	}, nk = class {
		dom = [];
		root = new ZO(this.dom);
		callback;
		options;
		elementCB;
		done = !1;
		tagStack = [this.root];
		lastNode = null;
		parser = null;
		constructor(e, t, n) {
			typeof t == "function" && (n = t, t = tk), typeof e == "object" && (t = e, e = void 0), this.callback = e ?? null, this.options = t ?? tk, this.elementCB = n ?? null;
		}
		onparserinit(e) {
			this.parser = e;
		}
		onreset() {
			this.dom = [], this.root = new ZO(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
		}
		onend() {
			this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
		}
		onerror(e) {
			this.handleCallback(e);
		}
		onclosetag() {
			this.lastNode = null;
			let e = this.tagStack.pop();
			this.options.withEndIndices && this.parser && (e.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(e);
		}
		onopentag(e, t) {
			let n = this.options.xmlMode ? NO.Tag : void 0, r = new QO(e, t, void 0, n);
			this.addNode(r), this.tagStack.push(r);
		}
		ontext(e) {
			let { lastNode: t } = this;
			if (t && t.type === NO.Text) t.data += e, this.options.withEndIndices && this.parser && (t.endIndex = this.parser.endIndex);
			else {
				let t = new KO(e);
				this.addNode(t), this.lastNode = t;
			}
		}
		oncomment(e) {
			if (this.lastNode && this.lastNode.type === NO.Comment) {
				this.lastNode.data += e;
				return;
			}
			let t = new qO(e);
			this.addNode(t), this.lastNode = t;
		}
		oncommentend() {
			this.lastNode = null;
		}
		oncdatastart() {
			let e = new KO(""), t = new XO([e]);
			this.addNode(t), e.parent = t, this.lastNode = e;
		}
		oncdataend() {
			this.lastNode = null;
		}
		onprocessinginstruction(e, t) {
			let n = new JO(e, t);
			this.addNode(n);
		}
		handleCallback(e) {
			if (typeof this.callback == "function") this.callback(e, this.dom);
			else if (e) throw e;
		}
		addNode(e) {
			let t = this.tagStack[this.tagStack.length - 1], n = t.children[t.children.length - 1];
			this.options.withStartIndices && this.parser && (e.startIndex = this.parser.startIndex), this.options.withEndIndices && this.parser && (e.endIndex = this.parser.endIndex), t.children.push(e), n && (e.prev = n, n.next = e), e.parent = t, this.lastNode = null;
		}
	};
})), ik = /* @__PURE__ */ I(((e) => {
	var t = jO(), n = (rk(), Ge(ek)), r = "\r", i = new RegExp(r, "g"), a = `__HTML_DOM_PARSER_CARRIAGE_RETURN_PLACEHOLDER_${Date.now().toString()}__`, o = new RegExp(a, "g");
	function s(e) {
		return t.CASE_SENSITIVE_TAG_NAMES_MAP[e];
	}
	function c(e) {
		let t = {}, n = 0, r = e.length;
		for (; n < r; n++) {
			let r = e[n];
			t[r.name] = r.value;
		}
		return t;
	}
	function l(e) {
		return e = e.toLowerCase(), s(e) || e;
	}
	function u(e, t) {
		let n = "<" + t, r = e.toLowerCase().indexOf(n);
		if (r === -1) return !1;
		let i = e[r + n.length];
		return i === ">" || i === " " || i === "	" || i === "\n" || i === "\r" || i === "/";
	}
	function d(e) {
		return e.replace(i, a);
	}
	function f(e) {
		return e.replace(o, r);
	}
	function p(e, t = null, r) {
		let i = [], a, o = 0, s = e.length;
		for (; o < s; o++) {
			let r = e[o];
			switch (r.nodeType) {
				case 1: {
					let e = l(r.nodeName);
					a = new n.Element(e, c(r.attributes)), a.children = p(e === "template" ? r.content.childNodes : r.childNodes, a);
					break;
				}
				/* v8 ignore start */
				case 3:
					a = new n.Text(f(r.nodeValue ?? ""));
					break;
				case 8:
					a = new n.Comment(r.nodeValue ?? "");
					break;
				/* v8 ignore stop */
				default: continue;
			}
			let s = i[o - 1] ?? null;
			s && (s.next = a), a.parent = t, a.prev = s, a.next = null, i.push(a);
		}
		return r && (a = new n.ProcessingInstruction(r.substring(0, r.indexOf(" ")).toLowerCase(), r), a.next = i[0] ?? null, a.parent = t, i.unshift(a), i[1] && (i[1].prev = i[0])), i;
	}
	e.escapeSpecialCharacters = d, e.formatDOM = p, e.hasOpenTag = u;
})), ak = /* @__PURE__ */ I(((e) => {
	var t = ik(), n = "html", r = "head", i = "body", a = /<([a-zA-Z]+[0-9]?)/;
	function o(e, t) {
		return t ? t.createHTML(e) : e;
	}
	/* v8 ignore start */
	var s = (e, t, n) => {
		throw Error("This browser does not support `document.implementation.createHTMLDocument`");
	}, c = (e, t, n) => {
		throw Error("This browser does not support `DOMParser.prototype.parseFromString`");
	}, l = typeof window == "object" && window.DOMParser;
	if (typeof l == "function") {
		let e = new l();
		c = (t, n, r) => (n && (t = `<${n}>${t}</${n}>`), e.parseFromString(t, "text/html")), s = c;
	}
	if (typeof document == "object" && document.implementation) {
		let e = document.implementation.createHTMLDocument();
		s = function(t, n, r) {
			if (n) {
				let i = e.documentElement.querySelector(n);
				return i && (i.innerHTML = o(t, r)), e;
			}
			return e.documentElement.innerHTML = o(t, r), e;
		};
	}
	var u = typeof document == "object" && document.createElement("template"), d;
	u && u.content && (d = (e, t) => (u.innerHTML = o(e, t), u.content.childNodes));
	var f = () => document.createDocumentFragment().childNodes;
	/* v8 ignore stop */
	function p(e, o) {
		e = t.escapeSpecialCharacters(e);
		let l = a.exec(e)?.[1]?.toLowerCase();
		switch (l) {
			case n: {
				let a = c(e);
				if (!t.hasOpenTag(e, r)) {
					let e = a.querySelector(r);
					e?.parentNode?.removeChild(e);
				}
				if (!t.hasOpenTag(e, i)) {
					let e = a.querySelector(i);
					e?.parentNode?.removeChild(e);
				}
				return a.querySelectorAll(n);
			}
			case r:
			case i: {
				let n = s(e, void 0, o).querySelectorAll(l);
				return t.hasOpenTag(e, i) && t.hasOpenTag(e, r) ? n[0].parentNode?.childNodes ?? f() : n;
			}
			/* v8 ignore start */
			default: return d ? d(e, o) : s(e, i, o).querySelector(i)?.childNodes ?? f();
		}
	}
	e.default = p;
})), ok = /* @__PURE__ */ I(((e) => {
	Object.defineProperties(e, {
		__esModule: { value: !0 },
		[Symbol.toStringTag]: { value: "Module" }
	});
	var t = ik(), n = ak(), r = /<(![a-zA-Z\s]+)>/;
	function i(e, i) {
		if (typeof e != "string") throw TypeError("First argument must be a string");
		if (!e) return [];
		let a = r.exec(e), o = a ? a[1] : void 0;
		return t.formatDOM(n.default(e, i?.trustedTypePolicy), null, o);
	}
	e.default = i;
})), sk = /* @__PURE__ */ I(((e) => {
	e.SAME = 0, e.CAMELCASE = 1, e.possibleStandardNames = {
		accept: 0,
		acceptCharset: 1,
		"accept-charset": "acceptCharset",
		accessKey: 1,
		action: 0,
		allowFullScreen: 1,
		alt: 0,
		as: 0,
		async: 0,
		autoCapitalize: 1,
		autoComplete: 1,
		autoCorrect: 1,
		autoFocus: 1,
		autoPlay: 1,
		autoSave: 1,
		capture: 0,
		cellPadding: 1,
		cellSpacing: 1,
		challenge: 0,
		charSet: 1,
		checked: 0,
		children: 0,
		cite: 0,
		class: "className",
		classID: 1,
		className: 1,
		cols: 0,
		colSpan: 1,
		content: 0,
		contentEditable: 1,
		contextMenu: 1,
		controls: 0,
		controlsList: 1,
		coords: 0,
		crossOrigin: 1,
		dangerouslySetInnerHTML: 1,
		data: 0,
		dateTime: 1,
		default: 0,
		defaultChecked: 1,
		defaultValue: 1,
		defer: 0,
		dir: 0,
		disabled: 0,
		disablePictureInPicture: 1,
		disableRemotePlayback: 1,
		download: 0,
		draggable: 0,
		encType: 1,
		enterKeyHint: 1,
		for: "htmlFor",
		form: 0,
		formMethod: 1,
		formAction: 1,
		formEncType: 1,
		formNoValidate: 1,
		formTarget: 1,
		frameBorder: 1,
		headers: 0,
		height: 0,
		hidden: 0,
		high: 0,
		href: 0,
		hrefLang: 1,
		htmlFor: 1,
		httpEquiv: 1,
		"http-equiv": "httpEquiv",
		icon: 0,
		id: 0,
		innerHTML: 1,
		inputMode: 1,
		integrity: 0,
		is: 0,
		itemID: 1,
		itemProp: 1,
		itemRef: 1,
		itemScope: 1,
		itemType: 1,
		keyParams: 1,
		keyType: 1,
		kind: 0,
		label: 0,
		lang: 0,
		list: 0,
		loop: 0,
		low: 0,
		manifest: 0,
		marginWidth: 1,
		marginHeight: 1,
		max: 0,
		maxLength: 1,
		media: 0,
		mediaGroup: 1,
		method: 0,
		min: 0,
		minLength: 1,
		multiple: 0,
		muted: 0,
		name: 0,
		noModule: 1,
		nonce: 0,
		noValidate: 1,
		open: 0,
		optimum: 0,
		pattern: 0,
		placeholder: 0,
		playsInline: 1,
		poster: 0,
		preload: 0,
		profile: 0,
		radioGroup: 1,
		readOnly: 1,
		referrerPolicy: 1,
		rel: 0,
		required: 0,
		reversed: 0,
		role: 0,
		rows: 0,
		rowSpan: 1,
		sandbox: 0,
		scope: 0,
		scoped: 0,
		scrolling: 0,
		seamless: 0,
		selected: 0,
		shape: 0,
		size: 0,
		sizes: 0,
		span: 0,
		spellCheck: 1,
		src: 0,
		srcDoc: 1,
		srcLang: 1,
		srcSet: 1,
		start: 0,
		step: 0,
		style: 0,
		summary: 0,
		tabIndex: 1,
		target: 0,
		title: 0,
		type: 0,
		useMap: 1,
		value: 0,
		width: 0,
		wmode: 0,
		wrap: 0,
		about: 0,
		accentHeight: 1,
		"accent-height": "accentHeight",
		accumulate: 0,
		additive: 0,
		alignmentBaseline: 1,
		"alignment-baseline": "alignmentBaseline",
		allowReorder: 1,
		alphabetic: 0,
		amplitude: 0,
		arabicForm: 1,
		"arabic-form": "arabicForm",
		ascent: 0,
		attributeName: 1,
		attributeType: 1,
		autoReverse: 1,
		azimuth: 0,
		baseFrequency: 1,
		baselineShift: 1,
		"baseline-shift": "baselineShift",
		baseProfile: 1,
		bbox: 0,
		begin: 0,
		bias: 0,
		by: 0,
		calcMode: 1,
		capHeight: 1,
		"cap-height": "capHeight",
		clip: 0,
		clipPath: 1,
		"clip-path": "clipPath",
		clipPathUnits: 1,
		clipRule: 1,
		"clip-rule": "clipRule",
		color: 0,
		colorInterpolation: 1,
		"color-interpolation": "colorInterpolation",
		colorInterpolationFilters: 1,
		"color-interpolation-filters": "colorInterpolationFilters",
		colorProfile: 1,
		"color-profile": "colorProfile",
		colorRendering: 1,
		"color-rendering": "colorRendering",
		contentScriptType: 1,
		contentStyleType: 1,
		cursor: 0,
		cx: 0,
		cy: 0,
		d: 0,
		datatype: 0,
		decelerate: 0,
		descent: 0,
		diffuseConstant: 1,
		direction: 0,
		display: 0,
		divisor: 0,
		dominantBaseline: 1,
		"dominant-baseline": "dominantBaseline",
		dur: 0,
		dx: 0,
		dy: 0,
		edgeMode: 1,
		elevation: 0,
		enableBackground: 1,
		"enable-background": "enableBackground",
		end: 0,
		exponent: 0,
		externalResourcesRequired: 1,
		fill: 0,
		fillOpacity: 1,
		"fill-opacity": "fillOpacity",
		fillRule: 1,
		"fill-rule": "fillRule",
		filter: 0,
		filterRes: 1,
		filterUnits: 1,
		floodOpacity: 1,
		"flood-opacity": "floodOpacity",
		floodColor: 1,
		"flood-color": "floodColor",
		focusable: 0,
		fontFamily: 1,
		"font-family": "fontFamily",
		fontSize: 1,
		"font-size": "fontSize",
		fontSizeAdjust: 1,
		"font-size-adjust": "fontSizeAdjust",
		fontStretch: 1,
		"font-stretch": "fontStretch",
		fontStyle: 1,
		"font-style": "fontStyle",
		fontVariant: 1,
		"font-variant": "fontVariant",
		fontWeight: 1,
		"font-weight": "fontWeight",
		format: 0,
		from: 0,
		fx: 0,
		fy: 0,
		g1: 0,
		g2: 0,
		glyphName: 1,
		"glyph-name": "glyphName",
		glyphOrientationHorizontal: 1,
		"glyph-orientation-horizontal": "glyphOrientationHorizontal",
		glyphOrientationVertical: 1,
		"glyph-orientation-vertical": "glyphOrientationVertical",
		glyphRef: 1,
		gradientTransform: 1,
		gradientUnits: 1,
		hanging: 0,
		horizAdvX: 1,
		"horiz-adv-x": "horizAdvX",
		horizOriginX: 1,
		"horiz-origin-x": "horizOriginX",
		ideographic: 0,
		imageRendering: 1,
		"image-rendering": "imageRendering",
		in2: 0,
		in: 0,
		inlist: 0,
		intercept: 0,
		k1: 0,
		k2: 0,
		k3: 0,
		k4: 0,
		k: 0,
		kernelMatrix: 1,
		kernelUnitLength: 1,
		kerning: 0,
		keyPoints: 1,
		keySplines: 1,
		keyTimes: 1,
		lengthAdjust: 1,
		letterSpacing: 1,
		"letter-spacing": "letterSpacing",
		lightingColor: 1,
		"lighting-color": "lightingColor",
		limitingConeAngle: 1,
		local: 0,
		markerEnd: 1,
		"marker-end": "markerEnd",
		markerHeight: 1,
		markerMid: 1,
		"marker-mid": "markerMid",
		markerStart: 1,
		"marker-start": "markerStart",
		markerUnits: 1,
		markerWidth: 1,
		mask: 0,
		maskContentUnits: 1,
		maskUnits: 1,
		mathematical: 0,
		mode: 0,
		numOctaves: 1,
		offset: 0,
		opacity: 0,
		operator: 0,
		order: 0,
		orient: 0,
		orientation: 0,
		origin: 0,
		overflow: 0,
		overlinePosition: 1,
		"overline-position": "overlinePosition",
		overlineThickness: 1,
		"overline-thickness": "overlineThickness",
		paintOrder: 1,
		"paint-order": "paintOrder",
		panose1: 0,
		"panose-1": "panose1",
		pathLength: 1,
		patternContentUnits: 1,
		patternTransform: 1,
		patternUnits: 1,
		pointerEvents: 1,
		"pointer-events": "pointerEvents",
		points: 0,
		pointsAtX: 1,
		pointsAtY: 1,
		pointsAtZ: 1,
		prefix: 0,
		preserveAlpha: 1,
		preserveAspectRatio: 1,
		primitiveUnits: 1,
		property: 0,
		r: 0,
		radius: 0,
		refX: 1,
		refY: 1,
		renderingIntent: 1,
		"rendering-intent": "renderingIntent",
		repeatCount: 1,
		repeatDur: 1,
		requiredExtensions: 1,
		requiredFeatures: 1,
		resource: 0,
		restart: 0,
		result: 0,
		results: 0,
		rotate: 0,
		rx: 0,
		ry: 0,
		scale: 0,
		security: 0,
		seed: 0,
		shapeRendering: 1,
		"shape-rendering": "shapeRendering",
		slope: 0,
		spacing: 0,
		specularConstant: 1,
		specularExponent: 1,
		speed: 0,
		spreadMethod: 1,
		startOffset: 1,
		stdDeviation: 1,
		stemh: 0,
		stemv: 0,
		stitchTiles: 1,
		stopColor: 1,
		"stop-color": "stopColor",
		stopOpacity: 1,
		"stop-opacity": "stopOpacity",
		strikethroughPosition: 1,
		"strikethrough-position": "strikethroughPosition",
		strikethroughThickness: 1,
		"strikethrough-thickness": "strikethroughThickness",
		string: 0,
		stroke: 0,
		strokeDasharray: 1,
		"stroke-dasharray": "strokeDasharray",
		strokeDashoffset: 1,
		"stroke-dashoffset": "strokeDashoffset",
		strokeLinecap: 1,
		"stroke-linecap": "strokeLinecap",
		strokeLinejoin: 1,
		"stroke-linejoin": "strokeLinejoin",
		strokeMiterlimit: 1,
		"stroke-miterlimit": "strokeMiterlimit",
		strokeWidth: 1,
		"stroke-width": "strokeWidth",
		strokeOpacity: 1,
		"stroke-opacity": "strokeOpacity",
		suppressContentEditableWarning: 1,
		suppressHydrationWarning: 1,
		surfaceScale: 1,
		systemLanguage: 1,
		tableValues: 1,
		targetX: 1,
		targetY: 1,
		textAnchor: 1,
		"text-anchor": "textAnchor",
		textDecoration: 1,
		"text-decoration": "textDecoration",
		textLength: 1,
		textRendering: 1,
		"text-rendering": "textRendering",
		to: 0,
		transform: 0,
		typeof: 0,
		u1: 0,
		u2: 0,
		underlinePosition: 1,
		"underline-position": "underlinePosition",
		underlineThickness: 1,
		"underline-thickness": "underlineThickness",
		unicode: 0,
		unicodeBidi: 1,
		"unicode-bidi": "unicodeBidi",
		unicodeRange: 1,
		"unicode-range": "unicodeRange",
		unitsPerEm: 1,
		"units-per-em": "unitsPerEm",
		unselectable: 0,
		vAlphabetic: 1,
		"v-alphabetic": "vAlphabetic",
		values: 0,
		vectorEffect: 1,
		"vector-effect": "vectorEffect",
		version: 0,
		vertAdvY: 1,
		"vert-adv-y": "vertAdvY",
		vertOriginX: 1,
		"vert-origin-x": "vertOriginX",
		vertOriginY: 1,
		"vert-origin-y": "vertOriginY",
		vHanging: 1,
		"v-hanging": "vHanging",
		vIdeographic: 1,
		"v-ideographic": "vIdeographic",
		viewBox: 1,
		viewTarget: 1,
		visibility: 0,
		vMathematical: 1,
		"v-mathematical": "vMathematical",
		vocab: 0,
		widths: 0,
		wordSpacing: 1,
		"word-spacing": "wordSpacing",
		writingMode: 1,
		"writing-mode": "writingMode",
		x1: 0,
		x2: 0,
		x: 0,
		xChannelSelector: 1,
		xHeight: 1,
		"x-height": "xHeight",
		xlinkActuate: 1,
		"xlink:actuate": "xlinkActuate",
		xlinkArcrole: 1,
		"xlink:arcrole": "xlinkArcrole",
		xlinkHref: 1,
		"xlink:href": "xlinkHref",
		xlinkRole: 1,
		"xlink:role": "xlinkRole",
		xlinkShow: 1,
		"xlink:show": "xlinkShow",
		xlinkTitle: 1,
		"xlink:title": "xlinkTitle",
		xlinkType: 1,
		"xlink:type": "xlinkType",
		xmlBase: 1,
		"xml:base": "xmlBase",
		xmlLang: 1,
		"xml:lang": "xmlLang",
		xmlns: 0,
		"xml:space": "xmlSpace",
		xmlnsXlink: 1,
		"xmlns:xlink": "xmlnsXlink",
		xmlSpace: 1,
		y1: 0,
		y2: 0,
		y: 0,
		yChannelSelector: 1,
		z: 0,
		zoomAndPan: 1
	};
})), ck = /* @__PURE__ */ I(((e) => {
	var t = 0, n = 1, r = 2, i = 3, a = 4, o = 5, s = 6;
	function c(e) {
		return u.hasOwnProperty(e) ? u[e] : null;
	}
	function l(e, t, n, o, s, c, l) {
		this.acceptsBooleans = t === r || t === i || t === a, this.attributeName = o, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = c, this.removeEmptyString = l;
	}
	var u = {};
	[
		"children",
		"dangerouslySetInnerHTML",
		"defaultValue",
		"defaultChecked",
		"innerHTML",
		"suppressContentEditableWarning",
		"suppressHydrationWarning",
		"style"
	].forEach((e) => {
		u[e] = new l(e, t, !1, e, null, !1, !1);
	}), [
		["acceptCharset", "accept-charset"],
		["className", "class"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"]
	].forEach(([e, t]) => {
		u[e] = new l(e, n, !1, t, null, !1, !1);
	}), [
		"contentEditable",
		"draggable",
		"spellCheck",
		"value"
	].forEach((e) => {
		u[e] = new l(e, r, !1, e.toLowerCase(), null, !1, !1);
	}), [
		"autoReverse",
		"externalResourcesRequired",
		"focusable",
		"preserveAlpha"
	].forEach((e) => {
		u[e] = new l(e, r, !1, e, null, !1, !1);
	}), [
		"allowFullScreen",
		"async",
		"autoFocus",
		"autoPlay",
		"controls",
		"default",
		"defer",
		"disabled",
		"disablePictureInPicture",
		"disableRemotePlayback",
		"formNoValidate",
		"hidden",
		"loop",
		"noModule",
		"noValidate",
		"open",
		"playsInline",
		"readOnly",
		"required",
		"reversed",
		"scoped",
		"seamless",
		"itemScope"
	].forEach((e) => {
		u[e] = new l(e, i, !1, e.toLowerCase(), null, !1, !1);
	}), [
		"checked",
		"multiple",
		"muted",
		"selected"
	].forEach((e) => {
		u[e] = new l(e, i, !0, e, null, !1, !1);
	}), ["capture", "download"].forEach((e) => {
		u[e] = new l(e, a, !1, e, null, !1, !1);
	}), [
		"cols",
		"rows",
		"size",
		"span"
	].forEach((e) => {
		u[e] = new l(e, s, !1, e, null, !1, !1);
	}), ["rowSpan", "start"].forEach((e) => {
		u[e] = new l(e, o, !1, e.toLowerCase(), null, !1, !1);
	});
	var d = /[\-\:]([a-z])/g, f = (e) => e[1].toUpperCase();
	(/* @__PURE__ */ "accent-height.alignment-baseline.arabic-form.baseline-shift.cap-height.clip-path.clip-rule.color-interpolation.color-interpolation-filters.color-profile.color-rendering.dominant-baseline.enable-background.fill-opacity.fill-rule.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.glyph-name.glyph-orientation-horizontal.glyph-orientation-vertical.horiz-adv-x.horiz-origin-x.image-rendering.letter-spacing.lighting-color.marker-end.marker-mid.marker-start.overline-position.overline-thickness.paint-order.panose-1.pointer-events.rendering-intent.shape-rendering.stop-color.stop-opacity.strikethrough-position.strikethrough-thickness.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke-width.text-anchor.text-decoration.text-rendering.underline-position.underline-thickness.unicode-bidi.unicode-range.units-per-em.v-alphabetic.v-hanging.v-ideographic.v-mathematical.vector-effect.vert-adv-y.vert-origin-x.vert-origin-y.word-spacing.writing-mode.xmlns:xlink.x-height".split(".")).forEach((e) => {
		let t = e.replace(d, f);
		u[t] = new l(t, n, !1, e, null, !1, !1);
	}), [
		"xlink:actuate",
		"xlink:arcrole",
		"xlink:role",
		"xlink:show",
		"xlink:title",
		"xlink:type"
	].forEach((e) => {
		let t = e.replace(d, f);
		u[t] = new l(t, n, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
	}), [
		"xml:base",
		"xml:lang",
		"xml:space"
	].forEach((e) => {
		let t = e.replace(d, f);
		u[t] = new l(t, n, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
	}), ["tabIndex", "crossOrigin"].forEach((e) => {
		u[e] = new l(e, n, !1, e.toLowerCase(), null, !1, !1);
	});
	var p = "xlinkHref";
	u[p] = new l("xlinkHref", n, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), [
		"src",
		"href",
		"action",
		"formAction"
	].forEach((e) => {
		u[e] = new l(e, n, !1, e.toLowerCase(), null, !0, !0);
	});
	var { CAMELCASE: m, SAME: h, possibleStandardNames: g } = sk(), _ = RegExp.prototype.test.bind(/* @__PURE__ */ RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")), v = Object.keys(g).reduce((e, t) => {
		let n = g[t];
		return n === h ? e[t] = t : n === m ? e[t.toLowerCase()] = t : e[t] = n, e;
	}, {});
	e.BOOLEAN = i, e.BOOLEANISH_STRING = r, e.NUMERIC = o, e.OVERLOADED_BOOLEAN = a, e.POSITIVE_NUMERIC = s, e.RESERVED = t, e.STRING = n, e.getPropertyInfo = c, e.isCustomAttribute = _, e.possibleStandardNames = v;
})), lk = /* @__PURE__ */ I(((e, t) => {
	var n = /\/\*(?:[^*]|\*(?!\/))*\*\//g, r = /\n/g, i = /^\s*/, a = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, o = /^:\s*/, s = /^((?:'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|url\((?:'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|[^)]*)\)|[^};])+)/, c = /^[;\s]*/;
	function l(e, t) {
		if (typeof e != "string") throw TypeError("First argument must be a string");
		if (!e) return [];
		t ||= {};
		var l = 1, u = 1;
		function d(e) {
			var t = e.match(r);
			t && (l += t.length);
			var n = e.lastIndexOf("\n");
			u = ~n ? e.length - n : u + e.length;
		}
		function f() {
			var e = {
				line: l,
				column: u
			};
			return function(t) {
				return t.position = new p(e), g(), t;
			};
		}
		function p(e) {
			this.start = e, this.end = {
				line: l,
				column: u
			}, this.source = t.source;
		}
		p.prototype.content = e;
		function m(n) {
			var r = /* @__PURE__ */ Error(t.source + ":" + l + ":" + u + ": " + n);
			if (r.reason = n, r.filename = t.source, r.line = l, r.column = u, r.source = e, !t.silent) throw r;
		}
		function h(t) {
			var n = t.exec(e);
			if (n) {
				var r = n[0];
				return d(r), e = e.slice(r.length), n;
			}
		}
		function g() {
			h(i);
		}
		function _(e) {
			for (var t; t = v();) e.push(t);
			return e;
		}
		function v() {
			var t = f();
			if (e.charAt(0) == "/" && e.charAt(1) == "*") {
				for (var n = 2; e.charAt(n) != "" && (e.charAt(n) != "*" || e.charAt(n + 1) != "/");) ++n;
				if (n += 2, e.charAt(n - 1) === "") return m("End of comment missing");
				var r = e.slice(2, n - 2);
				return u += 2, d(r), e = e.slice(n), u += 2, t({
					type: "comment",
					comment: r
				});
			}
		}
		function y() {
			var e = f(), t = h(a);
			if (t) {
				if (v(), !h(o)) return m("property missing ':'");
				var r = h(s), i = e({
					type: "declaration",
					property: t[0].replace(n, "").trim(),
					value: r ? r[0].replace(n, "").trim() : ""
				});
				return h(c), i;
			}
		}
		function b() {
			var e = [];
			_(e);
			for (var t; t = y();) e.push(t), _(e);
			return e;
		}
		return g(), b();
	}
	t.exports = l;
})), uk = /* @__PURE__ */ I(((e, t) => {
	var n = Object.create, r = Object.defineProperty, i = Object.getOwnPropertyDescriptor, a = Object.getOwnPropertyNames, o = Object.getPrototypeOf, s = Object.prototype.hasOwnProperty, c = (e, t, n, o) => {
		if (t && typeof t == "object" || typeof t == "function") for (var c = a(t), l = 0, u = c.length, d; l < u; l++) d = c[l], !s.call(e, d) && d !== n && r(e, d, {
			get: ((e) => t[e]).bind(null, d),
			enumerable: !(o = i(t, d)) || o.enumerable
		});
		return e;
	}, l = (e, t, i) => (i = e == null ? {} : n(o(e)), c(t || !e || !e.__esModule ? r(i, "default", {
		value: e,
		enumerable: !0
	}) : i, e)), u = lk();
	u = l(u);
	function d(e, t) {
		let n = null;
		if (!e || typeof e != "string") return n;
		let r = (0, u.default)(e), i = typeof t == "function";
		return r.forEach((e) => {
			if (e.type !== "declaration") return;
			let { property: r, value: a } = e;
			i ? t(r, a, e) : a && (n ??= {}, n[r] = a);
		}), n;
	}
	t.exports = d;
})), dk = /* @__PURE__ */ I(((e, t) => {
	var n = Object.create, r = Object.defineProperty, i = Object.getOwnPropertyDescriptor, a = Object.getOwnPropertyNames, o = Object.getPrototypeOf, s = Object.prototype.hasOwnProperty, c = (e, t, n, o) => {
		if (t && typeof t == "object" || typeof t == "function") for (var c = a(t), l = 0, u = c.length, d; l < u; l++) d = c[l], !s.call(e, d) && d !== n && r(e, d, {
			get: ((e) => t[e]).bind(null, d),
			enumerable: !(o = i(t, d)) || o.enumerable
		});
		return e;
	}, l = (e, t, i) => (i = e == null ? {} : n(o(e)), c(t || !e || !e.__esModule ? r(i, "default", {
		value: e,
		enumerable: !0
	}) : i, e)), u = uk();
	u = l(u);
	var d = /^--[a-zA-Z0-9_-]+$/, f = /-([a-z])/g, p = /^[^-]+$/, m = /^-(webkit|moz|ms|o|khtml)-/, h = /^-(ms)-/, g = (e) => !e || p.test(e) || d.test(e), _ = (e, t) => t.toUpperCase(), v = (e, t) => `${t}-`, y = (e, t = {}) => g(e) ? e : (e = e.toLowerCase(), e = t.reactCompat ? e.replace(h, v) : e.replace(m, v), e.replace(f, _));
	function b(e, t) {
		let n = {};
		return !e || typeof e != "string" || (0, u.default)(e, (e, r) => {
			e && r && (n[y(e, t)] = r);
		}), n;
	}
	t.exports = b;
})), fk = /* @__PURE__ */ I(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.returnFirstArg = e.canTextBeChildOfNode = e.ELEMENTS_WITH_NO_TEXT_CHILDREN = e.PRESERVE_CUSTOM_ATTRIBUTES = void 0, e.isCustomComponent = a, e.setStyleProp = s;
	var n = Qd(), r = t(dk()), i = /* @__PURE__ */ new Set([
		"annotation-xml",
		"color-profile",
		"font-face",
		"font-face-src",
		"font-face-uri",
		"font-face-format",
		"font-face-name",
		"missing-glyph"
	]);
	function a(e, t) {
		return e.includes("-") ? !i.has(e) : !!(t && typeof t.is == "string");
	}
	var o = { reactCompat: !0 };
	function s(e, t) {
		if (typeof e == "string") {
			if (!e.trim()) {
				t.style = {};
				return;
			}
			try {
				t.style = (0, r.default)(e, o);
			} catch {
				t.style = {};
			}
		}
	}
	e.PRESERVE_CUSTOM_ATTRIBUTES = Number(n.version.split(".")[0]) >= 16, e.ELEMENTS_WITH_NO_TEXT_CHILDREN = /* @__PURE__ */ new Set([
		"tr",
		"tbody",
		"thead",
		"tfoot",
		"colgroup",
		"table",
		"head",
		"html",
		"frameset"
	]), e.canTextBeChildOfNode = (t) => !e.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(t.name), e.returnFirstArg = (e) => e;
})), pk = /* @__PURE__ */ I(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = o;
	var t = ck(), n = fk(), r = ["checked", "value"], i = [
		"input",
		"select",
		"textarea"
	], a = {
		reset: !0,
		submit: !0
	};
	function o(e = {}, o) {
		let c = {}, l = !!(e.type && a[e.type]);
		for (let a in e) {
			let u = e[a];
			if ((0, t.isCustomAttribute)(a)) {
				c[a] = u;
				continue;
			}
			let d = a.toLowerCase(), f = s(d);
			if (f) {
				let e = (0, t.getPropertyInfo)(f);
				switch (r.includes(f) && i.includes(o) && !l && (f = s("default" + d)), c[f] = u, e?.type) {
					case t.BOOLEAN:
						c[f] = !0;
						break;
					case t.OVERLOADED_BOOLEAN: u === "" && (c[f] = !0);
				}
				continue;
			}
			n.PRESERVE_CUSTOM_ATTRIBUTES && (c[a] = u);
		}
		return (0, n.setStyleProp)(e.style, c), c;
	}
	function s(e) {
		return t.possibleStandardNames[e];
	}
})), mk = /* @__PURE__ */ I(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = s;
	var n = (rk(), Ge(ek)), r = Qd(), i = t(pk()), a = fk(), o = {
		cloneElement: r.cloneElement,
		createElement: r.createElement,
		isValidElement: r.isValidElement
	};
	function s(e, t = {}) {
		let n = [], r = typeof t.replace == "function", u = t.transform ?? a.returnFirstArg, { cloneElement: d, createElement: f, isValidElement: p } = t.library ?? o, m = e.length;
		c(e);
		for (let o = 0; o < m; o++) {
			let c = e[o];
			if (r) {
				let e = t.replace?.call(t, c, o);
				if (p(e)) {
					m > 1 && (e = d(e, { key: e.key ?? o })), n.push(u(e, c, o));
					continue;
				}
			}
			if (c.type === "text") {
				let e = !c.data.trim().length;
				if (e && c.parent && !(0, a.canTextBeChildOfNode)(c.parent) || t.trim && e) continue;
				n.push(u(c.data, c, o));
				continue;
			}
			let h = c, g = {};
			l(h) ? ((0, a.setStyleProp)(h.attribs.style, h.attribs), g = h.attribs) : h.attribs && (g = (0, i.default)(h.attribs, h.name));
			let _;
			switch (c.type) {
				case "script":
				case "style":
					c.children[0] && (g.dangerouslySetInnerHTML = { __html: c.children[0].data });
					break;
				case "tag":
					c.name === "textarea" && c.children[0] ? g.defaultValue = c.children[0].data : c.children?.length && (_ = s(c.children, t));
					break;
				default: continue;
			}
			m > 1 && (g.key = o), n.push(u(f(c.name, g, _), c, o));
		}
		return n.length === 1 ? n[0] : n;
	}
	function c(e) {
		for (let t of e) (t.type === "tag" || t.type === "script" || t.type === "style") && (Object.setPrototypeOf(t, n.Element.prototype), c(t.children));
	}
	function l(e) {
		return a.PRESERVE_CUSTOM_ATTRIBUTES && e.type === "tag" && (0, a.isCustomComponent)(e.name, e.attribs);
	}
})), hk = /* @__PURE__ */ We((/* @__PURE__ */ I(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.htmlToDOM = e.domToReact = e.attributesToProps = e.Text = e.ProcessingInstruction = e.Element = e.Comment = void 0, e.default = o;
	var n = t(ok());
	e.htmlToDOM = n.default, e.attributesToProps = t(pk()).default;
	var r = t(mk());
	e.domToReact = r.default;
	var i = (rk(), Ge(ek));
	Object.defineProperty(e, "Comment", {
		enumerable: !0,
		get: function() {
			return i.Comment;
		}
	}), Object.defineProperty(e, "Element", {
		enumerable: !0,
		get: function() {
			return i.Element;
		}
	}), Object.defineProperty(e, "ProcessingInstruction", {
		enumerable: !0,
		get: function() {
			return i.ProcessingInstruction;
		}
	}), Object.defineProperty(e, "Text", {
		enumerable: !0,
		get: function() {
			return i.Text;
		}
	});
	var a = { lowerCaseAttributeNames: !1 };
	function o(e, t) {
		if (typeof e != "string") throw TypeError("First argument must be a string");
		if (!e) return [];
		let i = Object.assign(Object.assign({}, t?.htmlparser2 ?? a), { trustedTypePolicy: t?.trustedTypePolicy });
		return (0, r.default)((0, n.default)(e, i), t);
	}
})))(), 1), gk = hk.default.default || hk.default;
//#endregion
//#region src/core/utils/applyReplacerOnString.ts
function _k(e, t) {
	return t ? (Array.isArray(e) ? e : [e]).map((e, n) => typeof e == "string" && t(new hk.Text(e), 0) || e) : e;
}
//#endregion
//#region src/room/timeline/event-tile/body/EventContentBodyView/EventContentBodyView.tsx
var vk = p(function({ vm: e, as: t, ref: n }) {
	let { body: r, formattedBody: i, replacer: a, className: o, dir: s, parseFormattedBody: c } = H(e), l = i ? (c ?? ((e, t) => gk(e, t ? { replace: t } : void 0)))(i, a) : _k(r, a);
	return t === "span" ? /* @__PURE__ */ (0, z.jsx)("span", {
		ref: n,
		className: o,
		dir: s,
		children: l
	}) : /* @__PURE__ */ (0, z.jsx)("div", {
		ref: n,
		className: o,
		dir: s,
		children: l
	});
}), yk = {
	content: "_content_1wtpw_8",
	icon: "_icon_1wtpw_17"
};
//#endregion
//#region src/room/timeline/event-tile/body/HiddenBodyView/HiddenBodyView.tsx
function bk({ vm: e, className: t, ref: n }) {
	let { reason: r } = H(e), i = B().translate, a = r ? i("timeline|pending_moderation_reason", { reason: r }) : i("timeline|pending_moderation");
	return /* @__PURE__ */ (0, z.jsxs)("span", {
		className: (0, R.default)(yk.content, t),
		ref: n,
		children: [/* @__PURE__ */ (0, z.jsx)(Sw, {
			className: yk.icon,
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, z.jsx)(P, {
			as: "span",
			children: a
		})]
	});
}
var xk = {
	button: "_button_1ync4_8",
	content: "_content_1ync4_27",
	icon: "_icon_1ync4_34"
};
//#endregion
//#region src/room/timeline/event-tile/body/HiddenMediaPlaceholder/HiddenMediaPlaceholder.tsx
function Sk({ className: e, onClick: t, children: n }) {
	return /* @__PURE__ */ (0, z.jsx)("button", {
		type: "button",
		onClick: t,
		className: (0, R.default)(xk.button, e),
		children: /* @__PURE__ */ (0, z.jsxs)("span", {
			className: xk.content,
			children: [/* @__PURE__ */ (0, z.jsx)(ww, {
				className: xk.icon,
				"aria-hidden": "true"
			}), /* @__PURE__ */ (0, z.jsx)("span", { children: n })]
		})
	});
}
var Ck = {
	content: "_content_1xhpr_8",
	icon: "_icon_1xhpr_17"
};
//#endregion
//#region src/room/timeline/event-tile/body/RedactedBodyView/RedactedBodyView.tsx
function wk({ vm: e, className: t, ref: n }) {
	let { text: r, tooltip: i } = H(e), a = /* @__PURE__ */ (0, z.jsxs)("span", {
		className: (0, R.default)(Ck.content, t),
		ref: n,
		children: [/* @__PURE__ */ (0, z.jsx)(OS, {
			className: Ck.icon,
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, z.jsx)("span", { children: r })]
	});
	return i ? /* @__PURE__ */ (0, z.jsx)(F, {
		description: i,
		children: a
	}) : a;
}
var Tk = {
	content: "_content_bibip_8",
	invalid: "_invalid_bibip_73"
}, Ek = { mediaBody: "_mediaBody_14jys_8" };
//#endregion
//#region src/room/timeline/event-tile/body/MediaBody/MediaBody.tsx
function Dk({ as: e, className: t, children: n, ...r }) {
	return /* @__PURE__ */ (0, z.jsx)(e || "div", {
		className: (0, R.default)("mx_MediaBody", Ek.mediaBody, t),
		...r,
		children: n
	});
}
//#endregion
//#region src/room/timeline/event-tile/body/MFileBodyView/FileBodyView.tsx
var Ok = /* @__PURE__ */ function(e) {
	return e.EXPORT = "EXPORT", e.DECRYPTION_PENDING = "DECRYPTION_PENDING", e.ENCRYPTED = "ENCRYPTED", e.UNENCRYPTED = "UNENCRYPTED", e.INVALID = "INVALID", e;
}({}), kk = /* @__PURE__ */ function(e) {
	return e.ATTACHMENT = "ATTACHMENT", e.AUDIO = "AUDIO", e.DOWNLOAD = "DOWNLOAD", e.VIDEO = "VIDEO", e;
}({});
function Ak(e) {
	return e === "AUDIO" ? Aw : e === "DOWNLOAD" ? PS : e === "VIDEO" ? vw : nS;
}
function jk({ vm: e, refIFrame: t, refLink: n, className: r }) {
	let { translate: i } = B(), { state: a, showInfo: o, infoLabel: s, infoTooltip: c, infoIcon: l, infoHref: u, showDownload: d, downloadLabel: f, downloadTitle: p, downloadHref: m } = H(e), h = s ?? i("common|attachment"), g = c ?? h, _ = Ak(l), v = o ? /* @__PURE__ */ (0, z.jsx)(F, {
		description: g,
		placement: "right",
		children: /* @__PURE__ */ (0, z.jsx)(Dk, {
			"data-type": "info",
			children: /* @__PURE__ */ (0, z.jsx)(k, {
				as: "button",
				size: "md",
				kind: "secondary",
				"aria-label": h,
				Icon: _,
				onClick: e.onInfoClick,
				children: /* @__PURE__ */ (0, z.jsx)("span", { children: h })
			})
		})
	}) : null, y = (0, R.default)(Tk.content, r), b = f ?? i("action|download"), x = p ?? b;
	switch (a) {
		case "EXPORT": return /* @__PURE__ */ (0, z.jsx)("span", {
			className: y,
			children: /* @__PURE__ */ (0, z.jsx)("a", {
				href: u,
				children: v
			})
		});
		case "DECRYPTION_PENDING": return /* @__PURE__ */ (0, z.jsxs)("span", {
			className: y,
			children: [v, d && /* @__PURE__ */ (0, z.jsx)("div", {
				"data-type": "download",
				children: /* @__PURE__ */ (0, z.jsx)(k, {
					size: "md",
					kind: "secondary",
					Icon: PS,
					onClick: e.onDownloadClick,
					children: b
				})
			})]
		});
		case "ENCRYPTED": return /* @__PURE__ */ (0, z.jsxs)("span", {
			className: y,
			children: [v, d && /* @__PURE__ */ (0, z.jsxs)("div", {
				"data-type": "download",
				children: [/* @__PURE__ */ (0, z.jsx)("div", {
					"aria-hidden": !0,
					style: { display: "none" },
					children: /* @__PURE__ */ (0, z.jsx)(k, {
						size: "md",
						kind: "secondary",
						Icon: PS,
						as: "a",
						ref: n
					})
				}), /* @__PURE__ */ (0, z.jsx)("iframe", {
					"aria-hidden": !0,
					title: x,
					src: "usercontent/",
					onLoad: e.onDownloadIframeLoad,
					ref: t,
					sandbox: "allow-scripts allow-downloads"
				})]
			})]
		});
		case "UNENCRYPTED": return /* @__PURE__ */ (0, z.jsxs)("span", {
			className: y,
			children: [v, d && /* @__PURE__ */ (0, z.jsx)("div", {
				"data-type": "download",
				children: /* @__PURE__ */ (0, z.jsx)(k, {
					size: "md",
					kind: "secondary",
					Icon: PS,
					as: "a",
					href: m,
					target: "_blank",
					rel: "noreferrer noopener",
					onClick: e.onDownloadLinkClick,
					children: b
				})
			})]
		});
		default: return /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [/* @__PURE__ */ (0, z.jsx)("span", {
			className: y,
			children: v
		}), /* @__PURE__ */ (0, z.jsx)("span", {
			className: (0, R.default)(y, Tk.invalid),
			children: i("timeline|m.file|error_invalid")
		})] });
	}
}
//#endregion
//#region ../../node_modules/.pnpm/blurhash@2.0.5/node_modules/blurhash/dist/esm/index.js
var Mk = /* @__PURE__ */ "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%*+,-.:;=?@[]^_{|}~".split(""), Nk = (e) => {
	let t = 0;
	for (let n = 0; n < e.length; n++) {
		let r = e[n], i = Mk.indexOf(r);
		t = t * 83 + i;
	}
	return t;
}, Pk = (e) => {
	let t = e / 255;
	return t <= .04045 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4;
}, Fk = (e) => {
	let t = Math.max(0, Math.min(1, e));
	return Math.trunc(t <= .0031308 ? t * 12.92 * 255 + .5 : (1.055 * t ** .4166666666666667 - .055) * 255 + .5);
}, Ik = (e) => e < 0 ? -1 : 1, Lk = (e, t) => Ik(e) * Math.abs(e) ** +t, Rk = class extends Error {
	constructor(e) {
		super(e), this.name = "ValidationError", this.message = e;
	}
}, zk = (e) => {
	if (!e || e.length < 6) throw new Rk("The blurhash string must be at least 6 characters");
	let t = Nk(e[0]), n = Math.floor(t / 9) + 1, r = t % 9 + 1;
	if (e.length !== 4 + 2 * r * n) throw new Rk(`blurhash length mismatch: length is ${e.length} but it should be ${4 + 2 * r * n}`);
}, Bk = (e) => {
	let t = e >> 16, n = e >> 8 & 255, r = e & 255;
	return [
		Pk(t),
		Pk(n),
		Pk(r)
	];
}, Vk = (e, t) => {
	let n = Math.floor(e / 361), r = Math.floor(e / 19) % 19, i = e % 19;
	return [
		Lk((n - 9) / 9, 2) * t,
		Lk((r - 9) / 9, 2) * t,
		Lk((i - 9) / 9, 2) * t
	];
}, Hk = (e, t, n, r) => {
	zk(e), r |= 1;
	let i = Nk(e[0]), a = Math.floor(i / 9) + 1, o = i % 9 + 1, s = (Nk(e[1]) + 1) / 166, c = Array(o * a);
	for (let t = 0; t < c.length; t++) if (t === 0) {
		let n = Nk(e.substring(2, 6));
		c[t] = Bk(n);
	} else {
		let n = Nk(e.substring(4 + t * 2, 6 + t * 2));
		c[t] = Vk(n, s * r);
	}
	let l = t * 4, u = new Uint8ClampedArray(l * n);
	for (let e = 0; e < n; e++) for (let r = 0; r < t; r++) {
		let i = 0, s = 0, d = 0;
		for (let l = 0; l < a; l++) for (let a = 0; a < o; a++) {
			let u = Math.cos(Math.PI * r * a / t) * Math.cos(Math.PI * e * l / n), f = c[a + l * o];
			i += f[0] * u, s += f[1] * u, d += f[2] * u;
		}
		let f = Fk(i), p = Fk(s), m = Fk(d);
		u[4 * r + 0 + e * l] = f, u[4 * r + 1 + e * l] = p, u[4 * r + 2 + e * l] = m, u[4 * r + 3 + e * l] = 255;
	}
	return u;
}, Uk = Object.defineProperty, Wk = Object.defineProperties, Gk = Object.getOwnPropertyDescriptors, Kk = Object.getOwnPropertySymbols, qk = Object.prototype.hasOwnProperty, Jk = Object.prototype.propertyIsEnumerable, Yk = (e, t, n) => t in e ? Uk(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Xk = (e, t) => {
	for (var n in t ||= {}) qk.call(t, n) && Yk(e, n, t[n]);
	if (Kk) for (var n of Kk(t)) Jk.call(t, n) && Yk(e, n, t[n]);
	return e;
}, Zk = (e, t) => Wk(e, Gk(t)), Qk = (e, t) => {
	var n = {};
	for (var r in e) qk.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && Kk) for (var r of Kk(e)) t.indexOf(r) < 0 && Jk.call(e, r) && (n[r] = e[r]);
	return n;
}, $k = class extends a.PureComponent {
	constructor() {
		super(...arguments), this.canvas = null, this.handleRef = (e) => {
			this.canvas = e, this.draw();
		}, this.draw = () => {
			let { hash: e, height: t, punch: n, width: r } = this.props;
			if (this.canvas) {
				let i = Hk(e, r, t, n), a = this.canvas.getContext("2d"), o = a.createImageData(r, t);
				o.data.set(i), a.putImageData(o, 0, 0);
			}
		};
	}
	componentDidUpdate() {
		this.draw();
	}
	render() {
		let e = this.props, { hash: t, height: n, width: r } = e, i = Qk(e, [
			"hash",
			"height",
			"width"
		]);
		return a.createElement("canvas", Zk(Xk({}, i), {
			height: n,
			width: r,
			ref: this.handleRef
		}));
	}
};
$k.defaultProps = {
	height: 128,
	width: 128
};
var eA = {
	position: "absolute",
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	width: "100%",
	height: "100%"
}, tA = class extends a.PureComponent {
	componentDidUpdate() {
		if (this.props.resolutionX <= 0) throw Error("resolutionX must be larger than zero");
		if (this.props.resolutionY <= 0) throw Error("resolutionY must be larger than zero");
	}
	render() {
		let e = this.props, { hash: t, height: n, width: r, punch: i, resolutionX: o, resolutionY: s, style: c } = e, l = Qk(e, [
			"hash",
			"height",
			"width",
			"punch",
			"resolutionX",
			"resolutionY",
			"style"
		]);
		return a.createElement("div", Zk(Xk({}, l), { style: Zk(Xk({
			display: "inline-block",
			height: n,
			width: r
		}, c), { position: "relative" }) }), a.createElement($k, {
			hash: t,
			height: s,
			width: o,
			punch: i,
			style: eA
		}));
	}
};
tA.defaultProps = {
	height: 128,
	width: 128,
	resolutionX: 32,
	resolutionY: 32
};
var nA = {
	root: "_root_fcacc_8",
	link: "_link_fcacc_15",
	thumbnailContainer: "_thumbnailContainer_fcacc_22",
	placeholder: "_placeholder_fcacc_29",
	placeholderBlurhash: "_placeholderBlurhash_fcacc_39",
	blurhash: "_blurhash_fcacc_43",
	blurhashPulse: "_blurhashPulse_fcacc_1",
	mediaContent: "_mediaContent_fcacc_54",
	image: "_image_fcacc_60",
	banner: "_banner_fcacc_66",
	gifLabel: "_gifLabel_fcacc_83",
	hiddenButton: "_hiddenButton_fcacc_96",
	hiddenButtonContent: "_hiddenButtonContent_fcacc_115",
	error: "_error_fcacc_125",
	errorIcon: "_errorIcon_fcacc_130"
}, rA = /* @__PURE__ */ function(e) {
	return e.ERROR = "ERROR", e.HIDDEN = "HIDDEN", e.READY = "READY", e;
}({}), iA = /* @__PURE__ */ function(e) {
	return e.NONE = "NONE", e.SPINNER = "SPINNER", e.BLURHASH = "BLURHASH", e;
}({});
function aA({ placeholder: e, blurhash: t, maxWidth: n, maxHeight: r, loadingLabel: i }) {
	switch (e) {
		case "BLURHASH": return t ? /* @__PURE__ */ (0, z.jsx)(tA, {
			className: nA.blurhash,
			hash: t,
			width: n ?? 320,
			height: r ?? 240
		}) : /* @__PURE__ */ (0, z.jsx)(ce, {
			"aria-label": i,
			role: "progressbar"
		});
		case "SPINNER": return /* @__PURE__ */ (0, z.jsx)(ce, {
			"aria-label": i,
			role: "progressbar"
		});
		default: return null;
	}
}
function oA({ vm: e, className: t, containerClassName: n, imageClassName: r, imageRef: i, children: a }) {
	let { translate: o } = B(), { state: s, alt: c, errorLabel: l, hiddenButtonLabel: u, src: d, thumbnailSrc: f, showAnimatedContentOnHover: p, placeholder: m = "NONE", blurhash: h, maxWidth: g, maxHeight: _, aspectRatio: v, isSvg: y, gifLabel: b, bannerLabel: x, tooltipLabel: S, linkUrl: C, linkTarget: w } = H(e), [E, ee] = T(!1), [D, te] = T(!1), O = E || D, k = (0, R.default)(t, nA.root), A = (0, R.default)(n, nA.thumbnailContainer), ne = (0, R.default)(r, nA.image);
	if (s === "ERROR") return /* @__PURE__ */ (0, z.jsxs)("span", {
		className: (0, R.default)(k, nA.error),
		children: [/* @__PURE__ */ (0, z.jsx)(oC, {
			className: nA.errorIcon,
			width: "16",
			height: "16"
		}), l]
	});
	let re = O && p && d ? d : f ?? d, j = g === void 0 ? void 0 : `min(100%, ${g}px)`, ie = {
		width: j,
		maxWidth: g,
		maxHeight: _,
		aspectRatio: v
	}, ae = y ? {
		width: j,
		maxWidth: g,
		maxHeight: _
	} : void 0, oe = aA({
		placeholder: m,
		blurhash: h,
		maxWidth: g,
		maxHeight: _,
		loadingLabel: o("common|loading")
	}), M = oe !== null, se = s === "HIDDEN" ? /* @__PURE__ */ (0, z.jsx)("div", {
		style: {
			width: g,
			height: _
		},
		children: /* @__PURE__ */ (0, z.jsx)("button", {
			type: "button",
			className: nA.hiddenButton,
			onClick: e.onHiddenButtonClick,
			children: /* @__PURE__ */ (0, z.jsxs)("div", {
				className: nA.hiddenButtonContent,
				children: [/* @__PURE__ */ (0, z.jsx)(ww, {}), /* @__PURE__ */ (0, z.jsx)("span", { children: u })]
			})
		})
	}) : re ? /* @__PURE__ */ (0, z.jsx)("img", {
		className: ne,
		src: re,
		alt: c,
		ref: i,
		onError: e.onImageError,
		onLoad: e.onImageLoad,
		onMouseEnter: () => ee(!0),
		onMouseLeave: () => ee(!1)
	}) : null, ce = s === "READY" && x && O ? /* @__PURE__ */ (0, z.jsx)("span", {
		className: nA.banner,
		children: x
	}) : null, le = s === "READY" && b && !O ? /* @__PURE__ */ (0, z.jsx)("p", {
		className: nA.gifLabel,
		children: b
	}) : null, ue = /* @__PURE__ */ (0, z.jsxs)("div", {
		className: A,
		style: ie,
		children: [M && /* @__PURE__ */ (0, z.jsx)("div", {
			className: (0, R.default)(nA.placeholder, { [nA.placeholderBlurhash]: m === "BLURHASH" && !!h }),
			children: oe
		}), /* @__PURE__ */ (0, z.jsxs)("div", {
			className: nA.mediaContent,
			style: ae,
			children: [
				se,
				le,
				ce
			]
		})]
	});
	return S && (ue = /* @__PURE__ */ (0, z.jsx)(F, {
		description: S,
		placement: "right",
		isTriggerInteractive: !0,
		children: ue
	})), s === "READY" && C && (ue = /* @__PURE__ */ (0, z.jsx)("a", {
		href: C,
		target: w,
		rel: w === "_blank" ? "noreferrer noopener" : void 0,
		className: nA.link,
		onClick: e.onLinkClick,
		onFocus: () => te(!0),
		onBlur: () => te(!1),
		children: ue
	})), /* @__PURE__ */ (0, z.jsxs)("div", {
		className: k,
		children: [ue, a]
	});
}
var sA = {
	root: "_root_1rkau_8",
	measureImage: "_measureImage_1rkau_13",
	thumbnailContainer: "_thumbnailContainer_1rkau_17",
	placeholder: "_placeholder_1rkau_26",
	spinner: "_spinner_1rkau_35",
	blurhash: "_blurhash_1rkau_44",
	blurhashPulse: "_blurhashPulse_1rkau_1",
	mediaContent: "_mediaContent_1rkau_48",
	image: "_image_1rkau_53",
	banner: "_banner_1rkau_59",
	gifLabel: "_gifLabel_1rkau_76"
}, cA = /* @__PURE__ */ function(e) {
	return e.NONE = "NONE", e.SPINNER = "SPINNER", e.BLURHASH = "BLURHASH", e;
}({});
function lA({ placeholder: e, blurhash: t, maxWidth: n, maxHeight: r, loadingLabel: i }) {
	switch (e) {
		case "BLURHASH": return t ? /* @__PURE__ */ (0, z.jsx)(tA, {
			className: sA.blurhash,
			hash: t,
			width: n ?? 58,
			height: r ?? 44
		}) : /* @__PURE__ */ (0, z.jsx)("div", {
			className: sA.spinner,
			children: /* @__PURE__ */ (0, z.jsx)(ce, {
				size: 32,
				"aria-label": i,
				role: "progressbar"
			})
		});
		case "SPINNER": return /* @__PURE__ */ (0, z.jsx)("div", {
			className: sA.spinner,
			children: /* @__PURE__ */ (0, z.jsx)(ce, {
				size: 32,
				"aria-label": i,
				role: "progressbar"
			})
		});
		default: return null;
	}
}
function uA({ className: e, imageRef: t, src: n, thumbnailSrc: r, alt: i, maxWidth: a, maxHeight: o, aspectRatio: s, isSvg: c, placeholder: l = "NONE", blurhash: u, showAnimatedContentOnHover: d, showImage: f = !0, gifLabel: p, bannerLabel: m, onImageLoad: h, onImageError: g }) {
	let { translate: _ } = B(), [v, y] = T(!1), b = v && d && n ? n : r ?? n;
	if (!b) return /* @__PURE__ */ (0, z.jsx)("div", { className: (0, R.default)(sA.root, e) });
	if (a === void 0 || o === void 0 || s === void 0) return f ? /* @__PURE__ */ (0, z.jsx)("div", {
		className: (0, R.default)(sA.root, e),
		children: /* @__PURE__ */ (0, z.jsx)("img", {
			className: sA.measureImage,
			src: b,
			ref: t,
			alt: i,
			onError: g,
			onLoad: h
		})
	}) : /* @__PURE__ */ (0, z.jsx)("div", { className: (0, R.default)(sA.root, e) });
	let x = {
		maxWidth: a,
		maxHeight: o,
		aspectRatio: s
	}, S = c ? {
		width: a,
		maxWidth: a,
		maxHeight: o
	} : {
		width: "100%",
		height: "100%",
		maxWidth: a,
		maxHeight: o
	}, C = lA({
		placeholder: l,
		blurhash: u,
		maxWidth: a,
		maxHeight: o,
		loadingLabel: _("common|loading")
	});
	return /* @__PURE__ */ (0, z.jsx)("div", {
		className: (0, R.default)(sA.root, e),
		children: /* @__PURE__ */ (0, z.jsxs)("div", {
			className: sA.thumbnailContainer,
			style: x,
			children: [C && /* @__PURE__ */ (0, z.jsx)("div", {
				className: sA.placeholder,
				children: C
			}), /* @__PURE__ */ (0, z.jsxs)("div", {
				className: sA.mediaContent,
				style: S,
				children: [
					f ? /* @__PURE__ */ (0, z.jsx)("img", {
						className: sA.image,
						src: b,
						ref: t,
						alt: i,
						onError: g,
						onLoad: h,
						onMouseEnter: () => y(!0),
						onMouseLeave: () => y(!1)
					}) : null,
					p && !v ? /* @__PURE__ */ (0, z.jsx)("p", {
						className: sA.gifLabel,
						children: p
					}) : null,
					m && v ? /* @__PURE__ */ (0, z.jsx)("span", {
						className: sA.banner,
						children: m
					}) : null
				]
			})]
		})
	});
}
var dA = {
	content: "_content_1sgf8_8",
	allowButton: "_allowButton_1sgf8_13"
};
//#endregion
//#region src/room/timeline/event-tile/body/MjolnirBodyView/MjolnirBodyView.tsx
function fA({ vm: e, className: t, ref: n }) {
	H(e);
	let r = B().translate;
	return /* @__PURE__ */ (0, z.jsx)("div", {
		className: (0, R.default)(dA.content, t),
		ref: n,
		children: /* @__PURE__ */ (0, z.jsx)("i", { children: r("timeline|mjolnir|message_hidden", {}, { a: (t) => /* @__PURE__ */ (0, z.jsx)("button", {
			type: "button",
			className: dA.allowButton,
			onClick: (t) => {
				t.preventDefault(), t.stopPropagation(), e.onAllow();
			},
			children: t
		}) }) })
	});
}
var pA = {
	root: "_root_acuv8_1",
	container: "_container_acuv8_5",
	video: "_video_acuv8_10",
	hiddenButton: "_hiddenButton_acuv8_17",
	hiddenButtonContent: "_hiddenButtonContent_acuv8_30",
	loadingContainer: "_loadingContainer_acuv8_40",
	error: "_error_acuv8_48"
}, mA = {
	ERROR: "ERROR",
	HIDDEN: "HIDDEN",
	LOADING: "LOADING",
	READY: "READY"
};
function hA({ vm: e, className: t, containerClassName: n, videoRef: r, children: i }) {
	let { state: a, videoLabel: o, videoTitle: s, hiddenButtonLabel: c, errorLabel: l, maxWidth: u, maxHeight: d, aspectRatio: f, src: p, poster: m, preload: h, controls: g, muted: _, autoPlay: v } = H(e), y = (0, R.default)(t, pA.root), b = (0, R.default)(n, pA.container), x = {
		width: u === void 0 ? void 0 : `min(100%, ${u}px)`,
		maxWidth: u,
		maxHeight: d,
		aspectRatio: f
	};
	return a === mA.ERROR ? /* @__PURE__ */ (0, z.jsxs)("span", {
		className: (0, R.default)(y, pA.error),
		children: [/* @__PURE__ */ (0, z.jsx)(eC, {
			width: "16",
			height: "16"
		}), l]
	}) : a === mA.HIDDEN ? /* @__PURE__ */ (0, z.jsx)("span", {
		className: y,
		children: /* @__PURE__ */ (0, z.jsx)("div", {
			className: b,
			style: x,
			children: /* @__PURE__ */ (0, z.jsx)("button", {
				type: "button",
				onClick: e.onPreviewClick,
				className: pA.hiddenButton,
				children: /* @__PURE__ */ (0, z.jsxs)("div", {
					className: pA.hiddenButtonContent,
					children: [/* @__PURE__ */ (0, z.jsx)(ww, {}), /* @__PURE__ */ (0, z.jsx)("span", { children: c })]
				})
			})
		})
	}) : a === mA.LOADING ? /* @__PURE__ */ (0, z.jsx)("span", {
		className: y,
		children: /* @__PURE__ */ (0, z.jsx)("div", {
			className: b,
			style: x,
			children: /* @__PURE__ */ (0, z.jsx)("div", {
				className: pA.loadingContainer,
				children: /* @__PURE__ */ (0, z.jsx)(ce, {
					"aria-label": "Loading...",
					role: "progressbar"
				})
			})
		})
	}) : /* @__PURE__ */ (0, z.jsxs)("span", {
		className: y,
		children: [/* @__PURE__ */ (0, z.jsx)("div", {
			className: b,
			style: x,
			"data-video-body-mask-target": "",
			children: /* @__PURE__ */ (0, z.jsx)("video", {
				className: pA.video,
				ref: r,
				src: p,
				"aria-label": o,
				title: s,
				controls: g,
				controlsList: "nodownload",
				crossOrigin: "anonymous",
				preload: h,
				muted: _,
				autoPlay: v,
				poster: m,
				onPlay: e.onPlay
			})
		}), i]
	});
}
var gA = {
	root: "_root_dlp6w_8",
	text: "_text_dlp6w_13",
	caption: "_caption_dlp6w_14",
	notice: "_notice_dlp6w_18",
	emote: "_emote_dlp6w_23",
	annotated: "_annotated_dlp6w_28",
	annotatedInline: "_annotatedInline_dlp6w_32",
	annotation: "_annotation_dlp6w_36",
	editedMarker: "_editedMarker_dlp6w_44",
	bodyLink: "_bodyLink_dlp6w_58",
	bodyAction: "_bodyAction_dlp6w_59",
	emoteSender: "_emoteSender_dlp6w_74"
}, _A = /* @__PURE__ */ function(e) {
	return e.TEXT = "TEXT", e.NOTICE = "NOTICE", e.EMOTE = "EMOTE", e.CAPTION = "CAPTION", e;
}({}), vA = /* @__PURE__ */ function(e) {
	return e.NONE = "NONE", e.LINK = "LINK", e.ACTION = "ACTION", e;
}({});
function yA(e, t) {
	return !t || !f(e) ? e : c(e, { ref: t });
}
function bA({ vm: e, body: t, bodyRef: n, urlPreviews: r, className: i }) {
	let { id: a, kind: s, bodyWrapper: c = "NONE", bodyLinkHref: l, bodyActionAriaLabel: u, showEditedMarker: d, editedMarkerText: f, editedMarkerAriaLabel: p, editedMarkerTooltip: m, editedMarkerCaption: h, showPendingModerationMarker: g, pendingModerationText: _, emoteSenderName: v } = H(e), y = (0, R.default)(i, gA.root, {
		[gA.text]: s === "TEXT",
		[gA.notice]: s === "NOTICE",
		[gA.emote]: s === "EMOTE",
		[gA.caption]: s === "CAPTION"
	}), b = yA(t, n), x = e.onEditedMarkerClick ? (t) => {
		t.preventDefault(), t.stopPropagation(), e.onEditedMarkerClick?.(t);
	} : void 0, S = [];
	if (d) {
		let e = /* @__PURE__ */ (0, z.jsx)("button", {
			type: "button",
			className: (0, R.default)(gA.annotation, gA.editedMarker),
			onClick: x,
			"aria-label": p,
			"data-textual-body-edited-marker": "",
			children: /* @__PURE__ */ (0, z.jsx)("span", { children: f })
		});
		S.push(m ? /* @__PURE__ */ (0, z.jsx)(F, {
			description: m,
			caption: h,
			isTriggerInteractive: !0,
			children: e
		}, "edited-marker") : o.cloneElement(e, { key: "edited-marker" }));
	}
	if (g && S.push(/* @__PURE__ */ (0, z.jsx)("span", {
		className: gA.annotation,
		"data-textual-body-pending-moderation": "",
		children: _
	}, "pending-moderation-marker")), c === "LINK" && l ? b = /* @__PURE__ */ (0, z.jsx)("a", {
		href: l,
		className: gA.bodyLink,
		children: b
	}) : c === "ACTION" && (b = /* @__PURE__ */ (0, z.jsx)("button", {
		type: "button",
		"aria-label": u,
		className: gA.bodyAction,
		onClick: e.onBodyActionClick,
		children: b
	})), S.length > 0) {
		let e = (0, R.default)(gA.annotated, { [gA.annotatedInline]: s === "EMOTE" });
		b = s === "EMOTE" ? /* @__PURE__ */ (0, z.jsxs)("span", {
			dir: "auto",
			className: e,
			"data-textual-body-annotation-wrapper": "",
			children: [b, S]
		}) : /* @__PURE__ */ (0, z.jsxs)("div", {
			dir: "auto",
			className: e,
			"data-textual-body-annotation-wrapper": "",
			children: [b, S]
		});
	}
	return s === "EMOTE" ? /* @__PURE__ */ (0, z.jsxs)("div", {
		id: a,
		className: y,
		onClickCapture: e.onRootClick,
		dir: "auto",
		children: [
			"*\xA0",
			/* @__PURE__ */ (0, z.jsx)("button", {
				type: "button",
				className: gA.emoteSender,
				onClick: e.onEmoteSenderClick,
				children: v
			}),
			"\xA0",
			b,
			r
		]
	}) : /* @__PURE__ */ (0, z.jsxs)("div", {
		id: a,
		className: y,
		onClickCapture: e.onRootClick,
		children: [b, r]
	});
}
var xA = { content: "_content_6gcu5_8" };
//#endregion
//#region src/room/timeline/event-tile/body/UnknownBodyView/UnknownBodyView.tsx
function SA({ text: e, className: t, ref: n }) {
	return /* @__PURE__ */ (0, z.jsx)("div", {
		className: (0, R.default)(xA.content, t),
		ref: n,
		children: e
	});
}
var CA = {
	content: "_content_1jysn_10",
	source: "_source_1jysn_18",
	toggle: "_toggle_1jysn_28",
	expanded: "_expanded_1jysn_62"
};
//#endregion
//#region src/room/timeline/event-tile/body/ViewSourceEventView/ViewSourceEventView.tsx
function wA({ vm: e, className: t, expandedClassName: n, ref: r }) {
	let { expanded: i, preview: a, source: o } = H(e), s = B().translate, c = s("devtools|toggle_event"), l = (0, R.default)(CA.content, t, { [CA.expanded]: i }, i && n);
	return /* @__PURE__ */ (0, z.jsxs)("span", {
		className: l,
		ref: r,
		children: [i ? /* @__PURE__ */ (0, z.jsx)("pre", {
			className: CA.source,
			children: o
		}) : /* @__PURE__ */ (0, z.jsx)("code", {
			className: CA.source,
			children: a
		}), /* @__PURE__ */ (0, z.jsx)(F, {
			description: c,
			placement: "top",
			children: /* @__PURE__ */ (0, z.jsx)("button", {
				type: "button",
				"aria-label": c,
				className: CA.toggle,
				onClick: e.onToggle,
				children: i ? /* @__PURE__ */ (0, z.jsx)(ES, {}) : /* @__PURE__ */ (0, z.jsx)(JS, {})
			})
		})]
	});
}
var TA = {
	tileErrorView: "_tileErrorView_1nx8u_1",
	line: "_line_1nx8u_8",
	message: "_message_1nx8u_16",
	viewSourceButton: "_viewSourceButton_1nx8u_20"
};
//#endregion
//#region src/room/timeline/event-tile/EventTileView/TileErrorView/TileErrorView.tsx
function EA({ vm: e, className: t }) {
	let n = AO(), { message: r, eventType: i, bugReportCtaLabel: a, viewSourceCtaLabel: o } = H(e);
	return /* @__PURE__ */ (0, z.jsx)("li", {
		className: (0, R.default)(TA.tileErrorView, t),
		...n,
		children: /* @__PURE__ */ (0, z.jsxs)("div", {
			className: TA.line,
			role: "status",
			children: [
				/* @__PURE__ */ (0, z.jsxs)("span", {
					className: TA.message,
					children: [r, i && ` (${i})`]
				}),
				a && /* @__PURE__ */ (0, z.jsx)(k, {
					kind: "secondary",
					size: "md",
					onClick: e.onBugReportClick,
					children: a
				}),
				o && /* @__PURE__ */ (0, z.jsx)("button", {
					type: "button",
					className: TA.viewSourceButton,
					onClick: e.onViewSourceClick,
					children: o
				})
			]
		})
	});
}
var DA = {
	pill: "_pill_1i8jm_8",
	label: "_label_1i8jm_14"
};
//#endregion
//#region src/core/pill-input/Pill/Pill.tsx
function OA({ className: e, children: t, label: n, onClick: r, ...i }) {
	let a = v(), { translate: o } = B();
	return /* @__PURE__ */ (0, z.jsxs)(V, {
		display: "inline-flex",
		gap: "var(--cpd-space-1-5x)",
		align: "center",
		className: (0, R.default)(DA.pill, e),
		...i,
		children: [
			t,
			/* @__PURE__ */ (0, z.jsx)("span", {
				id: a,
				className: DA.label,
				children: n
			}),
			r && /* @__PURE__ */ (0, z.jsx)(M, {
				"aria-describedby": a,
				size: "16px",
				onClick: r,
				"aria-label": o("action|delete"),
				className: "mx_Dialog_nonDialogButton",
				children: /* @__PURE__ */ (0, z.jsx)(SS, {})
			})
		]
	});
}
//#endregion
//#region ../../node_modules/.pnpm/react-merge-refs@3.0.2_react@19.2.8/node_modules/react-merge-refs/dist/index.js
function kA(e) {
	return (t) => {
		for (let n of e) jA(n, t);
	};
}
function AA(e) {
	return (t) => {
		let n = [];
		for (let r of e) {
			let e = jA(r, t), i = typeof e == "function";
			n.push(i ? e : () => jA(r, null));
		}
		return () => {
			for (let e of n) e();
		};
	};
}
function jA(e, t) {
	if (typeof e == "function") return e(t);
	e && (e.current = t);
}
var MA = parseInt(ee.split(".")[0], 10) >= 19 ? AA : kA;
function NA(e) {
	return S(() => MA(e), e);
}
var PA = {
	pillInput: "_pillInput_1yam9_8",
	input: "_input_1yam9_16",
	largerInput: "_largerInput_1yam9_32"
};
//#endregion
//#region src/core/pill-input/PillInput/PillInput.tsx
function FA({ className: e, children: t, onRemoveChildren: n, inputProps: r, ...i }) {
	let a = w(null), o = yy(r, ["onKeyDown", "ref"]), c = NA([a, r?.ref]), l = s.toArray(t).length > 0;
	return /* @__PURE__ */ (0, z.jsxs)(V, {
		...i,
		gap: "var(--cpd-space-1x)",
		direction: "column",
		className: (0, R.default)(PA.pillInput, e),
		onClick: (e) => {
			e.preventDefault(), e.stopPropagation(), a.current?.focus();
		},
		children: [l && /* @__PURE__ */ (0, z.jsx)(V, {
			gap: "var(--cpd-space-1x)",
			wrap: "wrap",
			align: "center",
			children: t
		}), /* @__PURE__ */ (0, z.jsx)("input", {
			ref: c,
			autoComplete: "off",
			className: (0, R.default)(PA.input, { [PA.largerInput]: l }),
			onKeyDown: (e) => {
				let t = e.currentTarget.value.trim();
				if (e.key === "Backspace" && !t) {
					e.preventDefault(), n?.(e);
					return;
				}
				r?.onKeyDown?.(e);
			},
			...o
		})]
	});
}
var IA = {
	container: "_container_mcq5y_8",
	secondaryAction: "_secondaryAction_mcq5y_16",
	primaryAction: "_primaryAction_mcq5y_20",
	title: "_title_mcq5y_24",
	description: "_description_mcq5y_28"
}, LA = {
	ConnectionLost: "ConnectionLost",
	NeedsConsent: "NeedsConsent",
	ResourceLimited: "ResourceLimited",
	UnsentMessages: "UnsentMessages",
	LocalRoomFailed: "LocalRoomFailed"
};
function RA({ vm: e }) {
	let { translate: t } = B(), n = H(e), r = v(), i = h((t) => {
		t.preventDefault(), e.onDeleteAllClick?.();
	}, [e]), a = h((t) => {
		t.preventDefault(), e.onResendAllClick?.();
	}, [e]), o = h((t) => {
		t.preventDefault(), e.onRetryRoomCreationClick?.();
	}, [e]), s = h(() => {
		e.onTermsAndConditionsClicked?.();
	}, [e]);
	if (n.state === null) return null;
	switch (n.state) {
		case LA.ConnectionLost: return /* @__PURE__ */ (0, z.jsx)(Kw, {
			type: "info",
			role: "status",
			"aria-labelledby": r,
			children: /* @__PURE__ */ (0, z.jsxs)("div", {
				className: IA.container,
				children: [/* @__PURE__ */ (0, z.jsx)(P, {
					className: IA.title,
					id: r,
					weight: "medium",
					children: U("tchap|server_connectivity_lost_title", void 0, { a: (e) => /* @__PURE__ */ (0, z.jsx)("a", {
						target: "_blank",
						rel: "noreferrer noopener",
						href: "https://status.tchap.numerique.gouv.fr",
						children: e
					}) })
				}), /* @__PURE__ */ (0, z.jsx)(P, {
					className: IA.description,
					children: t("room|status_bar|server_connectivity_lost_description")
				})]
			})
		});
		case LA.NeedsConsent: return /* @__PURE__ */ (0, z.jsx)(Kw, {
			type: "info",
			role: "status",
			"aria-labelledby": r,
			actions: /* @__PURE__ */ (0, z.jsx)(k, {
				onClick: s,
				className: IA.primaryAction,
				kind: "primary",
				size: "md",
				as: "a",
				href: n.consentUri,
				target: "_blank",
				rel: "noreferrer noopener",
				children: t("terms|tac_button")
			}),
			children: /* @__PURE__ */ (0, z.jsx)("div", {
				className: IA.container,
				children: /* @__PURE__ */ (0, z.jsx)(P, {
					className: IA.title,
					id: r,
					weight: "medium",
					children: t("room|status_bar|requires_consent_agreement_title")
				})
			})
		});
		case LA.ResourceLimited: return /* @__PURE__ */ (0, z.jsx)(Kw, {
			type: "info",
			role: "status",
			"aria-labelledby": r,
			actions: n.adminContactHref && /* @__PURE__ */ (0, z.jsx)(k, {
				kind: "secondary",
				size: "md",
				as: "a",
				href: n.adminContactHref,
				target: "_blank",
				rel: "noreferrer noopener",
				children: "Contact admin"
			}),
			children: /* @__PURE__ */ (0, z.jsxs)("div", {
				className: IA.container,
				children: [/* @__PURE__ */ (0, z.jsx)(P, {
					className: IA.title,
					id: r,
					weight: "medium",
					children: {
						monthly_active_user: t("room|status_bar|monthly_user_limit_reached_title"),
						hs_disabled: t("room|status_bar|homeserver_blocked_title")
					}[n.resourceLimit] || t("room|status_bar|exceeded_resource_limit_title")
				}), /* @__PURE__ */ (0, z.jsx)(P, {
					className: IA.description,
					children: t("room|status_bar|exceeded_resource_limit_description")
				})]
			})
		});
		case LA.LocalRoomFailed: return /* @__PURE__ */ (0, z.jsx)(Kw, {
			role: "status",
			type: "info",
			"aria-labelledby": r,
			actions: /* @__PURE__ */ (0, z.jsx)(k, {
				size: "md",
				kind: "primary",
				className: IA.primaryAction,
				Icon: XC,
				onClick: o,
				children: t("action|retry")
			}),
			children: /* @__PURE__ */ (0, z.jsx)(P, {
				className: IA.title,
				id: r,
				weight: "medium",
				children: t("room|status_bar|failed_to_create_room_title")
			})
		});
		case LA.UnsentMessages: return /* @__PURE__ */ (0, z.jsx)(Kw, {
			role: "status",
			type: "info",
			actions: n.isResending ? /* @__PURE__ */ (0, z.jsx)(ce, {}) : /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [e.onDeleteAllClick && /* @__PURE__ */ (0, z.jsx)(k, {
				size: "md",
				kind: "secondary",
				Icon: OS,
				className: IA.secondaryAction,
				onClick: i,
				children: t("room|status_bar|delete_all")
			}), e.onResendAllClick && /* @__PURE__ */ (0, z.jsx)(k, {
				size: "md",
				kind: "primary",
				Icon: XC,
				onClick: a,
				className: IA.primaryAction,
				children: t("room|status_bar|retry_all")
			})] }),
			"aria-labelledby": r,
			children: /* @__PURE__ */ (0, z.jsxs)("div", {
				className: IA.container,
				children: [/* @__PURE__ */ (0, z.jsx)(P, {
					className: IA.title,
					id: r,
					weight: "medium",
					children: U("tchap|server_connectivity_lost_title", void 0, { a: (e) => /* @__PURE__ */ (0, z.jsx)("a", {
						target: "_blank",
						rel: "noreferrer noopener",
						href: "https://status.tchap.numerique.gouv.fr",
						children: e
					}) })
				}), /* @__PURE__ */ (0, z.jsx)(P, {
					className: IA.description,
					children: t("room|status_bar|select_messages_to_retry")
				})]
			})
		});
		default: return null;
	}
}
var zA = {
	container: "_container_19tks_8",
	header: "_header_19tks_22",
	roundedCornerContainer: "_roundedCornerContainer_19tks_30"
}, BA = ({ vm: e, RoomAvatar: t }) => {
	let n = H(e), { translate: r } = B();
	return /* @__PURE__ */ (0, z.jsxs)("div", {
		"data-testid": "widget-pip-container",
		className: zA.container,
		onMouseDown: e.onStartMoving,
		children: [/* @__PURE__ */ (0, z.jsxs)("div", {
			className: zA.header,
			children: [
				/* @__PURE__ */ (0, z.jsx)(M, {
					size: "28px",
					"data-testid": "base-card-back-button",
					onClick: (t) => e.onBackClick(t),
					tooltip: r("action|back"),
					kind: "secondary",
					children: /* @__PURE__ */ (0, z.jsx)(gS, {})
				}),
				/* @__PURE__ */ (0, z.jsx)(t, { size: "20px" }),
				n.roomName
			]
		}), /* @__PURE__ */ (0, z.jsx)("div", {
			className: zA.roundedCornerContainer,
			children: /* @__PURE__ */ (0, z.jsx)(e.persistentAppComponent, {
				persistentWidgetId: n.widgetId,
				persistentRoomId: n.roomId
			})
		})]
	});
};
//#endregion
//#region src/room/HistoryVisibilityBadge/HistoryVisibilityBadge.tsx
function VA({ historyVisibility: e }) {
	let t = {
		color: "var(--cpd-color-icon-info-primary)",
		width: "1rem",
		height: "1rem"
	};
	switch (e) {
		case "invited":
		case "joined": return /* @__PURE__ */ (0, z.jsxs)(O, {
			kind: "blue",
			children: [/* @__PURE__ */ (0, z.jsx)(Sw, { ...t }), U("room|history_visibility_badge|private")]
		});
		case "shared": return /* @__PURE__ */ (0, z.jsxs)(O, {
			kind: "blue",
			children: [/* @__PURE__ */ (0, z.jsx)(nC, { ...t }), U("room|history_visibility_badge|shared")]
		});
		case "world_readable": return /* @__PURE__ */ (0, z.jsxs)(O, {
			kind: "blue",
			children: [/* @__PURE__ */ (0, z.jsx)(mw, { ...t }), U("room|history_visibility_badge|world_readable")]
		});
		default: return null;
	}
}
//#endregion
//#region src/room/right-panel/WidgetContextMenuView/WidgetContextMenuView.tsx
var HA = ({ vm: e }) => {
	let { translate: t } = B(), { showStreamAudioStreamButton: n, showEditButton: r, showSnapshotButton: i, showDeleteButton: a, showRevokeButton: s, showMoveButtons: c, isMenuOpened: l, userWidget: u, trigger: d } = H(e), f;
	n && (f = /* @__PURE__ */ (0, z.jsx)(N, {
		onSelect: e.onStreamAudioClick,
		label: t("widget|context_menu|start_audio_stream")
	}));
	let p;
	r && (p = /* @__PURE__ */ (0, z.jsx)(N, {
		onSelect: e.onEditClick,
		label: t("action|edit")
	}));
	let m;
	i && (m = /* @__PURE__ */ (0, z.jsx)(N, {
		onSelect: e.onSnapshotClick,
		label: t("widget|context_menu|screenshot")
	}));
	let h;
	a && (h = /* @__PURE__ */ (0, z.jsx)(N, {
		onSelect: e.onDeleteClick,
		label: t(u ? "action|remove" : "widget|context_menu|remove")
	}));
	let g;
	s && (g = /* @__PURE__ */ (0, z.jsx)(N, {
		onSelect: e.onRevokeClick,
		label: t("widget|context_menu|revoke")
	}));
	let [_, v] = c, y;
	_ && (y = /* @__PURE__ */ (0, z.jsx)(N, {
		onSelect: () => e.onMoveButton(-1),
		label: t("widget|context_menu|move_left")
	}));
	let b;
	v && (b = /* @__PURE__ */ (0, z.jsx)(N, {
		onSelect: () => e.onMoveButton(1),
		label: t("widget|context_menu|move_right")
	}));
	let x = () => l ? /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [
		f,
		p,
		g,
		h,
		m,
		y,
		b
	] }) : null, S = o.isValidElement(d) ? d : /* @__PURE__ */ (0, z.jsx)(M, {
		size: "24px",
		"aria-label": "context menu trigger button",
		inert: !0,
		tabIndex: -1,
		children: /* @__PURE__ */ (0, z.jsx)(MC, {})
	});
	return /* @__PURE__ */ (0, z.jsx)(ue, {
		title: "Widget context menu",
		open: l,
		showTitle: !1,
		side: "right",
		align: "start",
		trigger: S,
		onOpenChange: e.onFinished,
		children: x()
	});
}, UA = { content: "_content_u6fft_8" }, WA = { timelineSeparator: "_timelineSeparator_yq5ye_8" }, GA = ({ label: e, className: t, children: n, role: r = "separator" }) => /* @__PURE__ */ (0, z.jsxs)(V, {
	className: (0, R.default)(t, WA.timelineSeparator),
	role: r,
	"aria-label": r === "separator" ? e : void 0,
	align: "center",
	children: [
		/* @__PURE__ */ (0, z.jsx)("hr", { role: "none" }),
		n,
		/* @__PURE__ */ (0, z.jsx)("hr", { role: "none" })
	]
}), KA = 15e3, qA = 75e3, JA = 45, YA = 75, XA = 23, ZA = 26;
function QA(e, t) {
	let n = Date.now() - e, r = Math.abs(Math.ceil(n / 6e4)), i = Math.ceil(r / 60), a = Math.ceil(i / 24), o = t?.translate ?? U;
	return n >= 0 ? n <= KA ? o("time|few_seconds_ago") : n <= qA ? o("time|about_minute_ago") : r <= JA ? o("time|n_minutes_ago", { num: r }) : r <= YA ? o("time|about_hour_ago") : i <= XA ? o("time|n_hours_ago", { num: i }) : i <= ZA ? o("time|about_day_ago") : o("time|n_days_ago", { num: a }) : (n = Math.abs(n), n <= KA ? o("time|in_few_seconds") : n <= qA ? o("time|in_about_minute") : r <= JA ? o("time|in_n_minutes", { num: r }) : r <= YA ? o("time|in_about_hour") : i <= XA ? o("time|in_n_hours", { num: i }) : i <= ZA ? o("time|in_about_day") : o("time|in_n_days", { num: a }));
}
function $A(e) {
	return new Intl.RelativeTimeFormat(e?.language, {
		style: "long",
		numeric: "auto"
	});
}
var ej = {
	picker_menu_item: "_picker_menu_item_1kc2b_8",
	picker_form: "_picker_form_1kc2b_12",
	picker_input: "_picker_input_1kc2b_22",
	picker_input_date: "_picker_input_date_1kc2b_28"
}, tj = ({ vm: e, inputRef: t, onSubmitted: n, onDismissed: r }) => {
	let i = H(e), a = Xd(i.jumpFromDate ? new Date(i.jumpFromDate) : /* @__PURE__ */ new Date()), { translate: o } = B(), s = v(), [c, l] = T(a), u = w(null), d = t ?? u, f = w(null), p = (e) => {
		e.key === "Tab" && (e.shiftKey ? r?.() : (e.preventDefault(), f.current?.focus()));
	}, m = (e) => {
		l(e.currentTarget.value);
	}, h = () => {
		e.onDatePicked?.(c), n?.();
	};
	return /* @__PURE__ */ (0, z.jsx)(N, {
		as: "div",
		"data-testid": "jump-to-date-picker",
		label: o("room|jump_to_date"),
		onSelect: (e) => {
			e.preventDefault();
		},
		hideChevron: !0,
		className: ej.picker_menu_item,
		children: /* @__PURE__ */ (0, z.jsxs)(me, {
			className: ej.picker_form,
			onSubmit: (e) => {
				e.preventDefault(), h();
			},
			children: [/* @__PURE__ */ (0, z.jsx)(ie, {
				name: "jump-to-date-field",
				className: ej.picker_input,
				children: /* @__PURE__ */ (0, z.jsx)(ve, {
					ref: d,
					id: s,
					type: "date",
					"aria-label": o("room|jump_to_date_prompt"),
					onInput: m,
					onKeyDown: p,
					value: c,
					max: Xd(/* @__PURE__ */ new Date()),
					className: ej.picker_input_date
				})
			}), /* @__PURE__ */ (0, z.jsx)(_e, {
				ref: f,
				className: ej.picker_button,
				type: "submit",
				kind: "primary",
				size: "md",
				onKeyDown: (e) => {
					e.key === "Tab" && (e.shiftKey ? (e.preventDefault(), d.current?.focus()) : r?.()), (e.key == "Enter" || e.key == " " || e.key == "Spacebar") && (e.preventDefault(), h());
				},
				children: o("action|go")
			})]
		})
	});
}, nj = {
	picker_menu: "_picker_menu_14xuw_8",
	picker_menu_item: "_picker_menu_item_14xuw_14",
	picker_separator: "_picker_separator_14xuw_18"
}, rj = ({ vm: e, open: t, trigger: n, onOpenChange: r }) => {
	let i = B(), { translate: a } = B(), o = w(null);
	return /* @__PURE__ */ (0, z.jsxs)(ue, {
		open: t,
		onOpenChange: (e) => {
			r?.(e);
		},
		title: a("room|jump_to_date"),
		showTitle: !1,
		trigger: n,
		align: "start",
		className: nj.picker_menu,
		children: [
			/* @__PURE__ */ (0, z.jsx)(N, {
				label: _g($A(i).format(-1, "week")),
				onSelect: () => e.onLastWeekPicked?.(),
				"data-testid": "jump-to-date-last-week",
				hideChevron: !0,
				className: nj.picker_menu_item
			}),
			/* @__PURE__ */ (0, z.jsx)(N, {
				label: _g($A(i).format(-1, "month")),
				onSelect: () => e.onLastMonthPicked?.(),
				"data-testid": "jump-to-date-last-month",
				hideChevron: !0,
				className: nj.picker_menu_item
			}),
			/* @__PURE__ */ (0, z.jsx)(N, {
				label: a("room|jump_to_date_beginning"),
				onSelect: () => e.onBeginningPicked?.(),
				"data-testid": "jump-to-date-beginning",
				hideChevron: !0,
				className: nj.picker_menu_item,
				onKeyDown: (e) => {
					e.key === "ArrowDown" && (e.preventDefault(), o.current?.focus());
				}
			}),
			/* @__PURE__ */ (0, z.jsx)(he, {
				decorative: !0,
				className: nj.picker_separator
			}),
			/* @__PURE__ */ (0, z.jsx)(tj, {
				vm: e,
				inputRef: o,
				onSubmitted: () => r?.(!1),
				onDismissed: () => r?.(!1)
			})
		]
	});
}, ij = d(function({ label: e, tooltipOpen: t, className: n, ...r }, i) {
	let { translate: a } = B();
	return /* @__PURE__ */ (0, z.jsx)(F, {
		description: a("room|jump_to_date"),
		placement: "right",
		open: t,
		children: /* @__PURE__ */ (0, z.jsxs)(V, {
			ref: i,
			"data-testid": "jump-to-date-separator-button",
			className: n,
			"aria-live": "off",
			"aria-label": a("room|jump_to_date"),
			role: "button",
			tabIndex: 0,
			...r,
			children: [/* @__PURE__ */ (0, z.jsx)(oe, {
				as: "h2",
				size: "lg",
				"aria-hidden": "true",
				children: e
			}), /* @__PURE__ */ (0, z.jsx)(mS, {})]
		})
	});
});
//#endregion
//#region src/room/timeline/DateSeparatorView/DateSeparatorView.tsx
function aj({ vm: e, className: t }) {
	let { label: n, jumpToEnabled: r } = H(e), [i, a] = T(!1), [o, s] = T(!1), [c, l] = T(!1);
	return r ? /* @__PURE__ */ (0, z.jsx)(GA, {
		label: n,
		className: (0, R.default)(t),
		role: "none",
		children: /* @__PURE__ */ (0, z.jsx)(rj, {
			vm: e,
			open: i,
			onOpenChange: (e) => {
				a(e), e && (s(!1), l(!1));
			},
			trigger: /* @__PURE__ */ (0, z.jsx)(ij, {
				label: n,
				tooltipOpen: !i && (o || c),
				className: UA.content,
				onMouseEnter: () => s(!0),
				onMouseLeave: () => s(!1),
				onFocus: (e) => l(e.currentTarget.matches(":focus-visible")),
				onBlur: () => l(!1)
			})
		})
	}) : /* @__PURE__ */ (0, z.jsx)(GA, {
		label: n,
		className: (0, R.default)(t),
		children: /* @__PURE__ */ (0, z.jsx)(V, {
			className: UA.content,
			children: /* @__PURE__ */ (0, z.jsx)(oe, {
				as: "h2",
				size: "lg",
				"aria-hidden": "true",
				children: n
			})
		})
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+virtual-core@3.17.6_patch_hash=9db9d80c4fe7a7a9911643522aef9bc9359075570c38f3d847ff75ed635d921c/node_modules/@tanstack/virtual-core/dist/esm/lazy-measurements.js
function oj(e, t, n) {
	let r = Array(e);
	return new Proxy(r, { get(r, i, a) {
		if (typeof i == "string") {
			let a = i.charCodeAt(0);
			if (a >= 48 && a <= 57) {
				let a = +i;
				if (Number.isInteger(a) && a >= 0 && a < e) {
					let e = r[a];
					if (!e) {
						let i = t[a * 2];
						e = r[a] = {
							index: a,
							key: n(a),
							start: i,
							size: t[a * 2 + 1],
							end: i + t[a * 2 + 1],
							lane: 0
						};
					}
					return e;
				}
			}
			if (i === "length") return e;
		}
		return Reflect.get(r, i, a);
	} });
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+virtual-core@3.17.6_patch_hash=9db9d80c4fe7a7a9911643522aef9bc9359075570c38f3d847ff75ed635d921c/node_modules/@tanstack/virtual-core/dist/esm/utils.js
function sj(e, t, n) {
	let r = n.initialDeps ?? [], i, a = !0;
	function o() {
		let o = process.env.NODE_ENV !== "production" && !!n.key && !!n.debug?.call(n), s = 0;
		o && (s = Date.now());
		let c = e();
		if (!(c.length !== r.length || c.some((e, t) => r[t] !== e))) return i;
		r = c;
		let l = 0;
		if (o && (l = Date.now()), i = t(...c), o) {
			let e = Math.round((Date.now() - s) * 100) / 100, t = Math.round((Date.now() - l) * 100) / 100, r = t / 16, i = (e, t) => {
				for (e = String(e); e.length < t;) e = " " + e;
				return e;
			};
			console.info(`%c⏱ ${i(t, 5)} /${i(e, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * r, 120))}deg 100% 31%);`, n?.key);
		}
		return n?.onChange && !(a && n.skipInitialOnChange) && n.onChange(i), a = !1, i;
	}
	return o.updateDeps = (e) => {
		r = e;
	}, o;
}
function cj(e, t) {
	if (e === void 0) throw Error(`Unexpected undefined${t ? `: ${t}` : ""}`);
	return e;
}
var lj = (e, t) => Math.abs(e - t) < 1.01, uj = (e, t, n) => {
	let r;
	return function(...i) {
		e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, i), n);
	};
}, dj, fj = () => {
	if (dj !== void 0) return dj;
	if (typeof navigator > "u") return dj = !1;
	if (/iP(hone|od|ad)/.test(navigator.userAgent)) return dj = !0;
	let e = navigator.maxTouchPoints;
	return dj = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, pj = (e) => {
	let { offsetWidth: t, offsetHeight: n } = e;
	return {
		width: t,
		height: n
	};
}, mj = (e) => e, hj = (e) => {
	let t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1) - t + 1, r = Array(n);
	for (let e = 0; e < n; e++) r[e] = t + e;
	return r;
}, gj = (e, t) => {
	let n = e.scrollElement;
	if (!n) return;
	let r = e.targetWindow;
	if (!r) return;
	let i = (e) => {
		let { width: n, height: r } = e;
		t({
			width: Math.round(n),
			height: Math.round(r)
		});
	};
	if (i(pj(n)), !r.ResizeObserver) return () => {};
	let a = new r.ResizeObserver((t) => {
		let r = () => {
			let e = t[0];
			if (e?.borderBoxSize) {
				let t = e.borderBoxSize[0];
				if (t) {
					i({
						width: t.inlineSize,
						height: t.blockSize
					});
					return;
				}
			}
			i(pj(n));
		};
		e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(r) : r();
	});
	return a.observe(n, { box: "border-box" }), () => {
		a.unobserve(n);
	};
}, _j = { passive: !0 }, vj = typeof window > "u" || "onscrollend" in window, yj = (e, t, n) => {
	let r = e.scrollElement;
	if (!r) return;
	let i = e.targetWindow;
	if (!i) return;
	let a = e.options.useScrollendEvent && vj, o = 0, s = a ? null : uj(i, () => t(o, !1), e.options.isScrollingResetDelay), c = (e) => () => {
		o = n(r), s?.(), t(o, e);
	}, l = c(!0), u = c(!1);
	return r.addEventListener("scroll", l, _j), a && r.addEventListener("scrollend", u, _j), () => {
		r.removeEventListener("scroll", l), a && r.removeEventListener("scrollend", u);
	};
}, bj = (e, t) => yj(e, t, (t) => {
	let { horizontal: n, isRtl: r } = e.options;
	return n ? t.scrollLeft * (r && -1 || 1) : t.scrollTop;
}), xj = (e, t, n) => {
	if (n.options.useCachedMeasurements) {
		let t = n.indexFromElement(e), r = n.options.getItemKey(t);
		return n.itemSizeCache.get(r) ?? n.options.estimateSize(t);
	}
	if (t?.borderBoxSize) {
		let e = t.borderBoxSize[0];
		if (e) return Math.round(e[n.options.horizontal ? "inlineSize" : "blockSize"]);
	}
	if (!t) {
		let t = n.indexFromElement(e), r = n.options.getItemKey(t), i = n.itemSizeCache.get(r);
		if (i !== void 0) return i;
	}
	return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Sj = (e, { adjustments: t = 0, behavior: n }, r) => {
	var i, a;
	(a = (i = r.scrollElement)?.scrollTo) == null || a.call(i, {
		[r.options.horizontal ? "left" : "top"]: e + t,
		behavior: n
	});
}, Cj = class {
	constructor(e) {
		this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this._flatMeasurements = null, this.itemSizeCache = /* @__PURE__ */ new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
			var e;
			return ((e = this.targetWindow?.performance)?.now)?.call(e) ?? Date.now();
		}, this.observer = /* @__PURE__ */ (() => {
			let e = null, t = () => e || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : e = new this.targetWindow.ResizeObserver((e) => {
				e.forEach((e) => {
					let t = () => {
						let t = e.target, n = this.indexFromElement(t);
						if (!t.isConnected) {
							this.observer.unobserve(t);
							for (let [e, n] of this.elementsCache) if (n === t) {
								this.elementsCache.delete(e);
								break;
							}
							return;
						}
						this.shouldMeasureDuringScroll(n) && this.resizeItem(n, this.options.measureElement(t, e, this));
					};
					this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(t) : t();
				});
			}));
			return {
				disconnect: () => {
					var n;
					(n = t()) == null || n.disconnect(), e = null;
				},
				observe: (e) => t()?.observe(e, { box: "border-box" }),
				unobserve: (e) => t()?.unobserve(e)
			};
		})(), this.range = null, this.setOptions = (e) => {
			let t = {
				debug: !1,
				initialOffset: 0,
				overscan: 1,
				paddingStart: 0,
				paddingEnd: 0,
				scrollPaddingStart: 0,
				scrollPaddingEnd: 0,
				horizontal: !1,
				getItemKey: mj,
				rangeExtractor: hj,
				onChange: () => {},
				measureElement: xj,
				initialRect: {
					width: 0,
					height: 0
				},
				scrollMargin: 0,
				gap: 0,
				indexAttribute: "data-index",
				initialMeasurementsCache: [],
				lanes: 1,
				anchorTo: "start",
				followOnAppend: !1,
				scrollEndThreshold: 1,
				isScrollingResetDelay: 150,
				enabled: !0,
				isRtl: !1,
				useScrollendEvent: !1,
				useAnimationFrameWithResizeObserver: !1,
				laneAssignmentMode: "estimate",
				useCachedMeasurements: !1
			};
			for (let n in e) {
				let r = e[n];
				r !== void 0 && (t[n] = r);
			}
			let n = this.options, r = null, i = null, a = !1;
			if (n !== void 0 && n.enabled && t.enabled && t.anchorTo === "end" && this.scrollElement !== null) {
				let e = n.count, o = t.count, s = this.getMeasurements(), c = e > 0 ? s[0]?.key ?? n.getItemKey(0) : null, l = e > 0 ? s[e - 1]?.key ?? n.getItemKey(e - 1) : null;
				if (o !== e || e > 0 && o > 0 && (t.getItemKey(0) !== c || t.getItemKey(o - 1) !== l)) {
					a = !0;
					let c = e > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? s[0] : null, u = t.isValidAnchorItem;
					if (c && u && !u(c)) {
						let e = c.index === 0 ? 1 : -1, t = c.index;
						for (; t >= 0 && t < s.length && s[t] && !u(s[t]);) t += e;
						c = s[t] ?? c;
					}
					c && (r = [c.key, this.getScrollOffset() - c.start]);
					let d = t.followOnAppend === !0 ? "auto" : t.followOnAppend || null;
					d && o > e && this.isAtEnd(n.scrollEndThreshold) && (e === 0 || t.getItemKey(o - 1) !== l) && (i = d);
				}
			}
			this.options = t, a && (this.pendingMin = 0, this.itemSizeCacheVersion++);
			let o = !1, s = 0;
			if (r && this.scrollOffset !== null) {
				let [e, t] = r, n = this.getMeasurements(), { count: i, getItemKey: a } = this.options, c = 0;
				for (; c < i && a(c) !== e;) c++;
				if (c < i) {
					let e = n[c];
					if (e) {
						let n = Math.max(0, e.start + t);
						n !== this.scrollOffset && (s = n - this.scrollOffset, this.scrollOffset = n, o = !0);
					}
				}
			}
			(o || i) && (this.pendingScrollAnchor = [
				o ? r[0] : null,
				o ? r[1] : 0,
				i,
				s
			]);
		}, this.notify = (e) => {
			var t, n;
			(n = (t = this.options).onChange) == null || n.call(t, this, e);
		}, this.maybeNotify = sj(() => (this.calculateRange(), [
			this.isScrolling,
			this.range ? this.range.startIndex : null,
			this.range ? this.range.endIndex : null
		]), (e) => {
			this.notify(e);
		}, {
			key: process.env.NODE_ENV !== "production" && "maybeNotify",
			debug: () => this.options.debug,
			initialDeps: [
				this.isScrolling,
				this.range ? this.range.startIndex : null,
				this.range ? this.range.endIndex : null
			]
		}), this.cleanup = () => {
			this.unsubs.filter(Boolean).forEach((e) => e()), this.unsubs = [], this.observer.disconnect(), this.rafId != null && this.targetWindow && (this.targetWindow.cancelAnimationFrame(this.rafId), this.rafId = null), this.scrollState = null, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this.scrollElement = null, this.targetWindow = null;
		}, this._didMount = () => () => {
			this.cleanup();
		}, this._willUpdate = () => {
			let e = this.options.enabled ? this.options.getScrollElement() : null;
			if (this.scrollElement !== e) {
				if (this.cleanup(), !e) {
					this.maybeNotify();
					return;
				}
				if (this.scrollElement = e, this.targetWindow = this.scrollElement && "ownerDocument" in this.scrollElement ? this.scrollElement.ownerDocument.defaultView : this.scrollElement?.window ?? null, this.elementsCache.forEach((e) => {
					this.observer.observe(e);
				}), this.unsubs.push(this.options.observeElementRect(this, (e) => {
					this.scrollRect = e, this.maybeNotify();
				})), this.unsubs.push(this.options.observeElementOffset(this, (e, t) => {
					if (t && this._intendedScrollOffset === null && e === this.scrollOffset) return;
					this._intendedScrollOffset !== null && Math.abs(e - this._intendedScrollOffset) < 1.5 && (e = this._intendedScrollOffset), this._intendedScrollOffset = null, this.scrollAdjustments = 0;
					let n = this.getScrollOffset();
					this.scrollDirection = t ? n === e ? this.scrollDirection : n < e ? "forward" : "backward" : null, this.scrollOffset = e, this.isScrolling = t, this._flushIosDeferredIfReady(), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
				})), "addEventListener" in this.scrollElement) {
					let e = this.scrollElement, t = () => {
						this._iosTouching = !0, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
					}, n = () => {
						this._iosTouching = !1, !(!fj() || this.targetWindow == null) && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
							this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
						}, 150));
					};
					e.addEventListener("touchstart", t, _j), e.addEventListener("touchend", n, _j), this.unsubs.push(() => {
						e.removeEventListener("touchstart", t), e.removeEventListener("touchend", n), this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
					});
				}
				this._scrollToOffset(this.getScrollOffset(), {
					adjustments: void 0,
					behavior: void 0
				});
			}
			let t = this.pendingScrollAnchor;
			if (this.pendingScrollAnchor = null, t && this.scrollElement && this.options.enabled) {
				let [e, n, r, i] = t;
				e !== null && !r && (fj() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? i !== 0 && (this._iosDeferredAdjustment += i) : this._scrollToOffset(this.getScrollOffset(), {
					adjustments: void 0,
					behavior: void 0
				})), r && this.scrollToEnd({ behavior: r });
			}
		}, this._flushIosDeferredIfReady = () => {
			if (this._iosDeferredAdjustment === 0 || this.isScrolling || this._iosTouching || this._iosJustTouchEnded) return;
			let e = this.getScrollOffset(), t = this.getMaxScrollOffset();
			if (e < 0 || e > t) return;
			if (this._iosDeferredAdjustment < 0 && e >= t - 1) {
				this._iosDeferredAdjustment = 0;
				return;
			}
			let n = this._iosDeferredAdjustment;
			this._iosDeferredAdjustment = 0, this._scrollToOffset(e, {
				adjustments: this.scrollAdjustments += n,
				behavior: void 0
			});
		}, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getMeasurementOptions = sj(() => [
			this.options.count,
			this.options.paddingStart,
			this.options.scrollMargin,
			this.options.getItemKey,
			this.options.enabled,
			this.options.lanes,
			this.options.laneAssignmentMode,
			this.options.gap
		], (e, t, n, r, i, a, o, s) => (this.prevLanes !== void 0 && this.prevLanes !== a && (this.lanesChangedFlag = !0), this.prevLanes = a, this.pendingMin = null, {
			count: e,
			paddingStart: t,
			scrollMargin: n,
			getItemKey: r,
			enabled: i,
			lanes: a,
			laneAssignmentMode: o,
			gap: s
		}), { key: !1 }), this.getMeasurements = sj(() => [this.getMeasurementOptions(), this.itemSizeCacheVersion], ({ count: e, paddingStart: t, scrollMargin: n, getItemKey: r, enabled: i, lanes: a, laneAssignmentMode: o, gap: s }, c) => {
			let l = this.itemSizeCache;
			if (!i) return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
			if (this.laneAssignments.size > e) for (let t of this.laneAssignments.keys()) t >= e && this.laneAssignments.delete(t);
			this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((e) => {
				this.itemSizeCache.set(e.key, e.size);
			}));
			let u = this.lanesSettling ? 0 : this.pendingMin ?? 0;
			if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === e && (this.lanesSettling = !1), a === 1) {
				let i = e * 2, a = this._flatMeasurements;
				if (!a || a.length < i) {
					let e = new Float64Array(i);
					a && u > 0 && e.set(a.subarray(0, u * 2)), a = e, this._flatMeasurements = a;
				}
				let o;
				if (u === 0) o = t + n;
				else {
					let e = u - 1;
					o = a[e * 2] + a[e * 2 + 1] + s;
				}
				for (let t = u; t < e; t++) {
					let e = r(t), n = l.get(e), i = typeof n == "number" ? n : this.options.estimateSize(t);
					a[t * 2] = o, a[t * 2 + 1] = i, o += i + s;
				}
				let c = oj(e, a, r);
				return this.measurementsCache = c, c;
			}
			let d = this.measurementsCache.slice(0, u), f = Array(a).fill(void 0), p = new Float64Array(a), m = 0;
			for (let e = 0; e < u; e++) {
				let t = d[e];
				t && (f[t.lane] === void 0 && m++, f[t.lane] = e, p[t.lane] = t.end);
			}
			for (let i = u; i < e; i++) {
				let e = r(i), c = this.laneAssignments.get(i), u, h, g = o === "estimate" || l.has(e);
				if (c !== void 0 && this.options.lanes > 1) {
					u = c;
					let e = f[u], r = e === void 0 ? void 0 : d[e];
					h = r ? r.end + s : t + n;
				} else if (m === a) {
					let e = 0, t = p[0], n = f[0];
					for (let r = 1; r < a; r++) {
						let i = p[r];
						(i < t || i === t && f[r] < n) && (e = r, t = i, n = f[r]);
					}
					u = e, h = t + s, g && this.laneAssignments.set(i, u);
				} else u = i % this.options.lanes, h = t + n, g && this.laneAssignments.set(i, u);
				let _ = l.get(e), v = typeof _ == "number" ? _ : this.options.estimateSize(i), y = h + v;
				d[i] = {
					index: i,
					start: h,
					size: v,
					end: y,
					key: e,
					lane: u
				}, f[u] === void 0 && m++, f[u] = i, p[u] = y;
			}
			return this.measurementsCache = d, d;
		}, {
			key: process.env.NODE_ENV !== "production" && "getMeasurements",
			debug: () => this.options.debug
		}), this.calculateRange = sj(() => [
			this.getMeasurements(),
			this.getSize(),
			this.getScrollOffset(),
			this.options.lanes
		], (e, t, n, r) => e.length === 0 || t === 0 ? (this.range = null, null) : (this.range = Ej(e, t, n, r, r === 1 && this._flatMeasurements != null ? this._flatMeasurements : null), this.range), {
			key: process.env.NODE_ENV !== "production" && "calculateRange",
			debug: () => this.options.debug
		}), this.getVirtualIndexes = sj(() => {
			let e = null, t = null, n = this.calculateRange();
			return n && (e = n.startIndex, t = n.endIndex), this.maybeNotify.updateDeps([
				this.isScrolling,
				e,
				t
			]), [
				this.options.rangeExtractor,
				this.options.overscan,
				this.options.count,
				e,
				t
			];
		}, (e, t, n, r, i) => r === null || i === null ? [] : e({
			startIndex: r,
			endIndex: i,
			overscan: t,
			count: n
		}), {
			key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
			debug: () => this.options.debug
		}), this.indexFromElement = (e) => {
			let t = this.options.indexAttribute, n = e.getAttribute(t);
			return n ? parseInt(n, 10) : (console.warn(`Missing attribute name '${t}={index}' on measured element.`), -1);
		}, this.shouldMeasureDuringScroll = (e) => {
			if (!this.scrollState || this.scrollState.behavior !== "smooth") return !0;
			let t = this.scrollState.index ?? this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)?.index;
			if (t !== void 0 && this.range) {
				let n = Math.max(this.options.overscan, Math.ceil((this.range.endIndex - this.range.startIndex) / 2)), r = Math.max(0, t - n), i = Math.min(this.options.count - 1, t + n);
				return e >= r && e <= i;
			}
			return !0;
		}, this.measureElement = (e) => {
			if (!e) {
				this.elementsCache.forEach((e, t) => {
					e.isConnected || (this.observer.unobserve(e), this.elementsCache.delete(t));
				});
				return;
			}
			let t = this.indexFromElement(e), n = this.options.getItemKey(t), r = this.elementsCache.get(n);
			r !== e && (r && this.observer.unobserve(r), this.observer.observe(e), this.elementsCache.set(n, e)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(t) && this.resizeItem(t, this.options.measureElement(e, void 0, this));
		}, this.resizeItem = (e, t) => {
			if (e < 0 || e >= this.options.count) return;
			let n, r, i, a = this._flatMeasurements;
			if (this.options.lanes === 1 && a !== null) i = this.options.getItemKey(e), r = a[e * 2], n = a[e * 2 + 1];
			else {
				let t = this.measurementsCache[e];
				if (!t) return;
				i = t.key, r = t.start, n = t.size;
			}
			let o = this.itemSizeCache.get(i) ?? n, s = t - o;
			if (s !== 0) {
				let a = this.options.anchorTo === "end" && this.scrollState?.behavior !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, c = a ? this.getTotalSize() : 0, l = this.getScrollOffset() + this.scrollAdjustments, u = this.itemSizeCache.has(i) ? r + o <= l && this.scrollDirection !== "backward" : r < l, d = this.scrollState?.behavior !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange === void 0 ? u : this.shouldAdjustScrollPositionOnItemSizeChange(this.measurementsCache[e] ?? {
					index: e,
					key: i,
					start: r,
					size: n,
					end: r + n,
					lane: 0
				}, s, this));
				(this.pendingMin === null || e < this.pendingMin) && (this.pendingMin = e), this.itemSizeCache.set(i, t), this.itemSizeCacheVersion++, a ? this.applyScrollAdjustment(this.getTotalSize() - c) : d && this.applyScrollAdjustment(s), this.notify(!1);
			}
		}, this.getVirtualItems = sj(() => [this.getVirtualIndexes(), this.getMeasurements()], (e, t) => {
			let n = [];
			for (let r = 0, i = e.length; r < i; r++) {
				let i = t[e[r]];
				n.push(i);
			}
			return n;
		}, {
			key: process.env.NODE_ENV !== "production" && "getVirtualItems",
			debug: () => this.options.debug
		}), this.getVirtualItemForOffset = (e) => {
			let t = this.getMeasurements();
			if (t.length === 0) return;
			let n = this._flatMeasurements, r = this.options.lanes === 1 && n != null;
			return cj(t[wj(0, t.length - 1, r ? (e) => n[e * 2] : (e) => cj(t[e]).start, e)]);
		}, this.getMaxScrollOffset = () => {
			if (!this.scrollElement) return 0;
			if ("scrollHeight" in this.scrollElement) return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
			{
				let e = this.scrollElement.document.documentElement;
				return this.options.horizontal ? e.scrollWidth - this.scrollElement.innerWidth : e.scrollHeight - this.scrollElement.innerHeight;
			}
		}, this.getVirtualDistanceFromEnd = () => Math.max(this.getTotalSize() - this.getSize() - this.getScrollOffset(), 0), this.getDistanceFromEnd = () => Math.max(this.getMaxScrollOffset() - this.getScrollOffset(), 0), this.isAtEnd = (e = this.options.scrollEndThreshold) => this.getDistanceFromEnd() <= e, this.getOffsetForAlignment = (e, t, n = 0) => {
			if (!this.scrollElement) return 0;
			let r = this.getSize(), i = this.getScrollOffset();
			t === "auto" && (t = e >= i + r ? "end" : "start"), t === "center" ? e += (n - r) / 2 : t === "end" && (e -= r);
			let a = this.getMaxScrollOffset();
			return Math.max(Math.min(a, e), 0);
		}, this.getOffsetForIndex = (e, t = "auto") => {
			e = Math.max(0, Math.min(e, this.options.count - 1));
			let n = this.getSize(), r = this.getScrollOffset(), i = this.measurementsCache[e];
			if (!i) return;
			if (t === "auto") if (i.end >= r + n - this.options.scrollPaddingEnd) t = "end";
			else if (i.start <= r + this.options.scrollPaddingStart) t = "start";
			else return [r, t];
			if (t === "end" && e === this.options.count - 1) return [this.getMaxScrollOffset(), t];
			let a = t === "end" ? i.end + this.options.scrollPaddingEnd : i.start - this.options.scrollPaddingStart;
			return [this.getOffsetForAlignment(a, t, i.size), t];
		}, this.scrollToOffset = (e, { align: t = "start", behavior: n = "auto" } = {}) => {
			this._iosDeferredAdjustment = 0;
			let r = this.getOffsetForAlignment(e, t), i = this.now();
			this.scrollState = {
				index: null,
				align: t,
				behavior: n,
				startedAt: i,
				lastTargetOffset: r,
				stableFrames: 0
			}, this._scrollToOffset(r, {
				adjustments: void 0,
				behavior: n
			}), this.scheduleScrollReconcile();
		}, this.scrollToIndex = (e, { align: t = "auto", behavior: n = "auto" } = {}) => {
			this._iosDeferredAdjustment = 0, e = Math.max(0, Math.min(e, this.options.count - 1));
			let r = this.getOffsetForIndex(e, t);
			if (!r) return;
			let [i, a] = r, o = this.now();
			this.scrollState = {
				index: e,
				align: a,
				behavior: n,
				startedAt: o,
				lastTargetOffset: i,
				stableFrames: 0
			}, this._scrollToOffset(i, {
				adjustments: void 0,
				behavior: n
			}), this.scheduleScrollReconcile();
		}, this.scrollBy = (e, { behavior: t = "auto" } = {}) => {
			let n = this.getScrollOffset() + e, r = this.now();
			this.scrollState = {
				index: null,
				align: "start",
				behavior: t,
				startedAt: r,
				lastTargetOffset: n,
				stableFrames: 0
			}, this._scrollToOffset(n, {
				adjustments: void 0,
				behavior: t
			}), this.scheduleScrollReconcile();
		}, this.scrollToEnd = ({ behavior: e = "auto" } = {}) => {
			if (this.options.count > 0) {
				this.scrollToIndex(this.options.count - 1, {
					align: "end",
					behavior: e
				});
				return;
			}
			this.scrollToOffset(Math.max(this.getTotalSize() - this.getSize(), 0), { behavior: e });
		}, this.getTotalSize = () => {
			let e = this.getMeasurements(), t;
			if (e.length === 0) t = this.options.paddingStart;
			else if (this.options.lanes === 1) {
				let n = e.length - 1, r = this._flatMeasurements;
				t = r == null ? e[n]?.end ?? 0 : r[n * 2] + r[n * 2 + 1];
			} else {
				let n = Array(this.options.lanes).fill(null), r = e.length - 1;
				for (; r >= 0 && n.some((e) => e === null);) {
					let t = e[r];
					n[t.lane] === null && (n[t.lane] = t.end), r--;
				}
				t = Math.max(...n.filter((e) => e !== null));
			}
			return Math.max(t - this.options.scrollMargin + this.options.paddingEnd, 0);
		}, this.takeSnapshot = () => {
			let e = [];
			if (this.itemSizeCache.size === 0) return e;
			let t = this.getMeasurements();
			for (let n of t) n && this.itemSizeCache.has(n.key) && e.push({
				index: n.index,
				key: n.key,
				start: n.start,
				size: n.size,
				end: n.end,
				lane: n.lane
			});
			return e;
		}, this._scrollToOffset = (e, { adjustments: t, behavior: n }) => {
			this._intendedScrollOffset = e + (t ?? 0), this.options.scrollToFn(e, {
				behavior: n,
				adjustments: t
			}, this);
		}, this.measure = () => {
			this.pendingMin = null, this.itemSizeCache.clear(), this.laneAssignments.clear(), this.itemSizeCacheVersion++, this.notify(!1);
		}, this.setOptions(e);
	}
	applyScrollAdjustment(e, t) {
		e !== 0 && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", e), fj() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? this._iosDeferredAdjustment += e : (this._scrollToOffset(this.getScrollOffset(), {
			adjustments: this.scrollAdjustments += e,
			behavior: t
		}), this.scrollOffset !== null && (this.scrollOffset += this.scrollAdjustments, this.scrollOffset < 0 && (this.scrollOffset = 0), this.scrollAdjustments = 0)));
	}
	scheduleScrollReconcile() {
		if (!this.targetWindow) {
			this.scrollState = null;
			return;
		}
		this.rafId ??= this.targetWindow.requestAnimationFrame(() => {
			this.rafId = null, this.reconcileScroll();
		});
	}
	reconcileScroll() {
		if (!this.scrollState || !this.scrollElement) return;
		if (this.now() - this.scrollState.startedAt > 5e3) {
			this.scrollState = null;
			return;
		}
		let e = this.scrollState.index == null ? void 0 : this.getOffsetForIndex(this.scrollState.index, this.scrollState.align), t = e ? e[0] : this.scrollState.lastTargetOffset, n = t !== this.scrollState.lastTargetOffset;
		if (!n && lj(t, this.getScrollOffset())) {
			if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= 1) {
				this.getScrollOffset() !== t && this._scrollToOffset(t, {
					adjustments: void 0,
					behavior: "auto"
				}), this.scrollState = null;
				return;
			}
		} else if (this.scrollState.stableFrames = 0, n) {
			let e = this.getSize() || 600, n = Math.abs(t - this.getScrollOffset()), r = this.scrollState.behavior === "smooth" && n > e;
			this.scrollState.lastTargetOffset = t, r || (this.scrollState.behavior = "auto"), this._scrollToOffset(t, {
				adjustments: void 0,
				behavior: r ? "smooth" : "auto"
			});
		}
		this.scheduleScrollReconcile();
	}
}, wj = (e, t, n, r) => {
	for (; e <= t;) {
		let i = (e + t) / 2 | 0, a = n(i);
		if (a < r) e = i + 1;
		else if (a > r) t = i - 1;
		else return i;
	}
	return e > 0 ? e - 1 : 0;
};
function Tj(e, t, n) {
	let r = 0;
	for (; r <= t;) {
		let i = (r + t) / 2 | 0, a = e[i * 2];
		if (a < n) r = i + 1;
		else if (a > n) t = i - 1;
		else return i;
	}
	return r > 0 ? r - 1 : 0;
}
function Ej(e, t, n, r, i) {
	let a = e.length - 1;
	if (e.length <= r) return {
		startIndex: 0,
		endIndex: a
	};
	if (r === 1 && i !== null) {
		let e = Tj(i, a, n), r = e, o = n + t;
		for (; r < a && i[r * 2] + i[r * 2 + 1] < o;) r++;
		return {
			startIndex: e,
			endIndex: r
		};
	}
	let o = wj(0, a, (t) => e[t].start, n), s = o;
	if (r === 1) for (; s < a && e[s].end < n + t;) s++;
	else if (r > 1) {
		let i = Array(r).fill(0);
		for (; s < a && i.some((e) => e < n + t);) {
			let t = e[s];
			i[t.lane] = t.end, s++;
		}
		let c = Array(r).fill(n + t);
		for (; o >= 0 && c.some((e) => e >= n);) {
			let t = e[o];
			c[t.lane] = t.start, o--;
		}
		o = Math.max(0, o - o % r), s = Math.min(a, s + (r - 1 - s % r));
	}
	return {
		startIndex: o,
		endIndex: s
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+react-virtual@3.14.8_react-dom@19.2.8_react@19.2.8/node_modules/@tanstack/react-virtual/dist/esm/index.js
var Dj = typeof document < "u" ? a.useLayoutEffect : a.useEffect;
function Oj({ useFlushSync: e = !0, directDomUpdates: t = !1, directDomUpdatesMode: n = "transform", ...r }) {
	let i = a.useReducer((e) => e + 1, 0)[1], o = a.useRef({
		enabled: t,
		mode: n,
		container: null,
		lastSize: null,
		lastPositions: /* @__PURE__ */ new WeakMap(),
		prevRange: null
	});
	o.current.enabled = t, o.current.mode = n;
	let s = (e) => {
		let t = o.current;
		if (!t.enabled || !t.container) return;
		let n = e.getTotalSize();
		if (n !== t.lastSize) {
			t.lastSize = n;
			let r = e.options.horizontal ? "width" : "height";
			t.container.style[r] = `${n}px`;
		}
	}, c = (e) => {
		let t = o.current;
		if (!t.enabled || !t.container) return;
		s(e);
		let n = !!e.options.horizontal, r = t.mode === "transform", i = n ? "left" : "top", a = e.options.scrollMargin, c = e.getVirtualItems();
		for (let o of c) {
			let s = o.start - a, c = e.elementsCache.get(o.key);
			c && t.lastPositions.get(c) !== s && (t.lastPositions.set(c, s), r ? c.style.transform = n ? `translate3d(${s}px, 0, 0)` : `translate3d(0, ${s}px, 0)` : c.style[i] = `${s}px`);
		}
	}, l = {
		...r,
		onChange: (t, n) => {
			var a;
			let s = o.current, l = !0;
			if (s.enabled) {
				c(t);
				let e = t.range, n = s.prevRange;
				l = !n || n.isScrolling !== t.isScrolling || n.startIndex !== e?.startIndex || n.endIndex !== e?.endIndex, l && (s.prevRange = e ? {
					startIndex: e.startIndex,
					endIndex: e.endIndex,
					isScrolling: t.isScrolling
				} : null);
			}
			l && (e && n ? De(i) : i()), (a = r.onChange) == null || a.call(r, t, n);
		}
	}, [u] = a.useState(() => {
		let e = new Cj(l);
		return Object.assign(e, { containerRef: (t) => {
			let n = o.current;
			if (n.container = t, n.lastSize = null, t && n.enabled) {
				let r = e.getTotalSize();
				n.lastSize = r;
				let i = e.options.horizontal ? "width" : "height";
				t.style[i] = `${r}px`;
			}
		} });
	});
	return u.setOptions(l), Dj(() => u._didMount(), []), Dj(() => (s(u), u._willUpdate())), Dj(() => {
		c(u);
	}), u;
}
function kj(e) {
	return Oj({
		observeElementRect: gj,
		observeElementOffset: bj,
		scrollToFn: Sj,
		...e
	});
}
//#endregion
//#region src/room/timeline/TimelineView/types.ts
var Aj = "backward-loading", jj = "forward-loading", Mj = {
	overlay: "_overlay_hs32j_13",
	topUnreadBar: "_topUnreadBar_hs32j_22",
	topUnreadBarScrollUp: "_topUnreadBarScrollUp_hs32j_43",
	topUnreadBarMarkAsRead: "_topUnreadBarMarkAsRead_hs32j_63",
	belowUnreadBar: "_belowUnreadBar_hs32j_85",
	belowUnreadBarScrollDown: "_belowUnreadBarScrollDown_hs32j_107",
	belowUnreadBarMarkAsRead: "_belowUnreadBarMarkAsRead_hs32j_127",
	jumpToBottom: "_jumpToBottom_hs32j_150",
	jumpToBottomBadge: "_jumpToBottomBadge_hs32j_163",
	highlight: "_highlight_hs32j_177",
	jumpToBottomScrollDown: "_jumpToBottomScrollDown_hs32j_181"
};
//#endregion
//#region src/room/timeline/TimelineView/TimelineOverlayButtons.tsx
function Nj({ snapshot: e, vm: t, scrollNow: n }) {
	let { translate: r } = B(), i = e.canJumpToReadMarker, a = !e.atLiveEnd || !e.isAtBottom, o = h(() => t.onJumpToReadMarker(n), [t, n]), s = h(() => t.onJumpToLive(n), [t, n]);
	return /* @__PURE__ */ (0, z.jsxs)("div", {
		className: Mj.overlay,
		children: [
			i === "above" && /* @__PURE__ */ (0, z.jsxs)("div", {
				className: Mj.topUnreadBar,
				children: [/* @__PURE__ */ (0, z.jsx)(F, {
					description: r("room|jump_read_marker"),
					placement: "left",
					children: /* @__PURE__ */ (0, z.jsx)("button", {
						className: Mj.topUnreadBarScrollUp,
						"aria-label": r("room|jump_read_marker"),
						onClick: o,
						type: "button",
						children: /* @__PURE__ */ (0, z.jsx)(bS, {})
					})
				}), /* @__PURE__ */ (0, z.jsx)(F, {
					description: r("notifications|mark_all_read"),
					placement: "left",
					children: /* @__PURE__ */ (0, z.jsx)("button", {
						className: Mj.topUnreadBarMarkAsRead,
						"aria-label": r("notifications|mark_all_read"),
						onClick: () => t.onMarkAllAsRead(),
						type: "button",
						children: /* @__PURE__ */ (0, z.jsx)(SS, {})
					})
				})]
			}),
			i === "below" && /* @__PURE__ */ (0, z.jsxs)("div", {
				className: Mj.belowUnreadBar,
				children: [/* @__PURE__ */ (0, z.jsx)(F, {
					description: r("room|jump_read_marker"),
					placement: "left",
					children: /* @__PURE__ */ (0, z.jsx)("button", {
						className: Mj.belowUnreadBarScrollDown,
						"aria-label": r("room|jump_read_marker"),
						onClick: o,
						type: "button",
						children: /* @__PURE__ */ (0, z.jsx)(mS, {})
					})
				}), /* @__PURE__ */ (0, z.jsx)(F, {
					description: r("notifications|mark_all_read"),
					placement: "left",
					children: /* @__PURE__ */ (0, z.jsx)("button", {
						className: Mj.belowUnreadBarMarkAsRead,
						"aria-label": r("notifications|mark_all_read"),
						onClick: () => t.onMarkAllAsRead(),
						type: "button",
						children: /* @__PURE__ */ (0, z.jsx)(SS, {})
					})
				})]
			}),
			a && /* @__PURE__ */ (0, z.jsxs)("div", {
				className: (0, R.default)(Mj.jumpToBottom, { [Mj.highlight]: e.hasHighlights }),
				children: [/* @__PURE__ */ (0, z.jsx)(F, {
					description: r("room|jump_to_bottom_button"),
					placement: "left",
					children: /* @__PURE__ */ (0, z.jsx)("button", {
						className: Mj.jumpToBottomScrollDown,
						"aria-label": r("room|jump_to_bottom_button"),
						onClick: s,
						type: "button",
						children: /* @__PURE__ */ (0, z.jsx)(mS, {})
					})
				}), e.numUnreadMessages > 0 && /* @__PURE__ */ (0, z.jsx)("div", {
					className: Mj.jumpToBottomBadge,
					children: e.numUnreadMessages
				})]
			})
		]
	});
}
var Pj = {
	root: "_root_1mj47_8",
	scroller: "_scroller_1mj47_14",
	hidden: "_hidden_1mj47_26",
	list: "_list_1mj47_30",
	tile: "_tile_1mj47_41",
	cover: "_cover_1mj47_51"
}, Fj = 48, Ij = 16, Lj = 4, Rj = 1e3;
function zj({ vm: e, renderItem: t }) {
	let n = H(e), r = w(n);
	r.current = n;
	let i = n.items, a = w(i);
	a.current = i;
	let o = w(null), [s, c] = T(!1), l = w(!1), u = h((e) => i[e]?.key ?? String(e), [i]), d = h((e) => e.key !== "backward-loading" && e.key !== "forward-loading", []), f = w("init"), p = w(null), m = w(null), g = w(""), v = w(""), y = h((t) => {
		if (f.current !== "live" || r.current.pendingAnchor !== null) return;
		let n = a.current.length, i = t.range;
		i && (p.current?.start !== i.startIndex || p.current?.end !== i.endIndex) && (p.current = {
			start: i.startIndex,
			end: i.endIndex
		}, e.onVisibleRangeChanged(i.startIndex, i.endIndex));
		let o = t.scrollOffset ?? 0, s = t.scrollRect?.height ?? 0, c = t.getTotalSize(), l = s > 0 && o + s >= c - Lj;
		l !== m.current && (m.current = l, e.onAtBottomStateChange(l));
		let u = t.getVirtualItems(), d = u.length ? u[0].index : -1, h = u.length ? u[u.length - 1].index : -1;
		if (d === 0) {
			let t = `${n}:${i ? i.startIndex : 0}`;
			g.current !== t && (g.current = t, e.onStartReached());
		} else g.current = "";
		if (n > 0 && h === n - 1) {
			let t = `${n}:${i ? i.endIndex : 0}`;
			v.current !== t && (v.current = t, e.onEndReached());
		} else v.current = "";
	}, [e]), b = kj({
		count: i.length,
		getScrollElement: () => o.current,
		estimateSize: () => Fj,
		getItemKey: u,
		overscan: Ij,
		anchorTo: "end",
		isValidAnchorItem: d,
		followOnAppend: n.atLiveEnd && n.pendingAnchor === null,
		directDomUpdates: !0,
		onChange: y
	}), S = h((e, t) => {
		let n = e ? a.current.findIndex((t) => t.key === e) : -1;
		if (n < 0) return null;
		let r = b.getOffsetForIndex(n, t);
		return r ? r[0] : null;
	}, [b]), C = w(void 0);
	_(() => () => {
		C.current !== void 0 && cancelAnimationFrame(C.current);
	}, []), x(() => {
		if (f.current !== "init" || i.length === 0) return;
		f.current = "placing";
		let t = r.current.pendingAnchor, n = a.current, o = t ? n.findIndex((e) => e.key === t.targetKey) : -1;
		o < 0 && (o = n.length - 1);
		let s = t?.align ?? "end";
		o >= 0 && b.scrollToIndex(o, {
			align: s,
			behavior: "auto"
		});
		let u, d = (t) => {
			u ??= t;
			let n = b.getOffsetForIndex(o, s), r = b.scrollOffset ?? 0;
			if (n !== void 0 && Math.abs(n[0] - r) <= 1.5 || t - u >= Rj) {
				f.current = "live", l.current || (l.current = !0, c(!0)), e.onAnchorReached();
				return;
			}
			C.current = requestAnimationFrame(d);
		};
		C.current = requestAnimationFrame(d);
	}, [
		i.length,
		b,
		e
	]);
	let E = w(null);
	x(() => {
		if (f.current !== "live") return;
		let t = r.current.pendingAnchor;
		if (!t) {
			E.current = null;
			return;
		}
		if (E.current !== t.targetKey) {
			let n = S(t.targetKey, t.align);
			n !== null && (b.scrollToOffset(n), E.current = t.targetKey, e.onAnchorReached());
		}
	});
	let ee = h((e) => {
		let t = S(e.targetKey, e.align);
		t !== null && b.scrollToOffset(t);
	}, [S, b]), D = b.getVirtualItems();
	return /* @__PURE__ */ (0, z.jsxs)("div", {
		className: Pj.root,
		children: [
			/* @__PURE__ */ (0, z.jsx)("div", {
				ref: o,
				"data-testid": "timeline-scroller",
				tabIndex: 0,
				className: (0, R.default)(Pj.scroller, { [Pj.hidden]: !s }),
				children: /* @__PURE__ */ (0, z.jsx)("ol", {
					ref: b.containerRef,
					className: (0, R.default)("mx_TimelineView_list", Pj.list),
					role: "list",
					children: D.map((e) => {
						let n = i[e.index];
						return n ? /* @__PURE__ */ (0, z.jsx)("li", {
							className: (0, R.default)("mx_TimelineView_tile", Pj.tile),
							"data-index": e.index,
							"data-key": n.key,
							ref: b.measureElement,
							children: t(n)
						}, e.key) : null;
					})
				})
			}),
			!s && /* @__PURE__ */ (0, z.jsx)("div", {
				className: Pj.cover,
				children: /* @__PURE__ */ (0, z.jsx)(ce, { size: 32 })
			}),
			s && /* @__PURE__ */ (0, z.jsx)(Nj, {
				snapshot: n,
				vm: e,
				scrollNow: ee
			})
		]
	});
}
var Bj = {
	toolbar: "_toolbar_1ksun_8",
	toolbar_item: "_toolbar_item_1ksun_14"
};
//#endregion
//#region src/room/timeline/event-tile/actions/ActionBarView/ActionBarButton.tsx
function Vj({ presentation: e, buttonRef: t, label: n, onActivate: r, icon: i, disabled: a, ariaPressed: o, ariaExpanded: s, tooltipDescription: c, tooltipCaption: l }) {
	let u = e === "icon", [d, f, p] = Fx(), m = w(null), h = NA([
		t,
		m,
		a ? null : p
	]), g = a || !f ? -1 : 0;
	return x(() => {
		m.current && (m.current.tabIndex = g);
	}, [g]), /* @__PURE__ */ (0, z.jsx)(F, {
		description: c ?? n,
		caption: l,
		placement: "top",
		children: /* @__PURE__ */ (0, z.jsx)(k, {
			"data-presentation": e,
			ref: h,
			kind: "tertiary",
			size: "md",
			iconOnly: u,
			"aria-label": n,
			"aria-pressed": o,
			"aria-expanded": s,
			disabled: a,
			onClick: (e) => r?.(e.currentTarget),
			onContextMenu: (e) => {
				e.preventDefault(), e.stopPropagation(), r?.(e.currentTarget);
			},
			onFocus: a ? void 0 : d,
			className: Bj.toolbar_item,
			Icon: u ? i : void 0,
			children: u ? void 0 : n
		})
	});
}
//#endregion
//#region src/room/timeline/event-tile/actions/ActionBarView/ActionBarView.tsx
var Hj = /* @__PURE__ */ function(e) {
	return e.Cancel = "cancel", e.CopyLink = "copyLink", e.Download = "download", e.Edit = "edit", e.Expand = "expand", e.Hide = "hide", e.Options = "options", e.Pin = "pin", e.React = "react", e.Remove = "remove", e.Reply = "reply", e.ReplyInThread = "replyInThread", e.Resend = "resend", e.ViewInRoom = "viewInRoom", e.ViewSource = "viewSource", e;
}({});
function Uj({ vm: e, className: t }) {
	let { translate: n } = B(), { actions: r, presentation: i = "icon", isThreadReplyAllowed: a, isDownloadEncrypted: o, isDownloadLoading: s, isPinned: c, isQuoteExpanded: l, downloadScanState: u } = H(e), d = w({}), f = S(() => Object.fromEntries(Object.values(Hj).map((e) => [e, (t) => {
		d.current[e] = t;
	}])), []), p = {};
	p.edit = /* @__PURE__ */ (0, z.jsx)(Vj, {
		presentation: i,
		buttonRef: f.edit,
		label: n("action|edit"),
		onActivate: e.onEditClick,
		icon: RS
	}, "edit");
	let m = n(c ? "action|unpin" : "action|pin");
	p.pin = /* @__PURE__ */ (0, z.jsx)(Vj, {
		presentation: i,
		buttonRef: f.pin,
		label: m,
		onActivate: e.onPinClick,
		icon: c ? uw : IC,
		ariaPressed: c
	}, "pin"), p.cancel = /* @__PURE__ */ (0, z.jsx)(Vj, {
		presentation: i,
		buttonRef: f.cancel,
		label: n("action|delete"),
		onActivate: e.onCancelClick,
		icon: OS
	}, "cancel"), p.copyLink = /* @__PURE__ */ (0, z.jsx)(Vj, {
		presentation: i,
		buttonRef: f.copyLink,
		label: n("timeline|mab|copy_link_thread"),
		onActivate: e.onCopyLinkClick,
		icon: mC
	}, "copyLink"), p.reply = /* @__PURE__ */ (0, z.jsx)(Vj, {
		presentation: i,
		buttonRef: f.reply,
		label: n("action|reply"),
		onActivate: e.onReplyClick,
		icon: JC
	}, "reply"), p.react = /* @__PURE__ */ (0, z.jsx)(Vj, {
		presentation: i,
		buttonRef: f.react,
		label: n("action|react"),
		onActivate: e.onReactionsClick,
		icon: WC
	}, "react");
	let g = n("action|download");
	s && (g = n(o ? "timeline|download_action_decrypting" : "timeline|download_action_downloading")), p.download = /* @__PURE__ */ (0, z.jsx)(Vj, {
		presentation: i,
		buttonRef: f.download,
		label: g,
		onActivate: e.onDownloadClick,
		icon: s || u === "scanning" ? ce : u === "unsafe" ? iS : PS,
		disabled: s || u === "unsafe"
	}, "download"), p.hide = /* @__PURE__ */ (0, z.jsx)(Vj, {
		presentation: i,
		buttonRef: f.hide,
		label: n("action|hide"),
		onActivate: e.onHideClick,
		icon: Sw
	}, "hide");
	let _ = n(a ? "action|reply_in_thread" : "threads|error_start_thread_existing_relation");
	p.replyInThread = /* @__PURE__ */ (0, z.jsx)(Vj, {
		presentation: i,
		buttonRef: f.replyInThread,
		label: n("action|reply_in_thread"),
		tooltipDescription: _,
		onActivate: e.onReplyInThreadClick,
		icon: cw,
		disabled: !a
	}, "replyInThread"), p.resend = /* @__PURE__ */ (0, z.jsx)(Vj, {
		presentation: i,
		buttonRef: f.resend,
		label: n("action|retry"),
		onActivate: e.onResendClick,
		icon: XC
	}, "resend");
	let v = n(l ? "timeline|mab|collapse_reply_chain" : "timeline|mab|expand_reply_chain");
	p.expand = /* @__PURE__ */ (0, z.jsx)(Vj, {
		presentation: i,
		buttonRef: f.expand,
		label: v,
		tooltipCaption: `${n("keyboard|shift")} + ${n("action|click")}`,
		onActivate: e.onToggleThreadExpanded,
		icon: l ? ES : JS,
		ariaExpanded: l
	}, "expand"), p.options = /* @__PURE__ */ (0, z.jsx)(Vj, {
		presentation: i,
		buttonRef: f.options,
		label: n("common|options"),
		onActivate: e.onOptionsClick,
		icon: MC
	}, "options"), p.remove = /* @__PURE__ */ (0, z.jsx)(Vj, {
		presentation: i,
		buttonRef: f.remove,
		label: n("action|remove"),
		onActivate: e.onRemoveClick,
		icon: OS
	}, "remove"), p.viewInRoom = /* @__PURE__ */ (0, z.jsx)(Vj, {
		presentation: i,
		buttonRef: f.viewInRoom,
		label: n("timeline|mab|view_in_room"),
		onActivate: e.onViewInRoomClick,
		icon: ww
	}, "viewInRoom"), p.viewSource = /* @__PURE__ */ (0, z.jsx)(Vj, {
		presentation: i,
		buttonRef: f.viewSource,
		label: n("action|view_source"),
		onActivate: e.onViewSourceClick,
		icon: uC
	}, "viewSource");
	let y = h((e) => {
		switch (e) {
			case "download": return s;
			case "replyInThread": return !a;
			default: return !1;
		}
	}, [s, a]), b = S(() => r.map((e) => ({
		action: e,
		disabled: y(e)
	})), [r, y]), x = b.map(({ action: e, disabled: t }) => `${e}:${t ? "1" : "0"}`).join("|");
	return b.length === 0 ? null : /* @__PURE__ */ (0, z.jsx)(Px, {
		handleLeftRight: !0,
		handleHomeEnd: !0,
		handleLoop: !0,
		children: ({ onKeyDownHandler: e }) => /* @__PURE__ */ (0, z.jsx)(V, {
			display: "inline-flex",
			direction: "row",
			role: "toolbar",
			"aria-label": n("timeline|mab|label"),
			"aria-live": "off",
			onKeyDown: e,
			className: (0, R.default)(t, Bj.toolbar),
			children: b.map((e) => p[e.action])
		})
	}, x);
}
var Wj = {
	disambiguatedProfile: "_disambiguatedProfile_4jooo_8",
	disambiguatedProfile_displayName: "_disambiguatedProfile_displayName_4jooo_14",
	disambiguatedProfile_mxid: "_disambiguatedProfile_mxid_4jooo_22",
	userStatus: "_userStatus_4jooo_28"
};
//#endregion
//#region src/room/timeline/event-tile/EventTileView/DisambiguatedProfile/DisambiguatedProfileView.tsx
function Gj({ vm: e, className: t }) {
	let { displayName: n, colorClass: r, displayIdentifier: i, title: a, emphasizeDisplayName: o, userStatus: s } = H(e), c = s && s.emoji, l = (0, R.default)(r, {
		[Wj.disambiguatedProfile_displayName]: o,
		mx_DisambiguatedProfile_displayName: o
	}), u = e.onClick ? (t) => {
		(t.key === "Enter" || t.key === " ") && (t.preventDefault(), e.onClick?.(t));
	} : void 0;
	return /* @__PURE__ */ (0, z.jsxs)("div", {
		className: (0, R.default)(t, Wj.disambiguatedProfile),
		title: a,
		onClick: e.onClick,
		onKeyDown: u,
		role: e.onClick ? "button" : void 0,
		tabIndex: e.onClick ? 0 : void 0,
		children: [
			/* @__PURE__ */ (0, z.jsx)("span", {
				className: l,
				dir: "auto",
				children: n
			}),
			s && /* @__PURE__ */ (0, z.jsx)(F, {
				description: s.text,
				children: /* @__PURE__ */ (0, z.jsx)(P, {
					as: "span",
					size: "md",
					className: (0, R.default)("mx_DisambiguatedProfile_userStatus", Wj.userStatus),
					children: c
				})
			}),
			i && /* @__PURE__ */ (0, z.jsx)("span", {
				className: (0, R.default)("mx_DisambiguatedProfile_mxid", Wj.disambiguatedProfile_mxid),
				children: i
			})
		]
	});
}
var Kj = {
	e2ePadlock: "_e2ePadlock_1hynz_8",
	normal: "_normal_1hynz_21",
	decryptionFailure: "_decryptionFailure_1hynz_22",
	warning: "_warning_1hynz_26"
}, qj = /* @__PURE__ */ function(e) {
	return e.Normal = "normal", e.Warning = "warning", e.DecryptionFailure = "decryption_failure", e;
}({}), Jj = {
	normal: /* @__PURE__ */ (0, z.jsx)(cC, {}),
	warning: /* @__PURE__ */ (0, z.jsx)(HS, {}),
	decryption_failure: /* @__PURE__ */ (0, z.jsx)(HS, {})
}, Yj = {
	normal: Kj.normal,
	warning: Kj.warning,
	decryption_failure: Kj.decryptionFailure
};
function Xj({ icon: e, title: t, className: n }) {
	return /* @__PURE__ */ (0, z.jsx)(F, {
		label: t,
		isTriggerInteractive: !0,
		children: /* @__PURE__ */ (0, z.jsx)("div", {
			"data-testid": "e2e-padlock",
			className: (0, R.default)(Kj.e2ePadlock, Yj[e], n),
			role: "img",
			tabIndex: 0,
			"aria-label": U("timeline|e2e_state"),
			children: Jj[e]
		})
	});
}
//#endregion
//#region src/room/timeline/event-tile/EventTileView/E2eMessageSharedIcon/E2eMessageSharedIconView.tsx
function Zj({ vm: e, className: t }) {
	let { displayName: n, userId: r } = H(e), i = U("timeline|message_shared_by", {
		displayName: n,
		userId: r
	});
	return /* @__PURE__ */ (0, z.jsx)(Xj, {
		className: t,
		icon: qj.Normal,
		title: i
	});
}
var Qj = { content: "_content_ufv8a_8" }, $j = {
	container: "_container_sq5fu_8",
	title: "_title_sq5fu_34",
	subtitle: "_subtitle_sq5fu_35"
};
//#endregion
//#region src/room/timeline/event-tile/EventTileView/EventTileBubble/EventTileBubble.tsx
function eM({ icon: e, title: t, subtitle: n, className: r, children: i, ref: a }) {
	return /* @__PURE__ */ (0, z.jsxs)("div", {
		className: (0, R.default)($j.container, r),
		ref: a,
		children: [
			e,
			/* @__PURE__ */ (0, z.jsx)("div", {
				className: $j.title,
				children: t
			}),
			n && /* @__PURE__ */ (0, z.jsx)("div", {
				className: $j.subtitle,
				children: n
			}),
			i
		]
	});
}
//#endregion
//#region src/room/timeline/event-tile/EventTileView/EncryptionEventView/EncryptionEventView.tsx
var tM = /* @__PURE__ */ function(e) {
	return e.CHANGED = "CHANGED", e.DISABLE_ATTEMPT = "DISABLE_ATTEMPT", e.ENABLED = "ENABLED", e.ENABLED_DM = "ENABLED_DM", e.ENABLED_LOCAL = "ENABLED_LOCAL", e.UNSUPPORTED = "UNSUPPORTED", e;
}({});
function nM({ vm: e, ref: t, className: n }) {
	let { translate: r } = B(), { state: i, encryptedStateEvents: a, userName: o, timestamp: s } = H(e), c = /* @__PURE__ */ (0, z.jsx)(gC, { "data-state": "supported" }), l = r(a ? "common|state_encryption_enabled" : "common|encryption_enabled"), u = "";
	switch (i) {
		case "CHANGED":
			u = r("timeline|m.room.encryption|parameters_changed");
			break;
		case "DISABLE_ATTEMPT":
			l = r("common|encryption_enabled"), u = r("timeline|m.room.encryption|disable_attempt");
			break;
		case "ENABLED":
			u = r(a ? "timeline|m.room.encryption|state_enabled" : "timeline|m.room.encryption|enabled");
			break;
		case "ENABLED_DM":
			u = r("timeline|m.room.encryption|enabled_dm", { displayName: o });
			break;
		case "ENABLED_LOCAL":
			u = r("timeline|m.room.encryption|enabled_local");
			break;
		default: c = /* @__PURE__ */ (0, z.jsx)(HS, { "data-state": "unsupported" }), l = r("timeline|m.room.encryption|disabled"), u = r("timeline|m.room.encryption|unsupported");
	}
	return /* @__PURE__ */ (0, z.jsx)(eM, {
		icon: c,
		className: (0, R.default)(n, Qj.content),
		title: l,
		subtitle: u,
		ref: t,
		children: s
	});
}
var rM = { eventPreview: "_eventPreview_w0s50_8" };
//#endregion
//#region src/room/timeline/event-tile/EventTileView/EventPreviewView/EventPreviewView.tsx
function iM({ vm: e, className: t, ...n }) {
	let { isVisible: r, previewContent: i, previewTooltip: a } = H(e);
	if (!r || !i) return /* @__PURE__ */ (0, z.jsx)(z.Fragment, {});
	let o = /* @__PURE__ */ (0, z.jsx)("span", {
		...n,
		className: (0, R.default)("mx_EventPreview", rM.eventPreview, t),
		children: i
	});
	return a ? /* @__PURE__ */ (0, z.jsx)(F, {
		description: a,
		children: o
	}) : o;
}
var q = {
	root: "_root_rgnlr_9",
	stateContinuation: "_stateContinuation_rgnlr_47",
	line: "_line_rgnlr_52",
	slotActionBar: "_slotActionBar_rgnlr_60",
	slotAvatar: "_slotAvatar_rgnlr_61",
	slotBody: "_slotBody_rgnlr_62",
	slotContextMenu: "_slotContextMenu_rgnlr_63",
	slotFooter: "_slotFooter_rgnlr_64",
	slotNotificationBadge: "_slotNotificationBadge_rgnlr_65",
	slotNotificationRoomLabel: "_slotNotificationRoomLabel_rgnlr_66",
	slotPadlock: "_slotPadlock_rgnlr_67",
	slotReceipt: "_slotReceipt_rgnlr_68",
	slotReplyChain: "_slotReplyChain_rgnlr_69",
	slotSender: "_slotSender_rgnlr_70",
	slotThreadInfo: "_slotThreadInfo_rgnlr_71",
	slotTimestamp: "_slotTimestamp_rgnlr_72",
	senderDetails: "_senderDetails_rgnlr_81",
	details: "_details_rgnlr_86",
	layoutGroup: "_layoutGroup_rgnlr_109",
	stateHighlighted: "_stateHighlighted_rgnlr_115",
	stateSelected: "_stateSelected_rgnlr_119",
	stateEditing: "_stateEditing_rgnlr_120",
	layoutIrc: "_layoutIrc_rgnlr_208",
	layoutBubble: "_layoutBubble_rgnlr_307",
	stateOwnEvent: "_stateOwnEvent_rgnlr_415",
	stateLastInSection: "_stateLastInSection_rgnlr_501",
	shapeThread: "_shapeThread_rgnlr_516",
	shapeThreadsList: "_shapeThreadsList_rgnlr_562",
	shapeNotification: "_shapeNotification_rgnlr_649",
	shapeFile: "_shapeFile_rgnlr_738",
	senderDetailsLink: "_senderDetailsLink_rgnlr_742"
};
//#endregion
//#region src/room/timeline/event-tile/EventTileView/EventTileView.tsx
function aM({ root: e, slots: t, classNames: n, refs: r, onMouseEnter: i, onMouseLeave: a, onFocus: o, onBlur: s, onClick: c, onContextMenu: l, onPermalinkClick: u, onPermalinkContextMenu: d }) {
	let f = e.as ?? "li", p = (e, r = t[e]) => {
		if (r == null || typeof r == "boolean") return null;
		let { style: i, className: a } = {
			avatar: {
				style: q.slotAvatar,
				className: "slotAvatar"
			},
			sender: {
				style: q.slotSender,
				className: "slotSender"
			},
			body: {
				style: q.slotBody,
				className: "slotBody"
			},
			timestamp: {
				style: q.slotTimestamp,
				className: "slotTimestamp"
			},
			padlock: {
				style: q.slotPadlock,
				className: "slotPadlock"
			},
			replyChain: {
				style: q.slotReplyChain,
				className: "slotReplyChain"
			},
			actionBar: {
				style: q.slotActionBar,
				className: "slotActionBar"
			},
			footer: {
				style: q.slotFooter,
				className: "slotFooter"
			},
			threadInfo: {
				style: q.slotThreadInfo,
				className: "slotThreadInfo"
			},
			receipt: {
				style: q.slotReceipt,
				className: "slotReceipt"
			},
			roomAvatar: {
				style: q.slotAvatar,
				className: "slotAvatar"
			},
			notificationRoomLabel: {
				style: q.slotNotificationRoomLabel,
				className: "slotNotificationRoomLabel"
			},
			notificationBadge: {
				style: q.slotNotificationBadge,
				className: "slotNotificationBadge"
			},
			contextMenu: {
				style: q.slotContextMenu,
				className: "slotContextMenu"
			}
		}[e];
		return /* @__PURE__ */ (0, z.jsx)("div", {
			"data-testid": `event-tile-slot-${e}`,
			className: (0, R.default)(i, n?.[a]),
			children: r
		}, e);
	}, m = (...e) => e.map((e) => p(e)), h = (t, c, l) => /* @__PURE__ */ (0, z.jsx)(f, {
		ref: r?.root,
		className: (0, R.default)(q.root, n?.root, {
			[q.stateOwnEvent]: e.state.isOwnEvent,
			[q.stateHighlighted]: e.state?.highlighted,
			[q.stateSelected]: e.state?.selected,
			[q.stateEditing]: e.state?.editing,
			[q.stateContinuation]: e.state?.continuation,
			[q.stateLastInSection]: e.state?.lastInSection,
			[q.layoutGroup]: e.layout === "group",
			[q.layoutBubble]: e.layout === "bubble",
			[q.layoutIrc]: e.layout === "irc",
			[q.shapeThread]: e.shape === "Thread",
			[q.shapeThreadsList]: e.shape === "ThreadsList",
			[q.shapeFile]: e.shape === "File",
			[q.shapeNotification]: e.shape === "Notification"
		}),
		"aria-live": e.ariaLive,
		"aria-atomic": !0,
		"data-scroll-tokens": e.scrollToken,
		"data-event-id": e.eventId,
		tabIndex: l,
		onMouseEnter: i,
		onMouseLeave: a,
		onFocus: o,
		onBlur: s,
		onClick: c,
		children: t
	});
	return e.shape === "Thread" ? h(/* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [
		/* @__PURE__ */ (0, z.jsx)("div", {
			className: (0, R.default)(q.senderDetails, n?.senderDetails),
			children: m("avatar", "sender")
		}),
		/* @__PURE__ */ (0, z.jsx)("div", {
			id: e.id,
			className: (0, R.default)(q.line, n?.line),
			onContextMenu: l,
			children: m("contextMenu", "replyChain", "body", "actionBar", "timestamp", "receipt")
		}),
		p("footer")
	] }), void 0) : e.shape === "Notification" ? h(/* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [
		/* @__PURE__ */ (0, z.jsx)("div", {
			className: (0, R.default)(q.details, n?.details),
			children: m("sender", "notificationRoomLabel", "timestamp", "notificationBadge")
		}),
		t.roomAvatar ? p("roomAvatar") : p("avatar"),
		/* @__PURE__ */ (0, z.jsx)("div", {
			className: (0, R.default)(q.line, n?.line),
			id: e.id,
			children: m("body", "threadInfo")
		}),
		p("receipt")
	] }), c, -1) : e.shape === "ThreadsList" ? h(/* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [
		/* @__PURE__ */ (0, z.jsx)("div", {
			className: (0, R.default)(q.details, n?.details),
			children: m("sender", "notificationRoomLabel", "timestamp", "notificationBadge")
		}),
		p("avatar"),
		/* @__PURE__ */ (0, z.jsx)("div", {
			className: (0, R.default)(q.line, n?.line),
			id: e.id,
			children: m("body", "threadInfo")
		}),
		p("actionBar"),
		p("receipt")
	] }), c, -1) : e.shape === "File" ? h(/* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [/* @__PURE__ */ (0, z.jsx)("a", {
		className: (0, R.default)(q.senderDetailsLink, n?.senderDetailsLink),
		href: e.permalink ?? "#",
		onClick: u,
		children: /* @__PURE__ */ (0, z.jsx)("div", {
			className: (0, R.default)(q.senderDetails, n?.senderDetails),
			onContextMenu: d,
			children: m("avatar", "sender", "timestamp")
		})
	}), /* @__PURE__ */ (0, z.jsx)("div", {
		id: e.id,
		className: (0, R.default)(q.line, n?.line),
		onContextMenu: l,
		children: m("contextMenu", "body")
	})] }), void 0) : e.layout === "irc" ? h(/* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [
		m("padlock", "timestamp", "avatar", "sender"),
		/* @__PURE__ */ (0, z.jsx)("div", {
			id: e.id,
			className: (0, R.default)(q.line, n?.line),
			onContextMenu: l,
			children: m("contextMenu", "replyChain", "body", "actionBar", "footer", "threadInfo")
		}),
		p("receipt")
	] }), void 0, -1) : h(/* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [
		m("sender", "avatar"),
		/* @__PURE__ */ (0, z.jsx)("div", {
			id: e.id,
			className: (0, R.default)(q.line, n?.line),
			onContextMenu: l,
			children: m("contextMenu", "timestamp", "padlock", "replyChain", "body", "actionBar")
		}),
		m("footer", "threadInfo", "receipt")
	] }), void 0, -1);
}
var oM = {
	container: "_container_1opqj_8",
	title: "_title_1opqj_20",
	time: "_time_1opqj_25",
	icon: "_icon_1opqj_30"
};
//#endregion
//#region src/room/timeline/event-tile/call/tombstone/room/RoomTombstoneCallTileView.tsx
function sM({ vm: e, className: t }) {
	let { translate: n } = B(), { timestamp: r } = H(e), i = (0, R.default)(t, oM.container);
	return /* @__PURE__ */ (0, z.jsxs)(V, {
		className: i,
		align: "center",
		gap: "var(--cpd-space-2x)",
		children: [
			/* @__PURE__ */ (0, z.jsx)(gw, {
				className: oM.icon,
				width: 20,
				height: 20
			}),
			/* @__PURE__ */ (0, z.jsx)("div", {
				className: oM.title,
				children: n("timeline|call_tile|tombstone|room|title")
			}),
			/* @__PURE__ */ (0, z.jsx)("div", {
				className: oM.time,
				children: r
			})
		]
	});
}
//#endregion
//#region src/room/timeline/event-tile/call/common.ts
var cM = /* @__PURE__ */ function(e) {
	return e.Voice = "voice", e.Video = "video", e;
}({}), lM = /* @__PURE__ */ function(e) {
	return e.Incoming = "Incoming", e.Outgoing = "Outgoing", e;
}({});
//#endregion
//#region src/room/timeline/event-tile/call/tombstone/dm/DmTombstoneCallTileView.tsx
function uM(e, t) {
	let n = t ? gw : vw, r = t ? Ew : Ow;
	switch (e) {
		case cM.Video: return /* @__PURE__ */ (0, z.jsx)(n, {
			className: oM.icon,
			width: 20,
			height: 20
		});
		case cM.Voice: return /* @__PURE__ */ (0, z.jsx)(r, {
			className: oM.icon,
			width: 20,
			height: 20
		});
	}
}
function dM({ vm: e, className: t }) {
	let n = H(e), { type: r, timestamp: i, isCallDeclined: a } = n, o = (0, R.default)(t, oM.container);
	return /* @__PURE__ */ (0, z.jsxs)(V, {
		className: o,
		align: "center",
		gap: "var(--cpd-space-2x)",
		children: [
			uM(r, a),
			/* @__PURE__ */ (0, z.jsx)("div", {
				className: oM.title,
				children: a ? /* @__PURE__ */ (0, z.jsx)(pM, { snapshot: n }) : /* @__PURE__ */ (0, z.jsx)(fM, { snapshot: n })
			}),
			/* @__PURE__ */ (0, z.jsx)("div", {
				className: oM.time,
				children: i
			})
		]
	});
}
function fM(e) {
	let { type: t } = e.snapshot, { translate: n } = B();
	return t === cM.Voice ? n("timeline|call_tile|voice_call_title") : n("timeline|call_tile|video_call_title");
}
function pM(e) {
	let { callDirection: t } = e.snapshot, { translate: n } = B();
	return t === lM.Incoming ? n("timeline|call_tile|declined|call_declined_by_us") : n("timeline|call_tile|declined|call_declined");
}
var mM = { container: "_container_122d2_8" };
//#endregion
//#region src/room/timeline/event-tile/call/ongoing/components/TileContainer/TileContainer.tsx
function hM({ children: e }) {
	return /* @__PURE__ */ (0, z.jsx)(V, {
		direction: "row",
		align: "center",
		className: mM.container,
		children: e
	});
}
var gM = {
	container: "_container_ghpy6_8",
	icon: "_icon_ghpy6_15"
}, _M = ({ callType: e, classNames: t, height: n, width: r, ...i }) => {
	switch (e) {
		case cM.Video: return /* @__PURE__ */ (0, z.jsx)(vw, {
			className: t,
			width: r,
			height: n,
			...i
		});
		case cM.Voice: return /* @__PURE__ */ (0, z.jsx)(Ow, {
			className: t,
			width: r,
			height: n,
			...i
		});
	}
};
//#endregion
//#region src/room/timeline/event-tile/call/ongoing/components/CallIcon/CallIcon.tsx
function vM(e) {
	return /* @__PURE__ */ (0, z.jsx)(V, {
		align: "center",
		justify: "center",
		className: gM.container,
		children: /* @__PURE__ */ (0, z.jsx)(_M, {
			classNames: gM.icon,
			callType: e.callType,
			height: 20,
			width: 20
		})
	});
}
var yM = {
	title: "_title_11tya_8",
	content: "_content_11tya_19",
	avatar: "_avatar_11tya_26",
	facepile: "_facepile_11tya_30"
}, bM = {
	subContainer: "_subContainer_lhkzi_8",
	startedTextContainer: "_startedTextContainer_lhkzi_16"
};
//#endregion
//#region src/room/timeline/event-tile/call/ongoing/components/JoinButton/JoinButton.tsx
function xM(e) {
	return function(t) {
		return /* @__PURE__ */ (0, z.jsx)(_M, {
			callType: e,
			...t,
			height: 20,
			width: 20
		});
	};
}
function SM({ join: e, callType: t, ...n }) {
	let { translate: r } = B();
	return /* @__PURE__ */ (0, z.jsx)(k, {
		onClick: e,
		Icon: xM(t),
		size: "md",
		...n,
		children: r("timeline|call_tile|ongoing|common|join_button")
	});
}
var CM = { container: "_container_q8hft_8" };
//#endregion
//#region src/room/timeline/event-tile/call/ongoing/components/Duration/DurationView.tsx
function wM(e) {
	let { duration: t } = H(e.vm), n = (0, R.default)(CM.container, e.classNames);
	return /* @__PURE__ */ (0, z.jsxs)("div", {
		className: n,
		children: [
			"(",
			/* @__PURE__ */ (0, z.jsx)(ef, {
				seconds: t,
				minutesMaxLength: 1,
				className: n
			}),
			")"
		]
	});
}
//#endregion
//#region src/room/timeline/event-tile/call/ongoing/room/RoomOngoingCallTileView.tsx
function TM(e) {
	let t = H(e.vm), { isJoinable: n, isJoined: r, isCallIgnored: i, callHasOtherParticipants: a, durationViewModel: o } = t, { translate: s } = B();
	return /* @__PURE__ */ (0, z.jsx)(hM, { children: /* @__PURE__ */ (0, z.jsxs)(V, {
		align: "center",
		gap: "var(--cpd-space-3x)",
		className: yM.content,
		children: [
			/* @__PURE__ */ (0, z.jsx)(vM, { callType: cM.Video }),
			/* @__PURE__ */ (0, z.jsxs)(V, {
				direction: "column",
				className: yM.content,
				children: [/* @__PURE__ */ (0, z.jsx)("div", {
					className: yM.title,
					children: s("timeline|call_tile|ongoing|room|title")
				}), a || i ? /* @__PURE__ */ (0, z.jsx)(EM, { snapshot: t }) : /* @__PURE__ */ (0, z.jsx)(DM, { snapshot: t })]
			}),
			/* @__PURE__ */ (0, z.jsxs)(V, {
				align: "center",
				gap: "var(--cpd-space-3x)",
				wrap: "wrap-reverse",
				children: [o && /* @__PURE__ */ (0, z.jsx)(wM, {
					classNames: "duration",
					vm: o
				}), !r && /* @__PURE__ */ (0, z.jsx)(SM, {
					callType: cM.Video,
					disabled: !n,
					join: (t) => {
						e.vm.join(t);
					}
				})]
			})
		]
	}) });
}
function EM({ snapshot: e }) {
	let { facePileViewModel: t, totalParticipants: n } = e, { translate: r } = B();
	return /* @__PURE__ */ (0, z.jsxs)(V, {
		className: bM.subContainer,
		gap: "6px",
		align: "center",
		children: [/* @__PURE__ */ (0, z.jsx)(Ww, {
			classNames: yM.facepile,
			vm: t
		}), r("timeline|call_tile|ongoing|room|join_count", { count: n })]
	});
}
function DM({ snapshot: e }) {
	let { memberAvatarViewModel: t, startedByDisplayName: n } = e, { translate: r } = B();
	return /* @__PURE__ */ (0, z.jsxs)(V, {
		className: bM.subContainer,
		gap: "6px",
		align: "center",
		children: [/* @__PURE__ */ (0, z.jsx)(Py, {
			classNames: yM.avatar,
			vm: t
		}), /* @__PURE__ */ (0, z.jsx)("div", {
			className: bM.startedTextContainer,
			children: r("timeline|call_tile|ongoing|common|call_started_by", { startedByDisplayName: n })
		})]
	});
}
//#endregion
//#region src/room/timeline/event-tile/call/ongoing/dm/DmOngoingCallTileView.tsx
function OM(e) {
	let t = H(e.vm), { callType: n, callDirection: r, isJoinable: i, isJoined: a, durationViewModel: o } = t, s;
	return s = t.callHasOtherParticipants ? /* @__PURE__ */ (0, z.jsx)(jM, { snapshot: t }) : r === lM.Incoming ? /* @__PURE__ */ (0, z.jsx)(kM, { snapshot: t }) : /* @__PURE__ */ (0, z.jsx)(AM, { snapshot: t }), /* @__PURE__ */ (0, z.jsx)(hM, { children: /* @__PURE__ */ (0, z.jsxs)(V, {
		align: "center",
		gap: "var(--cpd-space-3x)",
		className: yM.content,
		children: [
			/* @__PURE__ */ (0, z.jsx)(vM, { callType: n }),
			/* @__PURE__ */ (0, z.jsx)(V, {
				gap: "6px",
				align: "center",
				className: yM.content,
				children: s
			}),
			/* @__PURE__ */ (0, z.jsxs)(V, {
				align: "center",
				gap: "var(--cpd-space-3x)",
				wrap: "wrap-reverse",
				children: [o && /* @__PURE__ */ (0, z.jsx)(wM, {
					classNames: "duration",
					vm: o
				}), !a && /* @__PURE__ */ (0, z.jsx)(SM, {
					disabled: !i,
					callType: n,
					join: (t) => e.vm.join(t)
				})]
			})
		]
	}) });
}
function kM({ snapshot: e }) {
	let { translate: t } = B();
	return /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [/* @__PURE__ */ (0, z.jsx)(Py, {
		classNames: yM.avatar,
		vm: e.memberAvatarViewModel
	}), /* @__PURE__ */ (0, z.jsx)("div", {
		className: yM.title,
		children: t("timeline|call_tile|ongoing|common|call_started_by", { startedByDisplayName: e.startedByDisplayName })
	})] });
}
function AM({ snapshot: e }) {
	let { translate: t } = B();
	return /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [/* @__PURE__ */ (0, z.jsx)(Py, {
		classNames: yM.avatar,
		vm: e.memberAvatarViewModel
	}), /* @__PURE__ */ (0, z.jsx)("div", {
		className: yM.title,
		children: t("timeline|call_tile|ongoing|dm|call_started")
	})] });
}
function jM({ snapshot: e }) {
	let { translate: t } = B();
	return /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [/* @__PURE__ */ (0, z.jsx)(Ww, {
		classNames: yM.facepile,
		vm: e.facePileViewModel
	}), /* @__PURE__ */ (0, z.jsx)("div", {
		className: yM.title,
		children: t("timeline|call_tile|ongoing|dm|title")
	})] });
}
//#endregion
//#region src/room/timeline/event-tile/call/RootCallTileView.tsx
function MM({ vm: e }) {
	let { tileType: t, tileViewModel: n } = H(e);
	switch (t) {
		case "ongoing-call-room": return /* @__PURE__ */ (0, z.jsx)(TM, { vm: n });
		case "ongoing-call-dm": return /* @__PURE__ */ (0, z.jsx)(OM, { vm: n });
		case "tombstone-call-room": return /* @__PURE__ */ (0, z.jsx)(sM, { vm: n });
		case "tombstone-call-dm": return /* @__PURE__ */ (0, z.jsx)(dM, { vm: n });
	}
}
//#endregion
//#region src/room/timeline/event-tile/EventTileView/MJitsiWidgetEventView/MJitsiWidgetEventView.tsx
function NM({ vm: e, className: t, ref: n }) {
	let { isVisible: r, title: i, subtitle: a, timestamp: o } = H(e);
	return r ? /* @__PURE__ */ (0, z.jsx)(eM, {
		icon: /* @__PURE__ */ (0, z.jsx)(vw, { color: "var(--cpd-color-icon-primary)" }),
		className: t,
		title: i,
		subtitle: a || void 0,
		ref: n,
		children: o
	}) : null;
}
var PM = { content: "_content_1o649_8" };
//#endregion
//#region src/room/timeline/event-tile/EventTileView/MKeyVerificationRequestView/MKeyVerificationRequestView.tsx
function FM({ vm: e, className: t, ref: n }) {
	let { title: r, subtitle: i, timestamp: a } = H(e);
	return /* @__PURE__ */ (0, z.jsx)(eM, {
		icon: /* @__PURE__ */ (0, z.jsx)(gC, {}),
		className: (0, R.default)(PM.content, t),
		title: r,
		subtitle: i,
		ref: n,
		children: a
	});
}
var IM = { pinnedMessageBadge: "_pinnedMessageBadge_10mi2_8" };
//#endregion
//#region src/room/timeline/event-tile/EventTileView/PinnedMessageBadge/PinnedMessageBadge.tsx
function LM({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ (0, z.jsxs)("div", {
		...n,
		className: (0, R.default)(IM.pinnedMessageBadge, e),
		children: [/* @__PURE__ */ (0, z.jsx)(PC, {
			width: "16px",
			height: "16px"
		}), t ?? U("room|pinned_message_badge")]
	});
}
var RM = {
	textualEvent: "_textualEvent_1iwcb_8",
	avatarButton: "_avatarButton_1iwcb_21"
};
//#endregion
//#region src/room/timeline/event-tile/EventTileView/RoomAvatarEventView/RoomAvatarEventView.tsx
function zM({ vm: e, renderAvatar: t, className: n, ref: r }) {
	let i = H(e), a = B().translate, o = AO(), s = (0, R.default)(RM.textualEvent, n);
	return i.isRemoved ? /* @__PURE__ */ (0, z.jsx)("div", {
		className: s,
		ref: r,
		...o,
		children: a("timeline|m.room.avatar|removed", { senderDisplayName: i.senderDisplayName })
	}) : /* @__PURE__ */ (0, z.jsx)("span", {
		className: s,
		ref: r,
		...o,
		children: a("timeline|m.room.avatar|changed_img", { senderDisplayName: i.senderDisplayName }, { img: () => /* @__PURE__ */ (0, z.jsx)("button", {
			type: "button",
			className: RM.avatarButton,
			onClick: e.onAvatarClick,
			"aria-label": i.lightboxLabel,
			children: t(i)
		}) })
	});
}
var BM = { textualEvent: "_textualEvent_1rbqb_8" };
//#endregion
//#region src/room/timeline/event-tile/EventTileView/TextualEventView/TextualEventView.tsx
function VM({ vm: e, className: t }) {
	let n = AO(), r = H(e);
	return /* @__PURE__ */ (0, z.jsx)("div", {
		className: (0, R.default)(BM.textualEvent, t),
		...n,
		children: r.content
	});
}
var HM = {
	audioPlayer: "_audioPlayer_etpvh_8",
	mediaInfo: "_mediaInfo_etpvh_12",
	mediaName: "_mediaName_etpvh_17",
	byline: "_byline_etpvh_26",
	clock: "_clock_etpvh_30",
	error: "_error_etpvh_34"
};
//#endregion
//#region src/core/utils/FormattingUtils.ts
function UM(e, t = 2) {
	if (e === 0) return "0 Bytes";
	let n = 1024, r = t < 0 ? 0 : t, i = [
		"Bytes",
		"KB",
		"MB",
		"GB",
		"TB",
		"PB",
		"EB",
		"ZB",
		"YB"
	], a = Math.floor(Math.log(e) / Math.log(n));
	return parseFloat((e / n ** a).toFixed(r)) + " " + i[a];
}
//#endregion
//#region src/room/timeline/event-tile/body/AudioPlayerView/AudioPlayerView.tsx
function WM({ vm: e }) {
	let { translate: t } = B(), { playbackState: n, mediaName: r = t("timeline|m.audio|unnamed_audio"), sizeBytes: i, durationSeconds: a, playedSeconds: o, percentComplete: s, error: c } = H(e), l = i ? `(${UM(i)})` : null, u = n === "decoding";
	return /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [/* @__PURE__ */ (0, z.jsxs)(Dk, {
		className: HM.audioPlayer,
		tabIndex: 0,
		onKeyDown: e.onKeyDown,
		"aria-label": t("timeline|m.audio|audio_player"),
		role: "region",
		children: [/* @__PURE__ */ (0, z.jsxs)(V, {
			gap: "var(--cpd-space-2x)",
			align: "center",
			children: [/* @__PURE__ */ (0, z.jsx)(lf, {
				tabIndex: -1,
				disabled: u,
				playing: n === "playing",
				togglePlay: e.togglePlay
			}), /* @__PURE__ */ (0, z.jsxs)(V, {
				direction: "column",
				className: HM.mediaInfo,
				children: [/* @__PURE__ */ (0, z.jsx)("span", {
					className: HM.mediaName,
					"data-testid": "audio-player-name",
					children: r
				}), /* @__PURE__ */ (0, z.jsxs)(V, {
					className: HM.byline,
					gap: "var(--cpd-space-1-5x)",
					children: [/* @__PURE__ */ (0, z.jsx)(ef, { seconds: a }), l]
				})]
			})]
		}), /* @__PURE__ */ (0, z.jsxs)(V, {
			align: "center",
			gap: "var(--cpd-space-1x)",
			"data-testid": "audio-player-seek",
			children: [/* @__PURE__ */ (0, z.jsx)(Cy, {
				tabIndex: -1,
				disabled: u,
				value: s,
				onChange: e.onSeekbarChange
			}), /* @__PURE__ */ (0, z.jsx)(ef, {
				className: HM.clock,
				seconds: o,
				role: "timer"
			})]
		})]
	}), c && /* @__PURE__ */ (0, z.jsx)("span", {
		className: HM.error,
		children: t("timeline|m.audio|error_downloading_audio")
	})] });
}
var GM = {
	content: "_content_1uqu1_8",
	error: "_error_1uqu1_14",
	icon: "_icon_1uqu1_23"
}, KM = /* @__PURE__ */ function(e) {
	return e.MEGOLM_KEY_WITHHELD_FOR_UNVERIFIED_DEVICE = "MEGOLM_KEY_WITHHELD_FOR_UNVERIFIED_DEVICE", e.HISTORICAL_MESSAGE_NO_KEY_BACKUP = "HISTORICAL_MESSAGE_NO_KEY_BACKUP", e.HISTORICAL_MESSAGE_BACKUP_UNCONFIGURED = "HISTORICAL_MESSAGE_BACKUP_UNCONFIGURED", e.HISTORICAL_MESSAGE_USER_NOT_JOINED = "HISTORICAL_MESSAGE_USER_NOT_JOINED", e.SENDER_IDENTITY_PREVIOUSLY_VERIFIED = "SENDER_IDENTITY_PREVIOUSLY_VERIFIED", e.UNSIGNED_SENDER_DEVICE = "UNSIGNED_SENDER_DEVICE", e.UNABLE_TO_DECRYPT = "UNABLE_TO_DECRYPT", e;
}({});
function qM(e, t, n) {
	let r = e.translate;
	switch (t) {
		case "MEGOLM_KEY_WITHHELD_FOR_UNVERIFIED_DEVICE": return r("timeline|decryption_failure|blocked");
		case "HISTORICAL_MESSAGE_NO_KEY_BACKUP": return r("timeline|decryption_failure|historical_event_no_key_backup");
		case "HISTORICAL_MESSAGE_BACKUP_UNCONFIGURED":
			if (n === !1) return r("timeline|decryption_failure|historical_event_unverified_device");
			break;
		case "HISTORICAL_MESSAGE_USER_NOT_JOINED": return r("timeline|decryption_failure|historical_event_user_not_joined");
		case "SENDER_IDENTITY_PREVIOUSLY_VERIFIED": return /* @__PURE__ */ (0, z.jsxs)("span", { children: [/* @__PURE__ */ (0, z.jsx)(iS, {
			className: GM.icon,
			width: "16px",
			height: "16px"
		}), r("timeline|decryption_failure|sender_identity_previously_verified")] });
		case "UNSIGNED_SENDER_DEVICE": return /* @__PURE__ */ (0, z.jsxs)("span", { children: [/* @__PURE__ */ (0, z.jsx)(iS, {
			className: GM.icon,
			width: "16px",
			height: "16px"
		}), r("timeline|decryption_failure|sender_unsigned_device")] });
	}
	return r("timeline|decryption_failure|unable_to_decrypt");
}
function JM(e) {
	switch (e) {
		case "SENDER_IDENTITY_PREVIOUSLY_VERIFIED":
		case "UNSIGNED_SENDER_DEVICE": return GM.error;
	}
	return null;
}
function YM({ vm: e, ref: t, className: n }) {
	let r = B(), { decryptionFailureReason: i, isLocalDeviceVerified: a } = H(e), o = (0, R.default)(GM.content, JM(i), n);
	return /* @__PURE__ */ (0, z.jsx)("div", {
		className: o,
		ref: t,
		children: qM(r, i, a)
	});
}
var XM = {
	threadSummary: "_threadSummary_6afbq_8",
	content: "_content_6afbq_9",
	chevron: "_chevron_6afbq_41",
	sender: "_sender_6afbq_47",
	repliesAmount: "_repliesAmount_6afbq_66",
	avatar: "_avatar_6afbq_85",
	threadIcon: "_threadIcon_6afbq_90",
	narrow: "_narrow_6afbq_117"
};
//#endregion
//#region src/room/timeline/event-tile/EventTileView/ThreadSummary/ThreadSummaryView.tsx
function ZM({ vm: e }) {
	let { isVisible: t, avatar: n, showDisplayName: r, senderName: i, previewContent: a, previewTooltip: o } = H(e);
	if (!t || !a) return /* @__PURE__ */ (0, z.jsx)(z.Fragment, {});
	let s = /* @__PURE__ */ (0, z.jsx)("span", {
		className: XM.content,
		children: a
	}), c = n?.className ? `${XM.avatar} ${n.className}` : XM.avatar;
	return /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [
		n && /* @__PURE__ */ (0, z.jsx)(D, {
			id: n.id,
			name: n.name,
			src: n.src,
			title: n.title,
			"aria-label": n.label,
			type: "round",
			size: "24px",
			className: c
		}),
		r && i && /* @__PURE__ */ (0, z.jsx)("div", {
			className: XM.sender,
			children: i
		}),
		o ? /* @__PURE__ */ (0, z.jsx)(F, {
			description: o,
			children: s
		}) : s
	] });
}
function QM({ vm: e, className: t, type: n = "button", ...r }) {
	let { isVisible: i, replyCountLabel: a, openThreadLabel: o, notificationIndicator: s, narrow: c, previewVm: l } = H(e);
	if (!i) return /* @__PURE__ */ (0, z.jsx)(z.Fragment, {});
	let u = [
		XM.threadSummary,
		t,
		c ? XM.narrow : void 0
	].filter(Boolean).join(" ");
	return /* @__PURE__ */ (0, z.jsxs)("button", {
		...r,
		type: n,
		className: u,
		onClick: e.onClick,
		"aria-label": o,
		children: [
			/* @__PURE__ */ (0, z.jsx)(se, {
				size: "24px",
				indicator: s,
				className: XM.threadIcon,
				children: /* @__PURE__ */ (0, z.jsx)(ow, {})
			}),
			/* @__PURE__ */ (0, z.jsx)("span", {
				className: XM.repliesAmount,
				children: a
			}),
			/* @__PURE__ */ (0, z.jsx)(ZM, { vm: l }),
			/* @__PURE__ */ (0, z.jsx)("div", {
				className: XM.chevron,
				children: /* @__PURE__ */ (0, z.jsx)(vS, {})
			})
		]
	});
}
var $M = {
	reactionsRow: "_reactionsRow_1lcz2_8",
	showAllButton: "_showAllButton_1lcz2_16",
	addReactionButton: "_addReactionButton_1lcz2_29",
	addReactionButtonVisible: "_addReactionButtonVisible_1lcz2_48",
	addReactionButtonActive: "_addReactionButtonActive_1lcz2_52",
	addReactionButtonDisabled: "_addReactionButtonDisabled_1lcz2_56"
};
//#endregion
//#region src/room/timeline/event-tile/reactions/ReactionsRow/ReactionsRowView.tsx
function eN({ vm: e, className: t, children: n }) {
	let { ariaLabel: r, isVisible: i, showAllButtonVisible: a, showAllButtonLabel: o, showAddReactionButton: s, addReactionButtonLabel: c, addReactionButtonVisible: l, addReactionButtonActive: u, addReactionButtonDisabled: d } = H(e);
	if (!i) return /* @__PURE__ */ (0, z.jsx)(z.Fragment, {});
	let f = (0, R.default)($M.addReactionButton, {
		[$M.addReactionButtonVisible]: l,
		[$M.addReactionButtonActive]: u,
		[$M.addReactionButtonDisabled]: d
	}), p = e.onAddReactionContextMenu ? (t) => {
		t.preventDefault(), e.onAddReactionContextMenu?.(t);
	} : void 0, m = /* @__PURE__ */ (0, z.jsx)("button", {
		type: "button",
		className: f,
		"aria-label": c,
		disabled: d,
		onClick: e.onAddReactionClick,
		onContextMenu: p,
		children: /* @__PURE__ */ (0, z.jsx)(WC, {})
	});
	return /* @__PURE__ */ (0, z.jsxs)("div", {
		className: (0, R.default)(t, $M.reactionsRow),
		role: "toolbar",
		"aria-label": r,
		children: [
			n,
			a && /* @__PURE__ */ (0, z.jsx)("button", {
				type: "button",
				className: $M.showAllButton,
				onClick: e.onShowAllClick,
				children: o
			}),
			s && /* @__PURE__ */ (0, z.jsx)(F, {
				description: c,
				placement: "right",
				children: m
			})
		]
	});
}
//#endregion
//#region src/room/timeline/event-tile/reactions/ReactionsRowButtonTooltip/ReactionsRowButtonTooltipView.tsx
function tN({ vm: e, children: t }) {
	let { formattedSenders: n, caption: r, tooltipOpen: i } = H(e);
	return n ? /* @__PURE__ */ (0, z.jsx)(F, {
		description: n,
		caption: r,
		placement: "right",
		open: i,
		children: t
	}) : /* @__PURE__ */ (0, z.jsx)(z.Fragment, { children: t });
}
var nN = {
	reactionsRowButton: "_reactionsRowButton_5v4c1_8",
	reactionsRowButtonSelected: "_reactionsRowButtonSelected_5v4c1_21",
	reactionsRowButtonDisabled: "_reactionsRowButtonDisabled_5v4c1_26",
	reactionsRowButtonContent: "_reactionsRowButtonContent_5v4c1_30",
	reactionsRowButtonCount: "_reactionsRowButtonCount_5v4c1_38"
};
//#endregion
//#region src/room/timeline/event-tile/reactions/ReactionsRowButton/ReactionsRowButtonView.tsx
function rN({ vm: e }) {
	let t = H(e), { content: n, count: r, className: i, isSelected: a, isDisabled: o, imageSrc: s, imageAlt: c, tooltipVm: l } = t, u = t["aria-label"] ?? t.ariaLabel, d = o ? !0 : void 0, f = (0, R.default)(i, nN.reactionsRowButton, {
		[nN.reactionsRowButtonSelected]: a,
		[nN.reactionsRowButtonDisabled]: o
	}), p = s ? /* @__PURE__ */ (0, z.jsx)("img", {
		className: nN.reactionsRowButtonContent,
		alt: c ?? "",
		src: s,
		width: "16",
		height: "16"
	}) : /* @__PURE__ */ (0, z.jsx)("span", {
		className: nN.reactionsRowButtonContent,
		"aria-hidden": "true",
		children: n ?? ""
	});
	return /* @__PURE__ */ (0, z.jsx)(tN, {
		vm: l,
		children: /* @__PURE__ */ (0, z.jsxs)("button", {
			type: "button",
			className: f,
			tabIndex: 0,
			"aria-label": u,
			"aria-disabled": d,
			onClick: o ? void 0 : e.onClick,
			children: [p, /* @__PURE__ */ (0, z.jsx)("span", {
				className: nN.reactionsRowButtonCount,
				"aria-hidden": "true",
				children: r
			})]
		})
	});
}
var iN = { content: "_content_1jaux_8" };
//#endregion
//#region src/room/timeline/event-tile/timestamp/MessageTimestampView/MessageTimestampView.tsx
function aN({ vm: e, className: t }) {
	let { translate: n } = B(), { ts: r, tsSentAt: i, tsReceivedAt: a, inhibitTooltip: o, href: s } = H(e), c = (t) => {
		e.onClick && (t.key === "Enter" || t.key === " ") && (t.preventDefault(), e.onClick?.(t));
	}, l = i, u;
	a && a?.length > 0 && (l = n("timeline|message_timestamp_sent_at", { dateTime: l }), u = n("timeline|message_timestamp_received_at", { dateTime: a }));
	let d;
	return d = s ? /* @__PURE__ */ (0, z.jsx)("a", {
		href: s,
		onClick: e.onClick,
		onKeyDown: c,
		onContextMenu: e.onContextMenu,
		className: (0, R.default)(t, iN.content),
		"aria-live": "off",
		children: r
	}) : /* @__PURE__ */ (0, z.jsx)("span", {
		onClick: e.onClick,
		onKeyDown: c,
		onContextMenu: e.onContextMenu,
		className: (0, R.default)(t, iN.content),
		role: e.onClick ? "link" : void 0,
		"aria-live": "off",
		tabIndex: e.onClick || !o ? 0 : void 0,
		children: r
	}), o ? d : /* @__PURE__ */ (0, z.jsx)(F, {
		description: l,
		caption: u,
		children: d
	});
}
var oN = {
	hideButton: "_hideButton_14osa_8",
	wrapper: "_wrapper_14osa_15",
	previewGroup: "_previewGroup_14osa_21",
	toggleButton: "_toggleButton_14osa_27"
};
//#endregion
//#region src/room/timeline/event-tile/UrlPreviewGroupView/UrlPreviewGroupView.tsx
function sN({ onHideClick: e }) {
	let { translate: t } = B();
	return /* @__PURE__ */ (0, z.jsx)("div", {
		className: oN.hideButton,
		children: /* @__PURE__ */ (0, z.jsx)(M, {
			kind: "secondary",
			size: "28px",
			onClick: e,
			"aria-label": t("timeline|url_preview|close"),
			children: /* @__PURE__ */ (0, z.jsx)(SS, {})
		})
	});
}
function cN({ vm: e, className: t }) {
	let { translate: n } = B(), r = AO(), { previews: i, totalPreviewCount: a, previewsLimited: o, overPreviewLimit: s } = H(e);
	if (i.length === 0) return null;
	let c;
	return s && (c = /* @__PURE__ */ (0, z.jsx)(k, {
		className: oN.toggleButton,
		kind: "tertiary",
		size: "md",
		onClick: e.onTogglePreviewLimit,
		children: o ? n("timeline|url_preview|show_n_more", { count: a - i.length }) : n("action|collapse")
	})), /* @__PURE__ */ (0, z.jsxs)("div", {
		className: (0, R.default)(t, oN.wrapper),
		...r,
		children: [/* @__PURE__ */ (0, z.jsx)(sN, { onHideClick: e.onHideClick }), /* @__PURE__ */ (0, z.jsxs)("div", {
			className: oN.previewGroup,
			children: [i.map((t, n) => /* @__PURE__ */ (0, z.jsx)(tO, {
				onImageClick: () => e.onImageClick(t),
				...t,
				image: t.image,
				collapsed: n !== 0
			}, t.link)), c]
		})]
	});
}
var lN = {
	richItem: "_richItem_1c0uo_8",
	avatar: "_avatar_1c0uo_36",
	title: "_title_1c0uo_41",
	description: "_description_1c0uo_47",
	timestamp: "_timestamp_1c0uo_51",
	checkmark: "_checkmark_1c0uo_69"
}, uN = p(function({ avatar: e, title: t, description: n, timestamp: r, selected: i, ...a }) {
	let o = B();
	return /* @__PURE__ */ (0, z.jsxs)("li", {
		className: lN.richItem,
		role: "option",
		tabIndex: -1,
		"aria-selected": i,
		"aria-label": t,
		...a,
		children: [
			i ? /* @__PURE__ */ (0, z.jsx)(dN, {}) : /* @__PURE__ */ (0, z.jsx)(V, {
				className: lN.avatar,
				children: e
			}),
			/* @__PURE__ */ (0, z.jsx)("span", {
				className: lN.title,
				children: t
			}),
			/* @__PURE__ */ (0, z.jsx)("span", {
				className: lN.description,
				children: n
			}),
			r && /* @__PURE__ */ (0, z.jsx)("span", {
				role: "timer",
				className: lN.timestamp,
				children: o.humanizeTime(r)
			})
		]
	});
});
function dN() {
	return /* @__PURE__ */ (0, z.jsx)(V, {
		align: "center",
		justify: "center",
		"aria-hidden": "true",
		className: lN.checkmark,
		children: /* @__PURE__ */ (0, z.jsx)(fS, {
			width: "24px",
			height: "24px",
			color: "var(--cpd-color-icon-on-solid-primary)"
		})
	});
}
var fN = {
	richList: "_richList_1mcas_8",
	title: "_title_1mcas_12",
	content: "_content_1mcas_18",
	empty: "_empty_1mcas_26"
};
//#endregion
//#region src/core/hooks/useListKeyboardNavigation.ts
function pN() {
	let e = w(null), t = h((t) => {
		if (e.current && t.target === e.current) {
			let t = e.current?.firstElementChild;
			for (let n of e.current.children) if (n.getAttribute("aria-selected") === "true") {
				t = n;
				break;
			}
			t?.focus();
		}
	}, []);
	return {
		listRef: e,
		onKeyDown: h((t) => {
			let { key: n } = t, r = !1;
			switch (n) {
				case "Enter":
				case " ":
					r = !0, document.activeElement.click();
					break;
				case "ArrowDown": {
					r = !0;
					let t = document.activeElement;
					e.current?.contains(t) && t && t.nextElementSibling?.focus();
					break;
				}
				case "ArrowUp": {
					r = !0;
					let t = document.activeElement;
					e.current?.contains(t) && t && t.previousElementSibling?.focus();
					break;
				}
				case "Home":
					r = !0, (e.current?.firstElementChild)?.focus();
					break;
				case "End": r = !0, (e.current?.lastElementChild)?.focus();
			}
			r && t.preventDefault();
		}, []),
		onFocus: t
	};
}
//#endregion
//#region src/core/rich-list/RichList/RichList.tsx
function mN({ children: e, title: t, className: n, titleAttributes: r, isEmpty: i = !1, ...a }) {
	let o = v(), { listRef: s, onKeyDown: c, onFocus: l } = pN();
	return /* @__PURE__ */ (0, z.jsxs)(V, {
		className: (0, R.default)(fN.richList, n),
		direction: "column",
		...a,
		children: [/* @__PURE__ */ (0, z.jsx)("span", {
			id: o,
			className: fN.title,
			...r,
			children: t
		}), i ? /* @__PURE__ */ (0, z.jsx)("span", {
			className: fN.empty,
			children: e
		}) : /* @__PURE__ */ (0, z.jsx)("ul", {
			ref: s,
			role: "listbox",
			className: fN.content,
			"aria-labelledby": o,
			tabIndex: 0,
			onKeyDown: c,
			onFocus: l,
			children: e
		})]
	});
}
var hN = { title: "_title_s91uo_8" };
//#endregion
//#region src/room-list/RoomListHeaderView/menu/OptionMenuView.tsx
function gN({ vm: e }) {
	let { translate: t } = B(), [n, r] = T(!1), { activeSortOption: i, isMessagePreviewEnabled: a } = H(e);
	return /* @__PURE__ */ (0, z.jsxs)(ue, {
		open: n,
		onOpenChange: r,
		title: t("room_list|room_options"),
		showTitle: !1,
		align: "start",
		trigger: /* @__PURE__ */ (0, z.jsx)(M, {
			tooltip: t("room_list|room_options"),
			"aria-label": t("room_list|room_options"),
			size: "28px",
			style: { padding: "4px" },
			children: /* @__PURE__ */ (0, z.jsx)(MC, {})
		}),
		children: [
			/* @__PURE__ */ (0, z.jsx)(de, {
				title: t("room_list|sort"),
				className: hN.title
			}),
			/* @__PURE__ */ (0, z.jsx)(fe, {
				label: t("room_list|sort_type|activity"),
				checked: i === "recent",
				onSelect: () => e.sort("recent")
			}),
			/* @__PURE__ */ (0, z.jsx)(fe, {
				label: t("room_list|sort_type|unread_first"),
				checked: i === "unread-first",
				onSelect: () => e.sort("unread-first")
			}),
			/* @__PURE__ */ (0, z.jsx)(fe, {
				label: t("room_list|sort_type|atoz"),
				checked: i === "alphabetical",
				onSelect: () => e.sort("alphabetical")
			}),
			/* @__PURE__ */ (0, z.jsx)(de, { title: t("room_list|appearance") }),
			/* @__PURE__ */ (0, z.jsx)(ne, {
				label: t("room_list|show_message_previews"),
				onSelect: e.toggleMessagePreview,
				checked: a
			})
		]
	});
}
var _N = { button: "_button_1veqf_8" };
//#endregion
//#region src/room-list/RoomListHeaderView/menu/SpaceMenuView.tsx
function vN({ vm: e }) {
	let { translate: t } = B(), { canInviteInSpace: n, canAccessSpaceSettings: r, title: i } = H(e), [a, o] = T(!1);
	return /* @__PURE__ */ (0, z.jsxs)(ue, {
		open: a,
		onOpenChange: o,
		title: i,
		align: "start",
		trigger: /* @__PURE__ */ (0, z.jsx)(M, {
			className: _N.button,
			"aria-label": t("room_list|open_space_menu"),
			size: "24px",
			style: { padding: "2px" },
			children: /* @__PURE__ */ (0, z.jsx)(mS, {})
		}),
		children: [
			/* @__PURE__ */ (0, z.jsx)(N, {
				Icon: iC,
				label: t("room_list|space_menu|home"),
				onSelect: e.openSpaceHome,
				hideChevron: !0
			}),
			n && /* @__PURE__ */ (0, z.jsx)(N, {
				Icon: fw,
				label: t("action|invite"),
				onSelect: e.inviteInSpace,
				hideChevron: !0
			}),
			/* @__PURE__ */ (0, z.jsx)(N, {
				Icon: HC,
				label: t("common|preferences"),
				onSelect: e.openSpacePreferences,
				hideChevron: !0
			}),
			r && /* @__PURE__ */ (0, z.jsx)(N, {
				Icon: iw,
				label: t("room_list|space_menu|space_settings"),
				onSelect: e.openSpaceSettings,
				hideChevron: !0
			})
		]
	});
}
//#endregion
//#region src/room-list/RoomListHeaderView/menu/ComposeMenuView.tsx
function yN({ vm: e }) {
	let { translate: t } = B(), [n, r] = T(!1), { canCreateRoom: i, canCreateVideoRoom: a, displaySectionReleaseAnnouncement: o, areSectionsEnabled: s } = H(e), c = /* @__PURE__ */ (0, z.jsx)(M, {
		size: "28px",
		style: { padding: "4px" },
		tooltip: t("action|new_conversation"),
		children: /* @__PURE__ */ (0, z.jsx)(RC, {
			color: "var(--cpd-color-icon-secondary)",
			"aria-hidden": !0
		})
	});
	return o ? /* @__PURE__ */ (0, z.jsx)(pe, {
		open: o,
		onClick: e.closeSectionReleaseAnnouncement,
		header: t("release_announcement|room_list_section_title"),
		description: t("release_announcement|room_list_section_description"),
		closeLabel: t("release_announcement|room_list_section_close"),
		children: c
	}) : /* @__PURE__ */ (0, z.jsxs)(ue, {
		open: n,
		onOpenChange: r,
		showTitle: !1,
		title: t("action|open_menu"),
		align: "start",
		trigger: c,
		children: [
			/* @__PURE__ */ (0, z.jsx)(N, {
				Icon: cS,
				label: t("action|start_chat"),
				onSelect: e.createChatRoom,
				hideChevron: !0
			}),
			i && /* @__PURE__ */ (0, z.jsx)(N, {
				Icon: QC,
				label: t("action|new_room"),
				onSelect: e.createRoom,
				hideChevron: !0
			}),
			a && /* @__PURE__ */ (0, z.jsx)(N, {
				Icon: bw,
				label: t("action|new_video_room"),
				onSelect: e.createVideoRoom,
				hideChevron: !0
			}),
			s && /* @__PURE__ */ (0, z.jsx)(N, {
				Icon: nw,
				label: t("action|new_section"),
				onSelect: e.createSection,
				hideChevron: !0
			})
		]
	});
}
var bN = {
	header: "_header_1b9rm_8",
	container: "_container_1b9rm_13",
	title: "_title_1b9rm_19"
};
//#endregion
//#region src/room-list/RoomListHeaderView/RoomListHeaderView.tsx
function xN({ vm: e }) {
	let { translate: t } = B(), { title: n, displaySpaceMenu: r, collapseSections: i, areSectionsEnabled: a, canCreateRoom: o, canCreateVideoRoom: s } = H(e), c = !a && !o && !s;
	return /* @__PURE__ */ (0, z.jsx)(V, {
		as: "header",
		className: bN.header,
		"aria-label": t("room|context_menu|title"),
		align: "end",
		"data-testid": "room-list-header",
		children: /* @__PURE__ */ (0, z.jsxs)(V, {
			className: bN.container,
			justify: "space-between",
			align: "center",
			gap: "var(--cpd-space-3x)",
			children: [/* @__PURE__ */ (0, z.jsxs)(V, {
				className: bN.title,
				align: "center",
				gap: "var(--cpd-space-1x)",
				children: [/* @__PURE__ */ (0, z.jsx)(ae, {
					size: "sm",
					title: n,
					children: n
				}), r && /* @__PURE__ */ (0, z.jsx)(vN, { vm: e })]
			}), /* @__PURE__ */ (0, z.jsxs)(V, {
				align: "center",
				gap: "var(--cpd-space-2x)",
				children: [
					/* @__PURE__ */ (0, z.jsx)(gN, { vm: e }),
					a && i && /* @__PURE__ */ (0, z.jsx)(M, {
						size: "28px",
						style: { padding: "4px" },
						onClick: () => e.collapseOrExpandSections(),
						tooltip: t(i === "collapse" ? "room_list|collapse_all_sections" : "room_list|expand_all_sections"),
						children: i === "collapse" ? /* @__PURE__ */ (0, z.jsx)(wS, {
							color: "var(--cpd-color-icon-secondary)",
							"aria-hidden": !0
						}) : /* @__PURE__ */ (0, z.jsx)(KS, {
							color: "var(--cpd-color-icon-secondary)",
							"aria-hidden": !0
						})
					}),
					c ? /* @__PURE__ */ (0, z.jsx)(M, {
						size: "28px",
						style: { padding: "4px" },
						onClick: (t) => e.createChatRoom(t.nativeEvent),
						tooltip: t("action|start_chat"),
						children: /* @__PURE__ */ (0, z.jsx)(cS, {
							color: "var(--cpd-color-icon-secondary)",
							"aria-hidden": !0
						})
					}) : /* @__PURE__ */ (0, z.jsx)(yN, { vm: e })
				]
			})]
		})
	});
}
var SN = {
	view: "_view_zk0ja_8",
	search: "_search_zk0ja_16",
	search_container: "_search_container_zk0ja_28",
	search_text: "_search_text_zk0ja_40"
};
//#endregion
//#region src/room-list/RoomListSearchView/RoomListSearchView.tsx
function CN({ vm: e }) {
	let { translate: t } = B(), { displayExploreButton: n, displayDialButton: r, searchShortcut: i } = H(e);
	return /* @__PURE__ */ (0, z.jsxs)(V, {
		"data-testid": "room-list-search",
		className: SN.view,
		role: "search",
		gap: "var(--cpd-space-2x)",
		align: "center",
		children: [
			/* @__PURE__ */ (0, z.jsx)(k, {
				id: "room-list-search-button",
				className: SN.search,
				kind: "secondary",
				size: "md",
				Icon: ew,
				onClick: e.onSearchClick,
				children: /* @__PURE__ */ (0, z.jsxs)(V, {
					className: SN.search_container,
					as: "span",
					justify: "space-between",
					children: [/* @__PURE__ */ (0, z.jsx)("span", {
						className: SN.search_text,
						children: t("action|search")
					}), /* @__PURE__ */ (0, z.jsx)("kbd", { children: i })]
				})
			}),
			r && /* @__PURE__ */ (0, z.jsx)(k, {
				kind: "secondary",
				size: "md",
				Icon: MS,
				iconOnly: !0,
				"aria-label": t("left_panel|open_dial_pad"),
				onClick: e.onDialPadClick
			}),
			n && /* @__PURE__ */ (0, z.jsx)(k, {
				kind: "secondary",
				size: "md",
				Icon: XS,
				iconOnly: !0,
				"aria-label": t("action|explore_rooms"),
				onClick: e.onExploreClick
			})
		]
	});
}
//#endregion
//#region src/room-list/RoomListPrimaryFilters/useCollapseFilters.ts
function wN(e, t) {
	let n = w(null), [r, i] = T(!1), [a, o] = T(-1);
	return _(() => {
		if (!n.current) return;
		let r = (n) => {
			let r = !1;
			Array.from(n.children).forEach((n, i) => {
				let a = n;
				if (a.setAttribute("aria-hidden", "false"), a.classList.remove(t), e) return;
				let s = a.previousElementSibling;
				s && a.offsetLeft <= s.offsetLeft && (r || o(i), r = !0), a.classList.toggle(t, r), a.setAttribute("aria-hidden", r.toString());
			}), r || o(-1), i(e || r);
		};
		r(n.current);
		let a = new ResizeObserver((e) => e.forEach((e) => r(e.target)));
		return a.observe(n.current), () => {
			a.disconnect();
		};
	}, [e, t]), {
		ref: n,
		isWrapping: r,
		wrappingIndex: a
	};
}
//#endregion
//#region src/room-list/RoomListPrimaryFilters/useVisibleFilters.ts
function TN(e, t, n) {
	let [r, i] = T(e);
	return _(() => {
		if (!((t ? e.indexOf(t) : -1) >= n) || n === -1) {
			i(e);
			return;
		}
		i(e.slice().sort((e, n) => e === t && n !== t ? -1 : +(e !== t && n === t)));
	}, [
		e,
		t,
		n
	]), r;
}
var EN = {
	roomListPrimaryFilters: "_roomListPrimaryFilters_kikqh_8",
	list: "_list_kikqh_17",
	iconButton: "_iconButton_kikqh_27"
}, DN = (e) => {
	switch (e) {
		case "unread": return U("room_list|filters|unread");
		case "people": return U("room_list|filters|people");
		case "rooms": return U("room_list|filters|rooms");
		case "favourite": return U("room_list|filters|favourite");
		case "mentions": return U("room_list|filters|mentions");
		case "invites": return U("room_list|filters|invites");
		case "low_priority": return U("room_list|filters|low_priority");
	}
}, ON = p(function({ filterIds: e, activeFilterId: t, onToggleFilter: n }) {
	let r = v(), [i, a] = T(!1), { ref: o, isWrapping: s, wrappingIndex: c } = wN(i, "wrapping"), l = TN(e, t, c);
	return /* @__PURE__ */ (0, z.jsxs)(V, {
		className: EN.roomListPrimaryFilters,
		"data-testid": "primary-filters",
		gap: "var(--cpd-space-3x)",
		direction: "row-reverse",
		justify: "space-between",
		children: [s && /* @__PURE__ */ (0, z.jsx)(M, {
			kind: "secondary",
			"aria-expanded": i,
			"aria-controls": r,
			className: EN.iconButton,
			"aria-label": U(i ? "room_list|collapse_filters" : "room_list|expand_filters"),
			size: "28px",
			onClick: () => a((e) => !e),
			children: /* @__PURE__ */ (0, z.jsx)(mS, {})
		}), /* @__PURE__ */ (0, z.jsx)(V, {
			id: r,
			as: "div",
			role: "listbox",
			"aria-label": U("room_list|primary_filters"),
			align: "center",
			gap: "var(--cpd-space-2x)",
			wrap: "wrap",
			className: EN.list,
			ref: o,
			children: l.map((e, r) => /* @__PURE__ */ (0, z.jsx)(A, {
				role: "option",
				tabIndex: 0,
				"aria-selected": e === t,
				selected: e === t,
				onClick: () => n(e),
				children: DN(e)
			}, `${e}-${r}`))
		})]
	});
}), kN = { skeleton: "_skeleton_1h0mx_8" }, AN = () => /* @__PURE__ */ (0, z.jsx)("div", { className: kN.skeleton }), jN = {
	genericPlaceholder: "_genericPlaceholder_1sxid_8",
	title: "_title_1sxid_16",
	description: "_description_1sxid_21",
	defaultPlaceholder: "_defaultPlaceholder_1sxid_27"
}, MN = ({ vm: e }) => {
	let t = H(e);
	if (!t.activeFilterId) return /* @__PURE__ */ (0, z.jsx)(NN, {
		title: U("room_list|empty|no_chats"),
		description: t.canCreateRoom ? U("room_list|empty|no_chats_description") : U("room_list|empty|no_chats_description_no_room_rights"),
		children: /* @__PURE__ */ (0, z.jsxs)(V, {
			className: jN.defaultPlaceholder,
			align: "center",
			justify: "center",
			direction: "column",
			gap: "var(--cpd-space-4x)",
			children: [/* @__PURE__ */ (0, z.jsx)(k, {
				size: "md",
				kind: "secondary",
				Icon: cS,
				onClick: e.createChatRoom,
				children: U("action|start_chat")
			}), t.canCreateRoom && /* @__PURE__ */ (0, z.jsx)(k, {
				size: "md",
				kind: "secondary",
				Icon: QC,
				onClick: e.createRoom,
				children: U("action|new_room")
			})]
		})
	});
	switch (t.activeFilterId) {
		case "people": return /* @__PURE__ */ (0, z.jsx)(NN, {
			title: U("room_list|empty|no_people"),
			description: U("room_list|empty|no_people_description")
		});
		case "rooms": return /* @__PURE__ */ (0, z.jsx)(NN, {
			title: U("room_list|empty|no_rooms"),
			description: U("room_list|empty|no_rooms_description")
		});
		case "unread": return /* @__PURE__ */ (0, z.jsx)(PN, {
			title: U("room_list|empty|no_unread"),
			action: U("room_list|empty|show_chats"),
			onAction: () => e.onToggleFilter(t.activeFilterId)
		});
		case "invites": return /* @__PURE__ */ (0, z.jsx)(PN, {
			title: U("room_list|empty|no_invites"),
			action: U("room_list|empty|show_activity"),
			onAction: () => e.onToggleFilter(t.activeFilterId)
		});
		case "mentions": return /* @__PURE__ */ (0, z.jsx)(PN, {
			title: U("room_list|empty|no_mentions"),
			action: U("room_list|empty|show_activity"),
			onAction: () => e.onToggleFilter(t.activeFilterId)
		});
		default: return /* @__PURE__ */ (0, z.jsx)(NN, {
			title: U("room_list|empty|no_chats"),
			description: U("room_list|empty|no_chats_description")
		});
	}
};
function NN({ title: e, description: t, children: n }) {
	return /* @__PURE__ */ (0, z.jsxs)(V, {
		"data-testid": "empty-room-list",
		className: jN.genericPlaceholder,
		direction: "column",
		align: "stretch",
		justify: "center",
		gap: "var(--cpd-space-2x)",
		children: [
			/* @__PURE__ */ (0, z.jsx)("span", {
				className: jN.title,
				children: e
			}),
			t && /* @__PURE__ */ (0, z.jsx)("span", {
				className: jN.description,
				children: t
			}),
			n
		]
	});
}
function PN({ title: e, action: t, onAction: n }) {
	return /* @__PURE__ */ (0, z.jsx)(NN, {
		title: e,
		children: n && /* @__PURE__ */ (0, z.jsx)(k, {
			kind: "tertiary",
			onClick: n,
			children: t
		})
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@preact+signals-core@1.14.2/node_modules/@preact/signals-core/dist/signals-core.module.js
var FN = Symbol.for("preact-signals");
function IN() {
	if (VN > 1) VN--;
	else {
		var e, t = !1;
		for ((function() {
			var e = GN;
			for (GN = void 0; e !== void 0;) e.S.v === e.v && (e.S.i = e.i), e = e.o;
		})(); BN !== void 0;) {
			var n = BN;
			for (BN = void 0, HN++; n !== void 0;) {
				var r = n.u;
				if (n.u = void 0, n.f &= -3, !(8 & n.f) && XN(n)) try {
					n.c();
				} catch (n) {
					t ||= (e = n, !0);
				}
				n = r;
			}
		}
		if (HN = 0, VN--, t) throw e;
	}
}
function LN(e) {
	if (VN > 0) return e();
	WN = ++UN, VN++;
	try {
		return e();
	} finally {
		IN();
	}
}
var RN = void 0;
function J(e) {
	var t = RN;
	RN = void 0;
	try {
		return e();
	} finally {
		RN = t;
	}
}
var zN, BN = void 0, VN = 0, HN = 0, UN = 0, WN = 0, GN = void 0, KN = 0;
function qN(e) {
	if (RN !== void 0) {
		var t = e.n;
		if (t === void 0 || t.t !== RN) return t = {
			i: 0,
			S: e,
			p: RN.s,
			n: void 0,
			t: RN,
			e: void 0,
			x: void 0,
			r: t
		}, RN.s !== void 0 && (RN.s.n = t), RN.s = t, e.n = t, 32 & RN.f && e.S(t), t;
		if (t.i === -1) return t.i = 0, t.n !== void 0 && (t.n.p = t.p, t.p !== void 0 && (t.p.n = t.n), t.p = RN.s, t.n = void 0, RN.s.n = t, RN.s = t), t;
	}
}
function JN(e, t) {
	this.v = e, this.i = 0, this.n = void 0, this.t = void 0, this.l = 0, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
JN.prototype.brand = FN, JN.prototype.h = function() {
	return !0;
}, JN.prototype.S = function(e) {
	var t = this, n = this.t;
	n !== e && e.e === void 0 && (e.x = n, this.t = e, n === void 0 ? J(function() {
		var e;
		(e = t.W) == null || e.call(t);
	}) : n.e = e);
}, JN.prototype.U = function(e) {
	var t = this;
	if (this.t !== void 0) {
		var n = e.e, r = e.x;
		n !== void 0 && (n.x = r, e.e = void 0), r !== void 0 && (r.e = n, e.x = void 0), e === this.t && (this.t = r, r === void 0 && J(function() {
			var e;
			(e = t.Z) == null || e.call(t);
		}));
	}
}, JN.prototype.subscribe = function(e) {
	var t = this;
	return aP(function() {
		var n = t.value, r = RN;
		RN = void 0;
		try {
			e(n);
		} finally {
			RN = r;
		}
	}, { name: "sub" });
}, JN.prototype.valueOf = function() {
	return this.value;
}, JN.prototype.toString = function() {
	return this.value + "";
}, JN.prototype.toJSON = function() {
	return this.value;
}, JN.prototype.peek = function() {
	var e = this;
	return J(function() {
		return e.value;
	});
}, Object.defineProperty(JN.prototype, "value", {
	get: function() {
		var e = qN(this);
		return e !== void 0 && (e.i = this.i), this.v;
	},
	set: function(e) {
		if (e !== this.v) {
			if (HN > 100) throw Error("Cycle detected");
			(function(e) {
				VN !== 0 && HN === 0 && e.l !== WN && (e.l = WN, GN = {
					S: e,
					v: e.v,
					i: e.i,
					o: GN
				});
			})(this), this.v = e, this.i++, KN++, VN++;
			try {
				for (var t = this.t; t !== void 0; t = t.x) t.t.N();
			} finally {
				IN();
			}
		}
	}
});
function YN(e, t) {
	return new JN(e, t);
}
function XN(e) {
	for (var t = e.s; t !== void 0; t = t.n) if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
	return !1;
}
function ZN(e) {
	for (var t = e.s; t !== void 0; t = t.n) {
		var n = t.S.n;
		if (n !== void 0 && (t.r = n), t.S.n = t, t.i = -1, t.n === void 0) {
			e.s = t;
			break;
		}
	}
}
function QN(e) {
	for (var t = e.s, n = void 0; t !== void 0;) {
		var r = t.p;
		t.i === -1 ? (t.S.U(t), r !== void 0 && (r.n = t.n), t.n !== void 0 && (t.n.p = r)) : n = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = r;
	}
	e.s = n;
}
function $N(e, t) {
	JN.call(this, void 0), this.x = e, this.s = void 0, this.g = KN - 1, this.f = 4, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
$N.prototype = new JN(), $N.prototype.h = function() {
	if (this.f &= -3, 1 & this.f) return !1;
	if ((36 & this.f) == 32 || (this.f &= -5, this.g === KN)) return !0;
	if (this.g = KN, this.f |= 1, this.i > 0 && !XN(this)) return this.f &= -2, !0;
	var e = RN;
	try {
		ZN(this), RN = this;
		var t = this.x();
		(16 & this.f || this.v !== t || this.i === 0) && (this.v = t, this.f &= -17, this.i++);
	} catch (e) {
		this.v = e, this.f |= 16, this.i++;
	}
	return RN = e, QN(this), this.f &= -2, !0;
}, $N.prototype.S = function(e) {
	if (this.t === void 0) {
		this.f |= 36;
		for (var t = this.s; t !== void 0; t = t.n) t.S.S(t);
	}
	JN.prototype.S.call(this, e);
}, $N.prototype.U = function(e) {
	if (this.t !== void 0 && (JN.prototype.U.call(this, e), this.t === void 0)) {
		this.f &= -33;
		for (var t = this.s; t !== void 0; t = t.n) t.S.U(t);
	}
}, $N.prototype.N = function() {
	if (!(2 & this.f)) {
		this.f |= 6;
		for (var e = this.t; e !== void 0; e = e.x) e.t.N();
	}
}, Object.defineProperty($N.prototype, "value", { get: function() {
	if (1 & this.f) throw Error("Cycle detected");
	var e = qN(this);
	if (this.h(), e !== void 0 && (e.i = this.i), 16 & this.f) throw this.v;
	return this.v;
} });
function eP(e, t) {
	return new $N(e, t);
}
function tP(e) {
	var t = e.m;
	if (e.m = void 0, typeof t == "function") {
		VN++;
		var n = RN;
		RN = void 0;
		try {
			t();
		} catch (t) {
			throw e.f &= -2, e.f |= 8, nP(e), t;
		} finally {
			RN = n, IN();
		}
	}
}
function nP(e) {
	for (var t = e.s; t !== void 0; t = t.n) t.S.U(t);
	e.x = void 0, e.s = void 0, tP(e);
}
function rP(e) {
	if (RN !== this) throw Error("Out-of-order effect");
	QN(this), RN = e, this.f &= -2, 8 & this.f && nP(this), IN();
}
function iP(e, t) {
	this.x = e, this.m = void 0, this.s = void 0, this.u = void 0, this.f = 32, this.name = t?.name, zN && zN.push(this);
}
iP.prototype.c = function() {
	var e = this.S();
	try {
		if (8 & this.f || this.x === void 0) return;
		var t = this.x();
		typeof t == "function" && (this.m = t);
	} finally {
		e();
	}
}, iP.prototype.S = function() {
	if (1 & this.f) throw Error("Cycle detected");
	this.f |= 1, this.f &= -9, tP(this), ZN(this), VN++;
	var e = RN;
	return RN = this, rP.bind(this, e);
}, iP.prototype.N = function() {
	2 & this.f || (this.f |= 2, this.u = BN, BN = this);
}, iP.prototype.d = function() {
	this.f |= 8, 1 & this.f || nP(this);
}, iP.prototype.dispose = function() {
	this.d();
};
function aP(e, t) {
	var n = new iP(e, t);
	try {
		n.c();
	} catch (e) {
		throw n.d(), e;
	}
	var r = n.d.bind(n);
	return r[Symbol.dispose] = r, r;
}
//#endregion
//#region ../../node_modules/.pnpm/@dnd-kit+state@0.5.0/node_modules/@dnd-kit/state/dist/index.mjs
var oP = Object.create, sP = Object.defineProperty, cP = Object.defineProperties, lP = Object.getOwnPropertyDescriptor, uP = Object.getOwnPropertyDescriptors, dP = Object.getOwnPropertySymbols, fP = Object.prototype.hasOwnProperty, pP = Object.prototype.propertyIsEnumerable, mP = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), hP = (e) => {
	throw TypeError(e);
}, gP = (e, t, n) => t in e ? sP(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, _P = (e, t) => {
	for (var n in t ||= {}) fP.call(t, n) && gP(e, n, t[n]);
	if (dP) for (var n of dP(t)) pP.call(t, n) && gP(e, n, t[n]);
	return e;
}, vP = (e, t) => cP(e, uP(t)), yP = (e, t) => sP(e, "name", {
	value: t,
	configurable: !0
}), bP = (e) => [
	,
	,
	,
	oP(e?.[mP("metadata")] ?? null)
], xP = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], SP = (e) => e !== void 0 && typeof e != "function" ? hP("Function expected") : e, CP = (e, t, n, r, i) => ({
	kind: xP[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? hP("Already initialized") : i.push(SP(e || null))
}), wP = (e, t) => gP(t, mP("metadata"), e[3]), TP = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, EP = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = xP[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && lP(d < 4 ? i : {
		get [n]() {
			return kP(this, a);
		},
		set [n](e) {
			return jP(this, a, e);
		}
	}, n));
	d ? p && d < 4 && yP(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : yP(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = CP(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => OP(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? kP : MP)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => jP(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? SP(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? hP("Object expected") : (SP(o = s.get) && (v.get = o), SP(o = s.set) && (v.set = o), SP(o = s.init) && g.unshift(o));
	return d || wP(e, i), v && sP(i, n, v), p ? d ^ 4 ? a : v : i;
}, DP = (e, t, n) => t.has(e) || hP("Cannot " + n), OP = (e, t) => Object(t) === t ? e.has(t) : hP("Cannot use the \"in\" operator on this value"), kP = (e, t, n) => (DP(e, t, "read from private field"), n ? n.call(e) : t.get(e)), AP = (e, t, n) => t.has(e) ? hP("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), jP = (e, t, n, r) => (DP(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), MP = (e, t, n) => (DP(e, t, "access private method"), n);
function NP(e, t) {
	if (t) {
		let n;
		return eP(() => {
			let r = e();
			return r && n && t(n, r) ? n : (n = r, r);
		});
	}
	return eP(e);
}
function PP(e, t) {
	if (Object.is(e, t)) return !0;
	if (e === null || t === null) return !1;
	if (typeof e == "function" && typeof t == "function") return e === t;
	if (e instanceof Set && t instanceof Set) {
		if (e.size !== t.size) return !1;
		for (let n of e) if (!t.has(n)) return !1;
		return !0;
	}
	if (Array.isArray(e)) return !Array.isArray(t) || e.length !== t.length ? !1 : !e.some((e, n) => !PP(e, t[n]));
	if (typeof e == "object" && typeof t == "object") {
		let n = Object.keys(e), r = Object.keys(t);
		return n.length === r.length && !n.some((n) => !PP(e[n], t[n]));
	}
	return !1;
}
function Y({ get: e }, t) {
	return {
		init(e) {
			return YN(e);
		},
		get() {
			return e.call(this).value;
		},
		set(t) {
			let n = e.call(this);
			n.peek() !== t && (n.value = t);
		}
	};
}
function FP(e, t) {
	let n = /* @__PURE__ */ new WeakMap();
	return function() {
		let t = n.get(this);
		return t || (t = NP(e.bind(this)), n.set(this, t)), t.value;
	};
}
function IP(e = !0) {
	return function(t, n) {
		n.addInitializer(function() {
			let t = n.kind === "field" || n.static ? this : Object.getPrototypeOf(this), r = Object.getOwnPropertyDescriptor(t, n.name);
			r && Object.defineProperty(t, n.name, vP(_P({}, r), { enumerable: e }));
		});
	};
}
function LP(...e) {
	let t = e.map((e) => aP(e));
	return () => t.forEach((e) => e());
}
var RP, zP, BP, VP, HP, UP = [Y], WP, GP, KP, qP, JP, YP, XP, ZP, QP, $P, eF, tF, nF, rF;
HP = [Y], VP = [Y], BP = [IP()], zP = [IP()], RP = [IP()];
var iF = class {
	constructor(e, t = Object.is) {
		this.defaultValue = e, this.equals = t, TP(WP, 5, this), AP(this, YP), AP(this, GP, TP(WP, 8, this)), TP(WP, 11, this), AP(this, XP, TP(WP, 12, this)), TP(WP, 15, this), AP(this, eF, TP(WP, 16, this)), TP(WP, 19, this), this.reset = this.reset.bind(this), this.reset();
	}
	get current() {
		return kP(this, YP, nF);
	}
	get initial() {
		return kP(this, YP, qP);
	}
	get previous() {
		return kP(this, YP, QP);
	}
	set current(e) {
		let t = J(() => kP(this, YP, nF));
		e && t && this.equals(t, e) || LN(() => {
			kP(this, YP, qP) || jP(this, YP, e, JP), jP(this, YP, t, $P), jP(this, YP, e, rF);
		});
	}
	reset(e = this.defaultValue) {
		LN(() => {
			jP(this, YP, void 0, $P), jP(this, YP, e, JP), jP(this, YP, e, rF);
		});
	}
};
WP = bP(null), GP = /* @__PURE__ */ new WeakMap(), YP = /* @__PURE__ */ new WeakSet(), XP = /* @__PURE__ */ new WeakMap(), eF = /* @__PURE__ */ new WeakMap(), KP = EP(WP, 20, "#initial", UP, YP, GP), qP = KP.get, JP = KP.set, ZP = EP(WP, 20, "#previous", HP, YP, XP), QP = ZP.get, $P = ZP.set, tF = EP(WP, 20, "#current", VP, YP, eF), nF = tF.get, rF = tF.set, EP(WP, 2, "current", BP, iF), EP(WP, 2, "initial", zP, iF), EP(WP, 2, "previous", RP, iF), wP(WP, iF);
function aF(e) {
	return J(() => {
		let t = {};
		for (let n in e) t[n] = e[n];
		return t;
	});
}
var oF = Object.create, sF = Object.defineProperty, cF = Object.getOwnPropertyDescriptor, lF = Object.getOwnPropertySymbols, uF = Object.prototype.hasOwnProperty, dF = Object.prototype.propertyIsEnumerable, fF = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), pF = (e) => {
	throw TypeError(e);
}, mF = Math.pow, hF = (e, t, n) => t in e ? sF(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, gF = (e, t) => {
	for (var n in t ||= {}) uF.call(t, n) && hF(e, n, t[n]);
	if (lF) for (var n of lF(t)) dF.call(t, n) && hF(e, n, t[n]);
	return e;
}, _F = (e, t) => sF(e, "name", {
	value: t,
	configurable: !0
}), vF = (e) => [
	,
	,
	,
	oF(e?.[fF("metadata")] ?? null)
], yF = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], bF = (e) => e !== void 0 && typeof e != "function" ? pF("Function expected") : e, xF = (e, t, n, r, i) => ({
	kind: yF[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? pF("Already initialized") : i.push(bF(e || null))
}), SF = (e, t) => hF(t, fF("metadata"), e[3]), CF = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, wF = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = yF[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && cF(d < 4 ? i : {
		get [n]() {
			return DF(this, a);
		},
		set [n](e) {
			return kF(this, a, e);
		}
	}, n));
	d ? p && d < 4 && _F(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : _F(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = xF(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => EF(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? DF : AF)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => kF(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? bF(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? pF("Object expected") : (bF(o = s.get) && (v.get = o), bF(o = s.set) && (v.set = o), bF(o = s.init) && g.unshift(o));
	return d || SF(e, i), v && sF(i, n, v), p ? d ^ 4 ? a : v : i;
}, TF = (e, t, n) => t.has(e) || pF("Cannot " + n), EF = (e, t) => Object(t) === t ? e.has(t) : pF("Cannot use the \"in\" operator on this value"), DF = (e, t, n) => (TF(e, t, "read from private field"), n ? n.call(e) : t.get(e)), OF = (e, t, n) => t.has(e) ? pF("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), kF = (e, t, n, r) => (TF(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), AF = (e, t, n) => (TF(e, t, "access private method"), n), jF = class e {
	constructor(e, t) {
		this.x = e, this.y = t;
	}
	static delta(t, n) {
		return new e(t.x - n.x, t.y - n.y);
	}
	static distance(e, t) {
		return Math.hypot(e.x - t.x, e.y - t.y);
	}
	static equals(e, t) {
		return e.x === t.x && e.y === t.y;
	}
	static from({ x: t, y: n }) {
		return new e(t, n);
	}
}, MF = class e {
	constructor(e, t, n, r) {
		this.left = e, this.top = t, this.width = n, this.height = r, this.scale = {
			x: 1,
			y: 1
		};
	}
	get inverseScale() {
		return {
			x: 1 / this.scale.x,
			y: 1 / this.scale.y
		};
	}
	translate(t, n) {
		let { top: r, left: i, width: a, height: o, scale: s } = this, c = new e(i + t, r + n, a, o);
		return c.scale = gF({}, s), c;
	}
	get boundingRectangle() {
		let { width: e, height: t, left: n, top: r, right: i, bottom: a } = this;
		return {
			width: e,
			height: t,
			left: n,
			top: r,
			right: i,
			bottom: a
		};
	}
	get center() {
		let { left: e, top: t, right: n, bottom: r } = this;
		return new jF((e + n) / 2, (t + r) / 2);
	}
	get area() {
		let { width: e, height: t } = this;
		return e * t;
	}
	equals(t) {
		if (!(t instanceof e)) return !1;
		let { left: n, top: r, width: i, height: a } = this;
		return n === t.left && r === t.top && i === t.width && a === t.height;
	}
	containsPoint(e) {
		let { top: t, left: n, bottom: r, right: i } = this;
		return t <= e.y && e.y <= r && n <= e.x && e.x <= i;
	}
	intersectionArea(t) {
		return t instanceof e ? NF(this, t) : 0;
	}
	intersectionRatio(e) {
		let { area: t } = this, n = this.intersectionArea(e);
		return n / (e.area + t - n);
	}
	get bottom() {
		let { top: e, height: t } = this;
		return e + t;
	}
	get right() {
		let { left: e, width: t } = this;
		return e + t;
	}
	get aspectRatio() {
		let { width: e, height: t } = this;
		return e / t;
	}
	get corners() {
		return [
			{
				x: this.left,
				y: this.top
			},
			{
				x: this.right,
				y: this.top
			},
			{
				x: this.left,
				y: this.bottom
			},
			{
				x: this.right,
				y: this.bottom
			}
		];
	}
	static from({ top: t, left: n, width: r, height: i }) {
		return new e(n, t, r, i);
	}
	static delta(e, t, n = {
		x: "center",
		y: "center"
	}) {
		let r = (e, t) => {
			let r = n[t], i = t === "x" ? e.left : e.top, a = t === "x" ? e.width : e.height;
			return r == "start" ? i : r == "end" ? i + a : i + a / 2;
		};
		return jF.delta({
			x: r(e, "x"),
			y: r(e, "y")
		}, {
			x: r(t, "x"),
			y: r(t, "y")
		});
	}
	static intersectionRatio(t, n) {
		return e.from(t).intersectionRatio(e.from(n));
	}
};
function NF(e, t) {
	let n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), i = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), o = i - r, s = a - n;
	return r < i && n < a ? o * s : 0;
}
var PF, FF, IF, LF, RF, zF = class extends (IF = iF, FF = [FP], PF = [FP], IF) {
	constructor(e) {
		let t = jF.from(e);
		super(t, (e, t) => jF.equals(e, t)), CF(RF, 5, this), OF(this, LF, 0), this.velocity = {
			x: 0,
			y: 0
		};
	}
	get delta() {
		return jF.delta(this.current, this.initial);
	}
	get direction() {
		let { current: e, previous: t } = this;
		if (!t) return null;
		let n = {
			x: e.x - t.x,
			y: e.y - t.y
		};
		return !n.x && !n.y ? null : Math.abs(n.x) > Math.abs(n.y) ? n.x > 0 ? "right" : "left" : n.y > 0 ? "down" : "up";
	}
	get current() {
		return super.current;
	}
	set current(e) {
		let { current: t } = this, n = jF.from(e), r = {
			x: n.x - t.x,
			y: n.y - t.y
		}, i = Date.now(), a = i - DF(this, LF), o = (e) => Math.round(e / a * 100);
		LN(() => {
			kF(this, LF, i), this.velocity = {
				x: o(r.x),
				y: o(r.y)
			}, super.current = n;
		});
	}
	reset(e = this.defaultValue) {
		super.reset(jF.from(e)), this.velocity = {
			x: 0,
			y: 0
		};
	}
};
RF = vF(IF), LF = /* @__PURE__ */ new WeakMap(), wF(RF, 2, "delta", FF, zF), wF(RF, 2, "direction", PF, zF), SF(RF, zF);
function BF({ x: e, y: t }, n) {
	let r = Math.abs(e), i = Math.abs(t);
	return typeof n == "number" ? Math.sqrt(mF(r, 2) + mF(i, 2)) > n : "x" in n && "y" in n ? r > n.x && i > n.y : "x" in n ? r > n.x : "y" in n && i > n.y;
}
var VF = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(VF || {}), HF = Object.values(VF), UF = Object.create, WF = Object.defineProperty, GF = Object.defineProperties, KF = Object.getOwnPropertyDescriptor, qF = Object.getOwnPropertyDescriptors, JF = Object.getOwnPropertySymbols, YF = Object.prototype.hasOwnProperty, XF = Object.prototype.propertyIsEnumerable, ZF = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), QF = (e) => {
	throw TypeError(e);
}, $F = (e, t, n) => t in e ? WF(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, eI = (e, t) => {
	for (var n in t ||= {}) YF.call(t, n) && $F(e, n, t[n]);
	if (JF) for (var n of JF(t)) XF.call(t, n) && $F(e, n, t[n]);
	return e;
}, tI = (e, t) => GF(e, qF(t)), nI = (e, t) => WF(e, "name", {
	value: t,
	configurable: !0
}), rI = (e, t) => {
	var n = {};
	for (var r in e) YF.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && JF) for (var r of JF(e)) t.indexOf(r) < 0 && XF.call(e, r) && (n[r] = e[r]);
	return n;
}, iI = (e) => [
	,
	,
	,
	UF(e?.[ZF("metadata")] ?? null)
], aI = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], oI = (e) => e !== void 0 && typeof e != "function" ? QF("Function expected") : e, sI = (e, t, n, r, i) => ({
	kind: aI[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? QF("Already initialized") : i.push(oI(e || null))
}), cI = (e, t) => $F(t, ZF("metadata"), e[3]), X = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, Z = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = aI[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && KF(d < 4 ? i : {
		get [n]() {
			return dI(this, a);
		},
		set [n](e) {
			return fI(this, a, e);
		}
	}, n));
	d ? p && d < 4 && nI(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : nI(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = sI(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => uI(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? dI : pI)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => fI(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? oI(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? QF("Object expected") : (oI(o = s.get) && (v.get = o), oI(o = s.set) && (v.set = o), oI(o = s.init) && g.unshift(o));
	return d || cI(e, i), v && WF(i, n, v), p ? d ^ 4 ? a : v : i;
}, lI = (e, t, n) => t.has(e) || QF("Cannot " + n), uI = (e, t) => Object(t) === t ? e.has(t) : QF("Cannot use the \"in\" operator on this value"), dI = (e, t, n) => (lI(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Q = (e, t, n) => t.has(e) ? QF("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), fI = (e, t, n, r) => (lI(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), pI = (e, t, n) => (lI(e, t, "access private method"), n);
function mI(e, t) {
	return {
		plugin: e,
		options: t
	};
}
function hI(e) {
	return (t) => mI(e, t);
}
function gI(e) {
	return typeof e == "function" ? {
		plugin: e,
		options: void 0
	} : e;
}
var _I = [Y], vI, yI, bI, xI = class {
	constructor(e, t) {
		this.manager = e, this.options = t, Q(this, yI, X(vI, 8, this, !1)), X(vI, 11, this), Q(this, bI, /* @__PURE__ */ new Set());
	}
	enable() {
		this.disabled = !1;
	}
	disable() {
		this.disabled = !0;
	}
	isDisabled() {
		return J(() => this.disabled);
	}
	configure(e) {
		this.options = e;
	}
	registerEffect(e) {
		let t = aP(e.bind(this));
		return dI(this, bI).add(t), t;
	}
	destroy() {
		dI(this, bI).forEach((e) => e());
	}
	static configure(e) {
		return mI(this, e);
	}
};
vI = iI(null), yI = /* @__PURE__ */ new WeakMap(), bI = /* @__PURE__ */ new WeakMap(), Z(vI, 4, "disabled", _I, xI, yI), cI(vI, xI);
var SI = class extends xI {}, CI, wI = class {
	constructor(e) {
		this.manager = e, this.instances = /* @__PURE__ */ new Map(), Q(this, CI, []);
	}
	get values() {
		return Array.from(this.instances.values());
	}
	set values(e) {
		let t = e.map(gI).reduce((e, t) => {
			let n = e.find(({ plugin: e }) => e === t.plugin);
			return n ? (n.options = t.options, e) : [...e, t];
		}, []), n = t.map(({ plugin: e }) => e);
		for (let e of dI(this, CI)) if (!n.includes(e)) {
			if (e.prototype instanceof SI) continue;
			this.unregister(e);
		}
		for (let { plugin: e, options: n } of t) this.register(e, n);
		fI(this, CI, n);
	}
	get(e) {
		return this.instances.get(e);
	}
	register(e, t) {
		let n = this.instances.get(e);
		if (n) return n.options !== t && (n.options = t), n;
		let r = new e(this.manager, t);
		return this.instances.set(e, r), r;
	}
	unregister(e) {
		let t = this.instances.get(e);
		t && (t.destroy(), this.instances.delete(e));
	}
	destroy() {
		for (let e of this.instances.values()) e.destroy();
		this.instances.clear();
	}
};
CI = /* @__PURE__ */ new WeakMap();
function TI(e, t) {
	return e.priority === t.priority ? e.type === t.type ? t.value - e.value : t.type - e.type : t.priority - e.priority;
}
var EI = [], DI, OI, kI = class extends xI {
	constructor(e) {
		super(e), Q(this, DI), Q(this, OI), this.computeCollisions = this.computeCollisions.bind(this), fI(this, OI, YN(EI)), this.destroy = LP(() => {
			let e = this.computeCollisions(), t = J(() => this.manager.dragOperation.position.current);
			if (e !== EI) {
				let e = dI(this, DI);
				if (fI(this, DI, t), e && t.x == e.x && t.y == e.y) return;
			} else fI(this, DI, void 0);
			dI(this, OI).value = e;
		}, () => {
			let { dragOperation: e } = this.manager;
			e.status.initialized && this.forceUpdate();
		});
	}
	forceUpdate(e = !0) {
		J(() => {
			e ? dI(this, OI).value = this.computeCollisions() : fI(this, DI, void 0);
		});
	}
	computeCollisions(e, t) {
		let { registry: n, dragOperation: r } = this.manager, { source: i, shape: a, status: o } = r;
		if (!o.initialized || !a) return EI;
		let s = [], c = [];
		for (let a of e ?? n.droppables) {
			if (a.disabled || i && !a.accepts(i)) continue;
			let e = t ?? a.collisionDetector;
			if (!e) continue;
			c.push(a), a.shape;
			let n = J(() => e({
				droppable: a,
				dragOperation: r
			}));
			n && (a.collisionPriority != null && (n.priority = a.collisionPriority), s.push(n));
		}
		return c.length === 0 ? EI : (s.sort(TI), s);
	}
	get collisions() {
		return dI(this, OI).value;
	}
};
DI = /* @__PURE__ */ new WeakMap(), OI = /* @__PURE__ */ new WeakMap();
var AI, jI, MI = [Y], NI, PI, FI, II, LI, RI, zI;
jI = [Y], AI = [Y];
var BI = class e {
	constructor(e, t) {
		Q(this, II, X(FI, 8, this)), X(FI, 11, this), Q(this, LI), Q(this, RI, X(FI, 12, this)), X(FI, 15, this), Q(this, zI, X(FI, 16, this)), X(FI, 19, this);
		let { effects: n, id: r, data: i = {}, disabled: a = !1, register: o = !0 } = e, s = r;
		fI(this, LI, YN(r)), this.manager = t, this.data = i, this.disabled = a, this.effects = () => [() => {
			let { id: e, manager: t } = this;
			if (e !== s) return s = e, t?.registry.register(this), () => t?.registry.unregister(this);
		}, ...n?.() ?? []], this.register = this.register.bind(this), this.unregister = this.unregister.bind(this), this.destroy = this.destroy.bind(this), t && o && queueMicrotask(this.register);
	}
	get id() {
		let t = dI(this, LI).value;
		return e.pendingIdChanges?.get(this) ?? t;
	}
	set id(t) {
		t !== (e.pendingIdChanges?.get(this) ?? dI(this, LI).peek()) && (e.pendingIdChanges || (e.pendingIdChanges = /* @__PURE__ */ new Map(), queueMicrotask(() => {
			var t;
			return pI(t = e, NI, PI).call(t);
		})), e.pendingIdChanges.set(this, t));
	}
	register() {
		return this.manager?.registry.register(this);
	}
	unregister() {
		var e;
		(e = this.manager) == null || e.registry.unregister(this);
	}
	destroy() {
		var e;
		(e = this.manager) == null || e.registry.unregister(this);
	}
};
FI = iI(null), NI = /* @__PURE__ */ new WeakSet(), PI = function() {
	let e = BI.pendingIdChanges;
	BI.pendingIdChanges = null, e && LN(() => {
		for (let [t, n] of e) dI(t, LI).value = n;
	});
}, II = /* @__PURE__ */ new WeakMap(), LI = /* @__PURE__ */ new WeakMap(), RI = /* @__PURE__ */ new WeakMap(), zI = /* @__PURE__ */ new WeakMap(), Z(FI, 4, "manager", MI, BI, II), Z(FI, 4, "data", jI, BI, RI), Z(FI, 4, "disabled", AI, BI, zI), Q(BI, NI), cI(FI, BI), BI.pendingIdChanges = null;
var VI = BI, HI = class {
	constructor() {
		this.map = YN(/* @__PURE__ */ new Map()), this.cleanupFunctions = /* @__PURE__ */ new WeakMap(), this.register = (e, t) => {
			let n = this.map.peek(), r = n.get(e), i = () => this.unregister(e, t);
			if (r === t) return i;
			r && r.id === e && (this.cleanupFunctions.get(r)?.(), this.cleanupFunctions.delete(r));
			let a = new Map(n);
			for (let [r, i] of n) if (i === t && r !== e) {
				a.delete(r);
				break;
			}
			a.set(e, t), this.map.value = a;
			let o = LP(...t.effects());
			return this.cleanupFunctions.set(t, o), i;
		}, this.unregister = (e, t) => {
			let n = this.map.peek();
			if (n.get(e) !== t) return;
			this.cleanupFunctions.get(t)?.(), this.cleanupFunctions.delete(t);
			let r = new Map(n);
			r.delete(e), this.map.value = r;
		};
	}
	[Symbol.iterator]() {
		return this.map.peek().values();
	}
	get value() {
		return this.map.value.values();
	}
	has(e) {
		return this.map.value.has(e);
	}
	get(e) {
		return this.map.value.get(e);
	}
	destroy() {
		for (let e of this) this.cleanupFunctions.get(e)?.(), e.destroy();
		this.map.value = /* @__PURE__ */ new Map();
	}
}, UI, WI, GI, KI, qI, JI, YI, XI, ZI, QI, $I, eL = class extends (YI = VI, JI = [Y], qI = [Y], KI = [Y], GI = [FP], WI = [FP], UI = [FP], YI) {
	constructor(e, t) {
		var n = e, { modifiers: r, type: i, sensors: a, plugins: o, effects: s } = n, c = rI(n, [
			"modifiers",
			"type",
			"sensors",
			"plugins",
			"effects"
		]);
		super(tI(eI({}, c), { effects: () => [...s?.() ?? [], () => {
			let { manager: e, plugins: t } = this;
			if (!(!e || !t)) for (let n of t) {
				let { plugin: t } = gI(n);
				e.registry.plugins.register(t);
			}
		}] }), t), X(XI, 5, this), Q(this, ZI, X(XI, 8, this)), X(XI, 11, this), Q(this, QI, X(XI, 12, this)), X(XI, 15, this), Q(this, $I, X(XI, 16, this, this.isDragSource ? "dragging" : "idle")), X(XI, 19, this), this.type = i, this.sensors = a, this.modifiers = r, this.alignment = c.alignment, this.plugins = o;
	}
	pluginConfig(e) {
		if (this.plugins) for (let t of this.plugins) {
			let n = gI(t);
			if (n.plugin === e) return n.options;
		}
	}
	get isDropping() {
		return this.status === "dropping" && this.isDragSource;
	}
	get isDragging() {
		return this.status === "dragging" && this.isDragSource;
	}
	get isDragSource() {
		return this.manager?.dragOperation.source?.id === this.id;
	}
};
XI = iI(YI), ZI = /* @__PURE__ */ new WeakMap(), QI = /* @__PURE__ */ new WeakMap(), $I = /* @__PURE__ */ new WeakMap(), Z(XI, 4, "type", JI, eL, ZI), Z(XI, 4, "modifiers", qI, eL, QI), Z(XI, 4, "status", KI, eL, $I), Z(XI, 2, "isDropping", GI, eL), Z(XI, 2, "isDragging", WI, eL), Z(XI, 2, "isDragSource", UI, eL), cI(XI, eL);
var tL, nL, rL, iL, aL, oL, sL, cL, lL, uL, dL, fL, pL, mL = class extends (sL = VI, oL = [Y], aL = [Y], iL = [Y], rL = [Y], nL = [Y], tL = [FP], sL) {
	constructor(e, t) {
		var n = e, { accept: r, collisionDetector: i, collisionPriority: a, type: o } = n, s = rI(n, [
			"accept",
			"collisionDetector",
			"collisionPriority",
			"type"
		]);
		super(s, t), X(cL, 5, this), Q(this, lL, X(cL, 8, this)), X(cL, 11, this), Q(this, uL, X(cL, 12, this)), X(cL, 15, this), Q(this, dL, X(cL, 16, this)), X(cL, 19, this), Q(this, fL, X(cL, 20, this)), X(cL, 23, this), Q(this, pL, X(cL, 24, this)), X(cL, 27, this), this.accept = r, this.collisionDetector = i, this.collisionPriority = a, this.type = o;
	}
	accepts(e) {
		let { accept: t } = this;
		return t ? typeof t == "function" ? t(e) : e.type ? Array.isArray(t) ? t.includes(e.type) : e.type === t : !1 : !0;
	}
	get isDropTarget() {
		return this.manager?.dragOperation.target?.id === this.id;
	}
};
cL = iI(sL), lL = /* @__PURE__ */ new WeakMap(), uL = /* @__PURE__ */ new WeakMap(), dL = /* @__PURE__ */ new WeakMap(), fL = /* @__PURE__ */ new WeakMap(), pL = /* @__PURE__ */ new WeakMap(), Z(cL, 4, "accept", oL, mL, lL), Z(cL, 4, "type", aL, mL, uL), Z(cL, 4, "collisionDetector", iL, mL, dL), Z(cL, 4, "collisionPriority", rL, mL, fL), Z(cL, 4, "shape", nL, mL, pL), Z(cL, 2, "isDropTarget", tL, mL), cI(cL, mL);
var hL = class {
	constructor() {
		this.registry = /* @__PURE__ */ new Map();
	}
	addEventListener(e, t) {
		let { registry: n } = this, r = new Set(n.get(e));
		return r.add(t), n.set(e, r), () => this.removeEventListener(e, t);
	}
	removeEventListener(e, t) {
		let { registry: n } = this, r = new Set(n.get(e));
		r.delete(t), n.set(e, r);
	}
	dispatch(e, ...t) {
		let { registry: n } = this, r = n.get(e);
		if (r) for (let e of r) e(...t);
	}
}, gL = class extends hL {
	constructor(e) {
		super(), this.manager = e;
	}
	dispatch(e, t) {
		let n = [t, this.manager];
		super.dispatch(e, ...n);
	}
};
function _L(e, t = !0) {
	let n = !1;
	return tI(eI({}, e), {
		cancelable: t,
		get defaultPrevented() {
			return n;
		},
		preventDefault() {
			t && (n = !0);
		}
	});
}
var vL = class extends SI {
	constructor(e) {
		super(e);
		let t = (e, t) => e.map(({ id: e }) => e).join("") === t.map(({ id: e }) => e).join(""), n = [];
		this.destroy = LP(() => {
			let { dragOperation: t, collisionObserver: r } = e;
			t.status.initializing && (n = [], r.enable());
		}, () => {
			let { collisionObserver: r, monitor: i } = e, { collisions: a } = r;
			if (r.isDisabled() || VI.pendingIdChanges) return;
			let o = _L({ collisions: a });
			if (i.dispatch("collision", o), o.defaultPrevented || t(a, n)) return;
			n = a;
			let [s] = a;
			J(() => {
				s?.id !== e.dragOperation.target?.id && (r.disable(), e.actions.setDropTarget(s?.id).then(() => {
					r.enable();
				}));
			});
		});
	}
}, yL = /* @__PURE__ */ ((e) => (e[e.Lowest = 0] = "Lowest", e[e.Low = 1] = "Low", e[e.Normal = 2] = "Normal", e[e.High = 3] = "High", e[e.Highest = 4] = "Highest", e))(yL || {}), bL = /* @__PURE__ */ ((e) => (e[e.Collision = 0] = "Collision", e[e.ShapeIntersection = 1] = "ShapeIntersection", e[e.PointerIntersection = 2] = "PointerIntersection", e))(bL || {}), xL, SL, CL, wL, TL, EL, DL = [Y], OL, kL;
EL = [FP], TL = [FP], wL = [FP], CL = [FP], SL = [FP], xL = [FP];
var AL = class {
	constructor() {
		X(OL, 5, this), Q(this, kL, X(OL, 8, this, "idle")), X(OL, 11, this);
	}
	get current() {
		return this.value;
	}
	get idle() {
		return this.value === "idle";
	}
	get initializing() {
		return this.value === "initializing";
	}
	get initialized() {
		let { value: e } = this;
		return e !== "idle" && e !== "initialization-pending";
	}
	get dragging() {
		return this.value === "dragging";
	}
	get dropped() {
		return this.value === "dropped";
	}
	set(e) {
		this.value = e;
	}
};
OL = iI(null), kL = /* @__PURE__ */ new WeakMap(), Z(OL, 4, "value", DL, AL, kL), Z(OL, 2, "current", EL, AL), Z(OL, 2, "idle", TL, AL), Z(OL, 2, "initializing", wL, AL), Z(OL, 2, "initialized", CL, AL), Z(OL, 2, "dragging", SL, AL), Z(OL, 2, "dropped", xL, AL), cI(OL, AL);
var jL = class {
	constructor(e) {
		this.manager = e;
	}
	setDragSource(e) {
		let { dragOperation: t } = this.manager;
		t.sourceIdentifier = typeof e == "string" || typeof e == "number" ? e : e.id;
	}
	setDropTarget(e) {
		return J(() => {
			let { dragOperation: t } = this.manager, n = e ?? null;
			if (t.targetIdentifier === n) return Promise.resolve(!1);
			t.targetIdentifier = n;
			let r = _L({ operation: t.snapshot() });
			return t.status.dragging && this.manager.monitor.dispatch("dragover", r), this.manager.renderer.rendering.then(() => r.defaultPrevented);
		});
	}
	start(e) {
		return J(() => {
			let { dragOperation: t } = this.manager;
			if (e.source != null && this.setDragSource(e.source), !t.source) throw Error("Cannot start a drag operation without a drag source");
			if (!t.status.idle) throw Error("Cannot start a drag operation while another is active");
			let n = new AbortController(), { event: r, coordinates: i } = e;
			LN(() => {
				t.status.set("initialization-pending"), t.shape = null, t.canceled = !1, t.activatorEvent = r ?? null, t.position.reset(i);
			});
			let a = _L({ operation: t.snapshot() });
			return this.manager.monitor.dispatch("beforedragstart", a), a.defaultPrevented ? (t.reset(), n.abort(), n) : (t.status.set("initializing"), t.controller = n, this.manager.renderer.rendering.then(() => {
				if (n.signal.aborted) return;
				let { status: e } = t;
				e.current === "initializing" && LN(() => {
					t.status.set("dragging"), this.manager.monitor.dispatch("dragstart", {
						nativeEvent: r,
						operation: t.snapshot(),
						cancelable: !1
					});
				});
			}), n);
		});
	}
	move(e) {
		return J(() => {
			let { dragOperation: t } = this.manager, { status: n, controller: r } = t;
			if (!n.dragging || !r || r.signal.aborted) return;
			let i = _L({
				nativeEvent: e.event,
				operation: t.snapshot(),
				by: e.by,
				to: e.to
			}, e.cancelable ?? !0);
			(e.propagate ?? !0) && this.manager.monitor.dispatch("dragmove", i), queueMicrotask(() => {
				if (i.defaultPrevented) return;
				let n = e.to ?? {
					x: t.position.current.x + (e.by?.x ?? 0),
					y: t.position.current.y + (e.by?.y ?? 0)
				};
				t.position.current = n;
			});
		});
	}
	stop(e = {}) {
		return J(() => {
			let { dragOperation: t } = this.manager, { controller: n } = t;
			if (!n || n.signal.aborted) return;
			let r, i = () => {
				let e = {
					resume: () => {},
					abort: () => {}
				};
				return r = new Promise((t, n) => {
					e.resume = t, e.abort = n;
				}), e;
			};
			n.abort();
			let a = () => {
				this.manager.renderer.rendering.then(() => {
					t.status.set("dropped");
					let e = J(() => t.source?.status === "dropping"), r = () => {
						t.controller === n && (t.controller = void 0), t.reset();
					};
					if (e) {
						let { source: e } = t, n = aP(() => {
							e?.status === "idle" && (n(), r());
						});
					} else this.manager.renderer.rendering.then(r);
				});
			};
			t.canceled = e.canceled ?? !1, this.manager.monitor.dispatch("dragend", {
				nativeEvent: e.event,
				operation: t.snapshot(),
				canceled: e.canceled ?? !1,
				suspend: i
			}), r ? r.then(a).catch(() => t.reset()) : a();
		});
	}
}, ML = class extends xI {
	constructor(e, t) {
		super(e, t), this.manager = e, this.options = t;
	}
}, NL = class extends AbortController {
	constructor(e, t) {
		super(), this.constraints = e, this.onActivate = t, this.activated = !1;
		for (let t of e ?? []) t.controller = this;
	}
	onEvent(e) {
		if (!this.activated) if (this.constraints?.length) for (let t of this.constraints) t.onEvent(e);
		else this.activate(e);
	}
	activate(e) {
		this.activated || (this.activated = !0, this.onActivate(e));
	}
	abort(e) {
		this.activated = !1, super.abort(e);
	}
}, PL, FL = class {
	constructor(e) {
		this.options = e, Q(this, PL);
	}
	set controller(e) {
		fI(this, PL, e), e.signal.addEventListener("abort", () => this.abort());
	}
	activate(e) {
		var t;
		(t = dI(this, PL)) == null || t.activate(e);
	}
};
PL = /* @__PURE__ */ new WeakMap();
var IL = class extends xI {
	constructor(e, t) {
		super(e, t), this.manager = e, this.options = t;
	}
	apply(e) {
		return e.transform;
	}
}, LL = class {
	constructor(e) {
		this.draggables = new HI(), this.droppables = new HI(), this.plugins = new wI(e), this.sensors = new wI(e), this.modifiers = new wI(e);
	}
	register(e, t) {
		if (e instanceof eL) return this.draggables.register(e.id, e);
		if (e instanceof mL) return this.droppables.register(e.id, e);
		if (e.prototype instanceof IL) return this.modifiers.register(e, t);
		if (e.prototype instanceof ML) return this.sensors.register(e, t);
		if (e.prototype instanceof xI) return this.plugins.register(e, t);
		throw Error("Invalid instance type");
	}
	unregister(e) {
		if (e instanceof VI) return e instanceof eL ? this.draggables.unregister(e.id, e) : e instanceof mL ? this.droppables.unregister(e.id, e) : () => {};
		if (e.prototype instanceof IL) return this.modifiers.unregister(e);
		if (e.prototype instanceof ML) return this.sensors.unregister(e);
		if (e.prototype instanceof xI) return this.plugins.unregister(e);
		throw Error("Invalid instance type");
	}
	destroy() {
		this.draggables.destroy(), this.droppables.destroy(), this.plugins.destroy(), this.sensors.destroy(), this.modifiers.destroy();
	}
}, RL, zL, BL, VL, HL, UL, WL, GL, KL = [FP], qL, JL, YL, XL, ZL, QL, $L, eR, tR, nR;
GL = [Y], WL = [Y], UL = [Y], HL = [Y], VL = [Y], BL = [FP], zL = [FP], RL = [FP];
var rR = class {
	constructor(e) {
		X(XL, 5, this), Q(this, qL), Q(this, JL), Q(this, YL, new iF(void 0, (e, t) => e && t ? e.equals(t) : e === t)), this.status = new AL(), Q(this, ZL, X(XL, 8, this, !1)), X(XL, 11, this), Q(this, QL, X(XL, 12, this, null)), X(XL, 15, this), Q(this, $L, X(XL, 16, this, null)), X(XL, 19, this), Q(this, eR, X(XL, 20, this, null)), X(XL, 23, this), Q(this, tR, X(XL, 24, this, [])), X(XL, 27, this), this.position = new zF({
			x: 0,
			y: 0
		}), Q(this, nR, {
			x: 0,
			y: 0
		}), fI(this, qL, e);
	}
	get shape() {
		let { current: e, initial: t, previous: n } = dI(this, YL);
		return !e || !t ? null : {
			current: e,
			initial: t,
			previous: n
		};
	}
	set shape(e) {
		e ? dI(this, YL).current = e : dI(this, YL).reset();
	}
	get source() {
		let e = this.sourceIdentifier;
		if (e == null) return null;
		let t = dI(this, qL).registry.draggables.get(e);
		return t && fI(this, JL, t), t ?? dI(this, JL) ?? null;
	}
	get target() {
		let e = this.targetIdentifier;
		return e == null ? null : dI(this, qL).registry.droppables.get(e) ?? null;
	}
	get transform() {
		let { x: e, y: t } = this.position.delta, n = {
			x: e,
			y: t
		};
		for (let e of this.modifiers) n = e.apply(tI(eI({}, this.snapshot()), { transform: n }));
		return fI(this, nR, n), n;
	}
	snapshot() {
		return J(() => ({
			source: this.source,
			target: this.target,
			activatorEvent: this.activatorEvent,
			transform: dI(this, nR),
			shape: this.shape ? aF(this.shape) : null,
			position: aF(this.position),
			status: aF(this.status),
			canceled: this.canceled
		}));
	}
	reset() {
		LN(() => {
			this.status.set("idle"), this.sourceIdentifier = null, this.targetIdentifier = null, dI(this, YL).reset(), this.position.reset({
				x: 0,
				y: 0
			}), fI(this, nR, {
				x: 0,
				y: 0
			}), this.modifiers = [];
		});
	}
};
XL = iI(null), qL = /* @__PURE__ */ new WeakMap(), JL = /* @__PURE__ */ new WeakMap(), YL = /* @__PURE__ */ new WeakMap(), ZL = /* @__PURE__ */ new WeakMap(), QL = /* @__PURE__ */ new WeakMap(), $L = /* @__PURE__ */ new WeakMap(), eR = /* @__PURE__ */ new WeakMap(), tR = /* @__PURE__ */ new WeakMap(), nR = /* @__PURE__ */ new WeakMap(), Z(XL, 2, "shape", KL, rR), Z(XL, 4, "canceled", GL, rR, ZL), Z(XL, 4, "activatorEvent", WL, rR, QL), Z(XL, 4, "sourceIdentifier", UL, rR, $L), Z(XL, 4, "targetIdentifier", HL, rR, eR), Z(XL, 4, "modifiers", VL, rR, tR), Z(XL, 2, "source", BL, rR), Z(XL, 2, "target", zL, rR), Z(XL, 2, "transform", RL, rR), cI(XL, rR);
var iR = { get rendering() {
	return Promise.resolve();
} };
function aR(e, t) {
	return typeof e == "function" ? e(t) : e ?? t;
}
var oR = class {
	constructor(e) {
		this.destroy = () => {
			this.dragOperation.status.idle || this.actions.stop({ canceled: !0 }), this.dragOperation.modifiers.forEach((e) => e.destroy()), this.registry.destroy(), this.collisionObserver.destroy();
		};
		let t = e ?? {}, n = aR(t.plugins, []), r = aR(t.sensors, []), i = aR(t.modifiers, []), a = t.renderer ?? iR, o = new gL(this), s = new LL(this);
		this.registry = s, this.monitor = o, this.renderer = a, this.actions = new jL(this), this.dragOperation = new rR(this), this.collisionObserver = new kI(this), this.plugins = [vL, ...n], this.modifiers = i, this.sensors = r;
		let { destroy: c } = this, l = LP(() => {
			let e = J(() => this.dragOperation.modifiers), t = this.modifiers;
			for (let n of e) t.includes(n) || n.destroy();
			this.dragOperation.modifiers = (this.dragOperation.source?.modifiers)?.map((e) => {
				let { plugin: t, options: n } = gI(e);
				return new t(this, n);
			}) ?? t;
		});
		this.destroy = () => {
			l(), c();
		};
	}
	get plugins() {
		return this.registry.plugins.values;
	}
	set plugins(e) {
		this.registry.plugins.values = e;
	}
	get modifiers() {
		return this.registry.modifiers.values;
	}
	set modifiers(e) {
		this.registry.modifiers.values = e;
	}
	get sensors() {
		return this.registry.sensors.values;
	}
	set sensors(e) {
		this.registry.sensors.values = e;
	}
}, sR = (e) => {
	throw TypeError(e);
}, cR = (e, t, n) => t.has(e) || sR("Cannot " + n), $ = (e, t, n) => (cR(e, t, "read from private field"), t.get(e)), lR = (e, t, n) => t.has(e) ? sR("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), uR = (e, t, n, r) => (cR(e, t, "write to private field"), t.set(e, n), n), dR = (e, t, n) => (cR(e, t, "access private method"), n);
function fR(e) {
	return e ? e instanceof KeyframeEffect || "getKeyframes" in e && typeof e.getKeyframes == "function" : !1;
}
function pR(e, t) {
	let n = e.getAnimations(), r = null;
	for (let e of n) {
		if (e.playState !== "running") continue;
		let { effect: n } = e, i = (fR(n) ? n.getKeyframes() : []).filter(t);
		i.length > 0 && (r = [i[i.length - 1], e]);
	}
	return r;
}
function mR(e) {
	let { width: t, height: n, top: r, left: i, bottom: a, right: o } = e.getBoundingClientRect();
	return {
		width: t,
		height: n,
		top: r,
		left: i,
		bottom: a,
		right: o
	};
}
function hR(e) {
	let t = Object.prototype.toString.call(e);
	return t === "[object Window]" || t === "[object global]";
}
function gR(e) {
	return "nodeType" in e;
}
function _R(e) {
	return e ? hR(e) ? e : gR(e) ? "defaultView" in e ? e.defaultView ?? window : e.ownerDocument?.defaultView ?? window : window : window;
}
function vR(e) {
	let { Document: t } = _R(e);
	return e instanceof t || "nodeType" in e && e.nodeType === Node.DOCUMENT_NODE;
}
function yR(e) {
	return !e || hR(e) ? !1 : e instanceof _R(e).HTMLElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("html");
}
function bR(e) {
	return e instanceof _R(e).SVGElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("svg");
}
function xR(e) {
	return e ? hR(e) ? e.document : gR(e) ? vR(e) ? e : yR(e) || bR(e) ? e.ownerDocument : document : document : document;
}
function SR(e) {
	let { documentElement: t } = xR(e), n = _R(e).visualViewport, r = n?.width ?? t.clientWidth, i = n?.height ?? t.clientHeight, a = n?.offsetTop ?? 0, o = n?.offsetLeft ?? 0;
	return {
		top: a,
		left: o,
		right: o + r,
		bottom: a + i,
		width: r,
		height: i
	};
}
function CR(e, t) {
	if (wR(e) && e.open === !1) return !1;
	let { overflow: n, overflowX: r, overflowY: i } = getComputedStyle(e);
	return n === "visible" && r === "visible" && i === "visible";
}
function wR(e) {
	return e.tagName === "DETAILS";
}
function TR(e, t = e.getBoundingClientRect(), n = 0) {
	let r = t, { ownerDocument: i } = e, a = i.defaultView ?? window, o = e.parentElement;
	for (; o && o !== i.documentElement;) {
		if (!CR(o)) {
			let e = o.getBoundingClientRect(), t = n * (e.bottom - e.top), i = n * (e.right - e.left), a = n * (e.bottom - e.top), s = n * (e.right - e.left);
			r = {
				top: Math.max(r.top, e.top - t),
				right: Math.min(r.right, e.right + i),
				bottom: Math.min(r.bottom, e.bottom + a),
				left: Math.max(r.left, e.left - s),
				width: 0,
				height: 0
			}, r.width = r.right - r.left, r.height = r.bottom - r.top;
		}
		o = o.parentElement;
	}
	let s = a.visualViewport, c = s?.offsetTop ?? 0, l = s?.offsetLeft ?? 0, u = s?.width ?? a.innerWidth, d = s?.height ?? a.innerHeight, f = n * d, p = n * u;
	return r = {
		top: Math.max(r.top, c - f),
		right: Math.min(r.right, l + u + p),
		bottom: Math.min(r.bottom, c + d + f),
		left: Math.max(r.left, l - p),
		width: 0,
		height: 0
	}, r.width = r.right - r.left, r.height = r.bottom - r.top, r.width < 0 && (r.width = 0), r.height < 0 && (r.height = 0), r;
}
function ER(e) {
	return {
		x: e.clientX,
		y: e.clientY
	};
}
var DR = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function OR(e = document, t = /* @__PURE__ */ new Set()) {
	if (t.has(e)) return [];
	t.add(e);
	let n = [e];
	for (let r of Array.from(e.querySelectorAll("iframe, frame"))) try {
		let e = r.contentDocument;
		e && !t.has(e) && n.push(...OR(e, t));
	} catch {}
	try {
		let r = e.defaultView;
		if (r && r !== window.top) {
			let i = r.parent;
			i && i.document && i.document !== e && n.push(...OR(i.document, t));
		}
	} catch {}
	return n;
}
function kR() {
	return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function AR() {
	let e = kR() ? window.visualViewport : null;
	return {
		x: e?.offsetLeft ?? 0,
		y: e?.offsetTop ?? 0
	};
}
function jR(e) {
	return !e || !gR(e) ? !1 : e instanceof _R(e).ShadowRoot;
}
function MR(e) {
	if (e && gR(e)) {
		let t = e.getRootNode();
		if (jR(t) || t instanceof Document) return t;
	}
	return xR(e);
}
function NR(e) {
	return e.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function PR(e) {
	let t = "input, textarea, select, canvas, [contenteditable]", n = e.cloneNode(!0), r = Array.from(e.querySelectorAll(t));
	return Array.from(n.querySelectorAll(t)).forEach((e, t) => {
		let n = r[t];
		FR(e) && FR(n) && (e.type !== "file" && (e.value = n.value), e.type === "radio" && e.name && (e.name = `Cloned__${e.name}`)), IR(e) && IR(n) && n.width > 0 && n.height > 0 && e.getContext("2d")?.drawImage(n, 0, 0);
	}), n;
}
function FR(e) {
	return "value" in e;
}
function IR(e) {
	return e.tagName === "CANVAS";
}
function LR(e, { x: t, y: n }) {
	let r = e.elementFromPoint(t, n);
	if (RR(r)) {
		let { contentDocument: e } = r;
		if (e) {
			let { left: i, top: a } = r.getBoundingClientRect();
			return LR(e, {
				x: t - i,
				y: n - a
			});
		}
	}
	return r;
}
function RR(e) {
	return e?.tagName === "IFRAME";
}
var zR = /* @__PURE__ */ new WeakMap();
function BR(e) {
	return e.closest("\n    input:not([disabled]),\n    select:not([disabled]),\n    textarea:not([disabled]),\n    button:not([disabled]),\n    a[href],\n    [contenteditable]:not([contenteditable=\"false\"])\n  ");
}
var VR = class {
	constructor() {
		this.entries = /* @__PURE__ */ new Set(), this.clear = () => {
			for (let e of this.entries) {
				let [t, { type: n, listener: r, options: i }] = e;
				t.removeEventListener(n, r, i);
			}
			this.entries.clear();
		};
	}
	bind(e, t) {
		let n = Array.isArray(e) ? e : [e], r = Array.isArray(t) ? t : [t], i = [];
		for (let e of n) for (let t of r) {
			let { type: n, listener: r, options: a } = t, o = [e, t];
			e.addEventListener(n, r, a), this.entries.add(o), i.push(o);
		}
		let a = this.entries;
		return function() {
			for (let e of i) {
				let [t, { type: n, listener: r, options: i }] = e;
				t.removeEventListener(n, r, i), a.delete(e);
			}
		};
	}
};
function HR(e) {
	let t = e?.ownerDocument.defaultView;
	if (t && t.self !== t.parent) return t.frameElement;
}
function UR(e) {
	let t = /* @__PURE__ */ new Set(), n = HR(e);
	for (; n;) t.add(n), n = HR(n);
	return t;
}
function WR(e, t) {
	let n = setTimeout(e, t);
	return () => clearTimeout(n);
}
function GR(e, t) {
	let n = () => performance.now(), r, i;
	return function(...a) {
		let o = this;
		i ? (r?.(), r = WR(() => {
			e.apply(o, a), i = n();
		}, t - (n() - i))) : (e.apply(o, a), i = n());
	};
}
function KR(e, t) {
	return e === t ? !0 : !e || !t ? !1 : e.top == t.top && e.left == t.left && e.right == t.right && e.bottom == t.bottom;
}
function qR(e, t = e.getBoundingClientRect()) {
	let { width: n, height: r } = TR(e, t);
	return n > 0 && r > 0;
}
var JR = DR ? ResizeObserver : class {
	observe() {}
	unobserve() {}
	disconnect() {}
}, YR, XR = class extends JR {
	constructor(e) {
		super((t) => {
			if (!$(this, YR)) {
				uR(this, YR, !0);
				return;
			}
			e(t, this);
		}), lR(this, YR, !1);
	}
};
YR = /* @__PURE__ */ new WeakMap();
var ZR = Array.from({ length: 100 }, (e, t) => t / 100), QR = 75, $R, ez, tz, nz, rz, iz, az, oz, sz, cz, lz, uz = class {
	constructor(e, t, n = {
		debug: !1,
		skipInitial: !1
	}) {
		this.element = e, this.callback = t, lR(this, sz), this.disconnect = () => {
			var e, t, n;
			uR(this, az, !0), (e = $(this, tz)) == null || e.disconnect(), (t = $(this, nz)) == null || t.disconnect(), $(this, rz).disconnect(), (n = $(this, iz)) == null || n.remove();
		}, lR(this, $R, !0), lR(this, ez), lR(this, tz), lR(this, nz), lR(this, rz), lR(this, iz), lR(this, az, !1), lR(this, oz, GR(() => {
			var e;
			let { element: t } = this;
			if ((e = $(this, nz)) == null || e.disconnect(), $(this, az) || !$(this, $R) || !t.isConnected) return;
			let n = t.ownerDocument ?? document, { innerHeight: r, innerWidth: i } = n.defaultView ?? window, a = t.getBoundingClientRect(), { top: o, left: s, bottom: c, right: l } = TR(t, a), u = -Math.floor(o), d = -Math.floor(s), f = `${u}px ${-Math.floor(i - l)}px ${-Math.floor(r - c)}px ${d}px`;
			this.boundingClientRect = a, uR(this, nz, new IntersectionObserver((e) => {
				let [n] = e, { intersectionRect: r } = n;
				(n.intersectionRatio === 1 ? MF.intersectionRatio(r, TR(t)) : n.intersectionRatio) !== 1 && $(this, oz).call(this);
			}, {
				threshold: ZR,
				rootMargin: f,
				root: n
			})), $(this, nz).observe(t), dR(this, sz, cz).call(this);
		}, QR)), this.boundingClientRect = e.getBoundingClientRect(), uR(this, $R, qR(e, this.boundingClientRect));
		let r = !0;
		this.callback = (e) => {
			r && (r = !1, n.skipInitial) || t(e);
		};
		let i = e.ownerDocument;
		n?.debug && (uR(this, iz, document.createElement("div")), $(this, iz).style.background = "rgba(0,0,0,0.15)", $(this, iz).style.position = "fixed", $(this, iz).style.pointerEvents = "none", i.body.appendChild($(this, iz))), uR(this, rz, new IntersectionObserver((t) => {
			var n, r;
			let { boundingClientRect: i, isIntersecting: a } = t[t.length - 1], { width: o, height: s } = i, c = $(this, $R);
			uR(this, $R, a), !(!o && !s) && (c && !a ? ((n = $(this, nz)) == null || n.disconnect(), this.callback(null), (r = $(this, tz)) == null || r.disconnect(), uR(this, tz, void 0), $(this, iz) && ($(this, iz).style.visibility = "hidden")) : $(this, oz).call(this), a && !$(this, tz) && (uR(this, tz, new XR($(this, oz))), $(this, tz).observe(e)));
		}, {
			threshold: ZR,
			root: i
		})), $(this, $R) && !n.skipInitial && this.callback(this.boundingClientRect), $(this, rz).observe(e);
	}
};
$R = /* @__PURE__ */ new WeakMap(), ez = /* @__PURE__ */ new WeakMap(), tz = /* @__PURE__ */ new WeakMap(), nz = /* @__PURE__ */ new WeakMap(), rz = /* @__PURE__ */ new WeakMap(), iz = /* @__PURE__ */ new WeakMap(), az = /* @__PURE__ */ new WeakMap(), oz = /* @__PURE__ */ new WeakMap(), sz = /* @__PURE__ */ new WeakSet(), cz = function() {
	$(this, az) || (dR(this, sz, lz).call(this), !KR(this.boundingClientRect, $(this, ez)) && (this.callback(this.boundingClientRect), uR(this, ez, this.boundingClientRect)));
}, lz = function() {
	if ($(this, iz)) {
		let { top: e, left: t, width: n, height: r } = TR(this.element);
		$(this, iz).style.overflow = "hidden", $(this, iz).style.visibility = "visible", $(this, iz).style.top = `${Math.floor(e)}px`, $(this, iz).style.left = `${Math.floor(t)}px`, $(this, iz).style.width = `${Math.floor(n)}px`, $(this, iz).style.height = `${Math.floor(r)}px`;
	}
};
var dz = /* @__PURE__ */ new WeakMap(), fz = /* @__PURE__ */ new WeakMap();
function pz(e, t) {
	let n = dz.get(e);
	return n ||= {
		disconnect: new uz(e, (t) => {
			let n = dz.get(e);
			n && n.callbacks.forEach((e) => e(t));
		}, { skipInitial: !0 }).disconnect,
		callbacks: /* @__PURE__ */ new Set()
	}, n.callbacks.add(t), dz.set(e, n), () => {
		n.callbacks.delete(t), n.callbacks.size === 0 && (dz.delete(e), n.disconnect());
	};
}
function mz(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r of e) {
		let e = pz(r, t);
		n.add(e);
	}
	return () => n.forEach((e) => e());
}
function hz(e, t) {
	let n = e.ownerDocument;
	if (!fz.has(n)) {
		let e = new AbortController(), t = /* @__PURE__ */ new Set();
		document.addEventListener("scroll", (e) => t.forEach((t) => t(e)), {
			capture: !0,
			passive: !0,
			signal: e.signal
		}), fz.set(n, {
			disconnect: () => e.abort(),
			listeners: t
		});
	}
	let { listeners: r, disconnect: i } = fz.get(n) ?? {};
	return !r || !i ? () => {} : (r.add(t), () => {
		r.delete(t), r.size === 0 && (i(), fz.delete(n));
	});
}
var gz, _z, vz, yz, bz = class {
	constructor(e, t, n) {
		this.callback = t, lR(this, gz), lR(this, _z, !1), lR(this, vz), lR(this, yz, GR((e) => {
			if (!$(this, _z) && e.target && "contains" in e.target && typeof e.target.contains == "function") {
				for (let t of $(this, vz)) if (e.target.contains(t)) {
					this.callback($(this, gz).boundingClientRect);
					break;
				}
			}
		}, QR));
		let r = UR(e), i = mz(r, t), a = hz(e, $(this, yz));
		uR(this, vz, r), uR(this, gz, new uz(e, t, n)), this.disconnect = () => {
			$(this, _z) || (uR(this, _z, !0), i(), a(), $(this, gz).disconnect());
		};
	}
};
gz = /* @__PURE__ */ new WeakMap(), _z = /* @__PURE__ */ new WeakMap(), vz = /* @__PURE__ */ new WeakMap(), yz = /* @__PURE__ */ new WeakMap();
function xz(e) {
	return "showPopover" in e && "hidePopover" in e && typeof e.showPopover == "function" && typeof e.hidePopover == "function";
}
function Sz(e) {
	try {
		xz(e) && e.isConnected && e.hasAttribute("popover") && !e.matches(":popover-open") && e.showPopover();
	} catch {}
}
function Cz(e) {
	return !DR || !e ? !1 : e === xR(e).scrollingElement;
}
function wz(e) {
	let t = _R(e), n = Cz(e) ? SR(e) : mR(e), r = t.visualViewport, i = Cz(e) ? {
		height: r?.height ?? t.innerHeight,
		width: r?.width ?? t.innerWidth
	} : {
		height: e.clientHeight,
		width: e.clientWidth
	}, a = {
		current: {
			x: e.scrollLeft,
			y: e.scrollTop
		},
		max: {
			x: e.scrollWidth - i.width,
			y: e.scrollHeight - i.height
		}
	};
	return {
		rect: n,
		position: a,
		isTop: a.current.y <= 0,
		isLeft: a.current.x <= 0,
		isBottom: a.current.y >= a.max.y,
		isRight: a.current.x >= a.max.x
	};
}
function Tz(e, t) {
	let { isTop: n, isBottom: r, isLeft: i, isRight: a, position: o } = wz(e), { x: s, y: c } = t ?? {
		x: 0,
		y: 0
	}, l = !n && o.current.y + c > 0, u = !r && o.current.y + c < o.max.y, d = !i && o.current.x + s > 0, f = !a && o.current.x + s < o.max.x;
	return {
		top: l,
		bottom: u,
		left: d,
		right: f,
		x: d || f,
		y: l || u
	};
}
var Ez = class {
	constructor(e) {
		this.scheduler = e, this.pending = !1, this.tasks = /* @__PURE__ */ new Set(), this.resolvers = /* @__PURE__ */ new Set(), this.flush = () => {
			let { tasks: e, resolvers: t } = this;
			this.pending = !1, this.tasks = /* @__PURE__ */ new Set(), this.resolvers = /* @__PURE__ */ new Set();
			for (let t of e) t();
			for (let e of t) e();
		};
	}
	schedule(e) {
		return this.tasks.add(e), this.pending || (this.pending = !0, this.scheduler(this.flush)), new Promise((e) => this.resolvers.add(e));
	}
}, Dz = new Ez((e) => {
	typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : e();
}), Oz = new Ez((e) => setTimeout(e, 50)), kz = /* @__PURE__ */ new Map(), Az = kz.clear.bind(kz);
function jz(e, t = !1) {
	if (!t) return Mz(e);
	let n = kz.get(e);
	return n || (n = Mz(e), kz.set(e, n), Oz.schedule(Az), n);
}
function Mz(e) {
	return _R(e).getComputedStyle(e);
}
function Nz(e, t = jz(e, !0)) {
	return t.position === "fixed" || t.position === "sticky";
}
function Pz(e, t = jz(e, !0)) {
	let n = /(auto|scroll|overlay)/;
	return [
		"overflow",
		"overflowX",
		"overflowY"
	].some((e) => {
		let r = t[e];
		return typeof r == "string" && n.test(r);
	});
}
var Fz = {
	excludeElement: !0,
	escapeShadowDOM: !0
};
function Iz(e, t = Fz) {
	let { limit: n, excludeElement: r, escapeShadowDOM: i } = t, a = /* @__PURE__ */ new Set();
	function o(t) {
		if (n != null && a.size >= n || !t) return a;
		if (vR(t) && t.scrollingElement != null && !a.has(t.scrollingElement)) return a.add(t.scrollingElement), a;
		if (i && jR(t)) return o(t.host);
		if (!yR(t)) return bR(t) ? o(t.parentElement) : a;
		if (a.has(t)) return a;
		let s = jz(t, !0);
		if (r && t === e || Pz(t, s) && a.add(t), Nz(t, s)) {
			let { scrollingElement: e } = t.ownerDocument;
			return e && a.add(e), a;
		}
		return o(t.parentNode);
	}
	return e ? o(e) : a;
}
function Lz(e, t = window.frameElement) {
	let n = {
		x: 0,
		y: 0,
		scaleX: 1,
		scaleY: 1
	};
	if (!e) return n;
	let r = HR(e);
	for (; r;) {
		if (r === t) return n;
		let e = mR(r), { x: i, y: a } = Rz(r, e);
		n.x += e.left, n.y += e.top, n.scaleX *= i, n.scaleY *= a, r = HR(r);
	}
	return n;
}
function Rz(e, t = mR(e)) {
	let n = Math.round(t.width), r = Math.round(t.height);
	if (yR(e)) return {
		x: n / e.offsetWidth,
		y: r / e.offsetHeight
	};
	let i = jz(e, !0);
	return {
		x: (parseFloat(i.width) || n) / n,
		y: (parseFloat(i.height) || r) / r
	};
}
function zz(e) {
	if (!e || e === "none") return null;
	let t = e.split(" "), n = parseFloat(t[0]), r = parseFloat(t[1]);
	return isNaN(n) && isNaN(r) ? null : {
		x: isNaN(n) ? r : n,
		y: isNaN(r) ? n : r
	};
}
function Bz(e) {
	if (!e || e === "none") return null;
	let [t, n, r = "0"] = e.split(" "), i = {
		x: parseFloat(t),
		y: parseFloat(n),
		z: parseInt(r, 10)
	};
	return isNaN(i.x) && isNaN(i.y) ? null : {
		x: isNaN(i.x) ? 0 : i.x,
		y: isNaN(i.y) ? 0 : i.y,
		z: isNaN(i.z) ? 0 : i.z
	};
}
function Vz(e) {
	let { scale: t, transform: n, translate: r } = e, i = zz(t), a = Bz(r), o = Hz(n);
	if (!o && !i && !a) return null;
	let s = {
		x: i?.x ?? 1,
		y: i?.y ?? 1
	}, c = {
		x: a?.x ?? 0,
		y: a?.y ?? 0
	}, l = {
		x: o?.x ?? 0,
		y: o?.y ?? 0,
		scaleX: o?.scaleX ?? 1,
		scaleY: o?.scaleY ?? 1
	};
	return {
		x: c.x + l.x,
		y: c.y + l.y,
		z: a?.z ?? 0,
		scaleX: s.x * l.scaleX,
		scaleY: s.y * l.scaleY
	};
}
function Hz(e) {
	if (e.startsWith("matrix3d(")) {
		let t = e.slice(9, -1).split(/, /);
		return {
			x: +t[12],
			y: +t[13],
			scaleX: +t[0],
			scaleY: +t[5]
		};
	}
	if (e.startsWith("matrix(")) {
		let t = e.slice(7, -1).split(/, /);
		return {
			x: +t[4],
			y: +t[5],
			scaleX: +t[0],
			scaleY: +t[3]
		};
	}
	return null;
}
var Uz = /* @__PURE__ */ ((e) => (e[e.Idle = 0] = "Idle", e[e.Forward = 1] = "Forward", e[e.Reverse = -1] = "Reverse", e))(Uz || {}), Wz = {
	x: .2,
	y: .2
}, Gz = {
	x: 10,
	y: 10
};
function Kz(e, t, n, r = 25, i = Wz, a = Gz) {
	let { x: o, y: s } = t, { rect: c, isTop: l, isBottom: u, isLeft: d, isRight: f } = wz(e), p = Lz(e), m = Vz(jz(e, !0)), h = m !== null && m?.scaleX < 0, g = m !== null && m?.scaleY < 0, _ = new MF(c.left * p.scaleX + p.x, c.top * p.scaleY + p.y, c.width * p.scaleX, c.height * p.scaleY), v = {
		x: 0,
		y: 0
	}, y = {
		x: 0,
		y: 0
	}, b = {
		height: _.height * i.y,
		width: _.width * i.x
	};
	return b.height > 0 && (!l || g && !u) && s <= _.top + b.height && n?.y !== 1 && o >= _.left - a.x && o <= _.right + a.x ? (v.y = g ? 1 : -1, y.y = r * Math.abs((_.top + b.height - s) / b.height)) : b.height > 0 && (!u || g && !l) && s >= _.bottom - b.height && n?.y !== -1 && o >= _.left - a.x && o <= _.right + a.x && (v.y = g ? -1 : 1, y.y = r * Math.abs((_.bottom - b.height - s) / b.height)), b.width > 0 && (!f || h && !d) && o >= _.right - b.width && n?.x !== -1 && s >= _.top - a.y && s <= _.bottom + a.y ? (v.x = h ? -1 : 1, y.x = r * Math.abs((_.right - b.width - o) / b.width)) : b.width > 0 && (!d || h && !f) && o <= _.left + b.width && n?.x !== 1 && s >= _.top - a.y && s <= _.bottom + a.y && (v.x = h ? 1 : -1, y.x = r * Math.abs((_.left + b.width - o) / b.width)), {
		direction: v,
		speed: y
	};
}
function qz(e, { block: t = "nearest", inline: n = "nearest" } = {}) {
	if (!yR(e)) return;
	let r = Iz(e), i = [];
	for (let a of r) {
		if (!yR(a)) continue;
		let { top: r, left: o } = Yz(e, a), s = r, c = o;
		for (let e of i) s -= e.scrollTop, c -= e.scrollLeft;
		if (t !== "none") {
			let n = s < a.scrollTop;
			n !== s + e.offsetHeight > a.scrollTop + a.clientHeight && (a.scrollTop = t === "center" ? s - a.clientHeight / 2 + e.offsetHeight / 2 : n ? s : s + e.offsetHeight - a.clientHeight);
		}
		if (n !== "none") {
			let t = c < a.scrollLeft;
			t !== c + e.offsetWidth > a.scrollLeft + a.clientWidth && (a.scrollLeft = n === "center" ? c - a.clientWidth / 2 + e.offsetWidth / 2 : t ? c : c + e.offsetWidth - a.clientWidth);
		}
		i.push(a);
	}
}
function Jz(e) {
	let t = 0, n = 0, r = e;
	for (; r;) {
		t += r.offsetTop, n += r.offsetLeft;
		let e = r.offsetParent;
		if (!yR(e)) break;
		t += e.clientTop, n += e.clientLeft, r = e;
	}
	return {
		top: t,
		left: n
	};
}
function Yz(e, t) {
	let n = Jz(e), r = Jz(t);
	return {
		top: n.top - r.top - t.clientTop,
		left: n.left - r.left - t.clientLeft
	};
}
function Xz(e, t, n) {
	let { scaleX: r, scaleY: i, x: a, y: o } = t, s = e.left + a + (1 - r) * parseFloat(n), c = e.top + o + (1 - i) * parseFloat(n.slice(n.indexOf(" ") + 1)), l = r ? e.width * r : e.width, u = i ? e.height * i : e.height;
	return {
		width: l,
		height: u,
		top: c,
		right: s + l,
		bottom: c + u,
		left: s
	};
}
function Zz(e, t, n) {
	let { scaleX: r, scaleY: i, x: a, y: o } = t, s = e.left - a - (1 - r) * parseFloat(n), c = e.top - o - (1 - i) * parseFloat(n.slice(n.indexOf(" ") + 1)), l = r ? e.width / r : e.width, u = i ? e.height / i : e.height;
	return {
		width: l,
		height: u,
		top: c,
		right: s + l,
		bottom: c + u,
		left: s
	};
}
function Qz({ element: e, keyframes: t, options: n }) {
	return e.animate(t, n).finished;
}
var $z = new Ez((e) => setTimeout(e, 0)), eB = /* @__PURE__ */ new Map(), tB = eB.clear.bind(eB);
function nB(e) {
	let t = e.ownerDocument, n = eB.get(t);
	if (n) return n;
	n = t.getAnimations(), eB.set(t, n), $z.schedule(tB);
	let r = n.filter((t) => fR(t.effect) && t.effect.target === e);
	return eB.set(e, r), n;
}
function rB(e, t) {
	let n = nB(e).filter((e) => {
		if (fR(e.effect)) {
			let { target: n } = e.effect;
			if ((n && t.isValidTarget?.call(t, n)) ?? !0) return e.effect.getKeyframes().some((e) => {
				for (let n of t.properties) if (e[n]) return !0;
			});
		}
	}).map((e) => {
		let { effect: t, currentTime: n } = e, r = t?.getComputedTiming().duration;
		if (!(e.pending || e.playState === "finished") && typeof r == "number" && typeof n == "number" && n < r) return e.currentTime = r, () => {
			e.currentTime = n;
		};
	});
	if (n.length > 0) return () => n.forEach((e) => e?.());
}
var iB = class extends MF {
	constructor(e, t = {}) {
		let { frameTransform: n = Lz(e), ignoreTransforms: r, getBoundingClientRect: i = mR } = t, a = rB(e, {
			properties: [
				"transform",
				"translate",
				"scale",
				"width",
				"height"
			],
			isValidTarget: (t) => (t !== e || kR()) && t.contains(e)
		}), o = i(e), { top: s, left: c, width: l, height: u } = o, d, f = jz(e), p = Vz(f), m = {
			x: p?.scaleX ?? 1,
			y: p?.scaleY ?? 1
		}, h = aB(e, f);
		a?.(), p && (d = Zz(o, p, f.transformOrigin), (r || h) && (s = d.top, c = d.left, l = d.width, u = d.height));
		let g = {
			width: d?.width ?? l,
			height: d?.height ?? u
		};
		if (h && !r && d) {
			let e = Xz(d, h, f.transformOrigin);
			s = e.top, c = e.left, l = e.width, u = e.height, m.x = h.scaleX, m.y = h.scaleY;
		}
		n && (r || (c *= n.scaleX, l *= n.scaleX, s *= n.scaleY, u *= n.scaleY), c += n.x, s += n.y), super(c, s, l, u), this.scale = m, this.intrinsicWidth = g.width, this.intrinsicHeight = g.height;
	}
};
function aB(e, t) {
	let n = e.getAnimations();
	if (!n.length) return null;
	let r, i, a, o = !1;
	for (let e of n) {
		if (e.playState !== "running") continue;
		let t = fR(e.effect) ? e.effect.getKeyframes() : [], n = t[t.length - 1];
		if (!n) continue;
		let { transform: s, translate: c, scale: l } = n;
		typeof s == "string" && s && (r = s, o = !0), typeof c == "string" && c && (i = c, o = !0), typeof l == "string" && l && (a = l, o = !0);
	}
	return o ? Vz({
		transform: r ?? t.transform,
		translate: i ?? t.translate,
		scale: a ?? t.scale
	}) : null;
}
function oB(e) {
	return "style" in e && typeof e.style == "object" && e.style !== null && "setProperty" in e.style && "removeProperty" in e.style && typeof e.style.setProperty == "function" && typeof e.style.removeProperty == "function";
}
var sB = class {
	constructor(e) {
		this.element = e, this.initial = /* @__PURE__ */ new Map();
	}
	set(e, t = "") {
		let { element: n } = this;
		if (oB(n)) for (let [r, i] of Object.entries(e)) {
			let e = `${t}${r}`;
			this.initial.has(e) || this.initial.set(e, n.style.getPropertyValue(e)), n.style.setProperty(e, typeof i == "string" ? i : `${i}px`);
		}
	}
	remove(e, t = "") {
		let { element: n } = this;
		if (oB(n)) for (let r of e) {
			let e = `${t}${r}`;
			n.style.removeProperty(e);
		}
	}
	reset() {
		let { element: e } = this;
		if (oB(e)) {
			for (let [t, n] of this.initial) e.style.setProperty(t, n);
			e.getAttribute("style") === "" && e.removeAttribute("style");
		}
	}
};
function cB(e) {
	return e ? e instanceof _R(e).Element || gR(e) && e.nodeType === Node.ELEMENT_NODE : !1;
}
function lB(e) {
	if (!e) return !1;
	let { KeyboardEvent: t } = _R(e.target);
	return e instanceof t;
}
function uB(e) {
	if (!e) return !1;
	let { PointerEvent: t } = _R(e.target);
	return e instanceof t;
}
function dB(e) {
	if (!cB(e)) return !1;
	let { tagName: t } = e;
	return t === "INPUT" || t === "TEXTAREA" || fB(e);
}
function fB(e) {
	return e.hasAttribute("contenteditable") && e.getAttribute("contenteditable") !== "false";
}
var pB = {};
function mB(e) {
	let t = pB[e] == null ? 0 : pB[e] + 1;
	return pB[e] = t, `${e}-${t}`;
}
//#endregion
//#region ../../node_modules/.pnpm/@dnd-kit+collision@0.5.0/node_modules/@dnd-kit/collision/dist/index.js
var hB = ({ dragOperation: e, droppable: t }) => {
	let n = e.position.current;
	if (!n) return null;
	let { id: r } = t;
	return t.shape && t.shape.containsPoint(n) ? {
		id: r,
		value: 1 / jF.distance(t.shape.center, n),
		type: bL.PointerIntersection,
		priority: yL.High
	} : null;
}, gB = ({ dragOperation: e, droppable: t }) => {
	let { shape: n } = e;
	if (!t.shape || !n?.current) return null;
	let r = n.current.intersectionArea(t.shape);
	if (r) {
		let { position: i } = e, a = jF.distance(t.shape.center, i.current), o = r / (n.current.area + t.shape.area - r) / a;
		return {
			id: t.id,
			value: o,
			type: bL.ShapeIntersection,
			priority: yL.Normal
		};
	}
	return null;
}, _B = (e) => hB(e) ?? gB(e), vB = Object.create, yB = Object.defineProperty, bB = Object.defineProperties, xB = Object.getOwnPropertyDescriptor, SB = Object.getOwnPropertyDescriptors, CB = Object.getOwnPropertySymbols, wB = Object.prototype.hasOwnProperty, TB = Object.prototype.propertyIsEnumerable, EB = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), DB = (e) => {
	throw TypeError(e);
}, OB = (e, t, n) => t in e ? yB(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, kB = (e, t) => {
	for (var n in t ||= {}) wB.call(t, n) && OB(e, n, t[n]);
	if (CB) for (var n of CB(t)) TB.call(t, n) && OB(e, n, t[n]);
	return e;
}, AB = (e, t) => bB(e, SB(t)), jB = (e, t) => yB(e, "name", {
	value: t,
	configurable: !0
}), MB = (e, t) => {
	var n = {};
	for (var r in e) wB.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && CB) for (var r of CB(e)) t.indexOf(r) < 0 && TB.call(e, r) && (n[r] = e[r]);
	return n;
}, NB = (e) => [
	,
	,
	,
	vB(e?.[EB("metadata")] ?? null)
], PB = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], FB = (e) => e !== void 0 && typeof e != "function" ? DB("Function expected") : e, IB = (e, t, n, r, i) => ({
	kind: PB[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? DB("Already initialized") : i.push(FB(e || null))
}), LB = (e, t) => OB(t, EB("metadata"), e[3]), RB = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, zB = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = PB[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && xB(d < 4 ? i : {
		get [n]() {
			return HB(this, a);
		},
		set [n](e) {
			return WB(this, a, e);
		}
	}, n));
	d ? p && d < 4 && jB(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : jB(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = IB(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => VB(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? HB : GB)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => WB(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? FB(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? DB("Object expected") : (FB(o = s.get) && (v.get = o), FB(o = s.set) && (v.set = o), FB(o = s.init) && g.unshift(o));
	return d || LB(e, i), v && yB(i, n, v), p ? d ^ 4 ? a : v : i;
}, BB = (e, t, n) => t.has(e) || DB("Cannot " + n), VB = (e, t) => Object(t) === t ? e.has(t) : DB("Cannot use the \"in\" operator on this value"), HB = (e, t, n) => (BB(e, t, "read from private field"), n ? n.call(e) : t.get(e)), UB = (e, t, n) => t.has(e) ? DB("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), WB = (e, t, n, r) => (BB(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), GB = (e, t, n) => (BB(e, t, "access private method"), n), KB = {
	role: "button",
	roleDescription: "draggable"
}, qB = "dnd-kit-description", JB = "dnd-kit-announcement", YB = { draggable: "To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel." }, XB = {
	dragstart({ operation: { source: e } }) {
		if (e) return `Picked up draggable item ${e.id}.`;
	},
	dragover({ operation: { source: e, target: t } }) {
		if (!(!e || e.id === t?.id)) return t ? `Draggable item ${e.id} was moved over droppable target ${t.id}.` : `Draggable item ${e.id} is no longer over a droppable target.`;
	},
	dragend({ operation: { source: e, target: t }, canceled: n }) {
		if (e) return n ? `Dragging was cancelled. Draggable item ${e.id} was dropped.` : t ? `Draggable item ${e.id} was dropped over droppable target ${t.id}` : `Draggable item ${e.id} was dropped.`;
	}
};
function ZB(e) {
	let t = e.tagName.toLowerCase();
	return [
		"input",
		"select",
		"textarea",
		"a",
		"button"
	].includes(t);
}
function QB(e, t) {
	let n = document.createElement("div");
	return n.id = e, n.style.setProperty("display", "none"), n.textContent = t, n;
}
function $B(e) {
	let t = document.createElement("div");
	return t.id = e, t.setAttribute("role", "status"), t.setAttribute("aria-live", "polite"), t.setAttribute("aria-atomic", "true"), t.style.setProperty("position", "fixed"), t.style.setProperty("width", "1px"), t.style.setProperty("height", "1px"), t.style.setProperty("margin", "-1px"), t.style.setProperty("border", "0"), t.style.setProperty("padding", "0"), t.style.setProperty("overflow", "hidden"), t.style.setProperty("clip", "rect(0 0 0 0)"), t.style.setProperty("clip-path", "inset(100%)"), t.style.setProperty("white-space", "nowrap"), t;
}
var eV = ["dragover", "dragmove"], tV = class extends xI {
	constructor(e, t) {
		super(e);
		let { id: n, idPrefix: { description: r = qB, announcement: i = JB } = {}, announcements: a = XB, screenReaderInstructions: o = YB, debounce: s = 500 } = t ?? {}, c = n ? `${r}-${n}` : mB(r), l = n ? `${i}-${n}` : mB(i), u, d, f, p, m = (e = p) => {
			!f || !e || f?.nodeValue !== e && (f.nodeValue = e);
		}, h = () => Dz.schedule(m), g = nV(h, s), _ = Object.entries(a).map(([e, t]) => this.manager.monitor.addEventListener(e, (n, r) => {
			let i = f;
			if (!i) return;
			let a = t?.(n, r);
			a && i.nodeValue !== a && (p = a, eV.includes(e) ? g() : (h(), g.cancel()));
		})), v = () => {
			let e = [];
			u?.isConnected || (u = QB(c, o.draggable), e.push(u)), d?.isConnected || (d = $B(l), f = document.createTextNode(""), d.appendChild(f), e.push(d)), e.length > 0 && document.body.append(...e);
		}, y = /* @__PURE__ */ new Set();
		function b() {
			for (let e of y) e();
		}
		this.registerEffect(() => {
			y.clear();
			for (let e of this.manager.registry.draggables.value) {
				let t = e.handle ?? e.element;
				if (t) {
					(!u || !d) && y.add(v), (!ZB(t) || kR()) && !t.hasAttribute("tabindex") && y.add(() => t.setAttribute("tabindex", "0")), !t.hasAttribute("role") && t.tagName.toLowerCase() !== "button" && y.add(() => t.setAttribute("role", KB.role)), t.hasAttribute("aria-roledescription") || y.add(() => t.setAttribute("aria-roledescription", KB.roleDescription)), t.hasAttribute("aria-describedby") || y.add(() => t.setAttribute("aria-describedby", c));
					for (let n of ["aria-pressed", "aria-grabbed"]) {
						let r = String(e.isDragging);
						t.getAttribute(n) !== r && y.add(() => t.setAttribute(n, r));
					}
					let n = String(e.disabled);
					t.getAttribute("aria-disabled") !== n && y.add(() => t.setAttribute("aria-disabled", n));
				}
			}
			y.size > 0 && Dz.schedule(b);
		}), this.destroy = () => {
			super.destroy(), u?.remove(), d?.remove(), _.forEach((e) => e());
		};
	}
};
function nV(e, t) {
	let n, r = () => {
		clearTimeout(n), n = setTimeout(e, t);
	};
	return r.cancel = () => clearTimeout(n), r;
}
var rV = /* @__PURE__ */ new Map(), iV, aV, oV, sV, cV, lV, uV, dV, fV, pV, mV, hV, gV, _V = class extends (cV = SI, sV = [Y], oV = [FP], aV = [FP], iV = [FP], cV) {
	constructor(e, t) {
		super(e, t), RB(uV, 5, this), UB(this, fV), UB(this, lV, /* @__PURE__ */ new Set()), UB(this, dV, RB(uV, 8, this, /* @__PURE__ */ new Set())), RB(uV, 11, this), this.registerEffect(GB(this, fV, pV));
	}
	register(e) {
		return HB(this, lV).add(e), () => {
			HB(this, lV).delete(e);
		};
	}
	addRoot(e) {
		return J(() => {
			let t = new Set(this.additionalRoots);
			t.add(e), this.additionalRoots = t;
		}), () => {
			J(() => {
				let t = new Set(this.additionalRoots);
				t.delete(e), this.additionalRoots = t;
			});
		};
	}
	get sourceRoot() {
		let { source: e } = this.manager.dragOperation;
		return MR(e?.element ?? null);
	}
	get targetRoot() {
		let { target: e } = this.manager.dragOperation;
		return MR(e?.element ?? null);
	}
	get roots() {
		let { status: e } = this.manager.dragOperation;
		if (e.initializing || e.initialized) {
			let e = [this.sourceRoot, this.targetRoot].filter((e) => e != null);
			return /* @__PURE__ */ new Set([...e, ...this.additionalRoots]);
		}
		return /* @__PURE__ */ new Set();
	}
};
uV = NB(cV), lV = /* @__PURE__ */ new WeakMap(), dV = /* @__PURE__ */ new WeakMap(), fV = /* @__PURE__ */ new WeakSet(), pV = function() {
	let { roots: e } = this, t = [];
	for (let n of e) for (let e of HB(this, lV)) t.push(GB(this, fV, mV).call(this, n, e));
	return () => {
		for (let e of t) e();
	};
}, mV = function(e, t) {
	let n = rV.get(e);
	n || (n = /* @__PURE__ */ new Map(), rV.set(e, n));
	let r = n.get(t);
	if (!r) {
		let i = vR(e) ? GB(this, fV, hV).call(this, e, n, t) : GB(this, fV, gV).call(this, e, n, t);
		if (!i) return () => {};
		r = i, n.set(t, r);
	}
	r.refCount++;
	let i = !1;
	return () => {
		i || (i = !0, r.refCount--, r.refCount === 0 && r.cleanup());
	};
}, hV = function(e, t, n) {
	let r = e.createElement("style"), { nonce: i } = this.options ?? {};
	i && r.setAttribute("nonce", i), r.textContent = n, e.head.prepend(r);
	let a = new MutationObserver((t) => {
		for (let n of t) for (let t of Array.from(n.removedNodes)) if (t === r) {
			e.head.prepend(r);
			return;
		}
	});
	return a.observe(e.head, { childList: !0 }), {
		refCount: 0,
		cleanup: () => {
			a.disconnect(), r.remove(), t.delete(n), t.size === 0 && rV.delete(e);
		}
	};
}, gV = function(e, t, n) {
	!("adoptedStyleSheets" in e && Array.isArray(e.adoptedStyleSheets)) && process.env.NODE_ENV !== "production" && console.error("Cannot inject styles: This browser doesn't support adoptedStyleSheets");
	let { CSSStyleSheet: r } = e.ownerDocument.defaultView ?? {};
	if (!r) return process.env.NODE_ENV !== "production" && console.error("Cannot inject styles: CSSStyleSheet constructor not available"), null;
	let i = new r();
	return i.replaceSync(n), e.adoptedStyleSheets.push(i), {
		refCount: 0,
		cleanup: () => {
			if (jR(e) && e.host?.isConnected) {
				let t = e.adoptedStyleSheets.indexOf(i);
				t !== -1 && e.adoptedStyleSheets.splice(t, 1);
			}
			t.delete(n), t.size === 0 && rV.delete(e);
		}
	};
}, zB(uV, 4, "additionalRoots", sV, _V, dV), zB(uV, 2, "sourceRoot", oV, _V), zB(uV, 2, "targetRoot", aV, _V), zB(uV, 2, "roots", iV, _V), LB(uV, _V), _V.configure = hI(_V);
var vV = _V, yV = class extends xI {
	constructor(e, t) {
		super(e, t), this.manager = e;
		let { cursor: n = "grabbing" } = t ?? {}, r = e.registry.plugins.get(vV)?.register(`* { cursor: ${n} !important; }`);
		if (r) {
			let e = this.destroy.bind(this);
			this.destroy = () => {
				r(), e();
			};
		}
	}
}, bV = "data-dnd-", xV = `${bV}dropping`, SV = "--dnd-", CV = `${bV}dragging`, wV = `${bV}placeholder`, TV = [
	CV,
	wV,
	"popover",
	"aria-pressed",
	"aria-grabbing"
], EV = ["view-transition-name"], DV = `
  :is(:root,:host) [${CV}] {
    position: fixed !important;
    pointer-events: none !important;
    touch-action: none;
    z-index: calc(infinity);
    will-change: translate;
    top: var(${SV}top, 0px) !important;
    left: var(${SV}left, 0px) !important;
    right: unset !important;
    bottom: unset !important;
    width: var(${SV}width, auto);
    max-width: var(${SV}width, auto);
    height: var(${SV}height, auto);
    max-height: var(${SV}height, auto);
    transform: var(${SV}transform, none) !important;
    transition: var(${SV}transition) !important;
  }

  :is(:root,:host) [${wV}] {
    transition: none;
  }

  :is(:root,:host) [${wV}='hidden'] {
    visibility: hidden;
  }

  [${CV}] * {
    pointer-events: none !important;
  }

  [${CV}]:not([${xV}]) {
    translate: var(${SV}translate) !important;
  }

  [${CV}][style*='${SV}scale'] {
    scale: var(${SV}scale) !important;
    transform-origin: var(${SV}transform-origin) !important;
  }

  @layer dnd-kit {
    :where([${CV}][popover]) {
      overflow: visible;
      background: unset;
      border: unset;
      margin: unset;
      padding: unset;
      color: inherit;

      &:is(input, button) {
        border: revert;
        background: revert;
      }
    }
  }
  [${CV}]::backdrop, [${bV}overlay]:not([${CV}]) {
    display: none;
    visibility: hidden;
  }
`.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
function OV(e, t = "hidden") {
	return J(() => {
		let { element: n, manager: r } = e;
		if (!n || !r) return;
		let i = kV(n, r.registry.droppables), a = [], o = PR(n), { remove: s } = o;
		return AV(i, o, a), jV(o, t), o.remove = () => {
			a.forEach((e) => e()), s.call(o);
		}, o;
	});
}
function kV(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of t) if (r.element && (e === r.element || e.contains(r.element))) {
		let e = `${bV}${mB("dom-id")}`;
		r.element.setAttribute(e, ""), n.set(r, e);
	}
	return n;
}
function AV(e, t, n) {
	for (let [r, i] of e) {
		if (!r.element) continue;
		let e = `[${i}]`, a = t.matches(e) ? t : t.querySelector(e);
		if (r.element.removeAttribute(i), !a) continue;
		let o = r.element;
		r.proxy = a, a.removeAttribute(i), zR.set(o, a), n.push(() => {
			zR.delete(o), r.proxy = void 0;
		});
	}
}
function jV(e, t = "hidden") {
	e.setAttribute("inert", "true"), e.setAttribute("tab-index", "-1"), e.setAttribute("aria-hidden", "true"), e.setAttribute(wV, t);
}
function MV(e, t) {
	return e === t || HR(e) === HR(t);
}
function NV(e) {
	let { target: t } = e;
	"newState" in e && e.newState === "closed" && cB(t) && t.hasAttribute("popover") && requestAnimationFrame(() => Sz(t));
}
function PV(e) {
	return e.tagName === "TR";
}
function FV(e, t, n) {
	let r = new MutationObserver((r) => {
		let i = !1;
		for (let n of r) {
			if (n.target !== e) {
				i = !0;
				continue;
			}
			if (n.type !== "attributes") continue;
			let r = n.attributeName;
			if (r.startsWith("aria-") || TV.includes(r)) continue;
			let a = e.getAttribute(r);
			if (r === "style") {
				if (oB(e) && oB(t)) {
					let n = e.style;
					for (let e of Array.from(t.style)) n.getPropertyValue(e) === "" && t.style.removeProperty(e);
					for (let e of Array.from(n)) {
						if (EV.includes(e) || e.startsWith(SV)) continue;
						let r = n.getPropertyValue(e);
						t.style.setProperty(e, r);
					}
				}
			} else a === null ? t.removeAttribute(r) : t.setAttribute(r, a);
		}
		i && n && t.replaceChildren(...e.cloneNode(!0).childNodes);
	});
	return r.observe(e, {
		attributes: !0,
		subtree: !0,
		childList: !0
	}), r;
}
function IV(e, t, n) {
	let r = new MutationObserver((r) => {
		for (let i of r) if (i.addedNodes.length !== 0) for (let r of Array.from(i.addedNodes)) {
			if (r.contains(e) && e.nextElementSibling !== t) {
				e.insertAdjacentElement("afterend", t), Sz(n);
				return;
			}
			if (r.contains(t) && t.previousElementSibling !== e) {
				t.insertAdjacentElement("beforebegin", e), Sz(n);
				return;
			}
		}
		e.isConnected && t.isConnected && e.nextElementSibling !== t && (e.insertAdjacentElement("afterend", t), Sz(n));
	});
	return r.observe(e.ownerDocument.body, {
		childList: !0,
		subtree: !0
	}), r;
}
function LV(e) {
	return new ResizeObserver(() => {
		var t;
		let n = new iB(e.placeholder, {
			frameTransform: e.frameTransform,
			ignoreTransforms: !0
		}), r = e.transformOrigin ?? {
			x: 1,
			y: 1
		}, i = (e.width - n.width) * r.x + e.delta.x, a = (e.height - n.height) * r.y + e.delta.y, o = AR();
		if (e.styles.set({
			width: n.width - e.widthOffset,
			height: n.height - e.heightOffset,
			top: e.top + a + o.y,
			left: e.left + i + o.x
		}, SV), (t = e.getElementMutationObserver()) == null || t.takeRecords(), PV(e.element) && PV(e.placeholder)) {
			let t = Array.from(e.element.cells), n = Array.from(e.placeholder.cells);
			e.getSavedCellWidths() || e.setSavedCellWidths(t.map((e) => e.style.width));
			for (let [e, r] of t.entries()) {
				let t = n[e];
				r.style.width = `${t.getBoundingClientRect().width}px`;
			}
		}
		let s = e.getTranslate() ?? {
			x: 0,
			y: 0
		}, c = e.left + i + o.x + s.x, l = e.top + a + o.y + s.y, u = n.width - e.widthOffset, d = n.height - e.heightOffset, f = e.frameTransform;
		e.dragOperation.shape = new MF(c * f.scaleX + f.x, l * f.scaleY + f.y, u * f.scaleX, d * f.scaleY);
	});
}
var RV = 250, zV = "ease";
function BV(e) {
	var t;
	let { animation: n } = e;
	if (typeof n == "function") {
		let t = n({
			source: e.source,
			element: e.element,
			feedbackElement: e.feedbackElement,
			placeholder: e.placeholder,
			translate: e.translate,
			moved: e.moved
		});
		Promise.resolve(t).then(() => {
			e.cleanup(), requestAnimationFrame(e.restoreFocus);
		});
		return;
	}
	let { duration: r = RV, easing: i = zV } = n ?? {};
	Sz(e.feedbackElement);
	let [, a] = pR(e.feedbackElement, (e) => "translate" in e) ?? [];
	a?.pause();
	let o = e.placeholder ?? e.element, s = { frameTransform: MV(e.feedbackElement, o) ? null : void 0 }, c = new iB(e.feedbackElement, s), l = Bz(jz(e.feedbackElement).translate) ?? e.translate, u = new iB(o, s), d = MF.delta(c, u, e.alignment), f = {
		x: l.x - d.x,
		y: l.y - d.y
	}, p = Math.round(c.intrinsicHeight) === Math.round(u.intrinsicHeight) ? {} : {
		minHeight: [`${c.intrinsicHeight}px`, `${u.intrinsicHeight}px`],
		maxHeight: [`${c.intrinsicHeight}px`, `${u.intrinsicHeight}px`]
	}, m = Math.round(c.intrinsicWidth) === Math.round(u.intrinsicWidth) ? {} : {
		minWidth: [`${c.intrinsicWidth}px`, `${u.intrinsicWidth}px`],
		maxWidth: [`${c.intrinsicWidth}px`, `${u.intrinsicWidth}px`]
	};
	e.styles.set({ transition: e.transition }, SV), e.feedbackElement.setAttribute(xV, ""), (t = e.getElementMutationObserver()) == null || t.takeRecords(), Qz({
		element: e.feedbackElement,
		keyframes: AB(kB(kB({}, p), m), { translate: [`${l.x}px ${l.y}px 0`, `${f.x}px ${f.y}px 0`] }),
		options: {
			duration: NR(_R(e.feedbackElement)) ? 0 : e.moved || e.feedbackElement !== e.element ? r : 0,
			easing: i
		}
	}).then(() => {
		e.feedbackElement.removeAttribute(xV), a?.finish(), e.cleanup(), requestAnimationFrame(e.restoreFocus);
	});
}
var VV, HV, UV, WV, GV, KV, qV, JV = class extends (HV = xI, VV = [Y], HV) {
	constructor(e, t) {
		super(e, t), UB(this, GV), UB(this, WV, RB(UV, 8, this)), RB(UV, 11, this), this.state = {
			initial: {},
			current: {}
		};
		let n = e.registry.plugins.get(vV), r = n?.register(DV);
		if (r) {
			let e = this.destroy.bind(this);
			this.destroy = () => {
				r(), e();
			};
		}
		this.registerEffect(GB(this, GV, KV).bind(this, n)), this.registerEffect(GB(this, GV, qV));
	}
};
UV = NB(HV), WV = /* @__PURE__ */ new WeakMap(), GV = /* @__PURE__ */ new WeakSet(), KV = function(e) {
	let { overlay: t } = this;
	if (!t || !e) return;
	let n = MR(t);
	if (n) return e.addRoot(n);
}, qV = function() {
	let { state: e, manager: t, options: n } = this, { dragOperation: r } = t, { position: i, source: a, status: o } = r;
	if (o.idle) {
		e.current = {}, e.initial = {};
		return;
	}
	if (!a) return;
	let { element: s } = a, c = a.pluginConfig(JV), l = c?.feedback ?? n?.feedback ?? "default", u = typeof l == "function" ? l(a, t) : l;
	if (!s || u === "none" || !o.initialized || o.initializing) return;
	let { initial: d } = e, f = this.overlay ?? s, p = Lz(f), m = Lz(s), h = !MV(s, f), g = new iB(s, {
		frameTransform: h ? m : null,
		ignoreTransforms: !h
	}), _ = {
		x: m.scaleX / p.scaleX,
		y: m.scaleY / p.scaleY
	}, { width: v, height: y, top: b, left: x } = g;
	h && (v /= _.x, y /= _.y);
	let S = new sB(f), C = jz(s), { transition: w, translate: T, boxSizing: E, paddingBlockStart: ee, paddingBlockEnd: D, paddingInlineStart: te, paddingInlineEnd: O, borderInlineStartWidth: k, borderInlineEndWidth: A, borderBlockStartWidth: ne, borderBlockEndWidth: re } = C, j = w.split(",").filter((e) => !/^\s*(transform|translate|scale)\b/.test(e)).join(","), ie = Vz(C), ae = C.transform, oe = u === "clone", M = E === "content-box", se = M ? parseInt(te) + parseInt(O) + parseInt(k) + parseInt(A) : 0, ce = M ? parseInt(ee) + parseInt(D) + parseInt(ne) + parseInt(re) : 0, le = u !== "move" && !this.overlay ? OV(a, oe ? "clone" : "hidden") : null, ue = J(() => lB(t.dragOperation.activatorEvent));
	if (!d.translate) {
		if (this.overlay && ie) d.translate = {
			x: ie.x,
			y: ie.y
		};
		else if (T !== "none") {
			let e = Bz(T);
			e && (d.translate = e);
		}
	}
	if (!d.transformOrigin) {
		let e = J(() => i.current), t = x + (ie?.x ?? 0), n = b + (ie?.y ?? 0);
		d.transformOrigin = {
			x: (e.x - t * p.scaleX - p.x) / (v * p.scaleX),
			y: (e.y - n * p.scaleY - p.y) / (y * p.scaleY)
		};
	}
	let { transformOrigin: N } = d, de = b * p.scaleY + p.y, fe = x * p.scaleX + p.x;
	if (!d.coordinates && (d.coordinates = {
		x: fe,
		y: de
	}, _.x !== 1 || _.y !== 1)) {
		let { scaleX: e, scaleY: t } = m, { x: n, y: r } = N;
		d.coordinates.x += (v * e - v) * n, d.coordinates.y += (y * t - y) * r;
	}
	d.dimensions ||= {
		width: v,
		height: y
	}, d.frameTransform ||= p;
	let pe = {
		x: d.coordinates.x - fe,
		y: d.coordinates.y - de
	}, me = {
		width: (d.dimensions.width * d.frameTransform.scaleX - v * p.scaleX) * N.x,
		height: (d.dimensions.height * d.frameTransform.scaleY - y * p.scaleY) * N.y
	}, he = {
		x: pe.x / p.scaleX + me.width,
		y: pe.y / p.scaleY + me.height
	}, ge = {
		left: x + he.x,
		top: b + he.y
	};
	f.setAttribute(CV, "true");
	let _e = J(() => r.transform), P = d.translate ?? {
		x: 0,
		y: 0
	}, ve = _e.x * p.scaleX + P.x, ye = _e.y * p.scaleY + P.y, be = AR();
	S.set({
		width: v - se,
		height: y - ce,
		top: ge.top + be.y,
		left: ge.left + be.x,
		translate: `${ve}px ${ye}px 0`,
		transform: this.overlay ? "none" : ae,
		transition: j ? `${j}, translate 0ms linear` : "translate 0ms linear",
		scale: h ? `${_.x} ${_.y}` : "",
		"transform-origin": `${N.x * 100}% ${N.y * 100}%`
	}, SV), le && (s.insertAdjacentElement("afterend", le), n?.rootElement && (typeof n.rootElement == "function" ? n.rootElement(a) : n.rootElement).appendChild(s)), xz(f) && (f.hasAttribute("popover") || f.setAttribute("popover", "manual"), Sz(f), f.addEventListener("beforetoggle", NV));
	let F, xe, Se, Ce = LV({
		placeholder: le,
		element: s,
		feedbackElement: f,
		frameTransform: p,
		transformOrigin: N,
		width: v,
		height: y,
		top: b,
		left: x,
		widthOffset: se,
		heightOffset: ce,
		delta: he,
		styles: S,
		dragOperation: r,
		getTranslate: () => e.current.translate,
		getElementMutationObserver: () => F,
		getSavedCellWidths: () => Se,
		setSavedCellWidths: (e) => {
			Se = e;
		}
	}), we = new iB(f);
	J(() => r.shape = we);
	let Te = _R(f), Ee = (e) => {
		this.manager.actions.stop({ event: e });
	}, De = NR(Te);
	ue && Te.addEventListener("resize", Ee), J(() => a.status) === "idle" && requestAnimationFrame(() => a.status = "dragging"), le && (Ce.observe(le), F = FV(s, le, oe), xe = IV(s, le, f));
	let Oe = t.dragOperation.source?.id, ke = () => {
		if (!ue || Oe == null) return;
		let e = t.registry.draggables.get(Oe), n = e?.handle ?? e?.element;
		yR(n) && n.focus();
	}, Ae = () => {
		F?.disconnect(), xe?.disconnect(), Ce.disconnect(), Te.removeEventListener("resize", Ee), xz(f) && (f.removeEventListener("beforetoggle", NV), f.removeAttribute("popover")), f.removeAttribute(CV), S.reset();
		let t = () => {
			if (Se && PV(s)) {
				let e = Array.from(s.cells);
				for (let [t, n] of e.entries()) n.style.width = Se[t] ?? "";
			}
			a.status = "idle";
			let t = e.current.translate != null, n = r.status.dragging;
			le && (!n && t || le.parentElement !== f.parentElement) && f.isConnected && le.replaceWith(f), le?.remove();
		};
		f === this.overlay ? setTimeout(t, 0) : t();
	}, je = n?.dropAnimation, Me = this, Ne = LP(() => {
		let { transform: t, status: i } = r;
		if (!(!t.x && !t.y && !e.current.translate) && i.dragging) {
			let i = d.translate ?? {
				x: 0,
				y: 0
			}, a = {
				x: t.x / p.scaleX + i.x,
				y: t.y / p.scaleY + i.y
			}, o = e.current.translate, s = J(() => r.modifiers), c = J(() => r.shape?.current), l = n?.keyboardTransition, u = ue && !De && l !== null ? `${l?.duration ?? 250}ms ${l?.easing ?? "cubic-bezier(0.25, 1, 0.5, 1)"}` : "0ms linear";
			if (S.set({
				transition: j ? `${j}, translate ${u}` : `translate ${u}`,
				translate: `${a.x}px ${a.y}px 0`
			}, SV), F?.takeRecords(), c && c !== we && o && !s.length) {
				let e = jF.delta(a, o);
				r.shape = MF.from(c.boundingRectangle).translate(e.x * p.scaleX, e.y * p.scaleY);
			} else r.shape = new iB(f);
			e.current.translate = a;
		}
	}, function() {
		if (r.status.dropped) {
			this.dispose(), a.status = "dropping";
			let n = c?.dropAnimation === void 0 ? Me.dropAnimation === void 0 ? je : Me.dropAnimation : c.dropAnimation, r = e.current.translate, i = r != null;
			if (!r && s !== f && (r = {
				x: 0,
				y: 0
			}), !r || n === null) {
				Ae();
				return;
			}
			t.renderer.rendering.then(() => {
				BV({
					source: a,
					element: s,
					feedbackElement: f,
					placeholder: le,
					translate: r,
					moved: i,
					transition: w,
					alignment: a.alignment,
					styles: S,
					animation: n ?? void 0,
					getElementMutationObserver: () => F,
					cleanup: Ae,
					restoreFocus: ke
				});
			});
		}
	});
	return () => {
		Ae(), Ne();
	};
}, zB(UV, 4, "overlay", VV, JV, WV), LB(UV, JV), JV.configure = hI(JV);
var YV = JV, XV = !0, ZV = !1, QV, $V, eH, tH = (eH = [Y], Uz.Forward), nH, rH, iH;
$V = (QV = [Y], Uz.Reverse);
var aH = class {
	constructor() {
		UB(this, rH, RB(nH, 8, this, XV)), RB(nH, 11, this), UB(this, iH, RB(nH, 12, this, XV)), RB(nH, 15, this);
	}
	isLocked(e) {
		return e === Uz.Idle ? !1 : e == null ? this[Uz.Forward] === XV && this[Uz.Reverse] === XV : this[e] === XV;
	}
	unlock(e) {
		e !== Uz.Idle && (this[e] = ZV);
	}
};
nH = NB(null), rH = /* @__PURE__ */ new WeakMap(), iH = /* @__PURE__ */ new WeakMap(), zB(nH, 4, tH, eH, aH, rH), zB(nH, 4, $V, QV, aH, iH), LB(nH, aH);
var oH = [Uz.Forward, Uz.Reverse], sH = class {
	constructor() {
		this.x = new aH(), this.y = new aH();
	}
	isLocked() {
		return this.x.isLocked() && this.y.isLocked();
	}
}, cH = class extends xI {
	constructor(e) {
		super(e);
		let t = YN(new sH()), n = null;
		this.signal = t, aP(() => {
			let { status: r } = e.dragOperation;
			if (!r.initialized) {
				n = null, t.value = new sH();
				return;
			}
			let { delta: i } = e.dragOperation.position;
			if (n) {
				let e = {
					x: lH(i.x, n.x),
					y: lH(i.y, n.y)
				}, r = t.peek();
				LN(() => {
					for (let t of HF) for (let n of oH) e[t] === n && r[t].unlock(n);
					t.value = r;
				});
			}
			n = i;
		});
	}
	get current() {
		return this.signal.peek();
	}
};
function lH(e, t) {
	return Math.sign(e - t);
}
var uH, dH, fH, pH, mH, hH, gH = class extends (dH = SI, uH = [Y], dH) {
	constructor(e) {
		super(e), UB(this, pH, RB(fH, 8, this, !1)), RB(fH, 11, this), UB(this, mH), UB(this, hH, () => {
			if (!HB(this, mH)) return;
			let { element: e, by: t } = HB(this, mH);
			t.y && (e.scrollTop += t.y), t.x && (e.scrollLeft += t.x);
		}), this.scroll = (e, t) => {
			if (this.disabled) return !1;
			let n = this.getScrollableElements();
			if (!n) return WB(this, mH, void 0), !1;
			let { position: r } = this.manager.dragOperation, i = r?.current;
			if (i) {
				let { by: r } = e ?? {}, a = r ? {
					x: _H(r.x),
					y: _H(r.y)
				} : void 0, o = a ? void 0 : this.scrollIntentTracker.current;
				if (o?.isLocked()) return !1;
				for (let e of n) {
					let n = Tz(e, r);
					if (n.x || n.y) {
						let { speed: n, direction: s } = Kz(e, i, a, t?.acceleration, t?.threshold);
						if (o) for (let e of HF) o[e].isLocked(s[e]) && (n[e] = 0, s[e] = 0);
						if (s.x || s.y) {
							let { x: t, y: i } = r ?? s, a = t * n.x, o = i * n.y;
							if (a || o) {
								let t = HB(this, mH)?.by;
								if (this.autoScrolling && t && (t.x && !a || t.y && !o)) continue;
								return WB(this, mH, {
									element: e,
									by: {
										x: a,
										y: o
									}
								}), Dz.schedule(HB(this, hH)), !0;
							}
						}
					}
				}
			}
			return WB(this, mH, void 0), !1;
		};
		let t = null, n = null, r = NP(() => {
			let { position: n, source: r } = e.dragOperation;
			if (!n) return null;
			let i = LR(MR(r?.element), n.current);
			return i && (t = i), i ?? t;
		}), i = NP(() => {
			let t = r.value, { documentElement: i } = xR(t);
			if (!t || t === i) {
				let { target: t } = e.dragOperation, r = t?.element;
				if (r) {
					let e = Iz(r, { excludeElement: !1 });
					return n = e, e;
				}
			}
			if (t) {
				let e = Iz(t, { excludeElement: !1 });
				return this.autoScrolling && n && e.size < n?.size ? n : (n = e, e);
			}
			return n = null, null;
		}, PP);
		this.getScrollableElements = () => i.value, this.scrollIntentTracker = new cH(e), this.destroy = e.monitor.addEventListener("dragmove", (t) => {
			this.disabled || t.defaultPrevented || !lB(e.dragOperation.activatorEvent) || !t.by || this.scroll({ by: t.by }) && t.preventDefault();
		});
	}
};
fH = NB(dH), pH = /* @__PURE__ */ new WeakMap(), mH = /* @__PURE__ */ new WeakMap(), hH = /* @__PURE__ */ new WeakMap(), zB(fH, 4, "autoScrolling", uH, gH, pH), LB(fH, gH);
function _H(e) {
	return e > 0 ? Uz.Forward : e < 0 ? Uz.Reverse : Uz.Idle;
}
var vH = new class {
	constructor(e) {
		this.scheduler = e, this.pending = !1, this.tasks = /* @__PURE__ */ new Set(), this.resolvers = /* @__PURE__ */ new Set(), this.flush = () => {
			let { tasks: e, resolvers: t } = this;
			this.pending = !1, this.tasks = /* @__PURE__ */ new Set(), this.resolvers = /* @__PURE__ */ new Set();
			for (let t of e) t();
			for (let e of t) e();
		};
	}
	schedule(e) {
		return this.tasks.add(e), this.pending || (this.pending = !0, this.scheduler(this.flush)), new Promise((e) => this.resolvers.add(e));
	}
}((e) => {
	typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : e();
}), yH = 10, bH = class extends xI {
	constructor(e, t) {
		super(e, t);
		let n = e.registry.plugins.get(gH);
		if (!n) throw Error("AutoScroller plugin depends on Scroller plugin");
		this.destroy = aP(() => {
			if (this.disabled) return;
			let { position: t, status: r } = e.dragOperation;
			if (r.dragging) {
				let e = {
					acceleration: this.options?.acceleration,
					threshold: typeof this.options?.threshold == "number" ? {
						x: this.options.threshold,
						y: this.options.threshold
					} : this.options?.threshold
				};
				if (n.scroll(void 0, e)) {
					n.autoScrolling = !0;
					let t = setInterval(() => vH.schedule(() => n.scroll(void 0, e)), yH);
					return () => {
						clearInterval(t);
					};
				}
				n.autoScrolling = !1;
			}
		});
	}
};
bH.configure = hI(bH);
var xH = bH, SH = {
	capture: !0,
	passive: !0
}, CH, wH = class extends SI {
	constructor(e) {
		super(e), UB(this, CH), this.handleScroll = () => {
			HB(this, CH) ?? WB(this, CH, setTimeout(() => {
				this.manager.collisionObserver.forceUpdate(!1), WB(this, CH, void 0);
			}, 50));
		};
		let { dragOperation: t } = this.manager;
		this.destroy = aP(() => {
			if (t.status.dragging) {
				let e = t.source?.element?.ownerDocument ?? document;
				return e.addEventListener("scroll", this.handleScroll, SH), () => {
					e.removeEventListener("scroll", this.handleScroll, SH);
				};
			}
		});
	}
};
CH = /* @__PURE__ */ new WeakMap();
var TH = "* { user-select: none !important; -webkit-user-select: none !important; }", EH = class extends xI {
	constructor(e) {
		super(e), this.manager = e;
		let t = e.registry.plugins.get(vV)?.register(TH);
		if (this.destroy = aP(() => {
			let { dragOperation: e } = this.manager;
			if (e.status.initialized) return DH(), document.addEventListener("selectionchange", DH, { capture: !0 }), () => {
				document.removeEventListener("selectionchange", DH, { capture: !0 });
			};
		}), t) {
			let e = this.destroy.bind(this);
			this.destroy = () => {
				t(), e();
			};
		}
	}
};
function DH() {
	var e;
	(e = document.getSelection()) == null || e.removeAllRanges();
}
var OH = Object.freeze({
	offset: 10,
	keyboardCodes: {
		start: ["Space", "Enter"],
		cancel: ["Escape"],
		end: [
			"Space",
			"Enter",
			"Tab"
		],
		up: ["ArrowUp"],
		down: ["ArrowDown"],
		left: ["ArrowLeft"],
		right: ["ArrowRight"]
	},
	preventActivation(e, t) {
		let n = t.handle ?? t.element;
		return e.target !== n;
	}
}), kH, AH = class extends ML {
	constructor(e, t) {
		super(e), this.manager = e, this.options = t, UB(this, kH, []), this.listeners = new VR(), this.handleSourceKeyDown = (e, t, n) => {
			if (this.disabled || e.defaultPrevented || !cB(e.target) || t.disabled) return;
			let { keyboardCodes: r = OH.keyboardCodes, preventActivation: i = OH.preventActivation } = n ?? {};
			r.start.includes(e.code) && this.manager.dragOperation.status.idle && (i?.(e, t) || this.handleStart(e, t, n));
		};
	}
	bind(e, t = this.options) {
		return aP(() => {
			let n = e.handle ?? e.element, r = (n) => {
				lB(n) && this.handleSourceKeyDown(n, e, t);
			};
			if (n) return n.addEventListener("keydown", r), () => {
				n.removeEventListener("keydown", r);
			};
		});
	}
	handleStart(e, t, n) {
		let { element: r } = t;
		if (!r) throw Error("Source draggable does not have an associated element");
		e.preventDefault(), e.stopImmediatePropagation(), qz(r);
		let { center: i } = new iB(r);
		if (this.manager.actions.start({
			event: e,
			coordinates: {
				x: i.x,
				y: i.y
			},
			source: t
		}).signal.aborted) return this.cleanup();
		this.sideEffects();
		let a = xR(r), o = [this.listeners.bind(a, [{
			type: "keydown",
			listener: (e) => this.handleKeyDown(e, t, n),
			options: { capture: !0 }
		}])];
		HB(this, kH).push(...o);
	}
	handleKeyDown(e, t, n) {
		let { keyboardCodes: r = OH.keyboardCodes } = n ?? {};
		if (MH(e, [...r.end, ...r.cancel])) {
			e.preventDefault();
			let t = MH(e, r.cancel);
			this.handleEnd(e, t);
			return;
		}
		MH(e, r.up) ? this.handleMove("up", e) : MH(e, r.down) && this.handleMove("down", e), MH(e, r.left) ? this.handleMove("left", e) : MH(e, r.right) && this.handleMove("right", e);
	}
	handleEnd(e, t) {
		this.manager.actions.stop({
			event: e,
			canceled: t
		}), this.cleanup();
	}
	handleMove(e, t) {
		let { shape: n } = this.manager.dragOperation, r = t.shiftKey ? 5 : 1, i = {
			x: 0,
			y: 0
		}, a = this.options?.offset ?? OH.offset;
		if (typeof a == "number" && (a = {
			x: a,
			y: a
		}), n) {
			switch (e) {
				case "up":
					i = {
						x: 0,
						y: -a.y * r
					};
					break;
				case "down":
					i = {
						x: 0,
						y: a.y * r
					};
					break;
				case "left":
					i = {
						x: -a.x * r,
						y: 0
					};
					break;
				case "right": i = {
					x: a.x * r,
					y: 0
				};
			}
			(i.x || i.y) && (t.preventDefault(), this.manager.actions.move({
				event: t,
				by: i
			}));
		}
	}
	sideEffects() {
		let e = this.manager.registry.plugins.get(xH);
		e?.disabled === !1 && (e.disable(), HB(this, kH).push(() => {
			e.enable();
		}));
	}
	cleanup() {
		HB(this, kH).forEach((e) => e()), WB(this, kH, []);
	}
	destroy() {
		this.cleanup(), this.listeners.clear();
	}
};
kH = /* @__PURE__ */ new WeakMap(), AH.configure = hI(AH), AH.defaults = OH;
var jH = AH;
function MH(e, t) {
	return t.includes(e.code);
}
var NH, PH = class extends FL {
	constructor() {
		super(...arguments), UB(this, NH);
	}
	onEvent(e) {
		switch (e.type) {
			case "pointerdown":
				WB(this, NH, ER(e));
				break;
			case "pointermove":
				if (!HB(this, NH)) return;
				let { x: t, y: n } = ER(e), r = {
					x: t - HB(this, NH).x,
					y: n - HB(this, NH).y
				}, { tolerance: i } = this.options;
				if (i && BF(r, i)) {
					this.abort();
					return;
				}
				BF(r, this.options.value) && this.activate(e);
				break;
			case "pointerup": this.abort();
		}
	}
	abort() {
		WB(this, NH, void 0);
	}
};
NH = /* @__PURE__ */ new WeakMap();
var FH, IH, LH = class extends FL {
	constructor() {
		super(...arguments), UB(this, FH), UB(this, IH);
	}
	onEvent(e) {
		switch (e.type) {
			case "pointerdown":
				WB(this, IH, ER(e)), WB(this, FH, setTimeout(() => this.activate(e), this.options.value));
				break;
			case "pointermove":
				if (!HB(this, IH)) return;
				let { x: t, y: n } = ER(e);
				BF({
					x: t - HB(this, IH).x,
					y: n - HB(this, IH).y
				}, this.options.tolerance) && this.abort();
				break;
			case "pointerup": this.abort();
		}
	}
	abort() {
		HB(this, FH) && (clearTimeout(HB(this, FH)), WB(this, IH, void 0), WB(this, FH, void 0));
	}
};
FH = /* @__PURE__ */ new WeakMap(), IH = /* @__PURE__ */ new WeakMap();
var RH = class {};
RH.Delay = LH, RH.Distance = PH;
var zH = Object.freeze({
	activationConstraints(e, t) {
		let { pointerType: n, target: r } = e;
		if (!(n === "mouse" && cB(r) && (t.handle === r || t.handle?.contains(r)))) return n === "touch" ? [new RH.Delay({
			value: 250,
			tolerance: 5
		})] : dB(r) && !e.defaultPrevented ? [new RH.Delay({
			value: 200,
			tolerance: 0
		})] : [new RH.Delay({
			value: 200,
			tolerance: 10
		}), new RH.Distance({ value: 5 })];
	},
	preventActivation(e, t) {
		let { target: n } = e;
		if (n === t.element || n === t.handle || !cB(n) || t.handle?.contains(n)) return !1;
		let r = BR(n);
		return r !== t.element && !!r;
	}
}), BH, VH = class extends ML {
	constructor(e, t) {
		super(e), this.manager = e, this.options = t, UB(this, BH, /* @__PURE__ */ new Set()), this.listeners = new VR(), this.latest = {
			event: void 0,
			coordinates: void 0
		}, this.handleMove = () => {
			let { event: e, coordinates: t } = this.latest;
			!e || !t || this.manager.actions.move({
				event: e,
				to: t
			});
		}, this.handleCancel = this.handleCancel.bind(this), this.handlePointerUp = this.handlePointerUp.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this);
	}
	activationConstraints(e, t, n = this.options) {
		let { activationConstraints: r = zH.activationConstraints } = n ?? {};
		return typeof r == "function" ? r(e, t) : r;
	}
	bind(e, t = this.options) {
		return aP(() => {
			let n = new AbortController(), { signal: r } = n, i = (n) => {
				uB(n) && this.handlePointerDown(n, e, t);
			}, a = [e.handle ?? e.element];
			t?.activatorElements && (a = Array.isArray(t.activatorElements) ? t.activatorElements : t.activatorElements(e));
			for (let e of a) e && (qH(e.ownerDocument.defaultView), e.addEventListener("pointerdown", i, { signal: r }));
			return () => n.abort();
		});
	}
	handlePointerDown(e, t, n) {
		if (this.disabled || !e.isPrimary || e.button !== 0 || !cB(e.target) || t.disabled || UH(e) || !this.manager.dragOperation.status.idle) return;
		let { preventActivation: r = zH.preventActivation } = n ?? {};
		if (r?.(e, t)) return;
		let { target: i } = e, a = yR(i) && i.draggable && i.getAttribute("draggable") === "true", o = Lz(t.element), { x: s, y: c } = ER(e);
		this.initialCoordinates = {
			x: s * o.scaleX + o.x,
			y: c * o.scaleY + o.y
		};
		let l = this.activationConstraints(e, t, n);
		e.sensor = this;
		let u = new NL(l, (e) => this.handleStart(t, e));
		u.signal.onabort = () => this.handleCancel(e), u.onEvent(e), this.controller = u;
		let d = OR(), f = this.listeners.bind(d, [
			{
				type: "pointermove",
				listener: (e) => this.handlePointerMove(e, t)
			},
			{
				type: "pointerup",
				listener: this.handlePointerUp,
				options: { capture: !0 }
			},
			{
				type: "pointercancel",
				listener: this.handleCancel
			},
			{
				type: "dragstart",
				listener: a ? this.handleCancel : WH,
				options: { capture: !0 }
			}
		]);
		HB(this, BH).add(() => {
			f(), this.initialCoordinates = void 0;
		});
	}
	handlePointerMove(e, t) {
		var n;
		if (this.controller?.activated === !1) {
			(n = this.controller) == null || n.onEvent(e);
			return;
		}
		if (this.manager.dragOperation.status.dragging) {
			let n = ER(e), r = Lz(t.element);
			n.x = n.x * r.scaleX + r.x, n.y = n.y * r.scaleY + r.y, e.preventDefault(), e.stopPropagation(), this.latest.event = e, this.latest.coordinates = n, Dz.schedule(this.handleMove);
		}
	}
	handlePointerUp(e) {
		let { status: t } = this.manager.dragOperation;
		if (!t.idle) {
			e.preventDefault(), e.stopPropagation();
			let n = !t.initialized;
			this.manager.actions.stop({
				event: e,
				canceled: n
			});
		}
		this.cleanup();
	}
	handleKeyDown(e) {
		e.key === "Escape" && (e.preventDefault(), this.handleCancel(e));
	}
	handleStart(e, t) {
		let { manager: n, initialCoordinates: r } = this;
		if (!r || !n.dragOperation.status.idle || t.defaultPrevented) return;
		if (n.actions.start({
			coordinates: r,
			event: t,
			source: e
		}).signal.aborted) return this.cleanup();
		t.preventDefault();
		let i = xR(t.target).body;
		try {
			i.setPointerCapture(t.pointerId);
		} catch {
			this.handleCancel(t);
			return;
		}
		let a = cB(t.target) ? [t.target, i] : i, o = this.listeners.bind(a, [
			{
				type: "touchmove",
				listener: WH,
				options: { passive: !1 }
			},
			{
				type: "click",
				listener: WH
			},
			{
				type: "contextmenu",
				listener: WH
			},
			{
				type: "keydown",
				listener: this.handleKeyDown
			}
		]);
		HB(this, BH).add(o);
	}
	handleCancel(e) {
		let { dragOperation: t } = this.manager;
		t.status.initialized && this.manager.actions.stop({
			event: e,
			canceled: !0
		}), this.cleanup();
	}
	cleanup() {
		let { controller: e } = this;
		this.controller = void 0, e && !e.signal.aborted && e.abort(), this.latest = {
			event: void 0,
			coordinates: void 0
		}, HB(this, BH).forEach((e) => e()), HB(this, BH).clear();
	}
	destroy() {
		this.cleanup(), this.listeners.clear();
	}
};
BH = /* @__PURE__ */ new WeakMap(), VH.configure = hI(VH), VH.defaults = zH;
var HH = VH;
function UH(e) {
	return "sensor" in e;
}
function WH(e) {
	e.preventDefault();
}
function GH() {}
var KH = /* @__PURE__ */ new WeakSet();
function qH(e) {
	!e || KH.has(e) || (e.addEventListener("touchmove", GH, {
		capture: !1,
		passive: !1
	}), KH.add(e));
}
var JH = {
	modifiers: [],
	plugins: [
		tV,
		xH,
		yV,
		YV,
		EH
	],
	sensors: [HH, jH]
}, YH = class extends oR {
	constructor(e = {}) {
		let t = aR(e.plugins, JH.plugins), n = aR(e.sensors, JH.sensors), r = aR(e.modifiers, JH.modifiers);
		super(AB(kB({}, e), {
			plugins: [
				wH,
				gH,
				vV,
				...t
			],
			sensors: n,
			modifiers: r
		}));
	}
}, XH, ZH, QH, $H, eU, tU, nU = class extends (QH = eL, ZH = [Y], XH = [Y], QH) {
	constructor(e, t) {
		var n = e, { element: r, effects: i = () => [], handle: a } = n, o = MB(n, [
			"element",
			"effects",
			"handle"
		]);
		super(kB({ effects: () => [...i(), () => {
			let { manager: e } = this;
			if (!e) return;
			let t = (this.sensors?.map(gI) ?? [...e.sensors]).map((t) => {
				let n = t instanceof ML ? t : e.registry.register(t.plugin), r = t instanceof ML ? void 0 : t.options;
				return n.bind(this, r);
			});
			return function() {
				t.forEach((e) => e());
			};
		}] }, o), t), UB(this, eU, RB($H, 8, this)), RB($H, 11, this), UB(this, tU, RB($H, 12, this)), RB($H, 15, this), this.element = r, this.handle = a;
	}
};
$H = NB(QH), eU = /* @__PURE__ */ new WeakMap(), tU = /* @__PURE__ */ new WeakMap(), zB($H, 4, "handle", ZH, nU, eU), zB($H, 4, "element", XH, nU, tU), LB($H, nU);
var rU, iU, aU, oU, sU, cU, lU, uU, dU, fU, pU = class extends (aU = mL, iU = [Y], rU = [Y], aU) {
	constructor(e, t) {
		var n = e, { element: r, effects: i = () => [] } = n, a = MB(n, ["element", "effects"]);
		let { collisionDetector: o = _B } = a, s = (e) => {
			let { manager: t, element: n } = this;
			if (!n || e === null) {
				this.shape = void 0;
				return;
			}
			if (!t) return;
			let r = new iB(n), i = J(() => this.shape);
			return r && i?.equals(r) ? i : (this.shape = r, r);
		}, c = YN(!1);
		super(AB(kB({}, a), {
			collisionDetector: o,
			effects: () => [
				...i(),
				() => {
					let { element: e, manager: t } = this;
					if (!t) return;
					let { dragOperation: n } = t, { source: r } = n;
					c.value = !!(r && n.status.initialized && e && !this.disabled && this.accepts(r));
				},
				() => {
					let { element: e } = this;
					if (c.value && e) {
						let t = new bz(e, s);
						return () => {
							t.disconnect(), this.shape = void 0;
						};
					}
				},
				() => {
					if (this.manager?.dragOperation.status.initialized) return () => {
						this.shape = void 0;
					};
				}
			]
		}), t), UB(this, dU), UB(this, sU, RB(oU, 8, this)), RB(oU, 11, this), UB(this, fU, RB(oU, 12, this)), RB(oU, 15, this), this.element = r, this.refreshShape = () => s();
	}
	set element(e) {
		WB(this, dU, e, uU);
	}
	get element() {
		return this.proxy ?? HB(this, dU, lU);
	}
};
oU = NB(aU), sU = /* @__PURE__ */ new WeakMap(), dU = /* @__PURE__ */ new WeakSet(), fU = /* @__PURE__ */ new WeakMap(), cU = zB(oU, 20, "#element", iU, dU, sU), lU = cU.get, uU = cU.set, zB(oU, 4, "proxy", rU, pU, fU), LB(oU, pU);
//#endregion
//#region ../../node_modules/.pnpm/@dnd-kit+react@0.5.0_react-dom@19.2.8_react@19.2.8/node_modules/@dnd-kit/react/utilities.js
function mU(e) {
	return typeof e == "object" && !!e && "current" in e;
}
function hU(e) {
	if (e != null) return mU(e) ? e.current ?? void 0 : e;
}
//#endregion
//#region ../../node_modules/.pnpm/@dnd-kit+react@0.5.0_react-dom@19.2.8_react@19.2.8/node_modules/@dnd-kit/react/hooks.js
var gU = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? x : _;
function _U() {
	let e = T(0)[1];
	return h(() => {
		e((e) => e + 1);
	}, [e]);
}
function vU(e, t = !1) {
	let n = w(e.peek()), r = w(!1), i = _U();
	return gU(() => aP(() => {
		let a = n.current, o = e.value;
		if (a !== o) {
			if (n.current = o, !r.current) return;
			t ? De(i) : i();
		}
	}), [
		e,
		t,
		i
	]), { get value() {
		return r.current = !0, e.peek();
	} };
}
function yU(e, t = [], n = !1) {
	let r = w(e);
	return r.current = e, vU(S(() => NP(() => r.current()), t), n);
}
function bU(e, t) {
	let n = w(/* @__PURE__ */ new Map()), r = _U();
	return gU(() => {
		if (!e) {
			n.current.clear();
			return;
		}
		return aP(() => {
			let i = !1, a = !1;
			for (let r of n.current) {
				let [o] = r, s = J(() => r[1]), c = e[o];
				s !== c && (i = !0, n.current.set(o, c), a = t?.(o, s, c) ?? !1);
			}
			i && (a ? queueMicrotask(() => De(r)) : r());
		});
	}, [e]), S(() => e && new Proxy(e, { get(e, t) {
		let r = e[t];
		return n.current.set(t, r), r;
	} }), [e]);
}
function xU(e) {
	let t = w(e);
	return gU(() => {
		t.current = e;
	}, [e]), t;
}
function SU(e, t, n = _, r = Object.is) {
	let i = w(e);
	n(() => {
		let n = i.current;
		r(e, n) || (i.current = e, t(e, n));
	}, [t, e]);
}
function CU(e, t) {
	let n = w(hU(e));
	gU(() => {
		let r = hU(e);
		r !== n.current && (n.current = r, t(r));
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@dnd-kit+react@0.5.0_react-dom@19.2.8_react@19.2.8/node_modules/@dnd-kit/react/index.js
var wU = Object.defineProperty, TU = Object.defineProperties, EU = Object.getOwnPropertyDescriptors, DU = Object.getOwnPropertySymbols, OU = Object.prototype.hasOwnProperty, kU = Object.prototype.propertyIsEnumerable, AU = (e, t, n) => t in e ? wU(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, jU = (e, t) => {
	for (var n in t ||= {}) OU.call(t, n) && AU(e, n, t[n]);
	if (DU) for (var n of DU(t)) kU.call(t, n) && AU(e, n, t[n]);
	return e;
}, MU = (e, t) => TU(e, EU(t)), NU = (e, t) => {
	var n = {};
	for (var r in e) OU.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && DU) for (var r of DU(e)) t.indexOf(r) < 0 && kU.call(e, r) && (n[r] = e[r]);
	return n;
}, PU = new YH(), FU = l(PU), IU = p(d(({ children: e }, t) => {
	let [n, r] = T(0), i = w(null), a = w(null), o = S(() => ({
		renderer: { get rendering() {
			return i.current ?? Promise.resolve();
		} },
		trackRendering(e) {
			i.current ||= new Promise((e) => {
				a.current = e;
			}), m(() => {
				e(), r((e) => e + 1);
			});
		}
	}), []);
	return gU(() => {
		var e;
		(e = a.current) == null || e.call(a), i.current = null;
	}, [e, n]), y(t, () => o), null;
})), LU = [void 0, PP];
function RU(e) {
	var t = e, { children: n, onCollision: r, onBeforeDragStart: i, onDragStart: a, onDragMove: o, onDragOver: s, onDragEnd: c } = t, l = NU(t, [
		"children",
		"onCollision",
		"onBeforeDragStart",
		"onDragStart",
		"onDragMove",
		"onDragOver",
		"onDragEnd"
	]);
	let u = w(null), { plugins: d, modifiers: f, sensors: p } = l, m = aR(d, JH.plugins), h = aR(p, JH.sensors), g = aR(f, JH.modifiers), v = xU(i), y = xU(a), b = xU(s), x = xU(o), S = xU(c), C = xU(r), T = zU(() => l.manager ?? new YH(l));
	return _(() => {
		if (!u.current) throw Error("Renderer not found");
		let { renderer: e, trackRendering: t } = u.current, { monitor: n } = T;
		T.renderer = e;
		let r = [
			n.addEventListener("beforedragstart", (e) => {
				let n = v.current;
				n && t(() => n(e, T));
			}),
			n.addEventListener("dragstart", (e) => y.current?.call(y, e, T)),
			n.addEventListener("dragover", (e) => {
				let n = b.current;
				n && t(() => n(e, T));
			}),
			n.addEventListener("dragmove", (e) => {
				let n = x.current;
				n && t(() => n(e, T));
			}),
			n.addEventListener("dragend", (e) => {
				let n = S.current;
				n && t(() => n(e, T));
			}),
			n.addEventListener("collision", (e) => C.current?.call(C, e, T))
		];
		return () => r.forEach((e) => e());
	}, [T]), SU(m, () => T && (T.plugins = m), ...LU), SU(h, () => T && (T.sensors = h), ...LU), SU(g, () => T && (T.modifiers = g), ...LU), /* @__PURE__ */ (0, z.jsxs)(FU.Provider, {
		value: T,
		children: [/* @__PURE__ */ (0, z.jsx)(IU, {
			ref: u,
			children: n
		}), n]
	});
}
function zU(e) {
	let t = w(null);
	return t.current ||= e(), b(() => () => t.current?.destroy(), []), t.current;
}
function BU() {
	return g(FU);
}
function VU(e) {
	let t = BU() ?? void 0, [n] = T(() => e(t));
	return n.manager !== t && (n.manager = t), gU(n.register, [t, n]), n;
}
function HU(e) {
	let { disabled: t, data: n, element: r, handle: i, id: a, modifiers: o, sensors: s, plugins: c } = e, l = VU((t) => new nU(MU(jU({}, e), {
		register: !1,
		handle: hU(i),
		element: hU(r)
	}), t)), u = bU(l, UU);
	return SU(a, () => l.id = a), CU(i, (e) => l.handle = e), CU(r, (e) => l.element = e), SU(n, () => n && (l.data = n)), SU(t, () => l.disabled = t === !0), SU(s, () => l.sensors = s, void 0, PP), SU(o, () => l.modifiers = o, void 0, PP), SU(c, () => l.plugins = c, void 0, PP), SU(e.alignment, () => l.alignment = e.alignment), {
		draggable: u,
		get isDragging() {
			return u.isDragging;
		},
		get isDropping() {
			return u.isDropping;
		},
		get isDragSource() {
			return u.isDragSource;
		},
		handleRef: h((e) => {
			l.handle = e ?? void 0;
		}, [l]),
		ref: h((e) => {
			!e && l.element?.isConnected && !l.manager?.dragOperation.status.idle || (l.element = e ?? void 0);
		}, [l])
	};
}
function UU(e, t, n) {
	return !!(e === "isDragSource" && !n && t);
}
function WU({ children: e, className: t, dropAnimation: n, style: r, tag: i, disabled: a }) {
	let o = w(null), s = BU(), c = yU(() => s?.dragOperation.source, [s]).value ?? null, l = typeof a == "function" ? a(c) : a;
	_(() => {
		if (!o.current || !s || l) return;
		let e = s.plugins.find((e) => e instanceof YV);
		if (e) return e.overlay = o.current, () => {
			e.overlay = void 0;
		};
	}, [s, l]), _(() => {
		if (!s) return;
		let e = s.plugins.find((e) => e instanceof YV);
		if (e) return e.dropAnimation = n, () => {
			e.dropAnimation = void 0;
		};
	}, [s, n]);
	let d = S(() => {
		if (!s) return null;
		let e = new Proxy(s.registry, { get(e, t) {
			return t === "register" || t === "unregister" ? GU : e[t];
		} });
		return new Proxy(s, { get(t, n) {
			return n === "registry" ? e : t[n];
		} });
	}, [s]);
	return /* @__PURE__ */ (0, z.jsx)(FU.Provider, {
		value: d,
		children: u(i || "div", {
			ref: o,
			className: t,
			style: r,
			"data-dnd-overlay": !0
		}, f())
	});
	function f() {
		return !c || l ? null : typeof e == "function" ? /* @__PURE__ */ (0, z.jsx)(KU, {
			source: c,
			children: e
		}) : e;
	}
}
function GU() {
	return () => {};
}
function KU({ children: e, source: t }) {
	return e(bU(t));
}
var qU = Object.create, JU = Object.defineProperty, YU = Object.getOwnPropertyDescriptor, XU = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), ZU = (e) => {
	throw TypeError(e);
}, QU = (e, t, n) => t in e ? JU(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, $U = (e) => [
	,
	,
	,
	qU(e?.[XU("metadata")] ?? null)
], eW = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], tW = (e) => e !== void 0 && typeof e != "function" ? ZU("Function expected") : e, nW = (e, t, n, r, i) => ({
	kind: eW[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? ZU("Already initialized") : i.push(tW(e || null))
}), rW = (e, t) => QU(t, XU("metadata"), e[3]), iW = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) a[i].call(n);
	return r;
}, aW = (e, t, n, r, i, a) => {
	for (var o, s, c, l, u = t & 7, d = !1, f = !1, p = 2, m = eW[u + 5], h = e[p] || (e[p] = []), g = (i = i.prototype, YU(i, n)), _ = r.length - 1; _ >= 0; _--) c = nW(u, n, s = {}, e[3], h), c.static = d, c.private = f, l = c.access = { has: (e) => n in e }, l.get = (e) => e[n], o = (0, r[_])(g[m], c), s._ = 1, tW(o) && (g[m] = o);
	return g && JU(i, n, g), i;
}, oW = (e, t, n) => t.has(e) || ZU("Cannot " + n), sW = (e, t, n) => (oW(e, t, "read from private field"), t.get(e)), cW = (e, t, n) => t.has(e) ? ZU("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), lW = (e, t, n, r) => (oW(e, t, "write to private field"), t.set(e, n), n), uW = class e {
	constructor(e, t) {
		this.x = e, this.y = t;
	}
	static delta(t, n) {
		return new e(t.x - n.x, t.y - n.y);
	}
	static distance(e, t) {
		return Math.hypot(e.x - t.x, e.y - t.y);
	}
	static equals(e, t) {
		return e.x === t.x && e.y === t.y;
	}
	static from({ x: t, y: n }) {
		return new e(t, n);
	}
}, dW, fW, pW, mW, hW, gW = class extends (pW = iF, fW = [FP], dW = [FP], pW) {
	constructor(e) {
		let t = uW.from(e);
		super(t, (e, t) => uW.equals(e, t)), iW(hW, 5, this), cW(this, mW, 0), this.velocity = {
			x: 0,
			y: 0
		};
	}
	get delta() {
		return uW.delta(this.current, this.initial);
	}
	get direction() {
		let { current: e, previous: t } = this;
		if (!t) return null;
		let n = {
			x: e.x - t.x,
			y: e.y - t.y
		};
		return !n.x && !n.y ? null : Math.abs(n.x) > Math.abs(n.y) ? n.x > 0 ? "right" : "left" : n.y > 0 ? "down" : "up";
	}
	get current() {
		return super.current;
	}
	set current(e) {
		let { current: t } = this, n = uW.from(e), r = {
			x: n.x - t.x,
			y: n.y - t.y
		}, i = Date.now(), a = i - sW(this, mW), o = (e) => Math.round(e / a * 100);
		LN(() => {
			lW(this, mW, i), this.velocity = {
				x: o(r.x),
				y: o(r.y)
			}, super.current = n;
		});
	}
	reset(e = this.defaultValue) {
		super.reset(uW.from(e)), this.velocity = {
			x: 0,
			y: 0
		};
	}
};
hW = $U(pW), mW = /* @__PURE__ */ new WeakMap(), aW(hW, 2, "delta", fW, gW), aW(hW, 2, "direction", dW, gW), rW(hW, gW);
var _W = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(_W || {});
Object.values(_W);
var vW = ({ dragOperation: e, droppable: t }) => {
	let n = e.position.current;
	if (!n) return null;
	let { id: r } = t;
	return t.shape && t.shape.containsPoint(n) ? {
		id: r,
		value: 1 / uW.distance(t.shape.center, n),
		type: bL.PointerIntersection,
		priority: yL.High
	} : null;
}, yW = ({ dragOperation: e, droppable: t }) => {
	let { shape: n } = e;
	if (!t.shape || !n?.current) return null;
	let r = n.current.intersectionArea(t.shape);
	if (r) {
		let { position: i } = e, a = uW.distance(t.shape.center, i.current), o = r / (n.current.area + t.shape.area - r) / a;
		return {
			id: t.id,
			value: o,
			type: bL.ShapeIntersection,
			priority: yL.Normal
		};
	}
	return null;
}, bW = (e) => vW(e) ?? yW(e);
function xW(e) {
	let { collisionDetector: t, data: n, disabled: r, element: i, id: a, accept: o, type: s } = e, c = VU((t) => new pU(MU(jU({}, e), {
		register: !1,
		element: hU(i)
	}), t)), l = bU(c);
	return SU(a, () => c.id = a), CU(i, (e) => c.element = e), SU(o, () => c.accept = o, void 0, PP), SU(t, () => c.collisionDetector = t ?? bW), SU(n, () => n && (c.data = n)), SU(r, () => c.disabled = r === !0), SU(s, () => c.type = s), {
		droppable: l,
		get isDropTarget() {
			return l.isDropTarget;
		},
		ref: h((e) => {
			!e && c.element?.isConnected && !c.manager?.dragOperation.status.idle || (c.element = e ?? void 0);
		}, [c])
	};
}
function SW() {
	let e = BU(), t = yU(() => e?.dragOperation.source, [e]), n = yU(() => e?.dragOperation.target, [e]);
	return {
		get source() {
			return t.value;
		},
		get target() {
			return n.value;
		}
	};
}
//#endregion
//#region src/core/VirtualizedList/virtualized-list.ts
var CW = {
	ARROW_UP: "ArrowUp",
	ARROW_DOWN: "ArrowDown",
	HOME: "Home",
	END: "End",
	PAGE_UP: "PageUp",
	PAGE_DOWN: "PageDown",
	ENTER: "Enter",
	SPACE: "Space"
};
function wW(e) {
	return e.ctrlKey || e.metaKey || e.shiftKey || e.altKey;
}
function TW(e) {
	return ({ itemTop: t, itemBottom: n, viewportTop: r, viewportBottom: i, locationParams: { align: a, behavior: o, ...s } }) => a === "start" || a === void 0 && t < r + e ? {
		...s,
		behavior: o,
		align: "start",
		offset: -e
	} : a === "end" || a === void 0 && n > i ? {
		...s,
		behavior: o,
		align: "end"
	} : a === "center" ? {
		...s,
		behavior: o,
		align: "center"
	} : null;
}
function EW(e, t) {
	let { items: n, isItemFocusable: r, getItemKey: i, context: a, onKeyDown: o, disableKeyboardNavigation: s, totalCount: c, rangeChanged: l, mapScrollIndex: u, mapRangeIndex: d, scrollerRef: f, scrollPaddingTop: p, ...m } = e, g = w(null), v = w(null), [y, b] = T(e.items[0] ? i(e.items[0]) : void 0), [x, C] = T(void 0), E = S(() => {
		let e = /* @__PURE__ */ new Map();
		return n.forEach((t, n) => e.set(i(t), n)), e;
	}, [n, i]), [ee, D] = T(!1);
	_(() => {
		n.length && (!y || E.get(y) === void 0) && b(i(n[0]));
	}, [
		n,
		i,
		y,
		E
	]);
	let te = h((e, t) => {
		let r = Math.max(0, Math.min(e, n.length - 1));
		if (n[r]) {
			let e = i(n[r]);
			b(e);
			let a = u ? u(r) : r, o = typeof p == "function" ? p(r) : p ?? 0;
			g.current?.scrollIntoView({
				index: a,
				align: t,
				behavior: "auto",
				...o > 0 ? { calculateViewLocation: TW(o) } : {}
			});
		}
	}, [
		n,
		i,
		u,
		p
	]), O = h((e, t, i) => {
		let a = n.length, o;
		for (let i = e; t ? i < a : i >= 0; i += t ? 1 : -1) if (r(n[i])) {
			o = i;
			break;
		}
		o !== void 0 && te(o, i);
	}, [
		te,
		n,
		r
	]), k = h((e) => {
		let t = y ? E.get(y) : void 0, r = !1;
		if (!e || wW(e)) {
			o?.(e);
			return;
		}
		if (s) {
			o?.(e);
			return;
		}
		if (e.code === CW.ARROW_UP && t !== void 0) O(t - 1, !1), r = !0;
		else if (e.code === CW.ARROW_DOWN && t !== void 0) O(t + 1, !0), r = !0;
		else if (e.code === CW.HOME) te(0), r = !0;
		else if (e.code === CW.END) te(n.length - 1), r = !0;
		else if (e.code === CW.PAGE_DOWN && x && t !== void 0) {
			let e = x.endIndex - x.startIndex;
			O(Math.min(t + e, n.length - 1), !0, "start"), r = !0;
		} else if (e.code === CW.PAGE_UP && x && t !== void 0) {
			let e = x.endIndex - x.startIndex;
			O(Math.max(t - e, 0), !1, "start"), r = !0;
		}
		if (r) {
			if (v.current instanceof HTMLElement) {
				let e = document.activeElement;
				e && e !== v.current && v.current.contains(e) && v.current.focus({ preventScroll: !0 });
			}
			e.stopPropagation(), e.preventDefault();
		} else o?.(e);
	}, [
		te,
		O,
		y,
		E,
		x,
		n,
		o,
		s
	]), A = h((e) => {
		v.current = e, f?.(e);
	}, [f]), ne = h((e, t) => {
		let n = i(e);
		D(!0), b(n), t.stopPropagation();
	}, [i]), re = h((e) => {
		if (e?.currentTarget !== v.current || typeof y != "string") return;
		D(!0);
		let t = E.get(y);
		t !== void 0 && x && (t < x.startIndex || t > x.endIndex) && te(t), e.stopPropagation(), e.preventDefault();
	}, [
		E,
		x,
		te,
		y
	]), j = h((e) => {
		e.currentTarget.contains(e.relatedTarget) || D(!1);
	}, []), ie = S(() => ({
		tabIndexKey: y,
		focused: ee,
		context: e.context || {}
	}), [
		y,
		ee,
		e.context
	]), ae = h((e) => {
		let t = d ? {
			startIndex: d(e.startIndex),
			endIndex: d(e.endIndex)
		} : e;
		C(t), l?.(e);
	}, [l, d]), oe = h((e) => {
		g.current = e, t?.(e);
	}, [t]), M = h((e, t) => i(t), [i]);
	return {
		...m,
		computeItemKey: M,
		ref: oe,
		scrollerRef: A,
		onKeyDown: k,
		onFocus: re,
		onBlur: j,
		rangeChanged: ae,
		onFocusForGetItemComponent: ne,
		context: ie
	};
}
//#endregion
//#region src/core/VirtualizedList/FlatVirtualizedList/FlatVirtualizedList.tsx
function DW(e) {
	let { getItemComponent: t, scrollHandleRef: n, ...r } = e, { onFocusForGetItemComponent: i, ...a } = EW(r, n), o = h((e, n, r) => t(e, n, r, i), [t, i]);
	return /* @__PURE__ */ (0, z.jsx)(Te, {
		itemContent: o,
		data: e.items,
		...a
	});
}
var OW = {
	stickyRoot: "_stickyRoot_3tgsb_12",
	stickyHeader: "_stickyHeader_3tgsb_32",
	stickyRow: "_stickyRow_3tgsb_23"
}, kW = o.forwardRef(function({ item: e, context: t, children: n, ...r }, i) {
	let a = typeof e == "object" && !!e && "header" in e;
	return /* @__PURE__ */ (0, z.jsx)("div", {
		...r,
		ref: i,
		className: a ? OW.stickyRow : void 0,
		children: n
	});
});
function AW(e) {
	let { getItemComponent: t, groups: n, getGroupHeaderComponent: r, isItemFocusable: i, isGroupHeaderFocusable: a, getItemKey: o, getHeaderKey: s, scrollHandleRef: c, renderStickyHeader: l, ...u } = e, [d, f] = T(0), p = S(() => n.flatMap((e) => [{ header: e.header }, ...e.items.map((e) => ({ item: e }))]), [n]), m = S(() => n.flatMap((e, t) => Array(1 + e.items.length).fill(t)), [n]), g = h((e) => {
		let t = p[e];
		return t && "header" in t ? 0 : d;
	}, [p, d]), v = h((e) => "header" in e ? s(e.header) : o(e.item), [s, o]), y = h((e) => "header" in e ? a(e.header) : i(e.item), [a, i]), { onFocusForGetItemComponent: b, scrollerRef: C, ...E } = EW({
		...u,
		items: p,
		isItemFocusable: y,
		getItemKey: v,
		scrollPaddingTop: g
	}, c), ee = h((e, t) => {
		b({ item: e }, t);
	}, [b]), D = h((e, t) => {
		b({ header: e }, t);
	}, [b]), te = h((e, n, i) => {
		let a = p[e], o = m[e];
		if ("header" in a) return r(o, a.header, i, D);
		let s = e - (o + 1);
		return t(s, a.item, i, ee, o);
	}, [
		p,
		m,
		r,
		t,
		ee,
		D
	]), O = w([]), k = w(null), A = w(null), [ne, re] = T(0), j = h(() => {
		let e = A.current;
		if (!e || m.length === 0) return;
		let t = e.scrollTop, n = O.current, r = n.length ? n[0].index : 0, i = n.length ? n[0].offset : 0;
		for (let e of n) e.offset <= t + 1 && e.offset > i && (i = e.offset, r = e.index);
		let a = m[r] ?? 0;
		re((e) => e === a ? e : a);
	}, [m]), ie = h((e) => {
		O.current = e.map((e) => ({
			index: e.index,
			offset: e.offset
		})), j();
	}, [j]), ae = h((e) => {
		C?.(e), A.current = e instanceof HTMLElement ? e : null;
	}, [C]), oe = h((e) => {
		let t = A.current;
		t && (t.scrollTop += e.deltaY * (e.deltaMode === 1 ? 16 : 1));
	}, []);
	x(() => {
		k.current && f(k.current.offsetHeight);
	}, [ne, n]), _(() => {
		j();
	}, [n, j]);
	let M = Math.min(ne, n.length - 1), se = l && M >= 0 ? l(M, n[M].header, E.context) : null;
	return /* @__PURE__ */ (0, z.jsxs)("div", {
		className: OW.stickyRoot,
		children: [se != null && /* @__PURE__ */ (0, z.jsx)("div", {
			className: OW.stickyHeader,
			ref: k,
			onWheel: oe,
			children: se
		}), /* @__PURE__ */ (0, z.jsx)(Te, {
			itemContent: te,
			data: p,
			...E,
			components: { Item: kW },
			scrollerRef: ae,
			itemsRendered: ie,
			onScroll: j
		})]
	});
}
//#endregion
//#region src/core/VirtualizedList/accessbility.ts
function jW(e, t) {
	switch (e) {
		case "listbox": return { role: "listbox" };
		case "treegrid": return {
			role: "treegrid",
			"aria-rowcount": t
		};
	}
}
function MW(e, t, n) {
	switch (e) {
		case "listbox": return {
			role: "option",
			"aria-posinset": t + 1,
			"aria-setsize": n
		};
		case "treegrid": return {
			role: "row",
			"aria-level": 2,
			"aria-rowindex": t + 1,
			"aria-posinset": n + 1
		};
	}
}
function NW(e, t, n) {
	return {
		role: "row",
		"aria-level": 1,
		"aria-posinset": t + 1,
		"aria-rowindex": e + 1,
		"aria-setsize": n
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@dnd-kit+abstract@0.5.0/node_modules/@dnd-kit/abstract/modifiers.js
var PW = Object.defineProperty, FW = Object.defineProperties, IW = Object.getOwnPropertyDescriptors, LW = Object.getOwnPropertySymbols, RW = Object.prototype.hasOwnProperty, zW = Object.prototype.propertyIsEnumerable, BW = (e, t, n) => t in e ? PW(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, VW = (e, t) => {
	for (var n in t ||= {}) RW.call(t, n) && BW(e, n, t[n]);
	if (LW) for (var n of LW(t)) zW.call(t, n) && BW(e, n, t[n]);
	return e;
}, HW = (e, t) => FW(e, IW(t)), UW = class extends IL {
	apply({ transform: e }) {
		if (!this.options) return e;
		let { axis: t, value: n } = this.options;
		return HW(VW({}, e), { [t]: n });
	}
};
UW.configure = hI(UW);
var WW = UW, GW = WW.configure({
	axis: "x",
	value: 0
});
WW.configure({
	axis: "y",
	value: 0
});
var KW = class extends IL {
	apply({ transform: e }) {
		let { size: t = 20 } = this.options ?? {}, n = typeof t == "number" ? t : t.x, r = typeof t == "number" ? t : t.y;
		return HW(VW({}, e), {
			x: Math.ceil(e.x / n) * n,
			y: Math.ceil(e.y / r) * r
		});
	}
};
KW.configure = hI(KW);
var qW = {
	header: "_header_1j2sa_8",
	keyboardActive: "_keyboardActive_1j2sa_25",
	container: "_container_1j2sa_33",
	menu: "_menu_1j2sa_37",
	notificationDecoration: "_notificationDecoration_1j2sa_43",
	chevron: "_chevron_1j2sa_48",
	unread: "_unread_1j2sa_70",
	title: "_title_1j2sa_91",
	firstHeader: "_firstHeader_1j2sa_98",
	lastHeader: "_lastHeader_1j2sa_102",
	dropTarget: "_dropTarget_1j2sa_106",
	dropTargetBottom: "_dropTargetBottom_1j2sa_110",
	dropTargetTop: "_dropTargetTop_1j2sa_111",
	dragging: "_dragging_1j2sa_132",
	dragSource: "_dragSource_1j2sa_138",
	stickyBackground: "_stickyBackground_1j2sa_147"
}, JW = { sectionLabel: "_sectionLabel_rnzlx_8" };
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemWrapper/RoomListItemView/RoomListItemMoreOptionsMenu.tsx
function YW({ vm: e }) {
	let [t, n] = T(!1);
	return /* @__PURE__ */ (0, z.jsx)(ue, {
		open: t,
		onOpenChange: n,
		title: U("room_list|room|more_options"),
		showTitle: !1,
		align: "start",
		trigger: /* @__PURE__ */ (0, z.jsx)(M, {
			tooltip: U("room_list|room|more_options"),
			"aria-label": U("room_list|room|more_options"),
			size: "24px",
			style: { padding: "2px" },
			children: /* @__PURE__ */ (0, z.jsx)(MC, {})
		}),
		children: /* @__PURE__ */ (0, z.jsx)(XW, { vm: e })
	});
}
function XW({ vm: e }) {
	let t = H(e), n = t.sections.length > 0, r = S(() => t.sections.some((e) => e.isSelected), [t.sections]);
	return /* @__PURE__ */ (0, z.jsxs)("div", {
		onKeyDown: (e) => e.stopPropagation(),
		children: [
			t.canMarkAsRead && /* @__PURE__ */ (0, z.jsx)(N, {
				Icon: bC,
				label: U("room_list|more_options|mark_read"),
				onSelect: e.onMarkAsRead,
				onClick: (e) => e.stopPropagation(),
				hideChevron: !0
			}),
			t.canMarkAsUnread && /* @__PURE__ */ (0, z.jsx)(N, {
				Icon: SC,
				label: U("room_list|more_options|mark_unread"),
				onSelect: e.onMarkAsUnread,
				onClick: (e) => e.stopPropagation(),
				hideChevron: !0
			}),
			/* @__PURE__ */ (0, z.jsx)(be, {
				checked: t.isFavourite,
				Icon: QS,
				label: U("room_list|more_options|favourited"),
				onSelect: e.onToggleFavorite,
				onClick: (e) => e.stopPropagation()
			}),
			/* @__PURE__ */ (0, z.jsx)(be, {
				checked: t.isLowPriority,
				Icon: Xx,
				label: U("room_list|more_options|low_priority"),
				onSelect: e.onToggleLowPriority,
				onClick: (e) => e.stopPropagation()
			}),
			/* @__PURE__ */ (0, z.jsx)(he, {}),
			t.canInvite && /* @__PURE__ */ (0, z.jsx)(N, {
				Icon: fw,
				label: U("action|invite"),
				onSelect: e.onInvite,
				onClick: (e) => e.stopPropagation(),
				hideChevron: !0
			}),
			t.canCopyRoomLink && /* @__PURE__ */ (0, z.jsx)(N, {
				Icon: mC,
				label: U("room_list|more_options|copy_link"),
				onSelect: e.onCopyRoomLink,
				onClick: (e) => e.stopPropagation(),
				hideChevron: !0
			}),
			t.areSectionsEnabled && /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [/* @__PURE__ */ (0, z.jsxs)(ge, {
				trigger: /* @__PURE__ */ (0, z.jsx)(N, {
					Icon: Qx,
					label: U("room_list|more_options|move_to_section"),
					onSelect: null
				}),
				children: [
					t.sections.map((t) => /* @__PURE__ */ (0, z.jsx)(N, {
						label: t.name,
						labelProps: { className: JW.sectionLabel },
						onSelect: () => e.onToggleSection(t.tag),
						onClick: (e) => e.stopPropagation(),
						hideChevron: !0,
						"aria-checked": t.isSelected,
						children: t.isSelected && /* @__PURE__ */ (0, z.jsx)(fS, {
							color: "var(--cpd-color-icon-tertiary)",
							width: "24px",
							height: "24px"
						})
					}, t.tag)),
					n && /* @__PURE__ */ (0, z.jsx)(he, {}),
					/* @__PURE__ */ (0, z.jsx)(N, {
						label: U("action|new_section"),
						onSelect: e.onCreateSection,
						hideChevron: !0
					})
				]
			}), r && /* @__PURE__ */ (0, z.jsx)(N, {
				Icon: EC,
				label: U("room_list|more_options|remove_from_section"),
				onSelect: e.onRemoveFromSection,
				onClick: (e) => e.stopPropagation(),
				hideChevron: !0
			})] }),
			/* @__PURE__ */ (0, z.jsx)(he, {}),
			/* @__PURE__ */ (0, z.jsx)(N, {
				kind: "critical",
				Icon: fC,
				label: U("room_list|more_options|leave_room"),
				onSelect: e.onLeaveRoom,
				onClick: (e) => e.stopPropagation(),
				hideChevron: !0
			})
		]
	});
}
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemWrapper/RoomListItemView/RoomListItemContextMenu.tsx
var ZW = ({ vm: e, children: t }) => /* @__PURE__ */ (0, z.jsx)(re, {
	title: U("room_list|room|more_options"),
	showTitle: !1,
	hasAccessibleAlternative: !0,
	trigger: t,
	children: /* @__PURE__ */ (0, z.jsx)(XW, { vm: e })
}), QW = ({ hasAnyNotificationOrActivity: e, muted: t, callType: n, isUnsentMessage: r, invited: i, isMention: a, isNotification: o, isActivityNotification: s, count: c }) => !e && !t && !n ? null : /* @__PURE__ */ (0, z.jsxs)(V, {
	align: "center",
	justify: "center",
	gap: "var(--cpd-space-1x)",
	"data-testid": "notification-decoration",
	children: [
		r && /* @__PURE__ */ (0, z.jsx)(HS, {
			width: "20px",
			height: "20px",
			fill: "var(--cpd-color-icon-critical-primary)"
		}),
		n === "video" && /* @__PURE__ */ (0, z.jsx)(vw, {
			width: "20px",
			height: "20px",
			fill: "var(--cpd-color-icon-accent-primary)"
		}),
		n === "voice" && /* @__PURE__ */ (0, z.jsx)(Ow, {
			width: "20px",
			height: "20px",
			fill: "var(--cpd-color-icon-accent-primary)"
		}),
		i && /* @__PURE__ */ (0, z.jsx)(BS, {
			width: "20px",
			height: "20px",
			fill: "var(--cpd-color-icon-accent-primary)"
		}),
		a && /* @__PURE__ */ (0, z.jsx)(wC, {
			width: "20px",
			height: "20px",
			fill: "var(--cpd-color-icon-accent-primary)"
		}),
		(a || o) && /* @__PURE__ */ (0, z.jsx)(Se, { count: c || null }),
		s && /* @__PURE__ */ (0, z.jsx)(xe, {}),
		t && /* @__PURE__ */ (0, z.jsx)(OC, {
			width: "20px",
			height: "20px",
			fill: "var(--cpd-color-icon-tertiary)"
		})
	]
}), $W = /* @__PURE__ */ function(e) {
	return e.AllMessages = "all_messages", e.AllMessagesLoud = "all_messages_loud", e.MentionsOnly = "mentions_only", e.Mute = "mute", e;
}({});
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemWrapper/RoomListItemView/RoomListItemNotificationMenu.tsx
function eG({ vm: e }) {
	let t = H(e), [n, r] = T(!1), i = t.roomNotifState === $W.Mute, a = /* @__PURE__ */ (0, z.jsx)(fS, {
		width: "24px",
		height: "24px",
		color: "var(--cpd-color-icon-primary)"
	});
	return /* @__PURE__ */ (0, z.jsx)(ue, {
		open: n,
		onOpenChange: r,
		title: U("room_list|notification_options"),
		showTitle: !1,
		align: "start",
		trigger: /* @__PURE__ */ (0, z.jsx)(M, {
			size: "24px",
			style: { padding: "2px" },
			tooltip: U("room_list|notification_options"),
			"aria-label": U("room_list|notification_options"),
			children: i ? /* @__PURE__ */ (0, z.jsx)(OC, {}) : /* @__PURE__ */ (0, z.jsx)(AC, {})
		}),
		children: /* @__PURE__ */ (0, z.jsxs)("div", {
			onKeyDown: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, z.jsx)(N, {
					"aria-selected": t.roomNotifState === $W.AllMessages,
					hideChevron: !0,
					label: U("notifications|default_settings"),
					onSelect: () => e.onSetRoomNotifState($W.AllMessages),
					onClick: (e) => e.stopPropagation(),
					children: t.roomNotifState === $W.AllMessages && a
				}),
				/* @__PURE__ */ (0, z.jsx)(N, {
					"aria-selected": t.roomNotifState === $W.AllMessagesLoud,
					hideChevron: !0,
					label: U("notifications|all_messages"),
					onSelect: () => e.onSetRoomNotifState($W.AllMessagesLoud),
					onClick: (e) => e.stopPropagation(),
					children: t.roomNotifState === $W.AllMessagesLoud && a
				}),
				/* @__PURE__ */ (0, z.jsx)(N, {
					"aria-selected": t.roomNotifState === $W.MentionsOnly,
					hideChevron: !0,
					label: U("notifications|mentions_keywords"),
					onSelect: () => e.onSetRoomNotifState($W.MentionsOnly),
					onClick: (e) => e.stopPropagation(),
					children: t.roomNotifState === $W.MentionsOnly && a
				}),
				/* @__PURE__ */ (0, z.jsx)(N, {
					"aria-selected": t.roomNotifState === $W.Mute,
					hideChevron: !0,
					label: U("notifications|mute_room"),
					onSelect: () => e.onSetRoomNotifState($W.Mute),
					onClick: (e) => e.stopPropagation(),
					children: t.roomNotifState === $W.Mute && a
				})
			]
		})
	});
}
var tG = {
	roomListItem: "_roomListItem_vaz9j_8",
	hoverMenu: "_hoverMenu_vaz9j_32",
	keyboardActive: "_keyboardActive_vaz9j_42",
	container: "_container_vaz9j_49",
	selected: "_selected_vaz9j_54",
	notificationDecoration: "_notificationDecoration_vaz9j_63",
	dragging: "_dragging_vaz9j_76",
	dragSource: "_dragSource_vaz9j_82",
	content: "_content_vaz9j_86",
	text: "_text_vaz9j_91",
	ellipsis: "_ellipsis_vaz9j_95",
	roomName: "_roomName_vaz9j_96",
	userStatusEmoji: "_userStatusEmoji_vaz9j_107",
	bold: "_bold_vaz9j_131",
	firstItem: "_firstItem_vaz9j_145",
	lastItem: "_lastItem_vaz9j_149"
}, nG = ({ showMoreOptionsMenu: e, showNotificationMenu: t, vm: n }) => /* @__PURE__ */ (0, z.jsxs)(V, {
	className: tG.hoverMenu,
	align: "center",
	gap: "var(--cpd-space-1x)",
	children: [e && /* @__PURE__ */ (0, z.jsx)(YW, { vm: n }), t && /* @__PURE__ */ (0, z.jsx)(eG, { vm: n })]
}), rG = p(function({ vm: e, renderAvatar: t, isDragging: n = !1 }) {
	let r = H(e);
	return /* @__PURE__ */ (0, z.jsxs)(V, {
		className: (0, R.default)(tG.container, { [tG.dragging]: n }),
		gap: "var(--cpd-space-3x)",
		align: "center",
		children: [t(r.room), /* @__PURE__ */ (0, z.jsxs)(V, {
			className: tG.content,
			gap: "var(--cpd-space-2x)",
			align: "center",
			justify: "space-between",
			children: [
				/* @__PURE__ */ (0, z.jsxs)("div", {
					className: tG.ellipsis,
					children: [/* @__PURE__ */ (0, z.jsxs)("div", {
						className: tG.roomName,
						title: r.name,
						"data-testid": "room-name",
						children: [r.name, r.userStatus && /* @__PURE__ */ (0, z.jsx)(F, {
							description: r.userStatus.text,
							children: /* @__PURE__ */ (0, z.jsx)(P, {
								as: "span",
								className: tG.userStatusEmoji,
								children: r.userStatus.emoji
							})
						})]
					}), r.messagePreview && /* @__PURE__ */ (0, z.jsx)(P, {
						as: "div",
						size: "sm",
						className: tG.ellipsis,
						title: r.messagePreview,
						children: r.messagePreview
					})]
				}),
				!n && (r.showMoreOptionsMenu || r.showNotificationMenu) && /* @__PURE__ */ (0, z.jsx)(nG, {
					showMoreOptionsMenu: r.showMoreOptionsMenu,
					showNotificationMenu: r.showNotificationMenu,
					vm: e
				}),
				/* @__PURE__ */ (0, z.jsx)("div", {
					className: tG.notificationDecoration,
					"aria-hidden": !0,
					children: /* @__PURE__ */ (0, z.jsx)(QW, { ...r.notification })
				})
			]
		})]
	});
});
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemWrapper/RoomListItemView/RoomListItemView.tsx
function iG(e, t) {
	return t.isUnsentMessage ? U("room_list|a11y|unsent_message", { roomName: e }) : t.invited ? U("room_list|a11y|invitation", { roomName: e }) : t.isMention && t.count ? U("room_list|a11y|mention", {
		roomName: e,
		count: t.count
	}) : t.hasUnreadCount && t.count ? U("room_list|a11y|unread", {
		roomName: e,
		count: t.count
	}) : t.callType === "voice" ? U("room_list|a11y|voice_call", { roomName: e }) : t.callType === "video" ? U("room_list|a11y|video_call", { roomName: e }) : U("room_list|a11y|default", { roomName: e });
}
var aG = p(function({ vm: e, isSelected: t, isFocused: n, onFocus: r, isFirstItem: i, isLastItem: a, renderAvatar: o, isDragSource: s = !1, ref: c, ...l }) {
	let u = w(null), d = NA([c, u]), f = H(e), [p, m] = T(!1);
	_(() => {
		n && u.current?.focus({ preventScroll: !0 });
	}, [n]);
	let h = (e) => {
		r(f.id, e), !e.currentTarget.contains(e.relatedTarget) && e.currentTarget.matches(":focus-visible") && m(!0);
	}, g = (e) => {
		!e.currentTarget.contains(e.relatedTarget) && !e.currentTarget.querySelector("[data-state=\"open\"]") && m(!1);
	}, v = iG(f.name, f.notification);
	return /* @__PURE__ */ (0, z.jsx)(ZW, {
		vm: e,
		children: /* @__PURE__ */ (0, z.jsx)(V, {
			as: "button",
			ref: d,
			className: (0, R.default)(tG.roomListItem, "mx_RoomListItemView", {
				[tG.keyboardActive]: p,
				[tG.selected]: t,
				[tG.bold]: f.isBold,
				[tG.firstItem]: i,
				[tG.lastItem]: a,
				[tG.dragSource]: s,
				mx_RoomListItemView_selected: t
			}),
			gap: "var(--cpd-space-3x)",
			align: "stretch",
			type: "button",
			"aria-label": v,
			onClick: e.onOpenRoom,
			onFocus: h,
			onBlur: g,
			tabIndex: n ? 0 : -1,
			"aria-selected": l.role === "option" ? t : void 0,
			...l,
			children: /* @__PURE__ */ (0, z.jsx)(rG, {
				vm: e,
				renderAvatar: o
			})
		})
	});
}), oG = p(function({ vm: e, isDragging: t = !1 }) {
	let { title: n, displaySectionMenu: r, notification: i, isExpanded: a } = H(e);
	return /* @__PURE__ */ (0, z.jsxs)(V, {
		className: (0, R.default)(qW.container, { [qW.dragging]: t }),
		align: "center",
		justify: "space-between",
		gap: "var(--cpd-space-2x)",
		children: [
			/* @__PURE__ */ (0, z.jsxs)(V, {
				align: "center",
				gap: "var(--cpd-space-0-5x)",
				children: [/* @__PURE__ */ (0, z.jsx)(vS, {
					className: qW.chevron,
					width: "24px",
					height: "24px",
					fill: "var(--cpd-color-icon-secondary)"
				}), /* @__PURE__ */ (0, z.jsx)("span", {
					className: qW.title,
					children: n
				})]
			}),
			!a && i && /* @__PURE__ */ (0, z.jsx)("div", {
				className: qW.notificationDecoration,
				"aria-hidden": !0,
				children: /* @__PURE__ */ (0, z.jsx)(QW, { ...i })
			}),
			r && !t && /* @__PURE__ */ (0, z.jsx)(sG, { vm: e })
		]
	});
});
function sG({ vm: e }) {
	let [t, n] = T(!1);
	return /* @__PURE__ */ (0, z.jsx)(ue, {
		open: t,
		onOpenChange: n,
		title: U("room_list|section_header|more_options"),
		showTitle: !1,
		align: "start",
		trigger: /* @__PURE__ */ (0, z.jsx)(M, {
			className: qW.menu,
			tooltip: U("room_list|section_header|more_options"),
			"aria-label": U("room_list|section_header|more_options"),
			size: "24px",
			style: { padding: "2px" },
			color: "var(--cpd-color-icon-primary)",
			children: /* @__PURE__ */ (0, z.jsx)(MC, { fill: "var(--cpd-color-icon-primary)" })
		}),
		children: /* @__PURE__ */ (0, z.jsxs)("div", {
			onKeyDown: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, z.jsx)(N, {
				hideChevron: !0,
				Icon: RS,
				label: U("room_list|section_header|edit_section"),
				onSelect: () => e.editSection(),
				onClick: (e) => e.stopPropagation()
			}), /* @__PURE__ */ (0, z.jsx)(N, {
				hideChevron: !0,
				Icon: OS,
				label: U("room_list|section_header|remove_section"),
				onSelect: () => e.removeSection(),
				onClick: (e) => e.stopPropagation()
			})]
		})
	});
}
//#endregion
//#region src/room-list/VirtualizedRoomListView/dragAndDrop.ts
function cG(e) {
	return e?.type === "section";
}
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListSectionHeaderView/RoomListSectionHeaderView.tsx
var lG = p(function({ vm: e, isFocused: t, onFocus: n, indexInList: r, sectionIndex: i, sectionCount: a, roomCountInSection: o }) {
	let { translate: s } = B(), { id: c, title: l, isExpanded: u, isUnread: d, canBeReordered: f } = H(e), p = i === a - 1, { ref: m, handleRef: h, isDragSource: g } = HU({
		id: c,
		data: {
			type: "section",
			index: i
		},
		plugins: [YV.configure({ feedback: "clone" })],
		modifiers: [GW],
		disabled: !f
	}), { source: v } = SW(), y = v?.data, b = cG(y), { ref: x, isDropTarget: S } = xW({
		id: c,
		data: {
			type: "section",
			index: i
		},
		disabled: g || b && !f
	}), C = S && y?.type === "room", E = S && b, ee = cG(y) ? y.index : -1, D = E && ee > i, te = E && !D, O = E && D, k = w(u);
	g || (k.current = u);
	let A = g ? k.current : u, ne = w(null), re = NA([
		...f ? [m, h] : [],
		x,
		ne
	]);
	_(() => {
		t && ne.current?.focus({ preventScroll: !0 });
	}, [t]);
	let [j, ie] = T(!1), ae = (e) => {
		n(c, e), !e.currentTarget.contains(e.relatedTarget) && e.currentTarget.matches(":focus-visible") && ie(!0);
	}, oe = (e) => {
		!e.currentTarget.contains(e.relatedTarget) && !e.currentTarget.querySelector("[data-state=\"open\"]") && ie(!1);
	};
	return /* @__PURE__ */ (0, z.jsx)("div", {
		"aria-expanded": A,
		...NW(r, i, o),
		children: /* @__PURE__ */ (0, z.jsx)("div", {
			role: "gridcell",
			"aria-expanded": A,
			children: /* @__PURE__ */ (0, z.jsx)("button", {
				ref: re,
				type: "button",
				className: (0, R.default)(qW.header, {
					[qW.keyboardActive]: j,
					[qW.firstHeader]: i === 0,
					[qW.lastHeader]: !u && p,
					[qW.unread]: d,
					[qW.dragSource]: g,
					[qW.dropTarget]: C,
					[qW.dropTargetBottom]: te,
					[qW.dropTargetTop]: O
				}),
				onClick: () => !g && e.onClick(),
				onKeyDown: (t) => {
					t.code === "ArrowRight" && !u || t.code === "ArrowLeft" && u ? (t.preventDefault(), t.stopPropagation(), e.onClick()) : t.code === "ArrowRight" && u && o > 0 && (t.preventDefault(), t.stopPropagation(), t.currentTarget.dispatchEvent(new KeyboardEvent("keydown", {
						code: "ArrowDown",
						key: "ArrowDown",
						bubbles: !0
					})));
				},
				"aria-expanded": A,
				onFocus: ae,
				onBlur: oe,
				tabIndex: t ? 0 : -1,
				"aria-label": s(d ? "room_list|section_header|toggle_unread" : "room_list|section_header|toggle", { section: l }),
				children: /* @__PURE__ */ (0, z.jsx)(oG, { vm: e })
			})
		})
	});
}), uG = p(function({ vm: e, isFirst: t }) {
	let { isExpanded: n, isUnread: r } = H(e);
	return /* @__PURE__ */ (0, z.jsx)("div", {
		className: qW.stickyBackground,
		"aria-hidden": !0,
		children: /* @__PURE__ */ (0, z.jsx)("button", {
			type: "button",
			className: (0, R.default)(qW.header, {
				[qW.firstHeader]: t,
				[qW.unread]: r
			}),
			"aria-expanded": n,
			onClick: e.onClick,
			tabIndex: -1,
			children: /* @__PURE__ */ (0, z.jsx)(oG, { vm: e })
		})
	});
}), dG = { dragOverlay: "_dragOverlay_s80l5_8" }, fG = p(function({ vm: e }) {
	return /* @__PURE__ */ (0, z.jsx)("div", {
		"aria-hidden": !0,
		className: (0, R.default)(qW.header, dG.dragOverlay),
		children: /* @__PURE__ */ (0, z.jsx)(oG, {
			vm: e,
			isDragging: !0
		})
	});
}), pG = p(function({ roomIndex: e, roomCount: t, roomIndexInSection: n, isInFlatList: r, ...i }) {
	if (r) return /* @__PURE__ */ (0, z.jsx)(aG, {
		...i,
		...MW("listbox", e, t)
	});
	let a = n === 0;
	return /* @__PURE__ */ (0, z.jsx)("div", {
		...MW("treegrid", e, n),
		children: /* @__PURE__ */ (0, z.jsx)("div", {
			role: "gridcell",
			"aria-selected": i.isSelected,
			children: /* @__PURE__ */ (0, z.jsx)(mG, {
				...i,
				onKeyDown: (e) => {
					e.code === "ArrowLeft" && a && (e.preventDefault(), e.stopPropagation(), e.currentTarget.dispatchEvent(new KeyboardEvent("keydown", {
						code: "ArrowUp",
						key: "ArrowUp",
						bubbles: !0
					})));
				}
			})
		})
	});
});
function mG(e) {
	let { ref: t, handleRef: n, isDragSource: r } = HU({
		id: H(e.vm).id,
		data: { type: "room" },
		plugins: [YV.configure({ feedback: "clone" })],
		modifiers: [GW]
	}), i = NA([t, n]);
	return /* @__PURE__ */ (0, z.jsx)(aG, {
		...e,
		ref: i,
		isDragSource: r
	});
}
var hG = { dragOverlay: "_dragOverlay_vsda5_8" }, gG = p(function({ vm: e, renderAvatar: t }) {
	return /* @__PURE__ */ (0, z.jsx)(V, {
		"aria-hidden": !0,
		className: (0, R.default)(tG.roomListItem, hG.dragOverlay),
		gap: "var(--cpd-space-3x)",
		align: "stretch",
		children: /* @__PURE__ */ (0, z.jsx)(rG, {
			vm: e,
			renderAvatar: t,
			isDragging: !0
		})
	});
});
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListAccessibilityPlugin.ts
function _G(e, t = "polite") {
	let n = document.createElement("div");
	return n.id = e, n.setAttribute("role", t === "assertive" ? "alert" : "status"), n.setAttribute("aria-live", t), n.setAttribute("aria-atomic", "true"), Object.assign(n.style, {
		position: "fixed",
		width: "1px",
		height: "1px",
		margin: "-1px",
		border: "0",
		padding: "0",
		overflow: "hidden",
		clip: "rect(0 0 0 0)",
		clipPath: "inset(100%)",
		whiteSpace: "nowrap"
	}), n;
}
function vG(e, t) {
	let n = document.createElement("div");
	return n.id = e, n.style.display = "none", n.textContent = t, n;
}
var yG = class extends xI {
	liveRegion;
	assertiveRegion;
	instructions;
	unsubscribers = [];
	constructor(e, t) {
		super(e, t);
		let n = crypto.randomUUID(), r = crypto.randomUUID(), i = crypto.randomUUID();
		this.liveRegion = _G(n), this.assertiveRegion = _G(r, "assertive"), document.body.append(this.liveRegion, this.assertiveRegion);
		let a = t?.announcements ?? {};
		for (let [t, n] of Object.entries(a)) {
			if (!n) continue;
			let r;
			r = t === "dragend" ? e.monitor.addEventListener("dragend", (e) => {
				let t = n(e);
				this.announceAssertive(t);
			}) : e.monitor.addEventListener(t, (e) => {
				this.announce(n(e));
			}), this.unsubscribers.push(r);
		}
		t?.instructions && (this.instructions = vG(i, t.instructions), document.body.append(this.instructions), this.registerEffect(() => {
			if (this.instructions) for (let e of this.manager.registry.draggables.value) {
				let t = e.handle ?? e.element;
				t && !t.hasAttribute("aria-describedby") && t.setAttribute("aria-describedby", i);
			}
		}));
	}
	announce(e) {
		!e || this.liveRegion.textContent === e || (this.liveRegion.textContent = e);
	}
	announceAssertive(e) {
		e && (this.assertiveRegion.textContent = "", this.assertiveRegion.textContent = e);
	}
	destroy() {
		super.destroy();
		for (let e of this.unsubscribers) e();
		this.unsubscribers.length = 0, this.liveRegion.remove(), this.assertiveRegion.remove(), this.instructions?.remove();
	}
};
function bG(e) {
	let { translate: t } = B(), n = h((t) => cG(t.data) ? e.getSectionHeaderViewModel(t.id).getSnapshot().title : e.getRoomItemViewModel(t.id)?.getSnapshot().name, [e]), r = S(() => ({
		dragstart: ({ operation: { source: e } }) => {
			if (!e) return;
			let r = n(e);
			if (r !== void 0) return t("room_list|a11y|drag_start", { source: r });
		},
		dragover: ({ operation: { source: r, target: i } }) => {
			if (!r) return;
			let a = n(r);
			if (a === void 0) return;
			if (cG(r.data) && !i) return t("room_list|a11y|drag_over_original", { source: a });
			if (!i) return;
			let o = e.getSectionHeaderViewModel(i.id).getSnapshot().title;
			return cG(r.data) && cG(i.data) ? r.data.index > i.data.index ? t("room_list|a11y|drag_over_before", {
				source: a,
				target: o
			}) : t("room_list|a11y|drag_over_after", {
				source: a,
				target: o
			}) : t("room_list|a11y|drag_over", {
				source: a,
				target: o
			});
		},
		dragend: ({ operation: { source: r, target: i }, canceled: a }) => {
			if (!r) return;
			if (a) return t("room_list|a11y|drag_cancelled");
			let o = n(r);
			if (o === void 0) return;
			if (cG(r.data) && !i) return t("room_list|a11y|drag_end_original", { source: o });
			if (!i) return;
			let s = e.getSectionHeaderViewModel(i.id).getSnapshot().title;
			return cG(r.data) && cG(i.data) ? r.data.index > i.data.index ? t("room_list|a11y|drag_end_before", {
				source: o,
				target: s
			}) : t("room_list|a11y|drag_end_after", {
				source: o,
				target: s
			}) : t("room_list|a11y|drag_end", {
				source: o,
				target: s
			});
		}
	}), [
		e,
		t,
		n
	]), i = t("room_list|a11y|drag_instructions");
	return h((e) => [...e.filter((e) => e !== tV), mI(yG, {
		announcements: r,
		instructions: i
	})], [r, i]);
}
var xG = { roomList: "_roomList_1yq7k_11" }, SG = 1300;
function CG({ vm: e, renderAvatar: t, onKeyDown: n }) {
	let { translate: r } = B(), { roomListState: i, sections: a, isFlatList: s } = H(e), c = i.activeRoomIndex, l = i.scrollToSectionTag, u = w(void 0), d = w(void 0), f = w(null), p = h((e) => {
		f.current = e;
	}, []), m = w(null), g = w(null), v = w(/* @__PURE__ */ new Map()), y = w(null), b = w(-1), C = h(() => {
		let t = -1;
		for (let [e, n] of v.current) {
			if (!n) continue;
			let r = Number(e.dataset.itemIndex);
			Number.isFinite(r) && r > t && (t = r);
		}
		t !== b.current && (b.current = t, e.updateVisibleFold(t));
	}, [e]), T = h((e) => {
		for (let t of e) v.current.set(t.target, t.isIntersecting);
		C();
	}, [C]), E = h(() => {
		let e = m.current, t = g.current;
		if (!e || !t) return;
		let n = new Set(e.querySelectorAll("[data-item-index]"));
		for (let e of n) v.current.has(e) || (t.observe(e), v.current.set(e, !1));
		for (let e of v.current.keys()) n.has(e) || (t.unobserve(e), v.current.delete(e));
		C();
	}, [C]), ee = h(() => {
		y.current === null && (y.current = requestAnimationFrame(() => {
			y.current = null, E();
		}));
	}, [E]), D = h((e) => {
		g.current?.disconnect(), g.current = null, v.current.clear(), b.current = -1, y.current !== null && (cancelAnimationFrame(y.current), y.current = null);
		let t = e instanceof HTMLElement ? e : null;
		m.current = t, t && (g.current = new IntersectionObserver(T, { root: t }), ee());
	}, [T, ee]), te = S(() => a.flatMap((e) => e.roomIds), [a]), O = te.length, k = a.length, A = O + k, ne = S(() => a.map((e) => ({
		header: e.id,
		items: e.roomIds
	})), [a]), re = h((e, t) => {
		let n, r, i = 0, o = 0;
		for (let s of a) {
			let a = i + s.roomIds.length;
			if (n === void 0 && e <= a && (n = o + Math.max(0, e - i - 1)), r === void 0 && t <= a && (r = o + Math.max(0, t - i)), n !== void 0 && r !== void 0) break;
			i = a + 1, o += s.roomIds.length;
		}
		return [n ?? 0, r ?? o];
	}, [a]), j = h((t) => {
		if (s) e.updateVisibleRooms(t.startIndex, t.endIndex + 1);
		else {
			let [n, r] = re(t.startIndex, t.endIndex);
			e.updateVisibleRooms(n, r);
		}
		ee();
	}, [
		e,
		ee,
		s,
		re
	]), ie = bG(e), ae = h((e, n, r, i, a, s) => {
		let { activeRoomIndex: c, roomCount: l, vm: u, isFlatList: d } = r.context, f = c === e, p = u.getRoomItemViewModel(n);
		if (!p) return /* @__PURE__ */ (0, z.jsx)(o.Fragment, {}, `stale-${e}`);
		let m = r.focused && r.tabIndexKey === n, h = d && e === 0, g = !!((d || a) && e === l - 1);
		return /* @__PURE__ */ (0, z.jsx)(pG, {
			vm: p,
			renderAvatar: t,
			isSelected: f,
			isFocused: m,
			onFocus: i,
			roomIndex: e,
			roomIndexInSection: s || 0,
			roomCount: l,
			isFirstItem: h,
			isLastItem: g,
			isInFlatList: d
		}, n);
	}, [t]), oe = h((e, t, n, r, i) => {
		let { sections: a } = n.context, o = a[i].roomIds.findIndex((e) => e === t), s = i === a.length - 1;
		return ae(e, t, n, r, s, o);
	}, [ae]), M = h((e, t, n, r) => ae(e, t, n, r), [ae]), se = h((e, t, n, r) => {
		let { vm: i, sectionCount: a, sections: o } = n.context, s = i.getSectionHeaderViewModel(t), c = o.slice(0, e).reduce((e, t) => e + t.roomIds.length + 1, 0), l = o[e].roomIds.length, u = n.focused && n.tabIndexKey === t;
		return /* @__PURE__ */ (0, z.jsx)(lG, {
			vm: s,
			isFocused: u,
			onFocus: r,
			indexInList: c,
			sectionIndex: e,
			sectionCount: a,
			roomCountInSection: l
		}, t);
	}, []), ce = h((e, t, n) => {
		let r = n.context.vm.getSectionHeaderViewModel(t);
		return /* @__PURE__ */ (0, z.jsx)(uG, {
			vm: r,
			isFirst: e === 0
		}, t);
	}, []), le = h((e) => e, []), ue = h((e) => e, []), N = S(() => ({
		spaceId: i.spaceId || "",
		filterKeys: i.filterKeys,
		sections: a,
		activeRoomIndex: c,
		roomCount: O,
		sectionCount: k,
		vm: e,
		isFlatList: s
	}), [
		i.spaceId,
		i.filterKeys,
		a,
		c,
		O,
		k,
		e,
		s
	]), de = h((e) => {
		let { spaceId: t, filterKeys: n } = e.context.context, r = u.current !== t || !fy(d.current, n);
		return d.current = n, u.current = t, r ? {
			align: "start",
			index: c || 0,
			behavior: "auto"
		} : !1;
	}, [c]);
	x(() => {
		if (l === void 0) return;
		let e = a.findIndex((e) => e.id === l);
		if (e === -1) return;
		let t = a.slice(0, e).reduce((e, t) => e + t.roomIds.length + 1, 0);
		f.current?.scrollIntoView({
			index: t,
			align: "start",
			behavior: "auto"
		});
	}, [l, a]), _(() => (e.setScrollToIndex((e) => f.current?.scrollIntoView({
		index: e,
		align: "center",
		behavior: "auto"
	})), () => e.setScrollToIndex(void 0)), [e]);
	let fe = h(() => !0, []), pe = h(() => !0, []), me = S(() => ({
		top: SG,
		bottom: SG
	}), []), he = {
		context: N,
		scrollIntoViewOnChange: de,
		...c === void 0 ? {} : { initialTopMostItemIndex: c },
		"data-testid": "room-list",
		"aria-label": r("room_list|list_title"),
		getItemKey: le,
		isItemFocusable: fe,
		rangeChanged: j,
		scrollerRef: D,
		onKeyDown: n,
		increaseViewportBy: me,
		className: xG.roomList
	};
	return s ? /* @__PURE__ */ (0, z.jsx)(DW, {
		...he,
		...jW("listbox"),
		scrollHandleRef: p,
		items: te,
		getItemComponent: M
	}) : /* @__PURE__ */ (0, z.jsxs)(RU, {
		onDragStart: (t) => {
			let { source: n } = t.operation;
			cG(n?.data) && e.onSectionDragStart();
		},
		onDragEnd: (t) => {
			let { source: n, target: r } = t.operation;
			cG(n?.data) && e.onSectionDragEnd(), !(t.canceled || !n || !r) && (cG(n.data) ? e.changeSectionOrder(String(n.id), String(r.id)) : e.changeRoomSection(String(n.id), String(r.id)));
		},
		sensors: [HH.configure({ activationConstraints(e) {
			return e.pointerType === "touch" ? [new RH.Delay({
				value: 250,
				tolerance: 5
			})] : [new RH.Distance({ value: 5 })];
		} }), jH.configure({
			offset: 17,
			keyboardCodes: {
				start: ["Space"],
				cancel: ["Escape"],
				end: ["Space"],
				up: ["ArrowUp"],
				down: ["ArrowDown"],
				left: ["ArrowLeft"],
				right: ["ArrowRight"]
			}
		})],
		plugins: ie,
		children: [/* @__PURE__ */ (0, z.jsx)(WU, {
			dropAnimation: null,
			children: /* @__PURE__ */ (0, z.jsx)(TG, {
				vm: e,
				renderAvatar: t
			})
		}), /* @__PURE__ */ (0, z.jsx)(wG, {
			...he,
			...jW("treegrid", A),
			scrollHandleRef: p,
			groups: ne,
			getHeaderKey: ue,
			getGroupHeaderComponent: se,
			getItemComponent: oe,
			isGroupHeaderFocusable: pe,
			renderStickyHeader: ce
		})]
	});
}
function wG(e) {
	let { source: t } = SW();
	return /* @__PURE__ */ (0, z.jsx)(AW, {
		...e,
		disableKeyboardNavigation: t !== null
	});
}
function TG({ vm: e, renderAvatar: t }) {
	let { source: n } = SW();
	if (!n) return null;
	if (cG(n.data)) {
		let t = e.getSectionHeaderViewModel(String(n.id));
		return /* @__PURE__ */ (0, z.jsx)(fG, { vm: t });
	}
	let r = e.getRoomItemViewModel(String(n.id));
	return r ? /* @__PURE__ */ (0, z.jsx)(gG, {
		vm: r,
		renderAvatar: t
	}) : null;
}
var EG = { toast: "_toast_vbkbz_8" };
//#endregion
//#region src/room-list/RoomListView/RoomListToast/RoomListToast.tsx
function DG({ type: e, onClose: t, onClick: n }) {
	let { translate: r } = B();
	if (e === "unread_activity") return /* @__PURE__ */ (0, z.jsx)(ye, {
		className: EG.toast,
		Icon: Xx,
		onClick: n,
		children: r("room_list|unread_messages")
	});
	let i = r(e === "section_created" ? "room_list|section_created" : "room_list|chat_moved");
	return /* @__PURE__ */ (0, z.jsx)(ye, {
		className: EG.toast,
		onClose: t,
		tooltip: r("action|close"),
		children: i
	});
}
var OG = {
	list: "_list_1hk4o_8",
	scrollbar: "_scrollbar_1hk4o_13"
}, kG = ({ vm: e, renderAvatar: t, onKeyDown: n }) => {
	let r = H(e), i;
	return i = r.isLoadingRooms ? /* @__PURE__ */ (0, z.jsx)(AN, {}) : r.isRoomListEmpty ? /* @__PURE__ */ (0, z.jsx)(MN, { vm: e }) : /* @__PURE__ */ (0, z.jsx)(CG, {
		vm: e,
		renderAvatar: t,
		onKeyDown: n
	}), /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [/* @__PURE__ */ (0, z.jsx)("div", { children: /* @__PURE__ */ (0, z.jsx)(ON, {
		filterIds: r.filterIds,
		activeFilterId: r.activeFilterId,
		onToggleFilter: e.onToggleFilter
	}) }), /* @__PURE__ */ (0, z.jsx)(V, {
		direction: "column",
		className: OG.list,
		children: /* @__PURE__ */ (0, z.jsxs)(_x, {
			className: OG.scrollbar,
			children: [i, r.toast && /* @__PURE__ */ (0, z.jsx)(DG, {
				type: r.toast,
				onClose: e.closeToast,
				onClick: e.scrollToUnreadActivity
			})]
		})
	})] });
}, AG = {
	"box-flex": "_box-flex_1odfs_9",
	"box-shrink": "_box-shrink_1odfs_13",
	"box-grow": "_box-grow_1odfs_17"
};
//#endregion
//#region src/core/utils/Box/Box.ts
function jG({ as: e = "div", flex: t = null, shrink: n = null, grow: r = null, className: i, children: a, ...s }) {
	let c = S(() => {
		let e = {};
		return t && (e["--mx-box-flex"] = t), n && (e["--mx-box-shrink"] = n), r && (e["--mx-box-grow"] = r), e;
	}, [
		t,
		r,
		n
	]);
	return o.createElement(e, {
		...s,
		className: (0, R.default)(i, {
			[AG["box-flex"]]: !!t,
			[AG["box-shrink"]]: !!n,
			[AG["box-grow"]]: !!r
		}),
		style: c
	}, a);
}
//#endregion
//#region src/resize/group/GroupView.tsx
function MG({ vm: e, children: t }) {
	return H(e), /* @__PURE__ */ (0, z.jsx)(Oe, {
		onLayoutChanged: (t) => {
			let n = t[IG];
			e.onLeftPanelResized(n);
		},
		children: t
	});
}
var NG = {
	separator: "_separator_1i4zc_8",
	activeSeparatorContainer: "_activeSeparatorContainer_1i4zc_31",
	activeSeparator: "_activeSeparator_1i4zc_31"
};
//#endregion
//#region src/resize/separator/SeparatorView.tsx
function PG({ vm: e, className: t }) {
	let { translate: n } = B(), { isCollapsed: r } = H(e), i = r ? "bar" : "border", a = /* @__PURE__ */ (0, z.jsx)(F, {
		description: n("left_panel|separator_label"),
		placement: "right",
		children: /* @__PURE__ */ (0, z.jsx)(IS, {
			width: "20px",
			height: "12px",
			viewBox: "3.999704360961914 8.999704360961914 16.000295639038086 6.000591278076172",
			transform: "rotate(90)"
		})
	}), o = /* @__PURE__ */ (0, z.jsx)("div", {
		className: NG.activeSeparatorContainer,
		children: /* @__PURE__ */ (0, z.jsx)("div", { className: NG.activeSeparator })
	});
	return /* @__PURE__ */ (0, z.jsx)(Ne, {
		className: (0, R.default)(NG.separator, t),
		onPointerUp: e.onPointerUp,
		onPointerMove: e.onPointerMove,
		onPointerDown: e.onPointerDown,
		"aria-label": n("left_panel|separator_label"),
		"data-separator-type": i,
		onDoubleClick: e.onDoubleClick,
		disableDoubleClick: !0,
		children: i === "bar" ? a : o
	});
}
//#endregion
//#region src/resize/panel/LeftResizablePanelView.tsx
function FG({ vm: e, className: t, children: n, ...r }) {
	let { initialSize: i, isCollapsed: a } = H(e), [o, s] = Pe();
	_(() => {
		o && e.setPanelHandle(o);
	}, [e, o]);
	let c = i === void 0 ? r.defaultSize : `${i}%`;
	return /* @__PURE__ */ (0, z.jsx)(je, {
		inert: a,
		id: IG,
		className: t,
		collapsible: !0,
		minSize: r.minSize,
		maxSize: r.maxSize,
		defaultSize: c,
		onResize: e.onLeftPanelResize,
		panelRef: s,
		groupResizeBehavior: "preserve-pixel-size",
		children: n
	});
}
//#endregion
//#region src/resize/index.ts
var IG = "left-panel", LG = l(null);
LG.displayName = "ToastContext";
function RG() {
	let e = g(LG);
	if (!e) throw Error("Component must be wrapped in <ToastContext.Provider /> to use useToastContext");
	return e;
}
function zG() {
	let e = S(() => new BG(), []), [t, n] = T(e.getActiveToast()), r = h(() => {
		n(e.getActiveToast());
	}, [n, e]);
	return _(() => {
		e.setCallback(r);
	}, [e, r]), [t, e];
}
var BG = class {
	currentToast;
	updateCallback;
	idSeq = 0;
	setCallback(e) {
		this.updateCallback = e;
	}
	displayToast(e) {
		let t = ++this.idSeq;
		return this.currentToast = {
			id: t,
			contents: e
		}, this.updateCallback?.(), () => {
			this.currentToast?.id === t && (this.currentToast = void 0, this.updateCallback?.());
		};
	}
	getActiveToast() {
		return this.currentToast?.contents;
	}
}, VG = class {
	get language() {
		return tx();
	}
	register(e) {
		let t = {};
		for (let n in e) for (let r in e[n]) t[r] = t[r] || {}, t[r][n] = e[n][r];
		for (let e in t) $b(e, t[e]);
	}
	translate(e, t, n) {
		return n ? U(e, t, n) : U(e, t);
	}
	humanizeTime = (e) => QA(e, this);
}, HG = {
	statusText: "_statusText_1mkte_8",
	menuStatusText: "_menuStatusText_1mkte_19"
}, UG = function({ status: e, ref: t, ...n }) {
	return /* @__PURE__ */ (0, z.jsxs)("div", {
		ref: t,
		...n,
		className: HG.statusText,
		children: [/* @__PURE__ */ (0, z.jsx)(P, {
			as: "span",
			className: HG.menuStatusEmoji,
			children: e.emoji
		}), /* @__PURE__ */ (0, z.jsx)(P, {
			as: "span",
			className: HG.menuStatusText,
			children: e.text
		})]
	});
};
//#endregion
//#region src/status/UserStatusIconView.tsx
function WG({ vm: e }) {
	let { status: t } = H(e);
	return t ? /* @__PURE__ */ (0, z.jsx)(F, {
		description: t.text,
		children: /* @__PURE__ */ (0, z.jsx)(P, {
			as: "span",
			children: t.emoji
		})
	}) : null;
}
//#endregion
export { Hj as ActionBarAction, Uj as ActionBarView, WM as AudioPlayerView, _x as AutoHideScrollbar, Ey as AvatarWithDetails, Aj as BACKWARD_LOADING_KEY, Kw as Banner, Ay as BaseViewModel, jG as Box, lM as CallDirection, cM as CallType, ef as Clock, EO as DEFAULT_EVENT_PRESENTATION, aj as DateSeparatorView, YM as DecryptionFailureBodyView, KM as DecryptionFailureReason, Gj as DisambiguatedProfileView, Dy as Disposables, OM as DmOngoingCallTileView, dM as DmTombstoneCallTileView, wM as DurationView, Zj as E2eMessageSharedIconView, Xj as E2ePadlock, qj as E2ePadlockIcon, Uw as EmojiPicker, tM as EncryptionEventState, nM as EncryptionEventView, vk as EventContentBodyView, OO as EventPresentationProvider, iM as EventPreviewView, eM as EventTileBubble, aM as EventTileView, jj as FORWARD_LOADING_KEY, Ww as FacePileView, jk as FileBodyView, kk as FileBodyViewInfoIcon, Ok as FileBodyViewState, DW as FlatVirtualizedList, V as Flex, MG as GroupView, AW as GroupedVirtualizedList, bk as HiddenBodyView, Sk as HiddenMediaPlaceholder, VA as HistoryVisibilityBadge, VG as I18nApi, cf as I18nContext, oA as ImageBodyView, iA as ImageBodyViewPlaceholder, rA as ImageBodyViewState, uA as ImageReplyBodyView, cA as ImageReplyBodyViewPlaceholder, Ly as KEY_SEPARATOR, IG as LEFT_PANEL_ID, GD as LINKIFIED_DATA_ATTRIBUTE, FG as LeftResizablePanelView, XD as LinkedText, JD as LinkedTextContext, BD as LinkifyMatrixOpaqueIdType, RD as LinkifyOptionalSlashProtocols, LD as LinkifySupportedProtocols, NM as MJitsiWidgetEventView, FM as MKeyVerificationRequestView, Dk as MediaBody, Py as MemberAvatarView, aO as MessageComposerUrlPreviewView, aN as MessageTimestampView, fA as MjolnirBodyView, jy as MockViewModel, XW as MoreOptionContent, CO as NotificationBadgeView, QW as NotificationDecoration, zD as PERMITTED_URL_SCHEMES, Ae as Panel, OA as Pill, FA as PillInput, LM as PinnedMessageBadge, lf as PlayPauseButton, tN as ReactionsRowButtonTooltipView, rN as ReactionsRowButtonView, eN as ReactionsRowView, TO as ReadMarker, wk as RedactedBodyView, ke as ResizableGroup, uN as RichItem, mN as RichList, zM as RoomAvatarEventView, MN as RoomListEmptyStateView, xN as RoomListHeaderView, rG as RoomListItemContent, ZW as RoomListItemContextMenu, gG as RoomListItemDragOverlayView, nG as RoomListItemHoverMenu, YW as RoomListItemMoreOptionsMenu, eG as RoomListItemNotificationMenu, aG as RoomListItemView, pG as RoomListItemWrapper, AN as RoomListLoadingSkeleton, ON as RoomListPrimaryFilters, CN as RoomListSearchView, oG as RoomListSectionHeaderContent, lG as RoomListSectionHeaderView, uG as RoomListStickySectionHeaderView, DG as RoomListToast, kG as RoomListView, $W as RoomNotifState, TM as RoomOngoingCallTileView, LA as RoomStatusBarState, RA as RoomStatusBarView, sM as RoomTombstoneCallTileView, MM as RootCallTileView, xx as RovingAction, Hx as RovingGridIndexProvider, bx as RovingStateActionType, yx as RovingTabIndexContext, Px as RovingTabIndexProvider, Wx as RovingTabIndexWrapper, lO as SasEmoji, Cy as SeekBar, Me as Separator, PG as SeparatorView, bO as SetStatusView, Oy as Snapshot, UG as StatusTextView, bA as TextualBodyView, vA as TextualBodyViewBodyWrapperKind, _A as TextualBodyViewKind, VM as TextualEventView, ZM as ThreadMessagePreviewView, QM as ThreadSummaryView, EA as TileErrorView, GA as TimelineSeparator, zj as TimelineView, LG as ToastContext, BG as ToastRack, Kx as Toolbar, SA as UnknownBodyView, qw as UploadButton, cN as UrlPreviewGroupView, xO as UserMenu, WG as UserStatusIconView, hA as VideoBodyView, mA as VideoBodyViewState, ky as ViewModelSubscriptions, wA as ViewSourceEventView, CG as VirtualizedRoomListView, Ee as VirtuosoMockContext, HA as WidgetContextMenuView, BA as WidgetPipView, U as _t, lx as _tDom, rx as _td, vx as checkInputableElement, e as clamp, t as defaultNumber, UD as findLinksInString, Dx as findNextSiblingElement, Ox as findPreviousSiblingElement, UM as formatBytes, Xd as formatDateForInput, Yd as formatSeconds, HD as generateLinkedTextOptions, jW as getContainerAccessibleProps, NW as getGroupHeaderAccessibleProps, MW as getItemAccessibleProps, hx as getLangsJson, tx as getLocale, Iy as getNormalizedLanguageKeys, $A as humanizeRelativeTime, QA as humanizeTime, WD as isLinkable, kD as linkifyHtml, cD as linkifyString, cx as lookupString, Fy as normalizeLanguageKey, n as percentageOf, r as percentageWithin, $b as registerTranslations, fx as replaceByRegexes, ux as sanitizeForTranslation, px as setLanguage, nx as setLocale, ex as setMissingEntryGenerator, dx as substitute, i as sum, zG as useActiveToast, wN as useCollapseFilters, My as useCreateAutoDisposedViewModel, kO as useEventPresentation, B as useI18n, YD as useLinkedTextContext, Ny as useMockedViewModel, Fx as useRovingTabIndex, RG as useToastContext, H as useViewModel, TN as useVisibleFilters };
