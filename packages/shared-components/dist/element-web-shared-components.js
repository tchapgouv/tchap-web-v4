import * as e from "react";
import t, { Children as n, cloneElement as r, createContext as i, forwardRef as a, isValidElement as o, memo as s, useCallback as c, useContext as l, useEffect as u, useId as d, useLayoutEffect as f, useMemo as p, useRef as m, useState as h, useSyncExternalStore as g, version as _ } from "react";
import { Badge as v, Button as y, ChatFilter as b, CheckboxMenuItem as x, ContextMenu as S, Field as C, H1 as w, Heading as T, IconButton as E, InlineSpinner as ee, Link as D, Menu as O, MenuItem as k, MenuTitle as te, RadioMenuItem as A, Root as ne, Separator as re, SubMenu as ie, Submit as ae, Text as j, TextControl as oe, Toast as se, ToggleMenuItem as ce, Tooltip as M, Unread as le, UnreadCounter as ue } from "@vector-im/compound-web";
import { jsx as N, jsxs as de } from "react/jsx-runtime";
import fe, { Text as pe } from "html-react-parser";
import { Virtuoso as me, VirtuosoMockContext as he } from "react-virtuoso";
import { Group as ge, Group as _e, Panel as ve, Panel as ye, Separator as be, Separator as xe, usePanelCallbackRef as Se } from "react-resizable-panels";
//#region \0rolldown/runtime.js
var Ce = Object.create, we = Object.defineProperty, Te = Object.getOwnPropertyDescriptor, Ee = Object.getOwnPropertyNames, De = Object.getPrototypeOf, Oe = Object.prototype.hasOwnProperty, P = (e, t) => () => (t || (e((t = { exports: {} }).exports, t, t.exports), e = null), t.exports), ke = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = Ee(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !Oe.call(e, s) && s !== n && we(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = Te(t, s)) || r.enumerable
	});
	return e;
}, Ae = (e, t, n) => (n = e == null ? {} : Ce(De(e)), ke(t || !e || !e.__esModule || !Oe.call(e, "default") ? we(n, "default", {
	value: e,
	enumerable: !0
}) : n, e));
//#endregion
//#region ../../node_modules/temporal-polyfill/chunks/internal.js
function je(e, t, n, r, i) {
	return Me(t, ((e, t) => {
		let n = e[t];
		if (n === void 0) throw TypeError(qs(t));
		return n;
	})(e, t), n, r, i);
}
function Me(e, t, n, r, i, a) {
	let o = Qe(t, n, r);
	if (i && t !== o) throw RangeError(Gs(e, t, n, r, a));
	return o;
}
function Ne(e) {
	return e !== null && /object|function/.test(typeof e);
}
function Pe(e, t = Map) {
	let n = new t();
	return (t, ...r) => {
		if (n.has(t)) return n.get(t);
		let i = e(t, ...r);
		return n.set(t, i), i;
	};
}
function Fe(e) {
	return Ie({ name: e }, 1);
}
function Ie(e, t) {
	return Be(((e) => ({
		value: e,
		configurable: 1,
		writable: !t
	})), e);
}
function Le(e) {
	return Be(((e) => ({
		get: e,
		configurable: 1
	})), e);
}
function Re(e) {
	return { [Symbol.toStringTag]: {
		value: e,
		configurable: 1
	} };
}
function ze(e, t) {
	let n = {}, r = e.length;
	for (let i of t) n[e[--r]] = i;
	return n;
}
function Be(e, t, n) {
	let r = {};
	for (let i in t) r[i] = e(t[i], i, n);
	return r;
}
function Ve(e, t, n) {
	let r = {};
	for (let i = 0; i < t.length; i++) {
		let a = t[i];
		r[a] = e(a, i, n);
	}
	return r;
}
function He(e, t, n) {
	let r = {};
	for (let i = 0; i < e.length; i++) r[t[i]] = n[e[i]];
	return r;
}
function Ue(e, t) {
	let n = Object.create(null);
	for (let r of e) n[r] = t[r];
	return n;
}
function We(e, t) {
	for (let n of t) if (n in e) return 1;
	return 0;
}
function Ge(e, t, n) {
	for (let r of e) if (t[r] !== n[r]) return 0;
	return 1;
}
function Ke(e, t, n) {
	let r = { ...n };
	for (let n = 0; n < t; n++) r[e[n]] = 0;
	return r;
}
function F(e, ...t) {
	return (...n) => e(...t, ...n);
}
function qe() {}
function Je(e) {
	return e[0].toUpperCase() + e.substring(1);
}
function Ye(e) {
	return e.slice().sort();
}
function Xe(e, t) {
	return String(t).padStart(e, "0");
}
function Ze(e, t) {
	return Math.sign(e - t);
}
function Qe(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
function $e(e, t) {
	return [Math.floor(e / t), et(e, t)];
}
function et(e, t) {
	return (e % t + t) % t;
}
function tt(e, t) {
	return [nt(e, t), rt(e, t)];
}
function nt(e, t) {
	return Math.trunc(e / t) || 0;
}
function rt(e, t) {
	return e % t || 0;
}
function it(e) {
	return Math.abs(e % 1) === .5;
}
function at(e, t, n) {
	let r = 0, i = 0;
	for (let a = 0; a <= t; a++) {
		let t = e[n[a]], o = Gc[a], [s, c] = tt(t, Wc / o);
		r += c * o, i += s;
	}
	let [a, o] = tt(r, Wc);
	return [i + a, o];
}
function ot(e, t, n) {
	let r = {};
	for (let i = t; i >= 0; i--) {
		let t = Gc[i];
		r[n[i]] = nt(e, t), e = rt(e, t);
	}
	return r;
}
function st(e) {
	if (e !== void 0) return gl(e);
}
function ct(e) {
	if (e !== void 0) return ut(e);
}
function lt(e) {
	if (e !== void 0) return dt(e);
}
function ut(e) {
	return gt(dt(e));
}
function dt(e) {
	return ht(vl(e));
}
function ft(e, t) {
	if (t == null) throw RangeError(qs(e));
	return t;
}
function pt(e) {
	if (!Ne(e)) throw TypeError(Ws);
	return e;
}
function mt(e, t, n = e) {
	if (typeof t !== e) throw TypeError(Ks(n, t));
	return t;
}
function ht(e, t = "number") {
	if (!Number.isInteger(e)) throw RangeError(Rs(t, e));
	return e || 0;
}
function gt(e, t = "number") {
	if (e <= 0) throw RangeError(zs(t, e));
	return e;
}
function _t(e) {
	if (typeof e == "symbol") throw TypeError(Us);
	return String(e);
}
function vt(e, t) {
	return Ne(e) ? String(e) : gl(e, t);
}
function yt(e) {
	if (typeof e == "string") return BigInt(e);
	if (typeof e != "bigint") throw TypeError(Hs(e));
	return e;
}
function bt(e, t = "number") {
	if (typeof e == "bigint") throw TypeError(Vs(t));
	if (e = Number(e), !Number.isFinite(e)) throw RangeError(Bs(t, e));
	return e;
}
function xt(e, t) {
	return Math.trunc(bt(e, t)) || 0;
}
function St(e, t) {
	return ht(bt(e, t), t);
}
function Ct(e, t) {
	return gt(xt(e, t), t);
}
function wt(e, t) {
	let [n, r] = tt(t, Wc), i = e + n, a = Math.sign(i);
	return a && a === -Math.sign(r) && (i -= a, r += a * 864e11), [i, r];
}
function Tt(e, t, n = 1) {
	return wt(e[0] + t[0] * n, e[1] + t[1] * n);
}
function Et(e, t) {
	return wt(e[0], e[1] + t);
}
function Dt(e, t) {
	return Tt(t, e, -1);
}
function Ot(e, t) {
	return Ze(e[0], t[0]) || Ze(e[1], t[1]);
}
function kt(e, t, n) {
	return Ot(e, t) === -1 || Ot(e, n) === 1;
}
function At(e, t = 1) {
	let n = BigInt(Wc / t);
	return [Number(e / n), Number(e % n) * t];
}
function jt(e, t = 1) {
	let [n, r] = tt(e, Wc / t);
	return [n, r * t];
}
function Mt(e, t = 1) {
	let [n, r] = e, i = Math.floor(r / t), a = Wc / t;
	return BigInt(n) * BigInt(a) + BigInt(i);
}
function Nt(e, t = 1, n) {
	let [r, i] = e, [a, o] = tt(i, t);
	return Wc / t * r + (a + (n ? o / t : 0));
}
function Pt(e) {
	return e[0] + e[1] / Wc;
}
function Ft(e, t, n = $e) {
	let [r, i] = e, [a, o] = n(i, t);
	return [Wc / t * r + a, o];
}
function It(e) {
	return je(e, "isoYear", Bl, zl, 1), e.isoYear === Bl ? je(e, "isoMonth", 4, 12, 1) : e.isoYear === zl && je(e, "isoMonth", 1, 9, 1), e;
}
function Lt(e) {
	return Rt({
		...e,
		...Nl,
		isoHour: 12
	}), e;
}
function Rt(e) {
	let t = je(e, "isoYear", Bl, zl, 1), n = t === Bl ? 1 : t === zl ? -1 : 0;
	return n && zt(Gt({
		...e,
		isoDay: e.isoDay + n,
		isoNanosecond: e.isoNanosecond - n
	})), e;
}
function zt(e) {
	if (!e || kt(e, Rl, Ll)) throw RangeError(bc);
	return e;
}
function Bt(e) {
	return at(e, 5, Dl)[1];
}
function Vt(e) {
	let [t, n] = $e(e, Wc);
	return [ot(n, 5, Dl), t];
}
function Ht(e) {
	return Ut(e)[0];
}
function Ut(e) {
	return Ft(e, Vc);
}
function Wt(e) {
	return Jt(e.isoYear, e.isoMonth, e.isoDay, e.isoHour, e.isoMinute, e.isoSecond, e.isoMillisecond);
}
function Gt(e) {
	let t = Wt(e);
	if (t !== void 0) {
		let [n, r] = tt(t, Lc);
		return [n, r * Bc + (e.isoMicrosecond || 0) * zc + (e.isoNanosecond || 0)];
	}
}
function Kt(e, t) {
	let [n, r] = Vt(Bt(e) - t);
	return zt(Gt({
		...e,
		isoDay: e.isoDay + r,
		...n
	}));
}
function qt(...e) {
	return Jt(...e) / Rc;
}
function Jt(...e) {
	let [t, n] = Yt(...e), r = t.valueOf();
	if (!isNaN(r)) return r - n * Lc;
}
function Yt(e, t = 1, n = 1, r = 0, i = 0, a = 0, o = 0) {
	let s = e === Bl ? 1 : e === zl ? -1 : 0, c = /* @__PURE__ */ new Date();
	return c.setUTCHours(r, i, a, o), c.setUTCFullYear(e, t - 1, n + s), [c, s];
}
function Xt(e, t) {
	let [n, r] = Et(e, t);
	r < 0 && (r += 864e11, --n);
	let [i, a] = $e(r, Bc), [o, s] = $e(a, zc);
	return Zt(n * Lc + i, o, s);
}
function Zt(e, t = 0, n = 0) {
	let r = Math.ceil(Math.max(0, Math.abs(e) - Il) / Lc) * Math.sign(e), i = new Date(e - r * Lc);
	return ze(kl, [
		i.getUTCFullYear(),
		i.getUTCMonth() + 1,
		i.getUTCDate() + r,
		i.getUTCHours(),
		i.getUTCMinutes(),
		i.getUTCSeconds(),
		i.getUTCMilliseconds(),
		t,
		n
	]);
}
function Qt(e, t) {
	if (t < -Il) throw RangeError(bc);
	let n = e.formatToParts(t), r = {};
	for (let e of n) r[e.type] = e.value;
	return r;
}
function $t(e) {
	return e.isoDay;
}
function en(e) {
	return [
		e.isoYear,
		e.isoMonth,
		e.isoDay
	];
}
function tn(e, t) {
	return [t, 0];
}
function nn(e, t) {
	if (!t) return [Ul, e];
}
function rn(e, t, n) {
	return {
		isoYear: e,
		isoMonth: t,
		isoDay: n
	};
}
function an() {
	return 7;
}
function on() {
	return Wl;
}
function sn(e, t) {
	switch (t) {
		case 2: return ln(e) ? 29 : 28;
		case 4:
		case 6:
		case 9:
		case 11: return 30;
	}
	return 31;
}
function cn(e) {
	return ln(e) ? 366 : 365;
}
function ln(e) {
	return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function un(e) {
	let [t, n] = Yt(e.isoYear, e.isoMonth, e.isoDay);
	return et(t.getUTCDay() - n, 7) || 7;
}
function dn(e) {
	return this.id === dl ? (({ isoYear: e }) => e < 1 ? ["gregory-inverse", 1 - e] : ["gregory", e])(e) : this.id === fl ? Kl(e) : [];
}
function fn(e) {
	let t = Wt(e);
	if (t < Gl) {
		let { isoYear: t } = e;
		return t < 1 ? ["japanese-inverse", 1 - t] : ["japanese", t];
	}
	let { era: n, eraYear: r } = so(Qt(rd(fl), t), fl);
	return [n, r];
}
function pn(e) {
	return mn(e), _n(e, 1), e;
}
function mn(e) {
	return gn(e, 1), e;
}
function hn(e) {
	return Ge(Ol, e, gn(e));
}
function gn(e, t) {
	let { isoYear: n } = e, r = je(e, "isoMonth", 1, on(), t);
	return {
		isoYear: n,
		isoMonth: r,
		isoDay: je(e, "isoDay", 1, sn(n, r), t)
	};
}
function _n(e, t) {
	return ze(Dl, [
		je(e, "isoHour", 0, 23, t),
		je(e, "isoMinute", 0, 59, t),
		je(e, "isoSecond", 0, 59, t),
		je(e, "isoMillisecond", 0, 999, t),
		je(e, "isoMicrosecond", 0, 999, t),
		je(e, "isoNanosecond", 0, 999, t)
	]);
}
function I(e) {
	return e === void 0 ? 0 : fu(pt(e));
}
function vn(e, t = 0) {
	e = kn(e);
	let n = pu(e), r = mu(e, t);
	return [
		fu(e),
		r,
		n
	];
}
function yn(e, t, n, r = 9, i = 0, a = 4) {
	t = kn(t);
	let o = uu(t, r, i), s = En(t), c = vu(t, a), l = lu(t, r, i, 1);
	return o == null ? o = Math.max(n, l) : Pn(o, l), s = Dn(s, l, 1), e && (c = ((e) => e < 4 ? (e + 2) % 4 : e)(c)), [
		o,
		l,
		s,
		c
	];
}
function bn(e, t = 6, n) {
	let r = En(e = An(e, ql)), i = vu(e, 7), a = lu(e, t);
	return a = ft(ql, a), r = Dn(r, a, void 0, n), [
		a,
		r,
		i
	];
}
function xn(e) {
	return hu(kn(e));
}
function Sn(e, t) {
	return wn(kn(e), t);
}
function Cn(e) {
	let t = Nn($l, cu, An(e, $l), 0);
	if (!t) throw RangeError(Ks($l, t));
	return t;
}
function wn(e, t = 4) {
	let n = On(e);
	return [vu(e, 4), ...Tn(lu(e, t), n)];
}
function Tn(e, t) {
	return e == null ? [t === void 0 ? 1 : 10 ** (9 - t), t] : [Gc[e], e < 4 ? 9 - 3 * e : -1];
}
function En(e) {
	let t = e[Xl];
	return t === void 0 ? 1 : xt(t, Xl);
}
function Dn(e, t, n, r) {
	let i = r ? Wc : Gc[t + 1];
	if (i) {
		let n = Gc[t];
		if (i % ((e = Me(Xl, e, 1, i / n - +!r, 1)) * n)) throw RangeError(Ks(Xl, e));
	} else e = Me(Xl, e, 1, n ? 10 ** 9 : 1, 1);
	return e;
}
function On(e) {
	let t = e[Zl];
	if (t !== void 0) {
		if (typeof t != "number") {
			if (_t(t) === "auto") return;
			throw RangeError(Ks(Zl, t));
		}
		t = Me(Zl, Math.floor(t), 0, 9, 1);
	}
	return t;
}
function kn(e) {
	return e === void 0 ? {} : pt(e);
}
function An(e, t) {
	return typeof e == "string" ? { [t]: e } : pt(e);
}
function jn(e) {
	return { overflow: tu[e] };
}
function Mn(e, t, n = 9, r = 0, i) {
	let a = t[e];
	if (a === void 0) return i ? r : void 0;
	if (a = _t(a), a === "auto") return i ? r : null;
	let o = Fc[a];
	if (o === void 0 && (o = Cl[a]), o === void 0) throw RangeError(Qs(e, a, Fc));
	return Me(e, o, r, n, 1, Ic), o;
}
function Nn(e, t, n, r = 0) {
	let i = n[e];
	if (i === void 0) return r;
	let a = _t(i), o = t[a];
	if (o === void 0) throw RangeError(Qs(e, a, t));
	return o;
}
function Pn(e, t) {
	if (t > e) throw RangeError(Ec);
}
function Fn(e) {
	return {
		branding: Tu,
		epochNanoseconds: e
	};
}
function In(e, t, n) {
	return {
		branding: wu,
		calendar: n,
		timeZone: t,
		epochNanoseconds: e
	};
}
function Ln(e, t = e.calendar) {
	return {
		branding: Su,
		calendar: t,
		...Ue(Ml, e)
	};
}
function Rn(e, t = e.calendar) {
	return {
		branding: xu,
		calendar: t,
		...Ue(Al, e)
	};
}
function zn(e, t = e.calendar) {
	return {
		branding: yu,
		calendar: t,
		...Ue(Al, e)
	};
}
function Bn(e, t = e.calendar) {
	return {
		branding: bu,
		calendar: t,
		...Ue(Al, e)
	};
}
function Vn(e) {
	return {
		branding: Cu,
		...Ue(jl, e)
	};
}
function L(e) {
	return {
		branding: Eu,
		sign: yi(e),
		...Ue(yl, e)
	};
}
function Hn(e) {
	return Ft(e.epochNanoseconds, Bc)[0];
}
function Un(e) {
	return Mt(e.epochNanoseconds);
}
function Wn(e) {
	return e.epochNanoseconds;
}
function Gn(e, t, n, r, i) {
	let a = Ei(r), [o, s] = ((e, t) => {
		let n = t((e = An(e, Jl))[Ql]), r = du(e);
		return r = ft(Jl, r), [r, n];
	})(i, e);
	if (!s && fi(Math.max(o, a), s)) return qn(r, o);
	if (!s) throw RangeError(Cc);
	if (!r.sign) return 0;
	let [c, l, u] = si(t, n, s), d = ci(u), f = li(u), p = ui(u), m = f(l, c, r);
	di(s) || (Rt(c), Rt(m));
	let h = p(l, c, m, o);
	return fi(o, s) ? qn(h, o) : Kn(h, d(m), o, l, c, d, f);
}
function Kn(e, t, n, r, i, a, o) {
	let s = yi(e), [c, l] = Jn(r, El(n, e), n, s, i, a, o), u = Yn(t, c, l);
	return e[R[n]] + u * s;
}
function qn(e, t) {
	return Nt(Si(e), Gc[t], 1);
}
function Jn(e, t, n, r, i, a, o) {
	let s = R[n], c = {
		...t,
		[s]: t[s] + r
	}, l = o(e, i, t), u = o(e, i, c);
	return [a(l), a(u)];
}
function Yn(e, t, n) {
	let r = Nt(Dt(t, n));
	if (!r) throw RangeError(uc);
	return Nt(Dt(t, e)) / r;
}
function Xn(e, t) {
	let [n, r, i] = bn(t, 5, 1);
	return Fn(pr(e.epochNanoseconds, n, r, i, 1));
}
function Zn(e, t, n) {
	let { epochNanoseconds: r, timeZone: i, calendar: a } = t, [o, s, c] = bn(n);
	if (o === 0 && s === 1) return t;
	let l = e(i);
	if (o === 6) r = rr(lr, l, t, c);
	else {
		let e = l.N(r);
		r = Hr(l, ir(Xt(r, e), o, s, c), e, 2, 0, 1);
	}
	return In(r, i, a);
}
function Qn(e, t) {
	return Ln(ir(e, ...bn(t)), e.calendar);
}
function $n(e, t) {
	let [n, r, i] = bn(t, 5);
	var a;
	return Vn((a = i, or(e, cr(n, r), a)[0]));
}
function er(e, t) {
	let n = e(t.timeZone), [r, i] = lr(Nu(t, n)), a = Nt(Dt(Wr(n, r), Wr(n, i)), Uc, 1);
	if (a <= 0) throw RangeError(uc);
	return a;
}
function tr(e, t) {
	let { timeZone: n, calendar: r } = t;
	return In(nr(ur, e(n), t), n, r);
}
function nr(e, t, n) {
	return Wr(t, e(Nu(n, t)));
}
function rr(e, t, n, r) {
	let [i, a] = e(Nu(n, t)), o = n.epochNanoseconds, s = Wr(t, i), c = Wr(t, a);
	if (kt(o, s, c)) throw RangeError(uc);
	return gr(Yn(o, s, c), r) ? c : s;
}
function ir(e, t, n, r) {
	return ar(e, cr(t, n), r);
}
function ar(e, t, n) {
	let [r, i] = or(e, t, n);
	return Rt({
		...oi(e, i),
		...r
	});
}
function or(e, t, n) {
	return Vt(hr(Bt(e), t, n));
}
function sr(e) {
	return hr(e, Hc, 7);
}
function cr(e, t) {
	return Gc[e] * t;
}
function lr(e) {
	let t = ur(e);
	return [t, oi(t, 1)];
}
function ur(e) {
	return Pl(6, e);
}
function dr(e, t, n) {
	let r = Math.min(Ei(e), 6);
	return Ci(mr(Si(e, r), t, n), r);
}
function fr(e, t, n, r, i, a, o, s, c, l) {
	if (r === 0 && i === 1) return e;
	let [u, d, f] = (fi(r, s) ? di(s) && r < 6 && n >= 6 ? vr : _r : yr)(e, t, n, r, i, a, o, s, c, l);
	return f && r !== 7 && (u = ((e, t, n, r, i, a, o, s) => {
		let c = yi(e);
		for (let l = r + 1; l <= n; l++) {
			if (l === 7 && n !== 7) continue;
			let r = El(l, e);
			r[R[l]] += c;
			let u = Nt(Dt(o(s(i, a, r)), t));
			if (u && Math.sign(u) !== c) break;
			e = r;
		}
		return e;
	})(u, d, n, Math.max(6, r), o, s, c, l)), u;
}
function pr(e, t, n, r, i) {
	return t === 6 ? [hr(Pt(e), n, r), 0] : mr(e, cr(t, n), r, i);
}
function mr(e, t, n, r) {
	let [i, a] = e;
	r && a < 0 && (a += 864e11, --i);
	let [o, s] = $e(hr(a, t, n), Wc);
	return wt(i + o, s);
}
function hr(e, t, n) {
	return gr(e / t, n) * t;
}
function gr(e, t) {
	return Du[t](e);
}
function _r(e, t, n, r, i, a) {
	let o = yi(e), s = Si(e), c = pr(s, r, i, a), l = Dt(s, c), u = Math.sign(c[0] - s[0]) === o, d = Ci(c, Math.min(n, 6));
	return [
		{
			...e,
			...d
		},
		Tt(t, l),
		u
	];
}
function vr(e, t, n, r, i, a, o, s, c, l) {
	let u = yi(e) || 1, d = Nt(Si(e, 5)), f = cr(r, i), p = hr(d, f, a), [m, h] = Jn(o, {
		...e,
		...Tl
	}, 6, u, s, c, l), g = p - Nt(Dt(m, h)), _ = 0;
	g && Math.sign(g) !== u ? t = Et(m, p) : (_ += u, p = hr(g, f, a), t = Et(h, p));
	let v = wi(p);
	return [
		{
			...e,
			...v,
			days: e.days + _
		},
		t,
		!!_
	];
}
function yr(e, t, n, r, i, a, o, s, c, l) {
	let u = yi(e), d = R[r], f = El(r, e);
	r === 7 && (e = {
		...e,
		weeks: e.weeks + Math.trunc(e.days / 7)
	});
	let p = nt(e[d], i) * i;
	f[d] = p;
	let [m, h] = Jn(o, f, r, i * u, s, c, l), g = p + Yn(t, m, h) * u * i, _ = hr(g, i, a), v = Math.sign(_ - g) === u;
	return f[d] = _, [
		f,
		v ? h : m,
		v
	];
}
function br(e, t, n, r) {
	let [i, a, o, s] = ((e) => {
		let t = wn(e = kn(e));
		return [e.timeZone, ...t];
	})(r), c = i !== void 0;
	return ((e, t, n, r, i, a) => {
		n = mr(n, i, r, 1);
		let o = t.N(n);
		return Ar(Xt(n, o), a) + (e ? Fr(sr(o)) : "Z");
	})(c, t(c ? e(i) : Ou), n.epochNanoseconds, a, o, s);
}
function xr(e, t, n) {
	let [r, i, a, o, s, c] = ((e) => {
		e = kn(e);
		let t = hu(e), n = On(e), r = _u(e), i = vu(e, 4), a = lu(e, 4);
		return [
			t,
			gu(e),
			r,
			i,
			...Tn(a, n)
		];
	})(n);
	return ((e, t, n, r, i, a, o, s, c, l) => {
		r = mr(r, c, s, 1);
		let u = e(n).N(r);
		return Ar(Xt(r, u), l) + Fr(sr(u), o) + ((e, t) => t === 1 ? "" : "[" + (t === 2 ? "!" : "") + e + "]")(n, a) + Ir(t, i);
	})(e, t.calendar, t.timeZone, t.epochNanoseconds, r, i, a, o, s, c);
}
function Sr(e, t) {
	let [n, r, i, a] = ((e) => (e = kn(e), [hu(e), ...wn(e)]))(t);
	return o = e.calendar, s = n, c = a, Ar(ar(e, i, r), c) + Ir(o, s);
	var o, s, c;
}
function Cr(e, t) {
	return n = e.calendar, r = e, i = xn(t), jr(r) + Ir(n, i);
	var n, r, i;
}
function wr(e, t) {
	return Or(e.calendar, Mr, e, xn(t));
}
function Tr(e, t) {
	return Or(e.calendar, Nr, e, xn(t));
}
function Er(e, t) {
	let [n, r, i] = Sn(t);
	return a = i, Pr(or(e, r, n)[0], a);
	var a;
}
function Dr(e, t) {
	let [n, r, i] = Sn(t, 3);
	return r > 1 && bi(e = {
		...e,
		...dr(e, r, n)
	}), ((e, t) => {
		let { sign: n } = e, r = n === -1 ? _i(e) : e, { hours: i, minutes: a } = r, [o, s] = Ft(Si(r, 3), Vc, tt);
		xi(o);
		let c = Rr(s, t), l = t >= 0 || !n || c;
		return (n < 0 ? "-" : "") + "P" + kr({
			Y: Br(r.years),
			M: Br(r.months),
			W: Br(r.weeks),
			D: Br(r.days)
		}) + (i || a || o || l ? "T" + kr({
			H: Br(i),
			M: Br(a),
			S: Br(o, l) + c
		}) : "");
	})(e, i);
}
function Or(e, t, n, r) {
	return r === 1 ? e === "iso8601" ? t(n) : jr(n) : r > 1 || r === 0 && e !== "iso8601" ? jr(n) + Lr(e, r === 2) : t(n);
}
function kr(e) {
	let t = [];
	for (let n in e) {
		let r = e[n];
		r && t.push(r, n);
	}
	return t.join("");
}
function Ar(e, t) {
	return jr(e) + "T" + Pr(e, t);
}
function jr(e) {
	return Mr(e) + "-" + Pc(e.isoDay);
}
function Mr(e) {
	let { isoYear: t } = e;
	return (t < 0 || t > 9999 ? zr(t) + Xe(6, Math.abs(t)) : Xe(4, t)) + "-" + Pc(e.isoMonth);
}
function Nr(e) {
	return Pc(e.isoMonth) + "-" + Pc(e.isoDay);
}
function Pr(e, t) {
	let n = [Pc(e.isoHour), Pc(e.isoMinute)];
	return t !== -1 && n.push(Pc(e.isoSecond) + ((e, t, n, r) => Rr(e * 1e6 + t * 1e3 + n, r))(e.isoMillisecond, e.isoMicrosecond, e.isoNanosecond, t)), n.join(":");
}
function Fr(e, t = 0) {
	if (t === 1) return "";
	let [n, r] = $e(Math.abs(e), Uc), [i, a] = $e(r, Hc), [o, s] = $e(a, Vc);
	return zr(e) + Pc(n) + ":" + Pc(i) + (o || s ? ":" + Pc(o) + Rr(s) : "");
}
function Ir(e, t) {
	return t !== 1 && (t > 1 || t === 0 && e !== "iso8601") ? Lr(e, t === 2) : "";
}
function Lr(e, t) {
	return "[" + (t ? "!" : "") + "u-ca=" + e + "]";
}
function Rr(e, t) {
	let n = Xe(9, e);
	return n = t === void 0 ? n.replace(Mu, "") : n.slice(0, t), n ? "." + n : "";
}
function zr(e) {
	return e < 0 ? "-" : "+";
}
function Br(e, t) {
	return e || t ? e.toLocaleString("fullwide", { useGrouping: 0 }) : "";
}
function Vr(e, t) {
	let { epochNanoseconds: n } = e, r = (t.N ? t : t(e.timeZone)).N(n), i = Xt(n, r);
	return {
		calendar: e.calendar,
		...i,
		offsetNanoseconds: r
	};
}
function Hr(e, t, n, r = 0, i = 0, a, o) {
	if (n !== void 0 && r === 1 && (r === 1 || o)) return Kt(t, n);
	let s = e.v(t);
	if (n !== void 0 && r !== 3) {
		let e = ((e, t, n, r) => {
			let i = Gt(t);
			r && (n = sr(n));
			for (let t of e) {
				let e = Nt(Dt(t, i));
				if (r && (e = sr(e)), e === n) return t;
			}
		})(s, t, n, a);
		if (e !== void 0) return e;
		if (r === 0) throw RangeError(vc);
	}
	return o ? Gt(t) : Ur(e, t, i, s);
}
function Ur(e, t, n = 0, r = e.v(t)) {
	if (r.length === 1) return r[0];
	if (n === 1) throw RangeError(yc);
	if (r.length) return r[+(n === 3)];
	let i = Gt(t), a = ((e, t) => {
		let n = e.N(Et(t, -Wc));
		return ((e) => {
			if (e > 864e11) throw RangeError(_c);
			return e;
		})(e.N(Et(t, Wc)) - n);
	})(e, i) * (n === 2 ? -1 : 1);
	return (r = e.v(Xt(i, a)))[n === 2 ? 0 : r.length - 1];
}
function Wr(e, t) {
	let n = e.v(t);
	if (n.length) return n[0];
	let r = Et(Gt(t), -Wc);
	return e.l(r, 1);
}
function Gr(e, t, n) {
	return Fn(zt(Tt(t.epochNanoseconds, ((e) => {
		if (Ti(e)) throw RangeError(wc);
		return Si(e, 5);
	})(e ? _i(n) : n))));
}
function Kr(e, t, n, r, i, a = Object.create(null)) {
	let o = t(r.timeZone), s = e(r.calendar);
	return {
		...r,
		...Zr(o, s, r, n ? _i(i) : i, a)
	};
}
function qr(e, t, n, r, i = Object.create(null)) {
	let { calendar: a } = n;
	return Ln(Qr(e(a), n, t ? _i(r) : r, i), a);
}
function Jr(e, t, n, r, i) {
	let { calendar: a } = n;
	return Rn($r(e(a), n, t ? _i(r) : r, i), a);
}
function Yr(e, t, n, r, i) {
	let a = n.calendar, o = e(a), s = Lt(ei(o, n));
	return t && (r = gi(r)), r.sign < 0 && (s = o.P(s, {
		...wl,
		months: 1
	}), s = oi(s, -1)), zn(ei(o, o.P(s, r, i)), a);
}
function Xr(e, t, n) {
	return Vn(ti(t, e ? _i(n) : n)[0]);
}
function Zr(e, t, n, r, i) {
	let a = Si(r, 5), o = n.epochNanoseconds;
	if (Ti(r)) {
		let s = Nu(n, e);
		o = Tt(Ur(e, {
			...$r(t, s, {
				...r,
				...Tl
			}, i),
			...Ue(Dl, s)
		}), a);
	} else o = Tt(o, a), I(i);
	return { epochNanoseconds: zt(o) };
}
function Qr(e, t, n, r) {
	let [i, a] = ti(t, n);
	return Rt({
		...$r(e, t, {
			...n,
			...Tl,
			days: n.days + a
		}, r),
		...i
	});
}
function $r(e, t, n, r) {
	if (n.years || n.months || n.weeks) return e.P(t, n, r);
	I(r);
	let i = n.days + Si(n, 5)[0];
	return i ? Lt(oi(t, i)) : t;
}
function ei(e, t, n = 1) {
	return oi(t, n - e.day(t));
}
function ti(e, t) {
	let [n, r] = Si(t, 5), [i, a] = Vt(Bt(e) + r);
	return [i, n + a];
}
function ni(e, t, n) {
	let r = I(n), i, { years: a, months: o, weeks: s, days: c } = t;
	if (c += Si(t, 5)[0], a || o) i = ri(this, e, a, o, r);
	else {
		if (!s && !c) return e;
		i = Wt(e);
	}
	if (i === void 0) throw RangeError(bc);
	return i += (7 * s + c) * Lc, Lt(Zt(i));
}
function ri(e, t, n, r, i) {
	let [a, o, s] = e.u(t);
	if (n) {
		let [t, r] = e.m(a, o);
		a += n, o = Qa(t, r, e.F(a)), o = Me("month", o, 1, e.O(a), i);
	}
	return r && ([a, o] = e.p(a, o, r)), s = Me("day", s, 1, e.B(a, o), i), e.M(a, o, s);
}
function ii(e, t, n) {
	return e += nt(n, Wl), (t += rt(n, Wl)) < 1 ? (e--, t += Wl) : t > Wl && (e++, t -= Wl), [e, t];
}
function ai(e, t, n) {
	if (n) {
		if (t += n, !Number.isSafeInteger(t)) throw RangeError(bc);
		if (n < 0) for (; t < 1;) t += yo.call(this, --e);
		else {
			let n;
			for (; t > (n = yo.call(this, e));) t -= n, e++;
		}
	}
	return [e, t];
}
function oi(e, t) {
	return t ? {
		...e,
		...Zt(Wt(e) + t * Lc)
	} : e;
}
function si(e, t, n) {
	let r = e(n.calendar);
	return di(n) ? [
		n,
		r,
		t(n.timeZone)
	] : [{
		...n,
		...Nl
	}, r];
}
function ci(e) {
	return e ? Wn : Gt;
}
function li(e) {
	return e ? F(Zr, e) : Qr;
}
function ui(e) {
	return e ? F(Oa, e) : ka;
}
function di(e) {
	return e && e.epochNanoseconds;
}
function fi(e, t) {
	return e <= 6 - !!di(t);
}
function pi(e, t, n, r, i, a, o) {
	let s = e(kn(o).relativeTo), c = Math.max(Ei(i), Ei(a));
	if (fi(c, s)) return L(bi(((e, t, n, r) => {
		let i = Tt(Si(e), Si(t), r ? -1 : 1);
		if (!Number.isFinite(i[0])) throw RangeError(bc);
		return {
			...wl,
			...Ci(i, n)
		};
	})(i, a, c, r)));
	if (!s) throw RangeError(Cc);
	r && (a = _i(a));
	let [l, u, d] = si(t, n, s), f = li(d);
	return L(ui(d)(u, l, f(u, f(u, l, i), a), c));
}
function mi(e, t, n, r, i) {
	let a = Ei(r), [o, s, c, l, u] = ((e, t, n) => {
		e = An(e, ql);
		let r = uu(e), i = n(e[Ql]), a = En(e), o = vu(e, 7), s = lu(e);
		if (r === void 0 && s === void 0) throw RangeError(Tc);
		if (s ??= 0, r ??= Math.max(s, t), Pn(r, s), a = Dn(a, s, 1), a > 1 && s > 5 && r !== s) throw RangeError("For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit");
		return [
			r,
			s,
			a,
			o,
			i
		];
	})(i, a, e);
	if (!u && Math.max(a, o) <= 6) return L(bi(((e, t, n, r, i) => {
		let a = pr(Si(e), n, r, i);
		return {
			...wl,
			...Ci(a, t)
		};
	})(r, o, s, c, l)));
	if (!di(u) && !r.sign) return r;
	if (!u) throw RangeError(Cc);
	let [d, f, p] = si(t, n, u), m = ci(p), h = li(p), g = ui(p), _ = h(f, d, r);
	di(u) || (Rt(d), Rt(_));
	let v = g(f, d, _, o), y = r.sign, b = yi(v);
	if (y && b && y !== b) throw RangeError(uc);
	return v = fr(v, m(_), o, s, c, l, f, d, m, h), L(v);
}
function hi(e) {
	return e.sign === -1 ? gi(e) : e;
}
function gi(e) {
	return L(_i(e));
}
function _i(e) {
	let t = {};
	for (let n of R) t[n] = -1 * e[n] || 0;
	return t;
}
function vi(e) {
	return !e.sign;
}
function yi(e, t = R) {
	let n = 0;
	for (let r of t) {
		let t = Math.sign(e[r]);
		if (t) {
			if (n && n !== t) throw RangeError(Sc);
			n = t;
		}
	}
	return n;
}
function bi(e) {
	for (let t of Sl) Me(t, e[t], -Pu, Pu, 1);
	return xi(Nt(Si(e), Vc)), e;
}
function xi(e) {
	if (!Number.isSafeInteger(e)) throw RangeError(xc);
}
function Si(e, t = 6) {
	return at(e, t, R);
}
function Ci(e, t = 6) {
	let [n, r] = e, i = ot(r, t, R);
	if (i[R[t]] += n * (864e11 / Gc[t]), !Number.isFinite(i[R[t]])) throw RangeError(bc);
	return i;
}
function wi(e, t = 5) {
	return ot(e, t, R);
}
function Ti(e) {
	return !!yi(e, xl);
}
function Ei(e) {
	let t = 9;
	for (; t > 0 && !e[R[t]]; t--);
	return t;
}
function Di(e, t) {
	return [e, t];
}
function Oi(e) {
	let t = Math.floor(e / ku) * ku;
	return [t, t + ku];
}
function ki(e) {
	let t = Ki(e = vt(e));
	if (!t) throw RangeError(Dc(e));
	let n;
	if (t.C) n = 0;
	else {
		if (!t.offset) throw RangeError(Dc(e));
		n = Mi(t.offset);
	}
	return t.timeZone && Yi(t.timeZone, 1), Fn(Kt(pn(t), n));
}
function Ai(e) {
	let t = Ki(gl(e));
	if (!t) throw RangeError(Dc(e));
	if (t.timeZone) return Hi(t, t.offset ? Mi(t.offset) : void 0);
	if (t.C) throw RangeError(Dc(e));
	return Wi(t);
}
function ji(e, t) {
	let n = Ki(gl(e));
	if (!n || !n.timeZone) throw RangeError(Dc(e));
	let { offset: r } = n, i = r ? Mi(r) : void 0, [, a, o] = vn(t);
	return Hi(n, i, a, o);
}
function Mi(e) {
	let t = Yi(e);
	if (t === void 0) throw RangeError(Dc(e));
	return t;
}
function Ni(e) {
	let t = Ki(gl(e));
	if (!t || t.C) throw RangeError(Dc(e));
	return Ln(Ui(t));
}
function Pi(e, t, n) {
	let r = Ki(gl(e));
	if (!r || r.C) throw RangeError(Dc(e));
	return t ? r.calendar === "iso8601" && (r = r.isoYear === -271821 && r.isoMonth === 4 ? {
		...r,
		isoDay: 20,
		...Nl
	} : {
		...r,
		isoDay: 1,
		...Nl
	}) : n && r.calendar === "iso8601" && (r = {
		...r,
		isoYear: Ul
	}), Rn(r.k ? Ui(r) : Wi(r));
}
function Fi(e, t) {
	let n = qi(gl(t));
	if (n) return Ii(n), zn(It(mn(n)));
	let r = Pi(t, 1);
	return zn(ei(e(r.calendar), r));
}
function Ii(e) {
	if (e.calendar !== "iso8601") throw RangeError(Oc(e.calendar));
}
function Li(e, t) {
	let n = Ji(gl(t));
	if (n) return Ii(n), Bn(mn(n));
	let r = Pi(t, 0, 1), { calendar: i } = r, a = e(i), [o, s, c] = a.u(r), [l, u] = a.m(o, s), [d, f] = a.R(l, u, c);
	return Bn(Lt(a.U(d, f, c)), i);
}
function Ri(e) {
	let t, n = ((e) => {
		let t = Ju.exec(e);
		return t ? (Qi(t[10]), Zi(t)) : void 0;
	})(gl(e));
	if (!n) {
		if (n = Ki(e), !n || !n.k) throw RangeError(Dc(e));
		if (n.C) throw RangeError(Oc("Z"));
		Ii(n);
	}
	if ((t = qi(e)) && hn(t) || (t = Ji(e)) && hn(t)) throw RangeError(Dc(e));
	return Vn(_n(n, 1));
}
function zi(e) {
	let t = ((e) => {
		let t = Zu.exec(e);
		return t ? ((e) => {
			function t(e, t, a) {
				let o = 0, s = 0;
				if (a && ([o, i] = $e(i, Gc[a])), e !== void 0) {
					if (r) throw RangeError(Oc(e));
					s = ((e) => {
						let t = parseInt(e);
						if (!Number.isFinite(t)) throw RangeError(Oc(e));
						return t;
					})(e), n = 1, t && (i = $i(t) * (Gc[a] / 1e9), r = 1);
				}
				return o + s;
			}
			let n = 0, r = 0, i = 0, a = {
				...ze(R, [
					t(e[2]),
					t(e[3]),
					t(e[4]),
					t(e[5]),
					t(e[6], e[7], 5),
					t(e[8], e[9], 4),
					t(e[10], e[11], 3)
				]),
				...ot(i, 2, R)
			};
			if (!n) throw RangeError(Xs(R));
			return ta(e[1]) < 0 && (a = _i(a)), a;
		})(t) : void 0;
	})(gl(e));
	if (!t) throw RangeError(Dc(e));
	return L(bi(t));
}
function Bi(e) {
	let t = Ki(e) || qi(e) || Ji(e);
	return t ? t.calendar : e;
}
function Vi(e) {
	let t = Ki(e);
	return t && (t.timeZone || t.C && Ou || t.offset) || e;
}
function Hi(e, t, n = 0, r = 0) {
	let i = ia(e.timeZone), a = z(i), o;
	return pn(e), o = e.k ? Hr(a, e, t, n, r, !a.j, e.C) : Wr(a, e), In(o, i, wo(e.calendar));
}
function Ui(e) {
	return Gi(Rt(pn(e)));
}
function Wi(e) {
	return Gi(Lt(mn(e)));
}
function Gi(e) {
	return {
		...e,
		calendar: wo(e.calendar)
	};
}
function Ki(e) {
	let t = qu.exec(e);
	return t ? ((e) => {
		let t = e[10], n = (t || "").toUpperCase() === "Z";
		return {
			isoYear: Xi(e),
			isoMonth: parseInt(e[4]),
			isoDay: parseInt(e[5]),
			...Zi(e.slice(5)),
			...Qi(e[16]),
			k: !!e[6],
			C: n,
			offset: n ? void 0 : t
		};
	})(t) : void 0;
}
function qi(e) {
	let t = Gu.exec(e);
	return t ? ((e) => ({
		isoYear: Xi(e),
		isoMonth: parseInt(e[4]),
		isoDay: 1,
		...Qi(e[5])
	}))(t) : void 0;
}
function Ji(e) {
	let t = Ku.exec(e);
	return t ? ((e) => ({
		isoYear: Ul,
		isoMonth: parseInt(e[1]),
		isoDay: parseInt(e[2]),
		...Qi(e[3])
	}))(t) : void 0;
}
function Yi(e, t) {
	let n = Yu.exec(e);
	return n ? ((e, t) => {
		let n = e[4] || e[5];
		if (t && n) throw RangeError(Oc(n));
		return ((e) => {
			if (Math.abs(e) >= 864e11) throw RangeError(gc);
			return e;
		})((na(e[2]) * Uc + na(e[3]) * Hc + na(e[4]) * Vc + $i(e[5] || "")) * ta(e[1]));
	})(n, t) : void 0;
}
function Xi(e) {
	let t = ta(e[1]), n = parseInt(e[2] || e[3]);
	if (t < 0 && !n) throw RangeError(Oc(-0));
	return t * n;
}
function Zi(e) {
	let t = na(e[3]);
	return {
		...Vt($i(e[4] || ""))[0],
		isoHour: na(e[1]),
		isoMinute: na(e[2]),
		isoSecond: t === 60 ? 59 : t
	};
}
function Qi(e) {
	let t, n, r = [];
	if (e.replace(Xu, ((e, i, a) => {
		let o = !!i, [s, c] = a.split("=").reverse();
		if (c) {
			if (c === "u-ca") r.push(s), t ||= o;
			else if (o || /[A-Z]/.test(c)) throw RangeError(Oc(e));
		} else {
			if (n) throw RangeError(Oc(e));
			n = s;
		}
		return "";
	})), r.length > 1 && t) throw RangeError(Oc(e));
	return {
		timeZone: n,
		calendar: r[0] || "iso8601"
	};
}
function $i(e) {
	return parseInt(e.padEnd(9, "0"));
}
function ea(e) {
	return RegExp(`^${e}$`, "i");
}
function ta(e) {
	return e && e !== "+" ? -1 : 1;
}
function na(e) {
	return e === void 0 ? 0 : parseInt(e);
}
function ra(e) {
	return ia(gl(e));
}
function ia(e) {
	let t = oa(e);
	return typeof t == "number" ? Fr(t) : t ? ((e) => {
		if (ed.test(e)) throw RangeError(pc(e));
		if ($u.test(e)) throw RangeError(hc);
		return e.toLowerCase().split("/").map(((e, t) => (e.length <= 3 || /\d/.test(e)) && !/etc|yap/.test(e) ? e.toUpperCase() : e.replace(/baja|dumont|[a-z]+/g, ((e, n) => e.length <= 2 && !t || e === "in" || e === "chat" ? e.toUpperCase() : e.length > 2 || !n ? Je(e).replace(/island|noronha|murdo|rivadavia|urville/, Je) : e)))).join("/");
	})(e) : Ou;
}
function aa(e) {
	let t = oa(e);
	return typeof t == "number" ? t : t ? t.resolvedOptions().timeZone : Ou;
}
function oa(e) {
	let t = Yi(e = e.toUpperCase(), 1);
	return t === void 0 ? e === Ou ? void 0 : Qu(e) : t;
}
function sa(e, t) {
	return Ot(e.epochNanoseconds, t.epochNanoseconds);
}
function ca(e, t) {
	return Ot(e.epochNanoseconds, t.epochNanoseconds);
}
function la(e, t, n, r, i, a) {
	let o = e(kn(a).relativeTo), s = Math.max(Ei(r), Ei(i));
	if (Ge(R, r, i)) return 0;
	if (fi(s, o)) return Ot(Si(r), Si(i));
	if (!o) throw RangeError(Cc);
	let [c, l, u] = si(t, n, o), d = ci(u), f = li(u);
	return Ot(d(f(l, c, r)), d(f(l, c, i)));
}
function ua(e, t) {
	return da(e, t) || fa(e, t);
}
function da(e, t) {
	return Ze(Wt(e), Wt(t));
}
function fa(e, t) {
	return Ze(Bt(e), Bt(t));
}
function pa(e, t) {
	return !sa(e, t);
}
function ma(e, t) {
	return !ca(e, t) && !!ba(e.timeZone, t.timeZone) && e.calendar === t.calendar;
}
function ha(e, t) {
	return !ua(e, t) && e.calendar === t.calendar;
}
function ga(e, t) {
	return !da(e, t) && e.calendar === t.calendar;
}
function _a(e, t) {
	return !da(e, t) && e.calendar === t.calendar;
}
function va(e, t) {
	return !da(e, t) && e.calendar === t.calendar;
}
function ya(e, t) {
	return !fa(e, t);
}
function ba(e, t) {
	if (e === t) return 1;
	try {
		return aa(e) === aa(t);
	} catch {}
}
function xa(e, t, n, r) {
	let i = yn(e, r, 3, 5), a = Na(t.epochNanoseconds, n.epochNanoseconds, ...i);
	return L(e ? _i(a) : a);
}
function Sa(e, t, n, r, i, a) {
	let o = Va(r.calendar, i.calendar), [s, c, l, u] = yn(n, a, 5), d = r.epochNanoseconds, f = i.epochNanoseconds, p = Ot(f, d), m;
	if (p) {
		if (s < 6) m = Na(d, f, s, c, l, u);
		else {
			let n = t(Ha(r.timeZone, i.timeZone)), d = e(o);
			m = Aa(d, n, r, i, p, s, a), m = fr(m, f, s, c, l, u, d, r, Wn, F(Zr, n));
		}
	} else m = wl;
	return L(n ? _i(m) : m);
}
function Ca(e, t, n, r, i) {
	let a = Va(n.calendar, r.calendar), [o, s, c, l] = yn(t, i, 6), u = Gt(n), d = Gt(r), f = Ot(d, u), p;
	if (f) {
		if (o <= 6) p = Na(u, d, o, s, c, l);
		else {
			let t = e(a);
			p = ja(t, n, r, f, o, i), p = fr(p, d, o, s, c, l, t, n, Gt, Qr);
		}
	} else p = wl;
	return L(t ? _i(p) : p);
}
function wa(e, t, n, r, i) {
	let a = Va(n.calendar, r.calendar);
	return Ea(t, (() => e(a)), n, r, ...yn(t, i, 6, 9, 6));
}
function Ta(e, t, n, r, i) {
	let a = Va(n.calendar, r.calendar), o = yn(t, i, 9, 9, 8), s = e(a), c = ei(s, n), l = ei(s, r);
	return c.isoYear === l.isoYear && c.isoMonth === l.isoMonth && c.isoDay === l.isoDay ? L(wl) : Ea(t, (() => s), Lt(c), Lt(l), ...o, 8);
}
function Ea(e, t, n, r, i, a, o, s, c = 6) {
	let l = Gt(n), u = Gt(r);
	if (l === void 0 || u === void 0) throw RangeError(bc);
	let d;
	if (Ot(u, l)) {
		if (i === 6) d = Na(l, u, i, a, o, s);
		else {
			let e = t();
			d = e.h(n, r, i), a === c && o === 1 || (d = fr(d, u, i, a, o, s, e, n, Gt, $r));
		}
	} else d = wl;
	return L(e ? _i(d) : d);
}
function Da(e, t, n, r) {
	let [i, a, o, s] = yn(e, r, 5, 5), c = hr(La(t, n), cr(a, o), s), l = {
		...wl,
		...wi(c, i)
	};
	return L(e ? _i(l) : l);
}
function Oa(e, t, n, r, i, a) {
	let o = Ot(r.epochNanoseconds, n.epochNanoseconds);
	return o ? i < 6 ? Pa(n.epochNanoseconds, r.epochNanoseconds, i) : Aa(t, e, n, r, o, i, a) : wl;
}
function ka(e, t, n, r, i) {
	let a = Gt(t), o = Gt(n), s = Ot(o, a);
	return s ? r <= 6 ? Pa(a, o, r) : ja(e, t, n, s, r, i) : wl;
}
function Aa(e, t, n, r, i, a, o) {
	let [s, c, l] = Ma(t, n, r, i);
	var u, d;
	return {
		...a === 6 ? (u = s, d = c, {
			...wl,
			days: Fa(u, d)
		}) : e.h(s, c, a, o),
		...wi(l)
	};
}
function ja(e, t, n, r, i, a) {
	let [o, s, c] = ((e, t, n) => {
		let r = t, i = La(e, t);
		return Math.sign(i) === -n && (r = oi(t, -n), i += 864e11 * n), [
			e,
			r,
			i
		];
	})(t, n, r);
	return {
		...e.h(o, s, i, a),
		...wi(c)
	};
}
function Ma(e, t, n, r) {
	function i() {
		return d = {
			...oi(s, l++ * -r),
			...o
		}, f = Ur(e, d), Ot(c, f) === -r;
	}
	let a = Nu(t, e), o = Ue(Dl, a), s = Nu(n, e), c = n.epochNanoseconds, l = 0, u = La(a, s), d, f;
	if (Math.sign(u) === -r && l++, i() && (r === -1 || i())) throw RangeError(uc);
	let p = Nt(Dt(f, c));
	return [
		a,
		d,
		p
	];
}
function Na(e, t, n, r, i, a) {
	return {
		...wl,
		...Ci(pr(Dt(e, t), r, i, a), n)
	};
}
function Pa(e, t, n) {
	return {
		...wl,
		...Ci(Dt(e, t), n)
	};
}
function Fa(e, t) {
	return Ia(Wt(e), Wt(t));
}
function Ia(e, t) {
	return Math.trunc((t - e) / Lc);
}
function La(e, t) {
	return Bt(t) - Bt(e);
}
function Ra(e, t, n) {
	if (n <= 7) {
		let r = 0, i = Fa({
			...e,
			...Nl
		}, {
			...t,
			...Nl
		});
		return n === 7 && ([r, i] = tt(i, 7)), {
			...wl,
			weeks: r,
			days: i
		};
	}
	let r = this.u(e), i = this.u(t), [a, o, s] = ((e, t, n, r, i, a, o) => {
		let s = i - t, c = a - n, l = o - r;
		if (s || c) {
			let u = Math.sign(s || c), d = e.B(i, a), f = 0;
			if (Math.sign(l) === -u) {
				let r = d;
				[i, a] = e.p(i, a, -u), s = i - t, c = a - n, d = e.B(i, a), f = u < 0 ? -r : d;
			}
			if (l = o - Math.min(r, d) + f, s) {
				let [r, o] = e.m(t, n), [l, d] = e.m(i, a);
				if (c = l - r || Number(d) - Number(o), Math.sign(c) === -u) {
					let n = u < 0 && -e.O(i);
					s = (i -= u) - t, c = a - Qa(r, o, e.F(i)) + (n || e.O(i));
				}
			}
		}
		return [
			s,
			c,
			l
		];
	})(this, ...r, ...i);
	return n === 8 && (o += this.q(a, r[0]), a = 0), {
		...wl,
		years: a,
		months: o,
		days: s
	};
}
function za(e) {
	return e * Wl;
}
function Ba(e, t) {
	let n = t + e, r = Math.sign(e), i = r < 0 ? -1 : 0, a = 0;
	for (let e = t; e !== n; e += r) a += yo.call(this, e + i);
	return a;
}
function Va(e, t) {
	if (e !== t) throw RangeError(fc);
	return e;
}
function Ha(e, t) {
	if (!ba(e, t)) throw RangeError(mc);
	return e;
}
function Ua(e) {
	return this.I(e)[0];
}
function Wa(e) {
	return this.I(e)[1];
}
function Ga(e) {
	let [t] = this.u(e);
	return this.L(t);
}
function Ka(e) {
	let [t] = this.u(e);
	return this.O(t);
}
function qa(e) {
	let [t, n] = this.u(e);
	return this.B(t, n);
}
function Ja(e) {
	let [t] = this.u(e);
	return this.G(t);
}
function Ya(e) {
	let [t] = this.u(e);
	return Ia(this.M(t), Wt(e)) + 1;
}
function Xa(e) {
	let t = td.exec(e);
	if (!t) throw RangeError(oc(e));
	return [parseInt(t[1]), !!t[2]];
}
function Za(e, t) {
	return "M" + Pc(e) + (t ? "L" : "");
}
function Qa(e, t, n) {
	return e + (t || n && e >= n ? 1 : 0);
}
function $a(e, t) {
	return e - (t && e >= t ? 1 : 0);
}
function eo(e, t) {
	return (t + e) * (Math.sign(t) || 1) || 0;
}
function to(e) {
	return pl[ro(e)];
}
function no(e) {
	return hl[ro(e)];
}
function ro(e) {
	return To(e.id || "iso8601");
}
function io(e) {
	function t(e) {
		return ((e, t) => ({
			...so(e, t),
			V: e.month,
			day: parseInt(e.day)
		}))(Qt(n, e), r);
	}
	let n = rd(e), r = To(e);
	return {
		id: e,
		_: ao(t),
		J: oo(t)
	};
}
function ao(e) {
	return Pe(((t) => e(Wt(t))), WeakMap);
}
function oo(e) {
	let t = e(0).year - Hl;
	return Pe(((n) => {
		let r, i = Jt(n - t), a = 0, o = [], s = [];
		do
			i += 400 * Lc;
		while ((r = e(i)).year <= n);
		do
			if (i += (1 - r.day) * Lc, r.year === n && (o.push(i), s.push(r.V)), i -= Lc, ++a > 100 || i < -Il) throw RangeError(uc);
		while ((r = e(i)).year >= n);
		return {
			K: o.reverse(),
			X: Mc(s.reverse())
		};
	}));
}
function so(e, t) {
	let n, r, i = co(e);
	if (e.era) {
		let a = pl[t], o = ml[t] || {};
		a !== void 0 && (n = t === "islamic" ? "ah" : e.era.normalize("NFD").toLowerCase().replace(/[^a-z0-9]/g, ""), n === "bc" || n === "b" ? n = "bce" : n === "ad" || n === "a" ? n = "ce" : n === "beforeroc" && (n = "broc"), n = o[n] || n, r = i, i = eo(r, a[n] || 0));
	}
	return {
		era: n,
		eraYear: r,
		year: i
	};
}
function co(e) {
	return parseInt(e.relatedYear || e.year);
}
function lo(e) {
	return this._(e).day;
}
function uo(e) {
	let { year: t, V: n, day: r } = this._(e), { X: i } = this.J(t);
	return [
		t,
		i[n] + 1,
		r
	];
}
function fo(e, t, n) {
	return Zt(po.call(this, e, t, n));
}
function po(e, t = 1, n = 1) {
	return this.J(e).K[t - 1] + (n - 1) * Lc;
}
function mo(e, t) {
	let n = ho.call(this, e);
	return [$a(t, n), n === t];
}
function ho(e) {
	let t = So(this, e), n = So(this, e - 1), r = t.length;
	if (r > n.length) {
		let e = no(this);
		if (e < 0) return -e;
		for (let e = 0; e < r; e++) if (t[e] !== n[e]) return e + 1;
	}
}
function go(e) {
	let t = _o.call(this, e);
	return t > _o.call(this, e - 1) && t > _o.call(this, e + 1);
}
function _o(e) {
	return Ia(po.call(this, e), po.call(this, e + 1));
}
function vo(e, t) {
	let { K: n } = this.J(e), r = t + 1, i = n;
	return r > n.length && (r = 1, i = this.J(e + 1).K), Ia(n[t - 1], i[r - 1]);
}
function yo(e) {
	return this.J(e).K.length;
}
function bo(e) {
	let t = this._(e);
	return [t.era, t.eraYear];
}
function xo(e, t, n) {
	let r = this.id && To(this.id) === "chinese" ? ((e, t, n) => {
		if (t) switch (e) {
			case 1: return 1651;
			case 2: return n < 30 ? 1947 : 1765;
			case 3: return n < 30 ? 1966 : 1955;
			case 4: return n < 30 ? 1963 : 1944;
			case 5: return n < 30 ? 1971 : 1952;
			case 6: return n < 30 ? 1960 : 1941;
			case 7: return n < 30 ? 1968 : 1938;
			case 8: return n < 30 ? 1957 : 1718;
			case 9: return 1832;
			case 10: return 1870;
			case 11: return 1814;
			case 12: return 1890;
		}
		return 1972;
	})(e, t, n) : Ul, [i, a, o] = uo.call(this, {
		isoYear: r,
		isoMonth: Wl,
		isoDay: 31
	}), s = ho.call(this, i), c = a === s;
	(Ze(e, $a(a, s)) || Ze(Number(t), Number(c)) || Ze(n, o)) === 1 && i--;
	for (let r = 0; r < 100; r++) {
		let a = i - r, o = ho.call(this, a), s = Qa(e, t, o);
		if (t === (s === o) && n <= vo.call(this, a, s)) return [a, s];
	}
}
function So(e, t) {
	return Object.keys(e.J(t).X);
}
function Co(e) {
	return wo(gl(e));
}
function wo(e) {
	if ((e = e.toLowerCase()) !== "iso8601" && e !== dl) {
		let t = rd(e).resolvedOptions().calendar;
		if (To(e) !== To(t)) throw RangeError(dc(e));
		return t;
	}
	return e;
}
function To(e) {
	return e === "islamicc" && (e = "islamic"), e.split("-")[0];
}
function Eo(e, t) {
	return (n) => n === "iso8601" ? e : n === dl || n === fl ? Object.assign(Object.create(e), { id: n }) : Object.assign(Object.create(t), nd(n));
}
function Do(e, t, n, r) {
	let i = Fo(n, r, ol, [], Zc);
	if (i.timeZone !== void 0) {
		let r = n.ee(i), a = Lo(i), o = e(i.timeZone);
		return {
			epochNanoseconds: Hr(t(o), {
				...r,
				...a
			}, i.offset === void 0 ? void 0 : Mi(i.offset)),
			timeZone: o
		};
	}
	return {
		...n.ee(i),
		...Nl
	};
}
function Oo(e, t, n, r, i, a) {
	let o = Fo(n, i, ol, Yc, Zc), s = e(o.timeZone), [c, l, u] = vn(a), d = n.ee(o, jn(c)), f = Lo(o, c);
	return In(Hr(t(s), {
		...d,
		...f
	}, o.offset === void 0 ? void 0 : Mi(o.offset), l, u), s, r);
}
function ko(e, t, n) {
	let r = Fo(e, t, ol, [], Kc), i = I(n);
	return Ln(Rt({
		...e.ee(r, jn(i)),
		...Lo(r, i)
	}));
}
function Ao(e, t, n, r = []) {
	let i = Fo(e, t, ol, r);
	return e.ee(i, n);
}
function jo(e, t, n, r) {
	let i = Fo(e, t, il, r);
	return e.ne(i, n);
}
function Mo(e, t, n, r) {
	let i = Fo(e, n, ol, rl);
	return t && i.month !== void 0 && i.monthCode === void 0 && i.year === void 0 && (i.year = Ul), e.te(i, r);
}
function No(e, t) {
	return Vn(Lo(Io(e, qc, [], 1), I(t)));
}
function Po(e) {
	let t = Io(e, yl);
	return L(bi({
		...wl,
		...t
	}));
}
function Fo(e, t, n, r = [], i = []) {
	return Io(t, [...e.fields(n), ...i].sort(), r);
}
function Io(e, t, n, r = !n) {
	let i = {}, a, o = 0;
	for (let r of t) {
		if (r === a) throw RangeError(Ys(r));
		if (r === "constructor" || r === "__proto__") throw RangeError(Js(r));
		let t = e[r];
		if (t !== void 0) o = 1, ud[r] && (t = ud[r](t, r)), i[r] = t;
		else if (n) {
			if (n.includes(r)) throw TypeError(qs(r));
			i[r] = ll[r];
		}
		a = r;
	}
	if (r && !o) throw TypeError(Xs(t));
	return i;
}
function Lo(e, t) {
	return _n(dd({
		...ll,
		...e
	}), t);
}
function Ro(e, t, n, r, i) {
	let { calendar: a, timeZone: o } = n, s = e(a), c = t(o), l = [...s.fields(ol), ...Xc].sort(), u = ((e) => {
		let t = Nu(e, z), n = Fr(t.offsetNanoseconds), r = ld(e.calendar), [i, a, o] = r.u(t), [s, c] = r.m(i, a), l = Za(s, c);
		return {
			...fd(t),
			year: i,
			monthCode: l,
			day: o,
			offset: n
		};
	})(n), d = Io(r, l), f = s.oe(u, d), p = {
		...u,
		...d
	}, [m, h, g] = vn(i, 2);
	return In(Hr(c, {
		...s.ee(f, jn(m)),
		..._n(dd(p), m)
	}, Mi(p.offset), h, g), o, a);
}
function zo(e, t, n, r) {
	let i = e(t.calendar), a = [...i.fields(ol), ...Kc].sort(), o = {
		...rs(s = t),
		hour: s.isoHour,
		minute: s.isoMinute,
		second: s.isoSecond,
		millisecond: s.isoMillisecond,
		microsecond: s.isoMicrosecond,
		nanosecond: s.isoNanosecond
	};
	var s;
	let c = Io(n, a), l = I(r), u = i.oe(o, c), d = {
		...o,
		...c
	};
	return Ln(Rt({
		...i.ee(u, jn(l)),
		..._n(dd(d), l)
	}));
}
function Bo(e, t, n, r) {
	let i = e(t.calendar), a = i.fields(ol).sort(), o = rs(t), s = Io(n, a), c = i.oe(o, s);
	return i.ee(c, r);
}
function Vo(e, t, n, r) {
	let i = e(t.calendar), a = i.fields(il).sort(), o = ((e) => {
		let t = ld(e.calendar), [n, r] = t.u(e), [i, a] = t.m(n, r);
		return {
			year: n,
			monthCode: Za(i, a)
		};
	})(t), s = Io(n, a), c = i.oe(o, s);
	return i.ne(c, r);
}
function Ho(e, t, n, r) {
	let i = e(t.calendar), a = i.fields(ol).sort(), o = ((e) => {
		let t = ld(e.calendar), [n, r, i] = t.u(e), [a, o] = t.m(n, r);
		return {
			monthCode: Za(a, o),
			day: i
		};
	})(t), s = Io(n, a), c = i.oe(o, s);
	return i.te(c, r);
}
function Uo(e, t, n) {
	return Vn(((e, t, n) => Lo({
		...Ue(qc, e),
		...Io(t, qc)
	}, I(n)))(e, t, n));
}
function Wo(e, t) {
	return L((n = e, r = t, bi({
		...n,
		...Io(r, yl)
	})));
	var n, r;
}
function Go(e, t) {
	let n = Fo(e, t, cl);
	return e.te(n);
}
function Ko(e, t, n) {
	let r = Fo(e, t, al);
	return e.ne(r, n);
}
function qo(e, t, n, r, i) {
	t = Ue(n = e.fields(n), t), r = Io(r, i = e.fields(i), []);
	let a = e.oe(t, r);
	return a = Io(a, [...n, ...i].sort(), []), e.ee(a);
}
function Jo(e, t) {
	let n = I(t), r = $o(this, e), i = es(this, e, r, n), a = ts(this, e, i, r, n);
	return Rn(Lt(this.U(r, i, a)), this.id || "iso8601");
}
function Yo(e, t) {
	let n = I(t), r = $o(this, e), i = es(this, e, r, n);
	return zn(It(this.U(r, i, 1)), this.id || "iso8601");
}
function Xo(e, t) {
	let n = I(t), r, i, a, o = e.eraYear !== void 0 || e.year !== void 0 ? $o(this, e) : void 0, s = !this.id;
	if (o === void 0 && s && (o = Ul), o !== void 0) {
		let t = es(this, e, o, n);
		r = ts(this, e, t, o, n);
		let s = this.F(o);
		i = $a(t, s), a = t === s;
	} else {
		if (e.monthCode === void 0) throw TypeError(cc);
		if ([i, a] = Xa(e.monthCode), this.id && this.id !== dl && this.id !== fl) {
			if (this.id && To(this.id) === "coptic" && n === 0) {
				let t = a || i !== 13 ? 30 : 6;
				r = e.day, r = Qe(r, 1, t);
			} else if (this.id && To(this.id) === "chinese" && n === 0) {
				let t = !a || i !== 1 && i !== 9 && i !== 10 && i !== 11 && i !== 12 ? 30 : 29;
				r = e.day, r = Qe(r, 1, t);
			} else r = e.day;
		} else r = ts(this, e, es(this, e, Ul, n), Ul, n);
	}
	let c = this.R(i, a, r);
	if (!c) throw RangeError("Cannot guess year");
	let [l, u] = c;
	return Bn(Lt(this.U(l, u, r)), this.id || "iso8601");
}
function Zo(e) {
	return to(this) && e.includes("year") ? [...e, ...Qc] : e;
}
function Qo(e, t) {
	let n = Object.assign(Object.create(null), e);
	return ns(n, t, nl), to(this) && (ns(n, t, $c), this.id === fl && ns(n, t, sl, Qc)), n;
}
function $o(e, t) {
	let n = to(e), r = ml[e.id || ""] || {}, { era: i, eraYear: a, year: o } = t;
	if (i !== void 0 || a !== void 0) {
		if (i === void 0 || a === void 0) throw TypeError(nc);
		if (!n) throw RangeError(tc);
		let e = n[r[i] || i];
		if (e === void 0) throw RangeError(ic(i));
		let t = eo(a, e);
		if (o !== void 0 && o !== t) throw RangeError(rc);
		o = t;
	} else if (o === void 0) throw TypeError(ac(n));
	return o;
}
function es(e, t, n, r) {
	let { month: i, monthCode: a } = t;
	if (a !== void 0) {
		let t = ((e, t, n, r) => {
			let i = e.F(n), [a, o] = Xa(t), s = Qa(a, o, i);
			if (o) {
				let t = no(e);
				if (t === void 0) throw RangeError(lc);
				if (t > 0) {
					if (s > t) throw RangeError(lc);
					if (i === void 0) {
						if (r === 1) throw RangeError(lc);
						s--;
					}
				} else if (s !== -t || i === void 0 && r === 1) throw RangeError(lc);
			}
			return s;
		})(e, a, n, r);
		if (i !== void 0 && i !== t) throw RangeError(sc);
		i = t, r = 1;
	} else if (i === void 0) throw TypeError(cc);
	return Me("month", i, 1, e.O(n), r);
}
function ts(e, t, n, r, i) {
	return je(t, "day", 1, e.B(r, n), i);
}
function ns(e, t, n, r) {
	let i = 0, a = [];
	for (let e of n) t[e] === void 0 ? a.push(e) : i = 1;
	if (Object.assign(e, t), i) for (let t of r || a) delete e[t];
}
function rs(e) {
	let t = ld(e.calendar), [n, r, i] = t.u(e), [a, o] = t.m(n, r);
	return {
		year: n,
		monthCode: Za(a, o),
		day: i
	};
}
function is(e) {
	return Fn(zt(At(yt(e))));
}
function as(e, t, n, r, i = ul) {
	return In(zt(At(yt(n))), t(r), e(i));
}
function os(e, t, n, r, i = 0, a = 0, o = 0, s = 0, c = 0, l = 0, u = ul) {
	return Ln(Rt(pn(Be(xt, ze(kl, [
		t,
		n,
		r,
		i,
		a,
		o,
		s,
		c,
		l
	])))), e(u));
}
function ss(e, t, n, r, i = ul) {
	return Rn(Lt(mn(Be(xt, {
		isoYear: t,
		isoMonth: n,
		isoDay: r
	}))), e(i));
}
function cs(e, t, n, r = ul, i = 1) {
	let a = xt(t), o = xt(n), s = e(r);
	return zn(It(mn({
		isoYear: a,
		isoMonth: o,
		isoDay: xt(i)
	})), s);
}
function ls(e, t, n, r = ul, i = Ul) {
	let a = xt(t), o = xt(n), s = e(r);
	return Bn(Lt(mn({
		isoYear: xt(i),
		isoMonth: a,
		isoDay: o
	})), s);
}
function us(e = 0, t = 0, n = 0, r = 0, i = 0, a = 0) {
	return Vn(_n(Be(xt, ze(Dl, [
		e,
		t,
		n,
		r,
		i,
		a
	])), 1));
}
function ds(e = 0, t = 0, n = 0, r = 0, i = 0, a = 0, o = 0, s = 0, c = 0, l = 0) {
	return L(bi(Be(St, ze(R, [
		e,
		t,
		n,
		r,
		i,
		a,
		o,
		s,
		c,
		l
	]))));
}
function fs(e, t, n = ul) {
	return In(e.epochNanoseconds, t, n);
}
function ps(e) {
	return Fn(e.epochNanoseconds);
}
function ms(e, t) {
	return Ln(Nu(t, e));
}
function hs(e, t) {
	return Rn(Nu(t, e));
}
function gs(e, t) {
	return Vn(Nu(t, e));
}
function _s(e, t, n, r) {
	return In(zt(((e, t, n, r) => {
		let i = ((e) => pu(kn(e)))(r);
		return Ur(e(t), n, i);
	})(e, n, t, r)), n, t.calendar);
}
function vs(e, t, n, r, i) {
	let a = e(i.timeZone), o = i.plainTime, s = o === void 0 ? void 0 : t(o), c = n(a), l;
	return l = s ? Ur(c, {
		...r,
		...s
	}) : Wr(c, {
		...r,
		...Nl
	}), In(l, a, r.calendar);
}
function ys(e, t = Nl) {
	return Ln(Rt({
		...e,
		...t
	}));
}
function bs(e, t, n) {
	return Ko(e(t.calendar), n);
}
function xs(e, t, n) {
	return Go(e(t.calendar), n);
}
function Ss(e, t, n, r) {
	return ((e, t, n) => qo(e, t, al, pt(n), rl))(e(t.calendar), n, r);
}
function Cs(e, t, n, r) {
	return ((e, t, n) => qo(e, t, cl, pt(n), el))(e(t.calendar), n, r);
}
function ws(e) {
	return Fn(zt(jt(St(e), Bc)));
}
function Ts(e) {
	return Fn(zt(At(yt(e))));
}
function Es(e, t, n) {
	let r = new Set(n);
	return (i, a) => {
		let o = n && We(i, n);
		if (!We(i = ((e, t) => {
			let n = {};
			for (let r in t) e.has(r) || (n[r] = t[r]);
			return n;
		})(r, i), e)) {
			if (a && o) throw TypeError("Invalid formatting options");
			i = {
				...t,
				...i
			};
		}
		return n && (i.timeZone = Ou, ["full", "long"].includes(i.ie) && (i.ie = "medium")), i;
	};
}
function Ds(e, t = Os, n = 0) {
	let [r, , , i] = e;
	return (a, o = Hd, ...s) => {
		let c = t(i && i(...s), a, o, r, n);
		return [c, ...As(e, c.resolvedOptions(), s)];
	};
}
function Os(e, t, n, r, i) {
	if (n = r(n, i), e) {
		if (n.timeZone !== void 0) throw TypeError(jc);
		n.timeZone = e;
	}
	return new Vl(t, n);
}
function ks() {
	return new Vl(void 0, { calendar: ul }).resolvedOptions().calendar === ul;
}
function As(e, t, n) {
	let [, r, i] = e;
	return n.map(((e) => (e.calendar && ((e, t, n) => {
		if ((n || e !== "iso8601") && e !== t) throw RangeError(fc);
	})(e.calendar, t.calendar, i), r(e, t))));
}
function js(e, t, n) {
	let r = t.timeZone, i = e(r), a = {
		...Nu(t, i),
		...n || Nl
	}, o;
	return o = n ? Hr(i, a, a.offsetNanoseconds, 2) : Wr(i, a), In(o, r, t.calendar);
}
function Ms(e, t = Nl) {
	return Ln(Rt({
		...e,
		...t
	}));
}
function Ns(e, t) {
	return {
		...e,
		calendar: t
	};
}
function Ps(e, t) {
	return {
		...e,
		timeZone: t
	};
}
function Fs(e) {
	let t = Is();
	return Xt(t, e.N(t));
}
function Is() {
	return jt(Date.now(), Bc);
}
function Ls() {
	return new Vl().resolvedOptions().timeZone;
}
var Rs = (e, t) => `Non-integer ${e}: ${t}`, zs = (e, t) => `Non-positive ${e}: ${t}`, Bs = (e, t) => `Non-finite ${e}: ${t}`, Vs = (e) => `Cannot convert bigint to ${e}`, Hs = (e) => `Invalid bigint: ${e}`, Us = "Cannot convert Symbol to string", Ws = "Invalid object", Gs = (e, t, n, r, i) => i ? Gs(e, i[t], i[n], i[r]) : Ks(e, t) + `; must be between ${n}-${r}`, Ks = (e, t) => `Invalid ${e}: ${t}`, qs = (e) => `Missing ${e}`, Js = (e) => `Invalid field ${e}`, Ys = (e) => `Duplicate field ${e}`, Xs = (e) => "No valid fields: " + e.join(), Zs = "Invalid bag", Qs = (e, t, n) => Ks(e, t) + "; must be " + Object.keys(n).join(), $s = "Cannot use valueOf", ec = "Invalid calling context", tc = "Forbidden era/eraYear", nc = "Mismatching era/eraYear", rc = "Mismatching year/eraYear", ic = (e) => `Invalid era: ${e}`, ac = (e) => "Missing year" + (e ? "/era/eraYear" : ""), oc = (e) => `Invalid monthCode: ${e}`, sc = "Mismatching month/monthCode", cc = "Missing month/monthCode", lc = "Invalid leap month", uc = "Invalid protocol results", dc = (e) => Ks("Calendar", e), fc = "Mismatching Calendars", pc = (e) => Ks("TimeZone", e), mc = "Mismatching TimeZones", hc = "Forbidden ICU TimeZone", gc = "Out-of-bounds offset", _c = "Out-of-bounds TimeZone gap", vc = "Invalid TimeZone offset", yc = "Ambiguous offset", bc = "Out-of-bounds date", xc = "Out-of-bounds duration", Sc = "Cannot mix duration signs", Cc = "Missing relativeTo", wc = "Cannot use large units", Tc = "Required smallestUnit or largestUnit", Ec = "smallestUnit > largestUnit", Dc = (e) => `Cannot parse: ${e}`, Oc = (e) => `Invalid substring: ${e}`, kc = (e) => `Cannot format ${e}`, Ac = "Mismatching types for formatting", jc = "Cannot specify TimeZone", Mc = /*@__PURE__*/ F(Ve, ((e, t) => t)), Nc = /*@__PURE__*/ F(Ve, ((e, t, n) => n)), Pc = /*@__PURE__*/ F(Xe, 2), Fc = {
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
}, Ic = /*@__PURE__*/ Object.keys(Fc), Lc = 864e5, Rc = 1e3, zc = 1e3, Bc = 1e6, Vc = 1e9, Hc = 6e10, Uc = 36e11, Wc = 864e11, Gc = [
	1,
	zc,
	Bc,
	Vc,
	Hc,
	Uc,
	Wc
], Kc = /*@__PURE__*/ Ic.slice(0, 6), qc = /*@__PURE__*/ Ye(Kc), Jc = ["offset"], Yc = ["timeZone"], Xc = /*@__PURE__*/ Kc.concat(Jc), Zc = /*@__PURE__*/ Xc.concat(Yc), Qc = ["era", "eraYear"], $c = /*@__PURE__*/ Qc.concat(["year"]), el = ["year"], tl = ["monthCode"], nl = /*@__PURE__*/ ["month"].concat(tl), rl = ["day"], il = /*@__PURE__*/ nl.concat(el), al = /*@__PURE__*/ tl.concat(el), ol = /*@__PURE__*/ rl.concat(il), sl = /*@__PURE__*/ rl.concat(nl), cl = /*@__PURE__*/ rl.concat(tl), ll = /*@__PURE__*/ Nc(Kc, 0), ul = "iso8601", dl = "gregory", fl = "japanese", pl = {
	[dl]: {
		"gregory-inverse": -1,
		gregory: 0
	},
	[fl]: {
		"japanese-inverse": -1,
		japanese: 0,
		meiji: 1867,
		taisho: 1911,
		showa: 1925,
		heisei: 1988,
		reiwa: 2018
	},
	ethiopic: {
		ethioaa: 0,
		ethiopic: 5500
	},
	coptic: {
		"coptic-inverse": -1,
		coptic: 0
	},
	roc: {
		"roc-inverse": -1,
		roc: 0
	},
	buddhist: { be: 0 },
	islamic: { ah: 0 },
	indian: { saka: 0 },
	persian: { ap: 0 }
}, ml = {
	[dl]: {
		bce: "gregory-inverse",
		ce: "gregory"
	},
	[fl]: {
		bce: "japanese-inverse",
		ce: "japanese"
	},
	ethiopic: {
		era0: "ethioaa",
		era1: "ethiopic"
	},
	coptic: {
		era0: "coptic-inverse",
		era1: "coptic"
	},
	roc: {
		broc: "roc-inverse",
		minguo: "roc"
	}
}, hl = {
	chinese: 13,
	dangi: 13,
	hebrew: -6
}, gl = /*@__PURE__*/ F(mt, "string"), _l = /*@__PURE__*/ F(mt, "boolean"), vl = /*@__PURE__*/ F(mt, "number"), R = /*@__PURE__*/ Ic.map(((e) => e + "s")), yl = /*@__PURE__*/ Ye(R), bl = /*@__PURE__*/ R.slice(0, 6), xl = /*@__PURE__*/ R.slice(6), Sl = /*@__PURE__*/ xl.slice(1), Cl = /*@__PURE__*/ Mc(R), wl = /*@__PURE__*/ Nc(R, 0), Tl = /*@__PURE__*/ Nc(bl, 0), El = /*@__PURE__*/ F(Ke, R), Dl = [
	"isoNanosecond",
	"isoMicrosecond",
	"isoMillisecond",
	"isoSecond",
	"isoMinute",
	"isoHour"
], Ol = [
	"isoDay",
	"isoMonth",
	"isoYear"
], kl = /*@__PURE__*/ Dl.concat(Ol), Al = /*@__PURE__*/ Ye(Ol), jl = /*@__PURE__*/ Ye(Dl), Ml = /*@__PURE__*/ Ye(kl), Nl = /*@__PURE__*/ Nc(jl, 0), Pl = /*@__PURE__*/ F(Ke, kl), Fl = 1e8, Il = Fl * Lc, Ll = [Fl, 0], Rl = [-1e8, 0], zl = 275760, Bl = -271821, Vl = Intl.DateTimeFormat, Hl = 1970, Ul = 1972, Wl = 12, Gl = /*@__PURE__*/ Jt(1868, 9, 8), Kl = /*@__PURE__*/ Pe(fn, WeakMap), ql = "smallestUnit", Jl = "unit", Yl = "roundingMode", Xl = "roundingIncrement", Zl = "fractionalSecondDigits", Ql = "relativeTo", $l = "direction", eu = {
	constrain: 0,
	reject: 1
}, tu = /*@__PURE__*/ Object.keys(eu), nu = {
	compatible: 0,
	reject: 1,
	earlier: 2,
	later: 3
}, ru = {
	reject: 0,
	use: 1,
	prefer: 2,
	ignore: 3
}, iu = {
	auto: 0,
	never: 1,
	critical: 2,
	always: 3
}, au = {
	auto: 0,
	never: 1,
	critical: 2
}, ou = {
	auto: 0,
	never: 1
}, su = {
	floor: 0,
	halfFloor: 1,
	ceil: 2,
	halfCeil: 3,
	trunc: 4,
	halfTrunc: 5,
	expand: 6,
	halfExpand: 7,
	halfEven: 8
}, cu = {
	previous: -1,
	next: 1
}, lu = /*@__PURE__*/ F(Mn, ql), uu = /*@__PURE__*/ F(Mn, "largestUnit"), du = /*@__PURE__*/ F(Mn, Jl), fu = /*@__PURE__*/ F(Nn, "overflow", eu), pu = /*@__PURE__*/ F(Nn, "disambiguation", nu), mu = /*@__PURE__*/ F(Nn, "offset", ru), hu = /*@__PURE__*/ F(Nn, "calendarName", iu), gu = /*@__PURE__*/ F(Nn, "timeZoneName", au), _u = /*@__PURE__*/ F(Nn, "offset", ou), vu = /*@__PURE__*/ F(Nn, Yl, su), yu = "PlainYearMonth", bu = "PlainMonthDay", xu = "PlainDate", Su = "PlainDateTime", Cu = "PlainTime", wu = "ZonedDateTime", Tu = "Instant", Eu = "Duration", Du = [
	Math.floor,
	(e) => it(e) ? Math.floor(e) : Math.round(e),
	Math.ceil,
	(e) => it(e) ? Math.ceil(e) : Math.round(e),
	Math.trunc,
	(e) => it(e) ? Math.trunc(e) || 0 : Math.round(e),
	(e) => e < 0 ? Math.floor(e) : Math.ceil(e),
	(e) => Math.sign(e) * Math.round(Math.abs(e)) || 0,
	(e) => it(e) ? (e = Math.trunc(e) || 0) + e % 2 : Math.round(e)
], Ou = "UTC", ku = 5184e3, Au = /*@__PURE__*/ qt(1847), ju = /*@__PURE__*/ qt((() => {
	let e = /* @__PURE__ */ new Date();
	return (e.getTime() === 0 ? 2040 : e.getUTCFullYear()) + 10;
})()), Mu = /0+$/, Nu = /*@__PURE__*/ Pe(Vr, WeakMap), Pu = 2 ** 32 - 1, z = /*@__PURE__*/ Pe(((e) => {
	let t = oa(e);
	return typeof t == "object" ? new Iu(t) : new Fu(t || 0);
})), Fu = class {
	constructor(e) {
		this.j = e;
	}
	N() {
		return this.j;
	}
	v(e) {
		return ((e) => {
			let t = Gt({
				...e,
				...Nl
			});
			if (!t || Math.abs(t[0]) > 1e8) throw RangeError(bc);
		})(e), [Kt(e, this.j)];
	}
	l() {}
}, Iu = class {
	constructor(e) {
		this.ae = ((e) => {
			function t(e) {
				let [t, s] = Oi(Qe(e, a, o)), c = r(t), l = r(s);
				return c === l ? c : n(i(t, s), c, l, e);
			}
			function n(t, n, r, i) {
				let a, o;
				for (; (i === void 0 || (a = i < t[0] ? n : i >= t[1] ? r : void 0) === void 0) && (o = t[1] - t[0]);) {
					let n = t[0] + Math.floor(o / 2);
					e(n) === r ? t[1] = n : t[0] = n + 1;
				}
				return a;
			}
			let r = Pe(e), i = Pe(Di), a = Au, o = ju;
			return {
				se(e) {
					let n = t(e - 86400), r = t(e + 86400), i = e - n, a = e - r;
					if (n === r) return [i];
					let o = t(i);
					return o === t(a) ? [e - o] : n > r ? [i, a] : [];
				},
				ue: t,
				l(e, t) {
					let s = Qe(e, a, o), [c, l] = Oi(s), u = ku * t, d = t < 0 ? () => l > a || (a = s, 0) : () => c < o || (o = s, 0);
					for (; d();) {
						let a = r(c), o = r(l);
						if (a !== o) {
							let r = i(c, l);
							n(r, a, o);
							let s = r[0];
							if ((Ze(s, e) || 1) === t) return s;
						}
						c += u, l += u;
					}
				}
			};
		})(((e) => (t) => {
			let n = Qt(e, t * Rc);
			return qt(co(n), parseInt(n.month), parseInt(n.day), parseInt(n.hour), parseInt(n.minute), parseInt(n.second)) - t;
		})(e));
	}
	N(e) {
		return this.ae.ue(Ht(e)) * Vc;
	}
	v(e) {
		let [t, n] = [qt((r = e).isoYear, r.isoMonth, r.isoDay, r.isoHour, r.isoMinute, r.isoSecond), r.isoMillisecond * Bc + r.isoMicrosecond * zc + r.isoNanosecond];
		var r;
		return this.ae.se(t).map(((e) => zt(Et(jt(e, Vc), n))));
	}
	l(e, t) {
		let [n, r] = Ut(e), i = this.ae.l(n + (t > 0 || r ? 1 : 0), t);
		if (i !== void 0) return jt(i, Vc);
	}
}, Lu = "([+-])", Ru = "(?:[.,](\\d{1,9}))?", zu = `(?:(?:${Lu}(\\d{6}))|(\\d{4}))-?(\\d{2})`, Bu = "(\\d{2})(?::?(\\d{2})(?::?(\\d{2})" + Ru + ")?)?", Vu = Lu + Bu, Hu = zu + "-?(\\d{2})(?:[T ](\\d{2})(?::?(\\d{2})(?::?(\\d{2})(?:[.,](\\d{1,9}))?)?)?(Z|([+-])(\\d{2})(?::?(\\d{2})(?::?(\\d{2})(?:[.,](\\d{1,9}))?)?)?)?)?", Uu = "\\[(!?)([^\\]]*)\\]", Wu = `((?:${Uu}){0,9})`, Gu = /*@__PURE__*/ ea(zu + Wu), Ku = /*@__PURE__*/ ea("(?:--)?(\\d{2})-?(\\d{2})" + Wu), qu = /*@__PURE__*/ ea(Hu + Wu), Ju = /*@__PURE__*/ ea("T?" + Bu + "(?:" + Vu + ")?" + Wu), Yu = /*@__PURE__*/ ea(Vu), Xu = /*@__PURE__*/ new RegExp(Uu, "g"), Zu = /*@__PURE__*/ ea(`${Lu}?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?:(\\d+)${Ru}H)?(?:(\\d+)${Ru}M)?(?:(\\d+)${Ru}S)?)?`), Qu = /*@__PURE__*/ Pe(((e) => new Vl("en", {
	calendar: ul,
	timeZone: e,
	era: "short",
	year: "numeric",
	month: "numeric",
	day: "numeric",
	hour: "numeric",
	minute: "numeric",
	second: "numeric",
	hour12: 0
}))), $u = /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/, ed = /[^\w\/:+-]+/, td = /^M(\d{2})(L?)$/, nd = /*@__PURE__*/ Pe(io), rd = /*@__PURE__*/ Pe(((e) => new Vl("en", {
	calendar: e,
	timeZone: Ou,
	era: "short",
	year: "numeric",
	month: "short",
	day: "numeric",
	hour12: 0
}))), id = {
	P: ni,
	h: Ra,
	ee: Jo,
	ne: Yo,
	te: Xo,
	fields: Zo,
	oe: Qo,
	inLeapYear: Ga,
	monthsInYear: Ka,
	daysInMonth: qa,
	daysInYear: Ja,
	dayOfYear: Ya,
	era(e) {
		return this.$(e)[0];
	},
	eraYear(e) {
		return this.$(e)[1];
	},
	monthCode(e) {
		let [t, n] = this.u(e), [r, i] = this.m(t, n);
		return Za(r, i);
	},
	dayOfWeek: un,
	daysInWeek: an
}, ad = {
	u: en,
	$: dn,
	m: tn
}, od = /*@__PURE__*/ Object.assign({}, id, /* @__PURE__ */ Object.assign({}, {
	dayOfYear: Ya,
	u: en,
	M: Jt
}, {
	weekOfYear: Ua,
	yearOfWeek: Wa,
	I(e) {
		function t(e) {
			return (7 - e < r ? 7 : 0) - e;
		}
		function n(e) {
			let n = cn(f + e), r = e || 1;
			return u = (n + (t(et(c + n * r, 7)) - l) * r) / 7;
		}
		let r = this.id ? 1 : 4, i = un(e), a = this.dayOfYear(e), o = et(i - 1, 7), s = a - 1, c = et(o - s, 7), l = t(c), u, d = Math.floor((s - l) / 7) + 1, f = e.isoYear;
		return d ? d > n(0) && (d = 1, f++) : (d = n(-1), f--), [
			d,
			f,
			u
		];
	}
}), {
	u: en,
	$: dn,
	m: tn,
	R: nn,
	L: ln,
	F: qe,
	O: on,
	q: za,
	B: sn,
	G: cn,
	U: rn,
	M: Jt,
	p: ii,
	year(e) {
		return e.isoYear;
	},
	month(e) {
		return e.isoMonth;
	},
	day: $t
}), sd = {
	u: uo,
	$: bo,
	m: mo
}, cd = /*@__PURE__*/ Object.assign({}, id, /* @__PURE__ */ Object.assign({}, {
	dayOfYear: Ya,
	u: uo,
	M: po
}, { I() {
	return [];
} }, {
	weekOfYear: Ua,
	yearOfWeek: Wa
}), {
	u: uo,
	$: bo,
	m: mo,
	R: xo,
	L: go,
	F: ho,
	O: yo,
	q: Ba,
	B: vo,
	G: _o,
	U: fo,
	M: po,
	p: ai,
	year(e) {
		return this._(e).year;
	},
	month(e) {
		let { year: t, V: n } = this._(e), { X: r } = this.J(t);
		return r[n] + 1;
	},
	day: lo
}), ld = /*@__PURE__*/ Eo(ad, sd), B = /*@__PURE__*/ Eo(od, cd), ud = /*@__PURE__*/ Object.assign({}, {
	era: vt,
	eraYear: xt,
	year: xt,
	month: Ct,
	monthCode(e) {
		let t = vt(e);
		return Xa(t), t;
	},
	day: Ct
}, /* @__PURE__ */ Nc(Kc, xt), /* @__PURE__ */ Nc(R, St), { offset(e) {
	let t = vt(e);
	return Mi(t), t;
} }), dd = /*@__PURE__*/ F(He, Kc, Dl), fd = /*@__PURE__*/ F(He, Dl, Kc), pd = "numeric", md = ["timeZoneName"], hd = {
	month: pd,
	day: pd
}, gd = {
	year: pd,
	month: pd
}, _d = /*@__PURE__*/ Object.assign({}, gd, { day: pd }), vd = {
	hour: pd,
	minute: pd,
	second: pd
}, yd = /*@__PURE__*/ Object.assign({}, _d, vd), bd = /*@__PURE__*/ Object.assign({}, yd, { timeZoneName: "short" }), xd = /*@__PURE__*/ Object.keys(gd), Sd = /*@__PURE__*/ Object.keys(hd), Cd = /*@__PURE__*/ Object.keys(_d), wd = /*@__PURE__*/ Object.keys(vd), Td = ["dateStyle"], Ed = /*@__PURE__*/ xd.concat(Td), Dd = /*@__PURE__*/ Sd.concat(Td), Od = /*@__PURE__*/ Cd.concat(Td, ["weekday"]), kd = /*@__PURE__*/ wd.concat([
	"dayPeriod",
	"timeStyle",
	"fractionalSecondDigits"
]), Ad = /*@__PURE__*/ Od.concat(kd), jd = /*@__PURE__*/ md.concat(kd), Md = /*@__PURE__*/ md.concat(Od), Nd = /*@__PURE__*/ md.concat(["day", "weekday"], kd), Pd = /*@__PURE__*/ md.concat(["year", "weekday"], kd), Fd = /*@__PURE__*/ Es(Ad, yd), Id = /*@__PURE__*/ Es(Ad, bd), Ld = /*@__PURE__*/ Es(Ad, yd, md), Rd = /*@__PURE__*/ Es(Od, _d, jd), zd = /*@__PURE__*/ Es(kd, vd, Md), Bd = /*@__PURE__*/ Es(Ed, gd, Nd), Vd = /*@__PURE__*/ Es(Dd, hd, Pd), Hd = {}, Ud = /*@__PURE__*/ ks(), Wd = [Fd, Hn], Gd = [
	Id,
	Hn,
	0,
	(e, t) => {
		let n = e.timeZone;
		if (t && t.timeZone !== n) throw RangeError(mc);
		return n;
	}
], Kd = [Ld, Wt], qd = [Rd, Wt], Jd = [zd, (e) => Bt(e) / Bc], Yd = [
	Bd,
	Wt,
	Ud
], Xd = [
	Vd,
	Wt,
	Ud
];
//#endregion
//#region ../../node_modules/temporal-polyfill/chunks/classApi.js
function Zd(e, t, n, r, i, a) {
	function o(...e) {
		if (!(this instanceof o)) throw TypeError(ec);
		{
			let n = t(...e);
			wf(this, n), $d(this, n, a);
		}
	}
	function s(e, t) {
		return Object.defineProperties((function(...t) {
			return e.call(this, c(this), ...t);
		}), Fe(t));
	}
	function c(t) {
		let n = Cf(t);
		if (!n || n.branding !== e) throw TypeError(ec);
		return n;
	}
	return Object.defineProperties(o.prototype, {
		...Le(Be(s, n)),
		...Ie(Be(s, r)),
		...Re("Temporal." + e)
	}), Object.defineProperties(o, {
		...Ie(i),
		...Fe(e)
	}), [
		o,
		(e) => {
			let t = Object.create(o.prototype);
			return wf(t, e), $d(t, e, a), t;
		},
		c
	];
}
function Qd(e) {
	if (Cf(e) || e.calendar !== void 0 || e.timeZone !== void 0) throw TypeError(Zs);
	return e;
}
function $d(e, t, n) {
	$d.name === "dbg" && Object.defineProperty(e, "o", {
		value: n(t),
		writable: 0,
		enumerable: 0,
		configurable: 0
	});
}
function ef(e) {
	return tf(e) || "iso8601";
}
function tf(e) {
	let { calendar: t } = e;
	if (t !== void 0) return nf(t);
}
function nf(e) {
	if (Ne(e)) {
		let { calendar: t } = Cf(e) || {};
		if (!t) throw TypeError(dc(e));
		return t;
	}
	return ((e) => wo(Bi(gl(e))))(e);
}
function rf(e) {
	let t = {};
	for (let n in e) t[n] = (e) => {
		let { calendar: t } = e;
		return B(t)[n](e);
	};
	return t;
}
function af() {
	throw TypeError($s);
}
function of(e) {
	if (Ne(e)) {
		let { timeZone: t } = Cf(e) || {};
		if (!t) throw TypeError(pc(e));
		return t;
	}
	return ((e) => ia(Vi(gl(e))))(e);
}
function V(e) {
	if (Ne(e)) {
		let t = Cf(e);
		return t && t.branding === "Duration" ? t : Po(e);
	}
	return zi(e);
}
function sf(e) {
	if (e !== void 0) {
		if (Ne(e)) {
			let t = Cf(e) || {};
			switch (t.branding) {
				case wu:
				case xu: return t;
				case Su: return Rn(t);
			}
			let n = ef(e);
			return {
				...Do(of, z, B(n), e),
				calendar: n
			};
		}
		return Ai(e);
	}
}
function cf(e, t) {
	if (Ne(e)) {
		let n = Cf(e) || {};
		switch (n.branding) {
			case Cu: return I(t), n;
			case Su: return I(t), Vn(n);
			case wu: return I(t), gs(z, n);
		}
		return No(e, t);
	}
	let n = Ri(e);
	return I(t), n;
}
function lf(e) {
	return e === void 0 ? void 0 : cf(e);
}
function uf(e, t) {
	if (Ne(e)) {
		let n = Cf(e) || {};
		switch (n.branding) {
			case Su: return I(t), n;
			case xu: return I(t), Ln({
				...n,
				...Nl
			});
			case wu: return I(t), ms(z, n);
		}
		return ko(B(ef(e)), e, t);
	}
	let n = Ni(e);
	return I(t), n;
}
function df(e, t) {
	if (Ne(e)) {
		let n = Cf(e);
		if (n && n.branding === "PlainMonthDay") return I(t), n;
		let r = tf(e);
		return Mo(B(r || "iso8601"), !r, e, t);
	}
	let n = Li(B, e);
	return I(t), n;
}
function ff(e, t) {
	if (Ne(e)) {
		let n = Cf(e);
		return n && n.branding === "PlainYearMonth" ? (I(t), n) : jo(B(ef(e)), e, t);
	}
	let n = Fi(B, e);
	return I(t), n;
}
function pf(e, t) {
	if (Ne(e)) {
		let n = Cf(e) || {};
		switch (n.branding) {
			case xu: return I(t), n;
			case Su: return I(t), Rn(n);
			case wu: return I(t), hs(z, n);
		}
		return Ao(B(ef(e)), e, t);
	}
	let n = Pi(e);
	return I(t), n;
}
function mf(e, t) {
	if (Ne(e)) {
		let n = Cf(e);
		if (n && n.branding === "ZonedDateTime") return vn(t), n;
		let r = ef(e);
		return Oo(of, z, B(r), r, e, t);
	}
	return ji(e, t);
}
function hf(e) {
	return Be(((e) => (t) => e(gf(t))), e);
}
function gf(e) {
	return Nu(e, z);
}
function _f(e) {
	if (Ne(e)) {
		let t = Cf(e);
		if (t) switch (t.branding) {
			case Tu: return t;
			case wu: return Fn(t.epochNanoseconds);
		}
	}
	return ki(e);
}
function vf() {
	function e(e, n) {
		return new t(e, n);
	}
	function t(e, t = Object.create(null)) {
		fp.set(this, ((e, t) => {
			let n = new Vl(e, t), r = n.resolvedOptions(), i = r.locale, a = Ue(Object.keys(t), r), o = Pe(xf), s = (e, ...t) => {
				if (e) {
					if (t.length !== 2) throw TypeError(Ac);
					for (let e of t) if (e === void 0) throw TypeError(Ac);
				}
				e || t[0] !== void 0 || (t = []);
				let r = t.map(((e) => Cf(e) || Number(e))), s, c = 0;
				for (let e of r) {
					let t = typeof e == "object" ? e.branding : void 0;
					if (c++ && t !== s) throw TypeError(Ac);
					s = t;
				}
				return s ? o(s)(i, a, ...r) : [n, ...r];
			};
			return s.i = n, s;
		})(e, t));
	}
	let n = Vl.prototype, r = Object.getOwnPropertyDescriptors(n), i = Object.getOwnPropertyDescriptors(Vl);
	for (let t in r) {
		let n = r[t], i = t.startsWith("format") && yf(t);
		typeof n.value == "function" ? n.value = t === "constructor" ? e : i || bf(t) : i && (n.get = function() {
			if (!fp.has(this)) throw TypeError("Invalid calling context");
			return (...e) => i.apply(this, e);
		}, Object.defineProperties(n.get, Fe(`get ${t}`)));
	}
	return i.prototype.value = t.prototype = Object.create({}, r), Object.defineProperties(e, i), e;
}
function yf(e) {
	return Object.defineProperties((function(...t) {
		let [n, ...r] = fp.get(this)(e.includes("Range"), ...t);
		return n[e](...r);
	}), Fe(e));
}
function bf(e) {
	return Object.defineProperties((function(...t) {
		return fp.get(this).i[e](...t);
	}), Fe(e));
}
function xf(e) {
	let t = Lf[e];
	if (!t) throw TypeError(kc(e));
	return Ds(t, Pe(Os), 1);
}
var Sf = /*@__PURE__*/ new WeakMap(), Cf = /*@__PURE__*/ Sf.get.bind(Sf), wf = /*@__PURE__*/ Sf.set.bind(Sf), Tf = {
	era: st,
	eraYear: lt,
	year: dt,
	month: ut,
	daysInMonth: ut,
	daysInYear: ut,
	inLeapYear: _l,
	monthsInYear: ut
}, Ef = { monthCode: gl }, Df = { day: ut }, Of = /*@__PURE__*/ rf(/*@__PURE__*/ Object.assign({}, Tf, Ef, Df, {
	dayOfWeek: ut,
	dayOfYear: ut,
	weekOfYear: ct,
	yearOfWeek: lt,
	daysInWeek: ut
})), kf = /*@__PURE__*/ rf({
	...Tf,
	...Ef
}), Af = /*@__PURE__*/ rf({
	...Ef,
	...Df
}), jf = { calendarId: (e) => e.calendar }, Mf = /*@__PURE__*/ Ve(((e) => (t) => t[e]), R.concat("sign")), Nf = /*@__PURE__*/ Ve(((e, t) => (e) => e[Dl[t]]), Kc), Pf = {
	epochMilliseconds: Hn,
	epochNanoseconds: Un
}, [Ff, H, If] = Zd(Eu, ds, {
	...Mf,
	blank: vi
}, {
	with: (e, t) => H(Wo(e, t)),
	negated: (e) => H(gi(e)),
	abs: (e) => H(hi(e)),
	add: (e, t, n) => H(pi(sf, B, z, 0, e, V(t), n)),
	subtract: (e, t, n) => H(pi(sf, B, z, 1, e, V(t), n)),
	round: (e, t) => H(mi(sf, B, z, e, t)),
	total: (e, t) => Gn(sf, B, z, e, t),
	toLocaleString(e, t, n) {
		return Intl.DurationFormat ? new Intl.DurationFormat(t, n).format(this) : Dr(e);
	},
	toString: Dr,
	toJSON: (e) => Dr(e),
	valueOf: af
}, {
	from: (e) => H(V(e)),
	compare: (e, t, n) => la(sf, B, z, V(e), V(t), n)
}, Dr), Lf = {
	Instant: Wd,
	PlainDateTime: Kd,
	PlainDate: qd,
	PlainTime: Jd,
	PlainYearMonth: Yd,
	PlainMonthDay: Xd
}, Rf = /*@__PURE__*/ Ds(Wd), zf = /*@__PURE__*/ Ds(Gd), Bf = /*@__PURE__*/ Ds(Kd), Vf = /*@__PURE__*/ Ds(qd), Hf = /*@__PURE__*/ Ds(Jd), Uf = /*@__PURE__*/ Ds(Yd), Wf = /*@__PURE__*/ Ds(Xd), [Gf, Kf] = Zd(Cu, us, Nf, {
	with(e, t, n) {
		return Kf(Uo(this, Qd(t), n));
	},
	add: (e, t) => Kf(Xr(0, e, V(t))),
	subtract: (e, t) => Kf(Xr(1, e, V(t))),
	until: (e, t, n) => H(Da(0, e, cf(t), n)),
	since: (e, t, n) => H(Da(1, e, cf(t), n)),
	round: (e, t) => Kf($n(e, t)),
	equals: (e, t) => ya(e, cf(t)),
	toLocaleString(e, t, n) {
		let [r, i] = Hf(t, n, e);
		return r.format(i);
	},
	toString: Er,
	toJSON: (e) => Er(e),
	valueOf: af
}, {
	from: (e, t) => Kf(cf(e, t)),
	compare: (e, t) => fa(cf(e), cf(t))
}, Er), [qf, Jf] = Zd(Su, F(os, Co), {
	...jf,
	...Of,
	...Nf
}, {
	with: (e, t, n) => Jf(zo(B, e, Qd(t), n)),
	withCalendar: (e, t) => Jf(Ns(e, nf(t))),
	withPlainTime: (e, t) => Jf(Ms(e, lf(t))),
	add: (e, t, n) => Jf(qr(B, 0, e, V(t), n)),
	subtract: (e, t, n) => Jf(qr(B, 1, e, V(t), n)),
	until: (e, t, n) => H(Ca(B, 0, e, uf(t), n)),
	since: (e, t, n) => H(Ca(B, 1, e, uf(t), n)),
	round: (e, t) => Jf(Qn(e, t)),
	equals: (e, t) => ha(e, uf(t)),
	toZonedDateTime: (e, t, n) => ap(_s(z, e, of(t), n)),
	toPlainDate: (e) => np(Rn(e)),
	toPlainTime: (e) => Kf(Vn(e)),
	toLocaleString(e, t, n) {
		let [r, i] = Bf(t, n, e);
		return r.format(i);
	},
	toString: Sr,
	toJSON: (e) => Sr(e),
	valueOf: af
}, {
	from: (e, t) => Jf(uf(e, t)),
	compare: (e, t) => ua(uf(e), uf(t))
}, Sr), [Yf, Xf, Zf] = Zd(bu, F(ls, Co), {
	...jf,
	...Af
}, {
	with: (e, t, n) => Xf(Ho(B, e, Qd(t), n)),
	equals: (e, t) => va(e, df(t)),
	toPlainDate(e, t) {
		return np(Cs(B, e, this, t));
	},
	toLocaleString(e, t, n) {
		let [r, i] = Wf(t, n, e);
		return r.format(i);
	},
	toString: Tr,
	toJSON: (e) => Tr(e),
	valueOf: af
}, { from: (e, t) => Xf(df(e, t)) }, Tr), [Qf, $f, ep] = Zd(yu, F(cs, Co), {
	...jf,
	...kf
}, {
	with: (e, t, n) => $f(Vo(B, e, Qd(t), n)),
	add: (e, t, n) => $f(Yr(B, 0, e, V(t), n)),
	subtract: (e, t, n) => $f(Yr(B, 1, e, V(t), n)),
	until: (e, t, n) => H(Ta(B, 0, e, ff(t), n)),
	since: (e, t, n) => H(Ta(B, 1, e, ff(t), n)),
	equals: (e, t) => _a(e, ff(t)),
	toPlainDate(e, t) {
		return np(Ss(B, e, this, t));
	},
	toLocaleString(e, t, n) {
		let [r, i] = Uf(t, n, e);
		return r.format(i);
	},
	toString: wr,
	toJSON: (e) => wr(e),
	valueOf: af
}, {
	from: (e, t) => $f(ff(e, t)),
	compare: (e, t) => da(ff(e), ff(t))
}, wr), [tp, np, rp] = Zd(xu, F(ss, Co), {
	...jf,
	...Of
}, {
	with: (e, t, n) => np(Bo(B, e, Qd(t), n)),
	withCalendar: (e, t) => np(Ns(e, nf(t))),
	add: (e, t, n) => np(Jr(B, 0, e, V(t), n)),
	subtract: (e, t, n) => np(Jr(B, 1, e, V(t), n)),
	until: (e, t, n) => H(wa(B, 0, e, pf(t), n)),
	since: (e, t, n) => H(wa(B, 1, e, pf(t), n)),
	equals: (e, t) => ga(e, pf(t)),
	toZonedDateTime(e, t) {
		return ap(vs(of, cf, z, e, Ne(t) ? t : { timeZone: t }));
	},
	toPlainDateTime: (e, t) => Jf(ys(e, lf(t))),
	toPlainYearMonth(e) {
		return $f(bs(B, e, this));
	},
	toPlainMonthDay(e) {
		return Xf(xs(B, e, this));
	},
	toLocaleString(e, t, n) {
		let [r, i] = Vf(t, n, e);
		return r.format(i);
	},
	toString: Cr,
	toJSON: (e) => Cr(e),
	valueOf: af
}, {
	from: (e, t) => np(pf(e, t)),
	compare: (e, t) => da(pf(e), pf(t))
}, Cr), [ip, ap] = Zd(wu, F(as, Co, ra), {
	...Pf,
	...jf,
	...hf(Of),
	...hf(Nf),
	offset: (e) => Fr(gf(e).offsetNanoseconds),
	offsetNanoseconds: (e) => gf(e).offsetNanoseconds,
	timeZoneId: (e) => e.timeZone,
	hoursInDay: (e) => er(z, e)
}, {
	with: (e, t, n) => ap(Ro(B, z, e, Qd(t), n)),
	withCalendar: (e, t) => ap(Ns(e, nf(t))),
	withTimeZone: (e, t) => ap(Ps(e, of(t))),
	withPlainTime: (e, t) => ap(js(z, e, lf(t))),
	add: (e, t, n) => ap(Kr(B, z, 0, e, V(t), n)),
	subtract: (e, t, n) => ap(Kr(B, z, 1, e, V(t), n)),
	until: (e, t, n) => H(L(Sa(B, z, 0, e, mf(t), n))),
	since: (e, t, n) => H(L(Sa(B, z, 1, e, mf(t), n))),
	round: (e, t) => ap(Zn(z, e, t)),
	startOfDay: (e) => ap(tr(z, e)),
	equals: (e, t) => ma(e, mf(t)),
	toInstant: (e) => sp(ps(e)),
	toPlainDateTime: (e) => Jf(ms(z, e)),
	toPlainDate: (e) => np(hs(z, e)),
	toPlainTime: (e) => Kf(gs(z, e)),
	toLocaleString(e, t, n = {}) {
		let [r, i] = zf(t, n, e);
		return r.format(i);
	},
	toString: (e, t) => xr(z, e, t),
	toJSON: (e) => xr(z, e),
	valueOf: af,
	getTimeZoneTransition(e, t) {
		let { timeZone: n, epochNanoseconds: r } = e, i = Cn(t), a = z(n).l(r, i);
		return a ? ap({
			...e,
			epochNanoseconds: a
		}) : null;
	}
}, {
	from: (e, t) => ap(mf(e, t)),
	compare: (e, t) => ca(mf(e), mf(t))
}, ((e) => xr(z, e))), [op, sp, cp] = Zd(Tu, is, Pf, {
	add: (e, t) => sp(Gr(0, e, V(t))),
	subtract: (e, t) => sp(Gr(1, e, V(t))),
	until: (e, t, n) => H(xa(0, e, _f(t), n)),
	since: (e, t, n) => H(xa(1, e, _f(t), n)),
	round: (e, t) => sp(Xn(e, t)),
	equals: (e, t) => pa(e, _f(t)),
	toZonedDateTimeISO: (e, t) => ap(fs(e, of(t))),
	toLocaleString(e, t, n) {
		let [r, i] = Rf(t, n, e);
		return r.format(i);
	},
	toString: (e, t) => br(of, z, e, t),
	toJSON: (e) => br(of, z, e),
	valueOf: af
}, {
	from: (e) => sp(_f(e)),
	fromEpochMilliseconds: (e) => sp(ws(e)),
	fromEpochNanoseconds: (e) => sp(Ts(e)),
	compare: (e, t) => sa(_f(e), _f(t))
}, ((e) => br(of, z, e))), lp = /*@__PURE__*/ Object.defineProperties({}, {
	...Re("Temporal.Now"),
	...Ie({
		timeZoneId: () => Ls(),
		instant: () => sp(Fn(Is())),
		zonedDateTimeISO: (e = Ls()) => ap(In(Is(), of(e), ul)),
		plainDateTimeISO: (e = Ls()) => Jf(Ln(Fs(z(of(e))), ul)),
		plainDateISO: (e = Ls()) => np(Rn(Fs(z(of(e))), ul)),
		plainTimeISO: (e = Ls()) => Kf(Vn(Fs(z(of(e)))))
	})
}), up = /*@__PURE__*/ Object.defineProperties({}, {
	...Re("Temporal"),
	...Ie({
		PlainYearMonth: Qf,
		PlainMonthDay: Yf,
		PlainDate: tp,
		PlainTime: Gf,
		PlainDateTime: qf,
		ZonedDateTime: ip,
		Instant: op,
		Duration: Ff,
		Now: lp
	})
}), dp = /*@__PURE__*/ vf(), fp = /*@__PURE__*/ new WeakMap();
Object.create(Intl), Ie({ DateTimeFormat: dp });
//#endregion
//#region src/core/utils/DateUtils.ts
var U = /* @__PURE__ */ Ae((/* @__PURE__ */ P(((e, t) => {
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
function pp(e) {
	let t = e < 0;
	e = Math.abs(e);
	let n = Math.floor(e / 3600).toFixed(0).padStart(2, "0"), r = Math.floor(e % 3600 / 60).toFixed(0).padStart(2, "0"), i = Math.floor(e % 3600 % 60).toFixed(0).padStart(2, "0"), a = "";
	return n !== "00" && (a += `${n}:`), a += `${r}:${i}`, t && (a = "-" + a), a;
}
function mp(e) {
	return `${`${e.getFullYear()}`.padStart(4, "0")}-${`${e.getMonth() + 1}`.padStart(2, "0")}-${`${e.getDate()}`.padStart(2, "0")}`;
}
//#endregion
//#region src/audio/Clock/Clock.tsx
function hp({ seconds: e, className: n, ...r }) {
	let i = p(() => Math.floor(e), [e]), a = p(() => gp(i), [i]);
	return /* @__PURE__ */ t.createElement("time", {
		dateTime: a,
		className: (0, U.default)("mx_Clock", n),
		...r
	}, pp(e));
}
function gp(e) {
	if (!isNaN(e)) return new up.Duration(0, 0, 0, 0, 0, 0, Math.round(e)).round({
		smallestUnit: "seconds",
		largestUnit: "hours"
	}).toString();
}
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/play-solid.js
function _p(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "m8.98 4.677 9.921 5.58c1.36.764 1.36 2.722 0 3.486l-9.92 5.58C7.647 20.073 6 19.11 6 17.58V6.42c0-1.53 1.647-2.493 2.98-1.743" })
	});
}
_p.displayName = "PlaySolidIcon";
var vp = a(_p);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/pause-solid.js
function yp(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M8 4a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V6a2 2 0 0 0-2-2m8 0a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V6a2 2 0 0 0-2-2" })
	});
}
yp.displayName = "PauseSolidIcon";
var bp = a(yp), xp = { button: "_button_yfjla_8" }, Sp = i(null);
Sp.displayName = "I18nContext";
function W() {
	let e = l(Sp);
	if (!e) throw Error("useI18n must be used within an I18nContext.Provider");
	return e;
}
//#endregion
//#region src/audio/PlayPauseButton/PlayPauseButton.tsx
function Cp({ disabled: e = !1, playing: n = !1, togglePlay: r, ...i }) {
	let { translate: a } = W(), o = a(n ? "action|pause" : "action|play");
	return /* @__PURE__ */ t.createElement(E, {
		size: "32px",
		"aria-label": o,
		tooltip: o,
		onClick: r,
		className: xp.button,
		disabled: e,
		...i
	}, n ? /* @__PURE__ */ t.createElement(bp, null) : /* @__PURE__ */ t.createElement(vp, null));
}
//#endregion
//#region node_modules/lodash/_freeGlobal.js
var wp = typeof global == "object" && global && global.Object === Object && global, Tp = typeof self == "object" && self && self.Object === Object && self, Ep = wp || Tp || Function("return this")(), Dp = Ep.Symbol, Op = Object.prototype, kp = Op.hasOwnProperty, Ap = Op.toString, jp = Dp ? Dp.toStringTag : void 0;
function Mp(e) {
	var t = kp.call(e, jp), n = e[jp];
	try {
		e[jp] = void 0;
		var r = !0;
	} catch {}
	var i = Ap.call(e);
	return r && (t ? e[jp] = n : delete e[jp]), i;
}
//#endregion
//#region node_modules/lodash/_objectToString.js
var Np = Object.prototype.toString;
function Pp(e) {
	return Np.call(e);
}
//#endregion
//#region node_modules/lodash/_baseGetTag.js
var Fp = "[object Null]", Ip = "[object Undefined]", Lp = Dp ? Dp.toStringTag : void 0;
function Rp(e) {
	return e == null ? e === void 0 ? Ip : Fp : Lp && Lp in Object(e) ? Mp(e) : Pp(e);
}
//#endregion
//#region node_modules/lodash/isObjectLike.js
function zp(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region node_modules/lodash/isSymbol.js
var Bp = "[object Symbol]";
function Vp(e) {
	return typeof e == "symbol" || zp(e) && Rp(e) == Bp;
}
//#endregion
//#region node_modules/lodash/_arrayMap.js
function Hp(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
	return i;
}
//#endregion
//#region node_modules/lodash/isArray.js
var Up = Array.isArray, Wp = 1 / 0, Gp = Dp ? Dp.prototype : void 0, Kp = Gp ? Gp.toString : void 0;
function qp(e) {
	if (typeof e == "string") return e;
	if (Up(e)) return Hp(e, qp) + "";
	if (Vp(e)) return Kp ? Kp.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -Wp ? "-0" : t;
}
//#endregion
//#region node_modules/lodash/_trimmedEndIndex.js
var Jp = /\s/;
function Yp(e) {
	for (var t = e.length; t-- && Jp.test(e.charAt(t)););
	return t;
}
//#endregion
//#region node_modules/lodash/_baseTrim.js
var Xp = /^\s+/;
function Zp(e) {
	return e && e.slice(0, Yp(e) + 1).replace(Xp, "");
}
//#endregion
//#region node_modules/lodash/isObject.js
function Qp(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
//#endregion
//#region node_modules/lodash/toNumber.js
var $p = NaN, em = /^[-+]0x[0-9a-f]+$/i, tm = /^0b[01]+$/i, nm = /^0o[0-7]+$/i, rm = parseInt;
function im(e) {
	if (typeof e == "number") return e;
	if (Vp(e)) return $p;
	if (Qp(e)) {
		var t = typeof e.valueOf == "function" ? e.valueOf() : e;
		e = Qp(t) ? t + "" : t;
	}
	if (typeof e != "string") return e === 0 ? e : +e;
	e = Zp(e);
	var n = tm.test(e);
	return n || nm.test(e) ? rm(e.slice(2), n ? 2 : 8) : em.test(e) ? $p : +e;
}
//#endregion
//#region node_modules/lodash/identity.js
function am(e) {
	return e;
}
//#endregion
//#region node_modules/lodash/isFunction.js
var om = "[object AsyncFunction]", sm = "[object Function]", cm = "[object GeneratorFunction]", lm = "[object Proxy]";
function um(e) {
	if (!Qp(e)) return !1;
	var t = Rp(e);
	return t == sm || t == cm || t == om || t == lm;
}
//#endregion
//#region node_modules/lodash/_coreJsData.js
var dm = Ep["__core-js_shared__"], fm = function() {
	var e = /[^.]+$/.exec(dm && dm.keys && dm.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function pm(e) {
	return !!fm && fm in e;
}
//#endregion
//#region node_modules/lodash/_toSource.js
var mm = Function.prototype.toString;
function hm(e) {
	if (e != null) {
		try {
			return mm.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
//#endregion
//#region node_modules/lodash/_baseIsNative.js
var gm = /[\\^$.*+?()[\]{}|]/g, _m = /^\[object .+?Constructor\]$/, vm = Function.prototype, ym = Object.prototype, bm = vm.toString, xm = ym.hasOwnProperty, Sm = RegExp("^" + bm.call(xm).replace(gm, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Cm(e) {
	return !Qp(e) || pm(e) ? !1 : (um(e) ? Sm : _m).test(hm(e));
}
//#endregion
//#region node_modules/lodash/_getValue.js
function wm(e, t) {
	return e?.[t];
}
//#endregion
//#region node_modules/lodash/_getNative.js
function Tm(e, t) {
	var n = wm(e, t);
	return Cm(n) ? n : void 0;
}
//#endregion
//#region node_modules/lodash/_WeakMap.js
var Em = Tm(Ep, "WeakMap"), Dm = Object.create, Om = function() {
	function e() {}
	return function(t) {
		if (!Qp(t)) return {};
		if (Dm) return Dm(t);
		e.prototype = t;
		var n = new e();
		return e.prototype = void 0, n;
	};
}();
//#endregion
//#region node_modules/lodash/_apply.js
function km(e, t, n) {
	switch (n.length) {
		case 0: return e.call(t);
		case 1: return e.call(t, n[0]);
		case 2: return e.call(t, n[0], n[1]);
		case 3: return e.call(t, n[0], n[1], n[2]);
	}
	return e.apply(t, n);
}
//#endregion
//#region node_modules/lodash/_copyArray.js
function Am(e, t) {
	var n = -1, r = e.length;
	for (t ||= Array(r); ++n < r;) t[n] = e[n];
	return t;
}
//#endregion
//#region node_modules/lodash/_shortOut.js
var jm = 800, Mm = 16, Nm = Date.now;
function Pm(e) {
	var t = 0, n = 0;
	return function() {
		var r = Nm(), i = Mm - (r - n);
		if (n = r, i > 0) {
			if (++t >= jm) return arguments[0];
		} else t = 0;
		return e.apply(void 0, arguments);
	};
}
//#endregion
//#region node_modules/lodash/constant.js
function Fm(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/lodash/_defineProperty.js
var Im = function() {
	try {
		var e = Tm(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}(), Lm = Pm(Im ? function(e, t) {
	return Im(e, "toString", {
		configurable: !0,
		enumerable: !1,
		value: Fm(t),
		writable: !0
	});
} : am);
//#endregion
//#region node_modules/lodash/_arrayEach.js
function Rm(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
	return e;
}
//#endregion
//#region node_modules/lodash/_isIndex.js
var zm = 9007199254740991, Bm = /^(?:0|[1-9]\d*)$/;
function Vm(e, t) {
	var n = typeof e;
	return t ??= zm, !!t && (n == "number" || n != "symbol" && Bm.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
//#endregion
//#region node_modules/lodash/_baseAssignValue.js
function Hm(e, t, n) {
	t == "__proto__" && Im ? Im(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
//#endregion
//#region node_modules/lodash/eq.js
function Um(e, t) {
	return e === t || e !== e && t !== t;
}
//#endregion
//#region node_modules/lodash/_assignValue.js
var Wm = Object.prototype.hasOwnProperty;
function Gm(e, t, n) {
	var r = e[t];
	(!(Wm.call(e, t) && Um(r, n)) || n === void 0 && !(t in e)) && Hm(e, t, n);
}
//#endregion
//#region node_modules/lodash/_copyObject.js
function Km(e, t, n, r) {
	var i = !n;
	n ||= {};
	for (var a = -1, o = t.length; ++a < o;) {
		var s = t[a], c = r ? r(n[s], e[s], s, n, e) : void 0;
		c === void 0 && (c = e[s]), i ? Hm(n, s, c) : Gm(n, s, c);
	}
	return n;
}
//#endregion
//#region node_modules/lodash/_overRest.js
var qm = Math.max;
function Jm(e, t, n) {
	return t = qm(t === void 0 ? e.length - 1 : t, 0), function() {
		for (var r = arguments, i = -1, a = qm(r.length - t, 0), o = Array(a); ++i < a;) o[i] = r[t + i];
		i = -1;
		for (var s = Array(t + 1); ++i < t;) s[i] = r[i];
		return s[t] = n(o), km(e, this, s);
	};
}
//#endregion
//#region node_modules/lodash/isLength.js
var Ym = 9007199254740991;
function Xm(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ym;
}
//#endregion
//#region node_modules/lodash/isArrayLike.js
function Zm(e) {
	return e != null && Xm(e.length) && !um(e);
}
//#endregion
//#region node_modules/lodash/_isPrototype.js
var Qm = Object.prototype;
function $m(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || Qm);
}
//#endregion
//#region node_modules/lodash/_baseTimes.js
function eh(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
//#endregion
//#region node_modules/lodash/_baseIsArguments.js
var th = "[object Arguments]";
function nh(e) {
	return zp(e) && Rp(e) == th;
}
//#endregion
//#region node_modules/lodash/isArguments.js
var rh = Object.prototype, ih = rh.hasOwnProperty, ah = rh.propertyIsEnumerable, oh = nh(function() {
	return arguments;
}()) ? nh : function(e) {
	return zp(e) && ih.call(e, "callee") && !ah.call(e, "callee");
};
//#endregion
//#region node_modules/lodash/stubFalse.js
function sh() {
	return !1;
}
//#endregion
//#region node_modules/lodash/isBuffer.js
var ch = typeof exports == "object" && exports && !exports.nodeType && exports, lh = ch && typeof module == "object" && module && !module.nodeType && module, uh = lh && lh.exports === ch ? Ep.Buffer : void 0, dh = (uh ? uh.isBuffer : void 0) || sh, fh = "[object Arguments]", ph = "[object Array]", mh = "[object Boolean]", hh = "[object Date]", gh = "[object Error]", _h = "[object Function]", vh = "[object Map]", yh = "[object Number]", bh = "[object Object]", xh = "[object RegExp]", Sh = "[object Set]", Ch = "[object String]", wh = "[object WeakMap]", Th = "[object ArrayBuffer]", Eh = "[object DataView]", Dh = "[object Float32Array]", Oh = "[object Float64Array]", kh = "[object Int8Array]", Ah = "[object Int16Array]", jh = "[object Int32Array]", Mh = "[object Uint8Array]", Nh = "[object Uint8ClampedArray]", Ph = "[object Uint16Array]", Fh = "[object Uint32Array]", G = {};
G[Dh] = G[Oh] = G[kh] = G[Ah] = G[jh] = G[Mh] = G[Nh] = G[Ph] = G[Fh] = !0, G[fh] = G[ph] = G[Th] = G[mh] = G[Eh] = G[hh] = G[gh] = G[_h] = G[vh] = G[yh] = G[bh] = G[xh] = G[Sh] = G[Ch] = G[wh] = !1;
function Ih(e) {
	return zp(e) && Xm(e.length) && !!G[Rp(e)];
}
//#endregion
//#region node_modules/lodash/_baseUnary.js
function Lh(e) {
	return function(t) {
		return e(t);
	};
}
//#endregion
//#region node_modules/lodash/_nodeUtil.js
var Rh = typeof exports == "object" && exports && !exports.nodeType && exports, zh = Rh && typeof module == "object" && module && !module.nodeType && module, Bh = zh && zh.exports === Rh && wp.process, Vh = function() {
	try {
		return zh && zh.require && zh.require("util").types || Bh && Bh.binding && Bh.binding("util");
	} catch {}
}(), Hh = Vh && Vh.isTypedArray, Uh = Hh ? Lh(Hh) : Ih, Wh = Object.prototype.hasOwnProperty;
function Gh(e, t) {
	var n = Up(e), r = !n && oh(e), i = !n && !r && dh(e), a = !n && !r && !i && Uh(e), o = n || r || i || a, s = o ? eh(e.length, String) : [], c = s.length;
	for (var l in e) (t || Wh.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || Vm(l, c))) && s.push(l);
	return s;
}
//#endregion
//#region node_modules/lodash/_overArg.js
function Kh(e, t) {
	return function(n) {
		return e(t(n));
	};
}
//#endregion
//#region node_modules/lodash/_nativeKeys.js
var qh = Kh(Object.keys, Object), Jh = Object.prototype.hasOwnProperty;
function Yh(e) {
	if (!$m(e)) return qh(e);
	var t = [];
	for (var n in Object(e)) Jh.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
//#endregion
//#region node_modules/lodash/keys.js
function Xh(e) {
	return Zm(e) ? Gh(e) : Yh(e);
}
//#endregion
//#region node_modules/lodash/_nativeKeysIn.js
function Zh(e) {
	var t = [];
	if (e != null) for (var n in Object(e)) t.push(n);
	return t;
}
//#endregion
//#region node_modules/lodash/_baseKeysIn.js
var Qh = Object.prototype.hasOwnProperty;
function $h(e) {
	if (!Qp(e)) return Zh(e);
	var t = $m(e), n = [];
	for (var r in e) (r != "constructor" || !t && Qh.call(e, r)) && n.push(r);
	return n;
}
//#endregion
//#region node_modules/lodash/keysIn.js
function eg(e) {
	return Zm(e) ? Gh(e, !0) : $h(e);
}
//#endregion
//#region node_modules/lodash/_isKey.js
var tg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ng = /^\w*$/;
function rg(e, t) {
	if (Up(e)) return !1;
	var n = typeof e;
	return n == "number" || n == "symbol" || n == "boolean" || e == null || Vp(e) ? !0 : ng.test(e) || !tg.test(e) || t != null && e in Object(t);
}
//#endregion
//#region node_modules/lodash/_nativeCreate.js
var ig = Tm(Object, "create");
//#endregion
//#region node_modules/lodash/_hashClear.js
function ag() {
	this.__data__ = ig ? ig(null) : {}, this.size = 0;
}
//#endregion
//#region node_modules/lodash/_hashDelete.js
function og(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= +!!t, t;
}
//#endregion
//#region node_modules/lodash/_hashGet.js
var sg = "__lodash_hash_undefined__", cg = Object.prototype.hasOwnProperty;
function lg(e) {
	var t = this.__data__;
	if (ig) {
		var n = t[e];
		return n === sg ? void 0 : n;
	}
	return cg.call(t, e) ? t[e] : void 0;
}
//#endregion
//#region node_modules/lodash/_hashHas.js
var ug = Object.prototype.hasOwnProperty;
function dg(e) {
	var t = this.__data__;
	return ig ? t[e] !== void 0 : ug.call(t, e);
}
//#endregion
//#region node_modules/lodash/_hashSet.js
var fg = "__lodash_hash_undefined__";
function pg(e, t) {
	var n = this.__data__;
	return this.size += +!this.has(e), n[e] = ig && t === void 0 ? fg : t, this;
}
//#endregion
//#region node_modules/lodash/_Hash.js
function mg(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
mg.prototype.clear = ag, mg.prototype.delete = og, mg.prototype.get = lg, mg.prototype.has = dg, mg.prototype.set = pg;
//#endregion
//#region node_modules/lodash/_listCacheClear.js
function hg() {
	this.__data__ = [], this.size = 0;
}
//#endregion
//#region node_modules/lodash/_assocIndexOf.js
function gg(e, t) {
	for (var n = e.length; n--;) if (Um(e[n][0], t)) return n;
	return -1;
}
//#endregion
//#region node_modules/lodash/_listCacheDelete.js
var _g = Array.prototype.splice;
function vg(e) {
	var t = this.__data__, n = gg(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : _g.call(t, n, 1), --this.size, !0);
}
//#endregion
//#region node_modules/lodash/_listCacheGet.js
function yg(e) {
	var t = this.__data__, n = gg(t, e);
	return n < 0 ? void 0 : t[n][1];
}
//#endregion
//#region node_modules/lodash/_listCacheHas.js
function bg(e) {
	return gg(this.__data__, e) > -1;
}
//#endregion
//#region node_modules/lodash/_listCacheSet.js
function xg(e, t) {
	var n = this.__data__, r = gg(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
//#endregion
//#region node_modules/lodash/_ListCache.js
function Sg(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Sg.prototype.clear = hg, Sg.prototype.delete = vg, Sg.prototype.get = yg, Sg.prototype.has = bg, Sg.prototype.set = xg;
//#endregion
//#region node_modules/lodash/_Map.js
var Cg = Tm(Ep, "Map");
//#endregion
//#region node_modules/lodash/_mapCacheClear.js
function wg() {
	this.size = 0, this.__data__ = {
		hash: new mg(),
		map: new (Cg || Sg)(),
		string: new mg()
	};
}
//#endregion
//#region node_modules/lodash/_isKeyable.js
function Tg(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
//#endregion
//#region node_modules/lodash/_getMapData.js
function Eg(e, t) {
	var n = e.__data__;
	return Tg(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
//#endregion
//#region node_modules/lodash/_mapCacheDelete.js
function Dg(e) {
	var t = Eg(this, e).delete(e);
	return this.size -= +!!t, t;
}
//#endregion
//#region node_modules/lodash/_mapCacheGet.js
function Og(e) {
	return Eg(this, e).get(e);
}
//#endregion
//#region node_modules/lodash/_mapCacheHas.js
function kg(e) {
	return Eg(this, e).has(e);
}
//#endregion
//#region node_modules/lodash/_mapCacheSet.js
function Ag(e, t) {
	var n = Eg(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
//#endregion
//#region node_modules/lodash/_MapCache.js
function jg(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
jg.prototype.clear = wg, jg.prototype.delete = Dg, jg.prototype.get = Og, jg.prototype.has = kg, jg.prototype.set = Ag;
//#endregion
//#region node_modules/lodash/memoize.js
var Mg = "Expected a function";
function Ng(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(Mg);
	var n = function() {
		var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	};
	return n.cache = new (Ng.Cache || jg)(), n;
}
Ng.Cache = jg;
//#endregion
//#region node_modules/lodash/_memoizeCapped.js
var Pg = 500;
function Fg(e) {
	var t = Ng(e, function(e) {
		return n.size === Pg && n.clear(), e;
	}), n = t.cache;
	return t;
}
//#endregion
//#region node_modules/lodash/_stringToPath.js
var Ig = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Lg = /\\(\\)?/g, Rg = Fg(function(e) {
	var t = [];
	return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ig, function(e, n, r, i) {
		t.push(r ? i.replace(Lg, "$1") : n || e);
	}), t;
});
//#endregion
//#region node_modules/lodash/toString.js
function zg(e) {
	return e == null ? "" : qp(e);
}
//#endregion
//#region node_modules/lodash/_castPath.js
function Bg(e, t) {
	return Up(e) ? e : rg(e, t) ? [e] : Rg(zg(e));
}
//#endregion
//#region node_modules/lodash/_toKey.js
var Vg = 1 / 0;
function Hg(e) {
	if (typeof e == "string" || Vp(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -Vg ? "-0" : t;
}
//#endregion
//#region node_modules/lodash/_baseGet.js
function Ug(e, t) {
	t = Bg(t, e);
	for (var n = 0, r = t.length; e != null && n < r;) e = e[Hg(t[n++])];
	return n && n == r ? e : void 0;
}
//#endregion
//#region node_modules/lodash/_arrayPush.js
function Wg(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
//#endregion
//#region node_modules/lodash/_isFlattenable.js
var Gg = Dp ? Dp.isConcatSpreadable : void 0;
function Kg(e) {
	return Up(e) || oh(e) || !!(Gg && e && e[Gg]);
}
//#endregion
//#region node_modules/lodash/_baseFlatten.js
function qg(e, t, n, r, i) {
	var a = -1, o = e.length;
	for (n ||= Kg, i ||= []; ++a < o;) {
		var s = e[a];
		t > 0 && n(s) ? t > 1 ? qg(s, t - 1, n, r, i) : Wg(i, s) : r || (i[i.length] = s);
	}
	return i;
}
//#endregion
//#region node_modules/lodash/flatten.js
function Jg(e) {
	return e != null && e.length ? qg(e, 1) : [];
}
//#endregion
//#region node_modules/lodash/_flatRest.js
function Yg(e) {
	return Lm(Jm(e, void 0, Jg), e + "");
}
//#endregion
//#region node_modules/lodash/_getPrototype.js
var Xg = Kh(Object.getPrototypeOf, Object), Zg = "[object Object]", Qg = Function.prototype, $g = Object.prototype, e_ = Qg.toString, t_ = $g.hasOwnProperty, n_ = e_.call(Object);
function r_(e) {
	if (!zp(e) || Rp(e) != Zg) return !1;
	var t = Xg(e);
	if (t === null) return !0;
	var n = t_.call(t, "constructor") && t.constructor;
	return typeof n == "function" && n instanceof n && e_.call(n) == n_;
}
//#endregion
//#region node_modules/lodash/_baseSlice.js
function i_(e, t, n) {
	var r = -1, i = e.length;
	t < 0 && (t = -t > i ? 0 : i + t), n = n > i ? i : n, n < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
	for (var a = Array(i); ++r < i;) a[r] = e[r + t];
	return a;
}
//#endregion
//#region node_modules/lodash/_castSlice.js
function a_(e, t, n) {
	var r = e.length;
	return n = n === void 0 ? r : n, !t && n >= r ? e : i_(e, t, n);
}
//#endregion
//#region node_modules/lodash/_hasUnicode.js
var o_ = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
function s_(e) {
	return o_.test(e);
}
//#endregion
//#region node_modules/lodash/_asciiToArray.js
function c_(e) {
	return e.split("");
}
//#endregion
//#region node_modules/lodash/_unicodeToArray.js
var l_ = "\\ud800-\\udfff", u_ = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", d_ = "\\ufe0e\\ufe0f", f_ = "[" + l_ + "]", p_ = "[" + u_ + "]", m_ = "\\ud83c[\\udffb-\\udfff]", h_ = "(?:" + p_ + "|" + m_ + ")", g_ = "[^" + l_ + "]", __ = "(?:\\ud83c[\\udde6-\\uddff]){2}", v_ = "[\\ud800-\\udbff][\\udc00-\\udfff]", y_ = "\\u200d", b_ = h_ + "?", x_ = "[" + d_ + "]?", S_ = "(?:" + y_ + "(?:" + [
	g_,
	__,
	v_
].join("|") + ")" + x_ + b_ + ")*", C_ = x_ + b_ + S_, w_ = "(?:" + [
	g_ + p_ + "?",
	p_,
	__,
	v_,
	f_
].join("|") + ")", T_ = RegExp(m_ + "(?=" + m_ + ")|" + w_ + C_, "g");
function E_(e) {
	return e.match(T_) || [];
}
//#endregion
//#region node_modules/lodash/_stringToArray.js
function D_(e) {
	return s_(e) ? E_(e) : c_(e);
}
//#endregion
//#region node_modules/lodash/_createCaseFirst.js
function O_(e) {
	return function(t) {
		t = zg(t);
		var n = s_(t) ? D_(t) : void 0, r = n ? n[0] : t.charAt(0), i = n ? a_(n, 1).join("") : t.slice(1);
		return r[e]() + i;
	};
}
//#endregion
//#region node_modules/lodash/upperFirst.js
var k_ = O_("toUpperCase");
//#endregion
//#region node_modules/lodash/capitalize.js
function A_(e) {
	return k_(zg(e).toLowerCase());
}
//#endregion
//#region node_modules/lodash/_stackClear.js
function j_() {
	this.__data__ = new Sg(), this.size = 0;
}
//#endregion
//#region node_modules/lodash/_stackDelete.js
function M_(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
//#endregion
//#region node_modules/lodash/_stackGet.js
function N_(e) {
	return this.__data__.get(e);
}
//#endregion
//#region node_modules/lodash/_stackHas.js
function P_(e) {
	return this.__data__.has(e);
}
//#endregion
//#region node_modules/lodash/_stackSet.js
var F_ = 200;
function I_(e, t) {
	var n = this.__data__;
	if (n instanceof Sg) {
		var r = n.__data__;
		if (!Cg || r.length < F_ - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new jg(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
//#endregion
//#region node_modules/lodash/_Stack.js
function L_(e) {
	var t = this.__data__ = new Sg(e);
	this.size = t.size;
}
L_.prototype.clear = j_, L_.prototype.delete = M_, L_.prototype.get = N_, L_.prototype.has = P_, L_.prototype.set = I_;
//#endregion
//#region node_modules/lodash/_baseAssign.js
function R_(e, t) {
	return e && Km(t, Xh(t), e);
}
//#endregion
//#region node_modules/lodash/_baseAssignIn.js
function z_(e, t) {
	return e && Km(t, eg(t), e);
}
//#endregion
//#region node_modules/lodash/_cloneBuffer.js
var B_ = typeof exports == "object" && exports && !exports.nodeType && exports, V_ = B_ && typeof module == "object" && module && !module.nodeType && module, H_ = V_ && V_.exports === B_ ? Ep.Buffer : void 0, U_ = H_ ? H_.allocUnsafe : void 0;
function W_(e, t) {
	if (t) return e.slice();
	var n = e.length, r = U_ ? U_(n) : new e.constructor(n);
	return e.copy(r), r;
}
//#endregion
//#region node_modules/lodash/_arrayFilter.js
function G_(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
//#endregion
//#region node_modules/lodash/stubArray.js
function K_() {
	return [];
}
//#endregion
//#region node_modules/lodash/_getSymbols.js
var q_ = Object.prototype.propertyIsEnumerable, J_ = Object.getOwnPropertySymbols, Y_ = J_ ? function(e) {
	return e == null ? [] : (e = Object(e), G_(J_(e), function(t) {
		return q_.call(e, t);
	}));
} : K_;
//#endregion
//#region node_modules/lodash/_copySymbols.js
function X_(e, t) {
	return Km(e, Y_(e), t);
}
//#endregion
//#region node_modules/lodash/_getSymbolsIn.js
var Z_ = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) Wg(t, Y_(e)), e = Xg(e);
	return t;
} : K_;
//#endregion
//#region node_modules/lodash/_copySymbolsIn.js
function Q_(e, t) {
	return Km(e, Z_(e), t);
}
//#endregion
//#region node_modules/lodash/_baseGetAllKeys.js
function $_(e, t, n) {
	var r = t(e);
	return Up(e) ? r : Wg(r, n(e));
}
//#endregion
//#region node_modules/lodash/_getAllKeys.js
function ev(e) {
	return $_(e, Xh, Y_);
}
//#endregion
//#region node_modules/lodash/_getAllKeysIn.js
function tv(e) {
	return $_(e, eg, Z_);
}
//#endregion
//#region node_modules/lodash/_DataView.js
var nv = Tm(Ep, "DataView"), rv = Tm(Ep, "Promise"), iv = Tm(Ep, "Set"), av = "[object Map]", ov = "[object Object]", sv = "[object Promise]", cv = "[object Set]", lv = "[object WeakMap]", uv = "[object DataView]", dv = hm(nv), fv = hm(Cg), pv = hm(rv), mv = hm(iv), hv = hm(Em), gv = Rp;
(nv && gv(new nv(/* @__PURE__ */ new ArrayBuffer(1))) != uv || Cg && gv(new Cg()) != av || rv && gv(rv.resolve()) != sv || iv && gv(new iv()) != cv || Em && gv(new Em()) != lv) && (gv = function(e) {
	var t = Rp(e), n = t == ov ? e.constructor : void 0, r = n ? hm(n) : "";
	if (r) switch (r) {
		case dv: return uv;
		case fv: return av;
		case pv: return sv;
		case mv: return cv;
		case hv: return lv;
	}
	return t;
});
var _v = gv, vv = Object.prototype.hasOwnProperty;
function yv(e) {
	var t = e.length, n = new e.constructor(t);
	return t && typeof e[0] == "string" && vv.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
//#endregion
//#region node_modules/lodash/_Uint8Array.js
var bv = Ep.Uint8Array;
//#endregion
//#region node_modules/lodash/_cloneArrayBuffer.js
function xv(e) {
	var t = new e.constructor(e.byteLength);
	return new bv(t).set(new bv(e)), t;
}
//#endregion
//#region node_modules/lodash/_cloneDataView.js
function Sv(e, t) {
	var n = t ? xv(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.byteLength);
}
//#endregion
//#region node_modules/lodash/_cloneRegExp.js
var Cv = /\w*$/;
function wv(e) {
	var t = new e.constructor(e.source, Cv.exec(e));
	return t.lastIndex = e.lastIndex, t;
}
//#endregion
//#region node_modules/lodash/_cloneSymbol.js
var Tv = Dp ? Dp.prototype : void 0, Ev = Tv ? Tv.valueOf : void 0;
function Dv(e) {
	return Ev ? Object(Ev.call(e)) : {};
}
//#endregion
//#region node_modules/lodash/_cloneTypedArray.js
function Ov(e, t) {
	var n = t ? xv(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.length);
}
//#endregion
//#region node_modules/lodash/_initCloneByTag.js
var kv = "[object Boolean]", Av = "[object Date]", jv = "[object Map]", Mv = "[object Number]", Nv = "[object RegExp]", Pv = "[object Set]", Fv = "[object String]", Iv = "[object Symbol]", Lv = "[object ArrayBuffer]", Rv = "[object DataView]", zv = "[object Float32Array]", Bv = "[object Float64Array]", Vv = "[object Int8Array]", Hv = "[object Int16Array]", Uv = "[object Int32Array]", Wv = "[object Uint8Array]", Gv = "[object Uint8ClampedArray]", Kv = "[object Uint16Array]", qv = "[object Uint32Array]";
function Jv(e, t, n) {
	var r = e.constructor;
	switch (t) {
		case Lv: return xv(e);
		case kv:
		case Av: return new r(+e);
		case Rv: return Sv(e, n);
		case zv:
		case Bv:
		case Vv:
		case Hv:
		case Uv:
		case Wv:
		case Gv:
		case Kv:
		case qv: return Ov(e, n);
		case jv: return new r();
		case Mv:
		case Fv: return new r(e);
		case Nv: return wv(e);
		case Pv: return new r();
		case Iv: return Dv(e);
	}
}
//#endregion
//#region node_modules/lodash/_initCloneObject.js
function Yv(e) {
	return typeof e.constructor == "function" && !$m(e) ? Om(Xg(e)) : {};
}
//#endregion
//#region node_modules/lodash/_baseIsMap.js
var Xv = "[object Map]";
function Zv(e) {
	return zp(e) && _v(e) == Xv;
}
//#endregion
//#region node_modules/lodash/isMap.js
var Qv = Vh && Vh.isMap, $v = Qv ? Lh(Qv) : Zv, ey = "[object Set]";
function ty(e) {
	return zp(e) && _v(e) == ey;
}
//#endregion
//#region node_modules/lodash/isSet.js
var ny = Vh && Vh.isSet, ry = ny ? Lh(ny) : ty, iy = 1, ay = 2, oy = 4, sy = "[object Arguments]", cy = "[object Array]", ly = "[object Boolean]", uy = "[object Date]", dy = "[object Error]", fy = "[object Function]", py = "[object GeneratorFunction]", my = "[object Map]", hy = "[object Number]", gy = "[object Object]", _y = "[object RegExp]", vy = "[object Set]", yy = "[object String]", by = "[object Symbol]", xy = "[object WeakMap]", Sy = "[object ArrayBuffer]", Cy = "[object DataView]", wy = "[object Float32Array]", Ty = "[object Float64Array]", Ey = "[object Int8Array]", Dy = "[object Int16Array]", Oy = "[object Int32Array]", ky = "[object Uint8Array]", Ay = "[object Uint8ClampedArray]", jy = "[object Uint16Array]", My = "[object Uint32Array]", K = {};
K[sy] = K[cy] = K[Sy] = K[Cy] = K[ly] = K[uy] = K[wy] = K[Ty] = K[Ey] = K[Dy] = K[Oy] = K[my] = K[hy] = K[gy] = K[_y] = K[vy] = K[yy] = K[by] = K[ky] = K[Ay] = K[jy] = K[My] = !0, K[dy] = K[fy] = K[xy] = !1;
function Ny(e, t, n, r, i, a) {
	var o, s = t & iy, c = t & ay, l = t & oy;
	if (n && (o = i ? n(e, r, i, a) : n(e)), o !== void 0) return o;
	if (!Qp(e)) return e;
	var u = Up(e);
	if (u) {
		if (o = yv(e), !s) return Am(e, o);
	} else {
		var d = _v(e), f = d == fy || d == py;
		if (dh(e)) return W_(e, s);
		if (d == gy || d == sy || f && !i) {
			if (o = c || f ? {} : Yv(e), !s) return c ? Q_(e, z_(o, e)) : X_(e, R_(o, e));
		} else {
			if (!K[d]) return i ? e : {};
			o = Jv(e, d, s);
		}
	}
	a ||= new L_();
	var p = a.get(e);
	if (p) return p;
	a.set(e, o), ry(e) ? e.forEach(function(r) {
		o.add(Ny(r, t, n, r, e, a));
	}) : $v(e) && e.forEach(function(r, i) {
		o.set(i, Ny(r, t, n, i, e, a));
	});
	var m = u ? void 0 : (l ? c ? tv : ev : c ? eg : Xh)(e);
	return Rm(m || e, function(r, i) {
		m && (i = r, r = e[i]), Gm(o, i, Ny(r, t, n, i, e, a));
	}), o;
}
//#endregion
//#region node_modules/lodash/_setCacheAdd.js
var Py = "__lodash_hash_undefined__";
function Fy(e) {
	return this.__data__.set(e, Py), this;
}
//#endregion
//#region node_modules/lodash/_setCacheHas.js
function Iy(e) {
	return this.__data__.has(e);
}
//#endregion
//#region node_modules/lodash/_SetCache.js
function Ly(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.__data__ = new jg(); ++t < n;) this.add(e[t]);
}
Ly.prototype.add = Ly.prototype.push = Fy, Ly.prototype.has = Iy;
//#endregion
//#region node_modules/lodash/_arraySome.js
function Ry(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
	return !1;
}
//#endregion
//#region node_modules/lodash/_cacheHas.js
function zy(e, t) {
	return e.has(t);
}
//#endregion
//#region node_modules/lodash/_equalArrays.js
var By = 1, Vy = 2;
function Hy(e, t, n, r, i, a) {
	var o = n & By, s = e.length, c = t.length;
	if (s != c && !(o && c > s)) return !1;
	var l = a.get(e), u = a.get(t);
	if (l && u) return l == t && u == e;
	var d = -1, f = !0, p = n & Vy ? new Ly() : void 0;
	for (a.set(e, t), a.set(t, e); ++d < s;) {
		var m = e[d], h = t[d];
		if (r) var g = o ? r(h, m, d, t, e, a) : r(m, h, d, e, t, a);
		if (g !== void 0) {
			if (g) continue;
			f = !1;
			break;
		}
		if (p) {
			if (!Ry(t, function(e, t) {
				if (!zy(p, t) && (m === e || i(m, e, n, r, a))) return p.push(t);
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
//#region node_modules/lodash/_mapToArray.js
function Uy(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e, r) {
		n[++t] = [r, e];
	}), n;
}
//#endregion
//#region node_modules/lodash/_setToArray.js
function Wy(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e) {
		n[++t] = e;
	}), n;
}
//#endregion
//#region node_modules/lodash/_equalByTag.js
var Gy = 1, Ky = 2, qy = "[object Boolean]", Jy = "[object Date]", Yy = "[object Error]", Xy = "[object Map]", Zy = "[object Number]", Qy = "[object RegExp]", $y = "[object Set]", eb = "[object String]", tb = "[object Symbol]", nb = "[object ArrayBuffer]", rb = "[object DataView]", ib = Dp ? Dp.prototype : void 0, ab = ib ? ib.valueOf : void 0;
function ob(e, t, n, r, i, a, o) {
	switch (n) {
		case rb:
			if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
			e = e.buffer, t = t.buffer;
		case nb: return !(e.byteLength != t.byteLength || !a(new bv(e), new bv(t)));
		case qy:
		case Jy:
		case Zy: return Um(+e, +t);
		case Yy: return e.name == t.name && e.message == t.message;
		case Qy:
		case eb: return e == t + "";
		case Xy: var s = Uy;
		case $y:
			var c = r & Gy;
			if (s ||= Wy, e.size != t.size && !c) return !1;
			var l = o.get(e);
			if (l) return l == t;
			r |= Ky, o.set(e, t);
			var u = Hy(s(e), s(t), r, i, a, o);
			return o.delete(e), u;
		case tb: if (ab) return ab.call(e) == ab.call(t);
	}
	return !1;
}
//#endregion
//#region node_modules/lodash/_equalObjects.js
var sb = 1, cb = Object.prototype.hasOwnProperty;
function lb(e, t, n, r, i, a) {
	var o = n & sb, s = ev(e), c = s.length;
	if (c != ev(t).length && !o) return !1;
	for (var l = c; l--;) {
		var u = s[l];
		if (!(o ? u in t : cb.call(t, u))) return !1;
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
//#region node_modules/lodash/_baseIsEqualDeep.js
var ub = 1, db = "[object Arguments]", fb = "[object Array]", pb = "[object Object]", mb = Object.prototype.hasOwnProperty;
function hb(e, t, n, r, i, a) {
	var o = Up(e), s = Up(t), c = o ? fb : _v(e), l = s ? fb : _v(t);
	c = c == db ? pb : c, l = l == db ? pb : l;
	var u = c == pb, d = l == pb, f = c == l;
	if (f && dh(e)) {
		if (!dh(t)) return !1;
		o = !0, u = !1;
	}
	if (f && !u) return a ||= new L_(), o || Uh(e) ? Hy(e, t, n, r, i, a) : ob(e, t, c, n, r, i, a);
	if (!(n & ub)) {
		var p = u && mb.call(e, "__wrapped__"), m = d && mb.call(t, "__wrapped__");
		if (p || m) {
			var h = p ? e.value() : e, g = m ? t.value() : t;
			return a ||= new L_(), i(h, g, n, r, a);
		}
	}
	return f ? (a ||= new L_(), lb(e, t, n, r, i, a)) : !1;
}
//#endregion
//#region node_modules/lodash/_baseIsEqual.js
function gb(e, t, n, r, i) {
	return e === t ? !0 : e == null || t == null || !zp(e) && !zp(t) ? e !== e && t !== t : hb(e, t, n, r, gb, i);
}
//#endregion
//#region node_modules/lodash/now.js
var _b = function() {
	return Ep.Date.now();
}, vb = "Expected a function", yb = Math.max, bb = Math.min;
function xb(e, t, n) {
	var r, i, a, o, s, c, l = 0, u = !1, d = !1, f = !0;
	if (typeof e != "function") throw TypeError(vb);
	t = im(t) || 0, Qp(n) && (u = !!n.leading, d = "maxWait" in n, a = d ? yb(im(n.maxWait) || 0, t) : a, f = "trailing" in n ? !!n.trailing : f);
	function p(t) {
		var n = r, a = i;
		return r = i = void 0, l = t, o = e.apply(a, n), o;
	}
	function m(e) {
		return l = e, s = setTimeout(_, t), u ? p(e) : o;
	}
	function h(e) {
		var n = e - c, r = e - l, i = t - n;
		return d ? bb(i, a - r) : i;
	}
	function g(e) {
		var n = e - c, r = e - l;
		return c === void 0 || n >= t || n < 0 || d && r >= a;
	}
	function _() {
		var e = _b();
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
		return s === void 0 ? o : v(_b());
	}
	function x() {
		var e = _b(), n = g(e);
		if (r = arguments, i = this, c = e, n) {
			if (s === void 0) return m(c);
			if (d) return clearTimeout(s), s = setTimeout(_, t), p(c);
		}
		return s === void 0 && (s = setTimeout(_, t)), o;
	}
	return x.cancel = y, x.flush = b, x;
}
//#endregion
//#region node_modules/lodash/last.js
function Sb(e) {
	var t = e == null ? 0 : e.length;
	return t ? e[t - 1] : void 0;
}
//#endregion
//#region node_modules/lodash/_parent.js
function Cb(e, t) {
	return t.length < 2 ? e : Ug(e, i_(t, 0, -1));
}
//#endregion
//#region node_modules/lodash/isEqual.js
function wb(e, t) {
	return gb(e, t);
}
//#endregion
//#region node_modules/lodash/_baseUnset.js
var Tb = Object.prototype.hasOwnProperty;
function Eb(e, t) {
	t = Bg(t, e);
	var n = -1, r = t.length;
	if (!r) return !0;
	for (; ++n < r;) {
		var i = Hg(t[n]);
		if (i === "__proto__" && !Tb.call(e, "__proto__") || (i === "constructor" || i === "prototype") && n < r - 1) return !1;
	}
	var a = Cb(e, t);
	return a == null || delete a[Hg(Sb(t))];
}
//#endregion
//#region node_modules/lodash/_customOmitClone.js
function Db(e) {
	return r_(e) ? void 0 : e;
}
//#endregion
//#region node_modules/lodash/omit.js
var Ob = 1, kb = 2, Ab = 4, jb = Yg(function(e, t) {
	var n = {};
	if (e == null) return n;
	var r = !1;
	t = Hp(t, function(t) {
		return t = Bg(t, e), r ||= t.length > 1, t;
	}), Km(e, tv(e), n), r && (n = Ny(n, Ob | kb | Ab, Db));
	for (var i = t.length; i--;) Eb(n, t[i]);
	return n;
}), Mb = "Expected a function";
function Nb(e, t, n) {
	var r = !0, i = !0;
	if (typeof e != "function") throw TypeError(Mb);
	return Qp(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), xb(e, t, {
		leading: r,
		maxWait: t,
		trailing: i
	});
}
var Pb = { seekBar: "_seekBar_16dv7_14" };
//#endregion
//#region src/audio/SeekBar/SeekBar.tsx
function Fb({ value: e = 0, className: n, ...r }) {
	let { translate: i } = W(), [a, o] = h(e), s = p(() => Nb(o, 10), []);
	return u(() => {
		s(e);
	}, [e, s]), /* @__PURE__ */ t.createElement("input", {
		type: "range",
		className: (0, U.default)(Pb.seekBar, n),
		onMouseDown: (e) => e.stopPropagation(),
		min: 0,
		max: 100,
		value: a,
		step: 1,
		style: { "--fillTo": a / 100 },
		"aria-label": i("a11y|seek_bar_label"),
		...r
	});
}
var Ib = {
	avatarWithDetails: "_avatarWithDetails_7ga8t_8",
	title: "_title_7ga8t_17",
	details: "_details_7ga8t_28"
}, Lb = { flex: "_flex_4dswl_9" };
//#endregion
//#region src/core/utils/Flex/Flex.tsx
function q({ as: e = "div", display: n = "flex", direction: r = "row", align: i = "start", justify: a = "start", gap: o = "0", wrap: s = "nowrap", className: c, children: l, ...u }) {
	let d = p(() => ({
		"--mx-flex-display": n,
		"--mx-flex-direction": r,
		"--mx-flex-align": i,
		"--mx-flex-justify": a,
		"--mx-flex-gap": o,
		"--mx-flex-wrap": s
	}), [
		i,
		r,
		n,
		o,
		a,
		s
	]);
	return t.createElement(e, {
		...u,
		className: (0, U.default)(Lb.flex, c),
		style: d
	}, l);
}
//#endregion
//#region src/core/AvatarWithDetails/AvatarWithDetails.tsx
function Rb({ as: e, className: n, details: r, avatar: i, title: a, ...o }) {
	let s = e || "div";
	return /* @__PURE__ */ t.createElement(s, {
		className: (0, U.default)(Ib.avatarWithDetails, n),
		...o
	}, i, /* @__PURE__ */ t.createElement(q, { direction: "column" }, /* @__PURE__ */ t.createElement("span", { className: Ib.title }, a), /* @__PURE__ */ t.createElement("span", { className: Ib.details }, r)));
}
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/check-circle.js
function zb(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "m10.6 13.8-2.15-2.15a.95.95 0 0 0-.7-.275.95.95 0 0 0-.7.275.95.95 0 0 0-.275.7q0 .425.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65a.95.95 0 0 0 .275-.7.95.95 0 0 0-.275-.7.95.95 0 0 0-.7-.275.95.95 0 0 0-.7.275zM12 22a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20" })
	});
}
zb.displayName = "CheckCircleIcon";
var Bb = a(zb);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/error.js
function Vb(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M12 17q.424 0 .713-.288A.97.97 0 0 0 13 16a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 15a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 16q0 .424.287.712.288.288.713.288m0-4q.424 0 .713-.287A.97.97 0 0 0 13 12V8a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 7a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 8v4q0 .424.287.713.288.287.713.287m0 9a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20" })
	});
}
Vb.displayName = "ErrorIcon";
var Hb = a(Vb);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/info.js
function Ub(e, t) {
	return /*#__PURE__*/ de("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ N("path", { d: "M11.288 7.288A.97.97 0 0 1 12 7q.424 0 .713.287Q13 7.576 13 8t-.287.713A.97.97 0 0 1 12 9a.97.97 0 0 1-.713-.287A.97.97 0 0 1 11 8q0-.424.287-.713m.001 4.001A.97.97 0 0 1 12 11q.424 0 .713.287.287.288.287.713v4q0 .424-.287.712A.97.97 0 0 1 12 17a.97.97 0 0 1-.713-.288A.97.97 0 0 1 11 16v-4q0-.424.287-.713" }), /*#__PURE__*/ N("path", {
			fillRule: "evenodd",
			d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0",
			clipRule: "evenodd"
		})]
	});
}
Ub.displayName = "InfoIcon";
var Wb = a(Ub), Gb = {
	banner: "_banner_193k4_8",
	content: "_content_193k4_38",
	icon: "_icon_193k4_50",
	actions: "_actions_193k4_60"
};
//#endregion
//#region ../../node_modules/matrix-web-i18n/lib/utils.js
function Kb(e) {
	return e.toLowerCase().replace("_", "-");
}
function qb(e) {
	let t = [], n = Kb(e), r = n.split("-");
	return r.length === 2 && r[0] === r[1] ? t.push(r[0]) : (t.push(n), r.length === 2 && t.push(r[0])), t;
}
//#endregion
//#region ../../node_modules/matrix-web-i18n/lib/index.js
var Jb = "|", Yb = /* @__PURE__ */ P(((e, t) => {
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
})), Xb = /* @__PURE__ */ P(((e, t) => {
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
})), Zb = /* @__PURE__ */ P(((e, t) => {
	var n = Xb();
	t.exports = function() {
		return n() && !!Symbol.toStringTag;
	};
})), Qb = /* @__PURE__ */ P(((e, t) => {
	t.exports = Object;
})), $b = /* @__PURE__ */ P(((e, t) => {
	t.exports = Error;
})), ex = /* @__PURE__ */ P(((e, t) => {
	t.exports = EvalError;
})), tx = /* @__PURE__ */ P(((e, t) => {
	t.exports = RangeError;
})), nx = /* @__PURE__ */ P(((e, t) => {
	t.exports = ReferenceError;
})), rx = /* @__PURE__ */ P(((e, t) => {
	t.exports = SyntaxError;
})), ix = /* @__PURE__ */ P(((e, t) => {
	t.exports = TypeError;
})), ax = /* @__PURE__ */ P(((e, t) => {
	t.exports = URIError;
})), ox = /* @__PURE__ */ P(((e, t) => {
	t.exports = Math.abs;
})), sx = /* @__PURE__ */ P(((e, t) => {
	t.exports = Math.floor;
})), cx = /* @__PURE__ */ P(((e, t) => {
	t.exports = Math.max;
})), lx = /* @__PURE__ */ P(((e, t) => {
	t.exports = Math.min;
})), ux = /* @__PURE__ */ P(((e, t) => {
	t.exports = Math.pow;
})), dx = /* @__PURE__ */ P(((e, t) => {
	t.exports = Math.round;
})), fx = /* @__PURE__ */ P(((e, t) => {
	t.exports = Number.isNaN || function(e) {
		return e !== e;
	};
})), px = /* @__PURE__ */ P(((e, t) => {
	var n = fx();
	t.exports = function(e) {
		return n(e) || e === 0 ? e : e < 0 ? -1 : 1;
	};
})), mx = /* @__PURE__ */ P(((e, t) => {
	t.exports = Object.getOwnPropertyDescriptor;
})), hx = /* @__PURE__ */ P(((e, t) => {
	var n = mx();
	if (n) try {
		n([], "length");
	} catch {
		n = null;
	}
	t.exports = n;
})), gx = /* @__PURE__ */ P(((e, t) => {
	var n = Object.defineProperty || !1;
	if (n) try {
		n({}, "a", { value: 1 });
	} catch {
		n = !1;
	}
	t.exports = n;
})), _x = /* @__PURE__ */ P(((e, t) => {
	var n = typeof Symbol < "u" && Symbol, r = Xb();
	t.exports = function() {
		return typeof n != "function" || typeof Symbol != "function" || typeof n("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : r();
	};
})), vx = /* @__PURE__ */ P(((e, t) => {
	t.exports = typeof Reflect < "u" && Reflect.getPrototypeOf || null;
})), yx = /* @__PURE__ */ P(((e, t) => {
	t.exports = Qb().getPrototypeOf || null;
})), bx = /* @__PURE__ */ P(((e, t) => {
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
})), xx = /* @__PURE__ */ P(((e, t) => {
	var n = bx();
	t.exports = Function.prototype.bind || n;
})), Sx = /* @__PURE__ */ P(((e, t) => {
	t.exports = Function.prototype.call;
})), Cx = /* @__PURE__ */ P(((e, t) => {
	t.exports = Function.prototype.apply;
})), wx = /* @__PURE__ */ P(((e, t) => {
	t.exports = typeof Reflect < "u" && Reflect && Reflect.apply;
})), Tx = /* @__PURE__ */ P(((e, t) => {
	var n = xx(), r = Cx(), i = Sx();
	t.exports = wx() || n.call(i, r);
})), Ex = /* @__PURE__ */ P(((e, t) => {
	var n = xx(), r = ix(), i = Sx(), a = Tx();
	t.exports = function(e) {
		if (e.length < 1 || typeof e[0] != "function") throw new r("a function is required");
		return a(n, i, e);
	};
})), Dx = /* @__PURE__ */ P(((e, t) => {
	var n = Ex(), r = hx(), i;
	try {
		i = [].__proto__ === Array.prototype;
	} catch (e) {
		if (!e || typeof e != "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") throw e;
	}
	var a = !!i && r && r(Object.prototype, "__proto__"), o = Object, s = o.getPrototypeOf;
	t.exports = a && typeof a.get == "function" ? n([a.get]) : typeof s == "function" && function(e) {
		return s(e == null ? e : o(e));
	};
})), Ox = /* @__PURE__ */ P(((e, t) => {
	var n = vx(), r = yx(), i = Dx();
	t.exports = n ? function(e) {
		return n(e);
	} : r ? function(e) {
		if (!e || typeof e != "object" && typeof e != "function") throw TypeError("getProto: not an object");
		return r(e);
	} : i ? function(e) {
		return i(e);
	} : null;
})), kx = /* @__PURE__ */ P(((e, t) => {
	var n = Function.prototype.call, r = Object.prototype.hasOwnProperty;
	t.exports = xx().call(n, r);
})), Ax = /* @__PURE__ */ P(((e, t) => {
	var n, r = Qb(), i = $b(), a = ex(), o = tx(), s = nx(), c = rx(), l = ix(), u = ax(), d = ox(), f = sx(), p = cx(), m = lx(), h = ux(), g = dx(), _ = px(), v = Function, y = function(e) {
		try {
			return v("\"use strict\"; return (" + e + ").constructor;")();
		} catch {}
	}, b = hx(), x = gx(), S = function() {
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
	}() : S, w = _x()(), T = Ox(), E = yx(), ee = vx(), D = Cx(), O = Sx(), k = {}, te = typeof Uint8Array > "u" || !T ? n : T(Uint8Array), A = {
		__proto__: null,
		"%AggregateError%": typeof AggregateError > "u" ? n : AggregateError,
		"%Array%": Array,
		"%ArrayBuffer%": typeof ArrayBuffer > "u" ? n : ArrayBuffer,
		"%ArrayIteratorPrototype%": w && T ? T([][Symbol.iterator]()) : n,
		"%AsyncFromSyncIteratorPrototype%": n,
		"%AsyncFunction%": k,
		"%AsyncGenerator%": k,
		"%AsyncGeneratorFunction%": k,
		"%AsyncIteratorPrototype%": k,
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
		"%GeneratorFunction%": k,
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
		"%TypedArray%": te,
		"%TypeError%": l,
		"%Uint8Array%": typeof Uint8Array > "u" ? n : Uint8Array,
		"%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? n : Uint8ClampedArray,
		"%Uint16Array%": typeof Uint16Array > "u" ? n : Uint16Array,
		"%Uint32Array%": typeof Uint32Array > "u" ? n : Uint32Array,
		"%URIError%": u,
		"%WeakMap%": typeof WeakMap > "u" ? n : WeakMap,
		"%WeakRef%": typeof WeakRef > "u" ? n : WeakRef,
		"%WeakSet%": typeof WeakSet > "u" ? n : WeakSet,
		"%Function.prototype.call%": O,
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
	}, ie = xx(), ae = kx(), j = ie.call(O, Array.prototype.concat), oe = ie.call(D, Array.prototype.splice), se = ie.call(O, String.prototype.replace), ce = ie.call(O, String.prototype.slice), M = ie.call(O, RegExp.prototype.exec), le = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, ue = /\\(\\)?/g, N = function(e) {
		var t = ce(e, 0, 1), n = ce(e, -1);
		if (t === "%" && n !== "%") throw new c("invalid intrinsic syntax, expected closing `%`");
		if (n === "%" && t !== "%") throw new c("invalid intrinsic syntax, expected opening `%`");
		var r = [];
		return se(e, le, function(e, t, n, i) {
			r[r.length] = n ? se(i, ue, "$1") : t || e;
		}), r;
	}, de = function(e, t) {
		var n = e, r;
		if (ae(re, n) && (r = re[n], n = "%" + r[0] + "%"), ae(A, n)) {
			var i = A[n];
			if (i === k && (i = ne(n)), i === void 0 && !t) throw new l("intrinsic " + e + " exists, but is not available. Please file an issue!");
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
		if (M(/^%?[^%]*%?$/, e) === null) throw new c("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
		var n = N(e), r = n.length > 0 ? n[0] : "", i = de("%" + r + "%", t), a = i.name, o = i.value, s = !1, u = i.alias;
		u && (r = u[0], oe(n, j([0, 1], u)));
		for (var d = 1, f = !0; d < n.length; d += 1) {
			var p = n[d], m = ce(p, 0, 1), h = ce(p, -1);
			if ((m === "\"" || m === "'" || m === "`" || h === "\"" || h === "'" || h === "`") && m !== h) throw new c("property names with quotes must have matching quotes");
			if ((p === "constructor" || !f) && (s = !0), r += "." + p, a = "%" + r + "%", ae(A, a)) o = A[a];
			else if (o != null) {
				if (!(p in o)) {
					if (!t) throw new l("base intrinsic for " + e + " exists, but the property is not available.");
					return;
				}
				if (b && d + 1 >= n.length) {
					var g = b(o, p);
					f = !!g, o = f && "get" in g && !("originalValue" in g.get) ? g.get : o[p];
				} else f = ae(o, p), o = o[p];
				f && !s && (A[a] = o);
			}
		}
		return o;
	};
})), jx = /* @__PURE__ */ P(((e, t) => {
	var n = Ax(), r = Ex(), i = r([n("%String.prototype.indexOf%")]);
	t.exports = function(e, t) {
		var a = n(e, !!t);
		return typeof a == "function" && i(e, ".prototype.") > -1 ? r([a]) : a;
	};
})), Mx = /* @__PURE__ */ P(((e, t) => {
	var n = Zb()(), r = jx()("Object.prototype.toString"), i = function(e) {
		return n && e && typeof e == "object" && Symbol.toStringTag in e ? !1 : r(e) === "[object Arguments]";
	}, a = function(e) {
		return i(e) ? !0 : typeof e == "object" && !!e && "length" in e && typeof e.length == "number" && e.length >= 0 && r(e) !== "[object Array]" && "callee" in e && r(e.callee) === "[object Function]";
	}, o = function() {
		return i(arguments);
	}();
	i.isLegacyArguments = a, t.exports = o ? i : a;
})), Nx = /* @__PURE__ */ P(((e, t) => {
	var n = jx(), r = Zb()(), i = kx(), a = hx(), o;
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
})), Px = /* @__PURE__ */ P(((e, t) => {
	var n = jx(), r = Nx(), i = n("RegExp.prototype.exec"), a = ix();
	t.exports = function(e) {
		if (!r(e)) throw new a("`regex` must be a RegExp");
		return function(t) {
			return i(e, t) !== null;
		};
	};
})), Fx = /* @__PURE__ */ P(((e, t) => {
	var n = function* () {}.constructor;
	t.exports = () => n;
})), Ix = /* @__PURE__ */ P(((e, t) => {
	var n = jx(), r = Px()(/^\s*(?:function)?\*/), i = Zb()(), a = Ox(), o = n("Object.prototype.toString"), s = n("Function.prototype.toString"), c = Fx();
	t.exports = function(e) {
		if (typeof e != "function") return !1;
		if (r(s(e))) return !0;
		if (!i) return o(e) === "[object GeneratorFunction]";
		if (!a) return !1;
		var t = c();
		return t && a(e) === t.prototype;
	};
})), Lx = /* @__PURE__ */ P(((e, t) => {
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
})), Rx = /* @__PURE__ */ P(((e, t) => {
	var n = Lx(), r = Object.prototype.toString, i = Object.prototype.hasOwnProperty, a = function(e, t, n) {
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
})), zx = /* @__PURE__ */ P(((e, t) => {
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
})), Bx = /* @__PURE__ */ P(((e, t) => {
	var n = zx(), r = typeof globalThis > "u" ? global : globalThis;
	t.exports = function() {
		for (var e = [], t = 0; t < n.length; t++) typeof r[n[t]] == "function" && (e[e.length] = n[t]);
		return e;
	};
})), Vx = /* @__PURE__ */ P(((e, t) => {
	var n = gx(), r = rx(), i = ix(), a = hx();
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
})), Hx = /* @__PURE__ */ P(((e, t) => {
	var n = gx(), r = function() {
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
})), Ux = /* @__PURE__ */ P(((e, t) => {
	var n = Ax(), r = Vx(), i = Hx()(), a = hx(), o = ix(), s = n("%Math.floor%");
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
})), Wx = /* @__PURE__ */ P(((e, t) => {
	var n = xx(), r = Cx(), i = Tx();
	t.exports = function() {
		return i(n, r, arguments);
	};
})), Gx = /* @__PURE__ */ P(((e, t) => {
	var n = Ux(), r = gx(), i = Ex(), a = Wx();
	t.exports = function(e) {
		var t = i(arguments), r = 1 + e.length - (arguments.length - 1);
		return n(t, r > 0 ? r : 0, !0);
	}, r ? r(t.exports, "apply", { value: a }) : t.exports.apply = a;
})), Kx = /* @__PURE__ */ P(((e, t) => {
	var n = Rx(), r = Bx(), i = Gx(), a = jx(), o = hx(), s = Ox(), c = a("Object.prototype.toString"), l = Zb()(), u = typeof globalThis > "u" ? global : globalThis, d = r(), f = a("String.prototype.slice"), p = a("Array.prototype.indexOf", !0) || function(e, t) {
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
})), qx = /* @__PURE__ */ P(((e, t) => {
	var n = Ux(), r = gx(), i = Ex(), a = Wx();
	t.exports = function(e) {
		var t = i(arguments), r = e.length - (arguments.length - 1);
		return n(t, 1 + (r > 0 ? r : 0), !0);
	}, r ? r(t.exports, "apply", { value: a }) : t.exports.apply = a;
})), Jx = /* @__PURE__ */ P(((e, t) => {
	var n = Rx(), r = Bx(), i = qx(), a = jx(), o = hx(), s = Ox(), c = a("Object.prototype.toString"), l = Zb()(), u = typeof globalThis > "u" ? global : globalThis, d = r(), f = a("String.prototype.slice"), p = a("Array.prototype.indexOf", !0) || function(e, t) {
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
})), Yx = /* @__PURE__ */ P(((e, t) => {
	var n = Jx();
	t.exports = function(e) {
		return !!n(e);
	};
})), Xx = /* @__PURE__ */ P(((e) => {
	var t = Mx(), n = Ix(), r = Kx(), i = Yx();
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
	function O(e) {
		return typeof Map > "u" ? !1 : D.working ? D(e) : e instanceof Map;
	}
	e.isMap = O;
	function k(e) {
		return c(e) === "[object Set]";
	}
	k.working = typeof Set < "u" && k(/* @__PURE__ */ new Set());
	function te(e) {
		return typeof Set > "u" ? !1 : k.working ? k(e) : e instanceof Set;
	}
	e.isSet = te;
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
	function ie(e) {
		return re(e);
	}
	e.isWeakSet = ie;
	function ae(e) {
		return c(e) === "[object ArrayBuffer]";
	}
	ae.working = typeof ArrayBuffer < "u" && ae(/* @__PURE__ */ new ArrayBuffer());
	function j(e) {
		return typeof ArrayBuffer > "u" ? !1 : ae.working ? ae(e) : e instanceof ArrayBuffer;
	}
	e.isArrayBuffer = j;
	function oe(e) {
		return c(e) === "[object DataView]";
	}
	oe.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && oe(new DataView(/* @__PURE__ */ new ArrayBuffer(1), 0, 1));
	function se(e) {
		return typeof DataView > "u" ? !1 : oe.working ? oe(e) : e instanceof DataView;
	}
	e.isDataView = se;
	var ce = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
	function M(e) {
		return c(e) === "[object SharedArrayBuffer]";
	}
	function le(e) {
		return ce !== void 0 && (M.working === void 0 && (M.working = M(new ce())), M.working ? M(e) : e instanceof ce);
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
	function ve(e) {
		return s && m(e, p);
	}
	e.isSymbolObject = ve;
	function ye(e) {
		return me(e) || he(e) || ge(e) || _e(e) || ve(e);
	}
	e.isBoxedPrimitive = ye;
	function be(e) {
		return typeof Uint8Array < "u" && (j(e) || le(e));
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
})), Zx = /* @__PURE__ */ P(((e, t) => {
	t.exports = function(e) {
		return e && typeof e == "object" && typeof e.copy == "function" && typeof e.fill == "function" && typeof e.readUInt8 == "function";
	};
})), Qx = /* @__PURE__ */ P(((e, t) => {
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
})), $x = /* @__PURE__ */ P(((e) => {
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
	e.types = Xx();
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
		return T(e) && k(e) === "[object RegExp]";
	}
	e.isRegExp = w, e.types.isRegExp = w;
	function T(e) {
		return typeof e == "object" && !!e;
	}
	e.isObject = T;
	function E(e) {
		return T(e) && k(e) === "[object Date]";
	}
	e.isDate = E, e.types.isDate = E;
	function ee(e) {
		return T(e) && (k(e) === "[object Error]" || e instanceof Error);
	}
	e.isError = ee, e.types.isNativeError = ee;
	function D(e) {
		return typeof e == "function";
	}
	e.isFunction = D;
	function O(e) {
		return e === null || typeof e == "boolean" || typeof e == "number" || typeof e == "string" || typeof e == "symbol" || e === void 0;
	}
	e.isPrimitive = O, e.isBuffer = Zx();
	function k(e) {
		return Object.prototype.toString.call(e);
	}
	function te(e) {
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
			te(e.getHours()),
			te(e.getMinutes()),
			te(e.getSeconds())
		].join(":");
		return [
			e.getDate(),
			A[e.getMonth()],
			t
		].join(" ");
	}
	e.log = function() {
		console.log("%s - %s", ne(), e.format.apply(e, arguments));
	}, e.inherits = Qx(), e._extend = function(e, t) {
		if (!t || !T(t)) return e;
		for (var n = Object.keys(t), r = n.length; r--;) e[n[r]] = t[n[r]];
		return e;
	};
	function re(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t);
	}
	var ie = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
	e.promisify = function(e) {
		if (typeof e != "function") throw TypeError("The \"original\" argument must be of type Function");
		if (ie && e[ie]) {
			var n = e[ie];
			if (typeof n != "function") throw TypeError("The \"util.promisify.custom\" argument must be of type Function");
			return Object.defineProperty(n, ie, {
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
		return Object.setPrototypeOf(n, Object.getPrototypeOf(e)), ie && Object.defineProperty(n, ie, {
			value: n,
			enumerable: !1,
			writable: !1,
			configurable: !0
		}), Object.defineProperties(n, t(e));
	}, e.promisify.custom = ie;
	function ae(e, t) {
		if (!e) {
			var n = /* @__PURE__ */ Error("Promise was rejected with a falsy value");
			n.reason = e, e = n;
		}
		return t(e);
	}
	function j(e) {
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
	e.callbackify = j;
})), eS = /* @__PURE__ */ P(((e) => {
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
})), tS = /* @__PURE__ */ P(((e, t) => {
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
})), nS = /* @__PURE__ */ P(((e, t) => {
	var n = [].indexOf;
	t.exports = function(e, t) {
		if (n) return e.indexOf(t);
		for (var r = 0; r < e.length; ++r) if (e[r] === t) return r;
		return -1;
	};
})), rS = /* @__PURE__ */ P(((e, t) => {
	var n = Array.prototype, r = n.concat, i = n.slice, a = nS();
	function o(e) {
		var t = {}, o = r.apply(n, i.call(arguments, 1));
		for (var s in e) a(o, s) === -1 && (t[s] = e[s]);
		return t;
	}
	t.exports = o;
})), iS = /* @__PURE__ */ P(((e, t) => {
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
})), aS = /* @__PURE__ */ P(((e, t) => {
	t.exports = iS();
})), oS = /* @__PURE__ */ P(((e, t) => {
	var n = aS();
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
})), sS = /* @__PURE__ */ P(((e, t) => {
	t.exports = function(e, t) {
		var n;
		return t === 0 && "zero" in e && (n = "zero"), n ||= t === 1 ? "one" : "other", e[n];
	};
})), cS = /* @__PURE__ */ P(((e, t) => {
	t.exports = { counterpart: {
		names: iS(),
		pluralize: sS(),
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
})), lS = /* @__PURE__ */ Ae((/* @__PURE__ */ P(((e, t) => {
	var n = Yb(), r = $x().isArray, i = $x().isDate, a = eS().sprintf, o = tS(), s = rS(), c = oS(), l = "counterpart";
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
		}, this.registerTranslations("en", cS()), this.setMaxListeners(0);
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
})))(), 1), uS = "i18n/";
lS.default.setSeparator("|");
var dS = "en";
lS.default.setFallbackLocale(dS);
function fS(e, t) {
	lS.default.registerTranslations(e, t);
}
function pS(e) {
	lS.default.setMissingEntryGenerator(e);
}
function mS() {
	return lS.default.getLocale();
}
function hS(e) {
	return lS.default.setLocale(e);
}
function gS(e) {
	return e;
}
function _S(e) {
	return typeof e == "string" && !e.startsWith("missing translation:");
}
var vS = (e, t) => {
	let n = lS.default.translate(e, {
		...t,
		fallbackLocale: lS.default.getLocale()
	});
	if (_S(n)) return { translated: n };
	let r = lS.default.translate(e, {
		...t,
		locale: dS
	});
	return _S(r) ? {
		translated: r,
		isFallback: !0
	} : {
		translated: e,
		isFallback: !0
	};
};
function yS(e, t) {
	let n = {
		...t,
		interpolate: !1
	};
	return n && typeof n == "object" && Object.keys(n).forEach((e) => {
		n[e] === void 0 && (console.warn("safeCounterpartTranslate called with undefined interpolation name: " + e), n[e] = "undefined"), n[e] === null && (console.warn("safeCounterpartTranslate called with null interpolation name: " + e), n[e] = "null");
	}), vS(e, n);
}
var bS = (e, t) => e;
function J(e, t, n) {
	let { translated: r } = yS(e, t);
	return bS(wS(r, t, n), e);
}
function xS(e) {
	return yS(e, {}).translated;
}
function SS(e, n, r) {
	let { translated: i, isFallback: a } = yS(e, n), o = wS(i, n, r);
	return bS(a ? /* @__PURE__ */ t.createElement("span", { lang: "en" }, o) : o, e);
}
function CS(e) {
	return e.replace(/%\(([^)]*)\)/g, "%\xA0($1)");
}
function wS(e, t, n) {
	let r = e;
	if (t !== void 0) {
		let e = {};
		for (let n in t) e[`%\\(${n}\\)s`] = t[n];
		r = TS(r, e);
	}
	if (n !== void 0) {
		let e = {};
		for (let t in n) e[`(<${t}>(.*?)<\\/${t}>|<${t}>|<${t}\\s*\\/>)`] = n[t];
		r = TS(r, e);
	}
	return r;
}
function TS(e, n) {
	let r = [e], i = !1;
	for (let t in n) {
		let a = new RegExp(t, "g"), o = !1;
		for (let e = 0; e < r.length; e++) {
			let s = r[e];
			if (typeof s != "string") continue;
			let c = a.exec(s);
			if (!c) continue;
			o = !0;
			let l = s.slice(0, c.index), u = [], d;
			for (; c;) {
				d = c;
				let e = c.slice(2), r;
				r = n[t] instanceof Function ? n[t](...e) : n[t], typeof r == "object" && (i = !0), (typeof r != "string" || r !== "") && u.push(r), c = a.exec(s);
				let o;
				if (c) {
					let e = d.index + d[0].length;
					o = s.slice(e, c.index);
				} else o = s.slice(d.index + d[0].length);
				o && u.push(o);
			}
			r.splice(e, 1, ...u), l !== "" && r.splice(e, 0, l);
		}
		o || t !== "%\\(count\\)s" && t !== "%\\(locale\\)s" && console.log(`Could not find ${a} in ${e}`);
	}
	return i ? t.createElement("span", null, ...r) : r.join("");
}
async function ES(e) {
	let t = await OS(), n = e in t ? e : "en", r = await DS(uS + t[n]);
	lS.default.registerTranslations(n, r), lS.default.setLocale(n);
}
async function DS(e) {
	console.log("Loading language from", e);
	let t = await fetch(e, { method: "GET" });
	if (!t.ok) throw Error(`Failed to load ${e}, got ${t.status}`);
	return t.json();
}
async function OS() {
	let e = "i18n/languages.json", t = await fetch(e, { method: "GET" });
	if (!t.ok) throw Error(`Failed to load ${e}, got ${t.status}`);
	return t.json();
}
//#endregion
//#region src/room/composer/Banner/Banner.tsx
function kS({ type: e, children: n, avatar: r, className: i, actions: a, onClose: o, ...s }) {
	let c = (0, U.default)(Gb.banner, i), l = p(() => {
		switch (e) {
			case "critical": return /* @__PURE__ */ t.createElement(Hb, { fontSize: 24 });
			case "info": return /* @__PURE__ */ t.createElement(Wb, { fontSize: 24 });
			case "success": return /* @__PURE__ */ t.createElement(Bb, { fontSize: 24 });
			default: return /* @__PURE__ */ t.createElement(Wb, { fontSize: 24 });
		}
	}, [e]);
	return /* @__PURE__ */ t.createElement("div", {
		...s,
		className: c,
		"data-type": e
	}, /* @__PURE__ */ t.createElement("div", { className: Gb.icon }, r ?? l), /* @__PURE__ */ t.createElement("div", { className: Gb.content }, n), /* @__PURE__ */ t.createElement("div", { className: Gb.actions }, a, o && /* @__PURE__ */ t.createElement(y, {
		kind: "secondary",
		size: "sm",
		onClick: o
	}, J("action|dismiss"))));
}
//#endregion
//#region src/crypto/SasEmoji/SasEmojiTranslate.ts
var AS = new Map((/* @__PURE__ */ JSON.parse("[{\"number\":0,\"emoji\":\"🐶\",\"description\":\"Dog\",\"unicode\":\"U+1F436\",\"translated_descriptions\":{\"ar\":\"كلب\",\"bg\":\"Куче\",\"ca\":\"Gos\",\"cs\":\"Pes\",\"de\":\"Hund\",\"eo\":\"Hundo\",\"es\":\"Perro\",\"et\":\"Koer\",\"fa\":\"سگ\",\"fi\":\"Koira\",\"fr\":\"Chien\",\"hr\":\"pas\",\"hu\":\"Kutya\",\"id\":\"Anjing\",\"it\":\"Cane\",\"ja\":\"犬\",\"nb_NO\":\"Hund\",\"nl\":\"Hond\",\"pt\":\"Cão\",\"pt_BR\":\"Cachorro\",\"ru\":\"Собака\",\"si\":\"බල්ලා\",\"sk\":\"Pes\",\"sq\":\"Qen\",\"sr\":\"пас\",\"sv\":\"Hund\",\"szl\":null,\"tzm\":\"Aydi\",\"uk\":\"Пес\",\"vi\":\"Chó\",\"zh_Hans\":\"狗\",\"zh_Hant\":\"狗\"}},{\"number\":1,\"emoji\":\"🐱\",\"description\":\"Cat\",\"unicode\":\"U+1F431\",\"translated_descriptions\":{\"ar\":\"هِرَّة\",\"bg\":\"Котка\",\"ca\":\"Gat\",\"cs\":\"Kočka\",\"de\":\"Katze\",\"eo\":\"Kato\",\"es\":\"Gato\",\"et\":\"Kass\",\"fa\":\"گربه\",\"fi\":\"Kissa\",\"fr\":\"Chat\",\"hr\":\"mačka\",\"hu\":\"Macska\",\"id\":\"Kucing\",\"it\":\"Gatto\",\"ja\":\"猫\",\"nb_NO\":\"Katt\",\"nl\":\"Kat\",\"pt\":\"Gato\",\"pt_BR\":\"Gato\",\"ru\":\"Кошка\",\"si\":\"පූසා\",\"sk\":\"Mačka\",\"sq\":\"Mace\",\"sr\":\"мачка\",\"sv\":\"Katt\",\"szl\":null,\"tzm\":\"Amuc\",\"uk\":\"Кіт\",\"vi\":\"Mèo\",\"zh_Hans\":\"猫\",\"zh_Hant\":\"貓\"}},{\"number\":2,\"emoji\":\"🦁\",\"description\":\"Lion\",\"unicode\":\"U+1F981\",\"translated_descriptions\":{\"ar\":\"أَسَد\",\"bg\":\"Лъв\",\"ca\":\"Lleó\",\"cs\":\"Lev\",\"de\":\"Löwe\",\"eo\":\"Leono\",\"es\":\"León\",\"et\":\"Lõvi\",\"fa\":\"شیر\",\"fi\":\"Leijona\",\"fr\":\"Lion\",\"hr\":\"lav\",\"hu\":\"Oroszlán\",\"id\":\"Singa\",\"it\":\"Leone\",\"ja\":\"ライオン\",\"nb_NO\":\"Løve\",\"nl\":\"Leeuw\",\"pt\":\"Leão\",\"pt_BR\":\"Leão\",\"ru\":\"Лев\",\"si\":\"සිංහයා\",\"sk\":\"Lev\",\"sq\":\"Luan\",\"sr\":\"лав\",\"sv\":\"Lejon\",\"szl\":null,\"tzm\":\"Izem\",\"uk\":\"Лев\",\"vi\":\"Sư tử\",\"zh_Hans\":\"狮子\",\"zh_Hant\":\"獅子\"}},{\"number\":3,\"emoji\":\"🐎\",\"description\":\"Horse\",\"unicode\":\"U+1F40E\",\"translated_descriptions\":{\"ar\":\"حِصَان\",\"bg\":\"Кон\",\"ca\":\"Cavall\",\"cs\":\"Kůň\",\"de\":\"Pferd\",\"eo\":\"Ĉevalo\",\"es\":\"Caballo\",\"et\":\"Hobune\",\"fa\":\"اسب\",\"fi\":\"Hevonen\",\"fr\":\"Cheval\",\"hr\":\"konj\",\"hu\":\"Ló\",\"id\":\"Kuda\",\"it\":\"Cavallo\",\"ja\":\"馬\",\"nb_NO\":\"Hest\",\"nl\":\"Paard\",\"pt\":\"Cavalo\",\"pt_BR\":\"Cavalo\",\"ru\":\"Лошадь\",\"si\":\"අශ්වයා\",\"sk\":\"Kôň\",\"sq\":\"Kalë\",\"sr\":\"коњ\",\"sv\":\"Häst\",\"szl\":null,\"tzm\":\"Ayyis\",\"uk\":\"Кінь\",\"vi\":\"Ngựa\",\"zh_Hans\":\"马\",\"zh_Hant\":\"馬\"}},{\"number\":4,\"emoji\":\"🦄\",\"description\":\"Unicorn\",\"unicode\":\"U+1F984\",\"translated_descriptions\":{\"ar\":\"حصان وحيد القرن\",\"bg\":\"Еднорог\",\"ca\":\"Unicorn\",\"cs\":\"Jednorožec\",\"de\":\"Einhorn\",\"eo\":\"Unukorno\",\"es\":\"Unicornio\",\"et\":\"Ükssarvik\",\"fa\":\"تک شاخ\",\"fi\":\"Yksisarvinen\",\"fr\":\"Licorne\",\"hr\":\"jednorog\",\"hu\":\"Egyszarvú\",\"id\":\"Unicorn\",\"it\":\"Unicorno\",\"ja\":\"ユニコーン\",\"nb_NO\":\"Enhjørning\",\"nl\":\"Eenhoorn\",\"pt\":\"Unicórnio\",\"pt_BR\":\"Unicórnio\",\"ru\":\"Единорог\",\"si\":null,\"sk\":\"Jednorožec\",\"sq\":\"Njëbrirësh\",\"sr\":\"једнорог\",\"sv\":\"Enhörning\",\"szl\":null,\"tzm\":null,\"uk\":\"Єдиноріг\",\"vi\":\"Kỳ lân\",\"zh_Hans\":\"独角兽\",\"zh_Hant\":\"獨角獸\"}},{\"number\":5,\"emoji\":\"🐷\",\"description\":\"Pig\",\"unicode\":\"U+1F437\",\"translated_descriptions\":{\"ar\":\"خِنزِير\",\"bg\":\"Прасе\",\"ca\":\"Porc\",\"cs\":\"Prase\",\"de\":\"Schwein\",\"eo\":\"Porko\",\"es\":\"Cerdo\",\"et\":\"Siga\",\"fa\":\"خوک\",\"fi\":\"Sika\",\"fr\":\"Cochon\",\"hr\":\"svinja\",\"hu\":\"Malac\",\"id\":\"Babi\",\"it\":\"Maiale\",\"ja\":\"ブタ\",\"nb_NO\":\"Gris\",\"nl\":\"Varken\",\"pt\":\"Porco\",\"pt_BR\":\"Porco\",\"ru\":\"Свинья\",\"si\":null,\"sk\":\"Prasa\",\"sq\":\"Derr\",\"sr\":\"прасе\",\"sv\":\"Gris\",\"szl\":null,\"tzm\":\"Ilef\",\"uk\":\"Свиня\",\"vi\":\"Heo\",\"zh_Hans\":\"猪\",\"zh_Hant\":\"豬\"}},{\"number\":6,\"emoji\":\"🐘\",\"description\":\"Elephant\",\"unicode\":\"U+1F418\",\"translated_descriptions\":{\"ar\":\"فِيل\",\"bg\":\"Слон\",\"ca\":\"Elefant\",\"cs\":\"Slon\",\"de\":\"Elefant\",\"eo\":\"Elefanto\",\"es\":\"Elefante\",\"et\":\"Elevant\",\"fa\":\"فیل\",\"fi\":\"Norsu\",\"fr\":\"Éléphant\",\"hr\":\"slon\",\"hu\":\"Elefánt\",\"id\":\"Gajah\",\"it\":\"Elefante\",\"ja\":\"ゾウ\",\"nb_NO\":\"Elefant\",\"nl\":\"Olifant\",\"pt\":\"Elefante\",\"pt_BR\":\"Elefante\",\"ru\":\"Слон\",\"si\":null,\"sk\":\"Slon\",\"sq\":\"Elefant\",\"sr\":\"слон\",\"sv\":\"Elefant\",\"szl\":null,\"tzm\":\"Ilu\",\"uk\":\"Слон\",\"vi\":\"Voi\",\"zh_Hans\":\"大象\",\"zh_Hant\":\"大象\"}},{\"number\":7,\"emoji\":\"🐰\",\"description\":\"Rabbit\",\"unicode\":\"U+1F430\",\"translated_descriptions\":{\"ar\":\"أَرنَب\",\"bg\":\"Заек\",\"ca\":\"Conill\",\"cs\":\"Králík\",\"de\":\"Hase\",\"eo\":\"Kuniklo\",\"es\":\"Conejo\",\"et\":\"Jänes\",\"fa\":\"خرگوش\",\"fi\":\"Kani\",\"fr\":\"Lapin\",\"hr\":\"zec\",\"hu\":\"Nyúl\",\"id\":\"Kelinci\",\"it\":\"Coniglio\",\"ja\":\"うさぎ\",\"nb_NO\":\"Kanin\",\"nl\":\"Konijn\",\"pt\":\"Coelho\",\"pt_BR\":\"Coelho\",\"ru\":\"Кролик\",\"si\":null,\"sk\":\"Zajac\",\"sq\":\"Lepur\",\"sr\":\"зец\",\"sv\":\"Kanin\",\"szl\":null,\"tzm\":\"Agnin\",\"uk\":\"Кріль\",\"vi\":\"Thỏ\",\"zh_Hans\":\"兔子\",\"zh_Hant\":\"兔子\"}},{\"number\":8,\"emoji\":\"🐼\",\"description\":\"Panda\",\"unicode\":\"U+1F43C\",\"translated_descriptions\":{\"ar\":\"باندَا\",\"bg\":\"Панда\",\"ca\":\"Panda\",\"cs\":\"Panda\",\"de\":\"Panda\",\"eo\":\"Pando\",\"es\":\"Panda\",\"et\":\"Panda\",\"fa\":\"پاندا\",\"fi\":\"Panda\",\"fr\":\"Panda\",\"hr\":\"panda\",\"hu\":\"Panda\",\"id\":\"Panda\",\"it\":\"Panda\",\"ja\":\"パンダ\",\"nb_NO\":\"Panda\",\"nl\":\"Panda\",\"pt\":\"Panda\",\"pt_BR\":\"Panda\",\"ru\":\"Панда\",\"si\":null,\"sk\":\"Panda\",\"sq\":\"Panda\",\"sr\":\"панда\",\"sv\":\"Panda\",\"szl\":null,\"tzm\":null,\"uk\":\"Панда\",\"vi\":\"Gấu trúc\",\"zh_Hans\":\"熊猫\",\"zh_Hant\":\"熊貓\"}},{\"number\":9,\"emoji\":\"🐓\",\"description\":\"Rooster\",\"unicode\":\"U+1F413\",\"translated_descriptions\":{\"ar\":\"دِيك\",\"bg\":\"Петел\",\"ca\":\"Gall\",\"cs\":\"Kohout\",\"de\":\"Hahn\",\"eo\":\"Virkoko\",\"es\":\"Gallo\",\"et\":\"Kukk\",\"fa\":\"خروس\",\"fi\":\"Kukko\",\"fr\":\"Coq\",\"hr\":\"kokot\",\"hu\":\"Kakas\",\"id\":\"Ayam\",\"it\":\"Gallo\",\"ja\":\"ニワトリ\",\"nb_NO\":\"Hane\",\"nl\":\"Haan\",\"pt\":\"Galo\",\"pt_BR\":\"Galo\",\"ru\":\"Петух\",\"si\":null,\"sk\":\"Kohút\",\"sq\":\"Këndes\",\"sr\":\"петао\",\"sv\":\"Tupp\",\"szl\":null,\"tzm\":\"Ayaẓiḍ\",\"uk\":\"Когут\",\"vi\":\"Gà trống\",\"zh_Hans\":\"公鸡\",\"zh_Hant\":\"公雞\"}},{\"number\":10,\"emoji\":\"🐧\",\"description\":\"Penguin\",\"unicode\":\"U+1F427\",\"translated_descriptions\":{\"ar\":\"بطريق\",\"bg\":\"Пингвин\",\"ca\":\"Pingüí\",\"cs\":\"Tučňák\",\"de\":\"Pinguin\",\"eo\":\"Pingveno\",\"es\":\"Pingüino\",\"et\":\"Pingviin\",\"fa\":\"پنگوئن\",\"fi\":\"Pingviini\",\"fr\":\"Manchot\",\"hr\":\"pingvin\",\"hu\":\"Pingvin\",\"id\":\"Penguin\",\"it\":\"Pinguino\",\"ja\":\"ペンギン\",\"nb_NO\":\"Pingvin\",\"nl\":\"Pinguïn\",\"pt\":\"Pinguim\",\"pt_BR\":\"Pinguim\",\"ru\":\"Пингвин\",\"si\":null,\"sk\":\"Tučniak\",\"sq\":\"Pinguin\",\"sr\":\"пингвин\",\"sv\":\"Pingvin\",\"szl\":null,\"tzm\":null,\"uk\":\"Пінгвін\",\"vi\":\"Chim cánh cụt\",\"zh_Hans\":\"企鹅\",\"zh_Hant\":\"企鵝\"}},{\"number\":11,\"emoji\":\"🐢\",\"description\":\"Turtle\",\"unicode\":\"U+1F422\",\"translated_descriptions\":{\"ar\":\"سُلحفاة\",\"bg\":\"Костенурка\",\"ca\":\"Tortuga\",\"cs\":\"Želva\",\"de\":\"Schildkröte\",\"eo\":\"Testudo\",\"es\":\"Tortuga\",\"et\":\"Kilpkonn\",\"fa\":\"لاک‌پشت\",\"fi\":\"Kilpikonna\",\"fr\":\"Tortue\",\"hr\":\"kornjača\",\"hu\":\"Teknős\",\"id\":\"Kura-Kura\",\"it\":\"Tartaruga\",\"ja\":\"亀\",\"nb_NO\":\"Skilpadde\",\"nl\":\"Schildpad\",\"pt\":\"Tartaruga\",\"pt_BR\":\"Tartaruga\",\"ru\":\"Черепаха\",\"si\":null,\"sk\":\"Korytnačka\",\"sq\":\"Breshkë\",\"sr\":\"корњача\",\"sv\":\"Sköldpadda\",\"szl\":null,\"tzm\":\"Ifker\",\"uk\":\"Черепаха\",\"vi\":\"Rùa\",\"zh_Hans\":\"乌龟\",\"zh_Hant\":\"烏龜\"}},{\"number\":12,\"emoji\":\"🐟\",\"description\":\"Fish\",\"unicode\":\"U+1F41F\",\"translated_descriptions\":{\"ar\":\"سَمَكة\",\"bg\":\"Риба\",\"ca\":\"Peix\",\"cs\":\"Ryba\",\"de\":\"Fisch\",\"eo\":\"Fiŝo\",\"es\":\"Pez\",\"et\":\"Kala\",\"fa\":\"ماهی\",\"fi\":\"Kala\",\"fr\":\"Poisson\",\"hr\":\"riba\",\"hu\":\"Hal\",\"id\":\"Ikan\",\"it\":\"Pesce\",\"ja\":\"魚\",\"nb_NO\":\"Fisk\",\"nl\":\"Vis\",\"pt\":\"Peixe\",\"pt_BR\":\"Peixe\",\"ru\":\"Рыба\",\"si\":null,\"sk\":\"Ryba\",\"sq\":\"Peshk\",\"sr\":\"риба\",\"sv\":\"Fisk\",\"szl\":null,\"tzm\":\"Aselm\",\"uk\":\"Риба\",\"vi\":\"Cá\",\"zh_Hans\":\"鱼\",\"zh_Hant\":\"魚\"}},{\"number\":13,\"emoji\":\"🐙\",\"description\":\"Octopus\",\"unicode\":\"U+1F419\",\"translated_descriptions\":{\"ar\":\"أُخطُبُوط\",\"bg\":\"Октопод\",\"ca\":\"Pop\",\"cs\":\"Chobotnice\",\"de\":\"Oktopus\",\"eo\":\"Polpo\",\"es\":\"Pulpo\",\"et\":\"Kaheksajalg\",\"fa\":\"اختاپوس\",\"fi\":\"Tursas\",\"fr\":\"Poulpe\",\"hr\":\"hobotnica\",\"hu\":\"Polip\",\"id\":\"Gurita\",\"it\":\"Polpo\",\"ja\":\"たこ\",\"nb_NO\":\"Blekksprut\",\"nl\":\"Octopus\",\"pt\":\"Polvo\",\"pt_BR\":\"Polvo\",\"ru\":\"Осьминог\",\"si\":null,\"sk\":\"Chobotnica\",\"sq\":\"Oktapod\",\"sr\":\"октопод\",\"sv\":\"Bläckfisk\",\"szl\":null,\"tzm\":null,\"uk\":\"Восьминіг\",\"vi\":\"Bạch tuộc\",\"zh_Hans\":\"章鱼\",\"zh_Hant\":\"章魚\"}},{\"number\":14,\"emoji\":\"🦋\",\"description\":\"Butterfly\",\"unicode\":\"U+1F98B\",\"translated_descriptions\":{\"ar\":\"فَرَاشَة\",\"bg\":\"Пеперуда\",\"ca\":\"Papallona\",\"cs\":\"Motýl\",\"de\":\"Schmetterling\",\"eo\":\"Papilio\",\"es\":\"Mariposa\",\"et\":\"Liblikas\",\"fa\":\"پروانه\",\"fi\":\"Perhonen\",\"fr\":\"Papillon\",\"hr\":\"leptir\",\"hu\":\"Pillangó\",\"id\":\"Kupu-Kupu\",\"it\":\"Farfalla\",\"ja\":\"ちょうちょ\",\"nb_NO\":\"Sommerfugl\",\"nl\":\"Vlinder\",\"pt\":\"Borboleta\",\"pt_BR\":\"Borboleta\",\"ru\":\"Бабочка\",\"si\":null,\"sk\":\"Motýľ\",\"sq\":\"Flutur\",\"sr\":\"лептир\",\"sv\":\"Fjäril\",\"szl\":null,\"tzm\":null,\"uk\":\"Метелик\",\"vi\":\"Bướm\",\"zh_Hans\":\"蝴蝶\",\"zh_Hant\":\"蝴蝶\"}},{\"number\":15,\"emoji\":\"🌷\",\"description\":\"Flower\",\"unicode\":\"U+1F337\",\"translated_descriptions\":{\"ar\":\"زَهرَة\",\"bg\":\"Цвете\",\"ca\":\"Flor\",\"cs\":\"Květina\",\"de\":\"Blume\",\"eo\":\"Floro\",\"es\":\"Flor\",\"et\":\"Lill\",\"fa\":\"گل\",\"fi\":\"Kukka\",\"fr\":\"Fleur\",\"hr\":\"svijet\",\"hu\":\"Virág\",\"id\":\"Bunga\",\"it\":\"Fiore\",\"ja\":\"花\",\"nb_NO\":\"Blomst\",\"nl\":\"Bloem\",\"pt\":\"Flor\",\"pt_BR\":\"Flor\",\"ru\":\"Цветок\",\"si\":null,\"sk\":\"Kvet\",\"sq\":\"Lule\",\"sr\":\"цвет\",\"sv\":\"Blomma\",\"szl\":null,\"tzm\":null,\"uk\":\"Квітка\",\"vi\":\"Hoa\",\"zh_Hans\":\"花\",\"zh_Hant\":\"花\"}},{\"number\":16,\"emoji\":\"🌳\",\"description\":\"Tree\",\"unicode\":\"U+1F333\",\"translated_descriptions\":{\"ar\":\"شَجَرَة\",\"bg\":\"Дърво\",\"ca\":\"Arbre\",\"cs\":\"Strom\",\"de\":\"Baum\",\"eo\":\"Arbo\",\"es\":\"Árbol\",\"et\":\"Puu\",\"fa\":\"درخت\",\"fi\":\"Puu\",\"fr\":\"Arbre\",\"hr\":\"drvo\",\"hu\":\"Fa\",\"id\":\"Pohon\",\"it\":\"Albero\",\"ja\":\"木\",\"nb_NO\":\"Tre\",\"nl\":\"Boom\",\"pt\":\"Árvore\",\"pt_BR\":\"Árvore\",\"ru\":\"Дерево\",\"si\":null,\"sk\":\"Strom\",\"sq\":\"Pemë\",\"sr\":\"дрво\",\"sv\":\"Träd\",\"szl\":null,\"tzm\":\"Aseklu\",\"uk\":\"Дерево\",\"vi\":\"Cây\",\"zh_Hans\":\"树\",\"zh_Hant\":\"樹\"}},{\"number\":17,\"emoji\":\"🌵\",\"description\":\"Cactus\",\"unicode\":\"U+1F335\",\"translated_descriptions\":{\"ar\":\"صبار\",\"bg\":\"Кактус\",\"ca\":\"Cactus\",\"cs\":\"Kaktus\",\"de\":\"Kaktus\",\"eo\":\"Kakto\",\"es\":\"Cactus\",\"et\":\"Kaktus\",\"fa\":\"کاکتوس\",\"fi\":\"Kaktus\",\"fr\":\"Cactus\",\"hr\":\"kaktus\",\"hu\":\"Kaktusz\",\"id\":\"Kaktus\",\"it\":\"Cactus\",\"ja\":\"サボテン\",\"nb_NO\":\"Kaktus\",\"nl\":\"Cactus\",\"pt\":\"Cato\",\"pt_BR\":\"Cacto\",\"ru\":\"Кактус\",\"si\":null,\"sk\":\"Kaktus\",\"sq\":\"Kaktus\",\"sr\":\"кактус\",\"sv\":\"Kaktus\",\"szl\":null,\"tzm\":null,\"uk\":\"Кактус\",\"vi\":\"Xương rồng\",\"zh_Hans\":\"仙人掌\",\"zh_Hant\":\"仙人掌\"}},{\"number\":18,\"emoji\":\"🍄\",\"description\":\"Mushroom\",\"unicode\":\"U+1F344\",\"translated_descriptions\":{\"ar\":\"فُطر\",\"bg\":\"Гъба\",\"ca\":\"Bolet\",\"cs\":\"Houba\",\"de\":\"Pilz\",\"eo\":\"Fungo\",\"es\":\"Seta\",\"et\":\"Seen\",\"fa\":\"قارچ\",\"fi\":\"Sieni\",\"fr\":\"Champignon\",\"hr\":\"gljiva\",\"hu\":\"Gomba\",\"id\":\"Jamur\",\"it\":\"Fungo\",\"ja\":\"きのこ\",\"nb_NO\":\"Sopp\",\"nl\":\"Paddenstoel\",\"pt\":\"Cogumelo\",\"pt_BR\":\"Cogumelo\",\"ru\":\"Гриб\",\"si\":null,\"sk\":\"Huba\",\"sq\":\"Kërpudhë\",\"sr\":\"печурка\",\"sv\":\"Svamp\",\"szl\":null,\"tzm\":\"Agursel\",\"uk\":\"Гриб\",\"vi\":\"Nấm\",\"zh_Hans\":\"蘑菇\",\"zh_Hant\":\"蘑菇\"}},{\"number\":19,\"emoji\":\"🌏\",\"description\":\"Globe\",\"unicode\":\"U+1F30F\",\"translated_descriptions\":{\"ar\":\"كُرَةٌ أرضِيَّة\",\"bg\":\"Глобус\",\"ca\":\"Globus terraqüi\",\"cs\":\"Zeměkoule\",\"de\":\"Globus\",\"eo\":\"Globo\",\"es\":\"Globo\",\"et\":\"Maakera\",\"fa\":\"زمین\",\"fi\":\"Maapallo\",\"fr\":\"Globe\",\"hr\":\"Globus\",\"hu\":\"Földgömb\",\"id\":\"Bola Dunia\",\"it\":\"Globo\",\"ja\":\"地球\",\"nb_NO\":\"Globus\",\"nl\":\"Wereldbol\",\"pt\":\"Globo\",\"pt_BR\":\"Globo\",\"ru\":\"Глобус\",\"si\":null,\"sk\":\"Zemeguľa\",\"sq\":\"Rruzull\",\"sr\":\"глобус\",\"sv\":\"Jordklot\",\"szl\":null,\"tzm\":null,\"uk\":\"Глобус\",\"vi\":\"Địa cầu\",\"zh_Hans\":\"地球\",\"zh_Hant\":\"地球\"}},{\"number\":20,\"emoji\":\"🌙\",\"description\":\"Moon\",\"unicode\":\"U+1F319\",\"translated_descriptions\":{\"ar\":\"قَمَر\",\"bg\":\"Луна\",\"ca\":\"Lluna\",\"cs\":\"Měsíc\",\"de\":\"Mond\",\"eo\":\"Luno\",\"es\":\"Luna\",\"et\":\"Kuu\",\"fa\":\"ماه\",\"fi\":\"Kuu\",\"fr\":\"Lune\",\"hr\":\"mjesec\",\"hu\":\"Hold\",\"id\":\"Bulan\",\"it\":\"Luna\",\"ja\":\"月\",\"nb_NO\":\"Måne\",\"nl\":\"Maan\",\"pt\":\"Lua\",\"pt_BR\":\"Lua\",\"ru\":\"Луна\",\"si\":null,\"sk\":\"Mesiac\",\"sq\":\"Hënë\",\"sr\":\"месец\",\"sv\":\"Måne\",\"szl\":null,\"tzm\":\"Ayyur\",\"uk\":\"Місяць\",\"vi\":\"Mặt trăng\",\"zh_Hans\":\"月亮\",\"zh_Hant\":\"月亮\"}},{\"number\":21,\"emoji\":\"☁️\",\"description\":\"Cloud\",\"unicode\":\"U+2601U+FE0F\",\"translated_descriptions\":{\"ar\":\"سَحابَة\",\"bg\":\"Облак\",\"ca\":\"Núvol\",\"cs\":\"Mrak\",\"de\":\"Wolke\",\"eo\":\"Nubo\",\"es\":\"Nube\",\"et\":\"Pilv\",\"fa\":\"ابر\",\"fi\":\"Pilvi\",\"fr\":\"Nuage\",\"hr\":\"oblak\",\"hu\":\"Felhő\",\"id\":\"Awan\",\"it\":\"Nuvola\",\"ja\":\"雲\",\"nb_NO\":\"Sky\",\"nl\":\"Wolk\",\"pt\":\"Nuvem\",\"pt_BR\":\"Nuvem\",\"ru\":\"Облако\",\"si\":null,\"sk\":\"Oblak\",\"sq\":\"Re\",\"sr\":\"облак\",\"sv\":\"Moln\",\"szl\":null,\"tzm\":null,\"uk\":\"Хмара\",\"vi\":\"Mây\",\"zh_Hans\":\"云\",\"zh_Hant\":\"雲朵\"}},{\"number\":22,\"emoji\":\"🔥\",\"description\":\"Fire\",\"unicode\":\"U+1F525\",\"translated_descriptions\":{\"ar\":\"نار\",\"bg\":\"Огън\",\"ca\":\"Foc\",\"cs\":\"Oheň\",\"de\":\"Feuer\",\"eo\":\"Fajro\",\"es\":\"Fuego\",\"et\":\"Tuli\",\"fa\":\"آتش\",\"fi\":\"Tuli\",\"fr\":\"Feu\",\"hr\":\"vatra\",\"hu\":\"Tűz\",\"id\":\"Api\",\"it\":\"Fuoco\",\"ja\":\"炎\",\"nb_NO\":\"Flamme\",\"nl\":\"Vuur\",\"pt\":\"Fogo\",\"pt_BR\":\"Fogo\",\"ru\":\"Огонь\",\"si\":null,\"sk\":\"Oheň\",\"sq\":\"Zjarr\",\"sr\":\"ватра\",\"sv\":\"Eld\",\"szl\":null,\"tzm\":\"Timessi\",\"uk\":\"Вогонь\",\"vi\":\"Lửa\",\"zh_Hans\":\"火\",\"zh_Hant\":\"火\"}},{\"number\":23,\"emoji\":\"🍌\",\"description\":\"Banana\",\"unicode\":\"U+1F34C\",\"translated_descriptions\":{\"ar\":\"مَوزَة\",\"bg\":\"Банан\",\"ca\":\"Plàtan\",\"cs\":\"Banán\",\"de\":\"Banane\",\"eo\":\"Banano\",\"es\":\"Plátano\",\"et\":\"Banaan\",\"fa\":\"موز\",\"fi\":\"Banaani\",\"fr\":\"Banane\",\"hr\":\"banana\",\"hu\":\"Banán\",\"id\":\"Pisang\",\"it\":\"Banana\",\"ja\":\"バナナ\",\"nb_NO\":\"Banan\",\"nl\":\"Banaan\",\"pt\":\"Banana\",\"pt_BR\":\"Banana\",\"ru\":\"Банан\",\"si\":null,\"sk\":\"Banán\",\"sq\":\"Banane\",\"sr\":\"банана\",\"sv\":\"Banan\",\"szl\":null,\"tzm\":\"Tabanant\",\"uk\":\"Банан\",\"vi\":\"Chuối\",\"zh_Hans\":\"香蕉\",\"zh_Hant\":\"香蕉\"}},{\"number\":24,\"emoji\":\"🍎\",\"description\":\"Apple\",\"unicode\":\"U+1F34E\",\"translated_descriptions\":{\"ar\":\"تُفَّاحَة\",\"bg\":\"Ябълка\",\"ca\":\"Poma\",\"cs\":\"Jablko\",\"de\":\"Apfel\",\"eo\":\"Pomo\",\"es\":\"Manzana\",\"et\":\"Õun\",\"fa\":\"سیب\",\"fi\":\"Omena\",\"fr\":\"Pomme\",\"hr\":\"jabuka\",\"hu\":\"Alma\",\"id\":\"Apel\",\"it\":\"Mela\",\"ja\":\"リンゴ\",\"nb_NO\":\"Eple\",\"nl\":\"Appel\",\"pt\":\"Maçã\",\"pt_BR\":\"Maçã\",\"ru\":\"Яблоко\",\"si\":null,\"sk\":\"Jablko\",\"sq\":\"Mollë\",\"sr\":\"јабука\",\"sv\":\"Äpple\",\"szl\":null,\"tzm\":\"Tadeffuyt\",\"uk\":\"Яблуко\",\"vi\":\"Táo\",\"zh_Hans\":\"苹果\",\"zh_Hant\":\"蘋果\"}},{\"number\":25,\"emoji\":\"🍓\",\"description\":\"Strawberry\",\"unicode\":\"U+1F353\",\"translated_descriptions\":{\"ar\":\"فَراوِلَة\",\"bg\":\"Ягода\",\"ca\":\"Maduixa\",\"cs\":\"Jahoda\",\"de\":\"Erdbeere\",\"eo\":\"Frago\",\"es\":\"Fresa\",\"et\":\"Maasikas\",\"fa\":\"توت فرنگی\",\"fi\":\"Mansikka\",\"fr\":\"Fraise\",\"hr\":\"jagoda\",\"hu\":\"Eper\",\"id\":\"Stroberi\",\"it\":\"Fragola\",\"ja\":\"いちご\",\"nb_NO\":\"Jordbær\",\"nl\":\"Aardbei\",\"pt\":\"Morango\",\"pt_BR\":\"Morango\",\"ru\":\"Клубника\",\"si\":null,\"sk\":\"Jahoda\",\"sq\":\"Luleshtrydhe\",\"sr\":\"јагода\",\"sv\":\"Jordgubbe\",\"szl\":null,\"tzm\":null,\"uk\":\"Полуниця\",\"vi\":\"Dâu tây\",\"zh_Hans\":\"草莓\",\"zh_Hant\":\"草莓\"}},{\"number\":26,\"emoji\":\"🌽\",\"description\":\"Corn\",\"unicode\":\"U+1F33D\",\"translated_descriptions\":{\"ar\":\"ذُرَة\",\"bg\":\"Царевица\",\"ca\":\"Blat de moro\",\"cs\":\"Kukuřice\",\"de\":\"Mais\",\"eo\":\"Maizo\",\"es\":\"Maíz\",\"et\":\"Mais\",\"fa\":\"ذرت\",\"fi\":\"Maissi\",\"fr\":\"Maïs\",\"hr\":\"kukuruza\",\"hu\":\"Kukorica\",\"id\":\"Jagung\",\"it\":\"Mais\",\"ja\":\"とうもろこし\",\"nb_NO\":\"Mais\",\"nl\":\"Maïs\",\"pt\":\"Milho\",\"pt_BR\":\"Milho\",\"ru\":\"Кукуруза\",\"si\":null,\"sk\":\"Kukurica\",\"sq\":\"Misër\",\"sr\":\"кукуруз\",\"sv\":\"Majs\",\"szl\":null,\"tzm\":null,\"uk\":\"Кукурудза\",\"vi\":\"Bắp\",\"zh_Hans\":\"玉米\",\"zh_Hant\":\"玉米\"}},{\"number\":27,\"emoji\":\"🍕\",\"description\":\"Pizza\",\"unicode\":\"U+1F355\",\"translated_descriptions\":{\"ar\":\"بِيتزا\",\"bg\":\"Пица\",\"ca\":\"Pizza\",\"cs\":\"Pizza\",\"de\":\"Pizza\",\"eo\":\"Pico\",\"es\":\"Pizza\",\"et\":\"Pitsa\",\"fa\":\"پیتزا\",\"fi\":\"Pizza\",\"fr\":\"Pizza\",\"hr\":\"pizza\",\"hu\":\"Pizza\",\"id\":\"Pizza\",\"it\":\"Pizza\",\"ja\":\"ピザ\",\"nb_NO\":\"Pizza\",\"nl\":\"Pizza\",\"pt\":\"Piza\",\"pt_BR\":\"Pizza\",\"ru\":\"Пицца\",\"si\":null,\"sk\":\"Pizza\",\"sq\":\"Picë\",\"sr\":\"пица\",\"sv\":\"Pizza\",\"szl\":null,\"tzm\":null,\"uk\":\"Піца\",\"vi\":\"Pizza\",\"zh_Hans\":\"披萨\",\"zh_Hant\":\"披薩\"}},{\"number\":28,\"emoji\":\"🎂\",\"description\":\"Cake\",\"unicode\":\"U+1F382\",\"translated_descriptions\":{\"ar\":\"كَعكَة\",\"bg\":\"Торта\",\"ca\":\"Pastís\",\"cs\":\"Dort\",\"de\":\"Kuchen\",\"eo\":\"Torto\",\"es\":\"Tarta\",\"et\":\"Kook\",\"fa\":\"کیک\",\"fi\":\"Kakku\",\"fr\":\"Gâteau\",\"hr\":\"torta\",\"hu\":\"Süti\",\"id\":\"Kue\",\"it\":\"Torta\",\"ja\":\"ケーキ\",\"nb_NO\":\"Kake\",\"nl\":\"Taart\",\"pt\":\"Bolo\",\"pt_BR\":\"Bolo\",\"ru\":\"Торт\",\"si\":null,\"sk\":\"Torta\",\"sq\":\"Tortë\",\"sr\":\"торта\",\"sv\":\"Tårta\",\"szl\":null,\"tzm\":null,\"uk\":\"Пиріг\",\"vi\":\"Bánh\",\"zh_Hans\":\"蛋糕\",\"zh_Hant\":\"蛋糕\"}},{\"number\":29,\"emoji\":\"❤️\",\"description\":\"Heart\",\"unicode\":\"U+2764U+FE0F\",\"translated_descriptions\":{\"ar\":\"قَلب\",\"bg\":\"Сърце\",\"ca\":\"Cor\",\"cs\":\"Srdce\",\"de\":\"Herz\",\"eo\":\"Koro\",\"es\":\"Corazón\",\"et\":\"Süda\",\"fa\":\"قلب\",\"fi\":\"Sydän\",\"fr\":\"Cœur\",\"hr\":\"srca\",\"hu\":\"Szív\",\"id\":\"Hati\",\"it\":\"Cuore\",\"ja\":\"ハート\",\"nb_NO\":\"Hjerte\",\"nl\":\"Hart\",\"pt\":\"Coração\",\"pt_BR\":\"Coração\",\"ru\":\"Сердце\",\"si\":null,\"sk\":\"Srdce\",\"sq\":\"Zemër\",\"sr\":\"срце\",\"sv\":\"Hjärta\",\"szl\":null,\"tzm\":\"Ul\",\"uk\":\"Серце\",\"vi\":\"Tim\",\"zh_Hans\":\"心\",\"zh_Hant\":\"愛心\"}},{\"number\":30,\"emoji\":\"😀\",\"description\":\"Smiley\",\"unicode\":\"U+1F600\",\"translated_descriptions\":{\"ar\":\"اِبتِسَامَة\",\"bg\":\"Усмивка\",\"ca\":\"Somrient\",\"cs\":\"Smajlík\",\"de\":\"Lächeln\",\"eo\":\"Rideto\",\"es\":\"Emoticono\",\"et\":\"Smaili\",\"fa\":\"خنده\",\"fi\":\"Hymynaama\",\"fr\":\"Sourire\",\"hr\":\"smajlića\",\"hu\":\"Mosoly\",\"id\":\"Senyuman\",\"it\":\"Faccina sorridente\",\"ja\":\"スマイル\",\"nb_NO\":\"Smilefjes\",\"nl\":\"Smiley\",\"pt\":\"Sorriso\",\"pt_BR\":\"Sorriso\",\"ru\":\"Улыбка\",\"si\":null,\"sk\":\"Smajlík\",\"sq\":\"Emotikon\",\"sr\":\"смајли\",\"sv\":\"Smiley\",\"szl\":null,\"tzm\":null,\"uk\":\"Посмішка\",\"vi\":\"Mặt cười\",\"zh_Hans\":\"笑脸\",\"zh_Hant\":\"笑臉\"}},{\"number\":31,\"emoji\":\"🤖\",\"description\":\"Robot\",\"unicode\":\"U+1F916\",\"translated_descriptions\":{\"ar\":\"رُوبُوت\",\"bg\":\"Робот\",\"ca\":\"Robot\",\"cs\":\"Robot\",\"de\":\"Roboter\",\"eo\":\"Roboto\",\"es\":\"Robot\",\"et\":\"Robot\",\"fa\":\"ربات\",\"fi\":\"Robotti\",\"fr\":\"Robot\",\"hr\":\"robot\",\"hu\":\"Robot\",\"id\":\"Robot\",\"it\":\"Robot\",\"ja\":\"ロボット\",\"nb_NO\":\"Robot\",\"nl\":\"Robot\",\"pt\":\"Robô\",\"pt_BR\":\"Robô\",\"ru\":\"Робот\",\"si\":null,\"sk\":\"Robot\",\"sq\":\"Robot\",\"sr\":\"робот\",\"sv\":\"Robot\",\"szl\":null,\"tzm\":\"Aṛubu\",\"uk\":\"Робот\",\"vi\":\"Rô-bô\",\"zh_Hans\":\"机器人\",\"zh_Hant\":\"機器人\"}},{\"number\":32,\"emoji\":\"🎩\",\"description\":\"Hat\",\"unicode\":\"U+1F3A9\",\"translated_descriptions\":{\"ar\":\"قُبَّعَة\",\"bg\":\"Шапка\",\"ca\":\"Barret\",\"cs\":\"Klobouk\",\"de\":\"Hut\",\"eo\":\"Ĉapelo\",\"es\":\"Sombrero\",\"et\":\"Kübar\",\"fa\":\"کلاه\",\"fi\":\"Hattu\",\"fr\":\"Chapeau\",\"hr\":\"kapa\",\"hu\":\"Kalap\",\"id\":\"Topi\",\"it\":\"Cappello\",\"ja\":\"帽子\",\"nb_NO\":\"Hatt\",\"nl\":\"Hoed\",\"pt\":\"Chapéu\",\"pt_BR\":\"Chapéu\",\"ru\":\"Шляпа\",\"si\":null,\"sk\":\"Klobúk\",\"sq\":\"Kapë\",\"sr\":\"шешир\",\"sv\":\"Hatt\",\"szl\":null,\"tzm\":\"Taraza\",\"uk\":\"Капелюх\",\"vi\":\"Mũ\",\"zh_Hans\":\"帽子\",\"zh_Hant\":\"帽子\"}},{\"number\":33,\"emoji\":\"👓\",\"description\":\"Glasses\",\"unicode\":\"U+1F453\",\"translated_descriptions\":{\"ar\":\"نَظَّارَة\",\"bg\":\"Очила\",\"ca\":\"Ulleres\",\"cs\":\"Brýle\",\"de\":\"Brille\",\"eo\":\"Okulvitroj\",\"es\":\"Gafas\",\"et\":\"Prillid\",\"fa\":\"عینک\",\"fi\":\"Silmälasit\",\"fr\":\"Lunettes\",\"hr\":\"naočale\",\"hu\":\"Szemüveg\",\"id\":\"Kacamata\",\"it\":\"Occhiali\",\"ja\":\"めがね\",\"nb_NO\":\"Briller\",\"nl\":\"Bril\",\"pt\":\"Óculos\",\"pt_BR\":\"Óculos\",\"ru\":\"Очки\",\"si\":null,\"sk\":\"Okuliare\",\"sq\":\"Syze\",\"sr\":\"наочаре\",\"sv\":\"Glasögon\",\"szl\":null,\"tzm\":null,\"uk\":\"Окуляри\",\"vi\":\"Kính mắt\",\"zh_Hans\":\"眼镜\",\"zh_Hant\":\"眼鏡\"}},{\"number\":34,\"emoji\":\"🔧\",\"description\":\"Spanner\",\"unicode\":\"U+1F527\",\"translated_descriptions\":{\"ar\":\"مِفتَاحُ رَبط\",\"bg\":\"Гаечен ключ\",\"ca\":\"Clau anglesa\",\"cs\":\"Klíč\",\"de\":\"Schraubenschlüssel\",\"eo\":\"Ŝraŭbŝlosilo\",\"es\":\"Llave inglesa\",\"et\":\"Mutrivõti\",\"fa\":\"آچار\",\"fi\":\"Kiintoavain\",\"fr\":\"Clé à molette\",\"hr\":\"ključ\",\"hu\":\"Csavarkulcs\",\"id\":\"Kunci Bengkel\",\"it\":\"Chiave inglese\",\"ja\":\"スパナ\",\"nb_NO\":\"Fastnøkkel\",\"nl\":\"Moersleutel\",\"pt\":\"Chave inglesa\",\"pt_BR\":\"Chave inglesa\",\"ru\":\"Ключ\",\"si\":null,\"sk\":\"Vidlicový kľúč\",\"sq\":\"Çelës\",\"sr\":\"кључ\",\"sv\":\"Skruvnyckel\",\"szl\":null,\"tzm\":null,\"uk\":\"Гайковий ключ\",\"vi\":\"Cờ-lê\",\"zh_Hans\":\"扳手\",\"zh_Hant\":\"扳手\"}},{\"number\":35,\"emoji\":\"🎅\",\"description\":\"Santa\",\"unicode\":\"U+1F385\",\"translated_descriptions\":{\"ar\":\"سانتا\",\"bg\":\"Дядо Коледа\",\"ca\":\"Pare Noél\",\"cs\":\"Mikuláš\",\"de\":\"Weihnachtsmann\",\"eo\":\"Kristnaska viro\",\"es\":\"Papá Noel\",\"et\":\"Jõuluvana\",\"fa\":\"بابا نوئل\",\"fi\":\"Joulupukki\",\"fr\":\"Père Noël\",\"hr\":\"deda Mraz\",\"hu\":\"Télapó\",\"id\":\"Santa\",\"it\":\"Babbo Natale\",\"ja\":\"サンタ\",\"nb_NO\":\"Julenisse\",\"nl\":\"Kerstman\",\"pt\":\"Pai Natal\",\"pt_BR\":\"Papai-noel\",\"ru\":\"Санта\",\"si\":null,\"sk\":\"Mikuláš\",\"sq\":\"Babagjyshi i Vitit të Ri\",\"sr\":\"деда Мраз\",\"sv\":\"Tomte\",\"szl\":null,\"tzm\":null,\"uk\":\"Санта Клаус\",\"vi\":\"ông già Nô-en\",\"zh_Hans\":\"圣诞老人\",\"zh_Hant\":\"聖誕老人\"}},{\"number\":36,\"emoji\":\"👍\",\"description\":\"Thumbs Up\",\"unicode\":\"U+1F44D\",\"translated_descriptions\":{\"ar\":\"رَفعُ إِبهَام\",\"bg\":\"Палец нагоре\",\"ca\":\"Polzes amunt\",\"cs\":\"Palec nahoru\",\"de\":\"Daumen Hoch\",\"eo\":\"Dikfingro supren\",\"es\":\"Pulgar arriba\",\"et\":\"Pöidlad püsti\",\"fa\":\"لایک\",\"fi\":\"Peukalo ylös\",\"fr\":\"Pouce en l’air\",\"hr\":\"palac gore\",\"hu\":\"Hüvelykujj fel\",\"id\":\"Jempol\",\"it\":\"Pollice alzato\",\"ja\":\"いいね\",\"nb_NO\":\"Tommel Opp\",\"nl\":\"Duim omhoog\",\"pt\":\"Polegar para cima\",\"pt_BR\":\"Joinha\",\"ru\":\"Большой палец вверх\",\"si\":null,\"sk\":\"Palec nahor\",\"sq\":null,\"sr\":\"палчић горе\",\"sv\":\"Tummen upp\",\"szl\":null,\"tzm\":null,\"uk\":\"Великий палець вгору\",\"vi\":\"Thích\",\"zh_Hans\":\"赞\",\"zh_Hant\":\"讚\"}},{\"number\":37,\"emoji\":\"☂️\",\"description\":\"Umbrella\",\"unicode\":\"U+2602U+FE0F\",\"translated_descriptions\":{\"ar\":\"مِظَلَّة\",\"bg\":\"Чадър\",\"ca\":\"Paraigües\",\"cs\":\"Deštník\",\"de\":\"Regenschirm\",\"eo\":\"Ombrelo\",\"es\":\"Paraguas\",\"et\":\"Vihmavari\",\"fa\":\"چتر\",\"fi\":\"Sateenvarjo\",\"fr\":\"Parapluie\",\"hr\":\"kišobran\",\"hu\":\"Esernyő\",\"id\":\"Payung\",\"it\":\"Ombrello\",\"ja\":\"傘\",\"nb_NO\":\"Paraply\",\"nl\":\"Paraplu\",\"pt\":\"Guarda-chuva\",\"pt_BR\":\"Guarda-chuva\",\"ru\":\"Зонт\",\"si\":null,\"sk\":\"Dáždnik\",\"sq\":\"Ombrellë\",\"sr\":\"кишобран\",\"sv\":\"Paraply\",\"szl\":null,\"tzm\":null,\"uk\":\"Парасолька\",\"vi\":\"Cái ô\",\"zh_Hans\":\"伞\",\"zh_Hant\":\"雨傘\"}},{\"number\":38,\"emoji\":\"⌛\",\"description\":\"Hourglass\",\"unicode\":\"U+231B\",\"translated_descriptions\":{\"ar\":\"سَاعَةٌ رَملِيَّة\",\"bg\":\"Пясъчен часовник\",\"ca\":\"Rellotge de sorra\",\"cs\":\"Přesýpací hodiny\",\"de\":\"Sanduhr\",\"eo\":\"Sablohorloĝo\",\"es\":\"Reloj de arena\",\"et\":\"Liivakell\",\"fa\":\"ساعت شنی\",\"fi\":\"Tiimalasi\",\"fr\":\"Sablier\",\"hr\":\"pješčani sat\",\"hu\":\"Homokóra\",\"id\":\"Jam Pasir\",\"it\":\"Clessidra\",\"ja\":\"砂時計\",\"nb_NO\":\"Timeglass\",\"nl\":\"Zandloper\",\"pt\":\"Ampulheta\",\"pt_BR\":\"Ampulheta\",\"ru\":\"Песочные часы\",\"si\":null,\"sk\":\"Presýpacie hodiny\",\"sq\":\"Klepsidër\",\"sr\":\"пешчаник\",\"sv\":\"Timglas\",\"szl\":null,\"tzm\":null,\"uk\":\"Пісковий годинник\",\"vi\":\"Đồng hồ cát\",\"zh_Hans\":\"沙漏\",\"zh_Hant\":\"沙漏\"}},{\"number\":39,\"emoji\":\"⏰\",\"description\":\"Clock\",\"unicode\":\"U+23F0\",\"translated_descriptions\":{\"ar\":\"سَاعَة\",\"bg\":\"Часовник\",\"ca\":\"Rellotge\",\"cs\":\"Hodiny\",\"de\":\"Uhr\",\"eo\":\"Horloĝo\",\"es\":\"Reloj\",\"et\":\"Kell\",\"fa\":\"ساعت\",\"fi\":\"Pöytäkello\",\"fr\":\"Réveil\",\"hr\":\"sat\",\"hu\":\"Óra\",\"id\":\"Jam\",\"it\":\"Orologio\",\"ja\":\"時計\",\"nb_NO\":\"Klokke\",\"nl\":\"Wekker\",\"pt\":\"Relógio\",\"pt_BR\":\"Relógio\",\"ru\":\"Часы\",\"si\":null,\"sk\":\"Budík\",\"sq\":\"Sahat\",\"sr\":\"сат\",\"sv\":\"Klocka\",\"szl\":null,\"tzm\":null,\"uk\":\"Годинник\",\"vi\":\"Đồng hồ\",\"zh_Hans\":\"时钟\",\"zh_Hant\":\"時鐘\"}},{\"number\":40,\"emoji\":\"🎁\",\"description\":\"Gift\",\"unicode\":\"U+1F381\",\"translated_descriptions\":{\"ar\":\"هَدِيَّة\",\"bg\":\"Подарък\",\"ca\":\"Regal\",\"cs\":\"Dárek\",\"de\":\"Geschenk\",\"eo\":\"Donaco\",\"es\":\"Regalo\",\"et\":\"Kingitus\",\"fa\":\"هدیه\",\"fi\":\"Lahja\",\"fr\":\"Cadeau\",\"hr\":\"poklon\",\"hu\":\"Ajándék\",\"id\":\"Kado\",\"it\":\"Regalo\",\"ja\":\"ギフト\",\"nb_NO\":\"Gave\",\"nl\":\"Geschenk\",\"pt\":\"Presente\",\"pt_BR\":\"Presente\",\"ru\":\"Подарок\",\"si\":null,\"sk\":\"Darček\",\"sq\":\"Dhuratë\",\"sr\":\"поклон\",\"sv\":\"Present\",\"szl\":null,\"tzm\":null,\"uk\":\"Подарунок\",\"vi\":\"Quà tặng\",\"zh_Hans\":\"礼物\",\"zh_Hant\":\"禮物\"}},{\"number\":41,\"emoji\":\"💡\",\"description\":\"Light Bulb\",\"unicode\":\"U+1F4A1\",\"translated_descriptions\":{\"ar\":\"مِصبَاح\",\"bg\":\"Лампа\",\"ca\":\"Bombeta\",\"cs\":\"Žárovka\",\"de\":\"Glühbirne\",\"eo\":\"Lampo\",\"es\":\"Bombilla\",\"et\":\"Lambipirn\",\"fa\":\"لامپ\",\"fi\":\"Hehkulamppu\",\"fr\":\"Ampoule\",\"hr\":\"žarulja\",\"hu\":\"Égő\",\"id\":\"Bohlam Lampu\",\"it\":\"Lampadina\",\"ja\":\"電球\",\"nb_NO\":\"Lyspære\",\"nl\":\"Gloeilamp\",\"pt\":\"Lâmpada\",\"pt_BR\":\"Lâmpada\",\"ru\":\"Лампочка\",\"si\":null,\"sk\":\"Žiarovka\",\"sq\":\"Llambë\",\"sr\":\"сијалица\",\"sv\":\"Lampa\",\"szl\":null,\"tzm\":null,\"uk\":\"Лампочка\",\"vi\":\"Bóng đèn tròn\",\"zh_Hans\":\"灯泡\",\"zh_Hant\":\"燈泡\"}},{\"number\":42,\"emoji\":\"📕\",\"description\":\"Book\",\"unicode\":\"U+1F4D5\",\"translated_descriptions\":{\"ar\":\"كِتَاب\",\"bg\":\"Книга\",\"ca\":\"Llibre\",\"cs\":\"Kniha\",\"de\":\"Buch\",\"eo\":\"Libro\",\"es\":\"Libro\",\"et\":\"Raamat\",\"fa\":\"کتاب\",\"fi\":\"Kirja\",\"fr\":\"Livre\",\"hr\":\"knjiga\",\"hu\":\"Könyv\",\"id\":\"Buku\",\"it\":\"Libro\",\"ja\":\"本\",\"nb_NO\":\"Bok\",\"nl\":\"Boek\",\"pt\":\"Livro\",\"pt_BR\":\"Livro\",\"ru\":\"Книга\",\"si\":null,\"sk\":\"Kniha\",\"sq\":\"Libër\",\"sr\":\"књига\",\"sv\":\"Bok\",\"szl\":null,\"tzm\":\"Adlis\",\"uk\":\"Книга\",\"vi\":\"Sách\",\"zh_Hans\":\"书\",\"zh_Hant\":\"書\"}},{\"number\":43,\"emoji\":\"✏️\",\"description\":\"Pencil\",\"unicode\":\"U+270FU+FE0F\",\"translated_descriptions\":{\"ar\":\"قَلَمُ رَصاص\",\"bg\":\"Молив\",\"ca\":\"Llapis\",\"cs\":\"Tužka\",\"de\":\"Bleistift\",\"eo\":\"Krajono\",\"es\":\"Lápiz\",\"et\":\"Pliiats\",\"fa\":\"مداد\",\"fi\":\"Lyijykynä\",\"fr\":\"Crayon\",\"hr\":\"olovka\",\"hu\":\"Ceruza\",\"id\":\"Pensil\",\"it\":\"Matita\",\"ja\":\"鉛筆\",\"nb_NO\":\"Blyant\",\"nl\":\"Potlood\",\"pt\":\"Lápis\",\"pt_BR\":\"Lápis\",\"ru\":\"Карандаш\",\"si\":null,\"sk\":\"Ceruzka\",\"sq\":\"Laps\",\"sr\":\"оловка\",\"sv\":\"Penna\",\"szl\":null,\"tzm\":null,\"uk\":\"Олівець\",\"vi\":\"Viết chì\",\"zh_Hans\":\"铅笔\",\"zh_Hant\":\"鉛筆\"}},{\"number\":44,\"emoji\":\"📎\",\"description\":\"Paperclip\",\"unicode\":\"U+1F4CE\",\"translated_descriptions\":{\"ar\":\"مِشبَكُ وَرَق\",\"bg\":\"Кламер\",\"ca\":\"Clip\",\"cs\":\"Sponka\",\"de\":\"Büroklammer\",\"eo\":\"Paperkuntenilo\",\"es\":\"Clip\",\"et\":\"Kirjaklamber\",\"fa\":\"گیره کاغذ\",\"fi\":\"Paperiliitin\",\"fr\":\"Trombone\",\"hr\":\"spajalica\",\"hu\":\"Gémkapocs\",\"id\":\"Klip Kertas\",\"it\":\"Graffetta\",\"ja\":\"クリップ\",\"nb_NO\":\"BInders\",\"nl\":\"Papierklemmetje\",\"pt\":\"Clipe\",\"pt_BR\":\"Clipe de papel\",\"ru\":\"Скрепка\",\"si\":null,\"sk\":\"Kancelárska sponka\",\"sq\":\"Kapëse\",\"sr\":\"спајалица\",\"sv\":\"Gem\",\"szl\":null,\"tzm\":null,\"uk\":\"Спиначка\",\"vi\":\"Kẹp giấy\",\"zh_Hans\":\"回形针\",\"zh_Hant\":\"迴紋針\"}},{\"number\":45,\"emoji\":\"✂️\",\"description\":\"Scissors\",\"unicode\":\"U+2702U+FE0F\",\"translated_descriptions\":{\"ar\":\"مِقَصّ\",\"bg\":\"Ножици\",\"ca\":\"Tisores\",\"cs\":\"Nůžky\",\"de\":\"Schere\",\"eo\":\"Tondilo\",\"es\":\"Tijeras\",\"et\":\"Käärid\",\"fa\":\"قیچی\",\"fi\":\"Sakset\",\"fr\":\"Ciseaux\",\"hr\":\"škare\",\"hu\":\"Olló\",\"id\":\"Gunting\",\"it\":\"Forbici\",\"ja\":\"はさみ\",\"nb_NO\":\"Saks\",\"nl\":\"Schaar\",\"pt\":\"Tesoura\",\"pt_BR\":\"Tesoura\",\"ru\":\"Ножницы\",\"si\":null,\"sk\":\"Nožnice\",\"sq\":\"Gërshërë\",\"sr\":\"маказе\",\"sv\":\"Sax\",\"szl\":null,\"tzm\":null,\"uk\":\"Ножиці\",\"vi\":\"Cái kéo\",\"zh_Hans\":\"剪刀\",\"zh_Hant\":\"剪刀\"}},{\"number\":46,\"emoji\":\"🔒\",\"description\":\"Lock\",\"unicode\":\"U+1F512\",\"translated_descriptions\":{\"ar\":\"قُفل\",\"bg\":\"Катинар\",\"ca\":\"Cadenat\",\"cs\":\"Zámek\",\"de\":\"Schloss\",\"eo\":\"Seruro\",\"es\":\"Candado\",\"et\":\"Lukk\",\"fa\":\"قفل\",\"fi\":\"Lukko\",\"fr\":\"Cadenas\",\"hr\":\"zaključati\",\"hu\":\"Lakat\",\"id\":\"Gembok\",\"it\":\"Lucchetto\",\"ja\":\"錠前\",\"nb_NO\":\"Lås\",\"nl\":\"Slot\",\"pt\":\"Cadeado\",\"pt_BR\":\"Cadeado\",\"ru\":\"Замок\",\"si\":null,\"sk\":\"Zámka\",\"sq\":\"Dry\",\"sr\":\"катанац\",\"sv\":\"Lås\",\"szl\":null,\"tzm\":null,\"uk\":\"Замок\",\"vi\":\"Ổ khóa\",\"zh_Hans\":\"锁\",\"zh_Hant\":\"鎖頭\"}},{\"number\":47,\"emoji\":\"🔑\",\"description\":\"Key\",\"unicode\":\"U+1F511\",\"translated_descriptions\":{\"ar\":\"مِفتَاح\",\"bg\":\"Ключ\",\"ca\":\"Clau\",\"cs\":\"Klíč ke dveřím\",\"de\":\"Schlüssel\",\"eo\":\"Ŝlosilo\",\"es\":\"Llave\",\"et\":\"Võti\",\"fa\":\"کلید\",\"fi\":\"Avain\",\"fr\":\"Clé\",\"hr\":\"ključ\",\"hu\":\"Kulcs\",\"id\":\"Kunci\",\"it\":\"Chiave\",\"ja\":\"鍵\",\"nb_NO\":\"Nøkkel\",\"nl\":\"Sleutel\",\"pt\":\"Chave\",\"pt_BR\":\"Chave\",\"ru\":\"Ключ\",\"si\":null,\"sk\":\"Kľúč\",\"sq\":\"Çelës\",\"sr\":\"кључ\",\"sv\":\"Nyckel\",\"szl\":null,\"tzm\":\"Tasarut\",\"uk\":\"Ключ\",\"vi\":\"Chìa khóa\",\"zh_Hans\":\"钥匙\",\"zh_Hant\":\"鑰匙\"}},{\"number\":48,\"emoji\":\"🔨\",\"description\":\"Hammer\",\"unicode\":\"U+1F528\",\"translated_descriptions\":{\"ar\":\"مِطرَقَة\",\"bg\":\"Чук\",\"ca\":\"Martell\",\"cs\":\"Kladivo\",\"de\":\"Hammer\",\"eo\":\"Martelo\",\"es\":\"Martillo\",\"et\":\"Haamer\",\"fa\":\"چکش\",\"fi\":\"Vasara\",\"fr\":\"Marteau\",\"hr\":\"čekić\",\"hu\":\"Kalapács\",\"id\":\"Palu\",\"it\":\"Martello\",\"ja\":\"金槌\",\"nb_NO\":\"Hammer\",\"nl\":\"Hamer\",\"pt\":\"Martelo\",\"pt_BR\":\"Martelo\",\"ru\":\"Молоток\",\"si\":null,\"sk\":\"Kladivo\",\"sq\":\"Çekiç\",\"sr\":\"чекић\",\"sv\":\"Hammare\",\"szl\":null,\"tzm\":null,\"uk\":\"Молоток\",\"vi\":\"Búa\",\"zh_Hans\":\"锤子\",\"zh_Hant\":\"鎚子\"}},{\"number\":49,\"emoji\":\"☎️\",\"description\":\"Telephone\",\"unicode\":\"U+260EU+FE0F\",\"translated_descriptions\":{\"ar\":\"تِلِفُون\",\"bg\":\"Телефон\",\"ca\":\"Telèfon\",\"cs\":\"Telefon\",\"de\":\"Telefon\",\"eo\":\"Telefono\",\"es\":\"Teléfono\",\"et\":\"Telefon\",\"fa\":\"تلفن\",\"fi\":\"Puhelin\",\"fr\":\"Téléphone\",\"hr\":\"telefon\",\"hu\":\"Telefon\",\"id\":\"Telepon\",\"it\":\"Telefono\",\"ja\":\"電話機\",\"nb_NO\":\"Telefon\",\"nl\":\"Telefoon\",\"pt\":\"Telefone\",\"pt_BR\":\"Telefone\",\"ru\":\"Телефон\",\"si\":null,\"sk\":\"Telefón\",\"sq\":\"Telefon\",\"sr\":\"телефон\",\"sv\":\"Telefon\",\"szl\":null,\"tzm\":\"Atilifun\",\"uk\":\"Телефон\",\"vi\":\"Điện thoại\",\"zh_Hans\":\"电话\",\"zh_Hant\":\"電話\"}},{\"number\":50,\"emoji\":\"🏁\",\"description\":\"Flag\",\"unicode\":\"U+1F3C1\",\"translated_descriptions\":{\"ar\":\"عَلَم\",\"bg\":\"Флаг\",\"ca\":\"Bandera\",\"cs\":\"Vlajka\",\"de\":\"Flagge\",\"eo\":\"Flago\",\"es\":\"Bandera\",\"et\":\"Lipp\",\"fa\":\"پرچم\",\"fi\":\"Lippu\",\"fr\":\"Drapeau\",\"hr\":\"zastava\",\"hu\":\"Zászló\",\"id\":\"Bendera\",\"it\":\"Bandiera\",\"ja\":\"旗\",\"nb_NO\":\"Flagg\",\"nl\":\"Vlag\",\"pt\":\"Bandeira\",\"pt_BR\":\"Bandeira\",\"ru\":\"Флаг\",\"si\":null,\"sk\":\"Zástava\",\"sq\":\"Flamur\",\"sr\":\"застава\",\"sv\":\"Flagga\",\"szl\":null,\"tzm\":\"Acenyal\",\"uk\":\"Прапор\",\"vi\":\"Lá cờ\",\"zh_Hans\":\"旗帜\",\"zh_Hant\":\"旗幟\"}},{\"number\":51,\"emoji\":\"🚂\",\"description\":\"Train\",\"unicode\":\"U+1F682\",\"translated_descriptions\":{\"ar\":\"قِطَار\",\"bg\":\"Влак\",\"ca\":\"Tren\",\"cs\":\"Vlak\",\"de\":\"Zug\",\"eo\":\"Vagonaro\",\"es\":\"Tren\",\"et\":\"Rong\",\"fa\":\"قطار\",\"fi\":\"Juna\",\"fr\":\"Train\",\"hr\":\"vlak\",\"hu\":\"Vonat\",\"id\":\"Kereta Api\",\"it\":\"Treno\",\"ja\":\"電車\",\"nb_NO\":\"Tog\",\"nl\":\"Trein\",\"pt\":\"Comboio\",\"pt_BR\":\"Trem\",\"ru\":\"Поезд\",\"si\":null,\"sk\":\"Vlak\",\"sq\":\"Tren\",\"sr\":\"воз\",\"sv\":\"Tåg\",\"szl\":null,\"tzm\":null,\"uk\":\"Потяг\",\"vi\":\"Xe lửa\",\"zh_Hans\":\"火车\",\"zh_Hant\":\"火車\"}},{\"number\":52,\"emoji\":\"🚲\",\"description\":\"Bicycle\",\"unicode\":\"U+1F6B2\",\"translated_descriptions\":{\"ar\":\"دَرّاجَة\",\"bg\":\"Колело\",\"ca\":\"Bicicleta\",\"cs\":\"Kolo\",\"de\":\"Fahrrad\",\"eo\":\"Biciklo\",\"es\":\"Bicicleta\",\"et\":\"Jalgratas\",\"fa\":\"دوچرخه\",\"fi\":\"Polkupyörä\",\"fr\":\"Vélo\",\"hr\":\"bicikl\",\"hu\":\"Kerékpár\",\"id\":\"Sepeda\",\"it\":\"Bicicletta\",\"ja\":\"自転車\",\"nb_NO\":\"Sykkel\",\"nl\":\"Fiets\",\"pt\":\"Bicicleta\",\"pt_BR\":\"Bicicleta\",\"ru\":\"Велосипед\",\"si\":null,\"sk\":\"Bicykel\",\"sq\":\"Biçikletë\",\"sr\":\"бицикл\",\"sv\":\"Cykel\",\"szl\":null,\"tzm\":null,\"uk\":\"Велосипед\",\"vi\":\"Xe đạp\",\"zh_Hans\":\"自行车\",\"zh_Hant\":\"腳踏車\"}},{\"number\":53,\"emoji\":\"✈️\",\"description\":\"Aeroplane\",\"unicode\":\"U+2708U+FE0F\",\"translated_descriptions\":{\"ar\":\"طَائِرة\",\"bg\":\"Самолет\",\"ca\":\"Avió\",\"cs\":\"Letadlo\",\"de\":\"Flugzeug\",\"eo\":\"Aviadilo\",\"es\":\"Avión\",\"et\":\"Lennuk\",\"fa\":\"هواپیما\",\"fi\":\"Lentokone\",\"fr\":\"Avion\",\"hr\":\"avion\",\"hu\":\"Repülő\",\"id\":\"Pesawat\",\"it\":\"Aeroplano\",\"ja\":\"飛行機\",\"nb_NO\":\"Fly\",\"nl\":\"Vliegtuig\",\"pt\":\"Avião\",\"pt_BR\":\"Avião\",\"ru\":\"Самолет\",\"si\":null,\"sk\":\"Lietadlo\",\"sq\":\"Avion\",\"sr\":\"авион\",\"sv\":\"Flygplan\",\"szl\":null,\"tzm\":null,\"uk\":\"Літак\",\"vi\":\"Máy bay\",\"zh_Hans\":\"飞机\",\"zh_Hant\":\"飛機\"}},{\"number\":54,\"emoji\":\"🚀\",\"description\":\"Rocket\",\"unicode\":\"U+1F680\",\"translated_descriptions\":{\"ar\":\"صَارُوخ\",\"bg\":\"Ракета\",\"ca\":\"Coet\",\"cs\":\"Raketa\",\"de\":\"Rakete\",\"eo\":\"Raketo\",\"es\":\"Cohete\",\"et\":\"Rakett\",\"fa\":\"موشک\",\"fi\":\"Raketti\",\"fr\":\"Fusée\",\"hr\":\"raketa\",\"hu\":\"Rakáta\",\"id\":\"Roket\",\"it\":\"Razzo\",\"ja\":\"ロケット\",\"nb_NO\":\"Rakett\",\"nl\":\"Raket\",\"pt\":\"Foguetão\",\"pt_BR\":\"Foguete\",\"ru\":\"Ракета\",\"si\":null,\"sk\":\"Raketa\",\"sq\":\"Raketë\",\"sr\":\"ракета\",\"sv\":\"Raket\",\"szl\":null,\"tzm\":null,\"uk\":\"Ракета\",\"vi\":\"Tên lửa\",\"zh_Hans\":\"火箭\",\"zh_Hant\":\"火箭\"}},{\"number\":55,\"emoji\":\"🏆\",\"description\":\"Trophy\",\"unicode\":\"U+1F3C6\",\"translated_descriptions\":{\"ar\":\"كَأسُ النَّصر\",\"bg\":\"Трофей\",\"ca\":\"Trofeu\",\"cs\":\"Pohár\",\"de\":\"Pokal\",\"eo\":\"Trofeo\",\"es\":\"Trofeo\",\"et\":\"Auhind\",\"fa\":\"جام\",\"fi\":\"Palkinto\",\"fr\":\"Trophée\",\"hr\":\"trofej\",\"hu\":\"Trófea\",\"id\":\"Piala\",\"it\":\"Trofeo\",\"ja\":\"トロフィー\",\"nb_NO\":\"Pokal\",\"nl\":\"Trofee\",\"pt\":\"Troféu\",\"pt_BR\":\"Troféu\",\"ru\":\"Кубок\",\"si\":null,\"sk\":\"Trofej\",\"sq\":\"Trofe\",\"sr\":\"пехар\",\"sv\":\"Trofé\",\"szl\":null,\"tzm\":null,\"uk\":\"Приз\",\"vi\":\"Cúp\",\"zh_Hans\":\"奖杯\",\"zh_Hant\":\"獎盃\"}},{\"number\":56,\"emoji\":\"⚽\",\"description\":\"Ball\",\"unicode\":\"U+26BD\",\"translated_descriptions\":{\"ar\":\"كُرَة\",\"bg\":\"Топка\",\"ca\":\"Pilota\",\"cs\":\"Míč\",\"de\":\"Ball\",\"eo\":\"Pilko\",\"es\":\"Bola\",\"et\":\"Pall\",\"fa\":\"توپ\",\"fi\":\"Pallo\",\"fr\":\"Ballon\",\"hr\":\"lopta\",\"hu\":\"Labda\",\"id\":\"Bola\",\"it\":\"Palla\",\"ja\":\"ボール\",\"nb_NO\":\"Ball\",\"nl\":\"Bal\",\"pt\":\"Bola\",\"pt_BR\":\"Bola\",\"ru\":\"Мяч\",\"si\":null,\"sk\":\"Lopta\",\"sq\":\"Top\",\"sr\":\"лопта\",\"sv\":\"Boll\",\"szl\":null,\"tzm\":\"Tcama\",\"uk\":\"М'яч\",\"vi\":\"Banh\",\"zh_Hans\":\"球\",\"zh_Hant\":\"足球\"}},{\"number\":57,\"emoji\":\"🎸\",\"description\":\"Guitar\",\"unicode\":\"U+1F3B8\",\"translated_descriptions\":{\"ar\":\"غيتار\",\"bg\":\"Китара\",\"ca\":\"Guitarra\",\"cs\":\"Kytara\",\"de\":\"Gitarre\",\"eo\":\"Gitaro\",\"es\":\"Guitarra\",\"et\":\"Kitarr\",\"fa\":\"گیتار\",\"fi\":\"Kitara\",\"fr\":\"Guitare\",\"hr\":\"gitara\",\"hu\":\"Gitár\",\"id\":\"Gitar\",\"it\":\"Chitarra\",\"ja\":\"ギター\",\"nb_NO\":\"Gitar\",\"nl\":\"Gitaar\",\"pt\":\"Guitarra\",\"pt_BR\":\"Guitarra\",\"ru\":\"Гитара\",\"si\":null,\"sk\":\"Gitara\",\"sq\":\"Kitarë\",\"sr\":\"гитара\",\"sv\":\"Gitarr\",\"szl\":null,\"tzm\":\"Agiṭaṛ\",\"uk\":\"Гітара\",\"vi\":\"Ghi-ta\",\"zh_Hans\":\"吉他\",\"zh_Hant\":\"吉他\"}},{\"number\":58,\"emoji\":\"🎺\",\"description\":\"Trumpet\",\"unicode\":\"U+1F3BA\",\"translated_descriptions\":{\"ar\":\"بُوق\",\"bg\":\"Тромпет\",\"ca\":\"Trompeta\",\"cs\":\"Trumpeta\",\"de\":\"Trompete\",\"eo\":\"Trumpeto\",\"es\":\"Trompeta\",\"et\":\"Trompet\",\"fa\":\"شیپور\",\"fi\":\"Trumpetti\",\"fr\":\"Trompette\",\"hr\":\"truba\",\"hu\":\"Trombita\",\"id\":\"Terompet\",\"it\":\"Trombetta\",\"ja\":\"トランペット\",\"nb_NO\":\"Trompet\",\"nl\":\"Trompet\",\"pt\":\"Trompete\",\"pt_BR\":\"Trombeta\",\"ru\":\"Труба\",\"si\":null,\"sk\":\"Trúbka\",\"sq\":\"Trombë\",\"sr\":\"труба\",\"sv\":\"Trumpet\",\"szl\":null,\"tzm\":null,\"uk\":\"Труба\",\"vi\":\"Kèn\",\"zh_Hans\":\"喇叭\",\"zh_Hant\":\"喇叭\"}},{\"number\":59,\"emoji\":\"🔔\",\"description\":\"Bell\",\"unicode\":\"U+1F514\",\"translated_descriptions\":{\"ar\":\"جَرَس\",\"bg\":\"Звънец\",\"ca\":\"Campana\",\"cs\":\"Zvonek\",\"de\":\"Glocke\",\"eo\":\"Sonorilo\",\"es\":\"Campana\",\"et\":\"Kelluke\",\"fa\":\"زنگ\",\"fi\":\"Soittokello\",\"fr\":\"Cloche\",\"hr\":\"zvono\",\"hu\":\"Harang\",\"id\":\"Lonceng\",\"it\":\"Campana\",\"ja\":\"ベル\",\"nb_NO\":\"Bjelle\",\"nl\":\"Bel\",\"pt\":\"Sino\",\"pt_BR\":\"Sino\",\"ru\":\"Колокол\",\"si\":null,\"sk\":\"Zvonec\",\"sq\":\"Kambanë\",\"sr\":\"звоно\",\"sv\":\"Bjällra\",\"szl\":null,\"tzm\":null,\"uk\":\"Дзвін\",\"vi\":\"Chuông\",\"zh_Hans\":\"铃铛\",\"zh_Hant\":\"鈴鐺\"}},{\"number\":60,\"emoji\":\"⚓\",\"description\":\"Anchor\",\"unicode\":\"U+2693\",\"translated_descriptions\":{\"ar\":\"مِرسَاة\",\"bg\":\"Котва\",\"ca\":\"Àncora\",\"cs\":\"Kotva\",\"de\":\"Anker\",\"eo\":\"Ankro\",\"es\":\"Ancla\",\"et\":\"Ankur\",\"fa\":\"لنگر\",\"fi\":\"Ankkuri\",\"fr\":\"Ancre\",\"hr\":\"sidro\",\"hu\":\"Horgony\",\"id\":\"Jangkar\",\"it\":\"Ancora\",\"ja\":\"いかり\",\"nb_NO\":\"Anker\",\"nl\":\"Anker\",\"pt\":\"Âncora\",\"pt_BR\":\"Âncora\",\"ru\":\"Якорь\",\"si\":null,\"sk\":\"Kotva\",\"sq\":\"Spirancë\",\"sr\":\"сидро\",\"sv\":\"Ankare\",\"szl\":null,\"tzm\":null,\"uk\":\"Якір\",\"vi\":\"Mỏ neo\",\"zh_Hans\":\"锚\",\"zh_Hant\":\"船錨\"}},{\"number\":61,\"emoji\":\"🎧\",\"description\":\"Headphones\",\"unicode\":\"U+1F3A7\",\"translated_descriptions\":{\"ar\":\"سَمّاعَة رَأس\",\"bg\":\"Слушалки\",\"ca\":\"Auriculars\",\"cs\":\"Sluchátka\",\"de\":\"Kopfhörer\",\"eo\":\"Kapaŭdilo\",\"es\":\"Cascos\",\"et\":\"Kõrvaklapid\",\"fa\":\"هدفون\",\"fi\":\"Kuulokkeet\",\"fr\":\"Casque audio\",\"hr\":\"slušalice\",\"hu\":\"Fejhallgató\",\"id\":\"Headphone\",\"it\":\"Cuffie\",\"ja\":\"ヘッドホン\",\"nb_NO\":\"Hodetelefoner\",\"nl\":\"Koptelefoon\",\"pt\":\"Fones\",\"pt_BR\":\"Fones de ouvido\",\"ru\":\"Наушники\",\"si\":null,\"sk\":\"Slúchadlá\",\"sq\":\"Kufje\",\"sr\":\"слушалице\",\"sv\":\"Hörlurar\",\"szl\":null,\"tzm\":null,\"uk\":\"Навушники\",\"vi\":\"Tai nghe\",\"zh_Hans\":\"耳机\",\"zh_Hant\":\"耳機\"}},{\"number\":62,\"emoji\":\"📁\",\"description\":\"Folder\",\"unicode\":\"U+1F4C1\",\"translated_descriptions\":{\"ar\":\"مُجَلَّد\",\"bg\":\"Папка\",\"ca\":\"Carpeta\",\"cs\":\"Složka\",\"de\":\"Ordner\",\"eo\":\"Dosierujo\",\"es\":\"Carpeta\",\"et\":\"Kaust\",\"fa\":\"پوشه\",\"fi\":\"Kansio\",\"fr\":\"Dossier\",\"hr\":\"mapu\",\"hu\":\"Mappa\",\"id\":\"Map\",\"it\":\"Cartella\",\"ja\":\"フォルダー\",\"nb_NO\":\"Mappe\",\"nl\":\"Map\",\"pt\":\"Pasta\",\"pt_BR\":\"Pasta\",\"ru\":\"Папка\",\"si\":null,\"sk\":\"Fascikel\",\"sq\":\"Dosje\",\"sr\":\"фасцикла\",\"sv\":\"Mapp\",\"szl\":null,\"tzm\":\"Asdaw\",\"uk\":\"Тека\",\"vi\":\"Thư mục\",\"zh_Hans\":\"文件夹\",\"zh_Hant\":\"資料夾\"}},{\"number\":63,\"emoji\":\"📌\",\"description\":\"Pin\",\"unicode\":\"U+1F4CC\",\"translated_descriptions\":{\"ar\":\"دَبُّوس\",\"bg\":\"Кабърче\",\"ca\":\"Xinxeta\",\"cs\":\"Špendlík\",\"de\":\"Stecknadel\",\"eo\":\"Pinglo\",\"es\":\"Alfiler\",\"et\":\"Nööpnõel\",\"fa\":\"سنجاق\",\"fi\":\"Nuppineula\",\"fr\":\"Punaise\",\"hr\":\"pribadača\",\"hu\":\"Rajszeg\",\"id\":\"Pin\",\"it\":\"Puntina\",\"ja\":\"ピン\",\"nb_NO\":\"Tegnestift\",\"nl\":\"Duimspijker\",\"pt\":\"Pionés\",\"pt_BR\":\"Alfinete\",\"ru\":\"Булавка\",\"si\":null,\"sk\":\"Špendlík\",\"sq\":\"Karficë\",\"sr\":\"чиода\",\"sv\":\"Häftstift\",\"szl\":null,\"tzm\":null,\"uk\":\"Кнопка\",\"vi\":\"Ghim\",\"zh_Hans\":\"图钉\",\"zh_Hant\":\"圖釘\"}}]")).map(({ emoji: e, description: t, translated_descriptions: n }) => [e, [t, Object.keys(n).reduce((e, t) => {
	for (let r of qb(t)) e[r] = n[t];
	return e;
}, {})]]));
function jS(e, t) {
	let n = AS.get(e);
	if (!n) throw Error(`Emoji mapping not found for emoji ${e}`);
	let [r, i] = n;
	for (let e of qb(t)) if (i[e]) return i[e];
	return r;
}
var MS = {
	container: "_container_1lqqy_8",
	segment: "_segment_1lqqy_15",
	emoji: "_emoji_1lqqy_23",
	label: "_label_1lqqy_29"
};
//#endregion
//#region src/crypto/SasEmoji/SasEmoji.tsx
function NS({ emoji: e, className: n }) {
	let { language: r } = W(), i = e.map((e, n) => /* @__PURE__ */ t.createElement("div", {
		className: MS.segment,
		key: n
	}, /* @__PURE__ */ t.createElement("div", {
		className: MS.emoji,
		"aria-hidden": !0
	}, e), /* @__PURE__ */ t.createElement("div", { className: MS.label }, jS(e, r))));
	return /* @__PURE__ */ t.createElement("div", { className: (0, U.default)(MS.container, n) }, i);
}
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/close.js
function PS(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M6.293 6.293a1 1 0 0 1 1.414 0L12 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414L13.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.586 12 6.293 7.707a1 1 0 0 1 0-1.414" })
	});
}
PS.displayName = "CloseIcon";
var FS = a(PS), IS = class {
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
}, LS = class {
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
}, RS = class {
	listeners = /* @__PURE__ */ new Set();
	add = (e) => (this.listeners.add(e), () => {
		this.listeners.delete(e);
	});
	emit = () => {
		for (let e of this.listeners) e();
	};
}, zS = class {
	subs;
	snapshot;
	props;
	disposables = new IS();
	constructor(e, t) {
		this.props = e, this.subs = new RS(), this.snapshot = new LS(t, () => {
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
}, BS = class {
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
function VS(e) {
	let [t, n] = h(e);
	return u(() => {
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
function HS(e, t) {
	return p(() => {
		let n = new BS(e);
		return Object.assign(n, t), n;
	}, [e, t]);
}
//#endregion
//#region src/core/viewmodel/useViewModel.ts
function Y(e) {
	return g(e.subscribe, e.getSnapshot, e.getSnapshot);
}
var US = {
	thumbnail: "_thumbnail_irnbt_8",
	link: "_link_irnbt_16",
	container: "_container_irnbt_21",
	wrapImageCaption: "_wrapImageCaption_irnbt_28",
	image: "_image_irnbt_36",
	caption: "_caption_irnbt_37",
	title: "_title_irnbt_59",
	description: "_description_irnbt_60"
}, WS = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", GS = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", KS = "numeric", qS = "ascii", JS = "alpha", YS = "asciinumeric", XS = "alphanumeric", ZS = "domain", QS = "emoji", $S = "scheme", eC = "slashscheme", tC = "whitespace";
function nC(e, t) {
	return e in t || (t[e] = []), t[e];
}
function rC(e, t, n) {
	t[KS] && (t[YS] = !0, t[XS] = !0), t[qS] && (t[YS] = !0, t[JS] = !0), t[YS] && (t[XS] = !0), t[JS] && (t[XS] = !0), t[XS] && (t[ZS] = !0), t[QS] && (t[ZS] = !0);
	for (let r in t) {
		let t = nC(r, n);
		t.indexOf(e) < 0 && t.push(e);
	}
}
function iC(e, t) {
	let n = {};
	for (let r in t) t[r].indexOf(e) >= 0 && (n[r] = !0);
	return n;
}
function aC(e = null) {
	this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
aC.groups = {}, aC.prototype = {
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
		r ||= aC.groups;
		let i;
		return t && t.j ? i = t : (i = new aC(t), n && r && rC(t, n, r)), this.jr.push([e, i]), i;
	},
	ts(e, t, n, r) {
		let i = this, a = e.length;
		if (!a) return i;
		for (let t = 0; t < a - 1; t++) i = i.tt(e[t]);
		return i.tt(e[a - 1], t, n, r);
	},
	tt(e, t, n, r) {
		r ||= aC.groups;
		let i = this;
		if (t && t.j) return i.j[e] = t, t;
		let a = t, o, s = i.go(e);
		return s ? (o = new aC(), Object.assign(o.j, s.j), o.jr.push.apply(o.jr, s.jr), o.jd = s.jd, o.t = s.t) : o = new aC(), a && (r && (o.t && typeof o.t == "string" ? rC(a, Object.assign(iC(o.t, r), n), r) : n && rC(a, n, r)), o.t = a), i.j[e] = o, o;
	}
};
var X = (e, t, n, r, i) => e.ta(t, n, r, i), Z = (e, t, n, r, i) => e.tr(t, n, r, i), oC = (e, t, n, r, i) => e.ts(t, n, r, i), Q = (e, t, n, r, i) => e.tt(t, n, r, i), sC = "WORD", cC = "UWORD", lC = "ASCIINUMERICAL", uC = "ALPHANUMERICAL", dC = "LOCALHOST", fC = "TLD", pC = "UTLD", mC = "SCHEME", hC = "SLASH_SCHEME", gC = "NUM", _C = "WS", vC = "NL", yC = "OPENBRACE", bC = "CLOSEBRACE", xC = "OPENBRACKET", SC = "CLOSEBRACKET", CC = "OPENPAREN", wC = "CLOSEPAREN", TC = "OPENANGLEBRACKET", EC = "CLOSEANGLEBRACKET", DC = "FULLWIDTHLEFTPAREN", OC = "FULLWIDTHRIGHTPAREN", kC = "LEFTCORNERBRACKET", AC = "RIGHTCORNERBRACKET", jC = "LEFTWHITECORNERBRACKET", MC = "RIGHTWHITECORNERBRACKET", NC = "FULLWIDTHLESSTHAN", PC = "FULLWIDTHGREATERTHAN", FC = "AMPERSAND", IC = "APOSTROPHE", LC = "ASTERISK", RC = "AT", zC = "BACKSLASH", BC = "BACKTICK", VC = "CARET", HC = "COLON", UC = "COMMA", WC = "DOLLAR", GC = "DOT", KC = "EQUALS", qC = "EXCLAMATION", JC = "HYPHEN", YC = "PERCENT", XC = "PIPE", ZC = "PLUS", QC = "POUND", $C = "QUERY", ew = "QUOTE", tw = "FULLWIDTHMIDDLEDOT", nw = "SEMI", rw = "SLASH", iw = "TILDE", aw = "UNDERSCORE", ow = "EMOJI", sw = "SYM", cw = /*#__PURE__*/ Object.freeze({
	__proto__: null,
	ALPHANUMERICAL: uC,
	AMPERSAND: FC,
	APOSTROPHE: IC,
	ASCIINUMERICAL: lC,
	ASTERISK: LC,
	AT: RC,
	BACKSLASH: zC,
	BACKTICK: BC,
	CARET: VC,
	CLOSEANGLEBRACKET: EC,
	CLOSEBRACE: bC,
	CLOSEBRACKET: SC,
	CLOSEPAREN: wC,
	COLON: HC,
	COMMA: UC,
	DOLLAR: WC,
	DOT: GC,
	EMOJI: ow,
	EQUALS: KC,
	EXCLAMATION: qC,
	FULLWIDTHGREATERTHAN: PC,
	FULLWIDTHLEFTPAREN: DC,
	FULLWIDTHLESSTHAN: NC,
	FULLWIDTHMIDDLEDOT: tw,
	FULLWIDTHRIGHTPAREN: OC,
	HYPHEN: JC,
	LEFTCORNERBRACKET: kC,
	LEFTWHITECORNERBRACKET: jC,
	LOCALHOST: dC,
	NL: vC,
	NUM: gC,
	OPENANGLEBRACKET: TC,
	OPENBRACE: yC,
	OPENBRACKET: xC,
	OPENPAREN: CC,
	PERCENT: YC,
	PIPE: XC,
	PLUS: ZC,
	POUND: QC,
	QUERY: $C,
	QUOTE: ew,
	RIGHTCORNERBRACKET: AC,
	RIGHTWHITECORNERBRACKET: MC,
	SCHEME: mC,
	SEMI: nw,
	SLASH: rw,
	SLASH_SCHEME: hC,
	SYM: sw,
	TILDE: iw,
	TLD: fC,
	UNDERSCORE: aw,
	UTLD: pC,
	UWORD: cC,
	WORD: sC,
	WS: _C
}), lw = /[a-z]/, uw = /\p{L}/u, dw = /\p{Emoji}/u, fw = /\d/, pw = /\s/, mw = "\r", hw = "\n", gw = "️", _w = "‍", vw = "￼", yw = null, bw = null;
function xw(e = []) {
	let t = {};
	aC.groups = t;
	let n = new aC();
	yw ??= Tw(WS), bw ??= Tw(GS), Q(n, "'", IC), Q(n, "{", yC), Q(n, "}", bC), Q(n, "[", xC), Q(n, "]", SC), Q(n, "(", CC), Q(n, ")", wC), Q(n, "<", TC), Q(n, ">", EC), Q(n, "（", DC), Q(n, "）", OC), Q(n, "「", kC), Q(n, "」", AC), Q(n, "『", jC), Q(n, "』", MC), Q(n, "＜", NC), Q(n, "＞", PC), Q(n, "&", FC), Q(n, "*", LC), Q(n, "@", RC), Q(n, "`", BC), Q(n, "^", VC), Q(n, ":", HC), Q(n, ",", UC), Q(n, "$", WC), Q(n, ".", GC), Q(n, "=", KC), Q(n, "!", qC), Q(n, "-", JC), Q(n, "%", YC), Q(n, "|", XC), Q(n, "+", ZC), Q(n, "#", QC), Q(n, "?", $C), Q(n, "\"", ew), Q(n, "/", rw), Q(n, ";", nw), Q(n, "~", iw), Q(n, "_", aw), Q(n, "\\", zC), Q(n, "・", tw);
	let r = Z(n, fw, gC, { [KS]: !0 });
	Z(r, fw, r);
	let i = Z(r, lw, lC, { [YS]: !0 }), a = Z(r, uw, uC, { [XS]: !0 }), o = Z(n, lw, sC, { [qS]: !0 });
	Z(o, fw, i), Z(o, lw, o), Z(i, fw, i), Z(i, lw, i);
	let s = Z(n, uw, cC, { [JS]: !0 });
	Z(s, lw), Z(s, fw, a), Z(s, uw, s), Z(a, fw, a), Z(a, lw), Z(a, uw, a);
	let c = Q(n, hw, vC, { [tC]: !0 }), l = Q(n, mw, _C, { [tC]: !0 }), u = Z(n, pw, _C, { [tC]: !0 });
	Q(n, vw, u), Q(l, hw, c), Q(l, vw, u), Z(l, pw, u), Q(u, mw), Q(u, hw), Z(u, pw, u), Q(u, vw, u);
	let d = Z(n, dw, ow, { [QS]: !0 });
	Q(d, "#"), Z(d, dw, d), Q(d, gw, d);
	let f = Q(d, _w);
	Q(f, "#"), Z(f, dw, d);
	let p = [[lw, o], [fw, i]], m = [
		[lw, null],
		[uw, s],
		[fw, a]
	];
	for (let e = 0; e < yw.length; e++) ww(n, yw[e], fC, sC, p);
	for (let e = 0; e < bw.length; e++) ww(n, bw[e], pC, cC, m);
	rC(fC, {
		tld: !0,
		ascii: !0
	}, t), rC(pC, {
		utld: !0,
		alpha: !0
	}, t), ww(n, "file", mC, sC, p), ww(n, "mailto", mC, sC, p), ww(n, "http", hC, sC, p), ww(n, "https", hC, sC, p), ww(n, "ftp", hC, sC, p), ww(n, "ftps", hC, sC, p), rC(mC, {
		scheme: !0,
		ascii: !0
	}, t), rC(hC, {
		slashscheme: !0,
		ascii: !0
	}, t), e = e.sort((e, t) => e[0] > t[0] ? 1 : -1);
	for (let t = 0; t < e.length; t++) {
		let r = e[t][0], i = e[t][1] ? { [$S]: !0 } : { [eC]: !0 };
		r.indexOf("-") >= 0 ? i[ZS] = !0 : lw.test(r) ? fw.test(r) ? i[YS] = !0 : i[qS] = !0 : i[KS] = !0, oC(n, r, r, i);
	}
	return oC(n, "localhost", dC, { ascii: !0 }), n.jd = new aC(sw), {
		start: n,
		tokens: Object.assign({ groups: t }, cw)
	};
}
function Sw(e, t) {
	let n = Cw(t.replace(/[A-Z]/g, (e) => e.toLowerCase())), r = n.length, i = [], a = 0, o = 0;
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
function Cw(e) {
	let t = [], n = e.length, r = 0;
	for (; r < n;) {
		let i = e.charCodeAt(r), a, o = i < 55296 || i > 56319 || r + 1 === n || (a = e.charCodeAt(r + 1)) < 56320 || a > 57343 ? e[r] : e.slice(r, r + 2);
		t.push(o), r += o.length;
	}
	return t;
}
function ww(e, t, n, r, i) {
	let a, o = t.length;
	for (let n = 0; n < o - 1; n++) {
		let o = t[n];
		e.j[o] ? a = e.j[o] : (a = new aC(r), a.jr = i.slice(), e.j[o] = a), e = a;
	}
	return a = new aC(n), a.jr = i.slice(), e.j[t[o - 1]] = a, a;
}
function Tw(e) {
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
var Ew = {
	defaultProtocol: "http",
	events: null,
	format: Ow,
	formatHref: Ow,
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
function Dw(e, t = null) {
	let n = Object.assign({}, Ew);
	e && (n = Object.assign(n, e instanceof Dw ? e.o : e));
	let r = n.ignoreTags, i = [];
	for (let e = 0; e < r.length; e++) i.push(r[e].toUpperCase());
	this.o = n, t && (this.defaultRender = t), this.ignoreTags = i;
}
Dw.prototype = {
	o: Ew,
	ignoreTags: [],
	defaultRender(e) {
		return e;
	},
	check(e) {
		return this.get("validate", e.toString(), e);
	},
	get(e, t, n) {
		let r = t != null, i = this.o[e];
		return i && (typeof i == "object" ? (i = n.t in i ? i[n.t] : Ew[e], typeof i == "function" && r && (i = i(t, n))) : typeof i == "function" && r && (i = i(t, n.t, n)), i);
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
function Ow(e) {
	return e;
}
function kw(e, t) {
	this.t = "token", this.v = e, this.tk = t;
}
kw.prototype = {
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
	toObject(e = Ew.defaultProtocol) {
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
function Aw(e, t) {
	class n extends kw {
		constructor(t, n) {
			super(t, n), this.t = e;
		}
	}
	for (let e in t) n.prototype[e] = t[e];
	return n.t = e, n;
}
var jw = Aw("email", {
	isLink: !0,
	toHref() {
		return "mailto:" + this.toString();
	}
}), Mw = Aw("text"), Nw = Aw("nl"), Pw = Aw("url", {
	isLink: !0,
	toHref(e = Ew.defaultProtocol) {
		return this.hasProtocol() ? this.v : `${e}://${this.v}`;
	},
	hasProtocol() {
		let e = this.tk;
		return e.length >= 2 && e[0].t !== dC && e[1].t === HC;
	}
}), Fw = (e) => new aC(e);
function Iw({ groups: e }) {
	let t = e.domain.concat([
		FC,
		LC,
		RC,
		zC,
		BC,
		VC,
		WC,
		KC,
		JC,
		gC,
		YC,
		XC,
		ZC,
		QC,
		rw,
		sw,
		iw,
		aw
	]), n = [
		IC,
		HC,
		UC,
		GC,
		qC,
		YC,
		$C,
		ew,
		nw,
		TC,
		EC,
		yC,
		bC,
		SC,
		xC,
		CC,
		wC,
		DC,
		OC,
		kC,
		AC,
		jC,
		MC,
		NC,
		PC
	], r = [
		FC,
		IC,
		LC,
		zC,
		BC,
		VC,
		WC,
		KC,
		JC,
		yC,
		bC,
		YC,
		XC,
		ZC,
		QC,
		$C,
		rw,
		sw,
		iw,
		aw
	], i = Fw(), a = Q(i, iw);
	X(a, r, a), X(a, e.domain, a);
	let o = Fw(), s = Fw(), c = Fw();
	X(i, e.domain, o), X(i, e.scheme, s), X(i, e.slashscheme, c), X(o, r, a), X(o, e.domain, o);
	let l = Q(o, RC);
	Q(a, RC, l), Q(s, RC, l), Q(c, RC, l);
	let u = Q(a, GC);
	X(u, r, a), X(u, e.domain, a);
	let d = Fw();
	X(l, e.domain, d), X(d, e.domain, d);
	let f = Q(d, GC);
	X(f, e.domain, d);
	let p = Fw(jw);
	X(f, e.tld, p), X(f, e.utld, p), Q(l, dC, p);
	let m = Q(d, JC);
	Q(m, JC, m), X(m, e.domain, d), X(p, e.domain, d), Q(p, GC, f), Q(p, JC, m), X(Q(p, HC), e.numeric, jw);
	let h = Q(o, JC), g = Q(o, GC);
	Q(h, JC, h), X(h, e.domain, o), X(g, r, a), X(g, e.domain, o);
	let _ = Fw(Pw);
	X(g, e.tld, _), X(g, e.utld, _), X(_, e.domain, o), X(_, r, a), Q(_, GC, g), Q(_, JC, h), Q(_, RC, l);
	let v = Q(_, HC), y = Fw(Pw);
	X(v, e.numeric, y);
	let b = Fw(Pw), x = Fw();
	X(b, t, b), X(b, n, x), X(x, t, b), X(x, n, x), Q(_, rw, b), Q(y, rw, b);
	let S = Q(s, HC), C = Q(Q(Q(c, HC), rw), rw);
	X(s, e.domain, o), Q(s, GC, g), Q(s, JC, h), X(c, e.domain, o), Q(c, GC, g), Q(c, JC, h), X(S, e.domain, b), Q(S, rw, b), Q(S, $C, b), X(C, e.domain, b), X(C, t, b), Q(C, rw, b);
	let w = [
		[yC, bC],
		[xC, SC],
		[CC, wC],
		[TC, EC],
		[DC, OC],
		[kC, AC],
		[jC, MC],
		[NC, PC]
	];
	for (let e = 0; e < w.length; e++) {
		let [r, i] = w[e], a = Q(b, r);
		Q(x, r, a), Q(a, i, b);
		let o = Fw(Pw);
		X(a, t, o);
		let s = Fw();
		X(a, n), X(o, t, o), X(o, n, s), X(s, t, o), X(s, n, s), Q(o, i, b), Q(s, i, b);
	}
	return Q(i, dC, _), Q(i, vC, Nw), {
		start: i,
		tokens: cw
	};
}
function Lw(e, t, n) {
	let r = n.length, i = 0, a = [], o = [];
	for (; i < r;) {
		let s = e, c = null, l = null, u = 0, d = null, f = -1;
		for (; i < r && !(c = s.go(n[i].t));) o.push(n[i++]);
		for (; i < r && (l = c || s.go(n[i].t));) c = null, s = l, s.accepts() ? (f = 0, d = s) : f >= 0 && f++, i++, u++;
		if (f < 0) i -= u, i < r && (o.push(n[i]), i++);
		else {
			o.length > 0 && (a.push(Rw(Mw, t, o)), o = []), i -= f, u -= f;
			let e = d.t, r = n.slice(i - u, i);
			a.push(Rw(e, t, r));
		}
	}
	return o.length > 0 && a.push(Rw(Mw, t, o)), a;
}
function Rw(e, t, n) {
	let r = n[0].s, i = n[n.length - 1].e;
	return new e(t.slice(r, i), n);
}
var zw = typeof console < "u" && console && console.warn || (() => {}), Bw = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", $ = {
	scanner: null,
	parser: null,
	tokenQueue: [],
	pluginQueue: [],
	customSchemes: [],
	initialized: !1
};
function Vw(e, t) {
	if (typeof t != "function") throw Error(`linkifyjs: Invalid plugin ${t} (expects function)`);
	for (let n = 0; n < $.pluginQueue.length; n++) if (e === $.pluginQueue[n][0]) {
		zw(`linkifyjs: plugin "${e}" already registered - will be overwritten`), $.pluginQueue[n] = [e, t];
		return;
	}
	$.pluginQueue.push([e, t]), $.initialized && zw(`linkifyjs: already initialized - will not register plugin "${e}" ${Bw}`);
}
function Hw(e, t = !1) {
	if ($.initialized && zw(`linkifyjs: already initialized - will not register custom scheme "${e}" ${Bw}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(e)) throw Error("linkifyjs: incorrect scheme format.\n1. Must only contain digits, lowercase ASCII letters or \"-\"\n2. Cannot start or end with \"-\"\n3. \"-\" cannot repeat");
	$.customSchemes.push([e, t]);
}
function Uw() {
	$.scanner = xw($.customSchemes);
	for (let e = 0; e < $.tokenQueue.length; e++) $.tokenQueue[e][1]({ scanner: $.scanner });
	$.parser = Iw($.scanner.tokens);
	for (let e = 0; e < $.pluginQueue.length; e++) $.pluginQueue[e][1]({
		scanner: $.scanner,
		parser: $.parser
	});
	return $.initialized = !0, $;
}
function Ww(e) {
	return $.initialized || Uw(), Lw($.parser.start, e, Sw($.scanner.start, e));
}
Ww.scan = Sw;
function Gw(e, t = null, n = null) {
	if (t && typeof t == "object") {
		if (n) throw Error(`linkifyjs: Invalid link type ${t}; must be a string`);
		n = t, t = null;
	}
	let r = new Dw(n), i = Ww(e), a = [];
	for (let e = 0; e < i.length; e++) {
		let n = i[e];
		n.isLink && (!t || n.t === t) && r.check(n) && a.push(n.toFormattedObject(r));
	}
	return a;
}
function Kw(e, t = null) {
	let n = Ww(e);
	return n.length === 1 && n[0].isLink && (!t || n[0].t === t);
}
//#endregion
//#region ../../node_modules/linkify-react/dist/linkify-react.mjs
function qw(t, n, r) {
	let i = Ww(t), a = [];
	for (let t = 0; t < i.length; t++) {
		let o = i[t];
		if (o.t === "nl" && n.get("nl2br")) {
			let t = `__linkify-el-${r.elementId++}`;
			a.push(e.createElement("br", { key: t }));
		} else if (!o.isLink || !n.check(o)) a.push(o.toString());
		else {
			let t = n.render(o);
			if (!("key" in t.props)) {
				let n = `__linkify-el-${r.elementId++}`, i = Object.assign({ key: n }, t.props);
				t = e.cloneElement(t, i);
			}
			a.push(t);
		}
	}
	return a;
}
function Jw(t, n, r) {
	if (e.Children.count(t.props.children) === 0) return t;
	let i = [];
	e.Children.forEach(t.props.children, (t) => {
		typeof t == "string" ? i.push.apply(i, qw(t, n, r)) : e.isValidElement(t) ? typeof t.type == "string" && n.ignoreTags.indexOf(t.type.toUpperCase()) >= 0 ? i.push(t) : i.push(Jw(t, n, r)) : i.push(t);
	});
	let a = `__linkify-el-${r.elementId++}`, o = Object.assign({ key: a }, t.props);
	return e.cloneElement(t, o, i);
}
var Yw = (t) => {
	let n = 0, r = ({ tagName: t, attributes: r, content: i }) => (r.key = `__linkify-lnk-${n++}`, r.class && (r.className = r.class, delete r.class), e.createElement(t, r, i)), i = { key: "__linkify-wrapper" };
	for (let e in t) e !== "options" && e !== "as" && e !== "tagName" && e !== "children" && (i[e] = t[e]);
	let a = new Dw(t.options, r), o = t.as || t.tagName || e.Fragment || "span", s = t.children;
	return Jw(e.createElement(o, i, s), a, { elementId: 0 });
}, Xw = { container: "_container_15awj_8" };
//#endregion
//#region ../../node_modules/linkify-string/dist/linkify-string.mjs
function Zw(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Qw(e) {
	return e.replace(/"/g, "&quot;");
}
function $w(e) {
	let t = [];
	for (let n in e) {
		let r = e[n] + "";
		t.push(`${n}="${Qw(r)}"`);
	}
	return t.join(" ");
}
function eT({ tagName: e, attributes: t, content: n }) {
	return `<${e} ${$w(t)}>${Zw(n)}</${e}>`;
}
function tT(e, t = {}) {
	t = new Dw(t, eT);
	let n = Ww(e), r = [];
	for (let e = 0; e < n.length; e++) {
		let i = n[e];
		i.t === "nl" && t.get("nl2br") ? r.push("<br>\n") : !i.isLink || !t.check(i) ? r.push(Zw(i.toString())) : r.push(t.render(i));
	}
	return r.join("");
}
String.prototype.linkify || Object.defineProperty(String.prototype, "linkify", {
	writable: !1,
	value: function(e) {
		return tT(this, e);
	}
});
//#endregion
//#region ../../node_modules/linkify-html/dist/linkify-html.mjs
var nT = {
	amp: "&",
	gt: ">",
	lt: "<",
	nbsp: "\xA0",
	quot: "\""
}, rT = /^#[xX]([A-Fa-f0-9]+)$/, iT = /^#([0-9]+)$/, aT = /^([A-Za-z0-9]+)$/, oT = function() {
	function e(e) {
		this.named = e;
	}
	return e.prototype.parse = function(e) {
		if (e) {
			var t = e.match(rT);
			if (t) return String.fromCharCode(parseInt(t[1], 16));
			if (t = e.match(iT), t) return String.fromCharCode(parseInt(t[1], 10));
			if (t = e.match(aT), t) return this.named[t[1]] || "&" + t[1] + ";";
		}
	}, e;
}(), sT = /[\t\n\f ]/, cT = /[A-Za-z]/, lT = /\r\n?/g;
function uT(e) {
	return sT.test(e);
}
function dT(e) {
	return cT.test(e);
}
function fT(e) {
	return e.replace(lT, "\n");
}
var pT = function() {
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
				e === "!" ? this.transitionTo("markupDeclarationOpen") : e === "/" ? this.transitionTo("endTagOpen") : (e === "@" || e === ":" || dT(e)) && (this.transitionTo("tagName"), this.tagNameBuffer = "", this.delegate.beginStartTag(), this.appendToTagName(e));
			},
			markupDeclarationOpen: function() {
				var e = this.consume();
				e === "-" && this.peek() === "-" ? (this.consume(), this.transitionTo("commentStart"), this.delegate.beginComment()) : e.toUpperCase() + this.input.substring(this.index, this.index + 6).toUpperCase() === "DOCTYPE" && (this.consume(), this.consume(), this.consume(), this.consume(), this.consume(), this.consume(), this.transitionTo("doctype"), this.delegate.beginDoctype && this.delegate.beginDoctype());
			},
			doctype: function() {
				uT(this.consume()) && this.transitionTo("beforeDoctypeName");
			},
			beforeDoctypeName: function() {
				var e = this.consume();
				uT(e) || (this.transitionTo("doctypeName"), this.delegate.appendToDoctypeName && this.delegate.appendToDoctypeName(e.toLowerCase()));
			},
			doctypeName: function() {
				var e = this.consume();
				uT(e) ? this.transitionTo("afterDoctypeName") : e === ">" ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : this.delegate.appendToDoctypeName && this.delegate.appendToDoctypeName(e.toLowerCase());
			},
			afterDoctypeName: function() {
				var e = this.consume();
				if (!uT(e)) {
					if (e === ">") this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData");
					else {
						var t = e.toUpperCase() + this.input.substring(this.index, this.index + 5).toUpperCase(), n = t.toUpperCase() === "PUBLIC", r = t.toUpperCase() === "SYSTEM";
						(n || r) && (this.consume(), this.consume(), this.consume(), this.consume(), this.consume(), this.consume()), n ? this.transitionTo("afterDoctypePublicKeyword") : r && this.transitionTo("afterDoctypeSystemKeyword");
					}
				}
			},
			afterDoctypePublicKeyword: function() {
				var e = this.peek();
				if (uT(e)) this.transitionTo("beforeDoctypePublicIdentifier"), this.consume();
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
				uT(e) ? this.transitionTo("betweenDoctypePublicAndSystemIdentifiers") : e === ">" ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : e === "\"" ? this.transitionTo("doctypeSystemIdentifierDoubleQuoted") : e === "'" && this.transitionTo("doctypeSystemIdentifierSingleQuoted");
			},
			betweenDoctypePublicAndSystemIdentifiers: function() {
				var e = this.consume();
				uT(e) || (e === ">" ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : e === "\"" ? this.transitionTo("doctypeSystemIdentifierDoubleQuoted") : e === "'" && this.transitionTo("doctypeSystemIdentifierSingleQuoted"));
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
				uT(e) || e === ">" && (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData"));
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
				uT(e) ? this.transitionTo("beforeAttributeName") : e === "/" ? this.transitionTo("selfClosingStartTag") : e === ">" ? (this.delegate.finishTag(), this.transitionTo("beforeData")) : this.appendToTagName(e);
			},
			endTagName: function() {
				var e = this.consume();
				uT(e) ? (this.transitionTo("beforeAttributeName"), this.tagNameBuffer = "") : e === "/" ? (this.transitionTo("selfClosingStartTag"), this.tagNameBuffer = "") : e === ">" ? (this.delegate.finishTag(), this.transitionTo("beforeData"), this.tagNameBuffer = "") : this.appendToTagName(e);
			},
			beforeAttributeName: function() {
				var e = this.peek();
				uT(e) ? this.consume() : e === "/" ? (this.transitionTo("selfClosingStartTag"), this.consume()) : e === ">" ? (this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : e === "=" ? (this.delegate.reportSyntaxError("attribute name cannot start with equals sign"), this.transitionTo("attributeName"), this.delegate.beginAttribute(), this.consume(), this.delegate.appendToAttributeName(e)) : (this.transitionTo("attributeName"), this.delegate.beginAttribute());
			},
			attributeName: function() {
				var e = this.peek();
				uT(e) ? (this.transitionTo("afterAttributeName"), this.consume()) : e === "/" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("selfClosingStartTag")) : e === "=" ? (this.transitionTo("beforeAttributeValue"), this.consume()) : e === ">" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : e === "\"" || e === "'" || e === "<" ? (this.delegate.reportSyntaxError(e + " is not a valid character within attribute names"), this.consume(), this.delegate.appendToAttributeName(e)) : (this.consume(), this.delegate.appendToAttributeName(e));
			},
			afterAttributeName: function() {
				var e = this.peek();
				uT(e) ? this.consume() : e === "/" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("selfClosingStartTag")) : e === "=" ? (this.consume(), this.transitionTo("beforeAttributeValue")) : e === ">" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.transitionTo("attributeName"), this.delegate.beginAttribute(), this.consume(), this.delegate.appendToAttributeName(e));
			},
			beforeAttributeValue: function() {
				var e = this.peek();
				uT(e) ? this.consume() : e === "\"" ? (this.transitionTo("attributeValueDoubleQuoted"), this.delegate.beginAttributeValue(!0), this.consume()) : e === "'" ? (this.transitionTo("attributeValueSingleQuoted"), this.delegate.beginAttributeValue(!0), this.consume()) : e === ">" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : (this.transitionTo("attributeValueUnquoted"), this.delegate.beginAttributeValue(!1), this.consume(), this.delegate.appendToAttributeValue(e));
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
				uT(e) ? (this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("beforeAttributeName")) : e === "/" ? (this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("selfClosingStartTag")) : e === "&" ? (this.consume(), this.delegate.appendToAttributeValue(this.consumeCharRef() || "&")) : e === ">" ? (this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : (this.consume(), this.delegate.appendToAttributeValue(e));
			},
			afterAttributeValueQuoted: function() {
				var e = this.peek();
				uT(e) ? (this.consume(), this.transitionTo("beforeAttributeName")) : e === "/" ? (this.consume(), this.transitionTo("selfClosingStartTag")) : e === ">" ? (this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : this.transitionTo("beforeAttributeName");
			},
			selfClosingStartTag: function() {
				this.peek() === ">" ? (this.consume(), this.delegate.markTagAsSelfClosing(), this.delegate.finishTag(), this.transitionTo("beforeData")) : this.transitionTo("beforeAttributeName");
			},
			endTagOpen: function() {
				var e = this.consume();
				(e === "@" || e === ":" || dT(e)) && (this.transitionTo("endTagName"), this.tagNameBuffer = "", this.delegate.beginEndTag(), this.appendToTagName(e));
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
		for (this.input += fT(e); this.index < this.input.length;) {
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
}(), mT = function() {
	function e(e, t) {
		t === void 0 && (t = {}), this.options = t, this.token = null, this.startLine = 1, this.startColumn = 0, this.tokens = [], this.tokenizer = new pT(this, e, t.mode), this._currentAttribute = void 0;
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
function hT(e, t) {
	return new mT(new oT(nT), t).tokenize(e);
}
var gT = "LinkifyResult", _T = "StartTag", vT = "EndTag", yT = "Chars", bT = "Comment", xT = "Doctype";
function ST(e, t = {}) {
	let n = hT(e), r = [], i = [], a = new Dw(t, TT);
	for (let e = 0; e < n.length; e++) {
		let t = n[e];
		if (t.type === _T) {
			r.push(t);
			let i = t.tagName.toUpperCase();
			if (!(i === "A" || a.ignoreTags.indexOf(i) >= 0)) continue;
			let o = r.length;
			wT(i, n, ++e, r), e += r.length - o - 1;
		} else if (t.type !== yT) r.push(t);
		else {
			let e = CT(t.chars, a);
			r.push.apply(r, e);
		}
	}
	for (let e = 0; e < r.length; e++) {
		let t = r[e];
		switch (t.type) {
			case gT:
				i.push(t.rendered);
				break;
			case _T: {
				let e = "<" + t.tagName;
				t.attributes.length > 0 && (e += " " + kT(t.attributes).join(" ")), t.selfClosing && (e += " /"), e += ">", i.push(e);
				break;
			}
			case vT:
				i.push(`</${t.tagName}>`);
				break;
			case yT:
				i.push(ET(t.chars));
				break;
			case bT:
				i.push(`<!--${ET(t.chars)}-->`);
				break;
			case xT: {
				let e = `<!DOCTYPE ${t.name}`;
				t.publicIdentifier && (e += ` PUBLIC "${t.publicIdentifier}"`), t.systemIdentifier && (e += ` "${t.systemIdentifier}"`), e += ">", i.push(e);
				break;
			}
		}
	}
	return i.join("");
}
function CT(e, t) {
	let n = Ww(e), r = [];
	for (let e = 0; e < n.length; e++) {
		let i = n[e];
		i.t === "nl" && t.get("nl2br") ? r.push({
			type: _T,
			tagName: "br",
			attributes: [],
			selfClosing: !0
		}) : !i.isLink || !t.check(i) ? r.push({
			type: yT,
			chars: i.toString()
		}) : r.push({
			type: gT,
			rendered: t.render(i)
		});
	}
	return r;
}
function wT(e, t, n, r) {
	let i = 1;
	for (; n < t.length && i > 0;) {
		let a = t[n];
		a.type === _T && a.tagName.toUpperCase() === e ? i++ : a.type === vT && a.tagName.toUpperCase() === e && i--, r.push(a), n++;
	}
	return r;
}
function TT({ tagName: e, attributes: t, content: n }) {
	return `<${e} ${OT(t)}>${ET(n)}</${e}>`;
}
function ET(e) {
	return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function DT(e) {
	return e.replace(/"/g, "&quot;");
}
function OT(e) {
	let t = [];
	for (let n in e) {
		let r = e[n] + "";
		t.push(`${n}="${DT(r)}"`);
	}
	return t.join(" ");
}
function kT(e) {
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n][0], i = e[n][1] + "";
		t.push(`${r}="${DT(i)}"`);
	}
	return t;
}
//#endregion
//#region src/core/utils/linkify.ts
var AT = [
	"file",
	"mailto",
	"http",
	"https",
	"ftp",
	"ftps"
], jT = [
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
], MT = [...AT, ...jT], NT = /* @__PURE__ */ function(e) {
	return e.URL = "url", e.UserId = "userid", e.RoomAlias = "roomalias", e;
}({});
function PT({ scanner: e, parser: t, token: n, name: r }) {
	let { DOT: i, NUM: a, COLON: o, SYM: s, SLASH: c, EQUALS: l, HYPHEN: u, UNDERSCORE: d } = e.tokens, { domain: f } = e.tokens.groups, p = [
		i,
		s,
		c,
		l,
		d,
		u
	], m = [u], h = new aC(Aw(r, { isLink: !0 })), g = new aC(Aw(r, { isLink: !0 })), _ = t.start.tt(n), v = new aC();
	_.ta(f, v), _.ta(p, v), v.ta(f, v), v.ta(p, v);
	let y = v.tt(o);
	y.ta(f, h), y.ta(m, h), h.ta(f, h), h.ta(m, h), h.tt(i, y), h.tt(o).tt(a, g);
}
function FT({ urlListener: e, roomAliasListener: t, userIdListener: n, urlTargetTransformer: r, hrefTransformer: i, onLinkClick: a }) {
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
			let n = { [`data-${RT}`]: "true" }, r = o(e, t);
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
function IT(e) {
	return Gw(e);
}
function LT(e) {
	return Kw(e);
}
var RT = "linkified", zT = !1;
function BT() {
	zT ||= (Vw("roomalias", ({ scanner: e, parser: t }) => {
		let n = e.tokens.POUND;
		PT({
			scanner: e,
			parser: t,
			token: n,
			name: "roomalias"
		});
	}), Vw("userid", ({ scanner: e, parser: t }) => {
		let n = e.tokens.AT;
		PT({
			scanner: e,
			parser: t,
			token: n,
			name: "userid"
		});
	}), Hw("mxc", !1), MT.forEach((e) => {
		AT.includes(e) || Hw(e, jT.includes(e));
	}), !0);
}
BT();
//#endregion
//#region src/core/utils/LinkedText/LinkedTextContext.tsx
var VT = i(null);
VT.displayName = "LinkedTextContext";
function HT() {
	let e = l(VT);
	if (!e) throw Error("useLinkedTextContextOpts must be used within an LinkedTextContext.Provider");
	return e;
}
//#endregion
//#region src/core/utils/LinkedText/LinkedText.tsx
function UT({ children: e, className: n, onLinkClick: r, ...i }) {
	let a = FT({
		...HT(),
		onLinkClick: r
	});
	return /* @__PURE__ */ t.createElement(Yw, {
		className: (0, U.default)(Xw.container, n),
		as: j,
		options: {
			...a,
			render: D
		},
		...i
	}, e);
}
//#endregion
//#region src/event-tiles/UrlPreviewGroupView/LinkPreview/LinkPreview.tsx
function WT({ onImageClick: e, ...n }) {
	let { translate: r } = W(), i = p(() => n.showTooltipOnLink ? new URL(n.link, window.location.href).toString() : null, [n.link, n.showTooltipOnLink]), a = c((t) => {
		t.button != 0 || t.metaKey || (t.preventDefault(), n.image?.imageFull && e());
	}, [n.image?.imageFull, e]), o;
	n.image?.imageThumb && (o = /* @__PURE__ */ t.createElement("button", {
		"aria-label": r("timeline|url_preview|view_image"),
		className: US.image,
		onClick: a
	}, /* @__PURE__ */ t.createElement("img", {
		className: US.thumbnail,
		src: n.image.imageThumb,
		alt: ""
	})));
	let s = /* @__PURE__ */ t.createElement("a", {
		className: US.link,
		href: n.link,
		target: "_blank",
		rel: "noreferrer noopener"
	}, n.title);
	return /* @__PURE__ */ t.createElement("div", { className: (0, U.default)(US.container) }, /* @__PURE__ */ t.createElement("div", { className: US.wrapImageCaption }, o, /* @__PURE__ */ t.createElement("div", { className: US.caption }, /* @__PURE__ */ t.createElement(j, {
		type: "body",
		size: "md",
		className: US.title
	}, i ? /* @__PURE__ */ t.createElement(M, { label: i }, s) : s, n.siteName && /* @__PURE__ */ t.createElement(j, {
		as: "span",
		size: "md",
		weight: "regular"
	}, " - " + n.siteName)), n.description && /* @__PURE__ */ t.createElement(UT, { className: US.description }, n.description))));
}
var GT = {
	previewGroup: "_previewGroup_vzeae_8",
	compactLayout: "_compactLayout_vzeae_15",
	toggleButton: "_toggleButton_vzeae_20",
	wrapper: "_wrapper_vzeae_29"
};
//#endregion
//#region src/event-tiles/UrlPreviewGroupView/UrlPreviewGroupView.tsx
function KT({ vm: e }) {
	let { translate: n } = W(), { previews: r, totalPreviewCount: i, previewsLimited: a, overPreviewLimit: o, compactLayout: s } = Y(e);
	if (r.length === 0) return null;
	let c;
	return o && (c = /* @__PURE__ */ t.createElement(y, {
		className: GT.toggleButton,
		kind: "tertiary",
		size: "sm",
		onClick: e.onTogglePreviewLimit
	}, a ? n("timeline|url_preview|show_n_more", { count: i - r.length }) : n("action|collapse"))), /* @__PURE__ */ t.createElement("div", { className: GT.wrapper }, /* @__PURE__ */ t.createElement("div", { className: (0, U.default)(GT.previewGroup, s && GT.compactLayout) }, r.map((n) => /* @__PURE__ */ t.createElement(WT, {
		key: n.link,
		onImageClick: () => e.onImageClick(n),
		...n
	})), c), /* @__PURE__ */ t.createElement(E, {
		size: "20px",
		onClick: e.onHideClick,
		"aria-label": n("timeline|url_preview|close")
	}, /* @__PURE__ */ t.createElement(FS, null)));
}
var qT = {
	readMarker: "_readMarker_1rvym_8",
	line: "_line_1rvym_15"
};
//#endregion
//#region src/room/timeline/ReadMarker/ReadMarker.tsx
function JT({ eventId: e, kind: n, showLine: r = !0, onCurrentMarkerRef: i, onGhostLineRef: a, onGhostTransitionEnd: o, className: s }) {
	let c = null;
	return n === "ghost" ? c = /* @__PURE__ */ t.createElement("hr", {
		className: qT.line,
		ref: a,
		onTransitionEnd: o,
		"data-eventid": e
	}) : r && (c = /* @__PURE__ */ t.createElement("hr", { className: qT.line })), /* @__PURE__ */ t.createElement("li", {
		className: (0, U.default)(s, qT.readMarker),
		ref: n === "current" ? i : void 0,
		"data-scroll-tokens": n === "current" ? e : void 0
	}, c);
}
//#endregion
//#region src/core/utils/applyReplacerOnString.tsx
function YT(e, n) {
	return n ? (Array.isArray(e) ? e : [e]).map((e, r) => typeof e == "string" ? /* @__PURE__ */ t.createElement(t.Fragment, { key: r }, n(new pe(e), 0) || e) : e) : e;
}
//#endregion
//#region src/room/timeline/event-tile/body/EventContentBodyView/EventContentBodyView.tsx
var XT = s(function({ vm: e, as: n, ref: r }) {
	let { body: i, formattedBody: a, replacer: o, className: s, dir: c, parseFormattedBody: l } = Y(e), u = a ? (l ?? ((e, t) => fe(e, t ? { replace: t } : void 0)))(a, o) : YT(i, o);
	return n === "span" ? /* @__PURE__ */ t.createElement("span", {
		ref: r,
		className: s,
		dir: c
	}, u) : /* @__PURE__ */ t.createElement("div", {
		ref: r,
		className: s,
		dir: c
	}, u);
});
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/arrow-down.js
function ZT(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M12 4.5a1 1 0 0 1 1 1v10.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 1 1 1.414-1.414L11 16.086V5.5a1 1 0 0 1 1-1" })
	});
}
ZT.displayName = "ArrowDownIcon";
var QT = a(ZT);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/arrow-right.js
function $T(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M11.793 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L16.086 13H5.5a1 1 0 1 1 0-2h10.586l-4.293-4.293a1 1 0 0 1 0-1.414" })
	});
}
$T.displayName = "ArrowRightIcon";
var eE = a($T);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/attachment.js
function tE(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M11.5 22q-2.3 0-3.9-1.6T6 16.5V6q0-1.65 1.175-2.825T10 2t2.825 1.175T14 6v9.5q0 1.05-.725 1.775T11.5 18t-1.775-.725T9 15.5V6.75A.73.73 0 0 1 9.75 6a.73.73 0 0 1 .75.75v8.75q0 .424.287.712.288.288.713.288.424 0 .713-.288a.97.97 0 0 0 .287-.712V6q0-1.05-.725-1.775T10 3.5t-1.775.725T7.5 6v10.5q0 1.65 1.175 2.825T11.5 20.5t2.825-1.175T15.5 16.5V6.75a.73.73 0 0 1 .75-.75.73.73 0 0 1 .75.75v9.75q0 2.3-1.6 3.9T11.5 22" })
	});
}
tE.displayName = "AttachmentIcon";
var nE = a(tE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/block.js
function rE(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M12 22a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12q0-1.35-.437-2.6A8 8 0 0 0 18.3 7.1L7.1 18.3q1.05.825 2.3 1.262T12 20m-6.3-3.1L16.9 5.7a8 8 0 0 0-2.3-1.263A7.8 7.8 0 0 0 12 4Q8.65 4 6.325 6.325T4 12q0 1.35.438 2.6A8 8 0 0 0 5.7 16.9" })
	});
}
rE.displayName = "BlockIcon";
var iE = a(rE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/chat.js
function aE(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "m1.5 21.25 1.45-4.95a10.2 10.2 0 0 1-.712-2.1A10.2 10.2 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22q-1.125 0-2.2-.238a10.2 10.2 0 0 1-2.1-.712L2.75 22.5a.94.94 0 0 1-1-.25.94.94 0 0 1-.25-1m2.45-1.2 3.2-.95a1 1 0 0 1 .275-.062q.15-.013.275-.013.225 0 .438.038.212.036.412.137a7.4 7.4 0 0 0 1.675.6Q11.1 20 12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12q0 .9.2 1.775t.6 1.675q.176.325.188.688t-.088.712z" })
	});
}
aE.displayName = "ChatIcon";
var oE = a(aE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/check.js
function sE(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M9.55 17.575q-.2 0-.375-.062a.9.9 0 0 1-.325-.213L4.55 13q-.274-.274-.262-.713.012-.437.287-.712a.95.95 0 0 1 .7-.275q.425 0 .7.275L9.55 15.15l8.475-8.475q.274-.275.713-.275.437 0 .712.275.275.274.275.713 0 .437-.275.712l-9.2 9.2q-.15.15-.325.212a1.1 1.1 0 0 1-.375.063" })
	});
}
sE.displayName = "CheckIcon";
var cE = a(sE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-down.js
function lE(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M12 14.95q-.2 0-.375-.062a.9.9 0 0 1-.325-.213l-4.6-4.6a.95.95 0 0 1-.275-.7q0-.425.275-.7a.95.95 0 0 1 .7-.275q.425 0 .7.275l3.9 3.9 3.9-3.9a.95.95 0 0 1 .7-.275q.425 0 .7.275a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7l-4.6 4.6q-.15.15-.325.212a1.1 1.1 0 0 1-.375.063" })
	});
}
lE.displayName = "ChevronDownIcon";
var uE = a(lE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-left.js
function dE(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "m13.3 17.3-4.6-4.6a.9.9 0 0 1-.213-.325A1.1 1.1 0 0 1 8.425 12q0-.2.062-.375A.9.9 0 0 1 8.7 11.3l4.6-4.6a.95.95 0 0 1 .7-.275q.425 0 .7.275a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7L10.8 12l3.9 3.9a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275" })
	});
}
dE.displayName = "ChevronLeftIcon";
var fE = a(dE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-right.js
function pE(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M8.7 17.3a.95.95 0 0 1-.275-.7q0-.425.275-.7l3.9-3.9-3.9-3.9a.95.95 0 0 1-.275-.7q0-.425.275-.7a.95.95 0 0 1 .7-.275q.425 0 .7.275l4.6 4.6q.15.15.213.325.062.175.062.375t-.062.375a.9.9 0 0 1-.213.325l-4.6 4.6a.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275" })
	});
}
pE.displayName = "ChevronRightIcon";
var mE = a(pE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/collapse.js
function hE(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M12 11.034a1 1 0 0 0 .29.702l.005.005c.18.18.43.29.705.29h8a1 1 0 0 0 0-2h-5.586L22 3.445a1 1 0 0 0-1.414-1.414L14 8.617V3.031a1 1 0 1 0-2 0zm0 1.963a1 1 0 0 0-.29-.702l-.005-.004A1 1 0 0 0 11 12H3a1 1 0 1 0 0 2h5.586L2 20.586A1 1 0 1 0 3.414 22L10 15.414V21a1 1 0 0 0 2 0z" })
	});
}
hE.displayName = "CollapseIcon";
var gE = a(hE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/compose.js
function _E(e, t) {
	return /*#__PURE__*/ de("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ N("path", {
			fillRule: "evenodd",
			d: "M16.937 2.82a2 2 0 0 1 2.828 0l1.415 1.414a2 2 0 0 1 0 2.829l-7.071 7.07c-.195.196-.42.342-.66.44a1 1 0 0 1-.168.072l-3.993 1.331a1 1 0 0 1-1.265-1.265l1.331-3.992q.03-.09.073-.168m10.338-4.903-6.717 6.718-1.414-1.414 6.717-6.718z",
			clipRule: "evenodd"
		}), /*#__PURE__*/ N("path", { d: "M3 5a2 2 0 0 1 2-2h6a1 1 0 1 1 0 2H5v14h14v-6a1 1 0 1 1 2 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })]
	});
}
_E.displayName = "ComposeIcon";
var vE = a(_E);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/delete.js
function yE(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M7 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 5 19V6a.97.97 0 0 1-.713-.287A.97.97 0 0 1 4 5q0-.424.287-.713A.97.97 0 0 1 5 4h4q0-.424.287-.712A.97.97 0 0 1 10 3h4q.424 0 .713.288Q15 3.575 15 4h4q.424 0 .712.287Q20 4.576 20 5t-.288.713A.97.97 0 0 1 19 6v13q0 .824-.587 1.413A1.93 1.93 0 0 1 17 21zM7 6v13h10V6zm2 10q0 .424.287.712Q9.576 17 10 17t.713-.288A.97.97 0 0 0 11 16V9a.97.97 0 0 0-.287-.713A.97.97 0 0 0 10 8a.97.97 0 0 0-.713.287A.97.97 0 0 0 9 9zm4 0q0 .424.287.712.288.288.713.288.424 0 .713-.288A.97.97 0 0 0 15 16V9a.97.97 0 0 0-.287-.713A.97.97 0 0 0 14 8a.97.97 0 0 0-.713.287A.97.97 0 0 0 13 9z" })
	});
}
yE.displayName = "DeleteIcon";
var bE = a(yE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/dial-pad.js
function xE(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M12 18.6c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8M6.6 2.4c-.99 0-1.8.81-1.8 1.8S5.61 6 6.6 6s1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0 5.4c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0 5.4c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8M17.4 6c.99 0 1.8-.81 1.8-1.8s-.81-1.8-1.8-1.8-1.8.81-1.8 1.8.81 1.8 1.8 1.8M12 13.2c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m5.4 0c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0-5.4c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m-5.4 0c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0-5.4c-.99 0-1.8.81-1.8 1.8S11.01 6 12 6s1.8-.81 1.8-1.8-.81-1.8-1.8-1.8" })
	});
}
xE.displayName = "DialPadIcon";
var SE = a(xE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/download.js
function CE(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M12 15.575q-.2 0-.375-.062a.9.9 0 0 1-.325-.213l-3.6-3.6a.95.95 0 0 1-.275-.7q0-.425.275-.7.274-.275.712-.288t.713.263L11 12.15V5q0-.424.287-.713A.97.97 0 0 1 12 4q.424 0 .713.287Q13 4.576 13 5v7.15l1.875-1.875q.274-.274.713-.263.437.014.712.288a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7l-3.6 3.6q-.15.15-.325.212a1.1 1.1 0 0 1-.375.063M6 20q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 18v-2q0-.424.287-.713A.97.97 0 0 1 5 15q.424 0 .713.287Q6 15.576 6 16v2h12v-2q0-.424.288-.713A.97.97 0 0 1 19 15q.424 0 .712.287.288.288.288.713v2q0 .824-.587 1.413A1.93 1.93 0 0 1 18 20z" })
	});
}
CE.displayName = "DownloadIcon";
var wE = a(CE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/drag-list.js
function TE(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M5 15a.97.97 0 0 1-.713-.287A.97.97 0 0 1 4 14q0-.424.287-.713A.97.97 0 0 1 5 13h14q.424 0 .712.287.288.288.288.713 0 .424-.288.713A.97.97 0 0 1 19 15zm0-4a.97.97 0 0 1-.713-.287A.97.97 0 0 1 4 10q0-.424.287-.713A.97.97 0 0 1 5 9h14q.424 0 .712.287Q20 9.576 20 10t-.288.713A.97.97 0 0 1 19 11z" })
	});
}
TE.displayName = "DragListIcon";
var EE = a(TE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/edit.js
function DE(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", {
			fillRule: "evenodd",
			d: "M15.706 2.637a2 2 0 0 1 2.829 0l2.828 2.828a2 2 0 0 1 0 2.829L9.605 20.052a1 1 0 0 1-.465.263L3.483 21.73a1 1 0 0 1-1.212-1.213l1.414-5.657a1 1 0 0 1 .263-.465zm1.224 7.262L14.102 7.07l-8.544 8.544-.943 3.771 3.771-.943z",
			clipRule: "evenodd"
		})
	});
}
DE.displayName = "EditIcon";
var OE = a(DE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/email-solid.js
function kE(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 5.111a1 1 0 0 0 .514.874l7 3.89a1 1 0 0 0 .972 0l7-3.89a1 1 0 1 0-.972-1.748L12 11.856 5.486 8.237A1 1 0 0 0 4 9.111" })
	});
}
kE.displayName = "EmailSolidIcon";
var AE = a(kE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/error-solid.js
function jE(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M12 17q.424 0 .713-.288A.97.97 0 0 0 13 16a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 15a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 16q0 .424.287.712.288.288.713.288m0-4q.424 0 .713-.287A.97.97 0 0 0 13 12V8a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 7a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 8v4q0 .424.287.713.288.287.713.287m0 9a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22" })
	});
}
jE.displayName = "ErrorSolidIcon";
var ME = a(jE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/expand.js
function NE(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M21 3.997a1 1 0 0 0-.29-.702l-.005-.004A1 1 0 0 0 20 3h-8a1 1 0 1 0 0 2h5.586L5 17.586V12a1 1 0 1 0-2 0v8.003a1 1 0 0 0 .29.702l.005.004c.18.18.43.291.705.291h8a1 1 0 1 0 0-2H6.414L19 6.414V12a1 1 0 1 0 2 0z" })
	});
}
NE.displayName = "ExpandIcon";
var PE = a(NE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/explore.js
function FE(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M12 13a.97.97 0 0 1-.713-.287A.97.97 0 0 1 11 12q0-.424.287-.713A.97.97 0 0 1 12 11q.424 0 .713.287.287.288.287.713 0 .424-.287.713A.97.97 0 0 1 12 13m0 9a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20m0 0q-3.35 0-5.675-2.325T4 12t2.325-5.675T12 4t5.675 2.325T20 12t-2.325 5.675T12 20m1.675-5.85q.15-.075.275-.2t.2-.275l2.925-6.25q.125-.25-.062-.437-.188-.188-.438-.063l-6.25 2.925q-.15.075-.275.2t-.2.275l-2.925 6.25q-.125.25.063.438.186.186.437.062z" })
	});
}
FE.displayName = "ExploreIcon";
var IE = a(FE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/favourite.js
function LE(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M13.905 9.378 12 5.52l-1.905 3.86-4.259.618 3.082 3.004-.727 4.242L12 15.24l3.81 2.003-.728-4.242 3.082-3.004zM8.767 7.55l2.336-4.733a1 1 0 0 1 1.794 0l2.336 4.733 5.223.76a1 1 0 0 1 .555 1.705L17.23 13.7l.892 5.202a1 1 0 0 1-1.45 1.054L12 17.5l-4.672 2.456a1 1 0 0 1-1.451-1.054l.892-5.202-3.78-3.685a1 1 0 0 1 .555-1.706z" })
	});
}
LE.displayName = "FavouriteIcon";
var RE = a(LE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/file-error.js
function zE(e, t) {
	return /*#__PURE__*/ de("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ N("path", { d: "M6 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 20V4q0-.824.588-1.412A1.93 1.93 0 0 1 6 2h7.175a1.98 1.98 0 0 1 1.4.575l4.85 4.85q.275.275.425.638.15.361.15.762v3.516A6 6 0 0 0 18 12V9h-4a.97.97 0 0 1-.713-.287A.97.97 0 0 1 13 8V4H6v16h6.341c.264.745.67 1.423 1.187 2z" }), /*#__PURE__*/ N("path", { d: "M18 14a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m-1 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0" })]
	});
}
zE.displayName = "FileErrorIcon";
var BE = a(zE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/history.js
function VE(e, t) {
	return /*#__PURE__*/ de("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ N("path", { d: "M18.93 8A8 8 0 1 1 4 12a1 1 0 1 0-2 0c0 5.523 4.477 10 10 10s10-4.477 10-10a10 10 0 0 0-.832-4A10 10 0 0 0 12 2a9.99 9.99 0 0 0-8 3.999V4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2H5.755A7.99 7.99 0 0 1 12 4a8 8 0 0 1 6.93 4" }), /*#__PURE__*/ N("path", { d: "M13 8a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l2.83 2.83a1 1 0 0 0 1.414-1.414L13 11.586z" })]
	});
}
VE.displayName = "HistoryIcon";
var HE = a(VE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/home.js
function UE(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", {
			fillRule: "evenodd",
			d: "M16 11v8h3V9.177l-7-3.889-7 3.889V19h3v-8zm-6 10H5a2 2 0 0 1-2-2V9.177a2 2 0 0 1 1.029-1.748l7-3.89a2 2 0 0 1 1.942 0l7 3.89A2 2 0 0 1 21 9.177V19a2 2 0 0 1-2 2h-5v-8h-4z",
			clipRule: "evenodd"
		})
	});
}
UE.displayName = "HomeIcon";
var WE = a(UE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/image-error.js
function GE(e, t) {
	return /*#__PURE__*/ de("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ N("path", { d: "M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.803a6 6 0 0 1-.72-2H5v-3.172l4-4 3.585 3.585a6 6 0 0 1 1.172-1.656l-3.343-3.343a2 2 0 0 0-2.828 0L5 13V5h14v7.083c.718.12 1.393.368 2 .72V5a2 2 0 0 0-2-2z" }), /*#__PURE__*/ N("path", { d: "M17 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0m1 5a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m-1 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0" })]
	});
}
GE.displayName = "ImageErrorIcon";
var KE = a(GE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/inline-code.js
function qE(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M14.958 5.62a1 1 0 0 0-1.916-.574l-4 13.333a1 1 0 0 0 1.916.575zM5.974 7.232a1 1 0 0 0-1.409.128l-3.333 4a1 1 0 0 0 0 1.28l3.333 4a1 1 0 1 0 1.537-1.28L3.302 12l2.8-3.36a1 1 0 0 0-.128-1.408m12.053 0a1 1 0 0 1 1.408.128l3.333 4a1 1 0 0 1 0 1.28l-3.333 4a1 1 0 1 1-1.537-1.28l2.8-3.36-2.8-3.36a1 1 0 0 1 .128-1.408" })
	});
}
qE.displayName = "InlineCodeIcon";
var JE = a(qE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/leave.js
function YE(e, t) {
	return /*#__PURE__*/ de("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ N("path", { d: "M14 13q.424 0 .713-.287A.97.97 0 0 0 15 12a.97.97 0 0 0-.287-.713A.97.97 0 0 0 14 11a.97.97 0 0 0-.713.287A.97.97 0 0 0 13 12q0 .424.287.713.288.287.713.287" }), /*#__PURE__*/ N("path", { d: "M10.385 21.788A1 1 0 0 1 10 21V3a1.003 1.003 0 0 1 1.242-.97l8 2A1 1 0 0 1 20 5v14a1 1 0 0 1-.758.97l-8 2a1 1 0 0 1-.857-.182M18 5.781l-6-1.5v15.438l6-1.5zM9 6H7v12h2v2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2z" })]
	});
}
YE.displayName = "LeaveIcon";
var XE = a(YE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/link.js
function ZE(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M12 19.071q-1.467 1.467-3.536 1.467-2.067 0-3.535-1.467t-1.467-3.535q0-2.07 1.467-3.536L7.05 9.879q.3-.3.707-.3t.707.3.301.707-.3.707l-2.122 2.121a2.9 2.9 0 0 0-.884 2.122q0 1.237.884 2.12.884.885 2.121.885t2.122-.884l2.121-2.121q.3-.3.707-.3t.707.3.3.707q0 .405-.3.707zm-1.414-4.243q-.3.3-.707.301a.97.97 0 0 1-.707-.3q-.3-.3-.301-.708 0-.405.3-.707l4.243-4.242q.3-.3.707-.3t.707.3.3.707-.3.707zm6.364-.707q-.3.3-.707.3a.97.97 0 0 1-.707-.3q-.3-.3-.301-.707 0-.405.3-.707l2.122-2.121q.884-.885.884-2.121 0-1.238-.884-2.122a2.9 2.9 0 0 0-2.121-.884q-1.237 0-2.122.884l-2.121 2.122q-.3.3-.707.3a.97.97 0 0 1-.707-.3q-.3-.3-.3-.708 0-.405.3-.707L12 4.93q1.467-1.467 3.536-1.467t3.535 1.467 1.467 3.536T19.071 12z" })
	});
}
ZE.displayName = "LinkIcon";
var QE = a(ZE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/lock-solid.js
function $E(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M6 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 20V10q0-.825.588-1.412A1.93 1.93 0 0 1 6 8h1V6q0-2.075 1.463-3.537Q9.926 1 12 1q2.075 0 3.537 1.463Q17 3.925 17 6v2h1q.824 0 1.413.588Q20 9.175 20 10v10q0 .824-.587 1.413A1.93 1.93 0 0 1 18 22zM9 8h6V6q0-1.25-.875-2.125A2.9 2.9 0 0 0 12 3q-1.25 0-2.125.875A2.9 2.9 0 0 0 9 6z" })
	});
}
$E.displayName = "LockSolidIcon";
var eD = a($E);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/mark-as-read.js
function tD(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M21.324 9.13c0-.66-.339-1.237-.862-1.558l-7.37-4.318a1.81 1.81 0 0 0-1.851 0L3.87 7.572C3.348 7.892 3 8.47 3 9.13v9.167c0 1.008.825 1.833 1.833 1.833H19.5a1.84 1.84 0 0 0 1.833-1.833zm-10.129 3.978-6.6-4.124 6.646-3.896a1.81 1.81 0 0 1 1.851 0l6.646 3.896-6.6 4.124a1.85 1.85 0 0 1-1.943 0" })
	});
}
tD.displayName = "MarkAsReadIcon";
var nD = a(tD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/mark-as-unread.js
function rD(e, t) {
	return /*#__PURE__*/ de("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ N("path", { d: "M20 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" }), /*#__PURE__*/ N("path", {
			fillRule: "evenodd",
			d: "M17 5H5a2 2 0 0 0-2 2v10.4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7.83a3 3 0 0 1-2 0q-.316-.113-.595-.288L12 11.89 5 7.138V7h12.764A3 3 0 0 1 17 5m-4.438 8.927L19 9.555V17.4H5V9.555l6.438 4.372a1 1 0 0 0 1.124 0",
			clipRule: "evenodd"
		})]
	});
}
rD.displayName = "MarkAsUnreadIcon";
var iD = a(rD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/mention.js
function aD(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M12 4a8 8 0 1 0 0 16 1 1 0 1 1 0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10v1.5a3.5 3.5 0 0 1-6.396 1.966A5 5 0 1 1 17 12v1.5a1.5 1.5 0 0 0 3 0V12a8 8 0 0 0-8-8m3 8a3 3 0 1 0-6 0 3 3 0 0 0 6 0" })
	});
}
aD.displayName = "MentionIcon";
var oD = a(aD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/notifications-off-solid.js
function sD(e, t) {
	return /*#__PURE__*/ de("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ N("path", { d: "m4.917 2.083 17 17a1 1 0 0 1-1.414 1.414L19.006 19H4.414c-.89 0-1.337-1.077-.707-1.707L5 16v-6s0-2.034 1.096-3.91L3.504 3.498a1 1 0 0 1 1.414-1.414M19 13.35 9.136 3.484C9.93 3.181 10.874 3 12 3c7 0 7 7 7 7z" }), /*#__PURE__*/ N("path", { d: "M10 20h4a2 2 0 0 1-4 0" })]
	});
}
sD.displayName = "NotificationsOffSolidIcon";
var cD = a(sD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/notifications-solid.js
function lD(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M20.293 17.293c.63.63.184 1.707-.707 1.707H4.414c-.89 0-1.337-1.077-.707-1.707L5 16v-6s0-7 7-7 7 7 7 7v6zM12 22a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2" })
	});
}
lD.displayName = "NotificationsSolidIcon";
var uD = a(lD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/overflow-horizontal.js
function dD(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M6 14q-.824 0-1.412-.588A1.93 1.93 0 0 1 4 12q0-.825.588-1.412A1.93 1.93 0 0 1 6 10q.824 0 1.412.588Q8 11.175 8 12t-.588 1.412A1.93 1.93 0 0 1 6 14m6 0q-.825 0-1.412-.588A1.93 1.93 0 0 1 10 12q0-.825.588-1.412A1.93 1.93 0 0 1 12 10q.825 0 1.412.588Q14 11.175 14 12t-.588 1.412A1.93 1.93 0 0 1 12 14m6 0q-.824 0-1.413-.588A1.93 1.93 0 0 1 16 12q0-.825.587-1.412A1.93 1.93 0 0 1 18 10q.824 0 1.413.588Q20 11.175 20 12t-.587 1.412A1.93 1.93 0 0 1 18 14" })
	});
}
dD.displayName = "OverflowHorizontalIcon";
var fD = a(dD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/pin-solid.js
function pD(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M5.769 2.857A.5.5 0 0 1 6.119 2h11.762a.5.5 0 0 1 .35.857L16.15 4.9a.5.5 0 0 0-.15.357v4.487a.5.5 0 0 0 .15.356l3.7 3.644a.5.5 0 0 1 .15.356v1.4a.5.5 0 0 1-.5.5H13v6a1 1 0 1 1-2 0v-6H4.5a.5.5 0 0 1-.5-.5v-1.4a.5.5 0 0 1 .15-.356l3.7-3.644A.5.5 0 0 0 8 9.744V5.257a.5.5 0 0 0-.15-.357z" })
	});
}
pD.displayName = "PinSolidIcon";
var mD = a(pD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/pin.js
function hD(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", {
			fillRule: "evenodd",
			d: "M6.119 2a.5.5 0 0 0-.35.857L7.85 4.9a.5.5 0 0 1 .15.357v4.487a.5.5 0 0 1-.15.356l-3.7 3.644A.5.5 0 0 0 4 14.1v1.4a.5.5 0 0 0 .5.5H11v6a1 1 0 1 0 2 0v-6h6.5a.5.5 0 0 0 .5-.5v-1.4a.5.5 0 0 0-.15-.356l-3.7-3.644a.5.5 0 0 1-.15-.356V5.257a.5.5 0 0 1 .15-.357l2.081-2.043a.5.5 0 0 0-.35-.857zM10 4h4v5.744a2.5 2.5 0 0 0 .746 1.781L17.26 14H6.74l2.514-2.475A2.5 2.5 0 0 0 10 9.744z",
			clipRule: "evenodd"
		})
	});
}
hD.displayName = "PinIcon";
var gD = a(hD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/plus.js
function _D(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M11 13H6a.97.97 0 0 1-.713-.287A.97.97 0 0 1 5 12q0-.424.287-.713A.97.97 0 0 1 6 11h5V6q0-.424.287-.713A.97.97 0 0 1 12 5q.424 0 .713.287Q13 5.576 13 6v5h5q.424 0 .712.287.288.288.288.713 0 .424-.288.713A.97.97 0 0 1 18 13h-5v5q0 .424-.287.712A.97.97 0 0 1 12 19a.97.97 0 0 1-.713-.288A.97.97 0 0 1 11 18z" })
	});
}
_D.displayName = "PlusIcon";
var vD = a(_D);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/preferences.js
function yD(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", {
			fillRule: "evenodd",
			d: "M6.5 2h11a4.5 4.5 0 1 1 0 9h-11a4.5 4.5 0 0 1 0-9m0 2h7.258A4.5 4.5 0 0 0 13 6.5c0 .925.28 1.785.758 2.5H6.5a2.5 2.5 0 0 1 0-5M15 6.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0m-13 11A4.5 4.5 0 0 1 6.5 13h11a4.5 4.5 0 1 1 0 9h-11q-.233 0-.46-.023A4.5 4.5 0 0 1 2 17.5m8.242-2.5H17.5a2.5 2.5 0 0 1 0 5h-7.258A4.5 4.5 0 0 0 11 17.5c0-.925-.28-1.785-.758-2.5M6.5 15a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5",
			clipRule: "evenodd"
		})
	});
}
yD.displayName = "PreferencesIcon";
var bD = a(yD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/reaction-add.js
function xD(e, t) {
	return /*#__PURE__*/ de("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ N("path", { d: "M14.74 2.38C13.87 2.133 12.95 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-.95-.133-1.87-.38-2.74a5 5 0 0 1-1.886.687 8 8 0 1 1-5.68-5.68c.1-.684.339-1.323.687-1.887" }), /*#__PURE__*/ N("path", { d: "M15.536 14.121a1 1 0 0 1 0 1.415A5 5 0 0 1 12 17c-1.38 0-2.632-.56-3.535-1.464a1 1 0 1 1 1.414-1.415A3 3 0 0 0 12 15c.829 0 1.577-.335 2.121-.879a1 1 0 0 1 1.415 0M8.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m8.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M18 6h-1a.97.97 0 0 1-.712-.287A.97.97 0 0 1 16 5q0-.424.288-.713A.97.97 0 0 1 17 4h1V3q0-.424.288-.712A.97.97 0 0 1 19 2q.424 0 .712.288Q20 2.575 20 3v1h1q.424 0 .712.287Q22 4.576 22 5t-.288.713A.97.97 0 0 1 21 6h-1v1q0 .424-.288.713A.97.97 0 0 1 19 8a.97.97 0 0 1-.712-.287A.97.97 0 0 1 18 7z" })]
	});
}
xD.displayName = "ReactionAddIcon";
var SD = a(xD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/reply.js
function CD(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M9.405 5.708c.39-.39.39-1.025 0-1.416a.996.996 0 0 0-1.412 0L3.294 9.006a1.004 1.004 0 0 0 0 1.416l4.699 4.714a.996.996 0 0 0 1.412 0c.39-.39.39-1.025 0-1.416l-3.043-3.053h9.153c1.887 0 3.485 1.604 3.485 3.666C19 16.396 17.402 18 15.515 18h-2.093a1 1 0 1 0 0 2h2.093C18.58 20 21 17.425 21 14.333s-2.419-5.666-5.485-5.666H6.456z" })
	});
}
CD.displayName = "ReplyIcon";
var wD = a(CD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/restart.js
function TD(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M18.93 8A8 8 0 1 1 4 12a1 1 0 1 0-2 0c0 5.523 4.477 10 10 10s10-4.477 10-10a10 10 0 0 0-.832-4A10 10 0 0 0 12 2a9.99 9.99 0 0 0-8 3.999V4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2H5.755A7.99 7.99 0 0 1 12 4a8 8 0 0 1 6.93 4" })
	});
}
TD.displayName = "RestartIcon";
var ED = a(TD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/room.js
function DD(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "m8.566 17-.944 4.094q-.086.406-.372.656t-.687.25q-.543 0-.887-.469a1.18 1.18 0 0 1-.2-1.031l.801-3.5H3.158q-.572 0-.916-.484a1.27 1.27 0 0 1-.2-1.078 1.12 1.12 0 0 1 1.116-.938H6.85l1.145-5h-3.12q-.57 0-.915-.484a1.27 1.27 0 0 1-.2-1.078A1.12 1.12 0 0 1 4.875 7h3.691l.945-4.094q.085-.406.372-.656.286-.25.686-.25.544 0 .887.469.345.468.2 1.031l-.8 3.5h4.578l.944-4.094q.085-.406.372-.656.286-.25.687-.25.543 0 .887.469t.2 1.031L17.723 7h3.119q.573 0 .916.484.343.485.2 1.079a1.12 1.12 0 0 1-1.116.937H17.15l-1.145 5h3.12q.57 0 .915.484.343.485.2 1.079a1.12 1.12 0 0 1-1.116.937h-3.691l-.944 4.094q-.087.406-.373.656t-.686.25q-.544 0-.887-.469a1.18 1.18 0 0 1-.2-1.031l.8-3.5zm.573-2.5h4.578l1.144-5h-4.578z" })
	});
}
DD.displayName = "RoomIcon";
var OD = a(DD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/search.js
function kD(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M15.05 16.463a7.5 7.5 0 1 1 1.414-1.414l3.243 3.244a1 1 0 0 1-1.414 1.414zM16 10.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0" })
	});
}
kD.displayName = "SearchIcon";
var AD = a(kD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/section.js
function jD(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M16 7a.97.97 0 0 0-.713.287A.97.97 0 0 0 15 8q0 .424.287.713Q15.576 9 16 9t.712-.287A.97.97 0 0 0 17 8a.97.97 0 0 0-.288-.713A.97.97 0 0 0 16 7m0 4a.97.97 0 0 0-.713.287A.97.97 0 0 0 15 12q0 .424.287.713.288.287.713.287.424 0 .712-.287A.97.97 0 0 0 17 12a.97.97 0 0 0-.288-.713A.97.97 0 0 0 16 11m0 4a.97.97 0 0 0-.713.287A.97.97 0 0 0 15 16q0 .424.287.712.288.288.713.288.424 0 .712-.288A.97.97 0 0 0 17 16a.97.97 0 0 0-.288-.713A.97.97 0 0 0 16 15m-4-8H8a.97.97 0 0 0-.713.287A.97.97 0 0 0 7 8q0 .424.287.713Q7.576 9 8 9h4q.424 0 .713-.287A.97.97 0 0 0 13 8a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 7m0 4H8a.97.97 0 0 0-.713.287A.97.97 0 0 0 7 12q0 .424.287.713Q7.576 13 8 13h4q.424 0 .713-.287A.97.97 0 0 0 13 12a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 11m0 4H8a.97.97 0 0 0-.713.287A.97.97 0 0 0 7 16q0 .424.287.712Q7.576 17 8 17h4q.424 0 .713-.288A.97.97 0 0 0 13 16a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 15m7-12q.824 0 1.413.587Q21 4.176 21 5v14q0 .824-.587 1.413A1.93 1.93 0 0 1 19 21H5q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19V5q0-.824.587-1.412A1.93 1.93 0 0 1 5 3zm0 2H5v14h14z" })
	});
}
jD.displayName = "SectionIcon";
var MD = a(jD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/settings.js
function ND(e, t) {
	return /*#__PURE__*/ de("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ N("path", { d: "M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-2 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0" }), /*#__PURE__*/ N("path", { d: "M11.312 2h1.376A2.31 2.31 0 0 1 15 4.312v.247l.002.003c.01.014.031.033.064.047.03.013.056.013.07.01h.002l.177-.177a2.31 2.31 0 0 1 3.27 0l.973.974a2.31 2.31 0 0 1 0 3.269l-.177.177v.003a.13.13 0 0 0 .01.07.15.15 0 0 0 .047.063l.003.002h.247A2.31 2.31 0 0 1 22 11.312v1.376A2.31 2.31 0 0 1 19.688 15h-.247l-.003.002a.15.15 0 0 0-.047.064.13.13 0 0 0-.01.07v.002l.177.177a2.31 2.31 0 0 1 0 3.27l-.974.973a2.31 2.31 0 0 1-3.269 0l-.177-.177h-.003a.13.13 0 0 0-.07.01.15.15 0 0 0-.063.047l-.002.003v.247A2.31 2.31 0 0 1 12.688 22h-1.376A2.31 2.31 0 0 1 9 19.688v-.247l-.002-.003a.15.15 0 0 0-.064-.047.13.13 0 0 0-.07-.01h-.002l-.177.177a2.31 2.31 0 0 1-3.27 0l-.973-.974a2.31 2.31 0 0 1 0-3.269l.177-.177v-.003a.14.14 0 0 0-.01-.07.15.15 0 0 0-.047-.063L4.559 15h-.247A2.31 2.31 0 0 1 2 12.688v-1.376A2.31 2.31 0 0 1 4.312 9h.247l.003-.002a.15.15 0 0 0 .047-.064.14.14 0 0 0 .01-.07v-.002l-.177-.177a2.31 2.31 0 0 1 0-3.27l.974-.973a2.31 2.31 0 0 1 3.269 0l.177.177h.003a.14.14 0 0 0 .07-.01.15.15 0 0 0 .063-.047L9 4.559v-.247A2.31 2.31 0 0 1 11.312 2M11 4.312v.257c0 .893-.59 1.593-1.299 1.887-.716.297-1.622.21-2.248-.418l-.182-.182a.31.31 0 0 0-.441 0l-.974.974a.31.31 0 0 0 0 .44l.182.183c.627.626.715 1.531.418 2.248C6.162 10.41 5.462 11 4.569 11h-.257a.31.31 0 0 0-.312.312v1.376c0 .172.14.312.312.312h.257c.893 0 1.593.59 1.887 1.299.297.716.21 1.622-.418 2.248l-.182.182a.31.31 0 0 0 0 .441l.974.973a.31.31 0 0 0 .44 0l.183-.181c.626-.627 1.532-.715 2.248-.418.709.294 1.299.994 1.299 1.887v.257c0 .172.14.312.312.312h1.376c.172 0 .312-.14.312-.312v-.257c0-.893.59-1.593 1.299-1.887.716-.297 1.622-.21 2.249.418l.181.181c.122.122.32.122.441 0l.973-.973a.31.31 0 0 0 0-.44l-.181-.183c-.627-.626-.715-1.532-.418-2.248.294-.709.994-1.299 1.887-1.299h.257c.172 0 .312-.14.312-.312v-1.376a.31.31 0 0 0-.312-.312h-.257c-.893 0-1.593-.59-1.887-1.299-.297-.717-.21-1.622.418-2.248l.181-.182a.31.31 0 0 0 0-.441l-.973-.974a.31.31 0 0 0-.44 0l-.183.182c-.626.627-1.532.715-2.248.418C13.59 6.162 13 5.462 13 4.569v-.257A.31.31 0 0 0 12.688 4h-1.376a.31.31 0 0 0-.312.312" })]
	});
}
ND.displayName = "SettingsIcon";
var PD = a(ND);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/threads.js
function FD(e, t) {
	return /*#__PURE__*/ de("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ N("path", { d: "M7 10a.97.97 0 0 1-.713-.287A.97.97 0 0 1 6 9q0-.424.287-.713A.97.97 0 0 1 7 8h10q.424 0 .712.287Q18 8.576 18 9t-.288.713A.97.97 0 0 1 17 10zm0 4a.97.97 0 0 1-.713-.287A.97.97 0 0 1 6 13q0-.424.287-.713A.97.97 0 0 1 7 12h6q.424 0 .713.287.287.288.287.713 0 .424-.287.713A.97.97 0 0 1 13 14z" }), /*#__PURE__*/ N("path", { d: "M3.707 21.293c-.63.63-1.707.184-1.707-.707V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6zM6 17h14V5H4v13.172l.586-.586A2 2 0 0 1 6 17" })]
	});
}
FD.displayName = "ThreadsIcon";
var ID = a(FD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/unpin.js
function LD(e, t) {
	return /*#__PURE__*/ de("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ N("path", {
			fillRule: "evenodd",
			d: "M5.457 2.083a1 1 0 0 0-1.414 1.414L8.04 7.494v2.25a.5.5 0 0 1-.15.356l-3.7 3.644a.5.5 0 0 0-.15.356v1.4a.5.5 0 0 0 .5.5h6.5v6a1 1 0 0 0 2 0v-6h3.506l4.497 4.497a1 1 0 0 0 1.414-1.414zM14.546 14 10.04 9.494v.25a2.5 2.5 0 0 1-.746 1.781L6.78 14z",
			clipRule: "evenodd"
		}), /*#__PURE__*/ N("path", { d: "M14.04 4v3.85l2.015 2.015a.5.5 0 0 1-.015-.12V5.257a.5.5 0 0 1 .15-.357l2.081-2.043a.5.5 0 0 0-.35-.857h-9.73l2 2z" })]
	});
}
LD.displayName = "UnpinIcon";
var RD = a(LD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/user-add.js
function zD(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M10 12q-1.65 0-2.825-1.175T6 8t1.175-2.825T10 4t2.825 1.175T14 8t-1.175 2.825T10 12m-8 6v-.8q0-.85.438-1.562.437-.713 1.162-1.088a14.8 14.8 0 0 1 3.15-1.163A13.8 13.8 0 0 1 10 13q1.65 0 3.25.387 1.6.388 3.15 1.163.724.375 1.163 1.087Q18 16.35 18 17.2v.8q0 .824-.587 1.413A1.93 1.93 0 0 1 16 20H4q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 18m2 0h12v-.8a.97.97 0 0 0-.5-.85q-1.35-.675-2.725-1.012a11.6 11.6 0 0 0-5.55 0Q5.85 15.675 4.5 16.35a.97.97 0 0 0-.5.85zm6-8q.825 0 1.412-.588Q12 8.826 12 8q0-.824-.588-1.412A1.93 1.93 0 0 0 10 6q-.825 0-1.412.588A1.93 1.93 0 0 0 8 8q0 .825.588 1.412Q9.175 10 10 10m7 1h2v2q0 .424.288.713.287.287.712.287.424 0 .712-.287A.97.97 0 0 0 21 13v-2h2q.424 0 .712-.287A.97.97 0 0 0 24 10a.97.97 0 0 0-.288-.713A.97.97 0 0 0 23 9h-2V7a.97.97 0 0 0-.288-.713A.97.97 0 0 0 20 6a.97.97 0 0 0-.712.287A.97.97 0 0 0 19 7v2h-2a.97.97 0 0 0-.712.287A.97.97 0 0 0 16 10q0 .424.288.713.287.287.712.287" })
	});
}
zD.displayName = "UserAddIcon";
var BD = a(zD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/user-profile-solid.js
function VD(e, t) {
	return /*#__PURE__*/ de("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ N("path", { d: "M12 15q-1.65 0-2.825-1.175T8 11t1.175-2.825T12 7t2.825 1.175T16 11t-1.175 2.825T12 15" }), /*#__PURE__*/ N("path", { d: "M19.528 18.583A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 2.52.933 4.824 2.472 6.583A9.98 9.98 0 0 0 12 22a9.98 9.98 0 0 0 7.528-3.417M8.75 16.388q-1.373.332-2.709.95a8 8 0 1 1 11.918 0 14.7 14.7 0 0 0-2.709-.95A13.8 13.8 0 0 0 12 16q-1.65 0-3.25.387" })]
	});
}
VD.displayName = "UserProfileSolidIcon";
var HD = a(VD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/video-call-solid.js
function UD(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M6 4h10a2 2 0 0 1 2 2v4.286l3.35-2.871a1 1 0 0 1 1.65.76v7.65a1 1 0 0 1-1.65.76L18 13.715V18a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4" })
	});
}
UD.displayName = "VideoCallSolidIcon";
var WD = a(UD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/video-call.js
function GD(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M2 8a4 4 0 0 1 4-4h10a2 2 0 0 1 2 2v4.286l3.35-2.871a1 1 0 0 1 1.65.76v7.65a1 1 0 0 1-1.65.76L18 13.715V18a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10V6zm15 7.652v-3.303L19.073 12z" })
	});
}
GD.displayName = "VideoCallIcon";
var KD = a(GD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/visibility-off.js
function qD(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "m16.1 13.3-1.45-1.45q.225-1.175-.675-2.2t-2.325-.8L10.2 7.4q.424-.2.863-.3A4.2 4.2 0 0 1 12 7q1.875 0 3.188 1.312Q16.5 9.625 16.5 11.5q0 .5-.1.938t-.3.862m3.2 3.15-1.45-1.4a11 11 0 0 0 1.688-1.588A9 9 0 0 0 20.8 11.5q-1.25-2.524-3.588-4.013Q14.875 6 12 6q-.724 0-1.425.1a10 10 0 0 0-1.375.3L7.65 4.85A11.1 11.1 0 0 1 12 4q3.575 0 6.425 1.887T22.7 10.8a.8.8 0 0 1 .1.313q.025.188.025.387a2 2 0 0 1-.125.7 10.9 10.9 0 0 1-3.4 4.25m-.2 5.45-3.5-3.45q-.874.274-1.762.413Q12.95 19 12 19q-3.575 0-6.425-1.887T1.3 12.2a.8.8 0 0 1-.1-.312 3 3 0 0 1 0-.763.8.8 0 0 1 .1-.3Q1.825 9.7 2.55 8.75A13.3 13.3 0 0 1 4.15 7L2.075 4.9a.93.93 0 0 1-.275-.688q0-.412.3-.712a.95.95 0 0 1 .7-.275q.425 0 .7.275l17 17q.275.275.288.688a.93.93 0 0 1-.288.712.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275M5.55 8.4q-.725.65-1.325 1.425A9 9 0 0 0 3.2 11.5q1.25 2.524 3.588 4.012T12 17q.5 0 .975-.062.475-.063.975-.138l-.9-.95q-.274.075-.525.113A3.5 3.5 0 0 1 12 16q-1.875 0-3.187-1.312Q7.5 13.375 7.5 11.5q0-.274.038-.525.037-.25.112-.525z" })
	});
}
qD.displayName = "VisibilityOffIcon";
var JD = a(qD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/visibility-on.js
function YD(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "M12 16q1.875 0 3.188-1.312Q16.5 13.375 16.5 11.5t-1.312-3.187T12 7 8.813 8.313 7.5 11.5t1.313 3.188T12 16m0-1.8q-1.125 0-1.912-.787A2.6 2.6 0 0 1 9.3 11.5q0-1.125.787-1.912A2.6 2.6 0 0 1 12 8.8q1.125 0 1.912.787.788.788.788 1.913t-.787 1.912A2.6 2.6 0 0 1 12 14.2m0 4.8q-3.475 0-6.35-1.837Q2.775 15.324 1.3 12.2a.8.8 0 0 1-.1-.312 3 3 0 0 1 0-.775.8.8 0 0 1 .1-.313q1.475-3.125 4.35-4.962Q8.525 4 12 4t6.35 1.838T22.7 10.8a.8.8 0 0 1 .1.313 3 3 0 0 1 0 .774.8.8 0 0 1-.1.313q-1.475 3.125-4.35 4.963Q15.475 19 12 19m0-2a9.54 9.54 0 0 0 5.188-1.488A9.77 9.77 0 0 0 20.8 11.5a9.77 9.77 0 0 0-3.613-4.012A9.54 9.54 0 0 0 12 6a9.55 9.55 0 0 0-5.187 1.487A9.77 9.77 0 0 0 3.2 11.5a9.77 9.77 0 0 0 3.613 4.012A9.54 9.54 0 0 0 12 17" })
	});
}
YD.displayName = "VisibilityOnIcon";
var XD = a(YD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/voice-call-solid.js
function ZD(e, t) {
	return /*#__PURE__*/ N("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /*#__PURE__*/ N("path", { d: "m20.958 16.374.039 3.527q0 .427-.33.756-.33.33-.756.33a16 16 0 0 1-6.57-1.105 16.2 16.2 0 0 1-5.563-3.663 16.1 16.1 0 0 1-3.653-5.573 16.3 16.3 0 0 1-1.115-6.56q0-.427.33-.757T4.095 3l3.528.039a1.07 1.07 0 0 1 1.085.93l.543 3.954q.039.271-.039.504a1.1 1.1 0 0 1-.271.426l-1.64 1.64q.505 1.008 1.154 1.909c.433.6 1.444 1.696 1.444 1.696s1.095 1.01 1.696 1.444q.9.65 1.909 1.153l1.64-1.64q.193-.193.426-.27t.504-.04l3.954.543q.406.059.668.359t.262.727" })
	});
}
ZD.displayName = "VoiceCallSolidIcon";
var QD = a(ZD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/volume-on-solid.js
function $D(e, t) {
	return /*#__PURE__*/ de("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/*#__PURE__*/ N("path", { d: "M3 14v-4a2 2 0 0 1 2-2h2l3.293-3.293c.63-.63 1.707-.184 1.707.707v13.172c0 .89-1.077 1.337-1.707.707L7 16H5a2 2 0 0 1-2-2m11.122-5.536a1 1 0 0 1 1.414 0A5 5 0 0 1 17 12c0 1.38-.56 2.632-1.464 3.536a1 1 0 0 1-1.415-1.415 3 3 0 0 0 .88-2.121c0-.829-.335-1.577-.88-2.121a1 1 0 0 1 0-1.415" }), /*#__PURE__*/ N("path", { d: "M16.95 5.636a1 1 0 0 1 1.414 0A8.98 8.98 0 0 1 21 12a8.98 8.98 0 0 1-2.636 6.364 1 1 0 0 1-1.414-1.414A6.98 6.98 0 0 0 19 12a6.98 6.98 0 0 0-2.05-4.95 1 1 0 0 1 0-1.414" })]
	});
}
$D.displayName = "VolumeOnSolidIcon";
var eO = a($D), tO = {
	content: "_content_1xhpr_8",
	icon: "_icon_1xhpr_17"
};
//#endregion
//#region src/room/timeline/event-tile/body/RedactedBodyView/RedactedBodyView.tsx
function nO({ vm: e, className: n, ref: r }) {
	let { text: i, tooltip: a } = Y(e), o = /* @__PURE__ */ t.createElement("span", {
		className: (0, U.default)(tO.content, n),
		ref: r
	}, /* @__PURE__ */ t.createElement(bE, {
		className: tO.icon,
		"aria-hidden": "true"
	}), /* @__PURE__ */ t.createElement("span", null, i));
	return a ? /* @__PURE__ */ t.createElement(M, { description: a }, o) : o;
}
var rO = {
	content: "_content_f1s5h_8",
	invalid: "_invalid_f1s5h_70"
}, iO = { mediaBody: "_mediaBody_rgndh_8" };
//#endregion
//#region src/room/timeline/event-tile/body/MediaBody/MediaBody.tsx
function aO({ as: e, className: n, children: r, ...i }) {
	let a = e || "div";
	return /* @__PURE__ */ t.createElement(a, {
		className: (0, U.default)("mx_MediaBody", iO.mediaBody, n),
		...i
	}, r);
}
//#endregion
//#region src/room/timeline/event-tile/body/MFileBodyView/FileBodyView.tsx
var oO = /* @__PURE__ */ function(e) {
	return e.EXPORT = "EXPORT", e.DECRYPTION_PENDING = "DECRYPTION_PENDING", e.ENCRYPTED = "ENCRYPTED", e.UNENCRYPTED = "UNENCRYPTED", e.INVALID = "INVALID", e;
}({}), sO = /* @__PURE__ */ function(e) {
	return e.ATTACHMENT = "ATTACHMENT", e.AUDIO = "AUDIO", e.DOWNLOAD = "DOWNLOAD", e.VIDEO = "VIDEO", e;
}({});
function cO(e) {
	return e === "AUDIO" ? eO : e === "DOWNLOAD" ? wE : e === "VIDEO" ? WD : nE;
}
function lO({ vm: e, refIFrame: n, refLink: r, className: i }) {
	let { translate: a } = W(), { state: o, showInfo: s, infoLabel: c, infoTooltip: l, infoIcon: u, infoHref: d, showDownload: f, downloadLabel: p, downloadTitle: m, downloadHref: h } = Y(e), g = c ?? a("common|attachment"), _ = l ?? g, v = cO(u), b = s ? /* @__PURE__ */ t.createElement(M, {
		description: _,
		placement: "right"
	}, /* @__PURE__ */ t.createElement(aO, { "data-type": "info" }, /* @__PURE__ */ t.createElement(y, {
		as: "button",
		size: "sm",
		kind: "secondary",
		"aria-label": g,
		Icon: v,
		onClick: e.onInfoClick
	}, /* @__PURE__ */ t.createElement("span", null, g)))) : null, x = (0, U.default)(rO.content, i), S = p ?? a("action|download"), C = m ?? S;
	switch (o) {
		case "EXPORT": return /* @__PURE__ */ t.createElement("span", { className: x }, /* @__PURE__ */ t.createElement("a", { href: d }, b));
		case "DECRYPTION_PENDING": return /* @__PURE__ */ t.createElement("span", { className: x }, b, f && /* @__PURE__ */ t.createElement("div", { "data-type": "download" }, /* @__PURE__ */ t.createElement(y, {
			size: "sm",
			kind: "secondary",
			Icon: wE,
			onClick: e.onDownloadClick
		}, S)));
		case "ENCRYPTED": return /* @__PURE__ */ t.createElement("span", { className: x }, b, f && /* @__PURE__ */ t.createElement("div", { "data-type": "download" }, /* @__PURE__ */ t.createElement("div", {
			"aria-hidden": !0,
			style: { display: "none" }
		}, /* @__PURE__ */ t.createElement(y, {
			size: "sm",
			kind: "secondary",
			Icon: wE,
			as: "a",
			ref: r
		})), /* @__PURE__ */ t.createElement("iframe", {
			"aria-hidden": !0,
			title: C,
			src: "usercontent/",
			onLoad: e.onDownloadIframeLoad,
			ref: n,
			sandbox: "allow-scripts allow-downloads"
		})));
		case "UNENCRYPTED": return /* @__PURE__ */ t.createElement("span", { className: x }, b, f && /* @__PURE__ */ t.createElement("div", { "data-type": "download" }, /* @__PURE__ */ t.createElement(y, {
			size: "sm",
			kind: "secondary",
			Icon: wE,
			as: "a",
			href: h,
			target: "_blank",
			rel: "noreferrer noopener",
			onClick: e.onDownloadLinkClick
		}, S)));
		default: return /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("span", { className: x }, b), /* @__PURE__ */ t.createElement("span", { className: (0, U.default)(x, rO.invalid) }, a("timeline|m.file|error_invalid")));
	}
}
//#endregion
//#region ../../node_modules/blurhash/dist/esm/index.js
var uO = /* @__PURE__ */ "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%*+,-.:;=?@[]^_{|}~".split(""), dO = (e) => {
	let t = 0;
	for (let n = 0; n < e.length; n++) {
		let r = e[n], i = uO.indexOf(r);
		t = t * 83 + i;
	}
	return t;
}, fO = (e) => {
	let t = e / 255;
	return t <= .04045 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4;
}, pO = (e) => {
	let t = Math.max(0, Math.min(1, e));
	return Math.trunc(t <= .0031308 ? t * 12.92 * 255 + .5 : (1.055 * t ** .4166666666666667 - .055) * 255 + .5);
}, mO = (e) => e < 0 ? -1 : 1, hO = (e, t) => mO(e) * Math.abs(e) ** +t, gO = class extends Error {
	constructor(e) {
		super(e), this.name = "ValidationError", this.message = e;
	}
}, _O = (e) => {
	if (!e || e.length < 6) throw new gO("The blurhash string must be at least 6 characters");
	let t = dO(e[0]), n = Math.floor(t / 9) + 1, r = t % 9 + 1;
	if (e.length !== 4 + 2 * r * n) throw new gO(`blurhash length mismatch: length is ${e.length} but it should be ${4 + 2 * r * n}`);
}, vO = (e) => {
	let t = e >> 16, n = e >> 8 & 255, r = e & 255;
	return [
		fO(t),
		fO(n),
		fO(r)
	];
}, yO = (e, t) => {
	let n = Math.floor(e / 361), r = Math.floor(e / 19) % 19, i = e % 19;
	return [
		hO((n - 9) / 9, 2) * t,
		hO((r - 9) / 9, 2) * t,
		hO((i - 9) / 9, 2) * t
	];
}, bO = (e, t, n, r) => {
	_O(e), r |= 1;
	let i = dO(e[0]), a = Math.floor(i / 9) + 1, o = i % 9 + 1, s = (dO(e[1]) + 1) / 166, c = Array(o * a);
	for (let t = 0; t < c.length; t++) if (t === 0) {
		let n = dO(e.substring(2, 6));
		c[t] = vO(n);
	} else {
		let n = dO(e.substring(4 + t * 2, 6 + t * 2));
		c[t] = yO(n, s * r);
	}
	let l = t * 4, u = new Uint8ClampedArray(l * n);
	for (let e = 0; e < n; e++) for (let r = 0; r < t; r++) {
		let i = 0, s = 0, d = 0;
		for (let l = 0; l < a; l++) for (let a = 0; a < o; a++) {
			let u = Math.cos(Math.PI * r * a / t) * Math.cos(Math.PI * e * l / n), f = c[a + l * o];
			i += f[0] * u, s += f[1] * u, d += f[2] * u;
		}
		let f = pO(i), p = pO(s), m = pO(d);
		u[4 * r + 0 + e * l] = f, u[4 * r + 1 + e * l] = p, u[4 * r + 2 + e * l] = m, u[4 * r + 3 + e * l] = 255;
	}
	return u;
}, xO = Object.defineProperty, SO = Object.defineProperties, CO = Object.getOwnPropertyDescriptors, wO = Object.getOwnPropertySymbols, TO = Object.prototype.hasOwnProperty, EO = Object.prototype.propertyIsEnumerable, DO = (e, t, n) => t in e ? xO(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, OO = (e, t) => {
	for (var n in t ||= {}) TO.call(t, n) && DO(e, n, t[n]);
	if (wO) for (var n of wO(t)) EO.call(t, n) && DO(e, n, t[n]);
	return e;
}, kO = (e, t) => SO(e, CO(t)), AO = (e, t) => {
	var n = {};
	for (var r in e) TO.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && wO) for (var r of wO(e)) t.indexOf(r) < 0 && EO.call(e, r) && (n[r] = e[r]);
	return n;
}, jO = class extends e.PureComponent {
	constructor() {
		super(...arguments), this.canvas = null, this.handleRef = (e) => {
			this.canvas = e, this.draw();
		}, this.draw = () => {
			let { hash: e, height: t, punch: n, width: r } = this.props;
			if (this.canvas) {
				let i = bO(e, r, t, n), a = this.canvas.getContext("2d"), o = a.createImageData(r, t);
				o.data.set(i), a.putImageData(o, 0, 0);
			}
		};
	}
	componentDidUpdate() {
		this.draw();
	}
	render() {
		let t = this.props, { hash: n, height: r, width: i } = t, a = AO(t, [
			"hash",
			"height",
			"width"
		]);
		return e.createElement("canvas", kO(OO({}, a), {
			height: r,
			width: i,
			ref: this.handleRef
		}));
	}
};
jO.defaultProps = {
	height: 128,
	width: 128
};
var MO = {
	position: "absolute",
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	width: "100%",
	height: "100%"
}, NO = class extends e.PureComponent {
	componentDidUpdate() {
		if (this.props.resolutionX <= 0) throw Error("resolutionX must be larger than zero");
		if (this.props.resolutionY <= 0) throw Error("resolutionY must be larger than zero");
	}
	render() {
		let t = this.props, { hash: n, height: r, width: i, punch: a, resolutionX: o, resolutionY: s, style: c } = t, l = AO(t, [
			"hash",
			"height",
			"width",
			"punch",
			"resolutionX",
			"resolutionY",
			"style"
		]);
		return e.createElement("div", kO(OO({}, l), { style: kO(OO({
			display: "inline-block",
			height: r,
			width: i
		}, c), { position: "relative" }) }), e.createElement(jO, {
			hash: n,
			height: s,
			width: o,
			punch: a,
			style: MO
		}));
	}
};
NO.defaultProps = {
	height: 128,
	width: 128,
	resolutionX: 32,
	resolutionY: 32
};
var PO = {
	root: "_root_1rucf_8",
	link: "_link_1rucf_15",
	thumbnailContainer: "_thumbnailContainer_1rucf_22",
	placeholder: "_placeholder_1rucf_29",
	placeholderBlurhash: "_placeholderBlurhash_1rucf_39",
	blurhash: "_blurhash_1rucf_43",
	blurhashPulse: "_blurhashPulse_1rucf_1",
	mediaContent: "_mediaContent_1rucf_54",
	image: "_image_1rucf_60",
	banner: "_banner_1rucf_66",
	gifLabel: "_gifLabel_1rucf_83",
	hiddenButton: "_hiddenButton_1rucf_96",
	hiddenButtonContent: "_hiddenButtonContent_1rucf_115",
	error: "_error_1rucf_125",
	errorIcon: "_errorIcon_1rucf_130"
}, FO = /* @__PURE__ */ function(e) {
	return e.ERROR = "ERROR", e.HIDDEN = "HIDDEN", e.READY = "READY", e;
}({}), IO = /* @__PURE__ */ function(e) {
	return e.NONE = "NONE", e.SPINNER = "SPINNER", e.BLURHASH = "BLURHASH", e;
}({});
function LO({ placeholder: e, blurhash: n, maxWidth: r, maxHeight: i, loadingLabel: a }) {
	switch (e) {
		case "BLURHASH": return n ? /* @__PURE__ */ t.createElement(NO, {
			className: PO.blurhash,
			hash: n,
			width: r ?? 320,
			height: i ?? 240
		}) : /* @__PURE__ */ t.createElement(ee, {
			"aria-label": a,
			role: "progressbar"
		});
		case "SPINNER": return /* @__PURE__ */ t.createElement(ee, {
			"aria-label": a,
			role: "progressbar"
		});
		default: return null;
	}
}
function RO({ vm: e, className: n, children: r }) {
	let { translate: i } = W(), { state: a, alt: o, errorLabel: s, hiddenButtonLabel: c, src: l, thumbnailSrc: u, showAnimatedContentOnHover: d, placeholder: f = "NONE", blurhash: p, maxWidth: m, maxHeight: g, aspectRatio: _, isSvg: v, gifLabel: y, bannerLabel: b, tooltipLabel: x, linkUrl: S, linkTarget: C } = Y(e), [w, T] = h(!1), [E, ee] = h(!1), D = w || E, O = (0, U.default)(n, PO.root);
	if (a === "ERROR") return /* @__PURE__ */ t.createElement("span", { className: (0, U.default)(O, PO.error) }, /* @__PURE__ */ t.createElement(KE, {
		className: PO.errorIcon,
		width: "16",
		height: "16"
	}), s);
	let k = D && d && l ? l : u ?? l, te = m === void 0 ? void 0 : `min(100%, ${m}px)`, A = {
		width: te,
		maxWidth: m,
		maxHeight: g,
		aspectRatio: _
	}, ne = v ? {
		width: te,
		maxWidth: m,
		maxHeight: g
	} : void 0, re = LO({
		placeholder: f,
		blurhash: p,
		maxWidth: m,
		maxHeight: g,
		loadingLabel: i("common|loading")
	}), ie = re !== null, ae = a === "HIDDEN" ? /* @__PURE__ */ t.createElement("div", { style: {
		width: m,
		height: g
	} }, /* @__PURE__ */ t.createElement("button", {
		type: "button",
		className: PO.hiddenButton,
		onClick: e.onHiddenButtonClick
	}, /* @__PURE__ */ t.createElement("div", { className: PO.hiddenButtonContent }, /* @__PURE__ */ t.createElement(XD, null), /* @__PURE__ */ t.createElement("span", null, c)))) : k ? /* @__PURE__ */ t.createElement("img", {
		className: PO.image,
		src: k,
		alt: o,
		onError: e.onImageError,
		onLoad: e.onImageLoad,
		onMouseEnter: () => T(!0),
		onMouseLeave: () => T(!1)
	}) : null, j = a === "READY" && b && D ? /* @__PURE__ */ t.createElement("span", { className: PO.banner }, b) : null, oe = a === "READY" && y && !D ? /* @__PURE__ */ t.createElement("p", { className: PO.gifLabel }, y) : null, se = /* @__PURE__ */ t.createElement("div", {
		className: PO.thumbnailContainer,
		style: A
	}, ie && /* @__PURE__ */ t.createElement("div", { className: (0, U.default)(PO.placeholder, { [PO.placeholderBlurhash]: f === "BLURHASH" && !!p }) }, re), /* @__PURE__ */ t.createElement("div", {
		className: PO.mediaContent,
		style: ne
	}, ae, oe, j));
	return x && (se = /* @__PURE__ */ t.createElement(M, {
		description: x,
		placement: "right",
		isTriggerInteractive: !0
	}, se)), a === "READY" && S && (se = /* @__PURE__ */ t.createElement("a", {
		href: S,
		target: C,
		rel: C === "_blank" ? "noreferrer noopener" : void 0,
		className: PO.link,
		onClick: e.onLinkClick,
		onFocus: () => ee(!0),
		onBlur: () => ee(!1)
	}, se)), /* @__PURE__ */ t.createElement("div", { className: O }, se, r);
}
var zO = {
	root: "_root_mntwr_1",
	container: "_container_mntwr_5",
	video: "_video_mntwr_10",
	hiddenButton: "_hiddenButton_mntwr_16",
	hiddenButtonContent: "_hiddenButtonContent_mntwr_29",
	loadingContainer: "_loadingContainer_mntwr_39",
	error: "_error_mntwr_47"
}, BO = {
	ERROR: "ERROR",
	HIDDEN: "HIDDEN",
	LOADING: "LOADING",
	READY: "READY"
};
function VO({ vm: e, className: n, containerClassName: r, videoRef: i, children: a }) {
	let { state: o, videoLabel: s, videoTitle: c, hiddenButtonLabel: l, errorLabel: u, maxWidth: d, maxHeight: f, aspectRatio: p, src: m, poster: h, preload: g, controls: _, muted: v, autoPlay: y } = Y(e), b = (0, U.default)(n, zO.root), x = (0, U.default)(r, zO.container), S = {
		width: d === void 0 ? void 0 : `min(100%, ${d}px)`,
		maxWidth: d,
		maxHeight: f,
		aspectRatio: p
	};
	return o === BO.ERROR ? /* @__PURE__ */ t.createElement("span", { className: (0, U.default)(b, zO.error) }, /* @__PURE__ */ t.createElement(BE, {
		width: "16",
		height: "16"
	}), u) : o === BO.HIDDEN ? /* @__PURE__ */ t.createElement("span", { className: b }, /* @__PURE__ */ t.createElement("div", {
		className: x,
		style: S
	}, /* @__PURE__ */ t.createElement("button", {
		type: "button",
		onClick: e.onPreviewClick,
		className: zO.hiddenButton
	}, /* @__PURE__ */ t.createElement("div", { className: zO.hiddenButtonContent }, /* @__PURE__ */ t.createElement(XD, null), /* @__PURE__ */ t.createElement("span", null, l))))) : o === BO.LOADING ? /* @__PURE__ */ t.createElement("span", { className: b }, /* @__PURE__ */ t.createElement("div", {
		className: x,
		style: S
	}, /* @__PURE__ */ t.createElement("div", { className: zO.loadingContainer }, /* @__PURE__ */ t.createElement(ee, {
		"aria-label": "Loading...",
		role: "progressbar"
	})))) : /* @__PURE__ */ t.createElement("span", { className: b }, /* @__PURE__ */ t.createElement("div", {
		className: x,
		style: S,
		"data-video-body-mask-target": ""
	}, /* @__PURE__ */ t.createElement("video", {
		className: zO.video,
		ref: i,
		src: m,
		"aria-label": s,
		title: c,
		controls: _,
		controlsList: "nodownload",
		crossOrigin: "anonymous",
		preload: g,
		muted: v,
		autoPlay: y,
		poster: h,
		onPlay: e.onPlay
	})), a);
}
var HO = {
	root: "_root_1rs0w_8",
	text: "_text_1rs0w_13",
	caption: "_caption_1rs0w_14",
	notice: "_notice_1rs0w_18",
	emote: "_emote_1rs0w_23",
	annotated: "_annotated_1rs0w_28",
	annotatedInline: "_annotatedInline_1rs0w_32",
	annotation: "_annotation_1rs0w_36",
	editedMarker: "_editedMarker_1rs0w_44",
	bodyLink: "_bodyLink_1rs0w_52",
	bodyAction: "_bodyAction_1rs0w_53",
	emoteSender: "_emoteSender_1rs0w_68"
}, UO = /* @__PURE__ */ function(e) {
	return e.TEXT = "TEXT", e.NOTICE = "NOTICE", e.EMOTE = "EMOTE", e.CAPTION = "CAPTION", e;
}({}), WO = /* @__PURE__ */ function(e) {
	return e.NONE = "NONE", e.LINK = "LINK", e.ACTION = "ACTION", e;
}({});
function GO(e, t) {
	return !t || !o(e) ? e : r(e, { ref: t });
}
function KO({ vm: e, body: n, bodyRef: r, urlPreviews: i, className: a }) {
	let { id: o, kind: s, bodyWrapper: c = "NONE", bodyLinkHref: l, bodyActionAriaLabel: u, showEditedMarker: d, editedMarkerText: f, editedMarkerTooltip: p, editedMarkerCaption: m, showPendingModerationMarker: h, pendingModerationText: g, emoteSenderName: _ } = Y(e), v = (0, U.default)(a, HO.root, {
		[HO.text]: s === "TEXT",
		[HO.notice]: s === "NOTICE",
		[HO.emote]: s === "EMOTE",
		[HO.caption]: s === "CAPTION"
	}), y = GO(n, r), b = e.onEditedMarkerClick ? (t) => {
		t.preventDefault(), t.stopPropagation(), e.onEditedMarkerClick?.(t);
	} : void 0, x = [];
	if (d) {
		let e = /* @__PURE__ */ t.createElement("button", {
			type: "button",
			className: (0, U.default)(HO.annotation, HO.editedMarker),
			onClick: b
		}, /* @__PURE__ */ t.createElement("span", null, f));
		x.push(p ? /* @__PURE__ */ t.createElement(M, {
			key: "edited-marker",
			description: p,
			caption: m,
			isTriggerInteractive: !0
		}, e) : t.cloneElement(e, { key: "edited-marker" }));
	}
	if (h && x.push(/* @__PURE__ */ t.createElement("span", {
		key: "pending-moderation-marker",
		className: HO.annotation
	}, g)), c === "LINK" && l ? y = /* @__PURE__ */ t.createElement("a", {
		href: l,
		className: HO.bodyLink
	}, y) : c === "ACTION" && (y = /* @__PURE__ */ t.createElement("button", {
		type: "button",
		"aria-label": u,
		className: HO.bodyAction,
		onClick: e.onBodyActionClick
	}, y)), x.length > 0) {
		let e = (0, U.default)(HO.annotated, { [HO.annotatedInline]: s === "EMOTE" });
		y = s === "EMOTE" ? /* @__PURE__ */ t.createElement("span", {
			dir: "auto",
			className: e
		}, y, x) : /* @__PURE__ */ t.createElement("div", {
			dir: "auto",
			className: e
		}, y, x);
	}
	return s === "EMOTE" ? /* @__PURE__ */ t.createElement("div", {
		id: o,
		className: v,
		onClickCapture: e.onRootClick,
		dir: "auto"
	}, "*\xA0", /* @__PURE__ */ t.createElement("button", {
		type: "button",
		className: HO.emoteSender,
		onClick: e.onEmoteSenderClick
	}, _), "\xA0", y, i) : /* @__PURE__ */ t.createElement("div", {
		id: o,
		className: v,
		onClickCapture: e.onRootClick
	}, y, i);
}
var qO = {
	tileErrorView: "_tileErrorView_1dv8p_1",
	line: "_line_1dv8p_7",
	bubble: "_bubble_1dv8p_15",
	message: "_message_1dv8p_19",
	viewSourceButton: "_viewSourceButton_1dv8p_23"
};
//#endregion
//#region src/room/timeline/event-tile/EventTileView/TileErrorView/TileErrorView.tsx
function JO({ vm: e, className: n }) {
	let { message: r, eventType: i, bugReportCtaLabel: a, viewSourceCtaLabel: o, layout: s = "group" } = Y(e);
	return /* @__PURE__ */ t.createElement("li", {
		className: (0, U.default)(qO.tileErrorView, n, { [qO.bubble]: s === "bubble" }),
		"data-layout": s
	}, /* @__PURE__ */ t.createElement("div", {
		className: qO.line,
		role: "status"
	}, /* @__PURE__ */ t.createElement("span", { className: qO.message }, r, i && ` (${i})`), a && /* @__PURE__ */ t.createElement(y, {
		kind: "secondary",
		size: "sm",
		onClick: e.onBugReportClick
	}, a), o && /* @__PURE__ */ t.createElement("button", {
		type: "button",
		className: qO.viewSourceButton,
		onClick: e.onViewSourceClick
	}, o)));
}
var YO = {
	pill: "_pill_1i8jm_8",
	label: "_label_1i8jm_14"
};
//#endregion
//#region src/core/pill-input/Pill/Pill.tsx
function XO({ className: e, children: n, label: r, onClick: i, ...a }) {
	let o = d(), { translate: s } = W();
	return /* @__PURE__ */ t.createElement(q, {
		display: "inline-flex",
		gap: "var(--cpd-space-1-5x)",
		align: "center",
		className: (0, U.default)(YO.pill, e),
		...a
	}, n, /* @__PURE__ */ t.createElement("span", {
		id: o,
		className: YO.label
	}, r), i && /* @__PURE__ */ t.createElement(E, {
		"aria-describedby": o,
		size: "16px",
		onClick: i,
		"aria-label": s("action|delete"),
		className: "mx_Dialog_nonDialogButton"
	}, /* @__PURE__ */ t.createElement(FS, null)));
}
//#endregion
//#region ../../node_modules/react-merge-refs/dist/index.js
function ZO(e) {
	return (t) => {
		for (let n of e) $O(n, t);
	};
}
function QO(e) {
	return (t) => {
		let n = [];
		for (let r of e) {
			let e = $O(r, t), i = typeof e == "function";
			n.push(i ? e : () => $O(r, null));
		}
		return () => {
			for (let e of n) e();
		};
	};
}
function $O(e, t) {
	if (typeof e == "function") return e(t);
	e && (e.current = t);
}
var ek = parseInt(_.split(".")[0], 10) >= 19 ? QO : ZO;
function tk(e) {
	return p(() => ek(e), e);
}
var nk = {
	pillInput: "_pillInput_1yam9_8",
	input: "_input_1yam9_16",
	largerInput: "_largerInput_1yam9_32"
};
//#endregion
//#region src/core/pill-input/PillInput/PillInput.tsx
function rk({ className: e, children: r, onRemoveChildren: i, inputProps: a, ...o }) {
	let s = m(null), c = jb(a, ["onKeyDown", "ref"]), l = tk([s, a?.ref]), u = n.toArray(r).length > 0;
	return /* @__PURE__ */ t.createElement(q, {
		...o,
		gap: "var(--cpd-space-1x)",
		direction: "column",
		className: (0, U.default)(nk.pillInput, e),
		onClick: (e) => {
			e.preventDefault(), e.stopPropagation(), s.current?.focus();
		}
	}, u && /* @__PURE__ */ t.createElement(q, {
		gap: "var(--cpd-space-1x)",
		wrap: "wrap",
		align: "center"
	}, r), /* @__PURE__ */ t.createElement("input", {
		ref: l,
		autoComplete: "off",
		className: (0, U.default)(nk.input, { [nk.largerInput]: u }),
		onKeyDown: (e) => {
			let t = e.currentTarget.value.trim();
			e.key === "Backspace" && !t ? (e.preventDefault(), i?.(e)) : a?.onKeyDown?.(e);
		},
		...c
	}));
}
var ik = {
	container: "_container_1xryk_8",
	secondaryAction: "_secondaryAction_1xryk_16",
	primaryAction: "_primaryAction_1xryk_20",
	title: "_title_1xryk_24",
	description: "_description_1xryk_28"
}, ak = {
	ConnectionLost: "ConnectionLost",
	NeedsConsent: "NeedsConsent",
	ResourceLimited: "ResourceLimited",
	UnsentMessages: "UnsentMessages",
	LocalRoomFailed: "LocalRoomFailed"
};
function ok({ vm: e }) {
	let { translate: n } = W(), r = Y(e), i = d(), a = c((t) => {
		t.preventDefault(), e.onDeleteAllClick?.();
	}, [e]), o = c((t) => {
		t.preventDefault(), e.onResendAllClick?.();
	}, [e]), s = c((t) => {
		t.preventDefault(), e.onRetryRoomCreationClick?.();
	}, [e]), l = c(() => {
		e.onTermsAndConditionsClicked?.();
	}, [e]);
	if (r.state === null) return null;
	switch (r.state) {
		case ak.ConnectionLost: return /* @__PURE__ */ t.createElement(kS, {
			type: "info",
			role: "status",
			"aria-labelledby": i
		}, /* @__PURE__ */ t.createElement("div", { className: ik.container }, /* @__PURE__ */ t.createElement(j, {
			className: ik.title,
			id: i,
			weight: "medium"
		}, J("tchap|server_connectivity_lost_title", void 0, { a: (e) => /* @__PURE__ */ t.createElement("a", {
			target: "_blank",
			rel: "noreferrer noopener",
			href: "https://status.tchap.numerique.gouv.fr"
		}, e) })), /* @__PURE__ */ t.createElement(j, { className: ik.description }, n("room|status_bar|server_connectivity_lost_description"))));
		case ak.NeedsConsent: return /* @__PURE__ */ t.createElement(kS, {
			type: "info",
			role: "status",
			"aria-labelledby": i,
			actions: /* @__PURE__ */ t.createElement(y, {
				onClick: l,
				className: ik.primaryAction,
				kind: "primary",
				size: "sm",
				as: "a",
				href: r.consentUri,
				target: "_blank",
				rel: "noreferrer noopener"
			}, n("terms|tac_button"))
		}, /* @__PURE__ */ t.createElement("div", { className: ik.container }, /* @__PURE__ */ t.createElement(j, {
			className: ik.title,
			id: i,
			weight: "medium"
		}, n("room|status_bar|requires_consent_agreement_title"))));
		case ak.ResourceLimited: return /* @__PURE__ */ t.createElement(kS, {
			type: "info",
			role: "status",
			"aria-labelledby": i,
			actions: r.adminContactHref && /* @__PURE__ */ t.createElement(y, {
				kind: "secondary",
				size: "sm",
				as: "a",
				href: r.adminContactHref,
				target: "_blank",
				rel: "noreferrer noopener"
			}, "Contact admin")
		}, /* @__PURE__ */ t.createElement("div", { className: ik.container }, /* @__PURE__ */ t.createElement(j, {
			className: ik.title,
			id: i,
			weight: "medium"
		}, {
			monthly_active_user: n("room|status_bar|monthly_user_limit_reached_title"),
			hs_disabled: n("room|status_bar|homeserver_blocked_title")
		}[r.resourceLimit] || n("room|status_bar|exceeded_resource_limit_title")), /* @__PURE__ */ t.createElement(j, { className: ik.description }, n("room|status_bar|exceeded_resource_limit_description"))));
		case ak.LocalRoomFailed: return /* @__PURE__ */ t.createElement(kS, {
			role: "status",
			type: "info",
			"aria-labelledby": i,
			actions: /* @__PURE__ */ t.createElement(y, {
				size: "sm",
				kind: "primary",
				className: ik.primaryAction,
				Icon: ED,
				onClick: s
			}, n("action|retry"))
		}, /* @__PURE__ */ t.createElement(j, {
			className: ik.title,
			id: i,
			weight: "medium"
		}, n("room|status_bar|failed_to_create_room_title")));
		case ak.UnsentMessages: return /* @__PURE__ */ t.createElement(kS, {
			role: "status",
			type: "info",
			actions: r.isResending ? /* @__PURE__ */ t.createElement(ee, null) : /* @__PURE__ */ t.createElement(t.Fragment, null, e.onDeleteAllClick && /* @__PURE__ */ t.createElement(y, {
				size: "sm",
				kind: "secondary",
				Icon: bE,
				className: ik.secondaryAction,
				onClick: a
			}, n("room|status_bar|delete_all")), e.onResendAllClick && /* @__PURE__ */ t.createElement(y, {
				size: "sm",
				kind: "primary",
				Icon: ED,
				onClick: o,
				className: ik.primaryAction
			}, n("room|status_bar|retry_all"))),
			"aria-labelledby": i
		}, /* @__PURE__ */ t.createElement("div", { className: ik.container }, /* @__PURE__ */ t.createElement(j, {
			className: ik.title,
			id: i,
			weight: "medium"
		}, J("tchap|server_connectivity_lost_title", void 0, { a: (e) => /* @__PURE__ */ t.createElement("a", {
			target: "_blank",
			rel: "noreferrer noopener",
			href: "https://status.tchap.numerique.gouv.fr"
		}, e) })), /* @__PURE__ */ t.createElement(j, { className: ik.description }, n("room|status_bar|select_messages_to_retry"))));
		default: return null;
	}
}
var sk = {
	container: "_container_19tks_8",
	header: "_header_19tks_22",
	roundedCornerContainer: "_roundedCornerContainer_19tks_30"
}, ck = ({ vm: e, RoomAvatar: n }) => {
	let r = Y(e), { translate: i } = W();
	return /* @__PURE__ */ t.createElement("div", {
		"data-testid": "widget-pip-container",
		className: sk.container,
		onMouseDown: e.onStartMoving
	}, /* @__PURE__ */ t.createElement("div", { className: sk.header }, /* @__PURE__ */ t.createElement(E, {
		size: "28px",
		"data-testid": "base-card-back-button",
		onClick: (t) => e.onBackClick(t),
		tooltip: i("action|back"),
		kind: "secondary"
	}, /* @__PURE__ */ t.createElement(fE, null)), /* @__PURE__ */ t.createElement(n, { size: "20px" }), r.roomName), /* @__PURE__ */ t.createElement("div", { className: sk.roundedCornerContainer }, /* @__PURE__ */ t.createElement(e.persistentAppComponent, {
		persistentWidgetId: r.widgetId,
		persistentRoomId: r.roomId
	})));
};
//#endregion
//#region src/room/HistoryVisibilityBadge/HistoryVisibilityBadge.tsx
function lk({ historyVisibility: e }) {
	let n = {
		color: "var(--cpd-color-icon-info-primary)",
		width: "1rem",
		height: "1rem"
	};
	switch (e) {
		case "invited":
		case "joined": return /* @__PURE__ */ t.createElement(v, { kind: "blue" }, /* @__PURE__ */ t.createElement(JD, n), J("room|history_visibility_badge|private"));
		case "shared": return /* @__PURE__ */ t.createElement(v, { kind: "blue" }, /* @__PURE__ */ t.createElement(HE, n), J("room|history_visibility_badge|shared"));
		case "world_readable": return /* @__PURE__ */ t.createElement(v, { kind: "blue" }, /* @__PURE__ */ t.createElement(HD, n), J("room|history_visibility_badge|world_readable"));
		default: return null;
	}
}
//#endregion
//#region src/room/right-panel/WidgetContextMenuView/WidgetContextMenuView.tsx
var uk = ({ vm: e }) => {
	let { translate: n } = W(), { showStreamAudioStreamButton: r, showEditButton: i, showSnapshotButton: a, showDeleteButton: o, showRevokeButton: s, showMoveButtons: c, isMenuOpened: l, userWidget: u, trigger: d } = Y(e), f;
	r && (f = /* @__PURE__ */ t.createElement(k, {
		onSelect: e.onStreamAudioClick,
		label: n("widget|context_menu|start_audio_stream")
	}));
	let p;
	i && (p = /* @__PURE__ */ t.createElement(k, {
		onSelect: e.onEditClick,
		label: n("action|edit")
	}));
	let m;
	a && (m = /* @__PURE__ */ t.createElement(k, {
		onSelect: e.onSnapshotClick,
		label: n("widget|context_menu|screenshot")
	}));
	let h;
	o && (h = /* @__PURE__ */ t.createElement(k, {
		onSelect: e.onDeleteClick,
		label: n(u ? "action|remove" : "widget|context_menu|remove")
	}));
	let g;
	s && (g = /* @__PURE__ */ t.createElement(k, {
		onSelect: e.onRevokeClick,
		label: n("widget|context_menu|revoke")
	}));
	let [_, v] = c, y;
	_ && (y = /* @__PURE__ */ t.createElement(k, {
		onSelect: () => e.onMoveButton(-1),
		label: n("widget|context_menu|move_left")
	}));
	let b;
	v && (b = /* @__PURE__ */ t.createElement(k, {
		onSelect: () => e.onMoveButton(1),
		label: n("widget|context_menu|move_right")
	}));
	let x = () => l ? /* @__PURE__ */ t.createElement(t.Fragment, null, f, p, g, h, m, y, b) : null, S = t.isValidElement(d) ? d : /* @__PURE__ */ t.createElement(E, {
		size: "24px",
		"aria-label": "context menu trigger button",
		inert: !0,
		tabIndex: -1
	}, /* @__PURE__ */ t.createElement(fD, null));
	return /* @__PURE__ */ t.createElement(O, {
		title: "Widget context menu",
		open: l,
		showTitle: !1,
		side: "right",
		align: "start",
		trigger: S,
		onOpenChange: e.onFinished
	}, x());
}, dk = { content: "_content_u6fft_8" }, fk = { timelineSeparator: "_timelineSeparator_yq5ye_8" }, pk = ({ label: e, className: n, children: r, role: i = "separator" }) => /* @__PURE__ */ t.createElement(q, {
	className: (0, U.default)(n, fk.timelineSeparator),
	role: i,
	"aria-label": i === "separator" ? e : void 0,
	align: "center"
}, /* @__PURE__ */ t.createElement("hr", { role: "none" }), r, /* @__PURE__ */ t.createElement("hr", { role: "none" })), mk = 15e3, hk = 75e3, gk = 45, _k = 75, vk = 23, yk = 26;
function bk(e, t) {
	let n = Date.now() - e, r = Math.abs(Math.ceil(n / 6e4)), i = Math.ceil(r / 60), a = Math.ceil(i / 24), o = t?.translate ?? J;
	return n >= 0 ? n <= mk ? o("time|few_seconds_ago") : n <= hk ? o("time|about_minute_ago") : r <= gk ? o("time|n_minutes_ago", { num: r }) : r <= _k ? o("time|about_hour_ago") : i <= vk ? o("time|n_hours_ago", { num: i }) : i <= yk ? o("time|about_day_ago") : o("time|n_days_ago", { num: a }) : (n = Math.abs(n), n <= mk ? o("time|in_few_seconds") : n <= hk ? o("time|in_about_minute") : r <= gk ? o("time|in_n_minutes", { num: r }) : r <= _k ? o("time|in_about_hour") : i <= vk ? o("time|in_n_hours", { num: i }) : i <= yk ? o("time|in_about_day") : o("time|in_n_days", { num: a }));
}
function xk(e) {
	return new Intl.RelativeTimeFormat(e?.language, {
		style: "long",
		numeric: "auto"
	});
}
var Sk = {
	picker_menu_item: "_picker_menu_item_1tj52_8",
	picker_form: "_picker_form_1tj52_12",
	picker_input: "_picker_input_1tj52_22",
	picker_input_date: "_picker_input_date_1tj52_28"
}, Ck = ({ vm: e, inputRef: n, onSubmitted: r, onDismissed: i }) => {
	let a = Y(e), o = mp(a.jumpFromDate ? new Date(a.jumpFromDate) : /* @__PURE__ */ new Date()), { translate: s } = W(), c = d(), [l, u] = h(o), f = m(null), p = n ?? f, g = m(null), _ = (e) => {
		e.key === "Tab" && (e.shiftKey ? i?.() : (e.preventDefault(), g.current?.focus()));
	}, v = (e) => {
		u(e.currentTarget.value);
	}, y = () => {
		e.onDatePicked?.(l), r?.();
	};
	return /* @__PURE__ */ t.createElement(k, {
		as: "div",
		"data-testid": "jump-to-date-picker",
		label: s("room|jump_to_date"),
		onSelect: (e) => {
			e.preventDefault();
		},
		hideChevron: !0,
		className: Sk.picker_menu_item
	}, /* @__PURE__ */ t.createElement(ne, {
		className: Sk.picker_form,
		onSubmit: (e) => {
			e.preventDefault(), y();
		}
	}, /* @__PURE__ */ t.createElement(C, {
		name: "jump-to-date-field",
		className: Sk.picker_input
	}, /* @__PURE__ */ t.createElement(oe, {
		ref: p,
		id: c,
		type: "date",
		"aria-label": s("room|jump_to_date_prompt"),
		onInput: v,
		onKeyDown: _,
		value: l,
		max: mp(/* @__PURE__ */ new Date()),
		className: Sk.picker_input_date
	})), /* @__PURE__ */ t.createElement(ae, {
		ref: g,
		className: Sk.picker_button,
		type: "submit",
		kind: "primary",
		size: "sm",
		onKeyDown: (e) => {
			e.key === "Tab" && (e.shiftKey ? (e.preventDefault(), p.current?.focus()) : i?.()), (e.key == "Enter" || e.key == " " || e.key == "Spacebar") && (e.preventDefault(), y());
		}
	}, s("action|go"))));
}, wk = {
	picker_menu: "_picker_menu_158c5_8",
	picker_menu_item: "_picker_menu_item_158c5_14",
	picker_separator: "_picker_separator_158c5_18"
}, Tk = ({ vm: e, open: n, trigger: r, onOpenChange: i }) => {
	let a = W(), { translate: o } = W(), s = m(null);
	return /* @__PURE__ */ t.createElement(O, {
		open: n,
		onOpenChange: (e) => {
			i?.(e);
		},
		title: o("room|jump_to_date"),
		showTitle: !1,
		trigger: r,
		align: "start",
		className: wk.picker_menu
	}, /* @__PURE__ */ t.createElement(k, {
		label: A_(xk(a).format(-1, "week")),
		onSelect: () => e.onLastWeekPicked?.(),
		"data-testid": "jump-to-date-last-week",
		hideChevron: !0,
		className: wk.picker_menu_item
	}), /* @__PURE__ */ t.createElement(k, {
		label: A_(xk(a).format(-1, "month")),
		onSelect: () => e.onLastMonthPicked?.(),
		"data-testid": "jump-to-date-last-month",
		hideChevron: !0,
		className: wk.picker_menu_item
	}), /* @__PURE__ */ t.createElement(k, {
		label: o("room|jump_to_date_beginning"),
		onSelect: () => e.onBeginningPicked?.(),
		"data-testid": "jump-to-date-beginning",
		hideChevron: !0,
		className: wk.picker_menu_item,
		onKeyDown: (e) => {
			e.key === "ArrowDown" && (e.preventDefault(), s.current?.focus());
		}
	}), /* @__PURE__ */ t.createElement(re, {
		decorative: !0,
		className: wk.picker_separator
	}), /* @__PURE__ */ t.createElement(Ck, {
		vm: e,
		inputRef: s,
		onSubmitted: () => i?.(!1),
		onDismissed: () => i?.(!1)
	}));
}, Ek = a(function({ label: e, tooltipOpen: n, className: r, ...i }, a) {
	let { translate: o } = W();
	return /* @__PURE__ */ t.createElement(M, {
		description: o("room|jump_to_date"),
		placement: "right",
		open: n
	}, /* @__PURE__ */ t.createElement(q, {
		ref: a,
		"data-testid": "jump-to-date-separator-button",
		className: r,
		"aria-live": "off",
		"aria-label": o("room|jump_to_date"),
		role: "button",
		tabIndex: 0,
		...i
	}, /* @__PURE__ */ t.createElement(T, {
		as: "h2",
		size: "lg",
		"aria-hidden": "true"
	}, e), /* @__PURE__ */ t.createElement(uE, null)));
});
//#endregion
//#region src/room/timeline/DateSeparatorView/DateSeparatorView.tsx
function Dk({ vm: e, className: n }) {
	let { label: r, jumpToEnabled: i } = Y(e), [a, o] = h(!1), [s, c] = h(!1), [l, u] = h(!1);
	return i ? /* @__PURE__ */ t.createElement(pk, {
		label: r,
		className: (0, U.default)(n),
		role: "none"
	}, /* @__PURE__ */ t.createElement(Tk, {
		vm: e,
		open: a,
		onOpenChange: (e) => {
			o(e), e && (c(!1), u(!1));
		},
		trigger: /* @__PURE__ */ t.createElement(Ek, {
			label: r,
			tooltipOpen: !a && (s || l),
			className: dk.content,
			onMouseEnter: () => c(!0),
			onMouseLeave: () => c(!1),
			onFocus: (e) => u(e.currentTarget.matches(":focus-visible")),
			onBlur: () => u(!1)
		})
	})) : /* @__PURE__ */ t.createElement(pk, {
		label: r,
		className: (0, U.default)(n)
	}, /* @__PURE__ */ t.createElement(q, { className: dk.content }, /* @__PURE__ */ t.createElement(T, {
		as: "h2",
		size: "lg",
		"aria-hidden": "true"
	}, r)));
}
var Ok = {
	toolbar: "_toolbar_1ax4y_8",
	toolbar_item: "_toolbar_item_1ax4y_14"
};
//#endregion
//#region src/room/timeline/event-tile/actions/ActionBarView/ActionBarButton.tsx
function kk({ presentation: e, buttonRef: n, label: r, onActivate: i, icon: a, disabled: o, ariaPressed: s, ariaExpanded: c, tooltipDescription: l, tooltipCaption: u }) {
	let d = e === "icon";
	return /* @__PURE__ */ t.createElement(M, {
		description: l ?? r,
		caption: u,
		placement: "top"
	}, /* @__PURE__ */ t.createElement(y, {
		"data-presentation": e,
		ref: n,
		kind: "tertiary",
		size: "sm",
		iconOnly: d,
		"aria-label": r,
		"aria-pressed": s,
		"aria-expanded": c,
		disabled: o,
		onClick: (e) => i?.(e.currentTarget),
		onContextMenu: (e) => {
			e.preventDefault(), e.stopPropagation(), i?.(e.currentTarget);
		},
		className: Ok.toolbar_item,
		Icon: d ? a : void 0
	}, d ? void 0 : r));
}
//#endregion
//#region src/room/timeline/event-tile/actions/ActionBarView/ActionBarView.tsx
var Ak = /* @__PURE__ */ function(e) {
	return e.Cancel = "cancel", e.CopyLink = "copyLink", e.Download = "download", e.Edit = "edit", e.Expand = "expand", e.Hide = "hide", e.Options = "options", e.Pin = "pin", e.React = "react", e.Remove = "remove", e.Reply = "reply", e.ReplyInThread = "replyInThread", e.Resend = "resend", e.ViewInRoom = "viewInRoom", e.ViewSource = "viewSource", e;
}({});
function jk({ vm: e, className: n }) {
	let { translate: r } = W(), [i, a] = h(0), { actions: o, presentation: s = "icon", isThreadReplyAllowed: l, isDownloadEncrypted: u, isDownloadLoading: d, isPinned: g, isQuoteExpanded: _, downloadScanState: v } = Y(e), y = m({}), b = p(() => Object.fromEntries(Object.values(Ak).map((e) => [e, (t) => {
		y.current[e] = t;
	}])), []), x = {};
	x.edit = /* @__PURE__ */ t.createElement(kk, {
		key: "edit",
		presentation: s,
		buttonRef: b.edit,
		label: r("action|edit"),
		onActivate: e.onEditClick,
		icon: OE
	});
	let S = r(g ? "action|unpin" : "action|pin");
	x.pin = /* @__PURE__ */ t.createElement(kk, {
		key: "pin",
		presentation: s,
		buttonRef: b.pin,
		label: S,
		onActivate: e.onPinClick,
		icon: g ? RD : gD,
		ariaPressed: g
	}), x.cancel = /* @__PURE__ */ t.createElement(kk, {
		key: "cancel",
		presentation: s,
		buttonRef: b.cancel,
		label: r("action|delete"),
		onActivate: e.onCancelClick,
		icon: bE
	}), x.copyLink = /* @__PURE__ */ t.createElement(kk, {
		key: "copyLink",
		presentation: s,
		buttonRef: b.copyLink,
		label: r("timeline|mab|copy_link_thread"),
		onActivate: e.onCopyLinkClick,
		icon: QE
	}), x.reply = /* @__PURE__ */ t.createElement(kk, {
		key: "reply",
		presentation: s,
		buttonRef: b.reply,
		label: r("action|reply"),
		onActivate: e.onReplyClick,
		icon: wD
	}), x.react = /* @__PURE__ */ t.createElement(kk, {
		key: "react",
		presentation: s,
		buttonRef: b.react,
		label: r("action|react"),
		onActivate: e.onReactionsClick,
		icon: SD
	});
	let C = r("action|download");
	d && (C = r(u ? "timeline|download_action_decrypting" : "timeline|download_action_downloading")), x.download = /* @__PURE__ */ t.createElement(kk, {
		key: "download",
		presentation: s,
		buttonRef: b.download,
		label: C,
		onActivate: e.onDownloadClick,
		icon: d || v === "scanning" ? ee : v === "unsafe" ? iE : wE,
		disabled: d || v === "unsafe"
	}), x.hide = /* @__PURE__ */ t.createElement(kk, {
		key: "hide",
		presentation: s,
		buttonRef: b.hide,
		label: r("action|hide"),
		onActivate: e.onHideClick,
		icon: JD
	});
	let w = r(l ? "action|reply_in_thread" : "threads|error_start_thread_existing_relation");
	x.replyInThread = /* @__PURE__ */ t.createElement(kk, {
		key: "replyInThread",
		presentation: s,
		buttonRef: b.replyInThread,
		label: r("action|reply_in_thread"),
		tooltipDescription: w,
		onActivate: e.onReplyInThreadClick,
		icon: ID,
		disabled: !l
	}), x.resend = /* @__PURE__ */ t.createElement(kk, {
		key: "resend",
		presentation: s,
		buttonRef: b.resend,
		label: r("action|retry"),
		onActivate: e.onResendClick,
		icon: ED
	});
	let T = r(_ ? "timeline|mab|collapse_reply_chain" : "timeline|mab|expand_reply_chain");
	x.expand = /* @__PURE__ */ t.createElement(kk, {
		key: "expand",
		presentation: s,
		buttonRef: b.expand,
		label: T,
		tooltipCaption: `${r("keyboard|shift")} + ${r("action|click")}`,
		onActivate: e.onToggleThreadExpanded,
		icon: _ ? gE : PE,
		ariaExpanded: _
	}), x.options = /* @__PURE__ */ t.createElement(kk, {
		key: "options",
		presentation: s,
		buttonRef: b.options,
		label: r("common|options"),
		onActivate: e.onOptionsClick,
		icon: fD
	}), x.remove = /* @__PURE__ */ t.createElement(kk, {
		key: "remove",
		presentation: s,
		buttonRef: b.remove,
		label: r("action|remove"),
		onActivate: e.onRemoveClick,
		icon: bE
	}), x.viewInRoom = /* @__PURE__ */ t.createElement(kk, {
		key: "viewInRoom",
		presentation: s,
		buttonRef: b.viewInRoom,
		label: r("timeline|mab|view_in_room"),
		onActivate: e.onViewInRoomClick,
		icon: XD
	}), x.viewSource = /* @__PURE__ */ t.createElement(kk, {
		key: "viewSource",
		presentation: s,
		buttonRef: b.viewSource,
		label: r("action|view_source"),
		onActivate: e.onViewSourceClick,
		icon: JE
	});
	let E = c((e) => {
		switch (e) {
			case "download": return d;
			case "replyInThread": return !l;
			default: return !1;
		}
	}, [d, l]), D = p(() => o.map((e) => ({
		action: e,
		disabled: E(e)
	})), [o, E]), O = D.map((e, t) => e.disabled ? -1 : t).filter((e) => e >= 0), k = O[0] ?? 0, te = D[i] && !D[i].disabled ? i : k;
	f(() => {
		a(te), D.forEach(({ action: e }, t) => {
			let n = y.current[e] ?? null;
			n && (n.tabIndex = t === te ? 0 : -1);
		});
	}, [te, D]);
	let A = (e) => {
		let t = D[e]?.action, n = t ? y.current[t] ?? null : null;
		n && (a(e), n.focus());
	};
	return D.length === 0 ? null : /* @__PURE__ */ t.createElement(q, {
		display: "inline-flex",
		direction: "row",
		role: "toolbar",
		"aria-label": r("timeline|mab|label"),
		"aria-live": "off",
		onKeyDown: (e) => {
			if (O.length === 0) return;
			let t = D.findIndex(({ action: e }) => y.current[e] === document.activeElement), n = t >= 0 ? t : te;
			switch (e.key) {
				case "ArrowRight": {
					e.preventDefault();
					let t = O.find((e) => e > n) ?? O[0];
					A(t);
					break;
				}
				case "ArrowLeft": {
					e.preventDefault();
					let t = [...O].reverse().find((e) => e < n);
					A(t ?? O[O.length - 1]);
					break;
				}
				case "Home":
					e.preventDefault(), A(O[0]);
					break;
				case "End": e.preventDefault(), A(O[O.length - 1]);
			}
		},
		onFocusCapture: () => {
			let e = D.findIndex(({ action: e }) => y.current[e] === document.activeElement);
			e >= 0 && e !== i && a(e);
		},
		className: (0, U.default)(n, Ok.toolbar)
	}, D.map((e) => x[e.action]));
}
var Mk = {
	disambiguatedProfile: "_disambiguatedProfile_oa3at_8",
	disambiguatedProfile_displayName: "_disambiguatedProfile_displayName_oa3at_14",
	disambiguatedProfile_mxid: "_disambiguatedProfile_mxid_oa3at_22"
};
//#endregion
//#region src/room/timeline/event-tile/EventTileView/DisambiguatedProfile/DisambiguatedProfileView.tsx
function Nk({ vm: e, className: n }) {
	let { displayName: r, colorClass: i, displayIdentifier: a, title: o, emphasizeDisplayName: s } = Y(e), c = (0, U.default)(i, {
		[Mk.disambiguatedProfile_displayName]: s,
		mx_DisambiguatedProfile_displayName: s
	}), l = e.onClick ? (t) => {
		(t.key === "Enter" || t.key === " ") && (t.preventDefault(), e.onClick?.(t));
	} : void 0;
	return /* @__PURE__ */ t.createElement("div", {
		className: (0, U.default)(n, Mk.disambiguatedProfile),
		title: o,
		onClick: e.onClick,
		onKeyDown: l,
		role: e.onClick ? "button" : void 0,
		tabIndex: e.onClick ? 0 : void 0
	}, /* @__PURE__ */ t.createElement("span", {
		className: c,
		dir: "auto"
	}, r), a && /* @__PURE__ */ t.createElement("span", { className: (0, U.default)("mx_DisambiguatedProfile_mxid", Mk.disambiguatedProfile_mxid) }, a));
}
var Pk = { content: "_content_m88ar_8" }, Fk = {
	container: "_container_sq5fu_8",
	title: "_title_sq5fu_34",
	subtitle: "_subtitle_sq5fu_35"
};
//#endregion
//#region src/room/timeline/event-tile/EventTileView/EventTileBubble/EventTileBubble.tsx
function Ik({ icon: e, title: n, subtitle: r, className: i, children: a, ref: o }) {
	return /* @__PURE__ */ t.createElement("div", {
		className: (0, U.default)(Fk.container, i),
		ref: o
	}, e, /* @__PURE__ */ t.createElement("div", { className: Fk.title }, n), r && /* @__PURE__ */ t.createElement("div", { className: Fk.subtitle }, r), a);
}
//#endregion
//#region src/room/timeline/event-tile/EventTileView/EncryptionEventView/EncryptionEventView.tsx
var Lk = /* @__PURE__ */ function(e) {
	return e.CHANGED = "CHANGED", e.DISABLE_ATTEMPT = "DISABLE_ATTEMPT", e.ENABLED = "ENABLED", e.ENABLED_DM = "ENABLED_DM", e.ENABLED_LOCAL = "ENABLED_LOCAL", e.UNSUPPORTED = "UNSUPPORTED", e;
}({});
function Rk({ vm: e, ref: n, className: r }) {
	let { translate: i } = W(), { state: a, encryptedStateEvents: o, userName: s, timestamp: c } = Y(e), l = /* @__PURE__ */ t.createElement(eD, { "data-state": "supported" }), u = i(o ? "common|state_encryption_enabled" : "common|encryption_enabled"), d = "";
	switch (a) {
		case "CHANGED":
			d = i("timeline|m.room.encryption|parameters_changed");
			break;
		case "DISABLE_ATTEMPT":
			u = i("common|encryption_enabled"), d = i("timeline|m.room.encryption|disable_attempt");
			break;
		case "ENABLED":
			d = i(o ? "timeline|m.room.encryption|state_enabled" : "timeline|m.room.encryption|enabled");
			break;
		case "ENABLED_DM":
			d = i("timeline|m.room.encryption|enabled_dm", { displayName: s });
			break;
		case "ENABLED_LOCAL":
			d = i("timeline|m.room.encryption|enabled_local");
			break;
		default: l = /* @__PURE__ */ t.createElement(ME, { "data-state": "unsupported" }), u = i("timeline|m.room.encryption|disabled"), d = i("timeline|m.room.encryption|unsupported");
	}
	return /* @__PURE__ */ t.createElement(Ik, {
		icon: l,
		className: (0, U.default)(r, Pk.content),
		title: u,
		subtitle: d,
		ref: n
	}, c);
}
var zk = { pinnedMessageBadge: "_pinnedMessageBadge_10mi2_8" };
//#endregion
//#region src/room/timeline/event-tile/EventTileView/PinnedMessageBadge/PinnedMessageBadge.tsx
function Bk({ className: e, children: n, ...r }) {
	return /* @__PURE__ */ t.createElement("div", {
		...r,
		className: (0, U.default)(zk.pinnedMessageBadge, e)
	}, /* @__PURE__ */ t.createElement(mD, {
		width: "16px",
		height: "16px"
	}), n ?? J("room|pinned_message_badge"));
}
//#endregion
//#region src/room/timeline/event-tile/EventTileView/TextualEventView/TextualEventView.tsx
function Vk({ vm: e }) {
	let n = Y(e);
	return /* @__PURE__ */ t.createElement("div", { className: "mx_TextualEvent" }, n.content);
}
var Hk = {
	audioPlayer: "_audioPlayer_1eyxr_8",
	mediaInfo: "_mediaInfo_1eyxr_13",
	mediaName: "_mediaName_1eyxr_18",
	byline: "_byline_1eyxr_27",
	clock: "_clock_1eyxr_31",
	error: "_error_1eyxr_35"
};
//#endregion
//#region src/core/utils/FormattingUtils.ts
function Uk(e, t = 2) {
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
function Wk({ vm: e }) {
	let { translate: n } = W(), { playbackState: r, mediaName: i = n("timeline|m.audio|unnamed_audio"), sizeBytes: a, durationSeconds: o, playedSeconds: s, percentComplete: c, error: l } = Y(e), u = a ? `(${Uk(a)})` : null, d = r === "decoding";
	return /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement(aO, {
		className: Hk.audioPlayer,
		tabIndex: 0,
		onKeyDown: e.onKeyDown,
		"aria-label": n("timeline|m.audio|audio_player"),
		role: "region"
	}, /* @__PURE__ */ t.createElement(q, {
		gap: "var(--cpd-space-2x)",
		align: "center"
	}, /* @__PURE__ */ t.createElement(Cp, {
		tabIndex: -1,
		disabled: d,
		playing: r === "playing",
		togglePlay: e.togglePlay
	}), /* @__PURE__ */ t.createElement(q, {
		direction: "column",
		className: Hk.mediaInfo
	}, /* @__PURE__ */ t.createElement("span", {
		className: Hk.mediaName,
		"data-testid": "audio-player-name"
	}, i), /* @__PURE__ */ t.createElement(q, {
		className: Hk.byline,
		gap: "var(--cpd-space-1-5x)"
	}, /* @__PURE__ */ t.createElement(hp, { seconds: o }), u))), /* @__PURE__ */ t.createElement(q, {
		align: "center",
		gap: "var(--cpd-space-1x)",
		"data-testid": "audio-player-seek"
	}, /* @__PURE__ */ t.createElement(Fb, {
		tabIndex: -1,
		disabled: d,
		value: c,
		onChange: e.onSeekbarChange
	}), /* @__PURE__ */ t.createElement(hp, {
		className: Hk.clock,
		seconds: s,
		role: "timer"
	}))), l && /* @__PURE__ */ t.createElement("span", { className: Hk.error }, n("timeline|m.audio|error_downloading_audio")));
}
var Gk = {
	content: "_content_1uqu1_8",
	error: "_error_1uqu1_14",
	icon: "_icon_1uqu1_23"
}, Kk = /* @__PURE__ */ function(e) {
	return e.MEGOLM_KEY_WITHHELD_FOR_UNVERIFIED_DEVICE = "MEGOLM_KEY_WITHHELD_FOR_UNVERIFIED_DEVICE", e.HISTORICAL_MESSAGE_NO_KEY_BACKUP = "HISTORICAL_MESSAGE_NO_KEY_BACKUP", e.HISTORICAL_MESSAGE_BACKUP_UNCONFIGURED = "HISTORICAL_MESSAGE_BACKUP_UNCONFIGURED", e.HISTORICAL_MESSAGE_USER_NOT_JOINED = "HISTORICAL_MESSAGE_USER_NOT_JOINED", e.SENDER_IDENTITY_PREVIOUSLY_VERIFIED = "SENDER_IDENTITY_PREVIOUSLY_VERIFIED", e.UNSIGNED_SENDER_DEVICE = "UNSIGNED_SENDER_DEVICE", e.UNABLE_TO_DECRYPT = "UNABLE_TO_DECRYPT", e;
}({});
function qk(e, n, r) {
	let i = e.translate;
	switch (n) {
		case "MEGOLM_KEY_WITHHELD_FOR_UNVERIFIED_DEVICE": return i("timeline|decryption_failure|blocked");
		case "HISTORICAL_MESSAGE_NO_KEY_BACKUP": return i("timeline|decryption_failure|historical_event_no_key_backup");
		case "HISTORICAL_MESSAGE_BACKUP_UNCONFIGURED":
			if (r === !1) return i("timeline|decryption_failure|historical_event_unverified_device");
			break;
		case "HISTORICAL_MESSAGE_USER_NOT_JOINED": return i("timeline|decryption_failure|historical_event_user_not_joined");
		case "SENDER_IDENTITY_PREVIOUSLY_VERIFIED": return /* @__PURE__ */ t.createElement("span", null, /* @__PURE__ */ t.createElement(iE, {
			className: Gk.icon,
			width: "16px",
			height: "16px"
		}), i("timeline|decryption_failure|sender_identity_previously_verified"));
		case "UNSIGNED_SENDER_DEVICE": return /* @__PURE__ */ t.createElement("span", null, /* @__PURE__ */ t.createElement(iE, {
			className: Gk.icon,
			width: "16px",
			height: "16px"
		}), i("timeline|decryption_failure|sender_unsigned_device"));
	}
	return i("timeline|decryption_failure|unable_to_decrypt");
}
function Jk(e) {
	switch (e) {
		case "SENDER_IDENTITY_PREVIOUSLY_VERIFIED":
		case "UNSIGNED_SENDER_DEVICE": return Gk.error;
	}
	return null;
}
function Yk({ vm: e, ref: n, className: r }) {
	let i = W(), { decryptionFailureReason: a, isLocalDeviceVerified: o } = Y(e), s = (0, U.default)(Gk.content, Jk(a), r);
	return /* @__PURE__ */ t.createElement("div", {
		className: s,
		ref: n
	}, qk(i, a, o));
}
var Xk = {
	reactionsRow: "_reactionsRow_1lcz2_8",
	showAllButton: "_showAllButton_1lcz2_16",
	addReactionButton: "_addReactionButton_1lcz2_29",
	addReactionButtonVisible: "_addReactionButtonVisible_1lcz2_48",
	addReactionButtonActive: "_addReactionButtonActive_1lcz2_52",
	addReactionButtonDisabled: "_addReactionButtonDisabled_1lcz2_56"
};
//#endregion
//#region src/room/timeline/event-tile/reactions/ReactionsRow/ReactionsRowView.tsx
function Zk({ vm: e, className: n, children: r }) {
	let { ariaLabel: i, isVisible: a, showAllButtonVisible: o, showAllButtonLabel: s, showAddReactionButton: c, addReactionButtonLabel: l, addReactionButtonVisible: u, addReactionButtonActive: d, addReactionButtonDisabled: f } = Y(e);
	if (!a) return /* @__PURE__ */ t.createElement(t.Fragment, null);
	let p = (0, U.default)(Xk.addReactionButton, {
		[Xk.addReactionButtonVisible]: u,
		[Xk.addReactionButtonActive]: d,
		[Xk.addReactionButtonDisabled]: f
	}), m = e.onAddReactionContextMenu ? (t) => {
		t.preventDefault(), e.onAddReactionContextMenu?.(t);
	} : void 0, h = /* @__PURE__ */ t.createElement("button", {
		type: "button",
		className: p,
		"aria-label": l,
		disabled: f,
		onClick: e.onAddReactionClick,
		onContextMenu: m
	}, /* @__PURE__ */ t.createElement(SD, null));
	return /* @__PURE__ */ t.createElement("div", {
		className: (0, U.default)(n, Xk.reactionsRow),
		role: "toolbar",
		"aria-label": i
	}, r, o && /* @__PURE__ */ t.createElement("button", {
		type: "button",
		className: Xk.showAllButton,
		onClick: e.onShowAllClick
	}, s), c && /* @__PURE__ */ t.createElement(M, {
		description: l,
		placement: "right"
	}, h));
}
//#endregion
//#region src/room/timeline/event-tile/reactions/ReactionsRowButtonTooltip/ReactionsRowButtonTooltipView.tsx
function Qk({ vm: e, children: n }) {
	let { formattedSenders: r, caption: i, tooltipOpen: a } = Y(e);
	return r ? /* @__PURE__ */ t.createElement(M, {
		description: r,
		caption: i,
		placement: "right",
		open: a
	}, n) : /* @__PURE__ */ t.createElement(t.Fragment, null, n);
}
var $k = {
	reactionsRowButton: "_reactionsRowButton_5v4c1_8",
	reactionsRowButtonSelected: "_reactionsRowButtonSelected_5v4c1_21",
	reactionsRowButtonDisabled: "_reactionsRowButtonDisabled_5v4c1_26",
	reactionsRowButtonContent: "_reactionsRowButtonContent_5v4c1_30",
	reactionsRowButtonCount: "_reactionsRowButtonCount_5v4c1_38"
};
//#endregion
//#region src/room/timeline/event-tile/reactions/ReactionsRowButton/ReactionsRowButtonView.tsx
function eA({ vm: e }) {
	let n = Y(e), { content: r, count: i, className: a, isSelected: o, isDisabled: s, imageSrc: c, imageAlt: l, tooltipVm: u } = n, d = n["aria-label"] ?? n.ariaLabel, f = s ? !0 : void 0, p = (0, U.default)(a, $k.reactionsRowButton, {
		[$k.reactionsRowButtonSelected]: o,
		[$k.reactionsRowButtonDisabled]: s
	}), m = c ? /* @__PURE__ */ t.createElement("img", {
		className: $k.reactionsRowButtonContent,
		alt: l ?? "",
		src: c,
		width: "16",
		height: "16"
	}) : /* @__PURE__ */ t.createElement("span", {
		className: $k.reactionsRowButtonContent,
		"aria-hidden": "true"
	}, r ?? "");
	return /* @__PURE__ */ t.createElement(Qk, { vm: u }, /* @__PURE__ */ t.createElement("button", {
		type: "button",
		className: p,
		tabIndex: 0,
		"aria-label": d,
		"aria-disabled": f,
		onClick: s ? void 0 : e.onClick
	}, m, /* @__PURE__ */ t.createElement("span", {
		className: $k.reactionsRowButtonCount,
		"aria-hidden": "true"
	}, i)));
}
var tA = { content: "_content_kc5mt_8" };
//#endregion
//#region src/room/timeline/event-tile/timestamp/MessageTimestampView/MessageTimestampView.tsx
function nA({ vm: e, className: n }) {
	let { translate: r } = W(), { ts: i, tsSentAt: a, tsReceivedAt: o, inhibitTooltip: s, href: c } = Y(e), l = (t) => {
		e.onClick && (t.key === "Enter" || t.key === " ") && (t.preventDefault(), e.onClick?.(t));
	}, u = a, d;
	o && o?.length > 0 && (u = r("timeline|message_timestamp_sent_at", { dateTime: u }), d = r("timeline|message_timestamp_received_at", { dateTime: o }));
	let f;
	return f = c ? /* @__PURE__ */ t.createElement("a", {
		href: c,
		onClick: e.onClick,
		onKeyDown: l,
		onContextMenu: e.onContextMenu,
		className: (0, U.default)(n, tA.content),
		"aria-live": "off"
	}, i) : /* @__PURE__ */ t.createElement("span", {
		onClick: e.onClick,
		onKeyDown: l,
		onContextMenu: e.onContextMenu,
		className: (0, U.default)(n, tA.content),
		role: e.onClick ? "link" : void 0,
		"aria-live": "off",
		tabIndex: e.onClick || !s ? 0 : void 0
	}, i), s ? f : /* @__PURE__ */ t.createElement(M, {
		description: u,
		caption: d
	}, f);
}
var rA = {
	richItem: "_richItem_1c0uo_8",
	avatar: "_avatar_1c0uo_36",
	title: "_title_1c0uo_41",
	description: "_description_1c0uo_47",
	timestamp: "_timestamp_1c0uo_51",
	checkmark: "_checkmark_1c0uo_69"
}, iA = s(function({ avatar: e, title: n, description: r, timestamp: i, selected: a, ...o }) {
	let s = W();
	return /* @__PURE__ */ t.createElement("li", {
		className: rA.richItem,
		role: "option",
		tabIndex: -1,
		"aria-selected": a,
		"aria-label": n,
		...o
	}, a ? /* @__PURE__ */ t.createElement(aA, null) : /* @__PURE__ */ t.createElement(q, { className: rA.avatar }, e), /* @__PURE__ */ t.createElement("span", { className: rA.title }, n), /* @__PURE__ */ t.createElement("span", { className: rA.description }, r), i && /* @__PURE__ */ t.createElement("span", {
		role: "timer",
		className: rA.timestamp
	}, s.humanizeTime(i)));
});
function aA() {
	return /* @__PURE__ */ t.createElement(q, {
		align: "center",
		justify: "center",
		"aria-hidden": "true",
		className: rA.checkmark
	}, /* @__PURE__ */ t.createElement(cE, {
		width: "24px",
		height: "24px",
		color: "var(--cpd-color-icon-on-solid-primary)"
	}));
}
var oA = {
	richList: "_richList_1mcas_8",
	title: "_title_1mcas_12",
	content: "_content_1mcas_18",
	empty: "_empty_1mcas_26"
};
//#endregion
//#region src/core/hooks/useListKeyboardNavigation.ts
function sA() {
	let e = m(null), t = c((t) => {
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
		onKeyDown: c((t) => {
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
function cA({ children: e, title: n, className: r, titleAttributes: i, isEmpty: a = !1, ...o }) {
	let s = d(), { listRef: c, onKeyDown: l, onFocus: u } = sA();
	return /* @__PURE__ */ t.createElement(q, {
		className: (0, U.default)(oA.richList, r),
		direction: "column",
		...o
	}, /* @__PURE__ */ t.createElement("span", {
		id: s,
		className: oA.title,
		...i
	}, n), a ? /* @__PURE__ */ t.createElement("span", { className: oA.empty }, e) : /* @__PURE__ */ t.createElement("ul", {
		ref: c,
		role: "listbox",
		className: oA.content,
		"aria-labelledby": s,
		tabIndex: 0,
		onKeyDown: l,
		onFocus: u
	}, e));
}
var lA = { title: "_title_1qyi3_8" };
//#endregion
//#region src/room-list/RoomListHeaderView/menu/OptionMenuView.tsx
function uA({ vm: e }) {
	let { translate: n } = W(), [r, i] = h(!1), { activeSortOption: a, isMessagePreviewEnabled: o } = Y(e);
	return /* @__PURE__ */ t.createElement(O, {
		open: r,
		onOpenChange: i,
		title: n("room_list|room_options"),
		showTitle: !1,
		align: "start",
		trigger: /* @__PURE__ */ t.createElement(E, {
			tooltip: n("room_list|room_options"),
			"aria-label": n("room_list|room_options"),
			size: "28px",
			style: { padding: "4px" }
		}, /* @__PURE__ */ t.createElement(fD, null))
	}, /* @__PURE__ */ t.createElement(te, {
		title: n("room_list|sort"),
		className: lA.title
	}), /* @__PURE__ */ t.createElement(A, {
		label: n("room_list|sort_type|activity"),
		checked: a === "recent",
		onSelect: () => e.sort("recent")
	}), /* @__PURE__ */ t.createElement(A, {
		label: n("room_list|sort_type|unread_first"),
		checked: a === "unread-first",
		onSelect: () => e.sort("unread-first")
	}), /* @__PURE__ */ t.createElement(A, {
		label: n("room_list|sort_type|atoz"),
		checked: a === "alphabetical",
		onSelect: () => e.sort("alphabetical")
	}), /* @__PURE__ */ t.createElement(te, { title: n("room_list|appearance") }), /* @__PURE__ */ t.createElement(x, {
		label: n("room_list|show_message_previews"),
		onSelect: e.toggleMessagePreview,
		checked: o
	}));
}
var dA = { button: "_button_1veqf_8" };
//#endregion
//#region src/room-list/RoomListHeaderView/menu/SpaceMenuView.tsx
function fA({ vm: e }) {
	let { translate: n } = W(), { canInviteInSpace: r, canAccessSpaceSettings: i, title: a } = Y(e), [o, s] = h(!1);
	return /* @__PURE__ */ t.createElement(O, {
		open: o,
		onOpenChange: s,
		title: a,
		align: "start",
		trigger: /* @__PURE__ */ t.createElement(E, {
			className: dA.button,
			"aria-label": n("room_list|open_space_menu"),
			size: "24px",
			style: { padding: "2px" }
		}, /* @__PURE__ */ t.createElement(uE, null))
	}, /* @__PURE__ */ t.createElement(k, {
		Icon: WE,
		label: n("room_list|space_menu|home"),
		onSelect: e.openSpaceHome,
		hideChevron: !0
	}), r && /* @__PURE__ */ t.createElement(k, {
		Icon: BD,
		label: n("action|invite"),
		onSelect: e.inviteInSpace,
		hideChevron: !0
	}), /* @__PURE__ */ t.createElement(k, {
		Icon: bD,
		label: n("common|preferences"),
		onSelect: e.openSpacePreferences,
		hideChevron: !0
	}), i && /* @__PURE__ */ t.createElement(k, {
		Icon: PD,
		label: n("room_list|space_menu|space_settings"),
		onSelect: e.openSpaceSettings,
		hideChevron: !0
	}));
}
//#endregion
//#region src/room-list/RoomListHeaderView/menu/ComposeMenuView.tsx
function pA({ vm: e }) {
	let { translate: n } = W(), [r, i] = h(!1), { canCreateRoom: a, canCreateVideoRoom: o, canCreateSection: s, useComposeIcon: c } = Y(e);
	return /* @__PURE__ */ t.createElement(O, {
		open: r,
		onOpenChange: i,
		showTitle: !1,
		title: n("action|open_menu"),
		align: "start",
		trigger: /* @__PURE__ */ t.createElement(E, {
			size: "28px",
			style: { padding: "4px" },
			tooltip: n("action|new_conversation")
		}, c ? /* @__PURE__ */ t.createElement(vE, {
			color: "var(--cpd-color-icon-secondary)",
			"aria-hidden": !0
		}) : /* @__PURE__ */ t.createElement(vD, {
			color: "var(--cpd-color-icon-secondary)",
			"aria-hidden": !0
		}))
	}, /* @__PURE__ */ t.createElement(k, {
		Icon: oE,
		label: n("action|start_chat"),
		onSelect: e.createChatRoom,
		hideChevron: !0
	}), a && /* @__PURE__ */ t.createElement(k, {
		Icon: OD,
		label: n("action|new_room"),
		onSelect: e.createRoom,
		hideChevron: !0
	}), o && /* @__PURE__ */ t.createElement(k, {
		Icon: KD,
		label: n("action|new_video_room"),
		onSelect: e.createVideoRoom,
		hideChevron: !0
	}), s && /* @__PURE__ */ t.createElement(k, {
		Icon: MD,
		label: n("action|new_section"),
		onSelect: e.createSection,
		hideChevron: !0
	}));
}
var mA = {
	header: "_header_1b9rm_8",
	container: "_container_1b9rm_13",
	title: "_title_1b9rm_19"
};
//#endregion
//#region src/room-list/RoomListHeaderView/RoomListHeaderView.tsx
function hA({ vm: e }) {
	let { translate: n } = W(), { title: r, displaySpaceMenu: i, displayComposeMenu: a, useComposeIcon: o } = Y(e);
	return /* @__PURE__ */ t.createElement(q, {
		as: "header",
		className: mA.header,
		"aria-label": n("room|context_menu|title"),
		align: "end",
		"data-testid": "room-list-header"
	}, /* @__PURE__ */ t.createElement(q, {
		className: mA.container,
		justify: "space-between",
		align: "center",
		gap: "var(--cpd-space-3x)"
	}, /* @__PURE__ */ t.createElement(q, {
		className: mA.title,
		align: "center",
		gap: "var(--cpd-space-1x)"
	}, /* @__PURE__ */ t.createElement(w, {
		size: "sm",
		title: r
	}, r), i && /* @__PURE__ */ t.createElement(fA, { vm: e })), /* @__PURE__ */ t.createElement(q, {
		align: "center",
		gap: "var(--cpd-space-2x)"
	}, /* @__PURE__ */ t.createElement(uA, { vm: e }), a ? /* @__PURE__ */ t.createElement(pA, { vm: e }) : /* @__PURE__ */ t.createElement(E, {
		size: "28px",
		style: { padding: "4px" },
		onClick: (t) => e.createChatRoom(t.nativeEvent),
		tooltip: n("action|new_conversation")
	}, o ? /* @__PURE__ */ t.createElement(vE, {
		color: "var(--cpd-color-icon-secondary)",
		"aria-hidden": !0
	}) : /* @__PURE__ */ t.createElement(vD, {
		color: "var(--cpd-color-icon-secondary)",
		"aria-hidden": !0
	})))));
}
var gA = {
	view: "_view_z7ks9_8",
	search: "_search_z7ks9_16",
	search_container: "_search_container_z7ks9_29",
	search_text: "_search_text_z7ks9_41"
};
//#endregion
//#region src/room-list/RoomListSearchView/RoomListSearchView.tsx
function _A({ vm: e }) {
	let { translate: n } = W(), { displayExploreButton: r, displayDialButton: i, searchShortcut: a } = Y(e);
	return /* @__PURE__ */ t.createElement(q, {
		"data-testid": "room-list-search",
		className: gA.view,
		role: "search",
		gap: "var(--cpd-space-2x)",
		align: "center"
	}, /* @__PURE__ */ t.createElement(y, {
		id: "room-list-search-button",
		className: gA.search,
		kind: "secondary",
		size: "sm",
		Icon: AD,
		onClick: e.onSearchClick
	}, /* @__PURE__ */ t.createElement(q, {
		className: gA.search_container,
		as: "span",
		justify: "space-between"
	}, /* @__PURE__ */ t.createElement("span", { className: gA.search_text }, n("action|search")), /* @__PURE__ */ t.createElement("kbd", null, a))), i && /* @__PURE__ */ t.createElement(y, {
		kind: "secondary",
		size: "sm",
		Icon: SE,
		iconOnly: !0,
		"aria-label": n("left_panel|open_dial_pad"),
		onClick: e.onDialPadClick
	}), r && /* @__PURE__ */ t.createElement(y, {
		kind: "secondary",
		size: "sm",
		Icon: IE,
		iconOnly: !0,
		"aria-label": n("action|explore_rooms"),
		onClick: e.onExploreClick
	}));
}
//#endregion
//#region src/room-list/RoomListPrimaryFilters/useCollapseFilters.ts
function vA(e, t) {
	let n = m(null), [r, i] = h(!1), [a, o] = h(-1);
	return u(() => {
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
function yA(e, t, n) {
	let [r, i] = h(e);
	return u(() => {
		!((t ? e.indexOf(t) : -1) >= n) || n === -1 ? i(e) : i(e.slice().sort((e, n) => e === t && n !== t ? -1 : +(e !== t && n === t)));
	}, [
		e,
		t,
		n
	]), r;
}
var bA = {
	roomListPrimaryFilters: "_roomListPrimaryFilters_kikqh_8",
	list: "_list_kikqh_17",
	iconButton: "_iconButton_kikqh_27"
}, xA = (e) => {
	switch (e) {
		case "unread": return J("room_list|filters|unread");
		case "people": return J("room_list|filters|people");
		case "rooms": return J("room_list|filters|rooms");
		case "favourite": return J("room_list|filters|favourite");
		case "mentions": return J("room_list|filters|mentions");
		case "invites": return J("room_list|filters|invites");
		case "low_priority": return J("room_list|filters|low_priority");
	}
}, SA = s(function({ filterIds: e, activeFilterId: n, onToggleFilter: r }) {
	let i = d(), [a, o] = h(!1), { ref: s, isWrapping: c, wrappingIndex: l } = vA(a, "wrapping"), u = yA(e, n, l);
	return /* @__PURE__ */ t.createElement(q, {
		className: bA.roomListPrimaryFilters,
		"data-testid": "primary-filters",
		gap: "var(--cpd-space-3x)",
		direction: "row-reverse",
		justify: "space-between"
	}, c && /* @__PURE__ */ t.createElement(E, {
		kind: "secondary",
		"aria-expanded": a,
		"aria-controls": i,
		className: bA.iconButton,
		"aria-label": J(a ? "room_list|collapse_filters" : "room_list|expand_filters"),
		size: "28px",
		onClick: () => o((e) => !e)
	}, /* @__PURE__ */ t.createElement(uE, null)), /* @__PURE__ */ t.createElement(q, {
		id: i,
		as: "div",
		role: "listbox",
		"aria-label": J("room_list|primary_filters"),
		align: "center",
		gap: "var(--cpd-space-2x)",
		wrap: "wrap",
		className: bA.list,
		ref: s
	}, u.map((e, i) => /* @__PURE__ */ t.createElement(b, {
		key: `${e}-${i}`,
		role: "option",
		selected: e === n,
		onClick: () => r(e)
	}, xA(e)))));
}), CA = { skeleton: "_skeleton_1h0mx_8" }, wA = () => /* @__PURE__ */ t.createElement("div", { className: CA.skeleton }), TA = {
	genericPlaceholder: "_genericPlaceholder_1sxid_8",
	title: "_title_1sxid_16",
	description: "_description_1sxid_21",
	defaultPlaceholder: "_defaultPlaceholder_1sxid_27"
}, EA = ({ vm: e }) => {
	let n = Y(e);
	if (!n.activeFilterId) return /* @__PURE__ */ t.createElement(DA, {
		title: J("room_list|empty|no_chats"),
		description: n.canCreateRoom ? J("room_list|empty|no_chats_description") : J("room_list|empty|no_chats_description_no_room_rights")
	}, /* @__PURE__ */ t.createElement(q, {
		className: TA.defaultPlaceholder,
		align: "center",
		justify: "center",
		direction: "column",
		gap: "var(--cpd-space-4x)"
	}, /* @__PURE__ */ t.createElement(y, {
		size: "sm",
		kind: "secondary",
		Icon: oE,
		onClick: e.createChatRoom
	}, J("action|start_chat")), n.canCreateRoom && /* @__PURE__ */ t.createElement(y, {
		size: "sm",
		kind: "secondary",
		Icon: OD,
		onClick: e.createRoom
	}, J("action|new_room"))));
	switch (n.activeFilterId) {
		case "favourite": return /* @__PURE__ */ t.createElement(DA, {
			title: J("room_list|empty|no_favourites"),
			description: J("room_list|empty|no_favourites_description")
		});
		case "people": return /* @__PURE__ */ t.createElement(DA, {
			title: J("room_list|empty|no_people"),
			description: J("room_list|empty|no_people_description")
		});
		case "rooms": return /* @__PURE__ */ t.createElement(DA, {
			title: J("room_list|empty|no_rooms"),
			description: J("room_list|empty|no_rooms_description")
		});
		case "unread": return /* @__PURE__ */ t.createElement(OA, {
			title: J("room_list|empty|no_unread"),
			action: J("room_list|empty|show_chats"),
			onAction: () => e.onToggleFilter(n.activeFilterId)
		});
		case "invites": return /* @__PURE__ */ t.createElement(OA, {
			title: J("room_list|empty|no_invites"),
			action: J("room_list|empty|show_activity"),
			onAction: () => e.onToggleFilter(n.activeFilterId)
		});
		case "mentions": return /* @__PURE__ */ t.createElement(OA, {
			title: J("room_list|empty|no_mentions"),
			action: J("room_list|empty|show_activity"),
			onAction: () => e.onToggleFilter(n.activeFilterId)
		});
		case "low_priority": return /* @__PURE__ */ t.createElement(OA, {
			title: J("room_list|empty|no_lowpriority"),
			action: J("room_list|empty|show_activity"),
			onAction: () => e.onToggleFilter(n.activeFilterId)
		});
		default: return /* @__PURE__ */ t.createElement(DA, {
			title: J("room_list|empty|no_chats"),
			description: J("room_list|empty|no_chats_description")
		});
	}
};
function DA({ title: e, description: n, children: r }) {
	return /* @__PURE__ */ t.createElement(q, {
		"data-testid": "empty-room-list",
		className: TA.genericPlaceholder,
		direction: "column",
		align: "stretch",
		justify: "center",
		gap: "var(--cpd-space-2x)"
	}, /* @__PURE__ */ t.createElement("span", { className: TA.title }, e), n && /* @__PURE__ */ t.createElement("span", { className: TA.description }, n), r);
}
function OA({ title: e, action: n, onAction: r }) {
	return /* @__PURE__ */ t.createElement(DA, { title: e }, r && /* @__PURE__ */ t.createElement(y, {
		kind: "tertiary",
		onClick: r
	}, n));
}
//#endregion
//#region src/core/VirtualizedList/virtualized-list.tsx
var kA = {
	ARROW_UP: "ArrowUp",
	ARROW_DOWN: "ArrowDown",
	HOME: "Home",
	END: "End",
	PAGE_UP: "PageUp",
	PAGE_DOWN: "PageDown",
	ENTER: "Enter",
	SPACE: "Space"
};
function AA(e) {
	return e.ctrlKey || e.metaKey || e.shiftKey || e.altKey;
}
function jA(e) {
	let { items: t, isItemFocusable: n, getItemKey: r, context: i, onKeyDown: a, totalCount: o, rangeChanged: s, mapScrollIndex: l, mapRangeIndex: d, ...f } = e, g = m(null), _ = m(null), [v, y] = h(e.items[0] ? r(e.items[0]) : void 0), [b, x] = h(void 0), S = p(() => {
		let e = /* @__PURE__ */ new Map();
		return t.forEach((t, n) => e.set(r(t), n)), e;
	}, [t, r]), [C, w] = h(!1);
	u(() => {
		t.length && (!v || S.get(v) === void 0) && y(r(t[0]));
	}, [
		t,
		r,
		v,
		S
	]);
	let T = c((e, n) => {
		let i = Math.max(0, Math.min(e, t.length - 1));
		if (t[i]) {
			let e = r(t[i]);
			y(e);
			let a = l ? l(i) : i;
			g.current?.scrollIntoView({
				index: a,
				align: n,
				behavior: "auto"
			});
		}
	}, [
		t,
		r,
		l
	]), E = c((e, r, i) => {
		let a = t.length, o;
		for (let i = e; r ? i < a : i >= 0; i += r ? 1 : -1) if (n(t[i])) {
			o = i;
			break;
		}
		o !== void 0 && T(o, i);
	}, [
		T,
		t,
		n
	]), ee = c((e) => {
		let n = v ? S.get(v) : void 0, r = !1;
		if (!e || AA(e)) a?.(e);
		else {
			if (e.code === kA.ARROW_UP && n !== void 0) E(n - 1, !1), r = !0;
			else if (e.code === kA.ARROW_DOWN && n !== void 0) E(n + 1, !0), r = !0;
			else if (e.code === kA.HOME) T(0), r = !0;
			else if (e.code === kA.END) T(t.length - 1), r = !0;
			else if (e.code === kA.PAGE_DOWN && b && n !== void 0) {
				let e = b.endIndex - b.startIndex;
				E(Math.min(n + e, t.length - 1), !0, "start"), r = !0;
			} else if (e.code === kA.PAGE_UP && b && n !== void 0) {
				let e = b.endIndex - b.startIndex;
				E(Math.max(n - e, 0), !1, "start"), r = !0;
			}
			if (r) {
				if (_.current instanceof HTMLElement) {
					let e = document.activeElement;
					e && e !== _.current && _.current.contains(e) && _.current.focus({ preventScroll: !0 });
				}
				e.stopPropagation(), e.preventDefault();
			} else a?.(e);
		}
	}, [
		T,
		E,
		v,
		S,
		b,
		t,
		a
	]), D = c((e) => {
		_.current = e;
	}, []), O = c((e, t) => {
		let n = r(e);
		w(!0), y(n), t.stopPropagation();
	}, [r]), k = c((e) => {
		if (e?.currentTarget !== _.current || typeof v != "string") return;
		w(!0);
		let t = S.get(v);
		t !== void 0 && b && (t < b.startIndex || t > b.endIndex) && T(t), e.stopPropagation(), e.preventDefault();
	}, [
		S,
		b,
		T,
		v
	]), te = c((e) => {
		e.currentTarget.contains(e.relatedTarget) || w(!1);
	}, []), A = p(() => ({
		tabIndexKey: v,
		focused: C,
		context: e.context || {}
	}), [
		v,
		C,
		e.context
	]), ne = c((e) => {
		let t = d ? {
			startIndex: d(e.startIndex),
			endIndex: d(e.endIndex)
		} : e;
		x(t), s?.(e);
	}, [s, d]);
	return {
		...f,
		ref: g,
		scrollerRef: D,
		onKeyDown: ee,
		onFocus: k,
		onBlur: te,
		rangeChanged: ne,
		onFocusForGetItemComponent: O,
		context: A
	};
}
//#endregion
//#region src/core/VirtualizedList/FlatVirtualizedList/FlatVirtualizedList.tsx
function MA(e) {
	let { getItemComponent: n, ...r } = e, { onFocusForGetItemComponent: i, ...a } = jA(r), o = c((e, t, r) => n(e, t, r, i), [n, i]);
	return /* @__PURE__ */ t.createElement(me, {
		itemContent: o,
		data: e.items,
		...a
	});
}
//#endregion
//#region src/core/VirtualizedList/GroupedVirtualizedList/GroupedVirtualizedList.tsx
function NA(e) {
	let { getItemComponent: n, groups: r, getGroupHeaderComponent: i, isItemFocusable: a, isGroupHeaderFocusable: o, getItemKey: s, getHeaderKey: l, ...u } = e, d = p(() => r.flatMap((e) => [{ header: e.header }, ...e.items.map((e) => ({ item: e }))]), [r]), f = p(() => r.flatMap((e, t) => Array(1 + e.items.length).fill(t)), [r]), m = c((e) => "header" in e ? l(e.header) : s(e.item), [l, s]), h = c((e) => "header" in e ? o(e.header) : a(e.item), [o, a]), { onFocusForGetItemComponent: g, ..._ } = jA({
		...u,
		items: d,
		isItemFocusable: h,
		getItemKey: m
	}), v = c((e, t) => {
		g({ item: e }, t);
	}, [g]), y = c((e, t) => {
		g({ header: e }, t);
	}, [g]), b = c((e, t, r) => {
		let a = d[e], o = f[e];
		if ("header" in a) return i(o, a.header, r, y);
		let s = e - (o + 1);
		return n(s, a.item, r, v, o);
	}, [
		d,
		f,
		i,
		n,
		v,
		y
	]);
	return /* @__PURE__ */ t.createElement(me, {
		itemContent: b,
		data: d,
		..._
	});
}
//#endregion
//#region src/core/VirtualizedList/accessbility.ts
function PA(e, t) {
	switch (e) {
		case "listbox": return { role: "listbox" };
		case "treegrid": return {
			role: "treegrid",
			"aria-rowcount": t
		};
	}
}
function FA(e, t, n) {
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
function IA(e, t, n) {
	return {
		role: "row",
		"aria-level": 1,
		"aria-posinset": t + 1,
		"aria-rowindex": e + 1,
		"aria-setsize": n
	};
}
var LA = {
	header: "_header_14azs_8",
	container: "_container_14azs_29",
	unread: "_unread_14azs_50",
	title: "_title_14azs_66",
	firstHeader: "_firstHeader_14azs_73",
	lastHeader: "_lastHeader_14azs_77"
}, RA = s(function({ vm: e, isFocused: n, onFocus: r, indexInList: i, sectionIndex: a, sectionCount: o, roomCountInSection: s }) {
	let { translate: c } = W(), { id: l, title: u, isExpanded: d, isUnread: f } = Y(e), p = a === o - 1;
	return /* @__PURE__ */ t.createElement("div", {
		"aria-expanded": d,
		...IA(i, a, s)
	}, /* @__PURE__ */ t.createElement("button", {
		type: "button",
		role: "gridcell",
		className: (0, U.default)(LA.header, {
			[LA.firstHeader]: a === 0,
			[LA.lastHeader]: !d && p,
			[LA.unread]: f
		}),
		onClick: e.onClick,
		"aria-expanded": d,
		onFocus: (e) => r(l, e),
		tabIndex: n ? 0 : -1,
		"aria-label": c(f ? "room_list|section_header|toggle_unread" : "room_list|section_header|toggle", { section: u })
	}, /* @__PURE__ */ t.createElement(q, {
		className: LA.container,
		align: "center",
		gap: "var(--cpd-space-0-5x)"
	}, /* @__PURE__ */ t.createElement(mE, {
		width: "24px",
		height: "24px",
		fill: "var(--cpd-color-icon-secondary)"
	}), /* @__PURE__ */ t.createElement("span", { className: LA.title }, u))));
}), zA = ({ hasAnyNotificationOrActivity: e, muted: n, callType: r, isUnsentMessage: i, invited: a, isMention: o, isNotification: s, isActivityNotification: c, count: l }) => !e && !n && !r ? null : /* @__PURE__ */ t.createElement(q, {
	align: "center",
	justify: "center",
	gap: "var(--cpd-space-1x)",
	"data-testid": "notification-decoration"
}, i && /* @__PURE__ */ t.createElement(ME, {
	width: "20px",
	height: "20px",
	fill: "var(--cpd-color-icon-critical-primary)"
}), r === "video" && /* @__PURE__ */ t.createElement(WD, {
	width: "20px",
	height: "20px",
	fill: "var(--cpd-color-icon-accent-primary)"
}), r === "voice" && /* @__PURE__ */ t.createElement(QD, {
	width: "20px",
	height: "20px",
	fill: "var(--cpd-color-icon-accent-primary)"
}), a && /* @__PURE__ */ t.createElement(AE, {
	width: "20px",
	height: "20px",
	fill: "var(--cpd-color-icon-accent-primary)"
}), o && /* @__PURE__ */ t.createElement(oD, {
	width: "20px",
	height: "20px",
	fill: "var(--cpd-color-icon-accent-primary)"
}), (o || s) && /* @__PURE__ */ t.createElement(ue, { count: l || null }), c && /* @__PURE__ */ t.createElement(le, null), n && /* @__PURE__ */ t.createElement(cD, {
	width: "20px",
	height: "20px",
	fill: "var(--cpd-color-icon-tertiary)"
}));
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemAccessibilityWrapper/RoomListItemView/RoomListItemMoreOptionsMenu.tsx
function BA({ vm: e }) {
	let [n, r] = h(!1);
	return /* @__PURE__ */ t.createElement(O, {
		open: n,
		onOpenChange: r,
		title: J("room_list|room|more_options"),
		showTitle: !1,
		align: "start",
		trigger: /* @__PURE__ */ t.createElement(E, {
			tooltip: J("room_list|room|more_options"),
			"aria-label": J("room_list|room|more_options"),
			size: "24px",
			style: { padding: "2px" }
		}, /* @__PURE__ */ t.createElement(fD, null))
	}, /* @__PURE__ */ t.createElement(VA, { vm: e }));
}
function VA({ vm: e }) {
	let n = Y(e);
	return /* @__PURE__ */ t.createElement("div", { onKeyDown: (e) => e.stopPropagation() }, n.canMarkAsRead && /* @__PURE__ */ t.createElement(k, {
		Icon: nD,
		label: J("room_list|more_options|mark_read"),
		onSelect: e.onMarkAsRead,
		onClick: (e) => e.stopPropagation(),
		hideChevron: !0
	}), n.canMarkAsUnread && /* @__PURE__ */ t.createElement(k, {
		Icon: iD,
		label: J("room_list|more_options|mark_unread"),
		onSelect: e.onMarkAsUnread,
		onClick: (e) => e.stopPropagation(),
		hideChevron: !0
	}), /* @__PURE__ */ t.createElement(ce, {
		checked: n.isFavourite,
		Icon: RE,
		label: J("room_list|more_options|favourited"),
		onSelect: e.onToggleFavorite,
		onClick: (e) => e.stopPropagation()
	}), /* @__PURE__ */ t.createElement(ce, {
		checked: n.isLowPriority,
		Icon: QT,
		label: J("room_list|more_options|low_priority"),
		onSelect: e.onToggleLowPriority,
		onClick: (e) => e.stopPropagation()
	}), /* @__PURE__ */ t.createElement(re, null), n.canInvite && /* @__PURE__ */ t.createElement(k, {
		Icon: BD,
		label: J("action|invite"),
		onSelect: e.onInvite,
		onClick: (e) => e.stopPropagation(),
		hideChevron: !0
	}), n.canCopyRoomLink && /* @__PURE__ */ t.createElement(k, {
		Icon: QE,
		label: J("room_list|more_options|copy_link"),
		onSelect: e.onCopyRoomLink,
		onClick: (e) => e.stopPropagation(),
		hideChevron: !0
	}), n.canMoveToSection && /* @__PURE__ */ t.createElement(ie, { trigger: /* @__PURE__ */ t.createElement(k, {
		Icon: eE,
		label: J("room_list|more_options|move_to_section"),
		onSelect: null
	}) }, /* @__PURE__ */ t.createElement(k, {
		label: J("action|new_section"),
		onSelect: e.onCreateSection,
		hideChevron: !0
	})), /* @__PURE__ */ t.createElement(re, null), /* @__PURE__ */ t.createElement(k, {
		kind: "critical",
		Icon: XE,
		label: J("room_list|more_options|leave_room"),
		onSelect: e.onLeaveRoom,
		onClick: (e) => e.stopPropagation(),
		hideChevron: !0
	}));
}
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemAccessibilityWrapper/RoomListItemView/RoomNotifs.ts
var HA = /* @__PURE__ */ function(e) {
	return e.AllMessages = "all_messages", e.AllMessagesLoud = "all_messages_loud", e.MentionsOnly = "mentions_only", e.Mute = "mute", e;
}({});
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemAccessibilityWrapper/RoomListItemView/RoomListItemNotificationMenu.tsx
function UA({ vm: e }) {
	let n = Y(e), [r, i] = h(!1), a = n.roomNotifState === HA.Mute, o = /* @__PURE__ */ t.createElement(cE, {
		width: "24px",
		height: "24px",
		color: "var(--cpd-color-icon-primary)"
	});
	return /* @__PURE__ */ t.createElement(O, {
		open: r,
		onOpenChange: i,
		title: J("room_list|notification_options"),
		showTitle: !1,
		align: "start",
		trigger: /* @__PURE__ */ t.createElement(E, {
			size: "24px",
			style: { padding: "2px" },
			tooltip: J("room_list|notification_options"),
			"aria-label": J("room_list|notification_options")
		}, a ? /* @__PURE__ */ t.createElement(cD, null) : /* @__PURE__ */ t.createElement(uD, null))
	}, /* @__PURE__ */ t.createElement("div", { onKeyDown: (e) => e.stopPropagation() }, /* @__PURE__ */ t.createElement(k, {
		"aria-selected": n.roomNotifState === HA.AllMessages,
		hideChevron: !0,
		label: J("notifications|default_settings"),
		onSelect: () => e.onSetRoomNotifState(HA.AllMessages),
		onClick: (e) => e.stopPropagation()
	}, n.roomNotifState === HA.AllMessages && o), /* @__PURE__ */ t.createElement(k, {
		"aria-selected": n.roomNotifState === HA.AllMessagesLoud,
		hideChevron: !0,
		label: J("notifications|all_messages"),
		onSelect: () => e.onSetRoomNotifState(HA.AllMessagesLoud),
		onClick: (e) => e.stopPropagation()
	}, n.roomNotifState === HA.AllMessagesLoud && o), /* @__PURE__ */ t.createElement(k, {
		"aria-selected": n.roomNotifState === HA.MentionsOnly,
		hideChevron: !0,
		label: J("notifications|mentions_keywords"),
		onSelect: () => e.onSetRoomNotifState(HA.MentionsOnly),
		onClick: (e) => e.stopPropagation()
	}, n.roomNotifState === HA.MentionsOnly && o), /* @__PURE__ */ t.createElement(k, {
		"aria-selected": n.roomNotifState === HA.Mute,
		hideChevron: !0,
		label: J("notifications|mute_room"),
		onSelect: () => e.onSetRoomNotifState(HA.Mute),
		onClick: (e) => e.stopPropagation()
	}, n.roomNotifState === HA.Mute && o)));
}
var WA = {
	roomListItem: "_roomListItem_rtaba_8",
	hoverMenu: "_hoverMenu_rtaba_32",
	container: "_container_rtaba_46",
	selected: "_selected_rtaba_51",
	notificationDecoration: "_notificationDecoration_rtaba_60",
	content: "_content_rtaba_73",
	text: "_text_rtaba_78",
	ellipsis: "_ellipsis_rtaba_82",
	roomName: "_roomName_rtaba_83",
	bold: "_bold_rtaba_109",
	firstItem: "_firstItem_rtaba_123",
	lastItem: "_lastItem_rtaba_127"
}, GA = ({ showMoreOptionsMenu: e, showNotificationMenu: n, vm: r }) => /* @__PURE__ */ t.createElement(q, {
	className: WA.hoverMenu,
	align: "center",
	gap: "var(--cpd-space-1x)"
}, e && /* @__PURE__ */ t.createElement(BA, { vm: r }), n && /* @__PURE__ */ t.createElement(UA, { vm: r })), KA = ({ vm: e, children: n }) => /* @__PURE__ */ t.createElement(S, {
	title: J("room_list|room|more_options"),
	showTitle: !1,
	hasAccessibleAlternative: !0,
	trigger: n
}, /* @__PURE__ */ t.createElement(VA, { vm: e }));
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemAccessibilityWrapper/RoomListItemView/RoomListItemView.tsx
function qA(e, t) {
	return t.isUnsentMessage ? J("room_list|a11y|unsent_message", { roomName: e }) : t.invited ? J("room_list|a11y|invitation", { roomName: e }) : t.isMention && t.count ? J("room_list|a11y|mention", {
		roomName: e,
		count: t.count
	}) : t.hasUnreadCount && t.count ? J("room_list|a11y|unread", {
		roomName: e,
		count: t.count
	}) : t.callType === "voice" ? J("room_list|a11y|voice_call", { roomName: e }) : t.callType === "video" ? J("room_list|a11y|video_call", { roomName: e }) : J("room_list|a11y|default", { roomName: e });
}
var JA = s(function({ vm: e, isSelected: n, isFocused: r, onFocus: i, isFirstItem: a, isLastItem: o, renderAvatar: s, ...c }) {
	let l = m(null), d = Y(e);
	u(() => {
		r && l.current?.focus({
			preventScroll: !0,
			focusVisible: !0
		});
	}, [r]);
	let f = qA(d.name, d.notification);
	return /* @__PURE__ */ t.createElement(KA, { vm: e }, /* @__PURE__ */ t.createElement(q, {
		as: "button",
		ref: l,
		className: (0, U.default)(WA.roomListItem, "mx_RoomListItemView", {
			[WA.selected]: n,
			[WA.bold]: d.isBold,
			[WA.firstItem]: a,
			[WA.lastItem]: o,
			mx_RoomListItemView_selected: n
		}),
		gap: "var(--cpd-space-3x)",
		align: "stretch",
		type: "button",
		"aria-selected": n,
		"aria-label": f,
		onClick: e.onOpenRoom,
		onFocus: (e) => i(d.id, e),
		tabIndex: r ? 0 : -1,
		...c
	}, /* @__PURE__ */ t.createElement(q, {
		className: WA.container,
		gap: "var(--cpd-space-3x)",
		align: "center"
	}, s(d.room), /* @__PURE__ */ t.createElement(q, {
		className: WA.content,
		gap: "var(--cpd-space-2x)",
		align: "center",
		justify: "space-between"
	}, /* @__PURE__ */ t.createElement("div", { className: WA.ellipsis }, /* @__PURE__ */ t.createElement("div", {
		className: WA.roomName,
		title: d.name,
		"data-testid": "room-name"
	}, d.name), d.messagePreview && /* @__PURE__ */ t.createElement(j, {
		as: "div",
		size: "sm",
		className: WA.ellipsis,
		title: d.messagePreview
	}, d.messagePreview)), (d.showMoreOptionsMenu || d.showNotificationMenu) && /* @__PURE__ */ t.createElement(GA, {
		showMoreOptionsMenu: d.showMoreOptionsMenu,
		showNotificationMenu: d.showNotificationMenu,
		vm: e
	}), /* @__PURE__ */ t.createElement("div", {
		className: WA.notificationDecoration,
		"aria-hidden": !0
	}, /* @__PURE__ */ t.createElement(zA, d.notification))))));
}), YA = s(function({ roomIndex: e, roomCount: n, roomIndexInSection: r, isInFlatList: i, ...a }) {
	let o = i ? FA("listbox", e, n) : { role: "gridcell" }, s = /* @__PURE__ */ t.createElement(JA, {
		...a,
		...o
	});
	return i ? s : /* @__PURE__ */ t.createElement("div", FA("treegrid", e, r), s);
}), XA = { roomList: "_roomList_1yq7k_11" }, ZA = 1300;
function QA({ vm: e, renderAvatar: n, onKeyDown: r }) {
	let { roomListState: i, sections: a, isFlatList: o } = Y(e), s = i.activeRoomIndex, l = m(void 0), u = m(void 0), d = p(() => a.flatMap((e) => e.roomIds), [a]), f = d.length, h = a.length, g = f + h, _ = p(() => a.map((e) => ({
		header: e.id,
		items: e.roomIds
	})), [a]), v = c((t) => {
		e.updateVisibleRooms(t.startIndex, t.endIndex);
	}, [e]), y = c((e, r, i, a, o, s) => {
		let { activeRoomIndex: c, roomCount: l, vm: u, isFlatList: d } = i.context, f = c === e, p = u.getRoomItemViewModel(r);
		if (!p) return /* @__PURE__ */ t.createElement(t.Fragment, { key: `stale-${e}` });
		let m = i.focused && i.tabIndexKey === r, h = d && e === 0, g = !(!d && !o || e !== l - 1);
		return /* @__PURE__ */ t.createElement(YA, {
			key: r,
			vm: p,
			renderAvatar: n,
			isSelected: f,
			isFocused: m,
			onFocus: a,
			roomIndex: e,
			roomIndexInSection: s || 0,
			roomCount: l,
			isFirstItem: h,
			isLastItem: g,
			isInFlatList: d
		});
	}, [n]), b = c((e, t, n, r, i) => {
		let { sections: a } = n.context, o = a[i].roomIds.findIndex((e) => e === t), s = i === a.length - 1;
		return y(e, t, n, r, s, o);
	}, [y]), x = c((e, t, n, r) => y(e, t, n, r), [y]), S = c((e, n, r, i) => {
		let { vm: a, sectionCount: o, sections: s } = r.context, c = a.getSectionHeaderViewModel(n), l = s.slice(0, e).reduce((e, t) => e + t.roomIds.length + 1, 0), u = s[e].roomIds.length, d = r.focused && r.tabIndexKey === n;
		return /* @__PURE__ */ t.createElement(RA, {
			vm: c,
			isFocused: d,
			onFocus: i,
			indexInList: l,
			sectionIndex: e,
			sectionCount: o,
			roomCountInSection: u
		});
	}, []), C = c((e) => e, []), w = c((e) => e, []), T = p(() => ({
		spaceId: i.spaceId || "",
		filterKeys: i.filterKeys,
		sections: a,
		activeRoomIndex: s,
		roomCount: f,
		sectionCount: h,
		vm: e,
		isFlatList: o
	}), [
		i.spaceId,
		i.filterKeys,
		a,
		s,
		f,
		h,
		e,
		o
	]), E = c((e) => {
		let { spaceId: t, filterKeys: n } = e.context.context, r = l.current !== t || !wb(u.current, n);
		return u.current = n, l.current = t, r ? {
			align: "start",
			index: s || 0,
			behavior: "auto"
		} : !1;
	}, [s]), ee = c(() => !0, []), D = c(() => !0, []), O = p(() => ({
		top: ZA,
		bottom: ZA
	}), []), k = {
		context: T,
		scrollIntoViewOnChange: E,
		...s === void 0 ? {} : { initialTopMostItemIndex: s },
		"data-testid": "room-list",
		"aria-label": J("room_list|list_title"),
		getItemKey: C,
		isItemFocusable: ee,
		rangeChanged: v,
		onKeyDown: r,
		increaseViewportBy: O,
		className: XA.roomList
	};
	return o ? /* @__PURE__ */ t.createElement(MA, {
		...k,
		...PA("listbox"),
		items: d,
		getItemComponent: x
	}) : /* @__PURE__ */ t.createElement(NA, {
		...k,
		...PA("treegrid", g),
		groups: _,
		getHeaderKey: w,
		getGroupHeaderComponent: S,
		getItemComponent: b,
		isGroupHeaderFocusable: D
	});
}
var $A = { toast: "_toast_1q2e8_8" };
//#endregion
//#region src/room-list/RoomListView/RoomListToast/RoomListToast.tsx
function ej({ type: e, onClose: n }) {
	let { translate: r } = W(), i;
	return e === "section_created" && (i = {
		text: r("room_list|section_created"),
		icon: cE
	}), /* @__PURE__ */ t.createElement(se, {
		className: $A.toast,
		Icon: i.icon,
		onClose: n,
		tooltip: r("action|close")
	}, i.text);
}
var tj = { list: "_list_pswis_8" }, nj = ({ vm: e, renderAvatar: n, onKeyDown: r }) => {
	let i = Y(e), a;
	return a = i.isLoadingRooms ? /* @__PURE__ */ t.createElement(wA, null) : i.isRoomListEmpty ? /* @__PURE__ */ t.createElement(EA, { vm: e }) : /* @__PURE__ */ t.createElement(QA, {
		vm: e,
		renderAvatar: n,
		onKeyDown: r
	}), /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("div", null, /* @__PURE__ */ t.createElement(SA, {
		filterIds: i.filterIds,
		activeFilterId: i.activeFilterId,
		onToggleFilter: e.onToggleFilter
	})), /* @__PURE__ */ t.createElement(q, {
		direction: "column",
		className: tj.list
	}, a, i.toast && /* @__PURE__ */ t.createElement(ej, {
		type: i.toast,
		onClose: e.closeToast
	})));
}, rj = {
	"box-flex": "_box-flex_1odfs_9",
	"box-shrink": "_box-shrink_1odfs_13",
	"box-grow": "_box-grow_1odfs_17"
};
//#endregion
//#region src/core/utils/Box/Box.tsx
function ij({ as: e = "div", flex: n = null, shrink: r = null, grow: i = null, className: a, children: o, ...s }) {
	let c = p(() => {
		let e = {};
		return n && (e["--mx-box-flex"] = n), r && (e["--mx-box-shrink"] = r), i && (e["--mx-box-grow"] = i), e;
	}, [
		n,
		i,
		r
	]);
	return t.createElement(e, {
		...s,
		className: (0, U.default)(a, {
			[rj["box-flex"]]: !!n,
			[rj["box-shrink"]]: !!r,
			[rj["box-grow"]]: !!i
		}),
		style: c
	}, o);
}
//#endregion
//#region src/resize/group/GroupView.tsx
function aj({ vm: e, children: n }) {
	return Y(e), /* @__PURE__ */ t.createElement(ge, { onLayoutChanged: (t) => {
		let n = t[lj];
		e.onLeftPanelResized(n);
	} }, n);
}
var oj = {
	separator: "_separator_ctw94_8",
	visible: "_visible_ctw94_20"
};
//#endregion
//#region src/resize/separator/SeparatorView.tsx
function sj({ vm: e, className: n }) {
	let { translate: r } = W(), { isCollapsed: i, isFocusedViaKeyboard: a } = Y(e), o = (0, U.default)(oj.separator, n, { [oj.visible]: i || a });
	return /* @__PURE__ */ t.createElement(xe, {
		className: o,
		onClick: e.onSeparatorClick,
		onFocus: e.onFocus,
		onBlur: e.onBlur,
		"aria-label": r("left_panel|separator_label")
	}, /* @__PURE__ */ t.createElement(M, {
		description: r("left_panel|separator_label"),
		placement: "right"
	}, /* @__PURE__ */ t.createElement(EE, {
		width: "20px",
		height: "12px",
		viewBox: "3.999704360961914 8.999704360961914 16.000295639038086 6.000591278076172",
		transform: "rotate(90)"
	})));
}
//#endregion
//#region src/resize/panel/LeftResizablePanelView.tsx
function cj({ vm: e, className: n, children: r, ...i }) {
	let { initialSize: a, isCollapsed: o } = Y(e), [s, c] = Se();
	u(() => {
		s && e.setPanelHandle(s);
	}, [e, s]);
	let l = a === void 0 ? i.defaultSize : `${a}%`;
	return /* @__PURE__ */ t.createElement(ye, {
		inert: o,
		id: lj,
		className: n,
		collapsible: !0,
		minSize: i.minSize,
		maxSize: i.maxSize,
		defaultSize: l,
		onResize: e.onLeftPanelResize,
		panelRef: c
	}, r);
}
//#endregion
//#region src/resize/index.ts
var lj = "left-panel";
//#endregion
//#region src/core/utils/numbers.ts
function uj(e, t) {
	return Number.isFinite(e) ? Number(e) : t;
}
function dj(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
function fj(...e) {
	return [...e].reduce((e, t) => t + e, 0);
}
function pj(e, t, n) {
	return e * (n - t) + t;
}
function mj(e, t, n) {
	let r = (e - t) / (n - t);
	return Number.isNaN(r) ? 0 : r;
}
//#endregion
//#region src/core/i18n/I18nApi.ts
var hj = class {
	get language() {
		return mS();
	}
	register(e) {
		let t = {};
		for (let n in e) for (let r in e[n]) t[r] = t[r] || {}, t[r][n] = e[n][r];
		for (let e in t) fS(e, t[e]);
	}
	translate(e, t, n) {
		return n ? J(e, t, n) : J(e, t);
	}
	humanizeTime = (e) => bk(e, this);
};
//#endregion
export { Ak as ActionBarAction, jk as ActionBarView, Wk as AudioPlayerView, Rb as AvatarWithDetails, kS as Banner, zS as BaseViewModel, ij as Box, hp as Clock, Dk as DateSeparatorView, Yk as DecryptionFailureBodyView, Kk as DecryptionFailureReason, Nk as DisambiguatedProfileView, IS as Disposables, Lk as EncryptionEventState, Rk as EncryptionEventView, XT as EventContentBodyView, Ik as EventTileBubble, lO as FileBodyView, sO as FileBodyViewInfoIcon, oO as FileBodyViewState, MA as FlatVirtualizedList, q as Flex, aj as GroupView, NA as GroupedVirtualizedList, lk as HistoryVisibilityBadge, hj as I18nApi, Sp as I18nContext, RO as ImageBodyView, IO as ImageBodyViewPlaceholder, FO as ImageBodyViewState, Jb as KEY_SEPARATOR, lj as LEFT_PANEL_ID, RT as LINKIFIED_DATA_ATTRIBUTE, cj as LeftResizablePanelView, UT as LinkedText, VT as LinkedTextContext, NT as LinkifyMatrixOpaqueIdType, jT as LinkifyOptionalSlashProtocols, AT as LinkifySupportedProtocols, aO as MediaBody, nA as MessageTimestampView, BS as MockViewModel, VA as MoreOptionContent, zA as NotificationDecoration, MT as PERMITTED_URL_SCHEMES, ve as Panel, XO as Pill, rk as PillInput, Bk as PinnedMessageBadge, Cp as PlayPauseButton, Qk as ReactionsRowButtonTooltipView, eA as ReactionsRowButtonView, Zk as ReactionsRowView, JT as ReadMarker, nO as RedactedBodyView, _e as ResizableGroup, iA as RichItem, cA as RichList, EA as RoomListEmptyStateView, hA as RoomListHeaderView, YA as RoomListItemAccessibilityWrapper, KA as RoomListItemContextMenu, GA as RoomListItemHoverMenu, BA as RoomListItemMoreOptionsMenu, UA as RoomListItemNotificationMenu, JA as RoomListItemView, wA as RoomListLoadingSkeleton, SA as RoomListPrimaryFilters, _A as RoomListSearchView, RA as RoomListSectionHeaderView, nj as RoomListView, HA as RoomNotifState, ak as RoomStatusBarState, ok as RoomStatusBarView, NS as SasEmoji, Fb as SeekBar, be as Separator, sj as SeparatorView, LS as Snapshot, KO as TextualBodyView, WO as TextualBodyViewBodyWrapperKind, UO as TextualBodyViewKind, Vk as TextualEventView, JO as TileErrorView, pk as TimelineSeparator, KT as UrlPreviewGroupView, VO as VideoBodyView, BO as VideoBodyViewState, RS as ViewModelSubscriptions, QA as VirtualizedRoomListView, he as VirtuosoMockContext, uk as WidgetContextMenuView, ck as WidgetPipView, J as _t, SS as _tDom, gS as _td, dj as clamp, uj as defaultNumber, IT as findLinksInString, Uk as formatBytes, mp as formatDateForInput, pp as formatSeconds, FT as generateLinkedTextOptions, PA as getContainerAccessibleProps, IA as getGroupHeaderAccessibleProps, FA as getItemAccessibleProps, OS as getLangsJson, mS as getLocale, qb as getNormalizedLanguageKeys, xk as humanizeRelativeTime, bk as humanizeTime, LT as isLinkable, ST as linkifyHtml, tT as linkifyString, xS as lookupString, Kb as normalizeLanguageKey, mj as percentageOf, pj as percentageWithin, fS as registerTranslations, TS as replaceByRegexes, CS as sanitizeForTranslation, ES as setLanguage, hS as setLocale, pS as setMissingEntryGenerator, wS as substitute, fj as sum, vA as useCollapseFilters, VS as useCreateAutoDisposedViewModel, W as useI18n, HT as useLinkedTextContext, HS as useMockedViewModel, Y as useViewModel, yA as useVisibleFilters };
