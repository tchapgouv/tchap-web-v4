import * as e from "react";
import t, { Children as n, cloneElement as r, createContext as i, forwardRef as a, isValidElement as o, memo as s, useCallback as c, useContext as l, useEffect as u, useId as d, useLayoutEffect as f, useMemo as p, useRef as m, useState as h, useSyncExternalStore as g, version as _ } from "react";
import * as v from "react-dom";
import y from "react-dom";
import { Virtuoso as b, VirtuosoMockContext as x } from "react-virtuoso";
import { Group as S, Group as C, Panel as w, Panel as T, Separator as E, Separator as D, usePanelCallbackRef as O } from "react-resizable-panels";
//#region \0rolldown/runtime.js
var k = Object.create, A = Object.defineProperty, j = Object.getOwnPropertyDescriptor, M = Object.getOwnPropertyNames, ee = Object.getPrototypeOf, N = Object.prototype.hasOwnProperty, P = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), te = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = M(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !N.call(e, s) && s !== n && A(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = j(t, s)) || r.enumerable
	});
	return e;
}, ne = (e, t, n) => (n = e == null ? {} : k(ee(e)), te(t || !e || !e.__esModule ? A(n, "default", {
	value: e,
	enumerable: !0
}) : n, e));
//#endregion
//#region ../../node_modules/temporal-polyfill/chunks/internal.js
function F(e, t, n, r, i) {
	return re(t, ((e, t) => {
		let n = e[t];
		if (n === void 0) throw TypeError(vs(t));
		return n;
	})(e, t), n, r, i);
}
function re(e, t, n, r, i, a) {
	let o = Se(t, n, r);
	if (i && t !== o) throw RangeError(gs(e, t, n, r, a));
	return o;
}
function ie(e) {
	return e !== null && /object|function/.test(typeof e);
}
function ae(e, t = Map) {
	let n = new t();
	return (t, ...r) => {
		if (n.has(t)) return n.get(t);
		let i = e(t, ...r);
		return n.set(t, i), i;
	};
}
function oe(e) {
	return se({ name: e }, 1);
}
function se(e, t) {
	return de(((e) => ({
		value: e,
		configurable: 1,
		writable: !t
	})), e);
}
function ce(e) {
	return de(((e) => ({
		get: e,
		configurable: 1
	})), e);
}
function le(e) {
	return { [Symbol.toStringTag]: {
		value: e,
		configurable: 1
	} };
}
function ue(e, t) {
	let n = {}, r = e.length;
	for (let i of t) n[e[--r]] = i;
	return n;
}
function de(e, t, n) {
	let r = {};
	for (let i in t) r[i] = e(t[i], i, n);
	return r;
}
function fe(e, t, n) {
	let r = {};
	for (let i = 0; i < t.length; i++) {
		let a = t[i];
		r[a] = e(a, i, n);
	}
	return r;
}
function I(e, t, n) {
	let r = {};
	for (let i = 0; i < e.length; i++) r[t[i]] = n[e[i]];
	return r;
}
function pe(e, t) {
	let n = Object.create(null);
	for (let r of e) n[r] = t[r];
	return n;
}
function me(e, t) {
	for (let n of t) if (n in e) return 1;
	return 0;
}
function he(e, t, n) {
	for (let r of e) if (t[r] !== n[r]) return 0;
	return 1;
}
function ge(e, t, n) {
	let r = { ...n };
	for (let n = 0; n < t; n++) r[e[n]] = 0;
	return r;
}
function L(e, ...t) {
	return (...n) => e(...t, ...n);
}
function _e() {}
function ve(e) {
	return e[0].toUpperCase() + e.substring(1);
}
function ye(e) {
	return e.slice().sort();
}
function be(e, t) {
	return String(t).padStart(e, "0");
}
function xe(e, t) {
	return Math.sign(e - t);
}
function Se(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
function Ce(e, t) {
	return [Math.floor(e / t), we(e, t)];
}
function we(e, t) {
	return (e % t + t) % t;
}
function Te(e, t) {
	return [Ee(e, t), De(e, t)];
}
function Ee(e, t) {
	return Math.trunc(e / t) || 0;
}
function De(e, t) {
	return e % t || 0;
}
function Oe(e) {
	return Math.abs(e % 1) === .5;
}
function ke(e, t, n) {
	let r = 0, i = 0;
	for (let a = 0; a <= t; a++) {
		let t = e[n[a]], o = gc[a], [s, c] = Te(t, hc / o);
		r += c * o, i += s;
	}
	let [a, o] = Te(r, hc);
	return [i + a, o];
}
function Ae(e, t, n) {
	let r = {};
	for (let i = t; i >= 0; i--) {
		let t = gc[i];
		r[n[i]] = Ee(e, t), e = De(e, t);
	}
	return r;
}
function je(e) {
	if (e !== void 0) return Vc(e);
}
function Me(e) {
	if (e !== void 0) return Pe(e);
}
function Ne(e) {
	if (e !== void 0) return Fe(e);
}
function Pe(e) {
	return Be(Fe(e));
}
function Fe(e) {
	return ze(Uc(e));
}
function Ie(e, t) {
	if (t == null) throw RangeError(vs(e));
	return t;
}
function Le(e) {
	if (!ie(e)) throw TypeError(hs);
	return e;
}
function Re(e, t, n = e) {
	if (typeof t !== e) throw TypeError(_s(n, t));
	return t;
}
function ze(e, t = "number") {
	if (!Number.isInteger(e)) throw RangeError(ls(t, e));
	return e || 0;
}
function Be(e, t = "number") {
	if (e <= 0) throw RangeError(us(t, e));
	return e;
}
function Ve(e) {
	if (typeof e == "symbol") throw TypeError(ms);
	return String(e);
}
function He(e, t) {
	return ie(e) ? String(e) : Vc(e, t);
}
function Ue(e) {
	if (typeof e == "string") return BigInt(e);
	if (typeof e != "bigint") throw TypeError(ps(e));
	return e;
}
function We(e, t = "number") {
	if (typeof e == "bigint") throw TypeError(fs(t));
	if (e = Number(e), !Number.isFinite(e)) throw RangeError(ds(t, e));
	return e;
}
function Ge(e, t) {
	return Math.trunc(We(e, t)) || 0;
}
function Ke(e, t) {
	return ze(We(e, t), t);
}
function qe(e, t) {
	return Be(Ge(e, t), t);
}
function Je(e, t) {
	let [n, r] = Te(t, hc), i = e + n, a = Math.sign(i);
	return a && a === -Math.sign(r) && (i -= a, r += a * 864e11), [i, r];
}
function Ye(e, t, n = 1) {
	return Je(e[0] + t[0] * n, e[1] + t[1] * n);
}
function Xe(e, t) {
	return Je(e[0], e[1] + t);
}
function Ze(e, t) {
	return Ye(t, e, -1);
}
function Qe(e, t) {
	return xe(e[0], t[0]) || xe(e[1], t[1]);
}
function $e(e, t, n) {
	return Qe(e, t) === -1 || Qe(e, n) === 1;
}
function et(e, t = 1) {
	let n = BigInt(hc / t);
	return [Number(e / n), Number(e % n) * t];
}
function tt(e, t = 1) {
	let [n, r] = Te(e, hc / t);
	return [n, r * t];
}
function nt(e, t = 1) {
	let [n, r] = e, i = Math.floor(r / t), a = hc / t;
	return BigInt(n) * BigInt(a) + BigInt(i);
}
function rt(e, t = 1, n) {
	let [r, i] = e, [a, o] = Te(i, t);
	return hc / t * r + (a + (n ? o / t : 0));
}
function it(e) {
	return e[0] + e[1] / hc;
}
function at(e, t, n = Ce) {
	let [r, i] = e, [a, o] = n(i, t);
	return [hc / t * r + a, o];
}
function ot(e) {
	return F(e, "isoYear", fl, dl, 1), e.isoYear === fl ? F(e, "isoMonth", 4, 12, 1) : e.isoYear === dl && F(e, "isoMonth", 1, 9, 1), e;
}
function st(e) {
	return ct({
		...e,
		...al,
		isoHour: 12
	}), e;
}
function ct(e) {
	let t = F(e, "isoYear", fl, dl, 1), n = t === fl ? 1 : t === dl ? -1 : 0;
	return n && lt(ht({
		...e,
		isoDay: e.isoDay + n,
		isoNanosecond: e.isoNanosecond - n
	})), e;
}
function lt(e) {
	if (!e || $e(e, ul, ll)) throw RangeError(Gs);
	return e;
}
function ut(e) {
	return ke(e, 5, $c)[1];
}
function dt(e) {
	let [t, n] = Ce(e, hc);
	return [Ae(n, 5, $c), t];
}
function ft(e) {
	return pt(e)[0];
}
function pt(e) {
	return at(e, fc);
}
function mt(e) {
	return vt(e.isoYear, e.isoMonth, e.isoDay, e.isoHour, e.isoMinute, e.isoSecond, e.isoMillisecond);
}
function ht(e) {
	let t = mt(e);
	if (t !== void 0) {
		let [n, r] = Te(t, cc);
		return [n, r * dc + (e.isoMicrosecond || 0) * uc + (e.isoNanosecond || 0)];
	}
}
function gt(e, t) {
	let [n, r] = dt(ut(e) - t);
	return lt(ht({
		...e,
		isoDay: e.isoDay + r,
		...n
	}));
}
function _t(...e) {
	return vt(...e) / lc;
}
function vt(...e) {
	let [t, n] = yt(...e), r = t.valueOf();
	if (!isNaN(r)) return r - n * cc;
}
function yt(e, t = 1, n = 1, r = 0, i = 0, a = 0, o = 0) {
	let s = e === fl ? 1 : e === dl ? -1 : 0, c = /* @__PURE__ */ new Date();
	return c.setUTCHours(r, i, a, o), c.setUTCFullYear(e, t - 1, n + s), [c, s];
}
function bt(e, t) {
	let [n, r] = Xe(e, t);
	r < 0 && (r += 864e11, --n);
	let [i, a] = Ce(r, dc), [o, s] = Ce(a, uc);
	return xt(n * cc + i, o, s);
}
function xt(e, t = 0, n = 0) {
	let r = Math.ceil(Math.max(0, Math.abs(e) - cl) / cc) * Math.sign(e), i = new Date(e - r * cc);
	return ue(tl, [
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
function St(e, t) {
	if (t < -cl) throw RangeError(Gs);
	let n = e.formatToParts(t), r = {};
	for (let e of n) r[e.type] = e.value;
	return r;
}
function Ct(e) {
	return e.isoDay;
}
function wt(e) {
	return [
		e.isoYear,
		e.isoMonth,
		e.isoDay
	];
}
function Tt(e, t) {
	return [t, 0];
}
function Et(e, t) {
	if (!t) return [hl, e];
}
function Dt(e, t, n) {
	return {
		isoYear: e,
		isoMonth: t,
		isoDay: n
	};
}
function Ot() {
	return 7;
}
function kt() {
	return gl;
}
function At(e, t) {
	switch (t) {
		case 2: return Mt(e) ? 29 : 28;
		case 4:
		case 6:
		case 9:
		case 11: return 30;
	}
	return 31;
}
function jt(e) {
	return Mt(e) ? 366 : 365;
}
function Mt(e) {
	return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function Nt(e) {
	let [t, n] = yt(e.isoYear, e.isoMonth, e.isoDay);
	return we(t.getUTCDay() - n, 7) || 7;
}
function Pt(e) {
	return this.id === Ic ? (({ isoYear: e }) => e < 1 ? ["gregory-inverse", 1 - e] : ["gregory", e])(e) : this.id === Lc ? vl(e) : [];
}
function Ft(e) {
	let t = mt(e);
	if (t < _l) {
		let { isoYear: t } = e;
		return t < 1 ? ["japanese-inverse", 1 - t] : ["japanese", t];
	}
	let { era: n, eraYear: r } = Ma(St(ku(Lc), t), Lc);
	return [n, r];
}
function It(e) {
	return Lt(e), Bt(e, 1), e;
}
function Lt(e) {
	return zt(e, 1), e;
}
function Rt(e) {
	return he(el, e, zt(e));
}
function zt(e, t) {
	let { isoYear: n } = e, r = F(e, "isoMonth", 1, kt(), t);
	return {
		isoYear: n,
		isoMonth: r,
		isoDay: F(e, "isoDay", 1, At(n, r), t)
	};
}
function Bt(e, t) {
	return ue($c, [
		F(e, "isoHour", 0, 23, t),
		F(e, "isoMinute", 0, 59, t),
		F(e, "isoSecond", 0, 59, t),
		F(e, "isoMillisecond", 0, 999, t),
		F(e, "isoMicrosecond", 0, 999, t),
		F(e, "isoNanosecond", 0, 999, t)
	]);
}
function R(e) {
	return e === void 0 ? 0 : Rl(Le(e));
}
function Vt(e, t = 0) {
	e = Qt(e);
	let n = zl(e), r = Bl(e, t);
	return [
		Rl(e),
		r,
		n
	];
}
function Ht(e, t, n, r = 9, i = 0, a = 4) {
	t = Qt(t);
	let o = Il(t, r, i), s = Yt(t), c = Wl(t, a), l = Fl(t, r, i, 1);
	return o == null ? o = Math.max(n, l) : rn(o, l), s = Xt(s, l, 1), e && (c = ((e) => e < 4 ? (e + 2) % 4 : e)(c)), [
		o,
		l,
		s,
		c
	];
}
function Ut(e, t = 6, n) {
	let r = Yt(e = $t(e, yl)), i = Wl(e, 7), a = Fl(e, t);
	return a = Ie(yl, a), r = Xt(r, a, void 0, n), [
		a,
		r,
		i
	];
}
function Wt(e) {
	return Vl(Qt(e));
}
function Gt(e, t) {
	return qt(Qt(e), t);
}
function Kt(e) {
	let t = nn(Tl, Pl, $t(e, Tl), 0);
	if (!t) throw RangeError(_s(Tl, t));
	return t;
}
function qt(e, t = 4) {
	let n = Zt(e);
	return [Wl(e, 4), ...Jt(Fl(e, t), n)];
}
function Jt(e, t) {
	return e == null ? [t === void 0 ? 1 : 10 ** (9 - t), t] : [gc[e], e < 4 ? 9 - 3 * e : -1];
}
function Yt(e) {
	let t = e[Sl];
	return t === void 0 ? 1 : Ge(t, Sl);
}
function Xt(e, t, n, r) {
	let i = r ? hc : gc[t + 1];
	if (i) {
		let n = gc[t];
		if (i % ((e = re(Sl, e, 1, i / n - (r ? 0 : 1), 1)) * n)) throw RangeError(_s(Sl, e));
	} else e = re(Sl, e, 1, n ? 10 ** 9 : 1, 1);
	return e;
}
function Zt(e) {
	let t = e[Cl];
	if (t !== void 0) {
		if (typeof t != "number") {
			if (Ve(t) === "auto") return;
			throw RangeError(_s(Cl, t));
		}
		t = re(Cl, Math.floor(t), 0, 9, 1);
	}
	return t;
}
function Qt(e) {
	return e === void 0 ? {} : Le(e);
}
function $t(e, t) {
	return typeof e == "string" ? { [t]: e } : Le(e);
}
function en(e) {
	return { overflow: Dl[e] };
}
function tn(e, t, n = 9, r = 0, i) {
	let a = t[e];
	if (a === void 0) return i ? r : void 0;
	if (a = Ve(a), a === "auto") return i ? r : null;
	let o = oc[a];
	if (o === void 0 && (o = Yc[a]), o === void 0) throw RangeError(Cs(e, a, oc));
	return re(e, o, r, n, 1, sc), o;
}
function nn(e, t, n, r = 0) {
	let i = n[e];
	if (i === void 0) return r;
	let a = Ve(i), o = t[a];
	if (o === void 0) throw RangeError(Cs(e, a, t));
	return o;
}
function rn(e, t) {
	if (t > e) throw RangeError(Zs);
}
function an(e) {
	return {
		branding: Zl,
		epochNanoseconds: e
	};
}
function on(e, t, n) {
	return {
		branding: Xl,
		calendar: n,
		timeZone: t,
		epochNanoseconds: e
	};
}
function sn(e, t = e.calendar) {
	return {
		branding: Jl,
		calendar: t,
		...pe(il, e)
	};
}
function cn(e, t = e.calendar) {
	return {
		branding: ql,
		calendar: t,
		...pe(nl, e)
	};
}
function ln(e, t = e.calendar) {
	return {
		branding: Gl,
		calendar: t,
		...pe(nl, e)
	};
}
function un(e, t = e.calendar) {
	return {
		branding: Kl,
		calendar: t,
		...pe(nl, e)
	};
}
function dn(e) {
	return {
		branding: Yl,
		...pe(rl, e)
	};
}
function fn(e) {
	return {
		branding: Ql,
		sign: Wr(e),
		...pe(Gc, e)
	};
}
function pn(e) {
	return at(e.epochNanoseconds, dc)[0];
}
function mn(e) {
	return nt(e.epochNanoseconds);
}
function hn(e) {
	return e.epochNanoseconds;
}
function gn(e, t, n, r, i) {
	let a = Zr(r), [o, s] = ((e, t) => {
		let n = t((e = $t(e, bl))[wl]), r = Ll(e);
		return r = Ie(bl, r), [r, n];
	})(i, e);
	if (!s && Lr(Math.max(o, a), s)) return vn(r, o);
	if (!s) throw RangeError(Js);
	if (!r.sign) return 0;
	let [c, l, u] = Mr(t, n, s), d = Nr(u), f = Pr(u), p = Fr(u), m = f(l, c, r);
	Ir(s) || (ct(c), ct(m));
	let h = p(l, c, m, o);
	return Lr(o, s) ? vn(h, o) : _n(h, d(m), o, l, c, d, f);
}
function _n(e, t, n, r, i, a, o) {
	let s = Wr(e), [c, l] = yn(r, Qc(n, e), n, s, i, a, o), u = bn(t, c, l);
	return e[Wc[n]] + u * s;
}
function vn(e, t) {
	return rt(qr(e), gc[t], 1);
}
function yn(e, t, n, r, i, a, o) {
	let s = Wc[n], c = {
		...t,
		[s]: t[s] + r
	}, l = o(e, i, t), u = o(e, i, c);
	return [a(l), a(u)];
}
function bn(e, t, n) {
	let r = rt(Ze(t, n));
	if (!r) throw RangeError(Fs);
	return rt(Ze(t, e)) / r;
}
function xn(e, t) {
	let [n, r, i] = Ut(t, 5, 1);
	return an(Rn(e.epochNanoseconds, n, r, i, 1));
}
function Sn(e, t, n) {
	let { epochNanoseconds: r, timeZone: i, calendar: a } = t, [o, s, c] = Ut(n);
	if (o === 0 && s === 1) return t;
	let l = e(i);
	if (o === 6) r = On(Pn, l, t, c);
	else {
		let e = l.N(r);
		r = pr(l, kn(bt(r, e), o, s, c), e, 2, 0, 1);
	}
	return on(r, i, a);
}
function Cn(e, t) {
	return sn(kn(e, ...Ut(t)), e.calendar);
}
function wn(e, t) {
	let [n, r, i] = Ut(t, 5);
	var a;
	return dn((a = i, jn(e, Nn(n, r), a)[0]));
}
function Tn(e, t) {
	let n = e(t.timeZone), [r, i] = Pn(au(t, n)), a = rt(Ze(hr(n, r), hr(n, i)), mc, 1);
	if (a <= 0) throw RangeError(Fs);
	return a;
}
function En(e, t) {
	let { timeZone: n, calendar: r } = t;
	return on(Dn(Fn, e(n), t), n, r);
}
function Dn(e, t, n) {
	return hr(t, e(au(n, t)));
}
function On(e, t, n, r) {
	let [i, a] = e(au(n, t)), o = n.epochNanoseconds, s = hr(t, i), c = hr(t, a);
	if ($e(o, s, c)) throw RangeError(Fs);
	return Vn(bn(o, s, c), r) ? c : s;
}
function kn(e, t, n, r) {
	return An(e, Nn(t, n), r);
}
function An(e, t, n) {
	let [r, i] = jn(e, t, n);
	return ct({
		...jr(e, i),
		...r
	});
}
function jn(e, t, n) {
	return dt(Bn(ut(e), t, n));
}
function Mn(e) {
	return Bn(e, pc, 7);
}
function Nn(e, t) {
	return gc[e] * t;
}
function Pn(e) {
	let t = Fn(e);
	return [t, jr(t, 1)];
}
function Fn(e) {
	return ol(6, e);
}
function In(e, t, n) {
	let r = Math.min(Zr(e), 6);
	return Jr(zn(qr(e, r), t, n), r);
}
function Ln(e, t, n, r, i, a, o, s, c, l) {
	if (r === 0 && i === 1) return e;
	let [u, d, f] = (Lr(r, s) ? Ir(s) && r < 6 && n >= 6 ? Un : Hn : Wn)(e, t, n, r, i, a, o, s, c, l);
	return f && r !== 7 && (u = ((e, t, n, r, i, a, o, s) => {
		let c = Wr(e);
		for (let l = r + 1; l <= n; l++) {
			if (l === 7 && n !== 7) continue;
			let r = Qc(l, e);
			r[Wc[l]] += c;
			let u = rt(Ze(o(s(i, a, r)), t));
			if (u && Math.sign(u) !== c) break;
			e = r;
		}
		return e;
	})(u, d, n, Math.max(6, r), o, s, c, l)), u;
}
function Rn(e, t, n, r, i) {
	return t === 6 ? [Bn(it(e), n, r), 0] : zn(e, Nn(t, n), r, i);
}
function zn(e, t, n, r) {
	let [i, a] = e;
	r && a < 0 && (a += 864e11, --i);
	let [o, s] = Ce(Bn(a, t, n), hc);
	return Je(i + o, s);
}
function Bn(e, t, n) {
	return Vn(e / t, n) * t;
}
function Vn(e, t) {
	return $l[t](e);
}
function Hn(e, t, n, r, i, a) {
	let o = Wr(e), s = qr(e), c = Rn(s, r, i, a), l = Ze(s, c), u = Math.sign(c[0] - s[0]) === o, d = Jr(c, Math.min(n, 6));
	return [
		{
			...e,
			...d
		},
		Ye(t, l),
		u
	];
}
function Un(e, t, n, r, i, a, o, s, c, l) {
	let u = Wr(e) || 1, d = rt(qr(e, 5)), f = Nn(r, i), p = Bn(d, f, a), [m, h] = yn(o, {
		...e,
		...Zc
	}, 6, u, s, c, l), g = p - rt(Ze(m, h)), _ = 0;
	g && Math.sign(g) !== u ? t = Xe(m, p) : (_ += u, p = Bn(g, f, a), t = Xe(h, p));
	let v = Yr(p);
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
function Wn(e, t, n, r, i, a, o, s, c, l) {
	let u = Wr(e), d = Wc[r], f = Qc(r, e);
	r === 7 && (e = {
		...e,
		weeks: e.weeks + Math.trunc(e.days / 7)
	});
	let p = Ee(e[d], i) * i;
	f[d] = p;
	let [m, h] = yn(o, f, r, i * u, s, c, l), g = p + bn(t, m, h) * u * i, _ = Bn(g, i, a), v = Math.sign(_ - g) === u;
	return f[d] = _, [
		f,
		v ? h : m,
		v
	];
}
function Gn(e, t, n, r) {
	let [i, a, o, s] = ((e) => {
		let t = qt(e = Qt(e));
		return [e.timeZone, ...t];
	})(r), c = i !== void 0;
	return ((e, t, n, r, i, a) => {
		n = zn(n, i, r, 1);
		let o = t.N(n);
		return tr(bt(n, o), a) + (e ? or(Mn(o)) : "Z");
	})(c, t(c ? e(i) : eu), n.epochNanoseconds, a, o, s);
}
function Kn(e, t, n) {
	let [r, i, a, o, s, c] = ((e) => {
		e = Qt(e);
		let t = Vl(e), n = Zt(e), r = Ul(e), i = Wl(e, 4), a = Fl(e, 4);
		return [
			t,
			Hl(e),
			r,
			i,
			...Jt(a, n)
		];
	})(n);
	return ((e, t, n, r, i, a, o, s, c, l) => {
		r = zn(r, c, s, 1);
		let u = e(n).N(r);
		return tr(bt(r, u), l) + or(Mn(u), o) + ((e, t) => t === 1 ? "" : "[" + (t === 2 ? "!" : "") + e + "]")(n, a) + sr(t, i);
	})(e, t.calendar, t.timeZone, t.epochNanoseconds, r, i, a, o, s, c);
}
function qn(e, t) {
	let [n, r, i, a] = ((e) => (e = Qt(e), [Vl(e), ...qt(e)]))(t);
	return o = e.calendar, s = n, c = a, tr(An(e, i, r), c) + sr(o, s);
	var o, s, c;
}
function Jn(e, t) {
	return n = e.calendar, r = e, i = Wt(t), nr(r) + sr(n, i);
	var n, r, i;
}
function Yn(e, t) {
	return $n(e.calendar, rr, e, Wt(t));
}
function Xn(e, t) {
	return $n(e.calendar, ir, e, Wt(t));
}
function Zn(e, t) {
	let [n, r, i] = Gt(t);
	return a = i, ar(jn(e, r, n)[0], a);
	var a;
}
function Qn(e, t) {
	let [n, r, i] = Gt(t, 3);
	return r > 1 && Gr(e = {
		...e,
		...In(e, r, n)
	}), ((e, t) => {
		let { sign: n } = e, r = n === -1 ? Hr(e) : e, { hours: i, minutes: a } = r, [o, s] = at(qr(r, 3), fc, Te);
		Kr(o);
		let c = lr(s, t), l = t >= 0 || !n || c;
		return (n < 0 ? "-" : "") + "P" + er({
			Y: dr(r.years),
			M: dr(r.months),
			W: dr(r.weeks),
			D: dr(r.days)
		}) + (i || a || o || l ? "T" + er({
			H: dr(i),
			M: dr(a),
			S: dr(o, l) + c
		}) : "");
	})(e, i);
}
function $n(e, t, n, r) {
	return r === 1 ? e === "iso8601" ? t(n) : nr(n) : r > 1 || r === 0 && e !== "iso8601" ? nr(n) + cr(e, r === 2) : t(n);
}
function er(e) {
	let t = [];
	for (let n in e) {
		let r = e[n];
		r && t.push(r, n);
	}
	return t.join("");
}
function tr(e, t) {
	return nr(e) + "T" + ar(e, t);
}
function nr(e) {
	return rr(e) + "-" + ac(e.isoDay);
}
function rr(e) {
	let { isoYear: t } = e;
	return (t < 0 || t > 9999 ? ur(t) + be(6, Math.abs(t)) : be(4, t)) + "-" + ac(e.isoMonth);
}
function ir(e) {
	return ac(e.isoMonth) + "-" + ac(e.isoDay);
}
function ar(e, t) {
	let n = [ac(e.isoHour), ac(e.isoMinute)];
	return t !== -1 && n.push(ac(e.isoSecond) + ((e, t, n, r) => lr(e * 1e6 + t * 1e3 + n, r))(e.isoMillisecond, e.isoMicrosecond, e.isoNanosecond, t)), n.join(":");
}
function or(e, t = 0) {
	if (t === 1) return "";
	let [n, r] = Ce(Math.abs(e), mc), [i, a] = Ce(r, pc), [o, s] = Ce(a, fc);
	return ur(e) + ac(n) + ":" + ac(i) + (o || s ? ":" + ac(o) + lr(s) : "");
}
function sr(e, t) {
	return t !== 1 && (t > 1 || t === 0 && e !== "iso8601") ? cr(e, t === 2) : "";
}
function cr(e, t) {
	return "[" + (t ? "!" : "") + "u-ca=" + e + "]";
}
function lr(e, t) {
	let n = be(9, e);
	return n = t === void 0 ? n.replace(iu, "") : n.slice(0, t), n ? "." + n : "";
}
function ur(e) {
	return e < 0 ? "-" : "+";
}
function dr(e, t) {
	return e || t ? e.toLocaleString("fullwide", { useGrouping: 0 }) : "";
}
function fr(e, t) {
	let { epochNanoseconds: n } = e, r = (t.N ? t : t(e.timeZone)).N(n), i = bt(n, r);
	return {
		calendar: e.calendar,
		...i,
		offsetNanoseconds: r
	};
}
function pr(e, t, n, r = 0, i = 0, a, o) {
	if (n !== void 0 && r === 1 && (r === 1 || o)) return gt(t, n);
	let s = e.v(t);
	if (n !== void 0 && r !== 3) {
		let e = ((e, t, n, r) => {
			let i = ht(t);
			r && (n = Mn(n));
			for (let t of e) {
				let e = rt(Ze(t, i));
				if (r && (e = Mn(e)), e === n) return t;
			}
		})(s, t, n, a);
		if (e !== void 0) return e;
		if (r === 0) throw RangeError(Us);
	}
	return o ? ht(t) : mr(e, t, i, s);
}
function mr(e, t, n = 0, r = e.v(t)) {
	if (r.length === 1) return r[0];
	if (n === 1) throw RangeError(Ws);
	if (r.length) return r[n === 3 ? 1 : 0];
	let i = ht(t), a = ((e, t) => {
		let n = e.N(Xe(t, -hc));
		return ((e) => {
			if (e > 864e11) throw RangeError(Hs);
			return e;
		})(e.N(Xe(t, hc)) - n);
	})(e, i) * (n === 2 ? -1 : 1);
	return (r = e.v(bt(i, a)))[n === 2 ? 0 : r.length - 1];
}
function hr(e, t) {
	let n = e.v(t);
	if (n.length) return n[0];
	let r = Xe(ht(t), -hc);
	return e.l(r, 1);
}
function gr(e, t, n) {
	return an(lt(Ye(t.epochNanoseconds, ((e) => {
		if (Xr(e)) throw RangeError(Ys);
		return qr(e, 5);
	})(e ? Hr(n) : n))));
}
function _r(e, t, n, r, i, a = Object.create(null)) {
	let o = t(r.timeZone), s = e(r.calendar);
	return {
		...r,
		...Sr(o, s, r, n ? Hr(i) : i, a)
	};
}
function vr(e, t, n, r, i = Object.create(null)) {
	let { calendar: a } = n;
	return sn(Cr(e(a), n, t ? Hr(r) : r, i), a);
}
function yr(e, t, n, r, i) {
	let { calendar: a } = n;
	return cn(wr(e(a), n, t ? Hr(r) : r, i), a);
}
function br(e, t, n, r, i) {
	let a = n.calendar, o = e(a), s = st(Tr(o, n));
	return t && (r = Vr(r)), r.sign < 0 && (s = o.P(s, {
		...Xc,
		months: 1
	}), s = jr(s, -1)), ln(Tr(o, o.P(s, r, i)), a);
}
function xr(e, t, n) {
	return dn(Er(t, e ? Hr(n) : n)[0]);
}
function Sr(e, t, n, r, i) {
	let a = qr(r, 5), o = n.epochNanoseconds;
	if (Xr(r)) {
		let s = au(n, e);
		o = Ye(mr(e, {
			...wr(t, s, {
				...r,
				...Zc
			}, i),
			...pe($c, s)
		}), a);
	} else o = Ye(o, a), R(i);
	return { epochNanoseconds: lt(o) };
}
function Cr(e, t, n, r) {
	let [i, a] = Er(t, n);
	return ct({
		...wr(e, t, {
			...n,
			...Zc,
			days: n.days + a
		}, r),
		...i
	});
}
function wr(e, t, n, r) {
	if (n.years || n.months || n.weeks) return e.P(t, n, r);
	R(r);
	let i = n.days + qr(n, 5)[0];
	return i ? st(jr(t, i)) : t;
}
function Tr(e, t, n = 1) {
	return jr(t, n - e.day(t));
}
function Er(e, t) {
	let [n, r] = qr(t, 5), [i, a] = dt(ut(e) + r);
	return [i, n + a];
}
function Dr(e, t, n) {
	let r = R(n), i, { years: a, months: o, weeks: s, days: c } = t;
	if (c += qr(t, 5)[0], a || o) i = Or(this, e, a, o, r);
	else {
		if (!s && !c) return e;
		i = mt(e);
	}
	if (i === void 0) throw RangeError(Gs);
	return i += (7 * s + c) * cc, st(xt(i));
}
function Or(e, t, n, r, i) {
	let [a, o, s] = e.u(t);
	if (n) {
		let [t, r] = e.m(a, o);
		a += n, o = Ca(t, r, e.F(a)), o = re("month", o, 1, e.O(a), i);
	}
	return r && ([a, o] = e.p(a, o, r)), s = re("day", s, 1, e.B(a, o), i), e.M(a, o, s);
}
function kr(e, t, n) {
	return e += Ee(n, gl), (t += De(n, gl)) < 1 ? (e--, t += gl) : t > gl && (e++, t -= gl), [e, t];
}
function Ar(e, t, n) {
	if (n) {
		if (t += n, !Number.isSafeInteger(t)) throw RangeError(Gs);
		if (n < 0) for (; t < 1;) t += Ua.call(this, --e);
		else {
			let n;
			for (; t > (n = Ua.call(this, e));) t -= n, e++;
		}
	}
	return [e, t];
}
function jr(e, t) {
	return t ? {
		...e,
		...xt(mt(e) + t * cc)
	} : e;
}
function Mr(e, t, n) {
	let r = e(n.calendar);
	return Ir(n) ? [
		n,
		r,
		t(n.timeZone)
	] : [{
		...n,
		...al
	}, r];
}
function Nr(e) {
	return e ? hn : ht;
}
function Pr(e) {
	return e ? L(Sr, e) : Cr;
}
function Fr(e) {
	return e ? L($i, e) : ea;
}
function Ir(e) {
	return e && e.epochNanoseconds;
}
function Lr(e, t) {
	return e <= 6 - (Ir(t) ? 1 : 0);
}
function Rr(e, t, n, r, i, a, o) {
	let s = e(Qt(o).relativeTo), c = Math.max(Zr(i), Zr(a));
	if (Lr(c, s)) return fn(Gr(((e, t, n, r) => {
		let i = Ye(qr(e), qr(t), r ? -1 : 1);
		if (!Number.isFinite(i[0])) throw RangeError(Gs);
		return {
			...Xc,
			...Jr(i, n)
		};
	})(i, a, c, r)));
	if (!s) throw RangeError(Js);
	r && (a = Hr(a));
	let [l, u, d] = Mr(t, n, s), f = Pr(d);
	return fn(Fr(d)(u, l, f(u, f(u, l, i), a), c));
}
function zr(e, t, n, r, i) {
	let a = Zr(r), [o, s, c, l, u] = ((e, t, n) => {
		e = $t(e, yl);
		let r = Il(e), i = n(e[wl]), a = Yt(e), o = Wl(e, 7), s = Fl(e);
		if (r === void 0 && s === void 0) throw RangeError(Xs);
		if (s ??= 0, r ??= Math.max(s, t), rn(r, s), a = Xt(a, s, 1), a > 1 && s > 5 && r !== s) throw RangeError("For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit");
		return [
			r,
			s,
			a,
			o,
			i
		];
	})(i, a, e);
	if (!u && Math.max(a, o) <= 6) return fn(Gr(((e, t, n, r, i) => {
		let a = Rn(qr(e), n, r, i);
		return {
			...Xc,
			...Jr(a, t)
		};
	})(r, o, s, c, l)));
	if (!Ir(u) && !r.sign) return r;
	if (!u) throw RangeError(Js);
	let [d, f, p] = Mr(t, n, u), m = Nr(p), h = Pr(p), g = Fr(p), _ = h(f, d, r);
	Ir(u) || (ct(d), ct(_));
	let v = g(f, d, _, o), y = r.sign, b = Wr(v);
	if (y && b && y !== b) throw RangeError(Fs);
	return v = Ln(v, m(_), o, s, c, l, f, d, m, h), fn(v);
}
function Br(e) {
	return e.sign === -1 ? Vr(e) : e;
}
function Vr(e) {
	return fn(Hr(e));
}
function Hr(e) {
	let t = {};
	for (let n of Wc) t[n] = -1 * e[n] || 0;
	return t;
}
function Ur(e) {
	return !e.sign;
}
function Wr(e, t = Wc) {
	let n = 0;
	for (let r of t) {
		let t = Math.sign(e[r]);
		if (t) {
			if (n && n !== t) throw RangeError(qs);
			n = t;
		}
	}
	return n;
}
function Gr(e) {
	for (let t of Jc) re(t, e[t], -ou, ou, 1);
	return Kr(rt(qr(e), fc)), e;
}
function Kr(e) {
	if (!Number.isSafeInteger(e)) throw RangeError(Ks);
}
function qr(e, t = 6) {
	return ke(e, t, Wc);
}
function Jr(e, t = 6) {
	let [n, r] = e, i = Ae(r, t, Wc);
	if (i[Wc[t]] += n * (864e11 / gc[t]), !Number.isFinite(i[Wc[t]])) throw RangeError(Gs);
	return i;
}
function Yr(e, t = 5) {
	return Ae(e, t, Wc);
}
function Xr(e) {
	return !!Wr(e, qc);
}
function Zr(e) {
	let t = 9;
	for (; t > 0 && !e[Wc[t]]; t--);
	return t;
}
function Qr(e, t) {
	return [e, t];
}
function $r(e) {
	let t = Math.floor(e / tu) * tu;
	return [t, t + tu];
}
function ei(e) {
	let t = _i(e = He(e));
	if (!t) throw RangeError(Qs(e));
	let n;
	if (t.C) n = 0;
	else {
		if (!t.offset) throw RangeError(Qs(e));
		n = ri(t.offset);
	}
	return t.timeZone && bi(t.timeZone, 1), an(gt(It(t), n));
}
function ti(e) {
	let t = _i(Vc(e));
	if (!t) throw RangeError(Qs(e));
	if (t.timeZone) return pi(t, t.offset ? ri(t.offset) : void 0);
	if (t.C) throw RangeError(Qs(e));
	return hi(t);
}
function ni(e, t) {
	let n = _i(Vc(e));
	if (!n || !n.timeZone) throw RangeError(Qs(e));
	let { offset: r } = n, i = r ? ri(r) : void 0, [, a, o] = Vt(t);
	return pi(n, i, a, o);
}
function ri(e) {
	let t = bi(e);
	if (t === void 0) throw RangeError(Qs(e));
	return t;
}
function ii(e) {
	let t = _i(Vc(e));
	if (!t || t.C) throw RangeError(Qs(e));
	return sn(mi(t));
}
function ai(e, t, n) {
	let r = _i(Vc(e));
	if (!r || r.C) throw RangeError(Qs(e));
	return t ? r.calendar === "iso8601" && (r = r.isoYear === -271821 && r.isoMonth === 4 ? {
		...r,
		isoDay: 20,
		...al
	} : {
		...r,
		isoDay: 1,
		...al
	}) : n && r.calendar === "iso8601" && (r = {
		...r,
		isoYear: hl
	}), cn(r.k ? mi(r) : hi(r));
}
function oi(e, t) {
	let n = vi(Vc(t));
	if (n) return si(n), ln(ot(Lt(n)));
	let r = ai(t, 1);
	return ln(Tr(e(r.calendar), r));
}
function si(e) {
	if (e.calendar !== "iso8601") throw RangeError($s(e.calendar));
}
function ci(e, t) {
	let n = yi(Vc(t));
	if (n) return si(n), un(Lt(n));
	let r = ai(t, 0, 1), { calendar: i } = r, a = e(i), [o, s, c] = a.u(r), [l, u] = a.m(o, s), [d, f] = a.R(l, u, c);
	return un(st(a.U(d, f, c)), i);
}
function li(e) {
	let t, n = ((e) => {
		let t = bu.exec(e);
		return t ? (Ci(t[10]), Si(t)) : void 0;
	})(Vc(e));
	if (!n) {
		if (n = _i(e), !n || !n.k) throw RangeError(Qs(e));
		if (n.C) throw RangeError($s("Z"));
		si(n);
	}
	if ((t = vi(e)) && Rt(t) || (t = yi(e)) && Rt(t)) throw RangeError(Qs(e));
	return dn(Bt(n, 1));
}
function ui(e) {
	let t = ((e) => {
		let t = Cu.exec(e);
		return t ? ((e) => {
			function t(e, t, a) {
				let o = 0, s = 0;
				if (a && ([o, i] = Ce(i, gc[a])), e !== void 0) {
					if (r) throw RangeError($s(e));
					s = ((e) => {
						let t = parseInt(e);
						if (!Number.isFinite(t)) throw RangeError($s(e));
						return t;
					})(e), n = 1, t && (i = wi(t) * (gc[a] / 1e9), r = 1);
				}
				return o + s;
			}
			let n = 0, r = 0, i = 0, a = {
				...ue(Wc, [
					t(e[2]),
					t(e[3]),
					t(e[4]),
					t(e[5]),
					t(e[6], e[7], 5),
					t(e[8], e[9], 4),
					t(e[10], e[11], 3)
				]),
				...Ae(i, 2, Wc)
			};
			if (!n) throw RangeError(xs(Wc));
			return Ei(e[1]) < 0 && (a = Hr(a)), a;
		})(t) : void 0;
	})(Vc(e));
	if (!t) throw RangeError(Qs(e));
	return fn(Gr(t));
}
function di(e) {
	let t = _i(e) || vi(e) || yi(e);
	return t ? t.calendar : e;
}
function fi(e) {
	let t = _i(e);
	return t && (t.timeZone || t.C && eu || t.offset) || e;
}
function pi(e, t, n = 0, r = 0) {
	let i = ki(e.timeZone), a = z(i), o;
	return It(e), o = e.k ? pr(a, e, t, n, r, !a.j, e.C) : hr(a, e), on(o, i, Ja(e.calendar));
}
function mi(e) {
	return gi(ct(It(e)));
}
function hi(e) {
	return gi(st(Lt(e)));
}
function gi(e) {
	return {
		...e,
		calendar: Ja(e.calendar)
	};
}
function _i(e) {
	let t = yu.exec(e);
	return t ? ((e) => {
		let t = e[10], n = (t || "").toUpperCase() === "Z";
		return {
			isoYear: xi(e),
			isoMonth: parseInt(e[4]),
			isoDay: parseInt(e[5]),
			...Si(e.slice(5)),
			...Ci(e[16]),
			k: !!e[6],
			C: n,
			offset: n ? void 0 : t
		};
	})(t) : void 0;
}
function vi(e) {
	let t = _u.exec(e);
	return t ? ((e) => ({
		isoYear: xi(e),
		isoMonth: parseInt(e[4]),
		isoDay: 1,
		...Ci(e[5])
	}))(t) : void 0;
}
function yi(e) {
	let t = vu.exec(e);
	return t ? ((e) => ({
		isoYear: hl,
		isoMonth: parseInt(e[1]),
		isoDay: parseInt(e[2]),
		...Ci(e[3])
	}))(t) : void 0;
}
function bi(e, t) {
	let n = xu.exec(e);
	return n ? ((e, t) => {
		let n = e[4] || e[5];
		if (t && n) throw RangeError($s(n));
		return ((e) => {
			if (Math.abs(e) >= 864e11) throw RangeError(Vs);
			return e;
		})((Di(e[2]) * mc + Di(e[3]) * pc + Di(e[4]) * fc + wi(e[5] || "")) * Ei(e[1]));
	})(n, t) : void 0;
}
function xi(e) {
	let t = Ei(e[1]), n = parseInt(e[2] || e[3]);
	if (t < 0 && !n) throw RangeError($s(-0));
	return t * n;
}
function Si(e) {
	let t = Di(e[3]);
	return {
		...dt(wi(e[4] || ""))[0],
		isoHour: Di(e[1]),
		isoMinute: Di(e[2]),
		isoSecond: t === 60 ? 59 : t
	};
}
function Ci(e) {
	let t, n, r = [];
	if (e.replace(Su, ((e, i, a) => {
		let o = !!i, [s, c] = a.split("=").reverse();
		if (c) {
			if (c === "u-ca") r.push(s), t ||= o;
			else if (o || /[A-Z]/.test(c)) throw RangeError($s(e));
		} else {
			if (n) throw RangeError($s(e));
			n = s;
		}
		return "";
	})), r.length > 1 && t) throw RangeError($s(e));
	return {
		timeZone: n,
		calendar: r[0] || "iso8601"
	};
}
function wi(e) {
	return parseInt(e.padEnd(9, "0"));
}
function Ti(e) {
	return RegExp(`^${e}$`, "i");
}
function Ei(e) {
	return e && e !== "+" ? -1 : 1;
}
function Di(e) {
	return e === void 0 ? 0 : parseInt(e);
}
function Oi(e) {
	return ki(Vc(e));
}
function ki(e) {
	let t = ji(e);
	return typeof t == "number" ? or(t) : t ? ((e) => {
		if (Eu.test(e)) throw RangeError(Rs(e));
		if (Tu.test(e)) throw RangeError(Bs);
		return e.toLowerCase().split("/").map(((e, t) => (e.length <= 3 || /\d/.test(e)) && !/etc|yap/.test(e) ? e.toUpperCase() : e.replace(/baja|dumont|[a-z]+/g, ((e, n) => e.length <= 2 && !t || e === "in" || e === "chat" ? e.toUpperCase() : e.length > 2 || !n ? ve(e).replace(/island|noronha|murdo|rivadavia|urville/, ve) : e)))).join("/");
	})(e) : eu;
}
function Ai(e) {
	let t = ji(e);
	return typeof t == "number" ? t : t ? t.resolvedOptions().timeZone : eu;
}
function ji(e) {
	let t = bi(e = e.toUpperCase(), 1);
	return t === void 0 ? e === eu ? void 0 : wu(e) : t;
}
function Mi(e, t) {
	return Qe(e.epochNanoseconds, t.epochNanoseconds);
}
function Ni(e, t) {
	return Qe(e.epochNanoseconds, t.epochNanoseconds);
}
function Pi(e, t, n, r, i, a) {
	let o = e(Qt(a).relativeTo), s = Math.max(Zr(r), Zr(i));
	if (he(Wc, r, i)) return 0;
	if (Lr(s, o)) return Qe(qr(r), qr(i));
	if (!o) throw RangeError(Js);
	let [c, l, u] = Mr(t, n, o), d = Nr(u), f = Pr(u);
	return Qe(d(f(l, c, r)), d(f(l, c, i)));
}
function Fi(e, t) {
	return Ii(e, t) || Li(e, t);
}
function Ii(e, t) {
	return xe(mt(e), mt(t));
}
function Li(e, t) {
	return xe(ut(e), ut(t));
}
function Ri(e, t) {
	return !Mi(e, t);
}
function zi(e, t) {
	return !Ni(e, t) && !!Gi(e.timeZone, t.timeZone) && e.calendar === t.calendar;
}
function Bi(e, t) {
	return !Fi(e, t) && e.calendar === t.calendar;
}
function Vi(e, t) {
	return !Ii(e, t) && e.calendar === t.calendar;
}
function Hi(e, t) {
	return !Ii(e, t) && e.calendar === t.calendar;
}
function Ui(e, t) {
	return !Ii(e, t) && e.calendar === t.calendar;
}
function Wi(e, t) {
	return !Li(e, t);
}
function Gi(e, t) {
	if (e === t) return 1;
	try {
		return Ai(e) === Ai(t);
	} catch {}
}
function Ki(e, t, n, r) {
	let i = Ht(e, r, 3, 5), a = ia(t.epochNanoseconds, n.epochNanoseconds, ...i);
	return fn(e ? Hr(a) : a);
}
function qi(e, t, n, r, i, a) {
	let o = fa(r.calendar, i.calendar), [s, c, l, u] = Ht(n, a, 5), d = r.epochNanoseconds, f = i.epochNanoseconds, p = Qe(f, d), m;
	if (p) if (s < 6) m = ia(d, f, s, c, l, u);
	else {
		let n = t(pa(r.timeZone, i.timeZone)), d = e(o);
		m = ta(d, n, r, i, p, s, a), m = Ln(m, f, s, c, l, u, d, r, hn, L(Sr, n));
	}
	else m = Xc;
	return fn(n ? Hr(m) : m);
}
function Ji(e, t, n, r, i) {
	let a = fa(n.calendar, r.calendar), [o, s, c, l] = Ht(t, i, 6), u = ht(n), d = ht(r), f = Qe(d, u), p;
	if (f) if (o <= 6) p = ia(u, d, o, s, c, l);
	else {
		let t = e(a);
		p = na(t, n, r, f, o, i), p = Ln(p, d, o, s, c, l, t, n, ht, Cr);
	}
	else p = Xc;
	return fn(t ? Hr(p) : p);
}
function Yi(e, t, n, r, i) {
	let a = fa(n.calendar, r.calendar);
	return Zi(t, (() => e(a)), n, r, ...Ht(t, i, 6, 9, 6));
}
function Xi(e, t, n, r, i) {
	let a = fa(n.calendar, r.calendar), o = Ht(t, i, 9, 9, 8), s = e(a), c = Tr(s, n), l = Tr(s, r);
	return c.isoYear === l.isoYear && c.isoMonth === l.isoMonth && c.isoDay === l.isoDay ? fn(Xc) : Zi(t, (() => s), st(c), st(l), ...o, 8);
}
function Zi(e, t, n, r, i, a, o, s, c = 6) {
	let l = ht(n), u = ht(r);
	if (l === void 0 || u === void 0) throw RangeError(Gs);
	let d;
	if (Qe(u, l)) if (i === 6) d = ia(l, u, i, a, o, s);
	else {
		let e = t();
		d = e.h(n, r, i), a === c && o === 1 || (d = Ln(d, u, i, a, o, s, e, n, ht, wr));
	}
	else d = Xc;
	return fn(e ? Hr(d) : d);
}
function Qi(e, t, n, r) {
	let [i, a, o, s] = Ht(e, r, 5, 5), c = Bn(ca(t, n), Nn(a, o), s), l = {
		...Xc,
		...Yr(c, i)
	};
	return fn(e ? Hr(l) : l);
}
function $i(e, t, n, r, i, a) {
	let o = Qe(r.epochNanoseconds, n.epochNanoseconds);
	return o ? i < 6 ? aa(n.epochNanoseconds, r.epochNanoseconds, i) : ta(t, e, n, r, o, i, a) : Xc;
}
function ea(e, t, n, r, i) {
	let a = ht(t), o = ht(n), s = Qe(o, a);
	return s ? r <= 6 ? aa(a, o, r) : na(e, t, n, s, r, i) : Xc;
}
function ta(e, t, n, r, i, a, o) {
	let [s, c, l] = ra(t, n, r, i);
	var u, d;
	return {
		...a === 6 ? (u = s, d = c, {
			...Xc,
			days: oa(u, d)
		}) : e.h(s, c, a, o),
		...Yr(l)
	};
}
function na(e, t, n, r, i, a) {
	let [o, s, c] = ((e, t, n) => {
		let r = t, i = ca(e, t);
		return Math.sign(i) === -n && (r = jr(t, -n), i += 864e11 * n), [
			e,
			r,
			i
		];
	})(t, n, r);
	return {
		...e.h(o, s, i, a),
		...Yr(c)
	};
}
function ra(e, t, n, r) {
	function i() {
		return d = {
			...jr(s, l++ * -r),
			...o
		}, f = mr(e, d), Qe(c, f) === -r;
	}
	let a = au(t, e), o = pe($c, a), s = au(n, e), c = n.epochNanoseconds, l = 0, u = ca(a, s), d, f;
	if (Math.sign(u) === -r && l++, i() && (r === -1 || i())) throw RangeError(Fs);
	let p = rt(Ze(f, c));
	return [
		a,
		d,
		p
	];
}
function ia(e, t, n, r, i, a) {
	return {
		...Xc,
		...Jr(Rn(Ze(e, t), r, i, a), n)
	};
}
function aa(e, t, n) {
	return {
		...Xc,
		...Jr(Ze(e, t), n)
	};
}
function oa(e, t) {
	return sa(mt(e), mt(t));
}
function sa(e, t) {
	return Math.trunc((t - e) / cc);
}
function ca(e, t) {
	return ut(t) - ut(e);
}
function la(e, t, n) {
	if (n <= 7) {
		let r = 0, i = oa({
			...e,
			...al
		}, {
			...t,
			...al
		});
		return n === 7 && ([r, i] = Te(i, 7)), {
			...Xc,
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
					s = (i -= u) - t, c = a - Ca(r, o, e.F(i)) + (n || e.O(i));
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
		...Xc,
		years: a,
		months: o,
		days: s
	};
}
function ua(e) {
	return e * gl;
}
function da(e, t) {
	let n = t + e, r = Math.sign(e), i = r < 0 ? -1 : 0, a = 0;
	for (let e = t; e !== n; e += r) a += Ua.call(this, e + i);
	return a;
}
function fa(e, t) {
	if (e !== t) throw RangeError(Ls);
	return e;
}
function pa(e, t) {
	if (!Gi(e, t)) throw RangeError(zs);
	return e;
}
function ma(e) {
	return this.I(e)[0];
}
function ha(e) {
	return this.I(e)[1];
}
function ga(e) {
	let [t] = this.u(e);
	return this.L(t);
}
function _a(e) {
	let [t] = this.u(e);
	return this.O(t);
}
function va(e) {
	let [t, n] = this.u(e);
	return this.B(t, n);
}
function ya(e) {
	let [t] = this.u(e);
	return this.G(t);
}
function ba(e) {
	let [t] = this.u(e);
	return sa(this.M(t), mt(e)) + 1;
}
function xa(e) {
	let t = Du.exec(e);
	if (!t) throw RangeError(js(e));
	return [parseInt(t[1]), !!t[2]];
}
function Sa(e, t) {
	return "M" + ac(e) + (t ? "L" : "");
}
function Ca(e, t, n) {
	return e + (t || n && e >= n ? 1 : 0);
}
function wa(e, t) {
	return e - (t && e >= t ? 1 : 0);
}
function Ta(e, t) {
	return (t + e) * (Math.sign(t) || 1) || 0;
}
function Ea(e) {
	return Rc[Oa(e)];
}
function Da(e) {
	return Bc[Oa(e)];
}
function Oa(e) {
	return Ya(e.id || "iso8601");
}
function ka(e) {
	function t(e) {
		return ((e, t) => ({
			...Ma(e, t),
			V: e.month,
			day: parseInt(e.day)
		}))(St(n, e), r);
	}
	let n = ku(e), r = Ya(e);
	return {
		id: e,
		_: Aa(t),
		J: ja(t)
	};
}
function Aa(e) {
	return ae(((t) => e(mt(t))), WeakMap);
}
function ja(e) {
	let t = e(0).year - ml;
	return ae(((n) => {
		let r, i = vt(n - t), a = 0, o = [], s = [];
		do
			i += 400 * cc;
		while ((r = e(i)).year <= n);
		do
			if (i += (1 - r.day) * cc, r.year === n && (o.push(i), s.push(r.V)), i -= cc, ++a > 100 || i < -cl) throw RangeError(Fs);
		while ((r = e(i)).year >= n);
		return {
			K: o.reverse(),
			X: rc(s.reverse())
		};
	}));
}
function Ma(e, t) {
	let n, r, i = Na(e);
	if (e.era) {
		let a = Rc[t], o = zc[t] || {};
		a !== void 0 && (n = t === "islamic" ? "ah" : e.era.normalize("NFD").toLowerCase().replace(/[^a-z0-9]/g, ""), n === "bc" || n === "b" ? n = "bce" : n === "ad" || n === "a" ? n = "ce" : n === "beforeroc" && (n = "broc"), n = o[n] || n, r = i, i = Ta(r, a[n] || 0));
	}
	return {
		era: n,
		eraYear: r,
		year: i
	};
}
function Na(e) {
	return parseInt(e.relatedYear || e.year);
}
function Pa(e) {
	return this._(e).day;
}
function Fa(e) {
	let { year: t, V: n, day: r } = this._(e), { X: i } = this.J(t);
	return [
		t,
		i[n] + 1,
		r
	];
}
function Ia(e, t, n) {
	return xt(La.call(this, e, t, n));
}
function La(e, t = 1, n = 1) {
	return this.J(e).K[t - 1] + (n - 1) * cc;
}
function Ra(e, t) {
	let n = za.call(this, e);
	return [wa(t, n), n === t];
}
function za(e) {
	let t = Ka(this, e), n = Ka(this, e - 1), r = t.length;
	if (r > n.length) {
		let e = Da(this);
		if (e < 0) return -e;
		for (let e = 0; e < r; e++) if (t[e] !== n[e]) return e + 1;
	}
}
function Ba(e) {
	let t = Va.call(this, e);
	return t > Va.call(this, e - 1) && t > Va.call(this, e + 1);
}
function Va(e) {
	return sa(La.call(this, e), La.call(this, e + 1));
}
function Ha(e, t) {
	let { K: n } = this.J(e), r = t + 1, i = n;
	return r > n.length && (r = 1, i = this.J(e + 1).K), sa(n[t - 1], i[r - 1]);
}
function Ua(e) {
	return this.J(e).K.length;
}
function Wa(e) {
	let t = this._(e);
	return [t.era, t.eraYear];
}
function Ga(e, t, n) {
	let r = this.id && Ya(this.id) === "chinese" ? ((e, t, n) => {
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
	})(e, t, n) : hl, [i, a, o] = Fa.call(this, {
		isoYear: r,
		isoMonth: gl,
		isoDay: 31
	}), s = za.call(this, i), c = a === s;
	(xe(e, wa(a, s)) || xe(Number(t), Number(c)) || xe(n, o)) === 1 && i--;
	for (let r = 0; r < 100; r++) {
		let a = i - r, o = za.call(this, a), s = Ca(e, t, o);
		if (t === (s === o) && n <= Ha.call(this, a, s)) return [a, s];
	}
}
function Ka(e, t) {
	return Object.keys(e.J(t).X);
}
function qa(e) {
	return Ja(Vc(e));
}
function Ja(e) {
	if ((e = e.toLowerCase()) !== "iso8601" && e !== Ic) {
		let t = ku(e).resolvedOptions().calendar;
		if (Ya(e) !== Ya(t)) throw RangeError(Is(e));
		return t;
	}
	return e;
}
function Ya(e) {
	return e === "islamicc" && (e = "islamic"), e.split("-")[0];
}
function Xa(e, t) {
	return (n) => n === "iso8601" ? e : n === Ic || n === Lc ? Object.assign(Object.create(e), { id: n }) : Object.assign(Object.create(t), Ou(n));
}
function Za(e, t, n, r) {
	let i = ao(n, r, jc, [], Sc);
	if (i.timeZone !== void 0) {
		let r = n.ee(i), a = so(i), o = e(i.timeZone);
		return {
			epochNanoseconds: pr(t(o), {
				...r,
				...a
			}, i.offset === void 0 ? void 0 : ri(i.offset)),
			timeZone: o
		};
	}
	return {
		...n.ee(i),
		...al
	};
}
function Qa(e, t, n, r, i, a) {
	let o = ao(n, i, jc, bc, Sc), s = e(o.timeZone), [c, l, u] = Vt(a), d = n.ee(o, en(c)), f = so(o, c);
	return on(pr(t(s), {
		...d,
		...f
	}, o.offset === void 0 ? void 0 : ri(o.offset), l, u), s, r);
}
function $a(e, t, n) {
	let r = ao(e, t, jc, [], _c), i = R(n);
	return sn(ct({
		...e.ee(r, en(i)),
		...so(r, i)
	}));
}
function eo(e, t, n, r = []) {
	let i = ao(e, t, jc, r);
	return e.ee(i, n);
}
function to(e, t, n, r) {
	let i = ao(e, t, kc, r);
	return e.ne(i, n);
}
function no(e, t, n, r) {
	let i = ao(e, n, jc, Oc);
	return t && i.month !== void 0 && i.monthCode === void 0 && i.year === void 0 && (i.year = hl), e.te(i, r);
}
function ro(e, t) {
	return dn(so(oo(e, vc, [], 1), R(t)));
}
function io(e) {
	let t = oo(e, Gc);
	return fn(Gr({
		...Xc,
		...t
	}));
}
function ao(e, t, n, r = [], i = []) {
	return oo(t, [...e.fields(n), ...i].sort(), r);
}
function oo(e, t, n, r = !n) {
	let i = {}, a, o = 0;
	for (let r of t) {
		if (r === a) throw RangeError(bs(r));
		if (r === "constructor" || r === "__proto__") throw RangeError(ys(r));
		let t = e[r];
		if (t !== void 0) o = 1, Iu[r] && (t = Iu[r](t, r)), i[r] = t;
		else if (n) {
			if (n.includes(r)) throw TypeError(vs(r));
			i[r] = Pc[r];
		}
		a = r;
	}
	if (r && !o) throw TypeError(xs(t));
	return i;
}
function so(e, t) {
	return Bt(Lu({
		...Pc,
		...e
	}), t);
}
function co(e, t, n, r, i) {
	let { calendar: a, timeZone: o } = n, s = e(a), c = t(o), l = [...s.fields(jc), ...xc].sort(), u = ((e) => {
		let t = au(e, z), n = or(t.offsetNanoseconds), r = Fu(e.calendar), [i, a, o] = r.u(t), [s, c] = r.m(i, a), l = Sa(s, c);
		return {
			...Ru(t),
			year: i,
			monthCode: l,
			day: o,
			offset: n
		};
	})(n), d = oo(r, l), f = s.oe(u, d), p = {
		...u,
		...d
	}, [m, h, g] = Vt(i, 2);
	return on(pr(c, {
		...s.ee(f, en(m)),
		...Bt(Lu(p), m)
	}, ri(p.offset), h, g), o, a);
}
function lo(e, t, n, r) {
	let i = e(t.calendar), a = [...i.fields(jc), ..._c].sort(), o = {
		...Oo(s = t),
		hour: s.isoHour,
		minute: s.isoMinute,
		second: s.isoSecond,
		millisecond: s.isoMillisecond,
		microsecond: s.isoMicrosecond,
		nanosecond: s.isoNanosecond
	};
	var s;
	let c = oo(n, a), l = R(r), u = i.oe(o, c), d = {
		...o,
		...c
	};
	return sn(ct({
		...i.ee(u, en(l)),
		...Bt(Lu(d), l)
	}));
}
function uo(e, t, n, r) {
	let i = e(t.calendar), a = i.fields(jc).sort(), o = Oo(t), s = oo(n, a), c = i.oe(o, s);
	return i.ee(c, r);
}
function fo(e, t, n, r) {
	let i = e(t.calendar), a = i.fields(kc).sort(), o = ((e) => {
		let t = Fu(e.calendar), [n, r] = t.u(e), [i, a] = t.m(n, r);
		return {
			year: n,
			monthCode: Sa(i, a)
		};
	})(t), s = oo(n, a), c = i.oe(o, s);
	return i.ne(c, r);
}
function po(e, t, n, r) {
	let i = e(t.calendar), a = i.fields(jc).sort(), o = ((e) => {
		let t = Fu(e.calendar), [n, r, i] = t.u(e), [a, o] = t.m(n, r);
		return {
			monthCode: Sa(a, o),
			day: i
		};
	})(t), s = oo(n, a), c = i.oe(o, s);
	return i.te(c, r);
}
function mo(e, t, n) {
	return dn(((e, t, n) => so({
		...pe(vc, e),
		...oo(t, vc)
	}, R(n)))(e, t, n));
}
function ho(e, t) {
	return fn((n = e, r = t, Gr({
		...n,
		...oo(r, Gc)
	})));
	var n, r;
}
function go(e, t) {
	let n = ao(e, t, Nc);
	return e.te(n);
}
function _o(e, t, n) {
	let r = ao(e, t, Ac);
	return e.ne(r, n);
}
function vo(e, t, n, r, i) {
	t = pe(n = e.fields(n), t), r = oo(r, i = e.fields(i), []);
	let a = e.oe(t, r);
	return a = oo(a, [...n, ...i].sort(), []), e.ee(a);
}
function yo(e, t) {
	let n = R(t), r = wo(this, e), i = To(this, e, r, n), a = Eo(this, e, i, r, n);
	return cn(st(this.U(r, i, a)), this.id || "iso8601");
}
function bo(e, t) {
	let n = R(t), r = wo(this, e), i = To(this, e, r, n);
	return ln(ot(this.U(r, i, 1)), this.id || "iso8601");
}
function xo(e, t) {
	let n = R(t), r, i, a, o = e.eraYear !== void 0 || e.year !== void 0 ? wo(this, e) : void 0, s = !this.id;
	if (o === void 0 && s && (o = hl), o !== void 0) {
		let t = To(this, e, o, n);
		r = Eo(this, e, t, o, n);
		let s = this.F(o);
		i = wa(t, s), a = t === s;
	} else {
		if (e.monthCode === void 0) throw TypeError(Ns);
		if ([i, a] = xa(e.monthCode), this.id && this.id !== Ic && this.id !== Lc) if (this.id && Ya(this.id) === "coptic" && n === 0) {
			let t = a || i !== 13 ? 30 : 6;
			r = e.day, r = Se(r, 1, t);
		} else if (this.id && Ya(this.id) === "chinese" && n === 0) {
			let t = !a || i !== 1 && i !== 9 && i !== 10 && i !== 11 && i !== 12 ? 30 : 29;
			r = e.day, r = Se(r, 1, t);
		} else r = e.day;
		else r = Eo(this, e, To(this, e, hl, n), hl, n);
	}
	let c = this.R(i, a, r);
	if (!c) throw RangeError("Cannot guess year");
	let [l, u] = c;
	return un(st(this.U(l, u, r)), this.id || "iso8601");
}
function So(e) {
	return Ea(this) && e.includes("year") ? [...e, ...Cc] : e;
}
function Co(e, t) {
	let n = Object.assign(Object.create(null), e);
	return Do(n, t, Dc), Ea(this) && (Do(n, t, wc), this.id === Lc && Do(n, t, Mc, Cc)), n;
}
function wo(e, t) {
	let n = Ea(e), r = zc[e.id || ""] || {}, { era: i, eraYear: a, year: o } = t;
	if (i !== void 0 || a !== void 0) {
		if (i === void 0 || a === void 0) throw TypeError(Ds);
		if (!n) throw RangeError(Es);
		let e = n[r[i] || i];
		if (e === void 0) throw RangeError(ks(i));
		let t = Ta(a, e);
		if (o !== void 0 && o !== t) throw RangeError(Os);
		o = t;
	} else if (o === void 0) throw TypeError(As(n));
	return o;
}
function To(e, t, n, r) {
	let { month: i, monthCode: a } = t;
	if (a !== void 0) {
		let t = ((e, t, n, r) => {
			let i = e.F(n), [a, o] = xa(t), s = Ca(a, o, i);
			if (o) {
				let t = Da(e);
				if (t === void 0) throw RangeError(Ps);
				if (t > 0) {
					if (s > t) throw RangeError(Ps);
					if (i === void 0) {
						if (r === 1) throw RangeError(Ps);
						s--;
					}
				} else if (s !== -t || i === void 0 && r === 1) throw RangeError(Ps);
			}
			return s;
		})(e, a, n, r);
		if (i !== void 0 && i !== t) throw RangeError(Ms);
		i = t, r = 1;
	} else if (i === void 0) throw TypeError(Ns);
	return re("month", i, 1, e.O(n), r);
}
function Eo(e, t, n, r, i) {
	return F(t, "day", 1, e.B(r, n), i);
}
function Do(e, t, n, r) {
	let i = 0, a = [];
	for (let e of n) t[e] === void 0 ? a.push(e) : i = 1;
	if (Object.assign(e, t), i) for (let t of r || a) delete e[t];
}
function Oo(e) {
	let t = Fu(e.calendar), [n, r, i] = t.u(e), [a, o] = t.m(n, r);
	return {
		year: n,
		monthCode: Sa(a, o),
		day: i
	};
}
function ko(e) {
	return an(lt(et(Ue(e))));
}
function Ao(e, t, n, r, i = Fc) {
	return on(lt(et(Ue(n))), t(r), e(i));
}
function jo(e, t, n, r, i = 0, a = 0, o = 0, s = 0, c = 0, l = 0, u = Fc) {
	return sn(ct(It(de(Ge, ue(tl, [
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
function Mo(e, t, n, r, i = Fc) {
	return cn(st(Lt(de(Ge, {
		isoYear: t,
		isoMonth: n,
		isoDay: r
	}))), e(i));
}
function No(e, t, n, r = Fc, i = 1) {
	let a = Ge(t), o = Ge(n), s = e(r);
	return ln(ot(Lt({
		isoYear: a,
		isoMonth: o,
		isoDay: Ge(i)
	})), s);
}
function Po(e, t, n, r = Fc, i = hl) {
	let a = Ge(t), o = Ge(n), s = e(r);
	return un(st(Lt({
		isoYear: Ge(i),
		isoMonth: a,
		isoDay: o
	})), s);
}
function Fo(e = 0, t = 0, n = 0, r = 0, i = 0, a = 0) {
	return dn(Bt(de(Ge, ue($c, [
		e,
		t,
		n,
		r,
		i,
		a
	])), 1));
}
function Io(e = 0, t = 0, n = 0, r = 0, i = 0, a = 0, o = 0, s = 0, c = 0, l = 0) {
	return fn(Gr(de(Ke, ue(Wc, [
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
function Lo(e, t, n = Fc) {
	return on(e.epochNanoseconds, t, n);
}
function Ro(e) {
	return an(e.epochNanoseconds);
}
function zo(e, t) {
	return sn(au(t, e));
}
function Bo(e, t) {
	return cn(au(t, e));
}
function Vo(e, t) {
	return dn(au(t, e));
}
function Ho(e, t, n, r) {
	return on(lt(((e, t, n, r) => {
		let i = ((e) => zl(Qt(e)))(r);
		return mr(e(t), n, i);
	})(e, n, t, r)), n, t.calendar);
}
function Uo(e, t, n, r, i) {
	let a = e(i.timeZone), o = i.plainTime, s = o === void 0 ? void 0 : t(o), c = n(a), l;
	return l = s ? mr(c, {
		...r,
		...s
	}) : hr(c, {
		...r,
		...al
	}), on(l, a, r.calendar);
}
function Wo(e, t = al) {
	return sn(ct({
		...e,
		...t
	}));
}
function Go(e, t, n) {
	return _o(e(t.calendar), n);
}
function Ko(e, t, n) {
	return go(e(t.calendar), n);
}
function qo(e, t, n, r) {
	return ((e, t, n) => vo(e, t, Ac, Le(n), Oc))(e(t.calendar), n, r);
}
function Jo(e, t, n, r) {
	return ((e, t, n) => vo(e, t, Nc, Le(n), Tc))(e(t.calendar), n, r);
}
function Yo(e) {
	return an(lt(tt(Ke(e), dc)));
}
function Xo(e) {
	return an(lt(et(Ue(e))));
}
function Zo(e, t, n) {
	let r = new Set(n);
	return (i, a) => {
		let o = n && me(i, n);
		if (!me(i = ((e, t) => {
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
		return n && (i.timeZone = eu, ["full", "long"].includes(i.ie) && (i.ie = "medium")), i;
	};
}
function Qo(e, t = $o, n = 0) {
	let [r, , , i] = e;
	return (a, o = md, ...s) => {
		let c = t(i && i(...s), a, o, r, n);
		return [c, ...ts(e, c.resolvedOptions(), s)];
	};
}
function $o(e, t, n, r, i) {
	if (n = r(n, i), e) {
		if (n.timeZone !== void 0) throw TypeError(nc);
		n.timeZone = e;
	}
	return new pl(t, n);
}
function es() {
	return new pl(void 0, { calendar: Fc }).resolvedOptions().calendar === Fc;
}
function ts(e, t, n) {
	let [, r, i] = e;
	return n.map(((e) => (e.calendar && ((e, t, n) => {
		if ((n || e !== "iso8601") && e !== t) throw RangeError(Ls);
	})(e.calendar, t.calendar, i), r(e, t))));
}
function ns(e, t, n) {
	let r = t.timeZone, i = e(r), a = {
		...au(t, i),
		...n || al
	}, o;
	return o = n ? pr(i, a, a.offsetNanoseconds, 2) : hr(i, a), on(o, r, t.calendar);
}
function rs(e, t = al) {
	return sn(ct({
		...e,
		...t
	}));
}
function is(e, t) {
	return {
		...e,
		calendar: t
	};
}
function as(e, t) {
	return {
		...e,
		timeZone: t
	};
}
function os(e) {
	let t = ss();
	return bt(t, e.N(t));
}
function ss() {
	return tt(Date.now(), dc);
}
function cs() {
	return new pl().resolvedOptions().timeZone;
}
var ls = (e, t) => `Non-integer ${e}: ${t}`, us = (e, t) => `Non-positive ${e}: ${t}`, ds = (e, t) => `Non-finite ${e}: ${t}`, fs = (e) => `Cannot convert bigint to ${e}`, ps = (e) => `Invalid bigint: ${e}`, ms = "Cannot convert Symbol to string", hs = "Invalid object", gs = (e, t, n, r, i) => i ? gs(e, i[t], i[n], i[r]) : _s(e, t) + `; must be between ${n}-${r}`, _s = (e, t) => `Invalid ${e}: ${t}`, vs = (e) => `Missing ${e}`, ys = (e) => `Invalid field ${e}`, bs = (e) => `Duplicate field ${e}`, xs = (e) => "No valid fields: " + e.join(), Ss = "Invalid bag", Cs = (e, t, n) => _s(e, t) + "; must be " + Object.keys(n).join(), ws = "Cannot use valueOf", Ts = "Invalid calling context", Es = "Forbidden era/eraYear", Ds = "Mismatching era/eraYear", Os = "Mismatching year/eraYear", ks = (e) => `Invalid era: ${e}`, As = (e) => "Missing year" + (e ? "/era/eraYear" : ""), js = (e) => `Invalid monthCode: ${e}`, Ms = "Mismatching month/monthCode", Ns = "Missing month/monthCode", Ps = "Invalid leap month", Fs = "Invalid protocol results", Is = (e) => _s("Calendar", e), Ls = "Mismatching Calendars", Rs = (e) => _s("TimeZone", e), zs = "Mismatching TimeZones", Bs = "Forbidden ICU TimeZone", Vs = "Out-of-bounds offset", Hs = "Out-of-bounds TimeZone gap", Us = "Invalid TimeZone offset", Ws = "Ambiguous offset", Gs = "Out-of-bounds date", Ks = "Out-of-bounds duration", qs = "Cannot mix duration signs", Js = "Missing relativeTo", Ys = "Cannot use large units", Xs = "Required smallestUnit or largestUnit", Zs = "smallestUnit > largestUnit", Qs = (e) => `Cannot parse: ${e}`, $s = (e) => `Invalid substring: ${e}`, ec = (e) => `Cannot format ${e}`, tc = "Mismatching types for formatting", nc = "Cannot specify TimeZone", rc = /* @__PURE__ */ L(fe, ((e, t) => t)), ic = /* @__PURE__ */ L(fe, ((e, t, n) => n)), ac = /* @__PURE__ */ L(be, 2), oc = {
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
}, sc = /* @__PURE__ */ Object.keys(oc), cc = 864e5, lc = 1e3, uc = 1e3, dc = 1e6, fc = 1e9, pc = 6e10, mc = 36e11, hc = 864e11, gc = [
	1,
	uc,
	dc,
	fc,
	pc,
	mc,
	hc
], _c = /* @__PURE__ */ sc.slice(0, 6), vc = /* @__PURE__ */ ye(_c), yc = ["offset"], bc = ["timeZone"], xc = /* @__PURE__ */ _c.concat(yc), Sc = /* @__PURE__ */ xc.concat(bc), Cc = ["era", "eraYear"], wc = /* @__PURE__ */ Cc.concat(["year"]), Tc = ["year"], Ec = ["monthCode"], Dc = /* @__PURE__ */ ["month"].concat(Ec), Oc = ["day"], kc = /* @__PURE__ */ Dc.concat(Tc), Ac = /* @__PURE__ */ Ec.concat(Tc), jc = /* @__PURE__ */ Oc.concat(kc), Mc = /* @__PURE__ */ Oc.concat(Dc), Nc = /* @__PURE__ */ Oc.concat(Ec), Pc = /* @__PURE__ */ ic(_c, 0), Fc = "iso8601", Ic = "gregory", Lc = "japanese", Rc = {
	[Ic]: {
		"gregory-inverse": -1,
		gregory: 0
	},
	[Lc]: {
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
}, zc = {
	[Ic]: {
		bce: "gregory-inverse",
		ce: "gregory"
	},
	[Lc]: {
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
}, Bc = {
	chinese: 13,
	dangi: 13,
	hebrew: -6
}, Vc = /* @__PURE__ */ L(Re, "string"), Hc = /* @__PURE__ */ L(Re, "boolean"), Uc = /* @__PURE__ */ L(Re, "number"), Wc = /* @__PURE__ */ sc.map(((e) => e + "s")), Gc = /* @__PURE__ */ ye(Wc), Kc = /* @__PURE__ */ Wc.slice(0, 6), qc = /* @__PURE__ */ Wc.slice(6), Jc = /* @__PURE__ */ qc.slice(1), Yc = /* @__PURE__ */ rc(Wc), Xc = /* @__PURE__ */ ic(Wc, 0), Zc = /* @__PURE__ */ ic(Kc, 0), Qc = /* @__PURE__ */ L(ge, Wc), $c = [
	"isoNanosecond",
	"isoMicrosecond",
	"isoMillisecond",
	"isoSecond",
	"isoMinute",
	"isoHour"
], el = [
	"isoDay",
	"isoMonth",
	"isoYear"
], tl = /* @__PURE__ */ $c.concat(el), nl = /* @__PURE__ */ ye(el), rl = /* @__PURE__ */ ye($c), il = /* @__PURE__ */ ye(tl), al = /* @__PURE__ */ ic(rl, 0), ol = /* @__PURE__ */ L(ge, tl), sl = 1e8, cl = sl * cc, ll = [sl, 0], ul = [-sl, 0], dl = 275760, fl = -271821, pl = Intl.DateTimeFormat, ml = 1970, hl = 1972, gl = 12, _l = /* @__PURE__ */ vt(1868, 9, 8), vl = /* @__PURE__ */ ae(Ft, WeakMap), yl = "smallestUnit", bl = "unit", xl = "roundingMode", Sl = "roundingIncrement", Cl = "fractionalSecondDigits", wl = "relativeTo", Tl = "direction", El = {
	constrain: 0,
	reject: 1
}, Dl = /* @__PURE__ */ Object.keys(El), Ol = {
	compatible: 0,
	reject: 1,
	earlier: 2,
	later: 3
}, kl = {
	reject: 0,
	use: 1,
	prefer: 2,
	ignore: 3
}, Al = {
	auto: 0,
	never: 1,
	critical: 2,
	always: 3
}, jl = {
	auto: 0,
	never: 1,
	critical: 2
}, Ml = {
	auto: 0,
	never: 1
}, Nl = {
	floor: 0,
	halfFloor: 1,
	ceil: 2,
	halfCeil: 3,
	trunc: 4,
	halfTrunc: 5,
	expand: 6,
	halfExpand: 7,
	halfEven: 8
}, Pl = {
	previous: -1,
	next: 1
}, Fl = /* @__PURE__ */ L(tn, yl), Il = /* @__PURE__ */ L(tn, "largestUnit"), Ll = /* @__PURE__ */ L(tn, bl), Rl = /* @__PURE__ */ L(nn, "overflow", El), zl = /* @__PURE__ */ L(nn, "disambiguation", Ol), Bl = /* @__PURE__ */ L(nn, "offset", kl), Vl = /* @__PURE__ */ L(nn, "calendarName", Al), Hl = /* @__PURE__ */ L(nn, "timeZoneName", jl), Ul = /* @__PURE__ */ L(nn, "offset", Ml), Wl = /* @__PURE__ */ L(nn, xl, Nl), Gl = "PlainYearMonth", Kl = "PlainMonthDay", ql = "PlainDate", Jl = "PlainDateTime", Yl = "PlainTime", Xl = "ZonedDateTime", Zl = "Instant", Ql = "Duration", $l = [
	Math.floor,
	(e) => Oe(e) ? Math.floor(e) : Math.round(e),
	Math.ceil,
	(e) => Oe(e) ? Math.ceil(e) : Math.round(e),
	Math.trunc,
	(e) => Oe(e) ? Math.trunc(e) || 0 : Math.round(e),
	(e) => e < 0 ? Math.floor(e) : Math.ceil(e),
	(e) => Math.sign(e) * Math.round(Math.abs(e)) || 0,
	(e) => Oe(e) ? (e = Math.trunc(e) || 0) + e % 2 : Math.round(e)
], eu = "UTC", tu = 5184e3, nu = /* @__PURE__ */ _t(1847), ru = /* @__PURE__ */ _t((() => {
	let e = /* @__PURE__ */ new Date();
	return (e.getTime() === 0 ? 2040 : e.getUTCFullYear()) + 10;
})()), iu = /0+$/, au = /* @__PURE__ */ ae(fr, WeakMap), ou = 2 ** 32 - 1, z = /* @__PURE__ */ ae(((e) => {
	let t = ji(e);
	return typeof t == "object" ? new cu(t) : new su(t || 0);
})), su = class {
	constructor(e) {
		this.j = e;
	}
	N() {
		return this.j;
	}
	v(e) {
		return ((e) => {
			let t = ht({
				...e,
				...al
			});
			if (!t || Math.abs(t[0]) > 1e8) throw RangeError(Gs);
		})(e), [gt(e, this.j)];
	}
	l() {}
}, cu = class {
	constructor(e) {
		this.ae = ((e) => {
			function t(e) {
				let [t, s] = $r(Se(e, a, o)), c = r(t), l = r(s);
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
			let r = ae(e), i = ae(Qr), a = nu, o = ru;
			return {
				se(e) {
					let n = t(e - 86400), r = t(e + 86400), i = e - n, a = e - r;
					if (n === r) return [i];
					let o = t(i);
					return o === t(a) ? [e - o] : n > r ? [i, a] : [];
				},
				ue: t,
				l(e, t) {
					let s = Se(e, a, o), [c, l] = $r(s), u = tu * t, d = t < 0 ? () => l > a || (a = s, 0) : () => c < o || (o = s, 0);
					for (; d();) {
						let a = r(c), o = r(l);
						if (a !== o) {
							let r = i(c, l);
							n(r, a, o);
							let s = r[0];
							if ((xe(s, e) || 1) === t) return s;
						}
						c += u, l += u;
					}
				}
			};
		})(((e) => (t) => {
			let n = St(e, t * lc);
			return _t(Na(n), parseInt(n.month), parseInt(n.day), parseInt(n.hour), parseInt(n.minute), parseInt(n.second)) - t;
		})(e));
	}
	N(e) {
		return this.ae.ue(ft(e)) * fc;
	}
	v(e) {
		let [t, n] = [_t((r = e).isoYear, r.isoMonth, r.isoDay, r.isoHour, r.isoMinute, r.isoSecond), r.isoMillisecond * dc + r.isoMicrosecond * uc + r.isoNanosecond];
		var r;
		return this.ae.se(t).map(((e) => lt(Xe(tt(e, fc), n))));
	}
	l(e, t) {
		let [n, r] = pt(e), i = this.ae.l(n + (t > 0 || r ? 1 : 0), t);
		if (i !== void 0) return tt(i, fc);
	}
}, lu = "([+-])", uu = "(?:[.,](\\d{1,9}))?", du = `(?:(?:${lu}(\\d{6}))|(\\d{4}))-?(\\d{2})`, fu = "(\\d{2})(?::?(\\d{2})(?::?(\\d{2})" + uu + ")?)?", pu = lu + fu, mu = du + "-?(\\d{2})(?:[T ](\\d{2})(?::?(\\d{2})(?::?(\\d{2})(?:[.,](\\d{1,9}))?)?)?(Z|" + pu + ")?)?", hu = "\\[(!?)([^\\]]*)\\]", gu = `((?:${hu}){0,9})`, _u = /* @__PURE__ */ Ti(du + gu), vu = /* @__PURE__ */ Ti("(?:--)?(\\d{2})-?(\\d{2})" + gu), yu = /* @__PURE__ */ Ti(mu + gu), bu = /* @__PURE__ */ Ti("T?" + fu + "(?:" + pu + ")?" + gu), xu = /* @__PURE__ */ Ti(pu), Su = /* @__PURE__ */ new RegExp(hu, "g"), Cu = /* @__PURE__ */ Ti(`${lu}?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?:(\\d+)${uu}H)?(?:(\\d+)${uu}M)?(?:(\\d+)${uu}S)?)?`), wu = /* @__PURE__ */ ae(((e) => new pl("en", {
	calendar: Fc,
	timeZone: e,
	era: "short",
	year: "numeric",
	month: "numeric",
	day: "numeric",
	hour: "numeric",
	minute: "numeric",
	second: "numeric",
	hour12: 0
}))), Tu = /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/, Eu = /[^\w\/:+-]+/, Du = /^M(\d{2})(L?)$/, Ou = /* @__PURE__ */ ae(ka), ku = /* @__PURE__ */ ae(((e) => new pl("en", {
	calendar: e,
	timeZone: eu,
	era: "short",
	year: "numeric",
	month: "short",
	day: "numeric",
	hour12: 0
}))), Au = {
	P: Dr,
	h: la,
	ee: yo,
	ne: bo,
	te: xo,
	fields: So,
	oe: Co,
	inLeapYear: ga,
	monthsInYear: _a,
	daysInMonth: va,
	daysInYear: ya,
	dayOfYear: ba,
	era(e) {
		return this.$(e)[0];
	},
	eraYear(e) {
		return this.$(e)[1];
	},
	monthCode(e) {
		let [t, n] = this.u(e), [r, i] = this.m(t, n);
		return Sa(r, i);
	},
	dayOfWeek: Nt,
	daysInWeek: Ot
}, ju = {
	u: wt,
	$: Pt,
	m: Tt
}, Mu = /* @__PURE__ */ Object.assign({}, Au, /* @__PURE__ */ Object.assign({}, {
	dayOfYear: ba,
	u: wt,
	M: vt
}, {
	weekOfYear: ma,
	yearOfWeek: ha,
	I(e) {
		function t(e) {
			return (7 - e < r ? 7 : 0) - e;
		}
		function n(e) {
			let n = jt(f + e), r = e || 1;
			return u = (n + (t(we(c + n * r, 7)) - l) * r) / 7;
		}
		let r = this.id ? 1 : 4, i = Nt(e), a = this.dayOfYear(e), o = we(i - 1, 7), s = a - 1, c = we(o - s, 7), l = t(c), u, d = Math.floor((s - l) / 7) + 1, f = e.isoYear;
		return d ? d > n(0) && (d = 1, f++) : (d = n(-1), f--), [
			d,
			f,
			u
		];
	}
}), {
	u: wt,
	$: Pt,
	m: Tt,
	R: Et,
	L: Mt,
	F: _e,
	O: kt,
	q: ua,
	B: At,
	G: jt,
	U: Dt,
	M: vt,
	p: kr,
	year(e) {
		return e.isoYear;
	},
	month(e) {
		return e.isoMonth;
	},
	day: Ct
}), Nu = {
	u: Fa,
	$: Wa,
	m: Ra
}, Pu = /* @__PURE__ */ Object.assign({}, Au, /* @__PURE__ */ Object.assign({}, {
	dayOfYear: ba,
	u: Fa,
	M: La
}, { I() {
	return [];
} }, {
	weekOfYear: ma,
	yearOfWeek: ha
}), {
	u: Fa,
	$: Wa,
	m: Ra,
	R: Ga,
	L: Ba,
	F: za,
	O: Ua,
	q: da,
	B: Ha,
	G: Va,
	U: Ia,
	M: La,
	p: Ar,
	year(e) {
		return this._(e).year;
	},
	month(e) {
		let { year: t, V: n } = this._(e), { X: r } = this.J(t);
		return r[n] + 1;
	},
	day: Pa
}), Fu = /* @__PURE__ */ Xa(ju, Nu), B = /* @__PURE__ */ Xa(Mu, Pu), Iu = /* @__PURE__ */ Object.assign({}, {
	era: He,
	eraYear: Ge,
	year: Ge,
	month: qe,
	monthCode(e) {
		let t = He(e);
		return xa(t), t;
	},
	day: qe
}, /* @__PURE__ */ ic(_c, Ge), /* @__PURE__ */ ic(Wc, Ke), { offset(e) {
	let t = He(e);
	return ri(t), t;
} }), Lu = /* @__PURE__ */ L(I, _c, $c), Ru = /* @__PURE__ */ L(I, $c, _c), zu = "numeric", Bu = ["timeZoneName"], Vu = {
	month: zu,
	day: zu
}, Hu = {
	year: zu,
	month: zu
}, Uu = /* @__PURE__ */ Object.assign({}, Hu, { day: zu }), Wu = {
	hour: zu,
	minute: zu,
	second: zu
}, Gu = /* @__PURE__ */ Object.assign({}, Uu, Wu), Ku = /* @__PURE__ */ Object.assign({}, Gu, { timeZoneName: "short" }), qu = /* @__PURE__ */ Object.keys(Hu), Ju = /* @__PURE__ */ Object.keys(Vu), Yu = /* @__PURE__ */ Object.keys(Uu), Xu = /* @__PURE__ */ Object.keys(Wu), Zu = ["dateStyle"], Qu = /* @__PURE__ */ qu.concat(Zu), $u = /* @__PURE__ */ Ju.concat(Zu), ed = /* @__PURE__ */ Yu.concat(Zu, ["weekday"]), td = /* @__PURE__ */ Xu.concat([
	"dayPeriod",
	"timeStyle",
	"fractionalSecondDigits"
]), nd = /* @__PURE__ */ ed.concat(td), rd = /* @__PURE__ */ Bu.concat(td), id = /* @__PURE__ */ Bu.concat(ed), ad = /* @__PURE__ */ Bu.concat(["day", "weekday"], td), od = /* @__PURE__ */ Bu.concat(["year", "weekday"], td), sd = /* @__PURE__ */ Zo(nd, Gu), cd = /* @__PURE__ */ Zo(nd, Ku), ld = /* @__PURE__ */ Zo(nd, Gu, Bu), ud = /* @__PURE__ */ Zo(ed, Uu, rd), dd = /* @__PURE__ */ Zo(td, Wu, id), fd = /* @__PURE__ */ Zo(Qu, Hu, ad), pd = /* @__PURE__ */ Zo($u, Vu, od), md = {}, hd = /* @__PURE__ */ es(), gd = [sd, pn], _d = [
	cd,
	pn,
	0,
	(e, t) => {
		let n = e.timeZone;
		if (t && t.timeZone !== n) throw RangeError(zs);
		return n;
	}
], vd = [ld, mt], yd = [ud, mt], bd = [dd, (e) => ut(e) / dc], xd = [
	fd,
	mt,
	hd
], Sd = [
	pd,
	mt,
	hd
];
//#endregion
//#region ../../node_modules/temporal-polyfill/chunks/classApi.js
function Cd(e, t, n, r, i, a) {
	function o(...e) {
		if (!(this instanceof o)) throw TypeError(Ts);
		{
			let n = t(...e);
			Xd(this, n), Td(this, n, a);
		}
	}
	function s(e, t) {
		return Object.defineProperties((function(...t) {
			return e.call(this, c(this), ...t);
		}), oe(t));
	}
	function c(t) {
		let n = Yd(t);
		if (!n || n.branding !== e) throw TypeError(Ts);
		return n;
	}
	return Object.defineProperties(o.prototype, {
		...ce(de(s, n)),
		...se(de(s, r)),
		...le("Temporal." + e)
	}), Object.defineProperties(o, {
		...se(i),
		...oe(e)
	}), [
		o,
		(e) => {
			let t = Object.create(o.prototype);
			return Xd(t, e), Td(t, e, a), t;
		},
		c
	];
}
function wd(e) {
	if (Yd(e) || e.calendar !== void 0 || e.timeZone !== void 0) throw TypeError(Ss);
	return e;
}
function Td(e, t, n) {
	Td.name === "dbg" && Object.defineProperty(e, "o", {
		value: n(t),
		writable: 0,
		enumerable: 0,
		configurable: 0
	});
}
function Ed(e) {
	return Dd(e) || "iso8601";
}
function Dd(e) {
	let { calendar: t } = e;
	if (t !== void 0) return Od(t);
}
function Od(e) {
	if (ie(e)) {
		let { calendar: t } = Yd(e) || {};
		if (!t) throw TypeError(Is(e));
		return t;
	}
	return ((e) => Ja(di(Vc(e))))(e);
}
function kd(e) {
	let t = {};
	for (let n in e) t[n] = (e) => {
		let { calendar: t } = e;
		return B(t)[n](e);
	};
	return t;
}
function Ad() {
	throw TypeError(ws);
}
function jd(e) {
	if (ie(e)) {
		let { timeZone: t } = Yd(e) || {};
		if (!t) throw TypeError(Rs(e));
		return t;
	}
	return ((e) => ki(fi(Vc(e))))(e);
}
function Md(e) {
	if (ie(e)) {
		let t = Yd(e);
		return t && t.branding === "Duration" ? t : io(e);
	}
	return ui(e);
}
function Nd(e) {
	if (e !== void 0) {
		if (ie(e)) {
			let t = Yd(e) || {};
			switch (t.branding) {
				case Xl:
				case ql: return t;
				case Jl: return cn(t);
			}
			let n = Ed(e);
			return {
				...Za(jd, z, B(n), e),
				calendar: n
			};
		}
		return ti(e);
	}
}
function Pd(e, t) {
	if (ie(e)) {
		let n = Yd(e) || {};
		switch (n.branding) {
			case Yl: return R(t), n;
			case Jl: return R(t), dn(n);
			case Xl: return R(t), Vo(z, n);
		}
		return ro(e, t);
	}
	let n = li(e);
	return R(t), n;
}
function Fd(e) {
	return e === void 0 ? void 0 : Pd(e);
}
function Id(e, t) {
	if (ie(e)) {
		let n = Yd(e) || {};
		switch (n.branding) {
			case Jl: return R(t), n;
			case ql: return R(t), sn({
				...n,
				...al
			});
			case Xl: return R(t), zo(z, n);
		}
		return $a(B(Ed(e)), e, t);
	}
	let n = ii(e);
	return R(t), n;
}
function Ld(e, t) {
	if (ie(e)) {
		let n = Yd(e);
		if (n && n.branding === "PlainMonthDay") return R(t), n;
		let r = Dd(e);
		return no(B(r || "iso8601"), !r, e, t);
	}
	let n = ci(B, e);
	return R(t), n;
}
function Rd(e, t) {
	if (ie(e)) {
		let n = Yd(e);
		return n && n.branding === "PlainYearMonth" ? (R(t), n) : to(B(Ed(e)), e, t);
	}
	let n = oi(B, e);
	return R(t), n;
}
function zd(e, t) {
	if (ie(e)) {
		let n = Yd(e) || {};
		switch (n.branding) {
			case ql: return R(t), n;
			case Jl: return R(t), cn(n);
			case Xl: return R(t), Bo(z, n);
		}
		return eo(B(Ed(e)), e, t);
	}
	let n = ai(e);
	return R(t), n;
}
function Bd(e, t) {
	if (ie(e)) {
		let n = Yd(e);
		if (n && n.branding === "ZonedDateTime") return Vt(t), n;
		let r = Ed(e);
		return Qa(jd, z, B(r), r, e, t);
	}
	return ni(e, t);
}
function Vd(e) {
	return de(((e) => (t) => e(Hd(t))), e);
}
function Hd(e) {
	return au(e, z);
}
function Ud(e) {
	if (ie(e)) {
		let t = Yd(e);
		if (t) switch (t.branding) {
			case Zl: return t;
			case Xl: return an(t.epochNanoseconds);
		}
	}
	return ei(e);
}
function Wd() {
	function e(e, n) {
		return new t(e, n);
	}
	function t(e, t = Object.create(null)) {
		Bf.set(this, ((e, t) => {
			let n = new pl(e, t), r = n.resolvedOptions(), i = r.locale, a = pe(Object.keys(t), r), o = ae(qd), s = (e, ...t) => {
				if (e) {
					if (t.length !== 2) throw TypeError(tc);
					for (let e of t) if (e === void 0) throw TypeError(tc);
				}
				e || t[0] !== void 0 || (t = []);
				let r = t.map(((e) => Yd(e) || Number(e))), s, c = 0;
				for (let e of r) {
					let t = typeof e == "object" ? e.branding : void 0;
					if (c++ && t !== s) throw TypeError(tc);
					s = t;
				}
				return s ? o(s)(i, a, ...r) : [n, ...r];
			};
			return s.i = n, s;
		})(e, t));
	}
	let n = pl.prototype, r = Object.getOwnPropertyDescriptors(n), i = Object.getOwnPropertyDescriptors(pl);
	for (let t in r) {
		let n = r[t], i = t.startsWith("format") && Gd(t);
		typeof n.value == "function" ? n.value = t === "constructor" ? e : i || Kd(t) : i && (n.get = function() {
			if (!Bf.has(this)) throw TypeError("Invalid calling context");
			return (...e) => i.apply(this, e);
		}, Object.defineProperties(n.get, oe(`get ${t}`)));
	}
	return i.prototype.value = t.prototype = Object.create({}, r), Object.defineProperties(e, i), e;
}
function Gd(e) {
	return Object.defineProperties((function(...t) {
		let [n, ...r] = Bf.get(this)(e.includes("Range"), ...t);
		return n[e](...r);
	}), oe(e));
}
function Kd(e) {
	return Object.defineProperties((function(...t) {
		return Bf.get(this).i[e](...t);
	}), oe(e));
}
function qd(e) {
	let t = df[e];
	if (!t) throw TypeError(ec(e));
	return Qo(t, ae($o), 1);
}
var Jd = /* @__PURE__ */ new WeakMap(), Yd = /* @__PURE__ */ Jd.get.bind(Jd), Xd = /* @__PURE__ */ Jd.set.bind(Jd), Zd = {
	era: je,
	eraYear: Ne,
	year: Fe,
	month: Pe,
	daysInMonth: Pe,
	daysInYear: Pe,
	inLeapYear: Hc,
	monthsInYear: Pe
}, Qd = { monthCode: Vc }, $d = { day: Pe }, ef = /* @__PURE__ */ kd(/* @__PURE__ */ Object.assign({}, Zd, Qd, $d, {
	dayOfWeek: Pe,
	dayOfYear: Pe,
	weekOfYear: Me,
	yearOfWeek: Ne,
	daysInWeek: Pe
})), tf = /* @__PURE__ */ kd({
	...Zd,
	...Qd
}), nf = /* @__PURE__ */ kd({
	...Qd,
	...$d
}), rf = { calendarId: (e) => e.calendar }, af = /* @__PURE__ */ fe(((e) => (t) => t[e]), Wc.concat("sign")), of = /* @__PURE__ */ fe(((e, t) => (e) => e[$c[t]]), _c), sf = {
	epochMilliseconds: pn,
	epochNanoseconds: mn
}, [cf, lf, uf] = Cd(Ql, Io, {
	...af,
	blank: Ur
}, {
	with: (e, t) => lf(ho(e, t)),
	negated: (e) => lf(Vr(e)),
	abs: (e) => lf(Br(e)),
	add: (e, t, n) => lf(Rr(Nd, B, z, 0, e, Md(t), n)),
	subtract: (e, t, n) => lf(Rr(Nd, B, z, 1, e, Md(t), n)),
	round: (e, t) => lf(zr(Nd, B, z, e, t)),
	total: (e, t) => gn(Nd, B, z, e, t),
	toLocaleString(e, t, n) {
		return Intl.DurationFormat ? new Intl.DurationFormat(t, n).format(this) : Qn(e);
	},
	toString: Qn,
	toJSON: (e) => Qn(e),
	valueOf: Ad
}, {
	from: (e) => lf(Md(e)),
	compare: (e, t, n) => Pi(Nd, B, z, Md(e), Md(t), n)
}, Qn), df = {
	Instant: gd,
	PlainDateTime: vd,
	PlainDate: yd,
	PlainTime: bd,
	PlainYearMonth: xd,
	PlainMonthDay: Sd
}, ff = /* @__PURE__ */ Qo(gd), pf = /* @__PURE__ */ Qo(_d), mf = /* @__PURE__ */ Qo(vd), hf = /* @__PURE__ */ Qo(yd), gf = /* @__PURE__ */ Qo(bd), _f = /* @__PURE__ */ Qo(xd), vf = /* @__PURE__ */ Qo(Sd), [yf, bf] = Cd(Yl, Fo, of, {
	with(e, t, n) {
		return bf(mo(this, wd(t), n));
	},
	add: (e, t) => bf(xr(0, e, Md(t))),
	subtract: (e, t) => bf(xr(1, e, Md(t))),
	until: (e, t, n) => lf(Qi(0, e, Pd(t), n)),
	since: (e, t, n) => lf(Qi(1, e, Pd(t), n)),
	round: (e, t) => bf(wn(e, t)),
	equals: (e, t) => Wi(e, Pd(t)),
	toLocaleString(e, t, n) {
		let [r, i] = gf(t, n, e);
		return r.format(i);
	},
	toString: Zn,
	toJSON: (e) => Zn(e),
	valueOf: Ad
}, {
	from: (e, t) => bf(Pd(e, t)),
	compare: (e, t) => Li(Pd(e), Pd(t))
}, Zn), [xf, Sf] = Cd(Jl, L(jo, qa), {
	...rf,
	...ef,
	...of
}, {
	with: (e, t, n) => Sf(lo(B, e, wd(t), n)),
	withCalendar: (e, t) => Sf(is(e, Od(t))),
	withPlainTime: (e, t) => Sf(rs(e, Fd(t))),
	add: (e, t, n) => Sf(vr(B, 0, e, Md(t), n)),
	subtract: (e, t, n) => Sf(vr(B, 1, e, Md(t), n)),
	until: (e, t, n) => lf(Ji(B, 0, e, Id(t), n)),
	since: (e, t, n) => lf(Ji(B, 1, e, Id(t), n)),
	round: (e, t) => Sf(Cn(e, t)),
	equals: (e, t) => Bi(e, Id(t)),
	toZonedDateTime: (e, t, n) => Nf(Ho(z, e, jd(t), n)),
	toPlainDate: (e) => Af(cn(e)),
	toPlainTime: (e) => bf(dn(e)),
	toLocaleString(e, t, n) {
		let [r, i] = mf(t, n, e);
		return r.format(i);
	},
	toString: qn,
	toJSON: (e) => qn(e),
	valueOf: Ad
}, {
	from: (e, t) => Sf(Id(e, t)),
	compare: (e, t) => Fi(Id(e), Id(t))
}, qn), [Cf, wf, Tf] = Cd(Kl, L(Po, qa), {
	...rf,
	...nf
}, {
	with: (e, t, n) => wf(po(B, e, wd(t), n)),
	equals: (e, t) => Ui(e, Ld(t)),
	toPlainDate(e, t) {
		return Af(Jo(B, e, this, t));
	},
	toLocaleString(e, t, n) {
		let [r, i] = vf(t, n, e);
		return r.format(i);
	},
	toString: Xn,
	toJSON: (e) => Xn(e),
	valueOf: Ad
}, { from: (e, t) => wf(Ld(e, t)) }, Xn), [Ef, Df, Of] = Cd(Gl, L(No, qa), {
	...rf,
	...tf
}, {
	with: (e, t, n) => Df(fo(B, e, wd(t), n)),
	add: (e, t, n) => Df(br(B, 0, e, Md(t), n)),
	subtract: (e, t, n) => Df(br(B, 1, e, Md(t), n)),
	until: (e, t, n) => lf(Xi(B, 0, e, Rd(t), n)),
	since: (e, t, n) => lf(Xi(B, 1, e, Rd(t), n)),
	equals: (e, t) => Hi(e, Rd(t)),
	toPlainDate(e, t) {
		return Af(qo(B, e, this, t));
	},
	toLocaleString(e, t, n) {
		let [r, i] = _f(t, n, e);
		return r.format(i);
	},
	toString: Yn,
	toJSON: (e) => Yn(e),
	valueOf: Ad
}, {
	from: (e, t) => Df(Rd(e, t)),
	compare: (e, t) => Ii(Rd(e), Rd(t))
}, Yn), [kf, Af, jf] = Cd(ql, L(Mo, qa), {
	...rf,
	...ef
}, {
	with: (e, t, n) => Af(uo(B, e, wd(t), n)),
	withCalendar: (e, t) => Af(is(e, Od(t))),
	add: (e, t, n) => Af(yr(B, 0, e, Md(t), n)),
	subtract: (e, t, n) => Af(yr(B, 1, e, Md(t), n)),
	until: (e, t, n) => lf(Yi(B, 0, e, zd(t), n)),
	since: (e, t, n) => lf(Yi(B, 1, e, zd(t), n)),
	equals: (e, t) => Vi(e, zd(t)),
	toZonedDateTime(e, t) {
		return Nf(Uo(jd, Pd, z, e, ie(t) ? t : { timeZone: t }));
	},
	toPlainDateTime: (e, t) => Sf(Wo(e, Fd(t))),
	toPlainYearMonth(e) {
		return Df(Go(B, e, this));
	},
	toPlainMonthDay(e) {
		return wf(Ko(B, e, this));
	},
	toLocaleString(e, t, n) {
		let [r, i] = hf(t, n, e);
		return r.format(i);
	},
	toString: Jn,
	toJSON: (e) => Jn(e),
	valueOf: Ad
}, {
	from: (e, t) => Af(zd(e, t)),
	compare: (e, t) => Ii(zd(e), zd(t))
}, Jn), [Mf, Nf] = Cd(Xl, L(Ao, qa, Oi), {
	...sf,
	...rf,
	...Vd(ef),
	...Vd(of),
	offset: (e) => or(Hd(e).offsetNanoseconds),
	offsetNanoseconds: (e) => Hd(e).offsetNanoseconds,
	timeZoneId: (e) => e.timeZone,
	hoursInDay: (e) => Tn(z, e)
}, {
	with: (e, t, n) => Nf(co(B, z, e, wd(t), n)),
	withCalendar: (e, t) => Nf(is(e, Od(t))),
	withTimeZone: (e, t) => Nf(as(e, jd(t))),
	withPlainTime: (e, t) => Nf(ns(z, e, Fd(t))),
	add: (e, t, n) => Nf(_r(B, z, 0, e, Md(t), n)),
	subtract: (e, t, n) => Nf(_r(B, z, 1, e, Md(t), n)),
	until: (e, t, n) => lf(fn(qi(B, z, 0, e, Bd(t), n))),
	since: (e, t, n) => lf(fn(qi(B, z, 1, e, Bd(t), n))),
	round: (e, t) => Nf(Sn(z, e, t)),
	startOfDay: (e) => Nf(En(z, e)),
	equals: (e, t) => zi(e, Bd(t)),
	toInstant: (e) => Ff(Ro(e)),
	toPlainDateTime: (e) => Sf(zo(z, e)),
	toPlainDate: (e) => Af(Bo(z, e)),
	toPlainTime: (e) => bf(Vo(z, e)),
	toLocaleString(e, t, n = {}) {
		let [r, i] = pf(t, n, e);
		return r.format(i);
	},
	toString: (e, t) => Kn(z, e, t),
	toJSON: (e) => Kn(z, e),
	valueOf: Ad,
	getTimeZoneTransition(e, t) {
		let { timeZone: n, epochNanoseconds: r } = e, i = Kt(t), a = z(n).l(r, i);
		return a ? Nf({
			...e,
			epochNanoseconds: a
		}) : null;
	}
}, {
	from: (e, t) => Nf(Bd(e, t)),
	compare: (e, t) => Ni(Bd(e), Bd(t))
}, ((e) => Kn(z, e))), [Pf, Ff, If] = Cd(Zl, ko, sf, {
	add: (e, t) => Ff(gr(0, e, Md(t))),
	subtract: (e, t) => Ff(gr(1, e, Md(t))),
	until: (e, t, n) => lf(Ki(0, e, Ud(t), n)),
	since: (e, t, n) => lf(Ki(1, e, Ud(t), n)),
	round: (e, t) => Ff(xn(e, t)),
	equals: (e, t) => Ri(e, Ud(t)),
	toZonedDateTimeISO: (e, t) => Nf(Lo(e, jd(t))),
	toLocaleString(e, t, n) {
		let [r, i] = ff(t, n, e);
		return r.format(i);
	},
	toString: (e, t) => Gn(jd, z, e, t),
	toJSON: (e) => Gn(jd, z, e),
	valueOf: Ad
}, {
	from: (e) => Ff(Ud(e)),
	fromEpochMilliseconds: (e) => Ff(Yo(e)),
	fromEpochNanoseconds: (e) => Ff(Xo(e)),
	compare: (e, t) => Mi(Ud(e), Ud(t))
}, ((e) => Gn(jd, z, e))), Lf = /* @__PURE__ */ Object.defineProperties({}, {
	...le("Temporal.Now"),
	...se({
		timeZoneId: () => cs(),
		instant: () => Ff(an(ss())),
		zonedDateTimeISO: (e = cs()) => Nf(on(ss(), jd(e), Fc)),
		plainDateTimeISO: (e = cs()) => Sf(sn(os(z(jd(e))), Fc)),
		plainDateISO: (e = cs()) => Af(cn(os(z(jd(e))), Fc)),
		plainTimeISO: (e = cs()) => bf(dn(os(z(jd(e)))))
	})
}), Rf = /* @__PURE__ */ Object.defineProperties({}, {
	...le("Temporal"),
	...se({
		PlainYearMonth: Ef,
		PlainMonthDay: Cf,
		PlainDate: kf,
		PlainTime: yf,
		PlainDateTime: xf,
		ZonedDateTime: Mf,
		Instant: Pf,
		Duration: cf,
		Now: Lf
	})
}), zf = /* @__PURE__ */ Wd(), Bf = /* @__PURE__ */ new WeakMap();
se({ DateTimeFormat: zf });
//#endregion
//#region src/core/utils/DateUtils.ts
var V = /* @__PURE__ */ ne((/* @__PURE__ */ P(((e, t) => {
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
function Vf(e) {
	let t = e < 0;
	e = Math.abs(e);
	let n = Math.floor(e / 3600).toFixed(0).padStart(2, "0"), r = Math.floor(e % 3600 / 60).toFixed(0).padStart(2, "0"), i = Math.floor(e % 3600 % 60).toFixed(0).padStart(2, "0"), a = "";
	return n !== "00" && (a += `${n}:`), a += `${r}:${i}`, t && (a = "-" + a), a;
}
function Hf(e) {
	return `${`${e.getFullYear()}`.padStart(4, "0")}-${`${e.getMonth() + 1}`.padStart(2, "0")}-${`${e.getDate()}`.padStart(2, "0")}`;
}
//#endregion
//#region src/audio/Clock/Clock.tsx
function Uf({ seconds: e, className: n, ...r }) {
	let i = p(() => Math.floor(e), [e]), a = p(() => Wf(i), [i]);
	return /* @__PURE__ */ t.createElement("time", {
		dateTime: a,
		className: (0, V.default)("mx_Clock", n),
		...r
	}, Vf(e));
}
function Wf(e) {
	if (!isNaN(e)) return new Rf.Duration(0, 0, 0, 0, 0, 0, Math.round(e)).round({
		smallestUnit: "seconds",
		largestUnit: "hours"
	}).toString();
}
//#endregion
//#region ../../node_modules/compound-web-tchap/dist/components/Typography/Typography.module.js
var Gf = {
	"font-body-xs-regular": "_font-body-xs-regular_6v6n8_12",
	"font-body-xs-semibold": "_font-body-xs-semibold_6v6n8_17",
	"font-body-xs-medium": "_font-body-xs-medium_6v6n8_22",
	"font-body-sm-regular": "_font-body-sm-regular_6v6n8_31",
	"font-body-sm-semibold": "_font-body-sm-semibold_6v6n8_36",
	"font-body-sm-medium": "_font-body-sm-medium_6v6n8_41",
	"font-body-md-regular": "_font-body-md-regular_6v6n8_50",
	"font-body-md-semibold": "_font-body-md-semibold_6v6n8_55",
	"font-body-md-medium": "_font-body-md-medium_6v6n8_60",
	"font-body-lg-regular": "_font-body-lg-regular_6v6n8_69",
	"font-body-lg-semibold": "_font-body-lg-semibold_6v6n8_74",
	"font-body-lg-medium": "_font-body-lg-medium_6v6n8_79",
	"font-heading-sm-regular": "_font-heading-sm-regular_6v6n8_88",
	"font-heading-sm-semibold": "_font-heading-sm-semibold_6v6n8_93",
	"font-heading-sm-medium": "_font-heading-sm-medium_6v6n8_98",
	"font-heading-md-regular": "_font-heading-md-regular_6v6n8_107",
	"font-heading-md-semibold": "_font-heading-md-semibold_6v6n8_112",
	"font-heading-lg-regular": "_font-heading-lg-regular_6v6n8_121",
	"font-heading-lg-semibold": "_font-heading-lg-semibold_6v6n8_126",
	"font-heading-xl-regular": "_font-heading-xl-regular_6v6n8_135",
	"font-heading-xl-semibold": "_font-heading-xl-semibold_6v6n8_140",
	typography: "_typography_6v6n8_153"
}, Kf = /* @__PURE__ */ P(((e) => {
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
})), qf = /* @__PURE__ */ P(((t, n) => {
	n.exports = { ...e };
})), Jf = /* @__PURE__ */ P(((e) => {
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
				ee || (ee = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function l() {
			var e = t(this.type);
			return N[e] || (N[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
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
			if (p !== void 0) if (o) if (j(p)) {
				for (o = 0; o < p.length; o++) f(p[o]);
				Object.freeze && Object.freeze(p);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else f(p);
			if (A.call(n, "key")) {
				p = t(e);
				var m = Object.keys(n).filter(function(e) {
					return e !== "key";
				});
				o = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", ne[p + o] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", o, p, m, p), ne[p + o] = !0);
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
		var m = qf(), h = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), x = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), D = Symbol.for("react.activity"), O = Symbol.for("react.client.reference"), k = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = Object.prototype.hasOwnProperty, j = Array.isArray, M = console.createTask ? console.createTask : function() {
			return null;
		};
		m = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var ee, N = {}, P = m.react_stack_bottom_frame.bind(m, o)(), te = M(i(o)), ne = {};
		e.Fragment = _, e.jsx = function(e, t, n) {
			var r = 1e4 > k.recentlyCreatedOwnerStacks++;
			return d(e, t, n, !1, r ? Error("react-stack-top-frame") : P, r ? M(i(e)) : te);
		}, e.jsxs = function(e, t, n) {
			var r = 1e4 > k.recentlyCreatedOwnerStacks++;
			return d(e, t, n, !0, r ? Error("react-stack-top-frame") : P, r ? M(i(e)) : te);
		};
	})();
})), H = (/* @__PURE__ */ P(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = Kf() : t.exports = Jf();
})))(), Yf = ({ as: e, children: t, type: n = "body", weight: r = "regular", size: i = "md", className: a, ...o }) => /* @__PURE__ */ (0, H.jsx)(e || "p", {
	...o,
	className: (0, V.default)(Gf.typography, Gf[`font-${n}-${i}-${r}`], a),
	children: t
}), Xf = ({ as: e = "p", children: t, ...n }) => /* @__PURE__ */ (0, H.jsx)(Yf, {
	as: e,
	type: "body",
	...n,
	children: t
}), Zf = {
	button: "_button_sev7f_8",
	"icon-only": "_icon-only_sev7f_54",
	"has-icon": "_has-icon_sev7f_61",
	destructive: "_destructive_sev7f_111"
}, Qf = a(function({ as: e, children: t, className: n, disabled: r, ...i }, a) {
	let o = e || "button", { onClick: s, onSubmit: c, onPointerDown: l, onPointerUp: u, onKeyDown: d, onKeyUp: f, onKeyPress: p, ...m } = i, h = r ? {} : {
		onClick: s,
		onSubmit: c,
		onPointerDown: l,
		onPointerUp: u,
		onKeyDown: d,
		onKeyUp: f,
		onKeyPress: p
	};
	return /* @__PURE__ */ (0, H.jsx)(o, {
		ref: a,
		className: n,
		role: e === "a" ? "link" : "button",
		tabIndex: 0,
		"aria-disabled": r,
		...m,
		...h,
		children: t
	});
}), $f = a(function({ as: e, kind: t = "primary", size: n = "lg", children: r, className: i, iconOnly: a, Icon: o, destructive: s, disabled: c, ...l }, u) {
	let [d, f] = t === "destructive" ? ["secondary", !0] : [t, s], p = (0, V.default)(Zf.button, i, {
		[Zf["has-icon"]]: o,
		[Zf["icon-only"]]: a,
		[Zf.destructive]: f
	}), m = a && n === "lg" ? 24 : 20;
	return /* @__PURE__ */ (0, H.jsxs)(Qf, {
		...l,
		as: e || "button",
		ref: u,
		className: p,
		"data-size": n,
		"data-kind": d,
		tabIndex: 0,
		disabled: c,
		children: [o && /* @__PURE__ */ (0, H.jsx)(o, {
			width: m,
			height: m,
			className: Zf.icon,
			"aria-hidden": !0
		}), r]
	});
}), ep = { "indicator-icon": "_indicator-icon_147l5_17" }, tp = a(function({ children: e, className: n, size: r = "100%", colour: i, indicator: a }, o) {
	return /* @__PURE__ */ (0, H.jsx)("div", {
		ref: o,
		className: (0, V.default)(ep["indicator-icon"], n),
		"data-indicator": a,
		style: {
			"--cpd-icon-button-size": r,
			"--cpd-color-icon-tertiary": i
		},
		children: t.Children.only(e)
	});
});
//#endregion
//#region ../../node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function np() {
	return typeof window < "u";
}
function rp(e) {
	return op(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ip(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ap(e) {
	return ((op(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function op(e) {
	return np() ? e instanceof Node || e instanceof ip(e).Node : !1;
}
function U(e) {
	return np() ? e instanceof Element || e instanceof ip(e).Element : !1;
}
function sp(e) {
	return np() ? e instanceof HTMLElement || e instanceof ip(e).HTMLElement : !1;
}
function cp(e) {
	return !np() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ip(e).ShadowRoot;
}
var lp = /* @__PURE__ */ new Set(["inline", "contents"]);
function up(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = Cp(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !lp.has(i);
}
var dp = /* @__PURE__ */ new Set([
	"table",
	"td",
	"th"
]);
function fp(e) {
	return dp.has(rp(e));
}
var pp = [":popover-open", ":modal"];
function mp(e) {
	return pp.some((t) => {
		try {
			return e.matches(t);
		} catch {
			return !1;
		}
	});
}
var hp = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective"
], gp = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective",
	"filter"
], _p = [
	"paint",
	"layout",
	"strict",
	"content"
];
function vp(e) {
	let t = bp(), n = U(e) ? Cp(e) : e;
	return hp.some((e) => n[e] ? n[e] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || gp.some((e) => (n.willChange || "").includes(e)) || _p.some((e) => (n.contain || "").includes(e));
}
function yp(e) {
	let t = Tp(e);
	for (; sp(t) && !Sp(t);) {
		if (vp(t)) return t;
		if (mp(t)) return null;
		t = Tp(t);
	}
	return null;
}
function bp() {
	return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
var xp = /* @__PURE__ */ new Set([
	"html",
	"body",
	"#document"
]);
function Sp(e) {
	return xp.has(rp(e));
}
function Cp(e) {
	return ip(e).getComputedStyle(e);
}
function wp(e) {
	return U(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function Tp(e) {
	if (rp(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || cp(e) && e.host || ap(e);
	return cp(t) ? t.host : t;
}
function Ep(e) {
	let t = Tp(e);
	return Sp(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : sp(t) && up(t) ? t : Ep(t);
}
function Dp(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = Ep(e), i = r === e.ownerDocument?.body, a = ip(r);
	if (i) {
		let e = Op(a);
		return t.concat(a, a.visualViewport || [], up(r) ? r : [], e && n ? Dp(e) : []);
	}
	return t.concat(r, Dp(r, [], n));
}
function Op(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region ../../node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var kp = [
	"top",
	"right",
	"bottom",
	"left"
], Ap = Math.min, jp = Math.max, Mp = Math.round, Np = Math.floor, Pp = (e) => ({
	x: e,
	y: e
}), Fp = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
}, Ip = {
	start: "end",
	end: "start"
};
function Lp(e, t, n) {
	return jp(e, Ap(t, n));
}
function Rp(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function zp(e) {
	return e.split("-")[0];
}
function Bp(e) {
	return e.split("-")[1];
}
function Vp(e) {
	return e === "x" ? "y" : "x";
}
function Hp(e) {
	return e === "y" ? "height" : "width";
}
var Up = /* @__PURE__ */ new Set(["top", "bottom"]);
function Wp(e) {
	return Up.has(zp(e)) ? "y" : "x";
}
function Gp(e) {
	return Vp(Wp(e));
}
function Kp(e, t, n) {
	n === void 0 && (n = !1);
	let r = Bp(e), i = Gp(e), a = Hp(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = tm(o)), [o, tm(o)];
}
function qp(e) {
	let t = tm(e);
	return [
		Jp(e),
		t,
		Jp(t)
	];
}
function Jp(e) {
	return e.replace(/start|end/g, (e) => Ip[e]);
}
var Yp = ["left", "right"], Xp = ["right", "left"], Zp = ["top", "bottom"], Qp = ["bottom", "top"];
function $p(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? Xp : Yp : t ? Yp : Xp;
		case "left":
		case "right": return t ? Zp : Qp;
		default: return [];
	}
}
function em(e, t, n, r) {
	let i = Bp(e), a = $p(zp(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(Jp)))), a;
}
function tm(e) {
	return e.replace(/left|right|bottom|top/g, (e) => Fp[e]);
}
function nm(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function rm(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : nm(e);
}
function im(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
var am = /* @__PURE__ */ [
	"input:not([inert]):not([inert] *)",
	"select:not([inert]):not([inert] *)",
	"textarea:not([inert]):not([inert] *)",
	"a[href]:not([inert]):not([inert] *)",
	"button:not([inert]):not([inert] *)",
	"[tabindex]:not(slot):not([inert]):not([inert] *)",
	"audio[controls]:not([inert]):not([inert] *)",
	"video[controls]:not([inert]):not([inert] *)",
	"[contenteditable]:not([contenteditable=\"false\"]):not([inert]):not([inert] *)",
	"details>summary:first-of-type:not([inert]):not([inert] *)",
	"details:not([inert]):not([inert] *)"
].join(","), om = typeof Element > "u", sm = om ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, cm = !om && Element.prototype.getRootNode ? function(e) {
	return e?.getRootNode?.call(e);
} : function(e) {
	return e?.ownerDocument;
}, lm = function(e, t) {
	t === void 0 && (t = !0);
	var n = e?.getAttribute?.call(e, "inert");
	return n === "" || n === "true" || t && e && (typeof e.closest == "function" ? e.closest("[inert]") : lm(e.parentNode));
}, um = function(e) {
	var t = e?.getAttribute?.call(e, "contenteditable");
	return t === "" || t === "true";
}, dm = function(e, t, n) {
	if (lm(e)) return [];
	var r = Array.prototype.slice.apply(e.querySelectorAll(am));
	return t && sm.call(e, am) && r.unshift(e), r = r.filter(n), r;
}, fm = function(e, t, n) {
	for (var r = [], i = Array.from(e); i.length;) {
		var a = i.shift();
		if (!lm(a, !1)) if (a.tagName === "SLOT") {
			var o = a.assignedElements(), s = fm(o.length ? o : a.children, !0, n);
			n.flatten ? r.push.apply(r, s) : r.push({
				scopeParent: a,
				candidates: s
			});
		} else {
			sm.call(a, am) && n.filter(a) && (t || !e.includes(a)) && r.push(a);
			var c = a.shadowRoot || typeof n.getShadowRoot == "function" && n.getShadowRoot(a), l = !lm(c, !1) && (!n.shadowRootFilter || n.shadowRootFilter(a));
			if (c && l) {
				var u = fm(c === !0 ? a.children : c.children, !0, n);
				n.flatten ? r.push.apply(r, u) : r.push({
					scopeParent: a,
					candidates: u
				});
			} else i.unshift.apply(i, a.children);
		}
	}
	return r;
}, pm = function(e) {
	return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, mm = function(e) {
	if (!e) throw Error("No node provided");
	return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || um(e)) && !pm(e) ? 0 : e.tabIndex;
}, hm = function(e, t) {
	var n = mm(e);
	return n < 0 && t && !pm(e) ? 0 : n;
}, gm = function(e, t) {
	return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
}, _m = function(e) {
	return e.tagName === "INPUT";
}, vm = function(e) {
	return _m(e) && e.type === "hidden";
}, ym = function(e) {
	return e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(e) {
		return e.tagName === "SUMMARY";
	});
}, bm = function(e, t) {
	for (var n = 0; n < e.length; n++) if (e[n].checked && e[n].form === t) return e[n];
}, xm = function(e) {
	if (!e.name) return !0;
	var t = e.form || cm(e), n = function(e) {
		return t.querySelectorAll("input[type=\"radio\"][name=\"" + e + "\"]");
	}, r;
	if (typeof window < "u" && window.CSS !== void 0 && typeof window.CSS.escape == "function") r = n(window.CSS.escape(e.name));
	else try {
		r = n(e.name);
	} catch (e) {
		return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1;
	}
	var i = bm(r, e.form);
	return !i || i === e;
}, Sm = function(e) {
	return _m(e) && e.type === "radio";
}, Cm = function(e) {
	return Sm(e) && !xm(e);
}, wm = function(e) {
	var t = e && cm(e), n = t?.host, r = !1;
	if (t && t !== e) {
		var i, a, o;
		for (r = !!((i = n) != null && (a = i.ownerDocument) != null && a.contains(n) || e != null && (o = e.ownerDocument) != null && o.contains(e)); !r && n;) {
			var s, c;
			t = cm(n), n = t?.host, r = !!((s = n) != null && (c = s.ownerDocument) != null && c.contains(n));
		}
	}
	return r;
}, Tm = function(e) {
	var t = e.getBoundingClientRect(), n = t.width, r = t.height;
	return n === 0 && r === 0;
}, Em = function(e, t) {
	var n = t.displayCheck, r = t.getShadowRoot;
	if (n === "full-native" && "checkVisibility" in e) return !e.checkVisibility({
		checkOpacity: !1,
		opacityProperty: !1,
		contentVisibilityAuto: !0,
		visibilityProperty: !0,
		checkVisibilityCSS: !0
	});
	if (getComputedStyle(e).visibility === "hidden") return !0;
	var i = sm.call(e, "details>summary:first-of-type") ? e.parentElement : e;
	if (sm.call(i, "details:not([open]) *")) return !0;
	if (!n || n === "full" || n === "full-native" || n === "legacy-full") {
		if (typeof r == "function") {
			for (var a = e; e;) {
				var o = e.parentElement, s = cm(e);
				if (o && !o.shadowRoot && r(o) === !0) return Tm(e);
				e = e.assignedSlot ? e.assignedSlot : !o && s !== e.ownerDocument ? s.host : o;
			}
			e = a;
		}
		if (wm(e)) return !e.getClientRects().length;
		if (n !== "legacy-full") return !0;
	} else if (n === "non-zero-area") return Tm(e);
	return !1;
}, Dm = function(e) {
	if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName)) for (var t = e.parentElement; t;) {
		if (t.tagName === "FIELDSET" && t.disabled) {
			for (var n = 0; n < t.children.length; n++) {
				var r = t.children.item(n);
				if (r.tagName === "LEGEND") return sm.call(t, "fieldset[disabled] *") ? !0 : !r.contains(e);
			}
			return !0;
		}
		t = t.parentElement;
	}
	return !1;
}, Om = function(e, t) {
	return !(t.disabled || vm(t) || Em(t, e) || ym(t) || Dm(t));
}, km = function(e, t) {
	return !(Cm(t) || mm(t) < 0 || !Om(e, t));
}, Am = function(e) {
	var t = parseInt(e.getAttribute("tabindex"), 10);
	return !!(isNaN(t) || t >= 0);
}, jm = function(e) {
	var t = [], n = [];
	return e.forEach(function(e, r) {
		var i = !!e.scopeParent, a = i ? e.scopeParent : e, o = hm(a, i), s = i ? jm(e.candidates) : a;
		o === 0 ? i ? t.push.apply(t, s) : t.push(a) : n.push({
			documentOrder: r,
			tabIndex: o,
			item: e,
			isScope: i,
			content: s
		});
	}), n.sort(gm).reduce(function(e, t) {
		return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e;
	}, []).concat(t);
}, Mm = function(e, t) {
	return t ||= {}, jm(t.getShadowRoot ? fm([e], t.includeContainer, {
		filter: km.bind(null, t),
		flatten: !1,
		getShadowRoot: t.getShadowRoot,
		shadowRootFilter: Am
	}) : dm(e, t.includeContainer, km.bind(null, t)));
};
//#endregion
//#region ../../node_modules/@floating-ui/react/dist/floating-ui.react.utils.mjs
function Nm() {
	let e = navigator.userAgentData;
	return e != null && e.platform ? e.platform : navigator.platform;
}
function Pm() {
	let e = navigator.userAgentData;
	return e && Array.isArray(e.brands) ? e.brands.map((e) => {
		let { brand: t, version: n } = e;
		return t + "/" + n;
	}).join(" ") : navigator.userAgent;
}
function Fm() {
	return /apple/i.test(navigator.vendor);
}
function Im() {
	return Nm().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function Lm() {
	return Pm().includes("jsdom/");
}
var Rm = "data-floating-ui-focusable", zm = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function Bm(e) {
	let t = e.activeElement;
	for (; ((n = t) == null || (n = n.shadowRoot) == null ? void 0 : n.activeElement) != null;) {
		var n;
		t = t.shadowRoot.activeElement;
	}
	return t;
}
function Vm(e, t) {
	if (!e || !t) return !1;
	let n = t.getRootNode == null ? void 0 : t.getRootNode();
	if (e.contains(t)) return !0;
	if (n && cp(n)) {
		let n = t;
		for (; n;) {
			if (e === n) return !0;
			n = n.parentNode || n.host;
		}
	}
	return !1;
}
function Hm(e) {
	return "composedPath" in e ? e.composedPath()[0] : e.target;
}
function Um(e, t) {
	if (t == null) return !1;
	if ("composedPath" in e) return e.composedPath().includes(t);
	let n = e;
	return n.target != null && t.contains(n.target);
}
function Wm(e) {
	return e.matches("html,body");
}
function Gm(e) {
	return e?.ownerDocument || document;
}
function Km(e) {
	return sp(e) && e.matches(zm);
}
function qm(e) {
	if (!e || Lm()) return !0;
	try {
		return e.matches(":focus-visible");
	} catch {
		return !0;
	}
}
function Jm(e) {
	return e ? e.hasAttribute(Rm) ? e : e.querySelector("[" + Rm + "]") || e : null;
}
function Ym(e, t, n) {
	return n === void 0 && (n = !0), e.filter((e) => e.parentId === t && (!n || e.context?.open)).flatMap((t) => [t, ...Ym(e, t.id, n)]);
}
function Xm(e) {
	return "nativeEvent" in e;
}
function Zm(e, t) {
	let n = ["mouse", "pen"];
	return t || n.push("", void 0), n.includes(e);
}
var Qm = typeof document < "u" ? f : function() {}, $m = { ...e };
function eh(t) {
	let n = e.useRef(t);
	return Qm(() => {
		n.current = t;
	}), n;
}
var th = $m.useInsertionEffect || ((e) => e());
function nh(t) {
	let n = e.useRef(() => {
		if (process.env.NODE_ENV !== "production") throw Error("Cannot call an event handler while rendering.");
	});
	return th(() => {
		n.current = t;
	}), e.useCallback(function() {
		var e = [...arguments];
		return n.current == null ? void 0 : n.current(...e);
	}, []);
}
var rh = () => ({
	getShadowRoot: !0,
	displayCheck: typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
});
function ih(e, t) {
	let n = Mm(e, rh()), r = n.length;
	if (r === 0) return;
	let i = Bm(Gm(e)), a = n.indexOf(i);
	return n[a === -1 ? t === 1 ? 0 : r - 1 : a + t];
}
function ah(e) {
	return ih(Gm(e).body, 1) || e;
}
function oh(e) {
	return ih(Gm(e).body, -1) || e;
}
function sh(e, t) {
	let n = t || e.currentTarget, r = e.relatedTarget;
	return !r || !Vm(n, r);
}
function ch(e) {
	Mm(e, rh()).forEach((e) => {
		e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1");
	});
}
function lh(e) {
	e.querySelectorAll("[data-tabindex]").forEach((e) => {
		let t = e.dataset.tabindex;
		delete e.dataset.tabindex, t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
	});
}
//#endregion
//#region ../../node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function uh(e, t, n) {
	let { reference: r, floating: i } = e, a = Wp(t), o = Gp(t), s = Hp(o), c = zp(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case "top":
			p = {
				x: u,
				y: r.y - i.height
			};
			break;
		case "bottom":
			p = {
				x: u,
				y: r.y + r.height
			};
			break;
		case "right":
			p = {
				x: r.x + r.width,
				y: d
			};
			break;
		case "left":
			p = {
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	switch (Bp(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end":
			p[o] += f * (n && l ? -1 : 1);
			break;
	}
	return p;
}
async function dh(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = Rp(t, e), p = rm(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = im(await i.getClippingRect({
		element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
		boundary: c,
		rootBoundary: l,
		strategy: s
	})), g = u === "floating" ? {
		x: n,
		y: r,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
		x: 1,
		y: 1
	}, y = im(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: o,
		rect: g,
		offsetParent: _,
		strategy: s
	}) : g);
	return {
		top: (h.top - y.top + p.top) / v.y,
		bottom: (y.bottom - h.bottom + p.bottom) / v.y,
		left: (h.left - y.left + p.left) / v.x,
		right: (y.right - h.right + p.right) / v.x
	};
}
var fh = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = a.filter(Boolean), c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = uh(l, r, c), f = r, p = {}, m = 0;
	for (let n = 0; n < s.length; n++) {
		let { name: a, fn: h } = s[n], { x: g, y: _, data: v, reset: y } = await h({
			x: u,
			y: d,
			initialPlacement: r,
			placement: f,
			strategy: i,
			middlewareData: p,
			rects: l,
			platform: {
				...o,
				detectOverflow: o.detectOverflow ?? dh
			},
			elements: {
				reference: e,
				floating: t
			}
		});
		u = g ?? u, d = _ ?? d, p = {
			...p,
			[a]: {
				...p[a],
				...v
			}
		}, y && m <= 50 && (m++, typeof y == "object" && (y.placement && (f = y.placement), y.rects && (l = y.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : y.rects), {x: u, y: d} = uh(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: p
	};
}, ph = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = Rp(e, t) || {};
		if (l == null) return {};
		let d = rm(u), f = {
			x: n,
			y: r
		}, p = Gp(i), m = Hp(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = Ap(d[_], T), D = Ap(d[v], T), O = E, k = C - h[m] - D, A = C / 2 - h[m] / 2 + w, j = Lp(O, A, k), M = !c.arrow && Bp(i) != null && A !== j && a.reference[m] / 2 - (A < O ? E : D) - h[m] / 2 < 0, ee = M ? A < O ? A - O : A - k : 0;
		return {
			[p]: f[p] + ee,
			data: {
				[p]: j,
				centerOffset: A - j - ee,
				...M && { alignmentOffset: ee }
			},
			reset: M
		};
	}
}), mh = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = Rp(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = zp(r), _ = Wp(o), v = zp(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [tm(o)] : qp(o)), x = p !== "none";
			!d && x && b.push(...em(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = Kp(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (!(u === "alignment" && _ !== Wp(t)) || T.every((e) => Wp(e.placement) === _ ? e.overflows[0] > 0 : !0))) return {
					data: {
						index: e,
						overflows: T
					},
					reset: { placement: t }
				};
				let n = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = T.filter((e) => {
							if (x) {
								let t = Wp(e.placement);
								return t === _ || t === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case "initialPlacement":
						n = o;
						break;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
};
function hh(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function gh(e) {
	return kp.some((t) => e[t] >= 0);
}
var _h = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = Rp(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = hh(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: gh(e)
					} };
				}
				case "escaped": {
					let e = hh(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: gh(e)
					} };
				}
				default: return {};
			}
		}
	};
}, vh = /* @__PURE__ */ new Set(["left", "top"]);
async function yh(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = zp(n), s = Bp(n), c = Wp(n) === "y", l = vh.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = Rp(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
		mainAxis: d,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: d.mainAxis || 0,
		crossAxis: d.crossAxis || 0,
		alignmentAxis: d.alignmentAxis
	};
	return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
		x: p * u,
		y: f * l
	} : {
		x: f * l,
		y: p * u
	};
}
var bh = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await yh(t, e);
			return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
				x: r + s.x,
				y: i + s.y,
				data: {
					...s,
					placement: a
				}
			};
		}
	};
}, xh = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i, platform: a } = t, { mainAxis: o = !0, crossAxis: s = !1, limiter: c = { fn: (e) => {
				let { x: t, y: n } = e;
				return {
					x: t,
					y: n
				};
			} }, ...l } = Rp(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = Wp(zp(i)), p = Vp(f), m = u[p], h = u[f];
			if (o) {
				let e = p === "y" ? "top" : "left", t = p === "y" ? "bottom" : "right", n = m + d[e], r = m - d[t];
				m = Lp(n, m, r);
			}
			if (s) {
				let e = f === "y" ? "top" : "left", t = f === "y" ? "bottom" : "right", n = h + d[e], r = h - d[t];
				h = Lp(n, h, r);
			}
			let g = c.fn({
				...t,
				[p]: m,
				[f]: h
			});
			return {
				...g,
				data: {
					x: g.x - n,
					y: g.y - r,
					enabled: {
						[p]: o,
						[f]: s
					}
				}
			};
		}
	};
}, Sh = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = Rp(e, t), u = {
				x: n,
				y: r
			}, d = Wp(i), f = Vp(d), p = u[f], m = u[d], h = Rp(s, t), g = typeof h == "number" ? {
				mainAxis: h,
				crossAxis: 0
			} : {
				mainAxis: 0,
				crossAxis: 0,
				...h
			};
			if (c) {
				let e = f === "y" ? "height" : "width", t = a.reference[f] - a.floating[e] + g.mainAxis, n = a.reference[f] + a.reference[e] - g.mainAxis;
				p < t ? p = t : p > n && (p = n);
			}
			if (l) {
				let e = f === "y" ? "width" : "height", t = vh.has(zp(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, Ch = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var n, r;
			let { placement: i, rects: a, platform: o, elements: s } = t, { apply: c = () => {}, ...l } = Rp(e, t), u = await o.detectOverflow(t, l), d = zp(i), f = Bp(i), p = Wp(i) === "y", { width: m, height: h } = a.floating, g, _;
			d === "top" || d === "bottom" ? (g = d, _ = f === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = f === "end" ? "top" : "bottom");
			let v = h - u.top - u.bottom, y = m - u.left - u.right, b = Ap(h - u[g], v), x = Ap(m - u[_], y), S = !t.middlewareData.shift, C = b, w = x;
			if ((n = t.middlewareData.shift) != null && n.enabled.x && (w = y), (r = t.middlewareData.shift) != null && r.enabled.y && (C = v), S && !f) {
				let e = jp(u.left, 0), t = jp(u.right, 0), n = jp(u.top, 0), r = jp(u.bottom, 0);
				p ? w = m - 2 * (e !== 0 || t !== 0 ? e + t : jp(u.left, u.right)) : C = h - 2 * (n !== 0 || r !== 0 ? n + r : jp(u.top, u.bottom));
			}
			await c({
				...t,
				availableWidth: w,
				availableHeight: C
			});
			let T = await o.getDimensions(s.floating);
			return m !== T.width || h !== T.height ? { reset: { rects: !0 } } : {};
		}
	};
};
//#endregion
//#region ../../node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function wh(e) {
	let t = Cp(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = sp(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = Mp(n) !== a || Mp(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function Th(e) {
	return U(e) ? e : e.contextElement;
}
function Eh(e) {
	let t = Th(e);
	if (!sp(t)) return Pp(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = wh(t), o = (a ? Mp(n.width) : n.width) / r, s = (a ? Mp(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var Dh = /* @__PURE__ */ Pp(0);
function Oh(e) {
	let t = ip(e);
	return !bp() || !t.visualViewport ? Dh : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function kh(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== ip(e) ? !1 : t;
}
function Ah(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = Th(e), o = Pp(1);
	t && (r ? U(r) && (o = Eh(r)) : o = Eh(e));
	let s = kh(a, n, r) ? Oh(a) : Pp(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = ip(a), t = r && U(r) ? ip(r) : r, n = e, i = Op(n);
		for (; i && r && t !== n;) {
			let e = Eh(i), t = i.getBoundingClientRect(), r = Cp(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = ip(i), i = Op(n);
		}
	}
	return im({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function jh(e, t) {
	let n = wp(e).scrollLeft;
	return t ? t.left + n : Ah(ap(e)).left + n;
}
function Mh(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - jh(e, n),
		y: n.top + t.scrollTop
	};
}
function Nh(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = ap(r), s = t ? mp(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = Pp(1), u = Pp(0), d = sp(r);
	if ((d || !d && !a) && ((rp(r) !== "body" || up(o)) && (c = wp(r)), sp(r))) {
		let e = Ah(r);
		l = Eh(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? Mh(o, c) : Pp(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function Ph(e) {
	return Array.from(e.getClientRects());
}
function Fh(e) {
	let t = ap(e), n = wp(e), r = e.ownerDocument.body, i = jp(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = jp(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + jh(e), s = -n.scrollTop;
	return Cp(r).direction === "rtl" && (o += jp(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
var Ih = 25;
function Lh(e, t) {
	let n = ip(e), r = ap(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = bp();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	let l = jh(r);
	if (l <= 0) {
		let e = r.ownerDocument, t = e.body, n = getComputedStyle(t), i = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, o = Math.abs(r.clientWidth - t.clientWidth - i);
		o <= Ih && (a -= o);
	} else l <= Ih && (a += l);
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
var Rh = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function zh(e, t) {
	let n = Ah(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = sp(e) ? Eh(e) : Pp(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function Bh(e, t, n) {
	let r;
	if (t === "viewport") r = Lh(e, n);
	else if (t === "document") r = Fh(ap(e));
	else if (U(t)) r = zh(t, n);
	else {
		let n = Oh(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return im(r);
}
function Vh(e, t) {
	let n = Tp(e);
	return n === t || !U(n) || Sp(n) ? !1 : Cp(n).position === "fixed" || Vh(n, t);
}
function Hh(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = Dp(e, [], !1).filter((e) => U(e) && rp(e) !== "body"), i = null, a = Cp(e).position === "fixed", o = a ? Tp(e) : e;
	for (; U(o) && !Sp(o);) {
		let t = Cp(o), n = vp(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && Rh.has(i.position) || up(o) && !n && Vh(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = Tp(o);
	}
	return t.set(e, r), r;
}
function Uh(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? mp(t) ? [] : Hh(t, this._c) : [].concat(n), r], o = a[0], s = a.reduce((e, n) => {
		let r = Bh(t, n, i);
		return e.top = jp(r.top, e.top), e.right = Ap(r.right, e.right), e.bottom = Ap(r.bottom, e.bottom), e.left = jp(r.left, e.left), e;
	}, Bh(t, o, i));
	return {
		width: s.right - s.left,
		height: s.bottom - s.top,
		x: s.left,
		y: s.top
	};
}
function Wh(e) {
	let { width: t, height: n } = wh(e);
	return {
		width: t,
		height: n
	};
}
function Gh(e, t, n) {
	let r = sp(t), i = ap(t), a = n === "fixed", o = Ah(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = Pp(0);
	function l() {
		c.x = jh(i);
	}
	if (r || !r && !a) if ((rp(t) !== "body" || up(i)) && (s = wp(t)), r) {
		let e = Ah(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	} else i && l();
	a && !r && i && l();
	let u = i && !r && !a ? Mh(i, s) : Pp(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function Kh(e) {
	return Cp(e).position === "static";
}
function qh(e, t) {
	if (!sp(e) || Cp(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return ap(e) === n && (n = n.ownerDocument.body), n;
}
function Jh(e, t) {
	let n = ip(e);
	if (mp(e)) return n;
	if (!sp(e)) {
		let t = Tp(e);
		for (; t && !Sp(t);) {
			if (U(t) && !Kh(t)) return t;
			t = Tp(t);
		}
		return n;
	}
	let r = qh(e, t);
	for (; r && fp(r) && Kh(r);) r = qh(r, t);
	return r && Sp(r) && Kh(r) && !vp(r) ? n : r || yp(e) || n;
}
var Yh = async function(e) {
	let t = this.getOffsetParent || Jh, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: Gh(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function Xh(e) {
	return Cp(e).direction === "rtl";
}
var Zh = {
	convertOffsetParentRelativeRectToViewportRelativeRect: Nh,
	getDocumentElement: ap,
	getClippingRect: Uh,
	getOffsetParent: Jh,
	getElementRects: Yh,
	getClientRects: Ph,
	getDimensions: Wh,
	getScale: Eh,
	isElement: U,
	isRTL: Xh
};
function Qh(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function $h(e, t) {
	let n = null, r, i = ap(e);
	function a() {
		var e;
		clearTimeout(r), (e = n) == null || e.disconnect(), n = null;
	}
	function o(s, c) {
		s === void 0 && (s = !1), c === void 0 && (c = 1), a();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (s || t(), !f || !p) return;
		let m = Np(d), h = Np(i.clientWidth - (u + f)), g = Np(i.clientHeight - (d + p)), _ = Np(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: jp(0, Ap(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (n !== c) {
				if (!y) return o();
				n ? o(!1, n) : r = setTimeout(() => {
					o(!1, 1e-7);
				}, 1e3);
			}
			n === 1 && !Qh(l, e.getBoundingClientRect()) && o(), y = !1;
		}
		try {
			n = new IntersectionObserver(b, {
				...v,
				root: i.ownerDocument
			});
		} catch {
			n = new IntersectionObserver(b, v);
		}
		n.observe(e);
	}
	return o(!0), a;
}
function eg(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = Th(e), u = i || a ? [...l ? Dp(l) : [], ...Dp(t)] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n, { passive: !0 }), a && e.addEventListener("resize", n);
	});
	let d = l && s ? $h(l, n) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), p.observe(t));
	let m, h = c ? Ah(e) : null;
	c && g();
	function g() {
		let t = Ah(e);
		h && !Qh(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var tg = bh, ng = xh, rg = mh, ig = Ch, ag = _h, og = ph, sg = Sh, cg = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: Zh,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return fh(e, t, {
		...i,
		platform: a
	});
}, lg = typeof document < "u" ? f : function() {};
function ug(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!ug(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !ug(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function dg(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function fg(e, t) {
	let n = dg(e);
	return Math.round(t * n) / n;
}
function pg(t) {
	let n = e.useRef(t);
	return lg(() => {
		n.current = t;
	}), n;
}
function mg(t) {
	t === void 0 && (t = {});
	let { placement: n = "bottom", strategy: r = "absolute", middleware: i = [], platform: a, elements: { reference: o, floating: s } = {}, transform: c = !0, whileElementsMounted: l, open: u } = t, [d, f] = e.useState({
		x: 0,
		y: 0,
		strategy: r,
		placement: n,
		middlewareData: {},
		isPositioned: !1
	}), [p, m] = e.useState(i);
	ug(p, i) || m(i);
	let [h, g] = e.useState(null), [_, y] = e.useState(null), b = e.useCallback((e) => {
		e !== w.current && (w.current = e, g(e));
	}, []), x = e.useCallback((e) => {
		e !== T.current && (T.current = e, y(e));
	}, []), S = o || h, C = s || _, w = e.useRef(null), T = e.useRef(null), E = e.useRef(d), D = l != null, O = pg(l), k = pg(a), A = pg(u), j = e.useCallback(() => {
		if (!w.current || !T.current) return;
		let e = {
			placement: n,
			strategy: r,
			middleware: p
		};
		k.current && (e.platform = k.current), cg(w.current, T.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: A.current !== !1
			};
			M.current && !ug(E.current, t) && (E.current = t, v.flushSync(() => {
				f(t);
			}));
		});
	}, [
		p,
		n,
		r,
		k,
		A
	]);
	lg(() => {
		u === !1 && E.current.isPositioned && (E.current.isPositioned = !1, f((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [u]);
	let M = e.useRef(!1);
	lg(() => (M.current = !0, () => {
		M.current = !1;
	}), []), lg(() => {
		if (S && (w.current = S), C && (T.current = C), S && C) {
			if (O.current) return O.current(S, C, j);
			j();
		}
	}, [
		S,
		C,
		j,
		O,
		D
	]);
	let ee = e.useMemo(() => ({
		reference: w,
		floating: T,
		setReference: b,
		setFloating: x
	}), [b, x]), N = e.useMemo(() => ({
		reference: S,
		floating: C
	}), [S, C]), P = e.useMemo(() => {
		let e = {
			position: r,
			left: 0,
			top: 0
		};
		if (!N.floating) return e;
		let t = fg(N.floating, d.x), n = fg(N.floating, d.y);
		return c ? {
			...e,
			transform: "translate(" + t + "px, " + n + "px)",
			...dg(N.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: r,
			left: t,
			top: n
		};
	}, [
		r,
		c,
		N.floating,
		d.x,
		d.y
	]);
	return e.useMemo(() => ({
		...d,
		update: j,
		refs: ee,
		elements: N,
		floatingStyles: P
	}), [
		d,
		j,
		ee,
		N,
		P
	]);
}
var hg = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : og({
				element: r.current,
				padding: i
			}).fn(n) : r ? og({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, gg = (e, t) => ({
	...tg(e),
	options: [e, t]
}), _g = (e, t) => ({
	...ng(e),
	options: [e, t]
}), vg = (e, t) => ({
	...sg(e),
	options: [e, t]
}), yg = (e, t) => ({
	...rg(e),
	options: [e, t]
}), bg = (e, t) => ({
	...ig(e),
	options: [e, t]
}), xg = (e, t) => ({
	...ag(e),
	options: [e, t]
}), Sg = (e, t) => ({
	...hg(e),
	options: [e, t]
});
//#endregion
//#region ../../node_modules/@floating-ui/react/dist/floating-ui.react.mjs
function Cg(t) {
	let n = e.useRef(void 0), r = e.useCallback((e) => {
		let n = t.map((t) => {
			if (t != null) {
				if (typeof t == "function") {
					let n = t, r = n(e);
					return typeof r == "function" ? r : () => {
						n(null);
					};
				}
				return t.current = e, () => {
					t.current = null;
				};
			}
		});
		return () => {
			n.forEach((e) => e?.());
		};
	}, t);
	return e.useMemo(() => t.every((e) => e == null) ? null : (e) => {
		n.current &&= (n.current(), void 0), e != null && (n.current = r(e));
	}, t);
}
var wg = "data-floating-ui-focusable", Tg = "active", Eg = "selected", Dg = "ArrowLeft", Og = "ArrowRight", kg = "ArrowUp", Ag = "ArrowDown", jg = [Dg, Og], Mg = [kg, Ag];
[...jg, ...Mg];
var Ng = { ...e }, Pg = !1, Fg = 0, Ig = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + Fg++;
function Lg() {
	let [t, n] = e.useState(() => Pg ? Ig() : void 0);
	return Qm(() => {
		t ?? n(Ig());
	}, []), e.useEffect(() => {
		Pg = !0;
	}, []), t;
}
var Rg = Ng.useId || Lg, zg;
process.env.NODE_ENV !== "production" && (zg = /* @__PURE__ */ new Set());
function Bg() {
	var e;
	let t = "Floating UI: " + [...arguments].join(" ");
	if (!((e = zg) != null && e.has(t))) {
		var n;
		(n = zg) == null || n.add(t), console.warn(t);
	}
}
function Vg() {
	var e;
	let t = "Floating UI: " + [...arguments].join(" ");
	if (!((e = zg) != null && e.has(t))) {
		var n;
		(n = zg) == null || n.add(t), console.error(t);
	}
}
var Hg = /* @__PURE__ */ e.forwardRef(function(t, n) {
	let { context: { placement: r, elements: { floating: i }, middlewareData: { arrow: a, shift: o } }, width: s = 14, height: c = 7, tipRadius: l = 0, strokeWidth: u = 0, staticOffset: d, stroke: f, d: p, style: { transform: m, ...h } = {}, ...g } = t;
	process.env.NODE_ENV !== "production" && (n || Bg("The `ref` prop is required for `FloatingArrow`."));
	let _ = Rg(), [v, y] = e.useState(!1);
	if (Qm(() => {
		i && Cp(i).direction === "rtl" && y(!0);
	}, [i]), !i) return null;
	let [b, x] = r.split("-"), S = b === "top" || b === "bottom", C = d;
	(S && o != null && o.x || !S && o != null && o.y) && (C = null);
	let w = u * 2, T = w / 2, E = s / 2 * (l / -8 + 1), D = c / 2 * l / 4, O = !!p, k = C && x === "end" ? "bottom" : "top", A = C && x === "end" ? "right" : "left";
	C && v && (A = x === "end" ? "left" : "right");
	let j = a?.x == null ? "" : C || a.x, M = a?.y == null ? "" : C || a.y, ee = p || "M0,0" + (" H" + s) + (" L" + (s - E) + "," + (c - D)) + (" Q" + s / 2 + "," + c + " " + E + "," + (c - D)) + " Z", N = {
		top: O ? "rotate(180deg)" : "",
		left: O ? "rotate(90deg)" : "rotate(-90deg)",
		bottom: O ? "" : "rotate(180deg)",
		right: O ? "rotate(-90deg)" : "rotate(90deg)"
	}[b];
	return /* @__PURE__ */ (0, H.jsxs)("svg", {
		...g,
		"aria-hidden": !0,
		ref: n,
		width: O ? s : s + w,
		height: s,
		viewBox: "0 0 " + s + " " + (c > s ? c : s),
		style: {
			position: "absolute",
			pointerEvents: "none",
			[A]: j,
			[k]: M,
			[b]: S || O ? "100%" : "calc(100% - " + w / 2 + "px)",
			transform: [N, m].filter((e) => !!e).join(" "),
			...h
		},
		children: [
			w > 0 && /* @__PURE__ */ (0, H.jsx)("path", {
				clipPath: "url(#" + _ + ")",
				fill: "none",
				stroke: f,
				strokeWidth: w + (p ? 0 : 1),
				d: ee
			}),
			/* @__PURE__ */ (0, H.jsx)("path", {
				stroke: w && !p ? g.fill : "none",
				d: ee
			}),
			/* @__PURE__ */ (0, H.jsx)("clipPath", {
				id: _,
				children: /* @__PURE__ */ (0, H.jsx)("rect", {
					x: -T,
					y: T * (O ? -1 : 1),
					width: s + w,
					height: s
				})
			})
		]
	});
});
function Ug() {
	let e = /* @__PURE__ */ new Map();
	return {
		emit(t, n) {
			var r;
			(r = e.get(t)) == null || r.forEach((e) => e(n));
		},
		on(t, n) {
			e.has(t) || e.set(t, /* @__PURE__ */ new Set()), e.get(t).add(n);
		},
		off(t, n) {
			var r;
			(r = e.get(t)) == null || r.delete(n);
		}
	};
}
var Wg = /* @__PURE__ */ e.createContext(null), Gg = /* @__PURE__ */ e.createContext(null), Kg = () => e.useContext(Wg)?.id || null, qg = () => e.useContext(Gg);
function Jg(e) {
	return "data-floating-ui-" + e;
}
function Yg(e) {
	e.current !== -1 && (clearTimeout(e.current), e.current = -1);
}
var Xg = /* @__PURE__ */ Jg("safe-polygon");
function Zg(e, t, n) {
	if (n && !Zm(n)) return 0;
	if (typeof e == "number") return e;
	if (typeof e == "function") {
		let n = e();
		return typeof n == "number" ? n : n?.[t];
	}
	return e?.[t];
}
function Qg(e) {
	return typeof e == "function" ? e() : e;
}
function $g(t, n) {
	n === void 0 && (n = {});
	let { open: r, onOpenChange: i, dataRef: a, events: o, elements: s } = t, { enabled: c = !0, delay: l = 0, handleClose: u = null, mouseOnly: d = !1, restMs: f = 0, move: p = !0 } = n, m = qg(), h = Kg(), g = eh(u), _ = eh(l), v = eh(r), y = eh(f), b = e.useRef(), x = e.useRef(-1), S = e.useRef(), C = e.useRef(-1), w = e.useRef(!0), T = e.useRef(!1), E = e.useRef(() => {}), D = e.useRef(!1), O = nh(() => {
		let e = a.current.openEvent?.type;
		return e?.includes("mouse") && e !== "mousedown";
	});
	e.useEffect(() => {
		if (!c) return;
		function e(e) {
			let { open: t } = e;
			t || (Yg(x), Yg(C), w.current = !0, D.current = !1);
		}
		return o.on("openchange", e), () => {
			o.off("openchange", e);
		};
	}, [c, o]), e.useEffect(() => {
		if (!c || !g.current || !r) return;
		function e(e) {
			O() && i(!1, e, "hover");
		}
		let t = Gm(s.floating).documentElement;
		return t.addEventListener("mouseleave", e), () => {
			t.removeEventListener("mouseleave", e);
		};
	}, [
		s.floating,
		r,
		i,
		c,
		g,
		O
	]);
	let k = e.useCallback(function(e, t, n) {
		t === void 0 && (t = !0), n === void 0 && (n = "hover");
		let r = Zg(_.current, "close", b.current);
		r && !S.current ? (Yg(x), x.current = window.setTimeout(() => i(!1, e, n), r)) : t && (Yg(x), i(!1, e, n));
	}, [_, i]), A = nh(() => {
		E.current(), S.current = void 0;
	}), j = nh(() => {
		if (T.current) {
			let e = Gm(s.floating).body;
			e.style.pointerEvents = "", e.removeAttribute(Xg), T.current = !1;
		}
	}), M = nh(() => a.current.openEvent ? ["click", "mousedown"].includes(a.current.openEvent.type) : !1);
	e.useEffect(() => {
		if (!c) return;
		function e(e) {
			if (Yg(x), w.current = !1, d && !Zm(b.current) || Qg(y.current) > 0 && !Zg(_.current, "open")) return;
			let t = Zg(_.current, "open", b.current);
			t ? x.current = window.setTimeout(() => {
				v.current || i(!0, e, "hover");
			}, t) : r || i(!0, e, "hover");
		}
		function t(e) {
			if (M()) {
				j();
				return;
			}
			E.current();
			let t = Gm(s.floating);
			if (Yg(C), D.current = !1, g.current && a.current.floatingContext) {
				r || Yg(x), S.current = g.current({
					...a.current.floatingContext,
					tree: m,
					x: e.clientX,
					y: e.clientY,
					onClose() {
						j(), A(), M() || k(e, !0, "safe-polygon");
					}
				});
				let n = S.current;
				t.addEventListener("mousemove", n), E.current = () => {
					t.removeEventListener("mousemove", n);
				};
				return;
			}
			(b.current !== "touch" || !Vm(s.floating, e.relatedTarget)) && k(e);
		}
		function n(e) {
			M() || a.current.floatingContext && (g.current == null || g.current({
				...a.current.floatingContext,
				tree: m,
				x: e.clientX,
				y: e.clientY,
				onClose() {
					j(), A(), M() || k(e);
				}
			})(e));
		}
		function o() {
			Yg(x);
		}
		function l(e) {
			M() || k(e, !1);
		}
		if (U(s.domReference)) {
			let i = s.domReference, a = s.floating;
			return r && i.addEventListener("mouseleave", n), p && i.addEventListener("mousemove", e, { once: !0 }), i.addEventListener("mouseenter", e), i.addEventListener("mouseleave", t), a && (a.addEventListener("mouseleave", n), a.addEventListener("mouseenter", o), a.addEventListener("mouseleave", l)), () => {
				r && i.removeEventListener("mouseleave", n), p && i.removeEventListener("mousemove", e), i.removeEventListener("mouseenter", e), i.removeEventListener("mouseleave", t), a && (a.removeEventListener("mouseleave", n), a.removeEventListener("mouseenter", o), a.removeEventListener("mouseleave", l));
			};
		}
	}, [
		s,
		c,
		t,
		d,
		p,
		k,
		A,
		j,
		i,
		r,
		v,
		m,
		_,
		g,
		a,
		M,
		y
	]), Qm(() => {
		var e;
		if (c && r && (e = g.current) != null && (e = e.__options) != null && e.blockPointerEvents && O()) {
			T.current = !0;
			let e = s.floating;
			if (U(s.domReference) && e) {
				var t;
				let n = Gm(s.floating).body;
				n.setAttribute(Xg, "");
				let r = s.domReference, i = m == null || (t = m.nodesRef.current.find((e) => e.id === h)) == null || (t = t.context) == null ? void 0 : t.elements.floating;
				return i && (i.style.pointerEvents = ""), n.style.pointerEvents = "none", r.style.pointerEvents = "auto", e.style.pointerEvents = "auto", () => {
					n.style.pointerEvents = "", r.style.pointerEvents = "", e.style.pointerEvents = "";
				};
			}
		}
	}, [
		c,
		r,
		h,
		s,
		m,
		g,
		O
	]), Qm(() => {
		r || (b.current = void 0, D.current = !1, A(), j());
	}, [
		r,
		A,
		j
	]), e.useEffect(() => () => {
		A(), Yg(x), Yg(C), j();
	}, [
		c,
		s.domReference,
		A,
		j
	]);
	let ee = e.useMemo(() => {
		function e(e) {
			b.current = e.pointerType;
		}
		return {
			onPointerDown: e,
			onPointerEnter: e,
			onMouseMove(e) {
				let { nativeEvent: t } = e;
				function n() {
					!w.current && !v.current && i(!0, t, "hover");
				}
				d && !Zm(b.current) || r || Qg(y.current) === 0 || D.current && e.movementX ** 2 + e.movementY ** 2 < 2 || (Yg(C), b.current === "touch" ? n() : (D.current = !0, C.current = window.setTimeout(n, Qg(y.current))));
			}
		};
	}, [
		d,
		i,
		r,
		v,
		y
	]);
	return e.useMemo(() => c ? { reference: ee } : {}, [c, ee]);
}
var e_ = () => {}, t_ = /* @__PURE__ */ e.createContext({
	delay: 0,
	initialDelay: 0,
	timeoutMs: 0,
	currentId: null,
	setCurrentId: e_,
	setState: e_,
	isInstantPhase: !1
}), n_ = () => e.useContext(t_);
function r_(t) {
	let { children: n, delay: r, timeoutMs: i = 0 } = t, [a, o] = e.useReducer((e, t) => ({
		...e,
		...t
	}), {
		delay: r,
		timeoutMs: i,
		initialDelay: r,
		currentId: null,
		isInstantPhase: !1
	}), s = e.useRef(null), c = e.useCallback((e) => {
		o({ currentId: e });
	}, []);
	return Qm(() => {
		a.currentId ? s.current === null ? s.current = a.currentId : a.isInstantPhase || o({ isInstantPhase: !0 }) : (a.isInstantPhase && o({ isInstantPhase: !1 }), s.current = null);
	}, [a.currentId, a.isInstantPhase]), /* @__PURE__ */ (0, H.jsx)(t_.Provider, {
		value: e.useMemo(() => ({
			...a,
			setState: o,
			setCurrentId: c
		}), [a, c]),
		children: n
	});
}
function i_(e, t) {
	t === void 0 && (t = {});
	let { open: n, onOpenChange: r, floatingId: i } = e, { id: a, enabled: o = !0 } = t, s = a ?? i, c = n_(), { currentId: l, setCurrentId: u, initialDelay: d, setState: f, timeoutMs: p } = c;
	return Qm(() => {
		o && l && (f({ delay: {
			open: 1,
			close: Zg(d, "close")
		} }), l !== s && r(!1));
	}, [
		o,
		s,
		r,
		f,
		l,
		d
	]), Qm(() => {
		function e() {
			r(!1), f({
				delay: d,
				currentId: null
			});
		}
		if (o && l && !n && l === s) {
			if (p) {
				let t = window.setTimeout(e, p);
				return () => {
					clearTimeout(t);
				};
			}
			e();
		}
	}, [
		o,
		n,
		f,
		l,
		s,
		r,
		d,
		p
	]), Qm(() => {
		o && (u === e_ || !n || u(s));
	}, [
		o,
		n,
		u,
		s
	]), c;
}
var a_ = {
	border: 0,
	clip: "rect(0 0 0 0)",
	height: "1px",
	margin: "-1px",
	overflow: "hidden",
	padding: 0,
	position: "fixed",
	whiteSpace: "nowrap",
	width: "1px",
	top: 0,
	left: 0
}, o_ = /* @__PURE__ */ e.forwardRef(function(t, n) {
	let [r, i] = e.useState();
	Qm(() => {
		Fm() && i("button");
	}, []);
	let a = {
		ref: n,
		tabIndex: 0,
		role: r,
		"aria-hidden": r ? void 0 : !0,
		[Jg("focus-guard")]: "",
		style: a_
	};
	return /* @__PURE__ */ (0, H.jsx)("span", {
		...t,
		...a
	});
}), s_ = {
	clipPath: "inset(50%)",
	position: "fixed",
	top: 0,
	left: 0
}, c_ = /* @__PURE__ */ e.createContext(null), l_ = /* @__PURE__ */ Jg("portal");
function u_(t) {
	t === void 0 && (t = {});
	let { id: n, root: r } = t, i = Rg(), a = f_(), [o, s] = e.useState(null), c = e.useRef(null);
	return Qm(() => () => {
		o?.remove(), queueMicrotask(() => {
			c.current = null;
		});
	}, [o]), Qm(() => {
		if (!i || c.current) return;
		let e = n ? document.getElementById(n) : null;
		if (!e) return;
		let t = document.createElement("div");
		t.id = i, t.setAttribute(l_, ""), e.appendChild(t), c.current = t, s(t);
	}, [n, i]), Qm(() => {
		if (r === null || !i || c.current) return;
		let e = r || a?.portalNode;
		e && !op(e) && (e = e.current), e ||= document.body;
		let t = null;
		n && (t = document.createElement("div"), t.id = n, e.appendChild(t));
		let o = document.createElement("div");
		o.id = i, o.setAttribute(l_, ""), e = t || e, e.appendChild(o), c.current = o, s(o);
	}, [
		n,
		r,
		i,
		a
	]), o;
}
function d_(t) {
	let { children: n, id: r, root: i, preserveTabOrder: a = !0 } = t, o = u_({
		id: r,
		root: i
	}), [s, c] = e.useState(null), l = e.useRef(null), u = e.useRef(null), d = e.useRef(null), f = e.useRef(null), p = s?.modal, m = s?.open, h = !!s && !s.modal && s.open && a && !!(i || o);
	return e.useEffect(() => {
		if (!o || !a || p) return;
		function e(e) {
			o && sh(e) && (e.type === "focusin" ? lh : ch)(o);
		}
		return o.addEventListener("focusin", e, !0), o.addEventListener("focusout", e, !0), () => {
			o.removeEventListener("focusin", e, !0), o.removeEventListener("focusout", e, !0);
		};
	}, [
		o,
		a,
		p
	]), e.useEffect(() => {
		o && (m || lh(o));
	}, [m, o]), /* @__PURE__ */ (0, H.jsxs)(c_.Provider, {
		value: e.useMemo(() => ({
			preserveTabOrder: a,
			beforeOutsideRef: l,
			afterOutsideRef: u,
			beforeInsideRef: d,
			afterInsideRef: f,
			portalNode: o,
			setFocusManagerState: c
		}), [a, o]),
		children: [
			h && o && /* @__PURE__ */ (0, H.jsx)(o_, {
				"data-type": "outside",
				ref: l,
				onFocus: (e) => {
					if (sh(e, o)) {
						var t;
						(t = d.current) == null || t.focus();
					} else oh(s ? s.domReference : null)?.focus();
				}
			}),
			h && o && /* @__PURE__ */ (0, H.jsx)("span", {
				"aria-owns": o.id,
				style: s_
			}),
			o && /* @__PURE__ */ v.createPortal(n, o),
			h && o && /* @__PURE__ */ (0, H.jsx)(o_, {
				"data-type": "outside",
				ref: u,
				onFocus: (e) => {
					if (sh(e, o)) {
						var t;
						(t = f.current) == null || t.focus();
					} else ah(s ? s.domReference : null)?.focus(), s != null && s.closeOnFocusOut && s?.onOpenChange(!1, e.nativeEvent, "focus-out");
				}
			})
		]
	});
}
var f_ = () => e.useContext(c_), p_ = {
	pointerdown: "onPointerDown",
	mousedown: "onMouseDown",
	click: "onClick"
}, m_ = {
	pointerdown: "onPointerDownCapture",
	mousedown: "onMouseDownCapture",
	click: "onClickCapture"
}, h_ = (e) => ({
	escapeKey: typeof e == "boolean" ? e : e?.escapeKey ?? !1,
	outsidePress: typeof e == "boolean" ? e : e?.outsidePress ?? !0
});
function g_(t, n) {
	n === void 0 && (n = {});
	let { open: r, onOpenChange: i, elements: a, dataRef: o } = t, { enabled: s = !0, escapeKey: c = !0, outsidePress: l = !0, outsidePressEvent: u = "pointerdown", referencePress: d = !1, referencePressEvent: f = "pointerdown", ancestorScroll: p = !1, bubbles: m, capture: h } = n, g = qg(), _ = nh(typeof l == "function" ? l : () => !1), v = typeof l == "function" ? _ : l, y = e.useRef(!1), { escapeKey: b, outsidePress: x } = h_(m), { escapeKey: S, outsidePress: C } = h_(h), w = e.useRef(!1), T = nh((e) => {
		if (!r || !s || !c || e.key !== "Escape" || w.current) return;
		let t = o.current.floatingContext?.nodeId, n = g ? Ym(g.nodesRef.current, t) : [];
		if (!b && (e.stopPropagation(), n.length > 0)) {
			let e = !0;
			if (n.forEach((t) => {
				var n;
				if ((n = t.context) != null && n.open && !t.context.dataRef.current.__escapeKeyBubbles) {
					e = !1;
					return;
				}
			}), !e) return;
		}
		i(!1, Xm(e) ? e.nativeEvent : e, "escape-key");
	}), E = nh((e) => {
		var t;
		let n = () => {
			var t;
			T(e), (t = Hm(e)) == null || t.removeEventListener("keydown", n);
		};
		(t = Hm(e)) == null || t.addEventListener("keydown", n);
	}), D = nh((e) => {
		let t = o.current.insideReactTree;
		o.current.insideReactTree = !1;
		let n = y.current;
		if (y.current = !1, u === "click" && n || t || typeof v == "function" && !v(e)) return;
		let r = Hm(e), s = "[" + Jg("inert") + "]", c = Gm(a.floating).querySelectorAll(s), l = U(r) ? r : null;
		for (; l && !Sp(l);) {
			let e = Tp(l);
			if (Sp(e) || !U(e)) break;
			l = e;
		}
		if (c.length && U(r) && !Wm(r) && !Vm(r, a.floating) && Array.from(c).every((e) => !Vm(l, e))) return;
		if (sp(r) && A) {
			let t = Sp(r), n = Cp(r), i = /auto|scroll/, a = t || i.test(n.overflowX), o = t || i.test(n.overflowY), s = a && r.clientWidth > 0 && r.scrollWidth > r.clientWidth, c = o && r.clientHeight > 0 && r.scrollHeight > r.clientHeight, l = n.direction === "rtl", u = c && (l ? e.offsetX <= r.offsetWidth - r.clientWidth : e.offsetX > r.clientWidth), d = s && e.offsetY > r.clientHeight;
			if (u || d) return;
		}
		let d = o.current.floatingContext?.nodeId, f = g && Ym(g.nodesRef.current, d).some((t) => Um(e, t.context?.elements.floating));
		if (Um(e, a.floating) || Um(e, a.domReference) || f) return;
		let p = g ? Ym(g.nodesRef.current, d) : [];
		if (p.length > 0) {
			let e = !0;
			if (p.forEach((t) => {
				var n;
				if ((n = t.context) != null && n.open && !t.context.dataRef.current.__outsidePressBubbles) {
					e = !1;
					return;
				}
			}), !e) return;
		}
		i(!1, e, "outside-press");
	}), O = nh((e) => {
		var t;
		let n = () => {
			var t;
			D(e), (t = Hm(e)) == null || t.removeEventListener(u, n);
		};
		(t = Hm(e)) == null || t.addEventListener(u, n);
	});
	e.useEffect(() => {
		if (!r || !s) return;
		o.current.__escapeKeyBubbles = b, o.current.__outsidePressBubbles = x;
		let e = -1;
		function t(e) {
			i(!1, e, "ancestor-scroll");
		}
		function n() {
			window.clearTimeout(e), w.current = !0;
		}
		function l() {
			e = window.setTimeout(() => {
				w.current = !1;
			}, bp() ? 5 : 0);
		}
		let d = Gm(a.floating);
		c && (d.addEventListener("keydown", S ? E : T, S), d.addEventListener("compositionstart", n), d.addEventListener("compositionend", l)), v && d.addEventListener(u, C ? O : D, C);
		let f = [];
		return p && (U(a.domReference) && (f = Dp(a.domReference)), U(a.floating) && (f = f.concat(Dp(a.floating))), !U(a.reference) && a.reference && a.reference.contextElement && (f = f.concat(Dp(a.reference.contextElement)))), f = f.filter((e) => e !== d.defaultView?.visualViewport), f.forEach((e) => {
			e.addEventListener("scroll", t, { passive: !0 });
		}), () => {
			c && (d.removeEventListener("keydown", S ? E : T, S), d.removeEventListener("compositionstart", n), d.removeEventListener("compositionend", l)), v && d.removeEventListener(u, C ? O : D, C), f.forEach((e) => {
				e.removeEventListener("scroll", t);
			}), window.clearTimeout(e);
		};
	}, [
		o,
		a,
		c,
		v,
		u,
		r,
		i,
		p,
		s,
		b,
		x,
		T,
		S,
		E,
		D,
		C,
		O
	]), e.useEffect(() => {
		o.current.insideReactTree = !1;
	}, [
		o,
		v,
		u
	]);
	let k = e.useMemo(() => ({
		onKeyDown: T,
		...d && {
			[p_[f]]: (e) => {
				i(!1, e.nativeEvent, "reference-press");
			},
			...f !== "click" && { onClick(e) {
				i(!1, e.nativeEvent, "reference-press");
			} }
		}
	}), [
		T,
		i,
		d,
		f
	]), A = e.useMemo(() => ({
		onKeyDown: T,
		onMouseDown() {
			y.current = !0;
		},
		onMouseUp() {
			y.current = !0;
		},
		[m_[u]]: () => {
			o.current.insideReactTree = !0;
		}
	}), [
		T,
		u,
		o
	]);
	return e.useMemo(() => s ? {
		reference: k,
		floating: A
	} : {}, [
		s,
		k,
		A
	]);
}
function __(t) {
	let { open: n = !1, onOpenChange: r, elements: i } = t, a = Rg(), o = e.useRef({}), [s] = e.useState(() => Ug()), c = Kg() != null;
	if (process.env.NODE_ENV !== "production") {
		let e = i.reference;
		e && !U(e) && Vg("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
	}
	let [l, u] = e.useState(i.reference), d = nh((e, t, n) => {
		o.current.openEvent = e ? t : void 0, s.emit("openchange", {
			open: e,
			event: t,
			reason: n,
			nested: c
		}), r?.(e, t, n);
	}), f = e.useMemo(() => ({ setPositionReference: u }), []), p = e.useMemo(() => ({
		reference: l || i.reference || null,
		floating: i.floating || null,
		domReference: i.reference
	}), [
		l,
		i.reference,
		i.floating
	]);
	return e.useMemo(() => ({
		dataRef: o,
		open: n,
		onOpenChange: d,
		elements: p,
		events: s,
		floatingId: a,
		refs: f
	}), [
		n,
		d,
		p,
		s,
		a,
		f
	]);
}
function v_(t) {
	t === void 0 && (t = {});
	let { nodeId: n } = t, r = __({
		...t,
		elements: {
			reference: null,
			floating: null,
			...t.elements
		}
	}), i = t.rootContext || r, a = i.elements, [o, s] = e.useState(null), [c, l] = e.useState(null), u = a?.domReference || o, d = e.useRef(null), f = qg();
	Qm(() => {
		u && (d.current = u);
	}, [u]);
	let p = mg({
		...t,
		elements: {
			...a,
			...c && { reference: c }
		}
	}), m = e.useCallback((e) => {
		let t = U(e) ? {
			getBoundingClientRect: () => e.getBoundingClientRect(),
			getClientRects: () => e.getClientRects(),
			contextElement: e
		} : e;
		l(t), p.refs.setReference(t);
	}, [p.refs]), h = e.useCallback((e) => {
		(U(e) || e === null) && (d.current = e, s(e)), (U(p.refs.reference.current) || p.refs.reference.current === null || e !== null && !U(e)) && p.refs.setReference(e);
	}, [p.refs]), g = e.useMemo(() => ({
		...p.refs,
		setReference: h,
		setPositionReference: m,
		domReference: d
	}), [
		p.refs,
		h,
		m
	]), _ = e.useMemo(() => ({
		...p.elements,
		domReference: u
	}), [p.elements, u]), v = e.useMemo(() => ({
		...p,
		...i,
		refs: g,
		elements: _,
		nodeId: n
	}), [
		p,
		g,
		_,
		n,
		i
	]);
	return Qm(() => {
		i.dataRef.current.floatingContext = v;
		let e = f?.nodesRef.current.find((e) => e.id === n);
		e && (e.context = v);
	}), e.useMemo(() => ({
		...p,
		context: v,
		refs: g,
		elements: _
	}), [
		p,
		g,
		_,
		v
	]);
}
function y_() {
	return Im() && Fm();
}
function b_(t, n) {
	n === void 0 && (n = {});
	let { open: r, onOpenChange: i, events: a, dataRef: o, elements: s } = t, { enabled: c = !0, visibleOnly: l = !0 } = n, u = e.useRef(!1), d = e.useRef(-1), f = e.useRef(!0);
	e.useEffect(() => {
		if (!c) return;
		let e = ip(s.domReference);
		function t() {
			!r && sp(s.domReference) && s.domReference === Bm(Gm(s.domReference)) && (u.current = !0);
		}
		function n() {
			f.current = !0;
		}
		function i() {
			f.current = !1;
		}
		return e.addEventListener("blur", t), y_() && (e.addEventListener("keydown", n, !0), e.addEventListener("pointerdown", i, !0)), () => {
			e.removeEventListener("blur", t), y_() && (e.removeEventListener("keydown", n, !0), e.removeEventListener("pointerdown", i, !0));
		};
	}, [
		s.domReference,
		r,
		c
	]), e.useEffect(() => {
		if (!c) return;
		function e(e) {
			let { reason: t } = e;
			(t === "reference-press" || t === "escape-key") && (u.current = !0);
		}
		return a.on("openchange", e), () => {
			a.off("openchange", e);
		};
	}, [a, c]), e.useEffect(() => () => {
		Yg(d);
	}, []);
	let p = e.useMemo(() => ({
		onMouseLeave() {
			u.current = !1;
		},
		onFocus(e) {
			if (u.current) return;
			let t = Hm(e.nativeEvent);
			if (l && U(t)) {
				if (y_() && !e.relatedTarget) {
					if (!f.current && !Km(t)) return;
				} else if (!qm(t)) return;
			}
			i(!0, e.nativeEvent, "focus");
		},
		onBlur(e) {
			u.current = !1;
			let t = e.relatedTarget, n = e.nativeEvent, r = U(t) && t.hasAttribute(Jg("focus-guard")) && t.getAttribute("data-type") === "outside";
			d.current = window.setTimeout(() => {
				let e = Bm(s.domReference ? s.domReference.ownerDocument : document);
				!t && e === s.domReference || Vm(o.current.floatingContext?.refs.floating.current, e) || Vm(s.domReference, e) || r || i(!1, n, "focus");
			});
		}
	}), [
		o,
		s.domReference,
		i,
		l
	]);
	return e.useMemo(() => c ? { reference: p } : {}, [c, p]);
}
function x_(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i = n === "item", a = e;
	if (i && e) {
		let { [Tg]: t, [Eg]: n, ...r } = e;
		a = r;
	}
	return {
		...n === "floating" && {
			tabIndex: -1,
			[wg]: ""
		},
		...a,
		...t.map((t) => {
			let r = t ? t[n] : null;
			return typeof r == "function" ? e ? r(e) : null : r;
		}).concat(e).reduce((e, t) => (t && Object.entries(t).forEach((t) => {
			let [n, a] = t;
			if (!(i && [Tg, Eg].includes(n))) if (n.indexOf("on") === 0) {
				if (r.has(n) || r.set(n, []), typeof a == "function") {
					var o;
					(o = r.get(n)) == null || o.push(a), e[n] = function() {
						var e = [...arguments];
						return r.get(n)?.map((t) => t(...e)).find((e) => e !== void 0);
					};
				}
			} else e[n] = a;
		}), e), {})
	};
}
function S_(t) {
	t === void 0 && (t = []);
	let n = t.map((e) => e?.reference), r = t.map((e) => e?.floating), i = t.map((e) => e?.item), a = e.useCallback((e) => x_(e, t, "reference"), n), o = e.useCallback((e) => x_(e, t, "floating"), r), s = e.useCallback((e) => x_(e, t, "item"), i);
	return e.useMemo(() => ({
		getReferenceProps: a,
		getFloatingProps: o,
		getItemProps: s
	}), [
		a,
		o,
		s
	]);
}
var C_ = /* @__PURE__ */ new Map([
	["select", "listbox"],
	["combobox", "listbox"],
	["label", !1]
]);
function w_(t, n) {
	n === void 0 && (n = {});
	let { open: r, elements: i, floatingId: a } = t, { enabled: o = !0, role: s = "dialog" } = n, c = Rg(), l = i.domReference?.id || c, u = e.useMemo(() => Jm(i.floating)?.id || a, [i.floating, a]), d = C_.get(s) ?? s, f = Kg() != null, p = e.useMemo(() => d === "tooltip" || s === "label" ? { ["aria-" + (s === "label" ? "labelledby" : "describedby")]: r ? u : void 0 } : {
		"aria-expanded": r ? "true" : "false",
		"aria-haspopup": d === "alertdialog" ? "dialog" : d,
		"aria-controls": r ? u : void 0,
		...d === "listbox" && { role: "combobox" },
		...d === "menu" && { id: l },
		...d === "menu" && f && { role: "menuitem" },
		...s === "select" && { "aria-autocomplete": "none" },
		...s === "combobox" && { "aria-autocomplete": "list" }
	}, [
		d,
		u,
		f,
		r,
		l,
		s
	]), m = e.useMemo(() => {
		let e = {
			id: u,
			...d && { role: d }
		};
		return d === "tooltip" || s === "label" ? e : {
			...e,
			...d === "menu" && { "aria-labelledby": l }
		};
	}, [
		d,
		u,
		l,
		s
	]), h = e.useCallback((e) => {
		let { active: t, selected: n } = e, r = {
			role: "option",
			...t && { id: u + "-fui-option" }
		};
		switch (s) {
			case "select":
			case "combobox": return {
				...r,
				"aria-selected": n
			};
		}
		return {};
	}, [u, s]);
	return e.useMemo(() => o ? {
		reference: p,
		floating: m,
		item: h
	} : {}, [
		o,
		p,
		m,
		h
	]);
}
//#endregion
//#region ../../node_modules/compound-web-tchap/dist/components/Tooltip/TooltipProvider.js
var T_ = {
	open: 300,
	close: 0
}, E_ = ({ children: e }) => /* @__PURE__ */ (0, H.jsx)(r_, {
	delay: T_,
	timeoutMs: 300,
	children: e
});
E_.displayName = "TooltipProvider";
//#endregion
//#region ../../node_modules/compound-web-tchap/dist/components/Tooltip/useTooltip.js
function D_({ open: e, disabled: t = !1, onOpenChange: n, placement: r = "bottom", isTriggerInteractive: i, caption: a, "aria-atomic": o, "aria-live": s, ...c }) {
	let l = Rg(), d = Rg(), f = m(null), [g, _] = h(!1), v = t ? !1 : e ?? g, y = (t, r, i) => {
		n?.(t, r, i), e === void 0 && _(t);
	}, b = v_({
		placement: r,
		open: v,
		onOpenChange: y,
		whileElementsMounted: eg,
		middleware: [
			gg(6),
			yg({
				crossAxis: r.includes("-"),
				fallbackAxisSideDirection: "start",
				padding: 5
			}),
			_g({ padding: 5 }),
			Sg({ element: f })
		]
	}), x = b.context, { delay: S, initialDelay: C } = i_(x);
	if (C !== T_) throw Error("Tooltips must be wrapped in a global <TooltipProvider>");
	let w = $g(x, {
		move: !1,
		enabled: e === void 0,
		delay: i ? S : {},
		mouseOnly: !0
	}), T = b_(x, { enabled: e === void 0 }), E = m(void 0);
	u(() => () => window.clearTimeout(E.current), []);
	let D = p(() => {
		let e = () => {
			E.current === void 0 ? E.current = window.setTimeout(() => {
				y(!1), E.current = void 0;
			}, 1500) : window.clearTimeout(E.current);
		};
		return { reference: {
			onTouchStart: () => {
				E.current !== void 0 && window.clearTimeout(E.current), E.current = window.setTimeout(() => {
					y(!0), E.current = void 0;
				}, 500);
			},
			onTouchEnd: e,
			onTouchCancel: e
		} };
	}, []), O = g_(x), k = "label" in c ? "label" : "description", A = w_(x, {
		enabled: k === "description",
		role: "tooltip"
	}), j = S_([
		w,
		T,
		D,
		O,
		A,
		p(() => k === "label" ? { reference: {
			"aria-labelledby": l,
			"aria-describedby": a ? d : void 0
		} } : {}, [
			k,
			l,
			d
		])
	]);
	return p(() => ({
		labelId: l,
		captionId: a ? d : void 0,
		caption: a,
		purpose: k,
		open: v,
		setOpen: y,
		tooltipProps: {
			"aria-atomic": o,
			"aria-live": s
		},
		...j,
		...b,
		arrowRef: f
	}), [
		l,
		d,
		a,
		A,
		v,
		y,
		j,
		b,
		f
	]);
}
//#endregion
//#region ../../node_modules/compound-web-tchap/dist/components/Tooltip/TooltipContext.js
var O_ = i(null);
function k_() {
	let e = l(O_);
	if (e == null) throw Error("Tooltip components must be wrapped in <Tooltip />");
	return e;
}
//#endregion
//#region ../../node_modules/compound-web-tchap/dist/components/Tooltip/Tooltip.module.js
var A_ = {
	tooltip: "_tooltip_1nqnq_8",
	invisible: "_invisible_1nqnq_21",
	caption: "_caption_1nqnq_28",
	arrow: "_arrow_1nqnq_33"
}, j_ = (e) => "label" in e && !!e.label;
function M_({ children: e, isTriggerInteractive: t = !0, nonInteractiveTriggerTabIndex: n = 0, ...r }) {
	let i = D_({
		isTriggerInteractive: t,
		...r
	});
	return /* @__PURE__ */ (0, H.jsxs)(O_.Provider, {
		value: i,
		children: [/* @__PURE__ */ (0, H.jsx)(F_, {
			isTriggerInteractive: t,
			nonInteractiveTriggerTabIndex: n,
			children: e
		}), /* @__PURE__ */ (0, H.jsxs)(P_, { children: [/* @__PURE__ */ (0, H.jsx)("span", {
			id: i.labelId,
			children: j_(r) ? r.label : r.description
		}), /* @__PURE__ */ (0, H.jsx)(N_, {})] })]
	});
}
function N_() {
	let { caption: e, captionId: t } = k_();
	return e ? /* @__PURE__ */ (0, H.jsx)(typeof e == "string" ? "span" : "div", {
		id: t,
		className: (0, V.default)(A_.caption, "cpd-theme-dark"),
		children: e
	}) : null;
}
function P_({ children: e }) {
	let { context: t, open: n, arrowRef: r, purpose: i, ...a } = k_();
	return !n && i !== "label" ? null : /* @__PURE__ */ (0, H.jsx)(d_, { children: /* @__PURE__ */ (0, H.jsxs)("div", {
		ref: a.refs.setFloating,
		style: a.floatingStyles,
		...a.tooltipProps,
		...a.getFloatingProps(),
		className: (0, V.default)(A_.tooltip, { [A_.invisible]: i === "label" && !n }),
		children: [/* @__PURE__ */ (0, H.jsx)(Hg, {
			ref: r,
			context: t,
			width: 10,
			height: 6,
			className: A_.arrow
		}), e]
	}) });
}
var F_ = ({ children: e, isTriggerInteractive: t, nonInteractiveTriggerTabIndex: n }) => {
	let i = k_(), a = e?.ref, s = Cg([i.refs.setReference, a]), c = p(() => {
		if (o(e)) {
			if (t) return r(e, i.getReferenceProps({
				...typeof e.props == "object" ? e.props : {},
				ref: s
			}));
			{
				let { "aria-labelledby": t, "aria-describedby": a, ...o } = i.getReferenceProps({
					ref: s,
					tabIndex: n
				});
				return /* @__PURE__ */ (0, H.jsx)("span", {
					tabIndex: n,
					...o,
					children: r(e, {
						"aria-labelledby": t,
						"aria-describedby": a
					})
				});
			}
		}
	}, [
		i,
		s,
		e
	]);
	if (!c) throw Error("Tooltip anchor must be a single valid React element");
	return c;
}, I_ = {
	"icon-button": "_icon-button_1215g_8",
	"no-background": "_no-background_1215g_42",
	destructive: "_destructive_1215g_95"
}, L_ = a(function({ kind: e = "primary", children: n, className: r, indicator: i, size: a = "32px", style: o, disabled: s, destructive: c, tooltip: l, tooltipPlacement: u, noBackground: d = !1, ...f }, p) {
	let m = /* @__PURE__ */ (0, H.jsx)(Qf, {
		as: "button",
		ref: p,
		className: (0, V.default)(I_["icon-button"], r, {
			[I_.destructive]: c,
			[I_["no-background"]]: d
		}),
		style: {
			"--cpd-icon-button-size": a,
			...o
		},
		disabled: s,
		...f,
		"data-indicator": i,
		"data-kind": e,
		children: /* @__PURE__ */ (0, H.jsx)(tp, {
			indicator: i,
			colour: s ? "var(--cpd-color-icon-disabled)" : void 0,
			children: t.Children.only(n)
		})
	});
	return l ? /* @__PURE__ */ (0, H.jsx)(M_, {
		label: l,
		placement: u,
		children: m
	}) : m;
});
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/check-circle.js
function R_(e, t) {
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
R_.displayName = "CheckCircleIcon";
var z_ = a(R_);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/error-solid.js
function B_(e, t) {
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
B_.displayName = "ErrorSolidIcon";
var V_ = a(B_);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/info.js
function H_(e, t) {
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
H_.displayName = "InfoIcon";
var U_ = a(H_);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/close.js
function W_(e, t) {
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
W_.displayName = "CloseIcon";
var G_ = a(W_), K_ = {
	badge: "_badge_10dml_8",
	"has-icon": "_has-icon_10dml_18"
}, q_ = ({ children: e, Icon: t, kind: n = "default", className: r }) => /* @__PURE__ */ (0, H.jsxs)(Yf, {
	as: "span",
	size: "sm",
	weight: "medium",
	className: (0, V.default)(K_.badge, r, { [K_["has-icon"]]: !!t }),
	"data-kind": n,
	children: [t && /* @__PURE__ */ (0, H.jsx)(t, {
		width: "16",
		height: "16",
		"aria-hidden": !0
	}), e]
}), J_ = { "menu-title": "_menu-title_1sgvx_8" }, Y_ = ({ title: e, id: t, className: n }) => /* @__PURE__ */ (0, H.jsx)(Xf, {
	as: "h3",
	id: t,
	className: (0, V.default)(J_["menu-title"], n),
	size: "sm",
	weight: "semibold",
	children: e
}), X_ = {
	menu: "_menu_1kl3y_8",
	"slide-in": "_slide-in_1kl3y_1",
	"fade-in": "_fade-in_1kl3y_1",
	"fade-out": "_fade-out_1kl3y_1",
	title: "_title_1kl3y_65"
}, Z_ = a(({ title: e, showTitle: t = !0, className: n, children: r, ...i }, a) => {
	let o = d();
	return /* @__PURE__ */ (0, H.jsxs)("div", {
		role: "menu",
		ref: a,
		"aria-label": t ? void 0 : e,
		"aria-labelledby": t ? o : void 0,
		className: (0, V.default)(n, X_.menu),
		...i,
		children: [t && /* @__PURE__ */ (0, H.jsx)(Y_, {
			className: X_.title,
			title: e,
			id: o
		}), r]
	});
});
Z_.displayName = "FloatingMenu";
//#endregion
//#region ../../node_modules/compound-web-tchap/dist/components/Menu/DrawerMenu.module.js
var Q_ = {
	bg: "_bg_610zp_8",
	drawer: "_drawer_610zp_17",
	body: "_body_610zp_51"
}, $_ = i(null);
//#endregion
//#region ../../node_modules/compound-web-tchap/dist/utils/platform.js
function ev() {
	let e = globalThis.navigator?.userAgent;
	return /android/i.test(e) ? "android" : /iPad|iPhone|iPod|Mac/.test(e) && "ontouchend" in document ? "ios" : "other";
}
//#endregion
//#region ../../node_modules/compound-web-tchap/dist/components/Menu/DrawerMenu.js
var tv = a(({ title: e, children: t, className: n, ...r }, i) => /* @__PURE__ */ (0, H.jsx)("div", {
	ref: i,
	className: (0, V.default)(n, Q_.drawer),
	"aria-label": e,
	"data-platform": ev(),
	...r,
	role: "menu",
	children: /* @__PURE__ */ (0, H.jsx)("div", {
		className: Q_.body,
		children: t
	})
}));
tv.displayName = "DrawerMenu", typeof window < "u" && window.document && window.document.createElement;
function W(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return function(r) {
		if (e?.(r), n === !1 || !r.defaultPrevented) return t?.(r);
	};
}
//#endregion
//#region ../../node_modules/@radix-ui/react-context/dist/index.mjs
function nv(t, n) {
	let r = e.createContext(n), i = (t) => {
		let { children: n, ...i } = t, a = e.useMemo(() => i, Object.values(i));
		return /* @__PURE__ */ (0, H.jsx)(r.Provider, {
			value: a,
			children: n
		});
	};
	i.displayName = t + "Provider";
	function a(i) {
		let a = e.useContext(r);
		if (a) return a;
		if (n !== void 0) return n;
		throw Error(`\`${i}\` must be used within \`${t}\``);
	}
	return [i, a];
}
function rv(t, n = []) {
	let r = [];
	function i(n, i) {
		let a = e.createContext(i), o = r.length;
		r = [...r, i];
		let s = (n) => {
			let { scope: r, children: i, ...s } = n, c = r?.[t]?.[o] || a, l = e.useMemo(() => s, Object.values(s));
			return /* @__PURE__ */ (0, H.jsx)(c.Provider, {
				value: l,
				children: i
			});
		};
		s.displayName = n + "Provider";
		function c(r, s) {
			let c = s?.[t]?.[o] || a, l = e.useContext(c);
			if (l) return l;
			if (i !== void 0) return i;
			throw Error(`\`${r}\` must be used within \`${n}\``);
		}
		return [s, c];
	}
	let a = () => {
		let n = r.map((t) => e.createContext(t));
		return function(r) {
			let i = r?.[t] || n;
			return e.useMemo(() => ({ [`__scope${t}`]: {
				...r,
				[t]: i
			} }), [r, i]);
		};
	};
	return a.scopeName = t, [i, iv(a, ...n)];
}
function iv(...t) {
	let n = t[0];
	if (t.length === 1) return n;
	let r = () => {
		let r = t.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return function(t) {
			let i = r.reduce((e, { useScope: n, scopeName: r }) => {
				let i = n(t)[`__scope${r}`];
				return {
					...e,
					...i
				};
			}, {});
			return e.useMemo(() => ({ [`__scope${n.scopeName}`]: i }), [i]);
		};
	};
	return r.scopeName = n.scopeName, r;
}
//#endregion
//#region ../../node_modules/@radix-ui/react-compose-refs/dist/index.mjs
function av(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function ov(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = av(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : av(e[t], null);
			}
		};
	};
}
function sv(...t) {
	return e.useCallback(ov(...t), t);
}
//#endregion
//#region ../../node_modules/@radix-ui/react-slot/dist/index.mjs
/* @__NO_SIDE_EFFECTS__ */
function cv(t) {
	let n = /* @__PURE__ */ lv(t), r = e.forwardRef((t, r) => {
		let { children: i, ...a } = t, o = e.Children.toArray(i), s = o.find(dv);
		if (s) {
			let t = s.props.children, i = o.map((n) => n === s ? e.Children.count(t) > 1 ? e.Children.only(null) : e.isValidElement(t) ? t.props.children : null : n);
			return /* @__PURE__ */ (0, H.jsx)(n, {
				...a,
				ref: r,
				children: e.isValidElement(t) ? e.cloneElement(t, void 0, i) : null
			});
		}
		return /* @__PURE__ */ (0, H.jsx)(n, {
			...a,
			ref: r,
			children: i
		});
	});
	return r.displayName = `${t}.Slot`, r;
}
/* @__NO_SIDE_EFFECTS__ */
function lv(t) {
	let n = e.forwardRef((t, n) => {
		let { children: r, ...i } = t;
		if (e.isValidElement(r)) {
			let t = pv(r), a = fv(i, r.props);
			return r.type !== e.Fragment && (a.ref = n ? ov(n, t) : t), e.cloneElement(r, a);
		}
		return e.Children.count(r) > 1 ? e.Children.only(null) : null;
	});
	return n.displayName = `${t}.SlotClone`, n;
}
var uv = Symbol("radix.slottable");
function dv(t) {
	return e.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === uv;
}
function fv(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
function pv(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region ../../node_modules/@radix-ui/react-primitive/dist/index.mjs
var G = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((t, n) => {
	let r = /* @__PURE__ */ cv(`Primitive.${n}`), i = e.forwardRef((e, t) => {
		let { asChild: i, ...a } = e, o = i ? r : n;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ (0, H.jsx)(o, {
			...a,
			ref: t
		});
	});
	return i.displayName = `Primitive.${n}`, {
		...t,
		[n]: i
	};
}, {});
function mv(e, t) {
	e && v.flushSync(() => e.dispatchEvent(t));
}
//#endregion
//#region ../../node_modules/@radix-ui/react-collection/dist/index.mjs
function hv(e) {
	let n = e + "CollectionProvider", [r, i] = rv(n), [a, o] = r(n, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), s = (e) => {
		let { scope: n, children: r } = e, i = t.useRef(null), o = t.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ (0, H.jsx)(a, {
			scope: n,
			itemMap: o,
			collectionRef: i,
			children: r
		});
	};
	s.displayName = n;
	let c = e + "CollectionSlot", l = /* @__PURE__ */ cv(c), u = t.forwardRef((e, t) => {
		let { scope: n, children: r } = e;
		return /* @__PURE__ */ (0, H.jsx)(l, {
			ref: sv(t, o(c, n).collectionRef),
			children: r
		});
	});
	u.displayName = c;
	let d = e + "CollectionItemSlot", f = "data-radix-collection-item", p = /* @__PURE__ */ cv(d), m = t.forwardRef((e, n) => {
		let { scope: r, children: i, ...a } = e, s = t.useRef(null), c = sv(n, s), l = o(d, r);
		return t.useEffect(() => (l.itemMap.set(s, {
			ref: s,
			...a
		}), () => void l.itemMap.delete(s))), /* @__PURE__ */ (0, H.jsx)(p, {
			[f]: "",
			ref: c,
			children: i
		});
	});
	m.displayName = d;
	function h(n) {
		let r = o(e + "CollectionConsumer", n);
		return t.useCallback(() => {
			let e = r.collectionRef.current;
			if (!e) return [];
			let t = Array.from(e.querySelectorAll(`[${f}]`));
			return Array.from(r.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
		}, [r.collectionRef, r.itemMap]);
	}
	return [
		{
			Provider: s,
			Slot: u,
			ItemSlot: m
		},
		h,
		i
	];
}
//#endregion
//#region ../../node_modules/@radix-ui/react-direction/dist/index.mjs
var gv = e.createContext(void 0);
function _v(t) {
	let n = e.useContext(gv);
	return t || n || "ltr";
}
//#endregion
//#region ../../node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
function vv(t) {
	let n = e.useRef(t);
	return e.useEffect(() => {
		n.current = t;
	}), e.useMemo(() => (...e) => n.current?.(...e), []);
}
//#endregion
//#region ../../node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
function yv(t, n = globalThis?.document) {
	let r = vv(t);
	e.useEffect(() => {
		let e = (e) => {
			e.key === "Escape" && r(e);
		};
		return n.addEventListener("keydown", e, { capture: !0 }), () => n.removeEventListener("keydown", e, { capture: !0 });
	}, [r, n]);
}
//#endregion
//#region ../../node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var bv = "DismissableLayer", xv = "dismissableLayer.update", Sv = "dismissableLayer.pointerDownOutside", Cv = "dismissableLayer.focusOutside", wv, Tv = e.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set()
}), Ev = e.forwardRef((t, n) => {
	let { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: o, onInteractOutside: s, onDismiss: c, ...l } = t, u = e.useContext(Tv), [d, f] = e.useState(null), p = d?.ownerDocument ?? globalThis?.document, [, m] = e.useState({}), h = sv(n, (e) => f(e)), g = Array.from(u.layers), [_] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), v = g.indexOf(_), y = d ? g.indexOf(d) : -1, b = u.layersWithOutsidePointerEventsDisabled.size > 0, x = y >= v, S = kv((e) => {
		let t = e.target, n = [...u.branches].some((e) => e.contains(t));
		!x || n || (a?.(e), s?.(e), e.defaultPrevented || c?.());
	}, p), C = Av((e) => {
		let t = e.target;
		[...u.branches].some((e) => e.contains(t)) || (o?.(e), s?.(e), e.defaultPrevented || c?.());
	}, p);
	return yv((e) => {
		y === u.layers.size - 1 && (i?.(e), !e.defaultPrevented && c && (e.preventDefault(), c()));
	}, p), e.useEffect(() => {
		if (d) return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (wv = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), jv(), () => {
			r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = wv);
		};
	}, [
		d,
		p,
		r,
		u
	]), e.useEffect(() => () => {
		d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), jv());
	}, [d, u]), e.useEffect(() => {
		let e = () => m({});
		return document.addEventListener(xv, e), () => document.removeEventListener(xv, e);
	}, []), /* @__PURE__ */ (0, H.jsx)(G.div, {
		...l,
		ref: h,
		style: {
			pointerEvents: b ? x ? "auto" : "none" : void 0,
			...t.style
		},
		onFocusCapture: W(t.onFocusCapture, C.onFocusCapture),
		onBlurCapture: W(t.onBlurCapture, C.onBlurCapture),
		onPointerDownCapture: W(t.onPointerDownCapture, S.onPointerDownCapture)
	});
});
Ev.displayName = bv;
var Dv = "DismissableLayerBranch", Ov = e.forwardRef((t, n) => {
	let r = e.useContext(Tv), i = e.useRef(null), a = sv(n, i);
	return e.useEffect(() => {
		let e = i.current;
		if (e) return r.branches.add(e), () => {
			r.branches.delete(e);
		};
	}, [r.branches]), /* @__PURE__ */ (0, H.jsx)(G.div, {
		...t,
		ref: a
	});
});
Ov.displayName = Dv;
function kv(t, n = globalThis?.document) {
	let r = vv(t), i = e.useRef(!1), a = e.useRef(() => {});
	return e.useEffect(() => {
		let e = (e) => {
			if (e.target && !i.current) {
				let t = function() {
					Mv(Sv, r, i, { discrete: !0 });
				}, i = { originalEvent: e };
				e.pointerType === "touch" ? (n.removeEventListener("click", a.current), a.current = t, n.addEventListener("click", a.current, { once: !0 })) : t();
			} else n.removeEventListener("click", a.current);
			i.current = !1;
		}, t = window.setTimeout(() => {
			n.addEventListener("pointerdown", e);
		}, 0);
		return () => {
			window.clearTimeout(t), n.removeEventListener("pointerdown", e), n.removeEventListener("click", a.current);
		};
	}, [n, r]), { onPointerDownCapture: () => i.current = !0 };
}
function Av(t, n = globalThis?.document) {
	let r = vv(t), i = e.useRef(!1);
	return e.useEffect(() => {
		let e = (e) => {
			e.target && !i.current && Mv(Cv, r, { originalEvent: e }, { discrete: !1 });
		};
		return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e);
	}, [n, r]), {
		onFocusCapture: () => i.current = !0,
		onBlurCapture: () => i.current = !1
	};
}
function jv() {
	let e = new CustomEvent(xv);
	document.dispatchEvent(e);
}
function Mv(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? mv(i, a) : i.dispatchEvent(a);
}
//#endregion
//#region ../../node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var Nv = 0;
function Pv() {
	e.useEffect(() => {
		let e = document.querySelectorAll("[data-radix-focus-guard]");
		return document.body.insertAdjacentElement("afterbegin", e[0] ?? Fv()), document.body.insertAdjacentElement("beforeend", e[1] ?? Fv()), Nv++, () => {
			Nv === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), Nv--;
		};
	}, []);
}
function Fv() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
//#endregion
//#region ../../node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var Iv = "focusScope.autoFocusOnMount", Lv = "focusScope.autoFocusOnUnmount", Rv = {
	bubbles: !1,
	cancelable: !0
}, zv = "FocusScope", Bv = e.forwardRef((t, n) => {
	let { loop: r = !1, trapped: i = !1, onMountAutoFocus: a, onUnmountAutoFocus: o, ...s } = t, [c, l] = e.useState(null), u = vv(a), d = vv(o), f = e.useRef(null), p = sv(n, (e) => l(e)), m = e.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	e.useEffect(() => {
		if (i) {
			let e = function(e) {
				if (m.paused || !c) return;
				let t = e.target;
				c.contains(t) ? f.current = t : qv(f.current, { select: !0 });
			}, t = function(e) {
				if (m.paused || !c) return;
				let t = e.relatedTarget;
				t !== null && (c.contains(t) || qv(f.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && qv(c);
			};
			document.addEventListener("focusin", e), document.addEventListener("focusout", t);
			let r = new MutationObserver(n);
			return c && r.observe(c, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
			};
		}
	}, [
		i,
		c,
		m.paused
	]), e.useEffect(() => {
		if (c) {
			Jv.add(m);
			let e = document.activeElement;
			if (!c.contains(e)) {
				let t = new CustomEvent(Iv, Rv);
				c.addEventListener(Iv, u), c.dispatchEvent(t), t.defaultPrevented || (Vv(Zv(Uv(c)), { select: !0 }), document.activeElement === e && qv(c));
			}
			return () => {
				c.removeEventListener(Iv, u), setTimeout(() => {
					let t = new CustomEvent(Lv, Rv);
					c.addEventListener(Lv, d), c.dispatchEvent(t), t.defaultPrevented || qv(e ?? document.body, { select: !0 }), c.removeEventListener(Lv, d), Jv.remove(m);
				}, 0);
			};
		}
	}, [
		c,
		u,
		d,
		m
	]);
	let h = e.useCallback((e) => {
		if (!r && !i || m.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, n = document.activeElement;
		if (t && n) {
			let t = e.currentTarget, [i, a] = Hv(t);
			i && a ? !e.shiftKey && n === a ? (e.preventDefault(), r && qv(i, { select: !0 })) : e.shiftKey && n === i && (e.preventDefault(), r && qv(a, { select: !0 })) : n === t && e.preventDefault();
		}
	}, [
		r,
		i,
		m.paused
	]);
	return /* @__PURE__ */ (0, H.jsx)(G.div, {
		tabIndex: -1,
		...s,
		ref: p,
		onKeyDown: h
	});
});
Bv.displayName = zv;
function Vv(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (qv(r, { select: t }), document.activeElement !== n) return;
}
function Hv(e) {
	let t = Uv(e);
	return [Wv(t, e), Wv(t.reverse(), e)];
}
function Uv(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function Wv(e, t) {
	for (let n of e) if (!Gv(n, { upTo: t })) return n;
}
function Gv(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
function Kv(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
function qv(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && Kv(e) && t && e.select();
	}
}
var Jv = Yv();
function Yv() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = Xv(e, t), e.unshift(t);
		},
		remove(t) {
			e = Xv(e, t), e[0]?.resume();
		}
	};
}
function Xv(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
function Zv(e) {
	return e.filter((e) => e.tagName !== "A");
}
//#endregion
//#region ../../node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var Qv = globalThis?.document ? e.useLayoutEffect : () => {}, $v = e.useId || (() => void 0), ey = 0;
function ty(t) {
	let [n, r] = e.useState($v());
	return Qv(() => {
		t || r((e) => e ?? String(ey++));
	}, [t]), t || (n ? `radix-${n}` : "");
}
//#endregion
//#region ../../node_modules/@radix-ui/react-arrow/dist/index.mjs
var ny = "Arrow", ry = e.forwardRef((e, t) => {
	let { children: n, width: r = 10, height: i = 5, ...a } = e;
	return /* @__PURE__ */ (0, H.jsx)(G.svg, {
		...a,
		ref: t,
		width: r,
		height: i,
		viewBox: "0 0 30 10",
		preserveAspectRatio: "none",
		children: e.asChild ? n : /* @__PURE__ */ (0, H.jsx)("polygon", { points: "0,0 30,0 15,10" })
	});
});
ry.displayName = ny;
var iy = ry;
//#endregion
//#region ../../node_modules/@radix-ui/react-use-size/dist/index.mjs
function ay(t) {
	let [n, r] = e.useState(void 0);
	return Qv(() => {
		if (t) {
			r({
				width: t.offsetWidth,
				height: t.offsetHeight
			});
			let e = new ResizeObserver((e) => {
				if (!Array.isArray(e) || !e.length) return;
				let n = e[0], i, a;
				if ("borderBoxSize" in n) {
					let e = n.borderBoxSize, t = Array.isArray(e) ? e[0] : e;
					i = t.inlineSize, a = t.blockSize;
				} else i = t.offsetWidth, a = t.offsetHeight;
				r({
					width: i,
					height: a
				});
			});
			return e.observe(t, { box: "border-box" }), () => e.unobserve(t);
		} else r(void 0);
	}, [t]), n;
}
//#endregion
//#region ../../node_modules/@radix-ui/react-popper/dist/index.mjs
var oy = "Popper", [sy, cy] = rv(oy), [ly, uy] = sy(oy), dy = (t) => {
	let { __scopePopper: n, children: r } = t, [i, a] = e.useState(null);
	return /* @__PURE__ */ (0, H.jsx)(ly, {
		scope: n,
		anchor: i,
		onAnchorChange: a,
		children: r
	});
};
dy.displayName = oy;
var fy = "PopperAnchor", py = e.forwardRef((t, n) => {
	let { __scopePopper: r, virtualRef: i, ...a } = t, o = uy(fy, r), s = e.useRef(null), c = sv(n, s), l = e.useRef(null);
	return e.useEffect(() => {
		let e = l.current;
		l.current = i?.current || s.current, e !== l.current && o.onAnchorChange(l.current);
	}), i ? null : /* @__PURE__ */ (0, H.jsx)(G.div, {
		...a,
		ref: c
	});
});
py.displayName = fy;
var my = "PopperContent", [hy, gy] = sy(my), _y = e.forwardRef((t, n) => {
	let { __scopePopper: r, side: i = "bottom", sideOffset: a = 0, align: o = "center", alignOffset: s = 0, arrowPadding: c = 0, avoidCollisions: l = !0, collisionBoundary: u = [], collisionPadding: d = 0, sticky: f = "partial", hideWhenDetached: p = !1, updatePositionStrategy: m = "optimized", onPlaced: h, ...g } = t, _ = uy(my, r), [v, y] = e.useState(null), b = sv(n, (e) => y(e)), [x, S] = e.useState(null), C = ay(x), w = C?.width ?? 0, T = C?.height ?? 0, E = i + (o === "center" ? "" : "-" + o), D = typeof d == "number" ? d : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...d
	}, O = Array.isArray(u) ? u : [u], k = O.length > 0, A = {
		padding: D,
		boundary: O.filter(xy),
		altBoundary: k
	}, { refs: j, floatingStyles: M, placement: ee, isPositioned: N, middlewareData: P } = mg({
		strategy: "fixed",
		placement: E,
		whileElementsMounted: (...e) => eg(...e, { animationFrame: m === "always" }),
		elements: { reference: _.anchor },
		middleware: [
			gg({
				mainAxis: a + T,
				alignmentAxis: s
			}),
			l && _g({
				mainAxis: !0,
				crossAxis: !1,
				limiter: f === "partial" ? vg() : void 0,
				...A
			}),
			l && yg({ ...A }),
			bg({
				...A,
				apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}
			}),
			x && Sg({
				element: x,
				padding: c
			}),
			Sy({
				arrowWidth: w,
				arrowHeight: T
			}),
			p && xg({
				strategy: "referenceHidden",
				...A
			})
		]
	}), [te, ne] = Cy(ee), F = vv(h);
	Qv(() => {
		N && F?.();
	}, [N, F]);
	let re = P.arrow?.x, ie = P.arrow?.y, ae = P.arrow?.centerOffset !== 0, [oe, se] = e.useState();
	return Qv(() => {
		v && se(window.getComputedStyle(v).zIndex);
	}, [v]), /* @__PURE__ */ (0, H.jsx)("div", {
		ref: j.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...M,
			transform: N ? M.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: oe,
			"--radix-popper-transform-origin": [P.transformOrigin?.x, P.transformOrigin?.y].join(" "),
			...P.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: t.dir,
		children: /* @__PURE__ */ (0, H.jsx)(hy, {
			scope: r,
			placedSide: te,
			onArrowChange: S,
			arrowX: re,
			arrowY: ie,
			shouldHideArrow: ae,
			children: /* @__PURE__ */ (0, H.jsx)(G.div, {
				"data-side": te,
				"data-align": ne,
				...g,
				ref: b,
				style: {
					...g.style,
					animation: N ? void 0 : "none"
				}
			})
		})
	});
});
_y.displayName = my;
var vy = "PopperArrow", yy = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, by = e.forwardRef(function(e, t) {
	let { __scopePopper: n, ...r } = e, i = gy(vy, n), a = yy[i.placedSide];
	return /* @__PURE__ */ (0, H.jsx)("span", {
		ref: i.onArrowChange,
		style: {
			position: "absolute",
			left: i.arrowX,
			top: i.arrowY,
			[a]: 0,
			transformOrigin: {
				top: "",
				right: "0 0",
				bottom: "center 0",
				left: "100% 0"
			}[i.placedSide],
			transform: {
				top: "translateY(100%)",
				right: "translateY(50%) rotate(90deg) translateX(-50%)",
				bottom: "rotate(180deg)",
				left: "translateY(50%) rotate(-90deg) translateX(50%)"
			}[i.placedSide],
			visibility: i.shouldHideArrow ? "hidden" : void 0
		},
		children: /* @__PURE__ */ (0, H.jsx)(iy, {
			...r,
			ref: t,
			style: {
				...r.style,
				display: "block"
			}
		})
	});
});
by.displayName = vy;
function xy(e) {
	return e !== null;
}
var Sy = (e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = Cy(n), u = {
			start: "0%",
			center: "50%",
			end: "100%"
		}[l], d = (i.arrow?.x ?? 0) + o / 2, f = (i.arrow?.y ?? 0) + s / 2, p = "", m = "";
		return c === "bottom" ? (p = a ? u : `${d}px`, m = `${-s}px`) : c === "top" ? (p = a ? u : `${d}px`, m = `${r.floating.height + s}px`) : c === "right" ? (p = `${-s}px`, m = a ? u : `${f}px`) : c === "left" && (p = `${r.floating.width + s}px`, m = a ? u : `${f}px`), { data: {
			x: p,
			y: m
		} };
	}
});
function Cy(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
var wy = dy, Ty = py, Ey = _y, Dy = by, Oy = "Portal", ky = e.forwardRef((t, n) => {
	let { container: r, ...i } = t, [a, o] = e.useState(!1);
	Qv(() => o(!0), []);
	let s = r || a && globalThis?.document?.body;
	return s ? y.createPortal(/* @__PURE__ */ (0, H.jsx)(G.div, {
		...i,
		ref: n
	}), s) : null;
});
ky.displayName = Oy;
//#endregion
//#region ../../node_modules/@radix-ui/react-presence/dist/index.mjs
function Ay(t, n) {
	return e.useReducer((e, t) => n[e][t] ?? e, t);
}
var jy = (t) => {
	let { present: n, children: r } = t, i = My(n), a = typeof r == "function" ? r({ present: i.isPresent }) : e.Children.only(r), o = sv(i.ref, Py(a));
	return typeof r == "function" || i.isPresent ? e.cloneElement(a, { ref: o }) : null;
};
jy.displayName = "Presence";
function My(t) {
	let [n, r] = e.useState(), i = e.useRef(null), a = e.useRef(t), o = e.useRef("none"), [s, c] = Ay(t ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	return e.useEffect(() => {
		let e = Ny(i.current);
		o.current = s === "mounted" ? e : "none";
	}, [s]), Qv(() => {
		let e = i.current, n = a.current;
		if (n !== t) {
			let r = o.current, i = Ny(e);
			t ? c("MOUNT") : i === "none" || e?.display === "none" ? c("UNMOUNT") : c(n && r !== i ? "ANIMATION_OUT" : "UNMOUNT"), a.current = t;
		}
	}, [t, c]), Qv(() => {
		if (n) {
			let e, t = n.ownerDocument.defaultView ?? window, r = (r) => {
				let o = Ny(i.current).includes(CSS.escape(r.animationName));
				if (r.target === n && o && (c("ANIMATION_END"), !a.current)) {
					let r = n.style.animationFillMode;
					n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
						n.style.animationFillMode === "forwards" && (n.style.animationFillMode = r);
					});
				}
			}, s = (e) => {
				e.target === n && (o.current = Ny(i.current));
			};
			return n.addEventListener("animationstart", s), n.addEventListener("animationcancel", r), n.addEventListener("animationend", r), () => {
				t.clearTimeout(e), n.removeEventListener("animationstart", s), n.removeEventListener("animationcancel", r), n.removeEventListener("animationend", r);
			};
		} else c("ANIMATION_END");
	}, [n, c]), {
		isPresent: ["mounted", "unmountSuspended"].includes(s),
		ref: e.useCallback((e) => {
			i.current = e ? getComputedStyle(e) : null, r(e);
		}, [])
	};
}
function Ny(e) {
	return e?.animationName || "none";
}
function Py(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region ../../node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var Fy = e.useInsertionEffect || Qv;
function Iy({ prop: t, defaultProp: n, onChange: r = () => {}, caller: i }) {
	let [a, o, s] = Ly({
		defaultProp: n,
		onChange: r
	}), c = t !== void 0, l = c ? t : a;
	{
		let n = e.useRef(t !== void 0);
		e.useEffect(() => {
			let e = n.current;
			e !== c && console.warn(`${i} is changing from ${e ? "controlled" : "uncontrolled"} to ${c ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), n.current = c;
		}, [c, i]);
	}
	return [l, e.useCallback((e) => {
		if (c) {
			let n = Ry(e) ? e(t) : e;
			n !== t && s.current?.(n);
		} else o(e);
	}, [
		c,
		t,
		o,
		s
	])];
}
function Ly({ defaultProp: t, onChange: n }) {
	let [r, i] = e.useState(t), a = e.useRef(r), o = e.useRef(n);
	return Fy(() => {
		o.current = n;
	}, [n]), e.useEffect(() => {
		a.current !== r && (o.current?.(r), a.current = r);
	}, [r, a]), [
		r,
		i,
		o
	];
}
function Ry(e) {
	return typeof e == "function";
}
//#endregion
//#region ../../node_modules/@radix-ui/react-roving-focus/dist/index.mjs
var zy = "rovingFocusGroup.onEntryFocus", By = {
	bubbles: !1,
	cancelable: !0
}, Vy = "RovingFocusGroup", [Hy, Uy, Wy] = hv(Vy), [Gy, Ky] = rv(Vy, [Wy]), [qy, Jy] = Gy(Vy), Yy = e.forwardRef((e, t) => /* @__PURE__ */ (0, H.jsx)(Hy.Provider, {
	scope: e.__scopeRovingFocusGroup,
	children: /* @__PURE__ */ (0, H.jsx)(Hy.Slot, {
		scope: e.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ (0, H.jsx)(Xy, {
			...e,
			ref: t
		})
	})
}));
Yy.displayName = Vy;
var Xy = e.forwardRef((t, n) => {
	let { __scopeRovingFocusGroup: r, orientation: i, loop: a = !1, dir: o, currentTabStopId: s, defaultCurrentTabStopId: c, onCurrentTabStopIdChange: l, onEntryFocus: u, preventScrollOnEntryFocus: d = !1, ...f } = t, p = e.useRef(null), m = sv(n, p), h = _v(o), [g, _] = Iy({
		prop: s,
		defaultProp: c ?? null,
		onChange: l,
		caller: Vy
	}), [v, y] = e.useState(!1), b = vv(u), x = Uy(r), S = e.useRef(!1), [C, w] = e.useState(0);
	return e.useEffect(() => {
		let e = p.current;
		if (e) return e.addEventListener(zy, b), () => e.removeEventListener(zy, b);
	}, [b]), /* @__PURE__ */ (0, H.jsx)(qy, {
		scope: r,
		orientation: i,
		dir: h,
		loop: a,
		currentTabStopId: g,
		onItemFocus: e.useCallback((e) => _(e), [_]),
		onItemShiftTab: e.useCallback(() => y(!0), []),
		onFocusableItemAdd: e.useCallback(() => w((e) => e + 1), []),
		onFocusableItemRemove: e.useCallback(() => w((e) => e - 1), []),
		children: /* @__PURE__ */ (0, H.jsx)(G.div, {
			tabIndex: v || C === 0 ? -1 : 0,
			"data-orientation": i,
			...f,
			ref: m,
			style: {
				outline: "none",
				...t.style
			},
			onMouseDown: W(t.onMouseDown, () => {
				S.current = !0;
			}),
			onFocus: W(t.onFocus, (e) => {
				let t = !S.current;
				if (e.target === e.currentTarget && t && !v) {
					let t = new CustomEvent(zy, By);
					if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
						let e = x().filter((e) => e.focusable);
						nb([
							e.find((e) => e.active),
							e.find((e) => e.id === g),
							...e
						].filter(Boolean).map((e) => e.ref.current), d);
					}
				}
				S.current = !1;
			}),
			onBlur: W(t.onBlur, () => y(!1))
		})
	});
}), Zy = "RovingFocusGroupItem", Qy = e.forwardRef((t, n) => {
	let { __scopeRovingFocusGroup: r, focusable: i = !0, active: a = !1, tabStopId: o, children: s, ...c } = t, l = ty(), u = o || l, d = Jy(Zy, r), f = d.currentTabStopId === u, p = Uy(r), { onFocusableItemAdd: m, onFocusableItemRemove: h, currentTabStopId: g } = d;
	return e.useEffect(() => {
		if (i) return m(), () => h();
	}, [
		i,
		m,
		h
	]), /* @__PURE__ */ (0, H.jsx)(Hy.ItemSlot, {
		scope: r,
		id: u,
		focusable: i,
		active: a,
		children: /* @__PURE__ */ (0, H.jsx)(G.span, {
			tabIndex: f ? 0 : -1,
			"data-orientation": d.orientation,
			...c,
			ref: n,
			onMouseDown: W(t.onMouseDown, (e) => {
				i ? d.onItemFocus(u) : e.preventDefault();
			}),
			onFocus: W(t.onFocus, () => d.onItemFocus(u)),
			onKeyDown: W(t.onKeyDown, (e) => {
				if (e.key === "Tab" && e.shiftKey) {
					d.onItemShiftTab();
					return;
				}
				if (e.target !== e.currentTarget) return;
				let t = tb(e, d.orientation, d.dir);
				if (t !== void 0) {
					if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
					e.preventDefault();
					let n = p().filter((e) => e.focusable).map((e) => e.ref.current);
					if (t === "last") n.reverse();
					else if (t === "prev" || t === "next") {
						t === "prev" && n.reverse();
						let r = n.indexOf(e.currentTarget);
						n = d.loop ? rb(n, r + 1) : n.slice(r + 1);
					}
					setTimeout(() => nb(n));
				}
			}),
			children: typeof s == "function" ? s({
				isCurrentTabStop: f,
				hasTabStop: g != null
			}) : s
		})
	});
});
Qy.displayName = Zy;
var $y = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function eb(e, t) {
	return t === "rtl" ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
function tb(e, t, n) {
	let r = eb(e.key, n);
	if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return $y[r];
}
function nb(e, t = !1) {
	let n = document.activeElement;
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function rb(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
var ib = Yy, ab = Qy, ob = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, sb = /* @__PURE__ */ new WeakMap(), cb = /* @__PURE__ */ new WeakMap(), lb = {}, ub = 0, db = function(e) {
	return e && (e.host || db(e.parentNode));
}, fb = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = db(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, pb = function(e, t, n, r) {
	var i = fb(t, Array.isArray(e) ? e : [e]);
	lb[n] || (lb[n] = /* @__PURE__ */ new WeakMap());
	var a = lb[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (sb.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				sb.set(e, c), a.set(e, l), o.push(e), c === 1 && i && cb.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), ub++, function() {
		o.forEach(function(e) {
			var t = sb.get(e) - 1, i = a.get(e) - 1;
			sb.set(e, t), a.set(e, i), t || (cb.has(e) || e.removeAttribute(r), cb.delete(e)), i || e.removeAttribute(n);
		}), ub--, ub || (sb = /* @__PURE__ */ new WeakMap(), sb = /* @__PURE__ */ new WeakMap(), cb = /* @__PURE__ */ new WeakMap(), lb = {});
	};
}, mb = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || ob(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), pb(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, hb = function() {
	return hb = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, hb.apply(this, arguments);
};
function gb(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function _b(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region ../../node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var vb = "right-scroll-bar-position", yb = "width-before-scroll-bar", bb = "with-scroll-bars-hidden", xb = "--removed-body-scroll-bar-size";
//#endregion
//#region ../../node_modules/use-callback-ref/dist/es2015/assignRef.js
function Sb(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region ../../node_modules/use-callback-ref/dist/es2015/useRef.js
function Cb(e, t) {
	var n = h(function() {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return n.value;
				},
				set current(e) {
					var t = n.value;
					t !== e && (n.value = e, n.callback(e, t));
				}
			}
		};
	})[0];
	return n.callback = t, n.facade;
}
//#endregion
//#region ../../node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var wb = typeof window < "u" ? e.useLayoutEffect : e.useEffect, Tb = /* @__PURE__ */ new WeakMap();
function Eb(e, t) {
	var n = Cb(t || null, function(t) {
		return e.forEach(function(e) {
			return Sb(e, t);
		});
	});
	return wb(function() {
		var t = Tb.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || Sb(e, null);
			}), i.forEach(function(e) {
				r.has(e) || Sb(e, a);
			});
		}
		Tb.set(n, e);
	}, [e]), n;
}
//#endregion
//#region ../../node_modules/use-sidecar/dist/es2015/medium.js
function Db(e) {
	return e;
}
function Ob(e, t) {
	t === void 0 && (t = Db);
	var n = [], r = !1;
	return {
		read: function() {
			if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			return n.length ? n[n.length - 1] : e;
		},
		useMedium: function(e) {
			var i = t(e, r);
			return n.push(i), function() {
				n = n.filter(function(e) {
					return e !== i;
				});
			};
		},
		assignSyncMedium: function(e) {
			for (r = !0; n.length;) {
				var t = n;
				n = [], t.forEach(e);
			}
			n = {
				push: function(t) {
					return e(t);
				},
				filter: function() {
					return n;
				}
			};
		},
		assignMedium: function(e) {
			r = !0;
			var t = [];
			if (n.length) {
				var i = n;
				n = [], i.forEach(e), t = n;
			}
			var a = function() {
				var n = t;
				t = [], n.forEach(e);
			}, o = function() {
				return Promise.resolve().then(a);
			};
			o(), n = {
				push: function(e) {
					t.push(e), o();
				},
				filter: function(e) {
					return t = t.filter(e), n;
				}
			};
		}
	};
}
function kb(e) {
	e === void 0 && (e = {});
	var t = Ob(null);
	return t.options = hb({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region ../../node_modules/use-sidecar/dist/es2015/exports.js
var Ab = function(t) {
	var n = t.sideCar, r = gb(t, ["sideCar"]);
	if (!n) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var i = n.read();
	if (!i) throw Error("Sidecar medium not found");
	return e.createElement(i, hb({}, r));
};
Ab.isSideCarExport = !0;
function jb(e, t) {
	return e.useMedium(t), Ab;
}
//#endregion
//#region ../../node_modules/react-remove-scroll/dist/es2015/medium.js
var Mb = kb(), Nb = function() {}, Pb = e.forwardRef(function(t, n) {
	var r = e.useRef(null), i = e.useState({
		onScrollCapture: Nb,
		onWheelCapture: Nb,
		onTouchMoveCapture: Nb
	}), a = i[0], o = i[1], s = t.forwardProps, c = t.children, l = t.className, u = t.removeScrollBar, d = t.enabled, f = t.shards, p = t.sideCar, m = t.noRelative, h = t.noIsolation, g = t.inert, _ = t.allowPinchZoom, v = t.as, y = v === void 0 ? "div" : v, b = t.gapMode, x = gb(t, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]), S = p, C = Eb([r, n]), w = hb(hb({}, x), a);
	return e.createElement(e.Fragment, null, d && e.createElement(S, {
		sideCar: Mb,
		removeScrollBar: u,
		shards: f,
		noRelative: m,
		noIsolation: h,
		inert: g,
		setCallbacks: o,
		allowPinchZoom: !!_,
		lockRef: r,
		gapMode: b
	}), s ? e.cloneElement(e.Children.only(c), hb(hb({}, w), { ref: C })) : e.createElement(y, hb({}, w, {
		className: l,
		ref: C
	}), c));
});
Pb.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, Pb.classNames = {
	fullWidth: yb,
	zeroRight: vb
};
//#endregion
//#region ../../node_modules/get-nonce/dist/es2015/index.js
var Fb, Ib = function() {
	if (Fb) return Fb;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region ../../node_modules/react-style-singleton/dist/es2015/singleton.js
function Lb() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = Ib();
	return t && e.setAttribute("nonce", t), e;
}
function Rb(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function zb(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var Bb = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = Lb()) && (Rb(t, n), zb(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, Vb = function() {
	var t = Bb();
	return function(n, r) {
		e.useEffect(function() {
			return t.add(n), function() {
				t.remove();
			};
		}, [n && r]);
	};
}, Hb = function() {
	var e = Vb();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, Ub = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, Wb = function(e) {
	return parseInt(e || "", 10) || 0;
}, Gb = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		Wb(n),
		Wb(r),
		Wb(i)
	];
}, Kb = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return Ub;
	var t = Gb(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, qb = Hb(), Jb = "data-scroll-locked", Yb = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${bb} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${Jb}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
		t && `position: relative ${r};`,
		n === "margin" && `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
		n === "padding" && `padding-right: ${s}px ${r};`
	].filter(Boolean).join("")}
  }
  
  .${vb} {
    right: ${s}px ${r};
  }
  
  .${yb} {
    margin-right: ${s}px ${r};
  }
  
  .${vb} .${vb} {
    right: 0 ${r};
  }
  
  .${yb} .${yb} {
    margin-right: 0 ${r};
  }
  
  body[${Jb}] {
    ${xb}: ${s}px;
  }
`;
}, Xb = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, Zb = function() {
	e.useEffect(function() {
		return document.body.setAttribute(Jb, (Xb() + 1).toString()), function() {
			var e = Xb() - 1;
			e <= 0 ? document.body.removeAttribute(Jb) : document.body.setAttribute(Jb, e.toString());
		};
	}, []);
}, Qb = function(t) {
	var n = t.noRelative, r = t.noImportant, i = t.gapMode, a = i === void 0 ? "margin" : i;
	Zb();
	var o = e.useMemo(function() {
		return Kb(a);
	}, [a]);
	return e.createElement(qb, { styles: Yb(o, !n, a, r ? "" : "!important") });
}, $b = !1;
if (typeof window < "u") try {
	var ex = Object.defineProperty({}, "passive", { get: function() {
		return $b = !0, !0;
	} });
	window.addEventListener("test", ex, ex), window.removeEventListener("test", ex, ex);
} catch {
	$b = !1;
}
var tx = $b ? { passive: !1 } : !1, nx = function(e) {
	return e.tagName === "TEXTAREA";
}, rx = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !nx(e) && n[t] === "visible");
}, ix = function(e) {
	return rx(e, "overflowY");
}, ax = function(e) {
	return rx(e, "overflowX");
}, ox = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), lx(e, r)) {
			var i = ux(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, sx = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, cx = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, lx = function(e, t) {
	return e === "v" ? ix(t) : ax(t);
}, ux = function(e, t) {
	return e === "v" ? sx(t) : cx(t);
}, dx = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, fx = function(e, t, n, r, i) {
	var a = dx(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = ux(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && lx(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, px = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, mx = function(e) {
	return [e.deltaX, e.deltaY];
}, hx = function(e) {
	return e && "current" in e ? e.current : e;
}, gx = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, _x = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, vx = 0, yx = [];
function bx(t) {
	var n = e.useRef([]), r = e.useRef([0, 0]), i = e.useRef(), a = e.useState(vx++)[0], o = e.useState(Hb)[0], s = e.useRef(t);
	e.useEffect(function() {
		s.current = t;
	}, [t]), e.useEffect(function() {
		if (t.inert) {
			document.body.classList.add(`block-interactivity-${a}`);
			var e = _b([t.lockRef.current], (t.shards || []).map(hx), !0).filter(Boolean);
			return e.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${a}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${a}`), e.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${a}`);
				});
			};
		}
	}, [
		t.inert,
		t.lockRef.current,
		t.shards
	]);
	var c = e.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !s.current.allowPinchZoom;
		var n = px(e), a = r.current, o = "deltaX" in e ? e.deltaX : a[0] - n[0], c = "deltaY" in e ? e.deltaY : a[1] - n[1], l, u = e.target, d = Math.abs(o) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = ox(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = ox(d, u)), !m) return !1;
		if (!i.current && "changedTouches" in e && (o || c) && (i.current = l), !l) return !0;
		var h = i.current || l;
		return fx(h, t, e, h === "h" ? o : c, !0);
	}, []), l = e.useCallback(function(e) {
		var t = e;
		if (!(!yx.length || yx[yx.length - 1] !== o)) {
			var r = "deltaY" in t ? mx(t) : px(t), i = n.current.filter(function(e) {
				return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && gx(e.delta, r);
			})[0];
			if (i && i.should) {
				t.cancelable && t.preventDefault();
				return;
			}
			if (!i) {
				var a = (s.current.shards || []).map(hx).filter(Boolean).filter(function(e) {
					return e.contains(t.target);
				});
				(a.length > 0 ? c(t, a[0]) : !s.current.noIsolation) && t.cancelable && t.preventDefault();
			}
		}
	}, []), u = e.useCallback(function(e, t, r, i) {
		var a = {
			name: e,
			delta: t,
			target: r,
			should: i,
			shadowParent: xx(r)
		};
		n.current.push(a), setTimeout(function() {
			n.current = n.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), d = e.useCallback(function(e) {
		r.current = px(e), i.current = void 0;
	}, []), f = e.useCallback(function(e) {
		u(e.type, mx(e), e.target, c(e, t.lockRef.current));
	}, []), p = e.useCallback(function(e) {
		u(e.type, px(e), e.target, c(e, t.lockRef.current));
	}, []);
	e.useEffect(function() {
		return yx.push(o), t.setCallbacks({
			onScrollCapture: f,
			onWheelCapture: f,
			onTouchMoveCapture: p
		}), document.addEventListener("wheel", l, tx), document.addEventListener("touchmove", l, tx), document.addEventListener("touchstart", d, tx), function() {
			yx = yx.filter(function(e) {
				return e !== o;
			}), document.removeEventListener("wheel", l, tx), document.removeEventListener("touchmove", l, tx), document.removeEventListener("touchstart", d, tx);
		};
	}, []);
	var m = t.removeScrollBar, h = t.inert;
	return e.createElement(e.Fragment, null, h ? e.createElement(o, { styles: _x(a) }) : null, m ? e.createElement(Qb, {
		noRelative: t.noRelative,
		gapMode: t.gapMode
	}) : null);
}
function xx(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region ../../node_modules/react-remove-scroll/dist/es2015/sidecar.js
var Sx = jb(Mb, bx), Cx = e.forwardRef(function(t, n) {
	return e.createElement(Pb, hb({}, t, {
		ref: n,
		sideCar: Sx
	}));
});
Cx.classNames = Pb.classNames;
//#endregion
//#region ../../node_modules/@radix-ui/react-menu/dist/index.mjs
var wx = ["Enter", " "], Tx = [
	"ArrowDown",
	"PageUp",
	"Home"
], Ex = [
	"ArrowUp",
	"PageDown",
	"End"
], Dx = [...Tx, ...Ex], Ox = {
	ltr: [...wx, "ArrowRight"],
	rtl: [...wx, "ArrowLeft"]
}, kx = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
}, Ax = "Menu", [jx, Mx, Nx] = hv(Ax), [Px, Fx] = rv(Ax, [
	Nx,
	cy,
	Ky
]), Ix = cy(), Lx = Ky(), [Rx, zx] = Px(Ax), [Bx, Vx] = Px(Ax), Hx = (t) => {
	let { __scopeMenu: n, open: r = !1, children: i, dir: a, onOpenChange: o, modal: s = !0 } = t, c = Ix(n), [l, u] = e.useState(null), d = e.useRef(!1), f = vv(o), p = _v(a);
	return e.useEffect(() => {
		let e = () => {
			d.current = !0, document.addEventListener("pointerdown", t, {
				capture: !0,
				once: !0
			}), document.addEventListener("pointermove", t, {
				capture: !0,
				once: !0
			});
		}, t = () => d.current = !1;
		return document.addEventListener("keydown", e, { capture: !0 }), () => {
			document.removeEventListener("keydown", e, { capture: !0 }), document.removeEventListener("pointerdown", t, { capture: !0 }), document.removeEventListener("pointermove", t, { capture: !0 });
		};
	}, []), /* @__PURE__ */ (0, H.jsx)(wy, {
		...c,
		children: /* @__PURE__ */ (0, H.jsx)(Rx, {
			scope: n,
			open: r,
			onOpenChange: f,
			content: l,
			onContentChange: u,
			children: /* @__PURE__ */ (0, H.jsx)(Bx, {
				scope: n,
				onClose: e.useCallback(() => f(!1), [f]),
				isUsingKeyboardRef: d,
				dir: p,
				modal: s,
				children: i
			})
		})
	});
};
Hx.displayName = Ax;
var Ux = "MenuAnchor", Wx = e.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e, i = Ix(n);
	return /* @__PURE__ */ (0, H.jsx)(Ty, {
		...i,
		...r,
		ref: t
	});
});
Wx.displayName = Ux;
var Gx = "MenuPortal", [Kx, qx] = Px(Gx, { forceMount: void 0 }), Jx = (e) => {
	let { __scopeMenu: t, forceMount: n, children: r, container: i } = e, a = zx(Gx, t);
	return /* @__PURE__ */ (0, H.jsx)(Kx, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ (0, H.jsx)(jy, {
			present: n || a.open,
			children: /* @__PURE__ */ (0, H.jsx)(ky, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
Jx.displayName = Gx;
var Yx = "MenuContent", [Xx, Zx] = Px(Yx), Qx = e.forwardRef((e, t) => {
	let n = qx(Yx, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, a = zx(Yx, e.__scopeMenu), o = Vx(Yx, e.__scopeMenu);
	return /* @__PURE__ */ (0, H.jsx)(jx.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ (0, H.jsx)(jy, {
			present: r || a.open,
			children: /* @__PURE__ */ (0, H.jsx)(jx.Slot, {
				scope: e.__scopeMenu,
				children: o.modal ? /* @__PURE__ */ (0, H.jsx)($x, {
					...i,
					ref: t
				}) : /* @__PURE__ */ (0, H.jsx)(eS, {
					...i,
					ref: t
				})
			})
		})
	});
}), $x = e.forwardRef((t, n) => {
	let r = zx(Yx, t.__scopeMenu), i = e.useRef(null), a = sv(n, i);
	return e.useEffect(() => {
		let e = i.current;
		if (e) return mb(e);
	}, []), /* @__PURE__ */ (0, H.jsx)(nS, {
		...t,
		ref: a,
		trapFocus: r.open,
		disableOutsidePointerEvents: r.open,
		disableOutsideScroll: !0,
		onFocusOutside: W(t.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => r.onOpenChange(!1)
	});
}), eS = e.forwardRef((e, t) => {
	let n = zx(Yx, e.__scopeMenu);
	return /* @__PURE__ */ (0, H.jsx)(nS, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => n.onOpenChange(!1)
	});
}), tS = /* @__PURE__ */ cv("MenuContent.ScrollLock"), nS = e.forwardRef((t, n) => {
	let { __scopeMenu: r, loop: i = !1, trapFocus: a, onOpenAutoFocus: o, onCloseAutoFocus: s, disableOutsidePointerEvents: c, onEntryFocus: l, onEscapeKeyDown: u, onPointerDownOutside: d, onFocusOutside: f, onInteractOutside: p, onDismiss: m, disableOutsideScroll: h, ...g } = t, _ = zx(Yx, r), v = Vx(Yx, r), y = Ix(r), b = Lx(r), x = Mx(r), [S, C] = e.useState(null), w = e.useRef(null), T = sv(n, w, _.onContentChange), E = e.useRef(0), D = e.useRef(""), O = e.useRef(0), k = e.useRef(null), A = e.useRef("right"), j = e.useRef(0), M = h ? Cx : e.Fragment, ee = h ? {
		as: tS,
		allowPinchZoom: !0
	} : void 0, N = (e) => {
		let t = D.current + e, n = x().filter((e) => !e.disabled), r = document.activeElement, i = n.find((e) => e.ref.current === r)?.textValue, a = BS(n.map((e) => e.textValue), t, i), o = n.find((e) => e.textValue === a)?.ref.current;
		(function e(t) {
			D.current = t, window.clearTimeout(E.current), t !== "" && (E.current = window.setTimeout(() => e(""), 1e3));
		})(t), o && setTimeout(() => o.focus());
	};
	e.useEffect(() => () => window.clearTimeout(E.current), []), Pv();
	let P = e.useCallback((e) => A.current === k.current?.side && HS(e, k.current?.area), []);
	return /* @__PURE__ */ (0, H.jsx)(Xx, {
		scope: r,
		searchRef: D,
		onItemEnter: e.useCallback((e) => {
			P(e) && e.preventDefault();
		}, [P]),
		onItemLeave: e.useCallback((e) => {
			P(e) || (w.current?.focus(), C(null));
		}, [P]),
		onTriggerLeave: e.useCallback((e) => {
			P(e) && e.preventDefault();
		}, [P]),
		pointerGraceTimerRef: O,
		onPointerGraceIntentChange: e.useCallback((e) => {
			k.current = e;
		}, []),
		children: /* @__PURE__ */ (0, H.jsx)(M, {
			...ee,
			children: /* @__PURE__ */ (0, H.jsx)(Bv, {
				asChild: !0,
				trapped: a,
				onMountAutoFocus: W(o, (e) => {
					e.preventDefault(), w.current?.focus({ preventScroll: !0 });
				}),
				onUnmountAutoFocus: s,
				children: /* @__PURE__ */ (0, H.jsx)(Ev, {
					asChild: !0,
					disableOutsidePointerEvents: c,
					onEscapeKeyDown: u,
					onPointerDownOutside: d,
					onFocusOutside: f,
					onInteractOutside: p,
					onDismiss: m,
					children: /* @__PURE__ */ (0, H.jsx)(ib, {
						asChild: !0,
						...b,
						dir: v.dir,
						orientation: "vertical",
						loop: i,
						currentTabStopId: S,
						onCurrentTabStopIdChange: C,
						onEntryFocus: W(l, (e) => {
							v.isUsingKeyboardRef.current || e.preventDefault();
						}),
						preventScrollOnEntryFocus: !0,
						children: /* @__PURE__ */ (0, H.jsx)(Ey, {
							role: "menu",
							"aria-orientation": "vertical",
							"data-state": FS(_.open),
							"data-radix-menu-content": "",
							dir: v.dir,
							...y,
							...g,
							ref: T,
							style: {
								outline: "none",
								...g.style
							},
							onKeyDown: W(g.onKeyDown, (e) => {
								let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget, n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1;
								t && (e.key === "Tab" && e.preventDefault(), !n && r && N(e.key));
								let i = w.current;
								if (e.target !== i || !Dx.includes(e.key)) return;
								e.preventDefault();
								let a = x().filter((e) => !e.disabled).map((e) => e.ref.current);
								Ex.includes(e.key) && a.reverse(), RS(a);
							}),
							onBlur: W(t.onBlur, (e) => {
								e.currentTarget.contains(e.target) || (window.clearTimeout(E.current), D.current = "");
							}),
							onPointerMove: W(t.onPointerMove, US((e) => {
								let t = e.target, n = j.current !== e.clientX;
								e.currentTarget.contains(t) && n && (A.current = e.clientX > j.current ? "right" : "left", j.current = e.clientX);
							}))
						})
					})
				})
			})
		})
	});
});
Qx.displayName = Yx;
var rS = "MenuGroup", iS = e.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ (0, H.jsx)(G.div, {
		role: "group",
		...r,
		ref: t
	});
});
iS.displayName = rS;
var aS = "MenuLabel", oS = e.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ (0, H.jsx)(G.div, {
		...r,
		ref: t
	});
});
oS.displayName = aS;
var sS = "MenuItem", cS = "menu.itemSelect", lS = e.forwardRef((t, n) => {
	let { disabled: r = !1, onSelect: i, ...a } = t, o = e.useRef(null), s = Vx(sS, t.__scopeMenu), c = Zx(sS, t.__scopeMenu), l = sv(n, o), u = e.useRef(!1), d = () => {
		let e = o.current;
		if (!r && e) {
			let t = new CustomEvent(cS, {
				bubbles: !0,
				cancelable: !0
			});
			e.addEventListener(cS, (e) => i?.(e), { once: !0 }), mv(e, t), t.defaultPrevented ? u.current = !1 : s.onClose();
		}
	};
	return /* @__PURE__ */ (0, H.jsx)(uS, {
		...a,
		ref: l,
		disabled: r,
		onClick: W(t.onClick, d),
		onPointerDown: (e) => {
			t.onPointerDown?.(e), u.current = !0;
		},
		onPointerUp: W(t.onPointerUp, (e) => {
			u.current || e.currentTarget?.click();
		}),
		onKeyDown: W(t.onKeyDown, (e) => {
			let t = c.searchRef.current !== "";
			r || t && e.key === " " || wx.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
		})
	});
});
lS.displayName = sS;
var uS = e.forwardRef((t, n) => {
	let { __scopeMenu: r, disabled: i = !1, textValue: a, ...o } = t, s = Zx(sS, r), c = Lx(r), l = e.useRef(null), u = sv(n, l), [d, f] = e.useState(!1), [p, m] = e.useState("");
	return e.useEffect(() => {
		let e = l.current;
		e && m((e.textContent ?? "").trim());
	}, [o.children]), /* @__PURE__ */ (0, H.jsx)(jx.ItemSlot, {
		scope: r,
		disabled: i,
		textValue: a ?? p,
		children: /* @__PURE__ */ (0, H.jsx)(ab, {
			asChild: !0,
			...c,
			focusable: !i,
			children: /* @__PURE__ */ (0, H.jsx)(G.div, {
				role: "menuitem",
				"data-highlighted": d ? "" : void 0,
				"aria-disabled": i || void 0,
				"data-disabled": i ? "" : void 0,
				...o,
				ref: u,
				onPointerMove: W(t.onPointerMove, US((e) => {
					i ? s.onItemLeave(e) : (s.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: W(t.onPointerLeave, US((e) => s.onItemLeave(e))),
				onFocus: W(t.onFocus, () => f(!0)),
				onBlur: W(t.onBlur, () => f(!1))
			})
		})
	});
}), dS = "MenuCheckboxItem", fS = e.forwardRef((e, t) => {
	let { checked: n = !1, onCheckedChange: r, ...i } = e;
	return /* @__PURE__ */ (0, H.jsx)(bS, {
		scope: e.__scopeMenu,
		checked: n,
		children: /* @__PURE__ */ (0, H.jsx)(lS, {
			role: "menuitemcheckbox",
			"aria-checked": IS(n) ? "mixed" : n,
			...i,
			ref: t,
			"data-state": LS(n),
			onSelect: W(i.onSelect, () => r?.(IS(n) ? !0 : !n), { checkForDefaultPrevented: !1 })
		})
	});
});
fS.displayName = dS;
var pS = "MenuRadioGroup", [mS, hS] = Px(pS, {
	value: void 0,
	onValueChange: () => {}
}), gS = e.forwardRef((e, t) => {
	let { value: n, onValueChange: r, ...i } = e, a = vv(r);
	return /* @__PURE__ */ (0, H.jsx)(mS, {
		scope: e.__scopeMenu,
		value: n,
		onValueChange: a,
		children: /* @__PURE__ */ (0, H.jsx)(iS, {
			...i,
			ref: t
		})
	});
});
gS.displayName = pS;
var _S = "MenuRadioItem", vS = e.forwardRef((e, t) => {
	let { value: n, ...r } = e, i = hS(_S, e.__scopeMenu), a = n === i.value;
	return /* @__PURE__ */ (0, H.jsx)(bS, {
		scope: e.__scopeMenu,
		checked: a,
		children: /* @__PURE__ */ (0, H.jsx)(lS, {
			role: "menuitemradio",
			"aria-checked": a,
			...r,
			ref: t,
			"data-state": LS(a),
			onSelect: W(r.onSelect, () => i.onValueChange?.(n), { checkForDefaultPrevented: !1 })
		})
	});
});
vS.displayName = _S;
var yS = "MenuItemIndicator", [bS, xS] = Px(yS, { checked: !1 }), SS = e.forwardRef((e, t) => {
	let { __scopeMenu: n, forceMount: r, ...i } = e, a = xS(yS, n);
	return /* @__PURE__ */ (0, H.jsx)(jy, {
		present: r || IS(a.checked) || a.checked === !0,
		children: /* @__PURE__ */ (0, H.jsx)(G.span, {
			...i,
			ref: t,
			"data-state": LS(a.checked)
		})
	});
});
SS.displayName = yS;
var CS = "MenuSeparator", wS = e.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ (0, H.jsx)(G.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...r,
		ref: t
	});
});
wS.displayName = CS;
var TS = "MenuArrow", ES = e.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e, i = Ix(n);
	return /* @__PURE__ */ (0, H.jsx)(Dy, {
		...i,
		...r,
		ref: t
	});
});
ES.displayName = TS;
var DS = "MenuSub", [OS, kS] = Px(DS), AS = (t) => {
	let { __scopeMenu: n, children: r, open: i = !1, onOpenChange: a } = t, o = zx(DS, n), s = Ix(n), [c, l] = e.useState(null), [u, d] = e.useState(null), f = vv(a);
	return e.useEffect(() => (o.open === !1 && f(!1), () => f(!1)), [o.open, f]), /* @__PURE__ */ (0, H.jsx)(wy, {
		...s,
		children: /* @__PURE__ */ (0, H.jsx)(Rx, {
			scope: n,
			open: i,
			onOpenChange: f,
			content: u,
			onContentChange: d,
			children: /* @__PURE__ */ (0, H.jsx)(OS, {
				scope: n,
				contentId: ty(),
				triggerId: ty(),
				trigger: c,
				onTriggerChange: l,
				children: r
			})
		})
	});
};
AS.displayName = DS;
var jS = "MenuSubTrigger", MS = e.forwardRef((t, n) => {
	let r = zx(jS, t.__scopeMenu), i = Vx(jS, t.__scopeMenu), a = kS(jS, t.__scopeMenu), o = Zx(jS, t.__scopeMenu), s = e.useRef(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: l } = o, u = { __scopeMenu: t.__scopeMenu }, d = e.useCallback(() => {
		s.current && window.clearTimeout(s.current), s.current = null;
	}, []);
	return e.useEffect(() => d, [d]), e.useEffect(() => {
		let e = c.current;
		return () => {
			window.clearTimeout(e), l(null);
		};
	}, [c, l]), /* @__PURE__ */ (0, H.jsx)(Wx, {
		asChild: !0,
		...u,
		children: /* @__PURE__ */ (0, H.jsx)(uS, {
			id: a.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": r.open,
			"aria-controls": a.contentId,
			"data-state": FS(r.open),
			...t,
			ref: ov(n, a.onTriggerChange),
			onClick: (e) => {
				t.onClick?.(e), !(t.disabled || e.defaultPrevented) && (e.currentTarget.focus(), r.open || r.onOpenChange(!0));
			},
			onPointerMove: W(t.onPointerMove, US((e) => {
				o.onItemEnter(e), !e.defaultPrevented && !t.disabled && !r.open && !s.current && (o.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
					r.onOpenChange(!0), d();
				}, 100));
			})),
			onPointerLeave: W(t.onPointerLeave, US((e) => {
				d();
				let t = r.content?.getBoundingClientRect();
				if (t) {
					let n = r.content?.dataset.side, i = n === "right", a = i ? -5 : 5, s = t[i ? "left" : "right"], l = t[i ? "right" : "left"];
					o.onPointerGraceIntentChange({
						area: [
							{
								x: e.clientX + a,
								y: e.clientY
							},
							{
								x: s,
								y: t.top
							},
							{
								x: l,
								y: t.top
							},
							{
								x: l,
								y: t.bottom
							},
							{
								x: s,
								y: t.bottom
							}
						],
						side: n
					}), window.clearTimeout(c.current), c.current = window.setTimeout(() => o.onPointerGraceIntentChange(null), 300);
				} else {
					if (o.onTriggerLeave(e), e.defaultPrevented) return;
					o.onPointerGraceIntentChange(null);
				}
			})),
			onKeyDown: W(t.onKeyDown, (e) => {
				let n = o.searchRef.current !== "";
				t.disabled || n && e.key === " " || Ox[i.dir].includes(e.key) && (r.onOpenChange(!0), r.content?.focus(), e.preventDefault());
			})
		})
	});
});
MS.displayName = jS;
var NS = "MenuSubContent", PS = e.forwardRef((t, n) => {
	let r = qx(Yx, t.__scopeMenu), { forceMount: i = r.forceMount, ...a } = t, o = zx(Yx, t.__scopeMenu), s = Vx(Yx, t.__scopeMenu), c = kS(NS, t.__scopeMenu), l = e.useRef(null), u = sv(n, l);
	return /* @__PURE__ */ (0, H.jsx)(jx.Provider, {
		scope: t.__scopeMenu,
		children: /* @__PURE__ */ (0, H.jsx)(jy, {
			present: i || o.open,
			children: /* @__PURE__ */ (0, H.jsx)(jx.Slot, {
				scope: t.__scopeMenu,
				children: /* @__PURE__ */ (0, H.jsx)(nS, {
					id: c.contentId,
					"aria-labelledby": c.triggerId,
					...a,
					ref: u,
					align: "start",
					side: s.dir === "rtl" ? "left" : "right",
					disableOutsidePointerEvents: !1,
					disableOutsideScroll: !1,
					trapFocus: !1,
					onOpenAutoFocus: (e) => {
						s.isUsingKeyboardRef.current && l.current?.focus(), e.preventDefault();
					},
					onCloseAutoFocus: (e) => e.preventDefault(),
					onFocusOutside: W(t.onFocusOutside, (e) => {
						e.target !== c.trigger && o.onOpenChange(!1);
					}),
					onEscapeKeyDown: W(t.onEscapeKeyDown, (e) => {
						s.onClose(), e.preventDefault();
					}),
					onKeyDown: W(t.onKeyDown, (e) => {
						let t = e.currentTarget.contains(e.target), n = kx[s.dir].includes(e.key);
						t && n && (o.onOpenChange(!1), c.trigger?.focus(), e.preventDefault());
					})
				})
			})
		})
	});
});
PS.displayName = NS;
function FS(e) {
	return e ? "open" : "closed";
}
function IS(e) {
	return e === "indeterminate";
}
function LS(e) {
	return IS(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function RS(e) {
	let t = document.activeElement;
	for (let n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function zS(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
function BS(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = zS(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
function VS(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
function HS(e, t) {
	return t ? VS({
		x: e.clientX,
		y: e.clientY
	}, t) : !1;
}
function US(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var WS = Hx, GS = Wx, KS = Jx, qS = Qx, JS = iS, YS = oS, XS = lS, ZS = fS, QS = gS, $S = vS, eC = SS, tC = wS, nC = ES, rC = AS, iC = MS, aC = PS, oC = "ContextMenu", [sC, cC] = rv(oC, [Fx]), lC = Fx(), [uC, dC] = sC(oC), fC = (t) => {
	let { __scopeContextMenu: n, children: r, onOpenChange: i, dir: a, modal: o = !0 } = t, [s, c] = e.useState(!1), l = lC(n), u = vv(i), d = e.useCallback((e) => {
		c(e), u(e);
	}, [u]);
	return /* @__PURE__ */ (0, H.jsx)(uC, {
		scope: n,
		open: s,
		onOpenChange: d,
		modal: o,
		children: /* @__PURE__ */ (0, H.jsx)(WS, {
			...l,
			dir: a,
			open: s,
			onOpenChange: d,
			modal: o,
			children: r
		})
	});
};
fC.displayName = oC;
var pC = "ContextMenuTrigger", mC = e.forwardRef((t, n) => {
	let { __scopeContextMenu: r, disabled: i = !1, ...a } = t, o = dC(pC, r), s = lC(r), c = e.useRef({
		x: 0,
		y: 0
	}), l = e.useRef({ getBoundingClientRect: () => DOMRect.fromRect({
		width: 0,
		height: 0,
		...c.current
	}) }), u = e.useRef(0), d = e.useCallback(() => window.clearTimeout(u.current), []), f = (e) => {
		c.current = {
			x: e.clientX,
			y: e.clientY
		}, o.onOpenChange(!0);
	};
	return e.useEffect(() => d, [d]), e.useEffect(() => void (i && d()), [i, d]), /* @__PURE__ */ (0, H.jsxs)(H.Fragment, { children: [/* @__PURE__ */ (0, H.jsx)(GS, {
		...s,
		virtualRef: l
	}), /* @__PURE__ */ (0, H.jsx)(G.span, {
		"data-state": o.open ? "open" : "closed",
		"data-disabled": i ? "" : void 0,
		...a,
		ref: n,
		style: {
			WebkitTouchCallout: "none",
			...t.style
		},
		onContextMenu: i ? t.onContextMenu : W(t.onContextMenu, (e) => {
			d(), f(e), e.preventDefault();
		}),
		onPointerDown: i ? t.onPointerDown : W(t.onPointerDown, UC((e) => {
			d(), u.current = window.setTimeout(() => f(e), 700);
		})),
		onPointerMove: i ? t.onPointerMove : W(t.onPointerMove, UC(d)),
		onPointerCancel: i ? t.onPointerCancel : W(t.onPointerCancel, UC(d)),
		onPointerUp: i ? t.onPointerUp : W(t.onPointerUp, UC(d))
	})] });
});
mC.displayName = pC;
var hC = "ContextMenuPortal", gC = (e) => {
	let { __scopeContextMenu: t, ...n } = e, r = lC(t);
	return /* @__PURE__ */ (0, H.jsx)(KS, {
		...r,
		...n
	});
};
gC.displayName = hC;
var _C = "ContextMenuContent", vC = e.forwardRef((t, n) => {
	let { __scopeContextMenu: r, ...i } = t, a = dC(_C, r), o = lC(r), s = e.useRef(!1);
	return /* @__PURE__ */ (0, H.jsx)(qS, {
		...o,
		...i,
		ref: n,
		side: "right",
		sideOffset: 2,
		align: "start",
		onCloseAutoFocus: (e) => {
			t.onCloseAutoFocus?.(e), !e.defaultPrevented && s.current && e.preventDefault(), s.current = !1;
		},
		onInteractOutside: (e) => {
			t.onInteractOutside?.(e), !e.defaultPrevented && !a.modal && (s.current = !0);
		},
		style: {
			...t.style,
			"--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
vC.displayName = _C;
var yC = "ContextMenuGroup", bC = e.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e, i = lC(n);
	return /* @__PURE__ */ (0, H.jsx)(JS, {
		...i,
		...r,
		ref: t
	});
});
bC.displayName = yC;
var xC = "ContextMenuLabel", SC = e.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e, i = lC(n);
	return /* @__PURE__ */ (0, H.jsx)(YS, {
		...i,
		...r,
		ref: t
	});
});
SC.displayName = xC;
var CC = "ContextMenuItem", wC = e.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e, i = lC(n);
	return /* @__PURE__ */ (0, H.jsx)(XS, {
		...i,
		...r,
		ref: t
	});
});
wC.displayName = CC;
var TC = "ContextMenuCheckboxItem", EC = e.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e, i = lC(n);
	return /* @__PURE__ */ (0, H.jsx)(ZS, {
		...i,
		...r,
		ref: t
	});
});
EC.displayName = TC;
var DC = "ContextMenuRadioGroup", OC = e.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e, i = lC(n);
	return /* @__PURE__ */ (0, H.jsx)(QS, {
		...i,
		...r,
		ref: t
	});
});
OC.displayName = DC;
var kC = "ContextMenuRadioItem", AC = e.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e, i = lC(n);
	return /* @__PURE__ */ (0, H.jsx)($S, {
		...i,
		...r,
		ref: t
	});
});
AC.displayName = kC;
var jC = "ContextMenuItemIndicator", MC = e.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e, i = lC(n);
	return /* @__PURE__ */ (0, H.jsx)(eC, {
		...i,
		...r,
		ref: t
	});
});
MC.displayName = jC;
var NC = "ContextMenuSeparator", PC = e.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e, i = lC(n);
	return /* @__PURE__ */ (0, H.jsx)(tC, {
		...i,
		...r,
		ref: t
	});
});
PC.displayName = NC;
var FC = "ContextMenuArrow", IC = e.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e, i = lC(n);
	return /* @__PURE__ */ (0, H.jsx)(nC, {
		...i,
		...r,
		ref: t
	});
});
IC.displayName = FC;
var LC = "ContextMenuSub", RC = (e) => {
	let { __scopeContextMenu: t, children: n, onOpenChange: r, open: i, defaultOpen: a } = e, o = lC(t), [s, c] = Iy({
		prop: i,
		defaultProp: a ?? !1,
		onChange: r,
		caller: LC
	});
	return /* @__PURE__ */ (0, H.jsx)(rC, {
		...o,
		open: s,
		onOpenChange: c,
		children: n
	});
};
RC.displayName = LC;
var zC = "ContextMenuSubTrigger", BC = e.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e, i = lC(n);
	return /* @__PURE__ */ (0, H.jsx)(iC, {
		...i,
		...r,
		ref: t
	});
});
BC.displayName = zC;
var VC = "ContextMenuSubContent", HC = e.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e, i = lC(n);
	return /* @__PURE__ */ (0, H.jsx)(aC, {
		...i,
		...r,
		ref: t,
		style: {
			...e.style,
			"--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
HC.displayName = VC;
function UC(e) {
	return (t) => t.pointerType === "mouse" ? void 0 : e(t);
}
var WC = fC, GC = mC, KC = gC, qC = vC, JC = "Dialog", [YC, XC] = rv(JC), [ZC, QC] = YC(JC), $C = (t) => {
	let { __scopeDialog: n, children: r, open: i, defaultOpen: a, onOpenChange: o, modal: s = !0 } = t, c = e.useRef(null), l = e.useRef(null), [u, d] = Iy({
		prop: i,
		defaultProp: a ?? !1,
		onChange: o,
		caller: JC
	});
	return /* @__PURE__ */ (0, H.jsx)(ZC, {
		scope: n,
		triggerRef: c,
		contentRef: l,
		contentId: ty(),
		titleId: ty(),
		descriptionId: ty(),
		open: u,
		onOpenChange: d,
		onOpenToggle: e.useCallback(() => d((e) => !e), [d]),
		modal: s,
		children: r
	});
};
$C.displayName = JC;
var ew = "DialogTrigger", tw = e.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = QC(ew, n), a = sv(t, i.triggerRef);
	return /* @__PURE__ */ (0, H.jsx)(G.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": i.open,
		"aria-controls": i.contentId,
		"data-state": xw(i.open),
		...r,
		ref: a,
		onClick: W(e.onClick, i.onOpenToggle)
	});
});
tw.displayName = ew;
var nw = "DialogPortal", [rw, iw] = YC(nw, { forceMount: void 0 }), aw = (t) => {
	let { __scopeDialog: n, forceMount: r, children: i, container: a } = t, o = QC(nw, n);
	return /* @__PURE__ */ (0, H.jsx)(rw, {
		scope: n,
		forceMount: r,
		children: e.Children.map(i, (e) => /* @__PURE__ */ (0, H.jsx)(jy, {
			present: r || o.open,
			children: /* @__PURE__ */ (0, H.jsx)(ky, {
				asChild: !0,
				container: a,
				children: e
			})
		}))
	});
};
aw.displayName = nw;
var ow = "DialogOverlay", sw = e.forwardRef((e, t) => {
	let n = iw(ow, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = QC(ow, e.__scopeDialog);
	return a.modal ? /* @__PURE__ */ (0, H.jsx)(jy, {
		present: r || a.open,
		children: /* @__PURE__ */ (0, H.jsx)(lw, {
			...i,
			ref: t
		})
	}) : null;
});
sw.displayName = ow;
var cw = /* @__PURE__ */ cv("DialogOverlay.RemoveScroll"), lw = e.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = QC(ow, n);
	return /* @__PURE__ */ (0, H.jsx)(Cx, {
		as: cw,
		allowPinchZoom: !0,
		shards: [i.contentRef],
		children: /* @__PURE__ */ (0, H.jsx)(G.div, {
			"data-state": xw(i.open),
			...r,
			ref: t,
			style: {
				pointerEvents: "auto",
				...r.style
			}
		})
	});
}), uw = "DialogContent", dw = e.forwardRef((e, t) => {
	let n = iw(uw, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = QC(uw, e.__scopeDialog);
	return /* @__PURE__ */ (0, H.jsx)(jy, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ (0, H.jsx)(fw, {
			...i,
			ref: t
		}) : /* @__PURE__ */ (0, H.jsx)(pw, {
			...i,
			ref: t
		})
	});
});
dw.displayName = uw;
var fw = e.forwardRef((t, n) => {
	let r = QC(uw, t.__scopeDialog), i = e.useRef(null), a = sv(n, r.contentRef, i);
	return e.useEffect(() => {
		let e = i.current;
		if (e) return mb(e);
	}, []), /* @__PURE__ */ (0, H.jsx)(mw, {
		...t,
		ref: a,
		trapFocus: r.open,
		disableOutsidePointerEvents: !0,
		onCloseAutoFocus: W(t.onCloseAutoFocus, (e) => {
			e.preventDefault(), r.triggerRef.current?.focus();
		}),
		onPointerDownOutside: W(t.onPointerDownOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
			(t.button === 2 || n) && e.preventDefault();
		}),
		onFocusOutside: W(t.onFocusOutside, (e) => e.preventDefault())
	});
}), pw = e.forwardRef((t, n) => {
	let r = QC(uw, t.__scopeDialog), i = e.useRef(!1), a = e.useRef(!1);
	return /* @__PURE__ */ (0, H.jsx)(mw, {
		...t,
		ref: n,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (e) => {
			t.onCloseAutoFocus?.(e), e.defaultPrevented || (i.current || r.triggerRef.current?.focus(), e.preventDefault()), i.current = !1, a.current = !1;
		},
		onInteractOutside: (e) => {
			t.onInteractOutside?.(e), e.defaultPrevented || (i.current = !0, e.detail.originalEvent.type === "pointerdown" && (a.current = !0));
			let n = e.target;
			r.triggerRef.current?.contains(n) && e.preventDefault(), e.detail.originalEvent.type === "focusin" && a.current && e.preventDefault();
		}
	});
}), mw = e.forwardRef((t, n) => {
	let { __scopeDialog: r, trapFocus: i, onOpenAutoFocus: a, onCloseAutoFocus: o, ...s } = t, c = QC(uw, r), l = e.useRef(null), u = sv(n, l);
	return Pv(), /* @__PURE__ */ (0, H.jsxs)(H.Fragment, { children: [/* @__PURE__ */ (0, H.jsx)(Bv, {
		asChild: !0,
		loop: !0,
		trapped: i,
		onMountAutoFocus: a,
		onUnmountAutoFocus: o,
		children: /* @__PURE__ */ (0, H.jsx)(Ev, {
			role: "dialog",
			id: c.contentId,
			"aria-describedby": c.descriptionId,
			"aria-labelledby": c.titleId,
			"data-state": xw(c.open),
			...s,
			ref: u,
			onDismiss: () => c.onOpenChange(!1)
		})
	}), /* @__PURE__ */ (0, H.jsxs)(H.Fragment, { children: [/* @__PURE__ */ (0, H.jsx)(Tw, { titleId: c.titleId }), /* @__PURE__ */ (0, H.jsx)(Dw, {
		contentRef: l,
		descriptionId: c.descriptionId
	})] })] });
}), hw = "DialogTitle", gw = e.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = QC(hw, n);
	return /* @__PURE__ */ (0, H.jsx)(G.h2, {
		id: i.titleId,
		...r,
		ref: t
	});
});
gw.displayName = hw;
var _w = "DialogDescription", vw = e.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = QC(_w, n);
	return /* @__PURE__ */ (0, H.jsx)(G.p, {
		id: i.descriptionId,
		...r,
		ref: t
	});
});
vw.displayName = _w;
var yw = "DialogClose", bw = e.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = QC(yw, n);
	return /* @__PURE__ */ (0, H.jsx)(G.button, {
		type: "button",
		...r,
		ref: t,
		onClick: W(e.onClick, () => i.onOpenChange(!1))
	});
});
bw.displayName = yw;
function xw(e) {
	return e ? "open" : "closed";
}
var Sw = "DialogTitleWarning", [Cw, ww] = nv(Sw, {
	contentName: uw,
	titleName: hw,
	docsSlug: "dialog"
}), Tw = ({ titleId: t }) => {
	let n = ww(Sw), r = `\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;
	return e.useEffect(() => {
		t && (document.getElementById(t) || console.error(r));
	}, [r, t]), null;
}, Ew = "DialogDescriptionWarning", Dw = ({ contentRef: t, descriptionId: n }) => {
	let r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ww(Ew).contentName}}.`;
	return e.useEffect(() => {
		let e = t.current?.getAttribute("aria-describedby");
		n && e && (document.getElementById(n) || console.warn(r));
	}, [
		r,
		t,
		n
	]), null;
}, Ow = $C, kw = tw, Aw = aw, jw = sw, Mw = dw, Nw = gw, Pw = vw, Fw = bw;
//#endregion
//#region ../../node_modules/vaul/dist/index.mjs
function Iw(e) {
	if (!e || typeof document > "u") return;
	let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
	n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
var Lw = t.createContext({
	drawerRef: { current: null },
	overlayRef: { current: null },
	onPress: () => {},
	onRelease: () => {},
	onDrag: () => {},
	onNestedDrag: () => {},
	onNestedOpenChange: () => {},
	onNestedRelease: () => {},
	openProp: void 0,
	dismissible: !1,
	isOpen: !1,
	isDragging: !1,
	keyboardIsOpen: { current: !1 },
	snapPointsOffset: null,
	snapPoints: null,
	handleOnly: !1,
	modal: !1,
	shouldFade: !1,
	activeSnapPoint: null,
	onOpenChange: () => {},
	setActiveSnapPoint: () => {},
	closeDrawer: () => {},
	direction: "bottom",
	shouldAnimate: { current: !0 },
	shouldScaleBackground: !1,
	setBackgroundColorOnScale: !0,
	noBodyStyles: !1,
	container: null,
	autoFocus: !1
}), Rw = () => {
	let e = t.useContext(Lw);
	if (!e) throw Error("useDrawerContext must be used within a Drawer.Root");
	return e;
};
Iw("[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(\n[data-state=closed]\n){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}");
function zw() {
	let e = navigator.userAgent;
	return typeof window < "u" && (/Firefox/.test(e) && /Mobile/.test(e) || /FxiOS/.test(e));
}
function Bw() {
	return Gw(/^Mac/);
}
function Vw() {
	return Gw(/^iPhone/);
}
function Hw() {
	return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function Uw() {
	return Gw(/^iPad/) || Bw() && navigator.maxTouchPoints > 1;
}
function Ww() {
	return Vw() || Uw();
}
function Gw(e) {
	return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
var Kw = 24, qw = typeof window < "u" ? f : u;
function Jw(...e) {
	return (...t) => {
		for (let n of e) typeof n == "function" && n(...t);
	};
}
var Yw = typeof document < "u" && window.visualViewport;
function Xw(e) {
	let t = window.getComputedStyle(e);
	return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function Zw(e) {
	for (Xw(e) && (e = e.parentElement); e && !Xw(e);) e = e.parentElement;
	return e || document.scrollingElement || document.documentElement;
}
var Qw = new Set([
	"checkbox",
	"radio",
	"range",
	"color",
	"file",
	"image",
	"button",
	"submit",
	"reset"
]), $w = 0, eT;
function tT(e = {}) {
	let { isDisabled: t } = e;
	qw(() => {
		if (!t) return $w++, $w === 1 && Ww() && (eT = nT()), () => {
			$w--, $w === 0 && eT?.();
		};
	}, [t]);
}
function nT() {
	let e, t = 0, n = (n) => {
		e = Zw(n.target), !(e === document.documentElement && e === document.body) && (t = n.changedTouches[0].pageY);
	}, r = (n) => {
		if (!e || e === document.documentElement || e === document.body) {
			n.preventDefault();
			return;
		}
		let r = n.changedTouches[0].pageY, i = e.scrollTop, a = e.scrollHeight - e.clientHeight;
		a !== 0 && ((i <= 0 && r > t || i >= a && r < t) && n.preventDefault(), t = r);
	}, i = (e) => {
		let t = e.target;
		oT(t) && t !== document.activeElement && (e.preventDefault(), t.style.transform = "translateY(-2000px)", t.focus(), requestAnimationFrame(() => {
			t.style.transform = "";
		}));
	}, a = (e) => {
		let t = e.target;
		oT(t) && (t.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
			t.style.transform = "", Yw && (Yw.height < window.innerHeight ? requestAnimationFrame(() => {
				aT(t);
			}) : Yw.addEventListener("resize", () => aT(t), { once: !0 }));
		}));
	}, o = () => {
		window.scrollTo(0, 0);
	}, s = window.pageXOffset, c = window.pageYOffset, l = Jw(rT(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
	window.scrollTo(0, 0);
	let u = Jw(iT(document, "touchstart", n, {
		passive: !1,
		capture: !0
	}), iT(document, "touchmove", r, {
		passive: !1,
		capture: !0
	}), iT(document, "touchend", i, {
		passive: !1,
		capture: !0
	}), iT(document, "focus", a, !0), iT(window, "scroll", o));
	return () => {
		l(), u(), window.scrollTo(s, c);
	};
}
function rT(e, t, n) {
	let r = e.style[t];
	return e.style[t] = n, () => {
		e.style[t] = r;
	};
}
function iT(e, t, n, r) {
	return e.addEventListener(t, n, r), () => {
		e.removeEventListener(t, n, r);
	};
}
function aT(e) {
	let t = document.scrollingElement || document.documentElement;
	for (; e && e !== t;) {
		let t = Zw(e);
		if (t !== document.documentElement && t !== document.body && t !== e) {
			let n = t.getBoundingClientRect().top, r = e.getBoundingClientRect().top;
			e.getBoundingClientRect().bottom > t.getBoundingClientRect().bottom + Kw && (t.scrollTop += r - n);
		}
		e = t.parentElement;
	}
}
function oT(e) {
	return e instanceof HTMLInputElement && !Qw.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function sT(e, t) {
	typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function cT(...e) {
	return (t) => e.forEach((e) => sT(e, t));
}
function lT(...t) {
	return e.useCallback(cT(...t), t);
}
var uT = /* @__PURE__ */ new WeakMap();
function dT(e, t, n = !1) {
	if (!e || !(e instanceof HTMLElement)) return;
	let r = {};
	Object.entries(t).forEach(([t, n]) => {
		if (t.startsWith("--")) {
			e.style.setProperty(t, n);
			return;
		}
		r[t] = e.style[t], e.style[t] = n;
	}), !n && uT.set(e, r);
}
function fT(e, t) {
	if (!e || !(e instanceof HTMLElement)) return;
	let n = uT.get(e);
	n && (e.style[t] = n[t]);
}
var pT = (e) => {
	switch (e) {
		case "top":
		case "bottom": return !0;
		case "left":
		case "right": return !1;
		default: return e;
	}
};
function mT(e, t) {
	if (!e) return null;
	let n = window.getComputedStyle(e), r = n.transform || n.webkitTransform || n.mozTransform, i = r.match(/^matrix3d\((.+)\)$/);
	return i ? parseFloat(i[1].split(", ")[pT(t) ? 13 : 12]) : (i = r.match(/^matrix\((.+)\)$/), i ? parseFloat(i[1].split(", ")[pT(t) ? 5 : 4]) : null);
}
function hT(e) {
	return 8 * (Math.log(e + 1) - 2);
}
function gT(e, t) {
	if (!e) return () => {};
	let n = e.style.cssText;
	return Object.assign(e.style, t), () => {
		e.style.cssText = n;
	};
}
var _T = {
	DURATION: .5,
	EASE: [
		.32,
		.72,
		0,
		1
	]
}, vT = .4, yT = .25, bT = 100, xT = 8, ST = 16, CT = 26, wT = "vaul-dragging";
function TT(e) {
	let n = t.useRef(e);
	return t.useEffect(() => {
		n.current = e;
	}), t.useMemo(() => (...e) => n.current == null ? void 0 : n.current.call(n, ...e), []);
}
function ET({ defaultProp: e, onChange: n }) {
	let r = t.useState(e), [i] = r, a = t.useRef(i), o = TT(n);
	return t.useEffect(() => {
		a.current !== i && (o(i), a.current = i);
	}, [
		i,
		a,
		o
	]), r;
}
function DT({ prop: e, defaultProp: n, onChange: r = () => {} }) {
	let [i, a] = ET({
		defaultProp: n,
		onChange: r
	}), o = e !== void 0, s = o ? e : i, c = TT(r);
	return [s, t.useCallback((t) => {
		if (o) {
			let n = typeof t == "function" ? t(e) : t;
			n !== e && c(n);
		} else a(t);
	}, [
		o,
		e,
		a,
		c
	])];
}
function OT({ activeSnapPointProp: e, setActiveSnapPointProp: n, snapPoints: r, drawerRef: i, overlayRef: a, fadeFromIndex: o, onSnapPointChange: s, direction: c = "bottom", container: l, snapToSequentialPoint: u }) {
	let [d, f] = DT({
		prop: e,
		defaultProp: r?.[0],
		onChange: n
	}), [p, m] = t.useState(typeof window < "u" ? {
		innerWidth: window.innerWidth,
		innerHeight: window.innerHeight
	} : void 0);
	t.useEffect(() => {
		function e() {
			m({
				innerWidth: window.innerWidth,
				innerHeight: window.innerHeight
			});
		}
		return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
	}, []);
	let h = t.useMemo(() => d === r?.[r.length - 1] || null, [r, d]), g = t.useMemo(() => r?.findIndex((e) => e === d) ?? null, [r, d]), _ = r && r.length > 0 && (o || o === 0) && !Number.isNaN(o) && r[o] === d || !r, v = t.useMemo(() => {
		let e = l ? {
			width: l.getBoundingClientRect().width,
			height: l.getBoundingClientRect().height
		} : typeof window < "u" ? {
			width: window.innerWidth,
			height: window.innerHeight
		} : {
			width: 0,
			height: 0
		};
		return r?.map((t) => {
			let n = typeof t == "string", r = 0;
			if (n && (r = parseInt(t, 10)), pT(c)) {
				let i = n ? r : p ? t * e.height : 0;
				return p ? c === "bottom" ? e.height - i : -e.height + i : i;
			}
			let i = n ? r : p ? t * e.width : 0;
			return p ? c === "right" ? e.width - i : -e.width + i : i;
		}) ?? [];
	}, [
		r,
		p,
		l
	]), y = t.useMemo(() => g === null ? null : v?.[g], [v, g]), b = t.useCallback((e) => {
		let t = v?.findIndex((t) => t === e) ?? null;
		s(t), dT(i.current, {
			transition: `transform ${_T.DURATION}s cubic-bezier(${_T.EASE.join(",")})`,
			transform: pT(c) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)`
		}), v && t !== v.length - 1 && o !== void 0 && t !== o && t < o ? dT(a.current, {
			transition: `opacity ${_T.DURATION}s cubic-bezier(${_T.EASE.join(",")})`,
			opacity: "0"
		}) : dT(a.current, {
			transition: `opacity ${_T.DURATION}s cubic-bezier(${_T.EASE.join(",")})`,
			opacity: "1"
		}), f(r?.[Math.max(t, 0)]);
	}, [
		i.current,
		r,
		v,
		o,
		a,
		f
	]);
	t.useEffect(() => {
		if (d || e) {
			let t = r?.findIndex((t) => t === e || t === d) ?? -1;
			v && t !== -1 && typeof v[t] == "number" && b(v[t]);
		}
	}, [
		d,
		e,
		r,
		v,
		b
	]);
	function x({ draggedDistance: e, closeDrawer: t, velocity: n, dismissible: i }) {
		if (o === void 0) return;
		let s = c === "bottom" || c === "right" ? (y ?? 0) - e : (y ?? 0) + e, l = g === o - 1, d = g === 0, f = e > 0;
		if (l && dT(a.current, { transition: `opacity ${_T.DURATION}s cubic-bezier(${_T.EASE.join(",")})` }), !u && n > 2 && !f) {
			i ? t() : b(v[0]);
			return;
		}
		if (!u && n > 2 && f && v && r) {
			b(v[r.length - 1]);
			return;
		}
		let p = v?.reduce((e, t) => typeof e != "number" || typeof t != "number" ? e : Math.abs(t - s) < Math.abs(e - s) ? t : e), m = pT(c) ? window.innerHeight : window.innerWidth;
		if (n > vT && Math.abs(e) < m * .4) {
			let e = f ? 1 : -1;
			if (e > 0 && h && r) {
				b(v[r.length - 1]);
				return;
			}
			if (d && e < 0 && i && t(), g === null) return;
			b(v[g + e]);
			return;
		}
		b(p);
	}
	function S({ draggedDistance: e }) {
		if (y === null) return;
		let t = c === "bottom" || c === "right" ? y - e : y + e;
		(c === "bottom" || c === "right") && t < v[v.length - 1] || (c === "top" || c === "left") && t > v[v.length - 1] || dT(i.current, { transform: pT(c) ? `translate3d(0, ${t}px, 0)` : `translate3d(${t}px, 0, 0)` });
	}
	function C(e, t) {
		if (!r || typeof g != "number" || !v || o === void 0) return null;
		let n = g === o - 1;
		if (g >= o && t) return 0;
		if (n && !t) return 1;
		if (!_ && !n) return null;
		let i = n ? g + 1 : g - 1, a = n ? v[i] - v[i - 1] : v[i + 1] - v[i], s = e / Math.abs(a);
		return n ? 1 - s : s;
	}
	return {
		isLastSnapPoint: h,
		activeSnapPoint: d,
		shouldFade: _,
		getPercentageDragged: C,
		setActiveSnapPoint: f,
		activeSnapPointIndex: g,
		onRelease: x,
		onDrag: S,
		snapPointsOffset: v
	};
}
function kT() {
	let { direction: e, isOpen: n, shouldScaleBackground: r, setBackgroundColorOnScale: i, noBodyStyles: a } = Rw(), o = t.useRef(null), s = p(() => document.body.style.backgroundColor, []);
	function c() {
		return (window.innerWidth - CT) / window.innerWidth;
	}
	t.useEffect(() => {
		if (n && r) {
			o.current && clearTimeout(o.current);
			let t = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
			if (!t) return;
			i && !a && gT(document.body, { background: "black" }), gT(t, {
				transformOrigin: pT(e) ? "top" : "left",
				transitionProperty: "transform, border-radius",
				transitionDuration: `${_T.DURATION}s`,
				transitionTimingFunction: `cubic-bezier(${_T.EASE.join(",")})`
			});
			let n = gT(t, {
				borderRadius: `${xT}px`,
				overflow: "hidden",
				...pT(e) ? { transform: `scale(${c()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)` } : { transform: `scale(${c()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)` }
			});
			return () => {
				n(), o.current = window.setTimeout(() => {
					s ? document.body.style.background = s : document.body.style.removeProperty("background");
				}, _T.DURATION * 1e3);
			};
		}
	}, [
		n,
		r,
		s
	]);
}
var AT = null;
function jT({ isOpen: e, modal: n, nested: r, hasBeenOpened: i, preventScrollRestoration: a, noBodyStyles: o }) {
	let [s, c] = t.useState(() => typeof window < "u" ? window.location.href : ""), l = t.useRef(0), u = t.useCallback(() => {
		if (Hw() && AT === null && e && !o) {
			AT = {
				position: document.body.style.position,
				top: document.body.style.top,
				left: document.body.style.left,
				height: document.body.style.height,
				right: "unset"
			};
			let { scrollX: e, innerHeight: t } = window;
			document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
				top: `${-l.current}px`,
				left: `${-e}px`,
				right: "0px",
				height: "auto"
			}), window.setTimeout(() => window.requestAnimationFrame(() => {
				let e = t - window.innerHeight;
				e && l.current >= t && (document.body.style.top = `${-(l.current + e)}px`);
			}), 300);
		}
	}, [e]), d = t.useCallback(() => {
		if (Hw() && AT !== null && !o) {
			let e = -parseInt(document.body.style.top, 10), t = -parseInt(document.body.style.left, 10);
			Object.assign(document.body.style, AT), window.requestAnimationFrame(() => {
				if (a && s !== window.location.href) {
					c(window.location.href);
					return;
				}
				window.scrollTo(t, e);
			}), AT = null;
		}
	}, [s]);
	return t.useEffect(() => {
		function e() {
			l.current = window.scrollY;
		}
		return e(), window.addEventListener("scroll", e), () => {
			window.removeEventListener("scroll", e);
		};
	}, []), t.useEffect(() => {
		if (n) return () => {
			typeof document > "u" || document.querySelector("[data-vaul-drawer]") || d();
		};
	}, [n, d]), t.useEffect(() => {
		r || !i || (e ? (!window.matchMedia("(display-mode: standalone)").matches && u(), n || window.setTimeout(() => {
			d();
		}, 500)) : d());
	}, [
		e,
		i,
		s,
		n,
		r,
		u,
		d
	]), { restorePositionSetting: d };
}
function MT({ open: e, onOpenChange: n, children: r, onDrag: i, onRelease: a, snapPoints: o, shouldScaleBackground: s = !1, setBackgroundColorOnScale: c = !0, closeThreshold: l = yT, scrollLockTimeout: u = bT, dismissible: d = !0, handleOnly: f = !1, fadeFromIndex: p = o && o.length - 1, activeSnapPoint: m, setActiveSnapPoint: h, fixed: g, modal: _ = !0, onClose: v, nested: y, noBodyStyles: b = !1, direction: x = "bottom", defaultOpen: S = !1, disablePreventScroll: C = !0, snapToSequentialPoint: w = !1, preventScrollRestoration: T = !1, repositionInputs: E = !0, onAnimationEnd: D, container: O, autoFocus: k = !1 }) {
	let [A = !1, j] = DT({
		defaultProp: S,
		prop: e,
		onChange: (e) => {
			n?.(e), !e && !y && Ce(), setTimeout(() => {
				D?.(e);
			}, _T.DURATION * 1e3), e && !_ && typeof window < "u" && window.requestAnimationFrame(() => {
				document.body.style.pointerEvents = "auto";
			}), e || (document.body.style.pointerEvents = "auto");
		}
	}), [M, ee] = t.useState(!1), [N, P] = t.useState(!1), [te, ne] = t.useState(!1), F = t.useRef(null), re = t.useRef(null), ie = t.useRef(null), ae = t.useRef(null), oe = t.useRef(null), se = t.useRef(!1), ce = t.useRef(null), le = t.useRef(0), ue = t.useRef(!1), de = t.useRef(!S), fe = t.useRef(0), I = t.useRef(null), pe = t.useRef(I.current?.getBoundingClientRect().height || 0), me = t.useRef(I.current?.getBoundingClientRect().width || 0), he = t.useRef(0), { activeSnapPoint: ge, activeSnapPointIndex: L, setActiveSnapPoint: _e, onRelease: ve, snapPointsOffset: ye, onDrag: be, shouldFade: xe, getPercentageDragged: Se } = OT({
		snapPoints: o,
		activeSnapPointProp: m,
		setActiveSnapPointProp: h,
		drawerRef: I,
		fadeFromIndex: p,
		overlayRef: F,
		onSnapPointChange: t.useCallback((e) => {
			o && e === ye.length - 1 && (re.current = /* @__PURE__ */ new Date());
		}, []),
		direction: x,
		container: O,
		snapToSequentialPoint: w
	});
	tT({ isDisabled: !A || N || !_ || te || !M || !E || !C });
	let { restorePositionSetting: Ce } = jT({
		isOpen: A,
		modal: _,
		nested: y ?? !1,
		hasBeenOpened: M,
		preventScrollRestoration: T,
		noBodyStyles: b
	});
	function we() {
		return (window.innerWidth - CT) / window.innerWidth;
	}
	function Te(e) {
		!d && !o || I.current && !I.current.contains(e.target) || (pe.current = I.current?.getBoundingClientRect().height || 0, me.current = I.current?.getBoundingClientRect().width || 0, P(!0), ie.current = /* @__PURE__ */ new Date(), Ww() && window.addEventListener("touchend", () => se.current = !1, { once: !0 }), e.target.setPointerCapture(e.pointerId), le.current = pT(x) ? e.pageY : e.pageX);
	}
	function Ee(e, t) {
		let n = e, r = window.getSelection()?.toString(), i = I.current ? mT(I.current, x) : null, a = /* @__PURE__ */ new Date();
		if (n.tagName === "SELECT" || n.hasAttribute("data-vaul-no-drag") || n.closest("[data-vaul-no-drag]")) return !1;
		if (x === "right" || x === "left") return !0;
		if (re.current && a.getTime() - re.current.getTime() < 500) return !1;
		if (i !== null && (x === "bottom" ? i > 0 : i < 0)) return !0;
		if (r && r.length > 0) return !1;
		if (oe.current && a.getTime() - oe.current.getTime() < u && i === 0 || t) return oe.current = a, !1;
		for (; n;) {
			if (n.scrollHeight > n.clientHeight) {
				if (n.scrollTop !== 0) return oe.current = /* @__PURE__ */ new Date(), !1;
				if (n.getAttribute("role") === "dialog") return !0;
			}
			n = n.parentNode;
		}
		return !0;
	}
	function De(e) {
		if (I.current && N) {
			let t = x === "bottom" || x === "right" ? 1 : -1, n = (le.current - (pT(x) ? e.pageY : e.pageX)) * t, r = n > 0, a = o && !d && !r;
			if (a && L === 0) return;
			let c = Math.abs(n), l = document.querySelector("[data-vaul-drawer-wrapper]"), u = c / (x === "bottom" || x === "top" ? pe.current : me.current), f = Se(c, r);
			if (f !== null && (u = f), a && u >= 1 || !se.current && !Ee(e.target, r)) return;
			if (I.current.classList.add(wT), se.current = !0, dT(I.current, { transition: "none" }), dT(F.current, { transition: "none" }), o && be({ draggedDistance: n }), r && !o) {
				let e = hT(n), r = Math.min(e * -1, 0) * t;
				dT(I.current, { transform: pT(x) ? `translate3d(0, ${r}px, 0)` : `translate3d(${r}px, 0, 0)` });
				return;
			}
			let m = 1 - u;
			if ((xe || p && L === p - 1) && (i?.(e, u), dT(F.current, {
				opacity: `${m}`,
				transition: "none"
			}, !0)), l && F.current && s) {
				let e = Math.min(we() + u * (1 - we()), 1), t = 8 - u * 8, n = Math.max(0, 14 - u * 14);
				dT(l, {
					borderRadius: `${t}px`,
					transform: pT(x) ? `scale(${e}) translate3d(0, ${n}px, 0)` : `scale(${e}) translate3d(${n}px, 0, 0)`,
					transition: "none"
				}, !0);
			}
			if (!o) {
				let e = c * t;
				dT(I.current, { transform: pT(x) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)` });
			}
		}
	}
	t.useEffect(() => {
		window.requestAnimationFrame(() => {
			de.current = !0;
		});
	}, []), t.useEffect(() => {
		var e;
		function t() {
			if (!I.current || !E) return;
			let e = document.activeElement;
			if (oT(e) || ue.current) {
				let e = window.visualViewport?.height || 0, t = window.innerHeight, n = t - e, r = I.current.getBoundingClientRect().height || 0, i = r > t * .8;
				he.current ||= r;
				let a = I.current.getBoundingClientRect().top;
				if (Math.abs(fe.current - n) > 60 && (ue.current = !ue.current), o && o.length > 0 && ye && L) {
					let e = ye[L] || 0;
					n += e;
				}
				if (fe.current = n, r > e || ue.current) {
					let t = I.current.getBoundingClientRect().height, r = t;
					t > e && (r = e - (i ? a : CT)), g ? I.current.style.height = `${t - Math.max(n, 0)}px` : I.current.style.height = `${Math.max(r, e - a)}px`;
				} else zw() || (I.current.style.height = `${he.current}px`);
				o && o.length > 0 && !ue.current ? I.current.style.bottom = "0px" : I.current.style.bottom = `${Math.max(n, 0)}px`;
			}
		}
		return (e = window.visualViewport) == null || e.addEventListener("resize", t), () => window.visualViewport?.removeEventListener("resize", t);
	}, [
		L,
		o,
		ye
	]);
	function Oe(e) {
		Ae(), v?.(), e || j(!1), setTimeout(() => {
			o && _e(o[0]);
		}, _T.DURATION * 1e3);
	}
	function ke() {
		if (!I.current) return;
		let e = document.querySelector("[data-vaul-drawer-wrapper]"), t = mT(I.current, x);
		dT(I.current, {
			transform: "translate3d(0, 0, 0)",
			transition: `transform ${_T.DURATION}s cubic-bezier(${_T.EASE.join(",")})`
		}), dT(F.current, {
			transition: `opacity ${_T.DURATION}s cubic-bezier(${_T.EASE.join(",")})`,
			opacity: "1"
		}), s && t && t > 0 && A && dT(e, {
			borderRadius: `${xT}px`,
			overflow: "hidden",
			...pT(x) ? {
				transform: `scale(${we()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
				transformOrigin: "top"
			} : {
				transform: `scale(${we()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
				transformOrigin: "left"
			},
			transitionProperty: "transform, border-radius",
			transitionDuration: `${_T.DURATION}s`,
			transitionTimingFunction: `cubic-bezier(${_T.EASE.join(",")})`
		}, !0);
	}
	function Ae() {
		!N || !I.current || (I.current.classList.remove(wT), se.current = !1, P(!1), ae.current = /* @__PURE__ */ new Date());
	}
	function je(e) {
		if (!N || !I.current) return;
		I.current.classList.remove(wT), se.current = !1, P(!1), ae.current = /* @__PURE__ */ new Date();
		let t = mT(I.current, x);
		if (!e || !Ee(e.target, !1) || !t || Number.isNaN(t) || ie.current === null) return;
		let n = ae.current.getTime() - ie.current.getTime(), r = le.current - (pT(x) ? e.pageY : e.pageX), i = Math.abs(r) / n;
		if (i > .05 && (ne(!0), setTimeout(() => {
			ne(!1);
		}, 200)), o) {
			ve({
				draggedDistance: r * (x === "bottom" || x === "right" ? 1 : -1),
				closeDrawer: Oe,
				velocity: i,
				dismissible: d
			}), a?.(e, !0);
			return;
		}
		if (x === "bottom" || x === "right" ? r > 0 : r < 0) {
			ke(), a?.(e, !0);
			return;
		}
		if (i > vT) {
			Oe(), a?.(e, !1);
			return;
		}
		let s = Math.min(I.current.getBoundingClientRect().height ?? 0, window.innerHeight), c = Math.min(I.current.getBoundingClientRect().width ?? 0, window.innerWidth);
		if (Math.abs(t) >= (x === "left" || x === "right" ? c : s) * l) {
			Oe(), a?.(e, !1);
			return;
		}
		a?.(e, !0), ke();
	}
	t.useEffect(() => (A && (dT(document.documentElement, { scrollBehavior: "auto" }), re.current = /* @__PURE__ */ new Date()), () => {
		fT(document.documentElement, "scrollBehavior");
	}), [A]);
	function Me(e) {
		let t = e ? (window.innerWidth - ST) / window.innerWidth : 1, n = e ? -ST : 0;
		ce.current && window.clearTimeout(ce.current), dT(I.current, {
			transition: `transform ${_T.DURATION}s cubic-bezier(${_T.EASE.join(",")})`,
			transform: pT(x) ? `scale(${t}) translate3d(0, ${n}px, 0)` : `scale(${t}) translate3d(${n}px, 0, 0)`
		}), !e && I.current && (ce.current = setTimeout(() => {
			let e = mT(I.current, x);
			dT(I.current, {
				transition: "none",
				transform: pT(x) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)`
			});
		}, 500));
	}
	function Ne(e, t) {
		if (t < 0) return;
		let n = (window.innerWidth - ST) / window.innerWidth, r = n + t * (1 - n), i = -ST + t * ST;
		dT(I.current, {
			transform: pT(x) ? `scale(${r}) translate3d(0, ${i}px, 0)` : `scale(${r}) translate3d(${i}px, 0, 0)`,
			transition: "none"
		});
	}
	function Pe(e, t) {
		let n = pT(x) ? window.innerHeight : window.innerWidth, r = t ? (n - ST) / n : 1, i = t ? -ST : 0;
		t && dT(I.current, {
			transition: `transform ${_T.DURATION}s cubic-bezier(${_T.EASE.join(",")})`,
			transform: pT(x) ? `scale(${r}) translate3d(0, ${i}px, 0)` : `scale(${r}) translate3d(${i}px, 0, 0)`
		});
	}
	return t.useEffect(() => {
		_ || window.requestAnimationFrame(() => {
			document.body.style.pointerEvents = "auto";
		});
	}, [_]), /* @__PURE__ */ t.createElement(Ow, {
		defaultOpen: S,
		onOpenChange: (e) => {
			!d && !e || (e ? ee(!0) : Oe(!0), j(e));
		},
		open: A
	}, /* @__PURE__ */ t.createElement(Lw.Provider, { value: {
		activeSnapPoint: ge,
		snapPoints: o,
		setActiveSnapPoint: _e,
		drawerRef: I,
		overlayRef: F,
		onOpenChange: n,
		onPress: Te,
		onRelease: je,
		onDrag: De,
		dismissible: d,
		shouldAnimate: de,
		handleOnly: f,
		isOpen: A,
		isDragging: N,
		shouldFade: xe,
		closeDrawer: Oe,
		onNestedDrag: Ne,
		onNestedOpenChange: Me,
		onNestedRelease: Pe,
		keyboardIsOpen: ue,
		modal: _,
		snapPointsOffset: ye,
		activeSnapPointIndex: L,
		direction: x,
		shouldScaleBackground: s,
		setBackgroundColorOnScale: c,
		noBodyStyles: b,
		container: O,
		autoFocus: k
	} }, r));
}
var NT = /* @__PURE__ */ t.forwardRef(function({ ...e }, n) {
	let { overlayRef: r, snapPoints: i, onRelease: a, shouldFade: o, isOpen: s, modal: c, shouldAnimate: l } = Rw(), u = lT(n, r), d = i && i.length > 0;
	if (!c) return null;
	let f = t.useCallback((e) => a(e), [a]);
	return /* @__PURE__ */ t.createElement(jw, {
		onMouseUp: f,
		ref: u,
		"data-vaul-overlay": "",
		"data-vaul-snap-points": s && d ? "true" : "false",
		"data-vaul-snap-points-overlay": s && o ? "true" : "false",
		"data-vaul-animate": l?.current ? "true" : "false",
		...e
	});
});
NT.displayName = "Drawer.Overlay";
var PT = /* @__PURE__ */ t.forwardRef(function({ onPointerDownOutside: e, style: n, onOpenAutoFocus: r, ...i }, a) {
	let { drawerRef: o, onPress: s, onRelease: c, onDrag: l, keyboardIsOpen: u, snapPointsOffset: d, activeSnapPointIndex: f, modal: p, isOpen: m, direction: h, snapPoints: g, container: _, handleOnly: v, shouldAnimate: y, autoFocus: b } = Rw(), [x, S] = t.useState(!1), C = lT(a, o), w = t.useRef(null), T = t.useRef(null), E = t.useRef(!1), D = g && g.length > 0;
	kT();
	let O = (e, t, n = 0) => {
		if (E.current) return !0;
		let r = Math.abs(e.y), i = Math.abs(e.x), a = i > r, o = ["bottom", "right"].includes(t) ? 1 : -1;
		if (t === "left" || t === "right") {
			if (!(e.x * o < 0) && i >= 0 && i <= n) return a;
		} else if (!(e.y * o < 0) && r >= 0 && r <= n) return !a;
		return E.current = !0, !0;
	};
	t.useEffect(() => {
		D && window.requestAnimationFrame(() => {
			S(!0);
		});
	}, []);
	function k(e) {
		w.current = null, E.current = !1, c(e);
	}
	return /* @__PURE__ */ t.createElement(Mw, {
		"data-vaul-drawer-direction": h,
		"data-vaul-drawer": "",
		"data-vaul-delayed-snap-points": x ? "true" : "false",
		"data-vaul-snap-points": m && D ? "true" : "false",
		"data-vaul-custom-container": _ ? "true" : "false",
		"data-vaul-animate": y?.current ? "true" : "false",
		...i,
		ref: C,
		style: d && d.length > 0 ? {
			"--snap-point-height": `${d[f ?? 0]}px`,
			...n
		} : n,
		onPointerDown: (e) => {
			v || (i.onPointerDown == null || i.onPointerDown.call(i, e), w.current = {
				x: e.pageX,
				y: e.pageY
			}, s(e));
		},
		onOpenAutoFocus: (e) => {
			r?.(e), b || e.preventDefault();
		},
		onPointerDownOutside: (t) => {
			if (e?.(t), !p || t.defaultPrevented) {
				t.preventDefault();
				return;
			}
			u.current &&= !1;
		},
		onFocusOutside: (e) => {
			if (!p) {
				e.preventDefault();
				return;
			}
		},
		onPointerMove: (e) => {
			if (T.current = e, v || (i.onPointerMove == null || i.onPointerMove.call(i, e), !w.current)) return;
			let t = e.pageY - w.current.y, n = e.pageX - w.current.x, r = e.pointerType === "touch" ? 10 : 2;
			O({
				x: n,
				y: t
			}, h, r) ? l(e) : (Math.abs(n) > r || Math.abs(t) > r) && (w.current = null);
		},
		onPointerUp: (e) => {
			i.onPointerUp == null || i.onPointerUp.call(i, e), w.current = null, E.current = !1, c(e);
		},
		onPointerOut: (e) => {
			i.onPointerOut == null || i.onPointerOut.call(i, e), k(T.current);
		},
		onContextMenu: (e) => {
			i.onContextMenu == null || i.onContextMenu.call(i, e), T.current && k(T.current);
		}
	});
});
PT.displayName = "Drawer.Content";
var FT = 250, IT = 120, LT = /* @__PURE__ */ t.forwardRef(function({ preventCycle: e = !1, children: n, ...r }, i) {
	let { closeDrawer: a, isDragging: o, snapPoints: s, activeSnapPoint: c, setActiveSnapPoint: l, dismissible: u, handleOnly: d, isOpen: f, onPress: p, onDrag: m } = Rw(), h = t.useRef(null), g = t.useRef(!1);
	function _() {
		if (g.current) {
			b();
			return;
		}
		window.setTimeout(() => {
			v();
		}, IT);
	}
	function v() {
		if (o || e || g.current) {
			b();
			return;
		}
		if (b(), !s || s.length === 0) {
			u || a();
			return;
		}
		if (c === s[s.length - 1] && u) {
			a();
			return;
		}
		let t = s.findIndex((e) => e === c);
		if (t === -1) return;
		let n = s[t + 1];
		l(n);
	}
	function y() {
		h.current = window.setTimeout(() => {
			g.current = !0;
		}, FT);
	}
	function b() {
		h.current && window.clearTimeout(h.current), g.current = !1;
	}
	return /* @__PURE__ */ t.createElement("div", {
		onClick: _,
		onPointerCancel: b,
		onPointerDown: (e) => {
			d && p(e), y();
		},
		onPointerMove: (e) => {
			d && m(e);
		},
		ref: i,
		"data-vaul-drawer-visible": f ? "true" : "false",
		"data-vaul-handle": "",
		"aria-hidden": "true",
		...r
	}, /* @__PURE__ */ t.createElement("span", {
		"data-vaul-handle-hitarea": "",
		"aria-hidden": "true"
	}, n));
});
LT.displayName = "Drawer.Handle";
function RT({ onDrag: e, onOpenChange: n, open: r, ...i }) {
	let { onNestedDrag: a, onNestedOpenChange: o, onNestedRelease: s } = Rw();
	if (!a) throw Error("Drawer.NestedRoot must be placed in another drawer");
	return /* @__PURE__ */ t.createElement(MT, {
		nested: !0,
		open: r,
		onClose: () => {
			o(!1);
		},
		onDrag: (t, n) => {
			a(t, n), e?.(t, n);
		},
		onOpenChange: (e) => {
			e && o(e), n?.(e);
		},
		onRelease: s,
		...i
	});
}
function zT(e) {
	let n = Rw(), { container: r = n.container, ...i } = e;
	return /* @__PURE__ */ t.createElement(Aw, {
		container: r,
		...i
	});
}
var BT = {
	Root: MT,
	NestedRoot: RT,
	Content: PT,
	Overlay: NT,
	Trigger: kw,
	Portal: zT,
	Handle: LT,
	Close: Fw,
	Title: Nw,
	Description: Pw
}, VT = ({ onSelect: e, children: t }) => /* @__PURE__ */ (0, H.jsx)(wC, {
	onSelect: e ?? void 0,
	asChild: !0,
	children: t
}), HT = ({ trigger: e, children: t, open: n, onOpenChange: r }) => /* @__PURE__ */ (0, H.jsxs)(RC, {
	open: n,
	onOpenChange: r,
	children: [/* @__PURE__ */ (0, H.jsx)(BC, {
		asChild: !0,
		children: e
	}), /* @__PURE__ */ (0, H.jsx)(gC, { children: /* @__PURE__ */ (0, H.jsx)(HC, {
		asChild: !0,
		alignOffset: -20,
		children: /* @__PURE__ */ (0, H.jsx)(Z_, {
			title: "",
			showTitle: !1,
			children: t
		})
	}) })]
}), UT = ({ title: e, showTitle: t = !0, onOpenChange: n, trigger: r, hasAccessibleAlternative: i, children: a }) => {
	let [o, s] = h(!1), l = c((e) => {
		s(e), n?.(e);
	}, [s, n]), u = ev(), d = u === "android" || u === "ios", f = p(() => ({
		MenuItemWrapper: d ? null : VT,
		SubMenuWrapper: d ? null : HT,
		onOpenChange: l
	}), [l]), m = /* @__PURE__ */ (0, H.jsx)($_.Provider, {
		value: f,
		children: a
	}), g = /* @__PURE__ */ (0, H.jsx)(GC, {
		"aria-haspopup": "menu",
		tabIndex: i ? void 0 : 0,
		asChild: !0,
		children: r
	});
	return d ? /* @__PURE__ */ (0, H.jsxs)(H.Fragment, { children: [/* @__PURE__ */ (0, H.jsx)(WC, {
		onOpenChange: l,
		children: g
	}), /* @__PURE__ */ (0, H.jsx)(BT.Root, {
		open: o,
		onOpenChange: l,
		children: /* @__PURE__ */ (0, H.jsxs)(BT.Portal, { children: [/* @__PURE__ */ (0, H.jsx)(BT.Overlay, { className: (0, V.default)(Q_.bg) }), /* @__PURE__ */ (0, H.jsx)(BT.Content, {
			asChild: !0,
			children: /* @__PURE__ */ (0, H.jsx)(tv, {
				title: e,
				children: m
			})
		})] })
	})] }) : /* @__PURE__ */ (0, H.jsxs)(WC, {
		onOpenChange: l,
		children: [g, /* @__PURE__ */ (0, H.jsx)(KC, { children: /* @__PURE__ */ (0, H.jsx)(qC, {
			asChild: !0,
			children: /* @__PURE__ */ (0, H.jsx)(Z_, {
				showTitle: t,
				title: e,
				children: m
			})
		}) })]
	});
}, WT = ({ as: e = "h1", children: t, ...n }) => /* @__PURE__ */ (0, H.jsx)(Yf, {
	as: e,
	type: "heading",
	...n,
	children: t
}), GT = ({ children: e, ...t }) => /* @__PURE__ */ (0, H.jsx)(WT, {
	as: "h1",
	weight: "semibold",
	size: "xl",
	...t,
	children: e
}), KT = { link: "_link_k9ljz_8" }, qT = a(function({ children: e, className: t, kind: n = "primary", size: r = "md", ...i }, a) {
	return /* @__PURE__ */ (0, H.jsx)("a", {
		ref: a,
		...i,
		rel: "noreferrer noopener",
		className: (0, V.default)(KT.link, t),
		"data-kind": n,
		"data-size": r,
		children: e
	});
}), JT = "DropdownMenu", [YT, XT] = rv(JT, [Fx]), ZT = Fx(), [QT, $T] = YT(JT), eE = (t) => {
	let { __scopeDropdownMenu: n, children: r, dir: i, open: a, defaultOpen: o, onOpenChange: s, modal: c = !0 } = t, l = ZT(n), u = e.useRef(null), [d, f] = Iy({
		prop: a,
		defaultProp: o ?? !1,
		onChange: s,
		caller: JT
	});
	return /* @__PURE__ */ (0, H.jsx)(QT, {
		scope: n,
		triggerId: ty(),
		triggerRef: u,
		contentId: ty(),
		open: d,
		onOpenChange: f,
		onOpenToggle: e.useCallback(() => f((e) => !e), [f]),
		modal: c,
		children: /* @__PURE__ */ (0, H.jsx)(WS, {
			...l,
			open: d,
			onOpenChange: f,
			dir: i,
			modal: c,
			children: r
		})
	});
};
eE.displayName = JT;
var tE = "DropdownMenuTrigger", nE = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, disabled: r = !1, ...i } = e, a = $T(tE, n), o = ZT(n);
	return /* @__PURE__ */ (0, H.jsx)(GS, {
		asChild: !0,
		...o,
		children: /* @__PURE__ */ (0, H.jsx)(G.button, {
			type: "button",
			id: a.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": a.open,
			"aria-controls": a.open ? a.contentId : void 0,
			"data-state": a.open ? "open" : "closed",
			"data-disabled": r ? "" : void 0,
			disabled: r,
			...i,
			ref: ov(t, a.triggerRef),
			onPointerDown: W(e.onPointerDown, (e) => {
				!r && e.button === 0 && e.ctrlKey === !1 && (a.onOpenToggle(), a.open || e.preventDefault());
			}),
			onKeyDown: W(e.onKeyDown, (e) => {
				r || (["Enter", " "].includes(e.key) && a.onOpenToggle(), e.key === "ArrowDown" && a.onOpenChange(!0), [
					"Enter",
					" ",
					"ArrowDown"
				].includes(e.key) && e.preventDefault());
			})
		})
	});
});
nE.displayName = tE;
var rE = "DropdownMenuPortal", iE = (e) => {
	let { __scopeDropdownMenu: t, ...n } = e, r = ZT(t);
	return /* @__PURE__ */ (0, H.jsx)(KS, {
		...r,
		...n
	});
};
iE.displayName = rE;
var aE = "DropdownMenuContent", oE = e.forwardRef((t, n) => {
	let { __scopeDropdownMenu: r, ...i } = t, a = $T(aE, r), o = ZT(r), s = e.useRef(!1);
	return /* @__PURE__ */ (0, H.jsx)(qS, {
		id: a.contentId,
		"aria-labelledby": a.triggerId,
		...o,
		...i,
		ref: n,
		onCloseAutoFocus: W(t.onCloseAutoFocus, (e) => {
			s.current || a.triggerRef.current?.focus(), s.current = !1, e.preventDefault();
		}),
		onInteractOutside: W(t.onInteractOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0, r = t.button === 2 || n;
			(!a.modal || r) && (s.current = !0);
		}),
		style: {
			...t.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
oE.displayName = aE;
var sE = "DropdownMenuGroup", cE = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = ZT(n);
	return /* @__PURE__ */ (0, H.jsx)(JS, {
		...i,
		...r,
		ref: t
	});
});
cE.displayName = sE;
var lE = "DropdownMenuLabel", uE = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = ZT(n);
	return /* @__PURE__ */ (0, H.jsx)(YS, {
		...i,
		...r,
		ref: t
	});
});
uE.displayName = lE;
var dE = "DropdownMenuItem", fE = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = ZT(n);
	return /* @__PURE__ */ (0, H.jsx)(XS, {
		...i,
		...r,
		ref: t
	});
});
fE.displayName = dE;
var pE = "DropdownMenuCheckboxItem", mE = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = ZT(n);
	return /* @__PURE__ */ (0, H.jsx)(ZS, {
		...i,
		...r,
		ref: t
	});
});
mE.displayName = pE;
var hE = "DropdownMenuRadioGroup", gE = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = ZT(n);
	return /* @__PURE__ */ (0, H.jsx)(QS, {
		...i,
		...r,
		ref: t
	});
});
gE.displayName = hE;
var _E = "DropdownMenuRadioItem", vE = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = ZT(n);
	return /* @__PURE__ */ (0, H.jsx)($S, {
		...i,
		...r,
		ref: t
	});
});
vE.displayName = _E;
var yE = "DropdownMenuItemIndicator", bE = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = ZT(n);
	return /* @__PURE__ */ (0, H.jsx)(eC, {
		...i,
		...r,
		ref: t
	});
});
bE.displayName = yE;
var xE = "DropdownMenuSeparator", SE = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = ZT(n);
	return /* @__PURE__ */ (0, H.jsx)(tC, {
		...i,
		...r,
		ref: t
	});
});
SE.displayName = xE;
var CE = "DropdownMenuArrow", wE = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = ZT(n);
	return /* @__PURE__ */ (0, H.jsx)(nC, {
		...i,
		...r,
		ref: t
	});
});
wE.displayName = CE;
var TE = (e) => {
	let { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: i, defaultOpen: a } = e, o = ZT(t), [s, c] = Iy({
		prop: r,
		defaultProp: a ?? !1,
		onChange: i,
		caller: "DropdownMenuSub"
	});
	return /* @__PURE__ */ (0, H.jsx)(rC, {
		...o,
		open: s,
		onOpenChange: c,
		children: n
	});
}, EE = "DropdownMenuSubTrigger", DE = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = ZT(n);
	return /* @__PURE__ */ (0, H.jsx)(iC, {
		...i,
		...r,
		ref: t
	});
});
DE.displayName = EE;
var OE = "DropdownMenuSubContent", kE = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = ZT(n);
	return /* @__PURE__ */ (0, H.jsx)(aC, {
		...i,
		...r,
		ref: t,
		style: {
			...e.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
kE.displayName = OE;
var AE = eE, jE = nE, ME = iE, NE = oE, PE = ({ onSelect: e, children: t }) => /* @__PURE__ */ (0, H.jsx)(fE, {
	onSelect: e ?? void 0,
	asChild: !0,
	children: t
}), FE = 180, IE = ({ trigger: e, children: t, open: n, onOpenChange: r }) => {
	let [i, a] = h(!1);
	return u(() => {
		if (n) {
			let e = setTimeout(() => a(!0), FE);
			return () => clearTimeout(e);
		} else a(!1);
	}, [n]), /* @__PURE__ */ (0, H.jsxs)(TE, {
		open: n && i,
		onOpenChange: r,
		children: [/* @__PURE__ */ (0, H.jsx)(DE, {
			asChild: !0,
			children: e
		}), /* @__PURE__ */ (0, H.jsx)(iE, { children: /* @__PURE__ */ (0, H.jsx)(kE, {
			asChild: !0,
			alignOffset: -20,
			children: /* @__PURE__ */ (0, H.jsx)(Z_, {
				title: "",
				showTitle: !1,
				children: t
			})
		}) })]
	});
}, LE = ({ className: e, title: t, showTitle: n = !0, open: r, onOpenChange: i, trigger: a, children: o, side: s = "bottom", align: c = "center" }) => {
	let l = ev(), u = l === "android" || l === "ios", d = p(() => ({
		MenuItemWrapper: u ? null : PE,
		SubMenuWrapper: u ? null : IE,
		onOpenChange: i
	}), [i]), f = /* @__PURE__ */ (0, H.jsx)($_.Provider, {
		value: d,
		children: o
	});
	return u ? /* @__PURE__ */ (0, H.jsxs)(BT.Root, {
		open: r,
		onOpenChange: i,
		children: [/* @__PURE__ */ (0, H.jsx)(BT.Trigger, {
			asChild: !0,
			children: a
		}), /* @__PURE__ */ (0, H.jsxs)(BT.Portal, { children: [/* @__PURE__ */ (0, H.jsx)(BT.Overlay, { className: (0, V.default)(Q_.bg) }), /* @__PURE__ */ (0, H.jsx)(BT.Content, {
			asChild: !0,
			children: /* @__PURE__ */ (0, H.jsx)(tv, {
				title: t,
				children: f
			})
		})] })]
	}) : /* @__PURE__ */ (0, H.jsxs)(AE, {
		open: r,
		onOpenChange: i,
		children: [/* @__PURE__ */ (0, H.jsx)(jE, {
			asChild: !0,
			children: a
		}), /* @__PURE__ */ (0, H.jsx)(ME, { children: /* @__PURE__ */ (0, H.jsx)(NE, {
			asChild: !0,
			side: s,
			align: c,
			sideOffset: 8,
			children: /* @__PURE__ */ (0, H.jsx)(Z_, {
				className: e,
				title: t,
				showTitle: n,
				children: f
			})
		}) })]
	});
}, RE = {
	item: "_item_bym9p_8",
	interactive: "_interactive_bym9p_26",
	"no-label": "_no-label_bym9p_31",
	label: "_label_bym9p_35",
	"no-icon": "_no-icon_bym9p_42",
	icon: "_icon_bym9p_51",
	"nav-hint": "_nav-hint_bym9p_60",
	disabled: "_disabled_bym9p_140"
};
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-right.js
function zE(e, t) {
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
zE.displayName = "ChevronRightIcon";
var BE = a(zE), VE = Symbol.for("react.lazy"), HE = e.use;
function UE(e) {
	return typeof e == "object" && !!e && "then" in e;
}
function WE(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === VE && "_payload" in e && UE(e._payload);
}
/* @__NO_SIDE_EFFECTS__ */
function GE(t) {
	let n = /* @__PURE__ */ qE(t), r = e.forwardRef((t, r) => {
		let { children: i, ...a } = t;
		WE(i) && typeof HE == "function" && (i = HE(i._payload));
		let o = e.Children.toArray(i), s = o.find(YE);
		if (s) {
			let t = s.props.children, i = o.map((n) => n === s ? e.Children.count(t) > 1 ? e.Children.only(null) : e.isValidElement(t) ? t.props.children : null : n);
			return /* @__PURE__ */ (0, H.jsx)(n, {
				...a,
				ref: r,
				children: e.isValidElement(t) ? e.cloneElement(t, void 0, i) : null
			});
		}
		return /* @__PURE__ */ (0, H.jsx)(n, {
			...a,
			ref: r,
			children: i
		});
	});
	return r.displayName = `${t}.Slot`, r;
}
var KE = /* @__PURE__ */ GE("Slot");
/* @__NO_SIDE_EFFECTS__ */
function qE(t) {
	let n = e.forwardRef((t, n) => {
		let { children: r, ...i } = t;
		if (WE(r) && typeof HE == "function" && (r = HE(r._payload)), e.isValidElement(r)) {
			let t = ZE(r), a = XE(i, r.props);
			return r.type !== e.Fragment && (a.ref = n ? ov(n, t) : t), e.cloneElement(r, a);
		}
		return e.Children.count(r) > 1 ? e.Children.only(null) : null;
	});
	return n.displayName = `${t}.SlotClone`, n;
}
var JE = Symbol("radix.slottable");
function YE(t) {
	return e.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === JE;
}
function XE(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
function ZE(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region ../../node_modules/compound-web-tchap/dist/components/Menu/MenuItem.js
var K = ({ as: e, className: t, Icon: n, label: r, labelProps: i, onSelect: a, kind: s = "primary", children: u, onClick: d, disabled: f, hideChevron: p, ...m }) => {
	let h = e ?? "button", g = l($_), _ = c((e) => {
		if (d?.(e), a !== null && g?.MenuItemWrapper == null) {
			let e = new CustomEvent("menu.itemSelect", {
				bubbles: !0,
				cancelable: !0
			});
			a(e), e.defaultPrevented || g?.onOpenChange(!1);
		}
	}, [g, a]), v = o(n), y = n, b = n, x = /* @__PURE__ */ (0, H.jsxs)(h, {
		role: "menuitem",
		...m,
		className: (0, V.default)(t, RE.item, {
			[RE.interactive]: a !== null,
			[RE["no-label"]]: r === null,
			[RE["no-icon"]]: !n,
			[RE.disabled]: f
		}),
		"data-kind": s,
		onClick: _,
		disabled: h === "button" ? f : void 0,
		"aria-disabled": h === "button" ? void 0 : f,
		children: [
			n && (v ? /* @__PURE__ */ (0, H.jsx)(KE, {
				className: RE.icon,
				children: y
			}) : /* @__PURE__ */ (0, H.jsx)(b, {
				width: 24,
				height: 24,
				className: RE.icon,
				"aria-hidden": !0
			})),
			r !== null && /* @__PURE__ */ (0, H.jsx)(Xf, {
				className: RE.label,
				size: "md",
				weight: "medium",
				as: "span",
				...i,
				children: r
			}),
			!p && (h === "button" || h === "a") && /* @__PURE__ */ (0, H.jsx)(BE, {
				width: 8,
				height: 24,
				className: RE["nav-hint"],
				"aria-hidden": !0,
				viewBox: "8 0 8 24"
			}),
			u
		]
	});
	return g?.MenuItemWrapper == null || a === null ? x : /* @__PURE__ */ (0, H.jsx)(g.MenuItemWrapper, {
		onSelect: a,
		children: x
	});
}, QE = ({ trigger: e, open: t, onOpenChange: n, children: r }) => {
	let i = l($_);
	return i?.SubMenuWrapper == null ? /* @__PURE__ */ (0, H.jsxs)(H.Fragment, { children: [e, r] }) : /* @__PURE__ */ (0, H.jsx)(i.SubMenuWrapper, {
		trigger: e,
		open: t,
		onOpenChange: n,
		children: r
	});
}, $E = {
	control: "_control_d83jn_10",
	"enable-ligatures": "_enable-ligatures_d83jn_63"
}, eD = "Label", tD = e.forwardRef((e, t) => /* @__PURE__ */ (0, H.jsx)(G.label, {
	...e,
	ref: t,
	onMouseDown: (t) => {
		t.target.closest("button, input, select, textarea") || (e.onMouseDown?.(t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
	}
}));
tD.displayName = eD;
//#endregion
//#region ../../node_modules/@radix-ui/react-form/dist/index.mjs
var [nD, rD] = rv("Form"), iD = "Form", [aD, oD] = nD(iD), [sD, cD] = nD(iD), lD = e.forwardRef((t, n) => {
	let { __scopeForm: r, onClearServerErrors: i = () => {}, ...a } = t, o = sv(n, e.useRef(null)), [s, c] = e.useState({}), l = e.useCallback((e) => s[e], [s]), u = e.useCallback((e, t) => c((n) => ({
		...n,
		[e]: {
			...n[e] ?? {},
			...t
		}
	})), []), d = e.useCallback((e) => {
		c((t) => ({
			...t,
			[e]: void 0
		})), v((t) => ({
			...t,
			[e]: {}
		}));
	}, []), [f, p] = e.useState({}), m = e.useCallback((e) => f[e] ?? [], [f]), h = e.useCallback((e, t) => {
		p((n) => ({
			...n,
			[e]: [...n[e] ?? [], t]
		}));
	}, []), g = e.useCallback((e, t) => {
		p((n) => ({
			...n,
			[e]: (n[e] ?? []).filter((e) => e.id !== t)
		}));
	}, []), [_, v] = e.useState({}), y = e.useCallback((e) => _[e] ?? {}, [_]), b = e.useCallback((e, t) => {
		v((n) => ({
			...n,
			[e]: {
				...n[e] ?? {},
				...t
			}
		}));
	}, []), [x, S] = e.useState({});
	return /* @__PURE__ */ (0, H.jsx)(aD, {
		scope: r,
		getFieldValidity: l,
		onFieldValidityChange: u,
		getFieldCustomMatcherEntries: m,
		onFieldCustomMatcherEntryAdd: h,
		onFieldCustomMatcherEntryRemove: g,
		getFieldCustomErrors: y,
		onFieldCustomErrorsChange: b,
		onFieldValiditionClear: d,
		children: /* @__PURE__ */ (0, H.jsx)(sD, {
			scope: r,
			onFieldMessageIdAdd: e.useCallback((e, t) => {
				S((n) => {
					let r = new Set(n[e]).add(t);
					return {
						...n,
						[e]: r
					};
				});
			}, []),
			onFieldMessageIdRemove: e.useCallback((e, t) => {
				S((n) => {
					let r = new Set(n[e]);
					return r.delete(t), {
						...n,
						[e]: r
					};
				});
			}, []),
			getFieldDescription: e.useCallback((e) => Array.from(x[e] ?? []).join(" ") || void 0, [x]),
			children: /* @__PURE__ */ (0, H.jsx)(G.form, {
				...a,
				ref: o,
				onInvalid: W(t.onInvalid, (e) => {
					let t = ND(e.currentTarget);
					t === e.target && t.focus(), e.preventDefault();
				}),
				onSubmit: W(t.onSubmit, i, { checkForDefaultPrevented: !1 }),
				onReset: W(t.onReset, i)
			})
		})
	});
});
lD.displayName = iD;
var uD = "FormField", [dD, fD] = nD(uD), pD = e.forwardRef((e, t) => {
	let { __scopeForm: n, name: r, serverInvalid: i = !1, ...a } = e, o = oD(uD, n).getFieldValidity(r);
	return /* @__PURE__ */ (0, H.jsx)(dD, {
		scope: n,
		id: ty(),
		name: r,
		serverInvalid: i,
		children: /* @__PURE__ */ (0, H.jsx)(G.div, {
			"data-valid": RD(o, i),
			"data-invalid": zD(o, i),
			...a,
			ref: t
		})
	});
});
pD.displayName = uD;
var mD = "FormLabel", hD = e.forwardRef((e, t) => {
	let { __scopeForm: n, ...r } = e, i = oD(mD, n), a = fD(mD, n), o = r.htmlFor || a.id, s = i.getFieldValidity(a.name);
	return /* @__PURE__ */ (0, H.jsx)(tD, {
		"data-valid": RD(s, a.serverInvalid),
		"data-invalid": zD(s, a.serverInvalid),
		...r,
		ref: t,
		htmlFor: o
	});
});
hD.displayName = mD;
var gD = "FormControl", _D = e.forwardRef((t, n) => {
	let { __scopeForm: r, ...i } = t, a = oD(gD, r), o = fD(gD, r), s = cD(gD, r), c = e.useRef(null), l = sv(n, c), u = i.name || o.name, d = i.id || o.id, f = a.getFieldCustomMatcherEntries(u), { onFieldValidityChange: p, onFieldCustomErrorsChange: m, onFieldValiditionClear: h } = a, g = e.useCallback(async (e) => {
		if (LD(e.validity)) {
			p(u, kD(e.validity));
			return;
		}
		let t = e.form ? new FormData(e.form) : new FormData(), n = [e.value, t], r = [], i = [];
		f.forEach((e) => {
			PD(e, n) ? i.push(e) : FD(e) && r.push(e);
		});
		let a = r.map(({ id: e, match: t }) => [e, t(...n)]), o = Object.fromEntries(a), s = Object.values(o).some(Boolean), c = s;
		if (e.setCustomValidity(c ? vD : ""), p(u, kD(e.validity)), m(u, o), !s && i.length > 0) {
			let t = i.map(({ id: e, match: t }) => t(...n).then((t) => [e, t])), r = await Promise.all(t), a = Object.fromEntries(r), o = Object.values(a).some(Boolean);
			e.setCustomValidity(o ? vD : ""), p(u, kD(e.validity)), m(u, a);
		}
	}, [
		f,
		u,
		m,
		p
	]);
	e.useEffect(() => {
		let e = c.current;
		if (e) {
			let t = () => g(e);
			return e.addEventListener("change", t), () => e.removeEventListener("change", t);
		}
	}, [g]);
	let _ = e.useCallback(() => {
		let e = c.current;
		e && (e.setCustomValidity(""), h(u));
	}, [u, h]);
	e.useEffect(() => {
		let e = c.current?.form;
		if (e) return e.addEventListener("reset", _), () => e.removeEventListener("reset", _);
	}, [_]), e.useEffect(() => {
		let e = c.current, t = e?.closest("form");
		if (t && o.serverInvalid) {
			let n = ND(t);
			n === e && n.focus();
		}
	}, [o.serverInvalid]);
	let v = a.getFieldValidity(u);
	return /* @__PURE__ */ (0, H.jsx)(G.input, {
		"data-valid": RD(v, o.serverInvalid),
		"data-invalid": zD(v, o.serverInvalid),
		"aria-invalid": o.serverInvalid ? !0 : void 0,
		"aria-describedby": s.getFieldDescription(u),
		title: "",
		...i,
		ref: l,
		id: d,
		name: u,
		onInvalid: W(t.onInvalid, (e) => {
			let t = e.currentTarget;
			g(t);
		}),
		onChange: W(t.onChange, (e) => {
			_();
		})
	});
});
_D.displayName = gD;
var vD = "This value is not valid", yD = {
	badInput: vD,
	patternMismatch: "This value does not match the required pattern",
	rangeOverflow: "This value is too large",
	rangeUnderflow: "This value is too small",
	stepMismatch: "This value does not match the required step",
	tooLong: "This value is too long",
	tooShort: "This value is too short",
	typeMismatch: "This value does not match the required type",
	valid: void 0,
	valueMissing: "This value is missing"
}, bD = "FormMessage", xD = e.forwardRef((e, t) => {
	let { match: n, name: r, ...i } = e, a = fD(bD, e.__scopeForm), o = r ?? a.name;
	return n === void 0 ? /* @__PURE__ */ (0, H.jsx)(wD, {
		...i,
		ref: t,
		name: o,
		children: e.children || vD
	}) : typeof n == "function" ? /* @__PURE__ */ (0, H.jsx)(CD, {
		match: n,
		...i,
		ref: t,
		name: o
	}) : /* @__PURE__ */ (0, H.jsx)(SD, {
		match: n,
		...i,
		ref: t,
		name: o
	});
});
xD.displayName = bD;
var SD = e.forwardRef((e, t) => {
	let { match: n, forceMatch: r = !1, name: i, children: a, ...o } = e, s = oD(bD, o.__scopeForm).getFieldValidity(i);
	return r || s?.[n] ? /* @__PURE__ */ (0, H.jsx)(wD, {
		ref: t,
		...o,
		name: i,
		children: a ?? yD[n]
	}) : null;
}), CD = e.forwardRef((t, n) => {
	let { match: r, forceMatch: i = !1, name: a, id: o, children: s, ...c } = t, l = oD(bD, c.__scopeForm), u = sv(n, e.useRef(null)), d = ty(), f = o ?? d, p = e.useMemo(() => ({
		id: f,
		match: r
	}), [f, r]), { onFieldCustomMatcherEntryAdd: m, onFieldCustomMatcherEntryRemove: h } = l;
	e.useEffect(() => (m(a, p), () => h(a, p.id)), [
		p,
		a,
		m,
		h
	]);
	let g = l.getFieldValidity(a), _ = l.getFieldCustomErrors(a)[f];
	return i || g && !LD(g) && _ ? /* @__PURE__ */ (0, H.jsx)(wD, {
		id: f,
		ref: u,
		...c,
		name: a,
		children: s ?? vD
	}) : null;
}), wD = e.forwardRef((t, n) => {
	let { __scopeForm: r, id: i, name: a, ...o } = t, s = cD(bD, r), c = ty(), l = i ?? c, { onFieldMessageIdAdd: u, onFieldMessageIdRemove: d } = s;
	return e.useEffect(() => (u(a, l), () => d(a, l)), [
		a,
		l,
		u,
		d
	]), /* @__PURE__ */ (0, H.jsx)(G.span, {
		id: l,
		...o,
		ref: n
	});
}), TD = "FormValidityState", ED = (e) => {
	let { __scopeForm: t, name: n, children: r } = e, i = oD(TD, t), a = fD(TD, t), o = n ?? a.name;
	return /* @__PURE__ */ (0, H.jsx)(H.Fragment, { children: r(i.getFieldValidity(o)) });
};
ED.displayName = TD;
var DD = "FormSubmit", OD = e.forwardRef((e, t) => {
	let { __scopeForm: n, ...r } = e;
	return /* @__PURE__ */ (0, H.jsx)(G.button, {
		type: "submit",
		...r,
		ref: t
	});
});
OD.displayName = DD;
function kD(e) {
	let t = {};
	for (let n in e) t[n] = e[n];
	return t;
}
function AD(e) {
	return e instanceof HTMLElement;
}
function jD(e) {
	return "validity" in e;
}
function MD(e) {
	return jD(e) && (e.validity.valid === !1 || e.getAttribute("aria-invalid") === "true");
}
function ND(e) {
	let t = e.elements, [n] = Array.from(t).filter(AD).filter(MD);
	return n;
}
function PD(e, t) {
	return e.match.constructor.name === "AsyncFunction" || ID(e.match, t);
}
function FD(e) {
	return e.match.constructor.name === "Function";
}
function ID(e, t) {
	return e(...t) instanceof Promise;
}
function LD(e) {
	let t = !1;
	for (let n in e) {
		let r = n;
		if (r !== "valid" && r !== "customError" && e[r]) {
			t = !0;
			break;
		}
	}
	return t;
}
function RD(e, t) {
	if (e?.valid === !0 && !t) return !0;
}
function zD(e, t) {
	if (e?.valid === !1 || t) return !0;
}
var BD = lD, VD = pD, HD = _D, UD = OD, WD = a(function({ className: e, enableLigatures: t, ...n }, r) {
	let i = (0, V.default)($E.control, e, { [$E["enable-ligatures"]]: t });
	return /* @__PURE__ */ (0, H.jsx)("input", {
		ref: r,
		...n,
		className: i
	});
}), GD = a(function(e, t) {
	return /* @__PURE__ */ (0, H.jsx)(HD, {
		asChild: !0,
		children: /* @__PURE__ */ (0, H.jsx)(WD, {
			ref: t,
			...e
		})
	});
});
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/visibility-on.js
function KD(e, t) {
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
KD.displayName = "VisibilityOnIcon";
var qD = a(KD);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/visibility-off.js
function JD(e, t) {
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
JD.displayName = "VisibilityOffIcon";
var YD = a(JD), XD = {
	container: "_container_153f2_10",
	input: "_input_153f2_18",
	ui: "_ui_153f2_19"
};
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/check.js
function ZD(e, t) {
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
ZD.displayName = "CheckIcon";
var QD = a(ZD), $D = a(function({ className: e, ...t }, n) {
	return /* @__PURE__ */ (0, H.jsxs)("div", {
		className: (0, V.default)(XD.container, e),
		children: [/* @__PURE__ */ (0, H.jsx)("input", {
			ref: n,
			className: XD.input,
			...t,
			type: "checkbox"
		}), /* @__PURE__ */ (0, H.jsx)("div", {
			className: XD.ui,
			children: /* @__PURE__ */ (0, H.jsx)(QD, { "aria-hidden": !0 })
		})]
	});
});
a(function(e, t) {
	return /* @__PURE__ */ (0, H.jsx)(HD, {
		asChild: !0,
		children: /* @__PURE__ */ (0, H.jsx)($D, {
			ref: t,
			...e
		})
	});
});
//#endregion
//#region ../../node_modules/compound-web-tchap/dist/components/Form/Controls/Radio/Radio.module.js
var eO = {
	container: "_container_1ug7n_10",
	input: "_input_1ug7n_18",
	ui: "_ui_1ug7n_19"
}, tO = a(function({ className: e, ...t }, n) {
	return /* @__PURE__ */ (0, H.jsxs)("div", {
		className: (0, V.default)(eO.container, e),
		children: [/* @__PURE__ */ (0, H.jsx)("input", {
			ref: n,
			...t,
			className: eO.input,
			type: "radio"
		}), /* @__PURE__ */ (0, H.jsx)("div", { className: eO.ui })]
	});
});
a(function(e, t) {
	return /* @__PURE__ */ (0, H.jsx)(HD, {
		asChild: !0,
		children: /* @__PURE__ */ (0, H.jsx)(tO, {
			ref: t,
			...e
		})
	});
});
//#endregion
//#region ../../node_modules/compound-web-tchap/dist/components/Form/Controls/Toggle/Toggle.module.js
var nO = {
	container: "_container_udcm8_10",
	input: "_input_udcm8_24",
	ui: "_ui_udcm8_34"
}, rO = a(function({ className: e, ...t }, n) {
	return /* @__PURE__ */ (0, H.jsxs)("div", {
		className: (0, V.default)(nO.container, e),
		children: [/* @__PURE__ */ (0, H.jsx)("input", {
			role: "switch",
			ref: n,
			className: nO.input,
			...t,
			type: "checkbox"
		}), /* @__PURE__ */ (0, H.jsx)("div", { className: nO.ui })]
	});
});
a(function(e, t) {
	return /* @__PURE__ */ (0, H.jsx)(HD, {
		asChild: !0,
		children: /* @__PURE__ */ (0, H.jsx)(rO, {
			ref: t,
			...e
		})
	});
});
//#endregion
//#region ../../node_modules/compound-web-tchap/dist/components/Form/form.module.js
var iO = {
	root: "_root_19upo_16",
	field: "_field_19upo_26",
	"inline-field": "_inline-field_19upo_32",
	"inline-field-body": "_inline-field-body_19upo_38",
	"inline-field-control": "_inline-field-control_19upo_44",
	label: "_label_19upo_59",
	message: "_message_19upo_85",
	"help-message": "_help-message_19upo_91",
	"error-message": "_error-message_19upo_95",
	"success-message": "_success-message_19upo_99"
}, aO = {
	icon: "_icon_1855a_18",
	spin: "_spin_1855a_1"
};
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/spinner.js
function oO(e, t) {
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
			d: "M12 4.031a8 8 0 1 0 8 8 1 1 0 0 1 2 0c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10a1 1 0 1 1 0 2",
			clipRule: "evenodd"
		})
	});
}
oO.displayName = "SpinnerIcon";
var sO = a(oO), cO = a(function({ size: e = 20, className: t, ...n }, r) {
	return /* @__PURE__ */ (0, H.jsx)(sO, {
		ref: r,
		className: (0, V.default)(aO.icon, t),
		style: {
			width: e,
			height: e
		},
		...n
	});
}), lO = a(function({ children: e, ...t }, n) {
	let r = (0, V.default)(iO.root, t.className);
	return /* @__PURE__ */ (0, H.jsx)(BD, {
		ref: n,
		...t,
		className: r,
		children: e
	});
}), uO = a(function({ children: e, ...t }, n) {
	let r = (0, V.default)(iO.field, t.className);
	return /* @__PURE__ */ (0, H.jsx)(VD, {
		ref: n,
		...t,
		className: r,
		children: e
	});
}), dO = a(function(e, t) {
	return /* @__PURE__ */ (0, H.jsx)(UD, {
		asChild: !0,
		children: /* @__PURE__ */ (0, H.jsx)($f, {
			type: "submit",
			ref: t,
			...e
		})
	});
}), fO = a(function({ className: e, label: t, onSelect: n, checked: r, disabled: i }, a) {
	return /* @__PURE__ */ (0, H.jsx)(K, {
		as: "div",
		role: "menuitemradio",
		"aria-checked": r,
		className: e,
		label: t,
		onSelect: n,
		disabled: i,
		Icon: /* @__PURE__ */ (0, H.jsx)(tO, {
			id: d(),
			ref: a,
			"aria-hidden": !0,
			checked: r,
			disabled: i,
			onChange: c(() => {}, [])
		})
	});
});
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/search.js
function pO(e, t) {
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
pO.displayName = "SearchIcon";
var mO = a(pO), hO = { separator: "_separator_13qwf_8" }, gO = Symbol.for("react.lazy"), _O = e.use;
function vO(e) {
	return typeof e == "object" && !!e && "then" in e;
}
function yO(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === gO && "_payload" in e && vO(e._payload);
}
/* @__NO_SIDE_EFFECTS__ */
function bO(t) {
	let n = /* @__PURE__ */ xO(t), r = e.forwardRef((t, r) => {
		let { children: i, ...a } = t;
		yO(i) && typeof _O == "function" && (i = _O(i._payload));
		let o = e.Children.toArray(i), s = o.find(CO);
		if (s) {
			let t = s.props.children, i = o.map((n) => n === s ? e.Children.count(t) > 1 ? e.Children.only(null) : e.isValidElement(t) ? t.props.children : null : n);
			return /* @__PURE__ */ (0, H.jsx)(n, {
				...a,
				ref: r,
				children: e.isValidElement(t) ? e.cloneElement(t, void 0, i) : null
			});
		}
		return /* @__PURE__ */ (0, H.jsx)(n, {
			...a,
			ref: r,
			children: i
		});
	});
	return r.displayName = `${t}.Slot`, r;
}
/* @__NO_SIDE_EFFECTS__ */
function xO(t) {
	let n = e.forwardRef((t, n) => {
		let { children: r, ...i } = t;
		if (yO(r) && typeof _O == "function" && (r = _O(r._payload)), e.isValidElement(r)) {
			let t = TO(r), a = wO(i, r.props);
			return r.type !== e.Fragment && (a.ref = n ? ov(n, t) : t), e.cloneElement(r, a);
		}
		return e.Children.count(r) > 1 ? e.Children.only(null) : null;
	});
	return n.displayName = `${t}.SlotClone`, n;
}
var SO = Symbol("radix.slottable");
function CO(t) {
	return e.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === SO;
}
function wO(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
function TO(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region ../../node_modules/@radix-ui/react-separator/node_modules/@radix-ui/react-primitive/dist/index.mjs
var EO = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((t, n) => {
	let r = /* @__PURE__ */ bO(`Primitive.${n}`), i = e.forwardRef((e, t) => {
		let { asChild: i, ...a } = e, o = i ? r : n;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ (0, H.jsx)(o, {
			...a,
			ref: t
		});
	});
	return i.displayName = `Primitive.${n}`, {
		...t,
		[n]: i
	};
}, {}), DO = "Separator", OO = "horizontal", kO = ["horizontal", "vertical"], AO = e.forwardRef((e, t) => {
	let { decorative: n, orientation: r = OO, ...i } = e, a = jO(r) ? r : OO, o = a === "vertical" ? a : void 0, s = n ? { role: "none" } : {
		"aria-orientation": o,
		role: "separator"
	};
	return /* @__PURE__ */ (0, H.jsx)(EO.div, {
		"data-orientation": a,
		...s,
		...i,
		ref: t
	});
});
AO.displayName = DO;
function jO(e) {
	return kO.includes(e);
}
var MO = AO, NO = "--cpd-separator-spacing", PO = a(({ className: e, spacing: t, kind: n = "primary", ...r }, i) => {
	let a = (0, V.default)(hO.separator, e), o = m(null), s = Cg([o, i]);
	return u(() => {
		let e = o.current?.style;
		t ? e?.setProperty(NO, t) : e?.removeProperty(NO);
	}, [t]), /* @__PURE__ */ (0, H.jsx)(MO, {
		...r,
		className: a,
		ref: s,
		"data-kind": n
	});
});
PO.displayName = "Separator";
//#endregion
//#region ../../node_modules/compound-web-tchap/dist/components/Menu/ToggleMenuItem.js
var FO = a(function({ className: e, Icon: t, label: n, onSelect: r, checked: i, disabled: a, onClick: o }, s) {
	return /* @__PURE__ */ (0, H.jsx)(K, {
		as: "button",
		role: "menuitemcheckbox",
		"aria-checked": i,
		className: e,
		Icon: t,
		label: n,
		hideChevron: !0,
		onSelect: r,
		disabled: a,
		onClick: o,
		children: /* @__PURE__ */ (0, H.jsx)(rO, {
			id: d(),
			ref: s,
			"aria-hidden": !0,
			tabIndex: -1,
			checked: i,
			disabled: a,
			onChange: c(() => {}, [])
		})
	});
}), IO = a(function({ className: e, label: t, onSelect: n, checked: r, disabled: i }, a) {
	return /* @__PURE__ */ (0, H.jsx)(K, {
		as: "button",
		role: "menuitemcheckbox",
		"aria-checked": r,
		className: e,
		label: t,
		hideChevron: !0,
		onSelect: n,
		disabled: i,
		Icon: /* @__PURE__ */ (0, H.jsx)($D, {
			id: d(),
			ref: a,
			"aria-hidden": !0,
			tabIndex: -1,
			checked: r,
			disabled: i,
			onChange: c(() => {}, [])
		})
	});
}), LO = {
	"toast-container": "_toast-container_1ysb3_8",
	icon: "_icon_1ysb3_26",
	"has-close": "_has-close_1ysb3_30",
	content: "_content_1ysb3_34",
	close: "_close_1ysb3_41"
}, RO = a(function({ children: e, className: t, Icon: n, onClose: r, tooltip: i, ...a }, o) {
	let s = !!r, c = (0, V.default)(LO["toast-container"], t, { [LO["has-close"]]: s });
	return /* @__PURE__ */ (0, H.jsxs)(Xf, {
		...a,
		as: "div",
		size: "sm",
		weight: "medium",
		className: c,
		ref: o,
		children: [/* @__PURE__ */ (0, H.jsxs)("div", {
			className: LO.content,
			children: [n && /* @__PURE__ */ (0, H.jsx)(n, {
				className: LO.icon,
				width: 20,
				height: 20,
				"aria-hidden": !0
			}), e]
		}), s && /* @__PURE__ */ (0, H.jsx)(L_, {
			size: "24px",
			kind: "secondary",
			noBackground: !0,
			tooltip: i,
			tooltipPlacement: "right",
			className: LO.close,
			onClick: r,
			children: /* @__PURE__ */ (0, H.jsx)(G_, {})
		})]
	});
});
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-down.js
function zO(e, t) {
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
zO.displayName = "ChevronDownIcon";
var BO = a(zO);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-left.js
function VO(e, t) {
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
VO.displayName = "ChevronLeftIcon";
var HO = a(VO), UO = { "chat-filter": "_chat-filter_5qdp0_8" }, WO = a(function({ children: e, selected: t, ...n }, r) {
	return /* @__PURE__ */ (0, H.jsx)(Qf, {
		...n,
		className: UO["chat-filter"],
		"aria-selected": t,
		as: "button",
		ref: r,
		tabIndex: 0,
		children: e
	});
}), GO = { "unread-counter": "_unread-counter_1147r_8" };
//#endregion
//#region ../../node_modules/compound-web-tchap/dist/components/ActivityMarker/UnreadCounter.js
function KO({ count: e, ...t }) {
	return e === null ? /* @__PURE__ */ (0, H.jsx)("div", {
		...t,
		className: GO["unread-counter"]
	}) : /* @__PURE__ */ (0, H.jsx)("span", {
		...t,
		className: GO["unread-counter"],
		children: e
	});
}
//#endregion
//#region ../../node_modules/compound-web-tchap/dist/components/ActivityMarker/Unread.module.js
var qO = { unread: "_unread_cti0f_8" };
//#endregion
//#region ../../node_modules/compound-web-tchap/dist/components/ActivityMarker/Unread.js
function JO(e) {
	return /* @__PURE__ */ (0, H.jsx)("div", {
		...e,
		className: qO.unread,
		children: /* @__PURE__ */ (0, H.jsx)("div", {})
	});
}
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/play-solid.js
function YO(e, t) {
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
YO.displayName = "PlaySolidIcon";
var XO = a(YO);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/pause-solid.js
function ZO(e, t) {
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
ZO.displayName = "PauseSolidIcon";
var QO = a(ZO), $O = { button: "_button_yfjla_8" }, ek = i(null);
ek.displayName = "I18nContext";
function q() {
	let e = l(ek);
	if (!e) throw Error("useI18n must be used within an I18nContext.Provider");
	return e;
}
//#endregion
//#region src/audio/PlayPauseButton/PlayPauseButton.tsx
function tk({ disabled: e = !1, playing: n = !1, togglePlay: r, ...i }) {
	let { translate: a } = q(), o = a(n ? "action|pause" : "action|play");
	return /* @__PURE__ */ t.createElement(L_, {
		size: "32px",
		"aria-label": o,
		tooltip: o,
		onClick: r,
		className: $O.button,
		disabled: e,
		...i
	}, n ? /* @__PURE__ */ t.createElement(QO, null) : /* @__PURE__ */ t.createElement(XO, null));
}
//#endregion
//#region node_modules/lodash/_freeGlobal.js
var nk = typeof global == "object" && global && global.Object === Object && global, rk = typeof self == "object" && self && self.Object === Object && self, ik = nk || rk || Function("return this")(), ak = ik.Symbol, ok = Object.prototype, sk = ok.hasOwnProperty, ck = ok.toString, lk = ak ? ak.toStringTag : void 0;
function uk(e) {
	var t = sk.call(e, lk), n = e[lk];
	try {
		e[lk] = void 0;
		var r = !0;
	} catch {}
	var i = ck.call(e);
	return r && (t ? e[lk] = n : delete e[lk]), i;
}
//#endregion
//#region node_modules/lodash/_objectToString.js
var dk = Object.prototype.toString;
function fk(e) {
	return dk.call(e);
}
//#endregion
//#region node_modules/lodash/_baseGetTag.js
var pk = "[object Null]", mk = "[object Undefined]", hk = ak ? ak.toStringTag : void 0;
function gk(e) {
	return e == null ? e === void 0 ? mk : pk : hk && hk in Object(e) ? uk(e) : fk(e);
}
//#endregion
//#region node_modules/lodash/isObjectLike.js
function _k(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region node_modules/lodash/isSymbol.js
var vk = "[object Symbol]";
function yk(e) {
	return typeof e == "symbol" || _k(e) && gk(e) == vk;
}
//#endregion
//#region node_modules/lodash/_arrayMap.js
function bk(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
	return i;
}
//#endregion
//#region node_modules/lodash/isArray.js
var xk = Array.isArray, Sk = Infinity, Ck = ak ? ak.prototype : void 0, wk = Ck ? Ck.toString : void 0;
function Tk(e) {
	if (typeof e == "string") return e;
	if (xk(e)) return bk(e, Tk) + "";
	if (yk(e)) return wk ? wk.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -Sk ? "-0" : t;
}
//#endregion
//#region node_modules/lodash/_trimmedEndIndex.js
var Ek = /\s/;
function Dk(e) {
	for (var t = e.length; t-- && Ek.test(e.charAt(t)););
	return t;
}
//#endregion
//#region node_modules/lodash/_baseTrim.js
var Ok = /^\s+/;
function kk(e) {
	return e && e.slice(0, Dk(e) + 1).replace(Ok, "");
}
//#endregion
//#region node_modules/lodash/isObject.js
function Ak(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
//#endregion
//#region node_modules/lodash/toNumber.js
var jk = NaN, Mk = /^[-+]0x[0-9a-f]+$/i, Nk = /^0b[01]+$/i, Pk = /^0o[0-7]+$/i, Fk = parseInt;
function Ik(e) {
	if (typeof e == "number") return e;
	if (yk(e)) return jk;
	if (Ak(e)) {
		var t = typeof e.valueOf == "function" ? e.valueOf() : e;
		e = Ak(t) ? t + "" : t;
	}
	if (typeof e != "string") return e === 0 ? e : +e;
	e = kk(e);
	var n = Nk.test(e);
	return n || Pk.test(e) ? Fk(e.slice(2), n ? 2 : 8) : Mk.test(e) ? jk : +e;
}
//#endregion
//#region node_modules/lodash/identity.js
function Lk(e) {
	return e;
}
//#endregion
//#region node_modules/lodash/isFunction.js
var Rk = "[object AsyncFunction]", zk = "[object Function]", Bk = "[object GeneratorFunction]", Vk = "[object Proxy]";
function Hk(e) {
	if (!Ak(e)) return !1;
	var t = gk(e);
	return t == zk || t == Bk || t == Rk || t == Vk;
}
//#endregion
//#region node_modules/lodash/_coreJsData.js
var Uk = ik["__core-js_shared__"], Wk = function() {
	var e = /[^.]+$/.exec(Uk && Uk.keys && Uk.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function Gk(e) {
	return !!Wk && Wk in e;
}
//#endregion
//#region node_modules/lodash/_toSource.js
var Kk = Function.prototype.toString;
function qk(e) {
	if (e != null) {
		try {
			return Kk.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
//#endregion
//#region node_modules/lodash/_baseIsNative.js
var Jk = /[\\^$.*+?()[\]{}|]/g, Yk = /^\[object .+?Constructor\]$/, Xk = Function.prototype, Zk = Object.prototype, Qk = Xk.toString, $k = Zk.hasOwnProperty, eA = RegExp("^" + Qk.call($k).replace(Jk, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function tA(e) {
	return !Ak(e) || Gk(e) ? !1 : (Hk(e) ? eA : Yk).test(qk(e));
}
//#endregion
//#region node_modules/lodash/_getValue.js
function nA(e, t) {
	return e?.[t];
}
//#endregion
//#region node_modules/lodash/_getNative.js
function rA(e, t) {
	var n = nA(e, t);
	return tA(n) ? n : void 0;
}
//#endregion
//#region node_modules/lodash/_WeakMap.js
var iA = rA(ik, "WeakMap"), aA = Object.create, oA = function() {
	function e() {}
	return function(t) {
		if (!Ak(t)) return {};
		if (aA) return aA(t);
		e.prototype = t;
		var n = new e();
		return e.prototype = void 0, n;
	};
}();
//#endregion
//#region node_modules/lodash/_apply.js
function sA(e, t, n) {
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
function cA(e, t) {
	var n = -1, r = e.length;
	for (t ||= Array(r); ++n < r;) t[n] = e[n];
	return t;
}
//#endregion
//#region node_modules/lodash/_shortOut.js
var lA = 800, uA = 16, dA = Date.now;
function fA(e) {
	var t = 0, n = 0;
	return function() {
		var r = dA(), i = uA - (r - n);
		if (n = r, i > 0) {
			if (++t >= lA) return arguments[0];
		} else t = 0;
		return e.apply(void 0, arguments);
	};
}
//#endregion
//#region node_modules/lodash/constant.js
function pA(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/lodash/_defineProperty.js
var mA = function() {
	try {
		var e = rA(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}(), hA = fA(mA ? function(e, t) {
	return mA(e, "toString", {
		configurable: !0,
		enumerable: !1,
		value: pA(t),
		writable: !0
	});
} : Lk);
//#endregion
//#region node_modules/lodash/_arrayEach.js
function gA(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
	return e;
}
//#endregion
//#region node_modules/lodash/_isIndex.js
var _A = 9007199254740991, vA = /^(?:0|[1-9]\d*)$/;
function yA(e, t) {
	var n = typeof e;
	return t ??= _A, !!t && (n == "number" || n != "symbol" && vA.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
//#endregion
//#region node_modules/lodash/_baseAssignValue.js
function bA(e, t, n) {
	t == "__proto__" && mA ? mA(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
//#endregion
//#region node_modules/lodash/eq.js
function xA(e, t) {
	return e === t || e !== e && t !== t;
}
//#endregion
//#region node_modules/lodash/_assignValue.js
var SA = Object.prototype.hasOwnProperty;
function CA(e, t, n) {
	var r = e[t];
	(!(SA.call(e, t) && xA(r, n)) || n === void 0 && !(t in e)) && bA(e, t, n);
}
//#endregion
//#region node_modules/lodash/_copyObject.js
function wA(e, t, n, r) {
	var i = !n;
	n ||= {};
	for (var a = -1, o = t.length; ++a < o;) {
		var s = t[a], c = r ? r(n[s], e[s], s, n, e) : void 0;
		c === void 0 && (c = e[s]), i ? bA(n, s, c) : CA(n, s, c);
	}
	return n;
}
//#endregion
//#region node_modules/lodash/_overRest.js
var TA = Math.max;
function EA(e, t, n) {
	return t = TA(t === void 0 ? e.length - 1 : t, 0), function() {
		for (var r = arguments, i = -1, a = TA(r.length - t, 0), o = Array(a); ++i < a;) o[i] = r[t + i];
		i = -1;
		for (var s = Array(t + 1); ++i < t;) s[i] = r[i];
		return s[t] = n(o), sA(e, this, s);
	};
}
//#endregion
//#region node_modules/lodash/isLength.js
var DA = 9007199254740991;
function OA(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= DA;
}
//#endregion
//#region node_modules/lodash/isArrayLike.js
function kA(e) {
	return e != null && OA(e.length) && !Hk(e);
}
//#endregion
//#region node_modules/lodash/_isPrototype.js
var AA = Object.prototype;
function jA(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || AA);
}
//#endregion
//#region node_modules/lodash/_baseTimes.js
function MA(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
//#endregion
//#region node_modules/lodash/_baseIsArguments.js
var NA = "[object Arguments]";
function PA(e) {
	return _k(e) && gk(e) == NA;
}
//#endregion
//#region node_modules/lodash/isArguments.js
var FA = Object.prototype, IA = FA.hasOwnProperty, LA = FA.propertyIsEnumerable, RA = PA(function() {
	return arguments;
}()) ? PA : function(e) {
	return _k(e) && IA.call(e, "callee") && !LA.call(e, "callee");
};
//#endregion
//#region node_modules/lodash/stubFalse.js
function zA() {
	return !1;
}
//#endregion
//#region node_modules/lodash/isBuffer.js
var BA = typeof exports == "object" && exports && !exports.nodeType && exports, VA = BA && typeof module == "object" && module && !module.nodeType && module, HA = VA && VA.exports === BA ? ik.Buffer : void 0, UA = (HA ? HA.isBuffer : void 0) || zA, WA = "[object Arguments]", GA = "[object Array]", KA = "[object Boolean]", qA = "[object Date]", JA = "[object Error]", YA = "[object Function]", XA = "[object Map]", ZA = "[object Number]", QA = "[object Object]", $A = "[object RegExp]", ej = "[object Set]", tj = "[object String]", nj = "[object WeakMap]", rj = "[object ArrayBuffer]", ij = "[object DataView]", aj = "[object Float32Array]", oj = "[object Float64Array]", sj = "[object Int8Array]", cj = "[object Int16Array]", lj = "[object Int32Array]", uj = "[object Uint8Array]", dj = "[object Uint8ClampedArray]", fj = "[object Uint16Array]", pj = "[object Uint32Array]", mj = {};
mj[aj] = mj[oj] = mj[sj] = mj[cj] = mj[lj] = mj[uj] = mj[dj] = mj[fj] = mj[pj] = !0, mj[WA] = mj[GA] = mj[rj] = mj[KA] = mj[ij] = mj[qA] = mj[JA] = mj[YA] = mj[XA] = mj[ZA] = mj[QA] = mj[$A] = mj[ej] = mj[tj] = mj[nj] = !1;
function hj(e) {
	return _k(e) && OA(e.length) && !!mj[gk(e)];
}
//#endregion
//#region node_modules/lodash/_baseUnary.js
function gj(e) {
	return function(t) {
		return e(t);
	};
}
//#endregion
//#region node_modules/lodash/_nodeUtil.js
var _j = typeof exports == "object" && exports && !exports.nodeType && exports, vj = _j && typeof module == "object" && module && !module.nodeType && module, yj = vj && vj.exports === _j && nk.process, bj = function() {
	try {
		return vj && vj.require && vj.require("util").types || yj && yj.binding && yj.binding("util");
	} catch {}
}(), xj = bj && bj.isTypedArray, Sj = xj ? gj(xj) : hj, Cj = Object.prototype.hasOwnProperty;
function wj(e, t) {
	var n = xk(e), r = !n && RA(e), i = !n && !r && UA(e), a = !n && !r && !i && Sj(e), o = n || r || i || a, s = o ? MA(e.length, String) : [], c = s.length;
	for (var l in e) (t || Cj.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || yA(l, c))) && s.push(l);
	return s;
}
//#endregion
//#region node_modules/lodash/_overArg.js
function Tj(e, t) {
	return function(n) {
		return e(t(n));
	};
}
//#endregion
//#region node_modules/lodash/_nativeKeys.js
var Ej = Tj(Object.keys, Object), Dj = Object.prototype.hasOwnProperty;
function Oj(e) {
	if (!jA(e)) return Ej(e);
	var t = [];
	for (var n in Object(e)) Dj.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
//#endregion
//#region node_modules/lodash/keys.js
function kj(e) {
	return kA(e) ? wj(e) : Oj(e);
}
//#endregion
//#region node_modules/lodash/_nativeKeysIn.js
function Aj(e) {
	var t = [];
	if (e != null) for (var n in Object(e)) t.push(n);
	return t;
}
//#endregion
//#region node_modules/lodash/_baseKeysIn.js
var jj = Object.prototype.hasOwnProperty;
function Mj(e) {
	if (!Ak(e)) return Aj(e);
	var t = jA(e), n = [];
	for (var r in e) r == "constructor" && (t || !jj.call(e, r)) || n.push(r);
	return n;
}
//#endregion
//#region node_modules/lodash/keysIn.js
function Nj(e) {
	return kA(e) ? wj(e, !0) : Mj(e);
}
//#endregion
//#region node_modules/lodash/_isKey.js
var Pj = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Fj = /^\w*$/;
function Ij(e, t) {
	if (xk(e)) return !1;
	var n = typeof e;
	return n == "number" || n == "symbol" || n == "boolean" || e == null || yk(e) ? !0 : Fj.test(e) || !Pj.test(e) || t != null && e in Object(t);
}
//#endregion
//#region node_modules/lodash/_nativeCreate.js
var Lj = rA(Object, "create");
//#endregion
//#region node_modules/lodash/_hashClear.js
function Rj() {
	this.__data__ = Lj ? Lj(null) : {}, this.size = 0;
}
//#endregion
//#region node_modules/lodash/_hashDelete.js
function zj(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= t ? 1 : 0, t;
}
//#endregion
//#region node_modules/lodash/_hashGet.js
var Bj = "__lodash_hash_undefined__", Vj = Object.prototype.hasOwnProperty;
function Hj(e) {
	var t = this.__data__;
	if (Lj) {
		var n = t[e];
		return n === Bj ? void 0 : n;
	}
	return Vj.call(t, e) ? t[e] : void 0;
}
//#endregion
//#region node_modules/lodash/_hashHas.js
var Uj = Object.prototype.hasOwnProperty;
function Wj(e) {
	var t = this.__data__;
	return Lj ? t[e] !== void 0 : Uj.call(t, e);
}
//#endregion
//#region node_modules/lodash/_hashSet.js
var Gj = "__lodash_hash_undefined__";
function Kj(e, t) {
	var n = this.__data__;
	return this.size += this.has(e) ? 0 : 1, n[e] = Lj && t === void 0 ? Gj : t, this;
}
//#endregion
//#region node_modules/lodash/_Hash.js
function qj(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
qj.prototype.clear = Rj, qj.prototype.delete = zj, qj.prototype.get = Hj, qj.prototype.has = Wj, qj.prototype.set = Kj;
//#endregion
//#region node_modules/lodash/_listCacheClear.js
function Jj() {
	this.__data__ = [], this.size = 0;
}
//#endregion
//#region node_modules/lodash/_assocIndexOf.js
function Yj(e, t) {
	for (var n = e.length; n--;) if (xA(e[n][0], t)) return n;
	return -1;
}
//#endregion
//#region node_modules/lodash/_listCacheDelete.js
var Xj = Array.prototype.splice;
function Zj(e) {
	var t = this.__data__, n = Yj(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : Xj.call(t, n, 1), --this.size, !0);
}
//#endregion
//#region node_modules/lodash/_listCacheGet.js
function Qj(e) {
	var t = this.__data__, n = Yj(t, e);
	return n < 0 ? void 0 : t[n][1];
}
//#endregion
//#region node_modules/lodash/_listCacheHas.js
function $j(e) {
	return Yj(this.__data__, e) > -1;
}
//#endregion
//#region node_modules/lodash/_listCacheSet.js
function eM(e, t) {
	var n = this.__data__, r = Yj(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
//#endregion
//#region node_modules/lodash/_ListCache.js
function tM(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
tM.prototype.clear = Jj, tM.prototype.delete = Zj, tM.prototype.get = Qj, tM.prototype.has = $j, tM.prototype.set = eM;
//#endregion
//#region node_modules/lodash/_Map.js
var nM = rA(ik, "Map");
//#endregion
//#region node_modules/lodash/_mapCacheClear.js
function rM() {
	this.size = 0, this.__data__ = {
		hash: new qj(),
		map: new (nM || tM)(),
		string: new qj()
	};
}
//#endregion
//#region node_modules/lodash/_isKeyable.js
function iM(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
//#endregion
//#region node_modules/lodash/_getMapData.js
function aM(e, t) {
	var n = e.__data__;
	return iM(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
//#endregion
//#region node_modules/lodash/_mapCacheDelete.js
function oM(e) {
	var t = aM(this, e).delete(e);
	return this.size -= t ? 1 : 0, t;
}
//#endregion
//#region node_modules/lodash/_mapCacheGet.js
function sM(e) {
	return aM(this, e).get(e);
}
//#endregion
//#region node_modules/lodash/_mapCacheHas.js
function cM(e) {
	return aM(this, e).has(e);
}
//#endregion
//#region node_modules/lodash/_mapCacheSet.js
function lM(e, t) {
	var n = aM(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
//#endregion
//#region node_modules/lodash/_MapCache.js
function uM(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
uM.prototype.clear = rM, uM.prototype.delete = oM, uM.prototype.get = sM, uM.prototype.has = cM, uM.prototype.set = lM;
//#endregion
//#region node_modules/lodash/memoize.js
var dM = "Expected a function";
function fM(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(dM);
	var n = function() {
		var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	};
	return n.cache = new (fM.Cache || uM)(), n;
}
fM.Cache = uM;
//#endregion
//#region node_modules/lodash/_memoizeCapped.js
var pM = 500;
function mM(e) {
	var t = fM(e, function(e) {
		return n.size === pM && n.clear(), e;
	}), n = t.cache;
	return t;
}
//#endregion
//#region node_modules/lodash/_stringToPath.js
var hM = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, gM = /\\(\\)?/g, _M = mM(function(e) {
	var t = [];
	return e.charCodeAt(0) === 46 && t.push(""), e.replace(hM, function(e, n, r, i) {
		t.push(r ? i.replace(gM, "$1") : n || e);
	}), t;
});
//#endregion
//#region node_modules/lodash/toString.js
function vM(e) {
	return e == null ? "" : Tk(e);
}
//#endregion
//#region node_modules/lodash/_castPath.js
function yM(e, t) {
	return xk(e) ? e : Ij(e, t) ? [e] : _M(vM(e));
}
//#endregion
//#region node_modules/lodash/_toKey.js
var bM = Infinity;
function xM(e) {
	if (typeof e == "string" || yk(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -bM ? "-0" : t;
}
//#endregion
//#region node_modules/lodash/_baseGet.js
function SM(e, t) {
	t = yM(t, e);
	for (var n = 0, r = t.length; e != null && n < r;) e = e[xM(t[n++])];
	return n && n == r ? e : void 0;
}
//#endregion
//#region node_modules/lodash/_arrayPush.js
function CM(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
//#endregion
//#region node_modules/lodash/_isFlattenable.js
var wM = ak ? ak.isConcatSpreadable : void 0;
function TM(e) {
	return xk(e) || RA(e) || !!(wM && e && e[wM]);
}
//#endregion
//#region node_modules/lodash/_baseFlatten.js
function EM(e, t, n, r, i) {
	var a = -1, o = e.length;
	for (n ||= TM, i ||= []; ++a < o;) {
		var s = e[a];
		t > 0 && n(s) ? t > 1 ? EM(s, t - 1, n, r, i) : CM(i, s) : r || (i[i.length] = s);
	}
	return i;
}
//#endregion
//#region node_modules/lodash/flatten.js
function DM(e) {
	return e != null && e.length ? EM(e, 1) : [];
}
//#endregion
//#region node_modules/lodash/_flatRest.js
function OM(e) {
	return hA(EA(e, void 0, DM), e + "");
}
//#endregion
//#region node_modules/lodash/_getPrototype.js
var kM = Tj(Object.getPrototypeOf, Object), AM = "[object Object]", jM = Function.prototype, MM = Object.prototype, NM = jM.toString, PM = MM.hasOwnProperty, FM = NM.call(Object);
function IM(e) {
	if (!_k(e) || gk(e) != AM) return !1;
	var t = kM(e);
	if (t === null) return !0;
	var n = PM.call(t, "constructor") && t.constructor;
	return typeof n == "function" && n instanceof n && NM.call(n) == FM;
}
//#endregion
//#region node_modules/lodash/_baseSlice.js
function LM(e, t, n) {
	var r = -1, i = e.length;
	t < 0 && (t = -t > i ? 0 : i + t), n = n > i ? i : n, n < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
	for (var a = Array(i); ++r < i;) a[r] = e[r + t];
	return a;
}
//#endregion
//#region node_modules/lodash/_castSlice.js
function RM(e, t, n) {
	var r = e.length;
	return n = n === void 0 ? r : n, !t && n >= r ? e : LM(e, t, n);
}
//#endregion
//#region node_modules/lodash/_hasUnicode.js
var zM = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
function BM(e) {
	return zM.test(e);
}
//#endregion
//#region node_modules/lodash/_asciiToArray.js
function VM(e) {
	return e.split("");
}
//#endregion
//#region node_modules/lodash/_unicodeToArray.js
var HM = "\\ud800-\\udfff", UM = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", WM = "\\ufe0e\\ufe0f", GM = "[" + HM + "]", KM = "[" + UM + "]", qM = "\\ud83c[\\udffb-\\udfff]", JM = "(?:" + KM + "|" + qM + ")", YM = "[^" + HM + "]", XM = "(?:\\ud83c[\\udde6-\\uddff]){2}", ZM = "[\\ud800-\\udbff][\\udc00-\\udfff]", QM = "\\u200d", $M = JM + "?", eN = "[" + WM + "]?", tN = "(?:" + QM + "(?:" + [
	YM,
	XM,
	ZM
].join("|") + ")" + eN + $M + ")*", nN = eN + $M + tN, rN = "(?:" + [
	YM + KM + "?",
	KM,
	XM,
	ZM,
	GM
].join("|") + ")", iN = RegExp(qM + "(?=" + qM + ")|" + rN + nN, "g");
function aN(e) {
	return e.match(iN) || [];
}
//#endregion
//#region node_modules/lodash/_stringToArray.js
function oN(e) {
	return BM(e) ? aN(e) : VM(e);
}
//#endregion
//#region node_modules/lodash/_createCaseFirst.js
function sN(e) {
	return function(t) {
		t = vM(t);
		var n = BM(t) ? oN(t) : void 0, r = n ? n[0] : t.charAt(0), i = n ? RM(n, 1).join("") : t.slice(1);
		return r[e]() + i;
	};
}
//#endregion
//#region node_modules/lodash/upperFirst.js
var cN = sN("toUpperCase");
//#endregion
//#region node_modules/lodash/capitalize.js
function lN(e) {
	return cN(vM(e).toLowerCase());
}
//#endregion
//#region node_modules/lodash/_stackClear.js
function uN() {
	this.__data__ = new tM(), this.size = 0;
}
//#endregion
//#region node_modules/lodash/_stackDelete.js
function dN(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
//#endregion
//#region node_modules/lodash/_stackGet.js
function fN(e) {
	return this.__data__.get(e);
}
//#endregion
//#region node_modules/lodash/_stackHas.js
function pN(e) {
	return this.__data__.has(e);
}
//#endregion
//#region node_modules/lodash/_stackSet.js
var mN = 200;
function hN(e, t) {
	var n = this.__data__;
	if (n instanceof tM) {
		var r = n.__data__;
		if (!nM || r.length < mN - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new uM(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
//#endregion
//#region node_modules/lodash/_Stack.js
function gN(e) {
	this.size = (this.__data__ = new tM(e)).size;
}
gN.prototype.clear = uN, gN.prototype.delete = dN, gN.prototype.get = fN, gN.prototype.has = pN, gN.prototype.set = hN;
//#endregion
//#region node_modules/lodash/_baseAssign.js
function _N(e, t) {
	return e && wA(t, kj(t), e);
}
//#endregion
//#region node_modules/lodash/_baseAssignIn.js
function vN(e, t) {
	return e && wA(t, Nj(t), e);
}
//#endregion
//#region node_modules/lodash/_cloneBuffer.js
var yN = typeof exports == "object" && exports && !exports.nodeType && exports, bN = yN && typeof module == "object" && module && !module.nodeType && module, xN = bN && bN.exports === yN ? ik.Buffer : void 0, SN = xN ? xN.allocUnsafe : void 0;
function CN(e, t) {
	if (t) return e.slice();
	var n = e.length, r = SN ? SN(n) : new e.constructor(n);
	return e.copy(r), r;
}
//#endregion
//#region node_modules/lodash/_arrayFilter.js
function wN(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
//#endregion
//#region node_modules/lodash/stubArray.js
function TN() {
	return [];
}
//#endregion
//#region node_modules/lodash/_getSymbols.js
var EN = Object.prototype.propertyIsEnumerable, DN = Object.getOwnPropertySymbols, ON = DN ? function(e) {
	return e == null ? [] : (e = Object(e), wN(DN(e), function(t) {
		return EN.call(e, t);
	}));
} : TN;
//#endregion
//#region node_modules/lodash/_copySymbols.js
function kN(e, t) {
	return wA(e, ON(e), t);
}
//#endregion
//#region node_modules/lodash/_getSymbolsIn.js
var AN = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) CM(t, ON(e)), e = kM(e);
	return t;
} : TN;
//#endregion
//#region node_modules/lodash/_copySymbolsIn.js
function jN(e, t) {
	return wA(e, AN(e), t);
}
//#endregion
//#region node_modules/lodash/_baseGetAllKeys.js
function MN(e, t, n) {
	var r = t(e);
	return xk(e) ? r : CM(r, n(e));
}
//#endregion
//#region node_modules/lodash/_getAllKeys.js
function NN(e) {
	return MN(e, kj, ON);
}
//#endregion
//#region node_modules/lodash/_getAllKeysIn.js
function PN(e) {
	return MN(e, Nj, AN);
}
//#endregion
//#region node_modules/lodash/_DataView.js
var FN = rA(ik, "DataView"), IN = rA(ik, "Promise"), LN = rA(ik, "Set"), RN = "[object Map]", zN = "[object Object]", BN = "[object Promise]", VN = "[object Set]", HN = "[object WeakMap]", UN = "[object DataView]", WN = qk(FN), GN = qk(nM), KN = qk(IN), qN = qk(LN), JN = qk(iA), YN = gk;
(FN && YN(new FN(/* @__PURE__ */ new ArrayBuffer(1))) != UN || nM && YN(new nM()) != RN || IN && YN(IN.resolve()) != BN || LN && YN(new LN()) != VN || iA && YN(new iA()) != HN) && (YN = function(e) {
	var t = gk(e), n = t == zN ? e.constructor : void 0, r = n ? qk(n) : "";
	if (r) switch (r) {
		case WN: return UN;
		case GN: return RN;
		case KN: return BN;
		case qN: return VN;
		case JN: return HN;
	}
	return t;
});
var XN = YN, ZN = Object.prototype.hasOwnProperty;
function QN(e) {
	var t = e.length, n = new e.constructor(t);
	return t && typeof e[0] == "string" && ZN.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
//#endregion
//#region node_modules/lodash/_Uint8Array.js
var $N = ik.Uint8Array;
//#endregion
//#region node_modules/lodash/_cloneArrayBuffer.js
function eP(e) {
	var t = new e.constructor(e.byteLength);
	return new $N(t).set(new $N(e)), t;
}
//#endregion
//#region node_modules/lodash/_cloneDataView.js
function tP(e, t) {
	var n = t ? eP(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.byteLength);
}
//#endregion
//#region node_modules/lodash/_cloneRegExp.js
var nP = /\w*$/;
function rP(e) {
	var t = new e.constructor(e.source, nP.exec(e));
	return t.lastIndex = e.lastIndex, t;
}
//#endregion
//#region node_modules/lodash/_cloneSymbol.js
var iP = ak ? ak.prototype : void 0, aP = iP ? iP.valueOf : void 0;
function oP(e) {
	return aP ? Object(aP.call(e)) : {};
}
//#endregion
//#region node_modules/lodash/_cloneTypedArray.js
function sP(e, t) {
	var n = t ? eP(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.length);
}
//#endregion
//#region node_modules/lodash/_initCloneByTag.js
var cP = "[object Boolean]", lP = "[object Date]", uP = "[object Map]", dP = "[object Number]", fP = "[object RegExp]", pP = "[object Set]", mP = "[object String]", hP = "[object Symbol]", gP = "[object ArrayBuffer]", _P = "[object DataView]", vP = "[object Float32Array]", yP = "[object Float64Array]", bP = "[object Int8Array]", xP = "[object Int16Array]", SP = "[object Int32Array]", CP = "[object Uint8Array]", wP = "[object Uint8ClampedArray]", TP = "[object Uint16Array]", EP = "[object Uint32Array]";
function DP(e, t, n) {
	var r = e.constructor;
	switch (t) {
		case gP: return eP(e);
		case cP:
		case lP: return new r(+e);
		case _P: return tP(e, n);
		case vP:
		case yP:
		case bP:
		case xP:
		case SP:
		case CP:
		case wP:
		case TP:
		case EP: return sP(e, n);
		case uP: return new r();
		case dP:
		case mP: return new r(e);
		case fP: return rP(e);
		case pP: return new r();
		case hP: return oP(e);
	}
}
//#endregion
//#region node_modules/lodash/_initCloneObject.js
function OP(e) {
	return typeof e.constructor == "function" && !jA(e) ? oA(kM(e)) : {};
}
//#endregion
//#region node_modules/lodash/_baseIsMap.js
var kP = "[object Map]";
function AP(e) {
	return _k(e) && XN(e) == kP;
}
//#endregion
//#region node_modules/lodash/isMap.js
var jP = bj && bj.isMap, MP = jP ? gj(jP) : AP, NP = "[object Set]";
function PP(e) {
	return _k(e) && XN(e) == NP;
}
//#endregion
//#region node_modules/lodash/isSet.js
var FP = bj && bj.isSet, IP = FP ? gj(FP) : PP, LP = 1, RP = 2, zP = 4, BP = "[object Arguments]", VP = "[object Array]", HP = "[object Boolean]", UP = "[object Date]", WP = "[object Error]", GP = "[object Function]", KP = "[object GeneratorFunction]", qP = "[object Map]", JP = "[object Number]", YP = "[object Object]", XP = "[object RegExp]", ZP = "[object Set]", QP = "[object String]", $P = "[object Symbol]", eF = "[object WeakMap]", tF = "[object ArrayBuffer]", nF = "[object DataView]", rF = "[object Float32Array]", iF = "[object Float64Array]", aF = "[object Int8Array]", oF = "[object Int16Array]", sF = "[object Int32Array]", cF = "[object Uint8Array]", lF = "[object Uint8ClampedArray]", uF = "[object Uint16Array]", dF = "[object Uint32Array]", fF = {};
fF[BP] = fF[VP] = fF[tF] = fF[nF] = fF[HP] = fF[UP] = fF[rF] = fF[iF] = fF[aF] = fF[oF] = fF[sF] = fF[qP] = fF[JP] = fF[YP] = fF[XP] = fF[ZP] = fF[QP] = fF[$P] = fF[cF] = fF[lF] = fF[uF] = fF[dF] = !0, fF[WP] = fF[GP] = fF[eF] = !1;
function pF(e, t, n, r, i, a) {
	var o, s = t & LP, c = t & RP, l = t & zP;
	if (n && (o = i ? n(e, r, i, a) : n(e)), o !== void 0) return o;
	if (!Ak(e)) return e;
	var u = xk(e);
	if (u) {
		if (o = QN(e), !s) return cA(e, o);
	} else {
		var d = XN(e), f = d == GP || d == KP;
		if (UA(e)) return CN(e, s);
		if (d == YP || d == BP || f && !i) {
			if (o = c || f ? {} : OP(e), !s) return c ? jN(e, vN(o, e)) : kN(e, _N(o, e));
		} else {
			if (!fF[d]) return i ? e : {};
			o = DP(e, d, s);
		}
	}
	a ||= new gN();
	var p = a.get(e);
	if (p) return p;
	a.set(e, o), IP(e) ? e.forEach(function(r) {
		o.add(pF(r, t, n, r, e, a));
	}) : MP(e) && e.forEach(function(r, i) {
		o.set(i, pF(r, t, n, i, e, a));
	});
	var m = u ? void 0 : (l ? c ? PN : NN : c ? Nj : kj)(e);
	return gA(m || e, function(r, i) {
		m && (i = r, r = e[i]), CA(o, i, pF(r, t, n, i, e, a));
	}), o;
}
//#endregion
//#region node_modules/lodash/_setCacheAdd.js
var mF = "__lodash_hash_undefined__";
function hF(e) {
	return this.__data__.set(e, mF), this;
}
//#endregion
//#region node_modules/lodash/_setCacheHas.js
function gF(e) {
	return this.__data__.has(e);
}
//#endregion
//#region node_modules/lodash/_SetCache.js
function _F(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.__data__ = new uM(); ++t < n;) this.add(e[t]);
}
_F.prototype.add = _F.prototype.push = hF, _F.prototype.has = gF;
//#endregion
//#region node_modules/lodash/_arraySome.js
function vF(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
	return !1;
}
//#endregion
//#region node_modules/lodash/_cacheHas.js
function yF(e, t) {
	return e.has(t);
}
//#endregion
//#region node_modules/lodash/_equalArrays.js
var bF = 1, xF = 2;
function SF(e, t, n, r, i, a) {
	var o = n & bF, s = e.length, c = t.length;
	if (s != c && !(o && c > s)) return !1;
	var l = a.get(e), u = a.get(t);
	if (l && u) return l == t && u == e;
	var d = -1, f = !0, p = n & xF ? new _F() : void 0;
	for (a.set(e, t), a.set(t, e); ++d < s;) {
		var m = e[d], h = t[d];
		if (r) var g = o ? r(h, m, d, t, e, a) : r(m, h, d, e, t, a);
		if (g !== void 0) {
			if (g) continue;
			f = !1;
			break;
		}
		if (p) {
			if (!vF(t, function(e, t) {
				if (!yF(p, t) && (m === e || i(m, e, n, r, a))) return p.push(t);
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
function CF(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e, r) {
		n[++t] = [r, e];
	}), n;
}
//#endregion
//#region node_modules/lodash/_setToArray.js
function wF(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e) {
		n[++t] = e;
	}), n;
}
//#endregion
//#region node_modules/lodash/_equalByTag.js
var TF = 1, EF = 2, DF = "[object Boolean]", OF = "[object Date]", kF = "[object Error]", AF = "[object Map]", jF = "[object Number]", MF = "[object RegExp]", NF = "[object Set]", PF = "[object String]", FF = "[object Symbol]", IF = "[object ArrayBuffer]", LF = "[object DataView]", RF = ak ? ak.prototype : void 0, zF = RF ? RF.valueOf : void 0;
function BF(e, t, n, r, i, a, o) {
	switch (n) {
		case LF:
			if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
			e = e.buffer, t = t.buffer;
		case IF: return !(e.byteLength != t.byteLength || !a(new $N(e), new $N(t)));
		case DF:
		case OF:
		case jF: return xA(+e, +t);
		case kF: return e.name == t.name && e.message == t.message;
		case MF:
		case PF: return e == t + "";
		case AF: var s = CF;
		case NF:
			var c = r & TF;
			if (s ||= wF, e.size != t.size && !c) return !1;
			var l = o.get(e);
			if (l) return l == t;
			r |= EF, o.set(e, t);
			var u = SF(s(e), s(t), r, i, a, o);
			return o.delete(e), u;
		case FF: if (zF) return zF.call(e) == zF.call(t);
	}
	return !1;
}
//#endregion
//#region node_modules/lodash/_equalObjects.js
var VF = 1, HF = Object.prototype.hasOwnProperty;
function UF(e, t, n, r, i, a) {
	var o = n & VF, s = NN(e), c = s.length;
	if (c != NN(t).length && !o) return !1;
	for (var l = c; l--;) {
		var u = s[l];
		if (!(o ? u in t : HF.call(t, u))) return !1;
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
var WF = 1, GF = "[object Arguments]", KF = "[object Array]", qF = "[object Object]", JF = Object.prototype.hasOwnProperty;
function YF(e, t, n, r, i, a) {
	var o = xk(e), s = xk(t), c = o ? KF : XN(e), l = s ? KF : XN(t);
	c = c == GF ? qF : c, l = l == GF ? qF : l;
	var u = c == qF, d = l == qF, f = c == l;
	if (f && UA(e)) {
		if (!UA(t)) return !1;
		o = !0, u = !1;
	}
	if (f && !u) return a ||= new gN(), o || Sj(e) ? SF(e, t, n, r, i, a) : BF(e, t, c, n, r, i, a);
	if (!(n & WF)) {
		var p = u && JF.call(e, "__wrapped__"), m = d && JF.call(t, "__wrapped__");
		if (p || m) {
			var h = p ? e.value() : e, g = m ? t.value() : t;
			return a ||= new gN(), i(h, g, n, r, a);
		}
	}
	return f ? (a ||= new gN(), UF(e, t, n, r, i, a)) : !1;
}
//#endregion
//#region node_modules/lodash/_baseIsEqual.js
function XF(e, t, n, r, i) {
	return e === t ? !0 : e == null || t == null || !_k(e) && !_k(t) ? e !== e && t !== t : YF(e, t, n, r, XF, i);
}
//#endregion
//#region node_modules/lodash/now.js
var ZF = function() {
	return ik.Date.now();
}, QF = "Expected a function", $F = Math.max, eI = Math.min;
function tI(e, t, n) {
	var r, i, a, o, s, c, l = 0, u = !1, d = !1, f = !0;
	if (typeof e != "function") throw TypeError(QF);
	t = Ik(t) || 0, Ak(n) && (u = !!n.leading, d = "maxWait" in n, a = d ? $F(Ik(n.maxWait) || 0, t) : a, f = "trailing" in n ? !!n.trailing : f);
	function p(t) {
		var n = r, a = i;
		return r = i = void 0, l = t, o = e.apply(a, n), o;
	}
	function m(e) {
		return l = e, s = setTimeout(_, t), u ? p(e) : o;
	}
	function h(e) {
		var n = e - c, r = e - l, i = t - n;
		return d ? eI(i, a - r) : i;
	}
	function g(e) {
		var n = e - c, r = e - l;
		return c === void 0 || n >= t || n < 0 || d && r >= a;
	}
	function _() {
		var e = ZF();
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
		return s === void 0 ? o : v(ZF());
	}
	function x() {
		var e = ZF(), n = g(e);
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
function nI(e) {
	var t = e == null ? 0 : e.length;
	return t ? e[t - 1] : void 0;
}
//#endregion
//#region node_modules/lodash/_parent.js
function rI(e, t) {
	return t.length < 2 ? e : SM(e, LM(t, 0, -1));
}
//#endregion
//#region node_modules/lodash/isEqual.js
function iI(e, t) {
	return XF(e, t);
}
//#endregion
//#region node_modules/lodash/_baseUnset.js
var aI = Object.prototype.hasOwnProperty;
function oI(e, t) {
	t = yM(t, e);
	var n = -1, r = t.length;
	if (!r) return !0;
	for (; ++n < r;) {
		var i = xM(t[n]);
		if (i === "__proto__" && !aI.call(e, "__proto__") || (i === "constructor" || i === "prototype") && n < r - 1) return !1;
	}
	var a = rI(e, t);
	return a == null || delete a[xM(nI(t))];
}
//#endregion
//#region node_modules/lodash/_customOmitClone.js
function sI(e) {
	return IM(e) ? void 0 : e;
}
//#endregion
//#region node_modules/lodash/omit.js
var cI = 1, lI = 2, uI = 4, dI = OM(function(e, t) {
	var n = {};
	if (e == null) return n;
	var r = !1;
	t = bk(t, function(t) {
		return t = yM(t, e), r ||= t.length > 1, t;
	}), wA(e, PN(e), n), r && (n = pF(n, cI | lI | uI, sI));
	for (var i = t.length; i--;) oI(n, t[i]);
	return n;
}), fI = "Expected a function";
function pI(e, t, n) {
	var r = !0, i = !0;
	if (typeof e != "function") throw TypeError(fI);
	return Ak(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), tI(e, t, {
		leading: r,
		maxWait: t,
		trailing: i
	});
}
var mI = { seekBar: "_seekBar_16dv7_14" };
//#endregion
//#region src/audio/SeekBar/SeekBar.tsx
function hI({ value: e = 0, className: n, ...r }) {
	let { translate: i } = q(), [a, o] = h(e), s = p(() => pI(o, 10), []);
	return u(() => {
		s(e);
	}, [e, s]), /* @__PURE__ */ t.createElement("input", {
		type: "range",
		className: (0, V.default)(mI.seekBar, n),
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
var gI = {
	avatarWithDetails: "_avatarWithDetails_7ga8t_8",
	title: "_title_7ga8t_17",
	details: "_details_7ga8t_28"
}, _I = { flex: "_flex_4dswl_9" };
//#endregion
//#region src/core/utils/Flex/Flex.tsx
function J({ as: e = "div", display: n = "flex", direction: r = "row", align: i = "start", justify: a = "start", gap: o = "0", wrap: s = "nowrap", className: c, children: l, ...u }) {
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
		className: (0, V.default)(_I.flex, c),
		style: d
	}, l);
}
//#endregion
//#region src/core/AvatarWithDetails/AvatarWithDetails.tsx
function vI({ as: e, className: n, details: r, avatar: i, title: a, ...o }) {
	let s = e || "div";
	return /* @__PURE__ */ t.createElement(s, {
		className: (0, V.default)(gI.avatarWithDetails, n),
		...o
	}, i, /* @__PURE__ */ t.createElement(J, { direction: "column" }, /* @__PURE__ */ t.createElement("span", { className: gI.title }, a), /* @__PURE__ */ t.createElement("span", { className: gI.details }, r)));
}
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/error.js
function yI(e, t) {
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
yI.displayName = "ErrorIcon";
var bI = a(yI), xI = {
	banner: "_banner_193k4_8",
	content: "_content_193k4_38",
	icon: "_icon_193k4_50",
	actions: "_actions_193k4_60"
};
//#endregion
//#region ../../node_modules/matrix-web-i18n/lib/utils.js
function SI(e) {
	return e.toLowerCase().replace("_", "-");
}
function CI(e) {
	let t = [], n = SI(e), r = n.split("-");
	return r.length === 2 && r[0] === r[1] ? t.push(r[0]) : (t.push(n), r.length === 2 && t.push(r[0])), t;
}
//#endregion
//#region ../../node_modules/matrix-web-i18n/lib/index.js
var wI = "|", TI = /* @__PURE__ */ P(((e, t) => {
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
})), EI = /* @__PURE__ */ P(((e, t) => {
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
})), DI = /* @__PURE__ */ P(((e, t) => {
	var n = EI();
	t.exports = function() {
		return n() && !!Symbol.toStringTag;
	};
})), OI = /* @__PURE__ */ P(((e, t) => {
	t.exports = Object;
})), kI = /* @__PURE__ */ P(((e, t) => {
	t.exports = Error;
})), AI = /* @__PURE__ */ P(((e, t) => {
	t.exports = EvalError;
})), jI = /* @__PURE__ */ P(((e, t) => {
	t.exports = RangeError;
})), MI = /* @__PURE__ */ P(((e, t) => {
	t.exports = ReferenceError;
})), NI = /* @__PURE__ */ P(((e, t) => {
	t.exports = SyntaxError;
})), PI = /* @__PURE__ */ P(((e, t) => {
	t.exports = TypeError;
})), FI = /* @__PURE__ */ P(((e, t) => {
	t.exports = URIError;
})), II = /* @__PURE__ */ P(((e, t) => {
	t.exports = Math.abs;
})), LI = /* @__PURE__ */ P(((e, t) => {
	t.exports = Math.floor;
})), RI = /* @__PURE__ */ P(((e, t) => {
	t.exports = Math.max;
})), zI = /* @__PURE__ */ P(((e, t) => {
	t.exports = Math.min;
})), BI = /* @__PURE__ */ P(((e, t) => {
	t.exports = Math.pow;
})), VI = /* @__PURE__ */ P(((e, t) => {
	t.exports = Math.round;
})), HI = /* @__PURE__ */ P(((e, t) => {
	t.exports = Number.isNaN || function(e) {
		return e !== e;
	};
})), UI = /* @__PURE__ */ P(((e, t) => {
	var n = HI();
	t.exports = function(e) {
		return n(e) || e === 0 ? e : e < 0 ? -1 : 1;
	};
})), WI = /* @__PURE__ */ P(((e, t) => {
	t.exports = Object.getOwnPropertyDescriptor;
})), GI = /* @__PURE__ */ P(((e, t) => {
	var n = WI();
	if (n) try {
		n([], "length");
	} catch {
		n = null;
	}
	t.exports = n;
})), KI = /* @__PURE__ */ P(((e, t) => {
	var n = Object.defineProperty || !1;
	if (n) try {
		n({}, "a", { value: 1 });
	} catch {
		n = !1;
	}
	t.exports = n;
})), qI = /* @__PURE__ */ P(((e, t) => {
	var n = typeof Symbol < "u" && Symbol, r = EI();
	t.exports = function() {
		return typeof n != "function" || typeof Symbol != "function" || typeof n("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : r();
	};
})), JI = /* @__PURE__ */ P(((e, t) => {
	t.exports = typeof Reflect < "u" && Reflect.getPrototypeOf || null;
})), YI = /* @__PURE__ */ P(((e, t) => {
	t.exports = OI().getPrototypeOf || null;
})), XI = /* @__PURE__ */ P(((e, t) => {
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
})), ZI = /* @__PURE__ */ P(((e, t) => {
	var n = XI();
	t.exports = Function.prototype.bind || n;
})), QI = /* @__PURE__ */ P(((e, t) => {
	t.exports = Function.prototype.call;
})), $I = /* @__PURE__ */ P(((e, t) => {
	t.exports = Function.prototype.apply;
})), eL = /* @__PURE__ */ P(((e, t) => {
	t.exports = typeof Reflect < "u" && Reflect && Reflect.apply;
})), tL = /* @__PURE__ */ P(((e, t) => {
	var n = ZI(), r = $I(), i = QI();
	t.exports = eL() || n.call(i, r);
})), nL = /* @__PURE__ */ P(((e, t) => {
	var n = ZI(), r = PI(), i = QI(), a = tL();
	t.exports = function(e) {
		if (e.length < 1 || typeof e[0] != "function") throw new r("a function is required");
		return a(n, i, e);
	};
})), rL = /* @__PURE__ */ P(((e, t) => {
	var n = nL(), r = GI(), i;
	try {
		i = [].__proto__ === Array.prototype;
	} catch (e) {
		if (!e || typeof e != "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") throw e;
	}
	var a = !!i && r && r(Object.prototype, "__proto__"), o = Object, s = o.getPrototypeOf;
	t.exports = a && typeof a.get == "function" ? n([a.get]) : typeof s == "function" ? function(e) {
		return s(e == null ? e : o(e));
	} : !1;
})), iL = /* @__PURE__ */ P(((e, t) => {
	var n = JI(), r = YI(), i = rL();
	t.exports = n ? function(e) {
		return n(e);
	} : r ? function(e) {
		if (!e || typeof e != "object" && typeof e != "function") throw TypeError("getProto: not an object");
		return r(e);
	} : i ? function(e) {
		return i(e);
	} : null;
})), aL = /* @__PURE__ */ P(((e, t) => {
	var n = Function.prototype.call, r = Object.prototype.hasOwnProperty;
	t.exports = ZI().call(n, r);
})), oL = /* @__PURE__ */ P(((e, t) => {
	var n, r = OI(), i = kI(), a = AI(), o = jI(), s = MI(), c = NI(), l = PI(), u = FI(), d = II(), f = LI(), p = RI(), m = zI(), h = BI(), g = VI(), _ = UI(), v = Function, y = function(e) {
		try {
			return v("\"use strict\"; return (" + e + ").constructor;")();
		} catch {}
	}, b = GI(), x = KI(), S = function() {
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
	}() : S, w = qI()(), T = iL(), E = YI(), D = JI(), O = $I(), k = QI(), A = {}, j = typeof Uint8Array > "u" || !T ? n : T(Uint8Array), M = {
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
		"%TypedArray%": j,
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
		M["%Error.prototype%"] = T(T(e));
	}
	var ee = function e(t) {
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
		return M[t] = n, n;
	}, N = {
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
	}, P = ZI(), te = aL(), ne = P.call(k, Array.prototype.concat), F = P.call(O, Array.prototype.splice), re = P.call(k, String.prototype.replace), ie = P.call(k, String.prototype.slice), ae = P.call(k, RegExp.prototype.exec), oe = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, se = /\\(\\)?/g, ce = function(e) {
		var t = ie(e, 0, 1), n = ie(e, -1);
		if (t === "%" && n !== "%") throw new c("invalid intrinsic syntax, expected closing `%`");
		if (n === "%" && t !== "%") throw new c("invalid intrinsic syntax, expected opening `%`");
		var r = [];
		return re(e, oe, function(e, t, n, i) {
			r[r.length] = n ? re(i, se, "$1") : t || e;
		}), r;
	}, le = function(e, t) {
		var n = e, r;
		if (te(N, n) && (r = N[n], n = "%" + r[0] + "%"), te(M, n)) {
			var i = M[n];
			if (i === A && (i = ee(n)), i === void 0 && !t) throw new l("intrinsic " + e + " exists, but is not available. Please file an issue!");
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
		if (ae(/^%?[^%]*%?$/, e) === null) throw new c("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
		var n = ce(e), r = n.length > 0 ? n[0] : "", i = le("%" + r + "%", t), a = i.name, o = i.value, s = !1, u = i.alias;
		u && (r = u[0], F(n, ne([0, 1], u)));
		for (var d = 1, f = !0; d < n.length; d += 1) {
			var p = n[d], m = ie(p, 0, 1), h = ie(p, -1);
			if ((m === "\"" || m === "'" || m === "`" || h === "\"" || h === "'" || h === "`") && m !== h) throw new c("property names with quotes must have matching quotes");
			if ((p === "constructor" || !f) && (s = !0), r += "." + p, a = "%" + r + "%", te(M, a)) o = M[a];
			else if (o != null) {
				if (!(p in o)) {
					if (!t) throw new l("base intrinsic for " + e + " exists, but the property is not available.");
					return;
				}
				if (b && d + 1 >= n.length) {
					var g = b(o, p);
					f = !!g, o = f && "get" in g && !("originalValue" in g.get) ? g.get : o[p];
				} else f = te(o, p), o = o[p];
				f && !s && (M[a] = o);
			}
		}
		return o;
	};
})), sL = /* @__PURE__ */ P(((e, t) => {
	var n = oL(), r = nL(), i = r([n("%String.prototype.indexOf%")]);
	t.exports = function(e, t) {
		var a = n(e, !!t);
		return typeof a == "function" && i(e, ".prototype.") > -1 ? r([a]) : a;
	};
})), cL = /* @__PURE__ */ P(((e, t) => {
	var n = DI()(), r = sL()("Object.prototype.toString"), i = function(e) {
		return n && e && typeof e == "object" && Symbol.toStringTag in e ? !1 : r(e) === "[object Arguments]";
	}, a = function(e) {
		return i(e) ? !0 : typeof e == "object" && !!e && "length" in e && typeof e.length == "number" && e.length >= 0 && r(e) !== "[object Array]" && "callee" in e && r(e.callee) === "[object Function]";
	}, o = function() {
		return i(arguments);
	}();
	i.isLegacyArguments = a, t.exports = o ? i : a;
})), lL = /* @__PURE__ */ P(((e, t) => {
	var n = sL(), r = DI()(), i = aL(), a = GI(), o;
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
})), uL = /* @__PURE__ */ P(((e, t) => {
	var n = sL(), r = lL(), i = n("RegExp.prototype.exec"), a = PI();
	t.exports = function(e) {
		if (!r(e)) throw new a("`regex` must be a RegExp");
		return function(t) {
			return i(e, t) !== null;
		};
	};
})), dL = /* @__PURE__ */ P(((e, t) => {
	var n = function* () {}.constructor;
	t.exports = () => n;
})), fL = /* @__PURE__ */ P(((e, t) => {
	var n = sL(), r = uL()(/^\s*(?:function)?\*/), i = DI()(), a = iL(), o = n("Object.prototype.toString"), s = n("Function.prototype.toString"), c = dL();
	t.exports = function(e) {
		if (typeof e != "function") return !1;
		if (r(s(e))) return !0;
		if (!i) return o(e) === "[object GeneratorFunction]";
		if (!a) return !1;
		var t = c();
		return t && a(e) === t.prototype;
	};
})), pL = /* @__PURE__ */ P(((e, t) => {
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
})), mL = /* @__PURE__ */ P(((e, t) => {
	var n = pL(), r = Object.prototype.toString, i = Object.prototype.hasOwnProperty, a = function(e, t, n) {
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
})), hL = /* @__PURE__ */ P(((e, t) => {
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
})), gL = /* @__PURE__ */ P(((e, t) => {
	var n = hL(), r = typeof globalThis > "u" ? global : globalThis;
	t.exports = function() {
		for (var e = [], t = 0; t < n.length; t++) typeof r[n[t]] == "function" && (e[e.length] = n[t]);
		return e;
	};
})), _L = /* @__PURE__ */ P(((e, t) => {
	var n = KI(), r = NI(), i = PI(), a = GI();
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
})), vL = /* @__PURE__ */ P(((e, t) => {
	var n = KI(), r = function() {
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
})), yL = /* @__PURE__ */ P(((e, t) => {
	var n = oL(), r = _L(), i = vL()(), a = GI(), o = PI(), s = n("%Math.floor%");
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
})), bL = /* @__PURE__ */ P(((e, t) => {
	var n = ZI(), r = $I(), i = tL();
	t.exports = function() {
		return i(n, r, arguments);
	};
})), xL = /* @__PURE__ */ P(((e, t) => {
	var n = yL(), r = KI(), i = nL(), a = bL();
	t.exports = function(e) {
		var t = i(arguments), r = e.length - (arguments.length - 1);
		return n(t, 1 + (r > 0 ? r : 0), !0);
	}, r ? r(t.exports, "apply", { value: a }) : t.exports.apply = a;
})), SL = /* @__PURE__ */ P(((e, t) => {
	var n = mL(), r = gL(), i = xL(), a = sL(), o = GI(), s = iL(), c = a("Object.prototype.toString"), l = DI()(), u = typeof globalThis > "u" ? global : globalThis, d = r(), f = a("String.prototype.slice"), p = a("Array.prototype.indexOf", !0) || function(e, t) {
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
})), CL = /* @__PURE__ */ P(((e, t) => {
	var n = SL();
	t.exports = function(e) {
		return !!n(e);
	};
})), wL = /* @__PURE__ */ P(((e) => {
	var t = cL(), n = fL(), r = SL(), i = CL();
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
		return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(e) : i(e) || re(e);
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
	function j(e) {
		return typeof Set > "u" ? !1 : A.working ? A(e) : e instanceof Set;
	}
	e.isSet = j;
	function M(e) {
		return c(e) === "[object WeakMap]";
	}
	M.working = typeof WeakMap < "u" && M(/* @__PURE__ */ new WeakMap());
	function ee(e) {
		return typeof WeakMap > "u" ? !1 : M.working ? M(e) : e instanceof WeakMap;
	}
	e.isWeakMap = ee;
	function N(e) {
		return c(e) === "[object WeakSet]";
	}
	N.working = typeof WeakSet < "u" && N(/* @__PURE__ */ new WeakSet());
	function P(e) {
		return N(e);
	}
	e.isWeakSet = P;
	function te(e) {
		return c(e) === "[object ArrayBuffer]";
	}
	te.working = typeof ArrayBuffer < "u" && te(/* @__PURE__ */ new ArrayBuffer());
	function ne(e) {
		return typeof ArrayBuffer > "u" ? !1 : te.working ? te(e) : e instanceof ArrayBuffer;
	}
	e.isArrayBuffer = ne;
	function F(e) {
		return c(e) === "[object DataView]";
	}
	F.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && F(new DataView(/* @__PURE__ */ new ArrayBuffer(1), 0, 1));
	function re(e) {
		return typeof DataView > "u" ? !1 : F.working ? F(e) : e instanceof DataView;
	}
	e.isDataView = re;
	var ie = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
	function ae(e) {
		return c(e) === "[object SharedArrayBuffer]";
	}
	function oe(e) {
		return ie === void 0 ? !1 : (ae.working === void 0 && (ae.working = ae(new ie())), ae.working ? ae(e) : e instanceof ie);
	}
	e.isSharedArrayBuffer = oe;
	function se(e) {
		return c(e) === "[object AsyncFunction]";
	}
	e.isAsyncFunction = se;
	function ce(e) {
		return c(e) === "[object Map Iterator]";
	}
	e.isMapIterator = ce;
	function le(e) {
		return c(e) === "[object Set Iterator]";
	}
	e.isSetIterator = le;
	function ue(e) {
		return c(e) === "[object Generator]";
	}
	e.isGeneratorObject = ue;
	function de(e) {
		return c(e) === "[object WebAssembly.Module]";
	}
	e.isWebAssemblyCompiledModule = de;
	function fe(e) {
		return m(e, l);
	}
	e.isNumberObject = fe;
	function I(e) {
		return m(e, u);
	}
	e.isStringObject = I;
	function pe(e) {
		return m(e, d);
	}
	e.isBooleanObject = pe;
	function me(e) {
		return o && m(e, f);
	}
	e.isBigIntObject = me;
	function he(e) {
		return s && m(e, p);
	}
	e.isSymbolObject = he;
	function ge(e) {
		return fe(e) || I(e) || pe(e) || me(e) || he(e);
	}
	e.isBoxedPrimitive = ge;
	function L(e) {
		return typeof Uint8Array < "u" && (ne(e) || oe(e));
	}
	e.isAnyArrayBuffer = L, [
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
})), TL = /* @__PURE__ */ P(((e, t) => {
	t.exports = function(e) {
		return e && typeof e == "object" && typeof e.copy == "function" && typeof e.fill == "function" && typeof e.readUInt8 == "function";
	};
})), EL = /* @__PURE__ */ P(((e, t) => {
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
})), DL = /* @__PURE__ */ P(((e) => {
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
		for (var a = [], o = 0, s = t.length; o < s; ++o) N(t, String(o)) ? a.push(m(e, t, n, r, String(o), !0)) : a.push("");
		return i.forEach(function(i) {
			i.match(/^\d+$/) || a.push(m(e, t, n, r, i, !0));
		}), a;
	}
	function m(e, t, n, r, i, a) {
		var o, s, c = Object.getOwnPropertyDescriptor(t, i) || { value: t[i] };
		if (c.get ? s = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (s = e.stylize("[Setter]", "special")), N(r, i) || (o = "[" + i + "]"), s || (e.seen.indexOf(c.value) < 0 ? (s = v(n) ? u(e, c.value, null) : u(e, c.value, n - 1), s.indexOf("\n") > -1 && (s = a ? s.split("\n").map(function(e) {
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
	e.types = wL();
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
	e.isPrimitive = k, e.isBuffer = TL();
	function A(e) {
		return Object.prototype.toString.call(e);
	}
	function j(e) {
		return e < 10 ? "0" + e.toString(10) : e.toString(10);
	}
	var M = [
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
	function ee() {
		var e = /* @__PURE__ */ new Date(), t = [
			j(e.getHours()),
			j(e.getMinutes()),
			j(e.getSeconds())
		].join(":");
		return [
			e.getDate(),
			M[e.getMonth()],
			t
		].join(" ");
	}
	e.log = function() {
		console.log("%s - %s", ee(), e.format.apply(e, arguments));
	}, e.inherits = EL(), e._extend = function(e, t) {
		if (!t || !T(t)) return e;
		for (var n = Object.keys(t), r = n.length; r--;) e[n[r]] = t[n[r]];
		return e;
	};
	function N(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t);
	}
	var P = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
	e.promisify = function(e) {
		if (typeof e != "function") throw TypeError("The \"original\" argument must be of type Function");
		if (P && e[P]) {
			var n = e[P];
			if (typeof n != "function") throw TypeError("The \"util.promisify.custom\" argument must be of type Function");
			return Object.defineProperty(n, P, {
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
		return Object.setPrototypeOf(n, Object.getPrototypeOf(e)), P && Object.defineProperty(n, P, {
			value: n,
			enumerable: !1,
			writable: !1,
			configurable: !0
		}), Object.defineProperties(n, t(e));
	}, e.promisify.custom = P;
	function te(e, t) {
		if (!e) {
			var n = /* @__PURE__ */ Error("Promise was rejected with a falsy value");
			n.reason = e, e = n;
		}
		return t(e);
	}
	function ne(e) {
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
				process.nextTick(te.bind(null, e, a));
			});
		}
		return Object.setPrototypeOf(n, Object.getPrototypeOf(e)), Object.defineProperties(n, t(e)), n;
	}
	e.callbackify = ne;
})), OL = /* @__PURE__ */ P(((e) => {
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
})), kL = /* @__PURE__ */ P(((e, t) => {
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
})), AL = /* @__PURE__ */ P(((e, t) => {
	var n = [].indexOf;
	t.exports = function(e, t) {
		if (n) return e.indexOf(t);
		for (var r = 0; r < e.length; ++r) if (e[r] === t) return r;
		return -1;
	};
})), jL = /* @__PURE__ */ P(((e, t) => {
	var n = Array.prototype, r = n.concat, i = n.slice, a = AL();
	function o(e) {
		var t = {}, o = r.apply(n, i.call(arguments, 1));
		for (var s in e) a(o, s) === -1 && (t[s] = e[s]);
		return t;
	}
	t.exports = o;
})), ML = /* @__PURE__ */ P(((e, t) => {
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
})), NL = /* @__PURE__ */ P(((e, t) => {
	t.exports = ML();
})), PL = /* @__PURE__ */ P(((e, t) => {
	var n = NL();
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
})), FL = /* @__PURE__ */ P(((e, t) => {
	t.exports = function(e, t) {
		var n;
		return t === 0 && "zero" in e && (n = "zero"), n ||= t === 1 ? "one" : "other", e[n];
	};
})), IL = /* @__PURE__ */ P(((e, t) => {
	t.exports = { counterpart: {
		names: ML(),
		pluralize: FL(),
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
})), LL = /* @__PURE__ */ ne((/* @__PURE__ */ P(((e, t) => {
	var n = TI(), r = DL().isArray, i = DL().isDate, a = OL().sprintf, o = kL(), s = jL(), c = PL(), l = "counterpart";
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
		}, this.registerTranslations("en", IL()), this.setMaxListeners(0);
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
})))(), 1), RL = "i18n/";
LL.default.setSeparator("|");
var zL = "en";
LL.default.setFallbackLocale(zL);
function BL(e, t) {
	LL.default.registerTranslations(e, t);
}
function VL(e) {
	LL.default.setMissingEntryGenerator(e);
}
function HL() {
	return LL.default.getLocale();
}
function UL(e) {
	return LL.default.setLocale(e);
}
function WL(e) {
	return e;
}
function GL(e) {
	return typeof e == "string" && !e.startsWith("missing translation:");
}
var KL = (e, t) => {
	let n = LL.default.translate(e, {
		...t,
		fallbackLocale: LL.default.getLocale()
	});
	if (GL(n)) return { translated: n };
	let r = LL.default.translate(e, {
		...t,
		locale: zL
	});
	return GL(r) ? {
		translated: r,
		isFallback: !0
	} : {
		translated: e,
		isFallback: !0
	};
};
function qL(e, t) {
	let n = {
		...t,
		interpolate: !1
	};
	return n && typeof n == "object" && Object.keys(n).forEach((e) => {
		n[e] === void 0 && (console.warn("safeCounterpartTranslate called with undefined interpolation name: " + e), n[e] = "undefined"), n[e] === null && (console.warn("safeCounterpartTranslate called with null interpolation name: " + e), n[e] = "null");
	}), KL(e, n);
}
var JL = (e, t) => e;
function Y(e, t, n) {
	let { translated: r } = qL(e, t);
	return JL(QL(r, t, n), e);
}
function YL(e) {
	return qL(e, {}).translated;
}
function XL(e, n, r) {
	let { translated: i, isFallback: a } = qL(e, n), o = QL(i, n, r);
	return JL(a ? /* @__PURE__ */ t.createElement("span", { lang: "en" }, o) : o, e);
}
function ZL(e) {
	return e.replace(/%\(([^)]*)\)/g, "%\xA0($1)");
}
function QL(e, t, n) {
	let r = e;
	if (t !== void 0) {
		let e = {};
		for (let n in t) e[`%\\(${n}\\)s`] = t[n];
		r = $L(r, e);
	}
	if (n !== void 0) {
		let e = {};
		for (let t in n) e[`(<${t}>(.*?)<\\/${t}>|<${t}>|<${t}\\s*\\/>)`] = n[t];
		r = $L(r, e);
	}
	return r;
}
function $L(e, n) {
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
async function eR(e) {
	let t = await nR(), n = e in t ? e : "en", r = await tR(RL + t[n]);
	LL.default.registerTranslations(n, r), LL.default.setLocale(n);
}
async function tR(e) {
	console.log("Loading language from", e);
	let t = await fetch(e, { method: "GET" });
	if (!t.ok) throw Error(`Failed to load ${e}, got ${t.status}`);
	return t.json();
}
async function nR() {
	let e = RL + "languages.json", t = await fetch(e, { method: "GET" });
	if (!t.ok) throw Error(`Failed to load ${e}, got ${t.status}`);
	return t.json();
}
//#endregion
//#region src/room/composer/Banner/Banner.tsx
function rR({ type: e, children: n, avatar: r, className: i, actions: a, onClose: o, ...s }) {
	let c = (0, V.default)(xI.banner, i), l = p(() => {
		switch (e) {
			case "critical": return /* @__PURE__ */ t.createElement(bI, { fontSize: 24 });
			case "info": return /* @__PURE__ */ t.createElement(U_, { fontSize: 24 });
			case "success": return /* @__PURE__ */ t.createElement(z_, { fontSize: 24 });
			default: return /* @__PURE__ */ t.createElement(U_, { fontSize: 24 });
		}
	}, [e]);
	return /* @__PURE__ */ t.createElement("div", {
		...s,
		className: c,
		"data-type": e
	}, /* @__PURE__ */ t.createElement("div", { className: xI.icon }, r ?? l), /* @__PURE__ */ t.createElement("div", { className: xI.content }, n), /* @__PURE__ */ t.createElement("div", { className: xI.actions }, a, o && /* @__PURE__ */ t.createElement($f, {
		kind: "secondary",
		size: "sm",
		onClick: o
	}, Y("action|dismiss"))));
}
//#endregion
//#region src/crypto/SasEmoji/SasEmojiTranslate.ts
var iR = new Map((/* @__PURE__ */ JSON.parse("[{\"number\":0,\"emoji\":\"🐶\",\"description\":\"Dog\",\"unicode\":\"U+1F436\",\"translated_descriptions\":{\"ar\":\"كلب\",\"bg\":\"Куче\",\"ca\":\"Gos\",\"cs\":\"Pes\",\"de\":\"Hund\",\"eo\":\"Hundo\",\"es\":\"Perro\",\"et\":\"Koer\",\"fa\":\"سگ\",\"fi\":\"Koira\",\"fr\":\"Chien\",\"hr\":\"pas\",\"hu\":\"Kutya\",\"id\":\"Anjing\",\"it\":\"Cane\",\"ja\":\"犬\",\"nb_NO\":\"Hund\",\"nl\":\"Hond\",\"pt\":\"Cão\",\"pt_BR\":\"Cachorro\",\"ru\":\"Собака\",\"si\":\"බල්ලා\",\"sk\":\"Pes\",\"sq\":\"Qen\",\"sr\":\"пас\",\"sv\":\"Hund\",\"szl\":null,\"tzm\":\"Aydi\",\"uk\":\"Пес\",\"vi\":\"Chó\",\"zh_Hans\":\"狗\",\"zh_Hant\":\"狗\"}},{\"number\":1,\"emoji\":\"🐱\",\"description\":\"Cat\",\"unicode\":\"U+1F431\",\"translated_descriptions\":{\"ar\":\"هِرَّة\",\"bg\":\"Котка\",\"ca\":\"Gat\",\"cs\":\"Kočka\",\"de\":\"Katze\",\"eo\":\"Kato\",\"es\":\"Gato\",\"et\":\"Kass\",\"fa\":\"گربه\",\"fi\":\"Kissa\",\"fr\":\"Chat\",\"hr\":\"mačka\",\"hu\":\"Macska\",\"id\":\"Kucing\",\"it\":\"Gatto\",\"ja\":\"猫\",\"nb_NO\":\"Katt\",\"nl\":\"Kat\",\"pt\":\"Gato\",\"pt_BR\":\"Gato\",\"ru\":\"Кошка\",\"si\":\"පූසා\",\"sk\":\"Mačka\",\"sq\":\"Mace\",\"sr\":\"мачка\",\"sv\":\"Katt\",\"szl\":null,\"tzm\":\"Amuc\",\"uk\":\"Кіт\",\"vi\":\"Mèo\",\"zh_Hans\":\"猫\",\"zh_Hant\":\"貓\"}},{\"number\":2,\"emoji\":\"🦁\",\"description\":\"Lion\",\"unicode\":\"U+1F981\",\"translated_descriptions\":{\"ar\":\"أَسَد\",\"bg\":\"Лъв\",\"ca\":\"Lleó\",\"cs\":\"Lev\",\"de\":\"Löwe\",\"eo\":\"Leono\",\"es\":\"León\",\"et\":\"Lõvi\",\"fa\":\"شیر\",\"fi\":\"Leijona\",\"fr\":\"Lion\",\"hr\":\"lav\",\"hu\":\"Oroszlán\",\"id\":\"Singa\",\"it\":\"Leone\",\"ja\":\"ライオン\",\"nb_NO\":\"Løve\",\"nl\":\"Leeuw\",\"pt\":\"Leão\",\"pt_BR\":\"Leão\",\"ru\":\"Лев\",\"si\":\"සිංහයා\",\"sk\":\"Lev\",\"sq\":\"Luan\",\"sr\":\"лав\",\"sv\":\"Lejon\",\"szl\":null,\"tzm\":\"Izem\",\"uk\":\"Лев\",\"vi\":\"Sư tử\",\"zh_Hans\":\"狮子\",\"zh_Hant\":\"獅子\"}},{\"number\":3,\"emoji\":\"🐎\",\"description\":\"Horse\",\"unicode\":\"U+1F40E\",\"translated_descriptions\":{\"ar\":\"حِصَان\",\"bg\":\"Кон\",\"ca\":\"Cavall\",\"cs\":\"Kůň\",\"de\":\"Pferd\",\"eo\":\"Ĉevalo\",\"es\":\"Caballo\",\"et\":\"Hobune\",\"fa\":\"اسب\",\"fi\":\"Hevonen\",\"fr\":\"Cheval\",\"hr\":\"konj\",\"hu\":\"Ló\",\"id\":\"Kuda\",\"it\":\"Cavallo\",\"ja\":\"馬\",\"nb_NO\":\"Hest\",\"nl\":\"Paard\",\"pt\":\"Cavalo\",\"pt_BR\":\"Cavalo\",\"ru\":\"Лошадь\",\"si\":\"අශ්වයා\",\"sk\":\"Kôň\",\"sq\":\"Kalë\",\"sr\":\"коњ\",\"sv\":\"Häst\",\"szl\":null,\"tzm\":\"Ayyis\",\"uk\":\"Кінь\",\"vi\":\"Ngựa\",\"zh_Hans\":\"马\",\"zh_Hant\":\"馬\"}},{\"number\":4,\"emoji\":\"🦄\",\"description\":\"Unicorn\",\"unicode\":\"U+1F984\",\"translated_descriptions\":{\"ar\":\"حصان وحيد القرن\",\"bg\":\"Еднорог\",\"ca\":\"Unicorn\",\"cs\":\"Jednorožec\",\"de\":\"Einhorn\",\"eo\":\"Unukorno\",\"es\":\"Unicornio\",\"et\":\"Ükssarvik\",\"fa\":\"تک شاخ\",\"fi\":\"Yksisarvinen\",\"fr\":\"Licorne\",\"hr\":\"jednorog\",\"hu\":\"Egyszarvú\",\"id\":\"Unicorn\",\"it\":\"Unicorno\",\"ja\":\"ユニコーン\",\"nb_NO\":\"Enhjørning\",\"nl\":\"Eenhoorn\",\"pt\":\"Unicórnio\",\"pt_BR\":\"Unicórnio\",\"ru\":\"Единорог\",\"si\":null,\"sk\":\"Jednorožec\",\"sq\":\"Njëbrirësh\",\"sr\":\"једнорог\",\"sv\":\"Enhörning\",\"szl\":null,\"tzm\":null,\"uk\":\"Єдиноріг\",\"vi\":\"Kỳ lân\",\"zh_Hans\":\"独角兽\",\"zh_Hant\":\"獨角獸\"}},{\"number\":5,\"emoji\":\"🐷\",\"description\":\"Pig\",\"unicode\":\"U+1F437\",\"translated_descriptions\":{\"ar\":\"خِنزِير\",\"bg\":\"Прасе\",\"ca\":\"Porc\",\"cs\":\"Prase\",\"de\":\"Schwein\",\"eo\":\"Porko\",\"es\":\"Cerdo\",\"et\":\"Siga\",\"fa\":\"خوک\",\"fi\":\"Sika\",\"fr\":\"Cochon\",\"hr\":\"svinja\",\"hu\":\"Malac\",\"id\":\"Babi\",\"it\":\"Maiale\",\"ja\":\"ブタ\",\"nb_NO\":\"Gris\",\"nl\":\"Varken\",\"pt\":\"Porco\",\"pt_BR\":\"Porco\",\"ru\":\"Свинья\",\"si\":null,\"sk\":\"Prasa\",\"sq\":\"Derr\",\"sr\":\"прасе\",\"sv\":\"Gris\",\"szl\":null,\"tzm\":\"Ilef\",\"uk\":\"Свиня\",\"vi\":\"Heo\",\"zh_Hans\":\"猪\",\"zh_Hant\":\"豬\"}},{\"number\":6,\"emoji\":\"🐘\",\"description\":\"Elephant\",\"unicode\":\"U+1F418\",\"translated_descriptions\":{\"ar\":\"فِيل\",\"bg\":\"Слон\",\"ca\":\"Elefant\",\"cs\":\"Slon\",\"de\":\"Elefant\",\"eo\":\"Elefanto\",\"es\":\"Elefante\",\"et\":\"Elevant\",\"fa\":\"فیل\",\"fi\":\"Norsu\",\"fr\":\"Éléphant\",\"hr\":\"slon\",\"hu\":\"Elefánt\",\"id\":\"Gajah\",\"it\":\"Elefante\",\"ja\":\"ゾウ\",\"nb_NO\":\"Elefant\",\"nl\":\"Olifant\",\"pt\":\"Elefante\",\"pt_BR\":\"Elefante\",\"ru\":\"Слон\",\"si\":null,\"sk\":\"Slon\",\"sq\":\"Elefant\",\"sr\":\"слон\",\"sv\":\"Elefant\",\"szl\":null,\"tzm\":\"Ilu\",\"uk\":\"Слон\",\"vi\":\"Voi\",\"zh_Hans\":\"大象\",\"zh_Hant\":\"大象\"}},{\"number\":7,\"emoji\":\"🐰\",\"description\":\"Rabbit\",\"unicode\":\"U+1F430\",\"translated_descriptions\":{\"ar\":\"أَرنَب\",\"bg\":\"Заек\",\"ca\":\"Conill\",\"cs\":\"Králík\",\"de\":\"Hase\",\"eo\":\"Kuniklo\",\"es\":\"Conejo\",\"et\":\"Jänes\",\"fa\":\"خرگوش\",\"fi\":\"Kani\",\"fr\":\"Lapin\",\"hr\":\"zec\",\"hu\":\"Nyúl\",\"id\":\"Kelinci\",\"it\":\"Coniglio\",\"ja\":\"うさぎ\",\"nb_NO\":\"Kanin\",\"nl\":\"Konijn\",\"pt\":\"Coelho\",\"pt_BR\":\"Coelho\",\"ru\":\"Кролик\",\"si\":null,\"sk\":\"Zajac\",\"sq\":\"Lepur\",\"sr\":\"зец\",\"sv\":\"Kanin\",\"szl\":null,\"tzm\":\"Agnin\",\"uk\":\"Кріль\",\"vi\":\"Thỏ\",\"zh_Hans\":\"兔子\",\"zh_Hant\":\"兔子\"}},{\"number\":8,\"emoji\":\"🐼\",\"description\":\"Panda\",\"unicode\":\"U+1F43C\",\"translated_descriptions\":{\"ar\":\"باندَا\",\"bg\":\"Панда\",\"ca\":\"Panda\",\"cs\":\"Panda\",\"de\":\"Panda\",\"eo\":\"Pando\",\"es\":\"Panda\",\"et\":\"Panda\",\"fa\":\"پاندا\",\"fi\":\"Panda\",\"fr\":\"Panda\",\"hr\":\"panda\",\"hu\":\"Panda\",\"id\":\"Panda\",\"it\":\"Panda\",\"ja\":\"パンダ\",\"nb_NO\":\"Panda\",\"nl\":\"Panda\",\"pt\":\"Panda\",\"pt_BR\":\"Panda\",\"ru\":\"Панда\",\"si\":null,\"sk\":\"Panda\",\"sq\":\"Panda\",\"sr\":\"панда\",\"sv\":\"Panda\",\"szl\":null,\"tzm\":null,\"uk\":\"Панда\",\"vi\":\"Gấu trúc\",\"zh_Hans\":\"熊猫\",\"zh_Hant\":\"熊貓\"}},{\"number\":9,\"emoji\":\"🐓\",\"description\":\"Rooster\",\"unicode\":\"U+1F413\",\"translated_descriptions\":{\"ar\":\"دِيك\",\"bg\":\"Петел\",\"ca\":\"Gall\",\"cs\":\"Kohout\",\"de\":\"Hahn\",\"eo\":\"Virkoko\",\"es\":\"Gallo\",\"et\":\"Kukk\",\"fa\":\"خروس\",\"fi\":\"Kukko\",\"fr\":\"Coq\",\"hr\":\"kokot\",\"hu\":\"Kakas\",\"id\":\"Ayam\",\"it\":\"Gallo\",\"ja\":\"ニワトリ\",\"nb_NO\":\"Hane\",\"nl\":\"Haan\",\"pt\":\"Galo\",\"pt_BR\":\"Galo\",\"ru\":\"Петух\",\"si\":null,\"sk\":\"Kohút\",\"sq\":\"Këndes\",\"sr\":\"петао\",\"sv\":\"Tupp\",\"szl\":null,\"tzm\":\"Ayaẓiḍ\",\"uk\":\"Когут\",\"vi\":\"Gà trống\",\"zh_Hans\":\"公鸡\",\"zh_Hant\":\"公雞\"}},{\"number\":10,\"emoji\":\"🐧\",\"description\":\"Penguin\",\"unicode\":\"U+1F427\",\"translated_descriptions\":{\"ar\":\"بطريق\",\"bg\":\"Пингвин\",\"ca\":\"Pingüí\",\"cs\":\"Tučňák\",\"de\":\"Pinguin\",\"eo\":\"Pingveno\",\"es\":\"Pingüino\",\"et\":\"Pingviin\",\"fa\":\"پنگوئن\",\"fi\":\"Pingviini\",\"fr\":\"Manchot\",\"hr\":\"pingvin\",\"hu\":\"Pingvin\",\"id\":\"Penguin\",\"it\":\"Pinguino\",\"ja\":\"ペンギン\",\"nb_NO\":\"Pingvin\",\"nl\":\"Pinguïn\",\"pt\":\"Pinguim\",\"pt_BR\":\"Pinguim\",\"ru\":\"Пингвин\",\"si\":null,\"sk\":\"Tučniak\",\"sq\":\"Pinguin\",\"sr\":\"пингвин\",\"sv\":\"Pingvin\",\"szl\":null,\"tzm\":null,\"uk\":\"Пінгвін\",\"vi\":\"Chim cánh cụt\",\"zh_Hans\":\"企鹅\",\"zh_Hant\":\"企鵝\"}},{\"number\":11,\"emoji\":\"🐢\",\"description\":\"Turtle\",\"unicode\":\"U+1F422\",\"translated_descriptions\":{\"ar\":\"سُلحفاة\",\"bg\":\"Костенурка\",\"ca\":\"Tortuga\",\"cs\":\"Želva\",\"de\":\"Schildkröte\",\"eo\":\"Testudo\",\"es\":\"Tortuga\",\"et\":\"Kilpkonn\",\"fa\":\"لاک‌پشت\",\"fi\":\"Kilpikonna\",\"fr\":\"Tortue\",\"hr\":\"kornjača\",\"hu\":\"Teknős\",\"id\":\"Kura-Kura\",\"it\":\"Tartaruga\",\"ja\":\"亀\",\"nb_NO\":\"Skilpadde\",\"nl\":\"Schildpad\",\"pt\":\"Tartaruga\",\"pt_BR\":\"Tartaruga\",\"ru\":\"Черепаха\",\"si\":null,\"sk\":\"Korytnačka\",\"sq\":\"Breshkë\",\"sr\":\"корњача\",\"sv\":\"Sköldpadda\",\"szl\":null,\"tzm\":\"Ifker\",\"uk\":\"Черепаха\",\"vi\":\"Rùa\",\"zh_Hans\":\"乌龟\",\"zh_Hant\":\"烏龜\"}},{\"number\":12,\"emoji\":\"🐟\",\"description\":\"Fish\",\"unicode\":\"U+1F41F\",\"translated_descriptions\":{\"ar\":\"سَمَكة\",\"bg\":\"Риба\",\"ca\":\"Peix\",\"cs\":\"Ryba\",\"de\":\"Fisch\",\"eo\":\"Fiŝo\",\"es\":\"Pez\",\"et\":\"Kala\",\"fa\":\"ماهی\",\"fi\":\"Kala\",\"fr\":\"Poisson\",\"hr\":\"riba\",\"hu\":\"Hal\",\"id\":\"Ikan\",\"it\":\"Pesce\",\"ja\":\"魚\",\"nb_NO\":\"Fisk\",\"nl\":\"Vis\",\"pt\":\"Peixe\",\"pt_BR\":\"Peixe\",\"ru\":\"Рыба\",\"si\":null,\"sk\":\"Ryba\",\"sq\":\"Peshk\",\"sr\":\"риба\",\"sv\":\"Fisk\",\"szl\":null,\"tzm\":\"Aselm\",\"uk\":\"Риба\",\"vi\":\"Cá\",\"zh_Hans\":\"鱼\",\"zh_Hant\":\"魚\"}},{\"number\":13,\"emoji\":\"🐙\",\"description\":\"Octopus\",\"unicode\":\"U+1F419\",\"translated_descriptions\":{\"ar\":\"أُخطُبُوط\",\"bg\":\"Октопод\",\"ca\":\"Pop\",\"cs\":\"Chobotnice\",\"de\":\"Oktopus\",\"eo\":\"Polpo\",\"es\":\"Pulpo\",\"et\":\"Kaheksajalg\",\"fa\":\"اختاپوس\",\"fi\":\"Tursas\",\"fr\":\"Poulpe\",\"hr\":\"hobotnica\",\"hu\":\"Polip\",\"id\":\"Gurita\",\"it\":\"Polpo\",\"ja\":\"たこ\",\"nb_NO\":\"Blekksprut\",\"nl\":\"Octopus\",\"pt\":\"Polvo\",\"pt_BR\":\"Polvo\",\"ru\":\"Осьминог\",\"si\":null,\"sk\":\"Chobotnica\",\"sq\":\"Oktapod\",\"sr\":\"октопод\",\"sv\":\"Bläckfisk\",\"szl\":null,\"tzm\":null,\"uk\":\"Восьминіг\",\"vi\":\"Bạch tuộc\",\"zh_Hans\":\"章鱼\",\"zh_Hant\":\"章魚\"}},{\"number\":14,\"emoji\":\"🦋\",\"description\":\"Butterfly\",\"unicode\":\"U+1F98B\",\"translated_descriptions\":{\"ar\":\"فَرَاشَة\",\"bg\":\"Пеперуда\",\"ca\":\"Papallona\",\"cs\":\"Motýl\",\"de\":\"Schmetterling\",\"eo\":\"Papilio\",\"es\":\"Mariposa\",\"et\":\"Liblikas\",\"fa\":\"پروانه\",\"fi\":\"Perhonen\",\"fr\":\"Papillon\",\"hr\":\"leptir\",\"hu\":\"Pillangó\",\"id\":\"Kupu-Kupu\",\"it\":\"Farfalla\",\"ja\":\"ちょうちょ\",\"nb_NO\":\"Sommerfugl\",\"nl\":\"Vlinder\",\"pt\":\"Borboleta\",\"pt_BR\":\"Borboleta\",\"ru\":\"Бабочка\",\"si\":null,\"sk\":\"Motýľ\",\"sq\":\"Flutur\",\"sr\":\"лептир\",\"sv\":\"Fjäril\",\"szl\":null,\"tzm\":null,\"uk\":\"Метелик\",\"vi\":\"Bướm\",\"zh_Hans\":\"蝴蝶\",\"zh_Hant\":\"蝴蝶\"}},{\"number\":15,\"emoji\":\"🌷\",\"description\":\"Flower\",\"unicode\":\"U+1F337\",\"translated_descriptions\":{\"ar\":\"زَهرَة\",\"bg\":\"Цвете\",\"ca\":\"Flor\",\"cs\":\"Květina\",\"de\":\"Blume\",\"eo\":\"Floro\",\"es\":\"Flor\",\"et\":\"Lill\",\"fa\":\"گل\",\"fi\":\"Kukka\",\"fr\":\"Fleur\",\"hr\":\"svijet\",\"hu\":\"Virág\",\"id\":\"Bunga\",\"it\":\"Fiore\",\"ja\":\"花\",\"nb_NO\":\"Blomst\",\"nl\":\"Bloem\",\"pt\":\"Flor\",\"pt_BR\":\"Flor\",\"ru\":\"Цветок\",\"si\":null,\"sk\":\"Kvet\",\"sq\":\"Lule\",\"sr\":\"цвет\",\"sv\":\"Blomma\",\"szl\":null,\"tzm\":null,\"uk\":\"Квітка\",\"vi\":\"Hoa\",\"zh_Hans\":\"花\",\"zh_Hant\":\"花\"}},{\"number\":16,\"emoji\":\"🌳\",\"description\":\"Tree\",\"unicode\":\"U+1F333\",\"translated_descriptions\":{\"ar\":\"شَجَرَة\",\"bg\":\"Дърво\",\"ca\":\"Arbre\",\"cs\":\"Strom\",\"de\":\"Baum\",\"eo\":\"Arbo\",\"es\":\"Árbol\",\"et\":\"Puu\",\"fa\":\"درخت\",\"fi\":\"Puu\",\"fr\":\"Arbre\",\"hr\":\"drvo\",\"hu\":\"Fa\",\"id\":\"Pohon\",\"it\":\"Albero\",\"ja\":\"木\",\"nb_NO\":\"Tre\",\"nl\":\"Boom\",\"pt\":\"Árvore\",\"pt_BR\":\"Árvore\",\"ru\":\"Дерево\",\"si\":null,\"sk\":\"Strom\",\"sq\":\"Pemë\",\"sr\":\"дрво\",\"sv\":\"Träd\",\"szl\":null,\"tzm\":\"Aseklu\",\"uk\":\"Дерево\",\"vi\":\"Cây\",\"zh_Hans\":\"树\",\"zh_Hant\":\"樹\"}},{\"number\":17,\"emoji\":\"🌵\",\"description\":\"Cactus\",\"unicode\":\"U+1F335\",\"translated_descriptions\":{\"ar\":\"صبار\",\"bg\":\"Кактус\",\"ca\":\"Cactus\",\"cs\":\"Kaktus\",\"de\":\"Kaktus\",\"eo\":\"Kakto\",\"es\":\"Cactus\",\"et\":\"Kaktus\",\"fa\":\"کاکتوس\",\"fi\":\"Kaktus\",\"fr\":\"Cactus\",\"hr\":\"kaktus\",\"hu\":\"Kaktusz\",\"id\":\"Kaktus\",\"it\":\"Cactus\",\"ja\":\"サボテン\",\"nb_NO\":\"Kaktus\",\"nl\":\"Cactus\",\"pt\":\"Cato\",\"pt_BR\":\"Cacto\",\"ru\":\"Кактус\",\"si\":null,\"sk\":\"Kaktus\",\"sq\":\"Kaktus\",\"sr\":\"кактус\",\"sv\":\"Kaktus\",\"szl\":null,\"tzm\":null,\"uk\":\"Кактус\",\"vi\":\"Xương rồng\",\"zh_Hans\":\"仙人掌\",\"zh_Hant\":\"仙人掌\"}},{\"number\":18,\"emoji\":\"🍄\",\"description\":\"Mushroom\",\"unicode\":\"U+1F344\",\"translated_descriptions\":{\"ar\":\"فُطر\",\"bg\":\"Гъба\",\"ca\":\"Bolet\",\"cs\":\"Houba\",\"de\":\"Pilz\",\"eo\":\"Fungo\",\"es\":\"Seta\",\"et\":\"Seen\",\"fa\":\"قارچ\",\"fi\":\"Sieni\",\"fr\":\"Champignon\",\"hr\":\"gljiva\",\"hu\":\"Gomba\",\"id\":\"Jamur\",\"it\":\"Fungo\",\"ja\":\"きのこ\",\"nb_NO\":\"Sopp\",\"nl\":\"Paddenstoel\",\"pt\":\"Cogumelo\",\"pt_BR\":\"Cogumelo\",\"ru\":\"Гриб\",\"si\":null,\"sk\":\"Huba\",\"sq\":\"Kërpudhë\",\"sr\":\"печурка\",\"sv\":\"Svamp\",\"szl\":null,\"tzm\":\"Agursel\",\"uk\":\"Гриб\",\"vi\":\"Nấm\",\"zh_Hans\":\"蘑菇\",\"zh_Hant\":\"蘑菇\"}},{\"number\":19,\"emoji\":\"🌏\",\"description\":\"Globe\",\"unicode\":\"U+1F30F\",\"translated_descriptions\":{\"ar\":\"كُرَةٌ أرضِيَّة\",\"bg\":\"Глобус\",\"ca\":\"Globus terraqüi\",\"cs\":\"Zeměkoule\",\"de\":\"Globus\",\"eo\":\"Globo\",\"es\":\"Globo\",\"et\":\"Maakera\",\"fa\":\"زمین\",\"fi\":\"Maapallo\",\"fr\":\"Globe\",\"hr\":\"Globus\",\"hu\":\"Földgömb\",\"id\":\"Bola Dunia\",\"it\":\"Globo\",\"ja\":\"地球\",\"nb_NO\":\"Globus\",\"nl\":\"Wereldbol\",\"pt\":\"Globo\",\"pt_BR\":\"Globo\",\"ru\":\"Глобус\",\"si\":null,\"sk\":\"Zemeguľa\",\"sq\":\"Rruzull\",\"sr\":\"глобус\",\"sv\":\"Jordklot\",\"szl\":null,\"tzm\":null,\"uk\":\"Глобус\",\"vi\":\"Địa cầu\",\"zh_Hans\":\"地球\",\"zh_Hant\":\"地球\"}},{\"number\":20,\"emoji\":\"🌙\",\"description\":\"Moon\",\"unicode\":\"U+1F319\",\"translated_descriptions\":{\"ar\":\"قَمَر\",\"bg\":\"Луна\",\"ca\":\"Lluna\",\"cs\":\"Měsíc\",\"de\":\"Mond\",\"eo\":\"Luno\",\"es\":\"Luna\",\"et\":\"Kuu\",\"fa\":\"ماه\",\"fi\":\"Kuu\",\"fr\":\"Lune\",\"hr\":\"mjesec\",\"hu\":\"Hold\",\"id\":\"Bulan\",\"it\":\"Luna\",\"ja\":\"月\",\"nb_NO\":\"Måne\",\"nl\":\"Maan\",\"pt\":\"Lua\",\"pt_BR\":\"Lua\",\"ru\":\"Луна\",\"si\":null,\"sk\":\"Mesiac\",\"sq\":\"Hënë\",\"sr\":\"месец\",\"sv\":\"Måne\",\"szl\":null,\"tzm\":\"Ayyur\",\"uk\":\"Місяць\",\"vi\":\"Mặt trăng\",\"zh_Hans\":\"月亮\",\"zh_Hant\":\"月亮\"}},{\"number\":21,\"emoji\":\"☁️\",\"description\":\"Cloud\",\"unicode\":\"U+2601U+FE0F\",\"translated_descriptions\":{\"ar\":\"سَحابَة\",\"bg\":\"Облак\",\"ca\":\"Núvol\",\"cs\":\"Mrak\",\"de\":\"Wolke\",\"eo\":\"Nubo\",\"es\":\"Nube\",\"et\":\"Pilv\",\"fa\":\"ابر\",\"fi\":\"Pilvi\",\"fr\":\"Nuage\",\"hr\":\"oblak\",\"hu\":\"Felhő\",\"id\":\"Awan\",\"it\":\"Nuvola\",\"ja\":\"雲\",\"nb_NO\":\"Sky\",\"nl\":\"Wolk\",\"pt\":\"Nuvem\",\"pt_BR\":\"Nuvem\",\"ru\":\"Облако\",\"si\":null,\"sk\":\"Oblak\",\"sq\":\"Re\",\"sr\":\"облак\",\"sv\":\"Moln\",\"szl\":null,\"tzm\":null,\"uk\":\"Хмара\",\"vi\":\"Mây\",\"zh_Hans\":\"云\",\"zh_Hant\":\"雲朵\"}},{\"number\":22,\"emoji\":\"🔥\",\"description\":\"Fire\",\"unicode\":\"U+1F525\",\"translated_descriptions\":{\"ar\":\"نار\",\"bg\":\"Огън\",\"ca\":\"Foc\",\"cs\":\"Oheň\",\"de\":\"Feuer\",\"eo\":\"Fajro\",\"es\":\"Fuego\",\"et\":\"Tuli\",\"fa\":\"آتش\",\"fi\":\"Tuli\",\"fr\":\"Feu\",\"hr\":\"vatra\",\"hu\":\"Tűz\",\"id\":\"Api\",\"it\":\"Fuoco\",\"ja\":\"炎\",\"nb_NO\":\"Flamme\",\"nl\":\"Vuur\",\"pt\":\"Fogo\",\"pt_BR\":\"Fogo\",\"ru\":\"Огонь\",\"si\":null,\"sk\":\"Oheň\",\"sq\":\"Zjarr\",\"sr\":\"ватра\",\"sv\":\"Eld\",\"szl\":null,\"tzm\":\"Timessi\",\"uk\":\"Вогонь\",\"vi\":\"Lửa\",\"zh_Hans\":\"火\",\"zh_Hant\":\"火\"}},{\"number\":23,\"emoji\":\"🍌\",\"description\":\"Banana\",\"unicode\":\"U+1F34C\",\"translated_descriptions\":{\"ar\":\"مَوزَة\",\"bg\":\"Банан\",\"ca\":\"Plàtan\",\"cs\":\"Banán\",\"de\":\"Banane\",\"eo\":\"Banano\",\"es\":\"Plátano\",\"et\":\"Banaan\",\"fa\":\"موز\",\"fi\":\"Banaani\",\"fr\":\"Banane\",\"hr\":\"banana\",\"hu\":\"Banán\",\"id\":\"Pisang\",\"it\":\"Banana\",\"ja\":\"バナナ\",\"nb_NO\":\"Banan\",\"nl\":\"Banaan\",\"pt\":\"Banana\",\"pt_BR\":\"Banana\",\"ru\":\"Банан\",\"si\":null,\"sk\":\"Banán\",\"sq\":\"Banane\",\"sr\":\"банана\",\"sv\":\"Banan\",\"szl\":null,\"tzm\":\"Tabanant\",\"uk\":\"Банан\",\"vi\":\"Chuối\",\"zh_Hans\":\"香蕉\",\"zh_Hant\":\"香蕉\"}},{\"number\":24,\"emoji\":\"🍎\",\"description\":\"Apple\",\"unicode\":\"U+1F34E\",\"translated_descriptions\":{\"ar\":\"تُفَّاحَة\",\"bg\":\"Ябълка\",\"ca\":\"Poma\",\"cs\":\"Jablko\",\"de\":\"Apfel\",\"eo\":\"Pomo\",\"es\":\"Manzana\",\"et\":\"Õun\",\"fa\":\"سیب\",\"fi\":\"Omena\",\"fr\":\"Pomme\",\"hr\":\"jabuka\",\"hu\":\"Alma\",\"id\":\"Apel\",\"it\":\"Mela\",\"ja\":\"リンゴ\",\"nb_NO\":\"Eple\",\"nl\":\"Appel\",\"pt\":\"Maçã\",\"pt_BR\":\"Maçã\",\"ru\":\"Яблоко\",\"si\":null,\"sk\":\"Jablko\",\"sq\":\"Mollë\",\"sr\":\"јабука\",\"sv\":\"Äpple\",\"szl\":null,\"tzm\":\"Tadeffuyt\",\"uk\":\"Яблуко\",\"vi\":\"Táo\",\"zh_Hans\":\"苹果\",\"zh_Hant\":\"蘋果\"}},{\"number\":25,\"emoji\":\"🍓\",\"description\":\"Strawberry\",\"unicode\":\"U+1F353\",\"translated_descriptions\":{\"ar\":\"فَراوِلَة\",\"bg\":\"Ягода\",\"ca\":\"Maduixa\",\"cs\":\"Jahoda\",\"de\":\"Erdbeere\",\"eo\":\"Frago\",\"es\":\"Fresa\",\"et\":\"Maasikas\",\"fa\":\"توت فرنگی\",\"fi\":\"Mansikka\",\"fr\":\"Fraise\",\"hr\":\"jagoda\",\"hu\":\"Eper\",\"id\":\"Stroberi\",\"it\":\"Fragola\",\"ja\":\"いちご\",\"nb_NO\":\"Jordbær\",\"nl\":\"Aardbei\",\"pt\":\"Morango\",\"pt_BR\":\"Morango\",\"ru\":\"Клубника\",\"si\":null,\"sk\":\"Jahoda\",\"sq\":\"Luleshtrydhe\",\"sr\":\"јагода\",\"sv\":\"Jordgubbe\",\"szl\":null,\"tzm\":null,\"uk\":\"Полуниця\",\"vi\":\"Dâu tây\",\"zh_Hans\":\"草莓\",\"zh_Hant\":\"草莓\"}},{\"number\":26,\"emoji\":\"🌽\",\"description\":\"Corn\",\"unicode\":\"U+1F33D\",\"translated_descriptions\":{\"ar\":\"ذُرَة\",\"bg\":\"Царевица\",\"ca\":\"Blat de moro\",\"cs\":\"Kukuřice\",\"de\":\"Mais\",\"eo\":\"Maizo\",\"es\":\"Maíz\",\"et\":\"Mais\",\"fa\":\"ذرت\",\"fi\":\"Maissi\",\"fr\":\"Maïs\",\"hr\":\"kukuruza\",\"hu\":\"Kukorica\",\"id\":\"Jagung\",\"it\":\"Mais\",\"ja\":\"とうもろこし\",\"nb_NO\":\"Mais\",\"nl\":\"Maïs\",\"pt\":\"Milho\",\"pt_BR\":\"Milho\",\"ru\":\"Кукуруза\",\"si\":null,\"sk\":\"Kukurica\",\"sq\":\"Misër\",\"sr\":\"кукуруз\",\"sv\":\"Majs\",\"szl\":null,\"tzm\":null,\"uk\":\"Кукурудза\",\"vi\":\"Bắp\",\"zh_Hans\":\"玉米\",\"zh_Hant\":\"玉米\"}},{\"number\":27,\"emoji\":\"🍕\",\"description\":\"Pizza\",\"unicode\":\"U+1F355\",\"translated_descriptions\":{\"ar\":\"بِيتزا\",\"bg\":\"Пица\",\"ca\":\"Pizza\",\"cs\":\"Pizza\",\"de\":\"Pizza\",\"eo\":\"Pico\",\"es\":\"Pizza\",\"et\":\"Pitsa\",\"fa\":\"پیتزا\",\"fi\":\"Pizza\",\"fr\":\"Pizza\",\"hr\":\"pizza\",\"hu\":\"Pizza\",\"id\":\"Pizza\",\"it\":\"Pizza\",\"ja\":\"ピザ\",\"nb_NO\":\"Pizza\",\"nl\":\"Pizza\",\"pt\":\"Piza\",\"pt_BR\":\"Pizza\",\"ru\":\"Пицца\",\"si\":null,\"sk\":\"Pizza\",\"sq\":\"Picë\",\"sr\":\"пица\",\"sv\":\"Pizza\",\"szl\":null,\"tzm\":null,\"uk\":\"Піца\",\"vi\":\"Pizza\",\"zh_Hans\":\"披萨\",\"zh_Hant\":\"披薩\"}},{\"number\":28,\"emoji\":\"🎂\",\"description\":\"Cake\",\"unicode\":\"U+1F382\",\"translated_descriptions\":{\"ar\":\"كَعكَة\",\"bg\":\"Торта\",\"ca\":\"Pastís\",\"cs\":\"Dort\",\"de\":\"Kuchen\",\"eo\":\"Torto\",\"es\":\"Tarta\",\"et\":\"Kook\",\"fa\":\"کیک\",\"fi\":\"Kakku\",\"fr\":\"Gâteau\",\"hr\":\"torta\",\"hu\":\"Süti\",\"id\":\"Kue\",\"it\":\"Torta\",\"ja\":\"ケーキ\",\"nb_NO\":\"Kake\",\"nl\":\"Taart\",\"pt\":\"Bolo\",\"pt_BR\":\"Bolo\",\"ru\":\"Торт\",\"si\":null,\"sk\":\"Torta\",\"sq\":\"Tortë\",\"sr\":\"торта\",\"sv\":\"Tårta\",\"szl\":null,\"tzm\":null,\"uk\":\"Пиріг\",\"vi\":\"Bánh\",\"zh_Hans\":\"蛋糕\",\"zh_Hant\":\"蛋糕\"}},{\"number\":29,\"emoji\":\"❤️\",\"description\":\"Heart\",\"unicode\":\"U+2764U+FE0F\",\"translated_descriptions\":{\"ar\":\"قَلب\",\"bg\":\"Сърце\",\"ca\":\"Cor\",\"cs\":\"Srdce\",\"de\":\"Herz\",\"eo\":\"Koro\",\"es\":\"Corazón\",\"et\":\"Süda\",\"fa\":\"قلب\",\"fi\":\"Sydän\",\"fr\":\"Cœur\",\"hr\":\"srca\",\"hu\":\"Szív\",\"id\":\"Hati\",\"it\":\"Cuore\",\"ja\":\"ハート\",\"nb_NO\":\"Hjerte\",\"nl\":\"Hart\",\"pt\":\"Coração\",\"pt_BR\":\"Coração\",\"ru\":\"Сердце\",\"si\":null,\"sk\":\"Srdce\",\"sq\":\"Zemër\",\"sr\":\"срце\",\"sv\":\"Hjärta\",\"szl\":null,\"tzm\":\"Ul\",\"uk\":\"Серце\",\"vi\":\"Tim\",\"zh_Hans\":\"心\",\"zh_Hant\":\"愛心\"}},{\"number\":30,\"emoji\":\"😀\",\"description\":\"Smiley\",\"unicode\":\"U+1F600\",\"translated_descriptions\":{\"ar\":\"اِبتِسَامَة\",\"bg\":\"Усмивка\",\"ca\":\"Somrient\",\"cs\":\"Smajlík\",\"de\":\"Lächeln\",\"eo\":\"Rideto\",\"es\":\"Emoticono\",\"et\":\"Smaili\",\"fa\":\"خنده\",\"fi\":\"Hymynaama\",\"fr\":\"Sourire\",\"hr\":\"smajlića\",\"hu\":\"Mosoly\",\"id\":\"Senyuman\",\"it\":\"Faccina sorridente\",\"ja\":\"スマイル\",\"nb_NO\":\"Smilefjes\",\"nl\":\"Smiley\",\"pt\":\"Sorriso\",\"pt_BR\":\"Sorriso\",\"ru\":\"Улыбка\",\"si\":null,\"sk\":\"Smajlík\",\"sq\":\"Emotikon\",\"sr\":\"смајли\",\"sv\":\"Smiley\",\"szl\":null,\"tzm\":null,\"uk\":\"Посмішка\",\"vi\":\"Mặt cười\",\"zh_Hans\":\"笑脸\",\"zh_Hant\":\"笑臉\"}},{\"number\":31,\"emoji\":\"🤖\",\"description\":\"Robot\",\"unicode\":\"U+1F916\",\"translated_descriptions\":{\"ar\":\"رُوبُوت\",\"bg\":\"Робот\",\"ca\":\"Robot\",\"cs\":\"Robot\",\"de\":\"Roboter\",\"eo\":\"Roboto\",\"es\":\"Robot\",\"et\":\"Robot\",\"fa\":\"ربات\",\"fi\":\"Robotti\",\"fr\":\"Robot\",\"hr\":\"robot\",\"hu\":\"Robot\",\"id\":\"Robot\",\"it\":\"Robot\",\"ja\":\"ロボット\",\"nb_NO\":\"Robot\",\"nl\":\"Robot\",\"pt\":\"Robô\",\"pt_BR\":\"Robô\",\"ru\":\"Робот\",\"si\":null,\"sk\":\"Robot\",\"sq\":\"Robot\",\"sr\":\"робот\",\"sv\":\"Robot\",\"szl\":null,\"tzm\":\"Aṛubu\",\"uk\":\"Робот\",\"vi\":\"Rô-bô\",\"zh_Hans\":\"机器人\",\"zh_Hant\":\"機器人\"}},{\"number\":32,\"emoji\":\"🎩\",\"description\":\"Hat\",\"unicode\":\"U+1F3A9\",\"translated_descriptions\":{\"ar\":\"قُبَّعَة\",\"bg\":\"Шапка\",\"ca\":\"Barret\",\"cs\":\"Klobouk\",\"de\":\"Hut\",\"eo\":\"Ĉapelo\",\"es\":\"Sombrero\",\"et\":\"Kübar\",\"fa\":\"کلاه\",\"fi\":\"Hattu\",\"fr\":\"Chapeau\",\"hr\":\"kapa\",\"hu\":\"Kalap\",\"id\":\"Topi\",\"it\":\"Cappello\",\"ja\":\"帽子\",\"nb_NO\":\"Hatt\",\"nl\":\"Hoed\",\"pt\":\"Chapéu\",\"pt_BR\":\"Chapéu\",\"ru\":\"Шляпа\",\"si\":null,\"sk\":\"Klobúk\",\"sq\":\"Kapë\",\"sr\":\"шешир\",\"sv\":\"Hatt\",\"szl\":null,\"tzm\":\"Taraza\",\"uk\":\"Капелюх\",\"vi\":\"Mũ\",\"zh_Hans\":\"帽子\",\"zh_Hant\":\"帽子\"}},{\"number\":33,\"emoji\":\"👓\",\"description\":\"Glasses\",\"unicode\":\"U+1F453\",\"translated_descriptions\":{\"ar\":\"نَظَّارَة\",\"bg\":\"Очила\",\"ca\":\"Ulleres\",\"cs\":\"Brýle\",\"de\":\"Brille\",\"eo\":\"Okulvitroj\",\"es\":\"Gafas\",\"et\":\"Prillid\",\"fa\":\"عینک\",\"fi\":\"Silmälasit\",\"fr\":\"Lunettes\",\"hr\":\"naočale\",\"hu\":\"Szemüveg\",\"id\":\"Kacamata\",\"it\":\"Occhiali\",\"ja\":\"めがね\",\"nb_NO\":\"Briller\",\"nl\":\"Bril\",\"pt\":\"Óculos\",\"pt_BR\":\"Óculos\",\"ru\":\"Очки\",\"si\":null,\"sk\":\"Okuliare\",\"sq\":\"Syze\",\"sr\":\"наочаре\",\"sv\":\"Glasögon\",\"szl\":null,\"tzm\":null,\"uk\":\"Окуляри\",\"vi\":\"Kính mắt\",\"zh_Hans\":\"眼镜\",\"zh_Hant\":\"眼鏡\"}},{\"number\":34,\"emoji\":\"🔧\",\"description\":\"Spanner\",\"unicode\":\"U+1F527\",\"translated_descriptions\":{\"ar\":\"مِفتَاحُ رَبط\",\"bg\":\"Гаечен ключ\",\"ca\":\"Clau anglesa\",\"cs\":\"Klíč\",\"de\":\"Schraubenschlüssel\",\"eo\":\"Ŝraŭbŝlosilo\",\"es\":\"Llave inglesa\",\"et\":\"Mutrivõti\",\"fa\":\"آچار\",\"fi\":\"Kiintoavain\",\"fr\":\"Clé à molette\",\"hr\":\"ključ\",\"hu\":\"Csavarkulcs\",\"id\":\"Kunci Bengkel\",\"it\":\"Chiave inglese\",\"ja\":\"スパナ\",\"nb_NO\":\"Fastnøkkel\",\"nl\":\"Moersleutel\",\"pt\":\"Chave inglesa\",\"pt_BR\":\"Chave inglesa\",\"ru\":\"Ключ\",\"si\":null,\"sk\":\"Vidlicový kľúč\",\"sq\":\"Çelës\",\"sr\":\"кључ\",\"sv\":\"Skruvnyckel\",\"szl\":null,\"tzm\":null,\"uk\":\"Гайковий ключ\",\"vi\":\"Cờ-lê\",\"zh_Hans\":\"扳手\",\"zh_Hant\":\"扳手\"}},{\"number\":35,\"emoji\":\"🎅\",\"description\":\"Santa\",\"unicode\":\"U+1F385\",\"translated_descriptions\":{\"ar\":\"سانتا\",\"bg\":\"Дядо Коледа\",\"ca\":\"Pare Noél\",\"cs\":\"Mikuláš\",\"de\":\"Weihnachtsmann\",\"eo\":\"Kristnaska viro\",\"es\":\"Papá Noel\",\"et\":\"Jõuluvana\",\"fa\":\"بابا نوئل\",\"fi\":\"Joulupukki\",\"fr\":\"Père Noël\",\"hr\":\"deda Mraz\",\"hu\":\"Télapó\",\"id\":\"Santa\",\"it\":\"Babbo Natale\",\"ja\":\"サンタ\",\"nb_NO\":\"Julenisse\",\"nl\":\"Kerstman\",\"pt\":\"Pai Natal\",\"pt_BR\":\"Papai-noel\",\"ru\":\"Санта\",\"si\":null,\"sk\":\"Mikuláš\",\"sq\":\"Babagjyshi i Vitit të Ri\",\"sr\":\"деда Мраз\",\"sv\":\"Tomte\",\"szl\":null,\"tzm\":null,\"uk\":\"Санта Клаус\",\"vi\":\"ông già Nô-en\",\"zh_Hans\":\"圣诞老人\",\"zh_Hant\":\"聖誕老人\"}},{\"number\":36,\"emoji\":\"👍\",\"description\":\"Thumbs Up\",\"unicode\":\"U+1F44D\",\"translated_descriptions\":{\"ar\":\"رَفعُ إِبهَام\",\"bg\":\"Палец нагоре\",\"ca\":\"Polzes amunt\",\"cs\":\"Palec nahoru\",\"de\":\"Daumen Hoch\",\"eo\":\"Dikfingro supren\",\"es\":\"Pulgar arriba\",\"et\":\"Pöidlad püsti\",\"fa\":\"لایک\",\"fi\":\"Peukalo ylös\",\"fr\":\"Pouce en l’air\",\"hr\":\"palac gore\",\"hu\":\"Hüvelykujj fel\",\"id\":\"Jempol\",\"it\":\"Pollice alzato\",\"ja\":\"いいね\",\"nb_NO\":\"Tommel Opp\",\"nl\":\"Duim omhoog\",\"pt\":\"Polegar para cima\",\"pt_BR\":\"Joinha\",\"ru\":\"Большой палец вверх\",\"si\":null,\"sk\":\"Palec nahor\",\"sq\":null,\"sr\":\"палчић горе\",\"sv\":\"Tummen upp\",\"szl\":null,\"tzm\":null,\"uk\":\"Великий палець вгору\",\"vi\":\"Thích\",\"zh_Hans\":\"赞\",\"zh_Hant\":\"讚\"}},{\"number\":37,\"emoji\":\"☂️\",\"description\":\"Umbrella\",\"unicode\":\"U+2602U+FE0F\",\"translated_descriptions\":{\"ar\":\"مِظَلَّة\",\"bg\":\"Чадър\",\"ca\":\"Paraigües\",\"cs\":\"Deštník\",\"de\":\"Regenschirm\",\"eo\":\"Ombrelo\",\"es\":\"Paraguas\",\"et\":\"Vihmavari\",\"fa\":\"چتر\",\"fi\":\"Sateenvarjo\",\"fr\":\"Parapluie\",\"hr\":\"kišobran\",\"hu\":\"Esernyő\",\"id\":\"Payung\",\"it\":\"Ombrello\",\"ja\":\"傘\",\"nb_NO\":\"Paraply\",\"nl\":\"Paraplu\",\"pt\":\"Guarda-chuva\",\"pt_BR\":\"Guarda-chuva\",\"ru\":\"Зонт\",\"si\":null,\"sk\":\"Dáždnik\",\"sq\":\"Ombrellë\",\"sr\":\"кишобран\",\"sv\":\"Paraply\",\"szl\":null,\"tzm\":null,\"uk\":\"Парасолька\",\"vi\":\"Cái ô\",\"zh_Hans\":\"伞\",\"zh_Hant\":\"雨傘\"}},{\"number\":38,\"emoji\":\"⌛\",\"description\":\"Hourglass\",\"unicode\":\"U+231B\",\"translated_descriptions\":{\"ar\":\"سَاعَةٌ رَملِيَّة\",\"bg\":\"Пясъчен часовник\",\"ca\":\"Rellotge de sorra\",\"cs\":\"Přesýpací hodiny\",\"de\":\"Sanduhr\",\"eo\":\"Sablohorloĝo\",\"es\":\"Reloj de arena\",\"et\":\"Liivakell\",\"fa\":\"ساعت شنی\",\"fi\":\"Tiimalasi\",\"fr\":\"Sablier\",\"hr\":\"pješčani sat\",\"hu\":\"Homokóra\",\"id\":\"Jam Pasir\",\"it\":\"Clessidra\",\"ja\":\"砂時計\",\"nb_NO\":\"Timeglass\",\"nl\":\"Zandloper\",\"pt\":\"Ampulheta\",\"pt_BR\":\"Ampulheta\",\"ru\":\"Песочные часы\",\"si\":null,\"sk\":\"Presýpacie hodiny\",\"sq\":\"Klepsidër\",\"sr\":\"пешчаник\",\"sv\":\"Timglas\",\"szl\":null,\"tzm\":null,\"uk\":\"Пісковий годинник\",\"vi\":\"Đồng hồ cát\",\"zh_Hans\":\"沙漏\",\"zh_Hant\":\"沙漏\"}},{\"number\":39,\"emoji\":\"⏰\",\"description\":\"Clock\",\"unicode\":\"U+23F0\",\"translated_descriptions\":{\"ar\":\"سَاعَة\",\"bg\":\"Часовник\",\"ca\":\"Rellotge\",\"cs\":\"Hodiny\",\"de\":\"Uhr\",\"eo\":\"Horloĝo\",\"es\":\"Reloj\",\"et\":\"Kell\",\"fa\":\"ساعت\",\"fi\":\"Pöytäkello\",\"fr\":\"Réveil\",\"hr\":\"sat\",\"hu\":\"Óra\",\"id\":\"Jam\",\"it\":\"Orologio\",\"ja\":\"時計\",\"nb_NO\":\"Klokke\",\"nl\":\"Wekker\",\"pt\":\"Relógio\",\"pt_BR\":\"Relógio\",\"ru\":\"Часы\",\"si\":null,\"sk\":\"Budík\",\"sq\":\"Sahat\",\"sr\":\"сат\",\"sv\":\"Klocka\",\"szl\":null,\"tzm\":null,\"uk\":\"Годинник\",\"vi\":\"Đồng hồ\",\"zh_Hans\":\"时钟\",\"zh_Hant\":\"時鐘\"}},{\"number\":40,\"emoji\":\"🎁\",\"description\":\"Gift\",\"unicode\":\"U+1F381\",\"translated_descriptions\":{\"ar\":\"هَدِيَّة\",\"bg\":\"Подарък\",\"ca\":\"Regal\",\"cs\":\"Dárek\",\"de\":\"Geschenk\",\"eo\":\"Donaco\",\"es\":\"Regalo\",\"et\":\"Kingitus\",\"fa\":\"هدیه\",\"fi\":\"Lahja\",\"fr\":\"Cadeau\",\"hr\":\"poklon\",\"hu\":\"Ajándék\",\"id\":\"Kado\",\"it\":\"Regalo\",\"ja\":\"ギフト\",\"nb_NO\":\"Gave\",\"nl\":\"Geschenk\",\"pt\":\"Presente\",\"pt_BR\":\"Presente\",\"ru\":\"Подарок\",\"si\":null,\"sk\":\"Darček\",\"sq\":\"Dhuratë\",\"sr\":\"поклон\",\"sv\":\"Present\",\"szl\":null,\"tzm\":null,\"uk\":\"Подарунок\",\"vi\":\"Quà tặng\",\"zh_Hans\":\"礼物\",\"zh_Hant\":\"禮物\"}},{\"number\":41,\"emoji\":\"💡\",\"description\":\"Light Bulb\",\"unicode\":\"U+1F4A1\",\"translated_descriptions\":{\"ar\":\"مِصبَاح\",\"bg\":\"Лампа\",\"ca\":\"Bombeta\",\"cs\":\"Žárovka\",\"de\":\"Glühbirne\",\"eo\":\"Lampo\",\"es\":\"Bombilla\",\"et\":\"Lambipirn\",\"fa\":\"لامپ\",\"fi\":\"Hehkulamppu\",\"fr\":\"Ampoule\",\"hr\":\"žarulja\",\"hu\":\"Égő\",\"id\":\"Bohlam Lampu\",\"it\":\"Lampadina\",\"ja\":\"電球\",\"nb_NO\":\"Lyspære\",\"nl\":\"Gloeilamp\",\"pt\":\"Lâmpada\",\"pt_BR\":\"Lâmpada\",\"ru\":\"Лампочка\",\"si\":null,\"sk\":\"Žiarovka\",\"sq\":\"Llambë\",\"sr\":\"сијалица\",\"sv\":\"Lampa\",\"szl\":null,\"tzm\":null,\"uk\":\"Лампочка\",\"vi\":\"Bóng đèn tròn\",\"zh_Hans\":\"灯泡\",\"zh_Hant\":\"燈泡\"}},{\"number\":42,\"emoji\":\"📕\",\"description\":\"Book\",\"unicode\":\"U+1F4D5\",\"translated_descriptions\":{\"ar\":\"كِتَاب\",\"bg\":\"Книга\",\"ca\":\"Llibre\",\"cs\":\"Kniha\",\"de\":\"Buch\",\"eo\":\"Libro\",\"es\":\"Libro\",\"et\":\"Raamat\",\"fa\":\"کتاب\",\"fi\":\"Kirja\",\"fr\":\"Livre\",\"hr\":\"knjiga\",\"hu\":\"Könyv\",\"id\":\"Buku\",\"it\":\"Libro\",\"ja\":\"本\",\"nb_NO\":\"Bok\",\"nl\":\"Boek\",\"pt\":\"Livro\",\"pt_BR\":\"Livro\",\"ru\":\"Книга\",\"si\":null,\"sk\":\"Kniha\",\"sq\":\"Libër\",\"sr\":\"књига\",\"sv\":\"Bok\",\"szl\":null,\"tzm\":\"Adlis\",\"uk\":\"Книга\",\"vi\":\"Sách\",\"zh_Hans\":\"书\",\"zh_Hant\":\"書\"}},{\"number\":43,\"emoji\":\"✏️\",\"description\":\"Pencil\",\"unicode\":\"U+270FU+FE0F\",\"translated_descriptions\":{\"ar\":\"قَلَمُ رَصاص\",\"bg\":\"Молив\",\"ca\":\"Llapis\",\"cs\":\"Tužka\",\"de\":\"Bleistift\",\"eo\":\"Krajono\",\"es\":\"Lápiz\",\"et\":\"Pliiats\",\"fa\":\"مداد\",\"fi\":\"Lyijykynä\",\"fr\":\"Crayon\",\"hr\":\"olovka\",\"hu\":\"Ceruza\",\"id\":\"Pensil\",\"it\":\"Matita\",\"ja\":\"鉛筆\",\"nb_NO\":\"Blyant\",\"nl\":\"Potlood\",\"pt\":\"Lápis\",\"pt_BR\":\"Lápis\",\"ru\":\"Карандаш\",\"si\":null,\"sk\":\"Ceruzka\",\"sq\":\"Laps\",\"sr\":\"оловка\",\"sv\":\"Penna\",\"szl\":null,\"tzm\":null,\"uk\":\"Олівець\",\"vi\":\"Viết chì\",\"zh_Hans\":\"铅笔\",\"zh_Hant\":\"鉛筆\"}},{\"number\":44,\"emoji\":\"📎\",\"description\":\"Paperclip\",\"unicode\":\"U+1F4CE\",\"translated_descriptions\":{\"ar\":\"مِشبَكُ وَرَق\",\"bg\":\"Кламер\",\"ca\":\"Clip\",\"cs\":\"Sponka\",\"de\":\"Büroklammer\",\"eo\":\"Paperkuntenilo\",\"es\":\"Clip\",\"et\":\"Kirjaklamber\",\"fa\":\"گیره کاغذ\",\"fi\":\"Paperiliitin\",\"fr\":\"Trombone\",\"hr\":\"spajalica\",\"hu\":\"Gémkapocs\",\"id\":\"Klip Kertas\",\"it\":\"Graffetta\",\"ja\":\"クリップ\",\"nb_NO\":\"BInders\",\"nl\":\"Papierklemmetje\",\"pt\":\"Clipe\",\"pt_BR\":\"Clipe de papel\",\"ru\":\"Скрепка\",\"si\":null,\"sk\":\"Kancelárska sponka\",\"sq\":\"Kapëse\",\"sr\":\"спајалица\",\"sv\":\"Gem\",\"szl\":null,\"tzm\":null,\"uk\":\"Спиначка\",\"vi\":\"Kẹp giấy\",\"zh_Hans\":\"回形针\",\"zh_Hant\":\"迴紋針\"}},{\"number\":45,\"emoji\":\"✂️\",\"description\":\"Scissors\",\"unicode\":\"U+2702U+FE0F\",\"translated_descriptions\":{\"ar\":\"مِقَصّ\",\"bg\":\"Ножици\",\"ca\":\"Tisores\",\"cs\":\"Nůžky\",\"de\":\"Schere\",\"eo\":\"Tondilo\",\"es\":\"Tijeras\",\"et\":\"Käärid\",\"fa\":\"قیچی\",\"fi\":\"Sakset\",\"fr\":\"Ciseaux\",\"hr\":\"škare\",\"hu\":\"Olló\",\"id\":\"Gunting\",\"it\":\"Forbici\",\"ja\":\"はさみ\",\"nb_NO\":\"Saks\",\"nl\":\"Schaar\",\"pt\":\"Tesoura\",\"pt_BR\":\"Tesoura\",\"ru\":\"Ножницы\",\"si\":null,\"sk\":\"Nožnice\",\"sq\":\"Gërshërë\",\"sr\":\"маказе\",\"sv\":\"Sax\",\"szl\":null,\"tzm\":null,\"uk\":\"Ножиці\",\"vi\":\"Cái kéo\",\"zh_Hans\":\"剪刀\",\"zh_Hant\":\"剪刀\"}},{\"number\":46,\"emoji\":\"🔒\",\"description\":\"Lock\",\"unicode\":\"U+1F512\",\"translated_descriptions\":{\"ar\":\"قُفل\",\"bg\":\"Катинар\",\"ca\":\"Cadenat\",\"cs\":\"Zámek\",\"de\":\"Schloss\",\"eo\":\"Seruro\",\"es\":\"Candado\",\"et\":\"Lukk\",\"fa\":\"قفل\",\"fi\":\"Lukko\",\"fr\":\"Cadenas\",\"hr\":\"zaključati\",\"hu\":\"Lakat\",\"id\":\"Gembok\",\"it\":\"Lucchetto\",\"ja\":\"錠前\",\"nb_NO\":\"Lås\",\"nl\":\"Slot\",\"pt\":\"Cadeado\",\"pt_BR\":\"Cadeado\",\"ru\":\"Замок\",\"si\":null,\"sk\":\"Zámka\",\"sq\":\"Dry\",\"sr\":\"катанац\",\"sv\":\"Lås\",\"szl\":null,\"tzm\":null,\"uk\":\"Замок\",\"vi\":\"Ổ khóa\",\"zh_Hans\":\"锁\",\"zh_Hant\":\"鎖頭\"}},{\"number\":47,\"emoji\":\"🔑\",\"description\":\"Key\",\"unicode\":\"U+1F511\",\"translated_descriptions\":{\"ar\":\"مِفتَاح\",\"bg\":\"Ключ\",\"ca\":\"Clau\",\"cs\":\"Klíč ke dveřím\",\"de\":\"Schlüssel\",\"eo\":\"Ŝlosilo\",\"es\":\"Llave\",\"et\":\"Võti\",\"fa\":\"کلید\",\"fi\":\"Avain\",\"fr\":\"Clé\",\"hr\":\"ključ\",\"hu\":\"Kulcs\",\"id\":\"Kunci\",\"it\":\"Chiave\",\"ja\":\"鍵\",\"nb_NO\":\"Nøkkel\",\"nl\":\"Sleutel\",\"pt\":\"Chave\",\"pt_BR\":\"Chave\",\"ru\":\"Ключ\",\"si\":null,\"sk\":\"Kľúč\",\"sq\":\"Çelës\",\"sr\":\"кључ\",\"sv\":\"Nyckel\",\"szl\":null,\"tzm\":\"Tasarut\",\"uk\":\"Ключ\",\"vi\":\"Chìa khóa\",\"zh_Hans\":\"钥匙\",\"zh_Hant\":\"鑰匙\"}},{\"number\":48,\"emoji\":\"🔨\",\"description\":\"Hammer\",\"unicode\":\"U+1F528\",\"translated_descriptions\":{\"ar\":\"مِطرَقَة\",\"bg\":\"Чук\",\"ca\":\"Martell\",\"cs\":\"Kladivo\",\"de\":\"Hammer\",\"eo\":\"Martelo\",\"es\":\"Martillo\",\"et\":\"Haamer\",\"fa\":\"چکش\",\"fi\":\"Vasara\",\"fr\":\"Marteau\",\"hr\":\"čekić\",\"hu\":\"Kalapács\",\"id\":\"Palu\",\"it\":\"Martello\",\"ja\":\"金槌\",\"nb_NO\":\"Hammer\",\"nl\":\"Hamer\",\"pt\":\"Martelo\",\"pt_BR\":\"Martelo\",\"ru\":\"Молоток\",\"si\":null,\"sk\":\"Kladivo\",\"sq\":\"Çekiç\",\"sr\":\"чекић\",\"sv\":\"Hammare\",\"szl\":null,\"tzm\":null,\"uk\":\"Молоток\",\"vi\":\"Búa\",\"zh_Hans\":\"锤子\",\"zh_Hant\":\"鎚子\"}},{\"number\":49,\"emoji\":\"☎️\",\"description\":\"Telephone\",\"unicode\":\"U+260EU+FE0F\",\"translated_descriptions\":{\"ar\":\"تِلِفُون\",\"bg\":\"Телефон\",\"ca\":\"Telèfon\",\"cs\":\"Telefon\",\"de\":\"Telefon\",\"eo\":\"Telefono\",\"es\":\"Teléfono\",\"et\":\"Telefon\",\"fa\":\"تلفن\",\"fi\":\"Puhelin\",\"fr\":\"Téléphone\",\"hr\":\"telefon\",\"hu\":\"Telefon\",\"id\":\"Telepon\",\"it\":\"Telefono\",\"ja\":\"電話機\",\"nb_NO\":\"Telefon\",\"nl\":\"Telefoon\",\"pt\":\"Telefone\",\"pt_BR\":\"Telefone\",\"ru\":\"Телефон\",\"si\":null,\"sk\":\"Telefón\",\"sq\":\"Telefon\",\"sr\":\"телефон\",\"sv\":\"Telefon\",\"szl\":null,\"tzm\":\"Atilifun\",\"uk\":\"Телефон\",\"vi\":\"Điện thoại\",\"zh_Hans\":\"电话\",\"zh_Hant\":\"電話\"}},{\"number\":50,\"emoji\":\"🏁\",\"description\":\"Flag\",\"unicode\":\"U+1F3C1\",\"translated_descriptions\":{\"ar\":\"عَلَم\",\"bg\":\"Флаг\",\"ca\":\"Bandera\",\"cs\":\"Vlajka\",\"de\":\"Flagge\",\"eo\":\"Flago\",\"es\":\"Bandera\",\"et\":\"Lipp\",\"fa\":\"پرچم\",\"fi\":\"Lippu\",\"fr\":\"Drapeau\",\"hr\":\"zastava\",\"hu\":\"Zászló\",\"id\":\"Bendera\",\"it\":\"Bandiera\",\"ja\":\"旗\",\"nb_NO\":\"Flagg\",\"nl\":\"Vlag\",\"pt\":\"Bandeira\",\"pt_BR\":\"Bandeira\",\"ru\":\"Флаг\",\"si\":null,\"sk\":\"Zástava\",\"sq\":\"Flamur\",\"sr\":\"застава\",\"sv\":\"Flagga\",\"szl\":null,\"tzm\":\"Acenyal\",\"uk\":\"Прапор\",\"vi\":\"Lá cờ\",\"zh_Hans\":\"旗帜\",\"zh_Hant\":\"旗幟\"}},{\"number\":51,\"emoji\":\"🚂\",\"description\":\"Train\",\"unicode\":\"U+1F682\",\"translated_descriptions\":{\"ar\":\"قِطَار\",\"bg\":\"Влак\",\"ca\":\"Tren\",\"cs\":\"Vlak\",\"de\":\"Zug\",\"eo\":\"Vagonaro\",\"es\":\"Tren\",\"et\":\"Rong\",\"fa\":\"قطار\",\"fi\":\"Juna\",\"fr\":\"Train\",\"hr\":\"vlak\",\"hu\":\"Vonat\",\"id\":\"Kereta Api\",\"it\":\"Treno\",\"ja\":\"電車\",\"nb_NO\":\"Tog\",\"nl\":\"Trein\",\"pt\":\"Comboio\",\"pt_BR\":\"Trem\",\"ru\":\"Поезд\",\"si\":null,\"sk\":\"Vlak\",\"sq\":\"Tren\",\"sr\":\"воз\",\"sv\":\"Tåg\",\"szl\":null,\"tzm\":null,\"uk\":\"Потяг\",\"vi\":\"Xe lửa\",\"zh_Hans\":\"火车\",\"zh_Hant\":\"火車\"}},{\"number\":52,\"emoji\":\"🚲\",\"description\":\"Bicycle\",\"unicode\":\"U+1F6B2\",\"translated_descriptions\":{\"ar\":\"دَرّاجَة\",\"bg\":\"Колело\",\"ca\":\"Bicicleta\",\"cs\":\"Kolo\",\"de\":\"Fahrrad\",\"eo\":\"Biciklo\",\"es\":\"Bicicleta\",\"et\":\"Jalgratas\",\"fa\":\"دوچرخه\",\"fi\":\"Polkupyörä\",\"fr\":\"Vélo\",\"hr\":\"bicikl\",\"hu\":\"Kerékpár\",\"id\":\"Sepeda\",\"it\":\"Bicicletta\",\"ja\":\"自転車\",\"nb_NO\":\"Sykkel\",\"nl\":\"Fiets\",\"pt\":\"Bicicleta\",\"pt_BR\":\"Bicicleta\",\"ru\":\"Велосипед\",\"si\":null,\"sk\":\"Bicykel\",\"sq\":\"Biçikletë\",\"sr\":\"бицикл\",\"sv\":\"Cykel\",\"szl\":null,\"tzm\":null,\"uk\":\"Велосипед\",\"vi\":\"Xe đạp\",\"zh_Hans\":\"自行车\",\"zh_Hant\":\"腳踏車\"}},{\"number\":53,\"emoji\":\"✈️\",\"description\":\"Aeroplane\",\"unicode\":\"U+2708U+FE0F\",\"translated_descriptions\":{\"ar\":\"طَائِرة\",\"bg\":\"Самолет\",\"ca\":\"Avió\",\"cs\":\"Letadlo\",\"de\":\"Flugzeug\",\"eo\":\"Aviadilo\",\"es\":\"Avión\",\"et\":\"Lennuk\",\"fa\":\"هواپیما\",\"fi\":\"Lentokone\",\"fr\":\"Avion\",\"hr\":\"avion\",\"hu\":\"Repülő\",\"id\":\"Pesawat\",\"it\":\"Aeroplano\",\"ja\":\"飛行機\",\"nb_NO\":\"Fly\",\"nl\":\"Vliegtuig\",\"pt\":\"Avião\",\"pt_BR\":\"Avião\",\"ru\":\"Самолет\",\"si\":null,\"sk\":\"Lietadlo\",\"sq\":\"Avion\",\"sr\":\"авион\",\"sv\":\"Flygplan\",\"szl\":null,\"tzm\":null,\"uk\":\"Літак\",\"vi\":\"Máy bay\",\"zh_Hans\":\"飞机\",\"zh_Hant\":\"飛機\"}},{\"number\":54,\"emoji\":\"🚀\",\"description\":\"Rocket\",\"unicode\":\"U+1F680\",\"translated_descriptions\":{\"ar\":\"صَارُوخ\",\"bg\":\"Ракета\",\"ca\":\"Coet\",\"cs\":\"Raketa\",\"de\":\"Rakete\",\"eo\":\"Raketo\",\"es\":\"Cohete\",\"et\":\"Rakett\",\"fa\":\"موشک\",\"fi\":\"Raketti\",\"fr\":\"Fusée\",\"hr\":\"raketa\",\"hu\":\"Rakáta\",\"id\":\"Roket\",\"it\":\"Razzo\",\"ja\":\"ロケット\",\"nb_NO\":\"Rakett\",\"nl\":\"Raket\",\"pt\":\"Foguetão\",\"pt_BR\":\"Foguete\",\"ru\":\"Ракета\",\"si\":null,\"sk\":\"Raketa\",\"sq\":\"Raketë\",\"sr\":\"ракета\",\"sv\":\"Raket\",\"szl\":null,\"tzm\":null,\"uk\":\"Ракета\",\"vi\":\"Tên lửa\",\"zh_Hans\":\"火箭\",\"zh_Hant\":\"火箭\"}},{\"number\":55,\"emoji\":\"🏆\",\"description\":\"Trophy\",\"unicode\":\"U+1F3C6\",\"translated_descriptions\":{\"ar\":\"كَأسُ النَّصر\",\"bg\":\"Трофей\",\"ca\":\"Trofeu\",\"cs\":\"Pohár\",\"de\":\"Pokal\",\"eo\":\"Trofeo\",\"es\":\"Trofeo\",\"et\":\"Auhind\",\"fa\":\"جام\",\"fi\":\"Palkinto\",\"fr\":\"Trophée\",\"hr\":\"trofej\",\"hu\":\"Trófea\",\"id\":\"Piala\",\"it\":\"Trofeo\",\"ja\":\"トロフィー\",\"nb_NO\":\"Pokal\",\"nl\":\"Trofee\",\"pt\":\"Troféu\",\"pt_BR\":\"Troféu\",\"ru\":\"Кубок\",\"si\":null,\"sk\":\"Trofej\",\"sq\":\"Trofe\",\"sr\":\"пехар\",\"sv\":\"Trofé\",\"szl\":null,\"tzm\":null,\"uk\":\"Приз\",\"vi\":\"Cúp\",\"zh_Hans\":\"奖杯\",\"zh_Hant\":\"獎盃\"}},{\"number\":56,\"emoji\":\"⚽\",\"description\":\"Ball\",\"unicode\":\"U+26BD\",\"translated_descriptions\":{\"ar\":\"كُرَة\",\"bg\":\"Топка\",\"ca\":\"Pilota\",\"cs\":\"Míč\",\"de\":\"Ball\",\"eo\":\"Pilko\",\"es\":\"Bola\",\"et\":\"Pall\",\"fa\":\"توپ\",\"fi\":\"Pallo\",\"fr\":\"Ballon\",\"hr\":\"lopta\",\"hu\":\"Labda\",\"id\":\"Bola\",\"it\":\"Palla\",\"ja\":\"ボール\",\"nb_NO\":\"Ball\",\"nl\":\"Bal\",\"pt\":\"Bola\",\"pt_BR\":\"Bola\",\"ru\":\"Мяч\",\"si\":null,\"sk\":\"Lopta\",\"sq\":\"Top\",\"sr\":\"лопта\",\"sv\":\"Boll\",\"szl\":null,\"tzm\":\"Tcama\",\"uk\":\"М'яч\",\"vi\":\"Banh\",\"zh_Hans\":\"球\",\"zh_Hant\":\"足球\"}},{\"number\":57,\"emoji\":\"🎸\",\"description\":\"Guitar\",\"unicode\":\"U+1F3B8\",\"translated_descriptions\":{\"ar\":\"غيتار\",\"bg\":\"Китара\",\"ca\":\"Guitarra\",\"cs\":\"Kytara\",\"de\":\"Gitarre\",\"eo\":\"Gitaro\",\"es\":\"Guitarra\",\"et\":\"Kitarr\",\"fa\":\"گیتار\",\"fi\":\"Kitara\",\"fr\":\"Guitare\",\"hr\":\"gitara\",\"hu\":\"Gitár\",\"id\":\"Gitar\",\"it\":\"Chitarra\",\"ja\":\"ギター\",\"nb_NO\":\"Gitar\",\"nl\":\"Gitaar\",\"pt\":\"Guitarra\",\"pt_BR\":\"Guitarra\",\"ru\":\"Гитара\",\"si\":null,\"sk\":\"Gitara\",\"sq\":\"Kitarë\",\"sr\":\"гитара\",\"sv\":\"Gitarr\",\"szl\":null,\"tzm\":\"Agiṭaṛ\",\"uk\":\"Гітара\",\"vi\":\"Ghi-ta\",\"zh_Hans\":\"吉他\",\"zh_Hant\":\"吉他\"}},{\"number\":58,\"emoji\":\"🎺\",\"description\":\"Trumpet\",\"unicode\":\"U+1F3BA\",\"translated_descriptions\":{\"ar\":\"بُوق\",\"bg\":\"Тромпет\",\"ca\":\"Trompeta\",\"cs\":\"Trumpeta\",\"de\":\"Trompete\",\"eo\":\"Trumpeto\",\"es\":\"Trompeta\",\"et\":\"Trompet\",\"fa\":\"شیپور\",\"fi\":\"Trumpetti\",\"fr\":\"Trompette\",\"hr\":\"truba\",\"hu\":\"Trombita\",\"id\":\"Terompet\",\"it\":\"Trombetta\",\"ja\":\"トランペット\",\"nb_NO\":\"Trompet\",\"nl\":\"Trompet\",\"pt\":\"Trompete\",\"pt_BR\":\"Trombeta\",\"ru\":\"Труба\",\"si\":null,\"sk\":\"Trúbka\",\"sq\":\"Trombë\",\"sr\":\"труба\",\"sv\":\"Trumpet\",\"szl\":null,\"tzm\":null,\"uk\":\"Труба\",\"vi\":\"Kèn\",\"zh_Hans\":\"喇叭\",\"zh_Hant\":\"喇叭\"}},{\"number\":59,\"emoji\":\"🔔\",\"description\":\"Bell\",\"unicode\":\"U+1F514\",\"translated_descriptions\":{\"ar\":\"جَرَس\",\"bg\":\"Звънец\",\"ca\":\"Campana\",\"cs\":\"Zvonek\",\"de\":\"Glocke\",\"eo\":\"Sonorilo\",\"es\":\"Campana\",\"et\":\"Kelluke\",\"fa\":\"زنگ\",\"fi\":\"Soittokello\",\"fr\":\"Cloche\",\"hr\":\"zvono\",\"hu\":\"Harang\",\"id\":\"Lonceng\",\"it\":\"Campana\",\"ja\":\"ベル\",\"nb_NO\":\"Bjelle\",\"nl\":\"Bel\",\"pt\":\"Sino\",\"pt_BR\":\"Sino\",\"ru\":\"Колокол\",\"si\":null,\"sk\":\"Zvonec\",\"sq\":\"Kambanë\",\"sr\":\"звоно\",\"sv\":\"Bjällra\",\"szl\":null,\"tzm\":null,\"uk\":\"Дзвін\",\"vi\":\"Chuông\",\"zh_Hans\":\"铃铛\",\"zh_Hant\":\"鈴鐺\"}},{\"number\":60,\"emoji\":\"⚓\",\"description\":\"Anchor\",\"unicode\":\"U+2693\",\"translated_descriptions\":{\"ar\":\"مِرسَاة\",\"bg\":\"Котва\",\"ca\":\"Àncora\",\"cs\":\"Kotva\",\"de\":\"Anker\",\"eo\":\"Ankro\",\"es\":\"Ancla\",\"et\":\"Ankur\",\"fa\":\"لنگر\",\"fi\":\"Ankkuri\",\"fr\":\"Ancre\",\"hr\":\"sidro\",\"hu\":\"Horgony\",\"id\":\"Jangkar\",\"it\":\"Ancora\",\"ja\":\"いかり\",\"nb_NO\":\"Anker\",\"nl\":\"Anker\",\"pt\":\"Âncora\",\"pt_BR\":\"Âncora\",\"ru\":\"Якорь\",\"si\":null,\"sk\":\"Kotva\",\"sq\":\"Spirancë\",\"sr\":\"сидро\",\"sv\":\"Ankare\",\"szl\":null,\"tzm\":null,\"uk\":\"Якір\",\"vi\":\"Mỏ neo\",\"zh_Hans\":\"锚\",\"zh_Hant\":\"船錨\"}},{\"number\":61,\"emoji\":\"🎧\",\"description\":\"Headphones\",\"unicode\":\"U+1F3A7\",\"translated_descriptions\":{\"ar\":\"سَمّاعَة رَأس\",\"bg\":\"Слушалки\",\"ca\":\"Auriculars\",\"cs\":\"Sluchátka\",\"de\":\"Kopfhörer\",\"eo\":\"Kapaŭdilo\",\"es\":\"Cascos\",\"et\":\"Kõrvaklapid\",\"fa\":\"هدفون\",\"fi\":\"Kuulokkeet\",\"fr\":\"Casque audio\",\"hr\":\"slušalice\",\"hu\":\"Fejhallgató\",\"id\":\"Headphone\",\"it\":\"Cuffie\",\"ja\":\"ヘッドホン\",\"nb_NO\":\"Hodetelefoner\",\"nl\":\"Koptelefoon\",\"pt\":\"Fones\",\"pt_BR\":\"Fones de ouvido\",\"ru\":\"Наушники\",\"si\":null,\"sk\":\"Slúchadlá\",\"sq\":\"Kufje\",\"sr\":\"слушалице\",\"sv\":\"Hörlurar\",\"szl\":null,\"tzm\":null,\"uk\":\"Навушники\",\"vi\":\"Tai nghe\",\"zh_Hans\":\"耳机\",\"zh_Hant\":\"耳機\"}},{\"number\":62,\"emoji\":\"📁\",\"description\":\"Folder\",\"unicode\":\"U+1F4C1\",\"translated_descriptions\":{\"ar\":\"مُجَلَّد\",\"bg\":\"Папка\",\"ca\":\"Carpeta\",\"cs\":\"Složka\",\"de\":\"Ordner\",\"eo\":\"Dosierujo\",\"es\":\"Carpeta\",\"et\":\"Kaust\",\"fa\":\"پوشه\",\"fi\":\"Kansio\",\"fr\":\"Dossier\",\"hr\":\"mapu\",\"hu\":\"Mappa\",\"id\":\"Map\",\"it\":\"Cartella\",\"ja\":\"フォルダー\",\"nb_NO\":\"Mappe\",\"nl\":\"Map\",\"pt\":\"Pasta\",\"pt_BR\":\"Pasta\",\"ru\":\"Папка\",\"si\":null,\"sk\":\"Fascikel\",\"sq\":\"Dosje\",\"sr\":\"фасцикла\",\"sv\":\"Mapp\",\"szl\":null,\"tzm\":\"Asdaw\",\"uk\":\"Тека\",\"vi\":\"Thư mục\",\"zh_Hans\":\"文件夹\",\"zh_Hant\":\"資料夾\"}},{\"number\":63,\"emoji\":\"📌\",\"description\":\"Pin\",\"unicode\":\"U+1F4CC\",\"translated_descriptions\":{\"ar\":\"دَبُّوس\",\"bg\":\"Кабърче\",\"ca\":\"Xinxeta\",\"cs\":\"Špendlík\",\"de\":\"Stecknadel\",\"eo\":\"Pinglo\",\"es\":\"Alfiler\",\"et\":\"Nööpnõel\",\"fa\":\"سنجاق\",\"fi\":\"Nuppineula\",\"fr\":\"Punaise\",\"hr\":\"pribadača\",\"hu\":\"Rajszeg\",\"id\":\"Pin\",\"it\":\"Puntina\",\"ja\":\"ピン\",\"nb_NO\":\"Tegnestift\",\"nl\":\"Duimspijker\",\"pt\":\"Pionés\",\"pt_BR\":\"Alfinete\",\"ru\":\"Булавка\",\"si\":null,\"sk\":\"Špendlík\",\"sq\":\"Karficë\",\"sr\":\"чиода\",\"sv\":\"Häftstift\",\"szl\":null,\"tzm\":null,\"uk\":\"Кнопка\",\"vi\":\"Ghim\",\"zh_Hans\":\"图钉\",\"zh_Hant\":\"圖釘\"}}]")).map(({ emoji: e, description: t, translated_descriptions: n }) => [e, [t, Object.keys(n).reduce((e, t) => {
	for (let r of CI(t)) e[r] = n[t];
	return e;
}, {})]]));
function aR(e, t) {
	let n = iR.get(e);
	if (!n) throw Error(`Emoji mapping not found for emoji ${e}`);
	let [r, i] = n;
	for (let e of CI(t)) if (i[e]) return i[e];
	return r;
}
var oR = {
	container: "_container_1lqqy_8",
	segment: "_segment_1lqqy_15",
	emoji: "_emoji_1lqqy_23",
	label: "_label_1lqqy_29"
};
//#endregion
//#region src/crypto/SasEmoji/SasEmoji.tsx
function sR({ emoji: e, className: n }) {
	let { language: r } = q(), i = e.map((e, n) => /* @__PURE__ */ t.createElement("div", {
		className: oR.segment,
		key: n
	}, /* @__PURE__ */ t.createElement("div", {
		className: oR.emoji,
		"aria-hidden": !0
	}, e), /* @__PURE__ */ t.createElement("div", { className: oR.label }, aR(e, r))));
	return /* @__PURE__ */ t.createElement("div", { className: (0, V.default)(oR.container, n) }, i);
}
//#endregion
//#region src/core/viewmodel/Disposables.ts
var cR = class {
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
}, lR = class {
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
}, uR = class {
	listeners = /* @__PURE__ */ new Set();
	add = (e) => (this.listeners.add(e), () => {
		this.listeners.delete(e);
	});
	emit = () => {
		for (let e of this.listeners) e();
	};
}, dR = class {
	subs;
	snapshot;
	props;
	disposables = new cR();
	constructor(e, t) {
		this.props = e, this.subs = new uR(), this.snapshot = new lR(t, () => {
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
}, fR = class {
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
function pR(e) {
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
function mR(e, t) {
	return p(() => {
		let n = new fR(e);
		return Object.assign(n, t), n;
	}, [e, t]);
}
//#endregion
//#region src/core/viewmodel/useViewModel.ts
function X(e) {
	return g(e.subscribe, e.getSnapshot, e.getSnapshot);
}
var hR = {
	thumbnail: "_thumbnail_irnbt_8",
	link: "_link_irnbt_16",
	container: "_container_irnbt_21",
	wrapImageCaption: "_wrapImageCaption_irnbt_28",
	image: "_image_irnbt_36",
	caption: "_caption_irnbt_37",
	title: "_title_irnbt_59",
	description: "_description_irnbt_60"
}, gR = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", _R = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", vR = "numeric", yR = "ascii", bR = "alpha", xR = "asciinumeric", SR = "alphanumeric", CR = "domain", wR = "emoji", TR = "scheme", ER = "slashscheme", DR = "whitespace";
function OR(e, t) {
	return e in t || (t[e] = []), t[e];
}
function kR(e, t, n) {
	t[vR] && (t[xR] = !0, t[SR] = !0), t[yR] && (t[xR] = !0, t[bR] = !0), t[xR] && (t[SR] = !0), t[bR] && (t[SR] = !0), t[SR] && (t[CR] = !0), t[wR] && (t[CR] = !0);
	for (let r in t) {
		let t = OR(r, n);
		t.indexOf(e) < 0 && t.push(e);
	}
}
function AR(e, t) {
	let n = {};
	for (let r in t) t[r].indexOf(e) >= 0 && (n[r] = !0);
	return n;
}
function jR(e = null) {
	this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
jR.groups = {}, jR.prototype = {
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
		r ||= jR.groups;
		let i;
		return t && t.j ? i = t : (i = new jR(t), n && r && kR(t, n, r)), this.jr.push([e, i]), i;
	},
	ts(e, t, n, r) {
		let i = this, a = e.length;
		if (!a) return i;
		for (let t = 0; t < a - 1; t++) i = i.tt(e[t]);
		return i.tt(e[a - 1], t, n, r);
	},
	tt(e, t, n, r) {
		r ||= jR.groups;
		let i = this;
		if (t && t.j) return i.j[e] = t, t;
		let a = t, o, s = i.go(e);
		return s ? (o = new jR(), Object.assign(o.j, s.j), o.jr.push.apply(o.jr, s.jr), o.jd = s.jd, o.t = s.t) : o = new jR(), a && (r && (o.t && typeof o.t == "string" ? kR(a, Object.assign(AR(o.t, r), n), r) : n && kR(a, n, r)), o.t = a), i.j[e] = o, o;
	}
};
var Z = (e, t, n, r, i) => e.ta(t, n, r, i), MR = (e, t, n, r, i) => e.tr(t, n, r, i), NR = (e, t, n, r, i) => e.ts(t, n, r, i), Q = (e, t, n, r, i) => e.tt(t, n, r, i), PR = "WORD", FR = "UWORD", IR = "ASCIINUMERICAL", LR = "ALPHANUMERICAL", RR = "LOCALHOST", zR = "TLD", BR = "UTLD", VR = "SCHEME", HR = "SLASH_SCHEME", UR = "NUM", WR = "WS", GR = "NL", KR = "OPENBRACE", qR = "CLOSEBRACE", JR = "OPENBRACKET", YR = "CLOSEBRACKET", XR = "OPENPAREN", ZR = "CLOSEPAREN", QR = "OPENANGLEBRACKET", $R = "CLOSEANGLEBRACKET", ez = "FULLWIDTHLEFTPAREN", tz = "FULLWIDTHRIGHTPAREN", nz = "LEFTCORNERBRACKET", rz = "RIGHTCORNERBRACKET", iz = "LEFTWHITECORNERBRACKET", az = "RIGHTWHITECORNERBRACKET", oz = "FULLWIDTHLESSTHAN", sz = "FULLWIDTHGREATERTHAN", cz = "AMPERSAND", lz = "APOSTROPHE", uz = "ASTERISK", dz = "AT", fz = "BACKSLASH", pz = "BACKTICK", mz = "CARET", hz = "COLON", gz = "COMMA", _z = "DOLLAR", vz = "DOT", yz = "EQUALS", bz = "EXCLAMATION", xz = "HYPHEN", Sz = "PERCENT", Cz = "PIPE", wz = "PLUS", Tz = "POUND", Ez = "QUERY", Dz = "QUOTE", Oz = "FULLWIDTHMIDDLEDOT", kz = "SEMI", Az = "SLASH", jz = "TILDE", Mz = "UNDERSCORE", Nz = "EMOJI", Pz = "SYM", Fz = /* @__PURE__ */ Object.freeze({
	__proto__: null,
	ALPHANUMERICAL: LR,
	AMPERSAND: cz,
	APOSTROPHE: lz,
	ASCIINUMERICAL: IR,
	ASTERISK: uz,
	AT: dz,
	BACKSLASH: fz,
	BACKTICK: pz,
	CARET: mz,
	CLOSEANGLEBRACKET: $R,
	CLOSEBRACE: qR,
	CLOSEBRACKET: YR,
	CLOSEPAREN: ZR,
	COLON: hz,
	COMMA: gz,
	DOLLAR: _z,
	DOT: vz,
	EMOJI: Nz,
	EQUALS: yz,
	EXCLAMATION: bz,
	FULLWIDTHGREATERTHAN: sz,
	FULLWIDTHLEFTPAREN: ez,
	FULLWIDTHLESSTHAN: oz,
	FULLWIDTHMIDDLEDOT: Oz,
	FULLWIDTHRIGHTPAREN: tz,
	HYPHEN: xz,
	LEFTCORNERBRACKET: nz,
	LEFTWHITECORNERBRACKET: iz,
	LOCALHOST: RR,
	NL: GR,
	NUM: UR,
	OPENANGLEBRACKET: QR,
	OPENBRACE: KR,
	OPENBRACKET: JR,
	OPENPAREN: XR,
	PERCENT: Sz,
	PIPE: Cz,
	PLUS: wz,
	POUND: Tz,
	QUERY: Ez,
	QUOTE: Dz,
	RIGHTCORNERBRACKET: rz,
	RIGHTWHITECORNERBRACKET: az,
	SCHEME: VR,
	SEMI: kz,
	SLASH: Az,
	SLASH_SCHEME: HR,
	SYM: Pz,
	TILDE: jz,
	TLD: zR,
	UNDERSCORE: Mz,
	UTLD: BR,
	UWORD: FR,
	WORD: PR,
	WS: WR
}), Iz = /[a-z]/, Lz = /\p{L}/u, Rz = /\p{Emoji}/u, zz = /\d/, Bz = /\s/, Vz = "\r", Hz = "\n", Uz = "️", Wz = "‍", Gz = "￼", Kz = null, qz = null;
function Jz(e = []) {
	let t = {};
	jR.groups = t;
	let n = new jR();
	Kz ??= Qz(gR), qz ??= Qz(_R), Q(n, "'", lz), Q(n, "{", KR), Q(n, "}", qR), Q(n, "[", JR), Q(n, "]", YR), Q(n, "(", XR), Q(n, ")", ZR), Q(n, "<", QR), Q(n, ">", $R), Q(n, "（", ez), Q(n, "）", tz), Q(n, "「", nz), Q(n, "」", rz), Q(n, "『", iz), Q(n, "』", az), Q(n, "＜", oz), Q(n, "＞", sz), Q(n, "&", cz), Q(n, "*", uz), Q(n, "@", dz), Q(n, "`", pz), Q(n, "^", mz), Q(n, ":", hz), Q(n, ",", gz), Q(n, "$", _z), Q(n, ".", vz), Q(n, "=", yz), Q(n, "!", bz), Q(n, "-", xz), Q(n, "%", Sz), Q(n, "|", Cz), Q(n, "+", wz), Q(n, "#", Tz), Q(n, "?", Ez), Q(n, "\"", Dz), Q(n, "/", Az), Q(n, ";", kz), Q(n, "~", jz), Q(n, "_", Mz), Q(n, "\\", fz), Q(n, "・", Oz);
	let r = MR(n, zz, UR, { [vR]: !0 });
	MR(r, zz, r);
	let i = MR(r, Iz, IR, { [xR]: !0 }), a = MR(r, Lz, LR, { [SR]: !0 }), o = MR(n, Iz, PR, { [yR]: !0 });
	MR(o, zz, i), MR(o, Iz, o), MR(i, zz, i), MR(i, Iz, i);
	let s = MR(n, Lz, FR, { [bR]: !0 });
	MR(s, Iz), MR(s, zz, a), MR(s, Lz, s), MR(a, zz, a), MR(a, Iz), MR(a, Lz, a);
	let c = Q(n, Hz, GR, { [DR]: !0 }), l = Q(n, Vz, WR, { [DR]: !0 }), u = MR(n, Bz, WR, { [DR]: !0 });
	Q(n, Gz, u), Q(l, Hz, c), Q(l, Gz, u), MR(l, Bz, u), Q(u, Vz), Q(u, Hz), MR(u, Bz, u), Q(u, Gz, u);
	let d = MR(n, Rz, Nz, { [wR]: !0 });
	Q(d, "#"), MR(d, Rz, d), Q(d, Uz, d);
	let f = Q(d, Wz);
	Q(f, "#"), MR(f, Rz, d);
	let p = [[Iz, o], [zz, i]], m = [
		[Iz, null],
		[Lz, s],
		[zz, a]
	];
	for (let e = 0; e < Kz.length; e++) Zz(n, Kz[e], zR, PR, p);
	for (let e = 0; e < qz.length; e++) Zz(n, qz[e], BR, FR, m);
	kR(zR, {
		tld: !0,
		ascii: !0
	}, t), kR(BR, {
		utld: !0,
		alpha: !0
	}, t), Zz(n, "file", VR, PR, p), Zz(n, "mailto", VR, PR, p), Zz(n, "http", HR, PR, p), Zz(n, "https", HR, PR, p), Zz(n, "ftp", HR, PR, p), Zz(n, "ftps", HR, PR, p), kR(VR, {
		scheme: !0,
		ascii: !0
	}, t), kR(HR, {
		slashscheme: !0,
		ascii: !0
	}, t), e = e.sort((e, t) => e[0] > t[0] ? 1 : -1);
	for (let t = 0; t < e.length; t++) {
		let r = e[t][0], i = e[t][1] ? { [TR]: !0 } : { [ER]: !0 };
		r.indexOf("-") >= 0 ? i[CR] = !0 : Iz.test(r) ? zz.test(r) ? i[xR] = !0 : i[yR] = !0 : i[vR] = !0, NR(n, r, r, i);
	}
	return NR(n, "localhost", RR, { ascii: !0 }), n.jd = new jR(Pz), {
		start: n,
		tokens: Object.assign({ groups: t }, Fz)
	};
}
function Yz(e, t) {
	let n = Xz(t.replace(/[A-Z]/g, (e) => e.toLowerCase())), r = n.length, i = [], a = 0, o = 0;
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
function Xz(e) {
	let t = [], n = e.length, r = 0;
	for (; r < n;) {
		let i = e.charCodeAt(r), a, o = i < 55296 || i > 56319 || r + 1 === n || (a = e.charCodeAt(r + 1)) < 56320 || a > 57343 ? e[r] : e.slice(r, r + 2);
		t.push(o), r += o.length;
	}
	return t;
}
function Zz(e, t, n, r, i) {
	let a, o = t.length;
	for (let n = 0; n < o - 1; n++) {
		let o = t[n];
		e.j[o] ? a = e.j[o] : (a = new jR(r), a.jr = i.slice(), e.j[o] = a), e = a;
	}
	return a = new jR(n), a.jr = i.slice(), e.j[t[o - 1]] = a, a;
}
function Qz(e) {
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
var $z = {
	defaultProtocol: "http",
	events: null,
	format: tB,
	formatHref: tB,
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
function eB(e, t = null) {
	let n = Object.assign({}, $z);
	e && (n = Object.assign(n, e instanceof eB ? e.o : e));
	let r = n.ignoreTags, i = [];
	for (let e = 0; e < r.length; e++) i.push(r[e].toUpperCase());
	this.o = n, t && (this.defaultRender = t), this.ignoreTags = i;
}
eB.prototype = {
	o: $z,
	ignoreTags: [],
	defaultRender(e) {
		return e;
	},
	check(e) {
		return this.get("validate", e.toString(), e);
	},
	get(e, t, n) {
		let r = t != null, i = this.o[e];
		return i && (typeof i == "object" ? (i = n.t in i ? i[n.t] : $z[e], typeof i == "function" && r && (i = i(t, n))) : typeof i == "function" && r && (i = i(t, n.t, n)), i);
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
function tB(e) {
	return e;
}
function nB(e, t) {
	this.t = "token", this.v = e, this.tk = t;
}
nB.prototype = {
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
	toObject(e = $z.defaultProtocol) {
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
function rB(e, t) {
	class n extends nB {
		constructor(t, n) {
			super(t, n), this.t = e;
		}
	}
	for (let e in t) n.prototype[e] = t[e];
	return n.t = e, n;
}
var iB = rB("email", {
	isLink: !0,
	toHref() {
		return "mailto:" + this.toString();
	}
}), aB = rB("text"), oB = rB("nl"), sB = rB("url", {
	isLink: !0,
	toHref(e = $z.defaultProtocol) {
		return this.hasProtocol() ? this.v : `${e}://${this.v}`;
	},
	hasProtocol() {
		let e = this.tk;
		return e.length >= 2 && e[0].t !== RR && e[1].t === hz;
	}
}), cB = (e) => new jR(e);
function lB({ groups: e }) {
	let t = e.domain.concat([
		cz,
		uz,
		dz,
		fz,
		pz,
		mz,
		_z,
		yz,
		xz,
		UR,
		Sz,
		Cz,
		wz,
		Tz,
		Az,
		Pz,
		jz,
		Mz
	]), n = [
		lz,
		hz,
		gz,
		vz,
		bz,
		Sz,
		Ez,
		Dz,
		kz,
		QR,
		$R,
		KR,
		qR,
		YR,
		JR,
		XR,
		ZR,
		ez,
		tz,
		nz,
		rz,
		iz,
		az,
		oz,
		sz
	], r = [
		cz,
		lz,
		uz,
		fz,
		pz,
		mz,
		_z,
		yz,
		xz,
		KR,
		qR,
		Sz,
		Cz,
		wz,
		Tz,
		Ez,
		Az,
		Pz,
		jz,
		Mz
	], i = cB(), a = Q(i, jz);
	Z(a, r, a), Z(a, e.domain, a);
	let o = cB(), s = cB(), c = cB();
	Z(i, e.domain, o), Z(i, e.scheme, s), Z(i, e.slashscheme, c), Z(o, r, a), Z(o, e.domain, o);
	let l = Q(o, dz);
	Q(a, dz, l), Q(s, dz, l), Q(c, dz, l);
	let u = Q(a, vz);
	Z(u, r, a), Z(u, e.domain, a);
	let d = cB();
	Z(l, e.domain, d), Z(d, e.domain, d);
	let f = Q(d, vz);
	Z(f, e.domain, d);
	let p = cB(iB);
	Z(f, e.tld, p), Z(f, e.utld, p), Q(l, RR, p);
	let m = Q(d, xz);
	Q(m, xz, m), Z(m, e.domain, d), Z(p, e.domain, d), Q(p, vz, f), Q(p, xz, m), Z(Q(p, hz), e.numeric, iB);
	let h = Q(o, xz), g = Q(o, vz);
	Q(h, xz, h), Z(h, e.domain, o), Z(g, r, a), Z(g, e.domain, o);
	let _ = cB(sB);
	Z(g, e.tld, _), Z(g, e.utld, _), Z(_, e.domain, o), Z(_, r, a), Q(_, vz, g), Q(_, xz, h), Q(_, dz, l);
	let v = Q(_, hz), y = cB(sB);
	Z(v, e.numeric, y);
	let b = cB(sB), x = cB();
	Z(b, t, b), Z(b, n, x), Z(x, t, b), Z(x, n, x), Q(_, Az, b), Q(y, Az, b);
	let S = Q(s, hz), C = Q(Q(Q(c, hz), Az), Az);
	Z(s, e.domain, o), Q(s, vz, g), Q(s, xz, h), Z(c, e.domain, o), Q(c, vz, g), Q(c, xz, h), Z(S, e.domain, b), Q(S, Az, b), Q(S, Ez, b), Z(C, e.domain, b), Z(C, t, b), Q(C, Az, b);
	let w = [
		[KR, qR],
		[JR, YR],
		[XR, ZR],
		[QR, $R],
		[ez, tz],
		[nz, rz],
		[iz, az],
		[oz, sz]
	];
	for (let e = 0; e < w.length; e++) {
		let [r, i] = w[e], a = Q(b, r);
		Q(x, r, a), Q(a, i, b);
		let o = cB(sB);
		Z(a, t, o);
		let s = cB();
		Z(a, n), Z(o, t, o), Z(o, n, s), Z(s, t, o), Z(s, n, s), Q(o, i, b), Q(s, i, b);
	}
	return Q(i, RR, _), Q(i, GR, oB), {
		start: i,
		tokens: Fz
	};
}
function uB(e, t, n) {
	let r = n.length, i = 0, a = [], o = [];
	for (; i < r;) {
		let s = e, c = null, l = null, u = 0, d = null, f = -1;
		for (; i < r && !(c = s.go(n[i].t));) o.push(n[i++]);
		for (; i < r && (l = c || s.go(n[i].t));) c = null, s = l, s.accepts() ? (f = 0, d = s) : f >= 0 && f++, i++, u++;
		if (f < 0) i -= u, i < r && (o.push(n[i]), i++);
		else {
			o.length > 0 && (a.push(dB(aB, t, o)), o = []), i -= f, u -= f;
			let e = d.t, r = n.slice(i - u, i);
			a.push(dB(e, t, r));
		}
	}
	return o.length > 0 && a.push(dB(aB, t, o)), a;
}
function dB(e, t, n) {
	let r = n[0].s, i = n[n.length - 1].e;
	return new e(t.slice(r, i), n);
}
var fB = typeof console < "u" && console && console.warn || (() => {}), pB = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", mB = {
	scanner: null,
	parser: null,
	tokenQueue: [],
	pluginQueue: [],
	customSchemes: [],
	initialized: !1
};
function hB(e, t) {
	if (typeof t != "function") throw Error(`linkifyjs: Invalid plugin ${t} (expects function)`);
	for (let n = 0; n < mB.pluginQueue.length; n++) if (e === mB.pluginQueue[n][0]) {
		fB(`linkifyjs: plugin "${e}" already registered - will be overwritten`), mB.pluginQueue[n] = [e, t];
		return;
	}
	mB.pluginQueue.push([e, t]), mB.initialized && fB(`linkifyjs: already initialized - will not register plugin "${e}" ${pB}`);
}
function gB(e, t = !1) {
	if (mB.initialized && fB(`linkifyjs: already initialized - will not register custom scheme "${e}" ${pB}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(e)) throw Error("linkifyjs: incorrect scheme format.\n1. Must only contain digits, lowercase ASCII letters or \"-\"\n2. Cannot start or end with \"-\"\n3. \"-\" cannot repeat");
	mB.customSchemes.push([e, t]);
}
function _B() {
	mB.scanner = Jz(mB.customSchemes);
	for (let e = 0; e < mB.tokenQueue.length; e++) mB.tokenQueue[e][1]({ scanner: mB.scanner });
	mB.parser = lB(mB.scanner.tokens);
	for (let e = 0; e < mB.pluginQueue.length; e++) mB.pluginQueue[e][1]({
		scanner: mB.scanner,
		parser: mB.parser
	});
	return mB.initialized = !0, mB;
}
function vB(e) {
	return mB.initialized || _B(), uB(mB.parser.start, e, Yz(mB.scanner.start, e));
}
vB.scan = Yz;
function yB(e, t = null, n = null) {
	if (t && typeof t == "object") {
		if (n) throw Error(`linkifyjs: Invalid link type ${t}; must be a string`);
		n = t, t = null;
	}
	let r = new eB(n), i = vB(e), a = [];
	for (let e = 0; e < i.length; e++) {
		let n = i[e];
		n.isLink && (!t || n.t === t) && r.check(n) && a.push(n.toFormattedObject(r));
	}
	return a;
}
function bB(e, t = null) {
	let n = vB(e);
	return n.length === 1 && n[0].isLink && (!t || n[0].t === t);
}
//#endregion
//#region ../../node_modules/linkify-react/dist/linkify-react.mjs
function xB(t, n, r) {
	let i = vB(t), a = [];
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
function SB(t, n, r) {
	if (e.Children.count(t.props.children) === 0) return t;
	let i = [];
	e.Children.forEach(t.props.children, (t) => {
		typeof t == "string" ? i.push.apply(i, xB(t, n, r)) : e.isValidElement(t) ? typeof t.type == "string" && n.ignoreTags.indexOf(t.type.toUpperCase()) >= 0 ? i.push(t) : i.push(SB(t, n, r)) : i.push(t);
	});
	let a = `__linkify-el-${r.elementId++}`, o = Object.assign({ key: a }, t.props);
	return e.cloneElement(t, o, i);
}
var CB = (t) => {
	let n = 0, r = ({ tagName: t, attributes: r, content: i }) => (r.key = `__linkify-lnk-${n++}`, r.class && (r.className = r.class, delete r.class), e.createElement(t, r, i)), i = { key: "__linkify-wrapper" };
	for (let e in t) e !== "options" && e !== "as" && e !== "tagName" && e !== "children" && (i[e] = t[e]);
	let a = new eB(t.options, r), o = t.as || t.tagName || e.Fragment || "span", s = t.children;
	return SB(e.createElement(o, i, s), a, { elementId: 0 });
}, wB = { container: "_container_15awj_8" };
//#endregion
//#region ../../node_modules/linkify-string/dist/linkify-string.mjs
function TB(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function EB(e) {
	return e.replace(/"/g, "&quot;");
}
function DB(e) {
	let t = [];
	for (let n in e) {
		let r = e[n] + "";
		t.push(`${n}="${EB(r)}"`);
	}
	return t.join(" ");
}
function OB({ tagName: e, attributes: t, content: n }) {
	return `<${e} ${DB(t)}>${TB(n)}</${e}>`;
}
function kB(e, t = {}) {
	t = new eB(t, OB);
	let n = vB(e), r = [];
	for (let e = 0; e < n.length; e++) {
		let i = n[e];
		i.t === "nl" && t.get("nl2br") ? r.push("<br>\n") : !i.isLink || !t.check(i) ? r.push(TB(i.toString())) : r.push(t.render(i));
	}
	return r.join("");
}
String.prototype.linkify || Object.defineProperty(String.prototype, "linkify", {
	writable: !1,
	value: function(e) {
		return kB(this, e);
	}
});
//#endregion
//#region ../../node_modules/linkify-html/dist/linkify-html.mjs
var AB = {
	amp: "&",
	gt: ">",
	lt: "<",
	nbsp: "\xA0",
	quot: "\""
}, jB = /^#[xX]([A-Fa-f0-9]+)$/, MB = /^#([0-9]+)$/, NB = /^([A-Za-z0-9]+)$/, PB = function() {
	function e(e) {
		this.named = e;
	}
	return e.prototype.parse = function(e) {
		if (e) {
			var t = e.match(jB);
			if (t) return String.fromCharCode(parseInt(t[1], 16));
			if (t = e.match(MB), t) return String.fromCharCode(parseInt(t[1], 10));
			if (t = e.match(NB), t) return this.named[t[1]] || "&" + t[1] + ";";
		}
	}, e;
}(), FB = /[\t\n\f ]/, IB = /[A-Za-z]/, LB = /\r\n?/g;
function RB(e) {
	return FB.test(e);
}
function zB(e) {
	return IB.test(e);
}
function BB(e) {
	return e.replace(LB, "\n");
}
var VB = function() {
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
				e === "!" ? this.transitionTo("markupDeclarationOpen") : e === "/" ? this.transitionTo("endTagOpen") : (e === "@" || e === ":" || zB(e)) && (this.transitionTo("tagName"), this.tagNameBuffer = "", this.delegate.beginStartTag(), this.appendToTagName(e));
			},
			markupDeclarationOpen: function() {
				var e = this.consume();
				e === "-" && this.peek() === "-" ? (this.consume(), this.transitionTo("commentStart"), this.delegate.beginComment()) : e.toUpperCase() + this.input.substring(this.index, this.index + 6).toUpperCase() === "DOCTYPE" && (this.consume(), this.consume(), this.consume(), this.consume(), this.consume(), this.consume(), this.transitionTo("doctype"), this.delegate.beginDoctype && this.delegate.beginDoctype());
			},
			doctype: function() {
				RB(this.consume()) && this.transitionTo("beforeDoctypeName");
			},
			beforeDoctypeName: function() {
				var e = this.consume();
				RB(e) || (this.transitionTo("doctypeName"), this.delegate.appendToDoctypeName && this.delegate.appendToDoctypeName(e.toLowerCase()));
			},
			doctypeName: function() {
				var e = this.consume();
				RB(e) ? this.transitionTo("afterDoctypeName") : e === ">" ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : this.delegate.appendToDoctypeName && this.delegate.appendToDoctypeName(e.toLowerCase());
			},
			afterDoctypeName: function() {
				var e = this.consume();
				if (!RB(e)) if (e === ">") this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData");
				else {
					var t = e.toUpperCase() + this.input.substring(this.index, this.index + 5).toUpperCase(), n = t.toUpperCase() === "PUBLIC", r = t.toUpperCase() === "SYSTEM";
					(n || r) && (this.consume(), this.consume(), this.consume(), this.consume(), this.consume(), this.consume()), n ? this.transitionTo("afterDoctypePublicKeyword") : r && this.transitionTo("afterDoctypeSystemKeyword");
				}
			},
			afterDoctypePublicKeyword: function() {
				var e = this.peek();
				if (RB(e)) this.transitionTo("beforeDoctypePublicIdentifier"), this.consume();
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
				RB(e) ? this.transitionTo("betweenDoctypePublicAndSystemIdentifiers") : e === ">" ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : e === "\"" ? this.transitionTo("doctypeSystemIdentifierDoubleQuoted") : e === "'" && this.transitionTo("doctypeSystemIdentifierSingleQuoted");
			},
			betweenDoctypePublicAndSystemIdentifiers: function() {
				var e = this.consume();
				RB(e) || (e === ">" ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : e === "\"" ? this.transitionTo("doctypeSystemIdentifierDoubleQuoted") : e === "'" && this.transitionTo("doctypeSystemIdentifierSingleQuoted"));
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
				RB(e) || e === ">" && (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData"));
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
				RB(e) ? this.transitionTo("beforeAttributeName") : e === "/" ? this.transitionTo("selfClosingStartTag") : e === ">" ? (this.delegate.finishTag(), this.transitionTo("beforeData")) : this.appendToTagName(e);
			},
			endTagName: function() {
				var e = this.consume();
				RB(e) ? (this.transitionTo("beforeAttributeName"), this.tagNameBuffer = "") : e === "/" ? (this.transitionTo("selfClosingStartTag"), this.tagNameBuffer = "") : e === ">" ? (this.delegate.finishTag(), this.transitionTo("beforeData"), this.tagNameBuffer = "") : this.appendToTagName(e);
			},
			beforeAttributeName: function() {
				var e = this.peek();
				if (RB(e)) {
					this.consume();
					return;
				} else e === "/" ? (this.transitionTo("selfClosingStartTag"), this.consume()) : e === ">" ? (this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : e === "=" ? (this.delegate.reportSyntaxError("attribute name cannot start with equals sign"), this.transitionTo("attributeName"), this.delegate.beginAttribute(), this.consume(), this.delegate.appendToAttributeName(e)) : (this.transitionTo("attributeName"), this.delegate.beginAttribute());
			},
			attributeName: function() {
				var e = this.peek();
				RB(e) ? (this.transitionTo("afterAttributeName"), this.consume()) : e === "/" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("selfClosingStartTag")) : e === "=" ? (this.transitionTo("beforeAttributeValue"), this.consume()) : e === ">" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : e === "\"" || e === "'" || e === "<" ? (this.delegate.reportSyntaxError(e + " is not a valid character within attribute names"), this.consume(), this.delegate.appendToAttributeName(e)) : (this.consume(), this.delegate.appendToAttributeName(e));
			},
			afterAttributeName: function() {
				var e = this.peek();
				if (RB(e)) {
					this.consume();
					return;
				} else e === "/" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("selfClosingStartTag")) : e === "=" ? (this.consume(), this.transitionTo("beforeAttributeValue")) : e === ">" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.transitionTo("attributeName"), this.delegate.beginAttribute(), this.consume(), this.delegate.appendToAttributeName(e));
			},
			beforeAttributeValue: function() {
				var e = this.peek();
				RB(e) ? this.consume() : e === "\"" ? (this.transitionTo("attributeValueDoubleQuoted"), this.delegate.beginAttributeValue(!0), this.consume()) : e === "'" ? (this.transitionTo("attributeValueSingleQuoted"), this.delegate.beginAttributeValue(!0), this.consume()) : e === ">" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : (this.transitionTo("attributeValueUnquoted"), this.delegate.beginAttributeValue(!1), this.consume(), this.delegate.appendToAttributeValue(e));
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
				RB(e) ? (this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("beforeAttributeName")) : e === "/" ? (this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("selfClosingStartTag")) : e === "&" ? (this.consume(), this.delegate.appendToAttributeValue(this.consumeCharRef() || "&")) : e === ">" ? (this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : (this.consume(), this.delegate.appendToAttributeValue(e));
			},
			afterAttributeValueQuoted: function() {
				var e = this.peek();
				RB(e) ? (this.consume(), this.transitionTo("beforeAttributeName")) : e === "/" ? (this.consume(), this.transitionTo("selfClosingStartTag")) : e === ">" ? (this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : this.transitionTo("beforeAttributeName");
			},
			selfClosingStartTag: function() {
				this.peek() === ">" ? (this.consume(), this.delegate.markTagAsSelfClosing(), this.delegate.finishTag(), this.transitionTo("beforeData")) : this.transitionTo("beforeAttributeName");
			},
			endTagOpen: function() {
				var e = this.consume();
				(e === "@" || e === ":" || zB(e)) && (this.transitionTo("endTagName"), this.tagNameBuffer = "", this.delegate.beginEndTag(), this.appendToTagName(e));
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
		for (this.input += BB(e); this.index < this.input.length;) {
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
}(), HB = function() {
	function e(e, t) {
		t === void 0 && (t = {}), this.options = t, this.token = null, this.startLine = 1, this.startColumn = 0, this.tokens = [], this.tokenizer = new VB(this, e, t.mode), this._currentAttribute = void 0;
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
function UB(e, t) {
	return new HB(new PB(AB), t).tokenize(e);
}
var WB = "LinkifyResult", GB = "StartTag", KB = "EndTag", qB = "Chars", JB = "Comment", YB = "Doctype";
function XB(e, t = {}) {
	let n = UB(e), r = [], i = [], a = new eB(t, $B);
	for (let e = 0; e < n.length; e++) {
		let t = n[e];
		if (t.type === GB) {
			r.push(t);
			let i = t.tagName.toUpperCase();
			if (!(i === "A" || a.ignoreTags.indexOf(i) >= 0)) continue;
			let o = r.length;
			QB(i, n, ++e, r), e += r.length - o - 1;
		} else if (t.type !== qB) r.push(t);
		else {
			let e = ZB(t.chars, a);
			r.push.apply(r, e);
		}
	}
	for (let e = 0; e < r.length; e++) {
		let t = r[e];
		switch (t.type) {
			case WB:
				i.push(t.rendered);
				break;
			case GB: {
				let e = "<" + t.tagName;
				t.attributes.length > 0 && (e += " " + rV(t.attributes).join(" ")), t.selfClosing && (e += " /"), e += ">", i.push(e);
				break;
			}
			case KB:
				i.push(`</${t.tagName}>`);
				break;
			case qB:
				i.push(eV(t.chars));
				break;
			case JB:
				i.push(`<!--${eV(t.chars)}-->`);
				break;
			case YB: {
				let e = `<!DOCTYPE ${t.name}`;
				t.publicIdentifier && (e += ` PUBLIC "${t.publicIdentifier}"`), t.systemIdentifier && (e += ` "${t.systemIdentifier}"`), e += ">", i.push(e);
				break;
			}
		}
	}
	return i.join("");
}
function ZB(e, t) {
	let n = vB(e), r = [];
	for (let e = 0; e < n.length; e++) {
		let i = n[e];
		i.t === "nl" && t.get("nl2br") ? r.push({
			type: GB,
			tagName: "br",
			attributes: [],
			selfClosing: !0
		}) : !i.isLink || !t.check(i) ? r.push({
			type: qB,
			chars: i.toString()
		}) : r.push({
			type: WB,
			rendered: t.render(i)
		});
	}
	return r;
}
function QB(e, t, n, r) {
	let i = 1;
	for (; n < t.length && i > 0;) {
		let a = t[n];
		a.type === GB && a.tagName.toUpperCase() === e ? i++ : a.type === KB && a.tagName.toUpperCase() === e && i--, r.push(a), n++;
	}
	return r;
}
function $B({ tagName: e, attributes: t, content: n }) {
	return `<${e} ${nV(t)}>${eV(n)}</${e}>`;
}
function eV(e) {
	return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function tV(e) {
	return e.replace(/"/g, "&quot;");
}
function nV(e) {
	let t = [];
	for (let n in e) {
		let r = e[n] + "";
		t.push(`${n}="${tV(r)}"`);
	}
	return t.join(" ");
}
function rV(e) {
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n][0], i = e[n][1] + "";
		t.push(`${r}="${tV(i)}"`);
	}
	return t;
}
//#endregion
//#region src/core/utils/linkify.ts
var iV = [
	"file",
	"mailto",
	"http",
	"https",
	"ftp",
	"ftps"
], aV = [
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
], oV = [...iV, ...aV], sV = /* @__PURE__ */ function(e) {
	return e.URL = "url", e.UserId = "userid", e.RoomAlias = "roomalias", e;
}({});
function cV({ scanner: e, parser: t, token: n, name: r }) {
	let { DOT: i, NUM: a, COLON: o, SYM: s, SLASH: c, EQUALS: l, HYPHEN: u, UNDERSCORE: d } = e.tokens, { domain: f } = e.tokens.groups, p = [
		i,
		s,
		c,
		l,
		d,
		u
	], m = [u], h = new jR(rB(r, { isLink: !0 })), g = new jR(rB(r, { isLink: !0 })), _ = t.start.tt(n), v = new jR();
	_.ta(f, v), _.ta(p, v), v.ta(f, v), v.ta(p, v);
	let y = v.tt(o);
	y.ta(f, h), y.ta(m, h), h.ta(f, h), h.ta(m, h), h.tt(i, y), h.tt(o).tt(a, g);
}
function lV({ urlListener: e, roomAliasListener: t, userIdListener: n, urlTargetTransformer: r, hrefTransformer: i, onLinkClick: a }) {
	let o = (r, i) => {
		switch (i) {
			case sV.URL:
				if (e) return e(r);
				break;
			case sV.UserId:
				if (n) return n(r);
				break;
			case sV.RoomAlias:
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
			let n = { [`data-${fV}`]: "true" }, r = o(e, t);
			return r?.click && (n.onClick = r.click), a && (n.onClick = (e) => {
				a(e), r?.click?.(e);
			}), n;
		},
		target(e, t) {
			return t === sV.URL && r ? r(e) : "_blank";
		},
		...i ? { formatHref: (e, t) => i(e, t) } : void 0,
		validate: (e, r) => !!(r === sV.UserId && n) || !!(r === sV.RoomAlias && t) || !!(r === sV.URL && URL.canParse(e))
	};
}
function uV(e) {
	return yB(e);
}
function dV(e) {
	return bB(e);
}
var fV = "linkified", pV = !1;
function mV() {
	pV ||= (hB(sV.RoomAlias, ({ scanner: e, parser: t }) => {
		let n = e.tokens.POUND;
		cV({
			scanner: e,
			parser: t,
			token: n,
			name: sV.RoomAlias
		});
	}), hB(sV.UserId, ({ scanner: e, parser: t }) => {
		let n = e.tokens.AT;
		cV({
			scanner: e,
			parser: t,
			token: n,
			name: sV.UserId
		});
	}), gB("mxc", !1), oV.forEach((e) => {
		iV.includes(e) || gB(e, aV.includes(e));
	}), !0);
}
mV();
//#endregion
//#region src/core/utils/LinkedText/LinkedTextContext.tsx
var hV = i(null);
hV.displayName = "LinkedTextContext";
function gV() {
	let e = l(hV);
	if (!e) throw Error("useLinkedTextContextOpts must be used within an LinkedTextContext.Provider");
	return e;
}
//#endregion
//#region src/core/utils/LinkedText/LinkedText.tsx
function _V({ children: e, className: n, onLinkClick: r, ...i }) {
	let a = lV({
		...gV(),
		onLinkClick: r
	});
	return /* @__PURE__ */ t.createElement(CB, {
		className: (0, V.default)(wB.container, n),
		as: Xf,
		options: {
			...a,
			render: qT
		},
		...i
	}, e);
}
//#endregion
//#region src/event-tiles/UrlPreviewGroupView/LinkPreview/LinkPreview.tsx
function vV({ onImageClick: e, ...n }) {
	let { translate: r } = q(), i = p(() => n.showTooltipOnLink ? new URL(n.link, window.location.href).toString() : null, [n.link, n.showTooltipOnLink]), a = c((t) => {
		t.button != 0 || t.metaKey || (t.preventDefault(), n.image?.imageFull && e());
	}, [n.image?.imageFull, e]), o;
	n.image?.imageThumb && (o = /* @__PURE__ */ t.createElement("button", {
		"aria-label": r("timeline|url_preview|view_image"),
		className: hR.image,
		onClick: a
	}, /* @__PURE__ */ t.createElement("img", {
		className: hR.thumbnail,
		src: n.image.imageThumb,
		alt: ""
	})));
	let s = /* @__PURE__ */ t.createElement("a", {
		className: hR.link,
		href: n.link,
		target: "_blank",
		rel: "noreferrer noopener"
	}, n.title);
	return /* @__PURE__ */ t.createElement("div", { className: (0, V.default)(hR.container) }, /* @__PURE__ */ t.createElement("div", { className: hR.wrapImageCaption }, o, /* @__PURE__ */ t.createElement("div", { className: hR.caption }, /* @__PURE__ */ t.createElement(Xf, {
		type: "body",
		size: "md",
		className: hR.title
	}, i ? /* @__PURE__ */ t.createElement(M_, { label: i }, s) : s, n.siteName && /* @__PURE__ */ t.createElement(Xf, {
		as: "span",
		size: "md",
		weight: "regular"
	}, " - " + n.siteName)), n.description && /* @__PURE__ */ t.createElement(_V, { className: hR.description }, n.description))));
}
var yV = {
	previewGroup: "_previewGroup_vzeae_8",
	compactLayout: "_compactLayout_vzeae_15",
	toggleButton: "_toggleButton_vzeae_20",
	wrapper: "_wrapper_vzeae_29"
};
//#endregion
//#region src/event-tiles/UrlPreviewGroupView/UrlPreviewGroupView.tsx
function bV({ vm: e }) {
	let { translate: n } = q(), { previews: r, totalPreviewCount: i, previewsLimited: a, overPreviewLimit: o, compactLayout: s } = X(e);
	if (r.length === 0) return null;
	let c;
	return o && (c = /* @__PURE__ */ t.createElement($f, {
		className: yV.toggleButton,
		kind: "tertiary",
		size: "sm",
		onClick: e.onTogglePreviewLimit
	}, a ? n("timeline|url_preview|show_n_more", { count: i - r.length }) : n("action|collapse"))), /* @__PURE__ */ t.createElement("div", { className: yV.wrapper }, /* @__PURE__ */ t.createElement("div", { className: (0, V.default)(yV.previewGroup, s && yV.compactLayout) }, r.map((n) => /* @__PURE__ */ t.createElement(vV, {
		key: n.link,
		onImageClick: () => e.onImageClick(n),
		...n
	})), c), /* @__PURE__ */ t.createElement(L_, {
		size: "20px",
		onClick: e.onHideClick,
		"aria-label": n("timeline|url_preview|close")
	}, /* @__PURE__ */ t.createElement(G_, null)));
}
var xV = {
	readMarker: "_readMarker_1rvym_8",
	line: "_line_1rvym_15"
};
//#endregion
//#region src/room/timeline/ReadMarker/ReadMarker.tsx
function SV({ eventId: e, kind: n, showLine: r = !0, onCurrentMarkerRef: i, onGhostLineRef: a, onGhostTransitionEnd: o, className: s }) {
	let c = null;
	return n === "ghost" ? c = /* @__PURE__ */ t.createElement("hr", {
		className: xV.line,
		ref: a,
		onTransitionEnd: o,
		"data-eventid": e
	}) : r && (c = /* @__PURE__ */ t.createElement("hr", { className: xV.line })), /* @__PURE__ */ t.createElement("li", {
		className: (0, V.default)(s, xV.readMarker),
		ref: n === "current" ? i : void 0,
		"data-scroll-tokens": n === "current" ? e : void 0
	}, c);
}
//#endregion
//#region ../../node_modules/domelementtype/lib/index.js
var CV = /* @__PURE__ */ P(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.Doctype = e.CDATA = e.Tag = e.Style = e.Script = e.Comment = e.Directive = e.Text = e.Root = e.isTag = e.ElementType = void 0;
	var t;
	(function(e) {
		e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype";
	})(t = e.ElementType ||= {});
	function n(e) {
		return e.type === t.Tag || e.type === t.Script || e.type === t.Style;
	}
	e.isTag = n, e.Root = t.Root, e.Text = t.Text, e.Directive = t.Directive, e.Comment = t.Comment, e.Script = t.Script, e.Style = t.Style, e.Tag = t.Tag, e.CDATA = t.CDATA, e.Doctype = t.Doctype;
})), wV = /* @__PURE__ */ P(((e) => {
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
	var r = CV(), i = function() {
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
})), TV = /* @__PURE__ */ P(((e) => {
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
	var r = CV(), i = wV();
	n(wV(), e);
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
})), EV = /* @__PURE__ */ P(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.CARRIAGE_RETURN_PLACEHOLDER_REGEX = e.CARRIAGE_RETURN_PLACEHOLDER = e.CARRIAGE_RETURN_REGEX = e.CARRIAGE_RETURN = e.CASE_SENSITIVE_TAG_NAMES_MAP = e.CASE_SENSITIVE_TAG_NAMES = void 0, e.CASE_SENSITIVE_TAG_NAMES = /* @__PURE__ */ "animateMotion.animateTransform.clipPath.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.foreignObject.linearGradient.radialGradient.textPath".split("."), e.CASE_SENSITIVE_TAG_NAMES_MAP = e.CASE_SENSITIVE_TAG_NAMES.reduce(function(e, t) {
		return e[t.toLowerCase()] = t, e;
	}, {}), e.CARRIAGE_RETURN = "\r", e.CARRIAGE_RETURN_REGEX = new RegExp(e.CARRIAGE_RETURN, "g"), e.CARRIAGE_RETURN_PLACEHOLDER = `__HTML_DOM_PARSER_CARRIAGE_RETURN_PLACEHOLDER_${Date.now().toString()}__`, e.CARRIAGE_RETURN_PLACEHOLDER_REGEX = new RegExp(e.CARRIAGE_RETURN_PLACEHOLDER, "g");
})), DV = /* @__PURE__ */ P(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.formatAttributes = i, e.hasOpenTag = o, e.escapeSpecialCharacters = s, e.revertEscapedCharacters = c, e.formatDOM = l;
	var t = TV(), n = EV();
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
})), OV = /* @__PURE__ */ P(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = h;
	var t = DV(), n = "html", r = "head", i = "body", a = /<([a-zA-Z]+[0-9]?)/, o = function(e, t) {
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
})), kV = /* @__PURE__ */ P(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = a;
	var n = t(OV()), r = DV(), i = /<(![a-zA-Z\s]+)>/;
	function a(e) {
		if (typeof e != "string") throw TypeError("First argument must be a string");
		if (!e) return [];
		var t = i.exec(e), a = t ? t[1] : void 0;
		return (0, r.formatDOM)((0, n.default)(e), null, a);
	}
})), AV = /* @__PURE__ */ P(((e) => {
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
})), jV = /* @__PURE__ */ P(((e) => {
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
	var { CAMELCASE: m, SAME: h, possibleStandardNames: g } = AV(), _ = RegExp.prototype.test.bind(/* @__PURE__ */ RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")), v = Object.keys(g).reduce((e, t) => {
		let n = g[t];
		return n === h ? e[t] = t : n === m ? e[t.toLowerCase()] = t : e[t] = n, e;
	}, {});
	e.BOOLEAN = i, e.BOOLEANISH_STRING = r, e.NUMERIC = o, e.OVERLOADED_BOOLEAN = a, e.POSITIVE_NUMERIC = s, e.RESERVED = t, e.STRING = n, e.getPropertyInfo = c, e.isCustomAttribute = _, e.possibleStandardNames = v;
})), MV = /* @__PURE__ */ P(((e, t) => {
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
})), NV = /* @__PURE__ */ P(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = r;
	var n = t(MV());
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
})), PV = /* @__PURE__ */ P(((e) => {
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
})), FV = /* @__PURE__ */ P(((e, t) => {
	var n = (e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	})(NV()), r = PV();
	function i(e, t) {
		var i = {};
		return !e || typeof e != "string" || (0, n.default)(e, function(e, n) {
			e && n && (i[(0, r.camelCase)(e, t)] = n);
		}), i;
	}
	i.default = i, t.exports = i;
})), IV = /* @__PURE__ */ P(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.returnFirstArg = e.canTextBeChildOfNode = e.ELEMENTS_WITH_NO_TEXT_CHILDREN = e.PRESERVE_CUSTOM_ATTRIBUTES = void 0, e.isCustomComponent = a, e.setStyleProp = s;
	var n = qf(), r = t(FV()), i = new Set([
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
})), LV = /* @__PURE__ */ P(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = o;
	var t = jV(), n = IV(), r = ["checked", "value"], i = [
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
})), RV = /* @__PURE__ */ P(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = o;
	var n = qf(), r = t(LV()), i = IV(), a = {
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
})), zV = /* @__PURE__ */ ne((/* @__PURE__ */ P(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.htmlToDOM = e.domToReact = e.attributesToProps = e.Text = e.ProcessingInstruction = e.Element = e.Comment = void 0, e.default = o;
	var n = t(kV());
	e.htmlToDOM = n.default, e.attributesToProps = t(LV()).default;
	var r = t(RV());
	e.domToReact = r.default;
	var i = TV();
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
})))(), 1), BV = zV.default.default || zV.default;
//#endregion
//#region src/core/utils/applyReplacerOnString.tsx
function VV(e, n) {
	return n ? (Array.isArray(e) ? e : [e]).map((e, r) => typeof e == "string" ? /* @__PURE__ */ t.createElement(t.Fragment, { key: r }, n(new zV.Text(e), 0) || e) : e) : e;
}
//#endregion
//#region src/room/timeline/event-tile/body/EventContentBodyView/EventContentBodyView.tsx
var HV = s(function({ vm: e, as: n, ref: r }) {
	let { body: i, formattedBody: a, replacer: o, className: s, dir: c, parseFormattedBody: l } = X(e), u = a ? (l ?? ((e, t) => BV(e, t ? { replace: t } : void 0)))(a, o) : VV(i, o);
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
function UV(e, t) {
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
UV.displayName = "ArrowDownIcon";
var WV = a(UV);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/arrow-right.js
function GV(e, t) {
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
GV.displayName = "ArrowRightIcon";
var KV = a(GV);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/attachment.js
function qV(e, t) {
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
qV.displayName = "AttachmentIcon";
var JV = a(qV);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/block.js
function YV(e, t) {
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
YV.displayName = "BlockIcon";
var XV = a(YV);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/chat.js
function ZV(e, t) {
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
ZV.displayName = "ChatIcon";
var QV = a(ZV);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/collapse.js
function $V(e, t) {
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
$V.displayName = "CollapseIcon";
var eH = a($V);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/compose.js
function tH(e, t) {
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
tH.displayName = "ComposeIcon";
var nH = a(tH);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/delete.js
function rH(e, t) {
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
rH.displayName = "DeleteIcon";
var iH = a(rH);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/dial-pad.js
function aH(e, t) {
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
aH.displayName = "DialPadIcon";
var oH = a(aH);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/download.js
function sH(e, t) {
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
sH.displayName = "DownloadIcon";
var cH = a(sH);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/drag-list.js
function lH(e, t) {
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
lH.displayName = "DragListIcon";
var uH = a(lH);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/edit.js
function dH(e, t) {
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
dH.displayName = "EditIcon";
var fH = a(dH);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/email-solid.js
function pH(e, t) {
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
pH.displayName = "EmailSolidIcon";
var mH = a(pH);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/expand.js
function hH(e, t) {
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
hH.displayName = "ExpandIcon";
var gH = a(hH);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/explore.js
function _H(e, t) {
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
_H.displayName = "ExploreIcon";
var vH = a(_H);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/favourite.js
function yH(e, t) {
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
yH.displayName = "FavouriteIcon";
var bH = a(yH);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/file-error.js
function xH(e, t) {
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
xH.displayName = "FileErrorIcon";
var SH = a(xH);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/history.js
function CH(e, t) {
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
CH.displayName = "HistoryIcon";
var wH = a(CH);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/home.js
function TH(e, t) {
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
TH.displayName = "HomeIcon";
var EH = a(TH);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/image-error.js
function DH(e, t) {
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
DH.displayName = "ImageErrorIcon";
var OH = a(DH);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/inline-code.js
function kH(e, t) {
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
kH.displayName = "InlineCodeIcon";
var AH = a(kH);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/leave.js
function jH(e, t) {
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
jH.displayName = "LeaveIcon";
var MH = a(jH);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/link.js
function NH(e, t) {
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
NH.displayName = "LinkIcon";
var PH = a(NH);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/lock-solid.js
function FH(e, t) {
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
FH.displayName = "LockSolidIcon";
var IH = a(FH);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/mark-as-read.js
function LH(e, t) {
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
LH.displayName = "MarkAsReadIcon";
var RH = a(LH);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/mark-as-unread.js
function zH(e, t) {
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
zH.displayName = "MarkAsUnreadIcon";
var BH = a(zH);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/mention.js
function VH(e, t) {
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
VH.displayName = "MentionIcon";
var HH = a(VH);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/notifications-off-solid.js
function UH(e, t) {
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
UH.displayName = "NotificationsOffSolidIcon";
var WH = a(UH);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/notifications-solid.js
function GH(e, t) {
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
GH.displayName = "NotificationsSolidIcon";
var KH = a(GH);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/overflow-horizontal.js
function qH(e, t) {
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
qH.displayName = "OverflowHorizontalIcon";
var JH = a(qH);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/pin-solid.js
function YH(e, t) {
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
YH.displayName = "PinSolidIcon";
var XH = a(YH);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/pin.js
function ZH(e, t) {
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
ZH.displayName = "PinIcon";
var QH = a(ZH);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/plus.js
function $H(e, t) {
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
$H.displayName = "PlusIcon";
var eU = a($H);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/preferences.js
function tU(e, t) {
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
tU.displayName = "PreferencesIcon";
var nU = a(tU);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/reaction-add.js
function rU(e, t) {
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
rU.displayName = "ReactionAddIcon";
var iU = a(rU);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/reply.js
function aU(e, t) {
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
aU.displayName = "ReplyIcon";
var oU = a(aU);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/restart.js
function sU(e, t) {
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
sU.displayName = "RestartIcon";
var cU = a(sU);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/room.js
function lU(e, t) {
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
lU.displayName = "RoomIcon";
var uU = a(lU);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/section.js
function dU(e, t) {
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
dU.displayName = "SectionIcon";
var fU = a(dU);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/settings.js
function pU(e, t) {
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
pU.displayName = "SettingsIcon";
var mU = a(pU);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/threads.js
function hU(e, t) {
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
hU.displayName = "ThreadsIcon";
var gU = a(hU);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/unpin.js
function _U(e, t) {
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
_U.displayName = "UnpinIcon";
var vU = a(_U);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/user-add.js
function yU(e, t) {
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
yU.displayName = "UserAddIcon";
var bU = a(yU);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/user-profile-solid.js
function xU(e, t) {
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
xU.displayName = "UserProfileSolidIcon";
var SU = a(xU);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/video-call-solid.js
function CU(e, t) {
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
CU.displayName = "VideoCallSolidIcon";
var wU = a(CU);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/video-call.js
function TU(e, t) {
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
TU.displayName = "VideoCallIcon";
var EU = a(TU);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/voice-call-solid.js
function DU(e, t) {
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
DU.displayName = "VoiceCallSolidIcon";
var OU = a(DU);
//#endregion
//#region ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/volume-on-solid.js
function kU(e, t) {
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
kU.displayName = "VolumeOnSolidIcon";
var AU = a(kU), jU = {
	content: "_content_1xhpr_8",
	icon: "_icon_1xhpr_17"
};
//#endregion
//#region src/room/timeline/event-tile/body/RedactedBodyView/RedactedBodyView.tsx
function MU({ vm: e, className: n, ref: r }) {
	let { text: i, tooltip: a } = X(e), o = /* @__PURE__ */ t.createElement("span", {
		className: (0, V.default)(jU.content, n),
		ref: r
	}, /* @__PURE__ */ t.createElement(iH, {
		className: jU.icon,
		"aria-hidden": "true"
	}), /* @__PURE__ */ t.createElement("span", null, i));
	return a ? /* @__PURE__ */ t.createElement(M_, { description: a }, o) : o;
}
var NU = {
	content: "_content_f1s5h_8",
	invalid: "_invalid_f1s5h_70"
}, PU = { mediaBody: "_mediaBody_rgndh_8" };
//#endregion
//#region src/room/timeline/event-tile/body/MediaBody/MediaBody.tsx
function FU({ as: e, className: n, children: r, ...i }) {
	let a = e || "div";
	return /* @__PURE__ */ t.createElement(a, {
		className: (0, V.default)("mx_MediaBody", PU.mediaBody, n),
		...i
	}, r);
}
//#endregion
//#region src/room/timeline/event-tile/body/MFileBodyView/FileBodyView.tsx
var IU = /* @__PURE__ */ function(e) {
	return e.EXPORT = "EXPORT", e.DECRYPTION_PENDING = "DECRYPTION_PENDING", e.ENCRYPTED = "ENCRYPTED", e.UNENCRYPTED = "UNENCRYPTED", e.INVALID = "INVALID", e;
}({}), LU = /* @__PURE__ */ function(e) {
	return e.ATTACHMENT = "ATTACHMENT", e.AUDIO = "AUDIO", e.DOWNLOAD = "DOWNLOAD", e.VIDEO = "VIDEO", e;
}({});
function RU(e) {
	return e === LU.AUDIO ? AU : e === LU.DOWNLOAD ? cH : e === LU.VIDEO ? wU : JV;
}
function zU({ vm: e, refIFrame: n, refLink: r, className: i }) {
	let { translate: a } = q(), { state: o, showInfo: s, infoLabel: c, infoTooltip: l, infoIcon: u, infoHref: d, showDownload: f, downloadLabel: p, downloadTitle: m, downloadHref: h } = X(e), g = c ?? a("common|attachment"), _ = l ?? g, v = RU(u), y = s ? /* @__PURE__ */ t.createElement(M_, {
		description: _,
		placement: "right"
	}, /* @__PURE__ */ t.createElement(FU, { "data-type": "info" }, /* @__PURE__ */ t.createElement($f, {
		as: "button",
		size: "sm",
		kind: "secondary",
		"aria-label": g,
		Icon: v,
		onClick: e.onInfoClick
	}, /* @__PURE__ */ t.createElement("span", null, g)))) : null, b = (0, V.default)(NU.content, i), x = p ?? a("action|download"), S = m ?? x;
	switch (o) {
		case IU.EXPORT: return /* @__PURE__ */ t.createElement("span", { className: b }, /* @__PURE__ */ t.createElement("a", { href: d }, y));
		case IU.DECRYPTION_PENDING: return /* @__PURE__ */ t.createElement("span", { className: b }, y, f && /* @__PURE__ */ t.createElement("div", { "data-type": "download" }, /* @__PURE__ */ t.createElement($f, {
			size: "sm",
			kind: "secondary",
			Icon: cH,
			onClick: e.onDownloadClick
		}, x)));
		case IU.ENCRYPTED: return /* @__PURE__ */ t.createElement("span", { className: b }, y, f && /* @__PURE__ */ t.createElement("div", { "data-type": "download" }, /* @__PURE__ */ t.createElement("div", {
			"aria-hidden": !0,
			style: { display: "none" }
		}, /* @__PURE__ */ t.createElement($f, {
			size: "sm",
			kind: "secondary",
			Icon: cH,
			as: "a",
			ref: r
		})), /* @__PURE__ */ t.createElement("iframe", {
			"aria-hidden": !0,
			title: S,
			src: "usercontent/",
			onLoad: e.onDownloadIframeLoad,
			ref: n,
			sandbox: "allow-scripts allow-downloads"
		})));
		case IU.UNENCRYPTED: return /* @__PURE__ */ t.createElement("span", { className: b }, y, f && /* @__PURE__ */ t.createElement("div", { "data-type": "download" }, /* @__PURE__ */ t.createElement($f, {
			size: "sm",
			kind: "secondary",
			Icon: cH,
			as: "a",
			href: h,
			target: "_blank",
			rel: "noreferrer noopener",
			onClick: e.onDownloadLinkClick
		}, x)));
		case IU.INVALID:
		default: return /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("span", { className: b }, y), /* @__PURE__ */ t.createElement("span", { className: (0, V.default)(b, NU.invalid) }, a("timeline|m.file|error_invalid")));
	}
}
//#endregion
//#region ../../node_modules/blurhash/dist/esm/index.js
var BU = /* @__PURE__ */ "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%*+,-.:;=?@[]^_{|}~".split(""), VU = (e) => {
	let t = 0;
	for (let n = 0; n < e.length; n++) {
		let r = e[n], i = BU.indexOf(r);
		t = t * 83 + i;
	}
	return t;
}, HU = (e) => {
	let t = e / 255;
	return t <= .04045 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4;
}, UU = (e) => {
	let t = Math.max(0, Math.min(1, e));
	return Math.trunc(t <= .0031308 ? t * 12.92 * 255 + .5 : (1.055 * t ** .4166666666666667 - .055) * 255 + .5);
}, WU = (e) => e < 0 ? -1 : 1, GU = (e, t) => WU(e) * Math.abs(e) ** +t, KU = class extends Error {
	constructor(e) {
		super(e), this.name = "ValidationError", this.message = e;
	}
}, qU = (e) => {
	if (!e || e.length < 6) throw new KU("The blurhash string must be at least 6 characters");
	let t = VU(e[0]), n = Math.floor(t / 9) + 1, r = t % 9 + 1;
	if (e.length !== 4 + 2 * r * n) throw new KU(`blurhash length mismatch: length is ${e.length} but it should be ${4 + 2 * r * n}`);
}, JU = (e) => {
	let t = e >> 16, n = e >> 8 & 255, r = e & 255;
	return [
		HU(t),
		HU(n),
		HU(r)
	];
}, YU = (e, t) => {
	let n = Math.floor(e / 361), r = Math.floor(e / 19) % 19, i = e % 19;
	return [
		GU((n - 9) / 9, 2) * t,
		GU((r - 9) / 9, 2) * t,
		GU((i - 9) / 9, 2) * t
	];
}, XU = (e, t, n, r) => {
	qU(e), r |= 1;
	let i = VU(e[0]), a = Math.floor(i / 9) + 1, o = i % 9 + 1, s = (VU(e[1]) + 1) / 166, c = Array(o * a);
	for (let t = 0; t < c.length; t++) t === 0 ? c[t] = JU(VU(e.substring(2, 6))) : c[t] = YU(VU(e.substring(4 + t * 2, 6 + t * 2)), s * r);
	let l = t * 4, u = new Uint8ClampedArray(l * n);
	for (let e = 0; e < n; e++) for (let r = 0; r < t; r++) {
		let i = 0, s = 0, d = 0;
		for (let l = 0; l < a; l++) for (let a = 0; a < o; a++) {
			let u = Math.cos(Math.PI * r * a / t) * Math.cos(Math.PI * e * l / n), f = c[a + l * o];
			i += f[0] * u, s += f[1] * u, d += f[2] * u;
		}
		let f = UU(i), p = UU(s), m = UU(d);
		u[4 * r + 0 + e * l] = f, u[4 * r + 1 + e * l] = p, u[4 * r + 2 + e * l] = m, u[4 * r + 3 + e * l] = 255;
	}
	return u;
}, ZU = Object.defineProperty, QU = Object.defineProperties, $U = Object.getOwnPropertyDescriptors, eW = Object.getOwnPropertySymbols, tW = Object.prototype.hasOwnProperty, nW = Object.prototype.propertyIsEnumerable, rW = (e, t, n) => t in e ? ZU(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, iW = (e, t) => {
	for (var n in t ||= {}) tW.call(t, n) && rW(e, n, t[n]);
	if (eW) for (var n of eW(t)) nW.call(t, n) && rW(e, n, t[n]);
	return e;
}, aW = (e, t) => QU(e, $U(t)), oW = (e, t) => {
	var n = {};
	for (var r in e) tW.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && eW) for (var r of eW(e)) t.indexOf(r) < 0 && nW.call(e, r) && (n[r] = e[r]);
	return n;
}, sW = class extends e.PureComponent {
	constructor() {
		super(...arguments), this.canvas = null, this.handleRef = (e) => {
			this.canvas = e, this.draw();
		}, this.draw = () => {
			let { hash: e, height: t, punch: n, width: r } = this.props;
			if (this.canvas) {
				let i = XU(e, r, t, n), a = this.canvas.getContext("2d"), o = a.createImageData(r, t);
				o.data.set(i), a.putImageData(o, 0, 0);
			}
		};
	}
	componentDidUpdate() {
		this.draw();
	}
	render() {
		let t = this.props, { hash: n, height: r, width: i } = t, a = oW(t, [
			"hash",
			"height",
			"width"
		]);
		return e.createElement("canvas", aW(iW({}, a), {
			height: r,
			width: i,
			ref: this.handleRef
		}));
	}
};
sW.defaultProps = {
	height: 128,
	width: 128
};
var cW = {
	position: "absolute",
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	width: "100%",
	height: "100%"
}, lW = class extends e.PureComponent {
	componentDidUpdate() {
		if (this.props.resolutionX <= 0) throw Error("resolutionX must be larger than zero");
		if (this.props.resolutionY <= 0) throw Error("resolutionY must be larger than zero");
	}
	render() {
		let t = this.props, { hash: n, height: r, width: i, punch: a, resolutionX: o, resolutionY: s, style: c } = t, l = oW(t, [
			"hash",
			"height",
			"width",
			"punch",
			"resolutionX",
			"resolutionY",
			"style"
		]);
		return e.createElement("div", aW(iW({}, l), { style: aW(iW({
			display: "inline-block",
			height: r,
			width: i
		}, c), { position: "relative" }) }), e.createElement(sW, {
			hash: n,
			height: s,
			width: o,
			punch: a,
			style: cW
		}));
	}
};
lW.defaultProps = {
	height: 128,
	width: 128,
	resolutionX: 32,
	resolutionY: 32
};
var uW = {
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
}, dW = /* @__PURE__ */ function(e) {
	return e.ERROR = "ERROR", e.HIDDEN = "HIDDEN", e.READY = "READY", e;
}({}), fW = /* @__PURE__ */ function(e) {
	return e.NONE = "NONE", e.SPINNER = "SPINNER", e.BLURHASH = "BLURHASH", e;
}({});
function pW({ placeholder: e, blurhash: n, maxWidth: r, maxHeight: i, loadingLabel: a }) {
	switch (e) {
		case fW.BLURHASH: return n ? /* @__PURE__ */ t.createElement(lW, {
			className: uW.blurhash,
			hash: n,
			width: r ?? 320,
			height: i ?? 240
		}) : /* @__PURE__ */ t.createElement(cO, {
			"aria-label": a,
			role: "progressbar"
		});
		case fW.SPINNER: return /* @__PURE__ */ t.createElement(cO, {
			"aria-label": a,
			role: "progressbar"
		});
		case fW.NONE:
		default: return null;
	}
}
function mW({ vm: e, className: n, children: r }) {
	let { translate: i } = q(), { state: a, alt: o, errorLabel: s, hiddenButtonLabel: c, src: l, thumbnailSrc: u, showAnimatedContentOnHover: d, placeholder: f = fW.NONE, blurhash: p, maxWidth: m, maxHeight: g, aspectRatio: _, isSvg: v, gifLabel: y, bannerLabel: b, tooltipLabel: x, linkUrl: S, linkTarget: C } = X(e), [w, T] = h(!1), [E, D] = h(!1), O = w || E, k = (0, V.default)(n, uW.root);
	if (a === dW.ERROR) return /* @__PURE__ */ t.createElement("span", { className: (0, V.default)(k, uW.error) }, /* @__PURE__ */ t.createElement(OH, {
		className: uW.errorIcon,
		width: "16",
		height: "16"
	}), s);
	let A = O && d && l ? l : u ?? l, j = m === void 0 ? void 0 : `min(100%, ${m}px)`, M = {
		width: j,
		maxWidth: m,
		maxHeight: g,
		aspectRatio: _
	}, ee = v ? {
		width: j,
		maxWidth: m,
		maxHeight: g
	} : void 0, N = pW({
		placeholder: f,
		blurhash: p,
		maxWidth: m,
		maxHeight: g,
		loadingLabel: i("common|loading")
	}), P = N !== null, te = a === dW.HIDDEN ? /* @__PURE__ */ t.createElement("div", { style: {
		width: m,
		height: g
	} }, /* @__PURE__ */ t.createElement("button", {
		type: "button",
		className: uW.hiddenButton,
		onClick: e.onHiddenButtonClick
	}, /* @__PURE__ */ t.createElement("div", { className: uW.hiddenButtonContent }, /* @__PURE__ */ t.createElement(qD, null), /* @__PURE__ */ t.createElement("span", null, c)))) : A ? /* @__PURE__ */ t.createElement("img", {
		className: uW.image,
		src: A,
		alt: o,
		onError: e.onImageError,
		onLoad: e.onImageLoad,
		onMouseEnter: () => T(!0),
		onMouseLeave: () => T(!1)
	}) : null, ne = a === dW.READY && b && O ? /* @__PURE__ */ t.createElement("span", { className: uW.banner }, b) : null, F = a === dW.READY && y && !O ? /* @__PURE__ */ t.createElement("p", { className: uW.gifLabel }, y) : null, re = /* @__PURE__ */ t.createElement("div", {
		className: uW.thumbnailContainer,
		style: M
	}, P && /* @__PURE__ */ t.createElement("div", { className: (0, V.default)(uW.placeholder, { [uW.placeholderBlurhash]: f === fW.BLURHASH && !!p }) }, N), /* @__PURE__ */ t.createElement("div", {
		className: uW.mediaContent,
		style: ee
	}, te, F, ne));
	return x && (re = /* @__PURE__ */ t.createElement(M_, {
		description: x,
		placement: "right",
		isTriggerInteractive: !0
	}, re)), a === dW.READY && S && (re = /* @__PURE__ */ t.createElement("a", {
		href: S,
		target: C,
		rel: C === "_blank" ? "noreferrer noopener" : void 0,
		className: uW.link,
		onClick: e.onLinkClick,
		onFocus: () => D(!0),
		onBlur: () => D(!1)
	}, re)), /* @__PURE__ */ t.createElement("div", { className: k }, re, r);
}
var hW = {
	root: "_root_mntwr_1",
	container: "_container_mntwr_5",
	video: "_video_mntwr_10",
	hiddenButton: "_hiddenButton_mntwr_16",
	hiddenButtonContent: "_hiddenButtonContent_mntwr_29",
	loadingContainer: "_loadingContainer_mntwr_39",
	error: "_error_mntwr_47"
}, gW = {
	ERROR: "ERROR",
	HIDDEN: "HIDDEN",
	LOADING: "LOADING",
	READY: "READY"
};
function _W({ vm: e, className: n, containerClassName: r, videoRef: i, children: a }) {
	let { state: o, videoLabel: s, videoTitle: c, hiddenButtonLabel: l, errorLabel: u, maxWidth: d, maxHeight: f, aspectRatio: p, src: m, poster: h, preload: g, controls: _, muted: v, autoPlay: y } = X(e), b = (0, V.default)(n, hW.root), x = (0, V.default)(r, hW.container), S = {
		width: d === void 0 ? void 0 : `min(100%, ${d}px)`,
		maxWidth: d,
		maxHeight: f,
		aspectRatio: p
	};
	return o === gW.ERROR ? /* @__PURE__ */ t.createElement("span", { className: (0, V.default)(b, hW.error) }, /* @__PURE__ */ t.createElement(SH, {
		width: "16",
		height: "16"
	}), u) : o === gW.HIDDEN ? /* @__PURE__ */ t.createElement("span", { className: b }, /* @__PURE__ */ t.createElement("div", {
		className: x,
		style: S
	}, /* @__PURE__ */ t.createElement("button", {
		type: "button",
		onClick: e.onPreviewClick,
		className: hW.hiddenButton
	}, /* @__PURE__ */ t.createElement("div", { className: hW.hiddenButtonContent }, /* @__PURE__ */ t.createElement(qD, null), /* @__PURE__ */ t.createElement("span", null, l))))) : o === gW.LOADING ? /* @__PURE__ */ t.createElement("span", { className: b }, /* @__PURE__ */ t.createElement("div", {
		className: x,
		style: S
	}, /* @__PURE__ */ t.createElement("div", { className: hW.loadingContainer }, /* @__PURE__ */ t.createElement(cO, {
		"aria-label": "Loading...",
		role: "progressbar"
	})))) : /* @__PURE__ */ t.createElement("span", { className: b }, /* @__PURE__ */ t.createElement("div", {
		className: x,
		style: S,
		"data-video-body-mask-target": ""
	}, /* @__PURE__ */ t.createElement("video", {
		className: hW.video,
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
var vW = {
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
}, yW = /* @__PURE__ */ function(e) {
	return e.TEXT = "TEXT", e.NOTICE = "NOTICE", e.EMOTE = "EMOTE", e.CAPTION = "CAPTION", e;
}({}), bW = /* @__PURE__ */ function(e) {
	return e.NONE = "NONE", e.LINK = "LINK", e.ACTION = "ACTION", e;
}({});
function xW(e, t) {
	return !t || !o(e) ? e : r(e, { ref: t });
}
function SW({ vm: e, body: n, bodyRef: r, urlPreviews: i, className: a }) {
	let { id: o, kind: s, bodyWrapper: c = bW.NONE, bodyLinkHref: l, bodyActionAriaLabel: u, showEditedMarker: d, editedMarkerText: f, editedMarkerTooltip: p, editedMarkerCaption: m, showPendingModerationMarker: h, pendingModerationText: g, emoteSenderName: _ } = X(e), v = (0, V.default)(a, vW.root, {
		[vW.text]: s === yW.TEXT,
		[vW.notice]: s === yW.NOTICE,
		[vW.emote]: s === yW.EMOTE,
		[vW.caption]: s === yW.CAPTION
	}), y = xW(n, r), b = e.onEditedMarkerClick ? (t) => {
		t.preventDefault(), t.stopPropagation(), e.onEditedMarkerClick?.(t);
	} : void 0, x = [];
	if (d) {
		let e = /* @__PURE__ */ t.createElement("button", {
			type: "button",
			className: (0, V.default)(vW.annotation, vW.editedMarker),
			onClick: b
		}, /* @__PURE__ */ t.createElement("span", null, f));
		x.push(p ? /* @__PURE__ */ t.createElement(M_, {
			key: "edited-marker",
			description: p,
			caption: m,
			isTriggerInteractive: !0
		}, e) : t.cloneElement(e, { key: "edited-marker" }));
	}
	if (h && x.push(/* @__PURE__ */ t.createElement("span", {
		key: "pending-moderation-marker",
		className: vW.annotation
	}, g)), c === bW.LINK && l ? y = /* @__PURE__ */ t.createElement("a", {
		href: l,
		className: vW.bodyLink
	}, y) : c === bW.ACTION && (y = /* @__PURE__ */ t.createElement("button", {
		type: "button",
		"aria-label": u,
		className: vW.bodyAction,
		onClick: e.onBodyActionClick
	}, y)), x.length > 0) {
		let e = (0, V.default)(vW.annotated, { [vW.annotatedInline]: s === yW.EMOTE });
		y = s === yW.EMOTE ? /* @__PURE__ */ t.createElement("span", {
			dir: "auto",
			className: e
		}, y, x) : /* @__PURE__ */ t.createElement("div", {
			dir: "auto",
			className: e
		}, y, x);
	}
	return s === yW.EMOTE ? /* @__PURE__ */ t.createElement("div", {
		id: o,
		className: v,
		onClickCapture: e.onRootClick,
		dir: "auto"
	}, "*\xA0", /* @__PURE__ */ t.createElement("button", {
		type: "button",
		className: vW.emoteSender,
		onClick: e.onEmoteSenderClick
	}, _), "\xA0", y, i) : /* @__PURE__ */ t.createElement("div", {
		id: o,
		className: v,
		onClickCapture: e.onRootClick
	}, y, i);
}
var CW = {
	tileErrorView: "_tileErrorView_1dv8p_1",
	line: "_line_1dv8p_7",
	bubble: "_bubble_1dv8p_15",
	message: "_message_1dv8p_19",
	viewSourceButton: "_viewSourceButton_1dv8p_23"
};
//#endregion
//#region src/room/timeline/event-tile/EventTileView/TileErrorView/TileErrorView.tsx
function wW({ vm: e, className: n }) {
	let { message: r, eventType: i, bugReportCtaLabel: a, viewSourceCtaLabel: o, layout: s = "group" } = X(e);
	return /* @__PURE__ */ t.createElement("li", {
		className: (0, V.default)(CW.tileErrorView, n, { [CW.bubble]: s === "bubble" }),
		"data-layout": s
	}, /* @__PURE__ */ t.createElement("div", {
		className: CW.line,
		role: "status"
	}, /* @__PURE__ */ t.createElement("span", { className: CW.message }, r, i && ` (${i})`), a && /* @__PURE__ */ t.createElement($f, {
		kind: "secondary",
		size: "sm",
		onClick: e.onBugReportClick
	}, a), o && /* @__PURE__ */ t.createElement("button", {
		type: "button",
		className: CW.viewSourceButton,
		onClick: e.onViewSourceClick
	}, o)));
}
var TW = {
	pill: "_pill_1i8jm_8",
	label: "_label_1i8jm_14"
};
//#endregion
//#region src/core/pill-input/Pill/Pill.tsx
function EW({ className: e, children: n, label: r, onClick: i, ...a }) {
	let o = d(), { translate: s } = q();
	return /* @__PURE__ */ t.createElement(J, {
		display: "inline-flex",
		gap: "var(--cpd-space-1-5x)",
		align: "center",
		className: (0, V.default)(TW.pill, e),
		...a
	}, n, /* @__PURE__ */ t.createElement("span", {
		id: o,
		className: TW.label
	}, r), i && /* @__PURE__ */ t.createElement(L_, {
		"aria-describedby": o,
		size: "16px",
		onClick: i,
		"aria-label": s("action|delete"),
		className: "mx_Dialog_nonDialogButton"
	}, /* @__PURE__ */ t.createElement(G_, null)));
}
//#endregion
//#region ../../node_modules/react-merge-refs/dist/index.js
function DW(e) {
	return (t) => {
		for (let n of e) kW(n, t);
	};
}
function OW(e) {
	return (t) => {
		let n = [];
		for (let r of e) {
			let e = kW(r, t), i = typeof e == "function";
			n.push(i ? e : () => kW(r, null));
		}
		return () => {
			for (let e of n) e();
		};
	};
}
function kW(e, t) {
	if (typeof e == "function") return e(t);
	e && (e.current = t);
}
var AW = parseInt(_.split(".")[0], 10) >= 19 ? OW : DW;
function jW(e) {
	return p(() => AW(e), e);
}
var MW = {
	pillInput: "_pillInput_1yam9_8",
	input: "_input_1yam9_16",
	largerInput: "_largerInput_1yam9_32"
};
//#endregion
//#region src/core/pill-input/PillInput/PillInput.tsx
function NW({ className: e, children: r, onRemoveChildren: i, inputProps: a, ...o }) {
	let s = m(null), c = dI(a, ["onKeyDown", "ref"]), l = jW([s, a?.ref]), u = n.toArray(r).length > 0;
	return /* @__PURE__ */ t.createElement(J, {
		...o,
		gap: "var(--cpd-space-1x)",
		direction: "column",
		className: (0, V.default)(MW.pillInput, e),
		onClick: (e) => {
			e.preventDefault(), e.stopPropagation(), s.current?.focus();
		}
	}, u && /* @__PURE__ */ t.createElement(J, {
		gap: "var(--cpd-space-1x)",
		wrap: "wrap",
		align: "center"
	}, r), /* @__PURE__ */ t.createElement("input", {
		ref: l,
		autoComplete: "off",
		className: (0, V.default)(MW.input, { [MW.largerInput]: u }),
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
var PW = {
	container: "_container_1xryk_8",
	secondaryAction: "_secondaryAction_1xryk_16",
	primaryAction: "_primaryAction_1xryk_20",
	title: "_title_1xryk_24",
	description: "_description_1xryk_28"
}, FW = {
	ConnectionLost: "ConnectionLost",
	NeedsConsent: "NeedsConsent",
	ResourceLimited: "ResourceLimited",
	UnsentMessages: "UnsentMessages",
	LocalRoomFailed: "LocalRoomFailed"
};
function IW({ vm: e }) {
	let { translate: n } = q(), r = X(e), i = d(), a = c((t) => {
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
		case FW.ConnectionLost: return /* @__PURE__ */ t.createElement(rR, {
			type: "info",
			role: "status",
			"aria-labelledby": i
		}, /* @__PURE__ */ t.createElement("div", { className: PW.container }, /* @__PURE__ */ t.createElement(Xf, {
			className: PW.title,
			id: i,
			weight: "medium"
		}, Y("tchap|server_connectivity_lost_title", void 0, { a: (e) => /* @__PURE__ */ t.createElement("a", {
			target: "_blank",
			rel: "noreferrer noopener",
			href: "https://status.tchap.numerique.gouv.fr"
		}, e) })), /* @__PURE__ */ t.createElement(Xf, { className: PW.description }, n("room|status_bar|server_connectivity_lost_description"))));
		case FW.NeedsConsent: return /* @__PURE__ */ t.createElement(rR, {
			type: "info",
			role: "status",
			"aria-labelledby": i,
			actions: /* @__PURE__ */ t.createElement($f, {
				onClick: l,
				className: PW.primaryAction,
				kind: "primary",
				size: "sm",
				as: "a",
				href: r.consentUri,
				target: "_blank",
				rel: "noreferrer noopener"
			}, n("terms|tac_button"))
		}, /* @__PURE__ */ t.createElement("div", { className: PW.container }, /* @__PURE__ */ t.createElement(Xf, {
			className: PW.title,
			id: i,
			weight: "medium"
		}, n("room|status_bar|requires_consent_agreement_title"))));
		case FW.ResourceLimited: return /* @__PURE__ */ t.createElement(rR, {
			type: "info",
			role: "status",
			"aria-labelledby": i,
			actions: r.adminContactHref && /* @__PURE__ */ t.createElement($f, {
				kind: "secondary",
				size: "sm",
				as: "a",
				href: r.adminContactHref,
				target: "_blank",
				rel: "noreferrer noopener"
			}, "Contact admin")
		}, /* @__PURE__ */ t.createElement("div", { className: PW.container }, /* @__PURE__ */ t.createElement(Xf, {
			className: PW.title,
			id: i,
			weight: "medium"
		}, {
			monthly_active_user: n("room|status_bar|monthly_user_limit_reached_title"),
			hs_disabled: n("room|status_bar|homeserver_blocked_title")
		}[r.resourceLimit] || n("room|status_bar|exceeded_resource_limit_title")), /* @__PURE__ */ t.createElement(Xf, { className: PW.description }, n("room|status_bar|exceeded_resource_limit_description"))));
		case FW.LocalRoomFailed: return /* @__PURE__ */ t.createElement(rR, {
			role: "status",
			type: "info",
			"aria-labelledby": i,
			actions: /* @__PURE__ */ t.createElement($f, {
				size: "sm",
				kind: "primary",
				className: PW.primaryAction,
				Icon: cU,
				onClick: s
			}, n("action|retry"))
		}, /* @__PURE__ */ t.createElement(Xf, {
			className: PW.title,
			id: i,
			weight: "medium"
		}, n("room|status_bar|failed_to_create_room_title")));
		case FW.UnsentMessages: return /* @__PURE__ */ t.createElement(rR, {
			role: "status",
			type: "info",
			actions: r.isResending ? /* @__PURE__ */ t.createElement(cO, null) : /* @__PURE__ */ t.createElement(t.Fragment, null, e.onDeleteAllClick && /* @__PURE__ */ t.createElement($f, {
				size: "sm",
				kind: "secondary",
				Icon: iH,
				className: PW.secondaryAction,
				onClick: a
			}, n("room|status_bar|delete_all")), e.onResendAllClick && /* @__PURE__ */ t.createElement($f, {
				size: "sm",
				kind: "primary",
				Icon: cU,
				onClick: o,
				className: PW.primaryAction
			}, n("room|status_bar|retry_all"))),
			"aria-labelledby": i
		}, /* @__PURE__ */ t.createElement("div", { className: PW.container }, /* @__PURE__ */ t.createElement(Xf, {
			className: PW.title,
			id: i,
			weight: "medium"
		}, Y("tchap|server_connectivity_lost_title", void 0, { a: (e) => /* @__PURE__ */ t.createElement("a", {
			target: "_blank",
			rel: "noreferrer noopener",
			href: "https://status.tchap.numerique.gouv.fr"
		}, e) })), /* @__PURE__ */ t.createElement(Xf, { className: PW.description }, n("room|status_bar|select_messages_to_retry"))));
		default: return null;
	}
}
var LW = {
	container: "_container_19tks_8",
	header: "_header_19tks_22",
	roundedCornerContainer: "_roundedCornerContainer_19tks_30"
}, RW = ({ vm: e, RoomAvatar: n }) => {
	let r = X(e), { translate: i } = q();
	return /* @__PURE__ */ t.createElement("div", {
		"data-testid": "widget-pip-container",
		className: LW.container,
		onMouseDown: e.onStartMoving
	}, /* @__PURE__ */ t.createElement("div", { className: LW.header }, /* @__PURE__ */ t.createElement(L_, {
		size: "28px",
		"data-testid": "base-card-back-button",
		onClick: (t) => e.onBackClick(t),
		tooltip: i("action|back"),
		kind: "secondary"
	}, /* @__PURE__ */ t.createElement(HO, null)), /* @__PURE__ */ t.createElement(n, { size: "20px" }), r.roomName), /* @__PURE__ */ t.createElement("div", { className: LW.roundedCornerContainer }, /* @__PURE__ */ t.createElement(e.persistentAppComponent, {
		persistentWidgetId: r.widgetId,
		persistentRoomId: r.roomId
	})));
};
//#endregion
//#region src/room/HistoryVisibilityBadge/HistoryVisibilityBadge.tsx
function zW({ historyVisibility: e }) {
	let n = {
		color: "var(--cpd-color-icon-info-primary)",
		width: "1rem",
		height: "1rem"
	};
	switch (e) {
		case "invited":
		case "joined": return /* @__PURE__ */ t.createElement(q_, { kind: "blue" }, /* @__PURE__ */ t.createElement(YD, n), Y("room|history_visibility_badge|private"));
		case "shared": return /* @__PURE__ */ t.createElement(q_, { kind: "blue" }, /* @__PURE__ */ t.createElement(wH, n), Y("room|history_visibility_badge|shared"));
		case "world_readable": return /* @__PURE__ */ t.createElement(q_, { kind: "blue" }, /* @__PURE__ */ t.createElement(SU, n), Y("room|history_visibility_badge|world_readable"));
		default: return null;
	}
}
//#endregion
//#region src/room/right-panel/WidgetContextMenuView/WidgetContextMenuView.tsx
var BW = ({ vm: e }) => {
	let { translate: n } = q(), { showStreamAudioStreamButton: r, showEditButton: i, showSnapshotButton: a, showDeleteButton: o, showRevokeButton: s, showMoveButtons: c, isMenuOpened: l, userWidget: u, trigger: d } = X(e), f;
	r && (f = /* @__PURE__ */ t.createElement(K, {
		onSelect: e.onStreamAudioClick,
		label: n("widget|context_menu|start_audio_stream")
	}));
	let p;
	i && (p = /* @__PURE__ */ t.createElement(K, {
		onSelect: e.onEditClick,
		label: n("action|edit")
	}));
	let m;
	a && (m = /* @__PURE__ */ t.createElement(K, {
		onSelect: e.onSnapshotClick,
		label: n("widget|context_menu|screenshot")
	}));
	let h;
	o && (h = /* @__PURE__ */ t.createElement(K, {
		onSelect: e.onDeleteClick,
		label: n(u ? "action|remove" : "widget|context_menu|remove")
	}));
	let g;
	s && (g = /* @__PURE__ */ t.createElement(K, {
		onSelect: e.onRevokeClick,
		label: n("widget|context_menu|revoke")
	}));
	let [_, v] = c, y;
	_ && (y = /* @__PURE__ */ t.createElement(K, {
		onSelect: () => e.onMoveButton(-1),
		label: n("widget|context_menu|move_left")
	}));
	let b;
	v && (b = /* @__PURE__ */ t.createElement(K, {
		onSelect: () => e.onMoveButton(1),
		label: n("widget|context_menu|move_right")
	}));
	let x = () => l ? /* @__PURE__ */ t.createElement(t.Fragment, null, f, p, g, h, m, y, b) : null, S = t.isValidElement(d) ? d : /* @__PURE__ */ t.createElement(L_, {
		size: "24px",
		"aria-label": "context menu trigger button",
		inert: !0,
		tabIndex: -1
	}, /* @__PURE__ */ t.createElement(JH, null));
	return /* @__PURE__ */ t.createElement(LE, {
		title: "Widget context menu",
		open: l,
		showTitle: !1,
		side: "right",
		align: "start",
		trigger: S,
		onOpenChange: e.onFinished
	}, x());
}, VW = { content: "_content_u6fft_8" }, HW = { timelineSeparator: "_timelineSeparator_yq5ye_8" }, UW = ({ label: e, className: n, children: r, role: i = "separator" }) => /* @__PURE__ */ t.createElement(J, {
	className: (0, V.default)(n, HW.timelineSeparator),
	role: i,
	"aria-label": i === "separator" ? e : void 0,
	align: "center"
}, /* @__PURE__ */ t.createElement("hr", { role: "none" }), r, /* @__PURE__ */ t.createElement("hr", { role: "none" })), WW = 15e3, GW = 75e3, KW = 45, qW = 75, JW = 23, YW = 26;
function XW(e, t) {
	let n = Date.now() - e, r = Math.abs(Math.ceil(n / 6e4)), i = Math.ceil(r / 60), a = Math.ceil(i / 24), o = t?.translate ?? Y;
	return n >= 0 ? n <= WW ? o("time|few_seconds_ago") : n <= GW ? o("time|about_minute_ago") : r <= KW ? o("time|n_minutes_ago", { num: r }) : r <= qW ? o("time|about_hour_ago") : i <= JW ? o("time|n_hours_ago", { num: i }) : i <= YW ? o("time|about_day_ago") : o("time|n_days_ago", { num: a }) : (n = Math.abs(n), n <= WW ? o("time|in_few_seconds") : n <= GW ? o("time|in_about_minute") : r <= KW ? o("time|in_n_minutes", { num: r }) : r <= qW ? o("time|in_about_hour") : i <= JW ? o("time|in_n_hours", { num: i }) : i <= YW ? o("time|in_about_day") : o("time|in_n_days", { num: a }));
}
function ZW(e) {
	return new Intl.RelativeTimeFormat(e?.language, {
		style: "long",
		numeric: "auto"
	});
}
var QW = {
	picker_menu_item: "_picker_menu_item_1tj52_8",
	picker_form: "_picker_form_1tj52_12",
	picker_input: "_picker_input_1tj52_22",
	picker_input_date: "_picker_input_date_1tj52_28"
}, $W = ({ vm: e, inputRef: n, onSubmitted: r, onDismissed: i }) => {
	let a = X(e), o = Hf(a.jumpFromDate ? new Date(a.jumpFromDate) : /* @__PURE__ */ new Date()), { translate: s } = q(), c = d(), [l, u] = h(o), f = m(null), p = n ?? f, g = m(null), _ = (e) => {
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
	return /* @__PURE__ */ t.createElement(K, {
		as: "div",
		"data-testid": "jump-to-date-picker",
		label: s("room|jump_to_date"),
		onSelect: S,
		hideChevron: !0,
		className: QW.picker_menu_item
	}, /* @__PURE__ */ t.createElement(lO, {
		className: QW.picker_form,
		onSubmit: b
	}, /* @__PURE__ */ t.createElement(uO, {
		name: "jump-to-date-field",
		className: QW.picker_input
	}, /* @__PURE__ */ t.createElement(GD, {
		ref: p,
		id: c,
		type: "date",
		"aria-label": s("room|jump_to_date_prompt"),
		onInput: v,
		onKeyDown: _,
		value: l,
		max: Hf(/* @__PURE__ */ new Date()),
		className: QW.picker_input_date
	})), /* @__PURE__ */ t.createElement(dO, {
		ref: g,
		className: QW.picker_button,
		type: "submit",
		kind: "primary",
		size: "sm",
		onKeyDown: x
	}, s("action|go"))));
}, eG = {
	picker_menu: "_picker_menu_158c5_8",
	picker_menu_item: "_picker_menu_item_158c5_14",
	picker_separator: "_picker_separator_158c5_18"
}, tG = ({ vm: e, open: n, trigger: r, onOpenChange: i }) => {
	let a = q(), { translate: o } = q(), s = m(null), c = (e) => {
		e.key === "ArrowDown" && (e.preventDefault(), s.current?.focus());
	};
	return /* @__PURE__ */ t.createElement(LE, {
		open: n,
		onOpenChange: (e) => {
			i?.(e);
		},
		title: o("room|jump_to_date"),
		showTitle: !1,
		trigger: r,
		align: "start",
		className: eG.picker_menu
	}, /* @__PURE__ */ t.createElement(K, {
		label: lN(ZW(a).format(-1, "week")),
		onSelect: () => e.onLastWeekPicked?.(),
		"data-testid": "jump-to-date-last-week",
		hideChevron: !0,
		className: eG.picker_menu_item
	}), /* @__PURE__ */ t.createElement(K, {
		label: lN(ZW(a).format(-1, "month")),
		onSelect: () => e.onLastMonthPicked?.(),
		"data-testid": "jump-to-date-last-month",
		hideChevron: !0,
		className: eG.picker_menu_item
	}), /* @__PURE__ */ t.createElement(K, {
		label: o("room|jump_to_date_beginning"),
		onSelect: () => e.onBeginningPicked?.(),
		"data-testid": "jump-to-date-beginning",
		hideChevron: !0,
		className: eG.picker_menu_item,
		onKeyDown: c
	}), /* @__PURE__ */ t.createElement(PO, {
		decorative: !0,
		className: eG.picker_separator
	}), /* @__PURE__ */ t.createElement($W, {
		vm: e,
		inputRef: s,
		onSubmitted: () => i?.(!1),
		onDismissed: () => i?.(!1)
	}));
}, nG = a(function({ label: e, tooltipOpen: n, className: r, ...i }, a) {
	let { translate: o } = q();
	return /* @__PURE__ */ t.createElement(M_, {
		description: o("room|jump_to_date"),
		placement: "right",
		open: n
	}, /* @__PURE__ */ t.createElement(J, {
		ref: a,
		"data-testid": "jump-to-date-separator-button",
		className: r,
		"aria-live": "off",
		"aria-label": o("room|jump_to_date"),
		role: "button",
		tabIndex: 0,
		...i
	}, /* @__PURE__ */ t.createElement(WT, {
		as: "h2",
		size: "lg",
		"aria-hidden": "true"
	}, e), /* @__PURE__ */ t.createElement(BO, null)));
});
//#endregion
//#region src/room/timeline/DateSeparatorView/DateSeparatorView.tsx
function rG({ vm: e, className: n }) {
	let { label: r, jumpToEnabled: i } = X(e), [a, o] = h(!1), [s, c] = h(!1), [l, u] = h(!1);
	return i ? /* @__PURE__ */ t.createElement(UW, {
		label: r,
		className: (0, V.default)(n),
		role: "none"
	}, /* @__PURE__ */ t.createElement(tG, {
		vm: e,
		open: a,
		onOpenChange: (e) => {
			o(e), e && (c(!1), u(!1));
		},
		trigger: /* @__PURE__ */ t.createElement(nG, {
			label: r,
			tooltipOpen: !a && (s || l),
			className: VW.content,
			onMouseEnter: () => c(!0),
			onMouseLeave: () => c(!1),
			onFocus: (e) => u(e.currentTarget.matches(":focus-visible")),
			onBlur: () => u(!1)
		})
	})) : /* @__PURE__ */ t.createElement(UW, {
		label: r,
		className: (0, V.default)(n)
	}, /* @__PURE__ */ t.createElement(J, { className: VW.content }, /* @__PURE__ */ t.createElement(WT, {
		as: "h2",
		size: "lg",
		"aria-hidden": "true"
	}, r)));
}
var iG = {
	toolbar: "_toolbar_1ax4y_8",
	toolbar_item: "_toolbar_item_1ax4y_14"
};
//#endregion
//#region src/room/timeline/event-tile/actions/ActionBarView/ActionBarButton.tsx
function aG({ presentation: e, buttonRef: n, label: r, onActivate: i, icon: a, disabled: o, ariaPressed: s, ariaExpanded: c, tooltipDescription: l, tooltipCaption: u }) {
	let d = e === "icon", f = (e) => {
		e.preventDefault(), e.stopPropagation(), i?.(e.currentTarget);
	};
	return /* @__PURE__ */ t.createElement(M_, {
		description: l ?? r,
		caption: u,
		placement: "top"
	}, /* @__PURE__ */ t.createElement($f, {
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
		className: iG.toolbar_item,
		Icon: d ? a : void 0
	}, d ? void 0 : r));
}
//#endregion
//#region src/room/timeline/event-tile/actions/ActionBarView/ActionBarView.tsx
var $ = /* @__PURE__ */ function(e) {
	return e.Cancel = "cancel", e.CopyLink = "copyLink", e.Download = "download", e.Edit = "edit", e.Expand = "expand", e.Hide = "hide", e.Options = "options", e.Pin = "pin", e.React = "react", e.Remove = "remove", e.Reply = "reply", e.ReplyInThread = "replyInThread", e.Resend = "resend", e.ViewInRoom = "viewInRoom", e.ViewSource = "viewSource", e;
}({});
function oG({ vm: e, className: n }) {
	let { translate: r } = q(), [i, a] = h(0), { actions: o, presentation: s = "icon", isThreadReplyAllowed: l, isDownloadEncrypted: u, isDownloadLoading: d, isPinned: g, isQuoteExpanded: _ } = X(e), v = m({}), y = p(() => Object.fromEntries(Object.values($).map((e) => [e, (t) => {
		v.current[e] = t;
	}])), []), b = {};
	b[$.Edit] = /* @__PURE__ */ t.createElement(aG, {
		key: $.Edit,
		presentation: s,
		buttonRef: y[$.Edit],
		label: r("action|edit"),
		onActivate: e.onEditClick,
		icon: fH
	});
	let x = r(g ? "action|unpin" : "action|pin");
	b[$.Pin] = /* @__PURE__ */ t.createElement(aG, {
		key: $.Pin,
		presentation: s,
		buttonRef: y[$.Pin],
		label: x,
		onActivate: e.onPinClick,
		icon: g ? vU : QH,
		ariaPressed: g
	}), b[$.Cancel] = /* @__PURE__ */ t.createElement(aG, {
		key: $.Cancel,
		presentation: s,
		buttonRef: y[$.Cancel],
		label: r("action|delete"),
		onActivate: e.onCancelClick,
		icon: iH
	}), b[$.CopyLink] = /* @__PURE__ */ t.createElement(aG, {
		key: $.CopyLink,
		presentation: s,
		buttonRef: y[$.CopyLink],
		label: r("timeline|mab|copy_link_thread"),
		onActivate: e.onCopyLinkClick,
		icon: PH
	}), b[$.Reply] = /* @__PURE__ */ t.createElement(aG, {
		key: $.Reply,
		presentation: s,
		buttonRef: y[$.Reply],
		label: r("action|reply"),
		onActivate: e.onReplyClick,
		icon: oU
	}), b[$.React] = /* @__PURE__ */ t.createElement(aG, {
		key: $.React,
		presentation: s,
		buttonRef: y[$.React],
		label: r("action|react"),
		onActivate: e.onReactionsClick,
		icon: iU
	});
	let S = r("action|download");
	d && (S = r(u ? "timeline|download_action_decrypting" : "timeline|download_action_downloading")), b[$.Download] = /* @__PURE__ */ t.createElement(aG, {
		key: $.Download,
		presentation: s,
		buttonRef: y[$.Download],
		label: S,
		onActivate: e.onDownloadClick,
		icon: d ? cO : cH,
		disabled: d
	}), b[$.Hide] = /* @__PURE__ */ t.createElement(aG, {
		key: $.Hide,
		presentation: s,
		buttonRef: y[$.Hide],
		label: r("action|hide"),
		onActivate: e.onHideClick,
		icon: YD
	});
	let C = r(l ? "action|reply_in_thread" : "threads|error_start_thread_existing_relation");
	b[$.ReplyInThread] = /* @__PURE__ */ t.createElement(aG, {
		key: $.ReplyInThread,
		presentation: s,
		buttonRef: y[$.ReplyInThread],
		label: r("action|reply_in_thread"),
		tooltipDescription: C,
		onActivate: e.onReplyInThreadClick,
		icon: gU,
		disabled: !l
	}), b[$.Resend] = /* @__PURE__ */ t.createElement(aG, {
		key: $.Resend,
		presentation: s,
		buttonRef: y[$.Resend],
		label: r("action|retry"),
		onActivate: e.onResendClick,
		icon: cU
	});
	let w = r(_ ? "timeline|mab|collapse_reply_chain" : "timeline|mab|expand_reply_chain");
	b[$.Expand] = /* @__PURE__ */ t.createElement(aG, {
		key: $.Expand,
		presentation: s,
		buttonRef: y[$.Expand],
		label: w,
		tooltipCaption: `${r("keyboard|shift")} + ${r("action|click")}`,
		onActivate: e.onToggleThreadExpanded,
		icon: _ ? eH : gH,
		ariaExpanded: _
	}), b[$.Options] = /* @__PURE__ */ t.createElement(aG, {
		key: $.Options,
		presentation: s,
		buttonRef: y[$.Options],
		label: r("common|options"),
		onActivate: e.onOptionsClick,
		icon: JH
	}), b[$.Remove] = /* @__PURE__ */ t.createElement(aG, {
		key: $.Remove,
		presentation: s,
		buttonRef: y[$.Remove],
		label: r("action|remove"),
		onActivate: e.onRemoveClick,
		icon: iH
	}), b[$.ViewInRoom] = /* @__PURE__ */ t.createElement(aG, {
		key: $.ViewInRoom,
		presentation: s,
		buttonRef: y[$.ViewInRoom],
		label: r("timeline|mab|view_in_room"),
		onActivate: e.onViewInRoomClick,
		icon: qD
	}), b[$.ViewSource] = /* @__PURE__ */ t.createElement(aG, {
		key: $.ViewSource,
		presentation: s,
		buttonRef: y[$.ViewSource],
		label: r("action|view_source"),
		onActivate: e.onViewSourceClick,
		icon: AH
	});
	let T = c((e) => {
		switch (e) {
			case $.Download: return d;
			case $.ReplyInThread: return !l;
			default: return !1;
		}
	}, [d, l]), E = p(() => o.map((e) => ({
		action: e,
		disabled: T(e)
	})), [o, T]), D = E.map((e, t) => e.disabled ? -1 : t).filter((e) => e >= 0), O = D[0] ?? 0, k = E[i] && !E[i].disabled ? i : O;
	f(() => {
		a(k), E.forEach(({ action: e }, t) => {
			let n = v.current[e] ?? null;
			n && (n.tabIndex = t === k ? 0 : -1);
		});
	}, [k, E]);
	let A = (e) => {
		let t = E[e]?.action, n = t ? v.current[t] ?? null : null;
		n && (a(e), n.focus());
	}, j = (e) => {
		if (D.length === 0) return;
		let t = E.findIndex(({ action: e }) => v.current[e] === document.activeElement), n = t >= 0 ? t : k;
		switch (e.key) {
			case "ArrowRight":
				e.preventDefault(), A(D.find((e) => e > n) ?? D[0]);
				break;
			case "ArrowLeft":
				e.preventDefault(), A([...D].reverse().find((e) => e < n) ?? D[D.length - 1]);
				break;
			case "Home":
				e.preventDefault(), A(D[0]);
				break;
			case "End":
				e.preventDefault(), A(D[D.length - 1]);
				break;
		}
	}, M = () => {
		let e = E.findIndex(({ action: e }) => v.current[e] === document.activeElement);
		e >= 0 && e !== i && a(e);
	};
	return E.length === 0 ? null : /* @__PURE__ */ t.createElement(J, {
		display: "inline-flex",
		direction: "row",
		role: "toolbar",
		"aria-label": r("timeline|mab|label"),
		"aria-live": "off",
		onKeyDown: j,
		onFocusCapture: M,
		className: (0, V.default)(n, iG.toolbar)
	}, E.map((e) => b[e.action]));
}
var sG = {
	disambiguatedProfile: "_disambiguatedProfile_oa3at_8",
	disambiguatedProfile_displayName: "_disambiguatedProfile_displayName_oa3at_14",
	disambiguatedProfile_mxid: "_disambiguatedProfile_mxid_oa3at_22"
};
//#endregion
//#region src/room/timeline/event-tile/EventTileView/DisambiguatedProfile/DisambiguatedProfileView.tsx
function cG({ vm: e, className: n }) {
	let { displayName: r, colorClass: i, displayIdentifier: a, title: o, emphasizeDisplayName: s } = X(e), c = (0, V.default)(i, {
		[sG.disambiguatedProfile_displayName]: s,
		mx_DisambiguatedProfile_displayName: s
	}), l = e.onClick ? (t) => {
		(t.key === "Enter" || t.key === " ") && (t.preventDefault(), e.onClick?.(t));
	} : void 0;
	return /* @__PURE__ */ t.createElement("div", {
		className: (0, V.default)(n, sG.disambiguatedProfile),
		title: o,
		onClick: e.onClick,
		onKeyDown: l,
		role: e.onClick ? "button" : void 0,
		tabIndex: e.onClick ? 0 : void 0
	}, /* @__PURE__ */ t.createElement("span", {
		className: c,
		dir: "auto"
	}, r), a && /* @__PURE__ */ t.createElement("span", { className: (0, V.default)("mx_DisambiguatedProfile_mxid", sG.disambiguatedProfile_mxid) }, a));
}
var lG = { content: "_content_m88ar_8" }, uG = {
	container: "_container_sq5fu_8",
	title: "_title_sq5fu_34",
	subtitle: "_subtitle_sq5fu_35"
};
//#endregion
//#region src/room/timeline/event-tile/EventTileView/EventTileBubble/EventTileBubble.tsx
function dG({ icon: e, title: n, subtitle: r, className: i, children: a, ref: o }) {
	return /* @__PURE__ */ t.createElement("div", {
		className: (0, V.default)(uG.container, i),
		ref: o
	}, e, /* @__PURE__ */ t.createElement("div", { className: uG.title }, n), r && /* @__PURE__ */ t.createElement("div", { className: uG.subtitle }, r), a);
}
//#endregion
//#region src/room/timeline/event-tile/EventTileView/EncryptionEventView/EncryptionEventView.tsx
var fG = /* @__PURE__ */ function(e) {
	return e.CHANGED = "CHANGED", e.DISABLE_ATTEMPT = "DISABLE_ATTEMPT", e.ENABLED = "ENABLED", e.ENABLED_DM = "ENABLED_DM", e.ENABLED_LOCAL = "ENABLED_LOCAL", e.UNSUPPORTED = "UNSUPPORTED", e;
}({});
function pG({ vm: e, ref: n, className: r }) {
	let { translate: i } = q(), { state: a, encryptedStateEvents: o, userName: s, timestamp: c } = X(e), l = /* @__PURE__ */ t.createElement(IH, { "data-state": "supported" }), u = i(o ? "common|state_encryption_enabled" : "common|encryption_enabled"), d = "";
	switch (a) {
		case fG.CHANGED:
			d = i("timeline|m.room.encryption|parameters_changed");
			break;
		case fG.DISABLE_ATTEMPT:
			u = i("common|encryption_enabled"), d = i("timeline|m.room.encryption|disable_attempt");
			break;
		case fG.ENABLED:
			d = i(o ? "timeline|m.room.encryption|state_enabled" : "timeline|m.room.encryption|enabled");
			break;
		case fG.ENABLED_DM:
			d = i("timeline|m.room.encryption|enabled_dm", { displayName: s });
			break;
		case fG.ENABLED_LOCAL:
			d = i("timeline|m.room.encryption|enabled_local");
			break;
		case fG.UNSUPPORTED:
		default:
			l = /* @__PURE__ */ t.createElement(V_, { "data-state": "unsupported" }), u = i("timeline|m.room.encryption|disabled"), d = i("timeline|m.room.encryption|unsupported");
			break;
	}
	return /* @__PURE__ */ t.createElement(dG, {
		icon: l,
		className: (0, V.default)(r, lG.content),
		title: u,
		subtitle: d,
		ref: n
	}, c);
}
var mG = { pinnedMessageBadge: "_pinnedMessageBadge_10mi2_8" };
//#endregion
//#region src/room/timeline/event-tile/EventTileView/PinnedMessageBadge/PinnedMessageBadge.tsx
function hG({ className: e, children: n, ...r }) {
	return /* @__PURE__ */ t.createElement("div", {
		...r,
		className: (0, V.default)(mG.pinnedMessageBadge, e)
	}, /* @__PURE__ */ t.createElement(XH, {
		width: "16px",
		height: "16px"
	}), n ?? Y("room|pinned_message_badge"));
}
//#endregion
//#region src/room/timeline/event-tile/EventTileView/TextualEventView/TextualEventView.tsx
function gG({ vm: e }) {
	let n = X(e);
	return /* @__PURE__ */ t.createElement("div", { className: "mx_TextualEvent" }, n.content);
}
var _G = {
	audioPlayer: "_audioPlayer_1eyxr_8",
	mediaInfo: "_mediaInfo_1eyxr_13",
	mediaName: "_mediaName_1eyxr_18",
	byline: "_byline_1eyxr_27",
	clock: "_clock_1eyxr_31",
	error: "_error_1eyxr_35"
};
//#endregion
//#region src/core/utils/FormattingUtils.ts
function vG(e, t = 2) {
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
function yG({ vm: e }) {
	let { translate: n } = q(), { playbackState: r, mediaName: i = n("timeline|m.audio|unnamed_audio"), sizeBytes: a, durationSeconds: o, playedSeconds: s, percentComplete: c, error: l } = X(e), u = a ? `(${vG(a)})` : null, d = r === "decoding";
	return /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement(FU, {
		className: _G.audioPlayer,
		tabIndex: 0,
		onKeyDown: e.onKeyDown,
		"aria-label": n("timeline|m.audio|audio_player"),
		role: "region"
	}, /* @__PURE__ */ t.createElement(J, {
		gap: "var(--cpd-space-2x)",
		align: "center"
	}, /* @__PURE__ */ t.createElement(tk, {
		tabIndex: -1,
		disabled: d,
		playing: r === "playing",
		togglePlay: e.togglePlay
	}), /* @__PURE__ */ t.createElement(J, {
		direction: "column",
		className: _G.mediaInfo
	}, /* @__PURE__ */ t.createElement("span", {
		className: _G.mediaName,
		"data-testid": "audio-player-name"
	}, i), /* @__PURE__ */ t.createElement(J, {
		className: _G.byline,
		gap: "var(--cpd-space-1-5x)"
	}, /* @__PURE__ */ t.createElement(Uf, { seconds: o }), u))), /* @__PURE__ */ t.createElement(J, {
		align: "center",
		gap: "var(--cpd-space-1x)",
		"data-testid": "audio-player-seek"
	}, /* @__PURE__ */ t.createElement(hI, {
		tabIndex: -1,
		disabled: d,
		value: c,
		onChange: e.onSeekbarChange
	}), /* @__PURE__ */ t.createElement(Uf, {
		className: _G.clock,
		seconds: s,
		role: "timer"
	}))), l && /* @__PURE__ */ t.createElement("span", { className: _G.error }, n("timeline|m.audio|error_downloading_audio")));
}
var bG = {
	content: "_content_1uqu1_8",
	error: "_error_1uqu1_14",
	icon: "_icon_1uqu1_23"
}, xG = /* @__PURE__ */ function(e) {
	return e.MEGOLM_KEY_WITHHELD_FOR_UNVERIFIED_DEVICE = "MEGOLM_KEY_WITHHELD_FOR_UNVERIFIED_DEVICE", e.HISTORICAL_MESSAGE_NO_KEY_BACKUP = "HISTORICAL_MESSAGE_NO_KEY_BACKUP", e.HISTORICAL_MESSAGE_BACKUP_UNCONFIGURED = "HISTORICAL_MESSAGE_BACKUP_UNCONFIGURED", e.HISTORICAL_MESSAGE_USER_NOT_JOINED = "HISTORICAL_MESSAGE_USER_NOT_JOINED", e.SENDER_IDENTITY_PREVIOUSLY_VERIFIED = "SENDER_IDENTITY_PREVIOUSLY_VERIFIED", e.UNSIGNED_SENDER_DEVICE = "UNSIGNED_SENDER_DEVICE", e.UNABLE_TO_DECRYPT = "UNABLE_TO_DECRYPT", e;
}({});
function SG(e, n, r) {
	let i = e.translate;
	switch (n) {
		case xG.MEGOLM_KEY_WITHHELD_FOR_UNVERIFIED_DEVICE: return i("timeline|decryption_failure|blocked");
		case xG.HISTORICAL_MESSAGE_NO_KEY_BACKUP: return i("timeline|decryption_failure|historical_event_no_key_backup");
		case xG.HISTORICAL_MESSAGE_BACKUP_UNCONFIGURED:
			if (r === !1) return i("timeline|decryption_failure|historical_event_unverified_device");
			break;
		case xG.HISTORICAL_MESSAGE_USER_NOT_JOINED: return i("timeline|decryption_failure|historical_event_user_not_joined");
		case xG.SENDER_IDENTITY_PREVIOUSLY_VERIFIED: return /* @__PURE__ */ t.createElement("span", null, /* @__PURE__ */ t.createElement(XV, {
			className: bG.icon,
			width: "16px",
			height: "16px"
		}), i("timeline|decryption_failure|sender_identity_previously_verified"));
		case xG.UNSIGNED_SENDER_DEVICE: return /* @__PURE__ */ t.createElement("span", null, /* @__PURE__ */ t.createElement(XV, {
			className: bG.icon,
			width: "16px",
			height: "16px"
		}), i("timeline|decryption_failure|sender_unsigned_device"));
	}
	return i("timeline|decryption_failure|unable_to_decrypt");
}
function CG(e) {
	switch (e) {
		case xG.SENDER_IDENTITY_PREVIOUSLY_VERIFIED:
		case xG.UNSIGNED_SENDER_DEVICE: return bG.error;
	}
	return null;
}
function wG({ vm: e, ref: n, className: r }) {
	let i = q(), { decryptionFailureReason: a, isLocalDeviceVerified: o } = X(e), s = (0, V.default)(bG.content, CG(a), r);
	return /* @__PURE__ */ t.createElement("div", {
		className: s,
		ref: n
	}, SG(i, a, o));
}
var TG = {
	reactionsRow: "_reactionsRow_1lcz2_8",
	showAllButton: "_showAllButton_1lcz2_16",
	addReactionButton: "_addReactionButton_1lcz2_29",
	addReactionButtonVisible: "_addReactionButtonVisible_1lcz2_48",
	addReactionButtonActive: "_addReactionButtonActive_1lcz2_52",
	addReactionButtonDisabled: "_addReactionButtonDisabled_1lcz2_56"
};
//#endregion
//#region src/room/timeline/event-tile/reactions/ReactionsRow/ReactionsRowView.tsx
function EG({ vm: e, className: n, children: r }) {
	let { ariaLabel: i, isVisible: a, showAllButtonVisible: o, showAllButtonLabel: s, showAddReactionButton: c, addReactionButtonLabel: l, addReactionButtonVisible: u, addReactionButtonActive: d, addReactionButtonDisabled: f } = X(e);
	if (!a) return /* @__PURE__ */ t.createElement(t.Fragment, null);
	let p = (0, V.default)(TG.addReactionButton, {
		[TG.addReactionButtonVisible]: u,
		[TG.addReactionButtonActive]: d,
		[TG.addReactionButtonDisabled]: f
	}), m = e.onAddReactionContextMenu ? (t) => {
		t.preventDefault(), e.onAddReactionContextMenu?.(t);
	} : void 0, h = /* @__PURE__ */ t.createElement("button", {
		type: "button",
		className: p,
		"aria-label": l,
		disabled: f,
		onClick: e.onAddReactionClick,
		onContextMenu: m
	}, /* @__PURE__ */ t.createElement(iU, null));
	return /* @__PURE__ */ t.createElement("div", {
		className: (0, V.default)(n, TG.reactionsRow),
		role: "toolbar",
		"aria-label": i
	}, r, o && /* @__PURE__ */ t.createElement("button", {
		type: "button",
		className: TG.showAllButton,
		onClick: e.onShowAllClick
	}, s), c && /* @__PURE__ */ t.createElement(M_, {
		description: l,
		placement: "right"
	}, h));
}
//#endregion
//#region src/room/timeline/event-tile/reactions/ReactionsRowButtonTooltip/ReactionsRowButtonTooltipView.tsx
function DG({ vm: e, children: n }) {
	let { formattedSenders: r, caption: i, tooltipOpen: a } = X(e);
	return r ? /* @__PURE__ */ t.createElement(M_, {
		description: r,
		caption: i,
		placement: "right",
		open: a
	}, n) : /* @__PURE__ */ t.createElement(t.Fragment, null, n);
}
var OG = {
	reactionsRowButton: "_reactionsRowButton_5v4c1_8",
	reactionsRowButtonSelected: "_reactionsRowButtonSelected_5v4c1_21",
	reactionsRowButtonDisabled: "_reactionsRowButtonDisabled_5v4c1_26",
	reactionsRowButtonContent: "_reactionsRowButtonContent_5v4c1_30",
	reactionsRowButtonCount: "_reactionsRowButtonCount_5v4c1_38"
};
//#endregion
//#region src/room/timeline/event-tile/reactions/ReactionsRowButton/ReactionsRowButtonView.tsx
function kG({ vm: e }) {
	let n = X(e), { content: r, count: i, className: a, isSelected: o, isDisabled: s, imageSrc: c, imageAlt: l, tooltipVm: u } = n, d = n["aria-label"] ?? n.ariaLabel, f = s ? !0 : void 0, p = (0, V.default)(a, OG.reactionsRowButton, {
		[OG.reactionsRowButtonSelected]: o,
		[OG.reactionsRowButtonDisabled]: s
	}), m = c ? /* @__PURE__ */ t.createElement("img", {
		className: OG.reactionsRowButtonContent,
		alt: l ?? "",
		src: c,
		width: "16",
		height: "16"
	}) : /* @__PURE__ */ t.createElement("span", {
		className: OG.reactionsRowButtonContent,
		"aria-hidden": "true"
	}, r ?? "");
	return /* @__PURE__ */ t.createElement(DG, { vm: u }, /* @__PURE__ */ t.createElement("button", {
		type: "button",
		className: p,
		tabIndex: 0,
		"aria-label": d,
		"aria-disabled": f,
		onClick: s ? void 0 : e.onClick
	}, m, /* @__PURE__ */ t.createElement("span", {
		className: OG.reactionsRowButtonCount,
		"aria-hidden": "true"
	}, i)));
}
var AG = { content: "_content_kc5mt_8" };
//#endregion
//#region src/room/timeline/event-tile/timestamp/MessageTimestampView/MessageTimestampView.tsx
function jG({ vm: e, className: n }) {
	let { translate: r } = q(), { ts: i, tsSentAt: a, tsReceivedAt: o, inhibitTooltip: s, href: c } = X(e), l = (t) => {
		e.onClick && (t.key === "Enter" || t.key === " ") && (t.preventDefault(), e.onClick?.(t));
	}, u = a, d;
	o && o?.length > 0 && (u = r("timeline|message_timestamp_sent_at", { dateTime: u }), d = r("timeline|message_timestamp_received_at", { dateTime: o }));
	let f;
	return f = c ? /* @__PURE__ */ t.createElement("a", {
		href: c,
		onClick: e.onClick,
		onKeyDown: l,
		onContextMenu: e.onContextMenu,
		className: (0, V.default)(n, AG.content),
		"aria-live": "off"
	}, i) : /* @__PURE__ */ t.createElement("span", {
		onClick: e.onClick,
		onKeyDown: l,
		onContextMenu: e.onContextMenu,
		className: (0, V.default)(n, AG.content),
		role: e.onClick ? "link" : void 0,
		"aria-live": "off",
		tabIndex: e.onClick || !s ? 0 : void 0
	}, i), s ? f : /* @__PURE__ */ t.createElement(M_, {
		description: u,
		caption: d
	}, f);
}
var MG = {
	richItem: "_richItem_1c0uo_8",
	avatar: "_avatar_1c0uo_36",
	title: "_title_1c0uo_41",
	description: "_description_1c0uo_47",
	timestamp: "_timestamp_1c0uo_51",
	checkmark: "_checkmark_1c0uo_69"
}, NG = s(function({ avatar: e, title: n, description: r, timestamp: i, selected: a, ...o }) {
	let s = q();
	return /* @__PURE__ */ t.createElement("li", {
		className: MG.richItem,
		role: "option",
		tabIndex: -1,
		"aria-selected": a,
		"aria-label": n,
		...o
	}, a ? /* @__PURE__ */ t.createElement(PG, null) : /* @__PURE__ */ t.createElement(J, { className: MG.avatar }, e), /* @__PURE__ */ t.createElement("span", { className: MG.title }, n), /* @__PURE__ */ t.createElement("span", { className: MG.description }, r), i && /* @__PURE__ */ t.createElement("span", {
		role: "timer",
		className: MG.timestamp
	}, s.humanizeTime(i)));
});
function PG() {
	return /* @__PURE__ */ t.createElement(J, {
		align: "center",
		justify: "center",
		"aria-hidden": "true",
		className: MG.checkmark
	}, /* @__PURE__ */ t.createElement(QD, {
		width: "24px",
		height: "24px",
		color: "var(--cpd-color-icon-on-solid-primary)"
	}));
}
var FG = {
	richList: "_richList_1mcas_8",
	title: "_title_1mcas_12",
	content: "_content_1mcas_18",
	empty: "_empty_1mcas_26"
};
//#endregion
//#region src/core/hooks/useListKeyboardNavigation.ts
function IG() {
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
function LG({ children: e, title: n, className: r, titleAttributes: i, isEmpty: a = !1, ...o }) {
	let s = d(), { listRef: c, onKeyDown: l, onFocus: u } = IG();
	return /* @__PURE__ */ t.createElement(J, {
		className: (0, V.default)(FG.richList, r),
		direction: "column",
		...o
	}, /* @__PURE__ */ t.createElement("span", {
		id: s,
		className: FG.title,
		...i
	}, n), a ? /* @__PURE__ */ t.createElement("span", { className: FG.empty }, e) : /* @__PURE__ */ t.createElement("ul", {
		ref: c,
		role: "listbox",
		className: FG.content,
		"aria-labelledby": s,
		tabIndex: 0,
		onKeyDown: l,
		onFocus: u
	}, e));
}
var RG = { title: "_title_1qyi3_8" };
//#endregion
//#region src/room-list/RoomListHeaderView/menu/OptionMenuView.tsx
function zG({ vm: e }) {
	let { translate: n } = q(), [r, i] = h(!1), { activeSortOption: a, isMessagePreviewEnabled: o } = X(e);
	return /* @__PURE__ */ t.createElement(LE, {
		open: r,
		onOpenChange: i,
		title: n("room_list|room_options"),
		showTitle: !1,
		align: "start",
		trigger: /* @__PURE__ */ t.createElement(L_, {
			tooltip: n("room_list|room_options"),
			"aria-label": n("room_list|room_options"),
			size: "28px",
			style: { padding: "4px" }
		}, /* @__PURE__ */ t.createElement(JH, null))
	}, /* @__PURE__ */ t.createElement(Y_, {
		title: n("room_list|sort"),
		className: RG.title
	}), /* @__PURE__ */ t.createElement(fO, {
		label: n("room_list|sort_type|activity"),
		checked: a === "recent",
		onSelect: () => e.sort("recent")
	}), /* @__PURE__ */ t.createElement(fO, {
		label: n("room_list|sort_type|unread_first"),
		checked: a === "unread-first",
		onSelect: () => e.sort("unread-first")
	}), /* @__PURE__ */ t.createElement(fO, {
		label: n("room_list|sort_type|atoz"),
		checked: a === "alphabetical",
		onSelect: () => e.sort("alphabetical")
	}), /* @__PURE__ */ t.createElement(Y_, { title: n("room_list|appearance") }), /* @__PURE__ */ t.createElement(IO, {
		label: n("room_list|show_message_previews"),
		onSelect: e.toggleMessagePreview,
		checked: o
	}));
}
var BG = { button: "_button_1veqf_8" };
//#endregion
//#region src/room-list/RoomListHeaderView/menu/SpaceMenuView.tsx
function VG({ vm: e }) {
	let { translate: n } = q(), { canInviteInSpace: r, canAccessSpaceSettings: i, title: a } = X(e), [o, s] = h(!1);
	return /* @__PURE__ */ t.createElement(LE, {
		open: o,
		onOpenChange: s,
		title: a,
		align: "start",
		trigger: /* @__PURE__ */ t.createElement(L_, {
			className: BG.button,
			"aria-label": n("room_list|open_space_menu"),
			size: "24px",
			style: { padding: "2px" }
		}, /* @__PURE__ */ t.createElement(BO, null))
	}, /* @__PURE__ */ t.createElement(K, {
		Icon: EH,
		label: n("room_list|space_menu|home"),
		onSelect: e.openSpaceHome,
		hideChevron: !0
	}), r && /* @__PURE__ */ t.createElement(K, {
		Icon: bU,
		label: n("action|invite"),
		onSelect: e.inviteInSpace,
		hideChevron: !0
	}), /* @__PURE__ */ t.createElement(K, {
		Icon: nU,
		label: n("common|preferences"),
		onSelect: e.openSpacePreferences,
		hideChevron: !0
	}), i && /* @__PURE__ */ t.createElement(K, {
		Icon: mU,
		label: n("room_list|space_menu|space_settings"),
		onSelect: e.openSpaceSettings,
		hideChevron: !0
	}));
}
//#endregion
//#region src/room-list/RoomListHeaderView/menu/ComposeMenuView.tsx
function HG({ vm: e }) {
	let { translate: n } = q(), [r, i] = h(!1), { canCreateRoom: a, canCreateVideoRoom: o, canCreateSection: s, useComposeIcon: c } = X(e);
	return /* @__PURE__ */ t.createElement(LE, {
		open: r,
		onOpenChange: i,
		showTitle: !1,
		title: n("action|open_menu"),
		align: "start",
		trigger: /* @__PURE__ */ t.createElement(L_, {
			size: "28px",
			style: { padding: "4px" },
			tooltip: n("action|new_conversation")
		}, c ? /* @__PURE__ */ t.createElement(nH, {
			color: "var(--cpd-color-icon-secondary)",
			"aria-hidden": !0
		}) : /* @__PURE__ */ t.createElement(eU, {
			color: "var(--cpd-color-icon-secondary)",
			"aria-hidden": !0
		}))
	}, /* @__PURE__ */ t.createElement(K, {
		Icon: QV,
		label: n("action|start_chat"),
		onSelect: e.createChatRoom,
		hideChevron: !0
	}), a && /* @__PURE__ */ t.createElement(K, {
		Icon: uU,
		label: n("action|new_room"),
		onSelect: e.createRoom,
		hideChevron: !0
	}), o && /* @__PURE__ */ t.createElement(K, {
		Icon: EU,
		label: n("action|new_video_room"),
		onSelect: e.createVideoRoom,
		hideChevron: !0
	}), s && /* @__PURE__ */ t.createElement(K, {
		Icon: fU,
		label: n("action|new_section"),
		onSelect: e.createSection,
		hideChevron: !0
	}));
}
var UG = {
	header: "_header_1b9rm_8",
	container: "_container_1b9rm_13",
	title: "_title_1b9rm_19"
};
//#endregion
//#region src/room-list/RoomListHeaderView/RoomListHeaderView.tsx
function WG({ vm: e }) {
	let { translate: n } = q(), { title: r, displaySpaceMenu: i, displayComposeMenu: a, useComposeIcon: o } = X(e);
	return /* @__PURE__ */ t.createElement(J, {
		as: "header",
		className: UG.header,
		"aria-label": n("room|context_menu|title"),
		align: "end",
		"data-testid": "room-list-header"
	}, /* @__PURE__ */ t.createElement(J, {
		className: UG.container,
		justify: "space-between",
		align: "center",
		gap: "var(--cpd-space-3x)"
	}, /* @__PURE__ */ t.createElement(J, {
		className: UG.title,
		align: "center",
		gap: "var(--cpd-space-1x)"
	}, /* @__PURE__ */ t.createElement(GT, {
		size: "sm",
		title: r
	}, r), i && /* @__PURE__ */ t.createElement(VG, { vm: e })), /* @__PURE__ */ t.createElement(J, {
		align: "center",
		gap: "var(--cpd-space-2x)"
	}, /* @__PURE__ */ t.createElement(zG, { vm: e }), a ? /* @__PURE__ */ t.createElement(HG, { vm: e }) : /* @__PURE__ */ t.createElement(L_, {
		size: "28px",
		style: { padding: "4px" },
		onClick: (t) => e.createChatRoom(t.nativeEvent),
		tooltip: n("action|new_conversation")
	}, o ? /* @__PURE__ */ t.createElement(nH, {
		color: "var(--cpd-color-icon-secondary)",
		"aria-hidden": !0
	}) : /* @__PURE__ */ t.createElement(eU, {
		color: "var(--cpd-color-icon-secondary)",
		"aria-hidden": !0
	})))));
}
var GG = {
	view: "_view_z7ks9_8",
	search: "_search_z7ks9_16",
	search_container: "_search_container_z7ks9_29",
	search_text: "_search_text_z7ks9_41"
};
//#endregion
//#region src/room-list/RoomListSearchView/RoomListSearchView.tsx
function KG({ vm: e }) {
	let { translate: n } = q(), { displayExploreButton: r, displayDialButton: i, searchShortcut: a } = X(e);
	return /* @__PURE__ */ t.createElement(J, {
		"data-testid": "room-list-search",
		className: GG.view,
		role: "search",
		gap: "var(--cpd-space-2x)",
		align: "center"
	}, /* @__PURE__ */ t.createElement($f, {
		id: "room-list-search-button",
		className: GG.search,
		kind: "secondary",
		size: "sm",
		Icon: mO,
		onClick: e.onSearchClick
	}, /* @__PURE__ */ t.createElement(J, {
		className: GG.search_container,
		as: "span",
		justify: "space-between"
	}, /* @__PURE__ */ t.createElement("span", { className: GG.search_text }, n("action|search")), /* @__PURE__ */ t.createElement("kbd", null, a))), i && /* @__PURE__ */ t.createElement($f, {
		kind: "secondary",
		size: "sm",
		Icon: oH,
		iconOnly: !0,
		"aria-label": n("left_panel|open_dial_pad"),
		onClick: e.onDialPadClick
	}), r && /* @__PURE__ */ t.createElement($f, {
		kind: "secondary",
		size: "sm",
		Icon: vH,
		iconOnly: !0,
		"aria-label": n("action|explore_rooms"),
		onClick: e.onExploreClick
	}));
}
//#endregion
//#region src/room-list/RoomListPrimaryFilters/useCollapseFilters.ts
function qG(e, t) {
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
function JG(e, t, n) {
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
var YG = {
	roomListPrimaryFilters: "_roomListPrimaryFilters_kikqh_8",
	list: "_list_kikqh_17",
	iconButton: "_iconButton_kikqh_27"
}, XG = (e) => {
	switch (e) {
		case "unread": return Y("room_list|filters|unread");
		case "people": return Y("room_list|filters|people");
		case "rooms": return Y("room_list|filters|rooms");
		case "favourite": return Y("room_list|filters|favourite");
		case "mentions": return Y("room_list|filters|mentions");
		case "invites": return Y("room_list|filters|invites");
		case "low_priority": return Y("room_list|filters|low_priority");
	}
}, ZG = s(function({ filterIds: e, activeFilterId: n, onToggleFilter: r }) {
	let i = d(), [a, o] = h(!1), { ref: s, isWrapping: c, wrappingIndex: l } = qG(a, "wrapping"), u = JG(e, n, l);
	return /* @__PURE__ */ t.createElement(J, {
		className: YG.roomListPrimaryFilters,
		"data-testid": "primary-filters",
		gap: "var(--cpd-space-3x)",
		direction: "row-reverse",
		justify: "space-between"
	}, c && /* @__PURE__ */ t.createElement(L_, {
		kind: "secondary",
		"aria-expanded": a,
		"aria-controls": i,
		className: YG.iconButton,
		"aria-label": Y(a ? "room_list|collapse_filters" : "room_list|expand_filters"),
		size: "28px",
		onClick: () => o((e) => !e)
	}, /* @__PURE__ */ t.createElement(BO, null)), /* @__PURE__ */ t.createElement(J, {
		id: i,
		as: "div",
		role: "listbox",
		"aria-label": Y("room_list|primary_filters"),
		align: "center",
		gap: "var(--cpd-space-2x)",
		wrap: "wrap",
		className: YG.list,
		ref: s
	}, u.map((e, i) => /* @__PURE__ */ t.createElement(WO, {
		key: `${e}-${i}`,
		role: "option",
		selected: e === n,
		onClick: () => r(e)
	}, XG(e)))));
}), QG = { skeleton: "_skeleton_1h0mx_8" }, $G = () => /* @__PURE__ */ t.createElement("div", { className: QG.skeleton }), eK = {
	genericPlaceholder: "_genericPlaceholder_1sxid_8",
	title: "_title_1sxid_16",
	description: "_description_1sxid_21",
	defaultPlaceholder: "_defaultPlaceholder_1sxid_27"
}, tK = ({ vm: e }) => {
	let n = X(e);
	if (!n.activeFilterId) return /* @__PURE__ */ t.createElement(nK, {
		title: Y("room_list|empty|no_chats"),
		description: n.canCreateRoom ? Y("room_list|empty|no_chats_description") : Y("room_list|empty|no_chats_description_no_room_rights")
	}, /* @__PURE__ */ t.createElement(J, {
		className: eK.defaultPlaceholder,
		align: "center",
		justify: "center",
		direction: "column",
		gap: "var(--cpd-space-4x)"
	}, /* @__PURE__ */ t.createElement($f, {
		size: "sm",
		kind: "secondary",
		Icon: QV,
		onClick: e.createChatRoom
	}, Y("action|start_chat")), n.canCreateRoom && /* @__PURE__ */ t.createElement($f, {
		size: "sm",
		kind: "secondary",
		Icon: uU,
		onClick: e.createRoom
	}, Y("action|new_room"))));
	switch (n.activeFilterId) {
		case "favourite": return /* @__PURE__ */ t.createElement(nK, {
			title: Y("room_list|empty|no_favourites"),
			description: Y("room_list|empty|no_favourites_description")
		});
		case "people": return /* @__PURE__ */ t.createElement(nK, {
			title: Y("room_list|empty|no_people"),
			description: Y("room_list|empty|no_people_description")
		});
		case "rooms": return /* @__PURE__ */ t.createElement(nK, {
			title: Y("room_list|empty|no_rooms"),
			description: Y("room_list|empty|no_rooms_description")
		});
		case "unread": return /* @__PURE__ */ t.createElement(rK, {
			title: Y("room_list|empty|no_unread"),
			action: Y("room_list|empty|show_chats"),
			onAction: () => e.onToggleFilter(n.activeFilterId)
		});
		case "invites": return /* @__PURE__ */ t.createElement(rK, {
			title: Y("room_list|empty|no_invites"),
			action: Y("room_list|empty|show_activity"),
			onAction: () => e.onToggleFilter(n.activeFilterId)
		});
		case "mentions": return /* @__PURE__ */ t.createElement(rK, {
			title: Y("room_list|empty|no_mentions"),
			action: Y("room_list|empty|show_activity"),
			onAction: () => e.onToggleFilter(n.activeFilterId)
		});
		case "low_priority": return /* @__PURE__ */ t.createElement(rK, {
			title: Y("room_list|empty|no_lowpriority"),
			action: Y("room_list|empty|show_activity"),
			onAction: () => e.onToggleFilter(n.activeFilterId)
		});
		default: return /* @__PURE__ */ t.createElement(nK, {
			title: Y("room_list|empty|no_chats"),
			description: Y("room_list|empty|no_chats_description")
		});
	}
};
function nK({ title: e, description: n, children: r }) {
	return /* @__PURE__ */ t.createElement(J, {
		"data-testid": "empty-room-list",
		className: eK.genericPlaceholder,
		direction: "column",
		align: "stretch",
		justify: "center",
		gap: "var(--cpd-space-2x)"
	}, /* @__PURE__ */ t.createElement("span", { className: eK.title }, e), n && /* @__PURE__ */ t.createElement("span", { className: eK.description }, n), r);
}
function rK({ title: e, action: n, onAction: r }) {
	return /* @__PURE__ */ t.createElement(nK, { title: e }, r && /* @__PURE__ */ t.createElement($f, {
		kind: "tertiary",
		onClick: r
	}, n));
}
//#endregion
//#region src/core/VirtualizedList/virtualized-list.tsx
var iK = {
	ARROW_UP: "ArrowUp",
	ARROW_DOWN: "ArrowDown",
	HOME: "Home",
	END: "End",
	PAGE_UP: "PageUp",
	PAGE_DOWN: "PageDown",
	ENTER: "Enter",
	SPACE: "Space"
};
function aK(e) {
	return e.ctrlKey || e.metaKey || e.shiftKey || e.altKey;
}
function oK(e) {
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
		if (!e || aK(e)) {
			a?.(e);
			return;
		}
		if (e.code === iK.ARROW_UP && n !== void 0) E(n - 1, !1), r = !0;
		else if (e.code === iK.ARROW_DOWN && n !== void 0) E(n + 1, !0), r = !0;
		else if (e.code === iK.HOME) T(0), r = !0;
		else if (e.code === iK.END) T(t.length - 1), r = !0;
		else if (e.code === iK.PAGE_DOWN && b && n !== void 0) {
			let e = b.endIndex - b.startIndex;
			E(Math.min(n + e, t.length - 1), !0, "start"), r = !0;
		} else if (e.code === iK.PAGE_UP && b && n !== void 0) {
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
	]), j = c((e) => {
		e.currentTarget.contains(e.relatedTarget) || w(!1);
	}, []), M = p(() => ({
		tabIndexKey: v,
		focused: C,
		context: e.context || {}
	}), [
		v,
		C,
		e.context
	]), ee = c((e) => {
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
		onBlur: j,
		rangeChanged: ee,
		onFocusForGetItemComponent: k,
		context: M
	};
}
//#endregion
//#region src/core/VirtualizedList/FlatVirtualizedList/FlatVirtualizedList.tsx
function sK(e) {
	let { getItemComponent: n, ...r } = e, { onFocusForGetItemComponent: i, ...a } = oK(r), o = c((e, t, r) => n(e, t, r, i), [n, i]);
	return /* @__PURE__ */ t.createElement(b, {
		itemContent: o,
		data: e.items,
		...a
	});
}
//#endregion
//#region src/core/VirtualizedList/GroupedVirtualizedList/GroupedVirtualizedList.tsx
function cK(e) {
	let { getItemComponent: n, groups: r, getGroupHeaderComponent: i, isItemFocusable: a, isGroupHeaderFocusable: o, getItemKey: s, getHeaderKey: l, ...u } = e, d = p(() => r.flatMap((e) => [{ header: e.header }, ...e.items.map((e) => ({ item: e }))]), [r]), f = p(() => r.flatMap((e, t) => Array(1 + e.items.length).fill(t)), [r]), m = c((e) => "header" in e ? l(e.header) : s(e.item), [l, s]), h = c((e) => "header" in e ? o(e.header) : a(e.item), [o, a]), { onFocusForGetItemComponent: g, ..._ } = oK({
		...u,
		items: d,
		isItemFocusable: h,
		getItemKey: m
	}), v = c((e, t) => {
		g({ item: e }, t);
	}, [g]), y = c((e, t) => {
		g({ header: e }, t);
	}, [g]), x = c((e, t, r) => {
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
	return /* @__PURE__ */ t.createElement(b, {
		itemContent: x,
		data: d,
		..._
	});
}
//#endregion
//#region src/core/VirtualizedList/accessbility.ts
function lK(e, t) {
	switch (e) {
		case "listbox": return { role: "listbox" };
		case "treegrid": return {
			role: "treegrid",
			"aria-rowcount": t
		};
	}
}
function uK(e, t, n) {
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
function dK(e, t, n) {
	return {
		role: "row",
		"aria-level": 1,
		"aria-posinset": t + 1,
		"aria-rowindex": e + 1,
		"aria-setsize": n
	};
}
var fK = {
	header: "_header_14azs_8",
	container: "_container_14azs_29",
	unread: "_unread_14azs_50",
	title: "_title_14azs_66",
	firstHeader: "_firstHeader_14azs_73",
	lastHeader: "_lastHeader_14azs_77"
}, pK = s(function({ vm: e, isFocused: n, onFocus: r, indexInList: i, sectionIndex: a, sectionCount: o, roomCountInSection: s }) {
	let { translate: c } = q(), { id: l, title: u, isExpanded: d, isUnread: f } = X(e), p = a === o - 1;
	return /* @__PURE__ */ t.createElement("div", {
		"aria-expanded": d,
		...dK(i, a, s)
	}, /* @__PURE__ */ t.createElement("button", {
		type: "button",
		role: "gridcell",
		className: (0, V.default)(fK.header, {
			[fK.firstHeader]: a === 0,
			[fK.lastHeader]: !d && p,
			[fK.unread]: f
		}),
		onClick: e.onClick,
		"aria-expanded": d,
		onFocus: (e) => r(l, e),
		tabIndex: n ? 0 : -1,
		"aria-label": c(f ? "room_list|section_header|toggle_unread" : "room_list|section_header|toggle", { section: u })
	}, /* @__PURE__ */ t.createElement(J, {
		className: fK.container,
		align: "center",
		gap: "var(--cpd-space-0-5x)"
	}, /* @__PURE__ */ t.createElement(BE, {
		width: "24px",
		height: "24px",
		fill: "var(--cpd-color-icon-secondary)"
	}), /* @__PURE__ */ t.createElement("span", { className: fK.title }, u))));
}), mK = ({ hasAnyNotificationOrActivity: e, muted: n, callType: r, isUnsentMessage: i, invited: a, isMention: o, isNotification: s, isActivityNotification: c, count: l }) => !e && !n && !r ? null : /* @__PURE__ */ t.createElement(J, {
	align: "center",
	justify: "center",
	gap: "var(--cpd-space-1x)",
	"data-testid": "notification-decoration"
}, i && /* @__PURE__ */ t.createElement(V_, {
	width: "20px",
	height: "20px",
	fill: "var(--cpd-color-icon-critical-primary)"
}), r === "video" && /* @__PURE__ */ t.createElement(wU, {
	width: "20px",
	height: "20px",
	fill: "var(--cpd-color-icon-accent-primary)"
}), r === "voice" && /* @__PURE__ */ t.createElement(OU, {
	width: "20px",
	height: "20px",
	fill: "var(--cpd-color-icon-accent-primary)"
}), a && /* @__PURE__ */ t.createElement(mH, {
	width: "20px",
	height: "20px",
	fill: "var(--cpd-color-icon-accent-primary)"
}), o && /* @__PURE__ */ t.createElement(HH, {
	width: "20px",
	height: "20px",
	fill: "var(--cpd-color-icon-accent-primary)"
}), (o || s) && /* @__PURE__ */ t.createElement(KO, { count: l || null }), c && /* @__PURE__ */ t.createElement(JO, null), n && /* @__PURE__ */ t.createElement(WH, {
	width: "20px",
	height: "20px",
	fill: "var(--cpd-color-icon-tertiary)"
}));
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemAccessibilityWrapper/RoomListItemView/RoomListItemMoreOptionsMenu.tsx
function hK({ vm: e }) {
	let [n, r] = h(!1);
	return /* @__PURE__ */ t.createElement(LE, {
		open: n,
		onOpenChange: r,
		title: Y("room_list|room|more_options"),
		showTitle: !1,
		align: "start",
		trigger: /* @__PURE__ */ t.createElement(L_, {
			tooltip: Y("room_list|room|more_options"),
			"aria-label": Y("room_list|room|more_options"),
			size: "24px",
			style: { padding: "2px" }
		}, /* @__PURE__ */ t.createElement(JH, null))
	}, /* @__PURE__ */ t.createElement(gK, { vm: e }));
}
function gK({ vm: e }) {
	let n = X(e);
	return /* @__PURE__ */ t.createElement("div", { onKeyDown: (e) => e.stopPropagation() }, n.canMarkAsRead && /* @__PURE__ */ t.createElement(K, {
		Icon: RH,
		label: Y("room_list|more_options|mark_read"),
		onSelect: e.onMarkAsRead,
		onClick: (e) => e.stopPropagation(),
		hideChevron: !0
	}), n.canMarkAsUnread && /* @__PURE__ */ t.createElement(K, {
		Icon: BH,
		label: Y("room_list|more_options|mark_unread"),
		onSelect: e.onMarkAsUnread,
		onClick: (e) => e.stopPropagation(),
		hideChevron: !0
	}), /* @__PURE__ */ t.createElement(FO, {
		checked: n.isFavourite,
		Icon: bH,
		label: Y("room_list|more_options|favourited"),
		onSelect: e.onToggleFavorite,
		onClick: (e) => e.stopPropagation()
	}), /* @__PURE__ */ t.createElement(FO, {
		checked: n.isLowPriority,
		Icon: WV,
		label: Y("room_list|more_options|low_priority"),
		onSelect: e.onToggleLowPriority,
		onClick: (e) => e.stopPropagation()
	}), /* @__PURE__ */ t.createElement(PO, null), n.canInvite && /* @__PURE__ */ t.createElement(K, {
		Icon: bU,
		label: Y("action|invite"),
		onSelect: e.onInvite,
		onClick: (e) => e.stopPropagation(),
		hideChevron: !0
	}), n.canCopyRoomLink && /* @__PURE__ */ t.createElement(K, {
		Icon: PH,
		label: Y("room_list|more_options|copy_link"),
		onSelect: e.onCopyRoomLink,
		onClick: (e) => e.stopPropagation(),
		hideChevron: !0
	}), n.canMoveToSection && /* @__PURE__ */ t.createElement(QE, { trigger: /* @__PURE__ */ t.createElement(K, {
		Icon: KV,
		label: Y("room_list|more_options|move_to_section"),
		onSelect: null
	}) }, /* @__PURE__ */ t.createElement(K, {
		label: Y("action|new_section"),
		onSelect: e.onCreateSection,
		hideChevron: !0
	})), /* @__PURE__ */ t.createElement(PO, null), /* @__PURE__ */ t.createElement(K, {
		kind: "critical",
		Icon: MH,
		label: Y("room_list|more_options|leave_room"),
		onSelect: e.onLeaveRoom,
		onClick: (e) => e.stopPropagation(),
		hideChevron: !0
	}));
}
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemAccessibilityWrapper/RoomListItemView/RoomNotifs.ts
var _K = /* @__PURE__ */ function(e) {
	return e.AllMessages = "all_messages", e.AllMessagesLoud = "all_messages_loud", e.MentionsOnly = "mentions_only", e.Mute = "mute", e;
}({});
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemAccessibilityWrapper/RoomListItemView/RoomListItemNotificationMenu.tsx
function vK({ vm: e }) {
	let n = X(e), [r, i] = h(!1), a = n.roomNotifState === _K.Mute, o = /* @__PURE__ */ t.createElement(QD, {
		width: "24px",
		height: "24px",
		color: "var(--cpd-color-icon-primary)"
	});
	return /* @__PURE__ */ t.createElement(LE, {
		open: r,
		onOpenChange: i,
		title: Y("room_list|notification_options"),
		showTitle: !1,
		align: "start",
		trigger: /* @__PURE__ */ t.createElement(L_, {
			size: "24px",
			style: { padding: "2px" },
			tooltip: Y("room_list|notification_options"),
			"aria-label": Y("room_list|notification_options")
		}, a ? /* @__PURE__ */ t.createElement(WH, null) : /* @__PURE__ */ t.createElement(KH, null))
	}, /* @__PURE__ */ t.createElement("div", { onKeyDown: (e) => e.stopPropagation() }, /* @__PURE__ */ t.createElement(K, {
		"aria-selected": n.roomNotifState === _K.AllMessages,
		hideChevron: !0,
		label: Y("notifications|default_settings"),
		onSelect: () => e.onSetRoomNotifState(_K.AllMessages),
		onClick: (e) => e.stopPropagation()
	}, n.roomNotifState === _K.AllMessages && o), /* @__PURE__ */ t.createElement(K, {
		"aria-selected": n.roomNotifState === _K.AllMessagesLoud,
		hideChevron: !0,
		label: Y("notifications|all_messages"),
		onSelect: () => e.onSetRoomNotifState(_K.AllMessagesLoud),
		onClick: (e) => e.stopPropagation()
	}, n.roomNotifState === _K.AllMessagesLoud && o), /* @__PURE__ */ t.createElement(K, {
		"aria-selected": n.roomNotifState === _K.MentionsOnly,
		hideChevron: !0,
		label: Y("notifications|mentions_keywords"),
		onSelect: () => e.onSetRoomNotifState(_K.MentionsOnly),
		onClick: (e) => e.stopPropagation()
	}, n.roomNotifState === _K.MentionsOnly && o), /* @__PURE__ */ t.createElement(K, {
		"aria-selected": n.roomNotifState === _K.Mute,
		hideChevron: !0,
		label: Y("notifications|mute_room"),
		onSelect: () => e.onSetRoomNotifState(_K.Mute),
		onClick: (e) => e.stopPropagation()
	}, n.roomNotifState === _K.Mute && o)));
}
var yK = {
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
}, bK = ({ showMoreOptionsMenu: e, showNotificationMenu: n, vm: r }) => /* @__PURE__ */ t.createElement(J, {
	className: yK.hoverMenu,
	align: "center",
	gap: "var(--cpd-space-1x)"
}, e && /* @__PURE__ */ t.createElement(hK, { vm: r }), n && /* @__PURE__ */ t.createElement(vK, { vm: r })), xK = ({ vm: e, children: n }) => /* @__PURE__ */ t.createElement(UT, {
	title: Y("room_list|room|more_options"),
	showTitle: !1,
	hasAccessibleAlternative: !0,
	trigger: n
}, /* @__PURE__ */ t.createElement(gK, { vm: e }));
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemAccessibilityWrapper/RoomListItemView/RoomListItemView.tsx
function SK(e, t) {
	return t.isUnsentMessage ? Y("room_list|a11y|unsent_message", { roomName: e }) : t.invited ? Y("room_list|a11y|invitation", { roomName: e }) : t.isMention && t.count ? Y("room_list|a11y|mention", {
		roomName: e,
		count: t.count
	}) : t.hasUnreadCount && t.count ? Y("room_list|a11y|unread", {
		roomName: e,
		count: t.count
	}) : t.callType === "voice" ? Y("room_list|a11y|voice_call", { roomName: e }) : t.callType === "video" ? Y("room_list|a11y|video_call", { roomName: e }) : Y("room_list|a11y|default", { roomName: e });
}
var CK = s(function({ vm: e, isSelected: n, isFocused: r, onFocus: i, isFirstItem: a, isLastItem: o, renderAvatar: s, ...c }) {
	let l = m(null), d = X(e);
	u(() => {
		r && l.current?.focus({
			preventScroll: !0,
			focusVisible: !0
		});
	}, [r]);
	let f = SK(d.name, d.notification);
	return /* @__PURE__ */ t.createElement(xK, { vm: e }, /* @__PURE__ */ t.createElement(J, {
		as: "button",
		ref: l,
		className: (0, V.default)(yK.roomListItem, "mx_RoomListItemView", {
			[yK.selected]: n,
			[yK.bold]: d.isBold,
			[yK.firstItem]: a,
			[yK.lastItem]: o,
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
	}, /* @__PURE__ */ t.createElement(J, {
		className: yK.container,
		gap: "var(--cpd-space-3x)",
		align: "center"
	}, s(d.room), /* @__PURE__ */ t.createElement(J, {
		className: yK.content,
		gap: "var(--cpd-space-2x)",
		align: "center",
		justify: "space-between"
	}, /* @__PURE__ */ t.createElement("div", { className: yK.ellipsis }, /* @__PURE__ */ t.createElement("div", {
		className: yK.roomName,
		title: d.name,
		"data-testid": "room-name"
	}, d.name), d.messagePreview && /* @__PURE__ */ t.createElement(Xf, {
		as: "div",
		size: "sm",
		className: yK.ellipsis,
		title: d.messagePreview
	}, d.messagePreview)), (d.showMoreOptionsMenu || d.showNotificationMenu) && /* @__PURE__ */ t.createElement(bK, {
		showMoreOptionsMenu: d.showMoreOptionsMenu,
		showNotificationMenu: d.showNotificationMenu,
		vm: e
	}), /* @__PURE__ */ t.createElement("div", {
		className: yK.notificationDecoration,
		"aria-hidden": !0
	}, /* @__PURE__ */ t.createElement(mK, d.notification))))));
}), wK = s(function({ roomIndex: e, roomCount: n, roomIndexInSection: r, isInFlatList: i, ...a }) {
	let o = i ? uK("listbox", e, n) : { role: "gridcell" }, s = /* @__PURE__ */ t.createElement(CK, {
		...a,
		...o
	});
	return i ? s : /* @__PURE__ */ t.createElement("div", uK("treegrid", e, r), s);
}), TK = { roomList: "_roomList_1yq7k_11" }, EK = 1300;
function DK({ vm: e, renderAvatar: n, onKeyDown: r }) {
	let { roomListState: i, sections: a, isFlatList: o } = X(e), s = i.activeRoomIndex, l = m(void 0), u = m(void 0), d = p(() => a.flatMap((e) => e.roomIds), [a]), f = d.length, h = a.length, g = f + h, _ = p(() => a.map((e) => ({
		header: e.id,
		items: e.roomIds
	})), [a]), v = c((t) => {
		e.updateVisibleRooms(t.startIndex, t.endIndex);
	}, [e]), y = c((e, r, i, a, o, s) => {
		let { activeRoomIndex: c, roomCount: l, vm: u, isFlatList: d } = i.context, f = c === e, p = u.getRoomItemViewModel(r);
		if (!p) return /* @__PURE__ */ t.createElement(t.Fragment, { key: `stale-${e}` });
		let m = i.focused && i.tabIndexKey === r, h = d && e === 0, g = !!((d || o) && e === l - 1);
		return /* @__PURE__ */ t.createElement(wK, {
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
		return /* @__PURE__ */ t.createElement(pK, {
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
		let { spaceId: t, filterKeys: n } = e.context.context, r = l.current !== t || !iI(u.current, n);
		return u.current = n, l.current = t, r ? {
			align: "start",
			index: s || 0,
			behavior: "auto"
		} : !1;
	}, [s]), D = c(() => !0, []), O = c(() => !0, []), k = p(() => ({
		top: EK,
		bottom: EK
	}), []), A = {
		context: T,
		scrollIntoViewOnChange: E,
		...s === void 0 ? {} : { initialTopMostItemIndex: s },
		"data-testid": "room-list",
		"aria-label": Y("room_list|list_title"),
		getItemKey: C,
		isItemFocusable: D,
		rangeChanged: v,
		onKeyDown: r,
		increaseViewportBy: k,
		className: TK.roomList
	};
	return o ? /* @__PURE__ */ t.createElement(sK, {
		...A,
		...lK("listbox"),
		items: d,
		getItemComponent: x
	}) : /* @__PURE__ */ t.createElement(cK, {
		...A,
		...lK("treegrid", g),
		groups: _,
		getHeaderKey: w,
		getGroupHeaderComponent: S,
		getItemComponent: b,
		isGroupHeaderFocusable: O
	});
}
var OK = { toast: "_toast_1q2e8_8" };
//#endregion
//#region src/room-list/RoomListView/RoomListToast/RoomListToast.tsx
function kK({ type: e, onClose: n }) {
	let { translate: r } = q(), i;
	switch (e) {
		case "section_created":
			i = {
				text: r("room_list|section_created"),
				icon: QD
			};
			break;
	}
	return /* @__PURE__ */ t.createElement(RO, {
		className: OK.toast,
		Icon: i.icon,
		onClose: n,
		tooltip: r("action|close")
	}, i.text);
}
var AK = { list: "_list_pswis_8" }, jK = ({ vm: e, renderAvatar: n, onKeyDown: r }) => {
	let i = X(e), a;
	return a = i.isLoadingRooms ? /* @__PURE__ */ t.createElement($G, null) : i.isRoomListEmpty ? /* @__PURE__ */ t.createElement(tK, { vm: e }) : /* @__PURE__ */ t.createElement(DK, {
		vm: e,
		renderAvatar: n,
		onKeyDown: r
	}), /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("div", null, /* @__PURE__ */ t.createElement(ZG, {
		filterIds: i.filterIds,
		activeFilterId: i.activeFilterId,
		onToggleFilter: e.onToggleFilter
	})), /* @__PURE__ */ t.createElement(J, {
		direction: "column",
		className: AK.list
	}, a, i.toast && /* @__PURE__ */ t.createElement(kK, {
		type: i.toast,
		onClose: e.closeToast
	})));
}, MK = {
	"box-flex": "_box-flex_1odfs_9",
	"box-shrink": "_box-shrink_1odfs_13",
	"box-grow": "_box-grow_1odfs_17"
};
//#endregion
//#region src/core/utils/Box/Box.tsx
function NK({ as: e = "div", flex: n = null, shrink: r = null, grow: i = null, className: a, children: o, ...s }) {
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
			[MK["box-flex"]]: !!n,
			[MK["box-shrink"]]: !!r,
			[MK["box-grow"]]: !!i
		}),
		style: c
	}, o);
}
//#endregion
//#region src/resize/group/GroupView.tsx
function PK({ vm: e, children: n }) {
	return X(e), /* @__PURE__ */ t.createElement(S, { onLayoutChanged: (t) => {
		let n = t[RK];
		e.onLeftPanelResized(n);
	} }, n);
}
var FK = {
	separator: "_separator_ctw94_8",
	visible: "_visible_ctw94_20"
};
//#endregion
//#region src/resize/separator/SeparatorView.tsx
function IK({ vm: e, className: n }) {
	let { translate: r } = q(), { isCollapsed: i, isFocusedViaKeyboard: a } = X(e), o = (0, V.default)(FK.separator, n, { [FK.visible]: i || a });
	return /* @__PURE__ */ t.createElement(D, {
		className: o,
		onClick: e.onSeparatorClick,
		onFocus: e.onFocus,
		onBlur: e.onBlur,
		"aria-label": r("left_panel|separator_label")
	}, /* @__PURE__ */ t.createElement(M_, {
		description: r("left_panel|separator_label"),
		placement: "right"
	}, /* @__PURE__ */ t.createElement(uH, {
		width: "20px",
		height: "12px",
		viewBox: "3.999704360961914 8.999704360961914 16.000295639038086 6.000591278076172",
		transform: "rotate(90)"
	})));
}
//#endregion
//#region src/resize/panel/LeftResizablePanelView.tsx
function LK({ vm: e, className: n, children: r, ...i }) {
	let { initialSize: a, isCollapsed: o } = X(e), [s, c] = O();
	u(() => {
		s && e.setPanelHandle(s);
	}, [e, s]);
	let l = a === void 0 ? i.defaultSize : `${a}%`;
	return /* @__PURE__ */ t.createElement(T, {
		inert: o,
		id: RK,
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
var RK = "left-panel";
//#endregion
//#region src/core/utils/numbers.ts
function zK(e, t) {
	return Number.isFinite(e) ? Number(e) : t;
}
function BK(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
function VK(...e) {
	return [...e].reduce((e, t) => t + e, 0);
}
function HK(e, t, n) {
	return e * (n - t) + t;
}
function UK(e, t, n) {
	let r = (e - t) / (n - t);
	return Number.isNaN(r) ? 0 : r;
}
//#endregion
//#region src/core/i18n/I18nApi.ts
var WK = class {
	get language() {
		return HL();
	}
	register(e) {
		let t = {};
		for (let n in e) for (let r in e[n]) t[r] = t[r] || {}, t[r][n] = e[n][r];
		for (let e in t) BL(e, t[e]);
	}
	translate(e, t, n) {
		return n ? Y(e, t, n) : Y(e, t);
	}
	humanizeTime = (e) => XW(e, this);
};
//#endregion
export { $ as ActionBarAction, oG as ActionBarView, yG as AudioPlayerView, vI as AvatarWithDetails, rR as Banner, dR as BaseViewModel, NK as Box, Uf as Clock, rG as DateSeparatorView, wG as DecryptionFailureBodyView, xG as DecryptionFailureReason, cG as DisambiguatedProfileView, cR as Disposables, fG as EncryptionEventState, pG as EncryptionEventView, HV as EventContentBodyView, dG as EventTileBubble, zU as FileBodyView, LU as FileBodyViewInfoIcon, IU as FileBodyViewState, sK as FlatVirtualizedList, J as Flex, PK as GroupView, cK as GroupedVirtualizedList, zW as HistoryVisibilityBadge, WK as I18nApi, ek as I18nContext, mW as ImageBodyView, fW as ImageBodyViewPlaceholder, dW as ImageBodyViewState, wI as KEY_SEPARATOR, RK as LEFT_PANEL_ID, fV as LINKIFIED_DATA_ATTRIBUTE, LK as LeftResizablePanelView, _V as LinkedText, hV as LinkedTextContext, sV as LinkifyMatrixOpaqueIdType, aV as LinkifyOptionalSlashProtocols, iV as LinkifySupportedProtocols, FU as MediaBody, jG as MessageTimestampView, fR as MockViewModel, gK as MoreOptionContent, mK as NotificationDecoration, oV as PERMITTED_URL_SCHEMES, w as Panel, EW as Pill, NW as PillInput, hG as PinnedMessageBadge, tk as PlayPauseButton, DG as ReactionsRowButtonTooltipView, kG as ReactionsRowButtonView, EG as ReactionsRowView, SV as ReadMarker, MU as RedactedBodyView, C as ResizableGroup, NG as RichItem, LG as RichList, tK as RoomListEmptyStateView, WG as RoomListHeaderView, wK as RoomListItemAccessibilityWrapper, xK as RoomListItemContextMenu, bK as RoomListItemHoverMenu, hK as RoomListItemMoreOptionsMenu, vK as RoomListItemNotificationMenu, CK as RoomListItemView, $G as RoomListLoadingSkeleton, ZG as RoomListPrimaryFilters, KG as RoomListSearchView, pK as RoomListSectionHeaderView, jK as RoomListView, _K as RoomNotifState, FW as RoomStatusBarState, IW as RoomStatusBarView, sR as SasEmoji, hI as SeekBar, E as Separator, IK as SeparatorView, lR as Snapshot, SW as TextualBodyView, bW as TextualBodyViewBodyWrapperKind, yW as TextualBodyViewKind, gG as TextualEventView, wW as TileErrorView, UW as TimelineSeparator, bV as UrlPreviewGroupView, _W as VideoBodyView, gW as VideoBodyViewState, uR as ViewModelSubscriptions, DK as VirtualizedRoomListView, x as VirtuosoMockContext, BW as WidgetContextMenuView, RW as WidgetPipView, Y as _t, XL as _tDom, WL as _td, BK as clamp, zK as defaultNumber, uV as findLinksInString, vG as formatBytes, Hf as formatDateForInput, Vf as formatSeconds, lV as generateLinkedTextOptions, lK as getContainerAccessibleProps, dK as getGroupHeaderAccessibleProps, uK as getItemAccessibleProps, nR as getLangsJson, HL as getLocale, CI as getNormalizedLanguageKeys, ZW as humanizeRelativeTime, XW as humanizeTime, dV as isLinkable, XB as linkifyHtml, kB as linkifyString, YL as lookupString, SI as normalizeLanguageKey, UK as percentageOf, HK as percentageWithin, BL as registerTranslations, $L as replaceByRegexes, ZL as sanitizeForTranslation, eR as setLanguage, UL as setLocale, VL as setMissingEntryGenerator, QL as substitute, VK as sum, qG as useCollapseFilters, pR as useCreateAutoDisposedViewModel, q as useI18n, gV as useLinkedTextContext, mR as useMockedViewModel, X as useViewModel, JG as useVisibleFilters };
