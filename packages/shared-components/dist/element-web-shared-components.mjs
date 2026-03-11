import G, { useSyncExternalStore as yS, useMemo as Si, forwardRef as Xn, createContext as vS, useContext as mS, useState as r1, useEffect as i1, useId as Df, version as _S, useRef as o1, Children as wS, useCallback as yi, memo as bS } from "react";
import { IconButton as a1, Button as Lt, Link as ES, InlineSpinner as AS, Text as rr } from "@vector-im/compound-web";
function bo(n) {
  return yS(n.subscribe, n.getSnapshot, n.getSnapshot);
}
var vi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function u1(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Qs = { exports: {} };
var Yd;
function SS() {
  return Yd || (Yd = 1, (function(n) {
    (function() {
      var r = {}.hasOwnProperty;
      function i() {
        for (var c = "", f = 0; f < arguments.length; f++) {
          var p = arguments[f];
          p && (c = u(c, a(p)));
        }
        return c;
      }
      function a(c) {
        if (typeof c == "string" || typeof c == "number")
          return c;
        if (typeof c != "object")
          return "";
        if (Array.isArray(c))
          return i.apply(null, c);
        if (c.toString !== Object.prototype.toString && !c.toString.toString().includes("[native code]"))
          return c.toString();
        var f = "";
        for (var p in c)
          r.call(c, p) && c[p] && (f = u(f, p));
        return f;
      }
      function u(c, f) {
        return f ? c ? c + " " + f : c + f : c;
      }
      n.exports ? (i.default = i, n.exports = i) : window.classNames = i;
    })();
  })(Qs)), Qs.exports;
}
var IS = SS();
const at = /* @__PURE__ */ u1(IS), TS = "_mediaBody_11o4b_8", RS = {
  mediaBody: TS
};
function OS({
  as: n,
  className: r,
  children: i,
  ...a
}) {
  const u = n || "div";
  return /* @__PURE__ */ G.createElement(u, { className: at("mx_MediaBody", RS.mediaBody, r), ...a }, i);
}
const xS = "_flex_4dswl_9", MS = {
  flex: xS
};
function Nn({
  as: n = "div",
  display: r = "flex",
  direction: i = "row",
  align: a = "start",
  justify: u = "start",
  gap: c = "0",
  wrap: f = "nowrap",
  className: p,
  children: h,
  ...g
}) {
  const m = Si(
    () => ({
      "--mx-flex-display": r,
      "--mx-flex-direction": i,
      "--mx-flex-align": a,
      "--mx-flex-justify": u,
      "--mx-flex-gap": c,
      "--mx-flex-wrap": f
    }),
    [a, i, r, c, u, f]
  );
  return G.createElement(n, { ...g, className: at(MS.flex, p), style: m }, h);
}
const PS = "_audioPlayer_1ly1h_8", CS = "_mediaInfo_1ly1h_12", DS = "_mediaName_1ly1h_17", NS = "_byline_1ly1h_26", LS = "_clock_1ly1h_30", FS = "_error_1ly1h_34", si = {
  audioPlayer: PS,
  mediaInfo: CS,
  mediaName: DS,
  byline: NS,
  clock: LS,
  error: FS
};
var Ma = { exports: {} }, to = {};
var zd;
function BS() {
  if (zd) return to;
  zd = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function i(a, u, c) {
    var f = null;
    if (c !== void 0 && (f = "" + c), u.key !== void 0 && (f = "" + u.key), "key" in u) {
      c = {};
      for (var p in u)
        p !== "key" && (c[p] = u[p]);
    } else c = u;
    return u = c.ref, {
      $$typeof: n,
      type: a,
      key: f,
      ref: u !== void 0 ? u : null,
      props: c
    };
  }
  return to.Fragment = r, to.jsx = i, to.jsxs = i, to;
}
var ro = {};
var $d;
function qS() {
  return $d || ($d = 1, process.env.NODE_ENV !== "production" && (function() {
    function n(k) {
      if (k == null) return null;
      if (typeof k == "function")
        return k.$$typeof === ce ? null : k.displayName || k.name || null;
      if (typeof k == "string") return k;
      switch (k) {
        case B:
          return "Fragment";
        case R:
          return "Profiler";
        case A:
          return "StrictMode";
        case L:
          return "Suspense";
        case q:
          return "SuspenseList";
        case J:
          return "Activity";
      }
      if (typeof k == "object")
        switch (typeof k.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), k.$$typeof) {
          case x:
            return "Portal";
          case S:
            return k.displayName || "Context";
          case D:
            return (k._context.displayName || "Context") + ".Consumer";
          case M:
            var T = k.render;
            return k = k.displayName, k || (k = T.displayName || T.name || "", k = k !== "" ? "ForwardRef(" + k + ")" : "ForwardRef"), k;
          case $:
            return T = k.displayName || null, T !== null ? T : n(k.type) || "Memo";
          case H:
            T = k._payload, k = k._init;
            try {
              return n(k(T));
            } catch {
            }
        }
      return null;
    }
    function r(k) {
      return "" + k;
    }
    function i(k) {
      try {
        r(k);
        var T = !1;
      } catch {
        T = !0;
      }
      if (T) {
        T = console;
        var N = T.error, W = typeof Symbol == "function" && Symbol.toStringTag && k[Symbol.toStringTag] || k.constructor.name || "Object";
        return N.call(
          T,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          W
        ), r(k);
      }
    }
    function a(k) {
      if (k === B) return "<>";
      if (typeof k == "object" && k !== null && k.$$typeof === H)
        return "<...>";
      try {
        var T = n(k);
        return T ? "<" + T + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function u() {
      var k = we.A;
      return k === null ? null : k.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function f(k) {
      if (Le.call(k, "key")) {
        var T = Object.getOwnPropertyDescriptor(k, "key").get;
        if (T && T.isReactWarning) return !1;
      }
      return k.key !== void 0;
    }
    function p(k, T) {
      function N() {
        In || (In = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          T
        ));
      }
      N.isReactWarning = !0, Object.defineProperty(k, "key", {
        get: N,
        configurable: !0
      });
    }
    function h() {
      var k = n(this.type);
      return Ve[k] || (Ve[k] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), k = this.props.ref, k !== void 0 ? k : null;
    }
    function g(k, T, N, W, X, se) {
      var ne = N.ref;
      return k = {
        $$typeof: E,
        type: k,
        key: T,
        props: N,
        _owner: W
      }, (ne !== void 0 ? ne : null) !== null ? Object.defineProperty(k, "ref", {
        enumerable: !1,
        get: h
      }) : Object.defineProperty(k, "ref", { enumerable: !1, value: null }), k._store = {}, Object.defineProperty(k._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(k, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(k, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: X
      }), Object.defineProperty(k, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: se
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    }
    function m(k, T, N, W, X, se) {
      var ne = T.children;
      if (ne !== void 0)
        if (W)
          if (Fe(ne)) {
            for (W = 0; W < ne.length; W++)
              v(ne[W]);
            Object.freeze && Object.freeze(ne);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else v(ne);
      if (Le.call(T, "key")) {
        ne = n(k);
        var te = Object.keys(T).filter(function(ee) {
          return ee !== "key";
        });
        W = 0 < te.length ? "{key: someKey, " + te.join(": ..., ") + ": ...}" : "{key: someKey}", tn[ne + W] || (te = 0 < te.length ? "{" + te.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          W,
          ne,
          te,
          ne
        ), tn[ne + W] = !0);
      }
      if (ne = null, N !== void 0 && (i(N), ne = "" + N), f(T) && (i(T.key), ne = "" + T.key), "key" in T) {
        N = {};
        for (var Q in T)
          Q !== "key" && (N[Q] = T[Q]);
      } else N = T;
      return ne && p(
        N,
        typeof k == "function" ? k.displayName || k.name || "Unknown" : k
      ), g(
        k,
        ne,
        N,
        u(),
        X,
        se
      );
    }
    function v(k) {
      w(k) ? k._store && (k._store.validated = 1) : typeof k == "object" && k !== null && k.$$typeof === H && (k._payload.status === "fulfilled" ? w(k._payload.value) && k._payload.value._store && (k._payload.value._store.validated = 1) : k._store && (k._store.validated = 1));
    }
    function w(k) {
      return typeof k == "object" && k !== null && k.$$typeof === E;
    }
    var P = G, E = /* @__PURE__ */ Symbol.for("react.transitional.element"), x = /* @__PURE__ */ Symbol.for("react.portal"), B = /* @__PURE__ */ Symbol.for("react.fragment"), A = /* @__PURE__ */ Symbol.for("react.strict_mode"), R = /* @__PURE__ */ Symbol.for("react.profiler"), D = /* @__PURE__ */ Symbol.for("react.consumer"), S = /* @__PURE__ */ Symbol.for("react.context"), M = /* @__PURE__ */ Symbol.for("react.forward_ref"), L = /* @__PURE__ */ Symbol.for("react.suspense"), q = /* @__PURE__ */ Symbol.for("react.suspense_list"), $ = /* @__PURE__ */ Symbol.for("react.memo"), H = /* @__PURE__ */ Symbol.for("react.lazy"), J = /* @__PURE__ */ Symbol.for("react.activity"), ce = /* @__PURE__ */ Symbol.for("react.client.reference"), we = P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Le = Object.prototype.hasOwnProperty, Fe = Array.isArray, Sn = console.createTask ? console.createTask : function() {
      return null;
    };
    P = {
      react_stack_bottom_frame: function(k) {
        return k();
      }
    };
    var In, Ve = {}, De = P.react_stack_bottom_frame.bind(
      P,
      c
    )(), ze = Sn(a(c)), tn = {};
    ro.Fragment = B, ro.jsx = function(k, T, N) {
      var W = 1e4 > we.recentlyCreatedOwnerStacks++;
      return m(
        k,
        T,
        N,
        !1,
        W ? Error("react-stack-top-frame") : De,
        W ? Sn(a(k)) : ze
      );
    }, ro.jsxs = function(k, T, N) {
      var W = 1e4 > we.recentlyCreatedOwnerStacks++;
      return m(
        k,
        T,
        N,
        !0,
        W ? Error("react-stack-top-frame") : De,
        W ? Sn(a(k)) : ze
      );
    };
  })()), ro;
}
var Gd;
function kS() {
  return Gd || (Gd = 1, process.env.NODE_ENV === "production" ? Ma.exports = BS() : Ma.exports = qS()), Ma.exports;
}
var Pe = kS();
function s1(n, r) {
  return /* @__PURE__ */ Pe.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: r,
    ...n,
    children: /* @__PURE__ */ Pe.jsx("path", {
      d: "m8.98 4.677 9.921 5.58c1.36.764 1.36 2.722 0 3.486l-9.92 5.58C7.647 20.073 6 19.11 6 17.58V6.42c0-1.53 1.647-2.493 2.98-1.743"
    })
  });
}
s1.displayName = "PlaySolidIcon";
const US = Xn(s1);
function c1(n, r) {
  return /* @__PURE__ */ Pe.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: r,
    ...n,
    children: /* @__PURE__ */ Pe.jsx("path", {
      d: "M8 4a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V6a2 2 0 0 0-2-2m8 0a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V6a2 2 0 0 0-2-2"
    })
  });
}
c1.displayName = "PauseSolidIcon";
const jS = Xn(c1), WS = "_button_yfjla_8", YS = {
  button: WS
}, f1 = vS(null);
f1.displayName = "I18nContext";
function kr() {
  const n = mS(f1);
  if (!n)
    throw new Error("useI18n must be used within an I18nContext.Provider");
  return n;
}
function zS({
  disabled: n = !1,
  playing: r = !1,
  togglePlay: i,
  ...a
}) {
  const { translate: u } = kr(), c = u(r ? "action|pause" : "action|play");
  return /* @__PURE__ */ G.createElement(
    a1,
    {
      size: "32px",
      "aria-label": c,
      tooltip: c,
      onClick: i,
      className: YS.button,
      disabled: n,
      ...a
    },
    r ? /* @__PURE__ */ G.createElement(jS, null) : /* @__PURE__ */ G.createElement(US, null)
  );
}
function $S(n, r = 2) {
  if (n === 0) return "0 Bytes";
  const i = 1024, a = r < 0 ? 0 : r, u = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], c = Math.floor(Math.log(n) / Math.log(i));
  return parseFloat((n / Math.pow(i, c)).toFixed(a)) + " " + u[c];
}
function Dn(n, r, i, a, u) {
  return Ut(r, ((c, f) => {
    const p = c[f];
    if (p === void 0)
      throw new TypeError(Rl(f));
    return p;
  })(n, r), i, a, u);
}
function Ut(n, r, i, a, u, c) {
  const f = ho(r, i, a);
  if (u && r !== f)
    throw new RangeError(S0(n, r, i, a, c));
  return f;
}
function bn(n) {
  return n !== null && /object|function/.test(typeof n);
}
function Hn(n, r = Map) {
  const i = new r();
  return (a, ...u) => {
    if (i.has(a))
      return i.get(a);
    const c = n(a, ...u);
    return i.set(a, c), c;
  };
}
function po(n) {
  return _i({
    name: n
  }, 1);
}
function _i(n, r) {
  return jt(((i) => ({
    value: i,
    configurable: 1,
    writable: !r
  })), n);
}
function GS(n) {
  return jt(((r) => ({
    get: r,
    configurable: 1
  })), n);
}
function Nf(n) {
  return {
    [Symbol.toStringTag]: {
      value: n,
      configurable: 1
    }
  };
}
function Ii(n, r) {
  const i = {};
  let a = n.length;
  for (const u of r)
    i[n[--a]] = u;
  return i;
}
function jt(n, r, i) {
  const a = {};
  for (const u in r)
    a[u] = n(r[u], u, i);
  return a;
}
function nu(n, r, i) {
  const a = {};
  for (let u = 0; u < r.length; u++) {
    const c = r[u];
    a[c] = n(c, u, i);
  }
  return a;
}
function l1(n, r, i) {
  const a = {};
  for (let u = 0; u < n.length; u++)
    a[r[u]] = i[n[u]];
  return a;
}
function ut(n, r) {
  const i = /* @__PURE__ */ Object.create(null);
  for (const a of n)
    i[a] = r[a];
  return i;
}
function Zd(n, r) {
  for (const i of r)
    if (i in n)
      return 1;
  return 0;
}
function p1(n, r, i) {
  for (const a of n)
    if (r[a] !== i[a])
      return 0;
  return 1;
}
function h1(n, r, i) {
  const a = {
    ...i
  };
  for (let u = 0; u < r; u++)
    a[n[u]] = 0;
  return a;
}
function Ie(n, ...r) {
  return (...i) => n(...r, ...i);
}
function Hd(n) {
  return n[0].toUpperCase() + n.substring(1);
}
function Eo(n) {
  return n.slice().sort();
}
function za(n, r) {
  return String(r).padStart(n, "0");
}
function sr(n, r) {
  return Math.sign(n - r);
}
function ho(n, r, i) {
  return Math.min(Math.max(n, r), i);
}
function Bt(n, r) {
  return [Math.floor(n / r), fo(n, r)];
}
function fo(n, r) {
  return (n % r + r) % r;
}
function lr(n, r) {
  return [tu(n, r), Lf(n, r)];
}
function tu(n, r) {
  return Math.trunc(n / r) || 0;
}
function Lf(n, r) {
  return n % r || 0;
}
function Pa(n) {
  return Math.abs(n % 1) === 0.5;
}
function d1(n, r, i) {
  let a = 0, u = 0;
  for (let p = 0; p <= r; p++) {
    const h = n[i[p]], g = bt[p], m = ke / g, [v, w] = lr(h, m);
    a += w * g, u += v;
  }
  const [c, f] = lr(a, ke);
  return [u + c, f];
}
function ru(n, r, i) {
  const a = {};
  for (let u = r; u >= 0; u--) {
    const c = bt[u];
    a[i[u]] = tu(n, c), n = Lf(n, c);
  }
  return a;
}
function ZS(n) {
  if (n !== void 0)
    return hn(n);
}
function HS(n) {
  if (n !== void 0)
    return Ft(n);
}
function g1(n) {
  if (n !== void 0)
    return Ff(n);
}
function Ft(n) {
  return m1(Ff(n));
}
function Ff(n) {
  return v1(iR(n));
}
function y1(n, r) {
  if (r == null)
    throw new RangeError(Rl(n));
  return r;
}
function Ao(n) {
  if (!bn(n))
    throw new TypeError(xT);
  return n;
}
function Bf(n, r, i = n) {
  if (typeof r !== n)
    throw new TypeError(br(i, r));
  return r;
}
function v1(n, r = "number") {
  if (!Number.isInteger(n))
    throw new RangeError(AT(r, n));
  return n || 0;
}
function m1(n, r = "number") {
  if (n <= 0)
    throw new RangeError(ST(r, n));
  return n;
}
function qf(n) {
  if (typeof n == "symbol")
    throw new TypeError(OT);
  return String(n);
}
function Ua(n, r) {
  return bn(n) ? String(n) : hn(n, r);
}
function kf(n) {
  if (typeof n == "string")
    return BigInt(n);
  if (typeof n != "bigint")
    throw new TypeError(RT(n));
  return n;
}
function _1(n, r = "number") {
  if (typeof n == "bigint")
    throw new TypeError(TT(r));
  if (n = Number(n), !Number.isFinite(n))
    throw new RangeError(IT(r, n));
  return n;
}
function _n(n, r) {
  return Math.trunc(_1(n, r)) || 0;
}
function Uf(n, r) {
  return v1(_1(n, r), r);
}
function Kd(n, r) {
  return m1(_n(n, r), r);
}
function jf(n, r) {
  let [i, a] = lr(r, ke), u = n + i;
  const c = Math.sign(u);
  return c && c === -Math.sign(a) && (u -= c, a += c * ke), [u, a];
}
function wi(n, r, i = 1) {
  return jf(n[0] + r[0] * i, n[1] + r[1] * i);
}
function Fr(n, r) {
  return jf(n[0], n[1] + r);
}
function _t(n, r) {
  return wi(r, n, -1);
}
function Kn(n, r) {
  return sr(n[0], r[0]) || sr(n[1], r[1]);
}
function w1(n, r, i) {
  return Kn(n, r) === -1 || Kn(n, i) === 1;
}
function Wf(n, r = 1) {
  const i = BigInt(ke / r);
  return [Number(n / i), Number(n % i) * r];
}
function $a(n, r = 1) {
  const i = ke / r, [a, u] = lr(n, i);
  return [a, u * r];
}
function wt(n, r = 1, i) {
  const [a, u] = n, [c, f] = lr(u, r);
  return a * (ke / r) + (c + (i ? f / r : 0));
}
function Yf(n, r, i = Bt) {
  const [a, u] = n, [c, f] = i(u, r);
  return [a * (ke / r) + c, f];
}
function zf(n) {
  return Dn(n, "isoYear", wo, _o, 1), n.isoYear === wo ? Dn(n, "isoMonth", 4, 12, 1) : n.isoYear === _o && Dn(n, "isoMonth", 1, 9, 1), n;
}
function rt(n) {
  return Bn({
    ...n,
    ...qn,
    isoHour: 12
  }), n;
}
function Bn(n) {
  const r = Dn(n, "isoYear", wo, _o, 1), i = r === wo ? 1 : r === _o ? -1 : 0;
  return i && Et(un({
    ...n,
    isoDay: n.isoDay + i,
    isoNanosecond: n.isoNanosecond - i
  })), n;
}
function Et(n) {
  if (!n || w1(n, lR, fR))
    throw new RangeError(Er);
  return n;
}
function pr(n) {
  return d1(n, 5, ft)[1];
}
function iu(n) {
  const [r, i] = Bt(n, ke);
  return [ru(i, 5, ft), r];
}
function Vd(n) {
  return Yf(n, mt);
}
function wn(n) {
  return Ti(n.isoYear, n.isoMonth, n.isoDay, n.isoHour, n.isoMinute, n.isoSecond, n.isoMillisecond);
}
function un(n) {
  const r = wn(n);
  if (r !== void 0) {
    const [i, a] = lr(r, Fn);
    return [i, a * zt + (n.isoMicrosecond || 0) * Mo + (n.isoNanosecond || 0)];
  }
}
function $f(n, r) {
  const [i, a] = iu(pr(n) - r);
  return Et(un({
    ...n,
    isoDay: n.isoDay + a,
    ...i
  }));
}
function Ga(...n) {
  return Ti(...n) / D0;
}
function Ti(...n) {
  const [r, i] = b1(...n), a = r.valueOf();
  if (!isNaN(a))
    return a - i * Fn;
}
function b1(n, r = 1, i = 1, a = 0, u = 0, c = 0, f = 0) {
  const p = n === wo ? 1 : n === _o ? -1 : 0, h = /* @__PURE__ */ new Date();
  return h.setUTCHours(a, u, c, f), h.setUTCFullYear(n, r - 1, i + p), [h, p];
}
function Ri(n, r) {
  let [i, a] = Fr(n, r);
  a < 0 && (a += ke, i -= 1);
  const [u, c] = Bt(a, zt), [f, p] = Bt(c, Mo);
  return ou(i * Fn + u, f, p);
}
function ou(n, r = 0, i = 0) {
  const a = Math.ceil(Math.max(0, Math.abs(n) - kl) / Fn) * Math.sign(n), u = new Date(n - a * Fn);
  return Ii(Tu, [u.getUTCFullYear(), u.getUTCMonth() + 1, u.getUTCDate() + a, u.getUTCHours(), u.getUTCMinutes(), u.getUTCSeconds(), u.getUTCMilliseconds(), r, i]);
}
function Gf(n, r) {
  if (r < -kl)
    throw new RangeError(Er);
  const i = n.formatToParts(r), a = {};
  for (const u of i)
    a[u.type] = u.value;
  return a;
}
function Zf(n) {
  return [n.isoYear, n.isoMonth, n.isoDay];
}
function E1(n, r) {
  return [r, 0];
}
function A1() {
  return ir;
}
function S1(n, r) {
  switch (r) {
    case 2:
      return Hf(n) ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
  }
  return 31;
}
function I1(n) {
  return Hf(n) ? 366 : 365;
}
function Hf(n) {
  return n % 4 == 0 && (n % 100 != 0 || n % 400 == 0);
}
function T1(n) {
  const [r, i] = b1(n.isoYear, n.isoMonth, n.isoDay);
  return fo(r.getUTCDay() - i, 7) || 7;
}
function R1(n) {
  return this.id === Li ? (({ isoYear: r }) => r < 1 ? ["gregory-inverse", 1 - r] : ["gregory", r])(n) : this.id === gr ? dR(n) : [];
}
function KS(n) {
  const r = wn(n);
  if (r < hR) {
    const { isoYear: c } = n;
    return c < 1 ? ["japanese-inverse", 1 - c] : ["japanese", c];
  }
  const i = Gf(Kl(gr), r), { era: a, eraYear: u } = h0(i, gr);
  return [a, u];
}
function au(n) {
  return Ur(n), Oi(n, 1), n;
}
function Ur(n) {
  return O1(n, 1), n;
}
function Jd(n) {
  return p1(Fl, n, O1(n));
}
function O1(n, r) {
  const { isoYear: i } = n, a = Dn(n, "isoMonth", 1, A1(), r);
  return {
    isoYear: i,
    isoMonth: a,
    isoDay: Dn(n, "isoDay", 1, S1(i, a), r)
  };
}
function Oi(n, r) {
  return Ii(ft, [Dn(n, "isoHour", 0, 23, r), Dn(n, "isoMinute", 0, 59, r), Dn(n, "isoSecond", 0, 59, r), Dn(n, "isoMillisecond", 0, 999, r), Dn(n, "isoMicrosecond", 0, 999, r), Dn(n, "isoNanosecond", 0, 999, r)]);
}
function xe(n) {
  return n === void 0 ? 0 : H0(Ao(n));
}
function uu(n, r = 0) {
  n = At(n);
  const i = K0(n), a = SR(n, r);
  return [H0(n), a, i];
}
function xi(n, r, i, a = 9, u = 0, c = 4) {
  r = At(r);
  let f = Z0(r, a, u), p = Jf(r), h = Do(r, c);
  const g = Co(r, a, u, 1);
  return f == null ? f = Math.max(i, g) : C1(f, g), p = Xf(p, g, 1), n && (h = ((m) => m < 4 ? (m + 2) % 4 : m)(h)), [f, g, p, h];
}
function su(n, r = 6, i) {
  let a = Jf(n = cu(n, Xa));
  const u = Do(n, 7);
  let c = Co(n, r);
  return c = y1(Xa, c), a = Xf(a, c, void 0, i), [c, a, u];
}
function Kf(n) {
  return Ul(At(n));
}
function x1(n, r) {
  return Vf(At(n), r);
}
function VS(n) {
  const r = cu(n, uc), i = yr(uc, ER, r, 0);
  if (!i)
    throw new RangeError(br(uc, i));
  return i;
}
function Vf(n, r = 4) {
  const i = P1(n);
  return [Do(n, 4), ...M1(Co(n, r), i)];
}
function M1(n, r) {
  return n != null ? [bt[n], n < 4 ? 9 - 3 * n : -1] : [r === void 0 ? 1 : 10 ** (9 - r), r];
}
function Jf(n) {
  const r = n[lo];
  return r === void 0 ? 1 : _n(r, lo);
}
function Xf(n, r, i, a) {
  const u = a ? ke : bt[r + 1];
  if (u) {
    const c = bt[r];
    if (u % ((n = Ut(lo, n, 1, u / c - (a ? 0 : 1), 1)) * c))
      throw new RangeError(br(lo, n));
  } else
    n = Ut(lo, n, 1, i ? 10 ** 9 : 1, 1);
  return n;
}
function P1(n) {
  let r = n[ac];
  if (r !== void 0) {
    if (typeof r != "number") {
      if (qf(r) === "auto")
        return;
      throw new RangeError(br(ac, r));
    }
    r = Ut(ac, Math.floor(r), 0, 9, 1);
  }
  return r;
}
function At(n) {
  return n === void 0 ? {} : Ao(n);
}
function cu(n, r) {
  return typeof n == "string" ? {
    [r]: n
  } : Ao(n);
}
function fu(n) {
  return {
    overflow: gR[n]
  };
}
function Qf(n, r, i = 9, a = 0, u) {
  let c = r[n];
  if (c === void 0)
    return u ? a : void 0;
  if (c = qf(c), c === "auto")
    return u ? a : null;
  let f = Tf[c];
  if (f === void 0 && (f = uR[c]), f === void 0)
    throw new RangeError(T0(n, c, Tf));
  return Ut(n, f, a, i, 1, Ol), f;
}
function yr(n, r, i, a = 0) {
  const u = i[n];
  if (u === void 0)
    return a;
  const c = qf(u), f = r[c];
  if (f === void 0)
    throw new RangeError(T0(n, c, r));
  return f;
}
function C1(n, r) {
  if (r > n)
    throw new RangeError(VT);
}
function Wt(n) {
  return {
    branding: zl,
    epochNanoseconds: n
  };
}
function st(n, r, i) {
  return {
    branding: Ar,
    calendar: i,
    timeZone: r,
    epochNanoseconds: n
  };
}
function ct(n, r = n.calendar) {
  return {
    branding: Fi,
    calendar: r,
    ...ut(sR, n)
  };
}
function Yt(n, r = n.calendar) {
  return {
    branding: No,
    calendar: r,
    ...ut(Bl, n)
  };
}
function go(n, r = n.calendar) {
  return {
    branding: jl,
    calendar: r,
    ...ut(Bl, n)
  };
}
function Za(n, r = n.calendar) {
  return {
    branding: Wl,
    calendar: r,
    ...ut(Bl, n)
  };
}
function St(n) {
  return {
    branding: Yl,
    ...ut(Y0, n)
  };
}
function nn(n) {
  return {
    branding: $l,
    sign: vr(n),
    ...ut(Dl, n)
  };
}
function el(n) {
  return Yf(n.epochNanoseconds, zt)[0];
}
function JS(n) {
  return ((r, i = 1) => {
    const [a, u] = r, c = Math.floor(u / i), f = ke / i;
    return BigInt(a) * BigInt(f) + BigInt(c);
  })(n.epochNanoseconds);
}
function D1(n) {
  return n.epochNanoseconds;
}
function XS(n, r, i, a, u) {
  const c = Br(a), [f, p] = ((A, R) => {
    const D = R((A = cu(A, xf))[$0]);
    let S = AR(A);
    return S = y1(xf, S), [S, D];
  })(u, n), h = Math.max(f, c);
  if (!p && vo(h, p))
    return Xd(a, f);
  if (!p)
    throw new RangeError(Au);
  if (!a.sign)
    return 0;
  const [g, m, v] = gu(r, i, p), w = cl(v), P = yu(v), E = fl(v), x = P(m, g, a);
  bi(p) || (Bn(g), Bn(x));
  const B = E(m, g, x, f);
  return vo(f, p) ? Xd(B, f) : ((A, R, D, S, M, L, q) => {
    const $ = vr(A), [H, J] = nl(S, Ll(D, A), D, $, M, L, q), ce = tl(R, H, J);
    return A[Ce[D]] + ce * $;
  })(B, w(x), f, m, g, w, P);
}
function Xd(n, r) {
  return wt(sn(n), bt[r], 1);
}
function nl(n, r, i, a, u, c, f) {
  const p = Ce[i], h = {
    ...r,
    [p]: r[p] + a
  }, g = f(n, u, r), m = f(n, u, h);
  return [c(g), c(m)];
}
function tl(n, r, i) {
  const a = wt(_t(r, i));
  if (!a)
    throw new RangeError(Ni);
  return wt(_t(r, n)) / a;
}
function QS(n, r) {
  const [i, a, u] = su(r, 5, 1);
  return Wt(pu(n.epochNanoseconds, i, a, u, 1));
}
function eI(n, r, i) {
  let { epochNanoseconds: a, timeZone: u, calendar: c } = r;
  const [f, p, h] = su(i);
  if (f === 0 && p === 1)
    return r;
  const g = n(u);
  if (f === 6)
    a = ((m, v, w, P) => {
      const E = Jn(w, v), [x, B] = m(E), A = w.epochNanoseconds, R = dr(v, x), D = dr(v, B);
      if (w1(A, R, D))
        throw new RangeError(Ni);
      return q1(tl(A, R, D), P) ? D : R;
    })(F1, g, r, h);
  else {
    const m = g.R(a);
    a = Mi(g, N1(Ri(a, m), f, p, h), m, 2, 0, 1);
  }
  return st(a, u, c);
}
function nI(n, r) {
  return ct(N1(n, ...su(r)), n.calendar);
}
function tI(n, r) {
  const [i, a, u] = su(r, 5);
  var c;
  return St((c = u, rl(n, So(i, a), c)[0]));
}
function rI(n, r) {
  const i = n(r.timeZone), a = Jn(r, i), [u, c] = F1(a), f = wt(_t(dr(i, u), dr(i, c)), Iu, 1);
  if (f <= 0)
    throw new RangeError(Ni);
  return f;
}
function iI(n, r) {
  const { timeZone: i, calendar: a } = r, u = ((c, f, p) => dr(f, c(Jn(p, f))))(B1, n(i), r);
  return st(u, i, a);
}
function N1(n, r, i, a) {
  return L1(n, So(r, i), a);
}
function L1(n, r, i) {
  const [a, u] = rl(n, r, i);
  return Bn({
    ...jr(n, u),
    ...a
  });
}
function rl(n, r, i) {
  return iu(hr(pr(n), r, i));
}
function Ha(n) {
  return hr(n, Su, 7);
}
function So(n, r) {
  return bt[n] * r;
}
function F1(n) {
  const r = B1(n);
  return [r, jr(r, 1)];
}
function B1(n) {
  return cR(6, n);
}
function oI(n, r, i) {
  const a = Math.min(Br(n), 6);
  return Pi(hu(sn(n, a), r, i), a);
}
function lu(n, r, i, a, u, c, f, p, h, g) {
  if (a === 0 && u === 1)
    return n;
  const m = vo(a, p) ? bi(p) && a < 6 && i >= 6 ? uI : aI : sI;
  let [v, w, P] = m(n, r, i, a, u, c, f, p, h, g);
  return P && a !== 7 && (v = ((E, x, B, A, R, D, S, M) => {
    const L = vr(E);
    for (let q = A + 1; q <= B; q++) {
      if (q === 7 && B !== 7)
        continue;
      const $ = Ll(q, E);
      $[Ce[q]] += L;
      const H = wt(_t(S(M(R, D, $)), x));
      if (H && Math.sign(H) !== L)
        break;
      E = $;
    }
    return E;
  })(v, w, i, Math.max(6, a), f, p, h, g)), v;
}
function pu(n, r, i, a, u) {
  if (r === 6) {
    const c = ((f) => f[0] + f[1] / ke)(n);
    return [hr(c, i, a), 0];
  }
  return hu(n, So(r, i), a, u);
}
function hu(n, r, i, a) {
  let [u, c] = n;
  a && c < 0 && (c += ke, u -= 1);
  const [f, p] = Bt(hr(c, r, i), ke);
  return jf(u + f, p);
}
function hr(n, r, i) {
  return q1(n / r, i) * r;
}
function q1(n, r) {
  return RR[r](n);
}
function aI(n, r, i, a, u, c) {
  const f = vr(n), p = sn(n), h = pu(p, a, u, c), g = _t(p, h), m = Math.sign(h[0] - p[0]) === f, v = Pi(h, Math.min(i, 6));
  return [{
    ...n,
    ...v
  }, wi(r, g), m];
}
function uI(n, r, i, a, u, c, f, p, h, g) {
  const m = vr(n) || 1, v = wt(sn(n, 5)), w = So(a, u);
  let P = hr(v, w, c);
  const [E, x] = nl(f, {
    ...n,
    ...Nl
  }, 6, m, p, h, g), B = P - wt(_t(E, x));
  let A = 0;
  B && Math.sign(B) !== m ? r = Fr(E, P) : (A += m, P = hr(B, w, c), r = Fr(x, P));
  const R = vu(P);
  return [{
    ...n,
    ...R,
    days: n.days + A
  }, r, !!A];
}
function sI(n, r, i, a, u, c, f, p, h, g) {
  const m = vr(n), v = Ce[a], w = Ll(a, n);
  a === 7 && (n = {
    ...n,
    weeks: n.weeks + Math.trunc(n.days / 7)
  });
  const P = tu(n[v], u) * u;
  w[v] = P;
  const [E, x] = nl(f, w, a, u * m, p, h, g), B = P + tl(r, E, x) * m * u, A = hr(B, u, c), R = Math.sign(A - B) === m;
  return w[v] = A, [w, R ? x : E, R];
}
function Qd(n, r, i, a) {
  const [u, c, f, p] = ((g) => {
    const m = Vf(g = At(g));
    return [g.timeZone, ...m];
  })(a), h = u !== void 0;
  return ((g, m, v, w, P, E) => {
    v = hu(v, P, w, 1);
    const x = m.R(v);
    return il(Ri(v, x), E) + (g ? Io(Ha(x)) : "Z");
  })(h, r(h ? n(u) : $r), i.epochNanoseconds, c, f, p);
}
function eg(n, r, i) {
  const [a, u, c, f, p, h] = ((g) => {
    g = At(g);
    const m = Ul(g), v = P1(g), w = TR(g), P = Do(g, 4), E = Co(g, 4);
    return [m, IR(g), w, P, ...M1(E, v)];
  })(i);
  return ((g, m, v, w, P, E, x, B, A, R) => {
    w = hu(w, A, B, 1);
    const D = g(v).R(w);
    return il(Ri(w, D), R) + Io(Ha(D), x) + ((S, M) => M !== 1 ? "[" + (M === 2 ? "!" : "") + S + "]" : "")(v, E) + ol(m, P);
  })(n, r.calendar, r.timeZone, r.epochNanoseconds, a, u, c, f, p, h);
}
function ng(n, r) {
  const [i, a, u, c] = ((g) => (g = At(g), [Ul(g), ...Vf(g)]))(r);
  return f = n.calendar, p = i, h = c, il(L1(n, u, a), h) + ol(f, p);
  var f, p, h;
}
function tg(n, r) {
  return i = n.calendar, a = n, u = Kf(r), Ka(a) + ol(i, u);
  var i, a, u;
}
function rg(n, r) {
  return k1(n.calendar, U1, n, Kf(r));
}
function ig(n, r) {
  return k1(n.calendar, cI, n, Kf(r));
}
function og(n, r) {
  const [i, a, u] = x1(r);
  return c = u, j1(rl(n, a, i)[0], c);
  var c;
}
function ec(n, r) {
  const [i, a, u] = x1(r, 3);
  return a > 1 && Wr(n = {
    ...n,
    ...oI(n, a, i)
  }), ((c, f) => {
    const { sign: p } = c, h = p === -1 ? En(c) : c, { hours: g, minutes: m } = h, [v, w] = Yf(sn(h, 3), mt, lr);
    $1(v);
    const P = al(w, f), E = f >= 0 || !p || P;
    return (p < 0 ? "-" : "") + "P" + ag({
      Y: Lr(h.years),
      M: Lr(h.months),
      W: Lr(h.weeks),
      D: Lr(h.days)
    }) + (g || m || v || E ? "T" + ag({
      H: Lr(g),
      M: Lr(m),
      S: Lr(v, E) + P
    }) : "");
  })(n, u);
}
function k1(n, r, i, a) {
  const u = a > 1 || a === 0 && n !== Re;
  return a === 1 ? n === Re ? r(i) : Ka(i) : u ? Ka(i) + W1(n, a === 2) : r(i);
}
function ag(n) {
  const r = [];
  for (const i in n) {
    const a = n[i];
    a && r.push(a, i);
  }
  return r.join("");
}
function il(n, r) {
  return Ka(n) + "T" + j1(n, r);
}
function Ka(n) {
  return U1(n) + "-" + it(n.isoDay);
}
function U1(n) {
  const { isoYear: r } = n;
  return (r < 0 || r > 9999 ? Y1(r) + za(6, Math.abs(r)) : za(4, r)) + "-" + it(n.isoMonth);
}
function cI(n) {
  return it(n.isoMonth) + "-" + it(n.isoDay);
}
function j1(n, r) {
  const i = [it(n.isoHour), it(n.isoMinute)];
  return r !== -1 && i.push(it(n.isoSecond) + ((a, u, c, f) => al(a * zt + u * Mo + c, f))(n.isoMillisecond, n.isoMicrosecond, n.isoNanosecond, r)), i.join(":");
}
function Io(n, r = 0) {
  if (r === 1)
    return "";
  const [i, a] = Bt(Math.abs(n), Iu), [u, c] = Bt(a, Su), [f, p] = Bt(c, mt);
  return Y1(n) + it(i) + ":" + it(u) + (f || p ? ":" + it(f) + al(p) : "");
}
function ol(n, r) {
  return r !== 1 && (r > 1 || r === 0 && n !== Re) ? W1(n, r === 2) : "";
}
function W1(n, r) {
  return "[" + (r ? "!" : "") + "u-ca=" + n + "]";
}
function al(n, r) {
  let i = za(9, n);
  return i = r === void 0 ? i.replace(MR, "") : i.slice(0, r), i ? "." + i : "";
}
function Y1(n) {
  return n < 0 ? "-" : "+";
}
function Lr(n, r) {
  return n || r ? n.toLocaleString("fullwide", {
    useGrouping: 0
  }) : "";
}
function fI(n, r) {
  const { epochNanoseconds: i } = n, a = (r.R ? r : r(n.timeZone)).R(i), u = Ri(i, a);
  return {
    calendar: n.calendar,
    ...u,
    offsetNanoseconds: a
  };
}
function Mi(n, r, i, a = 0, u = 0, c, f) {
  if (i !== void 0 && a === 1 && (a === 1 || f))
    return $f(r, i);
  const p = n.I(r);
  if (i !== void 0 && a !== 3) {
    const h = ((g, m, v, w) => {
      const P = un(m);
      w && (v = Ha(v));
      for (const E of g) {
        let x = wt(_t(E, P));
        if (w && (x = Ha(x)), x === v)
          return E;
      }
    })(p, r, i, c);
    if (h !== void 0)
      return h;
    if (a === 0)
      throw new RangeError(zT);
  }
  return f ? un(r) : To(n, r, u, p);
}
function To(n, r, i = 0, a = n.I(r)) {
  if (a.length === 1)
    return a[0];
  if (i === 1)
    throw new RangeError($T);
  if (a.length)
    return a[i === 3 ? 1 : 0];
  const u = un(r), c = ((p, h) => {
    const g = p.R(Fr(h, -ke));
    return ((m) => {
      if (m > ke)
        throw new RangeError(YT);
      return m;
    })(p.R(Fr(h, ke)) - g);
  })(n, u), f = c * (i === 2 ? -1 : 1);
  return (a = n.I(Ri(u, f)))[i === 2 ? 0 : a.length - 1];
}
function dr(n, r) {
  const i = n.I(r);
  if (i.length)
    return i[0];
  const a = Fr(un(r), -ke);
  return n.O(a, 1);
}
function ug(n, r, i) {
  return Wt(Et(wi(r.epochNanoseconds, ((a) => {
    if (G1(a))
      throw new RangeError(HT);
    return sn(a, 5);
  })(n ? En(i) : i))));
}
function sg(n, r, i, a, u, c = /* @__PURE__ */ Object.create(null)) {
  const f = r(a.timeZone), p = n(a.calendar);
  return {
    ...a,
    ...ul(f, p, a, i ? En(u) : u, c)
  };
}
function cg(n, r, i, a, u = /* @__PURE__ */ Object.create(null)) {
  const { calendar: c } = i;
  return ct(sl(n(c), i, r ? En(a) : a, u), c);
}
function fg(n, r, i, a, u) {
  const { calendar: c } = i;
  return Yt(du(n(c), i, r ? En(a) : a, u), c);
}
function lg(n, r, i, a, u) {
  const c = i.calendar, f = n(c);
  let p = rt(yo(f, i));
  r && (a = ll(a)), a.sign < 0 && (p = f.P(p, {
    ...cn,
    months: 1
  }), p = jr(p, -1));
  const h = f.P(p, a, u);
  return go(yo(f, h), c);
}
function pg(n, r, i) {
  return St(z1(r, n ? En(i) : i)[0]);
}
function ul(n, r, i, a, u) {
  const c = sn(a, 5);
  let f = i.epochNanoseconds;
  if (G1(a)) {
    const p = Jn(i, n);
    f = wi(To(n, {
      ...du(r, p, {
        ...a,
        ...Nl
      }, u),
      ...ut(ft, p)
    }), c);
  } else
    f = wi(f, c), xe(u);
  return {
    epochNanoseconds: Et(f)
  };
}
function sl(n, r, i, a) {
  const [u, c] = z1(r, i);
  return Bn({
    ...du(n, r, {
      ...i,
      ...Nl,
      days: i.days + c
    }, a),
    ...u
  });
}
function du(n, r, i, a) {
  if (i.years || i.months || i.weeks)
    return n.P(r, i, a);
  xe(a);
  const u = i.days + sn(i, 5)[0];
  return u ? rt(jr(r, u)) : r;
}
function yo(n, r, i = 1) {
  return jr(r, i - n.day(r));
}
function z1(n, r) {
  const [i, a] = sn(r, 5), [u, c] = iu(pr(n) + a);
  return [u, i + c];
}
function jr(n, r) {
  return r ? {
    ...n,
    ...ou(wn(n) + r * Fn)
  } : n;
}
function gu(n, r, i) {
  const a = n(i.calendar);
  return bi(i) ? [i, a, r(i.timeZone)] : [{
    ...i,
    ...qn
  }, a];
}
function cl(n) {
  return n ? D1 : un;
}
function yu(n) {
  return n ? Ie(ul, n) : sl;
}
function fl(n) {
  return n ? Ie(NI, n) : LI;
}
function bi(n) {
  return n && n.epochNanoseconds;
}
function vo(n, r) {
  return n <= 6 - (bi(r) ? 1 : 0);
}
function hg(n, r, i, a, u, c, f) {
  const p = n(At(f).relativeTo), h = Math.max(Br(u), Br(c));
  if (vo(h, p))
    return nn(Wr(((x, B, A, R) => {
      const D = wi(sn(x), sn(B), R ? -1 : 1);
      if (!Number.isFinite(D[0]))
        throw new RangeError(Er);
      return {
        ...cn,
        ...Pi(D, A)
      };
    })(u, c, h, a)));
  if (!p)
    throw new RangeError(Au);
  a && (c = En(c));
  const [g, m, v] = gu(r, i, p), w = yu(v), P = fl(v), E = w(m, g, u);
  return nn(P(m, g, w(m, E, c), h));
}
function lI(n, r, i, a, u) {
  const c = Br(a), [f, p, h, g, m] = ((L, q, $) => {
    L = cu(L, Xa);
    let H = Z0(L);
    const J = $(L[$0]);
    let ce = Jf(L);
    const we = Do(L, 7);
    let Le = Co(L);
    if (H === void 0 && Le === void 0)
      throw new RangeError(KT);
    if (Le == null && (Le = 0), H == null && (H = Math.max(Le, q)), C1(H, Le), ce = Xf(ce, Le, 1), ce > 1 && Le > 5 && H !== Le)
      throw new RangeError("For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit");
    return [H, Le, ce, we, J];
  })(u, c, n), v = Math.max(c, f);
  if (!m && v <= 6)
    return nn(Wr(((L, q, $, H, J) => {
      const ce = pu(sn(L), $, H, J);
      return {
        ...cn,
        ...Pi(ce, q)
      };
    })(a, f, p, h, g)));
  if (!bi(m) && !a.sign)
    return a;
  if (!m)
    throw new RangeError(Au);
  const [w, P, E] = gu(r, i, m), x = cl(E), B = yu(E), A = fl(E), R = B(P, w, a);
  bi(m) || (Bn(w), Bn(R));
  let D = A(P, w, R, f);
  const S = a.sign, M = vr(D);
  if (S && M && S !== M)
    throw new RangeError(Ni);
  return D = lu(D, x(R), f, p, h, g, P, w, x, B), nn(D);
}
function pI(n) {
  return n.sign === -1 ? ll(n) : n;
}
function ll(n) {
  return nn(En(n));
}
function En(n) {
  const r = {};
  for (const i of Ce)
    r[i] = -1 * n[i] || 0;
  return r;
}
function hI(n) {
  return !n.sign;
}
function vr(n, r = Ce) {
  let i = 0;
  for (const a of r) {
    const u = Math.sign(n[a]);
    if (u) {
      if (i && i !== u)
        throw new RangeError(ZT);
      i = u;
    }
  }
  return i;
}
function Wr(n) {
  for (const r of aR)
    Ut(r, n[r], -Sg, Sg, 1);
  return $1(wt(sn(n), mt)), n;
}
function $1(n) {
  if (!Number.isSafeInteger(n))
    throw new RangeError(GT);
}
function sn(n, r = 6) {
  return d1(n, r, Ce);
}
function Pi(n, r = 6) {
  const [i, a] = n, u = ru(a, r, Ce);
  if (u[Ce[r]] += i * (ke / bt[r]), !Number.isFinite(u[Ce[r]]))
    throw new RangeError(Er);
  return u;
}
function vu(n, r = 5) {
  return ru(n, r, Ce);
}
function G1(n) {
  return !!vr(n, W0);
}
function Br(n) {
  let r = 9;
  for (; r > 0 && !n[Ce[r]]; r--)
    ;
  return r;
}
function dI(n, r) {
  return [n, r];
}
function dg(n) {
  const r = Math.floor(n / Wa) * Wa;
  return [r, r + Wa];
}
function gI(n) {
  const r = mr(n = Ua(n));
  if (!r)
    throw new RangeError(Ln(n));
  let i;
  if (r.j)
    i = 0;
  else {
    if (!r.offset)
      throw new RangeError(Ln(n));
    i = Yr(r.offset);
  }
  return r.timeZone && yl(r.timeZone, 1), Wt($f(au(r), i));
}
function yI(n) {
  const r = mr(hn(n));
  if (!r)
    throw new RangeError(Ln(n));
  if (r.timeZone)
    return Z1(r, r.offset ? Yr(r.offset) : void 0);
  if (r.j)
    throw new RangeError(Ln(n));
  return K1(r);
}
function vI(n, r) {
  const i = mr(hn(n));
  if (!i || !i.timeZone)
    throw new RangeError(Ln(n));
  const { offset: a } = i, u = a ? Yr(a) : void 0, [, c, f] = uu(r);
  return Z1(i, u, c, f);
}
function Yr(n) {
  const r = yl(n);
  if (r === void 0)
    throw new RangeError(Ln(n));
  return r;
}
function mI(n) {
  const r = mr(hn(n));
  if (!r || r.j)
    throw new RangeError(Ln(n));
  return ct(H1(r));
}
function pl(n, r, i) {
  let a = mr(hn(n));
  if (!a || a.j)
    throw new RangeError(Ln(n));
  return r ? a.calendar === Re && (a = a.isoYear === -271821 && a.isoMonth === 4 ? {
    ...a,
    isoDay: 20,
    ...qn
  } : {
    ...a,
    isoDay: 1,
    ...qn
  }) : i && a.calendar === Re && (a = {
    ...a,
    isoYear: kt
  }), Yt(a.C ? H1(a) : K1(a));
}
function _I(n, r) {
  const i = dl(hn(r));
  if (i)
    return hl(i), go(zf(Ur(i)));
  const a = pl(r, 1);
  return go(yo(n(a.calendar), a));
}
function hl(n) {
  if (n.calendar !== Re)
    throw new RangeError(qt(n.calendar));
}
function wI(n, r) {
  const i = gl(hn(r));
  if (i)
    return hl(i), Za(Ur(i));
  const a = pl(r, 0, 1), { calendar: u } = a, c = n(u), [f, p, h] = c.v(a), [g, m] = c.q(f, p), [v, w] = c.G(g, m, h);
  return Za(rt(c.V(v, w, h)), u);
}
function bI(n) {
  let r, i = ((a) => {
    const u = BR.exec(a);
    return u ? (mu(u[10]), X1(u)) : void 0;
  })(hn(n));
  if (!i) {
    if (i = mr(n), !i)
      throw new RangeError(Ln(n));
    if (!i.C)
      throw new RangeError(Ln(n));
    if (i.j)
      throw new RangeError(qt("Z"));
    hl(i);
  }
  if ((r = dl(n)) && Jd(r))
    throw new RangeError(Ln(n));
  if ((r = gl(n)) && Jd(r))
    throw new RangeError(Ln(n));
  return St(Oi(i, 1));
}
function EI(n) {
  const r = ((i) => {
    const a = UR.exec(i);
    return a ? ((u) => {
      function c(m, v, w) {
        let P = 0, E = 0;
        if (w && ([P, h] = Bt(h, bt[w])), m !== void 0) {
          if (p)
            throw new RangeError(qt(m));
          E = ((x) => {
            const B = parseInt(x);
            if (!Number.isFinite(B))
              throw new RangeError(qt(x));
            return B;
          })(m), f = 1, v && (h = vl(v) * (bt[w] / mt), p = 1);
        }
        return P + E;
      }
      let f = 0, p = 0, h = 0, g = {
        ...Ii(Ce, [c(u[2]), c(u[3]), c(u[4]), c(u[5]), c(u[6], u[7], 5), c(u[8], u[9], 4), c(u[10], u[11], 3)]),
        ...ru(h, 2, Ce)
      };
      if (!f)
        throw new RangeError(I0(Ce));
      return ml(u[1]) < 0 && (g = En(g)), g;
    })(a) : void 0;
  })(hn(n));
  if (!r)
    throw new RangeError(Ln(n));
  return nn(Wr(r));
}
function AI(n) {
  const r = mr(n) || dl(n) || gl(n);
  return r ? r.calendar : n;
}
function SI(n) {
  const r = mr(n);
  return r && (r.timeZone || r.j && $r || r.offset) || n;
}
function Z1(n, r, i = 0, a = 0) {
  const u = _l(n.timeZone), c = me(u);
  let f;
  return au(n), f = n.C ? Mi(c, n, r, i, a, !c.$, n.j) : dr(c, n), st(f, u, Eu(n.calendar));
}
function H1(n) {
  return V1(Bn(au(n)));
}
function K1(n) {
  return V1(rt(Ur(n)));
}
function V1(n) {
  return {
    ...n,
    calendar: Eu(n.calendar)
  };
}
function mr(n) {
  const r = FR.exec(n);
  return r ? ((i) => {
    const a = i[10], u = (a || "").toUpperCase() === "Z";
    return {
      isoYear: J1(i),
      isoMonth: parseInt(i[4]),
      isoDay: parseInt(i[5]),
      ...X1(i.slice(5)),
      ...mu(i[16]),
      C: !!i[6],
      j: u,
      offset: u ? void 0 : a
    };
  })(r) : void 0;
}
function dl(n) {
  const r = NR.exec(n);
  return r ? ((i) => ({
    isoYear: J1(i),
    isoMonth: parseInt(i[4]),
    isoDay: 1,
    ...mu(i[5])
  }))(r) : void 0;
}
function gl(n) {
  const r = LR.exec(n);
  return r ? ((i) => ({
    isoYear: kt,
    isoMonth: parseInt(i[1]),
    isoDay: parseInt(i[2]),
    ...mu(i[3])
  }))(r) : void 0;
}
function yl(n, r) {
  const i = qR.exec(n);
  return i ? ((a, u) => {
    const c = a[4] || a[5];
    if (u && c)
      throw new RangeError(qt(c));
    return ((f) => {
      if (Math.abs(f) >= ke)
        throw new RangeError(WT);
      return f;
    })((mi(a[2]) * Iu + mi(a[3]) * Su + mi(a[4]) * mt + vl(a[5] || "")) * ml(a[1]));
  })(i, r) : void 0;
}
function J1(n) {
  const r = ml(n[1]), i = parseInt(n[2] || n[3]);
  if (r < 0 && !i)
    throw new RangeError(qt(-0));
  return r * i;
}
function X1(n) {
  const r = mi(n[3]);
  return {
    ...iu(vl(n[4] || ""))[0],
    isoHour: mi(n[1]),
    isoMinute: mi(n[2]),
    isoSecond: r === 60 ? 59 : r
  };
}
function mu(n) {
  let r, i;
  const a = [];
  if (n.replace(kR, ((u, c, f) => {
    const p = !!c, [h, g] = f.split("=").reverse();
    if (g) {
      if (g === "u-ca")
        a.push(h), r || (r = p);
      else if (p || /[A-Z]/.test(g))
        throw new RangeError(qt(u));
    } else {
      if (i)
        throw new RangeError(qt(u));
      i = h;
    }
    return "";
  })), a.length > 1 && r)
    throw new RangeError(qt(n));
  return {
    timeZone: i,
    calendar: a[0] || Re
  };
}
function vl(n) {
  return parseInt(n.padEnd(9, "0"));
}
function Ci(n) {
  return new RegExp(`^${n}$`, "i");
}
function ml(n) {
  return n && n !== "+" ? -1 : 1;
}
function mi(n) {
  return n === void 0 ? 0 : parseInt(n);
}
function II(n) {
  return _l(hn(n));
}
function _l(n) {
  const r = wl(n);
  return typeof r == "number" ? Io(r) : r ? ((i) => {
    if (YR.test(i))
      throw new RangeError(M0(i));
    if (WR.test(i))
      throw new RangeError(jT);
    return i.toLowerCase().split("/").map(((a, u) => (a.length <= 3 || /\d/.test(a)) && !/etc|yap/.test(a) ? a.toUpperCase() : a.replace(/baja|dumont|[a-z]+/g, ((c, f) => c.length <= 2 && !u || c === "in" || c === "chat" ? c.toUpperCase() : c.length > 2 || !f ? Hd(c).replace(/island|noronha|murdo|rivadavia|urville/, Hd) : c)))).join("/");
  })(n) : $r;
}
function gg(n) {
  const r = wl(n);
  return typeof r == "number" ? r : r ? r.resolvedOptions().timeZone : $r;
}
function wl(n) {
  const r = yl(n = n.toUpperCase(), 1);
  return r !== void 0 ? r : n !== $r ? jR(n) : void 0;
}
function Q1(n, r) {
  return Kn(n.epochNanoseconds, r.epochNanoseconds);
}
function e0(n, r) {
  return Kn(n.epochNanoseconds, r.epochNanoseconds);
}
function TI(n, r, i, a, u, c) {
  const f = n(At(c).relativeTo), p = Math.max(Br(a), Br(u));
  if (p1(Ce, a, u))
    return 0;
  if (vo(p, f))
    return Kn(sn(a), sn(u));
  if (!f)
    throw new RangeError(Au);
  const [h, g, m] = gu(r, i, f), v = cl(m), w = yu(m);
  return Kn(v(w(g, h, a)), v(w(g, h, u)));
}
function n0(n, r) {
  return Di(n, r) || bl(n, r);
}
function Di(n, r) {
  return sr(wn(n), wn(r));
}
function bl(n, r) {
  return sr(pr(n), pr(r));
}
function RI(n, r) {
  return !Q1(n, r);
}
function OI(n, r) {
  return !e0(n, r) && !!t0(n.timeZone, r.timeZone) && n.calendar === r.calendar;
}
function xI(n, r) {
  return !n0(n, r) && n.calendar === r.calendar;
}
function MI(n, r) {
  return !Di(n, r) && n.calendar === r.calendar;
}
function PI(n, r) {
  return !Di(n, r) && n.calendar === r.calendar;
}
function CI(n, r) {
  return !Di(n, r) && n.calendar === r.calendar;
}
function DI(n, r) {
  return !bl(n, r);
}
function t0(n, r) {
  if (n === r)
    return 1;
  try {
    return gg(n) === gg(r);
  } catch {
  }
}
function yg(n, r, i, a) {
  const u = xi(n, a, 3, 5), c = _u(r.epochNanoseconds, i.epochNanoseconds, ...u);
  return nn(n ? En(c) : c);
}
function vg(n, r, i, a, u, c) {
  const f = bu(a.calendar, u.calendar), [p, h, g, m] = xi(i, c, 5), v = a.epochNanoseconds, w = u.epochNanoseconds, P = Kn(w, v);
  let E;
  if (P)
    if (p < 6)
      E = _u(v, w, p, h, g, m);
    else {
      const x = r(((A, R) => {
        if (!t0(A, R))
          throw new RangeError(P0);
        return A;
      })(a.timeZone, u.timeZone)), B = n(f);
      E = i0(B, x, a, u, P, p, c), E = lu(E, w, p, h, g, m, B, a, D1, Ie(ul, x));
    }
  else
    E = cn;
  return nn(i ? En(E) : E);
}
function mg(n, r, i, a, u) {
  const c = bu(i.calendar, a.calendar), [f, p, h, g] = xi(r, u, 6), m = un(i), v = un(a), w = Kn(v, m);
  let P;
  if (w)
    if (f <= 6)
      P = _u(m, v, f, p, h, g);
    else {
      const E = n(c);
      P = o0(E, i, a, w, f, u), P = lu(P, v, f, p, h, g, E, i, un, sl);
    }
  else
    P = cn;
  return nn(r ? En(P) : P);
}
function _g(n, r, i, a, u) {
  const c = bu(i.calendar, a.calendar);
  return r0(r, (() => n(c)), i, a, ...xi(r, u, 6, 9, 6));
}
function wg(n, r, i, a, u) {
  const c = bu(i.calendar, a.calendar), f = xi(r, u, 9, 9, 8), p = n(c), h = yo(p, i), g = yo(p, a);
  return h.isoYear === g.isoYear && h.isoMonth === g.isoMonth && h.isoDay === g.isoDay ? nn(cn) : r0(r, (() => p), rt(h), rt(g), ...f, 8);
}
function r0(n, r, i, a, u, c, f, p, h = 6) {
  const g = un(i), m = un(a);
  if (g === void 0 || m === void 0)
    throw new RangeError(Er);
  let v;
  if (Kn(m, g))
    if (u === 6)
      v = _u(g, m, u, c, f, p);
    else {
      const w = r();
      v = w.N(i, a, u), c === h && f === 1 || (v = lu(v, m, u, c, f, p, w, i, un, du));
    }
  else
    v = cn;
  return nn(n ? En(v) : v);
}
function bg(n, r, i, a) {
  const [u, c, f, p] = xi(n, a, 5, 5), h = hr(El(r, i), So(c, f), p), g = {
    ...cn,
    ...vu(h, u)
  };
  return nn(n ? En(g) : g);
}
function NI(n, r, i, a, u, c) {
  const f = Kn(a.epochNanoseconds, i.epochNanoseconds);
  return f ? u < 6 ? a0(i.epochNanoseconds, a.epochNanoseconds, u) : i0(r, n, i, a, f, u, c) : cn;
}
function LI(n, r, i, a, u) {
  const c = un(r), f = un(i), p = Kn(f, c);
  return p ? a <= 6 ? a0(c, f, a) : o0(n, r, i, p, a, u) : cn;
}
function i0(n, r, i, a, u, c, f) {
  const [p, h, g] = ((w, P, E, x) => {
    function B() {
      return q = {
        ...jr(D, M++ * -x),
        ...R
      }, $ = To(w, q), Kn(S, $) === -x;
    }
    const A = Jn(P, w), R = ut(ft, A), D = Jn(E, w), S = E.epochNanoseconds;
    let M = 0;
    const L = El(A, D);
    let q, $;
    if (Math.sign(L) === -x && M++, B() && (x === -1 || B()))
      throw new RangeError(Ni);
    const H = wt(_t($, S));
    return [A, q, H];
  })(r, i, a, u);
  var m, v;
  return {
    ...c === 6 ? (m = p, v = h, {
      ...cn,
      days: u0(m, v)
    }) : n.N(p, h, c, f),
    ...vu(g)
  };
}
function o0(n, r, i, a, u, c) {
  const [f, p, h] = ((g, m, v) => {
    let w = m, P = El(g, m);
    return Math.sign(P) === -v && (w = jr(m, -v), P += ke * v), [g, w, P];
  })(r, i, a);
  return {
    ...n.N(f, p, u, c),
    ...vu(h)
  };
}
function _u(n, r, i, a, u, c) {
  return {
    ...cn,
    ...Pi(pu(_t(n, r), a, u, c), i)
  };
}
function a0(n, r, i) {
  return {
    ...cn,
    ...Pi(_t(n, r), i)
  };
}
function u0(n, r) {
  return wu(wn(n), wn(r));
}
function wu(n, r) {
  return Math.trunc((r - n) / Fn);
}
function El(n, r) {
  return pr(r) - pr(n);
}
function bu(n, r) {
  if (n !== r)
    throw new RangeError(x0);
  return n;
}
function s0(n) {
  return this.m(n)[0];
}
function c0(n) {
  return this.m(n)[1];
}
function Al(n) {
  const [r] = this.v(n);
  return wu(this.p(r), wn(n)) + 1;
}
function Sl(n) {
  const r = zR.exec(n);
  if (!r)
    throw new RangeError(kT(n));
  return [parseInt(r[1]), !!r[2]];
}
function Ro(n, r) {
  return "M" + it(n) + (r ? "L" : "");
}
function Va(n, r, i) {
  return n + (r || i && n >= i ? 1 : 0);
}
function Il(n, r) {
  return n - (r && n >= r ? 1 : 0);
}
function f0(n, r) {
  return (r + n) * (Math.sign(r) || 1) || 0;
}
function Af(n) {
  return U0[p0(n)];
}
function l0(n) {
  return tR[p0(n)];
}
function p0(n) {
  return qr(n.id || Re);
}
function FI(n) {
  function r(u) {
    return ((c, f) => ({
      ...h0(c, f),
      o: c.month,
      day: parseInt(c.day)
    }))(Gf(i, u), a);
  }
  const i = Kl(n), a = qr(n);
  return {
    id: n,
    h: BI(r),
    l: qI(r)
  };
}
function BI(n) {
  return Hn(((r) => {
    const i = wn(r);
    return n(i);
  }), WeakMap);
}
function qI(n) {
  const r = n(0).year - pR;
  return Hn(((i) => {
    let a, u = Ti(i - r), c = 0;
    const f = [], p = [];
    do
      u += 400 * Fn;
    while ((a = n(u)).year <= i);
    do
      if (u += (1 - a.day) * Fn, a.year === i && (f.push(u), p.push(a.o)), u -= Fn, ++c > 100 || u < -kl)
        throw new RangeError(Ni);
    while ((a = n(u)).year >= i);
    return {
      i: f.reverse(),
      u: C0(p.reverse())
    };
  }));
}
function h0(n, r) {
  let i, a, u = d0(n);
  if (n.era) {
    const c = U0[r], f = j0[r] || {};
    c !== void 0 && (i = r === "islamic" ? "ah" : n.era.normalize("NFD").toLowerCase().replace(/[^a-z0-9]/g, ""), i === "bc" || i === "b" ? i = "bce" : i === "ad" || i === "a" ? i = "ce" : i === "beforeroc" && (i = "broc"), i = f[i] || i, a = u, u = f0(a, c[i] || 0));
  }
  return {
    era: i,
    eraYear: a,
    year: u
  };
}
function d0(n) {
  return parseInt(n.relatedYear || n.year);
}
function Ja(n) {
  const { year: r, o: i, day: a } = this.h(n), { u } = this.l(r);
  return [r, u[i] + 1, a];
}
function mo(n, r = 1, i = 1) {
  return this.l(n).i[r - 1] + (i - 1) * Fn;
}
function g0(n, r) {
  const i = ja.call(this, n);
  return [Il(r, i), i === r];
}
function ja(n) {
  const r = Ag(this, n), i = Ag(this, n - 1), a = r.length;
  if (a > i.length) {
    const u = l0(this);
    if (u < 0)
      return -u;
    for (let c = 0; c < a; c++)
      if (r[c] !== i[c])
        return c + 1;
  }
}
function Ca(n) {
  return wu(mo.call(this, n), mo.call(this, n + 1));
}
function Eg(n, r) {
  const { i } = this.l(n);
  let a = r + 1, u = i;
  return a > i.length && (a = 1, u = this.l(n + 1).i), wu(i[r - 1], u[a - 1]);
}
function Da(n) {
  return this.l(n).i.length;
}
function y0(n) {
  const r = this.h(n);
  return [r.era, r.eraYear];
}
function Ag(n, r) {
  return Object.keys(n.l(r).u);
}
function Oo(n) {
  return Eu(hn(n));
}
function Eu(n) {
  if ((n = n.toLowerCase()) !== Re && n !== Li) {
    const r = Kl(n).resolvedOptions().calendar;
    if (qr(n) !== qr(r))
      throw new RangeError(O0(n));
    return r;
  }
  return n;
}
function qr(n) {
  return n === "islamicc" && (n = "islamic"), n.split("-")[0];
}
function v0(n, r) {
  return (i) => i === Re ? n : i === Li || i === gr ? Object.assign(Object.create(n), {
    id: i
  }) : Object.assign(Object.create(r), $R(i));
}
function kI(n, r, i, a) {
  const u = _r(i, a, Gt, [], F0);
  if (u.timeZone !== void 0) {
    const c = i.F(u), f = xo(u), p = n(u.timeZone);
    return {
      epochNanoseconds: Mi(r(p), {
        ...c,
        ...f
      }, u.offset !== void 0 ? Yr(u.offset) : void 0),
      timeZone: p
    };
  }
  return {
    ...i.F(u),
    ...qn
  };
}
function UI(n, r, i, a, u, c) {
  const f = _r(i, u, Gt, N0, F0), p = n(f.timeZone), [h, g, m] = uu(c), v = i.F(f, fu(h)), w = xo(f, h);
  return st(Mi(r(p), {
    ...v,
    ...w
  }, f.offset !== void 0 ? Yr(f.offset) : void 0, g, m), p, a);
}
function jI(n, r, i) {
  const a = _r(n, r, Gt, [], $t), u = xe(i);
  return ct(Bn({
    ...n.F(a, fu(u)),
    ...xo(a, u)
  }));
}
function WI(n, r, i, a = []) {
  const u = _r(n, r, Gt, a);
  return n.F(u, i);
}
function YI(n, r, i, a) {
  const u = _r(n, r, Cl, a);
  return n.K(u, i);
}
function zI(n, r, i, a) {
  const u = _r(n, i, Gt, Po);
  return r && u.month !== void 0 && u.monthCode === void 0 && u.year === void 0 && (u.year = kt), n._(u, a);
}
function $I(n, r) {
  return St(xo(Vn(n, Rf, [], 1), xe(r)));
}
function GI(n) {
  const r = Vn(n, Dl);
  return nn(Wr({
    ...cn,
    ...r
  }));
}
function _r(n, r, i, a = [], u = []) {
  return Vn(r, [...n.fields(i), ...u].sort(), a);
}
function Vn(n, r, i, a = !i) {
  const u = {};
  let c, f = 0;
  for (const p of r) {
    if (p === c)
      throw new RangeError(PT(p));
    if (p === "constructor" || p === "__proto__")
      throw new RangeError(MT(p));
    let h = n[p];
    if (h !== void 0)
      f = 1, Ig[p] && (h = Ig[p](h, p)), u[p] = h;
    else if (i) {
      if (i.includes(p))
        throw new TypeError(Rl(p));
      u[p] = k0[p];
    }
    c = p;
  }
  if (a && !f)
    throw new TypeError(I0(r));
  return u;
}
function xo(n, r) {
  return Oi(Vl({
    ...k0,
    ...n
  }), r);
}
function ZI(n, r, i, a, u) {
  const { calendar: c, timeZone: f } = i, p = n(c), h = r(f), g = [...p.fields(Gt), ...L0].sort(), m = ((A) => {
    const R = Jn(A, me), D = Io(R.offsetNanoseconds), S = Ou(A.calendar), [M, L, q] = S.v(R), [$, H] = S.q(M, L), J = Ro($, H);
    return {
      ...QR(R),
      year: M,
      monthCode: J,
      day: q,
      offset: D
    };
  })(i), v = Vn(a, g), w = p.k(m, v), P = {
    ...m,
    ...v
  }, [E, x, B] = uu(u, 2);
  return st(Mi(h, {
    ...p.F(w, fu(E)),
    ...Oi(Vl(P), E)
  }, Yr(P.offset), x, B), f, c);
}
function HI(n, r, i, a) {
  const u = n(r.calendar), c = [...u.fields(Gt), ...$t].sort(), f = {
    ..._0(p = r),
    hour: p.isoHour,
    minute: p.isoMinute,
    second: p.isoSecond,
    millisecond: p.isoMillisecond,
    microsecond: p.isoMicrosecond,
    nanosecond: p.isoNanosecond
  };
  var p;
  const h = Vn(i, c), g = xe(a), m = u.k(f, h), v = {
    ...f,
    ...h
  };
  return ct(Bn({
    ...u.F(m, fu(g)),
    ...Oi(Vl(v), g)
  }));
}
function KI(n, r, i, a) {
  const u = n(r.calendar), c = u.fields(Gt).sort(), f = _0(r), p = Vn(i, c), h = u.k(f, p);
  return u.F(h, a);
}
function VI(n, r, i, a) {
  const u = n(r.calendar), c = u.fields(Cl).sort(), f = ((g) => {
    const m = Ou(g.calendar), [v, w] = m.v(g), [P, E] = m.q(v, w);
    return {
      year: v,
      monthCode: Ro(P, E)
    };
  })(r), p = Vn(i, c), h = u.k(f, p);
  return u.K(h, a);
}
function JI(n, r, i, a) {
  const u = n(r.calendar), c = u.fields(Gt).sort(), f = ((g) => {
    const m = Ou(g.calendar), [v, w, P] = m.v(g), [E, x] = m.q(v, w);
    return {
      monthCode: Ro(E, x),
      day: P
    };
  })(r), p = Vn(i, c), h = u.k(f, p);
  return u._(h, a);
}
function XI(n, r, i) {
  return St(((a, u, c) => xo({
    ...ut(Rf, a),
    ...Vn(u, Rf)
  }, xe(c)))(n, r, i));
}
function QI(n, r) {
  return nn((i = n, a = r, Wr({
    ...i,
    ...Vn(a, Dl)
  })));
  var i, a;
}
function m0(n, r, i, a, u) {
  r = ut(i = n.fields(i), r), a = Vn(a, u = n.fields(u), []);
  let c = n.k(r, a);
  return c = Vn(c, [...i, ...u].sort(), []), n.F(c);
}
function nc(n, r) {
  const i = Af(n), a = j0[n.id || ""] || {};
  let { era: u, eraYear: c, year: f } = r;
  if (u !== void 0 || c !== void 0) {
    if (u === void 0 || c === void 0)
      throw new TypeError(LT);
    if (!i)
      throw new RangeError(NT);
    const p = i[a[u] || u];
    if (p === void 0)
      throw new RangeError(BT(u));
    const h = f0(c, p);
    if (f !== void 0 && f !== h)
      throw new RangeError(FT);
    f = h;
  } else if (f === void 0)
    throw new TypeError(qT(i));
  return f;
}
function Na(n, r, i, a) {
  let { month: u, monthCode: c } = r;
  if (c !== void 0) {
    const f = ((p, h, g, m) => {
      const v = p.L(g), [w, P] = Sl(h);
      let E = Va(w, P, v);
      if (P) {
        const x = l0(p);
        if (x === void 0)
          throw new RangeError(oo);
        if (x > 0) {
          if (E > x)
            throw new RangeError(oo);
          if (v === void 0) {
            if (m === 1)
              throw new RangeError(oo);
            E--;
          }
        } else {
          if (E !== -x)
            throw new RangeError(oo);
          if (v === void 0 && m === 1)
            throw new RangeError(oo);
        }
      }
      return E;
    })(n, c, i, a);
    if (u !== void 0 && u !== f)
      throw new RangeError(UT);
    u = f, a = 1;
  } else if (u === void 0)
    throw new TypeError(R0);
  return Ut("month", u, 1, n.B(i), a);
}
function tc(n, r, i, a, u) {
  return Dn(r, "day", 1, n.U(a, i), u);
}
function rc(n, r, i, a) {
  let u = 0;
  const c = [];
  for (const f of i)
    r[f] !== void 0 ? u = 1 : c.push(f);
  if (Object.assign(n, r), u)
    for (const f of a || c)
      delete n[f];
}
function _0(n) {
  const r = Ou(n.calendar), [i, a, u] = r.v(n), [c, f] = r.q(i, a);
  return {
    year: i,
    monthCode: Ro(c, f),
    day: u
  };
}
function eT(n) {
  return Wt(Et(Wf(kf(n))));
}
function nT(n, r, i, a, u = Re) {
  return st(Et(Wf(kf(i))), r(a), n(u));
}
function tT(n, r, i, a, u = 0, c = 0, f = 0, p = 0, h = 0, g = 0, m = Re) {
  return ct(Bn(au(jt(_n, Ii(Tu, [r, i, a, u, c, f, p, h, g])))), n(m));
}
function rT(n, r, i, a, u = Re) {
  return Yt(rt(Ur(jt(_n, {
    isoYear: r,
    isoMonth: i,
    isoDay: a
  }))), n(u));
}
function iT(n, r, i, a = Re, u = 1) {
  const c = _n(r), f = _n(i), p = n(a);
  return go(zf(Ur({
    isoYear: c,
    isoMonth: f,
    isoDay: _n(u)
  })), p);
}
function oT(n, r, i, a = Re, u = kt) {
  const c = _n(r), f = _n(i), p = n(a);
  return Za(rt(Ur({
    isoYear: _n(u),
    isoMonth: c,
    isoDay: f
  })), p);
}
function aT(n = 0, r = 0, i = 0, a = 0, u = 0, c = 0) {
  return St(Oi(jt(_n, Ii(ft, [n, r, i, a, u, c])), 1));
}
function uT(n = 0, r = 0, i = 0, a = 0, u = 0, c = 0, f = 0, p = 0, h = 0, g = 0) {
  return nn(Wr(jt(Uf, Ii(Ce, [n, r, i, a, u, c, f, p, h, g]))));
}
function sT(n, r, i = Re) {
  return st(n.epochNanoseconds, r, i);
}
function cT(n) {
  return Wt(n.epochNanoseconds);
}
function w0(n, r) {
  return ct(Jn(r, n));
}
function b0(n, r) {
  return Yt(Jn(r, n));
}
function E0(n, r) {
  return St(Jn(r, n));
}
function fT(n, r, i, a) {
  const u = ((c, f, p, h) => {
    const g = ((m) => K0(At(m)))(h);
    return To(c(f), p, g);
  })(n, i, r, a);
  return st(Et(u), i, r.calendar);
}
function lT(n, r, i, a, u) {
  const c = n(u.timeZone), f = u.plainTime, p = f !== void 0 ? r(f) : void 0, h = i(c);
  let g;
  return g = p ? To(h, {
    ...a,
    ...p
  }) : dr(h, {
    ...a,
    ...qn
  }), st(g, c, a.calendar);
}
function pT(n, r = qn) {
  return ct(Bn({
    ...n,
    ...r
  }));
}
function hT(n, r, i) {
  return ((a, u) => {
    const c = _r(a, u, B0);
    return a.K(c, void 0);
  })(n(r.calendar), i);
}
function dT(n, r, i) {
  return ((a, u) => {
    const c = _r(a, u, q0);
    return a._(c);
  })(n(r.calendar), i);
}
function gT(n, r, i, a) {
  return ((u, c, f) => m0(u, c, B0, Ao(f), Po))(n(r.calendar), i, a);
}
function yT(n, r, i, a) {
  return ((u, c, f) => m0(u, c, q0, Ao(f), xl))(n(r.calendar), i, a);
}
function vT(n) {
  return Wt(Et($a(Uf(n), zt)));
}
function mT(n) {
  return Wt(Et(Wf(kf(n))));
}
function zr(n, r, i) {
  const a = new Set(i);
  return (u, c) => {
    const f = i && Zd(u, i);
    if (!Zd(u = ((p, h) => {
      const g = {};
      for (const m in h)
        p.has(m) || (g[m] = h[m]);
      return g;
    })(a, u), n)) {
      if (c && f)
        throw new TypeError("Invalid formatting options");
      u = {
        ...r,
        ...u
      };
    }
    return i && (u.timeZone = $r, ["full", "long"].includes(u.J) && (u.J = "medium")), u;
  };
}
function wr(n, r = A0, i = 0) {
  const [a, , , u] = n;
  return (c, f = mO, ...p) => {
    const h = r(u && u(...p), c, f, a, i), g = h.resolvedOptions();
    return [h, ..._T(n, g, p)];
  };
}
function A0(n, r, i, a, u) {
  if (i = a(i, u), n) {
    if (i.timeZone !== void 0)
      throw new TypeError(XT);
    i.timeZone = n;
  }
  return new cr(r, i);
}
function _T(n, r, i) {
  const [, a, u] = n;
  return i.map(((c) => (c.calendar && ((f, p, h) => {
    if ((h || f !== Re) && f !== p)
      throw new RangeError(x0);
  })(c.calendar, r.calendar, u), a(c, r))));
}
function wT(n, r, i) {
  const a = r.timeZone, u = n(a), c = {
    ...Jn(r, u),
    ...i || qn
  };
  let f;
  return f = i ? Mi(u, c, c.offsetNanoseconds, 2) : dr(u, c), st(f, a, r.calendar);
}
function bT(n, r = qn) {
  return ct(Bn({
    ...n,
    ...r
  }));
}
function Tl(n, r) {
  return {
    ...n,
    calendar: r
  };
}
function ET(n, r) {
  return {
    ...n,
    timeZone: r
  };
}
function ic(n) {
  const r = Sf();
  return Ri(r, n.R(r));
}
function Sf() {
  return $a(Date.now(), zt);
}
function io() {
  return Tg || (Tg = new cr().resolvedOptions().timeZone);
}
const AT = (n, r) => `Non-integer ${n}: ${r}`, ST = (n, r) => `Non-positive ${n}: ${r}`, IT = (n, r) => `Non-finite ${n}: ${r}`, TT = (n) => `Cannot convert bigint to ${n}`, RT = (n) => `Invalid bigint: ${n}`, OT = "Cannot convert Symbol to string", xT = "Invalid object", S0 = (n, r, i, a, u) => u ? S0(n, u[r], u[i], u[a]) : br(n, r) + `; must be between ${i}-${a}`, br = (n, r) => `Invalid ${n}: ${r}`, Rl = (n) => `Missing ${n}`, MT = (n) => `Invalid field ${n}`, PT = (n) => `Duplicate field ${n}`, I0 = (n) => "No valid fields: " + n.join(), CT = "Invalid bag", T0 = (n, r, i) => br(n, r) + "; must be " + Object.keys(i).join(), DT = "Cannot use valueOf", If = "Invalid calling context", NT = "Forbidden era/eraYear", LT = "Mismatching era/eraYear", FT = "Mismatching year/eraYear", BT = (n) => `Invalid era: ${n}`, qT = (n) => "Missing year" + (n ? "/era/eraYear" : ""), kT = (n) => `Invalid monthCode: ${n}`, UT = "Mismatching month/monthCode", R0 = "Missing month/monthCode", oo = "Invalid leap month", Ni = "Invalid protocol results", O0 = (n) => br("Calendar", n), x0 = "Mismatching Calendars", M0 = (n) => br("TimeZone", n), P0 = "Mismatching TimeZones", jT = "Forbidden ICU TimeZone", WT = "Out-of-bounds offset", YT = "Out-of-bounds TimeZone gap", zT = "Invalid TimeZone offset", $T = "Ambiguous offset", Er = "Out-of-bounds date", GT = "Out-of-bounds duration", ZT = "Cannot mix duration signs", Au = "Missing relativeTo", HT = "Cannot use large units", KT = "Required smallestUnit or largestUnit", VT = "smallestUnit > largestUnit", Ln = (n) => `Cannot parse: ${n}`, qt = (n) => `Invalid substring: ${n}`, JT = (n) => `Cannot format ${n}`, oc = "Mismatching types for formatting", XT = "Cannot specify TimeZone", C0 = /* @__PURE__ */ Ie(nu, ((n, r) => r)), Ei = /* @__PURE__ */ Ie(nu, ((n, r, i) => i)), it = /* @__PURE__ */ Ie(za, 2), Tf = {
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
}, Ol = /* @__PURE__ */ Object.keys(Tf), Fn = 864e5, D0 = 1e3, Mo = 1e3, zt = 1e6, mt = 1e9, Su = 6e10, Iu = 36e11, ke = 864e11, bt = [1, Mo, zt, mt, Su, Iu, ke], $t = /* @__PURE__ */ Ol.slice(0, 6), Rf = /* @__PURE__ */ Eo($t), QT = ["offset"], N0 = ["timeZone"], L0 = /* @__PURE__ */ $t.concat(QT), F0 = /* @__PURE__ */ L0.concat(N0), Of = ["era", "eraYear"], eR = /* @__PURE__ */ Of.concat(["year"]), xl = ["year"], Ml = ["monthCode"], Pl = /* @__PURE__ */ ["month"].concat(Ml), Po = ["day"], Cl = /* @__PURE__ */ Pl.concat(xl), B0 = /* @__PURE__ */ Ml.concat(xl), Gt = /* @__PURE__ */ Po.concat(Cl), nR = /* @__PURE__ */ Po.concat(Pl), q0 = /* @__PURE__ */ Po.concat(Ml), k0 = /* @__PURE__ */ Ei($t, 0), Re = "iso8601", Li = "gregory", gr = "japanese", U0 = {
  [Li]: {
    "gregory-inverse": -1,
    gregory: 0
  },
  [gr]: {
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
  buddhist: {
    be: 0
  },
  islamic: {
    ah: 0
  },
  indian: {
    saka: 0
  },
  persian: {
    ap: 0
  }
}, j0 = {
  [Li]: {
    bce: "gregory-inverse",
    ce: "gregory"
  },
  [gr]: {
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
}, tR = {
  chinese: 13,
  dangi: 13,
  hebrew: -6
}, hn = /* @__PURE__ */ Ie(Bf, "string"), rR = /* @__PURE__ */ Ie(Bf, "boolean"), iR = /* @__PURE__ */ Ie(Bf, "number"), Ce = /* @__PURE__ */ Ol.map(((n) => n + "s")), Dl = /* @__PURE__ */ Eo(Ce), oR = /* @__PURE__ */ Ce.slice(0, 6), W0 = /* @__PURE__ */ Ce.slice(6), aR = /* @__PURE__ */ W0.slice(1), uR = /* @__PURE__ */ C0(Ce), cn = /* @__PURE__ */ Ei(Ce, 0), Nl = /* @__PURE__ */ Ei(oR, 0), Ll = /* @__PURE__ */ Ie(h1, Ce), ft = ["isoNanosecond", "isoMicrosecond", "isoMillisecond", "isoSecond", "isoMinute", "isoHour"], Fl = ["isoDay", "isoMonth", "isoYear"], Tu = /* @__PURE__ */ ft.concat(Fl), Bl = /* @__PURE__ */ Eo(Fl), Y0 = /* @__PURE__ */ Eo(ft), sR = /* @__PURE__ */ Eo(Tu), qn = /* @__PURE__ */ Ei(Y0, 0), cR = /* @__PURE__ */ Ie(h1, Tu), ql = 1e8, kl = ql * Fn, fR = [ql, 0], lR = [-ql, 0], _o = 275760, wo = -271821, cr = Intl.DateTimeFormat, z0 = "en-GB", pR = 1970, kt = 1972, ir = 12, hR = /* @__PURE__ */ Ti(1868, 9, 8), dR = /* @__PURE__ */ Hn(KS, WeakMap), Xa = "smallestUnit", xf = "unit", lo = "roundingIncrement", ac = "fractionalSecondDigits", $0 = "relativeTo", uc = "direction", G0 = {
  constrain: 0,
  reject: 1
}, gR = /* @__PURE__ */ Object.keys(G0), yR = {
  compatible: 0,
  reject: 1,
  earlier: 2,
  later: 3
}, vR = {
  reject: 0,
  use: 1,
  prefer: 2,
  ignore: 3
}, mR = {
  auto: 0,
  never: 1,
  critical: 2,
  always: 3
}, _R = {
  auto: 0,
  never: 1,
  critical: 2
}, wR = {
  auto: 0,
  never: 1
}, bR = {
  floor: 0,
  halfFloor: 1,
  ceil: 2,
  halfCeil: 3,
  trunc: 4,
  halfTrunc: 5,
  expand: 6,
  halfExpand: 7,
  halfEven: 8
}, ER = {
  previous: -1,
  next: 1
}, Co = /* @__PURE__ */ Ie(Qf, Xa), Z0 = /* @__PURE__ */ Ie(Qf, "largestUnit"), AR = /* @__PURE__ */ Ie(Qf, xf), H0 = /* @__PURE__ */ Ie(yr, "overflow", G0), K0 = /* @__PURE__ */ Ie(yr, "disambiguation", yR), SR = /* @__PURE__ */ Ie(yr, "offset", vR), Ul = /* @__PURE__ */ Ie(yr, "calendarName", mR), IR = /* @__PURE__ */ Ie(yr, "timeZoneName", _R), TR = /* @__PURE__ */ Ie(yr, "offset", wR), Do = /* @__PURE__ */ Ie(yr, "roundingMode", bR), jl = "PlainYearMonth", Wl = "PlainMonthDay", No = "PlainDate", Fi = "PlainDateTime", Yl = "PlainTime", Ar = "ZonedDateTime", zl = "Instant", $l = "Duration", RR = [Math.floor, (n) => Pa(n) ? Math.floor(n) : Math.round(n), Math.ceil, (n) => Pa(n) ? Math.ceil(n) : Math.round(n), Math.trunc, (n) => Pa(n) ? Math.trunc(n) || 0 : Math.round(n), (n) => n < 0 ? Math.floor(n) : Math.ceil(n), (n) => Math.sign(n) * Math.round(Math.abs(n)) || 0, (n) => Pa(n) ? (n = Math.trunc(n) || 0) + n % 2 : Math.round(n)], $r = "UTC", Wa = 5184e3, OR = /* @__PURE__ */ Ga(1847), xR = /* @__PURE__ */ Ga(/* @__PURE__ */ (/* @__PURE__ */ new Date()).getUTCFullYear() + 10), MR = /0+$/, Jn = /* @__PURE__ */ Hn(fI, WeakMap), Sg = 2 ** 32 - 1, me = /* @__PURE__ */ Hn(((n) => {
  const r = wl(n);
  return typeof r == "object" ? new CR(r) : new PR(r || 0);
}));
class PR {
  constructor(r) {
    this.$ = r;
  }
  R() {
    return this.$;
  }
  I(r) {
    return ((i) => {
      const a = un({
        ...i,
        ...qn
      });
      if (!a || Math.abs(a[0]) > 1e8)
        throw new RangeError(Er);
    })(r), [$f(r, this.$)];
  }
  O() {
  }
}
class CR {
  constructor(r) {
    this.nn = ((i) => {
      function a(g) {
        const m = ho(g, p, h), [v, w] = dg(m), P = c(v), E = c(w);
        return P === E ? P : u(f(v, w), P, E, g);
      }
      function u(g, m, v, w) {
        let P, E;
        for (; (w === void 0 || (P = w < g[0] ? m : w >= g[1] ? v : void 0) === void 0) && (E = g[1] - g[0]); ) {
          const x = g[0] + Math.floor(E / 2);
          i(x) === v ? g[1] = x : g[0] = x + 1;
        }
        return P;
      }
      const c = Hn(i), f = Hn(dI);
      let p = OR, h = xR;
      return {
        tn(g) {
          const m = a(g - 86400), v = a(g + 86400), w = g - m, P = g - v;
          if (m === v)
            return [w];
          const E = a(w);
          return E === a(P) ? [g - E] : m > v ? [w, P] : [];
        },
        rn: a,
        O(g, m) {
          const v = ho(g, p, h);
          let [w, P] = dg(v);
          const E = Wa * m, x = m < 0 ? () => P > p || (p = v, 0) : () => w < h || (h = v, 0);
          for (; x(); ) {
            const B = c(w), A = c(P);
            if (B !== A) {
              const R = f(w, P);
              u(R, B, A);
              const D = R[0];
              if ((sr(D, g) || 1) === m)
                return D;
            }
            w += E, P += E;
          }
        }
      };
    })(/* @__PURE__ */ ((i) => (a) => {
      const u = Gf(i, a * D0);
      return Ga(d0(u), parseInt(u.month), parseInt(u.day), parseInt(u.hour), parseInt(u.minute), parseInt(u.second)) - a;
    })(r));
  }
  R(r) {
    return this.nn.rn(((i) => Vd(i)[0])(r)) * mt;
  }
  I(r) {
    const [i, a] = [Ga((u = r).isoYear, u.isoMonth, u.isoDay, u.isoHour, u.isoMinute, u.isoSecond), u.isoMillisecond * zt + u.isoMicrosecond * Mo + u.isoNanosecond];
    var u;
    return this.nn.tn(i).map(((c) => Et(Fr($a(c, mt), a))));
  }
  O(r, i) {
    const [a, u] = Vd(r), c = this.nn.O(a + (i > 0 || u ? 1 : 0), i);
    if (c !== void 0)
      return $a(c, mt);
  }
}
const Gl = "([+-])", Ya = "(?:[.,](\\d{1,9}))?", V0 = `(?:(?:${Gl}(\\d{6}))|(\\d{4}))-?(\\d{2})`, Zl = "(\\d{2})(?::?(\\d{2})(?::?(\\d{2})" + Ya + ")?)?", Hl = Gl + Zl, DR = V0 + "-?(\\d{2})(?:[T ]" + Zl + "(Z|" + Hl + ")?)?", J0 = "\\[(!?)([^\\]]*)\\]", Ru = `((?:${J0}){0,9})`, NR = /* @__PURE__ */ Ci(V0 + Ru), LR = /* @__PURE__ */ Ci("(?:--)?(\\d{2})-?(\\d{2})" + Ru), FR = /* @__PURE__ */ Ci(DR + Ru), BR = /* @__PURE__ */ Ci("T?" + Zl + "(?:" + Hl + ")?" + Ru), qR = /* @__PURE__ */ Ci(Hl), kR = /* @__PURE__ */ new RegExp(J0, "g"), UR = /* @__PURE__ */ Ci(`${Gl}?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?:(\\d+)${Ya}H)?(?:(\\d+)${Ya}M)?(?:(\\d+)${Ya}S)?)?`), jR = /* @__PURE__ */ Hn(((n) => new cr(z0, {
  timeZone: n,
  era: "short",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
}))), WR = /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/, YR = /[^\w\/:+-]+/, zR = /^M(\d{2})(L?)$/, $R = /* @__PURE__ */ Hn(FI), Kl = /* @__PURE__ */ Hn(((n) => new cr(z0, {
  calendar: n,
  timeZone: $r,
  era: "short",
  year: "numeric",
  month: "short",
  day: "numeric"
}))), X0 = {
  P(n, r, i) {
    const a = xe(i);
    let u, { years: c, months: f, weeks: p, days: h } = r;
    if (h += sn(r, 5)[0], c || f)
      u = ((g, m, v, w, P) => {
        let [E, x, B] = g.v(m);
        if (v) {
          const [A, R] = g.q(E, x);
          E += v, x = Va(A, R, g.L(E)), x = Ut("month", x, 1, g.B(E), P);
        }
        return w && ([E, x] = g.un(E, x, w)), B = Ut("day", B, 1, g.U(E, x), P), g.p(E, x, B);
      })(this, n, c, f, a);
    else {
      if (!p && !h)
        return n;
      u = wn(n);
    }
    if (u === void 0)
      throw new RangeError(Er);
    return u += (7 * p + h) * Fn, rt(ou(u));
  },
  N(n, r, i) {
    if (i <= 7) {
      let h = 0, g = u0({
        ...n,
        ...qn
      }, {
        ...r,
        ...qn
      });
      return i === 7 && ([h, g] = lr(g, 7)), {
        ...cn,
        weeks: h,
        days: g
      };
    }
    const a = this.v(n), u = this.v(r);
    let [c, f, p] = ((h, g, m, v, w, P, E) => {
      let x = w - g, B = P - m, A = E - v;
      if (x || B) {
        const R = Math.sign(x || B);
        let D = h.U(w, P), S = 0;
        if (Math.sign(A) === -R) {
          const M = D;
          [w, P] = h.un(w, P, -R), x = w - g, B = P - m, D = h.U(w, P), S = R < 0 ? -M : D;
        }
        if (A = E - Math.min(v, D) + S, x) {
          const [M, L] = h.q(g, m), [q, $] = h.q(w, P);
          if (B = q - M || Number($) - Number(L), Math.sign(B) === -R) {
            const H = R < 0 && -h.B(w);
            x = (w -= R) - g, B = P - Va(M, L, h.L(w)) + (H || h.B(w));
          }
        }
      }
      return [x, B, A];
    })(this, ...a, ...u);
    return i === 8 && (f += this.cn(c, a[0]), c = 0), {
      ...cn,
      years: c,
      months: f,
      days: p
    };
  },
  F(n, r) {
    const i = xe(r), a = nc(this, n), u = Na(this, n, a, i), c = tc(this, n, u, a, i);
    return Yt(rt(this.V(a, u, c)), this.id || Re);
  },
  K(n, r) {
    const i = xe(r), a = nc(this, n), u = Na(this, n, a, i);
    return go(zf(this.V(a, u, 1)), this.id || Re);
  },
  _(n, r) {
    const i = xe(r);
    let a, u, c, f = n.eraYear !== void 0 || n.year !== void 0 ? nc(this, n) : void 0;
    const p = !this.id;
    if (f === void 0 && p && (f = kt), f !== void 0) {
      const v = Na(this, n, f, i);
      a = tc(this, n, v, f, i);
      const w = this.L(f);
      u = Il(v, w), c = v === w;
    } else {
      if (n.monthCode === void 0)
        throw new TypeError(R0);
      if ([u, c] = Sl(n.monthCode), this.id && this.id !== Li && this.id !== gr)
        if (this.id && qr(this.id) === "coptic" && i === 0) {
          const v = c || u !== 13 ? 30 : 6;
          a = n.day, a = ho(a, 1, v);
        } else if (this.id && qr(this.id) === "chinese" && i === 0) {
          const v = !c || u !== 1 && u !== 9 && u !== 10 && u !== 11 && u !== 12 ? 30 : 29;
          a = n.day, a = ho(a, 1, v);
        } else
          a = n.day;
      else
        a = tc(this, n, Na(this, n, kt, i), kt, i);
    }
    const h = this.G(u, c, a);
    if (!h)
      throw new RangeError("Cannot guess year");
    const [g, m] = h;
    return Za(rt(this.V(g, m, a)), this.id || Re);
  },
  fields(n) {
    return Af(this) && n.includes("year") ? [...n, ...Of] : n;
  },
  k(n, r) {
    const i = Object.assign(/* @__PURE__ */ Object.create(null), n);
    return rc(i, r, Pl), Af(this) && (rc(i, r, eR), this.id === gr && rc(i, r, nR, Of)), i;
  },
  inLeapYear(n) {
    const [r] = this.v(n);
    return this.sn(r);
  },
  monthsInYear(n) {
    const [r] = this.v(n);
    return this.B(r);
  },
  daysInMonth(n) {
    const [r, i] = this.v(n);
    return this.U(r, i);
  },
  daysInYear(n) {
    const [r] = this.v(n);
    return this.fn(r);
  },
  dayOfYear: Al,
  era(n) {
    return this.hn(n)[0];
  },
  eraYear(n) {
    return this.hn(n)[1];
  },
  monthCode(n) {
    const [r, i] = this.v(n), [a, u] = this.q(r, i);
    return Ro(a, u);
  },
  dayOfWeek: T1,
  daysInWeek() {
    return 7;
  }
}, GR = {
  v: Zf,
  hn: R1,
  q: E1
}, ZR = {
  dayOfYear: Al,
  v: Zf,
  p: Ti
}, HR = /* @__PURE__ */ Object.assign({}, ZR, {
  weekOfYear: s0,
  yearOfWeek: c0,
  m(n) {
    function r(P) {
      return (7 - P < a ? 7 : 0) - P;
    }
    function i(P) {
      const E = I1(w + P), x = P || 1, B = r(fo(h + E * x, 7));
      return m = (E + (B - g) * x) / 7;
    }
    const a = this.id ? 1 : 4, u = T1(n), c = this.dayOfYear(n), f = fo(u - 1, 7), p = c - 1, h = fo(f - p, 7), g = r(h);
    let m, v = Math.floor((p - g) / 7) + 1, w = n.isoYear;
    return v ? v > i(0) && (v = 1, w++) : (v = i(-1), w--), [v, w, m];
  }
}), KR = /* @__PURE__ */ Object.assign({}, X0, HR, {
  v: Zf,
  hn: R1,
  q: E1,
  G(n, r) {
    if (!r)
      return [kt, n];
  },
  sn: Hf,
  L() {
  },
  B: A1,
  cn: (n) => n * ir,
  U: S1,
  fn: I1,
  V: (n, r, i) => ({
    isoYear: n,
    isoMonth: r,
    isoDay: i
  }),
  p: Ti,
  un: (n, r, i) => (n += tu(i, ir), (r += Lf(i, ir)) < 1 ? (n--, r += ir) : r > ir && (n++, r -= ir), [n, r]),
  year(n) {
    return n.isoYear;
  },
  month(n) {
    return n.isoMonth;
  },
  day: (n) => n.isoDay
}), VR = {
  v: Ja,
  hn: y0,
  q: g0
}, JR = {
  dayOfYear: Al,
  v: Ja,
  p: mo,
  weekOfYear: s0,
  yearOfWeek: c0,
  m() {
    return [];
  }
}, XR = /* @__PURE__ */ Object.assign({}, X0, JR, {
  v: Ja,
  hn: y0,
  q: g0,
  G(n, r, i) {
    const a = this.id && qr(this.id) === "chinese" ? ((g, m, v) => {
      if (m)
        switch (g) {
          case 1:
            return 1651;
          case 2:
            return v < 30 ? 1947 : 1765;
          case 3:
            return v < 30 ? 1966 : 1955;
          case 4:
            return v < 30 ? 1963 : 1944;
          case 5:
            return v < 30 ? 1971 : 1952;
          case 6:
            return v < 30 ? 1960 : 1941;
          case 7:
            return v < 30 ? 1968 : 1938;
          case 8:
            return v < 30 ? 1957 : 1718;
          case 9:
            return 1832;
          case 10:
            return 1870;
          case 11:
            return 1814;
          case 12:
            return 1890;
        }
      return 1972;
    })(n, r, i) : kt;
    let [u, c, f] = Ja.call(this, {
      isoYear: a,
      isoMonth: ir,
      isoDay: 31
    });
    const p = ja.call(this, u), h = c === p;
    (sr(n, Il(c, p)) || sr(Number(r), Number(h)) || sr(i, f)) === 1 && u--;
    for (let g = 0; g < 100; g++) {
      const m = u - g, v = ja.call(this, m), w = Va(n, r, v);
      if (r === (w === v) && i <= Eg.call(this, m, w))
        return [m, w];
    }
  },
  sn(n) {
    const r = Ca.call(this, n);
    return r > Ca.call(this, n - 1) && r > Ca.call(this, n + 1);
  },
  L: ja,
  B: Da,
  cn(n, r) {
    const i = r + n, a = Math.sign(n), u = a < 0 ? -1 : 0;
    let c = 0;
    for (let f = r; f !== i; f += a)
      c += Da.call(this, f + u);
    return c;
  },
  U: Eg,
  fn: Ca,
  V(n, r, i) {
    return ou(mo.call(this, n, r, i));
  },
  p: mo,
  un(n, r, i) {
    if (i) {
      if (r += i, !Number.isSafeInteger(r))
        throw new RangeError(Er);
      if (i < 0)
        for (; r < 1; )
          r += Da.call(this, --n);
      else {
        let a;
        for (; r > (a = Da.call(this, n)); )
          r -= a, n++;
      }
    }
    return [n, r];
  },
  year(n) {
    return this.h(n).year;
  },
  month(n) {
    const { year: r, o: i } = this.h(n), { u: a } = this.l(r);
    return a[i] + 1;
  },
  day(n) {
    return this.h(n).day;
  }
}), Ou = /* @__PURE__ */ v0(GR, VR), he = /* @__PURE__ */ v0(KR, XR), Ig = {
  era: Ua,
  eraYear: _n,
  year: _n,
  month: Kd,
  monthCode(n) {
    const r = Ua(n);
    return Sl(r), r;
  },
  day: Kd,
  .../* @__PURE__ */ Ei($t, _n),
  .../* @__PURE__ */ Ei(Ce, Uf),
  offset(n) {
    const r = Ua(n);
    return Yr(r), r;
  }
}, Vl = /* @__PURE__ */ Ie(l1, $t, ft), QR = /* @__PURE__ */ Ie(l1, ft, $t), fr = "numeric", Lo = ["timeZoneName"], Q0 = {
  month: fr,
  day: fr
}, Jl = {
  year: fr,
  month: fr
}, Xl = /* @__PURE__ */ Object.assign({}, Jl, {
  day: fr
}), Ql = {
  hour: fr,
  minute: fr,
  second: fr
}, ep = /* @__PURE__ */ Object.assign({}, Xl, Ql), eO = /* @__PURE__ */ Object.assign({}, ep, {
  timeZoneName: "short"
}), nO = /* @__PURE__ */ Object.keys(Jl), tO = /* @__PURE__ */ Object.keys(Q0), rO = /* @__PURE__ */ Object.keys(Xl), iO = /* @__PURE__ */ Object.keys(Ql), np = ["dateStyle"], oO = /* @__PURE__ */ nO.concat(np), aO = /* @__PURE__ */ tO.concat(np), tp = /* @__PURE__ */ rO.concat(np, ["weekday"]), Fo = /* @__PURE__ */ iO.concat(["dayPeriod", "timeStyle", "fractionalSecondDigits"]), rp = /* @__PURE__ */ tp.concat(Fo), uO = /* @__PURE__ */ Lo.concat(Fo), sO = /* @__PURE__ */ Lo.concat(tp), cO = /* @__PURE__ */ Lo.concat(["day", "weekday"], Fo), fO = /* @__PURE__ */ Lo.concat(["year", "weekday"], Fo), lO = /* @__PURE__ */ zr(rp, ep), pO = /* @__PURE__ */ zr(rp, eO), hO = /* @__PURE__ */ zr(rp, ep, Lo), dO = /* @__PURE__ */ zr(tp, Xl, uO), gO = /* @__PURE__ */ zr(Fo, Ql, sO), yO = /* @__PURE__ */ zr(oO, Jl, cO), vO = /* @__PURE__ */ zr(aO, Q0, fO), mO = {}, ev = new cr(void 0, {
  calendar: Re
}).resolvedOptions().calendar === Re, nv = [lO, el], _O = [pO, el, 0, (n, r) => {
  const i = n.timeZone;
  if (r && r.timeZone !== i)
    throw new RangeError(P0);
  return i;
}], tv = [hO, wn], rv = [dO, wn], iv = [gO, (n) => pr(n) / zt], ov = [yO, wn, ev], av = [vO, wn, ev];
let Tg;
function Sr(n, r, i, a, u) {
  function c(...h) {
    if (!(this instanceof c))
      throw new TypeError(If);
    xg(this, r(...h));
  }
  function f(h, g) {
    return Object.defineProperties((function(...m) {
      return h.call(this, p(this), ...m);
    }), po(g));
  }
  function p(h) {
    const g = An(h);
    if (!g || g.branding !== n)
      throw new TypeError(If);
    return g;
  }
  return Object.defineProperties(c.prototype, {
    ...GS(jt(f, i)),
    ..._i(jt(f, a)),
    ...Nf("Temporal." + n)
  }), Object.defineProperties(c, {
    ..._i(u),
    ...po(n)
  }), [c, (h) => {
    const g = Object.create(c.prototype);
    return xg(g, h), g;
  }, p];
}
function Bi(n) {
  if (An(n) || n.calendar !== void 0 || n.timeZone !== void 0)
    throw new TypeError(CT);
  return n;
}
function Bo(n) {
  return uv(n) || Re;
}
function uv(n) {
  const { calendar: r } = n;
  if (r !== void 0)
    return xu(r);
}
function xu(n) {
  if (bn(n)) {
    const { calendar: r } = An(n) || {};
    if (!r)
      throw new TypeError(O0(n));
    return r;
  }
  return ((r) => Eu(AI(hn(r))))(n);
}
function ip(n) {
  const r = {};
  for (const i in n)
    r[i] = (a) => {
      const { calendar: u } = a;
      return he(u)[i](a);
    };
  return r;
}
function Ir() {
  throw new TypeError(DT);
}
function Zn(n) {
  if (bn(n)) {
    const { timeZone: r } = An(n) || {};
    if (!r)
      throw new TypeError(M0(n));
    return r;
  }
  return ((r) => _l(SI(hn(r))))(n);
}
function en(n) {
  if (bn(n)) {
    const r = An(n);
    return r && r.branding === $l ? r : GI(n);
  }
  return EI(n);
}
function ao(n) {
  if (n !== void 0) {
    if (bn(n)) {
      const r = An(n) || {};
      switch (r.branding) {
        case Ar:
        case No:
          return r;
        case Fi:
          return Yt(r);
      }
      const i = Bo(n);
      return {
        ...kI(Zn, me, he(i), n),
        calendar: i
      };
    }
    return yI(n);
  }
}
function or(n, r) {
  if (bn(n)) {
    const a = An(n) || {};
    switch (a.branding) {
      case Yl:
        return xe(r), a;
      case Fi:
        return xe(r), St(a);
      case Ar:
        return xe(r), E0(me, a);
    }
    return $I(n, r);
  }
  const i = bI(n);
  return xe(r), i;
}
function op(n) {
  return n === void 0 ? void 0 : or(n);
}
function ci(n, r) {
  if (bn(n)) {
    const a = An(n) || {};
    switch (a.branding) {
      case Fi:
        return xe(r), a;
      case No:
        return xe(r), ct({
          ...a,
          ...qn
        });
      case Ar:
        return xe(r), w0(me, a);
    }
    return jI(he(Bo(n)), n, r);
  }
  const i = mI(n);
  return xe(r), i;
}
function Rg(n, r) {
  if (bn(n)) {
    const a = An(n);
    if (a && a.branding === Wl)
      return xe(r), a;
    const u = uv(n);
    return zI(he(u || Re), !u, n, r);
  }
  const i = wI(he, n);
  return xe(r), i;
}
function fi(n, r) {
  if (bn(n)) {
    const a = An(n);
    return a && a.branding === jl ? (xe(r), a) : YI(he(Bo(n)), n, r);
  }
  const i = _I(he, n);
  return xe(r), i;
}
function li(n, r) {
  if (bn(n)) {
    const a = An(n) || {};
    switch (a.branding) {
      case No:
        return xe(r), a;
      case Fi:
        return xe(r), Yt(a);
      case Ar:
        return xe(r), b0(me, a);
    }
    return WI(he(Bo(n)), n, r);
  }
  const i = pl(n);
  return xe(r), i;
}
function pi(n, r) {
  if (bn(n)) {
    const i = An(n);
    if (i && i.branding === Ar)
      return uu(r), i;
    const a = Bo(n);
    return UI(Zn, me, he(a), a, n, r);
  }
  return vI(n, r);
}
function Og(n) {
  return jt(((r) => (i) => r(Mf(i))), n);
}
function Mf(n) {
  return Jn(n, me);
}
function hi(n) {
  if (bn(n)) {
    const r = An(n);
    if (r)
      switch (r.branding) {
        case zl:
          return r;
        case Ar:
          return Wt(r.epochNanoseconds);
      }
  }
  return gI(n);
}
function wO() {
  function n(c, f) {
    return new r(c, f);
  }
  function r(c, f = /* @__PURE__ */ Object.create(null)) {
    eu.set(this, ((p, h) => {
      const g = new cr(p, h), m = g.resolvedOptions(), v = m.locale, w = ut(Object.keys(h), m), P = Hn(AO), E = (x, ...B) => {
        if (x) {
          if (B.length !== 2)
            throw new TypeError(oc);
          for (const S of B)
            if (S === void 0)
              throw new TypeError(oc);
        }
        x || B[0] !== void 0 || (B = []);
        const A = B.map(((S) => An(S) || Number(S)));
        let R, D = 0;
        for (const S of A) {
          const M = typeof S == "object" ? S.branding : void 0;
          if (D++ && M !== R)
            throw new TypeError(oc);
          R = M;
        }
        return R ? P(R)(v, w, ...A) : [g, ...A];
      };
      return E.X = g, E;
    })(c, f));
  }
  const i = cr.prototype, a = Object.getOwnPropertyDescriptors(i), u = Object.getOwnPropertyDescriptors(cr);
  for (const c in a) {
    const f = a[c], p = c.startsWith("format") && bO(c);
    typeof f.value == "function" ? f.value = c === "constructor" ? n : p || EO(c) : p && (f.get = function() {
      if (!eu.has(this))
        throw new TypeError(If);
      return (...h) => p.apply(this, h);
    }, Object.defineProperties(f.get, po(`get ${c}`)));
  }
  return u.prototype.value = r.prototype = Object.create({}, a), Object.defineProperties(n, u), n;
}
function bO(n) {
  return Object.defineProperties((function(...r) {
    const i = eu.get(this), [a, ...u] = i(n.includes("Range"), ...r);
    return a[n](...u);
  }), po(n));
}
function EO(n) {
  return Object.defineProperties((function(...r) {
    return eu.get(this).X[n](...r);
  }), po(n));
}
function AO(n) {
  const r = xO[n];
  if (!r)
    throw new TypeError(JT(n));
  return wr(r, Hn(A0), 1);
}
const Qa = /* @__PURE__ */ new WeakMap(), An = /* @__PURE__ */ Qa.get.bind(Qa), xg = /* @__PURE__ */ Qa.set.bind(Qa), sv = {
  era: ZS,
  eraYear: g1,
  year: Ff,
  month: Ft,
  daysInMonth: Ft,
  daysInYear: Ft,
  inLeapYear: rR,
  monthsInYear: Ft
}, ap = {
  monthCode: hn
}, cv = {
  day: Ft
}, SO = {
  dayOfWeek: Ft,
  dayOfYear: Ft,
  weekOfYear: HS,
  yearOfWeek: g1,
  daysInWeek: Ft
}, up = /* @__PURE__ */ ip(/* @__PURE__ */ Object.assign({}, sv, ap, cv, SO)), IO = /* @__PURE__ */ ip({
  ...sv,
  ...ap
}), TO = /* @__PURE__ */ ip({
  ...ap,
  ...cv
}), qo = {
  calendarId: (n) => n.calendar
}, RO = /* @__PURE__ */ nu(((n) => (r) => r[n]), Ce.concat("sign")), sp = /* @__PURE__ */ nu(((n, r) => (i) => i[ft[r]]), $t), fv = {
  epochMilliseconds: el,
  epochNanoseconds: JS
}, [OO, He] = Sr($l, uT, {
  ...RO,
  blank: hI
}, {
  with: (n, r) => He(QI(n, r)),
  negated: (n) => He(ll(n)),
  abs: (n) => He(pI(n)),
  add: (n, r, i) => He(hg(ao, he, me, 0, n, en(r), i)),
  subtract: (n, r, i) => He(hg(ao, he, me, 1, n, en(r), i)),
  round: (n, r) => He(lI(ao, he, me, n, r)),
  total: (n, r) => XS(ao, he, me, n, r),
  toLocaleString(n, r, i) {
    return Intl.DurationFormat ? new Intl.DurationFormat(r, i).format(this) : ec(n);
  },
  toString: ec,
  toJSON: (n) => ec(n),
  valueOf: Ir
}, {
  from: (n) => He(en(n)),
  compare: (n, r, i) => TI(ao, he, me, en(n), en(r), i)
}), xO = {
  Instant: nv,
  PlainDateTime: tv,
  PlainDate: rv,
  PlainTime: iv,
  PlainYearMonth: ov,
  PlainMonthDay: av
}, MO = /* @__PURE__ */ wr(nv), PO = /* @__PURE__ */ wr(_O), CO = /* @__PURE__ */ wr(tv), DO = /* @__PURE__ */ wr(rv), NO = /* @__PURE__ */ wr(iv), LO = /* @__PURE__ */ wr(ov), FO = /* @__PURE__ */ wr(av), [BO, ur] = Sr(Yl, aT, sp, {
  with(n, r, i) {
    return ur(XI(this, Bi(r), i));
  },
  add: (n, r) => ur(pg(0, n, en(r))),
  subtract: (n, r) => ur(pg(1, n, en(r))),
  until: (n, r, i) => He(bg(0, n, or(r), i)),
  since: (n, r, i) => He(bg(1, n, or(r), i)),
  round: (n, r) => ur(tI(n, r)),
  equals: (n, r) => DI(n, or(r)),
  toLocaleString(n, r, i) {
    const [a, u] = NO(r, i, n);
    return a.format(u);
  },
  toString: og,
  toJSON: (n) => og(n),
  valueOf: Ir
}, {
  from: (n, r) => ur(or(n, r)),
  compare: (n, r) => bl(or(n), or(r))
}), [qO, yt] = Sr(Fi, Ie(tT, Oo), {
  ...qo,
  ...up,
  ...sp
}, {
  with: (n, r, i) => yt(HI(he, n, Bi(r), i)),
  withCalendar: (n, r) => yt(Tl(n, xu(r))),
  withPlainTime: (n, r) => yt(bT(n, op(r))),
  add: (n, r, i) => yt(cg(he, 0, n, en(r), i)),
  subtract: (n, r, i) => yt(cg(he, 1, n, en(r), i)),
  until: (n, r, i) => He(mg(he, 0, n, ci(r), i)),
  since: (n, r, i) => He(mg(he, 1, n, ci(r), i)),
  round: (n, r) => yt(nI(n, r)),
  equals: (n, r) => xI(n, ci(r)),
  toZonedDateTime: (n, r, i) => mn(fT(me, n, Zn(r), i)),
  toPlainDate: (n) => vt(Yt(n)),
  toPlainTime: (n) => ur(St(n)),
  toLocaleString(n, r, i) {
    const [a, u] = CO(r, i, n);
    return a.format(u);
  },
  toString: ng,
  toJSON: (n) => ng(n),
  valueOf: Ir
}, {
  from: (n, r) => yt(ci(n, r)),
  compare: (n, r) => n0(ci(n), ci(r))
}), [kO, Pf] = Sr(Wl, Ie(oT, Oo), {
  ...qo,
  ...TO
}, {
  with: (n, r, i) => Pf(JI(he, n, Bi(r), i)),
  equals: (n, r) => CI(n, Rg(r)),
  toPlainDate(n, r) {
    return vt(yT(he, n, this, r));
  },
  toLocaleString(n, r, i) {
    const [a, u] = FO(r, i, n);
    return a.format(u);
  },
  toString: ig,
  toJSON: (n) => ig(n),
  valueOf: Ir
}, {
  from: (n, r) => Pf(Rg(n, r))
}), [UO, so] = Sr(jl, Ie(iT, Oo), {
  ...qo,
  ...IO
}, {
  with: (n, r, i) => so(VI(he, n, Bi(r), i)),
  add: (n, r, i) => so(lg(he, 0, n, en(r), i)),
  subtract: (n, r, i) => so(lg(he, 1, n, en(r), i)),
  until: (n, r, i) => He(wg(he, 0, n, fi(r), i)),
  since: (n, r, i) => He(wg(he, 1, n, fi(r), i)),
  equals: (n, r) => PI(n, fi(r)),
  toPlainDate(n, r) {
    return vt(gT(he, n, this, r));
  },
  toLocaleString(n, r, i) {
    const [a, u] = LO(r, i, n);
    return a.format(u);
  },
  toString: rg,
  toJSON: (n) => rg(n),
  valueOf: Ir
}, {
  from: (n, r) => so(fi(n, r)),
  compare: (n, r) => Di(fi(n), fi(r))
}), [jO, vt] = Sr(No, Ie(rT, Oo), {
  ...qo,
  ...up
}, {
  with: (n, r, i) => vt(KI(he, n, Bi(r), i)),
  withCalendar: (n, r) => vt(Tl(n, xu(r))),
  add: (n, r, i) => vt(fg(he, 0, n, en(r), i)),
  subtract: (n, r, i) => vt(fg(he, 1, n, en(r), i)),
  until: (n, r, i) => He(_g(he, 0, n, li(r), i)),
  since: (n, r, i) => He(_g(he, 1, n, li(r), i)),
  equals: (n, r) => MI(n, li(r)),
  toZonedDateTime(n, r) {
    const i = bn(r) ? r : {
      timeZone: r
    };
    return mn(lT(Zn, or, me, n, i));
  },
  toPlainDateTime: (n, r) => yt(pT(n, op(r))),
  toPlainYearMonth(n) {
    return so(hT(he, n, this));
  },
  toPlainMonthDay(n) {
    return Pf(dT(he, n, this));
  },
  toLocaleString(n, r, i) {
    const [a, u] = DO(r, i, n);
    return a.format(u);
  },
  toString: tg,
  toJSON: (n) => tg(n),
  valueOf: Ir
}, {
  from: (n, r) => vt(li(n, r)),
  compare: (n, r) => Di(li(n), li(r))
}), [WO, mn] = Sr(Ar, Ie(nT, Oo, II), {
  ...fv,
  ...qo,
  ...Og(up),
  ...Og(sp),
  offset: (n) => Io(Mf(n).offsetNanoseconds),
  offsetNanoseconds: (n) => Mf(n).offsetNanoseconds,
  timeZoneId: (n) => n.timeZone,
  hoursInDay: (n) => rI(me, n)
}, {
  with: (n, r, i) => mn(ZI(he, me, n, Bi(r), i)),
  withCalendar: (n, r) => mn(Tl(n, xu(r))),
  withTimeZone: (n, r) => mn(ET(n, Zn(r))),
  withPlainTime: (n, r) => mn(wT(me, n, op(r))),
  add: (n, r, i) => mn(sg(he, me, 0, n, en(r), i)),
  subtract: (n, r, i) => mn(sg(he, me, 1, n, en(r), i)),
  until: (n, r, i) => He(nn(vg(he, me, 0, n, pi(r), i))),
  since: (n, r, i) => He(nn(vg(he, me, 1, n, pi(r), i))),
  round: (n, r) => mn(eI(me, n, r)),
  startOfDay: (n) => mn(iI(me, n)),
  equals: (n, r) => OI(n, pi(r)),
  toInstant: (n) => ar(cT(n)),
  toPlainDateTime: (n) => yt(w0(me, n)),
  toPlainDate: (n) => vt(b0(me, n)),
  toPlainTime: (n) => ur(E0(me, n)),
  toLocaleString(n, r, i = {}) {
    const [a, u] = PO(r, i, n);
    return a.format(u);
  },
  toString: (n, r) => eg(me, n, r),
  toJSON: (n) => eg(me, n),
  valueOf: Ir,
  getTimeZoneTransition(n, r) {
    const { timeZone: i, epochNanoseconds: a } = n, u = VS(r), c = me(i).O(a, u);
    return c ? mn({
      ...n,
      epochNanoseconds: c
    }) : null;
  }
}, {
  from: (n, r) => mn(pi(n, r)),
  compare: (n, r) => e0(pi(n), pi(r))
}), [YO, ar] = Sr(zl, eT, fv, {
  add: (n, r) => ar(ug(0, n, en(r))),
  subtract: (n, r) => ar(ug(1, n, en(r))),
  until: (n, r, i) => He(yg(0, n, hi(r), i)),
  since: (n, r, i) => He(yg(1, n, hi(r), i)),
  round: (n, r) => ar(QS(n, r)),
  equals: (n, r) => RI(n, hi(r)),
  toZonedDateTimeISO: (n, r) => mn(sT(n, Zn(r))),
  toLocaleString(n, r, i) {
    const [a, u] = MO(r, i, n);
    return a.format(u);
  },
  toString: (n, r) => Qd(Zn, me, n, r),
  toJSON: (n) => Qd(Zn, me, n),
  valueOf: Ir
}, {
  from: (n) => ar(hi(n)),
  fromEpochMilliseconds: (n) => ar(vT(n)),
  fromEpochNanoseconds: (n) => ar(mT(n)),
  compare: (n, r) => Q1(hi(n), hi(r))
}), zO = /* @__PURE__ */ Object.defineProperties({}, {
  ...Nf("Temporal.Now"),
  ..._i({
    timeZoneId: () => io(),
    instant: () => ar(Wt(Sf())),
    zonedDateTimeISO: (n = io()) => mn(st(Sf(), Zn(n), Re)),
    plainDateTimeISO: (n = io()) => yt(ct(ic(me(Zn(n))), Re)),
    plainDateISO: (n = io()) => vt(Yt(ic(me(Zn(n))), Re)),
    plainTimeISO: (n = io()) => ur(St(ic(me(Zn(n)))))
  })
}), $O = /* @__PURE__ */ Object.defineProperties({}, {
  ...Nf("Temporal"),
  ..._i({
    PlainYearMonth: UO,
    PlainMonthDay: kO,
    PlainDate: jO,
    PlainTime: BO,
    PlainDateTime: qO,
    ZonedDateTime: WO,
    Instant: YO,
    Duration: OO,
    Now: zO
  })
}), GO = /* @__PURE__ */ wO(), eu = /* @__PURE__ */ new WeakMap();
Object.create(Intl), _i({
  DateTimeFormat: GO
});
function ZO(n) {
  const r = n < 0;
  n = Math.abs(n);
  const i = Math.floor(n / 3600).toFixed(0).padStart(2, "0"), a = Math.floor(n % 3600 / 60).toFixed(0).padStart(2, "0"), u = Math.floor(n % 3600 % 60).toFixed(0).padStart(2, "0");
  let c = "";
  return i !== "00" && (c += `${i}:`), c += `${a}:${u}`, r && (c = "-" + c), c;
}
class Mg extends G.Component {
  shouldComponentUpdate(r) {
    const i = Math.floor(this.props.seconds), a = Math.floor(r.seconds);
    return i !== a;
  }
  calculateDuration(r) {
    if (!isNaN(r))
      return new $O.Duration(0, 0, 0, 0, 0, 0, Math.round(r)).round({ smallestUnit: "seconds", largestUnit: "hours" }).toString();
  }
  render() {
    const { seconds: r, role: i } = this.props;
    return /* @__PURE__ */ G.createElement(
      "time",
      {
        dateTime: this.calculateDuration(r),
        "aria-live": this.props["aria-live"],
        role: i,
        className: at("mx_Clock", this.props.className)
      },
      ZO(r)
    );
  }
}
var co = { exports: {} };
var HO = co.exports, Pg;
function KO() {
  return Pg || (Pg = 1, (function(n, r) {
    (function() {
      var i, a = "4.17.21", u = 200, c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", f = "Expected a function", p = "Invalid `variable` option passed into `_.template`", h = "__lodash_hash_undefined__", g = 500, m = "__lodash_placeholder__", v = 1, w = 2, P = 4, E = 1, x = 2, B = 1, A = 2, R = 4, D = 8, S = 16, M = 32, L = 64, q = 128, $ = 256, H = 512, J = 30, ce = "...", we = 800, Le = 16, Fe = 1, Sn = 2, In = 3, Ve = 1 / 0, De = 9007199254740991, ze = 17976931348623157e292, tn = NaN, k = 4294967295, T = k - 1, N = k >>> 1, W = [
        ["ary", q],
        ["bind", B],
        ["bindKey", A],
        ["curry", D],
        ["curryRight", S],
        ["flip", H],
        ["partial", M],
        ["partialRight", L],
        ["rearg", $]
      ], X = "[object Arguments]", se = "[object Array]", ne = "[object AsyncFunction]", te = "[object Boolean]", Q = "[object Date]", ee = "[object DOMException]", ge = "[object Error]", _e = "[object Function]", Be = "[object GeneratorFunction]", Ae = "[object Map]", Je = "[object Number]", $e = "[object Null]", rn = "[object Object]", Zt = "[object Promise]", Y = "[object Proxy]", Tn = "[object RegExp]", Ue = "[object Set]", lt = "[object String]", It = "[object Symbol]", Gr = "[object Undefined]", ki = "[object WeakMap]", Fv = "[object WeakSet]", Ui = "[object ArrayBuffer]", Zr = "[object DataView]", Cu = "[object Float32Array]", Du = "[object Float64Array]", Nu = "[object Int8Array]", Lu = "[object Int16Array]", Fu = "[object Int32Array]", Bu = "[object Uint8Array]", qu = "[object Uint8ClampedArray]", ku = "[object Uint16Array]", Uu = "[object Uint32Array]", Bv = /\b__p \+= '';/g, qv = /\b(__p \+=) '' \+/g, kv = /(__e\(.*?\)|\b__t\)) \+\n'';/g, dp = /&(?:amp|lt|gt|quot|#39);/g, gp = /[&<>"']/g, Uv = RegExp(dp.source), jv = RegExp(gp.source), Wv = /<%-([\s\S]+?)%>/g, Yv = /<%([\s\S]+?)%>/g, yp = /<%=([\s\S]+?)%>/g, zv = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, $v = /^\w*$/, Gv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ju = /[\\^$.*+?()[\]{}|]/g, Zv = RegExp(ju.source), Wu = /^\s+/, Hv = /\s/, Kv = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Vv = /\{\n\/\* \[wrapped with (.+)\] \*/, Jv = /,? & /, Xv = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Qv = /[()=,{}\[\]\/\s]/, em = /\\(\\)?/g, nm = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, vp = /\w*$/, tm = /^[-+]0x[0-9a-f]+$/i, rm = /^0b[01]+$/i, im = /^\[object .+?Constructor\]$/, om = /^0o[0-7]+$/i, am = /^(?:0|[1-9]\d*)$/, um = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Wo = /($^)/, sm = /['\n\r\u2028\u2029\\]/g, Yo = "\\ud800-\\udfff", cm = "\\u0300-\\u036f", fm = "\\ufe20-\\ufe2f", lm = "\\u20d0-\\u20ff", mp = cm + fm + lm, _p = "\\u2700-\\u27bf", wp = "a-z\\xdf-\\xf6\\xf8-\\xff", pm = "\\xac\\xb1\\xd7\\xf7", hm = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", dm = "\\u2000-\\u206f", gm = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", bp = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ep = "\\ufe0e\\ufe0f", Ap = pm + hm + dm + gm, Yu = "['’]", ym = "[" + Yo + "]", Sp = "[" + Ap + "]", zo = "[" + mp + "]", Ip = "\\d+", vm = "[" + _p + "]", Tp = "[" + wp + "]", Rp = "[^" + Yo + Ap + Ip + _p + wp + bp + "]", zu = "\\ud83c[\\udffb-\\udfff]", mm = "(?:" + zo + "|" + zu + ")", Op = "[^" + Yo + "]", $u = "(?:\\ud83c[\\udde6-\\uddff]){2}", Gu = "[\\ud800-\\udbff][\\udc00-\\udfff]", Hr = "[" + bp + "]", xp = "\\u200d", Mp = "(?:" + Tp + "|" + Rp + ")", _m = "(?:" + Hr + "|" + Rp + ")", Pp = "(?:" + Yu + "(?:d|ll|m|re|s|t|ve))?", Cp = "(?:" + Yu + "(?:D|LL|M|RE|S|T|VE))?", Dp = mm + "?", Np = "[" + Ep + "]?", wm = "(?:" + xp + "(?:" + [Op, $u, Gu].join("|") + ")" + Np + Dp + ")*", bm = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Em = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Lp = Np + Dp + wm, Am = "(?:" + [vm, $u, Gu].join("|") + ")" + Lp, Sm = "(?:" + [Op + zo + "?", zo, $u, Gu, ym].join("|") + ")", Im = RegExp(Yu, "g"), Tm = RegExp(zo, "g"), Zu = RegExp(zu + "(?=" + zu + ")|" + Sm + Lp, "g"), Rm = RegExp([
        Hr + "?" + Tp + "+" + Pp + "(?=" + [Sp, Hr, "$"].join("|") + ")",
        _m + "+" + Cp + "(?=" + [Sp, Hr + Mp, "$"].join("|") + ")",
        Hr + "?" + Mp + "+" + Pp,
        Hr + "+" + Cp,
        Em,
        bm,
        Ip,
        Am
      ].join("|"), "g"), Om = RegExp("[" + xp + Yo + mp + Ep + "]"), xm = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Mm = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ], Pm = -1, Me = {};
      Me[Cu] = Me[Du] = Me[Nu] = Me[Lu] = Me[Fu] = Me[Bu] = Me[qu] = Me[ku] = Me[Uu] = !0, Me[X] = Me[se] = Me[Ui] = Me[te] = Me[Zr] = Me[Q] = Me[ge] = Me[_e] = Me[Ae] = Me[Je] = Me[rn] = Me[Tn] = Me[Ue] = Me[lt] = Me[ki] = !1;
      var Oe = {};
      Oe[X] = Oe[se] = Oe[Ui] = Oe[Zr] = Oe[te] = Oe[Q] = Oe[Cu] = Oe[Du] = Oe[Nu] = Oe[Lu] = Oe[Fu] = Oe[Ae] = Oe[Je] = Oe[rn] = Oe[Tn] = Oe[Ue] = Oe[lt] = Oe[It] = Oe[Bu] = Oe[qu] = Oe[ku] = Oe[Uu] = !0, Oe[ge] = Oe[_e] = Oe[ki] = !1;
      var Cm = {
        // Latin-1 Supplement block.
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        // Latin Extended-A block.
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s"
      }, Dm = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, Nm = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, Lm = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, Fm = parseFloat, Bm = parseInt, Fp = typeof vi == "object" && vi && vi.Object === Object && vi, qm = typeof self == "object" && self && self.Object === Object && self, Xe = Fp || qm || Function("return this")(), Hu = r && !r.nodeType && r, Tr = Hu && !0 && n && !n.nodeType && n, Bp = Tr && Tr.exports === Hu, Ku = Bp && Fp.process, kn = (function() {
        try {
          var I = Tr && Tr.require && Tr.require("util").types;
          return I || Ku && Ku.binding && Ku.binding("util");
        } catch {
        }
      })(), qp = kn && kn.isArrayBuffer, kp = kn && kn.isDate, Up = kn && kn.isMap, jp = kn && kn.isRegExp, Wp = kn && kn.isSet, Yp = kn && kn.isTypedArray;
      function Rn(I, F, C) {
        switch (C.length) {
          case 0:
            return I.call(F);
          case 1:
            return I.call(F, C[0]);
          case 2:
            return I.call(F, C[0], C[1]);
          case 3:
            return I.call(F, C[0], C[1], C[2]);
        }
        return I.apply(F, C);
      }
      function km(I, F, C, K) {
        for (var ae = -1, be = I == null ? 0 : I.length; ++ae < be; ) {
          var Ge = I[ae];
          F(K, Ge, C(Ge), I);
        }
        return K;
      }
      function Un(I, F) {
        for (var C = -1, K = I == null ? 0 : I.length; ++C < K && F(I[C], C, I) !== !1; )
          ;
        return I;
      }
      function Um(I, F) {
        for (var C = I == null ? 0 : I.length; C-- && F(I[C], C, I) !== !1; )
          ;
        return I;
      }
      function zp(I, F) {
        for (var C = -1, K = I == null ? 0 : I.length; ++C < K; )
          if (!F(I[C], C, I))
            return !1;
        return !0;
      }
      function Ht(I, F) {
        for (var C = -1, K = I == null ? 0 : I.length, ae = 0, be = []; ++C < K; ) {
          var Ge = I[C];
          F(Ge, C, I) && (be[ae++] = Ge);
        }
        return be;
      }
      function $o(I, F) {
        var C = I == null ? 0 : I.length;
        return !!C && Kr(I, F, 0) > -1;
      }
      function Vu(I, F, C) {
        for (var K = -1, ae = I == null ? 0 : I.length; ++K < ae; )
          if (C(F, I[K]))
            return !0;
        return !1;
      }
      function Ne(I, F) {
        for (var C = -1, K = I == null ? 0 : I.length, ae = Array(K); ++C < K; )
          ae[C] = F(I[C], C, I);
        return ae;
      }
      function Kt(I, F) {
        for (var C = -1, K = F.length, ae = I.length; ++C < K; )
          I[ae + C] = F[C];
        return I;
      }
      function Ju(I, F, C, K) {
        var ae = -1, be = I == null ? 0 : I.length;
        for (K && be && (C = I[++ae]); ++ae < be; )
          C = F(C, I[ae], ae, I);
        return C;
      }
      function jm(I, F, C, K) {
        var ae = I == null ? 0 : I.length;
        for (K && ae && (C = I[--ae]); ae--; )
          C = F(C, I[ae], ae, I);
        return C;
      }
      function Xu(I, F) {
        for (var C = -1, K = I == null ? 0 : I.length; ++C < K; )
          if (F(I[C], C, I))
            return !0;
        return !1;
      }
      var Wm = Qu("length");
      function Ym(I) {
        return I.split("");
      }
      function zm(I) {
        return I.match(Xv) || [];
      }
      function $p(I, F, C) {
        var K;
        return C(I, function(ae, be, Ge) {
          if (F(ae, be, Ge))
            return K = be, !1;
        }), K;
      }
      function Go(I, F, C, K) {
        for (var ae = I.length, be = C + (K ? 1 : -1); K ? be-- : ++be < ae; )
          if (F(I[be], be, I))
            return be;
        return -1;
      }
      function Kr(I, F, C) {
        return F === F ? t_(I, F, C) : Go(I, Gp, C);
      }
      function $m(I, F, C, K) {
        for (var ae = C - 1, be = I.length; ++ae < be; )
          if (K(I[ae], F))
            return ae;
        return -1;
      }
      function Gp(I) {
        return I !== I;
      }
      function Zp(I, F) {
        var C = I == null ? 0 : I.length;
        return C ? ns(I, F) / C : tn;
      }
      function Qu(I) {
        return function(F) {
          return F == null ? i : F[I];
        };
      }
      function es(I) {
        return function(F) {
          return I == null ? i : I[F];
        };
      }
      function Hp(I, F, C, K, ae) {
        return ae(I, function(be, Ge, Te) {
          C = K ? (K = !1, be) : F(C, be, Ge, Te);
        }), C;
      }
      function Gm(I, F) {
        var C = I.length;
        for (I.sort(F); C--; )
          I[C] = I[C].value;
        return I;
      }
      function ns(I, F) {
        for (var C, K = -1, ae = I.length; ++K < ae; ) {
          var be = F(I[K]);
          be !== i && (C = C === i ? be : C + be);
        }
        return C;
      }
      function ts(I, F) {
        for (var C = -1, K = Array(I); ++C < I; )
          K[C] = F(C);
        return K;
      }
      function Zm(I, F) {
        return Ne(F, function(C) {
          return [C, I[C]];
        });
      }
      function Kp(I) {
        return I && I.slice(0, Qp(I) + 1).replace(Wu, "");
      }
      function On(I) {
        return function(F) {
          return I(F);
        };
      }
      function rs(I, F) {
        return Ne(F, function(C) {
          return I[C];
        });
      }
      function ji(I, F) {
        return I.has(F);
      }
      function Vp(I, F) {
        for (var C = -1, K = I.length; ++C < K && Kr(F, I[C], 0) > -1; )
          ;
        return C;
      }
      function Jp(I, F) {
        for (var C = I.length; C-- && Kr(F, I[C], 0) > -1; )
          ;
        return C;
      }
      function Hm(I, F) {
        for (var C = I.length, K = 0; C--; )
          I[C] === F && ++K;
        return K;
      }
      var Km = es(Cm), Vm = es(Dm);
      function Jm(I) {
        return "\\" + Lm[I];
      }
      function Xm(I, F) {
        return I == null ? i : I[F];
      }
      function Vr(I) {
        return Om.test(I);
      }
      function Qm(I) {
        return xm.test(I);
      }
      function e_(I) {
        for (var F, C = []; !(F = I.next()).done; )
          C.push(F.value);
        return C;
      }
      function is(I) {
        var F = -1, C = Array(I.size);
        return I.forEach(function(K, ae) {
          C[++F] = [ae, K];
        }), C;
      }
      function Xp(I, F) {
        return function(C) {
          return I(F(C));
        };
      }
      function Vt(I, F) {
        for (var C = -1, K = I.length, ae = 0, be = []; ++C < K; ) {
          var Ge = I[C];
          (Ge === F || Ge === m) && (I[C] = m, be[ae++] = C);
        }
        return be;
      }
      function Zo(I) {
        var F = -1, C = Array(I.size);
        return I.forEach(function(K) {
          C[++F] = K;
        }), C;
      }
      function n_(I) {
        var F = -1, C = Array(I.size);
        return I.forEach(function(K) {
          C[++F] = [K, K];
        }), C;
      }
      function t_(I, F, C) {
        for (var K = C - 1, ae = I.length; ++K < ae; )
          if (I[K] === F)
            return K;
        return -1;
      }
      function r_(I, F, C) {
        for (var K = C + 1; K--; )
          if (I[K] === F)
            return K;
        return K;
      }
      function Jr(I) {
        return Vr(I) ? o_(I) : Wm(I);
      }
      function Qn(I) {
        return Vr(I) ? a_(I) : Ym(I);
      }
      function Qp(I) {
        for (var F = I.length; F-- && Hv.test(I.charAt(F)); )
          ;
        return F;
      }
      var i_ = es(Nm);
      function o_(I) {
        for (var F = Zu.lastIndex = 0; Zu.test(I); )
          ++F;
        return F;
      }
      function a_(I) {
        return I.match(Zu) || [];
      }
      function u_(I) {
        return I.match(Rm) || [];
      }
      var s_ = (function I(F) {
        F = F == null ? Xe : Xr.defaults(Xe.Object(), F, Xr.pick(Xe, Mm));
        var C = F.Array, K = F.Date, ae = F.Error, be = F.Function, Ge = F.Math, Te = F.Object, os = F.RegExp, c_ = F.String, jn = F.TypeError, Ho = C.prototype, f_ = be.prototype, Qr = Te.prototype, Ko = F["__core-js_shared__"], Vo = f_.toString, Se = Qr.hasOwnProperty, l_ = 0, eh = (function() {
          var e = /[^.]+$/.exec(Ko && Ko.keys && Ko.keys.IE_PROTO || "");
          return e ? "Symbol(src)_1." + e : "";
        })(), Jo = Qr.toString, p_ = Vo.call(Te), h_ = Xe._, d_ = os(
          "^" + Vo.call(Se).replace(ju, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), Xo = Bp ? F.Buffer : i, Jt = F.Symbol, Qo = F.Uint8Array, nh = Xo ? Xo.allocUnsafe : i, ea = Xp(Te.getPrototypeOf, Te), th = Te.create, rh = Qr.propertyIsEnumerable, na = Ho.splice, ih = Jt ? Jt.isConcatSpreadable : i, Wi = Jt ? Jt.iterator : i, Rr = Jt ? Jt.toStringTag : i, ta = (function() {
          try {
            var e = Cr(Te, "defineProperty");
            return e({}, "", {}), e;
          } catch {
          }
        })(), g_ = F.clearTimeout !== Xe.clearTimeout && F.clearTimeout, y_ = K && K.now !== Xe.Date.now && K.now, v_ = F.setTimeout !== Xe.setTimeout && F.setTimeout, ra = Ge.ceil, ia = Ge.floor, as = Te.getOwnPropertySymbols, m_ = Xo ? Xo.isBuffer : i, oh = F.isFinite, __ = Ho.join, w_ = Xp(Te.keys, Te), Ze = Ge.max, on = Ge.min, b_ = K.now, E_ = F.parseInt, ah = Ge.random, A_ = Ho.reverse, us = Cr(F, "DataView"), Yi = Cr(F, "Map"), ss = Cr(F, "Promise"), ei = Cr(F, "Set"), zi = Cr(F, "WeakMap"), $i = Cr(Te, "create"), oa = zi && new zi(), ni = {}, S_ = Dr(us), I_ = Dr(Yi), T_ = Dr(ss), R_ = Dr(ei), O_ = Dr(zi), aa = Jt ? Jt.prototype : i, Gi = aa ? aa.valueOf : i, uh = aa ? aa.toString : i;
        function d(e) {
          if (je(e) && !ue(e) && !(e instanceof ye)) {
            if (e instanceof Wn)
              return e;
            if (Se.call(e, "__wrapped__"))
              return sd(e);
          }
          return new Wn(e);
        }
        var ti = /* @__PURE__ */ (function() {
          function e() {
          }
          return function(t) {
            if (!qe(t))
              return {};
            if (th)
              return th(t);
            e.prototype = t;
            var o = new e();
            return e.prototype = i, o;
          };
        })();
        function ua() {
        }
        function Wn(e, t) {
          this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = i;
        }
        d.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: Wv,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: Yv,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: yp,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          variable: "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          imports: {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            _: d
          }
        }, d.prototype = ua.prototype, d.prototype.constructor = d, Wn.prototype = ti(ua.prototype), Wn.prototype.constructor = Wn;
        function ye(e) {
          this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = k, this.__views__ = [];
        }
        function x_() {
          var e = new ye(this.__wrapped__);
          return e.__actions__ = dn(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = dn(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = dn(this.__views__), e;
        }
        function M_() {
          if (this.__filtered__) {
            var e = new ye(this);
            e.__dir__ = -1, e.__filtered__ = !0;
          } else
            e = this.clone(), e.__dir__ *= -1;
          return e;
        }
        function P_() {
          var e = this.__wrapped__.value(), t = this.__dir__, o = ue(e), s = t < 0, l = o ? e.length : 0, y = Yw(0, l, this.__views__), _ = y.start, b = y.end, O = b - _, U = s ? b : _ - 1, j = this.__iteratees__, z = j.length, Z = 0, V = on(O, this.__takeCount__);
          if (!o || !s && l == O && V == O)
            return Ph(e, this.__actions__);
          var ie = [];
          e:
            for (; O-- && Z < V; ) {
              U += t;
              for (var le = -1, oe = e[U]; ++le < z; ) {
                var de = j[le], ve = de.iteratee, Pn = de.type, pn = ve(oe);
                if (Pn == Sn)
                  oe = pn;
                else if (!pn) {
                  if (Pn == Fe)
                    continue e;
                  break e;
                }
              }
              ie[Z++] = oe;
            }
          return ie;
        }
        ye.prototype = ti(ua.prototype), ye.prototype.constructor = ye;
        function Or(e) {
          var t = -1, o = e == null ? 0 : e.length;
          for (this.clear(); ++t < o; ) {
            var s = e[t];
            this.set(s[0], s[1]);
          }
        }
        function C_() {
          this.__data__ = $i ? $i(null) : {}, this.size = 0;
        }
        function D_(e) {
          var t = this.has(e) && delete this.__data__[e];
          return this.size -= t ? 1 : 0, t;
        }
        function N_(e) {
          var t = this.__data__;
          if ($i) {
            var o = t[e];
            return o === h ? i : o;
          }
          return Se.call(t, e) ? t[e] : i;
        }
        function L_(e) {
          var t = this.__data__;
          return $i ? t[e] !== i : Se.call(t, e);
        }
        function F_(e, t) {
          var o = this.__data__;
          return this.size += this.has(e) ? 0 : 1, o[e] = $i && t === i ? h : t, this;
        }
        Or.prototype.clear = C_, Or.prototype.delete = D_, Or.prototype.get = N_, Or.prototype.has = L_, Or.prototype.set = F_;
        function Tt(e) {
          var t = -1, o = e == null ? 0 : e.length;
          for (this.clear(); ++t < o; ) {
            var s = e[t];
            this.set(s[0], s[1]);
          }
        }
        function B_() {
          this.__data__ = [], this.size = 0;
        }
        function q_(e) {
          var t = this.__data__, o = sa(t, e);
          if (o < 0)
            return !1;
          var s = t.length - 1;
          return o == s ? t.pop() : na.call(t, o, 1), --this.size, !0;
        }
        function k_(e) {
          var t = this.__data__, o = sa(t, e);
          return o < 0 ? i : t[o][1];
        }
        function U_(e) {
          return sa(this.__data__, e) > -1;
        }
        function j_(e, t) {
          var o = this.__data__, s = sa(o, e);
          return s < 0 ? (++this.size, o.push([e, t])) : o[s][1] = t, this;
        }
        Tt.prototype.clear = B_, Tt.prototype.delete = q_, Tt.prototype.get = k_, Tt.prototype.has = U_, Tt.prototype.set = j_;
        function Rt(e) {
          var t = -1, o = e == null ? 0 : e.length;
          for (this.clear(); ++t < o; ) {
            var s = e[t];
            this.set(s[0], s[1]);
          }
        }
        function W_() {
          this.size = 0, this.__data__ = {
            hash: new Or(),
            map: new (Yi || Tt)(),
            string: new Or()
          };
        }
        function Y_(e) {
          var t = wa(this, e).delete(e);
          return this.size -= t ? 1 : 0, t;
        }
        function z_(e) {
          return wa(this, e).get(e);
        }
        function $_(e) {
          return wa(this, e).has(e);
        }
        function G_(e, t) {
          var o = wa(this, e), s = o.size;
          return o.set(e, t), this.size += o.size == s ? 0 : 1, this;
        }
        Rt.prototype.clear = W_, Rt.prototype.delete = Y_, Rt.prototype.get = z_, Rt.prototype.has = $_, Rt.prototype.set = G_;
        function xr(e) {
          var t = -1, o = e == null ? 0 : e.length;
          for (this.__data__ = new Rt(); ++t < o; )
            this.add(e[t]);
        }
        function Z_(e) {
          return this.__data__.set(e, h), this;
        }
        function H_(e) {
          return this.__data__.has(e);
        }
        xr.prototype.add = xr.prototype.push = Z_, xr.prototype.has = H_;
        function et(e) {
          var t = this.__data__ = new Tt(e);
          this.size = t.size;
        }
        function K_() {
          this.__data__ = new Tt(), this.size = 0;
        }
        function V_(e) {
          var t = this.__data__, o = t.delete(e);
          return this.size = t.size, o;
        }
        function J_(e) {
          return this.__data__.get(e);
        }
        function X_(e) {
          return this.__data__.has(e);
        }
        function Q_(e, t) {
          var o = this.__data__;
          if (o instanceof Tt) {
            var s = o.__data__;
            if (!Yi || s.length < u - 1)
              return s.push([e, t]), this.size = ++o.size, this;
            o = this.__data__ = new Rt(s);
          }
          return o.set(e, t), this.size = o.size, this;
        }
        et.prototype.clear = K_, et.prototype.delete = V_, et.prototype.get = J_, et.prototype.has = X_, et.prototype.set = Q_;
        function sh(e, t) {
          var o = ue(e), s = !o && Nr(e), l = !o && !s && tr(e), y = !o && !s && !l && ai(e), _ = o || s || l || y, b = _ ? ts(e.length, c_) : [], O = b.length;
          for (var U in e)
            (t || Se.call(e, U)) && !(_ && // Safari 9 has enumerable `arguments.length` in strict mode.
            (U == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            l && (U == "offset" || U == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            y && (U == "buffer" || U == "byteLength" || U == "byteOffset") || // Skip index properties.
            Pt(U, O))) && b.push(U);
          return b;
        }
        function ch(e) {
          var t = e.length;
          return t ? e[_s(0, t - 1)] : i;
        }
        function ew(e, t) {
          return ba(dn(e), Mr(t, 0, e.length));
        }
        function nw(e) {
          return ba(dn(e));
        }
        function cs(e, t, o) {
          (o !== i && !nt(e[t], o) || o === i && !(t in e)) && Ot(e, t, o);
        }
        function Zi(e, t, o) {
          var s = e[t];
          (!(Se.call(e, t) && nt(s, o)) || o === i && !(t in e)) && Ot(e, t, o);
        }
        function sa(e, t) {
          for (var o = e.length; o--; )
            if (nt(e[o][0], t))
              return o;
          return -1;
        }
        function tw(e, t, o, s) {
          return Xt(e, function(l, y, _) {
            t(s, l, o(l), _);
          }), s;
        }
        function fh(e, t) {
          return e && ht(t, Ke(t), e);
        }
        function rw(e, t) {
          return e && ht(t, yn(t), e);
        }
        function Ot(e, t, o) {
          t == "__proto__" && ta ? ta(e, t, {
            configurable: !0,
            enumerable: !0,
            value: o,
            writable: !0
          }) : e[t] = o;
        }
        function fs(e, t) {
          for (var o = -1, s = t.length, l = C(s), y = e == null; ++o < s; )
            l[o] = y ? i : zs(e, t[o]);
          return l;
        }
        function Mr(e, t, o) {
          return e === e && (o !== i && (e = e <= o ? e : o), t !== i && (e = e >= t ? e : t)), e;
        }
        function Yn(e, t, o, s, l, y) {
          var _, b = t & v, O = t & w, U = t & P;
          if (o && (_ = l ? o(e, s, l, y) : o(e)), _ !== i)
            return _;
          if (!qe(e))
            return e;
          var j = ue(e);
          if (j) {
            if (_ = $w(e), !b)
              return dn(e, _);
          } else {
            var z = an(e), Z = z == _e || z == Be;
            if (tr(e))
              return Nh(e, b);
            if (z == rn || z == X || Z && !l) {
              if (_ = O || Z ? {} : Qh(e), !b)
                return O ? Nw(e, rw(_, e)) : Dw(e, fh(_, e));
            } else {
              if (!Oe[z])
                return l ? e : {};
              _ = Gw(e, z, b);
            }
          }
          y || (y = new et());
          var V = y.get(e);
          if (V)
            return V;
          y.set(e, _), Od(e) ? e.forEach(function(oe) {
            _.add(Yn(oe, t, o, oe, e, y));
          }) : Td(e) && e.forEach(function(oe, de) {
            _.set(de, Yn(oe, t, o, de, e, y));
          });
          var ie = U ? O ? Ms : xs : O ? yn : Ke, le = j ? i : ie(e);
          return Un(le || e, function(oe, de) {
            le && (de = oe, oe = e[de]), Zi(_, de, Yn(oe, t, o, de, e, y));
          }), _;
        }
        function iw(e) {
          var t = Ke(e);
          return function(o) {
            return lh(o, e, t);
          };
        }
        function lh(e, t, o) {
          var s = o.length;
          if (e == null)
            return !s;
          for (e = Te(e); s--; ) {
            var l = o[s], y = t[l], _ = e[l];
            if (_ === i && !(l in e) || !y(_))
              return !1;
          }
          return !0;
        }
        function ph(e, t, o) {
          if (typeof e != "function")
            throw new jn(f);
          return eo(function() {
            e.apply(i, o);
          }, t);
        }
        function Hi(e, t, o, s) {
          var l = -1, y = $o, _ = !0, b = e.length, O = [], U = t.length;
          if (!b)
            return O;
          o && (t = Ne(t, On(o))), s ? (y = Vu, _ = !1) : t.length >= u && (y = ji, _ = !1, t = new xr(t));
          e:
            for (; ++l < b; ) {
              var j = e[l], z = o == null ? j : o(j);
              if (j = s || j !== 0 ? j : 0, _ && z === z) {
                for (var Z = U; Z--; )
                  if (t[Z] === z)
                    continue e;
                O.push(j);
              } else y(t, z, s) || O.push(j);
            }
          return O;
        }
        var Xt = kh(pt), hh = kh(ps, !0);
        function ow(e, t) {
          var o = !0;
          return Xt(e, function(s, l, y) {
            return o = !!t(s, l, y), o;
          }), o;
        }
        function ca(e, t, o) {
          for (var s = -1, l = e.length; ++s < l; ) {
            var y = e[s], _ = t(y);
            if (_ != null && (b === i ? _ === _ && !Mn(_) : o(_, b)))
              var b = _, O = y;
          }
          return O;
        }
        function aw(e, t, o, s) {
          var l = e.length;
          for (o = fe(o), o < 0 && (o = -o > l ? 0 : l + o), s = s === i || s > l ? l : fe(s), s < 0 && (s += l), s = o > s ? 0 : Md(s); o < s; )
            e[o++] = t;
          return e;
        }
        function dh(e, t) {
          var o = [];
          return Xt(e, function(s, l, y) {
            t(s, l, y) && o.push(s);
          }), o;
        }
        function Qe(e, t, o, s, l) {
          var y = -1, _ = e.length;
          for (o || (o = Hw), l || (l = []); ++y < _; ) {
            var b = e[y];
            t > 0 && o(b) ? t > 1 ? Qe(b, t - 1, o, s, l) : Kt(l, b) : s || (l[l.length] = b);
          }
          return l;
        }
        var ls = Uh(), gh = Uh(!0);
        function pt(e, t) {
          return e && ls(e, t, Ke);
        }
        function ps(e, t) {
          return e && gh(e, t, Ke);
        }
        function fa(e, t) {
          return Ht(t, function(o) {
            return Ct(e[o]);
          });
        }
        function Pr(e, t) {
          t = er(t, e);
          for (var o = 0, s = t.length; e != null && o < s; )
            e = e[dt(t[o++])];
          return o && o == s ? e : i;
        }
        function yh(e, t, o) {
          var s = t(e);
          return ue(e) ? s : Kt(s, o(e));
        }
        function fn(e) {
          return e == null ? e === i ? Gr : $e : Rr && Rr in Te(e) ? Ww(e) : nb(e);
        }
        function hs(e, t) {
          return e > t;
        }
        function uw(e, t) {
          return e != null && Se.call(e, t);
        }
        function sw(e, t) {
          return e != null && t in Te(e);
        }
        function cw(e, t, o) {
          return e >= on(t, o) && e < Ze(t, o);
        }
        function ds(e, t, o) {
          for (var s = o ? Vu : $o, l = e[0].length, y = e.length, _ = y, b = C(y), O = 1 / 0, U = []; _--; ) {
            var j = e[_];
            _ && t && (j = Ne(j, On(t))), O = on(j.length, O), b[_] = !o && (t || l >= 120 && j.length >= 120) ? new xr(_ && j) : i;
          }
          j = e[0];
          var z = -1, Z = b[0];
          e:
            for (; ++z < l && U.length < O; ) {
              var V = j[z], ie = t ? t(V) : V;
              if (V = o || V !== 0 ? V : 0, !(Z ? ji(Z, ie) : s(U, ie, o))) {
                for (_ = y; --_; ) {
                  var le = b[_];
                  if (!(le ? ji(le, ie) : s(e[_], ie, o)))
                    continue e;
                }
                Z && Z.push(ie), U.push(V);
              }
            }
          return U;
        }
        function fw(e, t, o, s) {
          return pt(e, function(l, y, _) {
            t(s, o(l), y, _);
          }), s;
        }
        function Ki(e, t, o) {
          t = er(t, e), e = rd(e, t);
          var s = e == null ? e : e[dt($n(t))];
          return s == null ? i : Rn(s, e, o);
        }
        function vh(e) {
          return je(e) && fn(e) == X;
        }
        function lw(e) {
          return je(e) && fn(e) == Ui;
        }
        function pw(e) {
          return je(e) && fn(e) == Q;
        }
        function Vi(e, t, o, s, l) {
          return e === t ? !0 : e == null || t == null || !je(e) && !je(t) ? e !== e && t !== t : hw(e, t, o, s, Vi, l);
        }
        function hw(e, t, o, s, l, y) {
          var _ = ue(e), b = ue(t), O = _ ? se : an(e), U = b ? se : an(t);
          O = O == X ? rn : O, U = U == X ? rn : U;
          var j = O == rn, z = U == rn, Z = O == U;
          if (Z && tr(e)) {
            if (!tr(t))
              return !1;
            _ = !0, j = !1;
          }
          if (Z && !j)
            return y || (y = new et()), _ || ai(e) ? Vh(e, t, o, s, l, y) : Uw(e, t, O, o, s, l, y);
          if (!(o & E)) {
            var V = j && Se.call(e, "__wrapped__"), ie = z && Se.call(t, "__wrapped__");
            if (V || ie) {
              var le = V ? e.value() : e, oe = ie ? t.value() : t;
              return y || (y = new et()), l(le, oe, o, s, y);
            }
          }
          return Z ? (y || (y = new et()), jw(e, t, o, s, l, y)) : !1;
        }
        function dw(e) {
          return je(e) && an(e) == Ae;
        }
        function gs(e, t, o, s) {
          var l = o.length, y = l, _ = !s;
          if (e == null)
            return !y;
          for (e = Te(e); l--; ) {
            var b = o[l];
            if (_ && b[2] ? b[1] !== e[b[0]] : !(b[0] in e))
              return !1;
          }
          for (; ++l < y; ) {
            b = o[l];
            var O = b[0], U = e[O], j = b[1];
            if (_ && b[2]) {
              if (U === i && !(O in e))
                return !1;
            } else {
              var z = new et();
              if (s)
                var Z = s(U, j, O, e, t, z);
              if (!(Z === i ? Vi(j, U, E | x, s, z) : Z))
                return !1;
            }
          }
          return !0;
        }
        function mh(e) {
          if (!qe(e) || Vw(e))
            return !1;
          var t = Ct(e) ? d_ : im;
          return t.test(Dr(e));
        }
        function gw(e) {
          return je(e) && fn(e) == Tn;
        }
        function yw(e) {
          return je(e) && an(e) == Ue;
        }
        function vw(e) {
          return je(e) && Ra(e.length) && !!Me[fn(e)];
        }
        function _h(e) {
          return typeof e == "function" ? e : e == null ? vn : typeof e == "object" ? ue(e) ? Eh(e[0], e[1]) : bh(e) : jd(e);
        }
        function ys(e) {
          if (!Qi(e))
            return w_(e);
          var t = [];
          for (var o in Te(e))
            Se.call(e, o) && o != "constructor" && t.push(o);
          return t;
        }
        function mw(e) {
          if (!qe(e))
            return eb(e);
          var t = Qi(e), o = [];
          for (var s in e)
            s == "constructor" && (t || !Se.call(e, s)) || o.push(s);
          return o;
        }
        function vs(e, t) {
          return e < t;
        }
        function wh(e, t) {
          var o = -1, s = gn(e) ? C(e.length) : [];
          return Xt(e, function(l, y, _) {
            s[++o] = t(l, y, _);
          }), s;
        }
        function bh(e) {
          var t = Cs(e);
          return t.length == 1 && t[0][2] ? nd(t[0][0], t[0][1]) : function(o) {
            return o === e || gs(o, e, t);
          };
        }
        function Eh(e, t) {
          return Ns(e) && ed(t) ? nd(dt(e), t) : function(o) {
            var s = zs(o, e);
            return s === i && s === t ? $s(o, e) : Vi(t, s, E | x);
          };
        }
        function la(e, t, o, s, l) {
          e !== t && ls(t, function(y, _) {
            if (l || (l = new et()), qe(y))
              _w(e, t, _, o, la, s, l);
            else {
              var b = s ? s(Fs(e, _), y, _ + "", e, t, l) : i;
              b === i && (b = y), cs(e, _, b);
            }
          }, yn);
        }
        function _w(e, t, o, s, l, y, _) {
          var b = Fs(e, o), O = Fs(t, o), U = _.get(O);
          if (U) {
            cs(e, o, U);
            return;
          }
          var j = y ? y(b, O, o + "", e, t, _) : i, z = j === i;
          if (z) {
            var Z = ue(O), V = !Z && tr(O), ie = !Z && !V && ai(O);
            j = O, Z || V || ie ? ue(b) ? j = b : We(b) ? j = dn(b) : V ? (z = !1, j = Nh(O, !0)) : ie ? (z = !1, j = Lh(O, !0)) : j = [] : no(O) || Nr(O) ? (j = b, Nr(b) ? j = Pd(b) : (!qe(b) || Ct(b)) && (j = Qh(O))) : z = !1;
          }
          z && (_.set(O, j), l(j, O, s, y, _), _.delete(O)), cs(e, o, j);
        }
        function Ah(e, t) {
          var o = e.length;
          if (o)
            return t += t < 0 ? o : 0, Pt(t, o) ? e[t] : i;
        }
        function Sh(e, t, o) {
          t.length ? t = Ne(t, function(y) {
            return ue(y) ? function(_) {
              return Pr(_, y.length === 1 ? y[0] : y);
            } : y;
          }) : t = [vn];
          var s = -1;
          t = Ne(t, On(re()));
          var l = wh(e, function(y, _, b) {
            var O = Ne(t, function(U) {
              return U(y);
            });
            return { criteria: O, index: ++s, value: y };
          });
          return Gm(l, function(y, _) {
            return Cw(y, _, o);
          });
        }
        function ww(e, t) {
          return Ih(e, t, function(o, s) {
            return $s(e, s);
          });
        }
        function Ih(e, t, o) {
          for (var s = -1, l = t.length, y = {}; ++s < l; ) {
            var _ = t[s], b = Pr(e, _);
            o(b, _) && Ji(y, er(_, e), b);
          }
          return y;
        }
        function bw(e) {
          return function(t) {
            return Pr(t, e);
          };
        }
        function ms(e, t, o, s) {
          var l = s ? $m : Kr, y = -1, _ = t.length, b = e;
          for (e === t && (t = dn(t)), o && (b = Ne(e, On(o))); ++y < _; )
            for (var O = 0, U = t[y], j = o ? o(U) : U; (O = l(b, j, O, s)) > -1; )
              b !== e && na.call(b, O, 1), na.call(e, O, 1);
          return e;
        }
        function Th(e, t) {
          for (var o = e ? t.length : 0, s = o - 1; o--; ) {
            var l = t[o];
            if (o == s || l !== y) {
              var y = l;
              Pt(l) ? na.call(e, l, 1) : Es(e, l);
            }
          }
          return e;
        }
        function _s(e, t) {
          return e + ia(ah() * (t - e + 1));
        }
        function Ew(e, t, o, s) {
          for (var l = -1, y = Ze(ra((t - e) / (o || 1)), 0), _ = C(y); y--; )
            _[s ? y : ++l] = e, e += o;
          return _;
        }
        function ws(e, t) {
          var o = "";
          if (!e || t < 1 || t > De)
            return o;
          do
            t % 2 && (o += e), t = ia(t / 2), t && (e += e);
          while (t);
          return o;
        }
        function pe(e, t) {
          return Bs(td(e, t, vn), e + "");
        }
        function Aw(e) {
          return ch(ui(e));
        }
        function Sw(e, t) {
          var o = ui(e);
          return ba(o, Mr(t, 0, o.length));
        }
        function Ji(e, t, o, s) {
          if (!qe(e))
            return e;
          t = er(t, e);
          for (var l = -1, y = t.length, _ = y - 1, b = e; b != null && ++l < y; ) {
            var O = dt(t[l]), U = o;
            if (O === "__proto__" || O === "constructor" || O === "prototype")
              return e;
            if (l != _) {
              var j = b[O];
              U = s ? s(j, O, b) : i, U === i && (U = qe(j) ? j : Pt(t[l + 1]) ? [] : {});
            }
            Zi(b, O, U), b = b[O];
          }
          return e;
        }
        var Rh = oa ? function(e, t) {
          return oa.set(e, t), e;
        } : vn, Iw = ta ? function(e, t) {
          return ta(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Zs(t),
            writable: !0
          });
        } : vn;
        function Tw(e) {
          return ba(ui(e));
        }
        function zn(e, t, o) {
          var s = -1, l = e.length;
          t < 0 && (t = -t > l ? 0 : l + t), o = o > l ? l : o, o < 0 && (o += l), l = t > o ? 0 : o - t >>> 0, t >>>= 0;
          for (var y = C(l); ++s < l; )
            y[s] = e[s + t];
          return y;
        }
        function Rw(e, t) {
          var o;
          return Xt(e, function(s, l, y) {
            return o = t(s, l, y), !o;
          }), !!o;
        }
        function pa(e, t, o) {
          var s = 0, l = e == null ? s : e.length;
          if (typeof t == "number" && t === t && l <= N) {
            for (; s < l; ) {
              var y = s + l >>> 1, _ = e[y];
              _ !== null && !Mn(_) && (o ? _ <= t : _ < t) ? s = y + 1 : l = y;
            }
            return l;
          }
          return bs(e, t, vn, o);
        }
        function bs(e, t, o, s) {
          var l = 0, y = e == null ? 0 : e.length;
          if (y === 0)
            return 0;
          t = o(t);
          for (var _ = t !== t, b = t === null, O = Mn(t), U = t === i; l < y; ) {
            var j = ia((l + y) / 2), z = o(e[j]), Z = z !== i, V = z === null, ie = z === z, le = Mn(z);
            if (_)
              var oe = s || ie;
            else U ? oe = ie && (s || Z) : b ? oe = ie && Z && (s || !V) : O ? oe = ie && Z && !V && (s || !le) : V || le ? oe = !1 : oe = s ? z <= t : z < t;
            oe ? l = j + 1 : y = j;
          }
          return on(y, T);
        }
        function Oh(e, t) {
          for (var o = -1, s = e.length, l = 0, y = []; ++o < s; ) {
            var _ = e[o], b = t ? t(_) : _;
            if (!o || !nt(b, O)) {
              var O = b;
              y[l++] = _ === 0 ? 0 : _;
            }
          }
          return y;
        }
        function xh(e) {
          return typeof e == "number" ? e : Mn(e) ? tn : +e;
        }
        function xn(e) {
          if (typeof e == "string")
            return e;
          if (ue(e))
            return Ne(e, xn) + "";
          if (Mn(e))
            return uh ? uh.call(e) : "";
          var t = e + "";
          return t == "0" && 1 / e == -Ve ? "-0" : t;
        }
        function Qt(e, t, o) {
          var s = -1, l = $o, y = e.length, _ = !0, b = [], O = b;
          if (o)
            _ = !1, l = Vu;
          else if (y >= u) {
            var U = t ? null : qw(e);
            if (U)
              return Zo(U);
            _ = !1, l = ji, O = new xr();
          } else
            O = t ? [] : b;
          e:
            for (; ++s < y; ) {
              var j = e[s], z = t ? t(j) : j;
              if (j = o || j !== 0 ? j : 0, _ && z === z) {
                for (var Z = O.length; Z--; )
                  if (O[Z] === z)
                    continue e;
                t && O.push(z), b.push(j);
              } else l(O, z, o) || (O !== b && O.push(z), b.push(j));
            }
          return b;
        }
        function Es(e, t) {
          return t = er(t, e), e = rd(e, t), e == null || delete e[dt($n(t))];
        }
        function Mh(e, t, o, s) {
          return Ji(e, t, o(Pr(e, t)), s);
        }
        function ha(e, t, o, s) {
          for (var l = e.length, y = s ? l : -1; (s ? y-- : ++y < l) && t(e[y], y, e); )
            ;
          return o ? zn(e, s ? 0 : y, s ? y + 1 : l) : zn(e, s ? y + 1 : 0, s ? l : y);
        }
        function Ph(e, t) {
          var o = e;
          return o instanceof ye && (o = o.value()), Ju(t, function(s, l) {
            return l.func.apply(l.thisArg, Kt([s], l.args));
          }, o);
        }
        function As(e, t, o) {
          var s = e.length;
          if (s < 2)
            return s ? Qt(e[0]) : [];
          for (var l = -1, y = C(s); ++l < s; )
            for (var _ = e[l], b = -1; ++b < s; )
              b != l && (y[l] = Hi(y[l] || _, e[b], t, o));
          return Qt(Qe(y, 1), t, o);
        }
        function Ch(e, t, o) {
          for (var s = -1, l = e.length, y = t.length, _ = {}; ++s < l; ) {
            var b = s < y ? t[s] : i;
            o(_, e[s], b);
          }
          return _;
        }
        function Ss(e) {
          return We(e) ? e : [];
        }
        function Is(e) {
          return typeof e == "function" ? e : vn;
        }
        function er(e, t) {
          return ue(e) ? e : Ns(e, t) ? [e] : ud(Ee(e));
        }
        var Ow = pe;
        function nr(e, t, o) {
          var s = e.length;
          return o = o === i ? s : o, !t && o >= s ? e : zn(e, t, o);
        }
        var Dh = g_ || function(e) {
          return Xe.clearTimeout(e);
        };
        function Nh(e, t) {
          if (t)
            return e.slice();
          var o = e.length, s = nh ? nh(o) : new e.constructor(o);
          return e.copy(s), s;
        }
        function Ts(e) {
          var t = new e.constructor(e.byteLength);
          return new Qo(t).set(new Qo(e)), t;
        }
        function xw(e, t) {
          var o = t ? Ts(e.buffer) : e.buffer;
          return new e.constructor(o, e.byteOffset, e.byteLength);
        }
        function Mw(e) {
          var t = new e.constructor(e.source, vp.exec(e));
          return t.lastIndex = e.lastIndex, t;
        }
        function Pw(e) {
          return Gi ? Te(Gi.call(e)) : {};
        }
        function Lh(e, t) {
          var o = t ? Ts(e.buffer) : e.buffer;
          return new e.constructor(o, e.byteOffset, e.length);
        }
        function Fh(e, t) {
          if (e !== t) {
            var o = e !== i, s = e === null, l = e === e, y = Mn(e), _ = t !== i, b = t === null, O = t === t, U = Mn(t);
            if (!b && !U && !y && e > t || y && _ && O && !b && !U || s && _ && O || !o && O || !l)
              return 1;
            if (!s && !y && !U && e < t || U && o && l && !s && !y || b && o && l || !_ && l || !O)
              return -1;
          }
          return 0;
        }
        function Cw(e, t, o) {
          for (var s = -1, l = e.criteria, y = t.criteria, _ = l.length, b = o.length; ++s < _; ) {
            var O = Fh(l[s], y[s]);
            if (O) {
              if (s >= b)
                return O;
              var U = o[s];
              return O * (U == "desc" ? -1 : 1);
            }
          }
          return e.index - t.index;
        }
        function Bh(e, t, o, s) {
          for (var l = -1, y = e.length, _ = o.length, b = -1, O = t.length, U = Ze(y - _, 0), j = C(O + U), z = !s; ++b < O; )
            j[b] = t[b];
          for (; ++l < _; )
            (z || l < y) && (j[o[l]] = e[l]);
          for (; U--; )
            j[b++] = e[l++];
          return j;
        }
        function qh(e, t, o, s) {
          for (var l = -1, y = e.length, _ = -1, b = o.length, O = -1, U = t.length, j = Ze(y - b, 0), z = C(j + U), Z = !s; ++l < j; )
            z[l] = e[l];
          for (var V = l; ++O < U; )
            z[V + O] = t[O];
          for (; ++_ < b; )
            (Z || l < y) && (z[V + o[_]] = e[l++]);
          return z;
        }
        function dn(e, t) {
          var o = -1, s = e.length;
          for (t || (t = C(s)); ++o < s; )
            t[o] = e[o];
          return t;
        }
        function ht(e, t, o, s) {
          var l = !o;
          o || (o = {});
          for (var y = -1, _ = t.length; ++y < _; ) {
            var b = t[y], O = s ? s(o[b], e[b], b, o, e) : i;
            O === i && (O = e[b]), l ? Ot(o, b, O) : Zi(o, b, O);
          }
          return o;
        }
        function Dw(e, t) {
          return ht(e, Ds(e), t);
        }
        function Nw(e, t) {
          return ht(e, Jh(e), t);
        }
        function da(e, t) {
          return function(o, s) {
            var l = ue(o) ? km : tw, y = t ? t() : {};
            return l(o, e, re(s, 2), y);
          };
        }
        function ri(e) {
          return pe(function(t, o) {
            var s = -1, l = o.length, y = l > 1 ? o[l - 1] : i, _ = l > 2 ? o[2] : i;
            for (y = e.length > 3 && typeof y == "function" ? (l--, y) : i, _ && ln(o[0], o[1], _) && (y = l < 3 ? i : y, l = 1), t = Te(t); ++s < l; ) {
              var b = o[s];
              b && e(t, b, s, y);
            }
            return t;
          });
        }
        function kh(e, t) {
          return function(o, s) {
            if (o == null)
              return o;
            if (!gn(o))
              return e(o, s);
            for (var l = o.length, y = t ? l : -1, _ = Te(o); (t ? y-- : ++y < l) && s(_[y], y, _) !== !1; )
              ;
            return o;
          };
        }
        function Uh(e) {
          return function(t, o, s) {
            for (var l = -1, y = Te(t), _ = s(t), b = _.length; b--; ) {
              var O = _[e ? b : ++l];
              if (o(y[O], O, y) === !1)
                break;
            }
            return t;
          };
        }
        function Lw(e, t, o) {
          var s = t & B, l = Xi(e);
          function y() {
            var _ = this && this !== Xe && this instanceof y ? l : e;
            return _.apply(s ? o : this, arguments);
          }
          return y;
        }
        function jh(e) {
          return function(t) {
            t = Ee(t);
            var o = Vr(t) ? Qn(t) : i, s = o ? o[0] : t.charAt(0), l = o ? nr(o, 1).join("") : t.slice(1);
            return s[e]() + l;
          };
        }
        function ii(e) {
          return function(t) {
            return Ju(kd(qd(t).replace(Im, "")), e, "");
          };
        }
        function Xi(e) {
          return function() {
            var t = arguments;
            switch (t.length) {
              case 0:
                return new e();
              case 1:
                return new e(t[0]);
              case 2:
                return new e(t[0], t[1]);
              case 3:
                return new e(t[0], t[1], t[2]);
              case 4:
                return new e(t[0], t[1], t[2], t[3]);
              case 5:
                return new e(t[0], t[1], t[2], t[3], t[4]);
              case 6:
                return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
              case 7:
                return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
            }
            var o = ti(e.prototype), s = e.apply(o, t);
            return qe(s) ? s : o;
          };
        }
        function Fw(e, t, o) {
          var s = Xi(e);
          function l() {
            for (var y = arguments.length, _ = C(y), b = y, O = oi(l); b--; )
              _[b] = arguments[b];
            var U = y < 3 && _[0] !== O && _[y - 1] !== O ? [] : Vt(_, O);
            if (y -= U.length, y < o)
              return Gh(
                e,
                t,
                ga,
                l.placeholder,
                i,
                _,
                U,
                i,
                i,
                o - y
              );
            var j = this && this !== Xe && this instanceof l ? s : e;
            return Rn(j, this, _);
          }
          return l;
        }
        function Wh(e) {
          return function(t, o, s) {
            var l = Te(t);
            if (!gn(t)) {
              var y = re(o, 3);
              t = Ke(t), o = function(b) {
                return y(l[b], b, l);
              };
            }
            var _ = e(t, o, s);
            return _ > -1 ? l[y ? t[_] : _] : i;
          };
        }
        function Yh(e) {
          return Mt(function(t) {
            var o = t.length, s = o, l = Wn.prototype.thru;
            for (e && t.reverse(); s--; ) {
              var y = t[s];
              if (typeof y != "function")
                throw new jn(f);
              if (l && !_ && _a(y) == "wrapper")
                var _ = new Wn([], !0);
            }
            for (s = _ ? s : o; ++s < o; ) {
              y = t[s];
              var b = _a(y), O = b == "wrapper" ? Ps(y) : i;
              O && Ls(O[0]) && O[1] == (q | D | M | $) && !O[4].length && O[9] == 1 ? _ = _[_a(O[0])].apply(_, O[3]) : _ = y.length == 1 && Ls(y) ? _[b]() : _.thru(y);
            }
            return function() {
              var U = arguments, j = U[0];
              if (_ && U.length == 1 && ue(j))
                return _.plant(j).value();
              for (var z = 0, Z = o ? t[z].apply(this, U) : j; ++z < o; )
                Z = t[z].call(this, Z);
              return Z;
            };
          });
        }
        function ga(e, t, o, s, l, y, _, b, O, U) {
          var j = t & q, z = t & B, Z = t & A, V = t & (D | S), ie = t & H, le = Z ? i : Xi(e);
          function oe() {
            for (var de = arguments.length, ve = C(de), Pn = de; Pn--; )
              ve[Pn] = arguments[Pn];
            if (V)
              var pn = oi(oe), Cn = Hm(ve, pn);
            if (s && (ve = Bh(ve, s, l, V)), y && (ve = qh(ve, y, _, V)), de -= Cn, V && de < U) {
              var Ye = Vt(ve, pn);
              return Gh(
                e,
                t,
                ga,
                oe.placeholder,
                o,
                ve,
                Ye,
                b,
                O,
                U - de
              );
            }
            var tt = z ? o : this, Nt = Z ? tt[e] : e;
            return de = ve.length, b ? ve = tb(ve, b) : ie && de > 1 && ve.reverse(), j && O < de && (ve.length = O), this && this !== Xe && this instanceof oe && (Nt = le || Xi(Nt)), Nt.apply(tt, ve);
          }
          return oe;
        }
        function zh(e, t) {
          return function(o, s) {
            return fw(o, e, t(s), {});
          };
        }
        function ya(e, t) {
          return function(o, s) {
            var l;
            if (o === i && s === i)
              return t;
            if (o !== i && (l = o), s !== i) {
              if (l === i)
                return s;
              typeof o == "string" || typeof s == "string" ? (o = xn(o), s = xn(s)) : (o = xh(o), s = xh(s)), l = e(o, s);
            }
            return l;
          };
        }
        function Rs(e) {
          return Mt(function(t) {
            return t = Ne(t, On(re())), pe(function(o) {
              var s = this;
              return e(t, function(l) {
                return Rn(l, s, o);
              });
            });
          });
        }
        function va(e, t) {
          t = t === i ? " " : xn(t);
          var o = t.length;
          if (o < 2)
            return o ? ws(t, e) : t;
          var s = ws(t, ra(e / Jr(t)));
          return Vr(t) ? nr(Qn(s), 0, e).join("") : s.slice(0, e);
        }
        function Bw(e, t, o, s) {
          var l = t & B, y = Xi(e);
          function _() {
            for (var b = -1, O = arguments.length, U = -1, j = s.length, z = C(j + O), Z = this && this !== Xe && this instanceof _ ? y : e; ++U < j; )
              z[U] = s[U];
            for (; O--; )
              z[U++] = arguments[++b];
            return Rn(Z, l ? o : this, z);
          }
          return _;
        }
        function $h(e) {
          return function(t, o, s) {
            return s && typeof s != "number" && ln(t, o, s) && (o = s = i), t = Dt(t), o === i ? (o = t, t = 0) : o = Dt(o), s = s === i ? t < o ? 1 : -1 : Dt(s), Ew(t, o, s, e);
          };
        }
        function ma(e) {
          return function(t, o) {
            return typeof t == "string" && typeof o == "string" || (t = Gn(t), o = Gn(o)), e(t, o);
          };
        }
        function Gh(e, t, o, s, l, y, _, b, O, U) {
          var j = t & D, z = j ? _ : i, Z = j ? i : _, V = j ? y : i, ie = j ? i : y;
          t |= j ? M : L, t &= ~(j ? L : M), t & R || (t &= -4);
          var le = [
            e,
            t,
            l,
            V,
            z,
            ie,
            Z,
            b,
            O,
            U
          ], oe = o.apply(i, le);
          return Ls(e) && id(oe, le), oe.placeholder = s, od(oe, e, t);
        }
        function Os(e) {
          var t = Ge[e];
          return function(o, s) {
            if (o = Gn(o), s = s == null ? 0 : on(fe(s), 292), s && oh(o)) {
              var l = (Ee(o) + "e").split("e"), y = t(l[0] + "e" + (+l[1] + s));
              return l = (Ee(y) + "e").split("e"), +(l[0] + "e" + (+l[1] - s));
            }
            return t(o);
          };
        }
        var qw = ei && 1 / Zo(new ei([, -0]))[1] == Ve ? function(e) {
          return new ei(e);
        } : Vs;
        function Zh(e) {
          return function(t) {
            var o = an(t);
            return o == Ae ? is(t) : o == Ue ? n_(t) : Zm(t, e(t));
          };
        }
        function xt(e, t, o, s, l, y, _, b) {
          var O = t & A;
          if (!O && typeof e != "function")
            throw new jn(f);
          var U = s ? s.length : 0;
          if (U || (t &= -97, s = l = i), _ = _ === i ? _ : Ze(fe(_), 0), b = b === i ? b : fe(b), U -= l ? l.length : 0, t & L) {
            var j = s, z = l;
            s = l = i;
          }
          var Z = O ? i : Ps(e), V = [
            e,
            t,
            o,
            s,
            l,
            j,
            z,
            y,
            _,
            b
          ];
          if (Z && Qw(V, Z), e = V[0], t = V[1], o = V[2], s = V[3], l = V[4], b = V[9] = V[9] === i ? O ? 0 : e.length : Ze(V[9] - U, 0), !b && t & (D | S) && (t &= -25), !t || t == B)
            var ie = Lw(e, t, o);
          else t == D || t == S ? ie = Fw(e, t, b) : (t == M || t == (B | M)) && !l.length ? ie = Bw(e, t, o, s) : ie = ga.apply(i, V);
          var le = Z ? Rh : id;
          return od(le(ie, V), e, t);
        }
        function Hh(e, t, o, s) {
          return e === i || nt(e, Qr[o]) && !Se.call(s, o) ? t : e;
        }
        function Kh(e, t, o, s, l, y) {
          return qe(e) && qe(t) && (y.set(t, e), la(e, t, i, Kh, y), y.delete(t)), e;
        }
        function kw(e) {
          return no(e) ? i : e;
        }
        function Vh(e, t, o, s, l, y) {
          var _ = o & E, b = e.length, O = t.length;
          if (b != O && !(_ && O > b))
            return !1;
          var U = y.get(e), j = y.get(t);
          if (U && j)
            return U == t && j == e;
          var z = -1, Z = !0, V = o & x ? new xr() : i;
          for (y.set(e, t), y.set(t, e); ++z < b; ) {
            var ie = e[z], le = t[z];
            if (s)
              var oe = _ ? s(le, ie, z, t, e, y) : s(ie, le, z, e, t, y);
            if (oe !== i) {
              if (oe)
                continue;
              Z = !1;
              break;
            }
            if (V) {
              if (!Xu(t, function(de, ve) {
                if (!ji(V, ve) && (ie === de || l(ie, de, o, s, y)))
                  return V.push(ve);
              })) {
                Z = !1;
                break;
              }
            } else if (!(ie === le || l(ie, le, o, s, y))) {
              Z = !1;
              break;
            }
          }
          return y.delete(e), y.delete(t), Z;
        }
        function Uw(e, t, o, s, l, y, _) {
          switch (o) {
            case Zr:
              if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                return !1;
              e = e.buffer, t = t.buffer;
            case Ui:
              return !(e.byteLength != t.byteLength || !y(new Qo(e), new Qo(t)));
            case te:
            case Q:
            case Je:
              return nt(+e, +t);
            case ge:
              return e.name == t.name && e.message == t.message;
            case Tn:
            case lt:
              return e == t + "";
            case Ae:
              var b = is;
            case Ue:
              var O = s & E;
              if (b || (b = Zo), e.size != t.size && !O)
                return !1;
              var U = _.get(e);
              if (U)
                return U == t;
              s |= x, _.set(e, t);
              var j = Vh(b(e), b(t), s, l, y, _);
              return _.delete(e), j;
            case It:
              if (Gi)
                return Gi.call(e) == Gi.call(t);
          }
          return !1;
        }
        function jw(e, t, o, s, l, y) {
          var _ = o & E, b = xs(e), O = b.length, U = xs(t), j = U.length;
          if (O != j && !_)
            return !1;
          for (var z = O; z--; ) {
            var Z = b[z];
            if (!(_ ? Z in t : Se.call(t, Z)))
              return !1;
          }
          var V = y.get(e), ie = y.get(t);
          if (V && ie)
            return V == t && ie == e;
          var le = !0;
          y.set(e, t), y.set(t, e);
          for (var oe = _; ++z < O; ) {
            Z = b[z];
            var de = e[Z], ve = t[Z];
            if (s)
              var Pn = _ ? s(ve, de, Z, t, e, y) : s(de, ve, Z, e, t, y);
            if (!(Pn === i ? de === ve || l(de, ve, o, s, y) : Pn)) {
              le = !1;
              break;
            }
            oe || (oe = Z == "constructor");
          }
          if (le && !oe) {
            var pn = e.constructor, Cn = t.constructor;
            pn != Cn && "constructor" in e && "constructor" in t && !(typeof pn == "function" && pn instanceof pn && typeof Cn == "function" && Cn instanceof Cn) && (le = !1);
          }
          return y.delete(e), y.delete(t), le;
        }
        function Mt(e) {
          return Bs(td(e, i, ld), e + "");
        }
        function xs(e) {
          return yh(e, Ke, Ds);
        }
        function Ms(e) {
          return yh(e, yn, Jh);
        }
        var Ps = oa ? function(e) {
          return oa.get(e);
        } : Vs;
        function _a(e) {
          for (var t = e.name + "", o = ni[t], s = Se.call(ni, t) ? o.length : 0; s--; ) {
            var l = o[s], y = l.func;
            if (y == null || y == e)
              return l.name;
          }
          return t;
        }
        function oi(e) {
          var t = Se.call(d, "placeholder") ? d : e;
          return t.placeholder;
        }
        function re() {
          var e = d.iteratee || Hs;
          return e = e === Hs ? _h : e, arguments.length ? e(arguments[0], arguments[1]) : e;
        }
        function wa(e, t) {
          var o = e.__data__;
          return Kw(t) ? o[typeof t == "string" ? "string" : "hash"] : o.map;
        }
        function Cs(e) {
          for (var t = Ke(e), o = t.length; o--; ) {
            var s = t[o], l = e[s];
            t[o] = [s, l, ed(l)];
          }
          return t;
        }
        function Cr(e, t) {
          var o = Xm(e, t);
          return mh(o) ? o : i;
        }
        function Ww(e) {
          var t = Se.call(e, Rr), o = e[Rr];
          try {
            e[Rr] = i;
            var s = !0;
          } catch {
          }
          var l = Jo.call(e);
          return s && (t ? e[Rr] = o : delete e[Rr]), l;
        }
        var Ds = as ? function(e) {
          return e == null ? [] : (e = Te(e), Ht(as(e), function(t) {
            return rh.call(e, t);
          }));
        } : Js, Jh = as ? function(e) {
          for (var t = []; e; )
            Kt(t, Ds(e)), e = ea(e);
          return t;
        } : Js, an = fn;
        (us && an(new us(new ArrayBuffer(1))) != Zr || Yi && an(new Yi()) != Ae || ss && an(ss.resolve()) != Zt || ei && an(new ei()) != Ue || zi && an(new zi()) != ki) && (an = function(e) {
          var t = fn(e), o = t == rn ? e.constructor : i, s = o ? Dr(o) : "";
          if (s)
            switch (s) {
              case S_:
                return Zr;
              case I_:
                return Ae;
              case T_:
                return Zt;
              case R_:
                return Ue;
              case O_:
                return ki;
            }
          return t;
        });
        function Yw(e, t, o) {
          for (var s = -1, l = o.length; ++s < l; ) {
            var y = o[s], _ = y.size;
            switch (y.type) {
              case "drop":
                e += _;
                break;
              case "dropRight":
                t -= _;
                break;
              case "take":
                t = on(t, e + _);
                break;
              case "takeRight":
                e = Ze(e, t - _);
                break;
            }
          }
          return { start: e, end: t };
        }
        function zw(e) {
          var t = e.match(Vv);
          return t ? t[1].split(Jv) : [];
        }
        function Xh(e, t, o) {
          t = er(t, e);
          for (var s = -1, l = t.length, y = !1; ++s < l; ) {
            var _ = dt(t[s]);
            if (!(y = e != null && o(e, _)))
              break;
            e = e[_];
          }
          return y || ++s != l ? y : (l = e == null ? 0 : e.length, !!l && Ra(l) && Pt(_, l) && (ue(e) || Nr(e)));
        }
        function $w(e) {
          var t = e.length, o = new e.constructor(t);
          return t && typeof e[0] == "string" && Se.call(e, "index") && (o.index = e.index, o.input = e.input), o;
        }
        function Qh(e) {
          return typeof e.constructor == "function" && !Qi(e) ? ti(ea(e)) : {};
        }
        function Gw(e, t, o) {
          var s = e.constructor;
          switch (t) {
            case Ui:
              return Ts(e);
            case te:
            case Q:
              return new s(+e);
            case Zr:
              return xw(e, o);
            case Cu:
            case Du:
            case Nu:
            case Lu:
            case Fu:
            case Bu:
            case qu:
            case ku:
            case Uu:
              return Lh(e, o);
            case Ae:
              return new s();
            case Je:
            case lt:
              return new s(e);
            case Tn:
              return Mw(e);
            case Ue:
              return new s();
            case It:
              return Pw(e);
          }
        }
        function Zw(e, t) {
          var o = t.length;
          if (!o)
            return e;
          var s = o - 1;
          return t[s] = (o > 1 ? "& " : "") + t[s], t = t.join(o > 2 ? ", " : " "), e.replace(Kv, `{
/* [wrapped with ` + t + `] */
`);
        }
        function Hw(e) {
          return ue(e) || Nr(e) || !!(ih && e && e[ih]);
        }
        function Pt(e, t) {
          var o = typeof e;
          return t = t ?? De, !!t && (o == "number" || o != "symbol" && am.test(e)) && e > -1 && e % 1 == 0 && e < t;
        }
        function ln(e, t, o) {
          if (!qe(o))
            return !1;
          var s = typeof t;
          return (s == "number" ? gn(o) && Pt(t, o.length) : s == "string" && t in o) ? nt(o[t], e) : !1;
        }
        function Ns(e, t) {
          if (ue(e))
            return !1;
          var o = typeof e;
          return o == "number" || o == "symbol" || o == "boolean" || e == null || Mn(e) ? !0 : $v.test(e) || !zv.test(e) || t != null && e in Te(t);
        }
        function Kw(e) {
          var t = typeof e;
          return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
        }
        function Ls(e) {
          var t = _a(e), o = d[t];
          if (typeof o != "function" || !(t in ye.prototype))
            return !1;
          if (e === o)
            return !0;
          var s = Ps(o);
          return !!s && e === s[0];
        }
        function Vw(e) {
          return !!eh && eh in e;
        }
        var Jw = Ko ? Ct : Xs;
        function Qi(e) {
          var t = e && e.constructor, o = typeof t == "function" && t.prototype || Qr;
          return e === o;
        }
        function ed(e) {
          return e === e && !qe(e);
        }
        function nd(e, t) {
          return function(o) {
            return o == null ? !1 : o[e] === t && (t !== i || e in Te(o));
          };
        }
        function Xw(e) {
          var t = Ia(e, function(s) {
            return o.size === g && o.clear(), s;
          }), o = t.cache;
          return t;
        }
        function Qw(e, t) {
          var o = e[1], s = t[1], l = o | s, y = l < (B | A | q), _ = s == q && o == D || s == q && o == $ && e[7].length <= t[8] || s == (q | $) && t[7].length <= t[8] && o == D;
          if (!(y || _))
            return e;
          s & B && (e[2] = t[2], l |= o & B ? 0 : R);
          var b = t[3];
          if (b) {
            var O = e[3];
            e[3] = O ? Bh(O, b, t[4]) : b, e[4] = O ? Vt(e[3], m) : t[4];
          }
          return b = t[5], b && (O = e[5], e[5] = O ? qh(O, b, t[6]) : b, e[6] = O ? Vt(e[5], m) : t[6]), b = t[7], b && (e[7] = b), s & q && (e[8] = e[8] == null ? t[8] : on(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = l, e;
        }
        function eb(e) {
          var t = [];
          if (e != null)
            for (var o in Te(e))
              t.push(o);
          return t;
        }
        function nb(e) {
          return Jo.call(e);
        }
        function td(e, t, o) {
          return t = Ze(t === i ? e.length - 1 : t, 0), function() {
            for (var s = arguments, l = -1, y = Ze(s.length - t, 0), _ = C(y); ++l < y; )
              _[l] = s[t + l];
            l = -1;
            for (var b = C(t + 1); ++l < t; )
              b[l] = s[l];
            return b[t] = o(_), Rn(e, this, b);
          };
        }
        function rd(e, t) {
          return t.length < 2 ? e : Pr(e, zn(t, 0, -1));
        }
        function tb(e, t) {
          for (var o = e.length, s = on(t.length, o), l = dn(e); s--; ) {
            var y = t[s];
            e[s] = Pt(y, o) ? l[y] : i;
          }
          return e;
        }
        function Fs(e, t) {
          if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
            return e[t];
        }
        var id = ad(Rh), eo = v_ || function(e, t) {
          return Xe.setTimeout(e, t);
        }, Bs = ad(Iw);
        function od(e, t, o) {
          var s = t + "";
          return Bs(e, Zw(s, rb(zw(s), o)));
        }
        function ad(e) {
          var t = 0, o = 0;
          return function() {
            var s = b_(), l = Le - (s - o);
            if (o = s, l > 0) {
              if (++t >= we)
                return arguments[0];
            } else
              t = 0;
            return e.apply(i, arguments);
          };
        }
        function ba(e, t) {
          var o = -1, s = e.length, l = s - 1;
          for (t = t === i ? s : t; ++o < t; ) {
            var y = _s(o, l), _ = e[y];
            e[y] = e[o], e[o] = _;
          }
          return e.length = t, e;
        }
        var ud = Xw(function(e) {
          var t = [];
          return e.charCodeAt(0) === 46 && t.push(""), e.replace(Gv, function(o, s, l, y) {
            t.push(l ? y.replace(em, "$1") : s || o);
          }), t;
        });
        function dt(e) {
          if (typeof e == "string" || Mn(e))
            return e;
          var t = e + "";
          return t == "0" && 1 / e == -Ve ? "-0" : t;
        }
        function Dr(e) {
          if (e != null) {
            try {
              return Vo.call(e);
            } catch {
            }
            try {
              return e + "";
            } catch {
            }
          }
          return "";
        }
        function rb(e, t) {
          return Un(W, function(o) {
            var s = "_." + o[0];
            t & o[1] && !$o(e, s) && e.push(s);
          }), e.sort();
        }
        function sd(e) {
          if (e instanceof ye)
            return e.clone();
          var t = new Wn(e.__wrapped__, e.__chain__);
          return t.__actions__ = dn(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
        }
        function ib(e, t, o) {
          (o ? ln(e, t, o) : t === i) ? t = 1 : t = Ze(fe(t), 0);
          var s = e == null ? 0 : e.length;
          if (!s || t < 1)
            return [];
          for (var l = 0, y = 0, _ = C(ra(s / t)); l < s; )
            _[y++] = zn(e, l, l += t);
          return _;
        }
        function ob(e) {
          for (var t = -1, o = e == null ? 0 : e.length, s = 0, l = []; ++t < o; ) {
            var y = e[t];
            y && (l[s++] = y);
          }
          return l;
        }
        function ab() {
          var e = arguments.length;
          if (!e)
            return [];
          for (var t = C(e - 1), o = arguments[0], s = e; s--; )
            t[s - 1] = arguments[s];
          return Kt(ue(o) ? dn(o) : [o], Qe(t, 1));
        }
        var ub = pe(function(e, t) {
          return We(e) ? Hi(e, Qe(t, 1, We, !0)) : [];
        }), sb = pe(function(e, t) {
          var o = $n(t);
          return We(o) && (o = i), We(e) ? Hi(e, Qe(t, 1, We, !0), re(o, 2)) : [];
        }), cb = pe(function(e, t) {
          var o = $n(t);
          return We(o) && (o = i), We(e) ? Hi(e, Qe(t, 1, We, !0), i, o) : [];
        });
        function fb(e, t, o) {
          var s = e == null ? 0 : e.length;
          return s ? (t = o || t === i ? 1 : fe(t), zn(e, t < 0 ? 0 : t, s)) : [];
        }
        function lb(e, t, o) {
          var s = e == null ? 0 : e.length;
          return s ? (t = o || t === i ? 1 : fe(t), t = s - t, zn(e, 0, t < 0 ? 0 : t)) : [];
        }
        function pb(e, t) {
          return e && e.length ? ha(e, re(t, 3), !0, !0) : [];
        }
        function hb(e, t) {
          return e && e.length ? ha(e, re(t, 3), !0) : [];
        }
        function db(e, t, o, s) {
          var l = e == null ? 0 : e.length;
          return l ? (o && typeof o != "number" && ln(e, t, o) && (o = 0, s = l), aw(e, t, o, s)) : [];
        }
        function cd(e, t, o) {
          var s = e == null ? 0 : e.length;
          if (!s)
            return -1;
          var l = o == null ? 0 : fe(o);
          return l < 0 && (l = Ze(s + l, 0)), Go(e, re(t, 3), l);
        }
        function fd(e, t, o) {
          var s = e == null ? 0 : e.length;
          if (!s)
            return -1;
          var l = s - 1;
          return o !== i && (l = fe(o), l = o < 0 ? Ze(s + l, 0) : on(l, s - 1)), Go(e, re(t, 3), l, !0);
        }
        function ld(e) {
          var t = e == null ? 0 : e.length;
          return t ? Qe(e, 1) : [];
        }
        function gb(e) {
          var t = e == null ? 0 : e.length;
          return t ? Qe(e, Ve) : [];
        }
        function yb(e, t) {
          var o = e == null ? 0 : e.length;
          return o ? (t = t === i ? 1 : fe(t), Qe(e, t)) : [];
        }
        function vb(e) {
          for (var t = -1, o = e == null ? 0 : e.length, s = {}; ++t < o; ) {
            var l = e[t];
            s[l[0]] = l[1];
          }
          return s;
        }
        function pd(e) {
          return e && e.length ? e[0] : i;
        }
        function mb(e, t, o) {
          var s = e == null ? 0 : e.length;
          if (!s)
            return -1;
          var l = o == null ? 0 : fe(o);
          return l < 0 && (l = Ze(s + l, 0)), Kr(e, t, l);
        }
        function _b(e) {
          var t = e == null ? 0 : e.length;
          return t ? zn(e, 0, -1) : [];
        }
        var wb = pe(function(e) {
          var t = Ne(e, Ss);
          return t.length && t[0] === e[0] ? ds(t) : [];
        }), bb = pe(function(e) {
          var t = $n(e), o = Ne(e, Ss);
          return t === $n(o) ? t = i : o.pop(), o.length && o[0] === e[0] ? ds(o, re(t, 2)) : [];
        }), Eb = pe(function(e) {
          var t = $n(e), o = Ne(e, Ss);
          return t = typeof t == "function" ? t : i, t && o.pop(), o.length && o[0] === e[0] ? ds(o, i, t) : [];
        });
        function Ab(e, t) {
          return e == null ? "" : __.call(e, t);
        }
        function $n(e) {
          var t = e == null ? 0 : e.length;
          return t ? e[t - 1] : i;
        }
        function Sb(e, t, o) {
          var s = e == null ? 0 : e.length;
          if (!s)
            return -1;
          var l = s;
          return o !== i && (l = fe(o), l = l < 0 ? Ze(s + l, 0) : on(l, s - 1)), t === t ? r_(e, t, l) : Go(e, Gp, l, !0);
        }
        function Ib(e, t) {
          return e && e.length ? Ah(e, fe(t)) : i;
        }
        var Tb = pe(hd);
        function hd(e, t) {
          return e && e.length && t && t.length ? ms(e, t) : e;
        }
        function Rb(e, t, o) {
          return e && e.length && t && t.length ? ms(e, t, re(o, 2)) : e;
        }
        function Ob(e, t, o) {
          return e && e.length && t && t.length ? ms(e, t, i, o) : e;
        }
        var xb = Mt(function(e, t) {
          var o = e == null ? 0 : e.length, s = fs(e, t);
          return Th(e, Ne(t, function(l) {
            return Pt(l, o) ? +l : l;
          }).sort(Fh)), s;
        });
        function Mb(e, t) {
          var o = [];
          if (!(e && e.length))
            return o;
          var s = -1, l = [], y = e.length;
          for (t = re(t, 3); ++s < y; ) {
            var _ = e[s];
            t(_, s, e) && (o.push(_), l.push(s));
          }
          return Th(e, l), o;
        }
        function qs(e) {
          return e == null ? e : A_.call(e);
        }
        function Pb(e, t, o) {
          var s = e == null ? 0 : e.length;
          return s ? (o && typeof o != "number" && ln(e, t, o) ? (t = 0, o = s) : (t = t == null ? 0 : fe(t), o = o === i ? s : fe(o)), zn(e, t, o)) : [];
        }
        function Cb(e, t) {
          return pa(e, t);
        }
        function Db(e, t, o) {
          return bs(e, t, re(o, 2));
        }
        function Nb(e, t) {
          var o = e == null ? 0 : e.length;
          if (o) {
            var s = pa(e, t);
            if (s < o && nt(e[s], t))
              return s;
          }
          return -1;
        }
        function Lb(e, t) {
          return pa(e, t, !0);
        }
        function Fb(e, t, o) {
          return bs(e, t, re(o, 2), !0);
        }
        function Bb(e, t) {
          var o = e == null ? 0 : e.length;
          if (o) {
            var s = pa(e, t, !0) - 1;
            if (nt(e[s], t))
              return s;
          }
          return -1;
        }
        function qb(e) {
          return e && e.length ? Oh(e) : [];
        }
        function kb(e, t) {
          return e && e.length ? Oh(e, re(t, 2)) : [];
        }
        function Ub(e) {
          var t = e == null ? 0 : e.length;
          return t ? zn(e, 1, t) : [];
        }
        function jb(e, t, o) {
          return e && e.length ? (t = o || t === i ? 1 : fe(t), zn(e, 0, t < 0 ? 0 : t)) : [];
        }
        function Wb(e, t, o) {
          var s = e == null ? 0 : e.length;
          return s ? (t = o || t === i ? 1 : fe(t), t = s - t, zn(e, t < 0 ? 0 : t, s)) : [];
        }
        function Yb(e, t) {
          return e && e.length ? ha(e, re(t, 3), !1, !0) : [];
        }
        function zb(e, t) {
          return e && e.length ? ha(e, re(t, 3)) : [];
        }
        var $b = pe(function(e) {
          return Qt(Qe(e, 1, We, !0));
        }), Gb = pe(function(e) {
          var t = $n(e);
          return We(t) && (t = i), Qt(Qe(e, 1, We, !0), re(t, 2));
        }), Zb = pe(function(e) {
          var t = $n(e);
          return t = typeof t == "function" ? t : i, Qt(Qe(e, 1, We, !0), i, t);
        });
        function Hb(e) {
          return e && e.length ? Qt(e) : [];
        }
        function Kb(e, t) {
          return e && e.length ? Qt(e, re(t, 2)) : [];
        }
        function Vb(e, t) {
          return t = typeof t == "function" ? t : i, e && e.length ? Qt(e, i, t) : [];
        }
        function ks(e) {
          if (!(e && e.length))
            return [];
          var t = 0;
          return e = Ht(e, function(o) {
            if (We(o))
              return t = Ze(o.length, t), !0;
          }), ts(t, function(o) {
            return Ne(e, Qu(o));
          });
        }
        function dd(e, t) {
          if (!(e && e.length))
            return [];
          var o = ks(e);
          return t == null ? o : Ne(o, function(s) {
            return Rn(t, i, s);
          });
        }
        var Jb = pe(function(e, t) {
          return We(e) ? Hi(e, t) : [];
        }), Xb = pe(function(e) {
          return As(Ht(e, We));
        }), Qb = pe(function(e) {
          var t = $n(e);
          return We(t) && (t = i), As(Ht(e, We), re(t, 2));
        }), eE = pe(function(e) {
          var t = $n(e);
          return t = typeof t == "function" ? t : i, As(Ht(e, We), i, t);
        }), nE = pe(ks);
        function tE(e, t) {
          return Ch(e || [], t || [], Zi);
        }
        function rE(e, t) {
          return Ch(e || [], t || [], Ji);
        }
        var iE = pe(function(e) {
          var t = e.length, o = t > 1 ? e[t - 1] : i;
          return o = typeof o == "function" ? (e.pop(), o) : i, dd(e, o);
        });
        function gd(e) {
          var t = d(e);
          return t.__chain__ = !0, t;
        }
        function oE(e, t) {
          return t(e), e;
        }
        function Ea(e, t) {
          return t(e);
        }
        var aE = Mt(function(e) {
          var t = e.length, o = t ? e[0] : 0, s = this.__wrapped__, l = function(y) {
            return fs(y, e);
          };
          return t > 1 || this.__actions__.length || !(s instanceof ye) || !Pt(o) ? this.thru(l) : (s = s.slice(o, +o + (t ? 1 : 0)), s.__actions__.push({
            func: Ea,
            args: [l],
            thisArg: i
          }), new Wn(s, this.__chain__).thru(function(y) {
            return t && !y.length && y.push(i), y;
          }));
        });
        function uE() {
          return gd(this);
        }
        function sE() {
          return new Wn(this.value(), this.__chain__);
        }
        function cE() {
          this.__values__ === i && (this.__values__ = xd(this.value()));
          var e = this.__index__ >= this.__values__.length, t = e ? i : this.__values__[this.__index__++];
          return { done: e, value: t };
        }
        function fE() {
          return this;
        }
        function lE(e) {
          for (var t, o = this; o instanceof ua; ) {
            var s = sd(o);
            s.__index__ = 0, s.__values__ = i, t ? l.__wrapped__ = s : t = s;
            var l = s;
            o = o.__wrapped__;
          }
          return l.__wrapped__ = e, t;
        }
        function pE() {
          var e = this.__wrapped__;
          if (e instanceof ye) {
            var t = e;
            return this.__actions__.length && (t = new ye(this)), t = t.reverse(), t.__actions__.push({
              func: Ea,
              args: [qs],
              thisArg: i
            }), new Wn(t, this.__chain__);
          }
          return this.thru(qs);
        }
        function hE() {
          return Ph(this.__wrapped__, this.__actions__);
        }
        var dE = da(function(e, t, o) {
          Se.call(e, o) ? ++e[o] : Ot(e, o, 1);
        });
        function gE(e, t, o) {
          var s = ue(e) ? zp : ow;
          return o && ln(e, t, o) && (t = i), s(e, re(t, 3));
        }
        function yE(e, t) {
          var o = ue(e) ? Ht : dh;
          return o(e, re(t, 3));
        }
        var vE = Wh(cd), mE = Wh(fd);
        function _E(e, t) {
          return Qe(Aa(e, t), 1);
        }
        function wE(e, t) {
          return Qe(Aa(e, t), Ve);
        }
        function bE(e, t, o) {
          return o = o === i ? 1 : fe(o), Qe(Aa(e, t), o);
        }
        function yd(e, t) {
          var o = ue(e) ? Un : Xt;
          return o(e, re(t, 3));
        }
        function vd(e, t) {
          var o = ue(e) ? Um : hh;
          return o(e, re(t, 3));
        }
        var EE = da(function(e, t, o) {
          Se.call(e, o) ? e[o].push(t) : Ot(e, o, [t]);
        });
        function AE(e, t, o, s) {
          e = gn(e) ? e : ui(e), o = o && !s ? fe(o) : 0;
          var l = e.length;
          return o < 0 && (o = Ze(l + o, 0)), Oa(e) ? o <= l && e.indexOf(t, o) > -1 : !!l && Kr(e, t, o) > -1;
        }
        var SE = pe(function(e, t, o) {
          var s = -1, l = typeof t == "function", y = gn(e) ? C(e.length) : [];
          return Xt(e, function(_) {
            y[++s] = l ? Rn(t, _, o) : Ki(_, t, o);
          }), y;
        }), IE = da(function(e, t, o) {
          Ot(e, o, t);
        });
        function Aa(e, t) {
          var o = ue(e) ? Ne : wh;
          return o(e, re(t, 3));
        }
        function TE(e, t, o, s) {
          return e == null ? [] : (ue(t) || (t = t == null ? [] : [t]), o = s ? i : o, ue(o) || (o = o == null ? [] : [o]), Sh(e, t, o));
        }
        var RE = da(function(e, t, o) {
          e[o ? 0 : 1].push(t);
        }, function() {
          return [[], []];
        });
        function OE(e, t, o) {
          var s = ue(e) ? Ju : Hp, l = arguments.length < 3;
          return s(e, re(t, 4), o, l, Xt);
        }
        function xE(e, t, o) {
          var s = ue(e) ? jm : Hp, l = arguments.length < 3;
          return s(e, re(t, 4), o, l, hh);
        }
        function ME(e, t) {
          var o = ue(e) ? Ht : dh;
          return o(e, Ta(re(t, 3)));
        }
        function PE(e) {
          var t = ue(e) ? ch : Aw;
          return t(e);
        }
        function CE(e, t, o) {
          (o ? ln(e, t, o) : t === i) ? t = 1 : t = fe(t);
          var s = ue(e) ? ew : Sw;
          return s(e, t);
        }
        function DE(e) {
          var t = ue(e) ? nw : Tw;
          return t(e);
        }
        function NE(e) {
          if (e == null)
            return 0;
          if (gn(e))
            return Oa(e) ? Jr(e) : e.length;
          var t = an(e);
          return t == Ae || t == Ue ? e.size : ys(e).length;
        }
        function LE(e, t, o) {
          var s = ue(e) ? Xu : Rw;
          return o && ln(e, t, o) && (t = i), s(e, re(t, 3));
        }
        var FE = pe(function(e, t) {
          if (e == null)
            return [];
          var o = t.length;
          return o > 1 && ln(e, t[0], t[1]) ? t = [] : o > 2 && ln(t[0], t[1], t[2]) && (t = [t[0]]), Sh(e, Qe(t, 1), []);
        }), Sa = y_ || function() {
          return Xe.Date.now();
        };
        function BE(e, t) {
          if (typeof t != "function")
            throw new jn(f);
          return e = fe(e), function() {
            if (--e < 1)
              return t.apply(this, arguments);
          };
        }
        function md(e, t, o) {
          return t = o ? i : t, t = e && t == null ? e.length : t, xt(e, q, i, i, i, i, t);
        }
        function _d(e, t) {
          var o;
          if (typeof t != "function")
            throw new jn(f);
          return e = fe(e), function() {
            return --e > 0 && (o = t.apply(this, arguments)), e <= 1 && (t = i), o;
          };
        }
        var Us = pe(function(e, t, o) {
          var s = B;
          if (o.length) {
            var l = Vt(o, oi(Us));
            s |= M;
          }
          return xt(e, s, t, o, l);
        }), wd = pe(function(e, t, o) {
          var s = B | A;
          if (o.length) {
            var l = Vt(o, oi(wd));
            s |= M;
          }
          return xt(t, s, e, o, l);
        });
        function bd(e, t, o) {
          t = o ? i : t;
          var s = xt(e, D, i, i, i, i, i, t);
          return s.placeholder = bd.placeholder, s;
        }
        function Ed(e, t, o) {
          t = o ? i : t;
          var s = xt(e, S, i, i, i, i, i, t);
          return s.placeholder = Ed.placeholder, s;
        }
        function Ad(e, t, o) {
          var s, l, y, _, b, O, U = 0, j = !1, z = !1, Z = !0;
          if (typeof e != "function")
            throw new jn(f);
          t = Gn(t) || 0, qe(o) && (j = !!o.leading, z = "maxWait" in o, y = z ? Ze(Gn(o.maxWait) || 0, t) : y, Z = "trailing" in o ? !!o.trailing : Z);
          function V(Ye) {
            var tt = s, Nt = l;
            return s = l = i, U = Ye, _ = e.apply(Nt, tt), _;
          }
          function ie(Ye) {
            return U = Ye, b = eo(de, t), j ? V(Ye) : _;
          }
          function le(Ye) {
            var tt = Ye - O, Nt = Ye - U, Wd = t - tt;
            return z ? on(Wd, y - Nt) : Wd;
          }
          function oe(Ye) {
            var tt = Ye - O, Nt = Ye - U;
            return O === i || tt >= t || tt < 0 || z && Nt >= y;
          }
          function de() {
            var Ye = Sa();
            if (oe(Ye))
              return ve(Ye);
            b = eo(de, le(Ye));
          }
          function ve(Ye) {
            return b = i, Z && s ? V(Ye) : (s = l = i, _);
          }
          function Pn() {
            b !== i && Dh(b), U = 0, s = O = l = b = i;
          }
          function pn() {
            return b === i ? _ : ve(Sa());
          }
          function Cn() {
            var Ye = Sa(), tt = oe(Ye);
            if (s = arguments, l = this, O = Ye, tt) {
              if (b === i)
                return ie(O);
              if (z)
                return Dh(b), b = eo(de, t), V(O);
            }
            return b === i && (b = eo(de, t)), _;
          }
          return Cn.cancel = Pn, Cn.flush = pn, Cn;
        }
        var qE = pe(function(e, t) {
          return ph(e, 1, t);
        }), kE = pe(function(e, t, o) {
          return ph(e, Gn(t) || 0, o);
        });
        function UE(e) {
          return xt(e, H);
        }
        function Ia(e, t) {
          if (typeof e != "function" || t != null && typeof t != "function")
            throw new jn(f);
          var o = function() {
            var s = arguments, l = t ? t.apply(this, s) : s[0], y = o.cache;
            if (y.has(l))
              return y.get(l);
            var _ = e.apply(this, s);
            return o.cache = y.set(l, _) || y, _;
          };
          return o.cache = new (Ia.Cache || Rt)(), o;
        }
        Ia.Cache = Rt;
        function Ta(e) {
          if (typeof e != "function")
            throw new jn(f);
          return function() {
            var t = arguments;
            switch (t.length) {
              case 0:
                return !e.call(this);
              case 1:
                return !e.call(this, t[0]);
              case 2:
                return !e.call(this, t[0], t[1]);
              case 3:
                return !e.call(this, t[0], t[1], t[2]);
            }
            return !e.apply(this, t);
          };
        }
        function jE(e) {
          return _d(2, e);
        }
        var WE = Ow(function(e, t) {
          t = t.length == 1 && ue(t[0]) ? Ne(t[0], On(re())) : Ne(Qe(t, 1), On(re()));
          var o = t.length;
          return pe(function(s) {
            for (var l = -1, y = on(s.length, o); ++l < y; )
              s[l] = t[l].call(this, s[l]);
            return Rn(e, this, s);
          });
        }), js = pe(function(e, t) {
          var o = Vt(t, oi(js));
          return xt(e, M, i, t, o);
        }), Sd = pe(function(e, t) {
          var o = Vt(t, oi(Sd));
          return xt(e, L, i, t, o);
        }), YE = Mt(function(e, t) {
          return xt(e, $, i, i, i, t);
        });
        function zE(e, t) {
          if (typeof e != "function")
            throw new jn(f);
          return t = t === i ? t : fe(t), pe(e, t);
        }
        function $E(e, t) {
          if (typeof e != "function")
            throw new jn(f);
          return t = t == null ? 0 : Ze(fe(t), 0), pe(function(o) {
            var s = o[t], l = nr(o, 0, t);
            return s && Kt(l, s), Rn(e, this, l);
          });
        }
        function GE(e, t, o) {
          var s = !0, l = !0;
          if (typeof e != "function")
            throw new jn(f);
          return qe(o) && (s = "leading" in o ? !!o.leading : s, l = "trailing" in o ? !!o.trailing : l), Ad(e, t, {
            leading: s,
            maxWait: t,
            trailing: l
          });
        }
        function ZE(e) {
          return md(e, 1);
        }
        function HE(e, t) {
          return js(Is(t), e);
        }
        function KE() {
          if (!arguments.length)
            return [];
          var e = arguments[0];
          return ue(e) ? e : [e];
        }
        function VE(e) {
          return Yn(e, P);
        }
        function JE(e, t) {
          return t = typeof t == "function" ? t : i, Yn(e, P, t);
        }
        function XE(e) {
          return Yn(e, v | P);
        }
        function QE(e, t) {
          return t = typeof t == "function" ? t : i, Yn(e, v | P, t);
        }
        function e2(e, t) {
          return t == null || lh(e, t, Ke(t));
        }
        function nt(e, t) {
          return e === t || e !== e && t !== t;
        }
        var n2 = ma(hs), t2 = ma(function(e, t) {
          return e >= t;
        }), Nr = vh(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? vh : function(e) {
          return je(e) && Se.call(e, "callee") && !rh.call(e, "callee");
        }, ue = C.isArray, r2 = qp ? On(qp) : lw;
        function gn(e) {
          return e != null && Ra(e.length) && !Ct(e);
        }
        function We(e) {
          return je(e) && gn(e);
        }
        function i2(e) {
          return e === !0 || e === !1 || je(e) && fn(e) == te;
        }
        var tr = m_ || Xs, o2 = kp ? On(kp) : pw;
        function a2(e) {
          return je(e) && e.nodeType === 1 && !no(e);
        }
        function u2(e) {
          if (e == null)
            return !0;
          if (gn(e) && (ue(e) || typeof e == "string" || typeof e.splice == "function" || tr(e) || ai(e) || Nr(e)))
            return !e.length;
          var t = an(e);
          if (t == Ae || t == Ue)
            return !e.size;
          if (Qi(e))
            return !ys(e).length;
          for (var o in e)
            if (Se.call(e, o))
              return !1;
          return !0;
        }
        function s2(e, t) {
          return Vi(e, t);
        }
        function c2(e, t, o) {
          o = typeof o == "function" ? o : i;
          var s = o ? o(e, t) : i;
          return s === i ? Vi(e, t, i, o) : !!s;
        }
        function Ws(e) {
          if (!je(e))
            return !1;
          var t = fn(e);
          return t == ge || t == ee || typeof e.message == "string" && typeof e.name == "string" && !no(e);
        }
        function f2(e) {
          return typeof e == "number" && oh(e);
        }
        function Ct(e) {
          if (!qe(e))
            return !1;
          var t = fn(e);
          return t == _e || t == Be || t == ne || t == Y;
        }
        function Id(e) {
          return typeof e == "number" && e == fe(e);
        }
        function Ra(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= De;
        }
        function qe(e) {
          var t = typeof e;
          return e != null && (t == "object" || t == "function");
        }
        function je(e) {
          return e != null && typeof e == "object";
        }
        var Td = Up ? On(Up) : dw;
        function l2(e, t) {
          return e === t || gs(e, t, Cs(t));
        }
        function p2(e, t, o) {
          return o = typeof o == "function" ? o : i, gs(e, t, Cs(t), o);
        }
        function h2(e) {
          return Rd(e) && e != +e;
        }
        function d2(e) {
          if (Jw(e))
            throw new ae(c);
          return mh(e);
        }
        function g2(e) {
          return e === null;
        }
        function y2(e) {
          return e == null;
        }
        function Rd(e) {
          return typeof e == "number" || je(e) && fn(e) == Je;
        }
        function no(e) {
          if (!je(e) || fn(e) != rn)
            return !1;
          var t = ea(e);
          if (t === null)
            return !0;
          var o = Se.call(t, "constructor") && t.constructor;
          return typeof o == "function" && o instanceof o && Vo.call(o) == p_;
        }
        var Ys = jp ? On(jp) : gw;
        function v2(e) {
          return Id(e) && e >= -De && e <= De;
        }
        var Od = Wp ? On(Wp) : yw;
        function Oa(e) {
          return typeof e == "string" || !ue(e) && je(e) && fn(e) == lt;
        }
        function Mn(e) {
          return typeof e == "symbol" || je(e) && fn(e) == It;
        }
        var ai = Yp ? On(Yp) : vw;
        function m2(e) {
          return e === i;
        }
        function _2(e) {
          return je(e) && an(e) == ki;
        }
        function w2(e) {
          return je(e) && fn(e) == Fv;
        }
        var b2 = ma(vs), E2 = ma(function(e, t) {
          return e <= t;
        });
        function xd(e) {
          if (!e)
            return [];
          if (gn(e))
            return Oa(e) ? Qn(e) : dn(e);
          if (Wi && e[Wi])
            return e_(e[Wi]());
          var t = an(e), o = t == Ae ? is : t == Ue ? Zo : ui;
          return o(e);
        }
        function Dt(e) {
          if (!e)
            return e === 0 ? e : 0;
          if (e = Gn(e), e === Ve || e === -Ve) {
            var t = e < 0 ? -1 : 1;
            return t * ze;
          }
          return e === e ? e : 0;
        }
        function fe(e) {
          var t = Dt(e), o = t % 1;
          return t === t ? o ? t - o : t : 0;
        }
        function Md(e) {
          return e ? Mr(fe(e), 0, k) : 0;
        }
        function Gn(e) {
          if (typeof e == "number")
            return e;
          if (Mn(e))
            return tn;
          if (qe(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = qe(t) ? t + "" : t;
          }
          if (typeof e != "string")
            return e === 0 ? e : +e;
          e = Kp(e);
          var o = rm.test(e);
          return o || om.test(e) ? Bm(e.slice(2), o ? 2 : 8) : tm.test(e) ? tn : +e;
        }
        function Pd(e) {
          return ht(e, yn(e));
        }
        function A2(e) {
          return e ? Mr(fe(e), -De, De) : e === 0 ? e : 0;
        }
        function Ee(e) {
          return e == null ? "" : xn(e);
        }
        var S2 = ri(function(e, t) {
          if (Qi(t) || gn(t)) {
            ht(t, Ke(t), e);
            return;
          }
          for (var o in t)
            Se.call(t, o) && Zi(e, o, t[o]);
        }), Cd = ri(function(e, t) {
          ht(t, yn(t), e);
        }), xa = ri(function(e, t, o, s) {
          ht(t, yn(t), e, s);
        }), I2 = ri(function(e, t, o, s) {
          ht(t, Ke(t), e, s);
        }), T2 = Mt(fs);
        function R2(e, t) {
          var o = ti(e);
          return t == null ? o : fh(o, t);
        }
        var O2 = pe(function(e, t) {
          e = Te(e);
          var o = -1, s = t.length, l = s > 2 ? t[2] : i;
          for (l && ln(t[0], t[1], l) && (s = 1); ++o < s; )
            for (var y = t[o], _ = yn(y), b = -1, O = _.length; ++b < O; ) {
              var U = _[b], j = e[U];
              (j === i || nt(j, Qr[U]) && !Se.call(e, U)) && (e[U] = y[U]);
            }
          return e;
        }), x2 = pe(function(e) {
          return e.push(i, Kh), Rn(Dd, i, e);
        });
        function M2(e, t) {
          return $p(e, re(t, 3), pt);
        }
        function P2(e, t) {
          return $p(e, re(t, 3), ps);
        }
        function C2(e, t) {
          return e == null ? e : ls(e, re(t, 3), yn);
        }
        function D2(e, t) {
          return e == null ? e : gh(e, re(t, 3), yn);
        }
        function N2(e, t) {
          return e && pt(e, re(t, 3));
        }
        function L2(e, t) {
          return e && ps(e, re(t, 3));
        }
        function F2(e) {
          return e == null ? [] : fa(e, Ke(e));
        }
        function B2(e) {
          return e == null ? [] : fa(e, yn(e));
        }
        function zs(e, t, o) {
          var s = e == null ? i : Pr(e, t);
          return s === i ? o : s;
        }
        function q2(e, t) {
          return e != null && Xh(e, t, uw);
        }
        function $s(e, t) {
          return e != null && Xh(e, t, sw);
        }
        var k2 = zh(function(e, t, o) {
          t != null && typeof t.toString != "function" && (t = Jo.call(t)), e[t] = o;
        }, Zs(vn)), U2 = zh(function(e, t, o) {
          t != null && typeof t.toString != "function" && (t = Jo.call(t)), Se.call(e, t) ? e[t].push(o) : e[t] = [o];
        }, re), j2 = pe(Ki);
        function Ke(e) {
          return gn(e) ? sh(e) : ys(e);
        }
        function yn(e) {
          return gn(e) ? sh(e, !0) : mw(e);
        }
        function W2(e, t) {
          var o = {};
          return t = re(t, 3), pt(e, function(s, l, y) {
            Ot(o, t(s, l, y), s);
          }), o;
        }
        function Y2(e, t) {
          var o = {};
          return t = re(t, 3), pt(e, function(s, l, y) {
            Ot(o, l, t(s, l, y));
          }), o;
        }
        var z2 = ri(function(e, t, o) {
          la(e, t, o);
        }), Dd = ri(function(e, t, o, s) {
          la(e, t, o, s);
        }), $2 = Mt(function(e, t) {
          var o = {};
          if (e == null)
            return o;
          var s = !1;
          t = Ne(t, function(y) {
            return y = er(y, e), s || (s = y.length > 1), y;
          }), ht(e, Ms(e), o), s && (o = Yn(o, v | w | P, kw));
          for (var l = t.length; l--; )
            Es(o, t[l]);
          return o;
        });
        function G2(e, t) {
          return Nd(e, Ta(re(t)));
        }
        var Z2 = Mt(function(e, t) {
          return e == null ? {} : ww(e, t);
        });
        function Nd(e, t) {
          if (e == null)
            return {};
          var o = Ne(Ms(e), function(s) {
            return [s];
          });
          return t = re(t), Ih(e, o, function(s, l) {
            return t(s, l[0]);
          });
        }
        function H2(e, t, o) {
          t = er(t, e);
          var s = -1, l = t.length;
          for (l || (l = 1, e = i); ++s < l; ) {
            var y = e == null ? i : e[dt(t[s])];
            y === i && (s = l, y = o), e = Ct(y) ? y.call(e) : y;
          }
          return e;
        }
        function K2(e, t, o) {
          return e == null ? e : Ji(e, t, o);
        }
        function V2(e, t, o, s) {
          return s = typeof s == "function" ? s : i, e == null ? e : Ji(e, t, o, s);
        }
        var Ld = Zh(Ke), Fd = Zh(yn);
        function J2(e, t, o) {
          var s = ue(e), l = s || tr(e) || ai(e);
          if (t = re(t, 4), o == null) {
            var y = e && e.constructor;
            l ? o = s ? new y() : [] : qe(e) ? o = Ct(y) ? ti(ea(e)) : {} : o = {};
          }
          return (l ? Un : pt)(e, function(_, b, O) {
            return t(o, _, b, O);
          }), o;
        }
        function X2(e, t) {
          return e == null ? !0 : Es(e, t);
        }
        function Q2(e, t, o) {
          return e == null ? e : Mh(e, t, Is(o));
        }
        function eA(e, t, o, s) {
          return s = typeof s == "function" ? s : i, e == null ? e : Mh(e, t, Is(o), s);
        }
        function ui(e) {
          return e == null ? [] : rs(e, Ke(e));
        }
        function nA(e) {
          return e == null ? [] : rs(e, yn(e));
        }
        function tA(e, t, o) {
          return o === i && (o = t, t = i), o !== i && (o = Gn(o), o = o === o ? o : 0), t !== i && (t = Gn(t), t = t === t ? t : 0), Mr(Gn(e), t, o);
        }
        function rA(e, t, o) {
          return t = Dt(t), o === i ? (o = t, t = 0) : o = Dt(o), e = Gn(e), cw(e, t, o);
        }
        function iA(e, t, o) {
          if (o && typeof o != "boolean" && ln(e, t, o) && (t = o = i), o === i && (typeof t == "boolean" ? (o = t, t = i) : typeof e == "boolean" && (o = e, e = i)), e === i && t === i ? (e = 0, t = 1) : (e = Dt(e), t === i ? (t = e, e = 0) : t = Dt(t)), e > t) {
            var s = e;
            e = t, t = s;
          }
          if (o || e % 1 || t % 1) {
            var l = ah();
            return on(e + l * (t - e + Fm("1e-" + ((l + "").length - 1))), t);
          }
          return _s(e, t);
        }
        var oA = ii(function(e, t, o) {
          return t = t.toLowerCase(), e + (o ? Bd(t) : t);
        });
        function Bd(e) {
          return Gs(Ee(e).toLowerCase());
        }
        function qd(e) {
          return e = Ee(e), e && e.replace(um, Km).replace(Tm, "");
        }
        function aA(e, t, o) {
          e = Ee(e), t = xn(t);
          var s = e.length;
          o = o === i ? s : Mr(fe(o), 0, s);
          var l = o;
          return o -= t.length, o >= 0 && e.slice(o, l) == t;
        }
        function uA(e) {
          return e = Ee(e), e && jv.test(e) ? e.replace(gp, Vm) : e;
        }
        function sA(e) {
          return e = Ee(e), e && Zv.test(e) ? e.replace(ju, "\\$&") : e;
        }
        var cA = ii(function(e, t, o) {
          return e + (o ? "-" : "") + t.toLowerCase();
        }), fA = ii(function(e, t, o) {
          return e + (o ? " " : "") + t.toLowerCase();
        }), lA = jh("toLowerCase");
        function pA(e, t, o) {
          e = Ee(e), t = fe(t);
          var s = t ? Jr(e) : 0;
          if (!t || s >= t)
            return e;
          var l = (t - s) / 2;
          return va(ia(l), o) + e + va(ra(l), o);
        }
        function hA(e, t, o) {
          e = Ee(e), t = fe(t);
          var s = t ? Jr(e) : 0;
          return t && s < t ? e + va(t - s, o) : e;
        }
        function dA(e, t, o) {
          e = Ee(e), t = fe(t);
          var s = t ? Jr(e) : 0;
          return t && s < t ? va(t - s, o) + e : e;
        }
        function gA(e, t, o) {
          return o || t == null ? t = 0 : t && (t = +t), E_(Ee(e).replace(Wu, ""), t || 0);
        }
        function yA(e, t, o) {
          return (o ? ln(e, t, o) : t === i) ? t = 1 : t = fe(t), ws(Ee(e), t);
        }
        function vA() {
          var e = arguments, t = Ee(e[0]);
          return e.length < 3 ? t : t.replace(e[1], e[2]);
        }
        var mA = ii(function(e, t, o) {
          return e + (o ? "_" : "") + t.toLowerCase();
        });
        function _A(e, t, o) {
          return o && typeof o != "number" && ln(e, t, o) && (t = o = i), o = o === i ? k : o >>> 0, o ? (e = Ee(e), e && (typeof t == "string" || t != null && !Ys(t)) && (t = xn(t), !t && Vr(e)) ? nr(Qn(e), 0, o) : e.split(t, o)) : [];
        }
        var wA = ii(function(e, t, o) {
          return e + (o ? " " : "") + Gs(t);
        });
        function bA(e, t, o) {
          return e = Ee(e), o = o == null ? 0 : Mr(fe(o), 0, e.length), t = xn(t), e.slice(o, o + t.length) == t;
        }
        function EA(e, t, o) {
          var s = d.templateSettings;
          o && ln(e, t, o) && (t = i), e = Ee(e), t = xa({}, t, s, Hh);
          var l = xa({}, t.imports, s.imports, Hh), y = Ke(l), _ = rs(l, y), b, O, U = 0, j = t.interpolate || Wo, z = "__p += '", Z = os(
            (t.escape || Wo).source + "|" + j.source + "|" + (j === yp ? nm : Wo).source + "|" + (t.evaluate || Wo).source + "|$",
            "g"
          ), V = "//# sourceURL=" + (Se.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Pm + "]") + `
`;
          e.replace(Z, function(oe, de, ve, Pn, pn, Cn) {
            return ve || (ve = Pn), z += e.slice(U, Cn).replace(sm, Jm), de && (b = !0, z += `' +
__e(` + de + `) +
'`), pn && (O = !0, z += `';
` + pn + `;
__p += '`), ve && (z += `' +
((__t = (` + ve + `)) == null ? '' : __t) +
'`), U = Cn + oe.length, oe;
          }), z += `';
`;
          var ie = Se.call(t, "variable") && t.variable;
          if (!ie)
            z = `with (obj) {
` + z + `
}
`;
          else if (Qv.test(ie))
            throw new ae(p);
          z = (O ? z.replace(Bv, "") : z).replace(qv, "$1").replace(kv, "$1;"), z = "function(" + (ie || "obj") + `) {
` + (ie ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (b ? ", __e = _.escape" : "") + (O ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + z + `return __p
}`;
          var le = Ud(function() {
            return be(y, V + "return " + z).apply(i, _);
          });
          if (le.source = z, Ws(le))
            throw le;
          return le;
        }
        function AA(e) {
          return Ee(e).toLowerCase();
        }
        function SA(e) {
          return Ee(e).toUpperCase();
        }
        function IA(e, t, o) {
          if (e = Ee(e), e && (o || t === i))
            return Kp(e);
          if (!e || !(t = xn(t)))
            return e;
          var s = Qn(e), l = Qn(t), y = Vp(s, l), _ = Jp(s, l) + 1;
          return nr(s, y, _).join("");
        }
        function TA(e, t, o) {
          if (e = Ee(e), e && (o || t === i))
            return e.slice(0, Qp(e) + 1);
          if (!e || !(t = xn(t)))
            return e;
          var s = Qn(e), l = Jp(s, Qn(t)) + 1;
          return nr(s, 0, l).join("");
        }
        function RA(e, t, o) {
          if (e = Ee(e), e && (o || t === i))
            return e.replace(Wu, "");
          if (!e || !(t = xn(t)))
            return e;
          var s = Qn(e), l = Vp(s, Qn(t));
          return nr(s, l).join("");
        }
        function OA(e, t) {
          var o = J, s = ce;
          if (qe(t)) {
            var l = "separator" in t ? t.separator : l;
            o = "length" in t ? fe(t.length) : o, s = "omission" in t ? xn(t.omission) : s;
          }
          e = Ee(e);
          var y = e.length;
          if (Vr(e)) {
            var _ = Qn(e);
            y = _.length;
          }
          if (o >= y)
            return e;
          var b = o - Jr(s);
          if (b < 1)
            return s;
          var O = _ ? nr(_, 0, b).join("") : e.slice(0, b);
          if (l === i)
            return O + s;
          if (_ && (b += O.length - b), Ys(l)) {
            if (e.slice(b).search(l)) {
              var U, j = O;
              for (l.global || (l = os(l.source, Ee(vp.exec(l)) + "g")), l.lastIndex = 0; U = l.exec(j); )
                var z = U.index;
              O = O.slice(0, z === i ? b : z);
            }
          } else if (e.indexOf(xn(l), b) != b) {
            var Z = O.lastIndexOf(l);
            Z > -1 && (O = O.slice(0, Z));
          }
          return O + s;
        }
        function xA(e) {
          return e = Ee(e), e && Uv.test(e) ? e.replace(dp, i_) : e;
        }
        var MA = ii(function(e, t, o) {
          return e + (o ? " " : "") + t.toUpperCase();
        }), Gs = jh("toUpperCase");
        function kd(e, t, o) {
          return e = Ee(e), t = o ? i : t, t === i ? Qm(e) ? u_(e) : zm(e) : e.match(t) || [];
        }
        var Ud = pe(function(e, t) {
          try {
            return Rn(e, i, t);
          } catch (o) {
            return Ws(o) ? o : new ae(o);
          }
        }), PA = Mt(function(e, t) {
          return Un(t, function(o) {
            o = dt(o), Ot(e, o, Us(e[o], e));
          }), e;
        });
        function CA(e) {
          var t = e == null ? 0 : e.length, o = re();
          return e = t ? Ne(e, function(s) {
            if (typeof s[1] != "function")
              throw new jn(f);
            return [o(s[0]), s[1]];
          }) : [], pe(function(s) {
            for (var l = -1; ++l < t; ) {
              var y = e[l];
              if (Rn(y[0], this, s))
                return Rn(y[1], this, s);
            }
          });
        }
        function DA(e) {
          return iw(Yn(e, v));
        }
        function Zs(e) {
          return function() {
            return e;
          };
        }
        function NA(e, t) {
          return e == null || e !== e ? t : e;
        }
        var LA = Yh(), FA = Yh(!0);
        function vn(e) {
          return e;
        }
        function Hs(e) {
          return _h(typeof e == "function" ? e : Yn(e, v));
        }
        function BA(e) {
          return bh(Yn(e, v));
        }
        function qA(e, t) {
          return Eh(e, Yn(t, v));
        }
        var kA = pe(function(e, t) {
          return function(o) {
            return Ki(o, e, t);
          };
        }), UA = pe(function(e, t) {
          return function(o) {
            return Ki(e, o, t);
          };
        });
        function Ks(e, t, o) {
          var s = Ke(t), l = fa(t, s);
          o == null && !(qe(t) && (l.length || !s.length)) && (o = t, t = e, e = this, l = fa(t, Ke(t)));
          var y = !(qe(o) && "chain" in o) || !!o.chain, _ = Ct(e);
          return Un(l, function(b) {
            var O = t[b];
            e[b] = O, _ && (e.prototype[b] = function() {
              var U = this.__chain__;
              if (y || U) {
                var j = e(this.__wrapped__), z = j.__actions__ = dn(this.__actions__);
                return z.push({ func: O, args: arguments, thisArg: e }), j.__chain__ = U, j;
              }
              return O.apply(e, Kt([this.value()], arguments));
            });
          }), e;
        }
        function jA() {
          return Xe._ === this && (Xe._ = h_), this;
        }
        function Vs() {
        }
        function WA(e) {
          return e = fe(e), pe(function(t) {
            return Ah(t, e);
          });
        }
        var YA = Rs(Ne), zA = Rs(zp), $A = Rs(Xu);
        function jd(e) {
          return Ns(e) ? Qu(dt(e)) : bw(e);
        }
        function GA(e) {
          return function(t) {
            return e == null ? i : Pr(e, t);
          };
        }
        var ZA = $h(), HA = $h(!0);
        function Js() {
          return [];
        }
        function Xs() {
          return !1;
        }
        function KA() {
          return {};
        }
        function VA() {
          return "";
        }
        function JA() {
          return !0;
        }
        function XA(e, t) {
          if (e = fe(e), e < 1 || e > De)
            return [];
          var o = k, s = on(e, k);
          t = re(t), e -= k;
          for (var l = ts(s, t); ++o < e; )
            t(o);
          return l;
        }
        function QA(e) {
          return ue(e) ? Ne(e, dt) : Mn(e) ? [e] : dn(ud(Ee(e)));
        }
        function eS(e) {
          var t = ++l_;
          return Ee(e) + t;
        }
        var nS = ya(function(e, t) {
          return e + t;
        }, 0), tS = Os("ceil"), rS = ya(function(e, t) {
          return e / t;
        }, 1), iS = Os("floor");
        function oS(e) {
          return e && e.length ? ca(e, vn, hs) : i;
        }
        function aS(e, t) {
          return e && e.length ? ca(e, re(t, 2), hs) : i;
        }
        function uS(e) {
          return Zp(e, vn);
        }
        function sS(e, t) {
          return Zp(e, re(t, 2));
        }
        function cS(e) {
          return e && e.length ? ca(e, vn, vs) : i;
        }
        function fS(e, t) {
          return e && e.length ? ca(e, re(t, 2), vs) : i;
        }
        var lS = ya(function(e, t) {
          return e * t;
        }, 1), pS = Os("round"), hS = ya(function(e, t) {
          return e - t;
        }, 0);
        function dS(e) {
          return e && e.length ? ns(e, vn) : 0;
        }
        function gS(e, t) {
          return e && e.length ? ns(e, re(t, 2)) : 0;
        }
        return d.after = BE, d.ary = md, d.assign = S2, d.assignIn = Cd, d.assignInWith = xa, d.assignWith = I2, d.at = T2, d.before = _d, d.bind = Us, d.bindAll = PA, d.bindKey = wd, d.castArray = KE, d.chain = gd, d.chunk = ib, d.compact = ob, d.concat = ab, d.cond = CA, d.conforms = DA, d.constant = Zs, d.countBy = dE, d.create = R2, d.curry = bd, d.curryRight = Ed, d.debounce = Ad, d.defaults = O2, d.defaultsDeep = x2, d.defer = qE, d.delay = kE, d.difference = ub, d.differenceBy = sb, d.differenceWith = cb, d.drop = fb, d.dropRight = lb, d.dropRightWhile = pb, d.dropWhile = hb, d.fill = db, d.filter = yE, d.flatMap = _E, d.flatMapDeep = wE, d.flatMapDepth = bE, d.flatten = ld, d.flattenDeep = gb, d.flattenDepth = yb, d.flip = UE, d.flow = LA, d.flowRight = FA, d.fromPairs = vb, d.functions = F2, d.functionsIn = B2, d.groupBy = EE, d.initial = _b, d.intersection = wb, d.intersectionBy = bb, d.intersectionWith = Eb, d.invert = k2, d.invertBy = U2, d.invokeMap = SE, d.iteratee = Hs, d.keyBy = IE, d.keys = Ke, d.keysIn = yn, d.map = Aa, d.mapKeys = W2, d.mapValues = Y2, d.matches = BA, d.matchesProperty = qA, d.memoize = Ia, d.merge = z2, d.mergeWith = Dd, d.method = kA, d.methodOf = UA, d.mixin = Ks, d.negate = Ta, d.nthArg = WA, d.omit = $2, d.omitBy = G2, d.once = jE, d.orderBy = TE, d.over = YA, d.overArgs = WE, d.overEvery = zA, d.overSome = $A, d.partial = js, d.partialRight = Sd, d.partition = RE, d.pick = Z2, d.pickBy = Nd, d.property = jd, d.propertyOf = GA, d.pull = Tb, d.pullAll = hd, d.pullAllBy = Rb, d.pullAllWith = Ob, d.pullAt = xb, d.range = ZA, d.rangeRight = HA, d.rearg = YE, d.reject = ME, d.remove = Mb, d.rest = zE, d.reverse = qs, d.sampleSize = CE, d.set = K2, d.setWith = V2, d.shuffle = DE, d.slice = Pb, d.sortBy = FE, d.sortedUniq = qb, d.sortedUniqBy = kb, d.split = _A, d.spread = $E, d.tail = Ub, d.take = jb, d.takeRight = Wb, d.takeRightWhile = Yb, d.takeWhile = zb, d.tap = oE, d.throttle = GE, d.thru = Ea, d.toArray = xd, d.toPairs = Ld, d.toPairsIn = Fd, d.toPath = QA, d.toPlainObject = Pd, d.transform = J2, d.unary = ZE, d.union = $b, d.unionBy = Gb, d.unionWith = Zb, d.uniq = Hb, d.uniqBy = Kb, d.uniqWith = Vb, d.unset = X2, d.unzip = ks, d.unzipWith = dd, d.update = Q2, d.updateWith = eA, d.values = ui, d.valuesIn = nA, d.without = Jb, d.words = kd, d.wrap = HE, d.xor = Xb, d.xorBy = Qb, d.xorWith = eE, d.zip = nE, d.zipObject = tE, d.zipObjectDeep = rE, d.zipWith = iE, d.entries = Ld, d.entriesIn = Fd, d.extend = Cd, d.extendWith = xa, Ks(d, d), d.add = nS, d.attempt = Ud, d.camelCase = oA, d.capitalize = Bd, d.ceil = tS, d.clamp = tA, d.clone = VE, d.cloneDeep = XE, d.cloneDeepWith = QE, d.cloneWith = JE, d.conformsTo = e2, d.deburr = qd, d.defaultTo = NA, d.divide = rS, d.endsWith = aA, d.eq = nt, d.escape = uA, d.escapeRegExp = sA, d.every = gE, d.find = vE, d.findIndex = cd, d.findKey = M2, d.findLast = mE, d.findLastIndex = fd, d.findLastKey = P2, d.floor = iS, d.forEach = yd, d.forEachRight = vd, d.forIn = C2, d.forInRight = D2, d.forOwn = N2, d.forOwnRight = L2, d.get = zs, d.gt = n2, d.gte = t2, d.has = q2, d.hasIn = $s, d.head = pd, d.identity = vn, d.includes = AE, d.indexOf = mb, d.inRange = rA, d.invoke = j2, d.isArguments = Nr, d.isArray = ue, d.isArrayBuffer = r2, d.isArrayLike = gn, d.isArrayLikeObject = We, d.isBoolean = i2, d.isBuffer = tr, d.isDate = o2, d.isElement = a2, d.isEmpty = u2, d.isEqual = s2, d.isEqualWith = c2, d.isError = Ws, d.isFinite = f2, d.isFunction = Ct, d.isInteger = Id, d.isLength = Ra, d.isMap = Td, d.isMatch = l2, d.isMatchWith = p2, d.isNaN = h2, d.isNative = d2, d.isNil = y2, d.isNull = g2, d.isNumber = Rd, d.isObject = qe, d.isObjectLike = je, d.isPlainObject = no, d.isRegExp = Ys, d.isSafeInteger = v2, d.isSet = Od, d.isString = Oa, d.isSymbol = Mn, d.isTypedArray = ai, d.isUndefined = m2, d.isWeakMap = _2, d.isWeakSet = w2, d.join = Ab, d.kebabCase = cA, d.last = $n, d.lastIndexOf = Sb, d.lowerCase = fA, d.lowerFirst = lA, d.lt = b2, d.lte = E2, d.max = oS, d.maxBy = aS, d.mean = uS, d.meanBy = sS, d.min = cS, d.minBy = fS, d.stubArray = Js, d.stubFalse = Xs, d.stubObject = KA, d.stubString = VA, d.stubTrue = JA, d.multiply = lS, d.nth = Ib, d.noConflict = jA, d.noop = Vs, d.now = Sa, d.pad = pA, d.padEnd = hA, d.padStart = dA, d.parseInt = gA, d.random = iA, d.reduce = OE, d.reduceRight = xE, d.repeat = yA, d.replace = vA, d.result = H2, d.round = pS, d.runInContext = I, d.sample = PE, d.size = NE, d.snakeCase = mA, d.some = LE, d.sortedIndex = Cb, d.sortedIndexBy = Db, d.sortedIndexOf = Nb, d.sortedLastIndex = Lb, d.sortedLastIndexBy = Fb, d.sortedLastIndexOf = Bb, d.startCase = wA, d.startsWith = bA, d.subtract = hS, d.sum = dS, d.sumBy = gS, d.template = EA, d.times = XA, d.toFinite = Dt, d.toInteger = fe, d.toLength = Md, d.toLower = AA, d.toNumber = Gn, d.toSafeInteger = A2, d.toString = Ee, d.toUpper = SA, d.trim = IA, d.trimEnd = TA, d.trimStart = RA, d.truncate = OA, d.unescape = xA, d.uniqueId = eS, d.upperCase = MA, d.upperFirst = Gs, d.each = yd, d.eachRight = vd, d.first = pd, Ks(d, (function() {
          var e = {};
          return pt(d, function(t, o) {
            Se.call(d.prototype, o) || (e[o] = t);
          }), e;
        })(), { chain: !1 }), d.VERSION = a, Un(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
          d[e].placeholder = d;
        }), Un(["drop", "take"], function(e, t) {
          ye.prototype[e] = function(o) {
            o = o === i ? 1 : Ze(fe(o), 0);
            var s = this.__filtered__ && !t ? new ye(this) : this.clone();
            return s.__filtered__ ? s.__takeCount__ = on(o, s.__takeCount__) : s.__views__.push({
              size: on(o, k),
              type: e + (s.__dir__ < 0 ? "Right" : "")
            }), s;
          }, ye.prototype[e + "Right"] = function(o) {
            return this.reverse()[e](o).reverse();
          };
        }), Un(["filter", "map", "takeWhile"], function(e, t) {
          var o = t + 1, s = o == Fe || o == In;
          ye.prototype[e] = function(l) {
            var y = this.clone();
            return y.__iteratees__.push({
              iteratee: re(l, 3),
              type: o
            }), y.__filtered__ = y.__filtered__ || s, y;
          };
        }), Un(["head", "last"], function(e, t) {
          var o = "take" + (t ? "Right" : "");
          ye.prototype[e] = function() {
            return this[o](1).value()[0];
          };
        }), Un(["initial", "tail"], function(e, t) {
          var o = "drop" + (t ? "" : "Right");
          ye.prototype[e] = function() {
            return this.__filtered__ ? new ye(this) : this[o](1);
          };
        }), ye.prototype.compact = function() {
          return this.filter(vn);
        }, ye.prototype.find = function(e) {
          return this.filter(e).head();
        }, ye.prototype.findLast = function(e) {
          return this.reverse().find(e);
        }, ye.prototype.invokeMap = pe(function(e, t) {
          return typeof e == "function" ? new ye(this) : this.map(function(o) {
            return Ki(o, e, t);
          });
        }), ye.prototype.reject = function(e) {
          return this.filter(Ta(re(e)));
        }, ye.prototype.slice = function(e, t) {
          e = fe(e);
          var o = this;
          return o.__filtered__ && (e > 0 || t < 0) ? new ye(o) : (e < 0 ? o = o.takeRight(-e) : e && (o = o.drop(e)), t !== i && (t = fe(t), o = t < 0 ? o.dropRight(-t) : o.take(t - e)), o);
        }, ye.prototype.takeRightWhile = function(e) {
          return this.reverse().takeWhile(e).reverse();
        }, ye.prototype.toArray = function() {
          return this.take(k);
        }, pt(ye.prototype, function(e, t) {
          var o = /^(?:filter|find|map|reject)|While$/.test(t), s = /^(?:head|last)$/.test(t), l = d[s ? "take" + (t == "last" ? "Right" : "") : t], y = s || /^find/.test(t);
          l && (d.prototype[t] = function() {
            var _ = this.__wrapped__, b = s ? [1] : arguments, O = _ instanceof ye, U = b[0], j = O || ue(_), z = function(de) {
              var ve = l.apply(d, Kt([de], b));
              return s && Z ? ve[0] : ve;
            };
            j && o && typeof U == "function" && U.length != 1 && (O = j = !1);
            var Z = this.__chain__, V = !!this.__actions__.length, ie = y && !Z, le = O && !V;
            if (!y && j) {
              _ = le ? _ : new ye(this);
              var oe = e.apply(_, b);
              return oe.__actions__.push({ func: Ea, args: [z], thisArg: i }), new Wn(oe, Z);
            }
            return ie && le ? e.apply(this, b) : (oe = this.thru(z), ie ? s ? oe.value()[0] : oe.value() : oe);
          });
        }), Un(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
          var t = Ho[e], o = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", s = /^(?:pop|shift)$/.test(e);
          d.prototype[e] = function() {
            var l = arguments;
            if (s && !this.__chain__) {
              var y = this.value();
              return t.apply(ue(y) ? y : [], l);
            }
            return this[o](function(_) {
              return t.apply(ue(_) ? _ : [], l);
            });
          };
        }), pt(ye.prototype, function(e, t) {
          var o = d[t];
          if (o) {
            var s = o.name + "";
            Se.call(ni, s) || (ni[s] = []), ni[s].push({ name: t, func: o });
          }
        }), ni[ga(i, A).name] = [{
          name: "wrapper",
          func: i
        }], ye.prototype.clone = x_, ye.prototype.reverse = M_, ye.prototype.value = P_, d.prototype.at = aE, d.prototype.chain = uE, d.prototype.commit = sE, d.prototype.next = cE, d.prototype.plant = lE, d.prototype.reverse = pE, d.prototype.toJSON = d.prototype.valueOf = d.prototype.value = hE, d.prototype.first = d.prototype.head, Wi && (d.prototype[Wi] = fE), d;
      }), Xr = s_();
      Tr ? ((Tr.exports = Xr)._ = Xr, Hu._ = Xr) : Xe._ = Xr;
    }).call(HO);
  })(co, co.exports)), co.exports;
}
var lv = KO();
const VO = "_seekBar_16dv7_14", JO = {
  seekBar: VO
};
function XO({ value: n = 0, className: r, ...i }) {
  const { translate: a } = kr(), [u, c] = r1(n), f = Si(() => lv.throttle(c, 10), []);
  return i1(() => {
    f(n);
  }, [n, f]), /* @__PURE__ */ G.createElement(
    "input",
    {
      type: "range",
      className: at(JO.seekBar, r),
      onMouseDown: (p) => p.stopPropagation(),
      min: 0,
      max: 100,
      value: u,
      step: 1,
      style: { "--fillTo": u / 100 },
      "aria-label": a("a11y|seek_bar_label"),
      ...i
    }
  );
}
function K7({ vm: n }) {
  const { translate: r } = kr(), {
    playbackState: i,
    mediaName: a = r("timeline|m.audio|unnamed_audio"),
    sizeBytes: u,
    durationSeconds: c,
    playedSeconds: f,
    percentComplete: p,
    error: h
  } = bo(n), g = u ? `(${$S(u)})` : null, m = i === "decoding";
  return /* @__PURE__ */ G.createElement(G.Fragment, null, /* @__PURE__ */ G.createElement(
    OS,
    {
      className: si.audioPlayer,
      tabIndex: 0,
      onKeyDown: n.onKeyDown,
      "aria-label": r("timeline|m.audio|audio_player"),
      role: "region"
    },
    /* @__PURE__ */ G.createElement(Nn, { gap: "var(--cpd-space-2x)", align: "center" }, /* @__PURE__ */ G.createElement(
      zS,
      {
        tabIndex: -1,
        disabled: m,
        playing: i === "playing",
        togglePlay: n.togglePlay
      }
    ), /* @__PURE__ */ G.createElement(Nn, { direction: "column", className: si.mediaInfo }, /* @__PURE__ */ G.createElement("span", { className: si.mediaName, "data-testid": "audio-player-name" }, a), /* @__PURE__ */ G.createElement(Nn, { className: si.byline, gap: "var(--cpd-space-1-5x)" }, /* @__PURE__ */ G.createElement(Mg, { seconds: c }), g))),
    /* @__PURE__ */ G.createElement(Nn, { align: "center", gap: "var(--cpd-space-1x)", "data-testid": "audio-player-seek" }, /* @__PURE__ */ G.createElement(XO, { tabIndex: -1, disabled: m, value: p, onChange: n.onSeekbarChange }), /* @__PURE__ */ G.createElement(Mg, { className: si.clock, seconds: f, role: "timer" }))
  ), h && /* @__PURE__ */ G.createElement("span", { className: si.error }, r("timeline|m.audio|error_downloading_audio")));
}
const QO = "_avatarWithDetails_7ga8t_8", ex = "_title_7ga8t_17", nx = "_details_7ga8t_28", sc = {
  avatarWithDetails: QO,
  title: ex,
  details: nx
};
function V7({
  as: n,
  className: r,
  details: i,
  avatar: a,
  title: u,
  ...c
}) {
  const f = n || "div";
  return /* @__PURE__ */ G.createElement(f, { className: at(sc.avatarWithDetails, r), ...c }, a, /* @__PURE__ */ G.createElement(Nn, { direction: "column" }, /* @__PURE__ */ G.createElement("span", { className: sc.title }, u), /* @__PURE__ */ G.createElement("span", { className: sc.details }, i)));
}
function pv(n, r) {
  return /* @__PURE__ */ Pe.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: r,
    ...n,
    children: /* @__PURE__ */ Pe.jsx("path", {
      d: "m10.6 13.8-2.15-2.15a.95.95 0 0 0-.7-.275.95.95 0 0 0-.7.275.95.95 0 0 0-.275.7q0 .425.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65a.95.95 0 0 0 .275-.7.95.95 0 0 0-.275-.7.95.95 0 0 0-.7-.275.95.95 0 0 0-.7.275zM12 22a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20"
    })
  });
}
pv.displayName = "CheckCircleIcon";
const tx = Xn(pv);
function hv(n, r) {
  return /* @__PURE__ */ Pe.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: r,
    ...n,
    children: /* @__PURE__ */ Pe.jsx("path", {
      d: "M12 17q.424 0 .713-.288A.97.97 0 0 0 13 16a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 15a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 16q0 .424.287.712.288.288.713.288m0-4q.424 0 .713-.287A.97.97 0 0 0 13 12V8a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 7a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 8v4q0 .424.287.713.288.287.713.287m0 9a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22"
    })
  });
}
hv.displayName = "ErrorSolidIcon";
const rx = Xn(hv);
function dv(n, r) {
  return /* @__PURE__ */ Pe.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: r,
    ...n,
    children: [/* @__PURE__ */ Pe.jsx("path", {
      d: "M11.288 7.288A.97.97 0 0 1 12 7q.424 0 .713.287Q13 7.576 13 8t-.287.713A.97.97 0 0 1 12 9a.97.97 0 0 1-.713-.287A.97.97 0 0 1 11 8q0-.424.287-.713m.001 4.001A.97.97 0 0 1 12 11q.424 0 .713.287.287.288.287.713v4q0 .424-.287.712A.97.97 0 0 1 12 17a.97.97 0 0 1-.713-.288A.97.97 0 0 1 11 16v-4q0-.424.287-.713"
    }), /* @__PURE__ */ Pe.jsx("path", {
      fillRule: "evenodd",
      d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0",
      clipRule: "evenodd"
    })]
  });
}
dv.displayName = "InfoIcon";
const Cg = Xn(dv), ix = "_banner_48r66_20", ox = "_content_48r66_51", ax = "_icon_48r66_63", ux = "_actions_48r66_83", La = {
  banner: ix,
  content: ox,
  icon: ax,
  actions: ux
};
function sx(n) {
  return n.toLowerCase().replace("_", "-");
}
function J7(n) {
  const r = [], i = sx(n), a = i.split("-");
  return a.length === 2 && a[0] === a[1] ? r.push(a[0]) : (r.push(i), a.length === 2 && r.push(a[0])), r;
}
const cx = "|";
var cc, Dg;
function fx() {
  if (Dg) return cc;
  Dg = 1;
  var n = Object.prototype.hasOwnProperty, r = Object.prototype.toString, i = Object.defineProperty, a = Object.getOwnPropertyDescriptor, u = function(g) {
    return typeof Array.isArray == "function" ? Array.isArray(g) : r.call(g) === "[object Array]";
  }, c = function(g) {
    if (!g || r.call(g) !== "[object Object]")
      return !1;
    var m = n.call(g, "constructor"), v = g.constructor && g.constructor.prototype && n.call(g.constructor.prototype, "isPrototypeOf");
    if (g.constructor && !m && !v)
      return !1;
    var w;
    for (w in g)
      ;
    return typeof w > "u" || n.call(g, w);
  }, f = function(g, m) {
    i && m.name === "__proto__" ? i(g, m.name, {
      enumerable: !0,
      configurable: !0,
      value: m.newValue,
      writable: !0
    }) : g[m.name] = m.newValue;
  }, p = function(g, m) {
    if (m === "__proto__")
      if (n.call(g, m)) {
        if (a)
          return a(g, m).value;
      } else return;
    return g[m];
  };
  return cc = function h() {
    var g, m, v, w, P, E, x = arguments[0], B = 1, A = arguments.length, R = !1;
    for (typeof x == "boolean" && (R = x, x = arguments[1] || {}, B = 2), (x == null || typeof x != "object" && typeof x != "function") && (x = {}); B < A; ++B)
      if (g = arguments[B], g != null)
        for (m in g)
          v = p(x, m), w = p(g, m), x !== w && (R && w && (c(w) || (P = u(w))) ? (P ? (P = !1, E = v && u(v) ? v : []) : E = v && c(v) ? v : {}, f(x, { name: m, newValue: h(R, E, w) })) : typeof w < "u" && f(x, { name: m, newValue: w }));
    return x;
  }, cc;
}
var fc = {}, lc = {}, pc, Ng;
function gv() {
  return Ng || (Ng = 1, pc = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var r = {}, i = /* @__PURE__ */ Symbol("test"), a = Object(i);
    if (typeof i == "string" || Object.prototype.toString.call(i) !== "[object Symbol]" || Object.prototype.toString.call(a) !== "[object Symbol]")
      return !1;
    var u = 42;
    r[i] = u;
    for (var c in r)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(r).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(r).length !== 0)
      return !1;
    var f = Object.getOwnPropertySymbols(r);
    if (f.length !== 1 || f[0] !== i || !Object.prototype.propertyIsEnumerable.call(r, i))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var p = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(r, i)
      );
      if (p.value !== u || p.enumerable !== !0)
        return !1;
    }
    return !0;
  }), pc;
}
var hc, Lg;
function Mu() {
  if (Lg) return hc;
  Lg = 1;
  var n = gv();
  return hc = function() {
    return n() && !!Symbol.toStringTag;
  }, hc;
}
var dc, Fg;
function yv() {
  return Fg || (Fg = 1, dc = Object), dc;
}
var gc, Bg;
function lx() {
  return Bg || (Bg = 1, gc = Error), gc;
}
var yc, qg;
function px() {
  return qg || (qg = 1, yc = EvalError), yc;
}
var vc, kg;
function hx() {
  return kg || (kg = 1, vc = RangeError), vc;
}
var mc, Ug;
function dx() {
  return Ug || (Ug = 1, mc = ReferenceError), mc;
}
var _c, jg;
function vv() {
  return jg || (jg = 1, _c = SyntaxError), _c;
}
var wc, Wg;
function ko() {
  return Wg || (Wg = 1, wc = TypeError), wc;
}
var bc, Yg;
function gx() {
  return Yg || (Yg = 1, bc = URIError), bc;
}
var Ec, zg;
function yx() {
  return zg || (zg = 1, Ec = Math.abs), Ec;
}
var Ac, $g;
function vx() {
  return $g || ($g = 1, Ac = Math.floor), Ac;
}
var Sc, Gg;
function mx() {
  return Gg || (Gg = 1, Sc = Math.max), Sc;
}
var Ic, Zg;
function _x() {
  return Zg || (Zg = 1, Ic = Math.min), Ic;
}
var Tc, Hg;
function wx() {
  return Hg || (Hg = 1, Tc = Math.pow), Tc;
}
var Rc, Kg;
function bx() {
  return Kg || (Kg = 1, Rc = Math.round), Rc;
}
var Oc, Vg;
function Ex() {
  return Vg || (Vg = 1, Oc = Number.isNaN || function(r) {
    return r !== r;
  }), Oc;
}
var xc, Jg;
function Ax() {
  if (Jg) return xc;
  Jg = 1;
  var n = /* @__PURE__ */ Ex();
  return xc = function(i) {
    return n(i) || i === 0 ? i : i < 0 ? -1 : 1;
  }, xc;
}
var Mc, Xg;
function Sx() {
  return Xg || (Xg = 1, Mc = Object.getOwnPropertyDescriptor), Mc;
}
var Pc, Qg;
function qi() {
  if (Qg) return Pc;
  Qg = 1;
  var n = /* @__PURE__ */ Sx();
  if (n)
    try {
      n([], "length");
    } catch {
      n = null;
    }
  return Pc = n, Pc;
}
var Cc, ey;
function Pu() {
  if (ey) return Cc;
  ey = 1;
  var n = Object.defineProperty || !1;
  if (n)
    try {
      n({}, "a", { value: 1 });
    } catch {
      n = !1;
    }
  return Cc = n, Cc;
}
var Dc, ny;
function Ix() {
  if (ny) return Dc;
  ny = 1;
  var n = typeof Symbol < "u" && Symbol, r = gv();
  return Dc = function() {
    return typeof n != "function" || typeof Symbol != "function" || typeof n("foo") != "symbol" || typeof /* @__PURE__ */ Symbol("bar") != "symbol" ? !1 : r();
  }, Dc;
}
var Nc, ty;
function mv() {
  return ty || (ty = 1, Nc = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Nc;
}
var Lc, ry;
function _v() {
  if (ry) return Lc;
  ry = 1;
  var n = /* @__PURE__ */ yv();
  return Lc = n.getPrototypeOf || null, Lc;
}
var Fc, iy;
function Tx() {
  if (iy) return Fc;
  iy = 1;
  var n = "Function.prototype.bind called on incompatible ", r = Object.prototype.toString, i = Math.max, a = "[object Function]", u = function(h, g) {
    for (var m = [], v = 0; v < h.length; v += 1)
      m[v] = h[v];
    for (var w = 0; w < g.length; w += 1)
      m[w + h.length] = g[w];
    return m;
  }, c = function(h, g) {
    for (var m = [], v = g, w = 0; v < h.length; v += 1, w += 1)
      m[w] = h[v];
    return m;
  }, f = function(p, h) {
    for (var g = "", m = 0; m < p.length; m += 1)
      g += p[m], m + 1 < p.length && (g += h);
    return g;
  };
  return Fc = function(h) {
    var g = this;
    if (typeof g != "function" || r.apply(g) !== a)
      throw new TypeError(n + g);
    for (var m = c(arguments, 1), v, w = function() {
      if (this instanceof v) {
        var A = g.apply(
          this,
          u(m, arguments)
        );
        return Object(A) === A ? A : this;
      }
      return g.apply(
        h,
        u(m, arguments)
      );
    }, P = i(0, g.length - m.length), E = [], x = 0; x < P; x++)
      E[x] = "$" + x;
    if (v = Function("binder", "return function (" + f(E, ",") + "){ return binder.apply(this,arguments); }")(w), g.prototype) {
      var B = function() {
      };
      B.prototype = g.prototype, v.prototype = new B(), B.prototype = null;
    }
    return v;
  }, Fc;
}
var Bc, oy;
function Uo() {
  if (oy) return Bc;
  oy = 1;
  var n = Tx();
  return Bc = Function.prototype.bind || n, Bc;
}
var qc, ay;
function cp() {
  return ay || (ay = 1, qc = Function.prototype.call), qc;
}
var kc, uy;
function fp() {
  return uy || (uy = 1, kc = Function.prototype.apply), kc;
}
var Uc, sy;
function Rx() {
  return sy || (sy = 1, Uc = typeof Reflect < "u" && Reflect && Reflect.apply), Uc;
}
var jc, cy;
function wv() {
  if (cy) return jc;
  cy = 1;
  var n = Uo(), r = fp(), i = cp(), a = Rx();
  return jc = a || n.call(i, r), jc;
}
var Wc, fy;
function lp() {
  if (fy) return Wc;
  fy = 1;
  var n = Uo(), r = /* @__PURE__ */ ko(), i = cp(), a = wv();
  return Wc = function(c) {
    if (c.length < 1 || typeof c[0] != "function")
      throw new r("a function is required");
    return a(n, i, c);
  }, Wc;
}
var Yc, ly;
function Ox() {
  if (ly) return Yc;
  ly = 1;
  var n = lp(), r = /* @__PURE__ */ qi(), i;
  try {
    i = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (f) {
    if (!f || typeof f != "object" || !("code" in f) || f.code !== "ERR_PROTO_ACCESS")
      throw f;
  }
  var a = !!i && r && r(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), u = Object, c = u.getPrototypeOf;
  return Yc = a && typeof a.get == "function" ? n([a.get]) : typeof c == "function" ? (
    /** @type {import('./get')} */
    function(p) {
      return c(p == null ? p : u(p));
    }
  ) : !1, Yc;
}
var zc, py;
function pp() {
  if (py) return zc;
  py = 1;
  var n = mv(), r = _v(), i = /* @__PURE__ */ Ox();
  return zc = n ? function(u) {
    return n(u);
  } : r ? function(u) {
    if (!u || typeof u != "object" && typeof u != "function")
      throw new TypeError("getProto: not an object");
    return r(u);
  } : i ? function(u) {
    return i(u);
  } : null, zc;
}
var $c, hy;
function bv() {
  if (hy) return $c;
  hy = 1;
  var n = Function.prototype.call, r = Object.prototype.hasOwnProperty, i = Uo();
  return $c = i.call(n, r), $c;
}
var Gc, dy;
function Ev() {
  if (dy) return Gc;
  dy = 1;
  var n, r = /* @__PURE__ */ yv(), i = /* @__PURE__ */ lx(), a = /* @__PURE__ */ px(), u = /* @__PURE__ */ hx(), c = /* @__PURE__ */ dx(), f = /* @__PURE__ */ vv(), p = /* @__PURE__ */ ko(), h = /* @__PURE__ */ gx(), g = /* @__PURE__ */ yx(), m = /* @__PURE__ */ vx(), v = /* @__PURE__ */ mx(), w = /* @__PURE__ */ _x(), P = /* @__PURE__ */ wx(), E = /* @__PURE__ */ bx(), x = /* @__PURE__ */ Ax(), B = Function, A = function(Q) {
    try {
      return B('"use strict"; return (' + Q + ").constructor;")();
    } catch {
    }
  }, R = /* @__PURE__ */ qi(), D = /* @__PURE__ */ Pu(), S = function() {
    throw new p();
  }, M = R ? (function() {
    try {
      return arguments.callee, S;
    } catch {
      try {
        return R(arguments, "callee").get;
      } catch {
        return S;
      }
    }
  })() : S, L = Ix()(), q = pp(), $ = _v(), H = mv(), J = fp(), ce = cp(), we = {}, Le = typeof Uint8Array > "u" || !q ? n : q(Uint8Array), Fe = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? n : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? n : ArrayBuffer,
    "%ArrayIteratorPrototype%": L && q ? q([][Symbol.iterator]()) : n,
    "%AsyncFromSyncIteratorPrototype%": n,
    "%AsyncFunction%": we,
    "%AsyncGenerator%": we,
    "%AsyncGeneratorFunction%": we,
    "%AsyncIteratorPrototype%": we,
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
    // eslint-disable-line no-eval
    "%EvalError%": a,
    "%Float16Array%": typeof Float16Array > "u" ? n : Float16Array,
    "%Float32Array%": typeof Float32Array > "u" ? n : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? n : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? n : FinalizationRegistry,
    "%Function%": B,
    "%GeneratorFunction%": we,
    "%Int8Array%": typeof Int8Array > "u" ? n : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? n : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? n : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": L && q ? q(q([][Symbol.iterator]())) : n,
    "%JSON%": typeof JSON == "object" ? JSON : n,
    "%Map%": typeof Map > "u" ? n : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !L || !q ? n : q((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": r,
    "%Object.getOwnPropertyDescriptor%": R,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? n : Promise,
    "%Proxy%": typeof Proxy > "u" ? n : Proxy,
    "%RangeError%": u,
    "%ReferenceError%": c,
    "%Reflect%": typeof Reflect > "u" ? n : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? n : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !L || !q ? n : q((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? n : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": L && q ? q(""[Symbol.iterator]()) : n,
    "%Symbol%": L ? Symbol : n,
    "%SyntaxError%": f,
    "%ThrowTypeError%": M,
    "%TypedArray%": Le,
    "%TypeError%": p,
    "%Uint8Array%": typeof Uint8Array > "u" ? n : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? n : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? n : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? n : Uint32Array,
    "%URIError%": h,
    "%WeakMap%": typeof WeakMap > "u" ? n : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? n : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? n : WeakSet,
    "%Function.prototype.call%": ce,
    "%Function.prototype.apply%": J,
    "%Object.defineProperty%": D,
    "%Object.getPrototypeOf%": $,
    "%Math.abs%": g,
    "%Math.floor%": m,
    "%Math.max%": v,
    "%Math.min%": w,
    "%Math.pow%": P,
    "%Math.round%": E,
    "%Math.sign%": x,
    "%Reflect.getPrototypeOf%": H
  };
  if (q)
    try {
      null.error;
    } catch (Q) {
      var Sn = q(q(Q));
      Fe["%Error.prototype%"] = Sn;
    }
  var In = function Q(ee) {
    var ge;
    if (ee === "%AsyncFunction%")
      ge = A("async function () {}");
    else if (ee === "%GeneratorFunction%")
      ge = A("function* () {}");
    else if (ee === "%AsyncGeneratorFunction%")
      ge = A("async function* () {}");
    else if (ee === "%AsyncGenerator%") {
      var _e = Q("%AsyncGeneratorFunction%");
      _e && (ge = _e.prototype);
    } else if (ee === "%AsyncIteratorPrototype%") {
      var Be = Q("%AsyncGenerator%");
      Be && q && (ge = q(Be.prototype));
    }
    return Fe[ee] = ge, ge;
  }, Ve = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
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
  }, De = Uo(), ze = /* @__PURE__ */ bv(), tn = De.call(ce, Array.prototype.concat), k = De.call(J, Array.prototype.splice), T = De.call(ce, String.prototype.replace), N = De.call(ce, String.prototype.slice), W = De.call(ce, RegExp.prototype.exec), X = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, se = /\\(\\)?/g, ne = function(ee) {
    var ge = N(ee, 0, 1), _e = N(ee, -1);
    if (ge === "%" && _e !== "%")
      throw new f("invalid intrinsic syntax, expected closing `%`");
    if (_e === "%" && ge !== "%")
      throw new f("invalid intrinsic syntax, expected opening `%`");
    var Be = [];
    return T(ee, X, function(Ae, Je, $e, rn) {
      Be[Be.length] = $e ? T(rn, se, "$1") : Je || Ae;
    }), Be;
  }, te = function(ee, ge) {
    var _e = ee, Be;
    if (ze(Ve, _e) && (Be = Ve[_e], _e = "%" + Be[0] + "%"), ze(Fe, _e)) {
      var Ae = Fe[_e];
      if (Ae === we && (Ae = In(_e)), typeof Ae > "u" && !ge)
        throw new p("intrinsic " + ee + " exists, but is not available. Please file an issue!");
      return {
        alias: Be,
        name: _e,
        value: Ae
      };
    }
    throw new f("intrinsic " + ee + " does not exist!");
  };
  return Gc = function(ee, ge) {
    if (typeof ee != "string" || ee.length === 0)
      throw new p("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof ge != "boolean")
      throw new p('"allowMissing" argument must be a boolean');
    if (W(/^%?[^%]*%?$/, ee) === null)
      throw new f("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var _e = ne(ee), Be = _e.length > 0 ? _e[0] : "", Ae = te("%" + Be + "%", ge), Je = Ae.name, $e = Ae.value, rn = !1, Zt = Ae.alias;
    Zt && (Be = Zt[0], k(_e, tn([0, 1], Zt)));
    for (var Y = 1, Tn = !0; Y < _e.length; Y += 1) {
      var Ue = _e[Y], lt = N(Ue, 0, 1), It = N(Ue, -1);
      if ((lt === '"' || lt === "'" || lt === "`" || It === '"' || It === "'" || It === "`") && lt !== It)
        throw new f("property names with quotes must have matching quotes");
      if ((Ue === "constructor" || !Tn) && (rn = !0), Be += "." + Ue, Je = "%" + Be + "%", ze(Fe, Je))
        $e = Fe[Je];
      else if ($e != null) {
        if (!(Ue in $e)) {
          if (!ge)
            throw new p("base intrinsic for " + ee + " exists, but the property is not available.");
          return;
        }
        if (R && Y + 1 >= _e.length) {
          var Gr = R($e, Ue);
          Tn = !!Gr, Tn && "get" in Gr && !("originalValue" in Gr.get) ? $e = Gr.get : $e = $e[Ue];
        } else
          Tn = ze($e, Ue), $e = $e[Ue];
        Tn && !rn && (Fe[Je] = $e);
      }
    }
    return $e;
  }, Gc;
}
var Zc, gy;
function jo() {
  if (gy) return Zc;
  gy = 1;
  var n = /* @__PURE__ */ Ev(), r = lp(), i = r([n("%String.prototype.indexOf%")]);
  return Zc = function(u, c) {
    var f = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      n(u, !!c)
    );
    return typeof f == "function" && i(u, ".prototype.") > -1 ? r(
      /** @type {const} */
      [f]
    ) : f;
  }, Zc;
}
var Hc, yy;
function xx() {
  if (yy) return Hc;
  yy = 1;
  var n = Mu()(), r = /* @__PURE__ */ jo(), i = r("Object.prototype.toString"), a = function(p) {
    return n && p && typeof p == "object" && Symbol.toStringTag in p ? !1 : i(p) === "[object Arguments]";
  }, u = function(p) {
    return a(p) ? !0 : p !== null && typeof p == "object" && "length" in p && typeof p.length == "number" && p.length >= 0 && i(p) !== "[object Array]" && "callee" in p && i(p.callee) === "[object Function]";
  }, c = (function() {
    return a(arguments);
  })();
  return a.isLegacyArguments = u, Hc = c ? a : u, Hc;
}
var Kc, vy;
function Mx() {
  if (vy) return Kc;
  vy = 1;
  var n = /* @__PURE__ */ jo(), r = Mu()(), i = /* @__PURE__ */ bv(), a = /* @__PURE__ */ qi(), u;
  if (r) {
    var c = n("RegExp.prototype.exec"), f = {}, p = function() {
      throw f;
    }, h = {
      toString: p,
      valueOf: p
    };
    typeof Symbol.toPrimitive == "symbol" && (h[Symbol.toPrimitive] = p), u = function(w) {
      if (!w || typeof w != "object")
        return !1;
      var P = (
        /** @type {NonNullable<typeof gOPD>} */
        a(
          /** @type {{ lastIndex?: unknown }} */
          w,
          "lastIndex"
        )
      ), E = P && i(P, "value");
      if (!E)
        return !1;
      try {
        c(
          w,
          /** @type {string} */
          /** @type {unknown} */
          h
        );
      } catch (x) {
        return x === f;
      }
    };
  } else {
    var g = n("Object.prototype.toString"), m = "[object RegExp]";
    u = function(w) {
      return !w || typeof w != "object" && typeof w != "function" ? !1 : g(w) === m;
    };
  }
  return Kc = u, Kc;
}
var Vc, my;
function Px() {
  if (my) return Vc;
  my = 1;
  var n = /* @__PURE__ */ jo(), r = Mx(), i = n("RegExp.prototype.exec"), a = /* @__PURE__ */ ko();
  return Vc = function(c) {
    if (!r(c))
      throw new a("`regex` must be a RegExp");
    return function(p) {
      return i(c, p) !== null;
    };
  }, Vc;
}
var Jc, _y;
function Cx() {
  if (_y) return Jc;
  _y = 1;
  const n = (
    /** @type {GeneratorFunctionConstructor} */
    (function* () {
    }).constructor
  );
  return Jc = () => n, Jc;
}
var Xc, wy;
function Dx() {
  if (wy) return Xc;
  wy = 1;
  var n = /* @__PURE__ */ jo(), r = /* @__PURE__ */ Px(), i = r(/^\s*(?:function)?\*/), a = Mu()(), u = pp(), c = n("Object.prototype.toString"), f = n("Function.prototype.toString"), p = /* @__PURE__ */ Cx();
  return Xc = function(g) {
    if (typeof g != "function")
      return !1;
    if (i(f(g)))
      return !0;
    if (!a) {
      var m = c(g);
      return m === "[object GeneratorFunction]";
    }
    if (!u)
      return !1;
    var v = p();
    return v && u(g) === v.prototype;
  }, Xc;
}
var Qc, by;
function Nx() {
  if (by) return Qc;
  by = 1;
  var n = Function.prototype.toString, r = typeof Reflect == "object" && Reflect !== null && Reflect.apply, i, a;
  if (typeof r == "function" && typeof Object.defineProperty == "function")
    try {
      i = Object.defineProperty({}, "length", {
        get: function() {
          throw a;
        }
      }), a = {}, r(function() {
        throw 42;
      }, null, i);
    } catch (R) {
      R !== a && (r = null);
    }
  else
    r = null;
  var u = /^\s*class\b/, c = function(D) {
    try {
      var S = n.call(D);
      return u.test(S);
    } catch {
      return !1;
    }
  }, f = function(D) {
    try {
      return c(D) ? !1 : (n.call(D), !0);
    } catch {
      return !1;
    }
  }, p = Object.prototype.toString, h = "[object Object]", g = "[object Function]", m = "[object GeneratorFunction]", v = "[object HTMLAllCollection]", w = "[object HTML document.all class]", P = "[object HTMLCollection]", E = typeof Symbol == "function" && !!Symbol.toStringTag, x = !(0 in [,]), B = function() {
    return !1;
  };
  if (typeof document == "object") {
    var A = document.all;
    p.call(A) === p.call(document.all) && (B = function(D) {
      if ((x || !D) && (typeof D > "u" || typeof D == "object"))
        try {
          var S = p.call(D);
          return (S === v || S === w || S === P || S === h) && D("") == null;
        } catch {
        }
      return !1;
    });
  }
  return Qc = r ? function(D) {
    if (B(D))
      return !0;
    if (!D || typeof D != "function" && typeof D != "object")
      return !1;
    try {
      r(D, null, i);
    } catch (S) {
      if (S !== a)
        return !1;
    }
    return !c(D) && f(D);
  } : function(D) {
    if (B(D))
      return !0;
    if (!D || typeof D != "function" && typeof D != "object")
      return !1;
    if (E)
      return f(D);
    if (c(D))
      return !1;
    var S = p.call(D);
    return S !== g && S !== m && !/^\[object HTML/.test(S) ? !1 : f(D);
  }, Qc;
}
var ef, Ey;
function Lx() {
  if (Ey) return ef;
  Ey = 1;
  var n = Nx(), r = Object.prototype.toString, i = Object.prototype.hasOwnProperty, a = function(h, g, m) {
    for (var v = 0, w = h.length; v < w; v++)
      i.call(h, v) && (m == null ? g(h[v], v, h) : g.call(m, h[v], v, h));
  }, u = function(h, g, m) {
    for (var v = 0, w = h.length; v < w; v++)
      m == null ? g(h.charAt(v), v, h) : g.call(m, h.charAt(v), v, h);
  }, c = function(h, g, m) {
    for (var v in h)
      i.call(h, v) && (m == null ? g(h[v], v, h) : g.call(m, h[v], v, h));
  };
  function f(p) {
    return r.call(p) === "[object Array]";
  }
  return ef = function(h, g, m) {
    if (!n(g))
      throw new TypeError("iterator must be a function");
    var v;
    arguments.length >= 3 && (v = m), f(h) ? a(h, g, v) : typeof h == "string" ? u(h, g, v) : c(h, g, v);
  }, ef;
}
var nf, Ay;
function Fx() {
  return Ay || (Ay = 1, nf = [
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
  ]), nf;
}
var tf, Sy;
function Bx() {
  if (Sy) return tf;
  Sy = 1;
  var n = /* @__PURE__ */ Fx(), r = typeof globalThis > "u" ? vi : globalThis;
  return tf = function() {
    for (var a = [], u = 0; u < n.length; u++)
      typeof r[n[u]] == "function" && (a[a.length] = n[u]);
    return a;
  }, tf;
}
var rf = { exports: {} }, of, Iy;
function qx() {
  if (Iy) return of;
  Iy = 1;
  var n = /* @__PURE__ */ Pu(), r = /* @__PURE__ */ vv(), i = /* @__PURE__ */ ko(), a = /* @__PURE__ */ qi();
  return of = function(c, f, p) {
    if (!c || typeof c != "object" && typeof c != "function")
      throw new i("`obj` must be an object or a function`");
    if (typeof f != "string" && typeof f != "symbol")
      throw new i("`property` must be a string or a symbol`");
    if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
      throw new i("`nonEnumerable`, if provided, must be a boolean or null");
    if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
      throw new i("`nonWritable`, if provided, must be a boolean or null");
    if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
      throw new i("`nonConfigurable`, if provided, must be a boolean or null");
    if (arguments.length > 6 && typeof arguments[6] != "boolean")
      throw new i("`loose`, if provided, must be a boolean");
    var h = arguments.length > 3 ? arguments[3] : null, g = arguments.length > 4 ? arguments[4] : null, m = arguments.length > 5 ? arguments[5] : null, v = arguments.length > 6 ? arguments[6] : !1, w = !!a && a(c, f);
    if (n)
      n(c, f, {
        configurable: m === null && w ? w.configurable : !m,
        enumerable: h === null && w ? w.enumerable : !h,
        value: p,
        writable: g === null && w ? w.writable : !g
      });
    else if (v || !h && !g && !m)
      c[f] = p;
    else
      throw new r("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
  }, of;
}
var af, Ty;
function kx() {
  if (Ty) return af;
  Ty = 1;
  var n = /* @__PURE__ */ Pu(), r = function() {
    return !!n;
  };
  return r.hasArrayLengthDefineBug = function() {
    if (!n)
      return null;
    try {
      return n([], "length", { value: 1 }).length !== 1;
    } catch {
      return !0;
    }
  }, af = r, af;
}
var uf, Ry;
function Ux() {
  if (Ry) return uf;
  Ry = 1;
  var n = /* @__PURE__ */ Ev(), r = /* @__PURE__ */ qx(), i = /* @__PURE__ */ kx()(), a = /* @__PURE__ */ qi(), u = /* @__PURE__ */ ko(), c = n("%Math.floor%");
  return uf = function(p, h) {
    if (typeof p != "function")
      throw new u("`fn` is not a function");
    if (typeof h != "number" || h < 0 || h > 4294967295 || c(h) !== h)
      throw new u("`length` must be a positive 32-bit integer");
    var g = arguments.length > 2 && !!arguments[2], m = !0, v = !0;
    if ("length" in p && a) {
      var w = a(p, "length");
      w && !w.configurable && (m = !1), w && !w.writable && (v = !1);
    }
    return (m || v || !g) && (i ? r(
      /** @type {Parameters<define>[0]} */
      p,
      "length",
      h,
      !0,
      !0
    ) : r(
      /** @type {Parameters<define>[0]} */
      p,
      "length",
      h
    )), p;
  }, uf;
}
var sf, Oy;
function jx() {
  if (Oy) return sf;
  Oy = 1;
  var n = Uo(), r = fp(), i = wv();
  return sf = function() {
    return i(n, r, arguments);
  }, sf;
}
var xy;
function Wx() {
  return xy || (xy = 1, (function(n) {
    var r = /* @__PURE__ */ Ux(), i = /* @__PURE__ */ Pu(), a = lp(), u = jx();
    n.exports = function(f) {
      var p = a(arguments), h = f.length - (arguments.length - 1);
      return r(
        p,
        1 + (h > 0 ? h : 0),
        !0
      );
    }, i ? i(n.exports, "apply", { value: u }) : n.exports.apply = u;
  })(rf)), rf.exports;
}
var cf, My;
function Av() {
  if (My) return cf;
  My = 1;
  var n = Lx(), r = /* @__PURE__ */ Bx(), i = Wx(), a = /* @__PURE__ */ jo(), u = /* @__PURE__ */ qi(), c = pp(), f = a("Object.prototype.toString"), p = Mu()(), h = typeof globalThis > "u" ? vi : globalThis, g = r(), m = a("String.prototype.slice"), v = a("Array.prototype.indexOf", !0) || function(B, A) {
    for (var R = 0; R < B.length; R += 1)
      if (B[R] === A)
        return R;
    return -1;
  }, w = { __proto__: null };
  p && u && c ? n(g, function(x) {
    var B = new h[x]();
    if (Symbol.toStringTag in B && c) {
      var A = c(B), R = u(A, Symbol.toStringTag);
      if (!R && A) {
        var D = c(A);
        R = u(D, Symbol.toStringTag);
      }
      w["$" + x] = i(R.get);
    }
  }) : n(g, function(x) {
    var B = new h[x](), A = B.slice || B.set;
    A && (w[
      /** @type {`$${import('.').TypedArrayName}`} */
      "$" + x
    ] = /** @type {import('./types').BoundSlice | import('./types').BoundSet} */
    // @ts-expect-error TODO FIXME
    i(A));
  });
  var P = function(B) {
    var A = !1;
    return n(
      /** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */
      w,
      /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
      function(R, D) {
        if (!A)
          try {
            "$" + R(B) === D && (A = /** @type {import('.').TypedArrayName} */
            m(D, 1));
          } catch {
          }
      }
    ), A;
  }, E = function(B) {
    var A = !1;
    return n(
      /** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */
      w,
      /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
      function(R, D) {
        if (!A)
          try {
            R(B), A = /** @type {import('.').TypedArrayName} */
            m(D, 1);
          } catch {
          }
      }
    ), A;
  };
  return cf = function(B) {
    if (!B || typeof B != "object")
      return !1;
    if (!p) {
      var A = m(f(B), 8, -1);
      return v(g, A) > -1 ? A : A !== "Object" ? !1 : E(B);
    }
    return u ? P(B) : null;
  }, cf;
}
var ff, Py;
function Yx() {
  if (Py) return ff;
  Py = 1;
  var n = /* @__PURE__ */ Av();
  return ff = function(i) {
    return !!n(i);
  }, ff;
}
var Cy;
function zx() {
  return Cy || (Cy = 1, (function(n) {
    var r = /* @__PURE__ */ xx(), i = Dx(), a = /* @__PURE__ */ Av(), u = /* @__PURE__ */ Yx();
    function c(Y) {
      return Y.call.bind(Y);
    }
    var f = typeof BigInt < "u", p = typeof Symbol < "u", h = c(Object.prototype.toString), g = c(Number.prototype.valueOf), m = c(String.prototype.valueOf), v = c(Boolean.prototype.valueOf);
    if (f)
      var w = c(BigInt.prototype.valueOf);
    if (p)
      var P = c(Symbol.prototype.valueOf);
    function E(Y, Tn) {
      if (typeof Y != "object")
        return !1;
      try {
        return Tn(Y), !0;
      } catch {
        return !1;
      }
    }
    n.isArgumentsObject = r, n.isGeneratorFunction = i, n.isTypedArray = u;
    function x(Y) {
      return typeof Promise < "u" && Y instanceof Promise || Y !== null && typeof Y == "object" && typeof Y.then == "function" && typeof Y.catch == "function";
    }
    n.isPromise = x;
    function B(Y) {
      return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(Y) : u(Y) || N(Y);
    }
    n.isArrayBufferView = B;
    function A(Y) {
      return a(Y) === "Uint8Array";
    }
    n.isUint8Array = A;
    function R(Y) {
      return a(Y) === "Uint8ClampedArray";
    }
    n.isUint8ClampedArray = R;
    function D(Y) {
      return a(Y) === "Uint16Array";
    }
    n.isUint16Array = D;
    function S(Y) {
      return a(Y) === "Uint32Array";
    }
    n.isUint32Array = S;
    function M(Y) {
      return a(Y) === "Int8Array";
    }
    n.isInt8Array = M;
    function L(Y) {
      return a(Y) === "Int16Array";
    }
    n.isInt16Array = L;
    function q(Y) {
      return a(Y) === "Int32Array";
    }
    n.isInt32Array = q;
    function $(Y) {
      return a(Y) === "Float32Array";
    }
    n.isFloat32Array = $;
    function H(Y) {
      return a(Y) === "Float64Array";
    }
    n.isFloat64Array = H;
    function J(Y) {
      return a(Y) === "BigInt64Array";
    }
    n.isBigInt64Array = J;
    function ce(Y) {
      return a(Y) === "BigUint64Array";
    }
    n.isBigUint64Array = ce;
    function we(Y) {
      return h(Y) === "[object Map]";
    }
    we.working = typeof Map < "u" && we(/* @__PURE__ */ new Map());
    function Le(Y) {
      return typeof Map > "u" ? !1 : we.working ? we(Y) : Y instanceof Map;
    }
    n.isMap = Le;
    function Fe(Y) {
      return h(Y) === "[object Set]";
    }
    Fe.working = typeof Set < "u" && Fe(/* @__PURE__ */ new Set());
    function Sn(Y) {
      return typeof Set > "u" ? !1 : Fe.working ? Fe(Y) : Y instanceof Set;
    }
    n.isSet = Sn;
    function In(Y) {
      return h(Y) === "[object WeakMap]";
    }
    In.working = typeof WeakMap < "u" && In(/* @__PURE__ */ new WeakMap());
    function Ve(Y) {
      return typeof WeakMap > "u" ? !1 : In.working ? In(Y) : Y instanceof WeakMap;
    }
    n.isWeakMap = Ve;
    function De(Y) {
      return h(Y) === "[object WeakSet]";
    }
    De.working = typeof WeakSet < "u" && De(/* @__PURE__ */ new WeakSet());
    function ze(Y) {
      return De(Y);
    }
    n.isWeakSet = ze;
    function tn(Y) {
      return h(Y) === "[object ArrayBuffer]";
    }
    tn.working = typeof ArrayBuffer < "u" && tn(new ArrayBuffer());
    function k(Y) {
      return typeof ArrayBuffer > "u" ? !1 : tn.working ? tn(Y) : Y instanceof ArrayBuffer;
    }
    n.isArrayBuffer = k;
    function T(Y) {
      return h(Y) === "[object DataView]";
    }
    T.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && T(new DataView(new ArrayBuffer(1), 0, 1));
    function N(Y) {
      return typeof DataView > "u" ? !1 : T.working ? T(Y) : Y instanceof DataView;
    }
    n.isDataView = N;
    var W = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
    function X(Y) {
      return h(Y) === "[object SharedArrayBuffer]";
    }
    function se(Y) {
      return typeof W > "u" ? !1 : (typeof X.working > "u" && (X.working = X(new W())), X.working ? X(Y) : Y instanceof W);
    }
    n.isSharedArrayBuffer = se;
    function ne(Y) {
      return h(Y) === "[object AsyncFunction]";
    }
    n.isAsyncFunction = ne;
    function te(Y) {
      return h(Y) === "[object Map Iterator]";
    }
    n.isMapIterator = te;
    function Q(Y) {
      return h(Y) === "[object Set Iterator]";
    }
    n.isSetIterator = Q;
    function ee(Y) {
      return h(Y) === "[object Generator]";
    }
    n.isGeneratorObject = ee;
    function ge(Y) {
      return h(Y) === "[object WebAssembly.Module]";
    }
    n.isWebAssemblyCompiledModule = ge;
    function _e(Y) {
      return E(Y, g);
    }
    n.isNumberObject = _e;
    function Be(Y) {
      return E(Y, m);
    }
    n.isStringObject = Be;
    function Ae(Y) {
      return E(Y, v);
    }
    n.isBooleanObject = Ae;
    function Je(Y) {
      return f && E(Y, w);
    }
    n.isBigIntObject = Je;
    function $e(Y) {
      return p && E(Y, P);
    }
    n.isSymbolObject = $e;
    function rn(Y) {
      return _e(Y) || Be(Y) || Ae(Y) || Je(Y) || $e(Y);
    }
    n.isBoxedPrimitive = rn;
    function Zt(Y) {
      return typeof Uint8Array < "u" && (k(Y) || se(Y));
    }
    n.isAnyArrayBuffer = Zt, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(Y) {
      Object.defineProperty(n, Y, {
        enumerable: !1,
        value: function() {
          throw new Error(Y + " is not supported in userland");
        }
      });
    });
  })(lc)), lc;
}
var lf, Dy;
function $x() {
  return Dy || (Dy = 1, lf = function(r) {
    return r && typeof r == "object" && typeof r.copy == "function" && typeof r.fill == "function" && typeof r.readUInt8 == "function";
  }), lf;
}
var Fa = { exports: {} }, Ny;
function Gx() {
  return Ny || (Ny = 1, typeof Object.create == "function" ? Fa.exports = function(r, i) {
    i && (r.super_ = i, r.prototype = Object.create(i.prototype, {
      constructor: {
        value: r,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }));
  } : Fa.exports = function(r, i) {
    if (i) {
      r.super_ = i;
      var a = function() {
      };
      a.prototype = i.prototype, r.prototype = new a(), r.prototype.constructor = r;
    }
  }), Fa.exports;
}
var Ly;
function Fy() {
  return Ly || (Ly = 1, (function(n) {
    var r = Object.getOwnPropertyDescriptors || function(N) {
      for (var W = Object.keys(N), X = {}, se = 0; se < W.length; se++)
        X[W[se]] = Object.getOwnPropertyDescriptor(N, W[se]);
      return X;
    }, i = /%[sdj%]/g;
    n.format = function(T) {
      if (!M(T)) {
        for (var N = [], W = 0; W < arguments.length; W++)
          N.push(f(arguments[W]));
        return N.join(" ");
      }
      for (var W = 1, X = arguments, se = X.length, ne = String(T).replace(i, function(Q) {
        if (Q === "%%") return "%";
        if (W >= se) return Q;
        switch (Q) {
          case "%s":
            return String(X[W++]);
          case "%d":
            return Number(X[W++]);
          case "%j":
            try {
              return JSON.stringify(X[W++]);
            } catch {
              return "[Circular]";
            }
          default:
            return Q;
        }
      }), te = X[W]; W < se; te = X[++W])
        R(te) || !H(te) ? ne += " " + te : ne += " " + f(te);
      return ne;
    }, n.deprecate = function(T, N) {
      if (typeof process < "u" && process.noDeprecation === !0)
        return T;
      if (typeof process > "u")
        return function() {
          return n.deprecate(T, N).apply(this, arguments);
        };
      var W = !1;
      function X() {
        if (!W) {
          if (process.throwDeprecation)
            throw new Error(N);
          process.traceDeprecation ? console.trace(N) : console.error(N), W = !0;
        }
        return T.apply(this, arguments);
      }
      return X;
    };
    var a = {}, u = /^$/;
    if (process.env.NODE_DEBUG) {
      var c = process.env.NODE_DEBUG;
      c = c.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), u = new RegExp("^" + c + "$", "i");
    }
    n.debuglog = function(T) {
      if (T = T.toUpperCase(), !a[T])
        if (u.test(T)) {
          var N = process.pid;
          a[T] = function() {
            var W = n.format.apply(n, arguments);
            console.error("%s %d: %s", T, N, W);
          };
        } else
          a[T] = function() {
          };
      return a[T];
    };
    function f(T, N) {
      var W = {
        seen: [],
        stylize: h
      };
      return arguments.length >= 3 && (W.depth = arguments[2]), arguments.length >= 4 && (W.colors = arguments[3]), A(N) ? W.showHidden = N : N && n._extend(W, N), q(W.showHidden) && (W.showHidden = !1), q(W.depth) && (W.depth = 2), q(W.colors) && (W.colors = !1), q(W.customInspect) && (W.customInspect = !0), W.colors && (W.stylize = p), m(W, T, W.depth);
    }
    n.inspect = f, f.colors = {
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
    }, f.styles = {
      special: "cyan",
      number: "yellow",
      boolean: "yellow",
      undefined: "grey",
      null: "bold",
      string: "green",
      date: "magenta",
      // "name": intentionally not styling
      regexp: "red"
    };
    function p(T, N) {
      var W = f.styles[N];
      return W ? "\x1B[" + f.colors[W][0] + "m" + T + "\x1B[" + f.colors[W][1] + "m" : T;
    }
    function h(T, N) {
      return T;
    }
    function g(T) {
      var N = {};
      return T.forEach(function(W, X) {
        N[W] = !0;
      }), N;
    }
    function m(T, N, W) {
      if (T.customInspect && N && we(N.inspect) && // Filter out the util module, it's inspect function is special
      N.inspect !== n.inspect && // Also filter out any prototype objects using the circular check.
      !(N.constructor && N.constructor.prototype === N)) {
        var X = N.inspect(W, T);
        return M(X) || (X = m(T, X, W)), X;
      }
      var se = v(T, N);
      if (se)
        return se;
      var ne = Object.keys(N), te = g(ne);
      if (T.showHidden && (ne = Object.getOwnPropertyNames(N)), ce(N) && (ne.indexOf("message") >= 0 || ne.indexOf("description") >= 0))
        return w(N);
      if (ne.length === 0) {
        if (we(N)) {
          var Q = N.name ? ": " + N.name : "";
          return T.stylize("[Function" + Q + "]", "special");
        }
        if ($(N))
          return T.stylize(RegExp.prototype.toString.call(N), "regexp");
        if (J(N))
          return T.stylize(Date.prototype.toString.call(N), "date");
        if (ce(N))
          return w(N);
      }
      var ee = "", ge = !1, _e = ["{", "}"];
      if (B(N) && (ge = !0, _e = ["[", "]"]), we(N)) {
        var Be = N.name ? ": " + N.name : "";
        ee = " [Function" + Be + "]";
      }
      if ($(N) && (ee = " " + RegExp.prototype.toString.call(N)), J(N) && (ee = " " + Date.prototype.toUTCString.call(N)), ce(N) && (ee = " " + w(N)), ne.length === 0 && (!ge || N.length == 0))
        return _e[0] + ee + _e[1];
      if (W < 0)
        return $(N) ? T.stylize(RegExp.prototype.toString.call(N), "regexp") : T.stylize("[Object]", "special");
      T.seen.push(N);
      var Ae;
      return ge ? Ae = P(T, N, W, te, ne) : Ae = ne.map(function(Je) {
        return E(T, N, W, te, Je, ge);
      }), T.seen.pop(), x(Ae, ee, _e);
    }
    function v(T, N) {
      if (q(N))
        return T.stylize("undefined", "undefined");
      if (M(N)) {
        var W = "'" + JSON.stringify(N).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return T.stylize(W, "string");
      }
      if (S(N))
        return T.stylize("" + N, "number");
      if (A(N))
        return T.stylize("" + N, "boolean");
      if (R(N))
        return T.stylize("null", "null");
    }
    function w(T) {
      return "[" + Error.prototype.toString.call(T) + "]";
    }
    function P(T, N, W, X, se) {
      for (var ne = [], te = 0, Q = N.length; te < Q; ++te)
        De(N, String(te)) ? ne.push(E(
          T,
          N,
          W,
          X,
          String(te),
          !0
        )) : ne.push("");
      return se.forEach(function(ee) {
        ee.match(/^\d+$/) || ne.push(E(
          T,
          N,
          W,
          X,
          ee,
          !0
        ));
      }), ne;
    }
    function E(T, N, W, X, se, ne) {
      var te, Q, ee;
      if (ee = Object.getOwnPropertyDescriptor(N, se) || { value: N[se] }, ee.get ? ee.set ? Q = T.stylize("[Getter/Setter]", "special") : Q = T.stylize("[Getter]", "special") : ee.set && (Q = T.stylize("[Setter]", "special")), De(X, se) || (te = "[" + se + "]"), Q || (T.seen.indexOf(ee.value) < 0 ? (R(W) ? Q = m(T, ee.value, null) : Q = m(T, ee.value, W - 1), Q.indexOf(`
`) > -1 && (ne ? Q = Q.split(`
`).map(function(ge) {
        return "  " + ge;
      }).join(`
`).slice(2) : Q = `
` + Q.split(`
`).map(function(ge) {
        return "   " + ge;
      }).join(`
`))) : Q = T.stylize("[Circular]", "special")), q(te)) {
        if (ne && se.match(/^\d+$/))
          return Q;
        te = JSON.stringify("" + se), te.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (te = te.slice(1, -1), te = T.stylize(te, "name")) : (te = te.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), te = T.stylize(te, "string"));
      }
      return te + ": " + Q;
    }
    function x(T, N, W) {
      var X = T.reduce(function(se, ne) {
        return ne.indexOf(`
`) >= 0, se + ne.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }, 0);
      return X > 60 ? W[0] + (N === "" ? "" : N + `
 `) + " " + T.join(`,
  `) + " " + W[1] : W[0] + N + " " + T.join(", ") + " " + W[1];
    }
    n.types = zx();
    function B(T) {
      return Array.isArray(T);
    }
    n.isArray = B;
    function A(T) {
      return typeof T == "boolean";
    }
    n.isBoolean = A;
    function R(T) {
      return T === null;
    }
    n.isNull = R;
    function D(T) {
      return T == null;
    }
    n.isNullOrUndefined = D;
    function S(T) {
      return typeof T == "number";
    }
    n.isNumber = S;
    function M(T) {
      return typeof T == "string";
    }
    n.isString = M;
    function L(T) {
      return typeof T == "symbol";
    }
    n.isSymbol = L;
    function q(T) {
      return T === void 0;
    }
    n.isUndefined = q;
    function $(T) {
      return H(T) && Fe(T) === "[object RegExp]";
    }
    n.isRegExp = $, n.types.isRegExp = $;
    function H(T) {
      return typeof T == "object" && T !== null;
    }
    n.isObject = H;
    function J(T) {
      return H(T) && Fe(T) === "[object Date]";
    }
    n.isDate = J, n.types.isDate = J;
    function ce(T) {
      return H(T) && (Fe(T) === "[object Error]" || T instanceof Error);
    }
    n.isError = ce, n.types.isNativeError = ce;
    function we(T) {
      return typeof T == "function";
    }
    n.isFunction = we;
    function Le(T) {
      return T === null || typeof T == "boolean" || typeof T == "number" || typeof T == "string" || typeof T == "symbol" || // ES6 symbol
      typeof T > "u";
    }
    n.isPrimitive = Le, n.isBuffer = $x();
    function Fe(T) {
      return Object.prototype.toString.call(T);
    }
    function Sn(T) {
      return T < 10 ? "0" + T.toString(10) : T.toString(10);
    }
    var In = [
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
    function Ve() {
      var T = /* @__PURE__ */ new Date(), N = [
        Sn(T.getHours()),
        Sn(T.getMinutes()),
        Sn(T.getSeconds())
      ].join(":");
      return [T.getDate(), In[T.getMonth()], N].join(" ");
    }
    n.log = function() {
      console.log("%s - %s", Ve(), n.format.apply(n, arguments));
    }, n.inherits = Gx(), n._extend = function(T, N) {
      if (!N || !H(N)) return T;
      for (var W = Object.keys(N), X = W.length; X--; )
        T[W[X]] = N[W[X]];
      return T;
    };
    function De(T, N) {
      return Object.prototype.hasOwnProperty.call(T, N);
    }
    var ze = typeof Symbol < "u" ? /* @__PURE__ */ Symbol("util.promisify.custom") : void 0;
    n.promisify = function(N) {
      if (typeof N != "function")
        throw new TypeError('The "original" argument must be of type Function');
      if (ze && N[ze]) {
        var W = N[ze];
        if (typeof W != "function")
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        return Object.defineProperty(W, ze, {
          value: W,
          enumerable: !1,
          writable: !1,
          configurable: !0
        }), W;
      }
      function W() {
        for (var X, se, ne = new Promise(function(ee, ge) {
          X = ee, se = ge;
        }), te = [], Q = 0; Q < arguments.length; Q++)
          te.push(arguments[Q]);
        te.push(function(ee, ge) {
          ee ? se(ee) : X(ge);
        });
        try {
          N.apply(this, te);
        } catch (ee) {
          se(ee);
        }
        return ne;
      }
      return Object.setPrototypeOf(W, Object.getPrototypeOf(N)), ze && Object.defineProperty(W, ze, {
        value: W,
        enumerable: !1,
        writable: !1,
        configurable: !0
      }), Object.defineProperties(
        W,
        r(N)
      );
    }, n.promisify.custom = ze;
    function tn(T, N) {
      if (!T) {
        var W = new Error("Promise was rejected with a falsy value");
        W.reason = T, T = W;
      }
      return N(T);
    }
    function k(T) {
      if (typeof T != "function")
        throw new TypeError('The "original" argument must be of type Function');
      function N() {
        for (var W = [], X = 0; X < arguments.length; X++)
          W.push(arguments[X]);
        var se = W.pop();
        if (typeof se != "function")
          throw new TypeError("The last argument must be of type Function");
        var ne = this, te = function() {
          return se.apply(ne, arguments);
        };
        T.apply(this, W).then(
          function(Q) {
            process.nextTick(te.bind(null, null, Q));
          },
          function(Q) {
            process.nextTick(tn.bind(null, Q, te));
          }
        );
      }
      return Object.setPrototypeOf(N, Object.getPrototypeOf(T)), Object.defineProperties(
        N,
        r(T)
      ), N;
    }
    n.callbackify = k;
  })(fc)), fc;
}
var pf = {}, By;
function Zx() {
  return By || (By = 1, (function(n) {
    (function() {
      var r = {
        not_type: /[^T]/,
        not_primitive: /[^v]/,
        number: /[diefg]/,
        numeric_arg: /[bcdiefguxX]/,
        json: /[j]/,
        text: /^[^\x25]+/,
        modulo: /^\x25{2}/,
        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
        key: /^([a-z_][a-z_\d]*)/i,
        key_access: /^\.([a-z_][a-z_\d]*)/i,
        index_access: /^\[(\d+)\]/,
        sign: /^[+-]/
      };
      function i(p) {
        return u(f(p), arguments);
      }
      function a(p, h) {
        return i.apply(null, [p].concat(h || []));
      }
      function u(p, h) {
        var g = 1, m = p.length, v, w = "", P, E, x, B, A, R, D, S;
        for (P = 0; P < m; P++)
          if (typeof p[P] == "string")
            w += p[P];
          else if (typeof p[P] == "object") {
            if (x = p[P], x.keys)
              for (v = h[g], E = 0; E < x.keys.length; E++) {
                if (v == null)
                  throw new Error(i('[sprintf] Cannot access property "%s" of undefined value "%s"', x.keys[E], x.keys[E - 1]));
                v = v[x.keys[E]];
              }
            else x.param_no ? v = h[x.param_no] : v = h[g++];
            if (r.not_type.test(x.type) && r.not_primitive.test(x.type) && v instanceof Function && (v = v()), r.numeric_arg.test(x.type) && typeof v != "number" && isNaN(v))
              throw new TypeError(i("[sprintf] expecting number but found %T", v));
            switch (r.number.test(x.type) && (D = v >= 0), x.type) {
              case "b":
                v = parseInt(v, 10).toString(2);
                break;
              case "c":
                v = String.fromCharCode(parseInt(v, 10));
                break;
              case "d":
              case "i":
                v = parseInt(v, 10);
                break;
              case "j":
                v = JSON.stringify(v, null, x.width ? parseInt(x.width) : 0);
                break;
              case "e":
                v = x.precision ? parseFloat(v).toExponential(x.precision) : parseFloat(v).toExponential();
                break;
              case "f":
                v = x.precision ? parseFloat(v).toFixed(x.precision) : parseFloat(v);
                break;
              case "g":
                v = x.precision ? String(Number(v.toPrecision(x.precision))) : parseFloat(v);
                break;
              case "o":
                v = (parseInt(v, 10) >>> 0).toString(8);
                break;
              case "s":
                v = String(v), v = x.precision ? v.substring(0, x.precision) : v;
                break;
              case "t":
                v = String(!!v), v = x.precision ? v.substring(0, x.precision) : v;
                break;
              case "T":
                v = Object.prototype.toString.call(v).slice(8, -1).toLowerCase(), v = x.precision ? v.substring(0, x.precision) : v;
                break;
              case "u":
                v = parseInt(v, 10) >>> 0;
                break;
              case "v":
                v = v.valueOf(), v = x.precision ? v.substring(0, x.precision) : v;
                break;
              case "x":
                v = (parseInt(v, 10) >>> 0).toString(16);
                break;
              case "X":
                v = (parseInt(v, 10) >>> 0).toString(16).toUpperCase();
                break;
            }
            r.json.test(x.type) ? w += v : (r.number.test(x.type) && (!D || x.sign) ? (S = D ? "+" : "-", v = v.toString().replace(r.sign, "")) : S = "", A = x.pad_char ? x.pad_char === "0" ? "0" : x.pad_char.charAt(1) : " ", R = x.width - (S + v).length, B = x.width && R > 0 ? A.repeat(R) : "", w += x.align ? S + v + B : A === "0" ? S + B + v : B + S + v);
          }
        return w;
      }
      var c = /* @__PURE__ */ Object.create(null);
      function f(p) {
        if (c[p])
          return c[p];
        for (var h = p, g, m = [], v = 0; h; ) {
          if ((g = r.text.exec(h)) !== null)
            m.push(g[0]);
          else if ((g = r.modulo.exec(h)) !== null)
            m.push("%");
          else if ((g = r.placeholder.exec(h)) !== null) {
            if (g[2]) {
              v |= 1;
              var w = [], P = g[2], E = [];
              if ((E = r.key.exec(P)) !== null)
                for (w.push(E[1]); (P = P.substring(E[0].length)) !== ""; )
                  if ((E = r.key_access.exec(P)) !== null)
                    w.push(E[1]);
                  else if ((E = r.index_access.exec(P)) !== null)
                    w.push(E[1]);
                  else
                    throw new SyntaxError("[sprintf] failed to parse named argument key");
              else
                throw new SyntaxError("[sprintf] failed to parse named argument key");
              g[2] = w;
            } else
              v |= 2;
            if (v === 3)
              throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
            m.push(
              {
                placeholder: g[0],
                param_no: g[1],
                keys: g[2],
                sign: g[3],
                pad_char: g[4],
                align: g[5],
                width: g[6],
                precision: g[7],
                type: g[8]
              }
            );
          } else
            throw new SyntaxError("[sprintf] unexpected placeholder");
          h = h.substring(g[0].length);
        }
        return c[p] = m;
      }
      n.sprintf = i, n.vsprintf = a, typeof window < "u" && (window.sprintf = i, window.vsprintf = a);
    })();
  })(pf)), pf;
}
var Ba = { exports: {} }, qy;
function Hx() {
  if (qy) return Ba.exports;
  qy = 1;
  var n = typeof Reflect == "object" ? Reflect : null, r = n && typeof n.apply == "function" ? n.apply : function(M, L, q) {
    return Function.prototype.apply.call(M, L, q);
  }, i;
  n && typeof n.ownKeys == "function" ? i = n.ownKeys : Object.getOwnPropertySymbols ? i = function(M) {
    return Object.getOwnPropertyNames(M).concat(Object.getOwnPropertySymbols(M));
  } : i = function(M) {
    return Object.getOwnPropertyNames(M);
  };
  function a(S) {
    console && console.warn && console.warn(S);
  }
  var u = Number.isNaN || function(M) {
    return M !== M;
  };
  function c() {
    c.init.call(this);
  }
  Ba.exports = c, Ba.exports.once = A, c.EventEmitter = c, c.prototype._events = void 0, c.prototype._eventsCount = 0, c.prototype._maxListeners = void 0;
  var f = 10;
  function p(S) {
    if (typeof S != "function")
      throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof S);
  }
  Object.defineProperty(c, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
      return f;
    },
    set: function(S) {
      if (typeof S != "number" || S < 0 || u(S))
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + S + ".");
      f = S;
    }
  }), c.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, c.prototype.setMaxListeners = function(M) {
    if (typeof M != "number" || M < 0 || u(M))
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + M + ".");
    return this._maxListeners = M, this;
  };
  function h(S) {
    return S._maxListeners === void 0 ? c.defaultMaxListeners : S._maxListeners;
  }
  c.prototype.getMaxListeners = function() {
    return h(this);
  }, c.prototype.emit = function(M) {
    for (var L = [], q = 1; q < arguments.length; q++) L.push(arguments[q]);
    var $ = M === "error", H = this._events;
    if (H !== void 0)
      $ = $ && H.error === void 0;
    else if (!$)
      return !1;
    if ($) {
      var J;
      if (L.length > 0 && (J = L[0]), J instanceof Error)
        throw J;
      var ce = new Error("Unhandled error." + (J ? " (" + J.message + ")" : ""));
      throw ce.context = J, ce;
    }
    var we = H[M];
    if (we === void 0)
      return !1;
    if (typeof we == "function")
      r(we, this, L);
    else
      for (var Le = we.length, Fe = E(we, Le), q = 0; q < Le; ++q)
        r(Fe[q], this, L);
    return !0;
  };
  function g(S, M, L, q) {
    var $, H, J;
    if (p(L), H = S._events, H === void 0 ? (H = S._events = /* @__PURE__ */ Object.create(null), S._eventsCount = 0) : (H.newListener !== void 0 && (S.emit(
      "newListener",
      M,
      L.listener ? L.listener : L
    ), H = S._events), J = H[M]), J === void 0)
      J = H[M] = L, ++S._eventsCount;
    else if (typeof J == "function" ? J = H[M] = q ? [L, J] : [J, L] : q ? J.unshift(L) : J.push(L), $ = h(S), $ > 0 && J.length > $ && !J.warned) {
      J.warned = !0;
      var ce = new Error("Possible EventEmitter memory leak detected. " + J.length + " " + String(M) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      ce.name = "MaxListenersExceededWarning", ce.emitter = S, ce.type = M, ce.count = J.length, a(ce);
    }
    return S;
  }
  c.prototype.addListener = function(M, L) {
    return g(this, M, L, !1);
  }, c.prototype.on = c.prototype.addListener, c.prototype.prependListener = function(M, L) {
    return g(this, M, L, !0);
  };
  function m() {
    if (!this.fired)
      return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  function v(S, M, L) {
    var q = { fired: !1, wrapFn: void 0, target: S, type: M, listener: L }, $ = m.bind(q);
    return $.listener = L, q.wrapFn = $, $;
  }
  c.prototype.once = function(M, L) {
    return p(L), this.on(M, v(this, M, L)), this;
  }, c.prototype.prependOnceListener = function(M, L) {
    return p(L), this.prependListener(M, v(this, M, L)), this;
  }, c.prototype.removeListener = function(M, L) {
    var q, $, H, J, ce;
    if (p(L), $ = this._events, $ === void 0)
      return this;
    if (q = $[M], q === void 0)
      return this;
    if (q === L || q.listener === L)
      --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete $[M], $.removeListener && this.emit("removeListener", M, q.listener || L));
    else if (typeof q != "function") {
      for (H = -1, J = q.length - 1; J >= 0; J--)
        if (q[J] === L || q[J].listener === L) {
          ce = q[J].listener, H = J;
          break;
        }
      if (H < 0)
        return this;
      H === 0 ? q.shift() : x(q, H), q.length === 1 && ($[M] = q[0]), $.removeListener !== void 0 && this.emit("removeListener", M, ce || L);
    }
    return this;
  }, c.prototype.off = c.prototype.removeListener, c.prototype.removeAllListeners = function(M) {
    var L, q, $;
    if (q = this._events, q === void 0)
      return this;
    if (q.removeListener === void 0)
      return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : q[M] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete q[M]), this;
    if (arguments.length === 0) {
      var H = Object.keys(q), J;
      for ($ = 0; $ < H.length; ++$)
        J = H[$], J !== "removeListener" && this.removeAllListeners(J);
      return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
    }
    if (L = q[M], typeof L == "function")
      this.removeListener(M, L);
    else if (L !== void 0)
      for ($ = L.length - 1; $ >= 0; $--)
        this.removeListener(M, L[$]);
    return this;
  };
  function w(S, M, L) {
    var q = S._events;
    if (q === void 0)
      return [];
    var $ = q[M];
    return $ === void 0 ? [] : typeof $ == "function" ? L ? [$.listener || $] : [$] : L ? B($) : E($, $.length);
  }
  c.prototype.listeners = function(M) {
    return w(this, M, !0);
  }, c.prototype.rawListeners = function(M) {
    return w(this, M, !1);
  }, c.listenerCount = function(S, M) {
    return typeof S.listenerCount == "function" ? S.listenerCount(M) : P.call(S, M);
  }, c.prototype.listenerCount = P;
  function P(S) {
    var M = this._events;
    if (M !== void 0) {
      var L = M[S];
      if (typeof L == "function")
        return 1;
      if (L !== void 0)
        return L.length;
    }
    return 0;
  }
  c.prototype.eventNames = function() {
    return this._eventsCount > 0 ? i(this._events) : [];
  };
  function E(S, M) {
    for (var L = new Array(M), q = 0; q < M; ++q)
      L[q] = S[q];
    return L;
  }
  function x(S, M) {
    for (; M + 1 < S.length; M++)
      S[M] = S[M + 1];
    S.pop();
  }
  function B(S) {
    for (var M = new Array(S.length), L = 0; L < M.length; ++L)
      M[L] = S[L].listener || S[L];
    return M;
  }
  function A(S, M) {
    return new Promise(function(L, q) {
      function $(J) {
        S.removeListener(M, H), q(J);
      }
      function H() {
        typeof S.removeListener == "function" && S.removeListener("error", $), L([].slice.call(arguments));
      }
      D(S, M, H, { once: !0 }), M !== "error" && R(S, $, { once: !0 });
    });
  }
  function R(S, M, L) {
    typeof S.on == "function" && D(S, "error", M, L);
  }
  function D(S, M, L, q) {
    if (typeof S.on == "function")
      q.once ? S.once(M, L) : S.on(M, L);
    else if (typeof S.addEventListener == "function")
      S.addEventListener(M, function $(H) {
        q.once && S.removeEventListener(M, $), L(H);
      });
    else
      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof S);
  }
  return Ba.exports;
}
var hf, ky;
function Kx() {
  if (ky) return hf;
  ky = 1;
  var n = [].indexOf;
  return hf = function(r, i) {
    if (n) return r.indexOf(i);
    for (var a = 0; a < r.length; ++a)
      if (r[a] === i) return a;
    return -1;
  }, hf;
}
var df, Uy;
function Vx() {
  if (Uy) return df;
  Uy = 1;
  var n = Array.prototype, r = n.concat, i = n.slice, a = Kx();
  function u(c) {
    var f = {}, p = r.apply(n, i.call(arguments, 1));
    for (var h in c)
      a(p, h) === -1 && (f[h] = c[h]);
    return f;
  }
  return df = u, df;
}
var gf, jy;
function Sv() {
  return jy || (jy = 1, gf = {
    __locale: "en",
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    abbreviated_days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    abbreviated_months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    am: "AM",
    pm: "PM"
  }), gf;
}
var yf, Wy;
function Jx() {
  return Wy || (Wy = 1, yf = Sv()), yf;
}
var vf, Yy;
function Xx() {
  if (Yy) return vf;
  Yy = 1;
  var n = Jx();
  function r(f, p, h) {
    var g = f.getTime();
    return h = h || n, p.replace(/%([-_0]?.)/g, function(m, v) {
      var w = null;
      if (v.length == 2) {
        switch (v[0]) {
          case "-":
            w = "";
            break;
          case "_":
            w = " ";
            break;
          case "0":
            w = "0";
            break;
          default:
            return m;
        }
        v = v[1];
      }
      switch (v) {
        case "A":
          return h.days[f.getDay()];
        case "a":
          return h.abbreviated_days[f.getDay()];
        case "B":
          return h.months[f.getMonth()];
        case "b":
          return h.abbreviated_months[f.getMonth()];
        case "C":
          return i(Math.floor(f.getFullYear() / 100), w);
        case "D":
          return r(f, "%m/%d/%y");
        case "d":
          return i(f.getDate(), w);
        case "e":
          return f.getDate();
        case "F":
          return r(f, "%Y-%m-%d");
        case "H":
          return i(f.getHours(), w);
        case "h":
          return h.abbreviated_months[f.getMonth()];
        case "I":
          return i(a(f), w);
        case "j":
          return i(Math.ceil((f.getTime() - new Date(f.getFullYear(), 0, 1).getTime()) / (1e3 * 60 * 60 * 24)), 3);
        case "k":
          return i(f.getHours(), w === null ? " " : w);
        case "L":
          return i(Math.floor(g % 1e3), 3);
        case "l":
          return i(a(f), w === null ? " " : w);
        case "M":
          return i(f.getMinutes(), w);
        case "m":
          return i(f.getMonth() + 1, w);
        case "n":
          return `
`;
        case "o":
          return String(f.getDate()) + u(f.getDate());
        case "P":
          return f.getHours() < 12 ? h.am.toLowerCase() : h.pm.toLowerCase();
        case "p":
          return f.getHours() < 12 ? h.am.toUpperCase() : h.pm.toUpperCase();
        case "R":
          return r(f, "%H:%M");
        case "r":
          return r(f, "%I:%M:%S %p");
        case "S":
          return i(f.getSeconds(), w);
        case "s":
          return Math.floor(g / 1e3);
        case "T":
          return r(f, "%H:%M:%S");
        case "t":
          return "	";
        case "U":
          return i(c(f, "sunday"), w);
        case "u":
          return f.getDay() === 0 ? 7 : f.getDay();
        case "v":
          return r(f, "%e-%b-%Y");
        case "W":
          return i(c(f, "monday"), w);
        case "w":
          return f.getDay();
        case "Y":
          return f.getFullYear();
        case "y":
          var P = String(f.getFullYear());
          return P.slice(P.length - 2);
        case "Z":
          var E = f.toString().match(/\((\w+)\)/);
          return E && E[1] || "";
        case "z":
          var x = f.getTimezoneOffset();
          return (x > 0 ? "-" : "+") + i(Math.round(Math.abs(x / 60)), 2) + ":" + i(x % 60, 2);
        default:
          return v;
      }
    });
  }
  function i(f, p, h) {
    typeof p == "number" && (h = p, p = "0"), p === null && (p = "0"), h = h || 2;
    var g = String(f);
    if (p)
      for (; g.length < h; )
        g = p + g;
    return g;
  }
  function a(f) {
    var p = f.getHours();
    return p === 0 ? p = 12 : p > 12 && (p -= 12), p;
  }
  function u(f) {
    var p = f % 10, h = f % 100;
    if (h >= 11 && h <= 13 || p === 0 || p >= 4)
      return "th";
    switch (p) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
    }
  }
  function c(f, p) {
    p = p || "sunday";
    var h = f.getDay();
    p == "monday" && (h === 0 ? h = 6 : h--);
    var g = new Date(f.getFullYear(), 0, 1), m = (f - g) / 864e5, v = (m + 7 - h) / 7;
    return Math.floor(v);
  }
  return vf = r, vf;
}
var mf, zy;
function Qx() {
  return zy || (zy = 1, mf = function(n, r) {
    var i;
    return r === 0 && "zero" in n && (i = "zero"), i = i || (r === 1 ? "one" : "other"), n[i];
  }), mf;
}
var _f, $y;
function e7() {
  return $y || ($y = 1, _f = {
    counterpart: {
      names: Sv(),
      pluralize: Qx(),
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
    }
  }), _f;
}
var wf, Gy;
function n7() {
  if (Gy) return wf;
  Gy = 1;
  var n = fx(), r = Fy().isArray, i = Fy().isDate, a = Zx().sprintf, u = Hx(), c = Vx(), f = Xx(), p = "counterpart";
  function h(A) {
    return typeof A == "string" || Object.prototype.toString.call(A) === "[object String]";
  }
  function g(A) {
    return typeof A == "function" || Object.prototype.toString.call(A) === "[object Function]";
  }
  function m(A) {
    return A === null ? !1 : Object.prototype.toString.call(A) === "[object Object]";
  }
  function v(A) {
    return h(A) && A[0] === ":";
  }
  function w(A, R) {
    return Object.prototype.hasOwnProperty.call(A, R);
  }
  function P(A, R) {
    return R.reduce(function(D, S) {
      return m(D) && w(D, S) ? D[S] : null;
    }, A);
  }
  function E() {
    u.EventEmitter.apply(this), this._registry = {
      locale: "en",
      interpolate: !0,
      fallbackLocales: [],
      scope: null,
      translations: {},
      interpolations: {},
      normalizedKeys: {},
      separator: ".",
      keepTrailingDot: !1,
      keyTransformer: function(A) {
        return A;
      },
      generateMissingEntry: function(A) {
        return "missing translation: " + A;
      }
    }, this.registerTranslations("en", e7()), this.setMaxListeners(0);
  }
  E.prototype = u.EventEmitter.prototype, E.prototype.constructor = u.EventEmitter, E.prototype.getLocale = function() {
    return this._registry.locale;
  }, E.prototype.setLocale = function(A) {
    var R = this._registry.locale;
    return R != A && (this._registry.locale = A, this.emit("localechange", A, R)), R;
  }, E.prototype.getFallbackLocale = function() {
    return this._registry.fallbackLocales;
  }, E.prototype.setFallbackLocale = function(A) {
    var R = this._registry.fallbackLocales;
    return this._registry.fallbackLocales = [].concat(A || []), R;
  }, E.prototype.getAvailableLocales = function() {
    return this._registry.availableLocales || Object.keys(this._registry.translations);
  }, E.prototype.setAvailableLocales = function(A) {
    var R = this.getAvailableLocales();
    return this._registry.availableLocales = A, R;
  }, E.prototype.getSeparator = function() {
    return this._registry.separator;
  }, E.prototype.setSeparator = function(A) {
    var R = this._registry.separator;
    return this._registry.separator = A, R;
  }, E.prototype.setInterpolate = function(A) {
    var R = this._registry.interpolate;
    return this._registry.interpolate = A, R;
  }, E.prototype.getInterpolate = function() {
    return this._registry.interpolate;
  }, E.prototype.setKeyTransformer = function(A) {
    var R = this._registry.keyTransformer;
    return this._registry.keyTransformer = A, R;
  }, E.prototype.getKeyTransformer = function() {
    return this._registry.keyTransformer;
  }, E.prototype.setMissingEntryGenerator = function(A) {
    var R = this._registry.generateMissingEntry;
    return this._registry.generateMissingEntry = A, R;
  }, E.prototype.getMissingEntryGenerator = function() {
    return this._registry.generateMissingEntry;
  }, E.prototype.registerTranslations = function(A, R) {
    var D = {};
    return D[A] = R, n(!0, this._registry.translations, D), D;
  }, E.prototype.registerInterpolations = function(A) {
    return n(!0, this._registry.interpolations, A);
  }, E.prototype.onLocaleChange = E.prototype.addLocaleChangeListener = function(A) {
    this.addListener("localechange", A);
  }, E.prototype.offLocaleChange = E.prototype.removeLocaleChangeListener = function(A) {
    this.removeListener("localechange", A);
  }, E.prototype.onTranslationNotFound = E.prototype.addTranslationNotFoundListener = function(A) {
    this.addListener("translationnotfound", A);
  }, E.prototype.offTranslationNotFound = E.prototype.removeTranslationNotFoundListener = function(A) {
    this.removeListener("translationnotfound", A);
  }, E.prototype.onError = E.prototype.addErrorListener = function(A) {
    this.addListener("error", A);
  }, E.prototype.offError = E.prototype.removeErrorListener = function(A) {
    this.removeListener("error", A);
  }, E.prototype.translate = function(A, R) {
    if (!r(A) && !h(A) || !A.length)
      throw new Error("invalid argument: key");
    v(A) && (A = A.substr(1)), A = this._registry.keyTransformer(A, R), R = n(!0, {}, R);
    var D = R.locale || this._registry.locale;
    delete R.locale;
    var S = R.scope || this._registry.scope;
    delete R.scope;
    var M = R.separator || this._registry.separator;
    delete R.separator;
    var L = [].concat(R.fallbackLocale || this._registry.fallbackLocales);
    delete R.fallbackLocale;
    var q = this._normalizeKeys(D, S, A, M), $ = P(this._registry.translations, q);
    if ($ === null && (this.emit("translationnotfound", D, A, R.fallback, S), R.fallback && ($ = this._fallback(D, S, A, R.fallback, R))), $ === null && L.length > 0 && L.indexOf(D) === -1)
      for (var H = 0, J = L.length; H < J; H++) {
        var ce = L[H], we = this._normalizeKeys(ce, S, A, M);
        if ($ = P(this._registry.translations, we), $) {
          D = ce;
          break;
        }
      }
    return $ === null && ($ = this._registry.generateMissingEntry(q.join(M))), $ = this._pluralize(D, $, R.count), this._registry.interpolate !== !1 && R.interpolate !== !1 && ($ = this._interpolate($, R)), $;
  }, E.prototype.localize = function(A, R) {
    if (!i(A))
      throw new Error("invalid argument: object must be a date");
    R = n(!0, {}, R);
    var D = R.locale || this._registry.locale, S = R.scope || p, M = R.type || "datetime", L = R.format || "default";
    return R = { locale: D, scope: S, interpolate: !1 }, L = this.translate(["formats", M, L], n(!0, {}, R)), f(A, L, this.translate("names", R));
  }, E.prototype._pluralize = function(A, R, D) {
    if (typeof R != "object" || R === null || typeof D != "number")
      return R;
    var S = this.translate("pluralize", { locale: A, scope: p });
    return Object.prototype.toString.call(S) !== "[object Function]" ? S : S(R, D);
  }, E.prototype.withLocale = function(A, R, D) {
    var S = this._registry.locale;
    this._registry.locale = A;
    var M = R.call(D);
    return this._registry.locale = S, M;
  }, E.prototype.withScope = function(A, R, D) {
    var S = this._registry.scope;
    this._registry.scope = A;
    var M = R.call(D);
    return this._registry.scope = S, M;
  }, E.prototype.withSeparator = function(A, R, D) {
    var S = this.setSeparator(A), M = R.call(D);
    return this.setSeparator(S), M;
  }, E.prototype._normalizeKeys = function(A, R, D, S) {
    var M = [];
    return M = M.concat(this._normalizeKey(A, S)), M = M.concat(this._normalizeKey(R, S)), M = M.concat(this._normalizeKey(D, S)), M;
  }, E.prototype._normalizeKey = function(A, R) {
    return this._registry.normalizedKeys[R] = this._registry.normalizedKeys[R] || {}, this._registry.normalizedKeys[R][A] = this._registry.normalizedKeys[R][A] || (function(D) {
      if (r(D)) {
        var S = D.map((function(q) {
          return this._normalizeKey(q, R);
        }).bind(this));
        return [].concat.apply([], S);
      } else {
        if (typeof D > "u" || D === null)
          return [];
        for (var M = D.split(R), L = M.length - 1; L >= 0; L--)
          M[L] === "" && (M.splice(L, 1), this._registry.keepTrailingDot === !0 && L == M.length && (M[M.length - 1] += "" + R));
        return M;
      }
    }).bind(this)(A), this._registry.normalizedKeys[R][A];
  }, E.prototype._interpolate = function(A, R) {
    if (typeof A != "string")
      return A;
    try {
      return a(A, n({}, this._registry.interpolations, R));
    } catch (D) {
      if (this.listenerCount("error") > 0)
        this.emit("error", D, A, R);
      else
        throw D;
      return null;
    }
  }, E.prototype._resolve = function(A, R, D, S, M) {
    if (M = M || {}, M.resolve === !1)
      return S;
    var L;
    if (v(S))
      L = this.translate(S, n({}, M, { locale: A, scope: R }));
    else if (g(S)) {
      var q;
      M.object ? (q = M.object, delete M.object) : q = D, L = this._resolve(A, R, D, S(q, M));
    } else
      L = S;
    return /^missing translation:/.test(L) ? null : L;
  }, E.prototype._fallback = function(A, R, D, S, M) {
    if (M = c(M, "fallback"), r(S)) {
      for (var L = 0, q = S.length; L < q; L++) {
        var $ = this._resolve(A, R, D, S[L], M);
        if ($)
          return $;
      }
      return null;
    } else
      return this._resolve(A, R, D, S, M);
  };
  var x = new E();
  function B() {
    return x.translate.apply(x, arguments);
  }
  return n(B, x, {
    Instance: E,
    Translator: E
  }), wf = B, wf;
}
var t7 = n7();
const ot = /* @__PURE__ */ u1(t7), Iv = "i18n/";
ot.setSeparator(cx);
const Tv = "en";
ot.setFallbackLocale(Tv);
function r7(n, r) {
  ot.registerTranslations(n, r);
}
function X7(n) {
  ot.setMissingEntryGenerator(n);
}
function i7() {
  return ot.getLocale();
}
function Q7(n) {
  return ot.setLocale(n);
}
function eM(n) {
  return n;
}
function Zy(n) {
  return typeof n == "string" && !n.startsWith("missing translation:");
}
const o7 = (n, r) => {
  const i = ot.translate(n, { ...r, fallbackLocale: ot.getLocale() });
  if (Zy(i))
    return { translated: i };
  const a = ot.translate(n, { ...r, locale: Tv });
  return Zy(a) ? { translated: a, isFallback: !0 } : { translated: n, isFallback: !0 };
};
function hp(n, r) {
  const i = { ...r, interpolate: !1 };
  return i && typeof i == "object" && Object.keys(i).forEach((a) => {
    i[a] === void 0 && (console.warn("safeCounterpartTranslate called with undefined interpolation name: " + a), i[a] = "undefined"), i[a] === null && (console.warn("safeCounterpartTranslate called with null interpolation name: " + a), i[a] = "null");
  }), o7(n, i);
}
const Rv = (n, r) => n;
function Ai(n, r, i) {
  const { translated: a } = hp(n, r), u = Ov(a, r, i);
  return Rv(u);
}
function nM(n) {
  return hp(n, {}).translated;
}
function tM(n, r, i) {
  const { translated: a, isFallback: u } = hp(n, r), c = Ov(a, r, i);
  return Rv(u ? /* @__PURE__ */ G.createElement("span", { lang: "en" }, c) : c);
}
function rM(n) {
  return n.replace(/%\(([^)]*)\)/g, "% ($1)");
}
function Ov(n, r, i) {
  let a = n;
  if (r !== void 0) {
    const u = {};
    for (const c in r)
      u[`%\\(${c}\\)s`] = r[c];
    a = Hy(a, u);
  }
  if (i !== void 0) {
    const u = {};
    for (const c in i)
      u[`(<${c}>(.*?)<\\/${c}>|<${c}>|<${c}\\s*\\/>)`] = i[c];
    a = Hy(a, u);
  }
  return a;
}
function Hy(n, r) {
  const i = [n];
  let a = !1;
  for (const u in r) {
    const c = new RegExp(u, "g");
    let f = !1;
    for (let p = 0; p < i.length; p++) {
      const h = i[p];
      if (typeof h != "string")
        continue;
      let g = c.exec(h);
      if (!g) continue;
      f = !0;
      const m = h.slice(0, g.index), v = [];
      let w;
      for (; g; ) {
        w = g;
        const P = g.slice(2);
        let E;
        r[u] instanceof Function ? E = r[u](...P) : E = r[u], typeof E == "object" && (a = !0), (typeof E != "string" || E !== "") && v.push(E), g = c.exec(h);
        let x;
        if (g) {
          const B = w.index + w[0].length;
          x = h.slice(B, g.index);
        } else
          x = h.slice(w.index + w[0].length);
        x && v.push(x);
      }
      i.splice(p, 1, ...v), m !== "" && i.splice(p, 0, m);
    }
    f || // The current regexp did not match anything in the input. Missing
    // matches is entirely possible because you might choose to show some
    // variables only in the case of e.g. plurals. It's still a bit
    // suspicious, and could be due to an error, so log it. However, not
    // showing count is so common that it's not worth logging. And other
    // commonly unused variables here, if there are any.
    u !== "%\\(count\\)s" && // Ignore the `locale` option which can be used to override the locale
    // in counterpart
    u !== "%\\(locale\\)s" && console.log(`Could not find ${c} in ${n}`);
  }
  return a ? G.createElement("span", null, ...i) : i.join("");
}
async function iM(n) {
  const r = await u7(), i = n in r ? n : "en", a = await a7(Iv + r[i]);
  ot.registerTranslations(i, a), ot.setLocale(i);
}
async function a7(n) {
  console.log("Loading language from", n);
  const r = await fetch(n, { method: "GET" });
  if (!r.ok)
    throw new Error(`Failed to load ${n}, got ${r.status}`);
  return r.json();
}
async function u7() {
  const n = Iv + "languages.json", r = await fetch(n, { method: "GET" });
  if (!r.ok)
    throw new Error(`Failed to load ${n}, got ${r.status}`);
  return r.json();
}
function di({
  type: n,
  children: r,
  avatar: i,
  className: a,
  actions: u,
  onClose: c,
  ...f
}) {
  const p = at(La.banner, a), h = Si(() => {
    switch (n) {
      case "critical":
        return /* @__PURE__ */ G.createElement(rx, { fontSize: 24 });
      case "info":
        return /* @__PURE__ */ G.createElement(Cg, { fontSize: 24 });
      case "success":
        return /* @__PURE__ */ G.createElement(tx, { fontSize: 24 });
      default:
        return /* @__PURE__ */ G.createElement(Cg, { fontSize: 24 });
    }
  }, [n]);
  return /* @__PURE__ */ G.createElement("div", { ...f, className: p, "data-type": n }, /* @__PURE__ */ G.createElement("div", { className: La.icon }, i ?? h), /* @__PURE__ */ G.createElement("div", { className: La.content }, r), /* @__PURE__ */ G.createElement("div", { className: La.actions }, u, c && /* @__PURE__ */ G.createElement(Lt, { kind: "secondary", size: "sm", onClick: c }, Ai("action|dismiss"))));
}
function oM({ vm: n }) {
  const { visible: r } = bo(n), i = Ai(
    "room|status_bar|history_visible",
    {},
    {
      a: s7
    }
  );
  return /* @__PURE__ */ G.createElement(G.Fragment, null, r && /* @__PURE__ */ G.createElement(di, { type: "info", onClose: () => n.onClose() }, i));
}
function s7(n) {
  return /* @__PURE__ */ G.createElement(ES, { href: "https://element.io/en/help#e2ee-history-sharing", target: "_blank" }, n);
}
function aM({ vm: n }) {
  const r = bo(n);
  return /* @__PURE__ */ G.createElement("div", { className: "mx_TextualEvent" }, r.content);
}
function xv(n, r) {
  return /* @__PURE__ */ Pe.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: r,
    ...n,
    children: /* @__PURE__ */ Pe.jsx("path", {
      d: "M6.293 6.293a1 1 0 0 1 1.414 0L12 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414L13.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.586 12 6.293 7.707a1 1 0 0 1 0-1.414"
    })
  });
}
xv.displayName = "CloseIcon";
const c7 = Xn(xv), f7 = "_pill_1i8jm_8", l7 = "_label_1i8jm_14", Ky = {
  pill: f7,
  label: l7
};
function uM({ className: n, children: r, label: i, onClick: a, ...u }) {
  const c = Df(), { translate: f } = kr();
  return /* @__PURE__ */ G.createElement(
    Nn,
    {
      display: "inline-flex",
      gap: "var(--cpd-space-1-5x)",
      align: "center",
      className: at(Ky.pill, n),
      ...u
    },
    r,
    /* @__PURE__ */ G.createElement("span", { id: c, className: Ky.label }, i),
    a && /* @__PURE__ */ G.createElement(
      a1,
      {
        "aria-describedby": c,
        size: "16px",
        onClick: a,
        "aria-label": f("action|delete"),
        className: "mx_Dialog_nonDialogButton"
      },
      /* @__PURE__ */ G.createElement(c7, null)
    )
  );
}
function p7(n) {
  return (r) => {
    for (const i of n) Cf(i, r);
  };
}
function h7(n) {
  return (r) => {
    const i = [];
    for (const a of n) {
      const u = Cf(a, r), c = typeof u == "function";
      i.push(c ? u : () => Cf(a, null));
    }
    return () => {
      for (const a of i) a();
    };
  };
}
function Cf(n, r) {
  if (typeof n == "function")
    return n(r);
  n && (n.current = r);
}
var d7 = parseInt(_S.split(".")[0], 10) >= 19 ? h7 : p7;
function g7(n) {
  return Si(() => d7(n), n);
}
const y7 = "_pillInput_1yam9_8", v7 = "_input_1yam9_16", m7 = "_largerInput_1yam9_32", bf = {
  pillInput: y7,
  input: v7,
  largerInput: m7
};
function sM({
  className: n,
  children: r,
  onRemoveChildren: i,
  inputProps: a,
  ...u
}) {
  const c = o1(null), f = lv.omit(a, ["onKeyDown", "ref"]), p = g7([c, a?.ref]), h = wS.toArray(r).length > 0;
  return /* @__PURE__ */ G.createElement(
    Nn,
    {
      ...u,
      gap: "var(--cpd-space-1x)",
      direction: "column",
      className: at(bf.pillInput, n),
      onClick: (g) => {
        g.preventDefault(), g.stopPropagation(), c.current?.focus();
      }
    },
    h && /* @__PURE__ */ G.createElement(Nn, { gap: "var(--cpd-space-1x)", wrap: "wrap", align: "center" }, r),
    /* @__PURE__ */ G.createElement(
      "input",
      {
        ref: p,
        autoComplete: "off",
        className: at(bf.input, { [bf.largerInput]: h }),
        onKeyDown: (g) => {
          const m = g.currentTarget.value.trim();
          if (g.key === "Backspace" && !m) {
            g.preventDefault(), i?.(g);
            return;
          }
          a?.onKeyDown?.(g);
        },
        ...f
      }
    )
  );
}
function Mv(n, r) {
  return /* @__PURE__ */ Pe.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: r,
    ...n,
    children: /* @__PURE__ */ Pe.jsx("path", {
      d: "M9.55 17.575q-.2 0-.375-.062a.9.9 0 0 1-.325-.213L4.55 13q-.274-.274-.262-.713.012-.437.287-.712a.95.95 0 0 1 .7-.275q.425 0 .7.275L9.55 15.15l8.475-8.475q.274-.275.713-.275.437 0 .712.275.275.274.275.713 0 .437-.275.712l-9.2 9.2q-.15.15-.325.212a1.1 1.1 0 0 1-.375.063"
    })
  });
}
Mv.displayName = "CheckIcon";
const _7 = Xn(Mv);
function Pv(n, r) {
  return /* @__PURE__ */ Pe.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: r,
    ...n,
    children: /* @__PURE__ */ Pe.jsx("path", {
      d: "M7 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 5 19V6a.97.97 0 0 1-.713-.287A.97.97 0 0 1 4 5q0-.424.287-.713A.97.97 0 0 1 5 4h4q0-.424.287-.712A.97.97 0 0 1 10 3h4q.424 0 .713.288Q15 3.575 15 4h4q.424 0 .712.287Q20 4.576 20 5t-.288.713A.97.97 0 0 1 19 6v13q0 .824-.587 1.413A1.93 1.93 0 0 1 17 21zM7 6v13h10V6zm2 10q0 .424.287.712Q9.576 17 10 17t.713-.288A.97.97 0 0 0 11 16V9a.97.97 0 0 0-.287-.713A.97.97 0 0 0 10 8a.97.97 0 0 0-.713.287A.97.97 0 0 0 9 9zm4 0q0 .424.287.712.288.288.713.288.424 0 .713-.288A.97.97 0 0 0 15 16V9a.97.97 0 0 0-.287-.713A.97.97 0 0 0 14 8a.97.97 0 0 0-.713.287A.97.97 0 0 0 13 9z"
    })
  });
}
Pv.displayName = "DeleteIcon";
const w7 = Xn(Pv);
function Cv(n, r) {
  return /* @__PURE__ */ Pe.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: r,
    ...n,
    children: /* @__PURE__ */ Pe.jsx("path", {
      d: "M12 18.6c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8M6.6 2.4c-.99 0-1.8.81-1.8 1.8S5.61 6 6.6 6s1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0 5.4c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0 5.4c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8M17.4 6c.99 0 1.8-.81 1.8-1.8s-.81-1.8-1.8-1.8-1.8.81-1.8 1.8.81 1.8 1.8 1.8M12 13.2c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m5.4 0c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0-5.4c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m-5.4 0c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0-5.4c-.99 0-1.8.81-1.8 1.8S11.01 6 12 6s1.8-.81 1.8-1.8-.81-1.8-1.8-1.8"
    })
  });
}
Cv.displayName = "DialPadIcon";
const b7 = Xn(Cv);
function Dv(n, r) {
  return /* @__PURE__ */ Pe.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: r,
    ...n,
    children: /* @__PURE__ */ Pe.jsx("path", {
      d: "M12 13a.97.97 0 0 1-.713-.287A.97.97 0 0 1 11 12q0-.424.287-.713A.97.97 0 0 1 12 11q.424 0 .713.287.287.288.287.713 0 .424-.287.713A.97.97 0 0 1 12 13m0 9a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20m0 0q-3.35 0-5.675-2.325T4 12t2.325-5.675T12 4t5.675 2.325T20 12t-2.325 5.675T12 20m1.675-5.85q.15-.075.275-.2t.2-.275l2.925-6.25q.125-.25-.062-.437-.188-.188-.438-.063l-6.25 2.925q-.15.075-.275.2t-.2.275l-2.925 6.25q-.125.25.063.438.186.186.437.062z"
    })
  });
}
Dv.displayName = "ExploreIcon";
const E7 = Xn(Dv);
function Nv(n, r) {
  return /* @__PURE__ */ Pe.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: r,
    ...n,
    children: /* @__PURE__ */ Pe.jsx("path", {
      d: "M18.93 8A8 8 0 1 1 4 12a1 1 0 1 0-2 0c0 5.523 4.477 10 10 10s10-4.477 10-10a10 10 0 0 0-.832-4A10 10 0 0 0 12 2a9.99 9.99 0 0 0-8 3.999V4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2H5.755A7.99 7.99 0 0 1 12 4a8 8 0 0 1 6.93 4"
    })
  });
}
Nv.displayName = "RestartIcon";
const Vy = Xn(Nv);
function Lv(n, r) {
  return /* @__PURE__ */ Pe.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: r,
    ...n,
    children: /* @__PURE__ */ Pe.jsx("path", {
      d: "M15.05 16.463a7.5 7.5 0 1 1 1.414-1.414l3.243 3.244a1 1 0 0 1-1.414 1.414zM16 10.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0"
    })
  });
}
Lv.displayName = "SearchIcon";
const A7 = Xn(Lv), S7 = "_container_mqidv_1", I7 = "_description_mqidv_9", gt = {
  container: S7,
  description: I7
}, uo = {
  /**
   * Connectivity to the homeserver has been lost. The user can not take any actions
   * until the connection is restored.
   */
  ConnectionLost: "ConnectionLost",
  /**
   * The homeserver has indiciated the user needs to consent to the Terms and Conditions
   * before they can send a message.
   */
  NeedsConsent: "NeedsConsent",
  /**
   * The homeserver has indiciated that messages can not be sent due to a resource limit
   * being reached. The user may use the given admin contact details.
   */
  ResourceLimited: "ResourceLimited",
  /**
   * There are messages stored locally that previously failed to send that the user
   * may now retry or delete.
   */
  UnsentMessages: "UnsentMessages",
  /**
   * There was an error creating a room. The user may retry creation.
   */
  LocalRoomFailed: "LocalRoomFailed"
};
function cM({ vm: n }) {
  const { translate: r } = kr(), i = bo(n), a = Df(), u = yi(
    (h) => {
      h.preventDefault(), n.onDeleteAllClick?.();
    },
    [n]
  ), c = yi(
    (h) => {
      h.preventDefault(), n.onResendAllClick?.();
    },
    [n]
  ), f = yi(
    (h) => {
      h.preventDefault(), n.onRetryRoomCreationClick?.();
    },
    [n]
  ), p = yi(() => {
    n.onTermsAndConditionsClicked?.();
  }, [n]);
  if (i.state === null)
    return null;
  switch (i.state) {
    case uo.ConnectionLost:
      return (
        // :TCHAP: <Banner type="critical" role="status" aria-labelledby={bannerTitleId}>
        /* @__PURE__ */ G.createElement(di, { type: "info", role: "status", "aria-labelledby": a }, /* @__PURE__ */ G.createElement("div", { className: gt.container }, /* @__PURE__ */ G.createElement(rr, { id: a, weight: "semibold" }, Ai("tchap|server_connectivity_lost_title", {}, {
          a: (h) => /* @__PURE__ */ G.createElement(
            "a",
            {
              target: "_blank",
              rel: "noreferrer noopener",
              href: "https://status.tchap.numerique.gouv.fr"
            },
            h
          )
        })), /* @__PURE__ */ G.createElement(rr, { className: gt.description, size: "sm" }, r("room|status_bar|server_connectivity_lost_description"))))
      );
    case uo.NeedsConsent:
      return /* @__PURE__ */ G.createElement(
        di,
        {
          type: "info",
          role: "status",
          "aria-labelledby": a,
          actions: /* @__PURE__ */ G.createElement(
            Lt,
            {
              onClick: p,
              kind: "secondary",
              size: "sm",
              as: "a",
              href: i.consentUri,
              target: "_blank",
              rel: "noreferrer noopener"
            },
            r("terms|tac_button")
          )
        },
        /* @__PURE__ */ G.createElement("div", { className: gt.container }, /* @__PURE__ */ G.createElement(rr, { id: a, weight: "semibold" }, r("room|status_bar|requires_consent_agreement_title")))
      );
    case uo.ResourceLimited:
      return /* @__PURE__ */ G.createElement(
        di,
        {
          type: "info",
          role: "status",
          "aria-labelledby": a,
          actions: i.adminContactHref && /* @__PURE__ */ G.createElement(
            Lt,
            {
              kind: "secondary",
              size: "sm",
              as: "a",
              href: i.adminContactHref,
              target: "_blank",
              rel: "noreferrer noopener"
            },
            "Contact admin"
          )
        },
        /* @__PURE__ */ G.createElement("div", { className: gt.container }, /* @__PURE__ */ G.createElement(rr, { id: a, weight: "semibold" }, {
          monthly_active_user: r("room|status_bar|monthly_user_limit_reached_title"),
          hs_disabled: r("room|status_bar|homeserver_blocked_title")
        }[i.resourceLimit] || r("room|status_bar|exceeded_resource_limit_title")), /* @__PURE__ */ G.createElement(rr, { className: gt.description, size: "sm" }, r("room|status_bar|exceeded_resource_limit_description")))
      );
    case uo.LocalRoomFailed:
      return /* @__PURE__ */ G.createElement(
        di,
        {
          role: "status",
          type: "info",
          "aria-labelledby": a,
          actions: /* @__PURE__ */ G.createElement(
            Lt,
            {
              size: "sm",
              kind: "secondary",
              className: gt.container,
              Icon: Vy,
              onClick: f
            },
            r("action|retry")
          )
        },
        /* @__PURE__ */ G.createElement(rr, { id: a, weight: "semibold", className: gt.container }, r("room|status_bar|failed_to_create_room_title"))
      );
    case uo.UnsentMessages:
      return /* @__PURE__ */ G.createElement(
        di,
        {
          role: "status",
          type: "info",
          actions: i.isResending ? /* @__PURE__ */ G.createElement(AS, null) : /* @__PURE__ */ G.createElement(G.Fragment, null, n.onDeleteAllClick && /* @__PURE__ */ G.createElement(
            Lt,
            {
              size: "sm",
              kind: "destructive",
              Icon: w7,
              disabled: i.isResending,
              onClick: u
            },
            r("room|status_bar|delete_all")
          ), n.onResendAllClick && /* @__PURE__ */ G.createElement(
            Lt,
            {
              size: "sm",
              kind: "secondary",
              Icon: Vy,
              disabled: i.isResending,
              onClick: c,
              className: gt.container
            },
            r("room|status_bar|retry_all")
          )),
          "aria-labelledby": a
        },
        /* @__PURE__ */ G.createElement("div", { className: gt.container }, /* @__PURE__ */ G.createElement(rr, { id: a, weight: "semibold" }, Ai("tchap|server_connectivity_lost_title", {
          a: (h) => /* @__PURE__ */ G.createElement(
            "a",
            {
              target: "_blank",
              rel: "noreferrer noopener",
              href: "https://status.tchap.numerique.gouv.fr"
            },
            h
          )
        })), /* @__PURE__ */ G.createElement(rr, { className: gt.description, size: "sm" }, r("room|status_bar|select_messages_to_retry")))
      );
    default:
      return null;
  }
}
const T7 = "_richItem_1c0uo_8", R7 = "_avatar_1c0uo_36", O7 = "_title_1c0uo_41", x7 = "_description_1c0uo_47", M7 = "_timestamp_1c0uo_51", P7 = "_checkmark_1c0uo_69", gi = {
  richItem: T7,
  avatar: R7,
  title: O7,
  description: x7,
  timestamp: M7,
  checkmark: P7
}, fM = bS(function({
  avatar: r,
  title: i,
  description: a,
  timestamp: u,
  selected: c,
  ...f
}) {
  const p = kr();
  return /* @__PURE__ */ G.createElement(
    "li",
    {
      className: gi.richItem,
      role: "option",
      tabIndex: -1,
      "aria-selected": c,
      "aria-label": i,
      ...f
    },
    c ? /* @__PURE__ */ G.createElement(C7, null) : /* @__PURE__ */ G.createElement(Nn, { className: gi.avatar }, r),
    /* @__PURE__ */ G.createElement("span", { className: gi.title }, i),
    /* @__PURE__ */ G.createElement("span", { className: gi.description }, a),
    u && /* @__PURE__ */ G.createElement("span", { role: "timer", className: gi.timestamp }, p.humanizeTime(u))
  );
});
function C7() {
  return /* @__PURE__ */ G.createElement(Nn, { align: "center", justify: "center", "aria-hidden": "true", className: gi.checkmark }, /* @__PURE__ */ G.createElement(_7, { width: "24px", height: "24px", color: "var(--cpd-color-icon-on-solid-primary)" }));
}
const D7 = "_richList_1mcas_8", N7 = "_title_1mcas_12", L7 = "_content_1mcas_18", F7 = "_empty_1mcas_26", qa = {
  richList: D7,
  title: N7,
  content: L7,
  empty: F7
};
function B7() {
  const n = o1(null), r = yi((a) => {
    if (n.current && a.target === n.current) {
      let u = n.current?.firstElementChild;
      for (const c of n.current.children)
        if (c.getAttribute("aria-selected") === "true") {
          u = c;
          break;
        }
      u?.focus();
    }
  }, []), i = yi((a) => {
    const { key: u } = a;
    let c = !1;
    switch (u) {
      case "Enter":
      case " ": {
        c = !0, document.activeElement.click();
        break;
      }
      case "ArrowDown": {
        c = !0;
        const f = document.activeElement;
        n.current?.contains(f) && f && f.nextElementSibling?.focus();
        break;
      }
      case "ArrowUp": {
        c = !0;
        const f = document.activeElement;
        n.current?.contains(f) && f && f.previousElementSibling?.focus();
        break;
      }
      case "Home": {
        c = !0, n.current?.firstElementChild?.focus();
        break;
      }
      case "End": {
        c = !0, n.current?.lastElementChild?.focus();
        break;
      }
    }
    c && a.preventDefault();
  }, []);
  return { listRef: n, onKeyDown: i, onFocus: r };
}
function lM({
  children: n,
  title: r,
  className: i,
  titleAttributes: a,
  isEmpty: u = !1,
  ...c
}) {
  const f = Df(), { listRef: p, onKeyDown: h, onFocus: g } = B7();
  return /* @__PURE__ */ G.createElement(Nn, { className: at(qa.richList, i), direction: "column", ...c }, /* @__PURE__ */ G.createElement("span", { id: f, className: qa.title, ...a }, r), u ? /* @__PURE__ */ G.createElement("span", { className: qa.empty }, n) : /* @__PURE__ */ G.createElement(
    "ul",
    {
      ref: p,
      role: "listbox",
      className: qa.content,
      "aria-labelledby": f,
      tabIndex: 0,
      onKeyDown: h,
      onFocus: g
    },
    n
  ));
}
const q7 = "_view_z7ks9_8", k7 = "_search_z7ks9_16", U7 = "_search_container_z7ks9_29", j7 = "_search_text_z7ks9_41", ka = {
  view: q7,
  search: k7,
  search_container: U7,
  search_text: j7
};
function pM({ vm: n }) {
  const { translate: r } = kr(), { displayExploreButton: i, displayDialButton: a, searchShortcut: u } = bo(n);
  return /* @__PURE__ */ G.createElement(
    Nn,
    {
      "data-testid": "room-list-search",
      className: ka.view,
      role: "search",
      gap: "var(--cpd-space-2x)",
      align: "center"
    },
    /* @__PURE__ */ G.createElement(
      Lt,
      {
        id: "room-list-search-button",
        className: ka.search,
        kind: "secondary",
        size: "sm",
        Icon: A7,
        onClick: n.onSearchClick
      },
      /* @__PURE__ */ G.createElement(Nn, { className: ka.search_container, as: "span", justify: "space-between" }, /* @__PURE__ */ G.createElement("span", { className: ka.search_text }, r("action|search")), /* @__PURE__ */ G.createElement("kbd", null, u))
    ),
    a && /* @__PURE__ */ G.createElement(
      Lt,
      {
        kind: "secondary",
        size: "sm",
        Icon: b7,
        iconOnly: !0,
        "aria-label": r("left_panel|open_dial_pad"),
        onClick: n.onDialPadClick
      }
    ),
    i && /* @__PURE__ */ G.createElement(
      Lt,
      {
        kind: "secondary",
        size: "sm",
        Icon: E7,
        iconOnly: !0,
        "aria-label": r("action|explore_rooms"),
        onClick: n.onExploreClick
      }
    )
  );
}
const Ef = {
  "box-flex": "_box-flex_1odfs_9",
  "box-shrink": "_box-shrink_1odfs_13",
  "box-grow": "_box-grow_1odfs_17"
};
function hM({
  as: n = "div",
  flex: r = null,
  shrink: i = null,
  grow: a = null,
  className: u,
  children: c,
  ...f
}) {
  const p = Si(() => {
    const h = {};
    return r && (h["--mx-box-flex"] = r), i && (h["--mx-box-shrink"] = i), a && (h["--mx-box-grow"] = a), h;
  }, [r, a, i]);
  return G.createElement(
    n,
    {
      ...f,
      className: at(u, {
        [Ef["box-flex"]]: !!r,
        [Ef["box-shrink"]]: !!i,
        [Ef["box-grow"]]: !!a
      }),
      style: p
    },
    c
  );
}
const Jy = 15e3, Xy = 75e3, Qy = 45, e1 = 75, n1 = 23, t1 = 26;
function W7(n, r) {
  let a = Date.now() - n;
  const u = Math.abs(Math.ceil(a / 6e4)), c = Math.ceil(u / 60), f = Math.ceil(c / 24), p = r?.translate ?? Ai;
  return a >= 0 ? a <= Jy ? p("time|few_seconds_ago") : a <= Xy ? p("time|about_minute_ago") : u <= Qy ? p("time|n_minutes_ago", { num: u }) : u <= e1 ? p("time|about_hour_ago") : c <= n1 ? p("time|n_hours_ago", { num: c }) : c <= t1 ? p("time|about_day_ago") : p("time|n_days_ago", { num: f }) : (a = Math.abs(a), a <= Jy ? p("time|in_few_seconds") : a <= Xy ? p("time|in_about_minute") : u <= Qy ? p("time|in_n_minutes", { num: u }) : u <= e1 ? p("time|in_about_hour") : c <= n1 ? p("time|in_n_hours", { num: c }) : c <= t1 ? p("time|in_about_day") : p("time|in_n_days", { num: f }));
}
function dM(n, r) {
  return Number.isFinite(n) ? Number(n) : r;
}
function gM(n, r, i) {
  return Math.min(Math.max(n, r), i);
}
function yM(...n) {
  return [...n].reduce((r, i) => i + r, 0);
}
function vM(n, r, i) {
  return n * (i - r) + r;
}
function mM(n, r, i) {
  const a = (n - r) / (i - r);
  return Number.isNaN(a) ? 0 : a;
}
class _M {
  /**
   * Read the current language of the user in IETF Language Tag format
   */
  get language() {
    return i7();
  }
  /**
   * Register translations for the module, may override app's existing translations
   */
  register(r) {
    const i = {};
    for (const a in r)
      for (const u in r[a])
        i[u] = i[u] || {}, i[u][a] = r[a][u];
    for (const a in i)
      r7(a, i[a]);
  }
  /**
   * Perform a translation, with optional variables
   * @param key - The key to translate
   * @param variables - Optional variables to interpolate into the translation
   */
  translate(r, i) {
    return Ai(r, i);
  }
  humanizeTime(r) {
    return W7(r, this);
  }
}
class Y7 {
  disposables = [];
  _isDisposed = !1;
  /**
   * Relinquish all tracked disposable values
   */
  dispose() {
    if (!this.isDisposed) {
      this._isDisposed = !0;
      for (const r of this.disposables)
        typeof r == "function" ? r() : r.dispose();
    }
  }
  /**
   * Track a value that needs to be eventually relinquished
   */
  track(r) {
    return this.throwIfDisposed(), this.disposables.push(r), r;
  }
  /**
   * Add an event listener that will be removed on dispose
   */
  trackListener(r, i, a) {
    this.throwIfDisposed(), r.on(i, a), this.track(() => {
      r.off(i, a);
    });
  }
  throwIfDisposed() {
    if (this.isDisposed) throw new Error("Disposable is already disposed");
  }
  /**
   * Whether this disposable has been disposed
   */
  get isDisposed() {
    return this._isDisposed;
  }
}
class z7 {
  constructor(r, i) {
    this.snapshot = r, this.emit = i;
  }
  /**
   * Replace current snapshot with a new snapshot value.
   * @param snapshot New snapshot value
   */
  set(r) {
    this.snapshot = r, this.emit();
  }
  /**
   * Update a part of the current snapshot by merging into the existing snapshot.
   * @param snapshot A subset of the snapshot to merge into the current snapshot.
   */
  merge(r) {
    this.snapshot = { ...this.snapshot, ...r }, this.emit();
  }
  /**
   * The current value of the snapshot.
   */
  get current() {
    return this.snapshot;
  }
}
class $7 {
  listeners = /* @__PURE__ */ new Set();
  /**
   * Subscribe to changes in the view model.
   * @param listener Will be called whenever the snapshot changes.
   * @returns A function to unsubscribe from the view model updates.
   */
  add = (r) => (this.listeners.add(r), () => {
    this.listeners.delete(r);
  });
  /**
   * Emit an update to all subscribed listeners.
   */
  emit = () => {
    for (const r of this.listeners)
      r();
  };
}
class wM {
  subs;
  snapshot;
  props;
  disposables = new Y7();
  constructor(r, i) {
    this.props = r, this.subs = new $7(), this.snapshot = new z7(i, () => {
      this.subs.emit();
    });
  }
  subscribe = (r) => this.subs.add(r);
  /**
   * Returns the current snapshot of the view model.
   */
  getSnapshot = () => this.snapshot.current;
  /**
   * Relinquish any resources held by this view-model.
   */
  dispose() {
    this.disposables.dispose();
  }
  /**
   * Whether this view-model has been disposed.
   */
  get isDisposed() {
    return this.disposables.isDisposed;
  }
}
class G7 {
  constructor(r) {
    this.snapshot = r;
  }
  getSnapshot = () => this.snapshot;
  subscribe(r) {
    return () => {
    };
  }
}
function bM(n) {
  const [r, i] = r1(n);
  return i1(() => {
    let a = r;
    if (r.isDisposed) {
      const u = n();
      a = u, i(u);
    }
    return () => {
      a.dispose();
    };
  }, []), r;
}
function EM(n, r) {
  return Si(() => {
    const i = new G7(n);
    return Object.assign(i, r), i;
  }, [n, r]);
}
export {
  K7 as AudioPlayerView,
  V7 as AvatarWithDetails,
  di as Banner,
  wM as BaseViewModel,
  hM as Box,
  Mg as Clock,
  Y7 as Disposables,
  Nn as Flex,
  oM as HistoryVisibleBannerView,
  _M as I18nApi,
  f1 as I18nContext,
  cx as KEY_SEPARATOR,
  OS as MediaBody,
  G7 as MockViewModel,
  uM as Pill,
  sM as PillInput,
  zS as PlayPauseButton,
  fM as RichItem,
  lM as RichList,
  pM as RoomListSearchView,
  uo as RoomStatusBarState,
  cM as RoomStatusBarView,
  XO as SeekBar,
  z7 as Snapshot,
  aM as TextualEventView,
  $7 as ViewModelSubscriptions,
  Ai as _t,
  tM as _tDom,
  eM as _td,
  gM as clamp,
  dM as defaultNumber,
  $S as formatBytes,
  ZO as formatSeconds,
  u7 as getLangsJson,
  i7 as getLocale,
  J7 as getNormalizedLanguageKeys,
  W7 as humanizeTime,
  nM as lookupString,
  sx as normalizeLanguageKey,
  mM as percentageOf,
  vM as percentageWithin,
  r7 as registerTranslations,
  Hy as replaceByRegexes,
  rM as sanitizeForTranslation,
  iM as setLanguage,
  Q7 as setLocale,
  X7 as setMissingEntryGenerator,
  Ov as substitute,
  yM as sum,
  bM as useCreateAutoDisposedViewModel,
  kr as useI18n,
  EM as useMockedViewModel,
  bo as useViewModel
};
