import * as e from "react";
import t, { Children as n, cloneElement as r, createContext as i, forwardRef as a, isValidElement as o, memo as s, useCallback as c, useContext as l, useEffect as u, useId as d, useLayoutEffect as f, useMemo as p, useRef as m, useState as h, useSyncExternalStore as g, version as _ } from "react";
import { Badge as v, Button as y, ChatFilter as b, CheckboxMenuItem as x, ContextMenu as S, Field as C, H1 as w, Heading as T, IconButton as E, InlineSpinner as D, Link as O, Menu as k, MenuItem as A, MenuTitle as ee, RadioMenuItem as j, Root as te, Separator as ne, SubMenu as M, Submit as re, Text as N, TextControl as ie, Toast as ae, ToggleMenuItem as oe, Tooltip as se, Unread as ce, UnreadCounter as le } from "@vector-im/compound-web";
import { Virtuoso as ue, VirtuosoMockContext as de } from "react-virtuoso";
import { Group as fe, Group as pe, Panel as me, Panel as he, Separator as ge, Separator as _e, usePanelCallbackRef as ve } from "react-resizable-panels";
//#region \0rolldown/runtime.js
var ye = Object.create, be = Object.defineProperty, xe = Object.getOwnPropertyDescriptor, Se = Object.getOwnPropertyNames, Ce = Object.getPrototypeOf, we = Object.prototype.hasOwnProperty, P = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), Te = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = Se(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !we.call(e, s) && s !== n && be(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = xe(t, s)) || r.enumerable
	});
	return e;
}, Ee = (e, t, n) => (n = e == null ? {} : ye(Ce(e)), Te(t || !e || !e.__esModule ? be(n, "default", {
	value: e,
	enumerable: !0
}) : n, e));
//#endregion
//#region ../../node_modules/temporal-polyfill/chunks/internal.js
function De(e, t, n, r, i) {
	return Oe(t, ((e, t) => {
		let n = e[t];
		if (n === void 0) throw TypeError(Ws(t));
		return n;
	})(e, t), n, r, i);
}
function Oe(e, t, n, r, i, a) {
	let o = Je(t, n, r);
	if (i && t !== o) throw RangeError(Hs(e, t, n, r, a));
	return o;
}
function ke(e) {
	return e !== null && /object|function/.test(typeof e);
}
function Ae(e, t = Map) {
	let n = new t();
	return (t, ...r) => {
		if (n.has(t)) return n.get(t);
		let i = e(t, ...r);
		return n.set(t, i), i;
	};
}
function je(e) {
	return Me({ name: e }, 1);
}
function Me(e, t) {
	return Ie(((e) => ({
		value: e,
		configurable: 1,
		writable: !t
	})), e);
}
function Ne(e) {
	return Ie(((e) => ({
		get: e,
		configurable: 1
	})), e);
}
function Pe(e) {
	return { [Symbol.toStringTag]: {
		value: e,
		configurable: 1
	} };
}
function Fe(e, t) {
	let n = {}, r = e.length;
	for (let i of t) n[e[--r]] = i;
	return n;
}
function Ie(e, t, n) {
	let r = {};
	for (let i in t) r[i] = e(t[i], i, n);
	return r;
}
function Le(e, t, n) {
	let r = {};
	for (let i = 0; i < t.length; i++) {
		let a = t[i];
		r[a] = e(a, i, n);
	}
	return r;
}
function Re(e, t, n) {
	let r = {};
	for (let i = 0; i < e.length; i++) r[t[i]] = n[e[i]];
	return r;
}
function ze(e, t) {
	let n = Object.create(null);
	for (let r of e) n[r] = t[r];
	return n;
}
function Be(e, t) {
	for (let n of t) if (n in e) return 1;
	return 0;
}
function Ve(e, t, n) {
	for (let r of e) if (t[r] !== n[r]) return 0;
	return 1;
}
function He(e, t, n) {
	let r = { ...n };
	for (let n = 0; n < t; n++) r[e[n]] = 0;
	return r;
}
function F(e, ...t) {
	return (...n) => e(...t, ...n);
}
function Ue() {}
function We(e) {
	return e[0].toUpperCase() + e.substring(1);
}
function Ge(e) {
	return e.slice().sort();
}
function Ke(e, t) {
	return String(t).padStart(e, "0");
}
function qe(e, t) {
	return Math.sign(e - t);
}
function Je(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
function Ye(e, t) {
	return [Math.floor(e / t), Xe(e, t)];
}
function Xe(e, t) {
	return (e % t + t) % t;
}
function Ze(e, t) {
	return [Qe(e, t), $e(e, t)];
}
function Qe(e, t) {
	return Math.trunc(e / t) || 0;
}
function $e(e, t) {
	return e % t || 0;
}
function et(e) {
	return Math.abs(e % 1) === .5;
}
function tt(e, t, n) {
	let r = 0, i = 0;
	for (let a = 0; a <= t; a++) {
		let t = e[n[a]], o = Hc[a], [s, c] = Ze(t, Vc / o);
		r += c * o, i += s;
	}
	let [a, o] = Ze(r, Vc);
	return [i + a, o];
}
function nt(e, t, n) {
	let r = {};
	for (let i = t; i >= 0; i--) {
		let t = Hc[i];
		r[n[i]] = Qe(e, t), e = $e(e, t);
	}
	return r;
}
function rt(e) {
	if (e !== void 0) return pl(e);
}
function it(e) {
	if (e !== void 0) return ot(e);
}
function at(e) {
	if (e !== void 0) return st(e);
}
function ot(e) {
	return ft(st(e));
}
function st(e) {
	return dt(hl(e));
}
function ct(e, t) {
	if (t == null) throw RangeError(Ws(e));
	return t;
}
function lt(e) {
	if (!ke(e)) throw TypeError(Vs);
	return e;
}
function ut(e, t, n = e) {
	if (typeof t !== e) throw TypeError(Us(n, t));
	return t;
}
function dt(e, t = "number") {
	if (!Number.isInteger(e)) throw RangeError(Fs(t, e));
	return e || 0;
}
function ft(e, t = "number") {
	if (e <= 0) throw RangeError(Is(t, e));
	return e;
}
function pt(e) {
	if (typeof e == "symbol") throw TypeError(Bs);
	return String(e);
}
function mt(e, t) {
	return ke(e) ? String(e) : pl(e, t);
}
function ht(e) {
	if (typeof e == "string") return BigInt(e);
	if (typeof e != "bigint") throw TypeError(zs(e));
	return e;
}
function gt(e, t = "number") {
	if (typeof e == "bigint") throw TypeError(Rs(t));
	if (e = Number(e), !Number.isFinite(e)) throw RangeError(Ls(t, e));
	return e;
}
function _t(e, t) {
	return Math.trunc(gt(e, t)) || 0;
}
function vt(e, t) {
	return dt(gt(e, t), t);
}
function yt(e, t) {
	return ft(_t(e, t), t);
}
function bt(e, t) {
	let [n, r] = Ze(t, Vc), i = e + n, a = Math.sign(i);
	return a && a === -Math.sign(r) && (i -= a, r += a * 864e11), [i, r];
}
function xt(e, t, n = 1) {
	return bt(e[0] + t[0] * n, e[1] + t[1] * n);
}
function St(e, t) {
	return bt(e[0], e[1] + t);
}
function Ct(e, t) {
	return xt(t, e, -1);
}
function wt(e, t) {
	return qe(e[0], t[0]) || qe(e[1], t[1]);
}
function Tt(e, t, n) {
	return wt(e, t) === -1 || wt(e, n) === 1;
}
function Et(e, t = 1) {
	let n = BigInt(Vc / t);
	return [Number(e / n), Number(e % n) * t];
}
function Dt(e, t = 1) {
	let [n, r] = Ze(e, Vc / t);
	return [n, r * t];
}
function Ot(e, t = 1) {
	let [n, r] = e, i = Math.floor(r / t), a = Vc / t;
	return BigInt(n) * BigInt(a) + BigInt(i);
}
function kt(e, t = 1, n) {
	let [r, i] = e, [a, o] = Ze(i, t);
	return Vc / t * r + (a + (n ? o / t : 0));
}
function At(e) {
	return e[0] + e[1] / Vc;
}
function jt(e, t, n = Ye) {
	let [r, i] = e, [a, o] = n(i, t);
	return [Vc / t * r + a, o];
}
function Mt(e) {
	return De(e, "isoYear", Ll, Il, 1), e.isoYear === Ll ? De(e, "isoMonth", 4, 12, 1) : e.isoYear === Il && De(e, "isoMonth", 1, 9, 1), e;
}
function Nt(e) {
	return Pt({
		...e,
		...Al,
		isoHour: 12
	}), e;
}
function Pt(e) {
	let t = De(e, "isoYear", Ll, Il, 1), n = t === Ll ? 1 : t === Il ? -1 : 0;
	return n && Ft(Vt({
		...e,
		isoDay: e.isoDay + n,
		isoNanosecond: e.isoNanosecond - n
	})), e;
}
function Ft(e) {
	if (!e || Tt(e, Fl, Pl)) throw RangeError(_c);
	return e;
}
function It(e) {
	return tt(e, 5, wl)[1];
}
function Lt(e) {
	let [t, n] = Ye(e, Vc);
	return [nt(n, 5, wl), t];
}
function Rt(e) {
	return zt(e)[0];
}
function zt(e) {
	return jt(e, Rc);
}
function Bt(e) {
	return Wt(e.isoYear, e.isoMonth, e.isoDay, e.isoHour, e.isoMinute, e.isoSecond, e.isoMillisecond);
}
function Vt(e) {
	let t = Bt(e);
	if (t !== void 0) {
		let [n, r] = Ze(t, Pc);
		return [n, r * Lc + (e.isoMicrosecond || 0) * Ic + (e.isoNanosecond || 0)];
	}
}
function Ht(e, t) {
	let [n, r] = Lt(It(e) - t);
	return Ft(Vt({
		...e,
		isoDay: e.isoDay + r,
		...n
	}));
}
function Ut(...e) {
	return Wt(...e) / Fc;
}
function Wt(...e) {
	let [t, n] = Gt(...e), r = t.valueOf();
	if (!isNaN(r)) return r - n * Pc;
}
function Gt(e, t = 1, n = 1, r = 0, i = 0, a = 0, o = 0) {
	let s = e === Ll ? 1 : e === Il ? -1 : 0, c = /* @__PURE__ */ new Date();
	return c.setUTCHours(r, i, a, o), c.setUTCFullYear(e, t - 1, n + s), [c, s];
}
function Kt(e, t) {
	let [n, r] = St(e, t);
	r < 0 && (r += 864e11, --n);
	let [i, a] = Ye(r, Lc), [o, s] = Ye(a, Ic);
	return qt(n * Pc + i, o, s);
}
function qt(e, t = 0, n = 0) {
	let r = Math.ceil(Math.max(0, Math.abs(e) - Nl) / Pc) * Math.sign(e), i = new Date(e - r * Pc);
	return Fe(El, [
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
function Jt(e, t) {
	if (t < -Nl) throw RangeError(_c);
	let n = e.formatToParts(t), r = {};
	for (let e of n) r[e.type] = e.value;
	return r;
}
function Yt(e) {
	return e.isoDay;
}
function Xt(e) {
	return [
		e.isoYear,
		e.isoMonth,
		e.isoDay
	];
}
function Zt(e, t) {
	return [t, 0];
}
function Qt(e, t) {
	if (!t) return [Bl, e];
}
function $t(e, t, n) {
	return {
		isoYear: e,
		isoMonth: t,
		isoDay: n
	};
}
function en() {
	return 7;
}
function tn() {
	return Vl;
}
function nn(e, t) {
	switch (t) {
		case 2: return an(e) ? 29 : 28;
		case 4:
		case 6:
		case 9:
		case 11: return 30;
	}
	return 31;
}
function rn(e) {
	return an(e) ? 366 : 365;
}
function an(e) {
	return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function on(e) {
	let [t, n] = Gt(e.isoYear, e.isoMonth, e.isoDay);
	return Xe(t.getUTCDay() - n, 7) || 7;
}
function sn(e) {
	return this.id === cl ? (({ isoYear: e }) => e < 1 ? ["gregory-inverse", 1 - e] : ["gregory", e])(e) : this.id === ll ? Ul(e) : [];
}
function cn(e) {
	let t = Bt(e);
	if (t < Hl) {
		let { isoYear: t } = e;
		return t < 1 ? ["japanese-inverse", 1 - t] : ["japanese", t];
	}
	let { era: n, eraYear: r } = io(Jt(ed(ll), t), ll);
	return [n, r];
}
function ln(e) {
	return un(e), pn(e, 1), e;
}
function un(e) {
	return fn(e, 1), e;
}
function dn(e) {
	return Ve(Tl, e, fn(e));
}
function fn(e, t) {
	let { isoYear: n } = e, r = De(e, "isoMonth", 1, tn(), t);
	return {
		isoYear: n,
		isoMonth: r,
		isoDay: De(e, "isoDay", 1, nn(n, r), t)
	};
}
function pn(e, t) {
	return Fe(wl, [
		De(e, "isoHour", 0, 23, t),
		De(e, "isoMinute", 0, 59, t),
		De(e, "isoSecond", 0, 59, t),
		De(e, "isoMillisecond", 0, 999, t),
		De(e, "isoMicrosecond", 0, 999, t),
		De(e, "isoNanosecond", 0, 999, t)
	]);
}
function I(e) {
	return e === void 0 ? 0 : lu(lt(e));
}
function mn(e, t = 0) {
	e = Tn(e);
	let n = uu(e), r = du(e, t);
	return [
		lu(e),
		r,
		n
	];
}
function hn(e, t, n, r = 9, i = 0, a = 4) {
	t = Tn(t);
	let o = su(t, r, i), s = Sn(t), c = hu(t, a), l = ou(t, r, i, 1);
	return o == null ? o = Math.max(n, l) : An(o, l), s = Cn(s, l, 1), e && (c = ((e) => e < 4 ? (e + 2) % 4 : e)(c)), [
		o,
		l,
		s,
		c
	];
}
function gn(e, t = 6, n) {
	let r = Sn(e = En(e, Wl)), i = hu(e, 7), a = ou(e, t);
	return a = ct(Wl, a), r = Cn(r, a, void 0, n), [
		a,
		r,
		i
	];
}
function _n(e) {
	return fu(Tn(e));
}
function vn(e, t) {
	return bn(Tn(e), t);
}
function yn(e) {
	let t = kn(Xl, au, En(e, Xl), 0);
	if (!t) throw RangeError(Us(Xl, t));
	return t;
}
function bn(e, t = 4) {
	let n = wn(e);
	return [hu(e, 4), ...xn(ou(e, t), n)];
}
function xn(e, t) {
	return e == null ? [t === void 0 ? 1 : 10 ** (9 - t), t] : [Hc[e], e < 4 ? 9 - 3 * e : -1];
}
function Sn(e) {
	let t = e[ql];
	return t === void 0 ? 1 : _t(t, ql);
}
function Cn(e, t, n, r) {
	let i = r ? Vc : Hc[t + 1];
	if (i) {
		let n = Hc[t];
		if (i % ((e = Oe(ql, e, 1, i / n - (r ? 0 : 1), 1)) * n)) throw RangeError(Us(ql, e));
	} else e = Oe(ql, e, 1, n ? 10 ** 9 : 1, 1);
	return e;
}
function wn(e) {
	let t = e[Jl];
	if (t !== void 0) {
		if (typeof t != "number") {
			if (pt(t) === "auto") return;
			throw RangeError(Us(Jl, t));
		}
		t = Oe(Jl, Math.floor(t), 0, 9, 1);
	}
	return t;
}
function Tn(e) {
	return e === void 0 ? {} : lt(e);
}
function En(e, t) {
	return typeof e == "string" ? { [t]: e } : lt(e);
}
function Dn(e) {
	return { overflow: Ql[e] };
}
function On(e, t, n = 9, r = 0, i) {
	let a = t[e];
	if (a === void 0) return i ? r : void 0;
	if (a = pt(a), a === "auto") return i ? r : null;
	let o = Mc[a];
	if (o === void 0 && (o = bl[a]), o === void 0) throw RangeError(Ys(e, a, Mc));
	return Oe(e, o, r, n, 1, Nc), o;
}
function kn(e, t, n, r = 0) {
	let i = n[e];
	if (i === void 0) return r;
	let a = pt(i), o = t[a];
	if (o === void 0) throw RangeError(Ys(e, a, t));
	return o;
}
function An(e, t) {
	if (t > e) throw RangeError(Cc);
}
function jn(e) {
	return {
		branding: Su,
		epochNanoseconds: e
	};
}
function Mn(e, t, n) {
	return {
		branding: xu,
		calendar: n,
		timeZone: t,
		epochNanoseconds: e
	};
}
function Nn(e, t = e.calendar) {
	return {
		branding: yu,
		calendar: t,
		...ze(kl, e)
	};
}
function Pn(e, t = e.calendar) {
	return {
		branding: vu,
		calendar: t,
		...ze(Dl, e)
	};
}
function Fn(e, t = e.calendar) {
	return {
		branding: gu,
		calendar: t,
		...ze(Dl, e)
	};
}
function In(e, t = e.calendar) {
	return {
		branding: _u,
		calendar: t,
		...ze(Dl, e)
	};
}
function Ln(e) {
	return {
		branding: bu,
		...ze(Ol, e)
	};
}
function Rn(e) {
	return {
		branding: Cu,
		sign: gi(e),
		...ze(gl, e)
	};
}
function zn(e) {
	return jt(e.epochNanoseconds, Lc)[0];
}
function Bn(e) {
	return Ot(e.epochNanoseconds);
}
function Vn(e) {
	return e.epochNanoseconds;
}
function Hn(e, t, n, r, i) {
	let a = Ci(r), [o, s] = ((e, t) => {
		let n = t((e = En(e, Gl))[Yl]), r = cu(e);
		return r = ct(Gl, r), [r, n];
	})(i, e);
	if (!s && li(Math.max(o, a), s)) return Wn(r, o);
	if (!s) throw RangeError(bc);
	if (!r.sign) return 0;
	let [c, l, u] = ii(t, n, s), d = ai(u), f = oi(u), p = si(u), m = f(l, c, r);
	ci(s) || (Pt(c), Pt(m));
	let h = p(l, c, m, o);
	return li(o, s) ? Wn(h, o) : Un(h, d(m), o, l, c, d, f);
}
function Un(e, t, n, r, i, a, o) {
	let s = gi(e), [c, l] = Gn(r, Cl(n, e), n, s, i, a, o), u = Kn(t, c, l);
	return e[L[n]] + u * s;
}
function Wn(e, t) {
	return kt(yi(e), Hc[t], 1);
}
function Gn(e, t, n, r, i, a, o) {
	let s = L[n], c = {
		...t,
		[s]: t[s] + r
	}, l = o(e, i, t), u = o(e, i, c);
	return [a(l), a(u)];
}
function Kn(e, t, n) {
	let r = kt(Ct(t, n));
	if (!r) throw RangeError(sc);
	return kt(Ct(t, e)) / r;
}
function qn(e, t) {
	let [n, r, i] = gn(t, 5, 1);
	return jn(ur(e.epochNanoseconds, n, r, i, 1));
}
function Jn(e, t, n) {
	let { epochNanoseconds: r, timeZone: i, calendar: a } = t, [o, s, c] = gn(n);
	if (o === 0 && s === 1) return t;
	let l = e(i);
	if (o === 6) r = er(or, l, t, c);
	else {
		let e = l.N(r);
		r = zr(l, tr(Kt(r, e), o, s, c), e, 2, 0, 1);
	}
	return Mn(r, i, a);
}
function Yn(e, t) {
	return Nn(tr(e, ...gn(t)), e.calendar);
}
function Xn(e, t) {
	let [n, r, i] = gn(t, 5);
	var a;
	return Ln((a = i, rr(e, ar(n, r), a)[0]));
}
function Zn(e, t) {
	let n = e(t.timeZone), [r, i] = or(Au(t, n)), a = kt(Ct(Vr(n, r), Vr(n, i)), Bc, 1);
	if (a <= 0) throw RangeError(sc);
	return a;
}
function Qn(e, t) {
	let { timeZone: n, calendar: r } = t;
	return Mn($n(sr, e(n), t), n, r);
}
function $n(e, t, n) {
	return Vr(t, e(Au(n, t)));
}
function er(e, t, n, r) {
	let [i, a] = e(Au(n, t)), o = n.epochNanoseconds, s = Vr(t, i), c = Vr(t, a);
	if (Tt(o, s, c)) throw RangeError(sc);
	return pr(Kn(o, s, c), r) ? c : s;
}
function tr(e, t, n, r) {
	return nr(e, ar(t, n), r);
}
function nr(e, t, n) {
	let [r, i] = rr(e, t, n);
	return Pt({
		...ri(e, i),
		...r
	});
}
function rr(e, t, n) {
	return Lt(fr(It(e), t, n));
}
function ir(e) {
	return fr(e, zc, 7);
}
function ar(e, t) {
	return Hc[e] * t;
}
function or(e) {
	let t = sr(e);
	return [t, ri(t, 1)];
}
function sr(e) {
	return jl(6, e);
}
function cr(e, t, n) {
	let r = Math.min(Ci(e), 6);
	return bi(dr(yi(e, r), t, n), r);
}
function lr(e, t, n, r, i, a, o, s, c, l) {
	if (r === 0 && i === 1) return e;
	let [u, d, f] = (li(r, s) ? ci(s) && r < 6 && n >= 6 ? hr : mr : gr)(e, t, n, r, i, a, o, s, c, l);
	return f && r !== 7 && (u = ((e, t, n, r, i, a, o, s) => {
		let c = gi(e);
		for (let l = r + 1; l <= n; l++) {
			if (l === 7 && n !== 7) continue;
			let r = Cl(l, e);
			r[L[l]] += c;
			let u = kt(Ct(o(s(i, a, r)), t));
			if (u && Math.sign(u) !== c) break;
			e = r;
		}
		return e;
	})(u, d, n, Math.max(6, r), o, s, c, l)), u;
}
function ur(e, t, n, r, i) {
	return t === 6 ? [fr(At(e), n, r), 0] : dr(e, ar(t, n), r, i);
}
function dr(e, t, n, r) {
	let [i, a] = e;
	r && a < 0 && (a += 864e11, --i);
	let [o, s] = Ye(fr(a, t, n), Vc);
	return bt(i + o, s);
}
function fr(e, t, n) {
	return pr(e / t, n) * t;
}
function pr(e, t) {
	return wu[t](e);
}
function mr(e, t, n, r, i, a) {
	let o = gi(e), s = yi(e), c = ur(s, r, i, a), l = Ct(s, c), u = Math.sign(c[0] - s[0]) === o, d = bi(c, Math.min(n, 6));
	return [
		{
			...e,
			...d
		},
		xt(t, l),
		u
	];
}
function hr(e, t, n, r, i, a, o, s, c, l) {
	let u = gi(e) || 1, d = kt(yi(e, 5)), f = ar(r, i), p = fr(d, f, a), [m, h] = Gn(o, {
		...e,
		...Sl
	}, 6, u, s, c, l), g = p - kt(Ct(m, h)), _ = 0;
	g && Math.sign(g) !== u ? t = St(m, p) : (_ += u, p = fr(g, f, a), t = St(h, p));
	let v = xi(p);
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
function gr(e, t, n, r, i, a, o, s, c, l) {
	let u = gi(e), d = L[r], f = Cl(r, e);
	r === 7 && (e = {
		...e,
		weeks: e.weeks + Math.trunc(e.days / 7)
	});
	let p = Qe(e[d], i) * i;
	f[d] = p;
	let [m, h] = Gn(o, f, r, i * u, s, c, l), g = p + Kn(t, m, h) * u * i, _ = fr(g, i, a), v = Math.sign(_ - g) === u;
	return f[d] = _, [
		f,
		v ? h : m,
		v
	];
}
function _r(e, t, n, r) {
	let [i, a, o, s] = ((e) => {
		let t = bn(e = Tn(e));
		return [e.timeZone, ...t];
	})(r), c = i !== void 0;
	return ((e, t, n, r, i, a) => {
		n = dr(n, i, r, 1);
		let o = t.N(n);
		return Dr(Kt(n, o), a) + (e ? Mr(ir(o)) : "Z");
	})(c, t(c ? e(i) : Tu), n.epochNanoseconds, a, o, s);
}
function vr(e, t, n) {
	let [r, i, a, o, s, c] = ((e) => {
		e = Tn(e);
		let t = fu(e), n = wn(e), r = mu(e), i = hu(e, 4), a = ou(e, 4);
		return [
			t,
			pu(e),
			r,
			i,
			...xn(a, n)
		];
	})(n);
	return ((e, t, n, r, i, a, o, s, c, l) => {
		r = dr(r, c, s, 1);
		let u = e(n).N(r);
		return Dr(Kt(r, u), l) + Mr(ir(u), o) + ((e, t) => t === 1 ? "" : "[" + (t === 2 ? "!" : "") + e + "]")(n, a) + Nr(t, i);
	})(e, t.calendar, t.timeZone, t.epochNanoseconds, r, i, a, o, s, c);
}
function yr(e, t) {
	let [n, r, i, a] = ((e) => (e = Tn(e), [fu(e), ...bn(e)]))(t);
	return o = e.calendar, s = n, c = a, Dr(nr(e, i, r), c) + Nr(o, s);
	var o, s, c;
}
function br(e, t) {
	return n = e.calendar, r = e, i = _n(t), Or(r) + Nr(n, i);
	var n, r, i;
}
function xr(e, t) {
	return Tr(e.calendar, kr, e, _n(t));
}
function Sr(e, t) {
	return Tr(e.calendar, Ar, e, _n(t));
}
function Cr(e, t) {
	let [n, r, i] = vn(t);
	return a = i, jr(rr(e, r, n)[0], a);
	var a;
}
function wr(e, t) {
	let [n, r, i] = vn(t, 3);
	return r > 1 && _i(e = {
		...e,
		...cr(e, r, n)
	}), ((e, t) => {
		let { sign: n } = e, r = n === -1 ? mi(e) : e, { hours: i, minutes: a } = r, [o, s] = jt(yi(r, 3), Rc, Ze);
		vi(o);
		let c = Fr(s, t), l = t >= 0 || !n || c;
		return (n < 0 ? "-" : "") + "P" + Er({
			Y: Lr(r.years),
			M: Lr(r.months),
			W: Lr(r.weeks),
			D: Lr(r.days)
		}) + (i || a || o || l ? "T" + Er({
			H: Lr(i),
			M: Lr(a),
			S: Lr(o, l) + c
		}) : "");
	})(e, i);
}
function Tr(e, t, n, r) {
	return r === 1 ? e === "iso8601" ? t(n) : Or(n) : r > 1 || r === 0 && e !== "iso8601" ? Or(n) + Pr(e, r === 2) : t(n);
}
function Er(e) {
	let t = [];
	for (let n in e) {
		let r = e[n];
		r && t.push(r, n);
	}
	return t.join("");
}
function Dr(e, t) {
	return Or(e) + "T" + jr(e, t);
}
function Or(e) {
	return kr(e) + "-" + jc(e.isoDay);
}
function kr(e) {
	let { isoYear: t } = e;
	return (t < 0 || t > 9999 ? Ir(t) + Ke(6, Math.abs(t)) : Ke(4, t)) + "-" + jc(e.isoMonth);
}
function Ar(e) {
	return jc(e.isoMonth) + "-" + jc(e.isoDay);
}
function jr(e, t) {
	let n = [jc(e.isoHour), jc(e.isoMinute)];
	return t !== -1 && n.push(jc(e.isoSecond) + ((e, t, n, r) => Fr(e * 1e6 + t * 1e3 + n, r))(e.isoMillisecond, e.isoMicrosecond, e.isoNanosecond, t)), n.join(":");
}
function Mr(e, t = 0) {
	if (t === 1) return "";
	let [n, r] = Ye(Math.abs(e), Bc), [i, a] = Ye(r, zc), [o, s] = Ye(a, Rc);
	return Ir(e) + jc(n) + ":" + jc(i) + (o || s ? ":" + jc(o) + Fr(s) : "");
}
function Nr(e, t) {
	return t !== 1 && (t > 1 || t === 0 && e !== "iso8601") ? Pr(e, t === 2) : "";
}
function Pr(e, t) {
	return "[" + (t ? "!" : "") + "u-ca=" + e + "]";
}
function Fr(e, t) {
	let n = Ke(9, e);
	return n = t === void 0 ? n.replace(ku, "") : n.slice(0, t), n ? "." + n : "";
}
function Ir(e) {
	return e < 0 ? "-" : "+";
}
function Lr(e, t) {
	return e || t ? e.toLocaleString("fullwide", { useGrouping: 0 }) : "";
}
function Rr(e, t) {
	let { epochNanoseconds: n } = e, r = (t.N ? t : t(e.timeZone)).N(n), i = Kt(n, r);
	return {
		calendar: e.calendar,
		...i,
		offsetNanoseconds: r
	};
}
function zr(e, t, n, r = 0, i = 0, a, o) {
	if (n !== void 0 && r === 1 && (r === 1 || o)) return Ht(t, n);
	let s = e.v(t);
	if (n !== void 0 && r !== 3) {
		let e = ((e, t, n, r) => {
			let i = Vt(t);
			r && (n = ir(n));
			for (let t of e) {
				let e = kt(Ct(t, i));
				if (r && (e = ir(e)), e === n) return t;
			}
		})(s, t, n, a);
		if (e !== void 0) return e;
		if (r === 0) throw RangeError(hc);
	}
	return o ? Vt(t) : Br(e, t, i, s);
}
function Br(e, t, n = 0, r = e.v(t)) {
	if (r.length === 1) return r[0];
	if (n === 1) throw RangeError(gc);
	if (r.length) return r[n === 3 ? 1 : 0];
	let i = Vt(t), a = ((e, t) => {
		let n = e.N(St(t, -Vc));
		return ((e) => {
			if (e > 864e11) throw RangeError(mc);
			return e;
		})(e.N(St(t, Vc)) - n);
	})(e, i) * (n === 2 ? -1 : 1);
	return (r = e.v(Kt(i, a)))[n === 2 ? 0 : r.length - 1];
}
function Vr(e, t) {
	let n = e.v(t);
	if (n.length) return n[0];
	let r = St(Vt(t), -Vc);
	return e.l(r, 1);
}
function Hr(e, t, n) {
	return jn(Ft(xt(t.epochNanoseconds, ((e) => {
		if (Si(e)) throw RangeError(xc);
		return yi(e, 5);
	})(e ? mi(n) : n))));
}
function Ur(e, t, n, r, i, a = Object.create(null)) {
	let o = t(r.timeZone), s = e(r.calendar);
	return {
		...r,
		...Jr(o, s, r, n ? mi(i) : i, a)
	};
}
function Wr(e, t, n, r, i = Object.create(null)) {
	let { calendar: a } = n;
	return Nn(Yr(e(a), n, t ? mi(r) : r, i), a);
}
function Gr(e, t, n, r, i) {
	let { calendar: a } = n;
	return Pn(Xr(e(a), n, t ? mi(r) : r, i), a);
}
function Kr(e, t, n, r, i) {
	let a = n.calendar, o = e(a), s = Nt(Zr(o, n));
	return t && (r = pi(r)), r.sign < 0 && (s = o.P(s, {
		...xl,
		months: 1
	}), s = ri(s, -1)), Fn(Zr(o, o.P(s, r, i)), a);
}
function qr(e, t, n) {
	return Ln(Qr(t, e ? mi(n) : n)[0]);
}
function Jr(e, t, n, r, i) {
	let a = yi(r, 5), o = n.epochNanoseconds;
	if (Si(r)) {
		let s = Au(n, e);
		o = xt(Br(e, {
			...Xr(t, s, {
				...r,
				...Sl
			}, i),
			...ze(wl, s)
		}), a);
	} else o = xt(o, a), I(i);
	return { epochNanoseconds: Ft(o) };
}
function Yr(e, t, n, r) {
	let [i, a] = Qr(t, n);
	return Pt({
		...Xr(e, t, {
			...n,
			...Sl,
			days: n.days + a
		}, r),
		...i
	});
}
function Xr(e, t, n, r) {
	if (n.years || n.months || n.weeks) return e.P(t, n, r);
	I(r);
	let i = n.days + yi(n, 5)[0];
	return i ? Nt(ri(t, i)) : t;
}
function Zr(e, t, n = 1) {
	return ri(t, n - e.day(t));
}
function Qr(e, t) {
	let [n, r] = yi(t, 5), [i, a] = Lt(It(e) + r);
	return [i, n + a];
}
function $r(e, t, n) {
	let r = I(n), i, { years: a, months: o, weeks: s, days: c } = t;
	if (c += yi(t, 5)[0], a || o) i = ei(this, e, a, o, r);
	else {
		if (!s && !c) return e;
		i = Bt(e);
	}
	if (i === void 0) throw RangeError(_c);
	return i += (7 * s + c) * Pc, Nt(qt(i));
}
function ei(e, t, n, r, i) {
	let [a, o, s] = e.u(t);
	if (n) {
		let [t, r] = e.m(a, o);
		a += n, o = Ya(t, r, e.F(a)), o = Oe("month", o, 1, e.O(a), i);
	}
	return r && ([a, o] = e.p(a, o, r)), s = Oe("day", s, 1, e.B(a, o), i), e.M(a, o, s);
}
function ti(e, t, n) {
	return e += Qe(n, Vl), (t += $e(n, Vl)) < 1 ? (e--, t += Vl) : t > Vl && (e++, t -= Vl), [e, t];
}
function ni(e, t, n) {
	if (n) {
		if (t += n, !Number.isSafeInteger(t)) throw RangeError(_c);
		if (n < 0) for (; t < 1;) t += go.call(this, --e);
		else {
			let n;
			for (; t > (n = go.call(this, e));) t -= n, e++;
		}
	}
	return [e, t];
}
function ri(e, t) {
	return t ? {
		...e,
		...qt(Bt(e) + t * Pc)
	} : e;
}
function ii(e, t, n) {
	let r = e(n.calendar);
	return ci(n) ? [
		n,
		r,
		t(n.timeZone)
	] : [{
		...n,
		...Al
	}, r];
}
function ai(e) {
	return e ? Vn : Vt;
}
function oi(e) {
	return e ? F(Jr, e) : Yr;
}
function si(e) {
	return e ? F(Ta, e) : Ea;
}
function ci(e) {
	return e && e.epochNanoseconds;
}
function li(e, t) {
	return e <= 6 - (ci(t) ? 1 : 0);
}
function ui(e, t, n, r, i, a, o) {
	let s = e(Tn(o).relativeTo), c = Math.max(Ci(i), Ci(a));
	if (li(c, s)) return Rn(_i(((e, t, n, r) => {
		let i = xt(yi(e), yi(t), r ? -1 : 1);
		if (!Number.isFinite(i[0])) throw RangeError(_c);
		return {
			...xl,
			...bi(i, n)
		};
	})(i, a, c, r)));
	if (!s) throw RangeError(bc);
	r && (a = mi(a));
	let [l, u, d] = ii(t, n, s), f = oi(d);
	return Rn(si(d)(u, l, f(u, f(u, l, i), a), c));
}
function di(e, t, n, r, i) {
	let a = Ci(r), [o, s, c, l, u] = ((e, t, n) => {
		e = En(e, Wl);
		let r = su(e), i = n(e[Yl]), a = Sn(e), o = hu(e, 7), s = ou(e);
		if (r === void 0 && s === void 0) throw RangeError(Sc);
		if (s ??= 0, r ??= Math.max(s, t), An(r, s), a = Cn(a, s, 1), a > 1 && s > 5 && r !== s) throw RangeError("For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit");
		return [
			r,
			s,
			a,
			o,
			i
		];
	})(i, a, e);
	if (!u && Math.max(a, o) <= 6) return Rn(_i(((e, t, n, r, i) => {
		let a = ur(yi(e), n, r, i);
		return {
			...xl,
			...bi(a, t)
		};
	})(r, o, s, c, l)));
	if (!ci(u) && !r.sign) return r;
	if (!u) throw RangeError(bc);
	let [d, f, p] = ii(t, n, u), m = ai(p), h = oi(p), g = si(p), _ = h(f, d, r);
	ci(u) || (Pt(d), Pt(_));
	let v = g(f, d, _, o), y = r.sign, b = gi(v);
	if (y && b && y !== b) throw RangeError(sc);
	return v = lr(v, m(_), o, s, c, l, f, d, m, h), Rn(v);
}
function fi(e) {
	return e.sign === -1 ? pi(e) : e;
}
function pi(e) {
	return Rn(mi(e));
}
function mi(e) {
	let t = {};
	for (let n of L) t[n] = -1 * e[n] || 0;
	return t;
}
function hi(e) {
	return !e.sign;
}
function gi(e, t = L) {
	let n = 0;
	for (let r of t) {
		let t = Math.sign(e[r]);
		if (t) {
			if (n && n !== t) throw RangeError(yc);
			n = t;
		}
	}
	return n;
}
function _i(e) {
	for (let t of yl) Oe(t, e[t], -ju, ju, 1);
	return vi(kt(yi(e), Rc)), e;
}
function vi(e) {
	if (!Number.isSafeInteger(e)) throw RangeError(vc);
}
function yi(e, t = 6) {
	return tt(e, t, L);
}
function bi(e, t = 6) {
	let [n, r] = e, i = nt(r, t, L);
	if (i[L[t]] += n * (864e11 / Hc[t]), !Number.isFinite(i[L[t]])) throw RangeError(_c);
	return i;
}
function xi(e, t = 5) {
	return nt(e, t, L);
}
function Si(e) {
	return !!gi(e, vl);
}
function Ci(e) {
	let t = 9;
	for (; t > 0 && !e[L[t]]; t--);
	return t;
}
function wi(e, t) {
	return [e, t];
}
function Ti(e) {
	let t = Math.floor(e / Eu) * Eu;
	return [t, t + Eu];
}
function Ei(e) {
	let t = Ui(e = mt(e));
	if (!t) throw RangeError(wc(e));
	let n;
	if (t.C) n = 0;
	else {
		if (!t.offset) throw RangeError(wc(e));
		n = ki(t.offset);
	}
	return t.timeZone && Ki(t.timeZone, 1), jn(Ht(ln(t), n));
}
function Di(e) {
	let t = Ui(pl(e));
	if (!t) throw RangeError(wc(e));
	if (t.timeZone) return zi(t, t.offset ? ki(t.offset) : void 0);
	if (t.C) throw RangeError(wc(e));
	return Vi(t);
}
function Oi(e, t) {
	let n = Ui(pl(e));
	if (!n || !n.timeZone) throw RangeError(wc(e));
	let { offset: r } = n, i = r ? ki(r) : void 0, [, a, o] = mn(t);
	return zi(n, i, a, o);
}
function ki(e) {
	let t = Ki(e);
	if (t === void 0) throw RangeError(wc(e));
	return t;
}
function Ai(e) {
	let t = Ui(pl(e));
	if (!t || t.C) throw RangeError(wc(e));
	return Nn(Bi(t));
}
function ji(e, t, n) {
	let r = Ui(pl(e));
	if (!r || r.C) throw RangeError(wc(e));
	return t ? r.calendar === "iso8601" && (r = r.isoYear === -271821 && r.isoMonth === 4 ? {
		...r,
		isoDay: 20,
		...Al
	} : {
		...r,
		isoDay: 1,
		...Al
	}) : n && r.calendar === "iso8601" && (r = {
		...r,
		isoYear: Bl
	}), Pn(r.k ? Bi(r) : Vi(r));
}
function Mi(e, t) {
	let n = Wi(pl(t));
	if (n) return Ni(n), Fn(Mt(un(n)));
	let r = ji(t, 1);
	return Fn(Zr(e(r.calendar), r));
}
function Ni(e) {
	if (e.calendar !== "iso8601") throw RangeError(Tc(e.calendar));
}
function Pi(e, t) {
	let n = Gi(pl(t));
	if (n) return Ni(n), In(un(n));
	let r = ji(t, 0, 1), { calendar: i } = r, a = e(i), [o, s, c] = a.u(r), [l, u] = a.m(o, s), [d, f] = a.R(l, u, c);
	return In(Nt(a.U(d, f, c)), i);
}
function Fi(e) {
	let t, n = ((e) => {
		let t = Gu.exec(e);
		return t ? (Yi(t[10]), Ji(t)) : void 0;
	})(pl(e));
	if (!n) {
		if (n = Ui(e), !n || !n.k) throw RangeError(wc(e));
		if (n.C) throw RangeError(Tc("Z"));
		Ni(n);
	}
	if ((t = Wi(e)) && dn(t) || (t = Gi(e)) && dn(t)) throw RangeError(wc(e));
	return Ln(pn(n, 1));
}
function Ii(e) {
	let t = ((e) => {
		let t = Ju.exec(e);
		return t ? ((e) => {
			function t(e, t, a) {
				let o = 0, s = 0;
				if (a && ([o, i] = Ye(i, Hc[a])), e !== void 0) {
					if (r) throw RangeError(Tc(e));
					s = ((e) => {
						let t = parseInt(e);
						if (!Number.isFinite(t)) throw RangeError(Tc(e));
						return t;
					})(e), n = 1, t && (i = Xi(t) * (Hc[a] / 1e9), r = 1);
				}
				return o + s;
			}
			let n = 0, r = 0, i = 0, a = {
				...Fe(L, [
					t(e[2]),
					t(e[3]),
					t(e[4]),
					t(e[5]),
					t(e[6], e[7], 5),
					t(e[8], e[9], 4),
					t(e[10], e[11], 3)
				]),
				...nt(i, 2, L)
			};
			if (!n) throw RangeError(qs(L));
			return Qi(e[1]) < 0 && (a = mi(a)), a;
		})(t) : void 0;
	})(pl(e));
	if (!t) throw RangeError(wc(e));
	return Rn(_i(t));
}
function Li(e) {
	let t = Ui(e) || Wi(e) || Gi(e);
	return t ? t.calendar : e;
}
function Ri(e) {
	let t = Ui(e);
	return t && (t.timeZone || t.C && Tu || t.offset) || e;
}
function zi(e, t, n = 0, r = 0) {
	let i = ta(e.timeZone), a = R(i), o;
	return ln(e), o = e.k ? zr(a, e, t, n, r, !a.j, e.C) : Vr(a, e), Mn(o, i, xo(e.calendar));
}
function Bi(e) {
	return Hi(Pt(ln(e)));
}
function Vi(e) {
	return Hi(Nt(un(e)));
}
function Hi(e) {
	return {
		...e,
		calendar: xo(e.calendar)
	};
}
function Ui(e) {
	let t = Wu.exec(e);
	return t ? ((e) => {
		let t = e[10], n = (t || "").toUpperCase() === "Z";
		return {
			isoYear: qi(e),
			isoMonth: parseInt(e[4]),
			isoDay: parseInt(e[5]),
			...Ji(e.slice(5)),
			...Yi(e[16]),
			k: !!e[6],
			C: n,
			offset: n ? void 0 : t
		};
	})(t) : void 0;
}
function Wi(e) {
	let t = Hu.exec(e);
	return t ? ((e) => ({
		isoYear: qi(e),
		isoMonth: parseInt(e[4]),
		isoDay: 1,
		...Yi(e[5])
	}))(t) : void 0;
}
function Gi(e) {
	let t = Uu.exec(e);
	return t ? ((e) => ({
		isoYear: Bl,
		isoMonth: parseInt(e[1]),
		isoDay: parseInt(e[2]),
		...Yi(e[3])
	}))(t) : void 0;
}
function Ki(e, t) {
	let n = Ku.exec(e);
	return n ? ((e, t) => {
		let n = e[4] || e[5];
		if (t && n) throw RangeError(Tc(n));
		return ((e) => {
			if (Math.abs(e) >= 864e11) throw RangeError(pc);
			return e;
		})(($i(e[2]) * Bc + $i(e[3]) * zc + $i(e[4]) * Rc + Xi(e[5] || "")) * Qi(e[1]));
	})(n, t) : void 0;
}
function qi(e) {
	let t = Qi(e[1]), n = parseInt(e[2] || e[3]);
	if (t < 0 && !n) throw RangeError(Tc(-0));
	return t * n;
}
function Ji(e) {
	let t = $i(e[3]);
	return {
		...Lt(Xi(e[4] || ""))[0],
		isoHour: $i(e[1]),
		isoMinute: $i(e[2]),
		isoSecond: t === 60 ? 59 : t
	};
}
function Yi(e) {
	let t, n, r = [];
	if (e.replace(qu, ((e, i, a) => {
		let o = !!i, [s, c] = a.split("=").reverse();
		if (c) {
			if (c === "u-ca") r.push(s), t ||= o;
			else if (o || /[A-Z]/.test(c)) throw RangeError(Tc(e));
		} else {
			if (n) throw RangeError(Tc(e));
			n = s;
		}
		return "";
	})), r.length > 1 && t) throw RangeError(Tc(e));
	return {
		timeZone: n,
		calendar: r[0] || "iso8601"
	};
}
function Xi(e) {
	return parseInt(e.padEnd(9, "0"));
}
function Zi(e) {
	return RegExp(`^${e}$`, "i");
}
function Qi(e) {
	return e && e !== "+" ? -1 : 1;
}
function $i(e) {
	return e === void 0 ? 0 : parseInt(e);
}
function ea(e) {
	return ta(pl(e));
}
function ta(e) {
	let t = ra(e);
	return typeof t == "number" ? Mr(t) : t ? ((e) => {
		if (Zu.test(e)) throw RangeError(uc(e));
		if (Xu.test(e)) throw RangeError(fc);
		return e.toLowerCase().split("/").map(((e, t) => (e.length <= 3 || /\d/.test(e)) && !/etc|yap/.test(e) ? e.toUpperCase() : e.replace(/baja|dumont|[a-z]+/g, ((e, n) => e.length <= 2 && !t || e === "in" || e === "chat" ? e.toUpperCase() : e.length > 2 || !n ? We(e).replace(/island|noronha|murdo|rivadavia|urville/, We) : e)))).join("/");
	})(e) : Tu;
}
function na(e) {
	let t = ra(e);
	return typeof t == "number" ? t : t ? t.resolvedOptions().timeZone : Tu;
}
function ra(e) {
	let t = Ki(e = e.toUpperCase(), 1);
	return t === void 0 ? e === Tu ? void 0 : Yu(e) : t;
}
function ia(e, t) {
	return wt(e.epochNanoseconds, t.epochNanoseconds);
}
function aa(e, t) {
	return wt(e.epochNanoseconds, t.epochNanoseconds);
}
function oa(e, t, n, r, i, a) {
	let o = e(Tn(a).relativeTo), s = Math.max(Ci(r), Ci(i));
	if (Ve(L, r, i)) return 0;
	if (li(s, o)) return wt(yi(r), yi(i));
	if (!o) throw RangeError(bc);
	let [c, l, u] = ii(t, n, o), d = ai(u), f = oi(u);
	return wt(d(f(l, c, r)), d(f(l, c, i)));
}
function sa(e, t) {
	return ca(e, t) || la(e, t);
}
function ca(e, t) {
	return qe(Bt(e), Bt(t));
}
function la(e, t) {
	return qe(It(e), It(t));
}
function ua(e, t) {
	return !ia(e, t);
}
function da(e, t) {
	return !aa(e, t) && !!_a(e.timeZone, t.timeZone) && e.calendar === t.calendar;
}
function fa(e, t) {
	return !sa(e, t) && e.calendar === t.calendar;
}
function pa(e, t) {
	return !ca(e, t) && e.calendar === t.calendar;
}
function ma(e, t) {
	return !ca(e, t) && e.calendar === t.calendar;
}
function ha(e, t) {
	return !ca(e, t) && e.calendar === t.calendar;
}
function ga(e, t) {
	return !la(e, t);
}
function _a(e, t) {
	if (e === t) return 1;
	try {
		return na(e) === na(t);
	} catch {}
}
function va(e, t, n, r) {
	let i = hn(e, r, 3, 5), a = Aa(t.epochNanoseconds, n.epochNanoseconds, ...i);
	return Rn(e ? mi(a) : a);
}
function ya(e, t, n, r, i, a) {
	let o = Ra(r.calendar, i.calendar), [s, c, l, u] = hn(n, a, 5), d = r.epochNanoseconds, f = i.epochNanoseconds, p = wt(f, d), m;
	if (p) if (s < 6) m = Aa(d, f, s, c, l, u);
	else {
		let n = t(za(r.timeZone, i.timeZone)), d = e(o);
		m = Da(d, n, r, i, p, s, a), m = lr(m, f, s, c, l, u, d, r, Vn, F(Jr, n));
	}
	else m = xl;
	return Rn(n ? mi(m) : m);
}
function ba(e, t, n, r, i) {
	let a = Ra(n.calendar, r.calendar), [o, s, c, l] = hn(t, i, 6), u = Vt(n), d = Vt(r), f = wt(d, u), p;
	if (f) if (o <= 6) p = Aa(u, d, o, s, c, l);
	else {
		let t = e(a);
		p = Oa(t, n, r, f, o, i), p = lr(p, d, o, s, c, l, t, n, Vt, Yr);
	}
	else p = xl;
	return Rn(t ? mi(p) : p);
}
function xa(e, t, n, r, i) {
	let a = Ra(n.calendar, r.calendar);
	return Ca(t, (() => e(a)), n, r, ...hn(t, i, 6, 9, 6));
}
function Sa(e, t, n, r, i) {
	let a = Ra(n.calendar, r.calendar), o = hn(t, i, 9, 9, 8), s = e(a), c = Zr(s, n), l = Zr(s, r);
	return c.isoYear === l.isoYear && c.isoMonth === l.isoMonth && c.isoDay === l.isoDay ? Rn(xl) : Ca(t, (() => s), Nt(c), Nt(l), ...o, 8);
}
function Ca(e, t, n, r, i, a, o, s, c = 6) {
	let l = Vt(n), u = Vt(r);
	if (l === void 0 || u === void 0) throw RangeError(_c);
	let d;
	if (wt(u, l)) if (i === 6) d = Aa(l, u, i, a, o, s);
	else {
		let e = t();
		d = e.h(n, r, i), a === c && o === 1 || (d = lr(d, u, i, a, o, s, e, n, Vt, Xr));
	}
	else d = xl;
	return Rn(e ? mi(d) : d);
}
function wa(e, t, n, r) {
	let [i, a, o, s] = hn(e, r, 5, 5), c = fr(Pa(t, n), ar(a, o), s), l = {
		...xl,
		...xi(c, i)
	};
	return Rn(e ? mi(l) : l);
}
function Ta(e, t, n, r, i, a) {
	let o = wt(r.epochNanoseconds, n.epochNanoseconds);
	return o ? i < 6 ? ja(n.epochNanoseconds, r.epochNanoseconds, i) : Da(t, e, n, r, o, i, a) : xl;
}
function Ea(e, t, n, r, i) {
	let a = Vt(t), o = Vt(n), s = wt(o, a);
	return s ? r <= 6 ? ja(a, o, r) : Oa(e, t, n, s, r, i) : xl;
}
function Da(e, t, n, r, i, a, o) {
	let [s, c, l] = ka(t, n, r, i);
	var u, d;
	return {
		...a === 6 ? (u = s, d = c, {
			...xl,
			days: Ma(u, d)
		}) : e.h(s, c, a, o),
		...xi(l)
	};
}
function Oa(e, t, n, r, i, a) {
	let [o, s, c] = ((e, t, n) => {
		let r = t, i = Pa(e, t);
		return Math.sign(i) === -n && (r = ri(t, -n), i += 864e11 * n), [
			e,
			r,
			i
		];
	})(t, n, r);
	return {
		...e.h(o, s, i, a),
		...xi(c)
	};
}
function ka(e, t, n, r) {
	function i() {
		return d = {
			...ri(s, l++ * -r),
			...o
		}, f = Br(e, d), wt(c, f) === -r;
	}
	let a = Au(t, e), o = ze(wl, a), s = Au(n, e), c = n.epochNanoseconds, l = 0, u = Pa(a, s), d, f;
	if (Math.sign(u) === -r && l++, i() && (r === -1 || i())) throw RangeError(sc);
	let p = kt(Ct(f, c));
	return [
		a,
		d,
		p
	];
}
function Aa(e, t, n, r, i, a) {
	return {
		...xl,
		...bi(ur(Ct(e, t), r, i, a), n)
	};
}
function ja(e, t, n) {
	return {
		...xl,
		...bi(Ct(e, t), n)
	};
}
function Ma(e, t) {
	return Na(Bt(e), Bt(t));
}
function Na(e, t) {
	return Math.trunc((t - e) / Pc);
}
function Pa(e, t) {
	return It(t) - It(e);
}
function Fa(e, t, n) {
	if (n <= 7) {
		let r = 0, i = Ma({
			...e,
			...Al
		}, {
			...t,
			...Al
		});
		return n === 7 && ([r, i] = Ze(i, 7)), {
			...xl,
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
					s = (i -= u) - t, c = a - Ya(r, o, e.F(i)) + (n || e.O(i));
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
		...xl,
		years: a,
		months: o,
		days: s
	};
}
function Ia(e) {
	return e * Vl;
}
function La(e, t) {
	let n = t + e, r = Math.sign(e), i = r < 0 ? -1 : 0, a = 0;
	for (let e = t; e !== n; e += r) a += go.call(this, e + i);
	return a;
}
function Ra(e, t) {
	if (e !== t) throw RangeError(lc);
	return e;
}
function za(e, t) {
	if (!_a(e, t)) throw RangeError(dc);
	return e;
}
function Ba(e) {
	return this.I(e)[0];
}
function Va(e) {
	return this.I(e)[1];
}
function Ha(e) {
	let [t] = this.u(e);
	return this.L(t);
}
function Ua(e) {
	let [t] = this.u(e);
	return this.O(t);
}
function Wa(e) {
	let [t, n] = this.u(e);
	return this.B(t, n);
}
function Ga(e) {
	let [t] = this.u(e);
	return this.G(t);
}
function Ka(e) {
	let [t] = this.u(e);
	return Na(this.M(t), Bt(e)) + 1;
}
function qa(e) {
	let t = Qu.exec(e);
	if (!t) throw RangeError(rc(e));
	return [parseInt(t[1]), !!t[2]];
}
function Ja(e, t) {
	return "M" + jc(e) + (t ? "L" : "");
}
function Ya(e, t, n) {
	return e + (t || n && e >= n ? 1 : 0);
}
function Xa(e, t) {
	return e - (t && e >= t ? 1 : 0);
}
function Za(e, t) {
	return (t + e) * (Math.sign(t) || 1) || 0;
}
function Qa(e) {
	return ul[eo(e)];
}
function $a(e) {
	return fl[eo(e)];
}
function eo(e) {
	return So(e.id || "iso8601");
}
function to(e) {
	function t(e) {
		return ((e, t) => ({
			...io(e, t),
			V: e.month,
			day: parseInt(e.day)
		}))(Jt(n, e), r);
	}
	let n = ed(e), r = So(e);
	return {
		id: e,
		_: no(t),
		J: ro(t)
	};
}
function no(e) {
	return Ae(((t) => e(Bt(t))), WeakMap);
}
function ro(e) {
	let t = e(0).year - zl;
	return Ae(((n) => {
		let r, i = Wt(n - t), a = 0, o = [], s = [];
		do
			i += 400 * Pc;
		while ((r = e(i)).year <= n);
		do
			if (i += (1 - r.day) * Pc, r.year === n && (o.push(i), s.push(r.V)), i -= Pc, ++a > 100 || i < -Nl) throw RangeError(sc);
		while ((r = e(i)).year >= n);
		return {
			K: o.reverse(),
			X: kc(s.reverse())
		};
	}));
}
function io(e, t) {
	let n, r, i = ao(e);
	if (e.era) {
		let a = ul[t], o = dl[t] || {};
		a !== void 0 && (n = t === "islamic" ? "ah" : e.era.normalize("NFD").toLowerCase().replace(/[^a-z0-9]/g, ""), n === "bc" || n === "b" ? n = "bce" : n === "ad" || n === "a" ? n = "ce" : n === "beforeroc" && (n = "broc"), n = o[n] || n, r = i, i = Za(r, a[n] || 0));
	}
	return {
		era: n,
		eraYear: r,
		year: i
	};
}
function ao(e) {
	return parseInt(e.relatedYear || e.year);
}
function oo(e) {
	return this._(e).day;
}
function so(e) {
	let { year: t, V: n, day: r } = this._(e), { X: i } = this.J(t);
	return [
		t,
		i[n] + 1,
		r
	];
}
function co(e, t, n) {
	return qt(lo.call(this, e, t, n));
}
function lo(e, t = 1, n = 1) {
	return this.J(e).K[t - 1] + (n - 1) * Pc;
}
function uo(e, t) {
	let n = fo.call(this, e);
	return [Xa(t, n), n === t];
}
function fo(e) {
	let t = yo(this, e), n = yo(this, e - 1), r = t.length;
	if (r > n.length) {
		let e = $a(this);
		if (e < 0) return -e;
		for (let e = 0; e < r; e++) if (t[e] !== n[e]) return e + 1;
	}
}
function po(e) {
	let t = mo.call(this, e);
	return t > mo.call(this, e - 1) && t > mo.call(this, e + 1);
}
function mo(e) {
	return Na(lo.call(this, e), lo.call(this, e + 1));
}
function ho(e, t) {
	let { K: n } = this.J(e), r = t + 1, i = n;
	return r > n.length && (r = 1, i = this.J(e + 1).K), Na(n[t - 1], i[r - 1]);
}
function go(e) {
	return this.J(e).K.length;
}
function _o(e) {
	let t = this._(e);
	return [t.era, t.eraYear];
}
function vo(e, t, n) {
	let r = this.id && So(this.id) === "chinese" ? ((e, t, n) => {
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
	})(e, t, n) : Bl, [i, a, o] = so.call(this, {
		isoYear: r,
		isoMonth: Vl,
		isoDay: 31
	}), s = fo.call(this, i), c = a === s;
	(qe(e, Xa(a, s)) || qe(Number(t), Number(c)) || qe(n, o)) === 1 && i--;
	for (let r = 0; r < 100; r++) {
		let a = i - r, o = fo.call(this, a), s = Ya(e, t, o);
		if (t === (s === o) && n <= ho.call(this, a, s)) return [a, s];
	}
}
function yo(e, t) {
	return Object.keys(e.J(t).X);
}
function bo(e) {
	return xo(pl(e));
}
function xo(e) {
	if ((e = e.toLowerCase()) !== "iso8601" && e !== cl) {
		let t = ed(e).resolvedOptions().calendar;
		if (So(e) !== So(t)) throw RangeError(cc(e));
		return t;
	}
	return e;
}
function So(e) {
	return e === "islamicc" && (e = "islamic"), e.split("-")[0];
}
function Co(e, t) {
	return (n) => n === "iso8601" ? e : n === cl || n === ll ? Object.assign(Object.create(e), { id: n }) : Object.assign(Object.create(t), $u(n));
}
function wo(e, t, n, r) {
	let i = Mo(n, r, rl, [], Jc);
	if (i.timeZone !== void 0) {
		let r = n.ee(i), a = Po(i), o = e(i.timeZone);
		return {
			epochNanoseconds: zr(t(o), {
				...r,
				...a
			}, i.offset === void 0 ? void 0 : ki(i.offset)),
			timeZone: o
		};
	}
	return {
		...n.ee(i),
		...Al
	};
}
function To(e, t, n, r, i, a) {
	let o = Mo(n, i, rl, Kc, Jc), s = e(o.timeZone), [c, l, u] = mn(a), d = n.ee(o, Dn(c)), f = Po(o, c);
	return Mn(zr(t(s), {
		...d,
		...f
	}, o.offset === void 0 ? void 0 : ki(o.offset), l, u), s, r);
}
function Eo(e, t, n) {
	let r = Mo(e, t, rl, [], Uc), i = I(n);
	return Nn(Pt({
		...e.ee(r, Dn(i)),
		...Po(r, i)
	}));
}
function Do(e, t, n, r = []) {
	let i = Mo(e, t, rl, r);
	return e.ee(i, n);
}
function Oo(e, t, n, r) {
	let i = Mo(e, t, tl, r);
	return e.ne(i, n);
}
function ko(e, t, n, r) {
	let i = Mo(e, n, rl, el);
	return t && i.month !== void 0 && i.monthCode === void 0 && i.year === void 0 && (i.year = Bl), e.te(i, r);
}
function Ao(e, t) {
	return Ln(Po(No(e, Wc, [], 1), I(t)));
}
function jo(e) {
	let t = No(e, gl);
	return Rn(_i({
		...xl,
		...t
	}));
}
function Mo(e, t, n, r = [], i = []) {
	return No(t, [...e.fields(n), ...i].sort(), r);
}
function No(e, t, n, r = !n) {
	let i = {}, a, o = 0;
	for (let r of t) {
		if (r === a) throw RangeError(Ks(r));
		if (r === "constructor" || r === "__proto__") throw RangeError(Gs(r));
		let t = e[r];
		if (t !== void 0) o = 1, sd[r] && (t = sd[r](t, r)), i[r] = t;
		else if (n) {
			if (n.includes(r)) throw TypeError(Ws(r));
			i[r] = ol[r];
		}
		a = r;
	}
	if (r && !o) throw TypeError(qs(t));
	return i;
}
function Po(e, t) {
	return pn(cd({
		...ol,
		...e
	}), t);
}
function Fo(e, t, n, r, i) {
	let { calendar: a, timeZone: o } = n, s = e(a), c = t(o), l = [...s.fields(rl), ...qc].sort(), u = ((e) => {
		let t = Au(e, R), n = Mr(t.offsetNanoseconds), r = od(e.calendar), [i, a, o] = r.u(t), [s, c] = r.m(i, a), l = Ja(s, c);
		return {
			...ld(t),
			year: i,
			monthCode: l,
			day: o,
			offset: n
		};
	})(n), d = No(r, l), f = s.oe(u, d), p = {
		...u,
		...d
	}, [m, h, g] = mn(i, 2);
	return Mn(zr(c, {
		...s.ee(f, Dn(m)),
		...pn(cd(p), m)
	}, ki(p.offset), h, g), o, a);
}
function Io(e, t, n, r) {
	let i = e(t.calendar), a = [...i.fields(rl), ...Uc].sort(), o = {
		...es(s = t),
		hour: s.isoHour,
		minute: s.isoMinute,
		second: s.isoSecond,
		millisecond: s.isoMillisecond,
		microsecond: s.isoMicrosecond,
		nanosecond: s.isoNanosecond
	};
	var s;
	let c = No(n, a), l = I(r), u = i.oe(o, c), d = {
		...o,
		...c
	};
	return Nn(Pt({
		...i.ee(u, Dn(l)),
		...pn(cd(d), l)
	}));
}
function Lo(e, t, n, r) {
	let i = e(t.calendar), a = i.fields(rl).sort(), o = es(t), s = No(n, a), c = i.oe(o, s);
	return i.ee(c, r);
}
function Ro(e, t, n, r) {
	let i = e(t.calendar), a = i.fields(tl).sort(), o = ((e) => {
		let t = od(e.calendar), [n, r] = t.u(e), [i, a] = t.m(n, r);
		return {
			year: n,
			monthCode: Ja(i, a)
		};
	})(t), s = No(n, a), c = i.oe(o, s);
	return i.ne(c, r);
}
function zo(e, t, n, r) {
	let i = e(t.calendar), a = i.fields(rl).sort(), o = ((e) => {
		let t = od(e.calendar), [n, r, i] = t.u(e), [a, o] = t.m(n, r);
		return {
			monthCode: Ja(a, o),
			day: i
		};
	})(t), s = No(n, a), c = i.oe(o, s);
	return i.te(c, r);
}
function Bo(e, t, n) {
	return Ln(((e, t, n) => Po({
		...ze(Wc, e),
		...No(t, Wc)
	}, I(n)))(e, t, n));
}
function Vo(e, t) {
	return Rn((n = e, r = t, _i({
		...n,
		...No(r, gl)
	})));
	var n, r;
}
function Ho(e, t) {
	let n = Mo(e, t, al);
	return e.te(n);
}
function Uo(e, t, n) {
	let r = Mo(e, t, nl);
	return e.ne(r, n);
}
function Wo(e, t, n, r, i) {
	t = ze(n = e.fields(n), t), r = No(r, i = e.fields(i), []);
	let a = e.oe(t, r);
	return a = No(a, [...n, ...i].sort(), []), e.ee(a);
}
function Go(e, t) {
	let n = I(t), r = Xo(this, e), i = Zo(this, e, r, n), a = Qo(this, e, i, r, n);
	return Pn(Nt(this.U(r, i, a)), this.id || "iso8601");
}
function Ko(e, t) {
	let n = I(t), r = Xo(this, e), i = Zo(this, e, r, n);
	return Fn(Mt(this.U(r, i, 1)), this.id || "iso8601");
}
function qo(e, t) {
	let n = I(t), r, i, a, o = e.eraYear !== void 0 || e.year !== void 0 ? Xo(this, e) : void 0, s = !this.id;
	if (o === void 0 && s && (o = Bl), o !== void 0) {
		let t = Zo(this, e, o, n);
		r = Qo(this, e, t, o, n);
		let s = this.F(o);
		i = Xa(t, s), a = t === s;
	} else {
		if (e.monthCode === void 0) throw TypeError(ac);
		if ([i, a] = qa(e.monthCode), this.id && this.id !== cl && this.id !== ll) if (this.id && So(this.id) === "coptic" && n === 0) {
			let t = a || i !== 13 ? 30 : 6;
			r = e.day, r = Je(r, 1, t);
		} else if (this.id && So(this.id) === "chinese" && n === 0) {
			let t = !a || i !== 1 && i !== 9 && i !== 10 && i !== 11 && i !== 12 ? 30 : 29;
			r = e.day, r = Je(r, 1, t);
		} else r = e.day;
		else r = Qo(this, e, Zo(this, e, Bl, n), Bl, n);
	}
	let c = this.R(i, a, r);
	if (!c) throw RangeError("Cannot guess year");
	let [l, u] = c;
	return In(Nt(this.U(l, u, r)), this.id || "iso8601");
}
function Jo(e) {
	return Qa(this) && e.includes("year") ? [...e, ...Yc] : e;
}
function Yo(e, t) {
	let n = Object.assign(Object.create(null), e);
	return $o(n, t, $c), Qa(this) && ($o(n, t, Xc), this.id === ll && $o(n, t, il, Yc)), n;
}
function Xo(e, t) {
	let n = Qa(e), r = dl[e.id || ""] || {}, { era: i, eraYear: a, year: o } = t;
	if (i !== void 0 || a !== void 0) {
		if (i === void 0 || a === void 0) throw TypeError($s);
		if (!n) throw RangeError(Qs);
		let e = n[r[i] || i];
		if (e === void 0) throw RangeError(tc(i));
		let t = Za(a, e);
		if (o !== void 0 && o !== t) throw RangeError(ec);
		o = t;
	} else if (o === void 0) throw TypeError(nc(n));
	return o;
}
function Zo(e, t, n, r) {
	let { month: i, monthCode: a } = t;
	if (a !== void 0) {
		let t = ((e, t, n, r) => {
			let i = e.F(n), [a, o] = qa(t), s = Ya(a, o, i);
			if (o) {
				let t = $a(e);
				if (t === void 0) throw RangeError(oc);
				if (t > 0) {
					if (s > t) throw RangeError(oc);
					if (i === void 0) {
						if (r === 1) throw RangeError(oc);
						s--;
					}
				} else if (s !== -t || i === void 0 && r === 1) throw RangeError(oc);
			}
			return s;
		})(e, a, n, r);
		if (i !== void 0 && i !== t) throw RangeError(ic);
		i = t, r = 1;
	} else if (i === void 0) throw TypeError(ac);
	return Oe("month", i, 1, e.O(n), r);
}
function Qo(e, t, n, r, i) {
	return De(t, "day", 1, e.B(r, n), i);
}
function $o(e, t, n, r) {
	let i = 0, a = [];
	for (let e of n) t[e] === void 0 ? a.push(e) : i = 1;
	if (Object.assign(e, t), i) for (let t of r || a) delete e[t];
}
function es(e) {
	let t = od(e.calendar), [n, r, i] = t.u(e), [a, o] = t.m(n, r);
	return {
		year: n,
		monthCode: Ja(a, o),
		day: i
	};
}
function ts(e) {
	return jn(Ft(Et(ht(e))));
}
function ns(e, t, n, r, i = sl) {
	return Mn(Ft(Et(ht(n))), t(r), e(i));
}
function rs(e, t, n, r, i = 0, a = 0, o = 0, s = 0, c = 0, l = 0, u = sl) {
	return Nn(Pt(ln(Ie(_t, Fe(El, [
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
function is(e, t, n, r, i = sl) {
	return Pn(Nt(un(Ie(_t, {
		isoYear: t,
		isoMonth: n,
		isoDay: r
	}))), e(i));
}
function as(e, t, n, r = sl, i = 1) {
	let a = _t(t), o = _t(n), s = e(r);
	return Fn(Mt(un({
		isoYear: a,
		isoMonth: o,
		isoDay: _t(i)
	})), s);
}
function os(e, t, n, r = sl, i = Bl) {
	let a = _t(t), o = _t(n), s = e(r);
	return In(Nt(un({
		isoYear: _t(i),
		isoMonth: a,
		isoDay: o
	})), s);
}
function ss(e = 0, t = 0, n = 0, r = 0, i = 0, a = 0) {
	return Ln(pn(Ie(_t, Fe(wl, [
		e,
		t,
		n,
		r,
		i,
		a
	])), 1));
}
function cs(e = 0, t = 0, n = 0, r = 0, i = 0, a = 0, o = 0, s = 0, c = 0, l = 0) {
	return Rn(_i(Ie(vt, Fe(L, [
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
function ls(e, t, n = sl) {
	return Mn(e.epochNanoseconds, t, n);
}
function us(e) {
	return jn(e.epochNanoseconds);
}
function ds(e, t) {
	return Nn(Au(t, e));
}
function fs(e, t) {
	return Pn(Au(t, e));
}
function ps(e, t) {
	return Ln(Au(t, e));
}
function ms(e, t, n, r) {
	return Mn(Ft(((e, t, n, r) => {
		let i = ((e) => uu(Tn(e)))(r);
		return Br(e(t), n, i);
	})(e, n, t, r)), n, t.calendar);
}
function hs(e, t, n, r, i) {
	let a = e(i.timeZone), o = i.plainTime, s = o === void 0 ? void 0 : t(o), c = n(a), l;
	return l = s ? Br(c, {
		...r,
		...s
	}) : Vr(c, {
		...r,
		...Al
	}), Mn(l, a, r.calendar);
}
function gs(e, t = Al) {
	return Nn(Pt({
		...e,
		...t
	}));
}
function _s(e, t, n) {
	return Uo(e(t.calendar), n);
}
function vs(e, t, n) {
	return Ho(e(t.calendar), n);
}
function ys(e, t, n, r) {
	return ((e, t, n) => Wo(e, t, nl, lt(n), el))(e(t.calendar), n, r);
}
function bs(e, t, n, r) {
	return ((e, t, n) => Wo(e, t, al, lt(n), Zc))(e(t.calendar), n, r);
}
function xs(e) {
	return jn(Ft(Dt(vt(e), Lc)));
}
function Ss(e) {
	return jn(Ft(Et(ht(e))));
}
function Cs(e, t, n) {
	let r = new Set(n);
	return (i, a) => {
		let o = n && Be(i, n);
		if (!Be(i = ((e, t) => {
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
		return n && (i.timeZone = Tu, ["full", "long"].includes(i.ie) && (i.ie = "medium")), i;
	};
}
function ws(e, t = Ts, n = 0) {
	let [r, , , i] = e;
	return (a, o = zd, ...s) => {
		let c = t(i && i(...s), a, o, r, n);
		return [c, ...Ds(e, c.resolvedOptions(), s)];
	};
}
function Ts(e, t, n, r, i) {
	if (n = r(n, i), e) {
		if (n.timeZone !== void 0) throw TypeError(Oc);
		n.timeZone = e;
	}
	return new Rl(t, n);
}
function Es() {
	return new Rl(void 0, { calendar: sl }).resolvedOptions().calendar === sl;
}
function Ds(e, t, n) {
	let [, r, i] = e;
	return n.map(((e) => (e.calendar && ((e, t, n) => {
		if ((n || e !== "iso8601") && e !== t) throw RangeError(lc);
	})(e.calendar, t.calendar, i), r(e, t))));
}
function Os(e, t, n) {
	let r = t.timeZone, i = e(r), a = {
		...Au(t, i),
		...n || Al
	}, o;
	return o = n ? zr(i, a, a.offsetNanoseconds, 2) : Vr(i, a), Mn(o, r, t.calendar);
}
function ks(e, t = Al) {
	return Nn(Pt({
		...e,
		...t
	}));
}
function As(e, t) {
	return {
		...e,
		calendar: t
	};
}
function js(e, t) {
	return {
		...e,
		timeZone: t
	};
}
function Ms(e) {
	let t = Ns();
	return Kt(t, e.N(t));
}
function Ns() {
	return Dt(Date.now(), Lc);
}
function Ps() {
	return new Rl().resolvedOptions().timeZone;
}
var Fs = (e, t) => `Non-integer ${e}: ${t}`, Is = (e, t) => `Non-positive ${e}: ${t}`, Ls = (e, t) => `Non-finite ${e}: ${t}`, Rs = (e) => `Cannot convert bigint to ${e}`, zs = (e) => `Invalid bigint: ${e}`, Bs = "Cannot convert Symbol to string", Vs = "Invalid object", Hs = (e, t, n, r, i) => i ? Hs(e, i[t], i[n], i[r]) : Us(e, t) + `; must be between ${n}-${r}`, Us = (e, t) => `Invalid ${e}: ${t}`, Ws = (e) => `Missing ${e}`, Gs = (e) => `Invalid field ${e}`, Ks = (e) => `Duplicate field ${e}`, qs = (e) => "No valid fields: " + e.join(), Js = "Invalid bag", Ys = (e, t, n) => Us(e, t) + "; must be " + Object.keys(n).join(), Xs = "Cannot use valueOf", Zs = "Invalid calling context", Qs = "Forbidden era/eraYear", $s = "Mismatching era/eraYear", ec = "Mismatching year/eraYear", tc = (e) => `Invalid era: ${e}`, nc = (e) => "Missing year" + (e ? "/era/eraYear" : ""), rc = (e) => `Invalid monthCode: ${e}`, ic = "Mismatching month/monthCode", ac = "Missing month/monthCode", oc = "Invalid leap month", sc = "Invalid protocol results", cc = (e) => Us("Calendar", e), lc = "Mismatching Calendars", uc = (e) => Us("TimeZone", e), dc = "Mismatching TimeZones", fc = "Forbidden ICU TimeZone", pc = "Out-of-bounds offset", mc = "Out-of-bounds TimeZone gap", hc = "Invalid TimeZone offset", gc = "Ambiguous offset", _c = "Out-of-bounds date", vc = "Out-of-bounds duration", yc = "Cannot mix duration signs", bc = "Missing relativeTo", xc = "Cannot use large units", Sc = "Required smallestUnit or largestUnit", Cc = "smallestUnit > largestUnit", wc = (e) => `Cannot parse: ${e}`, Tc = (e) => `Invalid substring: ${e}`, Ec = (e) => `Cannot format ${e}`, Dc = "Mismatching types for formatting", Oc = "Cannot specify TimeZone", kc = /* @__PURE__ */ F(Le, ((e, t) => t)), Ac = /* @__PURE__ */ F(Le, ((e, t, n) => n)), jc = /* @__PURE__ */ F(Ke, 2), Mc = {
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
}, Nc = /* @__PURE__ */ Object.keys(Mc), Pc = 864e5, Fc = 1e3, Ic = 1e3, Lc = 1e6, Rc = 1e9, zc = 6e10, Bc = 36e11, Vc = 864e11, Hc = [
	1,
	Ic,
	Lc,
	Rc,
	zc,
	Bc,
	Vc
], Uc = /* @__PURE__ */ Nc.slice(0, 6), Wc = /* @__PURE__ */ Ge(Uc), Gc = ["offset"], Kc = ["timeZone"], qc = /* @__PURE__ */ Uc.concat(Gc), Jc = /* @__PURE__ */ qc.concat(Kc), Yc = ["era", "eraYear"], Xc = /* @__PURE__ */ Yc.concat(["year"]), Zc = ["year"], Qc = ["monthCode"], $c = /* @__PURE__ */ ["month"].concat(Qc), el = ["day"], tl = /* @__PURE__ */ $c.concat(Zc), nl = /* @__PURE__ */ Qc.concat(Zc), rl = /* @__PURE__ */ el.concat(tl), il = /* @__PURE__ */ el.concat($c), al = /* @__PURE__ */ el.concat(Qc), ol = /* @__PURE__ */ Ac(Uc, 0), sl = "iso8601", cl = "gregory", ll = "japanese", ul = {
	[cl]: {
		"gregory-inverse": -1,
		gregory: 0
	},
	[ll]: {
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
}, dl = {
	[cl]: {
		bce: "gregory-inverse",
		ce: "gregory"
	},
	[ll]: {
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
}, fl = {
	chinese: 13,
	dangi: 13,
	hebrew: -6
}, pl = /* @__PURE__ */ F(ut, "string"), ml = /* @__PURE__ */ F(ut, "boolean"), hl = /* @__PURE__ */ F(ut, "number"), L = /* @__PURE__ */ Nc.map(((e) => e + "s")), gl = /* @__PURE__ */ Ge(L), _l = /* @__PURE__ */ L.slice(0, 6), vl = /* @__PURE__ */ L.slice(6), yl = /* @__PURE__ */ vl.slice(1), bl = /* @__PURE__ */ kc(L), xl = /* @__PURE__ */ Ac(L, 0), Sl = /* @__PURE__ */ Ac(_l, 0), Cl = /* @__PURE__ */ F(He, L), wl = [
	"isoNanosecond",
	"isoMicrosecond",
	"isoMillisecond",
	"isoSecond",
	"isoMinute",
	"isoHour"
], Tl = [
	"isoDay",
	"isoMonth",
	"isoYear"
], El = /* @__PURE__ */ wl.concat(Tl), Dl = /* @__PURE__ */ Ge(Tl), Ol = /* @__PURE__ */ Ge(wl), kl = /* @__PURE__ */ Ge(El), Al = /* @__PURE__ */ Ac(Ol, 0), jl = /* @__PURE__ */ F(He, El), Ml = 1e8, Nl = Ml * Pc, Pl = [Ml, 0], Fl = [-Ml, 0], Il = 275760, Ll = -271821, Rl = Intl.DateTimeFormat, zl = 1970, Bl = 1972, Vl = 12, Hl = /* @__PURE__ */ Wt(1868, 9, 8), Ul = /* @__PURE__ */ Ae(cn, WeakMap), Wl = "smallestUnit", Gl = "unit", Kl = "roundingMode", ql = "roundingIncrement", Jl = "fractionalSecondDigits", Yl = "relativeTo", Xl = "direction", Zl = {
	constrain: 0,
	reject: 1
}, Ql = /* @__PURE__ */ Object.keys(Zl), $l = {
	compatible: 0,
	reject: 1,
	earlier: 2,
	later: 3
}, eu = {
	reject: 0,
	use: 1,
	prefer: 2,
	ignore: 3
}, tu = {
	auto: 0,
	never: 1,
	critical: 2,
	always: 3
}, nu = {
	auto: 0,
	never: 1,
	critical: 2
}, ru = {
	auto: 0,
	never: 1
}, iu = {
	floor: 0,
	halfFloor: 1,
	ceil: 2,
	halfCeil: 3,
	trunc: 4,
	halfTrunc: 5,
	expand: 6,
	halfExpand: 7,
	halfEven: 8
}, au = {
	previous: -1,
	next: 1
}, ou = /* @__PURE__ */ F(On, Wl), su = /* @__PURE__ */ F(On, "largestUnit"), cu = /* @__PURE__ */ F(On, Gl), lu = /* @__PURE__ */ F(kn, "overflow", Zl), uu = /* @__PURE__ */ F(kn, "disambiguation", $l), du = /* @__PURE__ */ F(kn, "offset", eu), fu = /* @__PURE__ */ F(kn, "calendarName", tu), pu = /* @__PURE__ */ F(kn, "timeZoneName", nu), mu = /* @__PURE__ */ F(kn, "offset", ru), hu = /* @__PURE__ */ F(kn, Kl, iu), gu = "PlainYearMonth", _u = "PlainMonthDay", vu = "PlainDate", yu = "PlainDateTime", bu = "PlainTime", xu = "ZonedDateTime", Su = "Instant", Cu = "Duration", wu = [
	Math.floor,
	(e) => et(e) ? Math.floor(e) : Math.round(e),
	Math.ceil,
	(e) => et(e) ? Math.ceil(e) : Math.round(e),
	Math.trunc,
	(e) => et(e) ? Math.trunc(e) || 0 : Math.round(e),
	(e) => e < 0 ? Math.floor(e) : Math.ceil(e),
	(e) => Math.sign(e) * Math.round(Math.abs(e)) || 0,
	(e) => et(e) ? (e = Math.trunc(e) || 0) + e % 2 : Math.round(e)
], Tu = "UTC", Eu = 5184e3, Du = /* @__PURE__ */ Ut(1847), Ou = /* @__PURE__ */ Ut((() => {
	let e = /* @__PURE__ */ new Date();
	return (e.getTime() === 0 ? 2040 : e.getUTCFullYear()) + 10;
})()), ku = /0+$/, Au = /* @__PURE__ */ Ae(Rr, WeakMap), ju = 2 ** 32 - 1, R = /* @__PURE__ */ Ae(((e) => {
	let t = ra(e);
	return typeof t == "object" ? new Nu(t) : new Mu(t || 0);
})), Mu = class {
	constructor(e) {
		this.j = e;
	}
	N() {
		return this.j;
	}
	v(e) {
		return ((e) => {
			let t = Vt({
				...e,
				...Al
			});
			if (!t || Math.abs(t[0]) > 1e8) throw RangeError(_c);
		})(e), [Ht(e, this.j)];
	}
	l() {}
}, Nu = class {
	constructor(e) {
		this.ae = ((e) => {
			function t(e) {
				let [t, s] = Ti(Je(e, a, o)), c = r(t), l = r(s);
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
			let r = Ae(e), i = Ae(wi), a = Du, o = Ou;
			return {
				se(e) {
					let n = t(e - 86400), r = t(e + 86400), i = e - n, a = e - r;
					if (n === r) return [i];
					let o = t(i);
					return o === t(a) ? [e - o] : n > r ? [i, a] : [];
				},
				ue: t,
				l(e, t) {
					let s = Je(e, a, o), [c, l] = Ti(s), u = Eu * t, d = t < 0 ? () => l > a || (a = s, 0) : () => c < o || (o = s, 0);
					for (; d();) {
						let a = r(c), o = r(l);
						if (a !== o) {
							let r = i(c, l);
							n(r, a, o);
							let s = r[0];
							if ((qe(s, e) || 1) === t) return s;
						}
						c += u, l += u;
					}
				}
			};
		})(((e) => (t) => {
			let n = Jt(e, t * Fc);
			return Ut(ao(n), parseInt(n.month), parseInt(n.day), parseInt(n.hour), parseInt(n.minute), parseInt(n.second)) - t;
		})(e));
	}
	N(e) {
		return this.ae.ue(Rt(e)) * Rc;
	}
	v(e) {
		let [t, n] = [Ut((r = e).isoYear, r.isoMonth, r.isoDay, r.isoHour, r.isoMinute, r.isoSecond), r.isoMillisecond * Lc + r.isoMicrosecond * Ic + r.isoNanosecond];
		var r;
		return this.ae.se(t).map(((e) => Ft(St(Dt(e, Rc), n))));
	}
	l(e, t) {
		let [n, r] = zt(e), i = this.ae.l(n + (t > 0 || r ? 1 : 0), t);
		if (i !== void 0) return Dt(i, Rc);
	}
}, Pu = "([+-])", Fu = "(?:[.,](\\d{1,9}))?", Iu = `(?:(?:${Pu}(\\d{6}))|(\\d{4}))-?(\\d{2})`, Lu = "(\\d{2})(?::?(\\d{2})(?::?(\\d{2})" + Fu + ")?)?", Ru = Pu + Lu, zu = Iu + "-?(\\d{2})(?:[T ](\\d{2})(?::?(\\d{2})(?::?(\\d{2})(?:[.,](\\d{1,9}))?)?)?(Z|" + Ru + ")?)?", Bu = "\\[(!?)([^\\]]*)\\]", Vu = `((?:${Bu}){0,9})`, Hu = /* @__PURE__ */ Zi(Iu + Vu), Uu = /* @__PURE__ */ Zi("(?:--)?(\\d{2})-?(\\d{2})" + Vu), Wu = /* @__PURE__ */ Zi(zu + Vu), Gu = /* @__PURE__ */ Zi("T?" + Lu + "(?:" + Ru + ")?" + Vu), Ku = /* @__PURE__ */ Zi(Ru), qu = /* @__PURE__ */ new RegExp(Bu, "g"), Ju = /* @__PURE__ */ Zi(`${Pu}?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?:(\\d+)${Fu}H)?(?:(\\d+)${Fu}M)?(?:(\\d+)${Fu}S)?)?`), Yu = /* @__PURE__ */ Ae(((e) => new Rl("en", {
	calendar: sl,
	timeZone: e,
	era: "short",
	year: "numeric",
	month: "numeric",
	day: "numeric",
	hour: "numeric",
	minute: "numeric",
	second: "numeric",
	hour12: 0
}))), Xu = /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/, Zu = /[^\w\/:+-]+/, Qu = /^M(\d{2})(L?)$/, $u = /* @__PURE__ */ Ae(to), ed = /* @__PURE__ */ Ae(((e) => new Rl("en", {
	calendar: e,
	timeZone: Tu,
	era: "short",
	year: "numeric",
	month: "short",
	day: "numeric",
	hour12: 0
}))), td = {
	P: $r,
	h: Fa,
	ee: Go,
	ne: Ko,
	te: qo,
	fields: Jo,
	oe: Yo,
	inLeapYear: Ha,
	monthsInYear: Ua,
	daysInMonth: Wa,
	daysInYear: Ga,
	dayOfYear: Ka,
	era(e) {
		return this.$(e)[0];
	},
	eraYear(e) {
		return this.$(e)[1];
	},
	monthCode(e) {
		let [t, n] = this.u(e), [r, i] = this.m(t, n);
		return Ja(r, i);
	},
	dayOfWeek: on,
	daysInWeek: en
}, nd = {
	u: Xt,
	$: sn,
	m: Zt
}, rd = /* @__PURE__ */ Object.assign({}, td, /* @__PURE__ */ Object.assign({}, {
	dayOfYear: Ka,
	u: Xt,
	M: Wt
}, {
	weekOfYear: Ba,
	yearOfWeek: Va,
	I(e) {
		function t(e) {
			return (7 - e < r ? 7 : 0) - e;
		}
		function n(e) {
			let n = rn(f + e), r = e || 1;
			return u = (n + (t(Xe(c + n * r, 7)) - l) * r) / 7;
		}
		let r = this.id ? 1 : 4, i = on(e), a = this.dayOfYear(e), o = Xe(i - 1, 7), s = a - 1, c = Xe(o - s, 7), l = t(c), u, d = Math.floor((s - l) / 7) + 1, f = e.isoYear;
		return d ? d > n(0) && (d = 1, f++) : (d = n(-1), f--), [
			d,
			f,
			u
		];
	}
}), {
	u: Xt,
	$: sn,
	m: Zt,
	R: Qt,
	L: an,
	F: Ue,
	O: tn,
	q: Ia,
	B: nn,
	G: rn,
	U: $t,
	M: Wt,
	p: ti,
	year(e) {
		return e.isoYear;
	},
	month(e) {
		return e.isoMonth;
	},
	day: Yt
}), id = {
	u: so,
	$: _o,
	m: uo
}, ad = /* @__PURE__ */ Object.assign({}, td, /* @__PURE__ */ Object.assign({}, {
	dayOfYear: Ka,
	u: so,
	M: lo
}, { I() {
	return [];
} }, {
	weekOfYear: Ba,
	yearOfWeek: Va
}), {
	u: so,
	$: _o,
	m: uo,
	R: vo,
	L: po,
	F: fo,
	O: go,
	q: La,
	B: ho,
	G: mo,
	U: co,
	M: lo,
	p: ni,
	year(e) {
		return this._(e).year;
	},
	month(e) {
		let { year: t, V: n } = this._(e), { X: r } = this.J(t);
		return r[n] + 1;
	},
	day: oo
}), od = /* @__PURE__ */ Co(nd, id), z = /* @__PURE__ */ Co(rd, ad), sd = /* @__PURE__ */ Object.assign({}, {
	era: mt,
	eraYear: _t,
	year: _t,
	month: yt,
	monthCode(e) {
		let t = mt(e);
		return qa(t), t;
	},
	day: yt
}, /* @__PURE__ */ Ac(Uc, _t), /* @__PURE__ */ Ac(L, vt), { offset(e) {
	let t = mt(e);
	return ki(t), t;
} }), cd = /* @__PURE__ */ F(Re, Uc, wl), ld = /* @__PURE__ */ F(Re, wl, Uc), ud = "numeric", dd = ["timeZoneName"], fd = {
	month: ud,
	day: ud
}, pd = {
	year: ud,
	month: ud
}, md = /* @__PURE__ */ Object.assign({}, pd, { day: ud }), hd = {
	hour: ud,
	minute: ud,
	second: ud
}, gd = /* @__PURE__ */ Object.assign({}, md, hd), _d = /* @__PURE__ */ Object.assign({}, gd, { timeZoneName: "short" }), vd = /* @__PURE__ */ Object.keys(pd), yd = /* @__PURE__ */ Object.keys(fd), bd = /* @__PURE__ */ Object.keys(md), xd = /* @__PURE__ */ Object.keys(hd), Sd = ["dateStyle"], Cd = /* @__PURE__ */ vd.concat(Sd), wd = /* @__PURE__ */ yd.concat(Sd), Td = /* @__PURE__ */ bd.concat(Sd, ["weekday"]), Ed = /* @__PURE__ */ xd.concat([
	"dayPeriod",
	"timeStyle",
	"fractionalSecondDigits"
]), Dd = /* @__PURE__ */ Td.concat(Ed), Od = /* @__PURE__ */ dd.concat(Ed), kd = /* @__PURE__ */ dd.concat(Td), Ad = /* @__PURE__ */ dd.concat(["day", "weekday"], Ed), jd = /* @__PURE__ */ dd.concat(["year", "weekday"], Ed), Md = /* @__PURE__ */ Cs(Dd, gd), Nd = /* @__PURE__ */ Cs(Dd, _d), Pd = /* @__PURE__ */ Cs(Dd, gd, dd), Fd = /* @__PURE__ */ Cs(Td, md, Od), Id = /* @__PURE__ */ Cs(Ed, hd, kd), Ld = /* @__PURE__ */ Cs(Cd, pd, Ad), Rd = /* @__PURE__ */ Cs(wd, fd, jd), zd = {}, Bd = /* @__PURE__ */ Es(), Vd = [Md, zn], Hd = [
	Nd,
	zn,
	0,
	(e, t) => {
		let n = e.timeZone;
		if (t && t.timeZone !== n) throw RangeError(dc);
		return n;
	}
], Ud = [Pd, Bt], Wd = [Fd, Bt], Gd = [Id, (e) => It(e) / Lc], Kd = [
	Ld,
	Bt,
	Bd
], qd = [
	Rd,
	Bt,
	Bd
];
//#endregion
//#region ../../node_modules/temporal-polyfill/chunks/classApi.js
function Jd(e, t, n, r, i, a) {
	function o(...e) {
		if (!(this instanceof o)) throw TypeError(Zs);
		{
			let n = t(...e);
			Sf(this, n), Xd(this, n, a);
		}
	}
	function s(e, t) {
		return Object.defineProperties((function(...t) {
			return e.call(this, c(this), ...t);
		}), je(t));
	}
	function c(t) {
		let n = xf(t);
		if (!n || n.branding !== e) throw TypeError(Zs);
		return n;
	}
	return Object.defineProperties(o.prototype, {
		...Ne(Ie(s, n)),
		...Me(Ie(s, r)),
		...Pe("Temporal." + e)
	}), Object.defineProperties(o, {
		...Me(i),
		...je(e)
	}), [
		o,
		(e) => {
			let t = Object.create(o.prototype);
			return Sf(t, e), Xd(t, e, a), t;
		},
		c
	];
}
function Yd(e) {
	if (xf(e) || e.calendar !== void 0 || e.timeZone !== void 0) throw TypeError(Js);
	return e;
}
function Xd(e, t, n) {
	Xd.name === "dbg" && Object.defineProperty(e, "o", {
		value: n(t),
		writable: 0,
		enumerable: 0,
		configurable: 0
	});
}
function Zd(e) {
	return Qd(e) || "iso8601";
}
function Qd(e) {
	let { calendar: t } = e;
	if (t !== void 0) return $d(t);
}
function $d(e) {
	if (ke(e)) {
		let { calendar: t } = xf(e) || {};
		if (!t) throw TypeError(cc(e));
		return t;
	}
	return ((e) => xo(Li(pl(e))))(e);
}
function ef(e) {
	let t = {};
	for (let n in e) t[n] = (e) => {
		let { calendar: t } = e;
		return z(t)[n](e);
	};
	return t;
}
function tf() {
	throw TypeError(Xs);
}
function nf(e) {
	if (ke(e)) {
		let { timeZone: t } = xf(e) || {};
		if (!t) throw TypeError(uc(e));
		return t;
	}
	return ((e) => ta(Ri(pl(e))))(e);
}
function rf(e) {
	if (ke(e)) {
		let t = xf(e);
		return t && t.branding === "Duration" ? t : jo(e);
	}
	return Ii(e);
}
function af(e) {
	if (e !== void 0) {
		if (ke(e)) {
			let t = xf(e) || {};
			switch (t.branding) {
				case xu:
				case vu: return t;
				case yu: return Pn(t);
			}
			let n = Zd(e);
			return {
				...wo(nf, R, z(n), e),
				calendar: n
			};
		}
		return Di(e);
	}
}
function of(e, t) {
	if (ke(e)) {
		let n = xf(e) || {};
		switch (n.branding) {
			case bu: return I(t), n;
			case yu: return I(t), Ln(n);
			case xu: return I(t), ps(R, n);
		}
		return Ao(e, t);
	}
	let n = Fi(e);
	return I(t), n;
}
function sf(e) {
	return e === void 0 ? void 0 : of(e);
}
function cf(e, t) {
	if (ke(e)) {
		let n = xf(e) || {};
		switch (n.branding) {
			case yu: return I(t), n;
			case vu: return I(t), Nn({
				...n,
				...Al
			});
			case xu: return I(t), ds(R, n);
		}
		return Eo(z(Zd(e)), e, t);
	}
	let n = Ai(e);
	return I(t), n;
}
function lf(e, t) {
	if (ke(e)) {
		let n = xf(e);
		if (n && n.branding === "PlainMonthDay") return I(t), n;
		let r = Qd(e);
		return ko(z(r || "iso8601"), !r, e, t);
	}
	let n = Pi(z, e);
	return I(t), n;
}
function uf(e, t) {
	if (ke(e)) {
		let n = xf(e);
		return n && n.branding === "PlainYearMonth" ? (I(t), n) : Oo(z(Zd(e)), e, t);
	}
	let n = Mi(z, e);
	return I(t), n;
}
function df(e, t) {
	if (ke(e)) {
		let n = xf(e) || {};
		switch (n.branding) {
			case vu: return I(t), n;
			case yu: return I(t), Pn(n);
			case xu: return I(t), fs(R, n);
		}
		return Do(z(Zd(e)), e, t);
	}
	let n = ji(e);
	return I(t), n;
}
function ff(e, t) {
	if (ke(e)) {
		let n = xf(e);
		if (n && n.branding === "ZonedDateTime") return mn(t), n;
		let r = Zd(e);
		return To(nf, R, z(r), r, e, t);
	}
	return Oi(e, t);
}
function pf(e) {
	return Ie(((e) => (t) => e(mf(t))), e);
}
function mf(e) {
	return Au(e, R);
}
function hf(e) {
	if (ke(e)) {
		let t = xf(e);
		if (t) switch (t.branding) {
			case Su: return t;
			case xu: return jn(t.epochNanoseconds);
		}
	}
	return Ei(e);
}
function gf() {
	function e(e, n) {
		return new t(e, n);
	}
	function t(e, t = Object.create(null)) {
		up.set(this, ((e, t) => {
			let n = new Rl(e, t), r = n.resolvedOptions(), i = r.locale, a = ze(Object.keys(t), r), o = Ae(yf), s = (e, ...t) => {
				if (e) {
					if (t.length !== 2) throw TypeError(Dc);
					for (let e of t) if (e === void 0) throw TypeError(Dc);
				}
				e || t[0] !== void 0 || (t = []);
				let r = t.map(((e) => xf(e) || Number(e))), s, c = 0;
				for (let e of r) {
					let t = typeof e == "object" ? e.branding : void 0;
					if (c++ && t !== s) throw TypeError(Dc);
					s = t;
				}
				return s ? o(s)(i, a, ...r) : [n, ...r];
			};
			return s.i = n, s;
		})(e, t));
	}
	let n = Rl.prototype, r = Object.getOwnPropertyDescriptors(n), i = Object.getOwnPropertyDescriptors(Rl);
	for (let t in r) {
		let n = r[t], i = t.startsWith("format") && _f(t);
		typeof n.value == "function" ? n.value = t === "constructor" ? e : i || vf(t) : i && (n.get = function() {
			if (!up.has(this)) throw TypeError("Invalid calling context");
			return (...e) => i.apply(this, e);
		}, Object.defineProperties(n.get, je(`get ${t}`)));
	}
	return i.prototype.value = t.prototype = Object.create({}, r), Object.defineProperties(e, i), e;
}
function _f(e) {
	return Object.defineProperties((function(...t) {
		let [n, ...r] = up.get(this)(e.includes("Range"), ...t);
		return n[e](...r);
	}), je(e));
}
function vf(e) {
	return Object.defineProperties((function(...t) {
		return up.get(this).i[e](...t);
	}), je(e));
}
function yf(e) {
	let t = Ff[e];
	if (!t) throw TypeError(Ec(e));
	return ws(t, Ae(Ts), 1);
}
var bf = /* @__PURE__ */ new WeakMap(), xf = /* @__PURE__ */ bf.get.bind(bf), Sf = /* @__PURE__ */ bf.set.bind(bf), Cf = {
	era: rt,
	eraYear: at,
	year: st,
	month: ot,
	daysInMonth: ot,
	daysInYear: ot,
	inLeapYear: ml,
	monthsInYear: ot
}, wf = { monthCode: pl }, Tf = { day: ot }, Ef = /* @__PURE__ */ ef(/* @__PURE__ */ Object.assign({}, Cf, wf, Tf, {
	dayOfWeek: ot,
	dayOfYear: ot,
	weekOfYear: it,
	yearOfWeek: at,
	daysInWeek: ot
})), Df = /* @__PURE__ */ ef({
	...Cf,
	...wf
}), Of = /* @__PURE__ */ ef({
	...wf,
	...Tf
}), kf = { calendarId: (e) => e.calendar }, Af = /* @__PURE__ */ Le(((e) => (t) => t[e]), L.concat("sign")), jf = /* @__PURE__ */ Le(((e, t) => (e) => e[wl[t]]), Uc), Mf = {
	epochMilliseconds: zn,
	epochNanoseconds: Bn
}, [Nf, B, Pf] = Jd(Cu, cs, {
	...Af,
	blank: hi
}, {
	with: (e, t) => B(Vo(e, t)),
	negated: (e) => B(pi(e)),
	abs: (e) => B(fi(e)),
	add: (e, t, n) => B(ui(af, z, R, 0, e, rf(t), n)),
	subtract: (e, t, n) => B(ui(af, z, R, 1, e, rf(t), n)),
	round: (e, t) => B(di(af, z, R, e, t)),
	total: (e, t) => Hn(af, z, R, e, t),
	toLocaleString(e, t, n) {
		return Intl.DurationFormat ? new Intl.DurationFormat(t, n).format(this) : wr(e);
	},
	toString: wr,
	toJSON: (e) => wr(e),
	valueOf: tf
}, {
	from: (e) => B(rf(e)),
	compare: (e, t, n) => oa(af, z, R, rf(e), rf(t), n)
}, wr), Ff = {
	Instant: Vd,
	PlainDateTime: Ud,
	PlainDate: Wd,
	PlainTime: Gd,
	PlainYearMonth: Kd,
	PlainMonthDay: qd
}, If = /* @__PURE__ */ ws(Vd), Lf = /* @__PURE__ */ ws(Hd), Rf = /* @__PURE__ */ ws(Ud), zf = /* @__PURE__ */ ws(Wd), Bf = /* @__PURE__ */ ws(Gd), Vf = /* @__PURE__ */ ws(Kd), Hf = /* @__PURE__ */ ws(qd), [Uf, Wf] = Jd(bu, ss, jf, {
	with(e, t, n) {
		return Wf(Bo(this, Yd(t), n));
	},
	add: (e, t) => Wf(qr(0, e, rf(t))),
	subtract: (e, t) => Wf(qr(1, e, rf(t))),
	until: (e, t, n) => B(wa(0, e, of(t), n)),
	since: (e, t, n) => B(wa(1, e, of(t), n)),
	round: (e, t) => Wf(Xn(e, t)),
	equals: (e, t) => ga(e, of(t)),
	toLocaleString(e, t, n) {
		let [r, i] = Bf(t, n, e);
		return r.format(i);
	},
	toString: Cr,
	toJSON: (e) => Cr(e),
	valueOf: tf
}, {
	from: (e, t) => Wf(of(e, t)),
	compare: (e, t) => la(of(e), of(t))
}, Cr), [Gf, Kf] = Jd(yu, F(rs, bo), {
	...kf,
	...Ef,
	...jf
}, {
	with: (e, t, n) => Kf(Io(z, e, Yd(t), n)),
	withCalendar: (e, t) => Kf(As(e, $d(t))),
	withPlainTime: (e, t) => Kf(ks(e, sf(t))),
	add: (e, t, n) => Kf(Wr(z, 0, e, rf(t), n)),
	subtract: (e, t, n) => Kf(Wr(z, 1, e, rf(t), n)),
	until: (e, t, n) => B(ba(z, 0, e, cf(t), n)),
	since: (e, t, n) => B(ba(z, 1, e, cf(t), n)),
	round: (e, t) => Kf(Yn(e, t)),
	equals: (e, t) => fa(e, cf(t)),
	toZonedDateTime: (e, t, n) => rp(ms(R, e, nf(t), n)),
	toPlainDate: (e) => ep(Pn(e)),
	toPlainTime: (e) => Wf(Ln(e)),
	toLocaleString(e, t, n) {
		let [r, i] = Rf(t, n, e);
		return r.format(i);
	},
	toString: yr,
	toJSON: (e) => yr(e),
	valueOf: tf
}, {
	from: (e, t) => Kf(cf(e, t)),
	compare: (e, t) => sa(cf(e), cf(t))
}, yr), [qf, Jf, Yf] = Jd(_u, F(os, bo), {
	...kf,
	...Of
}, {
	with: (e, t, n) => Jf(zo(z, e, Yd(t), n)),
	equals: (e, t) => ha(e, lf(t)),
	toPlainDate(e, t) {
		return ep(bs(z, e, this, t));
	},
	toLocaleString(e, t, n) {
		let [r, i] = Hf(t, n, e);
		return r.format(i);
	},
	toString: Sr,
	toJSON: (e) => Sr(e),
	valueOf: tf
}, { from: (e, t) => Jf(lf(e, t)) }, Sr), [Xf, Zf, Qf] = Jd(gu, F(as, bo), {
	...kf,
	...Df
}, {
	with: (e, t, n) => Zf(Ro(z, e, Yd(t), n)),
	add: (e, t, n) => Zf(Kr(z, 0, e, rf(t), n)),
	subtract: (e, t, n) => Zf(Kr(z, 1, e, rf(t), n)),
	until: (e, t, n) => B(Sa(z, 0, e, uf(t), n)),
	since: (e, t, n) => B(Sa(z, 1, e, uf(t), n)),
	equals: (e, t) => ma(e, uf(t)),
	toPlainDate(e, t) {
		return ep(ys(z, e, this, t));
	},
	toLocaleString(e, t, n) {
		let [r, i] = Vf(t, n, e);
		return r.format(i);
	},
	toString: xr,
	toJSON: (e) => xr(e),
	valueOf: tf
}, {
	from: (e, t) => Zf(uf(e, t)),
	compare: (e, t) => ca(uf(e), uf(t))
}, xr), [$f, ep, tp] = Jd(vu, F(is, bo), {
	...kf,
	...Ef
}, {
	with: (e, t, n) => ep(Lo(z, e, Yd(t), n)),
	withCalendar: (e, t) => ep(As(e, $d(t))),
	add: (e, t, n) => ep(Gr(z, 0, e, rf(t), n)),
	subtract: (e, t, n) => ep(Gr(z, 1, e, rf(t), n)),
	until: (e, t, n) => B(xa(z, 0, e, df(t), n)),
	since: (e, t, n) => B(xa(z, 1, e, df(t), n)),
	equals: (e, t) => pa(e, df(t)),
	toZonedDateTime(e, t) {
		return rp(hs(nf, of, R, e, ke(t) ? t : { timeZone: t }));
	},
	toPlainDateTime: (e, t) => Kf(gs(e, sf(t))),
	toPlainYearMonth(e) {
		return Zf(_s(z, e, this));
	},
	toPlainMonthDay(e) {
		return Jf(vs(z, e, this));
	},
	toLocaleString(e, t, n) {
		let [r, i] = zf(t, n, e);
		return r.format(i);
	},
	toString: br,
	toJSON: (e) => br(e),
	valueOf: tf
}, {
	from: (e, t) => ep(df(e, t)),
	compare: (e, t) => ca(df(e), df(t))
}, br), [np, rp] = Jd(xu, F(ns, bo, ea), {
	...Mf,
	...kf,
	...pf(Ef),
	...pf(jf),
	offset: (e) => Mr(mf(e).offsetNanoseconds),
	offsetNanoseconds: (e) => mf(e).offsetNanoseconds,
	timeZoneId: (e) => e.timeZone,
	hoursInDay: (e) => Zn(R, e)
}, {
	with: (e, t, n) => rp(Fo(z, R, e, Yd(t), n)),
	withCalendar: (e, t) => rp(As(e, $d(t))),
	withTimeZone: (e, t) => rp(js(e, nf(t))),
	withPlainTime: (e, t) => rp(Os(R, e, sf(t))),
	add: (e, t, n) => rp(Ur(z, R, 0, e, rf(t), n)),
	subtract: (e, t, n) => rp(Ur(z, R, 1, e, rf(t), n)),
	until: (e, t, n) => B(Rn(ya(z, R, 0, e, ff(t), n))),
	since: (e, t, n) => B(Rn(ya(z, R, 1, e, ff(t), n))),
	round: (e, t) => rp(Jn(R, e, t)),
	startOfDay: (e) => rp(Qn(R, e)),
	equals: (e, t) => da(e, ff(t)),
	toInstant: (e) => ap(us(e)),
	toPlainDateTime: (e) => Kf(ds(R, e)),
	toPlainDate: (e) => ep(fs(R, e)),
	toPlainTime: (e) => Wf(ps(R, e)),
	toLocaleString(e, t, n = {}) {
		let [r, i] = Lf(t, n, e);
		return r.format(i);
	},
	toString: (e, t) => vr(R, e, t),
	toJSON: (e) => vr(R, e),
	valueOf: tf,
	getTimeZoneTransition(e, t) {
		let { timeZone: n, epochNanoseconds: r } = e, i = yn(t), a = R(n).l(r, i);
		return a ? rp({
			...e,
			epochNanoseconds: a
		}) : null;
	}
}, {
	from: (e, t) => rp(ff(e, t)),
	compare: (e, t) => aa(ff(e), ff(t))
}, ((e) => vr(R, e))), [ip, ap, op] = Jd(Su, ts, Mf, {
	add: (e, t) => ap(Hr(0, e, rf(t))),
	subtract: (e, t) => ap(Hr(1, e, rf(t))),
	until: (e, t, n) => B(va(0, e, hf(t), n)),
	since: (e, t, n) => B(va(1, e, hf(t), n)),
	round: (e, t) => ap(qn(e, t)),
	equals: (e, t) => ua(e, hf(t)),
	toZonedDateTimeISO: (e, t) => rp(ls(e, nf(t))),
	toLocaleString(e, t, n) {
		let [r, i] = If(t, n, e);
		return r.format(i);
	},
	toString: (e, t) => _r(nf, R, e, t),
	toJSON: (e) => _r(nf, R, e),
	valueOf: tf
}, {
	from: (e) => ap(hf(e)),
	fromEpochMilliseconds: (e) => ap(xs(e)),
	fromEpochNanoseconds: (e) => ap(Ss(e)),
	compare: (e, t) => ia(hf(e), hf(t))
}, ((e) => _r(nf, R, e))), sp = /* @__PURE__ */ Object.defineProperties({}, {
	...Pe("Temporal.Now"),
	...Me({
		timeZoneId: () => Ps(),
		instant: () => ap(jn(Ns())),
		zonedDateTimeISO: (e = Ps()) => rp(Mn(Ns(), nf(e), sl)),
		plainDateTimeISO: (e = Ps()) => Kf(Nn(Ms(R(nf(e))), sl)),
		plainDateISO: (e = Ps()) => ep(Pn(Ms(R(nf(e))), sl)),
		plainTimeISO: (e = Ps()) => Wf(Ln(Ms(R(nf(e)))))
	})
}), cp = /* @__PURE__ */ Object.defineProperties({}, {
	...Pe("Temporal"),
	...Me({
		PlainYearMonth: Xf,
		PlainMonthDay: qf,
		PlainDate: $f,
		PlainTime: Uf,
		PlainDateTime: Gf,
		ZonedDateTime: np,
		Instant: ip,
		Duration: Nf,
		Now: sp
	})
}), lp = /* @__PURE__ */ gf(), up = /* @__PURE__ */ new WeakMap();
Me({ DateTimeFormat: lp });
//#endregion
//#region src/core/utils/DateUtils.ts
var V = /* @__PURE__ */ Ee((/* @__PURE__ */ P(((e, t) => {
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
function dp(e) {
	let t = e < 0;
	e = Math.abs(e);
	let n = Math.floor(e / 3600).toFixed(0).padStart(2, "0"), r = Math.floor(e % 3600 / 60).toFixed(0).padStart(2, "0"), i = Math.floor(e % 3600 % 60).toFixed(0).padStart(2, "0"), a = "";
	return n !== "00" && (a += `${n}:`), a += `${r}:${i}`, t && (a = "-" + a), a;
}
function fp(e) {
	return `${`${e.getFullYear()}`.padStart(4, "0")}-${`${e.getMonth() + 1}`.padStart(2, "0")}-${`${e.getDate()}`.padStart(2, "0")}`;
}
//#endregion
//#region src/audio/Clock/Clock.tsx
function pp({ seconds: e, className: n, ...r }) {
	let i = p(() => Math.floor(e), [e]), a = p(() => mp(i), [i]);
	return /* @__PURE__ */ t.createElement("time", {
		dateTime: a,
		className: (0, V.default)("mx_Clock", n),
		...r
	}, dp(e));
}
function mp(e) {
	if (!isNaN(e)) return new cp.Duration(0, 0, 0, 0, 0, 0, Math.round(e)).round({
		smallestUnit: "seconds",
		largestUnit: "hours"
	}).toString();
}
//#endregion
//#region ../../node_modules/react/cjs/react-jsx-runtime.production.js
var hp = /* @__PURE__ */ P(((e) => {
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
})), gp = /* @__PURE__ */ P(((t, n) => {
	n.exports = { ...e };
})), _p = /* @__PURE__ */ P(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === O ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case _: return "Fragment";
				case y: return "Profiler";
				case v: return "StrictMode";
				case C: return "Suspense";
				case w: return "SuspenseList";
				case D: return "Activity";
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
			var e = k.A;
			return e === null ? null : e.getOwner();
		}
		function o() {
			return Error("react-stack-top-frame");
		}
		function s(e) {
			if (A.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function c(e, t) {
			function n() {
				te || (te = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function l() {
			var e = t(this.type);
			return ne[e] || (ne[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
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
			if (p !== void 0) if (o) if (ee(p)) {
				for (o = 0; o < p.length; o++) f(p[o]);
				Object.freeze && Object.freeze(p);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else f(p);
			if (A.call(n, "key")) {
				p = t(e);
				var m = Object.keys(n).filter(function(e) {
					return e !== "key";
				});
				o = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", N[p + o] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", o, p, m, p), N[p + o] = !0);
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
		var m = gp(), h = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), x = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), D = Symbol.for("react.activity"), O = Symbol.for("react.client.reference"), k = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = Object.prototype.hasOwnProperty, ee = Array.isArray, j = console.createTask ? console.createTask : function() {
			return null;
		};
		m = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var te, ne = {}, M = m.react_stack_bottom_frame.bind(m, o)(), re = j(i(o)), N = {};
		e.Fragment = _, e.jsx = function(e, t, n) {
			var r = 1e4 > k.recentlyCreatedOwnerStacks++;
			return d(e, t, n, !1, r ? Error("react-stack-top-frame") : M, r ? j(i(e)) : re);
		}, e.jsxs = function(e, t, n) {
			var r = 1e4 > k.recentlyCreatedOwnerStacks++;
			return d(e, t, n, !0, r ? Error("react-stack-top-frame") : M, r ? j(i(e)) : re);
		};
	})();
})), H = (/* @__PURE__ */ P(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = hp() : t.exports = _p();
})))();
function vp(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "m8.98 4.677 9.921 5.58c1.36.764 1.36 2.722 0 3.486l-9.92 5.58C7.647 20.073 6 19.11 6 17.58V6.42c0-1.53 1.647-2.493 2.98-1.743" })
	});
}
vp.displayName = "PlaySolidIcon";
var yp = a(vp);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/pause-solid.js
function bp(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M8 4a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V6a2 2 0 0 0-2-2m8 0a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V6a2 2 0 0 0-2-2" })
	});
}
bp.displayName = "PauseSolidIcon";
var xp = a(bp), Sp = { button: "_button_yfjla_8" }, Cp = i(null);
Cp.displayName = "I18nContext";
function U() {
	let e = l(Cp);
	if (!e) throw Error("useI18n must be used within an I18nContext.Provider");
	return e;
}
//#endregion
//#region src/audio/PlayPauseButton/PlayPauseButton.tsx
function wp({ disabled: e = !1, playing: n = !1, togglePlay: r, ...i }) {
	let { translate: a } = U(), o = a(n ? "action|pause" : "action|play");
	return /* @__PURE__ */ t.createElement(E, {
		size: "32px",
		"aria-label": o,
		tooltip: o,
		onClick: r,
		className: Sp.button,
		disabled: e,
		...i
	}, n ? /* @__PURE__ */ t.createElement(xp, null) : /* @__PURE__ */ t.createElement(yp, null));
}
//#endregion
//#region node_modules/lodash/_freeGlobal.js
var Tp = typeof global == "object" && global && global.Object === Object && global, Ep = typeof self == "object" && self && self.Object === Object && self, Dp = Tp || Ep || Function("return this")(), Op = Dp.Symbol, kp = Object.prototype, Ap = kp.hasOwnProperty, jp = kp.toString, Mp = Op ? Op.toStringTag : void 0;
function Np(e) {
	var t = Ap.call(e, Mp), n = e[Mp];
	try {
		e[Mp] = void 0;
		var r = !0;
	} catch {}
	var i = jp.call(e);
	return r && (t ? e[Mp] = n : delete e[Mp]), i;
}
//#endregion
//#region node_modules/lodash/_objectToString.js
var Pp = Object.prototype.toString;
function Fp(e) {
	return Pp.call(e);
}
//#endregion
//#region node_modules/lodash/_baseGetTag.js
var Ip = "[object Null]", Lp = "[object Undefined]", Rp = Op ? Op.toStringTag : void 0;
function zp(e) {
	return e == null ? e === void 0 ? Lp : Ip : Rp && Rp in Object(e) ? Np(e) : Fp(e);
}
//#endregion
//#region node_modules/lodash/isObjectLike.js
function Bp(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region node_modules/lodash/isSymbol.js
var Vp = "[object Symbol]";
function Hp(e) {
	return typeof e == "symbol" || Bp(e) && zp(e) == Vp;
}
//#endregion
//#region node_modules/lodash/_arrayMap.js
function Up(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
	return i;
}
//#endregion
//#region node_modules/lodash/isArray.js
var Wp = Array.isArray, Gp = Infinity, Kp = Op ? Op.prototype : void 0, qp = Kp ? Kp.toString : void 0;
function Jp(e) {
	if (typeof e == "string") return e;
	if (Wp(e)) return Up(e, Jp) + "";
	if (Hp(e)) return qp ? qp.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -Gp ? "-0" : t;
}
//#endregion
//#region node_modules/lodash/_trimmedEndIndex.js
var Yp = /\s/;
function Xp(e) {
	for (var t = e.length; t-- && Yp.test(e.charAt(t)););
	return t;
}
//#endregion
//#region node_modules/lodash/_baseTrim.js
var Zp = /^\s+/;
function Qp(e) {
	return e && e.slice(0, Xp(e) + 1).replace(Zp, "");
}
//#endregion
//#region node_modules/lodash/isObject.js
function $p(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
//#endregion
//#region node_modules/lodash/toNumber.js
var em = NaN, tm = /^[-+]0x[0-9a-f]+$/i, nm = /^0b[01]+$/i, rm = /^0o[0-7]+$/i, im = parseInt;
function am(e) {
	if (typeof e == "number") return e;
	if (Hp(e)) return em;
	if ($p(e)) {
		var t = typeof e.valueOf == "function" ? e.valueOf() : e;
		e = $p(t) ? t + "" : t;
	}
	if (typeof e != "string") return e === 0 ? e : +e;
	e = Qp(e);
	var n = nm.test(e);
	return n || rm.test(e) ? im(e.slice(2), n ? 2 : 8) : tm.test(e) ? em : +e;
}
//#endregion
//#region node_modules/lodash/identity.js
function om(e) {
	return e;
}
//#endregion
//#region node_modules/lodash/isFunction.js
var sm = "[object AsyncFunction]", cm = "[object Function]", lm = "[object GeneratorFunction]", um = "[object Proxy]";
function dm(e) {
	if (!$p(e)) return !1;
	var t = zp(e);
	return t == cm || t == lm || t == sm || t == um;
}
//#endregion
//#region node_modules/lodash/_coreJsData.js
var fm = Dp["__core-js_shared__"], pm = function() {
	var e = /[^.]+$/.exec(fm && fm.keys && fm.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function mm(e) {
	return !!pm && pm in e;
}
//#endregion
//#region node_modules/lodash/_toSource.js
var hm = Function.prototype.toString;
function gm(e) {
	if (e != null) {
		try {
			return hm.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
//#endregion
//#region node_modules/lodash/_baseIsNative.js
var _m = /[\\^$.*+?()[\]{}|]/g, vm = /^\[object .+?Constructor\]$/, ym = Function.prototype, bm = Object.prototype, xm = ym.toString, Sm = bm.hasOwnProperty, Cm = RegExp("^" + xm.call(Sm).replace(_m, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function wm(e) {
	return !$p(e) || mm(e) ? !1 : (dm(e) ? Cm : vm).test(gm(e));
}
//#endregion
//#region node_modules/lodash/_getValue.js
function Tm(e, t) {
	return e?.[t];
}
//#endregion
//#region node_modules/lodash/_getNative.js
function Em(e, t) {
	var n = Tm(e, t);
	return wm(n) ? n : void 0;
}
//#endregion
//#region node_modules/lodash/_WeakMap.js
var Dm = Em(Dp, "WeakMap"), Om = Object.create, km = function() {
	function e() {}
	return function(t) {
		if (!$p(t)) return {};
		if (Om) return Om(t);
		e.prototype = t;
		var n = new e();
		return e.prototype = void 0, n;
	};
}();
//#endregion
//#region node_modules/lodash/_apply.js
function Am(e, t, n) {
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
function jm(e, t) {
	var n = -1, r = e.length;
	for (t ||= Array(r); ++n < r;) t[n] = e[n];
	return t;
}
//#endregion
//#region node_modules/lodash/_shortOut.js
var Mm = 800, Nm = 16, Pm = Date.now;
function Fm(e) {
	var t = 0, n = 0;
	return function() {
		var r = Pm(), i = Nm - (r - n);
		if (n = r, i > 0) {
			if (++t >= Mm) return arguments[0];
		} else t = 0;
		return e.apply(void 0, arguments);
	};
}
//#endregion
//#region node_modules/lodash/constant.js
function Im(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/lodash/_defineProperty.js
var Lm = function() {
	try {
		var e = Em(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}(), Rm = Fm(Lm ? function(e, t) {
	return Lm(e, "toString", {
		configurable: !0,
		enumerable: !1,
		value: Im(t),
		writable: !0
	});
} : om);
//#endregion
//#region node_modules/lodash/_arrayEach.js
function zm(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
	return e;
}
//#endregion
//#region node_modules/lodash/_isIndex.js
var Bm = 9007199254740991, Vm = /^(?:0|[1-9]\d*)$/;
function Hm(e, t) {
	var n = typeof e;
	return t ??= Bm, !!t && (n == "number" || n != "symbol" && Vm.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
//#endregion
//#region node_modules/lodash/_baseAssignValue.js
function Um(e, t, n) {
	t == "__proto__" && Lm ? Lm(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
//#endregion
//#region node_modules/lodash/eq.js
function Wm(e, t) {
	return e === t || e !== e && t !== t;
}
//#endregion
//#region node_modules/lodash/_assignValue.js
var Gm = Object.prototype.hasOwnProperty;
function Km(e, t, n) {
	var r = e[t];
	(!(Gm.call(e, t) && Wm(r, n)) || n === void 0 && !(t in e)) && Um(e, t, n);
}
//#endregion
//#region node_modules/lodash/_copyObject.js
function qm(e, t, n, r) {
	var i = !n;
	n ||= {};
	for (var a = -1, o = t.length; ++a < o;) {
		var s = t[a], c = r ? r(n[s], e[s], s, n, e) : void 0;
		c === void 0 && (c = e[s]), i ? Um(n, s, c) : Km(n, s, c);
	}
	return n;
}
//#endregion
//#region node_modules/lodash/_overRest.js
var Jm = Math.max;
function Ym(e, t, n) {
	return t = Jm(t === void 0 ? e.length - 1 : t, 0), function() {
		for (var r = arguments, i = -1, a = Jm(r.length - t, 0), o = Array(a); ++i < a;) o[i] = r[t + i];
		i = -1;
		for (var s = Array(t + 1); ++i < t;) s[i] = r[i];
		return s[t] = n(o), Am(e, this, s);
	};
}
//#endregion
//#region node_modules/lodash/isLength.js
var Xm = 9007199254740991;
function Zm(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Xm;
}
//#endregion
//#region node_modules/lodash/isArrayLike.js
function Qm(e) {
	return e != null && Zm(e.length) && !dm(e);
}
//#endregion
//#region node_modules/lodash/_isPrototype.js
var $m = Object.prototype;
function eh(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || $m);
}
//#endregion
//#region node_modules/lodash/_baseTimes.js
function th(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
//#endregion
//#region node_modules/lodash/_baseIsArguments.js
var nh = "[object Arguments]";
function rh(e) {
	return Bp(e) && zp(e) == nh;
}
//#endregion
//#region node_modules/lodash/isArguments.js
var ih = Object.prototype, ah = ih.hasOwnProperty, oh = ih.propertyIsEnumerable, sh = rh(function() {
	return arguments;
}()) ? rh : function(e) {
	return Bp(e) && ah.call(e, "callee") && !oh.call(e, "callee");
};
//#endregion
//#region node_modules/lodash/stubFalse.js
function ch() {
	return !1;
}
//#endregion
//#region node_modules/lodash/isBuffer.js
var lh = typeof exports == "object" && exports && !exports.nodeType && exports, uh = lh && typeof module == "object" && module && !module.nodeType && module, dh = uh && uh.exports === lh ? Dp.Buffer : void 0, fh = (dh ? dh.isBuffer : void 0) || ch, ph = "[object Arguments]", mh = "[object Array]", hh = "[object Boolean]", gh = "[object Date]", _h = "[object Error]", vh = "[object Function]", yh = "[object Map]", bh = "[object Number]", xh = "[object Object]", Sh = "[object RegExp]", Ch = "[object Set]", wh = "[object String]", Th = "[object WeakMap]", Eh = "[object ArrayBuffer]", Dh = "[object DataView]", Oh = "[object Float32Array]", kh = "[object Float64Array]", Ah = "[object Int8Array]", jh = "[object Int16Array]", Mh = "[object Int32Array]", Nh = "[object Uint8Array]", Ph = "[object Uint8ClampedArray]", Fh = "[object Uint16Array]", Ih = "[object Uint32Array]", W = {};
W[Oh] = W[kh] = W[Ah] = W[jh] = W[Mh] = W[Nh] = W[Ph] = W[Fh] = W[Ih] = !0, W[ph] = W[mh] = W[Eh] = W[hh] = W[Dh] = W[gh] = W[_h] = W[vh] = W[yh] = W[bh] = W[xh] = W[Sh] = W[Ch] = W[wh] = W[Th] = !1;
function Lh(e) {
	return Bp(e) && Zm(e.length) && !!W[zp(e)];
}
//#endregion
//#region node_modules/lodash/_baseUnary.js
function Rh(e) {
	return function(t) {
		return e(t);
	};
}
//#endregion
//#region node_modules/lodash/_nodeUtil.js
var zh = typeof exports == "object" && exports && !exports.nodeType && exports, Bh = zh && typeof module == "object" && module && !module.nodeType && module, Vh = Bh && Bh.exports === zh && Tp.process, Hh = function() {
	try {
		return Bh && Bh.require && Bh.require("util").types || Vh && Vh.binding && Vh.binding("util");
	} catch {}
}(), Uh = Hh && Hh.isTypedArray, Wh = Uh ? Rh(Uh) : Lh, Gh = Object.prototype.hasOwnProperty;
function Kh(e, t) {
	var n = Wp(e), r = !n && sh(e), i = !n && !r && fh(e), a = !n && !r && !i && Wh(e), o = n || r || i || a, s = o ? th(e.length, String) : [], c = s.length;
	for (var l in e) (t || Gh.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || Hm(l, c))) && s.push(l);
	return s;
}
//#endregion
//#region node_modules/lodash/_overArg.js
function qh(e, t) {
	return function(n) {
		return e(t(n));
	};
}
//#endregion
//#region node_modules/lodash/_nativeKeys.js
var Jh = qh(Object.keys, Object), Yh = Object.prototype.hasOwnProperty;
function Xh(e) {
	if (!eh(e)) return Jh(e);
	var t = [];
	for (var n in Object(e)) Yh.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
//#endregion
//#region node_modules/lodash/keys.js
function Zh(e) {
	return Qm(e) ? Kh(e) : Xh(e);
}
//#endregion
//#region node_modules/lodash/_nativeKeysIn.js
function Qh(e) {
	var t = [];
	if (e != null) for (var n in Object(e)) t.push(n);
	return t;
}
//#endregion
//#region node_modules/lodash/_baseKeysIn.js
var $h = Object.prototype.hasOwnProperty;
function eg(e) {
	if (!$p(e)) return Qh(e);
	var t = eh(e), n = [];
	for (var r in e) r == "constructor" && (t || !$h.call(e, r)) || n.push(r);
	return n;
}
//#endregion
//#region node_modules/lodash/keysIn.js
function tg(e) {
	return Qm(e) ? Kh(e, !0) : eg(e);
}
//#endregion
//#region node_modules/lodash/_isKey.js
var ng = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, rg = /^\w*$/;
function ig(e, t) {
	if (Wp(e)) return !1;
	var n = typeof e;
	return n == "number" || n == "symbol" || n == "boolean" || e == null || Hp(e) ? !0 : rg.test(e) || !ng.test(e) || t != null && e in Object(t);
}
//#endregion
//#region node_modules/lodash/_nativeCreate.js
var ag = Em(Object, "create");
//#endregion
//#region node_modules/lodash/_hashClear.js
function og() {
	this.__data__ = ag ? ag(null) : {}, this.size = 0;
}
//#endregion
//#region node_modules/lodash/_hashDelete.js
function sg(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= t ? 1 : 0, t;
}
//#endregion
//#region node_modules/lodash/_hashGet.js
var cg = "__lodash_hash_undefined__", lg = Object.prototype.hasOwnProperty;
function ug(e) {
	var t = this.__data__;
	if (ag) {
		var n = t[e];
		return n === cg ? void 0 : n;
	}
	return lg.call(t, e) ? t[e] : void 0;
}
//#endregion
//#region node_modules/lodash/_hashHas.js
var dg = Object.prototype.hasOwnProperty;
function fg(e) {
	var t = this.__data__;
	return ag ? t[e] !== void 0 : dg.call(t, e);
}
//#endregion
//#region node_modules/lodash/_hashSet.js
var pg = "__lodash_hash_undefined__";
function mg(e, t) {
	var n = this.__data__;
	return this.size += this.has(e) ? 0 : 1, n[e] = ag && t === void 0 ? pg : t, this;
}
//#endregion
//#region node_modules/lodash/_Hash.js
function hg(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
hg.prototype.clear = og, hg.prototype.delete = sg, hg.prototype.get = ug, hg.prototype.has = fg, hg.prototype.set = mg;
//#endregion
//#region node_modules/lodash/_listCacheClear.js
function gg() {
	this.__data__ = [], this.size = 0;
}
//#endregion
//#region node_modules/lodash/_assocIndexOf.js
function _g(e, t) {
	for (var n = e.length; n--;) if (Wm(e[n][0], t)) return n;
	return -1;
}
//#endregion
//#region node_modules/lodash/_listCacheDelete.js
var vg = Array.prototype.splice;
function yg(e) {
	var t = this.__data__, n = _g(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : vg.call(t, n, 1), --this.size, !0);
}
//#endregion
//#region node_modules/lodash/_listCacheGet.js
function bg(e) {
	var t = this.__data__, n = _g(t, e);
	return n < 0 ? void 0 : t[n][1];
}
//#endregion
//#region node_modules/lodash/_listCacheHas.js
function xg(e) {
	return _g(this.__data__, e) > -1;
}
//#endregion
//#region node_modules/lodash/_listCacheSet.js
function Sg(e, t) {
	var n = this.__data__, r = _g(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
//#endregion
//#region node_modules/lodash/_ListCache.js
function Cg(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Cg.prototype.clear = gg, Cg.prototype.delete = yg, Cg.prototype.get = bg, Cg.prototype.has = xg, Cg.prototype.set = Sg;
//#endregion
//#region node_modules/lodash/_Map.js
var wg = Em(Dp, "Map");
//#endregion
//#region node_modules/lodash/_mapCacheClear.js
function Tg() {
	this.size = 0, this.__data__ = {
		hash: new hg(),
		map: new (wg || Cg)(),
		string: new hg()
	};
}
//#endregion
//#region node_modules/lodash/_isKeyable.js
function Eg(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
//#endregion
//#region node_modules/lodash/_getMapData.js
function Dg(e, t) {
	var n = e.__data__;
	return Eg(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
//#endregion
//#region node_modules/lodash/_mapCacheDelete.js
function Og(e) {
	var t = Dg(this, e).delete(e);
	return this.size -= t ? 1 : 0, t;
}
//#endregion
//#region node_modules/lodash/_mapCacheGet.js
function kg(e) {
	return Dg(this, e).get(e);
}
//#endregion
//#region node_modules/lodash/_mapCacheHas.js
function Ag(e) {
	return Dg(this, e).has(e);
}
//#endregion
//#region node_modules/lodash/_mapCacheSet.js
function jg(e, t) {
	var n = Dg(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
//#endregion
//#region node_modules/lodash/_MapCache.js
function Mg(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Mg.prototype.clear = Tg, Mg.prototype.delete = Og, Mg.prototype.get = kg, Mg.prototype.has = Ag, Mg.prototype.set = jg;
//#endregion
//#region node_modules/lodash/memoize.js
var Ng = "Expected a function";
function Pg(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(Ng);
	var n = function() {
		var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	};
	return n.cache = new (Pg.Cache || Mg)(), n;
}
Pg.Cache = Mg;
//#endregion
//#region node_modules/lodash/_memoizeCapped.js
var Fg = 500;
function Ig(e) {
	var t = Pg(e, function(e) {
		return n.size === Fg && n.clear(), e;
	}), n = t.cache;
	return t;
}
//#endregion
//#region node_modules/lodash/_stringToPath.js
var Lg = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Rg = /\\(\\)?/g, zg = Ig(function(e) {
	var t = [];
	return e.charCodeAt(0) === 46 && t.push(""), e.replace(Lg, function(e, n, r, i) {
		t.push(r ? i.replace(Rg, "$1") : n || e);
	}), t;
});
//#endregion
//#region node_modules/lodash/toString.js
function Bg(e) {
	return e == null ? "" : Jp(e);
}
//#endregion
//#region node_modules/lodash/_castPath.js
function Vg(e, t) {
	return Wp(e) ? e : ig(e, t) ? [e] : zg(Bg(e));
}
//#endregion
//#region node_modules/lodash/_toKey.js
var Hg = Infinity;
function Ug(e) {
	if (typeof e == "string" || Hp(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -Hg ? "-0" : t;
}
//#endregion
//#region node_modules/lodash/_baseGet.js
function Wg(e, t) {
	t = Vg(t, e);
	for (var n = 0, r = t.length; e != null && n < r;) e = e[Ug(t[n++])];
	return n && n == r ? e : void 0;
}
//#endregion
//#region node_modules/lodash/_arrayPush.js
function Gg(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
//#endregion
//#region node_modules/lodash/_isFlattenable.js
var Kg = Op ? Op.isConcatSpreadable : void 0;
function qg(e) {
	return Wp(e) || sh(e) || !!(Kg && e && e[Kg]);
}
//#endregion
//#region node_modules/lodash/_baseFlatten.js
function Jg(e, t, n, r, i) {
	var a = -1, o = e.length;
	for (n ||= qg, i ||= []; ++a < o;) {
		var s = e[a];
		t > 0 && n(s) ? t > 1 ? Jg(s, t - 1, n, r, i) : Gg(i, s) : r || (i[i.length] = s);
	}
	return i;
}
//#endregion
//#region node_modules/lodash/flatten.js
function Yg(e) {
	return e != null && e.length ? Jg(e, 1) : [];
}
//#endregion
//#region node_modules/lodash/_flatRest.js
function Xg(e) {
	return Rm(Ym(e, void 0, Yg), e + "");
}
//#endregion
//#region node_modules/lodash/_getPrototype.js
var Zg = qh(Object.getPrototypeOf, Object), Qg = "[object Object]", $g = Function.prototype, e_ = Object.prototype, t_ = $g.toString, n_ = e_.hasOwnProperty, r_ = t_.call(Object);
function i_(e) {
	if (!Bp(e) || zp(e) != Qg) return !1;
	var t = Zg(e);
	if (t === null) return !0;
	var n = n_.call(t, "constructor") && t.constructor;
	return typeof n == "function" && n instanceof n && t_.call(n) == r_;
}
//#endregion
//#region node_modules/lodash/_baseSlice.js
function a_(e, t, n) {
	var r = -1, i = e.length;
	t < 0 && (t = -t > i ? 0 : i + t), n = n > i ? i : n, n < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
	for (var a = Array(i); ++r < i;) a[r] = e[r + t];
	return a;
}
//#endregion
//#region node_modules/lodash/_castSlice.js
function o_(e, t, n) {
	var r = e.length;
	return n = n === void 0 ? r : n, !t && n >= r ? e : a_(e, t, n);
}
//#endregion
//#region node_modules/lodash/_hasUnicode.js
var s_ = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
function c_(e) {
	return s_.test(e);
}
//#endregion
//#region node_modules/lodash/_asciiToArray.js
function l_(e) {
	return e.split("");
}
//#endregion
//#region node_modules/lodash/_unicodeToArray.js
var u_ = "\\ud800-\\udfff", d_ = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", f_ = "\\ufe0e\\ufe0f", p_ = "[" + u_ + "]", m_ = "[" + d_ + "]", h_ = "\\ud83c[\\udffb-\\udfff]", g_ = "(?:" + m_ + "|" + h_ + ")", __ = "[^" + u_ + "]", v_ = "(?:\\ud83c[\\udde6-\\uddff]){2}", y_ = "[\\ud800-\\udbff][\\udc00-\\udfff]", b_ = "\\u200d", x_ = g_ + "?", S_ = "[" + f_ + "]?", C_ = "(?:" + b_ + "(?:" + [
	__,
	v_,
	y_
].join("|") + ")" + S_ + x_ + ")*", w_ = S_ + x_ + C_, T_ = "(?:" + [
	__ + m_ + "?",
	m_,
	v_,
	y_,
	p_
].join("|") + ")", E_ = RegExp(h_ + "(?=" + h_ + ")|" + T_ + w_, "g");
function D_(e) {
	return e.match(E_) || [];
}
//#endregion
//#region node_modules/lodash/_stringToArray.js
function O_(e) {
	return c_(e) ? D_(e) : l_(e);
}
//#endregion
//#region node_modules/lodash/_createCaseFirst.js
function k_(e) {
	return function(t) {
		t = Bg(t);
		var n = c_(t) ? O_(t) : void 0, r = n ? n[0] : t.charAt(0), i = n ? o_(n, 1).join("") : t.slice(1);
		return r[e]() + i;
	};
}
//#endregion
//#region node_modules/lodash/upperFirst.js
var A_ = k_("toUpperCase");
//#endregion
//#region node_modules/lodash/capitalize.js
function j_(e) {
	return A_(Bg(e).toLowerCase());
}
//#endregion
//#region node_modules/lodash/_stackClear.js
function M_() {
	this.__data__ = new Cg(), this.size = 0;
}
//#endregion
//#region node_modules/lodash/_stackDelete.js
function N_(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
//#endregion
//#region node_modules/lodash/_stackGet.js
function P_(e) {
	return this.__data__.get(e);
}
//#endregion
//#region node_modules/lodash/_stackHas.js
function F_(e) {
	return this.__data__.has(e);
}
//#endregion
//#region node_modules/lodash/_stackSet.js
var I_ = 200;
function L_(e, t) {
	var n = this.__data__;
	if (n instanceof Cg) {
		var r = n.__data__;
		if (!wg || r.length < I_ - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new Mg(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
//#endregion
//#region node_modules/lodash/_Stack.js
function R_(e) {
	this.size = (this.__data__ = new Cg(e)).size;
}
R_.prototype.clear = M_, R_.prototype.delete = N_, R_.prototype.get = P_, R_.prototype.has = F_, R_.prototype.set = L_;
//#endregion
//#region node_modules/lodash/_baseAssign.js
function z_(e, t) {
	return e && qm(t, Zh(t), e);
}
//#endregion
//#region node_modules/lodash/_baseAssignIn.js
function B_(e, t) {
	return e && qm(t, tg(t), e);
}
//#endregion
//#region node_modules/lodash/_cloneBuffer.js
var V_ = typeof exports == "object" && exports && !exports.nodeType && exports, H_ = V_ && typeof module == "object" && module && !module.nodeType && module, U_ = H_ && H_.exports === V_ ? Dp.Buffer : void 0, W_ = U_ ? U_.allocUnsafe : void 0;
function G_(e, t) {
	if (t) return e.slice();
	var n = e.length, r = W_ ? W_(n) : new e.constructor(n);
	return e.copy(r), r;
}
//#endregion
//#region node_modules/lodash/_arrayFilter.js
function K_(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
//#endregion
//#region node_modules/lodash/stubArray.js
function q_() {
	return [];
}
//#endregion
//#region node_modules/lodash/_getSymbols.js
var J_ = Object.prototype.propertyIsEnumerable, Y_ = Object.getOwnPropertySymbols, X_ = Y_ ? function(e) {
	return e == null ? [] : (e = Object(e), K_(Y_(e), function(t) {
		return J_.call(e, t);
	}));
} : q_;
//#endregion
//#region node_modules/lodash/_copySymbols.js
function Z_(e, t) {
	return qm(e, X_(e), t);
}
//#endregion
//#region node_modules/lodash/_getSymbolsIn.js
var Q_ = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) Gg(t, X_(e)), e = Zg(e);
	return t;
} : q_;
//#endregion
//#region node_modules/lodash/_copySymbolsIn.js
function $_(e, t) {
	return qm(e, Q_(e), t);
}
//#endregion
//#region node_modules/lodash/_baseGetAllKeys.js
function ev(e, t, n) {
	var r = t(e);
	return Wp(e) ? r : Gg(r, n(e));
}
//#endregion
//#region node_modules/lodash/_getAllKeys.js
function tv(e) {
	return ev(e, Zh, X_);
}
//#endregion
//#region node_modules/lodash/_getAllKeysIn.js
function nv(e) {
	return ev(e, tg, Q_);
}
//#endregion
//#region node_modules/lodash/_DataView.js
var rv = Em(Dp, "DataView"), iv = Em(Dp, "Promise"), av = Em(Dp, "Set"), ov = "[object Map]", sv = "[object Object]", cv = "[object Promise]", lv = "[object Set]", uv = "[object WeakMap]", dv = "[object DataView]", fv = gm(rv), pv = gm(wg), mv = gm(iv), hv = gm(av), gv = gm(Dm), _v = zp;
(rv && _v(new rv(/* @__PURE__ */ new ArrayBuffer(1))) != dv || wg && _v(new wg()) != ov || iv && _v(iv.resolve()) != cv || av && _v(new av()) != lv || Dm && _v(new Dm()) != uv) && (_v = function(e) {
	var t = zp(e), n = t == sv ? e.constructor : void 0, r = n ? gm(n) : "";
	if (r) switch (r) {
		case fv: return dv;
		case pv: return ov;
		case mv: return cv;
		case hv: return lv;
		case gv: return uv;
	}
	return t;
});
var vv = _v, yv = Object.prototype.hasOwnProperty;
function bv(e) {
	var t = e.length, n = new e.constructor(t);
	return t && typeof e[0] == "string" && yv.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
//#endregion
//#region node_modules/lodash/_Uint8Array.js
var xv = Dp.Uint8Array;
//#endregion
//#region node_modules/lodash/_cloneArrayBuffer.js
function Sv(e) {
	var t = new e.constructor(e.byteLength);
	return new xv(t).set(new xv(e)), t;
}
//#endregion
//#region node_modules/lodash/_cloneDataView.js
function Cv(e, t) {
	var n = t ? Sv(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.byteLength);
}
//#endregion
//#region node_modules/lodash/_cloneRegExp.js
var wv = /\w*$/;
function Tv(e) {
	var t = new e.constructor(e.source, wv.exec(e));
	return t.lastIndex = e.lastIndex, t;
}
//#endregion
//#region node_modules/lodash/_cloneSymbol.js
var Ev = Op ? Op.prototype : void 0, Dv = Ev ? Ev.valueOf : void 0;
function Ov(e) {
	return Dv ? Object(Dv.call(e)) : {};
}
//#endregion
//#region node_modules/lodash/_cloneTypedArray.js
function kv(e, t) {
	var n = t ? Sv(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.length);
}
//#endregion
//#region node_modules/lodash/_initCloneByTag.js
var Av = "[object Boolean]", jv = "[object Date]", Mv = "[object Map]", Nv = "[object Number]", Pv = "[object RegExp]", Fv = "[object Set]", Iv = "[object String]", Lv = "[object Symbol]", Rv = "[object ArrayBuffer]", zv = "[object DataView]", Bv = "[object Float32Array]", Vv = "[object Float64Array]", Hv = "[object Int8Array]", Uv = "[object Int16Array]", Wv = "[object Int32Array]", Gv = "[object Uint8Array]", Kv = "[object Uint8ClampedArray]", qv = "[object Uint16Array]", Jv = "[object Uint32Array]";
function Yv(e, t, n) {
	var r = e.constructor;
	switch (t) {
		case Rv: return Sv(e);
		case Av:
		case jv: return new r(+e);
		case zv: return Cv(e, n);
		case Bv:
		case Vv:
		case Hv:
		case Uv:
		case Wv:
		case Gv:
		case Kv:
		case qv:
		case Jv: return kv(e, n);
		case Mv: return new r();
		case Nv:
		case Iv: return new r(e);
		case Pv: return Tv(e);
		case Fv: return new r();
		case Lv: return Ov(e);
	}
}
//#endregion
//#region node_modules/lodash/_initCloneObject.js
function Xv(e) {
	return typeof e.constructor == "function" && !eh(e) ? km(Zg(e)) : {};
}
//#endregion
//#region node_modules/lodash/_baseIsMap.js
var Zv = "[object Map]";
function Qv(e) {
	return Bp(e) && vv(e) == Zv;
}
//#endregion
//#region node_modules/lodash/isMap.js
var $v = Hh && Hh.isMap, ey = $v ? Rh($v) : Qv, ty = "[object Set]";
function ny(e) {
	return Bp(e) && vv(e) == ty;
}
//#endregion
//#region node_modules/lodash/isSet.js
var ry = Hh && Hh.isSet, iy = ry ? Rh(ry) : ny, ay = 1, oy = 2, sy = 4, cy = "[object Arguments]", ly = "[object Array]", uy = "[object Boolean]", dy = "[object Date]", fy = "[object Error]", py = "[object Function]", my = "[object GeneratorFunction]", hy = "[object Map]", gy = "[object Number]", _y = "[object Object]", vy = "[object RegExp]", yy = "[object Set]", by = "[object String]", xy = "[object Symbol]", Sy = "[object WeakMap]", Cy = "[object ArrayBuffer]", wy = "[object DataView]", Ty = "[object Float32Array]", Ey = "[object Float64Array]", Dy = "[object Int8Array]", Oy = "[object Int16Array]", ky = "[object Int32Array]", Ay = "[object Uint8Array]", jy = "[object Uint8ClampedArray]", My = "[object Uint16Array]", Ny = "[object Uint32Array]", G = {};
G[cy] = G[ly] = G[Cy] = G[wy] = G[uy] = G[dy] = G[Ty] = G[Ey] = G[Dy] = G[Oy] = G[ky] = G[hy] = G[gy] = G[_y] = G[vy] = G[yy] = G[by] = G[xy] = G[Ay] = G[jy] = G[My] = G[Ny] = !0, G[fy] = G[py] = G[Sy] = !1;
function Py(e, t, n, r, i, a) {
	var o, s = t & ay, c = t & oy, l = t & sy;
	if (n && (o = i ? n(e, r, i, a) : n(e)), o !== void 0) return o;
	if (!$p(e)) return e;
	var u = Wp(e);
	if (u) {
		if (o = bv(e), !s) return jm(e, o);
	} else {
		var d = vv(e), f = d == py || d == my;
		if (fh(e)) return G_(e, s);
		if (d == _y || d == cy || f && !i) {
			if (o = c || f ? {} : Xv(e), !s) return c ? $_(e, B_(o, e)) : Z_(e, z_(o, e));
		} else {
			if (!G[d]) return i ? e : {};
			o = Yv(e, d, s);
		}
	}
	a ||= new R_();
	var p = a.get(e);
	if (p) return p;
	a.set(e, o), iy(e) ? e.forEach(function(r) {
		o.add(Py(r, t, n, r, e, a));
	}) : ey(e) && e.forEach(function(r, i) {
		o.set(i, Py(r, t, n, i, e, a));
	});
	var m = u ? void 0 : (l ? c ? nv : tv : c ? tg : Zh)(e);
	return zm(m || e, function(r, i) {
		m && (i = r, r = e[i]), Km(o, i, Py(r, t, n, i, e, a));
	}), o;
}
//#endregion
//#region node_modules/lodash/_setCacheAdd.js
var Fy = "__lodash_hash_undefined__";
function Iy(e) {
	return this.__data__.set(e, Fy), this;
}
//#endregion
//#region node_modules/lodash/_setCacheHas.js
function Ly(e) {
	return this.__data__.has(e);
}
//#endregion
//#region node_modules/lodash/_SetCache.js
function Ry(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.__data__ = new Mg(); ++t < n;) this.add(e[t]);
}
Ry.prototype.add = Ry.prototype.push = Iy, Ry.prototype.has = Ly;
//#endregion
//#region node_modules/lodash/_arraySome.js
function zy(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
	return !1;
}
//#endregion
//#region node_modules/lodash/_cacheHas.js
function By(e, t) {
	return e.has(t);
}
//#endregion
//#region node_modules/lodash/_equalArrays.js
var Vy = 1, Hy = 2;
function Uy(e, t, n, r, i, a) {
	var o = n & Vy, s = e.length, c = t.length;
	if (s != c && !(o && c > s)) return !1;
	var l = a.get(e), u = a.get(t);
	if (l && u) return l == t && u == e;
	var d = -1, f = !0, p = n & Hy ? new Ry() : void 0;
	for (a.set(e, t), a.set(t, e); ++d < s;) {
		var m = e[d], h = t[d];
		if (r) var g = o ? r(h, m, d, t, e, a) : r(m, h, d, e, t, a);
		if (g !== void 0) {
			if (g) continue;
			f = !1;
			break;
		}
		if (p) {
			if (!zy(t, function(e, t) {
				if (!By(p, t) && (m === e || i(m, e, n, r, a))) return p.push(t);
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
function Wy(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e, r) {
		n[++t] = [r, e];
	}), n;
}
//#endregion
//#region node_modules/lodash/_setToArray.js
function Gy(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e) {
		n[++t] = e;
	}), n;
}
//#endregion
//#region node_modules/lodash/_equalByTag.js
var Ky = 1, qy = 2, Jy = "[object Boolean]", Yy = "[object Date]", Xy = "[object Error]", Zy = "[object Map]", Qy = "[object Number]", $y = "[object RegExp]", eb = "[object Set]", tb = "[object String]", nb = "[object Symbol]", rb = "[object ArrayBuffer]", ib = "[object DataView]", ab = Op ? Op.prototype : void 0, ob = ab ? ab.valueOf : void 0;
function sb(e, t, n, r, i, a, o) {
	switch (n) {
		case ib:
			if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
			e = e.buffer, t = t.buffer;
		case rb: return !(e.byteLength != t.byteLength || !a(new xv(e), new xv(t)));
		case Jy:
		case Yy:
		case Qy: return Wm(+e, +t);
		case Xy: return e.name == t.name && e.message == t.message;
		case $y:
		case tb: return e == t + "";
		case Zy: var s = Wy;
		case eb:
			var c = r & Ky;
			if (s ||= Gy, e.size != t.size && !c) return !1;
			var l = o.get(e);
			if (l) return l == t;
			r |= qy, o.set(e, t);
			var u = Uy(s(e), s(t), r, i, a, o);
			return o.delete(e), u;
		case nb: if (ob) return ob.call(e) == ob.call(t);
	}
	return !1;
}
//#endregion
//#region node_modules/lodash/_equalObjects.js
var cb = 1, lb = Object.prototype.hasOwnProperty;
function ub(e, t, n, r, i, a) {
	var o = n & cb, s = tv(e), c = s.length;
	if (c != tv(t).length && !o) return !1;
	for (var l = c; l--;) {
		var u = s[l];
		if (!(o ? u in t : lb.call(t, u))) return !1;
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
var db = 1, fb = "[object Arguments]", pb = "[object Array]", mb = "[object Object]", hb = Object.prototype.hasOwnProperty;
function gb(e, t, n, r, i, a) {
	var o = Wp(e), s = Wp(t), c = o ? pb : vv(e), l = s ? pb : vv(t);
	c = c == fb ? mb : c, l = l == fb ? mb : l;
	var u = c == mb, d = l == mb, f = c == l;
	if (f && fh(e)) {
		if (!fh(t)) return !1;
		o = !0, u = !1;
	}
	if (f && !u) return a ||= new R_(), o || Wh(e) ? Uy(e, t, n, r, i, a) : sb(e, t, c, n, r, i, a);
	if (!(n & db)) {
		var p = u && hb.call(e, "__wrapped__"), m = d && hb.call(t, "__wrapped__");
		if (p || m) {
			var h = p ? e.value() : e, g = m ? t.value() : t;
			return a ||= new R_(), i(h, g, n, r, a);
		}
	}
	return f ? (a ||= new R_(), ub(e, t, n, r, i, a)) : !1;
}
//#endregion
//#region node_modules/lodash/_baseIsEqual.js
function _b(e, t, n, r, i) {
	return e === t ? !0 : e == null || t == null || !Bp(e) && !Bp(t) ? e !== e && t !== t : gb(e, t, n, r, _b, i);
}
//#endregion
//#region node_modules/lodash/now.js
var vb = function() {
	return Dp.Date.now();
}, yb = "Expected a function", bb = Math.max, xb = Math.min;
function Sb(e, t, n) {
	var r, i, a, o, s, c, l = 0, u = !1, d = !1, f = !0;
	if (typeof e != "function") throw TypeError(yb);
	t = am(t) || 0, $p(n) && (u = !!n.leading, d = "maxWait" in n, a = d ? bb(am(n.maxWait) || 0, t) : a, f = "trailing" in n ? !!n.trailing : f);
	function p(t) {
		var n = r, a = i;
		return r = i = void 0, l = t, o = e.apply(a, n), o;
	}
	function m(e) {
		return l = e, s = setTimeout(_, t), u ? p(e) : o;
	}
	function h(e) {
		var n = e - c, r = e - l, i = t - n;
		return d ? xb(i, a - r) : i;
	}
	function g(e) {
		var n = e - c, r = e - l;
		return c === void 0 || n >= t || n < 0 || d && r >= a;
	}
	function _() {
		var e = vb();
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
		return s === void 0 ? o : v(vb());
	}
	function x() {
		var e = vb(), n = g(e);
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
function Cb(e) {
	var t = e == null ? 0 : e.length;
	return t ? e[t - 1] : void 0;
}
//#endregion
//#region node_modules/lodash/_parent.js
function wb(e, t) {
	return t.length < 2 ? e : Wg(e, a_(t, 0, -1));
}
//#endregion
//#region node_modules/lodash/isEqual.js
function Tb(e, t) {
	return _b(e, t);
}
//#endregion
//#region node_modules/lodash/_baseUnset.js
var Eb = Object.prototype.hasOwnProperty;
function Db(e, t) {
	t = Vg(t, e);
	var n = -1, r = t.length;
	if (!r) return !0;
	for (; ++n < r;) {
		var i = Ug(t[n]);
		if (i === "__proto__" && !Eb.call(e, "__proto__") || (i === "constructor" || i === "prototype") && n < r - 1) return !1;
	}
	var a = wb(e, t);
	return a == null || delete a[Ug(Cb(t))];
}
//#endregion
//#region node_modules/lodash/_customOmitClone.js
function Ob(e) {
	return i_(e) ? void 0 : e;
}
//#endregion
//#region node_modules/lodash/omit.js
var kb = 1, Ab = 2, jb = 4, Mb = Xg(function(e, t) {
	var n = {};
	if (e == null) return n;
	var r = !1;
	t = Up(t, function(t) {
		return t = Vg(t, e), r ||= t.length > 1, t;
	}), qm(e, nv(e), n), r && (n = Py(n, kb | Ab | jb, Ob));
	for (var i = t.length; i--;) Db(n, t[i]);
	return n;
}), Nb = "Expected a function";
function Pb(e, t, n) {
	var r = !0, i = !0;
	if (typeof e != "function") throw TypeError(Nb);
	return $p(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), Sb(e, t, {
		leading: r,
		maxWait: t,
		trailing: i
	});
}
var Fb = { seekBar: "_seekBar_16dv7_14" };
//#endregion
//#region src/audio/SeekBar/SeekBar.tsx
function Ib({ value: e = 0, className: n, ...r }) {
	let { translate: i } = U(), [a, o] = h(e), s = p(() => Pb(o, 10), []);
	return u(() => {
		s(e);
	}, [e, s]), /* @__PURE__ */ t.createElement("input", {
		type: "range",
		className: (0, V.default)(Fb.seekBar, n),
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
var Lb = {
	avatarWithDetails: "_avatarWithDetails_7ga8t_8",
	title: "_title_7ga8t_17",
	details: "_details_7ga8t_28"
}, Rb = { flex: "_flex_4dswl_9" };
//#endregion
//#region src/core/utils/Flex/Flex.tsx
function K({ as: e = "div", display: n = "flex", direction: r = "row", align: i = "start", justify: a = "start", gap: o = "0", wrap: s = "nowrap", className: c, children: l, ...u }) {
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
		className: (0, V.default)(Rb.flex, c),
		style: d
	}, l);
}
//#endregion
//#region src/core/AvatarWithDetails/AvatarWithDetails.tsx
function zb({ as: e, className: n, details: r, avatar: i, title: a, ...o }) {
	let s = e || "div";
	return /* @__PURE__ */ t.createElement(s, {
		className: (0, V.default)(Lb.avatarWithDetails, n),
		...o
	}, i, /* @__PURE__ */ t.createElement(K, { direction: "column" }, /* @__PURE__ */ t.createElement("span", { className: Lb.title }, a), /* @__PURE__ */ t.createElement("span", { className: Lb.details }, r)));
}
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/check-circle.js
function Bb(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "m10.6 13.8-2.15-2.15a.95.95 0 0 0-.7-.275.95.95 0 0 0-.7.275.95.95 0 0 0-.275.7q0 .425.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65a.95.95 0 0 0 .275-.7.95.95 0 0 0-.275-.7.95.95 0 0 0-.7-.275.95.95 0 0 0-.7.275zM12 22a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20" })
	});
}
Bb.displayName = "CheckCircleIcon";
var Vb = a(Bb);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/error.js
function Hb(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M12 17q.424 0 .713-.288A.97.97 0 0 0 13 16a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 15a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 16q0 .424.287.712.288.288.713.288m0-4q.424 0 .713-.287A.97.97 0 0 0 13 12V8a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 7a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 8v4q0 .424.287.713.288.287.713.287m0 9a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20" })
	});
}
Hb.displayName = "ErrorIcon";
var Ub = a(Hb);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/info.js
function Wb(e, t) {
	return /* @__PURE__ */ (0, H.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/* @__PURE__ */ (0, H.jsx)("path", { d: "M11.288 7.288A.97.97 0 0 1 12 7q.424 0 .713.287Q13 7.576 13 8t-.287.713A.97.97 0 0 1 12 9a.97.97 0 0 1-.713-.287A.97.97 0 0 1 11 8q0-.424.287-.713m.001 4.001A.97.97 0 0 1 12 11q.424 0 .713.287.287.288.287.713v4q0 .424-.287.712A.97.97 0 0 1 12 17a.97.97 0 0 1-.713-.288A.97.97 0 0 1 11 16v-4q0-.424.287-.713" }), /* @__PURE__ */ (0, H.jsx)("path", {
			fillRule: "evenodd",
			d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0",
			clipRule: "evenodd"
		})]
	});
}
Wb.displayName = "InfoIcon";
var Gb = a(Wb), Kb = {
	banner: "_banner_193k4_8",
	content: "_content_193k4_38",
	icon: "_icon_193k4_50",
	actions: "_actions_193k4_60"
};
//#endregion
//#region ../../node_modules/matrix-web-i18n/lib/utils.js
function qb(e) {
	return e.toLowerCase().replace("_", "-");
}
function Jb(e) {
	let t = [], n = qb(e), r = n.split("-");
	return r.length === 2 && r[0] === r[1] ? t.push(r[0]) : (t.push(n), r.length === 2 && t.push(r[0])), t;
}
//#endregion
//#region ../../node_modules/matrix-web-i18n/lib/index.js
var Yb = "|", Xb = /* @__PURE__ */ P(((e, t) => {
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
})), Zb = /* @__PURE__ */ P(((e, t) => {
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
})), Qb = /* @__PURE__ */ P(((e, t) => {
	var n = Zb();
	t.exports = function() {
		return n() && !!Symbol.toStringTag;
	};
})), $b = /* @__PURE__ */ P(((e, t) => {
	t.exports = Object;
})), ex = /* @__PURE__ */ P(((e, t) => {
	t.exports = Error;
})), tx = /* @__PURE__ */ P(((e, t) => {
	t.exports = EvalError;
})), nx = /* @__PURE__ */ P(((e, t) => {
	t.exports = RangeError;
})), rx = /* @__PURE__ */ P(((e, t) => {
	t.exports = ReferenceError;
})), ix = /* @__PURE__ */ P(((e, t) => {
	t.exports = SyntaxError;
})), ax = /* @__PURE__ */ P(((e, t) => {
	t.exports = TypeError;
})), ox = /* @__PURE__ */ P(((e, t) => {
	t.exports = URIError;
})), sx = /* @__PURE__ */ P(((e, t) => {
	t.exports = Math.abs;
})), cx = /* @__PURE__ */ P(((e, t) => {
	t.exports = Math.floor;
})), lx = /* @__PURE__ */ P(((e, t) => {
	t.exports = Math.max;
})), ux = /* @__PURE__ */ P(((e, t) => {
	t.exports = Math.min;
})), dx = /* @__PURE__ */ P(((e, t) => {
	t.exports = Math.pow;
})), fx = /* @__PURE__ */ P(((e, t) => {
	t.exports = Math.round;
})), px = /* @__PURE__ */ P(((e, t) => {
	t.exports = Number.isNaN || function(e) {
		return e !== e;
	};
})), mx = /* @__PURE__ */ P(((e, t) => {
	var n = px();
	t.exports = function(e) {
		return n(e) || e === 0 ? e : e < 0 ? -1 : 1;
	};
})), hx = /* @__PURE__ */ P(((e, t) => {
	t.exports = Object.getOwnPropertyDescriptor;
})), gx = /* @__PURE__ */ P(((e, t) => {
	var n = hx();
	if (n) try {
		n([], "length");
	} catch {
		n = null;
	}
	t.exports = n;
})), _x = /* @__PURE__ */ P(((e, t) => {
	var n = Object.defineProperty || !1;
	if (n) try {
		n({}, "a", { value: 1 });
	} catch {
		n = !1;
	}
	t.exports = n;
})), vx = /* @__PURE__ */ P(((e, t) => {
	var n = typeof Symbol < "u" && Symbol, r = Zb();
	t.exports = function() {
		return typeof n != "function" || typeof Symbol != "function" || typeof n("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : r();
	};
})), yx = /* @__PURE__ */ P(((e, t) => {
	t.exports = typeof Reflect < "u" && Reflect.getPrototypeOf || null;
})), bx = /* @__PURE__ */ P(((e, t) => {
	t.exports = $b().getPrototypeOf || null;
})), xx = /* @__PURE__ */ P(((e, t) => {
	var n = "Function.prototype.bind called on incompatible ", r = Object.prototype.toString, i = Math.max, a = "[object Function]", o = function(e, t) {
		for (var n = [], r = 0; r < e.length; r += 1) n[r] = e[r];
		for (var i = 0; i < t.length; i += 1) n[i + e.length] = t[i];
		return n;
	}, s = function(e, t) {
		for (var n = [], r = t || 0, i = 0; r < e.length; r += 1, i += 1) n[i] = e[r];
		return n;
	}, c = function(e, t) {
		for (var n = "", r = 0; r < e.length; r += 1) n += e[r], r + 1 < e.length && (n += t);
		return n;
	};
	t.exports = function(e) {
		var t = this;
		if (typeof t != "function" || r.apply(t) !== a) throw TypeError(n + t);
		for (var l = s(arguments, 1), u, d = function() {
			if (this instanceof u) {
				var n = t.apply(this, o(l, arguments));
				return Object(n) === n ? n : this;
			}
			return t.apply(e, o(l, arguments));
		}, f = i(0, t.length - l.length), p = [], m = 0; m < f; m++) p[m] = "$" + m;
		if (u = Function("binder", "return function (" + c(p, ",") + "){ return binder.apply(this,arguments); }")(d), t.prototype) {
			var h = function() {};
			h.prototype = t.prototype, u.prototype = new h(), h.prototype = null;
		}
		return u;
	};
})), Sx = /* @__PURE__ */ P(((e, t) => {
	var n = xx();
	t.exports = Function.prototype.bind || n;
})), Cx = /* @__PURE__ */ P(((e, t) => {
	t.exports = Function.prototype.call;
})), wx = /* @__PURE__ */ P(((e, t) => {
	t.exports = Function.prototype.apply;
})), Tx = /* @__PURE__ */ P(((e, t) => {
	t.exports = typeof Reflect < "u" && Reflect && Reflect.apply;
})), Ex = /* @__PURE__ */ P(((e, t) => {
	var n = Sx(), r = wx(), i = Cx();
	t.exports = Tx() || n.call(i, r);
})), Dx = /* @__PURE__ */ P(((e, t) => {
	var n = Sx(), r = ax(), i = Cx(), a = Ex();
	t.exports = function(e) {
		if (e.length < 1 || typeof e[0] != "function") throw new r("a function is required");
		return a(n, i, e);
	};
})), Ox = /* @__PURE__ */ P(((e, t) => {
	var n = Dx(), r = gx(), i;
	try {
		i = [].__proto__ === Array.prototype;
	} catch (e) {
		if (!e || typeof e != "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") throw e;
	}
	var a = !!i && r && r(Object.prototype, "__proto__"), o = Object, s = o.getPrototypeOf;
	t.exports = a && typeof a.get == "function" ? n([a.get]) : typeof s == "function" ? function(e) {
		return s(e == null ? e : o(e));
	} : !1;
})), kx = /* @__PURE__ */ P(((e, t) => {
	var n = yx(), r = bx(), i = Ox();
	t.exports = n ? function(e) {
		return n(e);
	} : r ? function(e) {
		if (!e || typeof e != "object" && typeof e != "function") throw TypeError("getProto: not an object");
		return r(e);
	} : i ? function(e) {
		return i(e);
	} : null;
})), Ax = /* @__PURE__ */ P(((e, t) => {
	var n = Function.prototype.call, r = Object.prototype.hasOwnProperty;
	t.exports = Sx().call(n, r);
})), jx = /* @__PURE__ */ P(((e, t) => {
	var n, r = $b(), i = ex(), a = tx(), o = nx(), s = rx(), c = ix(), l = ax(), u = ox(), d = sx(), f = cx(), p = lx(), m = ux(), h = dx(), g = fx(), _ = mx(), v = Function, y = function(e) {
		try {
			return v("\"use strict\"; return (" + e + ").constructor;")();
		} catch {}
	}, b = gx(), x = _x(), S = function() {
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
	}() : S, w = vx()(), T = kx(), E = bx(), D = yx(), O = wx(), k = Cx(), A = {}, ee = typeof Uint8Array > "u" || !T ? n : T(Uint8Array), j = {
		__proto__: null,
		"%AggregateError%": typeof AggregateError > "u" ? n : AggregateError,
		"%Array%": Array,
		"%ArrayBuffer%": typeof ArrayBuffer > "u" ? n : ArrayBuffer,
		"%ArrayIteratorPrototype%": w && T ? T([][Symbol.iterator]()) : n,
		"%AsyncFromSyncIteratorPrototype%": n,
		"%AsyncFunction%": A,
		"%AsyncGenerator%": A,
		"%AsyncGeneratorFunction%": A,
		"%AsyncIteratorPrototype%": A,
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
		"%GeneratorFunction%": A,
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
		"%TypedArray%": ee,
		"%TypeError%": l,
		"%Uint8Array%": typeof Uint8Array > "u" ? n : Uint8Array,
		"%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? n : Uint8ClampedArray,
		"%Uint16Array%": typeof Uint16Array > "u" ? n : Uint16Array,
		"%Uint32Array%": typeof Uint32Array > "u" ? n : Uint32Array,
		"%URIError%": u,
		"%WeakMap%": typeof WeakMap > "u" ? n : WeakMap,
		"%WeakRef%": typeof WeakRef > "u" ? n : WeakRef,
		"%WeakSet%": typeof WeakSet > "u" ? n : WeakSet,
		"%Function.prototype.call%": k,
		"%Function.prototype.apply%": O,
		"%Object.defineProperty%": x,
		"%Object.getPrototypeOf%": E,
		"%Math.abs%": d,
		"%Math.floor%": f,
		"%Math.max%": p,
		"%Math.min%": m,
		"%Math.pow%": h,
		"%Math.round%": g,
		"%Math.sign%": _,
		"%Reflect.getPrototypeOf%": D
	};
	if (T) try {
		null.error;
	} catch (e) {
		j["%Error.prototype%"] = T(T(e));
	}
	var te = function e(t) {
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
		return j[t] = n, n;
	}, ne = {
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
	}, M = Sx(), re = Ax(), N = M.call(k, Array.prototype.concat), ie = M.call(O, Array.prototype.splice), ae = M.call(k, String.prototype.replace), oe = M.call(k, String.prototype.slice), se = M.call(k, RegExp.prototype.exec), ce = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, le = /\\(\\)?/g, ue = function(e) {
		var t = oe(e, 0, 1), n = oe(e, -1);
		if (t === "%" && n !== "%") throw new c("invalid intrinsic syntax, expected closing `%`");
		if (n === "%" && t !== "%") throw new c("invalid intrinsic syntax, expected opening `%`");
		var r = [];
		return ae(e, ce, function(e, t, n, i) {
			r[r.length] = n ? ae(i, le, "$1") : t || e;
		}), r;
	}, de = function(e, t) {
		var n = e, r;
		if (re(ne, n) && (r = ne[n], n = "%" + r[0] + "%"), re(j, n)) {
			var i = j[n];
			if (i === A && (i = te(n)), i === void 0 && !t) throw new l("intrinsic " + e + " exists, but is not available. Please file an issue!");
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
		if (se(/^%?[^%]*%?$/, e) === null) throw new c("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
		var n = ue(e), r = n.length > 0 ? n[0] : "", i = de("%" + r + "%", t), a = i.name, o = i.value, s = !1, u = i.alias;
		u && (r = u[0], ie(n, N([0, 1], u)));
		for (var d = 1, f = !0; d < n.length; d += 1) {
			var p = n[d], m = oe(p, 0, 1), h = oe(p, -1);
			if ((m === "\"" || m === "'" || m === "`" || h === "\"" || h === "'" || h === "`") && m !== h) throw new c("property names with quotes must have matching quotes");
			if ((p === "constructor" || !f) && (s = !0), r += "." + p, a = "%" + r + "%", re(j, a)) o = j[a];
			else if (o != null) {
				if (!(p in o)) {
					if (!t) throw new l("base intrinsic for " + e + " exists, but the property is not available.");
					return;
				}
				if (b && d + 1 >= n.length) {
					var g = b(o, p);
					f = !!g, o = f && "get" in g && !("originalValue" in g.get) ? g.get : o[p];
				} else f = re(o, p), o = o[p];
				f && !s && (j[a] = o);
			}
		}
		return o;
	};
})), Mx = /* @__PURE__ */ P(((e, t) => {
	var n = jx(), r = Dx(), i = r([n("%String.prototype.indexOf%")]);
	t.exports = function(e, t) {
		var a = n(e, !!t);
		return typeof a == "function" && i(e, ".prototype.") > -1 ? r([a]) : a;
	};
})), Nx = /* @__PURE__ */ P(((e, t) => {
	var n = Qb()(), r = Mx()("Object.prototype.toString"), i = function(e) {
		return n && e && typeof e == "object" && Symbol.toStringTag in e ? !1 : r(e) === "[object Arguments]";
	}, a = function(e) {
		return i(e) ? !0 : typeof e == "object" && !!e && "length" in e && typeof e.length == "number" && e.length >= 0 && r(e) !== "[object Array]" && "callee" in e && r(e.callee) === "[object Function]";
	}, o = function() {
		return i(arguments);
	}();
	i.isLegacyArguments = a, t.exports = o ? i : a;
})), Px = /* @__PURE__ */ P(((e, t) => {
	var n = Mx(), r = Qb()(), i = Ax(), a = gx(), o;
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
})), Fx = /* @__PURE__ */ P(((e, t) => {
	var n = Mx(), r = Px(), i = n("RegExp.prototype.exec"), a = ax();
	t.exports = function(e) {
		if (!r(e)) throw new a("`regex` must be a RegExp");
		return function(t) {
			return i(e, t) !== null;
		};
	};
})), Ix = /* @__PURE__ */ P(((e, t) => {
	var n = function* () {}.constructor;
	t.exports = () => n;
})), Lx = /* @__PURE__ */ P(((e, t) => {
	var n = Mx(), r = Fx()(/^\s*(?:function)?\*/), i = Qb()(), a = kx(), o = n("Object.prototype.toString"), s = n("Function.prototype.toString"), c = Ix();
	t.exports = function(e) {
		if (typeof e != "function") return !1;
		if (r(s(e))) return !0;
		if (!i) return o(e) === "[object GeneratorFunction]";
		if (!a) return !1;
		var t = c();
		return t && a(e) === t.prototype;
	};
})), Rx = /* @__PURE__ */ P(((e, t) => {
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
			return s(e) ? !1 : (n.call(e), !0);
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
})), zx = /* @__PURE__ */ P(((e, t) => {
	var n = Rx(), r = Object.prototype.toString, i = Object.prototype.hasOwnProperty, a = function(e, t, n) {
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
})), Bx = /* @__PURE__ */ P(((e, t) => {
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
})), Vx = /* @__PURE__ */ P(((e, t) => {
	var n = Bx(), r = typeof globalThis > "u" ? global : globalThis;
	t.exports = function() {
		for (var e = [], t = 0; t < n.length; t++) typeof r[n[t]] == "function" && (e[e.length] = n[t]);
		return e;
	};
})), Hx = /* @__PURE__ */ P(((e, t) => {
	var n = _x(), r = ix(), i = ax(), a = gx();
	t.exports = function(e, t, o) {
		if (!e || typeof e != "object" && typeof e != "function") throw new i("`obj` must be an object or a function`");
		if (typeof t != "string" && typeof t != "symbol") throw new i("`property` must be a string or a symbol`");
		if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null) throw new i("`nonEnumerable`, if provided, must be a boolean or null");
		if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null) throw new i("`nonWritable`, if provided, must be a boolean or null");
		if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null) throw new i("`nonConfigurable`, if provided, must be a boolean or null");
		if (arguments.length > 6 && typeof arguments[6] != "boolean") throw new i("`loose`, if provided, must be a boolean");
		var s = arguments.length > 3 ? arguments[3] : null, c = arguments.length > 4 ? arguments[4] : null, l = arguments.length > 5 ? arguments[5] : null, u = arguments.length > 6 ? arguments[6] : !1, d = !!a && a(e, t);
		if (n) n(e, t, {
			configurable: l === null && d ? d.configurable : !l,
			enumerable: s === null && d ? d.enumerable : !s,
			value: o,
			writable: c === null && d ? d.writable : !c
		});
		else if (u || !s && !c && !l) e[t] = o;
		else throw new r("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
	};
})), Ux = /* @__PURE__ */ P(((e, t) => {
	var n = _x(), r = function() {
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
})), Wx = /* @__PURE__ */ P(((e, t) => {
	var n = jx(), r = Hx(), i = Ux()(), a = gx(), o = ax(), s = n("%Math.floor%");
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
})), Gx = /* @__PURE__ */ P(((e, t) => {
	var n = Sx(), r = wx(), i = Ex();
	t.exports = function() {
		return i(n, r, arguments);
	};
})), Kx = /* @__PURE__ */ P(((e, t) => {
	var n = Wx(), r = _x(), i = Dx(), a = Gx();
	t.exports = function(e) {
		var t = i(arguments), r = e.length - (arguments.length - 1);
		return n(t, 1 + (r > 0 ? r : 0), !0);
	}, r ? r(t.exports, "apply", { value: a }) : t.exports.apply = a;
})), qx = /* @__PURE__ */ P(((e, t) => {
	var n = zx(), r = Vx(), i = Kx(), a = Mx(), o = gx(), s = kx(), c = a("Object.prototype.toString"), l = Qb()(), u = typeof globalThis > "u" ? global : globalThis, d = r(), f = a("String.prototype.slice"), p = a("Array.prototype.indexOf", !0) || function(e, t) {
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
			return p(d, t) > -1 ? t : t === "Object" ? g(e) : !1;
		}
		return o ? h(e) : null;
	};
})), Jx = /* @__PURE__ */ P(((e, t) => {
	var n = qx();
	t.exports = function(e) {
		return !!n(e);
	};
})), Yx = /* @__PURE__ */ P(((e) => {
	var t = Nx(), n = Lx(), r = qx(), i = Jx();
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
		return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(e) : i(e) || ae(e);
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
	function D(e) {
		return r(e) === "BigUint64Array";
	}
	e.isBigUint64Array = D;
	function O(e) {
		return c(e) === "[object Map]";
	}
	O.working = typeof Map < "u" && O(/* @__PURE__ */ new Map());
	function k(e) {
		return typeof Map > "u" ? !1 : O.working ? O(e) : e instanceof Map;
	}
	e.isMap = k;
	function A(e) {
		return c(e) === "[object Set]";
	}
	A.working = typeof Set < "u" && A(/* @__PURE__ */ new Set());
	function ee(e) {
		return typeof Set > "u" ? !1 : A.working ? A(e) : e instanceof Set;
	}
	e.isSet = ee;
	function j(e) {
		return c(e) === "[object WeakMap]";
	}
	j.working = typeof WeakMap < "u" && j(/* @__PURE__ */ new WeakMap());
	function te(e) {
		return typeof WeakMap > "u" ? !1 : j.working ? j(e) : e instanceof WeakMap;
	}
	e.isWeakMap = te;
	function ne(e) {
		return c(e) === "[object WeakSet]";
	}
	ne.working = typeof WeakSet < "u" && ne(/* @__PURE__ */ new WeakSet());
	function M(e) {
		return ne(e);
	}
	e.isWeakSet = M;
	function re(e) {
		return c(e) === "[object ArrayBuffer]";
	}
	re.working = typeof ArrayBuffer < "u" && re(/* @__PURE__ */ new ArrayBuffer());
	function N(e) {
		return typeof ArrayBuffer > "u" ? !1 : re.working ? re(e) : e instanceof ArrayBuffer;
	}
	e.isArrayBuffer = N;
	function ie(e) {
		return c(e) === "[object DataView]";
	}
	ie.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && ie(new DataView(/* @__PURE__ */ new ArrayBuffer(1), 0, 1));
	function ae(e) {
		return typeof DataView > "u" ? !1 : ie.working ? ie(e) : e instanceof DataView;
	}
	e.isDataView = ae;
	var oe = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
	function se(e) {
		return c(e) === "[object SharedArrayBuffer]";
	}
	function ce(e) {
		return oe === void 0 ? !1 : (se.working === void 0 && (se.working = se(new oe())), se.working ? se(e) : e instanceof oe);
	}
	e.isSharedArrayBuffer = ce;
	function le(e) {
		return c(e) === "[object AsyncFunction]";
	}
	e.isAsyncFunction = le;
	function ue(e) {
		return c(e) === "[object Map Iterator]";
	}
	e.isMapIterator = ue;
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
		return typeof Uint8Array < "u" && (N(e) || ce(e));
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
})), Xx = /* @__PURE__ */ P(((e, t) => {
	t.exports = function(e) {
		return e && typeof e == "object" && typeof e.copy == "function" && typeof e.fill == "function" && typeof e.readUInt8 == "function";
	};
})), Zx = /* @__PURE__ */ P(((e, t) => {
	typeof Object.create == "function" ? t.exports = function(e, t) {
		t && (e.super_ = t, e.prototype = Object.create(t.prototype, { constructor: {
			value: e,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }));
	} : t.exports = function(e, t) {
		if (t) {
			e.super_ = t;
			var n = function() {};
			n.prototype = t.prototype, e.prototype = new n(), e.prototype.constructor = e;
		}
	};
})), Qx = /* @__PURE__ */ P(((e) => {
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
		if (t.customInspect && n && O(n.inspect) && n.inspect !== e.inspect && !(n.constructor && n.constructor.prototype === n)) {
			var i = n.inspect(r, t);
			return x(i) || (i = u(t, i, r)), i;
		}
		var a = d(t, n);
		if (a) return a;
		var o = Object.keys(n), s = l(o);
		if (t.showHidden && (o = Object.getOwnPropertyNames(n)), D(n) && (o.indexOf("message") >= 0 || o.indexOf("description") >= 0)) return f(n);
		if (o.length === 0) {
			if (O(n)) {
				var c = n.name ? ": " + n.name : "";
				return t.stylize("[Function" + c + "]", "special");
			}
			if (w(n)) return t.stylize(RegExp.prototype.toString.call(n), "regexp");
			if (E(n)) return t.stylize(Date.prototype.toString.call(n), "date");
			if (D(n)) return f(n);
		}
		var _ = "", v = !1, y = ["{", "}"];
		if (g(n) && (v = !0, y = ["[", "]"]), O(n) && (_ = " [Function" + (n.name ? ": " + n.name : "") + "]"), w(n) && (_ = " " + RegExp.prototype.toString.call(n)), E(n) && (_ = " " + Date.prototype.toUTCString.call(n)), D(n) && (_ = " " + f(n)), o.length === 0 && (!v || n.length == 0)) return y[0] + _ + y[1];
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
		for (var a = [], o = 0, s = t.length; o < s; ++o) ne(t, String(o)) ? a.push(m(e, t, n, r, String(o), !0)) : a.push("");
		return i.forEach(function(i) {
			i.match(/^\d+$/) || a.push(m(e, t, n, r, i, !0));
		}), a;
	}
	function m(e, t, n, r, i, a) {
		var o, s, c = Object.getOwnPropertyDescriptor(t, i) || { value: t[i] };
		if (c.get ? s = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (s = e.stylize("[Setter]", "special")), ne(r, i) || (o = "[" + i + "]"), s || (e.seen.indexOf(c.value) < 0 ? (s = v(n) ? u(e, c.value, null) : u(e, c.value, n - 1), s.indexOf("\n") > -1 && (s = a ? s.split("\n").map(function(e) {
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
	e.types = Yx();
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
		return T(e) && A(e) === "[object RegExp]";
	}
	e.isRegExp = w, e.types.isRegExp = w;
	function T(e) {
		return typeof e == "object" && !!e;
	}
	e.isObject = T;
	function E(e) {
		return T(e) && A(e) === "[object Date]";
	}
	e.isDate = E, e.types.isDate = E;
	function D(e) {
		return T(e) && (A(e) === "[object Error]" || e instanceof Error);
	}
	e.isError = D, e.types.isNativeError = D;
	function O(e) {
		return typeof e == "function";
	}
	e.isFunction = O;
	function k(e) {
		return e === null || typeof e == "boolean" || typeof e == "number" || typeof e == "string" || typeof e == "symbol" || e === void 0;
	}
	e.isPrimitive = k, e.isBuffer = Xx();
	function A(e) {
		return Object.prototype.toString.call(e);
	}
	function ee(e) {
		return e < 10 ? "0" + e.toString(10) : e.toString(10);
	}
	var j = [
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
	function te() {
		var e = /* @__PURE__ */ new Date(), t = [
			ee(e.getHours()),
			ee(e.getMinutes()),
			ee(e.getSeconds())
		].join(":");
		return [
			e.getDate(),
			j[e.getMonth()],
			t
		].join(" ");
	}
	e.log = function() {
		console.log("%s - %s", te(), e.format.apply(e, arguments));
	}, e.inherits = Zx(), e._extend = function(e, t) {
		if (!t || !T(t)) return e;
		for (var n = Object.keys(t), r = n.length; r--;) e[n[r]] = t[n[r]];
		return e;
	};
	function ne(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t);
	}
	var M = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
	e.promisify = function(e) {
		if (typeof e != "function") throw TypeError("The \"original\" argument must be of type Function");
		if (M && e[M]) {
			var n = e[M];
			if (typeof n != "function") throw TypeError("The \"util.promisify.custom\" argument must be of type Function");
			return Object.defineProperty(n, M, {
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
		return Object.setPrototypeOf(n, Object.getPrototypeOf(e)), M && Object.defineProperty(n, M, {
			value: n,
			enumerable: !1,
			writable: !1,
			configurable: !0
		}), Object.defineProperties(n, t(e));
	}, e.promisify.custom = M;
	function re(e, t) {
		if (!e) {
			var n = /* @__PURE__ */ Error("Promise was rejected with a falsy value");
			n.reason = e, e = n;
		}
		return t(e);
	}
	function N(e) {
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
				process.nextTick(re.bind(null, e, a));
			});
		}
		return Object.setPrototypeOf(n, Object.getPrototypeOf(e)), Object.defineProperties(n, t(e)), n;
	}
	e.callbackify = N;
})), $x = /* @__PURE__ */ P(((e) => {
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
					case "X":
						o = (parseInt(o, 10) >>> 0).toString(16).toUpperCase();
						break;
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
})), eS = /* @__PURE__ */ P(((e, t) => {
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
})), tS = /* @__PURE__ */ P(((e, t) => {
	var n = [].indexOf;
	t.exports = function(e, t) {
		if (n) return e.indexOf(t);
		for (var r = 0; r < e.length; ++r) if (e[r] === t) return r;
		return -1;
	};
})), nS = /* @__PURE__ */ P(((e, t) => {
	var n = Array.prototype, r = n.concat, i = n.slice, a = tS();
	function o(e) {
		var t = {}, o = r.apply(n, i.call(arguments, 1));
		for (var s in e) a(o, s) === -1 && (t[s] = e[s]);
		return t;
	}
	t.exports = o;
})), rS = /* @__PURE__ */ P(((e, t) => {
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
})), iS = /* @__PURE__ */ P(((e, t) => {
	t.exports = rS();
})), aS = /* @__PURE__ */ P(((e, t) => {
	var n = iS();
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
				case "j": return i(Math.ceil((e.getTime() - new Date(e.getFullYear(), 0, 1).getTime()) / (1e3 * 60 * 60 * 24)), 3);
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
})), oS = /* @__PURE__ */ P(((e, t) => {
	t.exports = function(e, t) {
		var n;
		return t === 0 && "zero" in e && (n = "zero"), n ||= t === 1 ? "one" : "other", e[n];
	};
})), sS = /* @__PURE__ */ P(((e, t) => {
	t.exports = { counterpart: {
		names: rS(),
		pluralize: oS(),
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
})), cS = /* @__PURE__ */ Ee((/* @__PURE__ */ P(((e, t) => {
	var n = Xb(), r = Qx().isArray, i = Qx().isDate, a = $x().sprintf, o = eS(), s = nS(), c = aS(), l = "counterpart";
	function u(e) {
		return typeof e == "string" || Object.prototype.toString.call(e) === "[object String]";
	}
	function d(e) {
		return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
	}
	function f(e) {
		return e === null ? !1 : Object.prototype.toString.call(e) === "[object Object]";
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
		}, this.registerTranslations("en", sS()), this.setMaxListeners(0);
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
			} else {
				if (e == null) return [];
				for (var i = e.split(t), a = i.length - 1; a >= 0; a--) i[a] === "" && (i.splice(a, 1), this._registry.keepTrailingDot === !0 && a == i.length && (i[i.length - 1] += "" + t));
				return i;
			}
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
		} else return this._resolve(e, t, n, i, a);
	};
	var _ = new g();
	function v() {
		return _.translate.apply(_, arguments);
	}
	n(v, _, {
		Instance: g,
		Translator: g
	}), t.exports = v;
})))(), 1), lS = "i18n/";
cS.default.setSeparator("|");
var uS = "en";
cS.default.setFallbackLocale(uS);
function dS(e, t) {
	cS.default.registerTranslations(e, t);
}
function fS(e) {
	cS.default.setMissingEntryGenerator(e);
}
function pS() {
	return cS.default.getLocale();
}
function mS(e) {
	return cS.default.setLocale(e);
}
function hS(e) {
	return e;
}
function gS(e) {
	return typeof e == "string" && !e.startsWith("missing translation:");
}
var _S = (e, t) => {
	let n = cS.default.translate(e, {
		...t,
		fallbackLocale: cS.default.getLocale()
	});
	if (gS(n)) return { translated: n };
	let r = cS.default.translate(e, {
		...t,
		locale: uS
	});
	return gS(r) ? {
		translated: r,
		isFallback: !0
	} : {
		translated: e,
		isFallback: !0
	};
};
function vS(e, t) {
	let n = {
		...t,
		interpolate: !1
	};
	return n && typeof n == "object" && Object.keys(n).forEach((e) => {
		n[e] === void 0 && (console.warn("safeCounterpartTranslate called with undefined interpolation name: " + e), n[e] = "undefined"), n[e] === null && (console.warn("safeCounterpartTranslate called with null interpolation name: " + e), n[e] = "null");
	}), _S(e, n);
}
var yS = (e, t) => e;
function q(e, t, n) {
	let { translated: r } = vS(e, t);
	return yS(CS(r, t, n), e);
}
function bS(e) {
	return vS(e, {}).translated;
}
function xS(e, n, r) {
	let { translated: i, isFallback: a } = vS(e, n), o = CS(i, n, r);
	return yS(a ? /* @__PURE__ */ t.createElement("span", { lang: "en" }, o) : o, e);
}
function SS(e) {
	return e.replace(/%\(([^)]*)\)/g, "%\xA0($1)");
}
function CS(e, t, n) {
	let r = e;
	if (t !== void 0) {
		let e = {};
		for (let n in t) e[`%\\(${n}\\)s`] = t[n];
		r = wS(r, e);
	}
	if (n !== void 0) {
		let e = {};
		for (let t in n) e[`(<${t}>(.*?)<\\/${t}>|<${t}>|<${t}\\s*\\/>)`] = n[t];
		r = wS(r, e);
	}
	return r;
}
function wS(e, n) {
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
async function TS(e) {
	let t = await DS(), n = e in t ? e : "en", r = await ES(lS + t[n]);
	cS.default.registerTranslations(n, r), cS.default.setLocale(n);
}
async function ES(e) {
	console.log("Loading language from", e);
	let t = await fetch(e, { method: "GET" });
	if (!t.ok) throw Error(`Failed to load ${e}, got ${t.status}`);
	return t.json();
}
async function DS() {
	let e = lS + "languages.json", t = await fetch(e, { method: "GET" });
	if (!t.ok) throw Error(`Failed to load ${e}, got ${t.status}`);
	return t.json();
}
//#endregion
//#region src/room/composer/Banner/Banner.tsx
function OS({ type: e, children: n, avatar: r, className: i, actions: a, onClose: o, ...s }) {
	let c = (0, V.default)(Kb.banner, i), l = p(() => {
		switch (e) {
			case "critical": return /* @__PURE__ */ t.createElement(Ub, { fontSize: 24 });
			case "info": return /* @__PURE__ */ t.createElement(Gb, { fontSize: 24 });
			case "success": return /* @__PURE__ */ t.createElement(Vb, { fontSize: 24 });
			default: return /* @__PURE__ */ t.createElement(Gb, { fontSize: 24 });
		}
	}, [e]);
	return /* @__PURE__ */ t.createElement("div", {
		...s,
		className: c,
		"data-type": e
	}, /* @__PURE__ */ t.createElement("div", { className: Kb.icon }, r ?? l), /* @__PURE__ */ t.createElement("div", { className: Kb.content }, n), /* @__PURE__ */ t.createElement("div", { className: Kb.actions }, a, o && /* @__PURE__ */ t.createElement(y, {
		kind: "secondary",
		size: "sm",
		onClick: o
	}, q("action|dismiss"))));
}
//#endregion
//#region src/crypto/SasEmoji/SasEmojiTranslate.ts
var kS = new Map((/* @__PURE__ */ JSON.parse("[{\"number\":0,\"emoji\":\"🐶\",\"description\":\"Dog\",\"unicode\":\"U+1F436\",\"translated_descriptions\":{\"ar\":\"كلب\",\"bg\":\"Куче\",\"ca\":\"Gos\",\"cs\":\"Pes\",\"de\":\"Hund\",\"eo\":\"Hundo\",\"es\":\"Perro\",\"et\":\"Koer\",\"fa\":\"سگ\",\"fi\":\"Koira\",\"fr\":\"Chien\",\"hr\":\"pas\",\"hu\":\"Kutya\",\"id\":\"Anjing\",\"it\":\"Cane\",\"ja\":\"犬\",\"nb_NO\":\"Hund\",\"nl\":\"Hond\",\"pt\":\"Cão\",\"pt_BR\":\"Cachorro\",\"ru\":\"Собака\",\"si\":\"බල්ලා\",\"sk\":\"Pes\",\"sq\":\"Qen\",\"sr\":\"пас\",\"sv\":\"Hund\",\"szl\":null,\"tzm\":\"Aydi\",\"uk\":\"Пес\",\"vi\":\"Chó\",\"zh_Hans\":\"狗\",\"zh_Hant\":\"狗\"}},{\"number\":1,\"emoji\":\"🐱\",\"description\":\"Cat\",\"unicode\":\"U+1F431\",\"translated_descriptions\":{\"ar\":\"هِرَّة\",\"bg\":\"Котка\",\"ca\":\"Gat\",\"cs\":\"Kočka\",\"de\":\"Katze\",\"eo\":\"Kato\",\"es\":\"Gato\",\"et\":\"Kass\",\"fa\":\"گربه\",\"fi\":\"Kissa\",\"fr\":\"Chat\",\"hr\":\"mačka\",\"hu\":\"Macska\",\"id\":\"Kucing\",\"it\":\"Gatto\",\"ja\":\"猫\",\"nb_NO\":\"Katt\",\"nl\":\"Kat\",\"pt\":\"Gato\",\"pt_BR\":\"Gato\",\"ru\":\"Кошка\",\"si\":\"පූසා\",\"sk\":\"Mačka\",\"sq\":\"Mace\",\"sr\":\"мачка\",\"sv\":\"Katt\",\"szl\":null,\"tzm\":\"Amuc\",\"uk\":\"Кіт\",\"vi\":\"Mèo\",\"zh_Hans\":\"猫\",\"zh_Hant\":\"貓\"}},{\"number\":2,\"emoji\":\"🦁\",\"description\":\"Lion\",\"unicode\":\"U+1F981\",\"translated_descriptions\":{\"ar\":\"أَسَد\",\"bg\":\"Лъв\",\"ca\":\"Lleó\",\"cs\":\"Lev\",\"de\":\"Löwe\",\"eo\":\"Leono\",\"es\":\"León\",\"et\":\"Lõvi\",\"fa\":\"شیر\",\"fi\":\"Leijona\",\"fr\":\"Lion\",\"hr\":\"lav\",\"hu\":\"Oroszlán\",\"id\":\"Singa\",\"it\":\"Leone\",\"ja\":\"ライオン\",\"nb_NO\":\"Løve\",\"nl\":\"Leeuw\",\"pt\":\"Leão\",\"pt_BR\":\"Leão\",\"ru\":\"Лев\",\"si\":\"සිංහයා\",\"sk\":\"Lev\",\"sq\":\"Luan\",\"sr\":\"лав\",\"sv\":\"Lejon\",\"szl\":null,\"tzm\":\"Izem\",\"uk\":\"Лев\",\"vi\":\"Sư tử\",\"zh_Hans\":\"狮子\",\"zh_Hant\":\"獅子\"}},{\"number\":3,\"emoji\":\"🐎\",\"description\":\"Horse\",\"unicode\":\"U+1F40E\",\"translated_descriptions\":{\"ar\":\"حِصَان\",\"bg\":\"Кон\",\"ca\":\"Cavall\",\"cs\":\"Kůň\",\"de\":\"Pferd\",\"eo\":\"Ĉevalo\",\"es\":\"Caballo\",\"et\":\"Hobune\",\"fa\":\"اسب\",\"fi\":\"Hevonen\",\"fr\":\"Cheval\",\"hr\":\"konj\",\"hu\":\"Ló\",\"id\":\"Kuda\",\"it\":\"Cavallo\",\"ja\":\"馬\",\"nb_NO\":\"Hest\",\"nl\":\"Paard\",\"pt\":\"Cavalo\",\"pt_BR\":\"Cavalo\",\"ru\":\"Лошадь\",\"si\":\"අශ්වයා\",\"sk\":\"Kôň\",\"sq\":\"Kalë\",\"sr\":\"коњ\",\"sv\":\"Häst\",\"szl\":null,\"tzm\":\"Ayyis\",\"uk\":\"Кінь\",\"vi\":\"Ngựa\",\"zh_Hans\":\"马\",\"zh_Hant\":\"馬\"}},{\"number\":4,\"emoji\":\"🦄\",\"description\":\"Unicorn\",\"unicode\":\"U+1F984\",\"translated_descriptions\":{\"ar\":\"حصان وحيد القرن\",\"bg\":\"Еднорог\",\"ca\":\"Unicorn\",\"cs\":\"Jednorožec\",\"de\":\"Einhorn\",\"eo\":\"Unukorno\",\"es\":\"Unicornio\",\"et\":\"Ükssarvik\",\"fa\":\"تک شاخ\",\"fi\":\"Yksisarvinen\",\"fr\":\"Licorne\",\"hr\":\"jednorog\",\"hu\":\"Egyszarvú\",\"id\":\"Unicorn\",\"it\":\"Unicorno\",\"ja\":\"ユニコーン\",\"nb_NO\":\"Enhjørning\",\"nl\":\"Eenhoorn\",\"pt\":\"Unicórnio\",\"pt_BR\":\"Unicórnio\",\"ru\":\"Единорог\",\"si\":null,\"sk\":\"Jednorožec\",\"sq\":\"Njëbrirësh\",\"sr\":\"једнорог\",\"sv\":\"Enhörning\",\"szl\":null,\"tzm\":null,\"uk\":\"Єдиноріг\",\"vi\":\"Kỳ lân\",\"zh_Hans\":\"独角兽\",\"zh_Hant\":\"獨角獸\"}},{\"number\":5,\"emoji\":\"🐷\",\"description\":\"Pig\",\"unicode\":\"U+1F437\",\"translated_descriptions\":{\"ar\":\"خِنزِير\",\"bg\":\"Прасе\",\"ca\":\"Porc\",\"cs\":\"Prase\",\"de\":\"Schwein\",\"eo\":\"Porko\",\"es\":\"Cerdo\",\"et\":\"Siga\",\"fa\":\"خوک\",\"fi\":\"Sika\",\"fr\":\"Cochon\",\"hr\":\"svinja\",\"hu\":\"Malac\",\"id\":\"Babi\",\"it\":\"Maiale\",\"ja\":\"ブタ\",\"nb_NO\":\"Gris\",\"nl\":\"Varken\",\"pt\":\"Porco\",\"pt_BR\":\"Porco\",\"ru\":\"Свинья\",\"si\":null,\"sk\":\"Prasa\",\"sq\":\"Derr\",\"sr\":\"прасе\",\"sv\":\"Gris\",\"szl\":null,\"tzm\":\"Ilef\",\"uk\":\"Свиня\",\"vi\":\"Heo\",\"zh_Hans\":\"猪\",\"zh_Hant\":\"豬\"}},{\"number\":6,\"emoji\":\"🐘\",\"description\":\"Elephant\",\"unicode\":\"U+1F418\",\"translated_descriptions\":{\"ar\":\"فِيل\",\"bg\":\"Слон\",\"ca\":\"Elefant\",\"cs\":\"Slon\",\"de\":\"Elefant\",\"eo\":\"Elefanto\",\"es\":\"Elefante\",\"et\":\"Elevant\",\"fa\":\"فیل\",\"fi\":\"Norsu\",\"fr\":\"Éléphant\",\"hr\":\"slon\",\"hu\":\"Elefánt\",\"id\":\"Gajah\",\"it\":\"Elefante\",\"ja\":\"ゾウ\",\"nb_NO\":\"Elefant\",\"nl\":\"Olifant\",\"pt\":\"Elefante\",\"pt_BR\":\"Elefante\",\"ru\":\"Слон\",\"si\":null,\"sk\":\"Slon\",\"sq\":\"Elefant\",\"sr\":\"слон\",\"sv\":\"Elefant\",\"szl\":null,\"tzm\":\"Ilu\",\"uk\":\"Слон\",\"vi\":\"Voi\",\"zh_Hans\":\"大象\",\"zh_Hant\":\"大象\"}},{\"number\":7,\"emoji\":\"🐰\",\"description\":\"Rabbit\",\"unicode\":\"U+1F430\",\"translated_descriptions\":{\"ar\":\"أَرنَب\",\"bg\":\"Заек\",\"ca\":\"Conill\",\"cs\":\"Králík\",\"de\":\"Hase\",\"eo\":\"Kuniklo\",\"es\":\"Conejo\",\"et\":\"Jänes\",\"fa\":\"خرگوش\",\"fi\":\"Kani\",\"fr\":\"Lapin\",\"hr\":\"zec\",\"hu\":\"Nyúl\",\"id\":\"Kelinci\",\"it\":\"Coniglio\",\"ja\":\"うさぎ\",\"nb_NO\":\"Kanin\",\"nl\":\"Konijn\",\"pt\":\"Coelho\",\"pt_BR\":\"Coelho\",\"ru\":\"Кролик\",\"si\":null,\"sk\":\"Zajac\",\"sq\":\"Lepur\",\"sr\":\"зец\",\"sv\":\"Kanin\",\"szl\":null,\"tzm\":\"Agnin\",\"uk\":\"Кріль\",\"vi\":\"Thỏ\",\"zh_Hans\":\"兔子\",\"zh_Hant\":\"兔子\"}},{\"number\":8,\"emoji\":\"🐼\",\"description\":\"Panda\",\"unicode\":\"U+1F43C\",\"translated_descriptions\":{\"ar\":\"باندَا\",\"bg\":\"Панда\",\"ca\":\"Panda\",\"cs\":\"Panda\",\"de\":\"Panda\",\"eo\":\"Pando\",\"es\":\"Panda\",\"et\":\"Panda\",\"fa\":\"پاندا\",\"fi\":\"Panda\",\"fr\":\"Panda\",\"hr\":\"panda\",\"hu\":\"Panda\",\"id\":\"Panda\",\"it\":\"Panda\",\"ja\":\"パンダ\",\"nb_NO\":\"Panda\",\"nl\":\"Panda\",\"pt\":\"Panda\",\"pt_BR\":\"Panda\",\"ru\":\"Панда\",\"si\":null,\"sk\":\"Panda\",\"sq\":\"Panda\",\"sr\":\"панда\",\"sv\":\"Panda\",\"szl\":null,\"tzm\":null,\"uk\":\"Панда\",\"vi\":\"Gấu trúc\",\"zh_Hans\":\"熊猫\",\"zh_Hant\":\"熊貓\"}},{\"number\":9,\"emoji\":\"🐓\",\"description\":\"Rooster\",\"unicode\":\"U+1F413\",\"translated_descriptions\":{\"ar\":\"دِيك\",\"bg\":\"Петел\",\"ca\":\"Gall\",\"cs\":\"Kohout\",\"de\":\"Hahn\",\"eo\":\"Virkoko\",\"es\":\"Gallo\",\"et\":\"Kukk\",\"fa\":\"خروس\",\"fi\":\"Kukko\",\"fr\":\"Coq\",\"hr\":\"kokot\",\"hu\":\"Kakas\",\"id\":\"Ayam\",\"it\":\"Gallo\",\"ja\":\"ニワトリ\",\"nb_NO\":\"Hane\",\"nl\":\"Haan\",\"pt\":\"Galo\",\"pt_BR\":\"Galo\",\"ru\":\"Петух\",\"si\":null,\"sk\":\"Kohút\",\"sq\":\"Këndes\",\"sr\":\"петао\",\"sv\":\"Tupp\",\"szl\":null,\"tzm\":\"Ayaẓiḍ\",\"uk\":\"Когут\",\"vi\":\"Gà trống\",\"zh_Hans\":\"公鸡\",\"zh_Hant\":\"公雞\"}},{\"number\":10,\"emoji\":\"🐧\",\"description\":\"Penguin\",\"unicode\":\"U+1F427\",\"translated_descriptions\":{\"ar\":\"بطريق\",\"bg\":\"Пингвин\",\"ca\":\"Pingüí\",\"cs\":\"Tučňák\",\"de\":\"Pinguin\",\"eo\":\"Pingveno\",\"es\":\"Pingüino\",\"et\":\"Pingviin\",\"fa\":\"پنگوئن\",\"fi\":\"Pingviini\",\"fr\":\"Manchot\",\"hr\":\"pingvin\",\"hu\":\"Pingvin\",\"id\":\"Penguin\",\"it\":\"Pinguino\",\"ja\":\"ペンギン\",\"nb_NO\":\"Pingvin\",\"nl\":\"Pinguïn\",\"pt\":\"Pinguim\",\"pt_BR\":\"Pinguim\",\"ru\":\"Пингвин\",\"si\":null,\"sk\":\"Tučniak\",\"sq\":\"Pinguin\",\"sr\":\"пингвин\",\"sv\":\"Pingvin\",\"szl\":null,\"tzm\":null,\"uk\":\"Пінгвін\",\"vi\":\"Chim cánh cụt\",\"zh_Hans\":\"企鹅\",\"zh_Hant\":\"企鵝\"}},{\"number\":11,\"emoji\":\"🐢\",\"description\":\"Turtle\",\"unicode\":\"U+1F422\",\"translated_descriptions\":{\"ar\":\"سُلحفاة\",\"bg\":\"Костенурка\",\"ca\":\"Tortuga\",\"cs\":\"Želva\",\"de\":\"Schildkröte\",\"eo\":\"Testudo\",\"es\":\"Tortuga\",\"et\":\"Kilpkonn\",\"fa\":\"لاک‌پشت\",\"fi\":\"Kilpikonna\",\"fr\":\"Tortue\",\"hr\":\"kornjača\",\"hu\":\"Teknős\",\"id\":\"Kura-Kura\",\"it\":\"Tartaruga\",\"ja\":\"亀\",\"nb_NO\":\"Skilpadde\",\"nl\":\"Schildpad\",\"pt\":\"Tartaruga\",\"pt_BR\":\"Tartaruga\",\"ru\":\"Черепаха\",\"si\":null,\"sk\":\"Korytnačka\",\"sq\":\"Breshkë\",\"sr\":\"корњача\",\"sv\":\"Sköldpadda\",\"szl\":null,\"tzm\":\"Ifker\",\"uk\":\"Черепаха\",\"vi\":\"Rùa\",\"zh_Hans\":\"乌龟\",\"zh_Hant\":\"烏龜\"}},{\"number\":12,\"emoji\":\"🐟\",\"description\":\"Fish\",\"unicode\":\"U+1F41F\",\"translated_descriptions\":{\"ar\":\"سَمَكة\",\"bg\":\"Риба\",\"ca\":\"Peix\",\"cs\":\"Ryba\",\"de\":\"Fisch\",\"eo\":\"Fiŝo\",\"es\":\"Pez\",\"et\":\"Kala\",\"fa\":\"ماهی\",\"fi\":\"Kala\",\"fr\":\"Poisson\",\"hr\":\"riba\",\"hu\":\"Hal\",\"id\":\"Ikan\",\"it\":\"Pesce\",\"ja\":\"魚\",\"nb_NO\":\"Fisk\",\"nl\":\"Vis\",\"pt\":\"Peixe\",\"pt_BR\":\"Peixe\",\"ru\":\"Рыба\",\"si\":null,\"sk\":\"Ryba\",\"sq\":\"Peshk\",\"sr\":\"риба\",\"sv\":\"Fisk\",\"szl\":null,\"tzm\":\"Aselm\",\"uk\":\"Риба\",\"vi\":\"Cá\",\"zh_Hans\":\"鱼\",\"zh_Hant\":\"魚\"}},{\"number\":13,\"emoji\":\"🐙\",\"description\":\"Octopus\",\"unicode\":\"U+1F419\",\"translated_descriptions\":{\"ar\":\"أُخطُبُوط\",\"bg\":\"Октопод\",\"ca\":\"Pop\",\"cs\":\"Chobotnice\",\"de\":\"Oktopus\",\"eo\":\"Polpo\",\"es\":\"Pulpo\",\"et\":\"Kaheksajalg\",\"fa\":\"اختاپوس\",\"fi\":\"Tursas\",\"fr\":\"Poulpe\",\"hr\":\"hobotnica\",\"hu\":\"Polip\",\"id\":\"Gurita\",\"it\":\"Polpo\",\"ja\":\"たこ\",\"nb_NO\":\"Blekksprut\",\"nl\":\"Octopus\",\"pt\":\"Polvo\",\"pt_BR\":\"Polvo\",\"ru\":\"Осьминог\",\"si\":null,\"sk\":\"Chobotnica\",\"sq\":\"Oktapod\",\"sr\":\"октопод\",\"sv\":\"Bläckfisk\",\"szl\":null,\"tzm\":null,\"uk\":\"Восьминіг\",\"vi\":\"Bạch tuộc\",\"zh_Hans\":\"章鱼\",\"zh_Hant\":\"章魚\"}},{\"number\":14,\"emoji\":\"🦋\",\"description\":\"Butterfly\",\"unicode\":\"U+1F98B\",\"translated_descriptions\":{\"ar\":\"فَرَاشَة\",\"bg\":\"Пеперуда\",\"ca\":\"Papallona\",\"cs\":\"Motýl\",\"de\":\"Schmetterling\",\"eo\":\"Papilio\",\"es\":\"Mariposa\",\"et\":\"Liblikas\",\"fa\":\"پروانه\",\"fi\":\"Perhonen\",\"fr\":\"Papillon\",\"hr\":\"leptir\",\"hu\":\"Pillangó\",\"id\":\"Kupu-Kupu\",\"it\":\"Farfalla\",\"ja\":\"ちょうちょ\",\"nb_NO\":\"Sommerfugl\",\"nl\":\"Vlinder\",\"pt\":\"Borboleta\",\"pt_BR\":\"Borboleta\",\"ru\":\"Бабочка\",\"si\":null,\"sk\":\"Motýľ\",\"sq\":\"Flutur\",\"sr\":\"лептир\",\"sv\":\"Fjäril\",\"szl\":null,\"tzm\":null,\"uk\":\"Метелик\",\"vi\":\"Bướm\",\"zh_Hans\":\"蝴蝶\",\"zh_Hant\":\"蝴蝶\"}},{\"number\":15,\"emoji\":\"🌷\",\"description\":\"Flower\",\"unicode\":\"U+1F337\",\"translated_descriptions\":{\"ar\":\"زَهرَة\",\"bg\":\"Цвете\",\"ca\":\"Flor\",\"cs\":\"Květina\",\"de\":\"Blume\",\"eo\":\"Floro\",\"es\":\"Flor\",\"et\":\"Lill\",\"fa\":\"گل\",\"fi\":\"Kukka\",\"fr\":\"Fleur\",\"hr\":\"svijet\",\"hu\":\"Virág\",\"id\":\"Bunga\",\"it\":\"Fiore\",\"ja\":\"花\",\"nb_NO\":\"Blomst\",\"nl\":\"Bloem\",\"pt\":\"Flor\",\"pt_BR\":\"Flor\",\"ru\":\"Цветок\",\"si\":null,\"sk\":\"Kvet\",\"sq\":\"Lule\",\"sr\":\"цвет\",\"sv\":\"Blomma\",\"szl\":null,\"tzm\":null,\"uk\":\"Квітка\",\"vi\":\"Hoa\",\"zh_Hans\":\"花\",\"zh_Hant\":\"花\"}},{\"number\":16,\"emoji\":\"🌳\",\"description\":\"Tree\",\"unicode\":\"U+1F333\",\"translated_descriptions\":{\"ar\":\"شَجَرَة\",\"bg\":\"Дърво\",\"ca\":\"Arbre\",\"cs\":\"Strom\",\"de\":\"Baum\",\"eo\":\"Arbo\",\"es\":\"Árbol\",\"et\":\"Puu\",\"fa\":\"درخت\",\"fi\":\"Puu\",\"fr\":\"Arbre\",\"hr\":\"drvo\",\"hu\":\"Fa\",\"id\":\"Pohon\",\"it\":\"Albero\",\"ja\":\"木\",\"nb_NO\":\"Tre\",\"nl\":\"Boom\",\"pt\":\"Árvore\",\"pt_BR\":\"Árvore\",\"ru\":\"Дерево\",\"si\":null,\"sk\":\"Strom\",\"sq\":\"Pemë\",\"sr\":\"дрво\",\"sv\":\"Träd\",\"szl\":null,\"tzm\":\"Aseklu\",\"uk\":\"Дерево\",\"vi\":\"Cây\",\"zh_Hans\":\"树\",\"zh_Hant\":\"樹\"}},{\"number\":17,\"emoji\":\"🌵\",\"description\":\"Cactus\",\"unicode\":\"U+1F335\",\"translated_descriptions\":{\"ar\":\"صبار\",\"bg\":\"Кактус\",\"ca\":\"Cactus\",\"cs\":\"Kaktus\",\"de\":\"Kaktus\",\"eo\":\"Kakto\",\"es\":\"Cactus\",\"et\":\"Kaktus\",\"fa\":\"کاکتوس\",\"fi\":\"Kaktus\",\"fr\":\"Cactus\",\"hr\":\"kaktus\",\"hu\":\"Kaktusz\",\"id\":\"Kaktus\",\"it\":\"Cactus\",\"ja\":\"サボテン\",\"nb_NO\":\"Kaktus\",\"nl\":\"Cactus\",\"pt\":\"Cato\",\"pt_BR\":\"Cacto\",\"ru\":\"Кактус\",\"si\":null,\"sk\":\"Kaktus\",\"sq\":\"Kaktus\",\"sr\":\"кактус\",\"sv\":\"Kaktus\",\"szl\":null,\"tzm\":null,\"uk\":\"Кактус\",\"vi\":\"Xương rồng\",\"zh_Hans\":\"仙人掌\",\"zh_Hant\":\"仙人掌\"}},{\"number\":18,\"emoji\":\"🍄\",\"description\":\"Mushroom\",\"unicode\":\"U+1F344\",\"translated_descriptions\":{\"ar\":\"فُطر\",\"bg\":\"Гъба\",\"ca\":\"Bolet\",\"cs\":\"Houba\",\"de\":\"Pilz\",\"eo\":\"Fungo\",\"es\":\"Seta\",\"et\":\"Seen\",\"fa\":\"قارچ\",\"fi\":\"Sieni\",\"fr\":\"Champignon\",\"hr\":\"gljiva\",\"hu\":\"Gomba\",\"id\":\"Jamur\",\"it\":\"Fungo\",\"ja\":\"きのこ\",\"nb_NO\":\"Sopp\",\"nl\":\"Paddenstoel\",\"pt\":\"Cogumelo\",\"pt_BR\":\"Cogumelo\",\"ru\":\"Гриб\",\"si\":null,\"sk\":\"Huba\",\"sq\":\"Kërpudhë\",\"sr\":\"печурка\",\"sv\":\"Svamp\",\"szl\":null,\"tzm\":\"Agursel\",\"uk\":\"Гриб\",\"vi\":\"Nấm\",\"zh_Hans\":\"蘑菇\",\"zh_Hant\":\"蘑菇\"}},{\"number\":19,\"emoji\":\"🌏\",\"description\":\"Globe\",\"unicode\":\"U+1F30F\",\"translated_descriptions\":{\"ar\":\"كُرَةٌ أرضِيَّة\",\"bg\":\"Глобус\",\"ca\":\"Globus terraqüi\",\"cs\":\"Zeměkoule\",\"de\":\"Globus\",\"eo\":\"Globo\",\"es\":\"Globo\",\"et\":\"Maakera\",\"fa\":\"زمین\",\"fi\":\"Maapallo\",\"fr\":\"Globe\",\"hr\":\"Globus\",\"hu\":\"Földgömb\",\"id\":\"Bola Dunia\",\"it\":\"Globo\",\"ja\":\"地球\",\"nb_NO\":\"Globus\",\"nl\":\"Wereldbol\",\"pt\":\"Globo\",\"pt_BR\":\"Globo\",\"ru\":\"Глобус\",\"si\":null,\"sk\":\"Zemeguľa\",\"sq\":\"Rruzull\",\"sr\":\"глобус\",\"sv\":\"Jordklot\",\"szl\":null,\"tzm\":null,\"uk\":\"Глобус\",\"vi\":\"Địa cầu\",\"zh_Hans\":\"地球\",\"zh_Hant\":\"地球\"}},{\"number\":20,\"emoji\":\"🌙\",\"description\":\"Moon\",\"unicode\":\"U+1F319\",\"translated_descriptions\":{\"ar\":\"قَمَر\",\"bg\":\"Луна\",\"ca\":\"Lluna\",\"cs\":\"Měsíc\",\"de\":\"Mond\",\"eo\":\"Luno\",\"es\":\"Luna\",\"et\":\"Kuu\",\"fa\":\"ماه\",\"fi\":\"Kuu\",\"fr\":\"Lune\",\"hr\":\"mjesec\",\"hu\":\"Hold\",\"id\":\"Bulan\",\"it\":\"Luna\",\"ja\":\"月\",\"nb_NO\":\"Måne\",\"nl\":\"Maan\",\"pt\":\"Lua\",\"pt_BR\":\"Lua\",\"ru\":\"Луна\",\"si\":null,\"sk\":\"Mesiac\",\"sq\":\"Hënë\",\"sr\":\"месец\",\"sv\":\"Måne\",\"szl\":null,\"tzm\":\"Ayyur\",\"uk\":\"Місяць\",\"vi\":\"Mặt trăng\",\"zh_Hans\":\"月亮\",\"zh_Hant\":\"月亮\"}},{\"number\":21,\"emoji\":\"☁️\",\"description\":\"Cloud\",\"unicode\":\"U+2601U+FE0F\",\"translated_descriptions\":{\"ar\":\"سَحابَة\",\"bg\":\"Облак\",\"ca\":\"Núvol\",\"cs\":\"Mrak\",\"de\":\"Wolke\",\"eo\":\"Nubo\",\"es\":\"Nube\",\"et\":\"Pilv\",\"fa\":\"ابر\",\"fi\":\"Pilvi\",\"fr\":\"Nuage\",\"hr\":\"oblak\",\"hu\":\"Felhő\",\"id\":\"Awan\",\"it\":\"Nuvola\",\"ja\":\"雲\",\"nb_NO\":\"Sky\",\"nl\":\"Wolk\",\"pt\":\"Nuvem\",\"pt_BR\":\"Nuvem\",\"ru\":\"Облако\",\"si\":null,\"sk\":\"Oblak\",\"sq\":\"Re\",\"sr\":\"облак\",\"sv\":\"Moln\",\"szl\":null,\"tzm\":null,\"uk\":\"Хмара\",\"vi\":\"Mây\",\"zh_Hans\":\"云\",\"zh_Hant\":\"雲朵\"}},{\"number\":22,\"emoji\":\"🔥\",\"description\":\"Fire\",\"unicode\":\"U+1F525\",\"translated_descriptions\":{\"ar\":\"نار\",\"bg\":\"Огън\",\"ca\":\"Foc\",\"cs\":\"Oheň\",\"de\":\"Feuer\",\"eo\":\"Fajro\",\"es\":\"Fuego\",\"et\":\"Tuli\",\"fa\":\"آتش\",\"fi\":\"Tuli\",\"fr\":\"Feu\",\"hr\":\"vatra\",\"hu\":\"Tűz\",\"id\":\"Api\",\"it\":\"Fuoco\",\"ja\":\"炎\",\"nb_NO\":\"Flamme\",\"nl\":\"Vuur\",\"pt\":\"Fogo\",\"pt_BR\":\"Fogo\",\"ru\":\"Огонь\",\"si\":null,\"sk\":\"Oheň\",\"sq\":\"Zjarr\",\"sr\":\"ватра\",\"sv\":\"Eld\",\"szl\":null,\"tzm\":\"Timessi\",\"uk\":\"Вогонь\",\"vi\":\"Lửa\",\"zh_Hans\":\"火\",\"zh_Hant\":\"火\"}},{\"number\":23,\"emoji\":\"🍌\",\"description\":\"Banana\",\"unicode\":\"U+1F34C\",\"translated_descriptions\":{\"ar\":\"مَوزَة\",\"bg\":\"Банан\",\"ca\":\"Plàtan\",\"cs\":\"Banán\",\"de\":\"Banane\",\"eo\":\"Banano\",\"es\":\"Plátano\",\"et\":\"Banaan\",\"fa\":\"موز\",\"fi\":\"Banaani\",\"fr\":\"Banane\",\"hr\":\"banana\",\"hu\":\"Banán\",\"id\":\"Pisang\",\"it\":\"Banana\",\"ja\":\"バナナ\",\"nb_NO\":\"Banan\",\"nl\":\"Banaan\",\"pt\":\"Banana\",\"pt_BR\":\"Banana\",\"ru\":\"Банан\",\"si\":null,\"sk\":\"Banán\",\"sq\":\"Banane\",\"sr\":\"банана\",\"sv\":\"Banan\",\"szl\":null,\"tzm\":\"Tabanant\",\"uk\":\"Банан\",\"vi\":\"Chuối\",\"zh_Hans\":\"香蕉\",\"zh_Hant\":\"香蕉\"}},{\"number\":24,\"emoji\":\"🍎\",\"description\":\"Apple\",\"unicode\":\"U+1F34E\",\"translated_descriptions\":{\"ar\":\"تُفَّاحَة\",\"bg\":\"Ябълка\",\"ca\":\"Poma\",\"cs\":\"Jablko\",\"de\":\"Apfel\",\"eo\":\"Pomo\",\"es\":\"Manzana\",\"et\":\"Õun\",\"fa\":\"سیب\",\"fi\":\"Omena\",\"fr\":\"Pomme\",\"hr\":\"jabuka\",\"hu\":\"Alma\",\"id\":\"Apel\",\"it\":\"Mela\",\"ja\":\"リンゴ\",\"nb_NO\":\"Eple\",\"nl\":\"Appel\",\"pt\":\"Maçã\",\"pt_BR\":\"Maçã\",\"ru\":\"Яблоко\",\"si\":null,\"sk\":\"Jablko\",\"sq\":\"Mollë\",\"sr\":\"јабука\",\"sv\":\"Äpple\",\"szl\":null,\"tzm\":\"Tadeffuyt\",\"uk\":\"Яблуко\",\"vi\":\"Táo\",\"zh_Hans\":\"苹果\",\"zh_Hant\":\"蘋果\"}},{\"number\":25,\"emoji\":\"🍓\",\"description\":\"Strawberry\",\"unicode\":\"U+1F353\",\"translated_descriptions\":{\"ar\":\"فَراوِلَة\",\"bg\":\"Ягода\",\"ca\":\"Maduixa\",\"cs\":\"Jahoda\",\"de\":\"Erdbeere\",\"eo\":\"Frago\",\"es\":\"Fresa\",\"et\":\"Maasikas\",\"fa\":\"توت فرنگی\",\"fi\":\"Mansikka\",\"fr\":\"Fraise\",\"hr\":\"jagoda\",\"hu\":\"Eper\",\"id\":\"Stroberi\",\"it\":\"Fragola\",\"ja\":\"いちご\",\"nb_NO\":\"Jordbær\",\"nl\":\"Aardbei\",\"pt\":\"Morango\",\"pt_BR\":\"Morango\",\"ru\":\"Клубника\",\"si\":null,\"sk\":\"Jahoda\",\"sq\":\"Luleshtrydhe\",\"sr\":\"јагода\",\"sv\":\"Jordgubbe\",\"szl\":null,\"tzm\":null,\"uk\":\"Полуниця\",\"vi\":\"Dâu tây\",\"zh_Hans\":\"草莓\",\"zh_Hant\":\"草莓\"}},{\"number\":26,\"emoji\":\"🌽\",\"description\":\"Corn\",\"unicode\":\"U+1F33D\",\"translated_descriptions\":{\"ar\":\"ذُرَة\",\"bg\":\"Царевица\",\"ca\":\"Blat de moro\",\"cs\":\"Kukuřice\",\"de\":\"Mais\",\"eo\":\"Maizo\",\"es\":\"Maíz\",\"et\":\"Mais\",\"fa\":\"ذرت\",\"fi\":\"Maissi\",\"fr\":\"Maïs\",\"hr\":\"kukuruza\",\"hu\":\"Kukorica\",\"id\":\"Jagung\",\"it\":\"Mais\",\"ja\":\"とうもろこし\",\"nb_NO\":\"Mais\",\"nl\":\"Maïs\",\"pt\":\"Milho\",\"pt_BR\":\"Milho\",\"ru\":\"Кукуруза\",\"si\":null,\"sk\":\"Kukurica\",\"sq\":\"Misër\",\"sr\":\"кукуруз\",\"sv\":\"Majs\",\"szl\":null,\"tzm\":null,\"uk\":\"Кукурудза\",\"vi\":\"Bắp\",\"zh_Hans\":\"玉米\",\"zh_Hant\":\"玉米\"}},{\"number\":27,\"emoji\":\"🍕\",\"description\":\"Pizza\",\"unicode\":\"U+1F355\",\"translated_descriptions\":{\"ar\":\"بِيتزا\",\"bg\":\"Пица\",\"ca\":\"Pizza\",\"cs\":\"Pizza\",\"de\":\"Pizza\",\"eo\":\"Pico\",\"es\":\"Pizza\",\"et\":\"Pitsa\",\"fa\":\"پیتزا\",\"fi\":\"Pizza\",\"fr\":\"Pizza\",\"hr\":\"pizza\",\"hu\":\"Pizza\",\"id\":\"Pizza\",\"it\":\"Pizza\",\"ja\":\"ピザ\",\"nb_NO\":\"Pizza\",\"nl\":\"Pizza\",\"pt\":\"Piza\",\"pt_BR\":\"Pizza\",\"ru\":\"Пицца\",\"si\":null,\"sk\":\"Pizza\",\"sq\":\"Picë\",\"sr\":\"пица\",\"sv\":\"Pizza\",\"szl\":null,\"tzm\":null,\"uk\":\"Піца\",\"vi\":\"Pizza\",\"zh_Hans\":\"披萨\",\"zh_Hant\":\"披薩\"}},{\"number\":28,\"emoji\":\"🎂\",\"description\":\"Cake\",\"unicode\":\"U+1F382\",\"translated_descriptions\":{\"ar\":\"كَعكَة\",\"bg\":\"Торта\",\"ca\":\"Pastís\",\"cs\":\"Dort\",\"de\":\"Kuchen\",\"eo\":\"Torto\",\"es\":\"Tarta\",\"et\":\"Kook\",\"fa\":\"کیک\",\"fi\":\"Kakku\",\"fr\":\"Gâteau\",\"hr\":\"torta\",\"hu\":\"Süti\",\"id\":\"Kue\",\"it\":\"Torta\",\"ja\":\"ケーキ\",\"nb_NO\":\"Kake\",\"nl\":\"Taart\",\"pt\":\"Bolo\",\"pt_BR\":\"Bolo\",\"ru\":\"Торт\",\"si\":null,\"sk\":\"Torta\",\"sq\":\"Tortë\",\"sr\":\"торта\",\"sv\":\"Tårta\",\"szl\":null,\"tzm\":null,\"uk\":\"Пиріг\",\"vi\":\"Bánh\",\"zh_Hans\":\"蛋糕\",\"zh_Hant\":\"蛋糕\"}},{\"number\":29,\"emoji\":\"❤️\",\"description\":\"Heart\",\"unicode\":\"U+2764U+FE0F\",\"translated_descriptions\":{\"ar\":\"قَلب\",\"bg\":\"Сърце\",\"ca\":\"Cor\",\"cs\":\"Srdce\",\"de\":\"Herz\",\"eo\":\"Koro\",\"es\":\"Corazón\",\"et\":\"Süda\",\"fa\":\"قلب\",\"fi\":\"Sydän\",\"fr\":\"Cœur\",\"hr\":\"srca\",\"hu\":\"Szív\",\"id\":\"Hati\",\"it\":\"Cuore\",\"ja\":\"ハート\",\"nb_NO\":\"Hjerte\",\"nl\":\"Hart\",\"pt\":\"Coração\",\"pt_BR\":\"Coração\",\"ru\":\"Сердце\",\"si\":null,\"sk\":\"Srdce\",\"sq\":\"Zemër\",\"sr\":\"срце\",\"sv\":\"Hjärta\",\"szl\":null,\"tzm\":\"Ul\",\"uk\":\"Серце\",\"vi\":\"Tim\",\"zh_Hans\":\"心\",\"zh_Hant\":\"愛心\"}},{\"number\":30,\"emoji\":\"😀\",\"description\":\"Smiley\",\"unicode\":\"U+1F600\",\"translated_descriptions\":{\"ar\":\"اِبتِسَامَة\",\"bg\":\"Усмивка\",\"ca\":\"Somrient\",\"cs\":\"Smajlík\",\"de\":\"Lächeln\",\"eo\":\"Rideto\",\"es\":\"Emoticono\",\"et\":\"Smaili\",\"fa\":\"خنده\",\"fi\":\"Hymynaama\",\"fr\":\"Sourire\",\"hr\":\"smajlića\",\"hu\":\"Mosoly\",\"id\":\"Senyuman\",\"it\":\"Faccina sorridente\",\"ja\":\"スマイル\",\"nb_NO\":\"Smilefjes\",\"nl\":\"Smiley\",\"pt\":\"Sorriso\",\"pt_BR\":\"Sorriso\",\"ru\":\"Улыбка\",\"si\":null,\"sk\":\"Smajlík\",\"sq\":\"Emotikon\",\"sr\":\"смајли\",\"sv\":\"Smiley\",\"szl\":null,\"tzm\":null,\"uk\":\"Посмішка\",\"vi\":\"Mặt cười\",\"zh_Hans\":\"笑脸\",\"zh_Hant\":\"笑臉\"}},{\"number\":31,\"emoji\":\"🤖\",\"description\":\"Robot\",\"unicode\":\"U+1F916\",\"translated_descriptions\":{\"ar\":\"رُوبُوت\",\"bg\":\"Робот\",\"ca\":\"Robot\",\"cs\":\"Robot\",\"de\":\"Roboter\",\"eo\":\"Roboto\",\"es\":\"Robot\",\"et\":\"Robot\",\"fa\":\"ربات\",\"fi\":\"Robotti\",\"fr\":\"Robot\",\"hr\":\"robot\",\"hu\":\"Robot\",\"id\":\"Robot\",\"it\":\"Robot\",\"ja\":\"ロボット\",\"nb_NO\":\"Robot\",\"nl\":\"Robot\",\"pt\":\"Robô\",\"pt_BR\":\"Robô\",\"ru\":\"Робот\",\"si\":null,\"sk\":\"Robot\",\"sq\":\"Robot\",\"sr\":\"робот\",\"sv\":\"Robot\",\"szl\":null,\"tzm\":\"Aṛubu\",\"uk\":\"Робот\",\"vi\":\"Rô-bô\",\"zh_Hans\":\"机器人\",\"zh_Hant\":\"機器人\"}},{\"number\":32,\"emoji\":\"🎩\",\"description\":\"Hat\",\"unicode\":\"U+1F3A9\",\"translated_descriptions\":{\"ar\":\"قُبَّعَة\",\"bg\":\"Шапка\",\"ca\":\"Barret\",\"cs\":\"Klobouk\",\"de\":\"Hut\",\"eo\":\"Ĉapelo\",\"es\":\"Sombrero\",\"et\":\"Kübar\",\"fa\":\"کلاه\",\"fi\":\"Hattu\",\"fr\":\"Chapeau\",\"hr\":\"kapa\",\"hu\":\"Kalap\",\"id\":\"Topi\",\"it\":\"Cappello\",\"ja\":\"帽子\",\"nb_NO\":\"Hatt\",\"nl\":\"Hoed\",\"pt\":\"Chapéu\",\"pt_BR\":\"Chapéu\",\"ru\":\"Шляпа\",\"si\":null,\"sk\":\"Klobúk\",\"sq\":\"Kapë\",\"sr\":\"шешир\",\"sv\":\"Hatt\",\"szl\":null,\"tzm\":\"Taraza\",\"uk\":\"Капелюх\",\"vi\":\"Mũ\",\"zh_Hans\":\"帽子\",\"zh_Hant\":\"帽子\"}},{\"number\":33,\"emoji\":\"👓\",\"description\":\"Glasses\",\"unicode\":\"U+1F453\",\"translated_descriptions\":{\"ar\":\"نَظَّارَة\",\"bg\":\"Очила\",\"ca\":\"Ulleres\",\"cs\":\"Brýle\",\"de\":\"Brille\",\"eo\":\"Okulvitroj\",\"es\":\"Gafas\",\"et\":\"Prillid\",\"fa\":\"عینک\",\"fi\":\"Silmälasit\",\"fr\":\"Lunettes\",\"hr\":\"naočale\",\"hu\":\"Szemüveg\",\"id\":\"Kacamata\",\"it\":\"Occhiali\",\"ja\":\"めがね\",\"nb_NO\":\"Briller\",\"nl\":\"Bril\",\"pt\":\"Óculos\",\"pt_BR\":\"Óculos\",\"ru\":\"Очки\",\"si\":null,\"sk\":\"Okuliare\",\"sq\":\"Syze\",\"sr\":\"наочаре\",\"sv\":\"Glasögon\",\"szl\":null,\"tzm\":null,\"uk\":\"Окуляри\",\"vi\":\"Kính mắt\",\"zh_Hans\":\"眼镜\",\"zh_Hant\":\"眼鏡\"}},{\"number\":34,\"emoji\":\"🔧\",\"description\":\"Spanner\",\"unicode\":\"U+1F527\",\"translated_descriptions\":{\"ar\":\"مِفتَاحُ رَبط\",\"bg\":\"Гаечен ключ\",\"ca\":\"Clau anglesa\",\"cs\":\"Klíč\",\"de\":\"Schraubenschlüssel\",\"eo\":\"Ŝraŭbŝlosilo\",\"es\":\"Llave inglesa\",\"et\":\"Mutrivõti\",\"fa\":\"آچار\",\"fi\":\"Kiintoavain\",\"fr\":\"Clé à molette\",\"hr\":\"ključ\",\"hu\":\"Csavarkulcs\",\"id\":\"Kunci Bengkel\",\"it\":\"Chiave inglese\",\"ja\":\"スパナ\",\"nb_NO\":\"Fastnøkkel\",\"nl\":\"Moersleutel\",\"pt\":\"Chave inglesa\",\"pt_BR\":\"Chave inglesa\",\"ru\":\"Ключ\",\"si\":null,\"sk\":\"Vidlicový kľúč\",\"sq\":\"Çelës\",\"sr\":\"кључ\",\"sv\":\"Skruvnyckel\",\"szl\":null,\"tzm\":null,\"uk\":\"Гайковий ключ\",\"vi\":\"Cờ-lê\",\"zh_Hans\":\"扳手\",\"zh_Hant\":\"扳手\"}},{\"number\":35,\"emoji\":\"🎅\",\"description\":\"Santa\",\"unicode\":\"U+1F385\",\"translated_descriptions\":{\"ar\":\"سانتا\",\"bg\":\"Дядо Коледа\",\"ca\":\"Pare Noél\",\"cs\":\"Mikuláš\",\"de\":\"Weihnachtsmann\",\"eo\":\"Kristnaska viro\",\"es\":\"Papá Noel\",\"et\":\"Jõuluvana\",\"fa\":\"بابا نوئل\",\"fi\":\"Joulupukki\",\"fr\":\"Père Noël\",\"hr\":\"deda Mraz\",\"hu\":\"Télapó\",\"id\":\"Santa\",\"it\":\"Babbo Natale\",\"ja\":\"サンタ\",\"nb_NO\":\"Julenisse\",\"nl\":\"Kerstman\",\"pt\":\"Pai Natal\",\"pt_BR\":\"Papai-noel\",\"ru\":\"Санта\",\"si\":null,\"sk\":\"Mikuláš\",\"sq\":\"Babagjyshi i Vitit të Ri\",\"sr\":\"деда Мраз\",\"sv\":\"Tomte\",\"szl\":null,\"tzm\":null,\"uk\":\"Санта Клаус\",\"vi\":\"ông già Nô-en\",\"zh_Hans\":\"圣诞老人\",\"zh_Hant\":\"聖誕老人\"}},{\"number\":36,\"emoji\":\"👍\",\"description\":\"Thumbs Up\",\"unicode\":\"U+1F44D\",\"translated_descriptions\":{\"ar\":\"رَفعُ إِبهَام\",\"bg\":\"Палец нагоре\",\"ca\":\"Polzes amunt\",\"cs\":\"Palec nahoru\",\"de\":\"Daumen Hoch\",\"eo\":\"Dikfingro supren\",\"es\":\"Pulgar arriba\",\"et\":\"Pöidlad püsti\",\"fa\":\"لایک\",\"fi\":\"Peukalo ylös\",\"fr\":\"Pouce en l’air\",\"hr\":\"palac gore\",\"hu\":\"Hüvelykujj fel\",\"id\":\"Jempol\",\"it\":\"Pollice alzato\",\"ja\":\"いいね\",\"nb_NO\":\"Tommel Opp\",\"nl\":\"Duim omhoog\",\"pt\":\"Polegar para cima\",\"pt_BR\":\"Joinha\",\"ru\":\"Большой палец вверх\",\"si\":null,\"sk\":\"Palec nahor\",\"sq\":null,\"sr\":\"палчић горе\",\"sv\":\"Tummen upp\",\"szl\":null,\"tzm\":null,\"uk\":\"Великий палець вгору\",\"vi\":\"Thích\",\"zh_Hans\":\"赞\",\"zh_Hant\":\"讚\"}},{\"number\":37,\"emoji\":\"☂️\",\"description\":\"Umbrella\",\"unicode\":\"U+2602U+FE0F\",\"translated_descriptions\":{\"ar\":\"مِظَلَّة\",\"bg\":\"Чадър\",\"ca\":\"Paraigües\",\"cs\":\"Deštník\",\"de\":\"Regenschirm\",\"eo\":\"Ombrelo\",\"es\":\"Paraguas\",\"et\":\"Vihmavari\",\"fa\":\"چتر\",\"fi\":\"Sateenvarjo\",\"fr\":\"Parapluie\",\"hr\":\"kišobran\",\"hu\":\"Esernyő\",\"id\":\"Payung\",\"it\":\"Ombrello\",\"ja\":\"傘\",\"nb_NO\":\"Paraply\",\"nl\":\"Paraplu\",\"pt\":\"Guarda-chuva\",\"pt_BR\":\"Guarda-chuva\",\"ru\":\"Зонт\",\"si\":null,\"sk\":\"Dáždnik\",\"sq\":\"Ombrellë\",\"sr\":\"кишобран\",\"sv\":\"Paraply\",\"szl\":null,\"tzm\":null,\"uk\":\"Парасолька\",\"vi\":\"Cái ô\",\"zh_Hans\":\"伞\",\"zh_Hant\":\"雨傘\"}},{\"number\":38,\"emoji\":\"⌛\",\"description\":\"Hourglass\",\"unicode\":\"U+231B\",\"translated_descriptions\":{\"ar\":\"سَاعَةٌ رَملِيَّة\",\"bg\":\"Пясъчен часовник\",\"ca\":\"Rellotge de sorra\",\"cs\":\"Přesýpací hodiny\",\"de\":\"Sanduhr\",\"eo\":\"Sablohorloĝo\",\"es\":\"Reloj de arena\",\"et\":\"Liivakell\",\"fa\":\"ساعت شنی\",\"fi\":\"Tiimalasi\",\"fr\":\"Sablier\",\"hr\":\"pješčani sat\",\"hu\":\"Homokóra\",\"id\":\"Jam Pasir\",\"it\":\"Clessidra\",\"ja\":\"砂時計\",\"nb_NO\":\"Timeglass\",\"nl\":\"Zandloper\",\"pt\":\"Ampulheta\",\"pt_BR\":\"Ampulheta\",\"ru\":\"Песочные часы\",\"si\":null,\"sk\":\"Presýpacie hodiny\",\"sq\":\"Klepsidër\",\"sr\":\"пешчаник\",\"sv\":\"Timglas\",\"szl\":null,\"tzm\":null,\"uk\":\"Пісковий годинник\",\"vi\":\"Đồng hồ cát\",\"zh_Hans\":\"沙漏\",\"zh_Hant\":\"沙漏\"}},{\"number\":39,\"emoji\":\"⏰\",\"description\":\"Clock\",\"unicode\":\"U+23F0\",\"translated_descriptions\":{\"ar\":\"سَاعَة\",\"bg\":\"Часовник\",\"ca\":\"Rellotge\",\"cs\":\"Hodiny\",\"de\":\"Uhr\",\"eo\":\"Horloĝo\",\"es\":\"Reloj\",\"et\":\"Kell\",\"fa\":\"ساعت\",\"fi\":\"Pöytäkello\",\"fr\":\"Réveil\",\"hr\":\"sat\",\"hu\":\"Óra\",\"id\":\"Jam\",\"it\":\"Orologio\",\"ja\":\"時計\",\"nb_NO\":\"Klokke\",\"nl\":\"Wekker\",\"pt\":\"Relógio\",\"pt_BR\":\"Relógio\",\"ru\":\"Часы\",\"si\":null,\"sk\":\"Budík\",\"sq\":\"Sahat\",\"sr\":\"сат\",\"sv\":\"Klocka\",\"szl\":null,\"tzm\":null,\"uk\":\"Годинник\",\"vi\":\"Đồng hồ\",\"zh_Hans\":\"时钟\",\"zh_Hant\":\"時鐘\"}},{\"number\":40,\"emoji\":\"🎁\",\"description\":\"Gift\",\"unicode\":\"U+1F381\",\"translated_descriptions\":{\"ar\":\"هَدِيَّة\",\"bg\":\"Подарък\",\"ca\":\"Regal\",\"cs\":\"Dárek\",\"de\":\"Geschenk\",\"eo\":\"Donaco\",\"es\":\"Regalo\",\"et\":\"Kingitus\",\"fa\":\"هدیه\",\"fi\":\"Lahja\",\"fr\":\"Cadeau\",\"hr\":\"poklon\",\"hu\":\"Ajándék\",\"id\":\"Kado\",\"it\":\"Regalo\",\"ja\":\"ギフト\",\"nb_NO\":\"Gave\",\"nl\":\"Geschenk\",\"pt\":\"Presente\",\"pt_BR\":\"Presente\",\"ru\":\"Подарок\",\"si\":null,\"sk\":\"Darček\",\"sq\":\"Dhuratë\",\"sr\":\"поклон\",\"sv\":\"Present\",\"szl\":null,\"tzm\":null,\"uk\":\"Подарунок\",\"vi\":\"Quà tặng\",\"zh_Hans\":\"礼物\",\"zh_Hant\":\"禮物\"}},{\"number\":41,\"emoji\":\"💡\",\"description\":\"Light Bulb\",\"unicode\":\"U+1F4A1\",\"translated_descriptions\":{\"ar\":\"مِصبَاح\",\"bg\":\"Лампа\",\"ca\":\"Bombeta\",\"cs\":\"Žárovka\",\"de\":\"Glühbirne\",\"eo\":\"Lampo\",\"es\":\"Bombilla\",\"et\":\"Lambipirn\",\"fa\":\"لامپ\",\"fi\":\"Hehkulamppu\",\"fr\":\"Ampoule\",\"hr\":\"žarulja\",\"hu\":\"Égő\",\"id\":\"Bohlam Lampu\",\"it\":\"Lampadina\",\"ja\":\"電球\",\"nb_NO\":\"Lyspære\",\"nl\":\"Gloeilamp\",\"pt\":\"Lâmpada\",\"pt_BR\":\"Lâmpada\",\"ru\":\"Лампочка\",\"si\":null,\"sk\":\"Žiarovka\",\"sq\":\"Llambë\",\"sr\":\"сијалица\",\"sv\":\"Lampa\",\"szl\":null,\"tzm\":null,\"uk\":\"Лампочка\",\"vi\":\"Bóng đèn tròn\",\"zh_Hans\":\"灯泡\",\"zh_Hant\":\"燈泡\"}},{\"number\":42,\"emoji\":\"📕\",\"description\":\"Book\",\"unicode\":\"U+1F4D5\",\"translated_descriptions\":{\"ar\":\"كِتَاب\",\"bg\":\"Книга\",\"ca\":\"Llibre\",\"cs\":\"Kniha\",\"de\":\"Buch\",\"eo\":\"Libro\",\"es\":\"Libro\",\"et\":\"Raamat\",\"fa\":\"کتاب\",\"fi\":\"Kirja\",\"fr\":\"Livre\",\"hr\":\"knjiga\",\"hu\":\"Könyv\",\"id\":\"Buku\",\"it\":\"Libro\",\"ja\":\"本\",\"nb_NO\":\"Bok\",\"nl\":\"Boek\",\"pt\":\"Livro\",\"pt_BR\":\"Livro\",\"ru\":\"Книга\",\"si\":null,\"sk\":\"Kniha\",\"sq\":\"Libër\",\"sr\":\"књига\",\"sv\":\"Bok\",\"szl\":null,\"tzm\":\"Adlis\",\"uk\":\"Книга\",\"vi\":\"Sách\",\"zh_Hans\":\"书\",\"zh_Hant\":\"書\"}},{\"number\":43,\"emoji\":\"✏️\",\"description\":\"Pencil\",\"unicode\":\"U+270FU+FE0F\",\"translated_descriptions\":{\"ar\":\"قَلَمُ رَصاص\",\"bg\":\"Молив\",\"ca\":\"Llapis\",\"cs\":\"Tužka\",\"de\":\"Bleistift\",\"eo\":\"Krajono\",\"es\":\"Lápiz\",\"et\":\"Pliiats\",\"fa\":\"مداد\",\"fi\":\"Lyijykynä\",\"fr\":\"Crayon\",\"hr\":\"olovka\",\"hu\":\"Ceruza\",\"id\":\"Pensil\",\"it\":\"Matita\",\"ja\":\"鉛筆\",\"nb_NO\":\"Blyant\",\"nl\":\"Potlood\",\"pt\":\"Lápis\",\"pt_BR\":\"Lápis\",\"ru\":\"Карандаш\",\"si\":null,\"sk\":\"Ceruzka\",\"sq\":\"Laps\",\"sr\":\"оловка\",\"sv\":\"Penna\",\"szl\":null,\"tzm\":null,\"uk\":\"Олівець\",\"vi\":\"Viết chì\",\"zh_Hans\":\"铅笔\",\"zh_Hant\":\"鉛筆\"}},{\"number\":44,\"emoji\":\"📎\",\"description\":\"Paperclip\",\"unicode\":\"U+1F4CE\",\"translated_descriptions\":{\"ar\":\"مِشبَكُ وَرَق\",\"bg\":\"Кламер\",\"ca\":\"Clip\",\"cs\":\"Sponka\",\"de\":\"Büroklammer\",\"eo\":\"Paperkuntenilo\",\"es\":\"Clip\",\"et\":\"Kirjaklamber\",\"fa\":\"گیره کاغذ\",\"fi\":\"Paperiliitin\",\"fr\":\"Trombone\",\"hr\":\"spajalica\",\"hu\":\"Gémkapocs\",\"id\":\"Klip Kertas\",\"it\":\"Graffetta\",\"ja\":\"クリップ\",\"nb_NO\":\"BInders\",\"nl\":\"Papierklemmetje\",\"pt\":\"Clipe\",\"pt_BR\":\"Clipe de papel\",\"ru\":\"Скрепка\",\"si\":null,\"sk\":\"Kancelárska sponka\",\"sq\":\"Kapëse\",\"sr\":\"спајалица\",\"sv\":\"Gem\",\"szl\":null,\"tzm\":null,\"uk\":\"Спиначка\",\"vi\":\"Kẹp giấy\",\"zh_Hans\":\"回形针\",\"zh_Hant\":\"迴紋針\"}},{\"number\":45,\"emoji\":\"✂️\",\"description\":\"Scissors\",\"unicode\":\"U+2702U+FE0F\",\"translated_descriptions\":{\"ar\":\"مِقَصّ\",\"bg\":\"Ножици\",\"ca\":\"Tisores\",\"cs\":\"Nůžky\",\"de\":\"Schere\",\"eo\":\"Tondilo\",\"es\":\"Tijeras\",\"et\":\"Käärid\",\"fa\":\"قیچی\",\"fi\":\"Sakset\",\"fr\":\"Ciseaux\",\"hr\":\"škare\",\"hu\":\"Olló\",\"id\":\"Gunting\",\"it\":\"Forbici\",\"ja\":\"はさみ\",\"nb_NO\":\"Saks\",\"nl\":\"Schaar\",\"pt\":\"Tesoura\",\"pt_BR\":\"Tesoura\",\"ru\":\"Ножницы\",\"si\":null,\"sk\":\"Nožnice\",\"sq\":\"Gërshërë\",\"sr\":\"маказе\",\"sv\":\"Sax\",\"szl\":null,\"tzm\":null,\"uk\":\"Ножиці\",\"vi\":\"Cái kéo\",\"zh_Hans\":\"剪刀\",\"zh_Hant\":\"剪刀\"}},{\"number\":46,\"emoji\":\"🔒\",\"description\":\"Lock\",\"unicode\":\"U+1F512\",\"translated_descriptions\":{\"ar\":\"قُفل\",\"bg\":\"Катинар\",\"ca\":\"Cadenat\",\"cs\":\"Zámek\",\"de\":\"Schloss\",\"eo\":\"Seruro\",\"es\":\"Candado\",\"et\":\"Lukk\",\"fa\":\"قفل\",\"fi\":\"Lukko\",\"fr\":\"Cadenas\",\"hr\":\"zaključati\",\"hu\":\"Lakat\",\"id\":\"Gembok\",\"it\":\"Lucchetto\",\"ja\":\"錠前\",\"nb_NO\":\"Lås\",\"nl\":\"Slot\",\"pt\":\"Cadeado\",\"pt_BR\":\"Cadeado\",\"ru\":\"Замок\",\"si\":null,\"sk\":\"Zámka\",\"sq\":\"Dry\",\"sr\":\"катанац\",\"sv\":\"Lås\",\"szl\":null,\"tzm\":null,\"uk\":\"Замок\",\"vi\":\"Ổ khóa\",\"zh_Hans\":\"锁\",\"zh_Hant\":\"鎖頭\"}},{\"number\":47,\"emoji\":\"🔑\",\"description\":\"Key\",\"unicode\":\"U+1F511\",\"translated_descriptions\":{\"ar\":\"مِفتَاح\",\"bg\":\"Ключ\",\"ca\":\"Clau\",\"cs\":\"Klíč ke dveřím\",\"de\":\"Schlüssel\",\"eo\":\"Ŝlosilo\",\"es\":\"Llave\",\"et\":\"Võti\",\"fa\":\"کلید\",\"fi\":\"Avain\",\"fr\":\"Clé\",\"hr\":\"ključ\",\"hu\":\"Kulcs\",\"id\":\"Kunci\",\"it\":\"Chiave\",\"ja\":\"鍵\",\"nb_NO\":\"Nøkkel\",\"nl\":\"Sleutel\",\"pt\":\"Chave\",\"pt_BR\":\"Chave\",\"ru\":\"Ключ\",\"si\":null,\"sk\":\"Kľúč\",\"sq\":\"Çelës\",\"sr\":\"кључ\",\"sv\":\"Nyckel\",\"szl\":null,\"tzm\":\"Tasarut\",\"uk\":\"Ключ\",\"vi\":\"Chìa khóa\",\"zh_Hans\":\"钥匙\",\"zh_Hant\":\"鑰匙\"}},{\"number\":48,\"emoji\":\"🔨\",\"description\":\"Hammer\",\"unicode\":\"U+1F528\",\"translated_descriptions\":{\"ar\":\"مِطرَقَة\",\"bg\":\"Чук\",\"ca\":\"Martell\",\"cs\":\"Kladivo\",\"de\":\"Hammer\",\"eo\":\"Martelo\",\"es\":\"Martillo\",\"et\":\"Haamer\",\"fa\":\"چکش\",\"fi\":\"Vasara\",\"fr\":\"Marteau\",\"hr\":\"čekić\",\"hu\":\"Kalapács\",\"id\":\"Palu\",\"it\":\"Martello\",\"ja\":\"金槌\",\"nb_NO\":\"Hammer\",\"nl\":\"Hamer\",\"pt\":\"Martelo\",\"pt_BR\":\"Martelo\",\"ru\":\"Молоток\",\"si\":null,\"sk\":\"Kladivo\",\"sq\":\"Çekiç\",\"sr\":\"чекић\",\"sv\":\"Hammare\",\"szl\":null,\"tzm\":null,\"uk\":\"Молоток\",\"vi\":\"Búa\",\"zh_Hans\":\"锤子\",\"zh_Hant\":\"鎚子\"}},{\"number\":49,\"emoji\":\"☎️\",\"description\":\"Telephone\",\"unicode\":\"U+260EU+FE0F\",\"translated_descriptions\":{\"ar\":\"تِلِفُون\",\"bg\":\"Телефон\",\"ca\":\"Telèfon\",\"cs\":\"Telefon\",\"de\":\"Telefon\",\"eo\":\"Telefono\",\"es\":\"Teléfono\",\"et\":\"Telefon\",\"fa\":\"تلفن\",\"fi\":\"Puhelin\",\"fr\":\"Téléphone\",\"hr\":\"telefon\",\"hu\":\"Telefon\",\"id\":\"Telepon\",\"it\":\"Telefono\",\"ja\":\"電話機\",\"nb_NO\":\"Telefon\",\"nl\":\"Telefoon\",\"pt\":\"Telefone\",\"pt_BR\":\"Telefone\",\"ru\":\"Телефон\",\"si\":null,\"sk\":\"Telefón\",\"sq\":\"Telefon\",\"sr\":\"телефон\",\"sv\":\"Telefon\",\"szl\":null,\"tzm\":\"Atilifun\",\"uk\":\"Телефон\",\"vi\":\"Điện thoại\",\"zh_Hans\":\"电话\",\"zh_Hant\":\"電話\"}},{\"number\":50,\"emoji\":\"🏁\",\"description\":\"Flag\",\"unicode\":\"U+1F3C1\",\"translated_descriptions\":{\"ar\":\"عَلَم\",\"bg\":\"Флаг\",\"ca\":\"Bandera\",\"cs\":\"Vlajka\",\"de\":\"Flagge\",\"eo\":\"Flago\",\"es\":\"Bandera\",\"et\":\"Lipp\",\"fa\":\"پرچم\",\"fi\":\"Lippu\",\"fr\":\"Drapeau\",\"hr\":\"zastava\",\"hu\":\"Zászló\",\"id\":\"Bendera\",\"it\":\"Bandiera\",\"ja\":\"旗\",\"nb_NO\":\"Flagg\",\"nl\":\"Vlag\",\"pt\":\"Bandeira\",\"pt_BR\":\"Bandeira\",\"ru\":\"Флаг\",\"si\":null,\"sk\":\"Zástava\",\"sq\":\"Flamur\",\"sr\":\"застава\",\"sv\":\"Flagga\",\"szl\":null,\"tzm\":\"Acenyal\",\"uk\":\"Прапор\",\"vi\":\"Lá cờ\",\"zh_Hans\":\"旗帜\",\"zh_Hant\":\"旗幟\"}},{\"number\":51,\"emoji\":\"🚂\",\"description\":\"Train\",\"unicode\":\"U+1F682\",\"translated_descriptions\":{\"ar\":\"قِطَار\",\"bg\":\"Влак\",\"ca\":\"Tren\",\"cs\":\"Vlak\",\"de\":\"Zug\",\"eo\":\"Vagonaro\",\"es\":\"Tren\",\"et\":\"Rong\",\"fa\":\"قطار\",\"fi\":\"Juna\",\"fr\":\"Train\",\"hr\":\"vlak\",\"hu\":\"Vonat\",\"id\":\"Kereta Api\",\"it\":\"Treno\",\"ja\":\"電車\",\"nb_NO\":\"Tog\",\"nl\":\"Trein\",\"pt\":\"Comboio\",\"pt_BR\":\"Trem\",\"ru\":\"Поезд\",\"si\":null,\"sk\":\"Vlak\",\"sq\":\"Tren\",\"sr\":\"воз\",\"sv\":\"Tåg\",\"szl\":null,\"tzm\":null,\"uk\":\"Потяг\",\"vi\":\"Xe lửa\",\"zh_Hans\":\"火车\",\"zh_Hant\":\"火車\"}},{\"number\":52,\"emoji\":\"🚲\",\"description\":\"Bicycle\",\"unicode\":\"U+1F6B2\",\"translated_descriptions\":{\"ar\":\"دَرّاجَة\",\"bg\":\"Колело\",\"ca\":\"Bicicleta\",\"cs\":\"Kolo\",\"de\":\"Fahrrad\",\"eo\":\"Biciklo\",\"es\":\"Bicicleta\",\"et\":\"Jalgratas\",\"fa\":\"دوچرخه\",\"fi\":\"Polkupyörä\",\"fr\":\"Vélo\",\"hr\":\"bicikl\",\"hu\":\"Kerékpár\",\"id\":\"Sepeda\",\"it\":\"Bicicletta\",\"ja\":\"自転車\",\"nb_NO\":\"Sykkel\",\"nl\":\"Fiets\",\"pt\":\"Bicicleta\",\"pt_BR\":\"Bicicleta\",\"ru\":\"Велосипед\",\"si\":null,\"sk\":\"Bicykel\",\"sq\":\"Biçikletë\",\"sr\":\"бицикл\",\"sv\":\"Cykel\",\"szl\":null,\"tzm\":null,\"uk\":\"Велосипед\",\"vi\":\"Xe đạp\",\"zh_Hans\":\"自行车\",\"zh_Hant\":\"腳踏車\"}},{\"number\":53,\"emoji\":\"✈️\",\"description\":\"Aeroplane\",\"unicode\":\"U+2708U+FE0F\",\"translated_descriptions\":{\"ar\":\"طَائِرة\",\"bg\":\"Самолет\",\"ca\":\"Avió\",\"cs\":\"Letadlo\",\"de\":\"Flugzeug\",\"eo\":\"Aviadilo\",\"es\":\"Avión\",\"et\":\"Lennuk\",\"fa\":\"هواپیما\",\"fi\":\"Lentokone\",\"fr\":\"Avion\",\"hr\":\"avion\",\"hu\":\"Repülő\",\"id\":\"Pesawat\",\"it\":\"Aeroplano\",\"ja\":\"飛行機\",\"nb_NO\":\"Fly\",\"nl\":\"Vliegtuig\",\"pt\":\"Avião\",\"pt_BR\":\"Avião\",\"ru\":\"Самолет\",\"si\":null,\"sk\":\"Lietadlo\",\"sq\":\"Avion\",\"sr\":\"авион\",\"sv\":\"Flygplan\",\"szl\":null,\"tzm\":null,\"uk\":\"Літак\",\"vi\":\"Máy bay\",\"zh_Hans\":\"飞机\",\"zh_Hant\":\"飛機\"}},{\"number\":54,\"emoji\":\"🚀\",\"description\":\"Rocket\",\"unicode\":\"U+1F680\",\"translated_descriptions\":{\"ar\":\"صَارُوخ\",\"bg\":\"Ракета\",\"ca\":\"Coet\",\"cs\":\"Raketa\",\"de\":\"Rakete\",\"eo\":\"Raketo\",\"es\":\"Cohete\",\"et\":\"Rakett\",\"fa\":\"موشک\",\"fi\":\"Raketti\",\"fr\":\"Fusée\",\"hr\":\"raketa\",\"hu\":\"Rakáta\",\"id\":\"Roket\",\"it\":\"Razzo\",\"ja\":\"ロケット\",\"nb_NO\":\"Rakett\",\"nl\":\"Raket\",\"pt\":\"Foguetão\",\"pt_BR\":\"Foguete\",\"ru\":\"Ракета\",\"si\":null,\"sk\":\"Raketa\",\"sq\":\"Raketë\",\"sr\":\"ракета\",\"sv\":\"Raket\",\"szl\":null,\"tzm\":null,\"uk\":\"Ракета\",\"vi\":\"Tên lửa\",\"zh_Hans\":\"火箭\",\"zh_Hant\":\"火箭\"}},{\"number\":55,\"emoji\":\"🏆\",\"description\":\"Trophy\",\"unicode\":\"U+1F3C6\",\"translated_descriptions\":{\"ar\":\"كَأسُ النَّصر\",\"bg\":\"Трофей\",\"ca\":\"Trofeu\",\"cs\":\"Pohár\",\"de\":\"Pokal\",\"eo\":\"Trofeo\",\"es\":\"Trofeo\",\"et\":\"Auhind\",\"fa\":\"جام\",\"fi\":\"Palkinto\",\"fr\":\"Trophée\",\"hr\":\"trofej\",\"hu\":\"Trófea\",\"id\":\"Piala\",\"it\":\"Trofeo\",\"ja\":\"トロフィー\",\"nb_NO\":\"Pokal\",\"nl\":\"Trofee\",\"pt\":\"Troféu\",\"pt_BR\":\"Troféu\",\"ru\":\"Кубок\",\"si\":null,\"sk\":\"Trofej\",\"sq\":\"Trofe\",\"sr\":\"пехар\",\"sv\":\"Trofé\",\"szl\":null,\"tzm\":null,\"uk\":\"Приз\",\"vi\":\"Cúp\",\"zh_Hans\":\"奖杯\",\"zh_Hant\":\"獎盃\"}},{\"number\":56,\"emoji\":\"⚽\",\"description\":\"Ball\",\"unicode\":\"U+26BD\",\"translated_descriptions\":{\"ar\":\"كُرَة\",\"bg\":\"Топка\",\"ca\":\"Pilota\",\"cs\":\"Míč\",\"de\":\"Ball\",\"eo\":\"Pilko\",\"es\":\"Bola\",\"et\":\"Pall\",\"fa\":\"توپ\",\"fi\":\"Pallo\",\"fr\":\"Ballon\",\"hr\":\"lopta\",\"hu\":\"Labda\",\"id\":\"Bola\",\"it\":\"Palla\",\"ja\":\"ボール\",\"nb_NO\":\"Ball\",\"nl\":\"Bal\",\"pt\":\"Bola\",\"pt_BR\":\"Bola\",\"ru\":\"Мяч\",\"si\":null,\"sk\":\"Lopta\",\"sq\":\"Top\",\"sr\":\"лопта\",\"sv\":\"Boll\",\"szl\":null,\"tzm\":\"Tcama\",\"uk\":\"М'яч\",\"vi\":\"Banh\",\"zh_Hans\":\"球\",\"zh_Hant\":\"足球\"}},{\"number\":57,\"emoji\":\"🎸\",\"description\":\"Guitar\",\"unicode\":\"U+1F3B8\",\"translated_descriptions\":{\"ar\":\"غيتار\",\"bg\":\"Китара\",\"ca\":\"Guitarra\",\"cs\":\"Kytara\",\"de\":\"Gitarre\",\"eo\":\"Gitaro\",\"es\":\"Guitarra\",\"et\":\"Kitarr\",\"fa\":\"گیتار\",\"fi\":\"Kitara\",\"fr\":\"Guitare\",\"hr\":\"gitara\",\"hu\":\"Gitár\",\"id\":\"Gitar\",\"it\":\"Chitarra\",\"ja\":\"ギター\",\"nb_NO\":\"Gitar\",\"nl\":\"Gitaar\",\"pt\":\"Guitarra\",\"pt_BR\":\"Guitarra\",\"ru\":\"Гитара\",\"si\":null,\"sk\":\"Gitara\",\"sq\":\"Kitarë\",\"sr\":\"гитара\",\"sv\":\"Gitarr\",\"szl\":null,\"tzm\":\"Agiṭaṛ\",\"uk\":\"Гітара\",\"vi\":\"Ghi-ta\",\"zh_Hans\":\"吉他\",\"zh_Hant\":\"吉他\"}},{\"number\":58,\"emoji\":\"🎺\",\"description\":\"Trumpet\",\"unicode\":\"U+1F3BA\",\"translated_descriptions\":{\"ar\":\"بُوق\",\"bg\":\"Тромпет\",\"ca\":\"Trompeta\",\"cs\":\"Trumpeta\",\"de\":\"Trompete\",\"eo\":\"Trumpeto\",\"es\":\"Trompeta\",\"et\":\"Trompet\",\"fa\":\"شیپور\",\"fi\":\"Trumpetti\",\"fr\":\"Trompette\",\"hr\":\"truba\",\"hu\":\"Trombita\",\"id\":\"Terompet\",\"it\":\"Trombetta\",\"ja\":\"トランペット\",\"nb_NO\":\"Trompet\",\"nl\":\"Trompet\",\"pt\":\"Trompete\",\"pt_BR\":\"Trombeta\",\"ru\":\"Труба\",\"si\":null,\"sk\":\"Trúbka\",\"sq\":\"Trombë\",\"sr\":\"труба\",\"sv\":\"Trumpet\",\"szl\":null,\"tzm\":null,\"uk\":\"Труба\",\"vi\":\"Kèn\",\"zh_Hans\":\"喇叭\",\"zh_Hant\":\"喇叭\"}},{\"number\":59,\"emoji\":\"🔔\",\"description\":\"Bell\",\"unicode\":\"U+1F514\",\"translated_descriptions\":{\"ar\":\"جَرَس\",\"bg\":\"Звънец\",\"ca\":\"Campana\",\"cs\":\"Zvonek\",\"de\":\"Glocke\",\"eo\":\"Sonorilo\",\"es\":\"Campana\",\"et\":\"Kelluke\",\"fa\":\"زنگ\",\"fi\":\"Soittokello\",\"fr\":\"Cloche\",\"hr\":\"zvono\",\"hu\":\"Harang\",\"id\":\"Lonceng\",\"it\":\"Campana\",\"ja\":\"ベル\",\"nb_NO\":\"Bjelle\",\"nl\":\"Bel\",\"pt\":\"Sino\",\"pt_BR\":\"Sino\",\"ru\":\"Колокол\",\"si\":null,\"sk\":\"Zvonec\",\"sq\":\"Kambanë\",\"sr\":\"звоно\",\"sv\":\"Bjällra\",\"szl\":null,\"tzm\":null,\"uk\":\"Дзвін\",\"vi\":\"Chuông\",\"zh_Hans\":\"铃铛\",\"zh_Hant\":\"鈴鐺\"}},{\"number\":60,\"emoji\":\"⚓\",\"description\":\"Anchor\",\"unicode\":\"U+2693\",\"translated_descriptions\":{\"ar\":\"مِرسَاة\",\"bg\":\"Котва\",\"ca\":\"Àncora\",\"cs\":\"Kotva\",\"de\":\"Anker\",\"eo\":\"Ankro\",\"es\":\"Ancla\",\"et\":\"Ankur\",\"fa\":\"لنگر\",\"fi\":\"Ankkuri\",\"fr\":\"Ancre\",\"hr\":\"sidro\",\"hu\":\"Horgony\",\"id\":\"Jangkar\",\"it\":\"Ancora\",\"ja\":\"いかり\",\"nb_NO\":\"Anker\",\"nl\":\"Anker\",\"pt\":\"Âncora\",\"pt_BR\":\"Âncora\",\"ru\":\"Якорь\",\"si\":null,\"sk\":\"Kotva\",\"sq\":\"Spirancë\",\"sr\":\"сидро\",\"sv\":\"Ankare\",\"szl\":null,\"tzm\":null,\"uk\":\"Якір\",\"vi\":\"Mỏ neo\",\"zh_Hans\":\"锚\",\"zh_Hant\":\"船錨\"}},{\"number\":61,\"emoji\":\"🎧\",\"description\":\"Headphones\",\"unicode\":\"U+1F3A7\",\"translated_descriptions\":{\"ar\":\"سَمّاعَة رَأس\",\"bg\":\"Слушалки\",\"ca\":\"Auriculars\",\"cs\":\"Sluchátka\",\"de\":\"Kopfhörer\",\"eo\":\"Kapaŭdilo\",\"es\":\"Cascos\",\"et\":\"Kõrvaklapid\",\"fa\":\"هدفون\",\"fi\":\"Kuulokkeet\",\"fr\":\"Casque audio\",\"hr\":\"slušalice\",\"hu\":\"Fejhallgató\",\"id\":\"Headphone\",\"it\":\"Cuffie\",\"ja\":\"ヘッドホン\",\"nb_NO\":\"Hodetelefoner\",\"nl\":\"Koptelefoon\",\"pt\":\"Fones\",\"pt_BR\":\"Fones de ouvido\",\"ru\":\"Наушники\",\"si\":null,\"sk\":\"Slúchadlá\",\"sq\":\"Kufje\",\"sr\":\"слушалице\",\"sv\":\"Hörlurar\",\"szl\":null,\"tzm\":null,\"uk\":\"Навушники\",\"vi\":\"Tai nghe\",\"zh_Hans\":\"耳机\",\"zh_Hant\":\"耳機\"}},{\"number\":62,\"emoji\":\"📁\",\"description\":\"Folder\",\"unicode\":\"U+1F4C1\",\"translated_descriptions\":{\"ar\":\"مُجَلَّد\",\"bg\":\"Папка\",\"ca\":\"Carpeta\",\"cs\":\"Složka\",\"de\":\"Ordner\",\"eo\":\"Dosierujo\",\"es\":\"Carpeta\",\"et\":\"Kaust\",\"fa\":\"پوشه\",\"fi\":\"Kansio\",\"fr\":\"Dossier\",\"hr\":\"mapu\",\"hu\":\"Mappa\",\"id\":\"Map\",\"it\":\"Cartella\",\"ja\":\"フォルダー\",\"nb_NO\":\"Mappe\",\"nl\":\"Map\",\"pt\":\"Pasta\",\"pt_BR\":\"Pasta\",\"ru\":\"Папка\",\"si\":null,\"sk\":\"Fascikel\",\"sq\":\"Dosje\",\"sr\":\"фасцикла\",\"sv\":\"Mapp\",\"szl\":null,\"tzm\":\"Asdaw\",\"uk\":\"Тека\",\"vi\":\"Thư mục\",\"zh_Hans\":\"文件夹\",\"zh_Hant\":\"資料夾\"}},{\"number\":63,\"emoji\":\"📌\",\"description\":\"Pin\",\"unicode\":\"U+1F4CC\",\"translated_descriptions\":{\"ar\":\"دَبُّوس\",\"bg\":\"Кабърче\",\"ca\":\"Xinxeta\",\"cs\":\"Špendlík\",\"de\":\"Stecknadel\",\"eo\":\"Pinglo\",\"es\":\"Alfiler\",\"et\":\"Nööpnõel\",\"fa\":\"سنجاق\",\"fi\":\"Nuppineula\",\"fr\":\"Punaise\",\"hr\":\"pribadača\",\"hu\":\"Rajszeg\",\"id\":\"Pin\",\"it\":\"Puntina\",\"ja\":\"ピン\",\"nb_NO\":\"Tegnestift\",\"nl\":\"Duimspijker\",\"pt\":\"Pionés\",\"pt_BR\":\"Alfinete\",\"ru\":\"Булавка\",\"si\":null,\"sk\":\"Špendlík\",\"sq\":\"Karficë\",\"sr\":\"чиода\",\"sv\":\"Häftstift\",\"szl\":null,\"tzm\":null,\"uk\":\"Кнопка\",\"vi\":\"Ghim\",\"zh_Hans\":\"图钉\",\"zh_Hant\":\"圖釘\"}}]")).map(({ emoji: e, description: t, translated_descriptions: n }) => [e, [t, Object.keys(n).reduce((e, t) => {
	for (let r of Jb(t)) e[r] = n[t];
	return e;
}, {})]]));
function AS(e, t) {
	let n = kS.get(e);
	if (!n) throw Error(`Emoji mapping not found for emoji ${e}`);
	let [r, i] = n;
	for (let e of Jb(t)) if (i[e]) return i[e];
	return r;
}
var jS = {
	container: "_container_1lqqy_8",
	segment: "_segment_1lqqy_15",
	emoji: "_emoji_1lqqy_23",
	label: "_label_1lqqy_29"
};
//#endregion
//#region src/crypto/SasEmoji/SasEmoji.tsx
function MS({ emoji: e, className: n }) {
	let { language: r } = U(), i = e.map((e, n) => /* @__PURE__ */ t.createElement("div", {
		className: jS.segment,
		key: n
	}, /* @__PURE__ */ t.createElement("div", {
		className: jS.emoji,
		"aria-hidden": !0
	}, e), /* @__PURE__ */ t.createElement("div", { className: jS.label }, AS(e, r))));
	return /* @__PURE__ */ t.createElement("div", { className: (0, V.default)(jS.container, n) }, i);
}
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/close.js
function NS(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M6.293 6.293a1 1 0 0 1 1.414 0L12 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414L13.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.586 12 6.293 7.707a1 1 0 0 1 0-1.414" })
	});
}
NS.displayName = "CloseIcon";
var PS = a(NS), FS = class {
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
}, IS = class {
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
}, LS = class {
	listeners = /* @__PURE__ */ new Set();
	add = (e) => (this.listeners.add(e), () => {
		this.listeners.delete(e);
	});
	emit = () => {
		for (let e of this.listeners) e();
	};
}, RS = class {
	subs;
	snapshot;
	props;
	disposables = new FS();
	constructor(e, t) {
		this.props = e, this.subs = new LS(), this.snapshot = new IS(t, () => {
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
}, zS = class {
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
function BS(e) {
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
function VS(e, t) {
	return p(() => {
		let n = new zS(e);
		return Object.assign(n, t), n;
	}, [e, t]);
}
//#endregion
//#region src/core/viewmodel/useViewModel.ts
function J(e) {
	return g(e.subscribe, e.getSnapshot, e.getSnapshot);
}
var HS = {
	thumbnail: "_thumbnail_irnbt_8",
	link: "_link_irnbt_16",
	container: "_container_irnbt_21",
	wrapImageCaption: "_wrapImageCaption_irnbt_28",
	image: "_image_irnbt_36",
	caption: "_caption_irnbt_37",
	title: "_title_irnbt_59",
	description: "_description_irnbt_60"
}, US = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", WS = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", GS = "numeric", KS = "ascii", qS = "alpha", JS = "asciinumeric", YS = "alphanumeric", XS = "domain", ZS = "emoji", QS = "scheme", $S = "slashscheme", eC = "whitespace";
function tC(e, t) {
	return e in t || (t[e] = []), t[e];
}
function nC(e, t, n) {
	t[GS] && (t[JS] = !0, t[YS] = !0), t[KS] && (t[JS] = !0, t[qS] = !0), t[JS] && (t[YS] = !0), t[qS] && (t[YS] = !0), t[YS] && (t[XS] = !0), t[ZS] && (t[XS] = !0);
	for (let r in t) {
		let t = tC(r, n);
		t.indexOf(e) < 0 && t.push(e);
	}
}
function rC(e, t) {
	let n = {};
	for (let r in t) t[r].indexOf(e) >= 0 && (n[r] = !0);
	return n;
}
function iC(e = null) {
	this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
iC.groups = {}, iC.prototype = {
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
		r ||= iC.groups;
		let i;
		return t && t.j ? i = t : (i = new iC(t), n && r && nC(t, n, r)), this.jr.push([e, i]), i;
	},
	ts(e, t, n, r) {
		let i = this, a = e.length;
		if (!a) return i;
		for (let t = 0; t < a - 1; t++) i = i.tt(e[t]);
		return i.tt(e[a - 1], t, n, r);
	},
	tt(e, t, n, r) {
		r ||= iC.groups;
		let i = this;
		if (t && t.j) return i.j[e] = t, t;
		let a = t, o, s = i.go(e);
		return s ? (o = new iC(), Object.assign(o.j, s.j), o.jr.push.apply(o.jr, s.jr), o.jd = s.jd, o.t = s.t) : o = new iC(), a && (r && (o.t && typeof o.t == "string" ? nC(a, Object.assign(rC(o.t, r), n), r) : n && nC(a, n, r)), o.t = a), i.j[e] = o, o;
	}
};
var Y = (e, t, n, r, i) => e.ta(t, n, r, i), X = (e, t, n, r, i) => e.tr(t, n, r, i), aC = (e, t, n, r, i) => e.ts(t, n, r, i), Z = (e, t, n, r, i) => e.tt(t, n, r, i), oC = "WORD", sC = "UWORD", cC = "ASCIINUMERICAL", lC = "ALPHANUMERICAL", uC = "LOCALHOST", dC = "TLD", fC = "UTLD", pC = "SCHEME", mC = "SLASH_SCHEME", hC = "NUM", gC = "WS", _C = "NL", vC = "OPENBRACE", yC = "CLOSEBRACE", bC = "OPENBRACKET", xC = "CLOSEBRACKET", SC = "OPENPAREN", CC = "CLOSEPAREN", wC = "OPENANGLEBRACKET", TC = "CLOSEANGLEBRACKET", EC = "FULLWIDTHLEFTPAREN", DC = "FULLWIDTHRIGHTPAREN", OC = "LEFTCORNERBRACKET", kC = "RIGHTCORNERBRACKET", AC = "LEFTWHITECORNERBRACKET", jC = "RIGHTWHITECORNERBRACKET", MC = "FULLWIDTHLESSTHAN", NC = "FULLWIDTHGREATERTHAN", PC = "AMPERSAND", FC = "APOSTROPHE", IC = "ASTERISK", LC = "AT", RC = "BACKSLASH", zC = "BACKTICK", BC = "CARET", VC = "COLON", HC = "COMMA", UC = "DOLLAR", WC = "DOT", GC = "EQUALS", KC = "EXCLAMATION", qC = "HYPHEN", JC = "PERCENT", YC = "PIPE", XC = "PLUS", ZC = "POUND", QC = "QUERY", $C = "QUOTE", ew = "FULLWIDTHMIDDLEDOT", tw = "SEMI", nw = "SLASH", rw = "TILDE", iw = "UNDERSCORE", aw = "EMOJI", ow = "SYM", sw = /* @__PURE__ */ Object.freeze({
	__proto__: null,
	ALPHANUMERICAL: lC,
	AMPERSAND: PC,
	APOSTROPHE: FC,
	ASCIINUMERICAL: cC,
	ASTERISK: IC,
	AT: LC,
	BACKSLASH: RC,
	BACKTICK: zC,
	CARET: BC,
	CLOSEANGLEBRACKET: TC,
	CLOSEBRACE: yC,
	CLOSEBRACKET: xC,
	CLOSEPAREN: CC,
	COLON: VC,
	COMMA: HC,
	DOLLAR: UC,
	DOT: WC,
	EMOJI: aw,
	EQUALS: GC,
	EXCLAMATION: KC,
	FULLWIDTHGREATERTHAN: NC,
	FULLWIDTHLEFTPAREN: EC,
	FULLWIDTHLESSTHAN: MC,
	FULLWIDTHMIDDLEDOT: ew,
	FULLWIDTHRIGHTPAREN: DC,
	HYPHEN: qC,
	LEFTCORNERBRACKET: OC,
	LEFTWHITECORNERBRACKET: AC,
	LOCALHOST: uC,
	NL: _C,
	NUM: hC,
	OPENANGLEBRACKET: wC,
	OPENBRACE: vC,
	OPENBRACKET: bC,
	OPENPAREN: SC,
	PERCENT: JC,
	PIPE: YC,
	PLUS: XC,
	POUND: ZC,
	QUERY: QC,
	QUOTE: $C,
	RIGHTCORNERBRACKET: kC,
	RIGHTWHITECORNERBRACKET: jC,
	SCHEME: pC,
	SEMI: tw,
	SLASH: nw,
	SLASH_SCHEME: mC,
	SYM: ow,
	TILDE: rw,
	TLD: dC,
	UNDERSCORE: iw,
	UTLD: fC,
	UWORD: sC,
	WORD: oC,
	WS: gC
}), cw = /[a-z]/, lw = /\p{L}/u, uw = /\p{Emoji}/u, dw = /\d/, fw = /\s/, pw = "\r", mw = "\n", hw = "️", gw = "‍", _w = "￼", vw = null, yw = null;
function bw(e = []) {
	let t = {};
	iC.groups = t;
	let n = new iC();
	vw ??= ww(US), yw ??= ww(WS), Z(n, "'", FC), Z(n, "{", vC), Z(n, "}", yC), Z(n, "[", bC), Z(n, "]", xC), Z(n, "(", SC), Z(n, ")", CC), Z(n, "<", wC), Z(n, ">", TC), Z(n, "（", EC), Z(n, "）", DC), Z(n, "「", OC), Z(n, "」", kC), Z(n, "『", AC), Z(n, "』", jC), Z(n, "＜", MC), Z(n, "＞", NC), Z(n, "&", PC), Z(n, "*", IC), Z(n, "@", LC), Z(n, "`", zC), Z(n, "^", BC), Z(n, ":", VC), Z(n, ",", HC), Z(n, "$", UC), Z(n, ".", WC), Z(n, "=", GC), Z(n, "!", KC), Z(n, "-", qC), Z(n, "%", JC), Z(n, "|", YC), Z(n, "+", XC), Z(n, "#", ZC), Z(n, "?", QC), Z(n, "\"", $C), Z(n, "/", nw), Z(n, ";", tw), Z(n, "~", rw), Z(n, "_", iw), Z(n, "\\", RC), Z(n, "・", ew);
	let r = X(n, dw, hC, { [GS]: !0 });
	X(r, dw, r);
	let i = X(r, cw, cC, { [JS]: !0 }), a = X(r, lw, lC, { [YS]: !0 }), o = X(n, cw, oC, { [KS]: !0 });
	X(o, dw, i), X(o, cw, o), X(i, dw, i), X(i, cw, i);
	let s = X(n, lw, sC, { [qS]: !0 });
	X(s, cw), X(s, dw, a), X(s, lw, s), X(a, dw, a), X(a, cw), X(a, lw, a);
	let c = Z(n, mw, _C, { [eC]: !0 }), l = Z(n, pw, gC, { [eC]: !0 }), u = X(n, fw, gC, { [eC]: !0 });
	Z(n, _w, u), Z(l, mw, c), Z(l, _w, u), X(l, fw, u), Z(u, pw), Z(u, mw), X(u, fw, u), Z(u, _w, u);
	let d = X(n, uw, aw, { [ZS]: !0 });
	Z(d, "#"), X(d, uw, d), Z(d, hw, d);
	let f = Z(d, gw);
	Z(f, "#"), X(f, uw, d);
	let p = [[cw, o], [dw, i]], m = [
		[cw, null],
		[lw, s],
		[dw, a]
	];
	for (let e = 0; e < vw.length; e++) Cw(n, vw[e], dC, oC, p);
	for (let e = 0; e < yw.length; e++) Cw(n, yw[e], fC, sC, m);
	nC(dC, {
		tld: !0,
		ascii: !0
	}, t), nC(fC, {
		utld: !0,
		alpha: !0
	}, t), Cw(n, "file", pC, oC, p), Cw(n, "mailto", pC, oC, p), Cw(n, "http", mC, oC, p), Cw(n, "https", mC, oC, p), Cw(n, "ftp", mC, oC, p), Cw(n, "ftps", mC, oC, p), nC(pC, {
		scheme: !0,
		ascii: !0
	}, t), nC(mC, {
		slashscheme: !0,
		ascii: !0
	}, t), e = e.sort((e, t) => e[0] > t[0] ? 1 : -1);
	for (let t = 0; t < e.length; t++) {
		let r = e[t][0], i = e[t][1] ? { [QS]: !0 } : { [$S]: !0 };
		r.indexOf("-") >= 0 ? i[XS] = !0 : cw.test(r) ? dw.test(r) ? i[JS] = !0 : i[KS] = !0 : i[GS] = !0, aC(n, r, r, i);
	}
	return aC(n, "localhost", uC, { ascii: !0 }), n.jd = new iC(ow), {
		start: n,
		tokens: Object.assign({ groups: t }, sw)
	};
}
function xw(e, t) {
	let n = Sw(t.replace(/[A-Z]/g, (e) => e.toLowerCase())), r = n.length, i = [], a = 0, o = 0;
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
function Sw(e) {
	let t = [], n = e.length, r = 0;
	for (; r < n;) {
		let i = e.charCodeAt(r), a, o = i < 55296 || i > 56319 || r + 1 === n || (a = e.charCodeAt(r + 1)) < 56320 || a > 57343 ? e[r] : e.slice(r, r + 2);
		t.push(o), r += o.length;
	}
	return t;
}
function Cw(e, t, n, r, i) {
	let a, o = t.length;
	for (let n = 0; n < o - 1; n++) {
		let o = t[n];
		e.j[o] ? a = e.j[o] : (a = new iC(r), a.jr = i.slice(), e.j[o] = a), e = a;
	}
	return a = new iC(n), a.jr = i.slice(), e.j[t[o - 1]] = a, a;
}
function ww(e) {
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
var Tw = {
	defaultProtocol: "http",
	events: null,
	format: Dw,
	formatHref: Dw,
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
function Ew(e, t = null) {
	let n = Object.assign({}, Tw);
	e && (n = Object.assign(n, e instanceof Ew ? e.o : e));
	let r = n.ignoreTags, i = [];
	for (let e = 0; e < r.length; e++) i.push(r[e].toUpperCase());
	this.o = n, t && (this.defaultRender = t), this.ignoreTags = i;
}
Ew.prototype = {
	o: Tw,
	ignoreTags: [],
	defaultRender(e) {
		return e;
	},
	check(e) {
		return this.get("validate", e.toString(), e);
	},
	get(e, t, n) {
		let r = t != null, i = this.o[e];
		return i && (typeof i == "object" ? (i = n.t in i ? i[n.t] : Tw[e], typeof i == "function" && r && (i = i(t, n))) : typeof i == "function" && r && (i = i(t, n.t, n)), i);
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
function Dw(e) {
	return e;
}
function Ow(e, t) {
	this.t = "token", this.v = e, this.tk = t;
}
Ow.prototype = {
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
	toObject(e = Tw.defaultProtocol) {
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
function kw(e, t) {
	class n extends Ow {
		constructor(t, n) {
			super(t, n), this.t = e;
		}
	}
	for (let e in t) n.prototype[e] = t[e];
	return n.t = e, n;
}
var Aw = kw("email", {
	isLink: !0,
	toHref() {
		return "mailto:" + this.toString();
	}
}), jw = kw("text"), Mw = kw("nl"), Nw = kw("url", {
	isLink: !0,
	toHref(e = Tw.defaultProtocol) {
		return this.hasProtocol() ? this.v : `${e}://${this.v}`;
	},
	hasProtocol() {
		let e = this.tk;
		return e.length >= 2 && e[0].t !== uC && e[1].t === VC;
	}
}), Pw = (e) => new iC(e);
function Fw({ groups: e }) {
	let t = e.domain.concat([
		PC,
		IC,
		LC,
		RC,
		zC,
		BC,
		UC,
		GC,
		qC,
		hC,
		JC,
		YC,
		XC,
		ZC,
		nw,
		ow,
		rw,
		iw
	]), n = [
		FC,
		VC,
		HC,
		WC,
		KC,
		JC,
		QC,
		$C,
		tw,
		wC,
		TC,
		vC,
		yC,
		xC,
		bC,
		SC,
		CC,
		EC,
		DC,
		OC,
		kC,
		AC,
		jC,
		MC,
		NC
	], r = [
		PC,
		FC,
		IC,
		RC,
		zC,
		BC,
		UC,
		GC,
		qC,
		vC,
		yC,
		JC,
		YC,
		XC,
		ZC,
		QC,
		nw,
		ow,
		rw,
		iw
	], i = Pw(), a = Z(i, rw);
	Y(a, r, a), Y(a, e.domain, a);
	let o = Pw(), s = Pw(), c = Pw();
	Y(i, e.domain, o), Y(i, e.scheme, s), Y(i, e.slashscheme, c), Y(o, r, a), Y(o, e.domain, o);
	let l = Z(o, LC);
	Z(a, LC, l), Z(s, LC, l), Z(c, LC, l);
	let u = Z(a, WC);
	Y(u, r, a), Y(u, e.domain, a);
	let d = Pw();
	Y(l, e.domain, d), Y(d, e.domain, d);
	let f = Z(d, WC);
	Y(f, e.domain, d);
	let p = Pw(Aw);
	Y(f, e.tld, p), Y(f, e.utld, p), Z(l, uC, p);
	let m = Z(d, qC);
	Z(m, qC, m), Y(m, e.domain, d), Y(p, e.domain, d), Z(p, WC, f), Z(p, qC, m), Y(Z(p, VC), e.numeric, Aw);
	let h = Z(o, qC), g = Z(o, WC);
	Z(h, qC, h), Y(h, e.domain, o), Y(g, r, a), Y(g, e.domain, o);
	let _ = Pw(Nw);
	Y(g, e.tld, _), Y(g, e.utld, _), Y(_, e.domain, o), Y(_, r, a), Z(_, WC, g), Z(_, qC, h), Z(_, LC, l);
	let v = Z(_, VC), y = Pw(Nw);
	Y(v, e.numeric, y);
	let b = Pw(Nw), x = Pw();
	Y(b, t, b), Y(b, n, x), Y(x, t, b), Y(x, n, x), Z(_, nw, b), Z(y, nw, b);
	let S = Z(s, VC), C = Z(Z(Z(c, VC), nw), nw);
	Y(s, e.domain, o), Z(s, WC, g), Z(s, qC, h), Y(c, e.domain, o), Z(c, WC, g), Z(c, qC, h), Y(S, e.domain, b), Z(S, nw, b), Z(S, QC, b), Y(C, e.domain, b), Y(C, t, b), Z(C, nw, b);
	let w = [
		[vC, yC],
		[bC, xC],
		[SC, CC],
		[wC, TC],
		[EC, DC],
		[OC, kC],
		[AC, jC],
		[MC, NC]
	];
	for (let e = 0; e < w.length; e++) {
		let [r, i] = w[e], a = Z(b, r);
		Z(x, r, a), Z(a, i, b);
		let o = Pw(Nw);
		Y(a, t, o);
		let s = Pw();
		Y(a, n), Y(o, t, o), Y(o, n, s), Y(s, t, o), Y(s, n, s), Z(o, i, b), Z(s, i, b);
	}
	return Z(i, uC, _), Z(i, _C, Mw), {
		start: i,
		tokens: sw
	};
}
function Iw(e, t, n) {
	let r = n.length, i = 0, a = [], o = [];
	for (; i < r;) {
		let s = e, c = null, l = null, u = 0, d = null, f = -1;
		for (; i < r && !(c = s.go(n[i].t));) o.push(n[i++]);
		for (; i < r && (l = c || s.go(n[i].t));) c = null, s = l, s.accepts() ? (f = 0, d = s) : f >= 0 && f++, i++, u++;
		if (f < 0) i -= u, i < r && (o.push(n[i]), i++);
		else {
			o.length > 0 && (a.push(Lw(jw, t, o)), o = []), i -= f, u -= f;
			let e = d.t, r = n.slice(i - u, i);
			a.push(Lw(e, t, r));
		}
	}
	return o.length > 0 && a.push(Lw(jw, t, o)), a;
}
function Lw(e, t, n) {
	let r = n[0].s, i = n[n.length - 1].e;
	return new e(t.slice(r, i), n);
}
var Rw = typeof console < "u" && console && console.warn || (() => {}), zw = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", Q = {
	scanner: null,
	parser: null,
	tokenQueue: [],
	pluginQueue: [],
	customSchemes: [],
	initialized: !1
};
function Bw(e, t) {
	if (typeof t != "function") throw Error(`linkifyjs: Invalid plugin ${t} (expects function)`);
	for (let n = 0; n < Q.pluginQueue.length; n++) if (e === Q.pluginQueue[n][0]) {
		Rw(`linkifyjs: plugin "${e}" already registered - will be overwritten`), Q.pluginQueue[n] = [e, t];
		return;
	}
	Q.pluginQueue.push([e, t]), Q.initialized && Rw(`linkifyjs: already initialized - will not register plugin "${e}" ${zw}`);
}
function Vw(e, t = !1) {
	if (Q.initialized && Rw(`linkifyjs: already initialized - will not register custom scheme "${e}" ${zw}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(e)) throw Error("linkifyjs: incorrect scheme format.\n1. Must only contain digits, lowercase ASCII letters or \"-\"\n2. Cannot start or end with \"-\"\n3. \"-\" cannot repeat");
	Q.customSchemes.push([e, t]);
}
function Hw() {
	Q.scanner = bw(Q.customSchemes);
	for (let e = 0; e < Q.tokenQueue.length; e++) Q.tokenQueue[e][1]({ scanner: Q.scanner });
	Q.parser = Fw(Q.scanner.tokens);
	for (let e = 0; e < Q.pluginQueue.length; e++) Q.pluginQueue[e][1]({
		scanner: Q.scanner,
		parser: Q.parser
	});
	return Q.initialized = !0, Q;
}
function Uw(e) {
	return Q.initialized || Hw(), Iw(Q.parser.start, e, xw(Q.scanner.start, e));
}
Uw.scan = xw;
function Ww(e, t = null, n = null) {
	if (t && typeof t == "object") {
		if (n) throw Error(`linkifyjs: Invalid link type ${t}; must be a string`);
		n = t, t = null;
	}
	let r = new Ew(n), i = Uw(e), a = [];
	for (let e = 0; e < i.length; e++) {
		let n = i[e];
		n.isLink && (!t || n.t === t) && r.check(n) && a.push(n.toFormattedObject(r));
	}
	return a;
}
function Gw(e, t = null) {
	let n = Uw(e);
	return n.length === 1 && n[0].isLink && (!t || n[0].t === t);
}
//#endregion
//#region ../../node_modules/linkify-react/dist/linkify-react.mjs
function Kw(t, n, r) {
	let i = Uw(t), a = [];
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
function qw(t, n, r) {
	if (e.Children.count(t.props.children) === 0) return t;
	let i = [];
	e.Children.forEach(t.props.children, (t) => {
		typeof t == "string" ? i.push.apply(i, Kw(t, n, r)) : e.isValidElement(t) ? typeof t.type == "string" && n.ignoreTags.indexOf(t.type.toUpperCase()) >= 0 ? i.push(t) : i.push(qw(t, n, r)) : i.push(t);
	});
	let a = `__linkify-el-${r.elementId++}`, o = Object.assign({ key: a }, t.props);
	return e.cloneElement(t, o, i);
}
var Jw = (t) => {
	let n = 0, r = ({ tagName: t, attributes: r, content: i }) => (r.key = `__linkify-lnk-${n++}`, r.class && (r.className = r.class, delete r.class), e.createElement(t, r, i)), i = { key: "__linkify-wrapper" };
	for (let e in t) e !== "options" && e !== "as" && e !== "tagName" && e !== "children" && (i[e] = t[e]);
	let a = new Ew(t.options, r), o = t.as || t.tagName || e.Fragment || "span", s = t.children;
	return qw(e.createElement(o, i, s), a, { elementId: 0 });
}, Yw = { container: "_container_15awj_8" };
//#endregion
//#region ../../node_modules/linkify-string/dist/linkify-string.mjs
function Xw(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Zw(e) {
	return e.replace(/"/g, "&quot;");
}
function Qw(e) {
	let t = [];
	for (let n in e) {
		let r = e[n] + "";
		t.push(`${n}="${Zw(r)}"`);
	}
	return t.join(" ");
}
function $w({ tagName: e, attributes: t, content: n }) {
	return `<${e} ${Qw(t)}>${Xw(n)}</${e}>`;
}
function eT(e, t = {}) {
	t = new Ew(t, $w);
	let n = Uw(e), r = [];
	for (let e = 0; e < n.length; e++) {
		let i = n[e];
		i.t === "nl" && t.get("nl2br") ? r.push("<br>\n") : !i.isLink || !t.check(i) ? r.push(Xw(i.toString())) : r.push(t.render(i));
	}
	return r.join("");
}
String.prototype.linkify || Object.defineProperty(String.prototype, "linkify", {
	writable: !1,
	value: function(e) {
		return eT(this, e);
	}
});
//#endregion
//#region ../../node_modules/linkify-html/dist/linkify-html.mjs
var tT = {
	amp: "&",
	gt: ">",
	lt: "<",
	nbsp: "\xA0",
	quot: "\""
}, nT = /^#[xX]([A-Fa-f0-9]+)$/, rT = /^#([0-9]+)$/, iT = /^([A-Za-z0-9]+)$/, aT = function() {
	function e(e) {
		this.named = e;
	}
	return e.prototype.parse = function(e) {
		if (e) {
			var t = e.match(nT);
			if (t) return String.fromCharCode(parseInt(t[1], 16));
			if (t = e.match(rT), t) return String.fromCharCode(parseInt(t[1], 10));
			if (t = e.match(iT), t) return this.named[t[1]] || "&" + t[1] + ";";
		}
	}, e;
}(), oT = /[\t\n\f ]/, sT = /[A-Za-z]/, cT = /\r\n?/g;
function lT(e) {
	return oT.test(e);
}
function uT(e) {
	return sT.test(e);
}
function dT(e) {
	return e.replace(cT, "\n");
}
var fT = function() {
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
				e === "!" ? this.transitionTo("markupDeclarationOpen") : e === "/" ? this.transitionTo("endTagOpen") : (e === "@" || e === ":" || uT(e)) && (this.transitionTo("tagName"), this.tagNameBuffer = "", this.delegate.beginStartTag(), this.appendToTagName(e));
			},
			markupDeclarationOpen: function() {
				var e = this.consume();
				e === "-" && this.peek() === "-" ? (this.consume(), this.transitionTo("commentStart"), this.delegate.beginComment()) : e.toUpperCase() + this.input.substring(this.index, this.index + 6).toUpperCase() === "DOCTYPE" && (this.consume(), this.consume(), this.consume(), this.consume(), this.consume(), this.consume(), this.transitionTo("doctype"), this.delegate.beginDoctype && this.delegate.beginDoctype());
			},
			doctype: function() {
				lT(this.consume()) && this.transitionTo("beforeDoctypeName");
			},
			beforeDoctypeName: function() {
				var e = this.consume();
				lT(e) || (this.transitionTo("doctypeName"), this.delegate.appendToDoctypeName && this.delegate.appendToDoctypeName(e.toLowerCase()));
			},
			doctypeName: function() {
				var e = this.consume();
				lT(e) ? this.transitionTo("afterDoctypeName") : e === ">" ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : this.delegate.appendToDoctypeName && this.delegate.appendToDoctypeName(e.toLowerCase());
			},
			afterDoctypeName: function() {
				var e = this.consume();
				if (!lT(e)) if (e === ">") this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData");
				else {
					var t = e.toUpperCase() + this.input.substring(this.index, this.index + 5).toUpperCase(), n = t.toUpperCase() === "PUBLIC", r = t.toUpperCase() === "SYSTEM";
					(n || r) && (this.consume(), this.consume(), this.consume(), this.consume(), this.consume(), this.consume()), n ? this.transitionTo("afterDoctypePublicKeyword") : r && this.transitionTo("afterDoctypeSystemKeyword");
				}
			},
			afterDoctypePublicKeyword: function() {
				var e = this.peek();
				if (lT(e)) this.transitionTo("beforeDoctypePublicIdentifier"), this.consume();
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
				lT(e) ? this.transitionTo("betweenDoctypePublicAndSystemIdentifiers") : e === ">" ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : e === "\"" ? this.transitionTo("doctypeSystemIdentifierDoubleQuoted") : e === "'" && this.transitionTo("doctypeSystemIdentifierSingleQuoted");
			},
			betweenDoctypePublicAndSystemIdentifiers: function() {
				var e = this.consume();
				lT(e) || (e === ">" ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : e === "\"" ? this.transitionTo("doctypeSystemIdentifierDoubleQuoted") : e === "'" && this.transitionTo("doctypeSystemIdentifierSingleQuoted"));
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
				lT(e) || e === ">" && (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData"));
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
				lT(e) ? this.transitionTo("beforeAttributeName") : e === "/" ? this.transitionTo("selfClosingStartTag") : e === ">" ? (this.delegate.finishTag(), this.transitionTo("beforeData")) : this.appendToTagName(e);
			},
			endTagName: function() {
				var e = this.consume();
				lT(e) ? (this.transitionTo("beforeAttributeName"), this.tagNameBuffer = "") : e === "/" ? (this.transitionTo("selfClosingStartTag"), this.tagNameBuffer = "") : e === ">" ? (this.delegate.finishTag(), this.transitionTo("beforeData"), this.tagNameBuffer = "") : this.appendToTagName(e);
			},
			beforeAttributeName: function() {
				var e = this.peek();
				if (lT(e)) {
					this.consume();
					return;
				} else e === "/" ? (this.transitionTo("selfClosingStartTag"), this.consume()) : e === ">" ? (this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : e === "=" ? (this.delegate.reportSyntaxError("attribute name cannot start with equals sign"), this.transitionTo("attributeName"), this.delegate.beginAttribute(), this.consume(), this.delegate.appendToAttributeName(e)) : (this.transitionTo("attributeName"), this.delegate.beginAttribute());
			},
			attributeName: function() {
				var e = this.peek();
				lT(e) ? (this.transitionTo("afterAttributeName"), this.consume()) : e === "/" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("selfClosingStartTag")) : e === "=" ? (this.transitionTo("beforeAttributeValue"), this.consume()) : e === ">" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : e === "\"" || e === "'" || e === "<" ? (this.delegate.reportSyntaxError(e + " is not a valid character within attribute names"), this.consume(), this.delegate.appendToAttributeName(e)) : (this.consume(), this.delegate.appendToAttributeName(e));
			},
			afterAttributeName: function() {
				var e = this.peek();
				if (lT(e)) {
					this.consume();
					return;
				} else e === "/" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("selfClosingStartTag")) : e === "=" ? (this.consume(), this.transitionTo("beforeAttributeValue")) : e === ">" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.transitionTo("attributeName"), this.delegate.beginAttribute(), this.consume(), this.delegate.appendToAttributeName(e));
			},
			beforeAttributeValue: function() {
				var e = this.peek();
				lT(e) ? this.consume() : e === "\"" ? (this.transitionTo("attributeValueDoubleQuoted"), this.delegate.beginAttributeValue(!0), this.consume()) : e === "'" ? (this.transitionTo("attributeValueSingleQuoted"), this.delegate.beginAttributeValue(!0), this.consume()) : e === ">" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : (this.transitionTo("attributeValueUnquoted"), this.delegate.beginAttributeValue(!1), this.consume(), this.delegate.appendToAttributeValue(e));
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
				lT(e) ? (this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("beforeAttributeName")) : e === "/" ? (this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("selfClosingStartTag")) : e === "&" ? (this.consume(), this.delegate.appendToAttributeValue(this.consumeCharRef() || "&")) : e === ">" ? (this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : (this.consume(), this.delegate.appendToAttributeValue(e));
			},
			afterAttributeValueQuoted: function() {
				var e = this.peek();
				lT(e) ? (this.consume(), this.transitionTo("beforeAttributeName")) : e === "/" ? (this.consume(), this.transitionTo("selfClosingStartTag")) : e === ">" ? (this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : this.transitionTo("beforeAttributeName");
			},
			selfClosingStartTag: function() {
				this.peek() === ">" ? (this.consume(), this.delegate.markTagAsSelfClosing(), this.delegate.finishTag(), this.transitionTo("beforeData")) : this.transitionTo("beforeAttributeName");
			},
			endTagOpen: function() {
				var e = this.consume();
				(e === "@" || e === ":" || uT(e)) && (this.transitionTo("endTagName"), this.tagNameBuffer = "", this.delegate.beginEndTag(), this.appendToTagName(e));
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
		for (this.input += dT(e); this.index < this.input.length;) {
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
}(), pT = function() {
	function e(e, t) {
		t === void 0 && (t = {}), this.options = t, this.token = null, this.startLine = 1, this.startColumn = 0, this.tokens = [], this.tokenizer = new fT(this, e, t.mode), this._currentAttribute = void 0;
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
function mT(e, t) {
	return new pT(new aT(tT), t).tokenize(e);
}
var hT = "LinkifyResult", gT = "StartTag", _T = "EndTag", vT = "Chars", yT = "Comment", bT = "Doctype";
function xT(e, t = {}) {
	let n = mT(e), r = [], i = [], a = new Ew(t, wT);
	for (let e = 0; e < n.length; e++) {
		let t = n[e];
		if (t.type === gT) {
			r.push(t);
			let i = t.tagName.toUpperCase();
			if (!(i === "A" || a.ignoreTags.indexOf(i) >= 0)) continue;
			let o = r.length;
			CT(i, n, ++e, r), e += r.length - o - 1;
		} else if (t.type !== vT) r.push(t);
		else {
			let e = ST(t.chars, a);
			r.push.apply(r, e);
		}
	}
	for (let e = 0; e < r.length; e++) {
		let t = r[e];
		switch (t.type) {
			case hT:
				i.push(t.rendered);
				break;
			case gT: {
				let e = "<" + t.tagName;
				t.attributes.length > 0 && (e += " " + OT(t.attributes).join(" ")), t.selfClosing && (e += " /"), e += ">", i.push(e);
				break;
			}
			case _T:
				i.push(`</${t.tagName}>`);
				break;
			case vT:
				i.push(TT(t.chars));
				break;
			case yT:
				i.push(`<!--${TT(t.chars)}-->`);
				break;
			case bT: {
				let e = `<!DOCTYPE ${t.name}`;
				t.publicIdentifier && (e += ` PUBLIC "${t.publicIdentifier}"`), t.systemIdentifier && (e += ` "${t.systemIdentifier}"`), e += ">", i.push(e);
				break;
			}
		}
	}
	return i.join("");
}
function ST(e, t) {
	let n = Uw(e), r = [];
	for (let e = 0; e < n.length; e++) {
		let i = n[e];
		i.t === "nl" && t.get("nl2br") ? r.push({
			type: gT,
			tagName: "br",
			attributes: [],
			selfClosing: !0
		}) : !i.isLink || !t.check(i) ? r.push({
			type: vT,
			chars: i.toString()
		}) : r.push({
			type: hT,
			rendered: t.render(i)
		});
	}
	return r;
}
function CT(e, t, n, r) {
	let i = 1;
	for (; n < t.length && i > 0;) {
		let a = t[n];
		a.type === gT && a.tagName.toUpperCase() === e ? i++ : a.type === _T && a.tagName.toUpperCase() === e && i--, r.push(a), n++;
	}
	return r;
}
function wT({ tagName: e, attributes: t, content: n }) {
	return `<${e} ${DT(t)}>${TT(n)}</${e}>`;
}
function TT(e) {
	return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ET(e) {
	return e.replace(/"/g, "&quot;");
}
function DT(e) {
	let t = [];
	for (let n in e) {
		let r = e[n] + "";
		t.push(`${n}="${ET(r)}"`);
	}
	return t.join(" ");
}
function OT(e) {
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n][0], i = e[n][1] + "";
		t.push(`${r}="${ET(i)}"`);
	}
	return t;
}
//#endregion
//#region src/core/utils/linkify.ts
var kT = [
	"file",
	"mailto",
	"http",
	"https",
	"ftp",
	"ftps"
], AT = [
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
], jT = [...kT, ...AT], MT = /* @__PURE__ */ function(e) {
	return e.URL = "url", e.UserId = "userid", e.RoomAlias = "roomalias", e;
}({});
function NT({ scanner: e, parser: t, token: n, name: r }) {
	let { DOT: i, NUM: a, COLON: o, SYM: s, SLASH: c, EQUALS: l, HYPHEN: u, UNDERSCORE: d } = e.tokens, { domain: f } = e.tokens.groups, p = [
		i,
		s,
		c,
		l,
		d,
		u
	], m = [u], h = new iC(kw(r, { isLink: !0 })), g = new iC(kw(r, { isLink: !0 })), _ = t.start.tt(n), v = new iC();
	_.ta(f, v), _.ta(p, v), v.ta(f, v), v.ta(p, v);
	let y = v.tt(o);
	y.ta(f, h), y.ta(m, h), h.ta(f, h), h.ta(m, h), h.tt(i, y), h.tt(o).tt(a, g);
}
function PT({ urlListener: e, roomAliasListener: t, userIdListener: n, urlTargetTransformer: r, hrefTransformer: i, onLinkClick: a }) {
	let o = (r, i) => {
		switch (i) {
			case MT.URL:
				if (e) return e(r);
				break;
			case MT.UserId:
				if (n) return n(r);
				break;
			case MT.RoomAlias:
				if (t) return t(r);
				break;
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
			let n = { [`data-${LT}`]: "true" }, r = o(e, t);
			return r?.click && (n.onClick = r.click), a && (n.onClick = (e) => {
				a(e), r?.click?.(e);
			}), n;
		},
		target(e, t) {
			return t === MT.URL && r ? r(e) : "_blank";
		},
		...i ? { formatHref: (e, t) => i(e, t) } : void 0,
		validate: (e, r) => !!(r === MT.UserId && n) || !!(r === MT.RoomAlias && t) || !!(r === MT.URL && URL.canParse(e))
	};
}
function FT(e) {
	return Ww(e);
}
function IT(e) {
	return Gw(e);
}
var LT = "linkified", RT = !1;
function zT() {
	RT ||= (Bw(MT.RoomAlias, ({ scanner: e, parser: t }) => {
		let n = e.tokens.POUND;
		NT({
			scanner: e,
			parser: t,
			token: n,
			name: MT.RoomAlias
		});
	}), Bw(MT.UserId, ({ scanner: e, parser: t }) => {
		let n = e.tokens.AT;
		NT({
			scanner: e,
			parser: t,
			token: n,
			name: MT.UserId
		});
	}), Vw("mxc", !1), jT.forEach((e) => {
		kT.includes(e) || Vw(e, AT.includes(e));
	}), !0);
}
zT();
//#endregion
//#region src/core/utils/LinkedText/LinkedTextContext.tsx
var BT = i(null);
BT.displayName = "LinkedTextContext";
function VT() {
	let e = l(BT);
	if (!e) throw Error("useLinkedTextContextOpts must be used within an LinkedTextContext.Provider");
	return e;
}
//#endregion
//#region src/core/utils/LinkedText/LinkedText.tsx
function HT({ children: e, className: n, onLinkClick: r, ...i }) {
	let a = PT({
		...VT(),
		onLinkClick: r
	});
	return /* @__PURE__ */ t.createElement(Jw, {
		className: (0, V.default)(Yw.container, n),
		as: N,
		options: {
			...a,
			render: O
		},
		...i
	}, e);
}
//#endregion
//#region src/event-tiles/UrlPreviewGroupView/LinkPreview/LinkPreview.tsx
function UT({ onImageClick: e, ...n }) {
	let { translate: r } = U(), i = p(() => n.showTooltipOnLink ? new URL(n.link, window.location.href).toString() : null, [n.link, n.showTooltipOnLink]), a = c((t) => {
		t.button != 0 || t.metaKey || (t.preventDefault(), n.image?.imageFull && e());
	}, [n.image?.imageFull, e]), o;
	n.image?.imageThumb && (o = /* @__PURE__ */ t.createElement("button", {
		"aria-label": r("timeline|url_preview|view_image"),
		className: HS.image,
		onClick: a
	}, /* @__PURE__ */ t.createElement("img", {
		className: HS.thumbnail,
		src: n.image.imageThumb,
		alt: ""
	})));
	let s = /* @__PURE__ */ t.createElement("a", {
		className: HS.link,
		href: n.link,
		target: "_blank",
		rel: "noreferrer noopener"
	}, n.title);
	return /* @__PURE__ */ t.createElement("div", { className: (0, V.default)(HS.container) }, /* @__PURE__ */ t.createElement("div", { className: HS.wrapImageCaption }, o, /* @__PURE__ */ t.createElement("div", { className: HS.caption }, /* @__PURE__ */ t.createElement(N, {
		type: "body",
		size: "md",
		className: HS.title
	}, i ? /* @__PURE__ */ t.createElement(se, { label: i }, s) : s, n.siteName && /* @__PURE__ */ t.createElement(N, {
		as: "span",
		size: "md",
		weight: "regular"
	}, " - " + n.siteName)), n.description && /* @__PURE__ */ t.createElement(HT, { className: HS.description }, n.description))));
}
var WT = {
	previewGroup: "_previewGroup_vzeae_8",
	compactLayout: "_compactLayout_vzeae_15",
	toggleButton: "_toggleButton_vzeae_20",
	wrapper: "_wrapper_vzeae_29"
};
//#endregion
//#region src/event-tiles/UrlPreviewGroupView/UrlPreviewGroupView.tsx
function GT({ vm: e }) {
	let { translate: n } = U(), { previews: r, totalPreviewCount: i, previewsLimited: a, overPreviewLimit: o, compactLayout: s } = J(e);
	if (r.length === 0) return null;
	let c;
	return o && (c = /* @__PURE__ */ t.createElement(y, {
		className: WT.toggleButton,
		kind: "tertiary",
		size: "sm",
		onClick: e.onTogglePreviewLimit
	}, a ? n("timeline|url_preview|show_n_more", { count: i - r.length }) : n("action|collapse"))), /* @__PURE__ */ t.createElement("div", { className: WT.wrapper }, /* @__PURE__ */ t.createElement("div", { className: (0, V.default)(WT.previewGroup, s && WT.compactLayout) }, r.map((n) => /* @__PURE__ */ t.createElement(UT, {
		key: n.link,
		onImageClick: () => e.onImageClick(n),
		...n
	})), c), /* @__PURE__ */ t.createElement(E, {
		size: "20px",
		onClick: e.onHideClick,
		"aria-label": n("timeline|url_preview|close")
	}, /* @__PURE__ */ t.createElement(PS, null)));
}
var KT = {
	readMarker: "_readMarker_1rvym_8",
	line: "_line_1rvym_15"
};
//#endregion
//#region src/room/timeline/ReadMarker/ReadMarker.tsx
function qT({ eventId: e, kind: n, showLine: r = !0, onCurrentMarkerRef: i, onGhostLineRef: a, onGhostTransitionEnd: o, className: s }) {
	let c = null;
	return n === "ghost" ? c = /* @__PURE__ */ t.createElement("hr", {
		className: KT.line,
		ref: a,
		onTransitionEnd: o,
		"data-eventid": e
	}) : r && (c = /* @__PURE__ */ t.createElement("hr", { className: KT.line })), /* @__PURE__ */ t.createElement("li", {
		className: (0, V.default)(s, KT.readMarker),
		ref: n === "current" ? i : void 0,
		"data-scroll-tokens": n === "current" ? e : void 0
	}, c);
}
//#endregion
//#region ../../node_modules/domelementtype/lib/index.js
var JT = /* @__PURE__ */ P(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.Doctype = e.CDATA = e.Tag = e.Style = e.Script = e.Comment = e.Directive = e.Text = e.Root = e.isTag = e.ElementType = void 0;
	var t;
	(function(e) {
		e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype";
	})(t = e.ElementType ||= {});
	function n(e) {
		return e.type === t.Tag || e.type === t.Script || e.type === t.Style;
	}
	e.isTag = n, e.Root = t.Root, e.Text = t.Text, e.Directive = t.Directive, e.Comment = t.Comment, e.Script = t.Script, e.Style = t.Style, e.Tag = t.Tag, e.CDATA = t.CDATA, e.Doctype = t.Doctype;
})), YT = /* @__PURE__ */ P(((e) => {
	var t = e && e.__extends || (function() {
		var e = function(t, n) {
			return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
				e.__proto__ = t;
			} || function(e, t) {
				for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
			}, e(t, n);
		};
		return function(t, n) {
			if (typeof n != "function" && n !== null) throw TypeError("Class extends value " + String(n) + " is not a constructor or null");
			e(t, n);
			function r() {
				this.constructor = t;
			}
			t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
		};
	})(), n = e && e.__assign || function() {
		return n = Object.assign || function(e) {
			for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
			return e;
		}, n.apply(this, arguments);
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.cloneNode = e.hasChildren = e.isDocument = e.isDirective = e.isComment = e.isText = e.isCDATA = e.isTag = e.Element = e.Document = e.CDATA = e.NodeWithChildren = e.ProcessingInstruction = e.Comment = e.Text = e.DataNode = e.Node = void 0;
	var r = JT(), i = function() {
		function e() {
			this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
		}
		return Object.defineProperty(e.prototype, "parentNode", {
			get: function() {
				return this.parent;
			},
			set: function(e) {
				this.parent = e;
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "previousSibling", {
			get: function() {
				return this.prev;
			},
			set: function(e) {
				this.prev = e;
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "nextSibling", {
			get: function() {
				return this.next;
			},
			set: function(e) {
				this.next = e;
			},
			enumerable: !1,
			configurable: !0
		}), e.prototype.cloneNode = function(e) {
			return e === void 0 && (e = !1), b(this, e);
		}, e;
	}();
	e.Node = i;
	var a = function(e) {
		t(n, e);
		function n(t) {
			var n = e.call(this) || this;
			return n.data = t, n;
		}
		return Object.defineProperty(n.prototype, "nodeValue", {
			get: function() {
				return this.data;
			},
			set: function(e) {
				this.data = e;
			},
			enumerable: !1,
			configurable: !0
		}), n;
	}(i);
	e.DataNode = a;
	var o = function(e) {
		t(n, e);
		function n() {
			var t = e !== null && e.apply(this, arguments) || this;
			return t.type = r.ElementType.Text, t;
		}
		return Object.defineProperty(n.prototype, "nodeType", {
			get: function() {
				return 3;
			},
			enumerable: !1,
			configurable: !0
		}), n;
	}(a);
	e.Text = o;
	var s = function(e) {
		t(n, e);
		function n() {
			var t = e !== null && e.apply(this, arguments) || this;
			return t.type = r.ElementType.Comment, t;
		}
		return Object.defineProperty(n.prototype, "nodeType", {
			get: function() {
				return 8;
			},
			enumerable: !1,
			configurable: !0
		}), n;
	}(a);
	e.Comment = s;
	var c = function(e) {
		t(n, e);
		function n(t, n) {
			var i = e.call(this, n) || this;
			return i.name = t, i.type = r.ElementType.Directive, i;
		}
		return Object.defineProperty(n.prototype, "nodeType", {
			get: function() {
				return 1;
			},
			enumerable: !1,
			configurable: !0
		}), n;
	}(a);
	e.ProcessingInstruction = c;
	var l = function(e) {
		t(n, e);
		function n(t) {
			var n = e.call(this) || this;
			return n.children = t, n;
		}
		return Object.defineProperty(n.prototype, "firstChild", {
			get: function() {
				return this.children[0] ?? null;
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(n.prototype, "lastChild", {
			get: function() {
				return this.children.length > 0 ? this.children[this.children.length - 1] : null;
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(n.prototype, "childNodes", {
			get: function() {
				return this.children;
			},
			set: function(e) {
				this.children = e;
			},
			enumerable: !1,
			configurable: !0
		}), n;
	}(i);
	e.NodeWithChildren = l;
	var u = function(e) {
		t(n, e);
		function n() {
			var t = e !== null && e.apply(this, arguments) || this;
			return t.type = r.ElementType.CDATA, t;
		}
		return Object.defineProperty(n.prototype, "nodeType", {
			get: function() {
				return 4;
			},
			enumerable: !1,
			configurable: !0
		}), n;
	}(l);
	e.CDATA = u;
	var d = function(e) {
		t(n, e);
		function n() {
			var t = e !== null && e.apply(this, arguments) || this;
			return t.type = r.ElementType.Root, t;
		}
		return Object.defineProperty(n.prototype, "nodeType", {
			get: function() {
				return 9;
			},
			enumerable: !1,
			configurable: !0
		}), n;
	}(l);
	e.Document = d;
	var f = function(e) {
		t(n, e);
		function n(t, n, i, a) {
			i === void 0 && (i = []), a === void 0 && (a = t === "script" ? r.ElementType.Script : t === "style" ? r.ElementType.Style : r.ElementType.Tag);
			var o = e.call(this, i) || this;
			return o.name = t, o.attribs = n, o.type = a, o;
		}
		return Object.defineProperty(n.prototype, "nodeType", {
			get: function() {
				return 1;
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(n.prototype, "tagName", {
			get: function() {
				return this.name;
			},
			set: function(e) {
				this.name = e;
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(n.prototype, "attributes", {
			get: function() {
				var e = this;
				return Object.keys(this.attribs).map(function(t) {
					return {
						name: t,
						value: e.attribs[t],
						namespace: e["x-attribsNamespace"]?.[t],
						prefix: e["x-attribsPrefix"]?.[t]
					};
				});
			},
			enumerable: !1,
			configurable: !0
		}), n;
	}(l);
	e.Element = f;
	function p(e) {
		return (0, r.isTag)(e);
	}
	e.isTag = p;
	function m(e) {
		return e.type === r.ElementType.CDATA;
	}
	e.isCDATA = m;
	function h(e) {
		return e.type === r.ElementType.Text;
	}
	e.isText = h;
	function g(e) {
		return e.type === r.ElementType.Comment;
	}
	e.isComment = g;
	function _(e) {
		return e.type === r.ElementType.Directive;
	}
	e.isDirective = _;
	function v(e) {
		return e.type === r.ElementType.Root;
	}
	e.isDocument = v;
	function y(e) {
		return Object.prototype.hasOwnProperty.call(e, "children");
	}
	e.hasChildren = y;
	function b(e, t) {
		t === void 0 && (t = !1);
		var r;
		if (h(e)) r = new o(e.data);
		else if (g(e)) r = new s(e.data);
		else if (p(e)) {
			var i = t ? x(e.children) : [], a = new f(e.name, n({}, e.attribs), i);
			i.forEach(function(e) {
				return e.parent = a;
			}), e.namespace != null && (a.namespace = e.namespace), e["x-attribsNamespace"] && (a["x-attribsNamespace"] = n({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (a["x-attribsPrefix"] = n({}, e["x-attribsPrefix"])), r = a;
		} else if (m(e)) {
			var i = t ? x(e.children) : [], l = new u(i);
			i.forEach(function(e) {
				return e.parent = l;
			}), r = l;
		} else if (v(e)) {
			var i = t ? x(e.children) : [], y = new d(i);
			i.forEach(function(e) {
				return e.parent = y;
			}), e["x-mode"] && (y["x-mode"] = e["x-mode"]), r = y;
		} else if (_(e)) {
			var b = new c(e.name, e.data);
			e["x-name"] != null && (b["x-name"] = e["x-name"], b["x-publicId"] = e["x-publicId"], b["x-systemId"] = e["x-systemId"]), r = b;
		} else throw Error(`Not implemented yet: ${e.type}`);
		return r.startIndex = e.startIndex, r.endIndex = e.endIndex, e.sourceCodeLocation != null && (r.sourceCodeLocation = e.sourceCodeLocation), r;
	}
	e.cloneNode = b;
	function x(e) {
		for (var t = e.map(function(e) {
			return b(e, !0);
		}), n = 1; n < t.length; n++) t[n].prev = t[n - 1], t[n - 1].next = t[n];
		return t;
	}
})), XT = /* @__PURE__ */ P(((e) => {
	var t = e && e.__createBinding || (Object.create ? (function(e, t, n, r) {
		r === void 0 && (r = n);
		var i = Object.getOwnPropertyDescriptor(t, n);
		(!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
			enumerable: !0,
			get: function() {
				return t[n];
			}
		}), Object.defineProperty(e, r, i);
	}) : (function(e, t, n, r) {
		r === void 0 && (r = n), e[r] = t[n];
	})), n = e && e.__exportStar || function(e, n) {
		for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(n, r) && t(n, e, r);
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.DomHandler = void 0;
	var r = JT(), i = YT();
	n(YT(), e);
	var a = {
		withStartIndices: !1,
		withEndIndices: !1,
		xmlMode: !1
	}, o = function() {
		function e(e, t, n) {
			this.dom = [], this.root = new i.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof t == "function" && (n = t, t = a), typeof e == "object" && (t = e, e = void 0), this.callback = e ?? null, this.options = t ?? a, this.elementCB = n ?? null;
		}
		return e.prototype.onparserinit = function(e) {
			this.parser = e;
		}, e.prototype.onreset = function() {
			this.dom = [], this.root = new i.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
		}, e.prototype.onend = function() {
			this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
		}, e.prototype.onerror = function(e) {
			this.handleCallback(e);
		}, e.prototype.onclosetag = function() {
			this.lastNode = null;
			var e = this.tagStack.pop();
			this.options.withEndIndices && (e.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(e);
		}, e.prototype.onopentag = function(e, t) {
			var n = this.options.xmlMode ? r.ElementType.Tag : void 0, a = new i.Element(e, t, void 0, n);
			this.addNode(a), this.tagStack.push(a);
		}, e.prototype.ontext = function(e) {
			var t = this.lastNode;
			if (t && t.type === r.ElementType.Text) t.data += e, this.options.withEndIndices && (t.endIndex = this.parser.endIndex);
			else {
				var n = new i.Text(e);
				this.addNode(n), this.lastNode = n;
			}
		}, e.prototype.oncomment = function(e) {
			if (this.lastNode && this.lastNode.type === r.ElementType.Comment) {
				this.lastNode.data += e;
				return;
			}
			var t = new i.Comment(e);
			this.addNode(t), this.lastNode = t;
		}, e.prototype.oncommentend = function() {
			this.lastNode = null;
		}, e.prototype.oncdatastart = function() {
			var e = new i.Text(""), t = new i.CDATA([e]);
			this.addNode(t), e.parent = t, this.lastNode = e;
		}, e.prototype.oncdataend = function() {
			this.lastNode = null;
		}, e.prototype.onprocessinginstruction = function(e, t) {
			var n = new i.ProcessingInstruction(e, t);
			this.addNode(n);
		}, e.prototype.handleCallback = function(e) {
			if (typeof this.callback == "function") this.callback(e, this.dom);
			else if (e) throw e;
		}, e.prototype.addNode = function(e) {
			var t = this.tagStack[this.tagStack.length - 1], n = t.children[t.children.length - 1];
			this.options.withStartIndices && (e.startIndex = this.parser.startIndex), this.options.withEndIndices && (e.endIndex = this.parser.endIndex), t.children.push(e), n && (e.prev = n, n.next = e), e.parent = t, this.lastNode = null;
		}, e;
	}();
	e.DomHandler = o, e.default = o;
})), ZT = /* @__PURE__ */ P(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.CARRIAGE_RETURN_PLACEHOLDER_REGEX = e.CARRIAGE_RETURN_PLACEHOLDER = e.CARRIAGE_RETURN_REGEX = e.CARRIAGE_RETURN = e.CASE_SENSITIVE_TAG_NAMES_MAP = e.CASE_SENSITIVE_TAG_NAMES = void 0, e.CASE_SENSITIVE_TAG_NAMES = /* @__PURE__ */ "animateMotion.animateTransform.clipPath.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.foreignObject.linearGradient.radialGradient.textPath".split("."), e.CASE_SENSITIVE_TAG_NAMES_MAP = e.CASE_SENSITIVE_TAG_NAMES.reduce(function(e, t) {
		return e[t.toLowerCase()] = t, e;
	}, {}), e.CARRIAGE_RETURN = "\r", e.CARRIAGE_RETURN_REGEX = new RegExp(e.CARRIAGE_RETURN, "g"), e.CARRIAGE_RETURN_PLACEHOLDER = `__HTML_DOM_PARSER_CARRIAGE_RETURN_PLACEHOLDER_${Date.now().toString()}__`, e.CARRIAGE_RETURN_PLACEHOLDER_REGEX = new RegExp(e.CARRIAGE_RETURN_PLACEHOLDER, "g");
})), QT = /* @__PURE__ */ P(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.formatAttributes = i, e.hasOpenTag = o, e.escapeSpecialCharacters = s, e.revertEscapedCharacters = c, e.formatDOM = l;
	var t = XT(), n = ZT();
	function r(e) {
		return n.CASE_SENSITIVE_TAG_NAMES_MAP[e];
	}
	function i(e) {
		for (var t = {}, n = 0, r = e.length; n < r; n++) {
			var i = e[n];
			t[i.name] = i.value;
		}
		return t;
	}
	function a(e) {
		return e = e.toLowerCase(), r(e) || e;
	}
	function o(e, t) {
		var n = "<" + t, r = e.toLowerCase().indexOf(n);
		if (r === -1) return !1;
		var i = e[r + n.length];
		return i === ">" || i === " " || i === "	" || i === "\n" || i === "\r" || i === "/";
	}
	function s(e) {
		return e.replace(n.CARRIAGE_RETURN_REGEX, n.CARRIAGE_RETURN_PLACEHOLDER);
	}
	function c(e) {
		return e.replace(n.CARRIAGE_RETURN_PLACEHOLDER_REGEX, n.CARRIAGE_RETURN);
	}
	function l(e, n, r) {
		n === void 0 && (n = null);
		for (var o = [], s, u = 0, d = e.length; u < d; u++) {
			var f = e[u];
			switch (f.nodeType) {
				case 1:
					var p = a(f.nodeName);
					s = new t.Element(p, i(f.attributes)), s.children = l(p === "template" ? f.content.childNodes : f.childNodes, s);
					break;
				case 3:
					s = new t.Text(c(f.nodeValue ?? ""));
					break;
				case 8:
					s = new t.Comment(f.nodeValue ?? "");
					break;
				default: continue;
			}
			var m = o[u - 1] ?? null;
			m && (m.next = s), s.parent = n, s.prev = m, s.next = null, o.push(s);
		}
		return r && (s = new t.ProcessingInstruction(r.substring(0, r.indexOf(" ")).toLowerCase(), r), s.next = o[0] ?? null, s.parent = n, o.unshift(s), o[1] && (o[1].prev = o[0])), o;
	}
})), $T = /* @__PURE__ */ P(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = h;
	var t = QT(), n = "html", r = "head", i = "body", a = /<([a-zA-Z]+[0-9]?)/, o = function(e, t) {
		throw Error("This browser does not support `document.implementation.createHTMLDocument`");
	}, s = function(e, t) {
		throw Error("This browser does not support `DOMParser.prototype.parseFromString`");
	}, c = typeof window == "object" && window.DOMParser;
	if (typeof c == "function") {
		var l = new c(), u = "text/html";
		s = function(e, t) {
			/* istanbul ignore stop */
			return t && (e = `<${t}>${e}</${t}>`), l.parseFromString(e, u);
		}, o = s;
	}
	if (typeof document == "object" && document.implementation) {
		var d = document.implementation.createHTMLDocument();
		o = function(e, t) {
			/* istanbul ignore start */
			if (t) {
				var n = d.documentElement.querySelector(t);
				return n && (n.innerHTML = e), d;
			}
			return d.documentElement.innerHTML = e, d;
		};
	}
	var f = typeof document == "object" && document.createElement("template"), p;
	f && f.content && (p = function(e) {
		return f.innerHTML = e, f.content.childNodes;
	});
	var m = function() {
		return document.createDocumentFragment().childNodes;
	};
	function h(e) {
		var c, l;
		e = (0, t.escapeSpecialCharacters)(e);
		var u = (a.exec(e)?.[1])?.toLowerCase();
		switch (u) {
			case n:
				var d = s(e);
				if (!(0, t.hasOpenTag)(e, r)) {
					var f = d.querySelector(r);
					/* istanbul ignore next */
					(c = f?.parentNode) == null || c.removeChild(f);
				}
				if (!(0, t.hasOpenTag)(e, i)) {
					var f = d.querySelector(i);
					/* istanbul ignore next */
					(l = f?.parentNode) == null || l.removeChild(f);
				}
				return d.querySelectorAll(n);
			case r:
			case i:
				var h = o(e).querySelectorAll(u);
				return (0, t.hasOpenTag)(e, i) && (0, t.hasOpenTag)(e, r) ? h[0].parentNode?.childNodes ?? m() : h;
			default:
				if (p) return p(e);
				/* istanbul ignore start */
				var f = o(e, i).querySelector(i);
				return f?.childNodes ?? m();
		}
	}
})), eE = /* @__PURE__ */ P(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = a;
	var n = t($T()), r = QT(), i = /<(![a-zA-Z\s]+)>/;
	function a(e) {
		if (typeof e != "string") throw TypeError("First argument must be a string");
		if (!e) return [];
		var t = i.exec(e), a = t ? t[1] : void 0;
		return (0, r.formatDOM)((0, n.default)(e), null, a);
	}
})), tE = /* @__PURE__ */ P(((e) => {
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
})), nE = /* @__PURE__ */ P(((e) => {
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
	var { CAMELCASE: m, SAME: h, possibleStandardNames: g } = tE(), _ = RegExp.prototype.test.bind(/* @__PURE__ */ RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")), v = Object.keys(g).reduce((e, t) => {
		let n = g[t];
		return n === h ? e[t] = t : n === m ? e[t.toLowerCase()] = t : e[t] = n, e;
	}, {});
	e.BOOLEAN = i, e.BOOLEANISH_STRING = r, e.NUMERIC = o, e.OVERLOADED_BOOLEAN = a, e.POSITIVE_NUMERIC = s, e.RESERVED = t, e.STRING = n, e.getPropertyInfo = c, e.isCustomAttribute = _, e.possibleStandardNames = v;
})), rE = /* @__PURE__ */ P(((e, t) => {
	var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, r = /\n/g, i = /^\s*/, a = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, o = /^:\s*/, s = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, c = /^[;\s]*/, l = /^\s+|\s+$/g, u = "\n", d = "/", f = "*", p = "", m = "comment", h = "declaration";
	function g(e, t) {
		if (typeof e != "string") throw TypeError("First argument must be a string");
		if (!e) return [];
		t ||= {};
		var l = 1, g = 1;
		function v(e) {
			var t = e.match(r);
			t && (l += t.length);
			var n = e.lastIndexOf(u);
			g = ~n ? e.length - n : g + e.length;
		}
		function y() {
			var e = {
				line: l,
				column: g
			};
			return function(t) {
				return t.position = new b(e), C(), t;
			};
		}
		function b(e) {
			this.start = e, this.end = {
				line: l,
				column: g
			}, this.source = t.source;
		}
		b.prototype.content = e;
		function x(n) {
			var r = /* @__PURE__ */ Error(t.source + ":" + l + ":" + g + ": " + n);
			if (r.reason = n, r.filename = t.source, r.line = l, r.column = g, r.source = e, !t.silent) throw r;
		}
		function S(t) {
			var n = t.exec(e);
			if (n) {
				var r = n[0];
				return v(r), e = e.slice(r.length), n;
			}
		}
		function C() {
			S(i);
		}
		function w(e) {
			var t;
			for (e ||= []; t = T();) t !== !1 && e.push(t);
			return e;
		}
		function T() {
			var t = y();
			if (!(d != e.charAt(0) || f != e.charAt(1))) {
				for (var n = 2; p != e.charAt(n) && (f != e.charAt(n) || d != e.charAt(n + 1));) ++n;
				if (n += 2, p === e.charAt(n - 1)) return x("End of comment missing");
				var r = e.slice(2, n - 2);
				return g += 2, v(r), e = e.slice(n), g += 2, t({
					type: m,
					comment: r
				});
			}
		}
		function E() {
			var e = y(), t = S(a);
			if (t) {
				if (T(), !S(o)) return x("property missing ':'");
				var r = S(s), i = e({
					type: h,
					property: _(t[0].replace(n, p)),
					value: r ? _(r[0].replace(n, p)) : p
				});
				return S(c), i;
			}
		}
		function D() {
			var e = [];
			w(e);
			for (var t; t = E();) t !== !1 && (e.push(t), w(e));
			return e;
		}
		return C(), D();
	}
	function _(e) {
		return e ? e.replace(l, p) : p;
	}
	t.exports = g;
})), iE = /* @__PURE__ */ P(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = r;
	var n = t(rE());
	function r(e, t) {
		let r = null;
		if (!e || typeof e != "string") return r;
		let i = (0, n.default)(e), a = typeof t == "function";
		return i.forEach((e) => {
			if (e.type !== "declaration") return;
			let { property: n, value: i } = e;
			a ? t(n, i, e) : i && (r ||= {}, r[n] = i);
		}), r;
	}
})), aE = /* @__PURE__ */ P(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.camelCase = void 0;
	var t = /^--[a-zA-Z0-9_-]+$/, n = /-([a-z])/g, r = /^[^-]+$/, i = /^-(webkit|moz|ms|o|khtml)-/, a = /^-(ms)-/, o = function(e) {
		return !e || r.test(e) || t.test(e);
	}, s = function(e, t) {
		return t.toUpperCase();
	}, c = function(e, t) {
		return `${t}-`;
	};
	e.camelCase = function(e, t) {
		return t === void 0 && (t = {}), o(e) ? e : (e = e.toLowerCase(), e = t.reactCompat ? e.replace(a, c) : e.replace(i, c), e.replace(n, s));
	};
})), oE = /* @__PURE__ */ P(((e, t) => {
	var n = (e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	})(iE()), r = aE();
	function i(e, t) {
		var i = {};
		return !e || typeof e != "string" || (0, n.default)(e, function(e, n) {
			e && n && (i[(0, r.camelCase)(e, t)] = n);
		}), i;
	}
	i.default = i, t.exports = i;
})), sE = /* @__PURE__ */ P(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.returnFirstArg = e.canTextBeChildOfNode = e.ELEMENTS_WITH_NO_TEXT_CHILDREN = e.PRESERVE_CUSTOM_ATTRIBUTES = void 0, e.isCustomComponent = a, e.setStyleProp = s;
	var n = gp(), r = t(oE()), i = new Set([
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
	e.PRESERVE_CUSTOM_ATTRIBUTES = Number(n.version.split(".")[0]) >= 16, e.ELEMENTS_WITH_NO_TEXT_CHILDREN = new Set([
		"tr",
		"tbody",
		"thead",
		"tfoot",
		"colgroup",
		"table",
		"head",
		"html",
		"frameset"
	]), e.canTextBeChildOfNode = function(t) {
		return !e.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(t.name);
	}, e.returnFirstArg = function(e) {
		return e;
	};
})), cE = /* @__PURE__ */ P(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = o;
	var t = nE(), n = sE(), r = ["checked", "value"], i = [
		"input",
		"select",
		"textarea"
	], a = {
		reset: !0,
		submit: !0
	};
	function o(e, o) {
		e === void 0 && (e = {});
		var c = {}, l = !!(e.type && a[e.type]);
		for (var u in e) {
			var d = e[u];
			if ((0, t.isCustomAttribute)(u)) {
				c[u] = d;
				continue;
			}
			var f = u.toLowerCase(), p = s(f);
			if (p) {
				var m = (0, t.getPropertyInfo)(p);
				switch (r.includes(p) && i.includes(o) && !l && (p = s("default" + f)), c[p] = d, m?.type) {
					case t.BOOLEAN:
						c[p] = !0;
						break;
					case t.OVERLOADED_BOOLEAN:
						d === "" && (c[p] = !0);
						break;
				}
				continue;
			}
			n.PRESERVE_CUSTOM_ATTRIBUTES && (c[u] = d);
		}
		return (0, n.setStyleProp)(e.style, c), c;
	}
	function s(e) {
		return t.possibleStandardNames[e];
	}
})), lE = /* @__PURE__ */ P(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = o;
	var n = gp(), r = t(cE()), i = sE(), a = {
		cloneElement: n.cloneElement,
		createElement: n.createElement,
		isValidElement: n.isValidElement
	};
	function o(e, t) {
		t === void 0 && (t = {});
		for (var n = [], c = typeof t.replace == "function", l = t.transform ?? i.returnFirstArg, u = t.library ?? a, d = u.cloneElement, f = u.createElement, p = u.isValidElement, m = e.length, h = 0; h < m; h++) {
			var g = e[h];
			if (c) {
				var _ = t.replace?.call(t, g, h);
				if (p(_)) {
					m > 1 && (_ = d(_, { key: _.key ?? h })), n.push(l(_, g, h));
					continue;
				}
			}
			if (g.type === "text") {
				var v = !g.data.trim().length;
				if (v && g.parent && !(0, i.canTextBeChildOfNode)(g.parent) || t.trim && v) continue;
				n.push(l(g.data, g, h));
				continue;
			}
			var y = g, b = {};
			s(y) ? ((0, i.setStyleProp)(y.attribs.style, y.attribs), b = y.attribs) : y.attribs && (b = (0, r.default)(y.attribs, y.name));
			var x = void 0;
			switch (g.type) {
				case "script":
				case "style":
					g.children[0] && (b.dangerouslySetInnerHTML = { __html: g.children[0].data });
					break;
				case "tag":
					g.name === "textarea" && g.children[0] ? b.defaultValue = g.children[0].data : g.children?.length && (x = o(g.children, t));
					break;
				default: continue;
			}
			m > 1 && (b.key = h), n.push(l(f(g.name, b, x), g, h));
		}
		return n.length === 1 ? n[0] : n;
	}
	function s(e) {
		return i.PRESERVE_CUSTOM_ATTRIBUTES && e.type === "tag" && (0, i.isCustomComponent)(e.name, e.attribs);
	}
})), uE = /* @__PURE__ */ Ee((/* @__PURE__ */ P(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.htmlToDOM = e.domToReact = e.attributesToProps = e.Text = e.ProcessingInstruction = e.Element = e.Comment = void 0, e.default = o;
	var n = t(eE());
	e.htmlToDOM = n.default, e.attributesToProps = t(cE()).default;
	var r = t(lE());
	e.domToReact = r.default;
	var i = XT();
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
		return e ? (0, r.default)((0, n.default)(e, t?.htmlparser2 ?? a), t) : [];
	}
})))(), 1), dE = uE.default.default || uE.default;
//#endregion
//#region src/core/utils/applyReplacerOnString.tsx
function fE(e, n) {
	return n ? (Array.isArray(e) ? e : [e]).map((e, r) => typeof e == "string" ? /* @__PURE__ */ t.createElement(t.Fragment, { key: r }, n(new uE.Text(e), 0) || e) : e) : e;
}
//#endregion
//#region src/room/timeline/event-tile/body/EventContentBodyView/EventContentBodyView.tsx
var pE = s(function({ vm: e, as: n, ref: r }) {
	let { body: i, formattedBody: a, replacer: o, className: s, dir: c, parseFormattedBody: l } = J(e), u = a ? (l ?? ((e, t) => dE(e, t ? { replace: t } : void 0)))(a, o) : fE(i, o);
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
function mE(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M12 4.5a1 1 0 0 1 1 1v10.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 1 1 1.414-1.414L11 16.086V5.5a1 1 0 0 1 1-1" })
	});
}
mE.displayName = "ArrowDownIcon";
var hE = a(mE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/arrow-right.js
function gE(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M11.793 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L16.086 13H5.5a1 1 0 1 1 0-2h10.586l-4.293-4.293a1 1 0 0 1 0-1.414" })
	});
}
gE.displayName = "ArrowRightIcon";
var _E = a(gE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/attachment.js
function vE(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M11.5 22q-2.3 0-3.9-1.6T6 16.5V6q0-1.65 1.175-2.825T10 2t2.825 1.175T14 6v9.5q0 1.05-.725 1.775T11.5 18t-1.775-.725T9 15.5V6.75A.73.73 0 0 1 9.75 6a.73.73 0 0 1 .75.75v8.75q0 .424.287.712.288.288.713.288.424 0 .713-.288a.97.97 0 0 0 .287-.712V6q0-1.05-.725-1.775T10 3.5t-1.775.725T7.5 6v10.5q0 1.65 1.175 2.825T11.5 20.5t2.825-1.175T15.5 16.5V6.75a.73.73 0 0 1 .75-.75.73.73 0 0 1 .75.75v9.75q0 2.3-1.6 3.9T11.5 22" })
	});
}
vE.displayName = "AttachmentIcon";
var yE = a(vE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/block.js
function bE(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M12 22a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12q0-1.35-.437-2.6A8 8 0 0 0 18.3 7.1L7.1 18.3q1.05.825 2.3 1.262T12 20m-6.3-3.1L16.9 5.7a8 8 0 0 0-2.3-1.263A7.8 7.8 0 0 0 12 4Q8.65 4 6.325 6.325T4 12q0 1.35.438 2.6A8 8 0 0 0 5.7 16.9" })
	});
}
bE.displayName = "BlockIcon";
var xE = a(bE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/chat.js
function SE(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "m1.5 21.25 1.45-4.95a10.2 10.2 0 0 1-.712-2.1A10.2 10.2 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22q-1.125 0-2.2-.238a10.2 10.2 0 0 1-2.1-.712L2.75 22.5a.94.94 0 0 1-1-.25.94.94 0 0 1-.25-1m2.45-1.2 3.2-.95a1 1 0 0 1 .275-.062q.15-.013.275-.013.225 0 .438.038.212.036.412.137a7.4 7.4 0 0 0 1.675.6Q11.1 20 12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12q0 .9.2 1.775t.6 1.675q.176.325.188.688t-.088.712z" })
	});
}
SE.displayName = "ChatIcon";
var CE = a(SE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/check.js
function wE(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M9.55 17.575q-.2 0-.375-.062a.9.9 0 0 1-.325-.213L4.55 13q-.274-.274-.262-.713.012-.437.287-.712a.95.95 0 0 1 .7-.275q.425 0 .7.275L9.55 15.15l8.475-8.475q.274-.275.713-.275.437 0 .712.275.275.274.275.713 0 .437-.275.712l-9.2 9.2q-.15.15-.325.212a1.1 1.1 0 0 1-.375.063" })
	});
}
wE.displayName = "CheckIcon";
var TE = a(wE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-down.js
function EE(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M12 14.95q-.2 0-.375-.062a.9.9 0 0 1-.325-.213l-4.6-4.6a.95.95 0 0 1-.275-.7q0-.425.275-.7a.95.95 0 0 1 .7-.275q.425 0 .7.275l3.9 3.9 3.9-3.9a.95.95 0 0 1 .7-.275q.425 0 .7.275a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7l-4.6 4.6q-.15.15-.325.212a1.1 1.1 0 0 1-.375.063" })
	});
}
EE.displayName = "ChevronDownIcon";
var DE = a(EE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-left.js
function OE(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "m13.3 17.3-4.6-4.6a.9.9 0 0 1-.213-.325A1.1 1.1 0 0 1 8.425 12q0-.2.062-.375A.9.9 0 0 1 8.7 11.3l4.6-4.6a.95.95 0 0 1 .7-.275q.425 0 .7.275a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7L10.8 12l3.9 3.9a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275" })
	});
}
OE.displayName = "ChevronLeftIcon";
var kE = a(OE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-right.js
function AE(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M8.7 17.3a.95.95 0 0 1-.275-.7q0-.425.275-.7l3.9-3.9-3.9-3.9a.95.95 0 0 1-.275-.7q0-.425.275-.7a.95.95 0 0 1 .7-.275q.425 0 .7.275l4.6 4.6q.15.15.213.325.062.175.062.375t-.062.375a.9.9 0 0 1-.213.325l-4.6 4.6a.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275" })
	});
}
AE.displayName = "ChevronRightIcon";
var jE = a(AE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/collapse.js
function ME(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M12 11.034a1 1 0 0 0 .29.702l.005.005c.18.18.43.29.705.29h8a1 1 0 0 0 0-2h-5.586L22 3.445a1 1 0 0 0-1.414-1.414L14 8.617V3.031a1 1 0 1 0-2 0zm0 1.963a1 1 0 0 0-.29-.702l-.005-.004A1 1 0 0 0 11 12H3a1 1 0 1 0 0 2h5.586L2 20.586A1 1 0 1 0 3.414 22L10 15.414V21a1 1 0 0 0 2 0z" })
	});
}
ME.displayName = "CollapseIcon";
var NE = a(ME);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/compose.js
function PE(e, t) {
	return /* @__PURE__ */ (0, H.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/* @__PURE__ */ (0, H.jsx)("path", {
			fillRule: "evenodd",
			d: "M16.937 2.82a2 2 0 0 1 2.828 0l1.415 1.414a2 2 0 0 1 0 2.829l-7.071 7.07c-.195.196-.42.342-.66.44a1 1 0 0 1-.168.072l-3.993 1.331a1 1 0 0 1-1.265-1.265l1.331-3.992q.03-.09.073-.168m10.338-4.903-6.717 6.718-1.414-1.414 6.717-6.718z",
			clipRule: "evenodd"
		}), /* @__PURE__ */ (0, H.jsx)("path", { d: "M3 5a2 2 0 0 1 2-2h6a1 1 0 1 1 0 2H5v14h14v-6a1 1 0 1 1 2 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })]
	});
}
PE.displayName = "ComposeIcon";
var FE = a(PE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/delete.js
function IE(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M7 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 5 19V6a.97.97 0 0 1-.713-.287A.97.97 0 0 1 4 5q0-.424.287-.713A.97.97 0 0 1 5 4h4q0-.424.287-.712A.97.97 0 0 1 10 3h4q.424 0 .713.288Q15 3.575 15 4h4q.424 0 .712.287Q20 4.576 20 5t-.288.713A.97.97 0 0 1 19 6v13q0 .824-.587 1.413A1.93 1.93 0 0 1 17 21zM7 6v13h10V6zm2 10q0 .424.287.712Q9.576 17 10 17t.713-.288A.97.97 0 0 0 11 16V9a.97.97 0 0 0-.287-.713A.97.97 0 0 0 10 8a.97.97 0 0 0-.713.287A.97.97 0 0 0 9 9zm4 0q0 .424.287.712.288.288.713.288.424 0 .713-.288A.97.97 0 0 0 15 16V9a.97.97 0 0 0-.287-.713A.97.97 0 0 0 14 8a.97.97 0 0 0-.713.287A.97.97 0 0 0 13 9z" })
	});
}
IE.displayName = "DeleteIcon";
var LE = a(IE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/dial-pad.js
function RE(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M12 18.6c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8M6.6 2.4c-.99 0-1.8.81-1.8 1.8S5.61 6 6.6 6s1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0 5.4c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0 5.4c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8M17.4 6c.99 0 1.8-.81 1.8-1.8s-.81-1.8-1.8-1.8-1.8.81-1.8 1.8.81 1.8 1.8 1.8M12 13.2c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m5.4 0c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0-5.4c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m-5.4 0c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0-5.4c-.99 0-1.8.81-1.8 1.8S11.01 6 12 6s1.8-.81 1.8-1.8-.81-1.8-1.8-1.8" })
	});
}
RE.displayName = "DialPadIcon";
var zE = a(RE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/download.js
function BE(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M12 15.575q-.2 0-.375-.062a.9.9 0 0 1-.325-.213l-3.6-3.6a.95.95 0 0 1-.275-.7q0-.425.275-.7.274-.275.712-.288t.713.263L11 12.15V5q0-.424.287-.713A.97.97 0 0 1 12 4q.424 0 .713.287Q13 4.576 13 5v7.15l1.875-1.875q.274-.274.713-.263.437.014.712.288a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7l-3.6 3.6q-.15.15-.325.212a1.1 1.1 0 0 1-.375.063M6 20q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 18v-2q0-.424.287-.713A.97.97 0 0 1 5 15q.424 0 .713.287Q6 15.576 6 16v2h12v-2q0-.424.288-.713A.97.97 0 0 1 19 15q.424 0 .712.287.288.288.288.713v2q0 .824-.587 1.413A1.93 1.93 0 0 1 18 20z" })
	});
}
BE.displayName = "DownloadIcon";
var VE = a(BE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/drag-list.js
function HE(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M5 15a.97.97 0 0 1-.713-.287A.97.97 0 0 1 4 14q0-.424.287-.713A.97.97 0 0 1 5 13h14q.424 0 .712.287.288.288.288.713 0 .424-.288.713A.97.97 0 0 1 19 15zm0-4a.97.97 0 0 1-.713-.287A.97.97 0 0 1 4 10q0-.424.287-.713A.97.97 0 0 1 5 9h14q.424 0 .712.287Q20 9.576 20 10t-.288.713A.97.97 0 0 1 19 11z" })
	});
}
HE.displayName = "DragListIcon";
var UE = a(HE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/edit.js
function WE(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", {
			fillRule: "evenodd",
			d: "M15.706 2.637a2 2 0 0 1 2.829 0l2.828 2.828a2 2 0 0 1 0 2.829L9.605 20.052a1 1 0 0 1-.465.263L3.483 21.73a1 1 0 0 1-1.212-1.213l1.414-5.657a1 1 0 0 1 .263-.465zm1.224 7.262L14.102 7.07l-8.544 8.544-.943 3.771 3.771-.943z",
			clipRule: "evenodd"
		})
	});
}
WE.displayName = "EditIcon";
var GE = a(WE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/email-solid.js
function KE(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 5.111a1 1 0 0 0 .514.874l7 3.89a1 1 0 0 0 .972 0l7-3.89a1 1 0 1 0-.972-1.748L12 11.856 5.486 8.237A1 1 0 0 0 4 9.111" })
	});
}
KE.displayName = "EmailSolidIcon";
var qE = a(KE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/error-solid.js
function JE(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M12 17q.424 0 .713-.288A.97.97 0 0 0 13 16a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 15a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 16q0 .424.287.712.288.288.713.288m0-4q.424 0 .713-.287A.97.97 0 0 0 13 12V8a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 7a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 8v4q0 .424.287.713.288.287.713.287m0 9a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22" })
	});
}
JE.displayName = "ErrorSolidIcon";
var YE = a(JE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/expand.js
function XE(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M21 3.997a1 1 0 0 0-.29-.702l-.005-.004A1 1 0 0 0 20 3h-8a1 1 0 1 0 0 2h5.586L5 17.586V12a1 1 0 1 0-2 0v8.003a1 1 0 0 0 .29.702l.005.004c.18.18.43.291.705.291h8a1 1 0 1 0 0-2H6.414L19 6.414V12a1 1 0 1 0 2 0z" })
	});
}
XE.displayName = "ExpandIcon";
var ZE = a(XE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/explore.js
function QE(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M12 13a.97.97 0 0 1-.713-.287A.97.97 0 0 1 11 12q0-.424.287-.713A.97.97 0 0 1 12 11q.424 0 .713.287.287.288.287.713 0 .424-.287.713A.97.97 0 0 1 12 13m0 9a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20m0 0q-3.35 0-5.675-2.325T4 12t2.325-5.675T12 4t5.675 2.325T20 12t-2.325 5.675T12 20m1.675-5.85q.15-.075.275-.2t.2-.275l2.925-6.25q.125-.25-.062-.437-.188-.188-.438-.063l-6.25 2.925q-.15.075-.275.2t-.2.275l-2.925 6.25q-.125.25.063.438.186.186.437.062z" })
	});
}
QE.displayName = "ExploreIcon";
var $E = a(QE);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/favourite.js
function eD(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M13.905 9.378 12 5.52l-1.905 3.86-4.259.618 3.082 3.004-.727 4.242L12 15.24l3.81 2.003-.728-4.242 3.082-3.004zM8.767 7.55l2.336-4.733a1 1 0 0 1 1.794 0l2.336 4.733 5.223.76a1 1 0 0 1 .555 1.705L17.23 13.7l.892 5.202a1 1 0 0 1-1.45 1.054L12 17.5l-4.672 2.456a1 1 0 0 1-1.451-1.054l.892-5.202-3.78-3.685a1 1 0 0 1 .555-1.706z" })
	});
}
eD.displayName = "FavouriteIcon";
var tD = a(eD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/file-error.js
function nD(e, t) {
	return /* @__PURE__ */ (0, H.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/* @__PURE__ */ (0, H.jsx)("path", { d: "M6 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 20V4q0-.824.588-1.412A1.93 1.93 0 0 1 6 2h7.175a1.98 1.98 0 0 1 1.4.575l4.85 4.85q.275.275.425.638.15.361.15.762v3.516A6 6 0 0 0 18 12V9h-4a.97.97 0 0 1-.713-.287A.97.97 0 0 1 13 8V4H6v16h6.341c.264.745.67 1.423 1.187 2z" }), /* @__PURE__ */ (0, H.jsx)("path", { d: "M18 14a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m-1 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0" })]
	});
}
nD.displayName = "FileErrorIcon";
var rD = a(nD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/history.js
function iD(e, t) {
	return /* @__PURE__ */ (0, H.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/* @__PURE__ */ (0, H.jsx)("path", { d: "M18.93 8A8 8 0 1 1 4 12a1 1 0 1 0-2 0c0 5.523 4.477 10 10 10s10-4.477 10-10a10 10 0 0 0-.832-4A10 10 0 0 0 12 2a9.99 9.99 0 0 0-8 3.999V4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2H5.755A7.99 7.99 0 0 1 12 4a8 8 0 0 1 6.93 4" }), /* @__PURE__ */ (0, H.jsx)("path", { d: "M13 8a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l2.83 2.83a1 1 0 0 0 1.414-1.414L13 11.586z" })]
	});
}
iD.displayName = "HistoryIcon";
var aD = a(iD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/home.js
function oD(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", {
			fillRule: "evenodd",
			d: "M16 11v8h3V9.177l-7-3.889-7 3.889V19h3v-8zm-6 10H5a2 2 0 0 1-2-2V9.177a2 2 0 0 1 1.029-1.748l7-3.89a2 2 0 0 1 1.942 0l7 3.89A2 2 0 0 1 21 9.177V19a2 2 0 0 1-2 2h-5v-8h-4z",
			clipRule: "evenodd"
		})
	});
}
oD.displayName = "HomeIcon";
var sD = a(oD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/image-error.js
function cD(e, t) {
	return /* @__PURE__ */ (0, H.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/* @__PURE__ */ (0, H.jsx)("path", { d: "M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.803a6 6 0 0 1-.72-2H5v-3.172l4-4 3.585 3.585a6 6 0 0 1 1.172-1.656l-3.343-3.343a2 2 0 0 0-2.828 0L5 13V5h14v7.083c.718.12 1.393.368 2 .72V5a2 2 0 0 0-2-2z" }), /* @__PURE__ */ (0, H.jsx)("path", { d: "M17 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0m1 5a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m-1 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0" })]
	});
}
cD.displayName = "ImageErrorIcon";
var lD = a(cD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/inline-code.js
function uD(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M14.958 5.62a1 1 0 0 0-1.916-.574l-4 13.333a1 1 0 0 0 1.916.575zM5.974 7.232a1 1 0 0 0-1.409.128l-3.333 4a1 1 0 0 0 0 1.28l3.333 4a1 1 0 1 0 1.537-1.28L3.302 12l2.8-3.36a1 1 0 0 0-.128-1.408m12.053 0a1 1 0 0 1 1.408.128l3.333 4a1 1 0 0 1 0 1.28l-3.333 4a1 1 0 1 1-1.537-1.28l2.8-3.36-2.8-3.36a1 1 0 0 1 .128-1.408" })
	});
}
uD.displayName = "InlineCodeIcon";
var dD = a(uD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/leave.js
function fD(e, t) {
	return /* @__PURE__ */ (0, H.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/* @__PURE__ */ (0, H.jsx)("path", { d: "M14 13q.424 0 .713-.287A.97.97 0 0 0 15 12a.97.97 0 0 0-.287-.713A.97.97 0 0 0 14 11a.97.97 0 0 0-.713.287A.97.97 0 0 0 13 12q0 .424.287.713.288.287.713.287" }), /* @__PURE__ */ (0, H.jsx)("path", { d: "M10.385 21.788A1 1 0 0 1 10 21V3a1.003 1.003 0 0 1 1.242-.97l8 2A1 1 0 0 1 20 5v14a1 1 0 0 1-.758.97l-8 2a1 1 0 0 1-.857-.182M18 5.781l-6-1.5v15.438l6-1.5zM9 6H7v12h2v2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2z" })]
	});
}
fD.displayName = "LeaveIcon";
var pD = a(fD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/link.js
function mD(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M12 19.071q-1.467 1.467-3.536 1.467-2.067 0-3.535-1.467t-1.467-3.535q0-2.07 1.467-3.536L7.05 9.879q.3-.3.707-.3t.707.3.301.707-.3.707l-2.122 2.121a2.9 2.9 0 0 0-.884 2.122q0 1.237.884 2.12.884.885 2.121.885t2.122-.884l2.121-2.121q.3-.3.707-.3t.707.3.3.707q0 .405-.3.707zm-1.414-4.243q-.3.3-.707.301a.97.97 0 0 1-.707-.3q-.3-.3-.301-.708 0-.405.3-.707l4.243-4.242q.3-.3.707-.3t.707.3.3.707-.3.707zm6.364-.707q-.3.3-.707.3a.97.97 0 0 1-.707-.3q-.3-.3-.301-.707 0-.405.3-.707l2.122-2.121q.884-.885.884-2.121 0-1.238-.884-2.122a2.9 2.9 0 0 0-2.121-.884q-1.237 0-2.122.884l-2.121 2.122q-.3.3-.707.3a.97.97 0 0 1-.707-.3q-.3-.3-.3-.708 0-.405.3-.707L12 4.93q1.467-1.467 3.536-1.467t3.535 1.467 1.467 3.536T19.071 12z" })
	});
}
mD.displayName = "LinkIcon";
var hD = a(mD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/lock-solid.js
function gD(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M6 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 20V10q0-.825.588-1.412A1.93 1.93 0 0 1 6 8h1V6q0-2.075 1.463-3.537Q9.926 1 12 1q2.075 0 3.537 1.463Q17 3.925 17 6v2h1q.824 0 1.413.588Q20 9.175 20 10v10q0 .824-.587 1.413A1.93 1.93 0 0 1 18 22zM9 8h6V6q0-1.25-.875-2.125A2.9 2.9 0 0 0 12 3q-1.25 0-2.125.875A2.9 2.9 0 0 0 9 6z" })
	});
}
gD.displayName = "LockSolidIcon";
var _D = a(gD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/mark-as-read.js
function vD(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M21.324 9.13c0-.66-.339-1.237-.862-1.558l-7.37-4.318a1.81 1.81 0 0 0-1.851 0L3.87 7.572C3.348 7.892 3 8.47 3 9.13v9.167c0 1.008.825 1.833 1.833 1.833H19.5a1.84 1.84 0 0 0 1.833-1.833zm-10.129 3.978-6.6-4.124 6.646-3.896a1.81 1.81 0 0 1 1.851 0l6.646 3.896-6.6 4.124a1.85 1.85 0 0 1-1.943 0" })
	});
}
vD.displayName = "MarkAsReadIcon";
var yD = a(vD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/mark-as-unread.js
function bD(e, t) {
	return /* @__PURE__ */ (0, H.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/* @__PURE__ */ (0, H.jsx)("path", { d: "M20 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" }), /* @__PURE__ */ (0, H.jsx)("path", {
			fillRule: "evenodd",
			d: "M17 5H5a2 2 0 0 0-2 2v10.4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7.83a3 3 0 0 1-2 0q-.316-.113-.595-.288L12 11.89 5 7.138V7h12.764A3 3 0 0 1 17 5m-4.438 8.927L19 9.555V17.4H5V9.555l6.438 4.372a1 1 0 0 0 1.124 0",
			clipRule: "evenodd"
		})]
	});
}
bD.displayName = "MarkAsUnreadIcon";
var xD = a(bD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/mention.js
function SD(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M12 4a8 8 0 1 0 0 16 1 1 0 1 1 0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10v1.5a3.5 3.5 0 0 1-6.396 1.966A5 5 0 1 1 17 12v1.5a1.5 1.5 0 0 0 3 0V12a8 8 0 0 0-8-8m3 8a3 3 0 1 0-6 0 3 3 0 0 0 6 0" })
	});
}
SD.displayName = "MentionIcon";
var CD = a(SD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/notifications-off-solid.js
function wD(e, t) {
	return /* @__PURE__ */ (0, H.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/* @__PURE__ */ (0, H.jsx)("path", { d: "m4.917 2.083 17 17a1 1 0 0 1-1.414 1.414L19.006 19H4.414c-.89 0-1.337-1.077-.707-1.707L5 16v-6s0-2.034 1.096-3.91L3.504 3.498a1 1 0 0 1 1.414-1.414M19 13.35 9.136 3.484C9.93 3.181 10.874 3 12 3c7 0 7 7 7 7z" }), /* @__PURE__ */ (0, H.jsx)("path", { d: "M10 20h4a2 2 0 0 1-4 0" })]
	});
}
wD.displayName = "NotificationsOffSolidIcon";
var TD = a(wD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/notifications-solid.js
function ED(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M20.293 17.293c.63.63.184 1.707-.707 1.707H4.414c-.89 0-1.337-1.077-.707-1.707L5 16v-6s0-7 7-7 7 7 7 7v6zM12 22a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2" })
	});
}
ED.displayName = "NotificationsSolidIcon";
var DD = a(ED);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/overflow-horizontal.js
function OD(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M6 14q-.824 0-1.412-.588A1.93 1.93 0 0 1 4 12q0-.825.588-1.412A1.93 1.93 0 0 1 6 10q.824 0 1.412.588Q8 11.175 8 12t-.588 1.412A1.93 1.93 0 0 1 6 14m6 0q-.825 0-1.412-.588A1.93 1.93 0 0 1 10 12q0-.825.588-1.412A1.93 1.93 0 0 1 12 10q.825 0 1.412.588Q14 11.175 14 12t-.588 1.412A1.93 1.93 0 0 1 12 14m6 0q-.824 0-1.413-.588A1.93 1.93 0 0 1 16 12q0-.825.587-1.412A1.93 1.93 0 0 1 18 10q.824 0 1.413.588Q20 11.175 20 12t-.587 1.412A1.93 1.93 0 0 1 18 14" })
	});
}
OD.displayName = "OverflowHorizontalIcon";
var kD = a(OD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/pin-solid.js
function AD(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M5.769 2.857A.5.5 0 0 1 6.119 2h11.762a.5.5 0 0 1 .35.857L16.15 4.9a.5.5 0 0 0-.15.357v4.487a.5.5 0 0 0 .15.356l3.7 3.644a.5.5 0 0 1 .15.356v1.4a.5.5 0 0 1-.5.5H13v6a1 1 0 1 1-2 0v-6H4.5a.5.5 0 0 1-.5-.5v-1.4a.5.5 0 0 1 .15-.356l3.7-3.644A.5.5 0 0 0 8 9.744V5.257a.5.5 0 0 0-.15-.357z" })
	});
}
AD.displayName = "PinSolidIcon";
var jD = a(AD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/pin.js
function MD(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", {
			fillRule: "evenodd",
			d: "M6.119 2a.5.5 0 0 0-.35.857L7.85 4.9a.5.5 0 0 1 .15.357v4.487a.5.5 0 0 1-.15.356l-3.7 3.644A.5.5 0 0 0 4 14.1v1.4a.5.5 0 0 0 .5.5H11v6a1 1 0 1 0 2 0v-6h6.5a.5.5 0 0 0 .5-.5v-1.4a.5.5 0 0 0-.15-.356l-3.7-3.644a.5.5 0 0 1-.15-.356V5.257a.5.5 0 0 1 .15-.357l2.081-2.043a.5.5 0 0 0-.35-.857zM10 4h4v5.744a2.5 2.5 0 0 0 .746 1.781L17.26 14H6.74l2.514-2.475A2.5 2.5 0 0 0 10 9.744z",
			clipRule: "evenodd"
		})
	});
}
MD.displayName = "PinIcon";
var ND = a(MD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/plus.js
function PD(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M11 13H6a.97.97 0 0 1-.713-.287A.97.97 0 0 1 5 12q0-.424.287-.713A.97.97 0 0 1 6 11h5V6q0-.424.287-.713A.97.97 0 0 1 12 5q.424 0 .713.287Q13 5.576 13 6v5h5q.424 0 .712.287.288.288.288.713 0 .424-.288.713A.97.97 0 0 1 18 13h-5v5q0 .424-.287.712A.97.97 0 0 1 12 19a.97.97 0 0 1-.713-.288A.97.97 0 0 1 11 18z" })
	});
}
PD.displayName = "PlusIcon";
var FD = a(PD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/preferences.js
function ID(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", {
			fillRule: "evenodd",
			d: "M6.5 2h11a4.5 4.5 0 1 1 0 9h-11a4.5 4.5 0 0 1 0-9m0 2h7.258A4.5 4.5 0 0 0 13 6.5c0 .925.28 1.785.758 2.5H6.5a2.5 2.5 0 0 1 0-5M15 6.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0m-13 11A4.5 4.5 0 0 1 6.5 13h11a4.5 4.5 0 1 1 0 9h-11q-.233 0-.46-.023A4.5 4.5 0 0 1 2 17.5m8.242-2.5H17.5a2.5 2.5 0 0 1 0 5h-7.258A4.5 4.5 0 0 0 11 17.5c0-.925-.28-1.785-.758-2.5M6.5 15a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5",
			clipRule: "evenodd"
		})
	});
}
ID.displayName = "PreferencesIcon";
var LD = a(ID);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/reaction-add.js
function RD(e, t) {
	return /* @__PURE__ */ (0, H.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/* @__PURE__ */ (0, H.jsx)("path", { d: "M14.74 2.38C13.87 2.133 12.95 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-.95-.133-1.87-.38-2.74a5 5 0 0 1-1.886.687 8 8 0 1 1-5.68-5.68c.1-.684.339-1.323.687-1.887" }), /* @__PURE__ */ (0, H.jsx)("path", { d: "M15.536 14.121a1 1 0 0 1 0 1.415A5 5 0 0 1 12 17c-1.38 0-2.632-.56-3.535-1.464a1 1 0 1 1 1.414-1.415A3 3 0 0 0 12 15c.829 0 1.577-.335 2.121-.879a1 1 0 0 1 1.415 0M8.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m8.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M18 6h-1a.97.97 0 0 1-.712-.287A.97.97 0 0 1 16 5q0-.424.288-.713A.97.97 0 0 1 17 4h1V3q0-.424.288-.712A.97.97 0 0 1 19 2q.424 0 .712.288Q20 2.575 20 3v1h1q.424 0 .712.287Q22 4.576 22 5t-.288.713A.97.97 0 0 1 21 6h-1v1q0 .424-.288.713A.97.97 0 0 1 19 8a.97.97 0 0 1-.712-.287A.97.97 0 0 1 18 7z" })]
	});
}
RD.displayName = "ReactionAddIcon";
var zD = a(RD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/reply.js
function BD(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M9.405 5.708c.39-.39.39-1.025 0-1.416a.996.996 0 0 0-1.412 0L3.294 9.006a1.004 1.004 0 0 0 0 1.416l4.699 4.714a.996.996 0 0 0 1.412 0c.39-.39.39-1.025 0-1.416l-3.043-3.053h9.153c1.887 0 3.485 1.604 3.485 3.666C19 16.396 17.402 18 15.515 18h-2.093a1 1 0 1 0 0 2h2.093C18.58 20 21 17.425 21 14.333s-2.419-5.666-5.485-5.666H6.456z" })
	});
}
BD.displayName = "ReplyIcon";
var VD = a(BD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/restart.js
function HD(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M18.93 8A8 8 0 1 1 4 12a1 1 0 1 0-2 0c0 5.523 4.477 10 10 10s10-4.477 10-10a10 10 0 0 0-.832-4A10 10 0 0 0 12 2a9.99 9.99 0 0 0-8 3.999V4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2H5.755A7.99 7.99 0 0 1 12 4a8 8 0 0 1 6.93 4" })
	});
}
HD.displayName = "RestartIcon";
var UD = a(HD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/room.js
function WD(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "m8.566 17-.944 4.094q-.086.406-.372.656t-.687.25q-.543 0-.887-.469a1.18 1.18 0 0 1-.2-1.031l.801-3.5H3.158q-.572 0-.916-.484a1.27 1.27 0 0 1-.2-1.078 1.12 1.12 0 0 1 1.116-.938H6.85l1.145-5h-3.12q-.57 0-.915-.484a1.27 1.27 0 0 1-.2-1.078A1.12 1.12 0 0 1 4.875 7h3.691l.945-4.094q.085-.406.372-.656.286-.25.686-.25.544 0 .887.469.345.468.2 1.031l-.8 3.5h4.578l.944-4.094q.085-.406.372-.656.286-.25.687-.25.543 0 .887.469t.2 1.031L17.723 7h3.119q.573 0 .916.484.343.485.2 1.079a1.12 1.12 0 0 1-1.116.937H17.15l-1.145 5h3.12q.57 0 .915.484.343.485.2 1.079a1.12 1.12 0 0 1-1.116.937h-3.691l-.944 4.094q-.087.406-.373.656t-.686.25q-.544 0-.887-.469a1.18 1.18 0 0 1-.2-1.031l.8-3.5zm.573-2.5h4.578l1.144-5h-4.578z" })
	});
}
WD.displayName = "RoomIcon";
var GD = a(WD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/search.js
function KD(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M15.05 16.463a7.5 7.5 0 1 1 1.414-1.414l3.243 3.244a1 1 0 0 1-1.414 1.414zM16 10.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0" })
	});
}
KD.displayName = "SearchIcon";
var qD = a(KD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/section.js
function JD(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M16 7a.97.97 0 0 0-.713.287A.97.97 0 0 0 15 8q0 .424.287.713Q15.576 9 16 9t.712-.287A.97.97 0 0 0 17 8a.97.97 0 0 0-.288-.713A.97.97 0 0 0 16 7m0 4a.97.97 0 0 0-.713.287A.97.97 0 0 0 15 12q0 .424.287.713.288.287.713.287.424 0 .712-.287A.97.97 0 0 0 17 12a.97.97 0 0 0-.288-.713A.97.97 0 0 0 16 11m0 4a.97.97 0 0 0-.713.287A.97.97 0 0 0 15 16q0 .424.287.712.288.288.713.288.424 0 .712-.288A.97.97 0 0 0 17 16a.97.97 0 0 0-.288-.713A.97.97 0 0 0 16 15m-4-8H8a.97.97 0 0 0-.713.287A.97.97 0 0 0 7 8q0 .424.287.713Q7.576 9 8 9h4q.424 0 .713-.287A.97.97 0 0 0 13 8a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 7m0 4H8a.97.97 0 0 0-.713.287A.97.97 0 0 0 7 12q0 .424.287.713Q7.576 13 8 13h4q.424 0 .713-.287A.97.97 0 0 0 13 12a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 11m0 4H8a.97.97 0 0 0-.713.287A.97.97 0 0 0 7 16q0 .424.287.712Q7.576 17 8 17h4q.424 0 .713-.288A.97.97 0 0 0 13 16a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 15m7-12q.824 0 1.413.587Q21 4.176 21 5v14q0 .824-.587 1.413A1.93 1.93 0 0 1 19 21H5q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19V5q0-.824.587-1.412A1.93 1.93 0 0 1 5 3zm0 2H5v14h14z" })
	});
}
JD.displayName = "SectionIcon";
var YD = a(JD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/settings.js
function XD(e, t) {
	return /* @__PURE__ */ (0, H.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/* @__PURE__ */ (0, H.jsx)("path", { d: "M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-2 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0" }), /* @__PURE__ */ (0, H.jsx)("path", { d: "M11.312 2h1.376A2.31 2.31 0 0 1 15 4.312v.247l.002.003c.01.014.031.033.064.047.03.013.056.013.07.01h.002l.177-.177a2.31 2.31 0 0 1 3.27 0l.973.974a2.31 2.31 0 0 1 0 3.269l-.177.177v.003a.13.13 0 0 0 .01.07.15.15 0 0 0 .047.063l.003.002h.247A2.31 2.31 0 0 1 22 11.312v1.376A2.31 2.31 0 0 1 19.688 15h-.247l-.003.002a.15.15 0 0 0-.047.064.13.13 0 0 0-.01.07v.002l.177.177a2.31 2.31 0 0 1 0 3.27l-.974.973a2.31 2.31 0 0 1-3.269 0l-.177-.177h-.003a.13.13 0 0 0-.07.01.15.15 0 0 0-.063.047l-.002.003v.247A2.31 2.31 0 0 1 12.688 22h-1.376A2.31 2.31 0 0 1 9 19.688v-.247l-.002-.003a.15.15 0 0 0-.064-.047.13.13 0 0 0-.07-.01h-.002l-.177.177a2.31 2.31 0 0 1-3.27 0l-.973-.974a2.31 2.31 0 0 1 0-3.269l.177-.177v-.003a.14.14 0 0 0-.01-.07.15.15 0 0 0-.047-.063L4.559 15h-.247A2.31 2.31 0 0 1 2 12.688v-1.376A2.31 2.31 0 0 1 4.312 9h.247l.003-.002a.15.15 0 0 0 .047-.064.14.14 0 0 0 .01-.07v-.002l-.177-.177a2.31 2.31 0 0 1 0-3.27l.974-.973a2.31 2.31 0 0 1 3.269 0l.177.177h.003a.14.14 0 0 0 .07-.01.15.15 0 0 0 .063-.047L9 4.559v-.247A2.31 2.31 0 0 1 11.312 2M11 4.312v.257c0 .893-.59 1.593-1.299 1.887-.716.297-1.622.21-2.248-.418l-.182-.182a.31.31 0 0 0-.441 0l-.974.974a.31.31 0 0 0 0 .44l.182.183c.627.626.715 1.531.418 2.248C6.162 10.41 5.462 11 4.569 11h-.257a.31.31 0 0 0-.312.312v1.376c0 .172.14.312.312.312h.257c.893 0 1.593.59 1.887 1.299.297.716.21 1.622-.418 2.248l-.182.182a.31.31 0 0 0 0 .441l.974.973a.31.31 0 0 0 .44 0l.183-.181c.626-.627 1.532-.715 2.248-.418.709.294 1.299.994 1.299 1.887v.257c0 .172.14.312.312.312h1.376c.172 0 .312-.14.312-.312v-.257c0-.893.59-1.593 1.299-1.887.716-.297 1.622-.21 2.249.418l.181.181c.122.122.32.122.441 0l.973-.973a.31.31 0 0 0 0-.44l-.181-.183c-.627-.626-.715-1.532-.418-2.248.294-.709.994-1.299 1.887-1.299h.257c.172 0 .312-.14.312-.312v-1.376a.31.31 0 0 0-.312-.312h-.257c-.893 0-1.593-.59-1.887-1.299-.297-.717-.21-1.622.418-2.248l.181-.182a.31.31 0 0 0 0-.441l-.973-.974a.31.31 0 0 0-.44 0l-.183.182c-.626.627-1.532.715-2.248.418C13.59 6.162 13 5.462 13 4.569v-.257A.31.31 0 0 0 12.688 4h-1.376a.31.31 0 0 0-.312.312" })]
	});
}
XD.displayName = "SettingsIcon";
var ZD = a(XD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/threads.js
function QD(e, t) {
	return /* @__PURE__ */ (0, H.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/* @__PURE__ */ (0, H.jsx)("path", { d: "M7 10a.97.97 0 0 1-.713-.287A.97.97 0 0 1 6 9q0-.424.287-.713A.97.97 0 0 1 7 8h10q.424 0 .712.287Q18 8.576 18 9t-.288.713A.97.97 0 0 1 17 10zm0 4a.97.97 0 0 1-.713-.287A.97.97 0 0 1 6 13q0-.424.287-.713A.97.97 0 0 1 7 12h6q.424 0 .713.287.287.288.287.713 0 .424-.287.713A.97.97 0 0 1 13 14z" }), /* @__PURE__ */ (0, H.jsx)("path", { d: "M3.707 21.293c-.63.63-1.707.184-1.707-.707V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6zM6 17h14V5H4v13.172l.586-.586A2 2 0 0 1 6 17" })]
	});
}
QD.displayName = "ThreadsIcon";
var $D = a(QD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/unpin.js
function eO(e, t) {
	return /* @__PURE__ */ (0, H.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/* @__PURE__ */ (0, H.jsx)("path", {
			fillRule: "evenodd",
			d: "M5.457 2.083a1 1 0 0 0-1.414 1.414L8.04 7.494v2.25a.5.5 0 0 1-.15.356l-3.7 3.644a.5.5 0 0 0-.15.356v1.4a.5.5 0 0 0 .5.5h6.5v6a1 1 0 0 0 2 0v-6h3.506l4.497 4.497a1 1 0 0 0 1.414-1.414zM14.546 14 10.04 9.494v.25a2.5 2.5 0 0 1-.746 1.781L6.78 14z",
			clipRule: "evenodd"
		}), /* @__PURE__ */ (0, H.jsx)("path", { d: "M14.04 4v3.85l2.015 2.015a.5.5 0 0 1-.015-.12V5.257a.5.5 0 0 1 .15-.357l2.081-2.043a.5.5 0 0 0-.35-.857h-9.73l2 2z" })]
	});
}
eO.displayName = "UnpinIcon";
var tO = a(eO);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/user-add.js
function nO(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M10 12q-1.65 0-2.825-1.175T6 8t1.175-2.825T10 4t2.825 1.175T14 8t-1.175 2.825T10 12m-8 6v-.8q0-.85.438-1.562.437-.713 1.162-1.088a14.8 14.8 0 0 1 3.15-1.163A13.8 13.8 0 0 1 10 13q1.65 0 3.25.387 1.6.388 3.15 1.163.724.375 1.163 1.087Q18 16.35 18 17.2v.8q0 .824-.587 1.413A1.93 1.93 0 0 1 16 20H4q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 18m2 0h12v-.8a.97.97 0 0 0-.5-.85q-1.35-.675-2.725-1.012a11.6 11.6 0 0 0-5.55 0Q5.85 15.675 4.5 16.35a.97.97 0 0 0-.5.85zm6-8q.825 0 1.412-.588Q12 8.826 12 8q0-.824-.588-1.412A1.93 1.93 0 0 0 10 6q-.825 0-1.412.588A1.93 1.93 0 0 0 8 8q0 .825.588 1.412Q9.175 10 10 10m7 1h2v2q0 .424.288.713.287.287.712.287.424 0 .712-.287A.97.97 0 0 0 21 13v-2h2q.424 0 .712-.287A.97.97 0 0 0 24 10a.97.97 0 0 0-.288-.713A.97.97 0 0 0 23 9h-2V7a.97.97 0 0 0-.288-.713A.97.97 0 0 0 20 6a.97.97 0 0 0-.712.287A.97.97 0 0 0 19 7v2h-2a.97.97 0 0 0-.712.287A.97.97 0 0 0 16 10q0 .424.288.713.287.287.712.287" })
	});
}
nO.displayName = "UserAddIcon";
var rO = a(nO);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/user-profile-solid.js
function iO(e, t) {
	return /* @__PURE__ */ (0, H.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/* @__PURE__ */ (0, H.jsx)("path", { d: "M12 15q-1.65 0-2.825-1.175T8 11t1.175-2.825T12 7t2.825 1.175T16 11t-1.175 2.825T12 15" }), /* @__PURE__ */ (0, H.jsx)("path", { d: "M19.528 18.583A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 2.52.933 4.824 2.472 6.583A9.98 9.98 0 0 0 12 22a9.98 9.98 0 0 0 7.528-3.417M8.75 16.388q-1.373.332-2.709.95a8 8 0 1 1 11.918 0 14.7 14.7 0 0 0-2.709-.95A13.8 13.8 0 0 0 12 16q-1.65 0-3.25.387" })]
	});
}
iO.displayName = "UserProfileSolidIcon";
var aO = a(iO);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/video-call-solid.js
function oO(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M6 4h10a2 2 0 0 1 2 2v4.286l3.35-2.871a1 1 0 0 1 1.65.76v7.65a1 1 0 0 1-1.65.76L18 13.715V18a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4" })
	});
}
oO.displayName = "VideoCallSolidIcon";
var sO = a(oO);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/video-call.js
function cO(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M2 8a4 4 0 0 1 4-4h10a2 2 0 0 1 2 2v4.286l3.35-2.871a1 1 0 0 1 1.65.76v7.65a1 1 0 0 1-1.65.76L18 13.715V18a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10V6zm15 7.652v-3.303L19.073 12z" })
	});
}
cO.displayName = "VideoCallIcon";
var lO = a(cO);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/visibility-off.js
function uO(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "m16.1 13.3-1.45-1.45q.225-1.175-.675-2.2t-2.325-.8L10.2 7.4q.424-.2.863-.3A4.2 4.2 0 0 1 12 7q1.875 0 3.188 1.312Q16.5 9.625 16.5 11.5q0 .5-.1.938t-.3.862m3.2 3.15-1.45-1.4a11 11 0 0 0 1.688-1.588A9 9 0 0 0 20.8 11.5q-1.25-2.524-3.588-4.013Q14.875 6 12 6q-.724 0-1.425.1a10 10 0 0 0-1.375.3L7.65 4.85A11.1 11.1 0 0 1 12 4q3.575 0 6.425 1.887T22.7 10.8a.8.8 0 0 1 .1.313q.025.188.025.387a2 2 0 0 1-.125.7 10.9 10.9 0 0 1-3.4 4.25m-.2 5.45-3.5-3.45q-.874.274-1.762.413Q12.95 19 12 19q-3.575 0-6.425-1.887T1.3 12.2a.8.8 0 0 1-.1-.312 3 3 0 0 1 0-.763.8.8 0 0 1 .1-.3Q1.825 9.7 2.55 8.75A13.3 13.3 0 0 1 4.15 7L2.075 4.9a.93.93 0 0 1-.275-.688q0-.412.3-.712a.95.95 0 0 1 .7-.275q.425 0 .7.275l17 17q.275.275.288.688a.93.93 0 0 1-.288.712.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275M5.55 8.4q-.725.65-1.325 1.425A9 9 0 0 0 3.2 11.5q1.25 2.524 3.588 4.012T12 17q.5 0 .975-.062.475-.063.975-.138l-.9-.95q-.274.075-.525.113A3.5 3.5 0 0 1 12 16q-1.875 0-3.187-1.312Q7.5 13.375 7.5 11.5q0-.274.038-.525.037-.25.112-.525z" })
	});
}
uO.displayName = "VisibilityOffIcon";
var dO = a(uO);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/visibility-on.js
function fO(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "M12 16q1.875 0 3.188-1.312Q16.5 13.375 16.5 11.5t-1.312-3.187T12 7 8.813 8.313 7.5 11.5t1.313 3.188T12 16m0-1.8q-1.125 0-1.912-.787A2.6 2.6 0 0 1 9.3 11.5q0-1.125.787-1.912A2.6 2.6 0 0 1 12 8.8q1.125 0 1.912.787.788.788.788 1.913t-.787 1.912A2.6 2.6 0 0 1 12 14.2m0 4.8q-3.475 0-6.35-1.837Q2.775 15.324 1.3 12.2a.8.8 0 0 1-.1-.312 3 3 0 0 1 0-.775.8.8 0 0 1 .1-.313q1.475-3.125 4.35-4.962Q8.525 4 12 4t6.35 1.838T22.7 10.8a.8.8 0 0 1 .1.313 3 3 0 0 1 0 .774.8.8 0 0 1-.1.313q-1.475 3.125-4.35 4.963Q15.475 19 12 19m0-2a9.54 9.54 0 0 0 5.188-1.488A9.77 9.77 0 0 0 20.8 11.5a9.77 9.77 0 0 0-3.613-4.012A9.54 9.54 0 0 0 12 6a9.55 9.55 0 0 0-5.187 1.487A9.77 9.77 0 0 0 3.2 11.5a9.77 9.77 0 0 0 3.613 4.012A9.54 9.54 0 0 0 12 17" })
	});
}
fO.displayName = "VisibilityOnIcon";
var pO = a(fO);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/voice-call-solid.js
function mO(e, t) {
	return /* @__PURE__ */ (0, H.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: /* @__PURE__ */ (0, H.jsx)("path", { d: "m20.958 16.374.039 3.527q0 .427-.33.756-.33.33-.756.33a16 16 0 0 1-6.57-1.105 16.2 16.2 0 0 1-5.563-3.663 16.1 16.1 0 0 1-3.653-5.573 16.3 16.3 0 0 1-1.115-6.56q0-.427.33-.757T4.095 3l3.528.039a1.07 1.07 0 0 1 1.085.93l.543 3.954q.039.271-.039.504a1.1 1.1 0 0 1-.271.426l-1.64 1.64q.505 1.008 1.154 1.909c.433.6 1.444 1.696 1.444 1.696s1.095 1.01 1.696 1.444q.9.65 1.909 1.153l1.64-1.64q.193-.193.426-.27t.504-.04l3.954.543q.406.059.668.359t.262.727" })
	});
}
mO.displayName = "VoiceCallSolidIcon";
var hO = a(mO);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/volume-on-solid.js
function gO(e, t) {
	return /* @__PURE__ */ (0, H.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref: t,
		...e,
		children: [/* @__PURE__ */ (0, H.jsx)("path", { d: "M3 14v-4a2 2 0 0 1 2-2h2l3.293-3.293c.63-.63 1.707-.184 1.707.707v13.172c0 .89-1.077 1.337-1.707.707L7 16H5a2 2 0 0 1-2-2m11.122-5.536a1 1 0 0 1 1.414 0A5 5 0 0 1 17 12c0 1.38-.56 2.632-1.464 3.536a1 1 0 0 1-1.415-1.415 3 3 0 0 0 .88-2.121c0-.829-.335-1.577-.88-2.121a1 1 0 0 1 0-1.415" }), /* @__PURE__ */ (0, H.jsx)("path", { d: "M16.95 5.636a1 1 0 0 1 1.414 0A8.98 8.98 0 0 1 21 12a8.98 8.98 0 0 1-2.636 6.364 1 1 0 0 1-1.414-1.414A6.98 6.98 0 0 0 19 12a6.98 6.98 0 0 0-2.05-4.95 1 1 0 0 1 0-1.414" })]
	});
}
gO.displayName = "VolumeOnSolidIcon";
var _O = a(gO), vO = {
	content: "_content_1xhpr_8",
	icon: "_icon_1xhpr_17"
};
//#endregion
//#region src/room/timeline/event-tile/body/RedactedBodyView/RedactedBodyView.tsx
function yO({ vm: e, className: n, ref: r }) {
	let { text: i, tooltip: a } = J(e), o = /* @__PURE__ */ t.createElement("span", {
		className: (0, V.default)(vO.content, n),
		ref: r
	}, /* @__PURE__ */ t.createElement(LE, {
		className: vO.icon,
		"aria-hidden": "true"
	}), /* @__PURE__ */ t.createElement("span", null, i));
	return a ? /* @__PURE__ */ t.createElement(se, { description: a }, o) : o;
}
var bO = {
	content: "_content_f1s5h_8",
	invalid: "_invalid_f1s5h_70"
}, xO = { mediaBody: "_mediaBody_rgndh_8" };
//#endregion
//#region src/room/timeline/event-tile/body/MediaBody/MediaBody.tsx
function SO({ as: e, className: n, children: r, ...i }) {
	let a = e || "div";
	return /* @__PURE__ */ t.createElement(a, {
		className: (0, V.default)("mx_MediaBody", xO.mediaBody, n),
		...i
	}, r);
}
//#endregion
//#region src/room/timeline/event-tile/body/MFileBodyView/FileBodyView.tsx
var CO = /* @__PURE__ */ function(e) {
	return e.EXPORT = "EXPORT", e.DECRYPTION_PENDING = "DECRYPTION_PENDING", e.ENCRYPTED = "ENCRYPTED", e.UNENCRYPTED = "UNENCRYPTED", e.INVALID = "INVALID", e;
}({}), wO = /* @__PURE__ */ function(e) {
	return e.ATTACHMENT = "ATTACHMENT", e.AUDIO = "AUDIO", e.DOWNLOAD = "DOWNLOAD", e.VIDEO = "VIDEO", e;
}({});
function TO(e) {
	return e === wO.AUDIO ? _O : e === wO.DOWNLOAD ? VE : e === wO.VIDEO ? sO : yE;
}
function EO({ vm: e, refIFrame: n, refLink: r, className: i }) {
	let { translate: a } = U(), { state: o, showInfo: s, infoLabel: c, infoTooltip: l, infoIcon: u, infoHref: d, showDownload: f, downloadLabel: p, downloadTitle: m, downloadHref: h } = J(e), g = c ?? a("common|attachment"), _ = l ?? g, v = TO(u), b = s ? /* @__PURE__ */ t.createElement(se, {
		description: _,
		placement: "right"
	}, /* @__PURE__ */ t.createElement(SO, { "data-type": "info" }, /* @__PURE__ */ t.createElement(y, {
		as: "button",
		size: "sm",
		kind: "secondary",
		"aria-label": g,
		Icon: v,
		onClick: e.onInfoClick
	}, /* @__PURE__ */ t.createElement("span", null, g)))) : null, x = (0, V.default)(bO.content, i), S = p ?? a("action|download"), C = m ?? S;
	switch (o) {
		case CO.EXPORT: return /* @__PURE__ */ t.createElement("span", { className: x }, /* @__PURE__ */ t.createElement("a", { href: d }, b));
		case CO.DECRYPTION_PENDING: return /* @__PURE__ */ t.createElement("span", { className: x }, b, f && /* @__PURE__ */ t.createElement("div", { "data-type": "download" }, /* @__PURE__ */ t.createElement(y, {
			size: "sm",
			kind: "secondary",
			Icon: VE,
			onClick: e.onDownloadClick
		}, S)));
		case CO.ENCRYPTED: return /* @__PURE__ */ t.createElement("span", { className: x }, b, f && /* @__PURE__ */ t.createElement("div", { "data-type": "download" }, /* @__PURE__ */ t.createElement("div", {
			"aria-hidden": !0,
			style: { display: "none" }
		}, /* @__PURE__ */ t.createElement(y, {
			size: "sm",
			kind: "secondary",
			Icon: VE,
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
		case CO.UNENCRYPTED: return /* @__PURE__ */ t.createElement("span", { className: x }, b, f && /* @__PURE__ */ t.createElement("div", { "data-type": "download" }, /* @__PURE__ */ t.createElement(y, {
			size: "sm",
			kind: "secondary",
			Icon: VE,
			as: "a",
			href: h,
			target: "_blank",
			rel: "noreferrer noopener",
			onClick: e.onDownloadLinkClick
		}, S)));
		case CO.INVALID:
		default: return /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("span", { className: x }, b), /* @__PURE__ */ t.createElement("span", { className: (0, V.default)(x, bO.invalid) }, a("timeline|m.file|error_invalid")));
	}
}
//#endregion
//#region ../../node_modules/blurhash/dist/esm/index.js
var DO = /* @__PURE__ */ "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%*+,-.:;=?@[]^_{|}~".split(""), OO = (e) => {
	let t = 0;
	for (let n = 0; n < e.length; n++) {
		let r = e[n], i = DO.indexOf(r);
		t = t * 83 + i;
	}
	return t;
}, kO = (e) => {
	let t = e / 255;
	return t <= .04045 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4;
}, AO = (e) => {
	let t = Math.max(0, Math.min(1, e));
	return Math.trunc(t <= .0031308 ? t * 12.92 * 255 + .5 : (1.055 * t ** .4166666666666667 - .055) * 255 + .5);
}, jO = (e) => e < 0 ? -1 : 1, MO = (e, t) => jO(e) * Math.abs(e) ** +t, NO = class extends Error {
	constructor(e) {
		super(e), this.name = "ValidationError", this.message = e;
	}
}, PO = (e) => {
	if (!e || e.length < 6) throw new NO("The blurhash string must be at least 6 characters");
	let t = OO(e[0]), n = Math.floor(t / 9) + 1, r = t % 9 + 1;
	if (e.length !== 4 + 2 * r * n) throw new NO(`blurhash length mismatch: length is ${e.length} but it should be ${4 + 2 * r * n}`);
}, FO = (e) => {
	let t = e >> 16, n = e >> 8 & 255, r = e & 255;
	return [
		kO(t),
		kO(n),
		kO(r)
	];
}, IO = (e, t) => {
	let n = Math.floor(e / 361), r = Math.floor(e / 19) % 19, i = e % 19;
	return [
		MO((n - 9) / 9, 2) * t,
		MO((r - 9) / 9, 2) * t,
		MO((i - 9) / 9, 2) * t
	];
}, LO = (e, t, n, r) => {
	PO(e), r |= 1;
	let i = OO(e[0]), a = Math.floor(i / 9) + 1, o = i % 9 + 1, s = (OO(e[1]) + 1) / 166, c = Array(o * a);
	for (let t = 0; t < c.length; t++) t === 0 ? c[t] = FO(OO(e.substring(2, 6))) : c[t] = IO(OO(e.substring(4 + t * 2, 6 + t * 2)), s * r);
	let l = t * 4, u = new Uint8ClampedArray(l * n);
	for (let e = 0; e < n; e++) for (let r = 0; r < t; r++) {
		let i = 0, s = 0, d = 0;
		for (let l = 0; l < a; l++) for (let a = 0; a < o; a++) {
			let u = Math.cos(Math.PI * r * a / t) * Math.cos(Math.PI * e * l / n), f = c[a + l * o];
			i += f[0] * u, s += f[1] * u, d += f[2] * u;
		}
		let f = AO(i), p = AO(s), m = AO(d);
		u[4 * r + 0 + e * l] = f, u[4 * r + 1 + e * l] = p, u[4 * r + 2 + e * l] = m, u[4 * r + 3 + e * l] = 255;
	}
	return u;
}, RO = Object.defineProperty, zO = Object.defineProperties, BO = Object.getOwnPropertyDescriptors, VO = Object.getOwnPropertySymbols, HO = Object.prototype.hasOwnProperty, UO = Object.prototype.propertyIsEnumerable, WO = (e, t, n) => t in e ? RO(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, GO = (e, t) => {
	for (var n in t ||= {}) HO.call(t, n) && WO(e, n, t[n]);
	if (VO) for (var n of VO(t)) UO.call(t, n) && WO(e, n, t[n]);
	return e;
}, KO = (e, t) => zO(e, BO(t)), qO = (e, t) => {
	var n = {};
	for (var r in e) HO.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && VO) for (var r of VO(e)) t.indexOf(r) < 0 && UO.call(e, r) && (n[r] = e[r]);
	return n;
}, JO = class extends e.PureComponent {
	constructor() {
		super(...arguments), this.canvas = null, this.handleRef = (e) => {
			this.canvas = e, this.draw();
		}, this.draw = () => {
			let { hash: e, height: t, punch: n, width: r } = this.props;
			if (this.canvas) {
				let i = LO(e, r, t, n), a = this.canvas.getContext("2d"), o = a.createImageData(r, t);
				o.data.set(i), a.putImageData(o, 0, 0);
			}
		};
	}
	componentDidUpdate() {
		this.draw();
	}
	render() {
		let t = this.props, { hash: n, height: r, width: i } = t, a = qO(t, [
			"hash",
			"height",
			"width"
		]);
		return e.createElement("canvas", KO(GO({}, a), {
			height: r,
			width: i,
			ref: this.handleRef
		}));
	}
};
JO.defaultProps = {
	height: 128,
	width: 128
};
var YO = {
	position: "absolute",
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	width: "100%",
	height: "100%"
}, XO = class extends e.PureComponent {
	componentDidUpdate() {
		if (this.props.resolutionX <= 0) throw Error("resolutionX must be larger than zero");
		if (this.props.resolutionY <= 0) throw Error("resolutionY must be larger than zero");
	}
	render() {
		let t = this.props, { hash: n, height: r, width: i, punch: a, resolutionX: o, resolutionY: s, style: c } = t, l = qO(t, [
			"hash",
			"height",
			"width",
			"punch",
			"resolutionX",
			"resolutionY",
			"style"
		]);
		return e.createElement("div", KO(GO({}, l), { style: KO(GO({
			display: "inline-block",
			height: r,
			width: i
		}, c), { position: "relative" }) }), e.createElement(JO, {
			hash: n,
			height: s,
			width: o,
			punch: a,
			style: YO
		}));
	}
};
XO.defaultProps = {
	height: 128,
	width: 128,
	resolutionX: 32,
	resolutionY: 32
};
var ZO = {
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
}, QO = /* @__PURE__ */ function(e) {
	return e.ERROR = "ERROR", e.HIDDEN = "HIDDEN", e.READY = "READY", e;
}({}), $O = /* @__PURE__ */ function(e) {
	return e.NONE = "NONE", e.SPINNER = "SPINNER", e.BLURHASH = "BLURHASH", e;
}({});
function ek({ placeholder: e, blurhash: n, maxWidth: r, maxHeight: i, loadingLabel: a }) {
	switch (e) {
		case $O.BLURHASH: return n ? /* @__PURE__ */ t.createElement(XO, {
			className: ZO.blurhash,
			hash: n,
			width: r ?? 320,
			height: i ?? 240
		}) : /* @__PURE__ */ t.createElement(D, {
			"aria-label": a,
			role: "progressbar"
		});
		case $O.SPINNER: return /* @__PURE__ */ t.createElement(D, {
			"aria-label": a,
			role: "progressbar"
		});
		case $O.NONE:
		default: return null;
	}
}
function tk({ vm: e, className: n, children: r }) {
	let { translate: i } = U(), { state: a, alt: o, errorLabel: s, hiddenButtonLabel: c, src: l, thumbnailSrc: u, showAnimatedContentOnHover: d, placeholder: f = $O.NONE, blurhash: p, maxWidth: m, maxHeight: g, aspectRatio: _, isSvg: v, gifLabel: y, bannerLabel: b, tooltipLabel: x, linkUrl: S, linkTarget: C } = J(e), [w, T] = h(!1), [E, D] = h(!1), O = w || E, k = (0, V.default)(n, ZO.root);
	if (a === QO.ERROR) return /* @__PURE__ */ t.createElement("span", { className: (0, V.default)(k, ZO.error) }, /* @__PURE__ */ t.createElement(lD, {
		className: ZO.errorIcon,
		width: "16",
		height: "16"
	}), s);
	let A = O && d && l ? l : u ?? l, ee = m === void 0 ? void 0 : `min(100%, ${m}px)`, j = {
		width: ee,
		maxWidth: m,
		maxHeight: g,
		aspectRatio: _
	}, te = v ? {
		width: ee,
		maxWidth: m,
		maxHeight: g
	} : void 0, ne = ek({
		placeholder: f,
		blurhash: p,
		maxWidth: m,
		maxHeight: g,
		loadingLabel: i("common|loading")
	}), M = ne !== null, re = a === QO.HIDDEN ? /* @__PURE__ */ t.createElement("div", { style: {
		width: m,
		height: g
	} }, /* @__PURE__ */ t.createElement("button", {
		type: "button",
		className: ZO.hiddenButton,
		onClick: e.onHiddenButtonClick
	}, /* @__PURE__ */ t.createElement("div", { className: ZO.hiddenButtonContent }, /* @__PURE__ */ t.createElement(pO, null), /* @__PURE__ */ t.createElement("span", null, c)))) : A ? /* @__PURE__ */ t.createElement("img", {
		className: ZO.image,
		src: A,
		alt: o,
		onError: e.onImageError,
		onLoad: e.onImageLoad,
		onMouseEnter: () => T(!0),
		onMouseLeave: () => T(!1)
	}) : null, N = a === QO.READY && b && O ? /* @__PURE__ */ t.createElement("span", { className: ZO.banner }, b) : null, ie = a === QO.READY && y && !O ? /* @__PURE__ */ t.createElement("p", { className: ZO.gifLabel }, y) : null, ae = /* @__PURE__ */ t.createElement("div", {
		className: ZO.thumbnailContainer,
		style: j
	}, M && /* @__PURE__ */ t.createElement("div", { className: (0, V.default)(ZO.placeholder, { [ZO.placeholderBlurhash]: f === $O.BLURHASH && !!p }) }, ne), /* @__PURE__ */ t.createElement("div", {
		className: ZO.mediaContent,
		style: te
	}, re, ie, N));
	return x && (ae = /* @__PURE__ */ t.createElement(se, {
		description: x,
		placement: "right",
		isTriggerInteractive: !0
	}, ae)), a === QO.READY && S && (ae = /* @__PURE__ */ t.createElement("a", {
		href: S,
		target: C,
		rel: C === "_blank" ? "noreferrer noopener" : void 0,
		className: ZO.link,
		onClick: e.onLinkClick,
		onFocus: () => D(!0),
		onBlur: () => D(!1)
	}, ae)), /* @__PURE__ */ t.createElement("div", { className: k }, ae, r);
}
var nk = {
	root: "_root_mntwr_1",
	container: "_container_mntwr_5",
	video: "_video_mntwr_10",
	hiddenButton: "_hiddenButton_mntwr_16",
	hiddenButtonContent: "_hiddenButtonContent_mntwr_29",
	loadingContainer: "_loadingContainer_mntwr_39",
	error: "_error_mntwr_47"
}, rk = {
	ERROR: "ERROR",
	HIDDEN: "HIDDEN",
	LOADING: "LOADING",
	READY: "READY"
};
function ik({ vm: e, className: n, containerClassName: r, videoRef: i, children: a }) {
	let { state: o, videoLabel: s, videoTitle: c, hiddenButtonLabel: l, errorLabel: u, maxWidth: d, maxHeight: f, aspectRatio: p, src: m, poster: h, preload: g, controls: _, muted: v, autoPlay: y } = J(e), b = (0, V.default)(n, nk.root), x = (0, V.default)(r, nk.container), S = {
		width: d === void 0 ? void 0 : `min(100%, ${d}px)`,
		maxWidth: d,
		maxHeight: f,
		aspectRatio: p
	};
	return o === rk.ERROR ? /* @__PURE__ */ t.createElement("span", { className: (0, V.default)(b, nk.error) }, /* @__PURE__ */ t.createElement(rD, {
		width: "16",
		height: "16"
	}), u) : o === rk.HIDDEN ? /* @__PURE__ */ t.createElement("span", { className: b }, /* @__PURE__ */ t.createElement("div", {
		className: x,
		style: S
	}, /* @__PURE__ */ t.createElement("button", {
		type: "button",
		onClick: e.onPreviewClick,
		className: nk.hiddenButton
	}, /* @__PURE__ */ t.createElement("div", { className: nk.hiddenButtonContent }, /* @__PURE__ */ t.createElement(pO, null), /* @__PURE__ */ t.createElement("span", null, l))))) : o === rk.LOADING ? /* @__PURE__ */ t.createElement("span", { className: b }, /* @__PURE__ */ t.createElement("div", {
		className: x,
		style: S
	}, /* @__PURE__ */ t.createElement("div", { className: nk.loadingContainer }, /* @__PURE__ */ t.createElement(D, {
		"aria-label": "Loading...",
		role: "progressbar"
	})))) : /* @__PURE__ */ t.createElement("span", { className: b }, /* @__PURE__ */ t.createElement("div", {
		className: x,
		style: S,
		"data-video-body-mask-target": ""
	}, /* @__PURE__ */ t.createElement("video", {
		className: nk.video,
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
var ak = {
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
}, ok = /* @__PURE__ */ function(e) {
	return e.TEXT = "TEXT", e.NOTICE = "NOTICE", e.EMOTE = "EMOTE", e.CAPTION = "CAPTION", e;
}({}), sk = /* @__PURE__ */ function(e) {
	return e.NONE = "NONE", e.LINK = "LINK", e.ACTION = "ACTION", e;
}({});
function ck(e, t) {
	return !t || !o(e) ? e : r(e, { ref: t });
}
function lk({ vm: e, body: n, bodyRef: r, urlPreviews: i, className: a }) {
	let { id: o, kind: s, bodyWrapper: c = sk.NONE, bodyLinkHref: l, bodyActionAriaLabel: u, showEditedMarker: d, editedMarkerText: f, editedMarkerTooltip: p, editedMarkerCaption: m, showPendingModerationMarker: h, pendingModerationText: g, emoteSenderName: _ } = J(e), v = (0, V.default)(a, ak.root, {
		[ak.text]: s === ok.TEXT,
		[ak.notice]: s === ok.NOTICE,
		[ak.emote]: s === ok.EMOTE,
		[ak.caption]: s === ok.CAPTION
	}), y = ck(n, r), b = e.onEditedMarkerClick ? (t) => {
		t.preventDefault(), t.stopPropagation(), e.onEditedMarkerClick?.(t);
	} : void 0, x = [];
	if (d) {
		let e = /* @__PURE__ */ t.createElement("button", {
			type: "button",
			className: (0, V.default)(ak.annotation, ak.editedMarker),
			onClick: b
		}, /* @__PURE__ */ t.createElement("span", null, f));
		x.push(p ? /* @__PURE__ */ t.createElement(se, {
			key: "edited-marker",
			description: p,
			caption: m,
			isTriggerInteractive: !0
		}, e) : t.cloneElement(e, { key: "edited-marker" }));
	}
	if (h && x.push(/* @__PURE__ */ t.createElement("span", {
		key: "pending-moderation-marker",
		className: ak.annotation
	}, g)), c === sk.LINK && l ? y = /* @__PURE__ */ t.createElement("a", {
		href: l,
		className: ak.bodyLink
	}, y) : c === sk.ACTION && (y = /* @__PURE__ */ t.createElement("button", {
		type: "button",
		"aria-label": u,
		className: ak.bodyAction,
		onClick: e.onBodyActionClick
	}, y)), x.length > 0) {
		let e = (0, V.default)(ak.annotated, { [ak.annotatedInline]: s === ok.EMOTE });
		y = s === ok.EMOTE ? /* @__PURE__ */ t.createElement("span", {
			dir: "auto",
			className: e
		}, y, x) : /* @__PURE__ */ t.createElement("div", {
			dir: "auto",
			className: e
		}, y, x);
	}
	return s === ok.EMOTE ? /* @__PURE__ */ t.createElement("div", {
		id: o,
		className: v,
		onClickCapture: e.onRootClick,
		dir: "auto"
	}, "*\xA0", /* @__PURE__ */ t.createElement("button", {
		type: "button",
		className: ak.emoteSender,
		onClick: e.onEmoteSenderClick
	}, _), "\xA0", y, i) : /* @__PURE__ */ t.createElement("div", {
		id: o,
		className: v,
		onClickCapture: e.onRootClick
	}, y, i);
}
var uk = {
	tileErrorView: "_tileErrorView_1dv8p_1",
	line: "_line_1dv8p_7",
	bubble: "_bubble_1dv8p_15",
	message: "_message_1dv8p_19",
	viewSourceButton: "_viewSourceButton_1dv8p_23"
};
//#endregion
//#region src/room/timeline/event-tile/EventTileView/TileErrorView/TileErrorView.tsx
function dk({ vm: e, className: n }) {
	let { message: r, eventType: i, bugReportCtaLabel: a, viewSourceCtaLabel: o, layout: s = "group" } = J(e);
	return /* @__PURE__ */ t.createElement("li", {
		className: (0, V.default)(uk.tileErrorView, n, { [uk.bubble]: s === "bubble" }),
		"data-layout": s
	}, /* @__PURE__ */ t.createElement("div", {
		className: uk.line,
		role: "status"
	}, /* @__PURE__ */ t.createElement("span", { className: uk.message }, r, i && ` (${i})`), a && /* @__PURE__ */ t.createElement(y, {
		kind: "secondary",
		size: "sm",
		onClick: e.onBugReportClick
	}, a), o && /* @__PURE__ */ t.createElement("button", {
		type: "button",
		className: uk.viewSourceButton,
		onClick: e.onViewSourceClick
	}, o)));
}
var fk = {
	pill: "_pill_1i8jm_8",
	label: "_label_1i8jm_14"
};
//#endregion
//#region src/core/pill-input/Pill/Pill.tsx
function pk({ className: e, children: n, label: r, onClick: i, ...a }) {
	let o = d(), { translate: s } = U();
	return /* @__PURE__ */ t.createElement(K, {
		display: "inline-flex",
		gap: "var(--cpd-space-1-5x)",
		align: "center",
		className: (0, V.default)(fk.pill, e),
		...a
	}, n, /* @__PURE__ */ t.createElement("span", {
		id: o,
		className: fk.label
	}, r), i && /* @__PURE__ */ t.createElement(E, {
		"aria-describedby": o,
		size: "16px",
		onClick: i,
		"aria-label": s("action|delete"),
		className: "mx_Dialog_nonDialogButton"
	}, /* @__PURE__ */ t.createElement(PS, null)));
}
//#endregion
//#region ../../node_modules/react-merge-refs/dist/index.js
function mk(e) {
	return (t) => {
		for (let n of e) gk(n, t);
	};
}
function hk(e) {
	return (t) => {
		let n = [];
		for (let r of e) {
			let e = gk(r, t), i = typeof e == "function";
			n.push(i ? e : () => gk(r, null));
		}
		return () => {
			for (let e of n) e();
		};
	};
}
function gk(e, t) {
	if (typeof e == "function") return e(t);
	e && (e.current = t);
}
var _k = parseInt(_.split(".")[0], 10) >= 19 ? hk : mk;
function vk(e) {
	return p(() => _k(e), e);
}
var yk = {
	pillInput: "_pillInput_1yam9_8",
	input: "_input_1yam9_16",
	largerInput: "_largerInput_1yam9_32"
};
//#endregion
//#region src/core/pill-input/PillInput/PillInput.tsx
function bk({ className: e, children: r, onRemoveChildren: i, inputProps: a, ...o }) {
	let s = m(null), c = Mb(a, ["onKeyDown", "ref"]), l = vk([s, a?.ref]), u = n.toArray(r).length > 0;
	return /* @__PURE__ */ t.createElement(K, {
		...o,
		gap: "var(--cpd-space-1x)",
		direction: "column",
		className: (0, V.default)(yk.pillInput, e),
		onClick: (e) => {
			e.preventDefault(), e.stopPropagation(), s.current?.focus();
		}
	}, u && /* @__PURE__ */ t.createElement(K, {
		gap: "var(--cpd-space-1x)",
		wrap: "wrap",
		align: "center"
	}, r), /* @__PURE__ */ t.createElement("input", {
		ref: l,
		autoComplete: "off",
		className: (0, V.default)(yk.input, { [yk.largerInput]: u }),
		onKeyDown: (e) => {
			let t = e.currentTarget.value.trim();
			if (e.key === "Backspace" && !t) {
				e.preventDefault(), i?.(e);
				return;
			}
			a?.onKeyDown?.(e);
		},
		...c
	}));
}
var xk = {
	container: "_container_1xryk_8",
	secondaryAction: "_secondaryAction_1xryk_16",
	primaryAction: "_primaryAction_1xryk_20",
	title: "_title_1xryk_24",
	description: "_description_1xryk_28"
}, Sk = {
	ConnectionLost: "ConnectionLost",
	NeedsConsent: "NeedsConsent",
	ResourceLimited: "ResourceLimited",
	UnsentMessages: "UnsentMessages",
	LocalRoomFailed: "LocalRoomFailed"
};
function Ck({ vm: e }) {
	let { translate: n } = U(), r = J(e), i = d(), a = c((t) => {
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
		case Sk.ConnectionLost: return /* @__PURE__ */ t.createElement(OS, {
			type: "info",
			role: "status",
			"aria-labelledby": i
		}, /* @__PURE__ */ t.createElement("div", { className: xk.container }, /* @__PURE__ */ t.createElement(N, {
			className: xk.title,
			id: i,
			weight: "medium"
		}, q("tchap|server_connectivity_lost_title", void 0, { a: (e) => /* @__PURE__ */ t.createElement("a", {
			target: "_blank",
			rel: "noreferrer noopener",
			href: "https://status.tchap.numerique.gouv.fr"
		}, e) })), /* @__PURE__ */ t.createElement(N, { className: xk.description }, n("room|status_bar|server_connectivity_lost_description"))));
		case Sk.NeedsConsent: return /* @__PURE__ */ t.createElement(OS, {
			type: "info",
			role: "status",
			"aria-labelledby": i,
			actions: /* @__PURE__ */ t.createElement(y, {
				onClick: l,
				className: xk.primaryAction,
				kind: "primary",
				size: "sm",
				as: "a",
				href: r.consentUri,
				target: "_blank",
				rel: "noreferrer noopener"
			}, n("terms|tac_button"))
		}, /* @__PURE__ */ t.createElement("div", { className: xk.container }, /* @__PURE__ */ t.createElement(N, {
			className: xk.title,
			id: i,
			weight: "medium"
		}, n("room|status_bar|requires_consent_agreement_title"))));
		case Sk.ResourceLimited: return /* @__PURE__ */ t.createElement(OS, {
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
		}, /* @__PURE__ */ t.createElement("div", { className: xk.container }, /* @__PURE__ */ t.createElement(N, {
			className: xk.title,
			id: i,
			weight: "medium"
		}, {
			monthly_active_user: n("room|status_bar|monthly_user_limit_reached_title"),
			hs_disabled: n("room|status_bar|homeserver_blocked_title")
		}[r.resourceLimit] || n("room|status_bar|exceeded_resource_limit_title")), /* @__PURE__ */ t.createElement(N, { className: xk.description }, n("room|status_bar|exceeded_resource_limit_description"))));
		case Sk.LocalRoomFailed: return /* @__PURE__ */ t.createElement(OS, {
			role: "status",
			type: "info",
			"aria-labelledby": i,
			actions: /* @__PURE__ */ t.createElement(y, {
				size: "sm",
				kind: "primary",
				className: xk.primaryAction,
				Icon: UD,
				onClick: s
			}, n("action|retry"))
		}, /* @__PURE__ */ t.createElement(N, {
			className: xk.title,
			id: i,
			weight: "medium"
		}, n("room|status_bar|failed_to_create_room_title")));
		case Sk.UnsentMessages: return /* @__PURE__ */ t.createElement(OS, {
			role: "status",
			type: "info",
			actions: r.isResending ? /* @__PURE__ */ t.createElement(D, null) : /* @__PURE__ */ t.createElement(t.Fragment, null, e.onDeleteAllClick && /* @__PURE__ */ t.createElement(y, {
				size: "sm",
				kind: "secondary",
				Icon: LE,
				className: xk.secondaryAction,
				onClick: a
			}, n("room|status_bar|delete_all")), e.onResendAllClick && /* @__PURE__ */ t.createElement(y, {
				size: "sm",
				kind: "primary",
				Icon: UD,
				onClick: o,
				className: xk.primaryAction
			}, n("room|status_bar|retry_all"))),
			"aria-labelledby": i
		}, /* @__PURE__ */ t.createElement("div", { className: xk.container }, /* @__PURE__ */ t.createElement(N, {
			className: xk.title,
			id: i,
			weight: "medium"
		}, q("tchap|server_connectivity_lost_title", void 0, { a: (e) => /* @__PURE__ */ t.createElement("a", {
			target: "_blank",
			rel: "noreferrer noopener",
			href: "https://status.tchap.numerique.gouv.fr"
		}, e) })), /* @__PURE__ */ t.createElement(N, { className: xk.description }, n("room|status_bar|select_messages_to_retry"))));
		default: return null;
	}
}
var wk = {
	container: "_container_19tks_8",
	header: "_header_19tks_22",
	roundedCornerContainer: "_roundedCornerContainer_19tks_30"
}, Tk = ({ vm: e, RoomAvatar: n }) => {
	let r = J(e), { translate: i } = U();
	return /* @__PURE__ */ t.createElement("div", {
		"data-testid": "widget-pip-container",
		className: wk.container,
		onMouseDown: e.onStartMoving
	}, /* @__PURE__ */ t.createElement("div", { className: wk.header }, /* @__PURE__ */ t.createElement(E, {
		size: "28px",
		"data-testid": "base-card-back-button",
		onClick: (t) => e.onBackClick(t),
		tooltip: i("action|back"),
		kind: "secondary"
	}, /* @__PURE__ */ t.createElement(kE, null)), /* @__PURE__ */ t.createElement(n, { size: "20px" }), r.roomName), /* @__PURE__ */ t.createElement("div", { className: wk.roundedCornerContainer }, /* @__PURE__ */ t.createElement(e.persistentAppComponent, {
		persistentWidgetId: r.widgetId,
		persistentRoomId: r.roomId
	})));
};
//#endregion
//#region src/room/HistoryVisibilityBadge/HistoryVisibilityBadge.tsx
function Ek({ historyVisibility: e }) {
	let n = {
		color: "var(--cpd-color-icon-info-primary)",
		width: "1rem",
		height: "1rem"
	};
	switch (e) {
		case "invited":
		case "joined": return /* @__PURE__ */ t.createElement(v, { kind: "blue" }, /* @__PURE__ */ t.createElement(dO, n), q("room|history_visibility_badge|private"));
		case "shared": return /* @__PURE__ */ t.createElement(v, { kind: "blue" }, /* @__PURE__ */ t.createElement(aD, n), q("room|history_visibility_badge|shared"));
		case "world_readable": return /* @__PURE__ */ t.createElement(v, { kind: "blue" }, /* @__PURE__ */ t.createElement(aO, n), q("room|history_visibility_badge|world_readable"));
		default: return null;
	}
}
//#endregion
//#region src/room/right-panel/WidgetContextMenuView/WidgetContextMenuView.tsx
var Dk = ({ vm: e }) => {
	let { translate: n } = U(), { showStreamAudioStreamButton: r, showEditButton: i, showSnapshotButton: a, showDeleteButton: o, showRevokeButton: s, showMoveButtons: c, isMenuOpened: l, userWidget: u, trigger: d } = J(e), f;
	r && (f = /* @__PURE__ */ t.createElement(A, {
		onSelect: e.onStreamAudioClick,
		label: n("widget|context_menu|start_audio_stream")
	}));
	let p;
	i && (p = /* @__PURE__ */ t.createElement(A, {
		onSelect: e.onEditClick,
		label: n("action|edit")
	}));
	let m;
	a && (m = /* @__PURE__ */ t.createElement(A, {
		onSelect: e.onSnapshotClick,
		label: n("widget|context_menu|screenshot")
	}));
	let h;
	o && (h = /* @__PURE__ */ t.createElement(A, {
		onSelect: e.onDeleteClick,
		label: n(u ? "action|remove" : "widget|context_menu|remove")
	}));
	let g;
	s && (g = /* @__PURE__ */ t.createElement(A, {
		onSelect: e.onRevokeClick,
		label: n("widget|context_menu|revoke")
	}));
	let [_, v] = c, y;
	_ && (y = /* @__PURE__ */ t.createElement(A, {
		onSelect: () => e.onMoveButton(-1),
		label: n("widget|context_menu|move_left")
	}));
	let b;
	v && (b = /* @__PURE__ */ t.createElement(A, {
		onSelect: () => e.onMoveButton(1),
		label: n("widget|context_menu|move_right")
	}));
	let x = () => l ? /* @__PURE__ */ t.createElement(t.Fragment, null, f, p, g, h, m, y, b) : null, S = t.isValidElement(d) ? d : /* @__PURE__ */ t.createElement(E, {
		size: "24px",
		"aria-label": "context menu trigger button",
		inert: !0,
		tabIndex: -1
	}, /* @__PURE__ */ t.createElement(kD, null));
	return /* @__PURE__ */ t.createElement(k, {
		title: "Widget context menu",
		open: l,
		showTitle: !1,
		side: "right",
		align: "start",
		trigger: S,
		onOpenChange: e.onFinished
	}, x());
}, Ok = { content: "_content_u6fft_8" }, kk = { timelineSeparator: "_timelineSeparator_yq5ye_8" }, Ak = ({ label: e, className: n, children: r, role: i = "separator" }) => /* @__PURE__ */ t.createElement(K, {
	className: (0, V.default)(n, kk.timelineSeparator),
	role: i,
	"aria-label": i === "separator" ? e : void 0,
	align: "center"
}, /* @__PURE__ */ t.createElement("hr", { role: "none" }), r, /* @__PURE__ */ t.createElement("hr", { role: "none" })), jk = 15e3, Mk = 75e3, Nk = 45, Pk = 75, Fk = 23, Ik = 26;
function Lk(e, t) {
	let n = Date.now() - e, r = Math.abs(Math.ceil(n / 6e4)), i = Math.ceil(r / 60), a = Math.ceil(i / 24), o = t?.translate ?? q;
	return n >= 0 ? n <= jk ? o("time|few_seconds_ago") : n <= Mk ? o("time|about_minute_ago") : r <= Nk ? o("time|n_minutes_ago", { num: r }) : r <= Pk ? o("time|about_hour_ago") : i <= Fk ? o("time|n_hours_ago", { num: i }) : i <= Ik ? o("time|about_day_ago") : o("time|n_days_ago", { num: a }) : (n = Math.abs(n), n <= jk ? o("time|in_few_seconds") : n <= Mk ? o("time|in_about_minute") : r <= Nk ? o("time|in_n_minutes", { num: r }) : r <= Pk ? o("time|in_about_hour") : i <= Fk ? o("time|in_n_hours", { num: i }) : i <= Ik ? o("time|in_about_day") : o("time|in_n_days", { num: a }));
}
function Rk(e) {
	return new Intl.RelativeTimeFormat(e?.language, {
		style: "long",
		numeric: "auto"
	});
}
var zk = {
	picker_menu_item: "_picker_menu_item_1tj52_8",
	picker_form: "_picker_form_1tj52_12",
	picker_input: "_picker_input_1tj52_22",
	picker_input_date: "_picker_input_date_1tj52_28"
}, Bk = ({ vm: e, inputRef: n, onSubmitted: r, onDismissed: i }) => {
	let a = J(e), o = fp(a.jumpFromDate ? new Date(a.jumpFromDate) : /* @__PURE__ */ new Date()), { translate: s } = U(), c = d(), [l, u] = h(o), f = m(null), p = n ?? f, g = m(null), _ = (e) => {
		e.key === "Tab" && (e.shiftKey ? i?.() : (e.preventDefault(), g.current?.focus()));
	}, v = (e) => {
		u(e.currentTarget.value);
	}, y = () => {
		e.onDatePicked?.(l), r?.();
	}, b = (e) => {
		e.preventDefault(), y();
	}, x = (e) => {
		e.key === "Tab" && (e.shiftKey ? (e.preventDefault(), p.current?.focus()) : i?.()), (e.key == "Enter" || e.key == " " || e.key == "Spacebar") && (e.preventDefault(), y());
	}, S = (e) => {
		e.preventDefault();
	};
	return /* @__PURE__ */ t.createElement(A, {
		as: "div",
		"data-testid": "jump-to-date-picker",
		label: s("room|jump_to_date"),
		onSelect: S,
		hideChevron: !0,
		className: zk.picker_menu_item
	}, /* @__PURE__ */ t.createElement(te, {
		className: zk.picker_form,
		onSubmit: b
	}, /* @__PURE__ */ t.createElement(C, {
		name: "jump-to-date-field",
		className: zk.picker_input
	}, /* @__PURE__ */ t.createElement(ie, {
		ref: p,
		id: c,
		type: "date",
		"aria-label": s("room|jump_to_date_prompt"),
		onInput: v,
		onKeyDown: _,
		value: l,
		max: fp(/* @__PURE__ */ new Date()),
		className: zk.picker_input_date
	})), /* @__PURE__ */ t.createElement(re, {
		ref: g,
		className: zk.picker_button,
		type: "submit",
		kind: "primary",
		size: "sm",
		onKeyDown: x
	}, s("action|go"))));
}, Vk = {
	picker_menu: "_picker_menu_158c5_8",
	picker_menu_item: "_picker_menu_item_158c5_14",
	picker_separator: "_picker_separator_158c5_18"
}, Hk = ({ vm: e, open: n, trigger: r, onOpenChange: i }) => {
	let a = U(), { translate: o } = U(), s = m(null), c = (e) => {
		e.key === "ArrowDown" && (e.preventDefault(), s.current?.focus());
	};
	return /* @__PURE__ */ t.createElement(k, {
		open: n,
		onOpenChange: (e) => {
			i?.(e);
		},
		title: o("room|jump_to_date"),
		showTitle: !1,
		trigger: r,
		align: "start",
		className: Vk.picker_menu
	}, /* @__PURE__ */ t.createElement(A, {
		label: j_(Rk(a).format(-1, "week")),
		onSelect: () => e.onLastWeekPicked?.(),
		"data-testid": "jump-to-date-last-week",
		hideChevron: !0,
		className: Vk.picker_menu_item
	}), /* @__PURE__ */ t.createElement(A, {
		label: j_(Rk(a).format(-1, "month")),
		onSelect: () => e.onLastMonthPicked?.(),
		"data-testid": "jump-to-date-last-month",
		hideChevron: !0,
		className: Vk.picker_menu_item
	}), /* @__PURE__ */ t.createElement(A, {
		label: o("room|jump_to_date_beginning"),
		onSelect: () => e.onBeginningPicked?.(),
		"data-testid": "jump-to-date-beginning",
		hideChevron: !0,
		className: Vk.picker_menu_item,
		onKeyDown: c
	}), /* @__PURE__ */ t.createElement(ne, {
		decorative: !0,
		className: Vk.picker_separator
	}), /* @__PURE__ */ t.createElement(Bk, {
		vm: e,
		inputRef: s,
		onSubmitted: () => i?.(!1),
		onDismissed: () => i?.(!1)
	}));
}, Uk = a(function({ label: e, tooltipOpen: n, className: r, ...i }, a) {
	let { translate: o } = U();
	return /* @__PURE__ */ t.createElement(se, {
		description: o("room|jump_to_date"),
		placement: "right",
		open: n
	}, /* @__PURE__ */ t.createElement(K, {
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
	}, e), /* @__PURE__ */ t.createElement(DE, null)));
});
//#endregion
//#region src/room/timeline/DateSeparatorView/DateSeparatorView.tsx
function Wk({ vm: e, className: n }) {
	let { label: r, jumpToEnabled: i } = J(e), [a, o] = h(!1), [s, c] = h(!1), [l, u] = h(!1);
	return i ? /* @__PURE__ */ t.createElement(Ak, {
		label: r,
		className: (0, V.default)(n),
		role: "none"
	}, /* @__PURE__ */ t.createElement(Hk, {
		vm: e,
		open: a,
		onOpenChange: (e) => {
			o(e), e && (c(!1), u(!1));
		},
		trigger: /* @__PURE__ */ t.createElement(Uk, {
			label: r,
			tooltipOpen: !a && (s || l),
			className: Ok.content,
			onMouseEnter: () => c(!0),
			onMouseLeave: () => c(!1),
			onFocus: (e) => u(e.currentTarget.matches(":focus-visible")),
			onBlur: () => u(!1)
		})
	})) : /* @__PURE__ */ t.createElement(Ak, {
		label: r,
		className: (0, V.default)(n)
	}, /* @__PURE__ */ t.createElement(K, { className: Ok.content }, /* @__PURE__ */ t.createElement(T, {
		as: "h2",
		size: "lg",
		"aria-hidden": "true"
	}, r)));
}
var Gk = {
	toolbar: "_toolbar_1ax4y_8",
	toolbar_item: "_toolbar_item_1ax4y_14"
};
//#endregion
//#region src/room/timeline/event-tile/actions/ActionBarView/ActionBarButton.tsx
function Kk({ presentation: e, buttonRef: n, label: r, onActivate: i, icon: a, disabled: o, ariaPressed: s, ariaExpanded: c, tooltipDescription: l, tooltipCaption: u }) {
	let d = e === "icon", f = (e) => {
		e.preventDefault(), e.stopPropagation(), i?.(e.currentTarget);
	};
	return /* @__PURE__ */ t.createElement(se, {
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
		onContextMenu: f,
		className: Gk.toolbar_item,
		Icon: d ? a : void 0
	}, d ? void 0 : r));
}
//#endregion
//#region src/room/timeline/event-tile/actions/ActionBarView/ActionBarView.tsx
var $ = /* @__PURE__ */ function(e) {
	return e.Cancel = "cancel", e.CopyLink = "copyLink", e.Download = "download", e.Edit = "edit", e.Expand = "expand", e.Hide = "hide", e.Options = "options", e.Pin = "pin", e.React = "react", e.Remove = "remove", e.Reply = "reply", e.ReplyInThread = "replyInThread", e.Resend = "resend", e.ViewInRoom = "viewInRoom", e.ViewSource = "viewSource", e;
}({});
function qk({ vm: e, className: n }) {
	let { translate: r } = U(), [i, a] = h(0), { actions: o, presentation: s = "icon", isThreadReplyAllowed: l, isDownloadEncrypted: u, isDownloadLoading: d, isPinned: g, isQuoteExpanded: _, downloadScanState: v } = J(e), y = m({}), b = p(() => Object.fromEntries(Object.values($).map((e) => [e, (t) => {
		y.current[e] = t;
	}])), []), x = {};
	x[$.Edit] = /* @__PURE__ */ t.createElement(Kk, {
		key: $.Edit,
		presentation: s,
		buttonRef: b[$.Edit],
		label: r("action|edit"),
		onActivate: e.onEditClick,
		icon: GE
	});
	let S = r(g ? "action|unpin" : "action|pin");
	x[$.Pin] = /* @__PURE__ */ t.createElement(Kk, {
		key: $.Pin,
		presentation: s,
		buttonRef: b[$.Pin],
		label: S,
		onActivate: e.onPinClick,
		icon: g ? tO : ND,
		ariaPressed: g
	}), x[$.Cancel] = /* @__PURE__ */ t.createElement(Kk, {
		key: $.Cancel,
		presentation: s,
		buttonRef: b[$.Cancel],
		label: r("action|delete"),
		onActivate: e.onCancelClick,
		icon: LE
	}), x[$.CopyLink] = /* @__PURE__ */ t.createElement(Kk, {
		key: $.CopyLink,
		presentation: s,
		buttonRef: b[$.CopyLink],
		label: r("timeline|mab|copy_link_thread"),
		onActivate: e.onCopyLinkClick,
		icon: hD
	}), x[$.Reply] = /* @__PURE__ */ t.createElement(Kk, {
		key: $.Reply,
		presentation: s,
		buttonRef: b[$.Reply],
		label: r("action|reply"),
		onActivate: e.onReplyClick,
		icon: VD
	}), x[$.React] = /* @__PURE__ */ t.createElement(Kk, {
		key: $.React,
		presentation: s,
		buttonRef: b[$.React],
		label: r("action|react"),
		onActivate: e.onReactionsClick,
		icon: zD
	});
	let C = r("action|download");
	d && (C = r(u ? "timeline|download_action_decrypting" : "timeline|download_action_downloading"));
	let w = () => d || v === "scanning" ? D : v === "unsafe" ? xE : VE;
	x[$.Download] = /* @__PURE__ */ t.createElement(Kk, {
		key: $.Download,
		presentation: s,
		buttonRef: b[$.Download],
		label: C,
		onActivate: e.onDownloadClick,
		icon: w(),
		disabled: d || v === "unsafe"
	}), x[$.Hide] = /* @__PURE__ */ t.createElement(Kk, {
		key: $.Hide,
		presentation: s,
		buttonRef: b[$.Hide],
		label: r("action|hide"),
		onActivate: e.onHideClick,
		icon: dO
	});
	let T = r(l ? "action|reply_in_thread" : "threads|error_start_thread_existing_relation");
	x[$.ReplyInThread] = /* @__PURE__ */ t.createElement(Kk, {
		key: $.ReplyInThread,
		presentation: s,
		buttonRef: b[$.ReplyInThread],
		label: r("action|reply_in_thread"),
		tooltipDescription: T,
		onActivate: e.onReplyInThreadClick,
		icon: $D,
		disabled: !l
	}), x[$.Resend] = /* @__PURE__ */ t.createElement(Kk, {
		key: $.Resend,
		presentation: s,
		buttonRef: b[$.Resend],
		label: r("action|retry"),
		onActivate: e.onResendClick,
		icon: UD
	});
	let E = r(_ ? "timeline|mab|collapse_reply_chain" : "timeline|mab|expand_reply_chain");
	x[$.Expand] = /* @__PURE__ */ t.createElement(Kk, {
		key: $.Expand,
		presentation: s,
		buttonRef: b[$.Expand],
		label: E,
		tooltipCaption: `${r("keyboard|shift")} + ${r("action|click")}`,
		onActivate: e.onToggleThreadExpanded,
		icon: _ ? NE : ZE,
		ariaExpanded: _
	}), x[$.Options] = /* @__PURE__ */ t.createElement(Kk, {
		key: $.Options,
		presentation: s,
		buttonRef: b[$.Options],
		label: r("common|options"),
		onActivate: e.onOptionsClick,
		icon: kD
	}), x[$.Remove] = /* @__PURE__ */ t.createElement(Kk, {
		key: $.Remove,
		presentation: s,
		buttonRef: b[$.Remove],
		label: r("action|remove"),
		onActivate: e.onRemoveClick,
		icon: LE
	}), x[$.ViewInRoom] = /* @__PURE__ */ t.createElement(Kk, {
		key: $.ViewInRoom,
		presentation: s,
		buttonRef: b[$.ViewInRoom],
		label: r("timeline|mab|view_in_room"),
		onActivate: e.onViewInRoomClick,
		icon: pO
	}), x[$.ViewSource] = /* @__PURE__ */ t.createElement(Kk, {
		key: $.ViewSource,
		presentation: s,
		buttonRef: b[$.ViewSource],
		label: r("action|view_source"),
		onActivate: e.onViewSourceClick,
		icon: dD
	});
	let O = c((e) => {
		switch (e) {
			case $.Download: return d;
			case $.ReplyInThread: return !l;
			default: return !1;
		}
	}, [d, l]), k = p(() => o.map((e) => ({
		action: e,
		disabled: O(e)
	})), [o, O]), A = k.map((e, t) => e.disabled ? -1 : t).filter((e) => e >= 0), ee = A[0] ?? 0, j = k[i] && !k[i].disabled ? i : ee;
	f(() => {
		a(j), k.forEach(({ action: e }, t) => {
			let n = y.current[e] ?? null;
			n && (n.tabIndex = t === j ? 0 : -1);
		});
	}, [j, k]);
	let te = (e) => {
		let t = k[e]?.action, n = t ? y.current[t] ?? null : null;
		n && (a(e), n.focus());
	}, ne = (e) => {
		if (A.length === 0) return;
		let t = k.findIndex(({ action: e }) => y.current[e] === document.activeElement), n = t >= 0 ? t : j;
		switch (e.key) {
			case "ArrowRight":
				e.preventDefault(), te(A.find((e) => e > n) ?? A[0]);
				break;
			case "ArrowLeft":
				e.preventDefault(), te([...A].reverse().find((e) => e < n) ?? A[A.length - 1]);
				break;
			case "Home":
				e.preventDefault(), te(A[0]);
				break;
			case "End":
				e.preventDefault(), te(A[A.length - 1]);
				break;
		}
	}, M = () => {
		let e = k.findIndex(({ action: e }) => y.current[e] === document.activeElement);
		e >= 0 && e !== i && a(e);
	};
	return k.length === 0 ? null : /* @__PURE__ */ t.createElement(K, {
		display: "inline-flex",
		direction: "row",
		role: "toolbar",
		"aria-label": r("timeline|mab|label"),
		"aria-live": "off",
		onKeyDown: ne,
		onFocusCapture: M,
		className: (0, V.default)(n, Gk.toolbar)
	}, k.map((e) => x[e.action]));
}
var Jk = {
	disambiguatedProfile: "_disambiguatedProfile_oa3at_8",
	disambiguatedProfile_displayName: "_disambiguatedProfile_displayName_oa3at_14",
	disambiguatedProfile_mxid: "_disambiguatedProfile_mxid_oa3at_22"
};
//#endregion
//#region src/room/timeline/event-tile/EventTileView/DisambiguatedProfile/DisambiguatedProfileView.tsx
function Yk({ vm: e, className: n }) {
	let { displayName: r, colorClass: i, displayIdentifier: a, title: o, emphasizeDisplayName: s } = J(e), c = (0, V.default)(i, {
		[Jk.disambiguatedProfile_displayName]: s,
		mx_DisambiguatedProfile_displayName: s
	}), l = e.onClick ? (t) => {
		(t.key === "Enter" || t.key === " ") && (t.preventDefault(), e.onClick?.(t));
	} : void 0;
	return /* @__PURE__ */ t.createElement("div", {
		className: (0, V.default)(n, Jk.disambiguatedProfile),
		title: o,
		onClick: e.onClick,
		onKeyDown: l,
		role: e.onClick ? "button" : void 0,
		tabIndex: e.onClick ? 0 : void 0
	}, /* @__PURE__ */ t.createElement("span", {
		className: c,
		dir: "auto"
	}, r), a && /* @__PURE__ */ t.createElement("span", { className: (0, V.default)("mx_DisambiguatedProfile_mxid", Jk.disambiguatedProfile_mxid) }, a));
}
var Xk = { content: "_content_m88ar_8" }, Zk = {
	container: "_container_sq5fu_8",
	title: "_title_sq5fu_34",
	subtitle: "_subtitle_sq5fu_35"
};
//#endregion
//#region src/room/timeline/event-tile/EventTileView/EventTileBubble/EventTileBubble.tsx
function Qk({ icon: e, title: n, subtitle: r, className: i, children: a, ref: o }) {
	return /* @__PURE__ */ t.createElement("div", {
		className: (0, V.default)(Zk.container, i),
		ref: o
	}, e, /* @__PURE__ */ t.createElement("div", { className: Zk.title }, n), r && /* @__PURE__ */ t.createElement("div", { className: Zk.subtitle }, r), a);
}
//#endregion
//#region src/room/timeline/event-tile/EventTileView/EncryptionEventView/EncryptionEventView.tsx
var $k = /* @__PURE__ */ function(e) {
	return e.CHANGED = "CHANGED", e.DISABLE_ATTEMPT = "DISABLE_ATTEMPT", e.ENABLED = "ENABLED", e.ENABLED_DM = "ENABLED_DM", e.ENABLED_LOCAL = "ENABLED_LOCAL", e.UNSUPPORTED = "UNSUPPORTED", e;
}({});
function eA({ vm: e, ref: n, className: r }) {
	let { translate: i } = U(), { state: a, encryptedStateEvents: o, userName: s, timestamp: c } = J(e), l = /* @__PURE__ */ t.createElement(_D, { "data-state": "supported" }), u = i(o ? "common|state_encryption_enabled" : "common|encryption_enabled"), d = "";
	switch (a) {
		case $k.CHANGED:
			d = i("timeline|m.room.encryption|parameters_changed");
			break;
		case $k.DISABLE_ATTEMPT:
			u = i("common|encryption_enabled"), d = i("timeline|m.room.encryption|disable_attempt");
			break;
		case $k.ENABLED:
			d = i(o ? "timeline|m.room.encryption|state_enabled" : "timeline|m.room.encryption|enabled");
			break;
		case $k.ENABLED_DM:
			d = i("timeline|m.room.encryption|enabled_dm", { displayName: s });
			break;
		case $k.ENABLED_LOCAL:
			d = i("timeline|m.room.encryption|enabled_local");
			break;
		case $k.UNSUPPORTED:
		default:
			l = /* @__PURE__ */ t.createElement(YE, { "data-state": "unsupported" }), u = i("timeline|m.room.encryption|disabled"), d = i("timeline|m.room.encryption|unsupported");
			break;
	}
	return /* @__PURE__ */ t.createElement(Qk, {
		icon: l,
		className: (0, V.default)(r, Xk.content),
		title: u,
		subtitle: d,
		ref: n
	}, c);
}
var tA = { pinnedMessageBadge: "_pinnedMessageBadge_10mi2_8" };
//#endregion
//#region src/room/timeline/event-tile/EventTileView/PinnedMessageBadge/PinnedMessageBadge.tsx
function nA({ className: e, children: n, ...r }) {
	return /* @__PURE__ */ t.createElement("div", {
		...r,
		className: (0, V.default)(tA.pinnedMessageBadge, e)
	}, /* @__PURE__ */ t.createElement(jD, {
		width: "16px",
		height: "16px"
	}), n ?? q("room|pinned_message_badge"));
}
//#endregion
//#region src/room/timeline/event-tile/EventTileView/TextualEventView/TextualEventView.tsx
function rA({ vm: e }) {
	let n = J(e);
	return /* @__PURE__ */ t.createElement("div", { className: "mx_TextualEvent" }, n.content);
}
var iA = {
	audioPlayer: "_audioPlayer_1eyxr_8",
	mediaInfo: "_mediaInfo_1eyxr_13",
	mediaName: "_mediaName_1eyxr_18",
	byline: "_byline_1eyxr_27",
	clock: "_clock_1eyxr_31",
	error: "_error_1eyxr_35"
};
//#endregion
//#region src/core/utils/FormattingUtils.ts
function aA(e, t = 2) {
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
	return parseFloat((e / n ** +a).toFixed(r)) + " " + i[a];
}
//#endregion
//#region src/room/timeline/event-tile/body/AudioPlayerView/AudioPlayerView.tsx
function oA({ vm: e }) {
	let { translate: n } = U(), { playbackState: r, mediaName: i = n("timeline|m.audio|unnamed_audio"), sizeBytes: a, durationSeconds: o, playedSeconds: s, percentComplete: c, error: l } = J(e), u = a ? `(${aA(a)})` : null, d = r === "decoding";
	return /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement(SO, {
		className: iA.audioPlayer,
		tabIndex: 0,
		onKeyDown: e.onKeyDown,
		"aria-label": n("timeline|m.audio|audio_player"),
		role: "region"
	}, /* @__PURE__ */ t.createElement(K, {
		gap: "var(--cpd-space-2x)",
		align: "center"
	}, /* @__PURE__ */ t.createElement(wp, {
		tabIndex: -1,
		disabled: d,
		playing: r === "playing",
		togglePlay: e.togglePlay
	}), /* @__PURE__ */ t.createElement(K, {
		direction: "column",
		className: iA.mediaInfo
	}, /* @__PURE__ */ t.createElement("span", {
		className: iA.mediaName,
		"data-testid": "audio-player-name"
	}, i), /* @__PURE__ */ t.createElement(K, {
		className: iA.byline,
		gap: "var(--cpd-space-1-5x)"
	}, /* @__PURE__ */ t.createElement(pp, { seconds: o }), u))), /* @__PURE__ */ t.createElement(K, {
		align: "center",
		gap: "var(--cpd-space-1x)",
		"data-testid": "audio-player-seek"
	}, /* @__PURE__ */ t.createElement(Ib, {
		tabIndex: -1,
		disabled: d,
		value: c,
		onChange: e.onSeekbarChange
	}), /* @__PURE__ */ t.createElement(pp, {
		className: iA.clock,
		seconds: s,
		role: "timer"
	}))), l && /* @__PURE__ */ t.createElement("span", { className: iA.error }, n("timeline|m.audio|error_downloading_audio")));
}
var sA = {
	content: "_content_1uqu1_8",
	error: "_error_1uqu1_14",
	icon: "_icon_1uqu1_23"
}, cA = /* @__PURE__ */ function(e) {
	return e.MEGOLM_KEY_WITHHELD_FOR_UNVERIFIED_DEVICE = "MEGOLM_KEY_WITHHELD_FOR_UNVERIFIED_DEVICE", e.HISTORICAL_MESSAGE_NO_KEY_BACKUP = "HISTORICAL_MESSAGE_NO_KEY_BACKUP", e.HISTORICAL_MESSAGE_BACKUP_UNCONFIGURED = "HISTORICAL_MESSAGE_BACKUP_UNCONFIGURED", e.HISTORICAL_MESSAGE_USER_NOT_JOINED = "HISTORICAL_MESSAGE_USER_NOT_JOINED", e.SENDER_IDENTITY_PREVIOUSLY_VERIFIED = "SENDER_IDENTITY_PREVIOUSLY_VERIFIED", e.UNSIGNED_SENDER_DEVICE = "UNSIGNED_SENDER_DEVICE", e.UNABLE_TO_DECRYPT = "UNABLE_TO_DECRYPT", e;
}({});
function lA(e, n, r) {
	let i = e.translate;
	switch (n) {
		case cA.MEGOLM_KEY_WITHHELD_FOR_UNVERIFIED_DEVICE: return i("timeline|decryption_failure|blocked");
		case cA.HISTORICAL_MESSAGE_NO_KEY_BACKUP: return i("timeline|decryption_failure|historical_event_no_key_backup");
		case cA.HISTORICAL_MESSAGE_BACKUP_UNCONFIGURED:
			if (r === !1) return i("timeline|decryption_failure|historical_event_unverified_device");
			break;
		case cA.HISTORICAL_MESSAGE_USER_NOT_JOINED: return i("timeline|decryption_failure|historical_event_user_not_joined");
		case cA.SENDER_IDENTITY_PREVIOUSLY_VERIFIED: return /* @__PURE__ */ t.createElement("span", null, /* @__PURE__ */ t.createElement(xE, {
			className: sA.icon,
			width: "16px",
			height: "16px"
		}), i("timeline|decryption_failure|sender_identity_previously_verified"));
		case cA.UNSIGNED_SENDER_DEVICE: return /* @__PURE__ */ t.createElement("span", null, /* @__PURE__ */ t.createElement(xE, {
			className: sA.icon,
			width: "16px",
			height: "16px"
		}), i("timeline|decryption_failure|sender_unsigned_device"));
	}
	return i("timeline|decryption_failure|unable_to_decrypt");
}
function uA(e) {
	switch (e) {
		case cA.SENDER_IDENTITY_PREVIOUSLY_VERIFIED:
		case cA.UNSIGNED_SENDER_DEVICE: return sA.error;
	}
	return null;
}
function dA({ vm: e, ref: n, className: r }) {
	let i = U(), { decryptionFailureReason: a, isLocalDeviceVerified: o } = J(e), s = (0, V.default)(sA.content, uA(a), r);
	return /* @__PURE__ */ t.createElement("div", {
		className: s,
		ref: n
	}, lA(i, a, o));
}
var fA = {
	reactionsRow: "_reactionsRow_1lcz2_8",
	showAllButton: "_showAllButton_1lcz2_16",
	addReactionButton: "_addReactionButton_1lcz2_29",
	addReactionButtonVisible: "_addReactionButtonVisible_1lcz2_48",
	addReactionButtonActive: "_addReactionButtonActive_1lcz2_52",
	addReactionButtonDisabled: "_addReactionButtonDisabled_1lcz2_56"
};
//#endregion
//#region src/room/timeline/event-tile/reactions/ReactionsRow/ReactionsRowView.tsx
function pA({ vm: e, className: n, children: r }) {
	let { ariaLabel: i, isVisible: a, showAllButtonVisible: o, showAllButtonLabel: s, showAddReactionButton: c, addReactionButtonLabel: l, addReactionButtonVisible: u, addReactionButtonActive: d, addReactionButtonDisabled: f } = J(e);
	if (!a) return /* @__PURE__ */ t.createElement(t.Fragment, null);
	let p = (0, V.default)(fA.addReactionButton, {
		[fA.addReactionButtonVisible]: u,
		[fA.addReactionButtonActive]: d,
		[fA.addReactionButtonDisabled]: f
	}), m = e.onAddReactionContextMenu ? (t) => {
		t.preventDefault(), e.onAddReactionContextMenu?.(t);
	} : void 0, h = /* @__PURE__ */ t.createElement("button", {
		type: "button",
		className: p,
		"aria-label": l,
		disabled: f,
		onClick: e.onAddReactionClick,
		onContextMenu: m
	}, /* @__PURE__ */ t.createElement(zD, null));
	return /* @__PURE__ */ t.createElement("div", {
		className: (0, V.default)(n, fA.reactionsRow),
		role: "toolbar",
		"aria-label": i
	}, r, o && /* @__PURE__ */ t.createElement("button", {
		type: "button",
		className: fA.showAllButton,
		onClick: e.onShowAllClick
	}, s), c && /* @__PURE__ */ t.createElement(se, {
		description: l,
		placement: "right"
	}, h));
}
//#endregion
//#region src/room/timeline/event-tile/reactions/ReactionsRowButtonTooltip/ReactionsRowButtonTooltipView.tsx
function mA({ vm: e, children: n }) {
	let { formattedSenders: r, caption: i, tooltipOpen: a } = J(e);
	return r ? /* @__PURE__ */ t.createElement(se, {
		description: r,
		caption: i,
		placement: "right",
		open: a
	}, n) : /* @__PURE__ */ t.createElement(t.Fragment, null, n);
}
var hA = {
	reactionsRowButton: "_reactionsRowButton_5v4c1_8",
	reactionsRowButtonSelected: "_reactionsRowButtonSelected_5v4c1_21",
	reactionsRowButtonDisabled: "_reactionsRowButtonDisabled_5v4c1_26",
	reactionsRowButtonContent: "_reactionsRowButtonContent_5v4c1_30",
	reactionsRowButtonCount: "_reactionsRowButtonCount_5v4c1_38"
};
//#endregion
//#region src/room/timeline/event-tile/reactions/ReactionsRowButton/ReactionsRowButtonView.tsx
function gA({ vm: e }) {
	let n = J(e), { content: r, count: i, className: a, isSelected: o, isDisabled: s, imageSrc: c, imageAlt: l, tooltipVm: u } = n, d = n["aria-label"] ?? n.ariaLabel, f = s ? !0 : void 0, p = (0, V.default)(a, hA.reactionsRowButton, {
		[hA.reactionsRowButtonSelected]: o,
		[hA.reactionsRowButtonDisabled]: s
	}), m = c ? /* @__PURE__ */ t.createElement("img", {
		className: hA.reactionsRowButtonContent,
		alt: l ?? "",
		src: c,
		width: "16",
		height: "16"
	}) : /* @__PURE__ */ t.createElement("span", {
		className: hA.reactionsRowButtonContent,
		"aria-hidden": "true"
	}, r ?? "");
	return /* @__PURE__ */ t.createElement(mA, { vm: u }, /* @__PURE__ */ t.createElement("button", {
		type: "button",
		className: p,
		tabIndex: 0,
		"aria-label": d,
		"aria-disabled": f,
		onClick: s ? void 0 : e.onClick
	}, m, /* @__PURE__ */ t.createElement("span", {
		className: hA.reactionsRowButtonCount,
		"aria-hidden": "true"
	}, i)));
}
var _A = { content: "_content_kc5mt_8" };
//#endregion
//#region src/room/timeline/event-tile/timestamp/MessageTimestampView/MessageTimestampView.tsx
function vA({ vm: e, className: n }) {
	let { translate: r } = U(), { ts: i, tsSentAt: a, tsReceivedAt: o, inhibitTooltip: s, href: c } = J(e), l = (t) => {
		e.onClick && (t.key === "Enter" || t.key === " ") && (t.preventDefault(), e.onClick?.(t));
	}, u = a, d;
	o && o?.length > 0 && (u = r("timeline|message_timestamp_sent_at", { dateTime: u }), d = r("timeline|message_timestamp_received_at", { dateTime: o }));
	let f;
	return f = c ? /* @__PURE__ */ t.createElement("a", {
		href: c,
		onClick: e.onClick,
		onKeyDown: l,
		onContextMenu: e.onContextMenu,
		className: (0, V.default)(n, _A.content),
		"aria-live": "off"
	}, i) : /* @__PURE__ */ t.createElement("span", {
		onClick: e.onClick,
		onKeyDown: l,
		onContextMenu: e.onContextMenu,
		className: (0, V.default)(n, _A.content),
		role: e.onClick ? "link" : void 0,
		"aria-live": "off",
		tabIndex: e.onClick || !s ? 0 : void 0
	}, i), s ? f : /* @__PURE__ */ t.createElement(se, {
		description: u,
		caption: d
	}, f);
}
var yA = {
	richItem: "_richItem_1c0uo_8",
	avatar: "_avatar_1c0uo_36",
	title: "_title_1c0uo_41",
	description: "_description_1c0uo_47",
	timestamp: "_timestamp_1c0uo_51",
	checkmark: "_checkmark_1c0uo_69"
}, bA = s(function({ avatar: e, title: n, description: r, timestamp: i, selected: a, ...o }) {
	let s = U();
	return /* @__PURE__ */ t.createElement("li", {
		className: yA.richItem,
		role: "option",
		tabIndex: -1,
		"aria-selected": a,
		"aria-label": n,
		...o
	}, a ? /* @__PURE__ */ t.createElement(xA, null) : /* @__PURE__ */ t.createElement(K, { className: yA.avatar }, e), /* @__PURE__ */ t.createElement("span", { className: yA.title }, n), /* @__PURE__ */ t.createElement("span", { className: yA.description }, r), i && /* @__PURE__ */ t.createElement("span", {
		role: "timer",
		className: yA.timestamp
	}, s.humanizeTime(i)));
});
function xA() {
	return /* @__PURE__ */ t.createElement(K, {
		align: "center",
		justify: "center",
		"aria-hidden": "true",
		className: yA.checkmark
	}, /* @__PURE__ */ t.createElement(TE, {
		width: "24px",
		height: "24px",
		color: "var(--cpd-color-icon-on-solid-primary)"
	}));
}
var SA = {
	richList: "_richList_1mcas_8",
	title: "_title_1mcas_12",
	content: "_content_1mcas_18",
	empty: "_empty_1mcas_26"
};
//#endregion
//#region src/core/hooks/useListKeyboardNavigation.ts
function CA() {
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
				case "End":
					r = !0, (e.current?.lastElementChild)?.focus();
					break;
			}
			r && t.preventDefault();
		}, []),
		onFocus: t
	};
}
//#endregion
//#region src/core/rich-list/RichList/RichList.tsx
function wA({ children: e, title: n, className: r, titleAttributes: i, isEmpty: a = !1, ...o }) {
	let s = d(), { listRef: c, onKeyDown: l, onFocus: u } = CA();
	return /* @__PURE__ */ t.createElement(K, {
		className: (0, V.default)(SA.richList, r),
		direction: "column",
		...o
	}, /* @__PURE__ */ t.createElement("span", {
		id: s,
		className: SA.title,
		...i
	}, n), a ? /* @__PURE__ */ t.createElement("span", { className: SA.empty }, e) : /* @__PURE__ */ t.createElement("ul", {
		ref: c,
		role: "listbox",
		className: SA.content,
		"aria-labelledby": s,
		tabIndex: 0,
		onKeyDown: l,
		onFocus: u
	}, e));
}
var TA = { title: "_title_1qyi3_8" };
//#endregion
//#region src/room-list/RoomListHeaderView/menu/OptionMenuView.tsx
function EA({ vm: e }) {
	let { translate: n } = U(), [r, i] = h(!1), { activeSortOption: a, isMessagePreviewEnabled: o } = J(e);
	return /* @__PURE__ */ t.createElement(k, {
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
		}, /* @__PURE__ */ t.createElement(kD, null))
	}, /* @__PURE__ */ t.createElement(ee, {
		title: n("room_list|sort"),
		className: TA.title
	}), /* @__PURE__ */ t.createElement(j, {
		label: n("room_list|sort_type|activity"),
		checked: a === "recent",
		onSelect: () => e.sort("recent")
	}), /* @__PURE__ */ t.createElement(j, {
		label: n("room_list|sort_type|unread_first"),
		checked: a === "unread-first",
		onSelect: () => e.sort("unread-first")
	}), /* @__PURE__ */ t.createElement(j, {
		label: n("room_list|sort_type|atoz"),
		checked: a === "alphabetical",
		onSelect: () => e.sort("alphabetical")
	}), /* @__PURE__ */ t.createElement(ee, { title: n("room_list|appearance") }), /* @__PURE__ */ t.createElement(x, {
		label: n("room_list|show_message_previews"),
		onSelect: e.toggleMessagePreview,
		checked: o
	}));
}
var DA = { button: "_button_1veqf_8" };
//#endregion
//#region src/room-list/RoomListHeaderView/menu/SpaceMenuView.tsx
function OA({ vm: e }) {
	let { translate: n } = U(), { canInviteInSpace: r, canAccessSpaceSettings: i, title: a } = J(e), [o, s] = h(!1);
	return /* @__PURE__ */ t.createElement(k, {
		open: o,
		onOpenChange: s,
		title: a,
		align: "start",
		trigger: /* @__PURE__ */ t.createElement(E, {
			className: DA.button,
			"aria-label": n("room_list|open_space_menu"),
			size: "24px",
			style: { padding: "2px" }
		}, /* @__PURE__ */ t.createElement(DE, null))
	}, /* @__PURE__ */ t.createElement(A, {
		Icon: sD,
		label: n("room_list|space_menu|home"),
		onSelect: e.openSpaceHome,
		hideChevron: !0
	}), r && /* @__PURE__ */ t.createElement(A, {
		Icon: rO,
		label: n("action|invite"),
		onSelect: e.inviteInSpace,
		hideChevron: !0
	}), /* @__PURE__ */ t.createElement(A, {
		Icon: LD,
		label: n("common|preferences"),
		onSelect: e.openSpacePreferences,
		hideChevron: !0
	}), i && /* @__PURE__ */ t.createElement(A, {
		Icon: ZD,
		label: n("room_list|space_menu|space_settings"),
		onSelect: e.openSpaceSettings,
		hideChevron: !0
	}));
}
//#endregion
//#region src/room-list/RoomListHeaderView/menu/ComposeMenuView.tsx
function kA({ vm: e }) {
	let { translate: n } = U(), [r, i] = h(!1), { canCreateRoom: a, canCreateVideoRoom: o, canCreateSection: s, useComposeIcon: c } = J(e);
	return /* @__PURE__ */ t.createElement(k, {
		open: r,
		onOpenChange: i,
		showTitle: !1,
		title: n("action|open_menu"),
		align: "start",
		trigger: /* @__PURE__ */ t.createElement(E, {
			size: "28px",
			style: { padding: "4px" },
			tooltip: n("action|new_conversation")
		}, c ? /* @__PURE__ */ t.createElement(FE, {
			color: "var(--cpd-color-icon-secondary)",
			"aria-hidden": !0
		}) : /* @__PURE__ */ t.createElement(FD, {
			color: "var(--cpd-color-icon-secondary)",
			"aria-hidden": !0
		}))
	}, /* @__PURE__ */ t.createElement(A, {
		Icon: CE,
		label: n("action|start_chat"),
		onSelect: e.createChatRoom,
		hideChevron: !0
	}), a && /* @__PURE__ */ t.createElement(A, {
		Icon: GD,
		label: n("action|new_room"),
		onSelect: e.createRoom,
		hideChevron: !0
	}), o && /* @__PURE__ */ t.createElement(A, {
		Icon: lO,
		label: n("action|new_video_room"),
		onSelect: e.createVideoRoom,
		hideChevron: !0
	}), s && /* @__PURE__ */ t.createElement(A, {
		Icon: YD,
		label: n("action|new_section"),
		onSelect: e.createSection,
		hideChevron: !0
	}));
}
var AA = {
	header: "_header_1b9rm_8",
	container: "_container_1b9rm_13",
	title: "_title_1b9rm_19"
};
//#endregion
//#region src/room-list/RoomListHeaderView/RoomListHeaderView.tsx
function jA({ vm: e }) {
	let { translate: n } = U(), { title: r, displaySpaceMenu: i, displayComposeMenu: a, useComposeIcon: o } = J(e);
	return /* @__PURE__ */ t.createElement(K, {
		as: "header",
		className: AA.header,
		"aria-label": n("room|context_menu|title"),
		align: "end",
		"data-testid": "room-list-header"
	}, /* @__PURE__ */ t.createElement(K, {
		className: AA.container,
		justify: "space-between",
		align: "center",
		gap: "var(--cpd-space-3x)"
	}, /* @__PURE__ */ t.createElement(K, {
		className: AA.title,
		align: "center",
		gap: "var(--cpd-space-1x)"
	}, /* @__PURE__ */ t.createElement(w, {
		size: "sm",
		title: r
	}, r), i && /* @__PURE__ */ t.createElement(OA, { vm: e })), /* @__PURE__ */ t.createElement(K, {
		align: "center",
		gap: "var(--cpd-space-2x)"
	}, /* @__PURE__ */ t.createElement(EA, { vm: e }), a ? /* @__PURE__ */ t.createElement(kA, { vm: e }) : /* @__PURE__ */ t.createElement(E, {
		size: "28px",
		style: { padding: "4px" },
		onClick: (t) => e.createChatRoom(t.nativeEvent),
		tooltip: n("action|new_conversation")
	}, o ? /* @__PURE__ */ t.createElement(FE, {
		color: "var(--cpd-color-icon-secondary)",
		"aria-hidden": !0
	}) : /* @__PURE__ */ t.createElement(FD, {
		color: "var(--cpd-color-icon-secondary)",
		"aria-hidden": !0
	})))));
}
var MA = {
	view: "_view_z7ks9_8",
	search: "_search_z7ks9_16",
	search_container: "_search_container_z7ks9_29",
	search_text: "_search_text_z7ks9_41"
};
//#endregion
//#region src/room-list/RoomListSearchView/RoomListSearchView.tsx
function NA({ vm: e }) {
	let { translate: n } = U(), { displayExploreButton: r, displayDialButton: i, searchShortcut: a } = J(e);
	return /* @__PURE__ */ t.createElement(K, {
		"data-testid": "room-list-search",
		className: MA.view,
		role: "search",
		gap: "var(--cpd-space-2x)",
		align: "center"
	}, /* @__PURE__ */ t.createElement(y, {
		id: "room-list-search-button",
		className: MA.search,
		kind: "secondary",
		size: "sm",
		Icon: qD,
		onClick: e.onSearchClick
	}, /* @__PURE__ */ t.createElement(K, {
		className: MA.search_container,
		as: "span",
		justify: "space-between"
	}, /* @__PURE__ */ t.createElement("span", { className: MA.search_text }, n("action|search")), /* @__PURE__ */ t.createElement("kbd", null, a))), i && /* @__PURE__ */ t.createElement(y, {
		kind: "secondary",
		size: "sm",
		Icon: zE,
		iconOnly: !0,
		"aria-label": n("left_panel|open_dial_pad"),
		onClick: e.onDialPadClick
	}), r && /* @__PURE__ */ t.createElement(y, {
		kind: "secondary",
		size: "sm",
		Icon: $E,
		iconOnly: !0,
		"aria-label": n("action|explore_rooms"),
		onClick: e.onExploreClick
	}));
}
//#endregion
//#region src/room-list/RoomListPrimaryFilters/useCollapseFilters.ts
function PA(e, t) {
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
function FA(e, t, n) {
	let [r, i] = h(e);
	return u(() => {
		if (!((t ? e.indexOf(t) : -1) >= n) || n === -1) {
			i(e);
			return;
		}
		i(e.slice().sort((e, n) => e === t && n !== t ? -1 : e !== t && n === t ? 1 : 0));
	}, [
		e,
		t,
		n
	]), r;
}
var IA = {
	roomListPrimaryFilters: "_roomListPrimaryFilters_kikqh_8",
	list: "_list_kikqh_17",
	iconButton: "_iconButton_kikqh_27"
}, LA = (e) => {
	switch (e) {
		case "unread": return q("room_list|filters|unread");
		case "people": return q("room_list|filters|people");
		case "rooms": return q("room_list|filters|rooms");
		case "favourite": return q("room_list|filters|favourite");
		case "mentions": return q("room_list|filters|mentions");
		case "invites": return q("room_list|filters|invites");
		case "low_priority": return q("room_list|filters|low_priority");
	}
}, RA = s(function({ filterIds: e, activeFilterId: n, onToggleFilter: r }) {
	let i = d(), [a, o] = h(!1), { ref: s, isWrapping: c, wrappingIndex: l } = PA(a, "wrapping"), u = FA(e, n, l);
	return /* @__PURE__ */ t.createElement(K, {
		className: IA.roomListPrimaryFilters,
		"data-testid": "primary-filters",
		gap: "var(--cpd-space-3x)",
		direction: "row-reverse",
		justify: "space-between"
	}, c && /* @__PURE__ */ t.createElement(E, {
		kind: "secondary",
		"aria-expanded": a,
		"aria-controls": i,
		className: IA.iconButton,
		"aria-label": q(a ? "room_list|collapse_filters" : "room_list|expand_filters"),
		size: "28px",
		onClick: () => o((e) => !e)
	}, /* @__PURE__ */ t.createElement(DE, null)), /* @__PURE__ */ t.createElement(K, {
		id: i,
		as: "div",
		role: "listbox",
		"aria-label": q("room_list|primary_filters"),
		align: "center",
		gap: "var(--cpd-space-2x)",
		wrap: "wrap",
		className: IA.list,
		ref: s
	}, u.map((e, i) => /* @__PURE__ */ t.createElement(b, {
		key: `${e}-${i}`,
		role: "option",
		selected: e === n,
		onClick: () => r(e)
	}, LA(e)))));
}), zA = { skeleton: "_skeleton_1h0mx_8" }, BA = () => /* @__PURE__ */ t.createElement("div", { className: zA.skeleton }), VA = {
	genericPlaceholder: "_genericPlaceholder_1sxid_8",
	title: "_title_1sxid_16",
	description: "_description_1sxid_21",
	defaultPlaceholder: "_defaultPlaceholder_1sxid_27"
}, HA = ({ vm: e }) => {
	let n = J(e);
	if (!n.activeFilterId) return /* @__PURE__ */ t.createElement(UA, {
		title: q("room_list|empty|no_chats"),
		description: n.canCreateRoom ? q("room_list|empty|no_chats_description") : q("room_list|empty|no_chats_description_no_room_rights")
	}, /* @__PURE__ */ t.createElement(K, {
		className: VA.defaultPlaceholder,
		align: "center",
		justify: "center",
		direction: "column",
		gap: "var(--cpd-space-4x)"
	}, /* @__PURE__ */ t.createElement(y, {
		size: "sm",
		kind: "secondary",
		Icon: CE,
		onClick: e.createChatRoom
	}, q("action|start_chat")), n.canCreateRoom && /* @__PURE__ */ t.createElement(y, {
		size: "sm",
		kind: "secondary",
		Icon: GD,
		onClick: e.createRoom
	}, q("action|new_room"))));
	switch (n.activeFilterId) {
		case "favourite": return /* @__PURE__ */ t.createElement(UA, {
			title: q("room_list|empty|no_favourites"),
			description: q("room_list|empty|no_favourites_description")
		});
		case "people": return /* @__PURE__ */ t.createElement(UA, {
			title: q("room_list|empty|no_people"),
			description: q("room_list|empty|no_people_description")
		});
		case "rooms": return /* @__PURE__ */ t.createElement(UA, {
			title: q("room_list|empty|no_rooms"),
			description: q("room_list|empty|no_rooms_description")
		});
		case "unread": return /* @__PURE__ */ t.createElement(WA, {
			title: q("room_list|empty|no_unread"),
			action: q("room_list|empty|show_chats"),
			onAction: () => e.onToggleFilter(n.activeFilterId)
		});
		case "invites": return /* @__PURE__ */ t.createElement(WA, {
			title: q("room_list|empty|no_invites"),
			action: q("room_list|empty|show_activity"),
			onAction: () => e.onToggleFilter(n.activeFilterId)
		});
		case "mentions": return /* @__PURE__ */ t.createElement(WA, {
			title: q("room_list|empty|no_mentions"),
			action: q("room_list|empty|show_activity"),
			onAction: () => e.onToggleFilter(n.activeFilterId)
		});
		case "low_priority": return /* @__PURE__ */ t.createElement(WA, {
			title: q("room_list|empty|no_lowpriority"),
			action: q("room_list|empty|show_activity"),
			onAction: () => e.onToggleFilter(n.activeFilterId)
		});
		default: return /* @__PURE__ */ t.createElement(UA, {
			title: q("room_list|empty|no_chats"),
			description: q("room_list|empty|no_chats_description")
		});
	}
};
function UA({ title: e, description: n, children: r }) {
	return /* @__PURE__ */ t.createElement(K, {
		"data-testid": "empty-room-list",
		className: VA.genericPlaceholder,
		direction: "column",
		align: "stretch",
		justify: "center",
		gap: "var(--cpd-space-2x)"
	}, /* @__PURE__ */ t.createElement("span", { className: VA.title }, e), n && /* @__PURE__ */ t.createElement("span", { className: VA.description }, n), r);
}
function WA({ title: e, action: n, onAction: r }) {
	return /* @__PURE__ */ t.createElement(UA, { title: e }, r && /* @__PURE__ */ t.createElement(y, {
		kind: "tertiary",
		onClick: r
	}, n));
}
//#endregion
//#region src/core/VirtualizedList/virtualized-list.tsx
var GA = {
	ARROW_UP: "ArrowUp",
	ARROW_DOWN: "ArrowDown",
	HOME: "Home",
	END: "End",
	PAGE_UP: "PageUp",
	PAGE_DOWN: "PageDown",
	ENTER: "Enter",
	SPACE: "Space"
};
function KA(e) {
	return e.ctrlKey || e.metaKey || e.shiftKey || e.altKey;
}
function qA(e) {
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
			y(r(t[i]));
			let e = l ? l(i) : i;
			g.current?.scrollIntoView({
				index: e,
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
	]), D = c((e) => {
		let n = v ? S.get(v) : void 0, r = !1;
		if (!e || KA(e)) {
			a?.(e);
			return;
		}
		if (e.code === GA.ARROW_UP && n !== void 0) E(n - 1, !1), r = !0;
		else if (e.code === GA.ARROW_DOWN && n !== void 0) E(n + 1, !0), r = !0;
		else if (e.code === GA.HOME) T(0), r = !0;
		else if (e.code === GA.END) T(t.length - 1), r = !0;
		else if (e.code === GA.PAGE_DOWN && b && n !== void 0) {
			let e = b.endIndex - b.startIndex;
			E(Math.min(n + e, t.length - 1), !0, "start"), r = !0;
		} else if (e.code === GA.PAGE_UP && b && n !== void 0) {
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
	}, [
		T,
		E,
		v,
		S,
		b,
		t,
		a
	]), O = c((e) => {
		_.current = e;
	}, []), k = c((e, t) => {
		let n = r(e);
		w(!0), y(n), t.stopPropagation();
	}, [r]), A = c((e) => {
		if (e?.currentTarget !== _.current || typeof v != "string") return;
		w(!0);
		let t = S.get(v);
		t !== void 0 && b && (t < b.startIndex || t > b.endIndex) && T(t), e.stopPropagation(), e.preventDefault();
	}, [
		S,
		b,
		T,
		v
	]), ee = c((e) => {
		e.currentTarget.contains(e.relatedTarget) || w(!1);
	}, []), j = p(() => ({
		tabIndexKey: v,
		focused: C,
		context: e.context || {}
	}), [
		v,
		C,
		e.context
	]), te = c((e) => {
		x(d ? {
			startIndex: d(e.startIndex),
			endIndex: d(e.endIndex)
		} : e), s?.(e);
	}, [s, d]);
	return {
		...f,
		ref: g,
		scrollerRef: O,
		onKeyDown: D,
		onFocus: A,
		onBlur: ee,
		rangeChanged: te,
		onFocusForGetItemComponent: k,
		context: j
	};
}
//#endregion
//#region src/core/VirtualizedList/FlatVirtualizedList/FlatVirtualizedList.tsx
function JA(e) {
	let { getItemComponent: n, ...r } = e, { onFocusForGetItemComponent: i, ...a } = qA(r), o = c((e, t, r) => n(e, t, r, i), [n, i]);
	return /* @__PURE__ */ t.createElement(ue, {
		itemContent: o,
		data: e.items,
		...a
	});
}
//#endregion
//#region src/core/VirtualizedList/GroupedVirtualizedList/GroupedVirtualizedList.tsx
function YA(e) {
	let { getItemComponent: n, groups: r, getGroupHeaderComponent: i, isItemFocusable: a, isGroupHeaderFocusable: o, getItemKey: s, getHeaderKey: l, ...u } = e, d = p(() => r.flatMap((e) => [{ header: e.header }, ...e.items.map((e) => ({ item: e }))]), [r]), f = p(() => r.flatMap((e, t) => Array(1 + e.items.length).fill(t)), [r]), m = c((e) => "header" in e ? l(e.header) : s(e.item), [l, s]), h = c((e) => "header" in e ? o(e.header) : a(e.item), [o, a]), { onFocusForGetItemComponent: g, ..._ } = qA({
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
		return "header" in a ? i(o, a.header, r, y) : n(e - (o + 1), a.item, r, v, o);
	}, [
		d,
		f,
		i,
		n,
		v,
		y
	]);
	return /* @__PURE__ */ t.createElement(ue, {
		itemContent: b,
		data: d,
		..._
	});
}
//#endregion
//#region src/core/VirtualizedList/accessbility.ts
function XA(e, t) {
	switch (e) {
		case "listbox": return { role: "listbox" };
		case "treegrid": return {
			role: "treegrid",
			"aria-rowcount": t
		};
	}
}
function ZA(e, t, n) {
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
function QA(e, t, n) {
	return {
		role: "row",
		"aria-level": 1,
		"aria-posinset": t + 1,
		"aria-rowindex": e + 1,
		"aria-setsize": n
	};
}
var $A = {
	header: "_header_14azs_8",
	container: "_container_14azs_29",
	unread: "_unread_14azs_50",
	title: "_title_14azs_66",
	firstHeader: "_firstHeader_14azs_73",
	lastHeader: "_lastHeader_14azs_77"
}, ej = s(function({ vm: e, isFocused: n, onFocus: r, indexInList: i, sectionIndex: a, sectionCount: o, roomCountInSection: s }) {
	let { translate: c } = U(), { id: l, title: u, isExpanded: d, isUnread: f } = J(e), p = a === o - 1;
	return /* @__PURE__ */ t.createElement("div", {
		"aria-expanded": d,
		...QA(i, a, s)
	}, /* @__PURE__ */ t.createElement("button", {
		type: "button",
		role: "gridcell",
		className: (0, V.default)($A.header, {
			[$A.firstHeader]: a === 0,
			[$A.lastHeader]: !d && p,
			[$A.unread]: f
		}),
		onClick: e.onClick,
		"aria-expanded": d,
		onFocus: (e) => r(l, e),
		tabIndex: n ? 0 : -1,
		"aria-label": c(f ? "room_list|section_header|toggle_unread" : "room_list|section_header|toggle", { section: u })
	}, /* @__PURE__ */ t.createElement(K, {
		className: $A.container,
		align: "center",
		gap: "var(--cpd-space-0-5x)"
	}, /* @__PURE__ */ t.createElement(jE, {
		width: "24px",
		height: "24px",
		fill: "var(--cpd-color-icon-secondary)"
	}), /* @__PURE__ */ t.createElement("span", { className: $A.title }, u))));
}), tj = ({ hasAnyNotificationOrActivity: e, muted: n, callType: r, isUnsentMessage: i, invited: a, isMention: o, isNotification: s, isActivityNotification: c, count: l }) => !e && !n && !r ? null : /* @__PURE__ */ t.createElement(K, {
	align: "center",
	justify: "center",
	gap: "var(--cpd-space-1x)",
	"data-testid": "notification-decoration"
}, i && /* @__PURE__ */ t.createElement(YE, {
	width: "20px",
	height: "20px",
	fill: "var(--cpd-color-icon-critical-primary)"
}), r === "video" && /* @__PURE__ */ t.createElement(sO, {
	width: "20px",
	height: "20px",
	fill: "var(--cpd-color-icon-accent-primary)"
}), r === "voice" && /* @__PURE__ */ t.createElement(hO, {
	width: "20px",
	height: "20px",
	fill: "var(--cpd-color-icon-accent-primary)"
}), a && /* @__PURE__ */ t.createElement(qE, {
	width: "20px",
	height: "20px",
	fill: "var(--cpd-color-icon-accent-primary)"
}), o && /* @__PURE__ */ t.createElement(CD, {
	width: "20px",
	height: "20px",
	fill: "var(--cpd-color-icon-accent-primary)"
}), (o || s) && /* @__PURE__ */ t.createElement(le, { count: l || null }), c && /* @__PURE__ */ t.createElement(ce, null), n && /* @__PURE__ */ t.createElement(TD, {
	width: "20px",
	height: "20px",
	fill: "var(--cpd-color-icon-tertiary)"
}));
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemAccessibilityWrapper/RoomListItemView/RoomListItemMoreOptionsMenu.tsx
function nj({ vm: e }) {
	let [n, r] = h(!1);
	return /* @__PURE__ */ t.createElement(k, {
		open: n,
		onOpenChange: r,
		title: q("room_list|room|more_options"),
		showTitle: !1,
		align: "start",
		trigger: /* @__PURE__ */ t.createElement(E, {
			tooltip: q("room_list|room|more_options"),
			"aria-label": q("room_list|room|more_options"),
			size: "24px",
			style: { padding: "2px" }
		}, /* @__PURE__ */ t.createElement(kD, null))
	}, /* @__PURE__ */ t.createElement(rj, { vm: e }));
}
function rj({ vm: e }) {
	let n = J(e);
	return /* @__PURE__ */ t.createElement("div", { onKeyDown: (e) => e.stopPropagation() }, n.canMarkAsRead && /* @__PURE__ */ t.createElement(A, {
		Icon: yD,
		label: q("room_list|more_options|mark_read"),
		onSelect: e.onMarkAsRead,
		onClick: (e) => e.stopPropagation(),
		hideChevron: !0
	}), n.canMarkAsUnread && /* @__PURE__ */ t.createElement(A, {
		Icon: xD,
		label: q("room_list|more_options|mark_unread"),
		onSelect: e.onMarkAsUnread,
		onClick: (e) => e.stopPropagation(),
		hideChevron: !0
	}), /* @__PURE__ */ t.createElement(oe, {
		checked: n.isFavourite,
		Icon: tD,
		label: q("room_list|more_options|favourited"),
		onSelect: e.onToggleFavorite,
		onClick: (e) => e.stopPropagation()
	}), /* @__PURE__ */ t.createElement(oe, {
		checked: n.isLowPriority,
		Icon: hE,
		label: q("room_list|more_options|low_priority"),
		onSelect: e.onToggleLowPriority,
		onClick: (e) => e.stopPropagation()
	}), /* @__PURE__ */ t.createElement(ne, null), n.canInvite && /* @__PURE__ */ t.createElement(A, {
		Icon: rO,
		label: q("action|invite"),
		onSelect: e.onInvite,
		onClick: (e) => e.stopPropagation(),
		hideChevron: !0
	}), n.canCopyRoomLink && /* @__PURE__ */ t.createElement(A, {
		Icon: hD,
		label: q("room_list|more_options|copy_link"),
		onSelect: e.onCopyRoomLink,
		onClick: (e) => e.stopPropagation(),
		hideChevron: !0
	}), n.canMoveToSection && /* @__PURE__ */ t.createElement(M, { trigger: /* @__PURE__ */ t.createElement(A, {
		Icon: _E,
		label: q("room_list|more_options|move_to_section"),
		onSelect: null
	}) }, /* @__PURE__ */ t.createElement(A, {
		label: q("action|new_section"),
		onSelect: e.onCreateSection,
		hideChevron: !0
	})), /* @__PURE__ */ t.createElement(ne, null), /* @__PURE__ */ t.createElement(A, {
		kind: "critical",
		Icon: pD,
		label: q("room_list|more_options|leave_room"),
		onSelect: e.onLeaveRoom,
		onClick: (e) => e.stopPropagation(),
		hideChevron: !0
	}));
}
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemAccessibilityWrapper/RoomListItemView/RoomNotifs.ts
var ij = /* @__PURE__ */ function(e) {
	return e.AllMessages = "all_messages", e.AllMessagesLoud = "all_messages_loud", e.MentionsOnly = "mentions_only", e.Mute = "mute", e;
}({});
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemAccessibilityWrapper/RoomListItemView/RoomListItemNotificationMenu.tsx
function aj({ vm: e }) {
	let n = J(e), [r, i] = h(!1), a = n.roomNotifState === ij.Mute, o = /* @__PURE__ */ t.createElement(TE, {
		width: "24px",
		height: "24px",
		color: "var(--cpd-color-icon-primary)"
	});
	return /* @__PURE__ */ t.createElement(k, {
		open: r,
		onOpenChange: i,
		title: q("room_list|notification_options"),
		showTitle: !1,
		align: "start",
		trigger: /* @__PURE__ */ t.createElement(E, {
			size: "24px",
			style: { padding: "2px" },
			tooltip: q("room_list|notification_options"),
			"aria-label": q("room_list|notification_options")
		}, a ? /* @__PURE__ */ t.createElement(TD, null) : /* @__PURE__ */ t.createElement(DD, null))
	}, /* @__PURE__ */ t.createElement("div", { onKeyDown: (e) => e.stopPropagation() }, /* @__PURE__ */ t.createElement(A, {
		"aria-selected": n.roomNotifState === ij.AllMessages,
		hideChevron: !0,
		label: q("notifications|default_settings"),
		onSelect: () => e.onSetRoomNotifState(ij.AllMessages),
		onClick: (e) => e.stopPropagation()
	}, n.roomNotifState === ij.AllMessages && o), /* @__PURE__ */ t.createElement(A, {
		"aria-selected": n.roomNotifState === ij.AllMessagesLoud,
		hideChevron: !0,
		label: q("notifications|all_messages"),
		onSelect: () => e.onSetRoomNotifState(ij.AllMessagesLoud),
		onClick: (e) => e.stopPropagation()
	}, n.roomNotifState === ij.AllMessagesLoud && o), /* @__PURE__ */ t.createElement(A, {
		"aria-selected": n.roomNotifState === ij.MentionsOnly,
		hideChevron: !0,
		label: q("notifications|mentions_keywords"),
		onSelect: () => e.onSetRoomNotifState(ij.MentionsOnly),
		onClick: (e) => e.stopPropagation()
	}, n.roomNotifState === ij.MentionsOnly && o), /* @__PURE__ */ t.createElement(A, {
		"aria-selected": n.roomNotifState === ij.Mute,
		hideChevron: !0,
		label: q("notifications|mute_room"),
		onSelect: () => e.onSetRoomNotifState(ij.Mute),
		onClick: (e) => e.stopPropagation()
	}, n.roomNotifState === ij.Mute && o)));
}
var oj = {
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
}, sj = ({ showMoreOptionsMenu: e, showNotificationMenu: n, vm: r }) => /* @__PURE__ */ t.createElement(K, {
	className: oj.hoverMenu,
	align: "center",
	gap: "var(--cpd-space-1x)"
}, e && /* @__PURE__ */ t.createElement(nj, { vm: r }), n && /* @__PURE__ */ t.createElement(aj, { vm: r })), cj = ({ vm: e, children: n }) => /* @__PURE__ */ t.createElement(S, {
	title: q("room_list|room|more_options"),
	showTitle: !1,
	hasAccessibleAlternative: !0,
	trigger: n
}, /* @__PURE__ */ t.createElement(rj, { vm: e }));
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemAccessibilityWrapper/RoomListItemView/RoomListItemView.tsx
function lj(e, t) {
	return t.isUnsentMessage ? q("room_list|a11y|unsent_message", { roomName: e }) : t.invited ? q("room_list|a11y|invitation", { roomName: e }) : t.isMention && t.count ? q("room_list|a11y|mention", {
		roomName: e,
		count: t.count
	}) : t.hasUnreadCount && t.count ? q("room_list|a11y|unread", {
		roomName: e,
		count: t.count
	}) : t.callType === "voice" ? q("room_list|a11y|voice_call", { roomName: e }) : t.callType === "video" ? q("room_list|a11y|video_call", { roomName: e }) : q("room_list|a11y|default", { roomName: e });
}
var uj = s(function({ vm: e, isSelected: n, isFocused: r, onFocus: i, isFirstItem: a, isLastItem: o, renderAvatar: s, ...c }) {
	let l = m(null), d = J(e);
	u(() => {
		r && l.current?.focus({
			preventScroll: !0,
			focusVisible: !0
		});
	}, [r]);
	let f = lj(d.name, d.notification);
	return /* @__PURE__ */ t.createElement(cj, { vm: e }, /* @__PURE__ */ t.createElement(K, {
		as: "button",
		ref: l,
		className: (0, V.default)(oj.roomListItem, "mx_RoomListItemView", {
			[oj.selected]: n,
			[oj.bold]: d.isBold,
			[oj.firstItem]: a,
			[oj.lastItem]: o,
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
	}, /* @__PURE__ */ t.createElement(K, {
		className: oj.container,
		gap: "var(--cpd-space-3x)",
		align: "center"
	}, s(d.room), /* @__PURE__ */ t.createElement(K, {
		className: oj.content,
		gap: "var(--cpd-space-2x)",
		align: "center",
		justify: "space-between"
	}, /* @__PURE__ */ t.createElement("div", { className: oj.ellipsis }, /* @__PURE__ */ t.createElement("div", {
		className: oj.roomName,
		title: d.name,
		"data-testid": "room-name"
	}, d.name), d.messagePreview && /* @__PURE__ */ t.createElement(N, {
		as: "div",
		size: "sm",
		className: oj.ellipsis,
		title: d.messagePreview
	}, d.messagePreview)), (d.showMoreOptionsMenu || d.showNotificationMenu) && /* @__PURE__ */ t.createElement(sj, {
		showMoreOptionsMenu: d.showMoreOptionsMenu,
		showNotificationMenu: d.showNotificationMenu,
		vm: e
	}), /* @__PURE__ */ t.createElement("div", {
		className: oj.notificationDecoration,
		"aria-hidden": !0
	}, /* @__PURE__ */ t.createElement(tj, d.notification))))));
}), dj = s(function({ roomIndex: e, roomCount: n, roomIndexInSection: r, isInFlatList: i, ...a }) {
	let o = i ? ZA("listbox", e, n) : { role: "gridcell" }, s = /* @__PURE__ */ t.createElement(uj, {
		...a,
		...o
	});
	return i ? s : /* @__PURE__ */ t.createElement("div", ZA("treegrid", e, r), s);
}), fj = { roomList: "_roomList_1yq7k_11" }, pj = 1300;
function mj({ vm: e, renderAvatar: n, onKeyDown: r }) {
	let { roomListState: i, sections: a, isFlatList: o } = J(e), s = i.activeRoomIndex, l = m(void 0), u = m(void 0), d = p(() => a.flatMap((e) => e.roomIds), [a]), f = d.length, h = a.length, g = f + h, _ = p(() => a.map((e) => ({
		header: e.id,
		items: e.roomIds
	})), [a]), v = c((t) => {
		e.updateVisibleRooms(t.startIndex, t.endIndex);
	}, [e]), y = c((e, r, i, a, o, s) => {
		let { activeRoomIndex: c, roomCount: l, vm: u, isFlatList: d } = i.context, f = c === e, p = u.getRoomItemViewModel(r);
		if (!p) return /* @__PURE__ */ t.createElement(t.Fragment, { key: `stale-${e}` });
		let m = i.focused && i.tabIndexKey === r, h = d && e === 0, g = !!((d || o) && e === l - 1);
		return /* @__PURE__ */ t.createElement(dj, {
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
		let { sections: a } = n.context, o = a[i].roomIds.findIndex((e) => e === t);
		return y(e, t, n, r, i === a.length - 1, o);
	}, [y]), x = c((e, t, n, r) => y(e, t, n, r), [y]), S = c((e, n, r, i) => {
		let { vm: a, sectionCount: o, sections: s } = r.context, c = a.getSectionHeaderViewModel(n), l = s.slice(0, e).reduce((e, t) => e + t.roomIds.length + 1, 0), u = s[e].roomIds.length, d = r.focused && r.tabIndexKey === n;
		return /* @__PURE__ */ t.createElement(ej, {
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
		let { spaceId: t, filterKeys: n } = e.context.context, r = l.current !== t || !Tb(u.current, n);
		return u.current = n, l.current = t, r ? {
			align: "start",
			index: s || 0,
			behavior: "auto"
		} : !1;
	}, [s]), D = c(() => !0, []), O = c(() => !0, []), k = p(() => ({
		top: pj,
		bottom: pj
	}), []), A = {
		context: T,
		scrollIntoViewOnChange: E,
		...s === void 0 ? {} : { initialTopMostItemIndex: s },
		"data-testid": "room-list",
		"aria-label": q("room_list|list_title"),
		getItemKey: C,
		isItemFocusable: D,
		rangeChanged: v,
		onKeyDown: r,
		increaseViewportBy: k,
		className: fj.roomList
	};
	return o ? /* @__PURE__ */ t.createElement(JA, {
		...A,
		...XA("listbox"),
		items: d,
		getItemComponent: x
	}) : /* @__PURE__ */ t.createElement(YA, {
		...A,
		...XA("treegrid", g),
		groups: _,
		getHeaderKey: w,
		getGroupHeaderComponent: S,
		getItemComponent: b,
		isGroupHeaderFocusable: O
	});
}
var hj = { toast: "_toast_1q2e8_8" };
//#endregion
//#region src/room-list/RoomListView/RoomListToast/RoomListToast.tsx
function gj({ type: e, onClose: n }) {
	let { translate: r } = U(), i;
	switch (e) {
		case "section_created":
			i = {
				text: r("room_list|section_created"),
				icon: TE
			};
			break;
	}
	return /* @__PURE__ */ t.createElement(ae, {
		className: hj.toast,
		Icon: i.icon,
		onClose: n,
		tooltip: r("action|close")
	}, i.text);
}
var _j = { list: "_list_pswis_8" }, vj = ({ vm: e, renderAvatar: n, onKeyDown: r }) => {
	let i = J(e), a;
	return a = i.isLoadingRooms ? /* @__PURE__ */ t.createElement(BA, null) : i.isRoomListEmpty ? /* @__PURE__ */ t.createElement(HA, { vm: e }) : /* @__PURE__ */ t.createElement(mj, {
		vm: e,
		renderAvatar: n,
		onKeyDown: r
	}), /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("div", null, /* @__PURE__ */ t.createElement(RA, {
		filterIds: i.filterIds,
		activeFilterId: i.activeFilterId,
		onToggleFilter: e.onToggleFilter
	})), /* @__PURE__ */ t.createElement(K, {
		direction: "column",
		className: _j.list
	}, a, i.toast && /* @__PURE__ */ t.createElement(gj, {
		type: i.toast,
		onClose: e.closeToast
	})));
}, yj = {
	"box-flex": "_box-flex_1odfs_9",
	"box-shrink": "_box-shrink_1odfs_13",
	"box-grow": "_box-grow_1odfs_17"
};
//#endregion
//#region src/core/utils/Box/Box.tsx
function bj({ as: e = "div", flex: n = null, shrink: r = null, grow: i = null, className: a, children: o, ...s }) {
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
		className: (0, V.default)(a, {
			[yj["box-flex"]]: !!n,
			[yj["box-shrink"]]: !!r,
			[yj["box-grow"]]: !!i
		}),
		style: c
	}, o);
}
//#endregion
//#region src/resize/group/GroupView.tsx
function xj({ vm: e, children: n }) {
	return J(e), /* @__PURE__ */ t.createElement(fe, { onLayoutChanged: (t) => {
		let n = t[Tj];
		e.onLeftPanelResized(n);
	} }, n);
}
var Sj = {
	separator: "_separator_ctw94_8",
	visible: "_visible_ctw94_20"
};
//#endregion
//#region src/resize/separator/SeparatorView.tsx
function Cj({ vm: e, className: n }) {
	let { translate: r } = U(), { isCollapsed: i, isFocusedViaKeyboard: a } = J(e), o = (0, V.default)(Sj.separator, n, { [Sj.visible]: i || a });
	return /* @__PURE__ */ t.createElement(_e, {
		className: o,
		onClick: e.onSeparatorClick,
		onFocus: e.onFocus,
		onBlur: e.onBlur,
		"aria-label": r("left_panel|separator_label")
	}, /* @__PURE__ */ t.createElement(se, {
		description: r("left_panel|separator_label"),
		placement: "right"
	}, /* @__PURE__ */ t.createElement(UE, {
		width: "20px",
		height: "12px",
		viewBox: "3.999704360961914 8.999704360961914 16.000295639038086 6.000591278076172",
		transform: "rotate(90)"
	})));
}
//#endregion
//#region src/resize/panel/LeftResizablePanelView.tsx
function wj({ vm: e, className: n, children: r, ...i }) {
	let { initialSize: a, isCollapsed: o } = J(e), [s, c] = ve();
	u(() => {
		s && e.setPanelHandle(s);
	}, [e, s]);
	let l = a === void 0 ? i.defaultSize : `${a}%`;
	return /* @__PURE__ */ t.createElement(he, {
		inert: o,
		id: Tj,
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
var Tj = "left-panel";
//#endregion
//#region src/core/utils/numbers.ts
function Ej(e, t) {
	return Number.isFinite(e) ? Number(e) : t;
}
function Dj(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
function Oj(...e) {
	return [...e].reduce((e, t) => t + e, 0);
}
function kj(e, t, n) {
	return e * (n - t) + t;
}
function Aj(e, t, n) {
	let r = (e - t) / (n - t);
	return Number.isNaN(r) ? 0 : r;
}
//#endregion
//#region src/core/i18n/I18nApi.ts
var jj = class {
	get language() {
		return pS();
	}
	register(e) {
		let t = {};
		for (let n in e) for (let r in e[n]) t[r] = t[r] || {}, t[r][n] = e[n][r];
		for (let e in t) dS(e, t[e]);
	}
	translate(e, t, n) {
		return n ? q(e, t, n) : q(e, t);
	}
	humanizeTime = (e) => Lk(e, this);
};
//#endregion
export { $ as ActionBarAction, qk as ActionBarView, oA as AudioPlayerView, zb as AvatarWithDetails, OS as Banner, RS as BaseViewModel, bj as Box, pp as Clock, Wk as DateSeparatorView, dA as DecryptionFailureBodyView, cA as DecryptionFailureReason, Yk as DisambiguatedProfileView, FS as Disposables, $k as EncryptionEventState, eA as EncryptionEventView, pE as EventContentBodyView, Qk as EventTileBubble, EO as FileBodyView, wO as FileBodyViewInfoIcon, CO as FileBodyViewState, JA as FlatVirtualizedList, K as Flex, xj as GroupView, YA as GroupedVirtualizedList, Ek as HistoryVisibilityBadge, jj as I18nApi, Cp as I18nContext, tk as ImageBodyView, $O as ImageBodyViewPlaceholder, QO as ImageBodyViewState, Yb as KEY_SEPARATOR, Tj as LEFT_PANEL_ID, LT as LINKIFIED_DATA_ATTRIBUTE, wj as LeftResizablePanelView, HT as LinkedText, BT as LinkedTextContext, MT as LinkifyMatrixOpaqueIdType, AT as LinkifyOptionalSlashProtocols, kT as LinkifySupportedProtocols, SO as MediaBody, vA as MessageTimestampView, zS as MockViewModel, rj as MoreOptionContent, tj as NotificationDecoration, jT as PERMITTED_URL_SCHEMES, me as Panel, pk as Pill, bk as PillInput, nA as PinnedMessageBadge, wp as PlayPauseButton, mA as ReactionsRowButtonTooltipView, gA as ReactionsRowButtonView, pA as ReactionsRowView, qT as ReadMarker, yO as RedactedBodyView, pe as ResizableGroup, bA as RichItem, wA as RichList, HA as RoomListEmptyStateView, jA as RoomListHeaderView, dj as RoomListItemAccessibilityWrapper, cj as RoomListItemContextMenu, sj as RoomListItemHoverMenu, nj as RoomListItemMoreOptionsMenu, aj as RoomListItemNotificationMenu, uj as RoomListItemView, BA as RoomListLoadingSkeleton, RA as RoomListPrimaryFilters, NA as RoomListSearchView, ej as RoomListSectionHeaderView, vj as RoomListView, ij as RoomNotifState, Sk as RoomStatusBarState, Ck as RoomStatusBarView, MS as SasEmoji, Ib as SeekBar, ge as Separator, Cj as SeparatorView, IS as Snapshot, lk as TextualBodyView, sk as TextualBodyViewBodyWrapperKind, ok as TextualBodyViewKind, rA as TextualEventView, dk as TileErrorView, Ak as TimelineSeparator, GT as UrlPreviewGroupView, ik as VideoBodyView, rk as VideoBodyViewState, LS as ViewModelSubscriptions, mj as VirtualizedRoomListView, de as VirtuosoMockContext, Dk as WidgetContextMenuView, Tk as WidgetPipView, q as _t, xS as _tDom, hS as _td, Dj as clamp, Ej as defaultNumber, FT as findLinksInString, aA as formatBytes, fp as formatDateForInput, dp as formatSeconds, PT as generateLinkedTextOptions, XA as getContainerAccessibleProps, QA as getGroupHeaderAccessibleProps, ZA as getItemAccessibleProps, DS as getLangsJson, pS as getLocale, Jb as getNormalizedLanguageKeys, Rk as humanizeRelativeTime, Lk as humanizeTime, IT as isLinkable, xT as linkifyHtml, eT as linkifyString, bS as lookupString, qb as normalizeLanguageKey, Aj as percentageOf, kj as percentageWithin, dS as registerTranslations, wS as replaceByRegexes, SS as sanitizeForTranslation, TS as setLanguage, mS as setLocale, fS as setMissingEntryGenerator, CS as substitute, Oj as sum, PA as useCollapseFilters, BS as useCreateAutoDisposedViewModel, U as useI18n, VT as useLinkedTextContext, VS as useMockedViewModel, J as useViewModel, FA as useVisibleFilters };
