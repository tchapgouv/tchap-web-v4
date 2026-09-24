import { clamp as e, defaultNumber as t, percentageOf as n, percentageWithin as r, sum as i } from "./numbers.js";
import * as a from "react";
import o, { Children as s, cloneElement as c, createContext as l, createElement as u, forwardRef as d, isValidElement as f, memo as p, startTransition as m, useCallback as h, useContext as g, useEffect as _, useId as v, useImperativeHandle as y, useInsertionEffect as b, useLayoutEffect as x, useMemo as S, useReducer as C, useRef as w, useState as T, useSyncExternalStore as ee, version as te } from "react";
import { Avatar as E, AvatarStack as ne, Badge as D, Button as O, ChatFilter as k, CheckboxMenuItem as re, ContextMenu as ie, Dropdown as A, ErrorMessage as ae, Field as oe, Form as se, H1 as ce, Heading as le, HelpMessage as ue, IconButton as j, IndicatorIcon as de, InlineSpinner as fe, Label as pe, Link as me, Menu as he, MenuItem as M, MenuTitle as ge, RadioMenuItem as _e, ReleaseAnnouncement as ve, Root as ye, Separator as be, SubMenu as xe, Submit as Se, Text as N, TextControl as Ce, Toast as we, ToggleMenuItem as Te, Tooltip as Ee, Unread as De, UnreadCounter as Oe, useIdColorHash as ke } from "@vector-im/compound-web";
import { DATA_BY_CATEGORY as Ae, getEmojiFromUnicode as je } from "@matrix-org/emojibase-bindings";
import { Virtuoso as Me, VirtuosoMockContext as Ne } from "react-virtuoso";
import { flushSync as Pe } from "react-dom";
import { Group as Fe, Group as Ie, Panel as Le, Panel as Re, Separator as ze, Separator as Be, usePanelCallbackRef as Ve } from "react-resizable-panels";
//#region \0rolldown/runtime.js
var He = Object.create, Ue = Object.defineProperty, We = Object.getOwnPropertyDescriptor, Ge = Object.getOwnPropertyNames, Ke = Object.getPrototypeOf, qe = Object.prototype.hasOwnProperty, Je = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, P = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), Ye = (e, t) => {
	let n = {};
	for (var r in e) Ue(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || Ue(n, Symbol.toStringTag, { value: "Module" }), n;
}, Xe = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = Ge(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !qe.call(e, s) && s !== n && Ue(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = We(t, s)) || r.enumerable
	});
	return e;
}, Ze = (e, t, n) => (n = e == null ? {} : He(Ke(e)), Xe(t || !e || !e.__esModule || !qe.call(e, "default") ? Ue(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), Qe = (e) => qe.call(e, "module.exports") ? e["module.exports"] : Xe(Ue({}, "__esModule", { value: !0 }), e), $e = globalThis.Temporal, et = (e, t) => `Non-positive ${e}: ${t}`, tt = (e, t) => `Non-finite ${e}: ${t}`, nt = (e) => `Cannot convert bigint to ${e}`, rt = "Invalid object", it = (e, t, n, r) => at(e, t) + `; must be between ${n}-${r}`, at = (e, t) => `Invalid ${e}: ${t}`, ot = 1e3, st = 1e6, ct = 1e9, lt = 6e10, ut = 36e11;
function dt(e) {
	return e === void 0 ? Object.create(null) : vt(e);
}
function ft(e, t = "number") {
	if (typeof e == "bigint") throw TypeError(nt(t));
	if (e = Number(e), !Number.isFinite(e)) throw RangeError(tt(t, e));
	return e;
}
function pt(e, t) {
	return Math.trunc(ft(e, t)) || 0;
}
function mt(e, t) {
	return ht(pt(e, t), t);
}
function ht(e, t = "number") {
	if (e <= 0) throw RangeError(et(t, e));
	return e;
}
function gt(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
function _t(e) {
	return e !== null && (typeof e == "object" || typeof e == "function");
}
function vt(e) {
	if (!_t(e)) throw TypeError(rt);
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/temporal-polyfill@1.0.4/node_modules/temporal-polyfill/chunks/internal.js
var yt = at, bt = (e) => `Missing ${e}`, xt = (e) => "No valid fields: " + e.join(), St = (e, t, n) => at(e, t) + "; must be " + Object.keys(n).join(), Ct = "Cannot use valueOf", wt = "Invalid calling context", Tt = (e) => "Missing year" + (e ? "/era/eraYear" : ""), Et = "Invalid leap month", Dt = (e) => at("Calendar", e), Ot = (e, t) => `Unknown calendar ${e}; might need ${t}`, kt = (e) => at("TimeZone", e), At = (e) => `Cannot parse: ${e}`, jt = (e) => `Invalid substring: ${e}`, Mt = gt, Nt = _t;
function F(e) {
	throw RangeError(e);
}
function Pt(e) {
	throw TypeError(e);
}
function Ft(e, t, n, r, i) {
	return It(t, ((e, t) => {
		let n = e[t];
		return n === void 0 && Pt(bt(t)), n;
	})(e, t), n, r, i);
}
function It(e, t, n, r, i, a) {
	let o = Mt(t, n, r);
	return i && t !== o && F(((e, t, n, r, i) => i ? it(e, i[t], i[n], i[r]) : it(e, t, n, r))(e, t, n, r, a)), o;
}
function Lt(e, t = Map) {
	let n = new t();
	return (t, ...r) => {
		if (n.has(t)) return n.get(t);
		let i = e(t, ...r);
		return n.set(t, i), i;
	};
}
var Rt = (e) => zt({ name: e }, 1), zt = (e, t) => Vt((e) => ({
	value: e,
	configurable: 1,
	writable: !t
}), e), Bt = (e) => ({ [Symbol.toStringTag]: {
	value: e,
	configurable: 1
} });
function Vt(e, t) {
	let n = {};
	for (let r in t) n[r] = e(t[r], r);
	return n;
}
function Ht(e, t) {
	let n = {};
	for (let r of e) n[r] = t;
	return n;
}
function Ut(e) {
	let t = {};
	for (let n of e) t[n] = (e) => e[n];
	return t;
}
function Wt(e, t, n = Object.create(null)) {
	for (let r of e) n[r] = t[r];
	return n;
}
function Gt(e, t, n) {
	for (let r of e) if (t[r] !== n[r]) return 0;
	return 1;
}
function Kt(e, t, n) {
	let r = { ...n };
	for (let n = 0; n < t; n++) r[e[n]] = 0;
	return r;
}
function qt(e, ...t) {
	return (...n) => e(...t, ...n);
}
function Jt() {}
function Yt(e) {
	return e[0].toUpperCase() + e.substring(1);
}
function Xt(...e) {
	return [].concat(...e).sort();
}
function Zt(e) {
	return RegExp(`^${e}$`, "i");
}
function Qt(e) {
	return parseInt(e.padEnd(9, "0"));
}
function $t(e) {
	return e && e !== "+" ? -1 : 1;
}
function en(e) {
	return e === void 0 ? 0 : parseInt(e);
}
function tn(e, t) {
	return String(t).padStart(e, "0");
}
var nn = /*@__PURE__*/ qt(tn, 2);
function rn(e, t) {
	return Math.sign(e - t);
}
function an(e, t) {
	return e < t ? -1 : +(e > t);
}
function on(e, t) {
	let n = e / t;
	return e % t < 0n ? n - 1n : n;
}
function sn(e, t) {
	let n = on(e, t);
	return [n, e - n * t];
}
function cn(e, t) {
	return [Math.floor(e / t), ln(e, t)];
}
function ln(e, t) {
	return (e % t + t) % t;
}
function un(e, t) {
	return Math.trunc(e / t) || 0;
}
function dn(e, t) {
	return e % t || 0;
}
function fn(e, t = 1) {
	return t * (.5 + e / 5);
}
function pn(e) {
	return Math.abs(e % 1) === .5;
}
var mn = "iso8601", hn = {
	bce: -1,
	ce: 0
};
function gn(e) {
	let t = e.normalize("NFD").toLowerCase().replace(/[^a-z0-9]/g, "");
	return t === "bc" || t === "b" ? "bce" : t === "ad" || t === "a" ? "ce" : t;
}
function _n(e) {
	return e === void 0 ? "iso8601" : e === 0 ? "gregory" : e.id;
}
var vn = /^M(\d{2})(L?)$/;
function yn(e) {
	let t = vn.exec(e);
	return t || F(((e) => `Invalid monthCode: ${e}`)(e)), [parseInt(t[1]), !!t[2]];
}
function bn(e, t) {
	return "M" + nn(e) + (t ? "L" : "");
}
function xn(e, t, n) {
	return e + (t || n && e >= n ? 1 : 0);
}
var Sn = {
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
}, Cn = /*@__PURE__*/ Object.keys(Sn), wn = ot, Tn = st, En = ct, Dn = lt, On = ut, kn = 864e11, An = [
	1,
	wn,
	Tn,
	En,
	Dn,
	On,
	kn
], jn = /*@__PURE__*/ BigInt(wn), Mn = /*@__PURE__*/ BigInt(Tn), Nn = /*@__PURE__*/ BigInt(En), Pn = /*@__PURE__*/ BigInt(Dn), Fn = /*@__PURE__*/ BigInt(On), In = /*@__PURE__*/ BigInt(kn);
function Ln(e, t) {
	let n = Number(e / In), r = Number(e % In);
	return kn / t * n + (Math.trunc(r / t) + r % t / t);
}
var Rn = /*@__PURE__*/ Cn.slice(0, 6), zn = /*@__PURE__*/ Ut(Rn), Bn = ["year"], Vn = ["day"], Hn = [
	"day",
	"month",
	"year"
], Un = ["offset"], Wn = ["timeZone"], Gn = ["era", "eraYear"], Kn = [
	"era",
	"eraYear",
	"year"
], qn = ["month", "monthCode"], Jn = [
	"day",
	"month",
	"monthCode"
], Yn = /*@__PURE__*/ Xt(Rn), Xn = /*@__PURE__*/ Xt(Gn, Bn), Zn = /*@__PURE__*/ Xt(qn, Bn), Qn = /*@__PURE__*/ Xt(Gn, Zn), $n = /*@__PURE__*/ Xt(["monthCode"], Bn), er = /*@__PURE__*/ Xt(Gn, $n), tr = /*@__PURE__*/ Xt(Vn, ["monthCode"]), nr = /*@__PURE__*/ Xt(Vn, Zn), rr = /*@__PURE__*/ Xt(Vn, Gn, Zn), ir = /*@__PURE__*/ Xt(nr, Rn), ar = /*@__PURE__*/ Xt(rr, Rn), or = /*@__PURE__*/ Xt(nr, Rn, Un), sr = /*@__PURE__*/ Xt(rr, Rn, Un), cr = /*@__PURE__*/ Xt(nr, Rn, Un, Wn), lr = /*@__PURE__*/ Xt(rr, Rn, Un, Wn), ur = /*@__PURE__*/ Xt(Vn, $n), dr = /*@__PURE__*/ Xt(Vn, Gn, $n), fr = /*@__PURE__*/ Ht(Rn, 0);
function pr(e) {
	return hr(e, 1), e;
}
var mr = {
	hour: 23,
	minute: 59,
	second: 59
};
function hr(e, t) {
	let n = {};
	for (let r of Rn) n[r] = It(r, e[r], 0, mr[r] || 999, t);
	return n;
}
function gr(e) {
	return vr(e) * En + yr(e);
}
function _r(e) {
	return 1e3 * vr(e) + e.millisecond;
}
function vr(e) {
	return 3600 * e.hour + 60 * e.minute + e.second;
}
function yr(e) {
	return e.millisecond * Tn + e.microsecond * wn + e.nanosecond;
}
function br(e) {
	let [t, n] = cn(e, kn);
	return [xr(n), t];
}
function xr(e) {
	let [t, n] = cn(e, Tn), [r, i] = cn(n, wn);
	return Sr(t, r, i);
}
function Sr(e, t = 0, n = 0) {
	let [r, i] = cn(e, 36e5), [a, o] = cn(i, 6e4), [s, c] = cn(o, 1e3);
	return {
		hour: r,
		minute: a,
		second: s,
		millisecond: c,
		microsecond: t,
		nanosecond: n
	};
}
function Cr(e) {
	let [t, n] = sn(e, Nn);
	return [Number(t), Number(n)];
}
function wr(e) {
	return Er(e) + BigInt(gr(e));
}
function Tr(e) {
	return Dr(e) + _r(e);
}
function Er(e) {
	return BigInt(Or(e)) * In;
}
function Dr(e) {
	return 864e5 * Or(e);
}
function Or(e) {
	return kr(e.year, e.month, e.day);
}
function kr(e, t = 1, n = 1) {
	let r = t - 1;
	return e += Math.floor(r / 12), t = ln(r, 12), Date.UTC(e % 400 - 400, t, 0) / 864e5 + 146097 * (un(e, 400) + 1) + n;
}
function Ar(e) {
	let [t, n] = sn(e, In);
	return {
		...jr(Number(t)),
		...xr(Number(n))
	};
}
function jr(e) {
	let t = /* @__PURE__ */ new Date(864e5 * ln(e, 146097));
	return {
		year: t.getUTCFullYear() + 400 * Math.floor(e / 146097),
		month: t.getUTCMonth() + 1,
		day: t.getUTCDate()
	};
}
function Mr(e) {
	return [e, 0];
}
function Nr(e, t) {
	if (!t) return {
		year: 1972,
		month: e
	};
}
function Pr(e, t, n) {
	return {
		year: e,
		month: t,
		day: n
	};
}
function Fr(e, t) {
	switch (t) {
		case 2: return Lr(e) ? 29 : 28;
		case 4:
		case 6:
		case 9:
		case 11: return 30;
	}
	return 31;
}
function Ir(e) {
	return Lr(e) ? 366 : 365;
}
function Lr(e) {
	return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function Rr(e, t, n) {
	return e += un(n, 12), (t += dn(n, 12)) < 1 ? (e--, t += 12) : t > 12 && (e++, t -= 12), {
		year: e,
		month: t
	};
}
function zr(e, t, n, r) {
	return 12 * (n - e) + r - t;
}
function Br(e) {
	return ln(kr(e.year, e.month, e.day) + 4, 7) || 7;
}
function Vr(e) {
	return kr(e.year, e.month, e.day) - kr(e.year) + 1;
}
function Hr(e) {
	let t = e.year, n = Math.floor((Vr(e) - Br(e) + 10) / 7), r = Ur(t);
	return n < 1 ? n = r = Ur(--t) : n > r && (n = 1, r = Ur(++t)), {
		weekOfYear: n,
		yearOfWeek: t,
		Be: r
	};
}
function Ur(e) {
	let t = Br({
		year: e,
		month: 1,
		day: 1
	});
	return t === 4 || t === 3 && Lr(e) ? 53 : 52;
}
function Wr({ year: e }) {
	return e < 1 ? {
		era: "bce",
		eraYear: 1 - e
	} : {
		era: "ce",
		eraYear: e
	};
}
function Gr(e) {
	return Kr(e), pr(e);
}
function Kr(e) {
	return Jr(e, 1), e;
}
function qr(e) {
	return Gt(Hn, e, Jr(e));
}
function Jr(e, t) {
	let { year: n } = e, r = Ft(e, "month", 1, 12, t);
	return {
		year: n,
		month: r,
		day: Ft(e, "day", 1, Fr(n, r), t)
	};
}
function Yr(e, t) {
	return e ? e.ae(t) : t;
}
function Xr(e, t, n) {
	return e ? e.L(t, n) : Mr(n);
}
function Zr(e, t) {
	return e === 0 ? Wr(t) : e && e.h?.(t) || {};
}
function Qr(e, t, n, r) {
	return e ? e.de(t, n, r) : Pr(t, n, r);
}
function $r(e, t) {
	return e ? e.j(t) : 12;
}
function ei(e, t, n) {
	return e ? e.o(t, n) : Fr(t, n);
}
function ti(e, t) {
	let { year: n, month: r } = Yr(e, t), [i, a] = Xr(e, n, r);
	return bn(i, a);
}
function ni(e, t) {
	let { year: n } = Yr(e, t);
	return e ? e.q(n) : Lr(n);
}
function ri(e, t) {
	let { year: n } = Yr(e, t);
	return $r(e, n);
}
function ii(e, t) {
	let { year: n, month: r } = Yr(e, t);
	return ei(e, n, r);
}
function ai(e, t) {
	let { year: n } = Yr(e, t);
	return e ? e.i(n) : Ir(n);
}
function oi(e, t) {
	if (!e) return Vr(t);
	let { year: n } = Yr(e, t), r = Qr(e, n, 1, 1);
	return Or(t) - Or(r) + 1;
}
function si(e, t) {
	return e === void 0 ? Hr(t).weekOfYear : void 0;
}
function ci(e, t) {
	return e === void 0 ? Hr(t).yearOfWeek : void 0;
}
var li = /*@__PURE__*/ Cn.map((e) => e + "s"), ui = /*@__PURE__*/ Ut(li), di = /*@__PURE__*/ Xt(li), fi = /*@__PURE__*/ li.slice(0, 6), pi = /*@__PURE__*/ li.slice(6), mi = /*@__PURE__*/ pi.slice(1), hi = /*@__PURE__*/ Ht(li, 0), gi = /*@__PURE__*/ Ht(fi, 0), _i = /*@__PURE__*/ qt(Kt, li);
function vi(e, t) {
	return t ?? F(bt(e)), t;
}
var yi = /*@__PURE__*/ qt(bi, "string");
function bi(e, t, n = e) {
	return typeof t !== e && Pt(yt(n, t)), t;
}
function xi(e, t = "number") {
	return Number.isInteger(e) || F(((e, t) => `Non-integer ${e}: ${t}`)(t, e)), e || 0;
}
function Si(e) {
	return typeof e == "symbol" && Pt("Cannot convert Symbol to string"), String(e);
}
function Ci(e, t) {
	return _t(e) ? String(e) : yi(e, t);
}
function wi(e) {
	return typeof e == "boolean" ? BigInt(+!!e) : typeof e == "string" ? BigInt(e) : (typeof e != "bigint" && Pt(`Invalid bigint: ${e}`), e);
}
function Ti(e, t) {
	return xi(ft(e, t), t);
}
function Ei(e, t) {
	return typeof e == "string" ? ((e, t) => {
		let n = Object.create(null);
		return n[e] = t, n;
	})(t, e) : vt(e);
}
var Di = "smallestUnit", Oi = {
	constrain: 0,
	reject: 1
}, ki = {
	compatible: 0,
	reject: 1,
	earlier: 2,
	later: 3
}, Ai = {
	reject: 0,
	use: 1,
	prefer: 2,
	ignore: 3
}, ji = {
	auto: 0,
	never: 1,
	critical: 2,
	always: 3
}, Mi = {
	auto: 0,
	never: 1,
	critical: 2
}, Ni = {
	auto: 0,
	never: 1
}, Pi = {
	floor: 0,
	halfFloor: 1,
	ceil: 2,
	halfCeil: 3,
	trunc: 4,
	halfTrunc: 5,
	expand: 6,
	halfExpand: 7,
	halfEven: 8
}, Fi = [
	Math.floor,
	(e) => pn(e) ? Math.floor(e) : Math.round(e),
	Math.ceil,
	(e) => pn(e) ? Math.ceil(e) : Math.round(e),
	Math.trunc,
	(e) => pn(e) ? Math.trunc(e) || 0 : Math.round(e),
	(e) => e < 0 ? Math.floor(e) : Math.ceil(e),
	(e) => Math.sign(e) * Math.round(Math.abs(e)) || 0,
	(e) => pn(e) ? (e = Math.trunc(e) || 0) + e % 2 : Math.round(e)
], Ii = {
	previous: -1,
	next: 1
};
function Li(e) {
	let t = e.roundingIncrement;
	return t === void 0 ? 1 : pt(t, "roundingIncrement");
}
function Ri(e) {
	let t = e.fractionalSecondDigits;
	if (t !== void 0) {
		if (typeof t != "number") {
			if (Si(t) === "auto") return;
			F(yt("fractionalSecondDigits", t));
		}
		t = It("fractionalSecondDigits", Math.floor(t), 0, 9, 1);
	}
	return t;
}
function zi(e, t, n = 0, r) {
	let i = t[e];
	if (i === void 0) return r ? n : void 0;
	if (i = Si(i), i === "auto") return r ? n : null;
	let a = Sn[i];
	return a === void 0 && (a = li.indexOf(i)), a < 0 && F(St(e, i, Sn)), a;
}
function Bi(e, t, n, r = 0) {
	let i = n[e];
	if (i === void 0) return r;
	let a = Si(i), o = t[a];
	return o === void 0 && F(St(e, a, t)), o;
}
var Vi = /*@__PURE__*/ qt(zi, Di), Hi = /*@__PURE__*/ qt(zi, "largestUnit"), Ui = /*@__PURE__*/ qt(zi, "unit"), Wi = /*@__PURE__*/ qt(Bi, "overflow", Oi), Gi = /*@__PURE__*/ qt(Bi, "disambiguation", ki), Ki = /*@__PURE__*/ qt(Bi, "offset", Ai), qi = /*@__PURE__*/ qt(Bi, "calendarName", ji), Ji = /*@__PURE__*/ qt(Bi, "timeZoneName", Mi), Yi = /*@__PURE__*/ qt(Bi, "offset", Ni), Xi = /*@__PURE__*/ qt(Bi, "roundingMode", Pi), Zi = /*@__PURE__*/ qt(Bi, "direction", Ii);
function Qi(e, t, n, r) {
	let i = r ? kn : An[t + 1];
	if (i) {
		let n = An[t];
		i % ((e = It("roundingIncrement", e, 1, i / n - +!r, 1)) * n) && F(yt("roundingIncrement", e));
	} else e = It("roundingIncrement", e, 1, n ? 10 ** 9 : 1, 1);
	return e;
}
function $i(e, t, n, r) {
	return t != null && It(e, t, n, r, 1, Cn), t;
}
function ea(e, t) {
	t > e && F("smallestUnit > largestUnit");
}
function ta(e, t, n, r = 9, i = 0, a = 4) {
	t = dt(t);
	let o = Hi(t, i), s = Li(t), c = Xi(t, a), l = Vi(t, i, 1);
	return o = $i("largestUnit", o, i, r), l = $i(Di, l, i, r), o == null ? o = Math.max(n, l) : ea(o, l), s = Qi(s, l, 1), e && (c = ((e) => e < 4 ? (e + 2) % 4 : e)(c)), [
		o,
		l,
		s,
		c
	];
}
function na(e, t = 6, n) {
	let r = Li(e = Ei(e, Di)), i = Xi(e, 7), a = Vi(e);
	return a = vi(Di, a), a = $i(Di, a, 0, t), r = Qi(r, a, void 0, n), [
		a,
		r,
		i
	];
}
function ra(e, t) {
	return Wt(Hn, e, Wt(Rn, t));
}
function I(e) {
	return e === void 0 ? 0 : Wi(vt(e));
}
function ia(e, t = 0) {
	e = dt(e);
	let n = Gi(e), r = Ki(e, t);
	return [
		Wi(e),
		r,
		n
	];
}
var aa = /*@__PURE__*/ BigInt(1e8) * In, oa = /*@__PURE__*/ BigInt(-1e8) * In, sa = oa - In, ca = -3261848;
function la(e) {
	let t = 12 * e.year + e.month;
	return (t < ca || t > 3309129) && F("Out-of-bounds date"), e;
}
function ua(e, t = 1) {
	return fa(Er(e), t), e;
}
function da(e) {
	let t = Er(e);
	return fa(t), t !== sa || gr(e) || F("Out-of-bounds date"), e;
}
function fa(e, t = 1) {
	(e < (t ? sa : oa) || e > aa) && F("Out-of-bounds date");
}
function pa(e) {
	return (e < oa || e > aa) && F("Out-of-bounds date"), e;
}
function ma(e, t) {
	return pa(Er(e) + BigInt(gr(e) - t));
}
function ha(e) {
	return { epochNanoseconds: e };
}
function ga(e, t, n) {
	return {
		calendar: n,
		timeZone: t,
		epochNanoseconds: e
	};
}
function _a(e, t) {
	return Wt(Rn, e, va(e, t));
}
function va(e, t) {
	return Wt(Hn, e, { calendar: t });
}
function ya(e) {
	return Wt(Rn, e);
}
function ba(e) {
	return Wt(li, e, { sign: Ko(e) });
}
function xa(e) {
	return t = e.epochNanoseconds, Number(on(t, Mn));
	var t;
}
function Sa(e) {
	return e.epochNanoseconds;
}
function Ca(e, t, n) {
	let r = ts(t), [i, a] = ((e, t) => {
		let n = t((e = Ei(e, "unit")).relativeTo), r = Ui(e);
		return r = vi("unit", r), [r, n];
	})(n, e), o = Math.max(i, r), s = a && Io(a);
	if (!a && Lo(o, s)) return Ta(t, i);
	if (a || F("Missing relativeTo"), !t.sign && Lo(i, s)) return 0;
	let [c, l, u] = Po(a, t, i);
	return Lo(i, s) ? Ta(c, i) : wa(c, l, i, u);
}
function wa(e, t, n, r) {
	let i = Ko(e) || 1, a = Ea(_i(n, e), n, i, r, t), o = a.ee, s = a.te, c = Number(s - o), l = Number(t - o);
	return a.pe[li[n]] + l / c * i;
}
function Ta(e, t) {
	return Ln(Yo(e), An[t]);
}
function Ea(e, t, n, r, i) {
	let a = li[t], o = e, s = 0, c = Da(o, a, n, r);
	return i && !((e, t, n, r) => r > 0 ? an(t, e) <= 0 && an(e, n) <= 0 : an(n, e) <= 0 && an(e, t) <= 0)(i, c.ee, c.te, Math.sign(n)) && (o = {
		...e,
		[a]: e[a] + n
	}, s = 1, c = Da(o, a, n, r)), {
		...c,
		pe: o,
		Ae: s
	};
}
function Da(e, t, n, r) {
	let i = {
		...e,
		[t]: e[t] + n
	};
	return {
		ee: No(r, e),
		te: No(r, i),
		se: i
	};
}
function Oa(e, t, n) {
	let r = n - t, i = e - t;
	if (!i) return 0;
	let a = i < 0n ? -i : i, o = r < 0n ? -r : r, s = an(i, 0n) === an(r, 0n) ? 1 : -1;
	return an(a, o) <= 0 ? a === o ? s : fn(an(2n * a, o), s) : Number(i) / Number(r);
}
function ka(e, t, n, r) {
	let { epochNanoseconds: i } = e, { timeZone: a, calendar: o } = e;
	if (t === 0 && n === 1) return {
		epochNanoseconds: i,
		timeZone: a,
		calendar: o
	};
	if (t === 6) {
		let t = ra(Ya(e), fr), n = ra(so(t, 1), fr), o = $a(a, t), s = $a(a, n);
		i = Wa(Ma(i, o, s), r) ? s : o;
	} else {
		let o = Ya(e), s = o.offsetNanoseconds;
		i = Za(a, Na(o, Ia(t, n), r), s, 2, 0, 1);
	}
	return {
		epochNanoseconds: i,
		timeZone: a,
		calendar: o
	};
}
function Aa(e) {
	let { timeZone: t } = e, n = ra(Ya(e), fr), r = ra(so(n, 1), fr), i = $a(t, n);
	return Ln($a(t, r) - i, On);
}
function ja(e) {
	let { timeZone: t, calendar: n } = e;
	return ga($a(t, ra(Ya(e), fr)), t, n);
}
function Ma(e, t, n) {
	return Oa(e < n ? e : n - 1n, t, n);
}
function Na(e, t, n) {
	let [r, i] = Pa(e, t, n), a = ra(so(e, i), r);
	return da(a), a;
}
function Pa(e, t, n) {
	return br(Ua(gr(e), t, n));
}
function Fa(e) {
	return Ua(e, Dn, 7);
}
function Ia(e, t) {
	return An[e] * t;
}
function La(e, t) {
	return BigInt(An[e]) * BigInt(t);
}
function Ra(e, t, n) {
	let r = Math.min(ts(e), 6);
	return Qo(Ba(Yo(e), BigInt(t), n), r);
}
function za(e, t, n, r, i, a, o, s) {
	if (r === 0 && i === 1) return e;
	let c = Ko(e) || 1, [l, u, d] = (Lo(r, s) ? s && r < 6 && n >= 6 ? Ka : Ga : qa)(c, e, t, n, r, i, a, o);
	return d && r !== 7 && (l = ((e, t, n, r, i, a) => {
		for (let o = r + 1; o <= n; o++) {
			if (o === 7 && n !== 7) continue;
			let r = _i(o, e);
			r[li[o]] += i;
			let s = an(t, No(a, r));
			if (s && s !== i) break;
			e = r;
		}
		return e;
	})(l, u, n, Math.max(6, r), c, o)), l;
}
function Ba(e, t, n) {
	return Ha(e, t, n, e / t % 2n);
}
function Va(e, t, n) {
	let [r, i] = sn(e, In), a = r * In;
	return a + Ha(i, t, n, (a / t + i / t) % 2n);
}
function Ha(e, t, n, r) {
	let i = e / t, a = e % t, o = 0;
	a && (o = fn(an(2n * (a < 0n ? -a : a), t), Math.sign(Number(a))));
	let s = Wa(Number(r) + o, n);
	return (i - r + BigInt(s)) * t;
}
function Ua(e, t, n) {
	return Wa(e / t, n) * t;
}
function Wa(e, t) {
	return Fi[t](e);
}
function Ga(e, t, n, r, i, a, o) {
	let s = Yo(t), c = Ba(s, La(i, a), o), l = c - s, u = Math.sign(Number(c / In) - Number(s / In)) === e, d = Qo(c, Math.min(r, 6));
	return [
		{
			...t,
			...d
		},
		n + l,
		u
	];
}
function Ka(e, t, n, r, i, a, o, s) {
	let c = Number(Xo(t)), l = Ia(i, a), u = Ua(c, l, o), d = Ea({
		...t,
		...gi
	}, 6, e, s, n), f = d.ee, p = d.te, m = u - Number(p - f), h = 0;
	m && Math.sign(m) !== e ? n = f + BigInt(u) : (h += e, u = Ua(m, l, o), n = p + BigInt(u));
	let g = $o(u);
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
function qa(e, t, n, r, i, a, o, s) {
	let c = li[i], l = _i(i, t);
	i === 7 && (t = {
		...t,
		weeks: t.weeks + Math.trunc(t.days / 7)
	}), l[c] = un(t[c], a) * a;
	let u = Ea(l, i, a * e, s, n), d = u.ee, f = u.te, p = Oa(n, d, f), m = u.pe[c], h = u.se[c], g = Ua(m + p * e * a, a, o), _ = g === h;
	return l[c] = g, [
		l,
		_ ? f : d,
		u.Ae || _
	];
}
function Ja(e, t) {
	return e.timeZone.O(e.epochNanoseconds, ((e) => {
		let t = Zi(Ei(e, "direction"), 0);
		return t || F(yt("direction", t)), t;
	})(t));
}
var Ya = /*@__PURE__*/ Lt(Xa, WeakMap);
function Xa(e) {
	let { epochNanoseconds: t, timeZone: n } = e, r = n.B(t);
	return {
		...Ar(t + BigInt(r)),
		offsetNanoseconds: r
	};
}
function Za(e, t, n, r = 0, i = 0, a, o) {
	if (n !== void 0 && r === 1 && (r === 1 || o)) return ma(t, n);
	r !== 2 && r !== 0 || ua(t, 0);
	let s = e.N(t);
	if (n !== void 0 && r !== 3) {
		let e = ((e, t, n, r) => {
			let i = wr(t);
			r && (n = Fa(n));
			for (let t of e) {
				let e = Number(i - t);
				if (r && (e = Fa(e)), e === n) return t;
			}
		})(s, t, n, a);
		if (e !== void 0) return e;
		r === 0 && F("Invalid TimeZone offset");
	}
	return o ? wr(t) : Qa(e, t, i, s);
}
function Qa(e, t, n = 0, r = e.N(t)) {
	if (r.length === 1) return r[0];
	if (n === 1 && F("Ambiguous offset"), r.length) return r[+(n === 3)];
	let i = wr(t), a = ((e, t) => {
		let n = e.B(t - In);
		return ((e) => (e > 864e11 && F("Out-of-bounds TimeZone gap"), e))(e.B(t + In) - n);
	})(e, i), o = Ar(i + BigInt(a * (n === 2 ? -1 : 1)));
	return (r = e.N(o))[n === 2 ? 0 : r.length - 1];
}
function $a(e, t) {
	let n = e.N(t);
	if (n.length) return n[0];
	let r = wr(t) - In;
	return e.O(r, 1);
}
function eo(e, t, n, r, i) {
	let a = I(i);
	return r.sign && ts(r) < 8 && F("Cannot use small units"), ao(t, co(t, ua(ao(t, n)), e ? Go(r) : r, a));
}
function to(e, t) {
	return pa(e + (es(n = t) && F("Cannot use large units"), Xo(n)));
	var n;
}
function no(e, t, n) {
	let { calendar: r, epochNanoseconds: i, timeZone: a } = e, o = Xo(t), s = i;
	if (es(t)) {
		let i = Ya(e);
		s = Qa(a, ra(io(r, i, {
			...t,
			...gi
		}, n), i)) + o;
	} else s += o, I(n);
	return {
		...e,
		epochNanoseconds: pa(s)
	};
}
function ro(e, t, n, r) {
	let [i, a] = oo(t, n);
	return da(ra(io(e, t, {
		...n,
		...gi,
		days: n.days + a
	}, r), i));
}
function io(e, t, n, r) {
	if (n.years || n.months || n.weeks) return co(e, t, n, I(r));
	I(r);
	let i = n.days + Number(Xo(n) / In);
	return i ? ua(so(t, i)) : t;
}
function ao(e, t) {
	return so(t, 1 - Yr(e, t).day);
}
function oo(e, t) {
	let n = Xo(t), r = Number(n / In), i = Number(n % In), [a, o] = br(gr(e) + i);
	return [a, r + o];
}
function so(e, t) {
	return t ? jr(Or(e) + t) : e;
}
function co(e, t, n, r) {
	let { years: i, months: a, weeks: o, days: s } = n, c;
	if (s += Number(Xo(n) / In), i || a) c = lo(e, t, i, a, r);
	else {
		if (!o && !s) return t;
		c = t;
	}
	return (o || s) && (c = so(c, 7 * o + s)), ua(c);
}
function lo(e, t, n, r, i) {
	let { year: a, month: o, day: s } = Yr(e, t);
	if (n) {
		let [t, r] = Xr(e, a, o);
		a += n, o = uo(e, t, r, e ? e.p(a) : void 0, i), o = It("month", o, 1, $r(e, a), i);
	}
	if (r) {
		let t = e ? e.K(a, o, r) : Rr(a, o, r);
		({year: a, month: o} = t);
	}
	return s = It("day", s, 1, ei(e, a, o), i), Qr(e, a, o, s);
}
function uo(e, t, n, r, i) {
	if (n) {
		let n = e ? e.l : void 0;
		return r !== void 0 && (n < 0 || r === t + 1) ? r : (i === 1 && F(Et), n < 0 ? -n : t);
	}
	return xn(t, 0, r);
}
function fo(e, t) {
	return _n(e) !== _n(t) && F("Mismatching Calendars"), e;
}
function po(e, t) {
	return e.m !== t.m && F("Mismatching TimeZones"), e;
}
function mo(e) {
	return e.timeZone.id;
}
function ho(e, t, n, r) {
	let [i, a, o, s] = ta(e, r, 3, 5), c = Oo(t.epochNanoseconds, n.epochNanoseconds, i, a, o, s);
	return ba(e ? Go(c) : c);
}
function go(e, t, n, r, i) {
	let [a, o, s, c] = ta(e, i, 5), l = n.epochNanoseconds, u = r.epochNanoseconds, d;
	if (an(u, l)) {
		if (a < 6) d = Oo(l, u, a, o, s, c);
		else {
			let e = po(n.timeZone, r.timeZone);
			d = So(e, t, n, r, a), d = za(d, u, a, o, s, c, Mo(t, e, n), 1);
		}
	} else d = hi;
	return ba(e ? Go(d) : d);
}
function _o(e, t, n, r, i) {
	let [a, o, s, c] = ta(e, i, 6), l = wr(n), u = wr(r), d = an(u, l), f;
	return d ? a <= 6 ? f = Oo(l, u, a, o, s, c) : (f = wo(t, n, r, d, a), f = za(f, u, a, o, s, c, jo(t, n))) : f = hi, ba(e ? Go(f) : f);
}
function vo(e, t, n, r, i) {
	let [a, o, s, c] = ta(e, i, 6, 9, 6);
	return bo(e, t, n, r, a, o, s, c);
}
function yo(e, t, n, r, i) {
	let [a, o, s, c] = ta(e, i, 9, 9, 8), l = ao(t, n), u = ao(t, r);
	return Eo(l, u) ? bo(e, t, ua(l), ua(u), a, o, s, c, 8) : ba(hi);
}
function bo(e, t, n, r, i, a, o, s, c = 6) {
	let l = Er(n), u = Er(r), d;
	return an(u, l) ? i === 6 ? d = Oo(l, u, i, a, o, s) : (d = To(t, n, r, i), a === c && o === 1 || (d = za(d, u, i, a, o, s, Ao(t, n)))) : d = hi, ba(e ? Go(d) : d);
}
function xo(e, t, n, r) {
	let [i, a, o, s] = ta(e, r, 5, 5), c = Ua(gr(n) - gr(t), Ia(a, o), s), l = {
		...hi,
		...$o(c, i)
	};
	return ba(e ? Go(l) : l);
}
function So(e, t, n, r, i) {
	let a = an(r.epochNanoseconds, n.epochNanoseconds);
	if (!a) return hi;
	if (i < 6) return {
		...hi,
		...Qo(r.epochNanoseconds - n.epochNanoseconds, i)
	};
	if (!Eo(Ya(n), Ya(r))) return {
		...hi,
		...Qo(r.epochNanoseconds - n.epochNanoseconds, 5)
	};
	let [o, s, c] = Do(e, n, r, a);
	return {
		...i === 6 ? {
			...hi,
			days: ko(o, s)
		} : To(t, o, s, i),
		...$o(c)
	};
}
function Co(e, t, n, r) {
	let i = wr(t), a = wr(n), o = an(a, i);
	return o ? r <= 6 ? {
		...hi,
		...Qo(a - i, r)
	} : wo(e, t, n, o, r) : hi;
}
function wo(e, t, n, r, i) {
	let a = n, o = gr(n) - gr(t);
	return Math.sign(o) === -r && (a = so(n, -r), o += 864e11 * r), {
		...To(e, t, a, i),
		...$o(o)
	};
}
function To(e, t, n, r) {
	if (r <= 7) {
		let e = ko(t, n);
		return r === 7 ? {
			...hi,
			weeks: un(e, 7),
			days: dn(e, 7)
		} : {
			...hi,
			days: e
		};
	}
	let i = Yr(e, t), a = Yr(e, n);
	if (r === 8) {
		let { year: r, month: o, day: s } = i, { year: c, month: l, day: u } = a, d = Math.sign(rn(c, r) || rn(l, o) || ko(t, n)), f = 0, p = 0;
		if (d) {
			f = e ? e._(r, o, c, l) : zr(r, o, c, l);
			let i = lo(e, t, 0, f, 0);
			d * rn(s, u) > 0 && (f -= d, i = lo(e, t, 0, f, 0)), p = ko(i, n);
		}
		return {
			...hi,
			months: f,
			days: p
		};
	}
	let { year: o, month: s, day: c } = i, { year: l, month: u, day: d } = a, f = l - o, p = u - s, m = d - c;
	if (f || p) {
		let t = Math.sign(f || p), n = ei(e, l, u), r = 0;
		if (Math.sign(d - c) === -t) {
			let i = n, a = e ? e.K(l, u, -t) : Rr(l, u, -t);
			({year: l, month: u} = a), f = l - o, p = u - s, n = ei(e, l, u), r = t < 0 ? -i : n;
		}
		if (m = d - Math.min(c, n) + r, f) {
			let [n, r] = Xr(e, o, s), [i, a] = Xr(e, l, u), c = e ? e.l : void 0;
			if (p = c !== void 0 && r && !a && (c < 0 ? t > 0 && i === -c : t < 0 && i === n) ? 0 : i - n || Number(a) - Number(r), Math.sign(p) === -t) {
				let i = t < 0 && -$r(e, l);
				l -= t, f = l - o, p = u - uo(e, n, r, e ? e.p(l) : void 0, 0) + (i || $r(e, l));
			} else if (e) {
				let t = uo(e, n, r, e.p(l), 0);
				p = e._(l, t, l, u);
			}
		}
	}
	return {
		...hi,
		years: f,
		months: p,
		days: m
	};
}
function Eo(e, t) {
	return rn(e.year, t.year) || rn(e.month, t.month) || rn(e.day, t.day);
}
function Do(e, t, n, r) {
	let i = Ya(t), a = Ya(n), o = n.epochNanoseconds, s = 0, c = gr(a) - gr(i);
	Math.sign(c) === -r && s++;
	let l = s + +(r > 0);
	for (; s <= l; s++) {
		let t = so(a, s * -r), n = Qa(e, ra(t, i));
		if (an(o, n) !== -r) return [
			i,
			t,
			Number(o - n)
		];
	}
}
function Oo(e, t, n, r, i, a) {
	return {
		...hi,
		...Qo(Ba(t - e, La(r, i), a), n)
	};
}
function ko(e, t) {
	return Or(t) - Or(e);
}
function Ao(e, t) {
	return {
		origin: t,
		ie: Er(t),
		calendar: e,
		he: Er
	};
}
function jo(e, t) {
	return {
		origin: t,
		ie: wr(t),
		calendar: e,
		he: (e) => wr(ra(e, t))
	};
}
function Mo(e, t, n) {
	let r = Ya(n);
	return {
		origin: r,
		ie: n.epochNanoseconds,
		calendar: e,
		he: (e) => Qa(t, ra(e, r))
	};
}
function No(e, t) {
	return es(t) ? e.he(io(e.calendar, e.origin, t)) : e.ie;
}
function Po(e, t, n) {
	let { calendar: r } = e;
	if (Io(e)) {
		let { timeZone: i } = e, a = no(e, t);
		return [
			So(i, r, e, a, n),
			a.epochNanoseconds,
			Mo(r, i, e)
		];
	}
	let i = da(ra(e, fr)), a = ro(r, i, t);
	return [
		Co(r, i, a, n),
		wr(a),
		Ao(r, e)
	];
}
function Fo(e, t) {
	return Io(e) ? no(e, t).epochNanoseconds : wr(ro(e.calendar, ra(e, fr), t));
}
function Io(e) {
	return "timeZone" in e;
}
function Lo(e, t) {
	return e <= 6 - !!t;
}
function Ro(e, t, n) {
	let r = {};
	for (let i = t; i >= 0; i--) {
		let t = An[i];
		r[n[i]] = un(e, t), e = dn(e, t);
	}
	return r;
}
var zo = 2 ** 53;
function Bo(e, t, n, r, i) {
	let a = e(dt(i).relativeTo), o = Math.max(ts(n), ts(r));
	return Lo(o, a && Io(a)) ? Vo(t, n, r, o) : (a || F("Missing relativeTo"), t && (r = Go(r)), ba(((e, t, n, r) => {
		let { calendar: i } = e;
		if (Io(e)) {
			let { timeZone: a } = e;
			return So(a, i, e, no(no(e, t), n), r);
		}
		let a = ra(e, fr);
		return Co(i, a, ro(i, ro(i, a, t), n), r);
	})(a, n, r, o)));
}
function Vo(e, t, n, r) {
	return ba(qo(((e, t, n, r) => {
		let i = Yo(e) + Yo(t) * BigInt(r ? -1 : 1);
		return Number.isFinite(Number(i / In)) || F("Out-of-bounds date"), {
			...hi,
			...Qo(i, n)
		};
	})(t, n, r, e)));
}
function Ho(e, t, n) {
	let r = ts(t), [i, a, o, s, c] = ((e, t, n) => {
		e = Ei(e, Di);
		let r = Hi(e), i = n(e.relativeTo), a = Li(e), o = Xi(e, 7), s = Vi(e);
		return r === void 0 && s === void 0 && F("Required smallestUnit or largestUnit"), s ??= 0, r ??= Math.max(s, t), ea(r, s), a = Qi(a, s, 1), a > 1 && s > 5 && r !== s && F("For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit"), [
			r,
			s,
			a,
			o,
			i
		];
	})(n, r, e);
	if (!c && Math.max(r, i) <= 6) return ba(qo(((e, t, n, r, i) => {
		let a = Ba(Yo(e), La(n, r), i);
		return {
			...hi,
			...Qo(a, t)
		};
	})(t, i, a, o, s)));
	let l = c && Io(c), u = l && i >= 6 && a < 6;
	if (!t.sign && !u) return t;
	c || F("Missing relativeTo");
	let [d, f, p] = Po(c, t, i);
	return ba(za(d, f, i, a, o, s, p, l));
}
function Uo(e) {
	return e.sign === -1 ? Wo(e) : e;
}
function Wo(e) {
	return ba(Go(e));
}
function Go(e) {
	let t = {};
	for (let n of li) t[n] = -1 * e[n] || 0;
	return t;
}
function Ko(e, t = li) {
	let n = 0;
	for (let r of t) {
		let t = Math.sign(e[r]);
		t && (n && n !== t && F("Cannot mix duration signs"), n = t);
	}
	return n;
}
function qo(e) {
	for (let t of mi) It(t, e[t], -4294967295, 4294967295, 1);
	let t = Yo(e);
	return Jo(Number(t / Nn)), e;
}
function Jo(e) {
	Number.isSafeInteger(e) || F("Out-of-bounds duration");
}
function Yo(e) {
	return BigInt(e.days) * In + Xo(e);
}
function Xo(e) {
	return BigInt(e.hours) * Fn + BigInt(e.minutes) * Pn + Zo(e);
}
function Zo(e) {
	return BigInt(e.seconds) * Nn + BigInt(e.milliseconds) * Mn + BigInt(e.microseconds) * jn + BigInt(e.nanoseconds);
}
function Qo(e, t = 6) {
	let n = Number(e / In), r = Number(e % In), i = An[t], a = t <= 3 ? Number(e / BigInt(i)) : kn / i * n + un(r, i);
	Number.isFinite(a) || F("Out-of-bounds date"), t <= 3 && Math.abs(a) / (En / An[t]) >= zo && F("Out-of-bounds date");
	let o = Ro(r, t, li);
	return o[li[t]] = a, o;
}
function $o(e, t = 5) {
	return Ro(e, t, li);
}
function es(e) {
	return !!Ko(e, pi);
}
function ts(e) {
	let t = 9;
	for (; t > 0 && !e[li[t]]; t--);
	return t;
}
function ns(e, t) {
	return an(e.epochNanoseconds, t.epochNanoseconds);
}
function rs(e, t, n, r) {
	let i = e(dt(r).relativeTo), a = Math.max(ts(t), ts(n));
	return Gt(li, t, n) ? 0 : Lo(a, i && Io(i)) ? an(Yo(t), Yo(n)) : (i || F("Missing relativeTo"), an(Fo(i, t), Fo(i, n)));
}
function is(e, t) {
	return as(e, t) || os(e, t);
}
function as(e, t) {
	return rn(Or(e), Or(t));
}
function os(e, t) {
	return rn(gr(e), gr(t));
}
function ss(e, t) {
	return !ns(e, t);
}
function cs(e, t) {
	return !ns(e, t) && e.timeZone.m === t.timeZone.m && e.calendar === t.calendar;
}
function ls(e, t) {
	return !is(e, t) && e.calendar === t.calendar;
}
function us(e, t) {
	return !as(e, t) && e.calendar === t.calendar;
}
function ds(e, t) {
	return !as(e, t) && e.calendar === t.calendar;
}
function fs(e, t) {
	return !as(e, t) && e.calendar === t.calendar;
}
function ps(e, t) {
	return !os(e, t);
}
function ms(e) {
	return e === 0 ? hn : e ? e.k : void 0;
}
function hs(e, t, n = t) {
	return ms(e) ? n : t;
}
function gs(e, t) {
	let n = e || void 0, r = ms(e), { era: i, eraYear: a, year: o } = t;
	if (o !== void 0 && (o = pt(o, "year")), a !== void 0 && (a = pt(a, "eraYear")), i !== void 0 || a !== void 0) {
		i !== void 0 && a !== void 0 || Pt("Mismatching era/eraYear"), r || F("Forbidden era/eraYear");
		let e = gn(i), t = r[e];
		t === void 0 && F(((e) => `Invalid era: ${e}`)(i));
		let s = n?.$ ? n.$(a, e, t) : ys(a, t);
		o !== void 0 && o !== s && F("Mismatching year/eraYear"), o = s;
	} else o === void 0 && Pt(Tt(r));
	return o;
}
function _s(e, t, n, r, i) {
	let { month: a, monthCode: o } = t;
	if (o !== void 0) {
		let t = ((e, t, n, r, i = yn(t)) => {
			let a = e ? e.p(n) : void 0, [o, s] = i, c = xn(o, s, a);
			if (s) {
				let t = e ? e.l : void 0;
				t === void 0 && F(Et), t > 0 ? (c > t && F(Et), a !== c && (r === 1 && F(Et), c = xn(o, 0, a))) : (c !== -t && F(Et), a === void 0 && r === 1 && F(Et));
			}
			return c;
		})(e, o, n, r, i);
		a !== void 0 && a !== t && F("Mismatching month/monthCode"), a = t, r = 1;
	} else a === void 0 && Pt("Missing month/monthCode");
	return It("month", a, 1, $r(e, n), r);
}
function vs(e, t, n, r, i) {
	return Ft(t, "day", 1, ei(e, r, n), i);
}
function ys(e, t) {
	return (t + e) * (Math.sign(t) || 1) || 0;
}
function bs(e, t) {
	return hr(Wt(Rn, {
		...fr,
		...e
	}), t);
}
var xs = /*@__PURE__*/ Zt("([+-])(\\d{2})(?::?(\\d{2})(?::?(\\d{2})(?:[.,](\\d{1,9}))?)?)?");
function Ss(e) {
	let t = Cs(e);
	return t === void 0 && F(At(e)), t;
}
function Cs(e, t) {
	let n = xs.exec(e);
	if (n && ((e) => ((e) => {
		e[0] !== "T" && e[0] !== "t" || (e = e.slice(1));
		let t = e.search(/[.,]/), n = t < 0 ? e : e.slice(0, t), r = n.split(":");
		return r.length === 1 ? /^(?:\d{2}|\d{4}|\d{6})$/i.test(n) : (r.length === 2 || r.length === 3) && r.every((e) => e.length === 2 && /^\d{2}$/i.test(e));
	})(e.slice(1)))(n[0])) return ((e, t) => {
		let n = e[4] || e[5];
		return t && n && F(jt(n)), r = (en(e[2]) * On + en(e[3]) * Dn + en(e[4]) * En + Qt(e[5] || "")) * $t(e[1]), Math.abs(r) >= 864e11 && F("Out-of-bounds offset"), r;
		var r;
	})(n, t);
}
var ws = {
	era: Ci,
	month: mt,
	monthCode(e, t) {
		if (typeof e == "string") return e;
		if (e && typeof e == "object") {
			let n = e.toString;
			if (typeof n == "function") return yi(n.call(e), t);
		}
		return yi(e, t);
	},
	day: mt
}, Ts = /*@__PURE__*/ Ht(Rn, pt), Es = /*@__PURE__*/ Ht(li, Ti), Ds = /*@__PURE__*/ Object.assign({}, ws, Ts), Os = {
	offset(e) {
		return Ss(Ci(e));
	},
	...Ds
};
function ks(e, t, n, r, i = !r) {
	let a = {}, o = 0;
	for (let i of t) {
		let t = e[i];
		if (t !== void 0) {
			o = 1;
			let e = n[i];
			e && (t = e(t, i)), a[i] = t;
		} else r && r.includes(i) && Pt(bt(i));
	}
	return i && !o && Pt(xt(t)), a;
}
function As(e, t = fr, n) {
	let r = ra(e, t);
	return da(r), _a(r, n);
}
function js(e, t, n) {
	return Ns(e, t, Fs(e, t), I(n));
}
function Ms(e, t, n) {
	let r = Fs(e, t), i = n();
	return [Ns(e, t, r, i[0]), ...i];
}
function Ns(e, t, n, r) {
	let i = n[1], a = _s(e, t, i, r, n[0]);
	return va(ua(Qr(e, i, a, vs(e, t, a, i, r))), e);
}
function Ps(e) {
	if (e.monthCode !== void 0) return yn(e.monthCode);
}
function Fs(e, t) {
	let n = ms(e);
	return t.year !== void 0 || t.era !== void 0 && t.eraYear !== void 0 || Pt(Tt(n)), t.monthCode === void 0 && t.month === void 0 && Pt("Missing month/monthCode"), t.day === void 0 && Pt(bt("day")), [Ps(t), gs(e, t)];
}
function Is(e, t, n) {
	let r = ms(e);
	t.year !== void 0 || t.era !== void 0 && t.eraYear !== void 0 || Pt(Tt(r)), t.monthCode === void 0 && t.month === void 0 && Pt("Missing month/monthCode");
	let i = Ps(t), a = gs(e, t);
	return va(la(Qr(e, a, _s(e, t, a, I(n), i), 1)), e);
}
function Ls(e, t, n) {
	let r = e === void 0, i = ms(e);
	t.day === void 0 && Pt(bt("day")), r || t.month === void 0 || t.year !== void 0 || t.era !== void 0 && t.eraYear !== void 0 || Pt(Tt(i));
	let a = Ps(t), o = t.eraYear !== void 0 || t.year !== void 0 ? gs(e, t) : void 0, s = I(n), c, l, u;
	if (o === void 0 && r && (o = 1972), o !== void 0) {
		r || ua(Qr(e, o, 1, 1));
		let n = _s(e, t, o, s, a);
		c = vs(e, t, n, o, s), [l, u] = Xr(e, o, n);
	} else {
		t.monthCode === void 0 && Pt("Missing month/monthCode"), [l, u] = a;
		let n = e ? e.ne : 1972;
		if (n !== void 0) c = vs(e, t, _s(e, t, n, s, a), n, s);
		else {
			let n = s === 0 && e ? e.fe?.(l, u, t.day) : void 0;
			c = n === void 0 ? t.day : n;
		}
	}
	u && ((e && e.U?.[l]) ?? 1 / 0) < t.day && (s === 1 && F(Et), u = 0, c = Mt(t.day, 1, (e && e.R) ?? 1 / 0));
	let d = e ? e.u(l, !!u, c) : Nr(l, !!u);
	for (; !d && s === 0 && c > 1;) c--, d = e ? e.u(l, !!u, c) : Nr(l, !!u);
	d || F("Cannot guess year");
	let { year: f, month: p } = d;
	return va(ua(Qr(e, f, p, c)), e);
}
var Rs = Intl.DateTimeFormat;
function zs(e, t) {
	t < -864e13 && F("Out-of-bounds date");
	let n = e.formatToParts(t), r = {};
	for (let e of n) r[e.type] = e.value;
	return r;
}
var Bs = {
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
}, Vs = -388152e4;
function Hs(e, t = 4) {
	let n = Ri(e);
	return [Xi(e, 4), ...Gs($i(Di, Vi(e), 0, t), n)];
}
function Us(e) {
	return qi(dt(e));
}
function Ws(e, t) {
	return Hs(dt(e), t);
}
function Gs(e, t) {
	return e == null ? [t === void 0 ? 1 : 10 ** (9 - t), t] : [An[e], e < 4 ? 9 - 3 * e : -1];
}
function Ks(e, t, n) {
	let [r, i, a, o] = ((e) => {
		let t = Ri(e = dt(e)), n = Xi(e, 4), r = Vi(e);
		return [
			e.timeZone,
			n,
			...Gs($i(Di, r, 0, 4), t)
		];
	})(n), s = r !== void 0;
	return ((e, t, n, r, i, a) => {
		n = Va(n, BigInt(i), r);
		let o = t.B(n);
		return ic(Ar(n + BigInt(o)), a) + (e ? lc(Fa(o)) : "Z");
	})(s, Cc(s ? e(r) : "UTC"), t.epochNanoseconds, i, a, o);
}
function qs(e, t) {
	let n = ((e) => {
		e = dt(e);
		let t = qi(e), n = Ri(e), r = Yi(e), i = Xi(e, 4), a = Vi(e);
		return [
			t,
			Ji(e),
			r,
			i,
			...Gs($i(Di, a, 0, 4), n)
		];
	})(t);
	return ((e, t, n, r, i, a, o, s, c, l) => {
		r = Va(r, BigInt(c), s);
		let u = n.B(r);
		return ic(Ar(r + BigInt(u)), l) + lc(Fa(u), o) + uc(t, a) + dc(e, i);
	})(e.calendar, e.timeZone.id, e.timeZone, e.epochNanoseconds, ...n);
}
function Js(e, t) {
	let n = ((e) => (e = dt(e), [qi(e), ...Hs(e)]))(t);
	return ((e, t, n, r, i, a) => ic(Na(t, i, r), a) + dc(e, n))(e.calendar, e, ...n);
}
function Ys(e, t) {
	return n = e.calendar, r = e, i = Us(t), ac(r) + dc(n, i);
	var n, r, i;
}
function Xs(e, t) {
	return Qs(e.calendar, oc, e, Us(t));
}
function Zs(e, t) {
	return Qs(e.calendar, sc, e, Us(t));
}
function Qs(e, t, n, r) {
	return r === 1 ? e === void 0 ? t(n) : ac(n) : r > 1 || r === 0 && e !== void 0 ? ac(n) + fc(_n(e), r === 2) : t(n);
}
function $s(e, t) {
	return ((e, t, n, r) => cc(Pa(e, n, t)[0], r))(e, ...Ws(t));
}
function ec(e, t) {
	let [n, r, i] = Ws(t, 3);
	return r > 1 && qo(e = {
		...e,
		...Ra(e, r, n)
	}), tc(e, i);
}
function tc(e, t) {
	let { sign: n } = e, r = n === -1 ? Go(e) : e, { hours: i, minutes: a } = r, o = Zo(r), s = Number(o / Nn), c = Number(o % Nn);
	Jo(s);
	let l = mc(c, t), u = t >= 0 || !n || l;
	return (n < 0 ? "-" : "") + "P" + nc({
		Y: rc(r.years),
		M: rc(r.months),
		W: rc(r.weeks),
		D: rc(r.days)
	}) + (i || a || s || u ? "T" + nc({
		H: rc(i),
		M: rc(a),
		S: rc(s, u) + l
	}) : "");
}
function nc(e) {
	let t = [];
	for (let n in e) {
		let r = e[n];
		r && t.push(r, n);
	}
	return t.join("");
}
function rc(e, t) {
	if (!e && !t) return "";
	let n = Object.create(null);
	return n.useGrouping = 0, e.toLocaleString("fullwide", n);
}
function ic(e, t) {
	return ac(e) + "T" + cc(e, t);
}
function ac(e) {
	return oc(e) + "-" + nn(e.day);
}
function oc(e) {
	let { year: t } = e;
	return (t < 0 || t > 9999 ? hc(t) + tn(6, Math.abs(t)) : tn(4, t)) + "-" + nn(e.month);
}
function sc(e) {
	return nn(e.month) + "-" + nn(e.day);
}
function cc(e, t) {
	let n = [nn(e.hour), nn(e.minute)];
	return t !== -1 && n.push(nn(e.second) + ((e, t, n, r) => mc(e * Tn + t * wn + n, r))(e.millisecond, e.microsecond, e.nanosecond, t)), n.join(":");
}
function lc(e, t = 0) {
	if (t === 1) return "";
	let [n, r] = cn(Math.abs(e), On), [i, a] = cn(r, Dn), [o, s] = cn(a, En);
	return hc(e) + nn(n) + ":" + nn(i) + (o || s ? ":" + nn(o) + mc(s) : "");
}
function uc(e, t) {
	return t === 1 ? "" : "[" + (t === 2 ? "!" : "") + e + "]";
}
function dc(e, t) {
	return t > 1 || t === 0 && e !== void 0 ? fc(_n(e), t === 2) : "";
}
function fc(e, t) {
	return "[" + (t ? "!" : "") + "u-ca=" + e + "]";
}
var pc = /0+$/;
function mc(e, t) {
	let n = tn(9, e);
	return n = t === void 0 ? n.replace(pc, "") : n.slice(0, t), n ? "." + n : "";
}
function hc(e) {
	return e < 0 ? "-" : "+";
}
var gc = /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/, _c = /[^\w\/:+-]+/;
function vc(e) {
	return yc(yi(e));
}
function yc(e) {
	return bc(e).id;
}
function bc(e) {
	let t = e.toUpperCase(), n = ((e) => {
		let t = Cs(e, 1);
		if (t !== void 0) return {
			id: lc(t),
			X: t,
			m: t
		};
	})(t);
	return n ? {
		kind: "fixed",
		...n
	} : xc(t === "UTC" ? "UTC" : ((e) => (_c.test(e) && F(kt(e)), gc.test(e) && F("Forbidden ICU TimeZone"), e.toLowerCase().split("/").map((e, t) => (e.length <= 3 || /\d/.test(e)) && !/etc|yap/.test(e) ? e.toUpperCase() : e.replace(/baja|dumont|[a-z]+/g, (e, n) => e.length <= 2 && !t || e === "in" || e === "chat" ? e.toUpperCase() : e.length > 2 || !n ? Yt(e).replace(/island|noronha|murdo|rivadavia|urville/, Yt) : e)).join("/")))(e));
}
var xc = /*@__PURE__*/ Lt((e) => {
	if (e === "UTC") return {
		kind: "utc",
		id: e,
		m: e
	};
	let t = Sc(e.toUpperCase());
	return {
		kind: "named",
		id: e,
		format: t,
		m: t.resolvedOptions().timeZone
	};
}), Sc = /*@__PURE__*/ Lt((e) => new Rs("en-u-hc-h23", {
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
function Cc(e) {
	let t = bc(e);
	return wc(t.id, t);
}
var wc = /*@__PURE__*/ Lt((e, t) => t.kind === "named" ? new Ec(e, t.m, t.format) : new Tc(e, t.m, t.kind === "fixed" ? t.X : 0)), Tc = class {
	constructor(e, t, n) {
		this.id = e, this.m = t, this.X = n;
	}
	B() {
		return this.X;
	}
	N(e) {
		return [ma(e, this.X)];
	}
	O() {}
}, Ec = class {
	constructor(e, t, n) {
		this.id = e, this.m = t, this.ke = ((e, t) => {
			let n = Lt(e), r = Lt(Oc), i = 86400 * t;
			function a(e) {
				let [t, a] = kc(e, i), s = Ac(t), c = Ac(a), l = n(s), u = n(c);
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
				xe(e) {
					let t = a(e - 86400), n = a(e + 86400), r = e - t, i = e - n;
					if (t === n) return [r];
					let o = a(r);
					return o === a(i) ? [e - o] : t > n ? [r, i] : [];
				},
				we: a,
				O: function e(t, a) {
					if (a > 0 && t >= 864e10) return;
					if (a < 0) {
						if (t <= Vs) return;
						let n = Dc() + 94867200;
						if (t > n) return e(n, -1);
					}
					let [s, c] = kc(a > 0 ? Math.max(t, Vs) : t, i), l = i * a, u = a > 0 ? Math.max(t, Dc()) + 94867200 : Vs, d = () => a < 0 ? c > u : s < u;
					for (; d();) {
						let e = Ac(s), i = Ac(c), u = n(e), d = n(i);
						if (u !== d) {
							let n = r(e, i);
							o(n, u, d);
							let s = n[0];
							if ((rn(s, t) || 1) === a) return s;
						}
						s += l, c += l;
					}
				}
			};
		})(((e) => (t) => {
			let n = zs(e, 1e3 * t);
			return 86400 * kr(((e) => {
				let t = e.relatedYear;
				if (t !== void 0) return parseInt(t);
				let n = parseInt(e.year);
				return e.era !== void 0 && gn(e.era) === "bce" ? 1 - n : n;
			})(n), parseInt(n.month), parseInt(n.day)) + 3600 * parseInt(n.hour) + 60 * parseInt(n.minute) + parseInt(n.second) - t;
		})(n), ((e) => Bs[e.split("/").pop()] || 60)(e));
	}
	B(e) {
		return this.ke.we(((e) => Cr(e)[0])(e)) * En;
	}
	N(e) {
		let t = 86400 * Or(e) + vr(e), n = yr(e);
		return this.ke.xe(t).map((e) => pa(BigInt(e) * Nn + BigInt(n)));
	}
	O(e, t) {
		let [n, r] = Cr(e), i = this.ke.O(n + (t > 0 || r ? 1 : 0), t);
		if (i !== void 0) return BigInt(i) * Nn;
	}
};
function Dc() {
	return Math.floor(Date.now() / 1e3);
}
function Oc(e, t) {
	return [e, t];
}
function kc(e, t) {
	let n = Math.floor(e / t) * t;
	return [n, n + t];
}
function Ac(e) {
	return Mt(e, -1e10, 864e10);
}
function jc(e, t, n) {
	let r = ks(n, hs(t, cr, lr), Os, [], 0);
	if (r.timeZone !== void 0) {
		let n = js(t, r), i = bs(r), a = Cc(e(r.timeZone));
		return {
			epochNanoseconds: Za(a, ra(n, i), r.offset),
			timeZone: a,
			calendar: t
		};
	}
	return js(t, r);
}
function Mc(e, t, n, r) {
	let i = ks(n, hs(t, cr, lr), Os, Wn, 0), a = e(i.timeZone), [o, s, c, l] = Ms(t, i, () => ia(r)), u = bs(i, s), d = Cc(a);
	return ga(Za(d, ra(o, u), i.offset, c, l), d, t);
}
function Nc(e, t, n) {
	let r = ks(t, hs(e, ir, ar), Ds, [], 0), [i, a] = Ms(e, r, () => [I(n)]);
	return As(i, bs(r, a), e);
}
function Pc(e, t, n, r = []) {
	return js(e, ks(t, hs(e, nr, rr), ws, r), n);
}
function Fc(e, t, n, r) {
	return Is(e, ks(t, hs(e, Zn, Qn), ws, r), n);
}
function Ic(e, t, n, r) {
	let i = ks(n, hs(e, nr, rr), ws, Vn, 0);
	return t && i.month !== void 0 && i.monthCode === void 0 && i.year === void 0 && (i.year = 1972), Ls(e, i, r);
}
function Lc(e, t) {
	return bs(ks(e, Yn, Ts, [], 1), I(t));
}
function Rc(e) {
	let t = ks(e, di, Es);
	return ba(qo({
		...hi,
		...t
	}));
}
function zc(e) {
	F(At(e));
}
function Bc(e) {
	let t = pl(e = Ci(e)), n;
	return t || zc(e), t.C ? n = 0 : t.offset ? n = Ss(t.offset) : zc(e), t.timeZoneId && Cs(t.timeZoneId, 1), Gr(t), ha(ma(t, n));
}
function Vc(e, t) {
	let n = pl(yi(e));
	return n || zc(e), n.timeZoneId ? nl(n, t, void 0) : (n.C && zc(e), il(n, t));
}
function Hc(e, t, n) {
	let r = pl(yi(e));
	return r && r.timeZoneId || zc(e), nl(r, t, n);
}
function Uc(e, t) {
	let n = pl(yi(e));
	return n && !n.C || zc(e), rl(n, t);
}
function Wc(e, t) {
	let n = $c(Qc(yi(e)), void 0, t);
	return va(n, n.calendar);
}
function Gc(e, t) {
	let n = ml(yi(e));
	if (n) return Kc(n), va(la(Kr(n)), t(n.calendarId));
	let r = $c(Qc(e), el, t), { calendar: i } = r;
	return va(ao(i, r), i);
}
function Kc(e) {
	e.calendarId !== "iso8601" && F(jt(e.calendarId));
}
function qc(e, t) {
	let n = hl(yi(e));
	if (n) return Kc(n), va(Kr(n), t(n.calendarId));
	let r = $c(Qc(e), tl, t), { calendar: i } = r, { year: a, month: o, day: s } = Yr(i, r), [c, l] = Xr(i, a, o), { year: u, month: d } = ((e, t, n, r) => {
		let i = e ? e.u(t, n, r) : Nr(t, n);
		return i || F("Cannot guess year"), i;
	})(i, c, l, s);
	return va(ua(Qr(i, u, d, s)), i);
}
function Jc(e) {
	let t = ((e) => {
		let t = gl(e);
		return t ? (yl(t[13]), _l(t, 1)) : void 0;
	})(e = yi(e));
	if (!t) {
		let n = pl(e);
		n && n.re || zc(e), n.C && F(jt("Z")), Kc(n), t = n;
	}
	let n;
	return (n = ml(e)) && qr(n) && zc(e), (n = hl(e)) && qr(n) && zc(e), ya(pr(t));
}
function Yc(e) {
	let t = fl.exec(yi(e));
	return t || zc(e), ba(qo(((e) => {
		let t = 0, n = 0, r = 0, i = {
			years: a(e[2]),
			months: a(e[3]),
			weeks: a(e[4]),
			days: a(e[5]),
			hours: a(e[6], e[7], 5),
			minutes: a(e[8], e[9], 4),
			seconds: a(e[10], e[11], 3),
			...Ro(r, 2, li)
		};
		return t || F(xt(li)), $t(e[1]) < 0 && (i = Go(i)), i;
		function a(e, i, a) {
			let o = 0, s = 0;
			return a && ([o, r] = cn(r, An[a])), e !== void 0 && (n && F(jt(e)), s = ((e) => {
				let t = parseInt(e);
				return Number.isFinite(t) || F(jt(e)), t;
			})(e), t = 1, i && (r = Qt(i) * (An[a] / En), n = 1)), o + s;
		}
	})(t)));
}
function Xc(e) {
	let t = pl(e) || ml(e) || hl(e);
	if (t) return t.calendarId;
	let n = gl(e);
	return n ? yl(n[13]).calendarId : e;
}
function Zc(e) {
	let t = pl(e);
	return t && (t.timeZoneId || t.C && "UTC" || t.offset) || e;
}
function Qc(e) {
	let t = pl(e);
	return t && !t.C || zc(e), t;
}
function $c(e, t, n) {
	return t && e.calendarId === "iso8601" ? (Kr(e), e.re && pr(e), il(t(e), n)) : e.re ? rl(e, n) : il(e, n);
}
function el(e) {
	let t = 12 * e.year + e.month === ca ? 20 : 1;
	return {
		...e,
		day: t
	};
}
function tl(e) {
	return {
		...e,
		year: 1972
	};
}
function nl(e, t, n) {
	let r = Cc(yc(e.timeZoneId)), i;
	if (Gr(e), e.re) {
		let t = e.offset ? Ss(e.offset) : void 0, [, o, s] = ia(n);
		i = Za(r, e, t, o, s, !(r.X || e.offset === void 0 || (a = e.offset, a.replace(/\D/g, "").length > 4)), e.C);
	} else ia(n), i = $a(r, e);
	var a;
	return pa(i), ga(i, r, t(e.calendarId));
}
function rl(e, t) {
	return Gr(e), da(e), {
		...ra(e, e),
		calendar: t(e.calendarId)
	};
}
function il(e, t) {
	return Kr(e), ua(e), {
		calendar: t(e.calendarId),
		year: e.year,
		month: e.month,
		day: e.day
	};
}
function al(e) {
	return `(\\d{2})(?:(:?)(\\d{2})(?:\\${e}(\\d{2})(?:[.,](\\d{1,9}))?)?)?`;
}
var ol = "(?:(?:([+-])(\\d{6}))|(\\d{4}))(-?)(\\d{2})\\4(\\d{2})(?:[T ]" + al(8) + "(Z|([+-])" + al(15) + ")?)?", sl = /*@__PURE__*/ Zt("(?:(?:([+-])(\\d{6}))|(\\d{4}))-?(\\d{2})((?:\\[(!?)([^\\]]*)\\]){0,9})"), cl = /*@__PURE__*/ Zt("(?:--)?(\\d{2})-?(\\d{2})((?:\\[(!?)([^\\]]*)\\]){0,9})"), ll = /*@__PURE__*/ Zt(ol + "((?:\\[(!?)([^\\]]*)\\]){0,9})"), ul = /*@__PURE__*/ Zt("T?" + al(2) + `(([+-])${al(9)})?((?:\\[(!?)([^\\]]*)\\]){0,9})`), dl = /*@__PURE__*/ RegExp("\\[(!?)([^\\]]*)\\]", "g"), fl = /*@__PURE__*/ Zt("([+-])?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?!$)(?:(\\d+)(?:[.,](\\d{1,9}))?H)?(?:(\\d+)(?:[.,](\\d{1,9}))?M)?(?:(\\d+)(?:[.,](\\d{1,9}))?S)?)?");
function pl(e) {
	let t = ll.exec(e);
	return t ? ((e) => {
		let t = e[12], n = (t || "").toUpperCase() === "Z";
		return {
			year: vl(e),
			month: parseInt(e[5]),
			day: parseInt(e[6]),
			..._l(e, 7),
			...yl(e[19]),
			re: !!e[7],
			C: n,
			offset: n ? void 0 : t
		};
	})(t) : void 0;
}
function ml(e) {
	let t = sl.exec(e);
	if (t) return ((e) => ({
		year: vl(e),
		month: parseInt(e[4]),
		day: 1,
		...yl(e[5])
	}))(t);
}
function hl(e) {
	let t = cl.exec(e);
	return t ? ((e) => ({
		year: 1972,
		month: parseInt(e[1]),
		day: parseInt(e[2]),
		...yl(e[3])
	}))(t) : void 0;
}
function gl(e) {
	let t = ul.exec(e);
	if (t) return t[6] && Ss(t[6]), t;
}
function _l(e, t) {
	let n = en(e[t + 3]);
	return {
		...br(Qt(e[t + 4] || ""))[0],
		hour: en(e[t]),
		minute: en(e[t + 2]),
		second: n === 60 ? 59 : n
	};
}
function vl(e) {
	let t = $t(e[1]), n = parseInt(e[2] || e[3]);
	return t < 0 && !n && F(jt(-0)), t * n;
}
function yl(e) {
	let t, n, r = [];
	return e.replace(dl, (e, i, a) => {
		let o = !!i, [s, c] = a.split("=").reverse();
		return c ? c === "u-ca" ? (r.push(s.toLowerCase()), t ||= o) : (o || /[A-Z]/.test(c)) && F(jt(e)) : (n && F(jt(e)), n = s), "";
	}), r.length > 1 && t && F(jt(e)), {
		timeZoneId: n,
		calendarId: r[0] || "iso8601"
	};
}
function bl(e, t, n) {
	let r = Object.assign(Object.create(null), t);
	return xl(r, n, qn), ms(e) && (xl(r, n, Kn), e && e.ge && xl(r, n, Jn, Gn)), r;
}
function xl(e, t, n, r) {
	let i = 0, a = [];
	for (let e of n) t[e] === void 0 ? a.push(e) : i = 1;
	if (Object.assign(e, t), i) for (let t of r || a) delete e[t];
}
function Sl(e, t, n) {
	let { calendar: r, timeZone: i } = e, a = hs(r, or, sr), o = Ya(e), { year: s, month: c, day: l } = Yr(r, o), u = {
		year: s,
		monthCode: kl(r, s, c),
		day: l,
		hour: o.hour,
		minute: o.minute,
		second: o.second,
		millisecond: o.millisecond,
		microsecond: o.microsecond,
		nanosecond: o.nanosecond,
		offset: o.offsetNanoseconds
	}, d = ks(t, a, Os), f = bl(r, u, d), p = {
		...u,
		...d
	}, [m, h, g, _] = Ms(r, f, () => ia(n, 2));
	return ga(Za(i, ra(m, hr(p, h)), p.offset, g, _), i, r);
}
function Cl(e, t, n) {
	let { calendar: r } = e, i = hs(r, ir, ar), { year: a, month: o, day: s } = Yr(r, e), c = {
		year: a,
		monthCode: kl(r, a, o),
		day: s,
		hour: e.hour,
		minute: e.minute,
		second: e.second,
		millisecond: e.millisecond,
		microsecond: e.microsecond,
		nanosecond: e.nanosecond
	}, l = ks(t, i, Ds), u = bl(r, c, l), d = {
		...c,
		...l
	}, [f, p] = Ms(r, u, () => [I(n)]);
	return As(f, hr(d, p), r);
}
function wl(e, t, n) {
	let { calendar: r } = e, i = hs(r, nr, rr), { year: a, month: o, day: s } = Yr(r, e);
	return js(r, bl(r, {
		year: a,
		monthCode: kl(r, a, o),
		day: s
	}, ks(t, i, ws)), n);
}
function Tl(e, t, n) {
	let { calendar: r } = e, i = hs(r, Zn, Qn), { year: a, month: o } = Yr(r, e);
	return Is(r, bl(r, {
		year: a,
		monthCode: kl(r, a, o)
	}, ks(t, i, ws)), n);
}
function El(e, t, n) {
	let { calendar: r } = e, i = hs(r, nr, rr), { year: a, month: o, day: s } = Yr(r, e);
	return Ls(r, bl(r, {
		monthCode: kl(r, a, o),
		day: s
	}, ks(t, i, ws)), n);
}
function Dl(e, t, n) {
	return ((e, t, n) => bs({
		...Wt(Yn, e),
		...ks(t, Yn, Ts)
	}, I(n)))(e, t, n);
}
function Ol(e, t) {
	return ba((n = e, r = t, qo({
		...n,
		...ks(r, di, Es)
	})));
	var n, r;
}
function kl(e, t, n) {
	let [r, i] = Xr(e, t, n);
	return bn(r, i);
}
function Al(e, t, n) {
	return ga(e.epochNanoseconds, t, n);
}
function jl(e) {
	return ha(e.epochNanoseconds);
}
function Ml(e) {
	return _a(Ya(e), e.calendar);
}
function Nl(e) {
	return va(Ya(e), e.calendar);
}
function Pl(e) {
	return ya(Ya(e));
}
function Fl(e, t, n) {
	return ga(pa(Qa(t, e, ((e) => Gi(dt(e)))(n))), t, e.calendar);
}
function Il(e, t, n, r) {
	let i = e(r.timeZone), a = r.plainTime, o = a === void 0 ? void 0 : t(a), s = Cc(i), c;
	return c = o ? Qa(s, ra(n, o)) : $a(s, ra(n, fr)), ga(c, s, n.calendar);
}
function Ll(e, t, n) {
	return Vl(e, Wt(hs(e, $n, er), t), ks(vt(n), Vn, ws, []));
}
function Rl(e, t, n) {
	let r = hs(e, Bn, Xn);
	return Vl(e, Wt(tr, t), ks(vt(n), r, ws, []));
}
function zl(e, t) {
	return Ls(e, ks(t, tr, ws));
}
function Bl(e, t, n) {
	return Is(e, ks(t, hs(e, $n, er), ws), n);
}
function Vl(e, t, n) {
	let r = hs(e, ur, dr), i = bl(e, t, n);
	return i = ks(i, r, ws, []), js(e, i);
}
function Hl(e) {
	return ha(pa(BigInt(Ti(e)) * Mn));
}
function Ul(e) {
	return ha(pa(wi(e)));
}
function Wl(e) {
	return e.timeZone = "UTC", ["full", "long"].includes(e.timeStyle) && (e.timeStyle = "medium"), e;
}
function Gl(e, t) {
	return e.timeZone !== void 0 && Pt("Cannot specify TimeZone"), e.timeZone = t, e;
}
function Kl(e, t, n) {
	let r = e.resolvedOptions().calendar;
	!n && t.calendar === void 0 || _n(t.calendar) === r || F("Mismatching Calendars");
}
function ql(e, t, n, r, i) {
	let a = new Set(e), o = new Set(t), s = new Set(n);
	return (e, t) => {
		let n, c, l = {}, u = {}, d = {}, f = 0, p = 0;
		for (let t of Object.keys(e)) {
			let r = e[t];
			r === void 0 || s.has(t) || (a.has(t) ? t === "dateStyle" ? n = r : t === "timeStyle" ? c = r : l[t] = r : t === "era" ? u[t] = r : o.has(t) ? t === "dateStyle" || t === "timeStyle" ? p = 1 : f = 1 : d[t] = r);
		}
		let m = n !== void 0, h = c !== void 0, g = m || h, _ = Object.keys(l).length > 0, v = f || p, y = _ || m || h, b = Object.keys(u).length > 0;
		(!t && v || t && v && !y || g && (_ || b || f)) && Pt("Invalid formatting options");
		let x = {};
		return g || y || Object.assign(x, r), Object.assign(x, l, u, d), m && (i ? Object.assign(x, i[n]) : x.dateStyle = n), h && (x.timeStyle = c), x;
	};
}
var Jl = {
	year: "numeric",
	month: "numeric",
	day: "numeric"
}, Yl = {
	hour: "numeric",
	minute: "numeric",
	second: "numeric"
}, Xl = /*@__PURE__*/ Object.assign({}, Jl, Yl), Zl = [
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
], $l = /*@__PURE__*/ Zl.concat(Ql), eu = /*@__PURE__*/ ["weekday", "day"].concat(Ql), tu = /*@__PURE__*/ ["weekday", "year"].concat(Ql), nu = /*@__PURE__*/ ql($l, [], [], Xl), ru = /*@__PURE__*/ ql($l, [], [], {
	...Xl,
	timeZoneName: "short"
}), iu = /*@__PURE__*/ ql($l, [], ["timeZoneName"], Xl), au = /*@__PURE__*/ ql(Zl, Ql, ["timeZoneName"], Jl), ou = /*@__PURE__*/ ql(Ql, Zl, ["timeZoneName", "era"], Yl), su = /*@__PURE__*/ ql([
	"year",
	"month",
	"dateStyle"
], eu, ["timeZoneName"], {
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
}), cu = /*@__PURE__*/ ql([
	"month",
	"day",
	"dateStyle"
], tu, ["timeZoneName", "era"], {
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
function lu(e, t) {
	let { timeZone: n } = e, r = Ya(e), { offsetNanoseconds: i } = r, a = t || fr, o;
	return o = t ? Za(n, ra(r, a), i, 2) : $a(n, ra(r, a)), ga(o, n, e.calendar);
}
function uu(e) {
	let t = du(), n = e.B(t);
	return Ar(t + BigInt(n));
}
function du() {
	return BigInt(Date.now()) * Mn;
}
function fu() {
	return new Rs().resolvedOptions().timeZone;
}
//#endregion
//#region ../../node_modules/.pnpm/temporal-polyfill@1.0.4/node_modules/temporal-polyfill/chunks/apiHelpers.js
var pu = "PlainYearMonth", mu = "PlainMonthDay", hu = "PlainDate", gu = "PlainDateTime", _u = "PlainTime", vu = "ZonedDateTime", yu = "Instant", bu = "Duration";
function xu(e, t, n, ...r) {
	return Object.defineProperties(t, Rt(e)), Object.defineProperties(t.prototype, Bt("Temporal." + e)), Object.defineProperties(t.prototype, Vt((e) => ({
		get() {
			return e(n(this));
		},
		configurable: 1
	}), Object.assign({}, ...r))), t;
}
var Su = Jt.name === "noop" ? (e) => {
	Object.defineProperty(e, "_str_", { value: e.toJSON() });
} : Jt;
function Cu() {
	Pt(wt);
}
function wu() {
	Pt(Ct);
}
var Tu = {
	era(e) {
		return Zr(e.calendar, e).era;
	},
	eraYear(e) {
		return Zr(e.calendar, e).eraYear;
	},
	year(e) {
		return Yr(e.calendar, e).year;
	},
	month(e) {
		return Yr(e.calendar, e).month;
	},
	monthCode(e) {
		return ti(e.calendar, e);
	}
}, Eu = {
	era(e) {
		return Zr(e.calendar, e).era;
	},
	eraYear(e) {
		return Zr(e.calendar, e).eraYear;
	},
	year(e) {
		return Yr(e.calendar, e).year;
	},
	month(e) {
		return Yr(e.calendar, e).month;
	},
	monthCode(e) {
		return ti(e.calendar, e);
	},
	day(e) {
		return Yr(e.calendar, e).day;
	}
}, Du = {
	monthCode(e) {
		return ti(e.calendar, e);
	},
	day(e) {
		return Yr(e.calendar, e).day;
	}
}, Ou = {
	daysInMonth(e) {
		return ii(e.calendar, e);
	},
	daysInYear(e) {
		return ai(e.calendar, e);
	},
	monthsInYear(e) {
		return ri(e.calendar, e);
	},
	inLeapYear(e) {
		return ni(e.calendar, e);
	}
}, ku = {
	dayOfWeek(e) {
		return Br(e);
	},
	dayOfYear(e) {
		return oi(e.calendar, e);
	},
	weekOfYear(e) {
		return si(e.calendar, e);
	},
	yearOfWeek(e) {
		return ci(e.calendar, e);
	},
	daysInWeek() {
		return 7;
	},
	daysInMonth(e) {
		return ii(e.calendar, e);
	},
	daysInYear(e) {
		return ai(e.calendar, e);
	},
	monthsInYear(e) {
		return ri(e.calendar, e);
	},
	inLeapYear(e) {
		return ni(e.calendar, e);
	}
};
function Au(e) {
	return Ut(Object.keys(e));
}
Au(Ou), Au(ku);
//#endregion
//#region ../../node_modules/.pnpm/temporal-polyfill@1.0.4/node_modules/temporal-polyfill/chunks/classApi-basic.js
function ju(e) {
	let t = yi(e).toLowerCase();
	return t === "iso8601" ? void 0 : t === "gregory" ? 0 : void F(Ot(e, "temporal-polyfill/full"));
}
function Mu(e = mn) {
	return ju(e);
}
var Nu = /*@__PURE__*/ new WeakMap(), Pu = /*@__PURE__*/ xu(vu, class {
	constructor(e, t, n = void 0) {
		let r = pa(wi(e)), i = Cc(vc(t)), a = Mu(n);
		Bu(this, ga(r, i, a));
	}
	static from(e, t = void 0) {
		return Fu(zu(e, t));
	}
	static compare(e, t) {
		return ns(zu(e), zu(t));
	}
	get calendarId() {
		return _n(Iu(this).calendar);
	}
	get timeZoneId() {
		return Iu(this).timeZone.id;
	}
	get epochMilliseconds() {
		return xa(Iu(this));
	}
	get epochNanoseconds() {
		return Sa(Iu(this));
	}
	get offset() {
		return lc(Ya(Iu(this)).offsetNanoseconds);
	}
	get offsetNanoseconds() {
		return Ya(Iu(this)).offsetNanoseconds;
	}
	get hoursInDay() {
		return Aa(Iu(this));
	}
	with(e, t = void 0) {
		return Fu(Sl(Iu(this), dd(e), t));
	}
	withCalendar(e) {
		return Fu({
			...Iu(this),
			calendar: Id(e)
		});
	}
	withTimeZone(e) {
		return Fu({
			...Iu(this),
			timeZone: Cc(Vu(e))
		});
	}
	withPlainTime(e = void 0) {
		return Fu(lu(Iu(this), vd(e)));
	}
	add(e, t = void 0) {
		return Fu(no(Iu(this), Hd(e), t));
	}
	subtract(e, t = void 0) {
		return Fu(no(Iu(this), Go(Hd(e)), t));
	}
	until(e, t = void 0) {
		let n = Iu(this), r = zu(e);
		return zd(ba(go(0, fo(n.calendar, r.calendar), n, r, t)));
	}
	since(e, t = void 0) {
		let n = Iu(this), r = zu(e);
		return zd(ba(go(1, fo(n.calendar, r.calendar), n, r, t)));
	}
	round(e) {
		let t = Iu(this), [n, r, i] = na(e);
		return Fu(ka(t, n, r, i));
	}
	startOfDay() {
		return Fu(ja(Iu(this)));
	}
	equals(e) {
		return cs(Iu(this), zu(e));
	}
	toInstant() {
		return Wu(jl(Iu(this)));
	}
	toPlainDateTime() {
		return Sd(Ml(Iu(this)));
	}
	toPlainDate() {
		return kd(Nl(Iu(this)));
	}
	toPlainTime() {
		return md(Pl(Iu(this)));
	}
	toLocaleString(e = void 0, t = {}) {
		let n = Iu(this), r = new Rs(e, Gl(ru(t), mo(n)));
		return Kl(r, n), r.format(xa(n));
	}
	toString(e = void 0) {
		return qs(Iu(this), e);
	}
	toJSON() {
		return qs(Iu(this));
	}
	getTimeZoneTransition(e) {
		let t = Iu(this), n = Ja(t, e);
		return n ? Fu({
			...t,
			epochNanoseconds: n
		}) : null;
	}
	valueOf() {
		return wu();
	}
}, Lu, Eu, ku, zn);
function Fu(e) {
	return Bu(Object.create(Pu.prototype), e);
}
function Iu(e) {
	return Ru(e) || Cu();
}
function Lu(e) {
	let t = Iu(e);
	return {
		...Ya(t),
		calendar: t.calendar
	};
}
function Ru(e) {
	return Nu.get(e);
}
function zu(e, t) {
	if (Nt(e)) {
		let n = Ru(e);
		return n ? (ia(t), n) : Mc(Vu, Pd(e), e, t);
	}
	return Hc(e, ju, t);
}
function Bu(e, t) {
	return Nu.set(e, t), Su(e), e;
}
function Vu(e) {
	if (Nt(e)) {
		let t = Ru(e);
		return t || Pt(kt(e)), t.timeZone.id;
	}
	return ((e) => yc(Zc(yi(e))))(e);
}
var Hu = /*@__PURE__*/ new WeakMap(), Uu = /*@__PURE__*/ xu(yu, class {
	constructor(e) {
		let t = pa(wi(e));
		Yu(this, ha(t));
	}
	static from(e) {
		return Wu(qu(e));
	}
	static fromEpochMilliseconds(e) {
		return Wu(Hl(e));
	}
	static fromEpochNanoseconds(e) {
		return Wu(Ul(e));
	}
	static compare(e, t) {
		return ns(qu(e), qu(t));
	}
	get epochMilliseconds() {
		return xa(Gu(this));
	}
	get epochNanoseconds() {
		return Sa(Gu(this));
	}
	add(e) {
		return Wu(ha(to(Gu(this).epochNanoseconds, Hd(e))));
	}
	subtract(e) {
		return Wu(ha(to(Gu(this).epochNanoseconds, Go(Hd(e)))));
	}
	until(e, t = void 0) {
		return zd(ho(0, Gu(this), qu(e), t));
	}
	since(e, t = void 0) {
		return zd(ho(1, Gu(this), qu(e), t));
	}
	round(e) {
		let t = Gu(this), [n, r, i] = na(e, 5, 1);
		return Wu(ha(Va(t.epochNanoseconds, La(n, r), i)));
	}
	equals(e) {
		return ss(Gu(this), qu(e));
	}
	toZonedDateTimeISO(e) {
		return Fu(Al(Gu(this), Cc(Vu(e))));
	}
	toLocaleString(e = void 0, t = {}) {
		let n = Gu(this);
		return new Rs(e, nu(t)).format(xa(n));
	}
	toString(e = void 0) {
		return Ks(Vu, Gu(this), e);
	}
	toJSON() {
		return Ks(Vu, Gu(this));
	}
	valueOf() {
		return wu();
	}
});
function Wu(e) {
	return Yu(Object.create(Uu.prototype), e);
}
function Gu(e) {
	return Ku(e) || Cu();
}
function Ku(e) {
	return Hu.get(e);
}
function qu(e) {
	if (Nt(e)) {
		let t = Ku(e);
		if (t) return t;
		let n = Ru(e);
		if (n) return ha(n.epochNanoseconds);
	}
	return Bc(e);
}
var { toTemporalInstant: Ju } = { toTemporalInstant() {
	let e = Date.prototype.valueOf.call(this);
	return Wu(ha(BigInt(xi(e)) * Mn));
} };
function Yu(e, t) {
	return Hu.set(e, t), Su(e), e;
}
var Xu = /*@__PURE__*/ new WeakMap(), Zu = /*@__PURE__*/ xu(mu, class {
	constructor(e, t, n = void 0, r) {
		let i = pt(e), a = pt(t), o = Mu(n), s = ua(Kr({
			year: pt(r ?? 1972),
			month: i,
			day: a
		}));
		nd(this, va(s, o));
	}
	static from(e, t = void 0) {
		return Qu(td(e, t));
	}
	get calendarId() {
		return _n($u(this).calendar);
	}
	with(e, t = void 0) {
		return Qu(El($u(this), dd(e), t));
	}
	equals(e) {
		return fs($u(this), td(e));
	}
	toPlainDate(e) {
		return kd(Rl($u(this).calendar, this, e));
	}
	toLocaleString(e = void 0, t = {}) {
		let n = $u(this), r = new Rs(e, Wl(cu(t)));
		return Kl(r, n, 1), r.format(Dr(n));
	}
	toString(e = void 0) {
		return Zs($u(this), e);
	}
	toJSON() {
		return Zs($u(this));
	}
	valueOf() {
		return wu();
	}
}, $u, Du);
function Qu(e) {
	return nd(Object.create(Zu.prototype), e);
}
function $u(e) {
	return ed(e) || Cu();
}
function ed(e) {
	return Xu.get(e);
}
function td(e, t) {
	if (Nt(e)) {
		let n = ed(e);
		if (n) return I(t), n;
		let r = Fd(e);
		return Ic(r === void 0 ? void 0 : r, r === void 0, e, t);
	}
	let n = qc(e, ju);
	return I(t), n;
}
function nd(e, t) {
	return Xu.set(e, t), Su(e), e;
}
var rd = /*@__PURE__*/ new WeakMap(), id = /*@__PURE__*/ xu(pu, class {
	constructor(e, t, n = void 0, r) {
		let i = pt(e), a = pt(t), o = Mu(n), s = la(Kr({
			year: i,
			month: a,
			day: pt(r ?? 1)
		}));
		ld(this, va(s, o));
	}
	static from(e, t = void 0) {
		return ad(cd(e, t));
	}
	static compare(e, t) {
		return as(cd(e), cd(t));
	}
	get calendarId() {
		return _n(od(this).calendar);
	}
	with(e, t = void 0) {
		return ad(Tl(od(this), dd(e), t));
	}
	add(e, t = void 0) {
		let n = od(this);
		return ad(va(eo(0, n.calendar, n, Hd(e), t), n.calendar));
	}
	subtract(e, t = void 0) {
		let n = od(this);
		return ad(va(eo(1, n.calendar, n, Hd(e), t), n.calendar));
	}
	until(e, t = void 0) {
		let n = od(this), r = cd(e);
		return zd(yo(0, fo(n.calendar, r.calendar), n, r, t));
	}
	since(e, t = void 0) {
		let n = od(this), r = cd(e);
		return zd(yo(1, fo(n.calendar, r.calendar), n, r, t));
	}
	equals(e) {
		return ds(od(this), cd(e));
	}
	toPlainDate(e) {
		return kd(Ll(od(this).calendar, this, e));
	}
	toLocaleString(e = void 0, t = {}) {
		let n = od(this), r = new Rs(e, Wl(su(t)));
		return Kl(r, n, 1), r.format(Dr(n));
	}
	toString(e = void 0) {
		return Xs(od(this), e);
	}
	toJSON() {
		return Xs(od(this));
	}
	valueOf() {
		return wu();
	}
}, od, Tu, Ou);
function ad(e) {
	return ld(Object.create(id.prototype), e);
}
function od(e) {
	return sd(e) || Cu();
}
function sd(e) {
	return rd.get(e);
}
function cd(e, t) {
	if (Nt(e)) {
		let n = sd(e);
		return n ? (I(t), n) : Fc(Pd(e), e, t);
	}
	let n = Gc(e, ju);
	return I(t), n;
}
function ld(e, t) {
	return rd.set(e, t), Su(e), e;
}
function ud(e) {
	if (!Nt(e)) return;
	let t = Ku(e);
	return t ? [yu, t] : (t = Ru(e), t ? [vu, t] : (t = wd(e), t ? [gu, t] : (t = jd(e), t ? [hu, t] : (t = gd(e), t ? [_u, t] : (t = sd(e), t ? [pu, t] : (t = ed(e), t ? [mu, t] : (t = Vd(e), t ? [bu, t] : void 0)))))));
}
function dd(e) {
	return (ud(e) || e.calendar !== void 0 || e.timeZone !== void 0) && Pt("Invalid bag"), e;
}
var fd = /*@__PURE__*/ new WeakMap(), pd = /*@__PURE__*/ xu(_u, class {
	constructor(e = 0, t = 0, n = 0, r = 0, i = 0, a = 0) {
		let o = pr(Vt(pt, {
			hour: e,
			minute: t,
			second: n,
			millisecond: r,
			microsecond: i,
			nanosecond: a
		}));
		yd(this, ya(o));
	}
	static from(e, t = void 0) {
		return md(_d(e, t));
	}
	static compare(e, t) {
		return os(_d(e), _d(t));
	}
	with(e, t = void 0) {
		return md(Dl(hd(this), dd(e), t));
	}
	add(e) {
		return md(oo(hd(this), Hd(e))[0]);
	}
	subtract(e) {
		return md(oo(hd(this), Go(Hd(e)))[0]);
	}
	until(e, t = void 0) {
		return zd(xo(0, hd(this), _d(e), t));
	}
	since(e, t = void 0) {
		return zd(xo(1, hd(this), _d(e), t));
	}
	round(e) {
		let t = hd(this), [n, r, i] = na(e, 5);
		return md(Pa(t, Ia(n, r), i)[0]);
	}
	equals(e) {
		return ps(hd(this), _d(e));
	}
	toLocaleString(e = void 0, t = {}) {
		let n = hd(this);
		return new Rs(e, Wl(ou(t))).format(_r(n));
	}
	toString(e = void 0) {
		return $s(hd(this), e);
	}
	toJSON() {
		return $s(hd(this));
	}
	valueOf() {
		return wu();
	}
}, hd, zn);
function md(e) {
	return yd(Object.create(pd.prototype), e);
}
function hd(e) {
	return gd(e) || Cu();
}
function gd(e) {
	return fd.get(e);
}
function _d(e, t) {
	if (Nt(e)) {
		let n = gd(e);
		if (n) return I(t), n;
		let r = wd(e);
		if (r) return I(t), ya(r);
		let i = Ru(e);
		return i ? (I(t), Pl(i)) : Lc(e, t);
	}
	let n = Jc(e);
	return I(t), n;
}
function vd(e) {
	return e === void 0 ? void 0 : _d(e);
}
function yd(e, t) {
	return fd.set(e, t), Su(e), e;
}
var bd = /*@__PURE__*/ new WeakMap(), xd = /*@__PURE__*/ xu(gu, class {
	constructor(e, t, n, r = 0, i = 0, a = 0, o = 0, s = 0, c = 0, l = void 0) {
		let u = da(Gr(Vt(pt, {
			year: e,
			month: t,
			day: n,
			hour: r,
			minute: i,
			second: a,
			millisecond: o,
			microsecond: s,
			nanosecond: c
		}))), d = Mu(l);
		Ed(this, _a(u, d));
	}
	static from(e, t = void 0) {
		return Sd(Td(e, t));
	}
	static compare(e, t) {
		return is(Td(e), Td(t));
	}
	get calendarId() {
		return _n(Cd(this).calendar);
	}
	with(e, t = void 0) {
		return Sd(Cl(Cd(this), dd(e), t));
	}
	withCalendar(e) {
		return Sd(_a(Cd(this), Id(e)));
	}
	withPlainTime(e = void 0) {
		let t = Cd(this);
		return Sd(As(t, vd(e), t.calendar));
	}
	add(e, t = void 0) {
		let n = Cd(this);
		return Sd(_a(ro(n.calendar, n, Hd(e), t), n.calendar));
	}
	subtract(e, t = void 0) {
		let n = Cd(this);
		return Sd(_a(ro(n.calendar, n, Go(Hd(e)), t), n.calendar));
	}
	until(e, t = void 0) {
		let n = Cd(this), r = Td(e);
		return zd(_o(0, fo(n.calendar, r.calendar), n, r, t));
	}
	since(e, t = void 0) {
		let n = Cd(this), r = Td(e);
		return zd(_o(1, fo(n.calendar, r.calendar), n, r, t));
	}
	round(e) {
		let t = Cd(this), [n, r, i] = na(e);
		return Sd(_a(Na(t, Ia(n, r), i), t.calendar));
	}
	equals(e) {
		return ls(Cd(this), Td(e));
	}
	toZonedDateTime(e, t = void 0) {
		return Fu(Fl(Cd(this), Cc(Vu(e)), t));
	}
	toPlainDate() {
		let e = Cd(this);
		return kd(va(e, e.calendar));
	}
	toPlainTime() {
		return md(ya(Cd(this)));
	}
	toLocaleString(e = void 0, t = {}) {
		let n = Cd(this), r = new Rs(e, Wl(iu(t)));
		return Kl(r, n), r.format(Tr(n));
	}
	toString(e = void 0) {
		return Js(Cd(this), e);
	}
	toJSON() {
		return Js(Cd(this));
	}
	valueOf() {
		return wu();
	}
}, Cd, Eu, ku, zn);
function Sd(e) {
	return Ed(Object.create(xd.prototype), e);
}
function Cd(e) {
	return wd(e) || Cu();
}
function wd(e) {
	return bd.get(e);
}
function Td(e, t) {
	if (Nt(e)) {
		let n = wd(e);
		if (n) return I(t), n;
		let r = jd(e);
		if (r) return I(t), _a(ra(r, fr), r.calendar);
		let i = Ru(e);
		return i ? (I(t), Ml(i)) : Nc(Pd(e), e, t);
	}
	let n = Uc(e, ju);
	return I(t), n;
}
function Ed(e, t) {
	return bd.set(e, t), Su(e), e;
}
var Dd = /*@__PURE__*/ new WeakMap(), Od = /*@__PURE__*/ xu(hu, class {
	constructor(e, t, n, r = void 0) {
		let i = ua(Kr(Vt(pt, {
			year: e,
			month: t,
			day: n
		}))), a = Mu(r);
		Nd(this, va(i, a));
	}
	static from(e, t = void 0) {
		return kd(Md(e, t));
	}
	static compare(e, t) {
		return as(Md(e), Md(t));
	}
	get calendarId() {
		return _n(Ad(this).calendar);
	}
	with(e, t = void 0) {
		return kd(wl(Ad(this), dd(e), t));
	}
	withCalendar(e) {
		return kd(va(Ad(this), Id(e)));
	}
	add(e, t = void 0) {
		let n = Ad(this);
		return kd(va(io(n.calendar, n, Hd(e), t), n.calendar));
	}
	subtract(e, t = void 0) {
		let n = Ad(this);
		return kd(va(io(n.calendar, n, Go(Hd(e)), t), n.calendar));
	}
	until(e, t = void 0) {
		let n = Ad(this), r = Md(e);
		return zd(vo(0, fo(n.calendar, r.calendar), n, r, t));
	}
	since(e, t = void 0) {
		let n = Ad(this), r = Md(e);
		return zd(vo(1, fo(n.calendar, r.calendar), n, r, t));
	}
	equals(e) {
		return us(Ad(this), Md(e));
	}
	toZonedDateTime(e) {
		let t = Nt(e) ? {
			timeZone: e.timeZone,
			plainTime: e.plainTime
		} : { timeZone: e };
		return Fu(Il(Vu, _d, Ad(this), t));
	}
	toPlainDateTime(e = void 0) {
		let t = Ad(this);
		return Sd(As(t, vd(e), t.calendar));
	}
	toPlainYearMonth() {
		return ad(Bl(Ad(this).calendar, this));
	}
	toPlainMonthDay() {
		return Qu(zl(Ad(this).calendar, this));
	}
	toLocaleString(e = void 0, t = {}) {
		let n = Ad(this), r = new Rs(e, Wl(au(t)));
		return Kl(r, n), r.format(Dr(n));
	}
	toString(e = void 0) {
		return Ys(Ad(this), e);
	}
	toJSON() {
		return Ys(Ad(this));
	}
	valueOf() {
		return wu();
	}
}, Ad, Eu, ku);
function kd(e) {
	return Nd(Object.create(Od.prototype), e);
}
function Ad(e) {
	return jd(e) || Cu();
}
function jd(e) {
	return Dd.get(e);
}
function Md(e, t) {
	if (Nt(e)) {
		let n = jd(e);
		if (n) return I(t), n;
		let r = wd(e);
		if (r) return I(t), va(r, r.calendar);
		let i = Ru(e);
		return i ? (I(t), Nl(i)) : Pc(Pd(e), e, t);
	}
	let n = Wc(e, ju);
	return I(t), n;
}
function Nd(e, t) {
	return Dd.set(e, t), Su(e), e;
}
function Pd(e) {
	let t = Fd(e);
	return t === void 0 ? void 0 : t;
}
function Fd(e) {
	let { calendar: t } = e;
	if (t !== void 0) return Id(t);
}
function Id(e) {
	if (Nt(e)) {
		let t = jd(e) || wd(e) || Ru(e) || ed(e) || sd(e);
		return t || Pt(Dt(e)), t.calendar;
	}
	return ((e) => ju(Xc(yi(e))))(e);
}
var Ld = /*@__PURE__*/ new WeakMap(), Rd = /*@__PURE__*/ xu(bu, class {
	constructor(e = 0, t = 0, n = 0, r = 0, i = 0, a = 0, o = 0, s = 0, c = 0, l = 0) {
		let u = qo(Vt(Ti, {
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
		Wd(this, ba(u));
	}
	static from(e) {
		return zd(Hd(e));
	}
	static compare(e, t, n = void 0) {
		return rs(Ud, Hd(e), Hd(t), n);
	}
	get sign() {
		return Bd(this).sign;
	}
	get blank() {
		return !Bd(this).sign;
	}
	with(e) {
		return zd(Ol(Bd(this), e));
	}
	negated() {
		return zd(Wo(Bd(this)));
	}
	abs() {
		return zd(Uo(Bd(this)));
	}
	add(e, t = void 0) {
		return zd(Bo(Ud, 0, Bd(this), Hd(e), t));
	}
	subtract(e, t = void 0) {
		return zd(Bo(Ud, 1, Bd(this), Hd(e), t));
	}
	round(e) {
		return zd(Ho(Ud, Bd(this), e));
	}
	total(e) {
		return Ca(Ud, Bd(this), e);
	}
	toLocaleString(e = void 0, t) {
		let n = Bd(this);
		return Intl.DurationFormat ? new Intl.DurationFormat(e, t).format(n) : ec(n, t);
	}
	toString(e = void 0) {
		return ec(Bd(this), e);
	}
	toJSON() {
		return ec(Bd(this));
	}
	valueOf() {
		return wu();
	}
}, Bd, ui);
function zd(e) {
	return Wd(Object.create(Rd.prototype), e);
}
function Bd(e) {
	return Vd(e) || Cu();
}
function Vd(e) {
	return Ld.get(e);
}
function Hd(e) {
	return Nt(e) ? Vd(e) || Rc(e) : Yc(e);
}
function Ud(e) {
	if (e !== void 0) {
		if (Nt(e)) {
			let t = Ru(e);
			if (t) return t;
			let n = jd(e);
			if (n) return n;
			let r = wd(e);
			return r ? va(r, r.calendar) : jc(Vu, Pd(e), e);
		}
		return Vc(e, ju);
	}
}
function Wd(e, t) {
	return Ld.set(e, t), Su(e), e;
}
var Gd = /*@__PURE__*/ Object.defineProperties({}, {
	...Bt("Temporal.Now"),
	...zt({
		timeZoneId() {
			return fu();
		},
		instant() {
			return Wu(ha(du()));
		},
		zonedDateTimeISO(e = fu()) {
			let t = Cc(Vu(e));
			return Fu(ga(du(), t));
		},
		plainDateTimeISO(e = fu()) {
			return Sd(_a(uu(Cc(Vu(e)))));
		},
		plainDateISO(e = fu()) {
			return kd(va(uu(Cc(Vu(e)))));
		},
		plainTimeISO(e = fu()) {
			return md(ya(uu(Cc(Vu(e)))));
		}
	})
}), Kd = /*@__PURE__*/ Object.defineProperties({}, {
	...Bt("Temporal"),
	...zt({
		PlainYearMonth: id,
		PlainMonthDay: Zu,
		PlainDate: Od,
		PlainTime: pd,
		PlainDateTime: xd,
		ZonedDateTime: Pu,
		Instant: Uu,
		Duration: Rd,
		Now: Gd
	})
}), qd = $e || Kd;
$e && Date.prototype.toTemporalInstant;
//#endregion
//#region src/core/utils/DateUtils.ts
var L = /* @__PURE__ */ Ze((/* @__PURE__ */ P(((e, t) => {
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
function Jd(e, t) {
	let n = e < 0;
	e = Math.abs(e);
	let r = t?.hoursMinLength ?? 2, i = Math.floor(e / 3600), a = i.toFixed(0).padStart(r, "0"), o = i > 0 ? 2 : t?.minutesMinLength ?? 2, s = Math.floor(e % 3600 / 60).toFixed(0).padStart(o, "0"), c = Math.floor(e % 3600 % 60).toFixed(0).padStart(2, "0"), l = "";
	return i > 0 && (l += `${a}:`), l += `${s}:${c}`, n && (l = "-" + l), l;
}
function Yd(e) {
	return `${`${e.getFullYear()}`.padStart(4, "0")}-${`${e.getMonth() + 1}`.padStart(2, "0")}-${`${e.getDate()}`.padStart(2, "0")}`;
}
//#endregion
//#region ../../node_modules/.pnpm/react@19.2.8/node_modules/react/cjs/react-jsx-runtime.production.js
var Xd = /* @__PURE__ */ P(((e) => {
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
})), Zd = /* @__PURE__ */ P(((e, t) => {
	t.exports = { ...a };
})), Qd = /* @__PURE__ */ P(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === E ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case _: return "Fragment";
				case y: return "Profiler";
				case v: return "StrictMode";
				case C: return "Suspense";
				case w: return "SuspenseList";
				case te: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case g: return "Portal";
				case x: return e.displayName || "Context";
				case b: return (e._context.displayName || "Context") + ".Consumer";
				case S:
					var n = e.render;
					return e = e.displayName, e ||= (e = n.displayName || n.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case T: return n = e.displayName || null, n === null ? t(e.type) || "Memo" : n;
				case ee:
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
			if (typeof e == "object" && e && e.$$typeof === ee) return "<...>";
			try {
				var n = t(e);
				return n ? "<" + n + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function a() {
			var e = ne.A;
			return e === null ? null : e.getOwner();
		}
		function o() {
			return Error("react-stack-top-frame");
		}
		function s(e) {
			if (D.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function c(e, t) {
			function n() {
				re || (re = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function l() {
			var e = t(this.type);
			return ie[e] || (ie[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
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
					if (O(p)) {
						for (o = 0; o < p.length; o++) f(p[o]);
						Object.freeze && Object.freeze(p);
					} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
				} else f(p);
			}
			if (D.call(n, "key")) {
				p = t(e);
				var m = Object.keys(n).filter(function(e) {
					return e !== "key";
				});
				o = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", oe[p + o] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", o, p, m, p), oe[p + o] = !0);
			}
			if (p = null, i !== void 0 && (r(i), p = "" + i), s(n) && (r(n.key), p = "" + n.key), "key" in n) for (var h in i = {}, n) h !== "key" && (i[h] = n[h]);
			else i = n;
			return p && c(i, typeof e == "function" ? e.displayName || e.name || "Unknown" : e), u(e, p, i, a(), l, d);
		}
		function f(e) {
			p(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === ee && (e._payload.status === "fulfilled" ? p(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function p(e) {
			return typeof e == "object" && !!e && e.$$typeof === h;
		}
		var m = Zd(), h = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), x = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), te = Symbol.for("react.activity"), E = Symbol.for("react.client.reference"), ne = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Object.prototype.hasOwnProperty, O = Array.isArray, k = console.createTask ? console.createTask : function() {
			return null;
		};
		m = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var re, ie = {}, A = m.react_stack_bottom_frame.bind(m, o)(), ae = k(i(o)), oe = {};
		e.Fragment = _, e.jsx = function(e, t, n) {
			var r = 1e4 > ne.recentlyCreatedOwnerStacks++;
			return d(e, t, n, !1, r ? Error("react-stack-top-frame") : A, r ? k(i(e)) : ae);
		}, e.jsxs = function(e, t, n) {
			var r = 1e4 > ne.recentlyCreatedOwnerStacks++;
			return d(e, t, n, !0, r ? Error("react-stack-top-frame") : A, r ? k(i(e)) : ae);
		};
	})();
})), R = (/* @__PURE__ */ P(((e, t) => {
	t.exports = process.env.NODE_ENV === "production" ? Xd() : Qd();
})))();
function $d({ seconds: e, className: t, minutesMinLength: n, hoursMinLength: r, ...i }) {
	let a = S(() => Math.floor(e), [e]), o = S(() => ef(a), [a]);
	return /* @__PURE__ */ (0, R.jsx)("time", {
		dateTime: o,
		className: (0, L.default)("mx_Clock", t),
		...i,
		children: Jd(e, {
			minutesMinLength: n,
			hoursMinLength: r
		})
	});
}
function ef(e) {
	if (!isNaN(e)) return new qd.Duration(0, 0, 0, 0, 0, 0, Math.round(e)).round({
		smallestUnit: "seconds",
		largestUnit: "hours"
	}).toString();
}
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/play-solid.js
function tf(e, t) {
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
tf.displayName = "PlaySolidIcon";
var nf = d(tf);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/pause-solid.js
function rf(e, t) {
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
rf.displayName = "PauseSolidIcon";
var af = d(rf), of = { button: "_button_13syj_8" }, sf = l(null);
sf.displayName = "I18nContext";
function z() {
	let e = g(sf);
	if (!e) throw Error("useI18n must be used within an I18nContext.Provider");
	return e;
}
//#endregion
//#region src/audio/PlayPauseButton/PlayPauseButton.tsx
function cf({ disabled: e = !1, playing: t = !1, togglePlay: n, className: r, ...i }) {
	let { translate: a } = z(), o = a(t ? "action|pause" : "action|play");
	return /* @__PURE__ */ (0, R.jsx)(j, {
		size: "32px",
		"aria-label": o,
		tooltip: o,
		onClick: n,
		className: (0, L.default)(of.button, r),
		disabled: e,
		...i,
		children: t ? /* @__PURE__ */ (0, R.jsx)(af, {}) : /* @__PURE__ */ (0, R.jsx)(nf, {})
	});
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_freeGlobal.js
var lf = typeof global == "object" && global && global.Object === Object && global, uf = typeof self == "object" && self && self.Object === Object && self, df = lf || uf || Function("return this")(), ff = df.Symbol, pf = Object.prototype, mf = pf.hasOwnProperty, hf = pf.toString, gf = ff ? ff.toStringTag : void 0;
function _f(e) {
	var t = mf.call(e, gf), n = e[gf];
	try {
		e[gf] = void 0;
		var r = !0;
	} catch {}
	var i = hf.call(e);
	return r && (t ? e[gf] = n : delete e[gf]), i;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_objectToString.js
var vf = Object.prototype.toString;
function yf(e) {
	return vf.call(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseGetTag.js
var bf = "[object Null]", xf = "[object Undefined]", Sf = ff ? ff.toStringTag : void 0;
function Cf(e) {
	return e == null ? e === void 0 ? xf : bf : Sf && Sf in Object(e) ? _f(e) : yf(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isObjectLike.js
function wf(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isSymbol.js
var Tf = "[object Symbol]";
function Ef(e) {
	return typeof e == "symbol" || wf(e) && Cf(e) == Tf;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayMap.js
function Df(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
	return i;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isArray.js
var Of = Array.isArray, kf = 1 / 0, Af = ff ? ff.prototype : void 0, jf = Af ? Af.toString : void 0;
function Mf(e) {
	if (typeof e == "string") return e;
	if (Of(e)) return Df(e, Mf) + "";
	if (Ef(e)) return jf ? jf.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -kf ? "-0" : t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_trimmedEndIndex.js
var Nf = /\s/;
function Pf(e) {
	for (var t = e.length; t-- && Nf.test(e.charAt(t)););
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseTrim.js
var Ff = /^\s+/;
function If(e) {
	return e && e.slice(0, Pf(e) + 1).replace(Ff, "");
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isObject.js
function Lf(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/toNumber.js
var Rf = NaN, zf = /^[-+]0x[0-9a-f]+$/i, Bf = /^0b[01]+$/i, Vf = /^0o[0-7]+$/i, Hf = parseInt;
function Uf(e) {
	if (typeof e == "number") return e;
	if (Ef(e)) return Rf;
	if (Lf(e)) {
		var t = typeof e.valueOf == "function" ? e.valueOf() : e;
		e = Lf(t) ? t + "" : t;
	}
	if (typeof e != "string") return e === 0 ? e : +e;
	e = If(e);
	var n = Bf.test(e);
	return n || Vf.test(e) ? Hf(e.slice(2), n ? 2 : 8) : zf.test(e) ? Rf : +e;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/identity.js
function Wf(e) {
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isFunction.js
var Gf = "[object AsyncFunction]", Kf = "[object Function]", qf = "[object GeneratorFunction]", Jf = "[object Proxy]";
function Yf(e) {
	if (!Lf(e)) return !1;
	var t = Cf(e);
	return t == Kf || t == qf || t == Gf || t == Jf;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_coreJsData.js
var Xf = df["__core-js_shared__"], Zf = function() {
	var e = /[^.]+$/.exec(Xf && Xf.keys && Xf.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function Qf(e) {
	return !!Zf && Zf in e;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_toSource.js
var $f = Function.prototype.toString;
function ep(e) {
	if (e != null) {
		try {
			return $f.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsNative.js
var tp = /[\\^$.*+?()[\]{}|]/g, np = /^\[object .+?Constructor\]$/, rp = Function.prototype, ip = Object.prototype, ap = rp.toString, op = ip.hasOwnProperty, sp = RegExp("^" + ap.call(op).replace(tp, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function cp(e) {
	return !Lf(e) || Qf(e) ? !1 : (Yf(e) ? sp : np).test(ep(e));
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getValue.js
function lp(e, t) {
	return e?.[t];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getNative.js
function up(e, t) {
	var n = lp(e, t);
	return cp(n) ? n : void 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_WeakMap.js
var dp = up(df, "WeakMap"), fp = Object.create, pp = function() {
	function e() {}
	return function(t) {
		if (!Lf(t)) return {};
		if (fp) return fp(t);
		e.prototype = t;
		var n = new e();
		return e.prototype = void 0, n;
	};
}();
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_apply.js
function mp(e, t, n) {
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
function hp(e, t) {
	var n = -1, r = e.length;
	for (t ||= Array(r); ++n < r;) t[n] = e[n];
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_shortOut.js
var gp = 800, _p = 16, vp = Date.now;
function yp(e) {
	var t = 0, n = 0;
	return function() {
		var r = vp(), i = _p - (r - n);
		if (n = r, i > 0) {
			if (++t >= gp) return arguments[0];
		} else t = 0;
		return e.apply(void 0, arguments);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/constant.js
function bp(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_defineProperty.js
var xp = function() {
	try {
		var e = up(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}(), Sp = yp(xp ? function(e, t) {
	return xp(e, "toString", {
		configurable: !0,
		enumerable: !1,
		value: bp(t),
		writable: !0
	});
} : Wf);
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayEach.js
function Cp(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isIndex.js
var wp = 9007199254740991, Tp = /^(?:0|[1-9]\d*)$/;
function Ep(e, t) {
	var n = typeof e;
	return t ??= wp, !!t && (n == "number" || n != "symbol" && Tp.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseAssignValue.js
function Dp(e, t, n) {
	t == "__proto__" && xp ? xp(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/eq.js
function Op(e, t) {
	return e === t || e !== e && t !== t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_assignValue.js
var kp = Object.prototype.hasOwnProperty;
function Ap(e, t, n) {
	var r = e[t];
	(!(kp.call(e, t) && Op(r, n)) || n === void 0 && !(t in e)) && Dp(e, t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copyObject.js
function jp(e, t, n, r) {
	var i = !n;
	n ||= {};
	for (var a = -1, o = t.length; ++a < o;) {
		var s = t[a], c = r ? r(n[s], e[s], s, n, e) : void 0;
		c === void 0 && (c = e[s]), i ? Dp(n, s, c) : Ap(n, s, c);
	}
	return n;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_overRest.js
var Mp = Math.max;
function Np(e, t, n) {
	return t = Mp(t === void 0 ? e.length - 1 : t, 0), function() {
		for (var r = arguments, i = -1, a = Mp(r.length - t, 0), o = Array(a); ++i < a;) o[i] = r[t + i];
		i = -1;
		for (var s = Array(t + 1); ++i < t;) s[i] = r[i];
		return s[t] = n(o), mp(e, this, s);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isLength.js
var Pp = 9007199254740991;
function Fp(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Pp;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isArrayLike.js
function Ip(e) {
	return e != null && Fp(e.length) && !Yf(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isPrototype.js
var Lp = Object.prototype;
function Rp(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || Lp);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseTimes.js
function zp(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsArguments.js
var Bp = "[object Arguments]";
function Vp(e) {
	return wf(e) && Cf(e) == Bp;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isArguments.js
var Hp = Object.prototype, Up = Hp.hasOwnProperty, Wp = Hp.propertyIsEnumerable, Gp = Vp(function() {
	return arguments;
}()) ? Vp : function(e) {
	return wf(e) && Up.call(e, "callee") && !Wp.call(e, "callee");
};
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/stubFalse.js
function Kp() {
	return !1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isBuffer.js
var qp = typeof exports == "object" && exports && !exports.nodeType && exports, Jp = qp && typeof module == "object" && module && !module.nodeType && module, Yp = Jp && Jp.exports === qp ? df.Buffer : void 0, Xp = (Yp ? Yp.isBuffer : void 0) || Kp, Zp = "[object Arguments]", Qp = "[object Array]", $p = "[object Boolean]", em = "[object Date]", tm = "[object Error]", nm = "[object Function]", rm = "[object Map]", im = "[object Number]", am = "[object Object]", om = "[object RegExp]", sm = "[object Set]", cm = "[object String]", lm = "[object WeakMap]", um = "[object ArrayBuffer]", dm = "[object DataView]", fm = "[object Float32Array]", pm = "[object Float64Array]", mm = "[object Int8Array]", hm = "[object Int16Array]", gm = "[object Int32Array]", _m = "[object Uint8Array]", vm = "[object Uint8ClampedArray]", ym = "[object Uint16Array]", bm = "[object Uint32Array]", xm = {};
xm[fm] = xm[pm] = xm[mm] = xm[hm] = xm[gm] = xm[_m] = xm[vm] = xm[ym] = xm[bm] = !0, xm[Zp] = xm[Qp] = xm[um] = xm[$p] = xm[dm] = xm[em] = xm[tm] = xm[nm] = xm[rm] = xm[im] = xm[am] = xm[om] = xm[sm] = xm[cm] = xm[lm] = !1;
function Sm(e) {
	return wf(e) && Fp(e.length) && !!xm[Cf(e)];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseUnary.js
function Cm(e) {
	return function(t) {
		return e(t);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nodeUtil.js
var wm = typeof exports == "object" && exports && !exports.nodeType && exports, Tm = wm && typeof module == "object" && module && !module.nodeType && module, Em = Tm && Tm.exports === wm && lf.process, Dm = function() {
	try {
		return Tm && Tm.require && Tm.require("util").types || Em && Em.binding && Em.binding("util");
	} catch {}
}(), Om = Dm && Dm.isTypedArray, km = Om ? Cm(Om) : Sm, Am = Object.prototype.hasOwnProperty;
function jm(e, t) {
	var n = Of(e), r = !n && Gp(e), i = !n && !r && Xp(e), a = !n && !r && !i && km(e), o = n || r || i || a, s = o ? zp(e.length, String) : [], c = s.length;
	for (var l in e) (t || Am.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || Ep(l, c))) && s.push(l);
	return s;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_overArg.js
function Mm(e, t) {
	return function(n) {
		return e(t(n));
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nativeKeys.js
var Nm = Mm(Object.keys, Object), Pm = Object.prototype.hasOwnProperty;
function Fm(e) {
	if (!Rp(e)) return Nm(e);
	var t = [];
	for (var n in Object(e)) Pm.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/keys.js
function Im(e) {
	return Ip(e) ? jm(e) : Fm(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nativeKeysIn.js
function Lm(e) {
	var t = [];
	if (e != null) for (var n in Object(e)) t.push(n);
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseKeysIn.js
var Rm = Object.prototype.hasOwnProperty;
function zm(e) {
	if (!Lf(e)) return Lm(e);
	var t = Rp(e), n = [];
	for (var r in e) r == "constructor" && (t || !Rm.call(e, r)) || n.push(r);
	return n;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/keysIn.js
function Bm(e) {
	return Ip(e) ? jm(e, !0) : zm(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isKey.js
var Vm = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Hm = /^\w*$/;
function Um(e, t) {
	if (Of(e)) return !1;
	var n = typeof e;
	return n == "number" || n == "symbol" || n == "boolean" || e == null || Ef(e) ? !0 : Hm.test(e) || !Vm.test(e) || t != null && e in Object(t);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nativeCreate.js
var Wm = up(Object, "create");
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashClear.js
function Gm() {
	this.__data__ = Wm ? Wm(null) : {}, this.size = 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashDelete.js
function Km(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= +!!t, t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashGet.js
var qm = "__lodash_hash_undefined__", Jm = Object.prototype.hasOwnProperty;
function Ym(e) {
	var t = this.__data__;
	if (Wm) {
		var n = t[e];
		return n === qm ? void 0 : n;
	}
	return Jm.call(t, e) ? t[e] : void 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashHas.js
var Xm = Object.prototype.hasOwnProperty;
function Zm(e) {
	var t = this.__data__;
	return Wm ? t[e] !== void 0 : Xm.call(t, e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashSet.js
var Qm = "__lodash_hash_undefined__";
function $m(e, t) {
	var n = this.__data__;
	return this.size += +!this.has(e), n[e] = Wm && t === void 0 ? Qm : t, this;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Hash.js
function eh(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
eh.prototype.clear = Gm, eh.prototype.delete = Km, eh.prototype.get = Ym, eh.prototype.has = Zm, eh.prototype.set = $m;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheClear.js
function th() {
	this.__data__ = [], this.size = 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_assocIndexOf.js
function nh(e, t) {
	for (var n = e.length; n--;) if (Op(e[n][0], t)) return n;
	return -1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheDelete.js
var rh = Array.prototype.splice;
function ih(e) {
	var t = this.__data__, n = nh(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : rh.call(t, n, 1), --this.size, !0);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheGet.js
function ah(e) {
	var t = this.__data__, n = nh(t, e);
	return n < 0 ? void 0 : t[n][1];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheHas.js
function oh(e) {
	return nh(this.__data__, e) > -1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheSet.js
function sh(e, t) {
	var n = this.__data__, r = nh(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_ListCache.js
function ch(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
ch.prototype.clear = th, ch.prototype.delete = ih, ch.prototype.get = ah, ch.prototype.has = oh, ch.prototype.set = sh;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Map.js
var lh = up(df, "Map");
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheClear.js
function uh() {
	this.size = 0, this.__data__ = {
		hash: new eh(),
		map: new (lh || ch)(),
		string: new eh()
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isKeyable.js
function dh(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getMapData.js
function fh(e, t) {
	var n = e.__data__;
	return dh(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheDelete.js
function ph(e) {
	var t = fh(this, e).delete(e);
	return this.size -= +!!t, t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheGet.js
function mh(e) {
	return fh(this, e).get(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheHas.js
function hh(e) {
	return fh(this, e).has(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheSet.js
function gh(e, t) {
	var n = fh(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_MapCache.js
function _h(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
_h.prototype.clear = uh, _h.prototype.delete = ph, _h.prototype.get = mh, _h.prototype.has = hh, _h.prototype.set = gh;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/memoize.js
var vh = "Expected a function";
function yh(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(vh);
	var n = function() {
		var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	};
	return n.cache = new (yh.Cache || _h)(), n;
}
yh.Cache = _h;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_memoizeCapped.js
var bh = 500;
function xh(e) {
	var t = yh(e, function(e) {
		return n.size === bh && n.clear(), e;
	}), n = t.cache;
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stringToPath.js
var Sh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ch = /\\(\\)?/g, wh = xh(function(e) {
	var t = [];
	return e.charCodeAt(0) === 46 && t.push(""), e.replace(Sh, function(e, n, r, i) {
		t.push(r ? i.replace(Ch, "$1") : n || e);
	}), t;
});
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/toString.js
function Th(e) {
	return e == null ? "" : Mf(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_castPath.js
function Eh(e, t) {
	return Of(e) ? e : Um(e, t) ? [e] : wh(Th(e));
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_toKey.js
var Dh = 1 / 0;
function Oh(e) {
	if (typeof e == "string" || Ef(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -Dh ? "-0" : t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseGet.js
function kh(e, t) {
	t = Eh(t, e);
	for (var n = 0, r = t.length; e != null && n < r;) e = e[Oh(t[n++])];
	return n && n == r ? e : void 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayPush.js
function Ah(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isFlattenable.js
var jh = ff ? ff.isConcatSpreadable : void 0;
function Mh(e) {
	return Of(e) || Gp(e) || !!(jh && e && e[jh]);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseFlatten.js
function Nh(e, t, n, r, i) {
	var a = -1, o = e.length;
	for (n ||= Mh, i ||= []; ++a < o;) {
		var s = e[a];
		t > 0 && n(s) ? t > 1 ? Nh(s, t - 1, n, r, i) : Ah(i, s) : r || (i[i.length] = s);
	}
	return i;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/flatten.js
function Ph(e) {
	return e != null && e.length ? Nh(e, 1) : [];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_flatRest.js
function Fh(e) {
	return Sp(Np(e, void 0, Ph), e + "");
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getPrototype.js
var Ih = Mm(Object.getPrototypeOf, Object), Lh = "[object Object]", Rh = Function.prototype, zh = Object.prototype, Bh = Rh.toString, Vh = zh.hasOwnProperty, Hh = Bh.call(Object);
function Uh(e) {
	if (!wf(e) || Cf(e) != Lh) return !1;
	var t = Ih(e);
	if (t === null) return !0;
	var n = Vh.call(t, "constructor") && t.constructor;
	return typeof n == "function" && n instanceof n && Bh.call(n) == Hh;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseSlice.js
function Wh(e, t, n) {
	var r = -1, i = e.length;
	t < 0 && (t = -t > i ? 0 : i + t), n = n > i ? i : n, n < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
	for (var a = Array(i); ++r < i;) a[r] = e[r + t];
	return a;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_castSlice.js
function Gh(e, t, n) {
	var r = e.length;
	return n = n === void 0 ? r : n, !t && n >= r ? e : Wh(e, t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hasUnicode.js
var Kh = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
function qh(e) {
	return Kh.test(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_asciiToArray.js
function Jh(e) {
	return e.split("");
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_unicodeToArray.js
var Yh = "\\ud800-\\udfff", Xh = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", Zh = "\\ufe0e\\ufe0f", Qh = "[" + Yh + "]", $h = "[" + Xh + "]", eg = "\\ud83c[\\udffb-\\udfff]", tg = "(?:" + $h + "|" + eg + ")", ng = "[^" + Yh + "]", rg = "(?:\\ud83c[\\udde6-\\uddff]){2}", ig = "[\\ud800-\\udbff][\\udc00-\\udfff]", ag = "\\u200d", og = tg + "?", sg = "[" + Zh + "]?", cg = "(?:" + ag + "(?:" + [
	ng,
	rg,
	ig
].join("|") + ")" + sg + og + ")*", lg = sg + og + cg, ug = "(?:" + [
	ng + $h + "?",
	$h,
	rg,
	ig,
	Qh
].join("|") + ")", dg = RegExp(eg + "(?=" + eg + ")|" + ug + lg, "g");
function fg(e) {
	return e.match(dg) || [];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stringToArray.js
function pg(e) {
	return qh(e) ? fg(e) : Jh(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_createCaseFirst.js
function mg(e) {
	return function(t) {
		t = Th(t);
		var n = qh(t) ? pg(t) : void 0, r = n ? n[0] : t.charAt(0), i = n ? Gh(n, 1).join("") : t.slice(1);
		return r[e]() + i;
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/upperFirst.js
var hg = mg("toUpperCase");
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/capitalize.js
function gg(e) {
	return hg(Th(e).toLowerCase());
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackClear.js
function _g() {
	this.__data__ = new ch(), this.size = 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackDelete.js
function vg(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackGet.js
function yg(e) {
	return this.__data__.get(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackHas.js
function bg(e) {
	return this.__data__.has(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackSet.js
var xg = 200;
function Sg(e, t) {
	var n = this.__data__;
	if (n instanceof ch) {
		var r = n.__data__;
		if (!lh || r.length < xg - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new _h(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Stack.js
function Cg(e) {
	var t = this.__data__ = new ch(e);
	this.size = t.size;
}
Cg.prototype.clear = _g, Cg.prototype.delete = vg, Cg.prototype.get = yg, Cg.prototype.has = bg, Cg.prototype.set = Sg;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseAssign.js
function wg(e, t) {
	return e && jp(t, Im(t), e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseAssignIn.js
function Tg(e, t) {
	return e && jp(t, Bm(t), e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneBuffer.js
var Eg = typeof exports == "object" && exports && !exports.nodeType && exports, Dg = Eg && typeof module == "object" && module && !module.nodeType && module, Og = Dg && Dg.exports === Eg ? df.Buffer : void 0, kg = Og ? Og.allocUnsafe : void 0;
function Ag(e, t) {
	if (t) return e.slice();
	var n = e.length, r = kg ? kg(n) : new e.constructor(n);
	return e.copy(r), r;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayFilter.js
function jg(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/stubArray.js
function Mg() {
	return [];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getSymbols.js
var Ng = Object.prototype.propertyIsEnumerable, Pg = Object.getOwnPropertySymbols, Fg = Pg ? function(e) {
	return e == null ? [] : (e = Object(e), jg(Pg(e), function(t) {
		return Ng.call(e, t);
	}));
} : Mg;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copySymbols.js
function Ig(e, t) {
	return jp(e, Fg(e), t);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getSymbolsIn.js
var Lg = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) Ah(t, Fg(e)), e = Ih(e);
	return t;
} : Mg;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copySymbolsIn.js
function Rg(e, t) {
	return jp(e, Lg(e), t);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseGetAllKeys.js
function zg(e, t, n) {
	var r = t(e);
	return Of(e) ? r : Ah(r, n(e));
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getAllKeys.js
function Bg(e) {
	return zg(e, Im, Fg);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getAllKeysIn.js
function Vg(e) {
	return zg(e, Bm, Lg);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_DataView.js
var Hg = up(df, "DataView"), Ug = up(df, "Promise"), Wg = up(df, "Set"), Gg = "[object Map]", Kg = "[object Object]", qg = "[object Promise]", Jg = "[object Set]", Yg = "[object WeakMap]", Xg = "[object DataView]", Zg = ep(Hg), Qg = ep(lh), $g = ep(Ug), e_ = ep(Wg), t_ = ep(dp), n_ = Cf;
(Hg && n_(new Hg(/* @__PURE__ */ new ArrayBuffer(1))) != Xg || lh && n_(new lh()) != Gg || Ug && n_(Ug.resolve()) != qg || Wg && n_(new Wg()) != Jg || dp && n_(new dp()) != Yg) && (n_ = function(e) {
	var t = Cf(e), n = t == Kg ? e.constructor : void 0, r = n ? ep(n) : "";
	if (r) switch (r) {
		case Zg: return Xg;
		case Qg: return Gg;
		case $g: return qg;
		case e_: return Jg;
		case t_: return Yg;
	}
	return t;
});
var r_ = n_, i_ = Object.prototype.hasOwnProperty;
function a_(e) {
	var t = e.length, n = new e.constructor(t);
	return t && typeof e[0] == "string" && i_.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Uint8Array.js
var o_ = df.Uint8Array;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneArrayBuffer.js
function s_(e) {
	var t = new e.constructor(e.byteLength);
	return new o_(t).set(new o_(e)), t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneDataView.js
function c_(e, t) {
	var n = t ? s_(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.byteLength);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneRegExp.js
var l_ = /\w*$/;
function u_(e) {
	var t = new e.constructor(e.source, l_.exec(e));
	return t.lastIndex = e.lastIndex, t;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneSymbol.js
var d_ = ff ? ff.prototype : void 0, f_ = d_ ? d_.valueOf : void 0;
function p_(e) {
	return f_ ? Object(f_.call(e)) : {};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneTypedArray.js
function m_(e, t) {
	var n = t ? s_(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.length);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_initCloneByTag.js
var h_ = "[object Boolean]", g_ = "[object Date]", __ = "[object Map]", v_ = "[object Number]", y_ = "[object RegExp]", b_ = "[object Set]", x_ = "[object String]", S_ = "[object Symbol]", C_ = "[object ArrayBuffer]", w_ = "[object DataView]", T_ = "[object Float32Array]", E_ = "[object Float64Array]", D_ = "[object Int8Array]", O_ = "[object Int16Array]", k_ = "[object Int32Array]", A_ = "[object Uint8Array]", j_ = "[object Uint8ClampedArray]", M_ = "[object Uint16Array]", N_ = "[object Uint32Array]";
function P_(e, t, n) {
	var r = e.constructor;
	switch (t) {
		case C_: return s_(e);
		case h_:
		case g_: return new r(+e);
		case w_: return c_(e, n);
		case T_:
		case E_:
		case D_:
		case O_:
		case k_:
		case A_:
		case j_:
		case M_:
		case N_: return m_(e, n);
		case __: return new r();
		case v_:
		case x_: return new r(e);
		case y_: return u_(e);
		case b_: return new r();
		case S_: return p_(e);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_initCloneObject.js
function F_(e) {
	return typeof e.constructor == "function" && !Rp(e) ? pp(Ih(e)) : {};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsMap.js
var I_ = "[object Map]";
function L_(e) {
	return wf(e) && r_(e) == I_;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isMap.js
var R_ = Dm && Dm.isMap, z_ = R_ ? Cm(R_) : L_, B_ = "[object Set]";
function V_(e) {
	return wf(e) && r_(e) == B_;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isSet.js
var H_ = Dm && Dm.isSet, U_ = H_ ? Cm(H_) : V_, W_ = 1, G_ = 2, K_ = 4, q_ = "[object Arguments]", J_ = "[object Array]", Y_ = "[object Boolean]", X_ = "[object Date]", Z_ = "[object Error]", Q_ = "[object Function]", $_ = "[object GeneratorFunction]", ev = "[object Map]", tv = "[object Number]", nv = "[object Object]", rv = "[object RegExp]", iv = "[object Set]", av = "[object String]", ov = "[object Symbol]", sv = "[object WeakMap]", cv = "[object ArrayBuffer]", lv = "[object DataView]", uv = "[object Float32Array]", dv = "[object Float64Array]", fv = "[object Int8Array]", pv = "[object Int16Array]", mv = "[object Int32Array]", hv = "[object Uint8Array]", gv = "[object Uint8ClampedArray]", _v = "[object Uint16Array]", vv = "[object Uint32Array]", yv = {};
yv[q_] = yv[J_] = yv[cv] = yv[lv] = yv[Y_] = yv[X_] = yv[uv] = yv[dv] = yv[fv] = yv[pv] = yv[mv] = yv[ev] = yv[tv] = yv[nv] = yv[rv] = yv[iv] = yv[av] = yv[ov] = yv[hv] = yv[gv] = yv[_v] = yv[vv] = !0, yv[Z_] = yv[Q_] = yv[sv] = !1;
function bv(e, t, n, r, i, a) {
	var o, s = t & W_, c = t & G_, l = t & K_;
	if (n && (o = i ? n(e, r, i, a) : n(e)), o !== void 0) return o;
	if (!Lf(e)) return e;
	var u = Of(e);
	if (u) {
		if (o = a_(e), !s) return hp(e, o);
	} else {
		var d = r_(e), f = d == Q_ || d == $_;
		if (Xp(e)) return Ag(e, s);
		if (d == nv || d == q_ || f && !i) {
			if (o = c || f ? {} : F_(e), !s) return c ? Rg(e, Tg(o, e)) : Ig(e, wg(o, e));
		} else {
			if (!yv[d]) return i ? e : {};
			o = P_(e, d, s);
		}
	}
	a ||= new Cg();
	var p = a.get(e);
	if (p) return p;
	a.set(e, o), U_(e) ? e.forEach(function(r) {
		o.add(bv(r, t, n, r, e, a));
	}) : z_(e) && e.forEach(function(r, i) {
		o.set(i, bv(r, t, n, i, e, a));
	});
	var m = u ? void 0 : (l ? c ? Vg : Bg : c ? Bm : Im)(e);
	return Cp(m || e, function(r, i) {
		m && (i = r, r = e[i]), Ap(o, i, bv(r, t, n, i, e, a));
	}), o;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_setCacheAdd.js
var xv = "__lodash_hash_undefined__";
function Sv(e) {
	return this.__data__.set(e, xv), this;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_setCacheHas.js
function Cv(e) {
	return this.__data__.has(e);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_SetCache.js
function wv(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.__data__ = new _h(); ++t < n;) this.add(e[t]);
}
wv.prototype.add = wv.prototype.push = Sv, wv.prototype.has = Cv;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arraySome.js
function Tv(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
	return !1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cacheHas.js
function Ev(e, t) {
	return e.has(t);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_equalArrays.js
var Dv = 1, Ov = 2;
function kv(e, t, n, r, i, a) {
	var o = n & Dv, s = e.length, c = t.length;
	if (s != c && !(o && c > s)) return !1;
	var l = a.get(e), u = a.get(t);
	if (l && u) return l == t && u == e;
	var d = -1, f = !0, p = n & Ov ? new wv() : void 0;
	for (a.set(e, t), a.set(t, e); ++d < s;) {
		var m = e[d], h = t[d];
		if (r) var g = o ? r(h, m, d, t, e, a) : r(m, h, d, e, t, a);
		if (g !== void 0) {
			if (g) continue;
			f = !1;
			break;
		}
		if (p) {
			if (!Tv(t, function(e, t) {
				if (!Ev(p, t) && (m === e || i(m, e, n, r, a))) return p.push(t);
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
function Av(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e, r) {
		n[++t] = [r, e];
	}), n;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_setToArray.js
function jv(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e) {
		n[++t] = e;
	}), n;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_equalByTag.js
var Mv = 1, Nv = 2, Pv = "[object Boolean]", Fv = "[object Date]", Iv = "[object Error]", Lv = "[object Map]", Rv = "[object Number]", zv = "[object RegExp]", Bv = "[object Set]", Vv = "[object String]", Hv = "[object Symbol]", Uv = "[object ArrayBuffer]", Wv = "[object DataView]", Gv = ff ? ff.prototype : void 0, Kv = Gv ? Gv.valueOf : void 0;
function qv(e, t, n, r, i, a, o) {
	switch (n) {
		case Wv:
			if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
			e = e.buffer, t = t.buffer;
		case Uv: return !(e.byteLength != t.byteLength || !a(new o_(e), new o_(t)));
		case Pv:
		case Fv:
		case Rv: return Op(+e, +t);
		case Iv: return e.name == t.name && e.message == t.message;
		case zv:
		case Vv: return e == t + "";
		case Lv: var s = Av;
		case Bv:
			var c = r & Mv;
			if (s ||= jv, e.size != t.size && !c) return !1;
			var l = o.get(e);
			if (l) return l == t;
			r |= Nv, o.set(e, t);
			var u = kv(s(e), s(t), r, i, a, o);
			return o.delete(e), u;
		case Hv: if (Kv) return Kv.call(e) == Kv.call(t);
	}
	return !1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_equalObjects.js
var Jv = 1, Yv = Object.prototype.hasOwnProperty;
function Xv(e, t, n, r, i, a) {
	var o = n & Jv, s = Bg(e), c = s.length;
	if (c != Bg(t).length && !o) return !1;
	for (var l = c; l--;) {
		var u = s[l];
		if (!(o ? u in t : Yv.call(t, u))) return !1;
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
var Zv = 1, Qv = "[object Arguments]", $v = "[object Array]", ey = "[object Object]", ty = Object.prototype.hasOwnProperty;
function ny(e, t, n, r, i, a) {
	var o = Of(e), s = Of(t), c = o ? $v : r_(e), l = s ? $v : r_(t);
	c = c == Qv ? ey : c, l = l == Qv ? ey : l;
	var u = c == ey, d = l == ey, f = c == l;
	if (f && Xp(e)) {
		if (!Xp(t)) return !1;
		o = !0, u = !1;
	}
	if (f && !u) return a ||= new Cg(), o || km(e) ? kv(e, t, n, r, i, a) : qv(e, t, c, n, r, i, a);
	if (!(n & Zv)) {
		var p = u && ty.call(e, "__wrapped__"), m = d && ty.call(t, "__wrapped__");
		if (p || m) {
			var h = p ? e.value() : e, g = m ? t.value() : t;
			return a ||= new Cg(), i(h, g, n, r, a);
		}
	}
	return f ? (a ||= new Cg(), Xv(e, t, n, r, i, a)) : !1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsEqual.js
function ry(e, t, n, r, i) {
	return e === t ? !0 : e == null || t == null || !wf(e) && !wf(t) ? e !== e && t !== t : ny(e, t, n, r, ry, i);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/now.js
var iy = function() {
	return df.Date.now();
}, ay = "Expected a function", oy = Math.max, sy = Math.min;
function cy(e, t, n) {
	var r, i, a, o, s, c, l = 0, u = !1, d = !1, f = !0;
	if (typeof e != "function") throw TypeError(ay);
	t = Uf(t) || 0, Lf(n) && (u = !!n.leading, d = "maxWait" in n, a = d ? oy(Uf(n.maxWait) || 0, t) : a, f = "trailing" in n ? !!n.trailing : f);
	function p(t) {
		var n = r, a = i;
		return r = i = void 0, l = t, o = e.apply(a, n), o;
	}
	function m(e) {
		return l = e, s = setTimeout(_, t), u ? p(e) : o;
	}
	function h(e) {
		var n = e - c, r = e - l, i = t - n;
		return d ? sy(i, a - r) : i;
	}
	function g(e) {
		var n = e - c, r = e - l;
		return c === void 0 || n >= t || n < 0 || d && r >= a;
	}
	function _() {
		var e = iy();
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
		return s === void 0 ? o : v(iy());
	}
	function x() {
		var e = iy(), n = g(e);
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
function ly(e) {
	var t = e == null ? 0 : e.length;
	return t ? e[t - 1] : void 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_parent.js
function uy(e, t) {
	return t.length < 2 ? e : kh(e, Wh(t, 0, -1));
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isEqual.js
function dy(e, t) {
	return ry(e, t);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseUnset.js
var fy = Object.prototype.hasOwnProperty;
function py(e, t) {
	t = Eh(t, e);
	var n = -1, r = t.length;
	if (!r) return !0;
	for (; ++n < r;) {
		var i = Oh(t[n]);
		if (i === "__proto__" && !fy.call(e, "__proto__") || (i === "constructor" || i === "prototype") && n < r - 1) return !1;
	}
	var a = uy(e, t);
	return a == null || delete a[Oh(ly(t))];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_customOmitClone.js
function my(e) {
	return Uh(e) ? void 0 : e;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/omit.js
var hy = 1, gy = 2, _y = 4, vy = Fh(function(e, t) {
	var n = {};
	if (e == null) return n;
	var r = !1;
	t = Df(t, function(t) {
		return t = Eh(t, e), r ||= t.length > 1, t;
	}), jp(e, Vg(e), n), r && (n = bv(n, hy | gy | _y, my));
	for (var i = t.length; i--;) py(n, t[i]);
	return n;
}), yy = "Expected a function";
function by(e, t, n) {
	var r = !0, i = !0;
	if (typeof e != "function") throw TypeError(yy);
	return Lf(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), cy(e, t, {
		leading: r,
		maxWait: t,
		trailing: i
	});
}
var xy = { seekBar: "_seekBar_16dv7_14" };
//#endregion
//#region src/audio/SeekBar/SeekBar.tsx
function Sy({ value: e = 0, className: t, ...n }) {
	let { translate: r } = z(), [i, a] = T(e), o = S(() => by(a, 10), []);
	return _(() => {
		o(e);
	}, [e, o]), /* @__PURE__ */ (0, R.jsx)("input", {
		type: "range",
		className: (0, L.default)(xy.seekBar, t),
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
var Cy = {
	avatarWithDetails: "_avatarWithDetails_10imw_8",
	title: "_title_10imw_17",
	details: "_details_10imw_28"
}, wy = { flex: "_flex_4dswl_9" };
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
		className: (0, L.default)(wy.flex, c),
		style: d
	}, l);
}
//#endregion
//#region src/core/AvatarWithDetails/AvatarWithDetails.tsx
function Ty({ as: e, className: t, details: n, avatar: r, title: i, ...a }) {
	return /* @__PURE__ */ (0, R.jsxs)(e || "div", {
		className: (0, L.default)(Cy.avatarWithDetails, t),
		...a,
		children: [r, /* @__PURE__ */ (0, R.jsxs)(B, {
			direction: "column",
			children: [/* @__PURE__ */ (0, R.jsx)("span", {
				className: Cy.title,
				children: i
			}), /* @__PURE__ */ (0, R.jsx)("span", {
				className: Cy.details,
				children: n
			})]
		})]
	});
}
//#endregion
//#region src/core/viewmodel/Disposables.ts
var Ey = class {
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
}, Dy = class {
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
}, Oy = class {
	listeners = /* @__PURE__ */ new Set();
	add = (e) => (this.listeners.add(e), () => {
		this.listeners.delete(e);
	});
	emit = () => {
		for (let e of this.listeners) e();
	};
}, ky = class {
	subs;
	snapshot;
	props;
	disposables = new Ey();
	constructor(e, t) {
		this.props = e, this.subs = new Oy(), this.snapshot = new Dy(t, () => {
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
}, Ay = class {
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
function jy(e) {
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
function My(e, t) {
	return S(() => {
		let n = new Ay(e);
		return Object.assign(n, t), n;
	}, [e, t]);
}
//#endregion
//#region src/core/viewmodel/useViewModel.ts
function V(e) {
	return ee(e.subscribe, e.getSnapshot, e.getSnapshot);
}
//#endregion
//#region src/core/MemberAvatar/MemberAvatarView.tsx
function Ny(e) {
	let { name: t, id: n, url: r, size: i } = V(e.vm);
	return /* @__PURE__ */ (0, R.jsx)(E, {
		className: e.classNames,
		name: t,
		id: n,
		src: r,
		size: i
	});
}
//#endregion
//#region ../../node_modules/.pnpm/matrix-web-i18n@3.6.0_supports-color@10.2.2/node_modules/matrix-web-i18n/lib/utils.js
function Py(e) {
	return e.toLowerCase().replace("_", "-");
}
function Fy(e) {
	let t = [], n = Py(e), r = n.split("-");
	return r.length === 2 && r[0] === r[1] ? t.push(r[0]) : (t.push(n), r.length === 2 && t.push(r[0])), t;
}
//#endregion
//#region ../../node_modules/.pnpm/matrix-web-i18n@3.6.0_supports-color@10.2.2/node_modules/matrix-web-i18n/lib/index.js
var Iy = "|", Ly = /* @__PURE__ */ P(((e, t) => {
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
})), Ry = /* @__PURE__ */ P(((e, t) => {
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
})), zy = /* @__PURE__ */ P(((e, t) => {
	var n = Ry();
	t.exports = function() {
		return n() && !!Symbol.toStringTag;
	};
})), By = /* @__PURE__ */ P(((e, t) => {
	t.exports = Object;
})), Vy = /* @__PURE__ */ P(((e, t) => {
	t.exports = Error;
})), Hy = /* @__PURE__ */ P(((e, t) => {
	t.exports = EvalError;
})), Uy = /* @__PURE__ */ P(((e, t) => {
	t.exports = RangeError;
})), Wy = /* @__PURE__ */ P(((e, t) => {
	t.exports = ReferenceError;
})), Gy = /* @__PURE__ */ P(((e, t) => {
	t.exports = SyntaxError;
})), Ky = /* @__PURE__ */ P(((e, t) => {
	t.exports = TypeError;
})), qy = /* @__PURE__ */ P(((e, t) => {
	t.exports = URIError;
})), Jy = /* @__PURE__ */ P(((e, t) => {
	t.exports = Math.abs;
})), Yy = /* @__PURE__ */ P(((e, t) => {
	t.exports = Math.floor;
})), Xy = /* @__PURE__ */ P(((e, t) => {
	t.exports = Math.max;
})), Zy = /* @__PURE__ */ P(((e, t) => {
	t.exports = Math.min;
})), Qy = /* @__PURE__ */ P(((e, t) => {
	t.exports = Math.pow;
})), $y = /* @__PURE__ */ P(((e, t) => {
	t.exports = Math.round;
})), eb = /* @__PURE__ */ P(((e, t) => {
	t.exports = Number.isNaN || function(e) {
		return e !== e;
	};
})), tb = /* @__PURE__ */ P(((e, t) => {
	var n = eb();
	t.exports = function(e) {
		return n(e) || e === 0 ? e : e < 0 ? -1 : 1;
	};
})), nb = /* @__PURE__ */ P(((e, t) => {
	t.exports = Object.getOwnPropertyDescriptor;
})), rb = /* @__PURE__ */ P(((e, t) => {
	var n = nb();
	if (n) try {
		n([], "length");
	} catch {
		n = null;
	}
	t.exports = n;
})), ib = /* @__PURE__ */ P(((e, t) => {
	var n = Object.defineProperty || !1;
	if (n) try {
		n({}, "a", { value: 1 });
	} catch {
		n = !1;
	}
	t.exports = n;
})), ab = /* @__PURE__ */ P(((e, t) => {
	var n = typeof Symbol < "u" && Symbol, r = Ry();
	t.exports = function() {
		return typeof n != "function" || typeof Symbol != "function" || typeof n("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : r();
	};
})), ob = /* @__PURE__ */ P(((e, t) => {
	t.exports = typeof Reflect < "u" && Reflect.getPrototypeOf || null;
})), sb = /* @__PURE__ */ P(((e, t) => {
	t.exports = By().getPrototypeOf || null;
})), cb = /* @__PURE__ */ P(((e, t) => {
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
})), lb = /* @__PURE__ */ P(((e, t) => {
	var n = cb();
	t.exports = Function.prototype.bind || n;
})), ub = /* @__PURE__ */ P(((e, t) => {
	t.exports = Function.prototype.call;
})), db = /* @__PURE__ */ P(((e, t) => {
	t.exports = Function.prototype.apply;
})), fb = /* @__PURE__ */ P(((e, t) => {
	t.exports = typeof Reflect < "u" && Reflect && Reflect.apply;
})), pb = /* @__PURE__ */ P(((e, t) => {
	var n = lb(), r = db(), i = ub();
	t.exports = fb() || n.call(i, r);
})), mb = /* @__PURE__ */ P(((e, t) => {
	var n = lb(), r = Ky(), i = ub(), a = pb();
	t.exports = function(e) {
		if (e.length < 1 || typeof e[0] != "function") throw new r("a function is required");
		return a(n, i, e);
	};
})), hb = /* @__PURE__ */ P(((e, t) => {
	var n = mb(), r = rb(), i;
	try {
		i = [].__proto__ === Array.prototype;
	} catch (e) {
		if (!e || typeof e != "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") throw e;
	}
	var a = !!i && r && r(Object.prototype, "__proto__"), o = Object, s = o.getPrototypeOf;
	t.exports = a && typeof a.get == "function" ? n([a.get]) : typeof s == "function" && function(e) {
		return s(e == null ? e : o(e));
	};
})), gb = /* @__PURE__ */ P(((e, t) => {
	var n = ob(), r = sb(), i = hb();
	t.exports = n ? function(e) {
		return n(e);
	} : r ? function(e) {
		if (!e || typeof e != "object" && typeof e != "function") throw TypeError("getProto: not an object");
		return r(e);
	} : i ? function(e) {
		return i(e);
	} : null;
})), _b = /* @__PURE__ */ P(((e, t) => {
	var n = Function.prototype.call, r = Object.prototype.hasOwnProperty;
	t.exports = lb().call(n, r);
})), vb = /* @__PURE__ */ P(((e, t) => {
	var n, r = By(), i = Vy(), a = Hy(), o = Uy(), s = Wy(), c = Gy(), l = Ky(), u = qy(), d = Jy(), f = Yy(), p = Xy(), m = Zy(), h = Qy(), g = $y(), _ = tb(), v = Function, y = function(e) {
		try {
			return v("\"use strict\"; return (" + e + ").constructor;")();
		} catch {}
	}, b = rb(), x = ib(), S = function() {
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
	}() : S, w = ab()(), T = gb(), ee = sb(), te = ob(), E = db(), ne = ub(), D = {}, O = typeof Uint8Array > "u" || !T ? n : T(Uint8Array), k = {
		__proto__: null,
		"%AggregateError%": typeof AggregateError > "u" ? n : AggregateError,
		"%Array%": Array,
		"%ArrayBuffer%": typeof ArrayBuffer > "u" ? n : ArrayBuffer,
		"%ArrayIteratorPrototype%": w && T ? T([][Symbol.iterator]()) : n,
		"%AsyncFromSyncIteratorPrototype%": n,
		"%AsyncFunction%": D,
		"%AsyncGenerator%": D,
		"%AsyncGeneratorFunction%": D,
		"%AsyncIteratorPrototype%": D,
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
		"%GeneratorFunction%": D,
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
		"%TypedArray%": O,
		"%TypeError%": l,
		"%Uint8Array%": typeof Uint8Array > "u" ? n : Uint8Array,
		"%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? n : Uint8ClampedArray,
		"%Uint16Array%": typeof Uint16Array > "u" ? n : Uint16Array,
		"%Uint32Array%": typeof Uint32Array > "u" ? n : Uint32Array,
		"%URIError%": u,
		"%WeakMap%": typeof WeakMap > "u" ? n : WeakMap,
		"%WeakRef%": typeof WeakRef > "u" ? n : WeakRef,
		"%WeakSet%": typeof WeakSet > "u" ? n : WeakSet,
		"%Function.prototype.call%": ne,
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
	}, A = lb(), ae = _b(), oe = A.call(ne, Array.prototype.concat), se = A.call(E, Array.prototype.splice), ce = A.call(ne, String.prototype.replace), le = A.call(ne, String.prototype.slice), ue = A.call(ne, RegExp.prototype.exec), j = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, de = /\\(\\)?/g, fe = function(e) {
		var t = le(e, 0, 1), n = le(e, -1);
		if (t === "%" && n !== "%") throw new c("invalid intrinsic syntax, expected closing `%`");
		if (n === "%" && t !== "%") throw new c("invalid intrinsic syntax, expected opening `%`");
		var r = [];
		return ce(e, j, function(e, t, n, i) {
			r[r.length] = n ? ce(i, de, "$1") : t || e;
		}), r;
	}, pe = function(e, t) {
		var n = e, r;
		if (ae(ie, n) && (r = ie[n], n = "%" + r[0] + "%"), ae(k, n)) {
			var i = k[n];
			if (i === D && (i = re(n)), i === void 0 && !t) throw new l("intrinsic " + e + " exists, but is not available. Please file an issue!");
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
		var n = fe(e), r = n.length > 0 ? n[0] : "", i = pe("%" + r + "%", t), a = i.name, o = i.value, s = !1, u = i.alias;
		u && (r = u[0], se(n, oe([0, 1], u)));
		for (var d = 1, f = !0; d < n.length; d += 1) {
			var p = n[d], m = le(p, 0, 1), h = le(p, -1);
			if ((m === "\"" || m === "'" || m === "`" || h === "\"" || h === "'" || h === "`") && m !== h) throw new c("property names with quotes must have matching quotes");
			if ((p === "constructor" || !f) && (s = !0), r += "." + p, a = "%" + r + "%", ae(k, a)) o = k[a];
			else if (o != null) {
				if (!(p in o)) {
					if (!t) throw new l("base intrinsic for " + e + " exists, but the property is not available.");
					return;
				}
				if (b && d + 1 >= n.length) {
					var g = b(o, p);
					f = !!g, o = f && "get" in g && !("originalValue" in g.get) ? g.get : o[p];
				} else f = ae(o, p), o = o[p];
				f && !s && (k[a] = o);
			}
		}
		return o;
	};
})), yb = /* @__PURE__ */ P(((e, t) => {
	var n = vb(), r = mb(), i = r([n("%String.prototype.indexOf%")]);
	t.exports = function(e, t) {
		var a = n(e, !!t);
		return typeof a == "function" && i(e, ".prototype.") > -1 ? r([a]) : a;
	};
})), bb = /* @__PURE__ */ P(((e, t) => {
	var n = zy()(), r = yb()("Object.prototype.toString"), i = function(e) {
		return n && e && typeof e == "object" && Symbol.toStringTag in e ? !1 : r(e) === "[object Arguments]";
	}, a = function(e) {
		return i(e) ? !0 : typeof e == "object" && !!e && "length" in e && typeof e.length == "number" && e.length >= 0 && r(e) !== "[object Array]" && "callee" in e && r(e.callee) === "[object Function]";
	}, o = function() {
		return i(arguments);
	}();
	i.isLegacyArguments = a, t.exports = o ? i : a;
})), xb = /* @__PURE__ */ P(((e, t) => {
	var n = yb(), r = zy()(), i = _b(), a = rb(), o;
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
})), Sb = /* @__PURE__ */ P(((e, t) => {
	var n = yb(), r = xb(), i = n("RegExp.prototype.exec"), a = Ky();
	t.exports = function(e) {
		if (!r(e)) throw new a("`regex` must be a RegExp");
		return function(t) {
			return i(e, t) !== null;
		};
	};
})), Cb = /* @__PURE__ */ P(((e, t) => {
	var n = function* () {}.constructor;
	t.exports = () => n;
})), wb = /* @__PURE__ */ P(((e, t) => {
	var n = yb(), r = Sb()(/^\s*(?:function)?\*/), i = zy()(), a = gb(), o = n("Object.prototype.toString"), s = n("Function.prototype.toString"), c = Cb();
	t.exports = function(e) {
		if (typeof e != "function") return !1;
		if (r(s(e))) return !0;
		if (!i) return o(e) === "[object GeneratorFunction]";
		if (!a) return !1;
		var t = c();
		return t && a(e) === t.prototype;
	};
})), Tb = /* @__PURE__ */ P(((e, t) => {
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
})), Eb = /* @__PURE__ */ P(((e, t) => {
	var n = Tb(), r = Object.prototype.toString, i = Object.prototype.hasOwnProperty, a = function(e, t, n) {
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
})), Db = /* @__PURE__ */ P(((e, t) => {
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
})), Ob = /* @__PURE__ */ P(((e, t) => {
	var n = Db(), r = typeof globalThis > "u" ? global : globalThis;
	t.exports = function() {
		for (var e = [], t = 0; t < n.length; t++) typeof r[n[t]] == "function" && (e[e.length] = n[t]);
		return e;
	};
})), kb = /* @__PURE__ */ P(((e, t) => {
	var n = ib(), r = Gy(), i = Ky(), a = rb();
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
})), Ab = /* @__PURE__ */ P(((e, t) => {
	var n = ib(), r = function() {
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
})), jb = /* @__PURE__ */ P(((e, t) => {
	var n = vb(), r = kb(), i = Ab()(), a = rb(), o = Ky(), s = n("%Math.floor%");
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
})), Mb = /* @__PURE__ */ P(((e, t) => {
	var n = lb(), r = db(), i = pb();
	t.exports = function() {
		return i(n, r, arguments);
	};
})), Nb = /* @__PURE__ */ P(((e, t) => {
	var n = jb(), r = ib(), i = mb(), a = Mb();
	t.exports = function(e) {
		var t = i(arguments), r = e.length - (arguments.length - 1);
		return n(t, 1 + (r > 0 ? r : 0), !0);
	}, r ? r(t.exports, "apply", { value: a }) : t.exports.apply = a;
})), Pb = /* @__PURE__ */ P(((e, t) => {
	var n = Eb(), r = Ob(), i = Nb(), a = yb(), o = rb(), s = gb(), c = a("Object.prototype.toString"), l = zy()(), u = typeof globalThis > "u" ? global : globalThis, d = r(), f = a("String.prototype.slice"), p = a("Array.prototype.indexOf", !0) || function(e, t) {
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
})), Fb = /* @__PURE__ */ P(((e, t) => {
	var n = Pb();
	t.exports = function(e) {
		return !!n(e);
	};
})), Ib = /* @__PURE__ */ P(((e) => {
	var t = bb(), n = wb(), r = Pb(), i = Fb();
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
	function ne(e) {
		return typeof Map > "u" ? !1 : E.working ? E(e) : e instanceof Map;
	}
	e.isMap = ne;
	function D(e) {
		return c(e) === "[object Set]";
	}
	D.working = typeof Set < "u" && D(/* @__PURE__ */ new Set());
	function O(e) {
		return typeof Set > "u" ? !1 : D.working ? D(e) : e instanceof Set;
	}
	e.isSet = O;
	function k(e) {
		return c(e) === "[object WeakMap]";
	}
	k.working = typeof WeakMap < "u" && k(/* @__PURE__ */ new WeakMap());
	function re(e) {
		return typeof WeakMap > "u" ? !1 : k.working ? k(e) : e instanceof WeakMap;
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
	function j(e) {
		return le !== void 0 && (ue.working === void 0 && (ue.working = ue(new le())), ue.working ? ue(e) : e instanceof le);
	}
	e.isSharedArrayBuffer = j;
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
	function he(e) {
		return c(e) === "[object WebAssembly.Module]";
	}
	e.isWebAssemblyCompiledModule = he;
	function M(e) {
		return m(e, l);
	}
	e.isNumberObject = M;
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
	function be(e) {
		return M(e) || ge(e) || _e(e) || ve(e) || ye(e);
	}
	e.isBoxedPrimitive = be;
	function xe(e) {
		return typeof Uint8Array < "u" && (oe(e) || j(e));
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
})), Lb = /* @__PURE__ */ P(((e, t) => {
	t.exports = function(e) {
		return e && typeof e == "object" && typeof e.copy == "function" && typeof e.fill == "function" && typeof e.readUInt8 == "function";
	};
})), Rb = /* @__PURE__ */ P(((e, t) => {
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
})), zb = /* @__PURE__ */ P(((e) => {
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
	e.types = Ib();
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
		return T(e) && D(e) === "[object RegExp]";
	}
	e.isRegExp = w, e.types.isRegExp = w;
	function T(e) {
		return typeof e == "object" && !!e;
	}
	e.isObject = T;
	function ee(e) {
		return T(e) && D(e) === "[object Date]";
	}
	e.isDate = ee, e.types.isDate = ee;
	function te(e) {
		return T(e) && (D(e) === "[object Error]" || e instanceof Error);
	}
	e.isError = te, e.types.isNativeError = te;
	function E(e) {
		return typeof e == "function";
	}
	e.isFunction = E;
	function ne(e) {
		return e === null || typeof e == "boolean" || typeof e == "number" || typeof e == "string" || typeof e == "symbol" || e === void 0;
	}
	e.isPrimitive = ne, e.isBuffer = Lb();
	function D(e) {
		return Object.prototype.toString.call(e);
	}
	function O(e) {
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
			O(e.getHours()),
			O(e.getMinutes()),
			O(e.getSeconds())
		].join(":");
		return [
			e.getDate(),
			k[e.getMonth()],
			t
		].join(" ");
	}
	e.log = function() {
		console.log("%s - %s", re(), e.format.apply(e, arguments));
	}, e.inherits = Rb(), e._extend = function(e, t) {
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
})), Bb = /* @__PURE__ */ P(((e) => {
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
})), Vb = /* @__PURE__ */ P(((e, t) => {
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
})), Hb = /* @__PURE__ */ P(((e, t) => {
	var n = [].indexOf;
	t.exports = function(e, t) {
		if (n) return e.indexOf(t);
		for (var r = 0; r < e.length; ++r) if (e[r] === t) return r;
		return -1;
	};
})), Ub = /* @__PURE__ */ P(((e, t) => {
	var n = Array.prototype, r = n.concat, i = n.slice, a = Hb();
	function o(e) {
		var t = {}, o = r.apply(n, i.call(arguments, 1));
		for (var s in e) a(o, s) === -1 && (t[s] = e[s]);
		return t;
	}
	t.exports = o;
})), Wb = /* @__PURE__ */ P(((e, t) => {
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
})), Gb = /* @__PURE__ */ P(((e, t) => {
	t.exports = Wb();
})), Kb = /* @__PURE__ */ P(((e, t) => {
	var n = Gb();
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
})), qb = /* @__PURE__ */ P(((e, t) => {
	t.exports = function(e, t) {
		var n;
		return t === 0 && "zero" in e && (n = "zero"), n ||= t === 1 ? "one" : "other", e[n];
	};
})), Jb = /* @__PURE__ */ P(((e, t) => {
	t.exports = { counterpart: {
		names: Wb(),
		pluralize: qb(),
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
})), Yb = /* @__PURE__ */ Ze((/* @__PURE__ */ P(((e, t) => {
	var n = Ly(), r = zb().isArray, i = zb().isDate, a = Bb().sprintf, o = Vb(), s = Ub(), c = Kb(), l = "counterpart";
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
		}, this.registerTranslations("en", Jb()), this.setMaxListeners(0);
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
})))(), 1), Xb = "i18n/";
Yb.default.setSeparator("|");
var Zb = "en";
Yb.default.setFallbackLocale(Zb);
function Qb(e, t) {
	Yb.default.registerTranslations(e, t);
}
function $b(e) {
	Yb.default.setMissingEntryGenerator(e);
}
function ex() {
	return Yb.default.getLocale();
}
function tx(e) {
	return Yb.default.setLocale(e);
}
function nx(e) {
	return e;
}
function rx(e) {
	return typeof e == "string" && !e.startsWith("missing translation:");
}
var ix = (e, t) => {
	let n = Yb.default.translate(e, {
		...t,
		fallbackLocale: Yb.default.getLocale()
	});
	if (rx(n)) return { translated: n };
	let r = Yb.default.translate(e, {
		...t,
		locale: Zb
	});
	return rx(r) ? {
		translated: r,
		isFallback: !0
	} : {
		translated: e,
		isFallback: !0
	};
};
function ax(e, t) {
	let n = {
		...t,
		interpolate: !1
	};
	return n && typeof n == "object" && Object.keys(n).forEach((e) => {
		n[e] === void 0 && (console.warn("safeCounterpartTranslate called with undefined interpolation name: " + e), n[e] = "undefined"), n[e] === null && (console.warn("safeCounterpartTranslate called with null interpolation name: " + e), n[e] = "null");
	}), ix(e, n);
}
var ox = (e, t) => e;
function H(e, t, n) {
	let { translated: r } = ax(e, t);
	return ox(ux(r, t, n), e);
}
function sx(e) {
	return ax(e, {}).translated;
}
function cx(e, t, n) {
	let { translated: r, isFallback: i } = ax(e, t), a = ux(r, t, n);
	return ox(i ? /* @__PURE__ */ (0, R.jsx)("span", {
		lang: "en",
		children: a
	}) : a, e);
}
function lx(e) {
	return e.replace(/%\(([^)]*)\)/g, "%\xA0($1)");
}
function ux(e, t, n) {
	let r = e;
	if (t !== void 0) {
		let e = {};
		for (let n in t) e[`%\\(${n}\\)s`] = t[n];
		r = dx(r, e);
	}
	if (n !== void 0) {
		let e = {};
		for (let t in n) e[`(<${t}>(.*?)<\\/${t}>|<${t}>|<${t}\\s*\\/>)`] = n[t];
		r = dx(r, e);
	}
	return r;
}
function dx(e, t) {
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
async function fx(e) {
	let t = await mx(), n = e in t ? e : "en", r = await px(Xb + t[n]);
	Yb.default.registerTranslations(n, r), Yb.default.setLocale(n);
}
async function px(e) {
	console.log("Loading language from", e);
	let t = await fetch(e, { method: "GET" });
	if (!t.ok) throw Error(`Failed to load ${e}, got ${t.status}`);
	return t.json();
}
async function mx() {
	let e = `${Xb}languages.json?${Date.now()}`, t = await fetch(e, { method: "GET" });
	if (!t.ok) throw Error(`Failed to load ${e}, got ${t.status}`);
	return t.json();
}
var hx = { scrollbar: "_scrollbar_1d5jg_8" };
//#endregion
//#region src/core/utils/Scrollbar/AutoHideScrollbar.ts
function gx(e) {
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
		className: (0, L.default)(hx.scrollbar, n),
		tabIndex: i ?? -1
	}, s);
}
//#endregion
//#region src/core/roving/RovingTabIndex.tsx
function _x(e) {
	return e instanceof Element && e.matches("input:not([type=\"radio\"]):not([type=\"checkbox\"]), textarea, select, [contenteditable=true]");
}
var vx = l({
	state: { nodes: [] },
	dispatch: () => {}
});
vx.displayName = "RovingTabIndexContext";
var yx = /* @__PURE__ */ function(e) {
	return e.Register = "REGISTER", e.Unregister = "UNREGISTER", e.SetFocus = "SET_FOCUS", e.Update = "UPDATE", e;
}({}), bx = /* @__PURE__ */ function(e) {
	return e.Home = "HOME", e.End = "END", e.ArrowLeft = "ARROW_LEFT", e.ArrowUp = "ARROW_UP", e.ArrowRight = "ARROW_RIGHT", e.ArrowDown = "ARROW_DOWN", e.Tab = "TAB", e;
}({}), xx = (e, t) => {
	if (e === t) return 0;
	let n = e.compareDocumentPosition(t);
	return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}, Sx = (e, t) => t >= e.length ? Dx(e, e.length - 1) : Ex(e, t) || Dx(e, t), Cx = (e, t) => {
	e.activeNode = Sx(e.nodes, t), document.activeElement === document.body && setTimeout(() => e.activeNode?.focus(), 0);
}, wx = (e, t) => {
	switch (t.type) {
		case "REGISTER": return e.activeNode ??= t.payload.node, e.nodes.includes(t.payload.node) ? e : (e.nodes.push(t.payload.node), e.nodes.sort(xx), { ...e });
		case "UNREGISTER": {
			let n = e.nodes.indexOf(t.payload.node);
			return n === -1 ? e : (e.nodes.splice(n, 1)[0] === e.activeNode && Cx(e, n), { ...e });
		}
		case "SET_FOCUS": return e.activeNode === t.payload.node ? e : (e.activeNode = t.payload.node, { ...e });
		case "UPDATE": return e.nodes.sort(xx), { ...e };
		default: return e;
	}
}, Tx = (e, t, n, r) => {
	if (r === 1) {
		for (let i = t; i < n; i += r) if (e[i]?.offsetParent !== null) return e[i];
	} else for (let i = t; i > n; i += r) if (e[i]?.offsetParent !== null) return e[i];
}, Ex = (e, t, n = !1) => {
	let r = Tx(e, t, e.length, 1);
	return r || !n ? r : Tx(e.slice(0, t), 0, t, 1);
}, Dx = (e, t, n = !1) => {
	let r = Tx(e, t, -1, -1);
	if (r || !n) return r;
	let i = e.slice(t + 1);
	return Tx(i, i.length - 1, -1, -1);
}, Ox = (e) => {
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
}, kx = (e, t, n, r = !1) => {
	if (e.length === 0 || !t) return;
	let i = e.indexOf(t) + (n ? -1 : 1);
	return n ? Dx(e, i, r) : Ex(e, i, r);
}, Ax = (e, t, n, r) => e === "TAB" ? {
	handled: !0,
	focusNode: kx(t, n, r)
} : { handled: !1 }, jx = (e, t, n, r, i) => ({
	HOME: {
		enabled: t,
		getFocusNode: (e) => Ex(e.nodes, 0)
	},
	END: {
		enabled: t,
		getFocusNode: (e) => Dx(e.nodes, e.nodes.length - 1)
	},
	ARROW_DOWN: {
		enabled: n,
		getFocusNode: (e) => kx(e.nodes, e.activeNode, !1, i)
	},
	ARROW_RIGHT: {
		enabled: r,
		getFocusNode: (e) => kx(e.nodes, e.activeNode, !1, i)
	},
	ARROW_UP: {
		enabled: n,
		getFocusNode: (e) => kx(e.nodes, e.activeNode, !0, i)
	},
	ARROW_LEFT: {
		enabled: r,
		getFocusNode: (e) => kx(e.nodes, e.activeNode, !0, i)
	},
	TAB: {
		enabled: !1,
		getFocusNode: () => void 0
	}
}), Mx = (e, t, n, r, i, a) => {
	if (!e) return { handled: !1 };
	let o = jx(t, n, r, i, a)[e];
	return o?.enabled ? {
		handled: !0,
		focusNode: o.getFocusNode(t)
	} : { handled: !1 };
}, Nx = ({ children: e, handleHomeEnd: t, handleUpDown: n, handleLeftRight: r, handleLoop: i, handleInputFields: a, scrollIntoView: o, onKeyDown: s, getAction: c = Ox }) => {
	let [l, u] = C(wx, { nodes: [] }), d = S(() => ({
		state: l,
		dispatch: u
	}), [l]), f = h((e) => {
		if (s && (s(e, d.state, d.dispatch), e.defaultPrevented)) return;
		let l = c(e), { handled: f, focusNode: p } = !a && _x(e.target) ? Ax(l, d.state.nodes, d.state.activeNode, e.shiftKey) : Mx(l, d.state, t ?? !1, n ?? !1, r ?? !1, i ?? !1);
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
	return /* @__PURE__ */ (0, R.jsx)(vx.Provider, {
		value: d,
		children: e({
			onKeyDownHandler: f,
			onDragEndHandler: p
		})
	});
}, Px = (e) => {
	let t = g(vx), n = w(null);
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
}, Fx = (e) => e.parentElement ?? void 0, Ix = (e) => {
	let t = e.children[0];
	return t instanceof HTMLElement ? t : void 0;
}, Lx = (e) => e === bx.ArrowLeft || e === bx.ArrowRight || e === bx.ArrowUp || e === bx.ArrowDown, Rx = (e, t, n) => {
	if (!t.activeNode) return;
	let r = t.nodes.indexOf(t.activeNode);
	if (r !== -1) {
		if (e === bx.ArrowLeft) return Dx(t.nodes, r - 1, n);
		if (e === bx.ArrowRight) return Ex(t.nodes, r + 1, n);
	}
}, zx = (e, t, n, r, i) => {
	if (!t.activeNode) return;
	let a = r(t.activeNode), o = n(t.activeNode);
	if (!a || !o) return;
	let s = Array.from(a.children).indexOf(o), c = t.nodes.indexOf(t.activeNode);
	if (s === -1 || c === -1) return;
	let l = e === bx.ArrowUp ? c - s - 1 : c - s + a.children.length, u = r(t.nodes[l]);
	if (u) {
		if (!(u instanceof HTMLElement) || u.offsetParent === null || u.children.length === 0) return;
		let e = Math.min(s, u.children.length - 1), n = i(u.children[e]);
		if (n?.offsetParent && t.nodes.includes(n)) return n;
	}
}, Bx = (e, t, n, r) => typeof e == "function" ? e(t, n, r) : e ?? !0, Vx = ({ children: e, getAction: t, getGridCell: n = Fx, getRow: r, getRovingNode: i = Ix, handleInputFields: a, handleLoop: o, moveFocus: s, onGridNavigation: c, onKeyDown: l, scrollIntoView: u, ...d }) => {
	let f = h((e) => r?.(e) ?? n(e)?.parentElement ?? void 0, [n, r]), p = h((e, r, d) => {
		if (l?.(e, r, d), e.defaultPrevented) return;
		let p = t?.(e) ?? Hx(e);
		if (!Lx(p) || !r.activeNode || !a && e.target instanceof HTMLElement && _x(e.target)) return;
		let m = p === bx.ArrowUp || p === bx.ArrowDown ? zx(p, r, n, f, i) : Rx(p, r, o);
		e.preventDefault(), e.stopPropagation(), m && (Bx(s, m, e, r) && m.focus(), d({
			type: yx.SetFocus,
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
	return /* @__PURE__ */ (0, R.jsx)(Nx, {
		...d,
		getAction: t,
		handleInputFields: a,
		handleLoop: o,
		onKeyDown: p,
		scrollIntoView: u,
		children: e
	});
}, Hx = (e) => {
	switch (e.key) {
		case "ArrowLeft": return bx.ArrowLeft;
		case "ArrowUp": return bx.ArrowUp;
		case "ArrowRight": return bx.ArrowRight;
		case "ArrowDown": return bx.ArrowDown;
		default: return;
	}
}, Ux = ({ children: e, inputRef: t }) => {
	let [n, r, i] = Px(t);
	return e({
		onFocus: n,
		isActive: r,
		ref: i
	});
}, Wx = (e) => {
	switch (e.key) {
		case "ArrowUp": return bx.ArrowUp;
		case "ArrowDown": return bx.ArrowDown;
		default: return;
	}
}, Gx = ({ children: e, ref: t, getAction: n, ...r }) => /* @__PURE__ */ (0, R.jsx)(Nx, {
	handleHomeEnd: !0,
	handleLeftRight: !0,
	handleUpDown: !0,
	onKeyDown: (e) => {
		let t = e.target;
		if (t.tagName === "INPUT") return;
		let r = !0;
		switch (n?.(e) ?? Wx(e)) {
			case bx.ArrowUp:
			case bx.ArrowDown:
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
}, Kx = (e) => {
	switch (e.key) {
		case "ArrowLeft": return bx.ArrowLeft;
		case "ArrowRight": return bx.ArrowRight;
		case "Home": return bx.Home;
		case "End": return bx.End;
		default: return;
	}
}, qx = ({ categories: e, enabledCategories: t, selectedCategory: n, onAnchorClick: r, pickerBodyId: i, getAction: a }) => {
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
		switch (a?.(t) ?? Kx(t)) {
			case bx.ArrowLeft:
				l(-1);
				break;
			case bx.ArrowRight:
				l(1);
				break;
			case bx.Home:
				c(0);
				break;
			case bx.End:
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
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/arrow-down.js
function Jx(e, t) {
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
Jx.displayName = "ArrowDownIcon";
var Yx = d(Jx);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/arrow-right.js
function Xx(e, t) {
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
Xx.displayName = "ArrowRightIcon";
var Zx = d(Xx);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/ask-to-join.js
function Qx(e, t) {
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
Qx.displayName = "AskToJoinIcon";
var $x = d(Qx);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/attachment.js
function eS(e, t) {
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
eS.displayName = "AttachmentIcon";
var tS = d(eS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/block.js
function nS(e, t) {
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
nS.displayName = "BlockIcon";
var rS = d(nS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/chat-problem.js
function iS(e, t) {
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
iS.displayName = "ChatProblemIcon";
var aS = d(iS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/chat.js
function oS(e, t) {
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
oS.displayName = "ChatIcon";
var sS = d(oS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/check-circle.js
function cS(e, t) {
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
cS.displayName = "CheckCircleIcon";
var lS = d(cS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/check.js
function uS(e, t) {
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
uS.displayName = "CheckIcon";
var dS = d(uS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-down.js
function fS(e, t) {
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
fS.displayName = "ChevronDownIcon";
var pS = d(fS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-left.js
function mS(e, t) {
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
mS.displayName = "ChevronLeftIcon";
var hS = d(mS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-right.js
function gS(e, t) {
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
gS.displayName = "ChevronRightIcon";
var _S = d(gS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-up.js
function vS(e, t) {
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
vS.displayName = "ChevronUpIcon";
var yS = d(vS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/close.js
function bS(e, t) {
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
bS.displayName = "CloseIcon";
var xS = d(bS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/collapse-all.js
function SS(e, t) {
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
SS.displayName = "CollapseAllIcon";
var CS = d(SS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/collapse.js
function wS(e, t) {
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
wS.displayName = "CollapseIcon";
var TS = d(wS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/delete.js
function ES(e, t) {
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
ES.displayName = "DeleteIcon";
var DS = d(ES);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/devices.js
function OS(e, t) {
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
OS.displayName = "DevicesIcon";
var kS = d(OS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/dial-pad.js
function AS(e, t) {
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
AS.displayName = "DialPadIcon";
var jS = d(AS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/download.js
function MS(e, t) {
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
MS.displayName = "DownloadIcon";
var NS = d(MS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/drag-list.js
function PS(e, t) {
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
PS.displayName = "DragListIcon";
var FS = d(PS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/edit.js
function IS(e, t) {
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
IS.displayName = "EditIcon";
var LS = d(IS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/email-solid.js
function RS(e, t) {
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
RS.displayName = "EmailSolidIcon";
var zS = d(RS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/error-solid.js
function BS(e, t) {
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
BS.displayName = "ErrorSolidIcon";
var VS = d(BS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/error.js
function HS(e, t) {
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
HS.displayName = "ErrorIcon";
var US = d(HS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/expand-all.js
function WS(e, t) {
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
WS.displayName = "ExpandAllIcon";
var GS = d(WS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/expand.js
function KS(e, t) {
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
KS.displayName = "ExpandIcon";
var qS = d(KS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/explore.js
function JS(e, t) {
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
JS.displayName = "ExploreIcon";
var YS = d(JS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/favourite.js
function XS(e, t) {
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
XS.displayName = "FavouriteIcon";
var ZS = d(XS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/file-error.js
function QS(e, t) {
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
QS.displayName = "FileErrorIcon";
var $S = d(QS);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/history.js
function eC(e, t) {
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
eC.displayName = "HistoryIcon";
var tC = d(eC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/home.js
function nC(e, t) {
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
nC.displayName = "HomeIcon";
var rC = d(nC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/image-error.js
function iC(e, t) {
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
iC.displayName = "ImageErrorIcon";
var aC = d(iC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/info.js
function oC(e, t) {
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
oC.displayName = "InfoIcon";
var sC = d(oC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/inline-code.js
function cC(e, t) {
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
cC.displayName = "InlineCodeIcon";
var lC = d(cC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/leave.js
function uC(e, t) {
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
uC.displayName = "LeaveIcon";
var dC = d(uC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/link.js
function fC(e, t) {
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
fC.displayName = "LinkIcon";
var pC = d(fC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/lock-solid.js
function mC(e, t) {
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
mC.displayName = "LockSolidIcon";
var hC = d(mC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/lock.js
function gC(e, t) {
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
gC.displayName = "LockIcon";
var _C = d(gC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/mark-as-read.js
function vC(e, t) {
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
vC.displayName = "MarkAsReadIcon";
var yC = d(vC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/mark-as-unread.js
function bC(e, t) {
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
bC.displayName = "MarkAsUnreadIcon";
var xC = d(bC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/mention.js
function SC(e, t) {
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
SC.displayName = "MentionIcon";
var CC = d(SC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/minus.js
function wC(e, t) {
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
wC.displayName = "MinusIcon";
var TC = d(wC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/notifications-off-solid.js
function EC(e, t) {
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
EC.displayName = "NotificationsOffSolidIcon";
var DC = d(EC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/notifications-solid.js
function OC(e, t) {
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
OC.displayName = "NotificationsSolidIcon";
var kC = d(OC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/overflow-horizontal.js
function AC(e, t) {
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
AC.displayName = "OverflowHorizontalIcon";
var jC = d(AC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/pin-solid.js
function MC(e, t) {
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
MC.displayName = "PinSolidIcon";
var NC = d(MC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/pin.js
function PC(e, t) {
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
PC.displayName = "PinIcon";
var FC = d(PC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/plus.js
function IC(e, t) {
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
IC.displayName = "PlusIcon";
var LC = d(IC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/preferences.js
function RC(e, t) {
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
RC.displayName = "PreferencesIcon";
var zC = d(RC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/reaction-add.js
function BC(e, t) {
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
BC.displayName = "ReactionAddIcon";
var VC = d(BC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/reaction.js
function HC(e, t) {
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
HC.displayName = "ReactionIcon";
var UC = d(HC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/reply.js
function WC(e, t) {
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
WC.displayName = "ReplyIcon";
var GC = d(WC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/restart.js
function KC(e, t) {
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
KC.displayName = "RestartIcon";
var qC = d(KC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/room.js
function JC(e, t) {
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
JC.displayName = "RoomIcon";
var YC = d(JC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/search.js
function XC(e, t) {
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
XC.displayName = "SearchIcon";
var ZC = d(XC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/section.js
function QC(e, t) {
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
QC.displayName = "SectionIcon";
var $C = d(QC);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/settings.js
function ew(e, t) {
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
ew.displayName = "SettingsIcon";
var tw = d(ew);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/threads-solid.js
function nw(e, t) {
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
nw.displayName = "ThreadsSolidIcon";
var rw = d(nw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/threads.js
function iw(e, t) {
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
iw.displayName = "ThreadsIcon";
var aw = d(iw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/unpin.js
function ow(e, t) {
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
ow.displayName = "UnpinIcon";
var sw = d(ow);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/user-add.js
function cw(e, t) {
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
cw.displayName = "UserAddIcon";
var lw = d(cw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/user-profile-solid.js
function uw(e, t) {
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
uw.displayName = "UserProfileSolidIcon";
var dw = d(uw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/video-call-declined-solid.js
function fw(e, t) {
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
fw.displayName = "VideoCallDeclinedSolidIcon";
var pw = d(fw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/video-call-solid.js
function mw(e, t) {
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
mw.displayName = "VideoCallSolidIcon";
var hw = d(mw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/video-call.js
function gw(e, t) {
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
gw.displayName = "VideoCallIcon";
var _w = d(gw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/visibility-off.js
function vw(e, t) {
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
vw.displayName = "VisibilityOffIcon";
var yw = d(vw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/visibility-on.js
function bw(e, t) {
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
bw.displayName = "VisibilityOnIcon";
var xw = d(bw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/voice-call-declined-solid.js
function Sw(e, t) {
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
Sw.displayName = "VoiceCallDeclinedSolidIcon";
var Cw = d(Sw);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/voice-call-solid.js
function ww(e, t) {
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
ww.displayName = "VoiceCallSolidIcon";
var Tw = d(ww);
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@https+++codeload.github.com+tchapgouv+compound-design_1f4dc31343a3b1622e93017a95ce3fb7/node_modules/@vector-im/compound-design-tokens/assets/web/icons/volume-on-solid.js
function Ew(e, t) {
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
Ew.displayName = "VolumeOnSolidIcon";
var Dw = d(Ew), Ow = ({ query: e, onChange: t, onEnter: n, onKeyDown: r, inputRef: i, controlsId: a }) => {
	let o = g(vx);
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
		children: /* @__PURE__ */ (0, R.jsx)(xS, {})
	}) : /* @__PURE__ */ (0, R.jsx)("span", {
		className: U.searchIcon,
		children: /* @__PURE__ */ (0, R.jsx)(ZC, {})
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
}, kw = ({ emoji: e }) => {
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
function Aw({ onClick: e, disabled: t, focusOnMouseOver: n, onFocus: r, onMouseOver: i, onKeyDown: a, onKeyUp: o, role: s = "button", children: c, ...l }) {
	let [u, d, f] = Px(), p = {
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
var jw = o.memo(function({ onClick: e, onMouseEnter: t, onMouseLeave: n, emoji: r, selectedEmojis: i, disabled: a, id: o, className: s }) {
	let c = i?.has(r.unicode), l = h(() => t(r), [t, r]), u = h(() => n(r), [n, r]);
	return /* @__PURE__ */ (0, R.jsx)(Aw, {
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
}), Mw = [
	"👍",
	"👎",
	"😄",
	"🎉",
	"😕",
	"❤️",
	"🚀",
	"👀"
].map((e) => {
	let t = je(e);
	if (!t) throw Error(`Emoji ${e} doesn't exist in emojibase`);
	return t;
}), Nw = ({ selectedEmojis: e, onClick: t, getAction: n }) => {
	let [r, i] = T(void 0), a = h((e) => {
		i(e);
	}, []), s = h(() => {
		i(void 0);
	}, []);
	return /* @__PURE__ */ (0, R.jsxs)("section", {
		className: (0, L.default)(U.footer, U.quick, U.category),
		children: [/* @__PURE__ */ (0, R.jsx)(le, {
			as: "h2",
			className: (0, L.default)(U.quickHeader, U.categoryLabel),
			children: r ? /* @__PURE__ */ (0, R.jsxs)(o.Fragment, { children: [/* @__PURE__ */ (0, R.jsx)("span", {
				className: U.name,
				children: r.label
			}), /* @__PURE__ */ (0, R.jsx)("span", {
				className: U.shortcode,
				children: r.shortcodes[0]
			})] }) : H("emoji|quick_reactions")
		}), /* @__PURE__ */ (0, R.jsx)(Gx, {
			className: U.list,
			"aria-label": H("emoji|quick_reactions"),
			getAction: n,
			children: Mw.map((n) => /* @__PURE__ */ (0, R.jsx)(jw, {
				emoji: n,
				onClick: t,
				onMouseEnter: a,
				onMouseLeave: s,
				selectedEmojis: e,
				className: U.itemWrapper
			}, n.hexcode))
		})]
	});
}, Pw = "‍", Fw = [
	{
		id: "recent",
		untranslatedName: nx("emoji|category_frequently_used"),
		emoji: "🕒"
	},
	{
		id: "people",
		untranslatedName: nx("emoji|category_smileys_people"),
		emoji: "😀"
	},
	{
		id: "nature",
		untranslatedName: nx("emoji|category_animals_nature"),
		emoji: "🐕"
	},
	{
		id: "foods",
		untranslatedName: nx("emoji|category_food_drink"),
		emoji: "🍎"
	},
	{
		id: "activity",
		untranslatedName: nx("emoji|category_activities"),
		emoji: "⚽️"
	},
	{
		id: "places",
		untranslatedName: nx("emoji|category_travel_places"),
		emoji: "🚗"
	},
	{
		id: "objects",
		untranslatedName: nx("emoji|category_objects"),
		emoji: "💡"
	},
	{
		id: "symbols",
		untranslatedName: nx("emoji|category_symbols"),
		emoji: "⁉️"
	},
	{
		id: "flags",
		untranslatedName: nx("emoji|category_flags"),
		emoji: "🏁"
	}
], Iw = {
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
function Lw(e) {
	return Array.from(new Set((e ?? []).map(je).filter((e) => !!e)));
}
function Rw(e, t) {
	return t.includes(Pw) && (t = t.split(Pw, 2)[0]), e.label.toLowerCase().includes(t) || (Array.isArray(e.emoticon) ? e.emoticon.some((e) => e.includes(t)) : e.emoticon?.includes(t)) || e.shortcodes.some((e) => e.toLowerCase().includes(t)) || e.unicode.split(Pw).includes(t);
}
function zw(e, t) {
	return t === "" ? e : e.filter((e) => Rw(e, t)).sort((e, n) => {
		let r = e.shortcodes[0].indexOf(t), i = n.shortcodes[0].indexOf(t);
		return r == -1 || i == -1 ? i - r : r == 0 && i == 0 ? e.shortcodes[0].length - n.shortcodes[0].length : r - i;
	});
}
function Bw({ selectedEmojis: e, onChoose: t, onFinished: n, isEmojiDisabled: r, recentEmojis: i, onRecordRecent: a, getAction: o, showQuickReactions: s = !0 }) {
	let [c, l] = T(""), [u, d] = T(void 0), [f, p] = T(!1), [m, g] = T(null), _ = w(null), y = w(null), b = S(() => Lw(i), [i]), x = c.toLowerCase().trim(), { dataByCategory: C, enabledCategories: ee } = S(() => {
		let e = {}, t = [];
		for (let n of Fw) {
			let r = zw(n.id === "recent" ? b : Ae[n.id], x);
			e[n.id] = r, r.length > 0 && t.push(n.id);
		}
		return {
			dataByCategory: e,
			enabledCategories: t
		};
	}, [x, b]), [te, E] = T(b.length > 0 ? "recent" : "people"), ne = h((e) => {
		g(e);
	}, []), D = S(() => {
		let e = [];
		for (let t of Fw) {
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
	}, [C]), O = h((e) => {
		let t = /* @__PURE__ */ new Set();
		for (let n = e.startIndex; n <= e.endIndex; n++) {
			let e = D[n];
			e && t.add(e.type === "header" ? e.category.id : e.categoryId);
		}
		E(Fw.find((e) => t.has(e.id))?.id ?? "people");
	}, [D]), k = h((e) => e?.parentElement ?? void 0, []), re = h((e) => k(e)?.parentElement ?? void 0, [k]), ie = h((e) => {
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
				type: yx.SetFocus,
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
		let t = D.findIndex((t) => t.type === "header" && t.category.id === e);
		t >= 0 && y.current?.scrollToIndex({
			index: t,
			align: "start"
		});
	}, [D]), ce = h((e) => {
		l(e), p(e.trim() !== "");
	}, []), ue = h(() => {
		f && ((m?.querySelector("[role=\"gridcell\"] [tabindex=\"0\"]"))?.click(), n());
	}, [
		f,
		m,
		n
	]), j = h((e) => {
		d(e);
	}, []), de = h(() => {
		d(void 0);
	}, []), fe = h((e, r) => {
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
				children: /* @__PURE__ */ (0, R.jsx)(le, {
					as: "h2",
					className: U.categoryLabel,
					children: H(e.untranslatedName)
				})
			});
		}
		return n.emojis.map((t) => /* @__PURE__ */ (0, R.jsx)("div", {
			role: "gridcell",
			className: U.itemWrapper,
			children: /* @__PURE__ */ (0, R.jsx)(jw, {
				id: `${pe}-${n.categoryId}-${t.hexcode}`,
				emoji: t,
				selectedEmojis: e,
				onClick: fe,
				onMouseEnter: j,
				onMouseLeave: de,
				disabled: r?.(t.unicode)
			})
		}, t.hexcode));
	}, [
		e,
		fe,
		j,
		de,
		r,
		pe
	]), he = v();
	return /* @__PURE__ */ (0, R.jsx)(Vx, {
		getGridCell: k,
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
				/* @__PURE__ */ (0, R.jsx)(qx, {
					categories: Fw,
					enabledCategories: ee,
					selectedCategory: te,
					onAnchorClick: se,
					pickerBodyId: he,
					getAction: o
				}),
				/* @__PURE__ */ (0, R.jsx)(Ow, {
					query: c,
					onChange: ce,
					onEnter: ue,
					onKeyDown: t,
					inputRef: _,
					controlsId: he
				}),
				/* @__PURE__ */ (0, R.jsx)(gx, {
					id: he,
					className: (0, L.default)(U.body, { [U.bodyShowHighlight]: f }),
					wrappedRef: ne,
					children: m && /* @__PURE__ */ (0, R.jsx)(Me, {
						ref: y,
						customScrollParent: m,
						data: D,
						defaultItemHeight: 35,
						components: Iw,
						itemContent: me,
						rangeChanged: O
					})
				}),
				s && (u ? /* @__PURE__ */ (0, R.jsx)(kw, { emoji: u }) : /* @__PURE__ */ (0, R.jsx)(Nw, {
					onClick: fe,
					selectedEmojis: e,
					getAction: o
				}))
			]
		})
	});
}
//#endregion
//#region src/core/FacePile/FacePileView.tsx
function Vw(e) {
	let { memberAvatarViewModels: t } = V(e.vm);
	return t.length === 0 ? null : /* @__PURE__ */ (0, R.jsx)(ne, {
		className: e.classNames,
		children: t.map((e) => /* @__PURE__ */ (0, R.jsx)(Ny, { vm: e }, e.getSnapshot().id))
	});
}
var Hw = {
	banner: "_banner_n7ud0_8",
	content: "_content_n7ud0_38",
	icon: "_icon_n7ud0_50",
	actions: "_actions_n7ud0_61"
};
//#endregion
//#region src/room/composer/Banner/Banner.tsx
function Uw({ type: e, children: t, avatar: n, className: r, actions: i, onClose: a, ...o }) {
	let s = (0, L.default)(Hw.banner, r), c = S(() => {
		switch (e) {
			case "critical": return /* @__PURE__ */ (0, R.jsx)(US, { fontSize: 24 });
			case "info": return /* @__PURE__ */ (0, R.jsx)(sC, { fontSize: 24 });
			case "success": return /* @__PURE__ */ (0, R.jsx)(lS, { fontSize: 24 });
			default: return /* @__PURE__ */ (0, R.jsx)(sC, { fontSize: 24 });
		}
	}, [e]);
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		...o,
		className: s,
		"data-type": e,
		children: [
			/* @__PURE__ */ (0, R.jsx)("div", {
				className: Hw.icon,
				children: n ?? c
			}),
			/* @__PURE__ */ (0, R.jsx)("div", {
				className: Hw.content,
				children: t
			}),
			/* @__PURE__ */ (0, R.jsxs)("div", {
				className: Hw.actions,
				children: [i, a && /* @__PURE__ */ (0, R.jsx)(O, {
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
function Ww({ vm: e, defaultOpen: t = !1, ...n }) {
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
			children: r ? /* @__PURE__ */ (0, R.jsx)(r, {}) : /* @__PURE__ */ (0, R.jsx)(tS, {})
		});
	}
	let c = /* @__PURE__ */ (0, R.jsx)(j, {
		...n,
		size: "26px",
		tooltip: r.translate("common|attachment"),
		onClick: s,
		title: r.translate("common|attachment"),
		children: /* @__PURE__ */ (0, R.jsx)(tS, {})
	});
	return /* @__PURE__ */ (0, R.jsx)(he, {
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
var Gw = {
	wrapper: "_wrapper_i5vq9_8",
	collapsed: "_collapsed_i5vq9_14",
	left: "_left_i5vq9_18",
	right: "_right_i5vq9_22",
	spanLike: "_spanLike_i5vq9_26",
	summary: "_summary_i5vq9_36",
	summaryIcon: "_summaryIcon_i5vq9_47",
	summaryIconFailed: "_summaryIconFailed_i5vq9_87",
	summaryIconLoading: "_summaryIconLoading_i5vq9_91",
	linkCount: "_linkCount_i5vq9_95",
	clearAll: "_clearAll_i5vq9_101",
	collapse: "_collapse_i5vq9_14",
	container: "_container_i5vq9_134",
	text: "_text_i5vq9_150",
	linkSiteName: "_linkSiteName_i5vq9_161",
	linkTitle: "_linkTitle_i5vq9_165",
	removePreview: "_removePreview_i5vq9_175",
	entryIcon: "_entryIcon_i5vq9_187",
	loadingSpinner: "_loadingSpinner_i5vq9_188",
	failedIcon: "_failedIcon_i5vq9_189"
}, Kw = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", qw = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Jw = "numeric", Yw = "ascii", Xw = "alpha", Zw = "asciinumeric", Qw = "alphanumeric", $w = "domain", eT = "emoji", tT = "scheme", nT = "slashscheme", rT = "whitespace";
function iT(e, t) {
	return e in t || (t[e] = []), t[e];
}
function aT(e, t, n) {
	t[Jw] && (t[Zw] = !0, t[Qw] = !0), t[Yw] && (t[Zw] = !0, t[Xw] = !0), t[Zw] && (t[Qw] = !0), t[Xw] && (t[Qw] = !0), t[Qw] && (t[$w] = !0), t[eT] && (t[$w] = !0);
	for (let r in t) {
		let t = iT(r, n);
		t.indexOf(e) < 0 && t.push(e);
	}
}
function oT(e, t) {
	let n = {};
	for (let r in t) t[r].indexOf(e) >= 0 && (n[r] = !0);
	return n;
}
function sT(e = null) {
	this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
sT.groups = {}, sT.prototype = {
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
		r ||= sT.groups;
		let i;
		return t && t.j ? i = t : (i = new sT(t), n && r && aT(t, n, r)), this.jr.push([e, i]), i;
	},
	ts(e, t, n, r) {
		let i = this, a = e.length;
		if (!a) return i;
		for (let t = 0; t < a - 1; t++) i = i.tt(e[t]);
		return i.tt(e[a - 1], t, n, r);
	},
	tt(e, t, n, r) {
		r ||= sT.groups;
		let i = this;
		if (t && t.j) return i.j[e] = t, t;
		let a = t, o, s = i.go(e);
		return s ? (o = new sT(), Object.assign(o.j, s.j), o.jr.push.apply(o.jr, s.jr), o.jd = s.jd, o.t = s.t) : o = new sT(), a && (r && (o.t && typeof o.t == "string" ? aT(a, Object.assign(oT(o.t, r), n), r) : n && aT(a, n, r)), o.t = a), i.j[e] = o, o;
	}
};
var W = (e, t, n, r, i) => e.ta(t, n, r, i), cT = (e, t, n, r, i) => e.tr(t, n, r, i), lT = (e, t, n, r, i) => e.ts(t, n, r, i), G = (e, t, n, r, i) => e.tt(t, n, r, i), uT = "WORD", dT = "UWORD", fT = "ASCIINUMERICAL", pT = "ALPHANUMERICAL", mT = "LOCALHOST", hT = "TLD", gT = "UTLD", _T = "SCHEME", vT = "SLASH_SCHEME", yT = "NUM", bT = "WS", xT = "NL", ST = "OPENBRACE", CT = "CLOSEBRACE", wT = "OPENBRACKET", TT = "CLOSEBRACKET", ET = "OPENPAREN", DT = "CLOSEPAREN", OT = "OPENANGLEBRACKET", kT = "CLOSEANGLEBRACKET", AT = "FULLWIDTHLEFTPAREN", jT = "FULLWIDTHRIGHTPAREN", MT = "LEFTCORNERBRACKET", NT = "RIGHTCORNERBRACKET", PT = "LEFTWHITECORNERBRACKET", FT = "RIGHTWHITECORNERBRACKET", IT = "FULLWIDTHLESSTHAN", LT = "FULLWIDTHGREATERTHAN", RT = "AMPERSAND", zT = "APOSTROPHE", BT = "ASTERISK", VT = "AT", HT = "BACKSLASH", UT = "BACKTICK", WT = "CARET", GT = "COLON", KT = "COMMA", qT = "DOLLAR", JT = "DOT", YT = "EQUALS", XT = "EXCLAMATION", ZT = "HYPHEN", QT = "PERCENT", $T = "PIPE", eE = "PLUS", tE = "POUND", nE = "QUERY", rE = "QUOTE", iE = "FULLWIDTHMIDDLEDOT", aE = "SEMI", oE = "SLASH", sE = "TILDE", cE = "UNDERSCORE", lE = "EMOJI", uE = "SYM", dE = /*#__PURE__*/ Object.freeze({
	__proto__: null,
	ALPHANUMERICAL: pT,
	AMPERSAND: RT,
	APOSTROPHE: zT,
	ASCIINUMERICAL: fT,
	ASTERISK: BT,
	AT: VT,
	BACKSLASH: HT,
	BACKTICK: UT,
	CARET: WT,
	CLOSEANGLEBRACKET: kT,
	CLOSEBRACE: CT,
	CLOSEBRACKET: TT,
	CLOSEPAREN: DT,
	COLON: GT,
	COMMA: KT,
	DOLLAR: qT,
	DOT: JT,
	EMOJI: lE,
	EQUALS: YT,
	EXCLAMATION: XT,
	FULLWIDTHGREATERTHAN: LT,
	FULLWIDTHLEFTPAREN: AT,
	FULLWIDTHLESSTHAN: IT,
	FULLWIDTHMIDDLEDOT: iE,
	FULLWIDTHRIGHTPAREN: jT,
	HYPHEN: ZT,
	LEFTCORNERBRACKET: MT,
	LEFTWHITECORNERBRACKET: PT,
	LOCALHOST: mT,
	NL: xT,
	NUM: yT,
	OPENANGLEBRACKET: OT,
	OPENBRACE: ST,
	OPENBRACKET: wT,
	OPENPAREN: ET,
	PERCENT: QT,
	PIPE: $T,
	PLUS: eE,
	POUND: tE,
	QUERY: nE,
	QUOTE: rE,
	RIGHTCORNERBRACKET: NT,
	RIGHTWHITECORNERBRACKET: FT,
	SCHEME: _T,
	SEMI: aE,
	SLASH: oE,
	SLASH_SCHEME: vT,
	SYM: uE,
	TILDE: sE,
	TLD: hT,
	UNDERSCORE: cE,
	UTLD: gT,
	UWORD: dT,
	WORD: uT,
	WS: bT
}), fE = /[a-z]/, pE = /\p{L}/u, mE = /\p{Emoji}/u, hE = /\d/, gE = /\s/, _E = "\r", vE = "\n", yE = "️", bE = "‍", xE = "￼", SE = null, CE = null;
function wE(e = []) {
	let t = {};
	sT.groups = t;
	let n = new sT();
	SE ??= OE(Kw), CE ??= OE(qw), G(n, "'", zT), G(n, "{", ST), G(n, "}", CT), G(n, "[", wT), G(n, "]", TT), G(n, "(", ET), G(n, ")", DT), G(n, "<", OT), G(n, ">", kT), G(n, "（", AT), G(n, "）", jT), G(n, "「", MT), G(n, "」", NT), G(n, "『", PT), G(n, "』", FT), G(n, "＜", IT), G(n, "＞", LT), G(n, "&", RT), G(n, "*", BT), G(n, "@", VT), G(n, "`", UT), G(n, "^", WT), G(n, ":", GT), G(n, ",", KT), G(n, "$", qT), G(n, ".", JT), G(n, "=", YT), G(n, "!", XT), G(n, "-", ZT), G(n, "%", QT), G(n, "|", $T), G(n, "+", eE), G(n, "#", tE), G(n, "?", nE), G(n, "\"", rE), G(n, "/", oE), G(n, ";", aE), G(n, "~", sE), G(n, "_", cE), G(n, "\\", HT), G(n, "・", iE);
	let r = cT(n, hE, yT, { [Jw]: !0 });
	cT(r, hE, r);
	let i = cT(r, fE, fT, { [Zw]: !0 }), a = cT(r, pE, pT, { [Qw]: !0 }), o = cT(n, fE, uT, { [Yw]: !0 });
	cT(o, hE, i), cT(o, fE, o), cT(i, hE, i), cT(i, fE, i);
	let s = cT(n, pE, dT, { [Xw]: !0 });
	cT(s, fE), cT(s, hE, a), cT(s, pE, s), cT(a, hE, a), cT(a, fE), cT(a, pE, a);
	let c = G(n, vE, xT, { [rT]: !0 }), l = G(n, _E, bT, { [rT]: !0 }), u = cT(n, gE, bT, { [rT]: !0 });
	G(n, xE, u), G(l, vE, c), G(l, xE, u), cT(l, gE, u), G(u, _E), G(u, vE), cT(u, gE, u), G(u, xE, u);
	let d = cT(n, mE, lE, { [eT]: !0 });
	G(d, "#"), cT(d, mE, d), G(d, yE, d);
	let f = G(d, bE);
	G(f, "#"), cT(f, mE, d);
	let p = [[fE, o], [hE, i]], m = [
		[fE, null],
		[pE, s],
		[hE, a]
	];
	for (let e = 0; e < SE.length; e++) DE(n, SE[e], hT, uT, p);
	for (let e = 0; e < CE.length; e++) DE(n, CE[e], gT, dT, m);
	aT(hT, {
		tld: !0,
		ascii: !0
	}, t), aT(gT, {
		utld: !0,
		alpha: !0
	}, t), DE(n, "file", _T, uT, p), DE(n, "mailto", _T, uT, p), DE(n, "http", vT, uT, p), DE(n, "https", vT, uT, p), DE(n, "ftp", vT, uT, p), DE(n, "ftps", vT, uT, p), aT(_T, {
		scheme: !0,
		ascii: !0
	}, t), aT(vT, {
		slashscheme: !0,
		ascii: !0
	}, t), e = e.sort((e, t) => e[0] > t[0] ? 1 : -1);
	for (let t = 0; t < e.length; t++) {
		let r = e[t][0], i = e[t][1] ? { [tT]: !0 } : { [nT]: !0 };
		r.indexOf("-") >= 0 ? i[$w] = !0 : fE.test(r) ? hE.test(r) ? i[Zw] = !0 : i[Yw] = !0 : i[Jw] = !0, lT(n, r, r, i);
	}
	return lT(n, "localhost", mT, { ascii: !0 }), n.jd = new sT(uE), {
		start: n,
		tokens: Object.assign({ groups: t }, dE)
	};
}
function TE(e, t) {
	let n = EE(t.replace(/[A-Z]/g, (e) => e.toLowerCase())), r = n.length, i = [], a = 0, o = 0;
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
function EE(e) {
	let t = [], n = e.length, r = 0;
	for (; r < n;) {
		let i = e.charCodeAt(r), a, o = i < 55296 || i > 56319 || r + 1 === n || (a = e.charCodeAt(r + 1)) < 56320 || a > 57343 ? e[r] : e.slice(r, r + 2);
		t.push(o), r += o.length;
	}
	return t;
}
function DE(e, t, n, r, i) {
	let a, o = t.length;
	for (let n = 0; n < o - 1; n++) {
		let o = t[n];
		e.j[o] ? a = e.j[o] : (a = new sT(r), a.jr = i.slice(), e.j[o] = a), e = a;
	}
	return a = new sT(n), a.jr = i.slice(), e.j[t[o - 1]] = a, a;
}
function OE(e) {
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
var kE = {
	defaultProtocol: "http",
	events: null,
	format: jE,
	formatHref: jE,
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
function AE(e, t = null) {
	let n = Object.assign({}, kE);
	e && (n = Object.assign(n, e instanceof AE ? e.o : e));
	let r = n.ignoreTags, i = [];
	for (let e = 0; e < r.length; e++) i.push(r[e].toUpperCase());
	this.o = n, t && (this.defaultRender = t), this.ignoreTags = i;
}
AE.prototype = {
	o: kE,
	ignoreTags: [],
	defaultRender(e) {
		return e;
	},
	check(e) {
		return this.get("validate", e.toString(), e);
	},
	get(e, t, n) {
		let r = t != null, i = this.o[e];
		return i && (typeof i == "object" ? (i = n.t in i ? i[n.t] : kE[e], typeof i == "function" && r && (i = i(t, n))) : typeof i == "function" && r && (i = i(t, n.t, n)), i);
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
function jE(e) {
	return e;
}
function ME(e, t) {
	this.t = "token", this.v = e, this.tk = t;
}
ME.prototype = {
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
	toObject(e = kE.defaultProtocol) {
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
function NE(e, t) {
	class n extends ME {
		constructor(t, n) {
			super(t, n), this.t = e;
		}
	}
	for (let e in t) n.prototype[e] = t[e];
	return n.t = e, n;
}
var PE = NE("email", {
	isLink: !0,
	toHref() {
		return "mailto:" + this.toString();
	}
}), FE = NE("text"), IE = NE("nl"), LE = NE("url", {
	isLink: !0,
	toHref(e = kE.defaultProtocol) {
		return this.hasProtocol() ? this.v : `${e}://${this.v}`;
	},
	hasProtocol() {
		let e = this.tk;
		return e.length >= 2 && e[0].t !== mT && e[1].t === GT;
	}
}), RE = (e) => new sT(e);
function zE({ groups: e }) {
	let t = e.domain.concat([
		RT,
		BT,
		VT,
		HT,
		UT,
		WT,
		qT,
		YT,
		ZT,
		yT,
		QT,
		$T,
		eE,
		tE,
		oE,
		uE,
		sE,
		cE
	]), n = [
		zT,
		GT,
		KT,
		JT,
		XT,
		QT,
		nE,
		rE,
		aE,
		OT,
		kT,
		ST,
		CT,
		TT,
		wT,
		ET,
		DT,
		AT,
		jT,
		MT,
		NT,
		PT,
		FT,
		IT,
		LT
	], r = [
		RT,
		zT,
		BT,
		HT,
		UT,
		WT,
		qT,
		YT,
		ZT,
		ST,
		CT,
		QT,
		$T,
		eE,
		tE,
		nE,
		oE,
		uE,
		sE,
		cE
	], i = RE(), a = G(i, sE);
	W(a, r, a), W(a, e.domain, a);
	let o = RE(), s = RE(), c = RE();
	W(i, e.domain, o), W(i, e.scheme, s), W(i, e.slashscheme, c), W(o, r, a), W(o, e.domain, o);
	let l = G(o, VT);
	G(a, VT, l), G(s, VT, l), G(c, VT, l);
	let u = G(a, JT);
	W(u, r, a), W(u, e.domain, a);
	let d = RE();
	W(l, e.domain, d), W(d, e.domain, d);
	let f = G(d, JT);
	W(f, e.domain, d);
	let p = RE(PE);
	W(f, e.tld, p), W(f, e.utld, p), G(l, mT, p);
	let m = G(d, ZT);
	G(m, ZT, m), W(m, e.domain, d), W(p, e.domain, d), G(p, JT, f), G(p, ZT, m);
	let h = G(o, ZT), g = G(o, JT);
	G(h, ZT, h), W(h, e.domain, o), W(g, r, a), W(g, e.domain, o);
	let _ = RE(LE);
	W(g, e.tld, _), W(g, e.utld, _), W(_, e.domain, o), W(_, r, a), G(_, JT, g), G(_, ZT, h), G(_, VT, l);
	let v = G(_, GT), y = RE(LE);
	W(v, e.numeric, y);
	let b = RE(LE), x = RE();
	W(b, t, b), W(b, n, x), W(x, t, b), W(x, n, x), G(_, oE, b), G(y, oE, b);
	let S = G(s, GT), C = G(G(G(c, GT), oE), oE);
	W(s, e.domain, o), G(s, JT, g), G(s, ZT, h), W(c, e.domain, o), G(c, JT, g), G(c, ZT, h), W(S, e.domain, b), G(S, oE, b), G(S, nE, b), W(C, e.domain, b), W(C, t, b), G(C, oE, b);
	let w = [
		[ST, CT],
		[wT, TT],
		[ET, DT],
		[OT, kT],
		[AT, jT],
		[MT, NT],
		[PT, FT],
		[IT, LT]
	];
	for (let e = 0; e < w.length; e++) {
		let [r, i] = w[e], a = G(b, r);
		G(x, r, a);
		let o = RE(LE);
		W(a, t, o);
		let s = RE();
		W(a, n, s), G(a, i, b), W(o, t, o), W(o, n, s), W(s, t, o), W(s, n, s), G(o, i, b), G(s, i, b);
	}
	return G(i, mT, _), G(i, xT, IE), {
		start: i,
		tokens: dE
	};
}
function BE(e, t, n) {
	let r = n.length, i = 0, a = [], o = [];
	for (; i < r;) {
		let s = e, c = null, l = null, u = 0, d = null, f = -1;
		for (; i < r && !(c = s.go(n[i].t));) o.push(n[i++]);
		for (; i < r && (l = c || s.go(n[i].t));) c = null, s = l, s.accepts() ? (f = 0, d = s) : f >= 0 && f++, i++, u++;
		if (f < 0) i -= u, i < r && (o.push(n[i]), i++);
		else {
			o.length > 0 && (a.push(VE(FE, t, o)), o = []), i -= f, u -= f;
			let e = d.t, r = n.slice(i - u, i);
			a.push(VE(e, t, r));
		}
	}
	return o.length > 0 && a.push(VE(FE, t, o)), a;
}
function VE(e, t, n) {
	let r = n[0].s, i = n[n.length - 1].e;
	return new e(t.slice(r, i), n);
}
var HE = typeof console < "u" && console && console.warn || (() => {}), UE = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", WE = {
	scanner: null,
	parser: null,
	tokenQueue: [],
	pluginQueue: [],
	customSchemes: [],
	initialized: !1
};
function GE(e, t) {
	if (typeof t != "function") throw Error(`linkifyjs: Invalid plugin ${t} (expects function)`);
	for (let n = 0; n < WE.pluginQueue.length; n++) if (e === WE.pluginQueue[n][0]) {
		HE(`linkifyjs: plugin "${e}" already registered - will be overwritten`), WE.pluginQueue[n] = [e, t];
		return;
	}
	WE.pluginQueue.push([e, t]), WE.initialized && HE(`linkifyjs: already initialized - will not register plugin "${e}" ${UE}`);
}
function KE(e, t = !1) {
	if (WE.initialized && HE(`linkifyjs: already initialized - will not register custom scheme "${e}" ${UE}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(e)) throw Error("linkifyjs: incorrect scheme format.\n1. Must only contain digits, lowercase ASCII letters or \"-\"\n2. Cannot start or end with \"-\"\n3. \"-\" cannot repeat");
	WE.customSchemes.push([e, t]);
}
function qE() {
	WE.scanner = wE(WE.customSchemes);
	for (let e = 0; e < WE.tokenQueue.length; e++) WE.tokenQueue[e][1]({ scanner: WE.scanner });
	WE.parser = zE(WE.scanner.tokens);
	for (let e = 0; e < WE.pluginQueue.length; e++) WE.pluginQueue[e][1]({
		scanner: WE.scanner,
		parser: WE.parser
	});
	return WE.initialized = !0, WE;
}
function JE(e) {
	return WE.initialized || qE(), BE(WE.parser.start, e, TE(WE.scanner.start, e));
}
JE.scan = TE;
function YE(e, t = null, n = null) {
	if (t && typeof t == "object") {
		if (n) throw Error(`linkifyjs: Invalid link type ${t}; must be a string`);
		n = t, t = null;
	}
	let r = new AE(n), i = JE(e), a = [];
	for (let e = 0; e < i.length; e++) {
		let n = i[e];
		n.isLink && (!t || n.t === t) && r.check(n) && a.push(n.toFormattedObject(r));
	}
	return a;
}
function XE(e, t = null) {
	let n = JE(e);
	return n.length === 1 && n[0].isLink && (!t || n[0].t === t);
}
//#endregion
//#region ../../node_modules/.pnpm/linkify-react@4.3.3_linkifyjs@4.3.3_react@19.2.8/node_modules/linkify-react/dist/linkify-react.mjs
function ZE(e, t, n) {
	let r = JE(e), i = [];
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
function QE(e, t, n) {
	if (a.Children.count(e.props.children) === 0) return e;
	let r = [];
	a.Children.forEach(e.props.children, (e) => {
		typeof e == "string" ? r.push.apply(r, ZE(e, t, n)) : a.isValidElement(e) ? typeof e.type == "string" && t.ignoreTags.indexOf(e.type.toUpperCase()) >= 0 ? r.push(e) : r.push(QE(e, t, n)) : r.push(e);
	});
	let i = `__linkify-el-${n.elementId++}`, o = Object.assign({ key: i }, e.props);
	return a.cloneElement(e, o, r);
}
var $E = (e) => {
	let t = 0, n = ({ tagName: e, attributes: n, content: r }) => (n.key = `__linkify-lnk-${t++}`, n.class && (n.className = n.class, delete n.class), a.createElement(e, n, r)), r = { key: "__linkify-wrapper" };
	for (let t in e) t !== "options" && t !== "as" && t !== "tagName" && t !== "children" && (r[t] = e[t]);
	let i = new AE(e.options, n), o = e.as || e.tagName || a.Fragment || "span", s = e.children;
	return QE(a.createElement(o, r, s), i, { elementId: 0 });
}, eD = { container: "_container_15awj_8" };
//#endregion
//#region ../../node_modules/.pnpm/linkify-string@4.3.3_linkifyjs@4.3.3/node_modules/linkify-string/dist/linkify-string.mjs
function tD(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function nD(e) {
	return e.replace(/"/g, "&quot;");
}
function rD(e) {
	let t = [];
	for (let n in e) {
		let r = e[n] + "";
		t.push(`${n}="${nD(r)}"`);
	}
	return t.join(" ");
}
function iD({ tagName: e, attributes: t, content: n }) {
	return `<${e} ${rD(t)}>${tD(n)}</${e}>`;
}
function aD(e, t = {}) {
	t = new AE(t, iD);
	let n = JE(e), r = [];
	for (let e = 0; e < n.length; e++) {
		let i = n[e];
		i.t === "nl" && t.get("nl2br") ? r.push("<br>\n") : !i.isLink || !t.check(i) ? r.push(tD(i.toString())) : r.push(t.render(i));
	}
	return r.join("");
}
String.prototype.linkify || Object.defineProperty(String.prototype, "linkify", {
	writable: !1,
	value: function(e) {
		return aD(this, e);
	}
});
//#endregion
//#region ../../node_modules/.pnpm/linkify-html@4.3.3_patch_hash=1761c1eabe25d9fae83f74f27a20b3d24515840a4a8747bb04828df46bcfdea2_linkifyjs@4.3.3/node_modules/linkify-html/dist/linkify-html.mjs
var oD = {
	amp: "&",
	gt: ">",
	lt: "<",
	nbsp: "\xA0",
	quot: "\""
}, sD = /^#[xX]([A-Fa-f0-9]+)$/, cD = /^#([0-9]+)$/, lD = /^([A-Za-z0-9]+)$/, uD = function() {
	function e(e) {
		this.named = e;
	}
	return e.prototype.parse = function(e) {
		if (e) {
			var t = e.match(sD);
			if (t) return String.fromCharCode(parseInt(t[1], 16));
			if (t = e.match(cD), t) return String.fromCharCode(parseInt(t[1], 10));
			if (t = e.match(lD), t) return this.named[t[1]] || "&" + t[1] + ";";
		}
	}, e;
}(), dD = /[\t\n\f ]/, fD = /[A-Za-z]/, pD = /\r\n?/g;
function mD(e) {
	return dD.test(e);
}
function hD(e) {
	return fD.test(e);
}
function gD(e) {
	return e.replace(pD, "\n");
}
var _D = function() {
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
				e === "!" ? this.transitionTo("markupDeclarationOpen") : e === "/" ? this.transitionTo("endTagOpen") : (e === "@" || e === ":" || hD(e)) && (this.transitionTo("tagName"), this.tagNameBuffer = "", this.delegate.beginStartTag(), this.appendToTagName(e));
			},
			markupDeclarationOpen: function() {
				var e = this.consume();
				e === "-" && this.peek() === "-" ? (this.consume(), this.transitionTo("commentStart"), this.delegate.beginComment()) : e.toUpperCase() + this.input.substring(this.index, this.index + 6).toUpperCase() === "DOCTYPE" && (this.consume(), this.consume(), this.consume(), this.consume(), this.consume(), this.consume(), this.transitionTo("doctype"), this.delegate.beginDoctype && this.delegate.beginDoctype());
			},
			doctype: function() {
				mD(this.consume()) && this.transitionTo("beforeDoctypeName");
			},
			beforeDoctypeName: function() {
				var e = this.consume();
				mD(e) || (this.transitionTo("doctypeName"), this.delegate.appendToDoctypeName && this.delegate.appendToDoctypeName(e.toLowerCase()));
			},
			doctypeName: function() {
				var e = this.consume();
				mD(e) ? this.transitionTo("afterDoctypeName") : e === ">" ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : this.delegate.appendToDoctypeName && this.delegate.appendToDoctypeName(e.toLowerCase());
			},
			afterDoctypeName: function() {
				var e = this.consume();
				if (!mD(e)) {
					if (e === ">") this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData");
					else {
						var t = e.toUpperCase() + this.input.substring(this.index, this.index + 5).toUpperCase(), n = t.toUpperCase() === "PUBLIC", r = t.toUpperCase() === "SYSTEM";
						(n || r) && (this.consume(), this.consume(), this.consume(), this.consume(), this.consume(), this.consume()), n ? this.transitionTo("afterDoctypePublicKeyword") : r && this.transitionTo("afterDoctypeSystemKeyword");
					}
				}
			},
			afterDoctypePublicKeyword: function() {
				var e = this.peek();
				if (mD(e)) this.transitionTo("beforeDoctypePublicIdentifier"), this.consume();
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
				mD(e) ? this.transitionTo("betweenDoctypePublicAndSystemIdentifiers") : e === ">" ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : e === "\"" ? this.transitionTo("doctypeSystemIdentifierDoubleQuoted") : e === "'" && this.transitionTo("doctypeSystemIdentifierSingleQuoted");
			},
			betweenDoctypePublicAndSystemIdentifiers: function() {
				var e = this.consume();
				mD(e) || (e === ">" ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : e === "\"" ? this.transitionTo("doctypeSystemIdentifierDoubleQuoted") : e === "'" && this.transitionTo("doctypeSystemIdentifierSingleQuoted"));
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
				mD(e) || e === ">" && (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData"));
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
				mD(e) ? this.transitionTo("beforeAttributeName") : e === "/" ? this.transitionTo("selfClosingStartTag") : e === ">" ? (this.delegate.finishTag(), this.transitionTo("beforeData")) : this.appendToTagName(e);
			},
			endTagName: function() {
				var e = this.consume();
				mD(e) ? (this.transitionTo("beforeAttributeName"), this.tagNameBuffer = "") : e === "/" ? (this.transitionTo("selfClosingStartTag"), this.tagNameBuffer = "") : e === ">" ? (this.delegate.finishTag(), this.transitionTo("beforeData"), this.tagNameBuffer = "") : this.appendToTagName(e);
			},
			beforeAttributeName: function() {
				var e = this.peek();
				if (mD(e)) {
					this.consume();
					return;
				}
				e === "/" ? (this.transitionTo("selfClosingStartTag"), this.consume()) : e === ">" ? (this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : e === "=" ? (this.delegate.reportSyntaxError("attribute name cannot start with equals sign"), this.transitionTo("attributeName"), this.delegate.beginAttribute(), this.consume(), this.delegate.appendToAttributeName(e)) : (this.transitionTo("attributeName"), this.delegate.beginAttribute());
			},
			attributeName: function() {
				var e = this.peek();
				mD(e) ? (this.transitionTo("afterAttributeName"), this.consume()) : e === "/" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("selfClosingStartTag")) : e === "=" ? (this.transitionTo("beforeAttributeValue"), this.consume()) : e === ">" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : e === "\"" || e === "'" || e === "<" ? (this.delegate.reportSyntaxError(e + " is not a valid character within attribute names"), this.consume(), this.delegate.appendToAttributeName(e)) : (this.consume(), this.delegate.appendToAttributeName(e));
			},
			afterAttributeName: function() {
				var e = this.peek();
				if (mD(e)) {
					this.consume();
					return;
				}
				e === "/" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("selfClosingStartTag")) : e === "=" ? (this.consume(), this.transitionTo("beforeAttributeValue")) : e === ">" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.transitionTo("attributeName"), this.delegate.beginAttribute(), this.consume(), this.delegate.appendToAttributeName(e));
			},
			beforeAttributeValue: function() {
				var e = this.peek();
				mD(e) ? this.consume() : e === "\"" ? (this.transitionTo("attributeValueDoubleQuoted"), this.delegate.beginAttributeValue(!0), this.consume()) : e === "'" ? (this.transitionTo("attributeValueSingleQuoted"), this.delegate.beginAttributeValue(!0), this.consume()) : e === ">" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : (this.transitionTo("attributeValueUnquoted"), this.delegate.beginAttributeValue(!1), this.consume(), this.delegate.appendToAttributeValue(e));
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
				mD(e) ? (this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("beforeAttributeName")) : e === "/" ? (this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("selfClosingStartTag")) : e === "&" ? (this.consume(), this.delegate.appendToAttributeValue(this.consumeCharRef() || "&")) : e === ">" ? (this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : (this.consume(), this.delegate.appendToAttributeValue(e));
			},
			afterAttributeValueQuoted: function() {
				var e = this.peek();
				mD(e) ? (this.consume(), this.transitionTo("beforeAttributeName")) : e === "/" ? (this.consume(), this.transitionTo("selfClosingStartTag")) : e === ">" ? (this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : this.transitionTo("beforeAttributeName");
			},
			selfClosingStartTag: function() {
				this.peek() === ">" ? (this.consume(), this.delegate.markTagAsSelfClosing(), this.delegate.finishTag(), this.transitionTo("beforeData")) : this.transitionTo("beforeAttributeName");
			},
			endTagOpen: function() {
				var e = this.consume();
				(e === "@" || e === ":" || hD(e)) && (this.transitionTo("endTagName"), this.tagNameBuffer = "", this.delegate.beginEndTag(), this.appendToTagName(e));
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
		for (this.input += gD(e); this.index < this.input.length;) {
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
}(), vD = function() {
	function e(e, t) {
		t === void 0 && (t = {}), this.options = t, this.token = null, this.startLine = 1, this.startColumn = 0, this.tokens = [], this.tokenizer = new _D(this, e, t.mode), this._currentAttribute = void 0;
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
function yD(e, t) {
	return new vD(new uD(oD), t).tokenize(e);
}
var bD = "LinkifyResult", xD = "StartTag", SD = "EndTag", CD = "Chars", wD = "Comment", TD = "Doctype";
function ED(e, t = {}) {
	let n = yD(e), r = [], i = [], a = new AE(t, kD);
	for (let e = 0; e < n.length; e++) {
		let t = n[e];
		if (t.type === xD) {
			r.push(t);
			let i = t.tagName.toUpperCase();
			if (!(i === "A" || a.ignoreTags.indexOf(i) >= 0)) continue;
			let o = r.length;
			OD(i, n, ++e, r), e += r.length - o - 1;
		} else if (t.type !== CD) r.push(t);
		else {
			let e = DD(t.chars, a);
			r.push.apply(r, e);
		}
	}
	for (let e = 0; e < r.length; e++) {
		let t = r[e];
		switch (t.type) {
			case bD:
				i.push(t.rendered);
				break;
			case xD: {
				let e = "<" + t.tagName;
				t.attributes.length > 0 && (e += " " + ND(t.attributes).join(" ")), t.selfClosing && (e += " /"), e += ">", i.push(e);
				break;
			}
			case SD:
				i.push(`</${t.tagName}>`);
				break;
			case CD:
				i.push(AD(t.chars));
				break;
			case wD:
				i.push(`<!--${AD(t.chars)}-->`);
				break;
			case TD: {
				let e = `<!DOCTYPE ${t.name}`;
				t.publicIdentifier && (e += ` PUBLIC "${t.publicIdentifier}"`), t.systemIdentifier && (e += ` "${t.systemIdentifier}"`), e += ">", i.push(e);
				break;
			}
		}
	}
	return i.join("");
}
function DD(e, t) {
	let n = JE(e), r = [];
	for (let e = 0; e < n.length; e++) {
		let i = n[e];
		i.t === "nl" && t.get("nl2br") ? r.push({
			type: xD,
			tagName: "br",
			attributes: [],
			selfClosing: !0
		}) : !i.isLink || !t.check(i) ? r.push({
			type: CD,
			chars: i.toString()
		}) : r.push({
			type: bD,
			rendered: t.render(i)
		});
	}
	return r;
}
function OD(e, t, n, r) {
	let i = 1;
	for (; n < t.length && i > 0;) {
		let a = t[n];
		a.type === xD && a.tagName.toUpperCase() === e ? i++ : a.type === SD && a.tagName.toUpperCase() === e && i--, r.push(a), n++;
	}
	return r;
}
function kD({ tagName: e, attributes: t, content: n }) {
	return `<${e} ${MD(t)}>${AD(n)}</${e}>`;
}
function AD(e) {
	return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function jD(e) {
	return e.replace(/"/g, "&quot;");
}
function MD(e) {
	let t = [];
	for (let n in e) {
		let r = e[n] + "";
		t.push(`${n}="${jD(r)}"`);
	}
	return t.join(" ");
}
function ND(e) {
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n][0], i = e[n][1] + "";
		t.push(`${r}="${jD(i)}"`);
	}
	return t;
}
//#endregion
//#region src/core/utils/linkify.ts
var PD = [
	"file",
	"mailto",
	"http",
	"https",
	"ftp",
	"ftps"
], FD = [
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
], ID = [...PD, ...FD], LD = /* @__PURE__ */ function(e) {
	return e.URL = "url", e.UserId = "userid", e.RoomAlias = "roomalias", e;
}({});
function RD({ scanner: e, parser: t, token: n, name: r }) {
	let { DOT: i, NUM: a, COLON: o, SYM: s, SLASH: c, EQUALS: l, HYPHEN: u, UNDERSCORE: d } = e.tokens, { domain: f } = e.tokens.groups, p = [
		i,
		s,
		c,
		l,
		d,
		u
	], m = [u], h = new sT(NE(r, { isLink: !0 })), g = new sT(NE(r, { isLink: !0 })), _ = t.start.tt(n), v = new sT();
	_.ta(f, v), _.ta(p, v), v.ta(f, v), v.ta(p, v);
	let y = v.tt(o);
	y.ta(f, h), y.ta(m, h), h.ta(f, h), h.ta(m, h), h.tt(i, y), h.tt(o).tt(a, g);
}
function zD({ urlListener: e, roomAliasListener: t, userIdListener: n, urlTargetTransformer: r, hrefTransformer: i, onLinkClick: a }) {
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
			let n = { [`data-${HD}`]: "true" }, r = o(e, t);
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
function BD(e) {
	return YE(e);
}
function VD(e) {
	return XE(e);
}
var HD = "linkified", UD = !1;
function WD() {
	UD ||= (GE("roomalias", ({ scanner: e, parser: t }) => {
		let n = e.tokens.POUND;
		RD({
			scanner: e,
			parser: t,
			token: n,
			name: "roomalias"
		});
	}), GE("userid", ({ scanner: e, parser: t }) => {
		let n = e.tokens.AT;
		RD({
			scanner: e,
			parser: t,
			token: n,
			name: "userid"
		});
	}), KE("mxc", !1), ID.forEach((e) => {
		PD.includes(e) || KE(e, FD.includes(e));
	}), !0);
}
WD();
//#endregion
//#region src/core/utils/LinkedText/LinkedTextContext.ts
var GD = l(null);
GD.displayName = "LinkedTextContext";
function KD() {
	let e = g(GD);
	if (!e) throw Error("useLinkedTextContextOpts must be used within an LinkedTextContext.Provider");
	return e;
}
//#endregion
//#region src/core/utils/LinkedText/LinkedText.tsx
function qD({ children: e, className: t, onLinkClick: n, ...r }) {
	let i = zD({
		...KD(),
		onLinkClick: n
	});
	return /* @__PURE__ */ (0, R.jsx)($E, {
		className: (0, L.default)(eD.container, t),
		as: N,
		options: {
			...i,
			render: me
		},
		...r,
		children: e
	});
}
var JD = {
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
function YD({ title: e, showTooltipOnLink: t, link: n, className: r }) {
	let i = new URL(n).toString(), a = /* @__PURE__ */ (0, R.jsx)(N, {
		as: "a",
		type: "body",
		weight: "semibold",
		size: "md",
		className: (0, L.default)(JD.title, r),
		href: n,
		target: "_blank",
		rel: "noreferrer noopener",
		children: e
	});
	return t ? /* @__PURE__ */ (0, R.jsx)(Ee, {
		label: i,
		children: a
	}) : a;
}
function XD({ siteIcon: e, siteName: t, className: n }) {
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: (0, L.default)(JD.siteName, n),
		children: [e && /* @__PURE__ */ (0, R.jsx)(E, {
			size: "16px",
			name: t,
			id: t,
			src: e
		}), /* @__PURE__ */ (0, R.jsx)(N, {
			as: "span",
			size: "sm",
			weight: "regular",
			children: t
		})]
	});
}
function ZD({ title: e, showTooltipOnLink: t, siteIcon: n, siteName: r, link: i }) {
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: (0, L.default)(JD.containerExpanded, JD.inline),
		children: [n && /* @__PURE__ */ (0, R.jsx)("div", {
			className: JD.siteAvatar,
			children: /* @__PURE__ */ (0, R.jsx)(E, {
				type: "square",
				size: "48px",
				name: e,
				id: e,
				src: n
			})
		}), /* @__PURE__ */ (0, R.jsxs)("div", {
			className: (0, L.default)(JD.textContent, JD.inline),
			children: [/* @__PURE__ */ (0, R.jsx)(YD, {
				title: e,
				showTooltipOnLink: t,
				link: i
			}), r && /* @__PURE__ */ (0, R.jsx)(XD, { siteName: r })]
		})]
	});
}
function QD(e) {
	return e.collapsed ? /* @__PURE__ */ (0, R.jsx)(eO, { ...e }) : /* @__PURE__ */ (0, R.jsx)(tO, { ...e });
}
function $D({ onImageClick: e, ...t }) {
	return (n) => {
		n.button != 0 || n.metaKey || (n.preventDefault(), t.image?.imageFull && e());
	};
}
function eO(e) {
	let { translate: t } = z(), n;
	return e.image && !e.image.playable && (n = /* @__PURE__ */ (0, R.jsx)("div", {
		className: JD.preview,
		children: /* @__PURE__ */ (0, R.jsx)("button", {
			type: "button",
			style: { backgroundImage: `url('${e.image.imageThumb}')` },
			onClick: $D(e),
			"aria-label": t("timeline|url_preview|view_image")
		})
	})), /* @__PURE__ */ (0, R.jsxs)("div", {
		className: JD.containerCollapsed,
		children: [n, /* @__PURE__ */ (0, R.jsxs)("div", {
			className: JD.textContent,
			children: [/* @__PURE__ */ (0, R.jsx)(YD, {
				title: e.title,
				showTooltipOnLink: e.showTooltipOnLink,
				link: e.link
			}), e.siteName && /* @__PURE__ */ (0, R.jsx)(XD, { siteName: e.siteName })]
		})]
	});
}
function tO(e) {
	let { translate: t } = z();
	if (!e.image && !e.author && !e.description) return /* @__PURE__ */ (0, R.jsx)(ZD, { ...e });
	let n;
	return e.image && (n = e.image.playable ? /* @__PURE__ */ (0, R.jsx)("div", {
		style: { backgroundImage: `url('${e.image.imageThumb}')` },
		className: JD.preview,
		children: /* @__PURE__ */ (0, R.jsx)(O, {
			as: "a",
			href: e.link,
			"aria-label": t("timeline|url_preview|open_link"),
			className: JD.playButton,
			target: "_blank",
			rel: "noreferrer noopener",
			kind: "primary",
			children: /* @__PURE__ */ (0, R.jsx)(nf, {
				width: "24px",
				height: "24px"
			})
		})
	}) : /* @__PURE__ */ (0, R.jsx)("button", {
		style: { backgroundImage: `url('${e.image.imageThumb}')` },
		className: JD.preview,
		onClick: $D(e),
		"aria-label": t("timeline|url_preview|view_image"),
		type: "button"
	})), /* @__PURE__ */ (0, R.jsxs)("div", {
		className: JD.containerExpanded,
		children: [n, /* @__PURE__ */ (0, R.jsxs)("div", {
			className: JD.textContent,
			children: [
				e.author && /* @__PURE__ */ (0, R.jsx)(N, {
					as: "span",
					size: "md",
					weight: "semibold",
					children: e.author
				}),
				/* @__PURE__ */ (0, R.jsx)(YD, {
					title: e.title,
					showTooltipOnLink: e.showTooltipOnLink,
					link: e.link
				}),
				/* @__PURE__ */ (0, R.jsx)(qD, {
					type: "body",
					size: "md",
					className: JD.description,
					children: e.description
				}),
				e.siteName && /* @__PURE__ */ (0, R.jsx)(XD, {
					siteName: e.siteName,
					siteIcon: e.siteIcon
				})
			]
		})]
	});
}
//#endregion
//#region src/room/composer/MessageComposerUrlPreview/MessageComposerUrlPreview.tsx
function nO(e) {
	return e.slice(0, 1).toUpperCase();
}
function rO(e) {
	let { translate: t } = z(), n = new URL(e.matched_url).hostname;
	switch (e.status) {
		case "loaded": {
			let t = e.preview?.image?.imageThumb !== void 0 && /* @__PURE__ */ (0, R.jsx)("img", {
				src: e.preview.image?.imageThumb,
				alt: e.preview.image.alt
			});
			return {
				entryIcon: /* @__PURE__ */ (0, R.jsx)("div", {
					className: Gw.entryIcon,
					"data-color": t ? void 0 : ke(n),
					children: t || nO(n)
				}),
				entryTitle: e.preview.title,
				showTooltipOnLink: e.preview.showTooltipOnLink
			};
		}
		case "loading": return {
			entryIcon: /* @__PURE__ */ (0, R.jsx)("div", {
				className: Gw.loadingSpinner,
				children: /* @__PURE__ */ (0, R.jsx)(fe, {})
			}),
			entryTitle: t("composer|url_preview|loading"),
			showTooltipOnLink: !1
		};
		case "failed": return {
			entryIcon: /* @__PURE__ */ (0, R.jsx)("div", {
				className: Gw.failedIcon,
				children: /* @__PURE__ */ (0, R.jsx)(VS, {})
			}),
			entryTitle: t("composer|url_preview|failed"),
			showTooltipOnLink: !1
		};
	}
}
function iO({ entry: e, removePreview: t, className: n }) {
	let { translate: r } = z(), { entryIcon: i, entryTitle: a, showTooltipOnLink: o } = rO(e), s = h(() => {
		t?.(e.matched_url);
	}, [t, e.matched_url]);
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: (0, L.default)(n, Gw.container),
		children: [/* @__PURE__ */ (0, R.jsxs)("div", {
			className: Gw.left,
			children: [i, /* @__PURE__ */ (0, R.jsxs)("div", {
				className: Gw.text,
				children: [/* @__PURE__ */ (0, R.jsx)(YD, {
					title: a,
					showTooltipOnLink: o,
					link: e.matched_url,
					className: Gw.linkTitle
				}), /* @__PURE__ */ (0, R.jsx)(XD, {
					siteName: new URL(e.matched_url).hostname,
					className: Gw.linkSiteName
				})]
			})]
		}), t ? /* @__PURE__ */ (0, R.jsx)(j, {
			onClick: s,
			className: (0, L.default)(Gw.removePreview, Gw.spanLike),
			"aria-label": r("composer|url_preview|remove"),
			children: /* @__PURE__ */ (0, R.jsx)(xS, { "aria-hidden": !0 })
		}) : null]
	}, e.matched_url);
}
function aO({ vm: e, className: t, collapsed: n, toggleCollapsed: r, removePreview: i }) {
	let { translate: a } = z(), { entries: o } = V(e), s = o.filter((e) => e.include), c = h(() => {
		s.forEach((e) => i?.(e.matched_url));
	}, [s, i]);
	if (s.length === 0) return null;
	let l = n ? null : s.map((e) => /* @__PURE__ */ (0, R.jsx)(iO, {
		entry: e,
		removePreview: i,
		className: t
	}, e.matched_url)), u = /* @__PURE__ */ (0, R.jsxs)("div", {
		className: Gw.summary,
		children: [/* @__PURE__ */ (0, R.jsxs)("span", {
			className: Gw.left,
			children: [/* @__PURE__ */ (0, R.jsx)("span", {
				className: Gw.icons,
				children: s.map((e) => {
					let t, n, r;
					switch (e.status) {
						case "failed":
							n = Gw.summaryIconFailed, r = /* @__PURE__ */ (0, R.jsx)(VS, {});
							break;
						case "loading":
							n = Gw.summaryIconLoading, r = /* @__PURE__ */ (0, R.jsx)(fe, {});
							break;
						case "loaded": {
							let n = new URL(e.matched_url).hostname;
							e.preview.image === void 0 ? (r = /* @__PURE__ */ (0, R.jsx)(R.Fragment, { children: nO(n) }), t = ke(n)) : r = /* @__PURE__ */ (0, R.jsx)("img", {
								src: e.preview.siteIcon || e.preview.image.imageThumb,
								alt: e.preview.image.alt
							});
						}
					}
					return /* @__PURE__ */ (0, R.jsx)("div", {
						className: (0, L.default)(Gw.summaryIcon, n),
						"data-color": t,
						children: r
					}, e.matched_url);
				})
			}), /* @__PURE__ */ (0, R.jsx)("span", {
				className: Gw.linkCount,
				children: a("composer|url_preview|n_links", { count: s.length })
			})]
		}), /* @__PURE__ */ (0, R.jsxs)("span", {
			className: Gw.right,
			children: [i && /* @__PURE__ */ (0, R.jsx)("button", {
				className: (0, L.default)(Gw.clearAll, Gw.spanLike),
				onClick: c,
				type: "button",
				children: a("composer|url_preview|clear_all")
			}), /* @__PURE__ */ (0, R.jsx)(j, {
				className: (0, L.default)(Gw.collapse, Gw.spanLike),
				onClick: r,
				"aria-label": a("composer|url_preview|collapse"),
				type: "button",
				children: /* @__PURE__ */ (0, R.jsx)(pS, { "aria-hidden": !0 })
			})]
		})]
	});
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: n ? (0, L.default)(Gw.wrapper, Gw.collapsed) : Gw.wrapper,
		children: [u, l]
	});
}
//#endregion
//#region src/crypto/SasEmoji/SasEmojiTranslate.ts
var oO = new Map((/* @__PURE__ */ JSON.parse("[{\"number\":0,\"emoji\":\"🐶\",\"description\":\"Dog\",\"unicode\":\"U+1F436\",\"translated_descriptions\":{\"ar\":\"كلب\",\"bg\":\"Куче\",\"ca\":\"Gos\",\"cs\":\"Pes\",\"de\":\"Hund\",\"eo\":\"Hundo\",\"es\":\"Perro\",\"et\":\"Koer\",\"fa\":\"سگ\",\"fi\":\"Koira\",\"fr\":\"Chien\",\"hr\":\"pas\",\"hu\":\"Kutya\",\"id\":\"Anjing\",\"it\":\"Cane\",\"ja\":\"犬\",\"nb_NO\":\"Hund\",\"nl\":\"Hond\",\"pt\":\"Cão\",\"pt_BR\":\"Cachorro\",\"ru\":\"Собака\",\"si\":\"බල්ලා\",\"sk\":\"Pes\",\"sq\":\"Qen\",\"sr\":\"пас\",\"sv\":\"Hund\",\"szl\":null,\"tzm\":\"Aydi\",\"uk\":\"Пес\",\"vi\":\"Chó\",\"zh_Hans\":\"狗\",\"zh_Hant\":\"狗\"}},{\"number\":1,\"emoji\":\"🐱\",\"description\":\"Cat\",\"unicode\":\"U+1F431\",\"translated_descriptions\":{\"ar\":\"هِرَّة\",\"bg\":\"Котка\",\"ca\":\"Gat\",\"cs\":\"Kočka\",\"de\":\"Katze\",\"eo\":\"Kato\",\"es\":\"Gato\",\"et\":\"Kass\",\"fa\":\"گربه\",\"fi\":\"Kissa\",\"fr\":\"Chat\",\"hr\":\"mačka\",\"hu\":\"Macska\",\"id\":\"Kucing\",\"it\":\"Gatto\",\"ja\":\"猫\",\"nb_NO\":\"Katt\",\"nl\":\"Kat\",\"pt\":\"Gato\",\"pt_BR\":\"Gato\",\"ru\":\"Кошка\",\"si\":\"පූසා\",\"sk\":\"Mačka\",\"sq\":\"Mace\",\"sr\":\"мачка\",\"sv\":\"Katt\",\"szl\":null,\"tzm\":\"Amuc\",\"uk\":\"Кіт\",\"vi\":\"Mèo\",\"zh_Hans\":\"猫\",\"zh_Hant\":\"貓\"}},{\"number\":2,\"emoji\":\"🦁\",\"description\":\"Lion\",\"unicode\":\"U+1F981\",\"translated_descriptions\":{\"ar\":\"أَسَد\",\"bg\":\"Лъв\",\"ca\":\"Lleó\",\"cs\":\"Lev\",\"de\":\"Löwe\",\"eo\":\"Leono\",\"es\":\"León\",\"et\":\"Lõvi\",\"fa\":\"شیر\",\"fi\":\"Leijona\",\"fr\":\"Lion\",\"hr\":\"lav\",\"hu\":\"Oroszlán\",\"id\":\"Singa\",\"it\":\"Leone\",\"ja\":\"ライオン\",\"nb_NO\":\"Løve\",\"nl\":\"Leeuw\",\"pt\":\"Leão\",\"pt_BR\":\"Leão\",\"ru\":\"Лев\",\"si\":\"සිංහයා\",\"sk\":\"Lev\",\"sq\":\"Luan\",\"sr\":\"лав\",\"sv\":\"Lejon\",\"szl\":null,\"tzm\":\"Izem\",\"uk\":\"Лев\",\"vi\":\"Sư tử\",\"zh_Hans\":\"狮子\",\"zh_Hant\":\"獅子\"}},{\"number\":3,\"emoji\":\"🐎\",\"description\":\"Horse\",\"unicode\":\"U+1F40E\",\"translated_descriptions\":{\"ar\":\"حِصَان\",\"bg\":\"Кон\",\"ca\":\"Cavall\",\"cs\":\"Kůň\",\"de\":\"Pferd\",\"eo\":\"Ĉevalo\",\"es\":\"Caballo\",\"et\":\"Hobune\",\"fa\":\"اسب\",\"fi\":\"Hevonen\",\"fr\":\"Cheval\",\"hr\":\"konj\",\"hu\":\"Ló\",\"id\":\"Kuda\",\"it\":\"Cavallo\",\"ja\":\"馬\",\"nb_NO\":\"Hest\",\"nl\":\"Paard\",\"pt\":\"Cavalo\",\"pt_BR\":\"Cavalo\",\"ru\":\"Лошадь\",\"si\":\"අශ්වයා\",\"sk\":\"Kôň\",\"sq\":\"Kalë\",\"sr\":\"коњ\",\"sv\":\"Häst\",\"szl\":null,\"tzm\":\"Ayyis\",\"uk\":\"Кінь\",\"vi\":\"Ngựa\",\"zh_Hans\":\"马\",\"zh_Hant\":\"馬\"}},{\"number\":4,\"emoji\":\"🦄\",\"description\":\"Unicorn\",\"unicode\":\"U+1F984\",\"translated_descriptions\":{\"ar\":\"حصان وحيد القرن\",\"bg\":\"Еднорог\",\"ca\":\"Unicorn\",\"cs\":\"Jednorožec\",\"de\":\"Einhorn\",\"eo\":\"Unukorno\",\"es\":\"Unicornio\",\"et\":\"Ükssarvik\",\"fa\":\"تک شاخ\",\"fi\":\"Yksisarvinen\",\"fr\":\"Licorne\",\"hr\":\"jednorog\",\"hu\":\"Egyszarvú\",\"id\":\"Unicorn\",\"it\":\"Unicorno\",\"ja\":\"ユニコーン\",\"nb_NO\":\"Enhjørning\",\"nl\":\"Eenhoorn\",\"pt\":\"Unicórnio\",\"pt_BR\":\"Unicórnio\",\"ru\":\"Единорог\",\"si\":null,\"sk\":\"Jednorožec\",\"sq\":\"Njëbrirësh\",\"sr\":\"једнорог\",\"sv\":\"Enhörning\",\"szl\":null,\"tzm\":null,\"uk\":\"Єдиноріг\",\"vi\":\"Kỳ lân\",\"zh_Hans\":\"独角兽\",\"zh_Hant\":\"獨角獸\"}},{\"number\":5,\"emoji\":\"🐷\",\"description\":\"Pig\",\"unicode\":\"U+1F437\",\"translated_descriptions\":{\"ar\":\"خِنزِير\",\"bg\":\"Прасе\",\"ca\":\"Porc\",\"cs\":\"Prase\",\"de\":\"Schwein\",\"eo\":\"Porko\",\"es\":\"Cerdo\",\"et\":\"Siga\",\"fa\":\"خوک\",\"fi\":\"Sika\",\"fr\":\"Cochon\",\"hr\":\"svinja\",\"hu\":\"Malac\",\"id\":\"Babi\",\"it\":\"Maiale\",\"ja\":\"ブタ\",\"nb_NO\":\"Gris\",\"nl\":\"Varken\",\"pt\":\"Porco\",\"pt_BR\":\"Porco\",\"ru\":\"Свинья\",\"si\":null,\"sk\":\"Prasa\",\"sq\":\"Derr\",\"sr\":\"прасе\",\"sv\":\"Gris\",\"szl\":null,\"tzm\":\"Ilef\",\"uk\":\"Свиня\",\"vi\":\"Heo\",\"zh_Hans\":\"猪\",\"zh_Hant\":\"豬\"}},{\"number\":6,\"emoji\":\"🐘\",\"description\":\"Elephant\",\"unicode\":\"U+1F418\",\"translated_descriptions\":{\"ar\":\"فِيل\",\"bg\":\"Слон\",\"ca\":\"Elefant\",\"cs\":\"Slon\",\"de\":\"Elefant\",\"eo\":\"Elefanto\",\"es\":\"Elefante\",\"et\":\"Elevant\",\"fa\":\"فیل\",\"fi\":\"Norsu\",\"fr\":\"Éléphant\",\"hr\":\"slon\",\"hu\":\"Elefánt\",\"id\":\"Gajah\",\"it\":\"Elefante\",\"ja\":\"ゾウ\",\"nb_NO\":\"Elefant\",\"nl\":\"Olifant\",\"pt\":\"Elefante\",\"pt_BR\":\"Elefante\",\"ru\":\"Слон\",\"si\":null,\"sk\":\"Slon\",\"sq\":\"Elefant\",\"sr\":\"слон\",\"sv\":\"Elefant\",\"szl\":null,\"tzm\":\"Ilu\",\"uk\":\"Слон\",\"vi\":\"Voi\",\"zh_Hans\":\"大象\",\"zh_Hant\":\"大象\"}},{\"number\":7,\"emoji\":\"🐰\",\"description\":\"Rabbit\",\"unicode\":\"U+1F430\",\"translated_descriptions\":{\"ar\":\"أَرنَب\",\"bg\":\"Заек\",\"ca\":\"Conill\",\"cs\":\"Králík\",\"de\":\"Hase\",\"eo\":\"Kuniklo\",\"es\":\"Conejo\",\"et\":\"Jänes\",\"fa\":\"خرگوش\",\"fi\":\"Kani\",\"fr\":\"Lapin\",\"hr\":\"zec\",\"hu\":\"Nyúl\",\"id\":\"Kelinci\",\"it\":\"Coniglio\",\"ja\":\"うさぎ\",\"nb_NO\":\"Kanin\",\"nl\":\"Konijn\",\"pt\":\"Coelho\",\"pt_BR\":\"Coelho\",\"ru\":\"Кролик\",\"si\":null,\"sk\":\"Zajac\",\"sq\":\"Lepur\",\"sr\":\"зец\",\"sv\":\"Kanin\",\"szl\":null,\"tzm\":\"Agnin\",\"uk\":\"Кріль\",\"vi\":\"Thỏ\",\"zh_Hans\":\"兔子\",\"zh_Hant\":\"兔子\"}},{\"number\":8,\"emoji\":\"🐼\",\"description\":\"Panda\",\"unicode\":\"U+1F43C\",\"translated_descriptions\":{\"ar\":\"باندَا\",\"bg\":\"Панда\",\"ca\":\"Panda\",\"cs\":\"Panda\",\"de\":\"Panda\",\"eo\":\"Pando\",\"es\":\"Panda\",\"et\":\"Panda\",\"fa\":\"پاندا\",\"fi\":\"Panda\",\"fr\":\"Panda\",\"hr\":\"panda\",\"hu\":\"Panda\",\"id\":\"Panda\",\"it\":\"Panda\",\"ja\":\"パンダ\",\"nb_NO\":\"Panda\",\"nl\":\"Panda\",\"pt\":\"Panda\",\"pt_BR\":\"Panda\",\"ru\":\"Панда\",\"si\":null,\"sk\":\"Panda\",\"sq\":\"Panda\",\"sr\":\"панда\",\"sv\":\"Panda\",\"szl\":null,\"tzm\":null,\"uk\":\"Панда\",\"vi\":\"Gấu trúc\",\"zh_Hans\":\"熊猫\",\"zh_Hant\":\"熊貓\"}},{\"number\":9,\"emoji\":\"🐓\",\"description\":\"Rooster\",\"unicode\":\"U+1F413\",\"translated_descriptions\":{\"ar\":\"دِيك\",\"bg\":\"Петел\",\"ca\":\"Gall\",\"cs\":\"Kohout\",\"de\":\"Hahn\",\"eo\":\"Virkoko\",\"es\":\"Gallo\",\"et\":\"Kukk\",\"fa\":\"خروس\",\"fi\":\"Kukko\",\"fr\":\"Coq\",\"hr\":\"kokot\",\"hu\":\"Kakas\",\"id\":\"Ayam\",\"it\":\"Gallo\",\"ja\":\"ニワトリ\",\"nb_NO\":\"Hane\",\"nl\":\"Haan\",\"pt\":\"Galo\",\"pt_BR\":\"Galo\",\"ru\":\"Петух\",\"si\":null,\"sk\":\"Kohút\",\"sq\":\"Këndes\",\"sr\":\"петао\",\"sv\":\"Tupp\",\"szl\":null,\"tzm\":\"Ayaẓiḍ\",\"uk\":\"Когут\",\"vi\":\"Gà trống\",\"zh_Hans\":\"公鸡\",\"zh_Hant\":\"公雞\"}},{\"number\":10,\"emoji\":\"🐧\",\"description\":\"Penguin\",\"unicode\":\"U+1F427\",\"translated_descriptions\":{\"ar\":\"بطريق\",\"bg\":\"Пингвин\",\"ca\":\"Pingüí\",\"cs\":\"Tučňák\",\"de\":\"Pinguin\",\"eo\":\"Pingveno\",\"es\":\"Pingüino\",\"et\":\"Pingviin\",\"fa\":\"پنگوئن\",\"fi\":\"Pingviini\",\"fr\":\"Manchot\",\"hr\":\"pingvin\",\"hu\":\"Pingvin\",\"id\":\"Penguin\",\"it\":\"Pinguino\",\"ja\":\"ペンギン\",\"nb_NO\":\"Pingvin\",\"nl\":\"Pinguïn\",\"pt\":\"Pinguim\",\"pt_BR\":\"Pinguim\",\"ru\":\"Пингвин\",\"si\":null,\"sk\":\"Tučniak\",\"sq\":\"Pinguin\",\"sr\":\"пингвин\",\"sv\":\"Pingvin\",\"szl\":null,\"tzm\":null,\"uk\":\"Пінгвін\",\"vi\":\"Chim cánh cụt\",\"zh_Hans\":\"企鹅\",\"zh_Hant\":\"企鵝\"}},{\"number\":11,\"emoji\":\"🐢\",\"description\":\"Turtle\",\"unicode\":\"U+1F422\",\"translated_descriptions\":{\"ar\":\"سُلحفاة\",\"bg\":\"Костенурка\",\"ca\":\"Tortuga\",\"cs\":\"Želva\",\"de\":\"Schildkröte\",\"eo\":\"Testudo\",\"es\":\"Tortuga\",\"et\":\"Kilpkonn\",\"fa\":\"لاک‌پشت\",\"fi\":\"Kilpikonna\",\"fr\":\"Tortue\",\"hr\":\"kornjača\",\"hu\":\"Teknős\",\"id\":\"Kura-Kura\",\"it\":\"Tartaruga\",\"ja\":\"亀\",\"nb_NO\":\"Skilpadde\",\"nl\":\"Schildpad\",\"pt\":\"Tartaruga\",\"pt_BR\":\"Tartaruga\",\"ru\":\"Черепаха\",\"si\":null,\"sk\":\"Korytnačka\",\"sq\":\"Breshkë\",\"sr\":\"корњача\",\"sv\":\"Sköldpadda\",\"szl\":null,\"tzm\":\"Ifker\",\"uk\":\"Черепаха\",\"vi\":\"Rùa\",\"zh_Hans\":\"乌龟\",\"zh_Hant\":\"烏龜\"}},{\"number\":12,\"emoji\":\"🐟\",\"description\":\"Fish\",\"unicode\":\"U+1F41F\",\"translated_descriptions\":{\"ar\":\"سَمَكة\",\"bg\":\"Риба\",\"ca\":\"Peix\",\"cs\":\"Ryba\",\"de\":\"Fisch\",\"eo\":\"Fiŝo\",\"es\":\"Pez\",\"et\":\"Kala\",\"fa\":\"ماهی\",\"fi\":\"Kala\",\"fr\":\"Poisson\",\"hr\":\"riba\",\"hu\":\"Hal\",\"id\":\"Ikan\",\"it\":\"Pesce\",\"ja\":\"魚\",\"nb_NO\":\"Fisk\",\"nl\":\"Vis\",\"pt\":\"Peixe\",\"pt_BR\":\"Peixe\",\"ru\":\"Рыба\",\"si\":null,\"sk\":\"Ryba\",\"sq\":\"Peshk\",\"sr\":\"риба\",\"sv\":\"Fisk\",\"szl\":null,\"tzm\":\"Aselm\",\"uk\":\"Риба\",\"vi\":\"Cá\",\"zh_Hans\":\"鱼\",\"zh_Hant\":\"魚\"}},{\"number\":13,\"emoji\":\"🐙\",\"description\":\"Octopus\",\"unicode\":\"U+1F419\",\"translated_descriptions\":{\"ar\":\"أُخطُبُوط\",\"bg\":\"Октопод\",\"ca\":\"Pop\",\"cs\":\"Chobotnice\",\"de\":\"Oktopus\",\"eo\":\"Polpo\",\"es\":\"Pulpo\",\"et\":\"Kaheksajalg\",\"fa\":\"اختاپوس\",\"fi\":\"Tursas\",\"fr\":\"Poulpe\",\"hr\":\"hobotnica\",\"hu\":\"Polip\",\"id\":\"Gurita\",\"it\":\"Polpo\",\"ja\":\"たこ\",\"nb_NO\":\"Blekksprut\",\"nl\":\"Octopus\",\"pt\":\"Polvo\",\"pt_BR\":\"Polvo\",\"ru\":\"Осьминог\",\"si\":null,\"sk\":\"Chobotnica\",\"sq\":\"Oktapod\",\"sr\":\"октопод\",\"sv\":\"Bläckfisk\",\"szl\":null,\"tzm\":null,\"uk\":\"Восьминіг\",\"vi\":\"Bạch tuộc\",\"zh_Hans\":\"章鱼\",\"zh_Hant\":\"章魚\"}},{\"number\":14,\"emoji\":\"🦋\",\"description\":\"Butterfly\",\"unicode\":\"U+1F98B\",\"translated_descriptions\":{\"ar\":\"فَرَاشَة\",\"bg\":\"Пеперуда\",\"ca\":\"Papallona\",\"cs\":\"Motýl\",\"de\":\"Schmetterling\",\"eo\":\"Papilio\",\"es\":\"Mariposa\",\"et\":\"Liblikas\",\"fa\":\"پروانه\",\"fi\":\"Perhonen\",\"fr\":\"Papillon\",\"hr\":\"leptir\",\"hu\":\"Pillangó\",\"id\":\"Kupu-Kupu\",\"it\":\"Farfalla\",\"ja\":\"ちょうちょ\",\"nb_NO\":\"Sommerfugl\",\"nl\":\"Vlinder\",\"pt\":\"Borboleta\",\"pt_BR\":\"Borboleta\",\"ru\":\"Бабочка\",\"si\":null,\"sk\":\"Motýľ\",\"sq\":\"Flutur\",\"sr\":\"лептир\",\"sv\":\"Fjäril\",\"szl\":null,\"tzm\":null,\"uk\":\"Метелик\",\"vi\":\"Bướm\",\"zh_Hans\":\"蝴蝶\",\"zh_Hant\":\"蝴蝶\"}},{\"number\":15,\"emoji\":\"🌷\",\"description\":\"Flower\",\"unicode\":\"U+1F337\",\"translated_descriptions\":{\"ar\":\"زَهرَة\",\"bg\":\"Цвете\",\"ca\":\"Flor\",\"cs\":\"Květina\",\"de\":\"Blume\",\"eo\":\"Floro\",\"es\":\"Flor\",\"et\":\"Lill\",\"fa\":\"گل\",\"fi\":\"Kukka\",\"fr\":\"Fleur\",\"hr\":\"svijet\",\"hu\":\"Virág\",\"id\":\"Bunga\",\"it\":\"Fiore\",\"ja\":\"花\",\"nb_NO\":\"Blomst\",\"nl\":\"Bloem\",\"pt\":\"Flor\",\"pt_BR\":\"Flor\",\"ru\":\"Цветок\",\"si\":null,\"sk\":\"Kvet\",\"sq\":\"Lule\",\"sr\":\"цвет\",\"sv\":\"Blomma\",\"szl\":null,\"tzm\":null,\"uk\":\"Квітка\",\"vi\":\"Hoa\",\"zh_Hans\":\"花\",\"zh_Hant\":\"花\"}},{\"number\":16,\"emoji\":\"🌳\",\"description\":\"Tree\",\"unicode\":\"U+1F333\",\"translated_descriptions\":{\"ar\":\"شَجَرَة\",\"bg\":\"Дърво\",\"ca\":\"Arbre\",\"cs\":\"Strom\",\"de\":\"Baum\",\"eo\":\"Arbo\",\"es\":\"Árbol\",\"et\":\"Puu\",\"fa\":\"درخت\",\"fi\":\"Puu\",\"fr\":\"Arbre\",\"hr\":\"drvo\",\"hu\":\"Fa\",\"id\":\"Pohon\",\"it\":\"Albero\",\"ja\":\"木\",\"nb_NO\":\"Tre\",\"nl\":\"Boom\",\"pt\":\"Árvore\",\"pt_BR\":\"Árvore\",\"ru\":\"Дерево\",\"si\":null,\"sk\":\"Strom\",\"sq\":\"Pemë\",\"sr\":\"дрво\",\"sv\":\"Träd\",\"szl\":null,\"tzm\":\"Aseklu\",\"uk\":\"Дерево\",\"vi\":\"Cây\",\"zh_Hans\":\"树\",\"zh_Hant\":\"樹\"}},{\"number\":17,\"emoji\":\"🌵\",\"description\":\"Cactus\",\"unicode\":\"U+1F335\",\"translated_descriptions\":{\"ar\":\"صبار\",\"bg\":\"Кактус\",\"ca\":\"Cactus\",\"cs\":\"Kaktus\",\"de\":\"Kaktus\",\"eo\":\"Kakto\",\"es\":\"Cactus\",\"et\":\"Kaktus\",\"fa\":\"کاکتوس\",\"fi\":\"Kaktus\",\"fr\":\"Cactus\",\"hr\":\"kaktus\",\"hu\":\"Kaktusz\",\"id\":\"Kaktus\",\"it\":\"Cactus\",\"ja\":\"サボテン\",\"nb_NO\":\"Kaktus\",\"nl\":\"Cactus\",\"pt\":\"Cato\",\"pt_BR\":\"Cacto\",\"ru\":\"Кактус\",\"si\":null,\"sk\":\"Kaktus\",\"sq\":\"Kaktus\",\"sr\":\"кактус\",\"sv\":\"Kaktus\",\"szl\":null,\"tzm\":null,\"uk\":\"Кактус\",\"vi\":\"Xương rồng\",\"zh_Hans\":\"仙人掌\",\"zh_Hant\":\"仙人掌\"}},{\"number\":18,\"emoji\":\"🍄\",\"description\":\"Mushroom\",\"unicode\":\"U+1F344\",\"translated_descriptions\":{\"ar\":\"فُطر\",\"bg\":\"Гъба\",\"ca\":\"Bolet\",\"cs\":\"Houba\",\"de\":\"Pilz\",\"eo\":\"Fungo\",\"es\":\"Seta\",\"et\":\"Seen\",\"fa\":\"قارچ\",\"fi\":\"Sieni\",\"fr\":\"Champignon\",\"hr\":\"gljiva\",\"hu\":\"Gomba\",\"id\":\"Jamur\",\"it\":\"Fungo\",\"ja\":\"きのこ\",\"nb_NO\":\"Sopp\",\"nl\":\"Paddenstoel\",\"pt\":\"Cogumelo\",\"pt_BR\":\"Cogumelo\",\"ru\":\"Гриб\",\"si\":null,\"sk\":\"Huba\",\"sq\":\"Kërpudhë\",\"sr\":\"печурка\",\"sv\":\"Svamp\",\"szl\":null,\"tzm\":\"Agursel\",\"uk\":\"Гриб\",\"vi\":\"Nấm\",\"zh_Hans\":\"蘑菇\",\"zh_Hant\":\"蘑菇\"}},{\"number\":19,\"emoji\":\"🌏\",\"description\":\"Globe\",\"unicode\":\"U+1F30F\",\"translated_descriptions\":{\"ar\":\"كُرَةٌ أرضِيَّة\",\"bg\":\"Глобус\",\"ca\":\"Globus terraqüi\",\"cs\":\"Zeměkoule\",\"de\":\"Globus\",\"eo\":\"Globo\",\"es\":\"Globo\",\"et\":\"Maakera\",\"fa\":\"زمین\",\"fi\":\"Maapallo\",\"fr\":\"Globe\",\"hr\":\"Globus\",\"hu\":\"Földgömb\",\"id\":\"Bola Dunia\",\"it\":\"Globo\",\"ja\":\"地球\",\"nb_NO\":\"Globus\",\"nl\":\"Wereldbol\",\"pt\":\"Globo\",\"pt_BR\":\"Globo\",\"ru\":\"Глобус\",\"si\":null,\"sk\":\"Zemeguľa\",\"sq\":\"Rruzull\",\"sr\":\"глобус\",\"sv\":\"Jordklot\",\"szl\":null,\"tzm\":null,\"uk\":\"Глобус\",\"vi\":\"Địa cầu\",\"zh_Hans\":\"地球\",\"zh_Hant\":\"地球\"}},{\"number\":20,\"emoji\":\"🌙\",\"description\":\"Moon\",\"unicode\":\"U+1F319\",\"translated_descriptions\":{\"ar\":\"قَمَر\",\"bg\":\"Луна\",\"ca\":\"Lluna\",\"cs\":\"Měsíc\",\"de\":\"Mond\",\"eo\":\"Luno\",\"es\":\"Luna\",\"et\":\"Kuu\",\"fa\":\"ماه\",\"fi\":\"Kuu\",\"fr\":\"Lune\",\"hr\":\"mjesec\",\"hu\":\"Hold\",\"id\":\"Bulan\",\"it\":\"Luna\",\"ja\":\"月\",\"nb_NO\":\"Måne\",\"nl\":\"Maan\",\"pt\":\"Lua\",\"pt_BR\":\"Lua\",\"ru\":\"Луна\",\"si\":null,\"sk\":\"Mesiac\",\"sq\":\"Hënë\",\"sr\":\"месец\",\"sv\":\"Måne\",\"szl\":null,\"tzm\":\"Ayyur\",\"uk\":\"Місяць\",\"vi\":\"Mặt trăng\",\"zh_Hans\":\"月亮\",\"zh_Hant\":\"月亮\"}},{\"number\":21,\"emoji\":\"☁️\",\"description\":\"Cloud\",\"unicode\":\"U+2601U+FE0F\",\"translated_descriptions\":{\"ar\":\"سَحابَة\",\"bg\":\"Облак\",\"ca\":\"Núvol\",\"cs\":\"Mrak\",\"de\":\"Wolke\",\"eo\":\"Nubo\",\"es\":\"Nube\",\"et\":\"Pilv\",\"fa\":\"ابر\",\"fi\":\"Pilvi\",\"fr\":\"Nuage\",\"hr\":\"oblak\",\"hu\":\"Felhő\",\"id\":\"Awan\",\"it\":\"Nuvola\",\"ja\":\"雲\",\"nb_NO\":\"Sky\",\"nl\":\"Wolk\",\"pt\":\"Nuvem\",\"pt_BR\":\"Nuvem\",\"ru\":\"Облако\",\"si\":null,\"sk\":\"Oblak\",\"sq\":\"Re\",\"sr\":\"облак\",\"sv\":\"Moln\",\"szl\":null,\"tzm\":null,\"uk\":\"Хмара\",\"vi\":\"Mây\",\"zh_Hans\":\"云\",\"zh_Hant\":\"雲朵\"}},{\"number\":22,\"emoji\":\"🔥\",\"description\":\"Fire\",\"unicode\":\"U+1F525\",\"translated_descriptions\":{\"ar\":\"نار\",\"bg\":\"Огън\",\"ca\":\"Foc\",\"cs\":\"Oheň\",\"de\":\"Feuer\",\"eo\":\"Fajro\",\"es\":\"Fuego\",\"et\":\"Tuli\",\"fa\":\"آتش\",\"fi\":\"Tuli\",\"fr\":\"Feu\",\"hr\":\"vatra\",\"hu\":\"Tűz\",\"id\":\"Api\",\"it\":\"Fuoco\",\"ja\":\"炎\",\"nb_NO\":\"Flamme\",\"nl\":\"Vuur\",\"pt\":\"Fogo\",\"pt_BR\":\"Fogo\",\"ru\":\"Огонь\",\"si\":null,\"sk\":\"Oheň\",\"sq\":\"Zjarr\",\"sr\":\"ватра\",\"sv\":\"Eld\",\"szl\":null,\"tzm\":\"Timessi\",\"uk\":\"Вогонь\",\"vi\":\"Lửa\",\"zh_Hans\":\"火\",\"zh_Hant\":\"火\"}},{\"number\":23,\"emoji\":\"🍌\",\"description\":\"Banana\",\"unicode\":\"U+1F34C\",\"translated_descriptions\":{\"ar\":\"مَوزَة\",\"bg\":\"Банан\",\"ca\":\"Plàtan\",\"cs\":\"Banán\",\"de\":\"Banane\",\"eo\":\"Banano\",\"es\":\"Plátano\",\"et\":\"Banaan\",\"fa\":\"موز\",\"fi\":\"Banaani\",\"fr\":\"Banane\",\"hr\":\"banana\",\"hu\":\"Banán\",\"id\":\"Pisang\",\"it\":\"Banana\",\"ja\":\"バナナ\",\"nb_NO\":\"Banan\",\"nl\":\"Banaan\",\"pt\":\"Banana\",\"pt_BR\":\"Banana\",\"ru\":\"Банан\",\"si\":null,\"sk\":\"Banán\",\"sq\":\"Banane\",\"sr\":\"банана\",\"sv\":\"Banan\",\"szl\":null,\"tzm\":\"Tabanant\",\"uk\":\"Банан\",\"vi\":\"Chuối\",\"zh_Hans\":\"香蕉\",\"zh_Hant\":\"香蕉\"}},{\"number\":24,\"emoji\":\"🍎\",\"description\":\"Apple\",\"unicode\":\"U+1F34E\",\"translated_descriptions\":{\"ar\":\"تُفَّاحَة\",\"bg\":\"Ябълка\",\"ca\":\"Poma\",\"cs\":\"Jablko\",\"de\":\"Apfel\",\"eo\":\"Pomo\",\"es\":\"Manzana\",\"et\":\"Õun\",\"fa\":\"سیب\",\"fi\":\"Omena\",\"fr\":\"Pomme\",\"hr\":\"jabuka\",\"hu\":\"Alma\",\"id\":\"Apel\",\"it\":\"Mela\",\"ja\":\"リンゴ\",\"nb_NO\":\"Eple\",\"nl\":\"Appel\",\"pt\":\"Maçã\",\"pt_BR\":\"Maçã\",\"ru\":\"Яблоко\",\"si\":null,\"sk\":\"Jablko\",\"sq\":\"Mollë\",\"sr\":\"јабука\",\"sv\":\"Äpple\",\"szl\":null,\"tzm\":\"Tadeffuyt\",\"uk\":\"Яблуко\",\"vi\":\"Táo\",\"zh_Hans\":\"苹果\",\"zh_Hant\":\"蘋果\"}},{\"number\":25,\"emoji\":\"🍓\",\"description\":\"Strawberry\",\"unicode\":\"U+1F353\",\"translated_descriptions\":{\"ar\":\"فَراوِلَة\",\"bg\":\"Ягода\",\"ca\":\"Maduixa\",\"cs\":\"Jahoda\",\"de\":\"Erdbeere\",\"eo\":\"Frago\",\"es\":\"Fresa\",\"et\":\"Maasikas\",\"fa\":\"توت فرنگی\",\"fi\":\"Mansikka\",\"fr\":\"Fraise\",\"hr\":\"jagoda\",\"hu\":\"Eper\",\"id\":\"Stroberi\",\"it\":\"Fragola\",\"ja\":\"いちご\",\"nb_NO\":\"Jordbær\",\"nl\":\"Aardbei\",\"pt\":\"Morango\",\"pt_BR\":\"Morango\",\"ru\":\"Клубника\",\"si\":null,\"sk\":\"Jahoda\",\"sq\":\"Luleshtrydhe\",\"sr\":\"јагода\",\"sv\":\"Jordgubbe\",\"szl\":null,\"tzm\":null,\"uk\":\"Полуниця\",\"vi\":\"Dâu tây\",\"zh_Hans\":\"草莓\",\"zh_Hant\":\"草莓\"}},{\"number\":26,\"emoji\":\"🌽\",\"description\":\"Corn\",\"unicode\":\"U+1F33D\",\"translated_descriptions\":{\"ar\":\"ذُرَة\",\"bg\":\"Царевица\",\"ca\":\"Blat de moro\",\"cs\":\"Kukuřice\",\"de\":\"Mais\",\"eo\":\"Maizo\",\"es\":\"Maíz\",\"et\":\"Mais\",\"fa\":\"ذرت\",\"fi\":\"Maissi\",\"fr\":\"Maïs\",\"hr\":\"kukuruza\",\"hu\":\"Kukorica\",\"id\":\"Jagung\",\"it\":\"Mais\",\"ja\":\"とうもろこし\",\"nb_NO\":\"Mais\",\"nl\":\"Maïs\",\"pt\":\"Milho\",\"pt_BR\":\"Milho\",\"ru\":\"Кукуруза\",\"si\":null,\"sk\":\"Kukurica\",\"sq\":\"Misër\",\"sr\":\"кукуруз\",\"sv\":\"Majs\",\"szl\":null,\"tzm\":null,\"uk\":\"Кукурудза\",\"vi\":\"Bắp\",\"zh_Hans\":\"玉米\",\"zh_Hant\":\"玉米\"}},{\"number\":27,\"emoji\":\"🍕\",\"description\":\"Pizza\",\"unicode\":\"U+1F355\",\"translated_descriptions\":{\"ar\":\"بِيتزا\",\"bg\":\"Пица\",\"ca\":\"Pizza\",\"cs\":\"Pizza\",\"de\":\"Pizza\",\"eo\":\"Pico\",\"es\":\"Pizza\",\"et\":\"Pitsa\",\"fa\":\"پیتزا\",\"fi\":\"Pizza\",\"fr\":\"Pizza\",\"hr\":\"pizza\",\"hu\":\"Pizza\",\"id\":\"Pizza\",\"it\":\"Pizza\",\"ja\":\"ピザ\",\"nb_NO\":\"Pizza\",\"nl\":\"Pizza\",\"pt\":\"Piza\",\"pt_BR\":\"Pizza\",\"ru\":\"Пицца\",\"si\":null,\"sk\":\"Pizza\",\"sq\":\"Picë\",\"sr\":\"пица\",\"sv\":\"Pizza\",\"szl\":null,\"tzm\":null,\"uk\":\"Піца\",\"vi\":\"Pizza\",\"zh_Hans\":\"披萨\",\"zh_Hant\":\"披薩\"}},{\"number\":28,\"emoji\":\"🎂\",\"description\":\"Cake\",\"unicode\":\"U+1F382\",\"translated_descriptions\":{\"ar\":\"كَعكَة\",\"bg\":\"Торта\",\"ca\":\"Pastís\",\"cs\":\"Dort\",\"de\":\"Kuchen\",\"eo\":\"Torto\",\"es\":\"Tarta\",\"et\":\"Kook\",\"fa\":\"کیک\",\"fi\":\"Kakku\",\"fr\":\"Gâteau\",\"hr\":\"torta\",\"hu\":\"Süti\",\"id\":\"Kue\",\"it\":\"Torta\",\"ja\":\"ケーキ\",\"nb_NO\":\"Kake\",\"nl\":\"Taart\",\"pt\":\"Bolo\",\"pt_BR\":\"Bolo\",\"ru\":\"Торт\",\"si\":null,\"sk\":\"Torta\",\"sq\":\"Tortë\",\"sr\":\"торта\",\"sv\":\"Tårta\",\"szl\":null,\"tzm\":null,\"uk\":\"Пиріг\",\"vi\":\"Bánh\",\"zh_Hans\":\"蛋糕\",\"zh_Hant\":\"蛋糕\"}},{\"number\":29,\"emoji\":\"❤️\",\"description\":\"Heart\",\"unicode\":\"U+2764U+FE0F\",\"translated_descriptions\":{\"ar\":\"قَلب\",\"bg\":\"Сърце\",\"ca\":\"Cor\",\"cs\":\"Srdce\",\"de\":\"Herz\",\"eo\":\"Koro\",\"es\":\"Corazón\",\"et\":\"Süda\",\"fa\":\"قلب\",\"fi\":\"Sydän\",\"fr\":\"Cœur\",\"hr\":\"srca\",\"hu\":\"Szív\",\"id\":\"Hati\",\"it\":\"Cuore\",\"ja\":\"ハート\",\"nb_NO\":\"Hjerte\",\"nl\":\"Hart\",\"pt\":\"Coração\",\"pt_BR\":\"Coração\",\"ru\":\"Сердце\",\"si\":null,\"sk\":\"Srdce\",\"sq\":\"Zemër\",\"sr\":\"срце\",\"sv\":\"Hjärta\",\"szl\":null,\"tzm\":\"Ul\",\"uk\":\"Серце\",\"vi\":\"Tim\",\"zh_Hans\":\"心\",\"zh_Hant\":\"愛心\"}},{\"number\":30,\"emoji\":\"😀\",\"description\":\"Smiley\",\"unicode\":\"U+1F600\",\"translated_descriptions\":{\"ar\":\"اِبتِسَامَة\",\"bg\":\"Усмивка\",\"ca\":\"Somrient\",\"cs\":\"Smajlík\",\"de\":\"Lächeln\",\"eo\":\"Rideto\",\"es\":\"Emoticono\",\"et\":\"Smaili\",\"fa\":\"خنده\",\"fi\":\"Hymynaama\",\"fr\":\"Sourire\",\"hr\":\"smajlića\",\"hu\":\"Mosoly\",\"id\":\"Senyuman\",\"it\":\"Faccina sorridente\",\"ja\":\"スマイル\",\"nb_NO\":\"Smilefjes\",\"nl\":\"Smiley\",\"pt\":\"Sorriso\",\"pt_BR\":\"Sorriso\",\"ru\":\"Улыбка\",\"si\":null,\"sk\":\"Smajlík\",\"sq\":\"Emotikon\",\"sr\":\"смајли\",\"sv\":\"Smiley\",\"szl\":null,\"tzm\":null,\"uk\":\"Посмішка\",\"vi\":\"Mặt cười\",\"zh_Hans\":\"笑脸\",\"zh_Hant\":\"笑臉\"}},{\"number\":31,\"emoji\":\"🤖\",\"description\":\"Robot\",\"unicode\":\"U+1F916\",\"translated_descriptions\":{\"ar\":\"رُوبُوت\",\"bg\":\"Робот\",\"ca\":\"Robot\",\"cs\":\"Robot\",\"de\":\"Roboter\",\"eo\":\"Roboto\",\"es\":\"Robot\",\"et\":\"Robot\",\"fa\":\"ربات\",\"fi\":\"Robotti\",\"fr\":\"Robot\",\"hr\":\"robot\",\"hu\":\"Robot\",\"id\":\"Robot\",\"it\":\"Robot\",\"ja\":\"ロボット\",\"nb_NO\":\"Robot\",\"nl\":\"Robot\",\"pt\":\"Robô\",\"pt_BR\":\"Robô\",\"ru\":\"Робот\",\"si\":null,\"sk\":\"Robot\",\"sq\":\"Robot\",\"sr\":\"робот\",\"sv\":\"Robot\",\"szl\":null,\"tzm\":\"Aṛubu\",\"uk\":\"Робот\",\"vi\":\"Rô-bô\",\"zh_Hans\":\"机器人\",\"zh_Hant\":\"機器人\"}},{\"number\":32,\"emoji\":\"🎩\",\"description\":\"Hat\",\"unicode\":\"U+1F3A9\",\"translated_descriptions\":{\"ar\":\"قُبَّعَة\",\"bg\":\"Шапка\",\"ca\":\"Barret\",\"cs\":\"Klobouk\",\"de\":\"Hut\",\"eo\":\"Ĉapelo\",\"es\":\"Sombrero\",\"et\":\"Kübar\",\"fa\":\"کلاه\",\"fi\":\"Hattu\",\"fr\":\"Chapeau\",\"hr\":\"kapa\",\"hu\":\"Kalap\",\"id\":\"Topi\",\"it\":\"Cappello\",\"ja\":\"帽子\",\"nb_NO\":\"Hatt\",\"nl\":\"Hoed\",\"pt\":\"Chapéu\",\"pt_BR\":\"Chapéu\",\"ru\":\"Шляпа\",\"si\":null,\"sk\":\"Klobúk\",\"sq\":\"Kapë\",\"sr\":\"шешир\",\"sv\":\"Hatt\",\"szl\":null,\"tzm\":\"Taraza\",\"uk\":\"Капелюх\",\"vi\":\"Mũ\",\"zh_Hans\":\"帽子\",\"zh_Hant\":\"帽子\"}},{\"number\":33,\"emoji\":\"👓\",\"description\":\"Glasses\",\"unicode\":\"U+1F453\",\"translated_descriptions\":{\"ar\":\"نَظَّارَة\",\"bg\":\"Очила\",\"ca\":\"Ulleres\",\"cs\":\"Brýle\",\"de\":\"Brille\",\"eo\":\"Okulvitroj\",\"es\":\"Gafas\",\"et\":\"Prillid\",\"fa\":\"عینک\",\"fi\":\"Silmälasit\",\"fr\":\"Lunettes\",\"hr\":\"naočale\",\"hu\":\"Szemüveg\",\"id\":\"Kacamata\",\"it\":\"Occhiali\",\"ja\":\"めがね\",\"nb_NO\":\"Briller\",\"nl\":\"Bril\",\"pt\":\"Óculos\",\"pt_BR\":\"Óculos\",\"ru\":\"Очки\",\"si\":null,\"sk\":\"Okuliare\",\"sq\":\"Syze\",\"sr\":\"наочаре\",\"sv\":\"Glasögon\",\"szl\":null,\"tzm\":null,\"uk\":\"Окуляри\",\"vi\":\"Kính mắt\",\"zh_Hans\":\"眼镜\",\"zh_Hant\":\"眼鏡\"}},{\"number\":34,\"emoji\":\"🔧\",\"description\":\"Spanner\",\"unicode\":\"U+1F527\",\"translated_descriptions\":{\"ar\":\"مِفتَاحُ رَبط\",\"bg\":\"Гаечен ключ\",\"ca\":\"Clau anglesa\",\"cs\":\"Klíč\",\"de\":\"Schraubenschlüssel\",\"eo\":\"Ŝraŭbŝlosilo\",\"es\":\"Llave inglesa\",\"et\":\"Mutrivõti\",\"fa\":\"آچار\",\"fi\":\"Kiintoavain\",\"fr\":\"Clé à molette\",\"hr\":\"ključ\",\"hu\":\"Csavarkulcs\",\"id\":\"Kunci Bengkel\",\"it\":\"Chiave inglese\",\"ja\":\"スパナ\",\"nb_NO\":\"Fastnøkkel\",\"nl\":\"Moersleutel\",\"pt\":\"Chave inglesa\",\"pt_BR\":\"Chave inglesa\",\"ru\":\"Ключ\",\"si\":null,\"sk\":\"Vidlicový kľúč\",\"sq\":\"Çelës\",\"sr\":\"кључ\",\"sv\":\"Skruvnyckel\",\"szl\":null,\"tzm\":null,\"uk\":\"Гайковий ключ\",\"vi\":\"Cờ-lê\",\"zh_Hans\":\"扳手\",\"zh_Hant\":\"扳手\"}},{\"number\":35,\"emoji\":\"🎅\",\"description\":\"Santa\",\"unicode\":\"U+1F385\",\"translated_descriptions\":{\"ar\":\"سانتا\",\"bg\":\"Дядо Коледа\",\"ca\":\"Pare Noél\",\"cs\":\"Mikuláš\",\"de\":\"Weihnachtsmann\",\"eo\":\"Kristnaska viro\",\"es\":\"Papá Noel\",\"et\":\"Jõuluvana\",\"fa\":\"بابا نوئل\",\"fi\":\"Joulupukki\",\"fr\":\"Père Noël\",\"hr\":\"deda Mraz\",\"hu\":\"Télapó\",\"id\":\"Santa\",\"it\":\"Babbo Natale\",\"ja\":\"サンタ\",\"nb_NO\":\"Julenisse\",\"nl\":\"Kerstman\",\"pt\":\"Pai Natal\",\"pt_BR\":\"Papai-noel\",\"ru\":\"Санта\",\"si\":null,\"sk\":\"Mikuláš\",\"sq\":\"Babagjyshi i Vitit të Ri\",\"sr\":\"деда Мраз\",\"sv\":\"Tomte\",\"szl\":null,\"tzm\":null,\"uk\":\"Санта Клаус\",\"vi\":\"ông già Nô-en\",\"zh_Hans\":\"圣诞老人\",\"zh_Hant\":\"聖誕老人\"}},{\"number\":36,\"emoji\":\"👍\",\"description\":\"Thumbs Up\",\"unicode\":\"U+1F44D\",\"translated_descriptions\":{\"ar\":\"رَفعُ إِبهَام\",\"bg\":\"Палец нагоре\",\"ca\":\"Polzes amunt\",\"cs\":\"Palec nahoru\",\"de\":\"Daumen Hoch\",\"eo\":\"Dikfingro supren\",\"es\":\"Pulgar arriba\",\"et\":\"Pöidlad püsti\",\"fa\":\"لایک\",\"fi\":\"Peukalo ylös\",\"fr\":\"Pouce en l’air\",\"hr\":\"palac gore\",\"hu\":\"Hüvelykujj fel\",\"id\":\"Jempol\",\"it\":\"Pollice alzato\",\"ja\":\"いいね\",\"nb_NO\":\"Tommel Opp\",\"nl\":\"Duim omhoog\",\"pt\":\"Polegar para cima\",\"pt_BR\":\"Joinha\",\"ru\":\"Большой палец вверх\",\"si\":null,\"sk\":\"Palec nahor\",\"sq\":null,\"sr\":\"палчић горе\",\"sv\":\"Tummen upp\",\"szl\":null,\"tzm\":null,\"uk\":\"Великий палець вгору\",\"vi\":\"Thích\",\"zh_Hans\":\"赞\",\"zh_Hant\":\"讚\"}},{\"number\":37,\"emoji\":\"☂️\",\"description\":\"Umbrella\",\"unicode\":\"U+2602U+FE0F\",\"translated_descriptions\":{\"ar\":\"مِظَلَّة\",\"bg\":\"Чадър\",\"ca\":\"Paraigües\",\"cs\":\"Deštník\",\"de\":\"Regenschirm\",\"eo\":\"Ombrelo\",\"es\":\"Paraguas\",\"et\":\"Vihmavari\",\"fa\":\"چتر\",\"fi\":\"Sateenvarjo\",\"fr\":\"Parapluie\",\"hr\":\"kišobran\",\"hu\":\"Esernyő\",\"id\":\"Payung\",\"it\":\"Ombrello\",\"ja\":\"傘\",\"nb_NO\":\"Paraply\",\"nl\":\"Paraplu\",\"pt\":\"Guarda-chuva\",\"pt_BR\":\"Guarda-chuva\",\"ru\":\"Зонт\",\"si\":null,\"sk\":\"Dáždnik\",\"sq\":\"Ombrellë\",\"sr\":\"кишобран\",\"sv\":\"Paraply\",\"szl\":null,\"tzm\":null,\"uk\":\"Парасолька\",\"vi\":\"Cái ô\",\"zh_Hans\":\"伞\",\"zh_Hant\":\"雨傘\"}},{\"number\":38,\"emoji\":\"⌛\",\"description\":\"Hourglass\",\"unicode\":\"U+231B\",\"translated_descriptions\":{\"ar\":\"سَاعَةٌ رَملِيَّة\",\"bg\":\"Пясъчен часовник\",\"ca\":\"Rellotge de sorra\",\"cs\":\"Přesýpací hodiny\",\"de\":\"Sanduhr\",\"eo\":\"Sablohorloĝo\",\"es\":\"Reloj de arena\",\"et\":\"Liivakell\",\"fa\":\"ساعت شنی\",\"fi\":\"Tiimalasi\",\"fr\":\"Sablier\",\"hr\":\"pješčani sat\",\"hu\":\"Homokóra\",\"id\":\"Jam Pasir\",\"it\":\"Clessidra\",\"ja\":\"砂時計\",\"nb_NO\":\"Timeglass\",\"nl\":\"Zandloper\",\"pt\":\"Ampulheta\",\"pt_BR\":\"Ampulheta\",\"ru\":\"Песочные часы\",\"si\":null,\"sk\":\"Presýpacie hodiny\",\"sq\":\"Klepsidër\",\"sr\":\"пешчаник\",\"sv\":\"Timglas\",\"szl\":null,\"tzm\":null,\"uk\":\"Пісковий годинник\",\"vi\":\"Đồng hồ cát\",\"zh_Hans\":\"沙漏\",\"zh_Hant\":\"沙漏\"}},{\"number\":39,\"emoji\":\"⏰\",\"description\":\"Clock\",\"unicode\":\"U+23F0\",\"translated_descriptions\":{\"ar\":\"سَاعَة\",\"bg\":\"Часовник\",\"ca\":\"Rellotge\",\"cs\":\"Hodiny\",\"de\":\"Uhr\",\"eo\":\"Horloĝo\",\"es\":\"Reloj\",\"et\":\"Kell\",\"fa\":\"ساعت\",\"fi\":\"Pöytäkello\",\"fr\":\"Réveil\",\"hr\":\"sat\",\"hu\":\"Óra\",\"id\":\"Jam\",\"it\":\"Orologio\",\"ja\":\"時計\",\"nb_NO\":\"Klokke\",\"nl\":\"Wekker\",\"pt\":\"Relógio\",\"pt_BR\":\"Relógio\",\"ru\":\"Часы\",\"si\":null,\"sk\":\"Budík\",\"sq\":\"Sahat\",\"sr\":\"сат\",\"sv\":\"Klocka\",\"szl\":null,\"tzm\":null,\"uk\":\"Годинник\",\"vi\":\"Đồng hồ\",\"zh_Hans\":\"时钟\",\"zh_Hant\":\"時鐘\"}},{\"number\":40,\"emoji\":\"🎁\",\"description\":\"Gift\",\"unicode\":\"U+1F381\",\"translated_descriptions\":{\"ar\":\"هَدِيَّة\",\"bg\":\"Подарък\",\"ca\":\"Regal\",\"cs\":\"Dárek\",\"de\":\"Geschenk\",\"eo\":\"Donaco\",\"es\":\"Regalo\",\"et\":\"Kingitus\",\"fa\":\"هدیه\",\"fi\":\"Lahja\",\"fr\":\"Cadeau\",\"hr\":\"poklon\",\"hu\":\"Ajándék\",\"id\":\"Kado\",\"it\":\"Regalo\",\"ja\":\"ギフト\",\"nb_NO\":\"Gave\",\"nl\":\"Geschenk\",\"pt\":\"Presente\",\"pt_BR\":\"Presente\",\"ru\":\"Подарок\",\"si\":null,\"sk\":\"Darček\",\"sq\":\"Dhuratë\",\"sr\":\"поклон\",\"sv\":\"Present\",\"szl\":null,\"tzm\":null,\"uk\":\"Подарунок\",\"vi\":\"Quà tặng\",\"zh_Hans\":\"礼物\",\"zh_Hant\":\"禮物\"}},{\"number\":41,\"emoji\":\"💡\",\"description\":\"Light Bulb\",\"unicode\":\"U+1F4A1\",\"translated_descriptions\":{\"ar\":\"مِصبَاح\",\"bg\":\"Лампа\",\"ca\":\"Bombeta\",\"cs\":\"Žárovka\",\"de\":\"Glühbirne\",\"eo\":\"Lampo\",\"es\":\"Bombilla\",\"et\":\"Lambipirn\",\"fa\":\"لامپ\",\"fi\":\"Hehkulamppu\",\"fr\":\"Ampoule\",\"hr\":\"žarulja\",\"hu\":\"Égő\",\"id\":\"Bohlam Lampu\",\"it\":\"Lampadina\",\"ja\":\"電球\",\"nb_NO\":\"Lyspære\",\"nl\":\"Gloeilamp\",\"pt\":\"Lâmpada\",\"pt_BR\":\"Lâmpada\",\"ru\":\"Лампочка\",\"si\":null,\"sk\":\"Žiarovka\",\"sq\":\"Llambë\",\"sr\":\"сијалица\",\"sv\":\"Lampa\",\"szl\":null,\"tzm\":null,\"uk\":\"Лампочка\",\"vi\":\"Bóng đèn tròn\",\"zh_Hans\":\"灯泡\",\"zh_Hant\":\"燈泡\"}},{\"number\":42,\"emoji\":\"📕\",\"description\":\"Book\",\"unicode\":\"U+1F4D5\",\"translated_descriptions\":{\"ar\":\"كِتَاب\",\"bg\":\"Книга\",\"ca\":\"Llibre\",\"cs\":\"Kniha\",\"de\":\"Buch\",\"eo\":\"Libro\",\"es\":\"Libro\",\"et\":\"Raamat\",\"fa\":\"کتاب\",\"fi\":\"Kirja\",\"fr\":\"Livre\",\"hr\":\"knjiga\",\"hu\":\"Könyv\",\"id\":\"Buku\",\"it\":\"Libro\",\"ja\":\"本\",\"nb_NO\":\"Bok\",\"nl\":\"Boek\",\"pt\":\"Livro\",\"pt_BR\":\"Livro\",\"ru\":\"Книга\",\"si\":null,\"sk\":\"Kniha\",\"sq\":\"Libër\",\"sr\":\"књига\",\"sv\":\"Bok\",\"szl\":null,\"tzm\":\"Adlis\",\"uk\":\"Книга\",\"vi\":\"Sách\",\"zh_Hans\":\"书\",\"zh_Hant\":\"書\"}},{\"number\":43,\"emoji\":\"✏️\",\"description\":\"Pencil\",\"unicode\":\"U+270FU+FE0F\",\"translated_descriptions\":{\"ar\":\"قَلَمُ رَصاص\",\"bg\":\"Молив\",\"ca\":\"Llapis\",\"cs\":\"Tužka\",\"de\":\"Bleistift\",\"eo\":\"Krajono\",\"es\":\"Lápiz\",\"et\":\"Pliiats\",\"fa\":\"مداد\",\"fi\":\"Lyijykynä\",\"fr\":\"Crayon\",\"hr\":\"olovka\",\"hu\":\"Ceruza\",\"id\":\"Pensil\",\"it\":\"Matita\",\"ja\":\"鉛筆\",\"nb_NO\":\"Blyant\",\"nl\":\"Potlood\",\"pt\":\"Lápis\",\"pt_BR\":\"Lápis\",\"ru\":\"Карандаш\",\"si\":null,\"sk\":\"Ceruzka\",\"sq\":\"Laps\",\"sr\":\"оловка\",\"sv\":\"Penna\",\"szl\":null,\"tzm\":null,\"uk\":\"Олівець\",\"vi\":\"Viết chì\",\"zh_Hans\":\"铅笔\",\"zh_Hant\":\"鉛筆\"}},{\"number\":44,\"emoji\":\"📎\",\"description\":\"Paperclip\",\"unicode\":\"U+1F4CE\",\"translated_descriptions\":{\"ar\":\"مِشبَكُ وَرَق\",\"bg\":\"Кламер\",\"ca\":\"Clip\",\"cs\":\"Sponka\",\"de\":\"Büroklammer\",\"eo\":\"Paperkuntenilo\",\"es\":\"Clip\",\"et\":\"Kirjaklamber\",\"fa\":\"گیره کاغذ\",\"fi\":\"Paperiliitin\",\"fr\":\"Trombone\",\"hr\":\"spajalica\",\"hu\":\"Gémkapocs\",\"id\":\"Klip Kertas\",\"it\":\"Graffetta\",\"ja\":\"クリップ\",\"nb_NO\":\"BInders\",\"nl\":\"Papierklemmetje\",\"pt\":\"Clipe\",\"pt_BR\":\"Clipe de papel\",\"ru\":\"Скрепка\",\"si\":null,\"sk\":\"Kancelárska sponka\",\"sq\":\"Kapëse\",\"sr\":\"спајалица\",\"sv\":\"Gem\",\"szl\":null,\"tzm\":null,\"uk\":\"Спиначка\",\"vi\":\"Kẹp giấy\",\"zh_Hans\":\"回形针\",\"zh_Hant\":\"迴紋針\"}},{\"number\":45,\"emoji\":\"✂️\",\"description\":\"Scissors\",\"unicode\":\"U+2702U+FE0F\",\"translated_descriptions\":{\"ar\":\"مِقَصّ\",\"bg\":\"Ножици\",\"ca\":\"Tisores\",\"cs\":\"Nůžky\",\"de\":\"Schere\",\"eo\":\"Tondilo\",\"es\":\"Tijeras\",\"et\":\"Käärid\",\"fa\":\"قیچی\",\"fi\":\"Sakset\",\"fr\":\"Ciseaux\",\"hr\":\"škare\",\"hu\":\"Olló\",\"id\":\"Gunting\",\"it\":\"Forbici\",\"ja\":\"はさみ\",\"nb_NO\":\"Saks\",\"nl\":\"Schaar\",\"pt\":\"Tesoura\",\"pt_BR\":\"Tesoura\",\"ru\":\"Ножницы\",\"si\":null,\"sk\":\"Nožnice\",\"sq\":\"Gërshërë\",\"sr\":\"маказе\",\"sv\":\"Sax\",\"szl\":null,\"tzm\":null,\"uk\":\"Ножиці\",\"vi\":\"Cái kéo\",\"zh_Hans\":\"剪刀\",\"zh_Hant\":\"剪刀\"}},{\"number\":46,\"emoji\":\"🔒\",\"description\":\"Lock\",\"unicode\":\"U+1F512\",\"translated_descriptions\":{\"ar\":\"قُفل\",\"bg\":\"Катинар\",\"ca\":\"Cadenat\",\"cs\":\"Zámek\",\"de\":\"Schloss\",\"eo\":\"Seruro\",\"es\":\"Candado\",\"et\":\"Lukk\",\"fa\":\"قفل\",\"fi\":\"Lukko\",\"fr\":\"Cadenas\",\"hr\":\"zaključati\",\"hu\":\"Lakat\",\"id\":\"Gembok\",\"it\":\"Lucchetto\",\"ja\":\"錠前\",\"nb_NO\":\"Lås\",\"nl\":\"Slot\",\"pt\":\"Cadeado\",\"pt_BR\":\"Cadeado\",\"ru\":\"Замок\",\"si\":null,\"sk\":\"Zámka\",\"sq\":\"Dry\",\"sr\":\"катанац\",\"sv\":\"Lås\",\"szl\":null,\"tzm\":null,\"uk\":\"Замок\",\"vi\":\"Ổ khóa\",\"zh_Hans\":\"锁\",\"zh_Hant\":\"鎖頭\"}},{\"number\":47,\"emoji\":\"🔑\",\"description\":\"Key\",\"unicode\":\"U+1F511\",\"translated_descriptions\":{\"ar\":\"مِفتَاح\",\"bg\":\"Ключ\",\"ca\":\"Clau\",\"cs\":\"Klíč ke dveřím\",\"de\":\"Schlüssel\",\"eo\":\"Ŝlosilo\",\"es\":\"Llave\",\"et\":\"Võti\",\"fa\":\"کلید\",\"fi\":\"Avain\",\"fr\":\"Clé\",\"hr\":\"ključ\",\"hu\":\"Kulcs\",\"id\":\"Kunci\",\"it\":\"Chiave\",\"ja\":\"鍵\",\"nb_NO\":\"Nøkkel\",\"nl\":\"Sleutel\",\"pt\":\"Chave\",\"pt_BR\":\"Chave\",\"ru\":\"Ключ\",\"si\":null,\"sk\":\"Kľúč\",\"sq\":\"Çelës\",\"sr\":\"кључ\",\"sv\":\"Nyckel\",\"szl\":null,\"tzm\":\"Tasarut\",\"uk\":\"Ключ\",\"vi\":\"Chìa khóa\",\"zh_Hans\":\"钥匙\",\"zh_Hant\":\"鑰匙\"}},{\"number\":48,\"emoji\":\"🔨\",\"description\":\"Hammer\",\"unicode\":\"U+1F528\",\"translated_descriptions\":{\"ar\":\"مِطرَقَة\",\"bg\":\"Чук\",\"ca\":\"Martell\",\"cs\":\"Kladivo\",\"de\":\"Hammer\",\"eo\":\"Martelo\",\"es\":\"Martillo\",\"et\":\"Haamer\",\"fa\":\"چکش\",\"fi\":\"Vasara\",\"fr\":\"Marteau\",\"hr\":\"čekić\",\"hu\":\"Kalapács\",\"id\":\"Palu\",\"it\":\"Martello\",\"ja\":\"金槌\",\"nb_NO\":\"Hammer\",\"nl\":\"Hamer\",\"pt\":\"Martelo\",\"pt_BR\":\"Martelo\",\"ru\":\"Молоток\",\"si\":null,\"sk\":\"Kladivo\",\"sq\":\"Çekiç\",\"sr\":\"чекић\",\"sv\":\"Hammare\",\"szl\":null,\"tzm\":null,\"uk\":\"Молоток\",\"vi\":\"Búa\",\"zh_Hans\":\"锤子\",\"zh_Hant\":\"鎚子\"}},{\"number\":49,\"emoji\":\"☎️\",\"description\":\"Telephone\",\"unicode\":\"U+260EU+FE0F\",\"translated_descriptions\":{\"ar\":\"تِلِفُون\",\"bg\":\"Телефон\",\"ca\":\"Telèfon\",\"cs\":\"Telefon\",\"de\":\"Telefon\",\"eo\":\"Telefono\",\"es\":\"Teléfono\",\"et\":\"Telefon\",\"fa\":\"تلفن\",\"fi\":\"Puhelin\",\"fr\":\"Téléphone\",\"hr\":\"telefon\",\"hu\":\"Telefon\",\"id\":\"Telepon\",\"it\":\"Telefono\",\"ja\":\"電話機\",\"nb_NO\":\"Telefon\",\"nl\":\"Telefoon\",\"pt\":\"Telefone\",\"pt_BR\":\"Telefone\",\"ru\":\"Телефон\",\"si\":null,\"sk\":\"Telefón\",\"sq\":\"Telefon\",\"sr\":\"телефон\",\"sv\":\"Telefon\",\"szl\":null,\"tzm\":\"Atilifun\",\"uk\":\"Телефон\",\"vi\":\"Điện thoại\",\"zh_Hans\":\"电话\",\"zh_Hant\":\"電話\"}},{\"number\":50,\"emoji\":\"🏁\",\"description\":\"Flag\",\"unicode\":\"U+1F3C1\",\"translated_descriptions\":{\"ar\":\"عَلَم\",\"bg\":\"Флаг\",\"ca\":\"Bandera\",\"cs\":\"Vlajka\",\"de\":\"Flagge\",\"eo\":\"Flago\",\"es\":\"Bandera\",\"et\":\"Lipp\",\"fa\":\"پرچم\",\"fi\":\"Lippu\",\"fr\":\"Drapeau\",\"hr\":\"zastava\",\"hu\":\"Zászló\",\"id\":\"Bendera\",\"it\":\"Bandiera\",\"ja\":\"旗\",\"nb_NO\":\"Flagg\",\"nl\":\"Vlag\",\"pt\":\"Bandeira\",\"pt_BR\":\"Bandeira\",\"ru\":\"Флаг\",\"si\":null,\"sk\":\"Zástava\",\"sq\":\"Flamur\",\"sr\":\"застава\",\"sv\":\"Flagga\",\"szl\":null,\"tzm\":\"Acenyal\",\"uk\":\"Прапор\",\"vi\":\"Lá cờ\",\"zh_Hans\":\"旗帜\",\"zh_Hant\":\"旗幟\"}},{\"number\":51,\"emoji\":\"🚂\",\"description\":\"Train\",\"unicode\":\"U+1F682\",\"translated_descriptions\":{\"ar\":\"قِطَار\",\"bg\":\"Влак\",\"ca\":\"Tren\",\"cs\":\"Vlak\",\"de\":\"Zug\",\"eo\":\"Vagonaro\",\"es\":\"Tren\",\"et\":\"Rong\",\"fa\":\"قطار\",\"fi\":\"Juna\",\"fr\":\"Train\",\"hr\":\"vlak\",\"hu\":\"Vonat\",\"id\":\"Kereta Api\",\"it\":\"Treno\",\"ja\":\"電車\",\"nb_NO\":\"Tog\",\"nl\":\"Trein\",\"pt\":\"Comboio\",\"pt_BR\":\"Trem\",\"ru\":\"Поезд\",\"si\":null,\"sk\":\"Vlak\",\"sq\":\"Tren\",\"sr\":\"воз\",\"sv\":\"Tåg\",\"szl\":null,\"tzm\":null,\"uk\":\"Потяг\",\"vi\":\"Xe lửa\",\"zh_Hans\":\"火车\",\"zh_Hant\":\"火車\"}},{\"number\":52,\"emoji\":\"🚲\",\"description\":\"Bicycle\",\"unicode\":\"U+1F6B2\",\"translated_descriptions\":{\"ar\":\"دَرّاجَة\",\"bg\":\"Колело\",\"ca\":\"Bicicleta\",\"cs\":\"Kolo\",\"de\":\"Fahrrad\",\"eo\":\"Biciklo\",\"es\":\"Bicicleta\",\"et\":\"Jalgratas\",\"fa\":\"دوچرخه\",\"fi\":\"Polkupyörä\",\"fr\":\"Vélo\",\"hr\":\"bicikl\",\"hu\":\"Kerékpár\",\"id\":\"Sepeda\",\"it\":\"Bicicletta\",\"ja\":\"自転車\",\"nb_NO\":\"Sykkel\",\"nl\":\"Fiets\",\"pt\":\"Bicicleta\",\"pt_BR\":\"Bicicleta\",\"ru\":\"Велосипед\",\"si\":null,\"sk\":\"Bicykel\",\"sq\":\"Biçikletë\",\"sr\":\"бицикл\",\"sv\":\"Cykel\",\"szl\":null,\"tzm\":null,\"uk\":\"Велосипед\",\"vi\":\"Xe đạp\",\"zh_Hans\":\"自行车\",\"zh_Hant\":\"腳踏車\"}},{\"number\":53,\"emoji\":\"✈️\",\"description\":\"Aeroplane\",\"unicode\":\"U+2708U+FE0F\",\"translated_descriptions\":{\"ar\":\"طَائِرة\",\"bg\":\"Самолет\",\"ca\":\"Avió\",\"cs\":\"Letadlo\",\"de\":\"Flugzeug\",\"eo\":\"Aviadilo\",\"es\":\"Avión\",\"et\":\"Lennuk\",\"fa\":\"هواپیما\",\"fi\":\"Lentokone\",\"fr\":\"Avion\",\"hr\":\"avion\",\"hu\":\"Repülő\",\"id\":\"Pesawat\",\"it\":\"Aeroplano\",\"ja\":\"飛行機\",\"nb_NO\":\"Fly\",\"nl\":\"Vliegtuig\",\"pt\":\"Avião\",\"pt_BR\":\"Avião\",\"ru\":\"Самолет\",\"si\":null,\"sk\":\"Lietadlo\",\"sq\":\"Avion\",\"sr\":\"авион\",\"sv\":\"Flygplan\",\"szl\":null,\"tzm\":null,\"uk\":\"Літак\",\"vi\":\"Máy bay\",\"zh_Hans\":\"飞机\",\"zh_Hant\":\"飛機\"}},{\"number\":54,\"emoji\":\"🚀\",\"description\":\"Rocket\",\"unicode\":\"U+1F680\",\"translated_descriptions\":{\"ar\":\"صَارُوخ\",\"bg\":\"Ракета\",\"ca\":\"Coet\",\"cs\":\"Raketa\",\"de\":\"Rakete\",\"eo\":\"Raketo\",\"es\":\"Cohete\",\"et\":\"Rakett\",\"fa\":\"موشک\",\"fi\":\"Raketti\",\"fr\":\"Fusée\",\"hr\":\"raketa\",\"hu\":\"Rakáta\",\"id\":\"Roket\",\"it\":\"Razzo\",\"ja\":\"ロケット\",\"nb_NO\":\"Rakett\",\"nl\":\"Raket\",\"pt\":\"Foguetão\",\"pt_BR\":\"Foguete\",\"ru\":\"Ракета\",\"si\":null,\"sk\":\"Raketa\",\"sq\":\"Raketë\",\"sr\":\"ракета\",\"sv\":\"Raket\",\"szl\":null,\"tzm\":null,\"uk\":\"Ракета\",\"vi\":\"Tên lửa\",\"zh_Hans\":\"火箭\",\"zh_Hant\":\"火箭\"}},{\"number\":55,\"emoji\":\"🏆\",\"description\":\"Trophy\",\"unicode\":\"U+1F3C6\",\"translated_descriptions\":{\"ar\":\"كَأسُ النَّصر\",\"bg\":\"Трофей\",\"ca\":\"Trofeu\",\"cs\":\"Pohár\",\"de\":\"Pokal\",\"eo\":\"Trofeo\",\"es\":\"Trofeo\",\"et\":\"Auhind\",\"fa\":\"جام\",\"fi\":\"Palkinto\",\"fr\":\"Trophée\",\"hr\":\"trofej\",\"hu\":\"Trófea\",\"id\":\"Piala\",\"it\":\"Trofeo\",\"ja\":\"トロフィー\",\"nb_NO\":\"Pokal\",\"nl\":\"Trofee\",\"pt\":\"Troféu\",\"pt_BR\":\"Troféu\",\"ru\":\"Кубок\",\"si\":null,\"sk\":\"Trofej\",\"sq\":\"Trofe\",\"sr\":\"пехар\",\"sv\":\"Trofé\",\"szl\":null,\"tzm\":null,\"uk\":\"Приз\",\"vi\":\"Cúp\",\"zh_Hans\":\"奖杯\",\"zh_Hant\":\"獎盃\"}},{\"number\":56,\"emoji\":\"⚽\",\"description\":\"Ball\",\"unicode\":\"U+26BD\",\"translated_descriptions\":{\"ar\":\"كُرَة\",\"bg\":\"Топка\",\"ca\":\"Pilota\",\"cs\":\"Míč\",\"de\":\"Ball\",\"eo\":\"Pilko\",\"es\":\"Bola\",\"et\":\"Pall\",\"fa\":\"توپ\",\"fi\":\"Pallo\",\"fr\":\"Ballon\",\"hr\":\"lopta\",\"hu\":\"Labda\",\"id\":\"Bola\",\"it\":\"Palla\",\"ja\":\"ボール\",\"nb_NO\":\"Ball\",\"nl\":\"Bal\",\"pt\":\"Bola\",\"pt_BR\":\"Bola\",\"ru\":\"Мяч\",\"si\":null,\"sk\":\"Lopta\",\"sq\":\"Top\",\"sr\":\"лопта\",\"sv\":\"Boll\",\"szl\":null,\"tzm\":\"Tcama\",\"uk\":\"М'яч\",\"vi\":\"Banh\",\"zh_Hans\":\"球\",\"zh_Hant\":\"足球\"}},{\"number\":57,\"emoji\":\"🎸\",\"description\":\"Guitar\",\"unicode\":\"U+1F3B8\",\"translated_descriptions\":{\"ar\":\"غيتار\",\"bg\":\"Китара\",\"ca\":\"Guitarra\",\"cs\":\"Kytara\",\"de\":\"Gitarre\",\"eo\":\"Gitaro\",\"es\":\"Guitarra\",\"et\":\"Kitarr\",\"fa\":\"گیتار\",\"fi\":\"Kitara\",\"fr\":\"Guitare\",\"hr\":\"gitara\",\"hu\":\"Gitár\",\"id\":\"Gitar\",\"it\":\"Chitarra\",\"ja\":\"ギター\",\"nb_NO\":\"Gitar\",\"nl\":\"Gitaar\",\"pt\":\"Guitarra\",\"pt_BR\":\"Guitarra\",\"ru\":\"Гитара\",\"si\":null,\"sk\":\"Gitara\",\"sq\":\"Kitarë\",\"sr\":\"гитара\",\"sv\":\"Gitarr\",\"szl\":null,\"tzm\":\"Agiṭaṛ\",\"uk\":\"Гітара\",\"vi\":\"Ghi-ta\",\"zh_Hans\":\"吉他\",\"zh_Hant\":\"吉他\"}},{\"number\":58,\"emoji\":\"🎺\",\"description\":\"Trumpet\",\"unicode\":\"U+1F3BA\",\"translated_descriptions\":{\"ar\":\"بُوق\",\"bg\":\"Тромпет\",\"ca\":\"Trompeta\",\"cs\":\"Trumpeta\",\"de\":\"Trompete\",\"eo\":\"Trumpeto\",\"es\":\"Trompeta\",\"et\":\"Trompet\",\"fa\":\"شیپور\",\"fi\":\"Trumpetti\",\"fr\":\"Trompette\",\"hr\":\"truba\",\"hu\":\"Trombita\",\"id\":\"Terompet\",\"it\":\"Trombetta\",\"ja\":\"トランペット\",\"nb_NO\":\"Trompet\",\"nl\":\"Trompet\",\"pt\":\"Trompete\",\"pt_BR\":\"Trombeta\",\"ru\":\"Труба\",\"si\":null,\"sk\":\"Trúbka\",\"sq\":\"Trombë\",\"sr\":\"труба\",\"sv\":\"Trumpet\",\"szl\":null,\"tzm\":null,\"uk\":\"Труба\",\"vi\":\"Kèn\",\"zh_Hans\":\"喇叭\",\"zh_Hant\":\"喇叭\"}},{\"number\":59,\"emoji\":\"🔔\",\"description\":\"Bell\",\"unicode\":\"U+1F514\",\"translated_descriptions\":{\"ar\":\"جَرَس\",\"bg\":\"Звънец\",\"ca\":\"Campana\",\"cs\":\"Zvonek\",\"de\":\"Glocke\",\"eo\":\"Sonorilo\",\"es\":\"Campana\",\"et\":\"Kelluke\",\"fa\":\"زنگ\",\"fi\":\"Soittokello\",\"fr\":\"Cloche\",\"hr\":\"zvono\",\"hu\":\"Harang\",\"id\":\"Lonceng\",\"it\":\"Campana\",\"ja\":\"ベル\",\"nb_NO\":\"Bjelle\",\"nl\":\"Bel\",\"pt\":\"Sino\",\"pt_BR\":\"Sino\",\"ru\":\"Колокол\",\"si\":null,\"sk\":\"Zvonec\",\"sq\":\"Kambanë\",\"sr\":\"звоно\",\"sv\":\"Bjällra\",\"szl\":null,\"tzm\":null,\"uk\":\"Дзвін\",\"vi\":\"Chuông\",\"zh_Hans\":\"铃铛\",\"zh_Hant\":\"鈴鐺\"}},{\"number\":60,\"emoji\":\"⚓\",\"description\":\"Anchor\",\"unicode\":\"U+2693\",\"translated_descriptions\":{\"ar\":\"مِرسَاة\",\"bg\":\"Котва\",\"ca\":\"Àncora\",\"cs\":\"Kotva\",\"de\":\"Anker\",\"eo\":\"Ankro\",\"es\":\"Ancla\",\"et\":\"Ankur\",\"fa\":\"لنگر\",\"fi\":\"Ankkuri\",\"fr\":\"Ancre\",\"hr\":\"sidro\",\"hu\":\"Horgony\",\"id\":\"Jangkar\",\"it\":\"Ancora\",\"ja\":\"いかり\",\"nb_NO\":\"Anker\",\"nl\":\"Anker\",\"pt\":\"Âncora\",\"pt_BR\":\"Âncora\",\"ru\":\"Якорь\",\"si\":null,\"sk\":\"Kotva\",\"sq\":\"Spirancë\",\"sr\":\"сидро\",\"sv\":\"Ankare\",\"szl\":null,\"tzm\":null,\"uk\":\"Якір\",\"vi\":\"Mỏ neo\",\"zh_Hans\":\"锚\",\"zh_Hant\":\"船錨\"}},{\"number\":61,\"emoji\":\"🎧\",\"description\":\"Headphones\",\"unicode\":\"U+1F3A7\",\"translated_descriptions\":{\"ar\":\"سَمّاعَة رَأس\",\"bg\":\"Слушалки\",\"ca\":\"Auriculars\",\"cs\":\"Sluchátka\",\"de\":\"Kopfhörer\",\"eo\":\"Kapaŭdilo\",\"es\":\"Cascos\",\"et\":\"Kõrvaklapid\",\"fa\":\"هدفون\",\"fi\":\"Kuulokkeet\",\"fr\":\"Casque audio\",\"hr\":\"slušalice\",\"hu\":\"Fejhallgató\",\"id\":\"Headphone\",\"it\":\"Cuffie\",\"ja\":\"ヘッドホン\",\"nb_NO\":\"Hodetelefoner\",\"nl\":\"Koptelefoon\",\"pt\":\"Fones\",\"pt_BR\":\"Fones de ouvido\",\"ru\":\"Наушники\",\"si\":null,\"sk\":\"Slúchadlá\",\"sq\":\"Kufje\",\"sr\":\"слушалице\",\"sv\":\"Hörlurar\",\"szl\":null,\"tzm\":null,\"uk\":\"Навушники\",\"vi\":\"Tai nghe\",\"zh_Hans\":\"耳机\",\"zh_Hant\":\"耳機\"}},{\"number\":62,\"emoji\":\"📁\",\"description\":\"Folder\",\"unicode\":\"U+1F4C1\",\"translated_descriptions\":{\"ar\":\"مُجَلَّد\",\"bg\":\"Папка\",\"ca\":\"Carpeta\",\"cs\":\"Složka\",\"de\":\"Ordner\",\"eo\":\"Dosierujo\",\"es\":\"Carpeta\",\"et\":\"Kaust\",\"fa\":\"پوشه\",\"fi\":\"Kansio\",\"fr\":\"Dossier\",\"hr\":\"mapu\",\"hu\":\"Mappa\",\"id\":\"Map\",\"it\":\"Cartella\",\"ja\":\"フォルダー\",\"nb_NO\":\"Mappe\",\"nl\":\"Map\",\"pt\":\"Pasta\",\"pt_BR\":\"Pasta\",\"ru\":\"Папка\",\"si\":null,\"sk\":\"Fascikel\",\"sq\":\"Dosje\",\"sr\":\"фасцикла\",\"sv\":\"Mapp\",\"szl\":null,\"tzm\":\"Asdaw\",\"uk\":\"Тека\",\"vi\":\"Thư mục\",\"zh_Hans\":\"文件夹\",\"zh_Hant\":\"資料夾\"}},{\"number\":63,\"emoji\":\"📌\",\"description\":\"Pin\",\"unicode\":\"U+1F4CC\",\"translated_descriptions\":{\"ar\":\"دَبُّوس\",\"bg\":\"Кабърче\",\"ca\":\"Xinxeta\",\"cs\":\"Špendlík\",\"de\":\"Stecknadel\",\"eo\":\"Pinglo\",\"es\":\"Alfiler\",\"et\":\"Nööpnõel\",\"fa\":\"سنجاق\",\"fi\":\"Nuppineula\",\"fr\":\"Punaise\",\"hr\":\"pribadača\",\"hu\":\"Rajszeg\",\"id\":\"Pin\",\"it\":\"Puntina\",\"ja\":\"ピン\",\"nb_NO\":\"Tegnestift\",\"nl\":\"Duimspijker\",\"pt\":\"Pionés\",\"pt_BR\":\"Alfinete\",\"ru\":\"Булавка\",\"si\":null,\"sk\":\"Špendlík\",\"sq\":\"Karficë\",\"sr\":\"чиода\",\"sv\":\"Häftstift\",\"szl\":null,\"tzm\":null,\"uk\":\"Кнопка\",\"vi\":\"Ghim\",\"zh_Hans\":\"图钉\",\"zh_Hant\":\"圖釘\"}}]")).map(({ emoji: e, description: t, translated_descriptions: n }) => [e, [t, Object.keys(n).reduce((e, t) => {
	for (let r of Fy(t)) e[r] = n[t];
	return e;
}, {})]]));
function sO(e, t) {
	let n = oO.get(e);
	if (!n) throw Error(`Emoji mapping not found for emoji ${e}`);
	let [r, i] = n;
	for (let e of Fy(t)) if (i[e]) return i[e];
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
	let { language: n } = z(), r = e.map((e, t) => /* @__PURE__ */ (0, R.jsxs)("div", {
		className: cO.segment,
		children: [/* @__PURE__ */ (0, R.jsx)("div", {
			className: cO.emoji,
			"aria-hidden": !0,
			children: e
		}), /* @__PURE__ */ (0, R.jsx)("div", {
			className: cO.label,
			children: sO(e, n)
		})]
	}, t));
	return /* @__PURE__ */ (0, R.jsx)("div", {
		className: (0, L.default)(cO.container, t),
		children: r
	});
}
var uO = {
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
}, dO = {
	statusPill: "_statusPill_1uwxs_8",
	menuStatusEmoji: "_menuStatusEmoji_1uwxs_21",
	menuStatusText: "_menuStatusText_1uwxs_25"
}, fO = ({ status: e, clearStatus: t, ref: n, ...r }) => /* @__PURE__ */ (0, R.jsxs)("div", {
	ref: n,
	...r,
	className: dO.statusPill,
	children: [
		/* @__PURE__ */ (0, R.jsx)(N, {
			as: "span",
			className: dO.menuStatusEmoji,
			children: e.emoji
		}),
		/* @__PURE__ */ (0, R.jsx)(N, {
			as: "span",
			className: dO.menuStatusText,
			children: e.text
		}),
		/* @__PURE__ */ (0, R.jsx)(j, {
			onClick: t,
			"aria-label": H("menus|user_menu|clear_status"),
			tooltip: H("menus|user_menu|clear_status"),
			size: "28px",
			children: /* @__PURE__ */ (0, R.jsx)(xS, {})
		})
	]
}), pO = {
	customStatus: "_customStatus_cn6so_8",
	emojiButton: "_emojiButton_cn6so_18",
	selected: "_selected_cn6so_36",
	textField: "_textField_cn6so_42",
	action: "_action_cn6so_47",
	pickerMenu: "_pickerMenu_cn6so_53"
}, mO = "😄";
function hO({ onSave: e, onCancel: t, recentEmojis: n, onRecordRecentEmoji: r }) {
	let [i, a] = T(mO), [o, s] = T(""), [c, l] = T(!1), u = o.trim(), d = h((e) => (a(e), l(!1), !0), []), f = h(() => {
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
	return /* @__PURE__ */ (0, R.jsxs)(ye, {
		className: pO.customStatus,
		onSubmit: m,
		children: [
			/* @__PURE__ */ (0, R.jsx)(he, {
				open: c,
				onOpenChange: l,
				title: H("status|set_status|choose_emoji"),
				showTitle: !1,
				align: "start",
				className: pO.pickerMenu,
				trigger: /* @__PURE__ */ (0, R.jsx)("button", {
					type: "button",
					className: (0, L.default)(pO.emojiButton, { [pO.selected]: c }),
					"aria-label": H("status|set_status|choose_emoji"),
					children: i
				}),
				children: /* @__PURE__ */ (0, R.jsx)(Bw, {
					onChoose: d,
					recentEmojis: n,
					onRecordRecent: r,
					onFinished: () => l(!1),
					showQuickReactions: !1
				})
			}),
			/* @__PURE__ */ (0, R.jsx)(oe, {
				name: "custom-status",
				className: pO.textField,
				children: /* @__PURE__ */ (0, R.jsx)(Ce, {
					value: o,
					onChange: (e) => s(e.currentTarget.value),
					placeholder: H("status|set_status|set_status_prompt"),
					"aria-label": H("status|set_status|set_status_prompt"),
					autoFocus: !0
				})
			}),
			/* @__PURE__ */ (0, R.jsx)(me, {
				kind: "primary",
				size: "md",
				role: "button",
				tabIndex: 0,
				className: pO.action,
				onClick: f,
				onKeyDown: p,
				children: H(u ? "action|save" : "action|cancel")
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
		textKey: nx("status|set_status|in_a_meeting")
	},
	focus_time: {
		emoji: "💡",
		textKey: nx("status|set_status|focus_time")
	},
	on_the_road: {
		emoji: "🚙",
		textKey: nx("status|set_status|on_the_road")
	},
	be_right_back: {
		emoji: "☕️",
		textKey: nx("status|set_status|be_right_back")
	},
	away: {
		emoji: "🌴",
		textKey: nx("status|set_status|away")
	},
	custom: {
		emoji: "✍️",
		textKey: nx("status|set_status|custom")
	}
}, vO = Object.keys(_O);
function yO({ value: e }) {
	return /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsx)("span", {
		className: gO.dropdownEmoji,
		children: _O[e].emoji
	}), /* @__PURE__ */ (0, R.jsx)("span", { children: H(_O[e].textKey) })] });
}
function bO({ vm: e, initialCustomMode: t = !1 }) {
	let { userStatus: n, recentEmojis: r } = V(e), [i, a] = T(t), o = h((e) => e === null ? null : /* @__PURE__ */ (0, R.jsx)(yO, { value: e }), []);
	return n ? /* @__PURE__ */ (0, R.jsx)(fO, {
		status: n,
		clearStatus: e.clearStatus
	}) : i ? /* @__PURE__ */ (0, R.jsx)(hO, {
		onSave: (t) => {
			a(!1), e.setStatus(t);
		},
		onCancel: () => a(!1),
		recentEmojis: r,
		onRecordRecentEmoji: e.recordRecentEmoji
	}) : /* @__PURE__ */ (0, R.jsx)(A, {
		values: vO,
		label: null,
		trigger: (e) => /* @__PURE__ */ (0, R.jsx)("div", {
			className: gO.setStatusContainer,
			children: /* @__PURE__ */ (0, R.jsxs)(me, {
				className: gO.setStatusTrigger,
				"aria-label": H("status|set_status|set_status_prompt"),
				...e,
				children: [/* @__PURE__ */ (0, R.jsx)(UC, {}), /* @__PURE__ */ (0, R.jsx)(N, {
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
				e.onSetCustomStatusClick ? e.onSetCustomStatusClick() : a(!0);
				return;
			}
			let n = _O[t];
			n && e.setStatus({
				emoji: n.emoji,
				text: H(n.textKey)
			});
		},
		renderItem: o
	});
}
//#endregion
//#region src/menus/UserMenu/UserMenu.tsx
function xO({ vm: e, className: t }) {
	let { userId: n, displayName: r, avatarUrl: i, expanded: a, open: o, actions: s, showAvatar: c, userStatus: l, setStatusViewModel: u, showUserStatus: d = !0 } = V(e), { translate: f } = z(), p = /* @__PURE__ */ (0, R.jsx)("button", {
		className: uO.triggerButton,
		"aria-label": f("menus|user_menu|title"),
		type: "button",
		children: /* @__PURE__ */ (0, R.jsxs)("div", {
			className: uO.avatarWrapper,
			children: [/* @__PURE__ */ (0, R.jsx)(E, {
				id: n,
				name: r,
				type: "round",
				size: "36px",
				src: i
			}), l && /* @__PURE__ */ (0, R.jsx)(N, {
				as: "div",
				className: uO.iconStatusEmoji,
				children: l.emoji
			})]
		})
	});
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: (0, L.default)(uO.wrapper, t),
		children: [/* @__PURE__ */ (0, R.jsxs)(he, {
			open: o,
			showTitle: !1,
			title: f("menus|user_menu|title"),
			trigger: p,
			onOpenChange: e.setOpen,
			align: "start",
			side: "right",
			className: uO.container,
			children: [
				/* @__PURE__ */ (0, R.jsxs)("section", {
					className: (0, L.default)(uO.profile, uO.profilePrimary),
					children: [
						c && /* @__PURE__ */ (0, R.jsx)(E, {
							id: n,
							name: r,
							type: "round",
							size: "64px",
							src: i
						}),
						/* @__PURE__ */ (0, R.jsx)(N, {
							className: (0, L.default)(uO.displayname, uO.constrainedText),
							type: "body",
							size: "lg",
							weight: "semibold",
							as: "span",
							children: r
						}),
						d && /* @__PURE__ */ (0, R.jsx)(bO, { vm: u })
					]
				}),
				/* @__PURE__ */ (0, R.jsxs)("section", {
					className: (0, L.default)(uO.profile, uO.profileSecondary),
					children: [
						/* @__PURE__ */ (0, R.jsx)(N, {
							"data-testid": "userId",
							size: "md",
							as: "span",
							type: "body",
							className: (0, L.default)(uO.userId, uO.constrainedText),
							children: n
						}),
						s.createAccount && /* @__PURE__ */ (0, R.jsx)(O, {
							className: uO.createAccount,
							size: "md",
							as: "button",
							kind: "primary",
							onClick: e.createAccount,
							children: f("menus|user_menu|create_an_account")
						}),
						s.signIn && /* @__PURE__ */ (0, R.jsxs)(N, {
							as: "span",
							weight: "medium",
							children: [f("menus|user_menu|got_an_account"), /* @__PURE__ */ (0, R.jsx)(me, {
								as: "button",
								onClick: e.signIn,
								children: f("menus|user_menu|sign_in")
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, R.jsx)(be, {}),
				/* @__PURE__ */ (0, R.jsxs)("section", {
					className: uO.actions,
					children: [
						s.openHomePage && /* @__PURE__ */ (0, R.jsx)(M, {
							Icon: rC,
							label: f("user_menu|open_home"),
							onSelect: e.openHomePage
						}),
						s.linkNewDevice && /* @__PURE__ */ (0, R.jsx)(M, {
							Icon: kS,
							label: f("user_menu|link_new_device"),
							onSelect: e.linkNewDevice
						}),
						s.openSecurity && /* @__PURE__ */ (0, R.jsx)(M, {
							Icon: _C,
							label: f("user_menu|open_security"),
							onSelect: e.openSecurity
						}),
						s.openFeedback && /* @__PURE__ */ (0, R.jsx)(M, {
							Icon: aS,
							label: f("user_menu|open_feedback"),
							onSelect: e.openFeedback
						}),
						s.openSettings && /* @__PURE__ */ (0, R.jsx)(M, {
							Icon: tw,
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
	let { translate: n } = z(), { shouldRender: r, isVisible: i, isNotification: a, isHighlight: o, isKnocked: s, badgeType: c, symbol: l, isClickable: u, ariaLabel: d, tabIndex: f, showUnsentTooltip: p } = V(e);
	if (!r) return /* @__PURE__ */ (0, R.jsx)(R.Fragment, {});
	let m = (0, L.default)(t, SO.notificationBadge, {
		[SO.visible]: i,
		[SO.notification]: a,
		[SO.highlight]: o,
		[SO.dot]: c === "dot",
		[SO.badge2Char]: c === "badge_2char",
		[SO.badge3Char]: c === "badge_3char",
		"cpd-theme-light": c !== "dot"
	}), h = o ? "highlight" : a ? "notification" : void 0, g = s ? /* @__PURE__ */ (0, R.jsx)($x, { "aria-label": n("room|knock_sent") }) : /* @__PURE__ */ (0, R.jsx)("span", {
		className: SO.count,
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
	return p ? /* @__PURE__ */ (0, R.jsx)(Ee, {
		label: n("notifications|message_didnt_send"),
		placement: "right",
		children: _
	}) : _;
}
var wO = {
	readMarker: "_readMarker_1bk0w_8",
	line: "_line_1bk0w_15"
};
//#endregion
//#region src/room/timeline/ReadMarker/ReadMarker.tsx
function TO({ eventId: e, kind: t, showLine: n = !0, onCurrentMarkerRef: r, onGhostLineRef: i, onGhostTransitionEnd: a, className: o }) {
	let s = null;
	return t === "ghost" ? s = /* @__PURE__ */ (0, R.jsx)("hr", {
		className: wO.line,
		ref: i,
		onTransitionEnd: a,
		"data-eventid": e
	}) : n && (s = /* @__PURE__ */ (0, R.jsx)("hr", { className: wO.line })), /* @__PURE__ */ (0, R.jsx)("li", {
		className: (0, L.default)(o, wO.readMarker),
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
//#region ../../node_modules/.pnpm/html-dom-parser@8.0.2/node_modules/html-dom-parser/lib/node_modules/domelementtype/dist/index.js
var jO = /* @__PURE__ */ P(((e) => {
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
})), MO = /* @__PURE__ */ P(((e) => {
	var t = jO(), n = class {
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
})), NO = /* @__PURE__ */ P(((e) => {
	var t = /* @__PURE__ */ "animateMotion.animateTransform.clipPath.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.foreignObject.linearGradient.radialGradient.textPath".split("."), n = t.reduce((e, t) => (e[t.toLowerCase()] = t, e), {});
	e.CASE_SENSITIVE_TAG_NAMES = t, e.CASE_SENSITIVE_TAG_NAMES_MAP = n;
})), PO = /* @__PURE__ */ P(((e) => {
	var t = MO(), n = NO(), r = "\r", i = new RegExp(r, "g"), a = `__HTML_DOM_PARSER_CARRIAGE_RETURN_PLACEHOLDER_${Date.now().toString()}__`, o = new RegExp(a, "g");
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
})), FO = /* @__PURE__ */ P(((e) => {
	var t = PO(), n = "html", r = "head", i = "body", a = /<([a-zA-Z]+[0-9]?)/;
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
})), IO = /* @__PURE__ */ P(((e) => {
	Object.defineProperties(e, {
		__esModule: { value: !0 },
		[Symbol.toStringTag]: { value: "Module" }
	});
	var t = PO(), n = FO(), r = /<(![a-zA-Z\s]+)>/;
	function i(e, i) {
		if (typeof e != "string") throw TypeError("First argument must be a string");
		if (!e) return [];
		let a = r.exec(e), o = a ? a[1] : void 0;
		return t.formatDOM(n.default(e, i?.trustedTypePolicy), null, o);
	}
	e.default = i;
})), LO = /* @__PURE__ */ P(((e) => {
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
})), RO = /* @__PURE__ */ P(((e) => {
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
	var { CAMELCASE: m, SAME: h, possibleStandardNames: g } = LO(), _ = RegExp.prototype.test.bind(/* @__PURE__ */ RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")), v = Object.keys(g).reduce((e, t) => {
		let n = g[t];
		return n === h ? e[t] = t : n === m ? e[t.toLowerCase()] = t : e[t] = n, e;
	}, {});
	e.BOOLEAN = i, e.BOOLEANISH_STRING = r, e.NUMERIC = o, e.OVERLOADED_BOOLEAN = a, e.POSITIVE_NUMERIC = s, e.RESERVED = t, e.STRING = n, e.getPropertyInfo = c, e.isCustomAttribute = _, e.possibleStandardNames = v;
})), zO = /* @__PURE__ */ P(((e, t) => {
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
})), BO = /* @__PURE__ */ P(((e, t) => {
	var n = Object.create, r = Object.defineProperty, i = Object.getOwnPropertyDescriptor, a = Object.getOwnPropertyNames, o = Object.getPrototypeOf, s = Object.prototype.hasOwnProperty, c = (e, t, n, o) => {
		if (t && typeof t == "object" || typeof t == "function") for (var c = a(t), l = 0, u = c.length, d; l < u; l++) d = c[l], !s.call(e, d) && d !== n && r(e, d, {
			get: ((e) => t[e]).bind(null, d),
			enumerable: !(o = i(t, d)) || o.enumerable
		});
		return e;
	}, l = (e, t, i) => (i = e == null ? {} : n(o(e)), c(t || !e || !e.__esModule ? r(i, "default", {
		value: e,
		enumerable: !0
	}) : i, e)), u = zO();
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
})), VO = /* @__PURE__ */ P(((e, t) => {
	var n = Object.create, r = Object.defineProperty, i = Object.getOwnPropertyDescriptor, a = Object.getOwnPropertyNames, o = Object.getPrototypeOf, s = Object.prototype.hasOwnProperty, c = (e, t, n, o) => {
		if (t && typeof t == "object" || typeof t == "function") for (var c = a(t), l = 0, u = c.length, d; l < u; l++) d = c[l], !s.call(e, d) && d !== n && r(e, d, {
			get: ((e) => t[e]).bind(null, d),
			enumerable: !(o = i(t, d)) || o.enumerable
		});
		return e;
	}, l = (e, t, i) => (i = e == null ? {} : n(o(e)), c(t || !e || !e.__esModule ? r(i, "default", {
		value: e,
		enumerable: !0
	}) : i, e)), u = BO();
	u = l(u);
	var d = /^--[a-zA-Z0-9_-]+$/, f = /-([a-z])/g, p = /^[^-]+$/, m = /^-(webkit|moz|ms|o|khtml)-/, h = /^-(ms)-/, g = (e) => !e || p.test(e) || d.test(e), _ = (e, t) => t.toUpperCase(), v = (e, t) => `${t}-`, y = (e, t = {}) => g(e) ? e : (e = e.toLowerCase(), e = t.reactCompat ? e.replace(h, v) : e.replace(m, v), e.replace(f, _));
	function b(e, t) {
		let n = {};
		return !e || typeof e != "string" || (0, u.default)(e, (e, r) => {
			e && r && (n[y(e, t)] = r);
		}), n;
	}
	t.exports = b;
})), HO = /* @__PURE__ */ P(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.returnFirstArg = e.canTextBeChildOfNode = e.ELEMENTS_WITH_NO_TEXT_CHILDREN = e.PRESERVE_CUSTOM_ATTRIBUTES = void 0, e.isCustomComponent = a, e.setStyleProp = s;
	var n = Zd(), r = t(VO()), i = /* @__PURE__ */ new Set([
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
})), UO = /* @__PURE__ */ P(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = o;
	var t = RO(), n = HO(), r = ["checked", "value"], i = [
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
function WO(e) {
	return e.type === K.Tag || e.type === K.Script || e.type === K.Style;
}
var K, GO = Je((() => {
	(function(e) {
		e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype";
	})(K ||= {}), K.Root, K.Text, K.Directive, K.Comment, K.Script, K.Style, K.Tag, K.CDATA, K.Doctype;
}));
//#endregion
//#region ../../node_modules/.pnpm/domhandler@6.0.1/node_modules/domhandler/dist/node.js
function KO(e) {
	return WO(e);
}
function qO(e) {
	return e.type === K.CDATA;
}
function JO(e) {
	return e.type === K.Text;
}
function YO(e) {
	return e.type === K.Comment;
}
function XO(e) {
	return e.type === K.Directive;
}
function ZO(e) {
	return e.type === K.Root;
}
function QO(e) {
	return Object.hasOwn(e, "children");
}
function $O(e, t = !1) {
	let n;
	if (JO(e)) n = new rk(e.data);
	else if (YO(e)) n = new ik(e.data);
	else if (KO(e)) {
		let r = t ? ek(e.children) : [], i = new lk(e.name, { ...e.attribs }, r);
		for (let e of r) e.parent = i;
		e.namespace != null && (i.namespace = e.namespace), e["x-attribsNamespace"] && (i["x-attribsNamespace"] = { ...e["x-attribsNamespace"] }), e["x-attribsPrefix"] && (i["x-attribsPrefix"] = { ...e["x-attribsPrefix"] }), n = i;
	} else if (qO(e)) {
		let r = t ? ek(e.children) : [], i = new sk(r);
		for (let e of r) e.parent = i;
		n = i;
	} else if (ZO(e)) {
		let r = t ? ek(e.children) : [], i = new ck(r);
		for (let e of r) e.parent = i;
		e["x-mode"] && (i["x-mode"] = e["x-mode"]), n = i;
	} else if (XO(e)) {
		let t = new ak(e.name, e.data);
		e["x-name"] != null && (t["x-name"] = e["x-name"], t["x-publicId"] = e["x-publicId"], t["x-systemId"] = e["x-systemId"]), n = t;
	} else throw Error(`Not implemented yet: ${e.type}`);
	return n.startIndex = e.startIndex, n.endIndex = e.endIndex, e.sourceCodeLocation != null && (n.sourceCodeLocation = e.sourceCodeLocation), n;
}
function ek(e) {
	let t = e.map((e) => $O(e, !0));
	for (let e = 1; e < t.length; e++) t[e].prev = t[e - 1], t[e - 1].next = t[e];
	return t;
}
var tk, nk, rk, ik, ak, ok, sk, ck, lk, uk = Je((() => {
	GO(), tk = class {
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
			return $O(this, e);
		}
	}, nk = class extends tk {
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
	}, rk = class extends nk {
		type = K.Text;
		get nodeType() {
			return 3;
		}
	}, ik = class extends nk {
		type = K.Comment;
		get nodeType() {
			return 8;
		}
	}, ak = class extends nk {
		type = K.Directive;
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
	}, ok = class extends tk {
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
	}, sk = class extends ok {
		type = K.CDATA;
		get nodeType() {
			return 4;
		}
	}, ck = class extends ok {
		type = K.Root;
		get nodeType() {
			return 9;
		}
	}, lk = class extends ok {
		name;
		attribs;
		type;
		constructor(e, t, n = [], r = e === "script" ? K.Script : e === "style" ? K.Style : K.Tag) {
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
})), dk = /* @__PURE__ */ Ye({
	CDATA: () => sk,
	Comment: () => ik,
	DataNode: () => nk,
	Document: () => ck,
	DomHandler: () => pk,
	Element: () => lk,
	Node: () => tk,
	NodeWithChildren: () => ok,
	ProcessingInstruction: () => ak,
	Text: () => rk,
	cloneNode: () => $O,
	default: () => pk,
	hasChildren: () => QO,
	isCDATA: () => qO,
	isComment: () => YO,
	isDirective: () => XO,
	isDocument: () => ZO,
	isTag: () => KO,
	isText: () => JO
}), fk, pk, mk = Je((() => {
	GO(), uk(), uk(), fk = {
		withStartIndices: !1,
		withEndIndices: !1,
		xmlMode: !1
	}, pk = class {
		dom = [];
		root = new ck(this.dom);
		callback;
		options;
		elementCB;
		done = !1;
		tagStack = [this.root];
		lastNode = null;
		parser = null;
		constructor(e, t, n) {
			typeof t == "function" && (n = t, t = fk), typeof e == "object" && (t = e, e = void 0), this.callback = e ?? null, this.options = t ?? fk, this.elementCB = n ?? null;
		}
		onparserinit(e) {
			this.parser = e;
		}
		onreset() {
			this.dom = [], this.root = new ck(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
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
			let n = this.options.xmlMode ? K.Tag : void 0, r = new lk(e, t, void 0, n);
			this.addNode(r), this.tagStack.push(r);
		}
		ontext(e) {
			let { lastNode: t } = this;
			if (t && t.type === K.Text) t.data += e, this.options.withEndIndices && this.parser && (t.endIndex = this.parser.endIndex);
			else {
				let t = new rk(e);
				this.addNode(t), this.lastNode = t;
			}
		}
		oncomment(e) {
			if (this.lastNode && this.lastNode.type === K.Comment) {
				this.lastNode.data += e;
				return;
			}
			let t = new ik(e);
			this.addNode(t), this.lastNode = t;
		}
		oncommentend() {
			this.lastNode = null;
		}
		oncdatastart() {
			let e = new rk(""), t = new sk([e]);
			this.addNode(t), e.parent = t, this.lastNode = e;
		}
		oncdataend() {
			this.lastNode = null;
		}
		onprocessinginstruction(e, t) {
			let n = new ak(e, t);
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
})), hk = /* @__PURE__ */ P(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = s;
	var n = (mk(), Qe(dk)), r = Zd(), i = t(UO()), a = HO(), o = {
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
})), gk = /* @__PURE__ */ Ze((/* @__PURE__ */ P(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.htmlToDOM = e.domToReact = e.attributesToProps = e.Text = e.ProcessingInstruction = e.Element = e.Comment = void 0, e.default = o;
	var n = t(IO());
	e.htmlToDOM = n.default, e.attributesToProps = t(UO()).default;
	var r = t(hk());
	e.domToReact = r.default;
	var i = (mk(), Qe(dk));
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
})))(), 1), _k = gk.default.default || gk.default;
//#endregion
//#region src/core/utils/applyReplacerOnString.ts
function vk(e, t) {
	return t ? (Array.isArray(e) ? e : [e]).map((e, n) => typeof e == "string" && t(new gk.Text(e), 0) || e) : e;
}
//#endregion
//#region src/room/timeline/event-tile/body/EventContentBodyView/EventContentBodyView.tsx
var yk = p(function({ vm: e, as: t, ref: n }) {
	let { body: r, formattedBody: i, replacer: a, className: o, dir: s, parseFormattedBody: c } = V(e), l = i ? (c ?? ((e, t) => _k(e, t ? { replace: t } : void 0)))(i, a) : vk(r, a);
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
}), bk = {
	content: "_content_1wtpw_8",
	icon: "_icon_1wtpw_17"
};
//#endregion
//#region src/room/timeline/event-tile/body/HiddenBodyView/HiddenBodyView.tsx
function xk({ vm: e, className: t, ref: n }) {
	let { reason: r } = V(e), i = z().translate, a = r ? i("timeline|pending_moderation_reason", { reason: r }) : i("timeline|pending_moderation");
	return /* @__PURE__ */ (0, R.jsxs)("span", {
		className: (0, L.default)(bk.content, t),
		ref: n,
		children: [/* @__PURE__ */ (0, R.jsx)(yw, {
			className: bk.icon,
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, R.jsx)(N, {
			as: "span",
			children: a
		})]
	});
}
var Sk = {
	button: "_button_1ync4_8",
	content: "_content_1ync4_27",
	icon: "_icon_1ync4_34"
};
//#endregion
//#region src/room/timeline/event-tile/body/HiddenMediaPlaceholder/HiddenMediaPlaceholder.tsx
function Ck({ className: e, onClick: t, children: n }) {
	return /* @__PURE__ */ (0, R.jsx)("button", {
		type: "button",
		onClick: t,
		className: (0, L.default)(Sk.button, e),
		children: /* @__PURE__ */ (0, R.jsxs)("span", {
			className: Sk.content,
			children: [/* @__PURE__ */ (0, R.jsx)(xw, {
				className: Sk.icon,
				"aria-hidden": "true"
			}), /* @__PURE__ */ (0, R.jsx)("span", { children: n })]
		})
	});
}
var wk = {
	content: "_content_1xhpr_8",
	icon: "_icon_1xhpr_17"
};
//#endregion
//#region src/room/timeline/event-tile/body/RedactedBodyView/RedactedBodyView.tsx
function Tk({ vm: e, className: t, ref: n }) {
	let { text: r, tooltip: i } = V(e), a = /* @__PURE__ */ (0, R.jsxs)("span", {
		className: (0, L.default)(wk.content, t),
		ref: n,
		children: [/* @__PURE__ */ (0, R.jsx)(DS, {
			className: wk.icon,
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, R.jsx)("span", { children: r })]
	});
	return i ? /* @__PURE__ */ (0, R.jsx)(Ee, {
		description: i,
		children: a
	}) : a;
}
var Ek = {
	content: "_content_p4b0p_8",
	invalid: "_invalid_p4b0p_74"
}, Dk = { mediaBody: "_mediaBody_14jys_8" };
//#endregion
//#region src/room/timeline/event-tile/body/MediaBody/MediaBody.tsx
function Ok({ as: e, className: t, children: n, ...r }) {
	return /* @__PURE__ */ (0, R.jsx)(e || "div", {
		className: (0, L.default)("mx_MediaBody", Dk.mediaBody, t),
		...r,
		children: n
	});
}
//#endregion
//#region src/room/timeline/event-tile/body/MFileBodyView/FileBodyView.tsx
var kk = /* @__PURE__ */ function(e) {
	return e.EXPORT = "EXPORT", e.DECRYPTION_PENDING = "DECRYPTION_PENDING", e.ENCRYPTED = "ENCRYPTED", e.UNENCRYPTED = "UNENCRYPTED", e.INVALID = "INVALID", e;
}({}), Ak = /* @__PURE__ */ function(e) {
	return e.ATTACHMENT = "ATTACHMENT", e.AUDIO = "AUDIO", e.DOWNLOAD = "DOWNLOAD", e.VIDEO = "VIDEO", e;
}({});
function jk(e) {
	return e === "AUDIO" ? Dw : e === "DOWNLOAD" ? NS : e === "VIDEO" ? hw : tS;
}
function Mk({ vm: e, refIFrame: t, refLink: n, className: r }) {
	let { translate: i } = z(), { state: a, showInfo: o, infoLabel: s, infoTooltip: c, infoIcon: l, infoHref: u, showDownload: d, downloadLabel: f, downloadTitle: p, downloadHref: m } = V(e), h = s ?? i("common|attachment"), g = c ?? h, _ = jk(l), v = o ? /* @__PURE__ */ (0, R.jsx)(Ee, {
		description: g,
		placement: "right",
		children: /* @__PURE__ */ (0, R.jsx)(Ok, {
			"data-type": "info",
			children: /* @__PURE__ */ (0, R.jsx)(O, {
				as: "button",
				size: "md",
				kind: "secondary",
				"aria-label": h,
				Icon: _,
				onClick: e.onInfoClick,
				children: /* @__PURE__ */ (0, R.jsx)("span", { children: h })
			})
		})
	}) : null, y = (0, L.default)(Ek.content, r), b = f ?? i("action|download"), x = p ?? b;
	switch (a) {
		case "EXPORT": return /* @__PURE__ */ (0, R.jsx)("span", {
			className: y,
			children: /* @__PURE__ */ (0, R.jsx)("a", {
				href: u,
				children: v
			})
		});
		case "DECRYPTION_PENDING": return /* @__PURE__ */ (0, R.jsxs)("span", {
			className: y,
			children: [v, d && /* @__PURE__ */ (0, R.jsx)("div", {
				"data-type": "download",
				children: /* @__PURE__ */ (0, R.jsx)(O, {
					size: "md",
					kind: "secondary",
					Icon: NS,
					onClick: e.onDownloadClick,
					children: b
				})
			})]
		});
		case "ENCRYPTED": return /* @__PURE__ */ (0, R.jsxs)("span", {
			className: y,
			children: [v, d && /* @__PURE__ */ (0, R.jsxs)("div", {
				"data-type": "download",
				children: [/* @__PURE__ */ (0, R.jsx)("div", {
					"aria-hidden": !0,
					style: { display: "none" },
					children: /* @__PURE__ */ (0, R.jsx)(O, {
						size: "md",
						kind: "secondary",
						Icon: NS,
						as: "a",
						ref: n
					})
				}), /* @__PURE__ */ (0, R.jsx)("iframe", {
					"aria-hidden": !0,
					title: x,
					src: "usercontent/",
					onLoad: e.onDownloadIframeLoad,
					ref: t,
					sandbox: "allow-scripts allow-downloads"
				})]
			})]
		});
		case "UNENCRYPTED": return /* @__PURE__ */ (0, R.jsxs)("span", {
			className: y,
			children: [v, d && /* @__PURE__ */ (0, R.jsx)("div", {
				"data-type": "download",
				children: /* @__PURE__ */ (0, R.jsx)(O, {
					size: "md",
					kind: "secondary",
					Icon: NS,
					as: "a",
					href: m,
					target: "_blank",
					rel: "noreferrer noopener",
					onClick: e.onDownloadLinkClick,
					children: b
				})
			})]
		});
		default: return /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsx)("span", {
			className: y,
			children: v
		}), /* @__PURE__ */ (0, R.jsx)("span", {
			className: (0, L.default)(y, Ek.invalid),
			children: i("timeline|m.file|error_invalid")
		})] });
	}
}
//#endregion
//#region ../../node_modules/.pnpm/blurhash@2.0.5/node_modules/blurhash/dist/esm/index.js
var Nk = /* @__PURE__ */ "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%*+,-.:;=?@[]^_{|}~".split(""), Pk = (e) => {
	let t = 0;
	for (let n = 0; n < e.length; n++) {
		let r = e[n], i = Nk.indexOf(r);
		t = t * 83 + i;
	}
	return t;
}, Fk = (e) => {
	let t = e / 255;
	return t <= .04045 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4;
}, Ik = (e) => {
	let t = Math.max(0, Math.min(1, e));
	return Math.trunc(t <= .0031308 ? t * 12.92 * 255 + .5 : (1.055 * t ** .4166666666666667 - .055) * 255 + .5);
}, Lk = (e) => e < 0 ? -1 : 1, Rk = (e, t) => Lk(e) * Math.abs(e) ** +t, zk = class extends Error {
	constructor(e) {
		super(e), this.name = "ValidationError", this.message = e;
	}
}, Bk = (e) => {
	if (!e || e.length < 6) throw new zk("The blurhash string must be at least 6 characters");
	let t = Pk(e[0]), n = Math.floor(t / 9) + 1, r = t % 9 + 1;
	if (e.length !== 4 + 2 * r * n) throw new zk(`blurhash length mismatch: length is ${e.length} but it should be ${4 + 2 * r * n}`);
}, Vk = (e) => {
	let t = e >> 16, n = e >> 8 & 255, r = e & 255;
	return [
		Fk(t),
		Fk(n),
		Fk(r)
	];
}, Hk = (e, t) => {
	let n = Math.floor(e / 361), r = Math.floor(e / 19) % 19, i = e % 19;
	return [
		Rk((n - 9) / 9, 2) * t,
		Rk((r - 9) / 9, 2) * t,
		Rk((i - 9) / 9, 2) * t
	];
}, Uk = (e, t, n, r) => {
	Bk(e), r |= 1;
	let i = Pk(e[0]), a = Math.floor(i / 9) + 1, o = i % 9 + 1, s = (Pk(e[1]) + 1) / 166, c = Array(o * a);
	for (let t = 0; t < c.length; t++) if (t === 0) {
		let n = Pk(e.substring(2, 6));
		c[t] = Vk(n);
	} else {
		let n = Pk(e.substring(4 + t * 2, 6 + t * 2));
		c[t] = Hk(n, s * r);
	}
	let l = t * 4, u = new Uint8ClampedArray(l * n);
	for (let e = 0; e < n; e++) for (let r = 0; r < t; r++) {
		let i = 0, s = 0, d = 0;
		for (let l = 0; l < a; l++) for (let a = 0; a < o; a++) {
			let u = Math.cos(Math.PI * r * a / t) * Math.cos(Math.PI * e * l / n), f = c[a + l * o];
			i += f[0] * u, s += f[1] * u, d += f[2] * u;
		}
		let f = Ik(i), p = Ik(s), m = Ik(d);
		u[4 * r + 0 + e * l] = f, u[4 * r + 1 + e * l] = p, u[4 * r + 2 + e * l] = m, u[4 * r + 3 + e * l] = 255;
	}
	return u;
}, Wk = Object.defineProperty, Gk = Object.defineProperties, Kk = Object.getOwnPropertyDescriptors, qk = Object.getOwnPropertySymbols, Jk = Object.prototype.hasOwnProperty, Yk = Object.prototype.propertyIsEnumerable, Xk = (e, t, n) => t in e ? Wk(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Zk = (e, t) => {
	for (var n in t ||= {}) Jk.call(t, n) && Xk(e, n, t[n]);
	if (qk) for (var n of qk(t)) Yk.call(t, n) && Xk(e, n, t[n]);
	return e;
}, Qk = (e, t) => Gk(e, Kk(t)), $k = (e, t) => {
	var n = {};
	for (var r in e) Jk.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && qk) for (var r of qk(e)) t.indexOf(r) < 0 && Yk.call(e, r) && (n[r] = e[r]);
	return n;
}, eA = class extends a.PureComponent {
	constructor() {
		super(...arguments), this.canvas = null, this.handleRef = (e) => {
			this.canvas = e, this.draw();
		}, this.draw = () => {
			let { hash: e, height: t, punch: n, width: r } = this.props;
			if (this.canvas) {
				let i = Uk(e, r, t, n), a = this.canvas.getContext("2d"), o = a.createImageData(r, t);
				o.data.set(i), a.putImageData(o, 0, 0);
			}
		};
	}
	componentDidUpdate() {
		this.draw();
	}
	render() {
		let e = this.props, { hash: t, height: n, width: r } = e, i = $k(e, [
			"hash",
			"height",
			"width"
		]);
		return a.createElement("canvas", Qk(Zk({}, i), {
			height: n,
			width: r,
			ref: this.handleRef
		}));
	}
};
eA.defaultProps = {
	height: 128,
	width: 128
};
var tA = {
	position: "absolute",
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	width: "100%",
	height: "100%"
}, nA = class extends a.PureComponent {
	componentDidUpdate() {
		if (this.props.resolutionX <= 0) throw Error("resolutionX must be larger than zero");
		if (this.props.resolutionY <= 0) throw Error("resolutionY must be larger than zero");
	}
	render() {
		let e = this.props, { hash: t, height: n, width: r, punch: i, resolutionX: o, resolutionY: s, style: c } = e, l = $k(e, [
			"hash",
			"height",
			"width",
			"punch",
			"resolutionX",
			"resolutionY",
			"style"
		]);
		return a.createElement("div", Qk(Zk({}, l), { style: Qk(Zk({
			display: "inline-block",
			height: n,
			width: r
		}, c), { position: "relative" }) }), a.createElement(eA, {
			hash: t,
			height: s,
			width: o,
			punch: i,
			style: tA
		}));
	}
};
nA.defaultProps = {
	height: 128,
	width: 128,
	resolutionX: 32,
	resolutionY: 32
};
var rA = {
	root: "_root_edxvl_8",
	link: "_link_edxvl_15",
	thumbnailContainer: "_thumbnailContainer_edxvl_22",
	placeholder: "_placeholder_edxvl_31",
	placeholderBlurhash: "_placeholderBlurhash_edxvl_41",
	blurhash: "_blurhash_edxvl_45",
	blurhashPulse: "_blurhashPulse_edxvl_1",
	mediaContent: "_mediaContent_edxvl_56",
	image: "_image_edxvl_62",
	banner: "_banner_edxvl_68",
	gifLabel: "_gifLabel_edxvl_85",
	hiddenButton: "_hiddenButton_edxvl_98",
	hiddenButtonContent: "_hiddenButtonContent_edxvl_117",
	error: "_error_edxvl_127",
	errorIcon: "_errorIcon_edxvl_132"
}, iA = /* @__PURE__ */ function(e) {
	return e.ERROR = "ERROR", e.HIDDEN = "HIDDEN", e.READY = "READY", e;
}({}), aA = /* @__PURE__ */ function(e) {
	return e.NONE = "NONE", e.SPINNER = "SPINNER", e.BLURHASH = "BLURHASH", e;
}({});
function oA({ placeholder: e, blurhash: t, maxWidth: n, maxHeight: r, loadingLabel: i }) {
	switch (e) {
		case "BLURHASH": return t ? /* @__PURE__ */ (0, R.jsx)(nA, {
			className: rA.blurhash,
			hash: t,
			width: n ?? 320,
			height: r ?? 240
		}) : /* @__PURE__ */ (0, R.jsx)(fe, {
			"aria-label": i,
			role: "progressbar"
		});
		case "SPINNER": return /* @__PURE__ */ (0, R.jsx)(fe, {
			"aria-label": i,
			role: "progressbar"
		});
		default: return null;
	}
}
function sA({ vm: e, className: t, containerClassName: n, imageClassName: r, imageRef: i, children: a }) {
	let { translate: o } = z(), { state: s, alt: c, errorLabel: l, hiddenButtonLabel: u, src: d, thumbnailSrc: f, showAnimatedContentOnHover: p, placeholder: m = "NONE", blurhash: h, maxWidth: g, maxHeight: _, aspectRatio: v, isSvg: y, gifLabel: b, bannerLabel: x, tooltipLabel: S, linkUrl: C, linkTarget: w } = V(e), [ee, te] = T(!1), [E, ne] = T(!1), D = ee || E, O = (0, L.default)(t, rA.root), k = (0, L.default)(n, rA.thumbnailContainer), re = (0, L.default)(r, rA.image);
	if (s === "ERROR") return /* @__PURE__ */ (0, R.jsxs)("span", {
		className: (0, L.default)(O, rA.error),
		children: [/* @__PURE__ */ (0, R.jsx)(aC, {
			className: rA.errorIcon,
			width: "16",
			height: "16"
		}), l]
	});
	let ie = D && p && d ? d : f ?? d, A = g === void 0 ? void 0 : `min(100%, ${g}px)`, ae = {
		width: A,
		maxWidth: g,
		maxHeight: _,
		aspectRatio: v
	}, oe = y ? {
		width: A,
		maxWidth: g,
		maxHeight: _
	} : void 0, se = oA({
		placeholder: m,
		blurhash: h,
		maxWidth: g,
		maxHeight: _,
		loadingLabel: o("common|loading")
	}), ce = se !== null, le = s === "HIDDEN" ? /* @__PURE__ */ (0, R.jsx)("div", {
		style: {
			width: g,
			height: _
		},
		children: /* @__PURE__ */ (0, R.jsx)("button", {
			type: "button",
			className: rA.hiddenButton,
			onClick: e.onHiddenButtonClick,
			children: /* @__PURE__ */ (0, R.jsxs)("div", {
				className: rA.hiddenButtonContent,
				children: [/* @__PURE__ */ (0, R.jsx)(xw, {}), /* @__PURE__ */ (0, R.jsx)("span", { children: u })]
			})
		})
	}) : ie ? /* @__PURE__ */ (0, R.jsx)("img", {
		className: re,
		src: ie,
		alt: c,
		ref: i,
		onError: e.onImageError,
		onLoad: e.onImageLoad,
		onMouseEnter: () => te(!0),
		onMouseLeave: () => te(!1)
	}) : null, ue = s === "READY" && x && D ? /* @__PURE__ */ (0, R.jsx)("span", {
		className: rA.banner,
		children: x
	}) : null, j = s === "READY" && b && !D ? /* @__PURE__ */ (0, R.jsx)("p", {
		className: rA.gifLabel,
		children: b
	}) : null, de = /* @__PURE__ */ (0, R.jsxs)("div", {
		className: k,
		style: ae,
		children: [ce && /* @__PURE__ */ (0, R.jsx)("div", {
			className: (0, L.default)(rA.placeholder, { [rA.placeholderBlurhash]: m === "BLURHASH" && !!h }),
			children: se
		}), /* @__PURE__ */ (0, R.jsxs)("div", {
			className: rA.mediaContent,
			style: oe,
			children: [
				le,
				j,
				ue
			]
		})]
	});
	return S && (de = /* @__PURE__ */ (0, R.jsx)(Ee, {
		description: S,
		placement: "right",
		isTriggerInteractive: !0,
		children: de
	})), s === "READY" && C && (de = /* @__PURE__ */ (0, R.jsx)("a", {
		href: C,
		target: w,
		rel: w === "_blank" ? "noreferrer noopener" : void 0,
		className: rA.link,
		onClick: e.onLinkClick,
		onFocus: () => ne(!0),
		onBlur: () => ne(!1),
		children: de
	})), /* @__PURE__ */ (0, R.jsxs)("div", {
		className: O,
		children: [de, a]
	});
}
var cA = {
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
}, lA = /* @__PURE__ */ function(e) {
	return e.NONE = "NONE", e.SPINNER = "SPINNER", e.BLURHASH = "BLURHASH", e;
}({});
function uA({ placeholder: e, blurhash: t, maxWidth: n, maxHeight: r, loadingLabel: i }) {
	switch (e) {
		case "BLURHASH": return t ? /* @__PURE__ */ (0, R.jsx)(nA, {
			className: cA.blurhash,
			hash: t,
			width: n ?? 58,
			height: r ?? 44
		}) : /* @__PURE__ */ (0, R.jsx)("div", {
			className: cA.spinner,
			children: /* @__PURE__ */ (0, R.jsx)(fe, {
				size: 32,
				"aria-label": i,
				role: "progressbar"
			})
		});
		case "SPINNER": return /* @__PURE__ */ (0, R.jsx)("div", {
			className: cA.spinner,
			children: /* @__PURE__ */ (0, R.jsx)(fe, {
				size: 32,
				"aria-label": i,
				role: "progressbar"
			})
		});
		default: return null;
	}
}
function dA({ className: e, imageRef: t, src: n, thumbnailSrc: r, alt: i, maxWidth: a, maxHeight: o, aspectRatio: s, isSvg: c, placeholder: l = "NONE", blurhash: u, showAnimatedContentOnHover: d, showImage: f = !0, gifLabel: p, bannerLabel: m, onImageLoad: h, onImageError: g }) {
	let { translate: _ } = z(), [v, y] = T(!1), b = v && d && n ? n : r ?? n;
	if (!b) return /* @__PURE__ */ (0, R.jsx)("div", { className: (0, L.default)(cA.root, e) });
	if (a === void 0 || o === void 0 || s === void 0) return f ? /* @__PURE__ */ (0, R.jsx)("div", {
		className: (0, L.default)(cA.root, e),
		children: /* @__PURE__ */ (0, R.jsx)("img", {
			className: cA.measureImage,
			src: b,
			ref: t,
			alt: i,
			onError: g,
			onLoad: h
		})
	}) : /* @__PURE__ */ (0, R.jsx)("div", { className: (0, L.default)(cA.root, e) });
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
	}, C = uA({
		placeholder: l,
		blurhash: u,
		maxWidth: a,
		maxHeight: o,
		loadingLabel: _("common|loading")
	});
	return /* @__PURE__ */ (0, R.jsx)("div", {
		className: (0, L.default)(cA.root, e),
		children: /* @__PURE__ */ (0, R.jsxs)("div", {
			className: cA.thumbnailContainer,
			style: x,
			children: [C && /* @__PURE__ */ (0, R.jsx)("div", {
				className: cA.placeholder,
				children: C
			}), /* @__PURE__ */ (0, R.jsxs)("div", {
				className: cA.mediaContent,
				style: S,
				children: [
					f ? /* @__PURE__ */ (0, R.jsx)("img", {
						className: cA.image,
						src: b,
						ref: t,
						alt: i,
						onError: g,
						onLoad: h,
						onMouseEnter: () => y(!0),
						onMouseLeave: () => y(!1)
					}) : null,
					p && !v ? /* @__PURE__ */ (0, R.jsx)("p", {
						className: cA.gifLabel,
						children: p
					}) : null,
					m && v ? /* @__PURE__ */ (0, R.jsx)("span", {
						className: cA.banner,
						children: m
					}) : null
				]
			})]
		})
	});
}
var fA = {
	content: "_content_1sgf8_8",
	allowButton: "_allowButton_1sgf8_13"
};
//#endregion
//#region src/room/timeline/event-tile/body/MjolnirBodyView/MjolnirBodyView.tsx
function pA({ vm: e, className: t, ref: n }) {
	V(e);
	let r = z().translate;
	return /* @__PURE__ */ (0, R.jsx)("div", {
		className: (0, L.default)(fA.content, t),
		ref: n,
		children: /* @__PURE__ */ (0, R.jsx)("i", { children: r("timeline|mjolnir|message_hidden", {}, { a: (t) => /* @__PURE__ */ (0, R.jsx)("button", {
			type: "button",
			className: fA.allowButton,
			onClick: (t) => {
				t.preventDefault(), t.stopPropagation(), e.onAllow();
			},
			children: t
		}) }) })
	});
}
var mA = {
	root: "_root_acuv8_1",
	container: "_container_acuv8_5",
	video: "_video_acuv8_10",
	hiddenButton: "_hiddenButton_acuv8_17",
	hiddenButtonContent: "_hiddenButtonContent_acuv8_30",
	loadingContainer: "_loadingContainer_acuv8_40",
	error: "_error_acuv8_48"
}, hA = {
	ERROR: "ERROR",
	HIDDEN: "HIDDEN",
	LOADING: "LOADING",
	READY: "READY"
};
function gA({ vm: e, className: t, containerClassName: n, videoRef: r, children: i }) {
	let { state: a, videoLabel: o, videoTitle: s, hiddenButtonLabel: c, errorLabel: l, maxWidth: u, maxHeight: d, aspectRatio: f, src: p, poster: m, preload: h, controls: g, muted: _, autoPlay: v } = V(e), y = (0, L.default)(t, mA.root), b = (0, L.default)(n, mA.container), x = {
		width: u === void 0 ? void 0 : `min(100%, ${u}px)`,
		maxWidth: u,
		maxHeight: d,
		aspectRatio: f
	};
	return a === hA.ERROR ? /* @__PURE__ */ (0, R.jsxs)("span", {
		className: (0, L.default)(y, mA.error),
		children: [/* @__PURE__ */ (0, R.jsx)($S, {
			width: "16",
			height: "16"
		}), l]
	}) : a === hA.HIDDEN ? /* @__PURE__ */ (0, R.jsx)("span", {
		className: y,
		children: /* @__PURE__ */ (0, R.jsx)("div", {
			className: b,
			style: x,
			children: /* @__PURE__ */ (0, R.jsx)("button", {
				type: "button",
				onClick: e.onPreviewClick,
				className: mA.hiddenButton,
				children: /* @__PURE__ */ (0, R.jsxs)("div", {
					className: mA.hiddenButtonContent,
					children: [/* @__PURE__ */ (0, R.jsx)(xw, {}), /* @__PURE__ */ (0, R.jsx)("span", { children: c })]
				})
			})
		})
	}) : a === hA.LOADING ? /* @__PURE__ */ (0, R.jsx)("span", {
		className: y,
		children: /* @__PURE__ */ (0, R.jsx)("div", {
			className: b,
			style: x,
			children: /* @__PURE__ */ (0, R.jsx)("div", {
				className: mA.loadingContainer,
				children: /* @__PURE__ */ (0, R.jsx)(fe, {
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
				className: mA.video,
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
var _A = {
	root: "_root_5gwiw_8",
	text: "_text_5gwiw_25",
	caption: "_caption_5gwiw_26",
	notice: "_notice_5gwiw_30",
	emote: "_emote_5gwiw_35",
	annotated: "_annotated_5gwiw_40",
	annotatedInline: "_annotatedInline_5gwiw_44",
	annotation: "_annotation_5gwiw_48",
	editedMarker: "_editedMarker_5gwiw_56",
	bodyLink: "_bodyLink_5gwiw_70",
	bodyAction: "_bodyAction_5gwiw_71",
	emoteSender: "_emoteSender_5gwiw_86"
}, vA = /* @__PURE__ */ function(e) {
	return e.TEXT = "TEXT", e.NOTICE = "NOTICE", e.EMOTE = "EMOTE", e.CAPTION = "CAPTION", e;
}({}), yA = /* @__PURE__ */ function(e) {
	return e.NONE = "NONE", e.LINK = "LINK", e.ACTION = "ACTION", e;
}({});
function bA(e, t) {
	return !t || !f(e) ? e : c(e, { ref: t });
}
function xA({ vm: e, body: t, bodyRef: n, urlPreviews: r, className: i }) {
	let a = AO(), { id: s, kind: c, bodyWrapper: l = "NONE", bodyLinkHref: u, bodyActionAriaLabel: d, showEditedMarker: f, editedMarkerText: p, editedMarkerAriaLabel: m, editedMarkerTooltip: h, editedMarkerCaption: g, showPendingModerationMarker: _, pendingModerationText: v, emoteSenderName: y } = V(e), b = (0, L.default)(i, _A.root, {
		[_A.text]: c === "TEXT",
		[_A.notice]: c === "NOTICE",
		[_A.emote]: c === "EMOTE",
		[_A.caption]: c === "CAPTION"
	}), x = bA(t, n), S = e.onEditedMarkerClick ? (t) => {
		t.preventDefault(), t.stopPropagation(), e.onEditedMarkerClick?.(t);
	} : void 0, C = [];
	if (f) {
		let e = /* @__PURE__ */ (0, R.jsx)("button", {
			type: "button",
			className: (0, L.default)(_A.annotation, _A.editedMarker),
			onClick: S,
			"aria-label": m,
			"data-textual-body-edited-marker": "",
			children: /* @__PURE__ */ (0, R.jsx)("span", { children: p })
		});
		C.push(h ? /* @__PURE__ */ (0, R.jsx)(Ee, {
			description: h,
			caption: g,
			isTriggerInteractive: !0,
			children: e
		}, "edited-marker") : o.cloneElement(e, { key: "edited-marker" }));
	}
	if (_ && C.push(/* @__PURE__ */ (0, R.jsx)("span", {
		className: _A.annotation,
		"data-textual-body-pending-moderation": "",
		children: v
	}, "pending-moderation-marker")), l === "LINK" && u ? x = /* @__PURE__ */ (0, R.jsx)("a", {
		href: u,
		className: _A.bodyLink,
		children: x
	}) : l === "ACTION" && (x = /* @__PURE__ */ (0, R.jsx)("button", {
		type: "button",
		"aria-label": d,
		className: _A.bodyAction,
		onClick: e.onBodyActionClick,
		children: x
	})), C.length > 0) {
		let e = (0, L.default)(_A.annotated, { [_A.annotatedInline]: c === "EMOTE" });
		x = c === "EMOTE" ? /* @__PURE__ */ (0, R.jsxs)("span", {
			dir: "auto",
			className: e,
			"data-textual-body-annotation-wrapper": "",
			children: [x, C]
		}) : /* @__PURE__ */ (0, R.jsxs)("div", {
			dir: "auto",
			className: e,
			"data-textual-body-annotation-wrapper": "",
			children: [x, C]
		});
	}
	return c === "EMOTE" ? /* @__PURE__ */ (0, R.jsxs)("div", {
		id: s,
		className: b,
		onClickCapture: e.onRootClick,
		dir: "auto",
		...a,
		children: [
			"*\xA0",
			/* @__PURE__ */ (0, R.jsx)("button", {
				type: "button",
				className: _A.emoteSender,
				onClick: e.onEmoteSenderClick,
				children: y
			}),
			"\xA0",
			x,
			r
		]
	}) : /* @__PURE__ */ (0, R.jsxs)("div", {
		id: s,
		className: b,
		onClickCapture: e.onRootClick,
		...a,
		children: [x, r]
	});
}
var SA = { content: "_content_6gcu5_8" };
//#endregion
//#region src/room/timeline/event-tile/body/UnknownBodyView/UnknownBodyView.tsx
function CA({ text: e, className: t, ref: n }) {
	return /* @__PURE__ */ (0, R.jsx)("div", {
		className: (0, L.default)(SA.content, t),
		ref: n,
		children: e
	});
}
var wA = {
	content: "_content_bkfxu_10",
	source: "_source_bkfxu_24",
	toggle: "_toggle_bkfxu_34",
	expanded: "_expanded_bkfxu_68"
};
//#endregion
//#region src/room/timeline/event-tile/body/ViewSourceEventView/ViewSourceEventView.tsx
function TA({ vm: e, className: t, expandedClassName: n, ref: r }) {
	let i = AO(), { expanded: a, preview: o, source: s } = V(e), c = z().translate, l = c("devtools|toggle_event"), u = (0, L.default)(wA.content, t, { [wA.expanded]: a }, a && n);
	return /* @__PURE__ */ (0, R.jsxs)("span", {
		className: u,
		ref: r,
		...i,
		children: [a ? /* @__PURE__ */ (0, R.jsx)("pre", {
			className: wA.source,
			children: s
		}) : /* @__PURE__ */ (0, R.jsx)("code", {
			className: wA.source,
			children: o
		}), /* @__PURE__ */ (0, R.jsx)(Ee, {
			description: l,
			placement: "top",
			children: /* @__PURE__ */ (0, R.jsx)("button", {
				type: "button",
				"aria-label": l,
				className: wA.toggle,
				onClick: e.onToggle,
				children: a ? /* @__PURE__ */ (0, R.jsx)(TS, {}) : /* @__PURE__ */ (0, R.jsx)(qS, {})
			})
		})]
	});
}
var EA = {
	tileErrorView: "_tileErrorView_1nx8u_1",
	line: "_line_1nx8u_8",
	message: "_message_1nx8u_16",
	viewSourceButton: "_viewSourceButton_1nx8u_20"
};
//#endregion
//#region src/room/timeline/event-tile/EventTileView/TileErrorView/TileErrorView.tsx
function DA({ vm: e, className: t }) {
	let n = AO(), { message: r, eventType: i, bugReportCtaLabel: a, viewSourceCtaLabel: o } = V(e);
	return /* @__PURE__ */ (0, R.jsx)("li", {
		className: (0, L.default)(EA.tileErrorView, t),
		...n,
		children: /* @__PURE__ */ (0, R.jsxs)("div", {
			className: EA.line,
			role: "status",
			children: [
				/* @__PURE__ */ (0, R.jsxs)("span", {
					className: EA.message,
					children: [r, i && ` (${i})`]
				}),
				a && /* @__PURE__ */ (0, R.jsx)(O, {
					kind: "secondary",
					size: "md",
					onClick: e.onBugReportClick,
					children: a
				}),
				o && /* @__PURE__ */ (0, R.jsx)("button", {
					type: "button",
					className: EA.viewSourceButton,
					onClick: e.onViewSourceClick,
					children: o
				})
			]
		})
	});
}
var OA = {
	pill: "_pill_1i8jm_8",
	label: "_label_1i8jm_14"
};
//#endregion
//#region src/core/pill-input/Pill/Pill.tsx
function kA({ className: e, children: t, label: n, onClick: r, ...i }) {
	let a = v(), { translate: o } = z();
	return /* @__PURE__ */ (0, R.jsxs)(B, {
		display: "inline-flex",
		gap: "var(--cpd-space-1-5x)",
		align: "center",
		className: (0, L.default)(OA.pill, e),
		...i,
		children: [
			t,
			/* @__PURE__ */ (0, R.jsx)("span", {
				id: a,
				className: OA.label,
				children: n
			}),
			r && /* @__PURE__ */ (0, R.jsx)(j, {
				"aria-describedby": a,
				size: "16px",
				onClick: r,
				"aria-label": o("action|delete"),
				className: "mx_Dialog_nonDialogButton",
				children: /* @__PURE__ */ (0, R.jsx)(xS, {})
			})
		]
	});
}
//#endregion
//#region ../../node_modules/.pnpm/react-merge-refs@3.0.2_react@19.2.8/node_modules/react-merge-refs/dist/index.js
function AA(e) {
	return (t) => {
		for (let n of e) MA(n, t);
	};
}
function jA(e) {
	return (t) => {
		let n = [];
		for (let r of e) {
			let e = MA(r, t), i = typeof e == "function";
			n.push(i ? e : () => MA(r, null));
		}
		return () => {
			for (let e of n) e();
		};
	};
}
function MA(e, t) {
	if (typeof e == "function") return e(t);
	e && (e.current = t);
}
var NA = parseInt(te.split(".")[0], 10) >= 19 ? jA : AA;
function PA(e) {
	return S(() => NA(e), e);
}
var FA = {
	pillInput: "_pillInput_1yam9_8",
	input: "_input_1yam9_16",
	largerInput: "_largerInput_1yam9_32"
};
//#endregion
//#region src/core/pill-input/PillInput/PillInput.tsx
function IA({ className: e, children: t, onRemoveChildren: n, inputProps: r, ...i }) {
	let a = w(null), o = vy(r, ["onKeyDown", "ref"]), c = PA([a, r?.ref]), l = s.toArray(t).length > 0;
	return /* @__PURE__ */ (0, R.jsxs)(B, {
		...i,
		gap: "var(--cpd-space-1x)",
		direction: "column",
		className: (0, L.default)(FA.pillInput, e),
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
			className: (0, L.default)(FA.input, { [FA.largerInput]: l }),
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
var LA = {
	container: "_container_mcq5y_8",
	secondaryAction: "_secondaryAction_mcq5y_16",
	primaryAction: "_primaryAction_mcq5y_20",
	title: "_title_mcq5y_24",
	description: "_description_mcq5y_28"
}, RA = {
	ConnectionLost: "ConnectionLost",
	NeedsConsent: "NeedsConsent",
	ResourceLimited: "ResourceLimited",
	UnsentMessages: "UnsentMessages",
	LocalRoomFailed: "LocalRoomFailed"
};
function zA({ vm: e }) {
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
		case RA.ConnectionLost: return /* @__PURE__ */ (0, R.jsx)(Uw, {
			type: "info",
			role: "status",
			"aria-labelledby": r,
			children: /* @__PURE__ */ (0, R.jsxs)("div", {
				className: LA.container,
				children: [/* @__PURE__ */ (0, R.jsx)(N, {
					className: LA.title,
					id: r,
					weight: "medium",
					children: H("tchap|server_connectivity_lost_title", void 0, { a: (e) => /* @__PURE__ */ (0, R.jsx)("a", {
						target: "_blank",
						rel: "noreferrer noopener",
						href: "https://status.tchap.numerique.gouv.fr",
						children: e
					}) })
				}), /* @__PURE__ */ (0, R.jsx)(N, {
					className: LA.description,
					children: t("room|status_bar|server_connectivity_lost_description")
				})]
			})
		});
		case RA.NeedsConsent: return /* @__PURE__ */ (0, R.jsx)(Uw, {
			type: "info",
			role: "status",
			"aria-labelledby": r,
			actions: /* @__PURE__ */ (0, R.jsx)(O, {
				onClick: s,
				className: LA.primaryAction,
				kind: "primary",
				size: "md",
				as: "a",
				href: n.consentUri,
				target: "_blank",
				rel: "noreferrer noopener",
				children: t("terms|tac_button")
			}),
			children: /* @__PURE__ */ (0, R.jsx)("div", {
				className: LA.container,
				children: /* @__PURE__ */ (0, R.jsx)(N, {
					className: LA.title,
					id: r,
					weight: "medium",
					children: t("room|status_bar|requires_consent_agreement_title")
				})
			})
		});
		case RA.ResourceLimited: return /* @__PURE__ */ (0, R.jsx)(Uw, {
			type: "info",
			role: "status",
			"aria-labelledby": r,
			actions: n.adminContactHref && /* @__PURE__ */ (0, R.jsx)(O, {
				kind: "secondary",
				size: "md",
				as: "a",
				href: n.adminContactHref,
				target: "_blank",
				rel: "noreferrer noopener",
				children: "Contact admin"
			}),
			children: /* @__PURE__ */ (0, R.jsxs)("div", {
				className: LA.container,
				children: [/* @__PURE__ */ (0, R.jsx)(N, {
					className: LA.title,
					id: r,
					weight: "medium",
					children: {
						monthly_active_user: t("room|status_bar|monthly_user_limit_reached_title"),
						hs_disabled: t("room|status_bar|homeserver_blocked_title")
					}[n.resourceLimit] || t("room|status_bar|exceeded_resource_limit_title")
				}), /* @__PURE__ */ (0, R.jsx)(N, {
					className: LA.description,
					children: t("room|status_bar|exceeded_resource_limit_description")
				})]
			})
		});
		case RA.LocalRoomFailed: return /* @__PURE__ */ (0, R.jsx)(Uw, {
			role: "status",
			type: "info",
			"aria-labelledby": r,
			actions: /* @__PURE__ */ (0, R.jsx)(O, {
				size: "md",
				kind: "primary",
				className: LA.primaryAction,
				Icon: qC,
				onClick: o,
				children: t("action|retry")
			}),
			children: /* @__PURE__ */ (0, R.jsx)(N, {
				className: LA.title,
				id: r,
				weight: "medium",
				children: t("room|status_bar|failed_to_create_room_title")
			})
		});
		case RA.UnsentMessages: return /* @__PURE__ */ (0, R.jsx)(Uw, {
			role: "status",
			type: "info",
			actions: n.isResending ? /* @__PURE__ */ (0, R.jsx)(fe, {}) : /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [e.onDeleteAllClick && /* @__PURE__ */ (0, R.jsx)(O, {
				size: "md",
				kind: "secondary",
				Icon: DS,
				className: LA.secondaryAction,
				onClick: i,
				children: t("room|status_bar|delete_all")
			}), e.onResendAllClick && /* @__PURE__ */ (0, R.jsx)(O, {
				size: "md",
				kind: "primary",
				Icon: qC,
				onClick: a,
				className: LA.primaryAction,
				children: t("room|status_bar|retry_all")
			})] }),
			"aria-labelledby": r,
			children: /* @__PURE__ */ (0, R.jsxs)("div", {
				className: LA.container,
				children: [/* @__PURE__ */ (0, R.jsx)(N, {
					className: LA.title,
					id: r,
					weight: "medium",
					children: H("tchap|server_connectivity_lost_title", void 0, { a: (e) => /* @__PURE__ */ (0, R.jsx)("a", {
						target: "_blank",
						rel: "noreferrer noopener",
						href: "https://status.tchap.numerique.gouv.fr",
						children: e
					}) })
				}), /* @__PURE__ */ (0, R.jsx)(N, {
					className: LA.description,
					children: t("room|status_bar|select_messages_to_retry")
				})]
			})
		});
		default: return null;
	}
}
var BA = {
	container: "_container_19tks_8",
	header: "_header_19tks_22",
	roundedCornerContainer: "_roundedCornerContainer_19tks_30"
}, VA = ({ vm: e, RoomAvatar: t }) => {
	let n = V(e), { translate: r } = z();
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		"data-testid": "widget-pip-container",
		className: BA.container,
		onMouseDown: e.onStartMoving,
		children: [/* @__PURE__ */ (0, R.jsxs)("div", {
			className: BA.header,
			children: [
				/* @__PURE__ */ (0, R.jsx)(j, {
					size: "28px",
					"data-testid": "base-card-back-button",
					onClick: (t) => e.onBackClick(t),
					tooltip: r("action|back"),
					kind: "secondary",
					children: /* @__PURE__ */ (0, R.jsx)(hS, {})
				}),
				/* @__PURE__ */ (0, R.jsx)(t, { size: "20px" }),
				n.roomName
			]
		}), /* @__PURE__ */ (0, R.jsx)("div", {
			className: BA.roundedCornerContainer,
			children: /* @__PURE__ */ (0, R.jsx)(e.persistentAppComponent, {
				persistentWidgetId: n.widgetId,
				persistentRoomId: n.roomId
			})
		})]
	});
};
//#endregion
//#region src/room/HistoryVisibilityBadge/HistoryVisibilityBadge.tsx
function HA({ historyVisibility: e }) {
	let t = {
		color: "var(--cpd-color-icon-info-primary)",
		width: "1rem",
		height: "1rem"
	};
	switch (e) {
		case "invited":
		case "joined": return /* @__PURE__ */ (0, R.jsxs)(D, {
			kind: "blue",
			children: [/* @__PURE__ */ (0, R.jsx)(yw, { ...t }), H("room|history_visibility_badge|private")]
		});
		case "shared": return /* @__PURE__ */ (0, R.jsxs)(D, {
			kind: "blue",
			children: [/* @__PURE__ */ (0, R.jsx)(tC, { ...t }), H("room|history_visibility_badge|shared")]
		});
		case "world_readable": return /* @__PURE__ */ (0, R.jsxs)(D, {
			kind: "blue",
			children: [/* @__PURE__ */ (0, R.jsx)(dw, { ...t }), H("room|history_visibility_badge|world_readable")]
		});
		default: return null;
	}
}
//#endregion
//#region src/room/right-panel/WidgetContextMenuView/WidgetContextMenuView.tsx
var UA = ({ vm: e }) => {
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
		children: /* @__PURE__ */ (0, R.jsx)(jC, {})
	});
	return /* @__PURE__ */ (0, R.jsx)(he, {
		title: "Widget context menu",
		open: l,
		showTitle: !1,
		side: "right",
		align: "start",
		trigger: S,
		onOpenChange: e.onFinished,
		children: x()
	});
}, WA = { content: "_content_u6fft_8" }, GA = { timelineSeparator: "_timelineSeparator_yq5ye_8" }, KA = ({ label: e, className: t, children: n, role: r = "separator" }) => /* @__PURE__ */ (0, R.jsxs)(B, {
	className: (0, L.default)(t, GA.timelineSeparator),
	role: r,
	"aria-label": r === "separator" ? e : void 0,
	align: "center",
	children: [
		/* @__PURE__ */ (0, R.jsx)("hr", { role: "none" }),
		n,
		/* @__PURE__ */ (0, R.jsx)("hr", { role: "none" })
	]
}), qA = 15e3, JA = 75e3, YA = 45, XA = 75, ZA = 23, QA = 26;
function $A(e, t) {
	let n = Date.now() - e, r = Math.abs(Math.ceil(n / 6e4)), i = Math.ceil(r / 60), a = Math.ceil(i / 24), o = t?.translate ?? H;
	return n >= 0 ? n <= qA ? o("time|few_seconds_ago") : n <= JA ? o("time|about_minute_ago") : r <= YA ? o("time|n_minutes_ago", { num: r }) : r <= XA ? o("time|about_hour_ago") : i <= ZA ? o("time|n_hours_ago", { num: i }) : i <= QA ? o("time|about_day_ago") : o("time|n_days_ago", { num: a }) : (n = Math.abs(n), n <= qA ? o("time|in_few_seconds") : n <= JA ? o("time|in_about_minute") : r <= YA ? o("time|in_n_minutes", { num: r }) : r <= XA ? o("time|in_about_hour") : i <= ZA ? o("time|in_n_hours", { num: i }) : i <= QA ? o("time|in_about_day") : o("time|in_n_days", { num: a }));
}
function ej(e) {
	return new Intl.RelativeTimeFormat(e?.language, {
		style: "long",
		numeric: "auto"
	});
}
var tj = {
	picker_menu_item: "_picker_menu_item_1kc2b_8",
	picker_form: "_picker_form_1kc2b_12",
	picker_input: "_picker_input_1kc2b_22",
	picker_input_date: "_picker_input_date_1kc2b_28"
}, nj = ({ vm: e, inputRef: t, onSubmitted: n, onDismissed: r }) => {
	let i = V(e), a = Yd(i.jumpFromDate ? new Date(i.jumpFromDate) : /* @__PURE__ */ new Date()), { translate: o } = z(), s = v(), [c, l] = T(a), u = w(null), d = t ?? u, f = w(null), p = (e) => {
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
		className: tj.picker_menu_item,
		children: /* @__PURE__ */ (0, R.jsxs)(ye, {
			className: tj.picker_form,
			onSubmit: (e) => {
				e.preventDefault(), h();
			},
			children: [/* @__PURE__ */ (0, R.jsx)(oe, {
				name: "jump-to-date-field",
				className: tj.picker_input,
				children: /* @__PURE__ */ (0, R.jsx)(Ce, {
					ref: d,
					id: s,
					type: "date",
					"aria-label": o("room|jump_to_date_prompt"),
					onInput: m,
					onKeyDown: p,
					value: c,
					max: Yd(/* @__PURE__ */ new Date()),
					className: tj.picker_input_date
				})
			}), /* @__PURE__ */ (0, R.jsx)(Se, {
				ref: f,
				className: tj.picker_button,
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
}, rj = {
	picker_menu: "_picker_menu_14xuw_8",
	picker_menu_item: "_picker_menu_item_14xuw_14",
	picker_separator: "_picker_separator_14xuw_18"
}, ij = ({ vm: e, open: t, trigger: n, onOpenChange: r }) => {
	let i = z(), { translate: a } = z(), o = w(null);
	return /* @__PURE__ */ (0, R.jsxs)(he, {
		open: t,
		onOpenChange: (e) => {
			r?.(e);
		},
		title: a("room|jump_to_date"),
		showTitle: !1,
		trigger: n,
		align: "start",
		className: rj.picker_menu,
		children: [
			/* @__PURE__ */ (0, R.jsx)(M, {
				label: gg(ej(i).format(-1, "week")),
				onSelect: () => e.onLastWeekPicked?.(),
				"data-testid": "jump-to-date-last-week",
				hideChevron: !0,
				className: rj.picker_menu_item
			}),
			/* @__PURE__ */ (0, R.jsx)(M, {
				label: gg(ej(i).format(-1, "month")),
				onSelect: () => e.onLastMonthPicked?.(),
				"data-testid": "jump-to-date-last-month",
				hideChevron: !0,
				className: rj.picker_menu_item
			}),
			/* @__PURE__ */ (0, R.jsx)(M, {
				label: a("room|jump_to_date_beginning"),
				onSelect: () => e.onBeginningPicked?.(),
				"data-testid": "jump-to-date-beginning",
				hideChevron: !0,
				className: rj.picker_menu_item,
				onKeyDown: (e) => {
					e.key === "ArrowDown" && (e.preventDefault(), o.current?.focus());
				}
			}),
			/* @__PURE__ */ (0, R.jsx)(be, {
				decorative: !0,
				className: rj.picker_separator
			}),
			/* @__PURE__ */ (0, R.jsx)(nj, {
				vm: e,
				inputRef: o,
				onSubmitted: () => r?.(!1),
				onDismissed: () => r?.(!1)
			})
		]
	});
}, aj = d(function({ label: e, tooltipOpen: t, className: n, ...r }, i) {
	let { translate: a } = z();
	return /* @__PURE__ */ (0, R.jsx)(Ee, {
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
			children: [/* @__PURE__ */ (0, R.jsx)(le, {
				as: "h2",
				size: "lg",
				"aria-hidden": "true",
				children: e
			}), /* @__PURE__ */ (0, R.jsx)(pS, {})]
		})
	});
});
//#endregion
//#region src/room/timeline/DateSeparatorView/DateSeparatorView.tsx
function oj({ vm: e, className: t }) {
	let { label: n, jumpToEnabled: r } = V(e), [i, a] = T(!1), [o, s] = T(!1), [c, l] = T(!1);
	return r ? /* @__PURE__ */ (0, R.jsx)(KA, {
		label: n,
		className: (0, L.default)(t),
		role: "none",
		children: /* @__PURE__ */ (0, R.jsx)(ij, {
			vm: e,
			open: i,
			onOpenChange: (e) => {
				a(e), e && (s(!1), l(!1));
			},
			trigger: /* @__PURE__ */ (0, R.jsx)(aj, {
				label: n,
				tooltipOpen: !i && (o || c),
				className: WA.content,
				onMouseEnter: () => s(!0),
				onMouseLeave: () => s(!1),
				onFocus: (e) => l(e.currentTarget.matches(":focus-visible")),
				onBlur: () => l(!1)
			})
		})
	}) : /* @__PURE__ */ (0, R.jsx)(KA, {
		label: n,
		className: (0, L.default)(t),
		children: /* @__PURE__ */ (0, R.jsx)(B, {
			className: WA.content,
			children: /* @__PURE__ */ (0, R.jsx)(le, {
				as: "h2",
				size: "lg",
				"aria-hidden": "true",
				children: n
			})
		})
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+virtual-core@3.17.8_patch_hash=9db9d80c4fe7a7a9911643522aef9bc9359075570c38f3d847ff75ed635d921c/node_modules/@tanstack/virtual-core/dist/esm/lazy-measurements.js
function sj(e, t, n) {
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
//#region ../../node_modules/.pnpm/@tanstack+virtual-core@3.17.8_patch_hash=9db9d80c4fe7a7a9911643522aef9bc9359075570c38f3d847ff75ed635d921c/node_modules/@tanstack/virtual-core/dist/esm/utils.js
function cj(e, t, n) {
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
function lj(e, t) {
	if (e === void 0) throw Error(`Unexpected undefined${t ? `: ${t}` : ""}`);
	return e;
}
var uj = (e, t) => Math.abs(e - t) < 1.01, dj = (e, t, n) => {
	let r;
	return Object.assign(function(...i) {
		e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, i), n);
	}, { cancel: () => {
		e.clearTimeout(r);
	} });
}, fj, pj = () => {
	if (fj !== void 0) return fj;
	if (typeof navigator > "u") return fj = !1;
	if (/iP(hone|od|ad)/.test(navigator.userAgent)) return fj = !0;
	let e = navigator.maxTouchPoints;
	return fj = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, mj = (e) => {
	let { offsetWidth: t, offsetHeight: n } = e;
	return {
		width: t,
		height: n
	};
}, hj = (e) => e, gj = (e) => {
	let t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1) - t + 1, r = Array(n);
	for (let e = 0; e < n; e++) r[e] = t + e;
	return r;
}, _j = (e, t) => {
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
	if (i(mj(n)), !r.ResizeObserver) return () => {};
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
			i(mj(n));
		};
		e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(r) : r();
	});
	return a.observe(n, { box: "border-box" }), () => {
		a.unobserve(n);
	};
}, vj = { passive: !0 }, yj = typeof window > "u" || "onscrollend" in window, bj = (e, t, n) => {
	let r = e.scrollElement;
	if (!r) return;
	let i = e.targetWindow;
	if (!i) return;
	let a = e.options.useScrollendEvent && yj, o = 0, s = a ? null : dj(i, () => t(o, !1), e.options.isScrollingResetDelay), c = (e) => () => {
		o = n(r), s?.(), t(o, e);
	}, l = c(!0), u = c(!1);
	return r.addEventListener("scroll", l, vj), a && r.addEventListener("scrollend", u, vj), () => {
		r.removeEventListener("scroll", l), a && r.removeEventListener("scrollend", u), s?.cancel();
	};
}, xj = (e, t) => bj(e, t, (t) => {
	let { horizontal: n, isRtl: r } = e.options;
	return n ? t.scrollLeft * (r && -1 || 1) : t.scrollTop;
}), Sj = (e, t, n) => {
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
}, Cj = (e, { adjustments: t = 0, behavior: n }, r) => {
	var i, a;
	(a = (i = r.scrollElement)?.scrollTo) == null || a.call(i, {
		[r.options.horizontal ? "left" : "top"]: e + t,
		behavior: n
	});
}, wj = class {
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
				getItemKey: hj,
				rangeExtractor: gj,
				onChange: () => {},
				measureElement: Sj,
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
		}, this.maybeNotify = cj(() => (this.calculateRange(), [
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
			this.unsubs.filter(Boolean).forEach((e) => e()), this.unsubs = [], this.observer.disconnect(), this.rafId != null && this.targetWindow && (this.targetWindow.cancelAnimationFrame(this.rafId), this.rafId = null), this.scrollState = null, this.isScrolling = !1, this.scrollDirection = null, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this.scrollElement = null, this.targetWindow = null;
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
						this._iosTouching = !1, !(!pj() || this.targetWindow == null) && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
							this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
						}, 150));
					};
					e.addEventListener("touchstart", t, vj), e.addEventListener("touchend", n, vj), this.unsubs.push(() => {
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
				e !== null && !r && (pj() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? i !== 0 && (this._iosDeferredAdjustment += i) : this._scrollToOffset(this.getScrollOffset(), {
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
		}, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getMeasurementOptions = cj(() => [
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
		}), { key: !1 }), this.isIndexInRange = (e) => e >= 0 && e < this.options.count, this.getMeasurements = cj(() => [this.getMeasurementOptions(), this.itemSizeCacheVersion], ({ count: e, paddingStart: t, scrollMargin: n, getItemKey: r, enabled: i, lanes: a, laneAssignmentMode: o, gap: s }, c) => {
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
				let c = sj(e, a, r);
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
		}), this.calculateRange = cj(() => [
			this.getMeasurements(),
			this.getSize(),
			this.getScrollOffset(),
			this.options.lanes
		], (e, t, n, r) => e.length === 0 || t === 0 ? (this.range = null, null) : (this.range = Dj(e, t, n, r, r === 1 && this._flatMeasurements != null ? this._flatMeasurements : null), this.range), {
			key: process.env.NODE_ENV !== "production" && "calculateRange",
			debug: () => this.options.debug
		}), this.getVirtualIndexes = cj(() => {
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
				(this.pendingMin === null || e < this.pendingMin) && (this.pendingMin = e), this.itemSizeCache.set(i, t), this.itemSizeCacheVersion++;
				let f = !1;
				a ? f = this.applyScrollAdjustment(this.getTotalSize() - c) : d && (f = this.applyScrollAdjustment(s)), this.notify(f);
			}
		}, this.getVirtualItems = cj(() => [this.getVirtualIndexes(), this.getMeasurements()], (e, t) => {
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
			return lj(t[Tj(0, t.length - 1, r ? (e) => n[e * 2] : (e) => lj(t[e]).start, e)]);
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
		return e !== 0 && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", e), pj() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? (this._iosDeferredAdjustment += e, !1) : (this._scrollToOffset(this.getScrollOffset(), {
			adjustments: this.scrollAdjustments += e,
			behavior: t
		}), this.scrollOffset !== null && (this.scrollOffset += this.scrollAdjustments, this.scrollOffset < 0 && (this.scrollOffset = 0), this.scrollAdjustments = 0), !0));
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
		if (!n && uj(t, this.getScrollOffset())) {
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
}, Tj = (e, t, n, r) => {
	for (; e <= t;) {
		let i = (e + t) / 2 | 0, a = n(i);
		if (a < r) e = i + 1;
		else if (a > r) t = i - 1;
		else return i;
	}
	return e > 0 ? e - 1 : 0;
};
function Ej(e, t, n) {
	let r = 0;
	for (; r <= t;) {
		let i = (r + t) / 2 | 0, a = e[i * 2];
		if (a < n) r = i + 1;
		else if (a > n) t = i - 1;
		else return i;
	}
	return r > 0 ? r - 1 : 0;
}
function Dj(e, t, n, r, i) {
	let a = e.length - 1;
	if (e.length <= r) return {
		startIndex: 0,
		endIndex: a
	};
	if (r === 1 && i !== null) {
		let e = Ej(i, a, n), r = e, o = n + t;
		for (; r < a && i[r * 2] + i[r * 2 + 1] < o;) r++;
		return {
			startIndex: e,
			endIndex: r
		};
	}
	let o = Tj(0, a, (t) => e[t].start, n), s = o;
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
//#region ../../node_modules/.pnpm/@tanstack+react-virtual@3.14.10_react-dom@19.2.8_react@19.2.8/node_modules/@tanstack/react-virtual/dist/esm/index.js
var Oj = typeof document < "u" ? a.useLayoutEffect : a.useEffect;
function kj({ useFlushSync: e = !0, directDomUpdates: t = !1, directDomUpdatesMode: n = "transform", ...r }) {
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
			l && (e && n ? Pe(i) : i()), (a = r.onChange) == null || a.call(r, t, n);
		}
	}, [u] = a.useState(() => {
		let e = new wj(l);
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
	return u.setOptions(l), Oj(() => u._didMount(), []), Oj(() => (s(u), u._willUpdate())), Oj(() => {
		c(u);
	}), u;
}
function Aj(e) {
	return kj({
		observeElementRect: _j,
		observeElementOffset: xj,
		scrollToFn: Cj,
		...e
	});
}
//#endregion
//#region src/room/timeline/TimelineView/types.ts
var jj = "backward-loading", Mj = "forward-loading", Nj = {
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
function Pj({ snapshot: e, vm: t, scrollNow: n }) {
	let { translate: r } = z(), i = e.canJumpToReadMarker, a = !e.atLiveEnd || !e.isAtBottom, o = h(() => t.onJumpToReadMarker(n), [t, n]), s = h(() => t.onJumpToLive(n), [t, n]);
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: Nj.overlay,
		children: [
			i === "above" && /* @__PURE__ */ (0, R.jsxs)("div", {
				className: Nj.topUnreadBar,
				children: [/* @__PURE__ */ (0, R.jsx)(Ee, {
					description: r("room|jump_read_marker"),
					placement: "left",
					children: /* @__PURE__ */ (0, R.jsx)("button", {
						className: Nj.topUnreadBarScrollUp,
						"aria-label": r("room|jump_read_marker"),
						onClick: o,
						type: "button",
						children: /* @__PURE__ */ (0, R.jsx)(yS, {})
					})
				}), /* @__PURE__ */ (0, R.jsx)(Ee, {
					description: r("notifications|mark_all_read"),
					placement: "left",
					children: /* @__PURE__ */ (0, R.jsx)("button", {
						className: Nj.topUnreadBarMarkAsRead,
						"aria-label": r("notifications|mark_all_read"),
						onClick: () => t.onMarkAllAsRead(),
						type: "button",
						children: /* @__PURE__ */ (0, R.jsx)(xS, {})
					})
				})]
			}),
			i === "below" && /* @__PURE__ */ (0, R.jsxs)("div", {
				className: Nj.belowUnreadBar,
				children: [/* @__PURE__ */ (0, R.jsx)(Ee, {
					description: r("room|jump_read_marker"),
					placement: "left",
					children: /* @__PURE__ */ (0, R.jsx)("button", {
						className: Nj.belowUnreadBarScrollDown,
						"aria-label": r("room|jump_read_marker"),
						onClick: o,
						type: "button",
						children: /* @__PURE__ */ (0, R.jsx)(pS, {})
					})
				}), /* @__PURE__ */ (0, R.jsx)(Ee, {
					description: r("notifications|mark_all_read"),
					placement: "left",
					children: /* @__PURE__ */ (0, R.jsx)("button", {
						className: Nj.belowUnreadBarMarkAsRead,
						"aria-label": r("notifications|mark_all_read"),
						onClick: () => t.onMarkAllAsRead(),
						type: "button",
						children: /* @__PURE__ */ (0, R.jsx)(xS, {})
					})
				})]
			}),
			a && /* @__PURE__ */ (0, R.jsxs)("div", {
				className: (0, L.default)(Nj.jumpToBottom, { [Nj.highlight]: e.hasHighlights }),
				children: [/* @__PURE__ */ (0, R.jsx)(Ee, {
					description: r("room|jump_to_bottom_button"),
					placement: "left",
					children: /* @__PURE__ */ (0, R.jsx)("button", {
						className: Nj.jumpToBottomScrollDown,
						"aria-label": r("room|jump_to_bottom_button"),
						onClick: s,
						type: "button",
						children: /* @__PURE__ */ (0, R.jsx)(pS, {})
					})
				}), e.numUnreadMessages > 0 && /* @__PURE__ */ (0, R.jsx)("div", {
					className: Nj.jumpToBottomBadge,
					children: e.numUnreadMessages
				})]
			})
		]
	});
}
var Fj = {
	root: "_root_1mj47_8",
	scroller: "_scroller_1mj47_14",
	hidden: "_hidden_1mj47_26",
	list: "_list_1mj47_30",
	tile: "_tile_1mj47_41",
	cover: "_cover_1mj47_51"
}, Ij = 48, Lj = 16, Rj = 4, zj = 1e3;
function Bj({ vm: e, renderItem: t }) {
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
		let o = t.scrollOffset ?? 0, s = t.scrollRect?.height ?? 0, c = t.getTotalSize(), l = s > 0 && o + s >= c - Rj;
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
	}, [e]), b = Aj({
		count: i.length,
		getScrollElement: () => o.current,
		estimateSize: () => Ij,
		getItemKey: u,
		overscan: Lj,
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
			if (n !== void 0 && Math.abs(n[0] - r) <= 1.5 || t - u >= zj) {
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
	let ee = w(null);
	x(() => {
		if (f.current !== "live") return;
		let t = r.current.pendingAnchor;
		if (!t) {
			ee.current = null;
			return;
		}
		if (ee.current !== t.targetKey) {
			let n = S(t.targetKey, t.align);
			n !== null && (b.scrollToOffset(n), ee.current = t.targetKey, e.onAnchorReached());
		}
	});
	let te = h((e) => {
		let t = S(e.targetKey, e.align);
		t !== null && b.scrollToOffset(t);
	}, [S, b]), E = b.getVirtualItems();
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: Fj.root,
		children: [
			/* @__PURE__ */ (0, R.jsx)("div", {
				ref: o,
				"data-testid": "timeline-scroller",
				tabIndex: 0,
				className: (0, L.default)(Fj.scroller, { [Fj.hidden]: !s }),
				children: /* @__PURE__ */ (0, R.jsx)("ol", {
					ref: b.containerRef,
					className: (0, L.default)("mx_TimelineView_list", Fj.list),
					role: "list",
					children: E.map((e) => {
						let n = i[e.index];
						return n ? /* @__PURE__ */ (0, R.jsx)("li", {
							className: (0, L.default)("mx_TimelineView_tile", Fj.tile),
							"data-index": e.index,
							"data-key": n.key,
							ref: b.measureElement,
							children: t(n)
						}, e.key) : null;
					})
				})
			}),
			!s && /* @__PURE__ */ (0, R.jsx)("div", {
				className: Fj.cover,
				children: /* @__PURE__ */ (0, R.jsx)(fe, { size: 32 })
			}),
			s && /* @__PURE__ */ (0, R.jsx)(Pj, {
				snapshot: n,
				vm: e,
				scrollNow: te
			})
		]
	});
}
var Vj = {
	toolbar: "_toolbar_1ksun_8",
	toolbar_item: "_toolbar_item_1ksun_14"
};
//#endregion
//#region src/room/timeline/event-tile/actions/ActionBarView/ActionBarButton.tsx
function Hj({ presentation: e, buttonRef: t, label: n, onActivate: r, icon: i, disabled: a, ariaPressed: o, ariaExpanded: s, tooltipDescription: c, tooltipCaption: l }) {
	let u = e === "icon", [d, f, p] = Px(), m = w(null), h = PA([
		t,
		m,
		a ? null : p
	]), g = a || !f ? -1 : 0;
	return x(() => {
		m.current && (m.current.tabIndex = g);
	}, [g]), /* @__PURE__ */ (0, R.jsx)(Ee, {
		description: c ?? n,
		caption: l,
		placement: "top",
		children: /* @__PURE__ */ (0, R.jsx)(O, {
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
			className: Vj.toolbar_item,
			Icon: u ? i : void 0,
			children: u ? void 0 : n
		})
	});
}
//#endregion
//#region src/room/timeline/event-tile/actions/ActionBarView/ActionBarView.tsx
var Uj = /* @__PURE__ */ function(e) {
	return e.Cancel = "cancel", e.CopyLink = "copyLink", e.Download = "download", e.Edit = "edit", e.Expand = "expand", e.Hide = "hide", e.Options = "options", e.Pin = "pin", e.React = "react", e.Remove = "remove", e.Reply = "reply", e.ReplyInThread = "replyInThread", e.Resend = "resend", e.ViewInRoom = "viewInRoom", e.ViewSource = "viewSource", e;
}({});
function Wj({ vm: e, className: t }) {
	let { translate: n } = z(), { actions: r, presentation: i = "icon", isThreadReplyAllowed: a, isDownloadEncrypted: o, isDownloadLoading: s, isPinned: c, isQuoteExpanded: l, downloadScanState: u } = V(e), d = w({}), f = S(() => Object.fromEntries(Object.values(Uj).map((e) => [e, (t) => {
		d.current[e] = t;
	}])), []), p = {};
	p.edit = /* @__PURE__ */ (0, R.jsx)(Hj, {
		presentation: i,
		buttonRef: f.edit,
		label: n("action|edit"),
		onActivate: e.onEditClick,
		icon: LS
	}, "edit");
	let m = n(c ? "action|unpin" : "action|pin");
	p.pin = /* @__PURE__ */ (0, R.jsx)(Hj, {
		presentation: i,
		buttonRef: f.pin,
		label: m,
		onActivate: e.onPinClick,
		icon: c ? sw : FC,
		ariaPressed: c
	}, "pin"), p.cancel = /* @__PURE__ */ (0, R.jsx)(Hj, {
		presentation: i,
		buttonRef: f.cancel,
		label: n("action|delete"),
		onActivate: e.onCancelClick,
		icon: DS
	}, "cancel"), p.copyLink = /* @__PURE__ */ (0, R.jsx)(Hj, {
		presentation: i,
		buttonRef: f.copyLink,
		label: n("timeline|mab|copy_link_thread"),
		onActivate: e.onCopyLinkClick,
		icon: pC
	}, "copyLink"), p.reply = /* @__PURE__ */ (0, R.jsx)(Hj, {
		presentation: i,
		buttonRef: f.reply,
		label: n("action|reply"),
		onActivate: e.onReplyClick,
		icon: GC
	}, "reply"), p.react = /* @__PURE__ */ (0, R.jsx)(Hj, {
		presentation: i,
		buttonRef: f.react,
		label: n("action|react"),
		onActivate: e.onReactionsClick,
		icon: VC
	}, "react");
	let g = n("action|download");
	s && (g = n(o ? "timeline|download_action_decrypting" : "timeline|download_action_downloading")), p.download = /* @__PURE__ */ (0, R.jsx)(Hj, {
		presentation: i,
		buttonRef: f.download,
		label: g,
		onActivate: e.onDownloadClick,
		icon: s || u === "scanning" ? fe : u === "unsafe" ? rS : NS,
		disabled: s || u === "unsafe"
	}, "download"), p.hide = /* @__PURE__ */ (0, R.jsx)(Hj, {
		presentation: i,
		buttonRef: f.hide,
		label: n("action|hide"),
		onActivate: e.onHideClick,
		icon: yw
	}, "hide");
	let _ = n(a ? "action|reply_in_thread" : "threads|error_start_thread_existing_relation");
	p.replyInThread = /* @__PURE__ */ (0, R.jsx)(Hj, {
		presentation: i,
		buttonRef: f.replyInThread,
		label: n("action|reply_in_thread"),
		tooltipDescription: _,
		onActivate: e.onReplyInThreadClick,
		icon: aw,
		disabled: !a
	}, "replyInThread"), p.resend = /* @__PURE__ */ (0, R.jsx)(Hj, {
		presentation: i,
		buttonRef: f.resend,
		label: n("action|retry"),
		onActivate: e.onResendClick,
		icon: qC
	}, "resend");
	let v = n(l ? "timeline|mab|collapse_reply_chain" : "timeline|mab|expand_reply_chain");
	p.expand = /* @__PURE__ */ (0, R.jsx)(Hj, {
		presentation: i,
		buttonRef: f.expand,
		label: v,
		tooltipCaption: `${n("keyboard|shift")} + ${n("action|click")}`,
		onActivate: e.onToggleThreadExpanded,
		icon: l ? TS : qS,
		ariaExpanded: l
	}, "expand"), p.options = /* @__PURE__ */ (0, R.jsx)(Hj, {
		presentation: i,
		buttonRef: f.options,
		label: n("common|options"),
		onActivate: e.onOptionsClick,
		icon: jC
	}, "options"), p.remove = /* @__PURE__ */ (0, R.jsx)(Hj, {
		presentation: i,
		buttonRef: f.remove,
		label: n("action|remove"),
		onActivate: e.onRemoveClick,
		icon: DS
	}, "remove"), p.viewInRoom = /* @__PURE__ */ (0, R.jsx)(Hj, {
		presentation: i,
		buttonRef: f.viewInRoom,
		label: n("timeline|mab|view_in_room"),
		onActivate: e.onViewInRoomClick,
		icon: xw
	}, "viewInRoom"), p.viewSource = /* @__PURE__ */ (0, R.jsx)(Hj, {
		presentation: i,
		buttonRef: f.viewSource,
		label: n("action|view_source"),
		onActivate: e.onViewSourceClick,
		icon: lC
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
	return b.length === 0 ? null : /* @__PURE__ */ (0, R.jsx)(Nx, {
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
			className: (0, L.default)(t, Vj.toolbar),
			children: b.map((e) => p[e.action])
		})
	}, x);
}
var Gj = {
	disambiguatedProfile: "_disambiguatedProfile_1q5ax_8",
	disambiguatedProfile_displayName: "_disambiguatedProfile_displayName_1q5ax_18",
	disambiguatedProfile_mxid: "_disambiguatedProfile_mxid_1q5ax_26",
	userStatus: "_userStatus_1q5ax_32"
};
//#endregion
//#region src/room/timeline/event-tile/EventTileView/DisambiguatedProfile/DisambiguatedProfileView.tsx
function Kj({ vm: e, className: t }) {
	let n = AO(), { displayName: r, colorClass: i, displayIdentifier: a, title: o, emphasizeDisplayName: s, userStatus: c } = V(e), l = c && c.emoji, u = (0, L.default)(i, {
		[Gj.disambiguatedProfile_displayName]: s,
		mx_DisambiguatedProfile_displayName: s
	}), d = e.onClick ? (t) => {
		(t.key === "Enter" || t.key === " ") && (t.preventDefault(), e.onClick?.(t));
	} : void 0;
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: (0, L.default)(t, Gj.disambiguatedProfile),
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
			c && /* @__PURE__ */ (0, R.jsx)(Ee, {
				description: c.text,
				children: /* @__PURE__ */ (0, R.jsx)(N, {
					as: "span",
					size: "md",
					className: (0, L.default)("mx_DisambiguatedProfile_userStatus", Gj.userStatus),
					children: l
				})
			}),
			a && /* @__PURE__ */ (0, R.jsx)("span", {
				className: (0, L.default)("mx_DisambiguatedProfile_mxid", Gj.disambiguatedProfile_mxid),
				children: a
			})
		]
	});
}
var qj = {
	e2ePadlock: "_e2ePadlock_1hynz_8",
	normal: "_normal_1hynz_21",
	decryptionFailure: "_decryptionFailure_1hynz_22",
	warning: "_warning_1hynz_26"
}, Jj = /* @__PURE__ */ function(e) {
	return e.Normal = "normal", e.Warning = "warning", e.DecryptionFailure = "decryption_failure", e;
}({}), Yj = {
	normal: /* @__PURE__ */ (0, R.jsx)(sC, {}),
	warning: /* @__PURE__ */ (0, R.jsx)(VS, {}),
	decryption_failure: /* @__PURE__ */ (0, R.jsx)(VS, {})
}, Xj = {
	normal: qj.normal,
	warning: qj.warning,
	decryption_failure: qj.decryptionFailure
};
function Zj({ icon: e, title: t, className: n }) {
	return /* @__PURE__ */ (0, R.jsx)(Ee, {
		label: t,
		isTriggerInteractive: !0,
		children: /* @__PURE__ */ (0, R.jsx)("div", {
			"data-testid": "e2e-padlock",
			className: (0, L.default)(qj.e2ePadlock, Xj[e], n),
			role: "img",
			tabIndex: 0,
			"aria-label": H("timeline|e2e_state"),
			children: Yj[e]
		})
	});
}
//#endregion
//#region src/room/timeline/event-tile/EventTileView/E2eMessageSharedIcon/E2eMessageSharedIconView.tsx
function Qj({ vm: e, className: t }) {
	let { displayName: n, userId: r } = V(e), i = H("timeline|message_shared_by", {
		displayName: n,
		userId: r
	});
	return /* @__PURE__ */ (0, R.jsx)(Zj, {
		className: t,
		icon: Jj.Normal,
		title: i
	});
}
var $j = { content: "_content_ufv8a_8" }, eM = {
	container: "_container_1mzk4_8",
	title: "_title_1mzk4_34",
	subtitle: "_subtitle_1mzk4_35"
};
//#endregion
//#region src/room/timeline/event-tile/EventTileView/EventTileBubble/EventTileBubble.tsx
function tM({ icon: e, title: t, subtitle: n, className: r, children: i, ref: a }) {
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: (0, L.default)(eM.container, r),
		ref: a,
		children: [
			e,
			/* @__PURE__ */ (0, R.jsx)("div", {
				className: eM.title,
				children: t
			}),
			n && /* @__PURE__ */ (0, R.jsx)("div", {
				className: eM.subtitle,
				children: n
			}),
			i
		]
	});
}
//#endregion
//#region src/room/timeline/event-tile/EventTileView/EncryptionEventView/EncryptionEventView.tsx
var nM = /* @__PURE__ */ function(e) {
	return e.CHANGED = "CHANGED", e.DISABLE_ATTEMPT = "DISABLE_ATTEMPT", e.ENABLED = "ENABLED", e.ENABLED_DM = "ENABLED_DM", e.ENABLED_LOCAL = "ENABLED_LOCAL", e.UNSUPPORTED = "UNSUPPORTED", e;
}({});
function rM({ vm: e, ref: t, className: n }) {
	let { translate: r } = z(), { state: i, encryptedStateEvents: a, userName: o, timestamp: s } = V(e), c = /* @__PURE__ */ (0, R.jsx)(hC, { "data-state": "supported" }), l = r(a ? "common|state_encryption_enabled" : "common|encryption_enabled"), u = "";
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
		default: c = /* @__PURE__ */ (0, R.jsx)(VS, { "data-state": "unsupported" }), l = r("timeline|m.room.encryption|disabled"), u = r("timeline|m.room.encryption|unsupported");
	}
	return /* @__PURE__ */ (0, R.jsx)(tM, {
		icon: c,
		className: (0, L.default)(n, $j.content),
		title: l,
		subtitle: u,
		ref: t,
		children: s
	});
}
var iM = { eventPreview: "_eventPreview_w0s50_8" };
//#endregion
//#region src/room/timeline/event-tile/EventTileView/EventPreviewView/EventPreviewView.tsx
function aM({ vm: e, className: t, ...n }) {
	let { isVisible: r, previewContent: i, previewTooltip: a } = V(e);
	if (!r || !i) return /* @__PURE__ */ (0, R.jsx)(R.Fragment, {});
	let o = /* @__PURE__ */ (0, R.jsx)("span", {
		...n,
		className: (0, L.default)("mx_EventPreview", iM.eventPreview, t),
		children: i
	});
	return a ? /* @__PURE__ */ (0, R.jsx)(Ee, {
		description: a,
		children: o
	}) : o;
}
var q = {
	root: "_root_1eu7g_9",
	line: "_line_1eu7g_71",
	senderDetails: "_senderDetails_1eu7g_77",
	details: "_details_1eu7g_83",
	slotActionBar: "_slotActionBar_1eu7g_94",
	slotAvatar: "_slotAvatar_1eu7g_95",
	slotBody: "_slotBody_1eu7g_96",
	slotContextMenu: "_slotContextMenu_1eu7g_97",
	slotFooter: "_slotFooter_1eu7g_98",
	slotNotificationBadge: "_slotNotificationBadge_1eu7g_99",
	slotNotificationRoomLabel: "_slotNotificationRoomLabel_1eu7g_100",
	slotPadlock: "_slotPadlock_1eu7g_101",
	slotReceipt: "_slotReceipt_1eu7g_102",
	slotReplyChain: "_slotReplyChain_1eu7g_103",
	slotSender: "_slotSender_1eu7g_104",
	slotThreadInfo: "_slotThreadInfo_1eu7g_105",
	slotTimestamp: "_slotTimestamp_1eu7g_106",
	stateContinuation: "_stateContinuation_1eu7g_166",
	stateEditing: "_stateEditing_1eu7g_170",
	stateInfo: "_stateInfo_1eu7g_174",
	stateContextual: "_stateContextual_1eu7g_180",
	statePreviewClamped: "_statePreviewClamped_1eu7g_184",
	layoutGroup: "_layoutGroup_1eu7g_194",
	shapeCard: "_shapeCard_1eu7g_214",
	lineMedia: "_lineMedia_1eu7g_214",
	stateHasReply: "_stateHasReply_1eu7g_279",
	stateHighlighted: "_stateHighlighted_1eu7g_304",
	stateSelected: "_stateSelected_1eu7g_308",
	stateActionBarFocused: "_stateActionBarFocused_1eu7g_310",
	hasReceiptSlot: "_hasReceiptSlot_1eu7g_320",
	stateBubbleContainer: "_stateBubbleContainer_1eu7g_367",
	densityCompact: "_densityCompact_1eu7g_394",
	stateEmote: "_stateEmote_1eu7g_432",
	layoutIrc: "_layoutIrc_1eu7g_471",
	layoutBubble: "_layoutBubble_1eu7g_705",
	lineImage: "_lineImage_1eu7g_766",
	lineSticker: "_lineSticker_1eu7g_775",
	stateOwnEvent: "_stateOwnEvent_1eu7g_903",
	stateLastInSection: "_stateLastInSection_1eu7g_990",
	stateNoBubble: "_stateNoBubble_1eu7g_1009",
	lineEmote: "_lineEmote_1eu7g_1014",
	stateNoSender: "_stateNoSender_1eu7g_1031",
	stateLeftAlignedBubble: "_stateLeftAlignedBubble_1eu7g_1038",
	stateAlignedBetweenBubbles: "_stateAlignedBetweenBubbles_1eu7g_1077",
	shapeThread: "_shapeThread_1eu7g_1158",
	stateEncryptionFailure: "_stateEncryptionFailure_1eu7g_1165",
	shapeThreadsList: "_shapeThreadsList_1eu7g_1425",
	shapeNotification: "_shapeNotification_1eu7g_1426",
	shapeSearch: "_shapeSearch_1eu7g_1551",
	shapeFile: "_shapeFile_1eu7g_1744",
	senderDetailsLink: "_senderDetailsLink_1eu7g_1757"
};
//#endregion
//#region src/room/timeline/event-tile/EventTileView/EventTileView.tsx
function oM({ root: e, line: t, slots: n, classNames: r, refs: i, onMouseEnter: a, onMouseLeave: s, onFocus: c, onBlur: l, onClick: u, onContextMenu: d, onPermalinkClick: f, onPermalinkContextMenu: p }) {
	let m = e.as ?? "li", { layout: h, density: g } = kO(), _ = (e) => e != null && typeof e != "boolean", v = (e, t = n[e]) => {
		if (!_(t)) return null;
		if (e === "contextMenu") return /* @__PURE__ */ (0, R.jsx)(o.Fragment, { children: t }, e);
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
		return /* @__PURE__ */ (0, R.jsx)("div", {
			"data-testid": `event-tile-slot-${e}`,
			className: (0, L.default)(i, r?.[a]),
			children: t
		}, e);
	}, y = (...e) => e.map((e) => v(e)), b = _(n.receipt), x = (0, L.default)(q.line, r?.line, {
		[q.lineMedia]: t?.media,
		[q.lineSticker]: t?.sticker,
		[q.lineEmote]: t?.emote,
		[q.lineImage]: t?.image
	}), S = (t, n, o) => /* @__PURE__ */ (0, R.jsx)(m, {
		ref: i?.root,
		className: (0, L.default)(q.root, r?.root, {
			[q.stateOwnEvent]: e.state.isOwnEvent,
			[q.hasReceiptSlot]: b,
			[q.stateInfo]: e.state?.info,
			[q.stateBubbleContainer]: e.state?.bubbleContainer,
			[q.stateLeftAlignedBubble]: e.state?.leftAlignedBubble,
			[q.stateAlignedBetweenBubbles]: e.state?.alignedBetweenBubbles,
			[q.stateNoBubble]: e.state?.noBubble,
			[q.stateNoSender]: e.state?.noSender,
			[q.stateEncryptionFailure]: e.state?.encryptionFailure,
			[q.stateEmote]: e.state?.emote,
			[q.stateHasReply]: e.state?.hasReply,
			[q.stateHighlighted]: e.state?.highlighted,
			[q.stateSelected]: e.state?.selected,
			[q.stateEditing]: e.state?.editing,
			[q.stateContinuation]: e.state?.continuation,
			[q.stateLastInSection]: e.state?.lastInSection,
			[q.stateContextual]: e.state?.contextual,
			[q.stateActionBarFocused]: e.state?.actionBarFocused,
			[q.statePreviewClamped]: e.state?.previewClamped,
			[q.densityCompact]: g === "compact",
			[q.layoutGroup]: h === "group",
			[q.layoutBubble]: h === "bubble",
			[q.layoutIrc]: h === "irc",
			[q.shapeThread]: e.shape === "Thread",
			[q.shapeThreadsList]: e.shape === "ThreadsList",
			[q.shapeCard]: e.shape === "Card",
			[q.shapeSearch]: e.shape === "Search",
			[q.shapeFile]: e.shape === "File",
			[q.shapeNotification]: e.shape === "Notification"
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
			className: (0, L.default)(q.senderDetails, r?.senderDetails),
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
			className: (0, L.default)(q.details, r?.details),
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
			className: (0, L.default)(q.details, r?.details),
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
		className: (0, L.default)(q.senderDetailsLink, r?.senderDetailsLink),
		href: e.permalink ?? "#",
		onClick: f,
		children: /* @__PURE__ */ (0, R.jsx)("div", {
			className: (0, L.default)(q.senderDetails, r?.senderDetails),
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
var sM = {
	container: "_container_1opqj_8",
	title: "_title_1opqj_20",
	time: "_time_1opqj_25",
	icon: "_icon_1opqj_30"
};
//#endregion
//#region src/room/timeline/event-tile/call/tombstone/room/RoomTombstoneCallTileView.tsx
function cM({ vm: e, className: t }) {
	let { translate: n } = z(), { timestamp: r } = V(e), i = (0, L.default)(t, sM.container);
	return /* @__PURE__ */ (0, R.jsxs)(B, {
		className: i,
		align: "center",
		gap: "var(--cpd-space-2x)",
		children: [
			/* @__PURE__ */ (0, R.jsx)(pw, {
				className: sM.icon,
				width: 20,
				height: 20
			}),
			/* @__PURE__ */ (0, R.jsx)("div", {
				className: sM.title,
				children: n("timeline|call_tile|tombstone|room|title")
			}),
			/* @__PURE__ */ (0, R.jsx)("div", {
				className: sM.time,
				children: r
			})
		]
	});
}
//#endregion
//#region src/room/timeline/event-tile/call/common.ts
var lM = /* @__PURE__ */ function(e) {
	return e.Voice = "voice", e.Video = "video", e;
}({}), uM = /* @__PURE__ */ function(e) {
	return e.Incoming = "Incoming", e.Outgoing = "Outgoing", e;
}({});
//#endregion
//#region src/room/timeline/event-tile/call/tombstone/dm/DmTombstoneCallTileView.tsx
function dM(e, t) {
	let n = t ? pw : hw, r = t ? Cw : Tw;
	switch (e) {
		case lM.Video: return /* @__PURE__ */ (0, R.jsx)(n, {
			className: sM.icon,
			width: 20,
			height: 20
		});
		case lM.Voice: return /* @__PURE__ */ (0, R.jsx)(r, {
			className: sM.icon,
			width: 20,
			height: 20
		});
	}
}
function fM({ vm: e, className: t }) {
	let n = V(e), { type: r, timestamp: i, isCallDeclined: a } = n, o = (0, L.default)(t, sM.container);
	return /* @__PURE__ */ (0, R.jsxs)(B, {
		className: o,
		align: "center",
		gap: "var(--cpd-space-2x)",
		children: [
			dM(r, a),
			/* @__PURE__ */ (0, R.jsx)("div", {
				className: sM.title,
				children: a ? /* @__PURE__ */ (0, R.jsx)(mM, { snapshot: n }) : /* @__PURE__ */ (0, R.jsx)(pM, { snapshot: n })
			}),
			/* @__PURE__ */ (0, R.jsx)("div", {
				className: sM.time,
				children: i
			})
		]
	});
}
function pM(e) {
	let { type: t } = e.snapshot, { translate: n } = z();
	return t === lM.Voice ? n("timeline|call_tile|voice_call_title") : n("timeline|call_tile|video_call_title");
}
function mM(e) {
	let { callDirection: t } = e.snapshot, { translate: n } = z();
	return t === uM.Incoming ? n("timeline|call_tile|declined|call_declined_by_us") : n("timeline|call_tile|declined|call_declined");
}
var hM = { container: "_container_122d2_8" };
//#endregion
//#region src/room/timeline/event-tile/call/ongoing/components/TileContainer/TileContainer.tsx
function gM({ children: e }) {
	return /* @__PURE__ */ (0, R.jsx)(B, {
		direction: "row",
		align: "center",
		className: hM.container,
		children: e
	});
}
var _M = {
	container: "_container_ghpy6_8",
	icon: "_icon_ghpy6_15"
}, vM = ({ callType: e, classNames: t, height: n, width: r, ...i }) => {
	switch (e) {
		case lM.Video: return /* @__PURE__ */ (0, R.jsx)(hw, {
			className: t,
			width: r,
			height: n,
			...i
		});
		case lM.Voice: return /* @__PURE__ */ (0, R.jsx)(Tw, {
			className: t,
			width: r,
			height: n,
			...i
		});
	}
};
//#endregion
//#region src/room/timeline/event-tile/call/ongoing/components/CallIcon/CallIcon.tsx
function yM(e) {
	return /* @__PURE__ */ (0, R.jsx)(B, {
		align: "center",
		justify: "center",
		className: _M.container,
		children: /* @__PURE__ */ (0, R.jsx)(vM, {
			classNames: _M.icon,
			callType: e.callType,
			height: 20,
			width: 20
		})
	});
}
var bM = {
	title: "_title_11tya_8",
	content: "_content_11tya_19",
	avatar: "_avatar_11tya_26",
	facepile: "_facepile_11tya_30"
}, xM = {
	subContainer: "_subContainer_lhkzi_8",
	startedTextContainer: "_startedTextContainer_lhkzi_16"
};
//#endregion
//#region src/room/timeline/event-tile/call/ongoing/components/JoinButton/JoinButton.tsx
function SM(e) {
	return function(t) {
		return /* @__PURE__ */ (0, R.jsx)(vM, {
			callType: e,
			...t,
			height: 20,
			width: 20
		});
	};
}
function CM({ join: e, callType: t, ...n }) {
	let { translate: r } = z();
	return /* @__PURE__ */ (0, R.jsx)(O, {
		onClick: e,
		Icon: SM(t),
		size: "md",
		...n,
		children: r("timeline|call_tile|ongoing|common|join_button")
	});
}
var wM = { container: "_container_q8hft_8" };
//#endregion
//#region src/room/timeline/event-tile/call/ongoing/components/Duration/DurationView.tsx
function TM(e) {
	let { duration: t } = V(e.vm), n = (0, L.default)(wM.container, e.classNames);
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: n,
		children: [
			"(",
			/* @__PURE__ */ (0, R.jsx)($d, {
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
function EM(e) {
	let t = V(e.vm), { isJoinable: n, isJoined: r, isCallIgnored: i, callHasOtherParticipants: a, durationViewModel: o } = t, { translate: s } = z();
	return /* @__PURE__ */ (0, R.jsx)(gM, { children: /* @__PURE__ */ (0, R.jsxs)(B, {
		align: "center",
		gap: "var(--cpd-space-3x)",
		className: bM.content,
		children: [
			/* @__PURE__ */ (0, R.jsx)(yM, { callType: lM.Video }),
			/* @__PURE__ */ (0, R.jsxs)(B, {
				direction: "column",
				className: bM.content,
				children: [/* @__PURE__ */ (0, R.jsx)("div", {
					className: bM.title,
					children: s("timeline|call_tile|ongoing|room|title")
				}), a || i ? /* @__PURE__ */ (0, R.jsx)(DM, { snapshot: t }) : /* @__PURE__ */ (0, R.jsx)(OM, { snapshot: t })]
			}),
			/* @__PURE__ */ (0, R.jsxs)(B, {
				align: "center",
				gap: "var(--cpd-space-3x)",
				wrap: "wrap-reverse",
				children: [o && /* @__PURE__ */ (0, R.jsx)(TM, {
					classNames: "duration",
					vm: o
				}), !r && /* @__PURE__ */ (0, R.jsx)(CM, {
					callType: lM.Video,
					disabled: !n,
					join: (t) => {
						e.vm.join(t);
					}
				})]
			})
		]
	}) });
}
function DM({ snapshot: e }) {
	let { facePileViewModel: t, totalParticipants: n } = e, { translate: r } = z();
	return /* @__PURE__ */ (0, R.jsxs)(B, {
		className: xM.subContainer,
		gap: "6px",
		align: "center",
		children: [/* @__PURE__ */ (0, R.jsx)(Vw, {
			classNames: bM.facepile,
			vm: t
		}), r("timeline|call_tile|ongoing|room|join_count", { count: n })]
	});
}
function OM({ snapshot: e }) {
	let { memberAvatarViewModel: t, startedByDisplayName: n } = e, { translate: r } = z();
	return /* @__PURE__ */ (0, R.jsxs)(B, {
		className: xM.subContainer,
		gap: "6px",
		align: "center",
		children: [/* @__PURE__ */ (0, R.jsx)(Ny, {
			classNames: bM.avatar,
			vm: t
		}), /* @__PURE__ */ (0, R.jsx)("div", {
			className: xM.startedTextContainer,
			children: r("timeline|call_tile|ongoing|common|call_started_by", { startedByDisplayName: n })
		})]
	});
}
//#endregion
//#region src/room/timeline/event-tile/call/ongoing/dm/DmOngoingCallTileView.tsx
function kM(e) {
	let t = V(e.vm), { callType: n, callDirection: r, isJoinable: i, isJoined: a, durationViewModel: o } = t, s;
	return s = t.callHasOtherParticipants ? /* @__PURE__ */ (0, R.jsx)(MM, { snapshot: t }) : r === uM.Incoming ? /* @__PURE__ */ (0, R.jsx)(AM, { snapshot: t }) : /* @__PURE__ */ (0, R.jsx)(jM, { snapshot: t }), /* @__PURE__ */ (0, R.jsx)(gM, { children: /* @__PURE__ */ (0, R.jsxs)(B, {
		align: "center",
		gap: "var(--cpd-space-3x)",
		className: bM.content,
		children: [
			/* @__PURE__ */ (0, R.jsx)(yM, { callType: n }),
			/* @__PURE__ */ (0, R.jsx)(B, {
				gap: "6px",
				align: "center",
				className: bM.content,
				children: s
			}),
			/* @__PURE__ */ (0, R.jsxs)(B, {
				align: "center",
				gap: "var(--cpd-space-3x)",
				wrap: "wrap-reverse",
				children: [o && /* @__PURE__ */ (0, R.jsx)(TM, {
					classNames: "duration",
					vm: o
				}), !a && /* @__PURE__ */ (0, R.jsx)(CM, {
					disabled: !i,
					callType: n,
					join: (t) => e.vm.join(t)
				})]
			})
		]
	}) });
}
function AM({ snapshot: e }) {
	let { translate: t } = z();
	return /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsx)(Ny, {
		classNames: bM.avatar,
		vm: e.memberAvatarViewModel
	}), /* @__PURE__ */ (0, R.jsx)("div", {
		className: bM.title,
		children: t("timeline|call_tile|ongoing|common|call_started_by", { startedByDisplayName: e.startedByDisplayName })
	})] });
}
function jM({ snapshot: e }) {
	let { translate: t } = z();
	return /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsx)(Ny, {
		classNames: bM.avatar,
		vm: e.memberAvatarViewModel
	}), /* @__PURE__ */ (0, R.jsx)("div", {
		className: bM.title,
		children: t("timeline|call_tile|ongoing|dm|call_started")
	})] });
}
function MM({ snapshot: e }) {
	let { translate: t } = z();
	return /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsx)(Vw, {
		classNames: bM.facepile,
		vm: e.facePileViewModel
	}), /* @__PURE__ */ (0, R.jsx)("div", {
		className: bM.title,
		children: t("timeline|call_tile|ongoing|dm|title")
	})] });
}
//#endregion
//#region src/room/timeline/event-tile/call/RootCallTileView.tsx
function NM({ vm: e }) {
	let { tileType: t, tileViewModel: n } = V(e);
	switch (t) {
		case "ongoing-call-room": return /* @__PURE__ */ (0, R.jsx)(EM, { vm: n });
		case "ongoing-call-dm": return /* @__PURE__ */ (0, R.jsx)(kM, { vm: n });
		case "tombstone-call-room": return /* @__PURE__ */ (0, R.jsx)(cM, { vm: n });
		case "tombstone-call-dm": return /* @__PURE__ */ (0, R.jsx)(fM, { vm: n });
	}
}
//#endregion
//#region src/room/timeline/event-tile/EventTileView/MJitsiWidgetEventView/MJitsiWidgetEventView.tsx
function PM({ vm: e, className: t, ref: n }) {
	let { isVisible: r, title: i, subtitle: a, timestamp: o } = V(e);
	return r ? /* @__PURE__ */ (0, R.jsx)(tM, {
		icon: /* @__PURE__ */ (0, R.jsx)(hw, { color: "var(--cpd-color-icon-primary)" }),
		className: t,
		title: i,
		subtitle: a || void 0,
		ref: n,
		children: o
	}) : null;
}
var FM = { content: "_content_1o649_8" };
//#endregion
//#region src/room/timeline/event-tile/EventTileView/MKeyVerificationRequestView/MKeyVerificationRequestView.tsx
function IM({ vm: e, className: t, ref: n }) {
	let { title: r, subtitle: i, timestamp: a } = V(e);
	return /* @__PURE__ */ (0, R.jsx)(tM, {
		icon: /* @__PURE__ */ (0, R.jsx)(hC, {}),
		className: (0, L.default)(FM.content, t),
		title: r,
		subtitle: i,
		ref: n,
		children: a
	});
}
var LM = { pinnedMessageBadge: "_pinnedMessageBadge_10mi2_8" };
//#endregion
//#region src/room/timeline/event-tile/EventTileView/PinnedMessageBadge/PinnedMessageBadge.tsx
function RM({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		...n,
		className: (0, L.default)(LM.pinnedMessageBadge, e),
		children: [/* @__PURE__ */ (0, R.jsx)(NC, {
			width: "16px",
			height: "16px"
		}), t ?? H("room|pinned_message_badge")]
	});
}
var zM = {
	textualEvent: "_textualEvent_1iwcb_8",
	avatarButton: "_avatarButton_1iwcb_21"
};
//#endregion
//#region src/room/timeline/event-tile/EventTileView/RoomAvatarEventView/RoomAvatarEventView.tsx
function BM({ vm: e, renderAvatar: t, className: n, ref: r }) {
	let i = V(e), a = z().translate, o = AO(), s = (0, L.default)(zM.textualEvent, n);
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
			className: zM.avatarButton,
			onClick: e.onAvatarClick,
			"aria-label": i.lightboxLabel,
			children: t(i)
		}) })
	});
}
var VM = { textualEvent: "_textualEvent_1rbqb_8" };
//#endregion
//#region src/room/timeline/event-tile/EventTileView/TextualEventView/TextualEventView.tsx
function HM({ vm: e, className: t }) {
	let n = AO(), r = V(e);
	return /* @__PURE__ */ (0, R.jsx)("div", {
		className: (0, L.default)(VM.textualEvent, t),
		...n,
		children: r.content
	});
}
var UM = {
	audioPlayer: "_audioPlayer_etpvh_8",
	mediaInfo: "_mediaInfo_etpvh_12",
	mediaName: "_mediaName_etpvh_17",
	byline: "_byline_etpvh_26",
	clock: "_clock_etpvh_30",
	error: "_error_etpvh_34"
};
//#endregion
//#region src/core/utils/FormattingUtils.ts
function WM(e, t = 2) {
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
function GM({ vm: e }) {
	let { translate: t } = z(), { playbackState: n, mediaName: r = t("timeline|m.audio|unnamed_audio"), sizeBytes: i, durationSeconds: a, playedSeconds: o, percentComplete: s, error: c } = V(e), l = i ? `(${WM(i)})` : null, u = n === "decoding";
	return /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsxs)(Ok, {
		className: UM.audioPlayer,
		tabIndex: 0,
		onKeyDown: e.onKeyDown,
		"aria-label": t("timeline|m.audio|audio_player"),
		role: "region",
		children: [/* @__PURE__ */ (0, R.jsxs)(B, {
			gap: "var(--cpd-space-2x)",
			align: "center",
			children: [/* @__PURE__ */ (0, R.jsx)(cf, {
				tabIndex: -1,
				disabled: u,
				playing: n === "playing",
				togglePlay: e.togglePlay
			}), /* @__PURE__ */ (0, R.jsxs)(B, {
				direction: "column",
				className: UM.mediaInfo,
				children: [/* @__PURE__ */ (0, R.jsx)("span", {
					className: UM.mediaName,
					"data-testid": "audio-player-name",
					children: r
				}), /* @__PURE__ */ (0, R.jsxs)(B, {
					className: UM.byline,
					gap: "var(--cpd-space-1-5x)",
					children: [/* @__PURE__ */ (0, R.jsx)($d, { seconds: a }), l]
				})]
			})]
		}), /* @__PURE__ */ (0, R.jsxs)(B, {
			align: "center",
			gap: "var(--cpd-space-1x)",
			"data-testid": "audio-player-seek",
			children: [/* @__PURE__ */ (0, R.jsx)(Sy, {
				tabIndex: -1,
				disabled: u,
				value: s,
				onChange: e.onSeekbarChange
			}), /* @__PURE__ */ (0, R.jsx)($d, {
				className: UM.clock,
				seconds: o,
				role: "timer"
			})]
		})]
	}), c && /* @__PURE__ */ (0, R.jsx)("span", {
		className: UM.error,
		children: t("timeline|m.audio|error_downloading_audio")
	})] });
}
var KM = {
	content: "_content_1uqu1_8",
	error: "_error_1uqu1_14",
	icon: "_icon_1uqu1_23"
}, qM = /* @__PURE__ */ function(e) {
	return e.MEGOLM_KEY_WITHHELD_FOR_UNVERIFIED_DEVICE = "MEGOLM_KEY_WITHHELD_FOR_UNVERIFIED_DEVICE", e.HISTORICAL_MESSAGE_NO_KEY_BACKUP = "HISTORICAL_MESSAGE_NO_KEY_BACKUP", e.HISTORICAL_MESSAGE_BACKUP_UNCONFIGURED = "HISTORICAL_MESSAGE_BACKUP_UNCONFIGURED", e.HISTORICAL_MESSAGE_USER_NOT_JOINED = "HISTORICAL_MESSAGE_USER_NOT_JOINED", e.SENDER_IDENTITY_PREVIOUSLY_VERIFIED = "SENDER_IDENTITY_PREVIOUSLY_VERIFIED", e.UNSIGNED_SENDER_DEVICE = "UNSIGNED_SENDER_DEVICE", e.UNABLE_TO_DECRYPT = "UNABLE_TO_DECRYPT", e;
}({});
function JM(e, t, n) {
	let r = e.translate;
	switch (t) {
		case "MEGOLM_KEY_WITHHELD_FOR_UNVERIFIED_DEVICE": return r("timeline|decryption_failure|blocked");
		case "HISTORICAL_MESSAGE_NO_KEY_BACKUP": return r("timeline|decryption_failure|historical_event_no_key_backup");
		case "HISTORICAL_MESSAGE_BACKUP_UNCONFIGURED":
			if (n === !1) return r("timeline|decryption_failure|historical_event_unverified_device");
			break;
		case "HISTORICAL_MESSAGE_USER_NOT_JOINED": return r("timeline|decryption_failure|historical_event_user_not_joined");
		case "SENDER_IDENTITY_PREVIOUSLY_VERIFIED": return /* @__PURE__ */ (0, R.jsxs)("span", { children: [/* @__PURE__ */ (0, R.jsx)(rS, {
			className: KM.icon,
			width: "16px",
			height: "16px"
		}), r("timeline|decryption_failure|sender_identity_previously_verified")] });
		case "UNSIGNED_SENDER_DEVICE": return /* @__PURE__ */ (0, R.jsxs)("span", { children: [/* @__PURE__ */ (0, R.jsx)(rS, {
			className: KM.icon,
			width: "16px",
			height: "16px"
		}), r("timeline|decryption_failure|sender_unsigned_device")] });
	}
	return r("timeline|decryption_failure|unable_to_decrypt");
}
function YM(e) {
	switch (e) {
		case "SENDER_IDENTITY_PREVIOUSLY_VERIFIED":
		case "UNSIGNED_SENDER_DEVICE": return KM.error;
	}
	return null;
}
function XM({ vm: e, ref: t, className: n }) {
	let r = z(), { decryptionFailureReason: i, isLocalDeviceVerified: a } = V(e), o = (0, L.default)(KM.content, YM(i), n);
	return /* @__PURE__ */ (0, R.jsx)("div", {
		className: o,
		ref: t,
		children: JM(r, i, a)
	});
}
var ZM = {
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
function QM({ vm: e }) {
	let { isVisible: t, avatar: n, showDisplayName: r, senderName: i, previewContent: a, previewTooltip: o } = V(e);
	if (!t || !a) return /* @__PURE__ */ (0, R.jsx)(R.Fragment, {});
	let s = /* @__PURE__ */ (0, R.jsx)("span", {
		className: ZM.content,
		children: a
	}), c = n?.className ? `${ZM.avatar} ${n.className}` : ZM.avatar;
	return /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [
		n && /* @__PURE__ */ (0, R.jsx)(E, {
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
			className: ZM.sender,
			children: i
		}),
		o ? /* @__PURE__ */ (0, R.jsx)(Ee, {
			description: o,
			children: s
		}) : s
	] });
}
function $M({ vm: e, className: t, type: n = "button", ...r }) {
	let { isVisible: i, replyCountLabel: a, openThreadLabel: o, notificationIndicator: s, narrow: c, previewVm: l } = V(e);
	if (!i) return /* @__PURE__ */ (0, R.jsx)(R.Fragment, {});
	let u = [
		ZM.threadSummary,
		t,
		c ? ZM.narrow : void 0
	].filter(Boolean).join(" ");
	return /* @__PURE__ */ (0, R.jsxs)("button", {
		...r,
		type: n,
		className: u,
		onClick: e.onClick,
		"aria-label": o,
		children: [
			/* @__PURE__ */ (0, R.jsx)(de, {
				size: "24px",
				indicator: s,
				className: ZM.threadIcon,
				children: /* @__PURE__ */ (0, R.jsx)(rw, {})
			}),
			/* @__PURE__ */ (0, R.jsx)("span", {
				className: ZM.repliesAmount,
				children: a
			}),
			/* @__PURE__ */ (0, R.jsx)(QM, { vm: l }),
			/* @__PURE__ */ (0, R.jsx)("div", {
				className: ZM.chevron,
				children: /* @__PURE__ */ (0, R.jsx)(_S, {})
			})
		]
	});
}
var eN = {
	reactionsRow: "_reactionsRow_1lcz2_8",
	showAllButton: "_showAllButton_1lcz2_16",
	addReactionButton: "_addReactionButton_1lcz2_29",
	addReactionButtonVisible: "_addReactionButtonVisible_1lcz2_48",
	addReactionButtonActive: "_addReactionButtonActive_1lcz2_52",
	addReactionButtonDisabled: "_addReactionButtonDisabled_1lcz2_56"
};
//#endregion
//#region src/room/timeline/event-tile/reactions/ReactionsRow/ReactionsRowView.tsx
function tN({ vm: e, className: t, children: n }) {
	let { ariaLabel: r, isVisible: i, showAllButtonVisible: a, showAllButtonLabel: o, showAddReactionButton: s, addReactionButtonLabel: c, addReactionButtonVisible: l, addReactionButtonActive: u, addReactionButtonDisabled: d } = V(e);
	if (!i) return /* @__PURE__ */ (0, R.jsx)(R.Fragment, {});
	let f = (0, L.default)(eN.addReactionButton, {
		[eN.addReactionButtonVisible]: l,
		[eN.addReactionButtonActive]: u,
		[eN.addReactionButtonDisabled]: d
	}), p = e.onAddReactionContextMenu ? (t) => {
		t.preventDefault(), e.onAddReactionContextMenu?.(t);
	} : void 0, m = /* @__PURE__ */ (0, R.jsx)("button", {
		type: "button",
		className: f,
		"aria-label": c,
		disabled: d,
		onClick: e.onAddReactionClick,
		onContextMenu: p,
		children: /* @__PURE__ */ (0, R.jsx)(VC, {})
	});
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: (0, L.default)(t, eN.reactionsRow),
		role: "toolbar",
		"aria-label": r,
		children: [
			n,
			a && /* @__PURE__ */ (0, R.jsx)("button", {
				type: "button",
				className: eN.showAllButton,
				onClick: e.onShowAllClick,
				children: o
			}),
			s && /* @__PURE__ */ (0, R.jsx)(Ee, {
				description: c,
				placement: "right",
				children: m
			})
		]
	});
}
//#endregion
//#region src/room/timeline/event-tile/reactions/ReactionsRowButtonTooltip/ReactionsRowButtonTooltipView.tsx
function nN({ vm: e, children: t }) {
	let { formattedSenders: n, caption: r, tooltipOpen: i } = V(e);
	return n ? /* @__PURE__ */ (0, R.jsx)(Ee, {
		description: n,
		caption: r,
		placement: "right",
		open: i,
		children: t
	}) : /* @__PURE__ */ (0, R.jsx)(R.Fragment, { children: t });
}
var rN = {
	reactionsRowButton: "_reactionsRowButton_5v4c1_8",
	reactionsRowButtonSelected: "_reactionsRowButtonSelected_5v4c1_21",
	reactionsRowButtonDisabled: "_reactionsRowButtonDisabled_5v4c1_26",
	reactionsRowButtonContent: "_reactionsRowButtonContent_5v4c1_30",
	reactionsRowButtonCount: "_reactionsRowButtonCount_5v4c1_38"
};
//#endregion
//#region src/room/timeline/event-tile/reactions/ReactionsRowButton/ReactionsRowButtonView.tsx
function iN({ vm: e }) {
	let t = V(e), { content: n, count: r, className: i, isSelected: a, isDisabled: o, imageSrc: s, imageAlt: c, tooltipVm: l } = t, u = t["aria-label"] ?? t.ariaLabel, d = o ? !0 : void 0, f = (0, L.default)(i, rN.reactionsRowButton, {
		[rN.reactionsRowButtonSelected]: a,
		[rN.reactionsRowButtonDisabled]: o
	}), p = s ? /* @__PURE__ */ (0, R.jsx)("img", {
		className: rN.reactionsRowButtonContent,
		alt: c ?? "",
		src: s,
		width: "16",
		height: "16"
	}) : /* @__PURE__ */ (0, R.jsx)("span", {
		className: rN.reactionsRowButtonContent,
		"aria-hidden": "true",
		children: n ?? ""
	});
	return /* @__PURE__ */ (0, R.jsx)(nN, {
		vm: l,
		children: /* @__PURE__ */ (0, R.jsxs)("button", {
			type: "button",
			className: f,
			tabIndex: 0,
			"aria-label": u,
			"aria-disabled": d,
			onClick: o ? void 0 : e.onClick,
			children: [p, /* @__PURE__ */ (0, R.jsx)("span", {
				className: rN.reactionsRowButtonCount,
				"aria-hidden": "true",
				children: r
			})]
		})
	});
}
var aN = { content: "_content_1jaux_8" };
//#endregion
//#region src/room/timeline/event-tile/timestamp/MessageTimestampView/MessageTimestampView.tsx
function oN({ vm: e, className: t }) {
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
		className: (0, L.default)(t, aN.content),
		"aria-live": "off",
		children: r
	}) : /* @__PURE__ */ (0, R.jsx)("span", {
		onClick: e.onClick,
		onKeyDown: c,
		onContextMenu: e.onContextMenu,
		className: (0, L.default)(t, aN.content),
		role: e.onClick ? "link" : void 0,
		"aria-live": "off",
		tabIndex: e.onClick || !o ? 0 : void 0,
		children: r
	}), o ? d : /* @__PURE__ */ (0, R.jsx)(Ee, {
		description: l,
		caption: u,
		children: d
	});
}
var sN = {
	hideButton: "_hideButton_14osa_8",
	wrapper: "_wrapper_14osa_15",
	previewGroup: "_previewGroup_14osa_21",
	toggleButton: "_toggleButton_14osa_27"
};
//#endregion
//#region src/room/timeline/event-tile/UrlPreviewGroupView/UrlPreviewGroupView.tsx
function cN({ onHideClick: e }) {
	let { translate: t } = z();
	return /* @__PURE__ */ (0, R.jsx)("div", {
		className: sN.hideButton,
		children: /* @__PURE__ */ (0, R.jsx)(j, {
			kind: "secondary",
			size: "28px",
			onClick: e,
			"aria-label": t("timeline|url_preview|close"),
			children: /* @__PURE__ */ (0, R.jsx)(xS, {})
		})
	});
}
function lN({ vm: e, className: t }) {
	let { translate: n } = z(), r = AO(), { previews: i, totalPreviewCount: a, previewsLimited: o, overPreviewLimit: s } = V(e);
	if (i.length === 0) return null;
	let c;
	return s && (c = /* @__PURE__ */ (0, R.jsx)(O, {
		className: sN.toggleButton,
		kind: "tertiary",
		size: "md",
		onClick: e.onTogglePreviewLimit,
		children: o ? n("timeline|url_preview|show_n_more", { count: a - i.length }) : n("action|collapse")
	})), /* @__PURE__ */ (0, R.jsxs)("div", {
		className: (0, L.default)(t, sN.wrapper),
		...r,
		children: [/* @__PURE__ */ (0, R.jsx)(cN, { onHideClick: e.onHideClick }), /* @__PURE__ */ (0, R.jsxs)("div", {
			className: sN.previewGroup,
			children: [i.map((t, n) => /* @__PURE__ */ (0, R.jsx)(QD, {
				onImageClick: () => e.onImageClick(t),
				...t,
				image: t.image,
				collapsed: n !== 0
			}, t.link)), c]
		})]
	});
}
var uN = {
	richItem: "_richItem_1c0uo_8",
	avatar: "_avatar_1c0uo_36",
	title: "_title_1c0uo_41",
	description: "_description_1c0uo_47",
	timestamp: "_timestamp_1c0uo_51",
	checkmark: "_checkmark_1c0uo_69"
}, dN = p(function({ avatar: e, title: t, description: n, timestamp: r, selected: i, ...a }) {
	let o = z();
	return /* @__PURE__ */ (0, R.jsxs)("li", {
		className: uN.richItem,
		role: "option",
		tabIndex: -1,
		"aria-selected": i,
		"aria-label": t,
		...a,
		children: [
			i ? /* @__PURE__ */ (0, R.jsx)(fN, {}) : /* @__PURE__ */ (0, R.jsx)(B, {
				className: uN.avatar,
				children: e
			}),
			/* @__PURE__ */ (0, R.jsx)("span", {
				className: uN.title,
				children: t
			}),
			/* @__PURE__ */ (0, R.jsx)("span", {
				className: uN.description,
				children: n
			}),
			r && /* @__PURE__ */ (0, R.jsx)("span", {
				role: "timer",
				className: uN.timestamp,
				children: o.humanizeTime(r)
			})
		]
	});
});
function fN() {
	return /* @__PURE__ */ (0, R.jsx)(B, {
		align: "center",
		justify: "center",
		"aria-hidden": "true",
		className: uN.checkmark,
		children: /* @__PURE__ */ (0, R.jsx)(dS, {
			width: "24px",
			height: "24px",
			color: "var(--cpd-color-icon-on-solid-primary)"
		})
	});
}
var pN = {
	richList: "_richList_1h3wz_8",
	title: "_title_1h3wz_12",
	content: "_content_1h3wz_18",
	empty: "_empty_1h3wz_26"
};
//#endregion
//#region src/core/hooks/useListKeyboardNavigation.ts
function mN() {
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
function hN({ children: e, title: t, className: n, titleAttributes: r, isEmpty: i = !1, ...a }) {
	let o = v(), { listRef: s, onKeyDown: c, onFocus: l } = mN();
	return /* @__PURE__ */ (0, R.jsxs)(B, {
		className: (0, L.default)(pN.richList, n),
		direction: "column",
		...a,
		children: [/* @__PURE__ */ (0, R.jsx)("span", {
			id: o,
			className: pN.title,
			...r,
			children: t
		}), i ? /* @__PURE__ */ (0, R.jsx)("span", {
			className: pN.empty,
			children: e
		}) : /* @__PURE__ */ (0, R.jsx)("ul", {
			ref: s,
			role: "listbox",
			className: pN.content,
			"aria-labelledby": o,
			tabIndex: 0,
			onKeyDown: c,
			onFocus: l,
			children: e
		})]
	});
}
var gN = { title: "_title_s91uo_8" };
//#endregion
//#region src/room-list/RoomListHeaderView/menu/OptionMenuView.tsx
function _N({ vm: e }) {
	let { translate: t } = z(), [n, r] = T(!1), { activeSortOption: i, isMessagePreviewEnabled: a } = V(e);
	return /* @__PURE__ */ (0, R.jsxs)(he, {
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
			children: /* @__PURE__ */ (0, R.jsx)(jC, {})
		}),
		children: [
			/* @__PURE__ */ (0, R.jsx)(ge, {
				title: t("room_list|sort"),
				className: gN.title
			}),
			/* @__PURE__ */ (0, R.jsx)(_e, {
				label: t("room_list|sort_type|activity"),
				checked: i === "recent",
				onSelect: () => e.sort("recent")
			}),
			/* @__PURE__ */ (0, R.jsx)(_e, {
				label: t("room_list|sort_type|unread_first"),
				checked: i === "unread-first",
				onSelect: () => e.sort("unread-first")
			}),
			/* @__PURE__ */ (0, R.jsx)(_e, {
				label: t("room_list|sort_type|atoz"),
				checked: i === "alphabetical",
				onSelect: () => e.sort("alphabetical")
			}),
			/* @__PURE__ */ (0, R.jsx)(ge, { title: t("room_list|appearance") }),
			/* @__PURE__ */ (0, R.jsx)(re, {
				label: t("room_list|show_message_previews"),
				onSelect: e.toggleMessagePreview,
				checked: a
			})
		]
	});
}
var vN = { button: "_button_1veqf_8" };
//#endregion
//#region src/room-list/RoomListHeaderView/menu/SpaceMenuView.tsx
function yN({ vm: e }) {
	let { translate: t } = z(), { canInviteInSpace: n, canAccessSpaceSettings: r, title: i } = V(e), [a, o] = T(!1);
	return /* @__PURE__ */ (0, R.jsxs)(he, {
		open: a,
		onOpenChange: o,
		title: i,
		align: "start",
		trigger: /* @__PURE__ */ (0, R.jsx)(j, {
			className: vN.button,
			"aria-label": t("room_list|open_space_menu"),
			size: "24px",
			style: { padding: "2px" },
			children: /* @__PURE__ */ (0, R.jsx)(pS, {})
		}),
		children: [
			/* @__PURE__ */ (0, R.jsx)(M, {
				Icon: rC,
				label: t("room_list|space_menu|home"),
				onSelect: e.openSpaceHome,
				hideChevron: !0
			}),
			n && /* @__PURE__ */ (0, R.jsx)(M, {
				Icon: lw,
				label: t("action|invite"),
				onSelect: e.inviteInSpace,
				hideChevron: !0
			}),
			/* @__PURE__ */ (0, R.jsx)(M, {
				Icon: zC,
				label: t("common|preferences"),
				onSelect: e.openSpacePreferences,
				hideChevron: !0
			}),
			r && /* @__PURE__ */ (0, R.jsx)(M, {
				Icon: tw,
				label: t("room_list|space_menu|space_settings"),
				onSelect: e.openSpaceSettings,
				hideChevron: !0
			})
		]
	});
}
//#endregion
//#region src/room-list/RoomListHeaderView/menu/ComposeMenuView.tsx
function bN({ vm: e }) {
	let { translate: t } = z(), [n, r] = T(!1), { canCreateRoom: i, canCreateVideoRoom: a, displaySectionReleaseAnnouncement: o, areSectionsEnabled: s } = V(e), c = /* @__PURE__ */ (0, R.jsx)(j, {
		size: "28px",
		style: { padding: "4px" },
		tooltip: t("action|new_conversation"),
		children: /* @__PURE__ */ (0, R.jsx)(LC, {
			color: "var(--cpd-color-icon-secondary)",
			"aria-hidden": !0
		})
	});
	return o ? /* @__PURE__ */ (0, R.jsx)(ve, {
		open: o,
		onClick: e.closeSectionReleaseAnnouncement,
		header: t("release_announcement|room_list_section_title"),
		description: t("release_announcement|room_list_section_description"),
		closeLabel: t("release_announcement|room_list_section_close"),
		children: c
	}) : /* @__PURE__ */ (0, R.jsxs)(he, {
		open: n,
		onOpenChange: r,
		showTitle: !1,
		title: t("action|open_menu"),
		align: "start",
		trigger: c,
		children: [
			/* @__PURE__ */ (0, R.jsx)(M, {
				Icon: sS,
				label: t("action|start_chat"),
				onSelect: e.createChatRoom,
				hideChevron: !0
			}),
			i && /* @__PURE__ */ (0, R.jsx)(M, {
				Icon: YC,
				label: t("action|new_room"),
				onSelect: e.createRoom,
				hideChevron: !0
			}),
			a && /* @__PURE__ */ (0, R.jsx)(M, {
				Icon: _w,
				label: t("action|new_video_room"),
				onSelect: e.createVideoRoom,
				hideChevron: !0
			}),
			s && /* @__PURE__ */ (0, R.jsx)(M, {
				Icon: $C,
				label: t("action|new_section"),
				onSelect: e.createSection,
				hideChevron: !0
			})
		]
	});
}
var xN = {
	header: "_header_1b9rm_8",
	container: "_container_1b9rm_13",
	title: "_title_1b9rm_19"
};
//#endregion
//#region src/room-list/RoomListHeaderView/RoomListHeaderView.tsx
function SN({ vm: e }) {
	let { translate: t } = z(), { title: n, displaySpaceMenu: r, collapseSections: i, areSectionsEnabled: a, canCreateRoom: o, canCreateVideoRoom: s } = V(e), c = !a && !o && !s;
	return /* @__PURE__ */ (0, R.jsx)(B, {
		as: "header",
		className: xN.header,
		"aria-label": t("room|context_menu|title"),
		align: "end",
		"data-testid": "room-list-header",
		children: /* @__PURE__ */ (0, R.jsxs)(B, {
			className: xN.container,
			justify: "space-between",
			align: "center",
			gap: "var(--cpd-space-3x)",
			children: [/* @__PURE__ */ (0, R.jsxs)(B, {
				className: xN.title,
				align: "center",
				gap: "var(--cpd-space-1x)",
				children: [/* @__PURE__ */ (0, R.jsx)(ce, {
					size: "sm",
					title: n,
					children: n
				}), r && /* @__PURE__ */ (0, R.jsx)(yN, { vm: e })]
			}), /* @__PURE__ */ (0, R.jsxs)(B, {
				align: "center",
				gap: "var(--cpd-space-2x)",
				children: [
					/* @__PURE__ */ (0, R.jsx)(_N, { vm: e }),
					a && i && /* @__PURE__ */ (0, R.jsx)(j, {
						size: "28px",
						style: { padding: "4px" },
						onClick: () => e.collapseOrExpandSections(),
						tooltip: t(i === "collapse" ? "room_list|collapse_all_sections" : "room_list|expand_all_sections"),
						children: i === "collapse" ? /* @__PURE__ */ (0, R.jsx)(CS, {
							color: "var(--cpd-color-icon-secondary)",
							"aria-hidden": !0
						}) : /* @__PURE__ */ (0, R.jsx)(GS, {
							color: "var(--cpd-color-icon-secondary)",
							"aria-hidden": !0
						})
					}),
					c ? /* @__PURE__ */ (0, R.jsx)(j, {
						size: "28px",
						style: { padding: "4px" },
						onClick: (t) => e.createChatRoom(t.nativeEvent),
						tooltip: t("action|start_chat"),
						children: /* @__PURE__ */ (0, R.jsx)(sS, {
							color: "var(--cpd-color-icon-secondary)",
							"aria-hidden": !0
						})
					}) : /* @__PURE__ */ (0, R.jsx)(bN, { vm: e })
				]
			})]
		})
	});
}
var CN = {
	view: "_view_zk0ja_8",
	search: "_search_zk0ja_16",
	search_container: "_search_container_zk0ja_28",
	search_text: "_search_text_zk0ja_40"
};
//#endregion
//#region src/room-list/RoomListSearchView/RoomListSearchView.tsx
function wN({ vm: e }) {
	let { translate: t } = z(), { displayExploreButton: n, displayDialButton: r, searchShortcut: i } = V(e);
	return /* @__PURE__ */ (0, R.jsxs)(B, {
		"data-testid": "room-list-search",
		className: CN.view,
		role: "search",
		gap: "var(--cpd-space-2x)",
		align: "center",
		children: [
			/* @__PURE__ */ (0, R.jsx)(O, {
				id: "room-list-search-button",
				className: CN.search,
				kind: "secondary",
				size: "md",
				Icon: ZC,
				onClick: e.onSearchClick,
				children: /* @__PURE__ */ (0, R.jsxs)(B, {
					className: CN.search_container,
					as: "span",
					justify: "space-between",
					children: [/* @__PURE__ */ (0, R.jsx)("span", {
						className: CN.search_text,
						children: t("action|search")
					}), /* @__PURE__ */ (0, R.jsx)("kbd", { children: i })]
				})
			}),
			r && /* @__PURE__ */ (0, R.jsx)(O, {
				kind: "secondary",
				size: "md",
				Icon: jS,
				iconOnly: !0,
				"aria-label": t("left_panel|open_dial_pad"),
				onClick: e.onDialPadClick
			}),
			n && /* @__PURE__ */ (0, R.jsx)(O, {
				kind: "secondary",
				size: "md",
				Icon: YS,
				iconOnly: !0,
				"aria-label": t("action|explore_rooms"),
				onClick: e.onExploreClick
			})
		]
	});
}
var TN = { container: "_container_17t7g_8" };
//#endregion
//#region src/room-list/SectionCreationView/SectionFormView.tsx
function EN({ vm: e, className: t }) {
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
			className: TN.form,
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
var DN = {
	list: "_list_1pgfw_8",
	emptyList: "_emptyList_1pgfw_15"
};
//#endregion
//#region src/core/RoomPickerView/RoomPickerView.tsx
function ON({ vm: e, className: t }) {
	let { rooms: n, selectedRooms: r, placeholder: i, listTitle: a, emptyListText: s } = V(e), c = n.length === 0, l = o.useRef(null);
	return /* @__PURE__ */ (0, R.jsxs)(B, {
		gap: "var(--cpd-space-4x)",
		direction: "column",
		align: "stretch",
		className: t,
		children: [/* @__PURE__ */ (0, R.jsx)(IA, {
			onRemoveChildren: e.unSelectLastRoom,
			inputProps: {
				ref: l,
				placeholder: i,
				onChange: (t) => e.search(t.currentTarget.value)
			},
			children: r.map((t) => /* @__PURE__ */ (0, R.jsx)(kA, {
				label: t.name,
				onClick: () => e.toggleRoom(t.id),
				children: e.renderRoomAvatar(t, "20px")
			}, t.id))
		}), c ? /* @__PURE__ */ (0, R.jsx)(N, {
			as: "div",
			size: "lg",
			className: (0, L.default)(DN.list, DN.emptyList),
			children: s
		}) : /* @__PURE__ */ (0, R.jsx)(hN, {
			title: a,
			className: DN.list,
			children: n.map((t) => /* @__PURE__ */ (0, R.jsx)(dN, {
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
function kN({ vm: e }) {
	let { step: t } = V(e);
	return /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [(t === "creation" || t === "editing") && /* @__PURE__ */ (0, R.jsx)(EN, {
		vm: e,
		className: TN.container
	}), t === "add_rooms" && /* @__PURE__ */ (0, R.jsx)(ON, {
		vm: e,
		className: TN.container
	})] });
}
//#endregion
//#region src/room-list/RoomListPrimaryFilters/useCollapseFilters.ts
function AN(e, t) {
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
function jN(e, t, n) {
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
var MN = {
	roomListPrimaryFilters: "_roomListPrimaryFilters_kikqh_8",
	list: "_list_kikqh_17",
	iconButton: "_iconButton_kikqh_27"
}, NN = (e) => {
	switch (e) {
		case "unread": return H("room_list|filters|unread");
		case "people": return H("room_list|filters|people");
		case "rooms": return H("room_list|filters|rooms");
		case "favourite": return H("room_list|filters|favourite");
		case "mentions": return H("room_list|filters|mentions");
		case "invites": return H("room_list|filters|invites");
		case "low_priority": return H("room_list|filters|low_priority");
	}
}, PN = p(function({ filterIds: e, activeFilterId: t, onToggleFilter: n }) {
	let r = v(), [i, a] = T(!1), { ref: o, isWrapping: s, wrappingIndex: c } = AN(i, "wrapping"), l = jN(e, t, c);
	return /* @__PURE__ */ (0, R.jsxs)(B, {
		className: MN.roomListPrimaryFilters,
		"data-testid": "primary-filters",
		gap: "var(--cpd-space-3x)",
		direction: "row-reverse",
		justify: "space-between",
		children: [s && /* @__PURE__ */ (0, R.jsx)(j, {
			kind: "secondary",
			"aria-expanded": i,
			"aria-controls": r,
			className: MN.iconButton,
			"aria-label": H(i ? "room_list|collapse_filters" : "room_list|expand_filters"),
			size: "28px",
			onClick: () => a((e) => !e),
			children: /* @__PURE__ */ (0, R.jsx)(pS, {})
		}), /* @__PURE__ */ (0, R.jsx)(B, {
			id: r,
			as: "div",
			role: "listbox",
			"aria-label": H("room_list|primary_filters"),
			align: "center",
			gap: "var(--cpd-space-2x)",
			wrap: "wrap",
			className: MN.list,
			ref: o,
			children: l.map((e, r) => /* @__PURE__ */ (0, R.jsx)(k, {
				role: "option",
				tabIndex: 0,
				"aria-selected": e === t,
				selected: e === t,
				onClick: () => n(e),
				children: NN(e)
			}, `${e}-${r}`))
		})]
	});
}), FN = { skeleton: "_skeleton_1h0mx_8" }, IN = () => /* @__PURE__ */ (0, R.jsx)("div", { className: FN.skeleton }), LN = {
	genericPlaceholder: "_genericPlaceholder_1sxid_8",
	title: "_title_1sxid_16",
	description: "_description_1sxid_21",
	defaultPlaceholder: "_defaultPlaceholder_1sxid_27"
}, RN = ({ vm: e }) => {
	let t = V(e);
	if (!t.activeFilterId) return /* @__PURE__ */ (0, R.jsx)(zN, {
		title: H("room_list|empty|no_chats"),
		description: t.canCreateRoom ? H("room_list|empty|no_chats_description") : H("room_list|empty|no_chats_description_no_room_rights"),
		children: /* @__PURE__ */ (0, R.jsxs)(B, {
			className: LN.defaultPlaceholder,
			align: "center",
			justify: "center",
			direction: "column",
			gap: "var(--cpd-space-4x)",
			children: [/* @__PURE__ */ (0, R.jsx)(O, {
				size: "md",
				kind: "secondary",
				Icon: sS,
				onClick: e.createChatRoom,
				children: H("action|start_chat")
			}), t.canCreateRoom && /* @__PURE__ */ (0, R.jsx)(O, {
				size: "md",
				kind: "secondary",
				Icon: YC,
				onClick: e.createRoom,
				children: H("action|new_room")
			})]
		})
	});
	switch (t.activeFilterId) {
		case "people": return /* @__PURE__ */ (0, R.jsx)(zN, {
			title: H("room_list|empty|no_people"),
			description: H("room_list|empty|no_people_description")
		});
		case "rooms": return /* @__PURE__ */ (0, R.jsx)(zN, {
			title: H("room_list|empty|no_rooms"),
			description: H("room_list|empty|no_rooms_description")
		});
		case "unread": return /* @__PURE__ */ (0, R.jsx)(BN, {
			title: H("room_list|empty|no_unread"),
			action: H("room_list|empty|show_chats"),
			onAction: () => e.onToggleFilter(t.activeFilterId)
		});
		case "invites": return /* @__PURE__ */ (0, R.jsx)(BN, {
			title: H("room_list|empty|no_invites"),
			action: H("room_list|empty|show_activity"),
			onAction: () => e.onToggleFilter(t.activeFilterId)
		});
		case "mentions": return /* @__PURE__ */ (0, R.jsx)(BN, {
			title: H("room_list|empty|no_mentions"),
			action: H("room_list|empty|show_activity"),
			onAction: () => e.onToggleFilter(t.activeFilterId)
		});
		default: return /* @__PURE__ */ (0, R.jsx)(zN, {
			title: H("room_list|empty|no_chats"),
			description: H("room_list|empty|no_chats_description")
		});
	}
};
function zN({ title: e, description: t, children: n }) {
	return /* @__PURE__ */ (0, R.jsxs)(B, {
		"data-testid": "empty-room-list",
		className: LN.genericPlaceholder,
		direction: "column",
		align: "stretch",
		justify: "center",
		gap: "var(--cpd-space-2x)",
		children: [
			/* @__PURE__ */ (0, R.jsx)("span", {
				className: LN.title,
				children: e
			}),
			t && /* @__PURE__ */ (0, R.jsx)("span", {
				className: LN.description,
				children: t
			}),
			n
		]
	});
}
function BN({ title: e, action: t, onAction: n }) {
	return /* @__PURE__ */ (0, R.jsx)(zN, {
		title: e,
		children: n && /* @__PURE__ */ (0, R.jsx)(O, {
			kind: "tertiary",
			onClick: n,
			children: t
		})
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@preact+signals-core@1.14.2/node_modules/@preact/signals-core/dist/signals-core.module.js
var VN = Symbol.for("preact-signals");
function HN() {
	if (KN > 1) KN--;
	else {
		var e, t = !1;
		for ((function() {
			var e = XN;
			for (XN = void 0; e !== void 0;) e.S.v === e.v && (e.S.i = e.i), e = e.o;
		})(); GN !== void 0;) {
			var n = GN;
			for (GN = void 0, qN++; n !== void 0;) {
				var r = n.u;
				if (n.u = void 0, n.f &= -3, !(8 & n.f) && tP(n)) try {
					n.c();
				} catch (n) {
					t ||= (e = n, !0);
				}
				n = r;
			}
		}
		if (qN = 0, KN--, t) throw e;
	}
}
function UN(e) {
	if (KN > 0) return e();
	YN = ++JN, KN++;
	try {
		return e();
	} finally {
		HN();
	}
}
var WN = void 0;
function J(e) {
	var t = WN;
	WN = void 0;
	try {
		return e();
	} finally {
		WN = t;
	}
}
var GN = void 0, KN = 0, qN = 0, JN = 0, YN = 0, XN = void 0, ZN = 0;
function QN(e) {
	if (WN !== void 0) {
		var t = e.n;
		if (t === void 0 || t.t !== WN) return t = {
			i: 0,
			S: e,
			p: WN.s,
			n: void 0,
			t: WN,
			e: void 0,
			x: void 0,
			r: t
		}, WN.s !== void 0 && (WN.s.n = t), WN.s = t, e.n = t, 32 & WN.f && e.S(t), t;
		if (t.i === -1) return t.i = 0, t.n !== void 0 && (t.n.p = t.p, t.p !== void 0 && (t.p.n = t.n), t.p = WN.s, t.n = void 0, WN.s.n = t, WN.s = t), t;
	}
}
function $N(e, t) {
	this.v = e, this.i = 0, this.n = void 0, this.t = void 0, this.l = 0, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
$N.prototype.brand = VN, $N.prototype.h = function() {
	return !0;
}, $N.prototype.S = function(e) {
	var t = this, n = this.t;
	n !== e && e.e === void 0 && (e.x = n, this.t = e, n === void 0 ? J(function() {
		var e;
		(e = t.W) == null || e.call(t);
	}) : n.e = e);
}, $N.prototype.U = function(e) {
	var t = this;
	if (this.t !== void 0) {
		var n = e.e, r = e.x;
		n !== void 0 && (n.x = r, e.e = void 0), r !== void 0 && (r.e = n, e.x = void 0), e === this.t && (this.t = r, r === void 0 && J(function() {
			var e;
			(e = t.Z) == null || e.call(t);
		}));
	}
}, $N.prototype.subscribe = function(e) {
	var t = this;
	return uP(function() {
		var n = t.value, r = WN;
		WN = void 0;
		try {
			e(n);
		} finally {
			WN = r;
		}
	}, { name: "sub" });
}, $N.prototype.valueOf = function() {
	return this.value;
}, $N.prototype.toString = function() {
	return this.value + "";
}, $N.prototype.toJSON = function() {
	return this.value;
}, $N.prototype.peek = function() {
	var e = this;
	return J(function() {
		return e.value;
	});
}, Object.defineProperty($N.prototype, "value", {
	get: function() {
		var e = QN(this);
		return e !== void 0 && (e.i = this.i), this.v;
	},
	set: function(e) {
		if (e !== this.v) {
			if (qN > 100) throw Error("Cycle detected");
			(function(e) {
				KN !== 0 && qN === 0 && e.l !== YN && (e.l = YN, XN = {
					S: e,
					v: e.v,
					i: e.i,
					o: XN
				});
			})(this), this.v = e, this.i++, ZN++, KN++;
			try {
				for (var t = this.t; t !== void 0; t = t.x) t.t.N();
			} finally {
				HN();
			}
		}
	}
});
function eP(e, t) {
	return new $N(e, t);
}
function tP(e) {
	for (var t = e.s; t !== void 0; t = t.n) if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
	return !1;
}
function nP(e) {
	for (var t = e.s; t !== void 0; t = t.n) {
		var n = t.S.n;
		if (n !== void 0 && (t.r = n), t.S.n = t, t.i = -1, t.n === void 0) {
			e.s = t;
			break;
		}
	}
}
function rP(e) {
	for (var t = e.s, n = void 0; t !== void 0;) {
		var r = t.p;
		t.i === -1 ? (t.S.U(t), r !== void 0 && (r.n = t.n), t.n !== void 0 && (t.n.p = r)) : n = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = r;
	}
	e.s = n;
}
function iP(e, t) {
	$N.call(this, void 0), this.x = e, this.s = void 0, this.g = ZN - 1, this.f = 4, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
iP.prototype = new $N(), iP.prototype.h = function() {
	if (this.f &= -3, 1 & this.f) return !1;
	if ((36 & this.f) == 32 || (this.f &= -5, this.g === ZN)) return !0;
	if (this.g = ZN, this.f |= 1, this.i > 0 && !tP(this)) return this.f &= -2, !0;
	var e = WN;
	try {
		nP(this), WN = this;
		var t = this.x();
		(16 & this.f || this.v !== t || this.i === 0) && (this.v = t, this.f &= -17, this.i++);
	} catch (e) {
		this.v = e, this.f |= 16, this.i++;
	}
	return WN = e, rP(this), this.f &= -2, !0;
}, iP.prototype.S = function(e) {
	if (this.t === void 0) {
		this.f |= 36;
		for (var t = this.s; t !== void 0; t = t.n) t.S.S(t);
	}
	$N.prototype.S.call(this, e);
}, iP.prototype.U = function(e) {
	if (this.t !== void 0 && ($N.prototype.U.call(this, e), this.t === void 0)) {
		this.f &= -33;
		for (var t = this.s; t !== void 0; t = t.n) t.S.U(t);
	}
}, iP.prototype.N = function() {
	if (!(2 & this.f)) {
		this.f |= 6;
		for (var e = this.t; e !== void 0; e = e.x) e.t.N();
	}
}, Object.defineProperty(iP.prototype, "value", { get: function() {
	if (1 & this.f) throw Error("Cycle detected");
	var e = QN(this);
	if (this.h(), e !== void 0 && (e.i = this.i), 16 & this.f) throw this.v;
	return this.v;
} });
function aP(e, t) {
	return new iP(e, t);
}
function oP(e) {
	var t = e.m;
	if (e.m = void 0, typeof t == "function") {
		KN++;
		var n = WN;
		WN = void 0;
		try {
			t();
		} catch (t) {
			throw e.f &= -2, e.f |= 8, sP(e), t;
		} finally {
			WN = n, HN();
		}
	}
}
function sP(e) {
	for (var t = e.s; t !== void 0; t = t.n) t.S.U(t);
	e.x = void 0, e.s = void 0, oP(e);
}
function cP(e) {
	if (WN !== this) throw Error("Out-of-order effect");
	rP(this), WN = e, this.f &= -2, 8 & this.f && sP(this), HN();
}
function lP(e, t) {
	this.x = e, this.m = void 0, this.s = void 0, this.u = void 0, this.f = 32, this.name = t?.name;
}
lP.prototype.c = function() {
	var e = this.S();
	try {
		if (8 & this.f || this.x === void 0) return;
		var t = this.x();
		typeof t == "function" && (this.m = t);
	} finally {
		e();
	}
}, lP.prototype.S = function() {
	if (1 & this.f) throw Error("Cycle detected");
	this.f |= 1, this.f &= -9, oP(this), nP(this), KN++;
	var e = WN;
	return WN = this, cP.bind(this, e);
}, lP.prototype.N = function() {
	2 & this.f || (this.f |= 2, this.u = GN, GN = this);
}, lP.prototype.d = function() {
	this.f |= 8, 1 & this.f || sP(this);
}, lP.prototype.dispose = function() {
	this.d();
};
function uP(e, t) {
	var n = new lP(e, t);
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
var dP = Object.create, fP = Object.defineProperty, pP = Object.defineProperties, mP = Object.getOwnPropertyDescriptor, hP = Object.getOwnPropertyDescriptors, gP = Object.getOwnPropertySymbols, _P = Object.prototype.hasOwnProperty, vP = Object.prototype.propertyIsEnumerable, yP = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), bP = (e) => {
	throw TypeError(e);
}, xP = (e, t, n) => t in e ? fP(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, SP = (e, t) => {
	for (var n in t ||= {}) _P.call(t, n) && xP(e, n, t[n]);
	if (gP) for (var n of gP(t)) vP.call(t, n) && xP(e, n, t[n]);
	return e;
}, CP = (e, t) => pP(e, hP(t)), wP = (e, t) => fP(e, "name", {
	value: t,
	configurable: !0
}), TP = (e) => [
	,
	,
	,
	dP(e?.[yP("metadata")] ?? null)
], EP = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], DP = (e) => e !== void 0 && typeof e != "function" ? bP("Function expected") : e, OP = (e, t, n, r, i) => ({
	kind: EP[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? bP("Already initialized") : i.push(DP(e || null))
}), kP = (e, t) => xP(t, yP("metadata"), e[3]), AP = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, jP = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = EP[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && mP(d < 4 ? i : {
		get [n]() {
			return PP(this, a);
		},
		set [n](e) {
			return IP(this, a, e);
		}
	}, n));
	d ? p && d < 4 && wP(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : wP(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = OP(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => NP(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? PP : LP)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => IP(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? DP(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? bP("Object expected") : (DP(o = s.get) && (v.get = o), DP(o = s.set) && (v.set = o), DP(o = s.init) && g.unshift(o));
	return d || kP(e, i), v && fP(i, n, v), p ? d ^ 4 ? a : v : i;
}, MP = (e, t, n) => t.has(e) || bP("Cannot " + n), NP = (e, t) => Object(t) === t ? e.has(t) : bP("Cannot use the \"in\" operator on this value"), PP = (e, t, n) => (MP(e, t, "read from private field"), n ? n.call(e) : t.get(e)), FP = (e, t, n) => t.has(e) ? bP("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), IP = (e, t, n, r) => (MP(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), LP = (e, t, n) => (MP(e, t, "access private method"), n);
function RP(e, t) {
	if (t) {
		let n;
		return aP(() => {
			let r = e();
			return r && n && t(n, r) ? n : (n = r, r);
		});
	}
	return aP(e);
}
function zP(e, t) {
	if (Object.is(e, t)) return !0;
	if (e === null || t === null) return !1;
	if (typeof e == "function" && typeof t == "function") return e === t;
	if (e instanceof Set && t instanceof Set) {
		if (e.size !== t.size) return !1;
		for (let n of e) if (!t.has(n)) return !1;
		return !0;
	}
	if (Array.isArray(e)) return !Array.isArray(t) || e.length !== t.length ? !1 : !e.some((e, n) => !zP(e, t[n]));
	if (typeof e == "object" && typeof t == "object") {
		let n = Object.keys(e), r = Object.keys(t);
		return n.length === r.length && !n.some((n) => !zP(e[n], t[n]));
	}
	return !1;
}
function Y({ get: e }, t) {
	return {
		init(e) {
			return eP(e);
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
function BP(e, t) {
	let n = /* @__PURE__ */ new WeakMap();
	return function() {
		let t = n.get(this);
		return t || (t = RP(e.bind(this)), n.set(this, t)), t.value;
	};
}
function VP(e = !0) {
	return function(t, n) {
		n.addInitializer(function() {
			let t = n.kind === "field" || n.static ? this : Object.getPrototypeOf(this), r = Object.getOwnPropertyDescriptor(t, n.name);
			r && Object.defineProperty(t, n.name, CP(SP({}, r), { enumerable: e }));
		});
	};
}
function HP(...e) {
	let t = e.map((e) => uP(e));
	return () => t.forEach((e) => e());
}
var UP, WP, GP, KP, qP, JP = [Y], YP, XP, ZP, QP, $P, eF, tF, nF, rF, iF, aF, oF, sF, cF;
qP = [Y], KP = [Y], GP = [VP()], WP = [VP()], UP = [VP()];
var lF = class {
	constructor(e, t = Object.is) {
		this.defaultValue = e, this.equals = t, AP(YP, 5, this), FP(this, eF), FP(this, XP, AP(YP, 8, this)), AP(YP, 11, this), FP(this, tF, AP(YP, 12, this)), AP(YP, 15, this), FP(this, aF, AP(YP, 16, this)), AP(YP, 19, this), this.reset = this.reset.bind(this), this.reset();
	}
	get current() {
		return PP(this, eF, sF);
	}
	get initial() {
		return PP(this, eF, QP);
	}
	get previous() {
		return PP(this, eF, rF);
	}
	set current(e) {
		let t = J(() => PP(this, eF, sF));
		e && t && this.equals(t, e) || UN(() => {
			PP(this, eF, QP) || IP(this, eF, e, $P), IP(this, eF, t, iF), IP(this, eF, e, cF);
		});
	}
	reset(e = this.defaultValue) {
		UN(() => {
			IP(this, eF, void 0, iF), IP(this, eF, e, $P), IP(this, eF, e, cF);
		});
	}
};
YP = TP(null), XP = /* @__PURE__ */ new WeakMap(), eF = /* @__PURE__ */ new WeakSet(), tF = /* @__PURE__ */ new WeakMap(), aF = /* @__PURE__ */ new WeakMap(), ZP = jP(YP, 20, "#initial", JP, eF, XP), QP = ZP.get, $P = ZP.set, nF = jP(YP, 20, "#previous", qP, eF, tF), rF = nF.get, iF = nF.set, oF = jP(YP, 20, "#current", KP, eF, aF), sF = oF.get, cF = oF.set, jP(YP, 2, "current", GP, lF), jP(YP, 2, "initial", WP, lF), jP(YP, 2, "previous", UP, lF), kP(YP, lF);
function uF(e) {
	return J(() => {
		let t = {};
		for (let n in e) t[n] = e[n];
		return t;
	});
}
var dF = Object.create, fF = Object.defineProperty, pF = Object.getOwnPropertyDescriptor, mF = Object.getOwnPropertySymbols, hF = Object.prototype.hasOwnProperty, gF = Object.prototype.propertyIsEnumerable, _F = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), vF = (e) => {
	throw TypeError(e);
}, yF = Math.pow, bF = (e, t, n) => t in e ? fF(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, xF = (e, t) => {
	for (var n in t ||= {}) hF.call(t, n) && bF(e, n, t[n]);
	if (mF) for (var n of mF(t)) gF.call(t, n) && bF(e, n, t[n]);
	return e;
}, SF = (e, t) => fF(e, "name", {
	value: t,
	configurable: !0
}), CF = (e) => [
	,
	,
	,
	dF(e?.[_F("metadata")] ?? null)
], wF = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], TF = (e) => e !== void 0 && typeof e != "function" ? vF("Function expected") : e, EF = (e, t, n, r, i) => ({
	kind: wF[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? vF("Already initialized") : i.push(TF(e || null))
}), DF = (e, t) => bF(t, _F("metadata"), e[3]), OF = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, kF = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = wF[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && pF(d < 4 ? i : {
		get [n]() {
			return MF(this, a);
		},
		set [n](e) {
			return PF(this, a, e);
		}
	}, n));
	d ? p && d < 4 && SF(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : SF(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = EF(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => jF(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? MF : FF)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => PF(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? TF(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? vF("Object expected") : (TF(o = s.get) && (v.get = o), TF(o = s.set) && (v.set = o), TF(o = s.init) && g.unshift(o));
	return d || DF(e, i), v && fF(i, n, v), p ? d ^ 4 ? a : v : i;
}, AF = (e, t, n) => t.has(e) || vF("Cannot " + n), jF = (e, t) => Object(t) === t ? e.has(t) : vF("Cannot use the \"in\" operator on this value"), MF = (e, t, n) => (AF(e, t, "read from private field"), n ? n.call(e) : t.get(e)), NF = (e, t, n) => t.has(e) ? vF("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), PF = (e, t, n, r) => (AF(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), FF = (e, t, n) => (AF(e, t, "access private method"), n), IF = class e {
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
}, LF = class e {
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
		return c.scale = xF({}, s), c;
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
		return new IF((e + n) / 2, (t + r) / 2);
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
		return t instanceof e ? RF(this, t) : 0;
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
		return IF.delta({
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
function RF(e, t) {
	let n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), i = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), o = i - r, s = a - n;
	return r < i && n < a ? o * s : 0;
}
var zF, BF, VF, HF, UF, WF = class extends (VF = lF, BF = [BP], zF = [BP], VF) {
	constructor(e) {
		let t = IF.from(e);
		super(t, (e, t) => IF.equals(e, t)), OF(UF, 5, this), NF(this, HF, 0), this.velocity = {
			x: 0,
			y: 0
		};
	}
	get delta() {
		return IF.delta(this.current, this.initial);
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
		let { current: t } = this, n = IF.from(e), r = {
			x: n.x - t.x,
			y: n.y - t.y
		}, i = Date.now(), a = i - MF(this, HF), o = (e) => Math.round(e / a * 100);
		UN(() => {
			PF(this, HF, i), this.velocity = {
				x: o(r.x),
				y: o(r.y)
			}, super.current = n;
		});
	}
	reset(e = this.defaultValue) {
		super.reset(IF.from(e)), this.velocity = {
			x: 0,
			y: 0
		};
	}
};
UF = CF(VF), HF = /* @__PURE__ */ new WeakMap(), kF(UF, 2, "delta", BF, WF), kF(UF, 2, "direction", zF, WF), DF(UF, WF);
function GF({ x: e, y: t }, n) {
	let r = Math.abs(e), i = Math.abs(t);
	return typeof n == "number" ? Math.sqrt(yF(r, 2) + yF(i, 2)) > n : "x" in n && "y" in n ? r > n.x && i > n.y : "x" in n ? r > n.x : "y" in n && i > n.y;
}
var KF = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(KF || {}), qF = Object.values(KF), JF = Object.create, YF = Object.defineProperty, XF = Object.defineProperties, ZF = Object.getOwnPropertyDescriptor, QF = Object.getOwnPropertyDescriptors, $F = Object.getOwnPropertySymbols, eI = Object.prototype.hasOwnProperty, tI = Object.prototype.propertyIsEnumerable, nI = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), rI = (e) => {
	throw TypeError(e);
}, iI = (e, t, n) => t in e ? YF(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, aI = (e, t) => {
	for (var n in t ||= {}) eI.call(t, n) && iI(e, n, t[n]);
	if ($F) for (var n of $F(t)) tI.call(t, n) && iI(e, n, t[n]);
	return e;
}, oI = (e, t) => XF(e, QF(t)), sI = (e, t) => YF(e, "name", {
	value: t,
	configurable: !0
}), cI = (e, t) => {
	var n = {};
	for (var r in e) eI.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && $F) for (var r of $F(e)) t.indexOf(r) < 0 && tI.call(e, r) && (n[r] = e[r]);
	return n;
}, lI = (e) => [
	,
	,
	,
	JF(e?.[nI("metadata")] ?? null)
], uI = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], dI = (e) => e !== void 0 && typeof e != "function" ? rI("Function expected") : e, fI = (e, t, n, r, i) => ({
	kind: uI[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? rI("Already initialized") : i.push(dI(e || null))
}), pI = (e, t) => iI(t, nI("metadata"), e[3]), X = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, Z = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = uI[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && ZF(d < 4 ? i : {
		get [n]() {
			return gI(this, a);
		},
		set [n](e) {
			return _I(this, a, e);
		}
	}, n));
	d ? p && d < 4 && sI(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : sI(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = fI(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => hI(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? gI : vI)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => _I(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? dI(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? rI("Object expected") : (dI(o = s.get) && (v.get = o), dI(o = s.set) && (v.set = o), dI(o = s.init) && g.unshift(o));
	return d || pI(e, i), v && YF(i, n, v), p ? d ^ 4 ? a : v : i;
}, mI = (e, t, n) => t.has(e) || rI("Cannot " + n), hI = (e, t) => Object(t) === t ? e.has(t) : rI("Cannot use the \"in\" operator on this value"), gI = (e, t, n) => (mI(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Q = (e, t, n) => t.has(e) ? rI("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), _I = (e, t, n, r) => (mI(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), vI = (e, t, n) => (mI(e, t, "access private method"), n);
function yI(e, t) {
	return {
		plugin: e,
		options: t
	};
}
function bI(e) {
	return (t) => yI(e, t);
}
function xI(e) {
	return typeof e == "function" ? {
		plugin: e,
		options: void 0
	} : e;
}
var SI = [Y], CI, wI, TI, EI = class {
	constructor(e, t) {
		this.manager = e, this.options = t, Q(this, wI, X(CI, 8, this, !1)), X(CI, 11, this), Q(this, TI, /* @__PURE__ */ new Set());
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
		let t = uP(e.bind(this));
		return gI(this, TI).add(t), t;
	}
	destroy() {
		gI(this, TI).forEach((e) => e());
	}
	static configure(e) {
		return yI(this, e);
	}
};
CI = lI(null), wI = /* @__PURE__ */ new WeakMap(), TI = /* @__PURE__ */ new WeakMap(), Z(CI, 4, "disabled", SI, EI, wI), pI(CI, EI);
var DI = class extends EI {}, OI, kI = class {
	constructor(e) {
		this.manager = e, this.instances = /* @__PURE__ */ new Map(), Q(this, OI, []);
	}
	get values() {
		return Array.from(this.instances.values());
	}
	set values(e) {
		let t = e.map(xI).reduce((e, t) => {
			let n = e.find(({ plugin: e }) => e === t.plugin);
			return n ? (n.options = t.options, e) : [...e, t];
		}, []), n = t.map(({ plugin: e }) => e);
		for (let e of gI(this, OI)) if (!n.includes(e)) {
			if (e.prototype instanceof DI) continue;
			this.unregister(e);
		}
		for (let { plugin: e, options: n } of t) this.register(e, n);
		_I(this, OI, n);
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
OI = /* @__PURE__ */ new WeakMap();
function AI(e, t) {
	return e.priority === t.priority ? e.type === t.type ? t.value - e.value : t.type - e.type : t.priority - e.priority;
}
var jI = [], MI, NI, PI = class extends EI {
	constructor(e) {
		super(e), Q(this, MI), Q(this, NI), this.computeCollisions = this.computeCollisions.bind(this), _I(this, NI, eP(jI)), this.destroy = HP(() => {
			let e = this.computeCollisions(), t = J(() => this.manager.dragOperation.position.current);
			if (e !== jI) {
				let e = gI(this, MI);
				if (_I(this, MI, t), e && t.x == e.x && t.y == e.y) return;
			} else _I(this, MI, void 0);
			gI(this, NI).value = e;
		}, () => {
			let { dragOperation: e } = this.manager;
			e.status.initialized && this.forceUpdate();
		});
	}
	forceUpdate(e = !0) {
		J(() => {
			e ? gI(this, NI).value = this.computeCollisions() : _I(this, MI, void 0);
		});
	}
	computeCollisions(e, t) {
		let { registry: n, dragOperation: r } = this.manager, { source: i, shape: a, status: o } = r;
		if (!o.initialized || !a) return jI;
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
		return c.length === 0 ? jI : (s.sort(AI), s);
	}
	get collisions() {
		return gI(this, NI).value;
	}
};
MI = /* @__PURE__ */ new WeakMap(), NI = /* @__PURE__ */ new WeakMap();
var FI, II, LI = [Y], RI, zI, BI, VI, HI, UI, WI;
II = [Y], FI = [Y];
var GI = class e {
	constructor(e, t) {
		Q(this, VI, X(BI, 8, this)), X(BI, 11, this), Q(this, HI), Q(this, UI, X(BI, 12, this)), X(BI, 15, this), Q(this, WI, X(BI, 16, this)), X(BI, 19, this);
		let { effects: n, id: r, data: i = {}, disabled: a = !1, register: o = !0 } = e, s = r;
		_I(this, HI, eP(r)), this.manager = t, this.data = i, this.disabled = a, this.effects = () => [() => {
			let { id: e, manager: t } = this;
			if (e !== s) return s = e, t?.registry.register(this), () => t?.registry.unregister(this);
		}, ...n?.() ?? []], this.register = this.register.bind(this), this.unregister = this.unregister.bind(this), this.destroy = this.destroy.bind(this), t && o && queueMicrotask(this.register);
	}
	get id() {
		let t = gI(this, HI).value;
		return e.pendingIdChanges?.get(this) ?? t;
	}
	set id(t) {
		t !== (e.pendingIdChanges?.get(this) ?? gI(this, HI).peek()) && (e.pendingIdChanges || (e.pendingIdChanges = /* @__PURE__ */ new Map(), queueMicrotask(() => {
			var t;
			return vI(t = e, RI, zI).call(t);
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
BI = lI(null), RI = /* @__PURE__ */ new WeakSet(), zI = function() {
	let e = GI.pendingIdChanges;
	GI.pendingIdChanges = null, e && UN(() => {
		for (let [t, n] of e) gI(t, HI).value = n;
	});
}, VI = /* @__PURE__ */ new WeakMap(), HI = /* @__PURE__ */ new WeakMap(), UI = /* @__PURE__ */ new WeakMap(), WI = /* @__PURE__ */ new WeakMap(), Z(BI, 4, "manager", LI, GI, VI), Z(BI, 4, "data", II, GI, UI), Z(BI, 4, "disabled", FI, GI, WI), Q(GI, RI), pI(BI, GI), GI.pendingIdChanges = null;
var KI = GI, qI = class {
	constructor() {
		this.map = eP(/* @__PURE__ */ new Map()), this.cleanupFunctions = /* @__PURE__ */ new WeakMap(), this.register = (e, t) => {
			let n = this.map.peek(), r = n.get(e), i = () => this.unregister(e, t);
			if (r === t) return i;
			r && r.id === e && (this.cleanupFunctions.get(r)?.(), this.cleanupFunctions.delete(r));
			let a = new Map(n);
			for (let [r, i] of n) if (i === t && r !== e) {
				a.delete(r);
				break;
			}
			a.set(e, t), this.map.value = a;
			let o = HP(...t.effects());
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
}, JI, YI, XI, ZI, QI, $I, eL, tL, nL, rL, iL, aL = class extends (eL = KI, $I = [Y], QI = [Y], ZI = [Y], XI = [BP], YI = [BP], JI = [BP], eL) {
	constructor(e, t) {
		var n = e, { modifiers: r, type: i, sensors: a, plugins: o, effects: s } = n, c = cI(n, [
			"modifiers",
			"type",
			"sensors",
			"plugins",
			"effects"
		]);
		super(oI(aI({}, c), { effects: () => [...s?.() ?? [], () => {
			let { manager: e, plugins: t } = this;
			if (!(!e || !t)) for (let n of t) {
				let { plugin: t } = xI(n);
				e.registry.plugins.register(t);
			}
		}] }), t), X(tL, 5, this), Q(this, nL, X(tL, 8, this)), X(tL, 11, this), Q(this, rL, X(tL, 12, this)), X(tL, 15, this), Q(this, iL, X(tL, 16, this, this.isDragSource ? "dragging" : "idle")), X(tL, 19, this), this.type = i, this.sensors = a, this.modifiers = r, this.alignment = c.alignment, this.plugins = o;
	}
	pluginConfig(e) {
		if (this.plugins) for (let t of this.plugins) {
			let n = xI(t);
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
tL = lI(eL), nL = /* @__PURE__ */ new WeakMap(), rL = /* @__PURE__ */ new WeakMap(), iL = /* @__PURE__ */ new WeakMap(), Z(tL, 4, "type", $I, aL, nL), Z(tL, 4, "modifiers", QI, aL, rL), Z(tL, 4, "status", ZI, aL, iL), Z(tL, 2, "isDropping", XI, aL), Z(tL, 2, "isDragging", YI, aL), Z(tL, 2, "isDragSource", JI, aL), pI(tL, aL);
var oL, sL, cL, lL, uL, dL, fL, pL, mL, hL, gL, _L, vL, yL = class extends (fL = KI, dL = [Y], uL = [Y], lL = [Y], cL = [Y], sL = [Y], oL = [BP], fL) {
	constructor(e, t) {
		var n = e, { accept: r, collisionDetector: i, collisionPriority: a, type: o } = n, s = cI(n, [
			"accept",
			"collisionDetector",
			"collisionPriority",
			"type"
		]);
		super(s, t), X(pL, 5, this), Q(this, mL, X(pL, 8, this)), X(pL, 11, this), Q(this, hL, X(pL, 12, this)), X(pL, 15, this), Q(this, gL, X(pL, 16, this)), X(pL, 19, this), Q(this, _L, X(pL, 20, this)), X(pL, 23, this), Q(this, vL, X(pL, 24, this)), X(pL, 27, this), this.accept = r, this.collisionDetector = i, this.collisionPriority = a, this.type = o;
	}
	accepts(e) {
		let { accept: t } = this;
		return t ? typeof t == "function" ? t(e) : e.type ? Array.isArray(t) ? t.includes(e.type) : e.type === t : !1 : !0;
	}
	get isDropTarget() {
		return this.manager?.dragOperation.target?.id === this.id;
	}
};
pL = lI(fL), mL = /* @__PURE__ */ new WeakMap(), hL = /* @__PURE__ */ new WeakMap(), gL = /* @__PURE__ */ new WeakMap(), _L = /* @__PURE__ */ new WeakMap(), vL = /* @__PURE__ */ new WeakMap(), Z(pL, 4, "accept", dL, yL, mL), Z(pL, 4, "type", uL, yL, hL), Z(pL, 4, "collisionDetector", lL, yL, gL), Z(pL, 4, "collisionPriority", cL, yL, _L), Z(pL, 4, "shape", sL, yL, vL), Z(pL, 2, "isDropTarget", oL, yL), pI(pL, yL);
var bL = class {
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
}, xL = class extends bL {
	constructor(e) {
		super(), this.manager = e;
	}
	dispatch(e, t) {
		let n = [t, this.manager];
		super.dispatch(e, ...n);
	}
};
function SL(e, t = !0) {
	let n = !1;
	return oI(aI({}, e), {
		cancelable: t,
		get defaultPrevented() {
			return n;
		},
		preventDefault() {
			t && (n = !0);
		}
	});
}
var CL = class extends DI {
	constructor(e) {
		super(e);
		let t = (e, t) => e.map(({ id: e }) => e).join("") === t.map(({ id: e }) => e).join(""), n = [];
		this.destroy = HP(() => {
			let { dragOperation: t, collisionObserver: r } = e;
			t.status.initializing && (n = [], r.enable());
		}, () => {
			let { collisionObserver: r, monitor: i } = e, { collisions: a } = r;
			if (r.isDisabled() || KI.pendingIdChanges) return;
			let o = SL({ collisions: a });
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
}, wL = /* @__PURE__ */ ((e) => (e[e.Lowest = 0] = "Lowest", e[e.Low = 1] = "Low", e[e.Normal = 2] = "Normal", e[e.High = 3] = "High", e[e.Highest = 4] = "Highest", e))(wL || {}), TL = /* @__PURE__ */ ((e) => (e[e.Collision = 0] = "Collision", e[e.ShapeIntersection = 1] = "ShapeIntersection", e[e.PointerIntersection = 2] = "PointerIntersection", e))(TL || {}), EL, DL, OL, kL, AL, jL, ML = [Y], NL, PL;
jL = [BP], AL = [BP], kL = [BP], OL = [BP], DL = [BP], EL = [BP];
var FL = class {
	constructor() {
		X(NL, 5, this), Q(this, PL, X(NL, 8, this, "idle")), X(NL, 11, this);
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
NL = lI(null), PL = /* @__PURE__ */ new WeakMap(), Z(NL, 4, "value", ML, FL, PL), Z(NL, 2, "current", jL, FL), Z(NL, 2, "idle", AL, FL), Z(NL, 2, "initializing", kL, FL), Z(NL, 2, "initialized", OL, FL), Z(NL, 2, "dragging", DL, FL), Z(NL, 2, "dropped", EL, FL), pI(NL, FL);
var IL = class {
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
			let r = SL({ operation: t.snapshot() });
			return t.status.dragging && this.manager.monitor.dispatch("dragover", r), this.manager.renderer.rendering.then(() => r.defaultPrevented);
		});
	}
	start(e) {
		return J(() => {
			let { dragOperation: t } = this.manager;
			if (e.source != null && this.setDragSource(e.source), !t.source) throw Error("Cannot start a drag operation without a drag source");
			if (!t.status.idle) throw Error("Cannot start a drag operation while another is active");
			let n = new AbortController(), { event: r, coordinates: i } = e;
			UN(() => {
				t.status.set("initialization-pending"), t.shape = null, t.canceled = !1, t.activatorEvent = r ?? null, t.position.reset(i);
			});
			let a = SL({ operation: t.snapshot() });
			return this.manager.monitor.dispatch("beforedragstart", a), a.defaultPrevented ? (t.reset(), n.abort(), n) : (t.status.set("initializing"), t.controller = n, this.manager.renderer.rendering.then(() => {
				if (n.signal.aborted) return;
				let { status: e } = t;
				e.current === "initializing" && UN(() => {
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
			let i = SL({
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
						let { source: e } = t, n = uP(() => {
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
}, LL = class extends EI {
	constructor(e, t) {
		super(e, t), this.manager = e, this.options = t;
	}
}, RL = class extends AbortController {
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
}, zL, BL = class {
	constructor(e) {
		this.options = e, Q(this, zL);
	}
	set controller(e) {
		_I(this, zL, e), e.signal.addEventListener("abort", () => this.abort());
	}
	activate(e) {
		var t;
		(t = gI(this, zL)) == null || t.activate(e);
	}
};
zL = /* @__PURE__ */ new WeakMap();
var VL = class extends EI {
	constructor(e, t) {
		super(e, t), this.manager = e, this.options = t;
	}
	apply(e) {
		return e.transform;
	}
}, HL = class {
	constructor(e) {
		this.draggables = new qI(), this.droppables = new qI(), this.plugins = new kI(e), this.sensors = new kI(e), this.modifiers = new kI(e);
	}
	register(e, t) {
		if (e instanceof aL) return this.draggables.register(e.id, e);
		if (e instanceof yL) return this.droppables.register(e.id, e);
		if (e.prototype instanceof VL) return this.modifiers.register(e, t);
		if (e.prototype instanceof LL) return this.sensors.register(e, t);
		if (e.prototype instanceof EI) return this.plugins.register(e, t);
		throw Error("Invalid instance type");
	}
	unregister(e) {
		if (e instanceof KI) return e instanceof aL ? this.draggables.unregister(e.id, e) : e instanceof yL ? this.droppables.unregister(e.id, e) : () => {};
		if (e.prototype instanceof VL) return this.modifiers.unregister(e);
		if (e.prototype instanceof LL) return this.sensors.unregister(e);
		if (e.prototype instanceof EI) return this.plugins.unregister(e);
		throw Error("Invalid instance type");
	}
	destroy() {
		this.draggables.destroy(), this.droppables.destroy(), this.plugins.destroy(), this.sensors.destroy(), this.modifiers.destroy();
	}
}, UL, WL, GL, KL, qL, JL, YL, XL, ZL = [BP], QL, $L, eR, tR, nR, rR, iR, aR, oR, sR;
XL = [Y], YL = [Y], JL = [Y], qL = [Y], KL = [Y], GL = [BP], WL = [BP], UL = [BP];
var cR = class {
	constructor(e) {
		X(tR, 5, this), Q(this, QL), Q(this, $L), Q(this, eR, new lF(void 0, (e, t) => e && t ? e.equals(t) : e === t)), this.status = new FL(), Q(this, nR, X(tR, 8, this, !1)), X(tR, 11, this), Q(this, rR, X(tR, 12, this, null)), X(tR, 15, this), Q(this, iR, X(tR, 16, this, null)), X(tR, 19, this), Q(this, aR, X(tR, 20, this, null)), X(tR, 23, this), Q(this, oR, X(tR, 24, this, [])), X(tR, 27, this), this.position = new WF({
			x: 0,
			y: 0
		}), Q(this, sR, {
			x: 0,
			y: 0
		}), _I(this, QL, e);
	}
	get shape() {
		let { current: e, initial: t, previous: n } = gI(this, eR);
		return !e || !t ? null : {
			current: e,
			initial: t,
			previous: n
		};
	}
	set shape(e) {
		e ? gI(this, eR).current = e : gI(this, eR).reset();
	}
	get source() {
		let e = this.sourceIdentifier;
		if (e == null) return null;
		let t = gI(this, QL).registry.draggables.get(e);
		return t && _I(this, $L, t), t ?? gI(this, $L) ?? null;
	}
	get target() {
		let e = this.targetIdentifier;
		return e == null ? null : gI(this, QL).registry.droppables.get(e) ?? null;
	}
	get transform() {
		let { x: e, y: t } = this.position.delta, n = {
			x: e,
			y: t
		};
		for (let e of this.modifiers) n = e.apply(oI(aI({}, this.snapshot()), { transform: n }));
		return _I(this, sR, n), n;
	}
	snapshot() {
		return J(() => ({
			source: this.source,
			target: this.target,
			activatorEvent: this.activatorEvent,
			transform: gI(this, sR),
			shape: this.shape ? uF(this.shape) : null,
			position: uF(this.position),
			status: uF(this.status),
			canceled: this.canceled
		}));
	}
	reset() {
		UN(() => {
			this.status.set("idle"), this.sourceIdentifier = null, this.targetIdentifier = null, gI(this, eR).reset(), this.position.reset({
				x: 0,
				y: 0
			}), _I(this, sR, {
				x: 0,
				y: 0
			}), this.modifiers = [];
		});
	}
};
tR = lI(null), QL = /* @__PURE__ */ new WeakMap(), $L = /* @__PURE__ */ new WeakMap(), eR = /* @__PURE__ */ new WeakMap(), nR = /* @__PURE__ */ new WeakMap(), rR = /* @__PURE__ */ new WeakMap(), iR = /* @__PURE__ */ new WeakMap(), aR = /* @__PURE__ */ new WeakMap(), oR = /* @__PURE__ */ new WeakMap(), sR = /* @__PURE__ */ new WeakMap(), Z(tR, 2, "shape", ZL, cR), Z(tR, 4, "canceled", XL, cR, nR), Z(tR, 4, "activatorEvent", YL, cR, rR), Z(tR, 4, "sourceIdentifier", JL, cR, iR), Z(tR, 4, "targetIdentifier", qL, cR, aR), Z(tR, 4, "modifiers", KL, cR, oR), Z(tR, 2, "source", GL, cR), Z(tR, 2, "target", WL, cR), Z(tR, 2, "transform", UL, cR), pI(tR, cR);
var lR = { get rendering() {
	return Promise.resolve();
} };
function uR(e, t) {
	return typeof e == "function" ? e(t) : e ?? t;
}
var dR = class {
	constructor(e) {
		this.destroy = () => {
			this.dragOperation.status.idle || this.actions.stop({ canceled: !0 }), this.dragOperation.modifiers.forEach((e) => e.destroy()), this.registry.destroy(), this.collisionObserver.destroy();
		};
		let t = e ?? {}, n = uR(t.plugins, []), r = uR(t.sensors, []), i = uR(t.modifiers, []), a = t.renderer ?? lR, o = new xL(this), s = new HL(this);
		this.registry = s, this.monitor = o, this.renderer = a, this.actions = new IL(this), this.dragOperation = new cR(this), this.collisionObserver = new PI(this), this.plugins = [CL, ...n], this.modifiers = i, this.sensors = r;
		let { destroy: c } = this, l = HP(() => {
			let e = J(() => this.dragOperation.modifiers), t = this.modifiers;
			for (let n of e) t.includes(n) || n.destroy();
			this.dragOperation.modifiers = (this.dragOperation.source?.modifiers)?.map((e) => {
				let { plugin: t, options: n } = xI(e);
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
}, fR = (e) => {
	throw TypeError(e);
}, pR = (e, t, n) => t.has(e) || fR("Cannot " + n), $ = (e, t, n) => (pR(e, t, "read from private field"), t.get(e)), mR = (e, t, n) => t.has(e) ? fR("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), hR = (e, t, n, r) => (pR(e, t, "write to private field"), t.set(e, n), n), gR = (e, t, n) => (pR(e, t, "access private method"), n);
function _R(e) {
	return e ? e instanceof KeyframeEffect || "getKeyframes" in e && typeof e.getKeyframes == "function" : !1;
}
function vR(e, t) {
	let n = e.getAnimations(), r = null;
	for (let e of n) {
		if (e.playState !== "running") continue;
		let { effect: n } = e, i = (_R(n) ? n.getKeyframes() : []).filter(t);
		i.length > 0 && (r = [i[i.length - 1], e]);
	}
	return r;
}
function yR(e) {
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
function bR(e) {
	let t = Object.prototype.toString.call(e);
	return t === "[object Window]" || t === "[object global]";
}
function xR(e) {
	return "nodeType" in e;
}
function SR(e) {
	return e ? bR(e) ? e : xR(e) ? "defaultView" in e ? e.defaultView ?? window : e.ownerDocument?.defaultView ?? window : window : window;
}
function CR(e) {
	let { Document: t } = SR(e);
	return e instanceof t || "nodeType" in e && e.nodeType === Node.DOCUMENT_NODE;
}
function wR(e) {
	return !e || bR(e) ? !1 : e instanceof SR(e).HTMLElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("html");
}
function TR(e) {
	return e instanceof SR(e).SVGElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("svg");
}
function ER(e) {
	return e ? bR(e) ? e.document : xR(e) ? CR(e) ? e : wR(e) || TR(e) ? e.ownerDocument : document : document : document;
}
function DR(e) {
	let { documentElement: t } = ER(e), n = SR(e).visualViewport, r = n?.width ?? t.clientWidth, i = n?.height ?? t.clientHeight, a = n?.offsetTop ?? 0, o = n?.offsetLeft ?? 0;
	return {
		top: a,
		left: o,
		right: o + r,
		bottom: a + i,
		width: r,
		height: i
	};
}
function OR(e, t) {
	if (kR(e) && e.open === !1) return !1;
	let { overflow: n, overflowX: r, overflowY: i } = getComputedStyle(e);
	return n === "visible" && r === "visible" && i === "visible";
}
function kR(e) {
	return e.tagName === "DETAILS";
}
function AR(e, t = e.getBoundingClientRect(), n = 0) {
	let r = t, { ownerDocument: i } = e, a = i.defaultView ?? window, o = e.parentElement;
	for (; o && o !== i.documentElement;) {
		if (!OR(o)) {
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
function jR(e) {
	return {
		x: e.clientX,
		y: e.clientY
	};
}
var MR = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function NR(e = document, t = /* @__PURE__ */ new Set()) {
	if (t.has(e)) return [];
	t.add(e);
	let n = [e];
	for (let r of Array.from(e.querySelectorAll("iframe, frame"))) try {
		let e = r.contentDocument;
		e && !t.has(e) && n.push(...NR(e, t));
	} catch {}
	try {
		let r = e.defaultView;
		if (r && r !== window.top) {
			let i = r.parent;
			i && i.document && i.document !== e && n.push(...NR(i.document, t));
		}
	} catch {}
	return n;
}
function PR() {
	return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function FR() {
	let e = PR() ? window.visualViewport : null;
	return {
		x: e?.offsetLeft ?? 0,
		y: e?.offsetTop ?? 0
	};
}
function IR(e) {
	return !e || !xR(e) ? !1 : e instanceof SR(e).ShadowRoot;
}
function LR(e) {
	if (e && xR(e)) {
		let t = e.getRootNode();
		if (IR(t) || t instanceof Document) return t;
	}
	return ER(e);
}
function RR(e) {
	return e.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function zR(e) {
	let t = "input, textarea, select, canvas, [contenteditable]", n = e.cloneNode(!0), r = Array.from(e.querySelectorAll(t));
	return Array.from(n.querySelectorAll(t)).forEach((e, t) => {
		let n = r[t];
		BR(e) && BR(n) && (e.type !== "file" && (e.value = n.value), e.type === "radio" && e.name && (e.name = `Cloned__${e.name}`)), VR(e) && VR(n) && n.width > 0 && n.height > 0 && e.getContext("2d")?.drawImage(n, 0, 0);
	}), n;
}
function BR(e) {
	return "value" in e;
}
function VR(e) {
	return e.tagName === "CANVAS";
}
function HR(e, { x: t, y: n }) {
	let r = e.elementFromPoint(t, n);
	if (UR(r)) {
		let { contentDocument: e } = r;
		if (e) {
			let { left: i, top: a } = r.getBoundingClientRect();
			return HR(e, {
				x: t - i,
				y: n - a
			});
		}
	}
	return r;
}
function UR(e) {
	return e?.tagName === "IFRAME";
}
var WR = /* @__PURE__ */ new WeakMap();
function GR(e) {
	return e.closest("\n    input:not([disabled]),\n    select:not([disabled]),\n    textarea:not([disabled]),\n    button:not([disabled]),\n    a[href],\n    [contenteditable]:not([contenteditable=\"false\"])\n  ");
}
var KR = class {
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
function qR(e) {
	let t = e?.ownerDocument.defaultView;
	if (t && t.self !== t.parent) return t.frameElement;
}
function JR(e) {
	let t = /* @__PURE__ */ new Set(), n = qR(e);
	for (; n;) t.add(n), n = qR(n);
	return t;
}
function YR(e, t) {
	let n = setTimeout(e, t);
	return () => clearTimeout(n);
}
function XR(e, t) {
	let n = () => performance.now(), r, i;
	return function(...a) {
		let o = this;
		i ? (r?.(), r = YR(() => {
			e.apply(o, a), i = n();
		}, t - (n() - i))) : (e.apply(o, a), i = n());
	};
}
function ZR(e, t) {
	return e === t ? !0 : !e || !t ? !1 : e.top == t.top && e.left == t.left && e.right == t.right && e.bottom == t.bottom;
}
function QR(e, t = e.getBoundingClientRect()) {
	let { width: n, height: r } = AR(e, t);
	return n > 0 && r > 0;
}
var $R = MR ? ResizeObserver : class {
	observe() {}
	unobserve() {}
	disconnect() {}
}, ez, tz = class extends $R {
	constructor(e) {
		super((t) => {
			if (!$(this, ez)) {
				hR(this, ez, !0);
				return;
			}
			e(t, this);
		}), mR(this, ez, !1);
	}
};
ez = /* @__PURE__ */ new WeakMap();
var nz = Array.from({ length: 100 }, (e, t) => t / 100), rz = 75, iz, az, oz, sz, cz, lz, uz, dz, fz, pz, mz, hz = class {
	constructor(e, t, n = {
		debug: !1,
		skipInitial: !1
	}) {
		this.element = e, this.callback = t, mR(this, fz), this.disconnect = () => {
			var e, t, n;
			hR(this, uz, !0), (e = $(this, oz)) == null || e.disconnect(), (t = $(this, sz)) == null || t.disconnect(), $(this, cz).disconnect(), (n = $(this, lz)) == null || n.remove();
		}, mR(this, iz, !0), mR(this, az), mR(this, oz), mR(this, sz), mR(this, cz), mR(this, lz), mR(this, uz, !1), mR(this, dz, XR(() => {
			var e;
			let { element: t } = this;
			if ((e = $(this, sz)) == null || e.disconnect(), $(this, uz) || !$(this, iz) || !t.isConnected) return;
			let n = t.ownerDocument ?? document, { innerHeight: r, innerWidth: i } = n.defaultView ?? window, a = t.getBoundingClientRect(), { top: o, left: s, bottom: c, right: l } = AR(t, a), u = -Math.floor(o), d = -Math.floor(s), f = `${u}px ${-Math.floor(i - l)}px ${-Math.floor(r - c)}px ${d}px`;
			this.boundingClientRect = a, hR(this, sz, new IntersectionObserver((e) => {
				let [n] = e, { intersectionRect: r } = n;
				(n.intersectionRatio === 1 ? LF.intersectionRatio(r, AR(t)) : n.intersectionRatio) !== 1 && $(this, dz).call(this);
			}, {
				threshold: nz,
				rootMargin: f,
				root: n
			})), $(this, sz).observe(t), gR(this, fz, pz).call(this);
		}, rz)), this.boundingClientRect = e.getBoundingClientRect(), hR(this, iz, QR(e, this.boundingClientRect));
		let r = !0;
		this.callback = (e) => {
			r && (r = !1, n.skipInitial) || t(e);
		};
		let i = e.ownerDocument;
		n?.debug && (hR(this, lz, document.createElement("div")), $(this, lz).style.background = "rgba(0,0,0,0.15)", $(this, lz).style.position = "fixed", $(this, lz).style.pointerEvents = "none", i.body.appendChild($(this, lz))), hR(this, cz, new IntersectionObserver((t) => {
			var n, r;
			let { boundingClientRect: i, isIntersecting: a } = t[t.length - 1], { width: o, height: s } = i, c = $(this, iz);
			hR(this, iz, a), !(!o && !s) && (c && !a ? ((n = $(this, sz)) == null || n.disconnect(), this.callback(null), (r = $(this, oz)) == null || r.disconnect(), hR(this, oz, void 0), $(this, lz) && ($(this, lz).style.visibility = "hidden")) : $(this, dz).call(this), a && !$(this, oz) && (hR(this, oz, new tz($(this, dz))), $(this, oz).observe(e)));
		}, {
			threshold: nz,
			root: i
		})), $(this, iz) && !n.skipInitial && this.callback(this.boundingClientRect), $(this, cz).observe(e);
	}
};
iz = /* @__PURE__ */ new WeakMap(), az = /* @__PURE__ */ new WeakMap(), oz = /* @__PURE__ */ new WeakMap(), sz = /* @__PURE__ */ new WeakMap(), cz = /* @__PURE__ */ new WeakMap(), lz = /* @__PURE__ */ new WeakMap(), uz = /* @__PURE__ */ new WeakMap(), dz = /* @__PURE__ */ new WeakMap(), fz = /* @__PURE__ */ new WeakSet(), pz = function() {
	$(this, uz) || (gR(this, fz, mz).call(this), !ZR(this.boundingClientRect, $(this, az)) && (this.callback(this.boundingClientRect), hR(this, az, this.boundingClientRect)));
}, mz = function() {
	if ($(this, lz)) {
		let { top: e, left: t, width: n, height: r } = AR(this.element);
		$(this, lz).style.overflow = "hidden", $(this, lz).style.visibility = "visible", $(this, lz).style.top = `${Math.floor(e)}px`, $(this, lz).style.left = `${Math.floor(t)}px`, $(this, lz).style.width = `${Math.floor(n)}px`, $(this, lz).style.height = `${Math.floor(r)}px`;
	}
};
var gz = /* @__PURE__ */ new WeakMap(), _z = /* @__PURE__ */ new WeakMap();
function vz(e, t) {
	let n = gz.get(e);
	return n ||= {
		disconnect: new hz(e, (t) => {
			let n = gz.get(e);
			n && n.callbacks.forEach((e) => e(t));
		}, { skipInitial: !0 }).disconnect,
		callbacks: /* @__PURE__ */ new Set()
	}, n.callbacks.add(t), gz.set(e, n), () => {
		n.callbacks.delete(t), n.callbacks.size === 0 && (gz.delete(e), n.disconnect());
	};
}
function yz(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r of e) {
		let e = vz(r, t);
		n.add(e);
	}
	return () => n.forEach((e) => e());
}
function bz(e, t) {
	let n = e.ownerDocument;
	if (!_z.has(n)) {
		let e = new AbortController(), t = /* @__PURE__ */ new Set();
		document.addEventListener("scroll", (e) => t.forEach((t) => t(e)), {
			capture: !0,
			passive: !0,
			signal: e.signal
		}), _z.set(n, {
			disconnect: () => e.abort(),
			listeners: t
		});
	}
	let { listeners: r, disconnect: i } = _z.get(n) ?? {};
	return !r || !i ? () => {} : (r.add(t), () => {
		r.delete(t), r.size === 0 && (i(), _z.delete(n));
	});
}
var xz, Sz, Cz, wz, Tz = class {
	constructor(e, t, n) {
		this.callback = t, mR(this, xz), mR(this, Sz, !1), mR(this, Cz), mR(this, wz, XR((e) => {
			if (!$(this, Sz) && e.target && "contains" in e.target && typeof e.target.contains == "function") {
				for (let t of $(this, Cz)) if (e.target.contains(t)) {
					this.callback($(this, xz).boundingClientRect);
					break;
				}
			}
		}, rz));
		let r = JR(e), i = yz(r, t), a = bz(e, $(this, wz));
		hR(this, Cz, r), hR(this, xz, new hz(e, t, n)), this.disconnect = () => {
			$(this, Sz) || (hR(this, Sz, !0), i(), a(), $(this, xz).disconnect());
		};
	}
};
xz = /* @__PURE__ */ new WeakMap(), Sz = /* @__PURE__ */ new WeakMap(), Cz = /* @__PURE__ */ new WeakMap(), wz = /* @__PURE__ */ new WeakMap();
function Ez(e) {
	return "showPopover" in e && "hidePopover" in e && typeof e.showPopover == "function" && typeof e.hidePopover == "function";
}
function Dz(e) {
	try {
		Ez(e) && e.isConnected && e.hasAttribute("popover") && !e.matches(":popover-open") && e.showPopover();
	} catch {}
}
function Oz(e) {
	return !MR || !e ? !1 : e === ER(e).scrollingElement;
}
function kz(e) {
	let t = SR(e), n = Oz(e) ? DR(e) : yR(e), r = t.visualViewport, i = Oz(e) ? {
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
function Az(e, t) {
	let { isTop: n, isBottom: r, isLeft: i, isRight: a, position: o } = kz(e), { x: s, y: c } = t ?? {
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
var jz = class {
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
}, Mz = new jz((e) => {
	typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : e();
}), Nz = new jz((e) => setTimeout(e, 50)), Pz = /* @__PURE__ */ new Map(), Fz = Pz.clear.bind(Pz);
function Iz(e, t = !1) {
	if (!t) return Lz(e);
	let n = Pz.get(e);
	return n || (n = Lz(e), Pz.set(e, n), Nz.schedule(Fz), n);
}
function Lz(e) {
	return SR(e).getComputedStyle(e);
}
function Rz(e, t = Iz(e, !0)) {
	return t.position === "fixed" || t.position === "sticky";
}
function zz(e, t = Iz(e, !0)) {
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
var Bz = {
	excludeElement: !0,
	escapeShadowDOM: !0
};
function Vz(e, t = Bz) {
	let { limit: n, excludeElement: r, escapeShadowDOM: i } = t, a = /* @__PURE__ */ new Set();
	function o(t) {
		if (n != null && a.size >= n || !t) return a;
		if (CR(t) && t.scrollingElement != null && !a.has(t.scrollingElement)) return a.add(t.scrollingElement), a;
		if (i && IR(t)) return o(t.host);
		if (!wR(t)) return TR(t) ? o(t.parentElement) : a;
		if (a.has(t)) return a;
		let s = Iz(t, !0);
		if (r && t === e || zz(t, s) && a.add(t), Rz(t, s)) {
			let { scrollingElement: e } = t.ownerDocument;
			return e && a.add(e), a;
		}
		return o(t.parentNode);
	}
	return e ? o(e) : a;
}
function Hz(e, t = window.frameElement) {
	let n = {
		x: 0,
		y: 0,
		scaleX: 1,
		scaleY: 1
	};
	if (!e) return n;
	let r = qR(e);
	for (; r;) {
		if (r === t) return n;
		let e = yR(r), { x: i, y: a } = Uz(r, e);
		n.x += e.left, n.y += e.top, n.scaleX *= i, n.scaleY *= a, r = qR(r);
	}
	return n;
}
function Uz(e, t = yR(e)) {
	let n = Math.round(t.width), r = Math.round(t.height);
	if (wR(e)) return {
		x: n / e.offsetWidth,
		y: r / e.offsetHeight
	};
	let i = Iz(e, !0);
	return {
		x: (parseFloat(i.width) || n) / n,
		y: (parseFloat(i.height) || r) / r
	};
}
function Wz(e) {
	if (!e || e === "none") return null;
	let t = e.split(" "), n = parseFloat(t[0]), r = parseFloat(t[1]);
	return isNaN(n) && isNaN(r) ? null : {
		x: isNaN(n) ? r : n,
		y: isNaN(r) ? n : r
	};
}
function Gz(e) {
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
function Kz(e) {
	let { scale: t, transform: n, translate: r } = e, i = Wz(t), a = Gz(r), o = qz(n);
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
function qz(e) {
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
var Jz = /* @__PURE__ */ ((e) => (e[e.Idle = 0] = "Idle", e[e.Forward = 1] = "Forward", e[e.Reverse = -1] = "Reverse", e))(Jz || {}), Yz = {
	x: .2,
	y: .2
}, Xz = {
	x: 10,
	y: 10
};
function Zz(e, t, n, r = 25, i = Yz, a = Xz) {
	let { x: o, y: s } = t, { rect: c, isTop: l, isBottom: u, isLeft: d, isRight: f } = kz(e), p = Hz(e), m = Kz(Iz(e, !0)), h = m !== null && m?.scaleX < 0, g = m !== null && m?.scaleY < 0, _ = new LF(c.left * p.scaleX + p.x, c.top * p.scaleY + p.y, c.width * p.scaleX, c.height * p.scaleY), v = {
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
function Qz(e, { block: t = "nearest", inline: n = "nearest" } = {}) {
	if (!wR(e)) return;
	let r = Vz(e), i = [];
	for (let a of r) {
		if (!wR(a)) continue;
		let { top: r, left: o } = eB(e, a), s = r, c = o;
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
function $z(e) {
	let t = 0, n = 0, r = e;
	for (; r;) {
		t += r.offsetTop, n += r.offsetLeft;
		let e = r.offsetParent;
		if (!wR(e)) break;
		t += e.clientTop, n += e.clientLeft, r = e;
	}
	return {
		top: t,
		left: n
	};
}
function eB(e, t) {
	let n = $z(e), r = $z(t);
	return {
		top: n.top - r.top - t.clientTop,
		left: n.left - r.left - t.clientLeft
	};
}
function tB(e, t, n) {
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
function nB(e, t, n) {
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
function rB({ element: e, keyframes: t, options: n }) {
	return e.animate(t, n).finished;
}
var iB = new jz((e) => setTimeout(e, 0)), aB = /* @__PURE__ */ new Map(), oB = aB.clear.bind(aB);
function sB(e) {
	let t = e.ownerDocument, n = aB.get(t);
	if (n) return n;
	n = t.getAnimations(), aB.set(t, n), iB.schedule(oB);
	let r = n.filter((t) => _R(t.effect) && t.effect.target === e);
	return aB.set(e, r), n;
}
function cB(e, t) {
	let n = sB(e).filter((e) => {
		if (_R(e.effect)) {
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
var lB = class extends LF {
	constructor(e, t = {}) {
		let { frameTransform: n = Hz(e), ignoreTransforms: r, getBoundingClientRect: i = yR } = t, a = cB(e, {
			properties: [
				"transform",
				"translate",
				"scale",
				"width",
				"height"
			],
			isValidTarget: (t) => (t !== e || PR()) && t.contains(e)
		}), o = i(e), { top: s, left: c, width: l, height: u } = o, d, f = Iz(e), p = Kz(f), m = {
			x: p?.scaleX ?? 1,
			y: p?.scaleY ?? 1
		}, h = uB(e, f);
		a?.(), p && (d = nB(o, p, f.transformOrigin), (r || h) && (s = d.top, c = d.left, l = d.width, u = d.height));
		let g = {
			width: d?.width ?? l,
			height: d?.height ?? u
		};
		if (h && !r && d) {
			let e = tB(d, h, f.transformOrigin);
			s = e.top, c = e.left, l = e.width, u = e.height, m.x = h.scaleX, m.y = h.scaleY;
		}
		n && (r || (c *= n.scaleX, l *= n.scaleX, s *= n.scaleY, u *= n.scaleY), c += n.x, s += n.y), super(c, s, l, u), this.scale = m, this.intrinsicWidth = g.width, this.intrinsicHeight = g.height;
	}
};
function uB(e, t) {
	let n = e.getAnimations();
	if (!n.length) return null;
	let r, i, a, o = !1;
	for (let e of n) {
		if (e.playState !== "running") continue;
		let t = _R(e.effect) ? e.effect.getKeyframes() : [], n = t[t.length - 1];
		if (!n) continue;
		let { transform: s, translate: c, scale: l } = n;
		typeof s == "string" && s && (r = s, o = !0), typeof c == "string" && c && (i = c, o = !0), typeof l == "string" && l && (a = l, o = !0);
	}
	return o ? Kz({
		transform: r ?? t.transform,
		translate: i ?? t.translate,
		scale: a ?? t.scale
	}) : null;
}
function dB(e) {
	return "style" in e && typeof e.style == "object" && e.style !== null && "setProperty" in e.style && "removeProperty" in e.style && typeof e.style.setProperty == "function" && typeof e.style.removeProperty == "function";
}
var fB = class {
	constructor(e) {
		this.element = e, this.initial = /* @__PURE__ */ new Map();
	}
	set(e, t = "") {
		let { element: n } = this;
		if (dB(n)) for (let [r, i] of Object.entries(e)) {
			let e = `${t}${r}`;
			this.initial.has(e) || this.initial.set(e, n.style.getPropertyValue(e)), n.style.setProperty(e, typeof i == "string" ? i : `${i}px`);
		}
	}
	remove(e, t = "") {
		let { element: n } = this;
		if (dB(n)) for (let r of e) {
			let e = `${t}${r}`;
			n.style.removeProperty(e);
		}
	}
	reset() {
		let { element: e } = this;
		if (dB(e)) {
			for (let [t, n] of this.initial) e.style.setProperty(t, n);
			e.getAttribute("style") === "" && e.removeAttribute("style");
		}
	}
};
function pB(e) {
	return e ? e instanceof SR(e).Element || xR(e) && e.nodeType === Node.ELEMENT_NODE : !1;
}
function mB(e) {
	if (!e) return !1;
	let { KeyboardEvent: t } = SR(e.target);
	return e instanceof t;
}
function hB(e) {
	if (!e) return !1;
	let { PointerEvent: t } = SR(e.target);
	return e instanceof t;
}
function gB(e) {
	if (!pB(e)) return !1;
	let { tagName: t } = e;
	return t === "INPUT" || t === "TEXTAREA" || _B(e);
}
function _B(e) {
	return e.hasAttribute("contenteditable") && e.getAttribute("contenteditable") !== "false";
}
var vB = {};
function yB(e) {
	let t = vB[e] == null ? 0 : vB[e] + 1;
	return vB[e] = t, `${e}-${t}`;
}
//#endregion
//#region ../../node_modules/.pnpm/@dnd-kit+collision@0.5.0/node_modules/@dnd-kit/collision/dist/index.js
var bB = ({ dragOperation: e, droppable: t }) => {
	let n = e.position.current;
	if (!n) return null;
	let { id: r } = t;
	return t.shape && t.shape.containsPoint(n) ? {
		id: r,
		value: 1 / IF.distance(t.shape.center, n),
		type: TL.PointerIntersection,
		priority: wL.High
	} : null;
}, xB = ({ dragOperation: e, droppable: t }) => {
	let { shape: n } = e;
	if (!t.shape || !n?.current) return null;
	let r = n.current.intersectionArea(t.shape);
	if (r) {
		let { position: i } = e, a = IF.distance(t.shape.center, i.current), o = r / (n.current.area + t.shape.area - r) / a;
		return {
			id: t.id,
			value: o,
			type: TL.ShapeIntersection,
			priority: wL.Normal
		};
	}
	return null;
}, SB = (e) => bB(e) ?? xB(e), CB = Object.create, wB = Object.defineProperty, TB = Object.defineProperties, EB = Object.getOwnPropertyDescriptor, DB = Object.getOwnPropertyDescriptors, OB = Object.getOwnPropertySymbols, kB = Object.prototype.hasOwnProperty, AB = Object.prototype.propertyIsEnumerable, jB = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), MB = (e) => {
	throw TypeError(e);
}, NB = (e, t, n) => t in e ? wB(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, PB = (e, t) => {
	for (var n in t ||= {}) kB.call(t, n) && NB(e, n, t[n]);
	if (OB) for (var n of OB(t)) AB.call(t, n) && NB(e, n, t[n]);
	return e;
}, FB = (e, t) => TB(e, DB(t)), IB = (e, t) => wB(e, "name", {
	value: t,
	configurable: !0
}), LB = (e, t) => {
	var n = {};
	for (var r in e) kB.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && OB) for (var r of OB(e)) t.indexOf(r) < 0 && AB.call(e, r) && (n[r] = e[r]);
	return n;
}, RB = (e) => [
	,
	,
	,
	CB(e?.[jB("metadata")] ?? null)
], zB = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], BB = (e) => e !== void 0 && typeof e != "function" ? MB("Function expected") : e, VB = (e, t, n, r, i) => ({
	kind: zB[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? MB("Already initialized") : i.push(BB(e || null))
}), HB = (e, t) => NB(t, jB("metadata"), e[3]), UB = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, WB = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = zB[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && EB(d < 4 ? i : {
		get [n]() {
			return qB(this, a);
		},
		set [n](e) {
			return YB(this, a, e);
		}
	}, n));
	d ? p && d < 4 && IB(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : IB(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = VB(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => KB(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? qB : XB)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => YB(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? BB(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? MB("Object expected") : (BB(o = s.get) && (v.get = o), BB(o = s.set) && (v.set = o), BB(o = s.init) && g.unshift(o));
	return d || HB(e, i), v && wB(i, n, v), p ? d ^ 4 ? a : v : i;
}, GB = (e, t, n) => t.has(e) || MB("Cannot " + n), KB = (e, t) => Object(t) === t ? e.has(t) : MB("Cannot use the \"in\" operator on this value"), qB = (e, t, n) => (GB(e, t, "read from private field"), n ? n.call(e) : t.get(e)), JB = (e, t, n) => t.has(e) ? MB("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), YB = (e, t, n, r) => (GB(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), XB = (e, t, n) => (GB(e, t, "access private method"), n), ZB = {
	role: "button",
	roleDescription: "draggable"
}, QB = "dnd-kit-description", $B = "dnd-kit-announcement", eV = { draggable: "To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel." }, tV = {
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
function nV(e) {
	let t = e.tagName.toLowerCase();
	return [
		"input",
		"select",
		"textarea",
		"a",
		"button"
	].includes(t);
}
function rV(e, t) {
	let n = document.createElement("div");
	return n.id = e, n.style.setProperty("display", "none"), n.textContent = t, n;
}
function iV(e) {
	let t = document.createElement("div");
	return t.id = e, t.setAttribute("role", "status"), t.setAttribute("aria-live", "polite"), t.setAttribute("aria-atomic", "true"), t.style.setProperty("position", "fixed"), t.style.setProperty("width", "1px"), t.style.setProperty("height", "1px"), t.style.setProperty("margin", "-1px"), t.style.setProperty("border", "0"), t.style.setProperty("padding", "0"), t.style.setProperty("overflow", "hidden"), t.style.setProperty("clip", "rect(0 0 0 0)"), t.style.setProperty("clip-path", "inset(100%)"), t.style.setProperty("white-space", "nowrap"), t;
}
var aV = ["dragover", "dragmove"], oV = class extends EI {
	constructor(e, t) {
		super(e);
		let { id: n, idPrefix: { description: r = QB, announcement: i = $B } = {}, announcements: a = tV, screenReaderInstructions: o = eV, debounce: s = 500 } = t ?? {}, c = n ? `${r}-${n}` : yB(r), l = n ? `${i}-${n}` : yB(i), u, d, f, p, m = (e = p) => {
			!f || !e || f?.nodeValue !== e && (f.nodeValue = e);
		}, h = () => Mz.schedule(m), g = sV(h, s), _ = Object.entries(a).map(([e, t]) => this.manager.monitor.addEventListener(e, (n, r) => {
			let i = f;
			if (!i) return;
			let a = t?.(n, r);
			a && i.nodeValue !== a && (p = a, aV.includes(e) ? g() : (h(), g.cancel()));
		})), v = () => {
			let e = [];
			u?.isConnected || (u = rV(c, o.draggable), e.push(u)), d?.isConnected || (d = iV(l), f = document.createTextNode(""), d.appendChild(f), e.push(d)), e.length > 0 && document.body.append(...e);
		}, y = /* @__PURE__ */ new Set();
		function b() {
			for (let e of y) e();
		}
		this.registerEffect(() => {
			y.clear();
			for (let e of this.manager.registry.draggables.value) {
				let t = e.handle ?? e.element;
				if (t) {
					(!u || !d) && y.add(v), (!nV(t) || PR()) && !t.hasAttribute("tabindex") && y.add(() => t.setAttribute("tabindex", "0")), !t.hasAttribute("role") && t.tagName.toLowerCase() !== "button" && y.add(() => t.setAttribute("role", ZB.role)), t.hasAttribute("aria-roledescription") || y.add(() => t.setAttribute("aria-roledescription", ZB.roleDescription)), t.hasAttribute("aria-describedby") || y.add(() => t.setAttribute("aria-describedby", c));
					for (let n of ["aria-pressed", "aria-grabbed"]) {
						let r = String(e.isDragging);
						t.getAttribute(n) !== r && y.add(() => t.setAttribute(n, r));
					}
					let n = String(e.disabled);
					t.getAttribute("aria-disabled") !== n && y.add(() => t.setAttribute("aria-disabled", n));
				}
			}
			y.size > 0 && Mz.schedule(b);
		}), this.destroy = () => {
			super.destroy(), u?.remove(), d?.remove(), _.forEach((e) => e());
		};
	}
};
function sV(e, t) {
	let n, r = () => {
		clearTimeout(n), n = setTimeout(e, t);
	};
	return r.cancel = () => clearTimeout(n), r;
}
var cV = /* @__PURE__ */ new Map(), lV, uV, dV, fV, pV, mV, hV, gV, _V, vV, yV, bV, xV, SV = class extends (pV = DI, fV = [Y], dV = [BP], uV = [BP], lV = [BP], pV) {
	constructor(e, t) {
		super(e, t), UB(hV, 5, this), JB(this, _V), JB(this, mV, /* @__PURE__ */ new Set()), JB(this, gV, UB(hV, 8, this, /* @__PURE__ */ new Set())), UB(hV, 11, this), this.registerEffect(XB(this, _V, vV));
	}
	register(e) {
		return qB(this, mV).add(e), () => {
			qB(this, mV).delete(e);
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
		return LR(e?.element ?? null);
	}
	get targetRoot() {
		let { target: e } = this.manager.dragOperation;
		return LR(e?.element ?? null);
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
hV = RB(pV), mV = /* @__PURE__ */ new WeakMap(), gV = /* @__PURE__ */ new WeakMap(), _V = /* @__PURE__ */ new WeakSet(), vV = function() {
	let { roots: e } = this, t = [];
	for (let n of e) for (let e of qB(this, mV)) t.push(XB(this, _V, yV).call(this, n, e));
	return () => {
		for (let e of t) e();
	};
}, yV = function(e, t) {
	let n = cV.get(e);
	n || (n = /* @__PURE__ */ new Map(), cV.set(e, n));
	let r = n.get(t);
	if (!r) {
		let i = CR(e) ? XB(this, _V, bV).call(this, e, n, t) : XB(this, _V, xV).call(this, e, n, t);
		if (!i) return () => {};
		r = i, n.set(t, r);
	}
	r.refCount++;
	let i = !1;
	return () => {
		i || (i = !0, r.refCount--, r.refCount === 0 && r.cleanup());
	};
}, bV = function(e, t, n) {
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
			a.disconnect(), r.remove(), t.delete(n), t.size === 0 && cV.delete(e);
		}
	};
}, xV = function(e, t, n) {
	!("adoptedStyleSheets" in e && Array.isArray(e.adoptedStyleSheets)) && process.env.NODE_ENV !== "production" && console.error("Cannot inject styles: This browser doesn't support adoptedStyleSheets");
	let { CSSStyleSheet: r } = e.ownerDocument.defaultView ?? {};
	if (!r) return process.env.NODE_ENV !== "production" && console.error("Cannot inject styles: CSSStyleSheet constructor not available"), null;
	let i = new r();
	return i.replaceSync(n), e.adoptedStyleSheets.push(i), {
		refCount: 0,
		cleanup: () => {
			if (IR(e) && e.host?.isConnected) {
				let t = e.adoptedStyleSheets.indexOf(i);
				t !== -1 && e.adoptedStyleSheets.splice(t, 1);
			}
			t.delete(n), t.size === 0 && cV.delete(e);
		}
	};
}, WB(hV, 4, "additionalRoots", fV, SV, gV), WB(hV, 2, "sourceRoot", dV, SV), WB(hV, 2, "targetRoot", uV, SV), WB(hV, 2, "roots", lV, SV), HB(hV, SV), SV.configure = bI(SV);
var CV = SV, wV = class extends EI {
	constructor(e, t) {
		super(e, t), this.manager = e;
		let { cursor: n = "grabbing" } = t ?? {}, r = e.registry.plugins.get(CV)?.register(`* { cursor: ${n} !important; }`);
		if (r) {
			let e = this.destroy.bind(this);
			this.destroy = () => {
				r(), e();
			};
		}
	}
}, TV = "data-dnd-", EV = `${TV}dropping`, DV = "--dnd-", OV = `${TV}dragging`, kV = `${TV}placeholder`, AV = [
	OV,
	kV,
	"popover",
	"aria-pressed",
	"aria-grabbing"
], jV = ["view-transition-name"], MV = `
  :is(:root,:host) [${OV}] {
    position: fixed !important;
    pointer-events: none !important;
    touch-action: none;
    z-index: calc(infinity);
    will-change: translate;
    top: var(${DV}top, 0px) !important;
    left: var(${DV}left, 0px) !important;
    right: unset !important;
    bottom: unset !important;
    width: var(${DV}width, auto);
    max-width: var(${DV}width, auto);
    height: var(${DV}height, auto);
    max-height: var(${DV}height, auto);
    transform: var(${DV}transform, none) !important;
    transition: var(${DV}transition) !important;
  }

  :is(:root,:host) [${kV}] {
    transition: none;
  }

  :is(:root,:host) [${kV}='hidden'] {
    visibility: hidden;
  }

  [${OV}] * {
    pointer-events: none !important;
  }

  [${OV}]:not([${EV}]) {
    translate: var(${DV}translate) !important;
  }

  [${OV}][style*='${DV}scale'] {
    scale: var(${DV}scale) !important;
    transform-origin: var(${DV}transform-origin) !important;
  }

  @layer dnd-kit {
    :where([${OV}][popover]) {
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
  [${OV}]::backdrop, [${TV}overlay]:not([${OV}]) {
    display: none;
    visibility: hidden;
  }
`.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
function NV(e, t = "hidden") {
	return J(() => {
		let { element: n, manager: r } = e;
		if (!n || !r) return;
		let i = PV(n, r.registry.droppables), a = [], o = zR(n), { remove: s } = o;
		return FV(i, o, a), IV(o, t), o.remove = () => {
			a.forEach((e) => e()), s.call(o);
		}, o;
	});
}
function PV(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of t) if (r.element && (e === r.element || e.contains(r.element))) {
		let e = `${TV}${yB("dom-id")}`;
		r.element.setAttribute(e, ""), n.set(r, e);
	}
	return n;
}
function FV(e, t, n) {
	for (let [r, i] of e) {
		if (!r.element) continue;
		let e = `[${i}]`, a = t.matches(e) ? t : t.querySelector(e);
		if (r.element.removeAttribute(i), !a) continue;
		let o = r.element;
		r.proxy = a, a.removeAttribute(i), WR.set(o, a), n.push(() => {
			WR.delete(o), r.proxy = void 0;
		});
	}
}
function IV(e, t = "hidden") {
	e.setAttribute("inert", "true"), e.setAttribute("tab-index", "-1"), e.setAttribute("aria-hidden", "true"), e.setAttribute(kV, t);
}
function LV(e, t) {
	return e === t || qR(e) === qR(t);
}
function RV(e) {
	let { target: t } = e;
	"newState" in e && e.newState === "closed" && pB(t) && t.hasAttribute("popover") && requestAnimationFrame(() => Dz(t));
}
function zV(e) {
	return e.tagName === "TR";
}
function BV(e, t, n) {
	let r = new MutationObserver((r) => {
		let i = !1;
		for (let n of r) {
			if (n.target !== e) {
				i = !0;
				continue;
			}
			if (n.type !== "attributes") continue;
			let r = n.attributeName;
			if (r.startsWith("aria-") || AV.includes(r)) continue;
			let a = e.getAttribute(r);
			if (r === "style") {
				if (dB(e) && dB(t)) {
					let n = e.style;
					for (let e of Array.from(t.style)) n.getPropertyValue(e) === "" && t.style.removeProperty(e);
					for (let e of Array.from(n)) {
						if (jV.includes(e) || e.startsWith(DV)) continue;
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
function VV(e, t, n) {
	let r = new MutationObserver((r) => {
		for (let i of r) if (i.addedNodes.length !== 0) for (let r of Array.from(i.addedNodes)) {
			if (r.contains(e) && e.nextElementSibling !== t) {
				e.insertAdjacentElement("afterend", t), Dz(n);
				return;
			}
			if (r.contains(t) && t.previousElementSibling !== e) {
				t.insertAdjacentElement("beforebegin", e), Dz(n);
				return;
			}
		}
		e.isConnected && t.isConnected && e.nextElementSibling !== t && (e.insertAdjacentElement("afterend", t), Dz(n));
	});
	return r.observe(e.ownerDocument.body, {
		childList: !0,
		subtree: !0
	}), r;
}
function HV(e) {
	return new ResizeObserver(() => {
		var t;
		let n = new lB(e.placeholder, {
			frameTransform: e.frameTransform,
			ignoreTransforms: !0
		}), r = e.transformOrigin ?? {
			x: 1,
			y: 1
		}, i = (e.width - n.width) * r.x + e.delta.x, a = (e.height - n.height) * r.y + e.delta.y, o = FR();
		if (e.styles.set({
			width: n.width - e.widthOffset,
			height: n.height - e.heightOffset,
			top: e.top + a + o.y,
			left: e.left + i + o.x
		}, DV), (t = e.getElementMutationObserver()) == null || t.takeRecords(), zV(e.element) && zV(e.placeholder)) {
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
		e.dragOperation.shape = new LF(c * f.scaleX + f.x, l * f.scaleY + f.y, u * f.scaleX, d * f.scaleY);
	});
}
var UV = 250, WV = "ease";
function GV(e) {
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
	let { duration: r = UV, easing: i = WV } = n ?? {};
	Dz(e.feedbackElement);
	let [, a] = vR(e.feedbackElement, (e) => "translate" in e) ?? [];
	a?.pause();
	let o = e.placeholder ?? e.element, s = { frameTransform: LV(e.feedbackElement, o) ? null : void 0 }, c = new lB(e.feedbackElement, s), l = Gz(Iz(e.feedbackElement).translate) ?? e.translate, u = new lB(o, s), d = LF.delta(c, u, e.alignment), f = {
		x: l.x - d.x,
		y: l.y - d.y
	}, p = Math.round(c.intrinsicHeight) === Math.round(u.intrinsicHeight) ? {} : {
		minHeight: [`${c.intrinsicHeight}px`, `${u.intrinsicHeight}px`],
		maxHeight: [`${c.intrinsicHeight}px`, `${u.intrinsicHeight}px`]
	}, m = Math.round(c.intrinsicWidth) === Math.round(u.intrinsicWidth) ? {} : {
		minWidth: [`${c.intrinsicWidth}px`, `${u.intrinsicWidth}px`],
		maxWidth: [`${c.intrinsicWidth}px`, `${u.intrinsicWidth}px`]
	};
	e.styles.set({ transition: e.transition }, DV), e.feedbackElement.setAttribute(EV, ""), (t = e.getElementMutationObserver()) == null || t.takeRecords(), rB({
		element: e.feedbackElement,
		keyframes: FB(PB(PB({}, p), m), { translate: [`${l.x}px ${l.y}px 0`, `${f.x}px ${f.y}px 0`] }),
		options: {
			duration: RR(SR(e.feedbackElement)) ? 0 : e.moved || e.feedbackElement !== e.element ? r : 0,
			easing: i
		}
	}).then(() => {
		e.feedbackElement.removeAttribute(EV), a?.finish(), e.cleanup(), requestAnimationFrame(e.restoreFocus);
	});
}
var KV, qV, JV, YV, XV, ZV, QV, $V = class extends (qV = EI, KV = [Y], qV) {
	constructor(e, t) {
		super(e, t), JB(this, XV), JB(this, YV, UB(JV, 8, this)), UB(JV, 11, this), this.state = {
			initial: {},
			current: {}
		};
		let n = e.registry.plugins.get(CV), r = n?.register(MV);
		if (r) {
			let e = this.destroy.bind(this);
			this.destroy = () => {
				r(), e();
			};
		}
		this.registerEffect(XB(this, XV, ZV).bind(this, n)), this.registerEffect(XB(this, XV, QV));
	}
};
JV = RB(qV), YV = /* @__PURE__ */ new WeakMap(), XV = /* @__PURE__ */ new WeakSet(), ZV = function(e) {
	let { overlay: t } = this;
	if (!t || !e) return;
	let n = LR(t);
	if (n) return e.addRoot(n);
}, QV = function() {
	let { state: e, manager: t, options: n } = this, { dragOperation: r } = t, { position: i, source: a, status: o } = r;
	if (o.idle) {
		e.current = {}, e.initial = {};
		return;
	}
	if (!a) return;
	let { element: s } = a, c = a.pluginConfig($V), l = c?.feedback ?? n?.feedback ?? "default", u = typeof l == "function" ? l(a, t) : l;
	if (!s || u === "none" || !o.initialized || o.initializing) return;
	let { initial: d } = e, f = this.overlay ?? s, p = Hz(f), m = Hz(s), h = !LV(s, f), g = new lB(s, {
		frameTransform: h ? m : null,
		ignoreTransforms: !h
	}), _ = {
		x: m.scaleX / p.scaleX,
		y: m.scaleY / p.scaleY
	}, { width: v, height: y, top: b, left: x } = g;
	h && (v /= _.x, y /= _.y);
	let S = new fB(f), C = Iz(s), { transition: w, translate: T, boxSizing: ee, paddingBlockStart: te, paddingBlockEnd: E, paddingInlineStart: ne, paddingInlineEnd: D, borderInlineStartWidth: O, borderInlineEndWidth: k, borderBlockStartWidth: re, borderBlockEndWidth: ie } = C, A = w.split(",").filter((e) => !/^\s*(transform|translate|scale)\b/.test(e)).join(","), ae = Kz(C), oe = C.transform, se = u === "clone", ce = ee === "content-box", le = ce ? parseInt(ne) + parseInt(D) + parseInt(O) + parseInt(k) : 0, ue = ce ? parseInt(te) + parseInt(E) + parseInt(re) + parseInt(ie) : 0, j = u !== "move" && !this.overlay ? NV(a, se ? "clone" : "hidden") : null, de = J(() => mB(t.dragOperation.activatorEvent));
	if (!d.translate) {
		if (this.overlay && ae) d.translate = {
			x: ae.x,
			y: ae.y
		};
		else if (T !== "none") {
			let e = Gz(T);
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
	let he = {
		x: d.coordinates.x - me,
		y: d.coordinates.y - pe
	}, M = {
		width: (d.dimensions.width * d.frameTransform.scaleX - v * p.scaleX) * fe.x,
		height: (d.dimensions.height * d.frameTransform.scaleY - y * p.scaleY) * fe.y
	}, ge = {
		x: he.x / p.scaleX + M.width,
		y: he.y / p.scaleY + M.height
	}, _e = {
		left: x + ge.x,
		top: b + ge.y
	};
	f.setAttribute(OV, "true");
	let ve = J(() => r.transform), ye = d.translate ?? {
		x: 0,
		y: 0
	}, be = ve.x * p.scaleX + ye.x, xe = ve.y * p.scaleY + ye.y, Se = FR();
	S.set({
		width: v - le,
		height: y - ue,
		top: _e.top + Se.y,
		left: _e.left + Se.x,
		translate: `${be}px ${xe}px 0`,
		transform: this.overlay ? "none" : oe,
		transition: A ? `${A}, translate 0ms linear` : "translate 0ms linear",
		scale: h ? `${_.x} ${_.y}` : "",
		"transform-origin": `${fe.x * 100}% ${fe.y * 100}%`
	}, DV), j && (s.insertAdjacentElement("afterend", j), n?.rootElement && (typeof n.rootElement == "function" ? n.rootElement(a) : n.rootElement).appendChild(s)), Ez(f) && (f.hasAttribute("popover") || f.setAttribute("popover", "manual"), Dz(f), f.addEventListener("beforetoggle", RV));
	let N, Ce, we, Te = HV({
		placeholder: j,
		element: s,
		feedbackElement: f,
		frameTransform: p,
		transformOrigin: fe,
		width: v,
		height: y,
		top: b,
		left: x,
		widthOffset: le,
		heightOffset: ue,
		delta: ge,
		styles: S,
		dragOperation: r,
		getTranslate: () => e.current.translate,
		getElementMutationObserver: () => N,
		getSavedCellWidths: () => we,
		setSavedCellWidths: (e) => {
			we = e;
		}
	}), Ee = new lB(f);
	J(() => r.shape = Ee);
	let De = SR(f), Oe = (e) => {
		this.manager.actions.stop({ event: e });
	}, ke = RR(De);
	de && De.addEventListener("resize", Oe), J(() => a.status) === "idle" && requestAnimationFrame(() => a.status = "dragging"), j && (Te.observe(j), N = BV(s, j, se), Ce = VV(s, j, f));
	let Ae = t.dragOperation.source?.id, je = () => {
		if (!de || Ae == null) return;
		let e = t.registry.draggables.get(Ae), n = e?.handle ?? e?.element;
		wR(n) && n.focus();
	}, Me = () => {
		N?.disconnect(), Ce?.disconnect(), Te.disconnect(), De.removeEventListener("resize", Oe), Ez(f) && (f.removeEventListener("beforetoggle", RV), f.removeAttribute("popover")), f.removeAttribute(OV), S.reset();
		let t = () => {
			if (we && zV(s)) {
				let e = Array.from(s.cells);
				for (let [t, n] of e.entries()) n.style.width = we[t] ?? "";
			}
			a.status = "idle";
			let t = e.current.translate != null, n = r.status.dragging;
			j && (!n && t || j.parentElement !== f.parentElement) && f.isConnected && j.replaceWith(f), j?.remove();
		};
		f === this.overlay ? setTimeout(t, 0) : t();
	}, Ne = n?.dropAnimation, Pe = this, Fe = HP(() => {
		let { transform: t, status: i } = r;
		if (!(!t.x && !t.y && !e.current.translate) && i.dragging) {
			let i = d.translate ?? {
				x: 0,
				y: 0
			}, a = {
				x: t.x / p.scaleX + i.x,
				y: t.y / p.scaleY + i.y
			}, o = e.current.translate, s = J(() => r.modifiers), c = J(() => r.shape?.current), l = n?.keyboardTransition, u = de && !ke && l !== null ? `${l?.duration ?? 250}ms ${l?.easing ?? "cubic-bezier(0.25, 1, 0.5, 1)"}` : "0ms linear";
			if (S.set({
				transition: A ? `${A}, translate ${u}` : `translate ${u}`,
				translate: `${a.x}px ${a.y}px 0`
			}, DV), N?.takeRecords(), c && c !== Ee && o && !s.length) {
				let e = IF.delta(a, o);
				r.shape = LF.from(c.boundingRectangle).translate(e.x * p.scaleX, e.y * p.scaleY);
			} else r.shape = new lB(f);
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
				GV({
					source: a,
					element: s,
					feedbackElement: f,
					placeholder: j,
					translate: r,
					moved: i,
					transition: w,
					alignment: a.alignment,
					styles: S,
					animation: n ?? void 0,
					getElementMutationObserver: () => N,
					cleanup: Me,
					restoreFocus: je
				});
			});
		}
	});
	return () => {
		Me(), Fe();
	};
}, WB(JV, 4, "overlay", KV, $V, YV), HB(JV, $V), $V.configure = bI($V);
var eH = $V, tH = !0, nH = !1, rH, iH, aH, oH = (aH = [Y], Jz.Forward), sH, cH, lH;
iH = (rH = [Y], Jz.Reverse);
var uH = class {
	constructor() {
		JB(this, cH, UB(sH, 8, this, tH)), UB(sH, 11, this), JB(this, lH, UB(sH, 12, this, tH)), UB(sH, 15, this);
	}
	isLocked(e) {
		return e === Jz.Idle ? !1 : e == null ? this[Jz.Forward] === tH && this[Jz.Reverse] === tH : this[e] === tH;
	}
	unlock(e) {
		e !== Jz.Idle && (this[e] = nH);
	}
};
sH = RB(null), cH = /* @__PURE__ */ new WeakMap(), lH = /* @__PURE__ */ new WeakMap(), WB(sH, 4, oH, aH, uH, cH), WB(sH, 4, iH, rH, uH, lH), HB(sH, uH);
var dH = [Jz.Forward, Jz.Reverse], fH = class {
	constructor() {
		this.x = new uH(), this.y = new uH();
	}
	isLocked() {
		return this.x.isLocked() && this.y.isLocked();
	}
}, pH = class extends EI {
	constructor(e) {
		super(e);
		let t = eP(new fH()), n = null;
		this.signal = t, uP(() => {
			let { status: r } = e.dragOperation;
			if (!r.initialized) {
				n = null, t.value = new fH();
				return;
			}
			let { delta: i } = e.dragOperation.position;
			if (n) {
				let e = {
					x: mH(i.x, n.x),
					y: mH(i.y, n.y)
				}, r = t.peek();
				UN(() => {
					for (let t of qF) for (let n of dH) e[t] === n && r[t].unlock(n);
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
function mH(e, t) {
	return Math.sign(e - t);
}
var hH, gH, _H, vH, yH, bH, xH = class extends (gH = DI, hH = [Y], gH) {
	constructor(e) {
		super(e), JB(this, vH, UB(_H, 8, this, !1)), UB(_H, 11, this), JB(this, yH), JB(this, bH, () => {
			if (!qB(this, yH)) return;
			let { element: e, by: t } = qB(this, yH);
			t.y && (e.scrollTop += t.y), t.x && (e.scrollLeft += t.x);
		}), this.scroll = (e, t) => {
			if (this.disabled) return !1;
			let n = this.getScrollableElements();
			if (!n) return YB(this, yH, void 0), !1;
			let { position: r } = this.manager.dragOperation, i = r?.current;
			if (i) {
				let { by: r } = e ?? {}, a = r ? {
					x: SH(r.x),
					y: SH(r.y)
				} : void 0, o = a ? void 0 : this.scrollIntentTracker.current;
				if (o?.isLocked()) return !1;
				for (let e of n) {
					let n = Az(e, r);
					if (n.x || n.y) {
						let { speed: n, direction: s } = Zz(e, i, a, t?.acceleration, t?.threshold);
						if (o) for (let e of qF) o[e].isLocked(s[e]) && (n[e] = 0, s[e] = 0);
						if (s.x || s.y) {
							let { x: t, y: i } = r ?? s, a = t * n.x, o = i * n.y;
							if (a || o) {
								let t = qB(this, yH)?.by;
								if (this.autoScrolling && t && (t.x && !a || t.y && !o)) continue;
								return YB(this, yH, {
									element: e,
									by: {
										x: a,
										y: o
									}
								}), Mz.schedule(qB(this, bH)), !0;
							}
						}
					}
				}
			}
			return YB(this, yH, void 0), !1;
		};
		let t = null, n = null, r = RP(() => {
			let { position: n, source: r } = e.dragOperation;
			if (!n) return null;
			let i = HR(LR(r?.element), n.current);
			return i && (t = i), i ?? t;
		}), i = RP(() => {
			let t = r.value, { documentElement: i } = ER(t);
			if (!t || t === i) {
				let { target: t } = e.dragOperation, r = t?.element;
				if (r) {
					let e = Vz(r, { excludeElement: !1 });
					return n = e, e;
				}
			}
			if (t) {
				let e = Vz(t, { excludeElement: !1 });
				return this.autoScrolling && n && e.size < n?.size ? n : (n = e, e);
			}
			return n = null, null;
		}, zP);
		this.getScrollableElements = () => i.value, this.scrollIntentTracker = new pH(e), this.destroy = e.monitor.addEventListener("dragmove", (t) => {
			this.disabled || t.defaultPrevented || !mB(e.dragOperation.activatorEvent) || !t.by || this.scroll({ by: t.by }) && t.preventDefault();
		});
	}
};
_H = RB(gH), vH = /* @__PURE__ */ new WeakMap(), yH = /* @__PURE__ */ new WeakMap(), bH = /* @__PURE__ */ new WeakMap(), WB(_H, 4, "autoScrolling", hH, xH, vH), HB(_H, xH);
function SH(e) {
	return e > 0 ? Jz.Forward : e < 0 ? Jz.Reverse : Jz.Idle;
}
var CH = new class {
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
}), wH = 10, TH = class extends EI {
	constructor(e, t) {
		super(e, t);
		let n = e.registry.plugins.get(xH);
		if (!n) throw Error("AutoScroller plugin depends on Scroller plugin");
		this.destroy = uP(() => {
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
					let t = setInterval(() => CH.schedule(() => n.scroll(void 0, e)), wH);
					return () => {
						clearInterval(t);
					};
				}
				n.autoScrolling = !1;
			}
		});
	}
};
TH.configure = bI(TH);
var EH = TH, DH = {
	capture: !0,
	passive: !0
}, OH, kH = class extends DI {
	constructor(e) {
		super(e), JB(this, OH), this.handleScroll = () => {
			qB(this, OH) ?? YB(this, OH, setTimeout(() => {
				this.manager.collisionObserver.forceUpdate(!1), YB(this, OH, void 0);
			}, 50));
		};
		let { dragOperation: t } = this.manager;
		this.destroy = uP(() => {
			if (t.status.dragging) {
				let e = t.source?.element?.ownerDocument ?? document;
				return e.addEventListener("scroll", this.handleScroll, DH), () => {
					e.removeEventListener("scroll", this.handleScroll, DH);
				};
			}
		});
	}
};
OH = /* @__PURE__ */ new WeakMap();
var AH = "* { user-select: none !important; -webkit-user-select: none !important; }", jH = class extends EI {
	constructor(e) {
		super(e), this.manager = e;
		let t = e.registry.plugins.get(CV)?.register(AH);
		if (this.destroy = uP(() => {
			let { dragOperation: e } = this.manager;
			if (e.status.initialized) return MH(), document.addEventListener("selectionchange", MH, { capture: !0 }), () => {
				document.removeEventListener("selectionchange", MH, { capture: !0 });
			};
		}), t) {
			let e = this.destroy.bind(this);
			this.destroy = () => {
				t(), e();
			};
		}
	}
};
function MH() {
	var e;
	(e = document.getSelection()) == null || e.removeAllRanges();
}
var NH = Object.freeze({
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
}), PH, FH = class extends LL {
	constructor(e, t) {
		super(e), this.manager = e, this.options = t, JB(this, PH, []), this.listeners = new KR(), this.handleSourceKeyDown = (e, t, n) => {
			if (this.disabled || e.defaultPrevented || !pB(e.target) || t.disabled) return;
			let { keyboardCodes: r = NH.keyboardCodes, preventActivation: i = NH.preventActivation } = n ?? {};
			r.start.includes(e.code) && this.manager.dragOperation.status.idle && (i?.(e, t) || this.handleStart(e, t, n));
		};
	}
	bind(e, t = this.options) {
		return uP(() => {
			let n = e.handle ?? e.element, r = (n) => {
				mB(n) && this.handleSourceKeyDown(n, e, t);
			};
			if (n) return n.addEventListener("keydown", r), () => {
				n.removeEventListener("keydown", r);
			};
		});
	}
	handleStart(e, t, n) {
		let { element: r } = t;
		if (!r) throw Error("Source draggable does not have an associated element");
		e.preventDefault(), e.stopImmediatePropagation(), Qz(r);
		let { center: i } = new lB(r);
		if (this.manager.actions.start({
			event: e,
			coordinates: {
				x: i.x,
				y: i.y
			},
			source: t
		}).signal.aborted) return this.cleanup();
		this.sideEffects();
		let a = ER(r), o = [this.listeners.bind(a, [{
			type: "keydown",
			listener: (e) => this.handleKeyDown(e, t, n),
			options: { capture: !0 }
		}])];
		qB(this, PH).push(...o);
	}
	handleKeyDown(e, t, n) {
		let { keyboardCodes: r = NH.keyboardCodes } = n ?? {};
		if (LH(e, [...r.end, ...r.cancel])) {
			e.preventDefault();
			let t = LH(e, r.cancel);
			this.handleEnd(e, t);
			return;
		}
		LH(e, r.up) ? this.handleMove("up", e) : LH(e, r.down) && this.handleMove("down", e), LH(e, r.left) ? this.handleMove("left", e) : LH(e, r.right) && this.handleMove("right", e);
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
		}, a = this.options?.offset ?? NH.offset;
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
		let e = this.manager.registry.plugins.get(EH);
		e?.disabled === !1 && (e.disable(), qB(this, PH).push(() => {
			e.enable();
		}));
	}
	cleanup() {
		qB(this, PH).forEach((e) => e()), YB(this, PH, []);
	}
	destroy() {
		this.cleanup(), this.listeners.clear();
	}
};
PH = /* @__PURE__ */ new WeakMap(), FH.configure = bI(FH), FH.defaults = NH;
var IH = FH;
function LH(e, t) {
	return t.includes(e.code);
}
var RH, zH = class extends BL {
	constructor() {
		super(...arguments), JB(this, RH);
	}
	onEvent(e) {
		switch (e.type) {
			case "pointerdown":
				YB(this, RH, jR(e));
				break;
			case "pointermove":
				if (!qB(this, RH)) return;
				let { x: t, y: n } = jR(e), r = {
					x: t - qB(this, RH).x,
					y: n - qB(this, RH).y
				}, { tolerance: i } = this.options;
				if (i && GF(r, i)) {
					this.abort();
					return;
				}
				GF(r, this.options.value) && this.activate(e);
				break;
			case "pointerup": this.abort();
		}
	}
	abort() {
		YB(this, RH, void 0);
	}
};
RH = /* @__PURE__ */ new WeakMap();
var BH, VH, HH = class extends BL {
	constructor() {
		super(...arguments), JB(this, BH), JB(this, VH);
	}
	onEvent(e) {
		switch (e.type) {
			case "pointerdown":
				YB(this, VH, jR(e)), YB(this, BH, setTimeout(() => this.activate(e), this.options.value));
				break;
			case "pointermove":
				if (!qB(this, VH)) return;
				let { x: t, y: n } = jR(e);
				GF({
					x: t - qB(this, VH).x,
					y: n - qB(this, VH).y
				}, this.options.tolerance) && this.abort();
				break;
			case "pointerup": this.abort();
		}
	}
	abort() {
		qB(this, BH) && (clearTimeout(qB(this, BH)), YB(this, VH, void 0), YB(this, BH, void 0));
	}
};
BH = /* @__PURE__ */ new WeakMap(), VH = /* @__PURE__ */ new WeakMap();
var UH = class {};
UH.Delay = HH, UH.Distance = zH;
var WH = Object.freeze({
	activationConstraints(e, t) {
		let { pointerType: n, target: r } = e;
		if (!(n === "mouse" && pB(r) && (t.handle === r || t.handle?.contains(r)))) return n === "touch" ? [new UH.Delay({
			value: 250,
			tolerance: 5
		})] : gB(r) && !e.defaultPrevented ? [new UH.Delay({
			value: 200,
			tolerance: 0
		})] : [new UH.Delay({
			value: 200,
			tolerance: 10
		}), new UH.Distance({ value: 5 })];
	},
	preventActivation(e, t) {
		let { target: n } = e;
		if (n === t.element || n === t.handle || !pB(n) || t.handle?.contains(n)) return !1;
		let r = GR(n);
		return r !== t.element && !!r;
	}
}), GH, KH = class extends LL {
	constructor(e, t) {
		super(e), this.manager = e, this.options = t, JB(this, GH, /* @__PURE__ */ new Set()), this.listeners = new KR(), this.latest = {
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
		let { activationConstraints: r = WH.activationConstraints } = n ?? {};
		return typeof r == "function" ? r(e, t) : r;
	}
	bind(e, t = this.options) {
		return uP(() => {
			let n = new AbortController(), { signal: r } = n, i = (n) => {
				hB(n) && this.handlePointerDown(n, e, t);
			}, a = [e.handle ?? e.element];
			t?.activatorElements && (a = Array.isArray(t.activatorElements) ? t.activatorElements : t.activatorElements(e));
			for (let e of a) e && (QH(e.ownerDocument.defaultView), e.addEventListener("pointerdown", i, { signal: r }));
			return () => n.abort();
		});
	}
	handlePointerDown(e, t, n) {
		if (this.disabled || !e.isPrimary || e.button !== 0 || !pB(e.target) || t.disabled || JH(e) || !this.manager.dragOperation.status.idle) return;
		let { preventActivation: r = WH.preventActivation } = n ?? {};
		if (r?.(e, t)) return;
		let { target: i } = e, a = wR(i) && i.draggable && i.getAttribute("draggable") === "true", o = Hz(t.element), { x: s, y: c } = jR(e);
		this.initialCoordinates = {
			x: s * o.scaleX + o.x,
			y: c * o.scaleY + o.y
		};
		let l = this.activationConstraints(e, t, n);
		e.sensor = this;
		let u = new RL(l, (e) => this.handleStart(t, e));
		u.signal.onabort = () => this.handleCancel(e), u.onEvent(e), this.controller = u;
		let d = NR(), f = this.listeners.bind(d, [
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
				listener: a ? this.handleCancel : YH,
				options: { capture: !0 }
			}
		]);
		qB(this, GH).add(() => {
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
			let n = jR(e), r = Hz(t.element);
			n.x = n.x * r.scaleX + r.x, n.y = n.y * r.scaleY + r.y, e.preventDefault(), e.stopPropagation(), this.latest.event = e, this.latest.coordinates = n, Mz.schedule(this.handleMove);
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
		let i = ER(t.target).body;
		try {
			i.setPointerCapture(t.pointerId);
		} catch {
			this.handleCancel(t);
			return;
		}
		let a = pB(t.target) ? [t.target, i] : i, o = this.listeners.bind(a, [
			{
				type: "touchmove",
				listener: YH,
				options: { passive: !1 }
			},
			{
				type: "click",
				listener: YH
			},
			{
				type: "contextmenu",
				listener: YH
			},
			{
				type: "keydown",
				listener: this.handleKeyDown
			}
		]);
		qB(this, GH).add(o);
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
		}, qB(this, GH).forEach((e) => e()), qB(this, GH).clear();
	}
	destroy() {
		this.cleanup(), this.listeners.clear();
	}
};
GH = /* @__PURE__ */ new WeakMap(), KH.configure = bI(KH), KH.defaults = WH;
var qH = KH;
function JH(e) {
	return "sensor" in e;
}
function YH(e) {
	e.preventDefault();
}
function XH() {}
var ZH = /* @__PURE__ */ new WeakSet();
function QH(e) {
	!e || ZH.has(e) || (e.addEventListener("touchmove", XH, {
		capture: !1,
		passive: !1
	}), ZH.add(e));
}
var $H = {
	modifiers: [],
	plugins: [
		oV,
		EH,
		wV,
		eH,
		jH
	],
	sensors: [qH, IH]
}, eU = class extends dR {
	constructor(e = {}) {
		let t = uR(e.plugins, $H.plugins), n = uR(e.sensors, $H.sensors), r = uR(e.modifiers, $H.modifiers);
		super(FB(PB({}, e), {
			plugins: [
				kH,
				xH,
				CV,
				...t
			],
			sensors: n,
			modifiers: r
		}));
	}
}, tU, nU, rU, iU, aU, oU, sU = class extends (rU = aL, nU = [Y], tU = [Y], rU) {
	constructor(e, t) {
		var n = e, { element: r, effects: i = () => [], handle: a } = n, o = LB(n, [
			"element",
			"effects",
			"handle"
		]);
		super(PB({ effects: () => [...i(), () => {
			let { manager: e } = this;
			if (!e) return;
			let t = (this.sensors?.map(xI) ?? [...e.sensors]).map((t) => {
				let n = t instanceof LL ? t : e.registry.register(t.plugin), r = t instanceof LL ? void 0 : t.options;
				return n.bind(this, r);
			});
			return function() {
				t.forEach((e) => e());
			};
		}] }, o), t), JB(this, aU, UB(iU, 8, this)), UB(iU, 11, this), JB(this, oU, UB(iU, 12, this)), UB(iU, 15, this), this.element = r, this.handle = a;
	}
};
iU = RB(rU), aU = /* @__PURE__ */ new WeakMap(), oU = /* @__PURE__ */ new WeakMap(), WB(iU, 4, "handle", nU, sU, aU), WB(iU, 4, "element", tU, sU, oU), HB(iU, sU);
var cU, lU, uU, dU, fU, pU, mU, hU, gU, _U, vU = class extends (uU = yL, lU = [Y], cU = [Y], uU) {
	constructor(e, t) {
		var n = e, { element: r, effects: i = () => [] } = n, a = LB(n, ["element", "effects"]);
		let { collisionDetector: o = SB } = a, s = (e) => {
			let { manager: t, element: n } = this;
			if (!n || e === null) {
				this.shape = void 0;
				return;
			}
			if (!t) return;
			let r = new lB(n), i = J(() => this.shape);
			return r && i?.equals(r) ? i : (this.shape = r, r);
		}, c = eP(!1);
		super(FB(PB({}, a), {
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
						let t = new Tz(e, s);
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
		}), t), JB(this, gU), JB(this, fU, UB(dU, 8, this)), UB(dU, 11, this), JB(this, _U, UB(dU, 12, this)), UB(dU, 15, this), this.element = r, this.refreshShape = () => s();
	}
	set element(e) {
		YB(this, gU, e, hU);
	}
	get element() {
		return this.proxy ?? qB(this, gU, mU);
	}
};
dU = RB(uU), fU = /* @__PURE__ */ new WeakMap(), gU = /* @__PURE__ */ new WeakSet(), _U = /* @__PURE__ */ new WeakMap(), pU = WB(dU, 20, "#element", lU, gU, fU), mU = pU.get, hU = pU.set, WB(dU, 4, "proxy", cU, vU, _U), HB(dU, vU);
//#endregion
//#region ../../node_modules/.pnpm/@dnd-kit+react@0.5.0_react-dom@19.2.8_react@19.2.8/node_modules/@dnd-kit/react/utilities.js
function yU(e) {
	return typeof e == "object" && !!e && "current" in e;
}
function bU(e) {
	if (e != null) return yU(e) ? e.current ?? void 0 : e;
}
//#endregion
//#region ../../node_modules/.pnpm/@dnd-kit+react@0.5.0_react-dom@19.2.8_react@19.2.8/node_modules/@dnd-kit/react/hooks.js
var xU = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? x : _;
function SU() {
	let e = T(0)[1];
	return h(() => {
		e((e) => e + 1);
	}, [e]);
}
function CU(e, t = !1) {
	let n = w(e.peek()), r = w(!1), i = SU();
	return xU(() => uP(() => {
		let a = n.current, o = e.value;
		if (a !== o) {
			if (n.current = o, !r.current) return;
			t ? Pe(i) : i();
		}
	}), [
		e,
		t,
		i
	]), { get value() {
		return r.current = !0, e.peek();
	} };
}
function wU(e, t = [], n = !1) {
	let r = w(e);
	return r.current = e, CU(S(() => RP(() => r.current()), t), n);
}
function TU(e, t) {
	let n = w(/* @__PURE__ */ new Map()), r = SU();
	return xU(() => {
		if (!e) {
			n.current.clear();
			return;
		}
		return uP(() => {
			let i = !1, a = !1;
			for (let r of n.current) {
				let [o] = r, s = J(() => r[1]), c = e[o];
				s !== c && (i = !0, n.current.set(o, c), a = t?.(o, s, c) ?? !1);
			}
			i && (a ? queueMicrotask(() => Pe(r)) : r());
		});
	}, [e]), S(() => e && new Proxy(e, { get(e, t) {
		let r = e[t];
		return n.current.set(t, r), r;
	} }), [e]);
}
function EU(e) {
	let t = w(e);
	return xU(() => {
		t.current = e;
	}, [e]), t;
}
function DU(e, t, n = _, r = Object.is) {
	let i = w(e);
	n(() => {
		let n = i.current;
		r(e, n) || (i.current = e, t(e, n));
	}, [t, e]);
}
function OU(e, t) {
	let n = w(bU(e));
	xU(() => {
		let r = bU(e);
		r !== n.current && (n.current = r, t(r));
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@dnd-kit+react@0.5.0_react-dom@19.2.8_react@19.2.8/node_modules/@dnd-kit/react/index.js
var kU = Object.defineProperty, AU = Object.defineProperties, jU = Object.getOwnPropertyDescriptors, MU = Object.getOwnPropertySymbols, NU = Object.prototype.hasOwnProperty, PU = Object.prototype.propertyIsEnumerable, FU = (e, t, n) => t in e ? kU(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, IU = (e, t) => {
	for (var n in t ||= {}) NU.call(t, n) && FU(e, n, t[n]);
	if (MU) for (var n of MU(t)) PU.call(t, n) && FU(e, n, t[n]);
	return e;
}, LU = (e, t) => AU(e, jU(t)), RU = (e, t) => {
	var n = {};
	for (var r in e) NU.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && MU) for (var r of MU(e)) t.indexOf(r) < 0 && PU.call(e, r) && (n[r] = e[r]);
	return n;
}, zU = new eU(), BU = l(zU), VU = p(d(({ children: e }, t) => {
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
	return xU(() => {
		var e;
		(e = a.current) == null || e.call(a), i.current = null;
	}, [e, n]), y(t, () => o), null;
})), HU = [void 0, zP];
function UU(e) {
	var t = e, { children: n, onCollision: r, onBeforeDragStart: i, onDragStart: a, onDragMove: o, onDragOver: s, onDragEnd: c } = t, l = RU(t, [
		"children",
		"onCollision",
		"onBeforeDragStart",
		"onDragStart",
		"onDragMove",
		"onDragOver",
		"onDragEnd"
	]);
	let u = w(null), { plugins: d, modifiers: f, sensors: p } = l, m = uR(d, $H.plugins), h = uR(p, $H.sensors), g = uR(f, $H.modifiers), v = EU(i), y = EU(a), b = EU(s), x = EU(o), S = EU(c), C = EU(r), T = WU(() => l.manager ?? new eU(l));
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
	}, [T]), DU(m, () => T && (T.plugins = m), ...HU), DU(h, () => T && (T.sensors = h), ...HU), DU(g, () => T && (T.modifiers = g), ...HU), /* @__PURE__ */ (0, R.jsxs)(BU.Provider, {
		value: T,
		children: [/* @__PURE__ */ (0, R.jsx)(VU, {
			ref: u,
			children: n
		}), n]
	});
}
function WU(e) {
	let t = w(null);
	return t.current ||= e(), b(() => () => t.current?.destroy(), []), t.current;
}
function GU() {
	return g(BU);
}
function KU(e) {
	let t = GU() ?? void 0, [n] = T(() => e(t));
	return n.manager !== t && (n.manager = t), xU(n.register, [t, n]), n;
}
function qU(e) {
	let { disabled: t, data: n, element: r, handle: i, id: a, modifiers: o, sensors: s, plugins: c } = e, l = KU((t) => new sU(LU(IU({}, e), {
		register: !1,
		handle: bU(i),
		element: bU(r)
	}), t)), u = TU(l, JU);
	return DU(a, () => l.id = a), OU(i, (e) => l.handle = e), OU(r, (e) => l.element = e), DU(n, () => n && (l.data = n)), DU(t, () => l.disabled = t === !0), DU(s, () => l.sensors = s, void 0, zP), DU(o, () => l.modifiers = o, void 0, zP), DU(c, () => l.plugins = c, void 0, zP), DU(e.alignment, () => l.alignment = e.alignment), {
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
function JU(e, t, n) {
	return !!(e === "isDragSource" && !n && t);
}
function YU({ children: e, className: t, dropAnimation: n, style: r, tag: i, disabled: a }) {
	let o = w(null), s = GU(), c = wU(() => s?.dragOperation.source, [s]).value ?? null, l = typeof a == "function" ? a(c) : a;
	_(() => {
		if (!o.current || !s || l) return;
		let e = s.plugins.find((e) => e instanceof eH);
		if (e) return e.overlay = o.current, () => {
			e.overlay = void 0;
		};
	}, [s, l]), _(() => {
		if (!s) return;
		let e = s.plugins.find((e) => e instanceof eH);
		if (e) return e.dropAnimation = n, () => {
			e.dropAnimation = void 0;
		};
	}, [s, n]);
	let d = S(() => {
		if (!s) return null;
		let e = new Proxy(s.registry, { get(e, t) {
			return t === "register" || t === "unregister" ? XU : e[t];
		} });
		return new Proxy(s, { get(t, n) {
			return n === "registry" ? e : t[n];
		} });
	}, [s]);
	return /* @__PURE__ */ (0, R.jsx)(BU.Provider, {
		value: d,
		children: u(i || "div", {
			ref: o,
			className: t,
			style: r,
			"data-dnd-overlay": !0
		}, f())
	});
	function f() {
		return !c || l ? null : typeof e == "function" ? /* @__PURE__ */ (0, R.jsx)(ZU, {
			source: c,
			children: e
		}) : e;
	}
}
function XU() {
	return () => {};
}
function ZU({ children: e, source: t }) {
	return e(TU(t));
}
var QU = Object.create, $U = Object.defineProperty, eW = Object.getOwnPropertyDescriptor, tW = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), nW = (e) => {
	throw TypeError(e);
}, rW = (e, t, n) => t in e ? $U(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, iW = (e) => [
	,
	,
	,
	QU(e?.[tW("metadata")] ?? null)
], aW = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], oW = (e) => e !== void 0 && typeof e != "function" ? nW("Function expected") : e, sW = (e, t, n, r, i) => ({
	kind: aW[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? nW("Already initialized") : i.push(oW(e || null))
}), cW = (e, t) => rW(t, tW("metadata"), e[3]), lW = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) a[i].call(n);
	return r;
}, uW = (e, t, n, r, i, a) => {
	for (var o, s, c, l, u = t & 7, d = !1, f = !1, p = 2, m = aW[u + 5], h = e[p] || (e[p] = []), g = (i = i.prototype, eW(i, n)), _ = r.length - 1; _ >= 0; _--) c = sW(u, n, s = {}, e[3], h), c.static = d, c.private = f, l = c.access = { has: (e) => n in e }, l.get = (e) => e[n], o = (0, r[_])(g[m], c), s._ = 1, oW(o) && (g[m] = o);
	return g && $U(i, n, g), i;
}, dW = (e, t, n) => t.has(e) || nW("Cannot " + n), fW = (e, t, n) => (dW(e, t, "read from private field"), t.get(e)), pW = (e, t, n) => t.has(e) ? nW("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), mW = (e, t, n, r) => (dW(e, t, "write to private field"), t.set(e, n), n), hW = class e {
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
}, gW, _W, vW, yW, bW, xW = class extends (vW = lF, _W = [BP], gW = [BP], vW) {
	constructor(e) {
		let t = hW.from(e);
		super(t, (e, t) => hW.equals(e, t)), lW(bW, 5, this), pW(this, yW, 0), this.velocity = {
			x: 0,
			y: 0
		};
	}
	get delta() {
		return hW.delta(this.current, this.initial);
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
		let { current: t } = this, n = hW.from(e), r = {
			x: n.x - t.x,
			y: n.y - t.y
		}, i = Date.now(), a = i - fW(this, yW), o = (e) => Math.round(e / a * 100);
		UN(() => {
			mW(this, yW, i), this.velocity = {
				x: o(r.x),
				y: o(r.y)
			}, super.current = n;
		});
	}
	reset(e = this.defaultValue) {
		super.reset(hW.from(e)), this.velocity = {
			x: 0,
			y: 0
		};
	}
};
bW = iW(vW), yW = /* @__PURE__ */ new WeakMap(), uW(bW, 2, "delta", _W, xW), uW(bW, 2, "direction", gW, xW), cW(bW, xW);
var SW = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(SW || {});
Object.values(SW);
var CW = ({ dragOperation: e, droppable: t }) => {
	let n = e.position.current;
	if (!n) return null;
	let { id: r } = t;
	return t.shape && t.shape.containsPoint(n) ? {
		id: r,
		value: 1 / hW.distance(t.shape.center, n),
		type: TL.PointerIntersection,
		priority: wL.High
	} : null;
}, wW = ({ dragOperation: e, droppable: t }) => {
	let { shape: n } = e;
	if (!t.shape || !n?.current) return null;
	let r = n.current.intersectionArea(t.shape);
	if (r) {
		let { position: i } = e, a = hW.distance(t.shape.center, i.current), o = r / (n.current.area + t.shape.area - r) / a;
		return {
			id: t.id,
			value: o,
			type: TL.ShapeIntersection,
			priority: wL.Normal
		};
	}
	return null;
}, TW = (e) => CW(e) ?? wW(e);
function EW(e) {
	let { collisionDetector: t, data: n, disabled: r, element: i, id: a, accept: o, type: s } = e, c = KU((t) => new vU(LU(IU({}, e), {
		register: !1,
		element: bU(i)
	}), t)), l = TU(c);
	return DU(a, () => c.id = a), OU(i, (e) => c.element = e), DU(o, () => c.accept = o, void 0, zP), DU(t, () => c.collisionDetector = t ?? TW), DU(n, () => n && (c.data = n)), DU(r, () => c.disabled = r === !0), DU(s, () => c.type = s), {
		droppable: l,
		get isDropTarget() {
			return l.isDropTarget;
		},
		ref: h((e) => {
			!e && c.element?.isConnected && !c.manager?.dragOperation.status.idle || (c.element = e ?? void 0);
		}, [c])
	};
}
function DW() {
	let e = GU(), t = wU(() => e?.dragOperation.source, [e]), n = wU(() => e?.dragOperation.target, [e]);
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
var OW = {
	ARROW_UP: "ArrowUp",
	ARROW_DOWN: "ArrowDown",
	HOME: "Home",
	END: "End",
	PAGE_UP: "PageUp",
	PAGE_DOWN: "PageDown",
	ENTER: "Enter",
	SPACE: "Space"
};
function kW(e) {
	return e.ctrlKey || e.metaKey || e.shiftKey || e.altKey;
}
function AW(e) {
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
function jW(e, t) {
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
	let ne = h((e, t) => {
		let r = Math.max(0, Math.min(e, n.length - 1));
		if (n[r]) {
			let e = i(n[r]);
			b(e);
			let a = u ? u(r) : r, o = typeof p == "function" ? p(r) : p ?? 0;
			g.current?.scrollIntoView({
				index: a,
				align: t,
				behavior: "auto",
				...o > 0 ? { calculateViewLocation: AW(o) } : {}
			});
		}
	}, [
		n,
		i,
		u,
		p
	]), D = h((e, t, i) => {
		let a = n.length, o;
		for (let i = e; t ? i < a : i >= 0; i += t ? 1 : -1) if (r(n[i])) {
			o = i;
			break;
		}
		o !== void 0 && ne(o, i);
	}, [
		ne,
		n,
		r
	]), O = h((e) => {
		let t = y ? ee.get(y) : void 0, r = !1;
		if (!e || kW(e)) {
			o?.(e);
			return;
		}
		if (s) {
			o?.(e);
			return;
		}
		if (e.code === OW.ARROW_UP && t !== void 0) D(t - 1, !1), r = !0;
		else if (e.code === OW.ARROW_DOWN && t !== void 0) D(t + 1, !0), r = !0;
		else if (e.code === OW.HOME) ne(0), r = !0;
		else if (e.code === OW.END) ne(n.length - 1), r = !0;
		else if (e.code === OW.PAGE_DOWN && x && t !== void 0) {
			let e = x.endIndex - x.startIndex;
			D(Math.min(t + e, n.length - 1), !0, "start"), r = !0;
		} else if (e.code === OW.PAGE_UP && x && t !== void 0) {
			let e = x.endIndex - x.startIndex;
			D(Math.max(t - e, 0), !1, "start"), r = !0;
		}
		if (r) {
			if (v.current instanceof HTMLElement) {
				let e = document.activeElement;
				e && e !== v.current && v.current.contains(e) && v.current.focus({ preventScroll: !0 });
			}
			e.stopPropagation(), e.preventDefault();
		} else o?.(e);
	}, [
		ne,
		D,
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
	}, [i]), ie = h((e) => {
		if (e?.currentTarget !== v.current || typeof y != "string") return;
		E(!0);
		let t = ee.get(y);
		t !== void 0 && x && (t < x.startIndex || t > x.endIndex) && ne(t), e.stopPropagation(), e.preventDefault();
	}, [
		ee,
		x,
		ne,
		y
	]), A = h((e) => {
		e.currentTarget.contains(e.relatedTarget) || E(!1);
	}, []), ae = S(() => ({
		tabIndexKey: y,
		focused: te,
		context: e.context || {}
	}), [
		y,
		te,
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
		scrollerRef: k,
		onKeyDown: O,
		onFocus: ie,
		onBlur: A,
		rangeChanged: oe,
		onFocusForGetItemComponent: re,
		context: ae
	};
}
//#endregion
//#region src/core/VirtualizedList/FlatVirtualizedList/FlatVirtualizedList.tsx
function MW(e) {
	let { getItemComponent: t, scrollHandleRef: n, ...r } = e, { onFocusForGetItemComponent: i, ...a } = jW(r, n), o = h((e, n, r) => t(e, n, r, i), [t, i]);
	return /* @__PURE__ */ (0, R.jsx)(Me, {
		itemContent: o,
		data: e.items,
		...a
	});
}
var NW = {
	stickyRoot: "_stickyRoot_3tgsb_12",
	stickyHeader: "_stickyHeader_3tgsb_32",
	stickyRow: "_stickyRow_3tgsb_23"
}, PW = o.forwardRef(function({ item: e, context: t, children: n, ...r }, i) {
	let a = typeof e == "object" && !!e && "header" in e;
	return /* @__PURE__ */ (0, R.jsx)("div", {
		...r,
		ref: i,
		className: a ? NW.stickyRow : void 0,
		children: n
	});
});
function FW(e) {
	let { getItemComponent: t, groups: n, getGroupHeaderComponent: r, isItemFocusable: i, isGroupHeaderFocusable: a, getItemKey: o, getHeaderKey: s, scrollHandleRef: c, renderStickyHeader: l, ...u } = e, [d, f] = T(0), p = S(() => n.flatMap((e) => [{ header: e.header }, ...e.items.map((e) => ({ item: e }))]), [n]), m = S(() => n.flatMap((e, t) => Array(1 + e.items.length).fill(t)), [n]), g = h((e) => {
		let t = p[e];
		return t && "header" in t ? 0 : d;
	}, [p, d]), v = h((e) => "header" in e ? s(e.header) : o(e.item), [s, o]), y = h((e) => "header" in e ? a(e.header) : i(e.item), [a, i]), { onFocusForGetItemComponent: b, scrollerRef: C, ...ee } = jW({
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
	]), D = w([]), O = w(null), k = w(null), [re, ie] = T(0), A = h(() => {
		let e = k.current;
		if (!e || m.length === 0) return;
		let t = e.scrollTop, n = D.current, r = n.length ? n[0].index : 0, i = n.length ? n[0].offset : 0;
		for (let e of n) e.offset <= t + 1 && e.offset > i && (i = e.offset, r = e.index);
		let a = m[r] ?? 0;
		ie((e) => e === a ? e : a);
	}, [m]), ae = h((e) => {
		D.current = e.map((e) => ({
			index: e.index,
			offset: e.offset
		})), A();
	}, [A]), oe = h((e) => {
		C?.(e), k.current = e instanceof HTMLElement ? e : null;
	}, [C]), se = h((e) => {
		let t = k.current;
		t && (t.scrollTop += e.deltaY * (e.deltaMode === 1 ? 16 : 1));
	}, []);
	x(() => {
		O.current && f(O.current.offsetHeight);
	}, [re, n]), _(() => {
		A();
	}, [n, A]);
	let ce = Math.min(re, n.length - 1), le = l && ce >= 0 ? l(ce, n[ce].header, ee.context) : null;
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: NW.stickyRoot,
		children: [le != null && /* @__PURE__ */ (0, R.jsx)("div", {
			className: NW.stickyHeader,
			ref: O,
			onWheel: se,
			children: le
		}), /* @__PURE__ */ (0, R.jsx)(Me, {
			itemContent: ne,
			data: p,
			...ee,
			components: { Item: PW },
			scrollerRef: oe,
			itemsRendered: ae,
			onScroll: A
		})]
	});
}
//#endregion
//#region src/core/VirtualizedList/accessbility.ts
function IW(e, t) {
	switch (e) {
		case "listbox": return { role: "listbox" };
		case "treegrid": return {
			role: "treegrid",
			"aria-rowcount": t
		};
	}
}
function LW(e, t, n) {
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
function RW(e, t, n) {
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
var zW = Object.defineProperty, BW = Object.defineProperties, VW = Object.getOwnPropertyDescriptors, HW = Object.getOwnPropertySymbols, UW = Object.prototype.hasOwnProperty, WW = Object.prototype.propertyIsEnumerable, GW = (e, t, n) => t in e ? zW(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, KW = (e, t) => {
	for (var n in t ||= {}) UW.call(t, n) && GW(e, n, t[n]);
	if (HW) for (var n of HW(t)) WW.call(t, n) && GW(e, n, t[n]);
	return e;
}, qW = (e, t) => BW(e, VW(t)), JW = class extends VL {
	apply({ transform: e }) {
		if (!this.options) return e;
		let { axis: t, value: n } = this.options;
		return qW(KW({}, e), { [t]: n });
	}
};
JW.configure = bI(JW);
var YW = JW, XW = YW.configure({
	axis: "x",
	value: 0
});
YW.configure({
	axis: "y",
	value: 0
});
var ZW = class extends VL {
	apply({ transform: e }) {
		let { size: t = 20 } = this.options ?? {}, n = typeof t == "number" ? t : t.x, r = typeof t == "number" ? t : t.y;
		return qW(KW({}, e), {
			x: Math.ceil(e.x / n) * n,
			y: Math.ceil(e.y / r) * r
		});
	}
};
ZW.configure = bI(ZW);
var QW = {
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
}, $W = { sectionLabel: "_sectionLabel_rnzlx_8" };
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemWrapper/RoomListItemView/RoomListItemMoreOptionsMenu.tsx
function eG({ vm: e }) {
	let [t, n] = T(!1);
	return /* @__PURE__ */ (0, R.jsx)(he, {
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
			children: /* @__PURE__ */ (0, R.jsx)(jC, {})
		}),
		children: /* @__PURE__ */ (0, R.jsx)(tG, { vm: e })
	});
}
function tG({ vm: e }) {
	let t = V(e), n = t.sections.length > 0, r = S(() => t.sections.some((e) => e.isSelected), [t.sections]);
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		onKeyDown: (e) => e.stopPropagation(),
		children: [
			t.canMarkAsRead && /* @__PURE__ */ (0, R.jsx)(M, {
				Icon: yC,
				label: H("room_list|more_options|mark_read"),
				onSelect: e.onMarkAsRead,
				onClick: (e) => e.stopPropagation(),
				hideChevron: !0
			}),
			t.canMarkAsUnread && /* @__PURE__ */ (0, R.jsx)(M, {
				Icon: xC,
				label: H("room_list|more_options|mark_unread"),
				onSelect: e.onMarkAsUnread,
				onClick: (e) => e.stopPropagation(),
				hideChevron: !0
			}),
			t.canChangeSection && /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsx)(Te, {
				checked: t.isFavourite,
				Icon: ZS,
				label: H("room_list|more_options|favourited"),
				onSelect: e.onToggleFavorite,
				onClick: (e) => e.stopPropagation()
			}), /* @__PURE__ */ (0, R.jsx)(Te, {
				checked: t.isLowPriority,
				Icon: Yx,
				label: H("room_list|more_options|low_priority"),
				onSelect: e.onToggleLowPriority,
				onClick: (e) => e.stopPropagation()
			})] }),
			/* @__PURE__ */ (0, R.jsx)(be, {}),
			t.canInvite && /* @__PURE__ */ (0, R.jsx)(M, {
				Icon: lw,
				label: H("action|invite"),
				onSelect: e.onInvite,
				onClick: (e) => e.stopPropagation(),
				hideChevron: !0
			}),
			t.canCopyRoomLink && /* @__PURE__ */ (0, R.jsx)(M, {
				Icon: pC,
				label: H("room_list|more_options|copy_link"),
				onSelect: e.onCopyRoomLink,
				onClick: (e) => e.stopPropagation(),
				hideChevron: !0
			}),
			t.areSectionsEnabled && t.canChangeSection && /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsxs)(xe, {
				trigger: /* @__PURE__ */ (0, R.jsx)(M, {
					Icon: Zx,
					label: H("room_list|more_options|move_to_section"),
					onSelect: null
				}),
				children: [
					t.sections.map((t) => /* @__PURE__ */ (0, R.jsx)(M, {
						label: t.name,
						labelProps: { className: $W.sectionLabel },
						onSelect: () => e.onToggleSection(t.tag),
						onClick: (e) => e.stopPropagation(),
						hideChevron: !0,
						"aria-checked": t.isSelected,
						children: t.isSelected && /* @__PURE__ */ (0, R.jsx)(dS, {
							color: "var(--cpd-color-icon-tertiary)",
							width: "24px",
							height: "24px"
						})
					}, t.tag)),
					n && /* @__PURE__ */ (0, R.jsx)(be, {}),
					/* @__PURE__ */ (0, R.jsx)(M, {
						label: H("action|new_section"),
						onSelect: e.onCreateSection,
						hideChevron: !0
					})
				]
			}), r && /* @__PURE__ */ (0, R.jsx)(M, {
				Icon: TC,
				label: H("room_list|more_options|remove_from_section"),
				onSelect: e.onRemoveFromSection,
				onClick: (e) => e.stopPropagation(),
				hideChevron: !0
			})] }),
			/* @__PURE__ */ (0, R.jsx)(be, {}),
			/* @__PURE__ */ (0, R.jsx)(M, {
				kind: "critical",
				Icon: dC,
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
var nG = ({ vm: e, children: t }) => /* @__PURE__ */ (0, R.jsx)(ie, {
	title: H("room_list|room|more_options"),
	showTitle: !1,
	hasAccessibleAlternative: !0,
	trigger: t,
	children: /* @__PURE__ */ (0, R.jsx)(tG, { vm: e })
}), rG = ({ hasAnyNotificationOrActivity: e, muted: t, callType: n, isUnsentMessage: r, invited: i, isMention: a, isNotification: o, isActivityNotification: s, count: c }) => !e && !t && !n ? null : /* @__PURE__ */ (0, R.jsxs)(B, {
	align: "center",
	justify: "center",
	gap: "var(--cpd-space-1x)",
	"data-testid": "notification-decoration",
	children: [
		r && /* @__PURE__ */ (0, R.jsx)(VS, {
			width: "20px",
			height: "20px",
			fill: "var(--cpd-color-icon-critical-primary)"
		}),
		n === "video" && /* @__PURE__ */ (0, R.jsx)(hw, {
			width: "20px",
			height: "20px",
			fill: "var(--cpd-color-icon-accent-primary)"
		}),
		n === "voice" && /* @__PURE__ */ (0, R.jsx)(Tw, {
			width: "20px",
			height: "20px",
			fill: "var(--cpd-color-icon-accent-primary)"
		}),
		i && /* @__PURE__ */ (0, R.jsx)(zS, {
			width: "20px",
			height: "20px",
			fill: "var(--cpd-color-icon-accent-primary)"
		}),
		a && /* @__PURE__ */ (0, R.jsx)(CC, {
			width: "20px",
			height: "20px",
			fill: "var(--cpd-color-icon-accent-primary)"
		}),
		(a || o) && /* @__PURE__ */ (0, R.jsx)(Oe, { count: c || null }),
		s && /* @__PURE__ */ (0, R.jsx)(De, {}),
		t && /* @__PURE__ */ (0, R.jsx)(DC, {
			width: "20px",
			height: "20px",
			fill: "var(--cpd-color-icon-tertiary)"
		})
	]
}), iG = /* @__PURE__ */ function(e) {
	return e.AllMessages = "all_messages", e.AllMessagesLoud = "all_messages_loud", e.MentionsOnly = "mentions_only", e.Mute = "mute", e;
}({});
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemWrapper/RoomListItemView/RoomListItemNotificationMenu.tsx
function aG({ vm: e }) {
	let t = V(e), [n, r] = T(!1), i = t.roomNotifState === iG.Mute, a = /* @__PURE__ */ (0, R.jsx)(dS, {
		width: "24px",
		height: "24px",
		color: "var(--cpd-color-icon-primary)"
	});
	return /* @__PURE__ */ (0, R.jsx)(he, {
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
			children: i ? /* @__PURE__ */ (0, R.jsx)(DC, {}) : /* @__PURE__ */ (0, R.jsx)(kC, {})
		}),
		children: /* @__PURE__ */ (0, R.jsxs)("div", {
			onKeyDown: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, R.jsx)(M, {
					"aria-selected": t.roomNotifState === iG.AllMessages,
					hideChevron: !0,
					label: H("notifications|default_settings"),
					onSelect: () => e.onSetRoomNotifState(iG.AllMessages),
					onClick: (e) => e.stopPropagation(),
					children: t.roomNotifState === iG.AllMessages && a
				}),
				/* @__PURE__ */ (0, R.jsx)(M, {
					"aria-selected": t.roomNotifState === iG.AllMessagesLoud,
					hideChevron: !0,
					label: H("notifications|all_messages"),
					onSelect: () => e.onSetRoomNotifState(iG.AllMessagesLoud),
					onClick: (e) => e.stopPropagation(),
					children: t.roomNotifState === iG.AllMessagesLoud && a
				}),
				/* @__PURE__ */ (0, R.jsx)(M, {
					"aria-selected": t.roomNotifState === iG.MentionsOnly,
					hideChevron: !0,
					label: H("notifications|mentions_keywords"),
					onSelect: () => e.onSetRoomNotifState(iG.MentionsOnly),
					onClick: (e) => e.stopPropagation(),
					children: t.roomNotifState === iG.MentionsOnly && a
				}),
				/* @__PURE__ */ (0, R.jsx)(M, {
					"aria-selected": t.roomNotifState === iG.Mute,
					hideChevron: !0,
					label: H("notifications|mute_room"),
					onSelect: () => e.onSetRoomNotifState(iG.Mute),
					onClick: (e) => e.stopPropagation(),
					children: t.roomNotifState === iG.Mute && a
				})
			]
		})
	});
}
var oG = {
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
}, sG = ({ showMoreOptionsMenu: e, showNotificationMenu: t, vm: n }) => /* @__PURE__ */ (0, R.jsxs)(B, {
	className: oG.hoverMenu,
	align: "center",
	gap: "var(--cpd-space-1x)",
	children: [e && /* @__PURE__ */ (0, R.jsx)(eG, { vm: n }), t && /* @__PURE__ */ (0, R.jsx)(aG, { vm: n })]
}), cG = p(function({ vm: e, renderAvatar: t, isDragging: n = !1 }) {
	let r = V(e);
	return /* @__PURE__ */ (0, R.jsxs)(B, {
		className: (0, L.default)(oG.container, { [oG.dragging]: n }),
		gap: "var(--cpd-space-3x)",
		align: "center",
		children: [t(r.room), /* @__PURE__ */ (0, R.jsxs)(B, {
			className: oG.content,
			gap: "var(--cpd-space-2x)",
			align: "center",
			justify: "space-between",
			children: [
				/* @__PURE__ */ (0, R.jsxs)("div", {
					className: oG.ellipsis,
					children: [/* @__PURE__ */ (0, R.jsxs)("div", {
						className: oG.roomName,
						title: r.name,
						"data-testid": "room-name",
						children: [r.name, r.userStatus && /* @__PURE__ */ (0, R.jsx)(Ee, {
							description: r.userStatus.text,
							children: /* @__PURE__ */ (0, R.jsx)(N, {
								as: "span",
								className: oG.userStatusEmoji,
								children: r.userStatus.emoji
							})
						})]
					}), r.messagePreview && /* @__PURE__ */ (0, R.jsx)(N, {
						as: "div",
						size: "sm",
						className: oG.ellipsis,
						title: r.messagePreview,
						children: r.messagePreview
					})]
				}),
				!n && (r.showMoreOptionsMenu || r.showNotificationMenu) && /* @__PURE__ */ (0, R.jsx)(sG, {
					showMoreOptionsMenu: r.showMoreOptionsMenu,
					showNotificationMenu: r.showNotificationMenu,
					vm: e
				}),
				/* @__PURE__ */ (0, R.jsx)("div", {
					className: oG.notificationDecoration,
					"aria-hidden": !0,
					children: /* @__PURE__ */ (0, R.jsx)(rG, { ...r.notification })
				})
			]
		})]
	});
});
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemWrapper/RoomListItemView/RoomListItemView.tsx
function lG(e, t) {
	return t.isUnsentMessage ? H("room_list|a11y|unsent_message", { roomName: e }) : t.invited ? H("room_list|a11y|invitation", { roomName: e }) : t.isMention && t.count ? H("room_list|a11y|mention", {
		roomName: e,
		count: t.count
	}) : t.hasUnreadCount && t.count ? H("room_list|a11y|unread", {
		roomName: e,
		count: t.count
	}) : t.callType === "voice" ? H("room_list|a11y|voice_call", { roomName: e }) : t.callType === "video" ? H("room_list|a11y|video_call", { roomName: e }) : H("room_list|a11y|default", { roomName: e });
}
var uG = p(function({ vm: e, isSelected: t, isFocused: n, onFocus: r, isFirstItem: i, isLastItem: a, renderAvatar: o, isDragSource: s = !1, ref: c, ...l }) {
	let u = w(null), d = PA([c, u]), f = V(e), [p, m] = T(!1);
	_(() => {
		n && u.current?.focus({ preventScroll: !0 });
	}, [n]);
	let h = (e) => {
		r(f.id, e), !e.currentTarget.contains(e.relatedTarget) && e.currentTarget.matches(":focus-visible") && m(!0);
	}, g = (e) => {
		!e.currentTarget.contains(e.relatedTarget) && !e.currentTarget.querySelector("[data-state=\"open\"]") && m(!1);
	}, v = lG(f.name, f.notification);
	return /* @__PURE__ */ (0, R.jsx)(nG, {
		vm: e,
		children: /* @__PURE__ */ (0, R.jsx)(B, {
			as: "button",
			ref: d,
			className: (0, L.default)(oG.roomListItem, "mx_RoomListItemView", {
				[oG.keyboardActive]: p,
				[oG.selected]: t,
				[oG.bold]: f.isBold,
				[oG.firstItem]: i,
				[oG.lastItem]: a,
				[oG.dragSource]: s,
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
			children: /* @__PURE__ */ (0, R.jsx)(cG, {
				vm: e,
				renderAvatar: o
			})
		})
	});
}), dG = p(function({ vm: e, isDragging: t = !1 }) {
	let { title: n, displaySectionMenu: r, notification: i, isExpanded: a } = V(e);
	return /* @__PURE__ */ (0, R.jsxs)(B, {
		className: (0, L.default)(QW.container, { [QW.dragging]: t }),
		align: "center",
		justify: "space-between",
		gap: "var(--cpd-space-2x)",
		children: [
			/* @__PURE__ */ (0, R.jsxs)(B, {
				align: "center",
				gap: "var(--cpd-space-0-5x)",
				children: [/* @__PURE__ */ (0, R.jsx)(_S, {
					className: QW.chevron,
					width: "24px",
					height: "24px",
					fill: "var(--cpd-color-icon-secondary)"
				}), /* @__PURE__ */ (0, R.jsx)("span", {
					className: QW.title,
					children: n
				})]
			}),
			!a && i && /* @__PURE__ */ (0, R.jsx)("div", {
				className: QW.notificationDecoration,
				"aria-hidden": !0,
				children: /* @__PURE__ */ (0, R.jsx)(rG, { ...i })
			}),
			r && !t && /* @__PURE__ */ (0, R.jsx)(fG, { vm: e })
		]
	});
});
function fG({ vm: e }) {
	let [t, n] = T(!1);
	return /* @__PURE__ */ (0, R.jsx)(he, {
		open: t,
		onOpenChange: n,
		title: H("room_list|section_header|more_options"),
		showTitle: !1,
		align: "start",
		trigger: /* @__PURE__ */ (0, R.jsx)(j, {
			className: QW.menu,
			tooltip: H("room_list|section_header|more_options"),
			"aria-label": H("room_list|section_header|more_options"),
			size: "24px",
			style: { padding: "2px" },
			color: "var(--cpd-color-icon-primary)",
			children: /* @__PURE__ */ (0, R.jsx)(jC, { fill: "var(--cpd-color-icon-primary)" })
		}),
		children: /* @__PURE__ */ (0, R.jsxs)("div", {
			onKeyDown: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, R.jsx)(M, {
				hideChevron: !0,
				Icon: LS,
				label: H("room_list|section_header|edit_section"),
				onSelect: () => e.editSection(),
				onClick: (e) => e.stopPropagation()
			}), /* @__PURE__ */ (0, R.jsx)(M, {
				hideChevron: !0,
				Icon: DS,
				label: H("room_list|section_header|remove_section"),
				onSelect: () => e.removeSection(),
				onClick: (e) => e.stopPropagation()
			})]
		})
	});
}
//#endregion
//#region src/room-list/VirtualizedRoomListView/dragAndDrop.ts
function pG(e) {
	return e?.type === "section";
}
function mG(e) {
	return e?.type === "room";
}
function hG(e, t) {
	switch (e) {
		case "nonDm": return !mG(t) || t.isDm;
		case "dm": return !mG(t) || !t.isDm;
		case "any": return !1;
		case "none": return !0;
	}
}
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListSectionHeaderView/RoomListSectionHeaderView.tsx
var gG = p(function({ vm: e, isFocused: t, onFocus: n, indexInList: r, sectionIndex: i, sectionCount: a, roomCountInSection: o }) {
	let { translate: s } = z(), { id: c, title: l, isExpanded: u, isUnread: d, canBeReordered: f, acceptedRoomKind: p } = V(e), m = i === a - 1, { ref: h, handleRef: g, isDragSource: v } = qU({
		id: c,
		data: {
			type: "section",
			index: i
		},
		plugins: [eH.configure({ feedback: "clone" })],
		modifiers: [XW],
		disabled: !f
	}), { source: y } = DW(), b = y?.data, x = pG(b), { ref: S, isDropTarget: C } = EW({
		id: c,
		data: {
			type: "section",
			index: i
		},
		disabled: v || (x ? !f : hG(p, b))
	}), ee = C && b?.type === "room", te = C && x, E = pG(b) ? b.index : -1, ne = te && E > i, D = te && !ne, O = te && ne, k = w(u);
	v || (k.current = u);
	let re = v ? k.current : u, ie = w(null), A = PA([
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
		...RW(r, i, o),
		children: /* @__PURE__ */ (0, R.jsx)("div", {
			role: "gridcell",
			"aria-expanded": re,
			children: /* @__PURE__ */ (0, R.jsx)("button", {
				ref: A,
				type: "button",
				className: (0, L.default)(QW.header, {
					[QW.keyboardActive]: ae,
					[QW.firstHeader]: i === 0,
					[QW.lastHeader]: !u && m,
					[QW.unread]: d,
					[QW.dragSource]: v,
					[QW.dropTarget]: ee,
					[QW.dropTargetBottom]: D,
					[QW.dropTargetTop]: O
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
				children: /* @__PURE__ */ (0, R.jsx)(dG, { vm: e })
			})
		})
	});
}), _G = p(function({ vm: e, isFirst: t }) {
	let { isExpanded: n, isUnread: r } = V(e);
	return /* @__PURE__ */ (0, R.jsx)("div", {
		className: QW.stickyBackground,
		"aria-hidden": !0,
		children: /* @__PURE__ */ (0, R.jsx)("button", {
			type: "button",
			className: (0, L.default)(QW.header, {
				[QW.firstHeader]: t,
				[QW.unread]: r
			}),
			"aria-expanded": n,
			onClick: e.onClick,
			tabIndex: -1,
			children: /* @__PURE__ */ (0, R.jsx)(dG, { vm: e })
		})
	});
}), vG = { dragOverlay: "_dragOverlay_s80l5_8" }, yG = p(function({ vm: e }) {
	return /* @__PURE__ */ (0, R.jsx)("div", {
		"aria-hidden": !0,
		className: (0, L.default)(QW.header, vG.dragOverlay),
		children: /* @__PURE__ */ (0, R.jsx)(dG, {
			vm: e,
			isDragging: !0
		})
	});
}), bG = p(function({ roomIndex: e, roomCount: t, roomIndexInSection: n, isInFlatList: r, ...i }) {
	if (r) return /* @__PURE__ */ (0, R.jsx)(uG, {
		...i,
		...LW("listbox", e, t)
	});
	let a = n === 0;
	return /* @__PURE__ */ (0, R.jsx)("div", {
		...LW("treegrid", e, n),
		children: /* @__PURE__ */ (0, R.jsx)("div", {
			role: "gridcell",
			"aria-selected": i.isSelected,
			children: /* @__PURE__ */ (0, R.jsx)(xG, {
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
function xG(e) {
	let t = V(e.vm), { ref: n, handleRef: r, isDragSource: i } = qU({
		id: t.id,
		data: {
			type: "room",
			isDm: t.isDm
		},
		plugins: [eH.configure({ feedback: "clone" })],
		modifiers: [XW],
		disabled: !t.canChangeSection
	}), a = PA([n, r]);
	return /* @__PURE__ */ (0, R.jsx)(uG, {
		...e,
		ref: t.canChangeSection ? a : void 0,
		isDragSource: i
	});
}
var SG = { dragOverlay: "_dragOverlay_vsda5_8" }, CG = p(function({ vm: e, renderAvatar: t }) {
	return /* @__PURE__ */ (0, R.jsx)(B, {
		"aria-hidden": !0,
		className: (0, L.default)(oG.roomListItem, SG.dragOverlay),
		gap: "var(--cpd-space-3x)",
		align: "stretch",
		children: /* @__PURE__ */ (0, R.jsx)(cG, {
			vm: e,
			renderAvatar: t,
			isDragging: !0
		})
	});
});
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListAccessibilityPlugin.ts
function wG(e, t = "polite") {
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
function TG(e, t) {
	let n = document.createElement("div");
	return n.id = e, n.style.display = "none", n.textContent = t, n;
}
var EG = class extends EI {
	liveRegion;
	assertiveRegion;
	instructions;
	unsubscribers = [];
	constructor(e, t) {
		super(e, t);
		let n = crypto.randomUUID(), r = crypto.randomUUID(), i = crypto.randomUUID();
		this.liveRegion = wG(n), this.assertiveRegion = wG(r, "assertive"), document.body.append(this.liveRegion, this.assertiveRegion);
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
		t?.instructions && (this.instructions = TG(i, t.instructions), document.body.append(this.instructions), this.registerEffect(() => {
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
function DG(e) {
	let { translate: t } = z(), n = h((t) => pG(t.data) ? e.getSectionHeaderViewModel(t.id).getSnapshot().title : e.getRoomItemViewModel(t.id)?.getSnapshot().name, [e]), r = S(() => ({
		dragstart: ({ operation: { source: e } }) => {
			if (!e) return;
			let r = n(e);
			if (r !== void 0) return t("room_list|a11y|drag_start", { source: r });
		},
		dragover: ({ operation: { source: r, target: i } }) => {
			if (!r) return;
			let a = n(r);
			if (a === void 0) return;
			if (pG(r.data) && !i) return t("room_list|a11y|drag_over_original", { source: a });
			if (!i) return;
			let o = e.getSectionHeaderViewModel(i.id).getSnapshot().title;
			return pG(r.data) && pG(i.data) ? r.data.index > i.data.index ? t("room_list|a11y|drag_over_before", {
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
			if (pG(r.data) && !i) return t("room_list|a11y|drag_end_original", { source: o });
			if (!i) return;
			let s = e.getSectionHeaderViewModel(i.id).getSnapshot().title;
			return pG(r.data) && pG(i.data) ? r.data.index > i.data.index ? t("room_list|a11y|drag_end_before", {
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
	return h((e) => [...e.filter((e) => e !== oV), yI(EG, {
		announcements: r,
		instructions: i
	})], [r, i]);
}
var OG = { roomList: "_roomList_1yq7k_11" }, kG = 1300;
function AG({ vm: e, renderAvatar: t, onKeyDown: n }) {
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
	}, [T, te]), ne = S(() => a.flatMap((e) => e.roomIds), [a]), D = ne.length, O = a.length, k = D + O, re = S(() => a.map((e) => ({
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
		te();
	}, [
		e,
		te,
		s,
		ie
	]), ae = DG(e), oe = h((e, n, r, i, a, s) => {
		let { activeRoomIndex: c, roomCount: l, vm: u, isFlatList: d } = r.context, f = c === e, p = u.getRoomItemViewModel(n);
		if (!p) return /* @__PURE__ */ (0, R.jsx)(o.Fragment, {}, `stale-${e}`);
		let m = r.focused && r.tabIndexKey === n, h = d && e === 0, g = !!((d || a) && e === l - 1);
		return /* @__PURE__ */ (0, R.jsx)(bG, {
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
		return /* @__PURE__ */ (0, R.jsx)(gG, {
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
		return /* @__PURE__ */ (0, R.jsx)(_G, {
			vm: r,
			isFirst: e === 0
		}, t);
	}, []), j = h((e) => e, []), de = h((e) => e, []), fe = S(() => ({
		spaceId: i.spaceId || "",
		filterKeys: i.filterKeys,
		sections: a,
		activeRoomIndex: c,
		roomCount: D,
		sectionCount: O,
		vm: e,
		isFlatList: s
	}), [
		i.spaceId,
		i.filterKeys,
		a,
		c,
		D,
		O,
		e,
		s
	]), pe = h((e) => {
		let { spaceId: t, filterKeys: n } = e.context.context, r = u.current !== t || !dy(d.current, n);
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
	let me = h(() => !0, []), he = h(() => !0, []), M = S(() => ({
		top: kG,
		bottom: kG
	}), []), ge = {
		context: fe,
		scrollIntoViewOnChange: pe,
		...c === void 0 ? {} : { initialTopMostItemIndex: c },
		"data-testid": "room-list",
		"aria-label": r("room_list|list_title"),
		getItemKey: j,
		isItemFocusable: me,
		rangeChanged: A,
		scrollerRef: E,
		onKeyDown: n,
		increaseViewportBy: M,
		className: OG.roomList
	};
	return s ? /* @__PURE__ */ (0, R.jsx)(MW, {
		...ge,
		...IW("listbox"),
		scrollHandleRef: p,
		items: ne,
		getItemComponent: ce
	}) : /* @__PURE__ */ (0, R.jsxs)(UU, {
		onDragStart: (t) => {
			e.onSectionOrRoomDragStart();
		},
		onDragEnd: (t) => {
			let { source: n, target: r } = t.operation;
			e.onSectionOrRoomDragEnd(), !(t.canceled || !n || !r) && (pG(n.data) ? e.changeSectionOrder(String(n.id), String(r.id)) : e.changeRoomSection(String(n.id), String(r.id)));
		},
		sensors: [qH.configure({ activationConstraints(e) {
			return e.pointerType === "touch" ? [new UH.Delay({
				value: 250,
				tolerance: 5
			})] : [new UH.Distance({ value: 5 })];
		} }), IH.configure({
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
		children: [/* @__PURE__ */ (0, R.jsx)(YU, {
			dropAnimation: null,
			children: /* @__PURE__ */ (0, R.jsx)(MG, {
				vm: e,
				renderAvatar: t
			})
		}), /* @__PURE__ */ (0, R.jsx)(jG, {
			...ge,
			...IW("treegrid", k),
			scrollHandleRef: p,
			groups: re,
			getHeaderKey: de,
			getGroupHeaderComponent: le,
			getItemComponent: se,
			isGroupHeaderFocusable: he,
			renderStickyHeader: ue
		})]
	});
}
function jG(e) {
	let { source: t } = DW();
	return /* @__PURE__ */ (0, R.jsx)(FW, {
		...e,
		disableKeyboardNavigation: t !== null
	});
}
function MG({ vm: e, renderAvatar: t }) {
	let { source: n } = DW();
	if (!n) return null;
	if (pG(n.data)) {
		let t = e.getSectionHeaderViewModel(String(n.id));
		return /* @__PURE__ */ (0, R.jsx)(yG, { vm: t });
	}
	let r = e.getRoomItemViewModel(String(n.id));
	return r ? /* @__PURE__ */ (0, R.jsx)(CG, {
		vm: r,
		renderAvatar: t
	}) : null;
}
var NG = { toast: "_toast_vbkbz_8" };
//#endregion
//#region src/room-list/RoomListView/RoomListToast/RoomListToast.tsx
function PG({ type: e, onClose: t, onClick: n }) {
	let { translate: r } = z();
	if (e === "unread_activity") return /* @__PURE__ */ (0, R.jsx)(we, {
		className: NG.toast,
		Icon: Yx,
		onClick: n,
		children: r("room_list|unread_messages")
	});
	let i = r(e === "section_created" ? "room_list|section_created" : "room_list|chat_moved");
	return /* @__PURE__ */ (0, R.jsx)(we, {
		className: NG.toast,
		onClose: t,
		tooltip: r("action|close"),
		children: i
	});
}
var FG = {
	list: "_list_1hk4o_8",
	scrollbar: "_scrollbar_1hk4o_13"
}, IG = ({ vm: e, renderAvatar: t, onKeyDown: n }) => {
	let r = V(e), i;
	return i = r.isLoadingRooms ? /* @__PURE__ */ (0, R.jsx)(IN, {}) : r.isRoomListEmpty ? /* @__PURE__ */ (0, R.jsx)(RN, { vm: e }) : /* @__PURE__ */ (0, R.jsx)(AG, {
		vm: e,
		renderAvatar: t,
		onKeyDown: n
	}), /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsx)("div", { children: /* @__PURE__ */ (0, R.jsx)(PN, {
		filterIds: r.filterIds,
		activeFilterId: r.activeFilterId,
		onToggleFilter: e.onToggleFilter
	}) }), /* @__PURE__ */ (0, R.jsx)(B, {
		direction: "column",
		className: FG.list,
		children: /* @__PURE__ */ (0, R.jsxs)(gx, {
			className: FG.scrollbar,
			children: [i, r.toast && /* @__PURE__ */ (0, R.jsx)(PG, {
				type: r.toast,
				onClose: e.closeToast,
				onClick: e.scrollToUnreadActivity
			})]
		})
	})] });
}, LG = {
	"box-flex": "_box-flex_1odfs_9",
	"box-shrink": "_box-shrink_1odfs_13",
	"box-grow": "_box-grow_1odfs_17"
};
//#endregion
//#region src/core/utils/Box/Box.ts
function RG({ as: e = "div", flex: t = null, shrink: n = null, grow: r = null, className: i, children: a, ...s }) {
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
			[LG["box-flex"]]: !!t,
			[LG["box-shrink"]]: !!n,
			[LG["box-grow"]]: !!r
		}),
		style: c
	}, a);
}
//#endregion
//#region src/resize/group/GroupView.tsx
function zG({ vm: e, children: t }) {
	return V(e), /* @__PURE__ */ (0, R.jsx)(Fe, {
		onLayoutChanged: (t) => {
			let n = t[UG];
			e.onLeftPanelResized(n);
		},
		children: t
	});
}
var BG = {
	separator: "_separator_wo6l2_8",
	content: "_content_wo6l2_21",
	activeSeparatorContainer: "_activeSeparatorContainer_wo6l2_39",
	activeSeparator: "_activeSeparator_wo6l2_39",
	dragIcon: "_dragIcon_wo6l2_98"
};
//#endregion
//#region src/resize/separator/SeparatorView.tsx
function VG({ vm: e, className: t }) {
	let { translate: n } = z(), { isCollapsed: r } = V(e), i = r ? "bar" : "border", a = /* @__PURE__ */ (0, R.jsx)(Ee, {
		description: n("left_panel|separator_label"),
		placement: "right",
		disabled: i === "border",
		children: /* @__PURE__ */ (0, R.jsx)("div", {
			className: BG.content,
			children: /* @__PURE__ */ (0, R.jsx)(FS, {
				className: BG.dragIcon,
				width: "20px",
				height: "12px",
				viewBox: "3.999704360961914 8.999704360961914 16.000295639038086 6.000591278076172",
				transform: "rotate(90)"
			})
		})
	}), o = /* @__PURE__ */ (0, R.jsx)("div", {
		className: BG.activeSeparatorContainer,
		children: /* @__PURE__ */ (0, R.jsx)("div", { className: BG.activeSeparator })
	});
	return /* @__PURE__ */ (0, R.jsx)(Be, {
		className: (0, L.default)(BG.separator, t),
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
function HG({ vm: e, className: t, children: n, ...r }) {
	let { initialSize: i, isCollapsed: a } = V(e), [o, s] = Ve();
	_(() => {
		o && e.setPanelHandle(o);
	}, [e, o]);
	let c = i === void 0 ? r.defaultSize : `${i}%`;
	return /* @__PURE__ */ (0, R.jsx)(Re, {
		inert: a,
		id: UG,
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
var UG = "left-panel", WG = l(null);
WG.displayName = "ToastContext";
function GG() {
	let e = g(WG);
	if (!e) throw Error("Component must be wrapped in <ToastContext.Provider /> to use useToastContext");
	return e;
}
function KG() {
	let e = S(() => new qG(), []), [t, n] = T(e.getActiveToast()), r = h(() => {
		n(e.getActiveToast());
	}, [n, e]);
	return _(() => {
		e.setCallback(r);
	}, [e, r]), [t, e];
}
var qG = class {
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
}, JG = class {
	get language() {
		return ex();
	}
	register(e) {
		let t = {};
		for (let n in e) for (let r in e[n]) t[r] = t[r] || {}, t[r][n] = e[n][r];
		for (let e in t) Qb(e, t[e]);
	}
	translate(e, t, n) {
		return n ? H(e, t, n) : H(e, t);
	}
	humanizeTime = (e) => $A(e, this);
};
//#endregion
//#region src/room/avatar/RoomAvatar/RoomAvatarView.tsx
function YG({ vm: e, ref: t }) {
	let { name: n, idName: r, urls: i, type: a, size: o, isClickable: s, className: c, altText: l = "Avatar", title: u, tabIndex: d, role: f, ariaHidden: p } = V(e), [m, g] = T(0);
	_(() => {
		g(0);
	}, [i]);
	let v = h(() => {
		g((e) => e + 1);
	}, []), y = i[m], b = {};
	return f ? b.role = f : s ? (b.role = "button", b["aria-live"] = "off") : y || (b.role = "presentation", b["aria-label"] = void 0), /* @__PURE__ */ (0, R.jsx)(E, {
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
var XG = {
	statusText: "_statusText_1mkte_8",
	menuStatusText: "_menuStatusText_1mkte_19"
}, ZG = function({ status: e, ref: t, ...n }) {
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		ref: t,
		...n,
		className: XG.statusText,
		children: [/* @__PURE__ */ (0, R.jsx)(N, {
			as: "span",
			className: XG.menuStatusEmoji,
			children: e.emoji
		}), /* @__PURE__ */ (0, R.jsx)(N, {
			as: "span",
			className: XG.menuStatusText,
			children: e.text
		})]
	});
};
//#endregion
//#region src/status/UserStatusIconView.tsx
function QG({ vm: e }) {
	let { status: t } = V(e);
	return t ? /* @__PURE__ */ (0, R.jsx)(Ee, {
		description: t.text,
		children: /* @__PURE__ */ (0, R.jsx)(N, {
			as: "span",
			children: t.emoji
		})
	}) : null;
}
var $G = {
	customThemes: "_customThemes_1kxi0_8",
	form: "_form_1kxi0_15",
	list: "_list_1kxi0_22",
	theme: "_theme_1kxi0_32",
	row: "_row_1kxi0_39",
	name: "_name_1kxi0_45",
	error: "_error_1kxi0_53"
}, eK = {
	InvalidSchema: "InvalidSchema",
	DownloadFailed: "DownloadFailed",
	AlreadyInstalled: "AlreadyInstalled",
	SaveFailed: "SaveFailed"
}, tK = {
	[eK.InvalidSchema]: nx("devtools|custom_themes|error_invalid"),
	[eK.DownloadFailed]: nx("devtools|custom_themes|error_downloading"),
	[eK.AlreadyInstalled]: nx("devtools|custom_themes|error_already_installed"),
	[eK.SaveFailed]: nx("devtools|custom_themes|error_save_failed")
};
function nK({ vm: e }) {
	let { themes: t, url: n, isDownloading: r, error: i } = V(e);
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: $G.customThemes,
		children: [/* @__PURE__ */ (0, R.jsxs)(ye, {
			className: $G.form,
			onSubmit: (t) => {
				t.preventDefault(), e.addTheme();
			},
			children: [/* @__PURE__ */ (0, R.jsxs)(oe, {
				name: "customThemeUrl",
				children: [
					/* @__PURE__ */ (0, R.jsx)(pe, { children: H("devtools|custom_themes|url_label") }),
					/* @__PURE__ */ (0, R.jsx)(Ce, {
						value: n,
						onChange: (t) => e.setUrl(t.target.value)
					}),
					i ? /* @__PURE__ */ (0, R.jsx)(ae, { children: H(tK[i]) }) : /* @__PURE__ */ (0, R.jsx)(ue, { children: H("devtools|custom_themes|help") })
				]
			}), /* @__PURE__ */ (0, R.jsx)(O, {
				type: "submit",
				size: "md",
				disabled: r || n.trim() === "",
				children: H(r ? "devtools|custom_themes|downloading" : "devtools|custom_themes|add")
			})]
		}), t.length > 0 && /* @__PURE__ */ (0, R.jsx)("ul", {
			className: $G.list,
			"aria-label": H("devtools|custom_themes|installed_heading"),
			children: t.map((t) => /* @__PURE__ */ (0, R.jsxs)("li", {
				className: $G.theme,
				"aria-label": t.name,
				children: [/* @__PURE__ */ (0, R.jsxs)("div", {
					className: $G.row,
					children: [
						/* @__PURE__ */ (0, R.jsx)("span", {
							className: $G.name,
							children: t.name
						}),
						t.canRefresh && /* @__PURE__ */ (0, R.jsx)(j, {
							"aria-label": H("devtools|custom_themes|refresh"),
							tooltip: H("devtools|custom_themes|refresh"),
							disabled: t.isRefreshing,
							onClick: () => void e.refreshTheme(t.name),
							children: /* @__PURE__ */ (0, R.jsx)(qC, {})
						}),
						/* @__PURE__ */ (0, R.jsx)(j, {
							destructive: !0,
							"aria-label": H("action|delete"),
							tooltip: H("action|delete"),
							disabled: t.isRefreshing,
							onClick: () => void e.removeTheme(t.name),
							children: /* @__PURE__ */ (0, R.jsx)(DS, {})
						})
					]
				}), t.error && /* @__PURE__ */ (0, R.jsx)(N, {
					as: "span",
					size: "sm",
					className: $G.error,
					children: H(tK[t.error])
				})]
			}, t.name))
		})]
	});
}
//#endregion
export { Uj as ActionBarAction, Wj as ActionBarView, GM as AudioPlayerView, gx as AutoHideScrollbar, Ty as AvatarWithDetails, jj as BACKWARD_LOADING_KEY, Uw as Banner, ky as BaseViewModel, RG as Box, uM as CallDirection, lM as CallType, $d as Clock, eK as CustomThemeError, nK as CustomThemesView, EO as DEFAULT_EVENT_PRESENTATION, oj as DateSeparatorView, XM as DecryptionFailureBodyView, qM as DecryptionFailureReason, Kj as DisambiguatedProfileView, Ey as Disposables, kM as DmOngoingCallTileView, fM as DmTombstoneCallTileView, TM as DurationView, Qj as E2eMessageSharedIconView, Zj as E2ePadlock, Jj as E2ePadlockIcon, Bw as EmojiPicker, nM as EncryptionEventState, rM as EncryptionEventView, yk as EventContentBodyView, OO as EventPresentationProvider, aM as EventPreviewView, tM as EventTileBubble, oM as EventTileView, Mj as FORWARD_LOADING_KEY, Vw as FacePileView, Mk as FileBodyView, Ak as FileBodyViewInfoIcon, kk as FileBodyViewState, MW as FlatVirtualizedList, B as Flex, zG as GroupView, FW as GroupedVirtualizedList, xk as HiddenBodyView, Ck as HiddenMediaPlaceholder, HA as HistoryVisibilityBadge, JG as I18nApi, sf as I18nContext, sA as ImageBodyView, aA as ImageBodyViewPlaceholder, iA as ImageBodyViewState, dA as ImageReplyBodyView, lA as ImageReplyBodyViewPlaceholder, Iy as KEY_SEPARATOR, UG as LEFT_PANEL_ID, HD as LINKIFIED_DATA_ATTRIBUTE, HG as LeftResizablePanelView, qD as LinkedText, GD as LinkedTextContext, LD as LinkifyMatrixOpaqueIdType, FD as LinkifyOptionalSlashProtocols, PD as LinkifySupportedProtocols, PM as MJitsiWidgetEventView, IM as MKeyVerificationRequestView, Ok as MediaBody, Ny as MemberAvatarView, aO as MessageComposerUrlPreviewView, oN as MessageTimestampView, pA as MjolnirBodyView, Ay as MockViewModel, tG as MoreOptionContent, CO as NotificationBadgeView, rG as NotificationDecoration, ID as PERMITTED_URL_SCHEMES, Le as Panel, kA as Pill, IA as PillInput, RM as PinnedMessageBadge, cf as PlayPauseButton, nN as ReactionsRowButtonTooltipView, iN as ReactionsRowButtonView, tN as ReactionsRowView, TO as ReadMarker, Tk as RedactedBodyView, Ie as ResizableGroup, dN as RichItem, hN as RichList, BM as RoomAvatarEventView, YG as RoomAvatarView, RN as RoomListEmptyStateView, SN as RoomListHeaderView, cG as RoomListItemContent, nG as RoomListItemContextMenu, CG as RoomListItemDragOverlayView, sG as RoomListItemHoverMenu, eG as RoomListItemMoreOptionsMenu, aG as RoomListItemNotificationMenu, uG as RoomListItemView, bG as RoomListItemWrapper, IN as RoomListLoadingSkeleton, PN as RoomListPrimaryFilters, wN as RoomListSearchView, dG as RoomListSectionHeaderContent, gG as RoomListSectionHeaderView, _G as RoomListStickySectionHeaderView, PG as RoomListToast, IG as RoomListView, iG as RoomNotifState, EM as RoomOngoingCallTileView, ON as RoomPickerView, RA as RoomStatusBarState, zA as RoomStatusBarView, cM as RoomTombstoneCallTileView, NM as RootCallTileView, bx as RovingAction, Vx as RovingGridIndexProvider, yx as RovingStateActionType, vx as RovingTabIndexContext, Nx as RovingTabIndexProvider, Ux as RovingTabIndexWrapper, lO as SasEmoji, kN as SectionCreationView, Sy as SeekBar, ze as Separator, VG as SeparatorView, bO as SetStatusView, Dy as Snapshot, ZG as StatusTextView, xA as TextualBodyView, yA as TextualBodyViewBodyWrapperKind, vA as TextualBodyViewKind, HM as TextualEventView, QM as ThreadMessagePreviewView, $M as ThreadSummaryView, DA as TileErrorView, KA as TimelineSeparator, Bj as TimelineView, WG as ToastContext, qG as ToastRack, Gx as Toolbar, CA as UnknownBodyView, Ww as UploadButton, lN as UrlPreviewGroupView, xO as UserMenu, QG as UserStatusIconView, gA as VideoBodyView, hA as VideoBodyViewState, Oy as ViewModelSubscriptions, TA as ViewSourceEventView, AG as VirtualizedRoomListView, Ne as VirtuosoMockContext, UA as WidgetContextMenuView, VA as WidgetPipView, H as _t, cx as _tDom, nx as _td, _x as checkInputableElement, e as clamp, t as defaultNumber, BD as findLinksInString, Ex as findNextSiblingElement, Dx as findPreviousSiblingElement, WM as formatBytes, Yd as formatDateForInput, Jd as formatSeconds, zD as generateLinkedTextOptions, IW as getContainerAccessibleProps, RW as getGroupHeaderAccessibleProps, LW as getItemAccessibleProps, mx as getLangsJson, ex as getLocale, Fy as getNormalizedLanguageKeys, ej as humanizeRelativeTime, $A as humanizeTime, VD as isLinkable, ED as linkifyHtml, aD as linkifyString, sx as lookupString, Py as normalizeLanguageKey, n as percentageOf, r as percentageWithin, Qb as registerTranslations, dx as replaceByRegexes, lx as sanitizeForTranslation, fx as setLanguage, tx as setLocale, $b as setMissingEntryGenerator, ux as substitute, i as sum, KG as useActiveToast, AN as useCollapseFilters, jy as useCreateAutoDisposedViewModel, kO as useEventPresentation, z as useI18n, KD as useLinkedTextContext, My as useMockedViewModel, Px as useRovingTabIndex, GG as useToastContext, V as useViewModel, jN as useVisibleFilters };
