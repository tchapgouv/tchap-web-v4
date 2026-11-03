import { clamp as e, defaultNumber as t, percentageOf as n, percentageWithin as r, sum as i } from "./numbers.js";
import * as a from "react";
import o, { Children as s, cloneElement as c, createContext as l, createElement as u, forwardRef as d, isValidElement as f, memo as p, startTransition as m, useCallback as h, useContext as g, useEffect as _, useId as v, useImperativeHandle as y, useInsertionEffect as b, useLayoutEffect as x, useMemo as S, useReducer as C, useRef as w, useState as T, useSyncExternalStore as ee, version as te } from "react";
import { Fragment as E, jsx as D, jsxs as O } from "react/jsx-runtime";
import { Avatar as ne, AvatarStack as k, Badge as re, Button as A, ChatFilter as j, CheckboxMenuItem as ie, ContextMenu as ae, Dropdown as oe, ErrorMessage as se, Field as ce, Form as le, H1 as ue, H2 as de, H3 as fe, Heading as pe, HelpMessage as me, IconButton as M, IndicatorIcon as he, InlineSpinner as ge, Label as _e, Link as ve, Menu as ye, MenuItem as N, MenuTitle as be, RadioMenuItem as xe, ReleaseAnnouncement as Se, Root as Ce, Separator as we, SubMenu as Te, Submit as Ee, Text as P, TextControl as De, Toast as Oe, ToggleMenuItem as ke, Tooltip as Ae, Unread as je, UnreadCounter as Me, useIdColorHash as Ne } from "@vector-im/compound-web";
import { DATA_BY_CATEGORY as Pe, getEmojiFromUnicode as Fe } from "@matrix-org/emojibase-bindings";
import { Virtuoso as Ie, VirtuosoMockContext as Le } from "react-virtuoso";
import Re, { Text as ze } from "html-react-parser";
import { flushSync as Be } from "react-dom";
import { Group as Ve, Group as He, Panel as Ue, Panel as We, Separator as Ge, Separator as Ke, usePanelCallbackRef as qe } from "react-resizable-panels";
//#region \0rolldown/runtime.js
var Je = Object.create, Ye = Object.defineProperty, Xe = Object.getOwnPropertyDescriptor, Ze = Object.getOwnPropertyNames, Qe = Object.getPrototypeOf, $e = Object.prototype.hasOwnProperty, F = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), et = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = Ze(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !$e.call(e, s) && s !== n && Ye(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = Xe(t, s)) || r.enumerable
	});
	return e;
}, tt = (e, t, n) => (n = e == null ? {} : Je(Qe(e)), et(t || !e || !e.__esModule || !$e.call(e, "default") ? Ye(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), nt = globalThis.Temporal, rt = (e, t) => `Non-positive ${e}: ${t}`, it = (e, t) => `Non-finite ${e}: ${t}`, at = (e) => `Cannot convert bigint to ${e}`, ot = "Invalid object", st = (e, t, n, r) => ct(e, t) + `; must be between ${n}-${r}`, ct = (e, t) => `Invalid ${e}: ${t}`, lt = 1e3, ut = 1e6, dt = 1e9, ft = 6e10, pt = 36e11;
function mt(e) {
	return e === void 0 ? Object.create(null) : xt(e);
}
function ht(e, t = "number") {
	if (typeof e == "bigint") throw TypeError(at(t));
	if (e = Number(e), !Number.isFinite(e)) throw RangeError(it(t, e));
	return e;
}
function gt(e, t) {
	return Math.trunc(ht(e, t)) || 0;
}
function _t(e, t) {
	return vt(gt(e, t), t);
}
function vt(e, t = "number") {
	if (e <= 0) throw RangeError(rt(t, e));
	return e;
}
function yt(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
function bt(e) {
	return e !== null && (typeof e == "object" || typeof e == "function");
}
function xt(e) {
	if (!bt(e)) throw TypeError(ot);
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/temporal-polyfill@1.0.5/node_modules/temporal-polyfill/chunks/options.js
function St(e, t) {
	return typeof e == "string" ? ((e, t) => {
		let n = Object.create(null);
		return n[e] = t, n;
	})(t, e) : xt(e);
}
var Ct = "smallestUnit", wt = {
	constrain: 0,
	reject: 1
}, Tt = {
	compatible: 0,
	reject: 1,
	earlier: 2,
	later: 3
}, Et = {
	reject: 0,
	use: 1,
	prefer: 2,
	ignore: 3
}, Dt = {
	auto: 0,
	never: 1,
	critical: 2,
	always: 3
}, Ot = {
	auto: 0,
	never: 1,
	critical: 2
}, kt = {
	auto: 0,
	never: 1
}, At = {
	floor: 0,
	halfFloor: 1,
	ceil: 2,
	halfCeil: 3,
	trunc: 4,
	halfTrunc: 5,
	expand: 6,
	halfExpand: 7,
	halfEven: 8
}, jt = [
	Math.floor,
	sr,
	Math.ceil,
	cr,
	Math.trunc,
	lr,
	ir,
	or,
	ur
], Mt = {
	previous: -1,
	next: 1
};
function Nt(e) {
	let t = e.roundingIncrement;
	return t === void 0 ? 1 : gt(t, "roundingIncrement");
}
function Pt(e) {
	let t = e.fractionalSecondDigits;
	if (t !== void 0) {
		if (typeof t != "number") {
			if (xa(t) === "auto") return;
			L(fn("fractionalSecondDigits", t));
		}
		t = kn("fractionalSecondDigits", Math.floor(t), 0, 9, 1);
	}
	return t;
}
function Ft(e, t, n = 0, r) {
	let i = t[e];
	if (i === void 0) return r ? n : void 0;
	if (i = xa(i), i === "auto") return r ? n : null;
	let a = br[i];
	return a === void 0 && (a = ca.indexOf(i)), a < 0 && L(hn(e, i, br)), a;
}
function It(e, t, n, r = 0) {
	let i = n[e];
	if (i === void 0) return r;
	let a = xa(i), o = t[a];
	return o === void 0 && L(hn(e, a, t)), o;
}
var Lt = /*@__PURE__*/ Bn(Ft, Ct), Rt = /*@__PURE__*/ Bn(Ft, "largestUnit"), zt = /*@__PURE__*/ Bn(Ft, "unit"), Bt = /*@__PURE__*/ Bn(It, "overflow", wt), Vt = /*@__PURE__*/ Bn(It, "disambiguation", Tt), Ht = /*@__PURE__*/ Bn(It, "offset", Et), Ut = /*@__PURE__*/ Bn(It, "calendarName", Dt), Wt = /*@__PURE__*/ Bn(It, "timeZoneName", Ot), Gt = /*@__PURE__*/ Bn(It, "offset", kt), Kt = /*@__PURE__*/ Bn(It, "roundingMode", At), qt = /*@__PURE__*/ Bn(It, "direction", Mt);
function Jt(e, t, n, r) {
	let i = r ? Dr : Or[t + 1];
	if (i) {
		let n = Or[t];
		i % ((e = kn("roundingIncrement", e, 1, i / n - +!r, 1)) * n) && L(fn("roundingIncrement", e));
	} else e = kn("roundingIncrement", e, 1, n ? 10 ** 9 : 1, 1);
	return e;
}
function Yt(e, t, n, r) {
	return t != null && kn(e, t, n, r, 1, xr), t;
}
function Xt(e, t) {
	t > e && L("smallestUnit > largestUnit");
}
function Zt(e, t, n, r = 9, i = 0, a = 4) {
	t = mt(t);
	let o = Rt(t, i), s = Nt(t), c = Kt(t, a), l = Lt(t, i, 1);
	return o = Yt("largestUnit", o, i, r), l = Yt(Ct, l, i, r), o == null ? o = Math.max(n, l) : Xt(o, l), s = Jt(s, l, 1), e && (c = ((e) => e < 4 ? (e + 2) % 4 : e)(c)), [
		o,
		l,
		s,
		c
	];
}
function Qt(e, t, n) {
	e = St(e, Ct);
	let r = Rt(e), i = n(e.relativeTo), a = Nt(e), o = Kt(e, 7), s = Lt(e);
	return r === void 0 && s === void 0 && L("Required smallestUnit or largestUnit"), s ??= 0, r ??= Math.max(s, t), Xt(r, s), a = Jt(a, s, 1), a > 1 && s > 5 && r !== s && L("For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit"), [
		r,
		s,
		a,
		o,
		i
	];
}
function $t(e, t = 6, n) {
	let r = Nt(e = St(e, Ct)), i = Kt(e, 7), a = Lt(e);
	return a = _a(Ct, a), a = Yt(Ct, a, 0, t), r = Jt(r, a, void 0, n), [
		a,
		r,
		i
	];
}
function en(e, t) {
	let n = t((e = St(e, "unit")).relativeTo), r = zt(e);
	return r = _a("unit", r), [r, n];
}
function I(e) {
	return e === void 0 ? 0 : Bt(xt(e));
}
function tn(e, t = 0) {
	e = mt(e);
	let n = Vt(e), r = Ht(e, t);
	return [
		Bt(e),
		r,
		n
	];
}
function nn(e) {
	return Vt(mt(e));
}
function rn(e, t = 4) {
	let n = Pt(e);
	return [Kt(e, 4), ...un(Yt(Ct, Lt(e), 0, t), n)];
}
function an(e) {
	return e = mt(e), [Ut(e), ...rn(e)];
}
function on(e) {
	return Ut(mt(e));
}
function sn(e, t) {
	return rn(mt(e), t);
}
function cn(e) {
	e = mt(e);
	let t = Ut(e), n = Pt(e), r = Gt(e), i = Kt(e, 4), a = Lt(e);
	return [
		t,
		Wt(e),
		r,
		i,
		...un(Yt(Ct, a, 0, 4), n)
	];
}
function ln(e) {
	let t = Pt(e = mt(e)), n = Kt(e, 4), r = Lt(e);
	return [
		e.timeZone,
		n,
		...un(Yt(Ct, r, 0, 4), t)
	];
}
function un(e, t) {
	return e == null ? [t === void 0 ? 1 : 10 ** (9 - t), t] : [Or[e], e < 4 ? 9 - 3 * e : -1];
}
function dn(e) {
	let t = qt(St(e, "direction"), 0);
	return t || L(fn("direction", t)), t;
}
//#endregion
//#region ../../node_modules/.pnpm/temporal-polyfill@1.0.5/node_modules/temporal-polyfill/chunks/internal.js
var fn = ct, pn = (e) => `Missing ${e}`, mn = (e) => "No valid fields: " + e.join(), hn = (e, t, n) => ct(e, t) + "; must be " + Object.keys(n).join(), gn = "Cannot use valueOf", _n = "Invalid calling context", vn = (e) => "Missing year" + (e ? "/era/eraYear" : ""), yn = "Invalid leap month", bn = (e) => ct("Calendar", e), xn = (e, t) => `Unknown calendar ${e}; might need ${t}`, Sn = (e) => ct("TimeZone", e), Cn = (e) => `Cannot parse: ${e}`, wn = (e) => `Invalid substring: ${e}`, Tn = yt, En = bt;
function L(e) {
	throw RangeError(e);
}
function Dn(e) {
	throw TypeError(e);
}
function On(e, t, n, r, i) {
	return kn(t, ((e, t) => {
		let n = e[t];
		return n === void 0 && Dn(pn(t)), n;
	})(e, t), n, r, i);
}
function kn(e, t, n, r, i, a) {
	let o = Tn(t, n, r);
	return i && t !== o && L(((e, t, n, r, i) => i ? st(e, i[t], i[n], i[r]) : st(e, t, n, r))(e, t, n, r, a)), o;
}
function An(e, t = Map) {
	let n = new t();
	return (t, ...r) => {
		if (n.has(t)) return n.get(t);
		let i = e(t, ...r);
		return n.set(t, i), i;
	};
}
var jn = (e) => Mn({ name: e }, 1), Mn = (e, t) => Pn((e) => ({
	value: e,
	configurable: 1,
	writable: !t
}), e), Nn = (e) => ({ [Symbol.toStringTag]: {
	value: e,
	configurable: 1
} });
function Pn(e, t) {
	let n = {};
	for (let r in t) n[r] = e(t[r], r);
	return n;
}
function Fn(e, t) {
	let n = {};
	for (let r of e) n[r] = t;
	return n;
}
function In(e) {
	let t = {};
	for (let n of e) t[n] = (e) => e[n];
	return t;
}
function Ln(e, t, n = Object.create(null)) {
	for (let r of e) n[r] = t[r];
	return n;
}
function Rn(e, t, n) {
	for (let r of e) if (t[r] !== n[r]) return 0;
	return 1;
}
function zn(e, t, n) {
	let r = { ...n };
	for (let n = 0; n < t; n++) r[e[n]] = 0;
	return r;
}
function Bn(e, ...t) {
	return (...n) => e(...t, ...n);
}
function Vn() {}
function Hn(e) {
	return e[0].toUpperCase() + e.substring(1);
}
function Un(...e) {
	return [].concat(...e).sort();
}
function Wn(e) {
	return RegExp(`^${e}$`, "i");
}
function Gn(e) {
	return parseInt(e.padEnd(9, "0"));
}
function Kn(e) {
	return e && e !== "+" ? -1 : 1;
}
function qn(e) {
	return e === void 0 ? 0 : parseInt(e);
}
function Jn(e, t) {
	return String(t).padStart(e, "0");
}
var Yn = /*@__PURE__*/ Bn(Jn, 2);
function Xn(e, t) {
	return Math.sign(e - t);
}
function Zn(e, t) {
	return e < t ? -1 : +(e > t);
}
function Qn(e, t) {
	let n = e / t;
	return e % t < 0n ? n - 1n : n;
}
function $n(e, t) {
	let n = Qn(e, t);
	return [n, e - n * t];
}
function er(e, t) {
	return [Math.floor(e / t), tr(e, t)];
}
function tr(e, t) {
	return (e % t + t) % t;
}
function nr(e, t) {
	return Math.trunc(e / t) || 0;
}
function rr(e, t) {
	return e % t || 0;
}
function ir(e) {
	return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function ar(e, t = 1) {
	return t * (.5 + e / 5);
}
function or(e) {
	return Math.sign(e) * Math.round(Math.abs(e)) || 0;
}
function sr(e) {
	return dr(e) ? Math.floor(e) : Math.round(e);
}
function cr(e) {
	return dr(e) ? Math.ceil(e) : Math.round(e);
}
function lr(e) {
	return dr(e) ? Math.trunc(e) || 0 : Math.round(e);
}
function ur(e) {
	return dr(e) ? (e = Math.trunc(e) || 0) + e % 2 : Math.round(e);
}
function dr(e) {
	return Math.abs(e % 1) === .5;
}
var fr = "iso8601", pr = {
	bce: -1,
	ce: 0
};
function mr(e) {
	let t = e.normalize("NFD").toLowerCase().replace(/[^a-z0-9]/g, "");
	return t === "bc" || t === "b" ? "bce" : t === "ad" || t === "a" ? "ce" : t;
}
function hr(e) {
	return e === void 0 ? "iso8601" : e === 0 ? "gregory" : e.id;
}
var gr = /^M(\d{2})(L?)$/;
function _r(e) {
	let t = gr.exec(e);
	return t || L(((e) => `Invalid monthCode: ${e}`)(e)), [parseInt(t[1]), !!t[2]];
}
function vr(e, t) {
	return "M" + Yn(e) + (t ? "L" : "");
}
function yr(e, t, n) {
	return e + (t || n && e >= n ? 1 : 0);
}
var br = {
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
}, xr = /*@__PURE__*/ Object.keys(br), Sr = lt, Cr = ut, wr = dt, Tr = ft, Er = pt, Dr = 864e11, Or = [
	1,
	Sr,
	Cr,
	wr,
	Tr,
	Er,
	Dr
], kr = /*@__PURE__*/ BigInt(Sr), Ar = /*@__PURE__*/ BigInt(Cr), jr = /*@__PURE__*/ BigInt(wr), Mr = /*@__PURE__*/ BigInt(Tr), Nr = /*@__PURE__*/ BigInt(Er), Pr = /*@__PURE__*/ BigInt(Dr);
function Fr(e, t) {
	let n = Number(e / Pr), r = Number(e % Pr);
	return Dr / t * n + (Math.trunc(r / t) + r % t / t);
}
var Ir = /*@__PURE__*/ xr.slice(0, 6), Lr = /*@__PURE__*/ In(Ir), Rr = ["year"], zr = ["day"], Br = [
	"day",
	"month",
	"year"
], Vr = ["offset"], Hr = ["timeZone"], Ur = ["era", "eraYear"], Wr = [
	"era",
	"eraYear",
	"year"
], Gr = ["month", "monthCode"], Kr = [
	"day",
	"month",
	"monthCode"
], qr = /*@__PURE__*/ Un(Ir), Jr = /*@__PURE__*/ Un(Ur, Rr), Yr = /*@__PURE__*/ Un(Gr, Rr), Xr = /*@__PURE__*/ Un(Ur, Yr), Zr = /*@__PURE__*/ Un(["monthCode"], Rr), Qr = /*@__PURE__*/ Un(Ur, Zr), $r = /*@__PURE__*/ Un(zr, ["monthCode"]), ei = /*@__PURE__*/ Un(zr, Yr), ti = /*@__PURE__*/ Un(zr, Ur, Yr), ni = /*@__PURE__*/ Un(ei, Ir), ri = /*@__PURE__*/ Un(ti, Ir), ii = /*@__PURE__*/ Un(ei, Ir, Vr), ai = /*@__PURE__*/ Un(ti, Ir, Vr), oi = /*@__PURE__*/ Un(ei, Ir, Vr, Hr), si = /*@__PURE__*/ Un(ti, Ir, Vr, Hr), ci = /*@__PURE__*/ Un(zr, Zr), li = /*@__PURE__*/ Un(zr, Ur, Zr), ui = /*@__PURE__*/ Fn(Ir, 0);
function di(e) {
	return pi(e, 1), e;
}
var fi = {
	hour: 23,
	minute: 59,
	second: 59
};
function pi(e, t) {
	let n = {};
	for (let r of Ir) n[r] = kn(r, e[r], 0, fi[r] || 999, t);
	return n;
}
function mi(e) {
	return gi(e) * wr + _i(e);
}
function hi(e) {
	return 1e3 * gi(e) + e.millisecond;
}
function gi(e) {
	return 3600 * e.hour + 60 * e.minute + e.second;
}
function _i(e) {
	return e.millisecond * Cr + e.microsecond * Sr + e.nanosecond;
}
function vi(e) {
	let [t, n] = er(e, Dr);
	return [yi(n), t];
}
function yi(e) {
	let [t, n] = er(e, Cr), [r, i] = er(n, Sr);
	return bi(t, r, i);
}
function bi(e, t = 0, n = 0) {
	let [r, i] = er(e, 36e5), [a, o] = er(i, 6e4), [s, c] = er(o, 1e3);
	return {
		hour: r,
		minute: a,
		second: s,
		millisecond: c,
		microsecond: t,
		nanosecond: n
	};
}
function xi(e) {
	let [t, n] = $n(e, jr);
	return [Number(t), Number(n)];
}
function Si(e) {
	return Number(Qn(e, Ar));
}
function Ci(e) {
	return Ti(e) + BigInt(mi(e));
}
function wi(e) {
	return Ei(e) + hi(e);
}
function Ti(e) {
	return BigInt(Di(e)) * Pr;
}
function Ei(e) {
	return 864e5 * Di(e);
}
function Di(e) {
	return Oi(e.year, e.month, e.day);
}
function Oi(e, t = 1, n = 1) {
	let r = t - 1;
	return e += Math.floor(r / 12), t = tr(r, 12), Date.UTC(e % 400 - 400, t, 0) / 864e5 + 146097 * (nr(e, 400) + 1) + n;
}
function ki(e) {
	let [t, n] = $n(e, Pr);
	return {
		...Ai(Number(t)),
		...yi(Number(n))
	};
}
function Ai(e) {
	let t = /* @__PURE__ */ new Date(864e5 * tr(e, 146097));
	return {
		year: t.getUTCFullYear() + 400 * Math.floor(e / 146097),
		month: t.getUTCMonth() + 1,
		day: t.getUTCDate()
	};
}
function ji(e) {
	return [e, 0];
}
function Mi(e, t) {
	if (!t) return {
		year: 1972,
		month: e
	};
}
function Ni(e, t, n) {
	return {
		year: e,
		month: t,
		day: n
	};
}
function Pi(e, t) {
	switch (t) {
		case 2: return Ii(e) ? 29 : 28;
		case 4:
		case 6:
		case 9:
		case 11: return 30;
	}
	return 31;
}
function Fi(e) {
	return Ii(e) ? 366 : 365;
}
function Ii(e) {
	return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function Li(e, t, n) {
	return e += nr(n, 12), (t += rr(n, 12)) < 1 ? (e--, t += 12) : t > 12 && (e++, t -= 12), {
		year: e,
		month: t
	};
}
function Ri(e, t, n, r) {
	return 12 * (n - e) + r - t;
}
function zi(e) {
	return tr(Oi(e.year, e.month, e.day) + 4, 7) || 7;
}
function Bi(e) {
	return Oi(e.year, e.month, e.day) - Oi(e.year) + 1;
}
function Vi(e) {
	let t = e.year, n = Math.floor((Bi(e) - zi(e) + 10) / 7), r = Hi(t);
	return n < 1 ? n = r = Hi(--t) : n > r && (n = 1, r = Hi(++t)), {
		weekOfYear: n,
		yearOfWeek: t,
		De: r
	};
}
function Hi(e) {
	let t = zi({
		year: e,
		month: 1,
		day: 1
	});
	return t === 4 || t === 3 && Ii(e) ? 53 : 52;
}
function Ui({ year: e }) {
	return e < 1 ? {
		era: "bce",
		eraYear: 1 - e
	} : {
		era: "ce",
		eraYear: e
	};
}
function Wi(e) {
	return Gi(e), di(e);
}
function Gi(e) {
	return qi(e, 1), e;
}
function Ki(e) {
	return Rn(Br, e, qi(e));
}
function qi(e, t) {
	let { year: n } = e, r = On(e, "month", 1, 12, t);
	return {
		year: n,
		month: r,
		day: On(e, "day", 1, Pi(n, r), t)
	};
}
function Ji(e, t) {
	return e ? e.de(t) : t;
}
function Yi(e, t, n) {
	return e ? e.N(t, n) : ji(n);
}
function Xi(e, t) {
	return e === 0 ? Ui(t) : e && e.h?.(t) || {};
}
function Zi(e, t, n, r) {
	return e ? e.fe(t, n, r) : Ni(t, n, r);
}
function Qi(e, t) {
	return e ? e.j(t) : 12;
}
function $i(e, t, n) {
	return e ? e.o(t, n) : Pi(t, n);
}
function ea(e, t) {
	let { year: n, month: r } = Ji(e, t), [i, a] = Yi(e, n, r);
	return vr(i, a);
}
function ta(e, t) {
	let { year: n } = Ji(e, t);
	return e ? e.q(n) : Ii(n);
}
function na(e, t) {
	let { year: n } = Ji(e, t);
	return Qi(e, n);
}
function ra(e, t) {
	let { year: n, month: r } = Ji(e, t);
	return $i(e, n, r);
}
function ia(e, t) {
	let { year: n } = Ji(e, t);
	return e ? e.i(n) : Fi(n);
}
function aa(e, t) {
	if (!e) return Bi(t);
	let { year: n } = Ji(e, t), r = Zi(e, n, 1, 1);
	return Di(t) - Di(r) + 1;
}
function oa(e, t) {
	return e === void 0 ? Vi(t).weekOfYear : void 0;
}
function sa(e, t) {
	return e === void 0 ? Vi(t).yearOfWeek : void 0;
}
var ca = /*@__PURE__*/ xr.map((e) => e + "s"), la = /*@__PURE__*/ In(ca), ua = /*@__PURE__*/ Un(ca), da = /*@__PURE__*/ ca.slice(0, 6), fa = /*@__PURE__*/ ca.slice(6), pa = /*@__PURE__*/ fa.slice(1), ma = /*@__PURE__*/ Fn(ca, 0), ha = /*@__PURE__*/ Fn(da, 0), ga = /*@__PURE__*/ Bn(zn, ca);
function _a(e, t) {
	return t ?? L(pn(e)), t;
}
var va = /*@__PURE__*/ Bn(ya, "string");
function ya(e, t, n = e) {
	return typeof t !== e && Dn(fn(n, t)), t;
}
function ba(e, t = "number") {
	return Number.isInteger(e) || L(((e, t) => `Non-integer ${e}: ${t}`)(t, e)), e || 0;
}
function xa(e) {
	return typeof e == "symbol" && Dn("Cannot convert Symbol to string"), String(e);
}
function Sa(e) {
	if (!bt(e)) return e;
	let t = e[Symbol.toPrimitive];
	if (t != null) {
		typeof t != "function" && Dn();
		let n = Reflect.apply(t, e, ["string"]);
		return bt(n) && Dn(), n;
	}
	return Date.prototype[Symbol.toPrimitive].call(e, "string");
}
function Ca(e) {
	return typeof e == "boolean" ? BigInt(+!!e) : typeof e == "string" ? BigInt(e) : (typeof e != "bigint" && Dn(`Invalid bigint: ${e}`), e);
}
function wa(e, t) {
	return ba(ht(e, t), t);
}
function Ta(e, t) {
	return Ln(Br, e, Ln(Ir, t));
}
var Ea = /*@__PURE__*/ BigInt(1e8) * Pr, Da = /*@__PURE__*/ BigInt(-1e8) * Pr, Oa = Da - Pr, ka = -3261848;
function Aa(e) {
	let t = 12 * e.year + e.month;
	return (t < ka || t > 3309129) && L("Out-of-bounds date"), e;
}
function ja(e, t = 1) {
	let n = Ti(e);
	return (n < (t ? Oa : Da) || n > Ea) && L("Out-of-bounds date"), e;
}
function Ma(e) {
	return Na(Ci(e)), e;
}
function Na(e) {
	return (e <= Oa || e >= Ea + Pr) && L("Out-of-bounds date"), e;
}
function Pa(e) {
	return (e < Da || e > Ea) && L("Out-of-bounds date"), e;
}
function Fa(e, t) {
	return Pa(Ti(e) + BigInt(mi(e) - t));
}
function Ia(e, t, n) {
	return La(e / t, n) * t;
}
function La(e, t) {
	return jt[t](e);
}
function Ra(e, t, n, r) {
	let i = Ba(e, t, r, n);
	return Ha(i, Number(n - i.I) / Number(i.O - i.I));
}
function za(e, t, n, r) {
	return Ia(Ha(e, Ua(t, e.I, e.O)), n, r);
}
function Ba(e, t, n, r) {
	let i = Va(e, t, n);
	return ((e, t, n, r) => r > 0 ? t <= e && e <= n : n <= e && e <= t)(r, i.I, i.O, Math.sign(t)) || (i = Va(e + t, t, n)), i;
}
function Va(e, t, n) {
	let r = e + t;
	return {
		ve: e,
		qe: r,
		I: n(e),
		O: n(r)
	};
}
function Ha(e, t) {
	return e.ve + t * (e.qe - e.ve);
}
function Ua(e, t, n) {
	let r = n - t, i = e - t;
	if (!i) return 0;
	let a = i < 0n ? -i : i, o = r < 0n ? -r : r, s = Zn(i, 0n) === Zn(r, 0n) ? 1 : -1;
	return Zn(a, o) <= 0 ? a === o ? s : ar(Zn(2n * a, o), s) : Number(i) / Number(r);
}
function Wa(e) {
	return { epochNanoseconds: e };
}
function Ga(e, t, n) {
	return {
		calendar: n,
		timeZone: t,
		epochNanoseconds: e
	};
}
function Ka(e, t) {
	return Ln(Ir, e, qa(e, t));
}
function qa(e, t) {
	return Ln(Br, e, { calendar: t });
}
function Ja(e) {
	return Ln(Ir, e);
}
function Ya(e) {
	return Ln(ca, e, { sign: fs(e) });
}
function Xa(e, t, n, r) {
	return Ga(t === 6 ? to(e, r) : no(e, t, n, r), e.timeZone, e.calendar);
}
function Za(e) {
	let [t, n] = co(e);
	return Fr(n - t, Er);
}
function Qa(e) {
	let { timeZone: t, calendar: n } = e;
	return Ga(xo(t, Ta(_o(e), ui)), t, n);
}
function $a(e, t, n, r, i, a, o, s) {
	if (r === 0 && i === 1) return e;
	let c = fs(e) || 1, [l, u, d] = (is(r, s) ? s && r < 6 && n >= 6 ? oo : so : ao)(c, e, t, n, r, i, a, o);
	return d && r !== 7 && (l = ((e, t, n, r, i, a) => {
		for (let o = r + 1; o <= n; o++) {
			if (o === 7 && n !== 7) continue;
			let r = ga(o, e);
			r[ca[o]] += i;
			let s = Zn(t, es(a, r));
			if (s && s !== i) break;
			e = r;
		}
		return e;
	})(l, u, n, Math.max(6, r), c, o)), l;
}
function eo(e, t, n) {
	let r = Math.min(Ss(e), 6);
	return ys(fo(gs(e), BigInt(t), n), r);
}
function to(e, t) {
	let [n, r] = co(e);
	return lo(e.epochNanoseconds, n, r, t);
}
function no(e, t, n, r) {
	if (t === 0 && n === 1) return e.epochNanoseconds;
	let i = _o(e);
	return yo(e.timeZone, ro(i, ho(t, n), r), i.offsetNanoseconds, 2, 0, 1);
}
function ro(e, t, n) {
	let [r, i] = io(e, t, n), a = Ta(Po(e, i), r);
	return Ma(a), a;
}
function io(e, t, n) {
	return vi(Ia(mi(e), t, n));
}
function ao(e, t, n, r, i, a, o, s) {
	let c = ca[i], l = ga(i, t);
	i === 7 && (t = {
		...t,
		weeks: t.weeks + Math.trunc(t.days / 7)
	});
	let u = nr(t[c], a) * a, d = Ba(u, a * e, (e) => (l[c] = e, es(s, l)), n), f = za(d, n, a, o);
	return l[c] = f, [
		l,
		f === d.qe ? d.O : d.I,
		f !== u
	];
}
function oo(e, t, n, r, i, a, o, s) {
	let c = Number(_s(t)), l = ho(i, a), u = Ia(c, l, o), d = {
		...t,
		...ha
	}, f = Ba(d.days, e, (e) => (d.days = e, es(s, d)), n), p = f.I, m = f.O, h = u - Number(m - p), g = 0;
	h && Math.sign(h) !== e ? n = p + BigInt(u) : (g += e, u = Ia(h, l, o), n = m + BigInt(u));
	let _ = bs(u);
	return [
		{
			...t,
			..._,
			days: t.days + g
		},
		n,
		!!g
	];
}
function so(e, t, n, r, i, a, o) {
	let s = gs(t), c = fo(s, go(i, a), o), l = c - s, u = Math.sign(Number(c / Pr) - Number(s / Pr)) === e, d = ys(c, Math.min(r, 6));
	return [
		{
			...t,
			...d
		},
		n + l,
		u
	];
}
function co(e) {
	let { timeZone: t } = e, n = Ta(_o(e), ui), r = Ta(Po(n, 1), ui);
	return [xo(t, n), xo(t, r)];
}
function lo(e, t, n, r) {
	return La(Ua(e < n ? e : n - 1n, t, n), r) ? n : t;
}
function uo(e) {
	return Ia(e, Tr, 7);
}
function fo(e, t, n) {
	return mo(e, t, n, e / t % 2n);
}
function po(e, t, n) {
	let [r, i] = $n(e, Pr), a = r * Pr;
	return a + mo(i, t, n, (a / t + i / t) % 2n);
}
function mo(e, t, n, r) {
	let i = e / t, a = e % t, o = 0;
	a && (o = ar(Zn(2n * (a < 0n ? -a : a), t), Math.sign(Number(a))));
	let s = La(Number(r) + o, n);
	return (i - r + BigInt(s)) * t;
}
function ho(e, t) {
	return Or[e] * t;
}
function go(e, t) {
	return BigInt(Or[e]) * BigInt(t);
}
var _o = /*@__PURE__*/ An(vo, WeakMap);
function vo(e) {
	let { epochNanoseconds: t, timeZone: n } = e, r = n.B(t);
	return {
		...ki(t + BigInt(r)),
		offsetNanoseconds: r
	};
}
function yo(e, t, n, r = 0, i = 0, a, o) {
	if (n !== void 0 && r === 1 && (r === 1 || o)) return Fa(t, n);
	r !== 2 && r !== 0 || ja(t, 0);
	let s = e.R(t);
	if (n !== void 0 && r !== 3) {
		let e = ((e, t, n, r) => {
			let i = Ci(t);
			r && (n = uo(n));
			for (let t of e) {
				let e = Number(i - t);
				if (r && (e = uo(e)), e === n) return t;
			}
		})(s, t, n, a);
		if (e !== void 0) return e;
		r === 0 && L("Invalid TimeZone offset");
	}
	return o ? Ci(t) : bo(e, t, i, s);
}
function bo(e, t, n = 0, r = e.R(t)) {
	if (r.length === 1) return r[0];
	if (n === 1 && L("Ambiguous offset"), r.length) return r[+(n === 3)];
	let i = Ci(t), a = ((e, t) => {
		let n = e.B(t - Pr);
		return ((e) => (e > 864e11 && L("Out-of-bounds TimeZone gap"), e))(e.B(t + Pr) - n);
	})(e, i), o = ki(i + BigInt(a * (n === 2 ? -1 : 1)));
	return (r = e.R(o))[n === 2 ? 0 : r.length - 1];
}
function xo(e, t) {
	let n = e.R(t);
	if (n.length) return n[0];
	let r = Ci(t) - Pr;
	return e.C(r, 1);
}
function So(e, t, n, r = 0) {
	return fs(n) && Ss(n) < 8 && L("Cannot use small units"), Oo(e, Do(e, ja(Oo(e, t)), n, r));
}
function Co(e, t, n = 0) {
	let { calendar: r, epochNanoseconds: i, timeZone: a } = e, o = _s(t), s = i;
	if (xs(t)) {
		let i = _o(e);
		s = bo(a, Ta(Do(r, i, {
			...t,
			...ha
		}, n), i)) + o;
	} else s += o;
	return {
		...e,
		epochNanoseconds: Pa(s)
	};
}
function wo(e, t, n, r = 0) {
	let [i, a] = To(t, n);
	return Ma(Ta(Do(e, t, {
		...n,
		...ha,
		days: n.days + a
	}, r), i));
}
function To(e, t) {
	return Mo(e, _s(t));
}
function Eo(e, t) {
	return No(e, (xs(n = t) && L("Cannot use large units"), _s(n)));
	var n;
}
function Do(e, t, n, r = 0) {
	let { years: i, months: a, weeks: o, days: s } = n, c;
	if (s += Number(_s(n) / Pr), i || a) c = ko(e, t, i, a, r);
	else {
		if (!o && !s) return t;
		c = t;
	}
	return (o || s) && (c = Po(c, 7 * o + s)), ja(c);
}
function Oo(e, t) {
	return Po(t, 1 - Ji(e, t).day);
}
function ko(e, t, n, r, i) {
	let { year: a, month: o, day: s } = Ji(e, t);
	if (n) {
		let [t, r] = Yi(e, a, o);
		a += n, o = jo(e, t, r, e ? e.p(a) : void 0, i), o = kn("month", o, 1, Qi(e, a), i);
	}
	if (r) {
		let t = Ao(e, a, o, r);
		({year: a, month: o} = t);
	}
	return s = kn("day", s, 1, $i(e, a, o), i), Zi(e, a, o, s);
}
function Ao(e, t, n, r) {
	return e ? e.ae(t, n, r) : Li(t, n, r);
}
function jo(e, t, n, r, i) {
	if (n) {
		let n = e ? e.l : void 0;
		return r !== void 0 && (n < 0 || r === t + 1) ? r : (i === 1 && L(yn), n < 0 ? -n : t);
	}
	return yr(t, 0, r);
}
function Mo(e, t) {
	let n = Number(t / Pr), r = Number(t % Pr), [i, a] = vi(mi(e) + r);
	return [i, n + a];
}
function No(e, t) {
	return Pa(e + t);
}
function Po(e, t) {
	return t ? Ai(Di(e) + t) : e;
}
function Fo(e, t) {
	return hr(e) !== hr(t) && L("Mismatching Calendars"), e;
}
function Io(e, t) {
	return e.m !== t.m && L("Mismatching TimeZones"), e;
}
function Lo(e) {
	return e.timeZone.id;
}
function Ro(e, t, n, r, i, a, o) {
	return r < 6 ? Wo(t.epochNanoseconds, n.epochNanoseconds, r, i, a, o) : ((e, t, n, r, i, a, o) => {
		let s = n.epochNanoseconds;
		if (s === t.epochNanoseconds) return ma;
		let c, l = Io(t.timeZone, n.timeZone);
		return c = Go(l, e, t, n, r), c = $a(c, s, r, i, a, o, ts(e, l, t), 1), c;
	})(e, t, n, r, i, a, o);
}
function zo(e, t, n, r, i, a, o) {
	return r <= 6 ? Wo(Ci(t), Ci(n), r, i, a, o) : ((e, t, n, r, i, a, o) => {
		let s = Ci(n), c = Zn(s, Ci(t));
		if (!c) return ma;
		let l;
		return l = qo(e, t, n, c, r), l = $a(l, s, r, i, a, o, ((e, t) => ({
			ne: Ci(t),
			ke: (n) => Ci(Ta(Do(e, t, n), t))
		}))(e, t)), l;
	})(e, t, n, r, i, a, o);
}
function Bo(e, t, n, r, i, a, o) {
	let s = Oo(e, t), c = Oo(e, n);
	return Xo(s, c) ? Uo(e, ja(s), ja(c), r, i, a, o, 8) : ma;
}
function Vo(e, t, n, r, i, a, o, s = 6) {
	return r === 6 ? Wo(Ti(t), Ti(n), r, i, a, o) : Uo(e, t, n, r, i, a, o, s);
}
function Ho(e, t, n, r, i, a) {
	let o = Ia(mi(t) - mi(e), ho(r, i), a);
	return {
		...ma,
		...bs(o, n)
	};
}
function Uo(e, t, n, r, i, a, o, s = 6) {
	let c = Ti(n);
	if (!Xo(t, n)) return ma;
	let l;
	return l = Yo(e, t, n, r), i === s && a === 1 || (l = $a(l, c, r, i, a, o, ns(e, t))), l;
}
function Wo(e, t, n, r, i, a) {
	return {
		...ma,
		...ys(fo(t - e, go(r, i), a), n)
	};
}
function Go(e, t, n, r, i) {
	return i < 6 ? {
		...ma,
		...ys(r.epochNanoseconds - n.epochNanoseconds, i)
	} : ((e, n, r) => {
		let a = Zn(r.epochNanoseconds, n.epochNanoseconds);
		if (!a) return ma;
		if (!Xo(_o(n), _o(r))) return {
			...ma,
			...ys(r.epochNanoseconds - n.epochNanoseconds, 5)
		};
		let [o, s, c] = Jo(e, n, r, a);
		return {
			...(l = o, u = s, Yo(t, l, u, i)),
			...bs(c)
		};
		var l, u;
	})(e, n, r);
}
function Ko(e, t, n, r) {
	let i = Ci(t), a = Ci(n), o = Zn(a, i);
	return o ? r <= 6 ? {
		...ma,
		...ys(a - i, r)
	} : qo(e, t, n, o, r) : ma;
}
function qo(e, t, n, r, i) {
	let a = n, o = mi(n) - mi(t);
	return Math.sign(o) === -r && (a = Po(n, -r), o += 864e11 * r), {
		...Yo(e, t, a, i),
		...bs(o)
	};
}
function Jo(e, t, n, r) {
	let i = _o(t), a = _o(n), o = n.epochNanoseconds, s = 0, c = mi(a) - mi(i);
	Math.sign(c) === -r && s++;
	let l = s + +(r > 0);
	for (;; s++) {
		let t = Po(a, s * -r), n = bo(e, Ta(t, i));
		if (s === l || Zn(o, n) !== -r) return [
			i,
			t,
			Number(o - n)
		];
	}
}
function Yo(e, t, n, r) {
	if (r <= 7) return ((e, t, n) => {
		let r = Zo(t, n);
		return e ? {
			...ma,
			weeks: nr(r, 7),
			days: rr(r, 7)
		} : {
			...ma,
			days: r
		};
	})(r === 7, t, n);
	let i = Ji(e, t), a = Ji(e, n);
	if (r === 8) {
		let { year: r, month: o, day: s } = i, { year: c, month: l, day: u } = a, d = Math.sign(Xn(c, r) || Xn(l, o) || Zo(t, n)), f = 0, p = 0;
		if (d) {
			f = e ? e.ee(r, o, c, l) : Ri(r, o, c, l);
			let i = ko(e, t, 0, f, 0);
			d * Xn(s, u) > 0 && (f -= d, i = ko(e, t, 0, f, 0)), p = Zo(i, n);
		}
		return {
			...ma,
			months: f,
			days: p
		};
	}
	let { year: o, month: s, day: c } = i, { year: l, month: u, day: d } = a, f = l - o, p = u - s, m = d - c;
	if (f || p) {
		let t = Math.sign(f || p), n = $i(e, l, u), r = 0;
		if (Math.sign(d - c) === -t) {
			let i = n, a = Ao(e, l, u, -t);
			({year: l, month: u} = a), f = l - o, p = u - s, n = $i(e, l, u), r = t < 0 ? -i : n;
		}
		if (m = d - Math.min(c, n) + r, f) {
			let [n, r] = Yi(e, o, s), [i, a] = Yi(e, l, u), c = e ? e.l : void 0;
			if (p = c !== void 0 && r && !a && (c < 0 ? t > 0 && i === -c : t < 0 && i === n) ? 0 : i - n || Number(a) - Number(r), Math.sign(p) === -t) {
				let i = t < 0 && -Qi(e, l);
				l -= t, f = l - o, p = u - jo(e, n, r, e ? e.p(l) : void 0, 0) + (i || Qi(e, l));
			} else if (e) {
				let t = jo(e, n, r, e.p(l), 0);
				p = e.ee(l, t, l, u);
			}
		}
	}
	return {
		...ma,
		years: f,
		months: p,
		days: m
	};
}
function Xo(e, t) {
	return Xn(e.year, t.year) || Xn(e.month, t.month) || Xn(e.day, t.day);
}
function Zo(e, t) {
	return Di(t) - Di(e);
}
function Qo(e, t, n) {
	return rs(e) ? ((e, t, n) => {
		let { calendar: r, timeZone: i } = e, a = Co(e, t);
		return [
			Go(i, r, e, a, n),
			a.epochNanoseconds,
			ts(r, i, e)
		];
	})(e, t, n) : ((e, t, n) => {
		let { calendar: r } = e, i = Ma(Ta(e, ui)), a = wo(r, i, t);
		return [
			Ko(r, i, a, n),
			Ci(a),
			ns(r, e)
		];
	})(e, t, n);
}
function $o(e, t) {
	return rs(e) ? Co(e, t).epochNanoseconds : Ci(wo(e.calendar, Ta(e, ui), t));
}
function es(e, t) {
	return xs(t) ? e.ke(t) : e.ne;
}
function ts(e, t, n) {
	let r = _o(n);
	return {
		ne: n.epochNanoseconds,
		ke: (n) => bo(t, Ta(Do(e, r, n), r))
	};
}
function ns(e, t) {
	return {
		ne: Ti(t),
		ke: (n) => Ti(Do(e, t, n))
	};
}
function rs(e) {
	return "timeZone" in e;
}
function is(e, t) {
	return e <= 6 - !!t;
}
function as(e, t, n) {
	let r = {};
	for (let i = t; i >= 0; i--) {
		let t = Or[i];
		r[n[i]] = nr(e, t), e = rr(e, t);
	}
	return r;
}
var os = 2 ** 53;
function ss(e, t, n) {
	let r = Math.max(Ss(t), Ss(n));
	return r > 6 && L("Cannot use large units"), ((e, t, n, r) => Ya(ps(((e, t, n, r) => {
		let i = gs(e) + gs(t) * BigInt(r ? -1 : 1);
		return Number.isFinite(Number(i / Pr)) || L("Out-of-bounds date"), {
			...ma,
			...ys(i, n)
		};
	})(t, n, r, e))))(e, t, n, r);
}
function cs(e, t, n) {
	let r = Ss(t), [i, a, o, s, c] = Qt(n, r, e);
	if (!c && Math.max(r, i) <= 6) return Ya(ps(((e, t, n, r, i) => {
		let a = fo(gs(e), go(n, r), i);
		return {
			...ma,
			...ys(a, t)
		};
	})(t, i, a, o, s)));
	c || L("Missing relativeTo");
	let l = rs(c);
	if (!t.sign && (!l || i < 6)) return t;
	let [u, d, f] = Qo(c, t, i);
	return Ya($a(u, d, i, a, o, s, f, l));
}
function ls(e) {
	return e.sign === -1 ? us(e) : e;
}
function us(e) {
	return Ya(ds(e));
}
function ds(e) {
	let t = {};
	for (let n of ca) t[n] = -1 * e[n] || 0;
	return t;
}
function fs(e, t = ca) {
	let n = 0;
	for (let r of t) {
		let t = Math.sign(e[r]);
		t && (n && n !== t && L("Cannot mix duration signs"), n = t);
	}
	return n;
}
function ps(e) {
	for (let t of pa) ms(t, e[t]);
	let t = gs(e);
	return hs(Number(t / jr)), e;
}
function ms(e, t) {
	return kn(e, t, -4294967295, 4294967295, 1);
}
function hs(e) {
	Number.isSafeInteger(e) || L("Out-of-bounds duration");
}
function gs(e) {
	return BigInt(e.days) * Pr + _s(e);
}
function _s(e) {
	return BigInt(e.hours) * Nr + BigInt(e.minutes) * Mr + vs(e);
}
function vs(e) {
	return BigInt(e.seconds) * jr + BigInt(e.milliseconds) * Ar + BigInt(e.microseconds) * kr + BigInt(e.nanoseconds);
}
function ys(e, t = 6) {
	let n = Number(e / Pr), r = Number(e % Pr), i = Or[t], a = t <= 3 ? Number(e / BigInt(i)) : Dr / i * n + nr(r, i);
	Number.isFinite(a) || L("Out-of-bounds date"), t <= 3 && Math.abs(a) / (wr / Or[t]) >= os && L("Out-of-bounds date");
	let o = as(r, t, ca);
	return o[ca[t]] = a, o;
}
function bs(e, t = 5) {
	return as(e, t, ca);
}
function xs(e) {
	return !!fs(e, fa);
}
function Ss(e) {
	let t = 9;
	for (; t > 0 && !e[ca[t]]; t--);
	return t;
}
function Cs(e, t) {
	return Zn(e.epochNanoseconds, t.epochNanoseconds);
}
function ws(e, t, n, r) {
	let i = e(mt(r).relativeTo), a = Math.max(Ss(t), Ss(n));
	return Rn(ca, t, n) ? 0 : is(a, i && rs(i)) ? Zn(gs(t), gs(n)) : (i || L("Missing relativeTo"), Zn($o(i, t), $o(i, n)));
}
function Ts(e, t) {
	return Es(e, t) || Ds(e, t);
}
function Es(e, t) {
	return Xn(Di(e), Di(t));
}
function Ds(e, t) {
	return Xn(mi(e), mi(t));
}
function Os(e, t) {
	return !Cs(e, t);
}
function ks(e, t) {
	return !Cs(e, t) && e.timeZone.m === t.timeZone.m && e.calendar === t.calendar;
}
function As(e, t) {
	return !Ts(e, t) && e.calendar === t.calendar;
}
function js(e, t) {
	return !Es(e, t) && e.calendar === t.calendar;
}
function Ms(e, t) {
	return !Es(e, t) && e.calendar === t.calendar;
}
function Ns(e, t) {
	return !Es(e, t) && e.calendar === t.calendar;
}
function Ps(e, t) {
	return !Ds(e, t);
}
function Fs(e) {
	return e === 0 ? pr : e ? e.k : void 0;
}
function Is(e, t, n = t) {
	return Fs(e) ? n : t;
}
function Ls(e, t) {
	let n = t || void 0, r = Fs(t), { era: i, eraYear: a, year: o } = e;
	if (o !== void 0 && (o = gt(o, "year")), a !== void 0 && (a = gt(a, "eraYear")), i !== void 0 || a !== void 0) {
		i !== void 0 && a !== void 0 || Dn("Mismatching era/eraYear"), r || L("Forbidden era/eraYear");
		let e = mr(i), t = r[e];
		t === void 0 && L(((e) => `Invalid era: ${e}`)(i));
		let s = n?._ ? n._(a, e, t) : Bs(a, t);
		o !== void 0 && o !== s && L("Mismatching year/eraYear"), o = s;
	} else o === void 0 && Dn(vn(r));
	return o;
}
function Rs(e, t, n, r, i) {
	let { month: a, monthCode: o } = e;
	if (o !== void 0) {
		let e = ((e, t, n, r, i = _r(t)) => {
			let a = e ? e.p(n) : void 0, [o, s] = i, c = yr(o, s, a);
			if (s) {
				let t = e ? e.l : void 0;
				t === void 0 && L(yn), t > 0 ? (c > t && L(yn), a !== c && (r === 1 && L(yn), c = yr(o, 0, a))) : (c !== -t && L(yn), a === void 0 && r === 1 && L(yn));
			}
			return c;
		})(t, o, n, i, r);
		a !== void 0 && a !== e && L("Mismatching month/monthCode"), a = e, i = 1;
	} else a === void 0 && Dn("Missing month/monthCode");
	return kn("month", a, 1, Qi(t, n), i);
}
function zs(e, t, n, r, i) {
	return On(e, "day", 1, $i(t, n, r), i);
}
function Bs(e, t) {
	return (t + e) * (Math.sign(t) || 1) || 0;
}
function Vs(e, t) {
	return pi(Ln(Ir, {
		...ui,
		...e
	}), t);
}
var Hs = /*@__PURE__*/ Wn("([+-])(\\d{2})(?::?(\\d{2})(?::?(\\d{2})(?:[.,](\\d{1,9}))?)?)?");
function Us(e) {
	let t = Ws(e);
	return t === void 0 && L(Cn(e)), t;
}
function Ws(e, t) {
	let n = Hs.exec(e);
	if (n && ((e) => ((e) => {
		e[0] !== "T" && e[0] !== "t" || (e = e.slice(1));
		let t = e.search(/[.,]/), n = t < 0 ? e : e.slice(0, t), r = n.split(":");
		return r.length === 1 ? /^(?:\d{2}|\d{4}|\d{6})$/i.test(n) : (r.length === 2 || r.length === 3) && r.every((e) => e.length === 2 && /^\d{2}$/i.test(e));
	})(e.slice(1)))(n[0])) return ((e, t) => {
		let n = e[4] || e[5];
		return t && n && L(wn(n)), r = (qn(e[2]) * Er + qn(e[3]) * Tr + qn(e[4]) * wr + Gn(e[5] || "")) * Kn(e[1]), Math.abs(r) >= 864e11 && L("Out-of-bounds offset"), r;
		var r;
	})(n, t);
}
var Gs = {
	era: xa,
	month: _t,
	monthCode(e, t) {
		return va(Sa(e), t);
	},
	day: _t
}, Ks = /*@__PURE__*/ Fn(Ir, gt), qs = /*@__PURE__*/ Fn(ca, wa), Js = /*@__PURE__*/ Object.assign({}, Gs, Ks), Ys = {
	offset(e) {
		return Us(va(Sa(e)));
	},
	...Js
};
function Xs(e, t, n, r, i = !r) {
	let a = {}, o = 0;
	for (let i of t) {
		let t = e[i];
		if (t !== void 0) {
			o = 1;
			let e = n[i];
			e && (t = e(t, i)), a[i] = t;
		} else r && r.includes(i) && Dn(pn(i));
	}
	return i && !o && Dn(mn(t)), a;
}
function Zs(e, t, n) {
	let r = Fs(t);
	e.year !== void 0 || e.era !== void 0 && e.eraYear !== void 0 || Dn(vn(r)), e.monthCode === void 0 && e.month === void 0 && Dn("Missing month/monthCode"), n || e.day !== void 0 || Dn(pn("day"));
	let i = ac(e);
	return [Ls(e, t), i];
}
function Qs(e, t) {
	let n = t === void 0, r = Fs(t);
	e.day === void 0 && Dn(pn("day")), n || e.month === void 0 || e.year !== void 0 || e.era !== void 0 && e.eraYear !== void 0 || Dn(vn(r));
	let i = ac(e);
	return [e.eraYear !== void 0 || e.year !== void 0 ? Ls(e, t) : void 0, i];
}
function $s(e, t = ui, n) {
	let r = Ta(e, t);
	return Ma(r), Ka(r, n);
}
function ec(e, t, n, r, i) {
	let a = Rs(e, t, n, r, i);
	return qa(ja(Zi(t, n, a, zs(e, t, n, a, i))), t);
}
function tc(e, t, n, r, i) {
	return rc(t, n, Rs(e, t, n, r, i));
}
function nc(e, t, n, r, i) {
	let a = t === void 0, o = n, s, c, l;
	if (o === void 0 && a && (o = 1972), o !== void 0) {
		a || ja(Zi(t, o, 1, 1));
		let n = Rs(e, t, o, r, i);
		s = zs(e, t, o, n, i), [c, l] = Yi(t, o, n);
	} else {
		e.monthCode === void 0 && Dn("Missing month/monthCode"), [c, l] = r;
		let n = t ? t.re : 1972;
		if (n !== void 0) s = zs(e, t, n, Rs(e, t, n, r, i), i);
		else {
			let n = i === 0 && t ? t.ge?.(c, l, e.day) : void 0;
			s = n === void 0 ? e.day : n;
		}
	}
	return ic(t, c, l, s, e.day, i);
}
function rc(e, t, n) {
	return qa(Aa(Zi(e, t, n, 1)), e);
}
function ic(e, t, n, r, i, a) {
	let o = n;
	o && ((e && e.V?.[t]) ?? 1 / 0) < i && (a === 1 && L(yn), o = 0, r = Tn(i, 1, (e && e.U) ?? 1 / 0));
	let s = e ? e.u(t, !!o, r) : Mi(t, !!o);
	for (; !s && a === 0 && r > 1;) r--, s = e ? e.u(t, !!o, r) : Mi(t, !!o);
	s || L("Cannot guess year");
	let { year: c, month: l } = s;
	return qa(ja(Zi(e, c, l, r)), e);
}
function ac(e) {
	if (e.monthCode !== void 0) return _r(e.monthCode);
}
var oc = Intl.DateTimeFormat;
function sc(e, t) {
	t < -864e13 && L("Out-of-bounds date");
	let n = e.formatToParts(t), r = {};
	for (let e of n) r[e.type] = e.value;
	return r;
}
var cc = {
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
}, lc = -388152e4;
function uc(e, t, n) {
	let [r, i, a, o] = ln(n), s = r !== void 0;
	return ((e, t, n, r, i, a) => {
		n = po(n, BigInt(i), r);
		let o = t.B(n);
		return Sc(ki(n + BigInt(o)), a) + (e ? Dc(uo(o)) : "Z");
	})(s, Vc(s ? e(r) : "UTC"), t.epochNanoseconds, i, a, o);
}
function dc(e, t) {
	let n = cn(t);
	return ((e, t, n, r, i, a, o, s, c, l) => {
		r = po(r, BigInt(c), s);
		let u = n.B(r);
		return Sc(ki(r + BigInt(u)), l) + Dc(uo(u), o) + Oc(t, a) + kc(e, i);
	})(e.calendar, e.timeZone.id, e.timeZone, e.epochNanoseconds, ...n);
}
function fc(e, t) {
	let n = an(t);
	return ((e, t, n, r, i, a) => Sc(ro(t, i, r), a) + kc(e, n))(e.calendar, e, ...n);
}
function pc(e, t) {
	return n = e.calendar, r = e, i = on(t), Cc(r) + kc(n, i);
	var n, r, i;
}
function mc(e, t) {
	return gc(e.calendar, wc, e, on(t));
}
function hc(e, t) {
	return gc(e.calendar, Tc, e, on(t));
}
function gc(e, t, n, r) {
	return r === 1 ? e === void 0 ? t(n) : Cc(n) : r > 1 || r === 0 && e !== void 0 ? Cc(n) + Ac(hr(e), r === 2) : t(n);
}
function _c(e, t) {
	return ((e, t, n, r) => Ec(io(e, n, t)[0], r))(e, ...sn(t));
}
function vc(e, t) {
	let [n, r, i] = sn(t, 3);
	return r > 1 && ps(e = {
		...e,
		...eo(e, r, n)
	}), yc(e, i);
}
function yc(e, t) {
	let { sign: n } = e, r = n === -1 ? ds(e) : e, { hours: i, minutes: a } = r, o = vs(r), s = Number(o / jr), c = Number(o % jr);
	hs(s);
	let l = Mc(c, t), u = t >= 0 || !n || l;
	return (n < 0 ? "-" : "") + "P" + bc({
		Y: xc(r.years),
		M: xc(r.months),
		W: xc(r.weeks),
		D: xc(r.days)
	}) + (i || a || s || u ? "T" + bc({
		H: xc(i),
		M: xc(a),
		S: xc(s, u) + l
	}) : "");
}
function bc(e) {
	let t = [];
	for (let n in e) {
		let r = e[n];
		r && t.push(r, n);
	}
	return t.join("");
}
function xc(e, t) {
	if (!e && !t) return "";
	let n = Object.create(null);
	return n.useGrouping = 0, e.toLocaleString("fullwide", n);
}
function Sc(e, t) {
	return Cc(e) + "T" + Ec(e, t);
}
function Cc(e) {
	return wc(e) + "-" + Yn(e.day);
}
function wc(e) {
	let { year: t } = e;
	return (t < 0 || t > 9999 ? Nc(t) + Jn(6, Math.abs(t)) : Jn(4, t)) + "-" + Yn(e.month);
}
function Tc(e) {
	return Yn(e.month) + "-" + Yn(e.day);
}
function Ec(e, t) {
	let n = [Yn(e.hour), Yn(e.minute)];
	return t !== -1 && n.push(Yn(e.second) + ((e, t, n, r) => Mc(e * Cr + t * Sr + n, r))(e.millisecond, e.microsecond, e.nanosecond, t)), n.join(":");
}
function Dc(e, t = 0) {
	if (t === 1) return "";
	let [n, r] = er(Math.abs(e), Er), [i, a] = er(r, Tr), [o, s] = er(a, wr);
	return Nc(e) + Yn(n) + ":" + Yn(i) + (o || s ? ":" + Yn(o) + Mc(s) : "");
}
function Oc(e, t) {
	return t === 1 ? "" : "[" + (t === 2 ? "!" : "") + e + "]";
}
function kc(e, t) {
	return t > 1 || t === 0 && e !== void 0 ? Ac(hr(e), t === 2) : "";
}
function Ac(e, t) {
	return "[" + (t ? "!" : "") + "u-ca=" + e + "]";
}
var jc = /0+$/;
function Mc(e, t) {
	let n = Jn(9, e);
	return n = t === void 0 ? n.replace(jc, "") : n.slice(0, t), n ? "." + n : "";
}
function Nc(e) {
	return e < 0 ? "-" : "+";
}
var Pc = /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/, Fc = /[^\w\/:+-]+/;
function Ic(e) {
	return Lc(va(e));
}
function Lc(e) {
	return Rc(e).id;
}
function Rc(e) {
	let t = e.toUpperCase(), n = ((e) => {
		let t = Ws(e, 1);
		if (t !== void 0) return {
			id: Dc(t),
			Z: t,
			m: t
		};
	})(t);
	return n ? {
		kind: "fixed",
		...n
	} : zc(t === "UTC" ? "UTC" : ((e) => (Fc.test(e) && L(Sn(e)), Pc.test(e) && L("Forbidden ICU TimeZone"), e.toLowerCase().split("/").map((e, t) => (e.length <= 3 || /\d/.test(e)) && !/etc|yap/.test(e) ? e.toUpperCase() : e.replace(/baja|dumont|[a-z]+/g, (e, n) => e.length <= 2 && !t || e === "in" || e === "chat" ? e.toUpperCase() : e.length > 2 || !n ? Hn(e).replace(/island|noronha|murdo|rivadavia|urville/, Hn) : e)).join("/")))(e));
}
var zc = /*@__PURE__*/ An((e) => {
	if (e === "UTC") return {
		kind: "utc",
		id: e,
		m: e
	};
	let t = Bc(e.toUpperCase());
	return {
		kind: "named",
		id: e,
		format: t,
		m: t.resolvedOptions().timeZone
	};
}), Bc = /*@__PURE__*/ An((e) => new oc("en-u-hc-h23", {
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
function Vc(e) {
	let t = Rc(e);
	return Hc(t.id, t);
}
var Hc = /*@__PURE__*/ An((e, t) => t.kind === "named" ? new Wc(e, t.m, t.format) : new Uc(e, t.m, t.kind === "fixed" ? t.Z : 0)), Uc = class {
	constructor(e, t, n) {
		this.id = e, this.m = t, this.Z = n;
	}
	B() {
		return this.Z;
	}
	R(e) {
		return [Fa(e, this.Z)];
	}
	C() {}
}, Wc = class {
	constructor(e, t, n) {
		this.id = e, this.m = t, this.oe = ((e, t) => {
			let n = An(e), r = An(Kc), i = 86400 * t;
			function a(e) {
				let [t, a] = qc(e, i), s = Jc(t), c = Jc(a), l = n(s), u = n(c);
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
				Ae(e) {
					let t = a(e - 86400), n = a(e + 86400), r = e - t, i = e - n;
					if (t === n) return [r];
					let o = a(r);
					return o === a(i) ? [e - o] : t > n ? [r, i] : [];
				},
				ze: a,
				C: function e(t, a) {
					if (a > 0 && t >= 864e10) return;
					if (a < 0) {
						if (t <= lc) return;
						let n = Gc() + 94867200;
						if (t > n) return e(n, -1);
					}
					let [s, c] = qc(a > 0 ? Math.max(t, lc) : t, i), l = i * a, u = a > 0 ? Math.max(t, Gc()) + 94867200 : lc, d = () => a < 0 ? c > u : s < u;
					for (; d();) {
						let e = Jc(s), i = Jc(c), u = n(e), d = n(i);
						if (u !== d) {
							let n = r(e, i);
							o(n, u, d);
							let s = n[0];
							if ((Xn(s, t) || 1) === a) return s;
						}
						s += l, c += l;
					}
				}
			};
		})(((e) => (t) => {
			let n = sc(e, 1e3 * t);
			return 86400 * Oi(((e) => {
				let t = e.relatedYear;
				if (t !== void 0) return parseInt(t);
				let n = parseInt(e.year);
				return e.era !== void 0 && mr(e.era) === "bce" ? 1 - n : n;
			})(n), parseInt(n.month), parseInt(n.day)) + 3600 * parseInt(n.hour) + 60 * parseInt(n.minute) + parseInt(n.second) - t;
		})(n), ((e) => cc[e.split("/").pop()] || 60)(e));
	}
	B(e) {
		return this.oe.ze(((e) => xi(e)[0])(e)) * wr;
	}
	R(e) {
		let t = 86400 * Di(e) + gi(e), n = _i(e);
		return this.oe.Ae(t).map((e) => Pa(BigInt(e) * jr + BigInt(n)));
	}
	C(e, t) {
		let [n, r] = xi(e), i = this.oe.C(n + (t > 0 || r ? 1 : 0), t);
		if (i !== void 0) return BigInt(i) * jr;
	}
};
function Gc() {
	return Math.floor(Date.now() / 1e3);
}
function Kc(e, t) {
	return [e, t];
}
function qc(e, t) {
	let n = Math.floor(e / t) * t;
	return [n, n + t];
}
function Jc(e) {
	return Tn(e, -1e10, 864e10);
}
function Yc(e, t, n) {
	let r = Xs(n, Is(t, oi, si), Ys, [], 0), i = r.timeZone !== void 0, [a, o] = Zs(r, t), s = ec(r, t, a, o, 0);
	if (i) {
		let n = Vs(r), i = Vc(e(r.timeZone));
		return {
			epochNanoseconds: yo(i, Ta(s, n), r.offset),
			timeZone: i,
			calendar: t
		};
	}
	return s;
}
function Xc(e, t, n, r) {
	let i = Xs(n, Is(t, oi, si), Ys, Hr, 0), a = e(i.timeZone), [o, s] = Zs(i, t), [c, l, u] = tn(r), d = ec(i, t, o, s, c), f = Vs(i, c), p = Vc(a);
	return Ga(yo(p, Ta(d, f), i.offset, l, u), p, t);
}
function Zc(e, t, n) {
	let r = Xs(t, Is(e, ni, ri), Js, [], 0), [i, a] = Zs(r, e), o = I(n);
	return $s(ec(r, e, i, a, o), Vs(r, o), e);
}
function Qc(e, t, n, r = []) {
	let i = Xs(t, Is(e, ei, ti), Gs, r), [a, o] = Zs(i, e);
	return ec(i, e, a, o, I(n));
}
function $c(e, t, n, r) {
	let i = Xs(t, Is(e, Yr, Xr), Gs, r), [a, o] = Zs(i, e, 1);
	return tc(i, e, a, o, I(n));
}
function el(e, t, n, r) {
	let i = Xs(n, Is(e, ei, ti), Gs, zr, 0);
	t && i.month !== void 0 && i.monthCode === void 0 && i.year === void 0 && (i.year = 1972);
	let [a, o] = Qs(i, e);
	return nc(i, e, a, o, I(r));
}
function tl(e, t) {
	return Vs(Xs(e, qr, Ks, [], 1), I(t));
}
function nl(e) {
	let t = Xs(e, ua, qs);
	return Ya(ps({
		...ma,
		...t
	}));
}
function rl(e) {
	L(Cn(e));
}
function il(e) {
	let t = jl(e = va(Sa(e))), n;
	return t || rl(e), t.F ? n = 0 : t.offset ? n = Us(t.offset) : rl(e), t.timeZoneId && Ws(t.timeZoneId, 1), Wi(t), Wa(Fa(t, n));
}
function al(e, t) {
	let n = jl(va(e));
	return n || rl(e), n.timeZoneId ? bl(n, t, void 0) : (n.F && rl(e), Sl(n, t));
}
function ol(e, t, n) {
	let r = jl(va(e));
	return r && r.timeZoneId || rl(e), bl(r, t, n);
}
function sl(e, t) {
	let n = jl(va(e));
	return n && !n.F || rl(e), xl(n, t);
}
function cl(e, t) {
	let n = _l(gl(va(e)), void 0, t);
	return qa(n, n.calendar);
}
function ll(e, t) {
	let n = Ml(va(e));
	if (n) return ul(n), qa(Aa(Gi(n)), t(n.calendarId));
	let r = _l(gl(e), vl, t), { calendar: i } = r;
	return qa(Oo(i, r), i);
}
function ul(e) {
	e.calendarId !== "iso8601" && L(wn(e.calendarId));
}
function dl(e, t) {
	let n = Nl(va(e));
	if (n) return ul(n), qa(Gi(n), t(n.calendarId));
	let r = _l(gl(e), yl, t), { calendar: i } = r, { year: a, month: o, day: s } = Ji(i, r), [c, l] = Yi(i, a, o), { year: u, month: d } = ((e, t, n, r) => {
		let i = e ? e.u(t, n, r) : Mi(t, n);
		return i || L("Cannot guess year"), i;
	})(i, c, l, s);
	return qa(ja(Zi(i, u, d, s)), i);
}
function fl(e) {
	let t = ((e) => {
		let t = Pl(e);
		return t ? (Ll(t[13]), Fl(t, 1)) : void 0;
	})(e = va(e));
	if (!t) {
		let n = jl(e);
		n && n.te || rl(e), n.F && L(wn("Z")), ul(n), t = n;
	}
	let n;
	return (n = Ml(e)) && Ki(n) && rl(e), (n = Nl(e)) && Ki(n) && rl(e), Ja(di(t));
}
function pl(e) {
	let t = Al.exec(va(e));
	return t || rl(e), Ya(ps(((e) => {
		let t = 0, n = 0, r = 0, i = {
			years: a(e[2]),
			months: a(e[3]),
			weeks: a(e[4]),
			days: a(e[5]),
			hours: a(e[6], e[7], 5),
			minutes: a(e[8], e[9], 4),
			seconds: a(e[10], e[11], 3),
			...as(r, 2, ca)
		};
		return t || L(mn(ca)), Kn(e[1]) < 0 && (i = ds(i)), i;
		function a(e, i, a) {
			let o = 0, s = 0;
			return a && ([o, r] = er(r, Or[a])), e !== void 0 && (n && L(wn(e)), s = ((e) => {
				let t = parseInt(e);
				return Number.isFinite(t) || L(wn(e)), t;
			})(e), t = 1, i && (r = Gn(i) * (Or[a] / wr), n = 1)), o + s;
		}
	})(t)));
}
function ml(e) {
	let t = jl(e) || Ml(e) || Nl(e);
	if (t) return t.calendarId;
	let n = Pl(e);
	return n ? Ll(n[13]).calendarId : e;
}
function hl(e) {
	let t = jl(e);
	return t && (t.timeZoneId || t.F && "UTC" || t.offset) || e;
}
function gl(e) {
	let t = jl(e);
	return t && !t.F || rl(e), t;
}
function _l(e, t, n) {
	return t && e.calendarId === "iso8601" ? (Gi(e), e.te && di(e), Sl(t(e), n)) : e.te ? xl(e, n) : Sl(e, n);
}
function vl(e) {
	let t = 12 * e.year + e.month === ka ? 20 : 1;
	return {
		...e,
		day: t
	};
}
function yl(e) {
	return {
		...e,
		year: 1972
	};
}
function bl(e, t, n) {
	let r = Vc(Lc(e.timeZoneId)), i;
	if (Wi(e), e.te) {
		let t = e.offset ? Us(e.offset) : void 0, [, o, s] = tn(n);
		i = yo(r, e, t, o, s, !(r.Z || e.offset === void 0 || (a = e.offset, a.replace(/\D/g, "").length > 4)), e.F);
	} else tn(n), i = xo(r, e);
	var a;
	return Pa(i), Ga(i, r, t(e.calendarId));
}
function xl(e, t) {
	return Wi(e), Ma(e), {
		...Ta(e, e),
		calendar: t(e.calendarId)
	};
}
function Sl(e, t) {
	return Gi(e), ja(e), {
		calendar: t(e.calendarId),
		year: e.year,
		month: e.month,
		day: e.day
	};
}
function Cl(e) {
	return `(\\d{2})(?:(:?)(\\d{2})(?:\\${e}(\\d{2})(?:[.,](\\d{1,9}))?)?)?`;
}
var wl = "(?:(?:([+-])(\\d{6}))|(\\d{4}))(-?)(\\d{2})\\4(\\d{2})(?:[T ]" + Cl(8) + "(Z|([+-])" + Cl(15) + ")?)?", Tl = /*@__PURE__*/ Wn("(?:(?:([+-])(\\d{6}))|(\\d{4}))-?(\\d{2})((?:\\[(!?)([^\\]]*)\\]){0,9})"), El = /*@__PURE__*/ Wn("(?:--)?(\\d{2})-?(\\d{2})((?:\\[(!?)([^\\]]*)\\]){0,9})"), Dl = /*@__PURE__*/ Wn(wl + "((?:\\[(!?)([^\\]]*)\\]){0,9})"), Ol = /*@__PURE__*/ Wn("T?" + Cl(2) + `(([+-])${Cl(9)})?((?:\\[(!?)([^\\]]*)\\]){0,9})`), kl = /*@__PURE__*/ RegExp("\\[(!?)([^\\]]*)\\]", "g"), Al = /*@__PURE__*/ Wn("([+-])?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?!$)(?:(\\d+)(?:[.,](\\d{1,9}))?H)?(?:(\\d+)(?:[.,](\\d{1,9}))?M)?(?:(\\d+)(?:[.,](\\d{1,9}))?S)?)?");
function jl(e) {
	let t = Dl.exec(e);
	return t ? ((e) => {
		let t = e[12], n = (t || "").toUpperCase() === "Z";
		return {
			year: Il(e),
			month: parseInt(e[5]),
			day: parseInt(e[6]),
			...Fl(e, 7),
			...Ll(e[19]),
			te: !!e[7],
			F: n,
			offset: n ? void 0 : t
		};
	})(t) : void 0;
}
function Ml(e) {
	let t = Tl.exec(e);
	if (t) return ((e) => ({
		year: Il(e),
		month: parseInt(e[4]),
		day: 1,
		...Ll(e[5])
	}))(t);
}
function Nl(e) {
	let t = El.exec(e);
	return t ? ((e) => ({
		year: 1972,
		month: parseInt(e[1]),
		day: parseInt(e[2]),
		...Ll(e[3])
	}))(t) : void 0;
}
function Pl(e) {
	let t = Ol.exec(e);
	if (t) return t[6] && Us(t[6]), t;
}
function Fl(e, t) {
	let n = qn(e[t + 3]);
	return {
		...vi(Gn(e[t + 4] || ""))[0],
		hour: qn(e[t]),
		minute: qn(e[t + 2]),
		second: n === 60 ? 59 : n
	};
}
function Il(e) {
	let t = Kn(e[1]), n = parseInt(e[2] || e[3]);
	return t < 0 && !n && L(wn(-0)), t * n;
}
function Ll(e) {
	let t, n, r = [];
	return e.replace(kl, (e, i, a) => {
		let o = !!i, [s, c] = a.split("=").reverse();
		return c ? c === "u-ca" ? (r.push(s.toLowerCase()), t ||= o) : (o || /[A-Z]/.test(c)) && L(wn(e)) : (n && L(wn(e)), n = s), "";
	}), r.length > 1 && t && L(wn(e)), {
		timeZoneId: n,
		calendarId: r[0] || "iso8601"
	};
}
function Rl(e, t, n) {
	let r = Object.assign(Object.create(null), t);
	return zl(r, n, Gr), Fs(e) && (zl(r, n, Wr), e && e.je && zl(r, n, Kr, Ur)), r;
}
function zl(e, t, n, r) {
	let i = 0, a = [];
	for (let e of n) t[e] === void 0 ? a.push(e) : i = 1;
	if (Object.assign(e, t), i) for (let t of r || a) delete e[t];
}
function Bl(e, t, n) {
	let r = Is(e, ii, ai), i = _o(t), { year: a, month: o, day: s } = Ji(e, i), c = {
		year: a,
		monthCode: Yl(e, a, o),
		day: s,
		hour: i.hour,
		minute: i.minute,
		second: i.second,
		millisecond: i.millisecond,
		microsecond: i.microsecond,
		nanosecond: i.nanosecond,
		offset: i.offsetNanoseconds
	}, l = Xs(n, r, Ys), u = Rl(e, c, l);
	return [{
		...c,
		...l
	}, u];
}
function Vl(e, t, n) {
	let r = Is(e, ni, ri), { year: i, month: a, day: o } = Ji(e, t), s = {
		year: i,
		monthCode: Yl(e, i, a),
		day: o,
		hour: t.hour,
		minute: t.minute,
		second: t.second,
		millisecond: t.millisecond,
		microsecond: t.microsecond,
		nanosecond: t.nanosecond
	}, c = Xs(n, r, Js), l = Rl(e, s, c);
	return [{
		...s,
		...c
	}, l];
}
function Hl(e, t, n) {
	let r = Is(e, ei, ti), { year: i, month: a, day: o } = Ji(e, t);
	return Rl(e, {
		year: i,
		monthCode: Yl(e, i, a),
		day: o
	}, Xs(n, r, Gs));
}
function Ul(e, t, n) {
	let r = Is(e, Yr, Xr), { year: i, month: a } = Ji(e, t);
	return Rl(e, {
		year: i,
		monthCode: Yl(e, i, a)
	}, Xs(n, r, Gs));
}
function Wl(e, t, n) {
	let r = Is(e, ei, ti), { year: i, month: a, day: o } = Ji(e, t);
	return Rl(e, {
		monthCode: Yl(e, i, a),
		day: o
	}, Xs(n, r, Gs));
}
function Gl(e, t, n, r, i, a, o, s) {
	let { calendar: c, timeZone: l } = e;
	return Ga(yo(l, Ta(ec(n, c, r, i, a), pi(t, a)), t.offset, o, s), l, c);
}
function Kl(e, t, n, r, i, a) {
	return $s(ec(t, n, r, i, a), pi(e, a), n);
}
function ql(e, t) {
	return {
		...Ln(qr, e),
		...Xs(t, qr, Ks)
	};
}
function Jl(e, t) {
	return Ya((n = e, r = t, ps({
		...n,
		...Xs(r, ua, qs)
	})));
	var n, r;
}
function Yl(e, t, n) {
	let [r, i] = Yi(e, t, n);
	return vr(r, i);
}
function Xl(e, t, n) {
	let [r, i] = en(n, e), a = Ss(t), o = Math.max(r, a), s = i && rs(i);
	if (!i && is(o, s)) return Zl(t, r);
	if (i || L("Missing relativeTo"), !t.sign && (!s || r < 6)) return 0;
	let [c, l, u] = Qo(i, t, r);
	return is(r, s) ? Zl(c, r) : ((e, t, n, r) => {
		let i = ca[n], a = ga(n, e);
		return Ra(e[i], fs(e) || 1, t, (e) => (a[i] = e, es(r, a)));
	})(c, l, r, u);
}
function Zl(e, t) {
	return Fr(gs(e), Or[t]);
}
function Ql(e, t, n) {
	return Ga(e.epochNanoseconds, t, n);
}
function $l(e) {
	return Wa(e.epochNanoseconds);
}
function eu(e) {
	return Ka(_o(e), e.calendar);
}
function tu(e) {
	return qa(_o(e), e.calendar);
}
function nu(e) {
	return Ja(_o(e));
}
function ru(e, t, n) {
	return Ga(Pa(bo(t, e, n)), t, e.calendar);
}
function iu(e, t, n) {
	let r;
	return r = n ? bo(t, Ta(e, n)) : xo(t, Ta(e, ui)), Ga(r, t, e.calendar);
}
function au(e, t, n) {
	return lu(e, Ln(Is(e, Zr, Qr), t), Xs(xt(n), zr, Gs, []));
}
function ou(e, t, n) {
	let r = Is(e, Rr, Jr);
	return lu(e, Ln($r, t), Xs(xt(n), r, Gs, []));
}
function su(e, t) {
	let n = Xs(t, $r, Gs), [r, i] = Qs(n, e);
	return nc(n, e, r, i, 0);
}
function cu(e, t) {
	let n = Xs(t, Is(e, Zr, Qr), Gs), [r, i] = Zs(n, e, 1);
	return tc(n, e, r, i, 0);
}
function lu(e, t, n) {
	let r = Is(e, ci, li), i = Rl(e, t, n);
	i = Xs(i, r, Gs, []);
	let [a, o] = Zs(i, e);
	return ec(i, e, a, o, 0);
}
function uu(e) {
	return Wa(Pa(BigInt(wa(e)) * Ar));
}
function du(e) {
	return Wa(Pa(Ca(e)));
}
function fu(e) {
	return e.timeZone = "UTC", ["full", "long"].includes(e.timeStyle) && (e.timeStyle = "medium"), e;
}
function pu(e, t) {
	return e.timeZone !== void 0 && Dn("Cannot specify TimeZone"), e.timeZone = t, e;
}
function mu(e, t, n) {
	let r = e.resolvedOptions().calendar;
	!n && t.calendar === void 0 || hr(t.calendar) === r || L("Mismatching Calendars");
}
function hu(e, t, n, r, i) {
	let a = new Set(e), o = new Set(t), s = new Set(n);
	return (e, t) => {
		let n, c, l = {}, u = {}, d = {}, f = 0, p = 0;
		for (let t of Object.keys(e)) {
			let r = e[t];
			r === void 0 || s.has(t) || (a.has(t) ? t === "dateStyle" ? n = r : t === "timeStyle" ? c = r : l[t] = r : t === "era" ? u[t] = r : o.has(t) ? t === "dateStyle" || t === "timeStyle" ? p = 1 : f = 1 : d[t] = r);
		}
		let m = n !== void 0, h = c !== void 0, g = m || h, _ = Object.keys(l).length > 0, v = f || p, y = _ || m || h, b = Object.keys(u).length > 0;
		(!t && v || t && v && !y || g && (_ || b || f)) && Dn("Invalid formatting options");
		let x = {};
		return g || y || Object.assign(x, r), Object.assign(x, l, u, d), m && (i ? Object.assign(x, i[n]) : x.dateStyle = n), h && (x.timeStyle = c), x;
	};
}
var gu = {
	year: "numeric",
	month: "numeric",
	day: "numeric"
}, _u = {
	hour: "numeric",
	minute: "numeric",
	second: "numeric"
}, vu = /*@__PURE__*/ Object.assign({}, gu, _u), yu = [
	"weekday",
	"year",
	"month",
	"day",
	"dateStyle"
], bu = [
	"dayPeriod",
	"hour",
	"minute",
	"second",
	"fractionalSecondDigits",
	"timeStyle"
], xu = /*@__PURE__*/ yu.concat(bu), Su = /*@__PURE__*/ ["weekday", "day"].concat(bu), Cu = /*@__PURE__*/ ["weekday", "year"].concat(bu), wu = /*@__PURE__*/ hu(xu, [], [], vu), Tu = /*@__PURE__*/ hu(xu, [], [], {
	...vu,
	timeZoneName: "short"
}), Eu = /*@__PURE__*/ hu(xu, [], ["timeZoneName"], vu), Du = /*@__PURE__*/ hu(yu, bu, ["timeZoneName"], gu), Ou = /*@__PURE__*/ hu(bu, yu, ["timeZoneName", "era"], _u), ku = /*@__PURE__*/ hu([
	"year",
	"month",
	"dateStyle"
], Su, ["timeZoneName"], {
	year: "numeric",
	month: "numeric"
}, {
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
}), Au = /*@__PURE__*/ hu([
	"month",
	"day",
	"dateStyle"
], Cu, ["timeZoneName", "era"], {
	month: "numeric",
	day: "numeric"
}, {
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
function ju(e, t) {
	let { timeZone: n } = e, r = _o(e), { offsetNanoseconds: i } = r, a = t || ui, o;
	return o = t ? yo(n, Ta(r, a), i, 2) : xo(n, Ta(r, a)), Ga(o, n, e.calendar);
}
function Mu(e) {
	let t = Nu(), n = e.B(t);
	return ki(t + BigInt(n));
}
function Nu() {
	return BigInt(Date.now()) * Ar;
}
function Pu() {
	return new oc().resolvedOptions().timeZone;
}
//#endregion
//#region ../../node_modules/.pnpm/temporal-polyfill@1.0.5/node_modules/temporal-polyfill/chunks/apiHelpers.js
var Fu = "PlainYearMonth", Iu = "PlainMonthDay", Lu = "PlainDate", Ru = "PlainDateTime", zu = "PlainTime", Bu = "ZonedDateTime", Vu = "Instant", Hu = "Duration";
function Uu(e, t, n, ...r) {
	return Object.defineProperties(t, jn(e)), Object.defineProperties(t.prototype, Nn("Temporal." + e)), Object.defineProperties(t.prototype, Pn((e) => ({
		get() {
			return e(n(this));
		},
		configurable: 1
	}), Object.assign({}, ...r))), t;
}
var Wu = Vn.name === "noop" ? (e) => {
	Object.defineProperty(e, "_str_", { value: e.toJSON() });
} : Vn;
function Gu() {
	Dn(_n);
}
function Ku() {
	Dn(gn);
}
var qu = {
	era(e) {
		return Xi(e.calendar, e).era;
	},
	eraYear(e) {
		return Xi(e.calendar, e).eraYear;
	},
	year(e) {
		return Ji(e.calendar, e).year;
	},
	month(e) {
		return Ji(e.calendar, e).month;
	},
	monthCode(e) {
		return ea(e.calendar, e);
	}
}, Ju = {
	era(e) {
		return Xi(e.calendar, e).era;
	},
	eraYear(e) {
		return Xi(e.calendar, e).eraYear;
	},
	year(e) {
		return Ji(e.calendar, e).year;
	},
	month(e) {
		return Ji(e.calendar, e).month;
	},
	monthCode(e) {
		return ea(e.calendar, e);
	},
	day(e) {
		return Ji(e.calendar, e).day;
	}
}, Yu = {
	monthCode(e) {
		return ea(e.calendar, e);
	},
	day(e) {
		return Ji(e.calendar, e).day;
	}
}, Xu = {
	daysInMonth(e) {
		return ra(e.calendar, e);
	},
	daysInYear(e) {
		return ia(e.calendar, e);
	},
	monthsInYear(e) {
		return na(e.calendar, e);
	},
	inLeapYear(e) {
		return ta(e.calendar, e);
	}
}, Zu = {
	dayOfWeek(e) {
		return zi(e);
	},
	dayOfYear(e) {
		return aa(e.calendar, e);
	},
	weekOfYear(e) {
		return oa(e.calendar, e);
	},
	yearOfWeek(e) {
		return sa(e.calendar, e);
	},
	daysInWeek() {
		return 7;
	},
	daysInMonth(e) {
		return ra(e.calendar, e);
	},
	daysInYear(e) {
		return ia(e.calendar, e);
	},
	monthsInYear(e) {
		return na(e.calendar, e);
	},
	inLeapYear(e) {
		return ta(e.calendar, e);
	}
};
function Qu(e, t, n, r) {
	let [i, a, o, s] = Zt(e, r, 3, 5);
	return id(e, Wo(t.epochNanoseconds, n.epochNanoseconds, i, a, o, s));
}
function $u(e, t, n, r) {
	let i = Fo(t.calendar, n.calendar), [a, o, s, c] = Zt(e, r, 5);
	return id(e, Ro(i, t, n, a, o, s, c));
}
function ed(e, t, n, r) {
	let i = Fo(t.calendar, n.calendar), [a, o, s, c] = Zt(e, r, 6);
	return id(e, zo(i, t, n, a, o, s, c));
}
function td(e, t, n, r) {
	let i = Fo(t.calendar, n.calendar), [a, o, s, c] = Zt(e, r, 6, 9, 6);
	return id(e, Vo(i, t, n, a, o, s, c));
}
function nd(e, t, n, r) {
	let i = Fo(t.calendar, n.calendar), [a, o, s, c] = Zt(e, r, 9, 9, 8);
	return id(e, Bo(i, t, n, a, o, s, c));
}
function rd(e, t, n, r) {
	let [i, a, o, s] = Zt(e, r, 5, 5);
	return id(e, Ho(t, n, i, a, o, s));
}
function id(e, t) {
	return Ya(e ? ds(t) : t);
}
function ad(e, t, n) {
	let { calendar: r } = e, i = Hl(r, e, t), [a, o] = Zs(i, r);
	return ec(i, r, a, o, I(n));
}
function od(e, t, n) {
	let { calendar: r } = e, [i, a] = Vl(r, e, t), [o, s] = Zs(a, r);
	return Kl(i, a, r, o, s, I(n));
}
function sd(e, t, n) {
	let { calendar: r } = e, i = Ul(r, e, t), [a, o] = Zs(i, r, 1);
	return tc(i, r, a, o, I(n));
}
function cd(e, t, n) {
	let { calendar: r } = e, i = Wl(r, e, t), [a, o] = Qs(i, r);
	return nc(i, r, a, o, I(n));
}
function ld(e, t, n) {
	return Vs(ql(e, t), I(n));
}
function ud(e, t, n) {
	let { calendar: r } = e, [i, a] = Bl(r, e, t), [o, s] = Zs(a, r), [c, l, u] = tn(n, 2);
	return Gl(e, i, a, o, s, c, l, u);
}
//#endregion
//#region ../../node_modules/.pnpm/temporal-polyfill@1.0.5/node_modules/temporal-polyfill/chunks/classApi-basic.js
function dd(e) {
	let t = va(e).toLowerCase();
	return t === "iso8601" ? void 0 : t === "gregory" ? 0 : void L(xn(e, "temporal-polyfill/full"));
}
function fd(e = fr) {
	return dd(e);
}
var pd = /*@__PURE__*/ new WeakMap(), md = /*@__PURE__*/ Uu(Bu, class {
	constructor(e, t, n = void 0) {
		let r = Pa(Ca(e)), i = Vc(Ic(t)), a = fd(n);
		yd(this, Ga(r, i, a));
	}
	static from(e, t = void 0) {
		return hd(vd(e, t));
	}
	static compare(e, t) {
		return Cs(vd(e), vd(t));
	}
	get calendarId() {
		return hr(R(this).calendar);
	}
	get timeZoneId() {
		return R(this).timeZone.id;
	}
	get epochMilliseconds() {
		return Si(R(this).epochNanoseconds);
	}
	get epochNanoseconds() {
		return R(this).epochNanoseconds;
	}
	get offset() {
		return Dc(_o(R(this)).offsetNanoseconds);
	}
	get offsetNanoseconds() {
		return _o(R(this)).offsetNanoseconds;
	}
	get hoursInDay() {
		return Za(R(this));
	}
	with(e, t = void 0) {
		return hd(ud(R(this), Wd(e), t));
	}
	withCalendar(e) {
		return hd({
			...R(this),
			calendar: gf(e)
		});
	}
	withTimeZone(e) {
		return hd({
			...R(this),
			timeZone: Vc(bd(e))
		});
	}
	withPlainTime(e = void 0) {
		return hd(ju(R(this), Zd(e)));
	}
	add(e, t = void 0) {
		return hd(Co(R(this), Sf(e), I(t)));
	}
	subtract(e, t = void 0) {
		return hd(Co(R(this), ds(Sf(e)), I(t)));
	}
	until(e, t = void 0) {
		return yf($u(0, R(this), vd(e), t));
	}
	since(e, t = void 0) {
		return yf($u(1, R(this), vd(e), t));
	}
	round(e) {
		let t = R(this), [n, r, i] = $t(e);
		return hd(Xa(t, n, r, i));
	}
	startOfDay() {
		return hd(Qa(R(this)));
	}
	equals(e) {
		return ks(R(this), vd(e));
	}
	toInstant() {
		return Cd($l(R(this)));
	}
	toPlainDateTime() {
		return tf(eu(R(this)));
	}
	toPlainDate() {
		return lf(tu(R(this)));
	}
	toPlainTime() {
		return qd(nu(R(this)));
	}
	toLocaleString(e = void 0, t = {}) {
		let n = R(this), r = new oc(e, pu(Tu(t), Lo(n)));
		return mu(r, n), r.format(Si(n.epochNanoseconds));
	}
	toString(e = void 0) {
		return dc(R(this), e);
	}
	toJSON() {
		return dc(R(this));
	}
	getTimeZoneTransition(e) {
		let t = R(this), n = t.timeZone.C(t.epochNanoseconds, dn(e));
		return n === void 0 ? null : hd({
			...t,
			epochNanoseconds: n
		});
	}
	valueOf() {
		return Ku();
	}
}, gd, Ju, Zu, Lr);
function hd(e) {
	return yd(Object.create(md.prototype), e);
}
function R(e) {
	return _d(e) || Gu();
}
function gd(e) {
	let t = R(e);
	return {
		..._o(t),
		calendar: t.calendar
	};
}
function _d(e) {
	return pd.get(e);
}
function vd(e, t) {
	if (En(e)) {
		let n = _d(e);
		return n ? (tn(t), n) : Xc(bd, mf(e), e, t);
	}
	return ol(e, dd, t);
}
function yd(e, t) {
	return pd.set(e, t), Wu(e), e;
}
function bd(e) {
	if (En(e)) {
		let t = _d(e);
		return t || Dn(Sn(e)), t.timeZone.id;
	}
	return ((e) => Lc(hl(va(e))))(e);
}
var xd = /*@__PURE__*/ new WeakMap(), Sd = /*@__PURE__*/ Uu(Vu, class {
	constructor(e) {
		let t = Pa(Ca(e));
		Od(this, Wa(t));
	}
	static from(e) {
		return Cd(Ed(e));
	}
	static fromEpochMilliseconds(e) {
		return Cd(uu(e));
	}
	static fromEpochNanoseconds(e) {
		return Cd(du(e));
	}
	static compare(e, t) {
		return Cs(Ed(e), Ed(t));
	}
	get epochMilliseconds() {
		return Si(wd(this).epochNanoseconds);
	}
	get epochNanoseconds() {
		return wd(this).epochNanoseconds;
	}
	add(e) {
		return Cd(Wa(Eo(wd(this).epochNanoseconds, Sf(e))));
	}
	subtract(e) {
		return Cd(Wa(Eo(wd(this).epochNanoseconds, ds(Sf(e)))));
	}
	until(e, t = void 0) {
		return yf(Qu(0, wd(this), Ed(e), t));
	}
	since(e, t = void 0) {
		return yf(Qu(1, wd(this), Ed(e), t));
	}
	round(e) {
		let t = wd(this), [n, r, i] = $t(e, 5, 1);
		return Cd(Wa(po(t.epochNanoseconds, go(n, r), i)));
	}
	equals(e) {
		return Os(wd(this), Ed(e));
	}
	toZonedDateTimeISO(e) {
		return hd(Ql(wd(this), Vc(bd(e))));
	}
	toLocaleString(e = void 0, t = {}) {
		let n = wd(this);
		return new oc(e, wu(t)).format(Si(n.epochNanoseconds));
	}
	toString(e = void 0) {
		return uc(bd, wd(this), e);
	}
	toJSON() {
		return uc(bd, wd(this));
	}
	valueOf() {
		return Ku();
	}
});
function Cd(e) {
	return Od(Object.create(Sd.prototype), e);
}
function wd(e) {
	return Td(e) || Gu();
}
function Td(e) {
	return xd.get(e);
}
function Ed(e) {
	if (En(e)) {
		let t = Td(e);
		if (t) return t;
		let n = _d(e);
		if (n) return Wa(n.epochNanoseconds);
	}
	return il(e);
}
var { toTemporalInstant: Dd } = { toTemporalInstant() {
	let e = Date.prototype.valueOf.call(this);
	return Cd(Wa(BigInt(ba(e)) * Ar));
} };
function Od(e, t) {
	return xd.set(e, t), Wu(e), e;
}
var kd = /*@__PURE__*/ new WeakMap(), Ad = /*@__PURE__*/ Uu(Iu, class {
	constructor(e, t, n = void 0, r) {
		let i = gt(e), a = gt(t), o = fd(n), s = ja(Gi({
			year: gt(r ?? 1972),
			month: i,
			day: a
		}));
		Fd(this, qa(s, o));
	}
	static from(e, t = void 0) {
		return jd(Pd(e, t));
	}
	get calendarId() {
		return hr(Md(this).calendar);
	}
	with(e, t = void 0) {
		return jd(cd(Md(this), Wd(e), t));
	}
	equals(e) {
		return Ns(Md(this), Pd(e));
	}
	toPlainDate(e) {
		return lf(ou(Md(this).calendar, this, e));
	}
	toLocaleString(e = void 0, t = {}) {
		let n = Md(this), r = new oc(e, fu(Au(t)));
		return mu(r, n, 1), r.format(Ei(n));
	}
	toString(e = void 0) {
		return hc(Md(this), e);
	}
	toJSON() {
		return hc(Md(this));
	}
	valueOf() {
		return Ku();
	}
}, Md, Yu);
function jd(e) {
	return Fd(Object.create(Ad.prototype), e);
}
function Md(e) {
	return Nd(e) || Gu();
}
function Nd(e) {
	return kd.get(e);
}
function Pd(e, t) {
	if (En(e)) {
		let n = Nd(e);
		if (n) return I(t), n;
		let r = hf(e);
		return el(r === void 0 ? void 0 : r, r === void 0, e, t);
	}
	let n = dl(e, dd);
	return I(t), n;
}
function Fd(e, t) {
	return kd.set(e, t), Wu(e), e;
}
var Id = /*@__PURE__*/ new WeakMap(), Ld = /*@__PURE__*/ Uu(Fu, class {
	constructor(e, t, n = void 0, r) {
		let i = gt(e), a = gt(t), o = fd(n), s = Aa(Gi({
			year: i,
			month: a,
			day: gt(r ?? 1)
		}));
		Hd(this, qa(s, o));
	}
	static from(e, t = void 0) {
		return Rd(Vd(e, t));
	}
	static compare(e, t) {
		return Es(Vd(e), Vd(t));
	}
	get calendarId() {
		return hr(zd(this).calendar);
	}
	with(e, t = void 0) {
		return Rd(sd(zd(this), Wd(e), t));
	}
	add(e, t = void 0) {
		let n = zd(this);
		return Rd(qa(So(n.calendar, n, Sf(e), I(t)), n.calendar));
	}
	subtract(e, t = void 0) {
		let n = zd(this);
		return Rd(qa(So(n.calendar, n, ds(Sf(e)), I(t)), n.calendar));
	}
	until(e, t = void 0) {
		return yf(nd(0, zd(this), Vd(e), t));
	}
	since(e, t = void 0) {
		return yf(nd(1, zd(this), Vd(e), t));
	}
	equals(e) {
		return Ms(zd(this), Vd(e));
	}
	toPlainDate(e) {
		return lf(au(zd(this).calendar, this, e));
	}
	toLocaleString(e = void 0, t = {}) {
		let n = zd(this), r = new oc(e, fu(ku(t)));
		return mu(r, n, 1), r.format(Ei(n));
	}
	toString(e = void 0) {
		return mc(zd(this), e);
	}
	toJSON() {
		return mc(zd(this));
	}
	valueOf() {
		return Ku();
	}
}, zd, qu, Xu);
function Rd(e) {
	return Hd(Object.create(Ld.prototype), e);
}
function zd(e) {
	return Bd(e) || Gu();
}
function Bd(e) {
	return Id.get(e);
}
function Vd(e, t) {
	if (En(e)) {
		let n = Bd(e);
		return n ? (I(t), n) : $c(mf(e), e, t);
	}
	let n = ll(e, dd);
	return I(t), n;
}
function Hd(e, t) {
	return Id.set(e, t), Wu(e), e;
}
function Ud(e) {
	if (!En(e)) return;
	let t = Td(e);
	return t ? [Vu, t] : (t = _d(e), t ? [Bu, t] : (t = rf(e), t ? [Ru, t] : (t = df(e), t ? [Lu, t] : (t = Yd(e), t ? [zu, t] : (t = Bd(e), t ? [Fu, t] : (t = Nd(e), t ? [Iu, t] : (t = xf(e), t ? [Hu, t] : void 0)))))));
}
function Wd(e) {
	return (Ud(e) || e.calendar !== void 0 || e.timeZone !== void 0) && Dn("Invalid bag"), e;
}
var Gd = /*@__PURE__*/ new WeakMap(), Kd = /*@__PURE__*/ Uu(zu, class {
	constructor(e = 0, t = 0, n = 0, r = 0, i = 0, a = 0) {
		let o = di(Pn(gt, {
			hour: e,
			minute: t,
			second: n,
			millisecond: r,
			microsecond: i,
			nanosecond: a
		}));
		Qd(this, Ja(o));
	}
	static from(e, t = void 0) {
		return qd(Xd(e, t));
	}
	static compare(e, t) {
		return Ds(Xd(e), Xd(t));
	}
	with(e, t = void 0) {
		return qd(ld(Jd(this), Wd(e), t));
	}
	add(e) {
		return qd(To(Jd(this), Sf(e))[0]);
	}
	subtract(e) {
		return qd(To(Jd(this), ds(Sf(e)))[0]);
	}
	until(e, t = void 0) {
		return yf(rd(0, Jd(this), Xd(e), t));
	}
	since(e, t = void 0) {
		return yf(rd(1, Jd(this), Xd(e), t));
	}
	round(e) {
		let t = Jd(this), [n, r, i] = $t(e, 5);
		return qd(io(t, ho(n, r), i)[0]);
	}
	equals(e) {
		return Ps(Jd(this), Xd(e));
	}
	toLocaleString(e = void 0, t = {}) {
		let n = Jd(this);
		return new oc(e, fu(Ou(t))).format(hi(n));
	}
	toString(e = void 0) {
		return _c(Jd(this), e);
	}
	toJSON() {
		return _c(Jd(this));
	}
	valueOf() {
		return Ku();
	}
}, Jd, Lr);
function qd(e) {
	return Qd(Object.create(Kd.prototype), e);
}
function Jd(e) {
	return Yd(e) || Gu();
}
function Yd(e) {
	return Gd.get(e);
}
function Xd(e, t) {
	if (En(e)) {
		let n = Yd(e);
		if (n) return I(t), n;
		let r = rf(e);
		if (r) return I(t), Ja(r);
		let i = _d(e);
		return i ? (I(t), nu(i)) : tl(e, t);
	}
	let n = fl(e);
	return I(t), n;
}
function Zd(e) {
	return e === void 0 ? void 0 : Xd(e);
}
function Qd(e, t) {
	return Gd.set(e, t), Wu(e), e;
}
var $d = /*@__PURE__*/ new WeakMap(), ef = /*@__PURE__*/ Uu(Ru, class {
	constructor(e, t, n, r = 0, i = 0, a = 0, o = 0, s = 0, c = 0, l = void 0) {
		let u = Ma(Wi(Pn(gt, {
			year: e,
			month: t,
			day: n,
			hour: r,
			minute: i,
			second: a,
			millisecond: o,
			microsecond: s,
			nanosecond: c
		}))), d = fd(l);
		of(this, Ka(u, d));
	}
	static from(e, t = void 0) {
		return tf(af(e, t));
	}
	static compare(e, t) {
		return Ts(af(e), af(t));
	}
	get calendarId() {
		return hr(nf(this).calendar);
	}
	with(e, t = void 0) {
		return tf(od(nf(this), Wd(e), t));
	}
	withCalendar(e) {
		return tf(Ka(nf(this), gf(e)));
	}
	withPlainTime(e = void 0) {
		let t = nf(this);
		return tf($s(t, Zd(e), t.calendar));
	}
	add(e, t = void 0) {
		let n = nf(this);
		return tf(Ka(wo(n.calendar, n, Sf(e), I(t)), n.calendar));
	}
	subtract(e, t = void 0) {
		let n = nf(this);
		return tf(Ka(wo(n.calendar, n, ds(Sf(e)), I(t)), n.calendar));
	}
	until(e, t = void 0) {
		return yf(ed(0, nf(this), af(e), t));
	}
	since(e, t = void 0) {
		return yf(ed(1, nf(this), af(e), t));
	}
	round(e) {
		let t = nf(this), [n, r, i] = $t(e);
		return tf(Ka(ro(t, ho(n, r), i), t.calendar));
	}
	equals(e) {
		return As(nf(this), af(e));
	}
	toZonedDateTime(e, t = void 0) {
		return hd(ru(nf(this), Vc(bd(e)), nn(t)));
	}
	toPlainDate() {
		let e = nf(this);
		return lf(qa(e, e.calendar));
	}
	toPlainTime() {
		return qd(Ja(nf(this)));
	}
	toLocaleString(e = void 0, t = {}) {
		let n = nf(this), r = new oc(e, fu(Eu(t)));
		return mu(r, n), r.format(wi(n));
	}
	toString(e = void 0) {
		return fc(nf(this), e);
	}
	toJSON() {
		return fc(nf(this));
	}
	valueOf() {
		return Ku();
	}
}, nf, Ju, Zu, Lr);
function tf(e) {
	return of(Object.create(ef.prototype), e);
}
function nf(e) {
	return rf(e) || Gu();
}
function rf(e) {
	return $d.get(e);
}
function af(e, t) {
	if (En(e)) {
		let n = rf(e);
		if (n) return I(t), n;
		let r = df(e);
		if (r) return I(t), Ka(Ta(r, ui), r.calendar);
		let i = _d(e);
		return i ? (I(t), eu(i)) : Zc(mf(e), e, t);
	}
	let n = sl(e, dd);
	return I(t), n;
}
function of(e, t) {
	return $d.set(e, t), Wu(e), e;
}
var sf = /*@__PURE__*/ new WeakMap(), cf = /*@__PURE__*/ Uu(Lu, class {
	constructor(e, t, n, r = void 0) {
		let i = ja(Gi(Pn(gt, {
			year: e,
			month: t,
			day: n
		}))), a = fd(r);
		pf(this, qa(i, a));
	}
	static from(e, t = void 0) {
		return lf(ff(e, t));
	}
	static compare(e, t) {
		return Es(ff(e), ff(t));
	}
	get calendarId() {
		return hr(uf(this).calendar);
	}
	with(e, t = void 0) {
		return lf(ad(uf(this), Wd(e), t));
	}
	withCalendar(e) {
		return lf(qa(uf(this), gf(e)));
	}
	add(e, t = void 0) {
		let n = uf(this);
		return lf(qa(Do(n.calendar, n, Sf(e), I(t)), n.calendar));
	}
	subtract(e, t = void 0) {
		let n = uf(this);
		return lf(qa(Do(n.calendar, n, ds(Sf(e)), I(t)), n.calendar));
	}
	until(e, t = void 0) {
		return yf(td(0, uf(this), ff(e), t));
	}
	since(e, t = void 0) {
		return yf(td(1, uf(this), ff(e), t));
	}
	equals(e) {
		return js(uf(this), ff(e));
	}
	toZonedDateTime(e) {
		let t = En(e) ? {
			timeZone: e.timeZone,
			plainTime: e.plainTime
		} : { timeZone: e }, n = uf(this), r = bd(t.timeZone), i = t.plainTime, a = i === void 0 ? void 0 : Xd(i);
		return hd(iu(n, Vc(r), a));
	}
	toPlainDateTime(e = void 0) {
		let t = uf(this);
		return tf($s(t, Zd(e), t.calendar));
	}
	toPlainYearMonth() {
		return Rd(cu(uf(this).calendar, this));
	}
	toPlainMonthDay() {
		return jd(su(uf(this).calendar, this));
	}
	toLocaleString(e = void 0, t = {}) {
		let n = uf(this), r = new oc(e, fu(Du(t)));
		return mu(r, n), r.format(Ei(n));
	}
	toString(e = void 0) {
		return pc(uf(this), e);
	}
	toJSON() {
		return pc(uf(this));
	}
	valueOf() {
		return Ku();
	}
}, uf, Ju, Zu);
function lf(e) {
	return pf(Object.create(cf.prototype), e);
}
function uf(e) {
	return df(e) || Gu();
}
function df(e) {
	return sf.get(e);
}
function ff(e, t) {
	if (En(e)) {
		let n = df(e);
		if (n) return I(t), n;
		let r = rf(e);
		if (r) return I(t), qa(r, r.calendar);
		let i = _d(e);
		return i ? (I(t), tu(i)) : Qc(mf(e), e, t);
	}
	let n = cl(e, dd);
	return I(t), n;
}
function pf(e, t) {
	return sf.set(e, t), Wu(e), e;
}
function mf(e) {
	let t = hf(e);
	return t === void 0 ? void 0 : t;
}
function hf(e) {
	let { calendar: t } = e;
	if (t !== void 0) return gf(t);
}
function gf(e) {
	if (En(e)) {
		let t = df(e) || rf(e) || _d(e) || Nd(e) || Bd(e);
		return t || Dn(bn(e)), t.calendar;
	}
	return ((e) => dd(ml(va(e))))(e);
}
var _f = /*@__PURE__*/ new WeakMap(), vf = /*@__PURE__*/ Uu(Hu, class {
	constructor(e = 0, t = 0, n = 0, r = 0, i = 0, a = 0, o = 0, s = 0, c = 0, l = 0) {
		let u = ps(Pn(wa, {
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
		wf(this, Ya(u));
	}
	static from(e) {
		return yf(Sf(e));
	}
	static compare(e, t, n = void 0) {
		return ws(Cf, Sf(e), Sf(t), n);
	}
	get sign() {
		return bf(this).sign;
	}
	get blank() {
		return !bf(this).sign;
	}
	with(e) {
		return yf(Jl(bf(this), e));
	}
	negated() {
		return yf(us(bf(this)));
	}
	abs() {
		return yf(ls(bf(this)));
	}
	add(e) {
		return yf(ss(0, bf(this), Sf(e)));
	}
	subtract(e) {
		return yf(ss(1, bf(this), Sf(e)));
	}
	round(e) {
		return yf(cs(Cf, bf(this), e));
	}
	total(e) {
		return Xl(Cf, bf(this), e);
	}
	toLocaleString(e = void 0, t) {
		let n = bf(this);
		return Intl.DurationFormat ? new Intl.DurationFormat(e, t).format(n) : vc(n, t);
	}
	toString(e = void 0) {
		return vc(bf(this), e);
	}
	toJSON() {
		return vc(bf(this));
	}
	valueOf() {
		return Ku();
	}
}, bf, la);
function yf(e) {
	return wf(Object.create(vf.prototype), e);
}
function bf(e) {
	return xf(e) || Gu();
}
function xf(e) {
	return _f.get(e);
}
function Sf(e) {
	return En(e) ? xf(e) || nl(e) : pl(e);
}
function Cf(e) {
	if (e !== void 0) {
		if (En(e)) {
			let t = _d(e);
			if (t) return t;
			let n = df(e);
			if (n) return n;
			let r = rf(e);
			return r ? qa(r, r.calendar) : Yc(bd, mf(e), e);
		}
		return al(e, dd);
	}
}
function wf(e, t) {
	return _f.set(e, t), Wu(e), e;
}
var Tf = /*@__PURE__*/ Object.defineProperties({}, {
	...Nn("Temporal.Now"),
	...Mn({
		timeZoneId() {
			return Pu();
		},
		instant() {
			return Cd(Wa(Nu()));
		},
		zonedDateTimeISO(e = Pu()) {
			let t = Vc(bd(e));
			return hd(Ga(Nu(), t));
		},
		plainDateTimeISO(e = Pu()) {
			return tf(Ka(Mu(Vc(bd(e)))));
		},
		plainDateISO(e = Pu()) {
			return lf(qa(Mu(Vc(bd(e)))));
		},
		plainTimeISO(e = Pu()) {
			return qd(Ja(Mu(Vc(bd(e)))));
		}
	})
}), Ef = /*@__PURE__*/ Object.defineProperties({}, {
	...Nn("Temporal"),
	...Mn({
		PlainYearMonth: Ld,
		PlainMonthDay: Ad,
		PlainDate: cf,
		PlainTime: Kd,
		PlainDateTime: ef,
		ZonedDateTime: md,
		Instant: Sd,
		Duration: vf,
		Now: Tf
	})
}), Df = nt || Ef;
nt && Date.prototype.toTemporalInstant;
//#endregion
//#region src/core/utils/DateUtils.ts
var z = /* @__PURE__ */ tt((/* @__PURE__ */ F(((e, t) => {
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
function Of(e, t) {
	let n = e < 0;
	e = Math.abs(e);
	let r = t?.hoursMinLength ?? 2, i = Math.floor(e / 3600), a = i.toFixed(0).padStart(r, "0"), o = i > 0 ? 2 : t?.minutesMinLength ?? 2, s = Math.floor(e % 3600 / 60).toFixed(0).padStart(o, "0"), c = Math.round(e % 3600 % 60).toFixed(0).padStart(2, "0"), l = "";
	return i > 0 && (l += `${a}:`), l += `${s}:${c}`, n && (l = "-" + l), l;
}
function kf(e) {
	return `${`${e.getFullYear()}`.padStart(4, "0")}-${`${e.getMonth() + 1}`.padStart(2, "0")}-${`${e.getDate()}`.padStart(2, "0")}`;
}
//#endregion
//#region src/audio/Clock/Clock.tsx
function Af({ seconds: e, className: t, minutesMinLength: n, hoursMinLength: r, ...i }) {
	let a = S(() => Math.floor(e), [e]), o = S(() => jf(a), [a]);
	return /* @__PURE__ */ D("time", {
		dateTime: o,
		className: (0, z.default)("mx_Clock", t),
		...i,
		children: Of(e, {
			minutesMinLength: n,
			hoursMinLength: r
		})
	});
}
function jf(e) {
	if (!isNaN(e)) return new Df.Duration(0, 0, 0, 0, 0, 0, Math.round(e)).round({
		smallestUnit: "seconds",
		largestUnit: "hours"
	}).toString();
}
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/play-solid.js
function Mf(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "m8.98 4.677 9.921 5.58c1.36.764 1.36 2.722 0 3.486l-9.92 5.58C7.647 20.073 6 19.11 6 17.58V6.42c0-1.53 1.647-2.493 2.98-1.743" })
	});
}
Mf.displayName = "PlaySolidIcon";
var Nf = d(Mf);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/pause-solid.js
function Pf(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M8 4a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V6a2 2 0 0 0-2-2m8 0a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V6a2 2 0 0 0-2-2" })
	});
}
Pf.displayName = "PauseSolidIcon";
var Ff = d(Pf), If = { button: "_button_13syj_8" }, Lf = l(null);
Lf.displayName = "I18nContext";
function B() {
	let e = g(Lf);
	if (!e) throw Error("useI18n must be used within an I18nContext.Provider");
	return e;
}
//#endregion
//#region src/audio/PlayPauseButton/PlayPauseButton.tsx
function Rf({ disabled: e = !1, playing: t = !1, togglePlay: n, className: r, ...i }) {
	let { translate: a } = B(), o = a(t ? "action|pause" : "action|play");
	return /* @__PURE__ */ D(M, {
		size: "32px",
		"aria-label": o,
		tooltip: o,
		onClick: n,
		className: (0, z.default)(If.button, r),
		disabled: e,
		...i,
		children: D(t ? Ff : Nf, {})
	});
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_freeGlobal.js
var zf = typeof global == "object" && global && global.Object === Object && global, Bf = typeof self == "object" && self && self.Object === Object && self, Vf = zf || Bf || Function("return this")(), Hf = Vf.Symbol, Uf = Object.prototype, Wf = Uf.hasOwnProperty, Gf = Uf.toString, Kf = Hf ? Hf.toStringTag : void 0;
function qf(e) {
	var t = Wf.call(e, Kf), n = e[Kf];
	try {
		e[Kf] = void 0;
		var r = !0;
	} catch {}
	var i = Gf.call(e);
	return r && (t ? e[Kf] = n : delete e[Kf]), i;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_objectToString.js
var Jf = Object.prototype.toString;
function Yf(e) {
	return Jf.call(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseGetTag.js
var Xf = "[object Null]", Zf = "[object Undefined]", Qf = Hf ? Hf.toStringTag : void 0;
function $f(e) {
	return e == null ? e === void 0 ? Zf : Xf : Qf && Qf in Object(e) ? qf(e) : Yf(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isObjectLike.js
function ep(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isSymbol.js
var tp = "[object Symbol]";
function np(e) {
	return typeof e == "symbol" || ep(e) && $f(e) == tp;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayMap.js
function rp(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
	return i;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isArray.js
var ip = Array.isArray, ap = 1 / 0, op = Hf ? Hf.prototype : void 0, sp = op ? op.toString : void 0;
function cp(e) {
	if (typeof e == "string") return e;
	if (ip(e)) return rp(e, cp) + "";
	if (np(e)) return sp ? sp.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -ap ? "-0" : t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_trimmedEndIndex.js
var lp = /\s/;
function up(e) {
	for (var t = e.length; t-- && lp.test(e.charAt(t)););
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseTrim.js
var dp = /^\s+/;
function fp(e) {
	return e && e.slice(0, up(e) + 1).replace(dp, "");
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isObject.js
function pp(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/toNumber.js
var mp = NaN, hp = /^[-+]0x[0-9a-f]+$/i, gp = /^0b[01]+$/i, _p = /^0o[0-7]+$/i, vp = parseInt;
function yp(e) {
	if (typeof e == "number") return e;
	if (np(e)) return mp;
	if (pp(e)) {
		var t = typeof e.valueOf == "function" ? e.valueOf() : e;
		e = pp(t) ? t + "" : t;
	}
	if (typeof e != "string") return e === 0 ? e : +e;
	e = fp(e);
	var n = gp.test(e);
	return n || _p.test(e) ? vp(e.slice(2), n ? 2 : 8) : hp.test(e) ? mp : +e;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/identity.js
function bp(e) {
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isFunction.js
var xp = "[object AsyncFunction]", Sp = "[object Function]", Cp = "[object GeneratorFunction]", wp = "[object Proxy]";
function Tp(e) {
	if (!pp(e)) return !1;
	var t = $f(e);
	return t == Sp || t == Cp || t == xp || t == wp;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_coreJsData.js
var Ep = Vf["__core-js_shared__"], Dp = function() {
	var e = /[^.]+$/.exec(Ep && Ep.keys && Ep.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function Op(e) {
	return !!Dp && Dp in e;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_toSource.js
var kp = Function.prototype.toString;
function Ap(e) {
	if (e != null) {
		try {
			return kp.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsNative.js
var jp = /[\\^$.*+?()[\]{}|]/g, Mp = /^\[object .+?Constructor\]$/, Np = Function.prototype, Pp = Object.prototype, Fp = Np.toString, Ip = Pp.hasOwnProperty, Lp = RegExp("^" + Fp.call(Ip).replace(jp, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Rp(e) {
	return !pp(e) || Op(e) ? !1 : (Tp(e) ? Lp : Mp).test(Ap(e));
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getValue.js
function zp(e, t) {
	return e?.[t];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getNative.js
function Bp(e, t) {
	var n = zp(e, t);
	return Rp(n) ? n : void 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_WeakMap.js
var Vp = Bp(Vf, "WeakMap"), Hp = Object.create, Up = function() {
	function e() {}
	return function(t) {
		if (!pp(t)) return {};
		if (Hp) return Hp(t);
		e.prototype = t;
		var n = new e();
		return e.prototype = void 0, n;
	};
}();
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_apply.js
function Wp(e, t, n) {
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
function Gp(e, t) {
	var n = -1, r = e.length;
	for (t ||= Array(r); ++n < r;) t[n] = e[n];
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_shortOut.js
var Kp = 800, qp = 16, Jp = Date.now;
function Yp(e) {
	var t = 0, n = 0;
	return function() {
		var r = Jp(), i = qp - (r - n);
		if (n = r, i > 0) {
			if (++t >= Kp) return arguments[0];
		} else t = 0;
		return e.apply(void 0, arguments);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/constant.js
function Xp(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_defineProperty.js
var Zp = function() {
	try {
		var e = Bp(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}(), Qp = Yp(Zp ? function(e, t) {
	return Zp(e, "toString", {
		configurable: !0,
		enumerable: !1,
		value: Xp(t),
		writable: !0
	});
} : bp);
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayEach.js
function $p(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isIndex.js
var em = 9007199254740991, tm = /^(?:0|[1-9]\d*)$/;
function nm(e, t) {
	var n = typeof e;
	return t ??= em, !!t && (n == "number" || n != "symbol" && tm.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseAssignValue.js
function rm(e, t, n) {
	t == "__proto__" && Zp ? Zp(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/eq.js
function im(e, t) {
	return e === t || e !== e && t !== t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_assignValue.js
var am = Object.prototype.hasOwnProperty;
function om(e, t, n) {
	var r = e[t];
	(!(am.call(e, t) && im(r, n)) || n === void 0 && !(t in e)) && rm(e, t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copyObject.js
function sm(e, t, n, r) {
	var i = !n;
	n ||= {};
	for (var a = -1, o = t.length; ++a < o;) {
		var s = t[a], c = r ? r(n[s], e[s], s, n, e) : void 0;
		c === void 0 && (c = e[s]), i ? rm(n, s, c) : om(n, s, c);
	}
	return n;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_overRest.js
var cm = Math.max;
function lm(e, t, n) {
	return t = cm(t === void 0 ? e.length - 1 : t, 0), function() {
		for (var r = arguments, i = -1, a = cm(r.length - t, 0), o = Array(a); ++i < a;) o[i] = r[t + i];
		i = -1;
		for (var s = Array(t + 1); ++i < t;) s[i] = r[i];
		return s[t] = n(o), Wp(e, this, s);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isLength.js
var um = 9007199254740991;
function dm(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= um;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isArrayLike.js
function fm(e) {
	return e != null && dm(e.length) && !Tp(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isPrototype.js
var pm = Object.prototype;
function mm(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || pm);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseTimes.js
function hm(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsArguments.js
var gm = "[object Arguments]";
function _m(e) {
	return ep(e) && $f(e) == gm;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isArguments.js
var vm = Object.prototype, ym = vm.hasOwnProperty, bm = vm.propertyIsEnumerable, xm = _m(function() {
	return arguments;
}()) ? _m : function(e) {
	return ep(e) && ym.call(e, "callee") && !bm.call(e, "callee");
};
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/stubFalse.js
function Sm() {
	return !1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isBuffer.js
var Cm = typeof exports == "object" && exports && !exports.nodeType && exports, wm = Cm && typeof module == "object" && module && !module.nodeType && module, Tm = wm && wm.exports === Cm ? Vf.Buffer : void 0, Em = (Tm ? Tm.isBuffer : void 0) || Sm, Dm = "[object Arguments]", Om = "[object Array]", km = "[object Boolean]", Am = "[object Date]", jm = "[object Error]", Mm = "[object Function]", Nm = "[object Map]", Pm = "[object Number]", Fm = "[object Object]", Im = "[object RegExp]", Lm = "[object Set]", Rm = "[object String]", zm = "[object WeakMap]", Bm = "[object ArrayBuffer]", Vm = "[object DataView]", Hm = "[object Float32Array]", Um = "[object Float64Array]", Wm = "[object Int8Array]", Gm = "[object Int16Array]", Km = "[object Int32Array]", qm = "[object Uint8Array]", Jm = "[object Uint8ClampedArray]", Ym = "[object Uint16Array]", Xm = "[object Uint32Array]", Zm = {};
Zm[Hm] = Zm[Um] = Zm[Wm] = Zm[Gm] = Zm[Km] = Zm[qm] = Zm[Jm] = Zm[Ym] = Zm[Xm] = !0, Zm[Dm] = Zm[Om] = Zm[Bm] = Zm[km] = Zm[Vm] = Zm[Am] = Zm[jm] = Zm[Mm] = Zm[Nm] = Zm[Pm] = Zm[Fm] = Zm[Im] = Zm[Lm] = Zm[Rm] = Zm[zm] = !1;
function Qm(e) {
	return ep(e) && dm(e.length) && !!Zm[$f(e)];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseUnary.js
function $m(e) {
	return function(t) {
		return e(t);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nodeUtil.js
var eh = typeof exports == "object" && exports && !exports.nodeType && exports, th = eh && typeof module == "object" && module && !module.nodeType && module, nh = th && th.exports === eh && zf.process, rh = function() {
	try {
		return th && th.require && th.require("util").types || nh && nh.binding && nh.binding("util");
	} catch {}
}(), ih = rh && rh.isTypedArray, ah = ih ? $m(ih) : Qm, oh = Object.prototype.hasOwnProperty;
function sh(e, t) {
	var n = ip(e), r = !n && xm(e), i = !n && !r && Em(e), a = !n && !r && !i && ah(e), o = n || r || i || a, s = o ? hm(e.length, String) : [], c = s.length;
	for (var l in e) (t || oh.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || nm(l, c))) && s.push(l);
	return s;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_overArg.js
function ch(e, t) {
	return function(n) {
		return e(t(n));
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nativeKeys.js
var lh = ch(Object.keys, Object), uh = Object.prototype.hasOwnProperty;
function dh(e) {
	if (!mm(e)) return lh(e);
	var t = [];
	for (var n in Object(e)) uh.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/keys.js
function fh(e) {
	return fm(e) ? sh(e) : dh(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nativeKeysIn.js
function ph(e) {
	var t = [];
	if (e != null) for (var n in Object(e)) t.push(n);
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseKeysIn.js
var mh = Object.prototype.hasOwnProperty;
function hh(e) {
	if (!pp(e)) return ph(e);
	var t = mm(e), n = [];
	for (var r in e) (r != "constructor" || !t && mh.call(e, r)) && n.push(r);
	return n;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/keysIn.js
function gh(e) {
	return fm(e) ? sh(e, !0) : hh(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isKey.js
var _h = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, vh = /^\w*$/;
function yh(e, t) {
	if (ip(e)) return !1;
	var n = typeof e;
	return n == "number" || n == "symbol" || n == "boolean" || e == null || np(e) ? !0 : vh.test(e) || !_h.test(e) || t != null && e in Object(t);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nativeCreate.js
var bh = Bp(Object, "create");
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashClear.js
function xh() {
	this.__data__ = bh ? bh(null) : {}, this.size = 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashDelete.js
function Sh(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= +!!t, t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashGet.js
var Ch = "__lodash_hash_undefined__", wh = Object.prototype.hasOwnProperty;
function Th(e) {
	var t = this.__data__;
	if (bh) {
		var n = t[e];
		return n === Ch ? void 0 : n;
	}
	return wh.call(t, e) ? t[e] : void 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashHas.js
var Eh = Object.prototype.hasOwnProperty;
function Dh(e) {
	var t = this.__data__;
	return bh ? t[e] !== void 0 : Eh.call(t, e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashSet.js
var Oh = "__lodash_hash_undefined__";
function kh(e, t) {
	var n = this.__data__;
	return this.size += +!this.has(e), n[e] = bh && t === void 0 ? Oh : t, this;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Hash.js
function Ah(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Ah.prototype.clear = xh, Ah.prototype.delete = Sh, Ah.prototype.get = Th, Ah.prototype.has = Dh, Ah.prototype.set = kh;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheClear.js
function jh() {
	this.__data__ = [], this.size = 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_assocIndexOf.js
function Mh(e, t) {
	for (var n = e.length; n--;) if (im(e[n][0], t)) return n;
	return -1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheDelete.js
var Nh = Array.prototype.splice;
function Ph(e) {
	var t = this.__data__, n = Mh(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : Nh.call(t, n, 1), --this.size, !0);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheGet.js
function Fh(e) {
	var t = this.__data__, n = Mh(t, e);
	return n < 0 ? void 0 : t[n][1];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheHas.js
function Ih(e) {
	return Mh(this.__data__, e) > -1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheSet.js
function Lh(e, t) {
	var n = this.__data__, r = Mh(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_ListCache.js
function Rh(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Rh.prototype.clear = jh, Rh.prototype.delete = Ph, Rh.prototype.get = Fh, Rh.prototype.has = Ih, Rh.prototype.set = Lh;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Map.js
var zh = Bp(Vf, "Map");
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheClear.js
function Bh() {
	this.size = 0, this.__data__ = {
		hash: new Ah(),
		map: new (zh || Rh)(),
		string: new Ah()
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isKeyable.js
function Vh(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getMapData.js
function Hh(e, t) {
	var n = e.__data__;
	return Vh(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheDelete.js
function Uh(e) {
	var t = Hh(this, e).delete(e);
	return this.size -= +!!t, t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheGet.js
function Wh(e) {
	return Hh(this, e).get(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheHas.js
function Gh(e) {
	return Hh(this, e).has(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheSet.js
function Kh(e, t) {
	var n = Hh(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_MapCache.js
function qh(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
qh.prototype.clear = Bh, qh.prototype.delete = Uh, qh.prototype.get = Wh, qh.prototype.has = Gh, qh.prototype.set = Kh;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/memoize.js
var Jh = "Expected a function";
function Yh(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(Jh);
	var n = function() {
		var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	};
	return n.cache = new (Yh.Cache || qh)(), n;
}
Yh.Cache = qh;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_memoizeCapped.js
var Xh = 500;
function Zh(e) {
	var t = Yh(e, function(e) {
		return n.size === Xh && n.clear(), e;
	}), n = t.cache;
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stringToPath.js
var Qh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, $h = /\\(\\)?/g, eg = Zh(function(e) {
	var t = [];
	return e.charCodeAt(0) === 46 && t.push(""), e.replace(Qh, function(e, n, r, i) {
		t.push(r ? i.replace($h, "$1") : n || e);
	}), t;
});
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/toString.js
function tg(e) {
	return e == null ? "" : cp(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_castPath.js
function ng(e, t) {
	return ip(e) ? e : yh(e, t) ? [e] : eg(tg(e));
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_toKey.js
var rg = 1 / 0;
function ig(e) {
	if (typeof e == "string" || np(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -rg ? "-0" : t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseGet.js
function ag(e, t) {
	t = ng(t, e);
	for (var n = 0, r = t.length; e != null && n < r;) e = e[ig(t[n++])];
	return n && n == r ? e : void 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayPush.js
function og(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isFlattenable.js
var sg = Hf ? Hf.isConcatSpreadable : void 0;
function cg(e) {
	return ip(e) || xm(e) || !!(sg && e && e[sg]);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseFlatten.js
function lg(e, t, n, r, i) {
	var a = -1, o = e.length;
	for (n ||= cg, i ||= []; ++a < o;) {
		var s = e[a];
		t > 0 && n(s) ? t > 1 ? lg(s, t - 1, n, r, i) : og(i, s) : r || (i[i.length] = s);
	}
	return i;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/flatten.js
function ug(e) {
	return e != null && e.length ? lg(e, 1) : [];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_flatRest.js
function dg(e) {
	return Qp(lm(e, void 0, ug), e + "");
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getPrototype.js
var fg = ch(Object.getPrototypeOf, Object), pg = "[object Object]", mg = Function.prototype, hg = Object.prototype, gg = mg.toString, _g = hg.hasOwnProperty, vg = gg.call(Object);
function yg(e) {
	if (!ep(e) || $f(e) != pg) return !1;
	var t = fg(e);
	if (t === null) return !0;
	var n = _g.call(t, "constructor") && t.constructor;
	return typeof n == "function" && n instanceof n && gg.call(n) == vg;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseSlice.js
function bg(e, t, n) {
	var r = -1, i = e.length;
	t < 0 && (t = -t > i ? 0 : i + t), n = n > i ? i : n, n < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
	for (var a = Array(i); ++r < i;) a[r] = e[r + t];
	return a;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_castSlice.js
function xg(e, t, n) {
	var r = e.length;
	return n = n === void 0 ? r : n, !t && n >= r ? e : bg(e, t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hasUnicode.js
var Sg = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
function Cg(e) {
	return Sg.test(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_asciiToArray.js
function wg(e) {
	return e.split("");
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_unicodeToArray.js
var Tg = "\\ud800-\\udfff", Eg = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", Dg = "\\ufe0e\\ufe0f", Og = "[" + Tg + "]", kg = "[" + Eg + "]", Ag = "\\ud83c[\\udffb-\\udfff]", jg = "(?:" + kg + "|" + Ag + ")", Mg = "[^" + Tg + "]", Ng = "(?:\\ud83c[\\udde6-\\uddff]){2}", Pg = "[\\ud800-\\udbff][\\udc00-\\udfff]", Fg = "\\u200d", Ig = jg + "?", Lg = "[" + Dg + "]?", Rg = "(?:" + Fg + "(?:" + [
	Mg,
	Ng,
	Pg
].join("|") + ")" + Lg + Ig + ")*", zg = Lg + Ig + Rg, Bg = "(?:" + [
	Mg + kg + "?",
	kg,
	Ng,
	Pg,
	Og
].join("|") + ")", Vg = RegExp(Ag + "(?=" + Ag + ")|" + Bg + zg, "g");
function Hg(e) {
	return e.match(Vg) || [];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stringToArray.js
function Ug(e) {
	return Cg(e) ? Hg(e) : wg(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_createCaseFirst.js
function Wg(e) {
	return function(t) {
		t = tg(t);
		var n = Cg(t) ? Ug(t) : void 0, r = n ? n[0] : t.charAt(0), i = n ? xg(n, 1).join("") : t.slice(1);
		return r[e]() + i;
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/upperFirst.js
var Gg = Wg("toUpperCase");
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/capitalize.js
function Kg(e) {
	return Gg(tg(e).toLowerCase());
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackClear.js
function qg() {
	this.__data__ = new Rh(), this.size = 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackDelete.js
function Jg(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackGet.js
function Yg(e) {
	return this.__data__.get(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackHas.js
function Xg(e) {
	return this.__data__.has(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackSet.js
var Zg = 200;
function Qg(e, t) {
	var n = this.__data__;
	if (n instanceof Rh) {
		var r = n.__data__;
		if (!zh || r.length < Zg - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new qh(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Stack.js
function $g(e) {
	var t = this.__data__ = new Rh(e);
	this.size = t.size;
}
$g.prototype.clear = qg, $g.prototype.delete = Jg, $g.prototype.get = Yg, $g.prototype.has = Xg, $g.prototype.set = Qg;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseAssign.js
function e_(e, t) {
	return e && sm(t, fh(t), e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseAssignIn.js
function t_(e, t) {
	return e && sm(t, gh(t), e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneBuffer.js
var n_ = typeof exports == "object" && exports && !exports.nodeType && exports, r_ = n_ && typeof module == "object" && module && !module.nodeType && module, i_ = r_ && r_.exports === n_ ? Vf.Buffer : void 0, a_ = i_ ? i_.allocUnsafe : void 0;
function o_(e, t) {
	if (t) return e.slice();
	var n = e.length, r = a_ ? a_(n) : new e.constructor(n);
	return e.copy(r), r;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayFilter.js
function s_(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/stubArray.js
function c_() {
	return [];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getSymbols.js
var l_ = Object.prototype.propertyIsEnumerable, u_ = Object.getOwnPropertySymbols, d_ = u_ ? function(e) {
	return e == null ? [] : (e = Object(e), s_(u_(e), function(t) {
		return l_.call(e, t);
	}));
} : c_;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copySymbols.js
function f_(e, t) {
	return sm(e, d_(e), t);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getSymbolsIn.js
var p_ = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) og(t, d_(e)), e = fg(e);
	return t;
} : c_;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copySymbolsIn.js
function m_(e, t) {
	return sm(e, p_(e), t);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseGetAllKeys.js
function h_(e, t, n) {
	var r = t(e);
	return ip(e) ? r : og(r, n(e));
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getAllKeys.js
function g_(e) {
	return h_(e, fh, d_);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getAllKeysIn.js
function __(e) {
	return h_(e, gh, p_);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_DataView.js
var v_ = Bp(Vf, "DataView"), y_ = Bp(Vf, "Promise"), b_ = Bp(Vf, "Set"), x_ = "[object Map]", S_ = "[object Object]", C_ = "[object Promise]", w_ = "[object Set]", T_ = "[object WeakMap]", E_ = "[object DataView]", D_ = Ap(v_), O_ = Ap(zh), k_ = Ap(y_), A_ = Ap(b_), j_ = Ap(Vp), M_ = $f;
(v_ && M_(new v_(/* @__PURE__ */ new ArrayBuffer(1))) != E_ || zh && M_(new zh()) != x_ || y_ && M_(y_.resolve()) != C_ || b_ && M_(new b_()) != w_ || Vp && M_(new Vp()) != T_) && (M_ = function(e) {
	var t = $f(e), n = t == S_ ? e.constructor : void 0, r = n ? Ap(n) : "";
	if (r) switch (r) {
		case D_: return E_;
		case O_: return x_;
		case k_: return C_;
		case A_: return w_;
		case j_: return T_;
	}
	return t;
});
var N_ = M_, P_ = Object.prototype.hasOwnProperty;
function F_(e) {
	var t = e.length, n = new e.constructor(t);
	return t && typeof e[0] == "string" && P_.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Uint8Array.js
var I_ = Vf.Uint8Array;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneArrayBuffer.js
function L_(e) {
	var t = new e.constructor(e.byteLength);
	return new I_(t).set(new I_(e)), t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneDataView.js
function R_(e, t) {
	var n = t ? L_(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.byteLength);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneRegExp.js
var z_ = /\w*$/;
function B_(e) {
	var t = new e.constructor(e.source, z_.exec(e));
	return t.lastIndex = e.lastIndex, t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneSymbol.js
var V_ = Hf ? Hf.prototype : void 0, H_ = V_ ? V_.valueOf : void 0;
function U_(e) {
	return H_ ? Object(H_.call(e)) : {};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneTypedArray.js
function W_(e, t) {
	var n = t ? L_(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.length);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_initCloneByTag.js
var G_ = "[object Boolean]", K_ = "[object Date]", q_ = "[object Map]", J_ = "[object Number]", Y_ = "[object RegExp]", X_ = "[object Set]", Z_ = "[object String]", Q_ = "[object Symbol]", $_ = "[object ArrayBuffer]", ev = "[object DataView]", tv = "[object Float32Array]", nv = "[object Float64Array]", rv = "[object Int8Array]", iv = "[object Int16Array]", av = "[object Int32Array]", ov = "[object Uint8Array]", sv = "[object Uint8ClampedArray]", cv = "[object Uint16Array]", lv = "[object Uint32Array]";
function uv(e, t, n) {
	var r = e.constructor;
	switch (t) {
		case $_: return L_(e);
		case G_:
		case K_: return new r(+e);
		case ev: return R_(e, n);
		case tv:
		case nv:
		case rv:
		case iv:
		case av:
		case ov:
		case sv:
		case cv:
		case lv: return W_(e, n);
		case q_: return new r();
		case J_:
		case Z_: return new r(e);
		case Y_: return B_(e);
		case X_: return new r();
		case Q_: return U_(e);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_initCloneObject.js
function dv(e) {
	return typeof e.constructor == "function" && !mm(e) ? Up(fg(e)) : {};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsMap.js
var fv = "[object Map]";
function pv(e) {
	return ep(e) && N_(e) == fv;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isMap.js
var mv = rh && rh.isMap, hv = mv ? $m(mv) : pv, gv = "[object Set]";
function _v(e) {
	return ep(e) && N_(e) == gv;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isSet.js
var vv = rh && rh.isSet, yv = vv ? $m(vv) : _v, bv = 1, xv = 2, Sv = 4, Cv = "[object Arguments]", wv = "[object Array]", Tv = "[object Boolean]", Ev = "[object Date]", Dv = "[object Error]", Ov = "[object Function]", kv = "[object GeneratorFunction]", Av = "[object Map]", jv = "[object Number]", Mv = "[object Object]", Nv = "[object RegExp]", Pv = "[object Set]", Fv = "[object String]", Iv = "[object Symbol]", Lv = "[object WeakMap]", Rv = "[object ArrayBuffer]", zv = "[object DataView]", Bv = "[object Float32Array]", Vv = "[object Float64Array]", Hv = "[object Int8Array]", Uv = "[object Int16Array]", Wv = "[object Int32Array]", Gv = "[object Uint8Array]", Kv = "[object Uint8ClampedArray]", qv = "[object Uint16Array]", Jv = "[object Uint32Array]", Yv = {};
Yv[Cv] = Yv[wv] = Yv[Rv] = Yv[zv] = Yv[Tv] = Yv[Ev] = Yv[Bv] = Yv[Vv] = Yv[Hv] = Yv[Uv] = Yv[Wv] = Yv[Av] = Yv[jv] = Yv[Mv] = Yv[Nv] = Yv[Pv] = Yv[Fv] = Yv[Iv] = Yv[Gv] = Yv[Kv] = Yv[qv] = Yv[Jv] = !0, Yv[Dv] = Yv[Ov] = Yv[Lv] = !1;
function Xv(e, t, n, r, i, a) {
	var o, s = t & bv, c = t & xv, l = t & Sv;
	if (n && (o = i ? n(e, r, i, a) : n(e)), o !== void 0) return o;
	if (!pp(e)) return e;
	var u = ip(e);
	if (u) {
		if (o = F_(e), !s) return Gp(e, o);
	} else {
		var d = N_(e), f = d == Ov || d == kv;
		if (Em(e)) return o_(e, s);
		if (d == Mv || d == Cv || f && !i) {
			if (o = c || f ? {} : dv(e), !s) return c ? m_(e, t_(o, e)) : f_(e, e_(o, e));
		} else {
			if (!Yv[d]) return i ? e : {};
			o = uv(e, d, s);
		}
	}
	a ||= new $g();
	var p = a.get(e);
	if (p) return p;
	a.set(e, o), yv(e) ? e.forEach(function(r) {
		o.add(Xv(r, t, n, r, e, a));
	}) : hv(e) && e.forEach(function(r, i) {
		o.set(i, Xv(r, t, n, i, e, a));
	});
	var m = u ? void 0 : (l ? c ? __ : g_ : c ? gh : fh)(e);
	return $p(m || e, function(r, i) {
		m && (i = r, r = e[i]), om(o, i, Xv(r, t, n, i, e, a));
	}), o;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_setCacheAdd.js
var Zv = "__lodash_hash_undefined__";
function Qv(e) {
	return this.__data__.set(e, Zv), this;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_setCacheHas.js
function $v(e) {
	return this.__data__.has(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_SetCache.js
function ey(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.__data__ = new qh(); ++t < n;) this.add(e[t]);
}
ey.prototype.add = ey.prototype.push = Qv, ey.prototype.has = $v;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arraySome.js
function ty(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
	return !1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cacheHas.js
function ny(e, t) {
	return e.has(t);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_equalArrays.js
var ry = 1, iy = 2;
function ay(e, t, n, r, i, a) {
	var o = n & ry, s = e.length, c = t.length;
	if (s != c && !(o && c > s)) return !1;
	var l = a.get(e), u = a.get(t);
	if (l && u) return l == t && u == e;
	var d = -1, f = !0, p = n & iy ? new ey() : void 0;
	for (a.set(e, t), a.set(t, e); ++d < s;) {
		var m = e[d], h = t[d];
		if (r) var g = o ? r(h, m, d, t, e, a) : r(m, h, d, e, t, a);
		if (g !== void 0) {
			if (g) continue;
			f = !1;
			break;
		}
		if (p) {
			if (!ty(t, function(e, t) {
				if (!ny(p, t) && (m === e || i(m, e, n, r, a))) return p.push(t);
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
function oy(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e, r) {
		n[++t] = [r, e];
	}), n;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_setToArray.js
function sy(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e) {
		n[++t] = e;
	}), n;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_equalByTag.js
var cy = 1, ly = 2, uy = "[object Boolean]", dy = "[object Date]", fy = "[object Error]", py = "[object Map]", my = "[object Number]", hy = "[object RegExp]", gy = "[object Set]", _y = "[object String]", vy = "[object Symbol]", yy = "[object ArrayBuffer]", by = "[object DataView]", xy = Hf ? Hf.prototype : void 0, Sy = xy ? xy.valueOf : void 0;
function Cy(e, t, n, r, i, a, o) {
	switch (n) {
		case by:
			if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
			e = e.buffer, t = t.buffer;
		case yy: return !(e.byteLength != t.byteLength || !a(new I_(e), new I_(t)));
		case uy:
		case dy:
		case my: return im(+e, +t);
		case fy: return e.name == t.name && e.message == t.message;
		case hy:
		case _y: return e == t + "";
		case py: var s = oy;
		case gy:
			var c = r & cy;
			if (s ||= sy, e.size != t.size && !c) return !1;
			var l = o.get(e);
			if (l) return l == t;
			r |= ly, o.set(e, t);
			var u = ay(s(e), s(t), r, i, a, o);
			return o.delete(e), u;
		case vy: if (Sy) return Sy.call(e) == Sy.call(t);
	}
	return !1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_equalObjects.js
var wy = 1, Ty = Object.prototype.hasOwnProperty;
function Ey(e, t, n, r, i, a) {
	var o = n & wy, s = g_(e), c = s.length;
	if (c != g_(t).length && !o) return !1;
	for (var l = c; l--;) {
		var u = s[l];
		if (!(o ? u in t : Ty.call(t, u))) return !1;
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
var Dy = 1, Oy = "[object Arguments]", ky = "[object Array]", Ay = "[object Object]", jy = Object.prototype.hasOwnProperty;
function My(e, t, n, r, i, a) {
	var o = ip(e), s = ip(t), c = o ? ky : N_(e), l = s ? ky : N_(t);
	c = c == Oy ? Ay : c, l = l == Oy ? Ay : l;
	var u = c == Ay, d = l == Ay, f = c == l;
	if (f && Em(e)) {
		if (!Em(t)) return !1;
		o = !0, u = !1;
	}
	if (f && !u) return a ||= new $g(), o || ah(e) ? ay(e, t, n, r, i, a) : Cy(e, t, c, n, r, i, a);
	if (!(n & Dy)) {
		var p = u && jy.call(e, "__wrapped__"), m = d && jy.call(t, "__wrapped__");
		if (p || m) {
			var h = p ? e.value() : e, g = m ? t.value() : t;
			return a ||= new $g(), i(h, g, n, r, a);
		}
	}
	return f ? (a ||= new $g(), Ey(e, t, n, r, i, a)) : !1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsEqual.js
function Ny(e, t, n, r, i) {
	return e === t ? !0 : e == null || t == null || !ep(e) && !ep(t) ? e !== e && t !== t : My(e, t, n, r, Ny, i);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/now.js
var Py = function() {
	return Vf.Date.now();
}, Fy = "Expected a function", Iy = Math.max, Ly = Math.min;
function Ry(e, t, n) {
	var r, i, a, o, s, c, l = 0, u = !1, d = !1, f = !0;
	if (typeof e != "function") throw TypeError(Fy);
	t = yp(t) || 0, pp(n) && (u = !!n.leading, d = "maxWait" in n, a = d ? Iy(yp(n.maxWait) || 0, t) : a, f = "trailing" in n ? !!n.trailing : f);
	function p(t) {
		var n = r, a = i;
		return r = i = void 0, l = t, o = e.apply(a, n), o;
	}
	function m(e) {
		return l = e, s = setTimeout(_, t), u ? p(e) : o;
	}
	function h(e) {
		var n = e - c, r = e - l, i = t - n;
		return d ? Ly(i, a - r) : i;
	}
	function g(e) {
		var n = e - c, r = e - l;
		return c === void 0 || n >= t || n < 0 || d && r >= a;
	}
	function _() {
		var e = Py();
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
		return s === void 0 ? o : v(Py());
	}
	function x() {
		var e = Py(), n = g(e);
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
function zy(e) {
	var t = e == null ? 0 : e.length;
	return t ? e[t - 1] : void 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_parent.js
function By(e, t) {
	return t.length < 2 ? e : ag(e, bg(t, 0, -1));
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isEqual.js
function Vy(e, t) {
	return Ny(e, t);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseUnset.js
var Hy = Object.prototype.hasOwnProperty;
function Uy(e, t) {
	t = ng(t, e);
	var n = -1, r = t.length;
	if (!r) return !0;
	for (; ++n < r;) {
		var i = ig(t[n]);
		if (i === "__proto__" && !Hy.call(e, "__proto__") || (i === "constructor" || i === "prototype") && n < r - 1) return !1;
	}
	var a = By(e, t);
	return a == null || delete a[ig(zy(t))];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_customOmitClone.js
function Wy(e) {
	return yg(e) ? void 0 : e;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/omit.js
var Gy = 1, Ky = 2, qy = 4, Jy = dg(function(e, t) {
	var n = {};
	if (e == null) return n;
	var r = !1;
	t = rp(t, function(t) {
		return t = ng(t, e), r ||= t.length > 1, t;
	}), sm(e, __(e), n), r && (n = Xv(n, Gy | Ky | qy, Wy));
	for (var i = t.length; i--;) Uy(n, t[i]);
	return n;
}), Yy = "Expected a function";
function Xy(e, t, n) {
	var r = !0, i = !0;
	if (typeof e != "function") throw TypeError(Yy);
	return pp(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), Ry(e, t, {
		leading: r,
		maxWait: t,
		trailing: i
	});
}
var Zy = { seekBar: "_seekBar_16dv7_14" };
//#endregion
//#region src/audio/SeekBar/SeekBar.tsx
function Qy({ value: e = 0, className: t, ...n }) {
	let { translate: r } = B(), [i, a] = T(e), o = S(() => Xy(a, 10), []);
	return _(() => {
		o(e);
	}, [e, o]), _(() => () => {
		o.cancel();
	}, [o]), /* @__PURE__ */ D("input", {
		type: "range",
		className: (0, z.default)(Zy.seekBar, t),
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
var $y = {
	avatarWithDetails: "_avatarWithDetails_10imw_8",
	title: "_title_10imw_17",
	details: "_details_10imw_28"
}, eb = { flex: "_flex_4dswl_9" };
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
		className: (0, z.default)(eb.flex, c),
		style: d
	}, l);
}
//#endregion
//#region src/core/AvatarWithDetails/AvatarWithDetails.tsx
function tb({ as: e, className: t, details: n, avatar: r, title: i, ...a }) {
	return /* @__PURE__ */ O(e || "div", {
		className: (0, z.default)($y.avatarWithDetails, t),
		...a,
		children: [r, /* @__PURE__ */ O(V, {
			direction: "column",
			children: [/* @__PURE__ */ D("span", {
				className: $y.title,
				children: i
			}), /* @__PURE__ */ D("span", {
				className: $y.details,
				children: n
			})]
		})]
	});
}
//#endregion
//#region src/core/viewmodel/Disposables.ts
var nb = class {
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
}, rb = class {
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
}, ib = class {
	listeners = /* @__PURE__ */ new Set();
	add = (e) => (this.listeners.add(e), () => {
		this.listeners.delete(e);
	});
	emit = () => {
		for (let e of this.listeners) e();
	};
}, ab = class {
	subs;
	snapshot;
	props;
	disposables = new nb();
	constructor(e, t) {
		this.props = e, this.subs = new ib(), this.snapshot = new rb(t, () => {
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
}, ob = class {
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
function sb(e) {
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
function cb(e, t) {
	return S(() => {
		let n = new ob(e);
		return Object.assign(n, t), n;
	}, [e, t]);
}
//#endregion
//#region src/core/viewmodel/useViewModel.ts
function H(e) {
	return ee(e.subscribe, e.getSnapshot, e.getSnapshot);
}
//#endregion
//#region src/core/MemberAvatar/MemberAvatarView.tsx
function lb(e) {
	let { name: t, id: n, url: r, size: i } = H(e.vm);
	return /* @__PURE__ */ D(ne, {
		className: e.classNames,
		name: t,
		id: n,
		src: r,
		size: i
	});
}
//#endregion
//#region ../../node_modules/.pnpm/matrix-web-i18n@3.6.0_supports-color@10.2.2/node_modules/matrix-web-i18n/lib/utils.js
function ub(e) {
	return e.toLowerCase().replace("_", "-");
}
function db(e) {
	let t = [], n = ub(e), r = n.split("-");
	return r.length === 2 && r[0] === r[1] ? t.push(r[0]) : (t.push(n), r.length === 2 && t.push(r[0])), t;
}
//#endregion
//#region ../../node_modules/.pnpm/matrix-web-i18n@3.6.0_supports-color@10.2.2/node_modules/matrix-web-i18n/lib/index.js
var fb = "|", pb = /* @__PURE__ */ F(((e, t) => {
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
})), mb = /* @__PURE__ */ F(((e, t) => {
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
})), hb = /* @__PURE__ */ F(((e, t) => {
	var n = mb();
	t.exports = function() {
		return n() && !!Symbol.toStringTag;
	};
})), gb = /* @__PURE__ */ F(((e, t) => {
	t.exports = Object;
})), _b = /* @__PURE__ */ F(((e, t) => {
	t.exports = Error;
})), vb = /* @__PURE__ */ F(((e, t) => {
	t.exports = EvalError;
})), yb = /* @__PURE__ */ F(((e, t) => {
	t.exports = RangeError;
})), bb = /* @__PURE__ */ F(((e, t) => {
	t.exports = ReferenceError;
})), xb = /* @__PURE__ */ F(((e, t) => {
	t.exports = SyntaxError;
})), Sb = /* @__PURE__ */ F(((e, t) => {
	t.exports = TypeError;
})), Cb = /* @__PURE__ */ F(((e, t) => {
	t.exports = URIError;
})), wb = /* @__PURE__ */ F(((e, t) => {
	t.exports = Math.abs;
})), Tb = /* @__PURE__ */ F(((e, t) => {
	t.exports = Math.floor;
})), Eb = /* @__PURE__ */ F(((e, t) => {
	t.exports = Math.max;
})), Db = /* @__PURE__ */ F(((e, t) => {
	t.exports = Math.min;
})), Ob = /* @__PURE__ */ F(((e, t) => {
	t.exports = Math.pow;
})), kb = /* @__PURE__ */ F(((e, t) => {
	t.exports = Math.round;
})), Ab = /* @__PURE__ */ F(((e, t) => {
	t.exports = Number.isNaN || function(e) {
		return e !== e;
	};
})), jb = /* @__PURE__ */ F(((e, t) => {
	var n = Ab();
	t.exports = function(e) {
		return n(e) || e === 0 ? e : e < 0 ? -1 : 1;
	};
})), Mb = /* @__PURE__ */ F(((e, t) => {
	t.exports = Object.getOwnPropertyDescriptor;
})), Nb = /* @__PURE__ */ F(((e, t) => {
	var n = Mb();
	if (n) try {
		n([], "length");
	} catch {
		n = null;
	}
	t.exports = n;
})), Pb = /* @__PURE__ */ F(((e, t) => {
	var n = Object.defineProperty || !1;
	if (n) try {
		n({}, "a", { value: 1 });
	} catch {
		n = !1;
	}
	t.exports = n;
})), Fb = /* @__PURE__ */ F(((e, t) => {
	var n = typeof Symbol < "u" && Symbol, r = mb();
	t.exports = function() {
		return typeof n != "function" || typeof Symbol != "function" || typeof n("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : r();
	};
})), Ib = /* @__PURE__ */ F(((e, t) => {
	t.exports = typeof Reflect < "u" && Reflect.getPrototypeOf || null;
})), Lb = /* @__PURE__ */ F(((e, t) => {
	t.exports = gb().getPrototypeOf || null;
})), Rb = /* @__PURE__ */ F(((e, t) => {
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
})), zb = /* @__PURE__ */ F(((e, t) => {
	var n = Rb();
	t.exports = Function.prototype.bind || n;
})), Bb = /* @__PURE__ */ F(((e, t) => {
	t.exports = Function.prototype.call;
})), Vb = /* @__PURE__ */ F(((e, t) => {
	t.exports = Function.prototype.apply;
})), Hb = /* @__PURE__ */ F(((e, t) => {
	t.exports = typeof Reflect < "u" && Reflect && Reflect.apply;
})), Ub = /* @__PURE__ */ F(((e, t) => {
	var n = zb(), r = Vb(), i = Bb();
	t.exports = Hb() || n.call(i, r);
})), Wb = /* @__PURE__ */ F(((e, t) => {
	var n = zb(), r = Sb(), i = Bb(), a = Ub();
	t.exports = function(e) {
		if (e.length < 1 || typeof e[0] != "function") throw new r("a function is required");
		return a(n, i, e);
	};
})), Gb = /* @__PURE__ */ F(((e, t) => {
	var n = Wb(), r = Nb(), i;
	try {
		i = [].__proto__ === Array.prototype;
	} catch (e) {
		if (!e || typeof e != "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") throw e;
	}
	var a = !!i && r && r(Object.prototype, "__proto__"), o = Object, s = o.getPrototypeOf;
	t.exports = a && typeof a.get == "function" ? n([a.get]) : typeof s == "function" && function(e) {
		return s(e == null ? e : o(e));
	};
})), Kb = /* @__PURE__ */ F(((e, t) => {
	var n = Ib(), r = Lb(), i = Gb();
	t.exports = n ? function(e) {
		return n(e);
	} : r ? function(e) {
		if (!e || typeof e != "object" && typeof e != "function") throw TypeError("getProto: not an object");
		return r(e);
	} : i ? function(e) {
		return i(e);
	} : null;
})), qb = /* @__PURE__ */ F(((e, t) => {
	var n = Function.prototype.call, r = Object.prototype.hasOwnProperty;
	t.exports = zb().call(n, r);
})), Jb = /* @__PURE__ */ F(((e, t) => {
	var n, r = gb(), i = _b(), a = vb(), o = yb(), s = bb(), c = xb(), l = Sb(), u = Cb(), d = wb(), f = Tb(), p = Eb(), m = Db(), h = Ob(), g = kb(), _ = jb(), v = Function, y = function(e) {
		try {
			return v("\"use strict\"; return (" + e + ").constructor;")();
		} catch {}
	}, b = Nb(), x = Pb(), S = function() {
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
	}() : S, w = Fb()(), T = Kb(), ee = Lb(), te = Ib(), E = Vb(), D = Bb(), O = {}, ne = typeof Uint8Array > "u" || !T ? n : T(Uint8Array), k = {
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
		"%TypedArray%": ne,
		"%TypeError%": l,
		"%Uint8Array%": typeof Uint8Array > "u" ? n : Uint8Array,
		"%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? n : Uint8ClampedArray,
		"%Uint16Array%": typeof Uint16Array > "u" ? n : Uint16Array,
		"%Uint32Array%": typeof Uint32Array > "u" ? n : Uint32Array,
		"%URIError%": u,
		"%WeakMap%": typeof WeakMap > "u" ? n : WeakMap,
		"%WeakRef%": typeof WeakRef > "u" ? n : WeakRef,
		"%WeakSet%": typeof WeakSet > "u" ? n : WeakSet,
		"%Function.prototype.call%": D,
		"%Function.prototype.apply%": E,
		"%Object.defineProperty%": x,
		"%Object.getPrototypeOf%": ee,
		"%Math.abs%": d,
		"%Math.floor%": f,
		"%Math.max%": p,
		"%Math.min%": m,
		"%Math.pow%": h,
		"%Math.round%": g,
		"%Math.sign%": _,
		"%Reflect.getPrototypeOf%": te
	};
	if (T) try {
		null.error;
	} catch (e) {
		k["%Error.prototype%"] = T(T(e));
	}
	var re = function e(t) {
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
		return k[t] = n, n;
	}, A = {
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
	}, j = zb(), ie = qb(), ae = j.call(D, Array.prototype.concat), oe = j.call(E, Array.prototype.splice), se = j.call(D, String.prototype.replace), ce = j.call(D, String.prototype.slice), le = j.call(D, RegExp.prototype.exec), ue = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, de = /\\(\\)?/g, fe = function(e) {
		var t = ce(e, 0, 1), n = ce(e, -1);
		if (t === "%" && n !== "%") throw new c("invalid intrinsic syntax, expected closing `%`");
		if (n === "%" && t !== "%") throw new c("invalid intrinsic syntax, expected opening `%`");
		var r = [];
		return se(e, ue, function(e, t, n, i) {
			r[r.length] = n ? se(i, de, "$1") : t || e;
		}), r;
	}, pe = function(e, t) {
		var n = e, r;
		if (ie(A, n) && (r = A[n], n = "%" + r[0] + "%"), ie(k, n)) {
			var i = k[n];
			if (i === O && (i = re(n)), i === void 0 && !t) throw new l("intrinsic " + e + " exists, but is not available. Please file an issue!");
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
		if (le(/^%?[^%]*%?$/, e) === null) throw new c("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
		var n = fe(e), r = n.length > 0 ? n[0] : "", i = pe("%" + r + "%", t), a = i.name, o = i.value, s = !1, u = i.alias;
		u && (r = u[0], oe(n, ae([0, 1], u)));
		for (var d = 1, f = !0; d < n.length; d += 1) {
			var p = n[d], m = ce(p, 0, 1), h = ce(p, -1);
			if ((m === "\"" || m === "'" || m === "`" || h === "\"" || h === "'" || h === "`") && m !== h) throw new c("property names with quotes must have matching quotes");
			if ((p === "constructor" || !f) && (s = !0), r += "." + p, a = "%" + r + "%", ie(k, a)) o = k[a];
			else if (o != null) {
				if (!(p in o)) {
					if (!t) throw new l("base intrinsic for " + e + " exists, but the property is not available.");
					return;
				}
				if (b && d + 1 >= n.length) {
					var g = b(o, p);
					f = !!g, o = f && "get" in g && !("originalValue" in g.get) ? g.get : o[p];
				} else f = ie(o, p), o = o[p];
				f && !s && (k[a] = o);
			}
		}
		return o;
	};
})), Yb = /* @__PURE__ */ F(((e, t) => {
	var n = Jb(), r = Wb(), i = r([n("%String.prototype.indexOf%")]);
	t.exports = function(e, t) {
		var a = n(e, !!t);
		return typeof a == "function" && i(e, ".prototype.") > -1 ? r([a]) : a;
	};
})), Xb = /* @__PURE__ */ F(((e, t) => {
	var n = hb()(), r = Yb()("Object.prototype.toString"), i = function(e) {
		return n && e && typeof e == "object" && Symbol.toStringTag in e ? !1 : r(e) === "[object Arguments]";
	}, a = function(e) {
		return i(e) ? !0 : typeof e == "object" && !!e && "length" in e && typeof e.length == "number" && e.length >= 0 && r(e) !== "[object Array]" && "callee" in e && r(e.callee) === "[object Function]";
	}, o = function() {
		return i(arguments);
	}();
	i.isLegacyArguments = a, t.exports = o ? i : a;
})), Zb = /* @__PURE__ */ F(((e, t) => {
	var n = Yb(), r = hb()(), i = qb(), a = Nb(), o;
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
})), Qb = /* @__PURE__ */ F(((e, t) => {
	var n = Yb(), r = Zb(), i = n("RegExp.prototype.exec"), a = Sb();
	t.exports = function(e) {
		if (!r(e)) throw new a("`regex` must be a RegExp");
		return function(t) {
			return i(e, t) !== null;
		};
	};
})), $b = /* @__PURE__ */ F(((e, t) => {
	var n = function* () {}.constructor;
	t.exports = () => n;
})), ex = /* @__PURE__ */ F(((e, t) => {
	var n = Yb(), r = Qb()(/^\s*(?:function)?\*/), i = hb()(), a = Kb(), o = n("Object.prototype.toString"), s = n("Function.prototype.toString"), c = $b();
	t.exports = function(e) {
		if (typeof e != "function") return !1;
		if (r(s(e))) return !0;
		if (!i) return o(e) === "[object GeneratorFunction]";
		if (!a) return !1;
		var t = c();
		return t && a(e) === t.prototype;
	};
})), tx = /* @__PURE__ */ F(((e, t) => {
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
})), nx = /* @__PURE__ */ F(((e, t) => {
	var n = tx(), r = Object.prototype.toString, i = Object.prototype.hasOwnProperty, a = function(e, t, n) {
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
})), rx = /* @__PURE__ */ F(((e, t) => {
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
})), ix = /* @__PURE__ */ F(((e, t) => {
	var n = rx(), r = typeof globalThis > "u" ? global : globalThis;
	t.exports = function() {
		for (var e = [], t = 0; t < n.length; t++) typeof r[n[t]] == "function" && (e[e.length] = n[t]);
		return e;
	};
})), ax = /* @__PURE__ */ F(((e, t) => {
	var n = Pb(), r = xb(), i = Sb(), a = Nb();
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
})), ox = /* @__PURE__ */ F(((e, t) => {
	var n = Pb(), r = function() {
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
})), sx = /* @__PURE__ */ F(((e, t) => {
	var n = Jb(), r = ax(), i = ox()(), a = Nb(), o = Sb(), s = n("%Math.floor%");
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
})), cx = /* @__PURE__ */ F(((e, t) => {
	var n = zb(), r = Vb(), i = Ub();
	t.exports = function() {
		return i(n, r, arguments);
	};
})), lx = /* @__PURE__ */ F(((e, t) => {
	var n = sx(), r = Pb(), i = Wb(), a = cx();
	t.exports = function(e) {
		var t = i(arguments), r = 1 + e.length - (arguments.length - 1);
		return n(t, r > 0 ? r : 0, !0);
	}, r ? r(t.exports, "apply", { value: a }) : t.exports.apply = a;
})), ux = /* @__PURE__ */ F(((e, t) => {
	var n = nx(), r = ix(), i = lx(), a = Yb(), o = Nb(), s = Kb(), c = a("Object.prototype.toString"), l = hb()(), u = typeof globalThis > "u" ? global : globalThis, d = r(), f = a("String.prototype.slice"), p = a("Array.prototype.indexOf", !0) || function(e, t) {
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
	function h(e) {
		var t = !1;
		return n(m, function(n, r) {
			if (!t) try {
				"$" + n(e) === r && (t = f(r, 1));
			} catch {}
		}), t;
	}
	function g(e) {
		var t = !1;
		return n(m, function(n, r) {
			if (!t) try {
				n(e), t = f(r, 1);
			} catch {}
		}), t;
	}
	function _(e) {
		return p(d, e) > -1;
	}
	function v(e) {
		if (!e || typeof e != "object") return !1;
		if (!l) {
			var t = f(c(e), 8, -1);
			return _(t) ? t : t === "Object" && g(e);
		}
		return o ? h(e) : null;
	}
	t.exports = v;
})), dx = /* @__PURE__ */ F(((e, t) => {
	var n = ux();
	t.exports = function(e) {
		return !!n(e);
	};
})), fx = /* @__PURE__ */ F(((e) => {
	var t = Xb(), n = ex(), r = ux(), i = dx();
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
		return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(e) : i(e) || se(e);
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
	function ee(e) {
		return r(e) === "BigInt64Array";
	}
	e.isBigInt64Array = ee;
	function te(e) {
		return r(e) === "BigUint64Array";
	}
	e.isBigUint64Array = te;
	function E(e) {
		return c(e) === "[object Map]";
	}
	E.working = typeof Map < "u" && E(/* @__PURE__ */ new Map());
	function D(e) {
		return typeof Map > "u" ? !1 : E.working ? E(e) : e instanceof Map;
	}
	e.isMap = D;
	function O(e) {
		return c(e) === "[object Set]";
	}
	O.working = typeof Set < "u" && O(/* @__PURE__ */ new Set());
	function ne(e) {
		return typeof Set > "u" ? !1 : O.working ? O(e) : e instanceof Set;
	}
	e.isSet = ne;
	function k(e) {
		return c(e) === "[object WeakMap]";
	}
	k.working = typeof WeakMap < "u" && k(/* @__PURE__ */ new WeakMap());
	function re(e) {
		return typeof WeakMap > "u" ? !1 : k.working ? k(e) : e instanceof WeakMap;
	}
	e.isWeakMap = re;
	function A(e) {
		return c(e) === "[object WeakSet]";
	}
	A.working = typeof WeakSet < "u" && A(/* @__PURE__ */ new WeakSet());
	function j(e) {
		return A(e);
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
	function se(e) {
		return typeof DataView > "u" ? !1 : oe.working ? oe(e) : e instanceof DataView;
	}
	e.isDataView = se;
	var ce = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
	function le(e) {
		return c(e) === "[object SharedArrayBuffer]";
	}
	function ue(e) {
		return ce !== void 0 && (le.working === void 0 && (le.working = le(new ce())), le.working ? le(e) : e instanceof ce);
	}
	e.isSharedArrayBuffer = ue;
	function de(e) {
		return c(e) === "[object AsyncFunction]";
	}
	e.isAsyncFunction = de;
	function fe(e) {
		return c(e) === "[object Map Iterator]";
	}
	e.isMapIterator = fe;
	function pe(e) {
		return c(e) === "[object Set Iterator]";
	}
	e.isSetIterator = pe;
	function me(e) {
		return c(e) === "[object Generator]";
	}
	e.isGeneratorObject = me;
	function M(e) {
		return c(e) === "[object WebAssembly.Module]";
	}
	e.isWebAssemblyCompiledModule = M;
	function he(e) {
		return m(e, l);
	}
	e.isNumberObject = he;
	function ge(e) {
		return m(e, u);
	}
	e.isStringObject = ge;
	function _e(e) {
		return m(e, d);
	}
	e.isBooleanObject = _e;
	function ve(e) {
		return o && m(e, f);
	}
	e.isBigIntObject = ve;
	function ye(e) {
		return s && m(e, p);
	}
	e.isSymbolObject = ye;
	function N(e) {
		return he(e) || ge(e) || _e(e) || ve(e) || ye(e);
	}
	e.isBoxedPrimitive = N;
	function be(e) {
		return typeof Uint8Array < "u" && (ae(e) || ue(e));
	}
	e.isAnyArrayBuffer = be, [
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
})), px = /* @__PURE__ */ F(((e, t) => {
	t.exports = function(e) {
		return e && typeof e == "object" && typeof e.copy == "function" && typeof e.fill == "function" && typeof e.readUInt8 == "function";
	};
})), mx = /* @__PURE__ */ F(((e, t) => {
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
})), hx = /* @__PURE__ */ F(((e) => {
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
		if (t = t.toUpperCase(), !r[t]) {
			if (i.test(t)) {
				var n = process.pid;
				r[t] = function() {
					var r = e.format.apply(e, arguments);
					console.error("%s %d: %s", t, n, r);
				};
			} else r[t] = function() {};
		}
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
		if (t.customInspect && n && E(n.inspect) && n.inspect !== e.inspect && !(n.constructor && n.constructor.prototype === n)) {
			var i = n.inspect(r, t);
			return x(i) || (i = u(t, i, r)), i;
		}
		var a = d(t, n);
		if (a) return a;
		var o = Object.keys(n), s = l(o);
		if (t.showHidden && (o = Object.getOwnPropertyNames(n)), te(n) && (o.indexOf("message") >= 0 || o.indexOf("description") >= 0)) return f(n);
		if (o.length === 0) {
			if (E(n)) {
				var c = n.name ? ": " + n.name : "";
				return t.stylize("[Function" + c + "]", "special");
			}
			if (w(n)) return t.stylize(RegExp.prototype.toString.call(n), "regexp");
			if (ee(n)) return t.stylize(Date.prototype.toString.call(n), "date");
			if (te(n)) return f(n);
		}
		var _ = "", v = !1, y = ["{", "}"];
		if (g(n) && (v = !0, y = ["[", "]"]), E(n) && (_ = " [Function" + (n.name ? ": " + n.name : "") + "]"), w(n) && (_ = " " + RegExp.prototype.toString.call(n)), ee(n) && (_ = " " + Date.prototype.toUTCString.call(n)), te(n) && (_ = " " + f(n)), o.length === 0 && (!v || n.length == 0)) return y[0] + _ + y[1];
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
		for (var a = [], o = 0, s = t.length; o < s; ++o) A(t, String(o)) ? a.push(m(e, t, n, r, String(o), !0)) : a.push("");
		return i.forEach(function(i) {
			i.match(/^\d+$/) || a.push(m(e, t, n, r, i, !0));
		}), a;
	}
	function m(e, t, n, r, i, a) {
		var o, s, c = Object.getOwnPropertyDescriptor(t, i) || { value: t[i] };
		if (c.get ? s = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (s = e.stylize("[Setter]", "special")), A(r, i) || (o = "[" + i + "]"), s || (e.seen.indexOf(c.value) < 0 ? (s = v(n) ? u(e, c.value, null) : u(e, c.value, n - 1), s.indexOf("\n") > -1 && (s = a ? s.split("\n").map(function(e) {
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
	e.types = fx();
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
	function ee(e) {
		return T(e) && O(e) === "[object Date]";
	}
	e.isDate = ee, e.types.isDate = ee;
	function te(e) {
		return T(e) && (O(e) === "[object Error]" || e instanceof Error);
	}
	e.isError = te, e.types.isNativeError = te;
	function E(e) {
		return typeof e == "function";
	}
	e.isFunction = E;
	function D(e) {
		return e === null || typeof e == "boolean" || typeof e == "number" || typeof e == "string" || typeof e == "symbol" || e === void 0;
	}
	e.isPrimitive = D, e.isBuffer = px();
	function O(e) {
		return Object.prototype.toString.call(e);
	}
	function ne(e) {
		return e < 10 ? "0" + e.toString(10) : e.toString(10);
	}
	var k = [
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
	function re() {
		var e = /* @__PURE__ */ new Date(), t = [
			ne(e.getHours()),
			ne(e.getMinutes()),
			ne(e.getSeconds())
		].join(":");
		return [
			e.getDate(),
			k[e.getMonth()],
			t
		].join(" ");
	}
	e.log = function() {
		console.log("%s - %s", re(), e.format.apply(e, arguments));
	}, e.inherits = mx(), e._extend = function(e, t) {
		if (!t || !T(t)) return e;
		for (var n = Object.keys(t), r = n.length; r--;) e[n[r]] = t[n[r]];
		return e;
	};
	function A(e, t) {
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
})), gx = /* @__PURE__ */ F(((e) => {
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
			for (var i = 1, a = e.length, o, s = "", c = 0, l, u, d, f, p, m, h; c < a; c++) if (typeof e[c] == "string") s += e[c];
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
})), _x = /* @__PURE__ */ F(((e, t) => {
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
})), vx = /* @__PURE__ */ F(((e, t) => {
	var n = [].indexOf;
	t.exports = function(e, t) {
		if (n) return e.indexOf(t);
		for (var r = 0; r < e.length; ++r) if (e[r] === t) return r;
		return -1;
	};
})), yx = /* @__PURE__ */ F(((e, t) => {
	var n = Array.prototype, r = n.concat, i = n.slice, a = vx();
	function o(e) {
		var t = {}, o = r.apply(n, i.call(arguments, 1));
		for (var s in e) a(o, s) === -1 && (t[s] = e[s]);
		return t;
	}
	t.exports = o;
})), bx = /* @__PURE__ */ F(((e, t) => {
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
})), xx = /* @__PURE__ */ F(((e, t) => {
	t.exports = bx();
})), Sx = /* @__PURE__ */ F(((e, t) => {
	var n = xx();
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
})), Cx = /* @__PURE__ */ F(((e, t) => {
	t.exports = function(e, t) {
		var n;
		return t === 0 && "zero" in e && (n = "zero"), n ||= t === 1 ? "one" : "other", e[n];
	};
})), wx = /* @__PURE__ */ F(((e, t) => {
	t.exports = { counterpart: {
		names: bx(),
		pluralize: Cx(),
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
})), Tx = /* @__PURE__ */ tt((/* @__PURE__ */ F(((e, t) => {
	var n = pb(), r = hx().isArray, i = hx().isDate, a = gx().sprintf, o = _x(), s = yx(), c = Sx(), l = "counterpart";
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
		}, this.registerTranslations("en", wx()), this.setMaxListeners(0);
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
})))(), 1), Ex = "i18n/";
Tx.default.setSeparator("|");
var Dx = "en";
Tx.default.setFallbackLocale(Dx);
function Ox(e, t) {
	Tx.default.registerTranslations(e, t);
}
function kx(e) {
	Tx.default.setMissingEntryGenerator(e);
}
function Ax() {
	return Tx.default.getLocale();
}
function jx(e) {
	return Tx.default.setLocale(e);
}
function Mx(e) {
	return e;
}
function Nx(e) {
	return typeof e == "string" && !e.startsWith("missing translation:");
}
var Px = (e, t) => {
	let n = Tx.default.translate(e, {
		...t,
		fallbackLocale: Tx.default.getLocale()
	});
	if (Nx(n)) return { translated: n };
	let r = Tx.default.translate(e, {
		...t,
		locale: Dx
	});
	return Nx(r) ? {
		translated: r,
		isFallback: !0
	} : {
		translated: e,
		isFallback: !0
	};
};
function Fx(e, t) {
	let n = {
		...t,
		interpolate: !1
	};
	return n && typeof n == "object" && Object.keys(n).forEach((e) => {
		n[e] === void 0 && (console.warn("safeCounterpartTranslate called with undefined interpolation name: " + e), n[e] = "undefined"), n[e] === null && (console.warn("safeCounterpartTranslate called with null interpolation name: " + e), n[e] = "null");
	}), Px(e, n);
}
var Ix = (e, t) => e;
function U(e, t, n) {
	let { translated: r } = Fx(e, t);
	return Ix(Bx(r, t, n), e);
}
function Lx(e) {
	return Fx(e, {}).translated;
}
function Rx(e, t, n) {
	let { translated: r, isFallback: i } = Fx(e, t), a = Bx(r, t, n);
	return Ix(i ? /* @__PURE__ */ D("span", {
		lang: "en",
		children: a
	}) : a, e);
}
function zx(e) {
	return e.replace(/%\(([^)]*)\)/g, "%\xA0($1)");
}
function Bx(e, t, n) {
	let r = e;
	if (t !== void 0) {
		let e = {};
		for (let n in t) e[`%\\(${n}\\)s`] = t[n];
		r = Vx(r, e);
	}
	if (n !== void 0) {
		let e = {};
		for (let t in n) e[`(<${t}>(.*?)<\\/${t}>|<${t}>|<${t}\\s*\\/>)`] = n[t];
		r = Vx(r, e);
	}
	return r;
}
function Vx(e, t) {
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
async function Hx(e) {
	let t = await Wx(), n = e in t ? e : "en", r = await Ux(Ex + t[n]);
	Tx.default.registerTranslations(n, r), Tx.default.setLocale(n);
}
async function Ux(e) {
	console.log("Loading language from", e);
	let t = await fetch(e, { method: "GET" });
	if (!t.ok) throw Error(`Failed to load ${e}, got ${t.status}`);
	return t.json();
}
async function Wx() {
	let e = `${Ex}languages.json?${Date.now()}`, t = await fetch(e, { method: "GET" });
	if (!t.ok) throw Error(`Failed to load ${e}, got ${t.status}`);
	return t.json();
}
var Gx = { scrollbar: "_scrollbar_1d5jg_8" };
//#endregion
//#region src/core/utils/Scrollbar/AutoHideScrollbar.ts
function Kx(e) {
	let { as: t = "div", className: n, onScroll: r, tabIndex: i, wrappedRef: a, children: s, ...c } = e, l = o.useRef(null), u = o.useRef(a);
	u.current = a;
	let d = o.useCallback((e) => {
		l.current = e;
	}, []);
	return o.useLayoutEffect(() => (u.current?.(l.current), () => {
		u.current?.(null);
	}), []), o.useLayoutEffect(() => {
		let e = l.current;
		if (e && r) return e.addEventListener("scroll", r, { passive: !0 }), () => {
			e.removeEventListener("scroll", r);
		};
	}, [r]), o.createElement(t, {
		...c,
		ref: d,
		className: (0, z.default)(Gx.scrollbar, n),
		tabIndex: i ?? -1
	}, s);
}
//#endregion
//#region src/core/roving/RovingTabIndex.tsx
function qx(e) {
	return e instanceof Element && e.matches("input:not([type=\"radio\"]):not([type=\"checkbox\"]), textarea, select, [contenteditable=true]");
}
var Jx = l({
	state: { nodes: [] },
	dispatch: () => {}
});
Jx.displayName = "RovingTabIndexContext";
var Yx = /* @__PURE__ */ function(e) {
	return e.Register = "REGISTER", e.Unregister = "UNREGISTER", e.SetFocus = "SET_FOCUS", e.Update = "UPDATE", e;
}({}), Xx = /* @__PURE__ */ function(e) {
	return e.Home = "HOME", e.End = "END", e.ArrowLeft = "ARROW_LEFT", e.ArrowUp = "ARROW_UP", e.ArrowRight = "ARROW_RIGHT", e.ArrowDown = "ARROW_DOWN", e.Tab = "TAB", e;
}({}), Zx = (e, t) => {
	if (e === t) return 0;
	let n = e.compareDocumentPosition(t);
	return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}, Qx = (e, t) => t >= e.length ? rS(e, e.length - 1) : nS(e, t) || rS(e, t), $x = (e, t) => {
	e.activeNode = Qx(e.nodes, t), document.activeElement === document.body && setTimeout(() => e.activeNode?.focus(), 0);
}, eS = (e, t) => {
	switch (t.type) {
		case "REGISTER": return e.activeNode ??= t.payload.node, e.nodes.includes(t.payload.node) ? e : (e.nodes.push(t.payload.node), e.nodes.sort(Zx), { ...e });
		case "UNREGISTER": {
			let n = e.nodes.indexOf(t.payload.node);
			return n === -1 ? e : (e.nodes.splice(n, 1)[0] === e.activeNode && $x(e, n), { ...e });
		}
		case "SET_FOCUS": return e.activeNode === t.payload.node ? e : (e.activeNode = t.payload.node, { ...e });
		case "UPDATE": return e.nodes.sort(Zx), { ...e };
		default: return e;
	}
}, tS = (e, t, n, r) => {
	if (r === 1) {
		for (let i = t; i < n; i += r) if (e[i]?.offsetParent !== null) return e[i];
	} else for (let i = t; i > n; i += r) if (e[i]?.offsetParent !== null) return e[i];
}, nS = (e, t, n = !1) => {
	let r = tS(e, t, e.length, 1);
	return r || !n ? r : tS(e.slice(0, t), 0, t, 1);
}, rS = (e, t, n = !1) => {
	let r = tS(e, t, -1, -1);
	if (r || !n) return r;
	let i = e.slice(t + 1);
	return tS(i, i.length - 1, -1, -1);
}, iS = (e) => {
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
}, aS = (e, t, n, r = !1) => {
	if (e.length === 0 || !t) return;
	let i = e.indexOf(t) + (n ? -1 : 1);
	return n ? rS(e, i, r) : nS(e, i, r);
}, oS = (e, t, n, r) => e === "TAB" ? {
	handled: !0,
	focusNode: aS(t, n, r)
} : { handled: !1 }, sS = (e, t, n, r, i) => ({
	HOME: {
		enabled: t,
		getFocusNode: (e) => nS(e.nodes, 0)
	},
	END: {
		enabled: t,
		getFocusNode: (e) => rS(e.nodes, e.nodes.length - 1)
	},
	ARROW_DOWN: {
		enabled: n,
		getFocusNode: (e) => aS(e.nodes, e.activeNode, !1, i)
	},
	ARROW_RIGHT: {
		enabled: r,
		getFocusNode: (e) => aS(e.nodes, e.activeNode, !1, i)
	},
	ARROW_UP: {
		enabled: n,
		getFocusNode: (e) => aS(e.nodes, e.activeNode, !0, i)
	},
	ARROW_LEFT: {
		enabled: r,
		getFocusNode: (e) => aS(e.nodes, e.activeNode, !0, i)
	},
	TAB: {
		enabled: !1,
		getFocusNode: () => void 0
	}
}), cS = (e, t, n, r, i, a) => {
	if (!e) return { handled: !1 };
	let o = sS(t, n, r, i, a)[e];
	return o?.enabled ? {
		handled: !0,
		focusNode: o.getFocusNode(t)
	} : { handled: !1 };
}, lS = ({ children: e, handleHomeEnd: t, handleUpDown: n, handleLeftRight: r, handleLoop: i, handleInputFields: a, scrollIntoView: o, onKeyDown: s, getAction: c = iS }) => {
	let [l, u] = C(eS, { nodes: [] }), d = S(() => ({
		state: l,
		dispatch: u
	}), [l]), f = h((e) => {
		if (s && (s(e, d.state, d.dispatch), e.defaultPrevented)) return;
		let l = c(e), { handled: f, focusNode: p } = !a && qx(e.target) ? oS(l, d.state.nodes, d.state.activeNode, e.shiftKey) : cS(l, d.state, t ?? !1, n ?? !1, r ?? !1, i ?? !1);
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
	return /* @__PURE__ */ D(Jx.Provider, {
		value: d,
		children: e({
			onKeyDownHandler: f,
			onDragEndHandler: p
		})
	});
}, uS = (e) => {
	let t = g(Jx), n = w(null);
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
			n.current ? t.dispatch({
				type: "SET_FOCUS",
				payload: { node: n.current }
			}) : console.warn("useRovingTabIndex.onFocus called but the react ref does not point to any DOM element!");
		}, []),
		t.state.activeNode === n.current,
		r,
		n
	];
}, dS = (e) => e.parentElement ?? void 0, fS = (e) => {
	let t = e.children[0];
	return t instanceof HTMLElement ? t : void 0;
}, pS = (e) => e === Xx.ArrowLeft || e === Xx.ArrowRight || e === Xx.ArrowUp || e === Xx.ArrowDown, mS = (e, t, n) => {
	if (!t.activeNode) return;
	let r = t.nodes.indexOf(t.activeNode);
	if (r !== -1) {
		if (e === Xx.ArrowLeft) return rS(t.nodes, r - 1, n);
		if (e === Xx.ArrowRight) return nS(t.nodes, r + 1, n);
	}
}, hS = (e, t, n, r, i) => {
	if (!t.activeNode) return;
	let a = r(t.activeNode), o = n(t.activeNode);
	if (!a || !o) return;
	let s = Array.from(a.children).indexOf(o), c = t.nodes.indexOf(t.activeNode);
	if (s === -1 || c === -1) return;
	let l = e === Xx.ArrowUp ? c - s - 1 : c - s + a.children.length, u = r(t.nodes[l]);
	if (u) {
		if (!(u instanceof HTMLElement) || u.offsetParent === null || u.children.length === 0) return;
		let e = Math.min(s, u.children.length - 1), n = i(u.children[e]);
		if (n?.offsetParent && t.nodes.includes(n)) return n;
	}
}, gS = (e, t, n, r) => typeof e == "function" ? e(t, n, r) : e ?? !0, _S = ({ children: e, getAction: t, getGridCell: n = dS, getRow: r, getRovingNode: i = fS, handleInputFields: a, handleLoop: o, moveFocus: s, onGridNavigation: c, onKeyDown: l, scrollIntoView: u, ...d }) => {
	let f = h((e) => r?.(e) ?? n(e)?.parentElement ?? void 0, [n, r]), p = h((e, r, d) => {
		if (l?.(e, r, d), e.defaultPrevented) return;
		let p = t?.(e) ?? vS(e);
		if (!pS(p) || !r.activeNode || !a && e.target instanceof HTMLElement && qx(e.target)) return;
		let m = p === Xx.ArrowUp || p === Xx.ArrowDown ? hS(p, r, n, f, i) : mS(p, r, o);
		e.preventDefault(), e.stopPropagation(), m && (gS(s, m, e, r) && m.focus(), d({
			type: Yx.SetFocus,
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
	return /* @__PURE__ */ D(lS, {
		...d,
		getAction: t,
		handleInputFields: a,
		handleLoop: o,
		onKeyDown: p,
		scrollIntoView: u,
		children: e
	});
}, vS = (e) => {
	switch (e.key) {
		case "ArrowLeft": return Xx.ArrowLeft;
		case "ArrowUp": return Xx.ArrowUp;
		case "ArrowRight": return Xx.ArrowRight;
		case "ArrowDown": return Xx.ArrowDown;
		default: return;
	}
}, yS = ({ children: e, inputRef: t }) => {
	let [n, r, i] = uS(t);
	return e({
		onFocus: n,
		isActive: r,
		ref: i
	});
}, bS = (e) => {
	switch (e.key) {
		case "ArrowUp": return Xx.ArrowUp;
		case "ArrowDown": return Xx.ArrowDown;
		default: return;
	}
}, xS = ({ children: e, ref: t, getAction: n, ...r }) => /* @__PURE__ */ D(lS, {
	handleHomeEnd: !0,
	handleLeftRight: !0,
	handleUpDown: !0,
	onKeyDown: (e) => {
		let t = e.target;
		if (t.tagName === "INPUT") return;
		let r = !0;
		switch (n?.(e) ?? bS(e)) {
			case Xx.ArrowUp:
			case Xx.ArrowDown:
				t.hasAttribute("aria-haspopup") && t.click();
				break;
			default: r = !1;
		}
		r && (e.preventDefault(), e.stopPropagation());
	},
	getAction: n,
	children: ({ onKeyDownHandler: n }) => /* @__PURE__ */ D("div", {
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
}, SS = (e) => {
	switch (e.key) {
		case "ArrowLeft": return Xx.ArrowLeft;
		case "ArrowRight": return Xx.ArrowRight;
		case "Home": return Xx.Home;
		case "End": return Xx.End;
		default: return;
	}
}, CS = ({ categories: e, enabledCategories: t, selectedCategory: n, onAnchorClick: r, pickerBodyId: i, getAction: a }) => {
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
		switch (a?.(t) ?? SS(t)) {
			case Xx.ArrowLeft:
				l(-1);
				break;
			case Xx.ArrowRight:
				l(1);
				break;
			case Xx.Home:
				c(0);
				break;
			case Xx.End:
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
	return /* @__PURE__ */ D("nav", {
		className: W.header,
		role: "tablist",
		"aria-label": U("emoji|categories"),
		onKeyDown: u,
		children: e.map((e) => {
			let a = (0, z.default)(W.anchor, { [W.anchorSelected]: e.id === n });
			return /* @__PURE__ */ D("button", {
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
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/arrow-down.js
function wS(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M12 4.5a1 1 0 0 1 1 1v10.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 1 1 1.414-1.414L11 16.086V5.5a1 1 0 0 1 1-1" })
	});
}
wS.displayName = "ArrowDownIcon";
var TS = d(wS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/arrow-right.js
function ES(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M11.793 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L16.086 13H5.5a1 1 0 1 1 0-2h10.586l-4.293-4.293a1 1 0 0 1 0-1.414" })
	});
}
ES.displayName = "ArrowRightIcon";
var DS = d(ES);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/ask-to-join.js
function OS(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M12 18.156q.478 0 .802-.323.323-.324.323-.802h-2.25q0 .478.323.802.324.323.802.323M8.063 16.47h7.874a.54.54 0 0 0 .394-.169.54.54 0 0 0 0-.788.54.54 0 0 0-.393-.168h-.563V12.7q0-1.237-.675-2.25a3 3 0 0 0-1.856-1.294v-.281a.82.82 0 0 0-.24-.605.82.82 0 0 0-.604-.239.82.82 0 0 0-.844.844v.281A3 3 0 0 0 9.3 10.45a3.97 3.97 0 0 0-.675 2.25v2.644h-.562a.54.54 0 0 0-.394.168.54.54 0 0 0 0 .788.54.54 0 0 0 .394.169M3 19.844V9.719q0-.534.24-1.013.238-.478.66-.787l6.75-5.063q.31-.225.647-.337.338-.113.703-.113.366 0 .703.113.337.112.647.337L20.1 7.92q.422.309.66.787.24.479.24 1.013v10.125q0 .927-.66 1.589-.662.66-1.59.66H5.25q-.928 0-1.59-.66-.66-.66-.66-1.59m2.25 0h13.5V9.719L12 4.656 5.25 9.72z" })
	});
}
OS.displayName = "AskToJoinIcon";
var kS = d(OS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/attachment.js
function AS(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M11.5 22q-2.3 0-3.9-1.6T6 16.5V6q0-1.65 1.175-2.825T10 2t2.825 1.175T14 6v9.5q0 1.05-.725 1.775T11.5 18t-1.775-.725T9 15.5V6.75A.73.73 0 0 1 9.75 6a.73.73 0 0 1 .75.75v8.75q0 .424.287.712.288.288.713.288.424 0 .713-.288a.97.97 0 0 0 .287-.712V6q0-1.05-.725-1.775T10 3.5t-1.775.725T7.5 6v10.5q0 1.65 1.175 2.825T11.5 20.5t2.825-1.175T15.5 16.5V6.75a.73.73 0 0 1 .75-.75.73.73 0 0 1 .75.75v9.75q0 2.3-1.6 3.9T11.5 22" })
	});
}
AS.displayName = "AttachmentIcon";
var jS = d(AS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/block.js
function MS(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M12 22a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12q0-1.35-.437-2.6A8 8 0 0 0 18.3 7.1L7.1 18.3q1.05.825 2.3 1.262T12 20m-6.3-3.1L16.9 5.7a8 8 0 0 0-2.3-1.263A7.8 7.8 0 0 0 12 4Q8.65 4 6.325 6.325T4 12q0 1.35.438 2.6A8 8 0 0 0 5.7 16.9" })
	});
}
MS.displayName = "BlockIcon";
var NS = d(MS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/chat-problem.js
function PS(e, t) {
	return /*#__PURE__*/ O("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ D("path", { d: "M12.713 16.713A.97.97 0 0 1 12 17a.97.97 0 0 1-.713-.288A.97.97 0 0 1 11 16q0-.424.287-.713A.97.97 0 0 1 12 15q.424 0 .713.287.287.288.287.713 0 .424-.287.712m0-3.999A.97.97 0 0 1 12 13a.97.97 0 0 1-.713-.287A.97.97 0 0 1 11 12V8q0-.424.287-.713A.97.97 0 0 1 12 7q.424 0 .713.287Q13 7.576 13 8v4q0 .424-.287.713" }), /*#__PURE__*/ D("path", { d: "M2.95 16.3a10.2 10.2 0 0 1-.712-2.1A10.2 10.2 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22q-1.125 0-2.2-.238a10.2 10.2 0 0 1-2.1-.712L2.75 22.5a.94.94 0 0 1-1-.25.94.94 0 0 1-.25-1zm4.2 2.8a1 1 0 0 1 .275-.062q.15-.013.275-.013.225 0 .438.038.212.036.412.137a7.4 7.4 0 0 0 1.675.6Q11.1 20 12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12q0 .9.2 1.775t.6 1.675q.176.325.188.688t-.088.712l-.95 3.2z" })]
	});
}
PS.displayName = "ChatProblemIcon";
var FS = d(PS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/chat.js
function IS(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "m1.5 21.25 1.45-4.95a10.2 10.2 0 0 1-.712-2.1A10.2 10.2 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22q-1.125 0-2.2-.238a10.2 10.2 0 0 1-2.1-.712L2.75 22.5a.94.94 0 0 1-1-.25.94.94 0 0 1-.25-1m2.45-1.2 3.2-.95a1 1 0 0 1 .275-.062q.15-.013.275-.013.225 0 .438.038.212.036.412.137a7.4 7.4 0 0 0 1.675.6Q11.1 20 12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12q0 .9.2 1.775t.6 1.675q.176.325.188.688t-.088.712z" })
	});
}
IS.displayName = "ChatIcon";
var LS = d(IS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/check-circle.js
function RS(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "m10.6 13.8-2.15-2.15a.95.95 0 0 0-.7-.275.95.95 0 0 0-.7.275.95.95 0 0 0-.275.7q0 .425.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65a.95.95 0 0 0 .275-.7.95.95 0 0 0-.275-.7.95.95 0 0 0-.7-.275.95.95 0 0 0-.7.275zM12 22a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20" })
	});
}
RS.displayName = "CheckCircleIcon";
var zS = d(RS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/check.js
function BS(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M9.55 17.575q-.2 0-.375-.062a.9.9 0 0 1-.325-.213L4.55 13q-.274-.274-.262-.713.012-.437.287-.712a.95.95 0 0 1 .7-.275q.425 0 .7.275L9.55 15.15l8.475-8.475q.274-.275.713-.275.437 0 .712.275.275.274.275.713 0 .437-.275.712l-9.2 9.2q-.15.15-.325.212a1.1 1.1 0 0 1-.375.063" })
	});
}
BS.displayName = "CheckIcon";
var VS = d(BS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-down.js
function HS(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M12 14.95q-.2 0-.375-.062a.9.9 0 0 1-.325-.213l-4.6-4.6a.95.95 0 0 1-.275-.7q0-.425.275-.7a.95.95 0 0 1 .7-.275q.425 0 .7.275l3.9 3.9 3.9-3.9a.95.95 0 0 1 .7-.275q.425 0 .7.275a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7l-4.6 4.6q-.15.15-.325.212a1.1 1.1 0 0 1-.375.063" })
	});
}
HS.displayName = "ChevronDownIcon";
var US = d(HS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-left.js
function WS(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "m13.3 17.3-4.6-4.6a.9.9 0 0 1-.213-.325A1.1 1.1 0 0 1 8.425 12q0-.2.062-.375A.9.9 0 0 1 8.7 11.3l4.6-4.6a.95.95 0 0 1 .7-.275q.425 0 .7.275a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7L10.8 12l3.9 3.9a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275" })
	});
}
WS.displayName = "ChevronLeftIcon";
var GS = d(WS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-right.js
function KS(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M8.7 17.3a.95.95 0 0 1-.275-.7q0-.425.275-.7l3.9-3.9-3.9-3.9a.95.95 0 0 1-.275-.7q0-.425.275-.7a.95.95 0 0 1 .7-.275q.425 0 .7.275l4.6 4.6q.15.15.213.325.062.175.062.375t-.062.375a.9.9 0 0 1-.213.325l-4.6 4.6a.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275" })
	});
}
KS.displayName = "ChevronRightIcon";
var qS = d(KS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-up.js
function JS(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "m12 10.775-3.9 3.9a.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275.95.95 0 0 1-.275-.7q0-.425.275-.7l4.6-4.6q.15-.15.325-.212Q11.8 8.4 12 8.4t.375.063a.9.9 0 0 1 .325.212l4.6 4.6a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275z" })
	});
}
JS.displayName = "ChevronUpIcon";
var YS = d(JS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/close.js
function XS(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M6.293 6.293a1 1 0 0 1 1.414 0L12 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414L13.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.586 12 6.293 7.707a1 1 0 0 1 0-1.414" })
	});
}
XS.displayName = "CloseIcon";
var ZS = d(XS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/collapse-all.js
function QS(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "m12 16.975-3.9 3.9a.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275.95.95 0 0 1-.275-.7q0-.425.275-.7l3.875-3.875q.575-.575 1.425-.575t1.425.575l3.875 3.875a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275zm0-9.8 3.9-3.9A.95.95 0 0 1 16.6 3q.425 0 .7.275a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7L13.425 8.55q-.575.575-1.425.575t-1.425-.575L6.7 4.675a.95.95 0 0 1-.275-.7q0-.425.275-.7A.95.95 0 0 1 7.4 3q.425 0 .7.275z" })
	});
}
QS.displayName = "CollapseAllIcon";
var $S = d(QS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/collapse.js
function eC(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M12 11.034a1 1 0 0 0 .29.702l.005.005c.18.18.43.29.705.29h8a1 1 0 0 0 0-2h-5.586L22 3.445a1 1 0 0 0-1.414-1.414L14 8.617V3.031a1 1 0 1 0-2 0zm0 1.963a1 1 0 0 0-.29-.702l-.005-.004A1 1 0 0 0 11 12H3a1 1 0 1 0 0 2h5.586L2 20.586A1 1 0 1 0 3.414 22L10 15.414V21a1 1 0 0 0 2 0z" })
	});
}
eC.displayName = "CollapseIcon";
var tC = d(eC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/delete.js
function nC(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M7 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 5 19V6a.97.97 0 0 1-.713-.287A.97.97 0 0 1 4 5q0-.424.287-.713A.97.97 0 0 1 5 4h4q0-.424.287-.712A.97.97 0 0 1 10 3h4q.424 0 .713.288Q15 3.575 15 4h4q.424 0 .712.287Q20 4.576 20 5t-.288.713A.97.97 0 0 1 19 6v13q0 .824-.587 1.413A1.93 1.93 0 0 1 17 21zM7 6v13h10V6zm2 10q0 .424.287.712Q9.576 17 10 17t.713-.288A.97.97 0 0 0 11 16V9a.97.97 0 0 0-.287-.713A.97.97 0 0 0 10 8a.97.97 0 0 0-.713.287A.97.97 0 0 0 9 9zm4 0q0 .424.287.712.288.288.713.288.424 0 .713-.288A.97.97 0 0 0 15 16V9a.97.97 0 0 0-.287-.713A.97.97 0 0 0 14 8a.97.97 0 0 0-.713.287A.97.97 0 0 0 13 9z" })
	});
}
nC.displayName = "DeleteIcon";
var rC = d(nC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/devices.js
function iC(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M3.5 20q-.625 0-1.062-.437A1.45 1.45 0 0 1 2 18.5q0-.625.438-1.062A1.45 1.45 0 0 1 3.5 17H4V6q0-.824.588-1.412A1.93 1.93 0 0 1 6 4h14q.424 0 .712.287Q21 4.576 21 5t-.288.713A.97.97 0 0 1 20 6H6v11h4.5q.624 0 1.063.438.437.437.437 1.062t-.437 1.063A1.45 1.45 0 0 1 10.5 20zM15 20a.97.97 0 0 1-.713-.288A.97.97 0 0 1 14 19V9q0-.424.287-.713A.97.97 0 0 1 15 8h6q.424 0 .712.287Q22 8.576 22 9v10q0 .424-.288.712A.97.97 0 0 1 21 20zm1-3h4v-7h-4z" })
	});
}
iC.displayName = "DevicesIcon";
var aC = d(iC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/dial-pad.js
function oC(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M12 18.6c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8M6.6 2.4c-.99 0-1.8.81-1.8 1.8S5.61 6 6.6 6s1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0 5.4c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0 5.4c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8M17.4 6c.99 0 1.8-.81 1.8-1.8s-.81-1.8-1.8-1.8-1.8.81-1.8 1.8.81 1.8 1.8 1.8M12 13.2c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m5.4 0c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0-5.4c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m-5.4 0c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0-5.4c-.99 0-1.8.81-1.8 1.8S11.01 6 12 6s1.8-.81 1.8-1.8-.81-1.8-1.8-1.8" })
	});
}
oC.displayName = "DialPadIcon";
var sC = d(oC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/document.js
function cC(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M9 18h6q.424 0 .713-.288A.97.97 0 0 0 16 17a.97.97 0 0 0-.287-.712A.97.97 0 0 0 15 16H9a.97.97 0 0 0-.713.288A.97.97 0 0 0 8 17q0 .424.287.712Q8.576 18 9 18m0-4h6q.424 0 .713-.287A.97.97 0 0 0 16 13a.97.97 0 0 0-.287-.713A.97.97 0 0 0 15 12H9a.97.97 0 0 0-.713.287A.97.97 0 0 0 8 13q0 .424.287.713Q8.576 14 9 14m-3 8q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 20V4q0-.824.588-1.412A1.93 1.93 0 0 1 6 2h7.175a1.98 1.98 0 0 1 1.4.575l4.85 4.85q.275.275.425.638.15.361.15.762V20q0 .824-.587 1.413A1.93 1.93 0 0 1 18 22zm7-14V4H6v16h12V9h-4a.97.97 0 0 1-.713-.287A.97.97 0 0 1 13 8" })
	});
}
cC.displayName = "DocumentIcon";
var lC = d(cC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/download.js
function uC(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M12 15.575q-.2 0-.375-.062a.9.9 0 0 1-.325-.213l-3.6-3.6a.95.95 0 0 1-.275-.7q0-.425.275-.7.274-.275.712-.288t.713.263L11 12.15V5q0-.424.287-.713A.97.97 0 0 1 12 4q.424 0 .713.287Q13 4.576 13 5v7.15l1.875-1.875q.274-.274.713-.263.437.014.712.288a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7l-3.6 3.6q-.15.15-.325.212a1.1 1.1 0 0 1-.375.063M6 20q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 18v-2q0-.424.287-.713A.97.97 0 0 1 5 15q.424 0 .713.287Q6 15.576 6 16v2h12v-2q0-.424.288-.713A.97.97 0 0 1 19 15q.424 0 .712.287.288.288.288.713v2q0 .824-.587 1.413A1.93 1.93 0 0 1 18 20z" })
	});
}
uC.displayName = "DownloadIcon";
var dC = d(uC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/drag-list.js
function fC(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M5 15a.97.97 0 0 1-.713-.287A.97.97 0 0 1 4 14q0-.424.287-.713A.97.97 0 0 1 5 13h14q.424 0 .712.287.288.288.288.713 0 .424-.288.713A.97.97 0 0 1 19 15zm0-4a.97.97 0 0 1-.713-.287A.97.97 0 0 1 4 10q0-.424.287-.713A.97.97 0 0 1 5 9h14q.424 0 .712.287Q20 9.576 20 10t-.288.713A.97.97 0 0 1 19 11z" })
	});
}
fC.displayName = "DragListIcon";
var pC = d(fC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/edit.js
function mC(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", {
			fillRule: "evenodd",
			d: "M15.706 2.637a2 2 0 0 1 2.829 0l2.828 2.828a2 2 0 0 1 0 2.829L9.605 20.052a1 1 0 0 1-.465.263L3.483 21.73a1 1 0 0 1-1.212-1.213l1.414-5.657a1 1 0 0 1 .263-.465zm1.224 7.262L14.102 7.07l-8.544 8.544-.943 3.771 3.771-.943z",
			clipRule: "evenodd"
		})
	});
}
mC.displayName = "EditIcon";
var hC = d(mC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/email-solid.js
function gC(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 5.111a1 1 0 0 0 .514.874l7 3.89a1 1 0 0 0 .972 0l7-3.89a1 1 0 1 0-.972-1.748L12 11.856 5.486 8.237A1 1 0 0 0 4 9.111" })
	});
}
gC.displayName = "EmailSolidIcon";
var _C = d(gC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/error-solid.js
function vC(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M12 17q.424 0 .713-.288A.97.97 0 0 0 13 16a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 15a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 16q0 .424.287.712.288.288.713.288m0-4q.424 0 .713-.287A.97.97 0 0 0 13 12V8a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 7a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 8v4q0 .424.287.713.288.287.713.287m0 9a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22" })
	});
}
vC.displayName = "ErrorSolidIcon";
var yC = d(vC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/error.js
function bC(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M12 17q.424 0 .713-.288A.97.97 0 0 0 13 16a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 15a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 16q0 .424.287.712.288.288.713.288m0-4q.424 0 .713-.287A.97.97 0 0 0 13 12V8a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 7a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 8v4q0 .424.287.713.288.287.713.287m0 9a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20" })
	});
}
bC.displayName = "ErrorIcon";
var xC = d(bC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/expand-all.js
function SC(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "m12 19.2 3.9-3.9a.95.95 0 0 1 .7-.275q.425 0 .7.275a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7l-3.875 3.875q-.575.575-1.425.575t-1.425-.575L6.7 16.7a.95.95 0 0 1-.275-.7q0-.425.275-.7a.95.95 0 0 1 .7-.275q.425 0 .7.275zm0-14.25-3.9 3.9a.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275.95.95 0 0 1-.275-.7q0-.425.275-.7l3.875-3.875Q11.15 3 12 3t1.425.575L17.3 7.45a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275z" })
	});
}
SC.displayName = "ExpandAllIcon";
var CC = d(SC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/expand.js
function wC(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M21 3.997a1 1 0 0 0-.29-.702l-.005-.004A1 1 0 0 0 20 3h-8a1 1 0 1 0 0 2h5.586L5 17.586V12a1 1 0 1 0-2 0v8.003a1 1 0 0 0 .29.702l.005.004c.18.18.43.291.705.291h8a1 1 0 1 0 0-2H6.414L19 6.414V12a1 1 0 1 0 2 0z" })
	});
}
wC.displayName = "ExpandIcon";
var TC = d(wC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/explore.js
function EC(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M12 13a.97.97 0 0 1-.713-.287A.97.97 0 0 1 11 12q0-.424.287-.713A.97.97 0 0 1 12 11q.424 0 .713.287.287.288.287.713 0 .424-.287.713A.97.97 0 0 1 12 13m0 9a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20m0 0q-3.35 0-5.675-2.325T4 12t2.325-5.675T12 4t5.675 2.325T20 12t-2.325 5.675T12 20m1.675-5.85q.15-.075.275-.2t.2-.275l2.925-6.25q.125-.25-.062-.437-.188-.188-.438-.063l-6.25 2.925q-.15.075-.275.2t-.2.275l-2.925 6.25q-.125.25.063.438.186.186.437.062z" })
	});
}
EC.displayName = "ExploreIcon";
var DC = d(EC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/favourite.js
function OC(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M13.905 9.378 12 5.52l-1.905 3.86-4.259.618 3.082 3.004-.727 4.242L12 15.24l3.81 2.003-.728-4.242 3.082-3.004zM8.767 7.55l2.336-4.733a1 1 0 0 1 1.794 0l2.336 4.733 5.223.76a1 1 0 0 1 .555 1.705L17.23 13.7l.892 5.202a1 1 0 0 1-1.45 1.054L12 17.5l-4.672 2.456a1 1 0 0 1-1.451-1.054l.892-5.202-3.78-3.685a1 1 0 0 1 .555-1.706z" })
	});
}
OC.displayName = "FavouriteIcon";
var kC = d(OC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/file-error.js
function AC(e, t) {
	return /*#__PURE__*/ O("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ D("path", { d: "M6 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 20V4q0-.824.588-1.412A1.93 1.93 0 0 1 6 2h7.175a1.98 1.98 0 0 1 1.4.575l4.85 4.85q.275.275.425.638.15.361.15.762v3.516A6 6 0 0 0 18 12V9h-4a.97.97 0 0 1-.713-.287A.97.97 0 0 1 13 8V4H6v16h6.341c.264.745.67 1.423 1.187 2z" }), /*#__PURE__*/ D("path", { d: "M18 14a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m-1 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0" })]
	});
}
AC.displayName = "FileErrorIcon";
var jC = d(AC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/history.js
function MC(e, t) {
	return /*#__PURE__*/ O("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ D("path", { d: "M18.93 8A8 8 0 1 1 4 12a1 1 0 1 0-2 0c0 5.523 4.477 10 10 10s10-4.477 10-10a10 10 0 0 0-.832-4A10 10 0 0 0 12 2a9.99 9.99 0 0 0-8 3.999V4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2H5.755A7.99 7.99 0 0 1 12 4a8 8 0 0 1 6.93 4" }), /*#__PURE__*/ D("path", { d: "M13 8a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l2.83 2.83a1 1 0 0 0 1.414-1.414L13 11.586z" })]
	});
}
MC.displayName = "HistoryIcon";
var NC = d(MC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/home.js
function PC(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", {
			fillRule: "evenodd",
			d: "M16 11v8h3V9.177l-7-3.889-7 3.889V19h3v-8zm-6 10H5a2 2 0 0 1-2-2V9.177a2 2 0 0 1 1.029-1.748l7-3.89a2 2 0 0 1 1.942 0l7 3.89A2 2 0 0 1 21 9.177V19a2 2 0 0 1-2 2h-5v-8h-4z",
			clipRule: "evenodd"
		})
	});
}
PC.displayName = "HomeIcon";
var FC = d(PC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/image-error.js
function IC(e, t) {
	return /*#__PURE__*/ O("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ D("path", { d: "M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.803a6 6 0 0 1-.72-2H5v-3.172l4-4 3.585 3.585a6 6 0 0 1 1.172-1.656l-3.343-3.343a2 2 0 0 0-2.828 0L5 13V5h14v7.083c.718.12 1.393.368 2 .72V5a2 2 0 0 0-2-2z" }), /*#__PURE__*/ D("path", { d: "M17 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0m1 5a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m-1 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0" })]
	});
}
IC.displayName = "ImageErrorIcon";
var LC = d(IC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/info.js
function RC(e, t) {
	return /*#__PURE__*/ O("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ D("path", { d: "M11.288 7.288A.97.97 0 0 1 12 7q.424 0 .713.287Q13 7.576 13 8t-.287.713A.97.97 0 0 1 12 9a.97.97 0 0 1-.713-.287A.97.97 0 0 1 11 8q0-.424.287-.713m.001 4.001A.97.97 0 0 1 12 11q.424 0 .713.287.287.288.287.713v4q0 .424-.287.712A.97.97 0 0 1 12 17a.97.97 0 0 1-.713-.288A.97.97 0 0 1 11 16v-4q0-.424.287-.713" }), /*#__PURE__*/ D("path", {
			fillRule: "evenodd",
			d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0",
			clipRule: "evenodd"
		})]
	});
}
RC.displayName = "InfoIcon";
var zC = d(RC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/inline-code.js
function BC(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M14.958 5.62a1 1 0 0 0-1.916-.574l-4 13.333a1 1 0 0 0 1.916.575zM5.974 7.232a1 1 0 0 0-1.409.128l-3.333 4a1 1 0 0 0 0 1.28l3.333 4a1 1 0 1 0 1.537-1.28L3.302 12l2.8-3.36a1 1 0 0 0-.128-1.408m12.053 0a1 1 0 0 1 1.408.128l3.333 4a1 1 0 0 1 0 1.28l-3.333 4a1 1 0 1 1-1.537-1.28l2.8-3.36-2.8-3.36a1 1 0 0 1 .128-1.408" })
	});
}
BC.displayName = "InlineCodeIcon";
var VC = d(BC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/leave.js
function HC(e, t) {
	return /*#__PURE__*/ O("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ D("path", { d: "M14 13q.424 0 .713-.287A.97.97 0 0 0 15 12a.97.97 0 0 0-.287-.713A.97.97 0 0 0 14 11a.97.97 0 0 0-.713.287A.97.97 0 0 0 13 12q0 .424.287.713.288.287.713.287" }), /*#__PURE__*/ D("path", { d: "M10.385 21.788A1 1 0 0 1 10 21V3a1.003 1.003 0 0 1 1.242-.97l8 2A1 1 0 0 1 20 5v14a1 1 0 0 1-.758.97l-8 2a1 1 0 0 1-.857-.182M18 5.781l-6-1.5v15.438l6-1.5zM9 6H7v12h2v2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2z" })]
	});
}
HC.displayName = "LeaveIcon";
var UC = d(HC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/link.js
function WC(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M12 19.071q-1.467 1.467-3.536 1.467-2.067 0-3.535-1.467t-1.467-3.535q0-2.07 1.467-3.536L7.05 9.879q.3-.3.707-.3t.707.3.301.707-.3.707l-2.122 2.121a2.9 2.9 0 0 0-.884 2.122q0 1.237.884 2.12.884.885 2.121.885t2.122-.884l2.121-2.121q.3-.3.707-.3t.707.3.3.707q0 .405-.3.707zm-1.414-4.243q-.3.3-.707.301a.97.97 0 0 1-.707-.3q-.3-.3-.301-.708 0-.405.3-.707l4.243-4.242q.3-.3.707-.3t.707.3.3.707-.3.707zm6.364-.707q-.3.3-.707.3a.97.97 0 0 1-.707-.3q-.3-.3-.301-.707 0-.405.3-.707l2.122-2.121q.884-.885.884-2.121 0-1.238-.884-2.122a2.9 2.9 0 0 0-2.121-.884q-1.237 0-2.122.884l-2.121 2.122q-.3.3-.707.3a.97.97 0 0 1-.707-.3q-.3-.3-.3-.708 0-.405.3-.707L12 4.93q1.467-1.467 3.536-1.467t3.535 1.467 1.467 3.536T19.071 12z" })
	});
}
WC.displayName = "LinkIcon";
var GC = d(WC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/lock-solid.js
function KC(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M6 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 20V10q0-.825.588-1.412A1.93 1.93 0 0 1 6 8h1V6q0-2.075 1.463-3.537Q9.926 1 12 1q2.075 0 3.537 1.463Q17 3.925 17 6v2h1q.824 0 1.413.588Q20 9.175 20 10v10q0 .824-.587 1.413A1.93 1.93 0 0 1 18 22zM9 8h6V6q0-1.25-.875-2.125A2.9 2.9 0 0 0 12 3q-1.25 0-2.125.875A2.9 2.9 0 0 0 9 6z" })
	});
}
KC.displayName = "LockSolidIcon";
var qC = d(KC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/lock.js
function JC(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M6 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 20V10q0-.825.588-1.412A1.93 1.93 0 0 1 6 8h1V6q0-2.075 1.463-3.537Q9.926 1 12 1q2.075 0 3.537 1.463Q17 3.925 17 6v2h1q.824 0 1.413.588Q20 9.175 20 10v10q0 .824-.587 1.413A1.93 1.93 0 0 1 18 22zm0-2h12V10H6zM9 8h6V6q0-1.25-.875-2.125A2.9 2.9 0 0 0 12 3q-1.25 0-2.125.875A2.9 2.9 0 0 0 9 6z" })
	});
}
JC.displayName = "LockIcon";
var YC = d(JC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/mark-as-read.js
function XC(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M21.324 9.13c0-.66-.339-1.237-.862-1.558l-7.37-4.318a1.81 1.81 0 0 0-1.851 0L3.87 7.572C3.348 7.892 3 8.47 3 9.13v9.167c0 1.008.825 1.833 1.833 1.833H19.5a1.84 1.84 0 0 0 1.833-1.833zm-10.129 3.978-6.6-4.124 6.646-3.896a1.81 1.81 0 0 1 1.851 0l6.646 3.896-6.6 4.124a1.85 1.85 0 0 1-1.943 0" })
	});
}
XC.displayName = "MarkAsReadIcon";
var ZC = d(XC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/mark-as-unread.js
function QC(e, t) {
	return /*#__PURE__*/ O("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ D("path", { d: "M20 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" }), /*#__PURE__*/ D("path", {
			fillRule: "evenodd",
			d: "M17 5H5a2 2 0 0 0-2 2v10.4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7.83a3 3 0 0 1-2 0q-.316-.113-.595-.288L12 11.89 5 7.138V7h12.764A3 3 0 0 1 17 5m-4.438 8.927L19 9.555V17.4H5V9.555l6.438 4.372a1 1 0 0 0 1.124 0",
			clipRule: "evenodd"
		})]
	});
}
QC.displayName = "MarkAsUnreadIcon";
var $C = d(QC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/mention.js
function ew(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M12 4a8 8 0 1 0 0 16 1 1 0 1 1 0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10v1.5a3.5 3.5 0 0 1-6.396 1.966A5 5 0 1 1 17 12v1.5a1.5 1.5 0 0 0 3 0V12a8 8 0 0 0-8-8m3 8a3 3 0 1 0-6 0 3 3 0 0 0 6 0" })
	});
}
ew.displayName = "MentionIcon";
var tw = d(ew);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/minus.js
function nw(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M6 13a.97.97 0 0 1-.713-.287A.97.97 0 0 1 5 12q0-.424.287-.713A.97.97 0 0 1 6 11h12q.424 0 .712.287.288.288.288.713 0 .424-.288.713A.97.97 0 0 1 18 13z" })
	});
}
nw.displayName = "MinusIcon";
var rw = d(nw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/notifications-off-solid.js
function iw(e, t) {
	return /*#__PURE__*/ O("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ D("path", { d: "m4.917 2.083 17 17a1 1 0 0 1-1.414 1.414L19.006 19H4.414c-.89 0-1.337-1.077-.707-1.707L5 16v-6s0-2.034 1.096-3.91L3.504 3.498a1 1 0 0 1 1.414-1.414M19 13.35 9.136 3.484C9.93 3.181 10.874 3 12 3c7 0 7 7 7 7z" }), /*#__PURE__*/ D("path", { d: "M10 20h4a2 2 0 0 1-4 0" })]
	});
}
iw.displayName = "NotificationsOffSolidIcon";
var aw = d(iw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/notifications-solid.js
function ow(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M20.293 17.293c.63.63.184 1.707-.707 1.707H4.414c-.89 0-1.337-1.077-.707-1.707L5 16v-6s0-7 7-7 7 7 7 7v6zM12 22a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2" })
	});
}
ow.displayName = "NotificationsSolidIcon";
var sw = d(ow);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/overflow-horizontal.js
function cw(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M6 14q-.824 0-1.412-.588A1.93 1.93 0 0 1 4 12q0-.825.588-1.412A1.93 1.93 0 0 1 6 10q.824 0 1.412.588Q8 11.175 8 12t-.588 1.412A1.93 1.93 0 0 1 6 14m6 0q-.825 0-1.412-.588A1.93 1.93 0 0 1 10 12q0-.825.588-1.412A1.93 1.93 0 0 1 12 10q.825 0 1.412.588Q14 11.175 14 12t-.588 1.412A1.93 1.93 0 0 1 12 14m6 0q-.824 0-1.413-.588A1.93 1.93 0 0 1 16 12q0-.825.587-1.412A1.93 1.93 0 0 1 18 10q.824 0 1.413.588Q20 11.175 20 12t-.587 1.412A1.93 1.93 0 0 1 18 14" })
	});
}
cw.displayName = "OverflowHorizontalIcon";
var lw = d(cw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/pin-solid.js
function uw(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M5.769 2.857A.5.5 0 0 1 6.119 2h11.762a.5.5 0 0 1 .35.857L16.15 4.9a.5.5 0 0 0-.15.357v4.487a.5.5 0 0 0 .15.356l3.7 3.644a.5.5 0 0 1 .15.356v1.4a.5.5 0 0 1-.5.5H13v6a1 1 0 1 1-2 0v-6H4.5a.5.5 0 0 1-.5-.5v-1.4a.5.5 0 0 1 .15-.356l3.7-3.644A.5.5 0 0 0 8 9.744V5.257a.5.5 0 0 0-.15-.357z" })
	});
}
uw.displayName = "PinSolidIcon";
var dw = d(uw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/pin.js
function fw(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", {
			fillRule: "evenodd",
			d: "M6.119 2a.5.5 0 0 0-.35.857L7.85 4.9a.5.5 0 0 1 .15.357v4.487a.5.5 0 0 1-.15.356l-3.7 3.644A.5.5 0 0 0 4 14.1v1.4a.5.5 0 0 0 .5.5H11v6a1 1 0 1 0 2 0v-6h6.5a.5.5 0 0 0 .5-.5v-1.4a.5.5 0 0 0-.15-.356l-3.7-3.644a.5.5 0 0 1-.15-.356V5.257a.5.5 0 0 1 .15-.357l2.081-2.043a.5.5 0 0 0-.35-.857zM10 4h4v5.744a2.5 2.5 0 0 0 .746 1.781L17.26 14H6.74l2.514-2.475A2.5 2.5 0 0 0 10 9.744z",
			clipRule: "evenodd"
		})
	});
}
fw.displayName = "PinIcon";
var pw = d(fw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/plus.js
function mw(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M11 13H6a.97.97 0 0 1-.713-.287A.97.97 0 0 1 5 12q0-.424.287-.713A.97.97 0 0 1 6 11h5V6q0-.424.287-.713A.97.97 0 0 1 12 5q.424 0 .713.287Q13 5.576 13 6v5h5q.424 0 .712.287.288.288.288.713 0 .424-.288.713A.97.97 0 0 1 18 13h-5v5q0 .424-.287.712A.97.97 0 0 1 12 19a.97.97 0 0 1-.713-.288A.97.97 0 0 1 11 18z" })
	});
}
mw.displayName = "PlusIcon";
var hw = d(mw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/preferences.js
function gw(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", {
			fillRule: "evenodd",
			d: "M6.5 2h11a4.5 4.5 0 1 1 0 9h-11a4.5 4.5 0 0 1 0-9m0 2h7.258A4.5 4.5 0 0 0 13 6.5c0 .925.28 1.785.758 2.5H6.5a2.5 2.5 0 0 1 0-5M15 6.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0m-13 11A4.5 4.5 0 0 1 6.5 13h11a4.5 4.5 0 1 1 0 9h-11q-.233 0-.46-.023A4.5 4.5 0 0 1 2 17.5m8.242-2.5H17.5a2.5 2.5 0 0 1 0 5h-7.258A4.5 4.5 0 0 0 11 17.5c0-.925-.28-1.785-.758-2.5M6.5 15a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5",
			clipRule: "evenodd"
		})
	});
}
gw.displayName = "PreferencesIcon";
var _w = d(gw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/reaction-add.js
function vw(e, t) {
	return /*#__PURE__*/ O("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ D("path", { d: "M14.74 2.38C13.87 2.133 12.95 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-.95-.133-1.87-.38-2.74a5 5 0 0 1-1.886.687 8 8 0 1 1-5.68-5.68c.1-.684.339-1.323.687-1.887" }), /*#__PURE__*/ D("path", { d: "M15.536 14.121a1 1 0 0 1 0 1.415A5 5 0 0 1 12 17c-1.38 0-2.632-.56-3.535-1.464a1 1 0 1 1 1.414-1.415A3 3 0 0 0 12 15c.829 0 1.577-.335 2.121-.879a1 1 0 0 1 1.415 0M8.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m8.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M18 6h-1a.97.97 0 0 1-.712-.287A.97.97 0 0 1 16 5q0-.424.288-.713A.97.97 0 0 1 17 4h1V3q0-.424.288-.712A.97.97 0 0 1 19 2q.424 0 .712.288Q20 2.575 20 3v1h1q.424 0 .712.287Q22 4.576 22 5t-.288.713A.97.97 0 0 1 21 6h-1v1q0 .424-.288.713A.97.97 0 0 1 19 8a.97.97 0 0 1-.712-.287A.97.97 0 0 1 18 7z" })]
	});
}
vw.displayName = "ReactionAddIcon";
var yw = d(vw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/reaction.js
function bw(e, t) {
	return /*#__PURE__*/ O("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ D("path", { d: "M15.536 15.536a1 1 0 0 0-1.415-1.415 3 3 0 0 1-2.12.879 3 3 0 0 1-2.122-.879 1 1 0 1 0-1.414 1.415A5 5 0 0 0 12 17c1.38 0 2.632-.56 3.536-1.464M10 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" }), /*#__PURE__*/ D("path", { d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0" })]
	});
}
bw.displayName = "ReactionIcon";
var xw = d(bw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/reply.js
function Sw(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M9.405 5.708c.39-.39.39-1.025 0-1.416a.996.996 0 0 0-1.412 0L3.294 9.006a1.004 1.004 0 0 0 0 1.416l4.699 4.714a.996.996 0 0 0 1.412 0c.39-.39.39-1.025 0-1.416l-3.043-3.053h9.153c1.887 0 3.485 1.604 3.485 3.666C19 16.396 17.402 18 15.515 18h-2.093a1 1 0 1 0 0 2h2.093C18.58 20 21 17.425 21 14.333s-2.419-5.666-5.485-5.666H6.456z" })
	});
}
Sw.displayName = "ReplyIcon";
var Cw = d(Sw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/restart.js
function ww(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M18.93 8A8 8 0 1 1 4 12a1 1 0 1 0-2 0c0 5.523 4.477 10 10 10s10-4.477 10-10a10 10 0 0 0-.832-4A10 10 0 0 0 12 2a9.99 9.99 0 0 0-8 3.999V4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2H5.755A7.99 7.99 0 0 1 12 4a8 8 0 0 1 6.93 4" })
	});
}
ww.displayName = "RestartIcon";
var Tw = d(ww);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/room.js
function Ew(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "m8.566 17-.944 4.094q-.086.406-.372.656t-.687.25q-.543 0-.887-.469a1.18 1.18 0 0 1-.2-1.031l.801-3.5H3.158q-.572 0-.916-.484a1.27 1.27 0 0 1-.2-1.078 1.12 1.12 0 0 1 1.116-.938H6.85l1.145-5h-3.12q-.57 0-.915-.484a1.27 1.27 0 0 1-.2-1.078A1.12 1.12 0 0 1 4.875 7h3.691l.945-4.094q.085-.406.372-.656.286-.25.686-.25.544 0 .887.469.345.468.2 1.031l-.8 3.5h4.578l.944-4.094q.085-.406.372-.656.286-.25.687-.25.543 0 .887.469t.2 1.031L17.723 7h3.119q.573 0 .916.484.343.485.2 1.079a1.12 1.12 0 0 1-1.116.937H17.15l-1.145 5h3.12q.57 0 .915.484.343.485.2 1.079a1.12 1.12 0 0 1-1.116.937h-3.691l-.944 4.094q-.087.406-.373.656t-.686.25q-.544 0-.887-.469a1.18 1.18 0 0 1-.2-1.031l.8-3.5zm.573-2.5h4.578l1.144-5h-4.578z" })
	});
}
Ew.displayName = "RoomIcon";
var Dw = d(Ew);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/search.js
function Ow(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M15.05 16.463a7.5 7.5 0 1 1 1.414-1.414l3.243 3.244a1 1 0 0 1-1.414 1.414zM16 10.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0" })
	});
}
Ow.displayName = "SearchIcon";
var kw = d(Ow);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/section.js
function Aw(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M16 7a.97.97 0 0 0-.713.287A.97.97 0 0 0 15 8q0 .424.287.713Q15.576 9 16 9t.712-.287A.97.97 0 0 0 17 8a.97.97 0 0 0-.288-.713A.97.97 0 0 0 16 7m0 4a.97.97 0 0 0-.713.287A.97.97 0 0 0 15 12q0 .424.287.713.288.287.713.287.424 0 .712-.287A.97.97 0 0 0 17 12a.97.97 0 0 0-.288-.713A.97.97 0 0 0 16 11m0 4a.97.97 0 0 0-.713.287A.97.97 0 0 0 15 16q0 .424.287.712.288.288.713.288.424 0 .712-.288A.97.97 0 0 0 17 16a.97.97 0 0 0-.288-.713A.97.97 0 0 0 16 15m-4-8H8a.97.97 0 0 0-.713.287A.97.97 0 0 0 7 8q0 .424.287.713Q7.576 9 8 9h4q.424 0 .713-.287A.97.97 0 0 0 13 8a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 7m0 4H8a.97.97 0 0 0-.713.287A.97.97 0 0 0 7 12q0 .424.287.713Q7.576 13 8 13h4q.424 0 .713-.287A.97.97 0 0 0 13 12a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 11m0 4H8a.97.97 0 0 0-.713.287A.97.97 0 0 0 7 16q0 .424.287.712Q7.576 17 8 17h4q.424 0 .713-.288A.97.97 0 0 0 13 16a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 15m7-12q.824 0 1.413.587Q21 4.176 21 5v14q0 .824-.587 1.413A1.93 1.93 0 0 1 19 21H5q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19V5q0-.824.587-1.412A1.93 1.93 0 0 1 5 3zm0 2H5v14h14z" })
	});
}
Aw.displayName = "SectionIcon";
var jw = d(Aw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/settings.js
function Mw(e, t) {
	return /*#__PURE__*/ O("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ D("path", { d: "M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-2 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0" }), /*#__PURE__*/ D("path", { d: "M11.312 2h1.376A2.31 2.31 0 0 1 15 4.312v.247l.002.003c.01.014.031.033.064.047.03.013.056.013.07.01h.002l.177-.177a2.31 2.31 0 0 1 3.27 0l.973.974a2.31 2.31 0 0 1 0 3.269l-.177.177v.003a.13.13 0 0 0 .01.07.15.15 0 0 0 .047.063l.003.002h.247A2.31 2.31 0 0 1 22 11.312v1.376A2.31 2.31 0 0 1 19.688 15h-.247l-.003.002a.15.15 0 0 0-.047.064.13.13 0 0 0-.01.07v.002l.177.177a2.31 2.31 0 0 1 0 3.27l-.974.973a2.31 2.31 0 0 1-3.269 0l-.177-.177h-.003a.13.13 0 0 0-.07.01.15.15 0 0 0-.063.047l-.002.003v.247A2.31 2.31 0 0 1 12.688 22h-1.376A2.31 2.31 0 0 1 9 19.688v-.247l-.002-.003a.15.15 0 0 0-.064-.047.13.13 0 0 0-.07-.01h-.002l-.177.177a2.31 2.31 0 0 1-3.27 0l-.973-.974a2.31 2.31 0 0 1 0-3.269l.177-.177v-.003a.14.14 0 0 0-.01-.07.15.15 0 0 0-.047-.063L4.559 15h-.247A2.31 2.31 0 0 1 2 12.688v-1.376A2.31 2.31 0 0 1 4.312 9h.247l.003-.002a.15.15 0 0 0 .047-.064.14.14 0 0 0 .01-.07v-.002l-.177-.177a2.31 2.31 0 0 1 0-3.27l.974-.973a2.31 2.31 0 0 1 3.269 0l.177.177h.003a.14.14 0 0 0 .07-.01.15.15 0 0 0 .063-.047L9 4.559v-.247A2.31 2.31 0 0 1 11.312 2M11 4.312v.257c0 .893-.59 1.593-1.299 1.887-.716.297-1.622.21-2.248-.418l-.182-.182a.31.31 0 0 0-.441 0l-.974.974a.31.31 0 0 0 0 .44l.182.183c.627.626.715 1.531.418 2.248C6.162 10.41 5.462 11 4.569 11h-.257a.31.31 0 0 0-.312.312v1.376c0 .172.14.312.312.312h.257c.893 0 1.593.59 1.887 1.299.297.716.21 1.622-.418 2.248l-.182.182a.31.31 0 0 0 0 .441l.974.973a.31.31 0 0 0 .44 0l.183-.181c.626-.627 1.532-.715 2.248-.418.709.294 1.299.994 1.299 1.887v.257c0 .172.14.312.312.312h1.376c.172 0 .312-.14.312-.312v-.257c0-.893.59-1.593 1.299-1.887.716-.297 1.622-.21 2.249.418l.181.181c.122.122.32.122.441 0l.973-.973a.31.31 0 0 0 0-.44l-.181-.183c-.627-.626-.715-1.532-.418-2.248.294-.709.994-1.299 1.887-1.299h.257c.172 0 .312-.14.312-.312v-1.376a.31.31 0 0 0-.312-.312h-.257c-.893 0-1.593-.59-1.887-1.299-.297-.717-.21-1.622.418-2.248l.181-.182a.31.31 0 0 0 0-.441l-.973-.974a.31.31 0 0 0-.44 0l-.183.182c-.626.627-1.532.715-2.248.418C13.59 6.162 13 5.462 13 4.569v-.257A.31.31 0 0 0 12.688 4h-1.376a.31.31 0 0 0-.312.312" })]
	});
}
Mw.displayName = "SettingsIcon";
var Nw = d(Mw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/sign-out.js
function Pw(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M9 12.031q0-.424.288-.712A.97.97 0 0 1 10 11.03h7.15l-1.875-1.875a.96.96 0 0 1-.3-.7q0-.4.325-.725a.93.93 0 0 1 .712-.287.98.98 0 0 1 .688.287l3.6 3.6q.15.15.212.325.063.175.063.375 0 .201-.062.375a.9.9 0 0 1-.213.325l-3.6 3.6q-.3.3-.712.288a.98.98 0 0 1-.688-.288 1.02 1.02 0 0 1-.312-.712.93.93 0 0 1 .287-.713l1.875-1.875H10a.97.97 0 0 1-.712-.287A.97.97 0 0 1 9 12.03m-6-7q0-.824.588-1.412A1.93 1.93 0 0 1 5 3.03h6q.424 0 .713.288.287.287.287.712t-.287.713A.97.97 0 0 1 11 5.03H5v14h6q.424 0 .713.288.287.287.287.712t-.287.713a.97.97 0 0 1-.713.287H5q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19.03z" })
	});
}
Pw.displayName = "SignOutIcon";
var Fw = d(Pw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/threads-solid.js
function Iw(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M4 3h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6l-2.293 2.293c-.63.63-1.707.184-1.707-.707V5a2 2 0 0 1 2-2m3 7h10q.424 0 .712-.287A.97.97 0 0 0 18 9a.97.97 0 0 0-.288-.713A.97.97 0 0 0 17 8H7a.97.97 0 0 0-.713.287A.97.97 0 0 0 6 9q0 .424.287.713Q6.576 10 7 10m0 4h6q.424 0 .713-.287A.97.97 0 0 0 14 13a.97.97 0 0 0-.287-.713A.97.97 0 0 0 13 12H7a.97.97 0 0 0-.713.287A.97.97 0 0 0 6 13q0 .424.287.713Q6.576 14 7 14" })
	});
}
Iw.displayName = "ThreadsSolidIcon";
var Lw = d(Iw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/threads.js
function Rw(e, t) {
	return /*#__PURE__*/ O("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ D("path", { d: "M7 10a.97.97 0 0 1-.713-.287A.97.97 0 0 1 6 9q0-.424.287-.713A.97.97 0 0 1 7 8h10q.424 0 .712.287Q18 8.576 18 9t-.288.713A.97.97 0 0 1 17 10zm0 4a.97.97 0 0 1-.713-.287A.97.97 0 0 1 6 13q0-.424.287-.713A.97.97 0 0 1 7 12h6q.424 0 .713.287.287.288.287.713 0 .424-.287.713A.97.97 0 0 1 13 14z" }), /*#__PURE__*/ D("path", { d: "M3.707 21.293c-.63.63-1.707.184-1.707-.707V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6zM6 17h14V5H4v13.172l.586-.586A2 2 0 0 1 6 17" })]
	});
}
Rw.displayName = "ThreadsIcon";
var zw = d(Rw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/unpin.js
function Bw(e, t) {
	return /*#__PURE__*/ O("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ D("path", {
			fillRule: "evenodd",
			d: "M5.457 2.083a1 1 0 0 0-1.414 1.414L8.04 7.494v2.25a.5.5 0 0 1-.15.356l-3.7 3.644a.5.5 0 0 0-.15.356v1.4a.5.5 0 0 0 .5.5h6.5v6a1 1 0 0 0 2 0v-6h3.506l4.497 4.497a1 1 0 0 0 1.414-1.414zM14.546 14 10.04 9.494v.25a2.5 2.5 0 0 1-.746 1.781L6.78 14z",
			clipRule: "evenodd"
		}), /*#__PURE__*/ D("path", { d: "M14.04 4v3.85l2.015 2.015a.5.5 0 0 1-.015-.12V5.257a.5.5 0 0 1 .15-.357l2.081-2.043a.5.5 0 0 0-.35-.857h-9.73l2 2z" })]
	});
}
Bw.displayName = "UnpinIcon";
var Vw = d(Bw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/user-add.js
function Hw(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M10 12q-1.65 0-2.825-1.175T6 8t1.175-2.825T10 4t2.825 1.175T14 8t-1.175 2.825T10 12m-8 6v-.8q0-.85.438-1.562.437-.713 1.162-1.088a14.8 14.8 0 0 1 3.15-1.163A13.8 13.8 0 0 1 10 13q1.65 0 3.25.387 1.6.388 3.15 1.163.724.375 1.163 1.087Q18 16.35 18 17.2v.8q0 .824-.587 1.413A1.93 1.93 0 0 1 16 20H4q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 18m2 0h12v-.8a.97.97 0 0 0-.5-.85q-1.35-.675-2.725-1.012a11.6 11.6 0 0 0-5.55 0Q5.85 15.675 4.5 16.35a.97.97 0 0 0-.5.85zm6-8q.825 0 1.412-.588Q12 8.826 12 8q0-.824-.588-1.412A1.93 1.93 0 0 0 10 6q-.825 0-1.412.588A1.93 1.93 0 0 0 8 8q0 .825.588 1.412Q9.175 10 10 10m7 1h2v2q0 .424.288.713.287.287.712.287.424 0 .712-.287A.97.97 0 0 0 21 13v-2h2q.424 0 .712-.287A.97.97 0 0 0 24 10a.97.97 0 0 0-.288-.713A.97.97 0 0 0 23 9h-2V7a.97.97 0 0 0-.288-.713A.97.97 0 0 0 20 6a.97.97 0 0 0-.712.287A.97.97 0 0 0 19 7v2h-2a.97.97 0 0 0-.712.287A.97.97 0 0 0 16 10q0 .424.288.713.287.287.712.287" })
	});
}
Hw.displayName = "UserAddIcon";
var Uw = d(Hw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/user-profile-solid.js
function Ww(e, t) {
	return /*#__PURE__*/ O("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ D("path", { d: "M12 15q-1.65 0-2.825-1.175T8 11t1.175-2.825T12 7t2.825 1.175T16 11t-1.175 2.825T12 15" }), /*#__PURE__*/ D("path", { d: "M19.528 18.583A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 2.52.933 4.824 2.472 6.583A9.98 9.98 0 0 0 12 22a9.98 9.98 0 0 0 7.528-3.417M8.75 16.388q-1.373.332-2.709.95a8 8 0 1 1 11.918 0 14.7 14.7 0 0 0-2.709-.95A13.8 13.8 0 0 0 12 16q-1.65 0-3.25.387" })]
	});
}
Ww.displayName = "UserProfileSolidIcon";
var Gw = d(Ww);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/video-call-declined-solid.js
function Kw(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M2 8a4 4 0 0 1 4-4h10a2 2 0 0 1 2 2v4.286l3.35-2.871a1 1 0 0 1 1.65.76v7.65a1 1 0 0 1-1.65.76L18 13.715V18a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4zm10.828 6.828q.3-.3.3-.707 0-.405-.3-.707L11.414 12l1.414-1.414q.3-.3.3-.707t-.3-.707-.707-.301q-.405 0-.707.3L10 10.587 8.586 9.172q-.3-.3-.707-.301-.407 0-.707.3t-.3.708q0 .405.3.707L8.586 12l-1.414 1.414q-.3.3-.3.707t.3.707.707.3q.405 0 .707-.3L10 13.414l1.414 1.414q.3.3.707.3t.707-.3" })
	});
}
Kw.displayName = "VideoCallDeclinedSolidIcon";
var qw = d(Kw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/video-call-solid.js
function Jw(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M6 4h10a2 2 0 0 1 2 2v4.286l3.35-2.871a1 1 0 0 1 1.65.76v7.65a1 1 0 0 1-1.65.76L18 13.715V18a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4" })
	});
}
Jw.displayName = "VideoCallSolidIcon";
var Yw = d(Jw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/video-call.js
function Xw(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M2 8a4 4 0 0 1 4-4h10a2 2 0 0 1 2 2v4.286l3.35-2.871a1 1 0 0 1 1.65.76v7.65a1 1 0 0 1-1.65.76L18 13.715V18a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10V6zm15 7.652v-3.303L19.073 12z" })
	});
}
Xw.displayName = "VideoCallIcon";
var Zw = d(Xw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/visibility-off.js
function Qw(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "m16.1 13.3-1.45-1.45q.225-1.175-.675-2.2t-2.325-.8L10.2 7.4q.424-.2.863-.3A4.2 4.2 0 0 1 12 7q1.875 0 3.188 1.312Q16.5 9.625 16.5 11.5q0 .5-.1.938t-.3.862m3.2 3.15-1.45-1.4a11 11 0 0 0 1.688-1.588A9 9 0 0 0 20.8 11.5q-1.25-2.524-3.588-4.013Q14.875 6 12 6q-.724 0-1.425.1a10 10 0 0 0-1.375.3L7.65 4.85A11.1 11.1 0 0 1 12 4q3.575 0 6.425 1.887T22.7 10.8a.8.8 0 0 1 .1.313q.025.188.025.387a2 2 0 0 1-.125.7 10.9 10.9 0 0 1-3.4 4.25m-.2 5.45-3.5-3.45q-.874.274-1.762.413Q12.95 19 12 19q-3.575 0-6.425-1.887T1.3 12.2a.8.8 0 0 1-.1-.312 3 3 0 0 1 0-.763.8.8 0 0 1 .1-.3Q1.825 9.7 2.55 8.75A13.3 13.3 0 0 1 4.15 7L2.075 4.9a.93.93 0 0 1-.275-.688q0-.412.3-.712a.95.95 0 0 1 .7-.275q.425 0 .7.275l17 17q.275.275.288.688a.93.93 0 0 1-.288.712.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275M5.55 8.4q-.725.65-1.325 1.425A9 9 0 0 0 3.2 11.5q1.25 2.524 3.588 4.012T12 17q.5 0 .975-.062.475-.063.975-.138l-.9-.95q-.274.075-.525.113A3.5 3.5 0 0 1 12 16q-1.875 0-3.187-1.312Q7.5 13.375 7.5 11.5q0-.274.038-.525.037-.25.112-.525z" })
	});
}
Qw.displayName = "VisibilityOffIcon";
var $w = d(Qw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/visibility-on.js
function eT(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M12 16q1.875 0 3.188-1.312Q16.5 13.375 16.5 11.5t-1.312-3.187T12 7 8.813 8.313 7.5 11.5t1.313 3.188T12 16m0-1.8q-1.125 0-1.912-.787A2.6 2.6 0 0 1 9.3 11.5q0-1.125.787-1.912A2.6 2.6 0 0 1 12 8.8q1.125 0 1.912.787.788.788.788 1.913t-.787 1.912A2.6 2.6 0 0 1 12 14.2m0 4.8q-3.475 0-6.35-1.837Q2.775 15.324 1.3 12.2a.8.8 0 0 1-.1-.312 3 3 0 0 1 0-.775.8.8 0 0 1 .1-.313q1.475-3.125 4.35-4.962Q8.525 4 12 4t6.35 1.838T22.7 10.8a.8.8 0 0 1 .1.313 3 3 0 0 1 0 .774.8.8 0 0 1-.1.313q-1.475 3.125-4.35 4.963Q15.475 19 12 19m0-2a9.54 9.54 0 0 0 5.188-1.488A9.77 9.77 0 0 0 20.8 11.5a9.77 9.77 0 0 0-3.613-4.012A9.54 9.54 0 0 0 12 6a9.55 9.55 0 0 0-5.187 1.487A9.77 9.77 0 0 0 3.2 11.5a9.77 9.77 0 0 0 3.613 4.012A9.54 9.54 0 0 0 12 17" })
	});
}
eT.displayName = "VisibilityOnIcon";
var tT = d(eT);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/voice-call-declined-solid.js
function nT(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "M7.623 3.04a1.07 1.07 0 0 1 1.086.929l.542 3.954q.039.27-.038.504a1.1 1.1 0 0 1-.272.427l-1.64 1.64Q7.806 11.5 8.456 12.4c.433.601 1.444 1.697 1.444 1.697.013.012 1.098 1.014 1.696 1.444q.9.65 1.909 1.153l1.64-1.64q.194-.194.426-.27a1.1 1.1 0 0 1 .504-.04l3.953.543q.407.058.67.358.26.301.26.728l.04 3.527q0 .427-.33.756-.33.33-.756.33a16 16 0 0 1-6.57-1.105 16.2 16.2 0 0 1-5.563-3.663 16.1 16.1 0 0 1-3.653-5.573 16.3 16.3 0 0 1-1.116-6.56q0-.426.329-.756Q3.67 3 4.095 3zM20.25 3q.405 0 .707.3.3.301.3.708t-.3.707l-1.414 1.414 1.414 1.414q.3.3.3.707t-.3.707-.707.3-.707-.3l-1.414-1.414-1.414 1.414q-.3.3-.707.3t-.707-.3T15 8.25q0-.406.3-.707l1.415-1.414L15.3 4.715q-.3-.3-.301-.707 0-.407.3-.707t.71-.301q.405 0 .707.3l1.414 1.415L19.543 3.3q.3-.3.707-.301" })
	});
}
nT.displayName = "VoiceCallDeclinedSolidIcon";
var rT = d(nT);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/voice-call-solid.js
function iT(e, t) {
	return /*#__PURE__*/ D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ D("path", { d: "m20.958 16.374.039 3.527q0 .427-.33.756-.33.33-.756.33a16 16 0 0 1-6.57-1.105 16.2 16.2 0 0 1-5.563-3.663 16.1 16.1 0 0 1-3.653-5.573 16.3 16.3 0 0 1-1.115-6.56q0-.427.33-.757T4.095 3l3.528.039a1.07 1.07 0 0 1 1.085.93l.543 3.954q.039.271-.039.504a1.1 1.1 0 0 1-.271.426l-1.64 1.64q.505 1.008 1.154 1.909c.433.6 1.444 1.696 1.444 1.696s1.095 1.01 1.696 1.444q.9.65 1.909 1.153l1.64-1.64q.193-.193.426-.27t.504-.04l3.954.543q.406.059.668.359t.262.727" })
	});
}
iT.displayName = "VoiceCallSolidIcon";
var aT = d(iT);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/volume-on-solid.js
function oT(e, t) {
	return /*#__PURE__*/ O("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ D("path", { d: "M3 14v-4a2 2 0 0 1 2-2h2l3.293-3.293c.63-.63 1.707-.184 1.707.707v13.172c0 .89-1.077 1.337-1.707.707L7 16H5a2 2 0 0 1-2-2m11.122-5.536a1 1 0 0 1 1.414 0A5 5 0 0 1 17 12c0 1.38-.56 2.632-1.464 3.536a1 1 0 0 1-1.415-1.415 3 3 0 0 0 .88-2.121c0-.829-.335-1.577-.88-2.121a1 1 0 0 1 0-1.415" }), /*#__PURE__*/ D("path", { d: "M16.95 5.636a1 1 0 0 1 1.414 0A8.98 8.98 0 0 1 21 12a8.98 8.98 0 0 1-2.636 6.364 1 1 0 0 1-1.414-1.414A6.98 6.98 0 0 0 19 12a6.98 6.98 0 0 0-2.05-4.95 1 1 0 0 1 0-1.414" })]
	});
}
oT.displayName = "VolumeOnSolidIcon";
var sT = d(oT), cT = ({ query: e, onChange: t, onEnter: n, onKeyDown: r, inputRef: i, controlsId: a }) => {
	let o = g(Jx);
	_(() => {
		i.current?.focus();
	}, [i]);
	let s = h((e) => {
		e.key === "Enter" ? (n(), e.stopPropagation(), e.preventDefault()) : r(e);
	}, [n, r]), c;
	return c = e ? /* @__PURE__ */ D("button", {
		type: "button",
		onClick: () => t(""),
		title: U("emoji_picker|cancel_search_label"),
		children: /* @__PURE__ */ D(ZS, {})
	}) : /* @__PURE__ */ D("span", {
		className: W.searchIcon,
		children: /* @__PURE__ */ D(kw, {})
	}), /* @__PURE__ */ O("div", {
		className: W.search,
		children: [/* @__PURE__ */ D("input", {
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
}, lT = ({ emoji: e }) => {
	let { unicode: t, label: n, shortcodes: [r] } = e;
	return /* @__PURE__ */ O("div", {
		className: W.footer,
		children: [/* @__PURE__ */ D("div", {
			className: W.previewEmoji,
			children: t
		}), /* @__PURE__ */ O("div", {
			className: W.previewText,
			children: [/* @__PURE__ */ D("div", {
				className: (0, z.default)(W.name, W.previewName),
				children: n
			}), /* @__PURE__ */ D("div", {
				className: W.shortcode,
				children: r
			})]
		})]
	});
};
//#endregion
//#region src/core/EmojiPicker/RovingButton.tsx
function uT({ onClick: e, disabled: t, focusOnMouseOver: n, onFocus: r, onMouseOver: i, onKeyDown: a, onKeyUp: o, role: s = "button", children: c, ...l }) {
	let [u, d, f] = uS(), p = {
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
	}, /* @__PURE__ */ D("div", {
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
var dT = o.memo(function({ onClick: e, onMouseEnter: t, onMouseLeave: n, emoji: r, selectedEmojis: i, disabled: a, id: o, className: s }) {
	let c = i?.has(r.unicode), l = h(() => t(r), [t, r]), u = h(() => n(r), [n, r]);
	return /* @__PURE__ */ D(uT, {
		id: o,
		onClick: (t) => e(t, r),
		onMouseEnter: l,
		onMouseLeave: u,
		className: s,
		disabled: a || void 0,
		role: i ? "checkbox" : void 0,
		"aria-checked": c,
		focusOnMouseOver: !0,
		children: /* @__PURE__ */ D("div", {
			className: (0, z.default)(W.item, { [W.itemSelected]: c }),
			children: r.unicode
		})
	});
}), fT = [
	"👍",
	"👎",
	"😄",
	"🎉",
	"😕",
	"❤️",
	"🚀",
	"👀"
].map((e) => {
	let t = Fe(e);
	if (!t) throw Error(`Emoji ${e} doesn't exist in emojibase`);
	return t;
}), pT = ({ selectedEmojis: e, onClick: t, getAction: n }) => {
	let [r, i] = T(void 0), a = h((e) => {
		i(e);
	}, []), s = h(() => {
		i(void 0);
	}, []);
	return /* @__PURE__ */ O("section", {
		className: (0, z.default)(W.footer, W.quick, W.category),
		children: [/* @__PURE__ */ D(pe, {
			as: "h2",
			className: (0, z.default)(W.quickHeader, W.categoryLabel),
			children: r ? /* @__PURE__ */ O(o.Fragment, { children: [/* @__PURE__ */ D("span", {
				className: W.name,
				children: r.label
			}), /* @__PURE__ */ D("span", {
				className: W.shortcode,
				children: r.shortcodes[0]
			})] }) : U("emoji|quick_reactions")
		}), /* @__PURE__ */ D(xS, {
			className: W.list,
			"aria-label": U("emoji|quick_reactions"),
			getAction: n,
			children: fT.map((n) => /* @__PURE__ */ D(dT, {
				emoji: n,
				onClick: t,
				onMouseEnter: a,
				onMouseLeave: s,
				selectedEmojis: e,
				className: W.itemWrapper
			}, n.hexcode))
		})]
	});
}, mT = "‍", hT = [
	{
		id: "recent",
		untranslatedName: Mx("emoji|category_frequently_used"),
		emoji: "🕒"
	},
	{
		id: "people",
		untranslatedName: Mx("emoji|category_smileys_people"),
		emoji: "😀"
	},
	{
		id: "nature",
		untranslatedName: Mx("emoji|category_animals_nature"),
		emoji: "🐕"
	},
	{
		id: "foods",
		untranslatedName: Mx("emoji|category_food_drink"),
		emoji: "🍎"
	},
	{
		id: "activity",
		untranslatedName: Mx("emoji|category_activities"),
		emoji: "⚽️"
	},
	{
		id: "places",
		untranslatedName: Mx("emoji|category_travel_places"),
		emoji: "🚗"
	},
	{
		id: "objects",
		untranslatedName: Mx("emoji|category_objects"),
		emoji: "💡"
	},
	{
		id: "symbols",
		untranslatedName: Mx("emoji|category_symbols"),
		emoji: "⁉️"
	},
	{
		id: "flags",
		untranslatedName: Mx("emoji|category_flags"),
		emoji: "🏁"
	}
], gT = {
	List: ({ ref: e, ...t }) => /* @__PURE__ */ D("div", {
		...t,
		ref: e,
		className: W.list,
		role: "grid",
		"aria-multiselectable": !0
	}),
	Item: ({ item: e, ...t }) => e.type === "header" ? /* @__PURE__ */ D("div", {
		...t,
		role: "row"
	}) : /* @__PURE__ */ D("div", {
		...t,
		role: "row",
		className: W.row
	})
};
function _T(e) {
	return Array.from(new Set((e ?? []).map(Fe).filter((e) => !!e)));
}
function vT(e, t) {
	return t.includes(mT) && (t = t.split(mT, 2)[0]), e.label.toLowerCase().includes(t) || (Array.isArray(e.emoticon) ? e.emoticon.some((e) => e.includes(t)) : e.emoticon?.includes(t)) || e.shortcodes.some((e) => e.toLowerCase().includes(t)) || e.unicode.split(mT).includes(t);
}
function yT(e, t) {
	return t === "" ? e : e.filter((e) => vT(e, t)).sort((e, n) => {
		let r = e.shortcodes[0].indexOf(t), i = n.shortcodes[0].indexOf(t);
		return r == -1 || i == -1 ? i - r : r == 0 && i == 0 ? e.shortcodes[0].length - n.shortcodes[0].length : r - i;
	});
}
function bT({ selectedEmojis: e, onChoose: t, onFinished: n, isEmojiDisabled: r, recentEmojis: i, onRecordRecent: a, getAction: o, showQuickReactions: s = !0 }) {
	let [c, l] = T(""), [u, d] = T(void 0), [f, p] = T(!1), [m, g] = T(null), _ = w(null), y = w(null), b = S(() => _T(i), [i]), x = c.toLowerCase().trim(), { dataByCategory: C, enabledCategories: ee } = S(() => {
		let e = {}, t = [];
		for (let n of hT) {
			let r = yT(n.id === "recent" ? b : Pe[n.id], x);
			e[n.id] = r, r.length > 0 && t.push(n.id);
		}
		return {
			dataByCategory: e,
			enabledCategories: t
		};
	}, [x, b]), [te, E] = T(b.length > 0 ? "recent" : "people"), ne = h((e) => {
		g(e);
	}, []), k = S(() => {
		let e = [];
		for (let t of hT) {
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
	}, [C]), re = h((e) => {
		let t = /* @__PURE__ */ new Set();
		for (let n = e.startIndex; n <= e.endIndex; n++) {
			let e = k[n];
			e && t.add(e.type === "header" ? e.category.id : e.categoryId);
		}
		E(hT.find((e) => t.has(e.id))?.id ?? "people");
	}, [k]), A = h((e) => e?.parentElement ?? void 0, []), j = h((e) => A(e)?.parentElement ?? void 0, [A]), ie = h((e) => {
		let t = e.children[0];
		return t instanceof HTMLElement ? t : void 0;
	}, []), ae = h((e, t, n) => {
		t.activeNode && [
			"ArrowDown",
			"ArrowRight",
			"ArrowLeft",
			"ArrowUp"
		].includes(e.key) && !f && (p(!0), t.nodes.length > 0 && n({
			type: Yx.SetFocus,
			payload: { node: t.nodes[0] }
		}), e.preventDefault(), e.stopPropagation());
	}, [f]), oe = h(() => document.activeElement !== _.current, []), se = h((e, t, n) => {
		j(n.activeNode) !== j(t) && t.scrollIntoView({
			behavior: "auto",
			block: "center",
			inline: "center"
		});
	}, [j]), ce = h((e) => {
		let t = k.findIndex((t) => t.type === "header" && t.category.id === e);
		t >= 0 && y.current?.scrollToIndex({
			index: t,
			align: "start"
		});
	}, [k]), le = h((e) => {
		l(e), p(e.trim() !== "");
	}, []), ue = h(() => {
		f && ((m?.querySelector("[role=\"gridcell\"] [tabindex=\"0\"]"))?.click(), n());
	}, [
		f,
		m,
		n
	]), de = h((e) => {
		d(e);
	}, []), fe = h(() => {
		d(void 0);
	}, []), me = h((e, r) => {
		t(r.unicode) !== !1 && a?.(r.unicode), e.key === "Enter" && n();
	}, [
		t,
		a,
		n
	]), M = v(), he = h((t, n) => {
		if (n.type === "header") {
			let e = n.category;
			return /* @__PURE__ */ D("div", {
				className: W.category,
				"data-category-id": e.id,
				role: "gridcell",
				children: /* @__PURE__ */ D(pe, {
					as: "h2",
					className: W.categoryLabel,
					children: U(e.untranslatedName)
				})
			});
		}
		return n.emojis.map((t) => /* @__PURE__ */ D("div", {
			role: "gridcell",
			className: W.itemWrapper,
			children: /* @__PURE__ */ D(dT, {
				id: `${M}-${n.categoryId}-${t.hexcode}`,
				emoji: t,
				selectedEmojis: e,
				onClick: me,
				onMouseEnter: de,
				onMouseLeave: fe,
				disabled: r?.(t.unicode)
			})
		}, t.hexcode));
	}, [
		e,
		me,
		de,
		fe,
		r,
		M
	]), ge = v();
	return /* @__PURE__ */ D(_S, {
		getGridCell: A,
		getRow: j,
		getRovingNode: ie,
		handleInputFields: !0,
		moveFocus: oe,
		onGridNavigation: se,
		onKeyDown: ae,
		getAction: o,
		children: ({ onKeyDownHandler: t }) => /* @__PURE__ */ O("section", {
			className: W.picker,
			onKeyDown: t,
			"aria-label": U("emoji_picker|emoji_picker"),
			children: [
				/* @__PURE__ */ D(CS, {
					categories: hT,
					enabledCategories: ee,
					selectedCategory: te,
					onAnchorClick: ce,
					pickerBodyId: ge,
					getAction: o
				}),
				/* @__PURE__ */ D(cT, {
					query: c,
					onChange: le,
					onEnter: ue,
					onKeyDown: t,
					inputRef: _,
					controlsId: ge
				}),
				/* @__PURE__ */ D(Kx, {
					id: ge,
					className: (0, z.default)(W.body, { [W.bodyShowHighlight]: f }),
					wrappedRef: ne,
					children: m && /* @__PURE__ */ D(Ie, {
						ref: y,
						customScrollParent: m,
						data: k,
						defaultItemHeight: 35,
						components: gT,
						itemContent: he,
						rangeChanged: re
					})
				}),
				s && (u ? /* @__PURE__ */ D(lT, { emoji: u }) : /* @__PURE__ */ D(pT, {
					onClick: me,
					selectedEmojis: e,
					getAction: o
				}))
			]
		})
	});
}
//#endregion
//#region src/core/FacePile/FacePileView.tsx
function xT(e) {
	let { memberAvatarViewModels: t } = H(e.vm);
	return t.length === 0 ? null : /* @__PURE__ */ D(k, {
		className: e.classNames,
		children: t.map((e) => /* @__PURE__ */ D(lb, { vm: e }, e.getSnapshot().id))
	});
}
var ST = {
	banner: "_banner_n7ud0_8",
	content: "_content_n7ud0_38",
	icon: "_icon_n7ud0_50",
	actions: "_actions_n7ud0_61"
};
//#endregion
//#region src/room/composer/Banner/Banner.tsx
function CT({ type: e, children: t, avatar: n, className: r, actions: i, onClose: a, ...o }) {
	let s = (0, z.default)(ST.banner, r), c = S(() => {
		switch (e) {
			case "critical": return /* @__PURE__ */ D(xC, { fontSize: 24 });
			case "info": return /* @__PURE__ */ D(zC, { fontSize: 24 });
			case "success": return /* @__PURE__ */ D(zS, { fontSize: 24 });
			default: return /* @__PURE__ */ D(zC, { fontSize: 24 });
		}
	}, [e]);
	return /* @__PURE__ */ O("div", {
		...o,
		className: s,
		"data-type": e,
		children: [
			/* @__PURE__ */ D("div", {
				className: ST.icon,
				children: n ?? c
			}),
			/* @__PURE__ */ D("div", {
				className: ST.content,
				children: t
			}),
			/* @__PURE__ */ O("div", {
				className: ST.actions,
				children: [i, a && /* @__PURE__ */ D(A, {
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
function wT({ vm: e, defaultOpen: t = !1, ...n }) {
	let r = B(), [i, a] = T(t), { options: o } = H(e), s = h((t) => {
		t.ctrlKey && (t.preventDefault(), t.stopPropagation(), e.onUploadOptionSelected(o[0].type));
	}, [o, e]);
	if (o.length === 1) {
		let { label: t, icon: r } = o[0];
		return /* @__PURE__ */ D(M, {
			size: "26px",
			...n,
			tooltip: t,
			"aria-label": t,
			onClick: () => e.onUploadOptionSelected(o[0].type),
			children: D(r || jS, {})
		});
	}
	let c = /* @__PURE__ */ D(M, {
		...n,
		size: "26px",
		tooltip: r.translate("common|attachment"),
		onClick: s,
		title: r.translate("common|attachment"),
		children: /* @__PURE__ */ D(jS, {})
	});
	return /* @__PURE__ */ D(ye, {
		side: "top",
		title: r.translate("common|attachment"),
		showTitle: !1,
		trigger: c,
		open: i,
		onOpenChange: (e) => a(e),
		children: o.map((t) => /* @__PURE__ */ D(N, {
			label: t.label,
			Icon: t.icon,
			onSelect: () => e.onUploadOptionSelected(t.type)
		}, t.label))
	});
}
var TT = {
	wrapper: "_wrapper_1tamn_8",
	collapsed: "_collapsed_1tamn_14",
	left: "_left_1tamn_18",
	right: "_right_1tamn_22",
	spanLike: "_spanLike_1tamn_26",
	summary: "_summary_1tamn_36",
	summaryIcon: "_summaryIcon_1tamn_54",
	summaryIconFailed: "_summaryIconFailed_1tamn_94",
	summaryIconLoading: "_summaryIconLoading_1tamn_98",
	linkCount: "_linkCount_1tamn_102",
	clearAll: "_clearAll_1tamn_108",
	collapse: "_collapse_1tamn_14",
	container: "_container_1tamn_141",
	text: "_text_1tamn_157",
	linkSiteName: "_linkSiteName_1tamn_168",
	linkTitle: "_linkTitle_1tamn_172",
	removePreview: "_removePreview_1tamn_182",
	entryIcon: "_entryIcon_1tamn_194",
	loadingSpinner: "_loadingSpinner_1tamn_195",
	failedIcon: "_failedIcon_1tamn_196",
	siteName: "_siteName_1tamn_274",
	title: "_title_1tamn_285"
};
//#endregion
//#region src/room/composer/MessageComposerUrlPreview/MessageComposerUrlPreview.tsx
function ET({ title: e, showTooltipOnLink: t, link: n, className: r }) {
	let i;
	try {
		i = new URL(n).toString();
	} catch (e) {
		console.error("URL parsing failed in MessageComposerUrlPreview", e), i = n;
	}
	let a = /* @__PURE__ */ D(P, {
		as: "a",
		type: "body",
		weight: "semibold",
		size: "md",
		className: (0, z.default)(TT.title, r),
		href: n,
		target: "_blank",
		rel: "noreferrer noopener",
		children: e
	});
	return t ? /* @__PURE__ */ D(Ae, {
		label: i,
		children: a
	}) : a;
}
function DT({ siteName: e, className: t }) {
	return /* @__PURE__ */ D("div", {
		className: (0, z.default)(TT.siteName, t),
		children: /* @__PURE__ */ D(P, {
			as: "span",
			size: "sm",
			weight: "regular",
			children: e
		})
	});
}
function OT(e) {
	return e.slice(0, 1).toUpperCase();
}
function kT(e) {
	let { translate: t } = B(), n = new URL(e.matched_url).hostname;
	switch (e.status) {
		case "loaded": {
			let t = e.preview?.image?.imageThumb !== void 0 && /* @__PURE__ */ D("img", {
				src: e.preview.image?.imageThumb,
				alt: e.preview.image.alt
			});
			return {
				entryIcon: /* @__PURE__ */ D("div", {
					className: TT.entryIcon,
					"data-color": t ? void 0 : Ne(n),
					children: t || OT(n)
				}),
				entryTitle: e.preview.title,
				showTooltipOnLink: e.preview.showTooltipOnLink
			};
		}
		case "loading": return {
			entryIcon: /* @__PURE__ */ D("div", {
				className: TT.loadingSpinner,
				children: /* @__PURE__ */ D(ge, {})
			}),
			entryTitle: t("composer|url_preview|loading"),
			showTooltipOnLink: !1
		};
		case "failed": return {
			entryIcon: /* @__PURE__ */ D("div", {
				className: TT.failedIcon,
				children: /* @__PURE__ */ D(yC, {})
			}),
			entryTitle: t("composer|url_preview|failed"),
			showTooltipOnLink: !1
		};
	}
}
function AT({ entry: e, removePreview: t, className: n }) {
	let { translate: r } = B(), { entryIcon: i, entryTitle: a, showTooltipOnLink: o } = kT(e), s = h(() => {
		t?.(e.matched_url);
	}, [t, e.matched_url]);
	return /* @__PURE__ */ O("div", {
		className: (0, z.default)(n, TT.container),
		children: [/* @__PURE__ */ O("div", {
			className: TT.left,
			children: [i, /* @__PURE__ */ O("div", {
				className: TT.text,
				children: [/* @__PURE__ */ D(ET, {
					title: a,
					showTooltipOnLink: o,
					link: e.matched_url,
					className: TT.linkTitle
				}), /* @__PURE__ */ D(DT, {
					siteName: new URL(e.matched_url).hostname,
					className: TT.linkSiteName
				})]
			})]
		}), t ? /* @__PURE__ */ D(M, {
			onClick: s,
			className: (0, z.default)(TT.removePreview, TT.spanLike),
			"aria-label": r("composer|url_preview|remove"),
			children: /* @__PURE__ */ D(ZS, { "aria-hidden": !0 })
		}) : null]
	}, e.matched_url);
}
function jT({ vm: e, className: t, collapsed: n, toggleCollapsed: r, removePreview: i }) {
	let { translate: a } = B(), { entries: o } = H(e), s = o.filter((e) => e.include), c = h(() => {
		s.forEach((e) => i?.(e.matched_url));
	}, [s, i]);
	if (s.length === 0) return null;
	let l = n ? null : s.map((e) => /* @__PURE__ */ D(AT, {
		entry: e,
		removePreview: i,
		className: t
	}, e.matched_url)), u = /* @__PURE__ */ O("div", {
		className: TT.summary,
		children: [/* @__PURE__ */ O("span", {
			className: TT.left,
			children: [/* @__PURE__ */ D("span", {
				className: TT.icons,
				children: s.map((e) => {
					let t, n, r;
					switch (e.status) {
						case "failed":
							n = TT.summaryIconFailed, r = /* @__PURE__ */ D(yC, {});
							break;
						case "loading":
							n = TT.summaryIconLoading, r = /* @__PURE__ */ D(ge, {});
							break;
						case "loaded": {
							let n = new URL(e.matched_url).hostname;
							e.preview.image === void 0 ? (r = /* @__PURE__ */ D(E, { children: OT(n) }), t = Ne(n)) : r = /* @__PURE__ */ D("img", {
								src: e.preview.siteIcon || e.preview.image.imageThumb,
								alt: e.preview.image.alt
							});
						}
					}
					return /* @__PURE__ */ D("div", {
						className: (0, z.default)(TT.summaryIcon, n),
						"data-color": t,
						children: r
					}, e.matched_url);
				})
			}), /* @__PURE__ */ D("span", {
				className: TT.linkCount,
				children: a("composer|url_preview|n_links", { count: s.length })
			})]
		}), /* @__PURE__ */ O("span", {
			className: TT.right,
			children: [i && /* @__PURE__ */ D("button", {
				className: (0, z.default)(TT.clearAll, TT.spanLike),
				onClick: c,
				type: "button",
				children: a("composer|url_preview|clear_all")
			}), /* @__PURE__ */ D(M, {
				className: (0, z.default)(TT.collapse, TT.spanLike),
				onClick: r,
				"aria-label": a("composer|url_preview|collapse"),
				type: "button",
				children: /* @__PURE__ */ D(US, { "aria-hidden": !0 })
			})]
		})]
	});
	return /* @__PURE__ */ O("div", {
		className: n ? (0, z.default)(TT.wrapper, TT.collapsed) : TT.wrapper,
		children: [u, l]
	});
}
//#endregion
//#region src/crypto/SasEmoji/SasEmojiTranslate.ts
var MT = new Map((/* @__PURE__ */ JSON.parse("[{\"number\":0,\"emoji\":\"🐶\",\"description\":\"Dog\",\"unicode\":\"U+1F436\",\"translated_descriptions\":{\"ar\":\"كلب\",\"bg\":\"Куче\",\"ca\":\"Gos\",\"cs\":\"Pes\",\"de\":\"Hund\",\"eo\":\"Hundo\",\"es\":\"Perro\",\"et\":\"Koer\",\"fa\":\"سگ\",\"fi\":\"Koira\",\"fr\":\"Chien\",\"hr\":\"pas\",\"hu\":\"Kutya\",\"id\":\"Anjing\",\"it\":\"Cane\",\"ja\":\"犬\",\"nb_NO\":\"Hund\",\"nl\":\"Hond\",\"pt\":\"Cão\",\"pt_BR\":\"Cachorro\",\"ru\":\"Собака\",\"si\":\"බල්ලා\",\"sk\":\"Pes\",\"sq\":\"Qen\",\"sr\":\"пас\",\"sv\":\"Hund\",\"szl\":null,\"tzm\":\"Aydi\",\"uk\":\"Пес\",\"vi\":\"Chó\",\"zh_Hans\":\"狗\",\"zh_Hant\":\"狗\"}},{\"number\":1,\"emoji\":\"🐱\",\"description\":\"Cat\",\"unicode\":\"U+1F431\",\"translated_descriptions\":{\"ar\":\"هِرَّة\",\"bg\":\"Котка\",\"ca\":\"Gat\",\"cs\":\"Kočka\",\"de\":\"Katze\",\"eo\":\"Kato\",\"es\":\"Gato\",\"et\":\"Kass\",\"fa\":\"گربه\",\"fi\":\"Kissa\",\"fr\":\"Chat\",\"hr\":\"mačka\",\"hu\":\"Macska\",\"id\":\"Kucing\",\"it\":\"Gatto\",\"ja\":\"猫\",\"nb_NO\":\"Katt\",\"nl\":\"Kat\",\"pt\":\"Gato\",\"pt_BR\":\"Gato\",\"ru\":\"Кошка\",\"si\":\"පූසා\",\"sk\":\"Mačka\",\"sq\":\"Mace\",\"sr\":\"мачка\",\"sv\":\"Katt\",\"szl\":null,\"tzm\":\"Amuc\",\"uk\":\"Кіт\",\"vi\":\"Mèo\",\"zh_Hans\":\"猫\",\"zh_Hant\":\"貓\"}},{\"number\":2,\"emoji\":\"🦁\",\"description\":\"Lion\",\"unicode\":\"U+1F981\",\"translated_descriptions\":{\"ar\":\"أَسَد\",\"bg\":\"Лъв\",\"ca\":\"Lleó\",\"cs\":\"Lev\",\"de\":\"Löwe\",\"eo\":\"Leono\",\"es\":\"León\",\"et\":\"Lõvi\",\"fa\":\"شیر\",\"fi\":\"Leijona\",\"fr\":\"Lion\",\"hr\":\"lav\",\"hu\":\"Oroszlán\",\"id\":\"Singa\",\"it\":\"Leone\",\"ja\":\"ライオン\",\"nb_NO\":\"Løve\",\"nl\":\"Leeuw\",\"pt\":\"Leão\",\"pt_BR\":\"Leão\",\"ru\":\"Лев\",\"si\":\"සිංහයා\",\"sk\":\"Lev\",\"sq\":\"Luan\",\"sr\":\"лав\",\"sv\":\"Lejon\",\"szl\":null,\"tzm\":\"Izem\",\"uk\":\"Лев\",\"vi\":\"Sư tử\",\"zh_Hans\":\"狮子\",\"zh_Hant\":\"獅子\"}},{\"number\":3,\"emoji\":\"🐎\",\"description\":\"Horse\",\"unicode\":\"U+1F40E\",\"translated_descriptions\":{\"ar\":\"حِصَان\",\"bg\":\"Кон\",\"ca\":\"Cavall\",\"cs\":\"Kůň\",\"de\":\"Pferd\",\"eo\":\"Ĉevalo\",\"es\":\"Caballo\",\"et\":\"Hobune\",\"fa\":\"اسب\",\"fi\":\"Hevonen\",\"fr\":\"Cheval\",\"hr\":\"konj\",\"hu\":\"Ló\",\"id\":\"Kuda\",\"it\":\"Cavallo\",\"ja\":\"馬\",\"nb_NO\":\"Hest\",\"nl\":\"Paard\",\"pt\":\"Cavalo\",\"pt_BR\":\"Cavalo\",\"ru\":\"Лошадь\",\"si\":\"අශ්වයා\",\"sk\":\"Kôň\",\"sq\":\"Kalë\",\"sr\":\"коњ\",\"sv\":\"Häst\",\"szl\":null,\"tzm\":\"Ayyis\",\"uk\":\"Кінь\",\"vi\":\"Ngựa\",\"zh_Hans\":\"马\",\"zh_Hant\":\"馬\"}},{\"number\":4,\"emoji\":\"🦄\",\"description\":\"Unicorn\",\"unicode\":\"U+1F984\",\"translated_descriptions\":{\"ar\":\"حصان وحيد القرن\",\"bg\":\"Еднорог\",\"ca\":\"Unicorn\",\"cs\":\"Jednorožec\",\"de\":\"Einhorn\",\"eo\":\"Unukorno\",\"es\":\"Unicornio\",\"et\":\"Ükssarvik\",\"fa\":\"تک شاخ\",\"fi\":\"Yksisarvinen\",\"fr\":\"Licorne\",\"hr\":\"jednorog\",\"hu\":\"Egyszarvú\",\"id\":\"Unicorn\",\"it\":\"Unicorno\",\"ja\":\"ユニコーン\",\"nb_NO\":\"Enhjørning\",\"nl\":\"Eenhoorn\",\"pt\":\"Unicórnio\",\"pt_BR\":\"Unicórnio\",\"ru\":\"Единорог\",\"si\":null,\"sk\":\"Jednorožec\",\"sq\":\"Njëbrirësh\",\"sr\":\"једнорог\",\"sv\":\"Enhörning\",\"szl\":null,\"tzm\":null,\"uk\":\"Єдиноріг\",\"vi\":\"Kỳ lân\",\"zh_Hans\":\"独角兽\",\"zh_Hant\":\"獨角獸\"}},{\"number\":5,\"emoji\":\"🐷\",\"description\":\"Pig\",\"unicode\":\"U+1F437\",\"translated_descriptions\":{\"ar\":\"خِنزِير\",\"bg\":\"Прасе\",\"ca\":\"Porc\",\"cs\":\"Prase\",\"de\":\"Schwein\",\"eo\":\"Porko\",\"es\":\"Cerdo\",\"et\":\"Siga\",\"fa\":\"خوک\",\"fi\":\"Sika\",\"fr\":\"Cochon\",\"hr\":\"svinja\",\"hu\":\"Malac\",\"id\":\"Babi\",\"it\":\"Maiale\",\"ja\":\"ブタ\",\"nb_NO\":\"Gris\",\"nl\":\"Varken\",\"pt\":\"Porco\",\"pt_BR\":\"Porco\",\"ru\":\"Свинья\",\"si\":null,\"sk\":\"Prasa\",\"sq\":\"Derr\",\"sr\":\"прасе\",\"sv\":\"Gris\",\"szl\":null,\"tzm\":\"Ilef\",\"uk\":\"Свиня\",\"vi\":\"Heo\",\"zh_Hans\":\"猪\",\"zh_Hant\":\"豬\"}},{\"number\":6,\"emoji\":\"🐘\",\"description\":\"Elephant\",\"unicode\":\"U+1F418\",\"translated_descriptions\":{\"ar\":\"فِيل\",\"bg\":\"Слон\",\"ca\":\"Elefant\",\"cs\":\"Slon\",\"de\":\"Elefant\",\"eo\":\"Elefanto\",\"es\":\"Elefante\",\"et\":\"Elevant\",\"fa\":\"فیل\",\"fi\":\"Norsu\",\"fr\":\"Éléphant\",\"hr\":\"slon\",\"hu\":\"Elefánt\",\"id\":\"Gajah\",\"it\":\"Elefante\",\"ja\":\"ゾウ\",\"nb_NO\":\"Elefant\",\"nl\":\"Olifant\",\"pt\":\"Elefante\",\"pt_BR\":\"Elefante\",\"ru\":\"Слон\",\"si\":null,\"sk\":\"Slon\",\"sq\":\"Elefant\",\"sr\":\"слон\",\"sv\":\"Elefant\",\"szl\":null,\"tzm\":\"Ilu\",\"uk\":\"Слон\",\"vi\":\"Voi\",\"zh_Hans\":\"大象\",\"zh_Hant\":\"大象\"}},{\"number\":7,\"emoji\":\"🐰\",\"description\":\"Rabbit\",\"unicode\":\"U+1F430\",\"translated_descriptions\":{\"ar\":\"أَرنَب\",\"bg\":\"Заек\",\"ca\":\"Conill\",\"cs\":\"Králík\",\"de\":\"Hase\",\"eo\":\"Kuniklo\",\"es\":\"Conejo\",\"et\":\"Jänes\",\"fa\":\"خرگوش\",\"fi\":\"Kani\",\"fr\":\"Lapin\",\"hr\":\"zec\",\"hu\":\"Nyúl\",\"id\":\"Kelinci\",\"it\":\"Coniglio\",\"ja\":\"うさぎ\",\"nb_NO\":\"Kanin\",\"nl\":\"Konijn\",\"pt\":\"Coelho\",\"pt_BR\":\"Coelho\",\"ru\":\"Кролик\",\"si\":null,\"sk\":\"Zajac\",\"sq\":\"Lepur\",\"sr\":\"зец\",\"sv\":\"Kanin\",\"szl\":null,\"tzm\":\"Agnin\",\"uk\":\"Кріль\",\"vi\":\"Thỏ\",\"zh_Hans\":\"兔子\",\"zh_Hant\":\"兔子\"}},{\"number\":8,\"emoji\":\"🐼\",\"description\":\"Panda\",\"unicode\":\"U+1F43C\",\"translated_descriptions\":{\"ar\":\"باندَا\",\"bg\":\"Панда\",\"ca\":\"Panda\",\"cs\":\"Panda\",\"de\":\"Panda\",\"eo\":\"Pando\",\"es\":\"Panda\",\"et\":\"Panda\",\"fa\":\"پاندا\",\"fi\":\"Panda\",\"fr\":\"Panda\",\"hr\":\"panda\",\"hu\":\"Panda\",\"id\":\"Panda\",\"it\":\"Panda\",\"ja\":\"パンダ\",\"nb_NO\":\"Panda\",\"nl\":\"Panda\",\"pt\":\"Panda\",\"pt_BR\":\"Panda\",\"ru\":\"Панда\",\"si\":null,\"sk\":\"Panda\",\"sq\":\"Panda\",\"sr\":\"панда\",\"sv\":\"Panda\",\"szl\":null,\"tzm\":null,\"uk\":\"Панда\",\"vi\":\"Gấu trúc\",\"zh_Hans\":\"熊猫\",\"zh_Hant\":\"熊貓\"}},{\"number\":9,\"emoji\":\"🐓\",\"description\":\"Rooster\",\"unicode\":\"U+1F413\",\"translated_descriptions\":{\"ar\":\"دِيك\",\"bg\":\"Петел\",\"ca\":\"Gall\",\"cs\":\"Kohout\",\"de\":\"Hahn\",\"eo\":\"Virkoko\",\"es\":\"Gallo\",\"et\":\"Kukk\",\"fa\":\"خروس\",\"fi\":\"Kukko\",\"fr\":\"Coq\",\"hr\":\"kokot\",\"hu\":\"Kakas\",\"id\":\"Ayam\",\"it\":\"Gallo\",\"ja\":\"ニワトリ\",\"nb_NO\":\"Hane\",\"nl\":\"Haan\",\"pt\":\"Galo\",\"pt_BR\":\"Galo\",\"ru\":\"Петух\",\"si\":null,\"sk\":\"Kohút\",\"sq\":\"Këndes\",\"sr\":\"петао\",\"sv\":\"Tupp\",\"szl\":null,\"tzm\":\"Ayaẓiḍ\",\"uk\":\"Когут\",\"vi\":\"Gà trống\",\"zh_Hans\":\"公鸡\",\"zh_Hant\":\"公雞\"}},{\"number\":10,\"emoji\":\"🐧\",\"description\":\"Penguin\",\"unicode\":\"U+1F427\",\"translated_descriptions\":{\"ar\":\"بطريق\",\"bg\":\"Пингвин\",\"ca\":\"Pingüí\",\"cs\":\"Tučňák\",\"de\":\"Pinguin\",\"eo\":\"Pingveno\",\"es\":\"Pingüino\",\"et\":\"Pingviin\",\"fa\":\"پنگوئن\",\"fi\":\"Pingviini\",\"fr\":\"Manchot\",\"hr\":\"pingvin\",\"hu\":\"Pingvin\",\"id\":\"Penguin\",\"it\":\"Pinguino\",\"ja\":\"ペンギン\",\"nb_NO\":\"Pingvin\",\"nl\":\"Pinguïn\",\"pt\":\"Pinguim\",\"pt_BR\":\"Pinguim\",\"ru\":\"Пингвин\",\"si\":null,\"sk\":\"Tučniak\",\"sq\":\"Pinguin\",\"sr\":\"пингвин\",\"sv\":\"Pingvin\",\"szl\":null,\"tzm\":null,\"uk\":\"Пінгвін\",\"vi\":\"Chim cánh cụt\",\"zh_Hans\":\"企鹅\",\"zh_Hant\":\"企鵝\"}},{\"number\":11,\"emoji\":\"🐢\",\"description\":\"Turtle\",\"unicode\":\"U+1F422\",\"translated_descriptions\":{\"ar\":\"سُلحفاة\",\"bg\":\"Костенурка\",\"ca\":\"Tortuga\",\"cs\":\"Želva\",\"de\":\"Schildkröte\",\"eo\":\"Testudo\",\"es\":\"Tortuga\",\"et\":\"Kilpkonn\",\"fa\":\"لاک‌پشت\",\"fi\":\"Kilpikonna\",\"fr\":\"Tortue\",\"hr\":\"kornjača\",\"hu\":\"Teknős\",\"id\":\"Kura-Kura\",\"it\":\"Tartaruga\",\"ja\":\"亀\",\"nb_NO\":\"Skilpadde\",\"nl\":\"Schildpad\",\"pt\":\"Tartaruga\",\"pt_BR\":\"Tartaruga\",\"ru\":\"Черепаха\",\"si\":null,\"sk\":\"Korytnačka\",\"sq\":\"Breshkë\",\"sr\":\"корњача\",\"sv\":\"Sköldpadda\",\"szl\":null,\"tzm\":\"Ifker\",\"uk\":\"Черепаха\",\"vi\":\"Rùa\",\"zh_Hans\":\"乌龟\",\"zh_Hant\":\"烏龜\"}},{\"number\":12,\"emoji\":\"🐟\",\"description\":\"Fish\",\"unicode\":\"U+1F41F\",\"translated_descriptions\":{\"ar\":\"سَمَكة\",\"bg\":\"Риба\",\"ca\":\"Peix\",\"cs\":\"Ryba\",\"de\":\"Fisch\",\"eo\":\"Fiŝo\",\"es\":\"Pez\",\"et\":\"Kala\",\"fa\":\"ماهی\",\"fi\":\"Kala\",\"fr\":\"Poisson\",\"hr\":\"riba\",\"hu\":\"Hal\",\"id\":\"Ikan\",\"it\":\"Pesce\",\"ja\":\"魚\",\"nb_NO\":\"Fisk\",\"nl\":\"Vis\",\"pt\":\"Peixe\",\"pt_BR\":\"Peixe\",\"ru\":\"Рыба\",\"si\":null,\"sk\":\"Ryba\",\"sq\":\"Peshk\",\"sr\":\"риба\",\"sv\":\"Fisk\",\"szl\":null,\"tzm\":\"Aselm\",\"uk\":\"Риба\",\"vi\":\"Cá\",\"zh_Hans\":\"鱼\",\"zh_Hant\":\"魚\"}},{\"number\":13,\"emoji\":\"🐙\",\"description\":\"Octopus\",\"unicode\":\"U+1F419\",\"translated_descriptions\":{\"ar\":\"أُخطُبُوط\",\"bg\":\"Октопод\",\"ca\":\"Pop\",\"cs\":\"Chobotnice\",\"de\":\"Oktopus\",\"eo\":\"Polpo\",\"es\":\"Pulpo\",\"et\":\"Kaheksajalg\",\"fa\":\"اختاپوس\",\"fi\":\"Tursas\",\"fr\":\"Poulpe\",\"hr\":\"hobotnica\",\"hu\":\"Polip\",\"id\":\"Gurita\",\"it\":\"Polpo\",\"ja\":\"たこ\",\"nb_NO\":\"Blekksprut\",\"nl\":\"Octopus\",\"pt\":\"Polvo\",\"pt_BR\":\"Polvo\",\"ru\":\"Осьминог\",\"si\":null,\"sk\":\"Chobotnica\",\"sq\":\"Oktapod\",\"sr\":\"октопод\",\"sv\":\"Bläckfisk\",\"szl\":null,\"tzm\":null,\"uk\":\"Восьминіг\",\"vi\":\"Bạch tuộc\",\"zh_Hans\":\"章鱼\",\"zh_Hant\":\"章魚\"}},{\"number\":14,\"emoji\":\"🦋\",\"description\":\"Butterfly\",\"unicode\":\"U+1F98B\",\"translated_descriptions\":{\"ar\":\"فَرَاشَة\",\"bg\":\"Пеперуда\",\"ca\":\"Papallona\",\"cs\":\"Motýl\",\"de\":\"Schmetterling\",\"eo\":\"Papilio\",\"es\":\"Mariposa\",\"et\":\"Liblikas\",\"fa\":\"پروانه\",\"fi\":\"Perhonen\",\"fr\":\"Papillon\",\"hr\":\"leptir\",\"hu\":\"Pillangó\",\"id\":\"Kupu-Kupu\",\"it\":\"Farfalla\",\"ja\":\"ちょうちょ\",\"nb_NO\":\"Sommerfugl\",\"nl\":\"Vlinder\",\"pt\":\"Borboleta\",\"pt_BR\":\"Borboleta\",\"ru\":\"Бабочка\",\"si\":null,\"sk\":\"Motýľ\",\"sq\":\"Flutur\",\"sr\":\"лептир\",\"sv\":\"Fjäril\",\"szl\":null,\"tzm\":null,\"uk\":\"Метелик\",\"vi\":\"Bướm\",\"zh_Hans\":\"蝴蝶\",\"zh_Hant\":\"蝴蝶\"}},{\"number\":15,\"emoji\":\"🌷\",\"description\":\"Flower\",\"unicode\":\"U+1F337\",\"translated_descriptions\":{\"ar\":\"زَهرَة\",\"bg\":\"Цвете\",\"ca\":\"Flor\",\"cs\":\"Květina\",\"de\":\"Blume\",\"eo\":\"Floro\",\"es\":\"Flor\",\"et\":\"Lill\",\"fa\":\"گل\",\"fi\":\"Kukka\",\"fr\":\"Fleur\",\"hr\":\"svijet\",\"hu\":\"Virág\",\"id\":\"Bunga\",\"it\":\"Fiore\",\"ja\":\"花\",\"nb_NO\":\"Blomst\",\"nl\":\"Bloem\",\"pt\":\"Flor\",\"pt_BR\":\"Flor\",\"ru\":\"Цветок\",\"si\":null,\"sk\":\"Kvet\",\"sq\":\"Lule\",\"sr\":\"цвет\",\"sv\":\"Blomma\",\"szl\":null,\"tzm\":null,\"uk\":\"Квітка\",\"vi\":\"Hoa\",\"zh_Hans\":\"花\",\"zh_Hant\":\"花\"}},{\"number\":16,\"emoji\":\"🌳\",\"description\":\"Tree\",\"unicode\":\"U+1F333\",\"translated_descriptions\":{\"ar\":\"شَجَرَة\",\"bg\":\"Дърво\",\"ca\":\"Arbre\",\"cs\":\"Strom\",\"de\":\"Baum\",\"eo\":\"Arbo\",\"es\":\"Árbol\",\"et\":\"Puu\",\"fa\":\"درخت\",\"fi\":\"Puu\",\"fr\":\"Arbre\",\"hr\":\"drvo\",\"hu\":\"Fa\",\"id\":\"Pohon\",\"it\":\"Albero\",\"ja\":\"木\",\"nb_NO\":\"Tre\",\"nl\":\"Boom\",\"pt\":\"Árvore\",\"pt_BR\":\"Árvore\",\"ru\":\"Дерево\",\"si\":null,\"sk\":\"Strom\",\"sq\":\"Pemë\",\"sr\":\"дрво\",\"sv\":\"Träd\",\"szl\":null,\"tzm\":\"Aseklu\",\"uk\":\"Дерево\",\"vi\":\"Cây\",\"zh_Hans\":\"树\",\"zh_Hant\":\"樹\"}},{\"number\":17,\"emoji\":\"🌵\",\"description\":\"Cactus\",\"unicode\":\"U+1F335\",\"translated_descriptions\":{\"ar\":\"صبار\",\"bg\":\"Кактус\",\"ca\":\"Cactus\",\"cs\":\"Kaktus\",\"de\":\"Kaktus\",\"eo\":\"Kakto\",\"es\":\"Cactus\",\"et\":\"Kaktus\",\"fa\":\"کاکتوس\",\"fi\":\"Kaktus\",\"fr\":\"Cactus\",\"hr\":\"kaktus\",\"hu\":\"Kaktusz\",\"id\":\"Kaktus\",\"it\":\"Cactus\",\"ja\":\"サボテン\",\"nb_NO\":\"Kaktus\",\"nl\":\"Cactus\",\"pt\":\"Cato\",\"pt_BR\":\"Cacto\",\"ru\":\"Кактус\",\"si\":null,\"sk\":\"Kaktus\",\"sq\":\"Kaktus\",\"sr\":\"кактус\",\"sv\":\"Kaktus\",\"szl\":null,\"tzm\":null,\"uk\":\"Кактус\",\"vi\":\"Xương rồng\",\"zh_Hans\":\"仙人掌\",\"zh_Hant\":\"仙人掌\"}},{\"number\":18,\"emoji\":\"🍄\",\"description\":\"Mushroom\",\"unicode\":\"U+1F344\",\"translated_descriptions\":{\"ar\":\"فُطر\",\"bg\":\"Гъба\",\"ca\":\"Bolet\",\"cs\":\"Houba\",\"de\":\"Pilz\",\"eo\":\"Fungo\",\"es\":\"Seta\",\"et\":\"Seen\",\"fa\":\"قارچ\",\"fi\":\"Sieni\",\"fr\":\"Champignon\",\"hr\":\"gljiva\",\"hu\":\"Gomba\",\"id\":\"Jamur\",\"it\":\"Fungo\",\"ja\":\"きのこ\",\"nb_NO\":\"Sopp\",\"nl\":\"Paddenstoel\",\"pt\":\"Cogumelo\",\"pt_BR\":\"Cogumelo\",\"ru\":\"Гриб\",\"si\":null,\"sk\":\"Huba\",\"sq\":\"Kërpudhë\",\"sr\":\"печурка\",\"sv\":\"Svamp\",\"szl\":null,\"tzm\":\"Agursel\",\"uk\":\"Гриб\",\"vi\":\"Nấm\",\"zh_Hans\":\"蘑菇\",\"zh_Hant\":\"蘑菇\"}},{\"number\":19,\"emoji\":\"🌏\",\"description\":\"Globe\",\"unicode\":\"U+1F30F\",\"translated_descriptions\":{\"ar\":\"كُرَةٌ أرضِيَّة\",\"bg\":\"Глобус\",\"ca\":\"Globus terraqüi\",\"cs\":\"Zeměkoule\",\"de\":\"Globus\",\"eo\":\"Globo\",\"es\":\"Globo\",\"et\":\"Maakera\",\"fa\":\"زمین\",\"fi\":\"Maapallo\",\"fr\":\"Globe\",\"hr\":\"Globus\",\"hu\":\"Földgömb\",\"id\":\"Bola Dunia\",\"it\":\"Globo\",\"ja\":\"地球\",\"nb_NO\":\"Globus\",\"nl\":\"Wereldbol\",\"pt\":\"Globo\",\"pt_BR\":\"Globo\",\"ru\":\"Глобус\",\"si\":null,\"sk\":\"Zemeguľa\",\"sq\":\"Rruzull\",\"sr\":\"глобус\",\"sv\":\"Jordklot\",\"szl\":null,\"tzm\":null,\"uk\":\"Глобус\",\"vi\":\"Địa cầu\",\"zh_Hans\":\"地球\",\"zh_Hant\":\"地球\"}},{\"number\":20,\"emoji\":\"🌙\",\"description\":\"Moon\",\"unicode\":\"U+1F319\",\"translated_descriptions\":{\"ar\":\"قَمَر\",\"bg\":\"Луна\",\"ca\":\"Lluna\",\"cs\":\"Měsíc\",\"de\":\"Mond\",\"eo\":\"Luno\",\"es\":\"Luna\",\"et\":\"Kuu\",\"fa\":\"ماه\",\"fi\":\"Kuu\",\"fr\":\"Lune\",\"hr\":\"mjesec\",\"hu\":\"Hold\",\"id\":\"Bulan\",\"it\":\"Luna\",\"ja\":\"月\",\"nb_NO\":\"Måne\",\"nl\":\"Maan\",\"pt\":\"Lua\",\"pt_BR\":\"Lua\",\"ru\":\"Луна\",\"si\":null,\"sk\":\"Mesiac\",\"sq\":\"Hënë\",\"sr\":\"месец\",\"sv\":\"Måne\",\"szl\":null,\"tzm\":\"Ayyur\",\"uk\":\"Місяць\",\"vi\":\"Mặt trăng\",\"zh_Hans\":\"月亮\",\"zh_Hant\":\"月亮\"}},{\"number\":21,\"emoji\":\"☁️\",\"description\":\"Cloud\",\"unicode\":\"U+2601U+FE0F\",\"translated_descriptions\":{\"ar\":\"سَحابَة\",\"bg\":\"Облак\",\"ca\":\"Núvol\",\"cs\":\"Mrak\",\"de\":\"Wolke\",\"eo\":\"Nubo\",\"es\":\"Nube\",\"et\":\"Pilv\",\"fa\":\"ابر\",\"fi\":\"Pilvi\",\"fr\":\"Nuage\",\"hr\":\"oblak\",\"hu\":\"Felhő\",\"id\":\"Awan\",\"it\":\"Nuvola\",\"ja\":\"雲\",\"nb_NO\":\"Sky\",\"nl\":\"Wolk\",\"pt\":\"Nuvem\",\"pt_BR\":\"Nuvem\",\"ru\":\"Облако\",\"si\":null,\"sk\":\"Oblak\",\"sq\":\"Re\",\"sr\":\"облак\",\"sv\":\"Moln\",\"szl\":null,\"tzm\":null,\"uk\":\"Хмара\",\"vi\":\"Mây\",\"zh_Hans\":\"云\",\"zh_Hant\":\"雲朵\"}},{\"number\":22,\"emoji\":\"🔥\",\"description\":\"Fire\",\"unicode\":\"U+1F525\",\"translated_descriptions\":{\"ar\":\"نار\",\"bg\":\"Огън\",\"ca\":\"Foc\",\"cs\":\"Oheň\",\"de\":\"Feuer\",\"eo\":\"Fajro\",\"es\":\"Fuego\",\"et\":\"Tuli\",\"fa\":\"آتش\",\"fi\":\"Tuli\",\"fr\":\"Feu\",\"hr\":\"vatra\",\"hu\":\"Tűz\",\"id\":\"Api\",\"it\":\"Fuoco\",\"ja\":\"炎\",\"nb_NO\":\"Flamme\",\"nl\":\"Vuur\",\"pt\":\"Fogo\",\"pt_BR\":\"Fogo\",\"ru\":\"Огонь\",\"si\":null,\"sk\":\"Oheň\",\"sq\":\"Zjarr\",\"sr\":\"ватра\",\"sv\":\"Eld\",\"szl\":null,\"tzm\":\"Timessi\",\"uk\":\"Вогонь\",\"vi\":\"Lửa\",\"zh_Hans\":\"火\",\"zh_Hant\":\"火\"}},{\"number\":23,\"emoji\":\"🍌\",\"description\":\"Banana\",\"unicode\":\"U+1F34C\",\"translated_descriptions\":{\"ar\":\"مَوزَة\",\"bg\":\"Банан\",\"ca\":\"Plàtan\",\"cs\":\"Banán\",\"de\":\"Banane\",\"eo\":\"Banano\",\"es\":\"Plátano\",\"et\":\"Banaan\",\"fa\":\"موز\",\"fi\":\"Banaani\",\"fr\":\"Banane\",\"hr\":\"banana\",\"hu\":\"Banán\",\"id\":\"Pisang\",\"it\":\"Banana\",\"ja\":\"バナナ\",\"nb_NO\":\"Banan\",\"nl\":\"Banaan\",\"pt\":\"Banana\",\"pt_BR\":\"Banana\",\"ru\":\"Банан\",\"si\":null,\"sk\":\"Banán\",\"sq\":\"Banane\",\"sr\":\"банана\",\"sv\":\"Banan\",\"szl\":null,\"tzm\":\"Tabanant\",\"uk\":\"Банан\",\"vi\":\"Chuối\",\"zh_Hans\":\"香蕉\",\"zh_Hant\":\"香蕉\"}},{\"number\":24,\"emoji\":\"🍎\",\"description\":\"Apple\",\"unicode\":\"U+1F34E\",\"translated_descriptions\":{\"ar\":\"تُفَّاحَة\",\"bg\":\"Ябълка\",\"ca\":\"Poma\",\"cs\":\"Jablko\",\"de\":\"Apfel\",\"eo\":\"Pomo\",\"es\":\"Manzana\",\"et\":\"Õun\",\"fa\":\"سیب\",\"fi\":\"Omena\",\"fr\":\"Pomme\",\"hr\":\"jabuka\",\"hu\":\"Alma\",\"id\":\"Apel\",\"it\":\"Mela\",\"ja\":\"リンゴ\",\"nb_NO\":\"Eple\",\"nl\":\"Appel\",\"pt\":\"Maçã\",\"pt_BR\":\"Maçã\",\"ru\":\"Яблоко\",\"si\":null,\"sk\":\"Jablko\",\"sq\":\"Mollë\",\"sr\":\"јабука\",\"sv\":\"Äpple\",\"szl\":null,\"tzm\":\"Tadeffuyt\",\"uk\":\"Яблуко\",\"vi\":\"Táo\",\"zh_Hans\":\"苹果\",\"zh_Hant\":\"蘋果\"}},{\"number\":25,\"emoji\":\"🍓\",\"description\":\"Strawberry\",\"unicode\":\"U+1F353\",\"translated_descriptions\":{\"ar\":\"فَراوِلَة\",\"bg\":\"Ягода\",\"ca\":\"Maduixa\",\"cs\":\"Jahoda\",\"de\":\"Erdbeere\",\"eo\":\"Frago\",\"es\":\"Fresa\",\"et\":\"Maasikas\",\"fa\":\"توت فرنگی\",\"fi\":\"Mansikka\",\"fr\":\"Fraise\",\"hr\":\"jagoda\",\"hu\":\"Eper\",\"id\":\"Stroberi\",\"it\":\"Fragola\",\"ja\":\"いちご\",\"nb_NO\":\"Jordbær\",\"nl\":\"Aardbei\",\"pt\":\"Morango\",\"pt_BR\":\"Morango\",\"ru\":\"Клубника\",\"si\":null,\"sk\":\"Jahoda\",\"sq\":\"Luleshtrydhe\",\"sr\":\"јагода\",\"sv\":\"Jordgubbe\",\"szl\":null,\"tzm\":null,\"uk\":\"Полуниця\",\"vi\":\"Dâu tây\",\"zh_Hans\":\"草莓\",\"zh_Hant\":\"草莓\"}},{\"number\":26,\"emoji\":\"🌽\",\"description\":\"Corn\",\"unicode\":\"U+1F33D\",\"translated_descriptions\":{\"ar\":\"ذُرَة\",\"bg\":\"Царевица\",\"ca\":\"Blat de moro\",\"cs\":\"Kukuřice\",\"de\":\"Mais\",\"eo\":\"Maizo\",\"es\":\"Maíz\",\"et\":\"Mais\",\"fa\":\"ذرت\",\"fi\":\"Maissi\",\"fr\":\"Maïs\",\"hr\":\"kukuruza\",\"hu\":\"Kukorica\",\"id\":\"Jagung\",\"it\":\"Mais\",\"ja\":\"とうもろこし\",\"nb_NO\":\"Mais\",\"nl\":\"Maïs\",\"pt\":\"Milho\",\"pt_BR\":\"Milho\",\"ru\":\"Кукуруза\",\"si\":null,\"sk\":\"Kukurica\",\"sq\":\"Misër\",\"sr\":\"кукуруз\",\"sv\":\"Majs\",\"szl\":null,\"tzm\":null,\"uk\":\"Кукурудза\",\"vi\":\"Bắp\",\"zh_Hans\":\"玉米\",\"zh_Hant\":\"玉米\"}},{\"number\":27,\"emoji\":\"🍕\",\"description\":\"Pizza\",\"unicode\":\"U+1F355\",\"translated_descriptions\":{\"ar\":\"بِيتزا\",\"bg\":\"Пица\",\"ca\":\"Pizza\",\"cs\":\"Pizza\",\"de\":\"Pizza\",\"eo\":\"Pico\",\"es\":\"Pizza\",\"et\":\"Pitsa\",\"fa\":\"پیتزا\",\"fi\":\"Pizza\",\"fr\":\"Pizza\",\"hr\":\"pizza\",\"hu\":\"Pizza\",\"id\":\"Pizza\",\"it\":\"Pizza\",\"ja\":\"ピザ\",\"nb_NO\":\"Pizza\",\"nl\":\"Pizza\",\"pt\":\"Piza\",\"pt_BR\":\"Pizza\",\"ru\":\"Пицца\",\"si\":null,\"sk\":\"Pizza\",\"sq\":\"Picë\",\"sr\":\"пица\",\"sv\":\"Pizza\",\"szl\":null,\"tzm\":null,\"uk\":\"Піца\",\"vi\":\"Pizza\",\"zh_Hans\":\"披萨\",\"zh_Hant\":\"披薩\"}},{\"number\":28,\"emoji\":\"🎂\",\"description\":\"Cake\",\"unicode\":\"U+1F382\",\"translated_descriptions\":{\"ar\":\"كَعكَة\",\"bg\":\"Торта\",\"ca\":\"Pastís\",\"cs\":\"Dort\",\"de\":\"Kuchen\",\"eo\":\"Torto\",\"es\":\"Tarta\",\"et\":\"Kook\",\"fa\":\"کیک\",\"fi\":\"Kakku\",\"fr\":\"Gâteau\",\"hr\":\"torta\",\"hu\":\"Süti\",\"id\":\"Kue\",\"it\":\"Torta\",\"ja\":\"ケーキ\",\"nb_NO\":\"Kake\",\"nl\":\"Taart\",\"pt\":\"Bolo\",\"pt_BR\":\"Bolo\",\"ru\":\"Торт\",\"si\":null,\"sk\":\"Torta\",\"sq\":\"Tortë\",\"sr\":\"торта\",\"sv\":\"Tårta\",\"szl\":null,\"tzm\":null,\"uk\":\"Пиріг\",\"vi\":\"Bánh\",\"zh_Hans\":\"蛋糕\",\"zh_Hant\":\"蛋糕\"}},{\"number\":29,\"emoji\":\"❤️\",\"description\":\"Heart\",\"unicode\":\"U+2764U+FE0F\",\"translated_descriptions\":{\"ar\":\"قَلب\",\"bg\":\"Сърце\",\"ca\":\"Cor\",\"cs\":\"Srdce\",\"de\":\"Herz\",\"eo\":\"Koro\",\"es\":\"Corazón\",\"et\":\"Süda\",\"fa\":\"قلب\",\"fi\":\"Sydän\",\"fr\":\"Cœur\",\"hr\":\"srca\",\"hu\":\"Szív\",\"id\":\"Hati\",\"it\":\"Cuore\",\"ja\":\"ハート\",\"nb_NO\":\"Hjerte\",\"nl\":\"Hart\",\"pt\":\"Coração\",\"pt_BR\":\"Coração\",\"ru\":\"Сердце\",\"si\":null,\"sk\":\"Srdce\",\"sq\":\"Zemër\",\"sr\":\"срце\",\"sv\":\"Hjärta\",\"szl\":null,\"tzm\":\"Ul\",\"uk\":\"Серце\",\"vi\":\"Tim\",\"zh_Hans\":\"心\",\"zh_Hant\":\"愛心\"}},{\"number\":30,\"emoji\":\"😀\",\"description\":\"Smiley\",\"unicode\":\"U+1F600\",\"translated_descriptions\":{\"ar\":\"اِبتِسَامَة\",\"bg\":\"Усмивка\",\"ca\":\"Somrient\",\"cs\":\"Smajlík\",\"de\":\"Lächeln\",\"eo\":\"Rideto\",\"es\":\"Emoticono\",\"et\":\"Smaili\",\"fa\":\"خنده\",\"fi\":\"Hymynaama\",\"fr\":\"Sourire\",\"hr\":\"smajlića\",\"hu\":\"Mosoly\",\"id\":\"Senyuman\",\"it\":\"Faccina sorridente\",\"ja\":\"スマイル\",\"nb_NO\":\"Smilefjes\",\"nl\":\"Smiley\",\"pt\":\"Sorriso\",\"pt_BR\":\"Sorriso\",\"ru\":\"Улыбка\",\"si\":null,\"sk\":\"Smajlík\",\"sq\":\"Emotikon\",\"sr\":\"смајли\",\"sv\":\"Smiley\",\"szl\":null,\"tzm\":null,\"uk\":\"Посмішка\",\"vi\":\"Mặt cười\",\"zh_Hans\":\"笑脸\",\"zh_Hant\":\"笑臉\"}},{\"number\":31,\"emoji\":\"🤖\",\"description\":\"Robot\",\"unicode\":\"U+1F916\",\"translated_descriptions\":{\"ar\":\"رُوبُوت\",\"bg\":\"Робот\",\"ca\":\"Robot\",\"cs\":\"Robot\",\"de\":\"Roboter\",\"eo\":\"Roboto\",\"es\":\"Robot\",\"et\":\"Robot\",\"fa\":\"ربات\",\"fi\":\"Robotti\",\"fr\":\"Robot\",\"hr\":\"robot\",\"hu\":\"Robot\",\"id\":\"Robot\",\"it\":\"Robot\",\"ja\":\"ロボット\",\"nb_NO\":\"Robot\",\"nl\":\"Robot\",\"pt\":\"Robô\",\"pt_BR\":\"Robô\",\"ru\":\"Робот\",\"si\":null,\"sk\":\"Robot\",\"sq\":\"Robot\",\"sr\":\"робот\",\"sv\":\"Robot\",\"szl\":null,\"tzm\":\"Aṛubu\",\"uk\":\"Робот\",\"vi\":\"Rô-bô\",\"zh_Hans\":\"机器人\",\"zh_Hant\":\"機器人\"}},{\"number\":32,\"emoji\":\"🎩\",\"description\":\"Hat\",\"unicode\":\"U+1F3A9\",\"translated_descriptions\":{\"ar\":\"قُبَّعَة\",\"bg\":\"Шапка\",\"ca\":\"Barret\",\"cs\":\"Klobouk\",\"de\":\"Hut\",\"eo\":\"Ĉapelo\",\"es\":\"Sombrero\",\"et\":\"Kübar\",\"fa\":\"کلاه\",\"fi\":\"Hattu\",\"fr\":\"Chapeau\",\"hr\":\"kapa\",\"hu\":\"Kalap\",\"id\":\"Topi\",\"it\":\"Cappello\",\"ja\":\"帽子\",\"nb_NO\":\"Hatt\",\"nl\":\"Hoed\",\"pt\":\"Chapéu\",\"pt_BR\":\"Chapéu\",\"ru\":\"Шляпа\",\"si\":null,\"sk\":\"Klobúk\",\"sq\":\"Kapë\",\"sr\":\"шешир\",\"sv\":\"Hatt\",\"szl\":null,\"tzm\":\"Taraza\",\"uk\":\"Капелюх\",\"vi\":\"Mũ\",\"zh_Hans\":\"帽子\",\"zh_Hant\":\"帽子\"}},{\"number\":33,\"emoji\":\"👓\",\"description\":\"Glasses\",\"unicode\":\"U+1F453\",\"translated_descriptions\":{\"ar\":\"نَظَّارَة\",\"bg\":\"Очила\",\"ca\":\"Ulleres\",\"cs\":\"Brýle\",\"de\":\"Brille\",\"eo\":\"Okulvitroj\",\"es\":\"Gafas\",\"et\":\"Prillid\",\"fa\":\"عینک\",\"fi\":\"Silmälasit\",\"fr\":\"Lunettes\",\"hr\":\"naočale\",\"hu\":\"Szemüveg\",\"id\":\"Kacamata\",\"it\":\"Occhiali\",\"ja\":\"めがね\",\"nb_NO\":\"Briller\",\"nl\":\"Bril\",\"pt\":\"Óculos\",\"pt_BR\":\"Óculos\",\"ru\":\"Очки\",\"si\":null,\"sk\":\"Okuliare\",\"sq\":\"Syze\",\"sr\":\"наочаре\",\"sv\":\"Glasögon\",\"szl\":null,\"tzm\":null,\"uk\":\"Окуляри\",\"vi\":\"Kính mắt\",\"zh_Hans\":\"眼镜\",\"zh_Hant\":\"眼鏡\"}},{\"number\":34,\"emoji\":\"🔧\",\"description\":\"Spanner\",\"unicode\":\"U+1F527\",\"translated_descriptions\":{\"ar\":\"مِفتَاحُ رَبط\",\"bg\":\"Гаечен ключ\",\"ca\":\"Clau anglesa\",\"cs\":\"Klíč\",\"de\":\"Schraubenschlüssel\",\"eo\":\"Ŝraŭbŝlosilo\",\"es\":\"Llave inglesa\",\"et\":\"Mutrivõti\",\"fa\":\"آچار\",\"fi\":\"Kiintoavain\",\"fr\":\"Clé à molette\",\"hr\":\"ključ\",\"hu\":\"Csavarkulcs\",\"id\":\"Kunci Bengkel\",\"it\":\"Chiave inglese\",\"ja\":\"スパナ\",\"nb_NO\":\"Fastnøkkel\",\"nl\":\"Moersleutel\",\"pt\":\"Chave inglesa\",\"pt_BR\":\"Chave inglesa\",\"ru\":\"Ключ\",\"si\":null,\"sk\":\"Vidlicový kľúč\",\"sq\":\"Çelës\",\"sr\":\"кључ\",\"sv\":\"Skruvnyckel\",\"szl\":null,\"tzm\":null,\"uk\":\"Гайковий ключ\",\"vi\":\"Cờ-lê\",\"zh_Hans\":\"扳手\",\"zh_Hant\":\"扳手\"}},{\"number\":35,\"emoji\":\"🎅\",\"description\":\"Santa\",\"unicode\":\"U+1F385\",\"translated_descriptions\":{\"ar\":\"سانتا\",\"bg\":\"Дядо Коледа\",\"ca\":\"Pare Noél\",\"cs\":\"Mikuláš\",\"de\":\"Weihnachtsmann\",\"eo\":\"Kristnaska viro\",\"es\":\"Papá Noel\",\"et\":\"Jõuluvana\",\"fa\":\"بابا نوئل\",\"fi\":\"Joulupukki\",\"fr\":\"Père Noël\",\"hr\":\"deda Mraz\",\"hu\":\"Télapó\",\"id\":\"Santa\",\"it\":\"Babbo Natale\",\"ja\":\"サンタ\",\"nb_NO\":\"Julenisse\",\"nl\":\"Kerstman\",\"pt\":\"Pai Natal\",\"pt_BR\":\"Papai-noel\",\"ru\":\"Санта\",\"si\":null,\"sk\":\"Mikuláš\",\"sq\":\"Babagjyshi i Vitit të Ri\",\"sr\":\"деда Мраз\",\"sv\":\"Tomte\",\"szl\":null,\"tzm\":null,\"uk\":\"Санта Клаус\",\"vi\":\"ông già Nô-en\",\"zh_Hans\":\"圣诞老人\",\"zh_Hant\":\"聖誕老人\"}},{\"number\":36,\"emoji\":\"👍\",\"description\":\"Thumbs Up\",\"unicode\":\"U+1F44D\",\"translated_descriptions\":{\"ar\":\"رَفعُ إِبهَام\",\"bg\":\"Палец нагоре\",\"ca\":\"Polzes amunt\",\"cs\":\"Palec nahoru\",\"de\":\"Daumen Hoch\",\"eo\":\"Dikfingro supren\",\"es\":\"Pulgar arriba\",\"et\":\"Pöidlad püsti\",\"fa\":\"لایک\",\"fi\":\"Peukalo ylös\",\"fr\":\"Pouce en l’air\",\"hr\":\"palac gore\",\"hu\":\"Hüvelykujj fel\",\"id\":\"Jempol\",\"it\":\"Pollice alzato\",\"ja\":\"いいね\",\"nb_NO\":\"Tommel Opp\",\"nl\":\"Duim omhoog\",\"pt\":\"Polegar para cima\",\"pt_BR\":\"Joinha\",\"ru\":\"Большой палец вверх\",\"si\":null,\"sk\":\"Palec nahor\",\"sq\":null,\"sr\":\"палчић горе\",\"sv\":\"Tummen upp\",\"szl\":null,\"tzm\":null,\"uk\":\"Великий палець вгору\",\"vi\":\"Thích\",\"zh_Hans\":\"赞\",\"zh_Hant\":\"讚\"}},{\"number\":37,\"emoji\":\"☂️\",\"description\":\"Umbrella\",\"unicode\":\"U+2602U+FE0F\",\"translated_descriptions\":{\"ar\":\"مِظَلَّة\",\"bg\":\"Чадър\",\"ca\":\"Paraigües\",\"cs\":\"Deštník\",\"de\":\"Regenschirm\",\"eo\":\"Ombrelo\",\"es\":\"Paraguas\",\"et\":\"Vihmavari\",\"fa\":\"چتر\",\"fi\":\"Sateenvarjo\",\"fr\":\"Parapluie\",\"hr\":\"kišobran\",\"hu\":\"Esernyő\",\"id\":\"Payung\",\"it\":\"Ombrello\",\"ja\":\"傘\",\"nb_NO\":\"Paraply\",\"nl\":\"Paraplu\",\"pt\":\"Guarda-chuva\",\"pt_BR\":\"Guarda-chuva\",\"ru\":\"Зонт\",\"si\":null,\"sk\":\"Dáždnik\",\"sq\":\"Ombrellë\",\"sr\":\"кишобран\",\"sv\":\"Paraply\",\"szl\":null,\"tzm\":null,\"uk\":\"Парасолька\",\"vi\":\"Cái ô\",\"zh_Hans\":\"伞\",\"zh_Hant\":\"雨傘\"}},{\"number\":38,\"emoji\":\"⌛\",\"description\":\"Hourglass\",\"unicode\":\"U+231B\",\"translated_descriptions\":{\"ar\":\"سَاعَةٌ رَملِيَّة\",\"bg\":\"Пясъчен часовник\",\"ca\":\"Rellotge de sorra\",\"cs\":\"Přesýpací hodiny\",\"de\":\"Sanduhr\",\"eo\":\"Sablohorloĝo\",\"es\":\"Reloj de arena\",\"et\":\"Liivakell\",\"fa\":\"ساعت شنی\",\"fi\":\"Tiimalasi\",\"fr\":\"Sablier\",\"hr\":\"pješčani sat\",\"hu\":\"Homokóra\",\"id\":\"Jam Pasir\",\"it\":\"Clessidra\",\"ja\":\"砂時計\",\"nb_NO\":\"Timeglass\",\"nl\":\"Zandloper\",\"pt\":\"Ampulheta\",\"pt_BR\":\"Ampulheta\",\"ru\":\"Песочные часы\",\"si\":null,\"sk\":\"Presýpacie hodiny\",\"sq\":\"Klepsidër\",\"sr\":\"пешчаник\",\"sv\":\"Timglas\",\"szl\":null,\"tzm\":null,\"uk\":\"Пісковий годинник\",\"vi\":\"Đồng hồ cát\",\"zh_Hans\":\"沙漏\",\"zh_Hant\":\"沙漏\"}},{\"number\":39,\"emoji\":\"⏰\",\"description\":\"Clock\",\"unicode\":\"U+23F0\",\"translated_descriptions\":{\"ar\":\"سَاعَة\",\"bg\":\"Часовник\",\"ca\":\"Rellotge\",\"cs\":\"Hodiny\",\"de\":\"Uhr\",\"eo\":\"Horloĝo\",\"es\":\"Reloj\",\"et\":\"Kell\",\"fa\":\"ساعت\",\"fi\":\"Pöytäkello\",\"fr\":\"Réveil\",\"hr\":\"sat\",\"hu\":\"Óra\",\"id\":\"Jam\",\"it\":\"Orologio\",\"ja\":\"時計\",\"nb_NO\":\"Klokke\",\"nl\":\"Wekker\",\"pt\":\"Relógio\",\"pt_BR\":\"Relógio\",\"ru\":\"Часы\",\"si\":null,\"sk\":\"Budík\",\"sq\":\"Sahat\",\"sr\":\"сат\",\"sv\":\"Klocka\",\"szl\":null,\"tzm\":null,\"uk\":\"Годинник\",\"vi\":\"Đồng hồ\",\"zh_Hans\":\"时钟\",\"zh_Hant\":\"時鐘\"}},{\"number\":40,\"emoji\":\"🎁\",\"description\":\"Gift\",\"unicode\":\"U+1F381\",\"translated_descriptions\":{\"ar\":\"هَدِيَّة\",\"bg\":\"Подарък\",\"ca\":\"Regal\",\"cs\":\"Dárek\",\"de\":\"Geschenk\",\"eo\":\"Donaco\",\"es\":\"Regalo\",\"et\":\"Kingitus\",\"fa\":\"هدیه\",\"fi\":\"Lahja\",\"fr\":\"Cadeau\",\"hr\":\"poklon\",\"hu\":\"Ajándék\",\"id\":\"Kado\",\"it\":\"Regalo\",\"ja\":\"ギフト\",\"nb_NO\":\"Gave\",\"nl\":\"Geschenk\",\"pt\":\"Presente\",\"pt_BR\":\"Presente\",\"ru\":\"Подарок\",\"si\":null,\"sk\":\"Darček\",\"sq\":\"Dhuratë\",\"sr\":\"поклон\",\"sv\":\"Present\",\"szl\":null,\"tzm\":null,\"uk\":\"Подарунок\",\"vi\":\"Quà tặng\",\"zh_Hans\":\"礼物\",\"zh_Hant\":\"禮物\"}},{\"number\":41,\"emoji\":\"💡\",\"description\":\"Light Bulb\",\"unicode\":\"U+1F4A1\",\"translated_descriptions\":{\"ar\":\"مِصبَاح\",\"bg\":\"Лампа\",\"ca\":\"Bombeta\",\"cs\":\"Žárovka\",\"de\":\"Glühbirne\",\"eo\":\"Lampo\",\"es\":\"Bombilla\",\"et\":\"Lambipirn\",\"fa\":\"لامپ\",\"fi\":\"Hehkulamppu\",\"fr\":\"Ampoule\",\"hr\":\"žarulja\",\"hu\":\"Égő\",\"id\":\"Bohlam Lampu\",\"it\":\"Lampadina\",\"ja\":\"電球\",\"nb_NO\":\"Lyspære\",\"nl\":\"Gloeilamp\",\"pt\":\"Lâmpada\",\"pt_BR\":\"Lâmpada\",\"ru\":\"Лампочка\",\"si\":null,\"sk\":\"Žiarovka\",\"sq\":\"Llambë\",\"sr\":\"сијалица\",\"sv\":\"Lampa\",\"szl\":null,\"tzm\":null,\"uk\":\"Лампочка\",\"vi\":\"Bóng đèn tròn\",\"zh_Hans\":\"灯泡\",\"zh_Hant\":\"燈泡\"}},{\"number\":42,\"emoji\":\"📕\",\"description\":\"Book\",\"unicode\":\"U+1F4D5\",\"translated_descriptions\":{\"ar\":\"كِتَاب\",\"bg\":\"Книга\",\"ca\":\"Llibre\",\"cs\":\"Kniha\",\"de\":\"Buch\",\"eo\":\"Libro\",\"es\":\"Libro\",\"et\":\"Raamat\",\"fa\":\"کتاب\",\"fi\":\"Kirja\",\"fr\":\"Livre\",\"hr\":\"knjiga\",\"hu\":\"Könyv\",\"id\":\"Buku\",\"it\":\"Libro\",\"ja\":\"本\",\"nb_NO\":\"Bok\",\"nl\":\"Boek\",\"pt\":\"Livro\",\"pt_BR\":\"Livro\",\"ru\":\"Книга\",\"si\":null,\"sk\":\"Kniha\",\"sq\":\"Libër\",\"sr\":\"књига\",\"sv\":\"Bok\",\"szl\":null,\"tzm\":\"Adlis\",\"uk\":\"Книга\",\"vi\":\"Sách\",\"zh_Hans\":\"书\",\"zh_Hant\":\"書\"}},{\"number\":43,\"emoji\":\"✏️\",\"description\":\"Pencil\",\"unicode\":\"U+270FU+FE0F\",\"translated_descriptions\":{\"ar\":\"قَلَمُ رَصاص\",\"bg\":\"Молив\",\"ca\":\"Llapis\",\"cs\":\"Tužka\",\"de\":\"Bleistift\",\"eo\":\"Krajono\",\"es\":\"Lápiz\",\"et\":\"Pliiats\",\"fa\":\"مداد\",\"fi\":\"Lyijykynä\",\"fr\":\"Crayon\",\"hr\":\"olovka\",\"hu\":\"Ceruza\",\"id\":\"Pensil\",\"it\":\"Matita\",\"ja\":\"鉛筆\",\"nb_NO\":\"Blyant\",\"nl\":\"Potlood\",\"pt\":\"Lápis\",\"pt_BR\":\"Lápis\",\"ru\":\"Карандаш\",\"si\":null,\"sk\":\"Ceruzka\",\"sq\":\"Laps\",\"sr\":\"оловка\",\"sv\":\"Penna\",\"szl\":null,\"tzm\":null,\"uk\":\"Олівець\",\"vi\":\"Viết chì\",\"zh_Hans\":\"铅笔\",\"zh_Hant\":\"鉛筆\"}},{\"number\":44,\"emoji\":\"📎\",\"description\":\"Paperclip\",\"unicode\":\"U+1F4CE\",\"translated_descriptions\":{\"ar\":\"مِشبَكُ وَرَق\",\"bg\":\"Кламер\",\"ca\":\"Clip\",\"cs\":\"Sponka\",\"de\":\"Büroklammer\",\"eo\":\"Paperkuntenilo\",\"es\":\"Clip\",\"et\":\"Kirjaklamber\",\"fa\":\"گیره کاغذ\",\"fi\":\"Paperiliitin\",\"fr\":\"Trombone\",\"hr\":\"spajalica\",\"hu\":\"Gémkapocs\",\"id\":\"Klip Kertas\",\"it\":\"Graffetta\",\"ja\":\"クリップ\",\"nb_NO\":\"BInders\",\"nl\":\"Papierklemmetje\",\"pt\":\"Clipe\",\"pt_BR\":\"Clipe de papel\",\"ru\":\"Скрепка\",\"si\":null,\"sk\":\"Kancelárska sponka\",\"sq\":\"Kapëse\",\"sr\":\"спајалица\",\"sv\":\"Gem\",\"szl\":null,\"tzm\":null,\"uk\":\"Спиначка\",\"vi\":\"Kẹp giấy\",\"zh_Hans\":\"回形针\",\"zh_Hant\":\"迴紋針\"}},{\"number\":45,\"emoji\":\"✂️\",\"description\":\"Scissors\",\"unicode\":\"U+2702U+FE0F\",\"translated_descriptions\":{\"ar\":\"مِقَصّ\",\"bg\":\"Ножици\",\"ca\":\"Tisores\",\"cs\":\"Nůžky\",\"de\":\"Schere\",\"eo\":\"Tondilo\",\"es\":\"Tijeras\",\"et\":\"Käärid\",\"fa\":\"قیچی\",\"fi\":\"Sakset\",\"fr\":\"Ciseaux\",\"hr\":\"škare\",\"hu\":\"Olló\",\"id\":\"Gunting\",\"it\":\"Forbici\",\"ja\":\"はさみ\",\"nb_NO\":\"Saks\",\"nl\":\"Schaar\",\"pt\":\"Tesoura\",\"pt_BR\":\"Tesoura\",\"ru\":\"Ножницы\",\"si\":null,\"sk\":\"Nožnice\",\"sq\":\"Gërshërë\",\"sr\":\"маказе\",\"sv\":\"Sax\",\"szl\":null,\"tzm\":null,\"uk\":\"Ножиці\",\"vi\":\"Cái kéo\",\"zh_Hans\":\"剪刀\",\"zh_Hant\":\"剪刀\"}},{\"number\":46,\"emoji\":\"🔒\",\"description\":\"Lock\",\"unicode\":\"U+1F512\",\"translated_descriptions\":{\"ar\":\"قُفل\",\"bg\":\"Катинар\",\"ca\":\"Cadenat\",\"cs\":\"Zámek\",\"de\":\"Schloss\",\"eo\":\"Seruro\",\"es\":\"Candado\",\"et\":\"Lukk\",\"fa\":\"قفل\",\"fi\":\"Lukko\",\"fr\":\"Cadenas\",\"hr\":\"zaključati\",\"hu\":\"Lakat\",\"id\":\"Gembok\",\"it\":\"Lucchetto\",\"ja\":\"錠前\",\"nb_NO\":\"Lås\",\"nl\":\"Slot\",\"pt\":\"Cadeado\",\"pt_BR\":\"Cadeado\",\"ru\":\"Замок\",\"si\":null,\"sk\":\"Zámka\",\"sq\":\"Dry\",\"sr\":\"катанац\",\"sv\":\"Lås\",\"szl\":null,\"tzm\":null,\"uk\":\"Замок\",\"vi\":\"Ổ khóa\",\"zh_Hans\":\"锁\",\"zh_Hant\":\"鎖頭\"}},{\"number\":47,\"emoji\":\"🔑\",\"description\":\"Key\",\"unicode\":\"U+1F511\",\"translated_descriptions\":{\"ar\":\"مِفتَاح\",\"bg\":\"Ключ\",\"ca\":\"Clau\",\"cs\":\"Klíč ke dveřím\",\"de\":\"Schlüssel\",\"eo\":\"Ŝlosilo\",\"es\":\"Llave\",\"et\":\"Võti\",\"fa\":\"کلید\",\"fi\":\"Avain\",\"fr\":\"Clé\",\"hr\":\"ključ\",\"hu\":\"Kulcs\",\"id\":\"Kunci\",\"it\":\"Chiave\",\"ja\":\"鍵\",\"nb_NO\":\"Nøkkel\",\"nl\":\"Sleutel\",\"pt\":\"Chave\",\"pt_BR\":\"Chave\",\"ru\":\"Ключ\",\"si\":null,\"sk\":\"Kľúč\",\"sq\":\"Çelës\",\"sr\":\"кључ\",\"sv\":\"Nyckel\",\"szl\":null,\"tzm\":\"Tasarut\",\"uk\":\"Ключ\",\"vi\":\"Chìa khóa\",\"zh_Hans\":\"钥匙\",\"zh_Hant\":\"鑰匙\"}},{\"number\":48,\"emoji\":\"🔨\",\"description\":\"Hammer\",\"unicode\":\"U+1F528\",\"translated_descriptions\":{\"ar\":\"مِطرَقَة\",\"bg\":\"Чук\",\"ca\":\"Martell\",\"cs\":\"Kladivo\",\"de\":\"Hammer\",\"eo\":\"Martelo\",\"es\":\"Martillo\",\"et\":\"Haamer\",\"fa\":\"چکش\",\"fi\":\"Vasara\",\"fr\":\"Marteau\",\"hr\":\"čekić\",\"hu\":\"Kalapács\",\"id\":\"Palu\",\"it\":\"Martello\",\"ja\":\"金槌\",\"nb_NO\":\"Hammer\",\"nl\":\"Hamer\",\"pt\":\"Martelo\",\"pt_BR\":\"Martelo\",\"ru\":\"Молоток\",\"si\":null,\"sk\":\"Kladivo\",\"sq\":\"Çekiç\",\"sr\":\"чекић\",\"sv\":\"Hammare\",\"szl\":null,\"tzm\":null,\"uk\":\"Молоток\",\"vi\":\"Búa\",\"zh_Hans\":\"锤子\",\"zh_Hant\":\"鎚子\"}},{\"number\":49,\"emoji\":\"☎️\",\"description\":\"Telephone\",\"unicode\":\"U+260EU+FE0F\",\"translated_descriptions\":{\"ar\":\"تِلِفُون\",\"bg\":\"Телефон\",\"ca\":\"Telèfon\",\"cs\":\"Telefon\",\"de\":\"Telefon\",\"eo\":\"Telefono\",\"es\":\"Teléfono\",\"et\":\"Telefon\",\"fa\":\"تلفن\",\"fi\":\"Puhelin\",\"fr\":\"Téléphone\",\"hr\":\"telefon\",\"hu\":\"Telefon\",\"id\":\"Telepon\",\"it\":\"Telefono\",\"ja\":\"電話機\",\"nb_NO\":\"Telefon\",\"nl\":\"Telefoon\",\"pt\":\"Telefone\",\"pt_BR\":\"Telefone\",\"ru\":\"Телефон\",\"si\":null,\"sk\":\"Telefón\",\"sq\":\"Telefon\",\"sr\":\"телефон\",\"sv\":\"Telefon\",\"szl\":null,\"tzm\":\"Atilifun\",\"uk\":\"Телефон\",\"vi\":\"Điện thoại\",\"zh_Hans\":\"电话\",\"zh_Hant\":\"電話\"}},{\"number\":50,\"emoji\":\"🏁\",\"description\":\"Flag\",\"unicode\":\"U+1F3C1\",\"translated_descriptions\":{\"ar\":\"عَلَم\",\"bg\":\"Флаг\",\"ca\":\"Bandera\",\"cs\":\"Vlajka\",\"de\":\"Flagge\",\"eo\":\"Flago\",\"es\":\"Bandera\",\"et\":\"Lipp\",\"fa\":\"پرچم\",\"fi\":\"Lippu\",\"fr\":\"Drapeau\",\"hr\":\"zastava\",\"hu\":\"Zászló\",\"id\":\"Bendera\",\"it\":\"Bandiera\",\"ja\":\"旗\",\"nb_NO\":\"Flagg\",\"nl\":\"Vlag\",\"pt\":\"Bandeira\",\"pt_BR\":\"Bandeira\",\"ru\":\"Флаг\",\"si\":null,\"sk\":\"Zástava\",\"sq\":\"Flamur\",\"sr\":\"застава\",\"sv\":\"Flagga\",\"szl\":null,\"tzm\":\"Acenyal\",\"uk\":\"Прапор\",\"vi\":\"Lá cờ\",\"zh_Hans\":\"旗帜\",\"zh_Hant\":\"旗幟\"}},{\"number\":51,\"emoji\":\"🚂\",\"description\":\"Train\",\"unicode\":\"U+1F682\",\"translated_descriptions\":{\"ar\":\"قِطَار\",\"bg\":\"Влак\",\"ca\":\"Tren\",\"cs\":\"Vlak\",\"de\":\"Zug\",\"eo\":\"Vagonaro\",\"es\":\"Tren\",\"et\":\"Rong\",\"fa\":\"قطار\",\"fi\":\"Juna\",\"fr\":\"Train\",\"hr\":\"vlak\",\"hu\":\"Vonat\",\"id\":\"Kereta Api\",\"it\":\"Treno\",\"ja\":\"電車\",\"nb_NO\":\"Tog\",\"nl\":\"Trein\",\"pt\":\"Comboio\",\"pt_BR\":\"Trem\",\"ru\":\"Поезд\",\"si\":null,\"sk\":\"Vlak\",\"sq\":\"Tren\",\"sr\":\"воз\",\"sv\":\"Tåg\",\"szl\":null,\"tzm\":null,\"uk\":\"Потяг\",\"vi\":\"Xe lửa\",\"zh_Hans\":\"火车\",\"zh_Hant\":\"火車\"}},{\"number\":52,\"emoji\":\"🚲\",\"description\":\"Bicycle\",\"unicode\":\"U+1F6B2\",\"translated_descriptions\":{\"ar\":\"دَرّاجَة\",\"bg\":\"Колело\",\"ca\":\"Bicicleta\",\"cs\":\"Kolo\",\"de\":\"Fahrrad\",\"eo\":\"Biciklo\",\"es\":\"Bicicleta\",\"et\":\"Jalgratas\",\"fa\":\"دوچرخه\",\"fi\":\"Polkupyörä\",\"fr\":\"Vélo\",\"hr\":\"bicikl\",\"hu\":\"Kerékpár\",\"id\":\"Sepeda\",\"it\":\"Bicicletta\",\"ja\":\"自転車\",\"nb_NO\":\"Sykkel\",\"nl\":\"Fiets\",\"pt\":\"Bicicleta\",\"pt_BR\":\"Bicicleta\",\"ru\":\"Велосипед\",\"si\":null,\"sk\":\"Bicykel\",\"sq\":\"Biçikletë\",\"sr\":\"бицикл\",\"sv\":\"Cykel\",\"szl\":null,\"tzm\":null,\"uk\":\"Велосипед\",\"vi\":\"Xe đạp\",\"zh_Hans\":\"自行车\",\"zh_Hant\":\"腳踏車\"}},{\"number\":53,\"emoji\":\"✈️\",\"description\":\"Aeroplane\",\"unicode\":\"U+2708U+FE0F\",\"translated_descriptions\":{\"ar\":\"طَائِرة\",\"bg\":\"Самолет\",\"ca\":\"Avió\",\"cs\":\"Letadlo\",\"de\":\"Flugzeug\",\"eo\":\"Aviadilo\",\"es\":\"Avión\",\"et\":\"Lennuk\",\"fa\":\"هواپیما\",\"fi\":\"Lentokone\",\"fr\":\"Avion\",\"hr\":\"avion\",\"hu\":\"Repülő\",\"id\":\"Pesawat\",\"it\":\"Aeroplano\",\"ja\":\"飛行機\",\"nb_NO\":\"Fly\",\"nl\":\"Vliegtuig\",\"pt\":\"Avião\",\"pt_BR\":\"Avião\",\"ru\":\"Самолет\",\"si\":null,\"sk\":\"Lietadlo\",\"sq\":\"Avion\",\"sr\":\"авион\",\"sv\":\"Flygplan\",\"szl\":null,\"tzm\":null,\"uk\":\"Літак\",\"vi\":\"Máy bay\",\"zh_Hans\":\"飞机\",\"zh_Hant\":\"飛機\"}},{\"number\":54,\"emoji\":\"🚀\",\"description\":\"Rocket\",\"unicode\":\"U+1F680\",\"translated_descriptions\":{\"ar\":\"صَارُوخ\",\"bg\":\"Ракета\",\"ca\":\"Coet\",\"cs\":\"Raketa\",\"de\":\"Rakete\",\"eo\":\"Raketo\",\"es\":\"Cohete\",\"et\":\"Rakett\",\"fa\":\"موشک\",\"fi\":\"Raketti\",\"fr\":\"Fusée\",\"hr\":\"raketa\",\"hu\":\"Rakáta\",\"id\":\"Roket\",\"it\":\"Razzo\",\"ja\":\"ロケット\",\"nb_NO\":\"Rakett\",\"nl\":\"Raket\",\"pt\":\"Foguetão\",\"pt_BR\":\"Foguete\",\"ru\":\"Ракета\",\"si\":null,\"sk\":\"Raketa\",\"sq\":\"Raketë\",\"sr\":\"ракета\",\"sv\":\"Raket\",\"szl\":null,\"tzm\":null,\"uk\":\"Ракета\",\"vi\":\"Tên lửa\",\"zh_Hans\":\"火箭\",\"zh_Hant\":\"火箭\"}},{\"number\":55,\"emoji\":\"🏆\",\"description\":\"Trophy\",\"unicode\":\"U+1F3C6\",\"translated_descriptions\":{\"ar\":\"كَأسُ النَّصر\",\"bg\":\"Трофей\",\"ca\":\"Trofeu\",\"cs\":\"Pohár\",\"de\":\"Pokal\",\"eo\":\"Trofeo\",\"es\":\"Trofeo\",\"et\":\"Auhind\",\"fa\":\"جام\",\"fi\":\"Palkinto\",\"fr\":\"Trophée\",\"hr\":\"trofej\",\"hu\":\"Trófea\",\"id\":\"Piala\",\"it\":\"Trofeo\",\"ja\":\"トロフィー\",\"nb_NO\":\"Pokal\",\"nl\":\"Trofee\",\"pt\":\"Troféu\",\"pt_BR\":\"Troféu\",\"ru\":\"Кубок\",\"si\":null,\"sk\":\"Trofej\",\"sq\":\"Trofe\",\"sr\":\"пехар\",\"sv\":\"Trofé\",\"szl\":null,\"tzm\":null,\"uk\":\"Приз\",\"vi\":\"Cúp\",\"zh_Hans\":\"奖杯\",\"zh_Hant\":\"獎盃\"}},{\"number\":56,\"emoji\":\"⚽\",\"description\":\"Ball\",\"unicode\":\"U+26BD\",\"translated_descriptions\":{\"ar\":\"كُرَة\",\"bg\":\"Топка\",\"ca\":\"Pilota\",\"cs\":\"Míč\",\"de\":\"Ball\",\"eo\":\"Pilko\",\"es\":\"Bola\",\"et\":\"Pall\",\"fa\":\"توپ\",\"fi\":\"Pallo\",\"fr\":\"Ballon\",\"hr\":\"lopta\",\"hu\":\"Labda\",\"id\":\"Bola\",\"it\":\"Palla\",\"ja\":\"ボール\",\"nb_NO\":\"Ball\",\"nl\":\"Bal\",\"pt\":\"Bola\",\"pt_BR\":\"Bola\",\"ru\":\"Мяч\",\"si\":null,\"sk\":\"Lopta\",\"sq\":\"Top\",\"sr\":\"лопта\",\"sv\":\"Boll\",\"szl\":null,\"tzm\":\"Tcama\",\"uk\":\"М'яч\",\"vi\":\"Banh\",\"zh_Hans\":\"球\",\"zh_Hant\":\"足球\"}},{\"number\":57,\"emoji\":\"🎸\",\"description\":\"Guitar\",\"unicode\":\"U+1F3B8\",\"translated_descriptions\":{\"ar\":\"غيتار\",\"bg\":\"Китара\",\"ca\":\"Guitarra\",\"cs\":\"Kytara\",\"de\":\"Gitarre\",\"eo\":\"Gitaro\",\"es\":\"Guitarra\",\"et\":\"Kitarr\",\"fa\":\"گیتار\",\"fi\":\"Kitara\",\"fr\":\"Guitare\",\"hr\":\"gitara\",\"hu\":\"Gitár\",\"id\":\"Gitar\",\"it\":\"Chitarra\",\"ja\":\"ギター\",\"nb_NO\":\"Gitar\",\"nl\":\"Gitaar\",\"pt\":\"Guitarra\",\"pt_BR\":\"Guitarra\",\"ru\":\"Гитара\",\"si\":null,\"sk\":\"Gitara\",\"sq\":\"Kitarë\",\"sr\":\"гитара\",\"sv\":\"Gitarr\",\"szl\":null,\"tzm\":\"Agiṭaṛ\",\"uk\":\"Гітара\",\"vi\":\"Ghi-ta\",\"zh_Hans\":\"吉他\",\"zh_Hant\":\"吉他\"}},{\"number\":58,\"emoji\":\"🎺\",\"description\":\"Trumpet\",\"unicode\":\"U+1F3BA\",\"translated_descriptions\":{\"ar\":\"بُوق\",\"bg\":\"Тромпет\",\"ca\":\"Trompeta\",\"cs\":\"Trumpeta\",\"de\":\"Trompete\",\"eo\":\"Trumpeto\",\"es\":\"Trompeta\",\"et\":\"Trompet\",\"fa\":\"شیپور\",\"fi\":\"Trumpetti\",\"fr\":\"Trompette\",\"hr\":\"truba\",\"hu\":\"Trombita\",\"id\":\"Terompet\",\"it\":\"Trombetta\",\"ja\":\"トランペット\",\"nb_NO\":\"Trompet\",\"nl\":\"Trompet\",\"pt\":\"Trompete\",\"pt_BR\":\"Trombeta\",\"ru\":\"Труба\",\"si\":null,\"sk\":\"Trúbka\",\"sq\":\"Trombë\",\"sr\":\"труба\",\"sv\":\"Trumpet\",\"szl\":null,\"tzm\":null,\"uk\":\"Труба\",\"vi\":\"Kèn\",\"zh_Hans\":\"喇叭\",\"zh_Hant\":\"喇叭\"}},{\"number\":59,\"emoji\":\"🔔\",\"description\":\"Bell\",\"unicode\":\"U+1F514\",\"translated_descriptions\":{\"ar\":\"جَرَس\",\"bg\":\"Звънец\",\"ca\":\"Campana\",\"cs\":\"Zvonek\",\"de\":\"Glocke\",\"eo\":\"Sonorilo\",\"es\":\"Campana\",\"et\":\"Kelluke\",\"fa\":\"زنگ\",\"fi\":\"Soittokello\",\"fr\":\"Cloche\",\"hr\":\"zvono\",\"hu\":\"Harang\",\"id\":\"Lonceng\",\"it\":\"Campana\",\"ja\":\"ベル\",\"nb_NO\":\"Bjelle\",\"nl\":\"Bel\",\"pt\":\"Sino\",\"pt_BR\":\"Sino\",\"ru\":\"Колокол\",\"si\":null,\"sk\":\"Zvonec\",\"sq\":\"Kambanë\",\"sr\":\"звоно\",\"sv\":\"Bjällra\",\"szl\":null,\"tzm\":null,\"uk\":\"Дзвін\",\"vi\":\"Chuông\",\"zh_Hans\":\"铃铛\",\"zh_Hant\":\"鈴鐺\"}},{\"number\":60,\"emoji\":\"⚓\",\"description\":\"Anchor\",\"unicode\":\"U+2693\",\"translated_descriptions\":{\"ar\":\"مِرسَاة\",\"bg\":\"Котва\",\"ca\":\"Àncora\",\"cs\":\"Kotva\",\"de\":\"Anker\",\"eo\":\"Ankro\",\"es\":\"Ancla\",\"et\":\"Ankur\",\"fa\":\"لنگر\",\"fi\":\"Ankkuri\",\"fr\":\"Ancre\",\"hr\":\"sidro\",\"hu\":\"Horgony\",\"id\":\"Jangkar\",\"it\":\"Ancora\",\"ja\":\"いかり\",\"nb_NO\":\"Anker\",\"nl\":\"Anker\",\"pt\":\"Âncora\",\"pt_BR\":\"Âncora\",\"ru\":\"Якорь\",\"si\":null,\"sk\":\"Kotva\",\"sq\":\"Spirancë\",\"sr\":\"сидро\",\"sv\":\"Ankare\",\"szl\":null,\"tzm\":null,\"uk\":\"Якір\",\"vi\":\"Mỏ neo\",\"zh_Hans\":\"锚\",\"zh_Hant\":\"船錨\"}},{\"number\":61,\"emoji\":\"🎧\",\"description\":\"Headphones\",\"unicode\":\"U+1F3A7\",\"translated_descriptions\":{\"ar\":\"سَمّاعَة رَأس\",\"bg\":\"Слушалки\",\"ca\":\"Auriculars\",\"cs\":\"Sluchátka\",\"de\":\"Kopfhörer\",\"eo\":\"Kapaŭdilo\",\"es\":\"Cascos\",\"et\":\"Kõrvaklapid\",\"fa\":\"هدفون\",\"fi\":\"Kuulokkeet\",\"fr\":\"Casque audio\",\"hr\":\"slušalice\",\"hu\":\"Fejhallgató\",\"id\":\"Headphone\",\"it\":\"Cuffie\",\"ja\":\"ヘッドホン\",\"nb_NO\":\"Hodetelefoner\",\"nl\":\"Koptelefoon\",\"pt\":\"Fones\",\"pt_BR\":\"Fones de ouvido\",\"ru\":\"Наушники\",\"si\":null,\"sk\":\"Slúchadlá\",\"sq\":\"Kufje\",\"sr\":\"слушалице\",\"sv\":\"Hörlurar\",\"szl\":null,\"tzm\":null,\"uk\":\"Навушники\",\"vi\":\"Tai nghe\",\"zh_Hans\":\"耳机\",\"zh_Hant\":\"耳機\"}},{\"number\":62,\"emoji\":\"📁\",\"description\":\"Folder\",\"unicode\":\"U+1F4C1\",\"translated_descriptions\":{\"ar\":\"مُجَلَّد\",\"bg\":\"Папка\",\"ca\":\"Carpeta\",\"cs\":\"Složka\",\"de\":\"Ordner\",\"eo\":\"Dosierujo\",\"es\":\"Carpeta\",\"et\":\"Kaust\",\"fa\":\"پوشه\",\"fi\":\"Kansio\",\"fr\":\"Dossier\",\"hr\":\"mapu\",\"hu\":\"Mappa\",\"id\":\"Map\",\"it\":\"Cartella\",\"ja\":\"フォルダー\",\"nb_NO\":\"Mappe\",\"nl\":\"Map\",\"pt\":\"Pasta\",\"pt_BR\":\"Pasta\",\"ru\":\"Папка\",\"si\":null,\"sk\":\"Fascikel\",\"sq\":\"Dosje\",\"sr\":\"фасцикла\",\"sv\":\"Mapp\",\"szl\":null,\"tzm\":\"Asdaw\",\"uk\":\"Тека\",\"vi\":\"Thư mục\",\"zh_Hans\":\"文件夹\",\"zh_Hant\":\"資料夾\"}},{\"number\":63,\"emoji\":\"📌\",\"description\":\"Pin\",\"unicode\":\"U+1F4CC\",\"translated_descriptions\":{\"ar\":\"دَبُّوس\",\"bg\":\"Кабърче\",\"ca\":\"Xinxeta\",\"cs\":\"Špendlík\",\"de\":\"Stecknadel\",\"eo\":\"Pinglo\",\"es\":\"Alfiler\",\"et\":\"Nööpnõel\",\"fa\":\"سنجاق\",\"fi\":\"Nuppineula\",\"fr\":\"Punaise\",\"hr\":\"pribadača\",\"hu\":\"Rajszeg\",\"id\":\"Pin\",\"it\":\"Puntina\",\"ja\":\"ピン\",\"nb_NO\":\"Tegnestift\",\"nl\":\"Duimspijker\",\"pt\":\"Pionés\",\"pt_BR\":\"Alfinete\",\"ru\":\"Булавка\",\"si\":null,\"sk\":\"Špendlík\",\"sq\":\"Karficë\",\"sr\":\"чиода\",\"sv\":\"Häftstift\",\"szl\":null,\"tzm\":null,\"uk\":\"Кнопка\",\"vi\":\"Ghim\",\"zh_Hans\":\"图钉\",\"zh_Hant\":\"圖釘\"}}]")).map(({ emoji: e, description: t, translated_descriptions: n }) => [e, [t, Object.keys(n).reduce((e, t) => {
	for (let r of db(t)) e[r] = n[t];
	return e;
}, {})]]));
function NT(e, t) {
	let n = MT.get(e);
	if (!n) throw Error(`Emoji mapping not found for emoji ${e}`);
	let [r, i] = n;
	for (let e of db(t)) if (i[e]) return i[e];
	return r;
}
var PT = {
	container: "_container_1lqqy_8",
	segment: "_segment_1lqqy_15",
	emoji: "_emoji_1lqqy_23",
	label: "_label_1lqqy_29"
};
//#endregion
//#region src/crypto/SasEmoji/SasEmoji.tsx
function FT({ emoji: e, className: t }) {
	let { language: n } = B(), r = e.map((e, t) => /* @__PURE__ */ O("div", {
		className: PT.segment,
		children: [/* @__PURE__ */ D("div", {
			className: PT.emoji,
			"aria-hidden": !0,
			children: e
		}), /* @__PURE__ */ D("div", {
			className: PT.label,
			children: NT(e, n)
		})]
	}, t));
	return /* @__PURE__ */ D("div", {
		className: (0, z.default)(PT.container, t),
		children: r
	});
}
var IT = {
	container: "_container_rhwsm_8",
	body: "_body_rhwsm_15"
};
//#endregion
//#region src/crypto/LegacyCryptoUnsupportedView/LegacyCryptoUnsupportedView.tsx
function LT({ vm: e }) {
	let { translate: t } = B(), { brand: n, version: r } = H(e);
	return /* @__PURE__ */ D("div", {
		className: IT.container,
		children: /* @__PURE__ */ O(V, {
			className: IT.body,
			direction: "column",
			align: "center",
			gap: "var(--cpd-space-2x)",
			children: [
				/* @__PURE__ */ D(pe, {
					as: "h1",
					weight: "semibold",
					size: "md",
					children: t("error|legacy_crypto_unsupported|title")
				}),
				/* @__PURE__ */ D(P, {
					size: "lg",
					children: t("error|legacy_crypto_unsupported|description", { brand: n })
				}),
				/* @__PURE__ */ D(P, {
					size: "lg",
					children: t("error|legacy_crypto_unsupported|actions", { version: r }, { b: (e) => /* @__PURE__ */ D("strong", { children: e }) })
				}),
				/* @__PURE__ */ D(A, {
					kind: "destructive",
					Icon: Fw,
					onClick: e.onSignOutClick,
					children: t("action|remove_this_device")
				})
			]
		})
	});
}
var RT = {
	wrapper: "_wrapper_1kjsz_8",
	container: "_container_1kjsz_15",
	profile: "_profile_1kjsz_29",
	constrainedText: "_constrainedText_1kjsz_40",
	displayname: "_displayname_1kjsz_47",
	userId: "_userId_1kjsz_52",
	createAccount: "_createAccount_1kjsz_57",
	profilePrimary: "_profilePrimary_1kjsz_62",
	profileSecondary: "_profileSecondary_1kjsz_66",
	actions: "_actions_1kjsz_69",
	avatarWrapper: "_avatarWrapper_1kjsz_83",
	avatarWithStatus: "_avatarWithStatus_1kjsz_91",
	iconStatusEmoji: "_iconStatusEmoji_1kjsz_95",
	triggerButton: "_triggerButton_1kjsz_112",
	displayName: "_displayName_1kjsz_134"
}, zT = {
	statusPill: "_statusPill_1uwxs_8",
	menuStatusEmoji: "_menuStatusEmoji_1uwxs_21",
	menuStatusText: "_menuStatusText_1uwxs_25"
}, BT = ({ status: e, clearStatus: t, ref: n, ...r }) => /* @__PURE__ */ O("div", {
	ref: n,
	...r,
	className: zT.statusPill,
	children: [
		/* @__PURE__ */ D(P, {
			as: "span",
			className: zT.menuStatusEmoji,
			children: e.emoji
		}),
		/* @__PURE__ */ D(P, {
			as: "span",
			className: zT.menuStatusText,
			children: e.text
		}),
		/* @__PURE__ */ D(M, {
			onClick: t,
			"aria-label": U("menus|user_menu|clear_status"),
			tooltip: U("menus|user_menu|clear_status"),
			size: "28px",
			children: /* @__PURE__ */ D(ZS, {})
		})
	]
}), VT = 30, HT = 256, UT = new Intl.Segmenter(), WT = new TextEncoder();
function GT(e) {
	let t = 0, n = 0, r = 0;
	for (let { segment: i, index: a } of UT.segment(e)) {
		let o = n + WT.encode(i).length;
		if (t === VT || o > HT) return e.slice(0, r);
		t++, n = o, r = a + i.length;
	}
	return e;
}
var KT = {
	customStatus: "_customStatus_cn6so_8",
	emojiButton: "_emojiButton_cn6so_18",
	selected: "_selected_cn6so_36",
	textField: "_textField_cn6so_42",
	action: "_action_cn6so_47",
	pickerMenu: "_pickerMenu_cn6so_53"
}, qT = "😄";
function JT({ onSave: e, onCancel: t, recentEmojis: n, onRecordRecentEmoji: r }) {
	let [i, a] = T(qT), [o, s] = T(""), [c, l] = T(!1), u = o.trim(), d = h((e) => (a(e), l(!1), !0), []), f = h(() => {
		u ? e({
			emoji: i,
			text: u
		}) : t();
	}, [
		u,
		i,
		e,
		t
	]), p = h((e) => {
		(e.key === "Enter" || e.key === " ") && (e.preventDefault(), f());
	}, [f]), m = h((t) => {
		t.preventDefault(), u && e({
			emoji: i,
			text: u
		});
	}, [
		u,
		i,
		e
	]);
	return /* @__PURE__ */ O(Ce, {
		className: KT.customStatus,
		onSubmit: m,
		children: [
			/* @__PURE__ */ D(ye, {
				open: c,
				onOpenChange: l,
				title: U("status|set_status|choose_emoji"),
				showTitle: !1,
				align: "start",
				className: KT.pickerMenu,
				trigger: /* @__PURE__ */ D("button", {
					type: "button",
					className: (0, z.default)(KT.emojiButton, { [KT.selected]: c }),
					"aria-label": U("status|set_status|choose_emoji"),
					children: i
				}),
				children: /* @__PURE__ */ D(bT, {
					onChoose: d,
					recentEmojis: n,
					onRecordRecent: r,
					onFinished: () => l(!1),
					showQuickReactions: !1
				})
			}),
			/* @__PURE__ */ D(ce, {
				name: "custom-status",
				className: KT.textField,
				children: /* @__PURE__ */ D(De, {
					value: o,
					onChange: (e) => s(GT(e.currentTarget.value)),
					placeholder: U("status|set_status|set_status_prompt"),
					"aria-label": U("status|set_status|set_status_prompt"),
					autoFocus: !0
				})
			}),
			/* @__PURE__ */ D(ve, {
				kind: "primary",
				size: "md",
				role: "button",
				tabIndex: 0,
				className: KT.action,
				onClick: f,
				onKeyDown: p,
				children: U(u ? "action|save" : "action|cancel")
			})
		]
	});
}
var YT = {
	setStatusContainer: "_setStatusContainer_15yw5_8",
	setStatusTrigger: "_setStatusTrigger_15yw5_13",
	disabledTrigger: "_disabledTrigger_15yw5_26",
	menuItem: "_menuItem_15yw5_30",
	dropdownEmoji: "_dropdownEmoji_15yw5_38"
}, XT = {
	in_a_meeting: {
		emoji: "💬",
		textKey: Mx("status|set_status|in_a_meeting")
	},
	focus_time: {
		emoji: "💡",
		textKey: Mx("status|set_status|focus_time")
	},
	on_the_road: {
		emoji: "🚙",
		textKey: Mx("status|set_status|on_the_road")
	},
	be_right_back: {
		emoji: "☕️",
		textKey: Mx("status|set_status|be_right_back")
	},
	away: {
		emoji: "🌴",
		textKey: Mx("status|set_status|away")
	},
	custom: {
		emoji: "✍️",
		textKey: Mx("status|set_status|custom")
	}
}, ZT = Object.keys(XT);
function QT({ value: e }) {
	return /* @__PURE__ */ O(E, { children: [/* @__PURE__ */ D("span", {
		className: YT.dropdownEmoji,
		children: XT[e].emoji
	}), /* @__PURE__ */ D("span", { children: U(XT[e].textKey) })] });
}
function $T({ vm: e, initialCustomMode: t = !1 }) {
	let { userStatus: n, recentEmojis: r, disabled: i } = H(e), [a, o] = T(t), s = h((e) => e === null ? null : /* @__PURE__ */ D(QT, { value: e }), []);
	return n ? /* @__PURE__ */ D(BT, {
		status: n,
		clearStatus: e.clearStatus
	}) : a ? /* @__PURE__ */ D(JT, {
		onSave: (t) => {
			o(!1), e.setStatus(t);
		},
		onCancel: () => o(!1),
		recentEmojis: r,
		onRecordRecentEmoji: e.recordRecentEmoji
	}) : /* @__PURE__ */ D(oe, {
		values: ZT,
		label: null,
		trigger: (e) => /* @__PURE__ */ D("div", {
			className: YT.setStatusContainer,
			children: /* @__PURE__ */ O(ve, {
				className: (0, z.default)(YT.setStatusTrigger, { [YT.disabledTrigger]: i }),
				"aria-label": U("status|set_status|set_status_prompt"),
				"aria-disabled": i,
				...e,
				children: [/* @__PURE__ */ D(xw, {}), /* @__PURE__ */ D(P, {
					as: "span",
					type: "body",
					size: "md",
					weight: "medium",
					children: U("status|set_status|set_status_prompt")
				})]
			})
		}),
		onValueChange: (t) => {
			if (t === "custom") {
				e.onSetCustomStatusClick ? e.onSetCustomStatusClick() : o(!0);
				return;
			}
			let n = XT[t];
			n && e.setStatus({
				emoji: n.emoji,
				text: U(n.textKey)
			});
		},
		renderItem: s,
		disabled: i
	});
}
//#endregion
//#region src/menus/UserMenu/UserMenu.tsx
function eE({ vm: e, className: t }) {
	let { userId: n, displayName: r, avatarUrl: i, expanded: a, open: o, actions: s, showAvatar: c, userStatus: l, setStatusViewModel: u, showUserStatus: d = !0 } = H(e), { translate: f } = B(), p = /* @__PURE__ */ D("button", {
		className: RT.triggerButton,
		"aria-label": f("menus|user_menu|title"),
		type: "button",
		children: /* @__PURE__ */ O("div", {
			className: RT.avatarWrapper,
			children: [/* @__PURE__ */ D(ne, {
				id: n,
				name: r,
				type: "round",
				size: "36px",
				src: i,
				className: l ? RT.avatarWithStatus : void 0
			}), l && /* @__PURE__ */ D(P, {
				as: "div",
				className: RT.iconStatusEmoji,
				children: l.emoji
			})]
		})
	});
	return /* @__PURE__ */ O("div", {
		className: (0, z.default)(RT.wrapper, t),
		children: [/* @__PURE__ */ O(ye, {
			open: o,
			showTitle: !1,
			title: f("menus|user_menu|title"),
			trigger: p,
			onOpenChange: e.setOpen,
			align: "start",
			side: "right",
			className: RT.container,
			children: [
				/* @__PURE__ */ O("section", {
					className: (0, z.default)(RT.profile, RT.profilePrimary),
					children: [
						c && /* @__PURE__ */ D(ne, {
							id: n,
							name: r,
							type: "round",
							size: "64px",
							src: i
						}),
						/* @__PURE__ */ D(P, {
							className: (0, z.default)(RT.displayname, RT.constrainedText),
							type: "body",
							size: "lg",
							weight: "semibold",
							as: "span",
							children: r
						}),
						d && /* @__PURE__ */ D($T, { vm: u })
					]
				}),
				/* @__PURE__ */ O("section", {
					className: (0, z.default)(RT.profile, RT.profileSecondary),
					children: [
						/* @__PURE__ */ D(P, {
							"data-testid": "userId",
							size: "md",
							as: "span",
							type: "body",
							className: (0, z.default)(RT.userId, RT.constrainedText),
							children: n
						}),
						s.createAccount && /* @__PURE__ */ D(A, {
							className: RT.createAccount,
							size: "md",
							as: "button",
							kind: "primary",
							onClick: e.createAccount,
							children: f("menus|user_menu|create_an_account")
						}),
						s.signIn && /* @__PURE__ */ O(P, {
							as: "span",
							weight: "medium",
							children: [f("menus|user_menu|got_an_account"), /* @__PURE__ */ D(ve, {
								as: "button",
								onClick: e.signIn,
								children: f("menus|user_menu|sign_in")
							})]
						})
					]
				}),
				/* @__PURE__ */ D(we, {}),
				/* @__PURE__ */ O("section", {
					className: RT.actions,
					children: [
						s.openHomePage && /* @__PURE__ */ D(N, {
							Icon: FC,
							label: f("user_menu|open_home"),
							onSelect: e.openHomePage
						}),
						s.linkNewDevice && /* @__PURE__ */ D(N, {
							Icon: aC,
							label: f("user_menu|link_new_device"),
							onSelect: e.linkNewDevice
						}),
						s.openSecurity && /* @__PURE__ */ D(N, {
							Icon: YC,
							label: f("user_menu|open_security"),
							onSelect: e.openSecurity
						}),
						s.openFeedback && /* @__PURE__ */ D(N, {
							Icon: FS,
							label: f("user_menu|open_feedback"),
							onSelect: e.openFeedback
						}),
						s.openSettings && /* @__PURE__ */ D(N, {
							Icon: Nw,
							label: f("user_menu|open_settings"),
							onSelect: e.openSettings
						})
					]
				})
			]
		}), a && /* @__PURE__ */ D(P, {
			type: "heading",
			size: "sm",
			as: "span",
			weight: "semibold",
			className: RT.displayName,
			children: r
		})]
	});
}
var tE = {
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
function nE({ vm: e, className: t }) {
	let { translate: n } = B(), { shouldRender: r, isVisible: i, isNotification: a, isHighlight: o, isKnocked: s, badgeType: c, symbol: l, isClickable: u, ariaLabel: d, tabIndex: f, showUnsentTooltip: p } = H(e);
	if (!r) return /* @__PURE__ */ D(E, {});
	let m = (0, z.default)(t, tE.notificationBadge, {
		[tE.visible]: i,
		[tE.notification]: a,
		[tE.highlight]: o,
		[tE.dot]: c === "dot",
		[tE.badge2Char]: c === "badge_2char",
		[tE.badge3Char]: c === "badge_3char",
		"cpd-theme-light": c !== "dot"
	}), h = o ? "highlight" : a ? "notification" : void 0, g = s ? /* @__PURE__ */ D(kS, { "aria-label": n("room|knock_sent") }) : /* @__PURE__ */ D("span", {
		className: tE.count,
		children: l
	}), _ = u ? /* @__PURE__ */ D("button", {
		type: "button",
		"data-testid": "notification-badge",
		"data-badge-type": c,
		"data-notification-level": h,
		className: m,
		"aria-label": d,
		tabIndex: f,
		onClick: e.onClick,
		children: g
	}) : /* @__PURE__ */ D("div", {
		"data-testid": "notification-badge",
		"data-badge-type": c,
		"data-notification-level": h,
		className: m,
		children: g
	});
	return p ? /* @__PURE__ */ D(Ae, {
		label: n("notifications|message_didnt_send"),
		placement: "right",
		children: _
	}) : _;
}
var rE = {
	readMarker: "_readMarker_1t1ld_8",
	labelledMarker: "_labelledMarker_1t1ld_16",
	labelledLine: "_labelledLine_1t1ld_23",
	label: "_label_1t1ld_16",
	line: "_line_1t1ld_36"
};
//#endregion
//#region src/room/timeline/ReadMarker/ReadMarker.tsx
function iE({ eventId: e, kind: t, showLine: n = !0, label: r, as: i = "li", onCurrentMarkerRef: a, onGhostLineRef: o, onGhostTransitionEnd: s, className: c }) {
	let l = t === "current" && n && r !== void 0, u = null;
	return t === "ghost" ? u = /* @__PURE__ */ D("hr", {
		className: rE.line,
		ref: o,
		onTransitionEnd: s,
		"data-eventid": e
	}) : l ? u = /* @__PURE__ */ D("div", {
		className: rE.labelledLine,
		role: "separator",
		"aria-label": r,
		children: /* @__PURE__ */ D("span", {
			className: rE.label,
			children: r
		})
	}) : n && (u = /* @__PURE__ */ D("hr", { className: rE.line })), /* @__PURE__ */ D(i, {
		className: (0, z.default)(c, rE.readMarker, { [rE.labelledMarker]: l }),
		ref: t === "current" ? a : void 0,
		"data-scroll-tokens": t === "current" ? e : void 0,
		children: u
	});
}
//#endregion
//#region src/room/timeline/EventPresentation/EventPresentationContext.ts
var aE = {
	layout: "group",
	density: "default"
}, oE = l(aE);
oE.displayName = "EventPresentationContext";
var sE = oE.Provider;
function cE() {
	return g(oE);
}
function lE() {
	let { layout: e, density: t } = cE();
	return {
		"data-event-layout": e,
		"data-event-density": t
	};
}
//#endregion
//#region src/core/utils/applyReplacerOnString.ts
function uE(e, t) {
	return t ? (Array.isArray(e) ? e : [e]).map((e, n) => typeof e == "string" && t(new ze(e), 0) || e) : e;
}
//#endregion
//#region src/room/timeline/event-tile/body/EventContentBodyView/EventContentBodyView.tsx
var dE = p(function({ vm: e, as: t, ref: n }) {
	let { body: r, formattedBody: i, replacer: a, className: o, dir: s, parseFormattedBody: c } = H(e), l = i ? (c ?? ((e, t) => Re(e, t ? { replace: t } : void 0)))(i, a) : uE(r, a);
	return D(t === "span" ? "span" : "div", {
		ref: n,
		className: o,
		dir: s,
		children: l
	});
}), fE = {
	content: "_content_1wtpw_8",
	icon: "_icon_1wtpw_17"
};
//#endregion
//#region src/room/timeline/event-tile/body/HiddenBodyView/HiddenBodyView.tsx
function pE({ vm: e, className: t, ref: n }) {
	let { reason: r } = H(e), i = B().translate, a = r ? i("timeline|pending_moderation_reason", { reason: r }) : i("timeline|pending_moderation");
	return /* @__PURE__ */ O("span", {
		className: (0, z.default)(fE.content, t),
		ref: n,
		children: [/* @__PURE__ */ D($w, {
			className: fE.icon,
			"aria-hidden": "true"
		}), /* @__PURE__ */ D(P, {
			as: "span",
			children: a
		})]
	});
}
var mE = {
	button: "_button_1ync4_8",
	content: "_content_1ync4_27",
	icon: "_icon_1ync4_34"
};
//#endregion
//#region src/room/timeline/event-tile/body/HiddenMediaPlaceholder/HiddenMediaPlaceholder.tsx
function hE({ className: e, onClick: t, children: n }) {
	return /* @__PURE__ */ D("button", {
		type: "button",
		onClick: t,
		className: (0, z.default)(mE.button, e),
		children: /* @__PURE__ */ O("span", {
			className: mE.content,
			children: [/* @__PURE__ */ D(tT, {
				className: mE.icon,
				"aria-hidden": "true"
			}), /* @__PURE__ */ D("span", { children: n })]
		})
	});
}
var gE = {
	content: "_content_1xhpr_8",
	icon: "_icon_1xhpr_17"
};
//#endregion
//#region src/room/timeline/event-tile/body/RedactedBodyView/RedactedBodyView.tsx
function _E({ vm: e, className: t, ref: n }) {
	let { text: r, tooltip: i } = H(e), a = /* @__PURE__ */ O("span", {
		className: (0, z.default)(gE.content, t),
		ref: n,
		children: [/* @__PURE__ */ D(rC, {
			className: gE.icon,
			"aria-hidden": "true"
		}), /* @__PURE__ */ D("span", { children: r })]
	});
	return i ? /* @__PURE__ */ D(Ae, {
		description: i,
		children: a
	}) : a;
}
var vE = {
	content: "_content_1dw8a_8",
	invalid: "_invalid_1dw8a_99"
}, yE = { mediaBody: "_mediaBody_9mib0_8" };
//#endregion
//#region src/room/timeline/event-tile/body/MediaBody/MediaBody.tsx
function bE({ as: e, className: t, children: n, ...r }) {
	return /* @__PURE__ */ D(e || "div", {
		className: (0, z.default)("mx_MediaBody", yE.mediaBody, t),
		...r,
		children: n
	});
}
//#endregion
//#region src/room/timeline/event-tile/body/MFileBodyView/FileBodyView.tsx
var xE = /* @__PURE__ */ function(e) {
	return e.EXPORT = "EXPORT", e.DECRYPTION_PENDING = "DECRYPTION_PENDING", e.ENCRYPTED = "ENCRYPTED", e.UNENCRYPTED = "UNENCRYPTED", e.INVALID = "INVALID", e;
}({}), SE = /* @__PURE__ */ function(e) {
	return e.ATTACHMENT = "ATTACHMENT", e.AUDIO = "AUDIO", e.DOWNLOAD = "DOWNLOAD", e.VIDEO = "VIDEO", e;
}({});
function CE(e) {
	return e === "AUDIO" ? sT : e === "DOWNLOAD" ? dC : e === "VIDEO" ? Yw : jS;
}
function wE({ vm: e, refIFrame: t, refLink: n, className: r }) {
	let { translate: i } = B(), { state: a, showInfo: o, infoLabel: s, infoTooltip: c, infoIcon: l, infoHref: u, showDownload: d, downloadLabel: f, downloadTitle: p, downloadHref: m, showOpen: h, openLabel: g, showInlineDownload: _ } = H(e), v = s ?? i("common|attachment"), y = c ?? v, b = CE(l), x = f ?? i("action|download"), S = /* @__PURE__ */ D(A, {
		as: "button",
		size: "md",
		kind: "secondary",
		"aria-label": v,
		Icon: b,
		onClick: e.onInfoClick,
		children: /* @__PURE__ */ D("span", { children: v })
	}), C = _ || h && g ? /* @__PURE__ */ O("div", {
		"data-type": "actions",
		children: [_ && /* @__PURE__ */ D(M, {
			size: "28px",
			kind: "secondary",
			"aria-label": x,
			tooltip: x,
			onClick: e.onInfoClick,
			children: /* @__PURE__ */ D(dC, {})
		}), h && g && /* @__PURE__ */ D(M, {
			size: "28px",
			kind: "secondary",
			"aria-label": g,
			tooltip: g,
			onClick: e.onOpenClick,
			children: /* @__PURE__ */ D(TC, {})
		})]
	}) : null, w = o ? C ? /* @__PURE__ */ O(bE, {
		"data-type": "info",
		children: [/* @__PURE__ */ D(Ae, {
			description: y,
			placement: "right",
			children: S
		}), C]
	}) : /* @__PURE__ */ D(Ae, {
		description: y,
		placement: "right",
		children: /* @__PURE__ */ D(bE, {
			"data-type": "info",
			children: S
		})
	}) : null, T = (0, z.default)(vE.content, r), ee = p ?? x;
	switch (a) {
		case "EXPORT": return /* @__PURE__ */ D("span", {
			className: T,
			children: /* @__PURE__ */ D("a", {
				href: u,
				children: w
			})
		});
		case "DECRYPTION_PENDING": return /* @__PURE__ */ O("span", {
			className: T,
			children: [w, d && /* @__PURE__ */ D("div", {
				"data-type": "download",
				children: /* @__PURE__ */ D(A, {
					size: "md",
					kind: "secondary",
					Icon: dC,
					onClick: e.onDownloadClick,
					children: x
				})
			})]
		});
		case "ENCRYPTED": return /* @__PURE__ */ O("span", {
			className: T,
			children: [w, d && /* @__PURE__ */ O("div", {
				"data-type": "download",
				children: [/* @__PURE__ */ D("div", {
					"aria-hidden": !0,
					style: { display: "none" },
					children: /* @__PURE__ */ D(A, {
						size: "md",
						kind: "secondary",
						Icon: dC,
						as: "a",
						ref: n
					})
				}), /* @__PURE__ */ D("iframe", {
					"aria-hidden": !0,
					title: ee,
					src: "usercontent/",
					onLoad: e.onDownloadIframeLoad,
					ref: t,
					sandbox: "allow-scripts allow-downloads"
				})]
			})]
		});
		case "UNENCRYPTED": return /* @__PURE__ */ O("span", {
			className: T,
			children: [w, d && /* @__PURE__ */ D("div", {
				"data-type": "download",
				children: /* @__PURE__ */ D(A, {
					size: "md",
					kind: "secondary",
					Icon: dC,
					as: "a",
					href: m,
					target: "_blank",
					rel: "noreferrer noopener",
					onClick: e.onDownloadLinkClick,
					children: x
				})
			})]
		});
		default: return /* @__PURE__ */ O(E, { children: [/* @__PURE__ */ D("span", {
			className: T,
			children: w
		}), /* @__PURE__ */ D("span", {
			className: (0, z.default)(T, vE.invalid),
			children: i("timeline|m.file|error_invalid")
		})] });
	}
}
//#endregion
//#region ../../node_modules/.pnpm/blurhash@2.0.5/node_modules/blurhash/dist/esm/index.js
var TE = /* @__PURE__ */ "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%*+,-.:;=?@[]^_{|}~".split(""), EE = (e) => {
	let t = 0;
	for (let n = 0; n < e.length; n++) {
		let r = e[n], i = TE.indexOf(r);
		t = t * 83 + i;
	}
	return t;
}, DE = (e) => {
	let t = e / 255;
	return t <= .04045 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4;
}, OE = (e) => {
	let t = Math.max(0, Math.min(1, e));
	return Math.trunc(t <= .0031308 ? t * 12.92 * 255 + .5 : (1.055 * t ** .4166666666666667 - .055) * 255 + .5);
}, kE = (e) => e < 0 ? -1 : 1, AE = (e, t) => kE(e) * Math.abs(e) ** +t, jE = class extends Error {
	constructor(e) {
		super(e), this.name = "ValidationError", this.message = e;
	}
}, ME = (e) => {
	if (!e || e.length < 6) throw new jE("The blurhash string must be at least 6 characters");
	let t = EE(e[0]), n = Math.floor(t / 9) + 1, r = t % 9 + 1;
	if (e.length !== 4 + 2 * r * n) throw new jE(`blurhash length mismatch: length is ${e.length} but it should be ${4 + 2 * r * n}`);
}, NE = (e) => {
	let t = e >> 16, n = e >> 8 & 255, r = e & 255;
	return [
		DE(t),
		DE(n),
		DE(r)
	];
}, PE = (e, t) => {
	let n = Math.floor(e / 361), r = Math.floor(e / 19) % 19, i = e % 19;
	return [
		AE((n - 9) / 9, 2) * t,
		AE((r - 9) / 9, 2) * t,
		AE((i - 9) / 9, 2) * t
	];
}, FE = (e, t, n, r) => {
	ME(e), r |= 1;
	let i = EE(e[0]), a = Math.floor(i / 9) + 1, o = i % 9 + 1, s = (EE(e[1]) + 1) / 166, c = Array(o * a);
	for (let t = 0; t < c.length; t++) if (t === 0) {
		let n = EE(e.substring(2, 6));
		c[t] = NE(n);
	} else {
		let n = EE(e.substring(4 + t * 2, 6 + t * 2));
		c[t] = PE(n, s * r);
	}
	let l = t * 4, u = new Uint8ClampedArray(l * n);
	for (let e = 0; e < n; e++) for (let r = 0; r < t; r++) {
		let i = 0, s = 0, d = 0;
		for (let l = 0; l < a; l++) for (let a = 0; a < o; a++) {
			let u = Math.cos(Math.PI * r * a / t) * Math.cos(Math.PI * e * l / n), f = c[a + l * o];
			i += f[0] * u, s += f[1] * u, d += f[2] * u;
		}
		let f = OE(i), p = OE(s), m = OE(d);
		u[4 * r + 0 + e * l] = f, u[4 * r + 1 + e * l] = p, u[4 * r + 2 + e * l] = m, u[4 * r + 3 + e * l] = 255;
	}
	return u;
}, IE = Object.defineProperty, LE = Object.defineProperties, RE = Object.getOwnPropertyDescriptors, zE = Object.getOwnPropertySymbols, BE = Object.prototype.hasOwnProperty, VE = Object.prototype.propertyIsEnumerable, HE = (e, t, n) => t in e ? IE(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, UE = (e, t) => {
	for (var n in t ||= {}) BE.call(t, n) && HE(e, n, t[n]);
	if (zE) for (var n of zE(t)) VE.call(t, n) && HE(e, n, t[n]);
	return e;
}, WE = (e, t) => LE(e, RE(t)), GE = (e, t) => {
	var n = {};
	for (var r in e) BE.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && zE) for (var r of zE(e)) t.indexOf(r) < 0 && VE.call(e, r) && (n[r] = e[r]);
	return n;
}, KE = class extends a.PureComponent {
	constructor() {
		super(...arguments), this.canvas = null, this.handleRef = (e) => {
			this.canvas = e, this.draw();
		}, this.draw = () => {
			let { hash: e, height: t, punch: n, width: r } = this.props;
			if (this.canvas) {
				let i = FE(e, r, t, n), a = this.canvas.getContext("2d"), o = a.createImageData(r, t);
				o.data.set(i), a.putImageData(o, 0, 0);
			}
		};
	}
	componentDidUpdate() {
		this.draw();
	}
	render() {
		let e = this.props, { hash: t, height: n, width: r } = e, i = GE(e, [
			"hash",
			"height",
			"width"
		]);
		return a.createElement("canvas", WE(UE({}, i), {
			height: n,
			width: r,
			ref: this.handleRef
		}));
	}
};
KE.defaultProps = {
	height: 128,
	width: 128
};
var qE = {
	position: "absolute",
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	width: "100%",
	height: "100%"
}, JE = class extends a.PureComponent {
	componentDidUpdate() {
		if (this.props.resolutionX <= 0) throw Error("resolutionX must be larger than zero");
		if (this.props.resolutionY <= 0) throw Error("resolutionY must be larger than zero");
	}
	render() {
		let e = this.props, { hash: t, height: n, width: r, punch: i, resolutionX: o, resolutionY: s, style: c } = e, l = GE(e, [
			"hash",
			"height",
			"width",
			"punch",
			"resolutionX",
			"resolutionY",
			"style"
		]);
		return a.createElement("div", WE(UE({}, l), { style: WE(UE({
			display: "inline-block",
			height: n,
			width: r
		}, c), { position: "relative" }) }), a.createElement(KE, {
			hash: t,
			height: s,
			width: o,
			punch: i,
			style: qE
		}));
	}
};
JE.defaultProps = {
	height: 128,
	width: 128,
	resolutionX: 32,
	resolutionY: 32
};
var YE = {
	root: "_root_6eb3o_8",
	link: "_link_6eb3o_17",
	thumbnailContainer: "_thumbnailContainer_6eb3o_29",
	placeholder: "_placeholder_6eb3o_38",
	placeholderBlurhash: "_placeholderBlurhash_6eb3o_48",
	blurhash: "_blurhash_6eb3o_52",
	blurhashPulse: "_blurhashPulse_6eb3o_1",
	mediaContent: "_mediaContent_6eb3o_63",
	image: "_image_6eb3o_69",
	banner: "_banner_6eb3o_75",
	gifLabel: "_gifLabel_6eb3o_92",
	hiddenButton: "_hiddenButton_6eb3o_108",
	hiddenButtonContent: "_hiddenButtonContent_6eb3o_127",
	error: "_error_6eb3o_137",
	errorIcon: "_errorIcon_6eb3o_142"
}, XE = /* @__PURE__ */ function(e) {
	return e.ERROR = "ERROR", e.HIDDEN = "HIDDEN", e.READY = "READY", e;
}({}), ZE = /* @__PURE__ */ function(e) {
	return e.NONE = "NONE", e.SPINNER = "SPINNER", e.BLURHASH = "BLURHASH", e;
}({});
function QE({ placeholder: e, blurhash: t, maxWidth: n, maxHeight: r, loadingLabel: i }) {
	switch (e) {
		case "BLURHASH": return t ? /* @__PURE__ */ D(JE, {
			className: YE.blurhash,
			hash: t,
			width: n ?? 320,
			height: r ?? 240
		}) : /* @__PURE__ */ D(ge, {
			"aria-label": i,
			role: "progressbar"
		});
		case "SPINNER": return /* @__PURE__ */ D(ge, {
			"aria-label": i,
			role: "progressbar"
		});
		default: return null;
	}
}
function $E({ vm: e, className: t, containerClassName: n, imageClassName: r, imageRef: i, children: a }) {
	let { translate: o } = B(), { state: s, alt: c, errorLabel: l, hiddenButtonLabel: u, src: d, thumbnailSrc: f, showAnimatedContentOnHover: p, placeholder: m = "NONE", blurhash: h, maxWidth: g, maxHeight: _, aspectRatio: v, isSvg: y, gifLabel: b, bannerLabel: x, tooltipLabel: S, linkUrl: C, linkTarget: w } = H(e), [ee, te] = T(!1), [E, ne] = T(!1), k = ee || E, re = (0, z.default)(t, YE.root), A = (0, z.default)(n, YE.thumbnailContainer), j = (0, z.default)(r, YE.image);
	if (s === "ERROR") {
		let e = _ === void 0 ? void 0 : { "--mx-image-reserved-height": `${_}px` };
		return /* @__PURE__ */ O("span", {
			className: (0, z.default)(re, YE.error),
			style: e,
			children: [/* @__PURE__ */ D(LC, {
				className: YE.errorIcon,
				width: "16",
				height: "16"
			}), l]
		});
	}
	let ie = k && p && d ? d : f ?? d, ae = g === void 0 ? void 0 : `${g}px`, oe = g === void 0 ? void 0 : "100%", se = {
		width: ae,
		maxWidth: oe,
		maxHeight: _,
		aspectRatio: v
	}, ce = y ? {
		width: ae,
		maxWidth: oe,
		maxHeight: _
	} : void 0, le = QE({
		placeholder: m,
		blurhash: h,
		maxWidth: g,
		maxHeight: _,
		loadingLabel: o("common|loading")
	}), ue = le !== null, de = s === "HIDDEN" ? /* @__PURE__ */ D("div", {
		style: {
			width: g,
			height: _
		},
		children: /* @__PURE__ */ D("button", {
			type: "button",
			className: YE.hiddenButton,
			onClick: e.onHiddenButtonClick,
			children: /* @__PURE__ */ O("div", {
				className: YE.hiddenButtonContent,
				children: [/* @__PURE__ */ D(tT, {}), /* @__PURE__ */ D("span", { children: u })]
			})
		})
	}) : ie ? /* @__PURE__ */ D("img", {
		className: j,
		src: ie,
		alt: c,
		ref: i,
		onError: e.onImageError,
		onLoad: e.onImageLoad,
		onMouseEnter: () => te(!0),
		onMouseLeave: () => te(!1)
	}) : null, fe = s === "READY" && x && k ? /* @__PURE__ */ D("span", {
		className: YE.banner,
		children: x
	}) : null, pe = s === "READY" && b && !k ? /* @__PURE__ */ D("p", {
		className: YE.gifLabel,
		children: b
	}) : null, me = /* @__PURE__ */ O("div", {
		className: A,
		style: se,
		children: [ue && /* @__PURE__ */ D("div", {
			className: (0, z.default)(YE.placeholder, { [YE.placeholderBlurhash]: m === "BLURHASH" && !!h }),
			children: le
		}), /* @__PURE__ */ O("div", {
			className: YE.mediaContent,
			style: ce,
			children: [
				de,
				pe,
				fe
			]
		})]
	});
	return S && (me = /* @__PURE__ */ D(Ae, {
		description: S,
		placement: "right",
		isTriggerInteractive: !0,
		children: me
	})), s === "READY" && C && (me = /* @__PURE__ */ D("a", {
		href: C,
		target: w,
		rel: w === "_blank" ? "noreferrer noopener" : void 0,
		className: YE.link,
		onClick: e.onLinkClick,
		onFocus: () => ne(!0),
		onBlur: () => ne(!1),
		children: me
	})), /* @__PURE__ */ O("div", {
		className: re,
		children: [me, a]
	});
}
var eD = {
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
}, tD = /* @__PURE__ */ function(e) {
	return e.NONE = "NONE", e.SPINNER = "SPINNER", e.BLURHASH = "BLURHASH", e;
}({});
function nD({ placeholder: e, blurhash: t, maxWidth: n, maxHeight: r, loadingLabel: i }) {
	switch (e) {
		case "BLURHASH": return t ? /* @__PURE__ */ D(JE, {
			className: eD.blurhash,
			hash: t,
			width: n ?? 58,
			height: r ?? 44
		}) : /* @__PURE__ */ D("div", {
			className: eD.spinner,
			children: /* @__PURE__ */ D(ge, {
				size: 32,
				"aria-label": i,
				role: "progressbar"
			})
		});
		case "SPINNER": return /* @__PURE__ */ D("div", {
			className: eD.spinner,
			children: /* @__PURE__ */ D(ge, {
				size: 32,
				"aria-label": i,
				role: "progressbar"
			})
		});
		default: return null;
	}
}
function rD({ className: e, imageRef: t, src: n, thumbnailSrc: r, alt: i, maxWidth: a, maxHeight: o, aspectRatio: s, isSvg: c, placeholder: l = "NONE", blurhash: u, showAnimatedContentOnHover: d, showImage: f = !0, gifLabel: p, bannerLabel: m, onImageLoad: h, onImageError: g }) {
	let { translate: _ } = B(), [v, y] = T(!1), b = v && d && n ? n : r ?? n;
	if (!b) return /* @__PURE__ */ D("div", { className: (0, z.default)(eD.root, e) });
	if (a === void 0 || o === void 0 || s === void 0) return f ? /* @__PURE__ */ D("div", {
		className: (0, z.default)(eD.root, e),
		children: /* @__PURE__ */ D("img", {
			className: eD.measureImage,
			src: b,
			ref: t,
			alt: i,
			onError: g,
			onLoad: h
		})
	}) : /* @__PURE__ */ D("div", { className: (0, z.default)(eD.root, e) });
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
	}, C = nD({
		placeholder: l,
		blurhash: u,
		maxWidth: a,
		maxHeight: o,
		loadingLabel: _("common|loading")
	});
	return /* @__PURE__ */ D("div", {
		className: (0, z.default)(eD.root, e),
		children: /* @__PURE__ */ O("div", {
			className: eD.thumbnailContainer,
			style: x,
			children: [C && /* @__PURE__ */ D("div", {
				className: eD.placeholder,
				children: C
			}), /* @__PURE__ */ O("div", {
				className: eD.mediaContent,
				style: S,
				children: [
					f ? /* @__PURE__ */ D("img", {
						className: eD.image,
						src: b,
						ref: t,
						alt: i,
						onError: g,
						onLoad: h,
						onMouseEnter: () => y(!0),
						onMouseLeave: () => y(!1)
					}) : null,
					p && !v ? /* @__PURE__ */ D("p", {
						className: eD.gifLabel,
						children: p
					}) : null,
					m && v ? /* @__PURE__ */ D("span", {
						className: eD.banner,
						children: m
					}) : null
				]
			})]
		})
	});
}
var iD = {
	content: "_content_1sgf8_8",
	allowButton: "_allowButton_1sgf8_13"
};
//#endregion
//#region src/room/timeline/event-tile/body/MjolnirBodyView/MjolnirBodyView.tsx
function aD({ vm: e, className: t, ref: n }) {
	H(e);
	let r = B().translate;
	return /* @__PURE__ */ D("div", {
		className: (0, z.default)(iD.content, t),
		ref: n,
		children: /* @__PURE__ */ D("i", { children: r("timeline|mjolnir|message_hidden", {}, { a: (t) => /* @__PURE__ */ D("button", {
			type: "button",
			className: iD.allowButton,
			onClick: (t) => {
				t.preventDefault(), t.stopPropagation(), e.onAllow();
			},
			children: t
		}) }) })
	});
}
var oD = {
	root: "_root_acuv8_1",
	container: "_container_acuv8_5",
	video: "_video_acuv8_10",
	hiddenButton: "_hiddenButton_acuv8_17",
	hiddenButtonContent: "_hiddenButtonContent_acuv8_30",
	loadingContainer: "_loadingContainer_acuv8_40",
	error: "_error_acuv8_48"
}, sD = {
	ERROR: "ERROR",
	HIDDEN: "HIDDEN",
	LOADING: "LOADING",
	READY: "READY"
};
function cD({ vm: e, className: t, containerClassName: n, videoRef: r, children: i }) {
	let { state: a, videoLabel: o, videoTitle: s, hiddenButtonLabel: c, errorLabel: l, maxWidth: u, maxHeight: d, aspectRatio: f, src: p, poster: m, preload: h, controls: g, muted: _, autoPlay: v } = H(e), y = (0, z.default)(t, oD.root), b = (0, z.default)(n, oD.container), x = {
		width: u === void 0 ? void 0 : `min(100%, ${u}px)`,
		maxWidth: u,
		maxHeight: d,
		aspectRatio: f
	};
	return a === sD.ERROR ? /* @__PURE__ */ O("span", {
		className: (0, z.default)(y, oD.error),
		children: [/* @__PURE__ */ D(jC, {
			width: "16",
			height: "16"
		}), l]
	}) : a === sD.HIDDEN ? /* @__PURE__ */ D("span", {
		className: y,
		children: /* @__PURE__ */ D("div", {
			className: b,
			style: x,
			children: /* @__PURE__ */ D("button", {
				type: "button",
				onClick: e.onPreviewClick,
				className: oD.hiddenButton,
				children: /* @__PURE__ */ O("div", {
					className: oD.hiddenButtonContent,
					children: [/* @__PURE__ */ D(tT, {}), /* @__PURE__ */ D("span", { children: c })]
				})
			})
		})
	}) : a === sD.LOADING ? /* @__PURE__ */ D("span", {
		className: y,
		children: /* @__PURE__ */ D("div", {
			className: b,
			style: x,
			children: /* @__PURE__ */ D("div", {
				className: oD.loadingContainer,
				children: /* @__PURE__ */ D(ge, {
					"aria-label": "Loading...",
					role: "progressbar"
				})
			})
		})
	}) : /* @__PURE__ */ O("span", {
		className: y,
		children: [/* @__PURE__ */ D("div", {
			className: b,
			style: x,
			"data-video-body-mask-target": "",
			children: /* @__PURE__ */ D("video", {
				className: oD.video,
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
var lD = {
	root: "_root_1bcfk_8",
	text: "_text_1bcfk_25",
	caption: "_caption_1bcfk_26",
	notice: "_notice_1bcfk_30",
	emote: "_emote_1bcfk_35",
	annotated: "_annotated_1bcfk_40",
	annotatedInline: "_annotatedInline_1bcfk_49",
	annotation: "_annotation_1bcfk_53",
	editedMarker: "_editedMarker_1bcfk_61",
	bodyLink: "_bodyLink_1bcfk_75",
	emoteSender: "_emoteSender_1bcfk_80"
}, uD = /* @__PURE__ */ function(e) {
	return e.TEXT = "TEXT", e.NOTICE = "NOTICE", e.EMOTE = "EMOTE", e.CAPTION = "CAPTION", e;
}({}), dD = /* @__PURE__ */ function(e) {
	return e.NONE = "NONE", e.LINK = "LINK", e;
}({});
function fD(e, t) {
	return !t || !f(e) ? e : c(e, { ref: t });
}
function pD({ vm: e, body: t, bodyRef: n, urlPreviews: r, className: i }) {
	let a = lE(), { id: s, kind: c, bodyWrapper: l = "NONE", bodyLinkHref: u, showEditedMarker: d, editedMarkerText: f, editedMarkerAriaLabel: p, editedMarkerTooltip: m, editedMarkerCaption: h, showPendingModerationMarker: g, pendingModerationText: _, emoteSenderName: v } = H(e), y = (0, z.default)(i, lD.root, {
		[lD.text]: c === "TEXT",
		[lD.notice]: c === "NOTICE",
		[lD.emote]: c === "EMOTE",
		[lD.caption]: c === "CAPTION"
	}), b = fD(t, n), x = e.onEditedMarkerClick ? (t) => {
		t.preventDefault(), t.stopPropagation(), e.onEditedMarkerClick?.(t);
	} : void 0, S = [];
	if (d) {
		let e = /* @__PURE__ */ D("button", {
			type: "button",
			className: (0, z.default)(lD.annotation, lD.editedMarker),
			onClick: x,
			"aria-label": p,
			"data-textual-body-edited-marker": "",
			children: /* @__PURE__ */ D("span", { children: f })
		});
		S.push(m ? /* @__PURE__ */ D(Ae, {
			description: m,
			caption: h,
			isTriggerInteractive: !0,
			children: e
		}, "edited-marker") : o.cloneElement(e, { key: "edited-marker" }));
	}
	if (g && S.push(/* @__PURE__ */ D("span", {
		className: lD.annotation,
		"data-textual-body-pending-moderation": "",
		children: _
	}, "pending-moderation-marker")), l === "LINK" && u && (b = /* @__PURE__ */ D("a", {
		href: u,
		className: lD.bodyLink,
		children: b
	})), S.length > 0) {
		let e = (0, z.default)(lD.annotated, { [lD.annotatedInline]: c === "EMOTE" });
		b = O(c === "EMOTE" ? "span" : "div", {
			dir: "auto",
			className: e,
			"data-textual-body-annotation-wrapper": "",
			children: [b, S]
		});
	}
	return c === "EMOTE" ? /* @__PURE__ */ O("div", {
		id: s,
		className: y,
		onClick: e.onRootClick,
		dir: "auto",
		...a,
		children: [
			"*\xA0",
			/* @__PURE__ */ D("button", {
				type: "button",
				className: lD.emoteSender,
				onClick: e.onEmoteSenderClick,
				children: v
			}),
			"\xA0",
			b,
			r
		]
	}) : /* @__PURE__ */ O("div", {
		id: s,
		className: y,
		onClick: e.onRootClick,
		...a,
		children: [b, r]
	});
}
var mD = { content: "_content_6gcu5_8" };
//#endregion
//#region src/room/timeline/event-tile/body/UnknownBodyView/UnknownBodyView.tsx
function hD({ text: e, className: t, ref: n }) {
	return /* @__PURE__ */ D("div", {
		className: (0, z.default)(mD.content, t),
		ref: n,
		children: e
	});
}
var gD = {
	content: "_content_bkfxu_10",
	source: "_source_bkfxu_24",
	toggle: "_toggle_bkfxu_34",
	expanded: "_expanded_bkfxu_68"
};
//#endregion
//#region src/room/timeline/event-tile/body/ViewSourceEventView/ViewSourceEventView.tsx
function _D({ vm: e, className: t, expandedClassName: n, ref: r }) {
	let i = lE(), { expanded: a, preview: o, source: s } = H(e), c = B().translate, l = c("devtools|toggle_event"), u = (0, z.default)(gD.content, t, { [gD.expanded]: a }, a && n);
	return /* @__PURE__ */ O("span", {
		className: u,
		ref: r,
		...i,
		children: [a ? /* @__PURE__ */ D("pre", {
			className: gD.source,
			children: s
		}) : /* @__PURE__ */ D("code", {
			className: gD.source,
			children: o
		}), /* @__PURE__ */ D(Ae, {
			description: l,
			placement: "top",
			children: /* @__PURE__ */ D("button", {
				type: "button",
				"aria-label": l,
				className: gD.toggle,
				onClick: e.onToggle,
				children: D(a ? tC : TC, {})
			})
		})]
	});
}
var vD = {
	tileErrorView: "_tileErrorView_1nx8u_1",
	line: "_line_1nx8u_8",
	message: "_message_1nx8u_16",
	viewSourceButton: "_viewSourceButton_1nx8u_20"
};
//#endregion
//#region src/room/timeline/event-tile/EventTileView/TileErrorView/TileErrorView.tsx
function yD({ vm: e, className: t }) {
	let n = lE(), { message: r, eventType: i, bugReportCtaLabel: a, viewSourceCtaLabel: o } = H(e);
	return /* @__PURE__ */ D("li", {
		className: (0, z.default)(vD.tileErrorView, t),
		...n,
		children: /* @__PURE__ */ O("div", {
			className: vD.line,
			role: "status",
			children: [
				/* @__PURE__ */ O("span", {
					className: vD.message,
					children: [r, i && ` (${i})`]
				}),
				a && /* @__PURE__ */ D(A, {
					kind: "secondary",
					size: "md",
					onClick: e.onBugReportClick,
					children: a
				}),
				o && /* @__PURE__ */ D("button", {
					type: "button",
					className: vD.viewSourceButton,
					onClick: e.onViewSourceClick,
					children: o
				})
			]
		})
	});
}
var bD = {
	pill: "_pill_v00ef_8",
	label: "_label_v00ef_14",
	icon: "_icon_v00ef_19"
};
//#endregion
//#region src/core/pill-input/Pill/Pill.tsx
function xD({ className: e, children: t, label: n, onClick: r, ...i }) {
	let a = v(), { translate: o } = B();
	return /* @__PURE__ */ O(V, {
		display: "inline-flex",
		gap: "var(--cpd-space-1x)",
		align: "center",
		className: (0, z.default)(bD.pill, e),
		...i,
		children: [
			t,
			/* @__PURE__ */ D("span", {
				id: a,
				className: bD.label,
				children: n
			}),
			r && /* @__PURE__ */ D(M, {
				"aria-describedby": a,
				size: "16px",
				onClick: r,
				"aria-label": o("action|delete"),
				className: (0, z.default)(bD.icon, "mx_Dialog_nonDialogButton"),
				children: /* @__PURE__ */ D(ZS, {})
			})
		]
	});
}
//#endregion
//#region ../../node_modules/.pnpm/react-merge-refs@3.0.2_react@19.3.0/node_modules/react-merge-refs/dist/index.js
function SD(e) {
	return (t) => {
		for (let n of e) wD(n, t);
	};
}
function CD(e) {
	return (t) => {
		let n = [];
		for (let r of e) {
			let e = wD(r, t), i = typeof e == "function";
			n.push(i ? e : () => wD(r, null));
		}
		return () => {
			for (let e of n) e();
		};
	};
}
function wD(e, t) {
	if (typeof e == "function") return e(t);
	e && (e.current = t);
}
var TD = parseInt(te.split(".")[0], 10) >= 19 ? CD : SD;
function ED(e) {
	return S(() => TD(e), e);
}
var DD = {
	pillInput: "_pillInput_fb9j9_8",
	input: "_input_fb9j9_24",
	largerInput: "_largerInput_fb9j9_36"
};
//#endregion
//#region src/core/pill-input/PillInput/PillInput.tsx
function OD({ className: e, children: t, onRemoveChildren: n, inputProps: r, ...i }) {
	let a = w(null), o = Jy(r, ["onKeyDown", "ref"]), c = ED([a, r?.ref]), l = s.toArray(t).length > 0;
	return /* @__PURE__ */ O(V, {
		...i,
		gap: "var(--cpd-space-2x)",
		direction: "column",
		className: (0, z.default)(DD.pillInput, e),
		onClick: (e) => {
			e.preventDefault(), e.stopPropagation(), a.current?.focus();
		},
		children: [l && /* @__PURE__ */ D(V, {
			gap: "var(--cpd-space-2x)",
			wrap: "wrap",
			align: "center",
			children: t
		}), /* @__PURE__ */ D("input", {
			ref: c,
			autoComplete: "off",
			className: DD.input,
			onKeyDown: (e) => {
				let t = e.currentTarget.value.trim();
				e.key === "Backspace" && !t ? (e.preventDefault(), n?.(e)) : r?.onKeyDown?.(e);
			},
			...o
		})]
	});
}
var kD = {
	container: "_container_mcq5y_8",
	secondaryAction: "_secondaryAction_mcq5y_16",
	primaryAction: "_primaryAction_mcq5y_20",
	title: "_title_mcq5y_24",
	description: "_description_mcq5y_28"
}, AD = {
	ConnectionLost: "ConnectionLost",
	NeedsConsent: "NeedsConsent",
	ResourceLimited: "ResourceLimited",
	UnsentMessages: "UnsentMessages",
	LocalRoomFailed: "LocalRoomFailed"
};
function jD({ vm: e }) {
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
		case AD.ConnectionLost: return /* @__PURE__ */ D(CT, {
			type: "info",
			role: "status",
			"aria-labelledby": r,
			children: /* @__PURE__ */ O("div", {
				className: kD.container,
				children: [/* @__PURE__ */ D(P, {
					className: kD.title,
					id: r,
					weight: "medium",
					children: U("tchap|server_connectivity_lost_title", void 0, { a: (e) => /* @__PURE__ */ D("a", {
						target: "_blank",
						rel: "noreferrer noopener",
						href: "https://status.tchap.numerique.gouv.fr",
						children: e
					}) })
				}), /* @__PURE__ */ D(P, {
					className: kD.description,
					children: t("room|status_bar|server_connectivity_lost_description")
				})]
			})
		});
		case AD.NeedsConsent: return /* @__PURE__ */ D(CT, {
			type: "info",
			role: "status",
			"aria-labelledby": r,
			actions: /* @__PURE__ */ D(A, {
				onClick: s,
				className: kD.primaryAction,
				kind: "primary",
				size: "md",
				as: "a",
				href: n.consentUri,
				target: "_blank",
				rel: "noreferrer noopener",
				children: t("terms|tac_button")
			}),
			children: /* @__PURE__ */ D("div", {
				className: kD.container,
				children: /* @__PURE__ */ D(P, {
					className: kD.title,
					id: r,
					weight: "medium",
					children: t("room|status_bar|requires_consent_agreement_title")
				})
			})
		});
		case AD.ResourceLimited: return /* @__PURE__ */ D(CT, {
			type: "info",
			role: "status",
			"aria-labelledby": r,
			actions: n.adminContactHref && /* @__PURE__ */ D(A, {
				kind: "secondary",
				size: "md",
				as: "a",
				href: n.adminContactHref,
				target: "_blank",
				rel: "noreferrer noopener",
				children: t("room|status_bar|contact_account_provider")
			}),
			children: /* @__PURE__ */ O("div", {
				className: kD.container,
				children: [/* @__PURE__ */ D(P, {
					className: kD.title,
					id: r,
					weight: "medium",
					children: {
						monthly_active_user: t("room|status_bar|monthly_user_limit_reached_title"),
						hs_disabled: t("room|status_bar|homeserver_blocked_title")
					}[n.resourceLimit] || t("room|status_bar|exceeded_resource_limit_title")
				}), /* @__PURE__ */ D(P, {
					className: kD.description,
					children: t("room|status_bar|exceeded_resource_limit_description")
				})]
			})
		});
		case AD.LocalRoomFailed: return /* @__PURE__ */ D(CT, {
			role: "status",
			type: "info",
			"aria-labelledby": r,
			actions: /* @__PURE__ */ D(A, {
				size: "md",
				kind: "primary",
				className: kD.primaryAction,
				Icon: Tw,
				onClick: o,
				children: t("action|retry")
			}),
			children: /* @__PURE__ */ D(P, {
				className: kD.title,
				id: r,
				weight: "medium",
				children: t("room|status_bar|failed_to_create_room_title")
			})
		});
		case AD.UnsentMessages: return /* @__PURE__ */ D(CT, {
			role: "status",
			type: "info",
			actions: n.isResending ? /* @__PURE__ */ D(ge, {}) : /* @__PURE__ */ O(E, { children: [e.onDeleteAllClick && /* @__PURE__ */ D(A, {
				size: "md",
				kind: "secondary",
				Icon: rC,
				className: kD.secondaryAction,
				onClick: i,
				children: t("room|status_bar|delete_all")
			}), e.onResendAllClick && /* @__PURE__ */ D(A, {
				size: "md",
				kind: "primary",
				Icon: Tw,
				onClick: a,
				className: kD.primaryAction,
				children: t("room|status_bar|retry_all")
			})] }),
			"aria-labelledby": r,
			children: /* @__PURE__ */ O("div", {
				className: kD.container,
				children: [/* @__PURE__ */ D(P, {
					className: kD.title,
					id: r,
					weight: "medium",
					children: U("tchap|server_connectivity_lost_title", void 0, { a: (e) => /* @__PURE__ */ D("a", {
						target: "_blank",
						rel: "noreferrer noopener",
						href: "https://status.tchap.numerique.gouv.fr",
						children: e
					}) })
				}), /* @__PURE__ */ D(P, {
					className: kD.description,
					children: t("room|status_bar|select_messages_to_retry")
				})]
			})
		});
		default: return null;
	}
}
var MD = {
	container: "_container_2bui5_8",
	header: "_header_2bui5_22",
	avatar: "_avatar_2bui5_30",
	name: "_name_2bui5_34",
	roundedCornerContainer: "_roundedCornerContainer_2bui5_40"
}, ND = ({ vm: e, RoomAvatar: t }) => {
	let n = H(e), { translate: r } = B();
	return /* @__PURE__ */ O("div", {
		"data-testid": "widget-pip-container",
		className: MD.container,
		onMouseDown: e.onStartMoving,
		children: [/* @__PURE__ */ O("div", {
			className: MD.header,
			children: [
				/* @__PURE__ */ D(M, {
					size: "28px",
					"data-testid": "base-card-back-button",
					onClick: (t) => e.onBackClick(t),
					tooltip: r("action|back"),
					kind: "secondary",
					children: /* @__PURE__ */ D(GS, {})
				}),
				/* @__PURE__ */ D(t, {
					className: MD.avatar,
					size: "20px"
				}),
				/* @__PURE__ */ D("span", {
					className: MD.name,
					children: n.roomName
				})
			]
		}), /* @__PURE__ */ D("div", {
			className: MD.roundedCornerContainer,
			children: /* @__PURE__ */ D(e.persistentAppComponent, {
				persistentWidgetId: n.widgetId,
				persistentRoomId: n.roomId
			})
		})]
	});
}, PD = ({ vm: e, overlay: t }) => {
	let { hidden: n, classNames: r, persistKey: i, zIndex: a, pointerEvents: o } = H(e);
	return n ? null : /* @__PURE__ */ D("div", {
		className: r?.root,
		children: /* @__PURE__ */ D("div", {
			className: r?.persistedWrapper,
			children: /* @__PURE__ */ O(e.PersistedElement, {
				persistKey: i,
				zIndex: a,
				children: [/* @__PURE__ */ D("div", {
					className: r?.body,
					style: o ? { pointerEvents: o } : void 0,
					children: /* @__PURE__ */ D(e.ElementCall, {})
				}), t]
			})
		})
	});
}, FD = {
	mock: "_mock_oem66_8",
	sectionTitle: "_sectionTitle_oem66_23",
	secondary: "_secondary_oem66_27",
	error: "_error_oem66_31",
	members: "_members_oem66_35",
	buttons: "_buttons_oem66_41",
	log: "_log_oem66_45",
	config: "_config_oem66_46"
}, ID = ({ vm: e }) => {
	let { unknownRoom: t, roomId: n, intent: r, joined: i, theme: a, themeLabel: o, languageLabel: s, participants: c, audioEnabled: l, videoEnabled: u, alwaysOnScreen: d, canClose: f, supportsReactions: p, allowJoinUnmutedViaIntent: m, log: h, configJson: g, initializedWith: _ } = H(e), v = U("voip|element_call_mock|title");
	return t ? /* @__PURE__ */ D("section", {
		className: FD.mock,
		"aria-label": v,
		children: /* @__PURE__ */ D(P, {
			as: "span",
			size: "sm",
			className: FD.error,
			children: U("voip|element_call_mock|unknown_room", { roomId: n })
		})
	}) : /* @__PURE__ */ O("section", {
		className: FD.mock,
		"data-theme": a,
		"aria-label": v,
		children: [
			/* @__PURE__ */ D(de, { children: v }),
			/* @__PURE__ */ D(P, {
				as: "span",
				size: "sm",
				className: FD.secondary,
				children: U("voip|element_call_mock|status", {
					roomId: n,
					intent: r,
					state: U(i ? "voip|element_call_mock|in_call" : "voip|element_call_mock|in_lobby"),
					theme: o,
					language: s
				})
			}),
			/* @__PURE__ */ O("section", { children: [/* @__PURE__ */ D(fe, {
				className: FD.sectionTitle,
				children: U("voip|element_call_mock|participants")
			}), c.length === 0 ? /* @__PURE__ */ D(P, {
				as: "span",
				size: "sm",
				className: FD.secondary,
				children: U("voip|element_call_mock|no_participants")
			}) : /* @__PURE__ */ D("ul", {
				className: FD.members,
				children: c.map((e) => /* @__PURE__ */ D(P, {
					as: "li",
					children: e.label
				}, e.id))
			})] }),
			/* @__PURE__ */ O("section", { children: [
				/* @__PURE__ */ D(fe, {
					className: FD.sectionTitle,
					children: "HostBridge"
				}),
				/* @__PURE__ */ O(V, {
					className: FD.buttons,
					wrap: "wrap",
					gap: "var(--cpd-space-2x)",
					children: [
						/* @__PURE__ */ D(A, {
							size: "md",
							kind: "primary",
							onClick: () => void e.toggleJoined(),
							children: i ? "notifyHungUp" : "notifyJoined"
						}),
						/* @__PURE__ */ O(A, {
							size: "md",
							kind: "secondary",
							onClick: () => void e.toggleAlwaysOnScreen(),
							children: [
								"setAlwaysOnScreen(",
								String(!d),
								")"
							]
						}),
						/* @__PURE__ */ D(A, {
							size: "md",
							kind: "secondary",
							onClick: () => void e.toggleAudio(),
							children: U(l ? "voip|element_call_mock|mute_audio" : "voip|element_call_mock|unmute_audio")
						}),
						/* @__PURE__ */ D(A, {
							size: "md",
							kind: "secondary",
							onClick: () => void e.toggleVideo(),
							children: U(u ? "voip|element_call_mock|mute_video" : "voip|element_call_mock|unmute_video")
						}),
						f && /* @__PURE__ */ D(A, {
							size: "md",
							kind: "tertiary",
							onClick: () => void e.close(),
							children: U("action|close")
						})
					]
				}),
				/* @__PURE__ */ D(P, {
					as: "span",
					size: "sm",
					className: FD.secondary,
					children: U("voip|element_call_mock|host_bridge_facts", {
						supportsReactions: String(p),
						allowJoinUnmutedViaIntent: String(m),
						close: U(f ? "action|yes" : "action|no")
					})
				}),
				/* @__PURE__ */ D("ol", {
					className: FD.log,
					"aria-label": U("voip|element_call_mock|log_label"),
					tabIndex: 0,
					children: h.map((e) => /* @__PURE__ */ D("li", { children: e.text }, e.id))
				})
			] }),
			/* @__PURE__ */ O("section", { children: [
				/* @__PURE__ */ D(fe, {
					className: FD.sectionTitle,
					children: U("voip|element_call_mock|configuration")
				}),
				/* @__PURE__ */ D("pre", {
					className: FD.config,
					"aria-label": U("voip|element_call_mock|config_label"),
					tabIndex: 0,
					children: g
				}),
				/* @__PURE__ */ D(P, {
					as: "span",
					size: "sm",
					className: FD.secondary,
					children: U("voip|element_call_mock|initialized_with", { value: _ })
				})
			] })
		]
	});
};
//#endregion
//#region src/room/HistoryVisibilityBadge/HistoryVisibilityBadge.tsx
function LD({ historyVisibility: e }) {
	let t = {
		color: "var(--cpd-color-icon-info-primary)",
		width: "1rem",
		height: "1rem"
	};
	switch (e) {
		case "invited":
		case "joined": return /* @__PURE__ */ O(re, {
			kind: "default",
			children: [/* @__PURE__ */ D($w, { ...t }), U("room|history_visibility_badge|private")]
		});
		case "shared": return /* @__PURE__ */ O(re, {
			kind: "default",
			children: [/* @__PURE__ */ D(NC, { ...t }), U("room|history_visibility_badge|shared")]
		});
		case "world_readable": return /* @__PURE__ */ O(re, {
			kind: "default",
			children: [/* @__PURE__ */ D(Gw, { ...t }), U("room|history_visibility_badge|world_readable")]
		});
		default: return null;
	}
}
var RD = {
	viewer: "_viewer_c0xbv_8",
	toolbar: "_toolbar_c0xbv_19",
	body: "_body_c0xbv_31",
	message: "_message_c0xbv_37",
	error: "_error_c0xbv_50"
};
//#endregion
//#region src/room/right-panel/DocumentViewerView/DocumentViewerView.tsx
function zD({ status: e, toolbar: t, children: n, className: r }) {
	let { translate: i } = B();
	return /* @__PURE__ */ O("div", {
		className: (0, z.default)(RD.viewer, r),
		"data-testid": "document-viewer",
		children: [t ? /* @__PURE__ */ D("div", {
			className: RD.toolbar,
			children: t
		}) : null, /* @__PURE__ */ O("div", {
			className: RD.body,
			children: [
				n,
				e === "loading" ? /* @__PURE__ */ D("div", {
					className: RD.message,
					role: "status",
					"aria-live": "polite",
					children: i("document_viewer|loading")
				}) : null,
				e === "error" ? /* @__PURE__ */ D("div", {
					className: (0, z.default)(RD.message, RD.error),
					role: "alert",
					children: i("document_viewer|error_load")
				}) : null
			]
		})]
	});
}
var BD = {
	pageForm: "_pageForm_1qm7v_10",
	zoomControls: "_zoomControls_1qm7v_11",
	pageInput: "_pageInput_1qm7v_30",
	pageSeparator: "_pageSeparator_1qm7v_46",
	pageTotal: "_pageTotal_1qm7v_47",
	zoomLevel: "_zoomLevel_1qm7v_52",
	surface: "_surface_1qm7v_61"
};
//#endregion
//#region src/room/right-panel/PdfViewerView/PdfViewerView.tsx
function VD(e, t) {
	return new Intl.NumberFormat(t, {
		style: "percent",
		maximumFractionDigits: 0
	}).format(e / 100);
}
function HD({ status: e, currentPage: t, pageCount: n, pageInput: r, children: i, onPageInputChange: a, onPageInputFocus: o, onPageInputBlur: s, onPageInputCancel: c, onPageSubmit: l, onZoomIn: u, onZoomOut: d, zoomPercent: f, className: p }) {
	let { translate: m, language: h } = B(), g = n > 0 ? /* @__PURE__ */ O(E, { children: [/* @__PURE__ */ D("form", {
		onSubmit: (e) => {
			e.preventDefault(), l();
		},
		children: /* @__PURE__ */ O("fieldset", {
			className: BD.pageForm,
			"aria-label": m("pdf_viewer|page_label", {
				page: t,
				total: n
			}),
			children: [
				/* @__PURE__ */ D("input", {
					"aria-label": m("pdf_viewer|page_number"),
					className: BD.pageInput,
					"data-testid": "pdf-page-input",
					inputMode: "numeric",
					onBlur: s,
					onChange: (e) => a(e.target.value),
					onFocus: o,
					onKeyDown: (e) => {
						e.key === "Escape" && (c(), e.currentTarget.blur());
					},
					value: r
				}),
				/* @__PURE__ */ D("span", {
					"aria-hidden": "true",
					className: BD.pageSeparator,
					children: "|"
				}),
				/* @__PURE__ */ D("span", {
					className: BD.pageTotal,
					"data-testid": "pdf-page-total",
					children: n
				})
			]
		})
	}), /* @__PURE__ */ O("fieldset", {
		className: BD.zoomControls,
		"aria-label": m("pdf_viewer|zoom"),
		children: [
			/* @__PURE__ */ D(M, {
				size: "28px",
				"aria-label": m("pdf_viewer|zoom_out"),
				tooltip: m("pdf_viewer|zoom_out"),
				"data-testid": "pdf-zoom-out",
				onClick: d,
				children: /* @__PURE__ */ D(rw, {})
			}),
			f === void 0 ? null : /* @__PURE__ */ D("span", {
				className: BD.zoomLevel,
				"data-testid": "pdf-zoom-level",
				children: VD(f, h)
			}),
			/* @__PURE__ */ D(M, {
				size: "28px",
				"aria-label": m("pdf_viewer|zoom_in"),
				tooltip: m("pdf_viewer|zoom_in"),
				"data-testid": "pdf-zoom-in",
				onClick: u,
				children: /* @__PURE__ */ D(hw, {})
			})
		]
	})] }) : void 0;
	return /* @__PURE__ */ D(zD, {
		status: e,
		toolbar: g,
		className: p,
		children: /* @__PURE__ */ D("div", {
			className: BD.surface,
			"data-testid": "pdf-surface",
			children: i
		})
	});
}
var UD = { content: "_content_1o4pd_10" };
//#endregion
//#region src/room/right-panel/MarkdownViewerView/MarkdownViewerView.tsx
function WD({ status: e, html: t, onContentClick: n, className: r }) {
	return /* @__PURE__ */ D(zD, {
		status: e,
		className: r,
		children: e === "ready" ? /* @__PURE__ */ D("div", {
			className: UD.content,
			"data-testid": "markdown-content",
			dir: "auto",
			onClickCapture: n,
			dangerouslySetInnerHTML: { __html: t }
		}) : null
	});
}
//#endregion
//#region src/room/right-panel/WidgetContextMenuView/WidgetContextMenuView.tsx
var GD = ({ vm: e }) => {
	let { translate: t } = B(), { showStreamAudioStreamButton: n, showEditButton: r, showSnapshotButton: i, showDeleteButton: a, showRevokeButton: s, showMoveButtons: c, isMenuOpened: l, userWidget: u, trigger: d } = H(e), f;
	n && (f = /* @__PURE__ */ D(N, {
		onSelect: e.onStreamAudioClick,
		label: t("widget|context_menu|start_audio_stream")
	}));
	let p;
	r && (p = /* @__PURE__ */ D(N, {
		onSelect: e.onEditClick,
		label: t("action|edit")
	}));
	let m;
	i && (m = /* @__PURE__ */ D(N, {
		onSelect: e.onSnapshotClick,
		label: t("widget|context_menu|screenshot")
	}));
	let h;
	a && (h = /* @__PURE__ */ D(N, {
		onSelect: e.onDeleteClick,
		label: t(u ? "action|remove" : "widget|context_menu|remove")
	}));
	let g;
	s && (g = /* @__PURE__ */ D(N, {
		onSelect: e.onRevokeClick,
		label: t("widget|context_menu|revoke")
	}));
	let [_, v] = c, y;
	_ && (y = /* @__PURE__ */ D(N, {
		onSelect: () => e.onMoveButton(-1),
		label: t("widget|context_menu|move_left")
	}));
	let b;
	v && (b = /* @__PURE__ */ D(N, {
		onSelect: () => e.onMoveButton(1),
		label: t("widget|context_menu|move_right")
	}));
	let x = () => l ? /* @__PURE__ */ O(E, { children: [
		f,
		p,
		g,
		h,
		m,
		y,
		b
	] }) : null, S = o.isValidElement(d) ? d : /* @__PURE__ */ D(M, {
		size: "24px",
		"aria-label": "context menu trigger button",
		inert: !0,
		tabIndex: -1,
		children: /* @__PURE__ */ D(lw, {})
	});
	return /* @__PURE__ */ D(ye, {
		title: "Widget context menu",
		open: l,
		showTitle: !1,
		side: "right",
		align: "start",
		trigger: S,
		onOpenChange: e.onFinished,
		children: x()
	});
}, KD = { content: "_content_u6fft_8" }, qD = { timelineSeparator: "_timelineSeparator_yq5ye_8" }, JD = ({ label: e, className: t, children: n, role: r = "separator" }) => /* @__PURE__ */ O(V, {
	className: (0, z.default)(t, qD.timelineSeparator),
	role: r,
	"aria-label": r === "separator" ? e : void 0,
	align: "center",
	children: [
		/* @__PURE__ */ D("hr", { role: "none" }),
		n,
		/* @__PURE__ */ D("hr", { role: "none" })
	]
}), YD = 15e3, XD = 75e3, ZD = 45, QD = 75, $D = 23, eO = 26;
function tO(e, t) {
	let n = Date.now() - e, r = Math.abs(Math.ceil(n / 6e4)), i = Math.ceil(r / 60), a = Math.ceil(i / 24), o = t?.translate ?? U;
	return n >= 0 ? n <= YD ? o("time|few_seconds_ago") : n <= XD ? o("time|about_minute_ago") : r <= ZD ? o("time|n_minutes_ago", { num: r }) : r <= QD ? o("time|about_hour_ago") : i <= $D ? o("time|n_hours_ago", { num: i }) : i <= eO ? o("time|about_day_ago") : o("time|n_days_ago", { num: a }) : (n = Math.abs(n), n <= YD ? o("time|in_few_seconds") : n <= XD ? o("time|in_about_minute") : r <= ZD ? o("time|in_n_minutes", { num: r }) : r <= QD ? o("time|in_about_hour") : i <= $D ? o("time|in_n_hours", { num: i }) : i <= eO ? o("time|in_about_day") : o("time|in_n_days", { num: a }));
}
function nO(e) {
	return new Intl.RelativeTimeFormat(e?.language, {
		style: "long",
		numeric: "auto"
	});
}
var rO = {
	picker_menu_item: "_picker_menu_item_1kc2b_8",
	picker_form: "_picker_form_1kc2b_12",
	picker_input: "_picker_input_1kc2b_22",
	picker_input_date: "_picker_input_date_1kc2b_28"
}, iO = ({ vm: e, inputRef: t, onSubmitted: n, onDismissed: r }) => {
	let i = H(e), [a] = T(() => /* @__PURE__ */ new Date()), o = kf(i.jumpFromDate ? new Date(i.jumpFromDate) : a), { translate: s } = B(), c = v(), [l, u] = T(o), d = w(null), f = t ?? d, p = w(null), m = (e) => {
		e.key === "Tab" && (e.shiftKey ? r?.() : (e.preventDefault(), p.current?.focus()));
	}, h = (e) => {
		u(e.currentTarget.value);
	}, g = () => {
		e.onDatePicked?.(l), n?.();
	};
	return /* @__PURE__ */ D(N, {
		as: "div",
		"data-testid": "jump-to-date-picker",
		label: s("room|jump_to_date"),
		onSelect: (e) => {
			e.preventDefault();
		},
		hideChevron: !0,
		className: rO.picker_menu_item,
		children: /* @__PURE__ */ O(Ce, {
			className: rO.picker_form,
			onSubmit: (e) => {
				e.preventDefault(), g();
			},
			children: [/* @__PURE__ */ D(ce, {
				name: "jump-to-date-field",
				className: rO.picker_input,
				children: /* @__PURE__ */ D(De, {
					ref: f,
					id: c,
					type: "date",
					"aria-label": s("room|jump_to_date_prompt"),
					onInput: h,
					onKeyDown: m,
					value: l,
					max: kf(a),
					className: rO.picker_input_date
				})
			}), /* @__PURE__ */ D(Ee, {
				ref: p,
				className: rO.picker_button,
				type: "submit",
				kind: "primary",
				size: "md",
				onKeyDown: (e) => {
					e.key === "Tab" && (e.shiftKey ? (e.preventDefault(), f.current?.focus()) : r?.()), (e.key == "Enter" || e.key == " " || e.key == "Spacebar") && (e.preventDefault(), g());
				},
				children: s("action|go")
			})]
		})
	});
}, aO = {
	picker_menu: "_picker_menu_1p13c_8",
	picker_menu_item: "_picker_menu_item_1p13c_22",
	picker_separator: "_picker_separator_1p13c_26"
}, oO = ({ vm: e, open: t, trigger: n, onOpenChange: r }) => {
	let i = B(), { translate: a } = B(), o = w(null);
	return /* @__PURE__ */ O(ye, {
		open: t,
		onOpenChange: (e) => {
			r?.(e);
		},
		title: a("room|jump_to_date"),
		showTitle: !1,
		trigger: n,
		align: "start",
		className: aO.picker_menu,
		children: [
			/* @__PURE__ */ D(N, {
				label: Kg(nO(i).format(-1, "week")),
				onSelect: () => e.onLastWeekPicked?.(),
				"data-testid": "jump-to-date-last-week",
				hideChevron: !0,
				className: aO.picker_menu_item
			}),
			/* @__PURE__ */ D(N, {
				label: Kg(nO(i).format(-1, "month")),
				onSelect: () => e.onLastMonthPicked?.(),
				"data-testid": "jump-to-date-last-month",
				hideChevron: !0,
				className: aO.picker_menu_item
			}),
			/* @__PURE__ */ D(N, {
				label: a("room|jump_to_date_beginning"),
				onSelect: () => e.onBeginningPicked?.(),
				"data-testid": "jump-to-date-beginning",
				hideChevron: !0,
				className: aO.picker_menu_item,
				onKeyDown: (e) => {
					e.key === "ArrowDown" && (e.preventDefault(), o.current?.focus());
				}
			}),
			/* @__PURE__ */ D(we, {
				decorative: !0,
				className: aO.picker_separator
			}),
			/* @__PURE__ */ D(iO, {
				vm: e,
				inputRef: o,
				onSubmitted: () => r?.(!1),
				onDismissed: () => r?.(!1)
			})
		]
	});
}, sO = d(function({ label: e, tooltipOpen: t, className: n, ...r }, i) {
	let { translate: a } = B();
	return /* @__PURE__ */ D(Ae, {
		description: a("room|jump_to_date"),
		placement: "right",
		open: t,
		children: /* @__PURE__ */ O(V, {
			ref: i,
			"data-testid": "jump-to-date-separator-button",
			className: n,
			"aria-live": "off",
			"aria-label": a("room|jump_to_date"),
			role: "button",
			tabIndex: 0,
			...r,
			children: [/* @__PURE__ */ D(pe, {
				as: "h2",
				size: "lg",
				"aria-hidden": "true",
				children: e
			}), /* @__PURE__ */ D(US, {})]
		})
	});
});
//#endregion
//#region src/room/timeline/DateSeparatorView/DateSeparatorView.tsx
function cO({ vm: e, className: t }) {
	let { label: n, jumpToEnabled: r } = H(e), [i, a] = T(!1), [o, s] = T(!1), [c, l] = T(!1);
	return r ? /* @__PURE__ */ D(JD, {
		label: n,
		className: (0, z.default)(t),
		role: "none",
		children: /* @__PURE__ */ D(oO, {
			vm: e,
			open: i,
			onOpenChange: (e) => {
				a(e), e && (s(!1), l(!1));
			},
			trigger: /* @__PURE__ */ D(sO, {
				label: n,
				tooltipOpen: !i && (o || c),
				className: KD.content,
				onMouseEnter: () => s(!0),
				onMouseLeave: () => s(!1),
				onFocus: (e) => l(e.currentTarget.matches(":focus-visible")),
				onBlur: () => l(!1)
			})
		})
	}) : /* @__PURE__ */ D(JD, {
		label: n,
		className: (0, z.default)(t),
		children: /* @__PURE__ */ D(V, {
			className: KD.content,
			children: /* @__PURE__ */ D(pe, {
				as: "h2",
				size: "lg",
				"aria-hidden": "true",
				children: n
			})
		})
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+virtual-core@3.19.1_patch_hash=e4a0d401e27388e874fdaee2af4e710c7c9deeb53a4e021b768f6fe78b87b985/node_modules/@tanstack/virtual-core/dist/esm/lazy-measurements.js
function lO(e) {
	return typeof e == "object" ? e.key : e;
}
function uO(e, t) {
	let n = e.length;
	return new Proxy(e, { get(e, r, i) {
		if (typeof r == "string") {
			let i = r.charCodeAt(0);
			if (i >= 48 && i <= 57) {
				let i = +r;
				if (Number.isInteger(i) && i >= 0 && i < n) {
					let n = e[i];
					if (typeof n != "object") {
						let r = t[i * 2];
						n = e[i] = {
							index: i,
							key: n,
							start: r,
							size: t[i * 2 + 1],
							end: r + t[i * 2 + 1],
							lane: 0
						};
					}
					return n;
				}
			}
			if (r === "length") return n;
		}
		return Reflect.get(e, r, i);
	} });
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+virtual-core@3.19.1_patch_hash=e4a0d401e27388e874fdaee2af4e710c7c9deeb53a4e021b768f6fe78b87b985/node_modules/@tanstack/virtual-core/dist/esm/utils.js
function dO(e, t, n) {
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
function fO(e, t) {
	if (e === void 0) throw Error(`Unexpected undefined${t ? `: ${t}` : ""}`);
	return e;
}
var pO = (e, t) => Math.abs(e - t) < 1.01, mO = (e, t, n) => {
	let r;
	return Object.assign(function(...i) {
		e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, i), n);
	}, { cancel: () => {
		e.clearTimeout(r);
	} });
}, hO, gO = () => {
	if (hO !== void 0) return hO;
	if (typeof navigator > "u") return hO = !1;
	if (/iP(hone|od|ad)/.test(navigator.userAgent)) return hO = !0;
	let e = navigator.maxTouchPoints;
	return hO = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, _O = (e) => {
	let { offsetWidth: t, offsetHeight: n } = e;
	return {
		width: t,
		height: n
	};
}, vO = (e) => e, yO = (e) => {
	let t = e.overscan * Math.max(e.lanes ?? 1, 1), n = Math.max(e.startIndex - t, 0), r = Math.min(e.endIndex + t, e.count - 1) - n + 1, i = Array(r);
	for (let e = 0; e < r; e++) i[e] = n + e;
	return i;
}, bO = (e, t) => {
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
	if (i(_O(n)), !r.ResizeObserver) return () => {};
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
			i(_O(n));
		};
		e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(r) : r();
	});
	return a.observe(n, { box: "border-box" }), () => {
		a.unobserve(n);
	};
}, xO = { passive: !0 }, SO = typeof window > "u" || "onscrollend" in window, CO = (e, t, n) => {
	let r = e.scrollElement;
	if (!r) return;
	let i = e.targetWindow;
	if (!i) return;
	let a = e.options.useScrollendEvent && SO, o = 0, s = a ? null : mO(i, () => t(n(r), !1), e.options.isScrollingResetDelay), c = (e) => () => {
		o = n(r), s?.(), t(o, e);
	}, l = c(!0), u = c(!1);
	return r.addEventListener("scroll", l, xO), a && r.addEventListener("scrollend", u, xO), () => {
		r.removeEventListener("scroll", l), a && r.removeEventListener("scrollend", u), s?.cancel();
	};
}, wO = (e, t) => CO(e, t, (t) => {
	let { horizontal: n, isRtl: r } = e.options;
	return n ? t.scrollLeft * (r && -1 || 1) : t.scrollTop;
}), TO = (e, t, n) => {
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
}, EO = (e, { adjustments: t = 0, behavior: n }, r) => {
	var i, a;
	(a = (i = r.scrollElement)?.scrollTo) == null || a.call(i, {
		[r.options.horizontal ? "left" : "top"]: e + t,
		behavior: n
	});
};
function DO(e, t, n, r) {
	if (t === 0) return !1;
	let i = r(0), a = /* @__PURE__ */ new Set(), o = 0;
	for (; o < e;) {
		let e = n(o);
		if (e === i) break;
		a.add(e), o++;
	}
	let s = e - o;
	if (s === 0 || s >= t) return !1;
	for (let e = 0; e < s; e++) if (r(e) !== n(o + e)) return !1;
	for (let e = s; e < t; e++) if (a.has(r(e))) return !1;
	return !0;
}
var OO = class {
	constructor(e) {
		this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this._singleLaneMeasurements = null, this.itemSizeCache = /* @__PURE__ */ new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this._clampedAdjustment = null, this.elementsCache = /* @__PURE__ */ new Map(), this._resizeBatch = null, this.now = () => {
			var e;
			return ((e = this.targetWindow?.performance)?.now)?.call(e) ?? Date.now();
		}, this.observer = /* @__PURE__ */ (() => {
			let e = null, t = () => e || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : e = new this.targetWindow.ResizeObserver((e) => {
				let t = () => {
					let t = { sync: !1 };
					this._resizeBatch = t;
					try {
						e.forEach(n);
					} finally {
						this._resizeBatch = null, t.notify && (this.notify(t.sync), this._retryClampedAdjustment());
					}
				};
				this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(t) : t();
			})), n = (e) => {
				let t = e.target, n = this.indexFromElement(t);
				if (t.isConnected) this.isIndexInRange(n) && this.shouldMeasureDuringScroll(n) && this.resizeItem(n, this.options.measureElement(t, e, this));
				else {
					this.observer.unobserve(t);
					for (let [e, n] of this.elementsCache) if (n === t) {
						this.elementsCache.delete(e);
						break;
					}
				}
			};
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
				getItemKey: vO,
				rangeExtractor: yO,
				onChange: () => {},
				measureElement: TO,
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
				let e = n.count, o = t.count, s = this.getMeasurements(), c = this._singleLaneMeasurements?.items ?? s, l = (e) => lO(c[e]), u = e > 0 ? l(0) : null, d = e > 0 ? l(e - 1) : null;
				if (o !== e || e > 0 && o > 0 && (t.getItemKey(0) !== u || t.getItemKey(o - 1) !== d)) {
					a = !0;
					let c = e > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? s[0] : null, u = t.isValidAnchorItem;
					if (c && u && !u(c)) {
						let e = c.index === 0 ? 1 : -1, t = c.index;
						for (; t >= 0 && t < s.length && s[t] && !u(s[t]);) t += e;
						c = s[t] ?? c;
					}
					c && (r = [c.key, this.getScrollOffset() - c.start]);
					let f = t.followOnAppend === !0 ? "auto" : t.followOnAppend || null;
					f && o > 0 && this.isAtEnd(n.scrollEndThreshold) && (e === 0 || t.getItemKey(o - 1) !== d) && (o > e || DO(e, o, l, t.getItemKey)) && (i = f);
				}
			}
			this.options = t, a && (this.pendingMin = 0, this.itemSizeCacheVersion++);
			let o = !1, s = 0;
			if (r && this.scrollOffset !== null) {
				let [e, t] = r, n = this.getMeasurements(), { count: a, getItemKey: c } = this.options, l = 0;
				for (; l < a && c(l) !== e;) l++;
				if (l < a) {
					let e = n[l];
					if (e) {
						let n = Math.max(0, e.start + t);
						!i && n !== this.scrollOffset && (s = n - this.scrollOffset, this.scrollOffset = n, o = !0);
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
		}, this.maybeNotify = dO(() => (this.calculateRange(), [
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
			this.unsubs.filter(Boolean).forEach((e) => e()), this.unsubs = [], this.observer.disconnect(), this.rafId != null && this.targetWindow && (this.targetWindow.cancelAnimationFrame(this.rafId), this.rafId = null), this.scrollState = null, this.isScrolling = !1, this.scrollDirection = null, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this._clampedAdjustment = null, this.scrollElement = null, this.targetWindow = null;
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
					let t = this.scrollRect === null ? null : this.getSize(), n = t !== null && this.options.anchorTo === "end" && this.scrollState?.behavior !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold;
					if (this.scrollRect = e, n && t > this.getSize()) {
						let e = t - this.getSize();
						this.applyScrollAdjustment(this._clampedAdjustment === null ? Math.min(e, this.getDistanceFromEnd()) : e);
					}
					this.maybeNotify();
				})), this.unsubs.push(this.options.observeElementOffset(this, (e, t) => {
					if (t && this._intendedScrollOffset === null && e === this.scrollOffset) return;
					this._intendedScrollOffset !== null && Math.abs(e - this._intendedScrollOffset) < 1.5 ? e = this._intendedScrollOffset : this.scrollState?.index != null && (this.scrollState.hasReachedTarget || !this.scrollState.startedSmooth) && !pO(e, this.scrollState.lastTargetOffset) && !pO(e, this.getScrollStateTarget(this.scrollState)) && (this._clampedAdjustment === null || Math.abs(e - this._clampedAdjustment.maxAtWrite) >= 1.5) && (this.scrollState = null), this._intendedScrollOffset = null, this.scrollState && (this.scrollState.writtenOffset = null), this._clampedAdjustment !== null && Math.abs(e - this._clampedAdjustment.maxAtWrite) >= 1.5 && (this._clampedAdjustment = null), this.scrollAdjustments = 0;
					let n = this.getScrollOffset();
					this.scrollDirection = t ? n === e ? this.scrollDirection : n < e ? "forward" : "backward" : null, this.scrollOffset = e, this.isScrolling = t, this._flushIosDeferredIfReady(), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
				})), "addEventListener" in this.scrollElement) {
					let e = this.scrollElement, t = () => {
						this._iosTouching = !0, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
					}, n = () => {
						this._iosTouching = !1, gO() && this.targetWindow != null && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
							this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
						}, 150));
					};
					e.addEventListener("touchstart", t, xO), e.addEventListener("touchend", n, xO), this.unsubs.push(() => {
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
				e !== null && !r && (gO() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? i !== 0 && (this._iosDeferredAdjustment += i) : this.scrollState?.behavior === "smooth" && !pO(this.getScrollOffset() - i, this.scrollState.lastTargetOffset) || this._scrollToOffset(this.getScrollOffset(), {
					adjustments: void 0,
					behavior: void 0
				})), r && this.scrollToEnd({ behavior: r });
			}
			this._retryClampedAdjustment();
		}, this._retryClampedAdjustment = () => {
			if (this._clampedAdjustment === null || !this.scrollElement || !this.options.enabled) return;
			let { target: e, maxAtWrite: t } = this._clampedAdjustment, n = this.getMaxScrollOffset();
			n > t + .5 && (this._clampedAdjustment = e > n + .5 ? {
				target: e,
				maxAtWrite: n
			} : null, this._scrollToOffset(e, {
				adjustments: void 0,
				behavior: void 0
			}));
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
		}, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getMeasurementOptions = dO(() => [
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
		}), { key: !1 }), this.isIndexInRange = (e) => e >= 0 && e < this.options.count, this.getMeasurements = dO(() => [this.getMeasurementOptions(), this.itemSizeCacheVersion], ({ count: e, paddingStart: t, scrollMargin: n, getItemKey: r, enabled: i, lanes: a, laneAssignmentMode: o, gap: s }, c) => {
			let l = this.itemSizeCache;
			if (!i) return this.measurementsCache = [], this._singleLaneMeasurements = null, this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
			if (this.laneAssignments.size > e) for (let t of this.laneAssignments.keys()) t >= e && this.laneAssignments.delete(t);
			this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this._singleLaneMeasurements = null, this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((e) => {
				this.itemSizeCache.set(e.key, e.size);
			}));
			let u = this.lanesSettling ? 0 : this.pendingMin ?? 0;
			if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === e && (this.lanesSettling = !1), a === 1) {
				let i = e * 2, a = this._singleLaneMeasurements?.flat;
				if (!a || a.length < i) {
					let e = new Float64Array(i);
					a && u > 0 && e.set(a.subarray(0, u * 2)), a = e;
				}
				let o = u === 0 ? Array(e) : this._singleLaneMeasurements.items.slice(), c;
				if (u === 0) c = t + n;
				else {
					let e = u - 1;
					c = a[e * 2] + a[e * 2 + 1] + s;
				}
				for (let t = u; t < e; t++) {
					let e = r(t);
					o[t] = e;
					let n = l.get(e), i = typeof n == "number" ? n : this.options.estimateSize(t);
					a[t * 2] = c, a[t * 2 + 1] = i, c += i + s;
				}
				this._singleLaneMeasurements = {
					flat: a,
					items: o
				};
				let d = uO(o, a);
				return this.measurementsCache = d, d;
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
		}), this.calculateRange = dO(() => [
			this.getMeasurements(),
			this.getSize(),
			this.getScrollOffset(),
			this.options.lanes
		], (e, t, n, r) => e.length === 0 || t === 0 ? (this.range = null, null) : (this.range = jO(e, t, n, r, r === 1 && this._singleLaneMeasurements !== null ? this._singleLaneMeasurements.flat : null), this.range), {
			key: process.env.NODE_ENV !== "production" && "calculateRange",
			debug: () => this.options.debug
		}), this.getVirtualIndexes = dO(() => {
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
				t,
				this.options.lanes
			];
		}, (e, t, n, r, i, a) => r === null || i === null ? [] : e({
			startIndex: r,
			endIndex: i,
			overscan: t,
			count: n,
			lanes: a
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
			let t = this.indexFromElement(e);
			if (!this.isIndexInRange(t)) return;
			let n = this.options.getItemKey(t), r = this.elementsCache.get(n);
			r !== e && (r && this.observer.unobserve(r), this.observer.observe(e), this.elementsCache.set(n, e)), e.isConnected && (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(t) && this.resizeItem(t, this.options.measureElement(e, void 0, this));
		}, this.resizeItem = (e, t) => {
			var n;
			if (!this.isIndexInRange(e)) return;
			this._resizeBatch?.sync && this.getMeasurements();
			let r, i, a, o = this._singleLaneMeasurements?.flat;
			if (this.options.lanes === 1 && o != null) a = this.options.getItemKey(e), i = o[e * 2], r = o[e * 2 + 1];
			else {
				let t = this.measurementsCache[e];
				if (!t) return;
				a = t.key, i = t.start, r = t.size;
			}
			let s = this.itemSizeCache.get(a) ?? r, c = t - s;
			if (c !== 0) {
				let o = this._intendedScrollOffset ?? this.getScrollOffset() + this.scrollAdjustments, l = this.options.anchorTo === "end" && this.scrollState?.behavior !== "smooth" && this.getTotalSize() - this.getSize() - o <= this.options.scrollEndThreshold, u = l ? this.getTotalSize() : 0, d = o, f = this.itemSizeCache.has(a) ? i + s <= d : i < d, p = this.scrollState?.behavior !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange === void 0 ? f : this.shouldAdjustScrollPositionOnItemSizeChange(this.measurementsCache[e] ?? {
					index: e,
					key: a,
					start: i,
					size: r,
					end: i + r,
					lane: 0
				}, c, this));
				(this.pendingMin === null || e < this.pendingMin) && (this.pendingMin = e), this.itemSizeCache.set(a, t), this.itemSizeCacheVersion++;
				let m = this.scrollState?.writtenOffset != null && !pO(this.scrollState.writtenOffset, this.getScrollOffset() + this.scrollAdjustments), h = !1;
				if (m || (l ? h = this.applyScrollAdjustment(this.getTotalSize() - u) : p && (h = this.applyScrollAdjustment(c))), this._resizeBatch) {
					this._resizeBatch.notify = !0, (n = this._resizeBatch).sync || (n.sync = h);
					return;
				}
				this.notify(h), this._retryClampedAdjustment();
			}
		}, this.getVirtualItems = dO(() => [this.getVirtualIndexes(), this.getMeasurements()], (e, t) => {
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
			let n = this._singleLaneMeasurements?.flat, r = this.options.lanes === 1 && n != null;
			return fO(t[kO(0, t.length - 1, r ? (e) => n[e * 2] : (e) => fO(t[e]).start, e)]);
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
			if (t === "auto") {
				if (i.end >= r + n - this.options.scrollPaddingEnd) t = "end";
				else if (i.start <= r + this.options.scrollPaddingStart) t = "start";
				else return [r, t];
			}
			if (t === "end" && e === this.options.count - 1) {
				let e = this.getMaxScrollOffset(), n = e - this.options.paddingEnd + this.options.scrollPaddingEnd;
				return [Math.max(Math.min(n, e), 0), t];
			}
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
				stableFrames: 0,
				hasReachedTarget: !1,
				startedSmooth: n === "smooth"
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
				stableFrames: 0,
				hasReachedTarget: pO(i, this.getScrollOffset()),
				startedSmooth: n === "smooth"
			}, this._scrollToOffset(i, {
				adjustments: void 0,
				behavior: n
			}), this.scheduleScrollReconcile();
		}, this.scrollBy = (e, { behavior: t = "auto" } = {}) => {
			let n = this.getOffsetForAlignment((this.scrollState?.writtenOffset ?? this.getScrollOffset()) + e, "start"), r = this.now();
			this.scrollState = {
				index: null,
				align: "start",
				behavior: t,
				startedAt: r,
				lastTargetOffset: n,
				stableFrames: 0,
				hasReachedTarget: !1,
				startedSmooth: t === "smooth"
			}, this._scrollToOffset(n, {
				adjustments: void 0,
				behavior: t
			}), this.scheduleScrollReconcile();
		}, this.scrollToEnd = ({ behavior: e = "auto" } = {}) => {
			if (this.options.count > 0) {
				this._iosDeferredAdjustment = 0;
				let t = Math.max(this.getMaxScrollOffset(), 0);
				this.scrollState = {
					index: this.options.count - 1,
					align: "end",
					behavior: e,
					toEnd: !0,
					startedAt: this.now(),
					lastTargetOffset: t,
					stableFrames: 0,
					hasReachedTarget: pO(t, this.getScrollOffset()),
					startedSmooth: e === "smooth"
				}, this._scrollToOffset(t, {
					adjustments: void 0,
					behavior: e
				}), this.scheduleScrollReconcile();
			} else this.scrollToOffset(Math.max(this.getTotalSize() - this.getSize(), 0), { behavior: e });
		}, this.cancelScroll = () => {
			this.rafId != null && this.targetWindow && (this.targetWindow.cancelAnimationFrame(this.rafId), this.rafId = null), this.scrollState = null;
		}, this.getTotalSize = () => {
			let e = this.getMeasurements(), t;
			if (e.length === 0) t = this.options.paddingStart;
			else if (this.options.lanes === 1) {
				let n = e.length - 1, r = this._singleLaneMeasurements?.flat;
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
			this._intendedScrollOffset = e + (t ?? 0), this.scrollState && (this.scrollState.writtenOffset = n === "smooth" ? null : this._intendedScrollOffset), this.options.scrollToFn(e, {
				behavior: n,
				adjustments: t
			}, this);
		}, this.measure = () => {
			this.pendingMin = null, this.itemSizeCache.clear(), this.laneAssignments.clear(), this.itemSizeCacheVersion++, this.notify(!1);
		}, this.setOptions(e);
	}
	applyScrollAdjustment(e, t) {
		if (e === 0) return !1;
		if (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", e), gO() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded)) return this.scrollState?.index ?? (this._iosDeferredAdjustment += e), !1;
		{
			let n = this._intendedScrollOffset ?? this.getScrollOffset(), r = n + this.scrollAdjustments + e, i = this.scrollElement, a = i !== null && ("scrollHeight" in i || "document" in i) ? this.getMaxScrollOffset() : null;
			return this._clampedAdjustment = a !== null && r > a + .5 ? {
				target: r,
				maxAtWrite: a
			} : null, this._scrollToOffset(n, {
				adjustments: this.scrollAdjustments += e,
				behavior: t
			}), this.scrollOffset !== null && (this.scrollOffset = n + this.scrollAdjustments, this.scrollOffset < 0 && (this.scrollOffset = 0), this.scrollAdjustments = 0), !0;
		}
	}
	scheduleScrollReconcile() {
		this.targetWindow ? this.rafId ??= this.targetWindow.requestAnimationFrame(() => {
			this.rafId = null, this.reconcileScroll();
		}) : this.scrollState = null;
	}
	getScrollStateTarget(e) {
		let t = e.toEnd ? [Math.max(this.getMaxScrollOffset(), 0)] : e.index == null ? void 0 : this.getOffsetForIndex(e.index, e.align);
		return t ? t[0] : e.lastTargetOffset;
	}
	reconcileScroll() {
		if (!this.scrollState || !this.scrollElement) return;
		if (this.now() - this.scrollState.startedAt > 5e3) {
			this.scrollState = null;
			return;
		}
		this.getMeasurements();
		let e = this.getScrollStateTarget(this.scrollState), t = this.scrollState.index == null ? 1 : this.options.useAnimationFrameWithResizeObserver ? 3 : 2, n = e !== this.scrollState.lastTargetOffset;
		if (!n && pO(e, this.getScrollOffset())) {
			if (this.scrollState.hasReachedTarget = !0, this.scrollState.stableFrames++, this.scrollState.stableFrames >= t) {
				this.getScrollOffset() !== e && this._scrollToOffset(e, {
					adjustments: void 0,
					behavior: "auto"
				}), this.scrollState = null;
				return;
			}
		} else if (this.scrollState.stableFrames = 0, n) {
			let t = this.getSize() || 600, n = Math.abs(e - this.getScrollOffset()), r = this.scrollState.behavior === "smooth" && n > t;
			this.scrollState.lastTargetOffset = e, r ? this.scrollState.hasReachedTarget = !1 : this.scrollState.behavior = "auto", this._scrollToOffset(e, {
				adjustments: void 0,
				behavior: r ? "smooth" : "auto"
			});
		}
		this.scheduleScrollReconcile();
	}
}, kO = (e, t, n, r) => {
	for (; e <= t;) {
		let i = (e + t) / 2 | 0, a = n(i);
		if (a < r) e = i + 1;
		else if (a > r) t = i - 1;
		else return i;
	}
	return e > 0 ? e - 1 : 0;
};
function AO(e, t, n) {
	let r = 0;
	for (; r <= t;) {
		let i = (r + t) / 2 | 0, a = e[i * 2];
		if (a < n) r = i + 1;
		else if (a > n) t = i - 1;
		else return i;
	}
	return r > 0 ? r - 1 : 0;
}
function jO(e, t, n, r, i) {
	let a = e.length - 1;
	if (e.length <= r) return {
		startIndex: 0,
		endIndex: a
	};
	if (r === 1 && i !== null) {
		let e = AO(i, a, n), r = e, o = n + t;
		for (; r < a && i[r * 2] + i[r * 2 + 1] < o;) r++;
		return {
			startIndex: e,
			endIndex: r
		};
	}
	let o = kO(0, a, (t) => e[t].start, n), s = o;
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
//#region ../../node_modules/.pnpm/@tanstack+react-virtual@3.14.16_react-dom@19.3.0_react@19.3.0/node_modules/@tanstack/react-virtual/dist/esm/index.js
var MO = typeof document < "u" ? a.useLayoutEffect : a.useEffect;
function NO({ useFlushSync: e = !0, directDomUpdates: t = !1, directDomUpdatesMode: n = "transform", ...r }) {
	let i = a.useReducer((e) => e + 1, 0)[1], o = a.useRef({
		enabled: t,
		mode: n,
		container: null,
		lastSize: null,
		lastPositions: /* @__PURE__ */ new WeakMap(),
		prevRange: null
	});
	o.current.enabled = t, o.current.mode = n;
	let s = a.useRef(!1), c = (e) => {
		let t = o.current;
		if (!t.enabled || !t.container) return;
		let n = e.getTotalSize();
		if (n !== t.lastSize) {
			t.lastSize = n;
			let r = e.options.horizontal ? "width" : "height";
			t.container.style[r] = `${n}px`;
		}
	}, l = (e, t, n) => {
		let r = o.current, i = !!e.options.horizontal, a = t.start - e.options.scrollMargin;
		r.lastPositions.get(n) !== a && (r.lastPositions.set(n, a), r.mode === "transform" ? n.style.transform = i ? `translate3d(${a}px, 0, 0)` : `translate3d(0, ${a}px, 0)` : n.style[i ? "left" : "top"] = `${a}px`);
	}, u = (e) => {
		let t = o.current;
		if (t.enabled && t.container) {
			c(e);
			for (let t of e.getVirtualItems()) {
				let n = e.elementsCache.get(t.key);
				n && l(e, t, n);
			}
		}
	}, d = {
		...r,
		onChange: (t, n) => {
			var a;
			let c = o.current, l = !0;
			if (c.enabled) {
				u(t);
				let e = t.range, n = c.prevRange;
				l = !n || n.isScrolling !== t.isScrolling || n.startIndex !== e?.startIndex || n.endIndex !== e?.endIndex, l && (c.prevRange = e ? {
					startIndex: e.startIndex,
					endIndex: e.endIndex,
					isScrolling: t.isScrolling
				} : null);
			}
			l && (e && n && !s.current ? Be(i) : i()), (a = r.onChange) == null || a.call(r, t, n);
		}
	}, [f] = a.useState(() => {
		let e = new OO(d), t = e.measureElement;
		return e.measureElement = (n) => {
			s.current = !0;
			try {
				t(n);
			} finally {
				s.current = !1;
			}
			let r = o.current;
			if (n !== null && r.enabled && r.container) {
				let t = e.measurementsCache[e.indexFromElement(n)];
				t && l(e, t, n);
			}
		}, Object.assign(e, { containerRef: (t) => {
			let n = o.current;
			n.container = t, n.lastSize = null, t !== null && u(e);
		} });
	});
	return f.setOptions(d), MO(() => f._didMount(), []), MO(() => (c(f), f._willUpdate())), MO(() => {
		u(f);
	}), f;
}
function PO(e) {
	return NO({
		observeElementRect: bO,
		observeElementOffset: wO,
		scrollToFn: EO,
		...e
	});
}
//#endregion
//#region src/room/timeline/TimelineView/types.ts
var FO = "backward-loading", IO = "forward-loading", LO = {
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
function RO({ snapshot: e, vm: t, scrollNow: n }) {
	let { translate: r } = B(), i = e.canJumpToReadMarker, a = !e.atLiveEnd || !e.isAtBottom, o = h(() => t.onJumpToReadMarker(n), [t, n]), s = h(() => t.onJumpToLive(n), [t, n]);
	return /* @__PURE__ */ O("div", {
		className: LO.overlay,
		children: [
			i === "above" && /* @__PURE__ */ O("div", {
				className: LO.topUnreadBar,
				children: [/* @__PURE__ */ D(Ae, {
					description: r("room|jump_read_marker"),
					placement: "left",
					children: /* @__PURE__ */ D("button", {
						className: LO.topUnreadBarScrollUp,
						"aria-label": r("room|jump_read_marker"),
						onClick: o,
						type: "button",
						children: /* @__PURE__ */ D(YS, {})
					})
				}), /* @__PURE__ */ D(Ae, {
					description: r("notifications|mark_all_read"),
					placement: "left",
					children: /* @__PURE__ */ D("button", {
						className: LO.topUnreadBarMarkAsRead,
						"aria-label": r("notifications|mark_all_read"),
						onClick: () => t.onMarkAllAsRead(),
						type: "button",
						children: /* @__PURE__ */ D(ZS, {})
					})
				})]
			}),
			i === "below" && /* @__PURE__ */ O("div", {
				className: LO.belowUnreadBar,
				children: [/* @__PURE__ */ D(Ae, {
					description: r("room|jump_read_marker"),
					placement: "left",
					children: /* @__PURE__ */ D("button", {
						className: LO.belowUnreadBarScrollDown,
						"aria-label": r("room|jump_read_marker"),
						onClick: o,
						type: "button",
						children: /* @__PURE__ */ D(US, {})
					})
				}), /* @__PURE__ */ D(Ae, {
					description: r("notifications|mark_all_read"),
					placement: "left",
					children: /* @__PURE__ */ D("button", {
						className: LO.belowUnreadBarMarkAsRead,
						"aria-label": r("notifications|mark_all_read"),
						onClick: () => t.onMarkAllAsRead(),
						type: "button",
						children: /* @__PURE__ */ D(ZS, {})
					})
				})]
			}),
			a && /* @__PURE__ */ O("div", {
				className: (0, z.default)(LO.jumpToBottom, { [LO.highlight]: e.hasHighlights }),
				children: [/* @__PURE__ */ D(Ae, {
					description: r("room|jump_to_bottom_button"),
					placement: "left",
					children: /* @__PURE__ */ D("button", {
						className: LO.jumpToBottomScrollDown,
						"aria-label": r("room|jump_to_bottom_button"),
						onClick: s,
						type: "button",
						children: /* @__PURE__ */ D(US, {})
					})
				}), e.numUnreadMessages > 0 && /* @__PURE__ */ D("div", {
					className: LO.jumpToBottomBadge,
					children: e.numUnreadMessages
				})]
			})
		]
	});
}
var zO = {
	root: "_root_1wp73_8",
	scroller: "_scroller_1wp73_14",
	hidden: "_hidden_1wp73_26",
	list: "_list_1wp73_30",
	tile: "_tile_1wp73_42",
	cover: "_cover_1wp73_52"
}, BO = 48, VO = 16, HO = 4, UO = 1e3;
function WO({ vm: e, renderItem: t }) {
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
		let o = t.scrollOffset ?? 0, s = t.scrollRect?.height ?? 0, c = t.getTotalSize(), l = s > 0 && o + s >= c - HO;
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
	}, [e]), b = PO({
		count: i.length,
		getScrollElement: () => o.current,
		estimateSize: () => BO,
		getItemKey: u,
		overscan: VO,
		anchorTo: "end",
		isValidAnchorItem: d,
		scrollEndThreshold: HO,
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
			n !== void 0 && Math.abs(n[0] - r) <= 1.5 || t - u >= UO ? (f.current = "live", l.current || (l.current = !0, c(!0)), e.onAnchorReached()) : C.current = requestAnimationFrame(d);
		};
		C.current = requestAnimationFrame(d);
	}, [
		i.length,
		b,
		e
	]);
	let ee = w(null);
	x(() => {
		if (f.current !== "live") return;
		let t = r.current.pendingAnchor;
		if (!t) ee.current = null;
		else if (ee.current !== t.targetKey) {
			let n = S(t.targetKey, t.align);
			n !== null && (b.scrollToOffset(n), ee.current = t.targetKey, e.onAnchorReached());
		}
	});
	let te = h((e) => {
		let t = S(e.targetKey, e.align);
		t !== null && b.scrollToOffset(t);
	}, [S, b]), E = b.getVirtualItems();
	return /* @__PURE__ */ O("div", {
		className: zO.root,
		children: [
			/* @__PURE__ */ D("div", {
				ref: o,
				"data-testid": "timeline-scroller",
				tabIndex: 0,
				className: (0, z.default)(zO.scroller, { [zO.hidden]: !s }),
				children: /* @__PURE__ */ D("ol", {
					ref: b.containerRef,
					className: (0, z.default)("mx_TimelineView_list", zO.list),
					role: "list",
					children: E.map((e) => {
						let n = i[e.index];
						return n ? /* @__PURE__ */ D("li", {
							className: (0, z.default)("mx_TimelineView_tile", zO.tile),
							"data-index": e.index,
							"data-key": n.key,
							ref: b.measureElement,
							children: t(n)
						}, e.key) : null;
					})
				})
			}),
			!s && /* @__PURE__ */ D("div", {
				className: zO.cover,
				children: /* @__PURE__ */ D(ge, { size: 32 })
			}),
			s && /* @__PURE__ */ D(RO, {
				snapshot: n,
				vm: e,
				scrollNow: te
			})
		]
	});
}
var GO = {
	toolbar: "_toolbar_1ksun_8",
	toolbar_item: "_toolbar_item_1ksun_14"
};
//#endregion
//#region src/room/timeline/event-tile/actions/ActionBarView/ActionBarButton.tsx
function KO({ presentation: e, buttonRef: t, label: n, onActivate: r, icon: i, disabled: a, ariaPressed: o, ariaExpanded: s, tooltipDescription: c, tooltipCaption: l }) {
	let u = e === "icon", [d, f, p] = uS(), m = w(null), h = ED([
		t,
		m,
		a ? null : p
	]), g = a || !f ? -1 : 0;
	return x(() => {
		m.current && (m.current.tabIndex = g);
	}, [g]), /* @__PURE__ */ D(Ae, {
		description: c ?? n,
		caption: l,
		placement: "top",
		children: /* @__PURE__ */ D(A, {
			"data-presentation": e,
			ref: h,
			kind: "tertiary",
			size: "md",
			iconOnly: u,
			"aria-label": n,
			"aria-pressed": o,
			"aria-expanded": s,
			disabled: a,
			onClick: (e) => {
				e.stopPropagation(), r?.(e.currentTarget);
			},
			onContextMenu: (e) => {
				e.preventDefault(), e.stopPropagation(), r?.(e.currentTarget);
			},
			onFocus: a ? void 0 : d,
			className: GO.toolbar_item,
			Icon: u ? i : void 0,
			children: u ? void 0 : n
		})
	});
}
//#endregion
//#region src/room/timeline/event-tile/actions/ActionBarView/ActionBarView.tsx
var qO = /* @__PURE__ */ function(e) {
	return e.Cancel = "cancel", e.CopyLink = "copyLink", e.Download = "download", e.Edit = "edit", e.Expand = "expand", e.Hide = "hide", e.Options = "options", e.Pin = "pin", e.React = "react", e.Remove = "remove", e.Reply = "reply", e.ReplyInThread = "replyInThread", e.Resend = "resend", e.ViewInRoom = "viewInRoom", e.ViewSource = "viewSource", e;
}({});
function JO({ vm: e, className: t }) {
	let { translate: n } = B(), { actions: r, presentation: i = "icon", isThreadReplyAllowed: a, isDownloadEncrypted: o, isDownloadLoading: s, isPinned: c, isQuoteExpanded: l, downloadScanState: u } = H(e), d = w({}), f = S(() => Object.fromEntries(Object.values(qO).map((e) => [e, (t) => {
		d.current[e] = t;
	}])), []), p = {};
	p.edit = /* @__PURE__ */ D(KO, {
		presentation: i,
		buttonRef: f.edit,
		label: n("action|edit"),
		onActivate: e.onEditClick,
		icon: hC
	}, "edit");
	let m = n(c ? "action|unpin" : "action|pin");
	p.pin = /* @__PURE__ */ D(KO, {
		presentation: i,
		buttonRef: f.pin,
		label: m,
		onActivate: e.onPinClick,
		icon: c ? Vw : pw,
		ariaPressed: c
	}, "pin"), p.cancel = /* @__PURE__ */ D(KO, {
		presentation: i,
		buttonRef: f.cancel,
		label: n("action|delete"),
		onActivate: e.onCancelClick,
		icon: rC
	}, "cancel"), p.copyLink = /* @__PURE__ */ D(KO, {
		presentation: i,
		buttonRef: f.copyLink,
		label: n("timeline|mab|copy_link_thread"),
		onActivate: e.onCopyLinkClick,
		icon: GC
	}, "copyLink"), p.reply = /* @__PURE__ */ D(KO, {
		presentation: i,
		buttonRef: f.reply,
		label: n("action|reply"),
		onActivate: e.onReplyClick,
		icon: Cw
	}, "reply"), p.react = /* @__PURE__ */ D(KO, {
		presentation: i,
		buttonRef: f.react,
		label: n("action|react"),
		onActivate: e.onReactionsClick,
		icon: yw
	}, "react");
	let g = n("action|download");
	s && (g = n(o ? "timeline|download_action_decrypting" : "timeline|download_action_downloading")), p.download = /* @__PURE__ */ D(KO, {
		presentation: i,
		buttonRef: f.download,
		label: g,
		onActivate: e.onDownloadClick,
		icon: s || u === "scanning" ? ge : u === "unsafe" ? NS : dC,
		disabled: s || u === "unsafe"
	}, "download"), p.hide = /* @__PURE__ */ D(KO, {
		presentation: i,
		buttonRef: f.hide,
		label: n("action|hide"),
		onActivate: e.onHideClick,
		icon: $w
	}, "hide");
	let _ = n(a ? "action|reply_in_thread" : "threads|error_start_thread_existing_relation");
	p.replyInThread = /* @__PURE__ */ D(KO, {
		presentation: i,
		buttonRef: f.replyInThread,
		label: n("action|reply_in_thread"),
		tooltipDescription: _,
		onActivate: e.onReplyInThreadClick,
		icon: zw,
		disabled: !a
	}, "replyInThread"), p.resend = /* @__PURE__ */ D(KO, {
		presentation: i,
		buttonRef: f.resend,
		label: n("action|retry"),
		onActivate: e.onResendClick,
		icon: Tw
	}, "resend");
	let v = n(l ? "timeline|mab|collapse_reply_chain" : "timeline|mab|expand_reply_chain");
	p.expand = /* @__PURE__ */ D(KO, {
		presentation: i,
		buttonRef: f.expand,
		label: v,
		tooltipCaption: `${n("keyboard|shift")} + ${n("action|click")}`,
		onActivate: e.onToggleThreadExpanded,
		icon: l ? tC : TC,
		ariaExpanded: l
	}, "expand"), p.options = /* @__PURE__ */ D(KO, {
		presentation: i,
		buttonRef: f.options,
		label: n("common|options"),
		onActivate: e.onOptionsClick,
		icon: lw
	}, "options"), p.remove = /* @__PURE__ */ D(KO, {
		presentation: i,
		buttonRef: f.remove,
		label: n("action|remove"),
		onActivate: e.onRemoveClick,
		icon: rC
	}, "remove"), p.viewInRoom = /* @__PURE__ */ D(KO, {
		presentation: i,
		buttonRef: f.viewInRoom,
		label: n("timeline|mab|view_in_room"),
		onActivate: e.onViewInRoomClick,
		icon: tT
	}, "viewInRoom"), p.viewSource = /* @__PURE__ */ D(KO, {
		presentation: i,
		buttonRef: f.viewSource,
		label: n("action|view_source"),
		onActivate: e.onViewSourceClick,
		icon: VC
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
	return b.length === 0 ? null : /* @__PURE__ */ D(lS, {
		handleLeftRight: !0,
		handleHomeEnd: !0,
		handleLoop: !0,
		children: ({ onKeyDownHandler: e }) => /* @__PURE__ */ D(V, {
			display: "inline-flex",
			direction: "row",
			role: "toolbar",
			"aria-label": n("timeline|mab|label"),
			"aria-live": "off",
			onKeyDown: e,
			className: (0, z.default)(t, GO.toolbar),
			children: b.map((e) => p[e.action])
		})
	}, x);
}
var YO = {
	disambiguatedProfile: "_disambiguatedProfile_1q5ax_8",
	disambiguatedProfile_displayName: "_disambiguatedProfile_displayName_1q5ax_18",
	disambiguatedProfile_mxid: "_disambiguatedProfile_mxid_1q5ax_26",
	userStatus: "_userStatus_1q5ax_32"
};
//#endregion
//#region src/room/timeline/event-tile/EventTileView/DisambiguatedProfile/DisambiguatedProfileView.tsx
function XO({ vm: e, className: t }) {
	let n = lE(), { displayName: r, colorClass: i, displayIdentifier: a, title: o, emphasizeDisplayName: s, userStatus: c } = H(e), l = c && c.emoji, u = (0, z.default)(i, {
		[YO.disambiguatedProfile_displayName]: s,
		mx_DisambiguatedProfile_displayName: s
	}), d = e.onClick ? (t) => {
		(t.key === "Enter" || t.key === " ") && (t.preventDefault(), e.onClick?.(t));
	} : void 0;
	return /* @__PURE__ */ O("div", {
		className: (0, z.default)(t, YO.disambiguatedProfile),
		title: o,
		onClick: e.onClick,
		onKeyDown: d,
		role: e.onClick ? "button" : void 0,
		tabIndex: e.onClick ? 0 : void 0,
		...n,
		children: [
			/* @__PURE__ */ D("span", {
				className: u,
				dir: "auto",
				children: r
			}),
			c && /* @__PURE__ */ D(Ae, {
				description: c.text,
				maxWidth: "30ch",
				maxLines: 1,
				children: /* @__PURE__ */ D(P, {
					as: "span",
					size: "md",
					className: (0, z.default)("mx_DisambiguatedProfile_userStatus", YO.userStatus),
					children: l
				})
			}),
			a && /* @__PURE__ */ D("span", {
				className: (0, z.default)("mx_DisambiguatedProfile_mxid", YO.disambiguatedProfile_mxid),
				children: a
			})
		]
	});
}
var ZO = {
	e2ePadlock: "_e2ePadlock_1hynz_8",
	normal: "_normal_1hynz_21",
	decryptionFailure: "_decryptionFailure_1hynz_22",
	warning: "_warning_1hynz_26"
}, QO = /* @__PURE__ */ function(e) {
	return e.Normal = "normal", e.Warning = "warning", e.DecryptionFailure = "decryption_failure", e;
}({}), $O = {
	normal: /* @__PURE__ */ D(zC, {}),
	warning: /* @__PURE__ */ D(yC, {}),
	decryption_failure: /* @__PURE__ */ D(yC, {})
}, ek = {
	normal: ZO.normal,
	warning: ZO.warning,
	decryption_failure: ZO.decryptionFailure
};
function tk({ icon: e, title: t, className: n }) {
	return /* @__PURE__ */ D(Ae, {
		label: t,
		isTriggerInteractive: !0,
		children: /* @__PURE__ */ D("div", {
			"data-testid": "e2e-padlock",
			className: (0, z.default)(ZO.e2ePadlock, ek[e], n),
			role: "img",
			tabIndex: 0,
			"aria-label": U("timeline|e2e_state"),
			children: $O[e]
		})
	});
}
//#endregion
//#region src/room/timeline/event-tile/EventTileView/E2eMessageSharedIcon/E2eMessageSharedIconView.tsx
function nk({ vm: e, className: t }) {
	let { displayName: n, userId: r } = H(e), i = U("timeline|message_shared_by", {
		displayName: n,
		userId: r
	});
	return /* @__PURE__ */ D(tk, {
		className: t,
		icon: QO.Normal,
		title: i
	});
}
var rk = { content: "_content_ufv8a_8" }, ik = {
	container: "_container_1mzk4_8",
	title: "_title_1mzk4_34",
	subtitle: "_subtitle_1mzk4_35"
};
//#endregion
//#region src/room/timeline/event-tile/EventTileView/EventTileBubble/EventTileBubble.tsx
function ak({ icon: e, title: t, subtitle: n, className: r, children: i, ref: a }) {
	return /* @__PURE__ */ O("div", {
		className: (0, z.default)(ik.container, r),
		ref: a,
		children: [
			e,
			/* @__PURE__ */ D("div", {
				className: ik.title,
				children: t
			}),
			n && /* @__PURE__ */ D("div", {
				className: ik.subtitle,
				children: n
			}),
			i
		]
	});
}
//#endregion
//#region src/room/timeline/event-tile/EventTileView/EncryptionEventView/EncryptionEventView.tsx
var ok = /* @__PURE__ */ function(e) {
	return e.CHANGED = "CHANGED", e.DISABLE_ATTEMPT = "DISABLE_ATTEMPT", e.ENABLED = "ENABLED", e.ENABLED_DM = "ENABLED_DM", e.ENABLED_LOCAL = "ENABLED_LOCAL", e.UNSUPPORTED = "UNSUPPORTED", e;
}({});
function sk({ vm: e, ref: t, className: n }) {
	let { translate: r } = B(), { state: i, encryptedStateEvents: a, userName: o, timestamp: s } = H(e), c = /* @__PURE__ */ D(qC, { "data-state": "supported" }), l = r(a ? "common|state_encryption_enabled" : "common|encryption_enabled"), u = "";
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
		default: c = /* @__PURE__ */ D(yC, { "data-state": "unsupported" }), l = r("timeline|m.room.encryption|disabled"), u = r("timeline|m.room.encryption|unsupported");
	}
	return /* @__PURE__ */ D(ak, {
		icon: c,
		className: (0, z.default)(n, rk.content),
		title: l,
		subtitle: u,
		ref: t,
		children: s
	});
}
var ck = { eventPreview: "_eventPreview_w0s50_8" };
//#endregion
//#region src/room/timeline/event-tile/EventTileView/EventPreviewView/EventPreviewView.tsx
function lk({ vm: e, className: t, ...n }) {
	let { isVisible: r, previewContent: i, previewTooltip: a } = H(e);
	if (!r || !i) return /* @__PURE__ */ D(E, {});
	let o = /* @__PURE__ */ D("span", {
		...n,
		className: (0, z.default)("mx_EventPreview", ck.eventPreview, t),
		children: i
	});
	return a ? /* @__PURE__ */ D(Ae, {
		description: a,
		children: o
	}) : o;
}
var G = {
	root: "_root_t6spj_9",
	line: "_line_t6spj_79",
	senderDetails: "_senderDetails_t6spj_85",
	details: "_details_t6spj_91",
	slotActionBar: "_slotActionBar_t6spj_102",
	slotAvatar: "_slotAvatar_t6spj_103",
	slotBody: "_slotBody_t6spj_104",
	slotContextMenu: "_slotContextMenu_t6spj_105",
	slotFooter: "_slotFooter_t6spj_106",
	slotNotificationBadge: "_slotNotificationBadge_t6spj_107",
	slotNotificationRoomLabel: "_slotNotificationRoomLabel_t6spj_108",
	slotPadlock: "_slotPadlock_t6spj_109",
	slotReceipt: "_slotReceipt_t6spj_110",
	slotReplyChain: "_slotReplyChain_t6spj_111",
	slotSender: "_slotSender_t6spj_112",
	slotThreadInfo: "_slotThreadInfo_t6spj_113",
	slotTimestamp: "_slotTimestamp_t6spj_114",
	stateContinuation: "_stateContinuation_t6spj_174",
	stateEditing: "_stateEditing_t6spj_178",
	stateInfo: "_stateInfo_t6spj_182",
	stateContextual: "_stateContextual_t6spj_188",
	statePreviewClamped: "_statePreviewClamped_t6spj_192",
	layoutGroup: "_layoutGroup_t6spj_202",
	shapeCard: "_shapeCard_t6spj_222",
	lineMedia: "_lineMedia_t6spj_222",
	stateHasReply: "_stateHasReply_t6spj_287",
	stateHighlighted: "_stateHighlighted_t6spj_312",
	stateSelected: "_stateSelected_t6spj_316",
	stateActionBarFocused: "_stateActionBarFocused_t6spj_318",
	hasReceiptSlot: "_hasReceiptSlot_t6spj_328",
	stateBubbleContainer: "_stateBubbleContainer_t6spj_375",
	densityCompact: "_densityCompact_t6spj_402",
	stateEmote: "_stateEmote_t6spj_440",
	layoutIrc: "_layoutIrc_t6spj_479",
	layoutBubble: "_layoutBubble_t6spj_713",
	lineImage: "_lineImage_t6spj_774",
	lineSticker: "_lineSticker_t6spj_783",
	stateLeftAlignedBubble: "_stateLeftAlignedBubble_t6spj_791",
	stateOwnEvent: "_stateOwnEvent_t6spj_912",
	stateLastInSection: "_stateLastInSection_t6spj_1005",
	stateNoBubble: "_stateNoBubble_t6spj_1024",
	lineEmote: "_lineEmote_t6spj_1029",
	stateNoSender: "_stateNoSender_t6spj_1046",
	stateAlignedBetweenBubbles: "_stateAlignedBetweenBubbles_t6spj_1092",
	shapeThread: "_shapeThread_t6spj_1173",
	stateEncryptionFailure: "_stateEncryptionFailure_t6spj_1180",
	shapeThreadsList: "_shapeThreadsList_t6spj_1445",
	shapeNotification: "_shapeNotification_t6spj_1446",
	shapeSearch: "_shapeSearch_t6spj_1571",
	shapeFile: "_shapeFile_t6spj_1764",
	senderDetailsLink: "_senderDetailsLink_t6spj_1777"
};
//#endregion
//#region src/room/timeline/event-tile/EventTileView/EventTileView.tsx
function uk({ root: e, line: t, slots: n, classNames: r, refs: i, onMouseEnter: a, onMouseLeave: s, onFocus: c, onBlur: l, onClick: u, onContextMenu: d, onPermalinkClick: f, onPermalinkContextMenu: p }) {
	let m = e.as ?? "li", { layout: h, density: g } = cE(), _ = (e) => e != null && typeof e != "boolean", v = (e, t = n[e]) => {
		if (!_(t)) return null;
		if (e === "contextMenu") return /* @__PURE__ */ D(o.Fragment, { children: t }, e);
		let { style: i, className: a } = {
			avatar: {
				style: G.slotAvatar,
				className: "slotAvatar"
			},
			sender: {
				style: G.slotSender,
				className: "slotSender"
			},
			body: {
				style: G.slotBody,
				className: "slotBody"
			},
			timestamp: {
				style: G.slotTimestamp,
				className: "slotTimestamp"
			},
			padlock: {
				style: G.slotPadlock,
				className: "slotPadlock"
			},
			replyChain: {
				style: G.slotReplyChain,
				className: "slotReplyChain"
			},
			actionBar: {
				style: G.slotActionBar,
				className: "slotActionBar"
			},
			footer: {
				style: G.slotFooter,
				className: "slotFooter"
			},
			threadInfo: {
				style: G.slotThreadInfo,
				className: "slotThreadInfo"
			},
			receipt: {
				style: G.slotReceipt,
				className: "slotReceipt"
			},
			roomAvatar: {
				style: G.slotAvatar,
				className: "slotAvatar"
			},
			notificationRoomLabel: {
				style: G.slotNotificationRoomLabel,
				className: "slotNotificationRoomLabel"
			},
			notificationBadge: {
				style: G.slotNotificationBadge,
				className: "slotNotificationBadge"
			},
			contextMenu: {
				style: G.slotContextMenu,
				className: "slotContextMenu"
			}
		}[e];
		return /* @__PURE__ */ D("div", {
			"data-testid": `event-tile-slot-${e}`,
			className: (0, z.default)(i, r?.[a]),
			children: t
		}, e);
	}, y = (...e) => e.map((e) => v(e)), b = _(n.receipt), x = (0, z.default)(G.line, r?.line, {
		[G.lineMedia]: t?.media,
		[G.lineSticker]: t?.sticker,
		[G.lineEmote]: t?.emote,
		[G.lineImage]: t?.image
	}), S = (t, n, o) => /* @__PURE__ */ D(m, {
		ref: i?.root,
		className: (0, z.default)(G.root, r?.root, {
			[G.stateOwnEvent]: e.state.isOwnEvent,
			[G.hasReceiptSlot]: b,
			[G.stateInfo]: e.state?.info,
			[G.stateBubbleContainer]: e.state?.bubbleContainer,
			[G.stateLeftAlignedBubble]: e.state?.leftAlignedBubble,
			[G.stateAlignedBetweenBubbles]: e.state?.alignedBetweenBubbles,
			[G.stateNoBubble]: e.state?.noBubble,
			[G.stateNoSender]: e.state?.noSender,
			[G.stateEncryptionFailure]: e.state?.encryptionFailure,
			[G.stateEmote]: e.state?.emote,
			[G.stateHasReply]: e.state?.hasReply,
			[G.stateHighlighted]: e.state?.highlighted,
			[G.stateSelected]: e.state?.selected,
			[G.stateEditing]: e.state?.editing,
			[G.stateContinuation]: e.state?.continuation,
			[G.stateLastInSection]: e.state?.lastInSection,
			[G.stateContextual]: e.state?.contextual,
			[G.stateActionBarFocused]: e.state?.actionBarFocused,
			[G.statePreviewClamped]: e.state?.previewClamped,
			[G.densityCompact]: g === "compact",
			[G.layoutGroup]: h === "group",
			[G.layoutBubble]: h === "bubble",
			[G.layoutIrc]: h === "irc",
			[G.shapeThread]: e.shape === "Thread",
			[G.shapeThreadsList]: e.shape === "ThreadsList",
			[G.shapeCard]: e.shape === "Card",
			[G.shapeSearch]: e.shape === "Search",
			[G.shapeFile]: e.shape === "File",
			[G.shapeNotification]: e.shape === "Notification"
		}),
		"aria-live": e.ariaLive,
		"aria-atomic": !0,
		"data-scroll-tokens": e.scrollToken,
		"data-event-id": e.eventId,
		"data-testid": "event-tile",
		tabIndex: o,
		onMouseEnter: a,
		onMouseLeave: s,
		onFocus: c,
		onBlur: l,
		onClick: n,
		children: t
	});
	return e.shape === "Thread" ? S(/* @__PURE__ */ O(E, { children: [
		/* @__PURE__ */ D("div", {
			className: (0, z.default)(G.senderDetails, r?.senderDetails),
			children: y("avatar", "sender")
		}),
		/* @__PURE__ */ D("div", {
			id: e.id,
			"data-testid": "event-tile-line",
			className: x,
			onContextMenu: d,
			children: y("contextMenu", "replyChain", "body", "actionBar", "timestamp", "receipt")
		}),
		v("footer")
	] }), void 0) : e.shape === "Notification" ? S(/* @__PURE__ */ O(E, { children: [
		/* @__PURE__ */ D("div", {
			className: (0, z.default)(G.details, r?.details),
			children: y("sender", "notificationRoomLabel", "timestamp", "notificationBadge")
		}),
		n.roomAvatar ? v("roomAvatar") : v("avatar"),
		/* @__PURE__ */ D("div", {
			id: e.id,
			"data-testid": "event-tile-line",
			className: x,
			children: y("body", "threadInfo")
		}),
		v("receipt")
	] }), u, -1) : e.shape === "ThreadsList" ? S(/* @__PURE__ */ O(E, { children: [
		/* @__PURE__ */ D("div", {
			className: (0, z.default)(G.details, r?.details),
			children: y("sender", "notificationRoomLabel", "timestamp", "notificationBadge")
		}),
		v("avatar"),
		/* @__PURE__ */ D("div", {
			id: e.id,
			"data-testid": "event-tile-line",
			className: x,
			children: y("body", "threadInfo")
		}),
		v("actionBar"),
		v("receipt")
	] }), u, -1) : e.shape === "File" ? S(/* @__PURE__ */ O(E, { children: [/* @__PURE__ */ D("a", {
		className: (0, z.default)(G.senderDetailsLink, r?.senderDetailsLink),
		href: e.permalink ?? "#",
		onClick: f,
		children: /* @__PURE__ */ D("div", {
			className: (0, z.default)(G.senderDetails, r?.senderDetails),
			onContextMenu: p,
			children: y("avatar", "sender", "timestamp")
		})
	}), /* @__PURE__ */ D("div", {
		id: e.id,
		"data-testid": "event-tile-line",
		className: x,
		onContextMenu: d,
		children: y("contextMenu", "body")
	})] }), void 0) : S(h === "irc" ? /* @__PURE__ */ O(E, { children: [
		y("timestamp", "padlock", "avatar", "sender"),
		/* @__PURE__ */ D("div", {
			id: e.id,
			"data-testid": "event-tile-line",
			className: x,
			onContextMenu: d,
			children: y("contextMenu", "replyChain", "body", "actionBar", "footer", "threadInfo")
		}),
		v("receipt")
	] }) : /* @__PURE__ */ O(E, { children: [
		y("sender", "avatar"),
		/* @__PURE__ */ D("div", {
			id: e.id,
			"data-testid": "event-tile-line",
			className: x,
			onContextMenu: d,
			children: y("contextMenu", "timestamp", "padlock", "replyChain", "body", "actionBar")
		}),
		y("footer", "threadInfo", "receipt")
	] }), void 0, -1);
}
var dk = {
	container: "_container_1opqj_8",
	title: "_title_1opqj_20",
	time: "_time_1opqj_25",
	icon: "_icon_1opqj_30"
};
//#endregion
//#region src/room/timeline/event-tile/call/tombstone/room/RoomTombstoneCallTileView.tsx
function fk({ vm: e, className: t }) {
	let { translate: n } = B(), { timestamp: r } = H(e), i = (0, z.default)(t, dk.container);
	return /* @__PURE__ */ O(V, {
		className: i,
		align: "center",
		gap: "var(--cpd-space-2x)",
		children: [
			/* @__PURE__ */ D(qw, {
				className: dk.icon,
				width: 20,
				height: 20
			}),
			/* @__PURE__ */ D("div", {
				className: dk.title,
				children: n("timeline|call_tile|tombstone|room|title")
			}),
			/* @__PURE__ */ D("div", {
				className: dk.time,
				children: r
			})
		]
	});
}
//#endregion
//#region src/room/timeline/event-tile/call/common.ts
var pk = /* @__PURE__ */ function(e) {
	return e.Voice = "voice", e.Video = "video", e;
}({}), mk = /* @__PURE__ */ function(e) {
	return e.Incoming = "Incoming", e.Outgoing = "Outgoing", e;
}({});
//#endregion
//#region src/room/timeline/event-tile/call/tombstone/dm/DmTombstoneCallTileView.tsx
function hk(e, t) {
	let n = t ? qw : Yw, r = t ? rT : aT;
	switch (e) {
		case pk.Video: return /* @__PURE__ */ D(n, {
			className: dk.icon,
			width: 20,
			height: 20
		});
		case pk.Voice: return /* @__PURE__ */ D(r, {
			className: dk.icon,
			width: 20,
			height: 20
		});
	}
}
function gk({ vm: e, className: t }) {
	let n = H(e), { type: r, timestamp: i, isCallDeclined: a } = n, o = (0, z.default)(t, dk.container);
	return /* @__PURE__ */ O(V, {
		className: o,
		align: "center",
		gap: "var(--cpd-space-2x)",
		children: [
			hk(r, a),
			/* @__PURE__ */ D("div", {
				className: dk.title,
				children: D(a ? vk : _k, { snapshot: n })
			}),
			/* @__PURE__ */ D("div", {
				className: dk.time,
				children: i
			})
		]
	});
}
function _k(e) {
	let { type: t } = e.snapshot, { translate: n } = B();
	return t === pk.Voice ? n("timeline|call_tile|voice_call_title") : n("timeline|call_tile|video_call_title");
}
function vk(e) {
	let { callDirection: t } = e.snapshot, { translate: n } = B();
	return t === mk.Incoming ? n("timeline|call_tile|declined|call_declined_by_us") : n("timeline|call_tile|declined|call_declined");
}
var yk = { container: "_container_122d2_8" };
//#endregion
//#region src/room/timeline/event-tile/call/ongoing/components/TileContainer/TileContainer.tsx
function bk({ children: e }) {
	return /* @__PURE__ */ D(V, {
		direction: "row",
		align: "center",
		className: yk.container,
		children: e
	});
}
var xk = {
	container: "_container_ghpy6_8",
	icon: "_icon_ghpy6_15"
}, Sk = ({ callType: e, classNames: t, height: n, width: r, ...i }) => {
	switch (e) {
		case pk.Video: return /* @__PURE__ */ D(Yw, {
			className: t,
			width: r,
			height: n,
			...i
		});
		case pk.Voice: return /* @__PURE__ */ D(aT, {
			className: t,
			width: r,
			height: n,
			...i
		});
	}
};
//#endregion
//#region src/room/timeline/event-tile/call/ongoing/components/CallIcon/CallIcon.tsx
function Ck(e) {
	return /* @__PURE__ */ D(V, {
		align: "center",
		justify: "center",
		className: xk.container,
		children: /* @__PURE__ */ D(Sk, {
			classNames: xk.icon,
			callType: e.callType,
			height: 20,
			width: 20
		})
	});
}
var wk = {
	title: "_title_11tya_8",
	content: "_content_11tya_19",
	avatar: "_avatar_11tya_26",
	facepile: "_facepile_11tya_30"
}, Tk = {
	subContainer: "_subContainer_lhkzi_8",
	startedTextContainer: "_startedTextContainer_lhkzi_16"
};
//#endregion
//#region src/room/timeline/event-tile/call/ongoing/components/JoinButton/JoinButton.tsx
function Ek(e) {
	return function(t) {
		return /* @__PURE__ */ D(Sk, {
			callType: e,
			...t,
			height: 20,
			width: 20
		});
	};
}
function Dk({ join: e, callType: t, ...n }) {
	let { translate: r } = B();
	return /* @__PURE__ */ D(A, {
		onClick: e,
		Icon: Ek(t),
		size: "md",
		...n,
		children: r("timeline|call_tile|ongoing|common|join_button")
	});
}
var Ok = { container: "_container_q8hft_8" };
//#endregion
//#region src/room/timeline/event-tile/call/ongoing/components/Duration/DurationView.tsx
function kk(e) {
	let { duration: t } = H(e.vm), n = (0, z.default)(Ok.container, e.classNames);
	return /* @__PURE__ */ O("div", {
		className: n,
		children: [
			"(",
			/* @__PURE__ */ D(Af, {
				seconds: t,
				hoursMinLength: 1,
				minutesMinLength: 1,
				className: n
			}),
			")"
		]
	});
}
//#endregion
//#region src/room/timeline/event-tile/call/ongoing/room/RoomOngoingCallTileView.tsx
function Ak(e) {
	let t = H(e.vm), { isJoinable: n, isJoined: r, isCallIgnored: i, callHasOtherParticipants: a, durationViewModel: o } = t, { translate: s } = B();
	return /* @__PURE__ */ D(bk, { children: /* @__PURE__ */ O(V, {
		align: "center",
		gap: "var(--cpd-space-3x)",
		className: wk.content,
		children: [
			/* @__PURE__ */ D(Ck, { callType: pk.Video }),
			/* @__PURE__ */ O(V, {
				direction: "column",
				className: wk.content,
				children: [/* @__PURE__ */ D("div", {
					className: wk.title,
					children: s("timeline|call_tile|ongoing|room|title")
				}), D(a || i ? jk : Mk, { snapshot: t })]
			}),
			/* @__PURE__ */ O(V, {
				align: "center",
				gap: "var(--cpd-space-3x)",
				wrap: "wrap-reverse",
				children: [o && /* @__PURE__ */ D(kk, {
					classNames: "duration",
					vm: o
				}), !r && /* @__PURE__ */ D(Dk, {
					callType: pk.Video,
					disabled: !n,
					join: (t) => {
						e.vm.join(t);
					}
				})]
			})
		]
	}) });
}
function jk({ snapshot: e }) {
	let { facePileViewModel: t, totalParticipants: n } = e, { translate: r } = B();
	return /* @__PURE__ */ O(V, {
		className: Tk.subContainer,
		gap: "6px",
		align: "center",
		children: [/* @__PURE__ */ D(xT, {
			classNames: wk.facepile,
			vm: t
		}), r("timeline|call_tile|ongoing|room|join_count", { count: n })]
	});
}
function Mk({ snapshot: e }) {
	let { memberAvatarViewModel: t, startedByDisplayName: n } = e, { translate: r } = B();
	return /* @__PURE__ */ O(V, {
		className: Tk.subContainer,
		gap: "6px",
		align: "center",
		children: [/* @__PURE__ */ D(lb, {
			classNames: wk.avatar,
			vm: t
		}), /* @__PURE__ */ D("div", {
			className: Tk.startedTextContainer,
			children: r("timeline|call_tile|ongoing|common|call_started_by", { startedByDisplayName: n })
		})]
	});
}
//#endregion
//#region src/room/timeline/event-tile/call/ongoing/dm/DmOngoingCallTileView.tsx
function Nk(e) {
	let t = H(e.vm), { callType: n, callDirection: r, isJoinable: i, isJoined: a, durationViewModel: o } = t, s;
	return s = t.callHasOtherParticipants ? /* @__PURE__ */ D(Ik, { snapshot: t }) : r === mk.Incoming ? /* @__PURE__ */ D(Pk, { snapshot: t }) : /* @__PURE__ */ D(Fk, { snapshot: t }), /* @__PURE__ */ D(bk, { children: /* @__PURE__ */ O(V, {
		align: "center",
		gap: "var(--cpd-space-3x)",
		className: wk.content,
		children: [
			/* @__PURE__ */ D(Ck, { callType: n }),
			/* @__PURE__ */ D(V, {
				gap: "6px",
				align: "center",
				className: wk.content,
				children: s
			}),
			/* @__PURE__ */ O(V, {
				align: "center",
				gap: "var(--cpd-space-3x)",
				wrap: "wrap-reverse",
				children: [o && /* @__PURE__ */ D(kk, {
					classNames: "duration",
					vm: o
				}), !a && /* @__PURE__ */ D(Dk, {
					disabled: !i,
					callType: n,
					join: (t) => e.vm.join(t)
				})]
			})
		]
	}) });
}
function Pk({ snapshot: e }) {
	let { translate: t } = B();
	return /* @__PURE__ */ O(E, { children: [/* @__PURE__ */ D(lb, {
		classNames: wk.avatar,
		vm: e.memberAvatarViewModel
	}), /* @__PURE__ */ D("div", {
		className: wk.title,
		children: t("timeline|call_tile|ongoing|common|call_started_by", { startedByDisplayName: e.startedByDisplayName })
	})] });
}
function Fk({ snapshot: e }) {
	let { translate: t } = B();
	return /* @__PURE__ */ O(E, { children: [/* @__PURE__ */ D(lb, {
		classNames: wk.avatar,
		vm: e.memberAvatarViewModel
	}), /* @__PURE__ */ D("div", {
		className: wk.title,
		children: t("timeline|call_tile|ongoing|dm|call_started")
	})] });
}
function Ik({ snapshot: e }) {
	let { translate: t } = B();
	return /* @__PURE__ */ O(E, { children: [/* @__PURE__ */ D(xT, {
		classNames: wk.facepile,
		vm: e.facePileViewModel
	}), /* @__PURE__ */ D("div", {
		className: wk.title,
		children: t("timeline|call_tile|ongoing|dm|title")
	})] });
}
//#endregion
//#region src/room/timeline/event-tile/call/RootCallTileView.tsx
function Lk({ vm: e }) {
	let { tileType: t, tileViewModel: n } = H(e);
	switch (t) {
		case "ongoing-call-room": return /* @__PURE__ */ D(Ak, { vm: n });
		case "ongoing-call-dm": return /* @__PURE__ */ D(Nk, { vm: n });
		case "tombstone-call-room": return /* @__PURE__ */ D(fk, { vm: n });
		case "tombstone-call-dm": return /* @__PURE__ */ D(gk, { vm: n });
	}
}
//#endregion
//#region src/room/timeline/event-tile/EventTileView/MJitsiWidgetEventView/MJitsiWidgetEventView.tsx
function Rk({ vm: e, className: t, ref: n }) {
	let { isVisible: r, title: i, subtitle: a, timestamp: o } = H(e);
	return r ? /* @__PURE__ */ D(ak, {
		icon: /* @__PURE__ */ D(Yw, { color: "var(--cpd-color-icon-primary)" }),
		className: t,
		title: i,
		subtitle: a || void 0,
		ref: n,
		children: o
	}) : null;
}
var zk = { content: "_content_1o649_8" };
//#endregion
//#region src/room/timeline/event-tile/EventTileView/MKeyVerificationRequestView/MKeyVerificationRequestView.tsx
function Bk({ vm: e, className: t, ref: n }) {
	let { title: r, subtitle: i, timestamp: a } = H(e);
	return /* @__PURE__ */ D(ak, {
		icon: /* @__PURE__ */ D(qC, {}),
		className: (0, z.default)(zk.content, t),
		title: r,
		subtitle: i,
		ref: n,
		children: a
	});
}
var Vk = { pinnedMessageBadge: "_pinnedMessageBadge_10mi2_8" };
//#endregion
//#region src/room/timeline/event-tile/EventTileView/PinnedMessageBadge/PinnedMessageBadge.tsx
function Hk({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ O("div", {
		...n,
		className: (0, z.default)(Vk.pinnedMessageBadge, e),
		children: [/* @__PURE__ */ D(dw, {
			width: "16px",
			height: "16px"
		}), t ?? U("room|pinned_message_badge")]
	});
}
var Uk = {
	root: "_root_1bd6h_8",
	link: "_link_1bd6h_14",
	inline: "_inline_1bd6h_32",
	info: "_info_1bd6h_39",
	sender: "_sender_1bd6h_43",
	avatar: "_avatar_1bd6h_52",
	senderProfile: "_senderProfile_1bd6h_56",
	body: "_body_1bd6h_63"
};
//#endregion
//#region src/room/timeline/event-tile/EventTileView/ReplyTileView/ReplyTileView.tsx
function Wk({ vm: e }) {
	let { href: t, sender: n, inline: r, info: i, body: a } = H(e);
	return /* @__PURE__ */ D(sE, {
		value: aE,
		children: /* @__PURE__ */ D("div", {
			className: (0, z.default)(Uk.root, {
				[Uk.inline]: r,
				[Uk.info]: i
			}),
			"data-testid": "reply-tile",
			children: /* @__PURE__ */ O("a", {
				className: Uk.link,
				href: t,
				onClick: e.onClick,
				children: [n ? /* @__PURE__ */ O("div", {
					className: Uk.sender,
					"data-testid": "reply-tile-sender",
					children: [n.avatarViewModel ? /* @__PURE__ */ D(lb, {
						vm: n.avatarViewModel,
						classNames: Uk.avatar
					}) : null, n.profileViewModel ? /* @__PURE__ */ D(XO, {
						vm: n.profileViewModel,
						className: Uk.senderProfile
					}) : null]
				}) : null, /* @__PURE__ */ D("div", {
					className: Uk.body,
					"data-testid": "reply-tile-body",
					children: a
				})]
			})
		})
	});
}
var Gk = {
	textualEvent: "_textualEvent_1iwcb_8",
	avatarButton: "_avatarButton_1iwcb_21"
};
//#endregion
//#region src/room/timeline/event-tile/EventTileView/RoomAvatarEventView/RoomAvatarEventView.tsx
function Kk({ vm: e, renderAvatar: t, className: n, ref: r }) {
	let i = H(e), a = B().translate, o = lE(), s = (0, z.default)(Gk.textualEvent, n);
	return i.isRemoved ? /* @__PURE__ */ D("div", {
		className: s,
		ref: r,
		...o,
		children: a("timeline|m.room.avatar|removed", { senderDisplayName: i.senderDisplayName })
	}) : /* @__PURE__ */ D("span", {
		className: s,
		ref: r,
		...o,
		children: a("timeline|m.room.avatar|changed_img", { senderDisplayName: i.senderDisplayName }, { img: () => /* @__PURE__ */ D("button", {
			type: "button",
			className: Gk.avatarButton,
			onClick: e.onAvatarClick,
			"aria-label": i.lightboxLabel,
			children: t(i)
		}) })
	});
}
var qk = { textualEvent: "_textualEvent_1rbqb_8" };
//#endregion
//#region src/room/timeline/event-tile/EventTileView/TextualEventView/TextualEventView.tsx
function Jk({ vm: e, className: t }) {
	let n = lE(), r = H(e);
	return /* @__PURE__ */ D("div", {
		className: (0, z.default)(qk.textualEvent, t),
		...n,
		children: r.content
	});
}
var Yk = {
	audioPlayer: "_audioPlayer_etpvh_8",
	mediaInfo: "_mediaInfo_etpvh_12",
	mediaName: "_mediaName_etpvh_17",
	byline: "_byline_etpvh_26",
	clock: "_clock_etpvh_30",
	error: "_error_etpvh_34"
};
//#endregion
//#region src/core/utils/FormattingUtils.ts
function Xk(e, t = 2) {
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
function Zk({ vm: e }) {
	let { translate: t } = B(), { playbackState: n, mediaName: r = t("timeline|m.audio|unnamed_audio"), sizeBytes: i, durationSeconds: a, playedSeconds: o, percentComplete: s, error: c } = H(e), l = i ? `(${Xk(i)})` : null, u = n === "decoding";
	return /* @__PURE__ */ O(E, { children: [/* @__PURE__ */ O(bE, {
		className: Yk.audioPlayer,
		tabIndex: 0,
		onKeyDown: e.onKeyDown,
		"aria-label": t("timeline|m.audio|audio_player"),
		role: "region",
		children: [/* @__PURE__ */ O(V, {
			gap: "var(--cpd-space-2x)",
			align: "center",
			children: [/* @__PURE__ */ D(Rf, {
				tabIndex: -1,
				disabled: u,
				playing: n === "playing",
				togglePlay: e.togglePlay
			}), /* @__PURE__ */ O(V, {
				direction: "column",
				className: Yk.mediaInfo,
				children: [/* @__PURE__ */ D("span", {
					className: Yk.mediaName,
					"data-testid": "audio-player-name",
					children: r
				}), /* @__PURE__ */ O(V, {
					className: Yk.byline,
					gap: "var(--cpd-space-1-5x)",
					children: [/* @__PURE__ */ D(Af, { seconds: a }), l]
				})]
			})]
		}), /* @__PURE__ */ O(V, {
			align: "center",
			gap: "var(--cpd-space-1x)",
			"data-testid": "audio-player-seek",
			children: [/* @__PURE__ */ D(Qy, {
				tabIndex: -1,
				disabled: u,
				value: s,
				onChange: e.onSeekbarChange
			}), /* @__PURE__ */ D(Af, {
				className: Yk.clock,
				seconds: o,
				role: "timer"
			})]
		})]
	}), c && /* @__PURE__ */ D("span", {
		className: Yk.error,
		children: t("timeline|m.audio|error_downloading_audio")
	})] });
}
var Qk = {
	content: "_content_1uqu1_8",
	error: "_error_1uqu1_14",
	icon: "_icon_1uqu1_23"
}, $k = /* @__PURE__ */ function(e) {
	return e.MEGOLM_KEY_WITHHELD_FOR_UNVERIFIED_DEVICE = "MEGOLM_KEY_WITHHELD_FOR_UNVERIFIED_DEVICE", e.HISTORICAL_MESSAGE_NO_KEY_BACKUP = "HISTORICAL_MESSAGE_NO_KEY_BACKUP", e.HISTORICAL_MESSAGE_BACKUP_UNCONFIGURED = "HISTORICAL_MESSAGE_BACKUP_UNCONFIGURED", e.HISTORICAL_MESSAGE_USER_NOT_JOINED = "HISTORICAL_MESSAGE_USER_NOT_JOINED", e.SENDER_IDENTITY_PREVIOUSLY_VERIFIED = "SENDER_IDENTITY_PREVIOUSLY_VERIFIED", e.UNSIGNED_SENDER_DEVICE = "UNSIGNED_SENDER_DEVICE", e.UNABLE_TO_DECRYPT = "UNABLE_TO_DECRYPT", e;
}({});
function eA(e, t, n) {
	let r = e.translate;
	switch (t) {
		case "MEGOLM_KEY_WITHHELD_FOR_UNVERIFIED_DEVICE": return r("timeline|decryption_failure|blocked");
		case "HISTORICAL_MESSAGE_NO_KEY_BACKUP": return r("timeline|decryption_failure|historical_event_no_key_backup");
		case "HISTORICAL_MESSAGE_BACKUP_UNCONFIGURED":
			if (n === !1) return r("timeline|decryption_failure|historical_event_unverified_device");
			break;
		case "HISTORICAL_MESSAGE_USER_NOT_JOINED": return r("timeline|decryption_failure|historical_event_user_not_joined");
		case "SENDER_IDENTITY_PREVIOUSLY_VERIFIED": return /* @__PURE__ */ O("span", { children: [/* @__PURE__ */ D(NS, {
			className: Qk.icon,
			width: "16px",
			height: "16px"
		}), r("timeline|decryption_failure|sender_identity_previously_verified")] });
		case "UNSIGNED_SENDER_DEVICE": return /* @__PURE__ */ O("span", { children: [/* @__PURE__ */ D(NS, {
			className: Qk.icon,
			width: "16px",
			height: "16px"
		}), r("timeline|decryption_failure|sender_unsigned_device")] });
	}
	return r("timeline|decryption_failure|unable_to_decrypt");
}
function tA(e) {
	switch (e) {
		case "SENDER_IDENTITY_PREVIOUSLY_VERIFIED":
		case "UNSIGNED_SENDER_DEVICE": return Qk.error;
	}
	return null;
}
function nA({ vm: e, ref: t, className: n }) {
	let r = B(), { decryptionFailureReason: i, isLocalDeviceVerified: a } = H(e), o = (0, z.default)(Qk.content, tA(i), n);
	return /* @__PURE__ */ D("div", {
		className: o,
		ref: t,
		children: eA(r, i, a)
	});
}
var rA = {
	threadSummary: "_threadSummary_60abi_8",
	content: "_content_60abi_9",
	chevron: "_chevron_60abi_41",
	sender: "_sender_60abi_47",
	repliesAmount: "_repliesAmount_60abi_66",
	avatar: "_avatar_60abi_85",
	threadIcon: "_threadIcon_60abi_90",
	narrow: "_narrow_60abi_117"
};
//#endregion
//#region src/room/timeline/event-tile/EventTileView/ThreadSummary/ThreadSummaryView.tsx
function iA({ vm: e }) {
	let { isVisible: t, avatar: n, showDisplayName: r, senderName: i, previewContent: a, previewTooltip: o } = H(e);
	if (!t || !a) return /* @__PURE__ */ D(E, {});
	let s = /* @__PURE__ */ D("span", {
		className: rA.content,
		children: a
	}), c = n?.className ? `${rA.avatar} ${n.className}` : rA.avatar;
	return /* @__PURE__ */ O(E, { children: [
		n && /* @__PURE__ */ D(ne, {
			id: n.id,
			name: n.name,
			src: n.src,
			title: n.title,
			"aria-label": n.label,
			type: "round",
			size: "24px",
			className: c
		}),
		r && i && /* @__PURE__ */ D("div", {
			className: rA.sender,
			children: i
		}),
		o ? /* @__PURE__ */ D(Ae, {
			description: o,
			children: s
		}) : s
	] });
}
function aA({ vm: e, className: t, type: n = "button", ...r }) {
	let { isVisible: i, replyCountLabel: a, openThreadLabel: o, notificationIndicator: s, narrow: c, previewVm: l } = H(e);
	if (!i) return /* @__PURE__ */ D(E, {});
	let u = [
		rA.threadSummary,
		t,
		c ? rA.narrow : void 0
	].filter(Boolean).join(" ");
	return /* @__PURE__ */ O("button", {
		...r,
		type: n,
		className: u,
		onClick: e.onClick,
		"aria-label": o,
		children: [
			/* @__PURE__ */ D(he, {
				size: "24px",
				indicator: s,
				className: rA.threadIcon,
				children: /* @__PURE__ */ D(Lw, {})
			}),
			/* @__PURE__ */ D("span", {
				className: rA.repliesAmount,
				children: a
			}),
			/* @__PURE__ */ D(iA, { vm: l }),
			/* @__PURE__ */ D("div", {
				className: rA.chevron,
				children: /* @__PURE__ */ D(qS, {})
			})
		]
	});
}
var oA = {
	reactionsRow: "_reactionsRow_9xpzm_8",
	showAllButton: "_showAllButton_9xpzm_16",
	addReactionButton: "_addReactionButton_9xpzm_29",
	addReactionButtonVisible: "_addReactionButtonVisible_9xpzm_53",
	addReactionButtonActive: "_addReactionButtonActive_9xpzm_57",
	addReactionButtonDisabled: "_addReactionButtonDisabled_9xpzm_61"
};
//#endregion
//#region src/room/timeline/event-tile/reactions/ReactionsRow/ReactionsRowView.tsx
function sA({ vm: e, className: t, children: n }) {
	let { ariaLabel: r, isVisible: i, showAllButtonVisible: a, showAllButtonLabel: o, showAddReactionButton: s, addReactionButtonLabel: c, addReactionButtonVisible: l, addReactionButtonActive: u, addReactionButtonDisabled: d } = H(e);
	if (!i) return /* @__PURE__ */ D(E, {});
	let f = (0, z.default)(oA.addReactionButton, {
		[oA.addReactionButtonVisible]: l,
		[oA.addReactionButtonActive]: u,
		[oA.addReactionButtonDisabled]: d
	}), p = e.onAddReactionContextMenu ? (t) => {
		t.preventDefault(), e.onAddReactionContextMenu?.(t);
	} : void 0, m = /* @__PURE__ */ D("button", {
		type: "button",
		className: f,
		"aria-label": c,
		disabled: d,
		onClick: e.onAddReactionClick,
		onContextMenu: p,
		children: /* @__PURE__ */ D(yw, {})
	});
	return /* @__PURE__ */ O("div", {
		className: (0, z.default)(t, oA.reactionsRow),
		role: "toolbar",
		"aria-label": r,
		children: [
			n,
			a && /* @__PURE__ */ D("button", {
				type: "button",
				className: oA.showAllButton,
				onClick: e.onShowAllClick,
				children: o
			}),
			s && /* @__PURE__ */ D(Ae, {
				description: c,
				placement: "right",
				children: m
			})
		]
	});
}
//#endregion
//#region src/room/timeline/event-tile/reactions/ReactionsRowButtonTooltip/ReactionsRowButtonTooltipView.tsx
function cA({ vm: e, children: t }) {
	let { formattedSenders: n, caption: r, tooltipOpen: i } = H(e);
	return n ? /* @__PURE__ */ D(Ae, {
		description: n,
		caption: r,
		placement: "right",
		open: i,
		children: t
	}) : /* @__PURE__ */ D(E, { children: t });
}
var lA = {
	reactionsRowButton: "_reactionsRowButton_5v4c1_8",
	reactionsRowButtonSelected: "_reactionsRowButtonSelected_5v4c1_21",
	reactionsRowButtonDisabled: "_reactionsRowButtonDisabled_5v4c1_26",
	reactionsRowButtonContent: "_reactionsRowButtonContent_5v4c1_30",
	reactionsRowButtonCount: "_reactionsRowButtonCount_5v4c1_38"
};
//#endregion
//#region src/room/timeline/event-tile/reactions/ReactionsRowButton/ReactionsRowButtonView.tsx
function uA({ vm: e }) {
	let t = H(e), { content: n, count: r, className: i, isSelected: a, isDisabled: o, imageSrc: s, imageAlt: c, tooltipVm: l } = t, u = t["aria-label"] ?? t.ariaLabel, d = o ? !0 : void 0, f = (0, z.default)(i, lA.reactionsRowButton, {
		[lA.reactionsRowButtonSelected]: a,
		[lA.reactionsRowButtonDisabled]: o
	}), p = s ? /* @__PURE__ */ D("img", {
		className: lA.reactionsRowButtonContent,
		alt: c ?? "",
		src: s,
		width: "16",
		height: "16"
	}) : /* @__PURE__ */ D("span", {
		className: lA.reactionsRowButtonContent,
		"aria-hidden": "true",
		children: n ?? ""
	});
	return /* @__PURE__ */ D(cA, {
		vm: l,
		children: /* @__PURE__ */ O("button", {
			type: "button",
			className: f,
			tabIndex: 0,
			"aria-label": u,
			"aria-disabled": d,
			onClick: o ? void 0 : e.onClick,
			children: [p, /* @__PURE__ */ D("span", {
				className: lA.reactionsRowButtonCount,
				"aria-hidden": "true",
				children: r
			})]
		})
	});
}
var dA = { content: "_content_1jaux_8" };
//#endregion
//#region src/room/timeline/event-tile/timestamp/MessageTimestampView/MessageTimestampView.tsx
function fA({ vm: e, className: t }) {
	let { translate: n } = B(), { ts: r, tsSentAt: i, tsReceivedAt: a, inhibitTooltip: o, href: s } = H(e), c = (t) => {
		e.onClick && (t.key === "Enter" || t.key === " ") && (t.preventDefault(), e.onClick?.(t));
	}, l = i, u;
	a && a?.length > 0 && (l = n("timeline|message_timestamp_sent_at", { dateTime: l }), u = n("timeline|message_timestamp_received_at", { dateTime: a }));
	let d;
	return d = s ? /* @__PURE__ */ D("a", {
		href: s,
		onClick: e.onClick,
		onKeyDown: c,
		onContextMenu: e.onContextMenu,
		className: (0, z.default)(t, dA.content),
		"aria-live": "off",
		children: r
	}) : /* @__PURE__ */ D("span", {
		onClick: e.onClick,
		onKeyDown: c,
		onContextMenu: e.onContextMenu,
		className: (0, z.default)(t, dA.content),
		role: e.onClick ? "link" : void 0,
		"aria-live": "off",
		tabIndex: e.onClick || !o ? 0 : void 0,
		children: r
	}), o ? d : /* @__PURE__ */ D(Ae, {
		description: l,
		caption: u,
		children: d
	});
}
var pA = {
	container: "_container_b6h8l_1",
	toggleButton: "_toggleButton_b6h8l_17"
}, mA = {
	tile: "_tile_1vd22_1",
	below: "_below_1vd22_9"
}, hA = {
	header: "_header_13lno_1",
	body: "_body_13lno_2",
	leftGroup: "_leftGroup_13lno_11",
	textContent: "_textContent_13lno_27",
	icon: "_icon_13lno_32",
	buttonGroup: "_buttonGroup_13lno_63",
	button: "_button_13lno_63",
	image: "_image_13lno_85",
	video: "_video_13lno_86",
	audio: "_audio_13lno_87",
	bannerVideo: "_bannerVideo_13lno_102",
	bannerImage: "_bannerImage_13lno_103",
	tallBannerVideo: "_tallBannerVideo_13lno_108",
	tallBannerImage: "_tallBannerImage_13lno_109",
	fullVideo: "_fullVideo_13lno_114",
	fullImage: "_fullImage_13lno_115"
}, gA = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", _A = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", vA = "numeric", yA = "ascii", bA = "alpha", xA = "asciinumeric", SA = "alphanumeric", CA = "domain", wA = "emoji", TA = "scheme", EA = "slashscheme", DA = "whitespace";
function OA(e, t) {
	return e in t || (t[e] = []), t[e];
}
function kA(e, t, n) {
	t[vA] && (t[xA] = !0, t[SA] = !0), t[yA] && (t[xA] = !0, t[bA] = !0), t[xA] && (t[SA] = !0), t[bA] && (t[SA] = !0), t[SA] && (t[CA] = !0), t[wA] && (t[CA] = !0);
	for (let r in t) {
		let t = OA(r, n);
		t.indexOf(e) < 0 && t.push(e);
	}
}
function AA(e, t) {
	let n = {};
	for (let r in t) t[r].indexOf(e) >= 0 && (n[r] = !0);
	return n;
}
function jA(e = null) {
	this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
jA.groups = {}, jA.prototype = {
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
		r ||= jA.groups;
		let i;
		return t && t.j ? i = t : (i = new jA(t), n && r && kA(t, n, r)), this.jr.push([e, i]), i;
	},
	ts(e, t, n, r) {
		let i = this, a = e.length;
		if (!a) return i;
		for (let t = 0; t < a - 1; t++) i = i.tt(e[t]);
		return i.tt(e[a - 1], t, n, r);
	},
	tt(e, t, n, r) {
		r ||= jA.groups;
		let i = this;
		if (t && t.j) return i.j[e] = t, t;
		let a = t, o, s = i.go(e);
		return s ? (o = new jA(), Object.assign(o.j, s.j), o.jr.push.apply(o.jr, s.jr), o.jd = s.jd, o.t = s.t) : o = new jA(), a && (r && (o.t && typeof o.t == "string" ? kA(a, Object.assign(AA(o.t, r), n), r) : n && kA(a, n, r)), o.t = a), i.j[e] = o, o;
	}
};
var K = (e, t, n, r, i) => e.ta(t, n, r, i), MA = (e, t, n, r, i) => e.tr(t, n, r, i), NA = (e, t, n, r, i) => e.ts(t, n, r, i), q = (e, t, n, r, i) => e.tt(t, n, r, i), PA = "WORD", FA = "UWORD", IA = "ASCIINUMERICAL", LA = "ALPHANUMERICAL", RA = "LOCALHOST", zA = "TLD", BA = "UTLD", VA = "SCHEME", HA = "SLASH_SCHEME", UA = "NUM", WA = "WS", GA = "NL", KA = "OPENBRACE", qA = "CLOSEBRACE", JA = "OPENBRACKET", YA = "CLOSEBRACKET", XA = "OPENPAREN", ZA = "CLOSEPAREN", QA = "OPENANGLEBRACKET", $A = "CLOSEANGLEBRACKET", ej = "FULLWIDTHLEFTPAREN", tj = "FULLWIDTHRIGHTPAREN", nj = "LEFTCORNERBRACKET", rj = "RIGHTCORNERBRACKET", ij = "LEFTWHITECORNERBRACKET", aj = "RIGHTWHITECORNERBRACKET", oj = "FULLWIDTHLESSTHAN", sj = "FULLWIDTHGREATERTHAN", cj = "AMPERSAND", lj = "APOSTROPHE", uj = "ASTERISK", dj = "AT", fj = "BACKSLASH", pj = "BACKTICK", mj = "CARET", hj = "COLON", gj = "COMMA", _j = "DOLLAR", vj = "DOT", yj = "EQUALS", bj = "EXCLAMATION", xj = "HYPHEN", Sj = "PERCENT", Cj = "PIPE", wj = "PLUS", Tj = "POUND", Ej = "QUERY", Dj = "QUOTE", Oj = "FULLWIDTHMIDDLEDOT", kj = "SEMI", Aj = "SLASH", jj = "TILDE", Mj = "UNDERSCORE", Nj = "EMOJI", Pj = "SYM", Fj = /*#__PURE__*/ Object.freeze({
	__proto__: null,
	ALPHANUMERICAL: LA,
	AMPERSAND: cj,
	APOSTROPHE: lj,
	ASCIINUMERICAL: IA,
	ASTERISK: uj,
	AT: dj,
	BACKSLASH: fj,
	BACKTICK: pj,
	CARET: mj,
	CLOSEANGLEBRACKET: $A,
	CLOSEBRACE: qA,
	CLOSEBRACKET: YA,
	CLOSEPAREN: ZA,
	COLON: hj,
	COMMA: gj,
	DOLLAR: _j,
	DOT: vj,
	EMOJI: Nj,
	EQUALS: yj,
	EXCLAMATION: bj,
	FULLWIDTHGREATERTHAN: sj,
	FULLWIDTHLEFTPAREN: ej,
	FULLWIDTHLESSTHAN: oj,
	FULLWIDTHMIDDLEDOT: Oj,
	FULLWIDTHRIGHTPAREN: tj,
	HYPHEN: xj,
	LEFTCORNERBRACKET: nj,
	LEFTWHITECORNERBRACKET: ij,
	LOCALHOST: RA,
	NL: GA,
	NUM: UA,
	OPENANGLEBRACKET: QA,
	OPENBRACE: KA,
	OPENBRACKET: JA,
	OPENPAREN: XA,
	PERCENT: Sj,
	PIPE: Cj,
	PLUS: wj,
	POUND: Tj,
	QUERY: Ej,
	QUOTE: Dj,
	RIGHTCORNERBRACKET: rj,
	RIGHTWHITECORNERBRACKET: aj,
	SCHEME: VA,
	SEMI: kj,
	SLASH: Aj,
	SLASH_SCHEME: HA,
	SYM: Pj,
	TILDE: jj,
	TLD: zA,
	UNDERSCORE: Mj,
	UTLD: BA,
	UWORD: FA,
	WORD: PA,
	WS: WA
}), Ij = /[a-z]/, Lj = /\p{L}/u, Rj = /\p{Emoji}/u, zj = /\d/, Bj = /\s/, Vj = "\r", Hj = "\n", Uj = "️", Wj = "‍", Gj = "￼", Kj = null, qj = null;
function Jj(e = []) {
	let t = {};
	jA.groups = t;
	let n = new jA();
	Kj ??= Qj(gA), qj ??= Qj(_A), q(n, "'", lj), q(n, "{", KA), q(n, "}", qA), q(n, "[", JA), q(n, "]", YA), q(n, "(", XA), q(n, ")", ZA), q(n, "<", QA), q(n, ">", $A), q(n, "（", ej), q(n, "）", tj), q(n, "「", nj), q(n, "」", rj), q(n, "『", ij), q(n, "』", aj), q(n, "＜", oj), q(n, "＞", sj), q(n, "&", cj), q(n, "*", uj), q(n, "@", dj), q(n, "`", pj), q(n, "^", mj), q(n, ":", hj), q(n, ",", gj), q(n, "$", _j), q(n, ".", vj), q(n, "=", yj), q(n, "!", bj), q(n, "-", xj), q(n, "%", Sj), q(n, "|", Cj), q(n, "+", wj), q(n, "#", Tj), q(n, "?", Ej), q(n, "\"", Dj), q(n, "/", Aj), q(n, ";", kj), q(n, "~", jj), q(n, "_", Mj), q(n, "\\", fj), q(n, "・", Oj);
	let r = MA(n, zj, UA, { [vA]: !0 });
	MA(r, zj, r);
	let i = MA(r, Ij, IA, { [xA]: !0 }), a = MA(r, Lj, LA, { [SA]: !0 }), o = MA(n, Ij, PA, { [yA]: !0 });
	MA(o, zj, i), MA(o, Ij, o), MA(i, zj, i), MA(i, Ij, i);
	let s = MA(n, Lj, FA, { [bA]: !0 });
	MA(s, Ij), MA(s, zj, a), MA(s, Lj, s), MA(a, zj, a), MA(a, Ij), MA(a, Lj, a);
	let c = q(n, Hj, GA, { [DA]: !0 }), l = q(n, Vj, WA, { [DA]: !0 }), u = MA(n, Bj, WA, { [DA]: !0 });
	q(n, Gj, u), q(l, Hj, c), q(l, Gj, u), MA(l, Bj, u), q(u, Vj), q(u, Hj), MA(u, Bj, u), q(u, Gj, u);
	let d = MA(n, Rj, Nj, { [wA]: !0 });
	q(d, "#"), MA(d, Rj, d), q(d, Uj, d);
	let f = q(d, Wj);
	q(f, "#"), MA(f, Rj, d);
	let p = [[Ij, o], [zj, i]], m = [
		[Ij, null],
		[Lj, s],
		[zj, a]
	];
	for (let e = 0; e < Kj.length; e++) Zj(n, Kj[e], zA, PA, p);
	for (let e = 0; e < qj.length; e++) Zj(n, qj[e], BA, FA, m);
	kA(zA, {
		tld: !0,
		ascii: !0
	}, t), kA(BA, {
		utld: !0,
		alpha: !0
	}, t), Zj(n, "file", VA, PA, p), Zj(n, "mailto", VA, PA, p), Zj(n, "http", HA, PA, p), Zj(n, "https", HA, PA, p), Zj(n, "ftp", HA, PA, p), Zj(n, "ftps", HA, PA, p), kA(VA, {
		scheme: !0,
		ascii: !0
	}, t), kA(HA, {
		slashscheme: !0,
		ascii: !0
	}, t), e = e.sort((e, t) => e[0] > t[0] ? 1 : -1);
	for (let t = 0; t < e.length; t++) {
		let r = e[t][0], i = e[t][1] ? { [TA]: !0 } : { [EA]: !0 };
		r.indexOf("-") >= 0 ? i[CA] = !0 : Ij.test(r) ? zj.test(r) ? i[xA] = !0 : i[yA] = !0 : i[vA] = !0, NA(n, r, r, i);
	}
	return NA(n, "localhost", RA, { ascii: !0 }), n.jd = new jA(Pj), {
		start: n,
		tokens: Object.assign({ groups: t }, Fj)
	};
}
function Yj(e, t) {
	let n = Xj(t.replace(/[A-Z]/g, (e) => e.toLowerCase())), r = n.length, i = [], a = 0, o = 0;
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
function Xj(e) {
	let t = [], n = e.length, r = 0;
	for (; r < n;) {
		let i = e.charCodeAt(r), a, o = i < 55296 || i > 56319 || r + 1 === n || (a = e.charCodeAt(r + 1)) < 56320 || a > 57343 ? e[r] : e.slice(r, r + 2);
		t.push(o), r += o.length;
	}
	return t;
}
function Zj(e, t, n, r, i) {
	let a, o = t.length;
	for (let n = 0; n < o - 1; n++) {
		let o = t[n];
		e.j[o] ? a = e.j[o] : (a = new jA(r), a.jr = i.slice(), e.j[o] = a), e = a;
	}
	return a = new jA(n), a.jr = i.slice(), e.j[t[o - 1]] = a, a;
}
function Qj(e) {
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
var $j = {
	defaultProtocol: "http",
	events: null,
	format: tM,
	formatHref: tM,
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
function eM(e, t = null) {
	let n = Object.assign({}, $j);
	e && (n = Object.assign(n, e instanceof eM ? e.o : e));
	let r = n.ignoreTags, i = [];
	for (let e = 0; e < r.length; e++) i.push(r[e].toUpperCase());
	this.o = n, t && (this.defaultRender = t), this.ignoreTags = i;
}
eM.prototype = {
	o: $j,
	ignoreTags: [],
	defaultRender(e) {
		return e;
	},
	check(e) {
		return this.get("validate", e.toString(), e);
	},
	get(e, t, n) {
		let r = t != null, i = this.o[e];
		return i && (typeof i == "object" ? (i = n.t in i ? i[n.t] : $j[e], typeof i == "function" && r && (i = i(t, n))) : typeof i == "function" && r && (i = i(t, n.t, n)), i);
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
function tM(e) {
	return e;
}
function nM(e, t) {
	this.t = "token", this.v = e, this.tk = t;
}
nM.prototype = {
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
	toObject(e = $j.defaultProtocol) {
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
function rM(e, t) {
	class n extends nM {
		constructor(t, n) {
			super(t, n), this.t = e;
		}
	}
	for (let e in t) n.prototype[e] = t[e];
	return n.t = e, n;
}
var iM = rM("email", {
	isLink: !0,
	toHref() {
		return "mailto:" + this.toString();
	}
}), aM = rM("text"), oM = rM("nl"), sM = rM("url", {
	isLink: !0,
	toHref(e = $j.defaultProtocol) {
		return this.hasProtocol() ? this.v : `${e}://${this.v}`;
	},
	hasProtocol() {
		let e = this.tk;
		return e.length >= 2 && e[0].t !== RA && e[1].t === hj;
	}
}), cM = (e) => new jA(e);
function lM({ groups: e }) {
	let t = e.domain.concat([
		cj,
		uj,
		dj,
		fj,
		pj,
		mj,
		_j,
		yj,
		xj,
		UA,
		Sj,
		Cj,
		wj,
		Tj,
		Aj,
		Pj,
		jj,
		Mj
	]), n = [
		lj,
		hj,
		gj,
		vj,
		bj,
		Sj,
		Ej,
		Dj,
		kj,
		QA,
		$A,
		KA,
		qA,
		YA,
		JA,
		XA,
		ZA,
		ej,
		tj,
		nj,
		rj,
		ij,
		aj,
		oj,
		sj
	], r = [
		cj,
		lj,
		uj,
		fj,
		pj,
		mj,
		_j,
		yj,
		xj,
		KA,
		qA,
		Sj,
		Cj,
		wj,
		Tj,
		Ej,
		Aj,
		Pj,
		jj,
		Mj
	], i = cM(), a = q(i, jj);
	K(a, r, a), K(a, e.domain, a);
	let o = cM(), s = cM(), c = cM();
	K(i, e.domain, o), K(i, e.scheme, s), K(i, e.slashscheme, c), K(o, r, a), K(o, e.domain, o);
	let l = q(o, dj);
	q(a, dj, l), q(s, dj, l), q(c, dj, l);
	let u = q(a, vj);
	K(u, r, a), K(u, e.domain, a);
	let d = cM();
	K(l, e.domain, d), K(d, e.domain, d);
	let f = q(d, vj);
	K(f, e.domain, d);
	let p = cM(iM);
	K(f, e.tld, p), K(f, e.utld, p), q(l, RA, p);
	let m = q(d, xj);
	q(m, xj, m), K(m, e.domain, d), K(p, e.domain, d), q(p, vj, f), q(p, xj, m);
	let h = q(o, xj), g = q(o, vj);
	q(h, xj, h), K(h, e.domain, o), K(g, r, a), K(g, e.domain, o);
	let _ = cM(sM);
	K(g, e.tld, _), K(g, e.utld, _), K(_, e.domain, o), K(_, r, a), q(_, vj, g), q(_, xj, h), q(_, dj, l);
	let v = q(_, hj), y = cM(sM);
	K(v, e.numeric, y);
	let b = cM(sM), x = cM();
	K(b, t, b), K(b, n, x), K(x, t, b), K(x, n, x), q(_, Aj, b), q(y, Aj, b);
	let S = q(s, hj), C = q(q(q(c, hj), Aj), Aj);
	K(s, e.domain, o), q(s, vj, g), q(s, xj, h), K(c, e.domain, o), q(c, vj, g), q(c, xj, h), K(S, e.domain, b), q(S, Aj, b), q(S, Ej, b), K(C, e.domain, b), K(C, t, b), q(C, Aj, b);
	let w = [
		[KA, qA],
		[JA, YA],
		[XA, ZA],
		[QA, $A],
		[ej, tj],
		[nj, rj],
		[ij, aj],
		[oj, sj]
	];
	for (let e = 0; e < w.length; e++) {
		let [r, i] = w[e], a = q(b, r);
		q(x, r, a);
		let o = cM(sM);
		K(a, t, o);
		let s = cM();
		K(a, n, s), q(a, i, b), K(o, t, o), K(o, n, s), K(s, t, o), K(s, n, s), q(o, i, b), q(s, i, b);
	}
	return q(i, RA, _), q(i, GA, oM), {
		start: i,
		tokens: Fj
	};
}
function uM(e, t, n) {
	let r = n.length, i = 0, a = [], o = [];
	for (; i < r;) {
		let s = e, c = null, l = null, u = 0, d = null, f = -1;
		for (; i < r && !(c = s.go(n[i].t));) o.push(n[i++]);
		for (; i < r && (l = c || s.go(n[i].t));) c = null, s = l, s.accepts() ? (f = 0, d = s) : f >= 0 && f++, i++, u++;
		if (f < 0) i -= u, i < r && (o.push(n[i]), i++);
		else {
			o.length > 0 && (a.push(dM(aM, t, o)), o = []), i -= f, u -= f;
			let e = d.t, r = n.slice(i - u, i);
			a.push(dM(e, t, r));
		}
	}
	return o.length > 0 && a.push(dM(aM, t, o)), a;
}
function dM(e, t, n) {
	let r = n[0].s, i = n[n.length - 1].e;
	return new e(t.slice(r, i), n);
}
var fM = typeof console < "u" && console && console.warn || (() => {}), pM = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", mM = {
	scanner: null,
	parser: null,
	tokenQueue: [],
	pluginQueue: [],
	customSchemes: [],
	initialized: !1
};
function hM(e, t) {
	if (typeof t != "function") throw Error(`linkifyjs: Invalid plugin ${t} (expects function)`);
	for (let n = 0; n < mM.pluginQueue.length; n++) if (e === mM.pluginQueue[n][0]) {
		fM(`linkifyjs: plugin "${e}" already registered - will be overwritten`), mM.pluginQueue[n] = [e, t];
		return;
	}
	mM.pluginQueue.push([e, t]), mM.initialized && fM(`linkifyjs: already initialized - will not register plugin "${e}" ${pM}`);
}
function gM(e, t = !1) {
	if (mM.initialized && fM(`linkifyjs: already initialized - will not register custom scheme "${e}" ${pM}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(e)) throw Error("linkifyjs: incorrect scheme format.\n1. Must only contain digits, lowercase ASCII letters or \"-\"\n2. Cannot start or end with \"-\"\n3. \"-\" cannot repeat");
	mM.customSchemes.push([e, t]);
}
function _M() {
	mM.scanner = Jj(mM.customSchemes);
	for (let e = 0; e < mM.tokenQueue.length; e++) mM.tokenQueue[e][1]({ scanner: mM.scanner });
	mM.parser = lM(mM.scanner.tokens);
	for (let e = 0; e < mM.pluginQueue.length; e++) mM.pluginQueue[e][1]({
		scanner: mM.scanner,
		parser: mM.parser
	});
	return mM.initialized = !0, mM;
}
function vM(e) {
	return mM.initialized || _M(), uM(mM.parser.start, e, Yj(mM.scanner.start, e));
}
vM.scan = Yj;
function yM(e, t = null, n = null) {
	if (t && typeof t == "object") {
		if (n) throw Error(`linkifyjs: Invalid link type ${t}; must be a string`);
		n = t, t = null;
	}
	let r = new eM(n), i = vM(e), a = [];
	for (let e = 0; e < i.length; e++) {
		let n = i[e];
		n.isLink && (!t || n.t === t) && r.check(n) && a.push(n.toFormattedObject(r));
	}
	return a;
}
function bM(e, t = null) {
	let n = vM(e);
	return n.length === 1 && n[0].isLink && (!t || n[0].t === t);
}
//#endregion
//#region ../../node_modules/.pnpm/linkify-react@4.3.3_linkifyjs@4.3.3_react@19.3.0/node_modules/linkify-react/dist/linkify-react.mjs
function xM(e, t, n) {
	let r = vM(e), i = [];
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
function SM(e, t, n) {
	if (a.Children.count(e.props.children) === 0) return e;
	let r = [];
	a.Children.forEach(e.props.children, (e) => {
		typeof e == "string" ? r.push.apply(r, xM(e, t, n)) : a.isValidElement(e) ? typeof e.type == "string" && t.ignoreTags.indexOf(e.type.toUpperCase()) >= 0 ? r.push(e) : r.push(SM(e, t, n)) : r.push(e);
	});
	let i = `__linkify-el-${n.elementId++}`, o = Object.assign({ key: i }, e.props);
	return a.cloneElement(e, o, r);
}
var CM = (e) => {
	let t = 0, n = ({ tagName: e, attributes: n, content: r }) => (n.key = `__linkify-lnk-${t++}`, n.class && (n.className = n.class, delete n.class), a.createElement(e, n, r)), r = { key: "__linkify-wrapper" };
	for (let t in e) t !== "options" && t !== "as" && t !== "tagName" && t !== "children" && (r[t] = e[t]);
	let i = new eM(e.options, n), o = e.as || e.tagName || a.Fragment || "span", s = e.children;
	return SM(a.createElement(o, r, s), i, { elementId: 0 });
}, wM = { container: "_container_15awj_8" };
//#endregion
//#region ../../node_modules/.pnpm/linkify-string@4.3.3_linkifyjs@4.3.3/node_modules/linkify-string/dist/linkify-string.mjs
function TM(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function EM(e) {
	return e.replace(/"/g, "&quot;");
}
function DM(e) {
	let t = [];
	for (let n in e) {
		let r = e[n] + "";
		t.push(`${n}="${EM(r)}"`);
	}
	return t.join(" ");
}
function OM({ tagName: e, attributes: t, content: n }) {
	return `<${e} ${DM(t)}>${TM(n)}</${e}>`;
}
function kM(e, t = {}) {
	t = new eM(t, OM);
	let n = vM(e), r = [];
	for (let e = 0; e < n.length; e++) {
		let i = n[e];
		i.t === "nl" && t.get("nl2br") ? r.push("<br>\n") : !i.isLink || !t.check(i) ? r.push(TM(i.toString())) : r.push(t.render(i));
	}
	return r.join("");
}
String.prototype.linkify || Object.defineProperty(String.prototype, "linkify", {
	writable: !1,
	value: function(e) {
		return kM(this, e);
	}
});
//#endregion
//#region ../../node_modules/.pnpm/linkify-html@4.3.3_patch_hash=1761c1eabe25d9fae83f74f27a20b3d24515840a4a8747bb04828df46bcfdea2_linkifyjs@4.3.3/node_modules/linkify-html/dist/linkify-html.mjs
var AM = {
	amp: "&",
	gt: ">",
	lt: "<",
	nbsp: "\xA0",
	quot: "\""
}, jM = /^#[xX]([A-Fa-f0-9]+)$/, MM = /^#([0-9]+)$/, NM = /^([A-Za-z0-9]+)$/, PM = function() {
	function e(e) {
		this.named = e;
	}
	return e.prototype.parse = function(e) {
		if (e) {
			var t = e.match(jM);
			if (t) return String.fromCharCode(parseInt(t[1], 16));
			if (t = e.match(MM), t) return String.fromCharCode(parseInt(t[1], 10));
			if (t = e.match(NM), t) return this.named[t[1]] || "&" + t[1] + ";";
		}
	}, e;
}(), FM = /[\t\n\f ]/, IM = /[A-Za-z]/, LM = /\r\n?/g;
function RM(e) {
	return FM.test(e);
}
function zM(e) {
	return IM.test(e);
}
function BM(e) {
	return e.replace(LM, "\n");
}
var VM = function() {
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
				e === "!" ? this.transitionTo("markupDeclarationOpen") : e === "/" ? this.transitionTo("endTagOpen") : (e === "@" || e === ":" || zM(e)) && (this.transitionTo("tagName"), this.tagNameBuffer = "", this.delegate.beginStartTag(), this.appendToTagName(e));
			},
			markupDeclarationOpen: function() {
				var e = this.consume();
				e === "-" && this.peek() === "-" ? (this.consume(), this.transitionTo("commentStart"), this.delegate.beginComment()) : e.toUpperCase() + this.input.substring(this.index, this.index + 6).toUpperCase() === "DOCTYPE" && (this.consume(), this.consume(), this.consume(), this.consume(), this.consume(), this.consume(), this.transitionTo("doctype"), this.delegate.beginDoctype && this.delegate.beginDoctype());
			},
			doctype: function() {
				RM(this.consume()) && this.transitionTo("beforeDoctypeName");
			},
			beforeDoctypeName: function() {
				var e = this.consume();
				RM(e) || (this.transitionTo("doctypeName"), this.delegate.appendToDoctypeName && this.delegate.appendToDoctypeName(e.toLowerCase()));
			},
			doctypeName: function() {
				var e = this.consume();
				RM(e) ? this.transitionTo("afterDoctypeName") : e === ">" ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : this.delegate.appendToDoctypeName && this.delegate.appendToDoctypeName(e.toLowerCase());
			},
			afterDoctypeName: function() {
				var e = this.consume();
				if (!RM(e)) {
					if (e === ">") this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData");
					else {
						var t = e.toUpperCase() + this.input.substring(this.index, this.index + 5).toUpperCase(), n = t.toUpperCase() === "PUBLIC", r = t.toUpperCase() === "SYSTEM";
						(n || r) && (this.consume(), this.consume(), this.consume(), this.consume(), this.consume(), this.consume()), n ? this.transitionTo("afterDoctypePublicKeyword") : r && this.transitionTo("afterDoctypeSystemKeyword");
					}
				}
			},
			afterDoctypePublicKeyword: function() {
				var e = this.peek();
				if (RM(e)) this.transitionTo("beforeDoctypePublicIdentifier"), this.consume();
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
				RM(e) ? this.transitionTo("betweenDoctypePublicAndSystemIdentifiers") : e === ">" ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : e === "\"" ? this.transitionTo("doctypeSystemIdentifierDoubleQuoted") : e === "'" && this.transitionTo("doctypeSystemIdentifierSingleQuoted");
			},
			betweenDoctypePublicAndSystemIdentifiers: function() {
				var e = this.consume();
				RM(e) || (e === ">" ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : e === "\"" ? this.transitionTo("doctypeSystemIdentifierDoubleQuoted") : e === "'" && this.transitionTo("doctypeSystemIdentifierSingleQuoted"));
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
				RM(e) || e === ">" && (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData"));
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
				RM(e) ? this.transitionTo("beforeAttributeName") : e === "/" ? this.transitionTo("selfClosingStartTag") : e === ">" ? (this.delegate.finishTag(), this.transitionTo("beforeData")) : this.appendToTagName(e);
			},
			endTagName: function() {
				var e = this.consume();
				RM(e) ? (this.transitionTo("beforeAttributeName"), this.tagNameBuffer = "") : e === "/" ? (this.transitionTo("selfClosingStartTag"), this.tagNameBuffer = "") : e === ">" ? (this.delegate.finishTag(), this.transitionTo("beforeData"), this.tagNameBuffer = "") : this.appendToTagName(e);
			},
			beforeAttributeName: function() {
				var e = this.peek();
				RM(e) ? this.consume() : e === "/" ? (this.transitionTo("selfClosingStartTag"), this.consume()) : e === ">" ? (this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : e === "=" ? (this.delegate.reportSyntaxError("attribute name cannot start with equals sign"), this.transitionTo("attributeName"), this.delegate.beginAttribute(), this.consume(), this.delegate.appendToAttributeName(e)) : (this.transitionTo("attributeName"), this.delegate.beginAttribute());
			},
			attributeName: function() {
				var e = this.peek();
				RM(e) ? (this.transitionTo("afterAttributeName"), this.consume()) : e === "/" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("selfClosingStartTag")) : e === "=" ? (this.transitionTo("beforeAttributeValue"), this.consume()) : e === ">" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : e === "\"" || e === "'" || e === "<" ? (this.delegate.reportSyntaxError(e + " is not a valid character within attribute names"), this.consume(), this.delegate.appendToAttributeName(e)) : (this.consume(), this.delegate.appendToAttributeName(e));
			},
			afterAttributeName: function() {
				var e = this.peek();
				RM(e) ? this.consume() : e === "/" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("selfClosingStartTag")) : e === "=" ? (this.consume(), this.transitionTo("beforeAttributeValue")) : e === ">" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.transitionTo("attributeName"), this.delegate.beginAttribute(), this.consume(), this.delegate.appendToAttributeName(e));
			},
			beforeAttributeValue: function() {
				var e = this.peek();
				RM(e) ? this.consume() : e === "\"" ? (this.transitionTo("attributeValueDoubleQuoted"), this.delegate.beginAttributeValue(!0), this.consume()) : e === "'" ? (this.transitionTo("attributeValueSingleQuoted"), this.delegate.beginAttributeValue(!0), this.consume()) : e === ">" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : (this.transitionTo("attributeValueUnquoted"), this.delegate.beginAttributeValue(!1), this.consume(), this.delegate.appendToAttributeValue(e));
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
				RM(e) ? (this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("beforeAttributeName")) : e === "/" ? (this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("selfClosingStartTag")) : e === "&" ? (this.consume(), this.delegate.appendToAttributeValue(this.consumeCharRef() || "&")) : e === ">" ? (this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : (this.consume(), this.delegate.appendToAttributeValue(e));
			},
			afterAttributeValueQuoted: function() {
				var e = this.peek();
				RM(e) ? (this.consume(), this.transitionTo("beforeAttributeName")) : e === "/" ? (this.consume(), this.transitionTo("selfClosingStartTag")) : e === ">" ? (this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : this.transitionTo("beforeAttributeName");
			},
			selfClosingStartTag: function() {
				this.peek() === ">" ? (this.consume(), this.delegate.markTagAsSelfClosing(), this.delegate.finishTag(), this.transitionTo("beforeData")) : this.transitionTo("beforeAttributeName");
			},
			endTagOpen: function() {
				var e = this.consume();
				(e === "@" || e === ":" || zM(e)) && (this.transitionTo("endTagName"), this.tagNameBuffer = "", this.delegate.beginEndTag(), this.appendToTagName(e));
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
		for (this.input += BM(e); this.index < this.input.length;) {
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
}(), HM = function() {
	function e(e, t) {
		t === void 0 && (t = {}), this.options = t, this.token = null, this.startLine = 1, this.startColumn = 0, this.tokens = [], this.tokenizer = new VM(this, e, t.mode), this._currentAttribute = void 0;
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
function UM(e, t) {
	return new HM(new PM(AM), t).tokenize(e);
}
var WM = "LinkifyResult", GM = "StartTag", KM = "EndTag", qM = "Chars", JM = "Comment", YM = "Doctype";
function XM(e, t = {}) {
	let n = UM(e), r = [], i = [], a = new eM(t, $M);
	for (let e = 0; e < n.length; e++) {
		let t = n[e];
		if (t.type === GM) {
			r.push(t);
			let i = t.tagName.toUpperCase();
			if (!(i === "A" || a.ignoreTags.indexOf(i) >= 0)) continue;
			let o = r.length;
			QM(i, n, ++e, r), e += r.length - o - 1;
		} else if (t.type !== qM) r.push(t);
		else {
			let e = ZM(t.chars, a);
			r.push.apply(r, e);
		}
	}
	for (let e = 0; e < r.length; e++) {
		let t = r[e];
		switch (t.type) {
			case WM:
				i.push(t.rendered);
				break;
			case GM: {
				let e = "<" + t.tagName;
				t.attributes.length > 0 && (e += " " + rN(t.attributes).join(" ")), t.selfClosing && (e += " /"), e += ">", i.push(e);
				break;
			}
			case KM:
				i.push(`</${t.tagName}>`);
				break;
			case qM:
				i.push(eN(t.chars));
				break;
			case JM:
				i.push(`<!--${eN(t.chars)}-->`);
				break;
			case YM: {
				let e = `<!DOCTYPE ${t.name}`;
				t.publicIdentifier && (e += ` PUBLIC "${t.publicIdentifier}"`), t.systemIdentifier && (e += ` "${t.systemIdentifier}"`), e += ">", i.push(e);
				break;
			}
		}
	}
	return i.join("");
}
function ZM(e, t) {
	let n = vM(e), r = [];
	for (let e = 0; e < n.length; e++) {
		let i = n[e];
		i.t === "nl" && t.get("nl2br") ? r.push({
			type: GM,
			tagName: "br",
			attributes: [],
			selfClosing: !0
		}) : !i.isLink || !t.check(i) ? r.push({
			type: qM,
			chars: i.toString()
		}) : r.push({
			type: WM,
			rendered: t.render(i)
		});
	}
	return r;
}
function QM(e, t, n, r) {
	let i = 1;
	for (; n < t.length && i > 0;) {
		let a = t[n];
		a.type === GM && a.tagName.toUpperCase() === e ? i++ : a.type === KM && a.tagName.toUpperCase() === e && i--, r.push(a), n++;
	}
	return r;
}
function $M({ tagName: e, attributes: t, content: n }) {
	return `<${e} ${nN(t)}>${eN(n)}</${e}>`;
}
function eN(e) {
	return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function tN(e) {
	return e.replace(/"/g, "&quot;");
}
function nN(e) {
	let t = [];
	for (let n in e) {
		let r = e[n] + "";
		t.push(`${n}="${tN(r)}"`);
	}
	return t.join(" ");
}
function rN(e) {
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n][0], i = e[n][1] + "";
		t.push(`${r}="${tN(i)}"`);
	}
	return t;
}
//#endregion
//#region src/core/utils/linkify.ts
var iN = [
	"file",
	"mailto",
	"http",
	"https",
	"ftp",
	"ftps"
], aN = [
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
], oN = [...iN, ...aN], sN = /* @__PURE__ */ function(e) {
	return e.URL = "url", e.UserId = "userid", e.RoomAlias = "roomalias", e;
}({});
function cN({ scanner: e, parser: t, token: n, name: r }) {
	let { DOT: i, NUM: a, COLON: o, SYM: s, SLASH: c, EQUALS: l, HYPHEN: u, UNDERSCORE: d } = e.tokens, { domain: f } = e.tokens.groups, p = [
		i,
		s,
		c,
		l,
		d,
		u
	], m = [u], h = new jA(rM(r, { isLink: !0 })), g = new jA(rM(r, { isLink: !0 })), _ = t.start.tt(n), v = new jA();
	_.ta(f, v), _.ta(p, v), v.ta(f, v), v.ta(p, v);
	let y = v.tt(o);
	y.ta(f, h), y.ta(m, h), h.ta(f, h), h.ta(m, h), h.tt(i, y), h.tt(o).tt(a, g);
}
function lN({ urlListener: e, roomAliasListener: t, userIdListener: n, urlTargetTransformer: r, hrefTransformer: i, onLinkClick: a }) {
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
			let n = { [`data-${fN}`]: "true" }, r = o(e, t);
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
function uN(e) {
	return yM(e);
}
function dN(e) {
	return bM(e);
}
var fN = "linkified", pN = !1;
function mN() {
	pN ||= (hM("roomalias", ({ scanner: e, parser: t }) => {
		let n = e.tokens.POUND;
		cN({
			scanner: e,
			parser: t,
			token: n,
			name: "roomalias"
		});
	}), hM("userid", ({ scanner: e, parser: t }) => {
		let n = e.tokens.AT;
		cN({
			scanner: e,
			parser: t,
			token: n,
			name: "userid"
		});
	}), gM("mxc", !1), oN.forEach((e) => {
		iN.includes(e) || gM(e, aN.includes(e));
	}), !0);
}
mN();
//#endregion
//#region src/core/utils/LinkedText/LinkedTextContext.ts
var hN = l(null);
hN.displayName = "LinkedTextContext";
function gN() {
	let e = g(hN);
	if (!e) throw Error("useLinkedTextContextOpts must be used within an LinkedTextContext.Provider");
	return e;
}
//#endregion
//#region src/core/utils/LinkedText/LinkedText.tsx
function _N({ children: e, className: t, onLinkClick: n, ...r }) {
	let i = lN({
		...gN(),
		onLinkClick: n
	});
	return /* @__PURE__ */ D(CM, {
		className: (0, z.default)(wM.container, t),
		as: P,
		options: {
			...i,
			render: ve
		},
		...r,
		children: e
	});
}
//#endregion
//#region src/room/timeline/event-tile/MediaPreviewGroupView/MediaPreviewComponents/MediaPreviewComponents.tsx
function vN({ children: e }) {
	return /* @__PURE__ */ D("div", {
		className: hA.header,
		children: e
	});
}
function yN({ children: e }) {
	return /* @__PURE__ */ D(_N, {
		type: "body",
		size: "md",
		className: hA.body,
		children: e
	});
}
function bN({ header: e, headerUrl: t, body: n }) {
	return /* @__PURE__ */ O("div", {
		className: hA.textContent,
		children: [/* @__PURE__ */ D(vN, { children: t ? /* @__PURE__ */ D("a", {
			href: t,
			target: "_blank",
			children: e
		}) : e }), /* @__PURE__ */ D(yN, { children: n })]
	});
}
function xN({ icon: e, onClick: t, color: n }) {
	let { translate: r } = B();
	return e = o.cloneElement(e, { style: { color: n } }), t ? /* @__PURE__ */ D("div", {
		className: (0, z.default)(hA.icon, hA.iconClickable),
		children: /* @__PURE__ */ D("button", {
			onClick: t,
			type: "button",
			"aria-label": r("timeline|url_preview|view_file"),
			children: e
		})
	}) : /* @__PURE__ */ D("div", {
		className: hA.icon,
		children: e
	});
}
function SN({ buttons: e }) {
	return /* @__PURE__ */ D("div", {
		className: hA.buttonGroup,
		children: e.map(({ icon: e, onClick: t, label: n }) => /* @__PURE__ */ D("button", {
			"aria-label": n,
			type: "button",
			className: hA.button,
			onClick: t,
			children: e
		}, n))
	});
}
function CN({ children: e }) {
	return /* @__PURE__ */ D("div", {
		className: hA.leftGroup,
		children: e
	});
}
function wN(e) {
	return new Promise((t) => {
		let n = new window.Image();
		n.onload = () => t(n.naturalWidth > 0 && n.naturalHeight > 0), n.onerror = (n) => {
			console.error(`Failed to display image ${e}`, n), t(!1);
		}, n.src = e;
	});
}
function TN(e) {
	return new Promise((t) => {
		let n = document.createElement("video");
		n.preload = "metadata", n.onloadedmetadata = () => t(n.videoWidth > 0 && n.videoHeight > 0), n.onerror = (n) => {
			console.error(`Failed to display video ${e}`, n), t(!1);
		}, n.src = e;
	});
}
function EN(e) {
	return new Promise((t) => {
		let n = document.createElement("audio");
		n.preload = "metadata", n.onloadedmetadata = () => t(!0), n.onerror = (n) => {
			console.error(`Failed to display audio ${e}`, n), t(!1);
		}, n.src = e;
	});
}
function DN(e, t) {
	let [n, r] = T({
		valid: !0,
		src: t
	});
	return _(() => {
		let n = !1;
		return e(t).then((e) => {
			n || r({
				valid: e,
				src: t
			});
		}), () => {
			n = !0;
		};
	}, [t, e]), n;
}
function ON(e) {
	switch (e) {
		case "full": return hA.fullImage;
		case "banner": return hA.bannerImage;
		case "tallbanner": return hA.tallBannerImage;
	}
}
function kN(e) {
	switch (e) {
		case "full": return hA.fullVideo;
		case "banner": return hA.bannerVideo;
		case "tallbanner": return hA.tallBannerVideo;
	}
}
function AN({ image: e, imageAlt: t, imageOnClick: n, imageSize: r }) {
	let { translate: i } = B(), a = [hA.image, ON(r)], { valid: o, src: s } = DN(wN, e);
	if (!o || s !== e) return null;
	let c = /* @__PURE__ */ D("img", {
		src: e,
		alt: t
	});
	return /* @__PURE__ */ D("div", {
		className: (0, z.default)(a),
		children: n ? /* @__PURE__ */ D("button", {
			onClick: n,
			type: "button",
			"aria-label": i("timeline|url_preview|view_image"),
			children: c
		}) : c
	});
}
function jN({ video: e, videoOnClick: t, videoSize: n }) {
	let { translate: r } = B(), i = [hA.video, kN(n)], { valid: a, src: o } = DN(TN, e);
	if (!a || o !== e) return null;
	let s = /* @__PURE__ */ D("video", {
		src: e,
		controls: !0,
		preload: "metadata",
		children: /* @__PURE__ */ D("track", { kind: "captions" })
	});
	return /* @__PURE__ */ D("div", {
		className: (0, z.default)(i),
		children: t ? /* @__PURE__ */ D("button", {
			onClick: t,
			type: "button",
			"aria-label": r("timeline|url_preview|view_video"),
			children: s
		}) : s
	});
}
function MN({ audio: e, audioOnClick: t }) {
	let { translate: n } = B(), { valid: r, src: i } = DN(EN, e);
	if (!r || i !== e) return null;
	let a = /* @__PURE__ */ D("audio", {
		src: e,
		controls: !0,
		children: /* @__PURE__ */ D("track", { kind: "captions" })
	});
	return /* @__PURE__ */ D("div", {
		className: hA.audio,
		children: t ? /* @__PURE__ */ D("button", {
			onClick: t,
			type: "button",
			"aria-label": n("timeline|url_preview|view_audio"),
			children: a
		}) : a
	});
}
//#endregion
//#region src/room/timeline/event-tile/MediaPreviewGroupView/MediaPreviewTile/MediaPreviewTile.tsx
function NN(e) {
	return /* @__PURE__ */ O("div", {
		className: (0, z.default)(mA.tile, e.children ? mA.tileWithAbove : mA.tileWithoutAbove),
		children: [e.children, /* @__PURE__ */ O("div", {
			className: mA.below,
			children: [/* @__PURE__ */ O(CN, { children: [/* @__PURE__ */ D(xN, { ...e }), /* @__PURE__ */ D(bN, { ...e })] }), e.buttons && e.buttons.length !== 0 && /* @__PURE__ */ D(SN, { buttons: e.buttons })]
		})]
	});
}
function PN(e) {
	return /* @__PURE__ */ D(NN, {
		...e,
		children: /* @__PURE__ */ D(AN, { ...e })
	});
}
function FN(e) {
	return /* @__PURE__ */ D(NN, {
		...e,
		children: /* @__PURE__ */ D(jN, { ...e })
	});
}
function IN(e) {
	return /* @__PURE__ */ D(NN, {
		...e,
		children: /* @__PURE__ */ D(MN, { ...e })
	});
}
function LN(e) {
	return /* @__PURE__ */ D(NN, { ...e });
}
//#endregion
//#region src/room/timeline/event-tile/MediaPreviewGroupView/MediaPreviewGroupView.tsx
function RN({ collapsed: e, hiddenCount: t, onToggle: n }) {
	let { translate: r } = B();
	return /* @__PURE__ */ D(A, {
		className: pA.toggleButton,
		kind: "tertiary",
		size: "md",
		onClick: n,
		children: e ? r("timeline|url_preview|show_n_more", { count: t }) : r("action|collapse")
	});
}
function zN({ vm: e, className: t }) {
	let { entries: n, collapse: r } = H(e);
	return n.length === 0 ? null : /* @__PURE__ */ O("div", {
		className: (0, z.default)(t, pA.container),
		children: [n.map((e) => {
			switch (e.type) {
				case "text": return /* @__PURE__ */ D(LN, { ...e }, e.id);
				case "image": return /* @__PURE__ */ D(PN, { ...e }, e.id);
				case "video": return /* @__PURE__ */ D(FN, { ...e }, e.id);
				case "audio": return /* @__PURE__ */ D(IN, { ...e }, e.id);
			}
		}), r && /* @__PURE__ */ D(RN, { ...r })]
	});
}
//#endregion
//#region src/room/timeline/event-tile/MediaPreviewGroupView/icons.tsx
function BN(e) {
	return {
		icon: /* @__PURE__ */ D(lC, {}),
		color: "var(--cpd-color-text-decorative-4)"
	};
}
function VN() {
	return {
		icon: /* @__PURE__ */ D(GC, {}),
		color: "var(--cpd-color-text-decorative-4)"
	};
}
var HN = {
	richItem: "_richItem_1c0uo_8",
	avatar: "_avatar_1c0uo_36",
	title: "_title_1c0uo_41",
	description: "_description_1c0uo_47",
	timestamp: "_timestamp_1c0uo_51",
	checkmark: "_checkmark_1c0uo_69"
}, UN = p(function({ avatar: e, title: t, description: n, timestamp: r, selected: i, ...a }) {
	let o = B();
	return /* @__PURE__ */ O("li", {
		className: HN.richItem,
		role: "option",
		tabIndex: -1,
		"aria-selected": i,
		"aria-label": t,
		...a,
		children: [
			i ? /* @__PURE__ */ D(WN, {}) : /* @__PURE__ */ D(V, {
				className: HN.avatar,
				children: e
			}),
			/* @__PURE__ */ D("span", {
				className: HN.title,
				children: t
			}),
			/* @__PURE__ */ D("span", {
				className: HN.description,
				children: n
			}),
			r && /* @__PURE__ */ D("span", {
				role: "timer",
				className: HN.timestamp,
				children: o.humanizeTime(r)
			})
		]
	});
});
function WN() {
	return /* @__PURE__ */ D(V, {
		align: "center",
		justify: "center",
		"aria-hidden": "true",
		className: HN.checkmark,
		children: /* @__PURE__ */ D(VS, {
			width: "24px",
			height: "24px",
			color: "var(--cpd-color-icon-on-solid-primary)"
		})
	});
}
var GN = {
	richList: "_richList_1h3wz_8",
	title: "_title_1h3wz_12",
	content: "_content_1h3wz_18",
	empty: "_empty_1h3wz_26"
};
//#endregion
//#region src/core/hooks/useListKeyboardNavigation.ts
function KN() {
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
function qN({ children: e, title: t, className: n, titleAttributes: r, isEmpty: i = !1, ...a }) {
	let o = v(), { listRef: s, onKeyDown: c, onFocus: l } = KN();
	return /* @__PURE__ */ O(V, {
		className: (0, z.default)(GN.richList, n),
		direction: "column",
		...a,
		children: [/* @__PURE__ */ D("span", {
			id: o,
			className: GN.title,
			...r,
			children: t
		}), i ? /* @__PURE__ */ D("span", {
			className: GN.empty,
			children: e
		}) : /* @__PURE__ */ D("ul", {
			ref: s,
			role: "listbox",
			className: GN.content,
			"aria-labelledby": o,
			tabIndex: 0,
			onKeyDown: c,
			onFocus: l,
			children: e
		})]
	});
}
var JN = { title: "_title_s91uo_8" };
//#endregion
//#region src/room-list/RoomListHeaderView/menu/OptionMenuView.tsx
function YN({ vm: e }) {
	let { translate: t } = B(), [n, r] = T(!1), { activeSortOption: i, isMessagePreviewEnabled: a } = H(e);
	return /* @__PURE__ */ O(ye, {
		open: n,
		onOpenChange: r,
		title: t("room_list|room_options"),
		showTitle: !1,
		align: "start",
		trigger: /* @__PURE__ */ D(M, {
			tooltip: t("room_list|room_options"),
			"aria-label": t("room_list|room_options"),
			size: "28px",
			style: { padding: "4px" },
			children: /* @__PURE__ */ D(lw, {})
		}),
		children: [
			/* @__PURE__ */ D(be, {
				title: t("room_list|sort"),
				className: JN.title
			}),
			/* @__PURE__ */ D(xe, {
				label: t("room_list|sort_type|activity"),
				checked: i === "recent",
				onSelect: () => e.sort("recent")
			}),
			/* @__PURE__ */ D(xe, {
				label: t("room_list|sort_type|unread_first"),
				checked: i === "unread-first",
				onSelect: () => e.sort("unread-first")
			}),
			/* @__PURE__ */ D(xe, {
				label: t("room_list|sort_type|atoz"),
				checked: i === "alphabetical",
				onSelect: () => e.sort("alphabetical")
			}),
			/* @__PURE__ */ D(be, { title: t("room_list|appearance") }),
			/* @__PURE__ */ D(ie, {
				label: t("room_list|show_message_previews"),
				onSelect: e.toggleMessagePreview,
				checked: a
			})
		]
	});
}
var XN = { button: "_button_1veqf_8" };
//#endregion
//#region src/room-list/RoomListHeaderView/menu/SpaceMenuView.tsx
function ZN({ vm: e }) {
	let { translate: t } = B(), { canInviteInSpace: n, canAccessSpaceSettings: r, title: i } = H(e), [a, o] = T(!1);
	return /* @__PURE__ */ O(ye, {
		open: a,
		onOpenChange: o,
		title: i,
		align: "start",
		trigger: /* @__PURE__ */ D(M, {
			className: XN.button,
			"aria-label": t("room_list|open_space_menu"),
			size: "24px",
			style: { padding: "2px" },
			children: /* @__PURE__ */ D(US, {})
		}),
		children: [
			/* @__PURE__ */ D(N, {
				Icon: FC,
				label: t("room_list|space_menu|home"),
				onSelect: e.openSpaceHome,
				hideChevron: !0
			}),
			n && /* @__PURE__ */ D(N, {
				Icon: Uw,
				label: t("action|invite"),
				onSelect: e.inviteInSpace,
				hideChevron: !0
			}),
			/* @__PURE__ */ D(N, {
				Icon: _w,
				label: t("common|preferences"),
				onSelect: e.openSpacePreferences,
				hideChevron: !0
			}),
			r && /* @__PURE__ */ D(N, {
				Icon: Nw,
				label: t("room_list|space_menu|space_settings"),
				onSelect: e.openSpaceSettings,
				hideChevron: !0
			})
		]
	});
}
//#endregion
//#region src/room-list/RoomListHeaderView/menu/ComposeMenuView.tsx
function QN({ vm: e }) {
	let { translate: t } = B(), [n, r] = T(!1), { canCreateRoom: i, canCreateVideoRoom: a, displaySectionReleaseAnnouncement: o, areSectionsEnabled: s } = H(e), c = /* @__PURE__ */ D(M, {
		size: "28px",
		style: { padding: "4px" },
		tooltip: t("action|new_conversation"),
		children: /* @__PURE__ */ D(hw, {
			color: "var(--cpd-color-icon-secondary)",
			"aria-hidden": !0
		})
	});
	return o ? /* @__PURE__ */ D(Se, {
		open: o,
		onClick: e.closeSectionReleaseAnnouncement,
		header: t("release_announcement|room_list_section_title"),
		description: t("release_announcement|room_list_section_description"),
		closeLabel: t("release_announcement|room_list_section_close"),
		children: c
	}) : /* @__PURE__ */ O(ye, {
		open: n,
		onOpenChange: r,
		showTitle: !1,
		title: t("action|open_menu"),
		align: "start",
		trigger: c,
		children: [
			/* @__PURE__ */ D(N, {
				Icon: LS,
				label: t("action|start_chat"),
				onSelect: e.createChatRoom,
				hideChevron: !0
			}),
			i && /* @__PURE__ */ D(N, {
				Icon: Dw,
				label: t("action|new_room"),
				onSelect: e.createRoom,
				hideChevron: !0
			}),
			a && /* @__PURE__ */ D(N, {
				Icon: Zw,
				label: t("action|new_video_room"),
				onSelect: e.createVideoRoom,
				hideChevron: !0
			}),
			s && /* @__PURE__ */ D(N, {
				Icon: jw,
				label: t("action|new_section"),
				onSelect: e.createSection,
				hideChevron: !0
			})
		]
	});
}
var $N = {
	header: "_header_1b9rm_8",
	container: "_container_1b9rm_13",
	title: "_title_1b9rm_19"
};
//#endregion
//#region src/room-list/RoomListHeaderView/RoomListHeaderView.tsx
function eP({ vm: e }) {
	let { translate: t } = B(), { title: n, displaySpaceMenu: r, collapseSections: i, areSectionsEnabled: a, canCreateRoom: o, canCreateVideoRoom: s } = H(e), c = !a && !o && !s;
	return /* @__PURE__ */ D(V, {
		as: "header",
		className: $N.header,
		"aria-label": t("room|context_menu|title"),
		align: "end",
		"data-testid": "room-list-header",
		children: /* @__PURE__ */ O(V, {
			className: $N.container,
			justify: "space-between",
			align: "center",
			gap: "var(--cpd-space-3x)",
			children: [/* @__PURE__ */ O(V, {
				className: $N.title,
				align: "center",
				gap: "var(--cpd-space-1x)",
				children: [/* @__PURE__ */ D(ue, {
					size: "sm",
					title: n,
					children: n
				}), r && /* @__PURE__ */ D(ZN, { vm: e })]
			}), /* @__PURE__ */ O(V, {
				align: "center",
				gap: "var(--cpd-space-2x)",
				children: [
					/* @__PURE__ */ D(YN, { vm: e }),
					a && i && /* @__PURE__ */ D(M, {
						size: "28px",
						style: { padding: "4px" },
						onClick: () => e.collapseOrExpandSections(),
						tooltip: t(i === "collapse" ? "room_list|collapse_all_sections" : "room_list|expand_all_sections"),
						children: D(i === "collapse" ? $S : CC, {
							color: "var(--cpd-color-icon-secondary)",
							"aria-hidden": !0
						})
					}),
					c ? /* @__PURE__ */ D(M, {
						size: "28px",
						style: { padding: "4px" },
						onClick: (t) => e.createChatRoom(t.nativeEvent),
						tooltip: t("action|start_chat"),
						children: /* @__PURE__ */ D(LS, {
							color: "var(--cpd-color-icon-secondary)",
							"aria-hidden": !0
						})
					}) : /* @__PURE__ */ D(QN, { vm: e })
				]
			})]
		})
	});
}
var tP = {
	view: "_view_zk0ja_8",
	search: "_search_zk0ja_16",
	search_container: "_search_container_zk0ja_28",
	search_text: "_search_text_zk0ja_40"
};
//#endregion
//#region src/room-list/RoomListSearchView/RoomListSearchView.tsx
function nP({ vm: e }) {
	let { translate: t } = B(), { displayExploreButton: n, displayDialButton: r, searchShortcut: i } = H(e);
	return /* @__PURE__ */ O(V, {
		"data-testid": "room-list-search",
		className: tP.view,
		role: "search",
		gap: "var(--cpd-space-2x)",
		align: "center",
		children: [
			/* @__PURE__ */ D(A, {
				id: "room-list-search-button",
				className: tP.search,
				kind: "secondary",
				size: "md",
				Icon: kw,
				onClick: e.onSearchClick,
				children: /* @__PURE__ */ O(V, {
					className: tP.search_container,
					as: "span",
					justify: "space-between",
					children: [/* @__PURE__ */ D("span", {
						className: tP.search_text,
						children: t("action|search")
					}), /* @__PURE__ */ D("kbd", { children: i })]
				})
			}),
			r && /* @__PURE__ */ D(A, {
				kind: "secondary",
				size: "md",
				Icon: sC,
				iconOnly: !0,
				"aria-label": t("left_panel|open_dial_pad"),
				onClick: e.onDialPadClick
			}),
			n && /* @__PURE__ */ D(A, {
				kind: "secondary",
				size: "md",
				Icon: DC,
				iconOnly: !0,
				"aria-label": t("action|explore_rooms"),
				onClick: e.onExploreClick
			})
		]
	});
}
var rP = { container: "_container_17t7g_8" };
//#endregion
//#region src/room-list/SectionCreationView/SectionFormView.tsx
function iP({ vm: e, className: t }) {
	let { translate: n } = B(), { value: r, step: i } = H(e);
	return /* @__PURE__ */ O(V, {
		gap: "var(--cpd-space-6x)",
		direction: "column",
		align: "stretch",
		className: t,
		children: [i === "creation" && /* @__PURE__ */ D(P, {
			as: "span",
			weight: "medium",
			children: n("room_list|section_creation|description")
		}), /* @__PURE__ */ D(le.Root, {
			className: rP.form,
			onSubmit: (t) => {
				t.preventDefault(), e.createOrEditSection();
			},
			children: /* @__PURE__ */ O(le.Field, {
				name: "sectionName",
				children: [/* @__PURE__ */ O(le.Label, { children: [" ", n("room_list|section_creation|label")] }), /* @__PURE__ */ D(le.TextControl, {
					value: r,
					onChange: (t) => e.setSection(t.target.value),
					required: !0
				})]
			})
		})]
	});
}
var aP = {
	list: "_list_1pgfw_8",
	emptyList: "_emptyList_1pgfw_15"
};
//#endregion
//#region src/core/RoomPickerView/RoomPickerView.tsx
function oP({ vm: e, className: t }) {
	let { rooms: n, selectedRooms: r, placeholder: i, listTitle: a, emptyListText: s } = H(e), c = n.length === 0, l = o.useRef(null);
	return /* @__PURE__ */ O(V, {
		gap: "var(--cpd-space-4x)",
		direction: "column",
		align: "stretch",
		className: t,
		children: [/* @__PURE__ */ D(OD, {
			onRemoveChildren: e.unSelectLastRoom,
			inputProps: {
				ref: l,
				placeholder: i,
				onChange: (t) => e.search(t.currentTarget.value)
			},
			children: r.map((t) => /* @__PURE__ */ D(xD, {
				label: t.name,
				onClick: () => e.toggleRoom(t.id),
				children: e.renderRoomAvatar(t, "20px")
			}, t.id))
		}), c ? /* @__PURE__ */ D(P, {
			as: "div",
			size: "lg",
			className: (0, z.default)(aP.list, aP.emptyList),
			children: s
		}) : /* @__PURE__ */ D(qN, {
			title: a,
			className: aP.list,
			children: n.map((t) => /* @__PURE__ */ D(UN, {
				title: t.name,
				description: t.description,
				timestamp: t.timestamp,
				avatar: e.renderRoomAvatar(t, "32px"),
				selected: t.selected,
				onClick: () => {
					e.toggleRoom(t.id), l.current && (l.current.value = "", l.current?.focus());
				}
			}, t.id))
		})]
	});
}
//#endregion
//#region src/room-list/SectionCreationView/SectionCreationView.tsx
function sP({ vm: e }) {
	let { step: t } = H(e);
	return /* @__PURE__ */ O(E, { children: [(t === "creation" || t === "editing") && /* @__PURE__ */ D(iP, {
		vm: e,
		className: rP.container
	}), t === "add_rooms" && /* @__PURE__ */ D(oP, {
		vm: e,
		className: rP.container
	})] });
}
//#endregion
//#region src/room-list/RoomListPrimaryFilters/useCollapseFilters.ts
function cP(e, t) {
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
function lP(e, t, n) {
	let [r, i] = T(e);
	return _(() => {
		!((t ? e.indexOf(t) : -1) >= n) || n === -1 ? i(e) : i(e.slice().sort((e, n) => e === t && n !== t ? -1 : +(e !== t && n === t)));
	}, [
		e,
		t,
		n
	]), r;
}
var uP = {
	roomListPrimaryFilters: "_roomListPrimaryFilters_kikqh_8",
	list: "_list_kikqh_17",
	iconButton: "_iconButton_kikqh_27"
}, dP = (e) => {
	switch (e) {
		case "unread": return U("room_list|filters|unread");
		case "people": return U("room_list|filters|people");
		case "rooms": return U("room_list|filters|rooms");
		case "favourite": return U("room_list|filters|favourite");
		case "mentions": return U("room_list|filters|mentions");
		case "invites": return U("room_list|filters|invites");
		case "low_priority": return U("room_list|filters|low_priority");
	}
}, fP = p(function({ filterIds: e, activeFilterId: t, onToggleFilter: n }) {
	let r = v(), [i, a] = T(!1), { ref: o, isWrapping: s, wrappingIndex: c } = cP(i, "wrapping"), l = lP(e, t, c);
	return /* @__PURE__ */ O(V, {
		className: uP.roomListPrimaryFilters,
		"data-testid": "primary-filters",
		gap: "var(--cpd-space-3x)",
		direction: "row-reverse",
		justify: "space-between",
		children: [s && /* @__PURE__ */ D(M, {
			kind: "secondary",
			"aria-expanded": i,
			"aria-controls": r,
			className: uP.iconButton,
			"aria-label": U(i ? "room_list|collapse_filters" : "room_list|expand_filters"),
			size: "28px",
			onClick: () => a((e) => !e),
			children: /* @__PURE__ */ D(US, {})
		}), /* @__PURE__ */ D(V, {
			id: r,
			as: "div",
			role: "listbox",
			"aria-label": U("room_list|primary_filters"),
			align: "center",
			gap: "var(--cpd-space-2x)",
			wrap: "wrap",
			className: uP.list,
			ref: o,
			children: l.map((e, r) => /* @__PURE__ */ D(j, {
				role: "option",
				tabIndex: 0,
				"aria-selected": e === t,
				selected: e === t,
				onClick: () => n(e),
				children: dP(e)
			}, `${e}-${r}`))
		})]
	});
}), pP = { skeleton: "_skeleton_1h0mx_8" }, mP = () => /* @__PURE__ */ D("div", { className: pP.skeleton }), hP = {
	genericPlaceholder: "_genericPlaceholder_1sxid_8",
	title: "_title_1sxid_16",
	description: "_description_1sxid_21",
	defaultPlaceholder: "_defaultPlaceholder_1sxid_27"
}, gP = ({ vm: e }) => {
	let t = H(e);
	if (!t.activeFilterId) return /* @__PURE__ */ D(_P, {
		title: U("room_list|empty|no_chats"),
		description: t.canCreateRoom ? U("room_list|empty|no_chats_description") : U("room_list|empty|no_chats_description_no_room_rights"),
		children: /* @__PURE__ */ O(V, {
			className: hP.defaultPlaceholder,
			align: "center",
			justify: "center",
			direction: "column",
			gap: "var(--cpd-space-4x)",
			children: [/* @__PURE__ */ D(A, {
				size: "md",
				kind: "secondary",
				Icon: LS,
				onClick: e.createChatRoom,
				children: U("action|start_chat")
			}), t.canCreateRoom && /* @__PURE__ */ D(A, {
				size: "md",
				kind: "secondary",
				Icon: Dw,
				onClick: e.createRoom,
				children: U("action|new_room")
			})]
		})
	});
	switch (t.activeFilterId) {
		case "people": return /* @__PURE__ */ D(_P, {
			title: U("room_list|empty|no_people"),
			description: U("room_list|empty|no_people_description")
		});
		case "rooms": return /* @__PURE__ */ D(_P, {
			title: U("room_list|empty|no_rooms"),
			description: U("room_list|empty|no_rooms_description")
		});
		case "unread": return /* @__PURE__ */ D(vP, {
			title: U("room_list|empty|no_unread"),
			action: U("room_list|empty|show_chats"),
			onAction: () => e.onToggleFilter(t.activeFilterId)
		});
		case "invites": return /* @__PURE__ */ D(vP, {
			title: U("room_list|empty|no_invites"),
			action: U("room_list|empty|show_activity"),
			onAction: () => e.onToggleFilter(t.activeFilterId)
		});
		case "mentions": return /* @__PURE__ */ D(vP, {
			title: U("room_list|empty|no_mentions"),
			action: U("room_list|empty|show_activity"),
			onAction: () => e.onToggleFilter(t.activeFilterId)
		});
		default: return /* @__PURE__ */ D(_P, {
			title: U("room_list|empty|no_chats"),
			description: U("room_list|empty|no_chats_description")
		});
	}
};
function _P({ title: e, description: t, children: n }) {
	return /* @__PURE__ */ O(V, {
		"data-testid": "empty-room-list",
		className: hP.genericPlaceholder,
		direction: "column",
		align: "stretch",
		justify: "center",
		gap: "var(--cpd-space-2x)",
		children: [
			/* @__PURE__ */ D("span", {
				className: hP.title,
				children: e
			}),
			t && /* @__PURE__ */ D("span", {
				className: hP.description,
				children: t
			}),
			n
		]
	});
}
function vP({ title: e, action: t, onAction: n }) {
	return /* @__PURE__ */ D(_P, {
		title: e,
		children: n && /* @__PURE__ */ D(A, {
			kind: "tertiary",
			onClick: n,
			children: t
		})
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@preact+signals-core@1.14.4/node_modules/@preact/signals-core/dist/signals-core.module.js
var yP = Symbol.for("preact-signals");
function bP() {
	if (TP > 1) TP--;
	else {
		var e, t = !1;
		for ((function() {
			var e = kP;
			for (kP = void 0; e !== void 0;) {
				var t = e.S;
				if (t.v === e.v) for (var n = t.t; n !== void 0; n = n.x) n.i === e.i && (n.i = t.i);
				e = e.o;
			}
		})(); wP !== void 0;) {
			var n = wP;
			for (wP = void 0, EP++; n !== void 0;) {
				var r = n.u;
				if (n.u = void 0, n.f &= -3, !(8 & n.f) && PP(n)) try {
					n.c();
				} catch (n) {
					t ||= (e = n, !0);
				}
				n = r;
			}
		}
		if (EP = 0, TP--, t) throw e;
	}
}
function xP(e) {
	if (TP > 0) return e();
	OP = ++DP, TP++;
	try {
		return e();
	} finally {
		bP();
	}
}
var SP, CP = void 0;
function J(e) {
	var t = CP, n = SP;
	CP = void 0, SP = void 0;
	try {
		return e();
	} finally {
		CP = t, SP = n;
	}
}
var wP = void 0, TP = 0, EP = 0, DP = 0, OP = 0, kP = void 0, AP = 0;
function jP(e) {
	if (CP !== void 0) {
		var t = e.n;
		if (t === void 0 || t.t !== CP) return t = {
			i: 0,
			S: e,
			p: CP.s,
			n: void 0,
			t: CP,
			e: void 0,
			x: void 0,
			r: t
		}, CP.s !== void 0 && (CP.s.n = t), CP.s = t, e.n = t, 32 & CP.f && e.S(t), t;
		if (t.i === -1) return t.i = 0, t.n !== void 0 && (t.n.p = t.p, t.p !== void 0 && (t.p.n = t.n), t.p = CP.s, t.n = void 0, CP.s.n = t, CP.s = t), t;
	}
}
function MP(e, t) {
	this.v = e, this.i = 0, this.n = void 0, this.t = void 0, this.l = 0, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
MP.prototype.brand = yP, MP.prototype.h = function() {
	return !0;
}, MP.prototype.S = function(e) {
	var t = this, n = this.t;
	n !== e && e.e === void 0 && (e.x = n, this.t = e, n === void 0 ? J(function() {
		var e;
		(e = t.W) == null || e.call(t);
	}) : n.e = e);
}, MP.prototype.U = function(e) {
	var t = this;
	if (this.t !== void 0) {
		var n = e.e, r = e.x;
		n !== void 0 && (n.x = r, e.e = void 0), r !== void 0 && (r.e = n, e.x = void 0), e === this.t && (this.t = r, r === void 0 && J(function() {
			var e;
			(e = t.Z) == null || e.call(t);
		}));
	}
}, MP.prototype.subscribe = function(e) {
	var t = this;
	return UP(function() {
		var n = t.value;
		J(function() {
			return e(n);
		});
	}, { name: "sub" });
}, MP.prototype.valueOf = function() {
	return this.value;
}, MP.prototype.toString = function() {
	return this.value + "";
}, MP.prototype.toJSON = function() {
	return this.value;
}, MP.prototype.peek = function() {
	var e = this;
	return J(function() {
		return e.value;
	});
}, Object.defineProperty(MP.prototype, "value", {
	get: function() {
		var e = jP(this);
		return e !== void 0 && (e.i = this.i), this.v;
	},
	set: function(e) {
		if (e !== this.v) {
			if (EP > 100) throw Error("Cycle detected");
			(function(e) {
				TP !== 0 && EP === 0 && e.l !== OP && (e.l = OP, kP = {
					S: e,
					v: e.v,
					i: e.i,
					o: kP
				});
			})(this), this.v = e, this.i++, AP++, TP++;
			try {
				for (var t = this.t; t !== void 0; t = t.x) t.t.N();
			} finally {
				bP();
			}
		}
	}
});
function NP(e, t) {
	return new MP(e, t);
}
function PP(e) {
	for (var t = e.s; t !== void 0; t = t.n) if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
	return !1;
}
function FP(e) {
	for (var t = e.s; t !== void 0; t = t.n) {
		var n = t.S.n;
		if (n !== void 0 && (t.r = n), t.S.n = t, t.i = -1, t.n === void 0) {
			e.s = t;
			break;
		}
	}
}
function IP(e) {
	for (var t = e.s, n = void 0; t !== void 0;) {
		var r = t.p;
		t.i === -1 ? (t.S.U(t), r !== void 0 && (r.n = t.n), t.n !== void 0 && (t.n.p = r)) : n = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = r;
	}
	e.s = n;
}
function LP(e, t) {
	MP.call(this, void 0, t), this.x = e, this.s = void 0, this.g = AP - 1, this.f = 4;
}
LP.prototype = new MP(), LP.prototype.h = function() {
	if (this.f &= -3, 1 & this.f) return !1;
	if ((36 & this.f) == 32 || (this.f &= -5, this.g === AP)) return !0;
	if (this.g = AP, this.f |= 1, this.i > 0 && !PP(this)) return this.f &= -2, !0;
	var e = CP;
	try {
		FP(this), CP = this;
		var t = this.x();
		(16 & this.f || this.v !== t || this.i === 0) && (this.v = t, this.f &= -17, this.i++);
	} catch (e) {
		this.v = e, this.f |= 16, this.i++;
	}
	return CP = e, IP(this), this.f &= -2, !0;
}, LP.prototype.S = function(e) {
	if (this.t === void 0) {
		this.f |= 36;
		for (var t = this.s; t !== void 0; t = t.n) t.S.S(t);
	}
	MP.prototype.S.call(this, e);
}, LP.prototype.U = function(e) {
	if (this.t !== void 0 && (MP.prototype.U.call(this, e), this.t === void 0)) {
		this.f &= -33;
		for (var t = this.s; t !== void 0; t = t.n) t.S.U(t);
	}
}, LP.prototype.N = function() {
	if (!(2 & this.f)) {
		this.f |= 6;
		for (var e = this.t; e !== void 0; e = e.x) e.t.N();
	}
}, Object.defineProperty(LP.prototype, "value", { get: function() {
	if (1 & this.f) throw Error("Cycle detected");
	var e = jP(this);
	if (this.h(), e !== void 0 && (e.i = this.i), 16 & this.f) throw this.v;
	return this.v;
} });
function RP(e, t) {
	return new LP(e, t);
}
function zP(e) {
	var t = e.m;
	if (e.m = void 0, typeof t == "function") {
		TP++;
		var n = CP;
		CP = void 0;
		try {
			t();
		} catch (t) {
			throw e.f &= -2, e.f |= 8, BP(e), t;
		} finally {
			CP = n, bP();
		}
	}
}
function BP(e) {
	for (var t = e.s; t !== void 0; t = t.n) t.S.U(t);
	e.x = void 0, e.s = void 0, zP(e);
}
function VP(e) {
	if (CP !== this) throw Error("Out-of-order effect");
	IP(this), CP = e, this.f &= -2, 8 & this.f && BP(this), bP();
}
function HP(e, t) {
	this.x = e, this.m = void 0, this.s = void 0, this.u = void 0, this.f = 32, this.name = t?.name, SP && SP.push(this);
}
HP.prototype.c = function() {
	var e = this.S();
	try {
		if (8 & this.f || this.x === void 0) return;
		var t = this.x();
		typeof t == "function" && (this.m = t);
	} finally {
		e();
	}
}, HP.prototype.S = function() {
	if (1 & this.f) throw Error("Cycle detected");
	this.f |= 1, this.f &= -9, zP(this), FP(this), TP++;
	var e = CP;
	return CP = this, VP.bind(this, e);
}, HP.prototype.N = function() {
	2 & this.f || (this.f |= 2, this.u = wP, wP = this);
}, HP.prototype.d = function() {
	this.f |= 8, 1 & this.f || BP(this);
}, HP.prototype.dispose = function() {
	this.d();
};
function UP(e, t) {
	var n = new HP(e, t);
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
var WP = Object.create, GP = Object.defineProperty, KP = Object.defineProperties, qP = Object.getOwnPropertyDescriptor, JP = Object.getOwnPropertyDescriptors, YP = Object.getOwnPropertySymbols, XP = Object.prototype.hasOwnProperty, ZP = Object.prototype.propertyIsEnumerable, QP = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), $P = (e) => {
	throw TypeError(e);
}, eF = (e, t, n) => t in e ? GP(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, tF = (e, t) => {
	for (var n in t ||= {}) XP.call(t, n) && eF(e, n, t[n]);
	if (YP) for (var n of YP(t)) ZP.call(t, n) && eF(e, n, t[n]);
	return e;
}, nF = (e, t) => KP(e, JP(t)), rF = (e, t) => GP(e, "name", {
	value: t,
	configurable: !0
}), iF = (e) => [
	,
	,
	,
	WP(e?.[QP("metadata")] ?? null)
], aF = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], oF = (e) => e !== void 0 && typeof e != "function" ? $P("Function expected") : e, sF = (e, t, n, r, i) => ({
	kind: aF[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? $P("Already initialized") : i.push(oF(e || null))
}), cF = (e, t) => eF(t, QP("metadata"), e[3]), lF = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, uF = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = aF[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && qP(d < 4 ? i : {
		get [n]() {
			return pF(this, a);
		},
		set [n](e) {
			return hF(this, a, e);
		}
	}, n));
	d ? p && d < 4 && rF(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : rF(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = sF(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => fF(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? pF : gF)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => hF(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? oF(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? $P("Object expected") : (oF(o = s.get) && (v.get = o), oF(o = s.set) && (v.set = o), oF(o = s.init) && g.unshift(o));
	return d || cF(e, i), v && GP(i, n, v), p ? d ^ 4 ? a : v : i;
}, dF = (e, t, n) => t.has(e) || $P("Cannot " + n), fF = (e, t) => Object(t) === t ? e.has(t) : $P("Cannot use the \"in\" operator on this value"), pF = (e, t, n) => (dF(e, t, "read from private field"), n ? n.call(e) : t.get(e)), mF = (e, t, n) => t.has(e) ? $P("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), hF = (e, t, n, r) => (dF(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), gF = (e, t, n) => (dF(e, t, "access private method"), n);
function _F(e, t) {
	if (t) {
		let n;
		return RP(() => {
			let r = e();
			return r && n && t(n, r) ? n : (n = r, r);
		});
	}
	return RP(e);
}
function vF(e, t) {
	if (Object.is(e, t)) return !0;
	if (e === null || t === null) return !1;
	if (typeof e == "function" && typeof t == "function") return e === t;
	if (e instanceof Set && t instanceof Set) {
		if (e.size !== t.size) return !1;
		for (let n of e) if (!t.has(n)) return !1;
		return !0;
	}
	if (Array.isArray(e)) return !Array.isArray(t) || e.length !== t.length ? !1 : !e.some((e, n) => !vF(e, t[n]));
	if (typeof e == "object" && typeof t == "object") {
		let n = Object.keys(e), r = Object.keys(t);
		return n.length === r.length && !n.some((n) => !vF(e[n], t[n]));
	}
	return !1;
}
function Y({ get: e }, t) {
	return {
		init(e) {
			return NP(e);
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
function yF(e, t) {
	let n = /* @__PURE__ */ new WeakMap();
	return function() {
		let t = n.get(this);
		return t || (t = _F(e.bind(this)), n.set(this, t)), t.value;
	};
}
function bF(e = !0) {
	return function(t, n) {
		n.addInitializer(function() {
			let t = n.kind === "field" || n.static ? this : Object.getPrototypeOf(this), r = Object.getOwnPropertyDescriptor(t, n.name);
			r && Object.defineProperty(t, n.name, nF(tF({}, r), { enumerable: e }));
		});
	};
}
function xF(...e) {
	let t = e.map((e) => UP(e));
	return () => t.forEach((e) => e());
}
var SF, CF, wF, TF, EF, DF = [Y], OF, kF, AF, jF, MF, NF, PF, FF, IF, LF, RF, zF, BF, VF;
EF = [Y], TF = [Y], wF = [bF()], CF = [bF()], SF = [bF()];
var HF = class {
	constructor(e, t = Object.is) {
		this.defaultValue = e, this.equals = t, lF(OF, 5, this), mF(this, NF), mF(this, kF, lF(OF, 8, this)), lF(OF, 11, this), mF(this, PF, lF(OF, 12, this)), lF(OF, 15, this), mF(this, RF, lF(OF, 16, this)), lF(OF, 19, this), this.reset = this.reset.bind(this), this.reset();
	}
	get current() {
		return pF(this, NF, BF);
	}
	get initial() {
		return pF(this, NF, jF);
	}
	get previous() {
		return pF(this, NF, IF);
	}
	set current(e) {
		let t = J(() => pF(this, NF, BF));
		e && t && this.equals(t, e) || xP(() => {
			pF(this, NF, jF) || hF(this, NF, e, MF), hF(this, NF, t, LF), hF(this, NF, e, VF);
		});
	}
	reset(e = this.defaultValue) {
		xP(() => {
			hF(this, NF, void 0, LF), hF(this, NF, e, MF), hF(this, NF, e, VF);
		});
	}
};
OF = iF(null), kF = /* @__PURE__ */ new WeakMap(), NF = /* @__PURE__ */ new WeakSet(), PF = /* @__PURE__ */ new WeakMap(), RF = /* @__PURE__ */ new WeakMap(), AF = uF(OF, 20, "#initial", DF, NF, kF), jF = AF.get, MF = AF.set, FF = uF(OF, 20, "#previous", EF, NF, PF), IF = FF.get, LF = FF.set, zF = uF(OF, 20, "#current", TF, NF, RF), BF = zF.get, VF = zF.set, uF(OF, 2, "current", wF, HF), uF(OF, 2, "initial", CF, HF), uF(OF, 2, "previous", SF, HF), cF(OF, HF);
function UF(e) {
	return J(() => {
		let t = {};
		for (let n in e) t[n] = e[n];
		return t;
	});
}
var WF = Object.create, GF = Object.defineProperty, KF = Object.getOwnPropertyDescriptor, qF = Object.getOwnPropertySymbols, JF = Object.prototype.hasOwnProperty, YF = Object.prototype.propertyIsEnumerable, XF = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), ZF = (e) => {
	throw TypeError(e);
}, QF = Math.pow, $F = (e, t, n) => t in e ? GF(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, eI = (e, t) => {
	for (var n in t ||= {}) JF.call(t, n) && $F(e, n, t[n]);
	if (qF) for (var n of qF(t)) YF.call(t, n) && $F(e, n, t[n]);
	return e;
}, tI = (e, t) => GF(e, "name", {
	value: t,
	configurable: !0
}), nI = (e) => [
	,
	,
	,
	WF(e?.[XF("metadata")] ?? null)
], rI = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], iI = (e) => e !== void 0 && typeof e != "function" ? ZF("Function expected") : e, aI = (e, t, n, r, i) => ({
	kind: rI[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? ZF("Already initialized") : i.push(iI(e || null))
}), oI = (e, t) => $F(t, XF("metadata"), e[3]), sI = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, cI = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = rI[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && KF(d < 4 ? i : {
		get [n]() {
			return dI(this, a);
		},
		set [n](e) {
			return pI(this, a, e);
		}
	}, n));
	d ? p && d < 4 && tI(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : tI(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = aI(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => uI(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? dI : mI)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => pI(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? iI(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? ZF("Object expected") : (iI(o = s.get) && (v.get = o), iI(o = s.set) && (v.set = o), iI(o = s.init) && g.unshift(o));
	return d || oI(e, i), v && GF(i, n, v), p ? d ^ 4 ? a : v : i;
}, lI = (e, t, n) => t.has(e) || ZF("Cannot " + n), uI = (e, t) => Object(t) === t ? e.has(t) : ZF("Cannot use the \"in\" operator on this value"), dI = (e, t, n) => (lI(e, t, "read from private field"), n ? n.call(e) : t.get(e)), fI = (e, t, n) => t.has(e) ? ZF("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), pI = (e, t, n, r) => (lI(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), mI = (e, t, n) => (lI(e, t, "access private method"), n), hI = class e {
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
}, gI = class e {
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
		return c.scale = eI({}, s), c;
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
		return new hI((e + n) / 2, (t + r) / 2);
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
		return t instanceof e ? _I(this, t) : 0;
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
		return hI.delta({
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
function _I(e, t) {
	let n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), i = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), o = i - r, s = a - n;
	return r < i && n < a ? o * s : 0;
}
var vI, yI, bI, xI, SI, CI = class extends (bI = HF, yI = [yF], vI = [yF], bI) {
	constructor(e) {
		let t = hI.from(e);
		super(t, (e, t) => hI.equals(e, t)), sI(SI, 5, this), fI(this, xI, 0), this.velocity = {
			x: 0,
			y: 0
		};
	}
	get delta() {
		return hI.delta(this.current, this.initial);
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
		let { current: t } = this, n = hI.from(e), r = {
			x: n.x - t.x,
			y: n.y - t.y
		}, i = Date.now(), a = i - dI(this, xI), o = (e) => Math.round(e / a * 100);
		xP(() => {
			pI(this, xI, i), this.velocity = {
				x: o(r.x),
				y: o(r.y)
			}, super.current = n;
		});
	}
	reset(e = this.defaultValue) {
		super.reset(hI.from(e)), this.velocity = {
			x: 0,
			y: 0
		};
	}
};
SI = nI(bI), xI = /* @__PURE__ */ new WeakMap(), cI(SI, 2, "delta", yI, CI), cI(SI, 2, "direction", vI, CI), oI(SI, CI);
function wI({ x: e, y: t }, n) {
	let r = Math.abs(e), i = Math.abs(t);
	return typeof n == "number" ? Math.sqrt(QF(r, 2) + QF(i, 2)) > n : "x" in n && "y" in n ? r > n.x && i > n.y : "x" in n ? r > n.x : "y" in n && i > n.y;
}
var TI = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(TI || {}), EI = Object.values(TI), DI = Object.create, OI = Object.defineProperty, kI = Object.defineProperties, AI = Object.getOwnPropertyDescriptor, jI = Object.getOwnPropertyDescriptors, MI = Object.getOwnPropertySymbols, NI = Object.prototype.hasOwnProperty, PI = Object.prototype.propertyIsEnumerable, FI = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), II = (e) => {
	throw TypeError(e);
}, LI = (e, t, n) => t in e ? OI(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, RI = (e, t) => {
	for (var n in t ||= {}) NI.call(t, n) && LI(e, n, t[n]);
	if (MI) for (var n of MI(t)) PI.call(t, n) && LI(e, n, t[n]);
	return e;
}, zI = (e, t) => kI(e, jI(t)), BI = (e, t) => OI(e, "name", {
	value: t,
	configurable: !0
}), VI = (e, t) => {
	var n = {};
	for (var r in e) NI.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && MI) for (var r of MI(e)) t.indexOf(r) < 0 && PI.call(e, r) && (n[r] = e[r]);
	return n;
}, HI = (e) => [
	,
	,
	,
	DI(e?.[FI("metadata")] ?? null)
], UI = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], WI = (e) => e !== void 0 && typeof e != "function" ? II("Function expected") : e, GI = (e, t, n, r, i) => ({
	kind: UI[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? II("Already initialized") : i.push(WI(e || null))
}), KI = (e, t) => LI(t, FI("metadata"), e[3]), X = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, Z = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = UI[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && AI(d < 4 ? i : {
		get [n]() {
			return YI(this, a);
		},
		set [n](e) {
			return XI(this, a, e);
		}
	}, n));
	d ? p && d < 4 && BI(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : BI(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = GI(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => JI(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? YI : ZI)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => XI(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? WI(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? II("Object expected") : (WI(o = s.get) && (v.get = o), WI(o = s.set) && (v.set = o), WI(o = s.init) && g.unshift(o));
	return d || KI(e, i), v && OI(i, n, v), p ? d ^ 4 ? a : v : i;
}, qI = (e, t, n) => t.has(e) || II("Cannot " + n), JI = (e, t) => Object(t) === t ? e.has(t) : II("Cannot use the \"in\" operator on this value"), YI = (e, t, n) => (qI(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Q = (e, t, n) => t.has(e) ? II("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), XI = (e, t, n, r) => (qI(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), ZI = (e, t, n) => (qI(e, t, "access private method"), n);
function QI(e, t) {
	return {
		plugin: e,
		options: t
	};
}
function $I(e) {
	return (t) => QI(e, t);
}
function eL(e) {
	return typeof e == "function" ? {
		plugin: e,
		options: void 0
	} : e;
}
var tL = [Y], nL, rL, iL, aL = class {
	constructor(e, t) {
		this.manager = e, this.options = t, Q(this, rL, X(nL, 8, this, !1)), X(nL, 11, this), Q(this, iL, /* @__PURE__ */ new Set());
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
		let t = UP(e.bind(this));
		return YI(this, iL).add(t), t;
	}
	destroy() {
		YI(this, iL).forEach((e) => e());
	}
	static configure(e) {
		return QI(this, e);
	}
};
nL = HI(null), rL = /* @__PURE__ */ new WeakMap(), iL = /* @__PURE__ */ new WeakMap(), Z(nL, 4, "disabled", tL, aL, rL), KI(nL, aL);
var oL = class extends aL {}, sL, cL = class {
	constructor(e) {
		this.manager = e, this.instances = /* @__PURE__ */ new Map(), Q(this, sL, []);
	}
	get values() {
		return Array.from(this.instances.values());
	}
	set values(e) {
		let t = e.map(eL).reduce((e, t) => {
			let n = e.find(({ plugin: e }) => e === t.plugin);
			return n ? (n.options = t.options, e) : [...e, t];
		}, []), n = t.map(({ plugin: e }) => e);
		for (let e of YI(this, sL)) if (!n.includes(e)) {
			if (e.prototype instanceof oL) continue;
			this.unregister(e);
		}
		for (let { plugin: e, options: n } of t) this.register(e, n);
		XI(this, sL, n);
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
sL = /* @__PURE__ */ new WeakMap();
function lL(e, t) {
	return e.priority === t.priority ? e.type === t.type ? t.value - e.value : t.type - e.type : t.priority - e.priority;
}
var uL = [], dL, fL, pL = class extends aL {
	constructor(e) {
		super(e), Q(this, dL), Q(this, fL), this.computeCollisions = this.computeCollisions.bind(this), XI(this, fL, NP(uL)), this.destroy = xF(() => {
			let e = this.computeCollisions(), t = J(() => this.manager.dragOperation.position.current);
			if (e !== uL) {
				let e = YI(this, dL);
				if (XI(this, dL, t), e && t.x == e.x && t.y == e.y) return;
			} else XI(this, dL, void 0);
			YI(this, fL).value = e;
		}, () => {
			let { dragOperation: e } = this.manager;
			e.status.initialized && this.forceUpdate();
		});
	}
	forceUpdate(e = !0) {
		J(() => {
			e ? YI(this, fL).value = this.computeCollisions() : XI(this, dL, void 0);
		});
	}
	computeCollisions(e, t) {
		let { registry: n, dragOperation: r } = this.manager, { source: i, shape: a, status: o } = r;
		if (!o.initialized || !a) return uL;
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
		return c.length === 0 ? uL : (s.sort(lL), s);
	}
	get collisions() {
		return YI(this, fL).value;
	}
};
dL = /* @__PURE__ */ new WeakMap(), fL = /* @__PURE__ */ new WeakMap();
var mL, hL, gL = [Y], _L, vL, yL, bL, xL, SL, CL;
hL = [Y], mL = [Y];
var wL = class e {
	constructor(e, t) {
		Q(this, bL, X(yL, 8, this)), X(yL, 11, this), Q(this, xL), Q(this, SL, X(yL, 12, this)), X(yL, 15, this), Q(this, CL, X(yL, 16, this)), X(yL, 19, this);
		let { effects: n, id: r, data: i = {}, disabled: a = !1, register: o = !0 } = e, s = r;
		XI(this, xL, NP(r)), this.manager = t, this.data = i, this.disabled = a, this.effects = () => [() => {
			let { id: e, manager: t } = this;
			if (e !== s) return s = e, t?.registry.register(this), () => t?.registry.unregister(this);
		}, ...n?.() ?? []], this.register = this.register.bind(this), this.unregister = this.unregister.bind(this), this.destroy = this.destroy.bind(this), t && o && queueMicrotask(this.register);
	}
	get id() {
		let t = YI(this, xL).value;
		return e.pendingIdChanges?.get(this) ?? t;
	}
	set id(t) {
		t !== (e.pendingIdChanges?.get(this) ?? YI(this, xL).peek()) && (e.pendingIdChanges || (e.pendingIdChanges = /* @__PURE__ */ new Map(), queueMicrotask(() => {
			var t;
			return ZI(t = e, _L, vL).call(t);
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
yL = HI(null), _L = /* @__PURE__ */ new WeakSet(), vL = function() {
	let e = wL.pendingIdChanges;
	wL.pendingIdChanges = null, e && xP(() => {
		for (let [t, n] of e) YI(t, xL).value = n;
	});
}, bL = /* @__PURE__ */ new WeakMap(), xL = /* @__PURE__ */ new WeakMap(), SL = /* @__PURE__ */ new WeakMap(), CL = /* @__PURE__ */ new WeakMap(), Z(yL, 4, "manager", gL, wL, bL), Z(yL, 4, "data", hL, wL, SL), Z(yL, 4, "disabled", mL, wL, CL), Q(wL, _L), KI(yL, wL), wL.pendingIdChanges = null;
var TL = wL, EL = class {
	constructor() {
		this.map = NP(/* @__PURE__ */ new Map()), this.cleanupFunctions = /* @__PURE__ */ new WeakMap(), this.register = (e, t) => {
			let n = this.map.peek(), r = n.get(e), i = () => this.unregister(e, t);
			if (r === t) return i;
			r && r.id === e && (this.cleanupFunctions.get(r)?.(), this.cleanupFunctions.delete(r));
			let a = new Map(n);
			for (let [r, i] of n) if (i === t && r !== e) {
				a.delete(r);
				break;
			}
			a.set(e, t), this.map.value = a;
			let o = xF(...t.effects());
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
}, DL, OL, kL, AL, jL, ML, NL, PL, FL, IL, LL, RL = class extends (NL = TL, ML = [Y], jL = [Y], AL = [Y], kL = [yF], OL = [yF], DL = [yF], NL) {
	constructor(e, t) {
		var n = e, { modifiers: r, type: i, sensors: a, plugins: o, effects: s } = n, c = VI(n, [
			"modifiers",
			"type",
			"sensors",
			"plugins",
			"effects"
		]);
		super(zI(RI({}, c), { effects: () => [...s?.() ?? [], () => {
			let { manager: e, plugins: t } = this;
			if (e && t) for (let n of t) {
				let { plugin: t } = eL(n);
				e.registry.plugins.register(t);
			}
		}] }), t), X(PL, 5, this), Q(this, FL, X(PL, 8, this)), X(PL, 11, this), Q(this, IL, X(PL, 12, this)), X(PL, 15, this), Q(this, LL, X(PL, 16, this, this.isDragSource ? "dragging" : "idle")), X(PL, 19, this), this.type = i, this.sensors = a, this.modifiers = r, this.alignment = c.alignment, this.plugins = o;
	}
	pluginConfig(e) {
		if (this.plugins) for (let t of this.plugins) {
			let n = eL(t);
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
PL = HI(NL), FL = /* @__PURE__ */ new WeakMap(), IL = /* @__PURE__ */ new WeakMap(), LL = /* @__PURE__ */ new WeakMap(), Z(PL, 4, "type", ML, RL, FL), Z(PL, 4, "modifiers", jL, RL, IL), Z(PL, 4, "status", AL, RL, LL), Z(PL, 2, "isDropping", kL, RL), Z(PL, 2, "isDragging", OL, RL), Z(PL, 2, "isDragSource", DL, RL), KI(PL, RL);
var zL, BL, VL, HL, UL, WL, GL, KL, qL, JL, YL, XL, ZL, QL = class extends (GL = TL, WL = [Y], UL = [Y], HL = [Y], VL = [Y], BL = [Y], zL = [yF], GL) {
	constructor(e, t) {
		var n = e, { accept: r, collisionDetector: i, collisionPriority: a, type: o } = n, s = VI(n, [
			"accept",
			"collisionDetector",
			"collisionPriority",
			"type"
		]);
		super(s, t), X(KL, 5, this), Q(this, qL, X(KL, 8, this)), X(KL, 11, this), Q(this, JL, X(KL, 12, this)), X(KL, 15, this), Q(this, YL, X(KL, 16, this)), X(KL, 19, this), Q(this, XL, X(KL, 20, this)), X(KL, 23, this), Q(this, ZL, X(KL, 24, this)), X(KL, 27, this), this.accept = r, this.collisionDetector = i, this.collisionPriority = a, this.type = o;
	}
	accepts(e) {
		let { accept: t } = this;
		return t ? typeof t == "function" ? t(e) : e.type ? Array.isArray(t) ? t.includes(e.type) : e.type === t : !1 : !0;
	}
	get isDropTarget() {
		return this.manager?.dragOperation.target?.id === this.id;
	}
};
KL = HI(GL), qL = /* @__PURE__ */ new WeakMap(), JL = /* @__PURE__ */ new WeakMap(), YL = /* @__PURE__ */ new WeakMap(), XL = /* @__PURE__ */ new WeakMap(), ZL = /* @__PURE__ */ new WeakMap(), Z(KL, 4, "accept", WL, QL, qL), Z(KL, 4, "type", UL, QL, JL), Z(KL, 4, "collisionDetector", HL, QL, YL), Z(KL, 4, "collisionPriority", VL, QL, XL), Z(KL, 4, "shape", BL, QL, ZL), Z(KL, 2, "isDropTarget", zL, QL), KI(KL, QL);
var $L = class {
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
}, eR = class extends $L {
	constructor(e) {
		super(), this.manager = e;
	}
	dispatch(e, t) {
		let n = [t, this.manager];
		super.dispatch(e, ...n);
	}
};
function tR(e, t = !0) {
	let n = !1;
	return zI(RI({}, e), {
		cancelable: t,
		get defaultPrevented() {
			return n;
		},
		preventDefault() {
			t && (n = !0);
		}
	});
}
var nR = class extends oL {
	constructor(e) {
		super(e);
		let t = (e, t) => e.map(({ id: e }) => e).join("") === t.map(({ id: e }) => e).join(""), n = [];
		this.destroy = xF(() => {
			let { dragOperation: t, collisionObserver: r } = e;
			t.status.initializing && (n = [], r.enable());
		}, () => {
			let { collisionObserver: r, monitor: i } = e, { collisions: a } = r;
			if (r.isDisabled() || TL.pendingIdChanges) return;
			let o = tR({ collisions: a });
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
}, rR = /* @__PURE__ */ ((e) => (e[e.Lowest = 0] = "Lowest", e[e.Low = 1] = "Low", e[e.Normal = 2] = "Normal", e[e.High = 3] = "High", e[e.Highest = 4] = "Highest", e))(rR || {}), iR = /* @__PURE__ */ ((e) => (e[e.Collision = 0] = "Collision", e[e.ShapeIntersection = 1] = "ShapeIntersection", e[e.PointerIntersection = 2] = "PointerIntersection", e))(iR || {}), aR, oR, sR, cR, lR, uR, dR = [Y], fR, pR;
uR = [yF], lR = [yF], cR = [yF], sR = [yF], oR = [yF], aR = [yF];
var mR = class {
	constructor() {
		X(fR, 5, this), Q(this, pR, X(fR, 8, this, "idle")), X(fR, 11, this);
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
fR = HI(null), pR = /* @__PURE__ */ new WeakMap(), Z(fR, 4, "value", dR, mR, pR), Z(fR, 2, "current", uR, mR), Z(fR, 2, "idle", lR, mR), Z(fR, 2, "initializing", cR, mR), Z(fR, 2, "initialized", sR, mR), Z(fR, 2, "dragging", oR, mR), Z(fR, 2, "dropped", aR, mR), KI(fR, mR);
var hR = class {
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
			let r = tR({ operation: t.snapshot() });
			return t.status.dragging && this.manager.monitor.dispatch("dragover", r), this.manager.renderer.rendering.then(() => r.defaultPrevented);
		});
	}
	start(e) {
		return J(() => {
			let { dragOperation: t } = this.manager;
			if (e.source != null && this.setDragSource(e.source), !t.source) throw Error("Cannot start a drag operation without a drag source");
			if (!t.status.idle) throw Error("Cannot start a drag operation while another is active");
			let n = new AbortController(), { event: r, coordinates: i } = e;
			xP(() => {
				t.status.set("initialization-pending"), t.shape = null, t.canceled = !1, t.activatorEvent = r ?? null, t.position.reset(i);
			});
			let a = tR({ operation: t.snapshot() });
			return this.manager.monitor.dispatch("beforedragstart", a), a.defaultPrevented ? (t.reset(), n.abort(), n) : (t.status.set("initializing"), t.controller = n, this.manager.renderer.rendering.then(() => {
				if (n.signal.aborted) return;
				let { status: e } = t;
				e.current === "initializing" && xP(() => {
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
			let i = tR({
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
						let { source: e } = t, n = UP(() => {
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
}, gR = class extends aL {
	constructor(e, t) {
		super(e, t), this.manager = e, this.options = t;
	}
}, _R = class extends AbortController {
	constructor(e, t) {
		super(), this.constraints = e, this.onActivate = t, this.activated = !1;
		for (let t of e ?? []) t.controller = this;
	}
	onEvent(e) {
		if (!this.activated) {
			if (this.constraints?.length) for (let t of this.constraints) t.onEvent(e);
			else this.activate(e);
		}
	}
	activate(e) {
		this.activated || (this.activated = !0, this.onActivate(e));
	}
	abort(e) {
		this.activated = !1, super.abort(e);
	}
}, vR, yR = class {
	constructor(e) {
		this.options = e, Q(this, vR);
	}
	set controller(e) {
		XI(this, vR, e), e.signal.addEventListener("abort", () => this.abort());
	}
	activate(e) {
		var t;
		(t = YI(this, vR)) == null || t.activate(e);
	}
};
vR = /* @__PURE__ */ new WeakMap();
var bR = class extends aL {
	constructor(e, t) {
		super(e, t), this.manager = e, this.options = t;
	}
	apply(e) {
		return e.transform;
	}
}, xR = class {
	constructor(e) {
		this.draggables = new EL(), this.droppables = new EL(), this.plugins = new cL(e), this.sensors = new cL(e), this.modifiers = new cL(e);
	}
	register(e, t) {
		if (e instanceof RL) return this.draggables.register(e.id, e);
		if (e instanceof QL) return this.droppables.register(e.id, e);
		if (e.prototype instanceof bR) return this.modifiers.register(e, t);
		if (e.prototype instanceof gR) return this.sensors.register(e, t);
		if (e.prototype instanceof aL) return this.plugins.register(e, t);
		throw Error("Invalid instance type");
	}
	unregister(e) {
		if (e instanceof TL) return e instanceof RL ? this.draggables.unregister(e.id, e) : e instanceof QL ? this.droppables.unregister(e.id, e) : () => {};
		if (e.prototype instanceof bR) return this.modifiers.unregister(e);
		if (e.prototype instanceof gR) return this.sensors.unregister(e);
		if (e.prototype instanceof aL) return this.plugins.unregister(e);
		throw Error("Invalid instance type");
	}
	destroy() {
		this.draggables.destroy(), this.droppables.destroy(), this.plugins.destroy(), this.sensors.destroy(), this.modifiers.destroy();
	}
}, SR, CR, wR, TR, ER, DR, OR, kR, AR = [yF], jR, MR, NR, PR, FR, IR, LR, RR, zR, BR;
kR = [Y], OR = [Y], DR = [Y], ER = [Y], TR = [Y], wR = [yF], CR = [yF], SR = [yF];
var VR = class {
	constructor(e) {
		X(PR, 5, this), Q(this, jR), Q(this, MR), Q(this, NR, new HF(void 0, (e, t) => e && t ? e.equals(t) : e === t)), this.status = new mR(), Q(this, FR, X(PR, 8, this, !1)), X(PR, 11, this), Q(this, IR, X(PR, 12, this, null)), X(PR, 15, this), Q(this, LR, X(PR, 16, this, null)), X(PR, 19, this), Q(this, RR, X(PR, 20, this, null)), X(PR, 23, this), Q(this, zR, X(PR, 24, this, [])), X(PR, 27, this), this.position = new CI({
			x: 0,
			y: 0
		}), Q(this, BR, {
			x: 0,
			y: 0
		}), XI(this, jR, e);
	}
	get shape() {
		let { current: e, initial: t, previous: n } = YI(this, NR);
		return !e || !t ? null : {
			current: e,
			initial: t,
			previous: n
		};
	}
	set shape(e) {
		e ? YI(this, NR).current = e : YI(this, NR).reset();
	}
	get source() {
		let e = this.sourceIdentifier;
		if (e == null) return null;
		let t = YI(this, jR).registry.draggables.get(e);
		return t && XI(this, MR, t), t ?? YI(this, MR) ?? null;
	}
	get target() {
		let e = this.targetIdentifier;
		return e == null ? null : YI(this, jR).registry.droppables.get(e) ?? null;
	}
	get transform() {
		let { x: e, y: t } = this.position.delta, n = {
			x: e,
			y: t
		};
		for (let e of this.modifiers) n = e.apply(zI(RI({}, this.snapshot()), { transform: n }));
		return XI(this, BR, n), n;
	}
	snapshot() {
		return J(() => ({
			source: this.source,
			target: this.target,
			activatorEvent: this.activatorEvent,
			transform: YI(this, BR),
			shape: this.shape ? UF(this.shape) : null,
			position: UF(this.position),
			status: UF(this.status),
			canceled: this.canceled
		}));
	}
	reset() {
		xP(() => {
			this.status.set("idle"), this.sourceIdentifier = null, this.targetIdentifier = null, YI(this, NR).reset(), this.position.reset({
				x: 0,
				y: 0
			}), XI(this, BR, {
				x: 0,
				y: 0
			}), this.modifiers = [];
		});
	}
};
PR = HI(null), jR = /* @__PURE__ */ new WeakMap(), MR = /* @__PURE__ */ new WeakMap(), NR = /* @__PURE__ */ new WeakMap(), FR = /* @__PURE__ */ new WeakMap(), IR = /* @__PURE__ */ new WeakMap(), LR = /* @__PURE__ */ new WeakMap(), RR = /* @__PURE__ */ new WeakMap(), zR = /* @__PURE__ */ new WeakMap(), BR = /* @__PURE__ */ new WeakMap(), Z(PR, 2, "shape", AR, VR), Z(PR, 4, "canceled", kR, VR, FR), Z(PR, 4, "activatorEvent", OR, VR, IR), Z(PR, 4, "sourceIdentifier", DR, VR, LR), Z(PR, 4, "targetIdentifier", ER, VR, RR), Z(PR, 4, "modifiers", TR, VR, zR), Z(PR, 2, "source", wR, VR), Z(PR, 2, "target", CR, VR), Z(PR, 2, "transform", SR, VR), KI(PR, VR);
var HR = { get rendering() {
	return Promise.resolve();
} };
function UR(e, t) {
	return typeof e == "function" ? e(t) : e ?? t;
}
var WR = class {
	constructor(e) {
		this.destroy = () => {
			this.dragOperation.status.idle || this.actions.stop({ canceled: !0 }), this.dragOperation.modifiers.forEach((e) => e.destroy()), this.registry.destroy(), this.collisionObserver.destroy();
		};
		let t = e ?? {}, n = UR(t.plugins, []), r = UR(t.sensors, []), i = UR(t.modifiers, []), a = t.renderer ?? HR, o = new eR(this), s = new xR(this);
		this.registry = s, this.monitor = o, this.renderer = a, this.actions = new hR(this), this.dragOperation = new VR(this), this.collisionObserver = new pL(this), this.plugins = [nR, ...n], this.modifiers = i, this.sensors = r;
		let { destroy: c } = this, l = xF(() => {
			let e = J(() => this.dragOperation.modifiers), t = this.modifiers;
			for (let n of e) t.includes(n) || n.destroy();
			this.dragOperation.modifiers = (this.dragOperation.source?.modifiers)?.map((e) => {
				let { plugin: t, options: n } = eL(e);
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
}, GR = (e) => {
	throw TypeError(e);
}, KR = (e, t, n) => t.has(e) || GR("Cannot " + n), $ = (e, t, n) => (KR(e, t, "read from private field"), t.get(e)), qR = (e, t, n) => t.has(e) ? GR("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), JR = (e, t, n, r) => (KR(e, t, "write to private field"), t.set(e, n), n), YR = (e, t, n) => (KR(e, t, "access private method"), n);
function XR(e) {
	return e ? e instanceof KeyframeEffect || "getKeyframes" in e && typeof e.getKeyframes == "function" : !1;
}
function ZR(e, t) {
	let n = e.getAnimations(), r = null;
	for (let e of n) {
		if (e.playState !== "running") continue;
		let { effect: n } = e, i = (XR(n) ? n.getKeyframes() : []).filter(t);
		i.length > 0 && (r = [i[i.length - 1], e]);
	}
	return r;
}
function QR(e) {
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
function $R(e) {
	let t = Object.prototype.toString.call(e);
	return t === "[object Window]" || t === "[object global]";
}
function ez(e) {
	return "nodeType" in e;
}
function tz(e) {
	return e ? $R(e) ? e : ez(e) ? "defaultView" in e ? e.defaultView ?? window : e.ownerDocument?.defaultView ?? window : window : window;
}
function nz(e) {
	let { Document: t } = tz(e);
	return e instanceof t || "nodeType" in e && e.nodeType === Node.DOCUMENT_NODE;
}
function rz(e) {
	return !e || $R(e) ? !1 : e instanceof tz(e).HTMLElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("html");
}
function iz(e) {
	return e instanceof tz(e).SVGElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("svg");
}
function az(e) {
	return e ? $R(e) ? e.document : ez(e) ? nz(e) ? e : rz(e) || iz(e) ? e.ownerDocument : document : document : document;
}
function oz(e) {
	let { documentElement: t } = az(e), n = tz(e).visualViewport, r = n?.width ?? t.clientWidth, i = n?.height ?? t.clientHeight, a = n?.offsetTop ?? 0, o = n?.offsetLeft ?? 0;
	return {
		top: a,
		left: o,
		right: o + r,
		bottom: a + i,
		width: r,
		height: i
	};
}
function sz(e, t) {
	if (cz(e) && e.open === !1) return !1;
	let { overflow: n, overflowX: r, overflowY: i } = getComputedStyle(e);
	return n === "visible" && r === "visible" && i === "visible";
}
function cz(e) {
	return e.tagName === "DETAILS";
}
function lz(e, t = e.getBoundingClientRect(), n = 0) {
	let r = t, { ownerDocument: i } = e, a = i.defaultView ?? window, o = e.parentElement;
	for (; o && o !== i.documentElement;) {
		if (!sz(o)) {
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
function uz(e) {
	return {
		x: e.clientX,
		y: e.clientY
	};
}
var dz = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function fz(e = document, t = /* @__PURE__ */ new Set()) {
	if (t.has(e)) return [];
	t.add(e);
	let n = [e];
	for (let r of Array.from(e.querySelectorAll("iframe, frame"))) try {
		let e = r.contentDocument;
		e && !t.has(e) && n.push(...fz(e, t));
	} catch {}
	try {
		let r = e.defaultView;
		if (r && r !== window.top) {
			let i = r.parent;
			i && i.document && i.document !== e && n.push(...fz(i.document, t));
		}
	} catch {}
	return n;
}
function pz() {
	return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function mz() {
	let e = pz() ? window.visualViewport : null;
	return {
		x: e?.offsetLeft ?? 0,
		y: e?.offsetTop ?? 0
	};
}
function hz(e) {
	return !e || !ez(e) ? !1 : e instanceof tz(e).ShadowRoot;
}
function gz(e) {
	if (e && ez(e)) {
		let t = e.getRootNode();
		if (hz(t) || t instanceof Document) return t;
	}
	return az(e);
}
function _z(e) {
	return e.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function vz(e) {
	let t = "input, textarea, select, canvas, [contenteditable]", n = e.cloneNode(!0), r = Array.from(e.querySelectorAll(t));
	return Array.from(n.querySelectorAll(t)).forEach((e, t) => {
		let n = r[t];
		yz(e) && yz(n) && (e.type !== "file" && (e.value = n.value), e.type === "radio" && e.name && (e.name = `Cloned__${e.name}`)), bz(e) && bz(n) && n.width > 0 && n.height > 0 && e.getContext("2d")?.drawImage(n, 0, 0);
	}), n;
}
function yz(e) {
	return "value" in e;
}
function bz(e) {
	return e.tagName === "CANVAS";
}
function xz(e, { x: t, y: n }) {
	let r = e.elementFromPoint(t, n);
	if (Sz(r)) {
		let { contentDocument: e } = r;
		if (e) {
			let { left: i, top: a } = r.getBoundingClientRect();
			return xz(e, {
				x: t - i,
				y: n - a
			});
		}
	}
	return r;
}
function Sz(e) {
	return e?.tagName === "IFRAME";
}
var Cz = /* @__PURE__ */ new WeakMap();
function wz(e) {
	return e.closest("\n    input:not([disabled]),\n    select:not([disabled]),\n    textarea:not([disabled]),\n    button:not([disabled]),\n    a[href],\n    [contenteditable]:not([contenteditable=\"false\"])\n  ");
}
var Tz = class {
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
function Ez(e) {
	let t = e?.ownerDocument.defaultView;
	if (t && t.self !== t.parent) return t.frameElement;
}
function Dz(e) {
	let t = /* @__PURE__ */ new Set(), n = Ez(e);
	for (; n;) t.add(n), n = Ez(n);
	return t;
}
function Oz(e, t) {
	let n = setTimeout(e, t);
	return () => clearTimeout(n);
}
function kz(e, t) {
	let n = () => performance.now(), r, i;
	return function(...a) {
		let o = this;
		i ? (r?.(), r = Oz(() => {
			e.apply(o, a), i = n();
		}, t - (n() - i))) : (e.apply(o, a), i = n());
	};
}
function Az(e, t) {
	return e === t ? !0 : !e || !t ? !1 : e.top == t.top && e.left == t.left && e.right == t.right && e.bottom == t.bottom;
}
function jz(e, t = e.getBoundingClientRect()) {
	let { width: n, height: r } = lz(e, t);
	return n > 0 && r > 0;
}
var Mz = dz ? ResizeObserver : class {
	observe() {}
	unobserve() {}
	disconnect() {}
}, Nz, Pz = class extends Mz {
	constructor(e) {
		super((t) => {
			$(this, Nz) ? e(t, this) : JR(this, Nz, !0);
		}), qR(this, Nz, !1);
	}
};
Nz = /* @__PURE__ */ new WeakMap();
var Fz = Array.from({ length: 100 }, (e, t) => t / 100), Iz = 75, Lz, Rz, zz, Bz, Vz, Hz, Uz, Wz, Gz, Kz, qz, Jz = class {
	constructor(e, t, n = {
		debug: !1,
		skipInitial: !1
	}) {
		this.element = e, this.callback = t, qR(this, Gz), this.disconnect = () => {
			var e, t, n;
			JR(this, Uz, !0), (e = $(this, zz)) == null || e.disconnect(), (t = $(this, Bz)) == null || t.disconnect(), $(this, Vz).disconnect(), (n = $(this, Hz)) == null || n.remove();
		}, qR(this, Lz, !0), qR(this, Rz), qR(this, zz), qR(this, Bz), qR(this, Vz), qR(this, Hz), qR(this, Uz, !1), qR(this, Wz, kz(() => {
			var e;
			let { element: t } = this;
			if ((e = $(this, Bz)) == null || e.disconnect(), $(this, Uz) || !$(this, Lz) || !t.isConnected) return;
			let n = t.ownerDocument ?? document, { innerHeight: r, innerWidth: i } = n.defaultView ?? window, a = t.getBoundingClientRect(), { top: o, left: s, bottom: c, right: l } = lz(t, a), u = -Math.floor(o), d = -Math.floor(s), f = `${u}px ${-Math.floor(i - l)}px ${-Math.floor(r - c)}px ${d}px`;
			this.boundingClientRect = a, JR(this, Bz, new IntersectionObserver((e) => {
				let [n] = e, { intersectionRect: r } = n;
				(n.intersectionRatio === 1 ? gI.intersectionRatio(r, lz(t)) : n.intersectionRatio) !== 1 && $(this, Wz).call(this);
			}, {
				threshold: Fz,
				rootMargin: f,
				root: n
			})), $(this, Bz).observe(t), YR(this, Gz, Kz).call(this);
		}, Iz)), this.boundingClientRect = e.getBoundingClientRect(), JR(this, Lz, jz(e, this.boundingClientRect));
		let r = !0;
		this.callback = (e) => {
			r && (r = !1, n.skipInitial) || t(e);
		};
		let i = e.ownerDocument;
		n?.debug && (JR(this, Hz, document.createElement("div")), $(this, Hz).style.background = "rgba(0,0,0,0.15)", $(this, Hz).style.position = "fixed", $(this, Hz).style.pointerEvents = "none", i.body.appendChild($(this, Hz))), JR(this, Vz, new IntersectionObserver((t) => {
			var n, r;
			let { boundingClientRect: i, isIntersecting: a } = t[t.length - 1], { width: o, height: s } = i, c = $(this, Lz);
			JR(this, Lz, a), (o || s) && (c && !a ? ((n = $(this, Bz)) == null || n.disconnect(), this.callback(null), (r = $(this, zz)) == null || r.disconnect(), JR(this, zz, void 0), $(this, Hz) && ($(this, Hz).style.visibility = "hidden")) : $(this, Wz).call(this), a && !$(this, zz) && (JR(this, zz, new Pz($(this, Wz))), $(this, zz).observe(e)));
		}, {
			threshold: Fz,
			root: i
		})), $(this, Lz) && !n.skipInitial && this.callback(this.boundingClientRect), $(this, Vz).observe(e);
	}
};
Lz = /* @__PURE__ */ new WeakMap(), Rz = /* @__PURE__ */ new WeakMap(), zz = /* @__PURE__ */ new WeakMap(), Bz = /* @__PURE__ */ new WeakMap(), Vz = /* @__PURE__ */ new WeakMap(), Hz = /* @__PURE__ */ new WeakMap(), Uz = /* @__PURE__ */ new WeakMap(), Wz = /* @__PURE__ */ new WeakMap(), Gz = /* @__PURE__ */ new WeakSet(), Kz = function() {
	$(this, Uz) || (YR(this, Gz, qz).call(this), !Az(this.boundingClientRect, $(this, Rz)) && (this.callback(this.boundingClientRect), JR(this, Rz, this.boundingClientRect)));
}, qz = function() {
	if ($(this, Hz)) {
		let { top: e, left: t, width: n, height: r } = lz(this.element);
		$(this, Hz).style.overflow = "hidden", $(this, Hz).style.visibility = "visible", $(this, Hz).style.top = `${Math.floor(e)}px`, $(this, Hz).style.left = `${Math.floor(t)}px`, $(this, Hz).style.width = `${Math.floor(n)}px`, $(this, Hz).style.height = `${Math.floor(r)}px`;
	}
};
var Yz = /* @__PURE__ */ new WeakMap(), Xz = /* @__PURE__ */ new WeakMap();
function Zz(e, t) {
	let n = Yz.get(e);
	return n ||= {
		disconnect: new Jz(e, (t) => {
			let n = Yz.get(e);
			n && n.callbacks.forEach((e) => e(t));
		}, { skipInitial: !0 }).disconnect,
		callbacks: /* @__PURE__ */ new Set()
	}, n.callbacks.add(t), Yz.set(e, n), () => {
		n.callbacks.delete(t), n.callbacks.size === 0 && (Yz.delete(e), n.disconnect());
	};
}
function Qz(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r of e) {
		let e = Zz(r, t);
		n.add(e);
	}
	return () => n.forEach((e) => e());
}
function $z(e, t) {
	let n = e.ownerDocument;
	if (!Xz.has(n)) {
		let e = new AbortController(), t = /* @__PURE__ */ new Set();
		document.addEventListener("scroll", (e) => t.forEach((t) => t(e)), {
			capture: !0,
			passive: !0,
			signal: e.signal
		}), Xz.set(n, {
			disconnect: () => e.abort(),
			listeners: t
		});
	}
	let { listeners: r, disconnect: i } = Xz.get(n) ?? {};
	return !r || !i ? () => {} : (r.add(t), () => {
		r.delete(t), r.size === 0 && (i(), Xz.delete(n));
	});
}
var eB, tB, nB, rB, iB = class {
	constructor(e, t, n) {
		this.callback = t, qR(this, eB), qR(this, tB, !1), qR(this, nB), qR(this, rB, kz((e) => {
			if (!$(this, tB) && e.target && "contains" in e.target && typeof e.target.contains == "function") {
				for (let t of $(this, nB)) if (e.target.contains(t)) {
					this.callback($(this, eB).boundingClientRect);
					break;
				}
			}
		}, Iz));
		let r = Dz(e), i = Qz(r, t), a = $z(e, $(this, rB));
		JR(this, nB, r), JR(this, eB, new Jz(e, t, n)), this.disconnect = () => {
			$(this, tB) || (JR(this, tB, !0), i(), a(), $(this, eB).disconnect());
		};
	}
};
eB = /* @__PURE__ */ new WeakMap(), tB = /* @__PURE__ */ new WeakMap(), nB = /* @__PURE__ */ new WeakMap(), rB = /* @__PURE__ */ new WeakMap();
function aB(e) {
	return "showPopover" in e && "hidePopover" in e && typeof e.showPopover == "function" && typeof e.hidePopover == "function";
}
function oB(e) {
	try {
		aB(e) && e.isConnected && e.hasAttribute("popover") && !e.matches(":popover-open") && e.showPopover();
	} catch {}
}
function sB(e) {
	return !dz || !e ? !1 : e === az(e).scrollingElement;
}
function cB(e) {
	let t = tz(e), n = sB(e) ? oz(e) : QR(e), r = t.visualViewport, i = sB(e) ? {
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
function lB(e, t) {
	let { isTop: n, isBottom: r, isLeft: i, isRight: a, position: o } = cB(e), { x: s, y: c } = t ?? {
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
var uB = class {
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
}, dB = new uB((e) => {
	typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : e();
}), fB = new uB((e) => setTimeout(e, 50)), pB = /* @__PURE__ */ new Map(), mB = pB.clear.bind(pB);
function hB(e, t = !1) {
	if (!t) return gB(e);
	let n = pB.get(e);
	return n || (n = gB(e), pB.set(e, n), fB.schedule(mB), n);
}
function gB(e) {
	return tz(e).getComputedStyle(e);
}
function _B(e, t = hB(e, !0)) {
	return t.position === "fixed" || t.position === "sticky";
}
function vB(e, t = hB(e, !0)) {
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
var yB = {
	excludeElement: !0,
	escapeShadowDOM: !0
};
function bB(e, t = yB) {
	let { limit: n, excludeElement: r, escapeShadowDOM: i } = t, a = /* @__PURE__ */ new Set();
	function o(t) {
		if (n != null && a.size >= n || !t) return a;
		if (nz(t) && t.scrollingElement != null && !a.has(t.scrollingElement)) return a.add(t.scrollingElement), a;
		if (i && hz(t)) return o(t.host);
		if (!rz(t)) return iz(t) ? o(t.parentElement) : a;
		if (a.has(t)) return a;
		let s = hB(t, !0);
		if (r && t === e || vB(t, s) && a.add(t), _B(t, s)) {
			let { scrollingElement: e } = t.ownerDocument;
			return e && a.add(e), a;
		}
		return o(t.parentNode);
	}
	return e ? o(e) : a;
}
function xB(e, t = window.frameElement) {
	let n = {
		x: 0,
		y: 0,
		scaleX: 1,
		scaleY: 1
	};
	if (!e) return n;
	let r = Ez(e);
	for (; r;) {
		if (r === t) return n;
		let e = QR(r), { x: i, y: a } = SB(r, e);
		n.x += e.left, n.y += e.top, n.scaleX *= i, n.scaleY *= a, r = Ez(r);
	}
	return n;
}
function SB(e, t = QR(e)) {
	let n = Math.round(t.width), r = Math.round(t.height);
	if (rz(e)) return {
		x: n / e.offsetWidth,
		y: r / e.offsetHeight
	};
	let i = hB(e, !0);
	return {
		x: (parseFloat(i.width) || n) / n,
		y: (parseFloat(i.height) || r) / r
	};
}
function CB(e) {
	if (!e || e === "none") return null;
	let t = e.split(" "), n = parseFloat(t[0]), r = parseFloat(t[1]);
	return isNaN(n) && isNaN(r) ? null : {
		x: isNaN(n) ? r : n,
		y: isNaN(r) ? n : r
	};
}
function wB(e) {
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
function TB(e) {
	let { scale: t, transform: n, translate: r } = e, i = CB(t), a = wB(r), o = EB(n);
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
function EB(e) {
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
var DB = /* @__PURE__ */ ((e) => (e[e.Idle = 0] = "Idle", e[e.Forward = 1] = "Forward", e[e.Reverse = -1] = "Reverse", e))(DB || {}), OB = {
	x: .2,
	y: .2
}, kB = {
	x: 10,
	y: 10
};
function AB(e, t, n, r = 25, i = OB, a = kB) {
	let { x: o, y: s } = t, { rect: c, isTop: l, isBottom: u, isLeft: d, isRight: f } = cB(e), p = xB(e), m = TB(hB(e, !0)), h = m !== null && m?.scaleX < 0, g = m !== null && m?.scaleY < 0, _ = new gI(c.left * p.scaleX + p.x, c.top * p.scaleY + p.y, c.width * p.scaleX, c.height * p.scaleY), v = {
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
function jB(e, { block: t = "nearest", inline: n = "nearest" } = {}) {
	if (!rz(e)) return;
	let r = bB(e), i = [];
	for (let a of r) {
		if (!rz(a)) continue;
		let { top: r, left: o } = NB(e, a), s = r, c = o;
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
function MB(e) {
	let t = 0, n = 0, r = e;
	for (; r;) {
		t += r.offsetTop, n += r.offsetLeft;
		let e = r.offsetParent;
		if (!rz(e)) break;
		t += e.clientTop, n += e.clientLeft, r = e;
	}
	return {
		top: t,
		left: n
	};
}
function NB(e, t) {
	let n = MB(e), r = MB(t);
	return {
		top: n.top - r.top - t.clientTop,
		left: n.left - r.left - t.clientLeft
	};
}
function PB(e, t, n) {
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
function FB(e, t, n) {
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
function IB({ element: e, keyframes: t, options: n }) {
	return e.animate(t, n).finished;
}
var LB = new uB((e) => setTimeout(e, 0)), RB = /* @__PURE__ */ new Map(), zB = RB.clear.bind(RB);
function BB(e) {
	let t = e.ownerDocument, n = RB.get(t);
	if (n) return n;
	n = t.getAnimations(), RB.set(t, n), LB.schedule(zB);
	let r = n.filter((t) => XR(t.effect) && t.effect.target === e);
	return RB.set(e, r), n;
}
function VB(e, t) {
	let n = BB(e).filter((e) => {
		if (XR(e.effect)) {
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
var HB = class extends gI {
	constructor(e, t = {}) {
		let { frameTransform: n = xB(e), ignoreTransforms: r, getBoundingClientRect: i = QR } = t, a = VB(e, {
			properties: [
				"transform",
				"translate",
				"scale",
				"width",
				"height"
			],
			isValidTarget: (t) => (t !== e || pz()) && t.contains(e)
		}), o = i(e), { top: s, left: c, width: l, height: u } = o, d, f = hB(e), p = TB(f), m = {
			x: p?.scaleX ?? 1,
			y: p?.scaleY ?? 1
		}, h = UB(e, f);
		a?.(), p && (d = FB(o, p, f.transformOrigin), (r || h) && (s = d.top, c = d.left, l = d.width, u = d.height));
		let g = {
			width: d?.width ?? l,
			height: d?.height ?? u
		};
		if (h && !r && d) {
			let e = PB(d, h, f.transformOrigin);
			s = e.top, c = e.left, l = e.width, u = e.height, m.x = h.scaleX, m.y = h.scaleY;
		}
		n && (r || (c *= n.scaleX, l *= n.scaleX, s *= n.scaleY, u *= n.scaleY), c += n.x, s += n.y), super(c, s, l, u), this.scale = m, this.intrinsicWidth = g.width, this.intrinsicHeight = g.height;
	}
};
function UB(e, t) {
	let n = e.getAnimations();
	if (!n.length) return null;
	let r, i, a, o = !1;
	for (let e of n) {
		if (e.playState !== "running") continue;
		let t = XR(e.effect) ? e.effect.getKeyframes() : [], n = t[t.length - 1];
		if (!n) continue;
		let { transform: s, translate: c, scale: l } = n;
		typeof s == "string" && s && (r = s, o = !0), typeof c == "string" && c && (i = c, o = !0), typeof l == "string" && l && (a = l, o = !0);
	}
	return o ? TB({
		transform: r ?? t.transform,
		translate: i ?? t.translate,
		scale: a ?? t.scale
	}) : null;
}
function WB(e) {
	return "style" in e && typeof e.style == "object" && e.style !== null && "setProperty" in e.style && "removeProperty" in e.style && typeof e.style.setProperty == "function" && typeof e.style.removeProperty == "function";
}
var GB = class {
	constructor(e) {
		this.element = e, this.initial = /* @__PURE__ */ new Map();
	}
	set(e, t = "") {
		let { element: n } = this;
		if (WB(n)) for (let [r, i] of Object.entries(e)) {
			let e = `${t}${r}`;
			this.initial.has(e) || this.initial.set(e, n.style.getPropertyValue(e)), n.style.setProperty(e, typeof i == "string" ? i : `${i}px`);
		}
	}
	remove(e, t = "") {
		let { element: n } = this;
		if (WB(n)) for (let r of e) {
			let e = `${t}${r}`;
			n.style.removeProperty(e);
		}
	}
	reset() {
		let { element: e } = this;
		if (WB(e)) {
			for (let [t, n] of this.initial) e.style.setProperty(t, n);
			e.getAttribute("style") === "" && e.removeAttribute("style");
		}
	}
};
function KB(e) {
	return e ? e instanceof tz(e).Element || ez(e) && e.nodeType === Node.ELEMENT_NODE : !1;
}
function qB(e) {
	if (!e) return !1;
	let { KeyboardEvent: t } = tz(e.target);
	return e instanceof t;
}
function JB(e) {
	if (!e) return !1;
	let { PointerEvent: t } = tz(e.target);
	return e instanceof t;
}
function YB(e) {
	if (!KB(e)) return !1;
	let { tagName: t } = e;
	return t === "INPUT" || t === "TEXTAREA" || XB(e);
}
function XB(e) {
	return e.hasAttribute("contenteditable") && e.getAttribute("contenteditable") !== "false";
}
var ZB = {};
function QB(e) {
	let t = ZB[e] == null ? 0 : ZB[e] + 1;
	return ZB[e] = t, `${e}-${t}`;
}
//#endregion
//#region ../../node_modules/.pnpm/@dnd-kit+collision@0.5.0/node_modules/@dnd-kit/collision/dist/index.js
var $B = ({ dragOperation: e, droppable: t }) => {
	let n = e.position.current;
	if (!n) return null;
	let { id: r } = t;
	return t.shape && t.shape.containsPoint(n) ? {
		id: r,
		value: 1 / hI.distance(t.shape.center, n),
		type: iR.PointerIntersection,
		priority: rR.High
	} : null;
}, eV = ({ dragOperation: e, droppable: t }) => {
	let { shape: n } = e;
	if (!t.shape || !n?.current) return null;
	let r = n.current.intersectionArea(t.shape);
	if (r) {
		let { position: i } = e, a = hI.distance(t.shape.center, i.current), o = r / (n.current.area + t.shape.area - r) / a;
		return {
			id: t.id,
			value: o,
			type: iR.ShapeIntersection,
			priority: rR.Normal
		};
	}
	return null;
}, tV = (e) => $B(e) ?? eV(e), nV = Object.create, rV = Object.defineProperty, iV = Object.defineProperties, aV = Object.getOwnPropertyDescriptor, oV = Object.getOwnPropertyDescriptors, sV = Object.getOwnPropertySymbols, cV = Object.prototype.hasOwnProperty, lV = Object.prototype.propertyIsEnumerable, uV = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), dV = (e) => {
	throw TypeError(e);
}, fV = (e, t, n) => t in e ? rV(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, pV = (e, t) => {
	for (var n in t ||= {}) cV.call(t, n) && fV(e, n, t[n]);
	if (sV) for (var n of sV(t)) lV.call(t, n) && fV(e, n, t[n]);
	return e;
}, mV = (e, t) => iV(e, oV(t)), hV = (e, t) => rV(e, "name", {
	value: t,
	configurable: !0
}), gV = (e, t) => {
	var n = {};
	for (var r in e) cV.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && sV) for (var r of sV(e)) t.indexOf(r) < 0 && lV.call(e, r) && (n[r] = e[r]);
	return n;
}, _V = (e) => [
	,
	,
	,
	nV(e?.[uV("metadata")] ?? null)
], vV = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], yV = (e) => e !== void 0 && typeof e != "function" ? dV("Function expected") : e, bV = (e, t, n, r, i) => ({
	kind: vV[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? dV("Already initialized") : i.push(yV(e || null))
}), xV = (e, t) => fV(t, uV("metadata"), e[3]), SV = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, CV = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = vV[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && aV(d < 4 ? i : {
		get [n]() {
			return EV(this, a);
		},
		set [n](e) {
			return OV(this, a, e);
		}
	}, n));
	d ? p && d < 4 && hV(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : hV(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = bV(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => TV(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? EV : kV)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => OV(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? yV(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? dV("Object expected") : (yV(o = s.get) && (v.get = o), yV(o = s.set) && (v.set = o), yV(o = s.init) && g.unshift(o));
	return d || xV(e, i), v && rV(i, n, v), p ? d ^ 4 ? a : v : i;
}, wV = (e, t, n) => t.has(e) || dV("Cannot " + n), TV = (e, t) => Object(t) === t ? e.has(t) : dV("Cannot use the \"in\" operator on this value"), EV = (e, t, n) => (wV(e, t, "read from private field"), n ? n.call(e) : t.get(e)), DV = (e, t, n) => t.has(e) ? dV("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), OV = (e, t, n, r) => (wV(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), kV = (e, t, n) => (wV(e, t, "access private method"), n), AV = {
	role: "button",
	roleDescription: "draggable"
}, jV = "dnd-kit-description", MV = "dnd-kit-announcement", NV = { draggable: "To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel." }, PV = {
	dragstart({ operation: { source: e } }) {
		if (e) return `Picked up draggable item ${e.id}.`;
	},
	dragover({ operation: { source: e, target: t } }) {
		if (e && e.id !== t?.id) return t ? `Draggable item ${e.id} was moved over droppable target ${t.id}.` : `Draggable item ${e.id} is no longer over a droppable target.`;
	},
	dragend({ operation: { source: e, target: t }, canceled: n }) {
		if (e) return n ? `Dragging was cancelled. Draggable item ${e.id} was dropped.` : t ? `Draggable item ${e.id} was dropped over droppable target ${t.id}` : `Draggable item ${e.id} was dropped.`;
	}
};
function FV(e) {
	let t = e.tagName.toLowerCase();
	return [
		"input",
		"select",
		"textarea",
		"a",
		"button"
	].includes(t);
}
function IV(e, t) {
	let n = document.createElement("div");
	return n.id = e, n.style.setProperty("display", "none"), n.textContent = t, n;
}
function LV(e) {
	let t = document.createElement("div");
	return t.id = e, t.setAttribute("role", "status"), t.setAttribute("aria-live", "polite"), t.setAttribute("aria-atomic", "true"), t.style.setProperty("position", "fixed"), t.style.setProperty("width", "1px"), t.style.setProperty("height", "1px"), t.style.setProperty("margin", "-1px"), t.style.setProperty("border", "0"), t.style.setProperty("padding", "0"), t.style.setProperty("overflow", "hidden"), t.style.setProperty("clip", "rect(0 0 0 0)"), t.style.setProperty("clip-path", "inset(100%)"), t.style.setProperty("white-space", "nowrap"), t;
}
var RV = ["dragover", "dragmove"], zV = class extends aL {
	constructor(e, t) {
		super(e);
		let { id: n, idPrefix: { description: r = jV, announcement: i = MV } = {}, announcements: a = PV, screenReaderInstructions: o = NV, debounce: s = 500 } = t ?? {}, c = n ? `${r}-${n}` : QB(r), l = n ? `${i}-${n}` : QB(i), u, d, f, p, m = (e = p) => {
			f && e && f?.nodeValue !== e && (f.nodeValue = e);
		}, h = () => dB.schedule(m), g = BV(h, s), _ = Object.entries(a).map(([e, t]) => this.manager.monitor.addEventListener(e, (n, r) => {
			let i = f;
			if (!i) return;
			let a = t?.(n, r);
			a && i.nodeValue !== a && (p = a, RV.includes(e) ? g() : (h(), g.cancel()));
		})), v = () => {
			let e = [];
			u?.isConnected || (u = IV(c, o.draggable), e.push(u)), d?.isConnected || (d = LV(l), f = document.createTextNode(""), d.appendChild(f), e.push(d)), e.length > 0 && document.body.append(...e);
		}, y = /* @__PURE__ */ new Set();
		function b() {
			for (let e of y) e();
		}
		this.registerEffect(() => {
			y.clear();
			for (let e of this.manager.registry.draggables.value) {
				let t = e.handle ?? e.element;
				if (t) {
					(!u || !d) && y.add(v), (!FV(t) || pz()) && !t.hasAttribute("tabindex") && y.add(() => t.setAttribute("tabindex", "0")), !t.hasAttribute("role") && t.tagName.toLowerCase() !== "button" && y.add(() => t.setAttribute("role", AV.role)), t.hasAttribute("aria-roledescription") || y.add(() => t.setAttribute("aria-roledescription", AV.roleDescription)), t.hasAttribute("aria-describedby") || y.add(() => t.setAttribute("aria-describedby", c));
					for (let n of ["aria-pressed", "aria-grabbed"]) {
						let r = String(e.isDragging);
						t.getAttribute(n) !== r && y.add(() => t.setAttribute(n, r));
					}
					let n = String(e.disabled);
					t.getAttribute("aria-disabled") !== n && y.add(() => t.setAttribute("aria-disabled", n));
				}
			}
			y.size > 0 && dB.schedule(b);
		}), this.destroy = () => {
			super.destroy(), u?.remove(), d?.remove(), _.forEach((e) => e());
		};
	}
};
function BV(e, t) {
	let n, r = () => {
		clearTimeout(n), n = setTimeout(e, t);
	};
	return r.cancel = () => clearTimeout(n), r;
}
var VV = /* @__PURE__ */ new Map(), HV, UV, WV, GV, KV, qV, JV, YV, XV, ZV, QV, $V, eH, tH = class extends (KV = oL, GV = [Y], WV = [yF], UV = [yF], HV = [yF], KV) {
	constructor(e, t) {
		super(e, t), SV(JV, 5, this), DV(this, XV), DV(this, qV, /* @__PURE__ */ new Set()), DV(this, YV, SV(JV, 8, this, /* @__PURE__ */ new Set())), SV(JV, 11, this), this.registerEffect(kV(this, XV, ZV));
	}
	register(e) {
		return EV(this, qV).add(e), () => {
			EV(this, qV).delete(e);
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
		return gz(e?.element ?? null);
	}
	get targetRoot() {
		let { target: e } = this.manager.dragOperation;
		return gz(e?.element ?? null);
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
JV = _V(KV), qV = /* @__PURE__ */ new WeakMap(), YV = /* @__PURE__ */ new WeakMap(), XV = /* @__PURE__ */ new WeakSet(), ZV = function() {
	let { roots: e } = this, t = [];
	for (let n of e) for (let e of EV(this, qV)) t.push(kV(this, XV, QV).call(this, n, e));
	return () => {
		for (let e of t) e();
	};
}, QV = function(e, t) {
	let n = VV.get(e);
	n || (n = /* @__PURE__ */ new Map(), VV.set(e, n));
	let r = n.get(t);
	if (!r) {
		let i = nz(e) ? kV(this, XV, $V).call(this, e, n, t) : kV(this, XV, eH).call(this, e, n, t);
		if (!i) return () => {};
		r = i, n.set(t, r);
	}
	r.refCount++;
	let i = !1;
	return () => {
		i || (i = !0, r.refCount--, r.refCount === 0 && r.cleanup());
	};
}, $V = function(e, t, n) {
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
			a.disconnect(), r.remove(), t.delete(n), t.size === 0 && VV.delete(e);
		}
	};
}, eH = function(e, t, n) {
	!("adoptedStyleSheets" in e && Array.isArray(e.adoptedStyleSheets)) && process.env.NODE_ENV !== "production" && console.error("Cannot inject styles: This browser doesn't support adoptedStyleSheets");
	let { CSSStyleSheet: r } = e.ownerDocument.defaultView ?? {};
	if (!r) return process.env.NODE_ENV !== "production" && console.error("Cannot inject styles: CSSStyleSheet constructor not available"), null;
	let i = new r();
	return i.replaceSync(n), e.adoptedStyleSheets.push(i), {
		refCount: 0,
		cleanup: () => {
			if (hz(e) && e.host?.isConnected) {
				let t = e.adoptedStyleSheets.indexOf(i);
				t !== -1 && e.adoptedStyleSheets.splice(t, 1);
			}
			t.delete(n), t.size === 0 && VV.delete(e);
		}
	};
}, CV(JV, 4, "additionalRoots", GV, tH, YV), CV(JV, 2, "sourceRoot", WV, tH), CV(JV, 2, "targetRoot", UV, tH), CV(JV, 2, "roots", HV, tH), xV(JV, tH), tH.configure = $I(tH);
var nH = tH, rH = class extends aL {
	constructor(e, t) {
		super(e, t), this.manager = e;
		let { cursor: n = "grabbing" } = t ?? {}, r = e.registry.plugins.get(nH)?.register(`* { cursor: ${n} !important; }`);
		if (r) {
			let e = this.destroy.bind(this);
			this.destroy = () => {
				r(), e();
			};
		}
	}
}, iH = "data-dnd-", aH = `${iH}dropping`, oH = "--dnd-", sH = `${iH}dragging`, cH = `${iH}placeholder`, lH = [
	sH,
	cH,
	"popover",
	"aria-pressed",
	"aria-grabbing"
], uH = ["view-transition-name"], dH = `
  :is(:root,:host) [${sH}] {
    position: fixed !important;
    pointer-events: none !important;
    touch-action: none;
    z-index: calc(infinity);
    will-change: translate;
    top: var(${oH}top, 0px) !important;
    left: var(${oH}left, 0px) !important;
    right: unset !important;
    bottom: unset !important;
    width: var(${oH}width, auto);
    max-width: var(${oH}width, auto);
    height: var(${oH}height, auto);
    max-height: var(${oH}height, auto);
    transform: var(${oH}transform, none) !important;
    transition: var(${oH}transition) !important;
  }

  :is(:root,:host) [${cH}] {
    transition: none;
  }

  :is(:root,:host) [${cH}='hidden'] {
    visibility: hidden;
  }

  [${sH}] * {
    pointer-events: none !important;
  }

  [${sH}]:not([${aH}]) {
    translate: var(${oH}translate) !important;
  }

  [${sH}][style*='${oH}scale'] {
    scale: var(${oH}scale) !important;
    transform-origin: var(${oH}transform-origin) !important;
  }

  @layer dnd-kit {
    :where([${sH}][popover]) {
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
  [${sH}]::backdrop, [${iH}overlay]:not([${sH}]) {
    display: none;
    visibility: hidden;
  }
`.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
function fH(e, t = "hidden") {
	return J(() => {
		let { element: n, manager: r } = e;
		if (!n || !r) return;
		let i = pH(n, r.registry.droppables), a = [], o = vz(n), { remove: s } = o;
		return mH(i, o, a), hH(o, t), o.remove = () => {
			a.forEach((e) => e()), s.call(o);
		}, o;
	});
}
function pH(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of t) if (r.element && (e === r.element || e.contains(r.element))) {
		let e = `${iH}${QB("dom-id")}`;
		r.element.setAttribute(e, ""), n.set(r, e);
	}
	return n;
}
function mH(e, t, n) {
	for (let [r, i] of e) {
		if (!r.element) continue;
		let e = `[${i}]`, a = t.matches(e) ? t : t.querySelector(e);
		if (r.element.removeAttribute(i), !a) continue;
		let o = r.element;
		r.proxy = a, a.removeAttribute(i), Cz.set(o, a), n.push(() => {
			Cz.delete(o), r.proxy = void 0;
		});
	}
}
function hH(e, t = "hidden") {
	e.setAttribute("inert", "true"), e.setAttribute("tab-index", "-1"), e.setAttribute("aria-hidden", "true"), e.setAttribute(cH, t);
}
function gH(e, t) {
	return e === t || Ez(e) === Ez(t);
}
function _H(e) {
	let { target: t } = e;
	"newState" in e && e.newState === "closed" && KB(t) && t.hasAttribute("popover") && requestAnimationFrame(() => oB(t));
}
function vH(e) {
	return e.tagName === "TR";
}
function yH(e, t, n) {
	let r = new MutationObserver((r) => {
		let i = !1;
		for (let n of r) {
			if (n.target !== e) {
				i = !0;
				continue;
			}
			if (n.type !== "attributes") continue;
			let r = n.attributeName;
			if (r.startsWith("aria-") || lH.includes(r)) continue;
			let a = e.getAttribute(r);
			if (r === "style") {
				if (WB(e) && WB(t)) {
					let n = e.style;
					for (let e of Array.from(t.style)) n.getPropertyValue(e) === "" && t.style.removeProperty(e);
					for (let e of Array.from(n)) {
						if (uH.includes(e) || e.startsWith(oH)) continue;
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
function bH(e, t, n) {
	let r = new MutationObserver((r) => {
		for (let i of r) if (i.addedNodes.length !== 0) for (let r of Array.from(i.addedNodes)) {
			if (r.contains(e) && e.nextElementSibling !== t) {
				e.insertAdjacentElement("afterend", t), oB(n);
				return;
			}
			if (r.contains(t) && t.previousElementSibling !== e) {
				t.insertAdjacentElement("beforebegin", e), oB(n);
				return;
			}
		}
		e.isConnected && t.isConnected && e.nextElementSibling !== t && (e.insertAdjacentElement("afterend", t), oB(n));
	});
	return r.observe(e.ownerDocument.body, {
		childList: !0,
		subtree: !0
	}), r;
}
function xH(e) {
	return new ResizeObserver(() => {
		var t;
		let n = new HB(e.placeholder, {
			frameTransform: e.frameTransform,
			ignoreTransforms: !0
		}), r = e.transformOrigin ?? {
			x: 1,
			y: 1
		}, i = (e.width - n.width) * r.x + e.delta.x, a = (e.height - n.height) * r.y + e.delta.y, o = mz();
		if (e.styles.set({
			width: n.width - e.widthOffset,
			height: n.height - e.heightOffset,
			top: e.top + a + o.y,
			left: e.left + i + o.x
		}, oH), (t = e.getElementMutationObserver()) == null || t.takeRecords(), vH(e.element) && vH(e.placeholder)) {
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
		e.dragOperation.shape = new gI(c * f.scaleX + f.x, l * f.scaleY + f.y, u * f.scaleX, d * f.scaleY);
	});
}
var SH = 250, CH = "ease";
function wH(e) {
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
	let { duration: r = SH, easing: i = CH } = n ?? {};
	oB(e.feedbackElement);
	let [, a] = ZR(e.feedbackElement, (e) => "translate" in e) ?? [];
	a?.pause();
	let o = e.placeholder ?? e.element, s = { frameTransform: gH(e.feedbackElement, o) ? null : void 0 }, c = new HB(e.feedbackElement, s), l = wB(hB(e.feedbackElement).translate) ?? e.translate, u = new HB(o, s), d = gI.delta(c, u, e.alignment), f = {
		x: l.x - d.x,
		y: l.y - d.y
	}, p = Math.round(c.intrinsicHeight) === Math.round(u.intrinsicHeight) ? {} : {
		minHeight: [`${c.intrinsicHeight}px`, `${u.intrinsicHeight}px`],
		maxHeight: [`${c.intrinsicHeight}px`, `${u.intrinsicHeight}px`]
	}, m = Math.round(c.intrinsicWidth) === Math.round(u.intrinsicWidth) ? {} : {
		minWidth: [`${c.intrinsicWidth}px`, `${u.intrinsicWidth}px`],
		maxWidth: [`${c.intrinsicWidth}px`, `${u.intrinsicWidth}px`]
	};
	e.styles.set({ transition: e.transition }, oH), e.feedbackElement.setAttribute(aH, ""), (t = e.getElementMutationObserver()) == null || t.takeRecords(), IB({
		element: e.feedbackElement,
		keyframes: mV(pV(pV({}, p), m), { translate: [`${l.x}px ${l.y}px 0`, `${f.x}px ${f.y}px 0`] }),
		options: {
			duration: _z(tz(e.feedbackElement)) ? 0 : e.moved || e.feedbackElement !== e.element ? r : 0,
			easing: i
		}
	}).then(() => {
		e.feedbackElement.removeAttribute(aH), a?.finish(), e.cleanup(), requestAnimationFrame(e.restoreFocus);
	});
}
var TH, EH, DH, OH, kH, AH, jH, MH = class extends (EH = aL, TH = [Y], EH) {
	constructor(e, t) {
		super(e, t), DV(this, kH), DV(this, OH, SV(DH, 8, this)), SV(DH, 11, this), this.state = {
			initial: {},
			current: {}
		};
		let n = e.registry.plugins.get(nH), r = n?.register(dH);
		if (r) {
			let e = this.destroy.bind(this);
			this.destroy = () => {
				r(), e();
			};
		}
		this.registerEffect(kV(this, kH, AH).bind(this, n)), this.registerEffect(kV(this, kH, jH));
	}
};
DH = _V(EH), OH = /* @__PURE__ */ new WeakMap(), kH = /* @__PURE__ */ new WeakSet(), AH = function(e) {
	let { overlay: t } = this;
	if (!t || !e) return;
	let n = gz(t);
	if (n) return e.addRoot(n);
}, jH = function() {
	let { state: e, manager: t, options: n } = this, { dragOperation: r } = t, { position: i, source: a, status: o } = r;
	if (o.idle) {
		e.current = {}, e.initial = {};
		return;
	}
	if (!a) return;
	let { element: s } = a, c = a.pluginConfig(MH), l = c?.feedback ?? n?.feedback ?? "default", u = typeof l == "function" ? l(a, t) : l;
	if (!s || u === "none" || !o.initialized || o.initializing) return;
	let { initial: d } = e, f = this.overlay ?? s, p = xB(f), m = xB(s), h = !gH(s, f), g = new HB(s, {
		frameTransform: h ? m : null,
		ignoreTransforms: !h
	}), _ = {
		x: m.scaleX / p.scaleX,
		y: m.scaleY / p.scaleY
	}, { width: v, height: y, top: b, left: x } = g;
	h && (v /= _.x, y /= _.y);
	let S = new GB(f), C = hB(s), { transition: w, translate: T, boxSizing: ee, paddingBlockStart: te, paddingBlockEnd: E, paddingInlineStart: D, paddingInlineEnd: O, borderInlineStartWidth: ne, borderInlineEndWidth: k, borderBlockStartWidth: re, borderBlockEndWidth: A } = C, j = w.split(",").filter((e) => !/^\s*(transform|translate|scale)\b/.test(e)).join(","), ie = TB(C), ae = C.transform, oe = u === "clone", se = ee === "content-box", ce = se ? parseInt(D) + parseInt(O) + parseInt(ne) + parseInt(k) : 0, le = se ? parseInt(te) + parseInt(E) + parseInt(re) + parseInt(A) : 0, ue = u !== "move" && !this.overlay ? fH(a, oe ? "clone" : "hidden") : null, de = J(() => qB(t.dragOperation.activatorEvent));
	if (!d.translate) {
		if (this.overlay && ie) d.translate = {
			x: ie.x,
			y: ie.y
		};
		else if (T !== "none") {
			let e = wB(T);
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
	let { transformOrigin: fe } = d, pe = b * p.scaleY + p.y, me = x * p.scaleX + p.x;
	if (!d.coordinates && (d.coordinates = {
		x: me,
		y: pe
	}, _.x !== 1 || _.y !== 1)) {
		let { scaleX: e, scaleY: t } = m, { x: n, y: r } = fe;
		d.coordinates.x += (v * e - v) * n, d.coordinates.y += (y * t - y) * r;
	}
	d.dimensions ||= {
		width: v,
		height: y
	}, d.frameTransform ||= p;
	let M = {
		x: d.coordinates.x - me,
		y: d.coordinates.y - pe
	}, he = {
		width: (d.dimensions.width * d.frameTransform.scaleX - v * p.scaleX) * fe.x,
		height: (d.dimensions.height * d.frameTransform.scaleY - y * p.scaleY) * fe.y
	}, ge = {
		x: M.x / p.scaleX + he.width,
		y: M.y / p.scaleY + he.height
	}, _e = {
		left: x + ge.x,
		top: b + ge.y
	};
	f.setAttribute(sH, "true");
	let ve = J(() => r.transform), ye = d.translate ?? {
		x: 0,
		y: 0
	}, N = ve.x * p.scaleX + ye.x, be = ve.y * p.scaleY + ye.y, xe = mz();
	S.set({
		width: v - ce,
		height: y - le,
		top: _e.top + xe.y,
		left: _e.left + xe.x,
		translate: `${N}px ${be}px 0`,
		transform: this.overlay ? "none" : ae,
		transition: j ? `${j}, translate 0ms linear` : "translate 0ms linear",
		scale: h ? `${_.x} ${_.y}` : "",
		"transform-origin": `${fe.x * 100}% ${fe.y * 100}%`
	}, oH), ue && (s.insertAdjacentElement("afterend", ue), n?.rootElement && (typeof n.rootElement == "function" ? n.rootElement(a) : n.rootElement).appendChild(s)), aB(f) && (f.hasAttribute("popover") || f.setAttribute("popover", "manual"), oB(f), f.addEventListener("beforetoggle", _H));
	let Se, Ce, we, Te = xH({
		placeholder: ue,
		element: s,
		feedbackElement: f,
		frameTransform: p,
		transformOrigin: fe,
		width: v,
		height: y,
		top: b,
		left: x,
		widthOffset: ce,
		heightOffset: le,
		delta: ge,
		styles: S,
		dragOperation: r,
		getTranslate: () => e.current.translate,
		getElementMutationObserver: () => Se,
		getSavedCellWidths: () => we,
		setSavedCellWidths: (e) => {
			we = e;
		}
	}), Ee = new HB(f);
	J(() => r.shape = Ee);
	let P = tz(f), De = (e) => {
		this.manager.actions.stop({ event: e });
	}, Oe = _z(P);
	de && P.addEventListener("resize", De), J(() => a.status) === "idle" && requestAnimationFrame(() => a.status = "dragging"), ue && (Te.observe(ue), Se = yH(s, ue, oe), Ce = bH(s, ue, f));
	let ke = t.dragOperation.source?.id, Ae = () => {
		if (!de || ke == null) return;
		let e = t.registry.draggables.get(ke), n = e?.handle ?? e?.element;
		rz(n) && n.focus();
	}, je = () => {
		Se?.disconnect(), Ce?.disconnect(), Te.disconnect(), P.removeEventListener("resize", De), aB(f) && (f.removeEventListener("beforetoggle", _H), f.removeAttribute("popover")), f.removeAttribute(sH), S.reset();
		let t = () => {
			if (we && vH(s)) {
				let e = Array.from(s.cells);
				for (let [t, n] of e.entries()) n.style.width = we[t] ?? "";
			}
			a.status = "idle";
			let t = e.current.translate != null, n = r.status.dragging;
			ue && (!n && t || ue.parentElement !== f.parentElement) && f.isConnected && ue.replaceWith(f), ue?.remove();
		};
		f === this.overlay ? setTimeout(t, 0) : t();
	}, Me = n?.dropAnimation, Ne = this, Pe = xF(() => {
		let { transform: t, status: i } = r;
		if ((t.x || t.y || e.current.translate) && i.dragging) {
			let i = d.translate ?? {
				x: 0,
				y: 0
			}, a = {
				x: t.x / p.scaleX + i.x,
				y: t.y / p.scaleY + i.y
			}, o = e.current.translate, s = J(() => r.modifiers), c = J(() => r.shape?.current), l = n?.keyboardTransition, u = de && !Oe && l !== null ? `${l?.duration ?? 250}ms ${l?.easing ?? "cubic-bezier(0.25, 1, 0.5, 1)"}` : "0ms linear";
			if (S.set({
				transition: j ? `${j}, translate ${u}` : `translate ${u}`,
				translate: `${a.x}px ${a.y}px 0`
			}, oH), Se?.takeRecords(), c && c !== Ee && o && !s.length) {
				let e = hI.delta(a, o);
				r.shape = gI.from(c.boundingRectangle).translate(e.x * p.scaleX, e.y * p.scaleY);
			} else r.shape = new HB(f);
			e.current.translate = a;
		}
	}, function() {
		if (r.status.dropped) {
			this.dispose(), a.status = "dropping";
			let n = c?.dropAnimation === void 0 ? Ne.dropAnimation === void 0 ? Me : Ne.dropAnimation : c.dropAnimation, r = e.current.translate, i = r != null;
			if (!r && s !== f && (r = {
				x: 0,
				y: 0
			}), !r || n === null) {
				je();
				return;
			}
			t.renderer.rendering.then(() => {
				wH({
					source: a,
					element: s,
					feedbackElement: f,
					placeholder: ue,
					translate: r,
					moved: i,
					transition: w,
					alignment: a.alignment,
					styles: S,
					animation: n ?? void 0,
					getElementMutationObserver: () => Se,
					cleanup: je,
					restoreFocus: Ae
				});
			});
		}
	});
	return () => {
		je(), Pe();
	};
}, CV(DH, 4, "overlay", TH, MH, OH), xV(DH, MH), MH.configure = $I(MH);
var NH = MH, PH = !0, FH = !1, IH, LH, RH = [Y], zH = DB.Forward, BH, VH, HH;
LH = (IH = [Y], DB.Reverse);
var UH = class {
	constructor() {
		DV(this, VH, SV(BH, 8, this, PH)), SV(BH, 11, this), DV(this, HH, SV(BH, 12, this, PH)), SV(BH, 15, this);
	}
	isLocked(e) {
		return e === DB.Idle ? !1 : e == null ? this[DB.Forward] === PH && this[DB.Reverse] === PH : this[e] === PH;
	}
	unlock(e) {
		e !== DB.Idle && (this[e] = FH);
	}
};
BH = _V(null), VH = /* @__PURE__ */ new WeakMap(), HH = /* @__PURE__ */ new WeakMap(), CV(BH, 4, zH, RH, UH, VH), CV(BH, 4, LH, IH, UH, HH), xV(BH, UH);
var WH = [DB.Forward, DB.Reverse], GH = class {
	constructor() {
		this.x = new UH(), this.y = new UH();
	}
	isLocked() {
		return this.x.isLocked() && this.y.isLocked();
	}
}, KH = class extends aL {
	constructor(e) {
		super(e);
		let t = NP(new GH()), n = null;
		this.signal = t, UP(() => {
			let { status: r } = e.dragOperation;
			if (!r.initialized) {
				n = null, t.value = new GH();
				return;
			}
			let { delta: i } = e.dragOperation.position;
			if (n) {
				let e = {
					x: qH(i.x, n.x),
					y: qH(i.y, n.y)
				}, r = t.peek();
				xP(() => {
					for (let t of EI) for (let n of WH) e[t] === n && r[t].unlock(n);
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
function qH(e, t) {
	return Math.sign(e - t);
}
var JH, YH, XH, ZH, QH, $H, eU = class extends (YH = oL, JH = [Y], YH) {
	constructor(e) {
		super(e), DV(this, ZH, SV(XH, 8, this, !1)), SV(XH, 11, this), DV(this, QH), DV(this, $H, () => {
			if (!EV(this, QH)) return;
			let { element: e, by: t } = EV(this, QH);
			t.y && (e.scrollTop += t.y), t.x && (e.scrollLeft += t.x);
		}), this.scroll = (e, t) => {
			if (this.disabled) return !1;
			let n = this.getScrollableElements();
			if (!n) return OV(this, QH, void 0), !1;
			let { position: r } = this.manager.dragOperation, i = r?.current;
			if (i) {
				let { by: r } = e ?? {}, a = r ? {
					x: tU(r.x),
					y: tU(r.y)
				} : void 0, o = a ? void 0 : this.scrollIntentTracker.current;
				if (o?.isLocked()) return !1;
				for (let e of n) {
					let n = lB(e, r);
					if (n.x || n.y) {
						let { speed: n, direction: s } = AB(e, i, a, t?.acceleration, t?.threshold);
						if (o) for (let e of EI) o[e].isLocked(s[e]) && (n[e] = 0, s[e] = 0);
						if (s.x || s.y) {
							let { x: t, y: i } = r ?? s, a = t * n.x, o = i * n.y;
							if (a || o) {
								let t = EV(this, QH)?.by;
								if (this.autoScrolling && t && (t.x && !a || t.y && !o)) continue;
								return OV(this, QH, {
									element: e,
									by: {
										x: a,
										y: o
									}
								}), dB.schedule(EV(this, $H)), !0;
							}
						}
					}
				}
			}
			return OV(this, QH, void 0), !1;
		};
		let t = null, n = null, r = _F(() => {
			let { position: n, source: r } = e.dragOperation;
			if (!n) return null;
			let i = xz(gz(r?.element), n.current);
			return i && (t = i), i ?? t;
		}), i = _F(() => {
			let t = r.value, { documentElement: i } = az(t);
			if (!t || t === i) {
				let { target: t } = e.dragOperation, r = t?.element;
				if (r) {
					let e = bB(r, { excludeElement: !1 });
					return n = e, e;
				}
			}
			if (t) {
				let e = bB(t, { excludeElement: !1 });
				return this.autoScrolling && n && e.size < n?.size ? n : (n = e, e);
			}
			return n = null, null;
		}, vF);
		this.getScrollableElements = () => i.value, this.scrollIntentTracker = new KH(e), this.destroy = e.monitor.addEventListener("dragmove", (t) => {
			!this.disabled && !t.defaultPrevented && qB(e.dragOperation.activatorEvent) && t.by && this.scroll({ by: t.by }) && t.preventDefault();
		});
	}
};
XH = _V(YH), ZH = /* @__PURE__ */ new WeakMap(), QH = /* @__PURE__ */ new WeakMap(), $H = /* @__PURE__ */ new WeakMap(), CV(XH, 4, "autoScrolling", JH, eU, ZH), xV(XH, eU);
function tU(e) {
	return e > 0 ? DB.Forward : e < 0 ? DB.Reverse : DB.Idle;
}
var nU = new class {
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
}), rU = 10, iU = class extends aL {
	constructor(e, t) {
		super(e, t);
		let n = e.registry.plugins.get(eU);
		if (!n) throw Error("AutoScroller plugin depends on Scroller plugin");
		this.destroy = UP(() => {
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
					let t = setInterval(() => nU.schedule(() => n.scroll(void 0, e)), rU);
					return () => {
						clearInterval(t);
					};
				}
				n.autoScrolling = !1;
			}
		});
	}
};
iU.configure = $I(iU);
var aU = iU, oU = {
	capture: !0,
	passive: !0
}, sU, cU = class extends oL {
	constructor(e) {
		super(e), DV(this, sU), this.handleScroll = () => {
			EV(this, sU) ?? OV(this, sU, setTimeout(() => {
				this.manager.collisionObserver.forceUpdate(!1), OV(this, sU, void 0);
			}, 50));
		};
		let { dragOperation: t } = this.manager;
		this.destroy = UP(() => {
			if (t.status.dragging) {
				let e = t.source?.element?.ownerDocument ?? document;
				return e.addEventListener("scroll", this.handleScroll, oU), () => {
					e.removeEventListener("scroll", this.handleScroll, oU);
				};
			}
		});
	}
};
sU = /* @__PURE__ */ new WeakMap();
var lU = "* { user-select: none !important; -webkit-user-select: none !important; }", uU = class extends aL {
	constructor(e) {
		super(e), this.manager = e;
		let t = e.registry.plugins.get(nH)?.register(lU);
		if (this.destroy = UP(() => {
			let { dragOperation: e } = this.manager;
			if (e.status.initialized) return dU(), document.addEventListener("selectionchange", dU, { capture: !0 }), () => {
				document.removeEventListener("selectionchange", dU, { capture: !0 });
			};
		}), t) {
			let e = this.destroy.bind(this);
			this.destroy = () => {
				t(), e();
			};
		}
	}
};
function dU() {
	var e;
	(e = document.getSelection()) == null || e.removeAllRanges();
}
var fU = Object.freeze({
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
}), pU, mU = class extends gR {
	constructor(e, t) {
		super(e), this.manager = e, this.options = t, DV(this, pU, []), this.listeners = new Tz(), this.handleSourceKeyDown = (e, t, n) => {
			if (this.disabled || e.defaultPrevented || !KB(e.target) || t.disabled) return;
			let { keyboardCodes: r = fU.keyboardCodes, preventActivation: i = fU.preventActivation } = n ?? {};
			r.start.includes(e.code) && this.manager.dragOperation.status.idle && (i?.(e, t) || this.handleStart(e, t, n));
		};
	}
	bind(e, t = this.options) {
		return UP(() => {
			let n = e.handle ?? e.element, r = (n) => {
				qB(n) && this.handleSourceKeyDown(n, e, t);
			};
			if (n) return n.addEventListener("keydown", r), () => {
				n.removeEventListener("keydown", r);
			};
		});
	}
	handleStart(e, t, n) {
		let { element: r } = t;
		if (!r) throw Error("Source draggable does not have an associated element");
		e.preventDefault(), e.stopImmediatePropagation(), jB(r);
		let { center: i } = new HB(r);
		if (this.manager.actions.start({
			event: e,
			coordinates: {
				x: i.x,
				y: i.y
			},
			source: t
		}).signal.aborted) return this.cleanup();
		this.sideEffects();
		let a = az(r), o = [this.listeners.bind(a, [{
			type: "keydown",
			listener: (e) => this.handleKeyDown(e, t, n),
			options: { capture: !0 }
		}])];
		EV(this, pU).push(...o);
	}
	handleKeyDown(e, t, n) {
		let { keyboardCodes: r = fU.keyboardCodes } = n ?? {};
		if (gU(e, [...r.end, ...r.cancel])) {
			e.preventDefault();
			let t = gU(e, r.cancel);
			this.handleEnd(e, t);
		} else gU(e, r.up) ? this.handleMove("up", e) : gU(e, r.down) && this.handleMove("down", e), gU(e, r.left) ? this.handleMove("left", e) : gU(e, r.right) && this.handleMove("right", e);
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
		}, a = this.options?.offset ?? fU.offset;
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
		let e = this.manager.registry.plugins.get(aU);
		e?.disabled === !1 && (e.disable(), EV(this, pU).push(() => {
			e.enable();
		}));
	}
	cleanup() {
		EV(this, pU).forEach((e) => e()), OV(this, pU, []);
	}
	destroy() {
		this.cleanup(), this.listeners.clear();
	}
};
pU = /* @__PURE__ */ new WeakMap(), mU.configure = $I(mU), mU.defaults = fU;
var hU = mU;
function gU(e, t) {
	return t.includes(e.code);
}
var _U, vU = class extends yR {
	constructor() {
		super(...arguments), DV(this, _U);
	}
	onEvent(e) {
		switch (e.type) {
			case "pointerdown":
				OV(this, _U, uz(e));
				break;
			case "pointermove":
				if (!EV(this, _U)) return;
				let { x: t, y: n } = uz(e), r = {
					x: t - EV(this, _U).x,
					y: n - EV(this, _U).y
				}, { tolerance: i } = this.options;
				if (i && wI(r, i)) {
					this.abort();
					return;
				}
				wI(r, this.options.value) && this.activate(e);
				break;
			case "pointerup": this.abort();
		}
	}
	abort() {
		OV(this, _U, void 0);
	}
};
_U = /* @__PURE__ */ new WeakMap();
var yU, bU, xU = class extends yR {
	constructor() {
		super(...arguments), DV(this, yU), DV(this, bU);
	}
	onEvent(e) {
		switch (e.type) {
			case "pointerdown":
				OV(this, bU, uz(e)), OV(this, yU, setTimeout(() => this.activate(e), this.options.value));
				break;
			case "pointermove":
				if (!EV(this, bU)) return;
				let { x: t, y: n } = uz(e);
				wI({
					x: t - EV(this, bU).x,
					y: n - EV(this, bU).y
				}, this.options.tolerance) && this.abort();
				break;
			case "pointerup": this.abort();
		}
	}
	abort() {
		EV(this, yU) && (clearTimeout(EV(this, yU)), OV(this, bU, void 0), OV(this, yU, void 0));
	}
};
yU = /* @__PURE__ */ new WeakMap(), bU = /* @__PURE__ */ new WeakMap();
var SU = class {};
SU.Delay = xU, SU.Distance = vU;
var CU = Object.freeze({
	activationConstraints(e, t) {
		let { pointerType: n, target: r } = e;
		if (n !== "mouse" || !KB(r) || t.handle !== r && !t.handle?.contains(r)) return n === "touch" ? [new SU.Delay({
			value: 250,
			tolerance: 5
		})] : YB(r) && !e.defaultPrevented ? [new SU.Delay({
			value: 200,
			tolerance: 0
		})] : [new SU.Delay({
			value: 200,
			tolerance: 10
		}), new SU.Distance({ value: 5 })];
	},
	preventActivation(e, t) {
		let { target: n } = e;
		if (n === t.element || n === t.handle || !KB(n) || t.handle?.contains(n)) return !1;
		let r = wz(n);
		return r !== t.element && !!r;
	}
}), wU, TU = class extends gR {
	constructor(e, t) {
		super(e), this.manager = e, this.options = t, DV(this, wU, /* @__PURE__ */ new Set()), this.listeners = new Tz(), this.latest = {
			event: void 0,
			coordinates: void 0
		}, this.handleMove = () => {
			let { event: e, coordinates: t } = this.latest;
			e && t && this.manager.actions.move({
				event: e,
				to: t
			});
		}, this.handleCancel = this.handleCancel.bind(this), this.handlePointerUp = this.handlePointerUp.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this);
	}
	activationConstraints(e, t, n = this.options) {
		let { activationConstraints: r = CU.activationConstraints } = n ?? {};
		return typeof r == "function" ? r(e, t) : r;
	}
	bind(e, t = this.options) {
		return UP(() => {
			let n = new AbortController(), { signal: r } = n, i = (n) => {
				JB(n) && this.handlePointerDown(n, e, t);
			}, a = [e.handle ?? e.element];
			t?.activatorElements && (a = Array.isArray(t.activatorElements) ? t.activatorElements : t.activatorElements(e));
			for (let e of a) e && (jU(e.ownerDocument.defaultView), e.addEventListener("pointerdown", i, { signal: r }));
			return () => n.abort();
		});
	}
	handlePointerDown(e, t, n) {
		if (this.disabled || !e.isPrimary || e.button !== 0 || !KB(e.target) || t.disabled || DU(e) || !this.manager.dragOperation.status.idle) return;
		let { preventActivation: r = CU.preventActivation } = n ?? {};
		if (r?.(e, t)) return;
		let { target: i } = e, a = rz(i) && i.draggable && i.getAttribute("draggable") === "true", o = xB(t.element), { x: s, y: c } = uz(e);
		this.initialCoordinates = {
			x: s * o.scaleX + o.x,
			y: c * o.scaleY + o.y
		};
		let l = this.activationConstraints(e, t, n);
		e.sensor = this;
		let u = new _R(l, (e) => this.handleStart(t, e));
		u.signal.onabort = () => this.handleCancel(e), u.onEvent(e), this.controller = u;
		let d = fz(), f = this.listeners.bind(d, [
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
				listener: a ? this.handleCancel : OU,
				options: { capture: !0 }
			}
		]);
		EV(this, wU).add(() => {
			f(), this.initialCoordinates = void 0;
		});
	}
	handlePointerMove(e, t) {
		var n;
		if (this.controller?.activated === !1) (n = this.controller) == null || n.onEvent(e);
		else if (this.manager.dragOperation.status.dragging) {
			let n = uz(e), r = xB(t.element);
			n.x = n.x * r.scaleX + r.x, n.y = n.y * r.scaleY + r.y, e.preventDefault(), e.stopPropagation(), this.latest.event = e, this.latest.coordinates = n, dB.schedule(this.handleMove);
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
		let i = az(t.target).body;
		try {
			i.setPointerCapture(t.pointerId);
		} catch {
			this.handleCancel(t);
			return;
		}
		let a = KB(t.target) ? [t.target, i] : i, o = this.listeners.bind(a, [
			{
				type: "touchmove",
				listener: OU,
				options: { passive: !1 }
			},
			{
				type: "click",
				listener: OU
			},
			{
				type: "contextmenu",
				listener: OU
			},
			{
				type: "keydown",
				listener: this.handleKeyDown
			}
		]);
		EV(this, wU).add(o);
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
		}, EV(this, wU).forEach((e) => e()), EV(this, wU).clear();
	}
	destroy() {
		this.cleanup(), this.listeners.clear();
	}
};
wU = /* @__PURE__ */ new WeakMap(), TU.configure = $I(TU), TU.defaults = CU;
var EU = TU;
function DU(e) {
	return "sensor" in e;
}
function OU(e) {
	e.preventDefault();
}
function kU() {}
var AU = /* @__PURE__ */ new WeakSet();
function jU(e) {
	e && !AU.has(e) && (e.addEventListener("touchmove", kU, {
		capture: !1,
		passive: !1
	}), AU.add(e));
}
var MU = {
	modifiers: [],
	plugins: [
		zV,
		aU,
		rH,
		NH,
		uU
	],
	sensors: [EU, hU]
}, NU = class extends WR {
	constructor(e = {}) {
		let t = UR(e.plugins, MU.plugins), n = UR(e.sensors, MU.sensors), r = UR(e.modifiers, MU.modifiers);
		super(mV(pV({}, e), {
			plugins: [
				cU,
				eU,
				nH,
				...t
			],
			sensors: n,
			modifiers: r
		}));
	}
}, PU, FU, IU, LU, RU, zU, BU = class extends (IU = RL, FU = [Y], PU = [Y], IU) {
	constructor(e, t) {
		var n = e, { element: r, effects: i = () => [], handle: a } = n, o = gV(n, [
			"element",
			"effects",
			"handle"
		]);
		super(pV({ effects: () => [...i(), () => {
			let { manager: e } = this;
			if (!e) return;
			let t = (this.sensors?.map(eL) ?? [...e.sensors]).map((t) => {
				let n = t instanceof gR ? t : e.registry.register(t.plugin), r = t instanceof gR ? void 0 : t.options;
				return n.bind(this, r);
			});
			return function() {
				t.forEach((e) => e());
			};
		}] }, o), t), DV(this, RU, SV(LU, 8, this)), SV(LU, 11, this), DV(this, zU, SV(LU, 12, this)), SV(LU, 15, this), this.element = r, this.handle = a;
	}
};
LU = _V(IU), RU = /* @__PURE__ */ new WeakMap(), zU = /* @__PURE__ */ new WeakMap(), CV(LU, 4, "handle", FU, BU, RU), CV(LU, 4, "element", PU, BU, zU), xV(LU, BU);
var VU, HU, UU, WU, GU, KU, qU, JU, YU, XU, ZU = class extends (UU = QL, HU = [Y], VU = [Y], UU) {
	constructor(e, t) {
		var n = e, { element: r, effects: i = () => [] } = n, a = gV(n, ["element", "effects"]);
		let { collisionDetector: o = tV } = a, s = (e) => {
			let { manager: t, element: n } = this;
			if (!n || e === null) {
				this.shape = void 0;
				return;
			}
			if (!t) return;
			let r = new HB(n), i = J(() => this.shape);
			return r && i?.equals(r) ? i : (this.shape = r, r);
		}, c = NP(!1);
		super(mV(pV({}, a), {
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
						let t = new iB(e, s);
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
		}), t), DV(this, YU), DV(this, GU, SV(WU, 8, this)), SV(WU, 11, this), DV(this, XU, SV(WU, 12, this)), SV(WU, 15, this), this.element = r, this.refreshShape = () => s();
	}
	set element(e) {
		OV(this, YU, e, JU);
	}
	get element() {
		return this.proxy ?? EV(this, YU, qU);
	}
};
WU = _V(UU), GU = /* @__PURE__ */ new WeakMap(), YU = /* @__PURE__ */ new WeakSet(), XU = /* @__PURE__ */ new WeakMap(), KU = CV(WU, 20, "#element", HU, YU, GU), qU = KU.get, JU = KU.set, CV(WU, 4, "proxy", VU, ZU, XU), xV(WU, ZU);
//#endregion
//#region ../../node_modules/.pnpm/@dnd-kit+react@0.5.0_react-dom@19.3.0_react@19.3.0/node_modules/@dnd-kit/react/utilities.js
function QU(e) {
	return typeof e == "object" && !!e && "current" in e;
}
function $U(e) {
	if (e != null) return QU(e) ? e.current ?? void 0 : e;
}
//#endregion
//#region ../../node_modules/.pnpm/@dnd-kit+react@0.5.0_react-dom@19.3.0_react@19.3.0/node_modules/@dnd-kit/react/hooks.js
var eW = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? x : _;
function tW() {
	let e = T(0)[1];
	return h(() => {
		e((e) => e + 1);
	}, [e]);
}
function nW(e, t = !1) {
	let n = w(e.peek()), r = w(!1), i = tW();
	return eW(() => UP(() => {
		let a = n.current, o = e.value;
		if (a !== o) {
			if (n.current = o, !r.current) return;
			t ? Be(i) : i();
		}
	}), [
		e,
		t,
		i
	]), { get value() {
		return r.current = !0, e.peek();
	} };
}
function rW(e, t = [], n = !1) {
	let r = w(e);
	return r.current = e, nW(S(() => _F(() => r.current()), t), n);
}
function iW(e, t) {
	let n = w(/* @__PURE__ */ new Map()), r = tW();
	return eW(() => {
		if (!e) n.current.clear();
		else return UP(() => {
			let i = !1, a = !1;
			for (let r of n.current) {
				let [o] = r, s = J(() => r[1]), c = e[o];
				s !== c && (i = !0, n.current.set(o, c), a = t?.(o, s, c) ?? !1);
			}
			i && (a ? queueMicrotask(() => Be(r)) : r());
		});
	}, [e]), S(() => e && new Proxy(e, { get(e, t) {
		let r = e[t];
		return n.current.set(t, r), r;
	} }), [e]);
}
function aW(e) {
	let t = w(e);
	return eW(() => {
		t.current = e;
	}, [e]), t;
}
function oW(e, t, n = _, r = Object.is) {
	let i = w(e);
	n(() => {
		let n = i.current;
		r(e, n) || (i.current = e, t(e, n));
	}, [t, e]);
}
function sW(e, t) {
	let n = w($U(e));
	eW(() => {
		let r = $U(e);
		r !== n.current && (n.current = r, t(r));
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@dnd-kit+react@0.5.0_react-dom@19.3.0_react@19.3.0/node_modules/@dnd-kit/react/index.js
var cW = Object.defineProperty, lW = Object.defineProperties, uW = Object.getOwnPropertyDescriptors, dW = Object.getOwnPropertySymbols, fW = Object.prototype.hasOwnProperty, pW = Object.prototype.propertyIsEnumerable, mW = (e, t, n) => t in e ? cW(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, hW = (e, t) => {
	for (var n in t ||= {}) fW.call(t, n) && mW(e, n, t[n]);
	if (dW) for (var n of dW(t)) pW.call(t, n) && mW(e, n, t[n]);
	return e;
}, gW = (e, t) => lW(e, uW(t)), _W = (e, t) => {
	var n = {};
	for (var r in e) fW.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && dW) for (var r of dW(e)) t.indexOf(r) < 0 && pW.call(e, r) && (n[r] = e[r]);
	return n;
}, vW = new NU(), yW = l(vW), bW = p(d(({ children: e }, t) => {
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
	return eW(() => {
		var e;
		(e = a.current) == null || e.call(a), i.current = null;
	}, [e, n]), y(t, () => o), null;
})), xW = [void 0, vF];
function SW(e) {
	var t = e, { children: n, onCollision: r, onBeforeDragStart: i, onDragStart: a, onDragMove: o, onDragOver: s, onDragEnd: c } = t, l = _W(t, [
		"children",
		"onCollision",
		"onBeforeDragStart",
		"onDragStart",
		"onDragMove",
		"onDragOver",
		"onDragEnd"
	]);
	let u = w(null), { plugins: d, modifiers: f, sensors: p } = l, m = UR(d, MU.plugins), h = UR(p, MU.sensors), g = UR(f, MU.modifiers), v = aW(i), y = aW(a), b = aW(s), x = aW(o), S = aW(c), C = aW(r), T = CW(() => l.manager ?? new NU(l));
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
	}, [T]), oW(m, () => T && (T.plugins = m), ...xW), oW(h, () => T && (T.sensors = h), ...xW), oW(g, () => T && (T.modifiers = g), ...xW), /* @__PURE__ */ O(yW.Provider, {
		value: T,
		children: [/* @__PURE__ */ D(bW, {
			ref: u,
			children: n
		}), n]
	});
}
function CW(e) {
	let t = w(null);
	return t.current ||= e(), b(() => () => t.current?.destroy(), []), t.current;
}
function wW() {
	return g(yW);
}
function TW(e) {
	let t = wW() ?? void 0, [n] = T(() => e(t));
	return n.manager !== t && (n.manager = t), eW(n.register, [t, n]), n;
}
function EW(e) {
	let { disabled: t, data: n, element: r, handle: i, id: a, modifiers: o, sensors: s, plugins: c } = e, l = TW((t) => new BU(gW(hW({}, e), {
		register: !1,
		handle: $U(i),
		element: $U(r)
	}), t)), u = iW(l, DW);
	return oW(a, () => l.id = a), sW(i, (e) => l.handle = e), sW(r, (e) => l.element = e), oW(n, () => n && (l.data = n)), oW(t, () => l.disabled = t === !0), oW(s, () => l.sensors = s, void 0, vF), oW(o, () => l.modifiers = o, void 0, vF), oW(c, () => l.plugins = c, void 0, vF), oW(e.alignment, () => l.alignment = e.alignment), {
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
			(e || !l.element?.isConnected || l.manager?.dragOperation.status.idle) && (l.element = e ?? void 0);
		}, [l])
	};
}
function DW(e, t, n) {
	return !(e !== "isDragSource" || n || !t);
}
function OW({ children: e, className: t, dropAnimation: n, style: r, tag: i, disabled: a }) {
	let o = w(null), s = wW(), c = rW(() => s?.dragOperation.source, [s]).value ?? null, l = typeof a == "function" ? a(c) : a;
	_(() => {
		if (!o.current || !s || l) return;
		let e = s.plugins.find((e) => e instanceof NH);
		if (e) return e.overlay = o.current, () => {
			e.overlay = void 0;
		};
	}, [s, l]), _(() => {
		if (!s) return;
		let e = s.plugins.find((e) => e instanceof NH);
		if (e) return e.dropAnimation = n, () => {
			e.dropAnimation = void 0;
		};
	}, [s, n]);
	let d = S(() => {
		if (!s) return null;
		let e = new Proxy(s.registry, { get(e, t) {
			return t === "register" || t === "unregister" ? kW : e[t];
		} });
		return new Proxy(s, { get(t, n) {
			return n === "registry" ? e : t[n];
		} });
	}, [s]);
	return /* @__PURE__ */ D(yW.Provider, {
		value: d,
		children: u(i || "div", {
			ref: o,
			className: t,
			style: r,
			"data-dnd-overlay": !0
		}, f())
	});
	function f() {
		return !c || l ? null : typeof e == "function" ? /* @__PURE__ */ D(AW, {
			source: c,
			children: e
		}) : e;
	}
}
function kW() {
	return () => {};
}
function AW({ children: e, source: t }) {
	return e(iW(t));
}
var jW = Object.create, MW = Object.defineProperty, NW = Object.getOwnPropertyDescriptor, PW = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), FW = (e) => {
	throw TypeError(e);
}, IW = (e, t, n) => t in e ? MW(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, LW = (e) => [
	,
	,
	,
	jW(e?.[PW("metadata")] ?? null)
], RW = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], zW = (e) => e !== void 0 && typeof e != "function" ? FW("Function expected") : e, BW = (e, t, n, r, i) => ({
	kind: RW[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? FW("Already initialized") : i.push(zW(e || null))
}), VW = (e, t) => IW(t, PW("metadata"), e[3]), HW = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) a[i].call(n);
	return r;
}, UW = (e, t, n, r, i, a) => {
	for (var o, s, c, l, u = t & 7, d = !1, f = !1, p = 2, m = RW[u + 5], h = e[p] || (e[p] = []), g = (i = i.prototype, NW(i, n)), _ = r.length - 1; _ >= 0; _--) c = BW(u, n, s = {}, e[3], h), c.static = d, c.private = f, l = c.access = { has: (e) => n in e }, l.get = (e) => e[n], o = (0, r[_])(g[m], c), s._ = 1, zW(o) && (g[m] = o);
	return g && MW(i, n, g), i;
}, WW = (e, t, n) => t.has(e) || FW("Cannot " + n), GW = (e, t, n) => (WW(e, t, "read from private field"), t.get(e)), KW = (e, t, n) => t.has(e) ? FW("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), qW = (e, t, n, r) => (WW(e, t, "write to private field"), t.set(e, n), n), JW = class e {
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
}, YW, XW, ZW, QW, $W, eG = class extends (ZW = HF, XW = [yF], YW = [yF], ZW) {
	constructor(e) {
		let t = JW.from(e);
		super(t, (e, t) => JW.equals(e, t)), HW($W, 5, this), KW(this, QW, 0), this.velocity = {
			x: 0,
			y: 0
		};
	}
	get delta() {
		return JW.delta(this.current, this.initial);
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
		let { current: t } = this, n = JW.from(e), r = {
			x: n.x - t.x,
			y: n.y - t.y
		}, i = Date.now(), a = i - GW(this, QW), o = (e) => Math.round(e / a * 100);
		xP(() => {
			qW(this, QW, i), this.velocity = {
				x: o(r.x),
				y: o(r.y)
			}, super.current = n;
		});
	}
	reset(e = this.defaultValue) {
		super.reset(JW.from(e)), this.velocity = {
			x: 0,
			y: 0
		};
	}
};
$W = LW(ZW), QW = /* @__PURE__ */ new WeakMap(), UW($W, 2, "delta", XW, eG), UW($W, 2, "direction", YW, eG), VW($W, eG);
var tG = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(tG || {});
Object.values(tG);
var nG = ({ dragOperation: e, droppable: t }) => {
	let n = e.position.current;
	if (!n) return null;
	let { id: r } = t;
	return t.shape && t.shape.containsPoint(n) ? {
		id: r,
		value: 1 / JW.distance(t.shape.center, n),
		type: iR.PointerIntersection,
		priority: rR.High
	} : null;
}, rG = ({ dragOperation: e, droppable: t }) => {
	let { shape: n } = e;
	if (!t.shape || !n?.current) return null;
	let r = n.current.intersectionArea(t.shape);
	if (r) {
		let { position: i } = e, a = JW.distance(t.shape.center, i.current), o = r / (n.current.area + t.shape.area - r) / a;
		return {
			id: t.id,
			value: o,
			type: iR.ShapeIntersection,
			priority: rR.Normal
		};
	}
	return null;
}, iG = (e) => nG(e) ?? rG(e);
function aG(e) {
	let { collisionDetector: t, data: n, disabled: r, element: i, id: a, accept: o, type: s } = e, c = TW((t) => new ZU(gW(hW({}, e), {
		register: !1,
		element: $U(i)
	}), t)), l = iW(c);
	return oW(a, () => c.id = a), sW(i, (e) => c.element = e), oW(o, () => c.accept = o, void 0, vF), oW(t, () => c.collisionDetector = t ?? iG), oW(n, () => n && (c.data = n)), oW(r, () => c.disabled = r === !0), oW(s, () => c.type = s), {
		droppable: l,
		get isDropTarget() {
			return l.isDropTarget;
		},
		ref: h((e) => {
			(e || !c.element?.isConnected || c.manager?.dragOperation.status.idle) && (c.element = e ?? void 0);
		}, [c])
	};
}
function oG() {
	let e = wW(), t = rW(() => e?.dragOperation.source, [e]), n = rW(() => e?.dragOperation.target, [e]);
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
var sG = {
	ARROW_UP: "ArrowUp",
	ARROW_DOWN: "ArrowDown",
	HOME: "Home",
	END: "End",
	PAGE_UP: "PageUp",
	PAGE_DOWN: "PageDown",
	ENTER: "Enter",
	SPACE: "Space"
};
function cG(e) {
	return e.ctrlKey || e.metaKey || e.shiftKey || e.altKey;
}
function lG(e) {
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
function uG(e, t) {
	let { items: n, isItemFocusable: r, getItemKey: i, context: a, onKeyDown: o, disableKeyboardNavigation: s, totalCount: c, rangeChanged: l, mapScrollIndex: u, mapRangeIndex: d, scrollerRef: f, scrollPaddingTop: p, ...m } = e, g = w(null), v = w(null), [y, b] = T(e.items[0] ? i(e.items[0]) : void 0), [x, C] = T(void 0), ee = S(() => {
		let e = /* @__PURE__ */ new Map();
		return n.forEach((t, n) => e.set(i(t), n)), e;
	}, [n, i]), [te, E] = T(!1);
	_(() => {
		n.length && (!y || ee.get(y) === void 0) && b(i(n[0]));
	}, [
		n,
		i,
		y,
		ee
	]);
	let D = h((e, t) => {
		let r = Math.max(0, Math.min(e, n.length - 1));
		if (n[r]) {
			let e = i(n[r]);
			b(e);
			let a = u ? u(r) : r, o = typeof p == "function" ? p(r) : p ?? 0;
			g.current?.scrollIntoView({
				index: a,
				align: t,
				behavior: "auto",
				...o > 0 ? { calculateViewLocation: lG(o) } : {}
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
		o !== void 0 && D(o, i);
	}, [
		D,
		n,
		r
	]), ne = h((e) => {
		let t = y ? ee.get(y) : void 0, r = !1;
		if (!e || cG(e)) o?.(e);
		else if (s) o?.(e);
		else {
			if (e.code === sG.ARROW_UP && t !== void 0) O(t - 1, !1), r = !0;
			else if (e.code === sG.ARROW_DOWN && t !== void 0) O(t + 1, !0), r = !0;
			else if (e.code === sG.HOME) D(0), r = !0;
			else if (e.code === sG.END) D(n.length - 1), r = !0;
			else if (e.code === sG.PAGE_DOWN && x && t !== void 0) {
				let e = x.endIndex - x.startIndex;
				O(Math.min(t + e, n.length - 1), !0, "start"), r = !0;
			} else if (e.code === sG.PAGE_UP && x && t !== void 0) {
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
		}
	}, [
		D,
		O,
		y,
		ee,
		x,
		n,
		o,
		s
	]), k = h((e) => {
		v.current = e, f?.(e);
	}, [f]), re = h((e, t) => {
		let n = i(e);
		E(!0), b(n), t.stopPropagation();
	}, [i]), A = h((e) => {
		if (e?.currentTarget !== v.current || typeof y != "string") return;
		E(!0);
		let t = ee.get(y);
		t !== void 0 && x && (t < x.startIndex || t > x.endIndex) && D(t), e.stopPropagation(), e.preventDefault();
	}, [
		ee,
		x,
		D,
		y
	]), j = h((e) => {
		e.currentTarget.contains(e.relatedTarget) || E(!1);
	}, []), ie = S(() => ({
		tabIndexKey: y,
		focused: te,
		context: e.context || {}
	}), [
		y,
		te,
		e.context
	]), ae = h((e) => {
		let t = d ? {
			startIndex: d(e.startIndex),
			endIndex: d(e.endIndex)
		} : e;
		C(t), l?.(e);
	}, [l, d]), oe = h((e) => {
		g.current = e, t?.(e);
	}, [t]), se = h((e, t) => i(t), [i]);
	return {
		...m,
		computeItemKey: se,
		ref: oe,
		scrollerRef: k,
		onKeyDown: ne,
		onFocus: A,
		onBlur: j,
		rangeChanged: ae,
		onFocusForGetItemComponent: re,
		context: ie
	};
}
//#endregion
//#region src/core/VirtualizedList/FlatVirtualizedList/FlatVirtualizedList.tsx
function dG(e) {
	let { getItemComponent: t, scrollHandleRef: n, ...r } = e, { onFocusForGetItemComponent: i, ...a } = uG(r, n), o = h((e, n, r) => t(e, n, r, i), [t, i]);
	return /* @__PURE__ */ D(Ie, {
		itemContent: o,
		data: e.items,
		...a
	});
}
var fG = {
	stickyRoot: "_stickyRoot_3tgsb_12",
	stickyHeader: "_stickyHeader_3tgsb_32",
	stickyRow: "_stickyRow_3tgsb_23"
}, pG = o.forwardRef(function({ item: e, context: t, children: n, ...r }, i) {
	let a = typeof e == "object" && !!e && "header" in e;
	return /* @__PURE__ */ D("div", {
		...r,
		ref: i,
		className: a ? fG.stickyRow : void 0,
		children: n
	});
});
function mG(e) {
	let { getItemComponent: t, groups: n, getGroupHeaderComponent: r, isItemFocusable: i, isGroupHeaderFocusable: a, getItemKey: o, getHeaderKey: s, scrollHandleRef: c, renderStickyHeader: l, ...u } = e, [d, f] = T(0), p = S(() => n.flatMap((e) => [{ header: e.header }, ...e.items.map((e) => ({ item: e }))]), [n]), m = S(() => n.flatMap((e, t) => Array(1 + e.items.length).fill(t)), [n]), g = h((e) => {
		let t = p[e];
		return t && "header" in t ? 0 : d;
	}, [p, d]), v = h((e) => "header" in e ? s(e.header) : o(e.item), [s, o]), y = h((e) => "header" in e ? a(e.header) : i(e.item), [a, i]), { onFocusForGetItemComponent: b, scrollerRef: C, ...ee } = uG({
		...u,
		items: p,
		isItemFocusable: y,
		getItemKey: v,
		scrollPaddingTop: g
	}, c), te = h((e, t) => {
		b({ item: e }, t);
	}, [b]), E = h((e, t) => {
		b({ header: e }, t);
	}, [b]), ne = h((e, n, i) => {
		let a = p[e], o = m[e];
		if ("header" in a) return r(o, a.header, i, E);
		let s = e - (o + 1);
		return t(s, a.item, i, te, o);
	}, [
		p,
		m,
		r,
		t,
		te,
		E
	]), k = w([]), re = w(null), A = w(null), [j, ie] = T(0), ae = h(() => {
		let e = A.current;
		if (!e || m.length === 0) return;
		let t = e.scrollTop, n = k.current, r = n.length ? n[0].index : 0, i = n.length ? n[0].offset : 0;
		for (let e of n) e.offset <= t + 1 && e.offset > i && (i = e.offset, r = e.index);
		let a = m[r] ?? 0;
		ie((e) => e === a ? e : a);
	}, [m]), oe = h((e) => {
		k.current = e.map((e) => ({
			index: e.index,
			offset: e.offset
		})), ae();
	}, [ae]), se = h((e) => {
		C?.(e), A.current = e instanceof HTMLElement ? e : null;
	}, [C]), ce = h((e) => {
		let t = A.current;
		t && (t.scrollTop += e.deltaY * (e.deltaMode === 1 ? 16 : 1));
	}, []);
	x(() => {
		re.current && f(re.current.offsetHeight);
	}, [j, n]), _(() => {
		ae();
	}, [n, ae]);
	let le = Math.min(j, n.length - 1), ue = l && le >= 0 ? l(le, n[le].header, ee.context) : null;
	return /* @__PURE__ */ O("div", {
		className: fG.stickyRoot,
		children: [ue != null && /* @__PURE__ */ D("div", {
			className: fG.stickyHeader,
			ref: re,
			onWheel: ce,
			children: ue
		}), /* @__PURE__ */ D(Ie, {
			itemContent: ne,
			data: p,
			...ee,
			components: { Item: pG },
			scrollerRef: se,
			itemsRendered: oe,
			onScroll: ae
		})]
	});
}
//#endregion
//#region src/core/VirtualizedList/accessbility.ts
function hG(e, t) {
	switch (e) {
		case "listbox": return { role: "listbox" };
		case "treegrid": return {
			role: "treegrid",
			"aria-rowcount": t
		};
	}
}
function gG(e, t, n) {
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
function _G(e, t, n) {
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
var vG = Object.defineProperty, yG = Object.defineProperties, bG = Object.getOwnPropertyDescriptors, xG = Object.getOwnPropertySymbols, SG = Object.prototype.hasOwnProperty, CG = Object.prototype.propertyIsEnumerable, wG = (e, t, n) => t in e ? vG(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, TG = (e, t) => {
	for (var n in t ||= {}) SG.call(t, n) && wG(e, n, t[n]);
	if (xG) for (var n of xG(t)) CG.call(t, n) && wG(e, n, t[n]);
	return e;
}, EG = (e, t) => yG(e, bG(t)), DG = class extends bR {
	apply({ transform: e }) {
		if (!this.options) return e;
		let { axis: t, value: n } = this.options;
		return EG(TG({}, e), { [t]: n });
	}
};
DG.configure = $I(DG);
var OG = DG, kG = OG.configure({
	axis: "x",
	value: 0
});
OG.configure({
	axis: "y",
	value: 0
});
var AG = class extends bR {
	apply({ transform: e }) {
		let { size: t = 20 } = this.options ?? {}, n = typeof t == "number" ? t : t.x, r = typeof t == "number" ? t : t.y;
		return EG(TG({}, e), {
			x: Math.ceil(e.x / n) * n,
			y: Math.ceil(e.y / r) * r
		});
	}
};
AG.configure = $I(AG);
var jG = {
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
}, MG = { sectionLabel: "_sectionLabel_rnzlx_8" };
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemWrapper/RoomListItemView/RoomListItemMoreOptionsMenu.tsx
function NG({ vm: e }) {
	let [t, n] = T(!1);
	return /* @__PURE__ */ D(ye, {
		open: t,
		onOpenChange: n,
		title: U("room_list|room|more_options"),
		showTitle: !1,
		align: "start",
		trigger: /* @__PURE__ */ D(M, {
			tooltip: U("room_list|room|more_options"),
			"aria-label": U("room_list|room|more_options"),
			size: "24px",
			style: { padding: "2px" },
			children: /* @__PURE__ */ D(lw, {})
		}),
		children: /* @__PURE__ */ D(PG, { vm: e })
	});
}
function PG({ vm: e }) {
	let t = H(e), n = t.sections.length > 0, r = S(() => t.sections.some((e) => e.isSelected), [t.sections]);
	return /* @__PURE__ */ O("div", {
		onKeyDown: (e) => e.stopPropagation(),
		children: [
			t.canMarkAsRead && /* @__PURE__ */ D(N, {
				Icon: ZC,
				label: U("room_list|more_options|mark_read"),
				onSelect: e.onMarkAsRead,
				onClick: (e) => e.stopPropagation(),
				hideChevron: !0
			}),
			t.canMarkAsUnread && /* @__PURE__ */ D(N, {
				Icon: $C,
				label: U("room_list|more_options|mark_unread"),
				onSelect: e.onMarkAsUnread,
				onClick: (e) => e.stopPropagation(),
				hideChevron: !0
			}),
			t.canChangeSection && /* @__PURE__ */ O(E, { children: [/* @__PURE__ */ D(ke, {
				checked: t.isFavourite,
				Icon: kC,
				label: U("room_list|more_options|favourited"),
				onSelect: e.onToggleFavorite,
				onClick: (e) => e.stopPropagation()
			}), /* @__PURE__ */ D(ke, {
				checked: t.isLowPriority,
				Icon: TS,
				label: U("room_list|more_options|low_priority"),
				onSelect: e.onToggleLowPriority,
				onClick: (e) => e.stopPropagation()
			})] }),
			/* @__PURE__ */ D(we, {}),
			t.canInvite && /* @__PURE__ */ D(N, {
				Icon: Uw,
				label: U("action|invite"),
				onSelect: e.onInvite,
				onClick: (e) => e.stopPropagation(),
				hideChevron: !0
			}),
			t.canCopyRoomLink && /* @__PURE__ */ D(N, {
				Icon: GC,
				label: U("room_list|more_options|copy_link"),
				onSelect: e.onCopyRoomLink,
				onClick: (e) => e.stopPropagation(),
				hideChevron: !0
			}),
			t.areSectionsEnabled && t.canChangeSection && /* @__PURE__ */ O(E, { children: [/* @__PURE__ */ O(Te, {
				trigger: /* @__PURE__ */ D(N, {
					Icon: DS,
					label: U("room_list|more_options|move_to_section"),
					onSelect: null
				}),
				children: [
					t.sections.map((t) => /* @__PURE__ */ D(N, {
						label: t.name,
						labelProps: { className: MG.sectionLabel },
						onSelect: () => e.onToggleSection(t.tag),
						onClick: (e) => e.stopPropagation(),
						hideChevron: !0,
						"aria-checked": t.isSelected,
						children: t.isSelected && /* @__PURE__ */ D(VS, {
							color: "var(--cpd-color-icon-tertiary)",
							width: "24px",
							height: "24px"
						})
					}, t.tag)),
					n && /* @__PURE__ */ D(we, {}),
					/* @__PURE__ */ D(N, {
						label: U("action|new_section"),
						onSelect: e.onCreateSection,
						hideChevron: !0
					})
				]
			}), r && /* @__PURE__ */ D(N, {
				Icon: rw,
				label: U("room_list|more_options|remove_from_section"),
				onSelect: e.onRemoveFromSection,
				onClick: (e) => e.stopPropagation(),
				hideChevron: !0
			})] }),
			/* @__PURE__ */ D(we, {}),
			/* @__PURE__ */ D(N, {
				kind: "critical",
				Icon: UC,
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
var FG = ({ vm: e, children: t }) => /* @__PURE__ */ D(ae, {
	title: U("room_list|room|more_options"),
	showTitle: !1,
	hasAccessibleAlternative: !0,
	trigger: t,
	children: /* @__PURE__ */ D(PG, { vm: e })
}), IG = ({ hasAnyNotificationOrActivity: e, muted: t, callType: n, isUnsentMessage: r, invited: i, isMention: a, isNotification: o, isActivityNotification: s, count: c }) => !e && !t && !n ? null : /* @__PURE__ */ O(V, {
	align: "center",
	justify: "center",
	gap: "var(--cpd-space-1x)",
	"data-testid": "notification-decoration",
	children: [
		r && /* @__PURE__ */ D(yC, {
			width: "20px",
			height: "20px",
			fill: "var(--cpd-color-icon-critical-primary)"
		}),
		n === "video" && /* @__PURE__ */ D(Yw, {
			width: "20px",
			height: "20px",
			fill: "var(--cpd-color-icon-accent-primary)"
		}),
		n === "voice" && /* @__PURE__ */ D(aT, {
			width: "20px",
			height: "20px",
			fill: "var(--cpd-color-icon-accent-primary)"
		}),
		i && /* @__PURE__ */ D(_C, {
			width: "20px",
			height: "20px",
			fill: "var(--cpd-color-icon-accent-primary)"
		}),
		a && /* @__PURE__ */ D(tw, {
			width: "20px",
			height: "20px",
			fill: "var(--cpd-color-icon-accent-primary)"
		}),
		(a || o) && /* @__PURE__ */ D(Me, { count: c || null }),
		s && /* @__PURE__ */ D(je, {}),
		t && /* @__PURE__ */ D(aw, {
			width: "20px",
			height: "20px",
			fill: "var(--cpd-color-icon-tertiary)"
		})
	]
}), LG = /* @__PURE__ */ function(e) {
	return e.AllMessages = "all_messages", e.AllMessagesLoud = "all_messages_loud", e.MentionsOnly = "mentions_only", e.Mute = "mute", e;
}({});
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemWrapper/RoomListItemView/RoomListItemNotificationMenu.tsx
function RG({ vm: e }) {
	let t = H(e), [n, r] = T(!1), i = t.roomNotifState === LG.Mute, a = /* @__PURE__ */ D(VS, {
		width: "24px",
		height: "24px",
		color: "var(--cpd-color-icon-primary)"
	});
	return /* @__PURE__ */ D(ye, {
		open: n,
		onOpenChange: r,
		title: U("room_list|notification_options"),
		showTitle: !1,
		align: "start",
		trigger: /* @__PURE__ */ D(M, {
			size: "24px",
			style: { padding: "2px" },
			tooltip: U("room_list|notification_options"),
			"aria-label": U("room_list|notification_options"),
			children: D(i ? aw : sw, {})
		}),
		children: /* @__PURE__ */ O("div", {
			onKeyDown: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ D(N, {
					"aria-selected": t.roomNotifState === LG.AllMessages,
					hideChevron: !0,
					label: U("notifications|default_settings"),
					onSelect: () => e.onSetRoomNotifState(LG.AllMessages),
					onClick: (e) => e.stopPropagation(),
					children: t.roomNotifState === LG.AllMessages && a
				}),
				/* @__PURE__ */ D(N, {
					"aria-selected": t.roomNotifState === LG.AllMessagesLoud,
					hideChevron: !0,
					label: U("notifications|all_messages"),
					onSelect: () => e.onSetRoomNotifState(LG.AllMessagesLoud),
					onClick: (e) => e.stopPropagation(),
					children: t.roomNotifState === LG.AllMessagesLoud && a
				}),
				/* @__PURE__ */ D(N, {
					"aria-selected": t.roomNotifState === LG.MentionsOnly,
					hideChevron: !0,
					label: U("notifications|mentions_keywords"),
					onSelect: () => e.onSetRoomNotifState(LG.MentionsOnly),
					onClick: (e) => e.stopPropagation(),
					children: t.roomNotifState === LG.MentionsOnly && a
				}),
				/* @__PURE__ */ D(N, {
					"aria-selected": t.roomNotifState === LG.Mute,
					hideChevron: !0,
					label: U("notifications|mute_room"),
					onSelect: () => e.onSetRoomNotifState(LG.Mute),
					onClick: (e) => e.stopPropagation(),
					children: t.roomNotifState === LG.Mute && a
				})
			]
		})
	});
}
var zG = {
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
}, BG = ({ showMoreOptionsMenu: e, showNotificationMenu: t, vm: n }) => /* @__PURE__ */ O(V, {
	className: zG.hoverMenu,
	align: "center",
	gap: "var(--cpd-space-1x)",
	children: [e && /* @__PURE__ */ D(NG, { vm: n }), t && /* @__PURE__ */ D(RG, { vm: n })]
}), VG = p(function({ vm: e, renderAvatar: t, isDragging: n = !1 }) {
	let r = H(e);
	return /* @__PURE__ */ O(V, {
		className: (0, z.default)(zG.container, { [zG.dragging]: n }),
		gap: "var(--cpd-space-3x)",
		align: "center",
		children: [t(r.room), /* @__PURE__ */ O(V, {
			className: zG.content,
			gap: "var(--cpd-space-2x)",
			align: "center",
			justify: "space-between",
			children: [
				/* @__PURE__ */ O("div", {
					className: zG.ellipsis,
					children: [/* @__PURE__ */ O("div", {
						className: zG.roomName,
						title: r.name,
						"data-testid": "room-name",
						children: [r.name, r.userStatus && /* @__PURE__ */ D(Ae, {
							description: r.userStatus.text,
							maxWidth: "30ch",
							maxLines: 1,
							children: /* @__PURE__ */ D(P, {
								as: "span",
								className: zG.userStatusEmoji,
								children: r.userStatus.emoji
							})
						})]
					}), r.messagePreview && /* @__PURE__ */ D(P, {
						as: "div",
						size: "sm",
						className: zG.ellipsis,
						title: r.messagePreview,
						children: r.messagePreview
					})]
				}),
				!n && (r.showMoreOptionsMenu || r.showNotificationMenu) && /* @__PURE__ */ D(BG, {
					showMoreOptionsMenu: r.showMoreOptionsMenu,
					showNotificationMenu: r.showNotificationMenu,
					vm: e
				}),
				/* @__PURE__ */ D("div", {
					className: zG.notificationDecoration,
					"aria-hidden": !0,
					children: /* @__PURE__ */ D(IG, { ...r.notification })
				})
			]
		})]
	});
});
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemWrapper/RoomListItemView/RoomListItemView.tsx
function HG(e, t) {
	return t.isUnsentMessage ? U("room_list|a11y|unsent_message", { roomName: e }) : t.invited ? U("room_list|a11y|invitation", { roomName: e }) : t.isMention && t.count ? U("room_list|a11y|mention", {
		roomName: e,
		count: t.count
	}) : t.hasUnreadCount && t.count ? U("room_list|a11y|unread", {
		roomName: e,
		count: t.count
	}) : t.callType === "voice" ? U("room_list|a11y|voice_call", { roomName: e }) : t.callType === "video" ? U("room_list|a11y|video_call", { roomName: e }) : U("room_list|a11y|default", { roomName: e });
}
var UG = p(function({ vm: e, isSelected: t, isFocused: n, onFocus: r, isFirstItem: i, isLastItem: a, renderAvatar: o, isDragSource: s = !1, ref: c, ...l }) {
	let u = w(null), d = ED([c, u]), f = H(e), [p, m] = T(!1);
	_(() => {
		n && u.current?.focus({ preventScroll: !0 });
	}, [n]);
	let h = (e) => {
		r(f.id, e), !e.currentTarget.contains(e.relatedTarget) && e.currentTarget.matches(":focus-visible") && m(!0);
	}, g = (e) => {
		!e.currentTarget.contains(e.relatedTarget) && !e.currentTarget.querySelector("[data-state=\"open\"]") && m(!1);
	}, v = HG(f.name, f.notification);
	return /* @__PURE__ */ D(FG, {
		vm: e,
		children: /* @__PURE__ */ D(V, {
			as: "button",
			ref: d,
			className: (0, z.default)(zG.roomListItem, "mx_RoomListItemView", {
				[zG.keyboardActive]: p,
				[zG.selected]: t,
				[zG.bold]: f.isBold,
				[zG.firstItem]: i,
				[zG.lastItem]: a,
				[zG.dragSource]: s,
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
			children: /* @__PURE__ */ D(VG, {
				vm: e,
				renderAvatar: o
			})
		})
	});
}), WG = p(function({ vm: e, isDragging: t = !1 }) {
	let { title: n, displaySectionMenu: r, notification: i, isExpanded: a } = H(e);
	return /* @__PURE__ */ O(V, {
		className: (0, z.default)(jG.container, { [jG.dragging]: t }),
		align: "center",
		justify: "space-between",
		gap: "var(--cpd-space-2x)",
		children: [
			/* @__PURE__ */ O(V, {
				align: "center",
				gap: "var(--cpd-space-0-5x)",
				children: [/* @__PURE__ */ D(qS, {
					className: jG.chevron,
					width: "24px",
					height: "24px",
					fill: "var(--cpd-color-icon-secondary)"
				}), /* @__PURE__ */ D("span", {
					className: jG.title,
					children: n
				})]
			}),
			!a && i && /* @__PURE__ */ D("div", {
				className: jG.notificationDecoration,
				"aria-hidden": !0,
				children: /* @__PURE__ */ D(IG, { ...i })
			}),
			r && !t && /* @__PURE__ */ D(GG, { vm: e })
		]
	});
});
function GG({ vm: e }) {
	let [t, n] = T(!1);
	return /* @__PURE__ */ D(ye, {
		open: t,
		onOpenChange: n,
		title: U("room_list|section_header|more_options"),
		showTitle: !1,
		align: "start",
		trigger: /* @__PURE__ */ D(M, {
			className: jG.menu,
			tooltip: U("room_list|section_header|more_options"),
			"aria-label": U("room_list|section_header|more_options"),
			size: "24px",
			style: { padding: "2px" },
			color: "var(--cpd-color-icon-primary)",
			children: /* @__PURE__ */ D(lw, { fill: "var(--cpd-color-icon-primary)" })
		}),
		children: /* @__PURE__ */ O("div", {
			onKeyDown: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ D(N, {
				hideChevron: !0,
				Icon: hC,
				label: U("room_list|section_header|edit_section"),
				onSelect: () => e.editSection(),
				onClick: (e) => e.stopPropagation()
			}), /* @__PURE__ */ D(N, {
				hideChevron: !0,
				Icon: rC,
				label: U("room_list|section_header|remove_section"),
				onSelect: () => e.removeSection(),
				onClick: (e) => e.stopPropagation()
			})]
		})
	});
}
//#endregion
//#region src/room-list/VirtualizedRoomListView/dragAndDrop.ts
function KG(e) {
	return e?.type === "section";
}
function qG(e) {
	return e?.type === "room";
}
function JG(e, t) {
	switch (e) {
		case "nonDm": return !qG(t) || t.isDm;
		case "dm": return !qG(t) || !t.isDm;
		case "any": return !1;
		case "none": return !0;
	}
}
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListSectionHeaderView/RoomListSectionHeaderView.tsx
var YG = p(function({ vm: e, isFocused: t, onFocus: n, indexInList: r, sectionIndex: i, sectionCount: a, roomCountInSection: o }) {
	let { translate: s } = B(), { id: c, title: l, isExpanded: u, isUnread: d, canBeReordered: f, acceptedRoomKind: p } = H(e), m = i === a - 1, { ref: h, handleRef: g, isDragSource: v } = EW({
		id: c,
		data: {
			type: "section",
			index: i
		},
		plugins: [NH.configure({ feedback: "clone" })],
		modifiers: [kG],
		disabled: !f
	}), { source: y } = oG(), b = y?.data, x = KG(b), { ref: S, isDropTarget: C } = aG({
		id: c,
		data: {
			type: "section",
			index: i
		},
		disabled: v || (x ? !f : JG(p, b))
	}), ee = C && b?.type === "room", te = C && x, E = KG(b) ? b.index : -1, O = te && E > i, ne = te && !O, k = te && O, re = w(u);
	v || (re.current = u);
	let A = v ? re.current : u, j = w(null), ie = ED([
		...f ? [h, g] : [],
		S,
		j
	]);
	_(() => {
		t && j.current?.focus({ preventScroll: !0 });
	}, [t]);
	let [ae, oe] = T(!1), se = (e) => {
		n(c, e), !e.currentTarget.contains(e.relatedTarget) && e.currentTarget.matches(":focus-visible") && oe(!0);
	}, ce = (e) => {
		!e.currentTarget.contains(e.relatedTarget) && !e.currentTarget.querySelector("[data-state=\"open\"]") && oe(!1);
	};
	return /* @__PURE__ */ D("div", {
		"aria-expanded": A,
		..._G(r, i, o),
		children: /* @__PURE__ */ D("div", {
			role: "gridcell",
			"aria-expanded": A,
			children: /* @__PURE__ */ D("button", {
				ref: ie,
				type: "button",
				className: (0, z.default)(jG.header, {
					[jG.keyboardActive]: ae,
					[jG.firstHeader]: i === 0,
					[jG.lastHeader]: !u && m,
					[jG.unread]: d,
					[jG.dragSource]: v,
					[jG.dropTarget]: ee,
					[jG.dropTargetBottom]: ne,
					[jG.dropTargetTop]: k
				}),
				onClick: () => !v && e.onClick(),
				onKeyDown: (t) => {
					t.code === "ArrowRight" && !u || t.code === "ArrowLeft" && u ? (t.preventDefault(), t.stopPropagation(), e.onClick()) : t.code === "ArrowRight" && u && o > 0 && (t.preventDefault(), t.stopPropagation(), t.currentTarget.dispatchEvent(new KeyboardEvent("keydown", {
						code: "ArrowDown",
						key: "ArrowDown",
						bubbles: !0
					})));
				},
				"aria-expanded": A,
				onFocus: se,
				onBlur: ce,
				tabIndex: t ? 0 : -1,
				"aria-label": s(d ? "room_list|section_header|toggle_unread" : "room_list|section_header|toggle", { section: l }),
				children: /* @__PURE__ */ D(WG, { vm: e })
			})
		})
	});
}), XG = p(function({ vm: e, isFirst: t }) {
	let { isExpanded: n, isUnread: r } = H(e);
	return /* @__PURE__ */ D("div", {
		className: jG.stickyBackground,
		"aria-hidden": !0,
		children: /* @__PURE__ */ D("button", {
			type: "button",
			className: (0, z.default)(jG.header, {
				[jG.firstHeader]: t,
				[jG.unread]: r
			}),
			"aria-expanded": n,
			onClick: e.onClick,
			tabIndex: -1,
			children: /* @__PURE__ */ D(WG, { vm: e })
		})
	});
}), ZG = { dragOverlay: "_dragOverlay_s80l5_8" }, QG = p(function({ vm: e }) {
	return /* @__PURE__ */ D("div", {
		"aria-hidden": !0,
		className: (0, z.default)(jG.header, ZG.dragOverlay),
		children: /* @__PURE__ */ D(WG, {
			vm: e,
			isDragging: !0
		})
	});
}), $G = p(function({ roomIndex: e, roomCount: t, roomIndexInSection: n, isInFlatList: r, ...i }) {
	if (r) return /* @__PURE__ */ D(UG, {
		...i,
		...gG("listbox", e, t)
	});
	let a = n === 0;
	return /* @__PURE__ */ D("div", {
		...gG("treegrid", e, n),
		children: /* @__PURE__ */ D("div", {
			role: "gridcell",
			"aria-selected": i.isSelected,
			children: /* @__PURE__ */ D(eK, {
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
function eK(e) {
	let t = H(e.vm), { ref: n, handleRef: r, isDragSource: i } = EW({
		id: t.id,
		data: {
			type: "room",
			isDm: t.isDm
		},
		plugins: [NH.configure({ feedback: "clone" })],
		modifiers: [kG],
		disabled: !t.canChangeSection
	}), a = ED([n, r]);
	return /* @__PURE__ */ D(UG, {
		...e,
		ref: t.canChangeSection ? a : void 0,
		isDragSource: i
	});
}
var tK = { dragOverlay: "_dragOverlay_vsda5_8" }, nK = p(function({ vm: e, renderAvatar: t }) {
	return /* @__PURE__ */ D(V, {
		"aria-hidden": !0,
		className: (0, z.default)(zG.roomListItem, tK.dragOverlay),
		gap: "var(--cpd-space-3x)",
		align: "stretch",
		children: /* @__PURE__ */ D(VG, {
			vm: e,
			renderAvatar: t,
			isDragging: !0
		})
	});
});
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListAccessibilityPlugin.ts
function rK(e, t = "polite") {
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
function iK(e, t) {
	let n = document.createElement("div");
	return n.id = e, n.style.display = "none", n.textContent = t, n;
}
var aK = class extends aL {
	liveRegion;
	assertiveRegion;
	instructions;
	unsubscribers = [];
	constructor(e, t) {
		super(e, t);
		let n = crypto.randomUUID(), r = crypto.randomUUID(), i = crypto.randomUUID();
		this.liveRegion = rK(n), this.assertiveRegion = rK(r, "assertive"), document.body.append(this.liveRegion, this.assertiveRegion);
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
		t?.instructions && (this.instructions = iK(i, t.instructions), document.body.append(this.instructions), this.registerEffect(() => {
			if (this.instructions) for (let e of this.manager.registry.draggables.value) {
				let t = e.handle ?? e.element;
				t && !t.hasAttribute("aria-describedby") && t.setAttribute("aria-describedby", i);
			}
		}));
	}
	announce(e) {
		e && this.liveRegion.textContent !== e && (this.liveRegion.textContent = e);
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
function oK(e) {
	let { translate: t } = B(), n = h((t) => KG(t.data) ? e.getSectionHeaderViewModel(t.id).getSnapshot().title : e.getRoomItemViewModel(t.id)?.getSnapshot().name, [e]), r = S(() => ({
		dragstart: ({ operation: { source: e } }) => {
			if (!e) return;
			let r = n(e);
			if (r !== void 0) return t("room_list|a11y|drag_start", { source: r });
		},
		dragover: ({ operation: { source: r, target: i } }) => {
			if (!r) return;
			let a = n(r);
			if (a === void 0) return;
			if (KG(r.data) && !i) return t("room_list|a11y|drag_over_original", { source: a });
			if (!i) return;
			let o = e.getSectionHeaderViewModel(i.id).getSnapshot().title;
			return KG(r.data) && KG(i.data) ? r.data.index > i.data.index ? t("room_list|a11y|drag_over_before", {
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
			if (KG(r.data) && !i) return t("room_list|a11y|drag_end_original", { source: o });
			if (!i) return;
			let s = e.getSectionHeaderViewModel(i.id).getSnapshot().title;
			return KG(r.data) && KG(i.data) ? r.data.index > i.data.index ? t("room_list|a11y|drag_end_before", {
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
	return h((e) => [...e.filter((e) => e !== zV), QI(aK, {
		announcements: r,
		instructions: i
	})], [r, i]);
}
var sK = { roomList: "_roomList_1yq7k_11" }, cK = 1300;
function lK(e, t) {
	let n = 0, r = 0;
	for (let i of e) {
		if (t < r + i.roomIds.length) {
			let e = t - r;
			return e === 0 ? n : n + 1 + e;
		}
		n += i.roomIds.length + 1, r += i.roomIds.length;
	}
	return Math.max(0, n - 1);
}
function uK({ vm: e, renderAvatar: t, onKeyDown: n }) {
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
	}, [C]), ee = h(() => {
		let e = m.current, t = g.current;
		if (!e || !t) return;
		let n = new Set(e.querySelectorAll("[data-item-index]"));
		for (let e of n) v.current.has(e) || (t.observe(e), v.current.set(e, !1));
		for (let e of v.current.keys()) n.has(e) || (t.unobserve(e), v.current.delete(e));
		C();
	}, [C]), te = h(() => {
		y.current === null && (y.current = requestAnimationFrame(() => {
			y.current = null, ee();
		}));
	}, [ee]), E = h((e) => {
		g.current?.disconnect(), g.current = null, v.current.clear(), b.current = -1, y.current !== null && (cancelAnimationFrame(y.current), y.current = null);
		let t = e instanceof HTMLElement ? e : null;
		m.current = t, t && (g.current = new IntersectionObserver(T, { root: t }), te());
	}, [T, te]), ne = S(() => a.flatMap((e) => e.roomIds), [a]), k = ne.length, re = a.length, A = k + re, j = S(() => a.map((e) => ({
		header: e.id,
		items: e.roomIds
	})), [a]), ie = h((e, t) => {
		let n, r, i = 0, o = 0;
		for (let s of a) {
			let a = i + s.roomIds.length;
			if (n === void 0 && e <= a && (n = o + Math.max(0, e - i - 1)), r === void 0 && t <= a && (r = o + Math.max(0, t - i)), n !== void 0 && r !== void 0) break;
			i = a + 1, o += s.roomIds.length;
		}
		return [n ?? 0, r ?? o];
	}, [a]), ae = h((t) => {
		if (s) e.updateVisibleRooms(t.startIndex, t.endIndex + 1);
		else {
			let [n, r] = ie(t.startIndex, t.endIndex);
			e.updateVisibleRooms(n, r);
		}
		te();
	}, [
		e,
		te,
		s,
		ie
	]), oe = oK(e), se = h((e, n, r, i, a, s) => {
		let { activeRoomIndex: c, roomCount: l, vm: u, isFlatList: d } = r.context, f = c === e, p = u.getRoomItemViewModel(n);
		if (!p) return /* @__PURE__ */ D(o.Fragment, {}, `stale-${e}`);
		let m = r.focused && r.tabIndexKey === n, h = d && e === 0, g = !(!d && !a || e !== l - 1);
		return /* @__PURE__ */ D($G, {
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
	}, [t]), ce = h((e, t, n, r, i) => {
		let { sections: a } = n.context, o = a[i].roomIds.findIndex((e) => e === t), s = i === a.length - 1;
		return se(e, t, n, r, s, o);
	}, [se]), le = h((e, t, n, r) => se(e, t, n, r), [se]), ue = h((e, t, n, r) => {
		let { vm: i, sectionCount: a, sections: o } = n.context, s = i.getSectionHeaderViewModel(t), c = o.slice(0, e).reduce((e, t) => e + t.roomIds.length + 1, 0), l = o[e].roomIds.length, u = n.focused && n.tabIndexKey === t;
		return /* @__PURE__ */ D(YG, {
			vm: s,
			isFocused: u,
			onFocus: r,
			indexInList: c,
			sectionIndex: e,
			sectionCount: a,
			roomCountInSection: l
		}, t);
	}, []), de = h((e, t, n) => {
		let r = n.context.vm.getSectionHeaderViewModel(t);
		return /* @__PURE__ */ D(XG, {
			vm: r,
			isFirst: e === 0
		}, t);
	}, []), fe = h((e) => e, []), pe = h((e) => e, []), me = S(() => ({
		spaceId: i.spaceId || "",
		filterKeys: i.filterKeys,
		sections: a,
		activeRoomIndex: c,
		roomCount: k,
		sectionCount: re,
		vm: e,
		isFlatList: s
	}), [
		i.spaceId,
		i.filterKeys,
		a,
		c,
		k,
		re,
		e,
		s
	]), M = S(() => {
		if (c !== void 0) return s ? c : lK(a, c);
	}, [
		c,
		s,
		a
	]), he = h((e) => {
		let { spaceId: t, filterKeys: n } = e.context.context, r = u.current !== t || !Vy(d.current, n);
		return d.current = n, u.current = t, r ? {
			align: "start",
			index: M ?? 0,
			behavior: "auto"
		} : !1;
	}, [M]);
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
	let ge = h(() => !0, []), _e = h(() => !0, []), ve = S(() => ({
		top: cK,
		bottom: cK
	}), []), ye = {
		context: me,
		scrollIntoViewOnChange: he,
		...M === void 0 ? {} : { initialTopMostItemIndex: M },
		"data-testid": "room-list",
		"aria-label": r("room_list|list_title"),
		getItemKey: fe,
		isItemFocusable: ge,
		rangeChanged: ae,
		scrollerRef: E,
		onKeyDown: n,
		increaseViewportBy: ve,
		className: sK.roomList
	};
	return s ? /* @__PURE__ */ D(dG, {
		...ye,
		...hG("listbox"),
		scrollHandleRef: p,
		items: ne,
		getItemComponent: le
	}) : /* @__PURE__ */ O(SW, {
		onDragStart: (t) => {
			e.onSectionOrRoomDragStart();
		},
		onDragEnd: (t) => {
			let { source: n, target: r } = t.operation;
			e.onSectionOrRoomDragEnd(), !t.canceled && n && r && (KG(n.data) ? e.changeSectionOrder(String(n.id), String(r.id)) : e.changeRoomSection(String(n.id), String(r.id)));
		},
		sensors: [EU.configure({ activationConstraints(e) {
			return e.pointerType === "touch" ? [new SU.Delay({
				value: 250,
				tolerance: 5
			})] : [new SU.Distance({ value: 5 })];
		} }), hU.configure({
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
		plugins: oe,
		children: [/* @__PURE__ */ D(OW, {
			dropAnimation: null,
			children: /* @__PURE__ */ D(fK, {
				vm: e,
				renderAvatar: t
			})
		}), /* @__PURE__ */ D(dK, {
			...ye,
			...hG("treegrid", A),
			scrollHandleRef: p,
			groups: j,
			getHeaderKey: pe,
			getGroupHeaderComponent: ue,
			getItemComponent: ce,
			isGroupHeaderFocusable: _e,
			renderStickyHeader: de
		})]
	});
}
function dK(e) {
	let { source: t } = oG();
	return /* @__PURE__ */ D(mG, {
		...e,
		disableKeyboardNavigation: t !== null
	});
}
function fK({ vm: e, renderAvatar: t }) {
	let { source: n } = oG();
	if (!n) return null;
	if (KG(n.data)) {
		let t = e.getSectionHeaderViewModel(String(n.id));
		return /* @__PURE__ */ D(QG, { vm: t });
	}
	let r = e.getRoomItemViewModel(String(n.id));
	return r ? /* @__PURE__ */ D(nK, {
		vm: r,
		renderAvatar: t
	}) : null;
}
var pK = { toast: "_toast_vbkbz_8" };
//#endregion
//#region src/room-list/RoomListView/RoomListToast/RoomListToast.tsx
function mK({ type: e, onClose: t, onClick: n }) {
	let { translate: r } = B();
	if (e === "unread_activity") return /* @__PURE__ */ D(Oe, {
		className: pK.toast,
		Icon: TS,
		onClick: n,
		children: r("room_list|unread_messages")
	});
	let i = r(e === "section_created" ? "room_list|section_created" : "room_list|chat_moved");
	return /* @__PURE__ */ D(Oe, {
		className: pK.toast,
		onClose: t,
		tooltip: r("action|close"),
		children: i
	});
}
var hK = {
	list: "_list_1hk4o_8",
	scrollbar: "_scrollbar_1hk4o_13"
}, gK = ({ vm: e, renderAvatar: t, onKeyDown: n }) => {
	let r = H(e), i;
	return i = r.isLoadingRooms ? /* @__PURE__ */ D(mP, {}) : r.isRoomListEmpty ? /* @__PURE__ */ D(gP, { vm: e }) : /* @__PURE__ */ D(uK, {
		vm: e,
		renderAvatar: t,
		onKeyDown: n
	}), /* @__PURE__ */ O(E, { children: [/* @__PURE__ */ D("div", { children: /* @__PURE__ */ D(fP, {
		filterIds: r.filterIds,
		activeFilterId: r.activeFilterId,
		onToggleFilter: e.onToggleFilter
	}) }), /* @__PURE__ */ D(V, {
		direction: "column",
		className: hK.list,
		children: /* @__PURE__ */ O(Kx, {
			className: hK.scrollbar,
			children: [i, r.toast && /* @__PURE__ */ D(mK, {
				type: r.toast,
				onClose: e.closeToast,
				onClick: e.scrollToUnreadActivity
			})]
		})
	})] });
}, _K = {
	"box-flex": "_box-flex_1odfs_9",
	"box-shrink": "_box-shrink_1odfs_13",
	"box-grow": "_box-grow_1odfs_17"
};
//#endregion
//#region src/core/utils/Box/Box.ts
function vK({ as: e = "div", flex: t = null, shrink: n = null, grow: r = null, className: i, children: a, ...s }) {
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
		className: (0, z.default)(i, {
			[_K["box-flex"]]: !!t,
			[_K["box-shrink"]]: !!n,
			[_K["box-grow"]]: !!r
		}),
		style: c
	}, a);
}
//#endregion
//#region src/resize/group/GroupView.tsx
function yK({ vm: e, children: t }) {
	return H(e), /* @__PURE__ */ D(Ve, {
		onLayoutChanged: (t) => {
			let n = t[CK];
			e.onLeftPanelResized(n);
		},
		children: t
	});
}
var bK = {
	separator: "_separator_wo6l2_8",
	content: "_content_wo6l2_21",
	activeSeparatorContainer: "_activeSeparatorContainer_wo6l2_39",
	activeSeparator: "_activeSeparator_wo6l2_39",
	dragIcon: "_dragIcon_wo6l2_98"
};
//#endregion
//#region src/resize/separator/SeparatorView.tsx
function xK({ vm: e, className: t }) {
	let { translate: n } = B(), { isCollapsed: r } = H(e), i = r ? "bar" : "border", a = /* @__PURE__ */ D(Ae, {
		description: n("left_panel|separator_label"),
		placement: "right",
		disabled: i === "border",
		children: /* @__PURE__ */ D("div", {
			className: bK.content,
			children: /* @__PURE__ */ D(pC, {
				className: bK.dragIcon,
				width: "20px",
				height: "12px",
				viewBox: "3.999704360961914 8.999704360961914 16.000295639038086 6.000591278076172",
				transform: "rotate(90)"
			})
		})
	}), o = /* @__PURE__ */ D("div", {
		className: bK.activeSeparatorContainer,
		children: /* @__PURE__ */ D("div", { className: bK.activeSeparator })
	});
	return /* @__PURE__ */ D(Ke, {
		className: (0, z.default)(bK.separator, t),
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
function SK({ vm: e, className: t, children: n, ...r }) {
	let { initialSize: i, isCollapsed: a } = H(e), [o, s] = qe();
	_(() => {
		o && e.setPanelHandle(o);
	}, [e, o]);
	let c = i === void 0 ? r.defaultSize : `${i}%`;
	return /* @__PURE__ */ D(We, {
		inert: a,
		id: CK,
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
var CK = "left-panel", wK = {
	description: "_description_1qm4o_8",
	buttons: "_buttons_1qm4o_22"
};
//#endregion
//#region src/core/toast/GenericToast.tsx
function TK({ description: e, detail: t, primaryLabel: n, PrimaryIcon: r, secondaryLabel: i, SecondaryIcon: a, destructive: o, onPrimaryClick: s, onSecondaryClick: c, overrideWidth: l }) {
	let u = t ? /* @__PURE__ */ D("div", { children: t }) : null;
	return /* @__PURE__ */ O("div", { children: [/* @__PURE__ */ O("div", {
		className: wK.description,
		style: { maxWidth: l },
		children: [e, u]
	}), /* @__PURE__ */ O("div", {
		className: wK.buttons,
		"aria-live": "off",
		"data-testid": "toast-buttons",
		children: [c && i && /* @__PURE__ */ D(A, {
			onClick: c,
			kind: o === "secondary" ? "destructive" : "secondary",
			Icon: a,
			size: "md",
			children: i
		}), /* @__PURE__ */ D(A, {
			onClick: s,
			kind: o === "primary" ? "destructive" : "primary",
			Icon: r,
			size: "md",
			children: n
		})]
	})] });
}
//#endregion
//#region src/core/utils/ToastContext.ts
var EK = l(null);
EK.displayName = "ToastContext";
function DK() {
	let e = g(EK);
	if (!e) throw Error("Component must be wrapped in <ToastContext.Provider /> to use useToastContext");
	return e;
}
function OK() {
	let e = S(() => new kK(), []), [t, n] = T(e.getActiveToast()), r = h(() => {
		n(e.getActiveToast());
	}, [n, e]);
	return _(() => {
		e.setCallback(r);
	}, [e, r]), [t, e];
}
var kK = class {
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
}, AK = class {
	get language() {
		return Ax();
	}
	register(e) {
		let t = {};
		for (let n in e) for (let r in e[n]) t[r] = t[r] || {}, t[r][n] = e[n][r];
		for (let e in t) Ox(e, t[e]);
	}
	translate(e, t, n) {
		return n ? U(e, t, n) : U(e, t);
	}
	humanizeTime = (e) => tO(e, this);
};
//#endregion
//#region src/room/avatar/RoomAvatar/RoomAvatarView.tsx
function jK({ vm: e, ref: t }) {
	let { name: n, idName: r, urls: i, type: a, size: o, isClickable: s, className: c, altText: l = "Avatar", title: u, tabIndex: d, role: f, ariaHidden: p } = H(e), [m, g] = T(0);
	_(() => {
		g(0);
	}, [i]);
	let v = h(() => {
		g((e) => e + 1);
	}, []), y = i[m], b = {};
	return f ? b.role = f : s ? (b.role = "button", b["aria-live"] = "off") : y || (b.role = "presentation", b["aria-label"] = void 0), /* @__PURE__ */ D(ne, {
		ref: t,
		src: y,
		id: r ?? "",
		name: n,
		type: a,
		size: o,
		className: c,
		"aria-label": l,
		onError: v,
		title: u,
		onClick: s ? e.onClick : void 0,
		tabIndex: d,
		"aria-hidden": p,
		"data-testid": "avatar-img",
		...b
	});
}
var MK = {
	statusText: "_statusText_t2gx5_8",
	menuStatusText: "_menuStatusText_t2gx5_20"
}, NK = function({ status: e, ref: t, className: n, ...r }) {
	return /* @__PURE__ */ O("div", {
		ref: t,
		...r,
		className: (0, z.default)(MK.statusText, n),
		children: [/* @__PURE__ */ D(P, {
			as: "span",
			className: MK.menuStatusEmoji,
			children: e.emoji
		}), /* @__PURE__ */ D(P, {
			as: "span",
			className: MK.menuStatusText,
			children: e.text
		})]
	});
};
//#endregion
//#region src/status/UserStatusIconView.tsx
function PK({ vm: e }) {
	let { status: t } = H(e);
	return t ? /* @__PURE__ */ D(Ae, {
		description: t.text,
		children: /* @__PURE__ */ D(P, {
			as: "span",
			children: t.emoji
		})
	}) : null;
}
var FK = {
	customThemes: "_customThemes_1kxi0_8",
	form: "_form_1kxi0_15",
	list: "_list_1kxi0_22",
	theme: "_theme_1kxi0_32",
	row: "_row_1kxi0_39",
	name: "_name_1kxi0_45",
	error: "_error_1kxi0_53"
}, IK = {
	InvalidSchema: "InvalidSchema",
	DownloadFailed: "DownloadFailed",
	AlreadyInstalled: "AlreadyInstalled",
	SaveFailed: "SaveFailed"
}, LK = {
	[IK.InvalidSchema]: Mx("devtools|custom_themes|error_invalid"),
	[IK.DownloadFailed]: Mx("devtools|custom_themes|error_downloading"),
	[IK.AlreadyInstalled]: Mx("devtools|custom_themes|error_already_installed"),
	[IK.SaveFailed]: Mx("devtools|custom_themes|error_save_failed")
};
function RK({ vm: e }) {
	let { themes: t, url: n, isDownloading: r, error: i } = H(e);
	return /* @__PURE__ */ O("div", {
		className: FK.customThemes,
		children: [/* @__PURE__ */ O(Ce, {
			className: FK.form,
			onSubmit: (t) => {
				t.preventDefault(), e.addTheme();
			},
			children: [/* @__PURE__ */ O(ce, {
				name: "customThemeUrl",
				children: [
					/* @__PURE__ */ D(_e, { children: U("devtools|custom_themes|url_label") }),
					/* @__PURE__ */ D(De, {
						value: n,
						onChange: (t) => e.setUrl(t.target.value)
					}),
					i ? /* @__PURE__ */ D(se, { children: U(LK[i]) }) : /* @__PURE__ */ D(me, { children: U("devtools|custom_themes|help") })
				]
			}), /* @__PURE__ */ D(A, {
				type: "submit",
				size: "md",
				disabled: r || n.trim() === "",
				children: U(r ? "devtools|custom_themes|downloading" : "devtools|custom_themes|add")
			})]
		}), t.length > 0 && /* @__PURE__ */ D("ul", {
			className: FK.list,
			"aria-label": U("devtools|custom_themes|installed_heading"),
			children: t.map((t) => /* @__PURE__ */ O("li", {
				className: FK.theme,
				"aria-label": t.name,
				children: [/* @__PURE__ */ O("div", {
					className: FK.row,
					children: [
						/* @__PURE__ */ D("span", {
							className: FK.name,
							children: t.name
						}),
						t.canRefresh && /* @__PURE__ */ D(M, {
							"aria-label": U("devtools|custom_themes|refresh"),
							tooltip: U("devtools|custom_themes|refresh"),
							disabled: t.isRefreshing,
							onClick: () => void e.refreshTheme(t.name),
							children: /* @__PURE__ */ D(Tw, {})
						}),
						/* @__PURE__ */ D(M, {
							destructive: !0,
							"aria-label": U("action|delete"),
							tooltip: U("action|delete"),
							disabled: t.isRefreshing,
							onClick: () => void e.removeTheme(t.name),
							children: /* @__PURE__ */ D(rC, {})
						})
					]
				}), t.error && /* @__PURE__ */ D(P, {
					as: "span",
					size: "sm",
					className: FK.error,
					children: U(LK[t.error])
				})]
			}, t.name))
		})]
	});
}
//#endregion
export { qO as ActionBarAction, JO as ActionBarView, Zk as AudioPlayerView, Kx as AutoHideScrollbar, tb as AvatarWithDetails, FO as BACKWARD_LOADING_KEY, CT as Banner, ab as BaseViewModel, vK as Box, mk as CallDirection, pk as CallType, Af as Clock, IK as CustomThemeError, RK as CustomThemesView, aE as DEFAULT_EVENT_PRESENTATION, cO as DateSeparatorView, nA as DecryptionFailureBodyView, $k as DecryptionFailureReason, XO as DisambiguatedProfileView, nb as Disposables, Nk as DmOngoingCallTileView, gk as DmTombstoneCallTileView, zD as DocumentViewerView, kk as DurationView, nk as E2eMessageSharedIconView, tk as E2ePadlock, QO as E2ePadlockIcon, PD as ElementCallAppTileView, ID as ElementCallMockView, bT as EmojiPicker, ok as EncryptionEventState, sk as EncryptionEventView, dE as EventContentBodyView, sE as EventPresentationProvider, lk as EventPreviewView, ak as EventTileBubble, uk as EventTileView, IO as FORWARD_LOADING_KEY, xT as FacePileView, wE as FileBodyView, SE as FileBodyViewInfoIcon, xE as FileBodyViewState, dG as FlatVirtualizedList, V as Flex, TK as GenericToast, yK as GroupView, mG as GroupedVirtualizedList, pE as HiddenBodyView, hE as HiddenMediaPlaceholder, LD as HistoryVisibilityBadge, AK as I18nApi, Lf as I18nContext, $E as ImageBodyView, ZE as ImageBodyViewPlaceholder, XE as ImageBodyViewState, rD as ImageReplyBodyView, tD as ImageReplyBodyViewPlaceholder, fb as KEY_SEPARATOR, CK as LEFT_PANEL_ID, fN as LINKIFIED_DATA_ATTRIBUTE, SK as LeftResizablePanelView, LT as LegacyCryptoUnsupportedView, _N as LinkedText, hN as LinkedTextContext, sN as LinkifyMatrixOpaqueIdType, aN as LinkifyOptionalSlashProtocols, iN as LinkifySupportedProtocols, Rk as MJitsiWidgetEventView, Bk as MKeyVerificationRequestView, WD as MarkdownViewerView, bE as MediaBody, zN as MediaPreviewGroupPreview, lb as MemberAvatarView, jT as MessageComposerUrlPreviewView, fA as MessageTimestampView, aD as MjolnirBodyView, ob as MockViewModel, PG as MoreOptionContent, nE as NotificationBadgeView, IG as NotificationDecoration, oN as PERMITTED_URL_SCHEMES, Ue as Panel, HD as PdfViewerView, xD as Pill, OD as PillInput, Hk as PinnedMessageBadge, Rf as PlayPauseButton, cA as ReactionsRowButtonTooltipView, uA as ReactionsRowButtonView, sA as ReactionsRowView, iE as ReadMarker, _E as RedactedBodyView, Wk as ReplyTileView, He as ResizableGroup, UN as RichItem, qN as RichList, Kk as RoomAvatarEventView, jK as RoomAvatarView, gP as RoomListEmptyStateView, eP as RoomListHeaderView, VG as RoomListItemContent, FG as RoomListItemContextMenu, nK as RoomListItemDragOverlayView, BG as RoomListItemHoverMenu, NG as RoomListItemMoreOptionsMenu, RG as RoomListItemNotificationMenu, UG as RoomListItemView, $G as RoomListItemWrapper, mP as RoomListLoadingSkeleton, fP as RoomListPrimaryFilters, nP as RoomListSearchView, WG as RoomListSectionHeaderContent, YG as RoomListSectionHeaderView, XG as RoomListStickySectionHeaderView, mK as RoomListToast, gK as RoomListView, LG as RoomNotifState, Ak as RoomOngoingCallTileView, oP as RoomPickerView, AD as RoomStatusBarState, jD as RoomStatusBarView, fk as RoomTombstoneCallTileView, Lk as RootCallTileView, Xx as RovingAction, _S as RovingGridIndexProvider, Yx as RovingStateActionType, Jx as RovingTabIndexContext, lS as RovingTabIndexProvider, yS as RovingTabIndexWrapper, FT as SasEmoji, sP as SectionCreationView, Qy as SeekBar, Ge as Separator, xK as SeparatorView, $T as SetStatusView, rb as Snapshot, NK as StatusTextView, pD as TextualBodyView, dD as TextualBodyViewBodyWrapperKind, uD as TextualBodyViewKind, Jk as TextualEventView, iA as ThreadMessagePreviewView, aA as ThreadSummaryView, yD as TileErrorView, JD as TimelineSeparator, WO as TimelineView, EK as ToastContext, kK as ToastRack, xS as Toolbar, hD as UnknownBodyView, wT as UploadButton, eE as UserMenu, PK as UserStatusIconView, cD as VideoBodyView, sD as VideoBodyViewState, ib as ViewModelSubscriptions, _D as ViewSourceEventView, uK as VirtualizedRoomListView, Le as VirtuosoMockContext, GD as WidgetContextMenuView, ND as WidgetPipView, U as _t, Rx as _tDom, Mx as _td, BN as attachmentIcon, qx as checkInputableElement, e as clamp, t as defaultNumber, uN as findLinksInString, nS as findNextSiblingElement, rS as findPreviousSiblingElement, Xk as formatBytes, kf as formatDateForInput, Of as formatSeconds, lN as generateLinkedTextOptions, hG as getContainerAccessibleProps, _G as getGroupHeaderAccessibleProps, gG as getItemAccessibleProps, Wx as getLangsJson, Ax as getLocale, db as getNormalizedLanguageKeys, nO as humanizeRelativeTime, tO as humanizeTime, dN as isLinkable, GT as limitUserStatusInputText, VN as linkIcon, XM as linkifyHtml, kM as linkifyString, Lx as lookupString, ub as normalizeLanguageKey, n as percentageOf, r as percentageWithin, Ox as registerTranslations, Vx as replaceByRegexes, zx as sanitizeForTranslation, Hx as setLanguage, jx as setLocale, kx as setMissingEntryGenerator, Bx as substitute, i as sum, OK as useActiveToast, cP as useCollapseFilters, sb as useCreateAutoDisposedViewModel, cE as useEventPresentation, B as useI18n, gN as useLinkedTextContext, cb as useMockedViewModel, uS as useRovingTabIndex, DK as useToastContext, H as useViewModel, lP as useVisibleFilters };
