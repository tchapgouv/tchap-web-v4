import { clamp as e, defaultNumber as t, percentageOf as n, percentageWithin as r, sum as i } from "./numbers.js";
import * as a from "react";
import o, { Children as s, cloneElement as c, createContext as l, createElement as u, forwardRef as d, isValidElement as f, memo as p, startTransition as m, useCallback as h, useContext as g, useEffect as _, useId as v, useImperativeHandle as y, useInsertionEffect as b, useLayoutEffect as x, useMemo as S, useReducer as C, useRef as w, useState as T, useSyncExternalStore as E, version as ee } from "react";
import { Avatar as D, AvatarStack as te, Badge as O, Button as k, ChatFilter as ne, CheckboxMenuItem as re, ContextMenu as ie, Dropdown as A, ErrorMessage as ae, Field as oe, Form as se, H1 as ce, H2 as le, H3 as ue, Heading as de, HelpMessage as fe, IconButton as j, IndicatorIcon as pe, InlineSpinner as me, Label as he, Link as ge, Menu as _e, MenuItem as M, MenuTitle as ve, RadioMenuItem as ye, ReleaseAnnouncement as be, Root as xe, Separator as Se, SubMenu as Ce, Submit as we, Text as N, TextControl as Te, Toast as Ee, ToggleMenuItem as De, Tooltip as Oe, Unread as ke, UnreadCounter as Ae, useIdColorHash as je } from "@vector-im/compound-web";
import { DATA_BY_CATEGORY as Me, getEmojiFromUnicode as Ne } from "@matrix-org/emojibase-bindings";
import { Virtuoso as Pe, VirtuosoMockContext as Fe } from "react-virtuoso";
import { flushSync as Ie } from "react-dom";
import { Group as Le, Group as Re, Panel as ze, Panel as Be, Separator as Ve, Separator as He, usePanelCallbackRef as Ue } from "react-resizable-panels";
//#region \0rolldown/runtime.js
var We = Object.create, Ge = Object.defineProperty, Ke = Object.getOwnPropertyDescriptor, qe = Object.getOwnPropertyNames, Je = Object.getPrototypeOf, Ye = Object.prototype.hasOwnProperty, Xe = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, P = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), Ze = (e, t) => {
	let n = {};
	for (var r in e) Ge(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || Ge(n, Symbol.toStringTag, { value: "Module" }), n;
}, Qe = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = qe(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !Ye.call(e, s) && s !== n && Ge(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = Ke(t, s)) || r.enumerable
	});
	return e;
}, $e = (e, t, n) => (n = e == null ? {} : We(Je(e)), Qe(t || !e || !e.__esModule || !Ye.call(e, "default") ? Ge(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), et = (e) => Ye.call(e, "module.exports") ? e["module.exports"] : Qe(Ge({}, "__esModule", { value: !0 }), e), tt = globalThis.Temporal, nt = (e, t) => `Non-positive ${e}: ${t}`, rt = (e, t) => `Non-finite ${e}: ${t}`, it = (e) => `Cannot convert bigint to ${e}`, at = "Invalid object", ot = (e, t, n, r) => st(e, t) + `; must be between ${n}-${r}`, st = (e, t) => `Invalid ${e}: ${t}`, ct = 1e3, lt = 1e6, ut = 1e9, dt = 6e10, ft = 36e11;
function pt(e) {
	return e === void 0 ? Object.create(null) : bt(e);
}
function mt(e, t = "number") {
	if (typeof e == "bigint") throw TypeError(it(t));
	if (e = Number(e), !Number.isFinite(e)) throw RangeError(rt(t, e));
	return e;
}
function ht(e, t) {
	return Math.trunc(mt(e, t)) || 0;
}
function gt(e, t) {
	return _t(ht(e, t), t);
}
function _t(e, t = "number") {
	if (e <= 0) throw RangeError(nt(t, e));
	return e;
}
function vt(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
function yt(e) {
	return e !== null && (typeof e == "object" || typeof e == "function");
}
function bt(e) {
	if (!yt(e)) throw TypeError(at);
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/temporal-polyfill@1.0.5/node_modules/temporal-polyfill/chunks/options.js
function xt(e, t) {
	return typeof e == "string" ? ((e, t) => {
		let n = Object.create(null);
		return n[e] = t, n;
	})(t, e) : bt(e);
}
var St = "smallestUnit", Ct = {
	constrain: 0,
	reject: 1
}, wt = {
	compatible: 0,
	reject: 1,
	earlier: 2,
	later: 3
}, Tt = {
	reject: 0,
	use: 1,
	prefer: 2,
	ignore: 3
}, Et = {
	auto: 0,
	never: 1,
	critical: 2,
	always: 3
}, Dt = {
	auto: 0,
	never: 1,
	critical: 2
}, Ot = {
	auto: 0,
	never: 1
}, kt = {
	floor: 0,
	halfFloor: 1,
	ceil: 2,
	halfCeil: 3,
	trunc: 4,
	halfTrunc: 5,
	expand: 6,
	halfExpand: 7,
	halfEven: 8
}, At = [
	Math.floor,
	or,
	Math.ceil,
	sr,
	Math.trunc,
	cr,
	rr,
	ar,
	lr
], jt = {
	previous: -1,
	next: 1
};
function Mt(e) {
	let t = e.roundingIncrement;
	return t === void 0 ? 1 : ht(t, "roundingIncrement");
}
function Nt(e) {
	let t = e.fractionalSecondDigits;
	if (t !== void 0) {
		if (typeof t != "number") {
			if (ba(t) === "auto") return;
			I(dn("fractionalSecondDigits", t));
		}
		t = On("fractionalSecondDigits", Math.floor(t), 0, 9, 1);
	}
	return t;
}
function Pt(e, t, n = 0, r) {
	let i = t[e];
	if (i === void 0) return r ? n : void 0;
	if (i = ba(i), i === "auto") return r ? n : null;
	let a = yr[i];
	return a === void 0 && (a = sa.indexOf(i)), a < 0 && I(mn(e, i, yr)), a;
}
function Ft(e, t, n, r = 0) {
	let i = n[e];
	if (i === void 0) return r;
	let a = ba(i), o = t[a];
	return o === void 0 && I(mn(e, a, t)), o;
}
var It = /*@__PURE__*/ zn(Pt, St), Lt = /*@__PURE__*/ zn(Pt, "largestUnit"), Rt = /*@__PURE__*/ zn(Pt, "unit"), zt = /*@__PURE__*/ zn(Ft, "overflow", Ct), Bt = /*@__PURE__*/ zn(Ft, "disambiguation", wt), Vt = /*@__PURE__*/ zn(Ft, "offset", Tt), Ht = /*@__PURE__*/ zn(Ft, "calendarName", Et), Ut = /*@__PURE__*/ zn(Ft, "timeZoneName", Dt), Wt = /*@__PURE__*/ zn(Ft, "offset", Ot), Gt = /*@__PURE__*/ zn(Ft, "roundingMode", kt), Kt = /*@__PURE__*/ zn(Ft, "direction", jt);
function qt(e, t, n, r) {
	let i = r ? Er : Dr[t + 1];
	if (i) {
		let n = Dr[t];
		i % ((e = On("roundingIncrement", e, 1, i / n - +!r, 1)) * n) && I(dn("roundingIncrement", e));
	} else e = On("roundingIncrement", e, 1, n ? 10 ** 9 : 1, 1);
	return e;
}
function Jt(e, t, n, r) {
	return t != null && On(e, t, n, r, 1, br), t;
}
function Yt(e, t) {
	t > e && I("smallestUnit > largestUnit");
}
function Xt(e, t, n, r = 9, i = 0, a = 4) {
	t = pt(t);
	let o = Lt(t, i), s = Mt(t), c = Gt(t, a), l = It(t, i, 1);
	return o = Jt("largestUnit", o, i, r), l = Jt(St, l, i, r), o == null ? o = Math.max(n, l) : Yt(o, l), s = qt(s, l, 1), e && (c = ((e) => e < 4 ? (e + 2) % 4 : e)(c)), [
		o,
		l,
		s,
		c
	];
}
function Zt(e, t, n) {
	e = xt(e, St);
	let r = Lt(e), i = n(e.relativeTo), a = Mt(e), o = Gt(e, 7), s = It(e);
	return r === void 0 && s === void 0 && I("Required smallestUnit or largestUnit"), s ??= 0, r ??= Math.max(s, t), Yt(r, s), a = qt(a, s, 1), a > 1 && s > 5 && r !== s && I("For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit"), [
		r,
		s,
		a,
		o,
		i
	];
}
function Qt(e, t = 6, n) {
	let r = Mt(e = xt(e, St)), i = Gt(e, 7), a = It(e);
	return a = ga(St, a), a = Jt(St, a, 0, t), r = qt(r, a, void 0, n), [
		a,
		r,
		i
	];
}
function $t(e, t) {
	let n = t((e = xt(e, "unit")).relativeTo), r = Rt(e);
	return r = ga("unit", r), [r, n];
}
function F(e) {
	return e === void 0 ? 0 : zt(bt(e));
}
function en(e, t = 0) {
	e = pt(e);
	let n = Bt(e), r = Vt(e, t);
	return [
		zt(e),
		r,
		n
	];
}
function tn(e) {
	return Bt(pt(e));
}
function nn(e, t = 4) {
	let n = Nt(e);
	return [Gt(e, 4), ...ln(Jt(St, It(e), 0, t), n)];
}
function rn(e) {
	return e = pt(e), [Ht(e), ...nn(e)];
}
function an(e) {
	return Ht(pt(e));
}
function on(e, t) {
	return nn(pt(e), t);
}
function sn(e) {
	e = pt(e);
	let t = Ht(e), n = Nt(e), r = Wt(e), i = Gt(e, 4), a = It(e);
	return [
		t,
		Ut(e),
		r,
		i,
		...ln(Jt(St, a, 0, 4), n)
	];
}
function cn(e) {
	let t = Nt(e = pt(e)), n = Gt(e, 4), r = It(e);
	return [
		e.timeZone,
		n,
		...ln(Jt(St, r, 0, 4), t)
	];
}
function ln(e, t) {
	return e == null ? [t === void 0 ? 1 : 10 ** (9 - t), t] : [Dr[e], e < 4 ? 9 - 3 * e : -1];
}
function un(e) {
	let t = Kt(xt(e, "direction"), 0);
	return t || I(dn("direction", t)), t;
}
//#endregion
//#region ../../node_modules/.pnpm/temporal-polyfill@1.0.5/node_modules/temporal-polyfill/chunks/internal.js
var dn = st, fn = (e) => `Missing ${e}`, pn = (e) => "No valid fields: " + e.join(), mn = (e, t, n) => st(e, t) + "; must be " + Object.keys(n).join(), hn = "Cannot use valueOf", gn = "Invalid calling context", _n = (e) => "Missing year" + (e ? "/era/eraYear" : ""), vn = "Invalid leap month", yn = (e) => st("Calendar", e), bn = (e, t) => `Unknown calendar ${e}; might need ${t}`, xn = (e) => st("TimeZone", e), Sn = (e) => `Cannot parse: ${e}`, Cn = (e) => `Invalid substring: ${e}`, wn = vt, Tn = yt;
function I(e) {
	throw RangeError(e);
}
function En(e) {
	throw TypeError(e);
}
function Dn(e, t, n, r, i) {
	return On(t, ((e, t) => {
		let n = e[t];
		return n === void 0 && En(fn(t)), n;
	})(e, t), n, r, i);
}
function On(e, t, n, r, i, a) {
	let o = wn(t, n, r);
	return i && t !== o && I(((e, t, n, r, i) => i ? ot(e, i[t], i[n], i[r]) : ot(e, t, n, r))(e, t, n, r, a)), o;
}
function kn(e, t = Map) {
	let n = new t();
	return (t, ...r) => {
		if (n.has(t)) return n.get(t);
		let i = e(t, ...r);
		return n.set(t, i), i;
	};
}
var An = (e) => jn({ name: e }, 1), jn = (e, t) => Nn((e) => ({
	value: e,
	configurable: 1,
	writable: !t
}), e), Mn = (e) => ({ [Symbol.toStringTag]: {
	value: e,
	configurable: 1
} });
function Nn(e, t) {
	let n = {};
	for (let r in t) n[r] = e(t[r], r);
	return n;
}
function Pn(e, t) {
	let n = {};
	for (let r of e) n[r] = t;
	return n;
}
function Fn(e) {
	let t = {};
	for (let n of e) t[n] = (e) => e[n];
	return t;
}
function In(e, t, n = Object.create(null)) {
	for (let r of e) n[r] = t[r];
	return n;
}
function Ln(e, t, n) {
	for (let r of e) if (t[r] !== n[r]) return 0;
	return 1;
}
function Rn(e, t, n) {
	let r = { ...n };
	for (let n = 0; n < t; n++) r[e[n]] = 0;
	return r;
}
function zn(e, ...t) {
	return (...n) => e(...t, ...n);
}
function Bn() {}
function Vn(e) {
	return e[0].toUpperCase() + e.substring(1);
}
function Hn(...e) {
	return [].concat(...e).sort();
}
function Un(e) {
	return RegExp(`^${e}$`, "i");
}
function Wn(e) {
	return parseInt(e.padEnd(9, "0"));
}
function Gn(e) {
	return e && e !== "+" ? -1 : 1;
}
function Kn(e) {
	return e === void 0 ? 0 : parseInt(e);
}
function qn(e, t) {
	return String(t).padStart(e, "0");
}
var Jn = /*@__PURE__*/ zn(qn, 2);
function Yn(e, t) {
	return Math.sign(e - t);
}
function Xn(e, t) {
	return e < t ? -1 : +(e > t);
}
function Zn(e, t) {
	let n = e / t;
	return e % t < 0n ? n - 1n : n;
}
function Qn(e, t) {
	let n = Zn(e, t);
	return [n, e - n * t];
}
function $n(e, t) {
	return [Math.floor(e / t), er(e, t)];
}
function er(e, t) {
	return (e % t + t) % t;
}
function tr(e, t) {
	return Math.trunc(e / t) || 0;
}
function nr(e, t) {
	return e % t || 0;
}
function rr(e) {
	return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function ir(e, t = 1) {
	return t * (.5 + e / 5);
}
function ar(e) {
	return Math.sign(e) * Math.round(Math.abs(e)) || 0;
}
function or(e) {
	return ur(e) ? Math.floor(e) : Math.round(e);
}
function sr(e) {
	return ur(e) ? Math.ceil(e) : Math.round(e);
}
function cr(e) {
	return ur(e) ? Math.trunc(e) || 0 : Math.round(e);
}
function lr(e) {
	return ur(e) ? (e = Math.trunc(e) || 0) + e % 2 : Math.round(e);
}
function ur(e) {
	return Math.abs(e % 1) === .5;
}
var dr = "iso8601", fr = {
	bce: -1,
	ce: 0
};
function pr(e) {
	let t = e.normalize("NFD").toLowerCase().replace(/[^a-z0-9]/g, "");
	return t === "bc" || t === "b" ? "bce" : t === "ad" || t === "a" ? "ce" : t;
}
function mr(e) {
	return e === void 0 ? "iso8601" : e === 0 ? "gregory" : e.id;
}
var hr = /^M(\d{2})(L?)$/;
function gr(e) {
	let t = hr.exec(e);
	return t || I(((e) => `Invalid monthCode: ${e}`)(e)), [parseInt(t[1]), !!t[2]];
}
function _r(e, t) {
	return "M" + Jn(e) + (t ? "L" : "");
}
function vr(e, t, n) {
	return e + (t || n && e >= n ? 1 : 0);
}
var yr = {
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
}, br = /*@__PURE__*/ Object.keys(yr), xr = ct, Sr = lt, Cr = ut, wr = dt, Tr = ft, Er = 864e11, Dr = [
	1,
	xr,
	Sr,
	Cr,
	wr,
	Tr,
	Er
], Or = /*@__PURE__*/ BigInt(xr), kr = /*@__PURE__*/ BigInt(Sr), Ar = /*@__PURE__*/ BigInt(Cr), jr = /*@__PURE__*/ BigInt(wr), Mr = /*@__PURE__*/ BigInt(Tr), Nr = /*@__PURE__*/ BigInt(Er);
function Pr(e, t) {
	let n = Number(e / Nr), r = Number(e % Nr);
	return Er / t * n + (Math.trunc(r / t) + r % t / t);
}
var Fr = /*@__PURE__*/ br.slice(0, 6), Ir = /*@__PURE__*/ Fn(Fr), Lr = ["year"], Rr = ["day"], zr = [
	"day",
	"month",
	"year"
], Br = ["offset"], Vr = ["timeZone"], Hr = ["era", "eraYear"], Ur = [
	"era",
	"eraYear",
	"year"
], Wr = ["month", "monthCode"], Gr = [
	"day",
	"month",
	"monthCode"
], Kr = /*@__PURE__*/ Hn(Fr), qr = /*@__PURE__*/ Hn(Hr, Lr), Jr = /*@__PURE__*/ Hn(Wr, Lr), Yr = /*@__PURE__*/ Hn(Hr, Jr), Xr = /*@__PURE__*/ Hn(["monthCode"], Lr), Zr = /*@__PURE__*/ Hn(Hr, Xr), Qr = /*@__PURE__*/ Hn(Rr, ["monthCode"]), $r = /*@__PURE__*/ Hn(Rr, Jr), ei = /*@__PURE__*/ Hn(Rr, Hr, Jr), ti = /*@__PURE__*/ Hn($r, Fr), ni = /*@__PURE__*/ Hn(ei, Fr), ri = /*@__PURE__*/ Hn($r, Fr, Br), ii = /*@__PURE__*/ Hn(ei, Fr, Br), ai = /*@__PURE__*/ Hn($r, Fr, Br, Vr), oi = /*@__PURE__*/ Hn(ei, Fr, Br, Vr), si = /*@__PURE__*/ Hn(Rr, Xr), ci = /*@__PURE__*/ Hn(Rr, Hr, Xr), li = /*@__PURE__*/ Pn(Fr, 0);
function ui(e) {
	return fi(e, 1), e;
}
var di = {
	hour: 23,
	minute: 59,
	second: 59
};
function fi(e, t) {
	let n = {};
	for (let r of Fr) n[r] = On(r, e[r], 0, di[r] || 999, t);
	return n;
}
function pi(e) {
	return hi(e) * Cr + gi(e);
}
function mi(e) {
	return 1e3 * hi(e) + e.millisecond;
}
function hi(e) {
	return 3600 * e.hour + 60 * e.minute + e.second;
}
function gi(e) {
	return e.millisecond * Sr + e.microsecond * xr + e.nanosecond;
}
function _i(e) {
	let [t, n] = $n(e, Er);
	return [vi(n), t];
}
function vi(e) {
	let [t, n] = $n(e, Sr), [r, i] = $n(n, xr);
	return yi(t, r, i);
}
function yi(e, t = 0, n = 0) {
	let [r, i] = $n(e, 36e5), [a, o] = $n(i, 6e4), [s, c] = $n(o, 1e3);
	return {
		hour: r,
		minute: a,
		second: s,
		millisecond: c,
		microsecond: t,
		nanosecond: n
	};
}
function bi(e) {
	let [t, n] = Qn(e, Ar);
	return [Number(t), Number(n)];
}
function xi(e) {
	return Number(Zn(e, kr));
}
function Si(e) {
	return wi(e) + BigInt(pi(e));
}
function Ci(e) {
	return Ti(e) + mi(e);
}
function wi(e) {
	return BigInt(Ei(e)) * Nr;
}
function Ti(e) {
	return 864e5 * Ei(e);
}
function Ei(e) {
	return Di(e.year, e.month, e.day);
}
function Di(e, t = 1, n = 1) {
	let r = t - 1;
	return e += Math.floor(r / 12), t = er(r, 12), Date.UTC(e % 400 - 400, t, 0) / 864e5 + 146097 * (tr(e, 400) + 1) + n;
}
function Oi(e) {
	let [t, n] = Qn(e, Nr);
	return {
		...ki(Number(t)),
		...vi(Number(n))
	};
}
function ki(e) {
	let t = /* @__PURE__ */ new Date(864e5 * er(e, 146097));
	return {
		year: t.getUTCFullYear() + 400 * Math.floor(e / 146097),
		month: t.getUTCMonth() + 1,
		day: t.getUTCDate()
	};
}
function Ai(e) {
	return [e, 0];
}
function ji(e, t) {
	if (!t) return {
		year: 1972,
		month: e
	};
}
function Mi(e, t, n) {
	return {
		year: e,
		month: t,
		day: n
	};
}
function Ni(e, t) {
	switch (t) {
		case 2: return Fi(e) ? 29 : 28;
		case 4:
		case 6:
		case 9:
		case 11: return 30;
	}
	return 31;
}
function Pi(e) {
	return Fi(e) ? 366 : 365;
}
function Fi(e) {
	return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function Ii(e, t, n) {
	return e += tr(n, 12), (t += nr(n, 12)) < 1 ? (e--, t += 12) : t > 12 && (e++, t -= 12), {
		year: e,
		month: t
	};
}
function Li(e, t, n, r) {
	return 12 * (n - e) + r - t;
}
function Ri(e) {
	return er(Di(e.year, e.month, e.day) + 4, 7) || 7;
}
function zi(e) {
	return Di(e.year, e.month, e.day) - Di(e.year) + 1;
}
function Bi(e) {
	let t = e.year, n = Math.floor((zi(e) - Ri(e) + 10) / 7), r = Vi(t);
	return n < 1 ? n = r = Vi(--t) : n > r && (n = 1, r = Vi(++t)), {
		weekOfYear: n,
		yearOfWeek: t,
		De: r
	};
}
function Vi(e) {
	let t = Ri({
		year: e,
		month: 1,
		day: 1
	});
	return t === 4 || t === 3 && Fi(e) ? 53 : 52;
}
function Hi({ year: e }) {
	return e < 1 ? {
		era: "bce",
		eraYear: 1 - e
	} : {
		era: "ce",
		eraYear: e
	};
}
function Ui(e) {
	return Wi(e), ui(e);
}
function Wi(e) {
	return Ki(e, 1), e;
}
function Gi(e) {
	return Ln(zr, e, Ki(e));
}
function Ki(e, t) {
	let { year: n } = e, r = Dn(e, "month", 1, 12, t);
	return {
		year: n,
		month: r,
		day: Dn(e, "day", 1, Ni(n, r), t)
	};
}
function qi(e, t) {
	return e ? e.de(t) : t;
}
function Ji(e, t, n) {
	return e ? e.N(t, n) : Ai(n);
}
function Yi(e, t) {
	return e === 0 ? Hi(t) : e && e.h?.(t) || {};
}
function Xi(e, t, n, r) {
	return e ? e.fe(t, n, r) : Mi(t, n, r);
}
function Zi(e, t) {
	return e ? e.j(t) : 12;
}
function Qi(e, t, n) {
	return e ? e.o(t, n) : Ni(t, n);
}
function $i(e, t) {
	let { year: n, month: r } = qi(e, t), [i, a] = Ji(e, n, r);
	return _r(i, a);
}
function ea(e, t) {
	let { year: n } = qi(e, t);
	return e ? e.q(n) : Fi(n);
}
function ta(e, t) {
	let { year: n } = qi(e, t);
	return Zi(e, n);
}
function na(e, t) {
	let { year: n, month: r } = qi(e, t);
	return Qi(e, n, r);
}
function ra(e, t) {
	let { year: n } = qi(e, t);
	return e ? e.i(n) : Pi(n);
}
function ia(e, t) {
	if (!e) return zi(t);
	let { year: n } = qi(e, t), r = Xi(e, n, 1, 1);
	return Ei(t) - Ei(r) + 1;
}
function aa(e, t) {
	return e === void 0 ? Bi(t).weekOfYear : void 0;
}
function oa(e, t) {
	return e === void 0 ? Bi(t).yearOfWeek : void 0;
}
var sa = /*@__PURE__*/ br.map((e) => e + "s"), ca = /*@__PURE__*/ Fn(sa), la = /*@__PURE__*/ Hn(sa), ua = /*@__PURE__*/ sa.slice(0, 6), da = /*@__PURE__*/ sa.slice(6), fa = /*@__PURE__*/ da.slice(1), pa = /*@__PURE__*/ Pn(sa, 0), ma = /*@__PURE__*/ Pn(ua, 0), ha = /*@__PURE__*/ zn(Rn, sa);
function ga(e, t) {
	return t ?? I(fn(e)), t;
}
var _a = /*@__PURE__*/ zn(va, "string");
function va(e, t, n = e) {
	return typeof t !== e && En(dn(n, t)), t;
}
function ya(e, t = "number") {
	return Number.isInteger(e) || I(((e, t) => `Non-integer ${e}: ${t}`)(t, e)), e || 0;
}
function ba(e) {
	return typeof e == "symbol" && En("Cannot convert Symbol to string"), String(e);
}
function xa(e) {
	if (!yt(e)) return e;
	let t = e[Symbol.toPrimitive];
	if (t != null) {
		typeof t != "function" && En();
		let n = Reflect.apply(t, e, ["string"]);
		return yt(n) && En(), n;
	}
	return Date.prototype[Symbol.toPrimitive].call(e, "string");
}
function Sa(e) {
	return typeof e == "boolean" ? BigInt(+!!e) : typeof e == "string" ? BigInt(e) : (typeof e != "bigint" && En(`Invalid bigint: ${e}`), e);
}
function Ca(e, t) {
	return ya(mt(e, t), t);
}
function wa(e, t) {
	return In(zr, e, In(Fr, t));
}
var Ta = /*@__PURE__*/ BigInt(1e8) * Nr, Ea = /*@__PURE__*/ BigInt(-1e8) * Nr, Da = Ea - Nr, Oa = -3261848;
function ka(e) {
	let t = 12 * e.year + e.month;
	return (t < Oa || t > 3309129) && I("Out-of-bounds date"), e;
}
function Aa(e, t = 1) {
	let n = wi(e);
	return (n < (t ? Da : Ea) || n > Ta) && I("Out-of-bounds date"), e;
}
function ja(e) {
	return Ma(Si(e)), e;
}
function Ma(e) {
	return (e <= Da || e >= Ta + Nr) && I("Out-of-bounds date"), e;
}
function Na(e) {
	return (e < Ea || e > Ta) && I("Out-of-bounds date"), e;
}
function Pa(e, t) {
	return Na(wi(e) + BigInt(pi(e) - t));
}
function Fa(e, t, n) {
	return Ia(e / t, n) * t;
}
function Ia(e, t) {
	return At[t](e);
}
function La(e, t, n, r) {
	let i = za(e, t, r, n);
	return Va(i, Number(n - i.I) / Number(i.O - i.I));
}
function Ra(e, t, n, r) {
	return Fa(Va(e, Ha(t, e.I, e.O)), n, r);
}
function za(e, t, n, r) {
	let i = Ba(e, t, n);
	return ((e, t, n, r) => r > 0 ? t <= e && e <= n : n <= e && e <= t)(r, i.I, i.O, Math.sign(t)) || (i = Ba(e + t, t, n)), i;
}
function Ba(e, t, n) {
	let r = e + t;
	return {
		ve: e,
		qe: r,
		I: n(e),
		O: n(r)
	};
}
function Va(e, t) {
	return e.ve + t * (e.qe - e.ve);
}
function Ha(e, t, n) {
	let r = n - t, i = e - t;
	if (!i) return 0;
	let a = i < 0n ? -i : i, o = r < 0n ? -r : r, s = Xn(i, 0n) === Xn(r, 0n) ? 1 : -1;
	return Xn(a, o) <= 0 ? a === o ? s : ir(Xn(2n * a, o), s) : Number(i) / Number(r);
}
function Ua(e) {
	return { epochNanoseconds: e };
}
function Wa(e, t, n) {
	return {
		calendar: n,
		timeZone: t,
		epochNanoseconds: e
	};
}
function Ga(e, t) {
	return In(Fr, e, Ka(e, t));
}
function Ka(e, t) {
	return In(zr, e, { calendar: t });
}
function qa(e) {
	return In(Fr, e);
}
function Ja(e) {
	return In(sa, e, { sign: ds(e) });
}
function Ya(e, t, n, r) {
	return Wa(t === 6 ? eo(e, r) : to(e, t, n, r), e.timeZone, e.calendar);
}
function Xa(e) {
	let [t, n] = so(e);
	return Pr(n - t, Tr);
}
function Za(e) {
	let { timeZone: t, calendar: n } = e;
	return Wa(bo(t, wa(go(e), li)), t, n);
}
function Qa(e, t, n, r, i, a, o, s) {
	if (r === 0 && i === 1) return e;
	let c = ds(e) || 1, [l, u, d] = (rs(r, s) ? s && r < 6 && n >= 6 ? ao : oo : io)(c, e, t, n, r, i, a, o);
	return d && r !== 7 && (l = ((e, t, n, r, i, a) => {
		for (let o = r + 1; o <= n; o++) {
			if (o === 7 && n !== 7) continue;
			let r = ha(o, e);
			r[sa[o]] += i;
			let s = Xn(t, $o(a, r));
			if (s && s !== i) break;
			e = r;
		}
		return e;
	})(l, u, n, Math.max(6, r), c, o)), l;
}
function $a(e, t, n) {
	let r = Math.min(xs(e), 6);
	return vs(uo(hs(e), BigInt(t), n), r);
}
function eo(e, t) {
	let [n, r] = so(e);
	return co(e.epochNanoseconds, n, r, t);
}
function to(e, t, n, r) {
	if (t === 0 && n === 1) return e.epochNanoseconds;
	let i = go(e);
	return vo(e.timeZone, no(i, mo(t, n), r), i.offsetNanoseconds, 2, 0, 1);
}
function no(e, t, n) {
	let [r, i] = ro(e, t, n), a = wa(No(e, i), r);
	return ja(a), a;
}
function ro(e, t, n) {
	return _i(Fa(pi(e), t, n));
}
function io(e, t, n, r, i, a, o, s) {
	let c = sa[i], l = ha(i, t);
	i === 7 && (t = {
		...t,
		weeks: t.weeks + Math.trunc(t.days / 7)
	});
	let u = tr(t[c], a) * a, d = za(u, a * e, (e) => (l[c] = e, $o(s, l)), n), f = Ra(d, n, a, o);
	return l[c] = f, [
		l,
		f === d.qe ? d.O : d.I,
		f !== u
	];
}
function ao(e, t, n, r, i, a, o, s) {
	let c = Number(gs(t)), l = mo(i, a), u = Fa(c, l, o), d = {
		...t,
		...ma
	}, f = za(d.days, e, (e) => (d.days = e, $o(s, d)), n), p = f.I, m = f.O, h = u - Number(m - p), g = 0;
	h && Math.sign(h) !== e ? n = p + BigInt(u) : (g += e, u = Fa(h, l, o), n = m + BigInt(u));
	let _ = ys(u);
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
function oo(e, t, n, r, i, a, o) {
	let s = hs(t), c = uo(s, ho(i, a), o), l = c - s, u = Math.sign(Number(c / Nr) - Number(s / Nr)) === e, d = vs(c, Math.min(r, 6));
	return [
		{
			...t,
			...d
		},
		n + l,
		u
	];
}
function so(e) {
	let { timeZone: t } = e, n = wa(go(e), li), r = wa(No(n, 1), li);
	return [bo(t, n), bo(t, r)];
}
function co(e, t, n, r) {
	return Ia(Ha(e < n ? e : n - 1n, t, n), r) ? n : t;
}
function lo(e) {
	return Fa(e, wr, 7);
}
function uo(e, t, n) {
	return po(e, t, n, e / t % 2n);
}
function fo(e, t, n) {
	let [r, i] = Qn(e, Nr), a = r * Nr;
	return a + po(i, t, n, (a / t + i / t) % 2n);
}
function po(e, t, n, r) {
	let i = e / t, a = e % t, o = 0;
	a && (o = ir(Xn(2n * (a < 0n ? -a : a), t), Math.sign(Number(a))));
	let s = Ia(Number(r) + o, n);
	return (i - r + BigInt(s)) * t;
}
function mo(e, t) {
	return Dr[e] * t;
}
function ho(e, t) {
	return BigInt(Dr[e]) * BigInt(t);
}
var go = /*@__PURE__*/ kn(_o, WeakMap);
function _o(e) {
	let { epochNanoseconds: t, timeZone: n } = e, r = n.B(t);
	return {
		...Oi(t + BigInt(r)),
		offsetNanoseconds: r
	};
}
function vo(e, t, n, r = 0, i = 0, a, o) {
	if (n !== void 0 && r === 1 && (r === 1 || o)) return Pa(t, n);
	r !== 2 && r !== 0 || Aa(t, 0);
	let s = e.R(t);
	if (n !== void 0 && r !== 3) {
		let e = ((e, t, n, r) => {
			let i = Si(t);
			r && (n = lo(n));
			for (let t of e) {
				let e = Number(i - t);
				if (r && (e = lo(e)), e === n) return t;
			}
		})(s, t, n, a);
		if (e !== void 0) return e;
		r === 0 && I("Invalid TimeZone offset");
	}
	return o ? Si(t) : yo(e, t, i, s);
}
function yo(e, t, n = 0, r = e.R(t)) {
	if (r.length === 1) return r[0];
	if (n === 1 && I("Ambiguous offset"), r.length) return r[+(n === 3)];
	let i = Si(t), a = ((e, t) => {
		let n = e.B(t - Nr);
		return ((e) => (e > 864e11 && I("Out-of-bounds TimeZone gap"), e))(e.B(t + Nr) - n);
	})(e, i), o = Oi(i + BigInt(a * (n === 2 ? -1 : 1)));
	return (r = e.R(o))[n === 2 ? 0 : r.length - 1];
}
function bo(e, t) {
	let n = e.R(t);
	if (n.length) return n[0];
	let r = Si(t) - Nr;
	return e.C(r, 1);
}
function xo(e, t, n, r = 0) {
	return ds(n) && xs(n) < 8 && I("Cannot use small units"), Do(e, Eo(e, Aa(Do(e, t)), n, r));
}
function So(e, t, n = 0) {
	let { calendar: r, epochNanoseconds: i, timeZone: a } = e, o = gs(t), s = i;
	if (bs(t)) {
		let i = go(e);
		s = yo(a, wa(Eo(r, i, {
			...t,
			...ma
		}, n), i)) + o;
	} else s += o;
	return {
		...e,
		epochNanoseconds: Na(s)
	};
}
function Co(e, t, n, r = 0) {
	let [i, a] = wo(t, n);
	return ja(wa(Eo(e, t, {
		...n,
		...ma,
		days: n.days + a
	}, r), i));
}
function wo(e, t) {
	return jo(e, gs(t));
}
function To(e, t) {
	return Mo(e, (bs(n = t) && I("Cannot use large units"), gs(n)));
	var n;
}
function Eo(e, t, n, r = 0) {
	let { years: i, months: a, weeks: o, days: s } = n, c;
	if (s += Number(gs(n) / Nr), i || a) c = Oo(e, t, i, a, r);
	else {
		if (!o && !s) return t;
		c = t;
	}
	return (o || s) && (c = No(c, 7 * o + s)), Aa(c);
}
function Do(e, t) {
	return No(t, 1 - qi(e, t).day);
}
function Oo(e, t, n, r, i) {
	let { year: a, month: o, day: s } = qi(e, t);
	if (n) {
		let [t, r] = Ji(e, a, o);
		a += n, o = Ao(e, t, r, e ? e.p(a) : void 0, i), o = On("month", o, 1, Zi(e, a), i);
	}
	if (r) {
		let t = ko(e, a, o, r);
		({year: a, month: o} = t);
	}
	return s = On("day", s, 1, Qi(e, a, o), i), Xi(e, a, o, s);
}
function ko(e, t, n, r) {
	return e ? e.ae(t, n, r) : Ii(t, n, r);
}
function Ao(e, t, n, r, i) {
	if (n) {
		let n = e ? e.l : void 0;
		return r !== void 0 && (n < 0 || r === t + 1) ? r : (i === 1 && I(vn), n < 0 ? -n : t);
	}
	return vr(t, 0, r);
}
function jo(e, t) {
	let n = Number(t / Nr), r = Number(t % Nr), [i, a] = _i(pi(e) + r);
	return [i, n + a];
}
function Mo(e, t) {
	return Na(e + t);
}
function No(e, t) {
	return t ? ki(Ei(e) + t) : e;
}
function Po(e, t) {
	return mr(e) !== mr(t) && I("Mismatching Calendars"), e;
}
function Fo(e, t) {
	return e.m !== t.m && I("Mismatching TimeZones"), e;
}
function Io(e) {
	return e.timeZone.id;
}
function Lo(e, t, n, r, i, a, o) {
	return r < 6 ? Uo(t.epochNanoseconds, n.epochNanoseconds, r, i, a, o) : ((e, t, n, r, i, a, o) => {
		let s = n.epochNanoseconds;
		if (s === t.epochNanoseconds) return pa;
		let c, l = Fo(t.timeZone, n.timeZone);
		return c = Wo(l, e, t, n, r), c = Qa(c, s, r, i, a, o, es(e, l, t), 1), c;
	})(e, t, n, r, i, a, o);
}
function Ro(e, t, n, r, i, a, o) {
	return r <= 6 ? Uo(Si(t), Si(n), r, i, a, o) : ((e, t, n, r, i, a, o) => {
		let s = Si(n), c = Xn(s, Si(t));
		if (!c) return pa;
		let l;
		return l = Ko(e, t, n, c, r), l = Qa(l, s, r, i, a, o, ((e, t) => ({
			ne: Si(t),
			ke: (n) => Si(wa(Eo(e, t, n), t))
		}))(e, t)), l;
	})(e, t, n, r, i, a, o);
}
function zo(e, t, n, r, i, a, o) {
	let s = Do(e, t), c = Do(e, n);
	return Yo(s, c) ? Ho(e, Aa(s), Aa(c), r, i, a, o, 8) : pa;
}
function Bo(e, t, n, r, i, a, o, s = 6) {
	return r === 6 ? Uo(wi(t), wi(n), r, i, a, o) : Ho(e, t, n, r, i, a, o, s);
}
function Vo(e, t, n, r, i, a) {
	let o = Fa(pi(t) - pi(e), mo(r, i), a);
	return {
		...pa,
		...ys(o, n)
	};
}
function Ho(e, t, n, r, i, a, o, s = 6) {
	let c = wi(n);
	if (!Yo(t, n)) return pa;
	let l;
	return l = Jo(e, t, n, r), i === s && a === 1 || (l = Qa(l, c, r, i, a, o, ts(e, t))), l;
}
function Uo(e, t, n, r, i, a) {
	return {
		...pa,
		...vs(uo(t - e, ho(r, i), a), n)
	};
}
function Wo(e, t, n, r, i) {
	return i < 6 ? {
		...pa,
		...vs(r.epochNanoseconds - n.epochNanoseconds, i)
	} : ((e, n, r) => {
		let a = Xn(r.epochNanoseconds, n.epochNanoseconds);
		if (!a) return pa;
		if (!Yo(go(n), go(r))) return {
			...pa,
			...vs(r.epochNanoseconds - n.epochNanoseconds, 5)
		};
		let [o, s, c] = qo(e, n, r, a);
		return {
			...(l = o, u = s, Jo(t, l, u, i)),
			...ys(c)
		};
		var l, u;
	})(e, n, r);
}
function Go(e, t, n, r) {
	let i = Si(t), a = Si(n), o = Xn(a, i);
	return o ? r <= 6 ? {
		...pa,
		...vs(a - i, r)
	} : Ko(e, t, n, o, r) : pa;
}
function Ko(e, t, n, r, i) {
	let a = n, o = pi(n) - pi(t);
	return Math.sign(o) === -r && (a = No(n, -r), o += 864e11 * r), {
		...Jo(e, t, a, i),
		...ys(o)
	};
}
function qo(e, t, n, r) {
	let i = go(t), a = go(n), o = n.epochNanoseconds, s = 0, c = pi(a) - pi(i);
	Math.sign(c) === -r && s++;
	let l = s + +(r > 0);
	for (;; s++) {
		let t = No(a, s * -r), n = yo(e, wa(t, i));
		if (s === l || Xn(o, n) !== -r) return [
			i,
			t,
			Number(o - n)
		];
	}
}
function Jo(e, t, n, r) {
	if (r <= 7) return ((e, t, n) => {
		let r = Xo(t, n);
		return e ? {
			...pa,
			weeks: tr(r, 7),
			days: nr(r, 7)
		} : {
			...pa,
			days: r
		};
	})(r === 7, t, n);
	let i = qi(e, t), a = qi(e, n);
	if (r === 8) {
		let { year: r, month: o, day: s } = i, { year: c, month: l, day: u } = a, d = Math.sign(Yn(c, r) || Yn(l, o) || Xo(t, n)), f = 0, p = 0;
		if (d) {
			f = e ? e.ee(r, o, c, l) : Li(r, o, c, l);
			let i = Oo(e, t, 0, f, 0);
			d * Yn(s, u) > 0 && (f -= d, i = Oo(e, t, 0, f, 0)), p = Xo(i, n);
		}
		return {
			...pa,
			months: f,
			days: p
		};
	}
	let { year: o, month: s, day: c } = i, { year: l, month: u, day: d } = a, f = l - o, p = u - s, m = d - c;
	if (f || p) {
		let t = Math.sign(f || p), n = Qi(e, l, u), r = 0;
		if (Math.sign(d - c) === -t) {
			let i = n, a = ko(e, l, u, -t);
			({year: l, month: u} = a), f = l - o, p = u - s, n = Qi(e, l, u), r = t < 0 ? -i : n;
		}
		if (m = d - Math.min(c, n) + r, f) {
			let [n, r] = Ji(e, o, s), [i, a] = Ji(e, l, u), c = e ? e.l : void 0;
			if (p = c !== void 0 && r && !a && (c < 0 ? t > 0 && i === -c : t < 0 && i === n) ? 0 : i - n || Number(a) - Number(r), Math.sign(p) === -t) {
				let i = t < 0 && -Zi(e, l);
				l -= t, f = l - o, p = u - Ao(e, n, r, e ? e.p(l) : void 0, 0) + (i || Zi(e, l));
			} else if (e) {
				let t = Ao(e, n, r, e.p(l), 0);
				p = e.ee(l, t, l, u);
			}
		}
	}
	return {
		...pa,
		years: f,
		months: p,
		days: m
	};
}
function Yo(e, t) {
	return Yn(e.year, t.year) || Yn(e.month, t.month) || Yn(e.day, t.day);
}
function Xo(e, t) {
	return Ei(t) - Ei(e);
}
function Zo(e, t, n) {
	return ns(e) ? ((e, t, n) => {
		let { calendar: r, timeZone: i } = e, a = So(e, t);
		return [
			Wo(i, r, e, a, n),
			a.epochNanoseconds,
			es(r, i, e)
		];
	})(e, t, n) : ((e, t, n) => {
		let { calendar: r } = e, i = ja(wa(e, li)), a = Co(r, i, t);
		return [
			Go(r, i, a, n),
			Si(a),
			ts(r, e)
		];
	})(e, t, n);
}
function Qo(e, t) {
	return ns(e) ? So(e, t).epochNanoseconds : Si(Co(e.calendar, wa(e, li), t));
}
function $o(e, t) {
	return bs(t) ? e.ke(t) : e.ne;
}
function es(e, t, n) {
	let r = go(n);
	return {
		ne: n.epochNanoseconds,
		ke: (n) => yo(t, wa(Eo(e, r, n), r))
	};
}
function ts(e, t) {
	return {
		ne: wi(t),
		ke: (n) => wi(Eo(e, t, n))
	};
}
function ns(e) {
	return "timeZone" in e;
}
function rs(e, t) {
	return e <= 6 - !!t;
}
function is(e, t, n) {
	let r = {};
	for (let i = t; i >= 0; i--) {
		let t = Dr[i];
		r[n[i]] = tr(e, t), e = nr(e, t);
	}
	return r;
}
var as = 2 ** 53;
function os(e, t, n) {
	let r = Math.max(xs(t), xs(n));
	return r > 6 && I("Cannot use large units"), ((e, t, n, r) => Ja(fs(((e, t, n, r) => {
		let i = hs(e) + hs(t) * BigInt(r ? -1 : 1);
		return Number.isFinite(Number(i / Nr)) || I("Out-of-bounds date"), {
			...pa,
			...vs(i, n)
		};
	})(t, n, r, e))))(e, t, n, r);
}
function ss(e, t, n) {
	let r = xs(t), [i, a, o, s, c] = Zt(n, r, e);
	if (!c && Math.max(r, i) <= 6) return Ja(fs(((e, t, n, r, i) => {
		let a = uo(hs(e), ho(n, r), i);
		return {
			...pa,
			...vs(a, t)
		};
	})(t, i, a, o, s)));
	c || I("Missing relativeTo");
	let l = ns(c);
	if (!t.sign && (!l || i < 6)) return t;
	let [u, d, f] = Zo(c, t, i);
	return Ja(Qa(u, d, i, a, o, s, f, l));
}
function cs(e) {
	return e.sign === -1 ? ls(e) : e;
}
function ls(e) {
	return Ja(us(e));
}
function us(e) {
	let t = {};
	for (let n of sa) t[n] = -1 * e[n] || 0;
	return t;
}
function ds(e, t = sa) {
	let n = 0;
	for (let r of t) {
		let t = Math.sign(e[r]);
		t && (n && n !== t && I("Cannot mix duration signs"), n = t);
	}
	return n;
}
function fs(e) {
	for (let t of fa) ps(t, e[t]);
	let t = hs(e);
	return ms(Number(t / Ar)), e;
}
function ps(e, t) {
	return On(e, t, -4294967295, 4294967295, 1);
}
function ms(e) {
	Number.isSafeInteger(e) || I("Out-of-bounds duration");
}
function hs(e) {
	return BigInt(e.days) * Nr + gs(e);
}
function gs(e) {
	return BigInt(e.hours) * Mr + BigInt(e.minutes) * jr + _s(e);
}
function _s(e) {
	return BigInt(e.seconds) * Ar + BigInt(e.milliseconds) * kr + BigInt(e.microseconds) * Or + BigInt(e.nanoseconds);
}
function vs(e, t = 6) {
	let n = Number(e / Nr), r = Number(e % Nr), i = Dr[t], a = t <= 3 ? Number(e / BigInt(i)) : Er / i * n + tr(r, i);
	Number.isFinite(a) || I("Out-of-bounds date"), t <= 3 && Math.abs(a) / (Cr / Dr[t]) >= as && I("Out-of-bounds date");
	let o = is(r, t, sa);
	return o[sa[t]] = a, o;
}
function ys(e, t = 5) {
	return is(e, t, sa);
}
function bs(e) {
	return !!ds(e, da);
}
function xs(e) {
	let t = 9;
	for (; t > 0 && !e[sa[t]]; t--);
	return t;
}
function Ss(e, t) {
	return Xn(e.epochNanoseconds, t.epochNanoseconds);
}
function Cs(e, t, n, r) {
	let i = e(pt(r).relativeTo), a = Math.max(xs(t), xs(n));
	return Ln(sa, t, n) ? 0 : rs(a, i && ns(i)) ? Xn(hs(t), hs(n)) : (i || I("Missing relativeTo"), Xn(Qo(i, t), Qo(i, n)));
}
function ws(e, t) {
	return Ts(e, t) || Es(e, t);
}
function Ts(e, t) {
	return Yn(Ei(e), Ei(t));
}
function Es(e, t) {
	return Yn(pi(e), pi(t));
}
function Ds(e, t) {
	return !Ss(e, t);
}
function Os(e, t) {
	return !Ss(e, t) && e.timeZone.m === t.timeZone.m && e.calendar === t.calendar;
}
function ks(e, t) {
	return !ws(e, t) && e.calendar === t.calendar;
}
function As(e, t) {
	return !Ts(e, t) && e.calendar === t.calendar;
}
function js(e, t) {
	return !Ts(e, t) && e.calendar === t.calendar;
}
function Ms(e, t) {
	return !Ts(e, t) && e.calendar === t.calendar;
}
function Ns(e, t) {
	return !Es(e, t);
}
function Ps(e) {
	return e === 0 ? fr : e ? e.k : void 0;
}
function Fs(e, t, n = t) {
	return Ps(e) ? n : t;
}
function Is(e, t) {
	let n = t || void 0, r = Ps(t), { era: i, eraYear: a, year: o } = e;
	if (o !== void 0 && (o = ht(o, "year")), a !== void 0 && (a = ht(a, "eraYear")), i !== void 0 || a !== void 0) {
		i !== void 0 && a !== void 0 || En("Mismatching era/eraYear"), r || I("Forbidden era/eraYear");
		let e = pr(i), t = r[e];
		t === void 0 && I(((e) => `Invalid era: ${e}`)(i));
		let s = n?._ ? n._(a, e, t) : zs(a, t);
		o !== void 0 && o !== s && I("Mismatching year/eraYear"), o = s;
	} else o === void 0 && En(_n(r));
	return o;
}
function Ls(e, t, n, r, i) {
	let { month: a, monthCode: o } = e;
	if (o !== void 0) {
		let e = ((e, t, n, r, i = gr(t)) => {
			let a = e ? e.p(n) : void 0, [o, s] = i, c = vr(o, s, a);
			if (s) {
				let t = e ? e.l : void 0;
				t === void 0 && I(vn), t > 0 ? (c > t && I(vn), a !== c && (r === 1 && I(vn), c = vr(o, 0, a))) : (c !== -t && I(vn), a === void 0 && r === 1 && I(vn));
			}
			return c;
		})(t, o, n, i, r);
		a !== void 0 && a !== e && I("Mismatching month/monthCode"), a = e, i = 1;
	} else a === void 0 && En("Missing month/monthCode");
	return On("month", a, 1, Zi(t, n), i);
}
function Rs(e, t, n, r, i) {
	return Dn(e, "day", 1, Qi(t, n, r), i);
}
function zs(e, t) {
	return (t + e) * (Math.sign(t) || 1) || 0;
}
function Bs(e, t) {
	return fi(In(Fr, {
		...li,
		...e
	}), t);
}
var Vs = /*@__PURE__*/ Un("([+-])(\\d{2})(?::?(\\d{2})(?::?(\\d{2})(?:[.,](\\d{1,9}))?)?)?");
function Hs(e) {
	let t = Us(e);
	return t === void 0 && I(Sn(e)), t;
}
function Us(e, t) {
	let n = Vs.exec(e);
	if (n && ((e) => ((e) => {
		e[0] !== "T" && e[0] !== "t" || (e = e.slice(1));
		let t = e.search(/[.,]/), n = t < 0 ? e : e.slice(0, t), r = n.split(":");
		return r.length === 1 ? /^(?:\d{2}|\d{4}|\d{6})$/i.test(n) : (r.length === 2 || r.length === 3) && r.every((e) => e.length === 2 && /^\d{2}$/i.test(e));
	})(e.slice(1)))(n[0])) return ((e, t) => {
		let n = e[4] || e[5];
		return t && n && I(Cn(n)), r = (Kn(e[2]) * Tr + Kn(e[3]) * wr + Kn(e[4]) * Cr + Wn(e[5] || "")) * Gn(e[1]), Math.abs(r) >= 864e11 && I("Out-of-bounds offset"), r;
		var r;
	})(n, t);
}
var Ws = {
	era: ba,
	month: gt,
	monthCode(e, t) {
		return _a(xa(e), t);
	},
	day: gt
}, Gs = /*@__PURE__*/ Pn(Fr, ht), Ks = /*@__PURE__*/ Pn(sa, Ca), qs = /*@__PURE__*/ Object.assign({}, Ws, Gs), Js = {
	offset(e) {
		return Hs(_a(xa(e)));
	},
	...qs
};
function Ys(e, t, n, r, i = !r) {
	let a = {}, o = 0;
	for (let i of t) {
		let t = e[i];
		if (t !== void 0) {
			o = 1;
			let e = n[i];
			e && (t = e(t, i)), a[i] = t;
		} else r && r.includes(i) && En(fn(i));
	}
	return i && !o && En(pn(t)), a;
}
function Xs(e, t, n) {
	let r = Ps(t);
	e.year !== void 0 || e.era !== void 0 && e.eraYear !== void 0 || En(_n(r)), e.monthCode === void 0 && e.month === void 0 && En("Missing month/monthCode"), n || e.day !== void 0 || En(fn("day"));
	let i = ic(e);
	return [Is(e, t), i];
}
function Zs(e, t) {
	let n = t === void 0, r = Ps(t);
	e.day === void 0 && En(fn("day")), n || e.month === void 0 || e.year !== void 0 || e.era !== void 0 && e.eraYear !== void 0 || En(_n(r));
	let i = ic(e);
	return [e.eraYear !== void 0 || e.year !== void 0 ? Is(e, t) : void 0, i];
}
function Qs(e, t = li, n) {
	let r = wa(e, t);
	return ja(r), Ga(r, n);
}
function $s(e, t, n, r, i) {
	let a = Ls(e, t, n, r, i);
	return Ka(Aa(Xi(t, n, a, Rs(e, t, n, a, i))), t);
}
function ec(e, t, n, r, i) {
	return nc(t, n, Ls(e, t, n, r, i));
}
function tc(e, t, n, r, i) {
	let a = t === void 0, o = n, s, c, l;
	if (o === void 0 && a && (o = 1972), o !== void 0) {
		a || Aa(Xi(t, o, 1, 1));
		let n = Ls(e, t, o, r, i);
		s = Rs(e, t, o, n, i), [c, l] = Ji(t, o, n);
	} else {
		e.monthCode === void 0 && En("Missing month/monthCode"), [c, l] = r;
		let n = t ? t.re : 1972;
		if (n !== void 0) s = Rs(e, t, n, Ls(e, t, n, r, i), i);
		else {
			let n = i === 0 && t ? t.ge?.(c, l, e.day) : void 0;
			s = n === void 0 ? e.day : n;
		}
	}
	return rc(t, c, l, s, e.day, i);
}
function nc(e, t, n) {
	return Ka(ka(Xi(e, t, n, 1)), e);
}
function rc(e, t, n, r, i, a) {
	let o = n;
	o && ((e && e.V?.[t]) ?? 1 / 0) < i && (a === 1 && I(vn), o = 0, r = wn(i, 1, (e && e.U) ?? 1 / 0));
	let s = e ? e.u(t, !!o, r) : ji(t, !!o);
	for (; !s && a === 0 && r > 1;) r--, s = e ? e.u(t, !!o, r) : ji(t, !!o);
	s || I("Cannot guess year");
	let { year: c, month: l } = s;
	return Ka(Aa(Xi(e, c, l, r)), e);
}
function ic(e) {
	if (e.monthCode !== void 0) return gr(e.monthCode);
}
var ac = Intl.DateTimeFormat;
function oc(e, t) {
	t < -864e13 && I("Out-of-bounds date");
	let n = e.formatToParts(t), r = {};
	for (let e of n) r[e.type] = e.value;
	return r;
}
var sc = {
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
}, cc = -388152e4;
function lc(e, t, n) {
	let [r, i, a, o] = cn(n), s = r !== void 0;
	return ((e, t, n, r, i, a) => {
		n = fo(n, BigInt(i), r);
		let o = t.B(n);
		return xc(Oi(n + BigInt(o)), a) + (e ? Ec(lo(o)) : "Z");
	})(s, Bc(s ? e(r) : "UTC"), t.epochNanoseconds, i, a, o);
}
function uc(e, t) {
	let n = sn(t);
	return ((e, t, n, r, i, a, o, s, c, l) => {
		r = fo(r, BigInt(c), s);
		let u = n.B(r);
		return xc(Oi(r + BigInt(u)), l) + Ec(lo(u), o) + Dc(t, a) + Oc(e, i);
	})(e.calendar, e.timeZone.id, e.timeZone, e.epochNanoseconds, ...n);
}
function dc(e, t) {
	let n = rn(t);
	return ((e, t, n, r, i, a) => xc(no(t, i, r), a) + Oc(e, n))(e.calendar, e, ...n);
}
function fc(e, t) {
	return n = e.calendar, r = e, i = an(t), Sc(r) + Oc(n, i);
	var n, r, i;
}
function pc(e, t) {
	return hc(e.calendar, Cc, e, an(t));
}
function mc(e, t) {
	return hc(e.calendar, wc, e, an(t));
}
function hc(e, t, n, r) {
	return r === 1 ? e === void 0 ? t(n) : Sc(n) : r > 1 || r === 0 && e !== void 0 ? Sc(n) + kc(mr(e), r === 2) : t(n);
}
function gc(e, t) {
	return ((e, t, n, r) => Tc(ro(e, n, t)[0], r))(e, ...on(t));
}
function _c(e, t) {
	let [n, r, i] = on(t, 3);
	return r > 1 && fs(e = {
		...e,
		...$a(e, r, n)
	}), vc(e, i);
}
function vc(e, t) {
	let { sign: n } = e, r = n === -1 ? us(e) : e, { hours: i, minutes: a } = r, o = _s(r), s = Number(o / Ar), c = Number(o % Ar);
	ms(s);
	let l = jc(c, t), u = t >= 0 || !n || l;
	return (n < 0 ? "-" : "") + "P" + yc({
		Y: bc(r.years),
		M: bc(r.months),
		W: bc(r.weeks),
		D: bc(r.days)
	}) + (i || a || s || u ? "T" + yc({
		H: bc(i),
		M: bc(a),
		S: bc(s, u) + l
	}) : "");
}
function yc(e) {
	let t = [];
	for (let n in e) {
		let r = e[n];
		r && t.push(r, n);
	}
	return t.join("");
}
function bc(e, t) {
	if (!e && !t) return "";
	let n = Object.create(null);
	return n.useGrouping = 0, e.toLocaleString("fullwide", n);
}
function xc(e, t) {
	return Sc(e) + "T" + Tc(e, t);
}
function Sc(e) {
	return Cc(e) + "-" + Jn(e.day);
}
function Cc(e) {
	let { year: t } = e;
	return (t < 0 || t > 9999 ? Mc(t) + qn(6, Math.abs(t)) : qn(4, t)) + "-" + Jn(e.month);
}
function wc(e) {
	return Jn(e.month) + "-" + Jn(e.day);
}
function Tc(e, t) {
	let n = [Jn(e.hour), Jn(e.minute)];
	return t !== -1 && n.push(Jn(e.second) + ((e, t, n, r) => jc(e * Sr + t * xr + n, r))(e.millisecond, e.microsecond, e.nanosecond, t)), n.join(":");
}
function Ec(e, t = 0) {
	if (t === 1) return "";
	let [n, r] = $n(Math.abs(e), Tr), [i, a] = $n(r, wr), [o, s] = $n(a, Cr);
	return Mc(e) + Jn(n) + ":" + Jn(i) + (o || s ? ":" + Jn(o) + jc(s) : "");
}
function Dc(e, t) {
	return t === 1 ? "" : "[" + (t === 2 ? "!" : "") + e + "]";
}
function Oc(e, t) {
	return t > 1 || t === 0 && e !== void 0 ? kc(mr(e), t === 2) : "";
}
function kc(e, t) {
	return "[" + (t ? "!" : "") + "u-ca=" + e + "]";
}
var Ac = /0+$/;
function jc(e, t) {
	let n = qn(9, e);
	return n = t === void 0 ? n.replace(Ac, "") : n.slice(0, t), n ? "." + n : "";
}
function Mc(e) {
	return e < 0 ? "-" : "+";
}
var Nc = /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/, Pc = /[^\w\/:+-]+/;
function Fc(e) {
	return Ic(_a(e));
}
function Ic(e) {
	return Lc(e).id;
}
function Lc(e) {
	let t = e.toUpperCase(), n = ((e) => {
		let t = Us(e, 1);
		if (t !== void 0) return {
			id: Ec(t),
			Z: t,
			m: t
		};
	})(t);
	return n ? {
		kind: "fixed",
		...n
	} : Rc(t === "UTC" ? "UTC" : ((e) => (Pc.test(e) && I(xn(e)), Nc.test(e) && I("Forbidden ICU TimeZone"), e.toLowerCase().split("/").map((e, t) => (e.length <= 3 || /\d/.test(e)) && !/etc|yap/.test(e) ? e.toUpperCase() : e.replace(/baja|dumont|[a-z]+/g, (e, n) => e.length <= 2 && !t || e === "in" || e === "chat" ? e.toUpperCase() : e.length > 2 || !n ? Vn(e).replace(/island|noronha|murdo|rivadavia|urville/, Vn) : e)).join("/")))(e));
}
var Rc = /*@__PURE__*/ kn((e) => {
	if (e === "UTC") return {
		kind: "utc",
		id: e,
		m: e
	};
	let t = zc(e.toUpperCase());
	return {
		kind: "named",
		id: e,
		format: t,
		m: t.resolvedOptions().timeZone
	};
}), zc = /*@__PURE__*/ kn((e) => new ac("en-u-hc-h23", {
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
function Bc(e) {
	let t = Lc(e);
	return Vc(t.id, t);
}
var Vc = /*@__PURE__*/ kn((e, t) => t.kind === "named" ? new Uc(e, t.m, t.format) : new Hc(e, t.m, t.kind === "fixed" ? t.Z : 0)), Hc = class {
	constructor(e, t, n) {
		this.id = e, this.m = t, this.Z = n;
	}
	B() {
		return this.Z;
	}
	R(e) {
		return [Pa(e, this.Z)];
	}
	C() {}
}, Uc = class {
	constructor(e, t, n) {
		this.id = e, this.m = t, this.oe = ((e, t) => {
			let n = kn(e), r = kn(Gc), i = 86400 * t;
			function a(e) {
				let [t, a] = Kc(e, i), s = qc(t), c = qc(a), l = n(s), u = n(c);
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
						if (t <= cc) return;
						let n = Wc() + 94867200;
						if (t > n) return e(n, -1);
					}
					let [s, c] = Kc(a > 0 ? Math.max(t, cc) : t, i), l = i * a, u = a > 0 ? Math.max(t, Wc()) + 94867200 : cc, d = () => a < 0 ? c > u : s < u;
					for (; d();) {
						let e = qc(s), i = qc(c), u = n(e), d = n(i);
						if (u !== d) {
							let n = r(e, i);
							o(n, u, d);
							let s = n[0];
							if ((Yn(s, t) || 1) === a) return s;
						}
						s += l, c += l;
					}
				}
			};
		})(((e) => (t) => {
			let n = oc(e, 1e3 * t);
			return 86400 * Di(((e) => {
				let t = e.relatedYear;
				if (t !== void 0) return parseInt(t);
				let n = parseInt(e.year);
				return e.era !== void 0 && pr(e.era) === "bce" ? 1 - n : n;
			})(n), parseInt(n.month), parseInt(n.day)) + 3600 * parseInt(n.hour) + 60 * parseInt(n.minute) + parseInt(n.second) - t;
		})(n), ((e) => sc[e.split("/").pop()] || 60)(e));
	}
	B(e) {
		return this.oe.ze(((e) => bi(e)[0])(e)) * Cr;
	}
	R(e) {
		let t = 86400 * Ei(e) + hi(e), n = gi(e);
		return this.oe.Ae(t).map((e) => Na(BigInt(e) * Ar + BigInt(n)));
	}
	C(e, t) {
		let [n, r] = bi(e), i = this.oe.C(n + (t > 0 || r ? 1 : 0), t);
		if (i !== void 0) return BigInt(i) * Ar;
	}
};
function Wc() {
	return Math.floor(Date.now() / 1e3);
}
function Gc(e, t) {
	return [e, t];
}
function Kc(e, t) {
	let n = Math.floor(e / t) * t;
	return [n, n + t];
}
function qc(e) {
	return wn(e, -1e10, 864e10);
}
function Jc(e, t, n) {
	let r = Ys(n, Fs(t, ai, oi), Js, [], 0), i = r.timeZone !== void 0, [a, o] = Xs(r, t), s = $s(r, t, a, o, 0);
	if (i) {
		let n = Bs(r), i = Bc(e(r.timeZone));
		return {
			epochNanoseconds: vo(i, wa(s, n), r.offset),
			timeZone: i,
			calendar: t
		};
	}
	return s;
}
function Yc(e, t, n, r) {
	let i = Ys(n, Fs(t, ai, oi), Js, Vr, 0), a = e(i.timeZone), [o, s] = Xs(i, t), [c, l, u] = en(r), d = $s(i, t, o, s, c), f = Bs(i, c), p = Bc(a);
	return Wa(vo(p, wa(d, f), i.offset, l, u), p, t);
}
function Xc(e, t, n) {
	let r = Ys(t, Fs(e, ti, ni), qs, [], 0), [i, a] = Xs(r, e), o = F(n);
	return Qs($s(r, e, i, a, o), Bs(r, o), e);
}
function Zc(e, t, n, r = []) {
	let i = Ys(t, Fs(e, $r, ei), Ws, r), [a, o] = Xs(i, e);
	return $s(i, e, a, o, F(n));
}
function Qc(e, t, n, r) {
	let i = Ys(t, Fs(e, Jr, Yr), Ws, r), [a, o] = Xs(i, e, 1);
	return ec(i, e, a, o, F(n));
}
function $c(e, t, n, r) {
	let i = Ys(n, Fs(e, $r, ei), Ws, Rr, 0);
	t && i.month !== void 0 && i.monthCode === void 0 && i.year === void 0 && (i.year = 1972);
	let [a, o] = Zs(i, e);
	return tc(i, e, a, o, F(r));
}
function el(e, t) {
	return Bs(Ys(e, Kr, Gs, [], 1), F(t));
}
function tl(e) {
	let t = Ys(e, la, Ks);
	return Ja(fs({
		...pa,
		...t
	}));
}
function nl(e) {
	I(Sn(e));
}
function rl(e) {
	let t = Al(e = _a(xa(e))), n;
	return t || nl(e), t.F ? n = 0 : t.offset ? n = Hs(t.offset) : nl(e), t.timeZoneId && Us(t.timeZoneId, 1), Ui(t), Ua(Pa(t, n));
}
function il(e, t) {
	let n = Al(_a(e));
	return n || nl(e), n.timeZoneId ? yl(n, t, void 0) : (n.F && nl(e), xl(n, t));
}
function al(e, t, n) {
	let r = Al(_a(e));
	return r && r.timeZoneId || nl(e), yl(r, t, n);
}
function ol(e, t) {
	let n = Al(_a(e));
	return n && !n.F || nl(e), bl(n, t);
}
function sl(e, t) {
	let n = gl(hl(_a(e)), void 0, t);
	return Ka(n, n.calendar);
}
function cl(e, t) {
	let n = jl(_a(e));
	if (n) return ll(n), Ka(ka(Wi(n)), t(n.calendarId));
	let r = gl(hl(e), _l, t), { calendar: i } = r;
	return Ka(Do(i, r), i);
}
function ll(e) {
	e.calendarId !== "iso8601" && I(Cn(e.calendarId));
}
function ul(e, t) {
	let n = Ml(_a(e));
	if (n) return ll(n), Ka(Wi(n), t(n.calendarId));
	let r = gl(hl(e), vl, t), { calendar: i } = r, { year: a, month: o, day: s } = qi(i, r), [c, l] = Ji(i, a, o), { year: u, month: d } = ((e, t, n, r) => {
		let i = e ? e.u(t, n, r) : ji(t, n);
		return i || I("Cannot guess year"), i;
	})(i, c, l, s);
	return Ka(Aa(Xi(i, u, d, s)), i);
}
function dl(e) {
	let t = ((e) => {
		let t = Nl(e);
		return t ? (Il(t[13]), Pl(t, 1)) : void 0;
	})(e = _a(e));
	if (!t) {
		let n = Al(e);
		n && n.te || nl(e), n.F && I(Cn("Z")), ll(n), t = n;
	}
	let n;
	return (n = jl(e)) && Gi(n) && nl(e), (n = Ml(e)) && Gi(n) && nl(e), qa(ui(t));
}
function fl(e) {
	let t = kl.exec(_a(e));
	return t || nl(e), Ja(fs(((e) => {
		let t = 0, n = 0, r = 0, i = {
			years: a(e[2]),
			months: a(e[3]),
			weeks: a(e[4]),
			days: a(e[5]),
			hours: a(e[6], e[7], 5),
			minutes: a(e[8], e[9], 4),
			seconds: a(e[10], e[11], 3),
			...is(r, 2, sa)
		};
		return t || I(pn(sa)), Gn(e[1]) < 0 && (i = us(i)), i;
		function a(e, i, a) {
			let o = 0, s = 0;
			return a && ([o, r] = $n(r, Dr[a])), e !== void 0 && (n && I(Cn(e)), s = ((e) => {
				let t = parseInt(e);
				return Number.isFinite(t) || I(Cn(e)), t;
			})(e), t = 1, i && (r = Wn(i) * (Dr[a] / Cr), n = 1)), o + s;
		}
	})(t)));
}
function pl(e) {
	let t = Al(e) || jl(e) || Ml(e);
	if (t) return t.calendarId;
	let n = Nl(e);
	return n ? Il(n[13]).calendarId : e;
}
function ml(e) {
	let t = Al(e);
	return t && (t.timeZoneId || t.F && "UTC" || t.offset) || e;
}
function hl(e) {
	let t = Al(e);
	return t && !t.F || nl(e), t;
}
function gl(e, t, n) {
	return t && e.calendarId === "iso8601" ? (Wi(e), e.te && ui(e), xl(t(e), n)) : e.te ? bl(e, n) : xl(e, n);
}
function _l(e) {
	let t = 12 * e.year + e.month === Oa ? 20 : 1;
	return {
		...e,
		day: t
	};
}
function vl(e) {
	return {
		...e,
		year: 1972
	};
}
function yl(e, t, n) {
	let r = Bc(Ic(e.timeZoneId)), i;
	if (Ui(e), e.te) {
		let t = e.offset ? Hs(e.offset) : void 0, [, o, s] = en(n);
		i = vo(r, e, t, o, s, !(r.Z || e.offset === void 0 || (a = e.offset, a.replace(/\D/g, "").length > 4)), e.F);
	} else en(n), i = bo(r, e);
	var a;
	return Na(i), Wa(i, r, t(e.calendarId));
}
function bl(e, t) {
	return Ui(e), ja(e), {
		...wa(e, e),
		calendar: t(e.calendarId)
	};
}
function xl(e, t) {
	return Wi(e), Aa(e), {
		calendar: t(e.calendarId),
		year: e.year,
		month: e.month,
		day: e.day
	};
}
function Sl(e) {
	return `(\\d{2})(?:(:?)(\\d{2})(?:\\${e}(\\d{2})(?:[.,](\\d{1,9}))?)?)?`;
}
var Cl = "(?:(?:([+-])(\\d{6}))|(\\d{4}))(-?)(\\d{2})\\4(\\d{2})(?:[T ]" + Sl(8) + "(Z|([+-])" + Sl(15) + ")?)?", wl = /*@__PURE__*/ Un("(?:(?:([+-])(\\d{6}))|(\\d{4}))-?(\\d{2})((?:\\[(!?)([^\\]]*)\\]){0,9})"), Tl = /*@__PURE__*/ Un("(?:--)?(\\d{2})-?(\\d{2})((?:\\[(!?)([^\\]]*)\\]){0,9})"), El = /*@__PURE__*/ Un(Cl + "((?:\\[(!?)([^\\]]*)\\]){0,9})"), Dl = /*@__PURE__*/ Un("T?" + Sl(2) + `(([+-])${Sl(9)})?((?:\\[(!?)([^\\]]*)\\]){0,9})`), Ol = /*@__PURE__*/ RegExp("\\[(!?)([^\\]]*)\\]", "g"), kl = /*@__PURE__*/ Un("([+-])?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?!$)(?:(\\d+)(?:[.,](\\d{1,9}))?H)?(?:(\\d+)(?:[.,](\\d{1,9}))?M)?(?:(\\d+)(?:[.,](\\d{1,9}))?S)?)?");
function Al(e) {
	let t = El.exec(e);
	return t ? ((e) => {
		let t = e[12], n = (t || "").toUpperCase() === "Z";
		return {
			year: Fl(e),
			month: parseInt(e[5]),
			day: parseInt(e[6]),
			...Pl(e, 7),
			...Il(e[19]),
			te: !!e[7],
			F: n,
			offset: n ? void 0 : t
		};
	})(t) : void 0;
}
function jl(e) {
	let t = wl.exec(e);
	if (t) return ((e) => ({
		year: Fl(e),
		month: parseInt(e[4]),
		day: 1,
		...Il(e[5])
	}))(t);
}
function Ml(e) {
	let t = Tl.exec(e);
	return t ? ((e) => ({
		year: 1972,
		month: parseInt(e[1]),
		day: parseInt(e[2]),
		...Il(e[3])
	}))(t) : void 0;
}
function Nl(e) {
	let t = Dl.exec(e);
	if (t) return t[6] && Hs(t[6]), t;
}
function Pl(e, t) {
	let n = Kn(e[t + 3]);
	return {
		..._i(Wn(e[t + 4] || ""))[0],
		hour: Kn(e[t]),
		minute: Kn(e[t + 2]),
		second: n === 60 ? 59 : n
	};
}
function Fl(e) {
	let t = Gn(e[1]), n = parseInt(e[2] || e[3]);
	return t < 0 && !n && I(Cn(-0)), t * n;
}
function Il(e) {
	let t, n, r = [];
	return e.replace(Ol, (e, i, a) => {
		let o = !!i, [s, c] = a.split("=").reverse();
		return c ? c === "u-ca" ? (r.push(s.toLowerCase()), t ||= o) : (o || /[A-Z]/.test(c)) && I(Cn(e)) : (n && I(Cn(e)), n = s), "";
	}), r.length > 1 && t && I(Cn(e)), {
		timeZoneId: n,
		calendarId: r[0] || "iso8601"
	};
}
function Ll(e, t, n) {
	let r = Object.assign(Object.create(null), t);
	return Rl(r, n, Wr), Ps(e) && (Rl(r, n, Ur), e && e.je && Rl(r, n, Gr, Hr)), r;
}
function Rl(e, t, n, r) {
	let i = 0, a = [];
	for (let e of n) t[e] === void 0 ? a.push(e) : i = 1;
	if (Object.assign(e, t), i) for (let t of r || a) delete e[t];
}
function zl(e, t, n) {
	let r = Fs(e, ri, ii), i = go(t), { year: a, month: o, day: s } = qi(e, i), c = {
		year: a,
		monthCode: Jl(e, a, o),
		day: s,
		hour: i.hour,
		minute: i.minute,
		second: i.second,
		millisecond: i.millisecond,
		microsecond: i.microsecond,
		nanosecond: i.nanosecond,
		offset: i.offsetNanoseconds
	}, l = Ys(n, r, Js), u = Ll(e, c, l);
	return [{
		...c,
		...l
	}, u];
}
function Bl(e, t, n) {
	let r = Fs(e, ti, ni), { year: i, month: a, day: o } = qi(e, t), s = {
		year: i,
		monthCode: Jl(e, i, a),
		day: o,
		hour: t.hour,
		minute: t.minute,
		second: t.second,
		millisecond: t.millisecond,
		microsecond: t.microsecond,
		nanosecond: t.nanosecond
	}, c = Ys(n, r, qs), l = Ll(e, s, c);
	return [{
		...s,
		...c
	}, l];
}
function Vl(e, t, n) {
	let r = Fs(e, $r, ei), { year: i, month: a, day: o } = qi(e, t);
	return Ll(e, {
		year: i,
		monthCode: Jl(e, i, a),
		day: o
	}, Ys(n, r, Ws));
}
function Hl(e, t, n) {
	let r = Fs(e, Jr, Yr), { year: i, month: a } = qi(e, t);
	return Ll(e, {
		year: i,
		monthCode: Jl(e, i, a)
	}, Ys(n, r, Ws));
}
function Ul(e, t, n) {
	let r = Fs(e, $r, ei), { year: i, month: a, day: o } = qi(e, t);
	return Ll(e, {
		monthCode: Jl(e, i, a),
		day: o
	}, Ys(n, r, Ws));
}
function Wl(e, t, n, r, i, a, o, s) {
	let { calendar: c, timeZone: l } = e;
	return Wa(vo(l, wa($s(n, c, r, i, a), fi(t, a)), t.offset, o, s), l, c);
}
function Gl(e, t, n, r, i, a) {
	return Qs($s(t, n, r, i, a), fi(e, a), n);
}
function Kl(e, t) {
	return {
		...In(Kr, e),
		...Ys(t, Kr, Gs)
	};
}
function ql(e, t) {
	return Ja((n = e, r = t, fs({
		...n,
		...Ys(r, la, Ks)
	})));
	var n, r;
}
function Jl(e, t, n) {
	let [r, i] = Ji(e, t, n);
	return _r(r, i);
}
function Yl(e, t, n) {
	let [r, i] = $t(n, e), a = xs(t), o = Math.max(r, a), s = i && ns(i);
	if (!i && rs(o, s)) return Xl(t, r);
	if (i || I("Missing relativeTo"), !t.sign && (!s || r < 6)) return 0;
	let [c, l, u] = Zo(i, t, r);
	return rs(r, s) ? Xl(c, r) : ((e, t, n, r) => {
		let i = sa[n], a = ha(n, e);
		return La(e[i], ds(e) || 1, t, (e) => (a[i] = e, $o(r, a)));
	})(c, l, r, u);
}
function Xl(e, t) {
	return Pr(hs(e), Dr[t]);
}
function Zl(e, t, n) {
	return Wa(e.epochNanoseconds, t, n);
}
function Ql(e) {
	return Ua(e.epochNanoseconds);
}
function $l(e) {
	return Ga(go(e), e.calendar);
}
function eu(e) {
	return Ka(go(e), e.calendar);
}
function tu(e) {
	return qa(go(e));
}
function nu(e, t, n) {
	return Wa(Na(yo(t, e, n)), t, e.calendar);
}
function ru(e, t, n) {
	let r;
	return r = n ? yo(t, wa(e, n)) : bo(t, wa(e, li)), Wa(r, t, e.calendar);
}
function iu(e, t, n) {
	return cu(e, In(Fs(e, Xr, Zr), t), Ys(bt(n), Rr, Ws, []));
}
function au(e, t, n) {
	let r = Fs(e, Lr, qr);
	return cu(e, In(Qr, t), Ys(bt(n), r, Ws, []));
}
function ou(e, t) {
	let n = Ys(t, Qr, Ws), [r, i] = Zs(n, e);
	return tc(n, e, r, i, 0);
}
function su(e, t) {
	let n = Ys(t, Fs(e, Xr, Zr), Ws), [r, i] = Xs(n, e, 1);
	return ec(n, e, r, i, 0);
}
function cu(e, t, n) {
	let r = Fs(e, si, ci), i = Ll(e, t, n);
	i = Ys(i, r, Ws, []);
	let [a, o] = Xs(i, e);
	return $s(i, e, a, o, 0);
}
function lu(e) {
	return Ua(Na(BigInt(Ca(e)) * kr));
}
function uu(e) {
	return Ua(Na(Sa(e)));
}
function du(e) {
	return e.timeZone = "UTC", ["full", "long"].includes(e.timeStyle) && (e.timeStyle = "medium"), e;
}
function fu(e, t) {
	return e.timeZone !== void 0 && En("Cannot specify TimeZone"), e.timeZone = t, e;
}
function pu(e, t, n) {
	let r = e.resolvedOptions().calendar;
	!n && t.calendar === void 0 || mr(t.calendar) === r || I("Mismatching Calendars");
}
function mu(e, t, n, r, i) {
	let a = new Set(e), o = new Set(t), s = new Set(n);
	return (e, t) => {
		let n, c, l = {}, u = {}, d = {}, f = 0, p = 0;
		for (let t of Object.keys(e)) {
			let r = e[t];
			r === void 0 || s.has(t) || (a.has(t) ? t === "dateStyle" ? n = r : t === "timeStyle" ? c = r : l[t] = r : t === "era" ? u[t] = r : o.has(t) ? t === "dateStyle" || t === "timeStyle" ? p = 1 : f = 1 : d[t] = r);
		}
		let m = n !== void 0, h = c !== void 0, g = m || h, _ = Object.keys(l).length > 0, v = f || p, y = _ || m || h, b = Object.keys(u).length > 0;
		(!t && v || t && v && !y || g && (_ || b || f)) && En("Invalid formatting options");
		let x = {};
		return g || y || Object.assign(x, r), Object.assign(x, l, u, d), m && (i ? Object.assign(x, i[n]) : x.dateStyle = n), h && (x.timeStyle = c), x;
	};
}
var hu = {
	year: "numeric",
	month: "numeric",
	day: "numeric"
}, gu = {
	hour: "numeric",
	minute: "numeric",
	second: "numeric"
}, _u = /*@__PURE__*/ Object.assign({}, hu, gu), vu = [
	"weekday",
	"year",
	"month",
	"day",
	"dateStyle"
], yu = [
	"dayPeriod",
	"hour",
	"minute",
	"second",
	"fractionalSecondDigits",
	"timeStyle"
], bu = /*@__PURE__*/ vu.concat(yu), xu = /*@__PURE__*/ ["weekday", "day"].concat(yu), Su = /*@__PURE__*/ ["weekday", "year"].concat(yu), Cu = /*@__PURE__*/ mu(bu, [], [], _u), wu = /*@__PURE__*/ mu(bu, [], [], {
	..._u,
	timeZoneName: "short"
}), Tu = /*@__PURE__*/ mu(bu, [], ["timeZoneName"], _u), Eu = /*@__PURE__*/ mu(vu, yu, ["timeZoneName"], hu), Du = /*@__PURE__*/ mu(yu, vu, ["timeZoneName", "era"], gu), Ou = /*@__PURE__*/ mu([
	"year",
	"month",
	"dateStyle"
], xu, ["timeZoneName"], {
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
}), ku = /*@__PURE__*/ mu([
	"month",
	"day",
	"dateStyle"
], Su, ["timeZoneName", "era"], {
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
function Au(e, t) {
	let { timeZone: n } = e, r = go(e), { offsetNanoseconds: i } = r, a = t || li, o;
	return o = t ? vo(n, wa(r, a), i, 2) : bo(n, wa(r, a)), Wa(o, n, e.calendar);
}
function ju(e) {
	let t = Mu(), n = e.B(t);
	return Oi(t + BigInt(n));
}
function Mu() {
	return BigInt(Date.now()) * kr;
}
function Nu() {
	return new ac().resolvedOptions().timeZone;
}
//#endregion
//#region ../../node_modules/.pnpm/temporal-polyfill@1.0.5/node_modules/temporal-polyfill/chunks/apiHelpers.js
var Pu = "PlainYearMonth", Fu = "PlainMonthDay", Iu = "PlainDate", Lu = "PlainDateTime", Ru = "PlainTime", zu = "ZonedDateTime", Bu = "Instant", Vu = "Duration";
function Hu(e, t, n, ...r) {
	return Object.defineProperties(t, An(e)), Object.defineProperties(t.prototype, Mn("Temporal." + e)), Object.defineProperties(t.prototype, Nn((e) => ({
		get() {
			return e(n(this));
		},
		configurable: 1
	}), Object.assign({}, ...r))), t;
}
var Uu = Bn.name === "noop" ? (e) => {
	Object.defineProperty(e, "_str_", { value: e.toJSON() });
} : Bn;
function Wu() {
	En(gn);
}
function Gu() {
	En(hn);
}
var Ku = {
	era(e) {
		return Yi(e.calendar, e).era;
	},
	eraYear(e) {
		return Yi(e.calendar, e).eraYear;
	},
	year(e) {
		return qi(e.calendar, e).year;
	},
	month(e) {
		return qi(e.calendar, e).month;
	},
	monthCode(e) {
		return $i(e.calendar, e);
	}
}, qu = {
	era(e) {
		return Yi(e.calendar, e).era;
	},
	eraYear(e) {
		return Yi(e.calendar, e).eraYear;
	},
	year(e) {
		return qi(e.calendar, e).year;
	},
	month(e) {
		return qi(e.calendar, e).month;
	},
	monthCode(e) {
		return $i(e.calendar, e);
	},
	day(e) {
		return qi(e.calendar, e).day;
	}
}, Ju = {
	monthCode(e) {
		return $i(e.calendar, e);
	},
	day(e) {
		return qi(e.calendar, e).day;
	}
}, Yu = {
	daysInMonth(e) {
		return na(e.calendar, e);
	},
	daysInYear(e) {
		return ra(e.calendar, e);
	},
	monthsInYear(e) {
		return ta(e.calendar, e);
	},
	inLeapYear(e) {
		return ea(e.calendar, e);
	}
}, Xu = {
	dayOfWeek(e) {
		return Ri(e);
	},
	dayOfYear(e) {
		return ia(e.calendar, e);
	},
	weekOfYear(e) {
		return aa(e.calendar, e);
	},
	yearOfWeek(e) {
		return oa(e.calendar, e);
	},
	daysInWeek() {
		return 7;
	},
	daysInMonth(e) {
		return na(e.calendar, e);
	},
	daysInYear(e) {
		return ra(e.calendar, e);
	},
	monthsInYear(e) {
		return ta(e.calendar, e);
	},
	inLeapYear(e) {
		return ea(e.calendar, e);
	}
};
function Zu(e, t, n, r) {
	let [i, a, o, s] = Xt(e, r, 3, 5);
	return rd(e, Uo(t.epochNanoseconds, n.epochNanoseconds, i, a, o, s));
}
function Qu(e, t, n, r) {
	let i = Po(t.calendar, n.calendar), [a, o, s, c] = Xt(e, r, 5);
	return rd(e, Lo(i, t, n, a, o, s, c));
}
function $u(e, t, n, r) {
	let i = Po(t.calendar, n.calendar), [a, o, s, c] = Xt(e, r, 6);
	return rd(e, Ro(i, t, n, a, o, s, c));
}
function ed(e, t, n, r) {
	let i = Po(t.calendar, n.calendar), [a, o, s, c] = Xt(e, r, 6, 9, 6);
	return rd(e, Bo(i, t, n, a, o, s, c));
}
function td(e, t, n, r) {
	let i = Po(t.calendar, n.calendar), [a, o, s, c] = Xt(e, r, 9, 9, 8);
	return rd(e, zo(i, t, n, a, o, s, c));
}
function nd(e, t, n, r) {
	let [i, a, o, s] = Xt(e, r, 5, 5);
	return rd(e, Vo(t, n, i, a, o, s));
}
function rd(e, t) {
	return Ja(e ? us(t) : t);
}
function id(e, t, n) {
	let { calendar: r } = e, i = Vl(r, e, t), [a, o] = Xs(i, r);
	return $s(i, r, a, o, F(n));
}
function ad(e, t, n) {
	let { calendar: r } = e, [i, a] = Bl(r, e, t), [o, s] = Xs(a, r);
	return Gl(i, a, r, o, s, F(n));
}
function od(e, t, n) {
	let { calendar: r } = e, i = Hl(r, e, t), [a, o] = Xs(i, r, 1);
	return ec(i, r, a, o, F(n));
}
function sd(e, t, n) {
	let { calendar: r } = e, i = Ul(r, e, t), [a, o] = Zs(i, r);
	return tc(i, r, a, o, F(n));
}
function cd(e, t, n) {
	return Bs(Kl(e, t), F(n));
}
function ld(e, t, n) {
	let { calendar: r } = e, [i, a] = zl(r, e, t), [o, s] = Xs(a, r), [c, l, u] = en(n, 2);
	return Wl(e, i, a, o, s, c, l, u);
}
//#endregion
//#region ../../node_modules/.pnpm/temporal-polyfill@1.0.5/node_modules/temporal-polyfill/chunks/classApi-basic.js
function ud(e) {
	let t = _a(e).toLowerCase();
	return t === "iso8601" ? void 0 : t === "gregory" ? 0 : void I(bn(e, "temporal-polyfill/full"));
}
function dd(e = dr) {
	return ud(e);
}
var fd = /*@__PURE__*/ new WeakMap(), pd = /*@__PURE__*/ Hu(zu, class {
	constructor(e, t, n = void 0) {
		let r = Na(Sa(e)), i = Bc(Fc(t)), a = dd(n);
		yd(this, Wa(r, i, a));
	}
	static from(e, t = void 0) {
		return md(vd(e, t));
	}
	static compare(e, t) {
		return Ss(vd(e), vd(t));
	}
	get calendarId() {
		return mr(hd(this).calendar);
	}
	get timeZoneId() {
		return hd(this).timeZone.id;
	}
	get epochMilliseconds() {
		return xi(hd(this).epochNanoseconds);
	}
	get epochNanoseconds() {
		return hd(this).epochNanoseconds;
	}
	get offset() {
		return Ec(go(hd(this)).offsetNanoseconds);
	}
	get offsetNanoseconds() {
		return go(hd(this)).offsetNanoseconds;
	}
	get hoursInDay() {
		return Xa(hd(this));
	}
	with(e, t = void 0) {
		return md(ld(hd(this), Wd(e), t));
	}
	withCalendar(e) {
		return md({
			...hd(this),
			calendar: gf(e)
		});
	}
	withTimeZone(e) {
		return md({
			...hd(this),
			timeZone: Bc(bd(e))
		});
	}
	withPlainTime(e = void 0) {
		return md(Au(hd(this), Zd(e)));
	}
	add(e, t = void 0) {
		return md(So(hd(this), Sf(e), F(t)));
	}
	subtract(e, t = void 0) {
		return md(So(hd(this), us(Sf(e)), F(t)));
	}
	until(e, t = void 0) {
		return yf(Qu(0, hd(this), vd(e), t));
	}
	since(e, t = void 0) {
		return yf(Qu(1, hd(this), vd(e), t));
	}
	round(e) {
		let t = hd(this), [n, r, i] = Qt(e);
		return md(Ya(t, n, r, i));
	}
	startOfDay() {
		return md(Za(hd(this)));
	}
	equals(e) {
		return Os(hd(this), vd(e));
	}
	toInstant() {
		return Cd(Ql(hd(this)));
	}
	toPlainDateTime() {
		return tf($l(hd(this)));
	}
	toPlainDate() {
		return lf(eu(hd(this)));
	}
	toPlainTime() {
		return qd(tu(hd(this)));
	}
	toLocaleString(e = void 0, t = {}) {
		let n = hd(this), r = new ac(e, fu(wu(t), Io(n)));
		return pu(r, n), r.format(xi(n.epochNanoseconds));
	}
	toString(e = void 0) {
		return uc(hd(this), e);
	}
	toJSON() {
		return uc(hd(this));
	}
	getTimeZoneTransition(e) {
		let t = hd(this), n = t.timeZone.C(t.epochNanoseconds, un(e));
		return n === void 0 ? null : md({
			...t,
			epochNanoseconds: n
		});
	}
	valueOf() {
		return Gu();
	}
}, gd, qu, Xu, Ir);
function md(e) {
	return yd(Object.create(pd.prototype), e);
}
function hd(e) {
	return _d(e) || Wu();
}
function gd(e) {
	let t = hd(e);
	return {
		...go(t),
		calendar: t.calendar
	};
}
function _d(e) {
	return fd.get(e);
}
function vd(e, t) {
	if (Tn(e)) {
		let n = _d(e);
		return n ? (en(t), n) : Yc(bd, mf(e), e, t);
	}
	return al(e, ud, t);
}
function yd(e, t) {
	return fd.set(e, t), Uu(e), e;
}
function bd(e) {
	if (Tn(e)) {
		let t = _d(e);
		return t || En(xn(e)), t.timeZone.id;
	}
	return ((e) => Ic(ml(_a(e))))(e);
}
var xd = /*@__PURE__*/ new WeakMap(), Sd = /*@__PURE__*/ Hu(Bu, class {
	constructor(e) {
		let t = Na(Sa(e));
		Od(this, Ua(t));
	}
	static from(e) {
		return Cd(Ed(e));
	}
	static fromEpochMilliseconds(e) {
		return Cd(lu(e));
	}
	static fromEpochNanoseconds(e) {
		return Cd(uu(e));
	}
	static compare(e, t) {
		return Ss(Ed(e), Ed(t));
	}
	get epochMilliseconds() {
		return xi(wd(this).epochNanoseconds);
	}
	get epochNanoseconds() {
		return wd(this).epochNanoseconds;
	}
	add(e) {
		return Cd(Ua(To(wd(this).epochNanoseconds, Sf(e))));
	}
	subtract(e) {
		return Cd(Ua(To(wd(this).epochNanoseconds, us(Sf(e)))));
	}
	until(e, t = void 0) {
		return yf(Zu(0, wd(this), Ed(e), t));
	}
	since(e, t = void 0) {
		return yf(Zu(1, wd(this), Ed(e), t));
	}
	round(e) {
		let t = wd(this), [n, r, i] = Qt(e, 5, 1);
		return Cd(Ua(fo(t.epochNanoseconds, ho(n, r), i)));
	}
	equals(e) {
		return Ds(wd(this), Ed(e));
	}
	toZonedDateTimeISO(e) {
		return md(Zl(wd(this), Bc(bd(e))));
	}
	toLocaleString(e = void 0, t = {}) {
		let n = wd(this);
		return new ac(e, Cu(t)).format(xi(n.epochNanoseconds));
	}
	toString(e = void 0) {
		return lc(bd, wd(this), e);
	}
	toJSON() {
		return lc(bd, wd(this));
	}
	valueOf() {
		return Gu();
	}
});
function Cd(e) {
	return Od(Object.create(Sd.prototype), e);
}
function wd(e) {
	return Td(e) || Wu();
}
function Td(e) {
	return xd.get(e);
}
function Ed(e) {
	if (Tn(e)) {
		let t = Td(e);
		if (t) return t;
		let n = _d(e);
		if (n) return Ua(n.epochNanoseconds);
	}
	return rl(e);
}
var { toTemporalInstant: Dd } = { toTemporalInstant() {
	let e = Date.prototype.valueOf.call(this);
	return Cd(Ua(BigInt(ya(e)) * kr));
} };
function Od(e, t) {
	return xd.set(e, t), Uu(e), e;
}
var kd = /*@__PURE__*/ new WeakMap(), Ad = /*@__PURE__*/ Hu(Fu, class {
	constructor(e, t, n = void 0, r) {
		let i = ht(e), a = ht(t), o = dd(n), s = Aa(Wi({
			year: ht(r ?? 1972),
			month: i,
			day: a
		}));
		Fd(this, Ka(s, o));
	}
	static from(e, t = void 0) {
		return jd(Pd(e, t));
	}
	get calendarId() {
		return mr(Md(this).calendar);
	}
	with(e, t = void 0) {
		return jd(sd(Md(this), Wd(e), t));
	}
	equals(e) {
		return Ms(Md(this), Pd(e));
	}
	toPlainDate(e) {
		return lf(au(Md(this).calendar, this, e));
	}
	toLocaleString(e = void 0, t = {}) {
		let n = Md(this), r = new ac(e, du(ku(t)));
		return pu(r, n, 1), r.format(Ti(n));
	}
	toString(e = void 0) {
		return mc(Md(this), e);
	}
	toJSON() {
		return mc(Md(this));
	}
	valueOf() {
		return Gu();
	}
}, Md, Ju);
function jd(e) {
	return Fd(Object.create(Ad.prototype), e);
}
function Md(e) {
	return Nd(e) || Wu();
}
function Nd(e) {
	return kd.get(e);
}
function Pd(e, t) {
	if (Tn(e)) {
		let n = Nd(e);
		if (n) return F(t), n;
		let r = hf(e);
		return $c(r === void 0 ? void 0 : r, r === void 0, e, t);
	}
	let n = ul(e, ud);
	return F(t), n;
}
function Fd(e, t) {
	return kd.set(e, t), Uu(e), e;
}
var Id = /*@__PURE__*/ new WeakMap(), Ld = /*@__PURE__*/ Hu(Pu, class {
	constructor(e, t, n = void 0, r) {
		let i = ht(e), a = ht(t), o = dd(n), s = ka(Wi({
			year: i,
			month: a,
			day: ht(r ?? 1)
		}));
		Hd(this, Ka(s, o));
	}
	static from(e, t = void 0) {
		return Rd(Vd(e, t));
	}
	static compare(e, t) {
		return Ts(Vd(e), Vd(t));
	}
	get calendarId() {
		return mr(zd(this).calendar);
	}
	with(e, t = void 0) {
		return Rd(od(zd(this), Wd(e), t));
	}
	add(e, t = void 0) {
		let n = zd(this);
		return Rd(Ka(xo(n.calendar, n, Sf(e), F(t)), n.calendar));
	}
	subtract(e, t = void 0) {
		let n = zd(this);
		return Rd(Ka(xo(n.calendar, n, us(Sf(e)), F(t)), n.calendar));
	}
	until(e, t = void 0) {
		return yf(td(0, zd(this), Vd(e), t));
	}
	since(e, t = void 0) {
		return yf(td(1, zd(this), Vd(e), t));
	}
	equals(e) {
		return js(zd(this), Vd(e));
	}
	toPlainDate(e) {
		return lf(iu(zd(this).calendar, this, e));
	}
	toLocaleString(e = void 0, t = {}) {
		let n = zd(this), r = new ac(e, du(Ou(t)));
		return pu(r, n, 1), r.format(Ti(n));
	}
	toString(e = void 0) {
		return pc(zd(this), e);
	}
	toJSON() {
		return pc(zd(this));
	}
	valueOf() {
		return Gu();
	}
}, zd, Ku, Yu);
function Rd(e) {
	return Hd(Object.create(Ld.prototype), e);
}
function zd(e) {
	return Bd(e) || Wu();
}
function Bd(e) {
	return Id.get(e);
}
function Vd(e, t) {
	if (Tn(e)) {
		let n = Bd(e);
		return n ? (F(t), n) : Qc(mf(e), e, t);
	}
	let n = cl(e, ud);
	return F(t), n;
}
function Hd(e, t) {
	return Id.set(e, t), Uu(e), e;
}
function Ud(e) {
	if (!Tn(e)) return;
	let t = Td(e);
	return t ? [Bu, t] : (t = _d(e), t ? [zu, t] : (t = rf(e), t ? [Lu, t] : (t = df(e), t ? [Iu, t] : (t = Yd(e), t ? [Ru, t] : (t = Bd(e), t ? [Pu, t] : (t = Nd(e), t ? [Fu, t] : (t = xf(e), t ? [Vu, t] : void 0)))))));
}
function Wd(e) {
	return (Ud(e) || e.calendar !== void 0 || e.timeZone !== void 0) && En("Invalid bag"), e;
}
var Gd = /*@__PURE__*/ new WeakMap(), Kd = /*@__PURE__*/ Hu(Ru, class {
	constructor(e = 0, t = 0, n = 0, r = 0, i = 0, a = 0) {
		let o = ui(Nn(ht, {
			hour: e,
			minute: t,
			second: n,
			millisecond: r,
			microsecond: i,
			nanosecond: a
		}));
		Qd(this, qa(o));
	}
	static from(e, t = void 0) {
		return qd(Xd(e, t));
	}
	static compare(e, t) {
		return Es(Xd(e), Xd(t));
	}
	with(e, t = void 0) {
		return qd(cd(Jd(this), Wd(e), t));
	}
	add(e) {
		return qd(wo(Jd(this), Sf(e))[0]);
	}
	subtract(e) {
		return qd(wo(Jd(this), us(Sf(e)))[0]);
	}
	until(e, t = void 0) {
		return yf(nd(0, Jd(this), Xd(e), t));
	}
	since(e, t = void 0) {
		return yf(nd(1, Jd(this), Xd(e), t));
	}
	round(e) {
		let t = Jd(this), [n, r, i] = Qt(e, 5);
		return qd(ro(t, mo(n, r), i)[0]);
	}
	equals(e) {
		return Ns(Jd(this), Xd(e));
	}
	toLocaleString(e = void 0, t = {}) {
		let n = Jd(this);
		return new ac(e, du(Du(t))).format(mi(n));
	}
	toString(e = void 0) {
		return gc(Jd(this), e);
	}
	toJSON() {
		return gc(Jd(this));
	}
	valueOf() {
		return Gu();
	}
}, Jd, Ir);
function qd(e) {
	return Qd(Object.create(Kd.prototype), e);
}
function Jd(e) {
	return Yd(e) || Wu();
}
function Yd(e) {
	return Gd.get(e);
}
function Xd(e, t) {
	if (Tn(e)) {
		let n = Yd(e);
		if (n) return F(t), n;
		let r = rf(e);
		if (r) return F(t), qa(r);
		let i = _d(e);
		return i ? (F(t), tu(i)) : el(e, t);
	}
	let n = dl(e);
	return F(t), n;
}
function Zd(e) {
	return e === void 0 ? void 0 : Xd(e);
}
function Qd(e, t) {
	return Gd.set(e, t), Uu(e), e;
}
var $d = /*@__PURE__*/ new WeakMap(), ef = /*@__PURE__*/ Hu(Lu, class {
	constructor(e, t, n, r = 0, i = 0, a = 0, o = 0, s = 0, c = 0, l = void 0) {
		let u = ja(Ui(Nn(ht, {
			year: e,
			month: t,
			day: n,
			hour: r,
			minute: i,
			second: a,
			millisecond: o,
			microsecond: s,
			nanosecond: c
		}))), d = dd(l);
		of(this, Ga(u, d));
	}
	static from(e, t = void 0) {
		return tf(af(e, t));
	}
	static compare(e, t) {
		return ws(af(e), af(t));
	}
	get calendarId() {
		return mr(nf(this).calendar);
	}
	with(e, t = void 0) {
		return tf(ad(nf(this), Wd(e), t));
	}
	withCalendar(e) {
		return tf(Ga(nf(this), gf(e)));
	}
	withPlainTime(e = void 0) {
		let t = nf(this);
		return tf(Qs(t, Zd(e), t.calendar));
	}
	add(e, t = void 0) {
		let n = nf(this);
		return tf(Ga(Co(n.calendar, n, Sf(e), F(t)), n.calendar));
	}
	subtract(e, t = void 0) {
		let n = nf(this);
		return tf(Ga(Co(n.calendar, n, us(Sf(e)), F(t)), n.calendar));
	}
	until(e, t = void 0) {
		return yf($u(0, nf(this), af(e), t));
	}
	since(e, t = void 0) {
		return yf($u(1, nf(this), af(e), t));
	}
	round(e) {
		let t = nf(this), [n, r, i] = Qt(e);
		return tf(Ga(no(t, mo(n, r), i), t.calendar));
	}
	equals(e) {
		return ks(nf(this), af(e));
	}
	toZonedDateTime(e, t = void 0) {
		return md(nu(nf(this), Bc(bd(e)), tn(t)));
	}
	toPlainDate() {
		let e = nf(this);
		return lf(Ka(e, e.calendar));
	}
	toPlainTime() {
		return qd(qa(nf(this)));
	}
	toLocaleString(e = void 0, t = {}) {
		let n = nf(this), r = new ac(e, du(Tu(t)));
		return pu(r, n), r.format(Ci(n));
	}
	toString(e = void 0) {
		return dc(nf(this), e);
	}
	toJSON() {
		return dc(nf(this));
	}
	valueOf() {
		return Gu();
	}
}, nf, qu, Xu, Ir);
function tf(e) {
	return of(Object.create(ef.prototype), e);
}
function nf(e) {
	return rf(e) || Wu();
}
function rf(e) {
	return $d.get(e);
}
function af(e, t) {
	if (Tn(e)) {
		let n = rf(e);
		if (n) return F(t), n;
		let r = df(e);
		if (r) return F(t), Ga(wa(r, li), r.calendar);
		let i = _d(e);
		return i ? (F(t), $l(i)) : Xc(mf(e), e, t);
	}
	let n = ol(e, ud);
	return F(t), n;
}
function of(e, t) {
	return $d.set(e, t), Uu(e), e;
}
var sf = /*@__PURE__*/ new WeakMap(), cf = /*@__PURE__*/ Hu(Iu, class {
	constructor(e, t, n, r = void 0) {
		let i = Aa(Wi(Nn(ht, {
			year: e,
			month: t,
			day: n
		}))), a = dd(r);
		pf(this, Ka(i, a));
	}
	static from(e, t = void 0) {
		return lf(ff(e, t));
	}
	static compare(e, t) {
		return Ts(ff(e), ff(t));
	}
	get calendarId() {
		return mr(uf(this).calendar);
	}
	with(e, t = void 0) {
		return lf(id(uf(this), Wd(e), t));
	}
	withCalendar(e) {
		return lf(Ka(uf(this), gf(e)));
	}
	add(e, t = void 0) {
		let n = uf(this);
		return lf(Ka(Eo(n.calendar, n, Sf(e), F(t)), n.calendar));
	}
	subtract(e, t = void 0) {
		let n = uf(this);
		return lf(Ka(Eo(n.calendar, n, us(Sf(e)), F(t)), n.calendar));
	}
	until(e, t = void 0) {
		return yf(ed(0, uf(this), ff(e), t));
	}
	since(e, t = void 0) {
		return yf(ed(1, uf(this), ff(e), t));
	}
	equals(e) {
		return As(uf(this), ff(e));
	}
	toZonedDateTime(e) {
		let t = Tn(e) ? {
			timeZone: e.timeZone,
			plainTime: e.plainTime
		} : { timeZone: e }, n = uf(this), r = bd(t.timeZone), i = t.plainTime, a = i === void 0 ? void 0 : Xd(i);
		return md(ru(n, Bc(r), a));
	}
	toPlainDateTime(e = void 0) {
		let t = uf(this);
		return tf(Qs(t, Zd(e), t.calendar));
	}
	toPlainYearMonth() {
		return Rd(su(uf(this).calendar, this));
	}
	toPlainMonthDay() {
		return jd(ou(uf(this).calendar, this));
	}
	toLocaleString(e = void 0, t = {}) {
		let n = uf(this), r = new ac(e, du(Eu(t)));
		return pu(r, n), r.format(Ti(n));
	}
	toString(e = void 0) {
		return fc(uf(this), e);
	}
	toJSON() {
		return fc(uf(this));
	}
	valueOf() {
		return Gu();
	}
}, uf, qu, Xu);
function lf(e) {
	return pf(Object.create(cf.prototype), e);
}
function uf(e) {
	return df(e) || Wu();
}
function df(e) {
	return sf.get(e);
}
function ff(e, t) {
	if (Tn(e)) {
		let n = df(e);
		if (n) return F(t), n;
		let r = rf(e);
		if (r) return F(t), Ka(r, r.calendar);
		let i = _d(e);
		return i ? (F(t), eu(i)) : Zc(mf(e), e, t);
	}
	let n = sl(e, ud);
	return F(t), n;
}
function pf(e, t) {
	return sf.set(e, t), Uu(e), e;
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
	if (Tn(e)) {
		let t = df(e) || rf(e) || _d(e) || Nd(e) || Bd(e);
		return t || En(yn(e)), t.calendar;
	}
	return ((e) => ud(pl(_a(e))))(e);
}
var _f = /*@__PURE__*/ new WeakMap(), vf = /*@__PURE__*/ Hu(Vu, class {
	constructor(e = 0, t = 0, n = 0, r = 0, i = 0, a = 0, o = 0, s = 0, c = 0, l = 0) {
		let u = fs(Nn(Ca, {
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
		wf(this, Ja(u));
	}
	static from(e) {
		return yf(Sf(e));
	}
	static compare(e, t, n = void 0) {
		return Cs(Cf, Sf(e), Sf(t), n);
	}
	get sign() {
		return bf(this).sign;
	}
	get blank() {
		return !bf(this).sign;
	}
	with(e) {
		return yf(ql(bf(this), e));
	}
	negated() {
		return yf(ls(bf(this)));
	}
	abs() {
		return yf(cs(bf(this)));
	}
	add(e) {
		return yf(os(0, bf(this), Sf(e)));
	}
	subtract(e) {
		return yf(os(1, bf(this), Sf(e)));
	}
	round(e) {
		return yf(ss(Cf, bf(this), e));
	}
	total(e) {
		return Yl(Cf, bf(this), e);
	}
	toLocaleString(e = void 0, t) {
		let n = bf(this);
		return Intl.DurationFormat ? new Intl.DurationFormat(e, t).format(n) : _c(n, t);
	}
	toString(e = void 0) {
		return _c(bf(this), e);
	}
	toJSON() {
		return _c(bf(this));
	}
	valueOf() {
		return Gu();
	}
}, bf, ca);
function yf(e) {
	return wf(Object.create(vf.prototype), e);
}
function bf(e) {
	return xf(e) || Wu();
}
function xf(e) {
	return _f.get(e);
}
function Sf(e) {
	return Tn(e) ? xf(e) || tl(e) : fl(e);
}
function Cf(e) {
	if (e !== void 0) {
		if (Tn(e)) {
			let t = _d(e);
			if (t) return t;
			let n = df(e);
			if (n) return n;
			let r = rf(e);
			return r ? Ka(r, r.calendar) : Jc(bd, mf(e), e);
		}
		return il(e, ud);
	}
}
function wf(e, t) {
	return _f.set(e, t), Uu(e), e;
}
var Tf = /*@__PURE__*/ Object.defineProperties({}, {
	...Mn("Temporal.Now"),
	...jn({
		timeZoneId() {
			return Nu();
		},
		instant() {
			return Cd(Ua(Mu()));
		},
		zonedDateTimeISO(e = Nu()) {
			let t = Bc(bd(e));
			return md(Wa(Mu(), t));
		},
		plainDateTimeISO(e = Nu()) {
			return tf(Ga(ju(Bc(bd(e)))));
		},
		plainDateISO(e = Nu()) {
			return lf(Ka(ju(Bc(bd(e)))));
		},
		plainTimeISO(e = Nu()) {
			return qd(qa(ju(Bc(bd(e)))));
		}
	})
}), Ef = /*@__PURE__*/ Object.defineProperties({}, {
	...Mn("Temporal"),
	...jn({
		PlainYearMonth: Ld,
		PlainMonthDay: Ad,
		PlainDate: cf,
		PlainTime: Kd,
		PlainDateTime: ef,
		ZonedDateTime: pd,
		Instant: Sd,
		Duration: vf,
		Now: Tf
	})
}), Df = tt || Ef;
tt && Date.prototype.toTemporalInstant;
//#endregion
//#region src/core/utils/DateUtils.ts
var L = /* @__PURE__ */ $e((/* @__PURE__ */ P(((e, t) => {
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
//#region ../../node_modules/.pnpm/react@19.3.0/node_modules/react/cjs/react-jsx-runtime.production.js
var Af = /* @__PURE__ */ P(((e) => {
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
})), jf = /* @__PURE__ */ P(((e, t) => {
	t.exports = { ...a };
})), Mf = /* @__PURE__ */ P(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === te ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case _: return "Fragment";
				case y: return "Profiler";
				case v: return "StrictMode";
				case C: return "Suspense";
				case w: return "SuspenseList";
				case ee: return "Activity";
				case D: return "ViewTransition";
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
			var e = O.A;
			return e === null ? null : e.getOwner();
		}
		function o() {
			return Error("react-stack-top-frame");
		}
		function s(e) {
			if (k.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function c(e, t) {
			function n() {
				ie || (ie = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function l() {
			var e = t(this.type);
			return A[e] || (A[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
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
			if (p !== void 0) {
				if (o) {
					if (ne(p)) {
						for (o = 0; o < p.length; o++) f(p[o]);
						Object.freeze && Object.freeze(p);
					} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
				} else f(p);
			}
			if (k.call(n, "key")) {
				p = t(e);
				var m = Object.keys(n).filter(function(e) {
					return e !== "key";
				});
				o = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", se[p + o] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", o, p, m, p), se[p + o] = !0);
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
		var m = jf(), h = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), x = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), ee = Symbol.for("react.activity"), D = Symbol.for("react.view_transition"), te = Symbol.for("react.client.reference"), O = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = Object.prototype.hasOwnProperty, ne = Array.isArray, re = console.createTask ? console.createTask : function() {
			return null;
		};
		m = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var ie, A = {}, ae = m.react_stack_bottom_frame.bind(m, o)(), oe = re(i(o)), se = {};
		e.Fragment = _, e.jsx = function(e, t, n) {
			var r = 1e4 > O.recentlyCreatedOwnerStacks++;
			if (r) {
				var a = Error.stackTraceLimit;
				Error.stackTraceLimit = 10;
				var o = Error("react-stack-top-frame");
				Error.stackTraceLimit = a;
			} else o = ae;
			return d(e, t, n, !1, o, r ? re(i(e)) : oe);
		}, e.jsxs = function(e, t, n) {
			var r = 1e4 > O.recentlyCreatedOwnerStacks++;
			if (r) {
				var a = Error.stackTraceLimit;
				Error.stackTraceLimit = 10;
				var o = Error("react-stack-top-frame");
				Error.stackTraceLimit = a;
			} else o = ae;
			return d(e, t, n, !0, o, r ? re(i(e)) : oe);
		};
	})();
})), R = (/* @__PURE__ */ P(((e, t) => {
	t.exports = process.env.NODE_ENV === "production" ? Af() : Mf();
})))();
function Nf({ seconds: e, className: t, minutesMinLength: n, hoursMinLength: r, ...i }) {
	let a = S(() => Math.floor(e), [e]), o = S(() => Pf(a), [a]);
	return /* @__PURE__ */ (0, R.jsx)("time", {
		dateTime: o,
		className: (0, L.default)("mx_Clock", t),
		...i,
		children: Of(e, {
			minutesMinLength: n,
			hoursMinLength: r
		})
	});
}
function Pf(e) {
	if (!isNaN(e)) return new Df.Duration(0, 0, 0, 0, 0, 0, Math.round(e)).round({
		smallestUnit: "seconds",
		largestUnit: "hours"
	}).toString();
}
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/play-solid.js
function Ff(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "m8.98 4.677 9.921 5.58c1.36.764 1.36 2.722 0 3.486l-9.92 5.58C7.647 20.073 6 19.11 6 17.58V6.42c0-1.53 1.647-2.493 2.98-1.743" })
	});
}
Ff.displayName = "PlaySolidIcon";
var If = d(Ff);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/pause-solid.js
function Lf(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M8 4a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V6a2 2 0 0 0-2-2m8 0a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V6a2 2 0 0 0-2-2" })
	});
}
Lf.displayName = "PauseSolidIcon";
var Rf = d(Lf), zf = { button: "_button_13syj_8" }, Bf = l(null);
Bf.displayName = "I18nContext";
function z() {
	let e = g(Bf);
	if (!e) throw Error("useI18n must be used within an I18nContext.Provider");
	return e;
}
//#endregion
//#region src/audio/PlayPauseButton/PlayPauseButton.tsx
function Vf({ disabled: e = !1, playing: t = !1, togglePlay: n, className: r, ...i }) {
	let { translate: a } = z(), o = a(t ? "action|pause" : "action|play");
	return /* @__PURE__ */ (0, R.jsx)(j, {
		size: "32px",
		"aria-label": o,
		tooltip: o,
		onClick: n,
		className: (0, L.default)(zf.button, r),
		disabled: e,
		...i,
		children: t ? /* @__PURE__ */ (0, R.jsx)(Rf, {}) : /* @__PURE__ */ (0, R.jsx)(If, {})
	});
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_freeGlobal.js
var Hf = typeof global == "object" && global && global.Object === Object && global, Uf = typeof self == "object" && self && self.Object === Object && self, Wf = Hf || Uf || Function("return this")(), Gf = Wf.Symbol, Kf = Object.prototype, qf = Kf.hasOwnProperty, Jf = Kf.toString, Yf = Gf ? Gf.toStringTag : void 0;
function Xf(e) {
	var t = qf.call(e, Yf), n = e[Yf];
	try {
		e[Yf] = void 0;
		var r = !0;
	} catch {}
	var i = Jf.call(e);
	return r && (t ? e[Yf] = n : delete e[Yf]), i;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_objectToString.js
var Zf = Object.prototype.toString;
function Qf(e) {
	return Zf.call(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseGetTag.js
var $f = "[object Null]", ep = "[object Undefined]", tp = Gf ? Gf.toStringTag : void 0;
function np(e) {
	return e == null ? e === void 0 ? ep : $f : tp && tp in Object(e) ? Xf(e) : Qf(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isObjectLike.js
function rp(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isSymbol.js
var ip = "[object Symbol]";
function ap(e) {
	return typeof e == "symbol" || rp(e) && np(e) == ip;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayMap.js
function op(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
	return i;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isArray.js
var sp = Array.isArray, cp = 1 / 0, lp = Gf ? Gf.prototype : void 0, up = lp ? lp.toString : void 0;
function dp(e) {
	if (typeof e == "string") return e;
	if (sp(e)) return op(e, dp) + "";
	if (ap(e)) return up ? up.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -cp ? "-0" : t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_trimmedEndIndex.js
var fp = /\s/;
function pp(e) {
	for (var t = e.length; t-- && fp.test(e.charAt(t)););
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseTrim.js
var mp = /^\s+/;
function hp(e) {
	return e && e.slice(0, pp(e) + 1).replace(mp, "");
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isObject.js
function gp(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/toNumber.js
var _p = NaN, vp = /^[-+]0x[0-9a-f]+$/i, yp = /^0b[01]+$/i, bp = /^0o[0-7]+$/i, xp = parseInt;
function Sp(e) {
	if (typeof e == "number") return e;
	if (ap(e)) return _p;
	if (gp(e)) {
		var t = typeof e.valueOf == "function" ? e.valueOf() : e;
		e = gp(t) ? t + "" : t;
	}
	if (typeof e != "string") return e === 0 ? e : +e;
	e = hp(e);
	var n = yp.test(e);
	return n || bp.test(e) ? xp(e.slice(2), n ? 2 : 8) : vp.test(e) ? _p : +e;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/identity.js
function Cp(e) {
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isFunction.js
var wp = "[object AsyncFunction]", Tp = "[object Function]", Ep = "[object GeneratorFunction]", Dp = "[object Proxy]";
function Op(e) {
	if (!gp(e)) return !1;
	var t = np(e);
	return t == Tp || t == Ep || t == wp || t == Dp;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_coreJsData.js
var kp = Wf["__core-js_shared__"], Ap = function() {
	var e = /[^.]+$/.exec(kp && kp.keys && kp.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function jp(e) {
	return !!Ap && Ap in e;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_toSource.js
var Mp = Function.prototype.toString;
function Np(e) {
	if (e != null) {
		try {
			return Mp.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsNative.js
var Pp = /[\\^$.*+?()[\]{}|]/g, Fp = /^\[object .+?Constructor\]$/, Ip = Function.prototype, Lp = Object.prototype, Rp = Ip.toString, zp = Lp.hasOwnProperty, Bp = RegExp("^" + Rp.call(zp).replace(Pp, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Vp(e) {
	return !gp(e) || jp(e) ? !1 : (Op(e) ? Bp : Fp).test(Np(e));
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getValue.js
function Hp(e, t) {
	return e?.[t];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getNative.js
function Up(e, t) {
	var n = Hp(e, t);
	return Vp(n) ? n : void 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_WeakMap.js
var Wp = Up(Wf, "WeakMap"), Gp = Object.create, Kp = function() {
	function e() {}
	return function(t) {
		if (!gp(t)) return {};
		if (Gp) return Gp(t);
		e.prototype = t;
		var n = new e();
		return e.prototype = void 0, n;
	};
}();
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_apply.js
function qp(e, t, n) {
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
function Jp(e, t) {
	var n = -1, r = e.length;
	for (t ||= Array(r); ++n < r;) t[n] = e[n];
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_shortOut.js
var Yp = 800, Xp = 16, Zp = Date.now;
function Qp(e) {
	var t = 0, n = 0;
	return function() {
		var r = Zp(), i = Xp - (r - n);
		if (n = r, i > 0) {
			if (++t >= Yp) return arguments[0];
		} else t = 0;
		return e.apply(void 0, arguments);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/constant.js
function $p(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_defineProperty.js
var em = function() {
	try {
		var e = Up(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}(), tm = Qp(em ? function(e, t) {
	return em(e, "toString", {
		configurable: !0,
		enumerable: !1,
		value: $p(t),
		writable: !0
	});
} : Cp);
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayEach.js
function nm(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isIndex.js
var rm = 9007199254740991, im = /^(?:0|[1-9]\d*)$/;
function am(e, t) {
	var n = typeof e;
	return t ??= rm, !!t && (n == "number" || n != "symbol" && im.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseAssignValue.js
function om(e, t, n) {
	t == "__proto__" && em ? em(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/eq.js
function sm(e, t) {
	return e === t || e !== e && t !== t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_assignValue.js
var cm = Object.prototype.hasOwnProperty;
function lm(e, t, n) {
	var r = e[t];
	(!(cm.call(e, t) && sm(r, n)) || n === void 0 && !(t in e)) && om(e, t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copyObject.js
function um(e, t, n, r) {
	var i = !n;
	n ||= {};
	for (var a = -1, o = t.length; ++a < o;) {
		var s = t[a], c = r ? r(n[s], e[s], s, n, e) : void 0;
		c === void 0 && (c = e[s]), i ? om(n, s, c) : lm(n, s, c);
	}
	return n;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_overRest.js
var dm = Math.max;
function fm(e, t, n) {
	return t = dm(t === void 0 ? e.length - 1 : t, 0), function() {
		for (var r = arguments, i = -1, a = dm(r.length - t, 0), o = Array(a); ++i < a;) o[i] = r[t + i];
		i = -1;
		for (var s = Array(t + 1); ++i < t;) s[i] = r[i];
		return s[t] = n(o), qp(e, this, s);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isLength.js
var pm = 9007199254740991;
function mm(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= pm;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isArrayLike.js
function hm(e) {
	return e != null && mm(e.length) && !Op(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isPrototype.js
var gm = Object.prototype;
function _m(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || gm);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseTimes.js
function vm(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsArguments.js
var ym = "[object Arguments]";
function bm(e) {
	return rp(e) && np(e) == ym;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isArguments.js
var xm = Object.prototype, Sm = xm.hasOwnProperty, Cm = xm.propertyIsEnumerable, wm = bm(function() {
	return arguments;
}()) ? bm : function(e) {
	return rp(e) && Sm.call(e, "callee") && !Cm.call(e, "callee");
};
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/stubFalse.js
function Tm() {
	return !1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isBuffer.js
var Em = typeof exports == "object" && exports && !exports.nodeType && exports, Dm = Em && typeof module == "object" && module && !module.nodeType && module, Om = Dm && Dm.exports === Em ? Wf.Buffer : void 0, km = (Om ? Om.isBuffer : void 0) || Tm, Am = "[object Arguments]", jm = "[object Array]", Mm = "[object Boolean]", Nm = "[object Date]", Pm = "[object Error]", Fm = "[object Function]", Im = "[object Map]", Lm = "[object Number]", Rm = "[object Object]", zm = "[object RegExp]", Bm = "[object Set]", Vm = "[object String]", Hm = "[object WeakMap]", Um = "[object ArrayBuffer]", Wm = "[object DataView]", Gm = "[object Float32Array]", Km = "[object Float64Array]", qm = "[object Int8Array]", Jm = "[object Int16Array]", Ym = "[object Int32Array]", Xm = "[object Uint8Array]", Zm = "[object Uint8ClampedArray]", Qm = "[object Uint16Array]", $m = "[object Uint32Array]", eh = {};
eh[Gm] = eh[Km] = eh[qm] = eh[Jm] = eh[Ym] = eh[Xm] = eh[Zm] = eh[Qm] = eh[$m] = !0, eh[Am] = eh[jm] = eh[Um] = eh[Mm] = eh[Wm] = eh[Nm] = eh[Pm] = eh[Fm] = eh[Im] = eh[Lm] = eh[Rm] = eh[zm] = eh[Bm] = eh[Vm] = eh[Hm] = !1;
function th(e) {
	return rp(e) && mm(e.length) && !!eh[np(e)];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseUnary.js
function nh(e) {
	return function(t) {
		return e(t);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nodeUtil.js
var rh = typeof exports == "object" && exports && !exports.nodeType && exports, ih = rh && typeof module == "object" && module && !module.nodeType && module, ah = ih && ih.exports === rh && Hf.process, oh = function() {
	try {
		return ih && ih.require && ih.require("util").types || ah && ah.binding && ah.binding("util");
	} catch {}
}(), sh = oh && oh.isTypedArray, ch = sh ? nh(sh) : th, lh = Object.prototype.hasOwnProperty;
function uh(e, t) {
	var n = sp(e), r = !n && wm(e), i = !n && !r && km(e), a = !n && !r && !i && ch(e), o = n || r || i || a, s = o ? vm(e.length, String) : [], c = s.length;
	for (var l in e) (t || lh.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || am(l, c))) && s.push(l);
	return s;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_overArg.js
function dh(e, t) {
	return function(n) {
		return e(t(n));
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nativeKeys.js
var fh = dh(Object.keys, Object), ph = Object.prototype.hasOwnProperty;
function mh(e) {
	if (!_m(e)) return fh(e);
	var t = [];
	for (var n in Object(e)) ph.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/keys.js
function hh(e) {
	return hm(e) ? uh(e) : mh(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nativeKeysIn.js
function gh(e) {
	var t = [];
	if (e != null) for (var n in Object(e)) t.push(n);
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseKeysIn.js
var _h = Object.prototype.hasOwnProperty;
function vh(e) {
	if (!gp(e)) return gh(e);
	var t = _m(e), n = [];
	for (var r in e) (r != "constructor" || !t && _h.call(e, r)) && n.push(r);
	return n;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/keysIn.js
function yh(e) {
	return hm(e) ? uh(e, !0) : vh(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isKey.js
var bh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, xh = /^\w*$/;
function Sh(e, t) {
	if (sp(e)) return !1;
	var n = typeof e;
	return n == "number" || n == "symbol" || n == "boolean" || e == null || ap(e) ? !0 : xh.test(e) || !bh.test(e) || t != null && e in Object(t);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nativeCreate.js
var Ch = Up(Object, "create");
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashClear.js
function wh() {
	this.__data__ = Ch ? Ch(null) : {}, this.size = 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashDelete.js
function Th(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= +!!t, t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashGet.js
var Eh = "__lodash_hash_undefined__", Dh = Object.prototype.hasOwnProperty;
function Oh(e) {
	var t = this.__data__;
	if (Ch) {
		var n = t[e];
		return n === Eh ? void 0 : n;
	}
	return Dh.call(t, e) ? t[e] : void 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashHas.js
var kh = Object.prototype.hasOwnProperty;
function Ah(e) {
	var t = this.__data__;
	return Ch ? t[e] !== void 0 : kh.call(t, e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashSet.js
var jh = "__lodash_hash_undefined__";
function Mh(e, t) {
	var n = this.__data__;
	return this.size += +!this.has(e), n[e] = Ch && t === void 0 ? jh : t, this;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Hash.js
function Nh(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Nh.prototype.clear = wh, Nh.prototype.delete = Th, Nh.prototype.get = Oh, Nh.prototype.has = Ah, Nh.prototype.set = Mh;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheClear.js
function Ph() {
	this.__data__ = [], this.size = 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_assocIndexOf.js
function Fh(e, t) {
	for (var n = e.length; n--;) if (sm(e[n][0], t)) return n;
	return -1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheDelete.js
var Ih = Array.prototype.splice;
function Lh(e) {
	var t = this.__data__, n = Fh(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : Ih.call(t, n, 1), --this.size, !0);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheGet.js
function Rh(e) {
	var t = this.__data__, n = Fh(t, e);
	return n < 0 ? void 0 : t[n][1];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheHas.js
function zh(e) {
	return Fh(this.__data__, e) > -1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheSet.js
function Bh(e, t) {
	var n = this.__data__, r = Fh(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_ListCache.js
function Vh(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Vh.prototype.clear = Ph, Vh.prototype.delete = Lh, Vh.prototype.get = Rh, Vh.prototype.has = zh, Vh.prototype.set = Bh;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Map.js
var Hh = Up(Wf, "Map");
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheClear.js
function Uh() {
	this.size = 0, this.__data__ = {
		hash: new Nh(),
		map: new (Hh || Vh)(),
		string: new Nh()
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isKeyable.js
function Wh(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getMapData.js
function Gh(e, t) {
	var n = e.__data__;
	return Wh(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheDelete.js
function Kh(e) {
	var t = Gh(this, e).delete(e);
	return this.size -= +!!t, t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheGet.js
function qh(e) {
	return Gh(this, e).get(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheHas.js
function Jh(e) {
	return Gh(this, e).has(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheSet.js
function Yh(e, t) {
	var n = Gh(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_MapCache.js
function Xh(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Xh.prototype.clear = Uh, Xh.prototype.delete = Kh, Xh.prototype.get = qh, Xh.prototype.has = Jh, Xh.prototype.set = Yh;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/memoize.js
var Zh = "Expected a function";
function Qh(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(Zh);
	var n = function() {
		var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	};
	return n.cache = new (Qh.Cache || Xh)(), n;
}
Qh.Cache = Xh;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_memoizeCapped.js
var $h = 500;
function eg(e) {
	var t = Qh(e, function(e) {
		return n.size === $h && n.clear(), e;
	}), n = t.cache;
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stringToPath.js
var tg = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ng = /\\(\\)?/g, rg = eg(function(e) {
	var t = [];
	return e.charCodeAt(0) === 46 && t.push(""), e.replace(tg, function(e, n, r, i) {
		t.push(r ? i.replace(ng, "$1") : n || e);
	}), t;
});
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/toString.js
function ig(e) {
	return e == null ? "" : dp(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_castPath.js
function ag(e, t) {
	return sp(e) ? e : Sh(e, t) ? [e] : rg(ig(e));
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_toKey.js
var og = 1 / 0;
function sg(e) {
	if (typeof e == "string" || ap(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -og ? "-0" : t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseGet.js
function cg(e, t) {
	t = ag(t, e);
	for (var n = 0, r = t.length; e != null && n < r;) e = e[sg(t[n++])];
	return n && n == r ? e : void 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayPush.js
function lg(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isFlattenable.js
var ug = Gf ? Gf.isConcatSpreadable : void 0;
function dg(e) {
	return sp(e) || wm(e) || !!(ug && e && e[ug]);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseFlatten.js
function fg(e, t, n, r, i) {
	var a = -1, o = e.length;
	for (n ||= dg, i ||= []; ++a < o;) {
		var s = e[a];
		t > 0 && n(s) ? t > 1 ? fg(s, t - 1, n, r, i) : lg(i, s) : r || (i[i.length] = s);
	}
	return i;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/flatten.js
function pg(e) {
	return e != null && e.length ? fg(e, 1) : [];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_flatRest.js
function mg(e) {
	return tm(fm(e, void 0, pg), e + "");
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getPrototype.js
var hg = dh(Object.getPrototypeOf, Object), gg = "[object Object]", _g = Function.prototype, vg = Object.prototype, yg = _g.toString, bg = vg.hasOwnProperty, xg = yg.call(Object);
function Sg(e) {
	if (!rp(e) || np(e) != gg) return !1;
	var t = hg(e);
	if (t === null) return !0;
	var n = bg.call(t, "constructor") && t.constructor;
	return typeof n == "function" && n instanceof n && yg.call(n) == xg;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseSlice.js
function Cg(e, t, n) {
	var r = -1, i = e.length;
	t < 0 && (t = -t > i ? 0 : i + t), n = n > i ? i : n, n < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
	for (var a = Array(i); ++r < i;) a[r] = e[r + t];
	return a;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_castSlice.js
function wg(e, t, n) {
	var r = e.length;
	return n = n === void 0 ? r : n, !t && n >= r ? e : Cg(e, t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hasUnicode.js
var Tg = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
function Eg(e) {
	return Tg.test(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_asciiToArray.js
function Dg(e) {
	return e.split("");
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_unicodeToArray.js
var Og = "\\ud800-\\udfff", kg = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", Ag = "\\ufe0e\\ufe0f", jg = "[" + Og + "]", Mg = "[" + kg + "]", Ng = "\\ud83c[\\udffb-\\udfff]", Pg = "(?:" + Mg + "|" + Ng + ")", Fg = "[^" + Og + "]", Ig = "(?:\\ud83c[\\udde6-\\uddff]){2}", Lg = "[\\ud800-\\udbff][\\udc00-\\udfff]", Rg = "\\u200d", zg = Pg + "?", Bg = "[" + Ag + "]?", Vg = "(?:" + Rg + "(?:" + [
	Fg,
	Ig,
	Lg
].join("|") + ")" + Bg + zg + ")*", Hg = Bg + zg + Vg, Ug = "(?:" + [
	Fg + Mg + "?",
	Mg,
	Ig,
	Lg,
	jg
].join("|") + ")", Wg = RegExp(Ng + "(?=" + Ng + ")|" + Ug + Hg, "g");
function Gg(e) {
	return e.match(Wg) || [];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stringToArray.js
function Kg(e) {
	return Eg(e) ? Gg(e) : Dg(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_createCaseFirst.js
function qg(e) {
	return function(t) {
		t = ig(t);
		var n = Eg(t) ? Kg(t) : void 0, r = n ? n[0] : t.charAt(0), i = n ? wg(n, 1).join("") : t.slice(1);
		return r[e]() + i;
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/upperFirst.js
var Jg = qg("toUpperCase");
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/capitalize.js
function Yg(e) {
	return Jg(ig(e).toLowerCase());
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackClear.js
function Xg() {
	this.__data__ = new Vh(), this.size = 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackDelete.js
function Zg(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackGet.js
function Qg(e) {
	return this.__data__.get(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackHas.js
function $g(e) {
	return this.__data__.has(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackSet.js
var e_ = 200;
function t_(e, t) {
	var n = this.__data__;
	if (n instanceof Vh) {
		var r = n.__data__;
		if (!Hh || r.length < e_ - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new Xh(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Stack.js
function n_(e) {
	var t = this.__data__ = new Vh(e);
	this.size = t.size;
}
n_.prototype.clear = Xg, n_.prototype.delete = Zg, n_.prototype.get = Qg, n_.prototype.has = $g, n_.prototype.set = t_;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseAssign.js
function r_(e, t) {
	return e && um(t, hh(t), e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseAssignIn.js
function i_(e, t) {
	return e && um(t, yh(t), e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneBuffer.js
var a_ = typeof exports == "object" && exports && !exports.nodeType && exports, o_ = a_ && typeof module == "object" && module && !module.nodeType && module, s_ = o_ && o_.exports === a_ ? Wf.Buffer : void 0, c_ = s_ ? s_.allocUnsafe : void 0;
function l_(e, t) {
	if (t) return e.slice();
	var n = e.length, r = c_ ? c_(n) : new e.constructor(n);
	return e.copy(r), r;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayFilter.js
function u_(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/stubArray.js
function d_() {
	return [];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getSymbols.js
var f_ = Object.prototype.propertyIsEnumerable, p_ = Object.getOwnPropertySymbols, m_ = p_ ? function(e) {
	return e == null ? [] : (e = Object(e), u_(p_(e), function(t) {
		return f_.call(e, t);
	}));
} : d_;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copySymbols.js
function h_(e, t) {
	return um(e, m_(e), t);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getSymbolsIn.js
var g_ = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) lg(t, m_(e)), e = hg(e);
	return t;
} : d_;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copySymbolsIn.js
function __(e, t) {
	return um(e, g_(e), t);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseGetAllKeys.js
function v_(e, t, n) {
	var r = t(e);
	return sp(e) ? r : lg(r, n(e));
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getAllKeys.js
function y_(e) {
	return v_(e, hh, m_);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getAllKeysIn.js
function b_(e) {
	return v_(e, yh, g_);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_DataView.js
var x_ = Up(Wf, "DataView"), S_ = Up(Wf, "Promise"), C_ = Up(Wf, "Set"), w_ = "[object Map]", T_ = "[object Object]", E_ = "[object Promise]", D_ = "[object Set]", O_ = "[object WeakMap]", k_ = "[object DataView]", A_ = Np(x_), j_ = Np(Hh), M_ = Np(S_), N_ = Np(C_), P_ = Np(Wp), F_ = np;
(x_ && F_(new x_(/* @__PURE__ */ new ArrayBuffer(1))) != k_ || Hh && F_(new Hh()) != w_ || S_ && F_(S_.resolve()) != E_ || C_ && F_(new C_()) != D_ || Wp && F_(new Wp()) != O_) && (F_ = function(e) {
	var t = np(e), n = t == T_ ? e.constructor : void 0, r = n ? Np(n) : "";
	if (r) switch (r) {
		case A_: return k_;
		case j_: return w_;
		case M_: return E_;
		case N_: return D_;
		case P_: return O_;
	}
	return t;
});
var I_ = F_, L_ = Object.prototype.hasOwnProperty;
function R_(e) {
	var t = e.length, n = new e.constructor(t);
	return t && typeof e[0] == "string" && L_.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Uint8Array.js
var z_ = Wf.Uint8Array;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneArrayBuffer.js
function B_(e) {
	var t = new e.constructor(e.byteLength);
	return new z_(t).set(new z_(e)), t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneDataView.js
function V_(e, t) {
	var n = t ? B_(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.byteLength);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneRegExp.js
var H_ = /\w*$/;
function U_(e) {
	var t = new e.constructor(e.source, H_.exec(e));
	return t.lastIndex = e.lastIndex, t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneSymbol.js
var W_ = Gf ? Gf.prototype : void 0, G_ = W_ ? W_.valueOf : void 0;
function K_(e) {
	return G_ ? Object(G_.call(e)) : {};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneTypedArray.js
function q_(e, t) {
	var n = t ? B_(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.length);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_initCloneByTag.js
var J_ = "[object Boolean]", Y_ = "[object Date]", X_ = "[object Map]", Z_ = "[object Number]", Q_ = "[object RegExp]", $_ = "[object Set]", ev = "[object String]", tv = "[object Symbol]", nv = "[object ArrayBuffer]", rv = "[object DataView]", iv = "[object Float32Array]", av = "[object Float64Array]", ov = "[object Int8Array]", sv = "[object Int16Array]", cv = "[object Int32Array]", lv = "[object Uint8Array]", uv = "[object Uint8ClampedArray]", dv = "[object Uint16Array]", fv = "[object Uint32Array]";
function pv(e, t, n) {
	var r = e.constructor;
	switch (t) {
		case nv: return B_(e);
		case J_:
		case Y_: return new r(+e);
		case rv: return V_(e, n);
		case iv:
		case av:
		case ov:
		case sv:
		case cv:
		case lv:
		case uv:
		case dv:
		case fv: return q_(e, n);
		case X_: return new r();
		case Z_:
		case ev: return new r(e);
		case Q_: return U_(e);
		case $_: return new r();
		case tv: return K_(e);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_initCloneObject.js
function mv(e) {
	return typeof e.constructor == "function" && !_m(e) ? Kp(hg(e)) : {};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsMap.js
var hv = "[object Map]";
function gv(e) {
	return rp(e) && I_(e) == hv;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isMap.js
var _v = oh && oh.isMap, vv = _v ? nh(_v) : gv, yv = "[object Set]";
function bv(e) {
	return rp(e) && I_(e) == yv;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isSet.js
var xv = oh && oh.isSet, Sv = xv ? nh(xv) : bv, Cv = 1, wv = 2, Tv = 4, Ev = "[object Arguments]", Dv = "[object Array]", Ov = "[object Boolean]", kv = "[object Date]", Av = "[object Error]", jv = "[object Function]", Mv = "[object GeneratorFunction]", Nv = "[object Map]", Pv = "[object Number]", Fv = "[object Object]", Iv = "[object RegExp]", Lv = "[object Set]", Rv = "[object String]", zv = "[object Symbol]", Bv = "[object WeakMap]", Vv = "[object ArrayBuffer]", Hv = "[object DataView]", Uv = "[object Float32Array]", Wv = "[object Float64Array]", Gv = "[object Int8Array]", Kv = "[object Int16Array]", qv = "[object Int32Array]", Jv = "[object Uint8Array]", Yv = "[object Uint8ClampedArray]", Xv = "[object Uint16Array]", Zv = "[object Uint32Array]", Qv = {};
Qv[Ev] = Qv[Dv] = Qv[Vv] = Qv[Hv] = Qv[Ov] = Qv[kv] = Qv[Uv] = Qv[Wv] = Qv[Gv] = Qv[Kv] = Qv[qv] = Qv[Nv] = Qv[Pv] = Qv[Fv] = Qv[Iv] = Qv[Lv] = Qv[Rv] = Qv[zv] = Qv[Jv] = Qv[Yv] = Qv[Xv] = Qv[Zv] = !0, Qv[Av] = Qv[jv] = Qv[Bv] = !1;
function $v(e, t, n, r, i, a) {
	var o, s = t & Cv, c = t & wv, l = t & Tv;
	if (n && (o = i ? n(e, r, i, a) : n(e)), o !== void 0) return o;
	if (!gp(e)) return e;
	var u = sp(e);
	if (u) {
		if (o = R_(e), !s) return Jp(e, o);
	} else {
		var d = I_(e), f = d == jv || d == Mv;
		if (km(e)) return l_(e, s);
		if (d == Fv || d == Ev || f && !i) {
			if (o = c || f ? {} : mv(e), !s) return c ? __(e, i_(o, e)) : h_(e, r_(o, e));
		} else {
			if (!Qv[d]) return i ? e : {};
			o = pv(e, d, s);
		}
	}
	a ||= new n_();
	var p = a.get(e);
	if (p) return p;
	a.set(e, o), Sv(e) ? e.forEach(function(r) {
		o.add($v(r, t, n, r, e, a));
	}) : vv(e) && e.forEach(function(r, i) {
		o.set(i, $v(r, t, n, i, e, a));
	});
	var m = u ? void 0 : (l ? c ? b_ : y_ : c ? yh : hh)(e);
	return nm(m || e, function(r, i) {
		m && (i = r, r = e[i]), lm(o, i, $v(r, t, n, i, e, a));
	}), o;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_setCacheAdd.js
var ey = "__lodash_hash_undefined__";
function ty(e) {
	return this.__data__.set(e, ey), this;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_setCacheHas.js
function ny(e) {
	return this.__data__.has(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_SetCache.js
function ry(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.__data__ = new Xh(); ++t < n;) this.add(e[t]);
}
ry.prototype.add = ry.prototype.push = ty, ry.prototype.has = ny;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arraySome.js
function iy(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
	return !1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cacheHas.js
function ay(e, t) {
	return e.has(t);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_equalArrays.js
var oy = 1, sy = 2;
function cy(e, t, n, r, i, a) {
	var o = n & oy, s = e.length, c = t.length;
	if (s != c && !(o && c > s)) return !1;
	var l = a.get(e), u = a.get(t);
	if (l && u) return l == t && u == e;
	var d = -1, f = !0, p = n & sy ? new ry() : void 0;
	for (a.set(e, t), a.set(t, e); ++d < s;) {
		var m = e[d], h = t[d];
		if (r) var g = o ? r(h, m, d, t, e, a) : r(m, h, d, e, t, a);
		if (g !== void 0) {
			if (g) continue;
			f = !1;
			break;
		}
		if (p) {
			if (!iy(t, function(e, t) {
				if (!ay(p, t) && (m === e || i(m, e, n, r, a))) return p.push(t);
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
function ly(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e, r) {
		n[++t] = [r, e];
	}), n;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_setToArray.js
function uy(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e) {
		n[++t] = e;
	}), n;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_equalByTag.js
var dy = 1, fy = 2, py = "[object Boolean]", my = "[object Date]", hy = "[object Error]", gy = "[object Map]", _y = "[object Number]", vy = "[object RegExp]", yy = "[object Set]", by = "[object String]", xy = "[object Symbol]", Sy = "[object ArrayBuffer]", Cy = "[object DataView]", wy = Gf ? Gf.prototype : void 0, Ty = wy ? wy.valueOf : void 0;
function Ey(e, t, n, r, i, a, o) {
	switch (n) {
		case Cy:
			if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
			e = e.buffer, t = t.buffer;
		case Sy: return !(e.byteLength != t.byteLength || !a(new z_(e), new z_(t)));
		case py:
		case my:
		case _y: return sm(+e, +t);
		case hy: return e.name == t.name && e.message == t.message;
		case vy:
		case by: return e == t + "";
		case gy: var s = ly;
		case yy:
			var c = r & dy;
			if (s ||= uy, e.size != t.size && !c) return !1;
			var l = o.get(e);
			if (l) return l == t;
			r |= fy, o.set(e, t);
			var u = cy(s(e), s(t), r, i, a, o);
			return o.delete(e), u;
		case xy: if (Ty) return Ty.call(e) == Ty.call(t);
	}
	return !1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_equalObjects.js
var Dy = 1, Oy = Object.prototype.hasOwnProperty;
function ky(e, t, n, r, i, a) {
	var o = n & Dy, s = y_(e), c = s.length;
	if (c != y_(t).length && !o) return !1;
	for (var l = c; l--;) {
		var u = s[l];
		if (!(o ? u in t : Oy.call(t, u))) return !1;
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
var Ay = 1, jy = "[object Arguments]", My = "[object Array]", Ny = "[object Object]", Py = Object.prototype.hasOwnProperty;
function Fy(e, t, n, r, i, a) {
	var o = sp(e), s = sp(t), c = o ? My : I_(e), l = s ? My : I_(t);
	c = c == jy ? Ny : c, l = l == jy ? Ny : l;
	var u = c == Ny, d = l == Ny, f = c == l;
	if (f && km(e)) {
		if (!km(t)) return !1;
		o = !0, u = !1;
	}
	if (f && !u) return a ||= new n_(), o || ch(e) ? cy(e, t, n, r, i, a) : Ey(e, t, c, n, r, i, a);
	if (!(n & Ay)) {
		var p = u && Py.call(e, "__wrapped__"), m = d && Py.call(t, "__wrapped__");
		if (p || m) {
			var h = p ? e.value() : e, g = m ? t.value() : t;
			return a ||= new n_(), i(h, g, n, r, a);
		}
	}
	return f ? (a ||= new n_(), ky(e, t, n, r, i, a)) : !1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsEqual.js
function Iy(e, t, n, r, i) {
	return e === t ? !0 : e == null || t == null || !rp(e) && !rp(t) ? e !== e && t !== t : Fy(e, t, n, r, Iy, i);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/now.js
var Ly = function() {
	return Wf.Date.now();
}, Ry = "Expected a function", zy = Math.max, By = Math.min;
function Vy(e, t, n) {
	var r, i, a, o, s, c, l = 0, u = !1, d = !1, f = !0;
	if (typeof e != "function") throw TypeError(Ry);
	t = Sp(t) || 0, gp(n) && (u = !!n.leading, d = "maxWait" in n, a = d ? zy(Sp(n.maxWait) || 0, t) : a, f = "trailing" in n ? !!n.trailing : f);
	function p(t) {
		var n = r, a = i;
		return r = i = void 0, l = t, o = e.apply(a, n), o;
	}
	function m(e) {
		return l = e, s = setTimeout(_, t), u ? p(e) : o;
	}
	function h(e) {
		var n = e - c, r = e - l, i = t - n;
		return d ? By(i, a - r) : i;
	}
	function g(e) {
		var n = e - c, r = e - l;
		return c === void 0 || n >= t || n < 0 || d && r >= a;
	}
	function _() {
		var e = Ly();
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
		return s === void 0 ? o : v(Ly());
	}
	function x() {
		var e = Ly(), n = g(e);
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
function Hy(e) {
	var t = e == null ? 0 : e.length;
	return t ? e[t - 1] : void 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_parent.js
function Uy(e, t) {
	return t.length < 2 ? e : cg(e, Cg(t, 0, -1));
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isEqual.js
function Wy(e, t) {
	return Iy(e, t);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseUnset.js
var Gy = Object.prototype.hasOwnProperty;
function Ky(e, t) {
	t = ag(t, e);
	var n = -1, r = t.length;
	if (!r) return !0;
	for (; ++n < r;) {
		var i = sg(t[n]);
		if (i === "__proto__" && !Gy.call(e, "__proto__") || (i === "constructor" || i === "prototype") && n < r - 1) return !1;
	}
	var a = Uy(e, t);
	return a == null || delete a[sg(Hy(t))];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_customOmitClone.js
function qy(e) {
	return Sg(e) ? void 0 : e;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/omit.js
var Jy = 1, Yy = 2, Xy = 4, Zy = mg(function(e, t) {
	var n = {};
	if (e == null) return n;
	var r = !1;
	t = op(t, function(t) {
		return t = ag(t, e), r ||= t.length > 1, t;
	}), um(e, b_(e), n), r && (n = $v(n, Jy | Yy | Xy, qy));
	for (var i = t.length; i--;) Ky(n, t[i]);
	return n;
}), Qy = "Expected a function";
function $y(e, t, n) {
	var r = !0, i = !0;
	if (typeof e != "function") throw TypeError(Qy);
	return gp(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), Vy(e, t, {
		leading: r,
		maxWait: t,
		trailing: i
	});
}
var eb = { seekBar: "_seekBar_16dv7_14" };
//#endregion
//#region src/audio/SeekBar/SeekBar.tsx
function tb({ value: e = 0, className: t, ...n }) {
	let { translate: r } = z(), [i, a] = T(e), o = S(() => $y(a, 10), []);
	return _(() => {
		o(e);
	}, [e, o]), /* @__PURE__ */ (0, R.jsx)("input", {
		type: "range",
		className: (0, L.default)(eb.seekBar, t),
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
var nb = {
	avatarWithDetails: "_avatarWithDetails_10imw_8",
	title: "_title_10imw_17",
	details: "_details_10imw_28"
}, rb = { flex: "_flex_4dswl_9" };
//#endregion
//#region src/core/utils/Flex/Flex.ts
function B({ as: e = "div", display: t = "flex", direction: n = "row", align: r = "start", justify: i = "start", gap: a = "0", wrap: s = "nowrap", className: c, children: l, ...u }) {
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
		className: (0, L.default)(rb.flex, c),
		style: d
	}, l);
}
//#endregion
//#region src/core/AvatarWithDetails/AvatarWithDetails.tsx
function ib({ as: e, className: t, details: n, avatar: r, title: i, ...a }) {
	return /* @__PURE__ */ (0, R.jsxs)(e || "div", {
		className: (0, L.default)(nb.avatarWithDetails, t),
		...a,
		children: [r, /* @__PURE__ */ (0, R.jsxs)(B, {
			direction: "column",
			children: [/* @__PURE__ */ (0, R.jsx)("span", {
				className: nb.title,
				children: i
			}), /* @__PURE__ */ (0, R.jsx)("span", {
				className: nb.details,
				children: n
			})]
		})]
	});
}
//#endregion
//#region src/core/viewmodel/Disposables.ts
var ab = class {
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
}, ob = class {
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
}, sb = class {
	listeners = /* @__PURE__ */ new Set();
	add = (e) => (this.listeners.add(e), () => {
		this.listeners.delete(e);
	});
	emit = () => {
		for (let e of this.listeners) e();
	};
}, cb = class {
	subs;
	snapshot;
	props;
	disposables = new ab();
	constructor(e, t) {
		this.props = e, this.subs = new sb(), this.snapshot = new ob(t, () => {
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
}, lb = class {
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
function ub(e) {
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
function db(e, t) {
	return S(() => {
		let n = new lb(e);
		return Object.assign(n, t), n;
	}, [e, t]);
}
//#endregion
//#region src/core/viewmodel/useViewModel.ts
function V(e) {
	return E(e.subscribe, e.getSnapshot, e.getSnapshot);
}
//#endregion
//#region src/core/MemberAvatar/MemberAvatarView.tsx
function fb(e) {
	let { name: t, id: n, url: r, size: i } = V(e.vm);
	return /* @__PURE__ */ (0, R.jsx)(D, {
		className: e.classNames,
		name: t,
		id: n,
		src: r,
		size: i
	});
}
//#endregion
//#region ../../node_modules/.pnpm/matrix-web-i18n@3.6.0_supports-color@10.2.2/node_modules/matrix-web-i18n/lib/utils.js
function pb(e) {
	return e.toLowerCase().replace("_", "-");
}
function mb(e) {
	let t = [], n = pb(e), r = n.split("-");
	return r.length === 2 && r[0] === r[1] ? t.push(r[0]) : (t.push(n), r.length === 2 && t.push(r[0])), t;
}
//#endregion
//#region ../../node_modules/.pnpm/matrix-web-i18n@3.6.0_supports-color@10.2.2/node_modules/matrix-web-i18n/lib/index.js
var hb = "|", gb = /* @__PURE__ */ P(((e, t) => {
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
})), _b = /* @__PURE__ */ P(((e, t) => {
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
})), vb = /* @__PURE__ */ P(((e, t) => {
	var n = _b();
	t.exports = function() {
		return n() && !!Symbol.toStringTag;
	};
})), yb = /* @__PURE__ */ P(((e, t) => {
	t.exports = Object;
})), bb = /* @__PURE__ */ P(((e, t) => {
	t.exports = Error;
})), xb = /* @__PURE__ */ P(((e, t) => {
	t.exports = EvalError;
})), Sb = /* @__PURE__ */ P(((e, t) => {
	t.exports = RangeError;
})), Cb = /* @__PURE__ */ P(((e, t) => {
	t.exports = ReferenceError;
})), wb = /* @__PURE__ */ P(((e, t) => {
	t.exports = SyntaxError;
})), Tb = /* @__PURE__ */ P(((e, t) => {
	t.exports = TypeError;
})), Eb = /* @__PURE__ */ P(((e, t) => {
	t.exports = URIError;
})), Db = /* @__PURE__ */ P(((e, t) => {
	t.exports = Math.abs;
})), Ob = /* @__PURE__ */ P(((e, t) => {
	t.exports = Math.floor;
})), kb = /* @__PURE__ */ P(((e, t) => {
	t.exports = Math.max;
})), Ab = /* @__PURE__ */ P(((e, t) => {
	t.exports = Math.min;
})), jb = /* @__PURE__ */ P(((e, t) => {
	t.exports = Math.pow;
})), Mb = /* @__PURE__ */ P(((e, t) => {
	t.exports = Math.round;
})), Nb = /* @__PURE__ */ P(((e, t) => {
	t.exports = Number.isNaN || function(e) {
		return e !== e;
	};
})), Pb = /* @__PURE__ */ P(((e, t) => {
	var n = Nb();
	t.exports = function(e) {
		return n(e) || e === 0 ? e : e < 0 ? -1 : 1;
	};
})), Fb = /* @__PURE__ */ P(((e, t) => {
	t.exports = Object.getOwnPropertyDescriptor;
})), Ib = /* @__PURE__ */ P(((e, t) => {
	var n = Fb();
	if (n) try {
		n([], "length");
	} catch {
		n = null;
	}
	t.exports = n;
})), Lb = /* @__PURE__ */ P(((e, t) => {
	var n = Object.defineProperty || !1;
	if (n) try {
		n({}, "a", { value: 1 });
	} catch {
		n = !1;
	}
	t.exports = n;
})), Rb = /* @__PURE__ */ P(((e, t) => {
	var n = typeof Symbol < "u" && Symbol, r = _b();
	t.exports = function() {
		return typeof n != "function" || typeof Symbol != "function" || typeof n("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : r();
	};
})), zb = /* @__PURE__ */ P(((e, t) => {
	t.exports = typeof Reflect < "u" && Reflect.getPrototypeOf || null;
})), Bb = /* @__PURE__ */ P(((e, t) => {
	t.exports = yb().getPrototypeOf || null;
})), Vb = /* @__PURE__ */ P(((e, t) => {
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
})), Hb = /* @__PURE__ */ P(((e, t) => {
	var n = Vb();
	t.exports = Function.prototype.bind || n;
})), Ub = /* @__PURE__ */ P(((e, t) => {
	t.exports = Function.prototype.call;
})), Wb = /* @__PURE__ */ P(((e, t) => {
	t.exports = Function.prototype.apply;
})), Gb = /* @__PURE__ */ P(((e, t) => {
	t.exports = typeof Reflect < "u" && Reflect && Reflect.apply;
})), Kb = /* @__PURE__ */ P(((e, t) => {
	var n = Hb(), r = Wb(), i = Ub();
	t.exports = Gb() || n.call(i, r);
})), qb = /* @__PURE__ */ P(((e, t) => {
	var n = Hb(), r = Tb(), i = Ub(), a = Kb();
	t.exports = function(e) {
		if (e.length < 1 || typeof e[0] != "function") throw new r("a function is required");
		return a(n, i, e);
	};
})), Jb = /* @__PURE__ */ P(((e, t) => {
	var n = qb(), r = Ib(), i;
	try {
		i = [].__proto__ === Array.prototype;
	} catch (e) {
		if (!e || typeof e != "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") throw e;
	}
	var a = !!i && r && r(Object.prototype, "__proto__"), o = Object, s = o.getPrototypeOf;
	t.exports = a && typeof a.get == "function" ? n([a.get]) : typeof s == "function" && function(e) {
		return s(e == null ? e : o(e));
	};
})), Yb = /* @__PURE__ */ P(((e, t) => {
	var n = zb(), r = Bb(), i = Jb();
	t.exports = n ? function(e) {
		return n(e);
	} : r ? function(e) {
		if (!e || typeof e != "object" && typeof e != "function") throw TypeError("getProto: not an object");
		return r(e);
	} : i ? function(e) {
		return i(e);
	} : null;
})), Xb = /* @__PURE__ */ P(((e, t) => {
	var n = Function.prototype.call, r = Object.prototype.hasOwnProperty;
	t.exports = Hb().call(n, r);
})), Zb = /* @__PURE__ */ P(((e, t) => {
	var n, r = yb(), i = bb(), a = xb(), o = Sb(), s = Cb(), c = wb(), l = Tb(), u = Eb(), d = Db(), f = Ob(), p = kb(), m = Ab(), h = jb(), g = Mb(), _ = Pb(), v = Function, y = function(e) {
		try {
			return v("\"use strict\"; return (" + e + ").constructor;")();
		} catch {}
	}, b = Ib(), x = Lb(), S = function() {
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
	}() : S, w = Rb()(), T = Yb(), E = Bb(), ee = zb(), D = Wb(), te = Ub(), O = {}, k = typeof Uint8Array > "u" || !T ? n : T(Uint8Array), ne = {
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
		ne["%Error.prototype%"] = T(T(e));
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
		return ne[t] = n, n;
	}, ie = {
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
	}, A = Hb(), ae = Xb(), oe = A.call(te, Array.prototype.concat), se = A.call(D, Array.prototype.splice), ce = A.call(te, String.prototype.replace), le = A.call(te, String.prototype.slice), ue = A.call(te, RegExp.prototype.exec), de = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, fe = /\\(\\)?/g, j = function(e) {
		var t = le(e, 0, 1), n = le(e, -1);
		if (t === "%" && n !== "%") throw new c("invalid intrinsic syntax, expected closing `%`");
		if (n === "%" && t !== "%") throw new c("invalid intrinsic syntax, expected opening `%`");
		var r = [];
		return ce(e, de, function(e, t, n, i) {
			r[r.length] = n ? ce(i, fe, "$1") : t || e;
		}), r;
	}, pe = function(e, t) {
		var n = e, r;
		if (ae(ie, n) && (r = ie[n], n = "%" + r[0] + "%"), ae(ne, n)) {
			var i = ne[n];
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
		if (ue(/^%?[^%]*%?$/, e) === null) throw new c("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
		var n = j(e), r = n.length > 0 ? n[0] : "", i = pe("%" + r + "%", t), a = i.name, o = i.value, s = !1, u = i.alias;
		u && (r = u[0], se(n, oe([0, 1], u)));
		for (var d = 1, f = !0; d < n.length; d += 1) {
			var p = n[d], m = le(p, 0, 1), h = le(p, -1);
			if ((m === "\"" || m === "'" || m === "`" || h === "\"" || h === "'" || h === "`") && m !== h) throw new c("property names with quotes must have matching quotes");
			if ((p === "constructor" || !f) && (s = !0), r += "." + p, a = "%" + r + "%", ae(ne, a)) o = ne[a];
			else if (o != null) {
				if (!(p in o)) {
					if (!t) throw new l("base intrinsic for " + e + " exists, but the property is not available.");
					return;
				}
				if (b && d + 1 >= n.length) {
					var g = b(o, p);
					f = !!g, o = f && "get" in g && !("originalValue" in g.get) ? g.get : o[p];
				} else f = ae(o, p), o = o[p];
				f && !s && (ne[a] = o);
			}
		}
		return o;
	};
})), Qb = /* @__PURE__ */ P(((e, t) => {
	var n = Zb(), r = qb(), i = r([n("%String.prototype.indexOf%")]);
	t.exports = function(e, t) {
		var a = n(e, !!t);
		return typeof a == "function" && i(e, ".prototype.") > -1 ? r([a]) : a;
	};
})), $b = /* @__PURE__ */ P(((e, t) => {
	var n = vb()(), r = Qb()("Object.prototype.toString"), i = function(e) {
		return n && e && typeof e == "object" && Symbol.toStringTag in e ? !1 : r(e) === "[object Arguments]";
	}, a = function(e) {
		return i(e) ? !0 : typeof e == "object" && !!e && "length" in e && typeof e.length == "number" && e.length >= 0 && r(e) !== "[object Array]" && "callee" in e && r(e.callee) === "[object Function]";
	}, o = function() {
		return i(arguments);
	}();
	i.isLegacyArguments = a, t.exports = o ? i : a;
})), ex = /* @__PURE__ */ P(((e, t) => {
	var n = Qb(), r = vb()(), i = Xb(), a = Ib(), o;
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
})), tx = /* @__PURE__ */ P(((e, t) => {
	var n = Qb(), r = ex(), i = n("RegExp.prototype.exec"), a = Tb();
	t.exports = function(e) {
		if (!r(e)) throw new a("`regex` must be a RegExp");
		return function(t) {
			return i(e, t) !== null;
		};
	};
})), nx = /* @__PURE__ */ P(((e, t) => {
	var n = function* () {}.constructor;
	t.exports = () => n;
})), rx = /* @__PURE__ */ P(((e, t) => {
	var n = Qb(), r = tx()(/^\s*(?:function)?\*/), i = vb()(), a = Yb(), o = n("Object.prototype.toString"), s = n("Function.prototype.toString"), c = nx();
	t.exports = function(e) {
		if (typeof e != "function") return !1;
		if (r(s(e))) return !0;
		if (!i) return o(e) === "[object GeneratorFunction]";
		if (!a) return !1;
		var t = c();
		return t && a(e) === t.prototype;
	};
})), ix = /* @__PURE__ */ P(((e, t) => {
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
})), ax = /* @__PURE__ */ P(((e, t) => {
	var n = ix(), r = Object.prototype.toString, i = Object.prototype.hasOwnProperty, a = function(e, t, n) {
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
})), ox = /* @__PURE__ */ P(((e, t) => {
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
})), sx = /* @__PURE__ */ P(((e, t) => {
	var n = ox(), r = typeof globalThis > "u" ? global : globalThis;
	t.exports = function() {
		for (var e = [], t = 0; t < n.length; t++) typeof r[n[t]] == "function" && (e[e.length] = n[t]);
		return e;
	};
})), cx = /* @__PURE__ */ P(((e, t) => {
	var n = Lb(), r = wb(), i = Tb(), a = Ib();
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
})), lx = /* @__PURE__ */ P(((e, t) => {
	var n = Lb(), r = function() {
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
})), ux = /* @__PURE__ */ P(((e, t) => {
	var n = Zb(), r = cx(), i = lx()(), a = Ib(), o = Tb(), s = n("%Math.floor%");
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
})), dx = /* @__PURE__ */ P(((e, t) => {
	var n = Hb(), r = Wb(), i = Kb();
	t.exports = function() {
		return i(n, r, arguments);
	};
})), fx = /* @__PURE__ */ P(((e, t) => {
	var n = ux(), r = Lb(), i = qb(), a = dx();
	t.exports = function(e) {
		var t = i(arguments), r = e.length - (arguments.length - 1);
		return n(t, 1 + (r > 0 ? r : 0), !0);
	}, r ? r(t.exports, "apply", { value: a }) : t.exports.apply = a;
})), px = /* @__PURE__ */ P(((e, t) => {
	var n = ax(), r = sx(), i = fx(), a = Qb(), o = Ib(), s = Yb(), c = a("Object.prototype.toString"), l = vb()(), u = typeof globalThis > "u" ? global : globalThis, d = r(), f = a("String.prototype.slice"), p = a("Array.prototype.indexOf", !0) || function(e, t) {
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
})), mx = /* @__PURE__ */ P(((e, t) => {
	var n = px();
	t.exports = function(e) {
		return !!n(e);
	};
})), hx = /* @__PURE__ */ P(((e) => {
	var t = $b(), n = rx(), r = px(), i = mx();
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
		return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(e) : i(e) || ce(e);
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
	function ne(e) {
		return c(e) === "[object WeakMap]";
	}
	ne.working = typeof WeakMap < "u" && ne(/* @__PURE__ */ new WeakMap());
	function re(e) {
		return typeof WeakMap > "u" ? !1 : ne.working ? ne(e) : e instanceof WeakMap;
	}
	e.isWeakMap = re;
	function ie(e) {
		return c(e) === "[object WeakSet]";
	}
	ie.working = typeof WeakSet < "u" && ie(/* @__PURE__ */ new WeakSet());
	function A(e) {
		return ie(e);
	}
	e.isWeakSet = A;
	function ae(e) {
		return c(e) === "[object ArrayBuffer]";
	}
	ae.working = typeof ArrayBuffer < "u" && ae(/* @__PURE__ */ new ArrayBuffer());
	function oe(e) {
		return typeof ArrayBuffer > "u" ? !1 : ae.working ? ae(e) : e instanceof ArrayBuffer;
	}
	e.isArrayBuffer = oe;
	function se(e) {
		return c(e) === "[object DataView]";
	}
	se.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && se(new DataView(/* @__PURE__ */ new ArrayBuffer(1), 0, 1));
	function ce(e) {
		return typeof DataView > "u" ? !1 : se.working ? se(e) : e instanceof DataView;
	}
	e.isDataView = ce;
	var le = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
	function ue(e) {
		return c(e) === "[object SharedArrayBuffer]";
	}
	function de(e) {
		return le !== void 0 && (ue.working === void 0 && (ue.working = ue(new le())), ue.working ? ue(e) : e instanceof le);
	}
	e.isSharedArrayBuffer = de;
	function fe(e) {
		return c(e) === "[object AsyncFunction]";
	}
	e.isAsyncFunction = fe;
	function j(e) {
		return c(e) === "[object Map Iterator]";
	}
	e.isMapIterator = j;
	function pe(e) {
		return c(e) === "[object Set Iterator]";
	}
	e.isSetIterator = pe;
	function me(e) {
		return c(e) === "[object Generator]";
	}
	e.isGeneratorObject = me;
	function he(e) {
		return c(e) === "[object WebAssembly.Module]";
	}
	e.isWebAssemblyCompiledModule = he;
	function ge(e) {
		return m(e, l);
	}
	e.isNumberObject = ge;
	function _e(e) {
		return m(e, u);
	}
	e.isStringObject = _e;
	function M(e) {
		return m(e, d);
	}
	e.isBooleanObject = M;
	function ve(e) {
		return o && m(e, f);
	}
	e.isBigIntObject = ve;
	function ye(e) {
		return s && m(e, p);
	}
	e.isSymbolObject = ye;
	function be(e) {
		return ge(e) || _e(e) || M(e) || ve(e) || ye(e);
	}
	e.isBoxedPrimitive = be;
	function xe(e) {
		return typeof Uint8Array < "u" && (oe(e) || de(e));
	}
	e.isAnyArrayBuffer = xe, [
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
})), gx = /* @__PURE__ */ P(((e, t) => {
	t.exports = function(e) {
		return e && typeof e == "object" && typeof e.copy == "function" && typeof e.fill == "function" && typeof e.readUInt8 == "function";
	};
})), _x = /* @__PURE__ */ P(((e, t) => {
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
})), vx = /* @__PURE__ */ P(((e) => {
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
		for (var a = [], o = 0, s = t.length; o < s; ++o) ie(t, String(o)) ? a.push(m(e, t, n, r, String(o), !0)) : a.push("");
		return i.forEach(function(i) {
			i.match(/^\d+$/) || a.push(m(e, t, n, r, i, !0));
		}), a;
	}
	function m(e, t, n, r, i, a) {
		var o, s, c = Object.getOwnPropertyDescriptor(t, i) || { value: t[i] };
		if (c.get ? s = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (s = e.stylize("[Setter]", "special")), ie(r, i) || (o = "[" + i + "]"), s || (e.seen.indexOf(c.value) < 0 ? (s = v(n) ? u(e, c.value, null) : u(e, c.value, n - 1), s.indexOf("\n") > -1 && (s = a ? s.split("\n").map(function(e) {
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
	e.types = hx();
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
	e.isPrimitive = te, e.isBuffer = gx();
	function O(e) {
		return Object.prototype.toString.call(e);
	}
	function k(e) {
		return e < 10 ? "0" + e.toString(10) : e.toString(10);
	}
	var ne = [
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
			k(e.getHours()),
			k(e.getMinutes()),
			k(e.getSeconds())
		].join(":");
		return [
			e.getDate(),
			ne[e.getMonth()],
			t
		].join(" ");
	}
	e.log = function() {
		console.log("%s - %s", re(), e.format.apply(e, arguments));
	}, e.inherits = _x(), e._extend = function(e, t) {
		if (!t || !T(t)) return e;
		for (var n = Object.keys(t), r = n.length; r--;) e[n[r]] = t[n[r]];
		return e;
	};
	function ie(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t);
	}
	var A = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
	e.promisify = function(e) {
		if (typeof e != "function") throw TypeError("The \"original\" argument must be of type Function");
		if (A && e[A]) {
			var n = e[A];
			if (typeof n != "function") throw TypeError("The \"util.promisify.custom\" argument must be of type Function");
			return Object.defineProperty(n, A, {
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
		return Object.setPrototypeOf(n, Object.getPrototypeOf(e)), A && Object.defineProperty(n, A, {
			value: n,
			enumerable: !1,
			writable: !1,
			configurable: !0
		}), Object.defineProperties(n, t(e));
	}, e.promisify.custom = A;
	function ae(e, t) {
		if (!e) {
			var n = /* @__PURE__ */ Error("Promise was rejected with a falsy value");
			n.reason = e, e = n;
		}
		return t(e);
	}
	function oe(e) {
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
				process.nextTick(ae.bind(null, e, a));
			});
		}
		return Object.setPrototypeOf(n, Object.getPrototypeOf(e)), Object.defineProperties(n, t(e)), n;
	}
	e.callbackify = oe;
})), yx = /* @__PURE__ */ P(((e) => {
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
})), bx = /* @__PURE__ */ P(((e, t) => {
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
})), xx = /* @__PURE__ */ P(((e, t) => {
	var n = [].indexOf;
	t.exports = function(e, t) {
		if (n) return e.indexOf(t);
		for (var r = 0; r < e.length; ++r) if (e[r] === t) return r;
		return -1;
	};
})), Sx = /* @__PURE__ */ P(((e, t) => {
	var n = Array.prototype, r = n.concat, i = n.slice, a = xx();
	function o(e) {
		var t = {}, o = r.apply(n, i.call(arguments, 1));
		for (var s in e) a(o, s) === -1 && (t[s] = e[s]);
		return t;
	}
	t.exports = o;
})), Cx = /* @__PURE__ */ P(((e, t) => {
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
})), wx = /* @__PURE__ */ P(((e, t) => {
	t.exports = Cx();
})), Tx = /* @__PURE__ */ P(((e, t) => {
	var n = wx();
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
})), Ex = /* @__PURE__ */ P(((e, t) => {
	t.exports = function(e, t) {
		var n;
		return t === 0 && "zero" in e && (n = "zero"), n ||= t === 1 ? "one" : "other", e[n];
	};
})), Dx = /* @__PURE__ */ P(((e, t) => {
	t.exports = { counterpart: {
		names: Cx(),
		pluralize: Ex(),
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
})), Ox = /* @__PURE__ */ $e((/* @__PURE__ */ P(((e, t) => {
	var n = gb(), r = vx().isArray, i = vx().isDate, a = yx().sprintf, o = bx(), s = Sx(), c = Tx(), l = "counterpart";
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
		}, this.registerTranslations("en", Dx()), this.setMaxListeners(0);
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
})))(), 1), kx = "i18n/";
Ox.default.setSeparator("|");
var Ax = "en";
Ox.default.setFallbackLocale(Ax);
function jx(e, t) {
	Ox.default.registerTranslations(e, t);
}
function Mx(e) {
	Ox.default.setMissingEntryGenerator(e);
}
function Nx() {
	return Ox.default.getLocale();
}
function Px(e) {
	return Ox.default.setLocale(e);
}
function Fx(e) {
	return e;
}
function Ix(e) {
	return typeof e == "string" && !e.startsWith("missing translation:");
}
var Lx = (e, t) => {
	let n = Ox.default.translate(e, {
		...t,
		fallbackLocale: Ox.default.getLocale()
	});
	if (Ix(n)) return { translated: n };
	let r = Ox.default.translate(e, {
		...t,
		locale: Ax
	});
	return Ix(r) ? {
		translated: r,
		isFallback: !0
	} : {
		translated: e,
		isFallback: !0
	};
};
function Rx(e, t) {
	let n = {
		...t,
		interpolate: !1
	};
	return n && typeof n == "object" && Object.keys(n).forEach((e) => {
		n[e] === void 0 && (console.warn("safeCounterpartTranslate called with undefined interpolation name: " + e), n[e] = "undefined"), n[e] === null && (console.warn("safeCounterpartTranslate called with null interpolation name: " + e), n[e] = "null");
	}), Lx(e, n);
}
var zx = (e, t) => e;
function H(e, t, n) {
	let { translated: r } = Rx(e, t);
	return zx(Ux(r, t, n), e);
}
function Bx(e) {
	return Rx(e, {}).translated;
}
function Vx(e, t, n) {
	let { translated: r, isFallback: i } = Rx(e, t), a = Ux(r, t, n);
	return zx(i ? /* @__PURE__ */ (0, R.jsx)("span", {
		lang: "en",
		children: a
	}) : a, e);
}
function Hx(e) {
	return e.replace(/%\(([^)]*)\)/g, "%\xA0($1)");
}
function Ux(e, t, n) {
	let r = e;
	if (t !== void 0) {
		let e = {};
		for (let n in t) e[`%\\(${n}\\)s`] = t[n];
		r = Wx(r, e);
	}
	if (n !== void 0) {
		let e = {};
		for (let t in n) e[`(<${t}>(.*?)<\\/${t}>|<${t}>|<${t}\\s*\\/>)`] = n[t];
		r = Wx(r, e);
	}
	return r;
}
function Wx(e, t) {
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
async function Gx(e) {
	let t = await qx(), n = e in t ? e : "en", r = await Kx(kx + t[n]);
	Ox.default.registerTranslations(n, r), Ox.default.setLocale(n);
}
async function Kx(e) {
	console.log("Loading language from", e);
	let t = await fetch(e, { method: "GET" });
	if (!t.ok) throw Error(`Failed to load ${e}, got ${t.status}`);
	return t.json();
}
async function qx() {
	let e = `${kx}languages.json?${Date.now()}`, t = await fetch(e, { method: "GET" });
	if (!t.ok) throw Error(`Failed to load ${e}, got ${t.status}`);
	return t.json();
}
var Jx = { scrollbar: "_scrollbar_1d5jg_8" };
//#endregion
//#region src/core/utils/Scrollbar/AutoHideScrollbar.ts
function Yx(e) {
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
		className: (0, L.default)(Jx.scrollbar, n),
		tabIndex: i ?? -1
	}, s);
}
//#endregion
//#region src/core/roving/RovingTabIndex.tsx
function Xx(e) {
	return e instanceof Element && e.matches("input:not([type=\"radio\"]):not([type=\"checkbox\"]), textarea, select, [contenteditable=true]");
}
var Zx = l({
	state: { nodes: [] },
	dispatch: () => {}
});
Zx.displayName = "RovingTabIndexContext";
var Qx = /* @__PURE__ */ function(e) {
	return e.Register = "REGISTER", e.Unregister = "UNREGISTER", e.SetFocus = "SET_FOCUS", e.Update = "UPDATE", e;
}({}), $x = /* @__PURE__ */ function(e) {
	return e.Home = "HOME", e.End = "END", e.ArrowLeft = "ARROW_LEFT", e.ArrowUp = "ARROW_UP", e.ArrowRight = "ARROW_RIGHT", e.ArrowDown = "ARROW_DOWN", e.Tab = "TAB", e;
}({}), eS = (e, t) => {
	if (e === t) return 0;
	let n = e.compareDocumentPosition(t);
	return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}, tS = (e, t) => t >= e.length ? oS(e, e.length - 1) : aS(e, t) || oS(e, t), nS = (e, t) => {
	e.activeNode = tS(e.nodes, t), document.activeElement === document.body && setTimeout(() => e.activeNode?.focus(), 0);
}, rS = (e, t) => {
	switch (t.type) {
		case "REGISTER": return e.activeNode ??= t.payload.node, e.nodes.includes(t.payload.node) ? e : (e.nodes.push(t.payload.node), e.nodes.sort(eS), { ...e });
		case "UNREGISTER": {
			let n = e.nodes.indexOf(t.payload.node);
			return n === -1 ? e : (e.nodes.splice(n, 1)[0] === e.activeNode && nS(e, n), { ...e });
		}
		case "SET_FOCUS": return e.activeNode === t.payload.node ? e : (e.activeNode = t.payload.node, { ...e });
		case "UPDATE": return e.nodes.sort(eS), { ...e };
		default: return e;
	}
}, iS = (e, t, n, r) => {
	if (r === 1) {
		for (let i = t; i < n; i += r) if (e[i]?.offsetParent !== null) return e[i];
	} else for (let i = t; i > n; i += r) if (e[i]?.offsetParent !== null) return e[i];
}, aS = (e, t, n = !1) => {
	let r = iS(e, t, e.length, 1);
	return r || !n ? r : iS(e.slice(0, t), 0, t, 1);
}, oS = (e, t, n = !1) => {
	let r = iS(e, t, -1, -1);
	if (r || !n) return r;
	let i = e.slice(t + 1);
	return iS(i, i.length - 1, -1, -1);
}, sS = (e) => {
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
}, cS = (e, t, n, r = !1) => {
	if (e.length === 0 || !t) return;
	let i = e.indexOf(t) + (n ? -1 : 1);
	return n ? oS(e, i, r) : aS(e, i, r);
}, lS = (e, t, n, r) => e === "TAB" ? {
	handled: !0,
	focusNode: cS(t, n, r)
} : { handled: !1 }, uS = (e, t, n, r, i) => ({
	HOME: {
		enabled: t,
		getFocusNode: (e) => aS(e.nodes, 0)
	},
	END: {
		enabled: t,
		getFocusNode: (e) => oS(e.nodes, e.nodes.length - 1)
	},
	ARROW_DOWN: {
		enabled: n,
		getFocusNode: (e) => cS(e.nodes, e.activeNode, !1, i)
	},
	ARROW_RIGHT: {
		enabled: r,
		getFocusNode: (e) => cS(e.nodes, e.activeNode, !1, i)
	},
	ARROW_UP: {
		enabled: n,
		getFocusNode: (e) => cS(e.nodes, e.activeNode, !0, i)
	},
	ARROW_LEFT: {
		enabled: r,
		getFocusNode: (e) => cS(e.nodes, e.activeNode, !0, i)
	},
	TAB: {
		enabled: !1,
		getFocusNode: () => void 0
	}
}), dS = (e, t, n, r, i, a) => {
	if (!e) return { handled: !1 };
	let o = uS(t, n, r, i, a)[e];
	return o?.enabled ? {
		handled: !0,
		focusNode: o.getFocusNode(t)
	} : { handled: !1 };
}, fS = ({ children: e, handleHomeEnd: t, handleUpDown: n, handleLeftRight: r, handleLoop: i, handleInputFields: a, scrollIntoView: o, onKeyDown: s, getAction: c = sS }) => {
	let [l, u] = C(rS, { nodes: [] }), d = S(() => ({
		state: l,
		dispatch: u
	}), [l]), f = h((e) => {
		if (s && (s(e, d.state, d.dispatch), e.defaultPrevented)) return;
		let l = c(e), { handled: f, focusNode: p } = !a && Xx(e.target) ? lS(l, d.state.nodes, d.state.activeNode, e.shiftKey) : dS(l, d.state, t ?? !1, n ?? !1, r ?? !1, i ?? !1);
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
	return /* @__PURE__ */ (0, R.jsx)(Zx.Provider, {
		value: d,
		children: e({
			onKeyDownHandler: f,
			onDragEndHandler: p
		})
	});
}, pS = (e) => {
	let t = g(Zx), n = w(null);
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
}, mS = (e) => e.parentElement ?? void 0, hS = (e) => {
	let t = e.children[0];
	return t instanceof HTMLElement ? t : void 0;
}, gS = (e) => e === $x.ArrowLeft || e === $x.ArrowRight || e === $x.ArrowUp || e === $x.ArrowDown, _S = (e, t, n) => {
	if (!t.activeNode) return;
	let r = t.nodes.indexOf(t.activeNode);
	if (r !== -1) {
		if (e === $x.ArrowLeft) return oS(t.nodes, r - 1, n);
		if (e === $x.ArrowRight) return aS(t.nodes, r + 1, n);
	}
}, vS = (e, t, n, r, i) => {
	if (!t.activeNode) return;
	let a = r(t.activeNode), o = n(t.activeNode);
	if (!a || !o) return;
	let s = Array.from(a.children).indexOf(o), c = t.nodes.indexOf(t.activeNode);
	if (s === -1 || c === -1) return;
	let l = e === $x.ArrowUp ? c - s - 1 : c - s + a.children.length, u = r(t.nodes[l]);
	if (u) {
		if (!(u instanceof HTMLElement) || u.offsetParent === null || u.children.length === 0) return;
		let e = Math.min(s, u.children.length - 1), n = i(u.children[e]);
		if (n?.offsetParent && t.nodes.includes(n)) return n;
	}
}, yS = (e, t, n, r) => typeof e == "function" ? e(t, n, r) : e ?? !0, bS = ({ children: e, getAction: t, getGridCell: n = mS, getRow: r, getRovingNode: i = hS, handleInputFields: a, handleLoop: o, moveFocus: s, onGridNavigation: c, onKeyDown: l, scrollIntoView: u, ...d }) => {
	let f = h((e) => r?.(e) ?? n(e)?.parentElement ?? void 0, [n, r]), p = h((e, r, d) => {
		if (l?.(e, r, d), e.defaultPrevented) return;
		let p = t?.(e) ?? xS(e);
		if (!gS(p) || !r.activeNode || !a && e.target instanceof HTMLElement && Xx(e.target)) return;
		let m = p === $x.ArrowUp || p === $x.ArrowDown ? vS(p, r, n, f, i) : _S(p, r, o);
		e.preventDefault(), e.stopPropagation(), m && (yS(s, m, e, r) && m.focus(), d({
			type: Qx.SetFocus,
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
	return /* @__PURE__ */ (0, R.jsx)(fS, {
		...d,
		getAction: t,
		handleInputFields: a,
		handleLoop: o,
		onKeyDown: p,
		scrollIntoView: u,
		children: e
	});
}, xS = (e) => {
	switch (e.key) {
		case "ArrowLeft": return $x.ArrowLeft;
		case "ArrowUp": return $x.ArrowUp;
		case "ArrowRight": return $x.ArrowRight;
		case "ArrowDown": return $x.ArrowDown;
		default: return;
	}
}, SS = ({ children: e, inputRef: t }) => {
	let [n, r, i] = pS(t);
	return e({
		onFocus: n,
		isActive: r,
		ref: i
	});
}, CS = (e) => {
	switch (e.key) {
		case "ArrowUp": return $x.ArrowUp;
		case "ArrowDown": return $x.ArrowDown;
		default: return;
	}
}, wS = ({ children: e, ref: t, getAction: n, ...r }) => /* @__PURE__ */ (0, R.jsx)(fS, {
	handleHomeEnd: !0,
	handleLeftRight: !0,
	handleUpDown: !0,
	onKeyDown: (e) => {
		let t = e.target;
		if (t.tagName === "INPUT") return;
		let r = !0;
		switch (n?.(e) ?? CS(e)) {
			case $x.ArrowUp:
			case $x.ArrowDown:
				t.hasAttribute("aria-haspopup") && t.click();
				break;
			default: r = !1;
		}
		r && (e.preventDefault(), e.stopPropagation());
	},
	getAction: n,
	children: ({ onKeyDownHandler: n }) => /* @__PURE__ */ (0, R.jsx)("div", {
		...r,
		onKeyDown: n,
		role: "toolbar",
		ref: t,
		children: e
	})
}), U = {
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
}, TS = (e) => {
	switch (e.key) {
		case "ArrowLeft": return $x.ArrowLeft;
		case "ArrowRight": return $x.ArrowRight;
		case "Home": return $x.Home;
		case "End": return $x.End;
		default: return;
	}
}, ES = ({ categories: e, enabledCategories: t, selectedCategory: n, onAnchorClick: r, pickerBodyId: i, getAction: a }) => {
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
		switch (a?.(t) ?? TS(t)) {
			case $x.ArrowLeft:
				l(-1);
				break;
			case $x.ArrowRight:
				l(1);
				break;
			case $x.Home:
				c(0);
				break;
			case $x.End:
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
	return /* @__PURE__ */ (0, R.jsx)("nav", {
		className: U.header,
		role: "tablist",
		"aria-label": H("emoji|categories"),
		onKeyDown: u,
		children: e.map((e) => {
			let a = (0, L.default)(U.anchor, { [U.anchorSelected]: e.id === n });
			return /* @__PURE__ */ (0, R.jsx)("button", {
				type: "button",
				disabled: !t.includes(e.id),
				ref: d.current[e.id],
				className: a,
				onClick: () => r(e.id),
				title: H(e.untranslatedName),
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
function DS(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M12 4.5a1 1 0 0 1 1 1v10.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 1 1 1.414-1.414L11 16.086V5.5a1 1 0 0 1 1-1" })
	});
}
DS.displayName = "ArrowDownIcon";
var OS = d(DS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/arrow-right.js
function kS(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M11.793 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L16.086 13H5.5a1 1 0 1 1 0-2h10.586l-4.293-4.293a1 1 0 0 1 0-1.414" })
	});
}
kS.displayName = "ArrowRightIcon";
var AS = d(kS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/ask-to-join.js
function jS(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M12 18.156q.478 0 .802-.323.323-.324.323-.802h-2.25q0 .478.323.802.324.323.802.323M8.063 16.47h7.874a.54.54 0 0 0 .394-.169.54.54 0 0 0 0-.788.54.54 0 0 0-.393-.168h-.563V12.7q0-1.237-.675-2.25a3 3 0 0 0-1.856-1.294v-.281a.82.82 0 0 0-.24-.605.82.82 0 0 0-.604-.239.82.82 0 0 0-.844.844v.281A3 3 0 0 0 9.3 10.45a3.97 3.97 0 0 0-.675 2.25v2.644h-.562a.54.54 0 0 0-.394.168.54.54 0 0 0 0 .788.54.54 0 0 0 .394.169M3 19.844V9.719q0-.534.24-1.013.238-.478.66-.787l6.75-5.063q.31-.225.647-.337.338-.113.703-.113.366 0 .703.113.337.112.647.337L20.1 7.92q.422.309.66.787.24.479.24 1.013v10.125q0 .927-.66 1.589-.662.66-1.59.66H5.25q-.928 0-1.59-.66-.66-.66-.66-1.59m2.25 0h13.5V9.719L12 4.656 5.25 9.72z" })
	});
}
jS.displayName = "AskToJoinIcon";
var MS = d(jS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/attachment.js
function NS(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M11.5 22q-2.3 0-3.9-1.6T6 16.5V6q0-1.65 1.175-2.825T10 2t2.825 1.175T14 6v9.5q0 1.05-.725 1.775T11.5 18t-1.775-.725T9 15.5V6.75A.73.73 0 0 1 9.75 6a.73.73 0 0 1 .75.75v8.75q0 .424.287.712.288.288.713.288.424 0 .713-.288a.97.97 0 0 0 .287-.712V6q0-1.05-.725-1.775T10 3.5t-1.775.725T7.5 6v10.5q0 1.65 1.175 2.825T11.5 20.5t2.825-1.175T15.5 16.5V6.75a.73.73 0 0 1 .75-.75.73.73 0 0 1 .75.75v9.75q0 2.3-1.6 3.9T11.5 22" })
	});
}
NS.displayName = "AttachmentIcon";
var PS = d(NS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/block.js
function FS(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M12 22a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12q0-1.35-.437-2.6A8 8 0 0 0 18.3 7.1L7.1 18.3q1.05.825 2.3 1.262T12 20m-6.3-3.1L16.9 5.7a8 8 0 0 0-2.3-1.263A7.8 7.8 0 0 0 12 4Q8.65 4 6.325 6.325T4 12q0 1.35.438 2.6A8 8 0 0 0 5.7 16.9" })
	});
}
FS.displayName = "BlockIcon";
var IS = d(FS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/chat-problem.js
function LS(e, t) {
	return /*#__PURE__*/ (0, R.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ (0, R.jsx)("path", { d: "M12.713 16.713A.97.97 0 0 1 12 17a.97.97 0 0 1-.713-.288A.97.97 0 0 1 11 16q0-.424.287-.713A.97.97 0 0 1 12 15q.424 0 .713.287.287.288.287.713 0 .424-.287.712m0-3.999A.97.97 0 0 1 12 13a.97.97 0 0 1-.713-.287A.97.97 0 0 1 11 12V8q0-.424.287-.713A.97.97 0 0 1 12 7q.424 0 .713.287Q13 7.576 13 8v4q0 .424-.287.713" }), /*#__PURE__*/ (0, R.jsx)("path", { d: "M2.95 16.3a10.2 10.2 0 0 1-.712-2.1A10.2 10.2 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22q-1.125 0-2.2-.238a10.2 10.2 0 0 1-2.1-.712L2.75 22.5a.94.94 0 0 1-1-.25.94.94 0 0 1-.25-1zm4.2 2.8a1 1 0 0 1 .275-.062q.15-.013.275-.013.225 0 .438.038.212.036.412.137a7.4 7.4 0 0 0 1.675.6Q11.1 20 12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12q0 .9.2 1.775t.6 1.675q.176.325.188.688t-.088.712l-.95 3.2z" })]
	});
}
LS.displayName = "ChatProblemIcon";
var RS = d(LS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/chat.js
function zS(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "m1.5 21.25 1.45-4.95a10.2 10.2 0 0 1-.712-2.1A10.2 10.2 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22q-1.125 0-2.2-.238a10.2 10.2 0 0 1-2.1-.712L2.75 22.5a.94.94 0 0 1-1-.25.94.94 0 0 1-.25-1m2.45-1.2 3.2-.95a1 1 0 0 1 .275-.062q.15-.013.275-.013.225 0 .438.038.212.036.412.137a7.4 7.4 0 0 0 1.675.6Q11.1 20 12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12q0 .9.2 1.775t.6 1.675q.176.325.188.688t-.088.712z" })
	});
}
zS.displayName = "ChatIcon";
var BS = d(zS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/check-circle.js
function VS(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "m10.6 13.8-2.15-2.15a.95.95 0 0 0-.7-.275.95.95 0 0 0-.7.275.95.95 0 0 0-.275.7q0 .425.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65a.95.95 0 0 0 .275-.7.95.95 0 0 0-.275-.7.95.95 0 0 0-.7-.275.95.95 0 0 0-.7.275zM12 22a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20" })
	});
}
VS.displayName = "CheckCircleIcon";
var HS = d(VS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/check.js
function US(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M9.55 17.575q-.2 0-.375-.062a.9.9 0 0 1-.325-.213L4.55 13q-.274-.274-.262-.713.012-.437.287-.712a.95.95 0 0 1 .7-.275q.425 0 .7.275L9.55 15.15l8.475-8.475q.274-.275.713-.275.437 0 .712.275.275.274.275.713 0 .437-.275.712l-9.2 9.2q-.15.15-.325.212a1.1 1.1 0 0 1-.375.063" })
	});
}
US.displayName = "CheckIcon";
var WS = d(US);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-down.js
function GS(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M12 14.95q-.2 0-.375-.062a.9.9 0 0 1-.325-.213l-4.6-4.6a.95.95 0 0 1-.275-.7q0-.425.275-.7a.95.95 0 0 1 .7-.275q.425 0 .7.275l3.9 3.9 3.9-3.9a.95.95 0 0 1 .7-.275q.425 0 .7.275a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7l-4.6 4.6q-.15.15-.325.212a1.1 1.1 0 0 1-.375.063" })
	});
}
GS.displayName = "ChevronDownIcon";
var KS = d(GS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-left.js
function qS(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "m13.3 17.3-4.6-4.6a.9.9 0 0 1-.213-.325A1.1 1.1 0 0 1 8.425 12q0-.2.062-.375A.9.9 0 0 1 8.7 11.3l4.6-4.6a.95.95 0 0 1 .7-.275q.425 0 .7.275a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7L10.8 12l3.9 3.9a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275" })
	});
}
qS.displayName = "ChevronLeftIcon";
var JS = d(qS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-right.js
function YS(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M8.7 17.3a.95.95 0 0 1-.275-.7q0-.425.275-.7l3.9-3.9-3.9-3.9a.95.95 0 0 1-.275-.7q0-.425.275-.7a.95.95 0 0 1 .7-.275q.425 0 .7.275l4.6 4.6q.15.15.213.325.062.175.062.375t-.062.375a.9.9 0 0 1-.213.325l-4.6 4.6a.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275" })
	});
}
YS.displayName = "ChevronRightIcon";
var XS = d(YS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-up.js
function ZS(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "m12 10.775-3.9 3.9a.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275.95.95 0 0 1-.275-.7q0-.425.275-.7l4.6-4.6q.15-.15.325-.212Q11.8 8.4 12 8.4t.375.063a.9.9 0 0 1 .325.212l4.6 4.6a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275z" })
	});
}
ZS.displayName = "ChevronUpIcon";
var QS = d(ZS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/close.js
function $S(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M6.293 6.293a1 1 0 0 1 1.414 0L12 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414L13.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.586 12 6.293 7.707a1 1 0 0 1 0-1.414" })
	});
}
$S.displayName = "CloseIcon";
var eC = d($S);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/collapse-all.js
function tC(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "m12 16.975-3.9 3.9a.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275.95.95 0 0 1-.275-.7q0-.425.275-.7l3.875-3.875q.575-.575 1.425-.575t1.425.575l3.875 3.875a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275zm0-9.8 3.9-3.9A.95.95 0 0 1 16.6 3q.425 0 .7.275a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7L13.425 8.55q-.575.575-1.425.575t-1.425-.575L6.7 4.675a.95.95 0 0 1-.275-.7q0-.425.275-.7A.95.95 0 0 1 7.4 3q.425 0 .7.275z" })
	});
}
tC.displayName = "CollapseAllIcon";
var nC = d(tC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/collapse.js
function rC(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M12 11.034a1 1 0 0 0 .29.702l.005.005c.18.18.43.29.705.29h8a1 1 0 0 0 0-2h-5.586L22 3.445a1 1 0 0 0-1.414-1.414L14 8.617V3.031a1 1 0 1 0-2 0zm0 1.963a1 1 0 0 0-.29-.702l-.005-.004A1 1 0 0 0 11 12H3a1 1 0 1 0 0 2h5.586L2 20.586A1 1 0 1 0 3.414 22L10 15.414V21a1 1 0 0 0 2 0z" })
	});
}
rC.displayName = "CollapseIcon";
var iC = d(rC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/delete.js
function aC(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M7 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 5 19V6a.97.97 0 0 1-.713-.287A.97.97 0 0 1 4 5q0-.424.287-.713A.97.97 0 0 1 5 4h4q0-.424.287-.712A.97.97 0 0 1 10 3h4q.424 0 .713.288Q15 3.575 15 4h4q.424 0 .712.287Q20 4.576 20 5t-.288.713A.97.97 0 0 1 19 6v13q0 .824-.587 1.413A1.93 1.93 0 0 1 17 21zM7 6v13h10V6zm2 10q0 .424.287.712Q9.576 17 10 17t.713-.288A.97.97 0 0 0 11 16V9a.97.97 0 0 0-.287-.713A.97.97 0 0 0 10 8a.97.97 0 0 0-.713.287A.97.97 0 0 0 9 9zm4 0q0 .424.287.712.288.288.713.288.424 0 .713-.288A.97.97 0 0 0 15 16V9a.97.97 0 0 0-.287-.713A.97.97 0 0 0 14 8a.97.97 0 0 0-.713.287A.97.97 0 0 0 13 9z" })
	});
}
aC.displayName = "DeleteIcon";
var oC = d(aC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/devices.js
function sC(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M3.5 20q-.625 0-1.062-.437A1.45 1.45 0 0 1 2 18.5q0-.625.438-1.062A1.45 1.45 0 0 1 3.5 17H4V6q0-.824.588-1.412A1.93 1.93 0 0 1 6 4h14q.424 0 .712.287Q21 4.576 21 5t-.288.713A.97.97 0 0 1 20 6H6v11h4.5q.624 0 1.063.438.437.437.437 1.062t-.437 1.063A1.45 1.45 0 0 1 10.5 20zM15 20a.97.97 0 0 1-.713-.288A.97.97 0 0 1 14 19V9q0-.424.287-.713A.97.97 0 0 1 15 8h6q.424 0 .712.287Q22 8.576 22 9v10q0 .424-.288.712A.97.97 0 0 1 21 20zm1-3h4v-7h-4z" })
	});
}
sC.displayName = "DevicesIcon";
var cC = d(sC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/dial-pad.js
function lC(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M12 18.6c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8M6.6 2.4c-.99 0-1.8.81-1.8 1.8S5.61 6 6.6 6s1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0 5.4c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0 5.4c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8M17.4 6c.99 0 1.8-.81 1.8-1.8s-.81-1.8-1.8-1.8-1.8.81-1.8 1.8.81 1.8 1.8 1.8M12 13.2c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m5.4 0c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0-5.4c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m-5.4 0c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0-5.4c-.99 0-1.8.81-1.8 1.8S11.01 6 12 6s1.8-.81 1.8-1.8-.81-1.8-1.8-1.8" })
	});
}
lC.displayName = "DialPadIcon";
var uC = d(lC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/document.js
function dC(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M9 18h6q.424 0 .713-.288A.97.97 0 0 0 16 17a.97.97 0 0 0-.287-.712A.97.97 0 0 0 15 16H9a.97.97 0 0 0-.713.288A.97.97 0 0 0 8 17q0 .424.287.712Q8.576 18 9 18m0-4h6q.424 0 .713-.287A.97.97 0 0 0 16 13a.97.97 0 0 0-.287-.713A.97.97 0 0 0 15 12H9a.97.97 0 0 0-.713.287A.97.97 0 0 0 8 13q0 .424.287.713Q8.576 14 9 14m-3 8q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 20V4q0-.824.588-1.412A1.93 1.93 0 0 1 6 2h7.175a1.98 1.98 0 0 1 1.4.575l4.85 4.85q.275.275.425.638.15.361.15.762V20q0 .824-.587 1.413A1.93 1.93 0 0 1 18 22zm7-14V4H6v16h12V9h-4a.97.97 0 0 1-.713-.287A.97.97 0 0 1 13 8" })
	});
}
dC.displayName = "DocumentIcon";
var fC = d(dC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/download.js
function pC(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M12 15.575q-.2 0-.375-.062a.9.9 0 0 1-.325-.213l-3.6-3.6a.95.95 0 0 1-.275-.7q0-.425.275-.7.274-.275.712-.288t.713.263L11 12.15V5q0-.424.287-.713A.97.97 0 0 1 12 4q.424 0 .713.287Q13 4.576 13 5v7.15l1.875-1.875q.274-.274.713-.263.437.014.712.288a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7l-3.6 3.6q-.15.15-.325.212a1.1 1.1 0 0 1-.375.063M6 20q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 18v-2q0-.424.287-.713A.97.97 0 0 1 5 15q.424 0 .713.287Q6 15.576 6 16v2h12v-2q0-.424.288-.713A.97.97 0 0 1 19 15q.424 0 .712.287.288.288.288.713v2q0 .824-.587 1.413A1.93 1.93 0 0 1 18 20z" })
	});
}
pC.displayName = "DownloadIcon";
var mC = d(pC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/drag-list.js
function hC(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M5 15a.97.97 0 0 1-.713-.287A.97.97 0 0 1 4 14q0-.424.287-.713A.97.97 0 0 1 5 13h14q.424 0 .712.287.288.288.288.713 0 .424-.288.713A.97.97 0 0 1 19 15zm0-4a.97.97 0 0 1-.713-.287A.97.97 0 0 1 4 10q0-.424.287-.713A.97.97 0 0 1 5 9h14q.424 0 .712.287Q20 9.576 20 10t-.288.713A.97.97 0 0 1 19 11z" })
	});
}
hC.displayName = "DragListIcon";
var gC = d(hC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/edit.js
function _C(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", {
			fillRule: "evenodd",
			d: "M15.706 2.637a2 2 0 0 1 2.829 0l2.828 2.828a2 2 0 0 1 0 2.829L9.605 20.052a1 1 0 0 1-.465.263L3.483 21.73a1 1 0 0 1-1.212-1.213l1.414-5.657a1 1 0 0 1 .263-.465zm1.224 7.262L14.102 7.07l-8.544 8.544-.943 3.771 3.771-.943z",
			clipRule: "evenodd"
		})
	});
}
_C.displayName = "EditIcon";
var vC = d(_C);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/email-solid.js
function yC(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 5.111a1 1 0 0 0 .514.874l7 3.89a1 1 0 0 0 .972 0l7-3.89a1 1 0 1 0-.972-1.748L12 11.856 5.486 8.237A1 1 0 0 0 4 9.111" })
	});
}
yC.displayName = "EmailSolidIcon";
var bC = d(yC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/error-solid.js
function xC(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M12 17q.424 0 .713-.288A.97.97 0 0 0 13 16a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 15a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 16q0 .424.287.712.288.288.713.288m0-4q.424 0 .713-.287A.97.97 0 0 0 13 12V8a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 7a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 8v4q0 .424.287.713.288.287.713.287m0 9a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22" })
	});
}
xC.displayName = "ErrorSolidIcon";
var SC = d(xC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/error.js
function CC(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M12 17q.424 0 .713-.288A.97.97 0 0 0 13 16a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 15a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 16q0 .424.287.712.288.288.713.288m0-4q.424 0 .713-.287A.97.97 0 0 0 13 12V8a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 7a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 8v4q0 .424.287.713.288.287.713.287m0 9a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20" })
	});
}
CC.displayName = "ErrorIcon";
var wC = d(CC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/expand-all.js
function TC(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "m12 19.2 3.9-3.9a.95.95 0 0 1 .7-.275q.425 0 .7.275a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7l-3.875 3.875q-.575.575-1.425.575t-1.425-.575L6.7 16.7a.95.95 0 0 1-.275-.7q0-.425.275-.7a.95.95 0 0 1 .7-.275q.425 0 .7.275zm0-14.25-3.9 3.9a.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275.95.95 0 0 1-.275-.7q0-.425.275-.7l3.875-3.875Q11.15 3 12 3t1.425.575L17.3 7.45a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275z" })
	});
}
TC.displayName = "ExpandAllIcon";
var EC = d(TC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/expand.js
function DC(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M21 3.997a1 1 0 0 0-.29-.702l-.005-.004A1 1 0 0 0 20 3h-8a1 1 0 1 0 0 2h5.586L5 17.586V12a1 1 0 1 0-2 0v8.003a1 1 0 0 0 .29.702l.005.004c.18.18.43.291.705.291h8a1 1 0 1 0 0-2H6.414L19 6.414V12a1 1 0 1 0 2 0z" })
	});
}
DC.displayName = "ExpandIcon";
var OC = d(DC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/explore.js
function kC(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M12 13a.97.97 0 0 1-.713-.287A.97.97 0 0 1 11 12q0-.424.287-.713A.97.97 0 0 1 12 11q.424 0 .713.287.287.288.287.713 0 .424-.287.713A.97.97 0 0 1 12 13m0 9a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20m0 0q-3.35 0-5.675-2.325T4 12t2.325-5.675T12 4t5.675 2.325T20 12t-2.325 5.675T12 20m1.675-5.85q.15-.075.275-.2t.2-.275l2.925-6.25q.125-.25-.062-.437-.188-.188-.438-.063l-6.25 2.925q-.15.075-.275.2t-.2.275l-2.925 6.25q-.125.25.063.438.186.186.437.062z" })
	});
}
kC.displayName = "ExploreIcon";
var AC = d(kC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/favourite.js
function jC(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M13.905 9.378 12 5.52l-1.905 3.86-4.259.618 3.082 3.004-.727 4.242L12 15.24l3.81 2.003-.728-4.242 3.082-3.004zM8.767 7.55l2.336-4.733a1 1 0 0 1 1.794 0l2.336 4.733 5.223.76a1 1 0 0 1 .555 1.705L17.23 13.7l.892 5.202a1 1 0 0 1-1.45 1.054L12 17.5l-4.672 2.456a1 1 0 0 1-1.451-1.054l.892-5.202-3.78-3.685a1 1 0 0 1 .555-1.706z" })
	});
}
jC.displayName = "FavouriteIcon";
var MC = d(jC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/file-error.js
function NC(e, t) {
	return /*#__PURE__*/ (0, R.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ (0, R.jsx)("path", { d: "M6 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 20V4q0-.824.588-1.412A1.93 1.93 0 0 1 6 2h7.175a1.98 1.98 0 0 1 1.4.575l4.85 4.85q.275.275.425.638.15.361.15.762v3.516A6 6 0 0 0 18 12V9h-4a.97.97 0 0 1-.713-.287A.97.97 0 0 1 13 8V4H6v16h6.341c.264.745.67 1.423 1.187 2z" }), /*#__PURE__*/ (0, R.jsx)("path", { d: "M18 14a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m-1 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0" })]
	});
}
NC.displayName = "FileErrorIcon";
var PC = d(NC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/history.js
function FC(e, t) {
	return /*#__PURE__*/ (0, R.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ (0, R.jsx)("path", { d: "M18.93 8A8 8 0 1 1 4 12a1 1 0 1 0-2 0c0 5.523 4.477 10 10 10s10-4.477 10-10a10 10 0 0 0-.832-4A10 10 0 0 0 12 2a9.99 9.99 0 0 0-8 3.999V4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2H5.755A7.99 7.99 0 0 1 12 4a8 8 0 0 1 6.93 4" }), /*#__PURE__*/ (0, R.jsx)("path", { d: "M13 8a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l2.83 2.83a1 1 0 0 0 1.414-1.414L13 11.586z" })]
	});
}
FC.displayName = "HistoryIcon";
var IC = d(FC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/home.js
function LC(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", {
			fillRule: "evenodd",
			d: "M16 11v8h3V9.177l-7-3.889-7 3.889V19h3v-8zm-6 10H5a2 2 0 0 1-2-2V9.177a2 2 0 0 1 1.029-1.748l7-3.89a2 2 0 0 1 1.942 0l7 3.89A2 2 0 0 1 21 9.177V19a2 2 0 0 1-2 2h-5v-8h-4z",
			clipRule: "evenodd"
		})
	});
}
LC.displayName = "HomeIcon";
var RC = d(LC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/image-error.js
function zC(e, t) {
	return /*#__PURE__*/ (0, R.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ (0, R.jsx)("path", { d: "M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.803a6 6 0 0 1-.72-2H5v-3.172l4-4 3.585 3.585a6 6 0 0 1 1.172-1.656l-3.343-3.343a2 2 0 0 0-2.828 0L5 13V5h14v7.083c.718.12 1.393.368 2 .72V5a2 2 0 0 0-2-2z" }), /*#__PURE__*/ (0, R.jsx)("path", { d: "M17 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0m1 5a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m-1 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0" })]
	});
}
zC.displayName = "ImageErrorIcon";
var BC = d(zC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/info.js
function VC(e, t) {
	return /*#__PURE__*/ (0, R.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ (0, R.jsx)("path", { d: "M11.288 7.288A.97.97 0 0 1 12 7q.424 0 .713.287Q13 7.576 13 8t-.287.713A.97.97 0 0 1 12 9a.97.97 0 0 1-.713-.287A.97.97 0 0 1 11 8q0-.424.287-.713m.001 4.001A.97.97 0 0 1 12 11q.424 0 .713.287.287.288.287.713v4q0 .424-.287.712A.97.97 0 0 1 12 17a.97.97 0 0 1-.713-.288A.97.97 0 0 1 11 16v-4q0-.424.287-.713" }), /*#__PURE__*/ (0, R.jsx)("path", {
			fillRule: "evenodd",
			d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0",
			clipRule: "evenodd"
		})]
	});
}
VC.displayName = "InfoIcon";
var HC = d(VC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/inline-code.js
function UC(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M14.958 5.62a1 1 0 0 0-1.916-.574l-4 13.333a1 1 0 0 0 1.916.575zM5.974 7.232a1 1 0 0 0-1.409.128l-3.333 4a1 1 0 0 0 0 1.28l3.333 4a1 1 0 1 0 1.537-1.28L3.302 12l2.8-3.36a1 1 0 0 0-.128-1.408m12.053 0a1 1 0 0 1 1.408.128l3.333 4a1 1 0 0 1 0 1.28l-3.333 4a1 1 0 1 1-1.537-1.28l2.8-3.36-2.8-3.36a1 1 0 0 1 .128-1.408" })
	});
}
UC.displayName = "InlineCodeIcon";
var WC = d(UC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/leave.js
function GC(e, t) {
	return /*#__PURE__*/ (0, R.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ (0, R.jsx)("path", { d: "M14 13q.424 0 .713-.287A.97.97 0 0 0 15 12a.97.97 0 0 0-.287-.713A.97.97 0 0 0 14 11a.97.97 0 0 0-.713.287A.97.97 0 0 0 13 12q0 .424.287.713.288.287.713.287" }), /*#__PURE__*/ (0, R.jsx)("path", { d: "M10.385 21.788A1 1 0 0 1 10 21V3a1.003 1.003 0 0 1 1.242-.97l8 2A1 1 0 0 1 20 5v14a1 1 0 0 1-.758.97l-8 2a1 1 0 0 1-.857-.182M18 5.781l-6-1.5v15.438l6-1.5zM9 6H7v12h2v2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2z" })]
	});
}
GC.displayName = "LeaveIcon";
var KC = d(GC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/link.js
function qC(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M12 19.071q-1.467 1.467-3.536 1.467-2.067 0-3.535-1.467t-1.467-3.535q0-2.07 1.467-3.536L7.05 9.879q.3-.3.707-.3t.707.3.301.707-.3.707l-2.122 2.121a2.9 2.9 0 0 0-.884 2.122q0 1.237.884 2.12.884.885 2.121.885t2.122-.884l2.121-2.121q.3-.3.707-.3t.707.3.3.707q0 .405-.3.707zm-1.414-4.243q-.3.3-.707.301a.97.97 0 0 1-.707-.3q-.3-.3-.301-.708 0-.405.3-.707l4.243-4.242q.3-.3.707-.3t.707.3.3.707-.3.707zm6.364-.707q-.3.3-.707.3a.97.97 0 0 1-.707-.3q-.3-.3-.301-.707 0-.405.3-.707l2.122-2.121q.884-.885.884-2.121 0-1.238-.884-2.122a2.9 2.9 0 0 0-2.121-.884q-1.237 0-2.122.884l-2.121 2.122q-.3.3-.707.3a.97.97 0 0 1-.707-.3q-.3-.3-.3-.708 0-.405.3-.707L12 4.93q1.467-1.467 3.536-1.467t3.535 1.467 1.467 3.536T19.071 12z" })
	});
}
qC.displayName = "LinkIcon";
var JC = d(qC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/lock-solid.js
function YC(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M6 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 20V10q0-.825.588-1.412A1.93 1.93 0 0 1 6 8h1V6q0-2.075 1.463-3.537Q9.926 1 12 1q2.075 0 3.537 1.463Q17 3.925 17 6v2h1q.824 0 1.413.588Q20 9.175 20 10v10q0 .824-.587 1.413A1.93 1.93 0 0 1 18 22zM9 8h6V6q0-1.25-.875-2.125A2.9 2.9 0 0 0 12 3q-1.25 0-2.125.875A2.9 2.9 0 0 0 9 6z" })
	});
}
YC.displayName = "LockSolidIcon";
var XC = d(YC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/lock.js
function ZC(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M6 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 20V10q0-.825.588-1.412A1.93 1.93 0 0 1 6 8h1V6q0-2.075 1.463-3.537Q9.926 1 12 1q2.075 0 3.537 1.463Q17 3.925 17 6v2h1q.824 0 1.413.588Q20 9.175 20 10v10q0 .824-.587 1.413A1.93 1.93 0 0 1 18 22zm0-2h12V10H6zM9 8h6V6q0-1.25-.875-2.125A2.9 2.9 0 0 0 12 3q-1.25 0-2.125.875A2.9 2.9 0 0 0 9 6z" })
	});
}
ZC.displayName = "LockIcon";
var QC = d(ZC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/mark-as-read.js
function $C(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M21.324 9.13c0-.66-.339-1.237-.862-1.558l-7.37-4.318a1.81 1.81 0 0 0-1.851 0L3.87 7.572C3.348 7.892 3 8.47 3 9.13v9.167c0 1.008.825 1.833 1.833 1.833H19.5a1.84 1.84 0 0 0 1.833-1.833zm-10.129 3.978-6.6-4.124 6.646-3.896a1.81 1.81 0 0 1 1.851 0l6.646 3.896-6.6 4.124a1.85 1.85 0 0 1-1.943 0" })
	});
}
$C.displayName = "MarkAsReadIcon";
var ew = d($C);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/mark-as-unread.js
function tw(e, t) {
	return /*#__PURE__*/ (0, R.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ (0, R.jsx)("path", { d: "M20 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" }), /*#__PURE__*/ (0, R.jsx)("path", {
			fillRule: "evenodd",
			d: "M17 5H5a2 2 0 0 0-2 2v10.4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7.83a3 3 0 0 1-2 0q-.316-.113-.595-.288L12 11.89 5 7.138V7h12.764A3 3 0 0 1 17 5m-4.438 8.927L19 9.555V17.4H5V9.555l6.438 4.372a1 1 0 0 0 1.124 0",
			clipRule: "evenodd"
		})]
	});
}
tw.displayName = "MarkAsUnreadIcon";
var nw = d(tw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/mention.js
function rw(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M12 4a8 8 0 1 0 0 16 1 1 0 1 1 0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10v1.5a3.5 3.5 0 0 1-6.396 1.966A5 5 0 1 1 17 12v1.5a1.5 1.5 0 0 0 3 0V12a8 8 0 0 0-8-8m3 8a3 3 0 1 0-6 0 3 3 0 0 0 6 0" })
	});
}
rw.displayName = "MentionIcon";
var iw = d(rw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/minus.js
function aw(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M6 13a.97.97 0 0 1-.713-.287A.97.97 0 0 1 5 12q0-.424.287-.713A.97.97 0 0 1 6 11h12q.424 0 .712.287.288.288.288.713 0 .424-.288.713A.97.97 0 0 1 18 13z" })
	});
}
aw.displayName = "MinusIcon";
var ow = d(aw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/notifications-off-solid.js
function sw(e, t) {
	return /*#__PURE__*/ (0, R.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ (0, R.jsx)("path", { d: "m4.917 2.083 17 17a1 1 0 0 1-1.414 1.414L19.006 19H4.414c-.89 0-1.337-1.077-.707-1.707L5 16v-6s0-2.034 1.096-3.91L3.504 3.498a1 1 0 0 1 1.414-1.414M19 13.35 9.136 3.484C9.93 3.181 10.874 3 12 3c7 0 7 7 7 7z" }), /*#__PURE__*/ (0, R.jsx)("path", { d: "M10 20h4a2 2 0 0 1-4 0" })]
	});
}
sw.displayName = "NotificationsOffSolidIcon";
var cw = d(sw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/notifications-solid.js
function lw(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M20.293 17.293c.63.63.184 1.707-.707 1.707H4.414c-.89 0-1.337-1.077-.707-1.707L5 16v-6s0-7 7-7 7 7 7 7v6zM12 22a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2" })
	});
}
lw.displayName = "NotificationsSolidIcon";
var uw = d(lw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/overflow-horizontal.js
function dw(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M6 14q-.824 0-1.412-.588A1.93 1.93 0 0 1 4 12q0-.825.588-1.412A1.93 1.93 0 0 1 6 10q.824 0 1.412.588Q8 11.175 8 12t-.588 1.412A1.93 1.93 0 0 1 6 14m6 0q-.825 0-1.412-.588A1.93 1.93 0 0 1 10 12q0-.825.588-1.412A1.93 1.93 0 0 1 12 10q.825 0 1.412.588Q14 11.175 14 12t-.588 1.412A1.93 1.93 0 0 1 12 14m6 0q-.824 0-1.413-.588A1.93 1.93 0 0 1 16 12q0-.825.587-1.412A1.93 1.93 0 0 1 18 10q.824 0 1.413.588Q20 11.175 20 12t-.587 1.412A1.93 1.93 0 0 1 18 14" })
	});
}
dw.displayName = "OverflowHorizontalIcon";
var fw = d(dw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/pin-solid.js
function pw(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M5.769 2.857A.5.5 0 0 1 6.119 2h11.762a.5.5 0 0 1 .35.857L16.15 4.9a.5.5 0 0 0-.15.357v4.487a.5.5 0 0 0 .15.356l3.7 3.644a.5.5 0 0 1 .15.356v1.4a.5.5 0 0 1-.5.5H13v6a1 1 0 1 1-2 0v-6H4.5a.5.5 0 0 1-.5-.5v-1.4a.5.5 0 0 1 .15-.356l3.7-3.644A.5.5 0 0 0 8 9.744V5.257a.5.5 0 0 0-.15-.357z" })
	});
}
pw.displayName = "PinSolidIcon";
var mw = d(pw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/pin.js
function hw(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", {
			fillRule: "evenodd",
			d: "M6.119 2a.5.5 0 0 0-.35.857L7.85 4.9a.5.5 0 0 1 .15.357v4.487a.5.5 0 0 1-.15.356l-3.7 3.644A.5.5 0 0 0 4 14.1v1.4a.5.5 0 0 0 .5.5H11v6a1 1 0 1 0 2 0v-6h6.5a.5.5 0 0 0 .5-.5v-1.4a.5.5 0 0 0-.15-.356l-3.7-3.644a.5.5 0 0 1-.15-.356V5.257a.5.5 0 0 1 .15-.357l2.081-2.043a.5.5 0 0 0-.35-.857zM10 4h4v5.744a2.5 2.5 0 0 0 .746 1.781L17.26 14H6.74l2.514-2.475A2.5 2.5 0 0 0 10 9.744z",
			clipRule: "evenodd"
		})
	});
}
hw.displayName = "PinIcon";
var gw = d(hw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/plus.js
function _w(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M11 13H6a.97.97 0 0 1-.713-.287A.97.97 0 0 1 5 12q0-.424.287-.713A.97.97 0 0 1 6 11h5V6q0-.424.287-.713A.97.97 0 0 1 12 5q.424 0 .713.287Q13 5.576 13 6v5h5q.424 0 .712.287.288.288.288.713 0 .424-.288.713A.97.97 0 0 1 18 13h-5v5q0 .424-.287.712A.97.97 0 0 1 12 19a.97.97 0 0 1-.713-.288A.97.97 0 0 1 11 18z" })
	});
}
_w.displayName = "PlusIcon";
var vw = d(_w);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/preferences.js
function yw(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", {
			fillRule: "evenodd",
			d: "M6.5 2h11a4.5 4.5 0 1 1 0 9h-11a4.5 4.5 0 0 1 0-9m0 2h7.258A4.5 4.5 0 0 0 13 6.5c0 .925.28 1.785.758 2.5H6.5a2.5 2.5 0 0 1 0-5M15 6.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0m-13 11A4.5 4.5 0 0 1 6.5 13h11a4.5 4.5 0 1 1 0 9h-11q-.233 0-.46-.023A4.5 4.5 0 0 1 2 17.5m8.242-2.5H17.5a2.5 2.5 0 0 1 0 5h-7.258A4.5 4.5 0 0 0 11 17.5c0-.925-.28-1.785-.758-2.5M6.5 15a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5",
			clipRule: "evenodd"
		})
	});
}
yw.displayName = "PreferencesIcon";
var bw = d(yw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/reaction-add.js
function xw(e, t) {
	return /*#__PURE__*/ (0, R.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ (0, R.jsx)("path", { d: "M14.74 2.38C13.87 2.133 12.95 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-.95-.133-1.87-.38-2.74a5 5 0 0 1-1.886.687 8 8 0 1 1-5.68-5.68c.1-.684.339-1.323.687-1.887" }), /*#__PURE__*/ (0, R.jsx)("path", { d: "M15.536 14.121a1 1 0 0 1 0 1.415A5 5 0 0 1 12 17c-1.38 0-2.632-.56-3.535-1.464a1 1 0 1 1 1.414-1.415A3 3 0 0 0 12 15c.829 0 1.577-.335 2.121-.879a1 1 0 0 1 1.415 0M8.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m8.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M18 6h-1a.97.97 0 0 1-.712-.287A.97.97 0 0 1 16 5q0-.424.288-.713A.97.97 0 0 1 17 4h1V3q0-.424.288-.712A.97.97 0 0 1 19 2q.424 0 .712.288Q20 2.575 20 3v1h1q.424 0 .712.287Q22 4.576 22 5t-.288.713A.97.97 0 0 1 21 6h-1v1q0 .424-.288.713A.97.97 0 0 1 19 8a.97.97 0 0 1-.712-.287A.97.97 0 0 1 18 7z" })]
	});
}
xw.displayName = "ReactionAddIcon";
var Sw = d(xw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/reaction.js
function Cw(e, t) {
	return /*#__PURE__*/ (0, R.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ (0, R.jsx)("path", { d: "M15.536 15.536a1 1 0 0 0-1.415-1.415 3 3 0 0 1-2.12.879 3 3 0 0 1-2.122-.879 1 1 0 1 0-1.414 1.415A5 5 0 0 0 12 17c1.38 0 2.632-.56 3.536-1.464M10 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" }), /*#__PURE__*/ (0, R.jsx)("path", { d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0" })]
	});
}
Cw.displayName = "ReactionIcon";
var ww = d(Cw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/reply.js
function Tw(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M9.405 5.708c.39-.39.39-1.025 0-1.416a.996.996 0 0 0-1.412 0L3.294 9.006a1.004 1.004 0 0 0 0 1.416l4.699 4.714a.996.996 0 0 0 1.412 0c.39-.39.39-1.025 0-1.416l-3.043-3.053h9.153c1.887 0 3.485 1.604 3.485 3.666C19 16.396 17.402 18 15.515 18h-2.093a1 1 0 1 0 0 2h2.093C18.58 20 21 17.425 21 14.333s-2.419-5.666-5.485-5.666H6.456z" })
	});
}
Tw.displayName = "ReplyIcon";
var Ew = d(Tw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/restart.js
function Dw(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M18.93 8A8 8 0 1 1 4 12a1 1 0 1 0-2 0c0 5.523 4.477 10 10 10s10-4.477 10-10a10 10 0 0 0-.832-4A10 10 0 0 0 12 2a9.99 9.99 0 0 0-8 3.999V4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2H5.755A7.99 7.99 0 0 1 12 4a8 8 0 0 1 6.93 4" })
	});
}
Dw.displayName = "RestartIcon";
var Ow = d(Dw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/room.js
function kw(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "m8.566 17-.944 4.094q-.086.406-.372.656t-.687.25q-.543 0-.887-.469a1.18 1.18 0 0 1-.2-1.031l.801-3.5H3.158q-.572 0-.916-.484a1.27 1.27 0 0 1-.2-1.078 1.12 1.12 0 0 1 1.116-.938H6.85l1.145-5h-3.12q-.57 0-.915-.484a1.27 1.27 0 0 1-.2-1.078A1.12 1.12 0 0 1 4.875 7h3.691l.945-4.094q.085-.406.372-.656.286-.25.686-.25.544 0 .887.469.345.468.2 1.031l-.8 3.5h4.578l.944-4.094q.085-.406.372-.656.286-.25.687-.25.543 0 .887.469t.2 1.031L17.723 7h3.119q.573 0 .916.484.343.485.2 1.079a1.12 1.12 0 0 1-1.116.937H17.15l-1.145 5h3.12q.57 0 .915.484.343.485.2 1.079a1.12 1.12 0 0 1-1.116.937h-3.691l-.944 4.094q-.087.406-.373.656t-.686.25q-.544 0-.887-.469a1.18 1.18 0 0 1-.2-1.031l.8-3.5zm.573-2.5h4.578l1.144-5h-4.578z" })
	});
}
kw.displayName = "RoomIcon";
var Aw = d(kw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/search.js
function jw(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M15.05 16.463a7.5 7.5 0 1 1 1.414-1.414l3.243 3.244a1 1 0 0 1-1.414 1.414zM16 10.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0" })
	});
}
jw.displayName = "SearchIcon";
var Mw = d(jw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/section.js
function Nw(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M16 7a.97.97 0 0 0-.713.287A.97.97 0 0 0 15 8q0 .424.287.713Q15.576 9 16 9t.712-.287A.97.97 0 0 0 17 8a.97.97 0 0 0-.288-.713A.97.97 0 0 0 16 7m0 4a.97.97 0 0 0-.713.287A.97.97 0 0 0 15 12q0 .424.287.713.288.287.713.287.424 0 .712-.287A.97.97 0 0 0 17 12a.97.97 0 0 0-.288-.713A.97.97 0 0 0 16 11m0 4a.97.97 0 0 0-.713.287A.97.97 0 0 0 15 16q0 .424.287.712.288.288.713.288.424 0 .712-.288A.97.97 0 0 0 17 16a.97.97 0 0 0-.288-.713A.97.97 0 0 0 16 15m-4-8H8a.97.97 0 0 0-.713.287A.97.97 0 0 0 7 8q0 .424.287.713Q7.576 9 8 9h4q.424 0 .713-.287A.97.97 0 0 0 13 8a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 7m0 4H8a.97.97 0 0 0-.713.287A.97.97 0 0 0 7 12q0 .424.287.713Q7.576 13 8 13h4q.424 0 .713-.287A.97.97 0 0 0 13 12a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 11m0 4H8a.97.97 0 0 0-.713.287A.97.97 0 0 0 7 16q0 .424.287.712Q7.576 17 8 17h4q.424 0 .713-.288A.97.97 0 0 0 13 16a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 15m7-12q.824 0 1.413.587Q21 4.176 21 5v14q0 .824-.587 1.413A1.93 1.93 0 0 1 19 21H5q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19V5q0-.824.587-1.412A1.93 1.93 0 0 1 5 3zm0 2H5v14h14z" })
	});
}
Nw.displayName = "SectionIcon";
var Pw = d(Nw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/settings.js
function Fw(e, t) {
	return /*#__PURE__*/ (0, R.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ (0, R.jsx)("path", { d: "M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-2 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0" }), /*#__PURE__*/ (0, R.jsx)("path", { d: "M11.312 2h1.376A2.31 2.31 0 0 1 15 4.312v.247l.002.003c.01.014.031.033.064.047.03.013.056.013.07.01h.002l.177-.177a2.31 2.31 0 0 1 3.27 0l.973.974a2.31 2.31 0 0 1 0 3.269l-.177.177v.003a.13.13 0 0 0 .01.07.15.15 0 0 0 .047.063l.003.002h.247A2.31 2.31 0 0 1 22 11.312v1.376A2.31 2.31 0 0 1 19.688 15h-.247l-.003.002a.15.15 0 0 0-.047.064.13.13 0 0 0-.01.07v.002l.177.177a2.31 2.31 0 0 1 0 3.27l-.974.973a2.31 2.31 0 0 1-3.269 0l-.177-.177h-.003a.13.13 0 0 0-.07.01.15.15 0 0 0-.063.047l-.002.003v.247A2.31 2.31 0 0 1 12.688 22h-1.376A2.31 2.31 0 0 1 9 19.688v-.247l-.002-.003a.15.15 0 0 0-.064-.047.13.13 0 0 0-.07-.01h-.002l-.177.177a2.31 2.31 0 0 1-3.27 0l-.973-.974a2.31 2.31 0 0 1 0-3.269l.177-.177v-.003a.14.14 0 0 0-.01-.07.15.15 0 0 0-.047-.063L4.559 15h-.247A2.31 2.31 0 0 1 2 12.688v-1.376A2.31 2.31 0 0 1 4.312 9h.247l.003-.002a.15.15 0 0 0 .047-.064.14.14 0 0 0 .01-.07v-.002l-.177-.177a2.31 2.31 0 0 1 0-3.27l.974-.973a2.31 2.31 0 0 1 3.269 0l.177.177h.003a.14.14 0 0 0 .07-.01.15.15 0 0 0 .063-.047L9 4.559v-.247A2.31 2.31 0 0 1 11.312 2M11 4.312v.257c0 .893-.59 1.593-1.299 1.887-.716.297-1.622.21-2.248-.418l-.182-.182a.31.31 0 0 0-.441 0l-.974.974a.31.31 0 0 0 0 .44l.182.183c.627.626.715 1.531.418 2.248C6.162 10.41 5.462 11 4.569 11h-.257a.31.31 0 0 0-.312.312v1.376c0 .172.14.312.312.312h.257c.893 0 1.593.59 1.887 1.299.297.716.21 1.622-.418 2.248l-.182.182a.31.31 0 0 0 0 .441l.974.973a.31.31 0 0 0 .44 0l.183-.181c.626-.627 1.532-.715 2.248-.418.709.294 1.299.994 1.299 1.887v.257c0 .172.14.312.312.312h1.376c.172 0 .312-.14.312-.312v-.257c0-.893.59-1.593 1.299-1.887.716-.297 1.622-.21 2.249.418l.181.181c.122.122.32.122.441 0l.973-.973a.31.31 0 0 0 0-.44l-.181-.183c-.627-.626-.715-1.532-.418-2.248.294-.709.994-1.299 1.887-1.299h.257c.172 0 .312-.14.312-.312v-1.376a.31.31 0 0 0-.312-.312h-.257c-.893 0-1.593-.59-1.887-1.299-.297-.717-.21-1.622.418-2.248l.181-.182a.31.31 0 0 0 0-.441l-.973-.974a.31.31 0 0 0-.44 0l-.183.182c-.626.627-1.532.715-2.248.418C13.59 6.162 13 5.462 13 4.569v-.257A.31.31 0 0 0 12.688 4h-1.376a.31.31 0 0 0-.312.312" })]
	});
}
Fw.displayName = "SettingsIcon";
var Iw = d(Fw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/threads-solid.js
function Lw(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M4 3h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6l-2.293 2.293c-.63.63-1.707.184-1.707-.707V5a2 2 0 0 1 2-2m3 7h10q.424 0 .712-.287A.97.97 0 0 0 18 9a.97.97 0 0 0-.288-.713A.97.97 0 0 0 17 8H7a.97.97 0 0 0-.713.287A.97.97 0 0 0 6 9q0 .424.287.713Q6.576 10 7 10m0 4h6q.424 0 .713-.287A.97.97 0 0 0 14 13a.97.97 0 0 0-.287-.713A.97.97 0 0 0 13 12H7a.97.97 0 0 0-.713.287A.97.97 0 0 0 6 13q0 .424.287.713Q6.576 14 7 14" })
	});
}
Lw.displayName = "ThreadsSolidIcon";
var Rw = d(Lw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/threads.js
function zw(e, t) {
	return /*#__PURE__*/ (0, R.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ (0, R.jsx)("path", { d: "M7 10a.97.97 0 0 1-.713-.287A.97.97 0 0 1 6 9q0-.424.287-.713A.97.97 0 0 1 7 8h10q.424 0 .712.287Q18 8.576 18 9t-.288.713A.97.97 0 0 1 17 10zm0 4a.97.97 0 0 1-.713-.287A.97.97 0 0 1 6 13q0-.424.287-.713A.97.97 0 0 1 7 12h6q.424 0 .713.287.287.288.287.713 0 .424-.287.713A.97.97 0 0 1 13 14z" }), /*#__PURE__*/ (0, R.jsx)("path", { d: "M3.707 21.293c-.63.63-1.707.184-1.707-.707V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6zM6 17h14V5H4v13.172l.586-.586A2 2 0 0 1 6 17" })]
	});
}
zw.displayName = "ThreadsIcon";
var Bw = d(zw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/unpin.js
function Vw(e, t) {
	return /*#__PURE__*/ (0, R.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ (0, R.jsx)("path", {
			fillRule: "evenodd",
			d: "M5.457 2.083a1 1 0 0 0-1.414 1.414L8.04 7.494v2.25a.5.5 0 0 1-.15.356l-3.7 3.644a.5.5 0 0 0-.15.356v1.4a.5.5 0 0 0 .5.5h6.5v6a1 1 0 0 0 2 0v-6h3.506l4.497 4.497a1 1 0 0 0 1.414-1.414zM14.546 14 10.04 9.494v.25a2.5 2.5 0 0 1-.746 1.781L6.78 14z",
			clipRule: "evenodd"
		}), /*#__PURE__*/ (0, R.jsx)("path", { d: "M14.04 4v3.85l2.015 2.015a.5.5 0 0 1-.015-.12V5.257a.5.5 0 0 1 .15-.357l2.081-2.043a.5.5 0 0 0-.35-.857h-9.73l2 2z" })]
	});
}
Vw.displayName = "UnpinIcon";
var Hw = d(Vw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/user-add.js
function Uw(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M10 12q-1.65 0-2.825-1.175T6 8t1.175-2.825T10 4t2.825 1.175T14 8t-1.175 2.825T10 12m-8 6v-.8q0-.85.438-1.562.437-.713 1.162-1.088a14.8 14.8 0 0 1 3.15-1.163A13.8 13.8 0 0 1 10 13q1.65 0 3.25.387 1.6.388 3.15 1.163.724.375 1.163 1.087Q18 16.35 18 17.2v.8q0 .824-.587 1.413A1.93 1.93 0 0 1 16 20H4q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 18m2 0h12v-.8a.97.97 0 0 0-.5-.85q-1.35-.675-2.725-1.012a11.6 11.6 0 0 0-5.55 0Q5.85 15.675 4.5 16.35a.97.97 0 0 0-.5.85zm6-8q.825 0 1.412-.588Q12 8.826 12 8q0-.824-.588-1.412A1.93 1.93 0 0 0 10 6q-.825 0-1.412.588A1.93 1.93 0 0 0 8 8q0 .825.588 1.412Q9.175 10 10 10m7 1h2v2q0 .424.288.713.287.287.712.287.424 0 .712-.287A.97.97 0 0 0 21 13v-2h2q.424 0 .712-.287A.97.97 0 0 0 24 10a.97.97 0 0 0-.288-.713A.97.97 0 0 0 23 9h-2V7a.97.97 0 0 0-.288-.713A.97.97 0 0 0 20 6a.97.97 0 0 0-.712.287A.97.97 0 0 0 19 7v2h-2a.97.97 0 0 0-.712.287A.97.97 0 0 0 16 10q0 .424.288.713.287.287.712.287" })
	});
}
Uw.displayName = "UserAddIcon";
var Ww = d(Uw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/user-profile-solid.js
function Gw(e, t) {
	return /*#__PURE__*/ (0, R.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ (0, R.jsx)("path", { d: "M12 15q-1.65 0-2.825-1.175T8 11t1.175-2.825T12 7t2.825 1.175T16 11t-1.175 2.825T12 15" }), /*#__PURE__*/ (0, R.jsx)("path", { d: "M19.528 18.583A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 2.52.933 4.824 2.472 6.583A9.98 9.98 0 0 0 12 22a9.98 9.98 0 0 0 7.528-3.417M8.75 16.388q-1.373.332-2.709.95a8 8 0 1 1 11.918 0 14.7 14.7 0 0 0-2.709-.95A13.8 13.8 0 0 0 12 16q-1.65 0-3.25.387" })]
	});
}
Gw.displayName = "UserProfileSolidIcon";
var Kw = d(Gw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/video-call-declined-solid.js
function qw(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M2 8a4 4 0 0 1 4-4h10a2 2 0 0 1 2 2v4.286l3.35-2.871a1 1 0 0 1 1.65.76v7.65a1 1 0 0 1-1.65.76L18 13.715V18a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4zm10.828 6.828q.3-.3.3-.707 0-.405-.3-.707L11.414 12l1.414-1.414q.3-.3.3-.707t-.3-.707-.707-.301q-.405 0-.707.3L10 10.587 8.586 9.172q-.3-.3-.707-.301-.407 0-.707.3t-.3.708q0 .405.3.707L8.586 12l-1.414 1.414q-.3.3-.3.707t.3.707.707.3q.405 0 .707-.3L10 13.414l1.414 1.414q.3.3.707.3t.707-.3" })
	});
}
qw.displayName = "VideoCallDeclinedSolidIcon";
var Jw = d(qw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/video-call-solid.js
function Yw(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M6 4h10a2 2 0 0 1 2 2v4.286l3.35-2.871a1 1 0 0 1 1.65.76v7.65a1 1 0 0 1-1.65.76L18 13.715V18a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4" })
	});
}
Yw.displayName = "VideoCallSolidIcon";
var Xw = d(Yw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/video-call.js
function Zw(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M2 8a4 4 0 0 1 4-4h10a2 2 0 0 1 2 2v4.286l3.35-2.871a1 1 0 0 1 1.65.76v7.65a1 1 0 0 1-1.65.76L18 13.715V18a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10V6zm15 7.652v-3.303L19.073 12z" })
	});
}
Zw.displayName = "VideoCallIcon";
var Qw = d(Zw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/visibility-off.js
function $w(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "m16.1 13.3-1.45-1.45q.225-1.175-.675-2.2t-2.325-.8L10.2 7.4q.424-.2.863-.3A4.2 4.2 0 0 1 12 7q1.875 0 3.188 1.312Q16.5 9.625 16.5 11.5q0 .5-.1.938t-.3.862m3.2 3.15-1.45-1.4a11 11 0 0 0 1.688-1.588A9 9 0 0 0 20.8 11.5q-1.25-2.524-3.588-4.013Q14.875 6 12 6q-.724 0-1.425.1a10 10 0 0 0-1.375.3L7.65 4.85A11.1 11.1 0 0 1 12 4q3.575 0 6.425 1.887T22.7 10.8a.8.8 0 0 1 .1.313q.025.188.025.387a2 2 0 0 1-.125.7 10.9 10.9 0 0 1-3.4 4.25m-.2 5.45-3.5-3.45q-.874.274-1.762.413Q12.95 19 12 19q-3.575 0-6.425-1.887T1.3 12.2a.8.8 0 0 1-.1-.312 3 3 0 0 1 0-.763.8.8 0 0 1 .1-.3Q1.825 9.7 2.55 8.75A13.3 13.3 0 0 1 4.15 7L2.075 4.9a.93.93 0 0 1-.275-.688q0-.412.3-.712a.95.95 0 0 1 .7-.275q.425 0 .7.275l17 17q.275.275.288.688a.93.93 0 0 1-.288.712.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275M5.55 8.4q-.725.65-1.325 1.425A9 9 0 0 0 3.2 11.5q1.25 2.524 3.588 4.012T12 17q.5 0 .975-.062.475-.063.975-.138l-.9-.95q-.274.075-.525.113A3.5 3.5 0 0 1 12 16q-1.875 0-3.187-1.312Q7.5 13.375 7.5 11.5q0-.274.038-.525.037-.25.112-.525z" })
	});
}
$w.displayName = "VisibilityOffIcon";
var eT = d($w);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/visibility-on.js
function tT(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M12 16q1.875 0 3.188-1.312Q16.5 13.375 16.5 11.5t-1.312-3.187T12 7 8.813 8.313 7.5 11.5t1.313 3.188T12 16m0-1.8q-1.125 0-1.912-.787A2.6 2.6 0 0 1 9.3 11.5q0-1.125.787-1.912A2.6 2.6 0 0 1 12 8.8q1.125 0 1.912.787.788.788.788 1.913t-.787 1.912A2.6 2.6 0 0 1 12 14.2m0 4.8q-3.475 0-6.35-1.837Q2.775 15.324 1.3 12.2a.8.8 0 0 1-.1-.312 3 3 0 0 1 0-.775.8.8 0 0 1 .1-.313q1.475-3.125 4.35-4.962Q8.525 4 12 4t6.35 1.838T22.7 10.8a.8.8 0 0 1 .1.313 3 3 0 0 1 0 .774.8.8 0 0 1-.1.313q-1.475 3.125-4.35 4.963Q15.475 19 12 19m0-2a9.54 9.54 0 0 0 5.188-1.488A9.77 9.77 0 0 0 20.8 11.5a9.77 9.77 0 0 0-3.613-4.012A9.54 9.54 0 0 0 12 6a9.55 9.55 0 0 0-5.187 1.487A9.77 9.77 0 0 0 3.2 11.5a9.77 9.77 0 0 0 3.613 4.012A9.54 9.54 0 0 0 12 17" })
	});
}
tT.displayName = "VisibilityOnIcon";
var nT = d(tT);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/voice-call-declined-solid.js
function rT(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "M7.623 3.04a1.07 1.07 0 0 1 1.086.929l.542 3.954q.039.27-.038.504a1.1 1.1 0 0 1-.272.427l-1.64 1.64Q7.806 11.5 8.456 12.4c.433.601 1.444 1.697 1.444 1.697.013.012 1.098 1.014 1.696 1.444q.9.65 1.909 1.153l1.64-1.64q.194-.194.426-.27a1.1 1.1 0 0 1 .504-.04l3.953.543q.407.058.67.358.26.301.26.728l.04 3.527q0 .427-.33.756-.33.33-.756.33a16 16 0 0 1-6.57-1.105 16.2 16.2 0 0 1-5.563-3.663 16.1 16.1 0 0 1-3.653-5.573 16.3 16.3 0 0 1-1.116-6.56q0-.426.329-.756Q3.67 3 4.095 3zM20.25 3q.405 0 .707.3.3.301.3.708t-.3.707l-1.414 1.414 1.414 1.414q.3.3.3.707t-.3.707-.707.3-.707-.3l-1.414-1.414-1.414 1.414q-.3.3-.707.3t-.707-.3T15 8.25q0-.406.3-.707l1.415-1.414L15.3 4.715q-.3-.3-.301-.707 0-.407.3-.707t.71-.301q.405 0 .707.3l1.414 1.415L19.543 3.3q.3-.3.707-.301" })
	});
}
rT.displayName = "VoiceCallDeclinedSolidIcon";
var iT = d(rT);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/voice-call-solid.js
function aT(e, t) {
	return /*#__PURE__*/ (0, R.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ (0, R.jsx)("path", { d: "m20.958 16.374.039 3.527q0 .427-.33.756-.33.33-.756.33a16 16 0 0 1-6.57-1.105 16.2 16.2 0 0 1-5.563-3.663 16.1 16.1 0 0 1-3.653-5.573 16.3 16.3 0 0 1-1.115-6.56q0-.427.33-.757T4.095 3l3.528.039a1.07 1.07 0 0 1 1.085.93l.543 3.954q.039.271-.039.504a1.1 1.1 0 0 1-.271.426l-1.64 1.64q.505 1.008 1.154 1.909c.433.6 1.444 1.696 1.444 1.696s1.095 1.01 1.696 1.444q.9.65 1.909 1.153l1.64-1.64q.193-.193.426-.27t.504-.04l3.954.543q.406.059.668.359t.262.727" })
	});
}
aT.displayName = "VoiceCallSolidIcon";
var oT = d(aT);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1cc16b9f91048971862cf4187668bd89/node_modules/@vector-im/compound-design-tokens/assets/web/icons/volume-on-solid.js
function sT(e, t) {
	return /*#__PURE__*/ (0, R.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ (0, R.jsx)("path", { d: "M3 14v-4a2 2 0 0 1 2-2h2l3.293-3.293c.63-.63 1.707-.184 1.707.707v13.172c0 .89-1.077 1.337-1.707.707L7 16H5a2 2 0 0 1-2-2m11.122-5.536a1 1 0 0 1 1.414 0A5 5 0 0 1 17 12c0 1.38-.56 2.632-1.464 3.536a1 1 0 0 1-1.415-1.415 3 3 0 0 0 .88-2.121c0-.829-.335-1.577-.88-2.121a1 1 0 0 1 0-1.415" }), /*#__PURE__*/ (0, R.jsx)("path", { d: "M16.95 5.636a1 1 0 0 1 1.414 0A8.98 8.98 0 0 1 21 12a8.98 8.98 0 0 1-2.636 6.364 1 1 0 0 1-1.414-1.414A6.98 6.98 0 0 0 19 12a6.98 6.98 0 0 0-2.05-4.95 1 1 0 0 1 0-1.414" })]
	});
}
sT.displayName = "VolumeOnSolidIcon";
var cT = d(sT), lT = ({ query: e, onChange: t, onEnter: n, onKeyDown: r, inputRef: i, controlsId: a }) => {
	let o = g(Zx);
	_(() => {
		i.current?.focus();
	}, [i]);
	let s = h((e) => {
		e.key === "Enter" ? (n(), e.stopPropagation(), e.preventDefault()) : r(e);
	}, [n, r]), c;
	return c = e ? /* @__PURE__ */ (0, R.jsx)("button", {
		type: "button",
		onClick: () => t(""),
		title: H("emoji_picker|cancel_search_label"),
		children: /* @__PURE__ */ (0, R.jsx)(eC, {})
	}) : /* @__PURE__ */ (0, R.jsx)("span", {
		className: U.searchIcon,
		children: /* @__PURE__ */ (0, R.jsx)(Mw, {})
	}), /* @__PURE__ */ (0, R.jsxs)("div", {
		className: U.search,
		children: [/* @__PURE__ */ (0, R.jsx)("input", {
			autoFocus: !0,
			type: "text",
			placeholder: H("action|search"),
			"aria-label": H("action|search"),
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
}, uT = ({ emoji: e }) => {
	let { unicode: t, label: n, shortcodes: [r] } = e;
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: U.footer,
		children: [/* @__PURE__ */ (0, R.jsx)("div", {
			className: U.previewEmoji,
			children: t
		}), /* @__PURE__ */ (0, R.jsxs)("div", {
			className: U.previewText,
			children: [/* @__PURE__ */ (0, R.jsx)("div", {
				className: (0, L.default)(U.name, U.previewName),
				children: n
			}), /* @__PURE__ */ (0, R.jsx)("div", {
				className: U.shortcode,
				children: r
			})]
		})]
	});
};
//#endregion
//#region src/core/EmojiPicker/RovingButton.tsx
function dT({ onClick: e, disabled: t, focusOnMouseOver: n, onFocus: r, onMouseOver: i, onKeyDown: a, onKeyUp: o, role: s = "button", children: c, ...l }) {
	let [u, d, f] = pS(), p = {
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
	}, /* @__PURE__ */ (0, R.jsx)("div", {
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
var fT = o.memo(function({ onClick: e, onMouseEnter: t, onMouseLeave: n, emoji: r, selectedEmojis: i, disabled: a, id: o, className: s }) {
	let c = i?.has(r.unicode), l = h(() => t(r), [t, r]), u = h(() => n(r), [n, r]);
	return /* @__PURE__ */ (0, R.jsx)(dT, {
		id: o,
		onClick: (t) => e(t, r),
		onMouseEnter: l,
		onMouseLeave: u,
		className: s,
		disabled: a || void 0,
		role: i ? "checkbox" : void 0,
		"aria-checked": c,
		focusOnMouseOver: !0,
		children: /* @__PURE__ */ (0, R.jsx)("div", {
			className: (0, L.default)(U.item, { [U.itemSelected]: c }),
			children: r.unicode
		})
	});
}), pT = [
	"👍",
	"👎",
	"😄",
	"🎉",
	"😕",
	"❤️",
	"🚀",
	"👀"
].map((e) => {
	let t = Ne(e);
	if (!t) throw Error(`Emoji ${e} doesn't exist in emojibase`);
	return t;
}), mT = ({ selectedEmojis: e, onClick: t, getAction: n }) => {
	let [r, i] = T(void 0), a = h((e) => {
		i(e);
	}, []), s = h(() => {
		i(void 0);
	}, []);
	return /* @__PURE__ */ (0, R.jsxs)("section", {
		className: (0, L.default)(U.footer, U.quick, U.category),
		children: [/* @__PURE__ */ (0, R.jsx)(de, {
			as: "h2",
			className: (0, L.default)(U.quickHeader, U.categoryLabel),
			children: r ? /* @__PURE__ */ (0, R.jsxs)(o.Fragment, { children: [/* @__PURE__ */ (0, R.jsx)("span", {
				className: U.name,
				children: r.label
			}), /* @__PURE__ */ (0, R.jsx)("span", {
				className: U.shortcode,
				children: r.shortcodes[0]
			})] }) : H("emoji|quick_reactions")
		}), /* @__PURE__ */ (0, R.jsx)(wS, {
			className: U.list,
			"aria-label": H("emoji|quick_reactions"),
			getAction: n,
			children: pT.map((n) => /* @__PURE__ */ (0, R.jsx)(fT, {
				emoji: n,
				onClick: t,
				onMouseEnter: a,
				onMouseLeave: s,
				selectedEmojis: e,
				className: U.itemWrapper
			}, n.hexcode))
		})]
	});
}, hT = "‍", gT = [
	{
		id: "recent",
		untranslatedName: Fx("emoji|category_frequently_used"),
		emoji: "🕒"
	},
	{
		id: "people",
		untranslatedName: Fx("emoji|category_smileys_people"),
		emoji: "😀"
	},
	{
		id: "nature",
		untranslatedName: Fx("emoji|category_animals_nature"),
		emoji: "🐕"
	},
	{
		id: "foods",
		untranslatedName: Fx("emoji|category_food_drink"),
		emoji: "🍎"
	},
	{
		id: "activity",
		untranslatedName: Fx("emoji|category_activities"),
		emoji: "⚽️"
	},
	{
		id: "places",
		untranslatedName: Fx("emoji|category_travel_places"),
		emoji: "🚗"
	},
	{
		id: "objects",
		untranslatedName: Fx("emoji|category_objects"),
		emoji: "💡"
	},
	{
		id: "symbols",
		untranslatedName: Fx("emoji|category_symbols"),
		emoji: "⁉️"
	},
	{
		id: "flags",
		untranslatedName: Fx("emoji|category_flags"),
		emoji: "🏁"
	}
], _T = {
	List: ({ ref: e, ...t }) => /* @__PURE__ */ (0, R.jsx)("div", {
		...t,
		ref: e,
		className: U.list,
		role: "grid",
		"aria-multiselectable": !0
	}),
	Item: ({ item: e, ...t }) => e.type === "header" ? /* @__PURE__ */ (0, R.jsx)("div", {
		...t,
		role: "row"
	}) : /* @__PURE__ */ (0, R.jsx)("div", {
		...t,
		role: "row",
		className: U.row
	})
};
function vT(e) {
	return Array.from(new Set((e ?? []).map(Ne).filter((e) => !!e)));
}
function yT(e, t) {
	return t.includes(hT) && (t = t.split(hT, 2)[0]), e.label.toLowerCase().includes(t) || (Array.isArray(e.emoticon) ? e.emoticon.some((e) => e.includes(t)) : e.emoticon?.includes(t)) || e.shortcodes.some((e) => e.toLowerCase().includes(t)) || e.unicode.split(hT).includes(t);
}
function bT(e, t) {
	return t === "" ? e : e.filter((e) => yT(e, t)).sort((e, n) => {
		let r = e.shortcodes[0].indexOf(t), i = n.shortcodes[0].indexOf(t);
		return r == -1 || i == -1 ? i - r : r == 0 && i == 0 ? e.shortcodes[0].length - n.shortcodes[0].length : r - i;
	});
}
function xT({ selectedEmojis: e, onChoose: t, onFinished: n, isEmojiDisabled: r, recentEmojis: i, onRecordRecent: a, getAction: o, showQuickReactions: s = !0 }) {
	let [c, l] = T(""), [u, d] = T(void 0), [f, p] = T(!1), [m, g] = T(null), _ = w(null), y = w(null), b = S(() => vT(i), [i]), x = c.toLowerCase().trim(), { dataByCategory: C, enabledCategories: E } = S(() => {
		let e = {}, t = [];
		for (let n of gT) {
			let r = bT(n.id === "recent" ? b : Me[n.id], x);
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
		for (let t of gT) {
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
		D(gT.find((e) => t.has(e.id))?.id ?? "people");
	}, [O]), ne = h((e) => e?.parentElement ?? void 0, []), re = h((e) => ne(e)?.parentElement ?? void 0, [ne]), ie = h((e) => {
		let t = e.children[0];
		return t instanceof HTMLElement ? t : void 0;
	}, []), A = h((e, t, n) => {
		if (t.activeNode && [
			"ArrowDown",
			"ArrowRight",
			"ArrowLeft",
			"ArrowUp"
		].includes(e.key) && !f) {
			p(!0), t.nodes.length > 0 && n({
				type: Qx.SetFocus,
				payload: { node: t.nodes[0] }
			}), e.preventDefault(), e.stopPropagation();
			return;
		}
	}, [f]), ae = h(() => document.activeElement !== _.current, []), oe = h((e, t, n) => {
		re(n.activeNode) !== re(t) && t.scrollIntoView({
			behavior: "auto",
			block: "center",
			inline: "center"
		});
	}, [re]), se = h((e) => {
		let t = O.findIndex((t) => t.type === "header" && t.category.id === e);
		t >= 0 && y.current?.scrollToIndex({
			index: t,
			align: "start"
		});
	}, [O]), ce = h((e) => {
		l(e), p(e.trim() !== "");
	}, []), le = h(() => {
		f && ((m?.querySelector("[role=\"gridcell\"] [tabindex=\"0\"]"))?.click(), n());
	}, [
		f,
		m,
		n
	]), ue = h((e) => {
		d(e);
	}, []), fe = h(() => {
		d(void 0);
	}, []), j = h((e, r) => {
		t(r.unicode) !== !1 && a?.(r.unicode), e.key === "Enter" && n();
	}, [
		t,
		a,
		n
	]), pe = v(), me = h((t, n) => {
		if (n.type === "header") {
			let e = n.category;
			return /* @__PURE__ */ (0, R.jsx)("div", {
				className: U.category,
				"data-category-id": e.id,
				role: "gridcell",
				children: /* @__PURE__ */ (0, R.jsx)(de, {
					as: "h2",
					className: U.categoryLabel,
					children: H(e.untranslatedName)
				})
			});
		}
		return n.emojis.map((t) => /* @__PURE__ */ (0, R.jsx)("div", {
			role: "gridcell",
			className: U.itemWrapper,
			children: /* @__PURE__ */ (0, R.jsx)(fT, {
				id: `${pe}-${n.categoryId}-${t.hexcode}`,
				emoji: t,
				selectedEmojis: e,
				onClick: j,
				onMouseEnter: ue,
				onMouseLeave: fe,
				disabled: r?.(t.unicode)
			})
		}, t.hexcode));
	}, [
		e,
		j,
		ue,
		fe,
		r,
		pe
	]), he = v();
	return /* @__PURE__ */ (0, R.jsx)(bS, {
		getGridCell: ne,
		getRow: re,
		getRovingNode: ie,
		handleInputFields: !0,
		moveFocus: ae,
		onGridNavigation: oe,
		onKeyDown: A,
		getAction: o,
		children: ({ onKeyDownHandler: t }) => /* @__PURE__ */ (0, R.jsxs)("section", {
			className: U.picker,
			onKeyDown: t,
			"aria-label": H("emoji_picker|emoji_picker"),
			children: [
				/* @__PURE__ */ (0, R.jsx)(ES, {
					categories: gT,
					enabledCategories: E,
					selectedCategory: ee,
					onAnchorClick: se,
					pickerBodyId: he,
					getAction: o
				}),
				/* @__PURE__ */ (0, R.jsx)(lT, {
					query: c,
					onChange: ce,
					onEnter: le,
					onKeyDown: t,
					inputRef: _,
					controlsId: he
				}),
				/* @__PURE__ */ (0, R.jsx)(Yx, {
					id: he,
					className: (0, L.default)(U.body, { [U.bodyShowHighlight]: f }),
					wrappedRef: te,
					children: m && /* @__PURE__ */ (0, R.jsx)(Pe, {
						ref: y,
						customScrollParent: m,
						data: O,
						defaultItemHeight: 35,
						components: _T,
						itemContent: me,
						rangeChanged: k
					})
				}),
				s && (u ? /* @__PURE__ */ (0, R.jsx)(uT, { emoji: u }) : /* @__PURE__ */ (0, R.jsx)(mT, {
					onClick: j,
					selectedEmojis: e,
					getAction: o
				}))
			]
		})
	});
}
//#endregion
//#region src/core/FacePile/FacePileView.tsx
function ST(e) {
	let { memberAvatarViewModels: t } = V(e.vm);
	return t.length === 0 ? null : /* @__PURE__ */ (0, R.jsx)(te, {
		className: e.classNames,
		children: t.map((e) => /* @__PURE__ */ (0, R.jsx)(fb, { vm: e }, e.getSnapshot().id))
	});
}
var CT = {
	banner: "_banner_n7ud0_8",
	content: "_content_n7ud0_38",
	icon: "_icon_n7ud0_50",
	actions: "_actions_n7ud0_61"
};
//#endregion
//#region src/room/composer/Banner/Banner.tsx
function wT({ type: e, children: t, avatar: n, className: r, actions: i, onClose: a, ...o }) {
	let s = (0, L.default)(CT.banner, r), c = S(() => {
		switch (e) {
			case "critical": return /* @__PURE__ */ (0, R.jsx)(wC, { fontSize: 24 });
			case "info": return /* @__PURE__ */ (0, R.jsx)(HC, { fontSize: 24 });
			case "success": return /* @__PURE__ */ (0, R.jsx)(HS, { fontSize: 24 });
			default: return /* @__PURE__ */ (0, R.jsx)(HC, { fontSize: 24 });
		}
	}, [e]);
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		...o,
		className: s,
		"data-type": e,
		children: [
			/* @__PURE__ */ (0, R.jsx)("div", {
				className: CT.icon,
				children: n ?? c
			}),
			/* @__PURE__ */ (0, R.jsx)("div", {
				className: CT.content,
				children: t
			}),
			/* @__PURE__ */ (0, R.jsxs)("div", {
				className: CT.actions,
				children: [i, a && /* @__PURE__ */ (0, R.jsx)(k, {
					kind: "secondary",
					size: "md",
					onClick: a,
					children: H("action|dismiss")
				})]
			})
		]
	});
}
//#endregion
//#region src/room/composer/UploadButton/UploadButton.tsx
function TT({ vm: e, defaultOpen: t = !1, ...n }) {
	let r = z(), [i, a] = T(t), { options: o } = V(e), s = h((t) => {
		t.ctrlKey && (t.preventDefault(), t.stopPropagation(), e.onUploadOptionSelected(o[0].type));
	}, [o, e]);
	if (o.length === 1) {
		let { label: t, icon: r } = o[0];
		return /* @__PURE__ */ (0, R.jsx)(j, {
			size: "26px",
			...n,
			tooltip: t,
			"aria-label": t,
			onClick: () => e.onUploadOptionSelected(o[0].type),
			children: r ? /* @__PURE__ */ (0, R.jsx)(r, {}) : /* @__PURE__ */ (0, R.jsx)(PS, {})
		});
	}
	let c = /* @__PURE__ */ (0, R.jsx)(j, {
		...n,
		size: "26px",
		tooltip: r.translate("common|attachment"),
		onClick: s,
		title: r.translate("common|attachment"),
		children: /* @__PURE__ */ (0, R.jsx)(PS, {})
	});
	return /* @__PURE__ */ (0, R.jsx)(_e, {
		side: "top",
		title: r.translate("common|attachment"),
		showTitle: !1,
		trigger: c,
		open: i,
		onOpenChange: (e) => a(e),
		children: o.map((t) => /* @__PURE__ */ (0, R.jsx)(M, {
			label: t.label,
			Icon: t.icon,
			onSelect: () => e.onUploadOptionSelected(t.type)
		}, t.label))
	});
}
var ET = {
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
function DT({ title: e, showTooltipOnLink: t, link: n, className: r }) {
	let i;
	try {
		i = new URL(n).toString();
	} catch (e) {
		console.error("URL parsing failed in MessageComposerUrlPreview", e), i = n;
	}
	let a = /* @__PURE__ */ (0, R.jsx)(N, {
		as: "a",
		type: "body",
		weight: "semibold",
		size: "md",
		className: (0, L.default)(ET.title, r),
		href: n,
		target: "_blank",
		rel: "noreferrer noopener",
		children: e
	});
	return t ? /* @__PURE__ */ (0, R.jsx)(Oe, {
		label: i,
		children: a
	}) : a;
}
function OT({ siteName: e, className: t }) {
	return /* @__PURE__ */ (0, R.jsx)("div", {
		className: (0, L.default)(ET.siteName, t),
		children: /* @__PURE__ */ (0, R.jsx)(N, {
			as: "span",
			size: "sm",
			weight: "regular",
			children: e
		})
	});
}
function kT(e) {
	return e.slice(0, 1).toUpperCase();
}
function AT(e) {
	let { translate: t } = z(), n = new URL(e.matched_url).hostname;
	switch (e.status) {
		case "loaded": {
			let t = e.preview?.image?.imageThumb !== void 0 && /* @__PURE__ */ (0, R.jsx)("img", {
				src: e.preview.image?.imageThumb,
				alt: e.preview.image.alt
			});
			return {
				entryIcon: /* @__PURE__ */ (0, R.jsx)("div", {
					className: ET.entryIcon,
					"data-color": t ? void 0 : je(n),
					children: t || kT(n)
				}),
				entryTitle: e.preview.title,
				showTooltipOnLink: e.preview.showTooltipOnLink
			};
		}
		case "loading": return {
			entryIcon: /* @__PURE__ */ (0, R.jsx)("div", {
				className: ET.loadingSpinner,
				children: /* @__PURE__ */ (0, R.jsx)(me, {})
			}),
			entryTitle: t("composer|url_preview|loading"),
			showTooltipOnLink: !1
		};
		case "failed": return {
			entryIcon: /* @__PURE__ */ (0, R.jsx)("div", {
				className: ET.failedIcon,
				children: /* @__PURE__ */ (0, R.jsx)(SC, {})
			}),
			entryTitle: t("composer|url_preview|failed"),
			showTooltipOnLink: !1
		};
	}
}
function jT({ entry: e, removePreview: t, className: n }) {
	let { translate: r } = z(), { entryIcon: i, entryTitle: a, showTooltipOnLink: o } = AT(e), s = h(() => {
		t?.(e.matched_url);
	}, [t, e.matched_url]);
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: (0, L.default)(n, ET.container),
		children: [/* @__PURE__ */ (0, R.jsxs)("div", {
			className: ET.left,
			children: [i, /* @__PURE__ */ (0, R.jsxs)("div", {
				className: ET.text,
				children: [/* @__PURE__ */ (0, R.jsx)(DT, {
					title: a,
					showTooltipOnLink: o,
					link: e.matched_url,
					className: ET.linkTitle
				}), /* @__PURE__ */ (0, R.jsx)(OT, {
					siteName: new URL(e.matched_url).hostname,
					className: ET.linkSiteName
				})]
			})]
		}), t ? /* @__PURE__ */ (0, R.jsx)(j, {
			onClick: s,
			className: (0, L.default)(ET.removePreview, ET.spanLike),
			"aria-label": r("composer|url_preview|remove"),
			children: /* @__PURE__ */ (0, R.jsx)(eC, { "aria-hidden": !0 })
		}) : null]
	}, e.matched_url);
}
function MT({ vm: e, className: t, collapsed: n, toggleCollapsed: r, removePreview: i }) {
	let { translate: a } = z(), { entries: o } = V(e), s = o.filter((e) => e.include), c = h(() => {
		s.forEach((e) => i?.(e.matched_url));
	}, [s, i]);
	if (s.length === 0) return null;
	let l = n ? null : s.map((e) => /* @__PURE__ */ (0, R.jsx)(jT, {
		entry: e,
		removePreview: i,
		className: t
	}, e.matched_url)), u = /* @__PURE__ */ (0, R.jsxs)("div", {
		className: ET.summary,
		children: [/* @__PURE__ */ (0, R.jsxs)("span", {
			className: ET.left,
			children: [/* @__PURE__ */ (0, R.jsx)("span", {
				className: ET.icons,
				children: s.map((e) => {
					let t, n, r;
					switch (e.status) {
						case "failed":
							n = ET.summaryIconFailed, r = /* @__PURE__ */ (0, R.jsx)(SC, {});
							break;
						case "loading":
							n = ET.summaryIconLoading, r = /* @__PURE__ */ (0, R.jsx)(me, {});
							break;
						case "loaded": {
							let n = new URL(e.matched_url).hostname;
							e.preview.image === void 0 ? (r = /* @__PURE__ */ (0, R.jsx)(R.Fragment, { children: kT(n) }), t = je(n)) : r = /* @__PURE__ */ (0, R.jsx)("img", {
								src: e.preview.siteIcon || e.preview.image.imageThumb,
								alt: e.preview.image.alt
							});
						}
					}
					return /* @__PURE__ */ (0, R.jsx)("div", {
						className: (0, L.default)(ET.summaryIcon, n),
						"data-color": t,
						children: r
					}, e.matched_url);
				})
			}), /* @__PURE__ */ (0, R.jsx)("span", {
				className: ET.linkCount,
				children: a("composer|url_preview|n_links", { count: s.length })
			})]
		}), /* @__PURE__ */ (0, R.jsxs)("span", {
			className: ET.right,
			children: [i && /* @__PURE__ */ (0, R.jsx)("button", {
				className: (0, L.default)(ET.clearAll, ET.spanLike),
				onClick: c,
				type: "button",
				children: a("composer|url_preview|clear_all")
			}), /* @__PURE__ */ (0, R.jsx)(j, {
				className: (0, L.default)(ET.collapse, ET.spanLike),
				onClick: r,
				"aria-label": a("composer|url_preview|collapse"),
				type: "button",
				children: /* @__PURE__ */ (0, R.jsx)(KS, { "aria-hidden": !0 })
			})]
		})]
	});
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: n ? (0, L.default)(ET.wrapper, ET.collapsed) : ET.wrapper,
		children: [u, l]
	});
}
//#endregion
//#region src/crypto/SasEmoji/SasEmojiTranslate.ts
var NT = new Map((/* @__PURE__ */ JSON.parse("[{\"number\":0,\"emoji\":\"🐶\",\"description\":\"Dog\",\"unicode\":\"U+1F436\",\"translated_descriptions\":{\"ar\":\"كلب\",\"bg\":\"Куче\",\"ca\":\"Gos\",\"cs\":\"Pes\",\"de\":\"Hund\",\"eo\":\"Hundo\",\"es\":\"Perro\",\"et\":\"Koer\",\"fa\":\"سگ\",\"fi\":\"Koira\",\"fr\":\"Chien\",\"hr\":\"pas\",\"hu\":\"Kutya\",\"id\":\"Anjing\",\"it\":\"Cane\",\"ja\":\"犬\",\"nb_NO\":\"Hund\",\"nl\":\"Hond\",\"pt\":\"Cão\",\"pt_BR\":\"Cachorro\",\"ru\":\"Собака\",\"si\":\"බල්ලා\",\"sk\":\"Pes\",\"sq\":\"Qen\",\"sr\":\"пас\",\"sv\":\"Hund\",\"szl\":null,\"tzm\":\"Aydi\",\"uk\":\"Пес\",\"vi\":\"Chó\",\"zh_Hans\":\"狗\",\"zh_Hant\":\"狗\"}},{\"number\":1,\"emoji\":\"🐱\",\"description\":\"Cat\",\"unicode\":\"U+1F431\",\"translated_descriptions\":{\"ar\":\"هِرَّة\",\"bg\":\"Котка\",\"ca\":\"Gat\",\"cs\":\"Kočka\",\"de\":\"Katze\",\"eo\":\"Kato\",\"es\":\"Gato\",\"et\":\"Kass\",\"fa\":\"گربه\",\"fi\":\"Kissa\",\"fr\":\"Chat\",\"hr\":\"mačka\",\"hu\":\"Macska\",\"id\":\"Kucing\",\"it\":\"Gatto\",\"ja\":\"猫\",\"nb_NO\":\"Katt\",\"nl\":\"Kat\",\"pt\":\"Gato\",\"pt_BR\":\"Gato\",\"ru\":\"Кошка\",\"si\":\"පූසා\",\"sk\":\"Mačka\",\"sq\":\"Mace\",\"sr\":\"мачка\",\"sv\":\"Katt\",\"szl\":null,\"tzm\":\"Amuc\",\"uk\":\"Кіт\",\"vi\":\"Mèo\",\"zh_Hans\":\"猫\",\"zh_Hant\":\"貓\"}},{\"number\":2,\"emoji\":\"🦁\",\"description\":\"Lion\",\"unicode\":\"U+1F981\",\"translated_descriptions\":{\"ar\":\"أَسَد\",\"bg\":\"Лъв\",\"ca\":\"Lleó\",\"cs\":\"Lev\",\"de\":\"Löwe\",\"eo\":\"Leono\",\"es\":\"León\",\"et\":\"Lõvi\",\"fa\":\"شیر\",\"fi\":\"Leijona\",\"fr\":\"Lion\",\"hr\":\"lav\",\"hu\":\"Oroszlán\",\"id\":\"Singa\",\"it\":\"Leone\",\"ja\":\"ライオン\",\"nb_NO\":\"Løve\",\"nl\":\"Leeuw\",\"pt\":\"Leão\",\"pt_BR\":\"Leão\",\"ru\":\"Лев\",\"si\":\"සිංහයා\",\"sk\":\"Lev\",\"sq\":\"Luan\",\"sr\":\"лав\",\"sv\":\"Lejon\",\"szl\":null,\"tzm\":\"Izem\",\"uk\":\"Лев\",\"vi\":\"Sư tử\",\"zh_Hans\":\"狮子\",\"zh_Hant\":\"獅子\"}},{\"number\":3,\"emoji\":\"🐎\",\"description\":\"Horse\",\"unicode\":\"U+1F40E\",\"translated_descriptions\":{\"ar\":\"حِصَان\",\"bg\":\"Кон\",\"ca\":\"Cavall\",\"cs\":\"Kůň\",\"de\":\"Pferd\",\"eo\":\"Ĉevalo\",\"es\":\"Caballo\",\"et\":\"Hobune\",\"fa\":\"اسب\",\"fi\":\"Hevonen\",\"fr\":\"Cheval\",\"hr\":\"konj\",\"hu\":\"Ló\",\"id\":\"Kuda\",\"it\":\"Cavallo\",\"ja\":\"馬\",\"nb_NO\":\"Hest\",\"nl\":\"Paard\",\"pt\":\"Cavalo\",\"pt_BR\":\"Cavalo\",\"ru\":\"Лошадь\",\"si\":\"අශ්වයා\",\"sk\":\"Kôň\",\"sq\":\"Kalë\",\"sr\":\"коњ\",\"sv\":\"Häst\",\"szl\":null,\"tzm\":\"Ayyis\",\"uk\":\"Кінь\",\"vi\":\"Ngựa\",\"zh_Hans\":\"马\",\"zh_Hant\":\"馬\"}},{\"number\":4,\"emoji\":\"🦄\",\"description\":\"Unicorn\",\"unicode\":\"U+1F984\",\"translated_descriptions\":{\"ar\":\"حصان وحيد القرن\",\"bg\":\"Еднорог\",\"ca\":\"Unicorn\",\"cs\":\"Jednorožec\",\"de\":\"Einhorn\",\"eo\":\"Unukorno\",\"es\":\"Unicornio\",\"et\":\"Ükssarvik\",\"fa\":\"تک شاخ\",\"fi\":\"Yksisarvinen\",\"fr\":\"Licorne\",\"hr\":\"jednorog\",\"hu\":\"Egyszarvú\",\"id\":\"Unicorn\",\"it\":\"Unicorno\",\"ja\":\"ユニコーン\",\"nb_NO\":\"Enhjørning\",\"nl\":\"Eenhoorn\",\"pt\":\"Unicórnio\",\"pt_BR\":\"Unicórnio\",\"ru\":\"Единорог\",\"si\":null,\"sk\":\"Jednorožec\",\"sq\":\"Njëbrirësh\",\"sr\":\"једнорог\",\"sv\":\"Enhörning\",\"szl\":null,\"tzm\":null,\"uk\":\"Єдиноріг\",\"vi\":\"Kỳ lân\",\"zh_Hans\":\"独角兽\",\"zh_Hant\":\"獨角獸\"}},{\"number\":5,\"emoji\":\"🐷\",\"description\":\"Pig\",\"unicode\":\"U+1F437\",\"translated_descriptions\":{\"ar\":\"خِنزِير\",\"bg\":\"Прасе\",\"ca\":\"Porc\",\"cs\":\"Prase\",\"de\":\"Schwein\",\"eo\":\"Porko\",\"es\":\"Cerdo\",\"et\":\"Siga\",\"fa\":\"خوک\",\"fi\":\"Sika\",\"fr\":\"Cochon\",\"hr\":\"svinja\",\"hu\":\"Malac\",\"id\":\"Babi\",\"it\":\"Maiale\",\"ja\":\"ブタ\",\"nb_NO\":\"Gris\",\"nl\":\"Varken\",\"pt\":\"Porco\",\"pt_BR\":\"Porco\",\"ru\":\"Свинья\",\"si\":null,\"sk\":\"Prasa\",\"sq\":\"Derr\",\"sr\":\"прасе\",\"sv\":\"Gris\",\"szl\":null,\"tzm\":\"Ilef\",\"uk\":\"Свиня\",\"vi\":\"Heo\",\"zh_Hans\":\"猪\",\"zh_Hant\":\"豬\"}},{\"number\":6,\"emoji\":\"🐘\",\"description\":\"Elephant\",\"unicode\":\"U+1F418\",\"translated_descriptions\":{\"ar\":\"فِيل\",\"bg\":\"Слон\",\"ca\":\"Elefant\",\"cs\":\"Slon\",\"de\":\"Elefant\",\"eo\":\"Elefanto\",\"es\":\"Elefante\",\"et\":\"Elevant\",\"fa\":\"فیل\",\"fi\":\"Norsu\",\"fr\":\"Éléphant\",\"hr\":\"slon\",\"hu\":\"Elefánt\",\"id\":\"Gajah\",\"it\":\"Elefante\",\"ja\":\"ゾウ\",\"nb_NO\":\"Elefant\",\"nl\":\"Olifant\",\"pt\":\"Elefante\",\"pt_BR\":\"Elefante\",\"ru\":\"Слон\",\"si\":null,\"sk\":\"Slon\",\"sq\":\"Elefant\",\"sr\":\"слон\",\"sv\":\"Elefant\",\"szl\":null,\"tzm\":\"Ilu\",\"uk\":\"Слон\",\"vi\":\"Voi\",\"zh_Hans\":\"大象\",\"zh_Hant\":\"大象\"}},{\"number\":7,\"emoji\":\"🐰\",\"description\":\"Rabbit\",\"unicode\":\"U+1F430\",\"translated_descriptions\":{\"ar\":\"أَرنَب\",\"bg\":\"Заек\",\"ca\":\"Conill\",\"cs\":\"Králík\",\"de\":\"Hase\",\"eo\":\"Kuniklo\",\"es\":\"Conejo\",\"et\":\"Jänes\",\"fa\":\"خرگوش\",\"fi\":\"Kani\",\"fr\":\"Lapin\",\"hr\":\"zec\",\"hu\":\"Nyúl\",\"id\":\"Kelinci\",\"it\":\"Coniglio\",\"ja\":\"うさぎ\",\"nb_NO\":\"Kanin\",\"nl\":\"Konijn\",\"pt\":\"Coelho\",\"pt_BR\":\"Coelho\",\"ru\":\"Кролик\",\"si\":null,\"sk\":\"Zajac\",\"sq\":\"Lepur\",\"sr\":\"зец\",\"sv\":\"Kanin\",\"szl\":null,\"tzm\":\"Agnin\",\"uk\":\"Кріль\",\"vi\":\"Thỏ\",\"zh_Hans\":\"兔子\",\"zh_Hant\":\"兔子\"}},{\"number\":8,\"emoji\":\"🐼\",\"description\":\"Panda\",\"unicode\":\"U+1F43C\",\"translated_descriptions\":{\"ar\":\"باندَا\",\"bg\":\"Панда\",\"ca\":\"Panda\",\"cs\":\"Panda\",\"de\":\"Panda\",\"eo\":\"Pando\",\"es\":\"Panda\",\"et\":\"Panda\",\"fa\":\"پاندا\",\"fi\":\"Panda\",\"fr\":\"Panda\",\"hr\":\"panda\",\"hu\":\"Panda\",\"id\":\"Panda\",\"it\":\"Panda\",\"ja\":\"パンダ\",\"nb_NO\":\"Panda\",\"nl\":\"Panda\",\"pt\":\"Panda\",\"pt_BR\":\"Panda\",\"ru\":\"Панда\",\"si\":null,\"sk\":\"Panda\",\"sq\":\"Panda\",\"sr\":\"панда\",\"sv\":\"Panda\",\"szl\":null,\"tzm\":null,\"uk\":\"Панда\",\"vi\":\"Gấu trúc\",\"zh_Hans\":\"熊猫\",\"zh_Hant\":\"熊貓\"}},{\"number\":9,\"emoji\":\"🐓\",\"description\":\"Rooster\",\"unicode\":\"U+1F413\",\"translated_descriptions\":{\"ar\":\"دِيك\",\"bg\":\"Петел\",\"ca\":\"Gall\",\"cs\":\"Kohout\",\"de\":\"Hahn\",\"eo\":\"Virkoko\",\"es\":\"Gallo\",\"et\":\"Kukk\",\"fa\":\"خروس\",\"fi\":\"Kukko\",\"fr\":\"Coq\",\"hr\":\"kokot\",\"hu\":\"Kakas\",\"id\":\"Ayam\",\"it\":\"Gallo\",\"ja\":\"ニワトリ\",\"nb_NO\":\"Hane\",\"nl\":\"Haan\",\"pt\":\"Galo\",\"pt_BR\":\"Galo\",\"ru\":\"Петух\",\"si\":null,\"sk\":\"Kohút\",\"sq\":\"Këndes\",\"sr\":\"петао\",\"sv\":\"Tupp\",\"szl\":null,\"tzm\":\"Ayaẓiḍ\",\"uk\":\"Когут\",\"vi\":\"Gà trống\",\"zh_Hans\":\"公鸡\",\"zh_Hant\":\"公雞\"}},{\"number\":10,\"emoji\":\"🐧\",\"description\":\"Penguin\",\"unicode\":\"U+1F427\",\"translated_descriptions\":{\"ar\":\"بطريق\",\"bg\":\"Пингвин\",\"ca\":\"Pingüí\",\"cs\":\"Tučňák\",\"de\":\"Pinguin\",\"eo\":\"Pingveno\",\"es\":\"Pingüino\",\"et\":\"Pingviin\",\"fa\":\"پنگوئن\",\"fi\":\"Pingviini\",\"fr\":\"Manchot\",\"hr\":\"pingvin\",\"hu\":\"Pingvin\",\"id\":\"Penguin\",\"it\":\"Pinguino\",\"ja\":\"ペンギン\",\"nb_NO\":\"Pingvin\",\"nl\":\"Pinguïn\",\"pt\":\"Pinguim\",\"pt_BR\":\"Pinguim\",\"ru\":\"Пингвин\",\"si\":null,\"sk\":\"Tučniak\",\"sq\":\"Pinguin\",\"sr\":\"пингвин\",\"sv\":\"Pingvin\",\"szl\":null,\"tzm\":null,\"uk\":\"Пінгвін\",\"vi\":\"Chim cánh cụt\",\"zh_Hans\":\"企鹅\",\"zh_Hant\":\"企鵝\"}},{\"number\":11,\"emoji\":\"🐢\",\"description\":\"Turtle\",\"unicode\":\"U+1F422\",\"translated_descriptions\":{\"ar\":\"سُلحفاة\",\"bg\":\"Костенурка\",\"ca\":\"Tortuga\",\"cs\":\"Želva\",\"de\":\"Schildkröte\",\"eo\":\"Testudo\",\"es\":\"Tortuga\",\"et\":\"Kilpkonn\",\"fa\":\"لاک‌پشت\",\"fi\":\"Kilpikonna\",\"fr\":\"Tortue\",\"hr\":\"kornjača\",\"hu\":\"Teknős\",\"id\":\"Kura-Kura\",\"it\":\"Tartaruga\",\"ja\":\"亀\",\"nb_NO\":\"Skilpadde\",\"nl\":\"Schildpad\",\"pt\":\"Tartaruga\",\"pt_BR\":\"Tartaruga\",\"ru\":\"Черепаха\",\"si\":null,\"sk\":\"Korytnačka\",\"sq\":\"Breshkë\",\"sr\":\"корњача\",\"sv\":\"Sköldpadda\",\"szl\":null,\"tzm\":\"Ifker\",\"uk\":\"Черепаха\",\"vi\":\"Rùa\",\"zh_Hans\":\"乌龟\",\"zh_Hant\":\"烏龜\"}},{\"number\":12,\"emoji\":\"🐟\",\"description\":\"Fish\",\"unicode\":\"U+1F41F\",\"translated_descriptions\":{\"ar\":\"سَمَكة\",\"bg\":\"Риба\",\"ca\":\"Peix\",\"cs\":\"Ryba\",\"de\":\"Fisch\",\"eo\":\"Fiŝo\",\"es\":\"Pez\",\"et\":\"Kala\",\"fa\":\"ماهی\",\"fi\":\"Kala\",\"fr\":\"Poisson\",\"hr\":\"riba\",\"hu\":\"Hal\",\"id\":\"Ikan\",\"it\":\"Pesce\",\"ja\":\"魚\",\"nb_NO\":\"Fisk\",\"nl\":\"Vis\",\"pt\":\"Peixe\",\"pt_BR\":\"Peixe\",\"ru\":\"Рыба\",\"si\":null,\"sk\":\"Ryba\",\"sq\":\"Peshk\",\"sr\":\"риба\",\"sv\":\"Fisk\",\"szl\":null,\"tzm\":\"Aselm\",\"uk\":\"Риба\",\"vi\":\"Cá\",\"zh_Hans\":\"鱼\",\"zh_Hant\":\"魚\"}},{\"number\":13,\"emoji\":\"🐙\",\"description\":\"Octopus\",\"unicode\":\"U+1F419\",\"translated_descriptions\":{\"ar\":\"أُخطُبُوط\",\"bg\":\"Октопод\",\"ca\":\"Pop\",\"cs\":\"Chobotnice\",\"de\":\"Oktopus\",\"eo\":\"Polpo\",\"es\":\"Pulpo\",\"et\":\"Kaheksajalg\",\"fa\":\"اختاپوس\",\"fi\":\"Tursas\",\"fr\":\"Poulpe\",\"hr\":\"hobotnica\",\"hu\":\"Polip\",\"id\":\"Gurita\",\"it\":\"Polpo\",\"ja\":\"たこ\",\"nb_NO\":\"Blekksprut\",\"nl\":\"Octopus\",\"pt\":\"Polvo\",\"pt_BR\":\"Polvo\",\"ru\":\"Осьминог\",\"si\":null,\"sk\":\"Chobotnica\",\"sq\":\"Oktapod\",\"sr\":\"октопод\",\"sv\":\"Bläckfisk\",\"szl\":null,\"tzm\":null,\"uk\":\"Восьминіг\",\"vi\":\"Bạch tuộc\",\"zh_Hans\":\"章鱼\",\"zh_Hant\":\"章魚\"}},{\"number\":14,\"emoji\":\"🦋\",\"description\":\"Butterfly\",\"unicode\":\"U+1F98B\",\"translated_descriptions\":{\"ar\":\"فَرَاشَة\",\"bg\":\"Пеперуда\",\"ca\":\"Papallona\",\"cs\":\"Motýl\",\"de\":\"Schmetterling\",\"eo\":\"Papilio\",\"es\":\"Mariposa\",\"et\":\"Liblikas\",\"fa\":\"پروانه\",\"fi\":\"Perhonen\",\"fr\":\"Papillon\",\"hr\":\"leptir\",\"hu\":\"Pillangó\",\"id\":\"Kupu-Kupu\",\"it\":\"Farfalla\",\"ja\":\"ちょうちょ\",\"nb_NO\":\"Sommerfugl\",\"nl\":\"Vlinder\",\"pt\":\"Borboleta\",\"pt_BR\":\"Borboleta\",\"ru\":\"Бабочка\",\"si\":null,\"sk\":\"Motýľ\",\"sq\":\"Flutur\",\"sr\":\"лептир\",\"sv\":\"Fjäril\",\"szl\":null,\"tzm\":null,\"uk\":\"Метелик\",\"vi\":\"Bướm\",\"zh_Hans\":\"蝴蝶\",\"zh_Hant\":\"蝴蝶\"}},{\"number\":15,\"emoji\":\"🌷\",\"description\":\"Flower\",\"unicode\":\"U+1F337\",\"translated_descriptions\":{\"ar\":\"زَهرَة\",\"bg\":\"Цвете\",\"ca\":\"Flor\",\"cs\":\"Květina\",\"de\":\"Blume\",\"eo\":\"Floro\",\"es\":\"Flor\",\"et\":\"Lill\",\"fa\":\"گل\",\"fi\":\"Kukka\",\"fr\":\"Fleur\",\"hr\":\"svijet\",\"hu\":\"Virág\",\"id\":\"Bunga\",\"it\":\"Fiore\",\"ja\":\"花\",\"nb_NO\":\"Blomst\",\"nl\":\"Bloem\",\"pt\":\"Flor\",\"pt_BR\":\"Flor\",\"ru\":\"Цветок\",\"si\":null,\"sk\":\"Kvet\",\"sq\":\"Lule\",\"sr\":\"цвет\",\"sv\":\"Blomma\",\"szl\":null,\"tzm\":null,\"uk\":\"Квітка\",\"vi\":\"Hoa\",\"zh_Hans\":\"花\",\"zh_Hant\":\"花\"}},{\"number\":16,\"emoji\":\"🌳\",\"description\":\"Tree\",\"unicode\":\"U+1F333\",\"translated_descriptions\":{\"ar\":\"شَجَرَة\",\"bg\":\"Дърво\",\"ca\":\"Arbre\",\"cs\":\"Strom\",\"de\":\"Baum\",\"eo\":\"Arbo\",\"es\":\"Árbol\",\"et\":\"Puu\",\"fa\":\"درخت\",\"fi\":\"Puu\",\"fr\":\"Arbre\",\"hr\":\"drvo\",\"hu\":\"Fa\",\"id\":\"Pohon\",\"it\":\"Albero\",\"ja\":\"木\",\"nb_NO\":\"Tre\",\"nl\":\"Boom\",\"pt\":\"Árvore\",\"pt_BR\":\"Árvore\",\"ru\":\"Дерево\",\"si\":null,\"sk\":\"Strom\",\"sq\":\"Pemë\",\"sr\":\"дрво\",\"sv\":\"Träd\",\"szl\":null,\"tzm\":\"Aseklu\",\"uk\":\"Дерево\",\"vi\":\"Cây\",\"zh_Hans\":\"树\",\"zh_Hant\":\"樹\"}},{\"number\":17,\"emoji\":\"🌵\",\"description\":\"Cactus\",\"unicode\":\"U+1F335\",\"translated_descriptions\":{\"ar\":\"صبار\",\"bg\":\"Кактус\",\"ca\":\"Cactus\",\"cs\":\"Kaktus\",\"de\":\"Kaktus\",\"eo\":\"Kakto\",\"es\":\"Cactus\",\"et\":\"Kaktus\",\"fa\":\"کاکتوس\",\"fi\":\"Kaktus\",\"fr\":\"Cactus\",\"hr\":\"kaktus\",\"hu\":\"Kaktusz\",\"id\":\"Kaktus\",\"it\":\"Cactus\",\"ja\":\"サボテン\",\"nb_NO\":\"Kaktus\",\"nl\":\"Cactus\",\"pt\":\"Cato\",\"pt_BR\":\"Cacto\",\"ru\":\"Кактус\",\"si\":null,\"sk\":\"Kaktus\",\"sq\":\"Kaktus\",\"sr\":\"кактус\",\"sv\":\"Kaktus\",\"szl\":null,\"tzm\":null,\"uk\":\"Кактус\",\"vi\":\"Xương rồng\",\"zh_Hans\":\"仙人掌\",\"zh_Hant\":\"仙人掌\"}},{\"number\":18,\"emoji\":\"🍄\",\"description\":\"Mushroom\",\"unicode\":\"U+1F344\",\"translated_descriptions\":{\"ar\":\"فُطر\",\"bg\":\"Гъба\",\"ca\":\"Bolet\",\"cs\":\"Houba\",\"de\":\"Pilz\",\"eo\":\"Fungo\",\"es\":\"Seta\",\"et\":\"Seen\",\"fa\":\"قارچ\",\"fi\":\"Sieni\",\"fr\":\"Champignon\",\"hr\":\"gljiva\",\"hu\":\"Gomba\",\"id\":\"Jamur\",\"it\":\"Fungo\",\"ja\":\"きのこ\",\"nb_NO\":\"Sopp\",\"nl\":\"Paddenstoel\",\"pt\":\"Cogumelo\",\"pt_BR\":\"Cogumelo\",\"ru\":\"Гриб\",\"si\":null,\"sk\":\"Huba\",\"sq\":\"Kërpudhë\",\"sr\":\"печурка\",\"sv\":\"Svamp\",\"szl\":null,\"tzm\":\"Agursel\",\"uk\":\"Гриб\",\"vi\":\"Nấm\",\"zh_Hans\":\"蘑菇\",\"zh_Hant\":\"蘑菇\"}},{\"number\":19,\"emoji\":\"🌏\",\"description\":\"Globe\",\"unicode\":\"U+1F30F\",\"translated_descriptions\":{\"ar\":\"كُرَةٌ أرضِيَّة\",\"bg\":\"Глобус\",\"ca\":\"Globus terraqüi\",\"cs\":\"Zeměkoule\",\"de\":\"Globus\",\"eo\":\"Globo\",\"es\":\"Globo\",\"et\":\"Maakera\",\"fa\":\"زمین\",\"fi\":\"Maapallo\",\"fr\":\"Globe\",\"hr\":\"Globus\",\"hu\":\"Földgömb\",\"id\":\"Bola Dunia\",\"it\":\"Globo\",\"ja\":\"地球\",\"nb_NO\":\"Globus\",\"nl\":\"Wereldbol\",\"pt\":\"Globo\",\"pt_BR\":\"Globo\",\"ru\":\"Глобус\",\"si\":null,\"sk\":\"Zemeguľa\",\"sq\":\"Rruzull\",\"sr\":\"глобус\",\"sv\":\"Jordklot\",\"szl\":null,\"tzm\":null,\"uk\":\"Глобус\",\"vi\":\"Địa cầu\",\"zh_Hans\":\"地球\",\"zh_Hant\":\"地球\"}},{\"number\":20,\"emoji\":\"🌙\",\"description\":\"Moon\",\"unicode\":\"U+1F319\",\"translated_descriptions\":{\"ar\":\"قَمَر\",\"bg\":\"Луна\",\"ca\":\"Lluna\",\"cs\":\"Měsíc\",\"de\":\"Mond\",\"eo\":\"Luno\",\"es\":\"Luna\",\"et\":\"Kuu\",\"fa\":\"ماه\",\"fi\":\"Kuu\",\"fr\":\"Lune\",\"hr\":\"mjesec\",\"hu\":\"Hold\",\"id\":\"Bulan\",\"it\":\"Luna\",\"ja\":\"月\",\"nb_NO\":\"Måne\",\"nl\":\"Maan\",\"pt\":\"Lua\",\"pt_BR\":\"Lua\",\"ru\":\"Луна\",\"si\":null,\"sk\":\"Mesiac\",\"sq\":\"Hënë\",\"sr\":\"месец\",\"sv\":\"Måne\",\"szl\":null,\"tzm\":\"Ayyur\",\"uk\":\"Місяць\",\"vi\":\"Mặt trăng\",\"zh_Hans\":\"月亮\",\"zh_Hant\":\"月亮\"}},{\"number\":21,\"emoji\":\"☁️\",\"description\":\"Cloud\",\"unicode\":\"U+2601U+FE0F\",\"translated_descriptions\":{\"ar\":\"سَحابَة\",\"bg\":\"Облак\",\"ca\":\"Núvol\",\"cs\":\"Mrak\",\"de\":\"Wolke\",\"eo\":\"Nubo\",\"es\":\"Nube\",\"et\":\"Pilv\",\"fa\":\"ابر\",\"fi\":\"Pilvi\",\"fr\":\"Nuage\",\"hr\":\"oblak\",\"hu\":\"Felhő\",\"id\":\"Awan\",\"it\":\"Nuvola\",\"ja\":\"雲\",\"nb_NO\":\"Sky\",\"nl\":\"Wolk\",\"pt\":\"Nuvem\",\"pt_BR\":\"Nuvem\",\"ru\":\"Облако\",\"si\":null,\"sk\":\"Oblak\",\"sq\":\"Re\",\"sr\":\"облак\",\"sv\":\"Moln\",\"szl\":null,\"tzm\":null,\"uk\":\"Хмара\",\"vi\":\"Mây\",\"zh_Hans\":\"云\",\"zh_Hant\":\"雲朵\"}},{\"number\":22,\"emoji\":\"🔥\",\"description\":\"Fire\",\"unicode\":\"U+1F525\",\"translated_descriptions\":{\"ar\":\"نار\",\"bg\":\"Огън\",\"ca\":\"Foc\",\"cs\":\"Oheň\",\"de\":\"Feuer\",\"eo\":\"Fajro\",\"es\":\"Fuego\",\"et\":\"Tuli\",\"fa\":\"آتش\",\"fi\":\"Tuli\",\"fr\":\"Feu\",\"hr\":\"vatra\",\"hu\":\"Tűz\",\"id\":\"Api\",\"it\":\"Fuoco\",\"ja\":\"炎\",\"nb_NO\":\"Flamme\",\"nl\":\"Vuur\",\"pt\":\"Fogo\",\"pt_BR\":\"Fogo\",\"ru\":\"Огонь\",\"si\":null,\"sk\":\"Oheň\",\"sq\":\"Zjarr\",\"sr\":\"ватра\",\"sv\":\"Eld\",\"szl\":null,\"tzm\":\"Timessi\",\"uk\":\"Вогонь\",\"vi\":\"Lửa\",\"zh_Hans\":\"火\",\"zh_Hant\":\"火\"}},{\"number\":23,\"emoji\":\"🍌\",\"description\":\"Banana\",\"unicode\":\"U+1F34C\",\"translated_descriptions\":{\"ar\":\"مَوزَة\",\"bg\":\"Банан\",\"ca\":\"Plàtan\",\"cs\":\"Banán\",\"de\":\"Banane\",\"eo\":\"Banano\",\"es\":\"Plátano\",\"et\":\"Banaan\",\"fa\":\"موز\",\"fi\":\"Banaani\",\"fr\":\"Banane\",\"hr\":\"banana\",\"hu\":\"Banán\",\"id\":\"Pisang\",\"it\":\"Banana\",\"ja\":\"バナナ\",\"nb_NO\":\"Banan\",\"nl\":\"Banaan\",\"pt\":\"Banana\",\"pt_BR\":\"Banana\",\"ru\":\"Банан\",\"si\":null,\"sk\":\"Banán\",\"sq\":\"Banane\",\"sr\":\"банана\",\"sv\":\"Banan\",\"szl\":null,\"tzm\":\"Tabanant\",\"uk\":\"Банан\",\"vi\":\"Chuối\",\"zh_Hans\":\"香蕉\",\"zh_Hant\":\"香蕉\"}},{\"number\":24,\"emoji\":\"🍎\",\"description\":\"Apple\",\"unicode\":\"U+1F34E\",\"translated_descriptions\":{\"ar\":\"تُفَّاحَة\",\"bg\":\"Ябълка\",\"ca\":\"Poma\",\"cs\":\"Jablko\",\"de\":\"Apfel\",\"eo\":\"Pomo\",\"es\":\"Manzana\",\"et\":\"Õun\",\"fa\":\"سیب\",\"fi\":\"Omena\",\"fr\":\"Pomme\",\"hr\":\"jabuka\",\"hu\":\"Alma\",\"id\":\"Apel\",\"it\":\"Mela\",\"ja\":\"リンゴ\",\"nb_NO\":\"Eple\",\"nl\":\"Appel\",\"pt\":\"Maçã\",\"pt_BR\":\"Maçã\",\"ru\":\"Яблоко\",\"si\":null,\"sk\":\"Jablko\",\"sq\":\"Mollë\",\"sr\":\"јабука\",\"sv\":\"Äpple\",\"szl\":null,\"tzm\":\"Tadeffuyt\",\"uk\":\"Яблуко\",\"vi\":\"Táo\",\"zh_Hans\":\"苹果\",\"zh_Hant\":\"蘋果\"}},{\"number\":25,\"emoji\":\"🍓\",\"description\":\"Strawberry\",\"unicode\":\"U+1F353\",\"translated_descriptions\":{\"ar\":\"فَراوِلَة\",\"bg\":\"Ягода\",\"ca\":\"Maduixa\",\"cs\":\"Jahoda\",\"de\":\"Erdbeere\",\"eo\":\"Frago\",\"es\":\"Fresa\",\"et\":\"Maasikas\",\"fa\":\"توت فرنگی\",\"fi\":\"Mansikka\",\"fr\":\"Fraise\",\"hr\":\"jagoda\",\"hu\":\"Eper\",\"id\":\"Stroberi\",\"it\":\"Fragola\",\"ja\":\"いちご\",\"nb_NO\":\"Jordbær\",\"nl\":\"Aardbei\",\"pt\":\"Morango\",\"pt_BR\":\"Morango\",\"ru\":\"Клубника\",\"si\":null,\"sk\":\"Jahoda\",\"sq\":\"Luleshtrydhe\",\"sr\":\"јагода\",\"sv\":\"Jordgubbe\",\"szl\":null,\"tzm\":null,\"uk\":\"Полуниця\",\"vi\":\"Dâu tây\",\"zh_Hans\":\"草莓\",\"zh_Hant\":\"草莓\"}},{\"number\":26,\"emoji\":\"🌽\",\"description\":\"Corn\",\"unicode\":\"U+1F33D\",\"translated_descriptions\":{\"ar\":\"ذُرَة\",\"bg\":\"Царевица\",\"ca\":\"Blat de moro\",\"cs\":\"Kukuřice\",\"de\":\"Mais\",\"eo\":\"Maizo\",\"es\":\"Maíz\",\"et\":\"Mais\",\"fa\":\"ذرت\",\"fi\":\"Maissi\",\"fr\":\"Maïs\",\"hr\":\"kukuruza\",\"hu\":\"Kukorica\",\"id\":\"Jagung\",\"it\":\"Mais\",\"ja\":\"とうもろこし\",\"nb_NO\":\"Mais\",\"nl\":\"Maïs\",\"pt\":\"Milho\",\"pt_BR\":\"Milho\",\"ru\":\"Кукуруза\",\"si\":null,\"sk\":\"Kukurica\",\"sq\":\"Misër\",\"sr\":\"кукуруз\",\"sv\":\"Majs\",\"szl\":null,\"tzm\":null,\"uk\":\"Кукурудза\",\"vi\":\"Bắp\",\"zh_Hans\":\"玉米\",\"zh_Hant\":\"玉米\"}},{\"number\":27,\"emoji\":\"🍕\",\"description\":\"Pizza\",\"unicode\":\"U+1F355\",\"translated_descriptions\":{\"ar\":\"بِيتزا\",\"bg\":\"Пица\",\"ca\":\"Pizza\",\"cs\":\"Pizza\",\"de\":\"Pizza\",\"eo\":\"Pico\",\"es\":\"Pizza\",\"et\":\"Pitsa\",\"fa\":\"پیتزا\",\"fi\":\"Pizza\",\"fr\":\"Pizza\",\"hr\":\"pizza\",\"hu\":\"Pizza\",\"id\":\"Pizza\",\"it\":\"Pizza\",\"ja\":\"ピザ\",\"nb_NO\":\"Pizza\",\"nl\":\"Pizza\",\"pt\":\"Piza\",\"pt_BR\":\"Pizza\",\"ru\":\"Пицца\",\"si\":null,\"sk\":\"Pizza\",\"sq\":\"Picë\",\"sr\":\"пица\",\"sv\":\"Pizza\",\"szl\":null,\"tzm\":null,\"uk\":\"Піца\",\"vi\":\"Pizza\",\"zh_Hans\":\"披萨\",\"zh_Hant\":\"披薩\"}},{\"number\":28,\"emoji\":\"🎂\",\"description\":\"Cake\",\"unicode\":\"U+1F382\",\"translated_descriptions\":{\"ar\":\"كَعكَة\",\"bg\":\"Торта\",\"ca\":\"Pastís\",\"cs\":\"Dort\",\"de\":\"Kuchen\",\"eo\":\"Torto\",\"es\":\"Tarta\",\"et\":\"Kook\",\"fa\":\"کیک\",\"fi\":\"Kakku\",\"fr\":\"Gâteau\",\"hr\":\"torta\",\"hu\":\"Süti\",\"id\":\"Kue\",\"it\":\"Torta\",\"ja\":\"ケーキ\",\"nb_NO\":\"Kake\",\"nl\":\"Taart\",\"pt\":\"Bolo\",\"pt_BR\":\"Bolo\",\"ru\":\"Торт\",\"si\":null,\"sk\":\"Torta\",\"sq\":\"Tortë\",\"sr\":\"торта\",\"sv\":\"Tårta\",\"szl\":null,\"tzm\":null,\"uk\":\"Пиріг\",\"vi\":\"Bánh\",\"zh_Hans\":\"蛋糕\",\"zh_Hant\":\"蛋糕\"}},{\"number\":29,\"emoji\":\"❤️\",\"description\":\"Heart\",\"unicode\":\"U+2764U+FE0F\",\"translated_descriptions\":{\"ar\":\"قَلب\",\"bg\":\"Сърце\",\"ca\":\"Cor\",\"cs\":\"Srdce\",\"de\":\"Herz\",\"eo\":\"Koro\",\"es\":\"Corazón\",\"et\":\"Süda\",\"fa\":\"قلب\",\"fi\":\"Sydän\",\"fr\":\"Cœur\",\"hr\":\"srca\",\"hu\":\"Szív\",\"id\":\"Hati\",\"it\":\"Cuore\",\"ja\":\"ハート\",\"nb_NO\":\"Hjerte\",\"nl\":\"Hart\",\"pt\":\"Coração\",\"pt_BR\":\"Coração\",\"ru\":\"Сердце\",\"si\":null,\"sk\":\"Srdce\",\"sq\":\"Zemër\",\"sr\":\"срце\",\"sv\":\"Hjärta\",\"szl\":null,\"tzm\":\"Ul\",\"uk\":\"Серце\",\"vi\":\"Tim\",\"zh_Hans\":\"心\",\"zh_Hant\":\"愛心\"}},{\"number\":30,\"emoji\":\"😀\",\"description\":\"Smiley\",\"unicode\":\"U+1F600\",\"translated_descriptions\":{\"ar\":\"اِبتِسَامَة\",\"bg\":\"Усмивка\",\"ca\":\"Somrient\",\"cs\":\"Smajlík\",\"de\":\"Lächeln\",\"eo\":\"Rideto\",\"es\":\"Emoticono\",\"et\":\"Smaili\",\"fa\":\"خنده\",\"fi\":\"Hymynaama\",\"fr\":\"Sourire\",\"hr\":\"smajlića\",\"hu\":\"Mosoly\",\"id\":\"Senyuman\",\"it\":\"Faccina sorridente\",\"ja\":\"スマイル\",\"nb_NO\":\"Smilefjes\",\"nl\":\"Smiley\",\"pt\":\"Sorriso\",\"pt_BR\":\"Sorriso\",\"ru\":\"Улыбка\",\"si\":null,\"sk\":\"Smajlík\",\"sq\":\"Emotikon\",\"sr\":\"смајли\",\"sv\":\"Smiley\",\"szl\":null,\"tzm\":null,\"uk\":\"Посмішка\",\"vi\":\"Mặt cười\",\"zh_Hans\":\"笑脸\",\"zh_Hant\":\"笑臉\"}},{\"number\":31,\"emoji\":\"🤖\",\"description\":\"Robot\",\"unicode\":\"U+1F916\",\"translated_descriptions\":{\"ar\":\"رُوبُوت\",\"bg\":\"Робот\",\"ca\":\"Robot\",\"cs\":\"Robot\",\"de\":\"Roboter\",\"eo\":\"Roboto\",\"es\":\"Robot\",\"et\":\"Robot\",\"fa\":\"ربات\",\"fi\":\"Robotti\",\"fr\":\"Robot\",\"hr\":\"robot\",\"hu\":\"Robot\",\"id\":\"Robot\",\"it\":\"Robot\",\"ja\":\"ロボット\",\"nb_NO\":\"Robot\",\"nl\":\"Robot\",\"pt\":\"Robô\",\"pt_BR\":\"Robô\",\"ru\":\"Робот\",\"si\":null,\"sk\":\"Robot\",\"sq\":\"Robot\",\"sr\":\"робот\",\"sv\":\"Robot\",\"szl\":null,\"tzm\":\"Aṛubu\",\"uk\":\"Робот\",\"vi\":\"Rô-bô\",\"zh_Hans\":\"机器人\",\"zh_Hant\":\"機器人\"}},{\"number\":32,\"emoji\":\"🎩\",\"description\":\"Hat\",\"unicode\":\"U+1F3A9\",\"translated_descriptions\":{\"ar\":\"قُبَّعَة\",\"bg\":\"Шапка\",\"ca\":\"Barret\",\"cs\":\"Klobouk\",\"de\":\"Hut\",\"eo\":\"Ĉapelo\",\"es\":\"Sombrero\",\"et\":\"Kübar\",\"fa\":\"کلاه\",\"fi\":\"Hattu\",\"fr\":\"Chapeau\",\"hr\":\"kapa\",\"hu\":\"Kalap\",\"id\":\"Topi\",\"it\":\"Cappello\",\"ja\":\"帽子\",\"nb_NO\":\"Hatt\",\"nl\":\"Hoed\",\"pt\":\"Chapéu\",\"pt_BR\":\"Chapéu\",\"ru\":\"Шляпа\",\"si\":null,\"sk\":\"Klobúk\",\"sq\":\"Kapë\",\"sr\":\"шешир\",\"sv\":\"Hatt\",\"szl\":null,\"tzm\":\"Taraza\",\"uk\":\"Капелюх\",\"vi\":\"Mũ\",\"zh_Hans\":\"帽子\",\"zh_Hant\":\"帽子\"}},{\"number\":33,\"emoji\":\"👓\",\"description\":\"Glasses\",\"unicode\":\"U+1F453\",\"translated_descriptions\":{\"ar\":\"نَظَّارَة\",\"bg\":\"Очила\",\"ca\":\"Ulleres\",\"cs\":\"Brýle\",\"de\":\"Brille\",\"eo\":\"Okulvitroj\",\"es\":\"Gafas\",\"et\":\"Prillid\",\"fa\":\"عینک\",\"fi\":\"Silmälasit\",\"fr\":\"Lunettes\",\"hr\":\"naočale\",\"hu\":\"Szemüveg\",\"id\":\"Kacamata\",\"it\":\"Occhiali\",\"ja\":\"めがね\",\"nb_NO\":\"Briller\",\"nl\":\"Bril\",\"pt\":\"Óculos\",\"pt_BR\":\"Óculos\",\"ru\":\"Очки\",\"si\":null,\"sk\":\"Okuliare\",\"sq\":\"Syze\",\"sr\":\"наочаре\",\"sv\":\"Glasögon\",\"szl\":null,\"tzm\":null,\"uk\":\"Окуляри\",\"vi\":\"Kính mắt\",\"zh_Hans\":\"眼镜\",\"zh_Hant\":\"眼鏡\"}},{\"number\":34,\"emoji\":\"🔧\",\"description\":\"Spanner\",\"unicode\":\"U+1F527\",\"translated_descriptions\":{\"ar\":\"مِفتَاحُ رَبط\",\"bg\":\"Гаечен ключ\",\"ca\":\"Clau anglesa\",\"cs\":\"Klíč\",\"de\":\"Schraubenschlüssel\",\"eo\":\"Ŝraŭbŝlosilo\",\"es\":\"Llave inglesa\",\"et\":\"Mutrivõti\",\"fa\":\"آچار\",\"fi\":\"Kiintoavain\",\"fr\":\"Clé à molette\",\"hr\":\"ključ\",\"hu\":\"Csavarkulcs\",\"id\":\"Kunci Bengkel\",\"it\":\"Chiave inglese\",\"ja\":\"スパナ\",\"nb_NO\":\"Fastnøkkel\",\"nl\":\"Moersleutel\",\"pt\":\"Chave inglesa\",\"pt_BR\":\"Chave inglesa\",\"ru\":\"Ключ\",\"si\":null,\"sk\":\"Vidlicový kľúč\",\"sq\":\"Çelës\",\"sr\":\"кључ\",\"sv\":\"Skruvnyckel\",\"szl\":null,\"tzm\":null,\"uk\":\"Гайковий ключ\",\"vi\":\"Cờ-lê\",\"zh_Hans\":\"扳手\",\"zh_Hant\":\"扳手\"}},{\"number\":35,\"emoji\":\"🎅\",\"description\":\"Santa\",\"unicode\":\"U+1F385\",\"translated_descriptions\":{\"ar\":\"سانتا\",\"bg\":\"Дядо Коледа\",\"ca\":\"Pare Noél\",\"cs\":\"Mikuláš\",\"de\":\"Weihnachtsmann\",\"eo\":\"Kristnaska viro\",\"es\":\"Papá Noel\",\"et\":\"Jõuluvana\",\"fa\":\"بابا نوئل\",\"fi\":\"Joulupukki\",\"fr\":\"Père Noël\",\"hr\":\"deda Mraz\",\"hu\":\"Télapó\",\"id\":\"Santa\",\"it\":\"Babbo Natale\",\"ja\":\"サンタ\",\"nb_NO\":\"Julenisse\",\"nl\":\"Kerstman\",\"pt\":\"Pai Natal\",\"pt_BR\":\"Papai-noel\",\"ru\":\"Санта\",\"si\":null,\"sk\":\"Mikuláš\",\"sq\":\"Babagjyshi i Vitit të Ri\",\"sr\":\"деда Мраз\",\"sv\":\"Tomte\",\"szl\":null,\"tzm\":null,\"uk\":\"Санта Клаус\",\"vi\":\"ông già Nô-en\",\"zh_Hans\":\"圣诞老人\",\"zh_Hant\":\"聖誕老人\"}},{\"number\":36,\"emoji\":\"👍\",\"description\":\"Thumbs Up\",\"unicode\":\"U+1F44D\",\"translated_descriptions\":{\"ar\":\"رَفعُ إِبهَام\",\"bg\":\"Палец нагоре\",\"ca\":\"Polzes amunt\",\"cs\":\"Palec nahoru\",\"de\":\"Daumen Hoch\",\"eo\":\"Dikfingro supren\",\"es\":\"Pulgar arriba\",\"et\":\"Pöidlad püsti\",\"fa\":\"لایک\",\"fi\":\"Peukalo ylös\",\"fr\":\"Pouce en l’air\",\"hr\":\"palac gore\",\"hu\":\"Hüvelykujj fel\",\"id\":\"Jempol\",\"it\":\"Pollice alzato\",\"ja\":\"いいね\",\"nb_NO\":\"Tommel Opp\",\"nl\":\"Duim omhoog\",\"pt\":\"Polegar para cima\",\"pt_BR\":\"Joinha\",\"ru\":\"Большой палец вверх\",\"si\":null,\"sk\":\"Palec nahor\",\"sq\":null,\"sr\":\"палчић горе\",\"sv\":\"Tummen upp\",\"szl\":null,\"tzm\":null,\"uk\":\"Великий палець вгору\",\"vi\":\"Thích\",\"zh_Hans\":\"赞\",\"zh_Hant\":\"讚\"}},{\"number\":37,\"emoji\":\"☂️\",\"description\":\"Umbrella\",\"unicode\":\"U+2602U+FE0F\",\"translated_descriptions\":{\"ar\":\"مِظَلَّة\",\"bg\":\"Чадър\",\"ca\":\"Paraigües\",\"cs\":\"Deštník\",\"de\":\"Regenschirm\",\"eo\":\"Ombrelo\",\"es\":\"Paraguas\",\"et\":\"Vihmavari\",\"fa\":\"چتر\",\"fi\":\"Sateenvarjo\",\"fr\":\"Parapluie\",\"hr\":\"kišobran\",\"hu\":\"Esernyő\",\"id\":\"Payung\",\"it\":\"Ombrello\",\"ja\":\"傘\",\"nb_NO\":\"Paraply\",\"nl\":\"Paraplu\",\"pt\":\"Guarda-chuva\",\"pt_BR\":\"Guarda-chuva\",\"ru\":\"Зонт\",\"si\":null,\"sk\":\"Dáždnik\",\"sq\":\"Ombrellë\",\"sr\":\"кишобран\",\"sv\":\"Paraply\",\"szl\":null,\"tzm\":null,\"uk\":\"Парасолька\",\"vi\":\"Cái ô\",\"zh_Hans\":\"伞\",\"zh_Hant\":\"雨傘\"}},{\"number\":38,\"emoji\":\"⌛\",\"description\":\"Hourglass\",\"unicode\":\"U+231B\",\"translated_descriptions\":{\"ar\":\"سَاعَةٌ رَملِيَّة\",\"bg\":\"Пясъчен часовник\",\"ca\":\"Rellotge de sorra\",\"cs\":\"Přesýpací hodiny\",\"de\":\"Sanduhr\",\"eo\":\"Sablohorloĝo\",\"es\":\"Reloj de arena\",\"et\":\"Liivakell\",\"fa\":\"ساعت شنی\",\"fi\":\"Tiimalasi\",\"fr\":\"Sablier\",\"hr\":\"pješčani sat\",\"hu\":\"Homokóra\",\"id\":\"Jam Pasir\",\"it\":\"Clessidra\",\"ja\":\"砂時計\",\"nb_NO\":\"Timeglass\",\"nl\":\"Zandloper\",\"pt\":\"Ampulheta\",\"pt_BR\":\"Ampulheta\",\"ru\":\"Песочные часы\",\"si\":null,\"sk\":\"Presýpacie hodiny\",\"sq\":\"Klepsidër\",\"sr\":\"пешчаник\",\"sv\":\"Timglas\",\"szl\":null,\"tzm\":null,\"uk\":\"Пісковий годинник\",\"vi\":\"Đồng hồ cát\",\"zh_Hans\":\"沙漏\",\"zh_Hant\":\"沙漏\"}},{\"number\":39,\"emoji\":\"⏰\",\"description\":\"Clock\",\"unicode\":\"U+23F0\",\"translated_descriptions\":{\"ar\":\"سَاعَة\",\"bg\":\"Часовник\",\"ca\":\"Rellotge\",\"cs\":\"Hodiny\",\"de\":\"Uhr\",\"eo\":\"Horloĝo\",\"es\":\"Reloj\",\"et\":\"Kell\",\"fa\":\"ساعت\",\"fi\":\"Pöytäkello\",\"fr\":\"Réveil\",\"hr\":\"sat\",\"hu\":\"Óra\",\"id\":\"Jam\",\"it\":\"Orologio\",\"ja\":\"時計\",\"nb_NO\":\"Klokke\",\"nl\":\"Wekker\",\"pt\":\"Relógio\",\"pt_BR\":\"Relógio\",\"ru\":\"Часы\",\"si\":null,\"sk\":\"Budík\",\"sq\":\"Sahat\",\"sr\":\"сат\",\"sv\":\"Klocka\",\"szl\":null,\"tzm\":null,\"uk\":\"Годинник\",\"vi\":\"Đồng hồ\",\"zh_Hans\":\"时钟\",\"zh_Hant\":\"時鐘\"}},{\"number\":40,\"emoji\":\"🎁\",\"description\":\"Gift\",\"unicode\":\"U+1F381\",\"translated_descriptions\":{\"ar\":\"هَدِيَّة\",\"bg\":\"Подарък\",\"ca\":\"Regal\",\"cs\":\"Dárek\",\"de\":\"Geschenk\",\"eo\":\"Donaco\",\"es\":\"Regalo\",\"et\":\"Kingitus\",\"fa\":\"هدیه\",\"fi\":\"Lahja\",\"fr\":\"Cadeau\",\"hr\":\"poklon\",\"hu\":\"Ajándék\",\"id\":\"Kado\",\"it\":\"Regalo\",\"ja\":\"ギフト\",\"nb_NO\":\"Gave\",\"nl\":\"Geschenk\",\"pt\":\"Presente\",\"pt_BR\":\"Presente\",\"ru\":\"Подарок\",\"si\":null,\"sk\":\"Darček\",\"sq\":\"Dhuratë\",\"sr\":\"поклон\",\"sv\":\"Present\",\"szl\":null,\"tzm\":null,\"uk\":\"Подарунок\",\"vi\":\"Quà tặng\",\"zh_Hans\":\"礼物\",\"zh_Hant\":\"禮物\"}},{\"number\":41,\"emoji\":\"💡\",\"description\":\"Light Bulb\",\"unicode\":\"U+1F4A1\",\"translated_descriptions\":{\"ar\":\"مِصبَاح\",\"bg\":\"Лампа\",\"ca\":\"Bombeta\",\"cs\":\"Žárovka\",\"de\":\"Glühbirne\",\"eo\":\"Lampo\",\"es\":\"Bombilla\",\"et\":\"Lambipirn\",\"fa\":\"لامپ\",\"fi\":\"Hehkulamppu\",\"fr\":\"Ampoule\",\"hr\":\"žarulja\",\"hu\":\"Égő\",\"id\":\"Bohlam Lampu\",\"it\":\"Lampadina\",\"ja\":\"電球\",\"nb_NO\":\"Lyspære\",\"nl\":\"Gloeilamp\",\"pt\":\"Lâmpada\",\"pt_BR\":\"Lâmpada\",\"ru\":\"Лампочка\",\"si\":null,\"sk\":\"Žiarovka\",\"sq\":\"Llambë\",\"sr\":\"сијалица\",\"sv\":\"Lampa\",\"szl\":null,\"tzm\":null,\"uk\":\"Лампочка\",\"vi\":\"Bóng đèn tròn\",\"zh_Hans\":\"灯泡\",\"zh_Hant\":\"燈泡\"}},{\"number\":42,\"emoji\":\"📕\",\"description\":\"Book\",\"unicode\":\"U+1F4D5\",\"translated_descriptions\":{\"ar\":\"كِتَاب\",\"bg\":\"Книга\",\"ca\":\"Llibre\",\"cs\":\"Kniha\",\"de\":\"Buch\",\"eo\":\"Libro\",\"es\":\"Libro\",\"et\":\"Raamat\",\"fa\":\"کتاب\",\"fi\":\"Kirja\",\"fr\":\"Livre\",\"hr\":\"knjiga\",\"hu\":\"Könyv\",\"id\":\"Buku\",\"it\":\"Libro\",\"ja\":\"本\",\"nb_NO\":\"Bok\",\"nl\":\"Boek\",\"pt\":\"Livro\",\"pt_BR\":\"Livro\",\"ru\":\"Книга\",\"si\":null,\"sk\":\"Kniha\",\"sq\":\"Libër\",\"sr\":\"књига\",\"sv\":\"Bok\",\"szl\":null,\"tzm\":\"Adlis\",\"uk\":\"Книга\",\"vi\":\"Sách\",\"zh_Hans\":\"书\",\"zh_Hant\":\"書\"}},{\"number\":43,\"emoji\":\"✏️\",\"description\":\"Pencil\",\"unicode\":\"U+270FU+FE0F\",\"translated_descriptions\":{\"ar\":\"قَلَمُ رَصاص\",\"bg\":\"Молив\",\"ca\":\"Llapis\",\"cs\":\"Tužka\",\"de\":\"Bleistift\",\"eo\":\"Krajono\",\"es\":\"Lápiz\",\"et\":\"Pliiats\",\"fa\":\"مداد\",\"fi\":\"Lyijykynä\",\"fr\":\"Crayon\",\"hr\":\"olovka\",\"hu\":\"Ceruza\",\"id\":\"Pensil\",\"it\":\"Matita\",\"ja\":\"鉛筆\",\"nb_NO\":\"Blyant\",\"nl\":\"Potlood\",\"pt\":\"Lápis\",\"pt_BR\":\"Lápis\",\"ru\":\"Карандаш\",\"si\":null,\"sk\":\"Ceruzka\",\"sq\":\"Laps\",\"sr\":\"оловка\",\"sv\":\"Penna\",\"szl\":null,\"tzm\":null,\"uk\":\"Олівець\",\"vi\":\"Viết chì\",\"zh_Hans\":\"铅笔\",\"zh_Hant\":\"鉛筆\"}},{\"number\":44,\"emoji\":\"📎\",\"description\":\"Paperclip\",\"unicode\":\"U+1F4CE\",\"translated_descriptions\":{\"ar\":\"مِشبَكُ وَرَق\",\"bg\":\"Кламер\",\"ca\":\"Clip\",\"cs\":\"Sponka\",\"de\":\"Büroklammer\",\"eo\":\"Paperkuntenilo\",\"es\":\"Clip\",\"et\":\"Kirjaklamber\",\"fa\":\"گیره کاغذ\",\"fi\":\"Paperiliitin\",\"fr\":\"Trombone\",\"hr\":\"spajalica\",\"hu\":\"Gémkapocs\",\"id\":\"Klip Kertas\",\"it\":\"Graffetta\",\"ja\":\"クリップ\",\"nb_NO\":\"BInders\",\"nl\":\"Papierklemmetje\",\"pt\":\"Clipe\",\"pt_BR\":\"Clipe de papel\",\"ru\":\"Скрепка\",\"si\":null,\"sk\":\"Kancelárska sponka\",\"sq\":\"Kapëse\",\"sr\":\"спајалица\",\"sv\":\"Gem\",\"szl\":null,\"tzm\":null,\"uk\":\"Спиначка\",\"vi\":\"Kẹp giấy\",\"zh_Hans\":\"回形针\",\"zh_Hant\":\"迴紋針\"}},{\"number\":45,\"emoji\":\"✂️\",\"description\":\"Scissors\",\"unicode\":\"U+2702U+FE0F\",\"translated_descriptions\":{\"ar\":\"مِقَصّ\",\"bg\":\"Ножици\",\"ca\":\"Tisores\",\"cs\":\"Nůžky\",\"de\":\"Schere\",\"eo\":\"Tondilo\",\"es\":\"Tijeras\",\"et\":\"Käärid\",\"fa\":\"قیچی\",\"fi\":\"Sakset\",\"fr\":\"Ciseaux\",\"hr\":\"škare\",\"hu\":\"Olló\",\"id\":\"Gunting\",\"it\":\"Forbici\",\"ja\":\"はさみ\",\"nb_NO\":\"Saks\",\"nl\":\"Schaar\",\"pt\":\"Tesoura\",\"pt_BR\":\"Tesoura\",\"ru\":\"Ножницы\",\"si\":null,\"sk\":\"Nožnice\",\"sq\":\"Gërshërë\",\"sr\":\"маказе\",\"sv\":\"Sax\",\"szl\":null,\"tzm\":null,\"uk\":\"Ножиці\",\"vi\":\"Cái kéo\",\"zh_Hans\":\"剪刀\",\"zh_Hant\":\"剪刀\"}},{\"number\":46,\"emoji\":\"🔒\",\"description\":\"Lock\",\"unicode\":\"U+1F512\",\"translated_descriptions\":{\"ar\":\"قُفل\",\"bg\":\"Катинар\",\"ca\":\"Cadenat\",\"cs\":\"Zámek\",\"de\":\"Schloss\",\"eo\":\"Seruro\",\"es\":\"Candado\",\"et\":\"Lukk\",\"fa\":\"قفل\",\"fi\":\"Lukko\",\"fr\":\"Cadenas\",\"hr\":\"zaključati\",\"hu\":\"Lakat\",\"id\":\"Gembok\",\"it\":\"Lucchetto\",\"ja\":\"錠前\",\"nb_NO\":\"Lås\",\"nl\":\"Slot\",\"pt\":\"Cadeado\",\"pt_BR\":\"Cadeado\",\"ru\":\"Замок\",\"si\":null,\"sk\":\"Zámka\",\"sq\":\"Dry\",\"sr\":\"катанац\",\"sv\":\"Lås\",\"szl\":null,\"tzm\":null,\"uk\":\"Замок\",\"vi\":\"Ổ khóa\",\"zh_Hans\":\"锁\",\"zh_Hant\":\"鎖頭\"}},{\"number\":47,\"emoji\":\"🔑\",\"description\":\"Key\",\"unicode\":\"U+1F511\",\"translated_descriptions\":{\"ar\":\"مِفتَاح\",\"bg\":\"Ключ\",\"ca\":\"Clau\",\"cs\":\"Klíč ke dveřím\",\"de\":\"Schlüssel\",\"eo\":\"Ŝlosilo\",\"es\":\"Llave\",\"et\":\"Võti\",\"fa\":\"کلید\",\"fi\":\"Avain\",\"fr\":\"Clé\",\"hr\":\"ključ\",\"hu\":\"Kulcs\",\"id\":\"Kunci\",\"it\":\"Chiave\",\"ja\":\"鍵\",\"nb_NO\":\"Nøkkel\",\"nl\":\"Sleutel\",\"pt\":\"Chave\",\"pt_BR\":\"Chave\",\"ru\":\"Ключ\",\"si\":null,\"sk\":\"Kľúč\",\"sq\":\"Çelës\",\"sr\":\"кључ\",\"sv\":\"Nyckel\",\"szl\":null,\"tzm\":\"Tasarut\",\"uk\":\"Ключ\",\"vi\":\"Chìa khóa\",\"zh_Hans\":\"钥匙\",\"zh_Hant\":\"鑰匙\"}},{\"number\":48,\"emoji\":\"🔨\",\"description\":\"Hammer\",\"unicode\":\"U+1F528\",\"translated_descriptions\":{\"ar\":\"مِطرَقَة\",\"bg\":\"Чук\",\"ca\":\"Martell\",\"cs\":\"Kladivo\",\"de\":\"Hammer\",\"eo\":\"Martelo\",\"es\":\"Martillo\",\"et\":\"Haamer\",\"fa\":\"چکش\",\"fi\":\"Vasara\",\"fr\":\"Marteau\",\"hr\":\"čekić\",\"hu\":\"Kalapács\",\"id\":\"Palu\",\"it\":\"Martello\",\"ja\":\"金槌\",\"nb_NO\":\"Hammer\",\"nl\":\"Hamer\",\"pt\":\"Martelo\",\"pt_BR\":\"Martelo\",\"ru\":\"Молоток\",\"si\":null,\"sk\":\"Kladivo\",\"sq\":\"Çekiç\",\"sr\":\"чекић\",\"sv\":\"Hammare\",\"szl\":null,\"tzm\":null,\"uk\":\"Молоток\",\"vi\":\"Búa\",\"zh_Hans\":\"锤子\",\"zh_Hant\":\"鎚子\"}},{\"number\":49,\"emoji\":\"☎️\",\"description\":\"Telephone\",\"unicode\":\"U+260EU+FE0F\",\"translated_descriptions\":{\"ar\":\"تِلِفُون\",\"bg\":\"Телефон\",\"ca\":\"Telèfon\",\"cs\":\"Telefon\",\"de\":\"Telefon\",\"eo\":\"Telefono\",\"es\":\"Teléfono\",\"et\":\"Telefon\",\"fa\":\"تلفن\",\"fi\":\"Puhelin\",\"fr\":\"Téléphone\",\"hr\":\"telefon\",\"hu\":\"Telefon\",\"id\":\"Telepon\",\"it\":\"Telefono\",\"ja\":\"電話機\",\"nb_NO\":\"Telefon\",\"nl\":\"Telefoon\",\"pt\":\"Telefone\",\"pt_BR\":\"Telefone\",\"ru\":\"Телефон\",\"si\":null,\"sk\":\"Telefón\",\"sq\":\"Telefon\",\"sr\":\"телефон\",\"sv\":\"Telefon\",\"szl\":null,\"tzm\":\"Atilifun\",\"uk\":\"Телефон\",\"vi\":\"Điện thoại\",\"zh_Hans\":\"电话\",\"zh_Hant\":\"電話\"}},{\"number\":50,\"emoji\":\"🏁\",\"description\":\"Flag\",\"unicode\":\"U+1F3C1\",\"translated_descriptions\":{\"ar\":\"عَلَم\",\"bg\":\"Флаг\",\"ca\":\"Bandera\",\"cs\":\"Vlajka\",\"de\":\"Flagge\",\"eo\":\"Flago\",\"es\":\"Bandera\",\"et\":\"Lipp\",\"fa\":\"پرچم\",\"fi\":\"Lippu\",\"fr\":\"Drapeau\",\"hr\":\"zastava\",\"hu\":\"Zászló\",\"id\":\"Bendera\",\"it\":\"Bandiera\",\"ja\":\"旗\",\"nb_NO\":\"Flagg\",\"nl\":\"Vlag\",\"pt\":\"Bandeira\",\"pt_BR\":\"Bandeira\",\"ru\":\"Флаг\",\"si\":null,\"sk\":\"Zástava\",\"sq\":\"Flamur\",\"sr\":\"застава\",\"sv\":\"Flagga\",\"szl\":null,\"tzm\":\"Acenyal\",\"uk\":\"Прапор\",\"vi\":\"Lá cờ\",\"zh_Hans\":\"旗帜\",\"zh_Hant\":\"旗幟\"}},{\"number\":51,\"emoji\":\"🚂\",\"description\":\"Train\",\"unicode\":\"U+1F682\",\"translated_descriptions\":{\"ar\":\"قِطَار\",\"bg\":\"Влак\",\"ca\":\"Tren\",\"cs\":\"Vlak\",\"de\":\"Zug\",\"eo\":\"Vagonaro\",\"es\":\"Tren\",\"et\":\"Rong\",\"fa\":\"قطار\",\"fi\":\"Juna\",\"fr\":\"Train\",\"hr\":\"vlak\",\"hu\":\"Vonat\",\"id\":\"Kereta Api\",\"it\":\"Treno\",\"ja\":\"電車\",\"nb_NO\":\"Tog\",\"nl\":\"Trein\",\"pt\":\"Comboio\",\"pt_BR\":\"Trem\",\"ru\":\"Поезд\",\"si\":null,\"sk\":\"Vlak\",\"sq\":\"Tren\",\"sr\":\"воз\",\"sv\":\"Tåg\",\"szl\":null,\"tzm\":null,\"uk\":\"Потяг\",\"vi\":\"Xe lửa\",\"zh_Hans\":\"火车\",\"zh_Hant\":\"火車\"}},{\"number\":52,\"emoji\":\"🚲\",\"description\":\"Bicycle\",\"unicode\":\"U+1F6B2\",\"translated_descriptions\":{\"ar\":\"دَرّاجَة\",\"bg\":\"Колело\",\"ca\":\"Bicicleta\",\"cs\":\"Kolo\",\"de\":\"Fahrrad\",\"eo\":\"Biciklo\",\"es\":\"Bicicleta\",\"et\":\"Jalgratas\",\"fa\":\"دوچرخه\",\"fi\":\"Polkupyörä\",\"fr\":\"Vélo\",\"hr\":\"bicikl\",\"hu\":\"Kerékpár\",\"id\":\"Sepeda\",\"it\":\"Bicicletta\",\"ja\":\"自転車\",\"nb_NO\":\"Sykkel\",\"nl\":\"Fiets\",\"pt\":\"Bicicleta\",\"pt_BR\":\"Bicicleta\",\"ru\":\"Велосипед\",\"si\":null,\"sk\":\"Bicykel\",\"sq\":\"Biçikletë\",\"sr\":\"бицикл\",\"sv\":\"Cykel\",\"szl\":null,\"tzm\":null,\"uk\":\"Велосипед\",\"vi\":\"Xe đạp\",\"zh_Hans\":\"自行车\",\"zh_Hant\":\"腳踏車\"}},{\"number\":53,\"emoji\":\"✈️\",\"description\":\"Aeroplane\",\"unicode\":\"U+2708U+FE0F\",\"translated_descriptions\":{\"ar\":\"طَائِرة\",\"bg\":\"Самолет\",\"ca\":\"Avió\",\"cs\":\"Letadlo\",\"de\":\"Flugzeug\",\"eo\":\"Aviadilo\",\"es\":\"Avión\",\"et\":\"Lennuk\",\"fa\":\"هواپیما\",\"fi\":\"Lentokone\",\"fr\":\"Avion\",\"hr\":\"avion\",\"hu\":\"Repülő\",\"id\":\"Pesawat\",\"it\":\"Aeroplano\",\"ja\":\"飛行機\",\"nb_NO\":\"Fly\",\"nl\":\"Vliegtuig\",\"pt\":\"Avião\",\"pt_BR\":\"Avião\",\"ru\":\"Самолет\",\"si\":null,\"sk\":\"Lietadlo\",\"sq\":\"Avion\",\"sr\":\"авион\",\"sv\":\"Flygplan\",\"szl\":null,\"tzm\":null,\"uk\":\"Літак\",\"vi\":\"Máy bay\",\"zh_Hans\":\"飞机\",\"zh_Hant\":\"飛機\"}},{\"number\":54,\"emoji\":\"🚀\",\"description\":\"Rocket\",\"unicode\":\"U+1F680\",\"translated_descriptions\":{\"ar\":\"صَارُوخ\",\"bg\":\"Ракета\",\"ca\":\"Coet\",\"cs\":\"Raketa\",\"de\":\"Rakete\",\"eo\":\"Raketo\",\"es\":\"Cohete\",\"et\":\"Rakett\",\"fa\":\"موشک\",\"fi\":\"Raketti\",\"fr\":\"Fusée\",\"hr\":\"raketa\",\"hu\":\"Rakáta\",\"id\":\"Roket\",\"it\":\"Razzo\",\"ja\":\"ロケット\",\"nb_NO\":\"Rakett\",\"nl\":\"Raket\",\"pt\":\"Foguetão\",\"pt_BR\":\"Foguete\",\"ru\":\"Ракета\",\"si\":null,\"sk\":\"Raketa\",\"sq\":\"Raketë\",\"sr\":\"ракета\",\"sv\":\"Raket\",\"szl\":null,\"tzm\":null,\"uk\":\"Ракета\",\"vi\":\"Tên lửa\",\"zh_Hans\":\"火箭\",\"zh_Hant\":\"火箭\"}},{\"number\":55,\"emoji\":\"🏆\",\"description\":\"Trophy\",\"unicode\":\"U+1F3C6\",\"translated_descriptions\":{\"ar\":\"كَأسُ النَّصر\",\"bg\":\"Трофей\",\"ca\":\"Trofeu\",\"cs\":\"Pohár\",\"de\":\"Pokal\",\"eo\":\"Trofeo\",\"es\":\"Trofeo\",\"et\":\"Auhind\",\"fa\":\"جام\",\"fi\":\"Palkinto\",\"fr\":\"Trophée\",\"hr\":\"trofej\",\"hu\":\"Trófea\",\"id\":\"Piala\",\"it\":\"Trofeo\",\"ja\":\"トロフィー\",\"nb_NO\":\"Pokal\",\"nl\":\"Trofee\",\"pt\":\"Troféu\",\"pt_BR\":\"Troféu\",\"ru\":\"Кубок\",\"si\":null,\"sk\":\"Trofej\",\"sq\":\"Trofe\",\"sr\":\"пехар\",\"sv\":\"Trofé\",\"szl\":null,\"tzm\":null,\"uk\":\"Приз\",\"vi\":\"Cúp\",\"zh_Hans\":\"奖杯\",\"zh_Hant\":\"獎盃\"}},{\"number\":56,\"emoji\":\"⚽\",\"description\":\"Ball\",\"unicode\":\"U+26BD\",\"translated_descriptions\":{\"ar\":\"كُرَة\",\"bg\":\"Топка\",\"ca\":\"Pilota\",\"cs\":\"Míč\",\"de\":\"Ball\",\"eo\":\"Pilko\",\"es\":\"Bola\",\"et\":\"Pall\",\"fa\":\"توپ\",\"fi\":\"Pallo\",\"fr\":\"Ballon\",\"hr\":\"lopta\",\"hu\":\"Labda\",\"id\":\"Bola\",\"it\":\"Palla\",\"ja\":\"ボール\",\"nb_NO\":\"Ball\",\"nl\":\"Bal\",\"pt\":\"Bola\",\"pt_BR\":\"Bola\",\"ru\":\"Мяч\",\"si\":null,\"sk\":\"Lopta\",\"sq\":\"Top\",\"sr\":\"лопта\",\"sv\":\"Boll\",\"szl\":null,\"tzm\":\"Tcama\",\"uk\":\"М'яч\",\"vi\":\"Banh\",\"zh_Hans\":\"球\",\"zh_Hant\":\"足球\"}},{\"number\":57,\"emoji\":\"🎸\",\"description\":\"Guitar\",\"unicode\":\"U+1F3B8\",\"translated_descriptions\":{\"ar\":\"غيتار\",\"bg\":\"Китара\",\"ca\":\"Guitarra\",\"cs\":\"Kytara\",\"de\":\"Gitarre\",\"eo\":\"Gitaro\",\"es\":\"Guitarra\",\"et\":\"Kitarr\",\"fa\":\"گیتار\",\"fi\":\"Kitara\",\"fr\":\"Guitare\",\"hr\":\"gitara\",\"hu\":\"Gitár\",\"id\":\"Gitar\",\"it\":\"Chitarra\",\"ja\":\"ギター\",\"nb_NO\":\"Gitar\",\"nl\":\"Gitaar\",\"pt\":\"Guitarra\",\"pt_BR\":\"Guitarra\",\"ru\":\"Гитара\",\"si\":null,\"sk\":\"Gitara\",\"sq\":\"Kitarë\",\"sr\":\"гитара\",\"sv\":\"Gitarr\",\"szl\":null,\"tzm\":\"Agiṭaṛ\",\"uk\":\"Гітара\",\"vi\":\"Ghi-ta\",\"zh_Hans\":\"吉他\",\"zh_Hant\":\"吉他\"}},{\"number\":58,\"emoji\":\"🎺\",\"description\":\"Trumpet\",\"unicode\":\"U+1F3BA\",\"translated_descriptions\":{\"ar\":\"بُوق\",\"bg\":\"Тромпет\",\"ca\":\"Trompeta\",\"cs\":\"Trumpeta\",\"de\":\"Trompete\",\"eo\":\"Trumpeto\",\"es\":\"Trompeta\",\"et\":\"Trompet\",\"fa\":\"شیپور\",\"fi\":\"Trumpetti\",\"fr\":\"Trompette\",\"hr\":\"truba\",\"hu\":\"Trombita\",\"id\":\"Terompet\",\"it\":\"Trombetta\",\"ja\":\"トランペット\",\"nb_NO\":\"Trompet\",\"nl\":\"Trompet\",\"pt\":\"Trompete\",\"pt_BR\":\"Trombeta\",\"ru\":\"Труба\",\"si\":null,\"sk\":\"Trúbka\",\"sq\":\"Trombë\",\"sr\":\"труба\",\"sv\":\"Trumpet\",\"szl\":null,\"tzm\":null,\"uk\":\"Труба\",\"vi\":\"Kèn\",\"zh_Hans\":\"喇叭\",\"zh_Hant\":\"喇叭\"}},{\"number\":59,\"emoji\":\"🔔\",\"description\":\"Bell\",\"unicode\":\"U+1F514\",\"translated_descriptions\":{\"ar\":\"جَرَس\",\"bg\":\"Звънец\",\"ca\":\"Campana\",\"cs\":\"Zvonek\",\"de\":\"Glocke\",\"eo\":\"Sonorilo\",\"es\":\"Campana\",\"et\":\"Kelluke\",\"fa\":\"زنگ\",\"fi\":\"Soittokello\",\"fr\":\"Cloche\",\"hr\":\"zvono\",\"hu\":\"Harang\",\"id\":\"Lonceng\",\"it\":\"Campana\",\"ja\":\"ベル\",\"nb_NO\":\"Bjelle\",\"nl\":\"Bel\",\"pt\":\"Sino\",\"pt_BR\":\"Sino\",\"ru\":\"Колокол\",\"si\":null,\"sk\":\"Zvonec\",\"sq\":\"Kambanë\",\"sr\":\"звоно\",\"sv\":\"Bjällra\",\"szl\":null,\"tzm\":null,\"uk\":\"Дзвін\",\"vi\":\"Chuông\",\"zh_Hans\":\"铃铛\",\"zh_Hant\":\"鈴鐺\"}},{\"number\":60,\"emoji\":\"⚓\",\"description\":\"Anchor\",\"unicode\":\"U+2693\",\"translated_descriptions\":{\"ar\":\"مِرسَاة\",\"bg\":\"Котва\",\"ca\":\"Àncora\",\"cs\":\"Kotva\",\"de\":\"Anker\",\"eo\":\"Ankro\",\"es\":\"Ancla\",\"et\":\"Ankur\",\"fa\":\"لنگر\",\"fi\":\"Ankkuri\",\"fr\":\"Ancre\",\"hr\":\"sidro\",\"hu\":\"Horgony\",\"id\":\"Jangkar\",\"it\":\"Ancora\",\"ja\":\"いかり\",\"nb_NO\":\"Anker\",\"nl\":\"Anker\",\"pt\":\"Âncora\",\"pt_BR\":\"Âncora\",\"ru\":\"Якорь\",\"si\":null,\"sk\":\"Kotva\",\"sq\":\"Spirancë\",\"sr\":\"сидро\",\"sv\":\"Ankare\",\"szl\":null,\"tzm\":null,\"uk\":\"Якір\",\"vi\":\"Mỏ neo\",\"zh_Hans\":\"锚\",\"zh_Hant\":\"船錨\"}},{\"number\":61,\"emoji\":\"🎧\",\"description\":\"Headphones\",\"unicode\":\"U+1F3A7\",\"translated_descriptions\":{\"ar\":\"سَمّاعَة رَأس\",\"bg\":\"Слушалки\",\"ca\":\"Auriculars\",\"cs\":\"Sluchátka\",\"de\":\"Kopfhörer\",\"eo\":\"Kapaŭdilo\",\"es\":\"Cascos\",\"et\":\"Kõrvaklapid\",\"fa\":\"هدفون\",\"fi\":\"Kuulokkeet\",\"fr\":\"Casque audio\",\"hr\":\"slušalice\",\"hu\":\"Fejhallgató\",\"id\":\"Headphone\",\"it\":\"Cuffie\",\"ja\":\"ヘッドホン\",\"nb_NO\":\"Hodetelefoner\",\"nl\":\"Koptelefoon\",\"pt\":\"Fones\",\"pt_BR\":\"Fones de ouvido\",\"ru\":\"Наушники\",\"si\":null,\"sk\":\"Slúchadlá\",\"sq\":\"Kufje\",\"sr\":\"слушалице\",\"sv\":\"Hörlurar\",\"szl\":null,\"tzm\":null,\"uk\":\"Навушники\",\"vi\":\"Tai nghe\",\"zh_Hans\":\"耳机\",\"zh_Hant\":\"耳機\"}},{\"number\":62,\"emoji\":\"📁\",\"description\":\"Folder\",\"unicode\":\"U+1F4C1\",\"translated_descriptions\":{\"ar\":\"مُجَلَّد\",\"bg\":\"Папка\",\"ca\":\"Carpeta\",\"cs\":\"Složka\",\"de\":\"Ordner\",\"eo\":\"Dosierujo\",\"es\":\"Carpeta\",\"et\":\"Kaust\",\"fa\":\"پوشه\",\"fi\":\"Kansio\",\"fr\":\"Dossier\",\"hr\":\"mapu\",\"hu\":\"Mappa\",\"id\":\"Map\",\"it\":\"Cartella\",\"ja\":\"フォルダー\",\"nb_NO\":\"Mappe\",\"nl\":\"Map\",\"pt\":\"Pasta\",\"pt_BR\":\"Pasta\",\"ru\":\"Папка\",\"si\":null,\"sk\":\"Fascikel\",\"sq\":\"Dosje\",\"sr\":\"фасцикла\",\"sv\":\"Mapp\",\"szl\":null,\"tzm\":\"Asdaw\",\"uk\":\"Тека\",\"vi\":\"Thư mục\",\"zh_Hans\":\"文件夹\",\"zh_Hant\":\"資料夾\"}},{\"number\":63,\"emoji\":\"📌\",\"description\":\"Pin\",\"unicode\":\"U+1F4CC\",\"translated_descriptions\":{\"ar\":\"دَبُّوس\",\"bg\":\"Кабърче\",\"ca\":\"Xinxeta\",\"cs\":\"Špendlík\",\"de\":\"Stecknadel\",\"eo\":\"Pinglo\",\"es\":\"Alfiler\",\"et\":\"Nööpnõel\",\"fa\":\"سنجاق\",\"fi\":\"Nuppineula\",\"fr\":\"Punaise\",\"hr\":\"pribadača\",\"hu\":\"Rajszeg\",\"id\":\"Pin\",\"it\":\"Puntina\",\"ja\":\"ピン\",\"nb_NO\":\"Tegnestift\",\"nl\":\"Duimspijker\",\"pt\":\"Pionés\",\"pt_BR\":\"Alfinete\",\"ru\":\"Булавка\",\"si\":null,\"sk\":\"Špendlík\",\"sq\":\"Karficë\",\"sr\":\"чиода\",\"sv\":\"Häftstift\",\"szl\":null,\"tzm\":null,\"uk\":\"Кнопка\",\"vi\":\"Ghim\",\"zh_Hans\":\"图钉\",\"zh_Hant\":\"圖釘\"}}]")).map(({ emoji: e, description: t, translated_descriptions: n }) => [e, [t, Object.keys(n).reduce((e, t) => {
	for (let r of mb(t)) e[r] = n[t];
	return e;
}, {})]]));
function PT(e, t) {
	let n = NT.get(e);
	if (!n) throw Error(`Emoji mapping not found for emoji ${e}`);
	let [r, i] = n;
	for (let e of mb(t)) if (i[e]) return i[e];
	return r;
}
var FT = {
	container: "_container_1lqqy_8",
	segment: "_segment_1lqqy_15",
	emoji: "_emoji_1lqqy_23",
	label: "_label_1lqqy_29"
};
//#endregion
//#region src/crypto/SasEmoji/SasEmoji.tsx
function IT({ emoji: e, className: t }) {
	let { language: n } = z(), r = e.map((e, t) => /* @__PURE__ */ (0, R.jsxs)("div", {
		className: FT.segment,
		children: [/* @__PURE__ */ (0, R.jsx)("div", {
			className: FT.emoji,
			"aria-hidden": !0,
			children: e
		}), /* @__PURE__ */ (0, R.jsx)("div", {
			className: FT.label,
			children: PT(e, n)
		})]
	}, t));
	return /* @__PURE__ */ (0, R.jsx)("div", {
		className: (0, L.default)(FT.container, t),
		children: r
	});
}
var LT = {
	wrapper: "_wrapper_dh4sb_8",
	container: "_container_dh4sb_15",
	profile: "_profile_dh4sb_23",
	constrainedText: "_constrainedText_dh4sb_34",
	displayname: "_displayname_dh4sb_41",
	userId: "_userId_dh4sb_46",
	createAccount: "_createAccount_dh4sb_51",
	profilePrimary: "_profilePrimary_dh4sb_56",
	profileSecondary: "_profileSecondary_dh4sb_60",
	actions: "_actions_dh4sb_63",
	avatarWrapper: "_avatarWrapper_dh4sb_77",
	iconStatusEmoji: "_iconStatusEmoji_dh4sb_83",
	triggerButton: "_triggerButton_dh4sb_100",
	displayName: "_displayName_dh4sb_122"
}, RT = {
	statusPill: "_statusPill_1uwxs_8",
	menuStatusEmoji: "_menuStatusEmoji_1uwxs_21",
	menuStatusText: "_menuStatusText_1uwxs_25"
}, zT = ({ status: e, clearStatus: t, ref: n, ...r }) => /* @__PURE__ */ (0, R.jsxs)("div", {
	ref: n,
	...r,
	className: RT.statusPill,
	children: [
		/* @__PURE__ */ (0, R.jsx)(N, {
			as: "span",
			className: RT.menuStatusEmoji,
			children: e.emoji
		}),
		/* @__PURE__ */ (0, R.jsx)(N, {
			as: "span",
			className: RT.menuStatusText,
			children: e.text
		}),
		/* @__PURE__ */ (0, R.jsx)(j, {
			onClick: t,
			"aria-label": H("menus|user_menu|clear_status"),
			tooltip: H("menus|user_menu|clear_status"),
			size: "28px",
			children: /* @__PURE__ */ (0, R.jsx)(eC, {})
		})
	]
}), BT = 30, VT = 256, HT = new Intl.Segmenter(), UT = new TextEncoder();
function WT(e) {
	let t = 0, n = 0, r = 0;
	for (let { segment: i, index: a } of HT.segment(e)) {
		let o = n + UT.encode(i).length;
		if (t === BT || o > VT) return e.slice(0, r);
		t++, n = o, r = a + i.length;
	}
	return e;
}
var GT = {
	customStatus: "_customStatus_cn6so_8",
	emojiButton: "_emojiButton_cn6so_18",
	selected: "_selected_cn6so_36",
	textField: "_textField_cn6so_42",
	action: "_action_cn6so_47",
	pickerMenu: "_pickerMenu_cn6so_53"
}, KT = "😄";
function qT({ onSave: e, onCancel: t, recentEmojis: n, onRecordRecentEmoji: r }) {
	let [i, a] = T(KT), [o, s] = T(""), [c, l] = T(!1), u = o.trim(), d = h((e) => (a(e), l(!1), !0), []), f = h(() => {
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
	return /* @__PURE__ */ (0, R.jsxs)(xe, {
		className: GT.customStatus,
		onSubmit: m,
		children: [
			/* @__PURE__ */ (0, R.jsx)(_e, {
				open: c,
				onOpenChange: l,
				title: H("status|set_status|choose_emoji"),
				showTitle: !1,
				align: "start",
				className: GT.pickerMenu,
				trigger: /* @__PURE__ */ (0, R.jsx)("button", {
					type: "button",
					className: (0, L.default)(GT.emojiButton, { [GT.selected]: c }),
					"aria-label": H("status|set_status|choose_emoji"),
					children: i
				}),
				children: /* @__PURE__ */ (0, R.jsx)(xT, {
					onChoose: d,
					recentEmojis: n,
					onRecordRecent: r,
					onFinished: () => l(!1),
					showQuickReactions: !1
				})
			}),
			/* @__PURE__ */ (0, R.jsx)(oe, {
				name: "custom-status",
				className: GT.textField,
				children: /* @__PURE__ */ (0, R.jsx)(Te, {
					value: o,
					onChange: (e) => s(WT(e.currentTarget.value)),
					placeholder: H("status|set_status|set_status_prompt"),
					"aria-label": H("status|set_status|set_status_prompt"),
					autoFocus: !0
				})
			}),
			/* @__PURE__ */ (0, R.jsx)(ge, {
				kind: "primary",
				size: "md",
				role: "button",
				tabIndex: 0,
				className: GT.action,
				onClick: f,
				onKeyDown: p,
				children: H(u ? "action|save" : "action|cancel")
			})
		]
	});
}
var JT = {
	setStatusContainer: "_setStatusContainer_15yw5_8",
	setStatusTrigger: "_setStatusTrigger_15yw5_13",
	disabledTrigger: "_disabledTrigger_15yw5_26",
	menuItem: "_menuItem_15yw5_30",
	dropdownEmoji: "_dropdownEmoji_15yw5_38"
}, YT = {
	in_a_meeting: {
		emoji: "💬",
		textKey: Fx("status|set_status|in_a_meeting")
	},
	focus_time: {
		emoji: "💡",
		textKey: Fx("status|set_status|focus_time")
	},
	on_the_road: {
		emoji: "🚙",
		textKey: Fx("status|set_status|on_the_road")
	},
	be_right_back: {
		emoji: "☕️",
		textKey: Fx("status|set_status|be_right_back")
	},
	away: {
		emoji: "🌴",
		textKey: Fx("status|set_status|away")
	},
	custom: {
		emoji: "✍️",
		textKey: Fx("status|set_status|custom")
	}
}, XT = Object.keys(YT);
function ZT({ value: e }) {
	return /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsx)("span", {
		className: JT.dropdownEmoji,
		children: YT[e].emoji
	}), /* @__PURE__ */ (0, R.jsx)("span", { children: H(YT[e].textKey) })] });
}
function QT({ vm: e, initialCustomMode: t = !1 }) {
	let { userStatus: n, recentEmojis: r, disabled: i } = V(e), [a, o] = T(t), s = h((e) => e === null ? null : /* @__PURE__ */ (0, R.jsx)(ZT, { value: e }), []);
	return n ? /* @__PURE__ */ (0, R.jsx)(zT, {
		status: n,
		clearStatus: e.clearStatus
	}) : a ? /* @__PURE__ */ (0, R.jsx)(qT, {
		onSave: (t) => {
			o(!1), e.setStatus(t);
		},
		onCancel: () => o(!1),
		recentEmojis: r,
		onRecordRecentEmoji: e.recordRecentEmoji
	}) : /* @__PURE__ */ (0, R.jsx)(A, {
		values: XT,
		label: null,
		trigger: (e) => /* @__PURE__ */ (0, R.jsx)("div", {
			className: JT.setStatusContainer,
			children: /* @__PURE__ */ (0, R.jsxs)(ge, {
				className: (0, L.default)(JT.setStatusTrigger, { [JT.disabledTrigger]: i }),
				"aria-label": H("status|set_status|set_status_prompt"),
				"aria-disabled": i,
				...e,
				children: [/* @__PURE__ */ (0, R.jsx)(ww, {}), /* @__PURE__ */ (0, R.jsx)(N, {
					as: "span",
					type: "body",
					size: "md",
					weight: "medium",
					children: H("status|set_status|set_status_prompt")
				})]
			})
		}),
		onValueChange: (t) => {
			if (t === "custom") {
				e.onSetCustomStatusClick ? e.onSetCustomStatusClick() : o(!0);
				return;
			}
			let n = YT[t];
			n && e.setStatus({
				emoji: n.emoji,
				text: H(n.textKey)
			});
		},
		renderItem: s,
		disabled: i
	});
}
//#endregion
//#region src/menus/UserMenu/UserMenu.tsx
function $T({ vm: e, className: t }) {
	let { userId: n, displayName: r, avatarUrl: i, expanded: a, open: o, actions: s, showAvatar: c, userStatus: l, setStatusViewModel: u, showUserStatus: d = !0 } = V(e), { translate: f } = z(), p = /* @__PURE__ */ (0, R.jsx)("button", {
		className: LT.triggerButton,
		"aria-label": f("menus|user_menu|title"),
		type: "button",
		children: /* @__PURE__ */ (0, R.jsxs)("div", {
			className: LT.avatarWrapper,
			children: [/* @__PURE__ */ (0, R.jsx)(D, {
				id: n,
				name: r,
				type: "round",
				size: "36px",
				src: i
			}), l && /* @__PURE__ */ (0, R.jsx)(N, {
				as: "div",
				className: LT.iconStatusEmoji,
				children: l.emoji
			})]
		})
	});
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: (0, L.default)(LT.wrapper, t),
		children: [/* @__PURE__ */ (0, R.jsxs)(_e, {
			open: o,
			showTitle: !1,
			title: f("menus|user_menu|title"),
			trigger: p,
			onOpenChange: e.setOpen,
			align: "start",
			side: "right",
			className: LT.container,
			children: [
				/* @__PURE__ */ (0, R.jsxs)("section", {
					className: (0, L.default)(LT.profile, LT.profilePrimary),
					children: [
						c && /* @__PURE__ */ (0, R.jsx)(D, {
							id: n,
							name: r,
							type: "round",
							size: "64px",
							src: i
						}),
						/* @__PURE__ */ (0, R.jsx)(N, {
							className: (0, L.default)(LT.displayname, LT.constrainedText),
							type: "body",
							size: "lg",
							weight: "semibold",
							as: "span",
							children: r
						}),
						d && /* @__PURE__ */ (0, R.jsx)(QT, { vm: u })
					]
				}),
				/* @__PURE__ */ (0, R.jsxs)("section", {
					className: (0, L.default)(LT.profile, LT.profileSecondary),
					children: [
						/* @__PURE__ */ (0, R.jsx)(N, {
							"data-testid": "userId",
							size: "md",
							as: "span",
							type: "body",
							className: (0, L.default)(LT.userId, LT.constrainedText),
							children: n
						}),
						s.createAccount && /* @__PURE__ */ (0, R.jsx)(k, {
							className: LT.createAccount,
							size: "md",
							as: "button",
							kind: "primary",
							onClick: e.createAccount,
							children: f("menus|user_menu|create_an_account")
						}),
						s.signIn && /* @__PURE__ */ (0, R.jsxs)(N, {
							as: "span",
							weight: "medium",
							children: [f("menus|user_menu|got_an_account"), /* @__PURE__ */ (0, R.jsx)(ge, {
								as: "button",
								onClick: e.signIn,
								children: f("menus|user_menu|sign_in")
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, R.jsx)(Se, {}),
				/* @__PURE__ */ (0, R.jsxs)("section", {
					className: LT.actions,
					children: [
						s.openHomePage && /* @__PURE__ */ (0, R.jsx)(M, {
							Icon: RC,
							label: f("user_menu|open_home"),
							onSelect: e.openHomePage
						}),
						s.linkNewDevice && /* @__PURE__ */ (0, R.jsx)(M, {
							Icon: cC,
							label: f("user_menu|link_new_device"),
							onSelect: e.linkNewDevice
						}),
						s.openSecurity && /* @__PURE__ */ (0, R.jsx)(M, {
							Icon: QC,
							label: f("user_menu|open_security"),
							onSelect: e.openSecurity
						}),
						s.openFeedback && /* @__PURE__ */ (0, R.jsx)(M, {
							Icon: RS,
							label: f("user_menu|open_feedback"),
							onSelect: e.openFeedback
						}),
						s.openSettings && /* @__PURE__ */ (0, R.jsx)(M, {
							Icon: Iw,
							label: f("user_menu|open_settings"),
							onSelect: e.openSettings
						})
					]
				})
			]
		}), a && /* @__PURE__ */ (0, R.jsx)(N, {
			type: "heading",
			size: "sm",
			as: "span",
			weight: "semibold",
			className: LT.displayName,
			children: r
		})]
	});
}
var eE = {
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
function tE({ vm: e, className: t }) {
	let { translate: n } = z(), { shouldRender: r, isVisible: i, isNotification: a, isHighlight: o, isKnocked: s, badgeType: c, symbol: l, isClickable: u, ariaLabel: d, tabIndex: f, showUnsentTooltip: p } = V(e);
	if (!r) return /* @__PURE__ */ (0, R.jsx)(R.Fragment, {});
	let m = (0, L.default)(t, eE.notificationBadge, {
		[eE.visible]: i,
		[eE.notification]: a,
		[eE.highlight]: o,
		[eE.dot]: c === "dot",
		[eE.badge2Char]: c === "badge_2char",
		[eE.badge3Char]: c === "badge_3char",
		"cpd-theme-light": c !== "dot"
	}), h = o ? "highlight" : a ? "notification" : void 0, g = s ? /* @__PURE__ */ (0, R.jsx)(MS, { "aria-label": n("room|knock_sent") }) : /* @__PURE__ */ (0, R.jsx)("span", {
		className: eE.count,
		children: l
	}), _ = u ? /* @__PURE__ */ (0, R.jsx)("button", {
		type: "button",
		"data-testid": "notification-badge",
		"data-badge-type": c,
		"data-notification-level": h,
		className: m,
		"aria-label": d,
		tabIndex: f,
		onClick: e.onClick,
		children: g
	}) : /* @__PURE__ */ (0, R.jsx)("div", {
		"data-testid": "notification-badge",
		"data-badge-type": c,
		"data-notification-level": h,
		className: m,
		children: g
	});
	return p ? /* @__PURE__ */ (0, R.jsx)(Oe, {
		label: n("notifications|message_didnt_send"),
		placement: "right",
		children: _
	}) : _;
}
var nE = {
	readMarker: "_readMarker_1t1ld_8",
	labelledMarker: "_labelledMarker_1t1ld_16",
	labelledLine: "_labelledLine_1t1ld_23",
	label: "_label_1t1ld_16",
	line: "_line_1t1ld_36"
};
//#endregion
//#region src/room/timeline/ReadMarker/ReadMarker.tsx
function rE({ eventId: e, kind: t, showLine: n = !0, label: r, as: i = "li", onCurrentMarkerRef: a, onGhostLineRef: o, onGhostTransitionEnd: s, className: c }) {
	let l = t === "current" && n && r !== void 0, u = null;
	return t === "ghost" ? u = /* @__PURE__ */ (0, R.jsx)("hr", {
		className: nE.line,
		ref: o,
		onTransitionEnd: s,
		"data-eventid": e
	}) : l ? u = /* @__PURE__ */ (0, R.jsx)("div", {
		className: nE.labelledLine,
		role: "separator",
		"aria-label": r,
		children: /* @__PURE__ */ (0, R.jsx)("span", {
			className: nE.label,
			children: r
		})
	}) : n && (u = /* @__PURE__ */ (0, R.jsx)("hr", { className: nE.line })), /* @__PURE__ */ (0, R.jsx)(i, {
		className: (0, L.default)(c, nE.readMarker, { [nE.labelledMarker]: l }),
		ref: t === "current" ? a : void 0,
		"data-scroll-tokens": t === "current" ? e : void 0,
		children: u
	});
}
//#endregion
//#region src/room/timeline/EventPresentation/EventPresentationContext.ts
var iE = {
	layout: "group",
	density: "default"
}, aE = l(iE);
aE.displayName = "EventPresentationContext";
var oE = aE.Provider;
function sE() {
	return g(aE);
}
function cE() {
	let { layout: e, density: t } = sE();
	return {
		"data-event-layout": e,
		"data-event-density": t
	};
}
//#endregion
//#region ../../node_modules/.pnpm/html-dom-parser@8.0.2/node_modules/html-dom-parser/lib/node_modules/domelementtype/dist/index.js
var lE = /* @__PURE__ */ P(((e) => {
	var t;
	(function(e) {
		e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype";
	})(t ||= {});
	function n(e) {
		return e.type === t.Tag || e.type === t.Script || e.type === t.Style;
	}
	t.Root, t.Text, t.Directive, t.Comment, t.Script, t.Style, t.Tag, t.CDATA, t.Doctype, Object.defineProperty(e, "ElementType", {
		enumerable: !0,
		get: function() {
			return t;
		}
	}), e.isTag = n;
})), uE = /* @__PURE__ */ P(((e) => {
	var t = lE(), n = class {
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
			return _(this, e);
		}
	}, r = class extends n {
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
	}, i = class extends r {
		type = t.ElementType.Text;
		get nodeType() {
			return 3;
		}
	}, a = class extends r {
		type = t.ElementType.Comment;
		get nodeType() {
			return 8;
		}
	}, o = class extends r {
		type = t.ElementType.Directive;
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
	}, s = class extends n {
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
	}, c = class extends s {
		type = t.ElementType.CDATA;
		get nodeType() {
			return 4;
		}
	}, l = class extends s {
		type = t.ElementType.Root;
		get nodeType() {
			return 9;
		}
	}, u = class extends s {
		name;
		attribs;
		type;
		constructor(e, n, r = [], i = e === "script" ? t.ElementType.Script : e === "style" ? t.ElementType.Style : t.ElementType.Tag) {
			super(r), this.name = e, this.attribs = n, this.type = i;
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
	function d(e) {
		return t.isTag(e);
	}
	function f(e) {
		return e.type === t.ElementType.CDATA;
	}
	function p(e) {
		return e.type === t.ElementType.Text;
	}
	function m(e) {
		return e.type === t.ElementType.Comment;
	}
	function h(e) {
		return e.type === t.ElementType.Directive;
	}
	function g(e) {
		return e.type === t.ElementType.Root;
	}
	function _(e, t = !1) {
		let n;
		if (p(e)) n = new i(e.data);
		else if (m(e)) n = new a(e.data);
		else if (d(e)) {
			let r = t ? v(e.children) : [], i = new u(e.name, { ...e.attribs }, r);
			for (let e of r) e.parent = i;
			e.namespace != null && (i.namespace = e.namespace), e["x-attribsNamespace"] && (i["x-attribsNamespace"] = { ...e["x-attribsNamespace"] }), e["x-attribsPrefix"] && (i["x-attribsPrefix"] = { ...e["x-attribsPrefix"] }), n = i;
		} else if (f(e)) {
			let r = t ? v(e.children) : [], i = new c(r);
			for (let e of r) e.parent = i;
			n = i;
		} else if (g(e)) {
			let r = t ? v(e.children) : [], i = new l(r);
			for (let e of r) e.parent = i;
			e["x-mode"] && (i["x-mode"] = e["x-mode"]), n = i;
		} else if (h(e)) {
			let t = new o(e.name, e.data);
			e["x-name"] != null && (t["x-name"] = e["x-name"], t["x-publicId"] = e["x-publicId"], t["x-systemId"] = e["x-systemId"]), n = t;
		} else throw Error(`Not implemented yet: ${e.type}`);
		return n.startIndex = e.startIndex, n.endIndex = e.endIndex, e.sourceCodeLocation != null && (n.sourceCodeLocation = e.sourceCodeLocation), n;
	}
	function v(e) {
		let t = e.map((e) => _(e, !0));
		for (let e = 1; e < t.length; e++) t[e].prev = t[e - 1], t[e - 1].next = t[e];
		return t;
	}
	e.CDATA = c, e.Comment = a, e.DataNode = r, e.Document = l, e.Element = u, e.Node = n, e.NodeWithChildren = s, e.ProcessingInstruction = o, e.Text = i, e.cloneNode = _, e.isCDATA = f, e.isComment = m, e.isDirective = h, e.isDocument = g, e.isTag = d, e.isText = p;
})), dE = /* @__PURE__ */ P(((e) => {
	var t = /* @__PURE__ */ "animateMotion.animateTransform.clipPath.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.foreignObject.linearGradient.radialGradient.textPath".split("."), n = t.reduce((e, t) => (e[t.toLowerCase()] = t, e), {});
	e.CASE_SENSITIVE_TAG_NAMES = t, e.CASE_SENSITIVE_TAG_NAMES_MAP = n;
})), fE = /* @__PURE__ */ P(((e) => {
	var t = uE(), n = dE(), r = "\r", i = new RegExp(r, "g"), a = `__HTML_DOM_PARSER_CARRIAGE_RETURN_PLACEHOLDER_${Date.now().toString()}__`, o = new RegExp(a, "g");
	function s(e) {
		return n.CASE_SENSITIVE_TAG_NAMES_MAP[e];
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
	function p(e, n = null, r) {
		let i = [], a, o = 0, s = e.length;
		for (; o < s; o++) {
			let r = e[o];
			switch (r.nodeType) {
				case 1: {
					let e = l(r.nodeName);
					a = new t.Element(e, c(r.attributes)), a.children = p(e === "template" ? r.content.childNodes : r.childNodes, a);
					break;
				}
				/* v8 ignore start */
				case 3:
					a = new t.Text(f(r.nodeValue ?? ""));
					break;
				case 8:
					a = new t.Comment(r.nodeValue ?? "");
					break;
				/* v8 ignore stop */
				default: continue;
			}
			let s = i[o - 1] ?? null;
			s && (s.next = a), a.parent = n, a.prev = s, a.next = null, i.push(a);
		}
		return r && (a = new t.ProcessingInstruction(r.substring(0, r.indexOf(" ")).toLowerCase(), r), a.next = i[0] ?? null, a.parent = n, i.unshift(a), i[1] && (i[1].prev = i[0])), i;
	}
	e.escapeSpecialCharacters = d, e.formatDOM = p, e.hasOpenTag = u, e.revertEscapedCharacters = f;
})), pE = /* @__PURE__ */ P(((e) => {
	var t = fE(), n = "html", r = "head", i = "body", a = /<([a-zA-Z]+[0-9]?)/;
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
	e.default = p, e.getHTMLForInnerHTML = o;
})), mE = /* @__PURE__ */ P(((e) => {
	Object.defineProperties(e, {
		__esModule: { value: !0 },
		[Symbol.toStringTag]: { value: "Module" }
	});
	var t = fE(), n = pE(), r = /<(![a-zA-Z\s]+)>/;
	function i(e, i) {
		if (typeof e != "string") throw TypeError("First argument must be a string");
		if (!e) return [];
		let a = r.exec(e), o = a ? a[1] : void 0;
		return t.formatDOM(n.default(e, i?.trustedTypePolicy), null, o);
	}
	e.default = i;
})), hE = /* @__PURE__ */ P(((e) => {
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
})), gE = /* @__PURE__ */ P(((e) => {
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
	var { CAMELCASE: m, SAME: h, possibleStandardNames: g } = hE(), _ = RegExp.prototype.test.bind(/* @__PURE__ */ RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")), v = Object.keys(g).reduce((e, t) => {
		let n = g[t];
		return n === h ? e[t] = t : n === m ? e[t.toLowerCase()] = t : e[t] = n, e;
	}, {});
	e.BOOLEAN = i, e.BOOLEANISH_STRING = r, e.NUMERIC = o, e.OVERLOADED_BOOLEAN = a, e.POSITIVE_NUMERIC = s, e.RESERVED = t, e.STRING = n, e.getPropertyInfo = c, e.isCustomAttribute = _, e.possibleStandardNames = v;
})), _E = /* @__PURE__ */ P(((e, t) => {
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
})), vE = /* @__PURE__ */ P(((e, t) => {
	var n = Object.create, r = Object.defineProperty, i = Object.getOwnPropertyDescriptor, a = Object.getOwnPropertyNames, o = Object.getPrototypeOf, s = Object.prototype.hasOwnProperty, c = (e, t, n, o) => {
		if (t && typeof t == "object" || typeof t == "function") for (var c = a(t), l = 0, u = c.length, d; l < u; l++) d = c[l], !s.call(e, d) && d !== n && r(e, d, {
			get: ((e) => t[e]).bind(null, d),
			enumerable: !(o = i(t, d)) || o.enumerable
		});
		return e;
	}, l = (e, t, i) => (i = e == null ? {} : n(o(e)), c(t || !e || !e.__esModule ? r(i, "default", {
		value: e,
		enumerable: !0
	}) : i, e)), u = _E();
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
})), yE = /* @__PURE__ */ P(((e, t) => {
	var n = Object.create, r = Object.defineProperty, i = Object.getOwnPropertyDescriptor, a = Object.getOwnPropertyNames, o = Object.getPrototypeOf, s = Object.prototype.hasOwnProperty, c = (e, t, n, o) => {
		if (t && typeof t == "object" || typeof t == "function") for (var c = a(t), l = 0, u = c.length, d; l < u; l++) d = c[l], !s.call(e, d) && d !== n && r(e, d, {
			get: ((e) => t[e]).bind(null, d),
			enumerable: !(o = i(t, d)) || o.enumerable
		});
		return e;
	}, l = (e, t, i) => (i = e == null ? {} : n(o(e)), c(t || !e || !e.__esModule ? r(i, "default", {
		value: e,
		enumerable: !0
	}) : i, e)), u = vE();
	u = l(u);
	var d = /^--[a-zA-Z0-9_-]+$/, f = /-([a-z])/g, p = /^[^-]+$/, m = /^-(webkit|moz|ms|o|khtml)-/, h = /^-(ms)-/, g = (e) => !e || p.test(e) || d.test(e), _ = (e, t) => t.toUpperCase(), v = (e, t) => `${t}-`, y = (e, t = {}) => g(e) ? e : (e = e.toLowerCase(), e = t.reactCompat ? e.replace(h, v) : e.replace(m, v), e.replace(f, _));
	function b(e, t) {
		let n = {};
		return !e || typeof e != "string" || (0, u.default)(e, (e, r) => {
			e && r && (n[y(e, t)] = r);
		}), n;
	}
	t.exports = b;
})), bE = /* @__PURE__ */ P(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.returnFirstArg = e.canTextBeChildOfNode = e.ELEMENTS_WITH_NO_TEXT_CHILDREN = e.PRESERVE_CUSTOM_ATTRIBUTES = void 0, e.isCustomComponent = a, e.setStyleProp = s;
	var n = jf(), r = t(yE()), i = /* @__PURE__ */ new Set([
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
})), xE = /* @__PURE__ */ P(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = o;
	var t = gE(), n = bE(), r = ["checked", "value"], i = [
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
}));
//#endregion
//#region ../../node_modules/.pnpm/domelementtype@3.0.0/node_modules/domelementtype/dist/index.js
function SE(e) {
	return e.type === W.Tag || e.type === W.Script || e.type === W.Style;
}
var W, CE = Xe((() => {
	(function(e) {
		e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype";
	})(W ||= {}), W.Root, W.Text, W.Directive, W.Comment, W.Script, W.Style, W.Tag, W.CDATA, W.Doctype;
}));
//#endregion
//#region ../../node_modules/.pnpm/domhandler@6.0.1/node_modules/domhandler/dist/node.js
function wE(e) {
	return SE(e);
}
function TE(e) {
	return e.type === W.CDATA;
}
function EE(e) {
	return e.type === W.Text;
}
function DE(e) {
	return e.type === W.Comment;
}
function OE(e) {
	return e.type === W.Directive;
}
function kE(e) {
	return e.type === W.Root;
}
function AE(e) {
	return Object.hasOwn(e, "children");
}
function jE(e, t = !1) {
	let n;
	if (EE(e)) n = new FE(e.data);
	else if (DE(e)) n = new IE(e.data);
	else if (wE(e)) {
		let r = t ? ME(e.children) : [], i = new VE(e.name, { ...e.attribs }, r);
		for (let e of r) e.parent = i;
		e.namespace != null && (i.namespace = e.namespace), e["x-attribsNamespace"] && (i["x-attribsNamespace"] = { ...e["x-attribsNamespace"] }), e["x-attribsPrefix"] && (i["x-attribsPrefix"] = { ...e["x-attribsPrefix"] }), n = i;
	} else if (TE(e)) {
		let r = t ? ME(e.children) : [], i = new zE(r);
		for (let e of r) e.parent = i;
		n = i;
	} else if (kE(e)) {
		let r = t ? ME(e.children) : [], i = new BE(r);
		for (let e of r) e.parent = i;
		e["x-mode"] && (i["x-mode"] = e["x-mode"]), n = i;
	} else if (OE(e)) {
		let t = new LE(e.name, e.data);
		e["x-name"] != null && (t["x-name"] = e["x-name"], t["x-publicId"] = e["x-publicId"], t["x-systemId"] = e["x-systemId"]), n = t;
	} else throw Error(`Not implemented yet: ${e.type}`);
	return n.startIndex = e.startIndex, n.endIndex = e.endIndex, e.sourceCodeLocation != null && (n.sourceCodeLocation = e.sourceCodeLocation), n;
}
function ME(e) {
	let t = e.map((e) => jE(e, !0));
	for (let e = 1; e < t.length; e++) t[e].prev = t[e - 1], t[e - 1].next = t[e];
	return t;
}
var NE, PE, FE, IE, LE, RE, zE, BE, VE, HE = Xe((() => {
	CE(), NE = class {
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
			return jE(this, e);
		}
	}, PE = class extends NE {
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
	}, FE = class extends PE {
		type = W.Text;
		get nodeType() {
			return 3;
		}
	}, IE = class extends PE {
		type = W.Comment;
		get nodeType() {
			return 8;
		}
	}, LE = class extends PE {
		type = W.Directive;
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
	}, RE = class extends NE {
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
	}, zE = class extends RE {
		type = W.CDATA;
		get nodeType() {
			return 4;
		}
	}, BE = class extends RE {
		type = W.Root;
		get nodeType() {
			return 9;
		}
	}, VE = class extends RE {
		name;
		attribs;
		type;
		constructor(e, t, n = [], r = e === "script" ? W.Script : e === "style" ? W.Style : W.Tag) {
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
})), UE = /* @__PURE__ */ Ze({
	CDATA: () => zE,
	Comment: () => IE,
	DataNode: () => PE,
	Document: () => BE,
	DomHandler: () => GE,
	Element: () => VE,
	Node: () => NE,
	NodeWithChildren: () => RE,
	ProcessingInstruction: () => LE,
	Text: () => FE,
	cloneNode: () => jE,
	default: () => GE,
	hasChildren: () => AE,
	isCDATA: () => TE,
	isComment: () => DE,
	isDirective: () => OE,
	isDocument: () => kE,
	isTag: () => wE,
	isText: () => EE
}), WE, GE, KE = Xe((() => {
	CE(), HE(), HE(), WE = {
		withStartIndices: !1,
		withEndIndices: !1,
		xmlMode: !1
	}, GE = class {
		dom = [];
		root = new BE(this.dom);
		callback;
		options;
		elementCB;
		done = !1;
		tagStack = [this.root];
		lastNode = null;
		parser = null;
		constructor(e, t, n) {
			typeof t == "function" && (n = t, t = WE), typeof e == "object" && (t = e, e = void 0), this.callback = e ?? null, this.options = t ?? WE, this.elementCB = n ?? null;
		}
		onparserinit(e) {
			this.parser = e;
		}
		onreset() {
			this.dom = [], this.root = new BE(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
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
			let n = this.options.xmlMode ? W.Tag : void 0, r = new VE(e, t, void 0, n);
			this.addNode(r), this.tagStack.push(r);
		}
		ontext(e) {
			let { lastNode: t } = this;
			if (t && t.type === W.Text) t.data += e, this.options.withEndIndices && this.parser && (t.endIndex = this.parser.endIndex);
			else {
				let t = new FE(e);
				this.addNode(t), this.lastNode = t;
			}
		}
		oncomment(e) {
			if (this.lastNode && this.lastNode.type === W.Comment) {
				this.lastNode.data += e;
				return;
			}
			let t = new IE(e);
			this.addNode(t), this.lastNode = t;
		}
		oncommentend() {
			this.lastNode = null;
		}
		oncdatastart() {
			let e = new FE(""), t = new zE([e]);
			this.addNode(t), e.parent = t, this.lastNode = e;
		}
		oncdataend() {
			this.lastNode = null;
		}
		onprocessinginstruction(e, t) {
			let n = new LE(e, t);
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
})), qE = /* @__PURE__ */ P(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = s;
	var n = (KE(), et(UE)), r = jf(), i = t(xE()), a = bE(), o = {
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
		for (let t of e) switch (t.type) {
			case "tag":
			case "script":
			case "style":
				Object.setPrototypeOf(t, n.Element.prototype), c(t.children);
				break;
			case "text":
				Object.setPrototypeOf(t, n.Text.prototype);
				break;
			case "comment": Object.setPrototypeOf(t, n.Comment.prototype);
		}
	}
	function l(e) {
		return a.PRESERVE_CUSTOM_ATTRIBUTES && e.type === "tag" && (0, a.isCustomComponent)(e.name, e.attribs);
	}
})), JE = /* @__PURE__ */ $e((/* @__PURE__ */ P(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.htmlToDOM = e.domToReact = e.attributesToProps = e.Text = e.ProcessingInstruction = e.Element = e.Comment = void 0, e.default = o;
	var n = t(mE());
	e.htmlToDOM = n.default, e.attributesToProps = t(xE()).default;
	var r = t(qE());
	e.domToReact = r.default;
	var i = (KE(), et(UE));
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
})))(), 1), YE = JE.default.default || JE.default;
//#endregion
//#region src/core/utils/applyReplacerOnString.ts
function XE(e, t) {
	return t ? (Array.isArray(e) ? e : [e]).map((e, n) => typeof e == "string" && t(new JE.Text(e), 0) || e) : e;
}
//#endregion
//#region src/room/timeline/event-tile/body/EventContentBodyView/EventContentBodyView.tsx
var ZE = p(function({ vm: e, as: t, ref: n }) {
	let { body: r, formattedBody: i, replacer: a, className: o, dir: s, parseFormattedBody: c } = V(e), l = i ? (c ?? ((e, t) => YE(e, t ? { replace: t } : void 0)))(i, a) : XE(r, a);
	return t === "span" ? /* @__PURE__ */ (0, R.jsx)("span", {
		ref: n,
		className: o,
		dir: s,
		children: l
	}) : /* @__PURE__ */ (0, R.jsx)("div", {
		ref: n,
		className: o,
		dir: s,
		children: l
	});
}), QE = {
	content: "_content_1wtpw_8",
	icon: "_icon_1wtpw_17"
};
//#endregion
//#region src/room/timeline/event-tile/body/HiddenBodyView/HiddenBodyView.tsx
function $E({ vm: e, className: t, ref: n }) {
	let { reason: r } = V(e), i = z().translate, a = r ? i("timeline|pending_moderation_reason", { reason: r }) : i("timeline|pending_moderation");
	return /* @__PURE__ */ (0, R.jsxs)("span", {
		className: (0, L.default)(QE.content, t),
		ref: n,
		children: [/* @__PURE__ */ (0, R.jsx)(eT, {
			className: QE.icon,
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, R.jsx)(N, {
			as: "span",
			children: a
		})]
	});
}
var eD = {
	button: "_button_1ync4_8",
	content: "_content_1ync4_27",
	icon: "_icon_1ync4_34"
};
//#endregion
//#region src/room/timeline/event-tile/body/HiddenMediaPlaceholder/HiddenMediaPlaceholder.tsx
function tD({ className: e, onClick: t, children: n }) {
	return /* @__PURE__ */ (0, R.jsx)("button", {
		type: "button",
		onClick: t,
		className: (0, L.default)(eD.button, e),
		children: /* @__PURE__ */ (0, R.jsxs)("span", {
			className: eD.content,
			children: [/* @__PURE__ */ (0, R.jsx)(nT, {
				className: eD.icon,
				"aria-hidden": "true"
			}), /* @__PURE__ */ (0, R.jsx)("span", { children: n })]
		})
	});
}
var nD = {
	content: "_content_1xhpr_8",
	icon: "_icon_1xhpr_17"
};
//#endregion
//#region src/room/timeline/event-tile/body/RedactedBodyView/RedactedBodyView.tsx
function rD({ vm: e, className: t, ref: n }) {
	let { text: r, tooltip: i } = V(e), a = /* @__PURE__ */ (0, R.jsxs)("span", {
		className: (0, L.default)(nD.content, t),
		ref: n,
		children: [/* @__PURE__ */ (0, R.jsx)(oC, {
			className: nD.icon,
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, R.jsx)("span", { children: r })]
	});
	return i ? /* @__PURE__ */ (0, R.jsx)(Oe, {
		description: i,
		children: a
	}) : a;
}
var iD = {
	content: "_content_1dw8a_8",
	invalid: "_invalid_1dw8a_99"
}, aD = { mediaBody: "_mediaBody_9mib0_8" };
//#endregion
//#region src/room/timeline/event-tile/body/MediaBody/MediaBody.tsx
function oD({ as: e, className: t, children: n, ...r }) {
	return /* @__PURE__ */ (0, R.jsx)(e || "div", {
		className: (0, L.default)("mx_MediaBody", aD.mediaBody, t),
		...r,
		children: n
	});
}
//#endregion
//#region src/room/timeline/event-tile/body/MFileBodyView/FileBodyView.tsx
var sD = /* @__PURE__ */ function(e) {
	return e.EXPORT = "EXPORT", e.DECRYPTION_PENDING = "DECRYPTION_PENDING", e.ENCRYPTED = "ENCRYPTED", e.UNENCRYPTED = "UNENCRYPTED", e.INVALID = "INVALID", e;
}({}), cD = /* @__PURE__ */ function(e) {
	return e.ATTACHMENT = "ATTACHMENT", e.AUDIO = "AUDIO", e.DOWNLOAD = "DOWNLOAD", e.VIDEO = "VIDEO", e;
}({});
function lD(e) {
	return e === "AUDIO" ? cT : e === "DOWNLOAD" ? mC : e === "VIDEO" ? Xw : PS;
}
function uD({ vm: e, refIFrame: t, refLink: n, className: r }) {
	let { translate: i } = z(), { state: a, showInfo: o, infoLabel: s, infoTooltip: c, infoIcon: l, infoHref: u, showDownload: d, downloadLabel: f, downloadTitle: p, downloadHref: m, showOpen: h, openLabel: g, showInlineDownload: _ } = V(e), v = s ?? i("common|attachment"), y = c ?? v, b = lD(l), x = f ?? i("action|download"), S = /* @__PURE__ */ (0, R.jsx)(k, {
		as: "button",
		size: "md",
		kind: "secondary",
		"aria-label": v,
		Icon: b,
		onClick: e.onInfoClick,
		children: /* @__PURE__ */ (0, R.jsx)("span", { children: v })
	}), C = _ || h && g ? /* @__PURE__ */ (0, R.jsxs)("div", {
		"data-type": "actions",
		children: [_ && /* @__PURE__ */ (0, R.jsx)(j, {
			size: "28px",
			kind: "secondary",
			"aria-label": x,
			tooltip: x,
			onClick: e.onInfoClick,
			children: /* @__PURE__ */ (0, R.jsx)(mC, {})
		}), h && g && /* @__PURE__ */ (0, R.jsx)(j, {
			size: "28px",
			kind: "secondary",
			"aria-label": g,
			tooltip: g,
			onClick: e.onOpenClick,
			children: /* @__PURE__ */ (0, R.jsx)(OC, {})
		})]
	}) : null, w = o ? C ? /* @__PURE__ */ (0, R.jsxs)(oD, {
		"data-type": "info",
		children: [/* @__PURE__ */ (0, R.jsx)(Oe, {
			description: y,
			placement: "right",
			children: S
		}), C]
	}) : /* @__PURE__ */ (0, R.jsx)(Oe, {
		description: y,
		placement: "right",
		children: /* @__PURE__ */ (0, R.jsx)(oD, {
			"data-type": "info",
			children: S
		})
	}) : null, T = (0, L.default)(iD.content, r), E = p ?? x;
	switch (a) {
		case "EXPORT": return /* @__PURE__ */ (0, R.jsx)("span", {
			className: T,
			children: /* @__PURE__ */ (0, R.jsx)("a", {
				href: u,
				children: w
			})
		});
		case "DECRYPTION_PENDING": return /* @__PURE__ */ (0, R.jsxs)("span", {
			className: T,
			children: [w, d && /* @__PURE__ */ (0, R.jsx)("div", {
				"data-type": "download",
				children: /* @__PURE__ */ (0, R.jsx)(k, {
					size: "md",
					kind: "secondary",
					Icon: mC,
					onClick: e.onDownloadClick,
					children: x
				})
			})]
		});
		case "ENCRYPTED": return /* @__PURE__ */ (0, R.jsxs)("span", {
			className: T,
			children: [w, d && /* @__PURE__ */ (0, R.jsxs)("div", {
				"data-type": "download",
				children: [/* @__PURE__ */ (0, R.jsx)("div", {
					"aria-hidden": !0,
					style: { display: "none" },
					children: /* @__PURE__ */ (0, R.jsx)(k, {
						size: "md",
						kind: "secondary",
						Icon: mC,
						as: "a",
						ref: n
					})
				}), /* @__PURE__ */ (0, R.jsx)("iframe", {
					"aria-hidden": !0,
					title: E,
					src: "usercontent/",
					onLoad: e.onDownloadIframeLoad,
					ref: t,
					sandbox: "allow-scripts allow-downloads"
				})]
			})]
		});
		case "UNENCRYPTED": return /* @__PURE__ */ (0, R.jsxs)("span", {
			className: T,
			children: [w, d && /* @__PURE__ */ (0, R.jsx)("div", {
				"data-type": "download",
				children: /* @__PURE__ */ (0, R.jsx)(k, {
					size: "md",
					kind: "secondary",
					Icon: mC,
					as: "a",
					href: m,
					target: "_blank",
					rel: "noreferrer noopener",
					onClick: e.onDownloadLinkClick,
					children: x
				})
			})]
		});
		default: return /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsx)("span", {
			className: T,
			children: w
		}), /* @__PURE__ */ (0, R.jsx)("span", {
			className: (0, L.default)(T, iD.invalid),
			children: i("timeline|m.file|error_invalid")
		})] });
	}
}
//#endregion
//#region ../../node_modules/.pnpm/blurhash@2.0.5/node_modules/blurhash/dist/esm/index.js
var dD = /* @__PURE__ */ "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%*+,-.:;=?@[]^_{|}~".split(""), fD = (e) => {
	let t = 0;
	for (let n = 0; n < e.length; n++) {
		let r = e[n], i = dD.indexOf(r);
		t = t * 83 + i;
	}
	return t;
}, pD = (e) => {
	let t = e / 255;
	return t <= .04045 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4;
}, mD = (e) => {
	let t = Math.max(0, Math.min(1, e));
	return Math.trunc(t <= .0031308 ? t * 12.92 * 255 + .5 : (1.055 * t ** .4166666666666667 - .055) * 255 + .5);
}, hD = (e) => e < 0 ? -1 : 1, gD = (e, t) => hD(e) * Math.abs(e) ** +t, _D = class extends Error {
	constructor(e) {
		super(e), this.name = "ValidationError", this.message = e;
	}
}, vD = (e) => {
	if (!e || e.length < 6) throw new _D("The blurhash string must be at least 6 characters");
	let t = fD(e[0]), n = Math.floor(t / 9) + 1, r = t % 9 + 1;
	if (e.length !== 4 + 2 * r * n) throw new _D(`blurhash length mismatch: length is ${e.length} but it should be ${4 + 2 * r * n}`);
}, yD = (e) => {
	let t = e >> 16, n = e >> 8 & 255, r = e & 255;
	return [
		pD(t),
		pD(n),
		pD(r)
	];
}, bD = (e, t) => {
	let n = Math.floor(e / 361), r = Math.floor(e / 19) % 19, i = e % 19;
	return [
		gD((n - 9) / 9, 2) * t,
		gD((r - 9) / 9, 2) * t,
		gD((i - 9) / 9, 2) * t
	];
}, xD = (e, t, n, r) => {
	vD(e), r |= 1;
	let i = fD(e[0]), a = Math.floor(i / 9) + 1, o = i % 9 + 1, s = (fD(e[1]) + 1) / 166, c = Array(o * a);
	for (let t = 0; t < c.length; t++) if (t === 0) {
		let n = fD(e.substring(2, 6));
		c[t] = yD(n);
	} else {
		let n = fD(e.substring(4 + t * 2, 6 + t * 2));
		c[t] = bD(n, s * r);
	}
	let l = t * 4, u = new Uint8ClampedArray(l * n);
	for (let e = 0; e < n; e++) for (let r = 0; r < t; r++) {
		let i = 0, s = 0, d = 0;
		for (let l = 0; l < a; l++) for (let a = 0; a < o; a++) {
			let u = Math.cos(Math.PI * r * a / t) * Math.cos(Math.PI * e * l / n), f = c[a + l * o];
			i += f[0] * u, s += f[1] * u, d += f[2] * u;
		}
		let f = mD(i), p = mD(s), m = mD(d);
		u[4 * r + 0 + e * l] = f, u[4 * r + 1 + e * l] = p, u[4 * r + 2 + e * l] = m, u[4 * r + 3 + e * l] = 255;
	}
	return u;
}, SD = Object.defineProperty, CD = Object.defineProperties, wD = Object.getOwnPropertyDescriptors, TD = Object.getOwnPropertySymbols, ED = Object.prototype.hasOwnProperty, DD = Object.prototype.propertyIsEnumerable, OD = (e, t, n) => t in e ? SD(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, kD = (e, t) => {
	for (var n in t ||= {}) ED.call(t, n) && OD(e, n, t[n]);
	if (TD) for (var n of TD(t)) DD.call(t, n) && OD(e, n, t[n]);
	return e;
}, AD = (e, t) => CD(e, wD(t)), jD = (e, t) => {
	var n = {};
	for (var r in e) ED.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && TD) for (var r of TD(e)) t.indexOf(r) < 0 && DD.call(e, r) && (n[r] = e[r]);
	return n;
}, MD = class extends a.PureComponent {
	constructor() {
		super(...arguments), this.canvas = null, this.handleRef = (e) => {
			this.canvas = e, this.draw();
		}, this.draw = () => {
			let { hash: e, height: t, punch: n, width: r } = this.props;
			if (this.canvas) {
				let i = xD(e, r, t, n), a = this.canvas.getContext("2d"), o = a.createImageData(r, t);
				o.data.set(i), a.putImageData(o, 0, 0);
			}
		};
	}
	componentDidUpdate() {
		this.draw();
	}
	render() {
		let e = this.props, { hash: t, height: n, width: r } = e, i = jD(e, [
			"hash",
			"height",
			"width"
		]);
		return a.createElement("canvas", AD(kD({}, i), {
			height: n,
			width: r,
			ref: this.handleRef
		}));
	}
};
MD.defaultProps = {
	height: 128,
	width: 128
};
var ND = {
	position: "absolute",
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	width: "100%",
	height: "100%"
}, PD = class extends a.PureComponent {
	componentDidUpdate() {
		if (this.props.resolutionX <= 0) throw Error("resolutionX must be larger than zero");
		if (this.props.resolutionY <= 0) throw Error("resolutionY must be larger than zero");
	}
	render() {
		let e = this.props, { hash: t, height: n, width: r, punch: i, resolutionX: o, resolutionY: s, style: c } = e, l = jD(e, [
			"hash",
			"height",
			"width",
			"punch",
			"resolutionX",
			"resolutionY",
			"style"
		]);
		return a.createElement("div", AD(kD({}, l), { style: AD(kD({
			display: "inline-block",
			height: n,
			width: r
		}, c), { position: "relative" }) }), a.createElement(MD, {
			hash: t,
			height: s,
			width: o,
			punch: i,
			style: ND
		}));
	}
};
PD.defaultProps = {
	height: 128,
	width: 128,
	resolutionX: 32,
	resolutionY: 32
};
var FD = {
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
}, ID = /* @__PURE__ */ function(e) {
	return e.ERROR = "ERROR", e.HIDDEN = "HIDDEN", e.READY = "READY", e;
}({}), LD = /* @__PURE__ */ function(e) {
	return e.NONE = "NONE", e.SPINNER = "SPINNER", e.BLURHASH = "BLURHASH", e;
}({});
function RD({ placeholder: e, blurhash: t, maxWidth: n, maxHeight: r, loadingLabel: i }) {
	switch (e) {
		case "BLURHASH": return t ? /* @__PURE__ */ (0, R.jsx)(PD, {
			className: FD.blurhash,
			hash: t,
			width: n ?? 320,
			height: r ?? 240
		}) : /* @__PURE__ */ (0, R.jsx)(me, {
			"aria-label": i,
			role: "progressbar"
		});
		case "SPINNER": return /* @__PURE__ */ (0, R.jsx)(me, {
			"aria-label": i,
			role: "progressbar"
		});
		default: return null;
	}
}
function zD({ vm: e, className: t, containerClassName: n, imageClassName: r, imageRef: i, children: a }) {
	let { translate: o } = z(), { state: s, alt: c, errorLabel: l, hiddenButtonLabel: u, src: d, thumbnailSrc: f, showAnimatedContentOnHover: p, placeholder: m = "NONE", blurhash: h, maxWidth: g, maxHeight: _, aspectRatio: v, isSvg: y, gifLabel: b, bannerLabel: x, tooltipLabel: S, linkUrl: C, linkTarget: w } = V(e), [E, ee] = T(!1), [D, te] = T(!1), O = E || D, k = (0, L.default)(t, FD.root), ne = (0, L.default)(n, FD.thumbnailContainer), re = (0, L.default)(r, FD.image);
	if (s === "ERROR") {
		let e = _ === void 0 ? void 0 : { "--mx-image-reserved-height": `${_}px` };
		return /* @__PURE__ */ (0, R.jsxs)("span", {
			className: (0, L.default)(k, FD.error),
			style: e,
			children: [/* @__PURE__ */ (0, R.jsx)(BC, {
				className: FD.errorIcon,
				width: "16",
				height: "16"
			}), l]
		});
	}
	let ie = O && p && d ? d : f ?? d, A = g === void 0 ? void 0 : `${g}px`, ae = g === void 0 ? void 0 : "100%", oe = {
		width: A,
		maxWidth: ae,
		maxHeight: _,
		aspectRatio: v
	}, se = y ? {
		width: A,
		maxWidth: ae,
		maxHeight: _
	} : void 0, ce = RD({
		placeholder: m,
		blurhash: h,
		maxWidth: g,
		maxHeight: _,
		loadingLabel: o("common|loading")
	}), le = ce !== null, ue = s === "HIDDEN" ? /* @__PURE__ */ (0, R.jsx)("div", {
		style: {
			width: g,
			height: _
		},
		children: /* @__PURE__ */ (0, R.jsx)("button", {
			type: "button",
			className: FD.hiddenButton,
			onClick: e.onHiddenButtonClick,
			children: /* @__PURE__ */ (0, R.jsxs)("div", {
				className: FD.hiddenButtonContent,
				children: [/* @__PURE__ */ (0, R.jsx)(nT, {}), /* @__PURE__ */ (0, R.jsx)("span", { children: u })]
			})
		})
	}) : ie ? /* @__PURE__ */ (0, R.jsx)("img", {
		className: re,
		src: ie,
		alt: c,
		ref: i,
		onError: e.onImageError,
		onLoad: e.onImageLoad,
		onMouseEnter: () => ee(!0),
		onMouseLeave: () => ee(!1)
	}) : null, de = s === "READY" && x && O ? /* @__PURE__ */ (0, R.jsx)("span", {
		className: FD.banner,
		children: x
	}) : null, fe = s === "READY" && b && !O ? /* @__PURE__ */ (0, R.jsx)("p", {
		className: FD.gifLabel,
		children: b
	}) : null, j = /* @__PURE__ */ (0, R.jsxs)("div", {
		className: ne,
		style: oe,
		children: [le && /* @__PURE__ */ (0, R.jsx)("div", {
			className: (0, L.default)(FD.placeholder, { [FD.placeholderBlurhash]: m === "BLURHASH" && !!h }),
			children: ce
		}), /* @__PURE__ */ (0, R.jsxs)("div", {
			className: FD.mediaContent,
			style: se,
			children: [
				ue,
				fe,
				de
			]
		})]
	});
	return S && (j = /* @__PURE__ */ (0, R.jsx)(Oe, {
		description: S,
		placement: "right",
		isTriggerInteractive: !0,
		children: j
	})), s === "READY" && C && (j = /* @__PURE__ */ (0, R.jsx)("a", {
		href: C,
		target: w,
		rel: w === "_blank" ? "noreferrer noopener" : void 0,
		className: FD.link,
		onClick: e.onLinkClick,
		onFocus: () => te(!0),
		onBlur: () => te(!1),
		children: j
	})), /* @__PURE__ */ (0, R.jsxs)("div", {
		className: k,
		children: [j, a]
	});
}
var BD = {
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
}, VD = /* @__PURE__ */ function(e) {
	return e.NONE = "NONE", e.SPINNER = "SPINNER", e.BLURHASH = "BLURHASH", e;
}({});
function HD({ placeholder: e, blurhash: t, maxWidth: n, maxHeight: r, loadingLabel: i }) {
	switch (e) {
		case "BLURHASH": return t ? /* @__PURE__ */ (0, R.jsx)(PD, {
			className: BD.blurhash,
			hash: t,
			width: n ?? 58,
			height: r ?? 44
		}) : /* @__PURE__ */ (0, R.jsx)("div", {
			className: BD.spinner,
			children: /* @__PURE__ */ (0, R.jsx)(me, {
				size: 32,
				"aria-label": i,
				role: "progressbar"
			})
		});
		case "SPINNER": return /* @__PURE__ */ (0, R.jsx)("div", {
			className: BD.spinner,
			children: /* @__PURE__ */ (0, R.jsx)(me, {
				size: 32,
				"aria-label": i,
				role: "progressbar"
			})
		});
		default: return null;
	}
}
function UD({ className: e, imageRef: t, src: n, thumbnailSrc: r, alt: i, maxWidth: a, maxHeight: o, aspectRatio: s, isSvg: c, placeholder: l = "NONE", blurhash: u, showAnimatedContentOnHover: d, showImage: f = !0, gifLabel: p, bannerLabel: m, onImageLoad: h, onImageError: g }) {
	let { translate: _ } = z(), [v, y] = T(!1), b = v && d && n ? n : r ?? n;
	if (!b) return /* @__PURE__ */ (0, R.jsx)("div", { className: (0, L.default)(BD.root, e) });
	if (a === void 0 || o === void 0 || s === void 0) return f ? /* @__PURE__ */ (0, R.jsx)("div", {
		className: (0, L.default)(BD.root, e),
		children: /* @__PURE__ */ (0, R.jsx)("img", {
			className: BD.measureImage,
			src: b,
			ref: t,
			alt: i,
			onError: g,
			onLoad: h
		})
	}) : /* @__PURE__ */ (0, R.jsx)("div", { className: (0, L.default)(BD.root, e) });
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
	}, C = HD({
		placeholder: l,
		blurhash: u,
		maxWidth: a,
		maxHeight: o,
		loadingLabel: _("common|loading")
	});
	return /* @__PURE__ */ (0, R.jsx)("div", {
		className: (0, L.default)(BD.root, e),
		children: /* @__PURE__ */ (0, R.jsxs)("div", {
			className: BD.thumbnailContainer,
			style: x,
			children: [C && /* @__PURE__ */ (0, R.jsx)("div", {
				className: BD.placeholder,
				children: C
			}), /* @__PURE__ */ (0, R.jsxs)("div", {
				className: BD.mediaContent,
				style: S,
				children: [
					f ? /* @__PURE__ */ (0, R.jsx)("img", {
						className: BD.image,
						src: b,
						ref: t,
						alt: i,
						onError: g,
						onLoad: h,
						onMouseEnter: () => y(!0),
						onMouseLeave: () => y(!1)
					}) : null,
					p && !v ? /* @__PURE__ */ (0, R.jsx)("p", {
						className: BD.gifLabel,
						children: p
					}) : null,
					m && v ? /* @__PURE__ */ (0, R.jsx)("span", {
						className: BD.banner,
						children: m
					}) : null
				]
			})]
		})
	});
}
var WD = {
	content: "_content_1sgf8_8",
	allowButton: "_allowButton_1sgf8_13"
};
//#endregion
//#region src/room/timeline/event-tile/body/MjolnirBodyView/MjolnirBodyView.tsx
function GD({ vm: e, className: t, ref: n }) {
	V(e);
	let r = z().translate;
	return /* @__PURE__ */ (0, R.jsx)("div", {
		className: (0, L.default)(WD.content, t),
		ref: n,
		children: /* @__PURE__ */ (0, R.jsx)("i", { children: r("timeline|mjolnir|message_hidden", {}, { a: (t) => /* @__PURE__ */ (0, R.jsx)("button", {
			type: "button",
			className: WD.allowButton,
			onClick: (t) => {
				t.preventDefault(), t.stopPropagation(), e.onAllow();
			},
			children: t
		}) }) })
	});
}
var KD = {
	root: "_root_acuv8_1",
	container: "_container_acuv8_5",
	video: "_video_acuv8_10",
	hiddenButton: "_hiddenButton_acuv8_17",
	hiddenButtonContent: "_hiddenButtonContent_acuv8_30",
	loadingContainer: "_loadingContainer_acuv8_40",
	error: "_error_acuv8_48"
}, qD = {
	ERROR: "ERROR",
	HIDDEN: "HIDDEN",
	LOADING: "LOADING",
	READY: "READY"
};
function JD({ vm: e, className: t, containerClassName: n, videoRef: r, children: i }) {
	let { state: a, videoLabel: o, videoTitle: s, hiddenButtonLabel: c, errorLabel: l, maxWidth: u, maxHeight: d, aspectRatio: f, src: p, poster: m, preload: h, controls: g, muted: _, autoPlay: v } = V(e), y = (0, L.default)(t, KD.root), b = (0, L.default)(n, KD.container), x = {
		width: u === void 0 ? void 0 : `min(100%, ${u}px)`,
		maxWidth: u,
		maxHeight: d,
		aspectRatio: f
	};
	return a === qD.ERROR ? /* @__PURE__ */ (0, R.jsxs)("span", {
		className: (0, L.default)(y, KD.error),
		children: [/* @__PURE__ */ (0, R.jsx)(PC, {
			width: "16",
			height: "16"
		}), l]
	}) : a === qD.HIDDEN ? /* @__PURE__ */ (0, R.jsx)("span", {
		className: y,
		children: /* @__PURE__ */ (0, R.jsx)("div", {
			className: b,
			style: x,
			children: /* @__PURE__ */ (0, R.jsx)("button", {
				type: "button",
				onClick: e.onPreviewClick,
				className: KD.hiddenButton,
				children: /* @__PURE__ */ (0, R.jsxs)("div", {
					className: KD.hiddenButtonContent,
					children: [/* @__PURE__ */ (0, R.jsx)(nT, {}), /* @__PURE__ */ (0, R.jsx)("span", { children: c })]
				})
			})
		})
	}) : a === qD.LOADING ? /* @__PURE__ */ (0, R.jsx)("span", {
		className: y,
		children: /* @__PURE__ */ (0, R.jsx)("div", {
			className: b,
			style: x,
			children: /* @__PURE__ */ (0, R.jsx)("div", {
				className: KD.loadingContainer,
				children: /* @__PURE__ */ (0, R.jsx)(me, {
					"aria-label": "Loading...",
					role: "progressbar"
				})
			})
		})
	}) : /* @__PURE__ */ (0, R.jsxs)("span", {
		className: y,
		children: [/* @__PURE__ */ (0, R.jsx)("div", {
			className: b,
			style: x,
			"data-video-body-mask-target": "",
			children: /* @__PURE__ */ (0, R.jsx)("video", {
				className: KD.video,
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
var YD = {
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
}, XD = /* @__PURE__ */ function(e) {
	return e.TEXT = "TEXT", e.NOTICE = "NOTICE", e.EMOTE = "EMOTE", e.CAPTION = "CAPTION", e;
}({}), ZD = /* @__PURE__ */ function(e) {
	return e.NONE = "NONE", e.LINK = "LINK", e;
}({});
function QD(e, t) {
	return !t || !f(e) ? e : c(e, { ref: t });
}
function $D({ vm: e, body: t, bodyRef: n, urlPreviews: r, className: i }) {
	let a = cE(), { id: s, kind: c, bodyWrapper: l = "NONE", bodyLinkHref: u, showEditedMarker: d, editedMarkerText: f, editedMarkerAriaLabel: p, editedMarkerTooltip: m, editedMarkerCaption: h, showPendingModerationMarker: g, pendingModerationText: _, emoteSenderName: v } = V(e), y = (0, L.default)(i, YD.root, {
		[YD.text]: c === "TEXT",
		[YD.notice]: c === "NOTICE",
		[YD.emote]: c === "EMOTE",
		[YD.caption]: c === "CAPTION"
	}), b = QD(t, n), x = e.onEditedMarkerClick ? (t) => {
		t.preventDefault(), t.stopPropagation(), e.onEditedMarkerClick?.(t);
	} : void 0, S = [];
	if (d) {
		let e = /* @__PURE__ */ (0, R.jsx)("button", {
			type: "button",
			className: (0, L.default)(YD.annotation, YD.editedMarker),
			onClick: x,
			"aria-label": p,
			"data-textual-body-edited-marker": "",
			children: /* @__PURE__ */ (0, R.jsx)("span", { children: f })
		});
		S.push(m ? /* @__PURE__ */ (0, R.jsx)(Oe, {
			description: m,
			caption: h,
			isTriggerInteractive: !0,
			children: e
		}, "edited-marker") : o.cloneElement(e, { key: "edited-marker" }));
	}
	if (g && S.push(/* @__PURE__ */ (0, R.jsx)("span", {
		className: YD.annotation,
		"data-textual-body-pending-moderation": "",
		children: _
	}, "pending-moderation-marker")), l === "LINK" && u && (b = /* @__PURE__ */ (0, R.jsx)("a", {
		href: u,
		className: YD.bodyLink,
		children: b
	})), S.length > 0) {
		let e = (0, L.default)(YD.annotated, { [YD.annotatedInline]: c === "EMOTE" });
		b = c === "EMOTE" ? /* @__PURE__ */ (0, R.jsxs)("span", {
			dir: "auto",
			className: e,
			"data-textual-body-annotation-wrapper": "",
			children: [b, S]
		}) : /* @__PURE__ */ (0, R.jsxs)("div", {
			dir: "auto",
			className: e,
			"data-textual-body-annotation-wrapper": "",
			children: [b, S]
		});
	}
	return c === "EMOTE" ? /* @__PURE__ */ (0, R.jsxs)("div", {
		id: s,
		className: y,
		onClick: e.onRootClick,
		dir: "auto",
		...a,
		children: [
			"*\xA0",
			/* @__PURE__ */ (0, R.jsx)("button", {
				type: "button",
				className: YD.emoteSender,
				onClick: e.onEmoteSenderClick,
				children: v
			}),
			"\xA0",
			b,
			r
		]
	}) : /* @__PURE__ */ (0, R.jsxs)("div", {
		id: s,
		className: y,
		onClick: e.onRootClick,
		...a,
		children: [b, r]
	});
}
var eO = { content: "_content_6gcu5_8" };
//#endregion
//#region src/room/timeline/event-tile/body/UnknownBodyView/UnknownBodyView.tsx
function tO({ text: e, className: t, ref: n }) {
	return /* @__PURE__ */ (0, R.jsx)("div", {
		className: (0, L.default)(eO.content, t),
		ref: n,
		children: e
	});
}
var nO = {
	content: "_content_bkfxu_10",
	source: "_source_bkfxu_24",
	toggle: "_toggle_bkfxu_34",
	expanded: "_expanded_bkfxu_68"
};
//#endregion
//#region src/room/timeline/event-tile/body/ViewSourceEventView/ViewSourceEventView.tsx
function rO({ vm: e, className: t, expandedClassName: n, ref: r }) {
	let i = cE(), { expanded: a, preview: o, source: s } = V(e), c = z().translate, l = c("devtools|toggle_event"), u = (0, L.default)(nO.content, t, { [nO.expanded]: a }, a && n);
	return /* @__PURE__ */ (0, R.jsxs)("span", {
		className: u,
		ref: r,
		...i,
		children: [a ? /* @__PURE__ */ (0, R.jsx)("pre", {
			className: nO.source,
			children: s
		}) : /* @__PURE__ */ (0, R.jsx)("code", {
			className: nO.source,
			children: o
		}), /* @__PURE__ */ (0, R.jsx)(Oe, {
			description: l,
			placement: "top",
			children: /* @__PURE__ */ (0, R.jsx)("button", {
				type: "button",
				"aria-label": l,
				className: nO.toggle,
				onClick: e.onToggle,
				children: a ? /* @__PURE__ */ (0, R.jsx)(iC, {}) : /* @__PURE__ */ (0, R.jsx)(OC, {})
			})
		})]
	});
}
var iO = {
	tileErrorView: "_tileErrorView_1nx8u_1",
	line: "_line_1nx8u_8",
	message: "_message_1nx8u_16",
	viewSourceButton: "_viewSourceButton_1nx8u_20"
};
//#endregion
//#region src/room/timeline/event-tile/EventTileView/TileErrorView/TileErrorView.tsx
function aO({ vm: e, className: t }) {
	let n = cE(), { message: r, eventType: i, bugReportCtaLabel: a, viewSourceCtaLabel: o } = V(e);
	return /* @__PURE__ */ (0, R.jsx)("li", {
		className: (0, L.default)(iO.tileErrorView, t),
		...n,
		children: /* @__PURE__ */ (0, R.jsxs)("div", {
			className: iO.line,
			role: "status",
			children: [
				/* @__PURE__ */ (0, R.jsxs)("span", {
					className: iO.message,
					children: [r, i && ` (${i})`]
				}),
				a && /* @__PURE__ */ (0, R.jsx)(k, {
					kind: "secondary",
					size: "md",
					onClick: e.onBugReportClick,
					children: a
				}),
				o && /* @__PURE__ */ (0, R.jsx)("button", {
					type: "button",
					className: iO.viewSourceButton,
					onClick: e.onViewSourceClick,
					children: o
				})
			]
		})
	});
}
var oO = {
	pill: "_pill_1i8jm_8",
	label: "_label_1i8jm_14"
};
//#endregion
//#region src/core/pill-input/Pill/Pill.tsx
function sO({ className: e, children: t, label: n, onClick: r, ...i }) {
	let a = v(), { translate: o } = z();
	return /* @__PURE__ */ (0, R.jsxs)(B, {
		display: "inline-flex",
		gap: "var(--cpd-space-1-5x)",
		align: "center",
		className: (0, L.default)(oO.pill, e),
		...i,
		children: [
			t,
			/* @__PURE__ */ (0, R.jsx)("span", {
				id: a,
				className: oO.label,
				children: n
			}),
			r && /* @__PURE__ */ (0, R.jsx)(j, {
				"aria-describedby": a,
				size: "16px",
				onClick: r,
				"aria-label": o("action|delete"),
				className: "mx_Dialog_nonDialogButton",
				children: /* @__PURE__ */ (0, R.jsx)(eC, {})
			})
		]
	});
}
//#endregion
//#region ../../node_modules/.pnpm/react-merge-refs@3.0.2_react@19.3.0/node_modules/react-merge-refs/dist/index.js
function cO(e) {
	return (t) => {
		for (let n of e) uO(n, t);
	};
}
function lO(e) {
	return (t) => {
		let n = [];
		for (let r of e) {
			let e = uO(r, t), i = typeof e == "function";
			n.push(i ? e : () => uO(r, null));
		}
		return () => {
			for (let e of n) e();
		};
	};
}
function uO(e, t) {
	if (typeof e == "function") return e(t);
	e && (e.current = t);
}
var dO = parseInt(ee.split(".")[0], 10) >= 19 ? lO : cO;
function fO(e) {
	return S(() => dO(e), e);
}
var pO = {
	pillInput: "_pillInput_1yam9_8",
	input: "_input_1yam9_16",
	largerInput: "_largerInput_1yam9_32"
};
//#endregion
//#region src/core/pill-input/PillInput/PillInput.tsx
function mO({ className: e, children: t, onRemoveChildren: n, inputProps: r, ...i }) {
	let a = w(null), o = Zy(r, ["onKeyDown", "ref"]), c = fO([a, r?.ref]), l = s.toArray(t).length > 0;
	return /* @__PURE__ */ (0, R.jsxs)(B, {
		...i,
		gap: "var(--cpd-space-1x)",
		direction: "column",
		className: (0, L.default)(pO.pillInput, e),
		onClick: (e) => {
			e.preventDefault(), e.stopPropagation(), a.current?.focus();
		},
		children: [l && /* @__PURE__ */ (0, R.jsx)(B, {
			gap: "var(--cpd-space-1x)",
			wrap: "wrap",
			align: "center",
			children: t
		}), /* @__PURE__ */ (0, R.jsx)("input", {
			ref: c,
			autoComplete: "off",
			className: (0, L.default)(pO.input, { [pO.largerInput]: l }),
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
var hO = {
	container: "_container_mcq5y_8",
	secondaryAction: "_secondaryAction_mcq5y_16",
	primaryAction: "_primaryAction_mcq5y_20",
	title: "_title_mcq5y_24",
	description: "_description_mcq5y_28"
}, gO = {
	ConnectionLost: "ConnectionLost",
	NeedsConsent: "NeedsConsent",
	ResourceLimited: "ResourceLimited",
	UnsentMessages: "UnsentMessages",
	LocalRoomFailed: "LocalRoomFailed"
};
function _O({ vm: e }) {
	let { translate: t } = z(), n = V(e), r = v(), i = h((t) => {
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
		case gO.ConnectionLost: return /* @__PURE__ */ (0, R.jsx)(wT, {
			type: "info",
			role: "status",
			"aria-labelledby": r,
			children: /* @__PURE__ */ (0, R.jsxs)("div", {
				className: hO.container,
				children: [/* @__PURE__ */ (0, R.jsx)(N, {
					className: hO.title,
					id: r,
					weight: "medium",
					children: H("tchap|server_connectivity_lost_title", void 0, { a: (e) => /* @__PURE__ */ (0, R.jsx)("a", {
						target: "_blank",
						rel: "noreferrer noopener",
						href: "https://status.tchap.numerique.gouv.fr",
						children: e
					}) })
				}), /* @__PURE__ */ (0, R.jsx)(N, {
					className: hO.description,
					children: t("room|status_bar|server_connectivity_lost_description")
				})]
			})
		});
		case gO.NeedsConsent: return /* @__PURE__ */ (0, R.jsx)(wT, {
			type: "info",
			role: "status",
			"aria-labelledby": r,
			actions: /* @__PURE__ */ (0, R.jsx)(k, {
				onClick: s,
				className: hO.primaryAction,
				kind: "primary",
				size: "md",
				as: "a",
				href: n.consentUri,
				target: "_blank",
				rel: "noreferrer noopener",
				children: t("terms|tac_button")
			}),
			children: /* @__PURE__ */ (0, R.jsx)("div", {
				className: hO.container,
				children: /* @__PURE__ */ (0, R.jsx)(N, {
					className: hO.title,
					id: r,
					weight: "medium",
					children: t("room|status_bar|requires_consent_agreement_title")
				})
			})
		});
		case gO.ResourceLimited: return /* @__PURE__ */ (0, R.jsx)(wT, {
			type: "info",
			role: "status",
			"aria-labelledby": r,
			actions: n.adminContactHref && /* @__PURE__ */ (0, R.jsx)(k, {
				kind: "secondary",
				size: "md",
				as: "a",
				href: n.adminContactHref,
				target: "_blank",
				rel: "noreferrer noopener",
				children: t("room|status_bar|contact_account_provider")
			}),
			children: /* @__PURE__ */ (0, R.jsxs)("div", {
				className: hO.container,
				children: [/* @__PURE__ */ (0, R.jsx)(N, {
					className: hO.title,
					id: r,
					weight: "medium",
					children: {
						monthly_active_user: t("room|status_bar|monthly_user_limit_reached_title"),
						hs_disabled: t("room|status_bar|homeserver_blocked_title")
					}[n.resourceLimit] || t("room|status_bar|exceeded_resource_limit_title")
				}), /* @__PURE__ */ (0, R.jsx)(N, {
					className: hO.description,
					children: t("room|status_bar|exceeded_resource_limit_description")
				})]
			})
		});
		case gO.LocalRoomFailed: return /* @__PURE__ */ (0, R.jsx)(wT, {
			role: "status",
			type: "info",
			"aria-labelledby": r,
			actions: /* @__PURE__ */ (0, R.jsx)(k, {
				size: "md",
				kind: "primary",
				className: hO.primaryAction,
				Icon: Ow,
				onClick: o,
				children: t("action|retry")
			}),
			children: /* @__PURE__ */ (0, R.jsx)(N, {
				className: hO.title,
				id: r,
				weight: "medium",
				children: t("room|status_bar|failed_to_create_room_title")
			})
		});
		case gO.UnsentMessages: return /* @__PURE__ */ (0, R.jsx)(wT, {
			role: "status",
			type: "info",
			actions: n.isResending ? /* @__PURE__ */ (0, R.jsx)(me, {}) : /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [e.onDeleteAllClick && /* @__PURE__ */ (0, R.jsx)(k, {
				size: "md",
				kind: "secondary",
				Icon: oC,
				className: hO.secondaryAction,
				onClick: i,
				children: t("room|status_bar|delete_all")
			}), e.onResendAllClick && /* @__PURE__ */ (0, R.jsx)(k, {
				size: "md",
				kind: "primary",
				Icon: Ow,
				onClick: a,
				className: hO.primaryAction,
				children: t("room|status_bar|retry_all")
			})] }),
			"aria-labelledby": r,
			children: /* @__PURE__ */ (0, R.jsxs)("div", {
				className: hO.container,
				children: [/* @__PURE__ */ (0, R.jsx)(N, {
					className: hO.title,
					id: r,
					weight: "medium",
					children: H("tchap|server_connectivity_lost_title", void 0, { a: (e) => /* @__PURE__ */ (0, R.jsx)("a", {
						target: "_blank",
						rel: "noreferrer noopener",
						href: "https://status.tchap.numerique.gouv.fr",
						children: e
					}) })
				}), /* @__PURE__ */ (0, R.jsx)(N, {
					className: hO.description,
					children: t("room|status_bar|select_messages_to_retry")
				})]
			})
		});
		default: return null;
	}
}
var vO = {
	container: "_container_19tks_8",
	header: "_header_19tks_22",
	roundedCornerContainer: "_roundedCornerContainer_19tks_30"
}, yO = ({ vm: e, RoomAvatar: t }) => {
	let n = V(e), { translate: r } = z();
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		"data-testid": "widget-pip-container",
		className: vO.container,
		onMouseDown: e.onStartMoving,
		children: [/* @__PURE__ */ (0, R.jsxs)("div", {
			className: vO.header,
			children: [
				/* @__PURE__ */ (0, R.jsx)(j, {
					size: "28px",
					"data-testid": "base-card-back-button",
					onClick: (t) => e.onBackClick(t),
					tooltip: r("action|back"),
					kind: "secondary",
					children: /* @__PURE__ */ (0, R.jsx)(JS, {})
				}),
				/* @__PURE__ */ (0, R.jsx)(t, { size: "20px" }),
				n.roomName
			]
		}), /* @__PURE__ */ (0, R.jsx)("div", {
			className: vO.roundedCornerContainer,
			children: /* @__PURE__ */ (0, R.jsx)(e.persistentAppComponent, {
				persistentWidgetId: n.widgetId,
				persistentRoomId: n.roomId
			})
		})]
	});
}, bO = ({ vm: e, overlay: t }) => {
	let { hidden: n, classNames: r, persistKey: i, zIndex: a, pointerEvents: o } = V(e);
	return n ? null : /* @__PURE__ */ (0, R.jsx)("div", {
		className: r?.root,
		children: /* @__PURE__ */ (0, R.jsx)("div", {
			className: r?.persistedWrapper,
			children: /* @__PURE__ */ (0, R.jsxs)(e.PersistedElement, {
				persistKey: i,
				zIndex: a,
				children: [/* @__PURE__ */ (0, R.jsx)("div", {
					className: r?.body,
					style: o ? { pointerEvents: o } : void 0,
					children: /* @__PURE__ */ (0, R.jsx)(e.ElementCall, {})
				}), t]
			})
		})
	});
}, xO = {
	mock: "_mock_oem66_8",
	sectionTitle: "_sectionTitle_oem66_23",
	secondary: "_secondary_oem66_27",
	error: "_error_oem66_31",
	members: "_members_oem66_35",
	buttons: "_buttons_oem66_41",
	log: "_log_oem66_45",
	config: "_config_oem66_46"
}, SO = ({ vm: e }) => {
	let { unknownRoom: t, roomId: n, intent: r, joined: i, theme: a, themeLabel: o, languageLabel: s, participants: c, audioEnabled: l, videoEnabled: u, alwaysOnScreen: d, canClose: f, supportsReactions: p, allowJoinUnmutedViaIntent: m, log: h, configJson: g, initializedWith: _ } = V(e), v = H("voip|element_call_mock|title");
	return t ? /* @__PURE__ */ (0, R.jsx)("section", {
		className: xO.mock,
		"aria-label": v,
		children: /* @__PURE__ */ (0, R.jsx)(N, {
			as: "span",
			size: "sm",
			className: xO.error,
			children: H("voip|element_call_mock|unknown_room", { roomId: n })
		})
	}) : /* @__PURE__ */ (0, R.jsxs)("section", {
		className: xO.mock,
		"data-theme": a,
		"aria-label": v,
		children: [
			/* @__PURE__ */ (0, R.jsx)(le, { children: v }),
			/* @__PURE__ */ (0, R.jsx)(N, {
				as: "span",
				size: "sm",
				className: xO.secondary,
				children: H("voip|element_call_mock|status", {
					roomId: n,
					intent: r,
					state: H(i ? "voip|element_call_mock|in_call" : "voip|element_call_mock|in_lobby"),
					theme: o,
					language: s
				})
			}),
			/* @__PURE__ */ (0, R.jsxs)("section", { children: [/* @__PURE__ */ (0, R.jsx)(ue, {
				className: xO.sectionTitle,
				children: H("voip|element_call_mock|participants")
			}), c.length === 0 ? /* @__PURE__ */ (0, R.jsx)(N, {
				as: "span",
				size: "sm",
				className: xO.secondary,
				children: H("voip|element_call_mock|no_participants")
			}) : /* @__PURE__ */ (0, R.jsx)("ul", {
				className: xO.members,
				children: c.map((e) => /* @__PURE__ */ (0, R.jsx)(N, {
					as: "li",
					children: e.label
				}, e.id))
			})] }),
			/* @__PURE__ */ (0, R.jsxs)("section", { children: [
				/* @__PURE__ */ (0, R.jsx)(ue, {
					className: xO.sectionTitle,
					children: "HostBridge"
				}),
				/* @__PURE__ */ (0, R.jsxs)(B, {
					className: xO.buttons,
					wrap: "wrap",
					gap: "var(--cpd-space-2x)",
					children: [
						/* @__PURE__ */ (0, R.jsx)(k, {
							size: "md",
							kind: "primary",
							onClick: () => void e.toggleJoined(),
							children: i ? "notifyHungUp" : "notifyJoined"
						}),
						/* @__PURE__ */ (0, R.jsxs)(k, {
							size: "md",
							kind: "secondary",
							onClick: () => void e.toggleAlwaysOnScreen(),
							children: [
								"setAlwaysOnScreen(",
								String(!d),
								")"
							]
						}),
						/* @__PURE__ */ (0, R.jsx)(k, {
							size: "md",
							kind: "secondary",
							onClick: () => void e.toggleAudio(),
							children: H(l ? "voip|element_call_mock|mute_audio" : "voip|element_call_mock|unmute_audio")
						}),
						/* @__PURE__ */ (0, R.jsx)(k, {
							size: "md",
							kind: "secondary",
							onClick: () => void e.toggleVideo(),
							children: H(u ? "voip|element_call_mock|mute_video" : "voip|element_call_mock|unmute_video")
						}),
						f && /* @__PURE__ */ (0, R.jsx)(k, {
							size: "md",
							kind: "tertiary",
							onClick: () => void e.close(),
							children: H("action|close")
						})
					]
				}),
				/* @__PURE__ */ (0, R.jsx)(N, {
					as: "span",
					size: "sm",
					className: xO.secondary,
					children: H("voip|element_call_mock|host_bridge_facts", {
						supportsReactions: String(p),
						allowJoinUnmutedViaIntent: String(m),
						close: H(f ? "action|yes" : "action|no")
					})
				}),
				/* @__PURE__ */ (0, R.jsx)("ol", {
					className: xO.log,
					"aria-label": H("voip|element_call_mock|log_label"),
					tabIndex: 0,
					children: h.map((e) => /* @__PURE__ */ (0, R.jsx)("li", { children: e.text }, e.id))
				})
			] }),
			/* @__PURE__ */ (0, R.jsxs)("section", { children: [
				/* @__PURE__ */ (0, R.jsx)(ue, {
					className: xO.sectionTitle,
					children: H("voip|element_call_mock|configuration")
				}),
				/* @__PURE__ */ (0, R.jsx)("pre", {
					className: xO.config,
					"aria-label": H("voip|element_call_mock|config_label"),
					tabIndex: 0,
					children: g
				}),
				/* @__PURE__ */ (0, R.jsx)(N, {
					as: "span",
					size: "sm",
					className: xO.secondary,
					children: H("voip|element_call_mock|initialized_with", { value: _ })
				})
			] })
		]
	});
};
//#endregion
//#region src/room/HistoryVisibilityBadge/HistoryVisibilityBadge.tsx
function CO({ historyVisibility: e }) {
	let t = {
		color: "var(--cpd-color-icon-info-primary)",
		width: "1rem",
		height: "1rem"
	};
	switch (e) {
		case "invited":
		case "joined": return /* @__PURE__ */ (0, R.jsxs)(O, {
			kind: "blue",
			children: [/* @__PURE__ */ (0, R.jsx)(eT, { ...t }), H("room|history_visibility_badge|private")]
		});
		case "shared": return /* @__PURE__ */ (0, R.jsxs)(O, {
			kind: "blue",
			children: [/* @__PURE__ */ (0, R.jsx)(IC, { ...t }), H("room|history_visibility_badge|shared")]
		});
		case "world_readable": return /* @__PURE__ */ (0, R.jsxs)(O, {
			kind: "blue",
			children: [/* @__PURE__ */ (0, R.jsx)(Kw, { ...t }), H("room|history_visibility_badge|world_readable")]
		});
		default: return null;
	}
}
var wO = {
	viewer: "_viewer_c0xbv_8",
	toolbar: "_toolbar_c0xbv_19",
	body: "_body_c0xbv_31",
	message: "_message_c0xbv_37",
	error: "_error_c0xbv_50"
};
//#endregion
//#region src/room/right-panel/DocumentViewerView/DocumentViewerView.tsx
function TO({ status: e, toolbar: t, children: n, className: r }) {
	let { translate: i } = z();
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: (0, L.default)(wO.viewer, r),
		"data-testid": "document-viewer",
		children: [t ? /* @__PURE__ */ (0, R.jsx)("div", {
			className: wO.toolbar,
			children: t
		}) : null, /* @__PURE__ */ (0, R.jsxs)("div", {
			className: wO.body,
			children: [
				n,
				e === "loading" ? /* @__PURE__ */ (0, R.jsx)("div", {
					className: wO.message,
					role: "status",
					"aria-live": "polite",
					children: i("document_viewer|loading")
				}) : null,
				e === "error" ? /* @__PURE__ */ (0, R.jsx)("div", {
					className: (0, L.default)(wO.message, wO.error),
					role: "alert",
					children: i("document_viewer|error_load")
				}) : null
			]
		})]
	});
}
var EO = {
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
function DO(e, t) {
	return new Intl.NumberFormat(t, {
		style: "percent",
		maximumFractionDigits: 0
	}).format(e / 100);
}
function OO({ status: e, currentPage: t, pageCount: n, pageInput: r, children: i, onPageInputChange: a, onPageInputFocus: o, onPageInputBlur: s, onPageInputCancel: c, onPageSubmit: l, onZoomIn: u, onZoomOut: d, zoomPercent: f, className: p }) {
	let { translate: m, language: h } = z(), g = n > 0 ? /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsx)("form", {
		onSubmit: (e) => {
			e.preventDefault(), l();
		},
		children: /* @__PURE__ */ (0, R.jsxs)("fieldset", {
			className: EO.pageForm,
			"aria-label": m("pdf_viewer|page_label", {
				page: t,
				total: n
			}),
			children: [
				/* @__PURE__ */ (0, R.jsx)("input", {
					"aria-label": m("pdf_viewer|page_number"),
					className: EO.pageInput,
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
				/* @__PURE__ */ (0, R.jsx)("span", {
					"aria-hidden": "true",
					className: EO.pageSeparator,
					children: "|"
				}),
				/* @__PURE__ */ (0, R.jsx)("span", {
					className: EO.pageTotal,
					"data-testid": "pdf-page-total",
					children: n
				})
			]
		})
	}), /* @__PURE__ */ (0, R.jsxs)("fieldset", {
		className: EO.zoomControls,
		"aria-label": m("pdf_viewer|zoom"),
		children: [
			/* @__PURE__ */ (0, R.jsx)(j, {
				size: "28px",
				"aria-label": m("pdf_viewer|zoom_out"),
				tooltip: m("pdf_viewer|zoom_out"),
				"data-testid": "pdf-zoom-out",
				onClick: d,
				children: /* @__PURE__ */ (0, R.jsx)(ow, {})
			}),
			f === void 0 ? null : /* @__PURE__ */ (0, R.jsx)("span", {
				className: EO.zoomLevel,
				"data-testid": "pdf-zoom-level",
				children: DO(f, h)
			}),
			/* @__PURE__ */ (0, R.jsx)(j, {
				size: "28px",
				"aria-label": m("pdf_viewer|zoom_in"),
				tooltip: m("pdf_viewer|zoom_in"),
				"data-testid": "pdf-zoom-in",
				onClick: u,
				children: /* @__PURE__ */ (0, R.jsx)(vw, {})
			})
		]
	})] }) : void 0;
	return /* @__PURE__ */ (0, R.jsx)(TO, {
		status: e,
		toolbar: g,
		className: p,
		children: /* @__PURE__ */ (0, R.jsx)("div", {
			className: EO.surface,
			"data-testid": "pdf-surface",
			children: i
		})
	});
}
var kO = { content: "_content_1o4pd_10" };
//#endregion
//#region src/room/right-panel/MarkdownViewerView/MarkdownViewerView.tsx
function AO({ status: e, html: t, onContentClick: n, className: r }) {
	return /* @__PURE__ */ (0, R.jsx)(TO, {
		status: e,
		className: r,
		children: e === "ready" ? /* @__PURE__ */ (0, R.jsx)("div", {
			className: kO.content,
			"data-testid": "markdown-content",
			dir: "auto",
			onClickCapture: n,
			dangerouslySetInnerHTML: { __html: t }
		}) : null
	});
}
//#endregion
//#region src/room/right-panel/WidgetContextMenuView/WidgetContextMenuView.tsx
var jO = ({ vm: e }) => {
	let { translate: t } = z(), { showStreamAudioStreamButton: n, showEditButton: r, showSnapshotButton: i, showDeleteButton: a, showRevokeButton: s, showMoveButtons: c, isMenuOpened: l, userWidget: u, trigger: d } = V(e), f;
	n && (f = /* @__PURE__ */ (0, R.jsx)(M, {
		onSelect: e.onStreamAudioClick,
		label: t("widget|context_menu|start_audio_stream")
	}));
	let p;
	r && (p = /* @__PURE__ */ (0, R.jsx)(M, {
		onSelect: e.onEditClick,
		label: t("action|edit")
	}));
	let m;
	i && (m = /* @__PURE__ */ (0, R.jsx)(M, {
		onSelect: e.onSnapshotClick,
		label: t("widget|context_menu|screenshot")
	}));
	let h;
	a && (h = /* @__PURE__ */ (0, R.jsx)(M, {
		onSelect: e.onDeleteClick,
		label: t(u ? "action|remove" : "widget|context_menu|remove")
	}));
	let g;
	s && (g = /* @__PURE__ */ (0, R.jsx)(M, {
		onSelect: e.onRevokeClick,
		label: t("widget|context_menu|revoke")
	}));
	let [_, v] = c, y;
	_ && (y = /* @__PURE__ */ (0, R.jsx)(M, {
		onSelect: () => e.onMoveButton(-1),
		label: t("widget|context_menu|move_left")
	}));
	let b;
	v && (b = /* @__PURE__ */ (0, R.jsx)(M, {
		onSelect: () => e.onMoveButton(1),
		label: t("widget|context_menu|move_right")
	}));
	let x = () => l ? /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [
		f,
		p,
		g,
		h,
		m,
		y,
		b
	] }) : null, S = o.isValidElement(d) ? d : /* @__PURE__ */ (0, R.jsx)(j, {
		size: "24px",
		"aria-label": "context menu trigger button",
		inert: !0,
		tabIndex: -1,
		children: /* @__PURE__ */ (0, R.jsx)(fw, {})
	});
	return /* @__PURE__ */ (0, R.jsx)(_e, {
		title: "Widget context menu",
		open: l,
		showTitle: !1,
		side: "right",
		align: "start",
		trigger: S,
		onOpenChange: e.onFinished,
		children: x()
	});
}, MO = { content: "_content_u6fft_8" }, NO = { timelineSeparator: "_timelineSeparator_yq5ye_8" }, PO = ({ label: e, className: t, children: n, role: r = "separator" }) => /* @__PURE__ */ (0, R.jsxs)(B, {
	className: (0, L.default)(t, NO.timelineSeparator),
	role: r,
	"aria-label": r === "separator" ? e : void 0,
	align: "center",
	children: [
		/* @__PURE__ */ (0, R.jsx)("hr", { role: "none" }),
		n,
		/* @__PURE__ */ (0, R.jsx)("hr", { role: "none" })
	]
}), FO = 15e3, IO = 75e3, LO = 45, RO = 75, zO = 23, BO = 26;
function VO(e, t) {
	let n = Date.now() - e, r = Math.abs(Math.ceil(n / 6e4)), i = Math.ceil(r / 60), a = Math.ceil(i / 24), o = t?.translate ?? H;
	return n >= 0 ? n <= FO ? o("time|few_seconds_ago") : n <= IO ? o("time|about_minute_ago") : r <= LO ? o("time|n_minutes_ago", { num: r }) : r <= RO ? o("time|about_hour_ago") : i <= zO ? o("time|n_hours_ago", { num: i }) : i <= BO ? o("time|about_day_ago") : o("time|n_days_ago", { num: a }) : (n = Math.abs(n), n <= FO ? o("time|in_few_seconds") : n <= IO ? o("time|in_about_minute") : r <= LO ? o("time|in_n_minutes", { num: r }) : r <= RO ? o("time|in_about_hour") : i <= zO ? o("time|in_n_hours", { num: i }) : i <= BO ? o("time|in_about_day") : o("time|in_n_days", { num: a }));
}
function HO(e) {
	return new Intl.RelativeTimeFormat(e?.language, {
		style: "long",
		numeric: "auto"
	});
}
var UO = {
	picker_menu_item: "_picker_menu_item_1kc2b_8",
	picker_form: "_picker_form_1kc2b_12",
	picker_input: "_picker_input_1kc2b_22",
	picker_input_date: "_picker_input_date_1kc2b_28"
}, WO = ({ vm: e, inputRef: t, onSubmitted: n, onDismissed: r }) => {
	let i = V(e), a = kf(i.jumpFromDate ? new Date(i.jumpFromDate) : /* @__PURE__ */ new Date()), { translate: o } = z(), s = v(), [c, l] = T(a), u = w(null), d = t ?? u, f = w(null), p = (e) => {
		e.key === "Tab" && (e.shiftKey ? r?.() : (e.preventDefault(), f.current?.focus()));
	}, m = (e) => {
		l(e.currentTarget.value);
	}, h = () => {
		e.onDatePicked?.(c), n?.();
	};
	return /* @__PURE__ */ (0, R.jsx)(M, {
		as: "div",
		"data-testid": "jump-to-date-picker",
		label: o("room|jump_to_date"),
		onSelect: (e) => {
			e.preventDefault();
		},
		hideChevron: !0,
		className: UO.picker_menu_item,
		children: /* @__PURE__ */ (0, R.jsxs)(xe, {
			className: UO.picker_form,
			onSubmit: (e) => {
				e.preventDefault(), h();
			},
			children: [/* @__PURE__ */ (0, R.jsx)(oe, {
				name: "jump-to-date-field",
				className: UO.picker_input,
				children: /* @__PURE__ */ (0, R.jsx)(Te, {
					ref: d,
					id: s,
					type: "date",
					"aria-label": o("room|jump_to_date_prompt"),
					onInput: m,
					onKeyDown: p,
					value: c,
					max: kf(/* @__PURE__ */ new Date()),
					className: UO.picker_input_date
				})
			}), /* @__PURE__ */ (0, R.jsx)(we, {
				ref: f,
				className: UO.picker_button,
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
}, GO = {
	picker_menu: "_picker_menu_14xuw_8",
	picker_menu_item: "_picker_menu_item_14xuw_14",
	picker_separator: "_picker_separator_14xuw_18"
}, KO = ({ vm: e, open: t, trigger: n, onOpenChange: r }) => {
	let i = z(), { translate: a } = z(), o = w(null);
	return /* @__PURE__ */ (0, R.jsxs)(_e, {
		open: t,
		onOpenChange: (e) => {
			r?.(e);
		},
		title: a("room|jump_to_date"),
		showTitle: !1,
		trigger: n,
		align: "start",
		className: GO.picker_menu,
		children: [
			/* @__PURE__ */ (0, R.jsx)(M, {
				label: Yg(HO(i).format(-1, "week")),
				onSelect: () => e.onLastWeekPicked?.(),
				"data-testid": "jump-to-date-last-week",
				hideChevron: !0,
				className: GO.picker_menu_item
			}),
			/* @__PURE__ */ (0, R.jsx)(M, {
				label: Yg(HO(i).format(-1, "month")),
				onSelect: () => e.onLastMonthPicked?.(),
				"data-testid": "jump-to-date-last-month",
				hideChevron: !0,
				className: GO.picker_menu_item
			}),
			/* @__PURE__ */ (0, R.jsx)(M, {
				label: a("room|jump_to_date_beginning"),
				onSelect: () => e.onBeginningPicked?.(),
				"data-testid": "jump-to-date-beginning",
				hideChevron: !0,
				className: GO.picker_menu_item,
				onKeyDown: (e) => {
					e.key === "ArrowDown" && (e.preventDefault(), o.current?.focus());
				}
			}),
			/* @__PURE__ */ (0, R.jsx)(Se, {
				decorative: !0,
				className: GO.picker_separator
			}),
			/* @__PURE__ */ (0, R.jsx)(WO, {
				vm: e,
				inputRef: o,
				onSubmitted: () => r?.(!1),
				onDismissed: () => r?.(!1)
			})
		]
	});
}, qO = d(function({ label: e, tooltipOpen: t, className: n, ...r }, i) {
	let { translate: a } = z();
	return /* @__PURE__ */ (0, R.jsx)(Oe, {
		description: a("room|jump_to_date"),
		placement: "right",
		open: t,
		children: /* @__PURE__ */ (0, R.jsxs)(B, {
			ref: i,
			"data-testid": "jump-to-date-separator-button",
			className: n,
			"aria-live": "off",
			"aria-label": a("room|jump_to_date"),
			role: "button",
			tabIndex: 0,
			...r,
			children: [/* @__PURE__ */ (0, R.jsx)(de, {
				as: "h2",
				size: "lg",
				"aria-hidden": "true",
				children: e
			}), /* @__PURE__ */ (0, R.jsx)(KS, {})]
		})
	});
});
//#endregion
//#region src/room/timeline/DateSeparatorView/DateSeparatorView.tsx
function JO({ vm: e, className: t }) {
	let { label: n, jumpToEnabled: r } = V(e), [i, a] = T(!1), [o, s] = T(!1), [c, l] = T(!1);
	return r ? /* @__PURE__ */ (0, R.jsx)(PO, {
		label: n,
		className: (0, L.default)(t),
		role: "none",
		children: /* @__PURE__ */ (0, R.jsx)(KO, {
			vm: e,
			open: i,
			onOpenChange: (e) => {
				a(e), e && (s(!1), l(!1));
			},
			trigger: /* @__PURE__ */ (0, R.jsx)(qO, {
				label: n,
				tooltipOpen: !i && (o || c),
				className: MO.content,
				onMouseEnter: () => s(!0),
				onMouseLeave: () => s(!1),
				onFocus: (e) => l(e.currentTarget.matches(":focus-visible")),
				onBlur: () => l(!1)
			})
		})
	}) : /* @__PURE__ */ (0, R.jsx)(PO, {
		label: n,
		className: (0, L.default)(t),
		children: /* @__PURE__ */ (0, R.jsx)(B, {
			className: MO.content,
			children: /* @__PURE__ */ (0, R.jsx)(de, {
				as: "h2",
				size: "lg",
				"aria-hidden": "true",
				children: n
			})
		})
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+virtual-core@3.17.11_patch_hash=71da5da1ddec893afd6cfd513e81996f92820a7a2aa1004d2e19dfc1c984d7d7/node_modules/@tanstack/virtual-core/dist/esm/lazy-measurements.js
function YO(e) {
	return typeof e == "object" ? e.key : e;
}
function XO(e, t) {
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
//#region ../../node_modules/.pnpm/@tanstack+virtual-core@3.17.11_patch_hash=71da5da1ddec893afd6cfd513e81996f92820a7a2aa1004d2e19dfc1c984d7d7/node_modules/@tanstack/virtual-core/dist/esm/utils.js
function ZO(e, t, n) {
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
function QO(e, t) {
	if (e === void 0) throw Error(`Unexpected undefined${t ? `: ${t}` : ""}`);
	return e;
}
var $O = (e, t) => Math.abs(e - t) < 1.01, ek = (e, t, n) => {
	let r;
	return Object.assign(function(...i) {
		e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, i), n);
	}, { cancel: () => {
		e.clearTimeout(r);
	} });
}, tk, nk = () => {
	if (tk !== void 0) return tk;
	if (typeof navigator > "u") return tk = !1;
	if (/iP(hone|od|ad)/.test(navigator.userAgent)) return tk = !0;
	let e = navigator.maxTouchPoints;
	return tk = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, rk = (e) => {
	let { offsetWidth: t, offsetHeight: n } = e;
	return {
		width: t,
		height: n
	};
}, ik = (e) => e, ak = (e) => {
	let t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1) - t + 1, r = Array(n);
	for (let e = 0; e < n; e++) r[e] = t + e;
	return r;
}, ok = (e, t) => {
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
	if (i(rk(n)), !r.ResizeObserver) return () => {};
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
			i(rk(n));
		};
		e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(r) : r();
	});
	return a.observe(n, { box: "border-box" }), () => {
		a.unobserve(n);
	};
}, sk = { passive: !0 }, ck = typeof window > "u" || "onscrollend" in window, lk = (e, t, n) => {
	let r = e.scrollElement;
	if (!r) return;
	let i = e.targetWindow;
	if (!i) return;
	let a = e.options.useScrollendEvent && ck, o = 0, s = a ? null : ek(i, () => t(n(r), !1), e.options.isScrollingResetDelay), c = (e) => () => {
		o = n(r), s?.(), t(o, e);
	}, l = c(!0), u = c(!1);
	return r.addEventListener("scroll", l, sk), a && r.addEventListener("scrollend", u, sk), () => {
		r.removeEventListener("scroll", l), a && r.removeEventListener("scrollend", u), s?.cancel();
	};
}, uk = (e, t) => lk(e, t, (t) => {
	let { horizontal: n, isRtl: r } = e.options;
	return n ? t.scrollLeft * (r && -1 || 1) : t.scrollTop;
}), dk = (e, t, n) => {
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
}, fk = (e, { adjustments: t = 0, behavior: n }, r) => {
	var i, a;
	(a = (i = r.scrollElement)?.scrollTo) == null || a.call(i, {
		[r.options.horizontal ? "left" : "top"]: e + t,
		behavior: n
	});
};
function pk(e, t, n, r) {
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
var mk = class {
	constructor(e) {
		this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this._singleLaneMeasurements = null, this.itemSizeCache = /* @__PURE__ */ new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this._clampedAdjustment = null, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
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
						this.isIndexInRange(n) && this.shouldMeasureDuringScroll(n) && this.resizeItem(n, this.options.measureElement(t, e, this));
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
				getItemKey: ik,
				rangeExtractor: ak,
				onChange: () => {},
				measureElement: dk,
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
				let e = n.count, o = t.count, s = this.getMeasurements(), c = this._singleLaneMeasurements?.items ?? s, l = (e) => YO(c[e]), u = e > 0 ? l(0) : null, d = e > 0 ? l(e - 1) : null;
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
					f && o > 0 && this.isAtEnd(n.scrollEndThreshold) && (e === 0 || t.getItemKey(o - 1) !== d) && (o > e || pk(e, o, l, t.getItemKey)) && (i = f);
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
		}, this.maybeNotify = ZO(() => (this.calculateRange(), [
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
					this.scrollRect = e, this.maybeNotify();
				})), this.unsubs.push(this.options.observeElementOffset(this, (e, t) => {
					if (t && this._intendedScrollOffset === null && e === this.scrollOffset) return;
					this._intendedScrollOffset !== null && Math.abs(e - this._intendedScrollOffset) < 1.5 && (e = this._intendedScrollOffset), this._intendedScrollOffset = null, this._clampedAdjustment !== null && Math.abs(e - this._clampedAdjustment.maxAtWrite) >= 1.5 && (this._clampedAdjustment = null), this.scrollAdjustments = 0;
					let n = this.getScrollOffset();
					this.scrollDirection = t ? n === e ? this.scrollDirection : n < e ? "forward" : "backward" : null, this.scrollOffset = e, this.isScrolling = t, this._flushIosDeferredIfReady(), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
				})), "addEventListener" in this.scrollElement) {
					let e = this.scrollElement, t = () => {
						this._iosTouching = !0, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
					}, n = () => {
						this._iosTouching = !1, nk() && this.targetWindow != null && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
							this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
						}, 150));
					};
					e.addEventListener("touchstart", t, sk), e.addEventListener("touchend", n, sk), this.unsubs.push(() => {
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
				e !== null && !r && (nk() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? i !== 0 && (this._iosDeferredAdjustment += i) : this.scrollState?.behavior === "smooth" && !$O(this.getScrollOffset() - i, this.scrollState.lastTargetOffset) || this._scrollToOffset(this.getScrollOffset(), {
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
		}, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getMeasurementOptions = ZO(() => [
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
		}), { key: !1 }), this.isIndexInRange = (e) => e >= 0 && e < this.options.count, this.getMeasurements = ZO(() => [this.getMeasurementOptions(), this.itemSizeCacheVersion], ({ count: e, paddingStart: t, scrollMargin: n, getItemKey: r, enabled: i, lanes: a, laneAssignmentMode: o, gap: s }, c) => {
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
				let d = XO(o, a);
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
		}), this.calculateRange = ZO(() => [
			this.getMeasurements(),
			this.getSize(),
			this.getScrollOffset(),
			this.options.lanes
		], (e, t, n, r) => e.length === 0 || t === 0 ? (this.range = null, null) : (this.range = _k(e, t, n, r, r === 1 && this._singleLaneMeasurements !== null ? this._singleLaneMeasurements.flat : null), this.range), {
			key: process.env.NODE_ENV !== "production" && "calculateRange",
			debug: () => this.options.debug
		}), this.getVirtualIndexes = ZO(() => {
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
			let t = this.indexFromElement(e);
			if (!this.isIndexInRange(t)) return;
			let n = this.options.getItemKey(t), r = this.elementsCache.get(n);
			r !== e && (r && this.observer.unobserve(r), this.observer.observe(e), this.elementsCache.set(n, e)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(t) && this.resizeItem(t, this.options.measureElement(e, void 0, this));
		}, this.resizeItem = (e, t) => {
			if (!this.isIndexInRange(e)) return;
			let n, r, i, a = this._singleLaneMeasurements?.flat;
			if (this.options.lanes === 1 && a != null) i = this.options.getItemKey(e), r = a[e * 2], n = a[e * 2 + 1];
			else {
				let t = this.measurementsCache[e];
				if (!t) return;
				i = t.key, r = t.start, n = t.size;
			}
			let o = this.itemSizeCache.get(i) ?? n, s = t - o;
			if (s !== 0) {
				let a = this._intendedScrollOffset ?? this.getScrollOffset() + this.scrollAdjustments, c = this.options.anchorTo === "end" && this.scrollState?.behavior !== "smooth" && this.getTotalSize() - this.getSize() - a <= this.options.scrollEndThreshold, l = c ? this.getTotalSize() : 0, u = a, d = this.itemSizeCache.has(i) ? r + o <= u : r < u, f = this.scrollState?.behavior !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange === void 0 ? d : this.shouldAdjustScrollPositionOnItemSizeChange(this.measurementsCache[e] ?? {
					index: e,
					key: i,
					start: r,
					size: n,
					end: r + n,
					lane: 0
				}, s, this));
				(this.pendingMin === null || e < this.pendingMin) && (this.pendingMin = e), this.itemSizeCache.set(i, t), this.itemSizeCacheVersion++;
				let p = !1;
				c ? p = this.applyScrollAdjustment(this.getTotalSize() - l) : f && (p = this.applyScrollAdjustment(s)), this.notify(p), this._retryClampedAdjustment();
			}
		}, this.getVirtualItems = ZO(() => [this.getVirtualIndexes(), this.getMeasurements()], (e, t) => {
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
			return QO(t[hk(0, t.length - 1, r ? (e) => n[e * 2] : (e) => QO(t[e]).start, e)]);
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
			this._intendedScrollOffset = e + (t ?? 0), this.options.scrollToFn(e, {
				behavior: n,
				adjustments: t
			}, this);
		}, this.measure = () => {
			this.pendingMin = null, this.itemSizeCache.clear(), this.laneAssignments.clear(), this.itemSizeCacheVersion++, this.notify(!1);
		}, this.setOptions(e);
	}
	applyScrollAdjustment(e, t) {
		if (e === 0) return !1;
		if (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", e), nk() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded)) return this._iosDeferredAdjustment += e, !1;
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
		if (!n && $O(t, this.getScrollOffset())) {
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
}, hk = (e, t, n, r) => {
	for (; e <= t;) {
		let i = (e + t) / 2 | 0, a = n(i);
		if (a < r) e = i + 1;
		else if (a > r) t = i - 1;
		else return i;
	}
	return e > 0 ? e - 1 : 0;
};
function gk(e, t, n) {
	let r = 0;
	for (; r <= t;) {
		let i = (r + t) / 2 | 0, a = e[i * 2];
		if (a < n) r = i + 1;
		else if (a > n) t = i - 1;
		else return i;
	}
	return r > 0 ? r - 1 : 0;
}
function _k(e, t, n, r, i) {
	let a = e.length - 1;
	if (e.length <= r) return {
		startIndex: 0,
		endIndex: a
	};
	if (r === 1 && i !== null) {
		let e = gk(i, a, n), r = e, o = n + t;
		for (; r < a && i[r * 2] + i[r * 2 + 1] < o;) r++;
		return {
			startIndex: e,
			endIndex: r
		};
	}
	let o = hk(0, a, (t) => e[t].start, n), s = o;
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
//#region ../../node_modules/.pnpm/@tanstack+react-virtual@3.14.13_react-dom@19.3.0_react@19.3.0/node_modules/@tanstack/react-virtual/dist/esm/index.js
var vk = typeof document < "u" ? a.useLayoutEffect : a.useEffect;
function yk({ useFlushSync: e = !0, directDomUpdates: t = !1, directDomUpdatesMode: n = "transform", ...r }) {
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
	}, l = (e) => {
		let t = o.current;
		if (!t.enabled || !t.container) return;
		c(e);
		let n = !!e.options.horizontal, r = t.mode === "transform", i = n ? "left" : "top", a = e.options.scrollMargin, s = e.getVirtualItems();
		for (let o of s) {
			let s = o.start - a, c = e.elementsCache.get(o.key);
			c && t.lastPositions.get(c) !== s && (t.lastPositions.set(c, s), r ? c.style.transform = n ? `translate3d(${s}px, 0, 0)` : `translate3d(0, ${s}px, 0)` : c.style[i] = `${s}px`);
		}
	}, u = {
		...r,
		onChange: (t, n) => {
			var a;
			let c = o.current, u = !0;
			if (c.enabled) {
				l(t);
				let e = t.range, n = c.prevRange;
				u = !n || n.isScrolling !== t.isScrolling || n.startIndex !== e?.startIndex || n.endIndex !== e?.endIndex, u && (c.prevRange = e ? {
					startIndex: e.startIndex,
					endIndex: e.endIndex,
					isScrolling: t.isScrolling
				} : null);
			}
			u && (e && n && !s.current ? Ie(i) : i()), (a = r.onChange) == null || a.call(r, t, n);
		}
	}, [d] = a.useState(() => {
		let e = new mk(u), t = e.measureElement;
		return e.measureElement = (e) => {
			s.current = !0;
			try {
				t(e);
			} finally {
				s.current = !1;
			}
		}, Object.assign(e, { containerRef: (t) => {
			let n = o.current;
			if (n.container = t, n.lastSize = null, t && n.enabled) {
				let r = e.getTotalSize();
				n.lastSize = r;
				let i = e.options.horizontal ? "width" : "height";
				t.style[i] = `${r}px`;
			}
		} });
	});
	return d.setOptions(u), vk(() => d._didMount(), []), vk(() => (c(d), d._willUpdate())), vk(() => {
		l(d);
	}), d;
}
function bk(e) {
	return yk({
		observeElementRect: ok,
		observeElementOffset: uk,
		scrollToFn: fk,
		...e
	});
}
//#endregion
//#region src/room/timeline/TimelineView/types.ts
var xk = "backward-loading", Sk = "forward-loading", Ck = {
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
function wk({ snapshot: e, vm: t, scrollNow: n }) {
	let { translate: r } = z(), i = e.canJumpToReadMarker, a = !e.atLiveEnd || !e.isAtBottom, o = h(() => t.onJumpToReadMarker(n), [t, n]), s = h(() => t.onJumpToLive(n), [t, n]);
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: Ck.overlay,
		children: [
			i === "above" && /* @__PURE__ */ (0, R.jsxs)("div", {
				className: Ck.topUnreadBar,
				children: [/* @__PURE__ */ (0, R.jsx)(Oe, {
					description: r("room|jump_read_marker"),
					placement: "left",
					children: /* @__PURE__ */ (0, R.jsx)("button", {
						className: Ck.topUnreadBarScrollUp,
						"aria-label": r("room|jump_read_marker"),
						onClick: o,
						type: "button",
						children: /* @__PURE__ */ (0, R.jsx)(QS, {})
					})
				}), /* @__PURE__ */ (0, R.jsx)(Oe, {
					description: r("notifications|mark_all_read"),
					placement: "left",
					children: /* @__PURE__ */ (0, R.jsx)("button", {
						className: Ck.topUnreadBarMarkAsRead,
						"aria-label": r("notifications|mark_all_read"),
						onClick: () => t.onMarkAllAsRead(),
						type: "button",
						children: /* @__PURE__ */ (0, R.jsx)(eC, {})
					})
				})]
			}),
			i === "below" && /* @__PURE__ */ (0, R.jsxs)("div", {
				className: Ck.belowUnreadBar,
				children: [/* @__PURE__ */ (0, R.jsx)(Oe, {
					description: r("room|jump_read_marker"),
					placement: "left",
					children: /* @__PURE__ */ (0, R.jsx)("button", {
						className: Ck.belowUnreadBarScrollDown,
						"aria-label": r("room|jump_read_marker"),
						onClick: o,
						type: "button",
						children: /* @__PURE__ */ (0, R.jsx)(KS, {})
					})
				}), /* @__PURE__ */ (0, R.jsx)(Oe, {
					description: r("notifications|mark_all_read"),
					placement: "left",
					children: /* @__PURE__ */ (0, R.jsx)("button", {
						className: Ck.belowUnreadBarMarkAsRead,
						"aria-label": r("notifications|mark_all_read"),
						onClick: () => t.onMarkAllAsRead(),
						type: "button",
						children: /* @__PURE__ */ (0, R.jsx)(eC, {})
					})
				})]
			}),
			a && /* @__PURE__ */ (0, R.jsxs)("div", {
				className: (0, L.default)(Ck.jumpToBottom, { [Ck.highlight]: e.hasHighlights }),
				children: [/* @__PURE__ */ (0, R.jsx)(Oe, {
					description: r("room|jump_to_bottom_button"),
					placement: "left",
					children: /* @__PURE__ */ (0, R.jsx)("button", {
						className: Ck.jumpToBottomScrollDown,
						"aria-label": r("room|jump_to_bottom_button"),
						onClick: s,
						type: "button",
						children: /* @__PURE__ */ (0, R.jsx)(KS, {})
					})
				}), e.numUnreadMessages > 0 && /* @__PURE__ */ (0, R.jsx)("div", {
					className: Ck.jumpToBottomBadge,
					children: e.numUnreadMessages
				})]
			})
		]
	});
}
var Tk = {
	root: "_root_1wp73_8",
	scroller: "_scroller_1wp73_14",
	hidden: "_hidden_1wp73_26",
	list: "_list_1wp73_30",
	tile: "_tile_1wp73_42",
	cover: "_cover_1wp73_52"
}, Ek = 48, Dk = 16, Ok = 4, kk = 1e3;
function Ak({ vm: e, renderItem: t }) {
	let n = V(e), r = w(n);
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
		let o = t.scrollOffset ?? 0, s = t.scrollRect?.height ?? 0, c = t.getTotalSize(), l = s > 0 && o + s >= c - Ok;
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
	}, [e]), b = bk({
		count: i.length,
		getScrollElement: () => o.current,
		estimateSize: () => Ek,
		getItemKey: u,
		overscan: Dk,
		anchorTo: "end",
		isValidAnchorItem: d,
		scrollEndThreshold: Ok,
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
			if (n !== void 0 && Math.abs(n[0] - r) <= 1.5 || t - u >= kk) {
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
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: Tk.root,
		children: [
			/* @__PURE__ */ (0, R.jsx)("div", {
				ref: o,
				"data-testid": "timeline-scroller",
				tabIndex: 0,
				className: (0, L.default)(Tk.scroller, { [Tk.hidden]: !s }),
				children: /* @__PURE__ */ (0, R.jsx)("ol", {
					ref: b.containerRef,
					className: (0, L.default)("mx_TimelineView_list", Tk.list),
					role: "list",
					children: D.map((e) => {
						let n = i[e.index];
						return n ? /* @__PURE__ */ (0, R.jsx)("li", {
							className: (0, L.default)("mx_TimelineView_tile", Tk.tile),
							"data-index": e.index,
							"data-key": n.key,
							ref: b.measureElement,
							children: t(n)
						}, e.key) : null;
					})
				})
			}),
			!s && /* @__PURE__ */ (0, R.jsx)("div", {
				className: Tk.cover,
				children: /* @__PURE__ */ (0, R.jsx)(me, { size: 32 })
			}),
			s && /* @__PURE__ */ (0, R.jsx)(wk, {
				snapshot: n,
				vm: e,
				scrollNow: ee
			})
		]
	});
}
var jk = {
	toolbar: "_toolbar_1ksun_8",
	toolbar_item: "_toolbar_item_1ksun_14"
};
//#endregion
//#region src/room/timeline/event-tile/actions/ActionBarView/ActionBarButton.tsx
function Mk({ presentation: e, buttonRef: t, label: n, onActivate: r, icon: i, disabled: a, ariaPressed: o, ariaExpanded: s, tooltipDescription: c, tooltipCaption: l }) {
	let u = e === "icon", [d, f, p] = pS(), m = w(null), h = fO([
		t,
		m,
		a ? null : p
	]), g = a || !f ? -1 : 0;
	return x(() => {
		m.current && (m.current.tabIndex = g);
	}, [g]), /* @__PURE__ */ (0, R.jsx)(Oe, {
		description: c ?? n,
		caption: l,
		placement: "top",
		children: /* @__PURE__ */ (0, R.jsx)(k, {
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
			className: jk.toolbar_item,
			Icon: u ? i : void 0,
			children: u ? void 0 : n
		})
	});
}
//#endregion
//#region src/room/timeline/event-tile/actions/ActionBarView/ActionBarView.tsx
var Nk = /* @__PURE__ */ function(e) {
	return e.Cancel = "cancel", e.CopyLink = "copyLink", e.Download = "download", e.Edit = "edit", e.Expand = "expand", e.Hide = "hide", e.Options = "options", e.Pin = "pin", e.React = "react", e.Remove = "remove", e.Reply = "reply", e.ReplyInThread = "replyInThread", e.Resend = "resend", e.ViewInRoom = "viewInRoom", e.ViewSource = "viewSource", e;
}({});
function Pk({ vm: e, className: t }) {
	let { translate: n } = z(), { actions: r, presentation: i = "icon", isThreadReplyAllowed: a, isDownloadEncrypted: o, isDownloadLoading: s, isPinned: c, isQuoteExpanded: l, downloadScanState: u } = V(e), d = w({}), f = S(() => Object.fromEntries(Object.values(Nk).map((e) => [e, (t) => {
		d.current[e] = t;
	}])), []), p = {};
	p.edit = /* @__PURE__ */ (0, R.jsx)(Mk, {
		presentation: i,
		buttonRef: f.edit,
		label: n("action|edit"),
		onActivate: e.onEditClick,
		icon: vC
	}, "edit");
	let m = n(c ? "action|unpin" : "action|pin");
	p.pin = /* @__PURE__ */ (0, R.jsx)(Mk, {
		presentation: i,
		buttonRef: f.pin,
		label: m,
		onActivate: e.onPinClick,
		icon: c ? Hw : gw,
		ariaPressed: c
	}, "pin"), p.cancel = /* @__PURE__ */ (0, R.jsx)(Mk, {
		presentation: i,
		buttonRef: f.cancel,
		label: n("action|delete"),
		onActivate: e.onCancelClick,
		icon: oC
	}, "cancel"), p.copyLink = /* @__PURE__ */ (0, R.jsx)(Mk, {
		presentation: i,
		buttonRef: f.copyLink,
		label: n("timeline|mab|copy_link_thread"),
		onActivate: e.onCopyLinkClick,
		icon: JC
	}, "copyLink"), p.reply = /* @__PURE__ */ (0, R.jsx)(Mk, {
		presentation: i,
		buttonRef: f.reply,
		label: n("action|reply"),
		onActivate: e.onReplyClick,
		icon: Ew
	}, "reply"), p.react = /* @__PURE__ */ (0, R.jsx)(Mk, {
		presentation: i,
		buttonRef: f.react,
		label: n("action|react"),
		onActivate: e.onReactionsClick,
		icon: Sw
	}, "react");
	let g = n("action|download");
	s && (g = n(o ? "timeline|download_action_decrypting" : "timeline|download_action_downloading")), p.download = /* @__PURE__ */ (0, R.jsx)(Mk, {
		presentation: i,
		buttonRef: f.download,
		label: g,
		onActivate: e.onDownloadClick,
		icon: s || u === "scanning" ? me : u === "unsafe" ? IS : mC,
		disabled: s || u === "unsafe"
	}, "download"), p.hide = /* @__PURE__ */ (0, R.jsx)(Mk, {
		presentation: i,
		buttonRef: f.hide,
		label: n("action|hide"),
		onActivate: e.onHideClick,
		icon: eT
	}, "hide");
	let _ = n(a ? "action|reply_in_thread" : "threads|error_start_thread_existing_relation");
	p.replyInThread = /* @__PURE__ */ (0, R.jsx)(Mk, {
		presentation: i,
		buttonRef: f.replyInThread,
		label: n("action|reply_in_thread"),
		tooltipDescription: _,
		onActivate: e.onReplyInThreadClick,
		icon: Bw,
		disabled: !a
	}, "replyInThread"), p.resend = /* @__PURE__ */ (0, R.jsx)(Mk, {
		presentation: i,
		buttonRef: f.resend,
		label: n("action|retry"),
		onActivate: e.onResendClick,
		icon: Ow
	}, "resend");
	let v = n(l ? "timeline|mab|collapse_reply_chain" : "timeline|mab|expand_reply_chain");
	p.expand = /* @__PURE__ */ (0, R.jsx)(Mk, {
		presentation: i,
		buttonRef: f.expand,
		label: v,
		tooltipCaption: `${n("keyboard|shift")} + ${n("action|click")}`,
		onActivate: e.onToggleThreadExpanded,
		icon: l ? iC : OC,
		ariaExpanded: l
	}, "expand"), p.options = /* @__PURE__ */ (0, R.jsx)(Mk, {
		presentation: i,
		buttonRef: f.options,
		label: n("common|options"),
		onActivate: e.onOptionsClick,
		icon: fw
	}, "options"), p.remove = /* @__PURE__ */ (0, R.jsx)(Mk, {
		presentation: i,
		buttonRef: f.remove,
		label: n("action|remove"),
		onActivate: e.onRemoveClick,
		icon: oC
	}, "remove"), p.viewInRoom = /* @__PURE__ */ (0, R.jsx)(Mk, {
		presentation: i,
		buttonRef: f.viewInRoom,
		label: n("timeline|mab|view_in_room"),
		onActivate: e.onViewInRoomClick,
		icon: nT
	}, "viewInRoom"), p.viewSource = /* @__PURE__ */ (0, R.jsx)(Mk, {
		presentation: i,
		buttonRef: f.viewSource,
		label: n("action|view_source"),
		onActivate: e.onViewSourceClick,
		icon: WC
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
	return b.length === 0 ? null : /* @__PURE__ */ (0, R.jsx)(fS, {
		handleLeftRight: !0,
		handleHomeEnd: !0,
		handleLoop: !0,
		children: ({ onKeyDownHandler: e }) => /* @__PURE__ */ (0, R.jsx)(B, {
			display: "inline-flex",
			direction: "row",
			role: "toolbar",
			"aria-label": n("timeline|mab|label"),
			"aria-live": "off",
			onKeyDown: e,
			className: (0, L.default)(t, jk.toolbar),
			children: b.map((e) => p[e.action])
		})
	}, x);
}
var Fk = {
	disambiguatedProfile: "_disambiguatedProfile_1q5ax_8",
	disambiguatedProfile_displayName: "_disambiguatedProfile_displayName_1q5ax_18",
	disambiguatedProfile_mxid: "_disambiguatedProfile_mxid_1q5ax_26",
	userStatus: "_userStatus_1q5ax_32"
};
//#endregion
//#region src/room/timeline/event-tile/EventTileView/DisambiguatedProfile/DisambiguatedProfileView.tsx
function Ik({ vm: e, className: t }) {
	let n = cE(), { displayName: r, colorClass: i, displayIdentifier: a, title: o, emphasizeDisplayName: s, userStatus: c } = V(e), l = c && c.emoji, u = (0, L.default)(i, {
		[Fk.disambiguatedProfile_displayName]: s,
		mx_DisambiguatedProfile_displayName: s
	}), d = e.onClick ? (t) => {
		(t.key === "Enter" || t.key === " ") && (t.preventDefault(), e.onClick?.(t));
	} : void 0;
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: (0, L.default)(t, Fk.disambiguatedProfile),
		title: o,
		onClick: e.onClick,
		onKeyDown: d,
		role: e.onClick ? "button" : void 0,
		tabIndex: e.onClick ? 0 : void 0,
		...n,
		children: [
			/* @__PURE__ */ (0, R.jsx)("span", {
				className: u,
				dir: "auto",
				children: r
			}),
			c && /* @__PURE__ */ (0, R.jsx)(Oe, {
				description: c.text,
				maxWidth: "30ch",
				maxLines: 1,
				children: /* @__PURE__ */ (0, R.jsx)(N, {
					as: "span",
					size: "md",
					className: (0, L.default)("mx_DisambiguatedProfile_userStatus", Fk.userStatus),
					children: l
				})
			}),
			a && /* @__PURE__ */ (0, R.jsx)("span", {
				className: (0, L.default)("mx_DisambiguatedProfile_mxid", Fk.disambiguatedProfile_mxid),
				children: a
			})
		]
	});
}
var Lk = {
	e2ePadlock: "_e2ePadlock_1hynz_8",
	normal: "_normal_1hynz_21",
	decryptionFailure: "_decryptionFailure_1hynz_22",
	warning: "_warning_1hynz_26"
}, Rk = /* @__PURE__ */ function(e) {
	return e.Normal = "normal", e.Warning = "warning", e.DecryptionFailure = "decryption_failure", e;
}({}), zk = {
	normal: /* @__PURE__ */ (0, R.jsx)(HC, {}),
	warning: /* @__PURE__ */ (0, R.jsx)(SC, {}),
	decryption_failure: /* @__PURE__ */ (0, R.jsx)(SC, {})
}, Bk = {
	normal: Lk.normal,
	warning: Lk.warning,
	decryption_failure: Lk.decryptionFailure
};
function Vk({ icon: e, title: t, className: n }) {
	return /* @__PURE__ */ (0, R.jsx)(Oe, {
		label: t,
		isTriggerInteractive: !0,
		children: /* @__PURE__ */ (0, R.jsx)("div", {
			"data-testid": "e2e-padlock",
			className: (0, L.default)(Lk.e2ePadlock, Bk[e], n),
			role: "img",
			tabIndex: 0,
			"aria-label": H("timeline|e2e_state"),
			children: zk[e]
		})
	});
}
//#endregion
//#region src/room/timeline/event-tile/EventTileView/E2eMessageSharedIcon/E2eMessageSharedIconView.tsx
function Hk({ vm: e, className: t }) {
	let { displayName: n, userId: r } = V(e), i = H("timeline|message_shared_by", {
		displayName: n,
		userId: r
	});
	return /* @__PURE__ */ (0, R.jsx)(Vk, {
		className: t,
		icon: Rk.Normal,
		title: i
	});
}
var Uk = { content: "_content_ufv8a_8" }, Wk = {
	container: "_container_1mzk4_8",
	title: "_title_1mzk4_34",
	subtitle: "_subtitle_1mzk4_35"
};
//#endregion
//#region src/room/timeline/event-tile/EventTileView/EventTileBubble/EventTileBubble.tsx
function Gk({ icon: e, title: t, subtitle: n, className: r, children: i, ref: a }) {
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: (0, L.default)(Wk.container, r),
		ref: a,
		children: [
			e,
			/* @__PURE__ */ (0, R.jsx)("div", {
				className: Wk.title,
				children: t
			}),
			n && /* @__PURE__ */ (0, R.jsx)("div", {
				className: Wk.subtitle,
				children: n
			}),
			i
		]
	});
}
//#endregion
//#region src/room/timeline/event-tile/EventTileView/EncryptionEventView/EncryptionEventView.tsx
var Kk = /* @__PURE__ */ function(e) {
	return e.CHANGED = "CHANGED", e.DISABLE_ATTEMPT = "DISABLE_ATTEMPT", e.ENABLED = "ENABLED", e.ENABLED_DM = "ENABLED_DM", e.ENABLED_LOCAL = "ENABLED_LOCAL", e.UNSUPPORTED = "UNSUPPORTED", e;
}({});
function qk({ vm: e, ref: t, className: n }) {
	let { translate: r } = z(), { state: i, encryptedStateEvents: a, userName: o, timestamp: s } = V(e), c = /* @__PURE__ */ (0, R.jsx)(XC, { "data-state": "supported" }), l = r(a ? "common|state_encryption_enabled" : "common|encryption_enabled"), u = "";
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
		default: c = /* @__PURE__ */ (0, R.jsx)(SC, { "data-state": "unsupported" }), l = r("timeline|m.room.encryption|disabled"), u = r("timeline|m.room.encryption|unsupported");
	}
	return /* @__PURE__ */ (0, R.jsx)(Gk, {
		icon: c,
		className: (0, L.default)(n, Uk.content),
		title: l,
		subtitle: u,
		ref: t,
		children: s
	});
}
var Jk = { eventPreview: "_eventPreview_w0s50_8" };
//#endregion
//#region src/room/timeline/event-tile/EventTileView/EventPreviewView/EventPreviewView.tsx
function Yk({ vm: e, className: t, ...n }) {
	let { isVisible: r, previewContent: i, previewTooltip: a } = V(e);
	if (!r || !i) return /* @__PURE__ */ (0, R.jsx)(R.Fragment, {});
	let o = /* @__PURE__ */ (0, R.jsx)("span", {
		...n,
		className: (0, L.default)("mx_EventPreview", Jk.eventPreview, t),
		children: i
	});
	return a ? /* @__PURE__ */ (0, R.jsx)(Oe, {
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
function Xk({ root: e, line: t, slots: n, classNames: r, refs: i, onMouseEnter: a, onMouseLeave: s, onFocus: c, onBlur: l, onClick: u, onContextMenu: d, onPermalinkClick: f, onPermalinkContextMenu: p }) {
	let m = e.as ?? "li", { layout: h, density: g } = sE(), _ = (e) => e != null && typeof e != "boolean", v = (e, t = n[e]) => {
		if (!_(t)) return null;
		if (e === "contextMenu") return /* @__PURE__ */ (0, R.jsx)(o.Fragment, { children: t }, e);
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
		return /* @__PURE__ */ (0, R.jsx)("div", {
			"data-testid": `event-tile-slot-${e}`,
			className: (0, L.default)(i, r?.[a]),
			children: t
		}, e);
	}, y = (...e) => e.map((e) => v(e)), b = _(n.receipt), x = (0, L.default)(G.line, r?.line, {
		[G.lineMedia]: t?.media,
		[G.lineSticker]: t?.sticker,
		[G.lineEmote]: t?.emote,
		[G.lineImage]: t?.image
	}), S = (t, n, o) => /* @__PURE__ */ (0, R.jsx)(m, {
		ref: i?.root,
		className: (0, L.default)(G.root, r?.root, {
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
	return e.shape === "Thread" ? S(/* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [
		/* @__PURE__ */ (0, R.jsx)("div", {
			className: (0, L.default)(G.senderDetails, r?.senderDetails),
			children: y("avatar", "sender")
		}),
		/* @__PURE__ */ (0, R.jsx)("div", {
			id: e.id,
			"data-testid": "event-tile-line",
			className: x,
			onContextMenu: d,
			children: y("contextMenu", "replyChain", "body", "actionBar", "timestamp", "receipt")
		}),
		v("footer")
	] }), void 0) : e.shape === "Notification" ? S(/* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [
		/* @__PURE__ */ (0, R.jsx)("div", {
			className: (0, L.default)(G.details, r?.details),
			children: y("sender", "notificationRoomLabel", "timestamp", "notificationBadge")
		}),
		n.roomAvatar ? v("roomAvatar") : v("avatar"),
		/* @__PURE__ */ (0, R.jsx)("div", {
			id: e.id,
			"data-testid": "event-tile-line",
			className: x,
			children: y("body", "threadInfo")
		}),
		v("receipt")
	] }), u, -1) : e.shape === "ThreadsList" ? S(/* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [
		/* @__PURE__ */ (0, R.jsx)("div", {
			className: (0, L.default)(G.details, r?.details),
			children: y("sender", "notificationRoomLabel", "timestamp", "notificationBadge")
		}),
		v("avatar"),
		/* @__PURE__ */ (0, R.jsx)("div", {
			id: e.id,
			"data-testid": "event-tile-line",
			className: x,
			children: y("body", "threadInfo")
		}),
		v("actionBar"),
		v("receipt")
	] }), u, -1) : e.shape === "File" ? S(/* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsx)("a", {
		className: (0, L.default)(G.senderDetailsLink, r?.senderDetailsLink),
		href: e.permalink ?? "#",
		onClick: f,
		children: /* @__PURE__ */ (0, R.jsx)("div", {
			className: (0, L.default)(G.senderDetails, r?.senderDetails),
			onContextMenu: p,
			children: y("avatar", "sender", "timestamp")
		})
	}), /* @__PURE__ */ (0, R.jsx)("div", {
		id: e.id,
		"data-testid": "event-tile-line",
		className: x,
		onContextMenu: d,
		children: y("contextMenu", "body")
	})] }), void 0) : S(h === "irc" ? /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [
		y("timestamp", "padlock", "avatar", "sender"),
		/* @__PURE__ */ (0, R.jsx)("div", {
			id: e.id,
			"data-testid": "event-tile-line",
			className: x,
			onContextMenu: d,
			children: y("contextMenu", "replyChain", "body", "actionBar", "footer", "threadInfo")
		}),
		v("receipt")
	] }) : /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [
		y("sender", "avatar"),
		/* @__PURE__ */ (0, R.jsx)("div", {
			id: e.id,
			"data-testid": "event-tile-line",
			className: x,
			onContextMenu: d,
			children: y("contextMenu", "timestamp", "padlock", "replyChain", "body", "actionBar")
		}),
		y("footer", "threadInfo", "receipt")
	] }), void 0, -1);
}
var Zk = {
	container: "_container_1opqj_8",
	title: "_title_1opqj_20",
	time: "_time_1opqj_25",
	icon: "_icon_1opqj_30"
};
//#endregion
//#region src/room/timeline/event-tile/call/tombstone/room/RoomTombstoneCallTileView.tsx
function Qk({ vm: e, className: t }) {
	let { translate: n } = z(), { timestamp: r } = V(e), i = (0, L.default)(t, Zk.container);
	return /* @__PURE__ */ (0, R.jsxs)(B, {
		className: i,
		align: "center",
		gap: "var(--cpd-space-2x)",
		children: [
			/* @__PURE__ */ (0, R.jsx)(Jw, {
				className: Zk.icon,
				width: 20,
				height: 20
			}),
			/* @__PURE__ */ (0, R.jsx)("div", {
				className: Zk.title,
				children: n("timeline|call_tile|tombstone|room|title")
			}),
			/* @__PURE__ */ (0, R.jsx)("div", {
				className: Zk.time,
				children: r
			})
		]
	});
}
//#endregion
//#region src/room/timeline/event-tile/call/common.ts
var $k = /* @__PURE__ */ function(e) {
	return e.Voice = "voice", e.Video = "video", e;
}({}), eA = /* @__PURE__ */ function(e) {
	return e.Incoming = "Incoming", e.Outgoing = "Outgoing", e;
}({});
//#endregion
//#region src/room/timeline/event-tile/call/tombstone/dm/DmTombstoneCallTileView.tsx
function tA(e, t) {
	let n = t ? Jw : Xw, r = t ? iT : oT;
	switch (e) {
		case $k.Video: return /* @__PURE__ */ (0, R.jsx)(n, {
			className: Zk.icon,
			width: 20,
			height: 20
		});
		case $k.Voice: return /* @__PURE__ */ (0, R.jsx)(r, {
			className: Zk.icon,
			width: 20,
			height: 20
		});
	}
}
function nA({ vm: e, className: t }) {
	let n = V(e), { type: r, timestamp: i, isCallDeclined: a } = n, o = (0, L.default)(t, Zk.container);
	return /* @__PURE__ */ (0, R.jsxs)(B, {
		className: o,
		align: "center",
		gap: "var(--cpd-space-2x)",
		children: [
			tA(r, a),
			/* @__PURE__ */ (0, R.jsx)("div", {
				className: Zk.title,
				children: a ? /* @__PURE__ */ (0, R.jsx)(iA, { snapshot: n }) : /* @__PURE__ */ (0, R.jsx)(rA, { snapshot: n })
			}),
			/* @__PURE__ */ (0, R.jsx)("div", {
				className: Zk.time,
				children: i
			})
		]
	});
}
function rA(e) {
	let { type: t } = e.snapshot, { translate: n } = z();
	return t === $k.Voice ? n("timeline|call_tile|voice_call_title") : n("timeline|call_tile|video_call_title");
}
function iA(e) {
	let { callDirection: t } = e.snapshot, { translate: n } = z();
	return t === eA.Incoming ? n("timeline|call_tile|declined|call_declined_by_us") : n("timeline|call_tile|declined|call_declined");
}
var aA = { container: "_container_122d2_8" };
//#endregion
//#region src/room/timeline/event-tile/call/ongoing/components/TileContainer/TileContainer.tsx
function oA({ children: e }) {
	return /* @__PURE__ */ (0, R.jsx)(B, {
		direction: "row",
		align: "center",
		className: aA.container,
		children: e
	});
}
var sA = {
	container: "_container_ghpy6_8",
	icon: "_icon_ghpy6_15"
}, cA = ({ callType: e, classNames: t, height: n, width: r, ...i }) => {
	switch (e) {
		case $k.Video: return /* @__PURE__ */ (0, R.jsx)(Xw, {
			className: t,
			width: r,
			height: n,
			...i
		});
		case $k.Voice: return /* @__PURE__ */ (0, R.jsx)(oT, {
			className: t,
			width: r,
			height: n,
			...i
		});
	}
};
//#endregion
//#region src/room/timeline/event-tile/call/ongoing/components/CallIcon/CallIcon.tsx
function lA(e) {
	return /* @__PURE__ */ (0, R.jsx)(B, {
		align: "center",
		justify: "center",
		className: sA.container,
		children: /* @__PURE__ */ (0, R.jsx)(cA, {
			classNames: sA.icon,
			callType: e.callType,
			height: 20,
			width: 20
		})
	});
}
var uA = {
	title: "_title_11tya_8",
	content: "_content_11tya_19",
	avatar: "_avatar_11tya_26",
	facepile: "_facepile_11tya_30"
}, dA = {
	subContainer: "_subContainer_lhkzi_8",
	startedTextContainer: "_startedTextContainer_lhkzi_16"
};
//#endregion
//#region src/room/timeline/event-tile/call/ongoing/components/JoinButton/JoinButton.tsx
function fA(e) {
	return function(t) {
		return /* @__PURE__ */ (0, R.jsx)(cA, {
			callType: e,
			...t,
			height: 20,
			width: 20
		});
	};
}
function pA({ join: e, callType: t, ...n }) {
	let { translate: r } = z();
	return /* @__PURE__ */ (0, R.jsx)(k, {
		onClick: e,
		Icon: fA(t),
		size: "md",
		...n,
		children: r("timeline|call_tile|ongoing|common|join_button")
	});
}
var mA = { container: "_container_q8hft_8" };
//#endregion
//#region src/room/timeline/event-tile/call/ongoing/components/Duration/DurationView.tsx
function hA(e) {
	let { duration: t } = V(e.vm), n = (0, L.default)(mA.container, e.classNames);
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: n,
		children: [
			"(",
			/* @__PURE__ */ (0, R.jsx)(Nf, {
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
function gA(e) {
	let t = V(e.vm), { isJoinable: n, isJoined: r, isCallIgnored: i, callHasOtherParticipants: a, durationViewModel: o } = t, { translate: s } = z();
	return /* @__PURE__ */ (0, R.jsx)(oA, { children: /* @__PURE__ */ (0, R.jsxs)(B, {
		align: "center",
		gap: "var(--cpd-space-3x)",
		className: uA.content,
		children: [
			/* @__PURE__ */ (0, R.jsx)(lA, { callType: $k.Video }),
			/* @__PURE__ */ (0, R.jsxs)(B, {
				direction: "column",
				className: uA.content,
				children: [/* @__PURE__ */ (0, R.jsx)("div", {
					className: uA.title,
					children: s("timeline|call_tile|ongoing|room|title")
				}), a || i ? /* @__PURE__ */ (0, R.jsx)(_A, { snapshot: t }) : /* @__PURE__ */ (0, R.jsx)(vA, { snapshot: t })]
			}),
			/* @__PURE__ */ (0, R.jsxs)(B, {
				align: "center",
				gap: "var(--cpd-space-3x)",
				wrap: "wrap-reverse",
				children: [o && /* @__PURE__ */ (0, R.jsx)(hA, {
					classNames: "duration",
					vm: o
				}), !r && /* @__PURE__ */ (0, R.jsx)(pA, {
					callType: $k.Video,
					disabled: !n,
					join: (t) => {
						e.vm.join(t);
					}
				})]
			})
		]
	}) });
}
function _A({ snapshot: e }) {
	let { facePileViewModel: t, totalParticipants: n } = e, { translate: r } = z();
	return /* @__PURE__ */ (0, R.jsxs)(B, {
		className: dA.subContainer,
		gap: "6px",
		align: "center",
		children: [/* @__PURE__ */ (0, R.jsx)(ST, {
			classNames: uA.facepile,
			vm: t
		}), r("timeline|call_tile|ongoing|room|join_count", { count: n })]
	});
}
function vA({ snapshot: e }) {
	let { memberAvatarViewModel: t, startedByDisplayName: n } = e, { translate: r } = z();
	return /* @__PURE__ */ (0, R.jsxs)(B, {
		className: dA.subContainer,
		gap: "6px",
		align: "center",
		children: [/* @__PURE__ */ (0, R.jsx)(fb, {
			classNames: uA.avatar,
			vm: t
		}), /* @__PURE__ */ (0, R.jsx)("div", {
			className: dA.startedTextContainer,
			children: r("timeline|call_tile|ongoing|common|call_started_by", { startedByDisplayName: n })
		})]
	});
}
//#endregion
//#region src/room/timeline/event-tile/call/ongoing/dm/DmOngoingCallTileView.tsx
function yA(e) {
	let t = V(e.vm), { callType: n, callDirection: r, isJoinable: i, isJoined: a, durationViewModel: o } = t, s;
	return s = t.callHasOtherParticipants ? /* @__PURE__ */ (0, R.jsx)(SA, { snapshot: t }) : r === eA.Incoming ? /* @__PURE__ */ (0, R.jsx)(bA, { snapshot: t }) : /* @__PURE__ */ (0, R.jsx)(xA, { snapshot: t }), /* @__PURE__ */ (0, R.jsx)(oA, { children: /* @__PURE__ */ (0, R.jsxs)(B, {
		align: "center",
		gap: "var(--cpd-space-3x)",
		className: uA.content,
		children: [
			/* @__PURE__ */ (0, R.jsx)(lA, { callType: n }),
			/* @__PURE__ */ (0, R.jsx)(B, {
				gap: "6px",
				align: "center",
				className: uA.content,
				children: s
			}),
			/* @__PURE__ */ (0, R.jsxs)(B, {
				align: "center",
				gap: "var(--cpd-space-3x)",
				wrap: "wrap-reverse",
				children: [o && /* @__PURE__ */ (0, R.jsx)(hA, {
					classNames: "duration",
					vm: o
				}), !a && /* @__PURE__ */ (0, R.jsx)(pA, {
					disabled: !i,
					callType: n,
					join: (t) => e.vm.join(t)
				})]
			})
		]
	}) });
}
function bA({ snapshot: e }) {
	let { translate: t } = z();
	return /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsx)(fb, {
		classNames: uA.avatar,
		vm: e.memberAvatarViewModel
	}), /* @__PURE__ */ (0, R.jsx)("div", {
		className: uA.title,
		children: t("timeline|call_tile|ongoing|common|call_started_by", { startedByDisplayName: e.startedByDisplayName })
	})] });
}
function xA({ snapshot: e }) {
	let { translate: t } = z();
	return /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsx)(fb, {
		classNames: uA.avatar,
		vm: e.memberAvatarViewModel
	}), /* @__PURE__ */ (0, R.jsx)("div", {
		className: uA.title,
		children: t("timeline|call_tile|ongoing|dm|call_started")
	})] });
}
function SA({ snapshot: e }) {
	let { translate: t } = z();
	return /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsx)(ST, {
		classNames: uA.facepile,
		vm: e.facePileViewModel
	}), /* @__PURE__ */ (0, R.jsx)("div", {
		className: uA.title,
		children: t("timeline|call_tile|ongoing|dm|title")
	})] });
}
//#endregion
//#region src/room/timeline/event-tile/call/RootCallTileView.tsx
function CA({ vm: e }) {
	let { tileType: t, tileViewModel: n } = V(e);
	switch (t) {
		case "ongoing-call-room": return /* @__PURE__ */ (0, R.jsx)(gA, { vm: n });
		case "ongoing-call-dm": return /* @__PURE__ */ (0, R.jsx)(yA, { vm: n });
		case "tombstone-call-room": return /* @__PURE__ */ (0, R.jsx)(Qk, { vm: n });
		case "tombstone-call-dm": return /* @__PURE__ */ (0, R.jsx)(nA, { vm: n });
	}
}
//#endregion
//#region src/room/timeline/event-tile/EventTileView/MJitsiWidgetEventView/MJitsiWidgetEventView.tsx
function wA({ vm: e, className: t, ref: n }) {
	let { isVisible: r, title: i, subtitle: a, timestamp: o } = V(e);
	return r ? /* @__PURE__ */ (0, R.jsx)(Gk, {
		icon: /* @__PURE__ */ (0, R.jsx)(Xw, { color: "var(--cpd-color-icon-primary)" }),
		className: t,
		title: i,
		subtitle: a || void 0,
		ref: n,
		children: o
	}) : null;
}
var TA = { content: "_content_1o649_8" };
//#endregion
//#region src/room/timeline/event-tile/EventTileView/MKeyVerificationRequestView/MKeyVerificationRequestView.tsx
function EA({ vm: e, className: t, ref: n }) {
	let { title: r, subtitle: i, timestamp: a } = V(e);
	return /* @__PURE__ */ (0, R.jsx)(Gk, {
		icon: /* @__PURE__ */ (0, R.jsx)(XC, {}),
		className: (0, L.default)(TA.content, t),
		title: r,
		subtitle: i,
		ref: n,
		children: a
	});
}
var DA = { pinnedMessageBadge: "_pinnedMessageBadge_10mi2_8" };
//#endregion
//#region src/room/timeline/event-tile/EventTileView/PinnedMessageBadge/PinnedMessageBadge.tsx
function OA({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		...n,
		className: (0, L.default)(DA.pinnedMessageBadge, e),
		children: [/* @__PURE__ */ (0, R.jsx)(mw, {
			width: "16px",
			height: "16px"
		}), t ?? H("room|pinned_message_badge")]
	});
}
var kA = {
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
function AA({ vm: e }) {
	let { href: t, sender: n, inline: r, info: i, body: a } = V(e);
	return /* @__PURE__ */ (0, R.jsx)(oE, {
		value: iE,
		children: /* @__PURE__ */ (0, R.jsx)("div", {
			className: (0, L.default)(kA.root, {
				[kA.inline]: r,
				[kA.info]: i
			}),
			"data-testid": "reply-tile",
			children: /* @__PURE__ */ (0, R.jsxs)("a", {
				className: kA.link,
				href: t,
				onClick: e.onClick,
				children: [n ? /* @__PURE__ */ (0, R.jsxs)("div", {
					className: kA.sender,
					"data-testid": "reply-tile-sender",
					children: [n.avatarViewModel ? /* @__PURE__ */ (0, R.jsx)(fb, {
						vm: n.avatarViewModel,
						classNames: kA.avatar
					}) : null, n.profileViewModel ? /* @__PURE__ */ (0, R.jsx)(Ik, {
						vm: n.profileViewModel,
						className: kA.senderProfile
					}) : null]
				}) : null, /* @__PURE__ */ (0, R.jsx)("div", {
					className: kA.body,
					"data-testid": "reply-tile-body",
					children: a
				})]
			})
		})
	});
}
var jA = {
	textualEvent: "_textualEvent_1iwcb_8",
	avatarButton: "_avatarButton_1iwcb_21"
};
//#endregion
//#region src/room/timeline/event-tile/EventTileView/RoomAvatarEventView/RoomAvatarEventView.tsx
function MA({ vm: e, renderAvatar: t, className: n, ref: r }) {
	let i = V(e), a = z().translate, o = cE(), s = (0, L.default)(jA.textualEvent, n);
	return i.isRemoved ? /* @__PURE__ */ (0, R.jsx)("div", {
		className: s,
		ref: r,
		...o,
		children: a("timeline|m.room.avatar|removed", { senderDisplayName: i.senderDisplayName })
	}) : /* @__PURE__ */ (0, R.jsx)("span", {
		className: s,
		ref: r,
		...o,
		children: a("timeline|m.room.avatar|changed_img", { senderDisplayName: i.senderDisplayName }, { img: () => /* @__PURE__ */ (0, R.jsx)("button", {
			type: "button",
			className: jA.avatarButton,
			onClick: e.onAvatarClick,
			"aria-label": i.lightboxLabel,
			children: t(i)
		}) })
	});
}
var NA = { textualEvent: "_textualEvent_1rbqb_8" };
//#endregion
//#region src/room/timeline/event-tile/EventTileView/TextualEventView/TextualEventView.tsx
function PA({ vm: e, className: t }) {
	let n = cE(), r = V(e);
	return /* @__PURE__ */ (0, R.jsx)("div", {
		className: (0, L.default)(NA.textualEvent, t),
		...n,
		children: r.content
	});
}
var FA = {
	audioPlayer: "_audioPlayer_etpvh_8",
	mediaInfo: "_mediaInfo_etpvh_12",
	mediaName: "_mediaName_etpvh_17",
	byline: "_byline_etpvh_26",
	clock: "_clock_etpvh_30",
	error: "_error_etpvh_34"
};
//#endregion
//#region src/core/utils/FormattingUtils.ts
function IA(e, t = 2) {
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
function LA({ vm: e }) {
	let { translate: t } = z(), { playbackState: n, mediaName: r = t("timeline|m.audio|unnamed_audio"), sizeBytes: i, durationSeconds: a, playedSeconds: o, percentComplete: s, error: c } = V(e), l = i ? `(${IA(i)})` : null, u = n === "decoding";
	return /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsxs)(oD, {
		className: FA.audioPlayer,
		tabIndex: 0,
		onKeyDown: e.onKeyDown,
		"aria-label": t("timeline|m.audio|audio_player"),
		role: "region",
		children: [/* @__PURE__ */ (0, R.jsxs)(B, {
			gap: "var(--cpd-space-2x)",
			align: "center",
			children: [/* @__PURE__ */ (0, R.jsx)(Vf, {
				tabIndex: -1,
				disabled: u,
				playing: n === "playing",
				togglePlay: e.togglePlay
			}), /* @__PURE__ */ (0, R.jsxs)(B, {
				direction: "column",
				className: FA.mediaInfo,
				children: [/* @__PURE__ */ (0, R.jsx)("span", {
					className: FA.mediaName,
					"data-testid": "audio-player-name",
					children: r
				}), /* @__PURE__ */ (0, R.jsxs)(B, {
					className: FA.byline,
					gap: "var(--cpd-space-1-5x)",
					children: [/* @__PURE__ */ (0, R.jsx)(Nf, { seconds: a }), l]
				})]
			})]
		}), /* @__PURE__ */ (0, R.jsxs)(B, {
			align: "center",
			gap: "var(--cpd-space-1x)",
			"data-testid": "audio-player-seek",
			children: [/* @__PURE__ */ (0, R.jsx)(tb, {
				tabIndex: -1,
				disabled: u,
				value: s,
				onChange: e.onSeekbarChange
			}), /* @__PURE__ */ (0, R.jsx)(Nf, {
				className: FA.clock,
				seconds: o,
				role: "timer"
			})]
		})]
	}), c && /* @__PURE__ */ (0, R.jsx)("span", {
		className: FA.error,
		children: t("timeline|m.audio|error_downloading_audio")
	})] });
}
var RA = {
	content: "_content_1uqu1_8",
	error: "_error_1uqu1_14",
	icon: "_icon_1uqu1_23"
}, zA = /* @__PURE__ */ function(e) {
	return e.MEGOLM_KEY_WITHHELD_FOR_UNVERIFIED_DEVICE = "MEGOLM_KEY_WITHHELD_FOR_UNVERIFIED_DEVICE", e.HISTORICAL_MESSAGE_NO_KEY_BACKUP = "HISTORICAL_MESSAGE_NO_KEY_BACKUP", e.HISTORICAL_MESSAGE_BACKUP_UNCONFIGURED = "HISTORICAL_MESSAGE_BACKUP_UNCONFIGURED", e.HISTORICAL_MESSAGE_USER_NOT_JOINED = "HISTORICAL_MESSAGE_USER_NOT_JOINED", e.SENDER_IDENTITY_PREVIOUSLY_VERIFIED = "SENDER_IDENTITY_PREVIOUSLY_VERIFIED", e.UNSIGNED_SENDER_DEVICE = "UNSIGNED_SENDER_DEVICE", e.UNABLE_TO_DECRYPT = "UNABLE_TO_DECRYPT", e;
}({});
function BA(e, t, n) {
	let r = e.translate;
	switch (t) {
		case "MEGOLM_KEY_WITHHELD_FOR_UNVERIFIED_DEVICE": return r("timeline|decryption_failure|blocked");
		case "HISTORICAL_MESSAGE_NO_KEY_BACKUP": return r("timeline|decryption_failure|historical_event_no_key_backup");
		case "HISTORICAL_MESSAGE_BACKUP_UNCONFIGURED":
			if (n === !1) return r("timeline|decryption_failure|historical_event_unverified_device");
			break;
		case "HISTORICAL_MESSAGE_USER_NOT_JOINED": return r("timeline|decryption_failure|historical_event_user_not_joined");
		case "SENDER_IDENTITY_PREVIOUSLY_VERIFIED": return /* @__PURE__ */ (0, R.jsxs)("span", { children: [/* @__PURE__ */ (0, R.jsx)(IS, {
			className: RA.icon,
			width: "16px",
			height: "16px"
		}), r("timeline|decryption_failure|sender_identity_previously_verified")] });
		case "UNSIGNED_SENDER_DEVICE": return /* @__PURE__ */ (0, R.jsxs)("span", { children: [/* @__PURE__ */ (0, R.jsx)(IS, {
			className: RA.icon,
			width: "16px",
			height: "16px"
		}), r("timeline|decryption_failure|sender_unsigned_device")] });
	}
	return r("timeline|decryption_failure|unable_to_decrypt");
}
function VA(e) {
	switch (e) {
		case "SENDER_IDENTITY_PREVIOUSLY_VERIFIED":
		case "UNSIGNED_SENDER_DEVICE": return RA.error;
	}
	return null;
}
function HA({ vm: e, ref: t, className: n }) {
	let r = z(), { decryptionFailureReason: i, isLocalDeviceVerified: a } = V(e), o = (0, L.default)(RA.content, VA(i), n);
	return /* @__PURE__ */ (0, R.jsx)("div", {
		className: o,
		ref: t,
		children: BA(r, i, a)
	});
}
var UA = {
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
function WA({ vm: e }) {
	let { isVisible: t, avatar: n, showDisplayName: r, senderName: i, previewContent: a, previewTooltip: o } = V(e);
	if (!t || !a) return /* @__PURE__ */ (0, R.jsx)(R.Fragment, {});
	let s = /* @__PURE__ */ (0, R.jsx)("span", {
		className: UA.content,
		children: a
	}), c = n?.className ? `${UA.avatar} ${n.className}` : UA.avatar;
	return /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [
		n && /* @__PURE__ */ (0, R.jsx)(D, {
			id: n.id,
			name: n.name,
			src: n.src,
			title: n.title,
			"aria-label": n.label,
			type: "round",
			size: "24px",
			className: c
		}),
		r && i && /* @__PURE__ */ (0, R.jsx)("div", {
			className: UA.sender,
			children: i
		}),
		o ? /* @__PURE__ */ (0, R.jsx)(Oe, {
			description: o,
			children: s
		}) : s
	] });
}
function GA({ vm: e, className: t, type: n = "button", ...r }) {
	let { isVisible: i, replyCountLabel: a, openThreadLabel: o, notificationIndicator: s, narrow: c, previewVm: l } = V(e);
	if (!i) return /* @__PURE__ */ (0, R.jsx)(R.Fragment, {});
	let u = [
		UA.threadSummary,
		t,
		c ? UA.narrow : void 0
	].filter(Boolean).join(" ");
	return /* @__PURE__ */ (0, R.jsxs)("button", {
		...r,
		type: n,
		className: u,
		onClick: e.onClick,
		"aria-label": o,
		children: [
			/* @__PURE__ */ (0, R.jsx)(pe, {
				size: "24px",
				indicator: s,
				className: UA.threadIcon,
				children: /* @__PURE__ */ (0, R.jsx)(Rw, {})
			}),
			/* @__PURE__ */ (0, R.jsx)("span", {
				className: UA.repliesAmount,
				children: a
			}),
			/* @__PURE__ */ (0, R.jsx)(WA, { vm: l }),
			/* @__PURE__ */ (0, R.jsx)("div", {
				className: UA.chevron,
				children: /* @__PURE__ */ (0, R.jsx)(XS, {})
			})
		]
	});
}
var KA = {
	reactionsRow: "_reactionsRow_9xpzm_8",
	showAllButton: "_showAllButton_9xpzm_16",
	addReactionButton: "_addReactionButton_9xpzm_29",
	addReactionButtonVisible: "_addReactionButtonVisible_9xpzm_53",
	addReactionButtonActive: "_addReactionButtonActive_9xpzm_57",
	addReactionButtonDisabled: "_addReactionButtonDisabled_9xpzm_61"
};
//#endregion
//#region src/room/timeline/event-tile/reactions/ReactionsRow/ReactionsRowView.tsx
function qA({ vm: e, className: t, children: n }) {
	let { ariaLabel: r, isVisible: i, showAllButtonVisible: a, showAllButtonLabel: o, showAddReactionButton: s, addReactionButtonLabel: c, addReactionButtonVisible: l, addReactionButtonActive: u, addReactionButtonDisabled: d } = V(e);
	if (!i) return /* @__PURE__ */ (0, R.jsx)(R.Fragment, {});
	let f = (0, L.default)(KA.addReactionButton, {
		[KA.addReactionButtonVisible]: l,
		[KA.addReactionButtonActive]: u,
		[KA.addReactionButtonDisabled]: d
	}), p = e.onAddReactionContextMenu ? (t) => {
		t.preventDefault(), e.onAddReactionContextMenu?.(t);
	} : void 0, m = /* @__PURE__ */ (0, R.jsx)("button", {
		type: "button",
		className: f,
		"aria-label": c,
		disabled: d,
		onClick: e.onAddReactionClick,
		onContextMenu: p,
		children: /* @__PURE__ */ (0, R.jsx)(Sw, {})
	});
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: (0, L.default)(t, KA.reactionsRow),
		role: "toolbar",
		"aria-label": r,
		children: [
			n,
			a && /* @__PURE__ */ (0, R.jsx)("button", {
				type: "button",
				className: KA.showAllButton,
				onClick: e.onShowAllClick,
				children: o
			}),
			s && /* @__PURE__ */ (0, R.jsx)(Oe, {
				description: c,
				placement: "right",
				children: m
			})
		]
	});
}
//#endregion
//#region src/room/timeline/event-tile/reactions/ReactionsRowButtonTooltip/ReactionsRowButtonTooltipView.tsx
function JA({ vm: e, children: t }) {
	let { formattedSenders: n, caption: r, tooltipOpen: i } = V(e);
	return n ? /* @__PURE__ */ (0, R.jsx)(Oe, {
		description: n,
		caption: r,
		placement: "right",
		open: i,
		children: t
	}) : /* @__PURE__ */ (0, R.jsx)(R.Fragment, { children: t });
}
var YA = {
	reactionsRowButton: "_reactionsRowButton_5v4c1_8",
	reactionsRowButtonSelected: "_reactionsRowButtonSelected_5v4c1_21",
	reactionsRowButtonDisabled: "_reactionsRowButtonDisabled_5v4c1_26",
	reactionsRowButtonContent: "_reactionsRowButtonContent_5v4c1_30",
	reactionsRowButtonCount: "_reactionsRowButtonCount_5v4c1_38"
};
//#endregion
//#region src/room/timeline/event-tile/reactions/ReactionsRowButton/ReactionsRowButtonView.tsx
function XA({ vm: e }) {
	let t = V(e), { content: n, count: r, className: i, isSelected: a, isDisabled: o, imageSrc: s, imageAlt: c, tooltipVm: l } = t, u = t["aria-label"] ?? t.ariaLabel, d = o ? !0 : void 0, f = (0, L.default)(i, YA.reactionsRowButton, {
		[YA.reactionsRowButtonSelected]: a,
		[YA.reactionsRowButtonDisabled]: o
	}), p = s ? /* @__PURE__ */ (0, R.jsx)("img", {
		className: YA.reactionsRowButtonContent,
		alt: c ?? "",
		src: s,
		width: "16",
		height: "16"
	}) : /* @__PURE__ */ (0, R.jsx)("span", {
		className: YA.reactionsRowButtonContent,
		"aria-hidden": "true",
		children: n ?? ""
	});
	return /* @__PURE__ */ (0, R.jsx)(JA, {
		vm: l,
		children: /* @__PURE__ */ (0, R.jsxs)("button", {
			type: "button",
			className: f,
			tabIndex: 0,
			"aria-label": u,
			"aria-disabled": d,
			onClick: o ? void 0 : e.onClick,
			children: [p, /* @__PURE__ */ (0, R.jsx)("span", {
				className: YA.reactionsRowButtonCount,
				"aria-hidden": "true",
				children: r
			})]
		})
	});
}
var ZA = { content: "_content_1jaux_8" };
//#endregion
//#region src/room/timeline/event-tile/timestamp/MessageTimestampView/MessageTimestampView.tsx
function QA({ vm: e, className: t }) {
	let { translate: n } = z(), { ts: r, tsSentAt: i, tsReceivedAt: a, inhibitTooltip: o, href: s } = V(e), c = (t) => {
		e.onClick && (t.key === "Enter" || t.key === " ") && (t.preventDefault(), e.onClick?.(t));
	}, l = i, u;
	a && a?.length > 0 && (l = n("timeline|message_timestamp_sent_at", { dateTime: l }), u = n("timeline|message_timestamp_received_at", { dateTime: a }));
	let d;
	return d = s ? /* @__PURE__ */ (0, R.jsx)("a", {
		href: s,
		onClick: e.onClick,
		onKeyDown: c,
		onContextMenu: e.onContextMenu,
		className: (0, L.default)(t, ZA.content),
		"aria-live": "off",
		children: r
	}) : /* @__PURE__ */ (0, R.jsx)("span", {
		onClick: e.onClick,
		onKeyDown: c,
		onContextMenu: e.onContextMenu,
		className: (0, L.default)(t, ZA.content),
		role: e.onClick ? "link" : void 0,
		"aria-live": "off",
		tabIndex: e.onClick || !o ? 0 : void 0,
		children: r
	}), o ? d : /* @__PURE__ */ (0, R.jsx)(Oe, {
		description: l,
		caption: u,
		children: d
	});
}
var $A = {
	container: "_container_b6h8l_1",
	toggleButton: "_toggleButton_b6h8l_17"
}, ej = {
	tile: "_tile_1vd22_1",
	below: "_below_1vd22_9"
}, tj = {
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
}, nj = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", rj = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", ij = "numeric", aj = "ascii", oj = "alpha", sj = "asciinumeric", cj = "alphanumeric", lj = "domain", uj = "emoji", dj = "scheme", fj = "slashscheme", pj = "whitespace";
function mj(e, t) {
	return e in t || (t[e] = []), t[e];
}
function hj(e, t, n) {
	t[ij] && (t[sj] = !0, t[cj] = !0), t[aj] && (t[sj] = !0, t[oj] = !0), t[sj] && (t[cj] = !0), t[oj] && (t[cj] = !0), t[cj] && (t[lj] = !0), t[uj] && (t[lj] = !0);
	for (let r in t) {
		let t = mj(r, n);
		t.indexOf(e) < 0 && t.push(e);
	}
}
function gj(e, t) {
	let n = {};
	for (let r in t) t[r].indexOf(e) >= 0 && (n[r] = !0);
	return n;
}
function _j(e = null) {
	this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
_j.groups = {}, _j.prototype = {
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
		r ||= _j.groups;
		let i;
		return t && t.j ? i = t : (i = new _j(t), n && r && hj(t, n, r)), this.jr.push([e, i]), i;
	},
	ts(e, t, n, r) {
		let i = this, a = e.length;
		if (!a) return i;
		for (let t = 0; t < a - 1; t++) i = i.tt(e[t]);
		return i.tt(e[a - 1], t, n, r);
	},
	tt(e, t, n, r) {
		r ||= _j.groups;
		let i = this;
		if (t && t.j) return i.j[e] = t, t;
		let a = t, o, s = i.go(e);
		return s ? (o = new _j(), Object.assign(o.j, s.j), o.jr.push.apply(o.jr, s.jr), o.jd = s.jd, o.t = s.t) : o = new _j(), a && (r && (o.t && typeof o.t == "string" ? hj(a, Object.assign(gj(o.t, r), n), r) : n && hj(a, n, r)), o.t = a), i.j[e] = o, o;
	}
};
var K = (e, t, n, r, i) => e.ta(t, n, r, i), vj = (e, t, n, r, i) => e.tr(t, n, r, i), yj = (e, t, n, r, i) => e.ts(t, n, r, i), q = (e, t, n, r, i) => e.tt(t, n, r, i), bj = "WORD", xj = "UWORD", Sj = "ASCIINUMERICAL", Cj = "ALPHANUMERICAL", wj = "LOCALHOST", Tj = "TLD", Ej = "UTLD", Dj = "SCHEME", Oj = "SLASH_SCHEME", kj = "NUM", Aj = "WS", jj = "NL", Mj = "OPENBRACE", Nj = "CLOSEBRACE", Pj = "OPENBRACKET", Fj = "CLOSEBRACKET", Ij = "OPENPAREN", Lj = "CLOSEPAREN", Rj = "OPENANGLEBRACKET", zj = "CLOSEANGLEBRACKET", Bj = "FULLWIDTHLEFTPAREN", Vj = "FULLWIDTHRIGHTPAREN", Hj = "LEFTCORNERBRACKET", Uj = "RIGHTCORNERBRACKET", Wj = "LEFTWHITECORNERBRACKET", Gj = "RIGHTWHITECORNERBRACKET", Kj = "FULLWIDTHLESSTHAN", qj = "FULLWIDTHGREATERTHAN", Jj = "AMPERSAND", Yj = "APOSTROPHE", Xj = "ASTERISK", Zj = "AT", Qj = "BACKSLASH", $j = "BACKTICK", eM = "CARET", tM = "COLON", nM = "COMMA", rM = "DOLLAR", iM = "DOT", aM = "EQUALS", oM = "EXCLAMATION", sM = "HYPHEN", cM = "PERCENT", lM = "PIPE", uM = "PLUS", dM = "POUND", fM = "QUERY", pM = "QUOTE", mM = "FULLWIDTHMIDDLEDOT", hM = "SEMI", gM = "SLASH", _M = "TILDE", vM = "UNDERSCORE", yM = "EMOJI", bM = "SYM", xM = /*#__PURE__*/ Object.freeze({
	__proto__: null,
	ALPHANUMERICAL: Cj,
	AMPERSAND: Jj,
	APOSTROPHE: Yj,
	ASCIINUMERICAL: Sj,
	ASTERISK: Xj,
	AT: Zj,
	BACKSLASH: Qj,
	BACKTICK: $j,
	CARET: eM,
	CLOSEANGLEBRACKET: zj,
	CLOSEBRACE: Nj,
	CLOSEBRACKET: Fj,
	CLOSEPAREN: Lj,
	COLON: tM,
	COMMA: nM,
	DOLLAR: rM,
	DOT: iM,
	EMOJI: yM,
	EQUALS: aM,
	EXCLAMATION: oM,
	FULLWIDTHGREATERTHAN: qj,
	FULLWIDTHLEFTPAREN: Bj,
	FULLWIDTHLESSTHAN: Kj,
	FULLWIDTHMIDDLEDOT: mM,
	FULLWIDTHRIGHTPAREN: Vj,
	HYPHEN: sM,
	LEFTCORNERBRACKET: Hj,
	LEFTWHITECORNERBRACKET: Wj,
	LOCALHOST: wj,
	NL: jj,
	NUM: kj,
	OPENANGLEBRACKET: Rj,
	OPENBRACE: Mj,
	OPENBRACKET: Pj,
	OPENPAREN: Ij,
	PERCENT: cM,
	PIPE: lM,
	PLUS: uM,
	POUND: dM,
	QUERY: fM,
	QUOTE: pM,
	RIGHTCORNERBRACKET: Uj,
	RIGHTWHITECORNERBRACKET: Gj,
	SCHEME: Dj,
	SEMI: hM,
	SLASH: gM,
	SLASH_SCHEME: Oj,
	SYM: bM,
	TILDE: _M,
	TLD: Tj,
	UNDERSCORE: vM,
	UTLD: Ej,
	UWORD: xj,
	WORD: bj,
	WS: Aj
}), SM = /[a-z]/, CM = /\p{L}/u, wM = /\p{Emoji}/u, TM = /\d/, EM = /\s/, DM = "\r", OM = "\n", kM = "️", AM = "‍", jM = "￼", MM = null, NM = null;
function PM(e = []) {
	let t = {};
	_j.groups = t;
	let n = new _j();
	MM ??= RM(nj), NM ??= RM(rj), q(n, "'", Yj), q(n, "{", Mj), q(n, "}", Nj), q(n, "[", Pj), q(n, "]", Fj), q(n, "(", Ij), q(n, ")", Lj), q(n, "<", Rj), q(n, ">", zj), q(n, "（", Bj), q(n, "）", Vj), q(n, "「", Hj), q(n, "」", Uj), q(n, "『", Wj), q(n, "』", Gj), q(n, "＜", Kj), q(n, "＞", qj), q(n, "&", Jj), q(n, "*", Xj), q(n, "@", Zj), q(n, "`", $j), q(n, "^", eM), q(n, ":", tM), q(n, ",", nM), q(n, "$", rM), q(n, ".", iM), q(n, "=", aM), q(n, "!", oM), q(n, "-", sM), q(n, "%", cM), q(n, "|", lM), q(n, "+", uM), q(n, "#", dM), q(n, "?", fM), q(n, "\"", pM), q(n, "/", gM), q(n, ";", hM), q(n, "~", _M), q(n, "_", vM), q(n, "\\", Qj), q(n, "・", mM);
	let r = vj(n, TM, kj, { [ij]: !0 });
	vj(r, TM, r);
	let i = vj(r, SM, Sj, { [sj]: !0 }), a = vj(r, CM, Cj, { [cj]: !0 }), o = vj(n, SM, bj, { [aj]: !0 });
	vj(o, TM, i), vj(o, SM, o), vj(i, TM, i), vj(i, SM, i);
	let s = vj(n, CM, xj, { [oj]: !0 });
	vj(s, SM), vj(s, TM, a), vj(s, CM, s), vj(a, TM, a), vj(a, SM), vj(a, CM, a);
	let c = q(n, OM, jj, { [pj]: !0 }), l = q(n, DM, Aj, { [pj]: !0 }), u = vj(n, EM, Aj, { [pj]: !0 });
	q(n, jM, u), q(l, OM, c), q(l, jM, u), vj(l, EM, u), q(u, DM), q(u, OM), vj(u, EM, u), q(u, jM, u);
	let d = vj(n, wM, yM, { [uj]: !0 });
	q(d, "#"), vj(d, wM, d), q(d, kM, d);
	let f = q(d, AM);
	q(f, "#"), vj(f, wM, d);
	let p = [[SM, o], [TM, i]], m = [
		[SM, null],
		[CM, s],
		[TM, a]
	];
	for (let e = 0; e < MM.length; e++) LM(n, MM[e], Tj, bj, p);
	for (let e = 0; e < NM.length; e++) LM(n, NM[e], Ej, xj, m);
	hj(Tj, {
		tld: !0,
		ascii: !0
	}, t), hj(Ej, {
		utld: !0,
		alpha: !0
	}, t), LM(n, "file", Dj, bj, p), LM(n, "mailto", Dj, bj, p), LM(n, "http", Oj, bj, p), LM(n, "https", Oj, bj, p), LM(n, "ftp", Oj, bj, p), LM(n, "ftps", Oj, bj, p), hj(Dj, {
		scheme: !0,
		ascii: !0
	}, t), hj(Oj, {
		slashscheme: !0,
		ascii: !0
	}, t), e = e.sort((e, t) => e[0] > t[0] ? 1 : -1);
	for (let t = 0; t < e.length; t++) {
		let r = e[t][0], i = e[t][1] ? { [dj]: !0 } : { [fj]: !0 };
		r.indexOf("-") >= 0 ? i[lj] = !0 : SM.test(r) ? TM.test(r) ? i[sj] = !0 : i[aj] = !0 : i[ij] = !0, yj(n, r, r, i);
	}
	return yj(n, "localhost", wj, { ascii: !0 }), n.jd = new _j(bM), {
		start: n,
		tokens: Object.assign({ groups: t }, xM)
	};
}
function FM(e, t) {
	let n = IM(t.replace(/[A-Z]/g, (e) => e.toLowerCase())), r = n.length, i = [], a = 0, o = 0;
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
function IM(e) {
	let t = [], n = e.length, r = 0;
	for (; r < n;) {
		let i = e.charCodeAt(r), a, o = i < 55296 || i > 56319 || r + 1 === n || (a = e.charCodeAt(r + 1)) < 56320 || a > 57343 ? e[r] : e.slice(r, r + 2);
		t.push(o), r += o.length;
	}
	return t;
}
function LM(e, t, n, r, i) {
	let a, o = t.length;
	for (let n = 0; n < o - 1; n++) {
		let o = t[n];
		e.j[o] ? a = e.j[o] : (a = new _j(r), a.jr = i.slice(), e.j[o] = a), e = a;
	}
	return a = new _j(n), a.jr = i.slice(), e.j[t[o - 1]] = a, a;
}
function RM(e) {
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
var zM = {
	defaultProtocol: "http",
	events: null,
	format: VM,
	formatHref: VM,
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
function BM(e, t = null) {
	let n = Object.assign({}, zM);
	e && (n = Object.assign(n, e instanceof BM ? e.o : e));
	let r = n.ignoreTags, i = [];
	for (let e = 0; e < r.length; e++) i.push(r[e].toUpperCase());
	this.o = n, t && (this.defaultRender = t), this.ignoreTags = i;
}
BM.prototype = {
	o: zM,
	ignoreTags: [],
	defaultRender(e) {
		return e;
	},
	check(e) {
		return this.get("validate", e.toString(), e);
	},
	get(e, t, n) {
		let r = t != null, i = this.o[e];
		return i && (typeof i == "object" ? (i = n.t in i ? i[n.t] : zM[e], typeof i == "function" && r && (i = i(t, n))) : typeof i == "function" && r && (i = i(t, n.t, n)), i);
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
function VM(e) {
	return e;
}
function HM(e, t) {
	this.t = "token", this.v = e, this.tk = t;
}
HM.prototype = {
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
	toObject(e = zM.defaultProtocol) {
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
function UM(e, t) {
	class n extends HM {
		constructor(t, n) {
			super(t, n), this.t = e;
		}
	}
	for (let e in t) n.prototype[e] = t[e];
	return n.t = e, n;
}
var WM = UM("email", {
	isLink: !0,
	toHref() {
		return "mailto:" + this.toString();
	}
}), GM = UM("text"), KM = UM("nl"), qM = UM("url", {
	isLink: !0,
	toHref(e = zM.defaultProtocol) {
		return this.hasProtocol() ? this.v : `${e}://${this.v}`;
	},
	hasProtocol() {
		let e = this.tk;
		return e.length >= 2 && e[0].t !== wj && e[1].t === tM;
	}
}), JM = (e) => new _j(e);
function YM({ groups: e }) {
	let t = e.domain.concat([
		Jj,
		Xj,
		Zj,
		Qj,
		$j,
		eM,
		rM,
		aM,
		sM,
		kj,
		cM,
		lM,
		uM,
		dM,
		gM,
		bM,
		_M,
		vM
	]), n = [
		Yj,
		tM,
		nM,
		iM,
		oM,
		cM,
		fM,
		pM,
		hM,
		Rj,
		zj,
		Mj,
		Nj,
		Fj,
		Pj,
		Ij,
		Lj,
		Bj,
		Vj,
		Hj,
		Uj,
		Wj,
		Gj,
		Kj,
		qj
	], r = [
		Jj,
		Yj,
		Xj,
		Qj,
		$j,
		eM,
		rM,
		aM,
		sM,
		Mj,
		Nj,
		cM,
		lM,
		uM,
		dM,
		fM,
		gM,
		bM,
		_M,
		vM
	], i = JM(), a = q(i, _M);
	K(a, r, a), K(a, e.domain, a);
	let o = JM(), s = JM(), c = JM();
	K(i, e.domain, o), K(i, e.scheme, s), K(i, e.slashscheme, c), K(o, r, a), K(o, e.domain, o);
	let l = q(o, Zj);
	q(a, Zj, l), q(s, Zj, l), q(c, Zj, l);
	let u = q(a, iM);
	K(u, r, a), K(u, e.domain, a);
	let d = JM();
	K(l, e.domain, d), K(d, e.domain, d);
	let f = q(d, iM);
	K(f, e.domain, d);
	let p = JM(WM);
	K(f, e.tld, p), K(f, e.utld, p), q(l, wj, p);
	let m = q(d, sM);
	q(m, sM, m), K(m, e.domain, d), K(p, e.domain, d), q(p, iM, f), q(p, sM, m);
	let h = q(o, sM), g = q(o, iM);
	q(h, sM, h), K(h, e.domain, o), K(g, r, a), K(g, e.domain, o);
	let _ = JM(qM);
	K(g, e.tld, _), K(g, e.utld, _), K(_, e.domain, o), K(_, r, a), q(_, iM, g), q(_, sM, h), q(_, Zj, l);
	let v = q(_, tM), y = JM(qM);
	K(v, e.numeric, y);
	let b = JM(qM), x = JM();
	K(b, t, b), K(b, n, x), K(x, t, b), K(x, n, x), q(_, gM, b), q(y, gM, b);
	let S = q(s, tM), C = q(q(q(c, tM), gM), gM);
	K(s, e.domain, o), q(s, iM, g), q(s, sM, h), K(c, e.domain, o), q(c, iM, g), q(c, sM, h), K(S, e.domain, b), q(S, gM, b), q(S, fM, b), K(C, e.domain, b), K(C, t, b), q(C, gM, b);
	let w = [
		[Mj, Nj],
		[Pj, Fj],
		[Ij, Lj],
		[Rj, zj],
		[Bj, Vj],
		[Hj, Uj],
		[Wj, Gj],
		[Kj, qj]
	];
	for (let e = 0; e < w.length; e++) {
		let [r, i] = w[e], a = q(b, r);
		q(x, r, a);
		let o = JM(qM);
		K(a, t, o);
		let s = JM();
		K(a, n, s), q(a, i, b), K(o, t, o), K(o, n, s), K(s, t, o), K(s, n, s), q(o, i, b), q(s, i, b);
	}
	return q(i, wj, _), q(i, jj, KM), {
		start: i,
		tokens: xM
	};
}
function XM(e, t, n) {
	let r = n.length, i = 0, a = [], o = [];
	for (; i < r;) {
		let s = e, c = null, l = null, u = 0, d = null, f = -1;
		for (; i < r && !(c = s.go(n[i].t));) o.push(n[i++]);
		for (; i < r && (l = c || s.go(n[i].t));) c = null, s = l, s.accepts() ? (f = 0, d = s) : f >= 0 && f++, i++, u++;
		if (f < 0) i -= u, i < r && (o.push(n[i]), i++);
		else {
			o.length > 0 && (a.push(ZM(GM, t, o)), o = []), i -= f, u -= f;
			let e = d.t, r = n.slice(i - u, i);
			a.push(ZM(e, t, r));
		}
	}
	return o.length > 0 && a.push(ZM(GM, t, o)), a;
}
function ZM(e, t, n) {
	let r = n[0].s, i = n[n.length - 1].e;
	return new e(t.slice(r, i), n);
}
var QM = typeof console < "u" && console && console.warn || (() => {}), $M = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", eN = {
	scanner: null,
	parser: null,
	tokenQueue: [],
	pluginQueue: [],
	customSchemes: [],
	initialized: !1
};
function tN(e, t) {
	if (typeof t != "function") throw Error(`linkifyjs: Invalid plugin ${t} (expects function)`);
	for (let n = 0; n < eN.pluginQueue.length; n++) if (e === eN.pluginQueue[n][0]) {
		QM(`linkifyjs: plugin "${e}" already registered - will be overwritten`), eN.pluginQueue[n] = [e, t];
		return;
	}
	eN.pluginQueue.push([e, t]), eN.initialized && QM(`linkifyjs: already initialized - will not register plugin "${e}" ${$M}`);
}
function nN(e, t = !1) {
	if (eN.initialized && QM(`linkifyjs: already initialized - will not register custom scheme "${e}" ${$M}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(e)) throw Error("linkifyjs: incorrect scheme format.\n1. Must only contain digits, lowercase ASCII letters or \"-\"\n2. Cannot start or end with \"-\"\n3. \"-\" cannot repeat");
	eN.customSchemes.push([e, t]);
}
function rN() {
	eN.scanner = PM(eN.customSchemes);
	for (let e = 0; e < eN.tokenQueue.length; e++) eN.tokenQueue[e][1]({ scanner: eN.scanner });
	eN.parser = YM(eN.scanner.tokens);
	for (let e = 0; e < eN.pluginQueue.length; e++) eN.pluginQueue[e][1]({
		scanner: eN.scanner,
		parser: eN.parser
	});
	return eN.initialized = !0, eN;
}
function iN(e) {
	return eN.initialized || rN(), XM(eN.parser.start, e, FM(eN.scanner.start, e));
}
iN.scan = FM;
function aN(e, t = null, n = null) {
	if (t && typeof t == "object") {
		if (n) throw Error(`linkifyjs: Invalid link type ${t}; must be a string`);
		n = t, t = null;
	}
	let r = new BM(n), i = iN(e), a = [];
	for (let e = 0; e < i.length; e++) {
		let n = i[e];
		n.isLink && (!t || n.t === t) && r.check(n) && a.push(n.toFormattedObject(r));
	}
	return a;
}
function oN(e, t = null) {
	let n = iN(e);
	return n.length === 1 && n[0].isLink && (!t || n[0].t === t);
}
//#endregion
//#region ../../node_modules/.pnpm/linkify-react@4.3.3_linkifyjs@4.3.3_react@19.3.0/node_modules/linkify-react/dist/linkify-react.mjs
function sN(e, t, n) {
	let r = iN(e), i = [];
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
function cN(e, t, n) {
	if (a.Children.count(e.props.children) === 0) return e;
	let r = [];
	a.Children.forEach(e.props.children, (e) => {
		typeof e == "string" ? r.push.apply(r, sN(e, t, n)) : a.isValidElement(e) ? typeof e.type == "string" && t.ignoreTags.indexOf(e.type.toUpperCase()) >= 0 ? r.push(e) : r.push(cN(e, t, n)) : r.push(e);
	});
	let i = `__linkify-el-${n.elementId++}`, o = Object.assign({ key: i }, e.props);
	return a.cloneElement(e, o, r);
}
var lN = (e) => {
	let t = 0, n = ({ tagName: e, attributes: n, content: r }) => (n.key = `__linkify-lnk-${t++}`, n.class && (n.className = n.class, delete n.class), a.createElement(e, n, r)), r = { key: "__linkify-wrapper" };
	for (let t in e) t !== "options" && t !== "as" && t !== "tagName" && t !== "children" && (r[t] = e[t]);
	let i = new BM(e.options, n), o = e.as || e.tagName || a.Fragment || "span", s = e.children;
	return cN(a.createElement(o, r, s), i, { elementId: 0 });
}, uN = { container: "_container_15awj_8" };
//#endregion
//#region ../../node_modules/.pnpm/linkify-string@4.3.3_linkifyjs@4.3.3/node_modules/linkify-string/dist/linkify-string.mjs
function dN(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function fN(e) {
	return e.replace(/"/g, "&quot;");
}
function pN(e) {
	let t = [];
	for (let n in e) {
		let r = e[n] + "";
		t.push(`${n}="${fN(r)}"`);
	}
	return t.join(" ");
}
function mN({ tagName: e, attributes: t, content: n }) {
	return `<${e} ${pN(t)}>${dN(n)}</${e}>`;
}
function hN(e, t = {}) {
	t = new BM(t, mN);
	let n = iN(e), r = [];
	for (let e = 0; e < n.length; e++) {
		let i = n[e];
		i.t === "nl" && t.get("nl2br") ? r.push("<br>\n") : !i.isLink || !t.check(i) ? r.push(dN(i.toString())) : r.push(t.render(i));
	}
	return r.join("");
}
String.prototype.linkify || Object.defineProperty(String.prototype, "linkify", {
	writable: !1,
	value: function(e) {
		return hN(this, e);
	}
});
//#endregion
//#region ../../node_modules/.pnpm/linkify-html@4.3.3_patch_hash=1761c1eabe25d9fae83f74f27a20b3d24515840a4a8747bb04828df46bcfdea2_linkifyjs@4.3.3/node_modules/linkify-html/dist/linkify-html.mjs
var gN = {
	amp: "&",
	gt: ">",
	lt: "<",
	nbsp: "\xA0",
	quot: "\""
}, _N = /^#[xX]([A-Fa-f0-9]+)$/, vN = /^#([0-9]+)$/, yN = /^([A-Za-z0-9]+)$/, bN = function() {
	function e(e) {
		this.named = e;
	}
	return e.prototype.parse = function(e) {
		if (e) {
			var t = e.match(_N);
			if (t) return String.fromCharCode(parseInt(t[1], 16));
			if (t = e.match(vN), t) return String.fromCharCode(parseInt(t[1], 10));
			if (t = e.match(yN), t) return this.named[t[1]] || "&" + t[1] + ";";
		}
	}, e;
}(), xN = /[\t\n\f ]/, SN = /[A-Za-z]/, CN = /\r\n?/g;
function wN(e) {
	return xN.test(e);
}
function TN(e) {
	return SN.test(e);
}
function EN(e) {
	return e.replace(CN, "\n");
}
var DN = function() {
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
				e === "!" ? this.transitionTo("markupDeclarationOpen") : e === "/" ? this.transitionTo("endTagOpen") : (e === "@" || e === ":" || TN(e)) && (this.transitionTo("tagName"), this.tagNameBuffer = "", this.delegate.beginStartTag(), this.appendToTagName(e));
			},
			markupDeclarationOpen: function() {
				var e = this.consume();
				e === "-" && this.peek() === "-" ? (this.consume(), this.transitionTo("commentStart"), this.delegate.beginComment()) : e.toUpperCase() + this.input.substring(this.index, this.index + 6).toUpperCase() === "DOCTYPE" && (this.consume(), this.consume(), this.consume(), this.consume(), this.consume(), this.consume(), this.transitionTo("doctype"), this.delegate.beginDoctype && this.delegate.beginDoctype());
			},
			doctype: function() {
				wN(this.consume()) && this.transitionTo("beforeDoctypeName");
			},
			beforeDoctypeName: function() {
				var e = this.consume();
				wN(e) || (this.transitionTo("doctypeName"), this.delegate.appendToDoctypeName && this.delegate.appendToDoctypeName(e.toLowerCase()));
			},
			doctypeName: function() {
				var e = this.consume();
				wN(e) ? this.transitionTo("afterDoctypeName") : e === ">" ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : this.delegate.appendToDoctypeName && this.delegate.appendToDoctypeName(e.toLowerCase());
			},
			afterDoctypeName: function() {
				var e = this.consume();
				if (!wN(e)) {
					if (e === ">") this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData");
					else {
						var t = e.toUpperCase() + this.input.substring(this.index, this.index + 5).toUpperCase(), n = t.toUpperCase() === "PUBLIC", r = t.toUpperCase() === "SYSTEM";
						(n || r) && (this.consume(), this.consume(), this.consume(), this.consume(), this.consume(), this.consume()), n ? this.transitionTo("afterDoctypePublicKeyword") : r && this.transitionTo("afterDoctypeSystemKeyword");
					}
				}
			},
			afterDoctypePublicKeyword: function() {
				var e = this.peek();
				if (wN(e)) this.transitionTo("beforeDoctypePublicIdentifier"), this.consume();
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
				wN(e) ? this.transitionTo("betweenDoctypePublicAndSystemIdentifiers") : e === ">" ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : e === "\"" ? this.transitionTo("doctypeSystemIdentifierDoubleQuoted") : e === "'" && this.transitionTo("doctypeSystemIdentifierSingleQuoted");
			},
			betweenDoctypePublicAndSystemIdentifiers: function() {
				var e = this.consume();
				wN(e) || (e === ">" ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : e === "\"" ? this.transitionTo("doctypeSystemIdentifierDoubleQuoted") : e === "'" && this.transitionTo("doctypeSystemIdentifierSingleQuoted"));
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
				wN(e) || e === ">" && (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData"));
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
				wN(e) ? this.transitionTo("beforeAttributeName") : e === "/" ? this.transitionTo("selfClosingStartTag") : e === ">" ? (this.delegate.finishTag(), this.transitionTo("beforeData")) : this.appendToTagName(e);
			},
			endTagName: function() {
				var e = this.consume();
				wN(e) ? (this.transitionTo("beforeAttributeName"), this.tagNameBuffer = "") : e === "/" ? (this.transitionTo("selfClosingStartTag"), this.tagNameBuffer = "") : e === ">" ? (this.delegate.finishTag(), this.transitionTo("beforeData"), this.tagNameBuffer = "") : this.appendToTagName(e);
			},
			beforeAttributeName: function() {
				var e = this.peek();
				if (wN(e)) {
					this.consume();
					return;
				}
				e === "/" ? (this.transitionTo("selfClosingStartTag"), this.consume()) : e === ">" ? (this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : e === "=" ? (this.delegate.reportSyntaxError("attribute name cannot start with equals sign"), this.transitionTo("attributeName"), this.delegate.beginAttribute(), this.consume(), this.delegate.appendToAttributeName(e)) : (this.transitionTo("attributeName"), this.delegate.beginAttribute());
			},
			attributeName: function() {
				var e = this.peek();
				wN(e) ? (this.transitionTo("afterAttributeName"), this.consume()) : e === "/" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("selfClosingStartTag")) : e === "=" ? (this.transitionTo("beforeAttributeValue"), this.consume()) : e === ">" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : e === "\"" || e === "'" || e === "<" ? (this.delegate.reportSyntaxError(e + " is not a valid character within attribute names"), this.consume(), this.delegate.appendToAttributeName(e)) : (this.consume(), this.delegate.appendToAttributeName(e));
			},
			afterAttributeName: function() {
				var e = this.peek();
				if (wN(e)) {
					this.consume();
					return;
				}
				e === "/" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("selfClosingStartTag")) : e === "=" ? (this.consume(), this.transitionTo("beforeAttributeValue")) : e === ">" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.transitionTo("attributeName"), this.delegate.beginAttribute(), this.consume(), this.delegate.appendToAttributeName(e));
			},
			beforeAttributeValue: function() {
				var e = this.peek();
				wN(e) ? this.consume() : e === "\"" ? (this.transitionTo("attributeValueDoubleQuoted"), this.delegate.beginAttributeValue(!0), this.consume()) : e === "'" ? (this.transitionTo("attributeValueSingleQuoted"), this.delegate.beginAttributeValue(!0), this.consume()) : e === ">" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : (this.transitionTo("attributeValueUnquoted"), this.delegate.beginAttributeValue(!1), this.consume(), this.delegate.appendToAttributeValue(e));
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
				wN(e) ? (this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("beforeAttributeName")) : e === "/" ? (this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("selfClosingStartTag")) : e === "&" ? (this.consume(), this.delegate.appendToAttributeValue(this.consumeCharRef() || "&")) : e === ">" ? (this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : (this.consume(), this.delegate.appendToAttributeValue(e));
			},
			afterAttributeValueQuoted: function() {
				var e = this.peek();
				wN(e) ? (this.consume(), this.transitionTo("beforeAttributeName")) : e === "/" ? (this.consume(), this.transitionTo("selfClosingStartTag")) : e === ">" ? (this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : this.transitionTo("beforeAttributeName");
			},
			selfClosingStartTag: function() {
				this.peek() === ">" ? (this.consume(), this.delegate.markTagAsSelfClosing(), this.delegate.finishTag(), this.transitionTo("beforeData")) : this.transitionTo("beforeAttributeName");
			},
			endTagOpen: function() {
				var e = this.consume();
				(e === "@" || e === ":" || TN(e)) && (this.transitionTo("endTagName"), this.tagNameBuffer = "", this.delegate.beginEndTag(), this.appendToTagName(e));
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
		for (this.input += EN(e); this.index < this.input.length;) {
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
}(), ON = function() {
	function e(e, t) {
		t === void 0 && (t = {}), this.options = t, this.token = null, this.startLine = 1, this.startColumn = 0, this.tokens = [], this.tokenizer = new DN(this, e, t.mode), this._currentAttribute = void 0;
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
function kN(e, t) {
	return new ON(new bN(gN), t).tokenize(e);
}
var AN = "LinkifyResult", jN = "StartTag", MN = "EndTag", NN = "Chars", PN = "Comment", FN = "Doctype";
function IN(e, t = {}) {
	let n = kN(e), r = [], i = [], a = new BM(t, zN);
	for (let e = 0; e < n.length; e++) {
		let t = n[e];
		if (t.type === jN) {
			r.push(t);
			let i = t.tagName.toUpperCase();
			if (!(i === "A" || a.ignoreTags.indexOf(i) >= 0)) continue;
			let o = r.length;
			RN(i, n, ++e, r), e += r.length - o - 1;
		} else if (t.type !== NN) r.push(t);
		else {
			let e = LN(t.chars, a);
			r.push.apply(r, e);
		}
	}
	for (let e = 0; e < r.length; e++) {
		let t = r[e];
		switch (t.type) {
			case AN:
				i.push(t.rendered);
				break;
			case jN: {
				let e = "<" + t.tagName;
				t.attributes.length > 0 && (e += " " + UN(t.attributes).join(" ")), t.selfClosing && (e += " /"), e += ">", i.push(e);
				break;
			}
			case MN:
				i.push(`</${t.tagName}>`);
				break;
			case NN:
				i.push(BN(t.chars));
				break;
			case PN:
				i.push(`<!--${BN(t.chars)}-->`);
				break;
			case FN: {
				let e = `<!DOCTYPE ${t.name}`;
				t.publicIdentifier && (e += ` PUBLIC "${t.publicIdentifier}"`), t.systemIdentifier && (e += ` "${t.systemIdentifier}"`), e += ">", i.push(e);
				break;
			}
		}
	}
	return i.join("");
}
function LN(e, t) {
	let n = iN(e), r = [];
	for (let e = 0; e < n.length; e++) {
		let i = n[e];
		i.t === "nl" && t.get("nl2br") ? r.push({
			type: jN,
			tagName: "br",
			attributes: [],
			selfClosing: !0
		}) : !i.isLink || !t.check(i) ? r.push({
			type: NN,
			chars: i.toString()
		}) : r.push({
			type: AN,
			rendered: t.render(i)
		});
	}
	return r;
}
function RN(e, t, n, r) {
	let i = 1;
	for (; n < t.length && i > 0;) {
		let a = t[n];
		a.type === jN && a.tagName.toUpperCase() === e ? i++ : a.type === MN && a.tagName.toUpperCase() === e && i--, r.push(a), n++;
	}
	return r;
}
function zN({ tagName: e, attributes: t, content: n }) {
	return `<${e} ${HN(t)}>${BN(n)}</${e}>`;
}
function BN(e) {
	return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function VN(e) {
	return e.replace(/"/g, "&quot;");
}
function HN(e) {
	let t = [];
	for (let n in e) {
		let r = e[n] + "";
		t.push(`${n}="${VN(r)}"`);
	}
	return t.join(" ");
}
function UN(e) {
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n][0], i = e[n][1] + "";
		t.push(`${r}="${VN(i)}"`);
	}
	return t;
}
//#endregion
//#region src/core/utils/linkify.ts
var WN = [
	"file",
	"mailto",
	"http",
	"https",
	"ftp",
	"ftps"
], GN = [
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
], KN = [...WN, ...GN], qN = /* @__PURE__ */ function(e) {
	return e.URL = "url", e.UserId = "userid", e.RoomAlias = "roomalias", e;
}({});
function JN({ scanner: e, parser: t, token: n, name: r }) {
	let { DOT: i, NUM: a, COLON: o, SYM: s, SLASH: c, EQUALS: l, HYPHEN: u, UNDERSCORE: d } = e.tokens, { domain: f } = e.tokens.groups, p = [
		i,
		s,
		c,
		l,
		d,
		u
	], m = [u], h = new _j(UM(r, { isLink: !0 })), g = new _j(UM(r, { isLink: !0 })), _ = t.start.tt(n), v = new _j();
	_.ta(f, v), _.ta(p, v), v.ta(f, v), v.ta(p, v);
	let y = v.tt(o);
	y.ta(f, h), y.ta(m, h), h.ta(f, h), h.ta(m, h), h.tt(i, y), h.tt(o).tt(a, g);
}
function YN({ urlListener: e, roomAliasListener: t, userIdListener: n, urlTargetTransformer: r, hrefTransformer: i, onLinkClick: a }) {
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
			let n = { [`data-${QN}`]: "true" }, r = o(e, t);
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
function XN(e) {
	return aN(e);
}
function ZN(e) {
	return oN(e);
}
var QN = "linkified", $N = !1;
function eP() {
	$N ||= (tN("roomalias", ({ scanner: e, parser: t }) => {
		let n = e.tokens.POUND;
		JN({
			scanner: e,
			parser: t,
			token: n,
			name: "roomalias"
		});
	}), tN("userid", ({ scanner: e, parser: t }) => {
		let n = e.tokens.AT;
		JN({
			scanner: e,
			parser: t,
			token: n,
			name: "userid"
		});
	}), nN("mxc", !1), KN.forEach((e) => {
		WN.includes(e) || nN(e, GN.includes(e));
	}), !0);
}
eP();
//#endregion
//#region src/core/utils/LinkedText/LinkedTextContext.ts
var tP = l(null);
tP.displayName = "LinkedTextContext";
function nP() {
	let e = g(tP);
	if (!e) throw Error("useLinkedTextContextOpts must be used within an LinkedTextContext.Provider");
	return e;
}
//#endregion
//#region src/core/utils/LinkedText/LinkedText.tsx
function rP({ children: e, className: t, onLinkClick: n, ...r }) {
	let i = YN({
		...nP(),
		onLinkClick: n
	});
	return /* @__PURE__ */ (0, R.jsx)(lN, {
		className: (0, L.default)(uN.container, t),
		as: N,
		options: {
			...i,
			render: ge
		},
		...r,
		children: e
	});
}
//#endregion
//#region src/room/timeline/event-tile/MediaPreviewGroupView/MediaPreviewComponents/MediaPreviewComponents.tsx
function iP({ children: e }) {
	return /* @__PURE__ */ (0, R.jsx)("div", {
		className: tj.header,
		children: e
	});
}
function aP({ children: e }) {
	return /* @__PURE__ */ (0, R.jsx)(rP, {
		type: "body",
		size: "md",
		className: tj.body,
		children: e
	});
}
function oP({ header: e, headerUrl: t, body: n }) {
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: tj.textContent,
		children: [/* @__PURE__ */ (0, R.jsx)(iP, { children: t ? /* @__PURE__ */ (0, R.jsx)("a", {
			href: t,
			target: "_blank",
			children: e
		}) : e }), /* @__PURE__ */ (0, R.jsx)(aP, { children: n })]
	});
}
function sP({ icon: e, onClick: t, color: n }) {
	let { translate: r } = z();
	return e = o.cloneElement(e, { style: { color: n } }), t ? /* @__PURE__ */ (0, R.jsx)("div", {
		className: (0, L.default)(tj.icon, tj.iconClickable),
		children: /* @__PURE__ */ (0, R.jsx)("button", {
			onClick: t,
			type: "button",
			"aria-label": r("timeline|url_preview|view_file"),
			children: e
		})
	}) : /* @__PURE__ */ (0, R.jsx)("div", {
		className: tj.icon,
		children: e
	});
}
function cP({ buttons: e }) {
	return /* @__PURE__ */ (0, R.jsx)("div", {
		className: tj.buttonGroup,
		children: e.map(({ icon: e, onClick: t, label: n }) => /* @__PURE__ */ (0, R.jsx)("button", {
			"aria-label": n,
			type: "button",
			className: tj.button,
			onClick: t,
			children: e
		}, n))
	});
}
function lP({ children: e }) {
	return /* @__PURE__ */ (0, R.jsx)("div", {
		className: tj.leftGroup,
		children: e
	});
}
function uP(e) {
	return new Promise((t) => {
		let n = new window.Image();
		n.onload = () => t(n.naturalWidth > 0 && n.naturalHeight > 0), n.onerror = (n) => {
			console.error(`Failed to display image ${e}`, n), t(!1);
		}, n.src = e;
	});
}
function dP(e) {
	return new Promise((t) => {
		let n = document.createElement("video");
		n.preload = "metadata", n.onloadedmetadata = () => t(n.videoWidth > 0 && n.videoHeight > 0), n.onerror = (n) => {
			console.error(`Failed to display video ${e}`, n), t(!1);
		}, n.src = e;
	});
}
function fP(e) {
	return new Promise((t) => {
		let n = document.createElement("audio");
		n.preload = "metadata", n.onloadedmetadata = () => t(!0), n.onerror = (n) => {
			console.error(`Failed to display audio ${e}`, n), t(!1);
		}, n.src = e;
	});
}
function pP(e, t) {
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
function mP(e) {
	switch (e) {
		case "full": return tj.fullImage;
		case "banner": return tj.bannerImage;
		case "tallbanner": return tj.tallBannerImage;
	}
}
function hP(e) {
	switch (e) {
		case "full": return tj.fullVideo;
		case "banner": return tj.bannerVideo;
		case "tallbanner": return tj.tallBannerVideo;
	}
}
function gP({ image: e, imageAlt: t, imageOnClick: n, imageSize: r }) {
	let { translate: i } = z(), a = [tj.image, mP(r)], { valid: o, src: s } = pP(uP, e);
	if (!o || s !== e) return null;
	let c = /* @__PURE__ */ (0, R.jsx)("img", {
		src: e,
		alt: t
	});
	return /* @__PURE__ */ (0, R.jsx)("div", {
		className: (0, L.default)(a),
		children: n ? /* @__PURE__ */ (0, R.jsx)("button", {
			onClick: n,
			type: "button",
			"aria-label": i("timeline|url_preview|view_image"),
			children: c
		}) : c
	});
}
function _P({ video: e, videoOnClick: t, videoSize: n }) {
	let { translate: r } = z(), i = [tj.video, hP(n)], { valid: a, src: o } = pP(dP, e);
	if (!a || o !== e) return null;
	let s = /* @__PURE__ */ (0, R.jsx)("video", {
		src: e,
		controls: !0,
		preload: "metadata",
		children: /* @__PURE__ */ (0, R.jsx)("track", { kind: "captions" })
	});
	return /* @__PURE__ */ (0, R.jsx)("div", {
		className: (0, L.default)(i),
		children: t ? /* @__PURE__ */ (0, R.jsx)("button", {
			onClick: t,
			type: "button",
			"aria-label": r("timeline|url_preview|view_video"),
			children: s
		}) : s
	});
}
function vP({ audio: e, audioOnClick: t }) {
	let { translate: n } = z(), { valid: r, src: i } = pP(fP, e);
	if (!r || i !== e) return null;
	let a = /* @__PURE__ */ (0, R.jsx)("audio", {
		src: e,
		controls: !0,
		children: /* @__PURE__ */ (0, R.jsx)("track", { kind: "captions" })
	});
	return /* @__PURE__ */ (0, R.jsx)("div", {
		className: tj.audio,
		children: t ? /* @__PURE__ */ (0, R.jsx)("button", {
			onClick: t,
			type: "button",
			"aria-label": n("timeline|url_preview|view_audio"),
			children: a
		}) : a
	});
}
//#endregion
//#region src/room/timeline/event-tile/MediaPreviewGroupView/MediaPreviewTile/MediaPreviewTile.tsx
function yP(e) {
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: (0, L.default)(ej.tile, e.children ? ej.tileWithAbove : ej.tileWithoutAbove),
		children: [e.children, /* @__PURE__ */ (0, R.jsxs)("div", {
			className: ej.below,
			children: [/* @__PURE__ */ (0, R.jsxs)(lP, { children: [/* @__PURE__ */ (0, R.jsx)(sP, { ...e }), /* @__PURE__ */ (0, R.jsx)(oP, { ...e })] }), e.buttons && e.buttons.length !== 0 && /* @__PURE__ */ (0, R.jsx)(cP, { buttons: e.buttons })]
		})]
	});
}
function bP(e) {
	return /* @__PURE__ */ (0, R.jsx)(yP, {
		...e,
		children: /* @__PURE__ */ (0, R.jsx)(gP, { ...e })
	});
}
function xP(e) {
	return /* @__PURE__ */ (0, R.jsx)(yP, {
		...e,
		children: /* @__PURE__ */ (0, R.jsx)(_P, { ...e })
	});
}
function SP(e) {
	return /* @__PURE__ */ (0, R.jsx)(yP, {
		...e,
		children: /* @__PURE__ */ (0, R.jsx)(vP, { ...e })
	});
}
function CP(e) {
	return /* @__PURE__ */ (0, R.jsx)(yP, { ...e });
}
//#endregion
//#region src/room/timeline/event-tile/MediaPreviewGroupView/MediaPreviewGroupView.tsx
function wP({ collapsed: e, hiddenCount: t, onToggle: n }) {
	let { translate: r } = z();
	return /* @__PURE__ */ (0, R.jsx)(k, {
		className: $A.toggleButton,
		kind: "tertiary",
		size: "md",
		onClick: n,
		children: e ? r("timeline|url_preview|show_n_more", { count: t }) : r("action|collapse")
	});
}
function TP({ vm: e, className: t }) {
	let { entries: n, collapse: r } = V(e);
	return n.length === 0 ? null : /* @__PURE__ */ (0, R.jsxs)("div", {
		className: (0, L.default)(t, $A.container),
		children: [n.map((e) => {
			switch (e.type) {
				case "text": return /* @__PURE__ */ (0, R.jsx)(CP, { ...e }, e.id);
				case "image": return /* @__PURE__ */ (0, R.jsx)(bP, { ...e }, e.id);
				case "video": return /* @__PURE__ */ (0, R.jsx)(xP, { ...e }, e.id);
				case "audio": return /* @__PURE__ */ (0, R.jsx)(SP, { ...e }, e.id);
			}
		}), r && /* @__PURE__ */ (0, R.jsx)(wP, { ...r })]
	});
}
//#endregion
//#region src/room/timeline/event-tile/MediaPreviewGroupView/icons.tsx
function EP(e) {
	return {
		icon: /* @__PURE__ */ (0, R.jsx)(fC, {}),
		color: "var(--cpd-color-text-decorative-4)"
	};
}
function DP() {
	return {
		icon: /* @__PURE__ */ (0, R.jsx)(JC, {}),
		color: "var(--cpd-color-text-decorative-4)"
	};
}
var OP = {
	richItem: "_richItem_1c0uo_8",
	avatar: "_avatar_1c0uo_36",
	title: "_title_1c0uo_41",
	description: "_description_1c0uo_47",
	timestamp: "_timestamp_1c0uo_51",
	checkmark: "_checkmark_1c0uo_69"
}, kP = p(function({ avatar: e, title: t, description: n, timestamp: r, selected: i, ...a }) {
	let o = z();
	return /* @__PURE__ */ (0, R.jsxs)("li", {
		className: OP.richItem,
		role: "option",
		tabIndex: -1,
		"aria-selected": i,
		"aria-label": t,
		...a,
		children: [
			i ? /* @__PURE__ */ (0, R.jsx)(AP, {}) : /* @__PURE__ */ (0, R.jsx)(B, {
				className: OP.avatar,
				children: e
			}),
			/* @__PURE__ */ (0, R.jsx)("span", {
				className: OP.title,
				children: t
			}),
			/* @__PURE__ */ (0, R.jsx)("span", {
				className: OP.description,
				children: n
			}),
			r && /* @__PURE__ */ (0, R.jsx)("span", {
				role: "timer",
				className: OP.timestamp,
				children: o.humanizeTime(r)
			})
		]
	});
});
function AP() {
	return /* @__PURE__ */ (0, R.jsx)(B, {
		align: "center",
		justify: "center",
		"aria-hidden": "true",
		className: OP.checkmark,
		children: /* @__PURE__ */ (0, R.jsx)(WS, {
			width: "24px",
			height: "24px",
			color: "var(--cpd-color-icon-on-solid-primary)"
		})
	});
}
var jP = {
	richList: "_richList_1h3wz_8",
	title: "_title_1h3wz_12",
	content: "_content_1h3wz_18",
	empty: "_empty_1h3wz_26"
};
//#endregion
//#region src/core/hooks/useListKeyboardNavigation.ts
function MP() {
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
function NP({ children: e, title: t, className: n, titleAttributes: r, isEmpty: i = !1, ...a }) {
	let o = v(), { listRef: s, onKeyDown: c, onFocus: l } = MP();
	return /* @__PURE__ */ (0, R.jsxs)(B, {
		className: (0, L.default)(jP.richList, n),
		direction: "column",
		...a,
		children: [/* @__PURE__ */ (0, R.jsx)("span", {
			id: o,
			className: jP.title,
			...r,
			children: t
		}), i ? /* @__PURE__ */ (0, R.jsx)("span", {
			className: jP.empty,
			children: e
		}) : /* @__PURE__ */ (0, R.jsx)("ul", {
			ref: s,
			role: "listbox",
			className: jP.content,
			"aria-labelledby": o,
			tabIndex: 0,
			onKeyDown: c,
			onFocus: l,
			children: e
		})]
	});
}
var PP = { title: "_title_s91uo_8" };
//#endregion
//#region src/room-list/RoomListHeaderView/menu/OptionMenuView.tsx
function FP({ vm: e }) {
	let { translate: t } = z(), [n, r] = T(!1), { activeSortOption: i, isMessagePreviewEnabled: a } = V(e);
	return /* @__PURE__ */ (0, R.jsxs)(_e, {
		open: n,
		onOpenChange: r,
		title: t("room_list|room_options"),
		showTitle: !1,
		align: "start",
		trigger: /* @__PURE__ */ (0, R.jsx)(j, {
			tooltip: t("room_list|room_options"),
			"aria-label": t("room_list|room_options"),
			size: "28px",
			style: { padding: "4px" },
			children: /* @__PURE__ */ (0, R.jsx)(fw, {})
		}),
		children: [
			/* @__PURE__ */ (0, R.jsx)(ve, {
				title: t("room_list|sort"),
				className: PP.title
			}),
			/* @__PURE__ */ (0, R.jsx)(ye, {
				label: t("room_list|sort_type|activity"),
				checked: i === "recent",
				onSelect: () => e.sort("recent")
			}),
			/* @__PURE__ */ (0, R.jsx)(ye, {
				label: t("room_list|sort_type|unread_first"),
				checked: i === "unread-first",
				onSelect: () => e.sort("unread-first")
			}),
			/* @__PURE__ */ (0, R.jsx)(ye, {
				label: t("room_list|sort_type|atoz"),
				checked: i === "alphabetical",
				onSelect: () => e.sort("alphabetical")
			}),
			/* @__PURE__ */ (0, R.jsx)(ve, { title: t("room_list|appearance") }),
			/* @__PURE__ */ (0, R.jsx)(re, {
				label: t("room_list|show_message_previews"),
				onSelect: e.toggleMessagePreview,
				checked: a
			})
		]
	});
}
var IP = { button: "_button_1veqf_8" };
//#endregion
//#region src/room-list/RoomListHeaderView/menu/SpaceMenuView.tsx
function LP({ vm: e }) {
	let { translate: t } = z(), { canInviteInSpace: n, canAccessSpaceSettings: r, title: i } = V(e), [a, o] = T(!1);
	return /* @__PURE__ */ (0, R.jsxs)(_e, {
		open: a,
		onOpenChange: o,
		title: i,
		align: "start",
		trigger: /* @__PURE__ */ (0, R.jsx)(j, {
			className: IP.button,
			"aria-label": t("room_list|open_space_menu"),
			size: "24px",
			style: { padding: "2px" },
			children: /* @__PURE__ */ (0, R.jsx)(KS, {})
		}),
		children: [
			/* @__PURE__ */ (0, R.jsx)(M, {
				Icon: RC,
				label: t("room_list|space_menu|home"),
				onSelect: e.openSpaceHome,
				hideChevron: !0
			}),
			n && /* @__PURE__ */ (0, R.jsx)(M, {
				Icon: Ww,
				label: t("action|invite"),
				onSelect: e.inviteInSpace,
				hideChevron: !0
			}),
			/* @__PURE__ */ (0, R.jsx)(M, {
				Icon: bw,
				label: t("common|preferences"),
				onSelect: e.openSpacePreferences,
				hideChevron: !0
			}),
			r && /* @__PURE__ */ (0, R.jsx)(M, {
				Icon: Iw,
				label: t("room_list|space_menu|space_settings"),
				onSelect: e.openSpaceSettings,
				hideChevron: !0
			})
		]
	});
}
//#endregion
//#region src/room-list/RoomListHeaderView/menu/ComposeMenuView.tsx
function RP({ vm: e }) {
	let { translate: t } = z(), [n, r] = T(!1), { canCreateRoom: i, canCreateVideoRoom: a, displaySectionReleaseAnnouncement: o, areSectionsEnabled: s } = V(e), c = /* @__PURE__ */ (0, R.jsx)(j, {
		size: "28px",
		style: { padding: "4px" },
		tooltip: t("action|new_conversation"),
		children: /* @__PURE__ */ (0, R.jsx)(vw, {
			color: "var(--cpd-color-icon-secondary)",
			"aria-hidden": !0
		})
	});
	return o ? /* @__PURE__ */ (0, R.jsx)(be, {
		open: o,
		onClick: e.closeSectionReleaseAnnouncement,
		header: t("release_announcement|room_list_section_title"),
		description: t("release_announcement|room_list_section_description"),
		closeLabel: t("release_announcement|room_list_section_close"),
		children: c
	}) : /* @__PURE__ */ (0, R.jsxs)(_e, {
		open: n,
		onOpenChange: r,
		showTitle: !1,
		title: t("action|open_menu"),
		align: "start",
		trigger: c,
		children: [
			/* @__PURE__ */ (0, R.jsx)(M, {
				Icon: BS,
				label: t("action|start_chat"),
				onSelect: e.createChatRoom,
				hideChevron: !0
			}),
			i && /* @__PURE__ */ (0, R.jsx)(M, {
				Icon: Aw,
				label: t("action|new_room"),
				onSelect: e.createRoom,
				hideChevron: !0
			}),
			a && /* @__PURE__ */ (0, R.jsx)(M, {
				Icon: Qw,
				label: t("action|new_video_room"),
				onSelect: e.createVideoRoom,
				hideChevron: !0
			}),
			s && /* @__PURE__ */ (0, R.jsx)(M, {
				Icon: Pw,
				label: t("action|new_section"),
				onSelect: e.createSection,
				hideChevron: !0
			})
		]
	});
}
var zP = {
	header: "_header_1b9rm_8",
	container: "_container_1b9rm_13",
	title: "_title_1b9rm_19"
};
//#endregion
//#region src/room-list/RoomListHeaderView/RoomListHeaderView.tsx
function BP({ vm: e }) {
	let { translate: t } = z(), { title: n, displaySpaceMenu: r, collapseSections: i, areSectionsEnabled: a, canCreateRoom: o, canCreateVideoRoom: s } = V(e), c = !a && !o && !s;
	return /* @__PURE__ */ (0, R.jsx)(B, {
		as: "header",
		className: zP.header,
		"aria-label": t("room|context_menu|title"),
		align: "end",
		"data-testid": "room-list-header",
		children: /* @__PURE__ */ (0, R.jsxs)(B, {
			className: zP.container,
			justify: "space-between",
			align: "center",
			gap: "var(--cpd-space-3x)",
			children: [/* @__PURE__ */ (0, R.jsxs)(B, {
				className: zP.title,
				align: "center",
				gap: "var(--cpd-space-1x)",
				children: [/* @__PURE__ */ (0, R.jsx)(ce, {
					size: "sm",
					title: n,
					children: n
				}), r && /* @__PURE__ */ (0, R.jsx)(LP, { vm: e })]
			}), /* @__PURE__ */ (0, R.jsxs)(B, {
				align: "center",
				gap: "var(--cpd-space-2x)",
				children: [
					/* @__PURE__ */ (0, R.jsx)(FP, { vm: e }),
					a && i && /* @__PURE__ */ (0, R.jsx)(j, {
						size: "28px",
						style: { padding: "4px" },
						onClick: () => e.collapseOrExpandSections(),
						tooltip: t(i === "collapse" ? "room_list|collapse_all_sections" : "room_list|expand_all_sections"),
						children: i === "collapse" ? /* @__PURE__ */ (0, R.jsx)(nC, {
							color: "var(--cpd-color-icon-secondary)",
							"aria-hidden": !0
						}) : /* @__PURE__ */ (0, R.jsx)(EC, {
							color: "var(--cpd-color-icon-secondary)",
							"aria-hidden": !0
						})
					}),
					c ? /* @__PURE__ */ (0, R.jsx)(j, {
						size: "28px",
						style: { padding: "4px" },
						onClick: (t) => e.createChatRoom(t.nativeEvent),
						tooltip: t("action|start_chat"),
						children: /* @__PURE__ */ (0, R.jsx)(BS, {
							color: "var(--cpd-color-icon-secondary)",
							"aria-hidden": !0
						})
					}) : /* @__PURE__ */ (0, R.jsx)(RP, { vm: e })
				]
			})]
		})
	});
}
var VP = {
	view: "_view_zk0ja_8",
	search: "_search_zk0ja_16",
	search_container: "_search_container_zk0ja_28",
	search_text: "_search_text_zk0ja_40"
};
//#endregion
//#region src/room-list/RoomListSearchView/RoomListSearchView.tsx
function HP({ vm: e }) {
	let { translate: t } = z(), { displayExploreButton: n, displayDialButton: r, searchShortcut: i } = V(e);
	return /* @__PURE__ */ (0, R.jsxs)(B, {
		"data-testid": "room-list-search",
		className: VP.view,
		role: "search",
		gap: "var(--cpd-space-2x)",
		align: "center",
		children: [
			/* @__PURE__ */ (0, R.jsx)(k, {
				id: "room-list-search-button",
				className: VP.search,
				kind: "secondary",
				size: "md",
				Icon: Mw,
				onClick: e.onSearchClick,
				children: /* @__PURE__ */ (0, R.jsxs)(B, {
					className: VP.search_container,
					as: "span",
					justify: "space-between",
					children: [/* @__PURE__ */ (0, R.jsx)("span", {
						className: VP.search_text,
						children: t("action|search")
					}), /* @__PURE__ */ (0, R.jsx)("kbd", { children: i })]
				})
			}),
			r && /* @__PURE__ */ (0, R.jsx)(k, {
				kind: "secondary",
				size: "md",
				Icon: uC,
				iconOnly: !0,
				"aria-label": t("left_panel|open_dial_pad"),
				onClick: e.onDialPadClick
			}),
			n && /* @__PURE__ */ (0, R.jsx)(k, {
				kind: "secondary",
				size: "md",
				Icon: AC,
				iconOnly: !0,
				"aria-label": t("action|explore_rooms"),
				onClick: e.onExploreClick
			})
		]
	});
}
var UP = { container: "_container_17t7g_8" };
//#endregion
//#region src/room-list/SectionCreationView/SectionFormView.tsx
function WP({ vm: e, className: t }) {
	let { translate: n } = z(), { value: r, step: i } = V(e);
	return /* @__PURE__ */ (0, R.jsxs)(B, {
		gap: "var(--cpd-space-6x)",
		direction: "column",
		align: "stretch",
		className: t,
		children: [i === "creation" && /* @__PURE__ */ (0, R.jsx)(N, {
			as: "span",
			weight: "medium",
			children: n("room_list|section_creation|description")
		}), /* @__PURE__ */ (0, R.jsx)(se.Root, {
			className: UP.form,
			onSubmit: (t) => {
				t.preventDefault(), e.createOrEditSection();
			},
			children: /* @__PURE__ */ (0, R.jsxs)(se.Field, {
				name: "sectionName",
				children: [/* @__PURE__ */ (0, R.jsxs)(se.Label, { children: [" ", n("room_list|section_creation|label")] }), /* @__PURE__ */ (0, R.jsx)(se.TextControl, {
					value: r,
					onChange: (t) => e.setSection(t.target.value),
					required: !0
				})]
			})
		})]
	});
}
var GP = {
	list: "_list_1pgfw_8",
	emptyList: "_emptyList_1pgfw_15"
};
//#endregion
//#region src/core/RoomPickerView/RoomPickerView.tsx
function KP({ vm: e, className: t }) {
	let { rooms: n, selectedRooms: r, placeholder: i, listTitle: a, emptyListText: s } = V(e), c = n.length === 0, l = o.useRef(null);
	return /* @__PURE__ */ (0, R.jsxs)(B, {
		gap: "var(--cpd-space-4x)",
		direction: "column",
		align: "stretch",
		className: t,
		children: [/* @__PURE__ */ (0, R.jsx)(mO, {
			onRemoveChildren: e.unSelectLastRoom,
			inputProps: {
				ref: l,
				placeholder: i,
				onChange: (t) => e.search(t.currentTarget.value)
			},
			children: r.map((t) => /* @__PURE__ */ (0, R.jsx)(sO, {
				label: t.name,
				onClick: () => e.toggleRoom(t.id),
				children: e.renderRoomAvatar(t, "20px")
			}, t.id))
		}), c ? /* @__PURE__ */ (0, R.jsx)(N, {
			as: "div",
			size: "lg",
			className: (0, L.default)(GP.list, GP.emptyList),
			children: s
		}) : /* @__PURE__ */ (0, R.jsx)(NP, {
			title: a,
			className: GP.list,
			children: n.map((t) => /* @__PURE__ */ (0, R.jsx)(kP, {
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
function qP({ vm: e }) {
	let { step: t } = V(e);
	return /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [(t === "creation" || t === "editing") && /* @__PURE__ */ (0, R.jsx)(WP, {
		vm: e,
		className: UP.container
	}), t === "add_rooms" && /* @__PURE__ */ (0, R.jsx)(KP, {
		vm: e,
		className: UP.container
	})] });
}
//#endregion
//#region src/room-list/RoomListPrimaryFilters/useCollapseFilters.ts
function JP(e, t) {
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
function YP(e, t, n) {
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
var XP = {
	roomListPrimaryFilters: "_roomListPrimaryFilters_kikqh_8",
	list: "_list_kikqh_17",
	iconButton: "_iconButton_kikqh_27"
}, ZP = (e) => {
	switch (e) {
		case "unread": return H("room_list|filters|unread");
		case "people": return H("room_list|filters|people");
		case "rooms": return H("room_list|filters|rooms");
		case "favourite": return H("room_list|filters|favourite");
		case "mentions": return H("room_list|filters|mentions");
		case "invites": return H("room_list|filters|invites");
		case "low_priority": return H("room_list|filters|low_priority");
	}
}, QP = p(function({ filterIds: e, activeFilterId: t, onToggleFilter: n }) {
	let r = v(), [i, a] = T(!1), { ref: o, isWrapping: s, wrappingIndex: c } = JP(i, "wrapping"), l = YP(e, t, c);
	return /* @__PURE__ */ (0, R.jsxs)(B, {
		className: XP.roomListPrimaryFilters,
		"data-testid": "primary-filters",
		gap: "var(--cpd-space-3x)",
		direction: "row-reverse",
		justify: "space-between",
		children: [s && /* @__PURE__ */ (0, R.jsx)(j, {
			kind: "secondary",
			"aria-expanded": i,
			"aria-controls": r,
			className: XP.iconButton,
			"aria-label": H(i ? "room_list|collapse_filters" : "room_list|expand_filters"),
			size: "28px",
			onClick: () => a((e) => !e),
			children: /* @__PURE__ */ (0, R.jsx)(KS, {})
		}), /* @__PURE__ */ (0, R.jsx)(B, {
			id: r,
			as: "div",
			role: "listbox",
			"aria-label": H("room_list|primary_filters"),
			align: "center",
			gap: "var(--cpd-space-2x)",
			wrap: "wrap",
			className: XP.list,
			ref: o,
			children: l.map((e, r) => /* @__PURE__ */ (0, R.jsx)(ne, {
				role: "option",
				tabIndex: 0,
				"aria-selected": e === t,
				selected: e === t,
				onClick: () => n(e),
				children: ZP(e)
			}, `${e}-${r}`))
		})]
	});
}), $P = { skeleton: "_skeleton_1h0mx_8" }, eF = () => /* @__PURE__ */ (0, R.jsx)("div", { className: $P.skeleton }), tF = {
	genericPlaceholder: "_genericPlaceholder_1sxid_8",
	title: "_title_1sxid_16",
	description: "_description_1sxid_21",
	defaultPlaceholder: "_defaultPlaceholder_1sxid_27"
}, nF = ({ vm: e }) => {
	let t = V(e);
	if (!t.activeFilterId) return /* @__PURE__ */ (0, R.jsx)(rF, {
		title: H("room_list|empty|no_chats"),
		description: t.canCreateRoom ? H("room_list|empty|no_chats_description") : H("room_list|empty|no_chats_description_no_room_rights"),
		children: /* @__PURE__ */ (0, R.jsxs)(B, {
			className: tF.defaultPlaceholder,
			align: "center",
			justify: "center",
			direction: "column",
			gap: "var(--cpd-space-4x)",
			children: [/* @__PURE__ */ (0, R.jsx)(k, {
				size: "md",
				kind: "secondary",
				Icon: BS,
				onClick: e.createChatRoom,
				children: H("action|start_chat")
			}), t.canCreateRoom && /* @__PURE__ */ (0, R.jsx)(k, {
				size: "md",
				kind: "secondary",
				Icon: Aw,
				onClick: e.createRoom,
				children: H("action|new_room")
			})]
		})
	});
	switch (t.activeFilterId) {
		case "people": return /* @__PURE__ */ (0, R.jsx)(rF, {
			title: H("room_list|empty|no_people"),
			description: H("room_list|empty|no_people_description")
		});
		case "rooms": return /* @__PURE__ */ (0, R.jsx)(rF, {
			title: H("room_list|empty|no_rooms"),
			description: H("room_list|empty|no_rooms_description")
		});
		case "unread": return /* @__PURE__ */ (0, R.jsx)(iF, {
			title: H("room_list|empty|no_unread"),
			action: H("room_list|empty|show_chats"),
			onAction: () => e.onToggleFilter(t.activeFilterId)
		});
		case "invites": return /* @__PURE__ */ (0, R.jsx)(iF, {
			title: H("room_list|empty|no_invites"),
			action: H("room_list|empty|show_activity"),
			onAction: () => e.onToggleFilter(t.activeFilterId)
		});
		case "mentions": return /* @__PURE__ */ (0, R.jsx)(iF, {
			title: H("room_list|empty|no_mentions"),
			action: H("room_list|empty|show_activity"),
			onAction: () => e.onToggleFilter(t.activeFilterId)
		});
		default: return /* @__PURE__ */ (0, R.jsx)(rF, {
			title: H("room_list|empty|no_chats"),
			description: H("room_list|empty|no_chats_description")
		});
	}
};
function rF({ title: e, description: t, children: n }) {
	return /* @__PURE__ */ (0, R.jsxs)(B, {
		"data-testid": "empty-room-list",
		className: tF.genericPlaceholder,
		direction: "column",
		align: "stretch",
		justify: "center",
		gap: "var(--cpd-space-2x)",
		children: [
			/* @__PURE__ */ (0, R.jsx)("span", {
				className: tF.title,
				children: e
			}),
			t && /* @__PURE__ */ (0, R.jsx)("span", {
				className: tF.description,
				children: t
			}),
			n
		]
	});
}
function iF({ title: e, action: t, onAction: n }) {
	return /* @__PURE__ */ (0, R.jsx)(rF, {
		title: e,
		children: n && /* @__PURE__ */ (0, R.jsx)(k, {
			kind: "tertiary",
			onClick: n,
			children: t
		})
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@preact+signals-core@1.14.2/node_modules/@preact/signals-core/dist/signals-core.module.js
var aF = Symbol.for("preact-signals");
function oF() {
	if (uF > 1) uF--;
	else {
		var e, t = !1;
		for ((function() {
			var e = mF;
			for (mF = void 0; e !== void 0;) e.S.v === e.v && (e.S.i = e.i), e = e.o;
		})(); lF !== void 0;) {
			var n = lF;
			for (lF = void 0, dF++; n !== void 0;) {
				var r = n.u;
				if (n.u = void 0, n.f &= -3, !(8 & n.f) && yF(n)) try {
					n.c();
				} catch (n) {
					t ||= (e = n, !0);
				}
				n = r;
			}
		}
		if (dF = 0, uF--, t) throw e;
	}
}
function sF(e) {
	if (uF > 0) return e();
	pF = ++fF, uF++;
	try {
		return e();
	} finally {
		oF();
	}
}
var cF = void 0;
function J(e) {
	var t = cF;
	cF = void 0;
	try {
		return e();
	} finally {
		cF = t;
	}
}
var lF = void 0, uF = 0, dF = 0, fF = 0, pF = 0, mF = void 0, hF = 0;
function gF(e) {
	if (cF !== void 0) {
		var t = e.n;
		if (t === void 0 || t.t !== cF) return t = {
			i: 0,
			S: e,
			p: cF.s,
			n: void 0,
			t: cF,
			e: void 0,
			x: void 0,
			r: t
		}, cF.s !== void 0 && (cF.s.n = t), cF.s = t, e.n = t, 32 & cF.f && e.S(t), t;
		if (t.i === -1) return t.i = 0, t.n !== void 0 && (t.n.p = t.p, t.p !== void 0 && (t.p.n = t.n), t.p = cF.s, t.n = void 0, cF.s.n = t, cF.s = t), t;
	}
}
function _F(e, t) {
	this.v = e, this.i = 0, this.n = void 0, this.t = void 0, this.l = 0, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
_F.prototype.brand = aF, _F.prototype.h = function() {
	return !0;
}, _F.prototype.S = function(e) {
	var t = this, n = this.t;
	n !== e && e.e === void 0 && (e.x = n, this.t = e, n === void 0 ? J(function() {
		var e;
		(e = t.W) == null || e.call(t);
	}) : n.e = e);
}, _F.prototype.U = function(e) {
	var t = this;
	if (this.t !== void 0) {
		var n = e.e, r = e.x;
		n !== void 0 && (n.x = r, e.e = void 0), r !== void 0 && (r.e = n, e.x = void 0), e === this.t && (this.t = r, r === void 0 && J(function() {
			var e;
			(e = t.Z) == null || e.call(t);
		}));
	}
}, _F.prototype.subscribe = function(e) {
	var t = this;
	return OF(function() {
		var n = t.value, r = cF;
		cF = void 0;
		try {
			e(n);
		} finally {
			cF = r;
		}
	}, { name: "sub" });
}, _F.prototype.valueOf = function() {
	return this.value;
}, _F.prototype.toString = function() {
	return this.value + "";
}, _F.prototype.toJSON = function() {
	return this.value;
}, _F.prototype.peek = function() {
	var e = this;
	return J(function() {
		return e.value;
	});
}, Object.defineProperty(_F.prototype, "value", {
	get: function() {
		var e = gF(this);
		return e !== void 0 && (e.i = this.i), this.v;
	},
	set: function(e) {
		if (e !== this.v) {
			if (dF > 100) throw Error("Cycle detected");
			(function(e) {
				uF !== 0 && dF === 0 && e.l !== pF && (e.l = pF, mF = {
					S: e,
					v: e.v,
					i: e.i,
					o: mF
				});
			})(this), this.v = e, this.i++, hF++, uF++;
			try {
				for (var t = this.t; t !== void 0; t = t.x) t.t.N();
			} finally {
				oF();
			}
		}
	}
});
function vF(e, t) {
	return new _F(e, t);
}
function yF(e) {
	for (var t = e.s; t !== void 0; t = t.n) if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
	return !1;
}
function bF(e) {
	for (var t = e.s; t !== void 0; t = t.n) {
		var n = t.S.n;
		if (n !== void 0 && (t.r = n), t.S.n = t, t.i = -1, t.n === void 0) {
			e.s = t;
			break;
		}
	}
}
function xF(e) {
	for (var t = e.s, n = void 0; t !== void 0;) {
		var r = t.p;
		t.i === -1 ? (t.S.U(t), r !== void 0 && (r.n = t.n), t.n !== void 0 && (t.n.p = r)) : n = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = r;
	}
	e.s = n;
}
function SF(e, t) {
	_F.call(this, void 0), this.x = e, this.s = void 0, this.g = hF - 1, this.f = 4, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
SF.prototype = new _F(), SF.prototype.h = function() {
	if (this.f &= -3, 1 & this.f) return !1;
	if ((36 & this.f) == 32 || (this.f &= -5, this.g === hF)) return !0;
	if (this.g = hF, this.f |= 1, this.i > 0 && !yF(this)) return this.f &= -2, !0;
	var e = cF;
	try {
		bF(this), cF = this;
		var t = this.x();
		(16 & this.f || this.v !== t || this.i === 0) && (this.v = t, this.f &= -17, this.i++);
	} catch (e) {
		this.v = e, this.f |= 16, this.i++;
	}
	return cF = e, xF(this), this.f &= -2, !0;
}, SF.prototype.S = function(e) {
	if (this.t === void 0) {
		this.f |= 36;
		for (var t = this.s; t !== void 0; t = t.n) t.S.S(t);
	}
	_F.prototype.S.call(this, e);
}, SF.prototype.U = function(e) {
	if (this.t !== void 0 && (_F.prototype.U.call(this, e), this.t === void 0)) {
		this.f &= -33;
		for (var t = this.s; t !== void 0; t = t.n) t.S.U(t);
	}
}, SF.prototype.N = function() {
	if (!(2 & this.f)) {
		this.f |= 6;
		for (var e = this.t; e !== void 0; e = e.x) e.t.N();
	}
}, Object.defineProperty(SF.prototype, "value", { get: function() {
	if (1 & this.f) throw Error("Cycle detected");
	var e = gF(this);
	if (this.h(), e !== void 0 && (e.i = this.i), 16 & this.f) throw this.v;
	return this.v;
} });
function CF(e, t) {
	return new SF(e, t);
}
function wF(e) {
	var t = e.m;
	if (e.m = void 0, typeof t == "function") {
		uF++;
		var n = cF;
		cF = void 0;
		try {
			t();
		} catch (t) {
			throw e.f &= -2, e.f |= 8, TF(e), t;
		} finally {
			cF = n, oF();
		}
	}
}
function TF(e) {
	for (var t = e.s; t !== void 0; t = t.n) t.S.U(t);
	e.x = void 0, e.s = void 0, wF(e);
}
function EF(e) {
	if (cF !== this) throw Error("Out-of-order effect");
	xF(this), cF = e, this.f &= -2, 8 & this.f && TF(this), oF();
}
function DF(e, t) {
	this.x = e, this.m = void 0, this.s = void 0, this.u = void 0, this.f = 32, this.name = t?.name;
}
DF.prototype.c = function() {
	var e = this.S();
	try {
		if (8 & this.f || this.x === void 0) return;
		var t = this.x();
		typeof t == "function" && (this.m = t);
	} finally {
		e();
	}
}, DF.prototype.S = function() {
	if (1 & this.f) throw Error("Cycle detected");
	this.f |= 1, this.f &= -9, wF(this), bF(this), uF++;
	var e = cF;
	return cF = this, EF.bind(this, e);
}, DF.prototype.N = function() {
	2 & this.f || (this.f |= 2, this.u = lF, lF = this);
}, DF.prototype.d = function() {
	this.f |= 8, 1 & this.f || TF(this);
}, DF.prototype.dispose = function() {
	this.d();
};
function OF(e, t) {
	var n = new DF(e, t);
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
var kF = Object.create, AF = Object.defineProperty, jF = Object.defineProperties, MF = Object.getOwnPropertyDescriptor, NF = Object.getOwnPropertyDescriptors, PF = Object.getOwnPropertySymbols, FF = Object.prototype.hasOwnProperty, IF = Object.prototype.propertyIsEnumerable, LF = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), RF = (e) => {
	throw TypeError(e);
}, zF = (e, t, n) => t in e ? AF(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, BF = (e, t) => {
	for (var n in t ||= {}) FF.call(t, n) && zF(e, n, t[n]);
	if (PF) for (var n of PF(t)) IF.call(t, n) && zF(e, n, t[n]);
	return e;
}, VF = (e, t) => jF(e, NF(t)), HF = (e, t) => AF(e, "name", {
	value: t,
	configurable: !0
}), UF = (e) => [
	,
	,
	,
	kF(e?.[LF("metadata")] ?? null)
], WF = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], GF = (e) => e !== void 0 && typeof e != "function" ? RF("Function expected") : e, KF = (e, t, n, r, i) => ({
	kind: WF[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? RF("Already initialized") : i.push(GF(e || null))
}), qF = (e, t) => zF(t, LF("metadata"), e[3]), JF = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, YF = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = WF[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && MF(d < 4 ? i : {
		get [n]() {
			return QF(this, a);
		},
		set [n](e) {
			return eI(this, a, e);
		}
	}, n));
	d ? p && d < 4 && HF(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : HF(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = KF(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => ZF(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? QF : tI)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => eI(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? GF(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? RF("Object expected") : (GF(o = s.get) && (v.get = o), GF(o = s.set) && (v.set = o), GF(o = s.init) && g.unshift(o));
	return d || qF(e, i), v && AF(i, n, v), p ? d ^ 4 ? a : v : i;
}, XF = (e, t, n) => t.has(e) || RF("Cannot " + n), ZF = (e, t) => Object(t) === t ? e.has(t) : RF("Cannot use the \"in\" operator on this value"), QF = (e, t, n) => (XF(e, t, "read from private field"), n ? n.call(e) : t.get(e)), $F = (e, t, n) => t.has(e) ? RF("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), eI = (e, t, n, r) => (XF(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), tI = (e, t, n) => (XF(e, t, "access private method"), n);
function nI(e, t) {
	if (t) {
		let n;
		return CF(() => {
			let r = e();
			return r && n && t(n, r) ? n : (n = r, r);
		});
	}
	return CF(e);
}
function rI(e, t) {
	if (Object.is(e, t)) return !0;
	if (e === null || t === null) return !1;
	if (typeof e == "function" && typeof t == "function") return e === t;
	if (e instanceof Set && t instanceof Set) {
		if (e.size !== t.size) return !1;
		for (let n of e) if (!t.has(n)) return !1;
		return !0;
	}
	if (Array.isArray(e)) return !Array.isArray(t) || e.length !== t.length ? !1 : !e.some((e, n) => !rI(e, t[n]));
	if (typeof e == "object" && typeof t == "object") {
		let n = Object.keys(e), r = Object.keys(t);
		return n.length === r.length && !n.some((n) => !rI(e[n], t[n]));
	}
	return !1;
}
function Y({ get: e }, t) {
	return {
		init(e) {
			return vF(e);
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
function iI(e, t) {
	let n = /* @__PURE__ */ new WeakMap();
	return function() {
		let t = n.get(this);
		return t || (t = nI(e.bind(this)), n.set(this, t)), t.value;
	};
}
function aI(e = !0) {
	return function(t, n) {
		n.addInitializer(function() {
			let t = n.kind === "field" || n.static ? this : Object.getPrototypeOf(this), r = Object.getOwnPropertyDescriptor(t, n.name);
			r && Object.defineProperty(t, n.name, VF(BF({}, r), { enumerable: e }));
		});
	};
}
function oI(...e) {
	let t = e.map((e) => OF(e));
	return () => t.forEach((e) => e());
}
var sI, cI, lI, uI, dI, fI = [Y], pI, mI, hI, gI, _I, vI, yI, bI, xI, SI, CI, wI, TI, EI;
dI = [Y], uI = [Y], lI = [aI()], cI = [aI()], sI = [aI()];
var DI = class {
	constructor(e, t = Object.is) {
		this.defaultValue = e, this.equals = t, JF(pI, 5, this), $F(this, vI), $F(this, mI, JF(pI, 8, this)), JF(pI, 11, this), $F(this, yI, JF(pI, 12, this)), JF(pI, 15, this), $F(this, CI, JF(pI, 16, this)), JF(pI, 19, this), this.reset = this.reset.bind(this), this.reset();
	}
	get current() {
		return QF(this, vI, TI);
	}
	get initial() {
		return QF(this, vI, gI);
	}
	get previous() {
		return QF(this, vI, xI);
	}
	set current(e) {
		let t = J(() => QF(this, vI, TI));
		e && t && this.equals(t, e) || sF(() => {
			QF(this, vI, gI) || eI(this, vI, e, _I), eI(this, vI, t, SI), eI(this, vI, e, EI);
		});
	}
	reset(e = this.defaultValue) {
		sF(() => {
			eI(this, vI, void 0, SI), eI(this, vI, e, _I), eI(this, vI, e, EI);
		});
	}
};
pI = UF(null), mI = /* @__PURE__ */ new WeakMap(), vI = /* @__PURE__ */ new WeakSet(), yI = /* @__PURE__ */ new WeakMap(), CI = /* @__PURE__ */ new WeakMap(), hI = YF(pI, 20, "#initial", fI, vI, mI), gI = hI.get, _I = hI.set, bI = YF(pI, 20, "#previous", dI, vI, yI), xI = bI.get, SI = bI.set, wI = YF(pI, 20, "#current", uI, vI, CI), TI = wI.get, EI = wI.set, YF(pI, 2, "current", lI, DI), YF(pI, 2, "initial", cI, DI), YF(pI, 2, "previous", sI, DI), qF(pI, DI);
function OI(e) {
	return J(() => {
		let t = {};
		for (let n in e) t[n] = e[n];
		return t;
	});
}
var kI = Object.create, AI = Object.defineProperty, jI = Object.getOwnPropertyDescriptor, MI = Object.getOwnPropertySymbols, NI = Object.prototype.hasOwnProperty, PI = Object.prototype.propertyIsEnumerable, FI = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), II = (e) => {
	throw TypeError(e);
}, LI = Math.pow, RI = (e, t, n) => t in e ? AI(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, zI = (e, t) => {
	for (var n in t ||= {}) NI.call(t, n) && RI(e, n, t[n]);
	if (MI) for (var n of MI(t)) PI.call(t, n) && RI(e, n, t[n]);
	return e;
}, BI = (e, t) => AI(e, "name", {
	value: t,
	configurable: !0
}), VI = (e) => [
	,
	,
	,
	kI(e?.[FI("metadata")] ?? null)
], HI = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], UI = (e) => e !== void 0 && typeof e != "function" ? II("Function expected") : e, WI = (e, t, n, r, i) => ({
	kind: HI[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? II("Already initialized") : i.push(UI(e || null))
}), GI = (e, t) => RI(t, FI("metadata"), e[3]), KI = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, qI = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = HI[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && jI(d < 4 ? i : {
		get [n]() {
			return XI(this, a);
		},
		set [n](e) {
			return QI(this, a, e);
		}
	}, n));
	d ? p && d < 4 && BI(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : BI(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = WI(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => YI(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? XI : $I)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => QI(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? UI(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? II("Object expected") : (UI(o = s.get) && (v.get = o), UI(o = s.set) && (v.set = o), UI(o = s.init) && g.unshift(o));
	return d || GI(e, i), v && AI(i, n, v), p ? d ^ 4 ? a : v : i;
}, JI = (e, t, n) => t.has(e) || II("Cannot " + n), YI = (e, t) => Object(t) === t ? e.has(t) : II("Cannot use the \"in\" operator on this value"), XI = (e, t, n) => (JI(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ZI = (e, t, n) => t.has(e) ? II("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), QI = (e, t, n, r) => (JI(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), $I = (e, t, n) => (JI(e, t, "access private method"), n), eL = class e {
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
}, tL = class e {
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
		return c.scale = zI({}, s), c;
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
		return new eL((e + n) / 2, (t + r) / 2);
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
		return t instanceof e ? nL(this, t) : 0;
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
		return eL.delta({
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
function nL(e, t) {
	let n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), i = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), o = i - r, s = a - n;
	return r < i && n < a ? o * s : 0;
}
var rL, iL, aL, oL, sL, cL = class extends (aL = DI, iL = [iI], rL = [iI], aL) {
	constructor(e) {
		let t = eL.from(e);
		super(t, (e, t) => eL.equals(e, t)), KI(sL, 5, this), ZI(this, oL, 0), this.velocity = {
			x: 0,
			y: 0
		};
	}
	get delta() {
		return eL.delta(this.current, this.initial);
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
		let { current: t } = this, n = eL.from(e), r = {
			x: n.x - t.x,
			y: n.y - t.y
		}, i = Date.now(), a = i - XI(this, oL), o = (e) => Math.round(e / a * 100);
		sF(() => {
			QI(this, oL, i), this.velocity = {
				x: o(r.x),
				y: o(r.y)
			}, super.current = n;
		});
	}
	reset(e = this.defaultValue) {
		super.reset(eL.from(e)), this.velocity = {
			x: 0,
			y: 0
		};
	}
};
sL = VI(aL), oL = /* @__PURE__ */ new WeakMap(), qI(sL, 2, "delta", iL, cL), qI(sL, 2, "direction", rL, cL), GI(sL, cL);
function lL({ x: e, y: t }, n) {
	let r = Math.abs(e), i = Math.abs(t);
	return typeof n == "number" ? Math.sqrt(LI(r, 2) + LI(i, 2)) > n : "x" in n && "y" in n ? r > n.x && i > n.y : "x" in n ? r > n.x : "y" in n && i > n.y;
}
var uL = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(uL || {}), dL = Object.values(uL), fL = Object.create, pL = Object.defineProperty, mL = Object.defineProperties, hL = Object.getOwnPropertyDescriptor, gL = Object.getOwnPropertyDescriptors, _L = Object.getOwnPropertySymbols, vL = Object.prototype.hasOwnProperty, yL = Object.prototype.propertyIsEnumerable, bL = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), xL = (e) => {
	throw TypeError(e);
}, SL = (e, t, n) => t in e ? pL(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, CL = (e, t) => {
	for (var n in t ||= {}) vL.call(t, n) && SL(e, n, t[n]);
	if (_L) for (var n of _L(t)) yL.call(t, n) && SL(e, n, t[n]);
	return e;
}, wL = (e, t) => mL(e, gL(t)), TL = (e, t) => pL(e, "name", {
	value: t,
	configurable: !0
}), EL = (e, t) => {
	var n = {};
	for (var r in e) vL.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && _L) for (var r of _L(e)) t.indexOf(r) < 0 && yL.call(e, r) && (n[r] = e[r]);
	return n;
}, DL = (e) => [
	,
	,
	,
	fL(e?.[bL("metadata")] ?? null)
], OL = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], kL = (e) => e !== void 0 && typeof e != "function" ? xL("Function expected") : e, AL = (e, t, n, r, i) => ({
	kind: OL[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? xL("Already initialized") : i.push(kL(e || null))
}), jL = (e, t) => SL(t, bL("metadata"), e[3]), X = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, Z = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = OL[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && hL(d < 4 ? i : {
		get [n]() {
			return PL(this, a);
		},
		set [n](e) {
			return FL(this, a, e);
		}
	}, n));
	d ? p && d < 4 && TL(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : TL(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = AL(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => NL(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? PL : IL)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => FL(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? kL(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? xL("Object expected") : (kL(o = s.get) && (v.get = o), kL(o = s.set) && (v.set = o), kL(o = s.init) && g.unshift(o));
	return d || jL(e, i), v && pL(i, n, v), p ? d ^ 4 ? a : v : i;
}, ML = (e, t, n) => t.has(e) || xL("Cannot " + n), NL = (e, t) => Object(t) === t ? e.has(t) : xL("Cannot use the \"in\" operator on this value"), PL = (e, t, n) => (ML(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Q = (e, t, n) => t.has(e) ? xL("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), FL = (e, t, n, r) => (ML(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), IL = (e, t, n) => (ML(e, t, "access private method"), n);
function LL(e, t) {
	return {
		plugin: e,
		options: t
	};
}
function RL(e) {
	return (t) => LL(e, t);
}
function zL(e) {
	return typeof e == "function" ? {
		plugin: e,
		options: void 0
	} : e;
}
var BL = [Y], VL, HL, UL, WL = class {
	constructor(e, t) {
		this.manager = e, this.options = t, Q(this, HL, X(VL, 8, this, !1)), X(VL, 11, this), Q(this, UL, /* @__PURE__ */ new Set());
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
		let t = OF(e.bind(this));
		return PL(this, UL).add(t), t;
	}
	destroy() {
		PL(this, UL).forEach((e) => e());
	}
	static configure(e) {
		return LL(this, e);
	}
};
VL = DL(null), HL = /* @__PURE__ */ new WeakMap(), UL = /* @__PURE__ */ new WeakMap(), Z(VL, 4, "disabled", BL, WL, HL), jL(VL, WL);
var GL = class extends WL {}, KL, qL = class {
	constructor(e) {
		this.manager = e, this.instances = /* @__PURE__ */ new Map(), Q(this, KL, []);
	}
	get values() {
		return Array.from(this.instances.values());
	}
	set values(e) {
		let t = e.map(zL).reduce((e, t) => {
			let n = e.find(({ plugin: e }) => e === t.plugin);
			return n ? (n.options = t.options, e) : [...e, t];
		}, []), n = t.map(({ plugin: e }) => e);
		for (let e of PL(this, KL)) if (!n.includes(e)) {
			if (e.prototype instanceof GL) continue;
			this.unregister(e);
		}
		for (let { plugin: e, options: n } of t) this.register(e, n);
		FL(this, KL, n);
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
KL = /* @__PURE__ */ new WeakMap();
function JL(e, t) {
	return e.priority === t.priority ? e.type === t.type ? t.value - e.value : t.type - e.type : t.priority - e.priority;
}
var YL = [], XL, ZL, QL = class extends WL {
	constructor(e) {
		super(e), Q(this, XL), Q(this, ZL), this.computeCollisions = this.computeCollisions.bind(this), FL(this, ZL, vF(YL)), this.destroy = oI(() => {
			let e = this.computeCollisions(), t = J(() => this.manager.dragOperation.position.current);
			if (e !== YL) {
				let e = PL(this, XL);
				if (FL(this, XL, t), e && t.x == e.x && t.y == e.y) return;
			} else FL(this, XL, void 0);
			PL(this, ZL).value = e;
		}, () => {
			let { dragOperation: e } = this.manager;
			e.status.initialized && this.forceUpdate();
		});
	}
	forceUpdate(e = !0) {
		J(() => {
			e ? PL(this, ZL).value = this.computeCollisions() : FL(this, XL, void 0);
		});
	}
	computeCollisions(e, t) {
		let { registry: n, dragOperation: r } = this.manager, { source: i, shape: a, status: o } = r;
		if (!o.initialized || !a) return YL;
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
		return c.length === 0 ? YL : (s.sort(JL), s);
	}
	get collisions() {
		return PL(this, ZL).value;
	}
};
XL = /* @__PURE__ */ new WeakMap(), ZL = /* @__PURE__ */ new WeakMap();
var $L, eR, tR = [Y], nR, rR, iR, aR, oR, sR, cR;
eR = [Y], $L = [Y];
var lR = class e {
	constructor(e, t) {
		Q(this, aR, X(iR, 8, this)), X(iR, 11, this), Q(this, oR), Q(this, sR, X(iR, 12, this)), X(iR, 15, this), Q(this, cR, X(iR, 16, this)), X(iR, 19, this);
		let { effects: n, id: r, data: i = {}, disabled: a = !1, register: o = !0 } = e, s = r;
		FL(this, oR, vF(r)), this.manager = t, this.data = i, this.disabled = a, this.effects = () => [() => {
			let { id: e, manager: t } = this;
			if (e !== s) return s = e, t?.registry.register(this), () => t?.registry.unregister(this);
		}, ...n?.() ?? []], this.register = this.register.bind(this), this.unregister = this.unregister.bind(this), this.destroy = this.destroy.bind(this), t && o && queueMicrotask(this.register);
	}
	get id() {
		let t = PL(this, oR).value;
		return e.pendingIdChanges?.get(this) ?? t;
	}
	set id(t) {
		t !== (e.pendingIdChanges?.get(this) ?? PL(this, oR).peek()) && (e.pendingIdChanges || (e.pendingIdChanges = /* @__PURE__ */ new Map(), queueMicrotask(() => {
			var t;
			return IL(t = e, nR, rR).call(t);
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
iR = DL(null), nR = /* @__PURE__ */ new WeakSet(), rR = function() {
	let e = lR.pendingIdChanges;
	lR.pendingIdChanges = null, e && sF(() => {
		for (let [t, n] of e) PL(t, oR).value = n;
	});
}, aR = /* @__PURE__ */ new WeakMap(), oR = /* @__PURE__ */ new WeakMap(), sR = /* @__PURE__ */ new WeakMap(), cR = /* @__PURE__ */ new WeakMap(), Z(iR, 4, "manager", tR, lR, aR), Z(iR, 4, "data", eR, lR, sR), Z(iR, 4, "disabled", $L, lR, cR), Q(lR, nR), jL(iR, lR), lR.pendingIdChanges = null;
var uR = lR, dR = class {
	constructor() {
		this.map = vF(/* @__PURE__ */ new Map()), this.cleanupFunctions = /* @__PURE__ */ new WeakMap(), this.register = (e, t) => {
			let n = this.map.peek(), r = n.get(e), i = () => this.unregister(e, t);
			if (r === t) return i;
			r && r.id === e && (this.cleanupFunctions.get(r)?.(), this.cleanupFunctions.delete(r));
			let a = new Map(n);
			for (let [r, i] of n) if (i === t && r !== e) {
				a.delete(r);
				break;
			}
			a.set(e, t), this.map.value = a;
			let o = oI(...t.effects());
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
}, fR, pR, mR, hR, gR, _R, vR, yR, bR, xR, SR, CR = class extends (vR = uR, _R = [Y], gR = [Y], hR = [Y], mR = [iI], pR = [iI], fR = [iI], vR) {
	constructor(e, t) {
		var n = e, { modifiers: r, type: i, sensors: a, plugins: o, effects: s } = n, c = EL(n, [
			"modifiers",
			"type",
			"sensors",
			"plugins",
			"effects"
		]);
		super(wL(CL({}, c), { effects: () => [...s?.() ?? [], () => {
			let { manager: e, plugins: t } = this;
			if (e && t) for (let n of t) {
				let { plugin: t } = zL(n);
				e.registry.plugins.register(t);
			}
		}] }), t), X(yR, 5, this), Q(this, bR, X(yR, 8, this)), X(yR, 11, this), Q(this, xR, X(yR, 12, this)), X(yR, 15, this), Q(this, SR, X(yR, 16, this, this.isDragSource ? "dragging" : "idle")), X(yR, 19, this), this.type = i, this.sensors = a, this.modifiers = r, this.alignment = c.alignment, this.plugins = o;
	}
	pluginConfig(e) {
		if (this.plugins) for (let t of this.plugins) {
			let n = zL(t);
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
yR = DL(vR), bR = /* @__PURE__ */ new WeakMap(), xR = /* @__PURE__ */ new WeakMap(), SR = /* @__PURE__ */ new WeakMap(), Z(yR, 4, "type", _R, CR, bR), Z(yR, 4, "modifiers", gR, CR, xR), Z(yR, 4, "status", hR, CR, SR), Z(yR, 2, "isDropping", mR, CR), Z(yR, 2, "isDragging", pR, CR), Z(yR, 2, "isDragSource", fR, CR), jL(yR, CR);
var wR, TR, ER, DR, OR, kR, AR, jR, MR, NR, PR, FR, IR, LR = class extends (AR = uR, kR = [Y], OR = [Y], DR = [Y], ER = [Y], TR = [Y], wR = [iI], AR) {
	constructor(e, t) {
		var n = e, { accept: r, collisionDetector: i, collisionPriority: a, type: o } = n, s = EL(n, [
			"accept",
			"collisionDetector",
			"collisionPriority",
			"type"
		]);
		super(s, t), X(jR, 5, this), Q(this, MR, X(jR, 8, this)), X(jR, 11, this), Q(this, NR, X(jR, 12, this)), X(jR, 15, this), Q(this, PR, X(jR, 16, this)), X(jR, 19, this), Q(this, FR, X(jR, 20, this)), X(jR, 23, this), Q(this, IR, X(jR, 24, this)), X(jR, 27, this), this.accept = r, this.collisionDetector = i, this.collisionPriority = a, this.type = o;
	}
	accepts(e) {
		let { accept: t } = this;
		return t ? typeof t == "function" ? t(e) : e.type ? Array.isArray(t) ? t.includes(e.type) : e.type === t : !1 : !0;
	}
	get isDropTarget() {
		return this.manager?.dragOperation.target?.id === this.id;
	}
};
jR = DL(AR), MR = /* @__PURE__ */ new WeakMap(), NR = /* @__PURE__ */ new WeakMap(), PR = /* @__PURE__ */ new WeakMap(), FR = /* @__PURE__ */ new WeakMap(), IR = /* @__PURE__ */ new WeakMap(), Z(jR, 4, "accept", kR, LR, MR), Z(jR, 4, "type", OR, LR, NR), Z(jR, 4, "collisionDetector", DR, LR, PR), Z(jR, 4, "collisionPriority", ER, LR, FR), Z(jR, 4, "shape", TR, LR, IR), Z(jR, 2, "isDropTarget", wR, LR), jL(jR, LR);
var RR = class {
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
}, zR = class extends RR {
	constructor(e) {
		super(), this.manager = e;
	}
	dispatch(e, t) {
		let n = [t, this.manager];
		super.dispatch(e, ...n);
	}
};
function BR(e, t = !0) {
	let n = !1;
	return wL(CL({}, e), {
		cancelable: t,
		get defaultPrevented() {
			return n;
		},
		preventDefault() {
			t && (n = !0);
		}
	});
}
var VR = class extends GL {
	constructor(e) {
		super(e);
		let t = (e, t) => e.map(({ id: e }) => e).join("") === t.map(({ id: e }) => e).join(""), n = [];
		this.destroy = oI(() => {
			let { dragOperation: t, collisionObserver: r } = e;
			t.status.initializing && (n = [], r.enable());
		}, () => {
			let { collisionObserver: r, monitor: i } = e, { collisions: a } = r;
			if (r.isDisabled() || uR.pendingIdChanges) return;
			let o = BR({ collisions: a });
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
}, HR = /* @__PURE__ */ ((e) => (e[e.Lowest = 0] = "Lowest", e[e.Low = 1] = "Low", e[e.Normal = 2] = "Normal", e[e.High = 3] = "High", e[e.Highest = 4] = "Highest", e))(HR || {}), UR = /* @__PURE__ */ ((e) => (e[e.Collision = 0] = "Collision", e[e.ShapeIntersection = 1] = "ShapeIntersection", e[e.PointerIntersection = 2] = "PointerIntersection", e))(UR || {}), WR, GR, KR, qR, JR, YR, XR = [Y], ZR, QR;
YR = [iI], JR = [iI], qR = [iI], KR = [iI], GR = [iI], WR = [iI];
var $R = class {
	constructor() {
		X(ZR, 5, this), Q(this, QR, X(ZR, 8, this, "idle")), X(ZR, 11, this);
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
ZR = DL(null), QR = /* @__PURE__ */ new WeakMap(), Z(ZR, 4, "value", XR, $R, QR), Z(ZR, 2, "current", YR, $R), Z(ZR, 2, "idle", JR, $R), Z(ZR, 2, "initializing", qR, $R), Z(ZR, 2, "initialized", KR, $R), Z(ZR, 2, "dragging", GR, $R), Z(ZR, 2, "dropped", WR, $R), jL(ZR, $R);
var ez = class {
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
			let r = BR({ operation: t.snapshot() });
			return t.status.dragging && this.manager.monitor.dispatch("dragover", r), this.manager.renderer.rendering.then(() => r.defaultPrevented);
		});
	}
	start(e) {
		return J(() => {
			let { dragOperation: t } = this.manager;
			if (e.source != null && this.setDragSource(e.source), !t.source) throw Error("Cannot start a drag operation without a drag source");
			if (!t.status.idle) throw Error("Cannot start a drag operation while another is active");
			let n = new AbortController(), { event: r, coordinates: i } = e;
			sF(() => {
				t.status.set("initialization-pending"), t.shape = null, t.canceled = !1, t.activatorEvent = r ?? null, t.position.reset(i);
			});
			let a = BR({ operation: t.snapshot() });
			return this.manager.monitor.dispatch("beforedragstart", a), a.defaultPrevented ? (t.reset(), n.abort(), n) : (t.status.set("initializing"), t.controller = n, this.manager.renderer.rendering.then(() => {
				if (n.signal.aborted) return;
				let { status: e } = t;
				e.current === "initializing" && sF(() => {
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
			let i = BR({
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
						let { source: e } = t, n = OF(() => {
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
}, tz = class extends WL {
	constructor(e, t) {
		super(e, t), this.manager = e, this.options = t;
	}
}, nz = class extends AbortController {
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
}, rz, iz = class {
	constructor(e) {
		this.options = e, Q(this, rz);
	}
	set controller(e) {
		FL(this, rz, e), e.signal.addEventListener("abort", () => this.abort());
	}
	activate(e) {
		var t;
		(t = PL(this, rz)) == null || t.activate(e);
	}
};
rz = /* @__PURE__ */ new WeakMap();
var az = class extends WL {
	constructor(e, t) {
		super(e, t), this.manager = e, this.options = t;
	}
	apply(e) {
		return e.transform;
	}
}, oz = class {
	constructor(e) {
		this.draggables = new dR(), this.droppables = new dR(), this.plugins = new qL(e), this.sensors = new qL(e), this.modifiers = new qL(e);
	}
	register(e, t) {
		if (e instanceof CR) return this.draggables.register(e.id, e);
		if (e instanceof LR) return this.droppables.register(e.id, e);
		if (e.prototype instanceof az) return this.modifiers.register(e, t);
		if (e.prototype instanceof tz) return this.sensors.register(e, t);
		if (e.prototype instanceof WL) return this.plugins.register(e, t);
		throw Error("Invalid instance type");
	}
	unregister(e) {
		if (e instanceof uR) return e instanceof CR ? this.draggables.unregister(e.id, e) : e instanceof LR ? this.droppables.unregister(e.id, e) : () => {};
		if (e.prototype instanceof az) return this.modifiers.unregister(e);
		if (e.prototype instanceof tz) return this.sensors.unregister(e);
		if (e.prototype instanceof WL) return this.plugins.unregister(e);
		throw Error("Invalid instance type");
	}
	destroy() {
		this.draggables.destroy(), this.droppables.destroy(), this.plugins.destroy(), this.sensors.destroy(), this.modifiers.destroy();
	}
}, sz, cz, lz, uz, dz, fz, pz, mz, hz = [iI], gz, _z, vz, yz, bz, xz, Sz, Cz, wz, Tz;
mz = [Y], pz = [Y], fz = [Y], dz = [Y], uz = [Y], lz = [iI], cz = [iI], sz = [iI];
var Ez = class {
	constructor(e) {
		X(yz, 5, this), Q(this, gz), Q(this, _z), Q(this, vz, new DI(void 0, (e, t) => e && t ? e.equals(t) : e === t)), this.status = new $R(), Q(this, bz, X(yz, 8, this, !1)), X(yz, 11, this), Q(this, xz, X(yz, 12, this, null)), X(yz, 15, this), Q(this, Sz, X(yz, 16, this, null)), X(yz, 19, this), Q(this, Cz, X(yz, 20, this, null)), X(yz, 23, this), Q(this, wz, X(yz, 24, this, [])), X(yz, 27, this), this.position = new cL({
			x: 0,
			y: 0
		}), Q(this, Tz, {
			x: 0,
			y: 0
		}), FL(this, gz, e);
	}
	get shape() {
		let { current: e, initial: t, previous: n } = PL(this, vz);
		return !e || !t ? null : {
			current: e,
			initial: t,
			previous: n
		};
	}
	set shape(e) {
		e ? PL(this, vz).current = e : PL(this, vz).reset();
	}
	get source() {
		let e = this.sourceIdentifier;
		if (e == null) return null;
		let t = PL(this, gz).registry.draggables.get(e);
		return t && FL(this, _z, t), t ?? PL(this, _z) ?? null;
	}
	get target() {
		let e = this.targetIdentifier;
		return e == null ? null : PL(this, gz).registry.droppables.get(e) ?? null;
	}
	get transform() {
		let { x: e, y: t } = this.position.delta, n = {
			x: e,
			y: t
		};
		for (let e of this.modifiers) n = e.apply(wL(CL({}, this.snapshot()), { transform: n }));
		return FL(this, Tz, n), n;
	}
	snapshot() {
		return J(() => ({
			source: this.source,
			target: this.target,
			activatorEvent: this.activatorEvent,
			transform: PL(this, Tz),
			shape: this.shape ? OI(this.shape) : null,
			position: OI(this.position),
			status: OI(this.status),
			canceled: this.canceled
		}));
	}
	reset() {
		sF(() => {
			this.status.set("idle"), this.sourceIdentifier = null, this.targetIdentifier = null, PL(this, vz).reset(), this.position.reset({
				x: 0,
				y: 0
			}), FL(this, Tz, {
				x: 0,
				y: 0
			}), this.modifiers = [];
		});
	}
};
yz = DL(null), gz = /* @__PURE__ */ new WeakMap(), _z = /* @__PURE__ */ new WeakMap(), vz = /* @__PURE__ */ new WeakMap(), bz = /* @__PURE__ */ new WeakMap(), xz = /* @__PURE__ */ new WeakMap(), Sz = /* @__PURE__ */ new WeakMap(), Cz = /* @__PURE__ */ new WeakMap(), wz = /* @__PURE__ */ new WeakMap(), Tz = /* @__PURE__ */ new WeakMap(), Z(yz, 2, "shape", hz, Ez), Z(yz, 4, "canceled", mz, Ez, bz), Z(yz, 4, "activatorEvent", pz, Ez, xz), Z(yz, 4, "sourceIdentifier", fz, Ez, Sz), Z(yz, 4, "targetIdentifier", dz, Ez, Cz), Z(yz, 4, "modifiers", uz, Ez, wz), Z(yz, 2, "source", lz, Ez), Z(yz, 2, "target", cz, Ez), Z(yz, 2, "transform", sz, Ez), jL(yz, Ez);
var Dz = { get rendering() {
	return Promise.resolve();
} };
function Oz(e, t) {
	return typeof e == "function" ? e(t) : e ?? t;
}
var kz = class {
	constructor(e) {
		this.destroy = () => {
			this.dragOperation.status.idle || this.actions.stop({ canceled: !0 }), this.dragOperation.modifiers.forEach((e) => e.destroy()), this.registry.destroy(), this.collisionObserver.destroy();
		};
		let t = e ?? {}, n = Oz(t.plugins, []), r = Oz(t.sensors, []), i = Oz(t.modifiers, []), a = t.renderer ?? Dz, o = new zR(this), s = new oz(this);
		this.registry = s, this.monitor = o, this.renderer = a, this.actions = new ez(this), this.dragOperation = new Ez(this), this.collisionObserver = new QL(this), this.plugins = [VR, ...n], this.modifiers = i, this.sensors = r;
		let { destroy: c } = this, l = oI(() => {
			let e = J(() => this.dragOperation.modifiers), t = this.modifiers;
			for (let n of e) t.includes(n) || n.destroy();
			this.dragOperation.modifiers = (this.dragOperation.source?.modifiers)?.map((e) => {
				let { plugin: t, options: n } = zL(e);
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
}, Az = (e) => {
	throw TypeError(e);
}, jz = (e, t, n) => t.has(e) || Az("Cannot " + n), $ = (e, t, n) => (jz(e, t, "read from private field"), t.get(e)), Mz = (e, t, n) => t.has(e) ? Az("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Nz = (e, t, n, r) => (jz(e, t, "write to private field"), t.set(e, n), n), Pz = (e, t, n) => (jz(e, t, "access private method"), n);
function Fz(e) {
	return e ? e instanceof KeyframeEffect || "getKeyframes" in e && typeof e.getKeyframes == "function" : !1;
}
function Iz(e, t) {
	let n = e.getAnimations(), r = null;
	for (let e of n) {
		if (e.playState !== "running") continue;
		let { effect: n } = e, i = (Fz(n) ? n.getKeyframes() : []).filter(t);
		i.length > 0 && (r = [i[i.length - 1], e]);
	}
	return r;
}
function Lz(e) {
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
function Rz(e) {
	let t = Object.prototype.toString.call(e);
	return t === "[object Window]" || t === "[object global]";
}
function zz(e) {
	return "nodeType" in e;
}
function Bz(e) {
	return e ? Rz(e) ? e : zz(e) ? "defaultView" in e ? e.defaultView ?? window : e.ownerDocument?.defaultView ?? window : window : window;
}
function Vz(e) {
	let { Document: t } = Bz(e);
	return e instanceof t || "nodeType" in e && e.nodeType === Node.DOCUMENT_NODE;
}
function Hz(e) {
	return !e || Rz(e) ? !1 : e instanceof Bz(e).HTMLElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("html");
}
function Uz(e) {
	return e instanceof Bz(e).SVGElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("svg");
}
function Wz(e) {
	return e ? Rz(e) ? e.document : zz(e) ? Vz(e) ? e : Hz(e) || Uz(e) ? e.ownerDocument : document : document : document;
}
function Gz(e) {
	let { documentElement: t } = Wz(e), n = Bz(e).visualViewport, r = n?.width ?? t.clientWidth, i = n?.height ?? t.clientHeight, a = n?.offsetTop ?? 0, o = n?.offsetLeft ?? 0;
	return {
		top: a,
		left: o,
		right: o + r,
		bottom: a + i,
		width: r,
		height: i
	};
}
function Kz(e, t) {
	if (qz(e) && e.open === !1) return !1;
	let { overflow: n, overflowX: r, overflowY: i } = getComputedStyle(e);
	return n === "visible" && r === "visible" && i === "visible";
}
function qz(e) {
	return e.tagName === "DETAILS";
}
function Jz(e, t = e.getBoundingClientRect(), n = 0) {
	let r = t, { ownerDocument: i } = e, a = i.defaultView ?? window, o = e.parentElement;
	for (; o && o !== i.documentElement;) {
		if (!Kz(o)) {
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
function Yz(e) {
	return {
		x: e.clientX,
		y: e.clientY
	};
}
var Xz = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function Zz(e = document, t = /* @__PURE__ */ new Set()) {
	if (t.has(e)) return [];
	t.add(e);
	let n = [e];
	for (let r of Array.from(e.querySelectorAll("iframe, frame"))) try {
		let e = r.contentDocument;
		e && !t.has(e) && n.push(...Zz(e, t));
	} catch {}
	try {
		let r = e.defaultView;
		if (r && r !== window.top) {
			let i = r.parent;
			i && i.document && i.document !== e && n.push(...Zz(i.document, t));
		}
	} catch {}
	return n;
}
function Qz() {
	return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function $z() {
	let e = Qz() ? window.visualViewport : null;
	return {
		x: e?.offsetLeft ?? 0,
		y: e?.offsetTop ?? 0
	};
}
function eB(e) {
	return !e || !zz(e) ? !1 : e instanceof Bz(e).ShadowRoot;
}
function tB(e) {
	if (e && zz(e)) {
		let t = e.getRootNode();
		if (eB(t) || t instanceof Document) return t;
	}
	return Wz(e);
}
function nB(e) {
	return e.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function rB(e) {
	let t = "input, textarea, select, canvas, [contenteditable]", n = e.cloneNode(!0), r = Array.from(e.querySelectorAll(t));
	return Array.from(n.querySelectorAll(t)).forEach((e, t) => {
		let n = r[t];
		iB(e) && iB(n) && (e.type !== "file" && (e.value = n.value), e.type === "radio" && e.name && (e.name = `Cloned__${e.name}`)), aB(e) && aB(n) && n.width > 0 && n.height > 0 && e.getContext("2d")?.drawImage(n, 0, 0);
	}), n;
}
function iB(e) {
	return "value" in e;
}
function aB(e) {
	return e.tagName === "CANVAS";
}
function oB(e, { x: t, y: n }) {
	let r = e.elementFromPoint(t, n);
	if (sB(r)) {
		let { contentDocument: e } = r;
		if (e) {
			let { left: i, top: a } = r.getBoundingClientRect();
			return oB(e, {
				x: t - i,
				y: n - a
			});
		}
	}
	return r;
}
function sB(e) {
	return e?.tagName === "IFRAME";
}
var cB = /* @__PURE__ */ new WeakMap();
function lB(e) {
	return e.closest("\n    input:not([disabled]),\n    select:not([disabled]),\n    textarea:not([disabled]),\n    button:not([disabled]),\n    a[href],\n    [contenteditable]:not([contenteditable=\"false\"])\n  ");
}
var uB = class {
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
function dB(e) {
	let t = e?.ownerDocument.defaultView;
	if (t && t.self !== t.parent) return t.frameElement;
}
function fB(e) {
	let t = /* @__PURE__ */ new Set(), n = dB(e);
	for (; n;) t.add(n), n = dB(n);
	return t;
}
function pB(e, t) {
	let n = setTimeout(e, t);
	return () => clearTimeout(n);
}
function mB(e, t) {
	let n = () => performance.now(), r, i;
	return function(...a) {
		let o = this;
		i ? (r?.(), r = pB(() => {
			e.apply(o, a), i = n();
		}, t - (n() - i))) : (e.apply(o, a), i = n());
	};
}
function hB(e, t) {
	return e === t ? !0 : !e || !t ? !1 : e.top == t.top && e.left == t.left && e.right == t.right && e.bottom == t.bottom;
}
function gB(e, t = e.getBoundingClientRect()) {
	let { width: n, height: r } = Jz(e, t);
	return n > 0 && r > 0;
}
var _B = Xz ? ResizeObserver : class {
	observe() {}
	unobserve() {}
	disconnect() {}
}, vB, yB = class extends _B {
	constructor(e) {
		super((t) => {
			if (!$(this, vB)) {
				Nz(this, vB, !0);
				return;
			}
			e(t, this);
		}), Mz(this, vB, !1);
	}
};
vB = /* @__PURE__ */ new WeakMap();
var bB = Array.from({ length: 100 }, (e, t) => t / 100), xB = 75, SB, CB, wB, TB, EB, DB, OB, kB, AB, jB, MB, NB = class {
	constructor(e, t, n = {
		debug: !1,
		skipInitial: !1
	}) {
		this.element = e, this.callback = t, Mz(this, AB), this.disconnect = () => {
			var e, t, n;
			Nz(this, OB, !0), (e = $(this, wB)) == null || e.disconnect(), (t = $(this, TB)) == null || t.disconnect(), $(this, EB).disconnect(), (n = $(this, DB)) == null || n.remove();
		}, Mz(this, SB, !0), Mz(this, CB), Mz(this, wB), Mz(this, TB), Mz(this, EB), Mz(this, DB), Mz(this, OB, !1), Mz(this, kB, mB(() => {
			var e;
			let { element: t } = this;
			if ((e = $(this, TB)) == null || e.disconnect(), $(this, OB) || !$(this, SB) || !t.isConnected) return;
			let n = t.ownerDocument ?? document, { innerHeight: r, innerWidth: i } = n.defaultView ?? window, a = t.getBoundingClientRect(), { top: o, left: s, bottom: c, right: l } = Jz(t, a), u = -Math.floor(o), d = -Math.floor(s), f = `${u}px ${-Math.floor(i - l)}px ${-Math.floor(r - c)}px ${d}px`;
			this.boundingClientRect = a, Nz(this, TB, new IntersectionObserver((e) => {
				let [n] = e, { intersectionRect: r } = n;
				(n.intersectionRatio === 1 ? tL.intersectionRatio(r, Jz(t)) : n.intersectionRatio) !== 1 && $(this, kB).call(this);
			}, {
				threshold: bB,
				rootMargin: f,
				root: n
			})), $(this, TB).observe(t), Pz(this, AB, jB).call(this);
		}, xB)), this.boundingClientRect = e.getBoundingClientRect(), Nz(this, SB, gB(e, this.boundingClientRect));
		let r = !0;
		this.callback = (e) => {
			r && (r = !1, n.skipInitial) || t(e);
		};
		let i = e.ownerDocument;
		n?.debug && (Nz(this, DB, document.createElement("div")), $(this, DB).style.background = "rgba(0,0,0,0.15)", $(this, DB).style.position = "fixed", $(this, DB).style.pointerEvents = "none", i.body.appendChild($(this, DB))), Nz(this, EB, new IntersectionObserver((t) => {
			var n, r;
			let { boundingClientRect: i, isIntersecting: a } = t[t.length - 1], { width: o, height: s } = i, c = $(this, SB);
			Nz(this, SB, a), (o || s) && (c && !a ? ((n = $(this, TB)) == null || n.disconnect(), this.callback(null), (r = $(this, wB)) == null || r.disconnect(), Nz(this, wB, void 0), $(this, DB) && ($(this, DB).style.visibility = "hidden")) : $(this, kB).call(this), a && !$(this, wB) && (Nz(this, wB, new yB($(this, kB))), $(this, wB).observe(e)));
		}, {
			threshold: bB,
			root: i
		})), $(this, SB) && !n.skipInitial && this.callback(this.boundingClientRect), $(this, EB).observe(e);
	}
};
SB = /* @__PURE__ */ new WeakMap(), CB = /* @__PURE__ */ new WeakMap(), wB = /* @__PURE__ */ new WeakMap(), TB = /* @__PURE__ */ new WeakMap(), EB = /* @__PURE__ */ new WeakMap(), DB = /* @__PURE__ */ new WeakMap(), OB = /* @__PURE__ */ new WeakMap(), kB = /* @__PURE__ */ new WeakMap(), AB = /* @__PURE__ */ new WeakSet(), jB = function() {
	$(this, OB) || (Pz(this, AB, MB).call(this), !hB(this.boundingClientRect, $(this, CB)) && (this.callback(this.boundingClientRect), Nz(this, CB, this.boundingClientRect)));
}, MB = function() {
	if ($(this, DB)) {
		let { top: e, left: t, width: n, height: r } = Jz(this.element);
		$(this, DB).style.overflow = "hidden", $(this, DB).style.visibility = "visible", $(this, DB).style.top = `${Math.floor(e)}px`, $(this, DB).style.left = `${Math.floor(t)}px`, $(this, DB).style.width = `${Math.floor(n)}px`, $(this, DB).style.height = `${Math.floor(r)}px`;
	}
};
var PB = /* @__PURE__ */ new WeakMap(), FB = /* @__PURE__ */ new WeakMap();
function IB(e, t) {
	let n = PB.get(e);
	return n ||= {
		disconnect: new NB(e, (t) => {
			let n = PB.get(e);
			n && n.callbacks.forEach((e) => e(t));
		}, { skipInitial: !0 }).disconnect,
		callbacks: /* @__PURE__ */ new Set()
	}, n.callbacks.add(t), PB.set(e, n), () => {
		n.callbacks.delete(t), n.callbacks.size === 0 && (PB.delete(e), n.disconnect());
	};
}
function LB(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r of e) {
		let e = IB(r, t);
		n.add(e);
	}
	return () => n.forEach((e) => e());
}
function RB(e, t) {
	let n = e.ownerDocument;
	if (!FB.has(n)) {
		let e = new AbortController(), t = /* @__PURE__ */ new Set();
		document.addEventListener("scroll", (e) => t.forEach((t) => t(e)), {
			capture: !0,
			passive: !0,
			signal: e.signal
		}), FB.set(n, {
			disconnect: () => e.abort(),
			listeners: t
		});
	}
	let { listeners: r, disconnect: i } = FB.get(n) ?? {};
	return !r || !i ? () => {} : (r.add(t), () => {
		r.delete(t), r.size === 0 && (i(), FB.delete(n));
	});
}
var zB, BB, VB, HB, UB = class {
	constructor(e, t, n) {
		this.callback = t, Mz(this, zB), Mz(this, BB, !1), Mz(this, VB), Mz(this, HB, mB((e) => {
			if (!$(this, BB) && e.target && "contains" in e.target && typeof e.target.contains == "function") {
				for (let t of $(this, VB)) if (e.target.contains(t)) {
					this.callback($(this, zB).boundingClientRect);
					break;
				}
			}
		}, xB));
		let r = fB(e), i = LB(r, t), a = RB(e, $(this, HB));
		Nz(this, VB, r), Nz(this, zB, new NB(e, t, n)), this.disconnect = () => {
			$(this, BB) || (Nz(this, BB, !0), i(), a(), $(this, zB).disconnect());
		};
	}
};
zB = /* @__PURE__ */ new WeakMap(), BB = /* @__PURE__ */ new WeakMap(), VB = /* @__PURE__ */ new WeakMap(), HB = /* @__PURE__ */ new WeakMap();
function WB(e) {
	return "showPopover" in e && "hidePopover" in e && typeof e.showPopover == "function" && typeof e.hidePopover == "function";
}
function GB(e) {
	try {
		WB(e) && e.isConnected && e.hasAttribute("popover") && !e.matches(":popover-open") && e.showPopover();
	} catch {}
}
function KB(e) {
	return !Xz || !e ? !1 : e === Wz(e).scrollingElement;
}
function qB(e) {
	let t = Bz(e), n = KB(e) ? Gz(e) : Lz(e), r = t.visualViewport, i = KB(e) ? {
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
function JB(e, t) {
	let { isTop: n, isBottom: r, isLeft: i, isRight: a, position: o } = qB(e), { x: s, y: c } = t ?? {
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
var YB = class {
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
}, XB = new YB((e) => {
	typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : e();
}), ZB = new YB((e) => setTimeout(e, 50)), QB = /* @__PURE__ */ new Map(), $B = QB.clear.bind(QB);
function eV(e, t = !1) {
	if (!t) return tV(e);
	let n = QB.get(e);
	return n || (n = tV(e), QB.set(e, n), ZB.schedule($B), n);
}
function tV(e) {
	return Bz(e).getComputedStyle(e);
}
function nV(e, t = eV(e, !0)) {
	return t.position === "fixed" || t.position === "sticky";
}
function rV(e, t = eV(e, !0)) {
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
var iV = {
	excludeElement: !0,
	escapeShadowDOM: !0
};
function aV(e, t = iV) {
	let { limit: n, excludeElement: r, escapeShadowDOM: i } = t, a = /* @__PURE__ */ new Set();
	function o(t) {
		if (n != null && a.size >= n || !t) return a;
		if (Vz(t) && t.scrollingElement != null && !a.has(t.scrollingElement)) return a.add(t.scrollingElement), a;
		if (i && eB(t)) return o(t.host);
		if (!Hz(t)) return Uz(t) ? o(t.parentElement) : a;
		if (a.has(t)) return a;
		let s = eV(t, !0);
		if (r && t === e || rV(t, s) && a.add(t), nV(t, s)) {
			let { scrollingElement: e } = t.ownerDocument;
			return e && a.add(e), a;
		}
		return o(t.parentNode);
	}
	return e ? o(e) : a;
}
function oV(e, t = window.frameElement) {
	let n = {
		x: 0,
		y: 0,
		scaleX: 1,
		scaleY: 1
	};
	if (!e) return n;
	let r = dB(e);
	for (; r;) {
		if (r === t) return n;
		let e = Lz(r), { x: i, y: a } = sV(r, e);
		n.x += e.left, n.y += e.top, n.scaleX *= i, n.scaleY *= a, r = dB(r);
	}
	return n;
}
function sV(e, t = Lz(e)) {
	let n = Math.round(t.width), r = Math.round(t.height);
	if (Hz(e)) return {
		x: n / e.offsetWidth,
		y: r / e.offsetHeight
	};
	let i = eV(e, !0);
	return {
		x: (parseFloat(i.width) || n) / n,
		y: (parseFloat(i.height) || r) / r
	};
}
function cV(e) {
	if (!e || e === "none") return null;
	let t = e.split(" "), n = parseFloat(t[0]), r = parseFloat(t[1]);
	return isNaN(n) && isNaN(r) ? null : {
		x: isNaN(n) ? r : n,
		y: isNaN(r) ? n : r
	};
}
function lV(e) {
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
function uV(e) {
	let { scale: t, transform: n, translate: r } = e, i = cV(t), a = lV(r), o = dV(n);
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
function dV(e) {
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
var fV = /* @__PURE__ */ ((e) => (e[e.Idle = 0] = "Idle", e[e.Forward = 1] = "Forward", e[e.Reverse = -1] = "Reverse", e))(fV || {}), pV = {
	x: .2,
	y: .2
}, mV = {
	x: 10,
	y: 10
};
function hV(e, t, n, r = 25, i = pV, a = mV) {
	let { x: o, y: s } = t, { rect: c, isTop: l, isBottom: u, isLeft: d, isRight: f } = qB(e), p = oV(e), m = uV(eV(e, !0)), h = m !== null && m?.scaleX < 0, g = m !== null && m?.scaleY < 0, _ = new tL(c.left * p.scaleX + p.x, c.top * p.scaleY + p.y, c.width * p.scaleX, c.height * p.scaleY), v = {
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
function gV(e, { block: t = "nearest", inline: n = "nearest" } = {}) {
	if (!Hz(e)) return;
	let r = aV(e), i = [];
	for (let a of r) {
		if (!Hz(a)) continue;
		let { top: r, left: o } = vV(e, a), s = r, c = o;
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
function _V(e) {
	let t = 0, n = 0, r = e;
	for (; r;) {
		t += r.offsetTop, n += r.offsetLeft;
		let e = r.offsetParent;
		if (!Hz(e)) break;
		t += e.clientTop, n += e.clientLeft, r = e;
	}
	return {
		top: t,
		left: n
	};
}
function vV(e, t) {
	let n = _V(e), r = _V(t);
	return {
		top: n.top - r.top - t.clientTop,
		left: n.left - r.left - t.clientLeft
	};
}
function yV(e, t, n) {
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
function bV(e, t, n) {
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
function xV({ element: e, keyframes: t, options: n }) {
	return e.animate(t, n).finished;
}
var SV = new YB((e) => setTimeout(e, 0)), CV = /* @__PURE__ */ new Map(), wV = CV.clear.bind(CV);
function TV(e) {
	let t = e.ownerDocument, n = CV.get(t);
	if (n) return n;
	n = t.getAnimations(), CV.set(t, n), SV.schedule(wV);
	let r = n.filter((t) => Fz(t.effect) && t.effect.target === e);
	return CV.set(e, r), n;
}
function EV(e, t) {
	let n = TV(e).filter((e) => {
		if (Fz(e.effect)) {
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
var DV = class extends tL {
	constructor(e, t = {}) {
		let { frameTransform: n = oV(e), ignoreTransforms: r, getBoundingClientRect: i = Lz } = t, a = EV(e, {
			properties: [
				"transform",
				"translate",
				"scale",
				"width",
				"height"
			],
			isValidTarget: (t) => (t !== e || Qz()) && t.contains(e)
		}), o = i(e), { top: s, left: c, width: l, height: u } = o, d, f = eV(e), p = uV(f), m = {
			x: p?.scaleX ?? 1,
			y: p?.scaleY ?? 1
		}, h = OV(e, f);
		a?.(), p && (d = bV(o, p, f.transformOrigin), (r || h) && (s = d.top, c = d.left, l = d.width, u = d.height));
		let g = {
			width: d?.width ?? l,
			height: d?.height ?? u
		};
		if (h && !r && d) {
			let e = yV(d, h, f.transformOrigin);
			s = e.top, c = e.left, l = e.width, u = e.height, m.x = h.scaleX, m.y = h.scaleY;
		}
		n && (r || (c *= n.scaleX, l *= n.scaleX, s *= n.scaleY, u *= n.scaleY), c += n.x, s += n.y), super(c, s, l, u), this.scale = m, this.intrinsicWidth = g.width, this.intrinsicHeight = g.height;
	}
};
function OV(e, t) {
	let n = e.getAnimations();
	if (!n.length) return null;
	let r, i, a, o = !1;
	for (let e of n) {
		if (e.playState !== "running") continue;
		let t = Fz(e.effect) ? e.effect.getKeyframes() : [], n = t[t.length - 1];
		if (!n) continue;
		let { transform: s, translate: c, scale: l } = n;
		typeof s == "string" && s && (r = s, o = !0), typeof c == "string" && c && (i = c, o = !0), typeof l == "string" && l && (a = l, o = !0);
	}
	return o ? uV({
		transform: r ?? t.transform,
		translate: i ?? t.translate,
		scale: a ?? t.scale
	}) : null;
}
function kV(e) {
	return "style" in e && typeof e.style == "object" && e.style !== null && "setProperty" in e.style && "removeProperty" in e.style && typeof e.style.setProperty == "function" && typeof e.style.removeProperty == "function";
}
var AV = class {
	constructor(e) {
		this.element = e, this.initial = /* @__PURE__ */ new Map();
	}
	set(e, t = "") {
		let { element: n } = this;
		if (kV(n)) for (let [r, i] of Object.entries(e)) {
			let e = `${t}${r}`;
			this.initial.has(e) || this.initial.set(e, n.style.getPropertyValue(e)), n.style.setProperty(e, typeof i == "string" ? i : `${i}px`);
		}
	}
	remove(e, t = "") {
		let { element: n } = this;
		if (kV(n)) for (let r of e) {
			let e = `${t}${r}`;
			n.style.removeProperty(e);
		}
	}
	reset() {
		let { element: e } = this;
		if (kV(e)) {
			for (let [t, n] of this.initial) e.style.setProperty(t, n);
			e.getAttribute("style") === "" && e.removeAttribute("style");
		}
	}
};
function jV(e) {
	return e ? e instanceof Bz(e).Element || zz(e) && e.nodeType === Node.ELEMENT_NODE : !1;
}
function MV(e) {
	if (!e) return !1;
	let { KeyboardEvent: t } = Bz(e.target);
	return e instanceof t;
}
function NV(e) {
	if (!e) return !1;
	let { PointerEvent: t } = Bz(e.target);
	return e instanceof t;
}
function PV(e) {
	if (!jV(e)) return !1;
	let { tagName: t } = e;
	return t === "INPUT" || t === "TEXTAREA" || FV(e);
}
function FV(e) {
	return e.hasAttribute("contenteditable") && e.getAttribute("contenteditable") !== "false";
}
var IV = {};
function LV(e) {
	let t = IV[e] == null ? 0 : IV[e] + 1;
	return IV[e] = t, `${e}-${t}`;
}
//#endregion
//#region ../../node_modules/.pnpm/@dnd-kit+collision@0.5.0/node_modules/@dnd-kit/collision/dist/index.js
var RV = ({ dragOperation: e, droppable: t }) => {
	let n = e.position.current;
	if (!n) return null;
	let { id: r } = t;
	return t.shape && t.shape.containsPoint(n) ? {
		id: r,
		value: 1 / eL.distance(t.shape.center, n),
		type: UR.PointerIntersection,
		priority: HR.High
	} : null;
}, zV = ({ dragOperation: e, droppable: t }) => {
	let { shape: n } = e;
	if (!t.shape || !n?.current) return null;
	let r = n.current.intersectionArea(t.shape);
	if (r) {
		let { position: i } = e, a = eL.distance(t.shape.center, i.current), o = r / (n.current.area + t.shape.area - r) / a;
		return {
			id: t.id,
			value: o,
			type: UR.ShapeIntersection,
			priority: HR.Normal
		};
	}
	return null;
}, BV = (e) => RV(e) ?? zV(e), VV = Object.create, HV = Object.defineProperty, UV = Object.defineProperties, WV = Object.getOwnPropertyDescriptor, GV = Object.getOwnPropertyDescriptors, KV = Object.getOwnPropertySymbols, qV = Object.prototype.hasOwnProperty, JV = Object.prototype.propertyIsEnumerable, YV = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), XV = (e) => {
	throw TypeError(e);
}, ZV = (e, t, n) => t in e ? HV(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, QV = (e, t) => {
	for (var n in t ||= {}) qV.call(t, n) && ZV(e, n, t[n]);
	if (KV) for (var n of KV(t)) JV.call(t, n) && ZV(e, n, t[n]);
	return e;
}, $V = (e, t) => UV(e, GV(t)), eH = (e, t) => HV(e, "name", {
	value: t,
	configurable: !0
}), tH = (e, t) => {
	var n = {};
	for (var r in e) qV.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && KV) for (var r of KV(e)) t.indexOf(r) < 0 && JV.call(e, r) && (n[r] = e[r]);
	return n;
}, nH = (e) => [
	,
	,
	,
	VV(e?.[YV("metadata")] ?? null)
], rH = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], iH = (e) => e !== void 0 && typeof e != "function" ? XV("Function expected") : e, aH = (e, t, n, r, i) => ({
	kind: rH[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? XV("Already initialized") : i.push(iH(e || null))
}), oH = (e, t) => ZV(t, YV("metadata"), e[3]), sH = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, cH = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = rH[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && WV(d < 4 ? i : {
		get [n]() {
			return dH(this, a);
		},
		set [n](e) {
			return pH(this, a, e);
		}
	}, n));
	d ? p && d < 4 && eH(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : eH(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = aH(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => uH(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? dH : mH)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => pH(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? iH(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? XV("Object expected") : (iH(o = s.get) && (v.get = o), iH(o = s.set) && (v.set = o), iH(o = s.init) && g.unshift(o));
	return d || oH(e, i), v && HV(i, n, v), p ? d ^ 4 ? a : v : i;
}, lH = (e, t, n) => t.has(e) || XV("Cannot " + n), uH = (e, t) => Object(t) === t ? e.has(t) : XV("Cannot use the \"in\" operator on this value"), dH = (e, t, n) => (lH(e, t, "read from private field"), n ? n.call(e) : t.get(e)), fH = (e, t, n) => t.has(e) ? XV("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), pH = (e, t, n, r) => (lH(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), mH = (e, t, n) => (lH(e, t, "access private method"), n), hH = {
	role: "button",
	roleDescription: "draggable"
}, gH = "dnd-kit-description", _H = "dnd-kit-announcement", vH = { draggable: "To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel." }, yH = {
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
function bH(e) {
	let t = e.tagName.toLowerCase();
	return [
		"input",
		"select",
		"textarea",
		"a",
		"button"
	].includes(t);
}
function xH(e, t) {
	let n = document.createElement("div");
	return n.id = e, n.style.setProperty("display", "none"), n.textContent = t, n;
}
function SH(e) {
	let t = document.createElement("div");
	return t.id = e, t.setAttribute("role", "status"), t.setAttribute("aria-live", "polite"), t.setAttribute("aria-atomic", "true"), t.style.setProperty("position", "fixed"), t.style.setProperty("width", "1px"), t.style.setProperty("height", "1px"), t.style.setProperty("margin", "-1px"), t.style.setProperty("border", "0"), t.style.setProperty("padding", "0"), t.style.setProperty("overflow", "hidden"), t.style.setProperty("clip", "rect(0 0 0 0)"), t.style.setProperty("clip-path", "inset(100%)"), t.style.setProperty("white-space", "nowrap"), t;
}
var CH = ["dragover", "dragmove"], wH = class extends WL {
	constructor(e, t) {
		super(e);
		let { id: n, idPrefix: { description: r = gH, announcement: i = _H } = {}, announcements: a = yH, screenReaderInstructions: o = vH, debounce: s = 500 } = t ?? {}, c = n ? `${r}-${n}` : LV(r), l = n ? `${i}-${n}` : LV(i), u, d, f, p, m = (e = p) => {
			f && e && f?.nodeValue !== e && (f.nodeValue = e);
		}, h = () => XB.schedule(m), g = TH(h, s), _ = Object.entries(a).map(([e, t]) => this.manager.monitor.addEventListener(e, (n, r) => {
			let i = f;
			if (!i) return;
			let a = t?.(n, r);
			a && i.nodeValue !== a && (p = a, CH.includes(e) ? g() : (h(), g.cancel()));
		})), v = () => {
			let e = [];
			u?.isConnected || (u = xH(c, o.draggable), e.push(u)), d?.isConnected || (d = SH(l), f = document.createTextNode(""), d.appendChild(f), e.push(d)), e.length > 0 && document.body.append(...e);
		}, y = /* @__PURE__ */ new Set();
		function b() {
			for (let e of y) e();
		}
		this.registerEffect(() => {
			y.clear();
			for (let e of this.manager.registry.draggables.value) {
				let t = e.handle ?? e.element;
				if (t) {
					(!u || !d) && y.add(v), (!bH(t) || Qz()) && !t.hasAttribute("tabindex") && y.add(() => t.setAttribute("tabindex", "0")), !t.hasAttribute("role") && t.tagName.toLowerCase() !== "button" && y.add(() => t.setAttribute("role", hH.role)), t.hasAttribute("aria-roledescription") || y.add(() => t.setAttribute("aria-roledescription", hH.roleDescription)), t.hasAttribute("aria-describedby") || y.add(() => t.setAttribute("aria-describedby", c));
					for (let n of ["aria-pressed", "aria-grabbed"]) {
						let r = String(e.isDragging);
						t.getAttribute(n) !== r && y.add(() => t.setAttribute(n, r));
					}
					let n = String(e.disabled);
					t.getAttribute("aria-disabled") !== n && y.add(() => t.setAttribute("aria-disabled", n));
				}
			}
			y.size > 0 && XB.schedule(b);
		}), this.destroy = () => {
			super.destroy(), u?.remove(), d?.remove(), _.forEach((e) => e());
		};
	}
};
function TH(e, t) {
	let n, r = () => {
		clearTimeout(n), n = setTimeout(e, t);
	};
	return r.cancel = () => clearTimeout(n), r;
}
var EH = /* @__PURE__ */ new Map(), DH, OH, kH, AH, jH, MH, NH, PH, FH, IH, LH, RH, zH, BH = class extends (jH = GL, AH = [Y], kH = [iI], OH = [iI], DH = [iI], jH) {
	constructor(e, t) {
		super(e, t), sH(NH, 5, this), fH(this, FH), fH(this, MH, /* @__PURE__ */ new Set()), fH(this, PH, sH(NH, 8, this, /* @__PURE__ */ new Set())), sH(NH, 11, this), this.registerEffect(mH(this, FH, IH));
	}
	register(e) {
		return dH(this, MH).add(e), () => {
			dH(this, MH).delete(e);
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
		return tB(e?.element ?? null);
	}
	get targetRoot() {
		let { target: e } = this.manager.dragOperation;
		return tB(e?.element ?? null);
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
NH = nH(jH), MH = /* @__PURE__ */ new WeakMap(), PH = /* @__PURE__ */ new WeakMap(), FH = /* @__PURE__ */ new WeakSet(), IH = function() {
	let { roots: e } = this, t = [];
	for (let n of e) for (let e of dH(this, MH)) t.push(mH(this, FH, LH).call(this, n, e));
	return () => {
		for (let e of t) e();
	};
}, LH = function(e, t) {
	let n = EH.get(e);
	n || (n = /* @__PURE__ */ new Map(), EH.set(e, n));
	let r = n.get(t);
	if (!r) {
		let i = Vz(e) ? mH(this, FH, RH).call(this, e, n, t) : mH(this, FH, zH).call(this, e, n, t);
		if (!i) return () => {};
		r = i, n.set(t, r);
	}
	r.refCount++;
	let i = !1;
	return () => {
		i || (i = !0, r.refCount--, r.refCount === 0 && r.cleanup());
	};
}, RH = function(e, t, n) {
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
			a.disconnect(), r.remove(), t.delete(n), t.size === 0 && EH.delete(e);
		}
	};
}, zH = function(e, t, n) {
	!("adoptedStyleSheets" in e && Array.isArray(e.adoptedStyleSheets)) && process.env.NODE_ENV !== "production" && console.error("Cannot inject styles: This browser doesn't support adoptedStyleSheets");
	let { CSSStyleSheet: r } = e.ownerDocument.defaultView ?? {};
	if (!r) return process.env.NODE_ENV !== "production" && console.error("Cannot inject styles: CSSStyleSheet constructor not available"), null;
	let i = new r();
	return i.replaceSync(n), e.adoptedStyleSheets.push(i), {
		refCount: 0,
		cleanup: () => {
			if (eB(e) && e.host?.isConnected) {
				let t = e.adoptedStyleSheets.indexOf(i);
				t !== -1 && e.adoptedStyleSheets.splice(t, 1);
			}
			t.delete(n), t.size === 0 && EH.delete(e);
		}
	};
}, cH(NH, 4, "additionalRoots", AH, BH, PH), cH(NH, 2, "sourceRoot", kH, BH), cH(NH, 2, "targetRoot", OH, BH), cH(NH, 2, "roots", DH, BH), oH(NH, BH), BH.configure = RL(BH);
var VH = BH, HH = class extends WL {
	constructor(e, t) {
		super(e, t), this.manager = e;
		let { cursor: n = "grabbing" } = t ?? {}, r = e.registry.plugins.get(VH)?.register(`* { cursor: ${n} !important; }`);
		if (r) {
			let e = this.destroy.bind(this);
			this.destroy = () => {
				r(), e();
			};
		}
	}
}, UH = "data-dnd-", WH = `${UH}dropping`, GH = "--dnd-", KH = `${UH}dragging`, qH = `${UH}placeholder`, JH = [
	KH,
	qH,
	"popover",
	"aria-pressed",
	"aria-grabbing"
], YH = ["view-transition-name"], XH = `
  :is(:root,:host) [${KH}] {
    position: fixed !important;
    pointer-events: none !important;
    touch-action: none;
    z-index: calc(infinity);
    will-change: translate;
    top: var(${GH}top, 0px) !important;
    left: var(${GH}left, 0px) !important;
    right: unset !important;
    bottom: unset !important;
    width: var(${GH}width, auto);
    max-width: var(${GH}width, auto);
    height: var(${GH}height, auto);
    max-height: var(${GH}height, auto);
    transform: var(${GH}transform, none) !important;
    transition: var(${GH}transition) !important;
  }

  :is(:root,:host) [${qH}] {
    transition: none;
  }

  :is(:root,:host) [${qH}='hidden'] {
    visibility: hidden;
  }

  [${KH}] * {
    pointer-events: none !important;
  }

  [${KH}]:not([${WH}]) {
    translate: var(${GH}translate) !important;
  }

  [${KH}][style*='${GH}scale'] {
    scale: var(${GH}scale) !important;
    transform-origin: var(${GH}transform-origin) !important;
  }

  @layer dnd-kit {
    :where([${KH}][popover]) {
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
  [${KH}]::backdrop, [${UH}overlay]:not([${KH}]) {
    display: none;
    visibility: hidden;
  }
`.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
function ZH(e, t = "hidden") {
	return J(() => {
		let { element: n, manager: r } = e;
		if (!n || !r) return;
		let i = QH(n, r.registry.droppables), a = [], o = rB(n), { remove: s } = o;
		return $H(i, o, a), eU(o, t), o.remove = () => {
			a.forEach((e) => e()), s.call(o);
		}, o;
	});
}
function QH(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of t) if (r.element && (e === r.element || e.contains(r.element))) {
		let e = `${UH}${LV("dom-id")}`;
		r.element.setAttribute(e, ""), n.set(r, e);
	}
	return n;
}
function $H(e, t, n) {
	for (let [r, i] of e) {
		if (!r.element) continue;
		let e = `[${i}]`, a = t.matches(e) ? t : t.querySelector(e);
		if (r.element.removeAttribute(i), !a) continue;
		let o = r.element;
		r.proxy = a, a.removeAttribute(i), cB.set(o, a), n.push(() => {
			cB.delete(o), r.proxy = void 0;
		});
	}
}
function eU(e, t = "hidden") {
	e.setAttribute("inert", "true"), e.setAttribute("tab-index", "-1"), e.setAttribute("aria-hidden", "true"), e.setAttribute(qH, t);
}
function tU(e, t) {
	return e === t || dB(e) === dB(t);
}
function nU(e) {
	let { target: t } = e;
	"newState" in e && e.newState === "closed" && jV(t) && t.hasAttribute("popover") && requestAnimationFrame(() => GB(t));
}
function rU(e) {
	return e.tagName === "TR";
}
function iU(e, t, n) {
	let r = new MutationObserver((r) => {
		let i = !1;
		for (let n of r) {
			if (n.target !== e) {
				i = !0;
				continue;
			}
			if (n.type !== "attributes") continue;
			let r = n.attributeName;
			if (r.startsWith("aria-") || JH.includes(r)) continue;
			let a = e.getAttribute(r);
			if (r === "style") {
				if (kV(e) && kV(t)) {
					let n = e.style;
					for (let e of Array.from(t.style)) n.getPropertyValue(e) === "" && t.style.removeProperty(e);
					for (let e of Array.from(n)) {
						if (YH.includes(e) || e.startsWith(GH)) continue;
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
function aU(e, t, n) {
	let r = new MutationObserver((r) => {
		for (let i of r) if (i.addedNodes.length !== 0) for (let r of Array.from(i.addedNodes)) {
			if (r.contains(e) && e.nextElementSibling !== t) {
				e.insertAdjacentElement("afterend", t), GB(n);
				return;
			}
			if (r.contains(t) && t.previousElementSibling !== e) {
				t.insertAdjacentElement("beforebegin", e), GB(n);
				return;
			}
		}
		e.isConnected && t.isConnected && e.nextElementSibling !== t && (e.insertAdjacentElement("afterend", t), GB(n));
	});
	return r.observe(e.ownerDocument.body, {
		childList: !0,
		subtree: !0
	}), r;
}
function oU(e) {
	return new ResizeObserver(() => {
		var t;
		let n = new DV(e.placeholder, {
			frameTransform: e.frameTransform,
			ignoreTransforms: !0
		}), r = e.transformOrigin ?? {
			x: 1,
			y: 1
		}, i = (e.width - n.width) * r.x + e.delta.x, a = (e.height - n.height) * r.y + e.delta.y, o = $z();
		if (e.styles.set({
			width: n.width - e.widthOffset,
			height: n.height - e.heightOffset,
			top: e.top + a + o.y,
			left: e.left + i + o.x
		}, GH), (t = e.getElementMutationObserver()) == null || t.takeRecords(), rU(e.element) && rU(e.placeholder)) {
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
		e.dragOperation.shape = new tL(c * f.scaleX + f.x, l * f.scaleY + f.y, u * f.scaleX, d * f.scaleY);
	});
}
var sU = 250, cU = "ease";
function lU(e) {
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
	let { duration: r = sU, easing: i = cU } = n ?? {};
	GB(e.feedbackElement);
	let [, a] = Iz(e.feedbackElement, (e) => "translate" in e) ?? [];
	a?.pause();
	let o = e.placeholder ?? e.element, s = { frameTransform: tU(e.feedbackElement, o) ? null : void 0 }, c = new DV(e.feedbackElement, s), l = lV(eV(e.feedbackElement).translate) ?? e.translate, u = new DV(o, s), d = tL.delta(c, u, e.alignment), f = {
		x: l.x - d.x,
		y: l.y - d.y
	}, p = Math.round(c.intrinsicHeight) === Math.round(u.intrinsicHeight) ? {} : {
		minHeight: [`${c.intrinsicHeight}px`, `${u.intrinsicHeight}px`],
		maxHeight: [`${c.intrinsicHeight}px`, `${u.intrinsicHeight}px`]
	}, m = Math.round(c.intrinsicWidth) === Math.round(u.intrinsicWidth) ? {} : {
		minWidth: [`${c.intrinsicWidth}px`, `${u.intrinsicWidth}px`],
		maxWidth: [`${c.intrinsicWidth}px`, `${u.intrinsicWidth}px`]
	};
	e.styles.set({ transition: e.transition }, GH), e.feedbackElement.setAttribute(WH, ""), (t = e.getElementMutationObserver()) == null || t.takeRecords(), xV({
		element: e.feedbackElement,
		keyframes: $V(QV(QV({}, p), m), { translate: [`${l.x}px ${l.y}px 0`, `${f.x}px ${f.y}px 0`] }),
		options: {
			duration: nB(Bz(e.feedbackElement)) ? 0 : e.moved || e.feedbackElement !== e.element ? r : 0,
			easing: i
		}
	}).then(() => {
		e.feedbackElement.removeAttribute(WH), a?.finish(), e.cleanup(), requestAnimationFrame(e.restoreFocus);
	});
}
var uU, dU, fU, pU, mU, hU, gU, _U = class extends (dU = WL, uU = [Y], dU) {
	constructor(e, t) {
		super(e, t), fH(this, mU), fH(this, pU, sH(fU, 8, this)), sH(fU, 11, this), this.state = {
			initial: {},
			current: {}
		};
		let n = e.registry.plugins.get(VH), r = n?.register(XH);
		if (r) {
			let e = this.destroy.bind(this);
			this.destroy = () => {
				r(), e();
			};
		}
		this.registerEffect(mH(this, mU, hU).bind(this, n)), this.registerEffect(mH(this, mU, gU));
	}
};
fU = nH(dU), pU = /* @__PURE__ */ new WeakMap(), mU = /* @__PURE__ */ new WeakSet(), hU = function(e) {
	let { overlay: t } = this;
	if (!t || !e) return;
	let n = tB(t);
	if (n) return e.addRoot(n);
}, gU = function() {
	let { state: e, manager: t, options: n } = this, { dragOperation: r } = t, { position: i, source: a, status: o } = r;
	if (o.idle) {
		e.current = {}, e.initial = {};
		return;
	}
	if (!a) return;
	let { element: s } = a, c = a.pluginConfig(_U), l = c?.feedback ?? n?.feedback ?? "default", u = typeof l == "function" ? l(a, t) : l;
	if (!s || u === "none" || !o.initialized || o.initializing) return;
	let { initial: d } = e, f = this.overlay ?? s, p = oV(f), m = oV(s), h = !tU(s, f), g = new DV(s, {
		frameTransform: h ? m : null,
		ignoreTransforms: !h
	}), _ = {
		x: m.scaleX / p.scaleX,
		y: m.scaleY / p.scaleY
	}, { width: v, height: y, top: b, left: x } = g;
	h && (v /= _.x, y /= _.y);
	let S = new AV(f), C = eV(s), { transition: w, translate: T, boxSizing: E, paddingBlockStart: ee, paddingBlockEnd: D, paddingInlineStart: te, paddingInlineEnd: O, borderInlineStartWidth: k, borderInlineEndWidth: ne, borderBlockStartWidth: re, borderBlockEndWidth: ie } = C, A = w.split(",").filter((e) => !/^\s*(transform|translate|scale)\b/.test(e)).join(","), ae = uV(C), oe = C.transform, se = u === "clone", ce = E === "content-box", le = ce ? parseInt(te) + parseInt(O) + parseInt(k) + parseInt(ne) : 0, ue = ce ? parseInt(ee) + parseInt(D) + parseInt(re) + parseInt(ie) : 0, de = u !== "move" && !this.overlay ? ZH(a, se ? "clone" : "hidden") : null, fe = J(() => MV(t.dragOperation.activatorEvent));
	if (!d.translate) {
		if (this.overlay && ae) d.translate = {
			x: ae.x,
			y: ae.y
		};
		else if (T !== "none") {
			let e = lV(T);
			e && (d.translate = e);
		}
	}
	if (!d.transformOrigin) {
		let e = J(() => i.current), t = x + (ae?.x ?? 0), n = b + (ae?.y ?? 0);
		d.transformOrigin = {
			x: (e.x - t * p.scaleX - p.x) / (v * p.scaleX),
			y: (e.y - n * p.scaleY - p.y) / (y * p.scaleY)
		};
	}
	let { transformOrigin: j } = d, pe = b * p.scaleY + p.y, me = x * p.scaleX + p.x;
	if (!d.coordinates && (d.coordinates = {
		x: me,
		y: pe
	}, _.x !== 1 || _.y !== 1)) {
		let { scaleX: e, scaleY: t } = m, { x: n, y: r } = j;
		d.coordinates.x += (v * e - v) * n, d.coordinates.y += (y * t - y) * r;
	}
	d.dimensions ||= {
		width: v,
		height: y
	}, d.frameTransform ||= p;
	let he = {
		x: d.coordinates.x - me,
		y: d.coordinates.y - pe
	}, ge = {
		width: (d.dimensions.width * d.frameTransform.scaleX - v * p.scaleX) * j.x,
		height: (d.dimensions.height * d.frameTransform.scaleY - y * p.scaleY) * j.y
	}, _e = {
		x: he.x / p.scaleX + ge.width,
		y: he.y / p.scaleY + ge.height
	}, M = {
		left: x + _e.x,
		top: b + _e.y
	};
	f.setAttribute(KH, "true");
	let ve = J(() => r.transform), ye = d.translate ?? {
		x: 0,
		y: 0
	}, be = ve.x * p.scaleX + ye.x, xe = ve.y * p.scaleY + ye.y, Se = $z();
	S.set({
		width: v - le,
		height: y - ue,
		top: M.top + Se.y,
		left: M.left + Se.x,
		translate: `${be}px ${xe}px 0`,
		transform: this.overlay ? "none" : oe,
		transition: A ? `${A}, translate 0ms linear` : "translate 0ms linear",
		scale: h ? `${_.x} ${_.y}` : "",
		"transform-origin": `${j.x * 100}% ${j.y * 100}%`
	}, GH), de && (s.insertAdjacentElement("afterend", de), n?.rootElement && (typeof n.rootElement == "function" ? n.rootElement(a) : n.rootElement).appendChild(s)), WB(f) && (f.hasAttribute("popover") || f.setAttribute("popover", "manual"), GB(f), f.addEventListener("beforetoggle", nU));
	let Ce, we, N, Te = oU({
		placeholder: de,
		element: s,
		feedbackElement: f,
		frameTransform: p,
		transformOrigin: j,
		width: v,
		height: y,
		top: b,
		left: x,
		widthOffset: le,
		heightOffset: ue,
		delta: _e,
		styles: S,
		dragOperation: r,
		getTranslate: () => e.current.translate,
		getElementMutationObserver: () => Ce,
		getSavedCellWidths: () => N,
		setSavedCellWidths: (e) => {
			N = e;
		}
	}), Ee = new DV(f);
	J(() => r.shape = Ee);
	let De = Bz(f), Oe = (e) => {
		this.manager.actions.stop({ event: e });
	}, ke = nB(De);
	fe && De.addEventListener("resize", Oe), J(() => a.status) === "idle" && requestAnimationFrame(() => a.status = "dragging"), de && (Te.observe(de), Ce = iU(s, de, se), we = aU(s, de, f));
	let Ae = t.dragOperation.source?.id, je = () => {
		if (!fe || Ae == null) return;
		let e = t.registry.draggables.get(Ae), n = e?.handle ?? e?.element;
		Hz(n) && n.focus();
	}, Me = () => {
		Ce?.disconnect(), we?.disconnect(), Te.disconnect(), De.removeEventListener("resize", Oe), WB(f) && (f.removeEventListener("beforetoggle", nU), f.removeAttribute("popover")), f.removeAttribute(KH), S.reset();
		let t = () => {
			if (N && rU(s)) {
				let e = Array.from(s.cells);
				for (let [t, n] of e.entries()) n.style.width = N[t] ?? "";
			}
			a.status = "idle";
			let t = e.current.translate != null, n = r.status.dragging;
			de && (!n && t || de.parentElement !== f.parentElement) && f.isConnected && de.replaceWith(f), de?.remove();
		};
		f === this.overlay ? setTimeout(t, 0) : t();
	}, Ne = n?.dropAnimation, Pe = this, Fe = oI(() => {
		let { transform: t, status: i } = r;
		if ((t.x || t.y || e.current.translate) && i.dragging) {
			let i = d.translate ?? {
				x: 0,
				y: 0
			}, a = {
				x: t.x / p.scaleX + i.x,
				y: t.y / p.scaleY + i.y
			}, o = e.current.translate, s = J(() => r.modifiers), c = J(() => r.shape?.current), l = n?.keyboardTransition, u = fe && !ke && l !== null ? `${l?.duration ?? 250}ms ${l?.easing ?? "cubic-bezier(0.25, 1, 0.5, 1)"}` : "0ms linear";
			if (S.set({
				transition: A ? `${A}, translate ${u}` : `translate ${u}`,
				translate: `${a.x}px ${a.y}px 0`
			}, GH), Ce?.takeRecords(), c && c !== Ee && o && !s.length) {
				let e = eL.delta(a, o);
				r.shape = tL.from(c.boundingRectangle).translate(e.x * p.scaleX, e.y * p.scaleY);
			} else r.shape = new DV(f);
			e.current.translate = a;
		}
	}, function() {
		if (r.status.dropped) {
			this.dispose(), a.status = "dropping";
			let n = c?.dropAnimation === void 0 ? Pe.dropAnimation === void 0 ? Ne : Pe.dropAnimation : c.dropAnimation, r = e.current.translate, i = r != null;
			if (!r && s !== f && (r = {
				x: 0,
				y: 0
			}), !r || n === null) {
				Me();
				return;
			}
			t.renderer.rendering.then(() => {
				lU({
					source: a,
					element: s,
					feedbackElement: f,
					placeholder: de,
					translate: r,
					moved: i,
					transition: w,
					alignment: a.alignment,
					styles: S,
					animation: n ?? void 0,
					getElementMutationObserver: () => Ce,
					cleanup: Me,
					restoreFocus: je
				});
			});
		}
	});
	return () => {
		Me(), Fe();
	};
}, cH(fU, 4, "overlay", uU, _U, pU), oH(fU, _U), _U.configure = RL(_U);
var vU = _U, yU = !0, bU = !1, xU, SU, CU = [Y], wU = fV.Forward, TU, EU, DU;
SU = (xU = [Y], fV.Reverse);
var OU = class {
	constructor() {
		fH(this, EU, sH(TU, 8, this, yU)), sH(TU, 11, this), fH(this, DU, sH(TU, 12, this, yU)), sH(TU, 15, this);
	}
	isLocked(e) {
		return e === fV.Idle ? !1 : e == null ? this[fV.Forward] === yU && this[fV.Reverse] === yU : this[e] === yU;
	}
	unlock(e) {
		e !== fV.Idle && (this[e] = bU);
	}
};
TU = nH(null), EU = /* @__PURE__ */ new WeakMap(), DU = /* @__PURE__ */ new WeakMap(), cH(TU, 4, wU, CU, OU, EU), cH(TU, 4, SU, xU, OU, DU), oH(TU, OU);
var kU = [fV.Forward, fV.Reverse], AU = class {
	constructor() {
		this.x = new OU(), this.y = new OU();
	}
	isLocked() {
		return this.x.isLocked() && this.y.isLocked();
	}
}, jU = class extends WL {
	constructor(e) {
		super(e);
		let t = vF(new AU()), n = null;
		this.signal = t, OF(() => {
			let { status: r } = e.dragOperation;
			if (!r.initialized) {
				n = null, t.value = new AU();
				return;
			}
			let { delta: i } = e.dragOperation.position;
			if (n) {
				let e = {
					x: MU(i.x, n.x),
					y: MU(i.y, n.y)
				}, r = t.peek();
				sF(() => {
					for (let t of dL) for (let n of kU) e[t] === n && r[t].unlock(n);
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
function MU(e, t) {
	return Math.sign(e - t);
}
var NU, PU, FU, IU, LU, RU, zU = class extends (PU = GL, NU = [Y], PU) {
	constructor(e) {
		super(e), fH(this, IU, sH(FU, 8, this, !1)), sH(FU, 11, this), fH(this, LU), fH(this, RU, () => {
			if (!dH(this, LU)) return;
			let { element: e, by: t } = dH(this, LU);
			t.y && (e.scrollTop += t.y), t.x && (e.scrollLeft += t.x);
		}), this.scroll = (e, t) => {
			if (this.disabled) return !1;
			let n = this.getScrollableElements();
			if (!n) return pH(this, LU, void 0), !1;
			let { position: r } = this.manager.dragOperation, i = r?.current;
			if (i) {
				let { by: r } = e ?? {}, a = r ? {
					x: BU(r.x),
					y: BU(r.y)
				} : void 0, o = a ? void 0 : this.scrollIntentTracker.current;
				if (o?.isLocked()) return !1;
				for (let e of n) {
					let n = JB(e, r);
					if (n.x || n.y) {
						let { speed: n, direction: s } = hV(e, i, a, t?.acceleration, t?.threshold);
						if (o) for (let e of dL) o[e].isLocked(s[e]) && (n[e] = 0, s[e] = 0);
						if (s.x || s.y) {
							let { x: t, y: i } = r ?? s, a = t * n.x, o = i * n.y;
							if (a || o) {
								let t = dH(this, LU)?.by;
								if (this.autoScrolling && t && (t.x && !a || t.y && !o)) continue;
								return pH(this, LU, {
									element: e,
									by: {
										x: a,
										y: o
									}
								}), XB.schedule(dH(this, RU)), !0;
							}
						}
					}
				}
			}
			return pH(this, LU, void 0), !1;
		};
		let t = null, n = null, r = nI(() => {
			let { position: n, source: r } = e.dragOperation;
			if (!n) return null;
			let i = oB(tB(r?.element), n.current);
			return i && (t = i), i ?? t;
		}), i = nI(() => {
			let t = r.value, { documentElement: i } = Wz(t);
			if (!t || t === i) {
				let { target: t } = e.dragOperation, r = t?.element;
				if (r) {
					let e = aV(r, { excludeElement: !1 });
					return n = e, e;
				}
			}
			if (t) {
				let e = aV(t, { excludeElement: !1 });
				return this.autoScrolling && n && e.size < n?.size ? n : (n = e, e);
			}
			return n = null, null;
		}, rI);
		this.getScrollableElements = () => i.value, this.scrollIntentTracker = new jU(e), this.destroy = e.monitor.addEventListener("dragmove", (t) => {
			!this.disabled && !t.defaultPrevented && MV(e.dragOperation.activatorEvent) && t.by && this.scroll({ by: t.by }) && t.preventDefault();
		});
	}
};
FU = nH(PU), IU = /* @__PURE__ */ new WeakMap(), LU = /* @__PURE__ */ new WeakMap(), RU = /* @__PURE__ */ new WeakMap(), cH(FU, 4, "autoScrolling", NU, zU, IU), oH(FU, zU);
function BU(e) {
	return e > 0 ? fV.Forward : e < 0 ? fV.Reverse : fV.Idle;
}
var VU = new class {
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
}), HU = 10, UU = class extends WL {
	constructor(e, t) {
		super(e, t);
		let n = e.registry.plugins.get(zU);
		if (!n) throw Error("AutoScroller plugin depends on Scroller plugin");
		this.destroy = OF(() => {
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
					let t = setInterval(() => VU.schedule(() => n.scroll(void 0, e)), HU);
					return () => {
						clearInterval(t);
					};
				}
				n.autoScrolling = !1;
			}
		});
	}
};
UU.configure = RL(UU);
var WU = UU, GU = {
	capture: !0,
	passive: !0
}, KU, qU = class extends GL {
	constructor(e) {
		super(e), fH(this, KU), this.handleScroll = () => {
			dH(this, KU) ?? pH(this, KU, setTimeout(() => {
				this.manager.collisionObserver.forceUpdate(!1), pH(this, KU, void 0);
			}, 50));
		};
		let { dragOperation: t } = this.manager;
		this.destroy = OF(() => {
			if (t.status.dragging) {
				let e = t.source?.element?.ownerDocument ?? document;
				return e.addEventListener("scroll", this.handleScroll, GU), () => {
					e.removeEventListener("scroll", this.handleScroll, GU);
				};
			}
		});
	}
};
KU = /* @__PURE__ */ new WeakMap();
var JU = "* { user-select: none !important; -webkit-user-select: none !important; }", YU = class extends WL {
	constructor(e) {
		super(e), this.manager = e;
		let t = e.registry.plugins.get(VH)?.register(JU);
		if (this.destroy = OF(() => {
			let { dragOperation: e } = this.manager;
			if (e.status.initialized) return XU(), document.addEventListener("selectionchange", XU, { capture: !0 }), () => {
				document.removeEventListener("selectionchange", XU, { capture: !0 });
			};
		}), t) {
			let e = this.destroy.bind(this);
			this.destroy = () => {
				t(), e();
			};
		}
	}
};
function XU() {
	var e;
	(e = document.getSelection()) == null || e.removeAllRanges();
}
var ZU = Object.freeze({
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
}), QU, $U = class extends tz {
	constructor(e, t) {
		super(e), this.manager = e, this.options = t, fH(this, QU, []), this.listeners = new uB(), this.handleSourceKeyDown = (e, t, n) => {
			if (this.disabled || e.defaultPrevented || !jV(e.target) || t.disabled) return;
			let { keyboardCodes: r = ZU.keyboardCodes, preventActivation: i = ZU.preventActivation } = n ?? {};
			r.start.includes(e.code) && this.manager.dragOperation.status.idle && (i?.(e, t) || this.handleStart(e, t, n));
		};
	}
	bind(e, t = this.options) {
		return OF(() => {
			let n = e.handle ?? e.element, r = (n) => {
				MV(n) && this.handleSourceKeyDown(n, e, t);
			};
			if (n) return n.addEventListener("keydown", r), () => {
				n.removeEventListener("keydown", r);
			};
		});
	}
	handleStart(e, t, n) {
		let { element: r } = t;
		if (!r) throw Error("Source draggable does not have an associated element");
		e.preventDefault(), e.stopImmediatePropagation(), gV(r);
		let { center: i } = new DV(r);
		if (this.manager.actions.start({
			event: e,
			coordinates: {
				x: i.x,
				y: i.y
			},
			source: t
		}).signal.aborted) return this.cleanup();
		this.sideEffects();
		let a = Wz(r), o = [this.listeners.bind(a, [{
			type: "keydown",
			listener: (e) => this.handleKeyDown(e, t, n),
			options: { capture: !0 }
		}])];
		dH(this, QU).push(...o);
	}
	handleKeyDown(e, t, n) {
		let { keyboardCodes: r = ZU.keyboardCodes } = n ?? {};
		if (tW(e, [...r.end, ...r.cancel])) {
			e.preventDefault();
			let t = tW(e, r.cancel);
			this.handleEnd(e, t);
			return;
		}
		tW(e, r.up) ? this.handleMove("up", e) : tW(e, r.down) && this.handleMove("down", e), tW(e, r.left) ? this.handleMove("left", e) : tW(e, r.right) && this.handleMove("right", e);
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
		}, a = this.options?.offset ?? ZU.offset;
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
		let e = this.manager.registry.plugins.get(WU);
		e?.disabled === !1 && (e.disable(), dH(this, QU).push(() => {
			e.enable();
		}));
	}
	cleanup() {
		dH(this, QU).forEach((e) => e()), pH(this, QU, []);
	}
	destroy() {
		this.cleanup(), this.listeners.clear();
	}
};
QU = /* @__PURE__ */ new WeakMap(), $U.configure = RL($U), $U.defaults = ZU;
var eW = $U;
function tW(e, t) {
	return t.includes(e.code);
}
var nW, rW = class extends iz {
	constructor() {
		super(...arguments), fH(this, nW);
	}
	onEvent(e) {
		switch (e.type) {
			case "pointerdown":
				pH(this, nW, Yz(e));
				break;
			case "pointermove":
				if (!dH(this, nW)) return;
				let { x: t, y: n } = Yz(e), r = {
					x: t - dH(this, nW).x,
					y: n - dH(this, nW).y
				}, { tolerance: i } = this.options;
				if (i && lL(r, i)) {
					this.abort();
					return;
				}
				lL(r, this.options.value) && this.activate(e);
				break;
			case "pointerup": this.abort();
		}
	}
	abort() {
		pH(this, nW, void 0);
	}
};
nW = /* @__PURE__ */ new WeakMap();
var iW, aW, oW = class extends iz {
	constructor() {
		super(...arguments), fH(this, iW), fH(this, aW);
	}
	onEvent(e) {
		switch (e.type) {
			case "pointerdown":
				pH(this, aW, Yz(e)), pH(this, iW, setTimeout(() => this.activate(e), this.options.value));
				break;
			case "pointermove":
				if (!dH(this, aW)) return;
				let { x: t, y: n } = Yz(e);
				lL({
					x: t - dH(this, aW).x,
					y: n - dH(this, aW).y
				}, this.options.tolerance) && this.abort();
				break;
			case "pointerup": this.abort();
		}
	}
	abort() {
		dH(this, iW) && (clearTimeout(dH(this, iW)), pH(this, aW, void 0), pH(this, iW, void 0));
	}
};
iW = /* @__PURE__ */ new WeakMap(), aW = /* @__PURE__ */ new WeakMap();
var sW = class {};
sW.Delay = oW, sW.Distance = rW;
var cW = Object.freeze({
	activationConstraints(e, t) {
		let { pointerType: n, target: r } = e;
		if (n !== "mouse" || !jV(r) || t.handle !== r && !t.handle?.contains(r)) return n === "touch" ? [new sW.Delay({
			value: 250,
			tolerance: 5
		})] : PV(r) && !e.defaultPrevented ? [new sW.Delay({
			value: 200,
			tolerance: 0
		})] : [new sW.Delay({
			value: 200,
			tolerance: 10
		}), new sW.Distance({ value: 5 })];
	},
	preventActivation(e, t) {
		let { target: n } = e;
		if (n === t.element || n === t.handle || !jV(n) || t.handle?.contains(n)) return !1;
		let r = lB(n);
		return r !== t.element && !!r;
	}
}), lW, uW = class extends tz {
	constructor(e, t) {
		super(e), this.manager = e, this.options = t, fH(this, lW, /* @__PURE__ */ new Set()), this.listeners = new uB(), this.latest = {
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
		let { activationConstraints: r = cW.activationConstraints } = n ?? {};
		return typeof r == "function" ? r(e, t) : r;
	}
	bind(e, t = this.options) {
		return OF(() => {
			let n = new AbortController(), { signal: r } = n, i = (n) => {
				NV(n) && this.handlePointerDown(n, e, t);
			}, a = [e.handle ?? e.element];
			t?.activatorElements && (a = Array.isArray(t.activatorElements) ? t.activatorElements : t.activatorElements(e));
			for (let e of a) e && (gW(e.ownerDocument.defaultView), e.addEventListener("pointerdown", i, { signal: r }));
			return () => n.abort();
		});
	}
	handlePointerDown(e, t, n) {
		if (this.disabled || !e.isPrimary || e.button !== 0 || !jV(e.target) || t.disabled || fW(e) || !this.manager.dragOperation.status.idle) return;
		let { preventActivation: r = cW.preventActivation } = n ?? {};
		if (r?.(e, t)) return;
		let { target: i } = e, a = Hz(i) && i.draggable && i.getAttribute("draggable") === "true", o = oV(t.element), { x: s, y: c } = Yz(e);
		this.initialCoordinates = {
			x: s * o.scaleX + o.x,
			y: c * o.scaleY + o.y
		};
		let l = this.activationConstraints(e, t, n);
		e.sensor = this;
		let u = new nz(l, (e) => this.handleStart(t, e));
		u.signal.onabort = () => this.handleCancel(e), u.onEvent(e), this.controller = u;
		let d = Zz(), f = this.listeners.bind(d, [
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
				listener: a ? this.handleCancel : pW,
				options: { capture: !0 }
			}
		]);
		dH(this, lW).add(() => {
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
			let n = Yz(e), r = oV(t.element);
			n.x = n.x * r.scaleX + r.x, n.y = n.y * r.scaleY + r.y, e.preventDefault(), e.stopPropagation(), this.latest.event = e, this.latest.coordinates = n, XB.schedule(this.handleMove);
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
		let i = Wz(t.target).body;
		try {
			i.setPointerCapture(t.pointerId);
		} catch {
			this.handleCancel(t);
			return;
		}
		let a = jV(t.target) ? [t.target, i] : i, o = this.listeners.bind(a, [
			{
				type: "touchmove",
				listener: pW,
				options: { passive: !1 }
			},
			{
				type: "click",
				listener: pW
			},
			{
				type: "contextmenu",
				listener: pW
			},
			{
				type: "keydown",
				listener: this.handleKeyDown
			}
		]);
		dH(this, lW).add(o);
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
		}, dH(this, lW).forEach((e) => e()), dH(this, lW).clear();
	}
	destroy() {
		this.cleanup(), this.listeners.clear();
	}
};
lW = /* @__PURE__ */ new WeakMap(), uW.configure = RL(uW), uW.defaults = cW;
var dW = uW;
function fW(e) {
	return "sensor" in e;
}
function pW(e) {
	e.preventDefault();
}
function mW() {}
var hW = /* @__PURE__ */ new WeakSet();
function gW(e) {
	e && !hW.has(e) && (e.addEventListener("touchmove", mW, {
		capture: !1,
		passive: !1
	}), hW.add(e));
}
var _W = {
	modifiers: [],
	plugins: [
		wH,
		WU,
		HH,
		vU,
		YU
	],
	sensors: [dW, eW]
}, vW = class extends kz {
	constructor(e = {}) {
		let t = Oz(e.plugins, _W.plugins), n = Oz(e.sensors, _W.sensors), r = Oz(e.modifiers, _W.modifiers);
		super($V(QV({}, e), {
			plugins: [
				qU,
				zU,
				VH,
				...t
			],
			sensors: n,
			modifiers: r
		}));
	}
}, yW, bW, xW, SW, CW, wW, TW = class extends (xW = CR, bW = [Y], yW = [Y], xW) {
	constructor(e, t) {
		var n = e, { element: r, effects: i = () => [], handle: a } = n, o = tH(n, [
			"element",
			"effects",
			"handle"
		]);
		super(QV({ effects: () => [...i(), () => {
			let { manager: e } = this;
			if (!e) return;
			let t = (this.sensors?.map(zL) ?? [...e.sensors]).map((t) => {
				let n = t instanceof tz ? t : e.registry.register(t.plugin), r = t instanceof tz ? void 0 : t.options;
				return n.bind(this, r);
			});
			return function() {
				t.forEach((e) => e());
			};
		}] }, o), t), fH(this, CW, sH(SW, 8, this)), sH(SW, 11, this), fH(this, wW, sH(SW, 12, this)), sH(SW, 15, this), this.element = r, this.handle = a;
	}
};
SW = nH(xW), CW = /* @__PURE__ */ new WeakMap(), wW = /* @__PURE__ */ new WeakMap(), cH(SW, 4, "handle", bW, TW, CW), cH(SW, 4, "element", yW, TW, wW), oH(SW, TW);
var EW, DW, OW, kW, AW, jW, MW, NW, PW, FW, IW = class extends (OW = LR, DW = [Y], EW = [Y], OW) {
	constructor(e, t) {
		var n = e, { element: r, effects: i = () => [] } = n, a = tH(n, ["element", "effects"]);
		let { collisionDetector: o = BV } = a, s = (e) => {
			let { manager: t, element: n } = this;
			if (!n || e === null) {
				this.shape = void 0;
				return;
			}
			if (!t) return;
			let r = new DV(n), i = J(() => this.shape);
			return r && i?.equals(r) ? i : (this.shape = r, r);
		}, c = vF(!1);
		super($V(QV({}, a), {
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
						let t = new UB(e, s);
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
		}), t), fH(this, PW), fH(this, AW, sH(kW, 8, this)), sH(kW, 11, this), fH(this, FW, sH(kW, 12, this)), sH(kW, 15, this), this.element = r, this.refreshShape = () => s();
	}
	set element(e) {
		pH(this, PW, e, NW);
	}
	get element() {
		return this.proxy ?? dH(this, PW, MW);
	}
};
kW = nH(OW), AW = /* @__PURE__ */ new WeakMap(), PW = /* @__PURE__ */ new WeakSet(), FW = /* @__PURE__ */ new WeakMap(), jW = cH(kW, 20, "#element", DW, PW, AW), MW = jW.get, NW = jW.set, cH(kW, 4, "proxy", EW, IW, FW), oH(kW, IW);
//#endregion
//#region ../../node_modules/.pnpm/@dnd-kit+react@0.5.0_react-dom@19.3.0_react@19.3.0/node_modules/@dnd-kit/react/utilities.js
function LW(e) {
	return typeof e == "object" && !!e && "current" in e;
}
function RW(e) {
	if (e != null) return LW(e) ? e.current ?? void 0 : e;
}
//#endregion
//#region ../../node_modules/.pnpm/@dnd-kit+react@0.5.0_react-dom@19.3.0_react@19.3.0/node_modules/@dnd-kit/react/hooks.js
var zW = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? x : _;
function BW() {
	let e = T(0)[1];
	return h(() => {
		e((e) => e + 1);
	}, [e]);
}
function VW(e, t = !1) {
	let n = w(e.peek()), r = w(!1), i = BW();
	return zW(() => OF(() => {
		let a = n.current, o = e.value;
		if (a !== o) {
			if (n.current = o, !r.current) return;
			t ? Ie(i) : i();
		}
	}), [
		e,
		t,
		i
	]), { get value() {
		return r.current = !0, e.peek();
	} };
}
function HW(e, t = [], n = !1) {
	let r = w(e);
	return r.current = e, VW(S(() => nI(() => r.current()), t), n);
}
function UW(e, t) {
	let n = w(/* @__PURE__ */ new Map()), r = BW();
	return zW(() => {
		if (!e) {
			n.current.clear();
			return;
		}
		return OF(() => {
			let i = !1, a = !1;
			for (let r of n.current) {
				let [o] = r, s = J(() => r[1]), c = e[o];
				s !== c && (i = !0, n.current.set(o, c), a = t?.(o, s, c) ?? !1);
			}
			i && (a ? queueMicrotask(() => Ie(r)) : r());
		});
	}, [e]), S(() => e && new Proxy(e, { get(e, t) {
		let r = e[t];
		return n.current.set(t, r), r;
	} }), [e]);
}
function WW(e) {
	let t = w(e);
	return zW(() => {
		t.current = e;
	}, [e]), t;
}
function GW(e, t, n = _, r = Object.is) {
	let i = w(e);
	n(() => {
		let n = i.current;
		r(e, n) || (i.current = e, t(e, n));
	}, [t, e]);
}
function KW(e, t) {
	let n = w(RW(e));
	zW(() => {
		let r = RW(e);
		r !== n.current && (n.current = r, t(r));
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@dnd-kit+react@0.5.0_react-dom@19.3.0_react@19.3.0/node_modules/@dnd-kit/react/index.js
var qW = Object.defineProperty, JW = Object.defineProperties, YW = Object.getOwnPropertyDescriptors, XW = Object.getOwnPropertySymbols, ZW = Object.prototype.hasOwnProperty, QW = Object.prototype.propertyIsEnumerable, $W = (e, t, n) => t in e ? qW(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, eG = (e, t) => {
	for (var n in t ||= {}) ZW.call(t, n) && $W(e, n, t[n]);
	if (XW) for (var n of XW(t)) QW.call(t, n) && $W(e, n, t[n]);
	return e;
}, tG = (e, t) => JW(e, YW(t)), nG = (e, t) => {
	var n = {};
	for (var r in e) ZW.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && XW) for (var r of XW(e)) t.indexOf(r) < 0 && QW.call(e, r) && (n[r] = e[r]);
	return n;
}, rG = new vW(), iG = l(rG), aG = p(d(({ children: e }, t) => {
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
	return zW(() => {
		var e;
		(e = a.current) == null || e.call(a), i.current = null;
	}, [e, n]), y(t, () => o), null;
})), oG = [void 0, rI];
function sG(e) {
	var t = e, { children: n, onCollision: r, onBeforeDragStart: i, onDragStart: a, onDragMove: o, onDragOver: s, onDragEnd: c } = t, l = nG(t, [
		"children",
		"onCollision",
		"onBeforeDragStart",
		"onDragStart",
		"onDragMove",
		"onDragOver",
		"onDragEnd"
	]);
	let u = w(null), { plugins: d, modifiers: f, sensors: p } = l, m = Oz(d, _W.plugins), h = Oz(p, _W.sensors), g = Oz(f, _W.modifiers), v = WW(i), y = WW(a), b = WW(s), x = WW(o), S = WW(c), C = WW(r), T = cG(() => l.manager ?? new vW(l));
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
	}, [T]), GW(m, () => T && (T.plugins = m), ...oG), GW(h, () => T && (T.sensors = h), ...oG), GW(g, () => T && (T.modifiers = g), ...oG), /* @__PURE__ */ (0, R.jsxs)(iG.Provider, {
		value: T,
		children: [/* @__PURE__ */ (0, R.jsx)(aG, {
			ref: u,
			children: n
		}), n]
	});
}
function cG(e) {
	let t = w(null);
	return t.current ||= e(), b(() => () => t.current?.destroy(), []), t.current;
}
function lG() {
	return g(iG);
}
function uG(e) {
	let t = lG() ?? void 0, [n] = T(() => e(t));
	return n.manager !== t && (n.manager = t), zW(n.register, [t, n]), n;
}
function dG(e) {
	let { disabled: t, data: n, element: r, handle: i, id: a, modifiers: o, sensors: s, plugins: c } = e, l = uG((t) => new TW(tG(eG({}, e), {
		register: !1,
		handle: RW(i),
		element: RW(r)
	}), t)), u = UW(l, fG);
	return GW(a, () => l.id = a), KW(i, (e) => l.handle = e), KW(r, (e) => l.element = e), GW(n, () => n && (l.data = n)), GW(t, () => l.disabled = t === !0), GW(s, () => l.sensors = s, void 0, rI), GW(o, () => l.modifiers = o, void 0, rI), GW(c, () => l.plugins = c, void 0, rI), GW(e.alignment, () => l.alignment = e.alignment), {
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
function fG(e, t, n) {
	return !(e !== "isDragSource" || n || !t);
}
function pG({ children: e, className: t, dropAnimation: n, style: r, tag: i, disabled: a }) {
	let o = w(null), s = lG(), c = HW(() => s?.dragOperation.source, [s]).value ?? null, l = typeof a == "function" ? a(c) : a;
	_(() => {
		if (!o.current || !s || l) return;
		let e = s.plugins.find((e) => e instanceof vU);
		if (e) return e.overlay = o.current, () => {
			e.overlay = void 0;
		};
	}, [s, l]), _(() => {
		if (!s) return;
		let e = s.plugins.find((e) => e instanceof vU);
		if (e) return e.dropAnimation = n, () => {
			e.dropAnimation = void 0;
		};
	}, [s, n]);
	let d = S(() => {
		if (!s) return null;
		let e = new Proxy(s.registry, { get(e, t) {
			return t === "register" || t === "unregister" ? mG : e[t];
		} });
		return new Proxy(s, { get(t, n) {
			return n === "registry" ? e : t[n];
		} });
	}, [s]);
	return /* @__PURE__ */ (0, R.jsx)(iG.Provider, {
		value: d,
		children: u(i || "div", {
			ref: o,
			className: t,
			style: r,
			"data-dnd-overlay": !0
		}, f())
	});
	function f() {
		return !c || l ? null : typeof e == "function" ? /* @__PURE__ */ (0, R.jsx)(hG, {
			source: c,
			children: e
		}) : e;
	}
}
function mG() {
	return () => {};
}
function hG({ children: e, source: t }) {
	return e(UW(t));
}
var gG = Object.create, _G = Object.defineProperty, vG = Object.getOwnPropertyDescriptor, yG = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), bG = (e) => {
	throw TypeError(e);
}, xG = (e, t, n) => t in e ? _G(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, SG = (e) => [
	,
	,
	,
	gG(e?.[yG("metadata")] ?? null)
], CG = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], wG = (e) => e !== void 0 && typeof e != "function" ? bG("Function expected") : e, TG = (e, t, n, r, i) => ({
	kind: CG[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? bG("Already initialized") : i.push(wG(e || null))
}), EG = (e, t) => xG(t, yG("metadata"), e[3]), DG = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) a[i].call(n);
	return r;
}, OG = (e, t, n, r, i, a) => {
	for (var o, s, c, l, u = t & 7, d = !1, f = !1, p = 2, m = CG[u + 5], h = e[p] || (e[p] = []), g = (i = i.prototype, vG(i, n)), _ = r.length - 1; _ >= 0; _--) c = TG(u, n, s = {}, e[3], h), c.static = d, c.private = f, l = c.access = { has: (e) => n in e }, l.get = (e) => e[n], o = (0, r[_])(g[m], c), s._ = 1, wG(o) && (g[m] = o);
	return g && _G(i, n, g), i;
}, kG = (e, t, n) => t.has(e) || bG("Cannot " + n), AG = (e, t, n) => (kG(e, t, "read from private field"), t.get(e)), jG = (e, t, n) => t.has(e) ? bG("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), MG = (e, t, n, r) => (kG(e, t, "write to private field"), t.set(e, n), n), NG = class e {
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
}, PG, FG, IG, LG, RG, zG = class extends (IG = DI, FG = [iI], PG = [iI], IG) {
	constructor(e) {
		let t = NG.from(e);
		super(t, (e, t) => NG.equals(e, t)), DG(RG, 5, this), jG(this, LG, 0), this.velocity = {
			x: 0,
			y: 0
		};
	}
	get delta() {
		return NG.delta(this.current, this.initial);
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
		let { current: t } = this, n = NG.from(e), r = {
			x: n.x - t.x,
			y: n.y - t.y
		}, i = Date.now(), a = i - AG(this, LG), o = (e) => Math.round(e / a * 100);
		sF(() => {
			MG(this, LG, i), this.velocity = {
				x: o(r.x),
				y: o(r.y)
			}, super.current = n;
		});
	}
	reset(e = this.defaultValue) {
		super.reset(NG.from(e)), this.velocity = {
			x: 0,
			y: 0
		};
	}
};
RG = SG(IG), LG = /* @__PURE__ */ new WeakMap(), OG(RG, 2, "delta", FG, zG), OG(RG, 2, "direction", PG, zG), EG(RG, zG);
var BG = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(BG || {});
Object.values(BG);
var VG = ({ dragOperation: e, droppable: t }) => {
	let n = e.position.current;
	if (!n) return null;
	let { id: r } = t;
	return t.shape && t.shape.containsPoint(n) ? {
		id: r,
		value: 1 / NG.distance(t.shape.center, n),
		type: UR.PointerIntersection,
		priority: HR.High
	} : null;
}, HG = ({ dragOperation: e, droppable: t }) => {
	let { shape: n } = e;
	if (!t.shape || !n?.current) return null;
	let r = n.current.intersectionArea(t.shape);
	if (r) {
		let { position: i } = e, a = NG.distance(t.shape.center, i.current), o = r / (n.current.area + t.shape.area - r) / a;
		return {
			id: t.id,
			value: o,
			type: UR.ShapeIntersection,
			priority: HR.Normal
		};
	}
	return null;
}, UG = (e) => VG(e) ?? HG(e);
function WG(e) {
	let { collisionDetector: t, data: n, disabled: r, element: i, id: a, accept: o, type: s } = e, c = uG((t) => new IW(tG(eG({}, e), {
		register: !1,
		element: RW(i)
	}), t)), l = UW(c);
	return GW(a, () => c.id = a), KW(i, (e) => c.element = e), GW(o, () => c.accept = o, void 0, rI), GW(t, () => c.collisionDetector = t ?? UG), GW(n, () => n && (c.data = n)), GW(r, () => c.disabled = r === !0), GW(s, () => c.type = s), {
		droppable: l,
		get isDropTarget() {
			return l.isDropTarget;
		},
		ref: h((e) => {
			(e || !c.element?.isConnected || c.manager?.dragOperation.status.idle) && (c.element = e ?? void 0);
		}, [c])
	};
}
function GG() {
	let e = lG(), t = HW(() => e?.dragOperation.source, [e]), n = HW(() => e?.dragOperation.target, [e]);
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
var KG = {
	ARROW_UP: "ArrowUp",
	ARROW_DOWN: "ArrowDown",
	HOME: "Home",
	END: "End",
	PAGE_UP: "PageUp",
	PAGE_DOWN: "PageDown",
	ENTER: "Enter",
	SPACE: "Space"
};
function qG(e) {
	return e.ctrlKey || e.metaKey || e.shiftKey || e.altKey;
}
function JG(e) {
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
function YG(e, t) {
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
				...o > 0 ? { calculateViewLocation: JG(o) } : {}
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
		if (!e || qG(e)) {
			o?.(e);
			return;
		}
		if (s) {
			o?.(e);
			return;
		}
		if (e.code === KG.ARROW_UP && t !== void 0) O(t - 1, !1), r = !0;
		else if (e.code === KG.ARROW_DOWN && t !== void 0) O(t + 1, !0), r = !0;
		else if (e.code === KG.HOME) te(0), r = !0;
		else if (e.code === KG.END) te(n.length - 1), r = !0;
		else if (e.code === KG.PAGE_DOWN && x && t !== void 0) {
			let e = x.endIndex - x.startIndex;
			O(Math.min(t + e, n.length - 1), !0, "start"), r = !0;
		} else if (e.code === KG.PAGE_UP && x && t !== void 0) {
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
	]), ne = h((e) => {
		v.current = e, f?.(e);
	}, [f]), re = h((e, t) => {
		let n = i(e);
		D(!0), b(n), t.stopPropagation();
	}, [i]), ie = h((e) => {
		if (e?.currentTarget !== v.current || typeof y != "string") return;
		D(!0);
		let t = E.get(y);
		t !== void 0 && x && (t < x.startIndex || t > x.endIndex) && te(t), e.stopPropagation(), e.preventDefault();
	}, [
		E,
		x,
		te,
		y
	]), A = h((e) => {
		e.currentTarget.contains(e.relatedTarget) || D(!1);
	}, []), ae = S(() => ({
		tabIndexKey: y,
		focused: ee,
		context: e.context || {}
	}), [
		y,
		ee,
		e.context
	]), oe = h((e) => {
		let t = d ? {
			startIndex: d(e.startIndex),
			endIndex: d(e.endIndex)
		} : e;
		C(t), l?.(e);
	}, [l, d]), se = h((e) => {
		g.current = e, t?.(e);
	}, [t]), ce = h((e, t) => i(t), [i]);
	return {
		...m,
		computeItemKey: ce,
		ref: se,
		scrollerRef: ne,
		onKeyDown: k,
		onFocus: ie,
		onBlur: A,
		rangeChanged: oe,
		onFocusForGetItemComponent: re,
		context: ae
	};
}
//#endregion
//#region src/core/VirtualizedList/FlatVirtualizedList/FlatVirtualizedList.tsx
function XG(e) {
	let { getItemComponent: t, scrollHandleRef: n, ...r } = e, { onFocusForGetItemComponent: i, ...a } = YG(r, n), o = h((e, n, r) => t(e, n, r, i), [t, i]);
	return /* @__PURE__ */ (0, R.jsx)(Pe, {
		itemContent: o,
		data: e.items,
		...a
	});
}
var ZG = {
	stickyRoot: "_stickyRoot_3tgsb_12",
	stickyHeader: "_stickyHeader_3tgsb_32",
	stickyRow: "_stickyRow_3tgsb_23"
}, QG = o.forwardRef(function({ item: e, context: t, children: n, ...r }, i) {
	let a = typeof e == "object" && !!e && "header" in e;
	return /* @__PURE__ */ (0, R.jsx)("div", {
		...r,
		ref: i,
		className: a ? ZG.stickyRow : void 0,
		children: n
	});
});
function $G(e) {
	let { getItemComponent: t, groups: n, getGroupHeaderComponent: r, isItemFocusable: i, isGroupHeaderFocusable: a, getItemKey: o, getHeaderKey: s, scrollHandleRef: c, renderStickyHeader: l, ...u } = e, [d, f] = T(0), p = S(() => n.flatMap((e) => [{ header: e.header }, ...e.items.map((e) => ({ item: e }))]), [n]), m = S(() => n.flatMap((e, t) => Array(1 + e.items.length).fill(t)), [n]), g = h((e) => {
		let t = p[e];
		return t && "header" in t ? 0 : d;
	}, [p, d]), v = h((e) => "header" in e ? s(e.header) : o(e.item), [s, o]), y = h((e) => "header" in e ? a(e.header) : i(e.item), [a, i]), { onFocusForGetItemComponent: b, scrollerRef: C, ...E } = YG({
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
	]), O = w([]), k = w(null), ne = w(null), [re, ie] = T(0), A = h(() => {
		let e = ne.current;
		if (!e || m.length === 0) return;
		let t = e.scrollTop, n = O.current, r = n.length ? n[0].index : 0, i = n.length ? n[0].offset : 0;
		for (let e of n) e.offset <= t + 1 && e.offset > i && (i = e.offset, r = e.index);
		let a = m[r] ?? 0;
		ie((e) => e === a ? e : a);
	}, [m]), ae = h((e) => {
		O.current = e.map((e) => ({
			index: e.index,
			offset: e.offset
		})), A();
	}, [A]), oe = h((e) => {
		C?.(e), ne.current = e instanceof HTMLElement ? e : null;
	}, [C]), se = h((e) => {
		let t = ne.current;
		t && (t.scrollTop += e.deltaY * (e.deltaMode === 1 ? 16 : 1));
	}, []);
	x(() => {
		k.current && f(k.current.offsetHeight);
	}, [re, n]), _(() => {
		A();
	}, [n, A]);
	let ce = Math.min(re, n.length - 1), le = l && ce >= 0 ? l(ce, n[ce].header, E.context) : null;
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: ZG.stickyRoot,
		children: [le != null && /* @__PURE__ */ (0, R.jsx)("div", {
			className: ZG.stickyHeader,
			ref: k,
			onWheel: se,
			children: le
		}), /* @__PURE__ */ (0, R.jsx)(Pe, {
			itemContent: te,
			data: p,
			...E,
			components: { Item: QG },
			scrollerRef: oe,
			itemsRendered: ae,
			onScroll: A
		})]
	});
}
//#endregion
//#region src/core/VirtualizedList/accessbility.ts
function eK(e, t) {
	switch (e) {
		case "listbox": return { role: "listbox" };
		case "treegrid": return {
			role: "treegrid",
			"aria-rowcount": t
		};
	}
}
function tK(e, t, n) {
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
function nK(e, t, n) {
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
var rK = Object.defineProperty, iK = Object.defineProperties, aK = Object.getOwnPropertyDescriptors, oK = Object.getOwnPropertySymbols, sK = Object.prototype.hasOwnProperty, cK = Object.prototype.propertyIsEnumerable, lK = (e, t, n) => t in e ? rK(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, uK = (e, t) => {
	for (var n in t ||= {}) sK.call(t, n) && lK(e, n, t[n]);
	if (oK) for (var n of oK(t)) cK.call(t, n) && lK(e, n, t[n]);
	return e;
}, dK = (e, t) => iK(e, aK(t)), fK = class extends az {
	apply({ transform: e }) {
		if (!this.options) return e;
		let { axis: t, value: n } = this.options;
		return dK(uK({}, e), { [t]: n });
	}
};
fK.configure = RL(fK);
var pK = fK, mK = pK.configure({
	axis: "x",
	value: 0
});
pK.configure({
	axis: "y",
	value: 0
});
var hK = class extends az {
	apply({ transform: e }) {
		let { size: t = 20 } = this.options ?? {}, n = typeof t == "number" ? t : t.x, r = typeof t == "number" ? t : t.y;
		return dK(uK({}, e), {
			x: Math.ceil(e.x / n) * n,
			y: Math.ceil(e.y / r) * r
		});
	}
};
hK.configure = RL(hK);
var gK = {
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
}, _K = { sectionLabel: "_sectionLabel_rnzlx_8" };
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemWrapper/RoomListItemView/RoomListItemMoreOptionsMenu.tsx
function vK({ vm: e }) {
	let [t, n] = T(!1);
	return /* @__PURE__ */ (0, R.jsx)(_e, {
		open: t,
		onOpenChange: n,
		title: H("room_list|room|more_options"),
		showTitle: !1,
		align: "start",
		trigger: /* @__PURE__ */ (0, R.jsx)(j, {
			tooltip: H("room_list|room|more_options"),
			"aria-label": H("room_list|room|more_options"),
			size: "24px",
			style: { padding: "2px" },
			children: /* @__PURE__ */ (0, R.jsx)(fw, {})
		}),
		children: /* @__PURE__ */ (0, R.jsx)(yK, { vm: e })
	});
}
function yK({ vm: e }) {
	let t = V(e), n = t.sections.length > 0, r = S(() => t.sections.some((e) => e.isSelected), [t.sections]);
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		onKeyDown: (e) => e.stopPropagation(),
		children: [
			t.canMarkAsRead && /* @__PURE__ */ (0, R.jsx)(M, {
				Icon: ew,
				label: H("room_list|more_options|mark_read"),
				onSelect: e.onMarkAsRead,
				onClick: (e) => e.stopPropagation(),
				hideChevron: !0
			}),
			t.canMarkAsUnread && /* @__PURE__ */ (0, R.jsx)(M, {
				Icon: nw,
				label: H("room_list|more_options|mark_unread"),
				onSelect: e.onMarkAsUnread,
				onClick: (e) => e.stopPropagation(),
				hideChevron: !0
			}),
			t.canChangeSection && /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsx)(De, {
				checked: t.isFavourite,
				Icon: MC,
				label: H("room_list|more_options|favourited"),
				onSelect: e.onToggleFavorite,
				onClick: (e) => e.stopPropagation()
			}), /* @__PURE__ */ (0, R.jsx)(De, {
				checked: t.isLowPriority,
				Icon: OS,
				label: H("room_list|more_options|low_priority"),
				onSelect: e.onToggleLowPriority,
				onClick: (e) => e.stopPropagation()
			})] }),
			/* @__PURE__ */ (0, R.jsx)(Se, {}),
			t.canInvite && /* @__PURE__ */ (0, R.jsx)(M, {
				Icon: Ww,
				label: H("action|invite"),
				onSelect: e.onInvite,
				onClick: (e) => e.stopPropagation(),
				hideChevron: !0
			}),
			t.canCopyRoomLink && /* @__PURE__ */ (0, R.jsx)(M, {
				Icon: JC,
				label: H("room_list|more_options|copy_link"),
				onSelect: e.onCopyRoomLink,
				onClick: (e) => e.stopPropagation(),
				hideChevron: !0
			}),
			t.areSectionsEnabled && t.canChangeSection && /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsxs)(Ce, {
				trigger: /* @__PURE__ */ (0, R.jsx)(M, {
					Icon: AS,
					label: H("room_list|more_options|move_to_section"),
					onSelect: null
				}),
				children: [
					t.sections.map((t) => /* @__PURE__ */ (0, R.jsx)(M, {
						label: t.name,
						labelProps: { className: _K.sectionLabel },
						onSelect: () => e.onToggleSection(t.tag),
						onClick: (e) => e.stopPropagation(),
						hideChevron: !0,
						"aria-checked": t.isSelected,
						children: t.isSelected && /* @__PURE__ */ (0, R.jsx)(WS, {
							color: "var(--cpd-color-icon-tertiary)",
							width: "24px",
							height: "24px"
						})
					}, t.tag)),
					n && /* @__PURE__ */ (0, R.jsx)(Se, {}),
					/* @__PURE__ */ (0, R.jsx)(M, {
						label: H("action|new_section"),
						onSelect: e.onCreateSection,
						hideChevron: !0
					})
				]
			}), r && /* @__PURE__ */ (0, R.jsx)(M, {
				Icon: ow,
				label: H("room_list|more_options|remove_from_section"),
				onSelect: e.onRemoveFromSection,
				onClick: (e) => e.stopPropagation(),
				hideChevron: !0
			})] }),
			/* @__PURE__ */ (0, R.jsx)(Se, {}),
			/* @__PURE__ */ (0, R.jsx)(M, {
				kind: "critical",
				Icon: KC,
				label: H("room_list|more_options|leave_room"),
				onSelect: e.onLeaveRoom,
				onClick: (e) => e.stopPropagation(),
				hideChevron: !0
			})
		]
	});
}
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemWrapper/RoomListItemView/RoomListItemContextMenu.tsx
var bK = ({ vm: e, children: t }) => /* @__PURE__ */ (0, R.jsx)(ie, {
	title: H("room_list|room|more_options"),
	showTitle: !1,
	hasAccessibleAlternative: !0,
	trigger: t,
	children: /* @__PURE__ */ (0, R.jsx)(yK, { vm: e })
}), xK = ({ hasAnyNotificationOrActivity: e, muted: t, callType: n, isUnsentMessage: r, invited: i, isMention: a, isNotification: o, isActivityNotification: s, count: c }) => !e && !t && !n ? null : /* @__PURE__ */ (0, R.jsxs)(B, {
	align: "center",
	justify: "center",
	gap: "var(--cpd-space-1x)",
	"data-testid": "notification-decoration",
	children: [
		r && /* @__PURE__ */ (0, R.jsx)(SC, {
			width: "20px",
			height: "20px",
			fill: "var(--cpd-color-icon-critical-primary)"
		}),
		n === "video" && /* @__PURE__ */ (0, R.jsx)(Xw, {
			width: "20px",
			height: "20px",
			fill: "var(--cpd-color-icon-accent-primary)"
		}),
		n === "voice" && /* @__PURE__ */ (0, R.jsx)(oT, {
			width: "20px",
			height: "20px",
			fill: "var(--cpd-color-icon-accent-primary)"
		}),
		i && /* @__PURE__ */ (0, R.jsx)(bC, {
			width: "20px",
			height: "20px",
			fill: "var(--cpd-color-icon-accent-primary)"
		}),
		a && /* @__PURE__ */ (0, R.jsx)(iw, {
			width: "20px",
			height: "20px",
			fill: "var(--cpd-color-icon-accent-primary)"
		}),
		(a || o) && /* @__PURE__ */ (0, R.jsx)(Ae, { count: c || null }),
		s && /* @__PURE__ */ (0, R.jsx)(ke, {}),
		t && /* @__PURE__ */ (0, R.jsx)(cw, {
			width: "20px",
			height: "20px",
			fill: "var(--cpd-color-icon-tertiary)"
		})
	]
}), SK = /* @__PURE__ */ function(e) {
	return e.AllMessages = "all_messages", e.AllMessagesLoud = "all_messages_loud", e.MentionsOnly = "mentions_only", e.Mute = "mute", e;
}({});
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemWrapper/RoomListItemView/RoomListItemNotificationMenu.tsx
function CK({ vm: e }) {
	let t = V(e), [n, r] = T(!1), i = t.roomNotifState === SK.Mute, a = /* @__PURE__ */ (0, R.jsx)(WS, {
		width: "24px",
		height: "24px",
		color: "var(--cpd-color-icon-primary)"
	});
	return /* @__PURE__ */ (0, R.jsx)(_e, {
		open: n,
		onOpenChange: r,
		title: H("room_list|notification_options"),
		showTitle: !1,
		align: "start",
		trigger: /* @__PURE__ */ (0, R.jsx)(j, {
			size: "24px",
			style: { padding: "2px" },
			tooltip: H("room_list|notification_options"),
			"aria-label": H("room_list|notification_options"),
			children: i ? /* @__PURE__ */ (0, R.jsx)(cw, {}) : /* @__PURE__ */ (0, R.jsx)(uw, {})
		}),
		children: /* @__PURE__ */ (0, R.jsxs)("div", {
			onKeyDown: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, R.jsx)(M, {
					"aria-selected": t.roomNotifState === SK.AllMessages,
					hideChevron: !0,
					label: H("notifications|default_settings"),
					onSelect: () => e.onSetRoomNotifState(SK.AllMessages),
					onClick: (e) => e.stopPropagation(),
					children: t.roomNotifState === SK.AllMessages && a
				}),
				/* @__PURE__ */ (0, R.jsx)(M, {
					"aria-selected": t.roomNotifState === SK.AllMessagesLoud,
					hideChevron: !0,
					label: H("notifications|all_messages"),
					onSelect: () => e.onSetRoomNotifState(SK.AllMessagesLoud),
					onClick: (e) => e.stopPropagation(),
					children: t.roomNotifState === SK.AllMessagesLoud && a
				}),
				/* @__PURE__ */ (0, R.jsx)(M, {
					"aria-selected": t.roomNotifState === SK.MentionsOnly,
					hideChevron: !0,
					label: H("notifications|mentions_keywords"),
					onSelect: () => e.onSetRoomNotifState(SK.MentionsOnly),
					onClick: (e) => e.stopPropagation(),
					children: t.roomNotifState === SK.MentionsOnly && a
				}),
				/* @__PURE__ */ (0, R.jsx)(M, {
					"aria-selected": t.roomNotifState === SK.Mute,
					hideChevron: !0,
					label: H("notifications|mute_room"),
					onSelect: () => e.onSetRoomNotifState(SK.Mute),
					onClick: (e) => e.stopPropagation(),
					children: t.roomNotifState === SK.Mute && a
				})
			]
		})
	});
}
var wK = {
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
}, TK = ({ showMoreOptionsMenu: e, showNotificationMenu: t, vm: n }) => /* @__PURE__ */ (0, R.jsxs)(B, {
	className: wK.hoverMenu,
	align: "center",
	gap: "var(--cpd-space-1x)",
	children: [e && /* @__PURE__ */ (0, R.jsx)(vK, { vm: n }), t && /* @__PURE__ */ (0, R.jsx)(CK, { vm: n })]
}), EK = p(function({ vm: e, renderAvatar: t, isDragging: n = !1 }) {
	let r = V(e);
	return /* @__PURE__ */ (0, R.jsxs)(B, {
		className: (0, L.default)(wK.container, { [wK.dragging]: n }),
		gap: "var(--cpd-space-3x)",
		align: "center",
		children: [t(r.room), /* @__PURE__ */ (0, R.jsxs)(B, {
			className: wK.content,
			gap: "var(--cpd-space-2x)",
			align: "center",
			justify: "space-between",
			children: [
				/* @__PURE__ */ (0, R.jsxs)("div", {
					className: wK.ellipsis,
					children: [/* @__PURE__ */ (0, R.jsxs)("div", {
						className: wK.roomName,
						title: r.name,
						"data-testid": "room-name",
						children: [r.name, r.userStatus && /* @__PURE__ */ (0, R.jsx)(Oe, {
							description: r.userStatus.text,
							maxWidth: "30ch",
							maxLines: 1,
							children: /* @__PURE__ */ (0, R.jsx)(N, {
								as: "span",
								className: wK.userStatusEmoji,
								children: r.userStatus.emoji
							})
						})]
					}), r.messagePreview && /* @__PURE__ */ (0, R.jsx)(N, {
						as: "div",
						size: "sm",
						className: wK.ellipsis,
						title: r.messagePreview,
						children: r.messagePreview
					})]
				}),
				!n && (r.showMoreOptionsMenu || r.showNotificationMenu) && /* @__PURE__ */ (0, R.jsx)(TK, {
					showMoreOptionsMenu: r.showMoreOptionsMenu,
					showNotificationMenu: r.showNotificationMenu,
					vm: e
				}),
				/* @__PURE__ */ (0, R.jsx)("div", {
					className: wK.notificationDecoration,
					"aria-hidden": !0,
					children: /* @__PURE__ */ (0, R.jsx)(xK, { ...r.notification })
				})
			]
		})]
	});
});
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemWrapper/RoomListItemView/RoomListItemView.tsx
function DK(e, t) {
	return t.isUnsentMessage ? H("room_list|a11y|unsent_message", { roomName: e }) : t.invited ? H("room_list|a11y|invitation", { roomName: e }) : t.isMention && t.count ? H("room_list|a11y|mention", {
		roomName: e,
		count: t.count
	}) : t.hasUnreadCount && t.count ? H("room_list|a11y|unread", {
		roomName: e,
		count: t.count
	}) : t.callType === "voice" ? H("room_list|a11y|voice_call", { roomName: e }) : t.callType === "video" ? H("room_list|a11y|video_call", { roomName: e }) : H("room_list|a11y|default", { roomName: e });
}
var OK = p(function({ vm: e, isSelected: t, isFocused: n, onFocus: r, isFirstItem: i, isLastItem: a, renderAvatar: o, isDragSource: s = !1, ref: c, ...l }) {
	let u = w(null), d = fO([c, u]), f = V(e), [p, m] = T(!1);
	_(() => {
		n && u.current?.focus({ preventScroll: !0 });
	}, [n]);
	let h = (e) => {
		r(f.id, e), !e.currentTarget.contains(e.relatedTarget) && e.currentTarget.matches(":focus-visible") && m(!0);
	}, g = (e) => {
		!e.currentTarget.contains(e.relatedTarget) && !e.currentTarget.querySelector("[data-state=\"open\"]") && m(!1);
	}, v = DK(f.name, f.notification);
	return /* @__PURE__ */ (0, R.jsx)(bK, {
		vm: e,
		children: /* @__PURE__ */ (0, R.jsx)(B, {
			as: "button",
			ref: d,
			className: (0, L.default)(wK.roomListItem, "mx_RoomListItemView", {
				[wK.keyboardActive]: p,
				[wK.selected]: t,
				[wK.bold]: f.isBold,
				[wK.firstItem]: i,
				[wK.lastItem]: a,
				[wK.dragSource]: s,
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
			children: /* @__PURE__ */ (0, R.jsx)(EK, {
				vm: e,
				renderAvatar: o
			})
		})
	});
}), kK = p(function({ vm: e, isDragging: t = !1 }) {
	let { title: n, displaySectionMenu: r, notification: i, isExpanded: a } = V(e);
	return /* @__PURE__ */ (0, R.jsxs)(B, {
		className: (0, L.default)(gK.container, { [gK.dragging]: t }),
		align: "center",
		justify: "space-between",
		gap: "var(--cpd-space-2x)",
		children: [
			/* @__PURE__ */ (0, R.jsxs)(B, {
				align: "center",
				gap: "var(--cpd-space-0-5x)",
				children: [/* @__PURE__ */ (0, R.jsx)(XS, {
					className: gK.chevron,
					width: "24px",
					height: "24px",
					fill: "var(--cpd-color-icon-secondary)"
				}), /* @__PURE__ */ (0, R.jsx)("span", {
					className: gK.title,
					children: n
				})]
			}),
			!a && i && /* @__PURE__ */ (0, R.jsx)("div", {
				className: gK.notificationDecoration,
				"aria-hidden": !0,
				children: /* @__PURE__ */ (0, R.jsx)(xK, { ...i })
			}),
			r && !t && /* @__PURE__ */ (0, R.jsx)(AK, { vm: e })
		]
	});
});
function AK({ vm: e }) {
	let [t, n] = T(!1);
	return /* @__PURE__ */ (0, R.jsx)(_e, {
		open: t,
		onOpenChange: n,
		title: H("room_list|section_header|more_options"),
		showTitle: !1,
		align: "start",
		trigger: /* @__PURE__ */ (0, R.jsx)(j, {
			className: gK.menu,
			tooltip: H("room_list|section_header|more_options"),
			"aria-label": H("room_list|section_header|more_options"),
			size: "24px",
			style: { padding: "2px" },
			color: "var(--cpd-color-icon-primary)",
			children: /* @__PURE__ */ (0, R.jsx)(fw, { fill: "var(--cpd-color-icon-primary)" })
		}),
		children: /* @__PURE__ */ (0, R.jsxs)("div", {
			onKeyDown: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, R.jsx)(M, {
				hideChevron: !0,
				Icon: vC,
				label: H("room_list|section_header|edit_section"),
				onSelect: () => e.editSection(),
				onClick: (e) => e.stopPropagation()
			}), /* @__PURE__ */ (0, R.jsx)(M, {
				hideChevron: !0,
				Icon: oC,
				label: H("room_list|section_header|remove_section"),
				onSelect: () => e.removeSection(),
				onClick: (e) => e.stopPropagation()
			})]
		})
	});
}
//#endregion
//#region src/room-list/VirtualizedRoomListView/dragAndDrop.ts
function jK(e) {
	return e?.type === "section";
}
function MK(e) {
	return e?.type === "room";
}
function NK(e, t) {
	switch (e) {
		case "nonDm": return !MK(t) || t.isDm;
		case "dm": return !MK(t) || !t.isDm;
		case "any": return !1;
		case "none": return !0;
	}
}
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListSectionHeaderView/RoomListSectionHeaderView.tsx
var PK = p(function({ vm: e, isFocused: t, onFocus: n, indexInList: r, sectionIndex: i, sectionCount: a, roomCountInSection: o }) {
	let { translate: s } = z(), { id: c, title: l, isExpanded: u, isUnread: d, canBeReordered: f, acceptedRoomKind: p } = V(e), m = i === a - 1, { ref: h, handleRef: g, isDragSource: v } = dG({
		id: c,
		data: {
			type: "section",
			index: i
		},
		plugins: [vU.configure({ feedback: "clone" })],
		modifiers: [mK],
		disabled: !f
	}), { source: y } = GG(), b = y?.data, x = jK(b), { ref: S, isDropTarget: C } = WG({
		id: c,
		data: {
			type: "section",
			index: i
		},
		disabled: v || (x ? !f : NK(p, b))
	}), E = C && b?.type === "room", ee = C && x, D = jK(b) ? b.index : -1, te = ee && D > i, O = ee && !te, k = ee && te, ne = w(u);
	v || (ne.current = u);
	let re = v ? ne.current : u, ie = w(null), A = fO([
		...f ? [h, g] : [],
		S,
		ie
	]);
	_(() => {
		t && ie.current?.focus({ preventScroll: !0 });
	}, [t]);
	let [ae, oe] = T(!1), se = (e) => {
		n(c, e), !e.currentTarget.contains(e.relatedTarget) && e.currentTarget.matches(":focus-visible") && oe(!0);
	}, ce = (e) => {
		!e.currentTarget.contains(e.relatedTarget) && !e.currentTarget.querySelector("[data-state=\"open\"]") && oe(!1);
	};
	return /* @__PURE__ */ (0, R.jsx)("div", {
		"aria-expanded": re,
		...nK(r, i, o),
		children: /* @__PURE__ */ (0, R.jsx)("div", {
			role: "gridcell",
			"aria-expanded": re,
			children: /* @__PURE__ */ (0, R.jsx)("button", {
				ref: A,
				type: "button",
				className: (0, L.default)(gK.header, {
					[gK.keyboardActive]: ae,
					[gK.firstHeader]: i === 0,
					[gK.lastHeader]: !u && m,
					[gK.unread]: d,
					[gK.dragSource]: v,
					[gK.dropTarget]: E,
					[gK.dropTargetBottom]: O,
					[gK.dropTargetTop]: k
				}),
				onClick: () => !v && e.onClick(),
				onKeyDown: (t) => {
					t.code === "ArrowRight" && !u || t.code === "ArrowLeft" && u ? (t.preventDefault(), t.stopPropagation(), e.onClick()) : t.code === "ArrowRight" && u && o > 0 && (t.preventDefault(), t.stopPropagation(), t.currentTarget.dispatchEvent(new KeyboardEvent("keydown", {
						code: "ArrowDown",
						key: "ArrowDown",
						bubbles: !0
					})));
				},
				"aria-expanded": re,
				onFocus: se,
				onBlur: ce,
				tabIndex: t ? 0 : -1,
				"aria-label": s(d ? "room_list|section_header|toggle_unread" : "room_list|section_header|toggle", { section: l }),
				children: /* @__PURE__ */ (0, R.jsx)(kK, { vm: e })
			})
		})
	});
}), FK = p(function({ vm: e, isFirst: t }) {
	let { isExpanded: n, isUnread: r } = V(e);
	return /* @__PURE__ */ (0, R.jsx)("div", {
		className: gK.stickyBackground,
		"aria-hidden": !0,
		children: /* @__PURE__ */ (0, R.jsx)("button", {
			type: "button",
			className: (0, L.default)(gK.header, {
				[gK.firstHeader]: t,
				[gK.unread]: r
			}),
			"aria-expanded": n,
			onClick: e.onClick,
			tabIndex: -1,
			children: /* @__PURE__ */ (0, R.jsx)(kK, { vm: e })
		})
	});
}), IK = { dragOverlay: "_dragOverlay_s80l5_8" }, LK = p(function({ vm: e }) {
	return /* @__PURE__ */ (0, R.jsx)("div", {
		"aria-hidden": !0,
		className: (0, L.default)(gK.header, IK.dragOverlay),
		children: /* @__PURE__ */ (0, R.jsx)(kK, {
			vm: e,
			isDragging: !0
		})
	});
}), RK = p(function({ roomIndex: e, roomCount: t, roomIndexInSection: n, isInFlatList: r, ...i }) {
	if (r) return /* @__PURE__ */ (0, R.jsx)(OK, {
		...i,
		...tK("listbox", e, t)
	});
	let a = n === 0;
	return /* @__PURE__ */ (0, R.jsx)("div", {
		...tK("treegrid", e, n),
		children: /* @__PURE__ */ (0, R.jsx)("div", {
			role: "gridcell",
			"aria-selected": i.isSelected,
			children: /* @__PURE__ */ (0, R.jsx)(zK, {
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
function zK(e) {
	let t = V(e.vm), { ref: n, handleRef: r, isDragSource: i } = dG({
		id: t.id,
		data: {
			type: "room",
			isDm: t.isDm
		},
		plugins: [vU.configure({ feedback: "clone" })],
		modifiers: [mK],
		disabled: !t.canChangeSection
	}), a = fO([n, r]);
	return /* @__PURE__ */ (0, R.jsx)(OK, {
		...e,
		ref: t.canChangeSection ? a : void 0,
		isDragSource: i
	});
}
var BK = { dragOverlay: "_dragOverlay_vsda5_8" }, VK = p(function({ vm: e, renderAvatar: t }) {
	return /* @__PURE__ */ (0, R.jsx)(B, {
		"aria-hidden": !0,
		className: (0, L.default)(wK.roomListItem, BK.dragOverlay),
		gap: "var(--cpd-space-3x)",
		align: "stretch",
		children: /* @__PURE__ */ (0, R.jsx)(EK, {
			vm: e,
			renderAvatar: t,
			isDragging: !0
		})
	});
});
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListAccessibilityPlugin.ts
function HK(e, t = "polite") {
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
function UK(e, t) {
	let n = document.createElement("div");
	return n.id = e, n.style.display = "none", n.textContent = t, n;
}
var WK = class extends WL {
	liveRegion;
	assertiveRegion;
	instructions;
	unsubscribers = [];
	constructor(e, t) {
		super(e, t);
		let n = crypto.randomUUID(), r = crypto.randomUUID(), i = crypto.randomUUID();
		this.liveRegion = HK(n), this.assertiveRegion = HK(r, "assertive"), document.body.append(this.liveRegion, this.assertiveRegion);
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
		t?.instructions && (this.instructions = UK(i, t.instructions), document.body.append(this.instructions), this.registerEffect(() => {
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
function GK(e) {
	let { translate: t } = z(), n = h((t) => jK(t.data) ? e.getSectionHeaderViewModel(t.id).getSnapshot().title : e.getRoomItemViewModel(t.id)?.getSnapshot().name, [e]), r = S(() => ({
		dragstart: ({ operation: { source: e } }) => {
			if (!e) return;
			let r = n(e);
			if (r !== void 0) return t("room_list|a11y|drag_start", { source: r });
		},
		dragover: ({ operation: { source: r, target: i } }) => {
			if (!r) return;
			let a = n(r);
			if (a === void 0) return;
			if (jK(r.data) && !i) return t("room_list|a11y|drag_over_original", { source: a });
			if (!i) return;
			let o = e.getSectionHeaderViewModel(i.id).getSnapshot().title;
			return jK(r.data) && jK(i.data) ? r.data.index > i.data.index ? t("room_list|a11y|drag_over_before", {
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
			if (jK(r.data) && !i) return t("room_list|a11y|drag_end_original", { source: o });
			if (!i) return;
			let s = e.getSectionHeaderViewModel(i.id).getSnapshot().title;
			return jK(r.data) && jK(i.data) ? r.data.index > i.data.index ? t("room_list|a11y|drag_end_before", {
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
	return h((e) => [...e.filter((e) => e !== wH), LL(WK, {
		announcements: r,
		instructions: i
	})], [r, i]);
}
var KK = { roomList: "_roomList_1yq7k_11" }, qK = 1300;
function JK(e, t) {
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
function YK({ vm: e, renderAvatar: t, onKeyDown: n }) {
	let { translate: r } = z(), { roomListState: i, sections: a, isFlatList: s } = V(e), c = i.activeRoomIndex, l = i.scrollToSectionTag, u = w(void 0), d = w(void 0), f = w(null), p = h((e) => {
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
	}, [T, ee]), te = S(() => a.flatMap((e) => e.roomIds), [a]), O = te.length, k = a.length, ne = O + k, re = S(() => a.map((e) => ({
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
	}, [a]), A = h((t) => {
		if (s) e.updateVisibleRooms(t.startIndex, t.endIndex + 1);
		else {
			let [n, r] = ie(t.startIndex, t.endIndex);
			e.updateVisibleRooms(n, r);
		}
		ee();
	}, [
		e,
		ee,
		s,
		ie
	]), ae = GK(e), oe = h((e, n, r, i, a, s) => {
		let { activeRoomIndex: c, roomCount: l, vm: u, isFlatList: d } = r.context, f = c === e, p = u.getRoomItemViewModel(n);
		if (!p) return /* @__PURE__ */ (0, R.jsx)(o.Fragment, {}, `stale-${e}`);
		let m = r.focused && r.tabIndexKey === n, h = d && e === 0, g = !(!d && !a || e !== l - 1);
		return /* @__PURE__ */ (0, R.jsx)(RK, {
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
	}, [t]), se = h((e, t, n, r, i) => {
		let { sections: a } = n.context, o = a[i].roomIds.findIndex((e) => e === t), s = i === a.length - 1;
		return oe(e, t, n, r, s, o);
	}, [oe]), ce = h((e, t, n, r) => oe(e, t, n, r), [oe]), le = h((e, t, n, r) => {
		let { vm: i, sectionCount: a, sections: o } = n.context, s = i.getSectionHeaderViewModel(t), c = o.slice(0, e).reduce((e, t) => e + t.roomIds.length + 1, 0), l = o[e].roomIds.length, u = n.focused && n.tabIndexKey === t;
		return /* @__PURE__ */ (0, R.jsx)(PK, {
			vm: s,
			isFocused: u,
			onFocus: r,
			indexInList: c,
			sectionIndex: e,
			sectionCount: a,
			roomCountInSection: l
		}, t);
	}, []), ue = h((e, t, n) => {
		let r = n.context.vm.getSectionHeaderViewModel(t);
		return /* @__PURE__ */ (0, R.jsx)(FK, {
			vm: r,
			isFirst: e === 0
		}, t);
	}, []), de = h((e) => e, []), fe = h((e) => e, []), j = S(() => ({
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
	]), pe = S(() => {
		if (c !== void 0) return s ? c : JK(a, c);
	}, [
		c,
		s,
		a
	]), me = h((e) => {
		let { spaceId: t, filterKeys: n } = e.context.context, r = u.current !== t || !Wy(d.current, n);
		return d.current = n, u.current = t, r ? {
			align: "start",
			index: pe ?? 0,
			behavior: "auto"
		} : !1;
	}, [pe]);
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
	let he = h(() => !0, []), ge = h(() => !0, []), _e = S(() => ({
		top: qK,
		bottom: qK
	}), []), M = {
		context: j,
		scrollIntoViewOnChange: me,
		...pe === void 0 ? {} : { initialTopMostItemIndex: pe },
		"data-testid": "room-list",
		"aria-label": r("room_list|list_title"),
		getItemKey: de,
		isItemFocusable: he,
		rangeChanged: A,
		scrollerRef: D,
		onKeyDown: n,
		increaseViewportBy: _e,
		className: KK.roomList
	};
	return s ? /* @__PURE__ */ (0, R.jsx)(XG, {
		...M,
		...eK("listbox"),
		scrollHandleRef: p,
		items: te,
		getItemComponent: ce
	}) : /* @__PURE__ */ (0, R.jsxs)(sG, {
		onDragStart: (t) => {
			e.onSectionOrRoomDragStart();
		},
		onDragEnd: (t) => {
			let { source: n, target: r } = t.operation;
			e.onSectionOrRoomDragEnd(), !t.canceled && n && r && (jK(n.data) ? e.changeSectionOrder(String(n.id), String(r.id)) : e.changeRoomSection(String(n.id), String(r.id)));
		},
		sensors: [dW.configure({ activationConstraints(e) {
			return e.pointerType === "touch" ? [new sW.Delay({
				value: 250,
				tolerance: 5
			})] : [new sW.Distance({ value: 5 })];
		} }), eW.configure({
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
		plugins: ae,
		children: [/* @__PURE__ */ (0, R.jsx)(pG, {
			dropAnimation: null,
			children: /* @__PURE__ */ (0, R.jsx)(ZK, {
				vm: e,
				renderAvatar: t
			})
		}), /* @__PURE__ */ (0, R.jsx)(XK, {
			...M,
			...eK("treegrid", ne),
			scrollHandleRef: p,
			groups: re,
			getHeaderKey: fe,
			getGroupHeaderComponent: le,
			getItemComponent: se,
			isGroupHeaderFocusable: ge,
			renderStickyHeader: ue
		})]
	});
}
function XK(e) {
	let { source: t } = GG();
	return /* @__PURE__ */ (0, R.jsx)($G, {
		...e,
		disableKeyboardNavigation: t !== null
	});
}
function ZK({ vm: e, renderAvatar: t }) {
	let { source: n } = GG();
	if (!n) return null;
	if (jK(n.data)) {
		let t = e.getSectionHeaderViewModel(String(n.id));
		return /* @__PURE__ */ (0, R.jsx)(LK, { vm: t });
	}
	let r = e.getRoomItemViewModel(String(n.id));
	return r ? /* @__PURE__ */ (0, R.jsx)(VK, {
		vm: r,
		renderAvatar: t
	}) : null;
}
var QK = { toast: "_toast_vbkbz_8" };
//#endregion
//#region src/room-list/RoomListView/RoomListToast/RoomListToast.tsx
function $K({ type: e, onClose: t, onClick: n }) {
	let { translate: r } = z();
	if (e === "unread_activity") return /* @__PURE__ */ (0, R.jsx)(Ee, {
		className: QK.toast,
		Icon: OS,
		onClick: n,
		children: r("room_list|unread_messages")
	});
	let i = r(e === "section_created" ? "room_list|section_created" : "room_list|chat_moved");
	return /* @__PURE__ */ (0, R.jsx)(Ee, {
		className: QK.toast,
		onClose: t,
		tooltip: r("action|close"),
		children: i
	});
}
var eq = {
	list: "_list_1hk4o_8",
	scrollbar: "_scrollbar_1hk4o_13"
}, tq = ({ vm: e, renderAvatar: t, onKeyDown: n }) => {
	let r = V(e), i;
	return i = r.isLoadingRooms ? /* @__PURE__ */ (0, R.jsx)(eF, {}) : r.isRoomListEmpty ? /* @__PURE__ */ (0, R.jsx)(nF, { vm: e }) : /* @__PURE__ */ (0, R.jsx)(YK, {
		vm: e,
		renderAvatar: t,
		onKeyDown: n
	}), /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsx)("div", { children: /* @__PURE__ */ (0, R.jsx)(QP, {
		filterIds: r.filterIds,
		activeFilterId: r.activeFilterId,
		onToggleFilter: e.onToggleFilter
	}) }), /* @__PURE__ */ (0, R.jsx)(B, {
		direction: "column",
		className: eq.list,
		children: /* @__PURE__ */ (0, R.jsxs)(Yx, {
			className: eq.scrollbar,
			children: [i, r.toast && /* @__PURE__ */ (0, R.jsx)($K, {
				type: r.toast,
				onClose: e.closeToast,
				onClick: e.scrollToUnreadActivity
			})]
		})
	})] });
}, nq = {
	"box-flex": "_box-flex_1odfs_9",
	"box-shrink": "_box-shrink_1odfs_13",
	"box-grow": "_box-grow_1odfs_17"
};
//#endregion
//#region src/core/utils/Box/Box.ts
function rq({ as: e = "div", flex: t = null, shrink: n = null, grow: r = null, className: i, children: a, ...s }) {
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
		className: (0, L.default)(i, {
			[nq["box-flex"]]: !!t,
			[nq["box-shrink"]]: !!n,
			[nq["box-grow"]]: !!r
		}),
		style: c
	}, a);
}
//#endregion
//#region src/resize/group/GroupView.tsx
function iq({ vm: e, children: t }) {
	return V(e), /* @__PURE__ */ (0, R.jsx)(Le, {
		onLayoutChanged: (t) => {
			let n = t[cq];
			e.onLeftPanelResized(n);
		},
		children: t
	});
}
var aq = {
	separator: "_separator_wo6l2_8",
	content: "_content_wo6l2_21",
	activeSeparatorContainer: "_activeSeparatorContainer_wo6l2_39",
	activeSeparator: "_activeSeparator_wo6l2_39",
	dragIcon: "_dragIcon_wo6l2_98"
};
//#endregion
//#region src/resize/separator/SeparatorView.tsx
function oq({ vm: e, className: t }) {
	let { translate: n } = z(), { isCollapsed: r } = V(e), i = r ? "bar" : "border", a = /* @__PURE__ */ (0, R.jsx)(Oe, {
		description: n("left_panel|separator_label"),
		placement: "right",
		disabled: i === "border",
		children: /* @__PURE__ */ (0, R.jsx)("div", {
			className: aq.content,
			children: /* @__PURE__ */ (0, R.jsx)(gC, {
				className: aq.dragIcon,
				width: "20px",
				height: "12px",
				viewBox: "3.999704360961914 8.999704360961914 16.000295639038086 6.000591278076172",
				transform: "rotate(90)"
			})
		})
	}), o = /* @__PURE__ */ (0, R.jsx)("div", {
		className: aq.activeSeparatorContainer,
		children: /* @__PURE__ */ (0, R.jsx)("div", { className: aq.activeSeparator })
	});
	return /* @__PURE__ */ (0, R.jsx)(He, {
		className: (0, L.default)(aq.separator, t),
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
function sq({ vm: e, className: t, children: n, ...r }) {
	let { initialSize: i, isCollapsed: a } = V(e), [o, s] = Ue();
	_(() => {
		o && e.setPanelHandle(o);
	}, [e, o]);
	let c = i === void 0 ? r.defaultSize : `${i}%`;
	return /* @__PURE__ */ (0, R.jsx)(Be, {
		inert: a,
		id: cq,
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
var cq = "left-panel", lq = {
	description: "_description_1qm4o_8",
	buttons: "_buttons_1qm4o_22"
};
//#endregion
//#region src/core/toast/GenericToast.tsx
function uq({ description: e, detail: t, primaryLabel: n, PrimaryIcon: r, secondaryLabel: i, SecondaryIcon: a, destructive: o, onPrimaryClick: s, onSecondaryClick: c, overrideWidth: l }) {
	let u = t ? /* @__PURE__ */ (0, R.jsx)("div", { children: t }) : null;
	return /* @__PURE__ */ (0, R.jsxs)("div", { children: [/* @__PURE__ */ (0, R.jsxs)("div", {
		className: lq.description,
		style: { maxWidth: l },
		children: [e, u]
	}), /* @__PURE__ */ (0, R.jsxs)("div", {
		className: lq.buttons,
		"aria-live": "off",
		"data-testid": "toast-buttons",
		children: [c && i && /* @__PURE__ */ (0, R.jsx)(k, {
			onClick: c,
			kind: o === "secondary" ? "destructive" : "secondary",
			Icon: a,
			size: "md",
			children: i
		}), /* @__PURE__ */ (0, R.jsx)(k, {
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
var dq = l(null);
dq.displayName = "ToastContext";
function fq() {
	let e = g(dq);
	if (!e) throw Error("Component must be wrapped in <ToastContext.Provider /> to use useToastContext");
	return e;
}
function pq() {
	let e = S(() => new mq(), []), [t, n] = T(e.getActiveToast()), r = h(() => {
		n(e.getActiveToast());
	}, [n, e]);
	return _(() => {
		e.setCallback(r);
	}, [e, r]), [t, e];
}
var mq = class {
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
}, hq = class {
	get language() {
		return Nx();
	}
	register(e) {
		let t = {};
		for (let n in e) for (let r in e[n]) t[r] = t[r] || {}, t[r][n] = e[n][r];
		for (let e in t) jx(e, t[e]);
	}
	translate(e, t, n) {
		return n ? H(e, t, n) : H(e, t);
	}
	humanizeTime = (e) => VO(e, this);
};
//#endregion
//#region src/room/avatar/RoomAvatar/RoomAvatarView.tsx
function gq({ vm: e, ref: t }) {
	let { name: n, idName: r, urls: i, type: a, size: o, isClickable: s, className: c, altText: l = "Avatar", title: u, tabIndex: d, role: f, ariaHidden: p } = V(e), [m, g] = T(0);
	_(() => {
		g(0);
	}, [i]);
	let v = h(() => {
		g((e) => e + 1);
	}, []), y = i[m], b = {};
	return f ? b.role = f : s ? (b.role = "button", b["aria-live"] = "off") : y || (b.role = "presentation", b["aria-label"] = void 0), /* @__PURE__ */ (0, R.jsx)(D, {
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
var _q = {
	statusText: "_statusText_t2gx5_8",
	menuStatusText: "_menuStatusText_t2gx5_20"
}, vq = function({ status: e, ref: t, className: n, ...r }) {
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		ref: t,
		...r,
		className: (0, L.default)(_q.statusText, n),
		children: [/* @__PURE__ */ (0, R.jsx)(N, {
			as: "span",
			className: _q.menuStatusEmoji,
			children: e.emoji
		}), /* @__PURE__ */ (0, R.jsx)(N, {
			as: "span",
			className: _q.menuStatusText,
			children: e.text
		})]
	});
};
//#endregion
//#region src/status/UserStatusIconView.tsx
function yq({ vm: e }) {
	let { status: t } = V(e);
	return t ? /* @__PURE__ */ (0, R.jsx)(Oe, {
		description: t.text,
		children: /* @__PURE__ */ (0, R.jsx)(N, {
			as: "span",
			children: t.emoji
		})
	}) : null;
}
var bq = {
	customThemes: "_customThemes_1kxi0_8",
	form: "_form_1kxi0_15",
	list: "_list_1kxi0_22",
	theme: "_theme_1kxi0_32",
	row: "_row_1kxi0_39",
	name: "_name_1kxi0_45",
	error: "_error_1kxi0_53"
}, xq = {
	InvalidSchema: "InvalidSchema",
	DownloadFailed: "DownloadFailed",
	AlreadyInstalled: "AlreadyInstalled",
	SaveFailed: "SaveFailed"
}, Sq = {
	[xq.InvalidSchema]: Fx("devtools|custom_themes|error_invalid"),
	[xq.DownloadFailed]: Fx("devtools|custom_themes|error_downloading"),
	[xq.AlreadyInstalled]: Fx("devtools|custom_themes|error_already_installed"),
	[xq.SaveFailed]: Fx("devtools|custom_themes|error_save_failed")
};
function Cq({ vm: e }) {
	let { themes: t, url: n, isDownloading: r, error: i } = V(e);
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: bq.customThemes,
		children: [/* @__PURE__ */ (0, R.jsxs)(xe, {
			className: bq.form,
			onSubmit: (t) => {
				t.preventDefault(), e.addTheme();
			},
			children: [/* @__PURE__ */ (0, R.jsxs)(oe, {
				name: "customThemeUrl",
				children: [
					/* @__PURE__ */ (0, R.jsx)(he, { children: H("devtools|custom_themes|url_label") }),
					/* @__PURE__ */ (0, R.jsx)(Te, {
						value: n,
						onChange: (t) => e.setUrl(t.target.value)
					}),
					i ? /* @__PURE__ */ (0, R.jsx)(ae, { children: H(Sq[i]) }) : /* @__PURE__ */ (0, R.jsx)(fe, { children: H("devtools|custom_themes|help") })
				]
			}), /* @__PURE__ */ (0, R.jsx)(k, {
				type: "submit",
				size: "md",
				disabled: r || n.trim() === "",
				children: H(r ? "devtools|custom_themes|downloading" : "devtools|custom_themes|add")
			})]
		}), t.length > 0 && /* @__PURE__ */ (0, R.jsx)("ul", {
			className: bq.list,
			"aria-label": H("devtools|custom_themes|installed_heading"),
			children: t.map((t) => /* @__PURE__ */ (0, R.jsxs)("li", {
				className: bq.theme,
				"aria-label": t.name,
				children: [/* @__PURE__ */ (0, R.jsxs)("div", {
					className: bq.row,
					children: [
						/* @__PURE__ */ (0, R.jsx)("span", {
							className: bq.name,
							children: t.name
						}),
						t.canRefresh && /* @__PURE__ */ (0, R.jsx)(j, {
							"aria-label": H("devtools|custom_themes|refresh"),
							tooltip: H("devtools|custom_themes|refresh"),
							disabled: t.isRefreshing,
							onClick: () => void e.refreshTheme(t.name),
							children: /* @__PURE__ */ (0, R.jsx)(Ow, {})
						}),
						/* @__PURE__ */ (0, R.jsx)(j, {
							destructive: !0,
							"aria-label": H("action|delete"),
							tooltip: H("action|delete"),
							disabled: t.isRefreshing,
							onClick: () => void e.removeTheme(t.name),
							children: /* @__PURE__ */ (0, R.jsx)(oC, {})
						})
					]
				}), t.error && /* @__PURE__ */ (0, R.jsx)(N, {
					as: "span",
					size: "sm",
					className: bq.error,
					children: H(Sq[t.error])
				})]
			}, t.name))
		})]
	});
}
//#endregion
export { Nk as ActionBarAction, Pk as ActionBarView, LA as AudioPlayerView, Yx as AutoHideScrollbar, ib as AvatarWithDetails, xk as BACKWARD_LOADING_KEY, wT as Banner, cb as BaseViewModel, rq as Box, eA as CallDirection, $k as CallType, Nf as Clock, xq as CustomThemeError, Cq as CustomThemesView, iE as DEFAULT_EVENT_PRESENTATION, JO as DateSeparatorView, HA as DecryptionFailureBodyView, zA as DecryptionFailureReason, Ik as DisambiguatedProfileView, ab as Disposables, yA as DmOngoingCallTileView, nA as DmTombstoneCallTileView, TO as DocumentViewerView, hA as DurationView, Hk as E2eMessageSharedIconView, Vk as E2ePadlock, Rk as E2ePadlockIcon, bO as ElementCallAppTileView, SO as ElementCallMockView, xT as EmojiPicker, Kk as EncryptionEventState, qk as EncryptionEventView, ZE as EventContentBodyView, oE as EventPresentationProvider, Yk as EventPreviewView, Gk as EventTileBubble, Xk as EventTileView, Sk as FORWARD_LOADING_KEY, ST as FacePileView, uD as FileBodyView, cD as FileBodyViewInfoIcon, sD as FileBodyViewState, XG as FlatVirtualizedList, B as Flex, uq as GenericToast, iq as GroupView, $G as GroupedVirtualizedList, $E as HiddenBodyView, tD as HiddenMediaPlaceholder, CO as HistoryVisibilityBadge, hq as I18nApi, Bf as I18nContext, zD as ImageBodyView, LD as ImageBodyViewPlaceholder, ID as ImageBodyViewState, UD as ImageReplyBodyView, VD as ImageReplyBodyViewPlaceholder, hb as KEY_SEPARATOR, cq as LEFT_PANEL_ID, QN as LINKIFIED_DATA_ATTRIBUTE, sq as LeftResizablePanelView, rP as LinkedText, tP as LinkedTextContext, qN as LinkifyMatrixOpaqueIdType, GN as LinkifyOptionalSlashProtocols, WN as LinkifySupportedProtocols, wA as MJitsiWidgetEventView, EA as MKeyVerificationRequestView, AO as MarkdownViewerView, oD as MediaBody, TP as MediaPreviewGroupPreview, fb as MemberAvatarView, MT as MessageComposerUrlPreviewView, QA as MessageTimestampView, GD as MjolnirBodyView, lb as MockViewModel, yK as MoreOptionContent, tE as NotificationBadgeView, xK as NotificationDecoration, KN as PERMITTED_URL_SCHEMES, ze as Panel, OO as PdfViewerView, sO as Pill, mO as PillInput, OA as PinnedMessageBadge, Vf as PlayPauseButton, JA as ReactionsRowButtonTooltipView, XA as ReactionsRowButtonView, qA as ReactionsRowView, rE as ReadMarker, rD as RedactedBodyView, AA as ReplyTileView, Re as ResizableGroup, kP as RichItem, NP as RichList, MA as RoomAvatarEventView, gq as RoomAvatarView, nF as RoomListEmptyStateView, BP as RoomListHeaderView, EK as RoomListItemContent, bK as RoomListItemContextMenu, VK as RoomListItemDragOverlayView, TK as RoomListItemHoverMenu, vK as RoomListItemMoreOptionsMenu, CK as RoomListItemNotificationMenu, OK as RoomListItemView, RK as RoomListItemWrapper, eF as RoomListLoadingSkeleton, QP as RoomListPrimaryFilters, HP as RoomListSearchView, kK as RoomListSectionHeaderContent, PK as RoomListSectionHeaderView, FK as RoomListStickySectionHeaderView, $K as RoomListToast, tq as RoomListView, SK as RoomNotifState, gA as RoomOngoingCallTileView, KP as RoomPickerView, gO as RoomStatusBarState, _O as RoomStatusBarView, Qk as RoomTombstoneCallTileView, CA as RootCallTileView, $x as RovingAction, bS as RovingGridIndexProvider, Qx as RovingStateActionType, Zx as RovingTabIndexContext, fS as RovingTabIndexProvider, SS as RovingTabIndexWrapper, IT as SasEmoji, qP as SectionCreationView, tb as SeekBar, Ve as Separator, oq as SeparatorView, QT as SetStatusView, ob as Snapshot, vq as StatusTextView, $D as TextualBodyView, ZD as TextualBodyViewBodyWrapperKind, XD as TextualBodyViewKind, PA as TextualEventView, WA as ThreadMessagePreviewView, GA as ThreadSummaryView, aO as TileErrorView, PO as TimelineSeparator, Ak as TimelineView, dq as ToastContext, mq as ToastRack, wS as Toolbar, tO as UnknownBodyView, TT as UploadButton, $T as UserMenu, yq as UserStatusIconView, JD as VideoBodyView, qD as VideoBodyViewState, sb as ViewModelSubscriptions, rO as ViewSourceEventView, YK as VirtualizedRoomListView, Fe as VirtuosoMockContext, jO as WidgetContextMenuView, yO as WidgetPipView, H as _t, Vx as _tDom, Fx as _td, EP as attachmentIcon, Xx as checkInputableElement, e as clamp, t as defaultNumber, XN as findLinksInString, aS as findNextSiblingElement, oS as findPreviousSiblingElement, IA as formatBytes, kf as formatDateForInput, Of as formatSeconds, YN as generateLinkedTextOptions, eK as getContainerAccessibleProps, nK as getGroupHeaderAccessibleProps, tK as getItemAccessibleProps, qx as getLangsJson, Nx as getLocale, mb as getNormalizedLanguageKeys, HO as humanizeRelativeTime, VO as humanizeTime, ZN as isLinkable, WT as limitUserStatusInputText, DP as linkIcon, IN as linkifyHtml, hN as linkifyString, Bx as lookupString, pb as normalizeLanguageKey, n as percentageOf, r as percentageWithin, jx as registerTranslations, Wx as replaceByRegexes, Hx as sanitizeForTranslation, Gx as setLanguage, Px as setLocale, Mx as setMissingEntryGenerator, Ux as substitute, i as sum, pq as useActiveToast, JP as useCollapseFilters, ub as useCreateAutoDisposedViewModel, sE as useEventPresentation, z as useI18n, nP as useLinkedTextContext, db as useMockedViewModel, pS as useRovingTabIndex, fq as useToastContext, V as useViewModel, YP as useVisibleFilters };
