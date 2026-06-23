import z, { useSyncExternalStore as yS, useMemo as Ai, forwardRef as Vn, createContext as mS, useContext as vS, useState as ry, useEffect as iy, useId as qf, version as _S, useRef as oy, Children as wS, useCallback as yi, memo as bS } from "react";
import { IconButton as ay, Button as Lt, Link as ES, InlineSpinner as AS, Text as ir } from "@vector-im/compound-web";
function bo(n) {
  return yS(n.subscribe, n.getSnapshot, n.getSnapshot);
}
var mi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function uy(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var ec = { exports: {} };
var Qd;
function SS() {
  return Qd || (Qd = 1, (function(n) {
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
  })(ec)), ec.exports;
}
var IS = SS();
const at = /* @__PURE__ */ uy(IS), TS = "_mediaBody_11o4b_8", OS = {
  mediaBody: TS
};
function RS({
  as: n,
  className: r,
  children: i,
  ...a
}) {
  const u = n || "div";
  return /* @__PURE__ */ z.createElement(u, { className: at("mx_MediaBody", OS.mediaBody, r), ...a }, i);
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
  const v = Ai(
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
  return z.createElement(n, { ...g, className: at(MS.flex, p), style: v }, h);
}
const PS = "_audioPlayer_1ly1h_8", CS = "_mediaInfo_1ly1h_12", DS = "_mediaName_1ly1h_17", NS = "_byline_1ly1h_26", FS = "_clock_1ly1h_30", LS = "_error_1ly1h_34", si = {
  audioPlayer: PS,
  mediaInfo: CS,
  mediaName: DS,
  byline: NS,
  clock: FS,
  error: LS
};
var xa = { exports: {} }, to = {};
var eg;
function BS() {
  if (eg) return to;
  eg = 1;
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
var ng;
function qS() {
  return ng || (ng = 1, process.env.NODE_ENV !== "production" && (function() {
    function n(U) {
      if (U == null) return null;
      if (typeof U == "function")
        return U.$$typeof === le ? null : U.displayName || U.name || null;
      if (typeof U == "string") return U;
      switch (U) {
        case W:
          return "Fragment";
        case R:
          return "Profiler";
        case A:
          return "StrictMode";
        case N:
          return "Suspense";
        case k:
          return "SuspenseList";
        case V:
          return "Activity";
      }
      if (typeof U == "object")
        switch (typeof U.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), U.$$typeof) {
          case M:
            return "Portal";
          case S:
            return U.displayName || "Context";
          case L:
            return (U._context.displayName || "Context") + ".Consumer";
          case x:
            var E = U.render;
            return U = U.displayName, U || (U = E.displayName || E.name || "", U = U !== "" ? "ForwardRef(" + U + ")" : "ForwardRef"), U;
          case G:
            return E = U.displayName || null, E !== null ? E : n(U.type) || "Memo";
          case H:
            E = U._payload, U = U._init;
            try {
              return n(U(E));
            } catch {
            }
        }
      return null;
    }
    function r(U) {
      return "" + U;
    }
    function i(U) {
      try {
        r(U);
        var E = !1;
      } catch {
        E = !0;
      }
      if (E) {
        E = console;
        var D = E.error, j = typeof Symbol == "function" && Symbol.toStringTag && U[Symbol.toStringTag] || U.constructor.name || "Object";
        return D.call(
          E,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          j
        ), r(U);
      }
    }
    function a(U) {
      if (U === W) return "<>";
      if (typeof U == "object" && U !== null && U.$$typeof === H)
        return "<...>";
      try {
        var E = n(U);
        return E ? "<" + E + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function u() {
      var U = we.A;
      return U === null ? null : U.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function f(U) {
      if (Fe.call(U, "key")) {
        var E = Object.getOwnPropertyDescriptor(U, "key").get;
        if (E && E.isReactWarning) return !1;
      }
      return U.key !== void 0;
    }
    function p(U, E) {
      function D() {
        Sn || (Sn = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          E
        ));
      }
      D.isReactWarning = !0, Object.defineProperty(U, "key", {
        get: D,
        configurable: !0
      });
    }
    function h() {
      var U = n(this.type);
      return Xn[U] || (Xn[U] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), U = this.props.ref, U !== void 0 ? U : null;
    }
    function g(U, E, D, j, re, ue) {
      var Q = D.ref;
      return U = {
        $$typeof: I,
        type: U,
        key: E,
        props: D,
        _owner: j
      }, (Q !== void 0 ? Q : null) !== null ? Object.defineProperty(U, "ref", {
        enumerable: !1,
        get: h
      }) : Object.defineProperty(U, "ref", { enumerable: !1, value: null }), U._store = {}, Object.defineProperty(U._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(U, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(U, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: re
      }), Object.defineProperty(U, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ue
      }), Object.freeze && (Object.freeze(U.props), Object.freeze(U)), U;
    }
    function v(U, E, D, j, re, ue) {
      var Q = E.children;
      if (Q !== void 0)
        if (j)
          if (je(Q)) {
            for (j = 0; j < Q.length; j++)
              m(Q[j]);
            Object.freeze && Object.freeze(Q);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(Q);
      if (Fe.call(E, "key")) {
        Q = n(U);
        var oe = Object.keys(E).filter(function(X) {
          return X !== "key";
        });
        j = 0 < oe.length ? "{key: someKey, " + oe.join(": ..., ") + ": ...}" : "{key: someKey}", In[Q + j] || (oe = 0 < oe.length ? "{" + oe.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          j,
          Q,
          oe,
          Q
        ), In[Q + j] = !0);
      }
      if (Q = null, D !== void 0 && (i(D), Q = "" + D), f(E) && (i(E.key), Q = "" + E.key), "key" in E) {
        D = {};
        for (var ee in E)
          ee !== "key" && (D[ee] = E[ee]);
      } else D = E;
      return Q && p(
        D,
        typeof U == "function" ? U.displayName || U.name || "Unknown" : U
      ), g(
        U,
        Q,
        D,
        u(),
        re,
        ue
      );
    }
    function m(U) {
      w(U) ? U._store && (U._store.validated = 1) : typeof U == "object" && U !== null && U.$$typeof === H && (U._payload.status === "fulfilled" ? w(U._payload.value) && U._payload.value._store && (U._payload.value._store.validated = 1) : U._store && (U._store.validated = 1));
    }
    function w(U) {
      return typeof U == "object" && U !== null && U.$$typeof === I;
    }
    var P = z, I = /* @__PURE__ */ Symbol.for("react.transitional.element"), M = /* @__PURE__ */ Symbol.for("react.portal"), W = /* @__PURE__ */ Symbol.for("react.fragment"), A = /* @__PURE__ */ Symbol.for("react.strict_mode"), R = /* @__PURE__ */ Symbol.for("react.profiler"), L = /* @__PURE__ */ Symbol.for("react.consumer"), S = /* @__PURE__ */ Symbol.for("react.context"), x = /* @__PURE__ */ Symbol.for("react.forward_ref"), N = /* @__PURE__ */ Symbol.for("react.suspense"), k = /* @__PURE__ */ Symbol.for("react.suspense_list"), G = /* @__PURE__ */ Symbol.for("react.memo"), H = /* @__PURE__ */ Symbol.for("react.lazy"), V = /* @__PURE__ */ Symbol.for("react.activity"), le = /* @__PURE__ */ Symbol.for("react.client.reference"), we = P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Fe = Object.prototype.hasOwnProperty, je = Array.isArray, hn = console.createTask ? console.createTask : function() {
      return null;
    };
    P = {
      react_stack_bottom_frame: function(U) {
        return U();
      }
    };
    var Sn, Xn = {}, Le = P.react_stack_bottom_frame.bind(
      P,
      c
    )(), Oe = hn(a(c)), In = {};
    ro.Fragment = W, ro.jsx = function(U, E, D) {
      var j = 1e4 > we.recentlyCreatedOwnerStacks++;
      return v(
        U,
        E,
        D,
        !1,
        j ? Error("react-stack-top-frame") : Le,
        j ? hn(a(U)) : Oe
      );
    }, ro.jsxs = function(U, E, D) {
      var j = 1e4 > we.recentlyCreatedOwnerStacks++;
      return v(
        U,
        E,
        D,
        !0,
        j ? Error("react-stack-top-frame") : Le,
        j ? hn(a(U)) : Oe
      );
    };
  })()), ro;
}
var tg;
function kS() {
  return tg || (tg = 1, process.env.NODE_ENV === "production" ? xa.exports = BS() : xa.exports = qS()), xa.exports;
}
var Ce = kS();
function sy(n, r) {
  return /* @__PURE__ */ Ce.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: r,
    ...n,
    children: /* @__PURE__ */ Ce.jsx("path", {
      d: "m8.98 4.677 9.921 5.58c1.36.764 1.36 2.722 0 3.486l-9.92 5.58C7.647 20.073 6 19.11 6 17.58V6.42c0-1.53 1.647-2.493 2.98-1.743"
    })
  });
}
sy.displayName = "PlaySolidIcon";
const US = Vn(sy);
function cy(n, r) {
  return /* @__PURE__ */ Ce.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: r,
    ...n,
    children: /* @__PURE__ */ Ce.jsx("path", {
      d: "M8 4a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V6a2 2 0 0 0-2-2m8 0a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V6a2 2 0 0 0-2-2"
    })
  });
}
cy.displayName = "PauseSolidIcon";
const jS = Vn(cy), $S = "_button_yfjla_8", WS = {
  button: $S
}, fy = mS(null);
fy.displayName = "I18nContext";
function Ur() {
  const n = vS(fy);
  if (!n)
    throw new Error("useI18n must be used within an I18nContext.Provider");
  return n;
}
function YS({
  disabled: n = !1,
  playing: r = !1,
  togglePlay: i,
  ...a
}) {
  const { translate: u } = Ur(), c = u(r ? "action|pause" : "action|play");
  return /* @__PURE__ */ z.createElement(
    ay,
    {
      size: "32px",
      "aria-label": c,
      tooltip: c,
      onClick: i,
      className: WS.button,
      disabled: n,
      ...a
    },
    r ? /* @__PURE__ */ z.createElement(jS, null) : /* @__PURE__ */ z.createElement(US, null)
  );
}
function zS(n, r = 2) {
  if (n === 0) return "0 Bytes";
  const i = 1024, a = r < 0 ? 0 : r, u = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], c = Math.floor(Math.log(n) / Math.log(i));
  return parseFloat((n / Math.pow(i, c)).toFixed(a)) + " " + u[c];
}
function Dn(n, r, i, a, u) {
  return jt(r, ((c, f) => {
    const p = c[f];
    if (p === void 0)
      throw new TypeError(Nl(f));
    return p;
  })(n, r), i, a, u);
}
function jt(n, r, i, a, u, c) {
  const f = ho(r, i, a);
  if (u && r !== f)
    throw new RangeError(T0(n, r, i, a, c));
  return f;
}
function bn(n) {
  return n !== null && /object|function/.test(typeof n);
}
function Zn(n, r = Map) {
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
  return $t(((i) => ({
    value: i,
    configurable: 1,
    writable: !r
  })), n);
}
function GS(n) {
  return $t(((r) => ({
    get: r,
    configurable: 1
  })), n);
}
function kf(n) {
  return {
    [Symbol.toStringTag]: {
      value: n,
      configurable: 1
    }
  };
}
function Si(n, r) {
  const i = {};
  let a = n.length;
  for (const u of r)
    i[n[--a]] = u;
  return i;
}
function $t(n, r, i) {
  const a = {};
  for (const u in r)
    a[u] = n(r[u], u, i);
  return a;
}
function Qa(n, r, i) {
  const a = {};
  for (let u = 0; u < r.length; u++) {
    const c = r[u];
    a[c] = n(c, u, i);
  }
  return a;
}
function ly(n, r, i) {
  const a = {};
  for (let u = 0; u < n.length; u++)
    a[r[u]] = i[n[u]];
  return a;
}
function st(n, r) {
  const i = /* @__PURE__ */ Object.create(null);
  for (const a of n)
    i[a] = r[a];
  return i;
}
function rg(n, r) {
  for (const i of r)
    if (i in n)
      return 1;
  return 0;
}
function py(n, r, i) {
  for (const a of n)
    if (r[a] !== i[a])
      return 0;
  return 1;
}
function hy(n, r, i) {
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
function ZS() {
}
function ig(n) {
  return n[0].toUpperCase() + n.substring(1);
}
function Eo(n) {
  return n.slice().sort();
}
function Ua(n, r) {
  return String(r).padStart(n, "0");
}
function cr(n, r) {
  return Math.sign(n - r);
}
function ho(n, r, i) {
  return Math.min(Math.max(n, r), i);
}
function qt(n, r) {
  return [Math.floor(n / r), fo(n, r)];
}
function fo(n, r) {
  return (n % r + r) % r;
}
function pr(n, r) {
  return [eu(n, r), Uf(n, r)];
}
function eu(n, r) {
  return Math.trunc(n / r) || 0;
}
function Uf(n, r) {
  return n % r || 0;
}
function Ma(n) {
  return Math.abs(n % 1) === 0.5;
}
function dy(n, r, i) {
  let a = 0, u = 0;
  for (let p = 0; p <= r; p++) {
    const h = n[i[p]], g = Et[p], v = Ue / g, [m, w] = pr(h, v);
    a += w * g, u += m;
  }
  const [c, f] = pr(a, Ue);
  return [u + c, f];
}
function nu(n, r, i) {
  const a = {};
  for (let u = r; u >= 0; u--) {
    const c = Et[u];
    a[i[u]] = eu(n, c), n = Uf(n, c);
  }
  return a;
}
function HS(n) {
  if (n !== void 0)
    return pn(n);
}
function KS(n) {
  if (n !== void 0)
    return Bt(n);
}
function gy(n) {
  if (n !== void 0)
    return jf(n);
}
function Bt(n) {
  return vy(jf(n));
}
function jf(n) {
  return my(UO(n));
}
function yy(n, r) {
  if (r == null)
    throw new RangeError(Nl(n));
  return r;
}
function Ao(n) {
  if (!bn(n))
    throw new TypeError(lO);
  return n;
}
function $f(n, r, i = n) {
  if (typeof r !== n)
    throw new TypeError(Er(i, r));
  return r;
}
function my(n, r = "number") {
  if (!Number.isInteger(n))
    throw new RangeError(oO(r, n));
  return n || 0;
}
function vy(n, r = "number") {
  if (n <= 0)
    throw new RangeError(aO(r, n));
  return n;
}
function Wf(n) {
  if (typeof n == "symbol")
    throw new TypeError(fO);
  return String(n);
}
function ja(n, r) {
  return bn(n) ? String(n) : pn(n, r);
}
function Yf(n) {
  if (typeof n == "string")
    return BigInt(n);
  if (typeof n != "bigint")
    throw new TypeError(cO(n));
  return n;
}
function _y(n, r = "number") {
  if (typeof n == "bigint")
    throw new TypeError(sO(r));
  if (n = Number(n), !Number.isFinite(n))
    throw new RangeError(uO(r, n));
  return n;
}
function _n(n, r) {
  return Math.trunc(_y(n, r)) || 0;
}
function zf(n, r) {
  return my(_y(n, r), r);
}
function og(n, r) {
  return vy(_n(n, r), r);
}
function Gf(n, r) {
  let [i, a] = pr(r, Ue), u = n + i;
  const c = Math.sign(u);
  return c && c === -Math.sign(a) && (u -= c, a += c * Ue), [u, a];
}
function wi(n, r, i = 1) {
  return Gf(n[0] + r[0] * i, n[1] + r[1] * i);
}
function Br(n, r) {
  return Gf(n[0], n[1] + r);
}
function wt(n, r) {
  return wi(r, n, -1);
}
function Hn(n, r) {
  return cr(n[0], r[0]) || cr(n[1], r[1]);
}
function wy(n, r, i) {
  return Hn(n, r) === -1 || Hn(n, i) === 1;
}
function Zf(n, r = 1) {
  const i = BigInt(Ue / r);
  return [Number(n / i), Number(n % i) * r];
}
function $a(n, r = 1) {
  const i = Ue / r, [a, u] = pr(n, i);
  return [a, u * r];
}
function JS(n, r = 1) {
  const [i, a] = n, u = Math.floor(a / r), c = Ue / r;
  return BigInt(i) * BigInt(c) + BigInt(u);
}
function bt(n, r = 1, i) {
  const [a, u] = n, [c, f] = pr(u, r);
  return a * (Ue / r) + (c + (i ? f / r : 0));
}
function VS(n) {
  return n[0] + n[1] / Ue;
}
function Hf(n, r, i = qt) {
  const [a, u] = n, [c, f] = i(u, r);
  return [a * (Ue / r) + c, f];
}
function Kf(n) {
  return Dn(n, "isoYear", wo, _o, 1), n.isoYear === wo ? Dn(n, "isoMonth", 4, 12, 1) : n.isoYear === _o && Dn(n, "isoMonth", 1, 9, 1), n;
}
function ut(n) {
  return qn({
    ...n,
    ...kn,
    isoHour: 12
  }), n;
}
function qn(n) {
  const r = Dn(n, "isoYear", wo, _o, 1), i = r === wo ? 1 : r === _o ? -1 : 0;
  return i && At(on({
    ...n,
    isoDay: n.isoDay + i,
    isoNanosecond: n.isoNanosecond - i
  })), n;
}
function At(n) {
  if (!n || wy(n, ZO, GO))
    throw new RangeError(Ar);
  return n;
}
function hr(n) {
  return dy(n, 5, lt)[1];
}
function tu(n) {
  const [r, i] = qt(n, Ue);
  return [nu(i, 5, lt), r];
}
function XS(n) {
  return by(n)[0];
}
function by(n) {
  return Hf(n, _t);
}
function wn(n) {
  return Ii(n.isoYear, n.isoMonth, n.isoDay, n.isoHour, n.isoMinute, n.isoSecond, n.isoMillisecond);
}
function on(n) {
  const r = wn(n);
  if (r !== void 0) {
    const [i, a] = pr(r, Bn);
    return [i, a * zt + (n.isoMicrosecond || 0) * Mo + (n.isoNanosecond || 0)];
  }
}
function Jf(n, r) {
  const [i, a] = tu(hr(n) - r);
  return At(on({
    ...n,
    isoDay: n.isoDay + a,
    ...i
  }));
}
function Wa(...n) {
  return Ii(...n) / F0;
}
function Ii(...n) {
  const [r, i] = Ey(...n), a = r.valueOf();
  if (!isNaN(a))
    return a - i * Bn;
}
function Ey(n, r = 1, i = 1, a = 0, u = 0, c = 0, f = 0) {
  const p = n === wo ? 1 : n === _o ? -1 : 0, h = /* @__PURE__ */ new Date();
  return h.setUTCHours(a, u, c, f), h.setUTCFullYear(n, r - 1, i + p), [h, p];
}
function Ti(n, r) {
  let [i, a] = Br(n, r);
  a < 0 && (a += Ue, i -= 1);
  const [u, c] = qt(a, zt), [f, p] = qt(c, Mo);
  return ru(i * Bn + u, f, p);
}
function ru(n, r = 0, i = 0) {
  const a = Math.ceil(Math.max(0, Math.abs(n) - Zl) / Bn) * Math.sign(n), u = new Date(n - a * Bn);
  return Si(Tu, [u.getUTCFullYear(), u.getUTCMonth() + 1, u.getUTCDate() + a, u.getUTCHours(), u.getUTCMinutes(), u.getUTCSeconds(), u.getUTCMilliseconds(), r, i]);
}
function Vf(n, r) {
  if (r < -Zl)
    throw new RangeError(Ar);
  const i = n.formatToParts(r), a = {};
  for (const u of i)
    a[u.type] = u.value;
  return a;
}
function QS(n) {
  return n.isoDay;
}
function Xf(n) {
  return [n.isoYear, n.isoMonth, n.isoDay];
}
function Ay(n, r) {
  return [r, 0];
}
function eI(n, r) {
  if (!r)
    return [Ut, n];
}
function nI(n, r, i) {
  return {
    isoYear: n,
    isoMonth: r,
    isoDay: i
  };
}
function tI() {
  return 7;
}
function Sy() {
  return ur;
}
function Iy(n, r) {
  switch (r) {
    case 2:
      return Qf(n) ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
  }
  return 31;
}
function Ty(n) {
  return Qf(n) ? 366 : 365;
}
function Qf(n) {
  return n % 4 == 0 && (n % 100 != 0 || n % 400 == 0);
}
function Oy(n) {
  const [r, i] = Ey(n.isoYear, n.isoMonth, n.isoDay);
  return fo(r.getUTCDay() - i, 7) || 7;
}
function Ry(n) {
  return this.id === Fi ? (({ isoYear: r }) => r < 1 ? ["gregory-inverse", 1 - r] : ["gregory", r])(n) : this.id === yr ? JO(n) : [];
}
function rI(n) {
  const r = wn(n);
  if (r < KO) {
    const { isoYear: c } = n;
    return c < 1 ? ["japanese-inverse", 1 - c] : ["japanese", c];
  }
  const i = Vf(rp(yr), r), { era: a, eraYear: u } = d0(i, yr);
  return [a, u];
}
function iu(n) {
  return jr(n), Oi(n, 1), n;
}
function jr(n) {
  return xy(n, 1), n;
}
function ag(n) {
  return py(Yl, n, xy(n));
}
function xy(n, r) {
  const { isoYear: i } = n, a = Dn(n, "isoMonth", 1, Sy(), r);
  return {
    isoYear: i,
    isoMonth: a,
    isoDay: Dn(n, "isoDay", 1, Iy(i, a), r)
  };
}
function Oi(n, r) {
  return Si(lt, [Dn(n, "isoHour", 0, 23, r), Dn(n, "isoMinute", 0, 59, r), Dn(n, "isoSecond", 0, 59, r), Dn(n, "isoMillisecond", 0, 999, r), Dn(n, "isoMicrosecond", 0, 999, r), Dn(n, "isoNanosecond", 0, 999, r)]);
}
function xe(n) {
  return n === void 0 ? 0 : K0(Ao(n));
}
function ou(n, r = 0) {
  n = St(n);
  const i = J0(n), a = uR(n, r);
  return [K0(n), a, i];
}
function Ri(n, r, i, a = 9, u = 0, c = 4) {
  r = St(r);
  let f = H0(r, a, u), p = tl(r), h = Do(r, c);
  const g = Co(r, a, u, 1);
  return f == null ? f = Math.max(i, g) : Dy(f, g), p = rl(p, g, 1), n && (h = ((v) => v < 4 ? (v + 2) % 4 : v)(h)), [f, g, p, h];
}
function au(n, r = 6, i) {
  let a = tl(n = uu(n, Ja));
  const u = Do(n, 7);
  let c = Co(n, r);
  return c = yy(Ja, c), a = rl(a, c, void 0, i), [c, a, u];
}
function el(n) {
  return Hl(St(n));
}
function My(n, r) {
  return nl(St(n), r);
}
function iI(n) {
  const r = uu(n, pc), i = mr(pc, oR, r, 0);
  if (!i)
    throw new RangeError(Er(pc, i));
  return i;
}
function nl(n, r = 4) {
  const i = Cy(n);
  return [Do(n, 4), ...Py(Co(n, r), i)];
}
function Py(n, r) {
  return n != null ? [Et[n], n < 4 ? 9 - 3 * n : -1] : [r === void 0 ? 1 : 10 ** (9 - r), r];
}
function tl(n) {
  const r = n[lo];
  return r === void 0 ? 1 : _n(r, lo);
}
function rl(n, r, i, a) {
  const u = a ? Ue : Et[r + 1];
  if (u) {
    const c = Et[r];
    if (u % ((n = jt(lo, n, 1, u / c - (a ? 0 : 1), 1)) * c))
      throw new RangeError(Er(lo, n));
  } else
    n = jt(lo, n, 1, i ? 10 ** 9 : 1, 1);
  return n;
}
function Cy(n) {
  let r = n[lc];
  if (r !== void 0) {
    if (typeof r != "number") {
      if (Wf(r) === "auto")
        return;
      throw new RangeError(Er(lc, r));
    }
    r = jt(lc, Math.floor(r), 0, 9, 1);
  }
  return r;
}
function St(n) {
  return n === void 0 ? {} : Ao(n);
}
function uu(n, r) {
  return typeof n == "string" ? {
    [r]: n
  } : Ao(n);
}
function su(n) {
  return {
    overflow: XO[n]
  };
}
function il(n, r, i = 9, a = 0, u) {
  let c = r[n];
  if (c === void 0)
    return u ? a : void 0;
  if (c = Wf(c), c === "auto")
    return u ? a : null;
  let f = Pf[c];
  if (f === void 0 && (f = WO[c]), f === void 0)
    throw new RangeError(R0(n, c, Pf));
  return jt(n, f, a, i, 1, Fl), f;
}
function mr(n, r, i, a = 0) {
  const u = i[n];
  if (u === void 0)
    return a;
  const c = Wf(u), f = r[c];
  if (f === void 0)
    throw new RangeError(R0(n, c, r));
  return f;
}
function Dy(n, r) {
  if (r > n)
    throw new RangeError(CO);
}
function Wt(n) {
  return {
    branding: Xl,
    epochNanoseconds: n
  };
}
function ct(n, r, i) {
  return {
    branding: Sr,
    calendar: i,
    timeZone: r,
    epochNanoseconds: n
  };
}
function ft(n, r = n.calendar) {
  return {
    branding: Li,
    calendar: r,
    ...st(YO, n)
  };
}
function Yt(n, r = n.calendar) {
  return {
    branding: No,
    calendar: r,
    ...st(zl, n)
  };
}
function go(n, r = n.calendar) {
  return {
    branding: Kl,
    calendar: r,
    ...st(zl, n)
  };
}
function Ya(n, r = n.calendar) {
  return {
    branding: Jl,
    calendar: r,
    ...st(zl, n)
  };
}
function It(n) {
  return {
    branding: Vl,
    ...st(z0, n)
  };
}
function Qe(n) {
  return {
    branding: Ql,
    sign: vr(n),
    ...st(jl, n)
  };
}
function ol(n) {
  return Hf(n.epochNanoseconds, zt)[0];
}
function oI(n) {
  return JS(n.epochNanoseconds);
}
function Ny(n) {
  return n.epochNanoseconds;
}
function aI(n, r, i, a, u) {
  const c = qr(a), [f, p] = ((A, R) => {
    const L = R((A = uu(A, Df))[G0]);
    let S = aR(A);
    return S = yy(Df, S), [S, L];
  })(u, n), h = Math.max(f, c);
  if (!p && mo(h, p))
    return ug(a, f);
  if (!p)
    throw new RangeError(Au);
  if (!a.sign)
    return 0;
  const [g, v, m] = hu(r, i, p), w = dl(m), P = du(m), I = gl(m), M = P(v, g, a);
  bi(p) || (qn(g), qn(M));
  const W = I(v, g, M, f);
  return mo(f, p) ? ug(W, f) : uI(W, w(M), f, v, g, w, P);
}
function uI(n, r, i, a, u, c, f) {
  const p = vr(n), [h, g] = al(a, Wl(i, n), i, p, u, c, f), v = ul(r, h, g);
  return n[De[i]] + v * p;
}
function ug(n, r) {
  return bt(an(n), Et[r], 1);
}
function al(n, r, i, a, u, c, f) {
  const p = De[i], h = {
    ...r,
    [p]: r[p] + a
  }, g = f(n, u, r), v = f(n, u, h);
  return [c(g), c(v)];
}
function ul(n, r, i) {
  const a = bt(wt(r, i));
  if (!a)
    throw new RangeError(Di);
  return bt(wt(r, n)) / a;
}
function sI(n, r) {
  const [i, a, u] = au(r, 5, 1);
  return Wt(fu(n.epochNanoseconds, i, a, u, 1));
}
function cI(n, r, i) {
  let { epochNanoseconds: a, timeZone: u, calendar: c } = r;
  const [f, p, h] = au(i);
  if (f === 0 && p === 1)
    return r;
  const g = n(u);
  if (f === 6)
    a = gI(By, g, r, h);
  else {
    const v = g.N(a);
    a = xi(g, Fy(Ti(a, v), f, p, h), v, 2, 0, 1);
  }
  return ct(a, u, c);
}
function fI(n, r) {
  return ft(Fy(n, ...au(r)), n.calendar);
}
function lI(n, r) {
  const [i, a, u] = au(r, 5);
  var c;
  return It((c = u, sl(n, So(i, a), c)[0]));
}
function pI(n, r) {
  const i = n(r.timeZone), a = Jn(r, i), [u, c] = By(a), f = bt(wt(gr(i, u), gr(i, c)), Iu, 1);
  if (f <= 0)
    throw new RangeError(Di);
  return f;
}
function hI(n, r) {
  const { timeZone: i, calendar: a } = r;
  return ct(dI(qy, n(i), r), i, a);
}
function dI(n, r, i) {
  return gr(r, n(Jn(i, r)));
}
function gI(n, r, i, a) {
  const u = Jn(i, r), [c, f] = n(u), p = i.epochNanoseconds, h = gr(r, c), g = gr(r, f);
  if (wy(p, h, g))
    throw new RangeError(Di);
  return ky(ul(p, h, g), a) ? g : h;
}
function Fy(n, r, i, a) {
  return Ly(n, So(r, i), a);
}
function Ly(n, r, i) {
  const [a, u] = sl(n, r, i);
  return qn({
    ...$r(n, u),
    ...a
  });
}
function sl(n, r, i) {
  return tu(dr(hr(n), r, i));
}
function za(n) {
  return dr(n, Su, 7);
}
function So(n, r) {
  return Et[n] * r;
}
function By(n) {
  const r = qy(n);
  return [r, $r(r, 1)];
}
function qy(n) {
  return zO(6, n);
}
function yI(n, r, i) {
  const a = Math.min(qr(n), 6);
  return Mi(lu(an(n, a), r, i), a);
}
function cu(n, r, i, a, u, c, f, p, h, g) {
  if (a === 0 && u === 1)
    return n;
  const v = mo(a, p) ? bi(p) && a < 6 && i >= 6 ? vI : mI : _I;
  let [m, w, P] = v(n, r, i, a, u, c, f, p, h, g);
  return P && a !== 7 && (m = ((I, M, W, A, R, L, S, x) => {
    const N = vr(I);
    for (let k = A + 1; k <= W; k++) {
      if (k === 7 && W !== 7)
        continue;
      const G = Wl(k, I);
      G[De[k]] += N;
      const H = bt(wt(S(x(R, L, G)), M));
      if (H && Math.sign(H) !== N)
        break;
      I = G;
    }
    return I;
  })(m, w, i, Math.max(6, a), f, p, h, g)), m;
}
function fu(n, r, i, a, u) {
  return r === 6 ? [dr(VS(n), i, a), 0] : lu(n, So(r, i), a, u);
}
function lu(n, r, i, a) {
  let [u, c] = n;
  a && c < 0 && (c += Ue, u -= 1);
  const [f, p] = qt(dr(c, r, i), Ue);
  return Gf(u + f, p);
}
function dr(n, r, i) {
  return ky(n / r, i) * r;
}
function ky(n, r) {
  return fR[r](n);
}
function mI(n, r, i, a, u, c) {
  const f = vr(n), p = an(n), h = fu(p, a, u, c), g = wt(p, h), v = Math.sign(h[0] - p[0]) === f, m = Mi(h, Math.min(i, 6));
  return [{
    ...n,
    ...m
  }, wi(r, g), v];
}
function vI(n, r, i, a, u, c, f, p, h, g) {
  const v = vr(n) || 1, m = bt(an(n, 5)), w = So(a, u);
  let P = dr(m, w, c);
  const [I, M] = al(f, {
    ...n,
    ...$l
  }, 6, v, p, h, g), W = P - bt(wt(I, M));
  let A = 0;
  W && Math.sign(W) !== v ? r = Br(I, P) : (A += v, P = dr(W, w, c), r = Br(M, P));
  const R = gu(P);
  return [{
    ...n,
    ...R,
    days: n.days + A
  }, r, !!A];
}
function _I(n, r, i, a, u, c, f, p, h, g) {
  const v = vr(n), m = De[a], w = Wl(a, n);
  a === 7 && (n = {
    ...n,
    weeks: n.weeks + Math.trunc(n.days / 7)
  });
  const P = eu(n[m], u) * u;
  w[m] = P;
  const [I, M] = al(f, w, a, u * v, p, h, g), W = P + ul(r, I, M) * v * u, A = dr(W, u, c), R = Math.sign(A - W) === v;
  return w[m] = A, [w, R ? M : I, R];
}
function nc(n, r, i, a) {
  const [u, c, f, p] = ((g) => {
    const v = nl(g = St(g));
    return [g.timeZone, ...v];
  })(a), h = u !== void 0;
  return ((g, v, m, w, P, I) => {
    m = lu(m, P, w, 1);
    const M = v.N(m);
    return cl(Ti(m, M), I) + (g ? Io(za(M)) : "Z");
  })(h, r(h ? n(u) : Gr), i.epochNanoseconds, c, f, p);
}
function tc(n, r, i) {
  const [a, u, c, f, p, h] = ((g) => {
    g = St(g);
    const v = Hl(g), m = Cy(g), w = cR(g), P = Do(g, 4), I = Co(g, 4);
    return [v, sR(g), w, P, ...Py(I, m)];
  })(i);
  return ((g, v, m, w, P, I, M, W, A, R) => {
    w = lu(w, A, W, 1);
    const L = g(m).N(w);
    return cl(Ti(w, L), R) + Io(za(L), M) + ((S, x) => x !== 1 ? "[" + (x === 2 ? "!" : "") + S + "]" : "")(m, I) + fl(v, P);
  })(n, r.calendar, r.timeZone, r.epochNanoseconds, a, u, c, f, p, h);
}
function rc(n, r) {
  const [i, a, u, c] = ((g) => (g = St(g), [Hl(g), ...nl(g)]))(r);
  return f = n.calendar, p = i, h = c, cl(Ly(n, u, a), h) + fl(f, p);
  var f, p, h;
}
function ic(n, r) {
  return i = n.calendar, a = n, u = el(r), Ga(a) + fl(i, u);
  var i, a, u;
}
function oc(n, r) {
  return Uy(n.calendar, jy, n, el(r));
}
function ac(n, r) {
  return Uy(n.calendar, wI, n, el(r));
}
function uc(n, r) {
  const [i, a, u] = My(r);
  return c = u, $y(sl(n, a, i)[0], c);
  var c;
}
function Pa(n, r) {
  const [i, a, u] = My(r, 3);
  return a > 1 && Wr(n = {
    ...n,
    ...yI(n, a, i)
  }), ((c, f) => {
    const { sign: p } = c, h = p === -1 ? En(c) : c, { hours: g, minutes: v } = h, [m, w] = Hf(an(h, 3), _t, pr);
    Gy(m);
    const P = ll(w, f), I = f >= 0 || !p || P;
    return (p < 0 ? "-" : "") + "P" + sg({
      Y: Lr(h.years),
      M: Lr(h.months),
      W: Lr(h.weeks),
      D: Lr(h.days)
    }) + (g || v || m || I ? "T" + sg({
      H: Lr(g),
      M: Lr(v),
      S: Lr(m, I) + P
    }) : "");
  })(n, u);
}
function Uy(n, r, i, a) {
  const u = a > 1 || a === 0 && n !== Se;
  return a === 1 ? n === Se ? r(i) : Ga(i) : u ? Ga(i) + Wy(n, a === 2) : r(i);
}
function sg(n) {
  const r = [];
  for (const i in n) {
    const a = n[i];
    a && r.push(a, i);
  }
  return r.join("");
}
function cl(n, r) {
  return Ga(n) + "T" + $y(n, r);
}
function Ga(n) {
  return jy(n) + "-" + it(n.isoDay);
}
function jy(n) {
  const { isoYear: r } = n;
  return (r < 0 || r > 9999 ? Yy(r) + Ua(6, Math.abs(r)) : Ua(4, r)) + "-" + it(n.isoMonth);
}
function wI(n) {
  return it(n.isoMonth) + "-" + it(n.isoDay);
}
function $y(n, r) {
  const i = [it(n.isoHour), it(n.isoMinute)];
  return r !== -1 && i.push(it(n.isoSecond) + ((a, u, c, f) => ll(a * zt + u * Mo + c, f))(n.isoMillisecond, n.isoMicrosecond, n.isoNanosecond, r)), i.join(":");
}
function Io(n, r = 0) {
  if (r === 1)
    return "";
  const [i, a] = qt(Math.abs(n), Iu), [u, c] = qt(a, Su), [f, p] = qt(c, _t);
  return Yy(n) + it(i) + ":" + it(u) + (f || p ? ":" + it(f) + ll(p) : "");
}
function fl(n, r) {
  return r !== 1 && (r > 1 || r === 0 && n !== Se) ? Wy(n, r === 2) : "";
}
function Wy(n, r) {
  return "[" + (r ? "!" : "") + "u-ca=" + n + "]";
}
function ll(n, r) {
  let i = Ua(9, n);
  return i = r === void 0 ? i.replace(hR, "") : i.slice(0, r), i ? "." + i : "";
}
function Yy(n) {
  return n < 0 ? "-" : "+";
}
function Lr(n, r) {
  return n || r ? n.toLocaleString("fullwide", {
    useGrouping: 0
  }) : "";
}
function bI(n, r) {
  const { epochNanoseconds: i } = n, a = (r.N ? r : r(n.timeZone)).N(i), u = Ti(i, a);
  return {
    calendar: n.calendar,
    ...u,
    offsetNanoseconds: a
  };
}
function xi(n, r, i, a = 0, u = 0, c, f) {
  if (i !== void 0 && a === 1 && (a === 1 || f))
    return Jf(r, i);
  const p = n.v(r);
  if (i !== void 0 && a !== 3) {
    const h = ((g, v, m, w) => {
      const P = on(v);
      w && (m = za(m));
      for (const I of g) {
        let M = bt(wt(I, P));
        if (w && (M = za(M)), M === m)
          return I;
      }
    })(p, r, i, c);
    if (h !== void 0)
      return h;
    if (a === 0)
      throw new RangeError(TO);
  }
  return f ? on(r) : To(n, r, u, p);
}
function To(n, r, i = 0, a = n.v(r)) {
  if (a.length === 1)
    return a[0];
  if (i === 1)
    throw new RangeError(OO);
  if (a.length)
    return a[i === 3 ? 1 : 0];
  const u = on(r), c = ((p, h) => {
    const g = p.N(Br(h, -Ue));
    return ((v) => {
      if (v > Ue)
        throw new RangeError(IO);
      return v;
    })(p.N(Br(h, Ue)) - g);
  })(n, u), f = c * (i === 2 ? -1 : 1);
  return (a = n.v(Ti(u, f)))[i === 2 ? 0 : a.length - 1];
}
function gr(n, r) {
  const i = n.v(r);
  if (i.length)
    return i[0];
  const a = Br(on(r), -Ue);
  return n.l(a, 1);
}
function cg(n, r, i) {
  return Wt(At(wi(r.epochNanoseconds, ((a) => {
    if (Zy(a))
      throw new RangeError(MO);
    return an(a, 5);
  })(n ? En(i) : i))));
}
function fg(n, r, i, a, u, c = /* @__PURE__ */ Object.create(null)) {
  const f = r(a.timeZone), p = n(a.calendar);
  return {
    ...a,
    ...pl(f, p, a, i ? En(u) : u, c)
  };
}
function lg(n, r, i, a, u = /* @__PURE__ */ Object.create(null)) {
  const { calendar: c } = i;
  return ft(hl(n(c), i, r ? En(a) : a, u), c);
}
function pg(n, r, i, a, u) {
  const { calendar: c } = i;
  return Yt(pu(n(c), i, r ? En(a) : a, u), c);
}
function hg(n, r, i, a, u) {
  const c = i.calendar, f = n(c);
  let p = ut(yo(f, i));
  r && (a = yl(a)), a.sign < 0 && (p = f.P(p, {
    ...un,
    months: 1
  }), p = $r(p, -1));
  const h = f.P(p, a, u);
  return go(yo(f, h), c);
}
function dg(n, r, i) {
  return It(zy(r, n ? En(i) : i)[0]);
}
function pl(n, r, i, a, u) {
  const c = an(a, 5);
  let f = i.epochNanoseconds;
  if (Zy(a)) {
    const p = Jn(i, n);
    f = wi(To(n, {
      ...pu(r, p, {
        ...a,
        ...$l
      }, u),
      ...st(lt, p)
    }), c);
  } else
    f = wi(f, c), xe(u);
  return {
    epochNanoseconds: At(f)
  };
}
function hl(n, r, i, a) {
  const [u, c] = zy(r, i);
  return qn({
    ...pu(n, r, {
      ...i,
      ...$l,
      days: i.days + c
    }, a),
    ...u
  });
}
function pu(n, r, i, a) {
  if (i.years || i.months || i.weeks)
    return n.P(r, i, a);
  xe(a);
  const u = i.days + an(i, 5)[0];
  return u ? ut($r(r, u)) : r;
}
function yo(n, r, i = 1) {
  return $r(r, i - n.day(r));
}
function zy(n, r) {
  const [i, a] = an(r, 5), [u, c] = tu(hr(n) + a);
  return [u, i + c];
}
function EI(n, r, i) {
  const a = xe(i);
  let u, { years: c, months: f, weeks: p, days: h } = r;
  if (h += an(r, 5)[0], c || f)
    u = AI(this, n, c, f, a);
  else {
    if (!p && !h)
      return n;
    u = wn(n);
  }
  if (u === void 0)
    throw new RangeError(Ar);
  return u += (7 * p + h) * Bn, ut(ru(u));
}
function AI(n, r, i, a, u) {
  let [c, f, p] = n.u(r);
  if (i) {
    const [h, g] = n.m(c, f);
    c += i, f = wu(h, g, n.F(c)), f = jt("month", f, 1, n.O(c), u);
  }
  return a && ([c, f] = n.p(c, f, a)), p = jt("day", p, 1, n.B(c, f), u), n.M(c, f, p);
}
function SI(n, r, i) {
  return n += eu(i, ur), (r += Uf(i, ur)) < 1 ? (n--, r += ur) : r > ur && (n++, r -= ur), [n, r];
}
function II(n, r, i) {
  if (i) {
    if (r += i, !Number.isSafeInteger(r))
      throw new RangeError(Ar);
    if (i < 0)
      for (; r < 1; )
        r += Ha.call(this, --n);
    else {
      let a;
      for (; r > (a = Ha.call(this, n)); )
        r -= a, n++;
    }
  }
  return [n, r];
}
function $r(n, r) {
  return r ? {
    ...n,
    ...ru(wn(n) + r * Bn)
  } : n;
}
function hu(n, r, i) {
  const a = n(i.calendar);
  return bi(i) ? [i, a, r(i.timeZone)] : [{
    ...i,
    ...kn
  }, a];
}
function dl(n) {
  return n ? Ny : on;
}
function du(n) {
  return n ? Ie(pl, n) : hl;
}
function gl(n) {
  return n ? Ie(KI, n) : JI;
}
function bi(n) {
  return n && n.epochNanoseconds;
}
function mo(n, r) {
  return n <= 6 - (bi(r) ? 1 : 0);
}
function gg(n, r, i, a, u, c, f) {
  const p = n(St(f).relativeTo), h = Math.max(qr(u), qr(c));
  if (mo(h, p))
    return Qe(Wr(((M, W, A, R) => {
      const L = wi(an(M), an(W), R ? -1 : 1);
      if (!Number.isFinite(L[0]))
        throw new RangeError(Ar);
      return {
        ...un,
        ...Mi(L, A)
      };
    })(u, c, h, a)));
  if (!p)
    throw new RangeError(Au);
  a && (c = En(c));
  const [g, v, m] = hu(r, i, p), w = du(m), P = gl(m), I = w(v, g, u);
  return Qe(P(v, g, w(v, I, c), h));
}
function TI(n, r, i, a, u) {
  const c = qr(a), [f, p, h, g, v] = ((N, k, G) => {
    N = uu(N, Ja);
    let H = H0(N);
    const V = G(N[G0]);
    let le = tl(N);
    const we = Do(N, 7);
    let Fe = Co(N);
    if (H === void 0 && Fe === void 0)
      throw new RangeError(PO);
    if (Fe == null && (Fe = 0), H == null && (H = Math.max(Fe, k)), Dy(H, Fe), le = rl(le, Fe, 1), le > 1 && Fe > 5 && H !== Fe)
      throw new RangeError("For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit");
    return [H, Fe, le, we, V];
  })(u, c, n), m = Math.max(c, f);
  if (!v && m <= 6)
    return Qe(Wr(((N, k, G, H, V) => {
      const le = fu(an(N), G, H, V);
      return {
        ...un,
        ...Mi(le, k)
      };
    })(a, f, p, h, g)));
  if (!bi(v) && !a.sign)
    return a;
  if (!v)
    throw new RangeError(Au);
  const [w, P, I] = hu(r, i, v), M = dl(I), W = du(I), A = gl(I), R = W(P, w, a);
  bi(v) || (qn(w), qn(R));
  let L = A(P, w, R, f);
  const S = a.sign, x = vr(L);
  if (S && x && S !== x)
    throw new RangeError(Di);
  return L = cu(L, M(R), f, p, h, g, P, w, M, W), Qe(L);
}
function OI(n) {
  return n.sign === -1 ? yl(n) : n;
}
function yl(n) {
  return Qe(En(n));
}
function En(n) {
  const r = {};
  for (const i of De)
    r[i] = -1 * n[i] || 0;
  return r;
}
function RI(n) {
  return !n.sign;
}
function vr(n, r = De) {
  let i = 0;
  for (const a of r) {
    const u = Math.sign(n[a]);
    if (u) {
      if (i && i !== u)
        throw new RangeError(xO);
      i = u;
    }
  }
  return i;
}
function Wr(n) {
  for (const r of $O)
    jt(r, n[r], -Ig, Ig, 1);
  return Gy(bt(an(n), _t)), n;
}
function Gy(n) {
  if (!Number.isSafeInteger(n))
    throw new RangeError(RO);
}
function an(n, r = 6) {
  return dy(n, r, De);
}
function Mi(n, r = 6) {
  const [i, a] = n, u = nu(a, r, De);
  if (u[De[r]] += i * (Ue / Et[r]), !Number.isFinite(u[De[r]]))
    throw new RangeError(Ar);
  return u;
}
function gu(n, r = 5) {
  return nu(n, r, De);
}
function Zy(n) {
  return !!vr(n, Y0);
}
function qr(n) {
  let r = 9;
  for (; r > 0 && !n[De[r]]; r--)
    ;
  return r;
}
function xI(n, r) {
  return [n, r];
}
function yg(n) {
  const r = Math.floor(n / qa) * qa;
  return [r, r + qa];
}
function MI(n) {
  const r = _r(n = ja(n));
  if (!r)
    throw new RangeError(Fn(n));
  let i;
  if (r.C)
    i = 0;
  else {
    if (!r.offset)
      throw new RangeError(Fn(n));
    i = Yr(r.offset);
  }
  return r.timeZone && bl(r.timeZone, 1), Wt(Jf(iu(r), i));
}
function PI(n) {
  const r = _r(pn(n));
  if (!r)
    throw new RangeError(Fn(n));
  if (r.timeZone)
    return Hy(r, r.offset ? Yr(r.offset) : void 0);
  if (r.C)
    throw new RangeError(Fn(n));
  return Jy(r);
}
function CI(n, r) {
  const i = _r(pn(n));
  if (!i || !i.timeZone)
    throw new RangeError(Fn(n));
  const { offset: a } = i, u = a ? Yr(a) : void 0, [, c, f] = ou(r);
  return Hy(i, u, c, f);
}
function Yr(n) {
  const r = bl(n);
  if (r === void 0)
    throw new RangeError(Fn(n));
  return r;
}
function DI(n) {
  const r = _r(pn(n));
  if (!r || r.C)
    throw new RangeError(Fn(n));
  return ft(Ky(r));
}
function ml(n, r, i) {
  let a = _r(pn(n));
  if (!a || a.C)
    throw new RangeError(Fn(n));
  return r ? a.calendar === Se && (a = a.isoYear === -271821 && a.isoMonth === 4 ? {
    ...a,
    isoDay: 20,
    ...kn
  } : {
    ...a,
    isoDay: 1,
    ...kn
  }) : i && a.calendar === Se && (a = {
    ...a,
    isoYear: Ut
  }), Yt(a.k ? Ky(a) : Jy(a));
}
function NI(n, r) {
  const i = _l(pn(r));
  if (i)
    return vl(i), go(Kf(jr(i)));
  const a = ml(r, 1);
  return go(yo(n(a.calendar), a));
}
function vl(n) {
  if (n.calendar !== Se)
    throw new RangeError(kt(n.calendar));
}
function FI(n, r) {
  const i = wl(pn(r));
  if (i)
    return vl(i), Ya(jr(i));
  const a = ml(r, 0, 1), { calendar: u } = a, c = n(u), [f, p, h] = c.u(a), [g, v] = c.m(f, p), [m, w] = c.R(g, v, h);
  return Ya(ut(c.U(m, w, h)), u);
}
function LI(n) {
  let r, i = ((a) => {
    const u = wR.exec(a);
    return u ? (yu(u[10]), Qy(u)) : void 0;
  })(pn(n));
  if (!i) {
    if (i = _r(n), !i)
      throw new RangeError(Fn(n));
    if (!i.k)
      throw new RangeError(Fn(n));
    if (i.C)
      throw new RangeError(kt("Z"));
    vl(i);
  }
  if ((r = _l(n)) && ag(r))
    throw new RangeError(Fn(n));
  if ((r = wl(n)) && ag(r))
    throw new RangeError(Fn(n));
  return It(Oi(i, 1));
}
function BI(n) {
  const r = ((i) => {
    const a = AR.exec(i);
    return a ? ((u) => {
      function c(v, m, w) {
        let P = 0, I = 0;
        if (w && ([P, h] = qt(h, Et[w])), v !== void 0) {
          if (p)
            throw new RangeError(kt(v));
          I = ((M) => {
            const W = parseInt(M);
            if (!Number.isFinite(W))
              throw new RangeError(kt(M));
            return W;
          })(v), f = 1, m && (h = El(m) * (Et[w] / _t), p = 1);
        }
        return P + I;
      }
      let f = 0, p = 0, h = 0, g = {
        ...Si(De, [c(u[2]), c(u[3]), c(u[4]), c(u[5]), c(u[6], u[7], 5), c(u[8], u[9], 4), c(u[10], u[11], 3)]),
        ...nu(h, 2, De)
      };
      if (!f)
        throw new RangeError(O0(De));
      return Al(u[1]) < 0 && (g = En(g)), g;
    })(a) : void 0;
  })(pn(n));
  if (!r)
    throw new RangeError(Fn(n));
  return Qe(Wr(r));
}
function qI(n) {
  const r = _r(n) || _l(n) || wl(n);
  return r ? r.calendar : n;
}
function kI(n) {
  const r = _r(n);
  return r && (r.timeZone || r.C && Gr || r.offset) || n;
}
function Hy(n, r, i = 0, a = 0) {
  const u = Sl(n.timeZone), c = ge(u);
  let f;
  return iu(n), f = n.k ? xi(c, n, r, i, a, !c.j, n.C) : gr(c, n), ct(f, u, Eu(n.calendar));
}
function Ky(n) {
  return Vy(qn(iu(n)));
}
function Jy(n) {
  return Vy(ut(jr(n)));
}
function Vy(n) {
  return {
    ...n,
    calendar: Eu(n.calendar)
  };
}
function _r(n) {
  const r = _R.exec(n);
  return r ? ((i) => {
    const a = i[10], u = (a || "").toUpperCase() === "Z";
    return {
      isoYear: Xy(i),
      isoMonth: parseInt(i[4]),
      isoDay: parseInt(i[5]),
      ...Qy(i.slice(5)),
      ...yu(i[16]),
      k: !!i[6],
      C: u,
      offset: u ? void 0 : a
    };
  })(r) : void 0;
}
function _l(n) {
  const r = mR.exec(n);
  return r ? ((i) => ({
    isoYear: Xy(i),
    isoMonth: parseInt(i[4]),
    isoDay: 1,
    ...yu(i[5])
  }))(r) : void 0;
}
function wl(n) {
  const r = vR.exec(n);
  return r ? ((i) => ({
    isoYear: Ut,
    isoMonth: parseInt(i[1]),
    isoDay: parseInt(i[2]),
    ...yu(i[3])
  }))(r) : void 0;
}
function bl(n, r) {
  const i = bR.exec(n);
  return i ? ((a, u) => {
    const c = a[4] || a[5];
    if (u && c)
      throw new RangeError(kt(c));
    return ((f) => {
      if (Math.abs(f) >= Ue)
        throw new RangeError(SO);
      return f;
    })((vi(a[2]) * Iu + vi(a[3]) * Su + vi(a[4]) * _t + El(a[5] || "")) * Al(a[1]));
  })(i, r) : void 0;
}
function Xy(n) {
  const r = Al(n[1]), i = parseInt(n[2] || n[3]);
  if (r < 0 && !i)
    throw new RangeError(kt(-0));
  return r * i;
}
function Qy(n) {
  const r = vi(n[3]);
  return {
    ...tu(El(n[4] || ""))[0],
    isoHour: vi(n[1]),
    isoMinute: vi(n[2]),
    isoSecond: r === 60 ? 59 : r
  };
}
function yu(n) {
  let r, i;
  const a = [];
  if (n.replace(ER, ((u, c, f) => {
    const p = !!c, [h, g] = f.split("=").reverse();
    if (g) {
      if (g === "u-ca")
        a.push(h), r || (r = p);
      else if (p || /[A-Z]/.test(g))
        throw new RangeError(kt(u));
    } else {
      if (i)
        throw new RangeError(kt(u));
      i = h;
    }
    return "";
  })), a.length > 1 && r)
    throw new RangeError(kt(n));
  return {
    timeZone: i,
    calendar: a[0] || Se
  };
}
function El(n) {
  return parseInt(n.padEnd(9, "0"));
}
function Pi(n) {
  return new RegExp(`^${n}$`, "i");
}
function Al(n) {
  return n && n !== "+" ? -1 : 1;
}
function vi(n) {
  return n === void 0 ? 0 : parseInt(n);
}
function UI(n) {
  return Sl(pn(n));
}
function Sl(n) {
  const r = Il(n);
  return typeof r == "number" ? Io(r) : r ? ((i) => {
    if (TR.test(i))
      throw new RangeError(C0(i));
    if (IR.test(i))
      throw new RangeError(AO);
    return i.toLowerCase().split("/").map(((a, u) => (a.length <= 3 || /\d/.test(a)) && !/etc|yap/.test(a) ? a.toUpperCase() : a.replace(/baja|dumont|[a-z]+/g, ((c, f) => c.length <= 2 && !u || c === "in" || c === "chat" ? c.toUpperCase() : c.length > 2 || !f ? ig(c).replace(/island|noronha|murdo|rivadavia|urville/, ig) : c)))).join("/");
  })(n) : Gr;
}
function mg(n) {
  const r = Il(n);
  return typeof r == "number" ? r : r ? r.resolvedOptions().timeZone : Gr;
}
function Il(n) {
  const r = bl(n = n.toUpperCase(), 1);
  return r !== void 0 ? r : n !== Gr ? SR(n) : void 0;
}
function e0(n, r) {
  return Hn(n.epochNanoseconds, r.epochNanoseconds);
}
function n0(n, r) {
  return Hn(n.epochNanoseconds, r.epochNanoseconds);
}
function jI(n, r, i, a, u, c) {
  const f = n(St(c).relativeTo), p = Math.max(qr(a), qr(u));
  if (py(De, a, u))
    return 0;
  if (mo(p, f))
    return Hn(an(a), an(u));
  if (!f)
    throw new RangeError(Au);
  const [h, g, v] = hu(r, i, f), m = dl(v), w = du(v);
  return Hn(m(w(g, h, a)), m(w(g, h, u)));
}
function t0(n, r) {
  return Ci(n, r) || Tl(n, r);
}
function Ci(n, r) {
  return cr(wn(n), wn(r));
}
function Tl(n, r) {
  return cr(hr(n), hr(r));
}
function $I(n, r) {
  return !e0(n, r);
}
function WI(n, r) {
  return !n0(n, r) && !!r0(n.timeZone, r.timeZone) && n.calendar === r.calendar;
}
function YI(n, r) {
  return !t0(n, r) && n.calendar === r.calendar;
}
function zI(n, r) {
  return !Ci(n, r) && n.calendar === r.calendar;
}
function GI(n, r) {
  return !Ci(n, r) && n.calendar === r.calendar;
}
function ZI(n, r) {
  return !Ci(n, r) && n.calendar === r.calendar;
}
function HI(n, r) {
  return !Tl(n, r);
}
function r0(n, r) {
  if (n === r)
    return 1;
  try {
    return mg(n) === mg(r);
  } catch {
  }
}
function vg(n, r, i, a) {
  const u = Ri(n, a, 3, 5), c = mu(r.epochNanoseconds, i.epochNanoseconds, ...u);
  return Qe(n ? En(c) : c);
}
function _g(n, r, i, a, u, c) {
  const f = _u(a.calendar, u.calendar), [p, h, g, v] = Ri(i, c, 5), m = a.epochNanoseconds, w = u.epochNanoseconds, P = Hn(w, m);
  let I;
  if (P)
    if (p < 6)
      I = mu(m, w, p, h, g, v);
    else {
      const M = r(nT(a.timeZone, u.timeZone)), W = n(f);
      I = o0(W, M, a, u, P, p, c), I = cu(I, w, p, h, g, v, W, a, Ny, Ie(pl, M));
    }
  else
    I = un;
  return Qe(i ? En(I) : I);
}
function wg(n, r, i, a, u) {
  const c = _u(i.calendar, a.calendar), [f, p, h, g] = Ri(r, u, 6), v = on(i), m = on(a), w = Hn(m, v);
  let P;
  if (w)
    if (f <= 6)
      P = mu(v, m, f, p, h, g);
    else {
      const I = n(c);
      P = a0(I, i, a, w, f, u), P = cu(P, m, f, p, h, g, I, i, on, hl);
    }
  else
    P = un;
  return Qe(r ? En(P) : P);
}
function bg(n, r, i, a, u) {
  const c = _u(i.calendar, a.calendar);
  return i0(r, (() => n(c)), i, a, ...Ri(r, u, 6, 9, 6));
}
function Eg(n, r, i, a, u) {
  const c = _u(i.calendar, a.calendar), f = Ri(r, u, 9, 9, 8), p = n(c), h = yo(p, i), g = yo(p, a);
  return h.isoYear === g.isoYear && h.isoMonth === g.isoMonth && h.isoDay === g.isoDay ? Qe(un) : i0(r, (() => p), ut(h), ut(g), ...f, 8);
}
function i0(n, r, i, a, u, c, f, p, h = 6) {
  const g = on(i), v = on(a);
  if (g === void 0 || v === void 0)
    throw new RangeError(Ar);
  let m;
  if (Hn(v, g))
    if (u === 6)
      m = mu(g, v, u, c, f, p);
    else {
      const w = r();
      m = w.h(i, a, u), c === h && f === 1 || (m = cu(m, v, u, c, f, p, w, i, on, pu));
    }
  else
    m = un;
  return Qe(n ? En(m) : m);
}
function Ag(n, r, i, a) {
  const [u, c, f, p] = Ri(n, a, 5, 5), h = dr(Ol(r, i), So(c, f), p), g = {
    ...un,
    ...gu(h, u)
  };
  return Qe(n ? En(g) : g);
}
function KI(n, r, i, a, u, c) {
  const f = Hn(a.epochNanoseconds, i.epochNanoseconds);
  return f ? u < 6 ? u0(i.epochNanoseconds, a.epochNanoseconds, u) : o0(r, n, i, a, f, u, c) : un;
}
function JI(n, r, i, a, u) {
  const c = on(r), f = on(i), p = Hn(f, c);
  return p ? a <= 6 ? u0(c, f, a) : a0(n, r, i, p, a, u) : un;
}
function o0(n, r, i, a, u, c, f) {
  const [p, h, g] = VI(r, i, a, u);
  var v, m;
  return {
    ...c === 6 ? (v = p, m = h, {
      ...un,
      days: s0(v, m)
    }) : n.h(p, h, c, f),
    ...gu(g)
  };
}
function a0(n, r, i, a, u, c) {
  const [f, p, h] = ((g, v, m) => {
    let w = v, P = Ol(g, v);
    return Math.sign(P) === -m && (w = $r(v, -m), P += Ue * m), [g, w, P];
  })(r, i, a);
  return {
    ...n.h(f, p, u, c),
    ...gu(h)
  };
}
function VI(n, r, i, a) {
  function u() {
    return m = {
      ...$r(p, g++ * -a),
      ...f
    }, w = To(n, m), Hn(h, w) === -a;
  }
  const c = Jn(r, n), f = st(lt, c), p = Jn(i, n), h = i.epochNanoseconds;
  let g = 0;
  const v = Ol(c, p);
  let m, w;
  if (Math.sign(v) === -a && g++, u() && (a === -1 || u()))
    throw new RangeError(Di);
  const P = bt(wt(w, h));
  return [c, m, P];
}
function mu(n, r, i, a, u, c) {
  return {
    ...un,
    ...Mi(fu(wt(n, r), a, u, c), i)
  };
}
function u0(n, r, i) {
  return {
    ...un,
    ...Mi(wt(n, r), i)
  };
}
function s0(n, r) {
  return vu(wn(n), wn(r));
}
function vu(n, r) {
  return Math.trunc((r - n) / Bn);
}
function Ol(n, r) {
  return hr(r) - hr(n);
}
function XI(n, r, i) {
  if (i <= 7) {
    let h = 0, g = s0({
      ...n,
      ...kn
    }, {
      ...r,
      ...kn
    });
    return i === 7 && ([h, g] = pr(g, 7)), {
      ...un,
      weeks: h,
      days: g
    };
  }
  const a = this.u(n), u = this.u(r);
  let [c, f, p] = ((h, g, v, m, w, P, I) => {
    let M = w - g, W = P - v, A = I - m;
    if (M || W) {
      const R = Math.sign(M || W);
      let L = h.B(w, P), S = 0;
      if (Math.sign(A) === -R) {
        const x = L;
        [w, P] = h.p(w, P, -R), M = w - g, W = P - v, L = h.B(w, P), S = R < 0 ? -x : L;
      }
      if (A = I - Math.min(m, L) + S, M) {
        const [x, N] = h.m(g, v), [k, G] = h.m(w, P);
        if (W = k - x || Number(G) - Number(N), Math.sign(W) === -R) {
          const H = R < 0 && -h.O(w);
          M = (w -= R) - g, W = P - wu(x, N, h.F(w)) + (H || h.O(w));
        }
      }
    }
    return [M, W, A];
  })(this, ...a, ...u);
  return i === 8 && (f += this.q(c, a[0]), c = 0), {
    ...un,
    years: c,
    months: f,
    days: p
  };
}
function QI(n) {
  return n * ur;
}
function eT(n, r) {
  const i = r + n, a = Math.sign(n), u = a < 0 ? -1 : 0;
  let c = 0;
  for (let f = r; f !== i; f += a)
    c += Ha.call(this, f + u);
  return c;
}
function _u(n, r) {
  if (n !== r)
    throw new RangeError(P0);
  return n;
}
function nT(n, r) {
  if (!r0(n, r))
    throw new RangeError(D0);
  return n;
}
function c0(n) {
  return this.I(n)[0];
}
function f0(n) {
  return this.I(n)[1];
}
function tT(n) {
  const [r] = this.u(n);
  return this.L(r);
}
function rT(n) {
  const [r] = this.u(n);
  return this.O(r);
}
function iT(n) {
  const [r, i] = this.u(n);
  return this.B(r, i);
}
function oT(n) {
  const [r] = this.u(n);
  return this.G(r);
}
function Rl(n) {
  const [r] = this.u(n);
  return vu(this.M(r), wn(n)) + 1;
}
function xl(n) {
  const r = OR.exec(n);
  if (!r)
    throw new RangeError(bO(n));
  return [parseInt(r[1]), !!r[2]];
}
function Oo(n, r) {
  return "M" + it(n) + (r ? "L" : "");
}
function wu(n, r, i) {
  return n + (r || i && n >= i ? 1 : 0);
}
function Ml(n, r) {
  return n - (r && n >= r ? 1 : 0);
}
function l0(n, r) {
  return (r + n) * (Math.sign(r) || 1) || 0;
}
function Pl(n) {
  return $0[h0(n)];
}
function p0(n) {
  return qO[h0(n)];
}
function h0(n) {
  return kr(n.id || Se);
}
function aT(n) {
  function r(u) {
    return ((c, f) => ({
      ...d0(c, f),
      V: c.month,
      day: parseInt(c.day)
    }))(Vf(i, u), a);
  }
  const i = rp(n), a = kr(n);
  return {
    id: n,
    _: uT(r),
    J: sT(r)
  };
}
function uT(n) {
  return Zn(((r) => {
    const i = wn(r);
    return n(i);
  }), WeakMap);
}
function sT(n) {
  const r = n(0).year - HO;
  return Zn(((i) => {
    let a, u = Ii(i - r), c = 0;
    const f = [], p = [];
    do
      u += 400 * Bn;
    while ((a = n(u)).year <= i);
    do
      if (u += (1 - a.day) * Bn, a.year === i && (f.push(u), p.push(a.V)), u -= Bn, ++c > 100 || u < -Zl)
        throw new RangeError(Di);
    while ((a = n(u)).year >= i);
    return {
      K: f.reverse(),
      X: N0(p.reverse())
    };
  }));
}
function d0(n, r) {
  let i, a, u = g0(n);
  if (n.era) {
    const c = $0[r], f = W0[r] || {};
    c !== void 0 && (i = r === "islamic" ? "ah" : n.era.normalize("NFD").toLowerCase().replace(/[^a-z0-9]/g, ""), i === "bc" || i === "b" ? i = "bce" : i === "ad" || i === "a" ? i = "ce" : i === "beforeroc" && (i = "broc"), i = f[i] || i, a = u, u = l0(a, c[i] || 0));
  }
  return {
    era: i,
    eraYear: a,
    year: u
  };
}
function g0(n) {
  return parseInt(n.relatedYear || n.year);
}
function cT(n) {
  return this._(n).day;
}
function bu(n) {
  const { year: r, V: i, day: a } = this._(n), { X: u } = this.J(r);
  return [r, u[i] + 1, a];
}
function fT(n, r, i) {
  return ru(vo.call(this, n, r, i));
}
function vo(n, r = 1, i = 1) {
  return this.J(n).K[r - 1] + (i - 1) * Bn;
}
function y0(n, r) {
  const i = Za.call(this, n);
  return [Ml(r, i), i === r];
}
function Za(n) {
  const r = Sg(this, n), i = Sg(this, n - 1), a = r.length;
  if (a > i.length) {
    const u = p0(this);
    if (u < 0)
      return -u;
    for (let c = 0; c < a; c++)
      if (r[c] !== i[c])
        return c + 1;
  }
}
function lT(n) {
  const r = Ba.call(this, n);
  return r > Ba.call(this, n - 1) && r > Ba.call(this, n + 1);
}
function Ba(n) {
  return vu(vo.call(this, n), vo.call(this, n + 1));
}
function m0(n, r) {
  const { K: i } = this.J(n);
  let a = r + 1, u = i;
  return a > i.length && (a = 1, u = this.J(n + 1).K), vu(i[r - 1], u[a - 1]);
}
function Ha(n) {
  return this.J(n).K.length;
}
function v0(n) {
  const r = this._(n);
  return [r.era, r.eraYear];
}
function pT(n, r, i) {
  const a = this.id && kr(this.id) === "chinese" ? ((g, v, m) => {
    if (v)
      switch (g) {
        case 1:
          return 1651;
        case 2:
          return m < 30 ? 1947 : 1765;
        case 3:
          return m < 30 ? 1966 : 1955;
        case 4:
          return m < 30 ? 1963 : 1944;
        case 5:
          return m < 30 ? 1971 : 1952;
        case 6:
          return m < 30 ? 1960 : 1941;
        case 7:
          return m < 30 ? 1968 : 1938;
        case 8:
          return m < 30 ? 1957 : 1718;
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
  })(n, r, i) : Ut;
  let [u, c, f] = bu.call(this, {
    isoYear: a,
    isoMonth: ur,
    isoDay: 31
  });
  const p = Za.call(this, u), h = c === p;
  (cr(n, Ml(c, p)) || cr(Number(r), Number(h)) || cr(i, f)) === 1 && u--;
  for (let g = 0; g < 100; g++) {
    const v = u - g, m = Za.call(this, v), w = wu(n, r, m);
    if (r === (w === m) && i <= m0.call(this, v, w))
      return [v, w];
  }
}
function Sg(n, r) {
  return Object.keys(n.J(r).X);
}
function Ro(n) {
  return Eu(pn(n));
}
function Eu(n) {
  if ((n = n.toLowerCase()) !== Se && n !== Fi) {
    const r = rp(n).resolvedOptions().calendar;
    if (kr(n) !== kr(r))
      throw new RangeError(M0(n));
    return r;
  }
  return n;
}
function kr(n) {
  return n === "islamicc" && (n = "islamic"), n.split("-")[0];
}
function _0(n, r) {
  return (i) => i === Se ? n : i === Fi || i === yr ? Object.assign(Object.create(n), {
    id: i
  }) : Object.assign(Object.create(r), RR(i));
}
function hT(n, r, i, a) {
  const u = wr(i, a, Zt, [], q0);
  if (u.timeZone !== void 0) {
    const c = i.ee(u), f = xo(u), p = n(u.timeZone);
    return {
      epochNanoseconds: xi(r(p), {
        ...c,
        ...f
      }, u.offset !== void 0 ? Yr(u.offset) : void 0),
      timeZone: p
    };
  }
  return {
    ...i.ee(u),
    ...kn
  };
}
function dT(n, r, i, a, u, c) {
  const f = wr(i, u, Zt, L0, q0), p = n(f.timeZone), [h, g, v] = ou(c), m = i.ee(f, su(h)), w = xo(f, h);
  return ct(xi(r(p), {
    ...m,
    ...w
  }, f.offset !== void 0 ? Yr(f.offset) : void 0, g, v), p, a);
}
function gT(n, r, i) {
  const a = wr(n, r, Zt, [], Gt), u = xe(i);
  return ft(qn({
    ...n.ee(a, su(u)),
    ...xo(a, u)
  }));
}
function yT(n, r, i, a = []) {
  const u = wr(n, r, Zt, a);
  return n.ee(u, i);
}
function mT(n, r, i, a) {
  const u = wr(n, r, Ul, a);
  return n.ne(u, i);
}
function vT(n, r, i, a) {
  const u = wr(n, i, Zt, Po);
  return r && u.month !== void 0 && u.monthCode === void 0 && u.year === void 0 && (u.year = Ut), n.te(u, a);
}
function _T(n, r) {
  return It(xo(Kn(n, Cf, [], 1), xe(r)));
}
function wT(n) {
  const r = Kn(n, jl);
  return Qe(Wr({
    ...un,
    ...r
  }));
}
function wr(n, r, i, a = [], u = []) {
  return Kn(r, [...n.fields(i), ...u].sort(), a);
}
function Kn(n, r, i, a = !i) {
  const u = {};
  let c, f = 0;
  for (const p of r) {
    if (p === c)
      throw new RangeError(hO(p));
    if (p === "constructor" || p === "__proto__")
      throw new RangeError(pO(p));
    let h = n[p];
    if (h !== void 0)
      f = 1, Tg[p] && (h = Tg[p](h, p)), u[p] = h;
    else if (i) {
      if (i.includes(p))
        throw new TypeError(Nl(p));
      u[p] = j0[p];
    }
    c = p;
  }
  if (a && !f)
    throw new TypeError(O0(r));
  return u;
}
function xo(n, r) {
  return Oi(ip({
    ...j0,
    ...n
  }), r);
}
function bT(n, r, i, a, u) {
  const { calendar: c, timeZone: f } = i, p = n(c), h = r(f), g = [...p.fields(Zt), ...B0].sort(), v = ((A) => {
    const R = Jn(A, ge), L = Io(R.offsetNanoseconds), S = Ru(A.calendar), [x, N, k] = S.u(R), [G, H] = S.m(x, N), V = Oo(G, H);
    return {
      ...$R(R),
      year: x,
      monthCode: V,
      day: k,
      offset: L
    };
  })(i), m = Kn(a, g), w = p.oe(v, m), P = {
    ...v,
    ...m
  }, [I, M, W] = ou(u, 2);
  return ct(xi(h, {
    ...p.ee(w, su(I)),
    ...Oi(ip(P), I)
  }, Yr(P.offset), M, W), f, c);
}
function ET(n, r, i, a) {
  const u = n(r.calendar), c = [...u.fields(Zt), ...Gt].sort(), f = {
    ...b0(p = r),
    hour: p.isoHour,
    minute: p.isoMinute,
    second: p.isoSecond,
    millisecond: p.isoMillisecond,
    microsecond: p.isoMicrosecond,
    nanosecond: p.isoNanosecond
  };
  var p;
  const h = Kn(i, c), g = xe(a), v = u.oe(f, h), m = {
    ...f,
    ...h
  };
  return ft(qn({
    ...u.ee(v, su(g)),
    ...Oi(ip(m), g)
  }));
}
function AT(n, r, i, a) {
  const u = n(r.calendar), c = u.fields(Zt).sort(), f = b0(r), p = Kn(i, c), h = u.oe(f, p);
  return u.ee(h, a);
}
function ST(n, r, i, a) {
  const u = n(r.calendar), c = u.fields(Ul).sort(), f = ((g) => {
    const v = Ru(g.calendar), [m, w] = v.u(g), [P, I] = v.m(m, w);
    return {
      year: m,
      monthCode: Oo(P, I)
    };
  })(r), p = Kn(i, c), h = u.oe(f, p);
  return u.ne(h, a);
}
function IT(n, r, i, a) {
  const u = n(r.calendar), c = u.fields(Zt).sort(), f = ((g) => {
    const v = Ru(g.calendar), [m, w, P] = v.u(g), [I, M] = v.m(m, w);
    return {
      monthCode: Oo(I, M),
      day: P
    };
  })(r), p = Kn(i, c), h = u.oe(f, p);
  return u.te(h, a);
}
function TT(n, r, i) {
  return It(((a, u, c) => xo({
    ...st(Cf, a),
    ...Kn(u, Cf)
  }, xe(c)))(n, r, i));
}
function OT(n, r) {
  return Qe((i = n, a = r, Wr({
    ...i,
    ...Kn(a, jl)
  })));
  var i, a;
}
function RT(n, r) {
  const i = wr(n, r, U0);
  return n.te(i);
}
function xT(n, r, i) {
  const a = wr(n, r, k0);
  return n.ne(a, i);
}
function w0(n, r, i, a, u) {
  r = st(i = n.fields(i), r), a = Kn(a, u = n.fields(u), []);
  let c = n.oe(r, a);
  return c = Kn(c, [...i, ...u].sort(), []), n.ee(c);
}
function MT(n, r) {
  const i = xe(r), a = Cl(this, n), u = Ka(this, n, a, i), c = Rf(this, n, u, a, i);
  return Yt(ut(this.U(a, u, c)), this.id || Se);
}
function PT(n, r) {
  const i = xe(r), a = Cl(this, n), u = Ka(this, n, a, i);
  return go(Kf(this.U(a, u, 1)), this.id || Se);
}
function CT(n, r) {
  const i = xe(r);
  let a, u, c, f = n.eraYear !== void 0 || n.year !== void 0 ? Cl(this, n) : void 0;
  const p = !this.id;
  if (f === void 0 && p && (f = Ut), f !== void 0) {
    const m = Ka(this, n, f, i);
    a = Rf(this, n, m, f, i);
    const w = this.F(f);
    u = Ml(m, w), c = m === w;
  } else {
    if (n.monthCode === void 0)
      throw new TypeError(x0);
    if ([u, c] = xl(n.monthCode), this.id && this.id !== Fi && this.id !== yr)
      if (this.id && kr(this.id) === "coptic" && i === 0) {
        const m = c || u !== 13 ? 30 : 6;
        a = n.day, a = ho(a, 1, m);
      } else if (this.id && kr(this.id) === "chinese" && i === 0) {
        const m = !c || u !== 1 && u !== 9 && u !== 10 && u !== 11 && u !== 12 ? 30 : 29;
        a = n.day, a = ho(a, 1, m);
      } else
        a = n.day;
    else
      a = Rf(this, n, Ka(this, n, Ut, i), Ut, i);
  }
  const h = this.R(u, c, a);
  if (!h)
    throw new RangeError("Cannot guess year");
  const [g, v] = h;
  return Ya(ut(this.U(g, v, a)), this.id || Se);
}
function DT(n) {
  return Pl(this) && n.includes("year") ? [...n, ...Ll] : n;
}
function NT(n, r) {
  const i = Object.assign(/* @__PURE__ */ Object.create(null), n);
  return sc(i, r, kl), Pl(this) && (sc(i, r, LO), this.id === yr && sc(i, r, BO, Ll)), i;
}
function Cl(n, r) {
  const i = Pl(n), a = W0[n.id || ""] || {};
  let { era: u, eraYear: c, year: f } = r;
  if (u !== void 0 || c !== void 0) {
    if (u === void 0 || c === void 0)
      throw new TypeError(mO);
    if (!i)
      throw new RangeError(yO);
    const p = i[a[u] || u];
    if (p === void 0)
      throw new RangeError(_O(u));
    const h = l0(c, p);
    if (f !== void 0 && f !== h)
      throw new RangeError(vO);
    f = h;
  } else if (f === void 0)
    throw new TypeError(wO(i));
  return f;
}
function Ka(n, r, i, a) {
  let { month: u, monthCode: c } = r;
  if (c !== void 0) {
    const f = ((p, h, g, v) => {
      const m = p.F(g), [w, P] = xl(h);
      let I = wu(w, P, m);
      if (P) {
        const M = p0(p);
        if (M === void 0)
          throw new RangeError(oo);
        if (M > 0) {
          if (I > M)
            throw new RangeError(oo);
          if (m === void 0) {
            if (v === 1)
              throw new RangeError(oo);
            I--;
          }
        } else {
          if (I !== -M)
            throw new RangeError(oo);
          if (m === void 0 && v === 1)
            throw new RangeError(oo);
        }
      }
      return I;
    })(n, c, i, a);
    if (u !== void 0 && u !== f)
      throw new RangeError(EO);
    u = f, a = 1;
  } else if (u === void 0)
    throw new TypeError(x0);
  return jt("month", u, 1, n.O(i), a);
}
function Rf(n, r, i, a, u) {
  return Dn(r, "day", 1, n.B(a, i), u);
}
function sc(n, r, i, a) {
  let u = 0;
  const c = [];
  for (const f of i)
    r[f] !== void 0 ? u = 1 : c.push(f);
  if (Object.assign(n, r), u)
    for (const f of a || c)
      delete n[f];
}
function b0(n) {
  const r = Ru(n.calendar), [i, a, u] = r.u(n), [c, f] = r.m(i, a);
  return {
    year: i,
    monthCode: Oo(c, f),
    day: u
  };
}
function FT(n) {
  return Wt(At(Zf(Yf(n))));
}
function LT(n, r, i, a, u = Se) {
  return ct(At(Zf(Yf(i))), r(a), n(u));
}
function BT(n, r, i, a, u = 0, c = 0, f = 0, p = 0, h = 0, g = 0, v = Se) {
  return ft(qn(iu($t(_n, Si(Tu, [r, i, a, u, c, f, p, h, g])))), n(v));
}
function qT(n, r, i, a, u = Se) {
  return Yt(ut(jr($t(_n, {
    isoYear: r,
    isoMonth: i,
    isoDay: a
  }))), n(u));
}
function kT(n, r, i, a = Se, u = 1) {
  const c = _n(r), f = _n(i), p = n(a);
  return go(Kf(jr({
    isoYear: c,
    isoMonth: f,
    isoDay: _n(u)
  })), p);
}
function UT(n, r, i, a = Se, u = Ut) {
  const c = _n(r), f = _n(i), p = n(a);
  return Ya(ut(jr({
    isoYear: _n(u),
    isoMonth: c,
    isoDay: f
  })), p);
}
function jT(n = 0, r = 0, i = 0, a = 0, u = 0, c = 0) {
  return It(Oi($t(_n, Si(lt, [n, r, i, a, u, c])), 1));
}
function $T(n = 0, r = 0, i = 0, a = 0, u = 0, c = 0, f = 0, p = 0, h = 0, g = 0) {
  return Qe(Wr($t(zf, Si(De, [n, r, i, a, u, c, f, p, h, g]))));
}
function WT(n, r, i = Se) {
  return ct(n.epochNanoseconds, r, i);
}
function YT(n) {
  return Wt(n.epochNanoseconds);
}
function E0(n, r) {
  return ft(Jn(r, n));
}
function A0(n, r) {
  return Yt(Jn(r, n));
}
function S0(n, r) {
  return It(Jn(r, n));
}
function zT(n, r, i, a) {
  const u = ((c, f, p, h) => {
    const g = ((v) => J0(St(v)))(h);
    return To(c(f), p, g);
  })(n, i, r, a);
  return ct(At(u), i, r.calendar);
}
function GT(n, r, i, a, u) {
  const c = n(u.timeZone), f = u.plainTime, p = f !== void 0 ? r(f) : void 0, h = i(c);
  let g;
  return g = p ? To(h, {
    ...a,
    ...p
  }) : gr(h, {
    ...a,
    ...kn
  }), ct(g, c, a.calendar);
}
function ZT(n, r = kn) {
  return ft(qn({
    ...n,
    ...r
  }));
}
function HT(n, r, i) {
  return xT(n(r.calendar), i);
}
function KT(n, r, i) {
  return RT(n(r.calendar), i);
}
function JT(n, r, i, a) {
  return ((u, c, f) => w0(u, c, k0, Ao(f), Po))(n(r.calendar), i, a);
}
function VT(n, r, i, a) {
  return ((u, c, f) => w0(u, c, U0, Ao(f), Bl))(n(r.calendar), i, a);
}
function XT(n) {
  return Wt(At($a(zf(n), zt)));
}
function QT(n) {
  return Wt(At(Zf(Yf(n))));
}
function zr(n, r, i) {
  const a = new Set(i);
  return (u, c) => {
    const f = i && rg(u, i);
    if (!rg(u = ((p, h) => {
      const g = {};
      for (const v in h)
        p.has(v) || (g[v] = h[v]);
      return g;
    })(a, u), n)) {
      if (c && f)
        throw new TypeError("Invalid formatting options");
      u = {
        ...r,
        ...u
      };
    }
    return i && (u.timeZone = Gr, ["full", "long"].includes(u.ie) && (u.ie = "medium")), u;
  };
}
function br(n, r = I0, i = 0) {
  const [a, , , u] = n;
  return (c, f = ux, ...p) => {
    const h = r(u && u(...p), c, f, a, i), g = h.resolvedOptions();
    return [h, ...nO(n, g, p)];
  };
}
function I0(n, r, i, a, u) {
  if (i = a(i, u), n) {
    if (i.timeZone !== void 0)
      throw new TypeError(NO);
    i.timeZone = n;
  }
  return new fr(r, i);
}
function eO() {
  return new fr(void 0, {
    calendar: Se
  }).resolvedOptions().calendar === Se;
}
function nO(n, r, i) {
  const [, a, u] = n;
  return i.map(((c) => (c.calendar && ((f, p, h) => {
    if ((h || f !== Se) && f !== p)
      throw new RangeError(P0);
  })(c.calendar, r.calendar, u), a(c, r))));
}
function tO(n, r, i) {
  const a = r.timeZone, u = n(a), c = {
    ...Jn(r, u),
    ...i || kn
  };
  let f;
  return f = i ? xi(u, c, c.offsetNanoseconds, 2) : gr(u, c), ct(f, a, r.calendar);
}
function rO(n, r = kn) {
  return ft(qn({
    ...n,
    ...r
  }));
}
function Dl(n, r) {
  return {
    ...n,
    calendar: r
  };
}
function iO(n, r) {
  return {
    ...n,
    timeZone: r
  };
}
function cc(n) {
  const r = xf();
  return Ti(r, n.N(r));
}
function xf() {
  return $a(Date.now(), zt);
}
function io() {
  return new fr().resolvedOptions().timeZone;
}
const oO = (n, r) => `Non-integer ${n}: ${r}`, aO = (n, r) => `Non-positive ${n}: ${r}`, uO = (n, r) => `Non-finite ${n}: ${r}`, sO = (n) => `Cannot convert bigint to ${n}`, cO = (n) => `Invalid bigint: ${n}`, fO = "Cannot convert Symbol to string", lO = "Invalid object", T0 = (n, r, i, a, u) => u ? T0(n, u[r], u[i], u[a]) : Er(n, r) + `; must be between ${i}-${a}`, Er = (n, r) => `Invalid ${n}: ${r}`, Nl = (n) => `Missing ${n}`, pO = (n) => `Invalid field ${n}`, hO = (n) => `Duplicate field ${n}`, O0 = (n) => "No valid fields: " + n.join(), dO = "Invalid bag", R0 = (n, r, i) => Er(n, r) + "; must be " + Object.keys(i).join(), gO = "Cannot use valueOf", Mf = "Invalid calling context", yO = "Forbidden era/eraYear", mO = "Mismatching era/eraYear", vO = "Mismatching year/eraYear", _O = (n) => `Invalid era: ${n}`, wO = (n) => "Missing year" + (n ? "/era/eraYear" : ""), bO = (n) => `Invalid monthCode: ${n}`, EO = "Mismatching month/monthCode", x0 = "Missing month/monthCode", oo = "Invalid leap month", Di = "Invalid protocol results", M0 = (n) => Er("Calendar", n), P0 = "Mismatching Calendars", C0 = (n) => Er("TimeZone", n), D0 = "Mismatching TimeZones", AO = "Forbidden ICU TimeZone", SO = "Out-of-bounds offset", IO = "Out-of-bounds TimeZone gap", TO = "Invalid TimeZone offset", OO = "Ambiguous offset", Ar = "Out-of-bounds date", RO = "Out-of-bounds duration", xO = "Cannot mix duration signs", Au = "Missing relativeTo", MO = "Cannot use large units", PO = "Required smallestUnit or largestUnit", CO = "smallestUnit > largestUnit", Fn = (n) => `Cannot parse: ${n}`, kt = (n) => `Invalid substring: ${n}`, DO = (n) => `Cannot format ${n}`, fc = "Mismatching types for formatting", NO = "Cannot specify TimeZone", N0 = /* @__PURE__ */ Ie(Qa, ((n, r) => r)), Ni = /* @__PURE__ */ Ie(Qa, ((n, r, i) => i)), it = /* @__PURE__ */ Ie(Ua, 2), Pf = {
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
}, Fl = /* @__PURE__ */ Object.keys(Pf), Bn = 864e5, F0 = 1e3, Mo = 1e3, zt = 1e6, _t = 1e9, Su = 6e10, Iu = 36e11, Ue = 864e11, Et = [1, Mo, zt, _t, Su, Iu, Ue], Gt = /* @__PURE__ */ Fl.slice(0, 6), Cf = /* @__PURE__ */ Eo(Gt), FO = ["offset"], L0 = ["timeZone"], B0 = /* @__PURE__ */ Gt.concat(FO), q0 = /* @__PURE__ */ B0.concat(L0), Ll = ["era", "eraYear"], LO = /* @__PURE__ */ Ll.concat(["year"]), Bl = ["year"], ql = ["monthCode"], kl = /* @__PURE__ */ ["month"].concat(ql), Po = ["day"], Ul = /* @__PURE__ */ kl.concat(Bl), k0 = /* @__PURE__ */ ql.concat(Bl), Zt = /* @__PURE__ */ Po.concat(Ul), BO = /* @__PURE__ */ Po.concat(kl), U0 = /* @__PURE__ */ Po.concat(ql), j0 = /* @__PURE__ */ Ni(Gt, 0), Se = "iso8601", Fi = "gregory", yr = "japanese", $0 = {
  [Fi]: {
    "gregory-inverse": -1,
    gregory: 0
  },
  [yr]: {
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
}, W0 = {
  [Fi]: {
    bce: "gregory-inverse",
    ce: "gregory"
  },
  [yr]: {
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
}, qO = {
  chinese: 13,
  dangi: 13,
  hebrew: -6
}, pn = /* @__PURE__ */ Ie($f, "string"), kO = /* @__PURE__ */ Ie($f, "boolean"), UO = /* @__PURE__ */ Ie($f, "number"), De = /* @__PURE__ */ Fl.map(((n) => n + "s")), jl = /* @__PURE__ */ Eo(De), jO = /* @__PURE__ */ De.slice(0, 6), Y0 = /* @__PURE__ */ De.slice(6), $O = /* @__PURE__ */ Y0.slice(1), WO = /* @__PURE__ */ N0(De), un = /* @__PURE__ */ Ni(De, 0), $l = /* @__PURE__ */ Ni(jO, 0), Wl = /* @__PURE__ */ Ie(hy, De), lt = ["isoNanosecond", "isoMicrosecond", "isoMillisecond", "isoSecond", "isoMinute", "isoHour"], Yl = ["isoDay", "isoMonth", "isoYear"], Tu = /* @__PURE__ */ lt.concat(Yl), zl = /* @__PURE__ */ Eo(Yl), z0 = /* @__PURE__ */ Eo(lt), YO = /* @__PURE__ */ Eo(Tu), kn = /* @__PURE__ */ Ni(z0, 0), zO = /* @__PURE__ */ Ie(hy, Tu), Gl = 1e8, Zl = Gl * Bn, GO = [Gl, 0], ZO = [-Gl, 0], _o = 275760, wo = -271821, fr = Intl.DateTimeFormat, HO = 1970, Ut = 1972, ur = 12, KO = /* @__PURE__ */ Ii(1868, 9, 8), JO = /* @__PURE__ */ Zn(rI, WeakMap), Ja = "smallestUnit", Df = "unit", VO = "roundingMode", lo = "roundingIncrement", lc = "fractionalSecondDigits", G0 = "relativeTo", pc = "direction", Z0 = {
  constrain: 0,
  reject: 1
}, XO = /* @__PURE__ */ Object.keys(Z0), QO = {
  compatible: 0,
  reject: 1,
  earlier: 2,
  later: 3
}, eR = {
  reject: 0,
  use: 1,
  prefer: 2,
  ignore: 3
}, nR = {
  auto: 0,
  never: 1,
  critical: 2,
  always: 3
}, tR = {
  auto: 0,
  never: 1,
  critical: 2
}, rR = {
  auto: 0,
  never: 1
}, iR = {
  floor: 0,
  halfFloor: 1,
  ceil: 2,
  halfCeil: 3,
  trunc: 4,
  halfTrunc: 5,
  expand: 6,
  halfExpand: 7,
  halfEven: 8
}, oR = {
  previous: -1,
  next: 1
}, Co = /* @__PURE__ */ Ie(il, Ja), H0 = /* @__PURE__ */ Ie(il, "largestUnit"), aR = /* @__PURE__ */ Ie(il, Df), K0 = /* @__PURE__ */ Ie(mr, "overflow", Z0), J0 = /* @__PURE__ */ Ie(mr, "disambiguation", QO), uR = /* @__PURE__ */ Ie(mr, "offset", eR), Hl = /* @__PURE__ */ Ie(mr, "calendarName", nR), sR = /* @__PURE__ */ Ie(mr, "timeZoneName", tR), cR = /* @__PURE__ */ Ie(mr, "offset", rR), Do = /* @__PURE__ */ Ie(mr, VO, iR), Kl = "PlainYearMonth", Jl = "PlainMonthDay", No = "PlainDate", Li = "PlainDateTime", Vl = "PlainTime", Sr = "ZonedDateTime", Xl = "Instant", Ql = "Duration", fR = [Math.floor, (n) => Ma(n) ? Math.floor(n) : Math.round(n), Math.ceil, (n) => Ma(n) ? Math.ceil(n) : Math.round(n), Math.trunc, (n) => Ma(n) ? Math.trunc(n) || 0 : Math.round(n), (n) => n < 0 ? Math.floor(n) : Math.ceil(n), (n) => Math.sign(n) * Math.round(Math.abs(n)) || 0, (n) => Ma(n) ? (n = Math.trunc(n) || 0) + n % 2 : Math.round(n)], Gr = "UTC", qa = 5184e3, lR = /* @__PURE__ */ Wa(1847), pR = /* @__PURE__ */ Wa((() => {
  const n = /* @__PURE__ */ new Date();
  return (n.getTime() === 0 ? 2040 : n.getUTCFullYear()) + 10;
})()), hR = /0+$/, Jn = /* @__PURE__ */ Zn(bI, WeakMap), Ig = 2 ** 32 - 1, ge = /* @__PURE__ */ Zn(((n) => {
  const r = Il(n);
  return typeof r == "object" ? new gR(r) : new dR(r || 0);
}));
class dR {
  constructor(r) {
    this.j = r;
  }
  N() {
    return this.j;
  }
  v(r) {
    return ((i) => {
      const a = on({
        ...i,
        ...kn
      });
      if (!a || Math.abs(a[0]) > 1e8)
        throw new RangeError(Ar);
    })(r), [Jf(r, this.j)];
  }
  l() {
  }
}
class gR {
  constructor(r) {
    this.ae = ((i) => {
      function a(g) {
        const v = ho(g, p, h), [m, w] = yg(v), P = c(m), I = c(w);
        return P === I ? P : u(f(m, w), P, I, g);
      }
      function u(g, v, m, w) {
        let P, I;
        for (; (w === void 0 || (P = w < g[0] ? v : w >= g[1] ? m : void 0) === void 0) && (I = g[1] - g[0]); ) {
          const M = g[0] + Math.floor(I / 2);
          i(M) === m ? g[1] = M : g[0] = M + 1;
        }
        return P;
      }
      const c = Zn(i), f = Zn(xI);
      let p = lR, h = pR;
      return {
        se(g) {
          const v = a(g - 86400), m = a(g + 86400), w = g - v, P = g - m;
          if (v === m)
            return [w];
          const I = a(w);
          return I === a(P) ? [g - I] : v > m ? [w, P] : [];
        },
        ue: a,
        l(g, v) {
          const m = ho(g, p, h);
          let [w, P] = yg(m);
          const I = qa * v, M = v < 0 ? () => P > p || (p = m, 0) : () => w < h || (h = m, 0);
          for (; M(); ) {
            const W = c(w), A = c(P);
            if (W !== A) {
              const R = f(w, P);
              u(R, W, A);
              const L = R[0];
              if ((cr(L, g) || 1) === v)
                return L;
            }
            w += I, P += I;
          }
        }
      };
    })(/* @__PURE__ */ ((i) => (a) => {
      const u = Vf(i, a * F0);
      return Wa(g0(u), parseInt(u.month), parseInt(u.day), parseInt(u.hour), parseInt(u.minute), parseInt(u.second)) - a;
    })(r));
  }
  N(r) {
    return this.ae.ue(XS(r)) * _t;
  }
  v(r) {
    const [i, a] = [Wa((u = r).isoYear, u.isoMonth, u.isoDay, u.isoHour, u.isoMinute, u.isoSecond), u.isoMillisecond * zt + u.isoMicrosecond * Mo + u.isoNanosecond];
    var u;
    return this.ae.se(i).map(((c) => At(Br($a(c, _t), a))));
  }
  l(r, i) {
    const [a, u] = by(r), c = this.ae.l(a + (i > 0 || u ? 1 : 0), i);
    if (c !== void 0)
      return $a(c, _t);
  }
}
const ep = "([+-])", ka = "(?:[.,](\\d{1,9}))?", V0 = `(?:(?:${ep}(\\d{6}))|(\\d{4}))-?(\\d{2})`, np = "(\\d{2})(?::?(\\d{2})(?::?(\\d{2})" + ka + ")?)?", tp = ep + np, yR = V0 + "-?(\\d{2})(?:[T ]" + np + "(Z|" + tp + ")?)?", X0 = "\\[(!?)([^\\]]*)\\]", Ou = `((?:${X0}){0,9})`, mR = /* @__PURE__ */ Pi(V0 + Ou), vR = /* @__PURE__ */ Pi("(?:--)?(\\d{2})-?(\\d{2})" + Ou), _R = /* @__PURE__ */ Pi(yR + Ou), wR = /* @__PURE__ */ Pi("T?" + np + "(?:" + tp + ")?" + Ou), bR = /* @__PURE__ */ Pi(tp), ER = /* @__PURE__ */ new RegExp(X0, "g"), AR = /* @__PURE__ */ Pi(`${ep}?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?:(\\d+)${ka}H)?(?:(\\d+)${ka}M)?(?:(\\d+)${ka}S)?)?`), SR = /* @__PURE__ */ Zn(((n) => new fr("en", {
  calendar: Se,
  timeZone: n,
  era: "short",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: 0
}))), IR = /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/, TR = /[^\w\/:+-]+/, OR = /^M(\d{2})(L?)$/, RR = /* @__PURE__ */ Zn(aT), rp = /* @__PURE__ */ Zn(((n) => new fr("en", {
  calendar: n,
  timeZone: Gr,
  era: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
  hour12: 0
}))), Q0 = {
  P: EI,
  h: XI,
  ee: MT,
  ne: PT,
  te: CT,
  fields: DT,
  oe: NT,
  inLeapYear: tT,
  monthsInYear: rT,
  daysInMonth: iT,
  daysInYear: oT,
  dayOfYear: Rl,
  era(n) {
    return this.$(n)[0];
  },
  eraYear(n) {
    return this.$(n)[1];
  },
  monthCode(n) {
    const [r, i] = this.u(n), [a, u] = this.m(r, i);
    return Oo(a, u);
  },
  dayOfWeek: Oy,
  daysInWeek: tI
}, xR = {
  u: Xf,
  $: Ry,
  m: Ay
}, MR = {
  dayOfYear: Rl,
  u: Xf,
  M: Ii
}, PR = /* @__PURE__ */ Object.assign({}, MR, {
  weekOfYear: c0,
  yearOfWeek: f0,
  I(n) {
    function r(P) {
      return (7 - P < a ? 7 : 0) - P;
    }
    function i(P) {
      const I = Ty(w + P), M = P || 1, W = r(fo(h + I * M, 7));
      return v = (I + (W - g) * M) / 7;
    }
    const a = this.id ? 1 : 4, u = Oy(n), c = this.dayOfYear(n), f = fo(u - 1, 7), p = c - 1, h = fo(f - p, 7), g = r(h);
    let v, m = Math.floor((p - g) / 7) + 1, w = n.isoYear;
    return m ? m > i(0) && (m = 1, w++) : (m = i(-1), w--), [m, w, v];
  }
}), CR = /* @__PURE__ */ Object.assign({}, Q0, PR, {
  u: Xf,
  $: Ry,
  m: Ay,
  R: eI,
  L: Qf,
  F: ZS,
  O: Sy,
  q: QI,
  B: Iy,
  G: Ty,
  U: nI,
  M: Ii,
  p: SI,
  year(n) {
    return n.isoYear;
  },
  month(n) {
    return n.isoMonth;
  },
  day: QS
}), DR = {
  u: bu,
  $: v0,
  m: y0
}, NR = {
  dayOfYear: Rl,
  u: bu,
  M: vo
}, FR = {
  I() {
    return [];
  }
}, LR = /* @__PURE__ */ Object.assign({}, NR, FR, {
  weekOfYear: c0,
  yearOfWeek: f0
}), BR = /* @__PURE__ */ Object.assign({}, Q0, LR, {
  u: bu,
  $: v0,
  m: y0,
  R: pT,
  L: lT,
  F: Za,
  O: Ha,
  q: eT,
  B: m0,
  G: Ba,
  U: fT,
  M: vo,
  p: II,
  year(n) {
    return this._(n).year;
  },
  month(n) {
    const { year: r, V: i } = this._(n), { X: a } = this.J(r);
    return a[i] + 1;
  },
  day: cT
}), Ru = /* @__PURE__ */ _0(xR, DR), he = /* @__PURE__ */ _0(CR, BR), qR = {
  era: ja,
  eraYear: _n,
  year: _n,
  month: og,
  monthCode(n) {
    const r = ja(n);
    return xl(r), r;
  },
  day: og
}, kR = /* @__PURE__ */ Ni(Gt, _n), UR = /* @__PURE__ */ Ni(De, zf), jR = {
  offset(n) {
    const r = ja(n);
    return Yr(r), r;
  }
}, Tg = /* @__PURE__ */ Object.assign({}, qR, kR, UR, jR), ip = /* @__PURE__ */ Ie(ly, Gt, lt), $R = /* @__PURE__ */ Ie(ly, lt, Gt), lr = "numeric", Fo = ["timeZoneName"], em = {
  month: lr,
  day: lr
}, op = {
  year: lr,
  month: lr
}, ap = /* @__PURE__ */ Object.assign({}, op, {
  day: lr
}), up = {
  hour: lr,
  minute: lr,
  second: lr
}, sp = /* @__PURE__ */ Object.assign({}, ap, up), WR = /* @__PURE__ */ Object.assign({}, sp, {
  timeZoneName: "short"
}), YR = /* @__PURE__ */ Object.keys(op), zR = /* @__PURE__ */ Object.keys(em), GR = /* @__PURE__ */ Object.keys(ap), ZR = /* @__PURE__ */ Object.keys(up), cp = ["dateStyle"], HR = /* @__PURE__ */ YR.concat(cp), KR = /* @__PURE__ */ zR.concat(cp), fp = /* @__PURE__ */ GR.concat(cp, ["weekday"]), Lo = /* @__PURE__ */ ZR.concat(["dayPeriod", "timeStyle", "fractionalSecondDigits"]), lp = /* @__PURE__ */ fp.concat(Lo), JR = /* @__PURE__ */ Fo.concat(Lo), VR = /* @__PURE__ */ Fo.concat(fp), XR = /* @__PURE__ */ Fo.concat(["day", "weekday"], Lo), QR = /* @__PURE__ */ Fo.concat(["year", "weekday"], Lo), ex = /* @__PURE__ */ zr(lp, sp), nx = /* @__PURE__ */ zr(lp, WR), tx = /* @__PURE__ */ zr(lp, sp, Fo), rx = /* @__PURE__ */ zr(fp, ap, JR), ix = /* @__PURE__ */ zr(Lo, up, VR), ox = /* @__PURE__ */ zr(HR, op, XR), ax = /* @__PURE__ */ zr(KR, em, QR), ux = {}, nm = /* @__PURE__ */ eO(), tm = [ex, ol], sx = [nx, ol, 0, (n, r) => {
  const i = n.timeZone;
  if (r && r.timeZone !== i)
    throw new RangeError(D0);
  return i;
}], rm = [tx, wn], im = [rx, wn], om = [ix, (n) => hr(n) / zt], am = [ox, wn, nm], um = [ax, wn, nm];
function Ir(n, r, i, a, u, c) {
  function f(...g) {
    if (!(this instanceof f))
      throw new TypeError(Mf);
    {
      const v = r(...g);
      xg(this, v), Nf(this, v, c);
    }
  }
  function p(g, v) {
    return Object.defineProperties((function(...m) {
      return g.call(this, h(this), ...m);
    }), po(v));
  }
  function h(g) {
    const v = An(g);
    if (!v || v.branding !== n)
      throw new TypeError(Mf);
    return v;
  }
  return Object.defineProperties(f.prototype, {
    ...GS($t(p, i)),
    ..._i($t(p, a)),
    ...kf("Temporal." + n)
  }), Object.defineProperties(f, {
    ..._i(u),
    ...po(n)
  }), [f, (g) => {
    const v = Object.create(f.prototype);
    return xg(v, g), Nf(v, g, c), v;
  }, h];
}
function Bi(n) {
  if (An(n) || n.calendar !== void 0 || n.timeZone !== void 0)
    throw new TypeError(dO);
  return n;
}
function Nf(n, r, i) {
  Nf.name === "dbg" && Object.defineProperty(n, "o", {
    value: i(r),
    writable: 0,
    enumerable: 0,
    configurable: 0
  });
}
function Bo(n) {
  return sm(n) || Se;
}
function sm(n) {
  const { calendar: r } = n;
  if (r !== void 0)
    return xu(r);
}
function xu(n) {
  if (bn(n)) {
    const { calendar: r } = An(n) || {};
    if (!r)
      throw new TypeError(M0(n));
    return r;
  }
  return ((r) => Eu(qI(pn(r))))(n);
}
function pp(n) {
  const r = {};
  for (const i in n)
    r[i] = (a) => {
      const { calendar: u } = a;
      return he(u)[i](a);
    };
  return r;
}
function Tr() {
  throw new TypeError(gO);
}
function Ln(n) {
  if (bn(n)) {
    const { timeZone: r } = An(n) || {};
    if (!r)
      throw new TypeError(C0(n));
    return r;
  }
  return ((r) => Sl(kI(pn(r))))(n);
}
function Xe(n) {
  if (bn(n)) {
    const r = An(n);
    return r && r.branding === Ql ? r : wT(n);
  }
  return BI(n);
}
function ao(n) {
  if (n !== void 0) {
    if (bn(n)) {
      const r = An(n) || {};
      switch (r.branding) {
        case Sr:
        case No:
          return r;
        case Li:
          return Yt(r);
      }
      const i = Bo(n);
      return {
        ...hT(Ln, ge, he(i), n),
        calendar: i
      };
    }
    return PI(n);
  }
}
function or(n, r) {
  if (bn(n)) {
    const a = An(n) || {};
    switch (a.branding) {
      case Vl:
        return xe(r), a;
      case Li:
        return xe(r), It(a);
      case Sr:
        return xe(r), S0(ge, a);
    }
    return _T(n, r);
  }
  const i = LI(n);
  return xe(r), i;
}
function hp(n) {
  return n === void 0 ? void 0 : or(n);
}
function ci(n, r) {
  if (bn(n)) {
    const a = An(n) || {};
    switch (a.branding) {
      case Li:
        return xe(r), a;
      case No:
        return xe(r), ft({
          ...a,
          ...kn
        });
      case Sr:
        return xe(r), E0(ge, a);
    }
    return gT(he(Bo(n)), n, r);
  }
  const i = DI(n);
  return xe(r), i;
}
function Og(n, r) {
  if (bn(n)) {
    const a = An(n);
    if (a && a.branding === Jl)
      return xe(r), a;
    const u = sm(n);
    return vT(he(u || Se), !u, n, r);
  }
  const i = FI(he, n);
  return xe(r), i;
}
function fi(n, r) {
  if (bn(n)) {
    const a = An(n);
    return a && a.branding === Kl ? (xe(r), a) : mT(he(Bo(n)), n, r);
  }
  const i = NI(he, n);
  return xe(r), i;
}
function li(n, r) {
  if (bn(n)) {
    const a = An(n) || {};
    switch (a.branding) {
      case No:
        return xe(r), a;
      case Li:
        return xe(r), Yt(a);
      case Sr:
        return xe(r), A0(ge, a);
    }
    return yT(he(Bo(n)), n, r);
  }
  const i = ml(n);
  return xe(r), i;
}
function pi(n, r) {
  if (bn(n)) {
    const i = An(n);
    if (i && i.branding === Sr)
      return ou(r), i;
    const a = Bo(n);
    return dT(Ln, ge, he(a), a, n, r);
  }
  return CI(n, r);
}
function Rg(n) {
  return $t(((r) => (i) => r(Ff(i))), n);
}
function Ff(n) {
  return Jn(n, ge);
}
function hi(n) {
  if (bn(n)) {
    const r = An(n);
    if (r)
      switch (r.branding) {
        case Xl:
          return r;
        case Sr:
          return Wt(r.epochNanoseconds);
      }
  }
  return MI(n);
}
function cx() {
  function n(c, f) {
    return new r(c, f);
  }
  function r(c, f = /* @__PURE__ */ Object.create(null)) {
    Xa.set(this, ((p, h) => {
      const g = new fr(p, h), v = g.resolvedOptions(), m = v.locale, w = st(Object.keys(h), v), P = Zn(px), I = (M, ...W) => {
        if (M) {
          if (W.length !== 2)
            throw new TypeError(fc);
          for (const S of W)
            if (S === void 0)
              throw new TypeError(fc);
        }
        M || W[0] !== void 0 || (W = []);
        const A = W.map(((S) => An(S) || Number(S)));
        let R, L = 0;
        for (const S of A) {
          const x = typeof S == "object" ? S.branding : void 0;
          if (L++ && x !== R)
            throw new TypeError(fc);
          R = x;
        }
        return R ? P(R)(m, w, ...A) : [g, ...A];
      };
      return I.i = g, I;
    })(c, f));
  }
  const i = fr.prototype, a = Object.getOwnPropertyDescriptors(i), u = Object.getOwnPropertyDescriptors(fr);
  for (const c in a) {
    const f = a[c], p = c.startsWith("format") && fx(c);
    typeof f.value == "function" ? f.value = c === "constructor" ? n : p || lx(c) : p && (f.get = function() {
      if (!Xa.has(this))
        throw new TypeError(Mf);
      return (...h) => p.apply(this, h);
    }, Object.defineProperties(f.get, po(`get ${c}`)));
  }
  return u.prototype.value = r.prototype = Object.create({}, a), Object.defineProperties(n, u), n;
}
function fx(n) {
  return Object.defineProperties((function(...r) {
    const i = Xa.get(this), [a, ...u] = i(n.includes("Range"), ...r);
    return a[n](...u);
  }), po(n));
}
function lx(n) {
  return Object.defineProperties((function(...r) {
    return Xa.get(this).i[n](...r);
  }), po(n));
}
function px(n) {
  const r = vx[n];
  if (!r)
    throw new TypeError(DO(n));
  return br(r, Zn(I0), 1);
}
const Va = /* @__PURE__ */ new WeakMap(), An = /* @__PURE__ */ Va.get.bind(Va), xg = /* @__PURE__ */ Va.set.bind(Va), cm = {
  era: HS,
  eraYear: gy,
  year: jf,
  month: Bt,
  daysInMonth: Bt,
  daysInYear: Bt,
  inLeapYear: kO,
  monthsInYear: Bt
}, dp = {
  monthCode: pn
}, fm = {
  day: Bt
}, hx = {
  dayOfWeek: Bt,
  dayOfYear: Bt,
  weekOfYear: KS,
  yearOfWeek: gy,
  daysInWeek: Bt
}, gp = /* @__PURE__ */ pp(/* @__PURE__ */ Object.assign({}, cm, dp, fm, hx)), dx = /* @__PURE__ */ pp({
  ...cm,
  ...dp
}), gx = /* @__PURE__ */ pp({
  ...dp,
  ...fm
}), qo = {
  calendarId: (n) => n.calendar
}, yx = /* @__PURE__ */ Qa(((n) => (r) => r[n]), De.concat("sign")), yp = /* @__PURE__ */ Qa(((n, r) => (i) => i[lt[r]]), Gt), lm = {
  epochMilliseconds: ol,
  epochNanoseconds: oI
}, [mx, He] = Ir(Ql, $T, {
  ...yx,
  blank: RI
}, {
  with: (n, r) => He(OT(n, r)),
  negated: (n) => He(yl(n)),
  abs: (n) => He(OI(n)),
  add: (n, r, i) => He(gg(ao, he, ge, 0, n, Xe(r), i)),
  subtract: (n, r, i) => He(gg(ao, he, ge, 1, n, Xe(r), i)),
  round: (n, r) => He(TI(ao, he, ge, n, r)),
  total: (n, r) => aI(ao, he, ge, n, r),
  toLocaleString(n, r, i) {
    return Intl.DurationFormat ? new Intl.DurationFormat(r, i).format(this) : Pa(n);
  },
  toString: Pa,
  toJSON: (n) => Pa(n),
  valueOf: Tr
}, {
  from: (n) => He(Xe(n)),
  compare: (n, r, i) => jI(ao, he, ge, Xe(n), Xe(r), i)
}, Pa), vx = {
  Instant: tm,
  PlainDateTime: rm,
  PlainDate: im,
  PlainTime: om,
  PlainYearMonth: am,
  PlainMonthDay: um
}, _x = /* @__PURE__ */ br(tm), wx = /* @__PURE__ */ br(sx), bx = /* @__PURE__ */ br(rm), Ex = /* @__PURE__ */ br(im), Ax = /* @__PURE__ */ br(om), Sx = /* @__PURE__ */ br(am), Ix = /* @__PURE__ */ br(um), [Tx, sr] = Ir(Vl, jT, yp, {
  with(n, r, i) {
    return sr(TT(this, Bi(r), i));
  },
  add: (n, r) => sr(dg(0, n, Xe(r))),
  subtract: (n, r) => sr(dg(1, n, Xe(r))),
  until: (n, r, i) => He(Ag(0, n, or(r), i)),
  since: (n, r, i) => He(Ag(1, n, or(r), i)),
  round: (n, r) => sr(lI(n, r)),
  equals: (n, r) => HI(n, or(r)),
  toLocaleString(n, r, i) {
    const [a, u] = Ax(r, i, n);
    return a.format(u);
  },
  toString: uc,
  toJSON: (n) => uc(n),
  valueOf: Tr
}, {
  from: (n, r) => sr(or(n, r)),
  compare: (n, r) => Tl(or(n), or(r))
}, uc), [Ox, mt] = Ir(Li, Ie(BT, Ro), {
  ...qo,
  ...gp,
  ...yp
}, {
  with: (n, r, i) => mt(ET(he, n, Bi(r), i)),
  withCalendar: (n, r) => mt(Dl(n, xu(r))),
  withPlainTime: (n, r) => mt(rO(n, hp(r))),
  add: (n, r, i) => mt(lg(he, 0, n, Xe(r), i)),
  subtract: (n, r, i) => mt(lg(he, 1, n, Xe(r), i)),
  until: (n, r, i) => He(wg(he, 0, n, ci(r), i)),
  since: (n, r, i) => He(wg(he, 1, n, ci(r), i)),
  round: (n, r) => mt(fI(n, r)),
  equals: (n, r) => YI(n, ci(r)),
  toZonedDateTime: (n, r, i) => vn(zT(ge, n, Ln(r), i)),
  toPlainDate: (n) => vt(Yt(n)),
  toPlainTime: (n) => sr(It(n)),
  toLocaleString(n, r, i) {
    const [a, u] = bx(r, i, n);
    return a.format(u);
  },
  toString: rc,
  toJSON: (n) => rc(n),
  valueOf: Tr
}, {
  from: (n, r) => mt(ci(n, r)),
  compare: (n, r) => t0(ci(n), ci(r))
}, rc), [Rx, Lf] = Ir(Jl, Ie(UT, Ro), {
  ...qo,
  ...gx
}, {
  with: (n, r, i) => Lf(IT(he, n, Bi(r), i)),
  equals: (n, r) => ZI(n, Og(r)),
  toPlainDate(n, r) {
    return vt(VT(he, n, this, r));
  },
  toLocaleString(n, r, i) {
    const [a, u] = Ix(r, i, n);
    return a.format(u);
  },
  toString: ac,
  toJSON: (n) => ac(n),
  valueOf: Tr
}, {
  from: (n, r) => Lf(Og(n, r))
}, ac), [xx, so] = Ir(Kl, Ie(kT, Ro), {
  ...qo,
  ...dx
}, {
  with: (n, r, i) => so(ST(he, n, Bi(r), i)),
  add: (n, r, i) => so(hg(he, 0, n, Xe(r), i)),
  subtract: (n, r, i) => so(hg(he, 1, n, Xe(r), i)),
  until: (n, r, i) => He(Eg(he, 0, n, fi(r), i)),
  since: (n, r, i) => He(Eg(he, 1, n, fi(r), i)),
  equals: (n, r) => GI(n, fi(r)),
  toPlainDate(n, r) {
    return vt(JT(he, n, this, r));
  },
  toLocaleString(n, r, i) {
    const [a, u] = Sx(r, i, n);
    return a.format(u);
  },
  toString: oc,
  toJSON: (n) => oc(n),
  valueOf: Tr
}, {
  from: (n, r) => so(fi(n, r)),
  compare: (n, r) => Ci(fi(n), fi(r))
}, oc), [Mx, vt] = Ir(No, Ie(qT, Ro), {
  ...qo,
  ...gp
}, {
  with: (n, r, i) => vt(AT(he, n, Bi(r), i)),
  withCalendar: (n, r) => vt(Dl(n, xu(r))),
  add: (n, r, i) => vt(pg(he, 0, n, Xe(r), i)),
  subtract: (n, r, i) => vt(pg(he, 1, n, Xe(r), i)),
  until: (n, r, i) => He(bg(he, 0, n, li(r), i)),
  since: (n, r, i) => He(bg(he, 1, n, li(r), i)),
  equals: (n, r) => zI(n, li(r)),
  toZonedDateTime(n, r) {
    const i = bn(r) ? r : {
      timeZone: r
    };
    return vn(GT(Ln, or, ge, n, i));
  },
  toPlainDateTime: (n, r) => mt(ZT(n, hp(r))),
  toPlainYearMonth(n) {
    return so(HT(he, n, this));
  },
  toPlainMonthDay(n) {
    return Lf(KT(he, n, this));
  },
  toLocaleString(n, r, i) {
    const [a, u] = Ex(r, i, n);
    return a.format(u);
  },
  toString: ic,
  toJSON: (n) => ic(n),
  valueOf: Tr
}, {
  from: (n, r) => vt(li(n, r)),
  compare: (n, r) => Ci(li(n), li(r))
}, ic), [Px, vn] = Ir(Sr, Ie(LT, Ro, UI), {
  ...lm,
  ...qo,
  ...Rg(gp),
  ...Rg(yp),
  offset: (n) => Io(Ff(n).offsetNanoseconds),
  offsetNanoseconds: (n) => Ff(n).offsetNanoseconds,
  timeZoneId: (n) => n.timeZone,
  hoursInDay: (n) => pI(ge, n)
}, {
  with: (n, r, i) => vn(bT(he, ge, n, Bi(r), i)),
  withCalendar: (n, r) => vn(Dl(n, xu(r))),
  withTimeZone: (n, r) => vn(iO(n, Ln(r))),
  withPlainTime: (n, r) => vn(tO(ge, n, hp(r))),
  add: (n, r, i) => vn(fg(he, ge, 0, n, Xe(r), i)),
  subtract: (n, r, i) => vn(fg(he, ge, 1, n, Xe(r), i)),
  until: (n, r, i) => He(Qe(_g(he, ge, 0, n, pi(r), i))),
  since: (n, r, i) => He(Qe(_g(he, ge, 1, n, pi(r), i))),
  round: (n, r) => vn(cI(ge, n, r)),
  startOfDay: (n) => vn(hI(ge, n)),
  equals: (n, r) => WI(n, pi(r)),
  toInstant: (n) => ar(YT(n)),
  toPlainDateTime: (n) => mt(E0(ge, n)),
  toPlainDate: (n) => vt(A0(ge, n)),
  toPlainTime: (n) => sr(S0(ge, n)),
  toLocaleString(n, r, i = {}) {
    const [a, u] = wx(r, i, n);
    return a.format(u);
  },
  toString: (n, r) => tc(ge, n, r),
  toJSON: (n) => tc(ge, n),
  valueOf: Tr,
  getTimeZoneTransition(n, r) {
    const { timeZone: i, epochNanoseconds: a } = n, u = iI(r), c = ge(i).l(a, u);
    return c ? vn({
      ...n,
      epochNanoseconds: c
    }) : null;
  }
}, {
  from: (n, r) => vn(pi(n, r)),
  compare: (n, r) => n0(pi(n), pi(r))
}, ((n) => tc(ge, n))), [Cx, ar] = Ir(Xl, FT, lm, {
  add: (n, r) => ar(cg(0, n, Xe(r))),
  subtract: (n, r) => ar(cg(1, n, Xe(r))),
  until: (n, r, i) => He(vg(0, n, hi(r), i)),
  since: (n, r, i) => He(vg(1, n, hi(r), i)),
  round: (n, r) => ar(sI(n, r)),
  equals: (n, r) => $I(n, hi(r)),
  toZonedDateTimeISO: (n, r) => vn(WT(n, Ln(r))),
  toLocaleString(n, r, i) {
    const [a, u] = _x(r, i, n);
    return a.format(u);
  },
  toString: (n, r) => nc(Ln, ge, n, r),
  toJSON: (n) => nc(Ln, ge, n),
  valueOf: Tr
}, {
  from: (n) => ar(hi(n)),
  fromEpochMilliseconds: (n) => ar(XT(n)),
  fromEpochNanoseconds: (n) => ar(QT(n)),
  compare: (n, r) => e0(hi(n), hi(r))
}, ((n) => nc(Ln, ge, n))), Dx = /* @__PURE__ */ Object.defineProperties({}, {
  ...kf("Temporal.Now"),
  ..._i({
    timeZoneId: () => io(),
    instant: () => ar(Wt(xf())),
    zonedDateTimeISO: (n = io()) => vn(ct(xf(), Ln(n), Se)),
    plainDateTimeISO: (n = io()) => mt(ft(cc(ge(Ln(n))), Se)),
    plainDateISO: (n = io()) => vt(Yt(cc(ge(Ln(n))), Se)),
    plainTimeISO: (n = io()) => sr(It(cc(ge(Ln(n)))))
  })
}), Nx = /* @__PURE__ */ Object.defineProperties({}, {
  ...kf("Temporal"),
  ..._i({
    PlainYearMonth: xx,
    PlainMonthDay: Rx,
    PlainDate: Mx,
    PlainTime: Tx,
    PlainDateTime: Ox,
    ZonedDateTime: Px,
    Instant: Cx,
    Duration: mx,
    Now: Dx
  })
}), Fx = /* @__PURE__ */ cx(), Xa = /* @__PURE__ */ new WeakMap();
Object.create(Intl), _i({
  DateTimeFormat: Fx
});
function Lx(n) {
  const r = n < 0;
  n = Math.abs(n);
  const i = Math.floor(n / 3600).toFixed(0).padStart(2, "0"), a = Math.floor(n % 3600 / 60).toFixed(0).padStart(2, "0"), u = Math.floor(n % 3600 % 60).toFixed(0).padStart(2, "0");
  let c = "";
  return i !== "00" && (c += `${i}:`), c += `${a}:${u}`, r && (c = "-" + c), c;
}
class Mg extends z.Component {
  shouldComponentUpdate(r) {
    const i = Math.floor(this.props.seconds), a = Math.floor(r.seconds);
    return i !== a;
  }
  calculateDuration(r) {
    if (!isNaN(r))
      return new Nx.Duration(0, 0, 0, 0, 0, 0, Math.round(r)).round({ smallestUnit: "seconds", largestUnit: "hours" }).toString();
  }
  render() {
    const { seconds: r, role: i } = this.props;
    return /* @__PURE__ */ z.createElement(
      "time",
      {
        dateTime: this.calculateDuration(r),
        "aria-live": this.props["aria-live"],
        role: i,
        className: at("mx_Clock", this.props.className)
      },
      Lx(r)
    );
  }
}
var co = { exports: {} };
var Bx = co.exports, Pg;
function qx() {
  return Pg || (Pg = 1, (function(n, r) {
    (function() {
      var i, a = "4.18.1", u = 200, c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", f = "Expected a function", p = "Invalid `variable` option passed into `_.template`", h = "Invalid `imports` option passed into `_.template`", g = "__lodash_hash_undefined__", v = 500, m = "__lodash_placeholder__", w = 1, P = 2, I = 4, M = 1, W = 2, A = 1, R = 2, L = 4, S = 8, x = 16, N = 32, k = 64, G = 128, H = 256, V = 512, le = 30, we = "...", Fe = 800, je = 16, hn = 1, Sn = 2, Xn = 3, Le = 1 / 0, Oe = 9007199254740991, In = 17976931348623157e292, U = NaN, E = 4294967295, D = E - 1, j = E >>> 1, re = [
        ["ary", G],
        ["bind", A],
        ["bindKey", R],
        ["curry", S],
        ["curryRight", x],
        ["flip", V],
        ["partial", N],
        ["partialRight", k],
        ["rearg", H]
      ], ue = "[object Arguments]", Q = "[object Array]", oe = "[object AsyncFunction]", ee = "[object Boolean]", X = "[object Date]", ve = "[object DOMException]", _e = "[object Error]", Me = "[object Function]", ze = "[object GeneratorFunction]", Be = "[object Map]", qe = "[object Number]", Ht = "[object Null]", sn = "[object Object]", $ = "[object Promise]", Tt = "[object Proxy]", en = "[object RegExp]", nn = "[object Set]", pt = "[object String]", Ot = "[object Symbol]", Bm = "[object Undefined]", ki = "[object WeakMap]", qm = "[object WeakSet]", Ui = "[object ArrayBuffer]", Zr = "[object DataView]", Cu = "[object Float32Array]", Du = "[object Float64Array]", Nu = "[object Int8Array]", Fu = "[object Int16Array]", Lu = "[object Int32Array]", Bu = "[object Uint8Array]", qu = "[object Uint8ClampedArray]", ku = "[object Uint16Array]", Uu = "[object Uint32Array]", km = /\b__p \+= '';/g, Um = /\b(__p \+=) '' \+/g, jm = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Ep = /&(?:amp|lt|gt|quot|#39);/g, Ap = /[&<>"']/g, $m = RegExp(Ep.source), Wm = RegExp(Ap.source), Ym = /<%-([\s\S]+?)%>/g, zm = /<%([\s\S]+?)%>/g, Sp = /<%=([\s\S]+?)%>/g, Gm = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Zm = /^\w*$/, Hm = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ju = /[\\^$.*+?()[\]{}|]/g, Km = RegExp(ju.source), $u = /^\s+/, Jm = /\s/, Vm = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Xm = /\{\n\/\* \[wrapped with (.+)\] \*/, Qm = /,? & /, ev = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Ip = /[()=,{}\[\]\/\s]/, nv = /\\(\\)?/g, tv = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Tp = /\w*$/, rv = /^[-+]0x[0-9a-f]+$/i, iv = /^0b[01]+$/i, ov = /^\[object .+?Constructor\]$/, av = /^0o[0-7]+$/i, uv = /^(?:0|[1-9]\d*)$/, sv = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, $o = /($^)/, cv = /['\n\r\u2028\u2029\\]/g, Wo = "\\ud800-\\udfff", fv = "\\u0300-\\u036f", lv = "\\ufe20-\\ufe2f", pv = "\\u20d0-\\u20ff", Op = fv + lv + pv, Rp = "\\u2700-\\u27bf", xp = "a-z\\xdf-\\xf6\\xf8-\\xff", hv = "\\xac\\xb1\\xd7\\xf7", dv = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", gv = "\\u2000-\\u206f", yv = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Mp = "A-Z\\xc0-\\xd6\\xd8-\\xde", Pp = "\\ufe0e\\ufe0f", Cp = hv + dv + gv + yv, Wu = "['’]", mv = "[" + Wo + "]", Dp = "[" + Cp + "]", Yo = "[" + Op + "]", Np = "\\d+", vv = "[" + Rp + "]", Fp = "[" + xp + "]", Lp = "[^" + Wo + Cp + Np + Rp + xp + Mp + "]", Yu = "\\ud83c[\\udffb-\\udfff]", _v = "(?:" + Yo + "|" + Yu + ")", Bp = "[^" + Wo + "]", zu = "(?:\\ud83c[\\udde6-\\uddff]){2}", Gu = "[\\ud800-\\udbff][\\udc00-\\udfff]", Hr = "[" + Mp + "]", qp = "\\u200d", kp = "(?:" + Fp + "|" + Lp + ")", wv = "(?:" + Hr + "|" + Lp + ")", Up = "(?:" + Wu + "(?:d|ll|m|re|s|t|ve))?", jp = "(?:" + Wu + "(?:D|LL|M|RE|S|T|VE))?", $p = _v + "?", Wp = "[" + Pp + "]?", bv = "(?:" + qp + "(?:" + [Bp, zu, Gu].join("|") + ")" + Wp + $p + ")*", Ev = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Av = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Yp = Wp + $p + bv, Sv = "(?:" + [vv, zu, Gu].join("|") + ")" + Yp, Iv = "(?:" + [Bp + Yo + "?", Yo, zu, Gu, mv].join("|") + ")", Tv = RegExp(Wu, "g"), Ov = RegExp(Yo, "g"), Zu = RegExp(Yu + "(?=" + Yu + ")|" + Iv + Yp, "g"), Rv = RegExp([
        Hr + "?" + Fp + "+" + Up + "(?=" + [Dp, Hr, "$"].join("|") + ")",
        wv + "+" + jp + "(?=" + [Dp, Hr + kp, "$"].join("|") + ")",
        Hr + "?" + kp + "+" + Up,
        Hr + "+" + jp,
        Av,
        Ev,
        Np,
        Sv
      ].join("|"), "g"), xv = RegExp("[" + qp + Wo + Op + Pp + "]"), Mv = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Pv = [
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
      ], Cv = -1, Pe = {};
      Pe[Cu] = Pe[Du] = Pe[Nu] = Pe[Fu] = Pe[Lu] = Pe[Bu] = Pe[qu] = Pe[ku] = Pe[Uu] = !0, Pe[ue] = Pe[Q] = Pe[Ui] = Pe[ee] = Pe[Zr] = Pe[X] = Pe[_e] = Pe[Me] = Pe[Be] = Pe[qe] = Pe[sn] = Pe[en] = Pe[nn] = Pe[pt] = Pe[ki] = !1;
      var Re = {};
      Re[ue] = Re[Q] = Re[Ui] = Re[Zr] = Re[ee] = Re[X] = Re[Cu] = Re[Du] = Re[Nu] = Re[Fu] = Re[Lu] = Re[Be] = Re[qe] = Re[sn] = Re[en] = Re[nn] = Re[pt] = Re[Ot] = Re[Bu] = Re[qu] = Re[ku] = Re[Uu] = !0, Re[_e] = Re[Me] = Re[ki] = !1;
      var Dv = {
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
      }, Nv = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, Fv = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, Lv = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, Bv = parseFloat, qv = parseInt, zp = typeof mi == "object" && mi && mi.Object === Object && mi, kv = typeof self == "object" && self && self.Object === Object && self, Je = zp || kv || Function("return this")(), Hu = r && !r.nodeType && r, Or = Hu && !0 && n && !n.nodeType && n, Gp = Or && Or.exports === Hu, Ku = Gp && zp.process, Un = (function() {
        try {
          var T = Or && Or.require && Or.require("util").types;
          return T || Ku && Ku.binding && Ku.binding("util");
        } catch {
        }
      })(), Zp = Un && Un.isArrayBuffer, Hp = Un && Un.isDate, Kp = Un && Un.isMap, Jp = Un && Un.isRegExp, Vp = Un && Un.isSet, Xp = Un && Un.isTypedArray;
      function Tn(T, F, C) {
        switch (C.length) {
          case 0:
            return T.call(F);
          case 1:
            return T.call(F, C[0]);
          case 2:
            return T.call(F, C[0], C[1]);
          case 3:
            return T.call(F, C[0], C[1], C[2]);
        }
        return T.apply(F, C);
      }
      function Uv(T, F, C, K) {
        for (var ae = -1, be = T == null ? 0 : T.length; ++ae < be; ) {
          var Ge = T[ae];
          F(K, Ge, C(Ge), T);
        }
        return K;
      }
      function On(T, F) {
        for (var C = -1, K = T == null ? 0 : T.length; ++C < K && F(T[C], C, T) !== !1; )
          ;
        return T;
      }
      function jv(T, F) {
        for (var C = T == null ? 0 : T.length; C-- && F(T[C], C, T) !== !1; )
          ;
        return T;
      }
      function Qp(T, F) {
        for (var C = -1, K = T == null ? 0 : T.length; ++C < K; )
          if (!F(T[C], C, T))
            return !1;
        return !0;
      }
      function Kt(T, F) {
        for (var C = -1, K = T == null ? 0 : T.length, ae = 0, be = []; ++C < K; ) {
          var Ge = T[C];
          F(Ge, C, T) && (be[ae++] = Ge);
        }
        return be;
      }
      function zo(T, F) {
        var C = T == null ? 0 : T.length;
        return !!C && Kr(T, F, 0) > -1;
      }
      function Ju(T, F, C) {
        for (var K = -1, ae = T == null ? 0 : T.length; ++K < ae; )
          if (C(F, T[K]))
            return !0;
        return !1;
      }
      function Ne(T, F) {
        for (var C = -1, K = T == null ? 0 : T.length, ae = Array(K); ++C < K; )
          ae[C] = F(T[C], C, T);
        return ae;
      }
      function Jt(T, F) {
        for (var C = -1, K = F.length, ae = T.length; ++C < K; )
          T[ae + C] = F[C];
        return T;
      }
      function Vu(T, F, C, K) {
        var ae = -1, be = T == null ? 0 : T.length;
        for (K && be && (C = T[++ae]); ++ae < be; )
          C = F(C, T[ae], ae, T);
        return C;
      }
      function $v(T, F, C, K) {
        var ae = T == null ? 0 : T.length;
        for (K && ae && (C = T[--ae]); ae--; )
          C = F(C, T[ae], ae, T);
        return C;
      }
      function Xu(T, F) {
        for (var C = -1, K = T == null ? 0 : T.length; ++C < K; )
          if (F(T[C], C, T))
            return !0;
        return !1;
      }
      var Wv = Qu("length");
      function Yv(T) {
        return T.split("");
      }
      function zv(T) {
        return T.match(ev) || [];
      }
      function eh(T, F, C) {
        var K;
        return C(T, function(ae, be, Ge) {
          if (F(ae, be, Ge))
            return K = be, !1;
        }), K;
      }
      function Go(T, F, C, K) {
        for (var ae = T.length, be = C + (K ? 1 : -1); K ? be-- : ++be < ae; )
          if (F(T[be], be, T))
            return be;
        return -1;
      }
      function Kr(T, F, C) {
        return F === F ? r_(T, F, C) : Go(T, nh, C);
      }
      function Gv(T, F, C, K) {
        for (var ae = C - 1, be = T.length; ++ae < be; )
          if (K(T[ae], F))
            return ae;
        return -1;
      }
      function nh(T) {
        return T !== T;
      }
      function th(T, F) {
        var C = T == null ? 0 : T.length;
        return C ? ns(T, F) / C : U;
      }
      function Qu(T) {
        return function(F) {
          return F == null ? i : F[T];
        };
      }
      function es(T) {
        return function(F) {
          return T == null ? i : T[F];
        };
      }
      function rh(T, F, C, K, ae) {
        return ae(T, function(be, Ge, Te) {
          C = K ? (K = !1, be) : F(C, be, Ge, Te);
        }), C;
      }
      function Zv(T, F) {
        var C = T.length;
        for (T.sort(F); C--; )
          T[C] = T[C].value;
        return T;
      }
      function ns(T, F) {
        for (var C, K = -1, ae = T.length; ++K < ae; ) {
          var be = F(T[K]);
          be !== i && (C = C === i ? be : C + be);
        }
        return C;
      }
      function ts(T, F) {
        for (var C = -1, K = Array(T); ++C < T; )
          K[C] = F(C);
        return K;
      }
      function Hv(T, F) {
        return Ne(F, function(C) {
          return [C, T[C]];
        });
      }
      function ih(T) {
        return T && T.slice(0, sh(T) + 1).replace($u, "");
      }
      function Rn(T) {
        return function(F) {
          return T(F);
        };
      }
      function rs(T, F) {
        return Ne(F, function(C) {
          return T[C];
        });
      }
      function ji(T, F) {
        return T.has(F);
      }
      function oh(T, F) {
        for (var C = -1, K = T.length; ++C < K && Kr(F, T[C], 0) > -1; )
          ;
        return C;
      }
      function ah(T, F) {
        for (var C = T.length; C-- && Kr(F, T[C], 0) > -1; )
          ;
        return C;
      }
      function Kv(T, F) {
        for (var C = T.length, K = 0; C--; )
          T[C] === F && ++K;
        return K;
      }
      var Jv = es(Dv), Vv = es(Nv);
      function Xv(T) {
        return "\\" + Lv[T];
      }
      function Qv(T, F) {
        return T == null ? i : T[F];
      }
      function Jr(T) {
        return xv.test(T);
      }
      function e_(T) {
        return Mv.test(T);
      }
      function n_(T) {
        for (var F, C = []; !(F = T.next()).done; )
          C.push(F.value);
        return C;
      }
      function is(T) {
        var F = -1, C = Array(T.size);
        return T.forEach(function(K, ae) {
          C[++F] = [ae, K];
        }), C;
      }
      function uh(T, F) {
        return function(C) {
          return T(F(C));
        };
      }
      function Vt(T, F) {
        for (var C = -1, K = T.length, ae = 0, be = []; ++C < K; ) {
          var Ge = T[C];
          (Ge === F || Ge === m) && (T[C] = m, be[ae++] = C);
        }
        return be;
      }
      function Zo(T) {
        var F = -1, C = Array(T.size);
        return T.forEach(function(K) {
          C[++F] = K;
        }), C;
      }
      function t_(T) {
        var F = -1, C = Array(T.size);
        return T.forEach(function(K) {
          C[++F] = [K, K];
        }), C;
      }
      function r_(T, F, C) {
        for (var K = C - 1, ae = T.length; ++K < ae; )
          if (T[K] === F)
            return K;
        return -1;
      }
      function i_(T, F, C) {
        for (var K = C + 1; K--; )
          if (T[K] === F)
            return K;
        return K;
      }
      function Vr(T) {
        return Jr(T) ? a_(T) : Wv(T);
      }
      function Qn(T) {
        return Jr(T) ? u_(T) : Yv(T);
      }
      function sh(T) {
        for (var F = T.length; F-- && Jm.test(T.charAt(F)); )
          ;
        return F;
      }
      var o_ = es(Fv);
      function a_(T) {
        for (var F = Zu.lastIndex = 0; Zu.test(T); )
          ++F;
        return F;
      }
      function u_(T) {
        return T.match(Zu) || [];
      }
      function s_(T) {
        return T.match(Rv) || [];
      }
      var c_ = (function T(F) {
        F = F == null ? Je : Xr.defaults(Je.Object(), F, Xr.pick(Je, Pv));
        var C = F.Array, K = F.Date, ae = F.Error, be = F.Function, Ge = F.Math, Te = F.Object, os = F.RegExp, f_ = F.String, jn = F.TypeError, Ho = C.prototype, l_ = be.prototype, Qr = Te.prototype, Ko = F["__core-js_shared__"], Jo = l_.toString, Ee = Qr.hasOwnProperty, p_ = 0, ch = (function() {
          var e = /[^.]+$/.exec(Ko && Ko.keys && Ko.keys.IE_PROTO || "");
          return e ? "Symbol(src)_1." + e : "";
        })(), Vo = Qr.toString, h_ = Jo.call(Te), d_ = Je._, g_ = os(
          "^" + Jo.call(Ee).replace(ju, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), Xo = Gp ? F.Buffer : i, Xt = F.Symbol, Qo = F.Uint8Array, fh = Xo ? Xo.allocUnsafe : i, ea = uh(Te.getPrototypeOf, Te), lh = Te.create, ph = Qr.propertyIsEnumerable, na = Ho.splice, hh = Xt ? Xt.isConcatSpreadable : i, $i = Xt ? Xt.iterator : i, Rr = Xt ? Xt.toStringTag : i, ta = (function() {
          try {
            var e = Dr(Te, "defineProperty");
            return e({}, "", {}), e;
          } catch {
          }
        })(), y_ = F.clearTimeout !== Je.clearTimeout && F.clearTimeout, m_ = K && K.now !== Je.Date.now && K.now, v_ = F.setTimeout !== Je.setTimeout && F.setTimeout, ra = Ge.ceil, ia = Ge.floor, as = Te.getOwnPropertySymbols, __ = Xo ? Xo.isBuffer : i, dh = F.isFinite, w_ = Ho.join, b_ = uh(Te.keys, Te), Ze = Ge.max, tn = Ge.min, E_ = K.now, A_ = F.parseInt, gh = Ge.random, S_ = Ho.reverse, us = Dr(F, "DataView"), Wi = Dr(F, "Map"), ss = Dr(F, "Promise"), ei = Dr(F, "Set"), Yi = Dr(F, "WeakMap"), zi = Dr(Te, "create"), oa = Yi && new Yi(), ni = {}, I_ = Nr(us), T_ = Nr(Wi), O_ = Nr(ss), R_ = Nr(ei), x_ = Nr(Yi), aa = Xt ? Xt.prototype : i, Gi = aa ? aa.valueOf : i, yh = aa ? aa.toString : i;
        function d(e) {
          if ($e(e) && !se(e) && !(e instanceof ye)) {
            if (e instanceof $n)
              return e;
            if (Ee.call(e, "__wrapped__"))
              return md(e);
          }
          return new $n(e);
        }
        var ti = /* @__PURE__ */ (function() {
          function e() {
          }
          return function(t) {
            if (!ke(t))
              return {};
            if (lh)
              return lh(t);
            e.prototype = t;
            var o = new e();
            return e.prototype = i, o;
          };
        })();
        function ua() {
        }
        function $n(e, t) {
          this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = i;
        }
        d.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: Ym,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: zm,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: Sp,
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
        }, d.prototype = ua.prototype, d.prototype.constructor = d, $n.prototype = ti(ua.prototype), $n.prototype.constructor = $n;
        function ye(e) {
          this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = E, this.__views__ = [];
        }
        function M_() {
          var e = new ye(this.__wrapped__);
          return e.__actions__ = dn(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = dn(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = dn(this.__views__), e;
        }
        function P_() {
          if (this.__filtered__) {
            var e = new ye(this);
            e.__dir__ = -1, e.__filtered__ = !0;
          } else
            e = this.clone(), e.__dir__ *= -1;
          return e;
        }
        function C_() {
          var e = this.__wrapped__.value(), t = this.__dir__, o = se(e), s = t < 0, l = o ? e.length : 0, y = Yw(0, l, this.__views__), _ = y.start, b = y.end, O = b - _, B = s ? b : _ - 1, q = this.__iteratees__, Y = q.length, Z = 0, J = tn(O, this.__takeCount__);
          if (!o || !s && l == O && J == O)
            return Uh(e, this.__actions__);
          var ie = [];
          e:
            for (; O-- && Z < J; ) {
              B += t;
              for (var fe = -1, ne = e[B]; ++fe < Y; ) {
                var de = q[fe], me = de.iteratee, Pn = de.type, ln = me(ne);
                if (Pn == Sn)
                  ne = ln;
                else if (!ln) {
                  if (Pn == hn)
                    continue e;
                  break e;
                }
              }
              ie[Z++] = ne;
            }
          return ie;
        }
        ye.prototype = ti(ua.prototype), ye.prototype.constructor = ye;
        function xr(e) {
          var t = -1, o = e == null ? 0 : e.length;
          for (this.clear(); ++t < o; ) {
            var s = e[t];
            this.set(s[0], s[1]);
          }
        }
        function D_() {
          this.__data__ = zi ? zi(null) : {}, this.size = 0;
        }
        function N_(e) {
          var t = this.has(e) && delete this.__data__[e];
          return this.size -= t ? 1 : 0, t;
        }
        function F_(e) {
          var t = this.__data__;
          if (zi) {
            var o = t[e];
            return o === g ? i : o;
          }
          return Ee.call(t, e) ? t[e] : i;
        }
        function L_(e) {
          var t = this.__data__;
          return zi ? t[e] !== i : Ee.call(t, e);
        }
        function B_(e, t) {
          var o = this.__data__;
          return this.size += this.has(e) ? 0 : 1, o[e] = zi && t === i ? g : t, this;
        }
        xr.prototype.clear = D_, xr.prototype.delete = N_, xr.prototype.get = F_, xr.prototype.has = L_, xr.prototype.set = B_;
        function Rt(e) {
          var t = -1, o = e == null ? 0 : e.length;
          for (this.clear(); ++t < o; ) {
            var s = e[t];
            this.set(s[0], s[1]);
          }
        }
        function q_() {
          this.__data__ = [], this.size = 0;
        }
        function k_(e) {
          var t = this.__data__, o = sa(t, e);
          if (o < 0)
            return !1;
          var s = t.length - 1;
          return o == s ? t.pop() : na.call(t, o, 1), --this.size, !0;
        }
        function U_(e) {
          var t = this.__data__, o = sa(t, e);
          return o < 0 ? i : t[o][1];
        }
        function j_(e) {
          return sa(this.__data__, e) > -1;
        }
        function $_(e, t) {
          var o = this.__data__, s = sa(o, e);
          return s < 0 ? (++this.size, o.push([e, t])) : o[s][1] = t, this;
        }
        Rt.prototype.clear = q_, Rt.prototype.delete = k_, Rt.prototype.get = U_, Rt.prototype.has = j_, Rt.prototype.set = $_;
        function xt(e) {
          var t = -1, o = e == null ? 0 : e.length;
          for (this.clear(); ++t < o; ) {
            var s = e[t];
            this.set(s[0], s[1]);
          }
        }
        function W_() {
          this.size = 0, this.__data__ = {
            hash: new xr(),
            map: new (Wi || Rt)(),
            string: new xr()
          };
        }
        function Y_(e) {
          var t = wa(this, e).delete(e);
          return this.size -= t ? 1 : 0, t;
        }
        function z_(e) {
          return wa(this, e).get(e);
        }
        function G_(e) {
          return wa(this, e).has(e);
        }
        function Z_(e, t) {
          var o = wa(this, e), s = o.size;
          return o.set(e, t), this.size += o.size == s ? 0 : 1, this;
        }
        xt.prototype.clear = W_, xt.prototype.delete = Y_, xt.prototype.get = z_, xt.prototype.has = G_, xt.prototype.set = Z_;
        function Mr(e) {
          var t = -1, o = e == null ? 0 : e.length;
          for (this.__data__ = new xt(); ++t < o; )
            this.add(e[t]);
        }
        function H_(e) {
          return this.__data__.set(e, g), this;
        }
        function K_(e) {
          return this.__data__.has(e);
        }
        Mr.prototype.add = Mr.prototype.push = H_, Mr.prototype.has = K_;
        function et(e) {
          var t = this.__data__ = new Rt(e);
          this.size = t.size;
        }
        function J_() {
          this.__data__ = new Rt(), this.size = 0;
        }
        function V_(e) {
          var t = this.__data__, o = t.delete(e);
          return this.size = t.size, o;
        }
        function X_(e) {
          return this.__data__.get(e);
        }
        function Q_(e) {
          return this.__data__.has(e);
        }
        function ew(e, t) {
          var o = this.__data__;
          if (o instanceof Rt) {
            var s = o.__data__;
            if (!Wi || s.length < u - 1)
              return s.push([e, t]), this.size = ++o.size, this;
            o = this.__data__ = new xt(s);
          }
          return o.set(e, t), this.size = o.size, this;
        }
        et.prototype.clear = J_, et.prototype.delete = V_, et.prototype.get = X_, et.prototype.has = Q_, et.prototype.set = ew;
        function mh(e, t) {
          var o = se(e), s = !o && Fr(e), l = !o && !s && rr(e), y = !o && !s && !l && ai(e), _ = o || s || l || y, b = _ ? ts(e.length, f_) : [], O = b.length;
          for (var B in e)
            (t || Ee.call(e, B)) && !(_ && // Safari 9 has enumerable `arguments.length` in strict mode.
            (B == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            l && (B == "offset" || B == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            y && (B == "buffer" || B == "byteLength" || B == "byteOffset") || // Skip index properties.
            Ct(B, O))) && b.push(B);
          return b;
        }
        function vh(e) {
          var t = e.length;
          return t ? e[_s(0, t - 1)] : i;
        }
        function nw(e, t) {
          return ba(dn(e), Pr(t, 0, e.length));
        }
        function tw(e) {
          return ba(dn(e));
        }
        function cs(e, t, o) {
          (o !== i && !tt(e[t], o) || o === i && !(t in e)) && ht(e, t, o);
        }
        function Zi(e, t, o) {
          var s = e[t];
          (!(Ee.call(e, t) && tt(s, o)) || o === i && !(t in e)) && ht(e, t, o);
        }
        function sa(e, t) {
          for (var o = e.length; o--; )
            if (tt(e[o][0], t))
              return o;
          return -1;
        }
        function rw(e, t, o, s) {
          return Qt(e, function(l, y, _) {
            t(s, l, o(l), _);
          }), s;
        }
        function _h(e, t) {
          return e && gt(t, Ke(t), e);
        }
        function iw(e, t) {
          return e && gt(t, yn(t), e);
        }
        function ht(e, t, o) {
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
        function Pr(e, t, o) {
          return e === e && (o !== i && (e = e <= o ? e : o), t !== i && (e = e >= t ? e : t)), e;
        }
        function Wn(e, t, o, s, l, y) {
          var _, b = t & w, O = t & P, B = t & I;
          if (o && (_ = l ? o(e, s, l, y) : o(e)), _ !== i)
            return _;
          if (!ke(e))
            return e;
          var q = se(e);
          if (q) {
            if (_ = Gw(e), !b)
              return dn(e, _);
          } else {
            var Y = rn(e), Z = Y == Me || Y == ze;
            if (rr(e))
              return Wh(e, b);
            if (Y == sn || Y == ue || Z && !l) {
              if (_ = O || Z ? {} : sd(e), !b)
                return O ? Fw(e, iw(_, e)) : Nw(e, _h(_, e));
            } else {
              if (!Re[Y])
                return l ? e : {};
              _ = Zw(e, Y, b);
            }
          }
          y || (y = new et());
          var J = y.get(e);
          if (J)
            return J;
          y.set(e, _), Bd(e) ? e.forEach(function(ne) {
            _.add(Wn(ne, t, o, ne, e, y));
          }) : Fd(e) && e.forEach(function(ne, de) {
            _.set(de, Wn(ne, t, o, de, e, y));
          });
          var ie = B ? O ? Ms : xs : O ? yn : Ke, fe = q ? i : ie(e);
          return On(fe || e, function(ne, de) {
            fe && (de = ne, ne = e[de]), Zi(_, de, Wn(ne, t, o, de, e, y));
          }), _;
        }
        function ow(e) {
          var t = Ke(e);
          return function(o) {
            return wh(o, e, t);
          };
        }
        function wh(e, t, o) {
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
        function bh(e, t, o) {
          if (typeof e != "function")
            throw new jn(f);
          return eo(function() {
            e.apply(i, o);
          }, t);
        }
        function Hi(e, t, o, s) {
          var l = -1, y = zo, _ = !0, b = e.length, O = [], B = t.length;
          if (!b)
            return O;
          o && (t = Ne(t, Rn(o))), s ? (y = Ju, _ = !1) : t.length >= u && (y = ji, _ = !1, t = new Mr(t));
          e:
            for (; ++l < b; ) {
              var q = e[l], Y = o == null ? q : o(q);
              if (q = s || q !== 0 ? q : 0, _ && Y === Y) {
                for (var Z = B; Z--; )
                  if (t[Z] === Y)
                    continue e;
                O.push(q);
              } else y(t, Y, s) || O.push(q);
            }
          return O;
        }
        var Qt = Hh(dt), Eh = Hh(ps, !0);
        function aw(e, t) {
          var o = !0;
          return Qt(e, function(s, l, y) {
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
        function uw(e, t, o, s) {
          var l = e.length;
          for (o = ce(o), o < 0 && (o = -o > l ? 0 : l + o), s = s === i || s > l ? l : ce(s), s < 0 && (s += l), s = o > s ? 0 : kd(s); o < s; )
            e[o++] = t;
          return e;
        }
        function Ah(e, t) {
          var o = [];
          return Qt(e, function(s, l, y) {
            t(s, l, y) && o.push(s);
          }), o;
        }
        function Ve(e, t, o, s, l) {
          var y = -1, _ = e.length;
          for (o || (o = Kw), l || (l = []); ++y < _; ) {
            var b = e[y];
            t > 0 && o(b) ? t > 1 ? Ve(b, t - 1, o, s, l) : Jt(l, b) : s || (l[l.length] = b);
          }
          return l;
        }
        var ls = Kh(), Sh = Kh(!0);
        function dt(e, t) {
          return e && ls(e, t, Ke);
        }
        function ps(e, t) {
          return e && Sh(e, t, Ke);
        }
        function fa(e, t) {
          return Kt(t, function(o) {
            return Dt(e[o]);
          });
        }
        function Cr(e, t) {
          t = nr(t, e);
          for (var o = 0, s = t.length; e != null && o < s; )
            e = e[nt(t[o++])];
          return o && o == s ? e : i;
        }
        function Ih(e, t, o) {
          var s = t(e);
          return se(e) ? s : Jt(s, o(e));
        }
        function cn(e) {
          return e == null ? e === i ? Bm : Ht : Rr && Rr in Te(e) ? Ww(e) : tb(e);
        }
        function hs(e, t) {
          return e > t;
        }
        function sw(e, t) {
          return e != null && Ee.call(e, t);
        }
        function cw(e, t) {
          return e != null && t in Te(e);
        }
        function fw(e, t, o) {
          return e >= tn(t, o) && e < Ze(t, o);
        }
        function ds(e, t, o) {
          for (var s = o ? Ju : zo, l = e[0].length, y = e.length, _ = y, b = C(y), O = 1 / 0, B = []; _--; ) {
            var q = e[_];
            _ && t && (q = Ne(q, Rn(t))), O = tn(q.length, O), b[_] = !o && (t || l >= 120 && q.length >= 120) ? new Mr(_ && q) : i;
          }
          q = e[0];
          var Y = -1, Z = b[0];
          e:
            for (; ++Y < l && B.length < O; ) {
              var J = q[Y], ie = t ? t(J) : J;
              if (J = o || J !== 0 ? J : 0, !(Z ? ji(Z, ie) : s(B, ie, o))) {
                for (_ = y; --_; ) {
                  var fe = b[_];
                  if (!(fe ? ji(fe, ie) : s(e[_], ie, o)))
                    continue e;
                }
                Z && Z.push(ie), B.push(J);
              }
            }
          return B;
        }
        function lw(e, t, o, s) {
          return dt(e, function(l, y, _) {
            t(s, o(l), y, _);
          }), s;
        }
        function Ki(e, t, o) {
          t = nr(t, e), e = pd(e, t);
          var s = e == null ? e : e[nt(zn(t))];
          return s == null ? i : Tn(s, e, o);
        }
        function Th(e) {
          return $e(e) && cn(e) == ue;
        }
        function pw(e) {
          return $e(e) && cn(e) == Ui;
        }
        function hw(e) {
          return $e(e) && cn(e) == X;
        }
        function Ji(e, t, o, s, l) {
          return e === t ? !0 : e == null || t == null || !$e(e) && !$e(t) ? e !== e && t !== t : dw(e, t, o, s, Ji, l);
        }
        function dw(e, t, o, s, l, y) {
          var _ = se(e), b = se(t), O = _ ? Q : rn(e), B = b ? Q : rn(t);
          O = O == ue ? sn : O, B = B == ue ? sn : B;
          var q = O == sn, Y = B == sn, Z = O == B;
          if (Z && rr(e)) {
            if (!rr(t))
              return !1;
            _ = !0, q = !1;
          }
          if (Z && !q)
            return y || (y = new et()), _ || ai(e) ? od(e, t, o, s, l, y) : jw(e, t, O, o, s, l, y);
          if (!(o & M)) {
            var J = q && Ee.call(e, "__wrapped__"), ie = Y && Ee.call(t, "__wrapped__");
            if (J || ie) {
              var fe = J ? e.value() : e, ne = ie ? t.value() : t;
              return y || (y = new et()), l(fe, ne, o, s, y);
            }
          }
          return Z ? (y || (y = new et()), $w(e, t, o, s, l, y)) : !1;
        }
        function gw(e) {
          return $e(e) && rn(e) == Be;
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
            var O = b[0], B = e[O], q = b[1];
            if (_ && b[2]) {
              if (B === i && !(O in e))
                return !1;
            } else {
              var Y = new et();
              if (s)
                var Z = s(B, q, O, e, t, Y);
              if (!(Z === i ? Ji(q, B, M | W, s, Y) : Z))
                return !1;
            }
          }
          return !0;
        }
        function Oh(e) {
          if (!ke(e) || Vw(e))
            return !1;
          var t = Dt(e) ? g_ : ov;
          return t.test(Nr(e));
        }
        function yw(e) {
          return $e(e) && cn(e) == en;
        }
        function mw(e) {
          return $e(e) && rn(e) == nn;
        }
        function vw(e) {
          return $e(e) && Oa(e.length) && !!Pe[cn(e)];
        }
        function Rh(e) {
          return typeof e == "function" ? e : e == null ? mn : typeof e == "object" ? se(e) ? Ph(e[0], e[1]) : Mh(e) : Vd(e);
        }
        function ys(e) {
          if (!Qi(e))
            return b_(e);
          var t = [];
          for (var o in Te(e))
            Ee.call(e, o) && o != "constructor" && t.push(o);
          return t;
        }
        function _w(e) {
          if (!ke(e))
            return nb(e);
          var t = Qi(e), o = [];
          for (var s in e)
            s == "constructor" && (t || !Ee.call(e, s)) || o.push(s);
          return o;
        }
        function ms(e, t) {
          return e < t;
        }
        function xh(e, t) {
          var o = -1, s = gn(e) ? C(e.length) : [];
          return Qt(e, function(l, y, _) {
            s[++o] = t(l, y, _);
          }), s;
        }
        function Mh(e) {
          var t = Cs(e);
          return t.length == 1 && t[0][2] ? fd(t[0][0], t[0][1]) : function(o) {
            return o === e || gs(o, e, t);
          };
        }
        function Ph(e, t) {
          return Ns(e) && cd(t) ? fd(nt(e), t) : function(o) {
            var s = zs(o, e);
            return s === i && s === t ? Gs(o, e) : Ji(t, s, M | W);
          };
        }
        function la(e, t, o, s, l) {
          e !== t && ls(t, function(y, _) {
            if (l || (l = new et()), ke(y))
              ww(e, t, _, o, la, s, l);
            else {
              var b = s ? s(Ls(e, _), y, _ + "", e, t, l) : i;
              b === i && (b = y), cs(e, _, b);
            }
          }, yn);
        }
        function ww(e, t, o, s, l, y, _) {
          var b = Ls(e, o), O = Ls(t, o), B = _.get(O);
          if (B) {
            cs(e, o, B);
            return;
          }
          var q = y ? y(b, O, o + "", e, t, _) : i, Y = q === i;
          if (Y) {
            var Z = se(O), J = !Z && rr(O), ie = !Z && !J && ai(O);
            q = O, Z || J || ie ? se(b) ? q = b : We(b) ? q = dn(b) : J ? (Y = !1, q = Wh(O, !0)) : ie ? (Y = !1, q = Yh(O, !0)) : q = [] : no(O) || Fr(O) ? (q = b, Fr(b) ? q = Ud(b) : (!ke(b) || Dt(b)) && (q = sd(O))) : Y = !1;
          }
          Y && (_.set(O, q), l(q, O, s, y, _), _.delete(O)), cs(e, o, q);
        }
        function Ch(e, t) {
          var o = e.length;
          if (o)
            return t += t < 0 ? o : 0, Ct(t, o) ? e[t] : i;
        }
        function Dh(e, t, o) {
          t.length ? t = Ne(t, function(y) {
            return se(y) ? function(_) {
              return Cr(_, y.length === 1 ? y[0] : y);
            } : y;
          }) : t = [mn];
          var s = -1;
          t = Ne(t, Rn(te()));
          var l = xh(e, function(y, _, b) {
            var O = Ne(t, function(B) {
              return B(y);
            });
            return { criteria: O, index: ++s, value: y };
          });
          return Zv(l, function(y, _) {
            return Dw(y, _, o);
          });
        }
        function bw(e, t) {
          return Nh(e, t, function(o, s) {
            return Gs(e, s);
          });
        }
        function Nh(e, t, o) {
          for (var s = -1, l = t.length, y = {}; ++s < l; ) {
            var _ = t[s], b = Cr(e, _);
            o(b, _) && Vi(y, nr(_, e), b);
          }
          return y;
        }
        function Ew(e) {
          return function(t) {
            return Cr(t, e);
          };
        }
        function vs(e, t, o, s) {
          var l = s ? Gv : Kr, y = -1, _ = t.length, b = e;
          for (e === t && (t = dn(t)), o && (b = Ne(e, Rn(o))); ++y < _; )
            for (var O = 0, B = t[y], q = o ? o(B) : B; (O = l(b, q, O, s)) > -1; )
              b !== e && na.call(b, O, 1), na.call(e, O, 1);
          return e;
        }
        function Fh(e, t) {
          for (var o = e ? t.length : 0, s = o - 1; o--; ) {
            var l = t[o];
            if (o == s || l !== y) {
              var y = l;
              Ct(l) ? na.call(e, l, 1) : Es(e, l);
            }
          }
          return e;
        }
        function _s(e, t) {
          return e + ia(gh() * (t - e + 1));
        }
        function Aw(e, t, o, s) {
          for (var l = -1, y = Ze(ra((t - e) / (o || 1)), 0), _ = C(y); y--; )
            _[s ? y : ++l] = e, e += o;
          return _;
        }
        function ws(e, t) {
          var o = "";
          if (!e || t < 1 || t > Oe)
            return o;
          do
            t % 2 && (o += e), t = ia(t / 2), t && (e += e);
          while (t);
          return o;
        }
        function pe(e, t) {
          return Bs(ld(e, t, mn), e + "");
        }
        function Sw(e) {
          return vh(ui(e));
        }
        function Iw(e, t) {
          var o = ui(e);
          return ba(o, Pr(t, 0, o.length));
        }
        function Vi(e, t, o, s) {
          if (!ke(e))
            return e;
          t = nr(t, e);
          for (var l = -1, y = t.length, _ = y - 1, b = e; b != null && ++l < y; ) {
            var O = nt(t[l]), B = o;
            if (O === "__proto__" || O === "constructor" || O === "prototype")
              return e;
            if (l != _) {
              var q = b[O];
              B = s ? s(q, O, b) : i, B === i && (B = ke(q) ? q : Ct(t[l + 1]) ? [] : {});
            }
            Zi(b, O, B), b = b[O];
          }
          return e;
        }
        var Lh = oa ? function(e, t) {
          return oa.set(e, t), e;
        } : mn, Tw = ta ? function(e, t) {
          return ta(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Hs(t),
            writable: !0
          });
        } : mn;
        function Ow(e) {
          return ba(ui(e));
        }
        function Yn(e, t, o) {
          var s = -1, l = e.length;
          t < 0 && (t = -t > l ? 0 : l + t), o = o > l ? l : o, o < 0 && (o += l), l = t > o ? 0 : o - t >>> 0, t >>>= 0;
          for (var y = C(l); ++s < l; )
            y[s] = e[s + t];
          return y;
        }
        function Rw(e, t) {
          var o;
          return Qt(e, function(s, l, y) {
            return o = t(s, l, y), !o;
          }), !!o;
        }
        function pa(e, t, o) {
          var s = 0, l = e == null ? s : e.length;
          if (typeof t == "number" && t === t && l <= j) {
            for (; s < l; ) {
              var y = s + l >>> 1, _ = e[y];
              _ !== null && !Mn(_) && (o ? _ <= t : _ < t) ? s = y + 1 : l = y;
            }
            return l;
          }
          return bs(e, t, mn, o);
        }
        function bs(e, t, o, s) {
          var l = 0, y = e == null ? 0 : e.length;
          if (y === 0)
            return 0;
          t = o(t);
          for (var _ = t !== t, b = t === null, O = Mn(t), B = t === i; l < y; ) {
            var q = ia((l + y) / 2), Y = o(e[q]), Z = Y !== i, J = Y === null, ie = Y === Y, fe = Mn(Y);
            if (_)
              var ne = s || ie;
            else B ? ne = ie && (s || Z) : b ? ne = ie && Z && (s || !J) : O ? ne = ie && Z && !J && (s || !fe) : J || fe ? ne = !1 : ne = s ? Y <= t : Y < t;
            ne ? l = q + 1 : y = q;
          }
          return tn(y, D);
        }
        function Bh(e, t) {
          for (var o = -1, s = e.length, l = 0, y = []; ++o < s; ) {
            var _ = e[o], b = t ? t(_) : _;
            if (!o || !tt(b, O)) {
              var O = b;
              y[l++] = _ === 0 ? 0 : _;
            }
          }
          return y;
        }
        function qh(e) {
          return typeof e == "number" ? e : Mn(e) ? U : +e;
        }
        function xn(e) {
          if (typeof e == "string")
            return e;
          if (se(e))
            return Ne(e, xn) + "";
          if (Mn(e))
            return yh ? yh.call(e) : "";
          var t = e + "";
          return t == "0" && 1 / e == -Le ? "-0" : t;
        }
        function er(e, t, o) {
          var s = -1, l = zo, y = e.length, _ = !0, b = [], O = b;
          if (o)
            _ = !1, l = Ju;
          else if (y >= u) {
            var B = t ? null : kw(e);
            if (B)
              return Zo(B);
            _ = !1, l = ji, O = new Mr();
          } else
            O = t ? [] : b;
          e:
            for (; ++s < y; ) {
              var q = e[s], Y = t ? t(q) : q;
              if (q = o || q !== 0 ? q : 0, _ && Y === Y) {
                for (var Z = O.length; Z--; )
                  if (O[Z] === Y)
                    continue e;
                t && O.push(Y), b.push(q);
              } else l(O, Y, o) || (O !== b && O.push(Y), b.push(q));
            }
          return b;
        }
        function Es(e, t) {
          t = nr(t, e);
          var o = -1, s = t.length;
          if (!s)
            return !0;
          for (; ++o < s; ) {
            var l = nt(t[o]);
            if (l === "__proto__" && !Ee.call(e, "__proto__") || (l === "constructor" || l === "prototype") && o < s - 1)
              return !1;
          }
          var y = pd(e, t);
          return y == null || delete y[nt(zn(t))];
        }
        function kh(e, t, o, s) {
          return Vi(e, t, o(Cr(e, t)), s);
        }
        function ha(e, t, o, s) {
          for (var l = e.length, y = s ? l : -1; (s ? y-- : ++y < l) && t(e[y], y, e); )
            ;
          return o ? Yn(e, s ? 0 : y, s ? y + 1 : l) : Yn(e, s ? y + 1 : 0, s ? l : y);
        }
        function Uh(e, t) {
          var o = e;
          return o instanceof ye && (o = o.value()), Vu(t, function(s, l) {
            return l.func.apply(l.thisArg, Jt([s], l.args));
          }, o);
        }
        function As(e, t, o) {
          var s = e.length;
          if (s < 2)
            return s ? er(e[0]) : [];
          for (var l = -1, y = C(s); ++l < s; )
            for (var _ = e[l], b = -1; ++b < s; )
              b != l && (y[l] = Hi(y[l] || _, e[b], t, o));
          return er(Ve(y, 1), t, o);
        }
        function jh(e, t, o) {
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
          return typeof e == "function" ? e : mn;
        }
        function nr(e, t) {
          return se(e) ? e : Ns(e, t) ? [e] : yd(Ae(e));
        }
        var xw = pe;
        function tr(e, t, o) {
          var s = e.length;
          return o = o === i ? s : o, !t && o >= s ? e : Yn(e, t, o);
        }
        var $h = y_ || function(e) {
          return Je.clearTimeout(e);
        };
        function Wh(e, t) {
          if (t)
            return e.slice();
          var o = e.length, s = fh ? fh(o) : new e.constructor(o);
          return e.copy(s), s;
        }
        function Ts(e) {
          var t = new e.constructor(e.byteLength);
          return new Qo(t).set(new Qo(e)), t;
        }
        function Mw(e, t) {
          var o = t ? Ts(e.buffer) : e.buffer;
          return new e.constructor(o, e.byteOffset, e.byteLength);
        }
        function Pw(e) {
          var t = new e.constructor(e.source, Tp.exec(e));
          return t.lastIndex = e.lastIndex, t;
        }
        function Cw(e) {
          return Gi ? Te(Gi.call(e)) : {};
        }
        function Yh(e, t) {
          var o = t ? Ts(e.buffer) : e.buffer;
          return new e.constructor(o, e.byteOffset, e.length);
        }
        function zh(e, t) {
          if (e !== t) {
            var o = e !== i, s = e === null, l = e === e, y = Mn(e), _ = t !== i, b = t === null, O = t === t, B = Mn(t);
            if (!b && !B && !y && e > t || y && _ && O && !b && !B || s && _ && O || !o && O || !l)
              return 1;
            if (!s && !y && !B && e < t || B && o && l && !s && !y || b && o && l || !_ && l || !O)
              return -1;
          }
          return 0;
        }
        function Dw(e, t, o) {
          for (var s = -1, l = e.criteria, y = t.criteria, _ = l.length, b = o.length; ++s < _; ) {
            var O = zh(l[s], y[s]);
            if (O) {
              if (s >= b)
                return O;
              var B = o[s];
              return O * (B == "desc" ? -1 : 1);
            }
          }
          return e.index - t.index;
        }
        function Gh(e, t, o, s) {
          for (var l = -1, y = e.length, _ = o.length, b = -1, O = t.length, B = Ze(y - _, 0), q = C(O + B), Y = !s; ++b < O; )
            q[b] = t[b];
          for (; ++l < _; )
            (Y || l < y) && (q[o[l]] = e[l]);
          for (; B--; )
            q[b++] = e[l++];
          return q;
        }
        function Zh(e, t, o, s) {
          for (var l = -1, y = e.length, _ = -1, b = o.length, O = -1, B = t.length, q = Ze(y - b, 0), Y = C(q + B), Z = !s; ++l < q; )
            Y[l] = e[l];
          for (var J = l; ++O < B; )
            Y[J + O] = t[O];
          for (; ++_ < b; )
            (Z || l < y) && (Y[J + o[_]] = e[l++]);
          return Y;
        }
        function dn(e, t) {
          var o = -1, s = e.length;
          for (t || (t = C(s)); ++o < s; )
            t[o] = e[o];
          return t;
        }
        function gt(e, t, o, s) {
          var l = !o;
          o || (o = {});
          for (var y = -1, _ = t.length; ++y < _; ) {
            var b = t[y], O = s ? s(o[b], e[b], b, o, e) : i;
            O === i && (O = e[b]), l ? ht(o, b, O) : Zi(o, b, O);
          }
          return o;
        }
        function Nw(e, t) {
          return gt(e, Ds(e), t);
        }
        function Fw(e, t) {
          return gt(e, ad(e), t);
        }
        function da(e, t) {
          return function(o, s) {
            var l = se(o) ? Uv : rw, y = t ? t() : {};
            return l(o, e, te(s, 2), y);
          };
        }
        function ri(e) {
          return pe(function(t, o) {
            var s = -1, l = o.length, y = l > 1 ? o[l - 1] : i, _ = l > 2 ? o[2] : i;
            for (y = e.length > 3 && typeof y == "function" ? (l--, y) : i, _ && fn(o[0], o[1], _) && (y = l < 3 ? i : y, l = 1), t = Te(t); ++s < l; ) {
              var b = o[s];
              b && e(t, b, s, y);
            }
            return t;
          });
        }
        function Hh(e, t) {
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
        function Kh(e) {
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
          var s = t & A, l = Xi(e);
          function y() {
            var _ = this && this !== Je && this instanceof y ? l : e;
            return _.apply(s ? o : this, arguments);
          }
          return y;
        }
        function Jh(e) {
          return function(t) {
            t = Ae(t);
            var o = Jr(t) ? Qn(t) : i, s = o ? o[0] : t.charAt(0), l = o ? tr(o, 1).join("") : t.slice(1);
            return s[e]() + l;
          };
        }
        function ii(e) {
          return function(t) {
            return Vu(Kd(Hd(t).replace(Tv, "")), e, "");
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
            return ke(s) ? s : o;
          };
        }
        function Bw(e, t, o) {
          var s = Xi(e);
          function l() {
            for (var y = arguments.length, _ = C(y), b = y, O = oi(l); b--; )
              _[b] = arguments[b];
            var B = y < 3 && _[0] !== O && _[y - 1] !== O ? [] : Vt(_, O);
            if (y -= B.length, y < o)
              return nd(
                e,
                t,
                ga,
                l.placeholder,
                i,
                _,
                B,
                i,
                i,
                o - y
              );
            var q = this && this !== Je && this instanceof l ? s : e;
            return Tn(q, this, _);
          }
          return l;
        }
        function Vh(e) {
          return function(t, o, s) {
            var l = Te(t);
            if (!gn(t)) {
              var y = te(o, 3);
              t = Ke(t), o = function(b) {
                return y(l[b], b, l);
              };
            }
            var _ = e(t, o, s);
            return _ > -1 ? l[y ? t[_] : _] : i;
          };
        }
        function Xh(e) {
          return Pt(function(t) {
            var o = t.length, s = o, l = $n.prototype.thru;
            for (e && t.reverse(); s--; ) {
              var y = t[s];
              if (typeof y != "function")
                throw new jn(f);
              if (l && !_ && _a(y) == "wrapper")
                var _ = new $n([], !0);
            }
            for (s = _ ? s : o; ++s < o; ) {
              y = t[s];
              var b = _a(y), O = b == "wrapper" ? Ps(y) : i;
              O && Fs(O[0]) && O[1] == (G | S | N | H) && !O[4].length && O[9] == 1 ? _ = _[_a(O[0])].apply(_, O[3]) : _ = y.length == 1 && Fs(y) ? _[b]() : _.thru(y);
            }
            return function() {
              var B = arguments, q = B[0];
              if (_ && B.length == 1 && se(q))
                return _.plant(q).value();
              for (var Y = 0, Z = o ? t[Y].apply(this, B) : q; ++Y < o; )
                Z = t[Y].call(this, Z);
              return Z;
            };
          });
        }
        function ga(e, t, o, s, l, y, _, b, O, B) {
          var q = t & G, Y = t & A, Z = t & R, J = t & (S | x), ie = t & V, fe = Z ? i : Xi(e);
          function ne() {
            for (var de = arguments.length, me = C(de), Pn = de; Pn--; )
              me[Pn] = arguments[Pn];
            if (J)
              var ln = oi(ne), Cn = Kv(me, ln);
            if (s && (me = Gh(me, s, l, J)), y && (me = Zh(me, y, _, J)), de -= Cn, J && de < B) {
              var Ye = Vt(me, ln);
              return nd(
                e,
                t,
                ga,
                ne.placeholder,
                o,
                me,
                Ye,
                b,
                O,
                B - de
              );
            }
            var rt = Y ? o : this, Ft = Z ? rt[e] : e;
            return de = me.length, b ? me = rb(me, b) : ie && de > 1 && me.reverse(), q && O < de && (me.length = O), this && this !== Je && this instanceof ne && (Ft = fe || Xi(Ft)), Ft.apply(rt, me);
          }
          return ne;
        }
        function Qh(e, t) {
          return function(o, s) {
            return lw(o, e, t(s), {});
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
              typeof o == "string" || typeof s == "string" ? (o = xn(o), s = xn(s)) : (o = qh(o), s = qh(s)), l = e(o, s);
            }
            return l;
          };
        }
        function Os(e) {
          return Pt(function(t) {
            return t = Ne(t, Rn(te())), pe(function(o) {
              var s = this;
              return e(t, function(l) {
                return Tn(l, s, o);
              });
            });
          });
        }
        function ma(e, t) {
          t = t === i ? " " : xn(t);
          var o = t.length;
          if (o < 2)
            return o ? ws(t, e) : t;
          var s = ws(t, ra(e / Vr(t)));
          return Jr(t) ? tr(Qn(s), 0, e).join("") : s.slice(0, e);
        }
        function qw(e, t, o, s) {
          var l = t & A, y = Xi(e);
          function _() {
            for (var b = -1, O = arguments.length, B = -1, q = s.length, Y = C(q + O), Z = this && this !== Je && this instanceof _ ? y : e; ++B < q; )
              Y[B] = s[B];
            for (; O--; )
              Y[B++] = arguments[++b];
            return Tn(Z, l ? o : this, Y);
          }
          return _;
        }
        function ed(e) {
          return function(t, o, s) {
            return s && typeof s != "number" && fn(t, o, s) && (o = s = i), t = Nt(t), o === i ? (o = t, t = 0) : o = Nt(o), s = s === i ? t < o ? 1 : -1 : Nt(s), Aw(t, o, s, e);
          };
        }
        function va(e) {
          return function(t, o) {
            return typeof t == "string" && typeof o == "string" || (t = Gn(t), o = Gn(o)), e(t, o);
          };
        }
        function nd(e, t, o, s, l, y, _, b, O, B) {
          var q = t & S, Y = q ? _ : i, Z = q ? i : _, J = q ? y : i, ie = q ? i : y;
          t |= q ? N : k, t &= ~(q ? k : N), t & L || (t &= -4);
          var fe = [
            e,
            t,
            l,
            J,
            Y,
            ie,
            Z,
            b,
            O,
            B
          ], ne = o.apply(i, fe);
          return Fs(e) && hd(ne, fe), ne.placeholder = s, dd(ne, e, t);
        }
        function Rs(e) {
          var t = Ge[e];
          return function(o, s) {
            if (o = Gn(o), s = s == null ? 0 : tn(ce(s), 292), s && dh(o)) {
              var l = (Ae(o) + "e").split("e"), y = t(l[0] + "e" + (+l[1] + s));
              return l = (Ae(y) + "e").split("e"), +(l[0] + "e" + (+l[1] - s));
            }
            return t(o);
          };
        }
        var kw = ei && 1 / Zo(new ei([, -0]))[1] == Le ? function(e) {
          return new ei(e);
        } : Vs;
        function td(e) {
          return function(t) {
            var o = rn(t);
            return o == Be ? is(t) : o == nn ? t_(t) : Hv(t, e(t));
          };
        }
        function Mt(e, t, o, s, l, y, _, b) {
          var O = t & R;
          if (!O && typeof e != "function")
            throw new jn(f);
          var B = s ? s.length : 0;
          if (B || (t &= -97, s = l = i), _ = _ === i ? _ : Ze(ce(_), 0), b = b === i ? b : ce(b), B -= l ? l.length : 0, t & k) {
            var q = s, Y = l;
            s = l = i;
          }
          var Z = O ? i : Ps(e), J = [
            e,
            t,
            o,
            s,
            l,
            q,
            Y,
            y,
            _,
            b
          ];
          if (Z && eb(J, Z), e = J[0], t = J[1], o = J[2], s = J[3], l = J[4], b = J[9] = J[9] === i ? O ? 0 : e.length : Ze(J[9] - B, 0), !b && t & (S | x) && (t &= -25), !t || t == A)
            var ie = Lw(e, t, o);
          else t == S || t == x ? ie = Bw(e, t, b) : (t == N || t == (A | N)) && !l.length ? ie = qw(e, t, o, s) : ie = ga.apply(i, J);
          var fe = Z ? Lh : hd;
          return dd(fe(ie, J), e, t);
        }
        function rd(e, t, o, s) {
          return e === i || tt(e, Qr[o]) && !Ee.call(s, o) ? t : e;
        }
        function id(e, t, o, s, l, y) {
          return ke(e) && ke(t) && (y.set(t, e), la(e, t, i, id, y), y.delete(t)), e;
        }
        function Uw(e) {
          return no(e) ? i : e;
        }
        function od(e, t, o, s, l, y) {
          var _ = o & M, b = e.length, O = t.length;
          if (b != O && !(_ && O > b))
            return !1;
          var B = y.get(e), q = y.get(t);
          if (B && q)
            return B == t && q == e;
          var Y = -1, Z = !0, J = o & W ? new Mr() : i;
          for (y.set(e, t), y.set(t, e); ++Y < b; ) {
            var ie = e[Y], fe = t[Y];
            if (s)
              var ne = _ ? s(fe, ie, Y, t, e, y) : s(ie, fe, Y, e, t, y);
            if (ne !== i) {
              if (ne)
                continue;
              Z = !1;
              break;
            }
            if (J) {
              if (!Xu(t, function(de, me) {
                if (!ji(J, me) && (ie === de || l(ie, de, o, s, y)))
                  return J.push(me);
              })) {
                Z = !1;
                break;
              }
            } else if (!(ie === fe || l(ie, fe, o, s, y))) {
              Z = !1;
              break;
            }
          }
          return y.delete(e), y.delete(t), Z;
        }
        function jw(e, t, o, s, l, y, _) {
          switch (o) {
            case Zr:
              if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                return !1;
              e = e.buffer, t = t.buffer;
            case Ui:
              return !(e.byteLength != t.byteLength || !y(new Qo(e), new Qo(t)));
            case ee:
            case X:
            case qe:
              return tt(+e, +t);
            case _e:
              return e.name == t.name && e.message == t.message;
            case en:
            case pt:
              return e == t + "";
            case Be:
              var b = is;
            case nn:
              var O = s & M;
              if (b || (b = Zo), e.size != t.size && !O)
                return !1;
              var B = _.get(e);
              if (B)
                return B == t;
              s |= W, _.set(e, t);
              var q = od(b(e), b(t), s, l, y, _);
              return _.delete(e), q;
            case Ot:
              if (Gi)
                return Gi.call(e) == Gi.call(t);
          }
          return !1;
        }
        function $w(e, t, o, s, l, y) {
          var _ = o & M, b = xs(e), O = b.length, B = xs(t), q = B.length;
          if (O != q && !_)
            return !1;
          for (var Y = O; Y--; ) {
            var Z = b[Y];
            if (!(_ ? Z in t : Ee.call(t, Z)))
              return !1;
          }
          var J = y.get(e), ie = y.get(t);
          if (J && ie)
            return J == t && ie == e;
          var fe = !0;
          y.set(e, t), y.set(t, e);
          for (var ne = _; ++Y < O; ) {
            Z = b[Y];
            var de = e[Z], me = t[Z];
            if (s)
              var Pn = _ ? s(me, de, Z, t, e, y) : s(de, me, Z, e, t, y);
            if (!(Pn === i ? de === me || l(de, me, o, s, y) : Pn)) {
              fe = !1;
              break;
            }
            ne || (ne = Z == "constructor");
          }
          if (fe && !ne) {
            var ln = e.constructor, Cn = t.constructor;
            ln != Cn && "constructor" in e && "constructor" in t && !(typeof ln == "function" && ln instanceof ln && typeof Cn == "function" && Cn instanceof Cn) && (fe = !1);
          }
          return y.delete(e), y.delete(t), fe;
        }
        function Pt(e) {
          return Bs(ld(e, i, wd), e + "");
        }
        function xs(e) {
          return Ih(e, Ke, Ds);
        }
        function Ms(e) {
          return Ih(e, yn, ad);
        }
        var Ps = oa ? function(e) {
          return oa.get(e);
        } : Vs;
        function _a(e) {
          for (var t = e.name + "", o = ni[t], s = Ee.call(ni, t) ? o.length : 0; s--; ) {
            var l = o[s], y = l.func;
            if (y == null || y == e)
              return l.name;
          }
          return t;
        }
        function oi(e) {
          var t = Ee.call(d, "placeholder") ? d : e;
          return t.placeholder;
        }
        function te() {
          var e = d.iteratee || Ks;
          return e = e === Ks ? Rh : e, arguments.length ? e(arguments[0], arguments[1]) : e;
        }
        function wa(e, t) {
          var o = e.__data__;
          return Jw(t) ? o[typeof t == "string" ? "string" : "hash"] : o.map;
        }
        function Cs(e) {
          for (var t = Ke(e), o = t.length; o--; ) {
            var s = t[o], l = e[s];
            t[o] = [s, l, cd(l)];
          }
          return t;
        }
        function Dr(e, t) {
          var o = Qv(e, t);
          return Oh(o) ? o : i;
        }
        function Ww(e) {
          var t = Ee.call(e, Rr), o = e[Rr];
          try {
            e[Rr] = i;
            var s = !0;
          } catch {
          }
          var l = Vo.call(e);
          return s && (t ? e[Rr] = o : delete e[Rr]), l;
        }
        var Ds = as ? function(e) {
          return e == null ? [] : (e = Te(e), Kt(as(e), function(t) {
            return ph.call(e, t);
          }));
        } : Xs, ad = as ? function(e) {
          for (var t = []; e; )
            Jt(t, Ds(e)), e = ea(e);
          return t;
        } : Xs, rn = cn;
        (us && rn(new us(new ArrayBuffer(1))) != Zr || Wi && rn(new Wi()) != Be || ss && rn(ss.resolve()) != $ || ei && rn(new ei()) != nn || Yi && rn(new Yi()) != ki) && (rn = function(e) {
          var t = cn(e), o = t == sn ? e.constructor : i, s = o ? Nr(o) : "";
          if (s)
            switch (s) {
              case I_:
                return Zr;
              case T_:
                return Be;
              case O_:
                return $;
              case R_:
                return nn;
              case x_:
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
                t = tn(t, e + _);
                break;
              case "takeRight":
                e = Ze(e, t - _);
                break;
            }
          }
          return { start: e, end: t };
        }
        function zw(e) {
          var t = e.match(Xm);
          return t ? t[1].split(Qm) : [];
        }
        function ud(e, t, o) {
          t = nr(t, e);
          for (var s = -1, l = t.length, y = !1; ++s < l; ) {
            var _ = nt(t[s]);
            if (!(y = e != null && o(e, _)))
              break;
            e = e[_];
          }
          return y || ++s != l ? y : (l = e == null ? 0 : e.length, !!l && Oa(l) && Ct(_, l) && (se(e) || Fr(e)));
        }
        function Gw(e) {
          var t = e.length, o = new e.constructor(t);
          return t && typeof e[0] == "string" && Ee.call(e, "index") && (o.index = e.index, o.input = e.input), o;
        }
        function sd(e) {
          return typeof e.constructor == "function" && !Qi(e) ? ti(ea(e)) : {};
        }
        function Zw(e, t, o) {
          var s = e.constructor;
          switch (t) {
            case Ui:
              return Ts(e);
            case ee:
            case X:
              return new s(+e);
            case Zr:
              return Mw(e, o);
            case Cu:
            case Du:
            case Nu:
            case Fu:
            case Lu:
            case Bu:
            case qu:
            case ku:
            case Uu:
              return Yh(e, o);
            case Be:
              return new s();
            case qe:
            case pt:
              return new s(e);
            case en:
              return Pw(e);
            case nn:
              return new s();
            case Ot:
              return Cw(e);
          }
        }
        function Hw(e, t) {
          var o = t.length;
          if (!o)
            return e;
          var s = o - 1;
          return t[s] = (o > 1 ? "& " : "") + t[s], t = t.join(o > 2 ? ", " : " "), e.replace(Vm, `{
/* [wrapped with ` + t + `] */
`);
        }
        function Kw(e) {
          return se(e) || Fr(e) || !!(hh && e && e[hh]);
        }
        function Ct(e, t) {
          var o = typeof e;
          return t = t ?? Oe, !!t && (o == "number" || o != "symbol" && uv.test(e)) && e > -1 && e % 1 == 0 && e < t;
        }
        function fn(e, t, o) {
          if (!ke(o))
            return !1;
          var s = typeof t;
          return (s == "number" ? gn(o) && Ct(t, o.length) : s == "string" && t in o) ? tt(o[t], e) : !1;
        }
        function Ns(e, t) {
          if (se(e))
            return !1;
          var o = typeof e;
          return o == "number" || o == "symbol" || o == "boolean" || e == null || Mn(e) ? !0 : Zm.test(e) || !Gm.test(e) || t != null && e in Te(t);
        }
        function Jw(e) {
          var t = typeof e;
          return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
        }
        function Fs(e) {
          var t = _a(e), o = d[t];
          if (typeof o != "function" || !(t in ye.prototype))
            return !1;
          if (e === o)
            return !0;
          var s = Ps(o);
          return !!s && e === s[0];
        }
        function Vw(e) {
          return !!ch && ch in e;
        }
        var Xw = Ko ? Dt : Qs;
        function Qi(e) {
          var t = e && e.constructor, o = typeof t == "function" && t.prototype || Qr;
          return e === o;
        }
        function cd(e) {
          return e === e && !ke(e);
        }
        function fd(e, t) {
          return function(o) {
            return o == null ? !1 : o[e] === t && (t !== i || e in Te(o));
          };
        }
        function Qw(e) {
          var t = Ia(e, function(s) {
            return o.size === v && o.clear(), s;
          }), o = t.cache;
          return t;
        }
        function eb(e, t) {
          var o = e[1], s = t[1], l = o | s, y = l < (A | R | G), _ = s == G && o == S || s == G && o == H && e[7].length <= t[8] || s == (G | H) && t[7].length <= t[8] && o == S;
          if (!(y || _))
            return e;
          s & A && (e[2] = t[2], l |= o & A ? 0 : L);
          var b = t[3];
          if (b) {
            var O = e[3];
            e[3] = O ? Gh(O, b, t[4]) : b, e[4] = O ? Vt(e[3], m) : t[4];
          }
          return b = t[5], b && (O = e[5], e[5] = O ? Zh(O, b, t[6]) : b, e[6] = O ? Vt(e[5], m) : t[6]), b = t[7], b && (e[7] = b), s & G && (e[8] = e[8] == null ? t[8] : tn(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = l, e;
        }
        function nb(e) {
          var t = [];
          if (e != null)
            for (var o in Te(e))
              t.push(o);
          return t;
        }
        function tb(e) {
          return Vo.call(e);
        }
        function ld(e, t, o) {
          return t = Ze(t === i ? e.length - 1 : t, 0), function() {
            for (var s = arguments, l = -1, y = Ze(s.length - t, 0), _ = C(y); ++l < y; )
              _[l] = s[t + l];
            l = -1;
            for (var b = C(t + 1); ++l < t; )
              b[l] = s[l];
            return b[t] = o(_), Tn(e, this, b);
          };
        }
        function pd(e, t) {
          return t.length < 2 ? e : Cr(e, Yn(t, 0, -1));
        }
        function rb(e, t) {
          for (var o = e.length, s = tn(t.length, o), l = dn(e); s--; ) {
            var y = t[s];
            e[s] = Ct(y, o) ? l[y] : i;
          }
          return e;
        }
        function Ls(e, t) {
          if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
            return e[t];
        }
        var hd = gd(Lh), eo = v_ || function(e, t) {
          return Je.setTimeout(e, t);
        }, Bs = gd(Tw);
        function dd(e, t, o) {
          var s = t + "";
          return Bs(e, Hw(s, ib(zw(s), o)));
        }
        function gd(e) {
          var t = 0, o = 0;
          return function() {
            var s = E_(), l = je - (s - o);
            if (o = s, l > 0) {
              if (++t >= Fe)
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
        var yd = Qw(function(e) {
          var t = [];
          return e.charCodeAt(0) === 46 && t.push(""), e.replace(Hm, function(o, s, l, y) {
            t.push(l ? y.replace(nv, "$1") : s || o);
          }), t;
        });
        function nt(e) {
          if (typeof e == "string" || Mn(e))
            return e;
          var t = e + "";
          return t == "0" && 1 / e == -Le ? "-0" : t;
        }
        function Nr(e) {
          if (e != null) {
            try {
              return Jo.call(e);
            } catch {
            }
            try {
              return e + "";
            } catch {
            }
          }
          return "";
        }
        function ib(e, t) {
          return On(re, function(o) {
            var s = "_." + o[0];
            t & o[1] && !zo(e, s) && e.push(s);
          }), e.sort();
        }
        function md(e) {
          if (e instanceof ye)
            return e.clone();
          var t = new $n(e.__wrapped__, e.__chain__);
          return t.__actions__ = dn(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
        }
        function ob(e, t, o) {
          (o ? fn(e, t, o) : t === i) ? t = 1 : t = Ze(ce(t), 0);
          var s = e == null ? 0 : e.length;
          if (!s || t < 1)
            return [];
          for (var l = 0, y = 0, _ = C(ra(s / t)); l < s; )
            _[y++] = Yn(e, l, l += t);
          return _;
        }
        function ab(e) {
          for (var t = -1, o = e == null ? 0 : e.length, s = 0, l = []; ++t < o; ) {
            var y = e[t];
            y && (l[s++] = y);
          }
          return l;
        }
        function ub() {
          var e = arguments.length;
          if (!e)
            return [];
          for (var t = C(e - 1), o = arguments[0], s = e; s--; )
            t[s - 1] = arguments[s];
          return Jt(se(o) ? dn(o) : [o], Ve(t, 1));
        }
        var sb = pe(function(e, t) {
          return We(e) ? Hi(e, Ve(t, 1, We, !0)) : [];
        }), cb = pe(function(e, t) {
          var o = zn(t);
          return We(o) && (o = i), We(e) ? Hi(e, Ve(t, 1, We, !0), te(o, 2)) : [];
        }), fb = pe(function(e, t) {
          var o = zn(t);
          return We(o) && (o = i), We(e) ? Hi(e, Ve(t, 1, We, !0), i, o) : [];
        });
        function lb(e, t, o) {
          var s = e == null ? 0 : e.length;
          return s ? (t = o || t === i ? 1 : ce(t), Yn(e, t < 0 ? 0 : t, s)) : [];
        }
        function pb(e, t, o) {
          var s = e == null ? 0 : e.length;
          return s ? (t = o || t === i ? 1 : ce(t), t = s - t, Yn(e, 0, t < 0 ? 0 : t)) : [];
        }
        function hb(e, t) {
          return e && e.length ? ha(e, te(t, 3), !0, !0) : [];
        }
        function db(e, t) {
          return e && e.length ? ha(e, te(t, 3), !0) : [];
        }
        function gb(e, t, o, s) {
          var l = e == null ? 0 : e.length;
          return l ? (o && typeof o != "number" && fn(e, t, o) && (o = 0, s = l), uw(e, t, o, s)) : [];
        }
        function vd(e, t, o) {
          var s = e == null ? 0 : e.length;
          if (!s)
            return -1;
          var l = o == null ? 0 : ce(o);
          return l < 0 && (l = Ze(s + l, 0)), Go(e, te(t, 3), l);
        }
        function _d(e, t, o) {
          var s = e == null ? 0 : e.length;
          if (!s)
            return -1;
          var l = s - 1;
          return o !== i && (l = ce(o), l = o < 0 ? Ze(s + l, 0) : tn(l, s - 1)), Go(e, te(t, 3), l, !0);
        }
        function wd(e) {
          var t = e == null ? 0 : e.length;
          return t ? Ve(e, 1) : [];
        }
        function yb(e) {
          var t = e == null ? 0 : e.length;
          return t ? Ve(e, Le) : [];
        }
        function mb(e, t) {
          var o = e == null ? 0 : e.length;
          return o ? (t = t === i ? 1 : ce(t), Ve(e, t)) : [];
        }
        function vb(e) {
          for (var t = -1, o = e == null ? 0 : e.length, s = {}; ++t < o; ) {
            var l = e[t];
            ht(s, l[0], l[1]);
          }
          return s;
        }
        function bd(e) {
          return e && e.length ? e[0] : i;
        }
        function _b(e, t, o) {
          var s = e == null ? 0 : e.length;
          if (!s)
            return -1;
          var l = o == null ? 0 : ce(o);
          return l < 0 && (l = Ze(s + l, 0)), Kr(e, t, l);
        }
        function wb(e) {
          var t = e == null ? 0 : e.length;
          return t ? Yn(e, 0, -1) : [];
        }
        var bb = pe(function(e) {
          var t = Ne(e, Ss);
          return t.length && t[0] === e[0] ? ds(t) : [];
        }), Eb = pe(function(e) {
          var t = zn(e), o = Ne(e, Ss);
          return t === zn(o) ? t = i : o.pop(), o.length && o[0] === e[0] ? ds(o, te(t, 2)) : [];
        }), Ab = pe(function(e) {
          var t = zn(e), o = Ne(e, Ss);
          return t = typeof t == "function" ? t : i, t && o.pop(), o.length && o[0] === e[0] ? ds(o, i, t) : [];
        });
        function Sb(e, t) {
          return e == null ? "" : w_.call(e, t);
        }
        function zn(e) {
          var t = e == null ? 0 : e.length;
          return t ? e[t - 1] : i;
        }
        function Ib(e, t, o) {
          var s = e == null ? 0 : e.length;
          if (!s)
            return -1;
          var l = s;
          return o !== i && (l = ce(o), l = l < 0 ? Ze(s + l, 0) : tn(l, s - 1)), t === t ? i_(e, t, l) : Go(e, nh, l, !0);
        }
        function Tb(e, t) {
          return e && e.length ? Ch(e, ce(t)) : i;
        }
        var Ob = pe(Ed);
        function Ed(e, t) {
          return e && e.length && t && t.length ? vs(e, t) : e;
        }
        function Rb(e, t, o) {
          return e && e.length && t && t.length ? vs(e, t, te(o, 2)) : e;
        }
        function xb(e, t, o) {
          return e && e.length && t && t.length ? vs(e, t, i, o) : e;
        }
        var Mb = Pt(function(e, t) {
          var o = e == null ? 0 : e.length, s = fs(e, t);
          return Fh(e, Ne(t, function(l) {
            return Ct(l, o) ? +l : l;
          }).sort(zh)), s;
        });
        function Pb(e, t) {
          var o = [];
          if (!(e && e.length))
            return o;
          var s = -1, l = [], y = e.length;
          for (t = te(t, 3); ++s < y; ) {
            var _ = e[s];
            t(_, s, e) && (o.push(_), l.push(s));
          }
          return Fh(e, l), o;
        }
        function qs(e) {
          return e == null ? e : S_.call(e);
        }
        function Cb(e, t, o) {
          var s = e == null ? 0 : e.length;
          return s ? (o && typeof o != "number" && fn(e, t, o) ? (t = 0, o = s) : (t = t == null ? 0 : ce(t), o = o === i ? s : ce(o)), Yn(e, t, o)) : [];
        }
        function Db(e, t) {
          return pa(e, t);
        }
        function Nb(e, t, o) {
          return bs(e, t, te(o, 2));
        }
        function Fb(e, t) {
          var o = e == null ? 0 : e.length;
          if (o) {
            var s = pa(e, t);
            if (s < o && tt(e[s], t))
              return s;
          }
          return -1;
        }
        function Lb(e, t) {
          return pa(e, t, !0);
        }
        function Bb(e, t, o) {
          return bs(e, t, te(o, 2), !0);
        }
        function qb(e, t) {
          var o = e == null ? 0 : e.length;
          if (o) {
            var s = pa(e, t, !0) - 1;
            if (tt(e[s], t))
              return s;
          }
          return -1;
        }
        function kb(e) {
          return e && e.length ? Bh(e) : [];
        }
        function Ub(e, t) {
          return e && e.length ? Bh(e, te(t, 2)) : [];
        }
        function jb(e) {
          var t = e == null ? 0 : e.length;
          return t ? Yn(e, 1, t) : [];
        }
        function $b(e, t, o) {
          return e && e.length ? (t = o || t === i ? 1 : ce(t), Yn(e, 0, t < 0 ? 0 : t)) : [];
        }
        function Wb(e, t, o) {
          var s = e == null ? 0 : e.length;
          return s ? (t = o || t === i ? 1 : ce(t), t = s - t, Yn(e, t < 0 ? 0 : t, s)) : [];
        }
        function Yb(e, t) {
          return e && e.length ? ha(e, te(t, 3), !1, !0) : [];
        }
        function zb(e, t) {
          return e && e.length ? ha(e, te(t, 3)) : [];
        }
        var Gb = pe(function(e) {
          return er(Ve(e, 1, We, !0));
        }), Zb = pe(function(e) {
          var t = zn(e);
          return We(t) && (t = i), er(Ve(e, 1, We, !0), te(t, 2));
        }), Hb = pe(function(e) {
          var t = zn(e);
          return t = typeof t == "function" ? t : i, er(Ve(e, 1, We, !0), i, t);
        });
        function Kb(e) {
          return e && e.length ? er(e) : [];
        }
        function Jb(e, t) {
          return e && e.length ? er(e, te(t, 2)) : [];
        }
        function Vb(e, t) {
          return t = typeof t == "function" ? t : i, e && e.length ? er(e, i, t) : [];
        }
        function ks(e) {
          if (!(e && e.length))
            return [];
          var t = 0;
          return e = Kt(e, function(o) {
            if (We(o))
              return t = Ze(o.length, t), !0;
          }), ts(t, function(o) {
            return Ne(e, Qu(o));
          });
        }
        function Ad(e, t) {
          if (!(e && e.length))
            return [];
          var o = ks(e);
          return t == null ? o : Ne(o, function(s) {
            return Tn(t, i, s);
          });
        }
        var Xb = pe(function(e, t) {
          return We(e) ? Hi(e, t) : [];
        }), Qb = pe(function(e) {
          return As(Kt(e, We));
        }), eE = pe(function(e) {
          var t = zn(e);
          return We(t) && (t = i), As(Kt(e, We), te(t, 2));
        }), nE = pe(function(e) {
          var t = zn(e);
          return t = typeof t == "function" ? t : i, As(Kt(e, We), i, t);
        }), tE = pe(ks);
        function rE(e, t) {
          return jh(e || [], t || [], Zi);
        }
        function iE(e, t) {
          return jh(e || [], t || [], Vi);
        }
        var oE = pe(function(e) {
          var t = e.length, o = t > 1 ? e[t - 1] : i;
          return o = typeof o == "function" ? (e.pop(), o) : i, Ad(e, o);
        });
        function Sd(e) {
          var t = d(e);
          return t.__chain__ = !0, t;
        }
        function aE(e, t) {
          return t(e), e;
        }
        function Ea(e, t) {
          return t(e);
        }
        var uE = Pt(function(e) {
          var t = e.length, o = t ? e[0] : 0, s = this.__wrapped__, l = function(y) {
            return fs(y, e);
          };
          return t > 1 || this.__actions__.length || !(s instanceof ye) || !Ct(o) ? this.thru(l) : (s = s.slice(o, +o + (t ? 1 : 0)), s.__actions__.push({
            func: Ea,
            args: [l],
            thisArg: i
          }), new $n(s, this.__chain__).thru(function(y) {
            return t && !y.length && y.push(i), y;
          }));
        });
        function sE() {
          return Sd(this);
        }
        function cE() {
          return new $n(this.value(), this.__chain__);
        }
        function fE() {
          this.__values__ === i && (this.__values__ = qd(this.value()));
          var e = this.__index__ >= this.__values__.length, t = e ? i : this.__values__[this.__index__++];
          return { done: e, value: t };
        }
        function lE() {
          return this;
        }
        function pE(e) {
          for (var t, o = this; o instanceof ua; ) {
            var s = md(o);
            s.__index__ = 0, s.__values__ = i, t ? l.__wrapped__ = s : t = s;
            var l = s;
            o = o.__wrapped__;
          }
          return l.__wrapped__ = e, t;
        }
        function hE() {
          var e = this.__wrapped__;
          if (e instanceof ye) {
            var t = e;
            return this.__actions__.length && (t = new ye(this)), t = t.reverse(), t.__actions__.push({
              func: Ea,
              args: [qs],
              thisArg: i
            }), new $n(t, this.__chain__);
          }
          return this.thru(qs);
        }
        function dE() {
          return Uh(this.__wrapped__, this.__actions__);
        }
        var gE = da(function(e, t, o) {
          Ee.call(e, o) ? ++e[o] : ht(e, o, 1);
        });
        function yE(e, t, o) {
          var s = se(e) ? Qp : aw;
          return o && fn(e, t, o) && (t = i), s(e, te(t, 3));
        }
        function mE(e, t) {
          var o = se(e) ? Kt : Ah;
          return o(e, te(t, 3));
        }
        var vE = Vh(vd), _E = Vh(_d);
        function wE(e, t) {
          return Ve(Aa(e, t), 1);
        }
        function bE(e, t) {
          return Ve(Aa(e, t), Le);
        }
        function EE(e, t, o) {
          return o = o === i ? 1 : ce(o), Ve(Aa(e, t), o);
        }
        function Id(e, t) {
          var o = se(e) ? On : Qt;
          return o(e, te(t, 3));
        }
        function Td(e, t) {
          var o = se(e) ? jv : Eh;
          return o(e, te(t, 3));
        }
        var AE = da(function(e, t, o) {
          Ee.call(e, o) ? e[o].push(t) : ht(e, o, [t]);
        });
        function SE(e, t, o, s) {
          e = gn(e) ? e : ui(e), o = o && !s ? ce(o) : 0;
          var l = e.length;
          return o < 0 && (o = Ze(l + o, 0)), Ra(e) ? o <= l && e.indexOf(t, o) > -1 : !!l && Kr(e, t, o) > -1;
        }
        var IE = pe(function(e, t, o) {
          var s = -1, l = typeof t == "function", y = gn(e) ? C(e.length) : [];
          return Qt(e, function(_) {
            y[++s] = l ? Tn(t, _, o) : Ki(_, t, o);
          }), y;
        }), TE = da(function(e, t, o) {
          ht(e, o, t);
        });
        function Aa(e, t) {
          var o = se(e) ? Ne : xh;
          return o(e, te(t, 3));
        }
        function OE(e, t, o, s) {
          return e == null ? [] : (se(t) || (t = t == null ? [] : [t]), o = s ? i : o, se(o) || (o = o == null ? [] : [o]), Dh(e, t, o));
        }
        var RE = da(function(e, t, o) {
          e[o ? 0 : 1].push(t);
        }, function() {
          return [[], []];
        });
        function xE(e, t, o) {
          var s = se(e) ? Vu : rh, l = arguments.length < 3;
          return s(e, te(t, 4), o, l, Qt);
        }
        function ME(e, t, o) {
          var s = se(e) ? $v : rh, l = arguments.length < 3;
          return s(e, te(t, 4), o, l, Eh);
        }
        function PE(e, t) {
          var o = se(e) ? Kt : Ah;
          return o(e, Ta(te(t, 3)));
        }
        function CE(e) {
          var t = se(e) ? vh : Sw;
          return t(e);
        }
        function DE(e, t, o) {
          (o ? fn(e, t, o) : t === i) ? t = 1 : t = ce(t);
          var s = se(e) ? nw : Iw;
          return s(e, t);
        }
        function NE(e) {
          var t = se(e) ? tw : Ow;
          return t(e);
        }
        function FE(e) {
          if (e == null)
            return 0;
          if (gn(e))
            return Ra(e) ? Vr(e) : e.length;
          var t = rn(e);
          return t == Be || t == nn ? e.size : ys(e).length;
        }
        function LE(e, t, o) {
          var s = se(e) ? Xu : Rw;
          return o && fn(e, t, o) && (t = i), s(e, te(t, 3));
        }
        var BE = pe(function(e, t) {
          if (e == null)
            return [];
          var o = t.length;
          return o > 1 && fn(e, t[0], t[1]) ? t = [] : o > 2 && fn(t[0], t[1], t[2]) && (t = [t[0]]), Dh(e, Ve(t, 1), []);
        }), Sa = m_ || function() {
          return Je.Date.now();
        };
        function qE(e, t) {
          if (typeof t != "function")
            throw new jn(f);
          return e = ce(e), function() {
            if (--e < 1)
              return t.apply(this, arguments);
          };
        }
        function Od(e, t, o) {
          return t = o ? i : t, t = e && t == null ? e.length : t, Mt(e, G, i, i, i, i, t);
        }
        function Rd(e, t) {
          var o;
          if (typeof t != "function")
            throw new jn(f);
          return e = ce(e), function() {
            return --e > 0 && (o = t.apply(this, arguments)), e <= 1 && (t = i), o;
          };
        }
        var Us = pe(function(e, t, o) {
          var s = A;
          if (o.length) {
            var l = Vt(o, oi(Us));
            s |= N;
          }
          return Mt(e, s, t, o, l);
        }), xd = pe(function(e, t, o) {
          var s = A | R;
          if (o.length) {
            var l = Vt(o, oi(xd));
            s |= N;
          }
          return Mt(t, s, e, o, l);
        });
        function Md(e, t, o) {
          t = o ? i : t;
          var s = Mt(e, S, i, i, i, i, i, t);
          return s.placeholder = Md.placeholder, s;
        }
        function Pd(e, t, o) {
          t = o ? i : t;
          var s = Mt(e, x, i, i, i, i, i, t);
          return s.placeholder = Pd.placeholder, s;
        }
        function Cd(e, t, o) {
          var s, l, y, _, b, O, B = 0, q = !1, Y = !1, Z = !0;
          if (typeof e != "function")
            throw new jn(f);
          t = Gn(t) || 0, ke(o) && (q = !!o.leading, Y = "maxWait" in o, y = Y ? Ze(Gn(o.maxWait) || 0, t) : y, Z = "trailing" in o ? !!o.trailing : Z);
          function J(Ye) {
            var rt = s, Ft = l;
            return s = l = i, B = Ye, _ = e.apply(Ft, rt), _;
          }
          function ie(Ye) {
            return B = Ye, b = eo(de, t), q ? J(Ye) : _;
          }
          function fe(Ye) {
            var rt = Ye - O, Ft = Ye - B, Xd = t - rt;
            return Y ? tn(Xd, y - Ft) : Xd;
          }
          function ne(Ye) {
            var rt = Ye - O, Ft = Ye - B;
            return O === i || rt >= t || rt < 0 || Y && Ft >= y;
          }
          function de() {
            var Ye = Sa();
            if (ne(Ye))
              return me(Ye);
            b = eo(de, fe(Ye));
          }
          function me(Ye) {
            return b = i, Z && s ? J(Ye) : (s = l = i, _);
          }
          function Pn() {
            b !== i && $h(b), B = 0, s = O = l = b = i;
          }
          function ln() {
            return b === i ? _ : me(Sa());
          }
          function Cn() {
            var Ye = Sa(), rt = ne(Ye);
            if (s = arguments, l = this, O = Ye, rt) {
              if (b === i)
                return ie(O);
              if (Y)
                return $h(b), b = eo(de, t), J(O);
            }
            return b === i && (b = eo(de, t)), _;
          }
          return Cn.cancel = Pn, Cn.flush = ln, Cn;
        }
        var kE = pe(function(e, t) {
          return bh(e, 1, t);
        }), UE = pe(function(e, t, o) {
          return bh(e, Gn(t) || 0, o);
        });
        function jE(e) {
          return Mt(e, V);
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
          return o.cache = new (Ia.Cache || xt)(), o;
        }
        Ia.Cache = xt;
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
        function $E(e) {
          return Rd(2, e);
        }
        var WE = xw(function(e, t) {
          t = t.length == 1 && se(t[0]) ? Ne(t[0], Rn(te())) : Ne(Ve(t, 1), Rn(te()));
          var o = t.length;
          return pe(function(s) {
            for (var l = -1, y = tn(s.length, o); ++l < y; )
              s[l] = t[l].call(this, s[l]);
            return Tn(e, this, s);
          });
        }), js = pe(function(e, t) {
          var o = Vt(t, oi(js));
          return Mt(e, N, i, t, o);
        }), Dd = pe(function(e, t) {
          var o = Vt(t, oi(Dd));
          return Mt(e, k, i, t, o);
        }), YE = Pt(function(e, t) {
          return Mt(e, H, i, i, i, t);
        });
        function zE(e, t) {
          if (typeof e != "function")
            throw new jn(f);
          return t = t === i ? t : ce(t), pe(e, t);
        }
        function GE(e, t) {
          if (typeof e != "function")
            throw new jn(f);
          return t = t == null ? 0 : Ze(ce(t), 0), pe(function(o) {
            var s = o[t], l = tr(o, 0, t);
            return s && Jt(l, s), Tn(e, this, l);
          });
        }
        function ZE(e, t, o) {
          var s = !0, l = !0;
          if (typeof e != "function")
            throw new jn(f);
          return ke(o) && (s = "leading" in o ? !!o.leading : s, l = "trailing" in o ? !!o.trailing : l), Cd(e, t, {
            leading: s,
            maxWait: t,
            trailing: l
          });
        }
        function HE(e) {
          return Od(e, 1);
        }
        function KE(e, t) {
          return js(Is(t), e);
        }
        function JE() {
          if (!arguments.length)
            return [];
          var e = arguments[0];
          return se(e) ? e : [e];
        }
        function VE(e) {
          return Wn(e, I);
        }
        function XE(e, t) {
          return t = typeof t == "function" ? t : i, Wn(e, I, t);
        }
        function QE(e) {
          return Wn(e, w | I);
        }
        function e2(e, t) {
          return t = typeof t == "function" ? t : i, Wn(e, w | I, t);
        }
        function n2(e, t) {
          return t == null || wh(e, t, Ke(t));
        }
        function tt(e, t) {
          return e === t || e !== e && t !== t;
        }
        var t2 = va(hs), r2 = va(function(e, t) {
          return e >= t;
        }), Fr = Th(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? Th : function(e) {
          return $e(e) && Ee.call(e, "callee") && !ph.call(e, "callee");
        }, se = C.isArray, i2 = Zp ? Rn(Zp) : pw;
        function gn(e) {
          return e != null && Oa(e.length) && !Dt(e);
        }
        function We(e) {
          return $e(e) && gn(e);
        }
        function o2(e) {
          return e === !0 || e === !1 || $e(e) && cn(e) == ee;
        }
        var rr = __ || Qs, a2 = Hp ? Rn(Hp) : hw;
        function u2(e) {
          return $e(e) && e.nodeType === 1 && !no(e);
        }
        function s2(e) {
          if (e == null)
            return !0;
          if (gn(e) && (se(e) || typeof e == "string" || typeof e.splice == "function" || rr(e) || ai(e) || Fr(e)))
            return !e.length;
          var t = rn(e);
          if (t == Be || t == nn)
            return !e.size;
          if (Qi(e))
            return !ys(e).length;
          for (var o in e)
            if (Ee.call(e, o))
              return !1;
          return !0;
        }
        function c2(e, t) {
          return Ji(e, t);
        }
        function f2(e, t, o) {
          o = typeof o == "function" ? o : i;
          var s = o ? o(e, t) : i;
          return s === i ? Ji(e, t, i, o) : !!s;
        }
        function $s(e) {
          if (!$e(e))
            return !1;
          var t = cn(e);
          return t == _e || t == ve || typeof e.message == "string" && typeof e.name == "string" && !no(e);
        }
        function l2(e) {
          return typeof e == "number" && dh(e);
        }
        function Dt(e) {
          if (!ke(e))
            return !1;
          var t = cn(e);
          return t == Me || t == ze || t == oe || t == Tt;
        }
        function Nd(e) {
          return typeof e == "number" && e == ce(e);
        }
        function Oa(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Oe;
        }
        function ke(e) {
          var t = typeof e;
          return e != null && (t == "object" || t == "function");
        }
        function $e(e) {
          return e != null && typeof e == "object";
        }
        var Fd = Kp ? Rn(Kp) : gw;
        function p2(e, t) {
          return e === t || gs(e, t, Cs(t));
        }
        function h2(e, t, o) {
          return o = typeof o == "function" ? o : i, gs(e, t, Cs(t), o);
        }
        function d2(e) {
          return Ld(e) && e != +e;
        }
        function g2(e) {
          if (Xw(e))
            throw new ae(c);
          return Oh(e);
        }
        function y2(e) {
          return e === null;
        }
        function m2(e) {
          return e == null;
        }
        function Ld(e) {
          return typeof e == "number" || $e(e) && cn(e) == qe;
        }
        function no(e) {
          if (!$e(e) || cn(e) != sn)
            return !1;
          var t = ea(e);
          if (t === null)
            return !0;
          var o = Ee.call(t, "constructor") && t.constructor;
          return typeof o == "function" && o instanceof o && Jo.call(o) == h_;
        }
        var Ws = Jp ? Rn(Jp) : yw;
        function v2(e) {
          return Nd(e) && e >= -Oe && e <= Oe;
        }
        var Bd = Vp ? Rn(Vp) : mw;
        function Ra(e) {
          return typeof e == "string" || !se(e) && $e(e) && cn(e) == pt;
        }
        function Mn(e) {
          return typeof e == "symbol" || $e(e) && cn(e) == Ot;
        }
        var ai = Xp ? Rn(Xp) : vw;
        function _2(e) {
          return e === i;
        }
        function w2(e) {
          return $e(e) && rn(e) == ki;
        }
        function b2(e) {
          return $e(e) && cn(e) == qm;
        }
        var E2 = va(ms), A2 = va(function(e, t) {
          return e <= t;
        });
        function qd(e) {
          if (!e)
            return [];
          if (gn(e))
            return Ra(e) ? Qn(e) : dn(e);
          if ($i && e[$i])
            return n_(e[$i]());
          var t = rn(e), o = t == Be ? is : t == nn ? Zo : ui;
          return o(e);
        }
        function Nt(e) {
          if (!e)
            return e === 0 ? e : 0;
          if (e = Gn(e), e === Le || e === -Le) {
            var t = e < 0 ? -1 : 1;
            return t * In;
          }
          return e === e ? e : 0;
        }
        function ce(e) {
          var t = Nt(e), o = t % 1;
          return t === t ? o ? t - o : t : 0;
        }
        function kd(e) {
          return e ? Pr(ce(e), 0, E) : 0;
        }
        function Gn(e) {
          if (typeof e == "number")
            return e;
          if (Mn(e))
            return U;
          if (ke(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = ke(t) ? t + "" : t;
          }
          if (typeof e != "string")
            return e === 0 ? e : +e;
          e = ih(e);
          var o = iv.test(e);
          return o || av.test(e) ? qv(e.slice(2), o ? 2 : 8) : rv.test(e) ? U : +e;
        }
        function Ud(e) {
          return gt(e, yn(e));
        }
        function S2(e) {
          return e ? Pr(ce(e), -Oe, Oe) : e === 0 ? e : 0;
        }
        function Ae(e) {
          return e == null ? "" : xn(e);
        }
        var I2 = ri(function(e, t) {
          if (Qi(t) || gn(t)) {
            gt(t, Ke(t), e);
            return;
          }
          for (var o in t)
            Ee.call(t, o) && Zi(e, o, t[o]);
        }), jd = ri(function(e, t) {
          gt(t, yn(t), e);
        }), $d = ri(function(e, t, o, s) {
          gt(t, yn(t), e, s);
        }), Ys = ri(function(e, t, o, s) {
          gt(t, Ke(t), e, s);
        }), T2 = Pt(fs);
        function O2(e, t) {
          var o = ti(e);
          return t == null ? o : _h(o, t);
        }
        var R2 = pe(function(e, t) {
          e = Te(e);
          var o = -1, s = t.length, l = s > 2 ? t[2] : i;
          for (l && fn(t[0], t[1], l) && (s = 1); ++o < s; )
            for (var y = t[o], _ = yn(y), b = -1, O = _.length; ++b < O; ) {
              var B = _[b], q = e[B];
              (q === i || tt(q, Qr[B]) && !Ee.call(e, B)) && (e[B] = y[B]);
            }
          return e;
        }), x2 = pe(function(e) {
          return e.push(i, id), Tn(Wd, i, e);
        });
        function M2(e, t) {
          return eh(e, te(t, 3), dt);
        }
        function P2(e, t) {
          return eh(e, te(t, 3), ps);
        }
        function C2(e, t) {
          return e == null ? e : ls(e, te(t, 3), yn);
        }
        function D2(e, t) {
          return e == null ? e : Sh(e, te(t, 3), yn);
        }
        function N2(e, t) {
          return e && dt(e, te(t, 3));
        }
        function F2(e, t) {
          return e && ps(e, te(t, 3));
        }
        function L2(e) {
          return e == null ? [] : fa(e, Ke(e));
        }
        function B2(e) {
          return e == null ? [] : fa(e, yn(e));
        }
        function zs(e, t, o) {
          var s = e == null ? i : Cr(e, t);
          return s === i ? o : s;
        }
        function q2(e, t) {
          return e != null && ud(e, t, sw);
        }
        function Gs(e, t) {
          return e != null && ud(e, t, cw);
        }
        var k2 = Qh(function(e, t, o) {
          t != null && typeof t.toString != "function" && (t = Vo.call(t)), e[t] = o;
        }, Hs(mn)), U2 = Qh(function(e, t, o) {
          t != null && typeof t.toString != "function" && (t = Vo.call(t)), Ee.call(e, t) ? e[t].push(o) : e[t] = [o];
        }, te), j2 = pe(Ki);
        function Ke(e) {
          return gn(e) ? mh(e) : ys(e);
        }
        function yn(e) {
          return gn(e) ? mh(e, !0) : _w(e);
        }
        function $2(e, t) {
          var o = {};
          return t = te(t, 3), dt(e, function(s, l, y) {
            ht(o, t(s, l, y), s);
          }), o;
        }
        function W2(e, t) {
          var o = {};
          return t = te(t, 3), dt(e, function(s, l, y) {
            ht(o, l, t(s, l, y));
          }), o;
        }
        var Y2 = ri(function(e, t, o) {
          la(e, t, o);
        }), Wd = ri(function(e, t, o, s) {
          la(e, t, o, s);
        }), z2 = Pt(function(e, t) {
          var o = {};
          if (e == null)
            return o;
          var s = !1;
          t = Ne(t, function(y) {
            return y = nr(y, e), s || (s = y.length > 1), y;
          }), gt(e, Ms(e), o), s && (o = Wn(o, w | P | I, Uw));
          for (var l = t.length; l--; )
            Es(o, t[l]);
          return o;
        });
        function G2(e, t) {
          return Yd(e, Ta(te(t)));
        }
        var Z2 = Pt(function(e, t) {
          return e == null ? {} : bw(e, t);
        });
        function Yd(e, t) {
          if (e == null)
            return {};
          var o = Ne(Ms(e), function(s) {
            return [s];
          });
          return t = te(t), Nh(e, o, function(s, l) {
            return t(s, l[0]);
          });
        }
        function H2(e, t, o) {
          t = nr(t, e);
          var s = -1, l = t.length;
          for (l || (l = 1, e = i); ++s < l; ) {
            var y = e == null ? i : e[nt(t[s])];
            y === i && (s = l, y = o), e = Dt(y) ? y.call(e) : y;
          }
          return e;
        }
        function K2(e, t, o) {
          return e == null ? e : Vi(e, t, o);
        }
        function J2(e, t, o, s) {
          return s = typeof s == "function" ? s : i, e == null ? e : Vi(e, t, o, s);
        }
        var zd = td(Ke), Gd = td(yn);
        function V2(e, t, o) {
          var s = se(e), l = s || rr(e) || ai(e);
          if (t = te(t, 4), o == null) {
            var y = e && e.constructor;
            l ? o = s ? new y() : [] : ke(e) ? o = Dt(y) ? ti(ea(e)) : {} : o = {};
          }
          return (l ? On : dt)(e, function(_, b, O) {
            return t(o, _, b, O);
          }), o;
        }
        function X2(e, t) {
          return e == null ? !0 : Es(e, t);
        }
        function Q2(e, t, o) {
          return e == null ? e : kh(e, t, Is(o));
        }
        function eA(e, t, o, s) {
          return s = typeof s == "function" ? s : i, e == null ? e : kh(e, t, Is(o), s);
        }
        function ui(e) {
          return e == null ? [] : rs(e, Ke(e));
        }
        function nA(e) {
          return e == null ? [] : rs(e, yn(e));
        }
        function tA(e, t, o) {
          return o === i && (o = t, t = i), o !== i && (o = Gn(o), o = o === o ? o : 0), t !== i && (t = Gn(t), t = t === t ? t : 0), Pr(Gn(e), t, o);
        }
        function rA(e, t, o) {
          return t = Nt(t), o === i ? (o = t, t = 0) : o = Nt(o), e = Gn(e), fw(e, t, o);
        }
        function iA(e, t, o) {
          if (o && typeof o != "boolean" && fn(e, t, o) && (t = o = i), o === i && (typeof t == "boolean" ? (o = t, t = i) : typeof e == "boolean" && (o = e, e = i)), e === i && t === i ? (e = 0, t = 1) : (e = Nt(e), t === i ? (t = e, e = 0) : t = Nt(t)), e > t) {
            var s = e;
            e = t, t = s;
          }
          if (o || e % 1 || t % 1) {
            var l = gh();
            return tn(e + l * (t - e + Bv("1e-" + ((l + "").length - 1))), t);
          }
          return _s(e, t);
        }
        var oA = ii(function(e, t, o) {
          return t = t.toLowerCase(), e + (o ? Zd(t) : t);
        });
        function Zd(e) {
          return Zs(Ae(e).toLowerCase());
        }
        function Hd(e) {
          return e = Ae(e), e && e.replace(sv, Jv).replace(Ov, "");
        }
        function aA(e, t, o) {
          e = Ae(e), t = xn(t);
          var s = e.length;
          o = o === i ? s : Pr(ce(o), 0, s);
          var l = o;
          return o -= t.length, o >= 0 && e.slice(o, l) == t;
        }
        function uA(e) {
          return e = Ae(e), e && Wm.test(e) ? e.replace(Ap, Vv) : e;
        }
        function sA(e) {
          return e = Ae(e), e && Km.test(e) ? e.replace(ju, "\\$&") : e;
        }
        var cA = ii(function(e, t, o) {
          return e + (o ? "-" : "") + t.toLowerCase();
        }), fA = ii(function(e, t, o) {
          return e + (o ? " " : "") + t.toLowerCase();
        }), lA = Jh("toLowerCase");
        function pA(e, t, o) {
          e = Ae(e), t = ce(t);
          var s = t ? Vr(e) : 0;
          if (!t || s >= t)
            return e;
          var l = (t - s) / 2;
          return ma(ia(l), o) + e + ma(ra(l), o);
        }
        function hA(e, t, o) {
          e = Ae(e), t = ce(t);
          var s = t ? Vr(e) : 0;
          return t && s < t ? e + ma(t - s, o) : e;
        }
        function dA(e, t, o) {
          e = Ae(e), t = ce(t);
          var s = t ? Vr(e) : 0;
          return t && s < t ? ma(t - s, o) + e : e;
        }
        function gA(e, t, o) {
          return o || t == null ? t = 0 : t && (t = +t), A_(Ae(e).replace($u, ""), t || 0);
        }
        function yA(e, t, o) {
          return (o ? fn(e, t, o) : t === i) ? t = 1 : t = ce(t), ws(Ae(e), t);
        }
        function mA() {
          var e = arguments, t = Ae(e[0]);
          return e.length < 3 ? t : t.replace(e[1], e[2]);
        }
        var vA = ii(function(e, t, o) {
          return e + (o ? "_" : "") + t.toLowerCase();
        });
        function _A(e, t, o) {
          return o && typeof o != "number" && fn(e, t, o) && (t = o = i), o = o === i ? E : o >>> 0, o ? (e = Ae(e), e && (typeof t == "string" || t != null && !Ws(t)) && (t = xn(t), !t && Jr(e)) ? tr(Qn(e), 0, o) : e.split(t, o)) : [];
        }
        var wA = ii(function(e, t, o) {
          return e + (o ? " " : "") + Zs(t);
        });
        function bA(e, t, o) {
          return e = Ae(e), o = o == null ? 0 : Pr(ce(o), 0, e.length), t = xn(t), e.slice(o, o + t.length) == t;
        }
        function EA(e, t, o) {
          var s = d.templateSettings;
          o && fn(e, t, o) && (t = i), e = Ae(e), t = Ys({}, t, s, rd);
          var l = Ys({}, t.imports, s.imports, rd), y = Ke(l), _ = rs(l, y);
          On(y, function(ne) {
            if (Ip.test(ne))
              throw new ae(h);
          });
          var b, O, B = 0, q = t.interpolate || $o, Y = "__p += '", Z = os(
            (t.escape || $o).source + "|" + q.source + "|" + (q === Sp ? tv : $o).source + "|" + (t.evaluate || $o).source + "|$",
            "g"
          ), J = "//# sourceURL=" + (Ee.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Cv + "]") + `
`;
          e.replace(Z, function(ne, de, me, Pn, ln, Cn) {
            return me || (me = Pn), Y += e.slice(B, Cn).replace(cv, Xv), de && (b = !0, Y += `' +
__e(` + de + `) +
'`), ln && (O = !0, Y += `';
` + ln + `;
__p += '`), me && (Y += `' +
((__t = (` + me + `)) == null ? '' : __t) +
'`), B = Cn + ne.length, ne;
          }), Y += `';
`;
          var ie = Ee.call(t, "variable") && t.variable;
          if (!ie)
            Y = `with (obj) {
` + Y + `
}
`;
          else if (Ip.test(ie))
            throw new ae(p);
          Y = (O ? Y.replace(km, "") : Y).replace(Um, "$1").replace(jm, "$1;"), Y = "function(" + (ie || "obj") + `) {
` + (ie ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (b ? ", __e = _.escape" : "") + (O ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + Y + `return __p
}`;
          var fe = Jd(function() {
            return be(y, J + "return " + Y).apply(i, _);
          });
          if (fe.source = Y, $s(fe))
            throw fe;
          return fe;
        }
        function AA(e) {
          return Ae(e).toLowerCase();
        }
        function SA(e) {
          return Ae(e).toUpperCase();
        }
        function IA(e, t, o) {
          if (e = Ae(e), e && (o || t === i))
            return ih(e);
          if (!e || !(t = xn(t)))
            return e;
          var s = Qn(e), l = Qn(t), y = oh(s, l), _ = ah(s, l) + 1;
          return tr(s, y, _).join("");
        }
        function TA(e, t, o) {
          if (e = Ae(e), e && (o || t === i))
            return e.slice(0, sh(e) + 1);
          if (!e || !(t = xn(t)))
            return e;
          var s = Qn(e), l = ah(s, Qn(t)) + 1;
          return tr(s, 0, l).join("");
        }
        function OA(e, t, o) {
          if (e = Ae(e), e && (o || t === i))
            return e.replace($u, "");
          if (!e || !(t = xn(t)))
            return e;
          var s = Qn(e), l = oh(s, Qn(t));
          return tr(s, l).join("");
        }
        function RA(e, t) {
          var o = le, s = we;
          if (ke(t)) {
            var l = "separator" in t ? t.separator : l;
            o = "length" in t ? ce(t.length) : o, s = "omission" in t ? xn(t.omission) : s;
          }
          e = Ae(e);
          var y = e.length;
          if (Jr(e)) {
            var _ = Qn(e);
            y = _.length;
          }
          if (o >= y)
            return e;
          var b = o - Vr(s);
          if (b < 1)
            return s;
          var O = _ ? tr(_, 0, b).join("") : e.slice(0, b);
          if (l === i)
            return O + s;
          if (_ && (b += O.length - b), Ws(l)) {
            if (e.slice(b).search(l)) {
              var B, q = O;
              for (l.global || (l = os(l.source, Ae(Tp.exec(l)) + "g")), l.lastIndex = 0; B = l.exec(q); )
                var Y = B.index;
              O = O.slice(0, Y === i ? b : Y);
            }
          } else if (e.indexOf(xn(l), b) != b) {
            var Z = O.lastIndexOf(l);
            Z > -1 && (O = O.slice(0, Z));
          }
          return O + s;
        }
        function xA(e) {
          return e = Ae(e), e && $m.test(e) ? e.replace(Ep, o_) : e;
        }
        var MA = ii(function(e, t, o) {
          return e + (o ? " " : "") + t.toUpperCase();
        }), Zs = Jh("toUpperCase");
        function Kd(e, t, o) {
          return e = Ae(e), t = o ? i : t, t === i ? e_(e) ? s_(e) : zv(e) : e.match(t) || [];
        }
        var Jd = pe(function(e, t) {
          try {
            return Tn(e, i, t);
          } catch (o) {
            return $s(o) ? o : new ae(o);
          }
        }), PA = Pt(function(e, t) {
          return On(t, function(o) {
            o = nt(o), ht(e, o, Us(e[o], e));
          }), e;
        });
        function CA(e) {
          var t = e == null ? 0 : e.length, o = te();
          return e = t ? Ne(e, function(s) {
            if (typeof s[1] != "function")
              throw new jn(f);
            return [o(s[0]), s[1]];
          }) : [], pe(function(s) {
            for (var l = -1; ++l < t; ) {
              var y = e[l];
              if (Tn(y[0], this, s))
                return Tn(y[1], this, s);
            }
          });
        }
        function DA(e) {
          return ow(Wn(e, w));
        }
        function Hs(e) {
          return function() {
            return e;
          };
        }
        function NA(e, t) {
          return e == null || e !== e ? t : e;
        }
        var FA = Xh(), LA = Xh(!0);
        function mn(e) {
          return e;
        }
        function Ks(e) {
          return Rh(typeof e == "function" ? e : Wn(e, w));
        }
        function BA(e) {
          return Mh(Wn(e, w));
        }
        function qA(e, t) {
          return Ph(e, Wn(t, w));
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
        function Js(e, t, o) {
          var s = Ke(t), l = fa(t, s);
          o == null && !(ke(t) && (l.length || !s.length)) && (o = t, t = e, e = this, l = fa(t, Ke(t)));
          var y = !(ke(o) && "chain" in o) || !!o.chain, _ = Dt(e);
          return On(l, function(b) {
            var O = t[b];
            e[b] = O, _ && (e.prototype[b] = function() {
              var B = this.__chain__;
              if (y || B) {
                var q = e(this.__wrapped__), Y = q.__actions__ = dn(this.__actions__);
                return Y.push({ func: O, args: arguments, thisArg: e }), q.__chain__ = B, q;
              }
              return O.apply(e, Jt([this.value()], arguments));
            });
          }), e;
        }
        function jA() {
          return Je._ === this && (Je._ = d_), this;
        }
        function Vs() {
        }
        function $A(e) {
          return e = ce(e), pe(function(t) {
            return Ch(t, e);
          });
        }
        var WA = Os(Ne), YA = Os(Qp), zA = Os(Xu);
        function Vd(e) {
          return Ns(e) ? Qu(nt(e)) : Ew(e);
        }
        function GA(e) {
          return function(t) {
            return e == null ? i : Cr(e, t);
          };
        }
        var ZA = ed(), HA = ed(!0);
        function Xs() {
          return [];
        }
        function Qs() {
          return !1;
        }
        function KA() {
          return {};
        }
        function JA() {
          return "";
        }
        function VA() {
          return !0;
        }
        function XA(e, t) {
          if (e = ce(e), e < 1 || e > Oe)
            return [];
          var o = E, s = tn(e, E);
          t = te(t), e -= E;
          for (var l = ts(s, t); ++o < e; )
            t(o);
          return l;
        }
        function QA(e) {
          return se(e) ? Ne(e, nt) : Mn(e) ? [e] : dn(yd(Ae(e)));
        }
        function eS(e) {
          var t = ++p_;
          return Ae(e) + t;
        }
        var nS = ya(function(e, t) {
          return e + t;
        }, 0), tS = Rs("ceil"), rS = ya(function(e, t) {
          return e / t;
        }, 1), iS = Rs("floor");
        function oS(e) {
          return e && e.length ? ca(e, mn, hs) : i;
        }
        function aS(e, t) {
          return e && e.length ? ca(e, te(t, 2), hs) : i;
        }
        function uS(e) {
          return th(e, mn);
        }
        function sS(e, t) {
          return th(e, te(t, 2));
        }
        function cS(e) {
          return e && e.length ? ca(e, mn, ms) : i;
        }
        function fS(e, t) {
          return e && e.length ? ca(e, te(t, 2), ms) : i;
        }
        var lS = ya(function(e, t) {
          return e * t;
        }, 1), pS = Rs("round"), hS = ya(function(e, t) {
          return e - t;
        }, 0);
        function dS(e) {
          return e && e.length ? ns(e, mn) : 0;
        }
        function gS(e, t) {
          return e && e.length ? ns(e, te(t, 2)) : 0;
        }
        return d.after = qE, d.ary = Od, d.assign = I2, d.assignIn = jd, d.assignInWith = $d, d.assignWith = Ys, d.at = T2, d.before = Rd, d.bind = Us, d.bindAll = PA, d.bindKey = xd, d.castArray = JE, d.chain = Sd, d.chunk = ob, d.compact = ab, d.concat = ub, d.cond = CA, d.conforms = DA, d.constant = Hs, d.countBy = gE, d.create = O2, d.curry = Md, d.curryRight = Pd, d.debounce = Cd, d.defaults = R2, d.defaultsDeep = x2, d.defer = kE, d.delay = UE, d.difference = sb, d.differenceBy = cb, d.differenceWith = fb, d.drop = lb, d.dropRight = pb, d.dropRightWhile = hb, d.dropWhile = db, d.fill = gb, d.filter = mE, d.flatMap = wE, d.flatMapDeep = bE, d.flatMapDepth = EE, d.flatten = wd, d.flattenDeep = yb, d.flattenDepth = mb, d.flip = jE, d.flow = FA, d.flowRight = LA, d.fromPairs = vb, d.functions = L2, d.functionsIn = B2, d.groupBy = AE, d.initial = wb, d.intersection = bb, d.intersectionBy = Eb, d.intersectionWith = Ab, d.invert = k2, d.invertBy = U2, d.invokeMap = IE, d.iteratee = Ks, d.keyBy = TE, d.keys = Ke, d.keysIn = yn, d.map = Aa, d.mapKeys = $2, d.mapValues = W2, d.matches = BA, d.matchesProperty = qA, d.memoize = Ia, d.merge = Y2, d.mergeWith = Wd, d.method = kA, d.methodOf = UA, d.mixin = Js, d.negate = Ta, d.nthArg = $A, d.omit = z2, d.omitBy = G2, d.once = $E, d.orderBy = OE, d.over = WA, d.overArgs = WE, d.overEvery = YA, d.overSome = zA, d.partial = js, d.partialRight = Dd, d.partition = RE, d.pick = Z2, d.pickBy = Yd, d.property = Vd, d.propertyOf = GA, d.pull = Ob, d.pullAll = Ed, d.pullAllBy = Rb, d.pullAllWith = xb, d.pullAt = Mb, d.range = ZA, d.rangeRight = HA, d.rearg = YE, d.reject = PE, d.remove = Pb, d.rest = zE, d.reverse = qs, d.sampleSize = DE, d.set = K2, d.setWith = J2, d.shuffle = NE, d.slice = Cb, d.sortBy = BE, d.sortedUniq = kb, d.sortedUniqBy = Ub, d.split = _A, d.spread = GE, d.tail = jb, d.take = $b, d.takeRight = Wb, d.takeRightWhile = Yb, d.takeWhile = zb, d.tap = aE, d.throttle = ZE, d.thru = Ea, d.toArray = qd, d.toPairs = zd, d.toPairsIn = Gd, d.toPath = QA, d.toPlainObject = Ud, d.transform = V2, d.unary = HE, d.union = Gb, d.unionBy = Zb, d.unionWith = Hb, d.uniq = Kb, d.uniqBy = Jb, d.uniqWith = Vb, d.unset = X2, d.unzip = ks, d.unzipWith = Ad, d.update = Q2, d.updateWith = eA, d.values = ui, d.valuesIn = nA, d.without = Xb, d.words = Kd, d.wrap = KE, d.xor = Qb, d.xorBy = eE, d.xorWith = nE, d.zip = tE, d.zipObject = rE, d.zipObjectDeep = iE, d.zipWith = oE, d.entries = zd, d.entriesIn = Gd, d.extend = jd, d.extendWith = $d, Js(d, d), d.add = nS, d.attempt = Jd, d.camelCase = oA, d.capitalize = Zd, d.ceil = tS, d.clamp = tA, d.clone = VE, d.cloneDeep = QE, d.cloneDeepWith = e2, d.cloneWith = XE, d.conformsTo = n2, d.deburr = Hd, d.defaultTo = NA, d.divide = rS, d.endsWith = aA, d.eq = tt, d.escape = uA, d.escapeRegExp = sA, d.every = yE, d.find = vE, d.findIndex = vd, d.findKey = M2, d.findLast = _E, d.findLastIndex = _d, d.findLastKey = P2, d.floor = iS, d.forEach = Id, d.forEachRight = Td, d.forIn = C2, d.forInRight = D2, d.forOwn = N2, d.forOwnRight = F2, d.get = zs, d.gt = t2, d.gte = r2, d.has = q2, d.hasIn = Gs, d.head = bd, d.identity = mn, d.includes = SE, d.indexOf = _b, d.inRange = rA, d.invoke = j2, d.isArguments = Fr, d.isArray = se, d.isArrayBuffer = i2, d.isArrayLike = gn, d.isArrayLikeObject = We, d.isBoolean = o2, d.isBuffer = rr, d.isDate = a2, d.isElement = u2, d.isEmpty = s2, d.isEqual = c2, d.isEqualWith = f2, d.isError = $s, d.isFinite = l2, d.isFunction = Dt, d.isInteger = Nd, d.isLength = Oa, d.isMap = Fd, d.isMatch = p2, d.isMatchWith = h2, d.isNaN = d2, d.isNative = g2, d.isNil = m2, d.isNull = y2, d.isNumber = Ld, d.isObject = ke, d.isObjectLike = $e, d.isPlainObject = no, d.isRegExp = Ws, d.isSafeInteger = v2, d.isSet = Bd, d.isString = Ra, d.isSymbol = Mn, d.isTypedArray = ai, d.isUndefined = _2, d.isWeakMap = w2, d.isWeakSet = b2, d.join = Sb, d.kebabCase = cA, d.last = zn, d.lastIndexOf = Ib, d.lowerCase = fA, d.lowerFirst = lA, d.lt = E2, d.lte = A2, d.max = oS, d.maxBy = aS, d.mean = uS, d.meanBy = sS, d.min = cS, d.minBy = fS, d.stubArray = Xs, d.stubFalse = Qs, d.stubObject = KA, d.stubString = JA, d.stubTrue = VA, d.multiply = lS, d.nth = Tb, d.noConflict = jA, d.noop = Vs, d.now = Sa, d.pad = pA, d.padEnd = hA, d.padStart = dA, d.parseInt = gA, d.random = iA, d.reduce = xE, d.reduceRight = ME, d.repeat = yA, d.replace = mA, d.result = H2, d.round = pS, d.runInContext = T, d.sample = CE, d.size = FE, d.snakeCase = vA, d.some = LE, d.sortedIndex = Db, d.sortedIndexBy = Nb, d.sortedIndexOf = Fb, d.sortedLastIndex = Lb, d.sortedLastIndexBy = Bb, d.sortedLastIndexOf = qb, d.startCase = wA, d.startsWith = bA, d.subtract = hS, d.sum = dS, d.sumBy = gS, d.template = EA, d.times = XA, d.toFinite = Nt, d.toInteger = ce, d.toLength = kd, d.toLower = AA, d.toNumber = Gn, d.toSafeInteger = S2, d.toString = Ae, d.toUpper = SA, d.trim = IA, d.trimEnd = TA, d.trimStart = OA, d.truncate = RA, d.unescape = xA, d.uniqueId = eS, d.upperCase = MA, d.upperFirst = Zs, d.each = Id, d.eachRight = Td, d.first = bd, Js(d, (function() {
          var e = {};
          return dt(d, function(t, o) {
            Ee.call(d.prototype, o) || (e[o] = t);
          }), e;
        })(), { chain: !1 }), d.VERSION = a, On(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
          d[e].placeholder = d;
        }), On(["drop", "take"], function(e, t) {
          ye.prototype[e] = function(o) {
            o = o === i ? 1 : Ze(ce(o), 0);
            var s = this.__filtered__ && !t ? new ye(this) : this.clone();
            return s.__filtered__ ? s.__takeCount__ = tn(o, s.__takeCount__) : s.__views__.push({
              size: tn(o, E),
              type: e + (s.__dir__ < 0 ? "Right" : "")
            }), s;
          }, ye.prototype[e + "Right"] = function(o) {
            return this.reverse()[e](o).reverse();
          };
        }), On(["filter", "map", "takeWhile"], function(e, t) {
          var o = t + 1, s = o == hn || o == Xn;
          ye.prototype[e] = function(l) {
            var y = this.clone();
            return y.__iteratees__.push({
              iteratee: te(l, 3),
              type: o
            }), y.__filtered__ = y.__filtered__ || s, y;
          };
        }), On(["head", "last"], function(e, t) {
          var o = "take" + (t ? "Right" : "");
          ye.prototype[e] = function() {
            return this[o](1).value()[0];
          };
        }), On(["initial", "tail"], function(e, t) {
          var o = "drop" + (t ? "" : "Right");
          ye.prototype[e] = function() {
            return this.__filtered__ ? new ye(this) : this[o](1);
          };
        }), ye.prototype.compact = function() {
          return this.filter(mn);
        }, ye.prototype.find = function(e) {
          return this.filter(e).head();
        }, ye.prototype.findLast = function(e) {
          return this.reverse().find(e);
        }, ye.prototype.invokeMap = pe(function(e, t) {
          return typeof e == "function" ? new ye(this) : this.map(function(o) {
            return Ki(o, e, t);
          });
        }), ye.prototype.reject = function(e) {
          return this.filter(Ta(te(e)));
        }, ye.prototype.slice = function(e, t) {
          e = ce(e);
          var o = this;
          return o.__filtered__ && (e > 0 || t < 0) ? new ye(o) : (e < 0 ? o = o.takeRight(-e) : e && (o = o.drop(e)), t !== i && (t = ce(t), o = t < 0 ? o.dropRight(-t) : o.take(t - e)), o);
        }, ye.prototype.takeRightWhile = function(e) {
          return this.reverse().takeWhile(e).reverse();
        }, ye.prototype.toArray = function() {
          return this.take(E);
        }, dt(ye.prototype, function(e, t) {
          var o = /^(?:filter|find|map|reject)|While$/.test(t), s = /^(?:head|last)$/.test(t), l = d[s ? "take" + (t == "last" ? "Right" : "") : t], y = s || /^find/.test(t);
          l && (d.prototype[t] = function() {
            var _ = this.__wrapped__, b = s ? [1] : arguments, O = _ instanceof ye, B = b[0], q = O || se(_), Y = function(de) {
              var me = l.apply(d, Jt([de], b));
              return s && Z ? me[0] : me;
            };
            q && o && typeof B == "function" && B.length != 1 && (O = q = !1);
            var Z = this.__chain__, J = !!this.__actions__.length, ie = y && !Z, fe = O && !J;
            if (!y && q) {
              _ = fe ? _ : new ye(this);
              var ne = e.apply(_, b);
              return ne.__actions__.push({ func: Ea, args: [Y], thisArg: i }), new $n(ne, Z);
            }
            return ie && fe ? e.apply(this, b) : (ne = this.thru(Y), ie ? s ? ne.value()[0] : ne.value() : ne);
          });
        }), On(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
          var t = Ho[e], o = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", s = /^(?:pop|shift)$/.test(e);
          d.prototype[e] = function() {
            var l = arguments;
            if (s && !this.__chain__) {
              var y = this.value();
              return t.apply(se(y) ? y : [], l);
            }
            return this[o](function(_) {
              return t.apply(se(_) ? _ : [], l);
            });
          };
        }), dt(ye.prototype, function(e, t) {
          var o = d[t];
          if (o) {
            var s = o.name + "";
            Ee.call(ni, s) || (ni[s] = []), ni[s].push({ name: t, func: o });
          }
        }), ni[ga(i, R).name] = [{
          name: "wrapper",
          func: i
        }], ye.prototype.clone = M_, ye.prototype.reverse = P_, ye.prototype.value = C_, d.prototype.at = uE, d.prototype.chain = sE, d.prototype.commit = cE, d.prototype.next = fE, d.prototype.plant = pE, d.prototype.reverse = hE, d.prototype.toJSON = d.prototype.valueOf = d.prototype.value = dE, d.prototype.first = d.prototype.head, $i && (d.prototype[$i] = lE), d;
      }), Xr = c_();
      Or ? ((Or.exports = Xr)._ = Xr, Hu._ = Xr) : Je._ = Xr;
    }).call(Bx);
  })(co, co.exports)), co.exports;
}
var pm = qx();
const kx = "_seekBar_16dv7_14", Ux = {
  seekBar: kx
};
function jx({ value: n = 0, className: r, ...i }) {
  const { translate: a } = Ur(), [u, c] = ry(n), f = Ai(() => pm.throttle(c, 10), []);
  return iy(() => {
    f(n);
  }, [n, f]), /* @__PURE__ */ z.createElement(
    "input",
    {
      type: "range",
      className: at(Ux.seekBar, r),
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
function q7({ vm: n }) {
  const { translate: r } = Ur(), {
    playbackState: i,
    mediaName: a = r("timeline|m.audio|unnamed_audio"),
    sizeBytes: u,
    durationSeconds: c,
    playedSeconds: f,
    percentComplete: p,
    error: h
  } = bo(n), g = u ? `(${zS(u)})` : null, v = i === "decoding";
  return /* @__PURE__ */ z.createElement(z.Fragment, null, /* @__PURE__ */ z.createElement(
    RS,
    {
      className: si.audioPlayer,
      tabIndex: 0,
      onKeyDown: n.onKeyDown,
      "aria-label": r("timeline|m.audio|audio_player"),
      role: "region"
    },
    /* @__PURE__ */ z.createElement(Nn, { gap: "var(--cpd-space-2x)", align: "center" }, /* @__PURE__ */ z.createElement(
      YS,
      {
        tabIndex: -1,
        disabled: v,
        playing: i === "playing",
        togglePlay: n.togglePlay
      }
    ), /* @__PURE__ */ z.createElement(Nn, { direction: "column", className: si.mediaInfo }, /* @__PURE__ */ z.createElement("span", { className: si.mediaName, "data-testid": "audio-player-name" }, a), /* @__PURE__ */ z.createElement(Nn, { className: si.byline, gap: "var(--cpd-space-1-5x)" }, /* @__PURE__ */ z.createElement(Mg, { seconds: c }), g))),
    /* @__PURE__ */ z.createElement(Nn, { align: "center", gap: "var(--cpd-space-1x)", "data-testid": "audio-player-seek" }, /* @__PURE__ */ z.createElement(jx, { tabIndex: -1, disabled: v, value: p, onChange: n.onSeekbarChange }), /* @__PURE__ */ z.createElement(Mg, { className: si.clock, seconds: f, role: "timer" }))
  ), h && /* @__PURE__ */ z.createElement("span", { className: si.error }, r("timeline|m.audio|error_downloading_audio")));
}
const $x = "_avatarWithDetails_7ga8t_8", Wx = "_title_7ga8t_17", Yx = "_details_7ga8t_28", hc = {
  avatarWithDetails: $x,
  title: Wx,
  details: Yx
};
function k7({
  as: n,
  className: r,
  details: i,
  avatar: a,
  title: u,
  ...c
}) {
  const f = n || "div";
  return /* @__PURE__ */ z.createElement(f, { className: at(hc.avatarWithDetails, r), ...c }, a, /* @__PURE__ */ z.createElement(Nn, { direction: "column" }, /* @__PURE__ */ z.createElement("span", { className: hc.title }, u), /* @__PURE__ */ z.createElement("span", { className: hc.details }, i)));
}
function hm(n, r) {
  return /* @__PURE__ */ Ce.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: r,
    ...n,
    children: /* @__PURE__ */ Ce.jsx("path", {
      d: "m10.6 13.8-2.15-2.15a.95.95 0 0 0-.7-.275.95.95 0 0 0-.7.275.95.95 0 0 0-.275.7q0 .425.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65a.95.95 0 0 0 .275-.7.95.95 0 0 0-.275-.7.95.95 0 0 0-.7-.275.95.95 0 0 0-.7.275zM12 22a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20"
    })
  });
}
hm.displayName = "CheckCircleIcon";
const zx = Vn(hm);
function dm(n, r) {
  return /* @__PURE__ */ Ce.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: r,
    ...n,
    children: /* @__PURE__ */ Ce.jsx("path", {
      d: "M12 17q.424 0 .713-.288A.97.97 0 0 0 13 16a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 15a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 16q0 .424.287.712.288.288.713.288m0-4q.424 0 .713-.287A.97.97 0 0 0 13 12V8a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 7a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 8v4q0 .424.287.713.288.287.713.287m0 9a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22"
    })
  });
}
dm.displayName = "ErrorSolidIcon";
const Gx = Vn(dm);
function gm(n, r) {
  return /* @__PURE__ */ Ce.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: r,
    ...n,
    children: [/* @__PURE__ */ Ce.jsx("path", {
      d: "M11.288 7.288A.97.97 0 0 1 12 7q.424 0 .713.287Q13 7.576 13 8t-.287.713A.97.97 0 0 1 12 9a.97.97 0 0 1-.713-.287A.97.97 0 0 1 11 8q0-.424.287-.713m.001 4.001A.97.97 0 0 1 12 11q.424 0 .713.287.287.288.287.713v4q0 .424-.287.712A.97.97 0 0 1 12 17a.97.97 0 0 1-.713-.288A.97.97 0 0 1 11 16v-4q0-.424.287-.713"
    }), /* @__PURE__ */ Ce.jsx("path", {
      fillRule: "evenodd",
      d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0",
      clipRule: "evenodd"
    })]
  });
}
gm.displayName = "InfoIcon";
const Cg = Vn(gm), Zx = "_banner_48r66_20", Hx = "_content_48r66_51", Kx = "_icon_48r66_63", Jx = "_actions_48r66_83", Ca = {
  banner: Zx,
  content: Hx,
  icon: Kx,
  actions: Jx
};
function Vx(n) {
  return n.toLowerCase().replace("_", "-");
}
function U7(n) {
  const r = [], i = Vx(n), a = i.split("-");
  return a.length === 2 && a[0] === a[1] ? r.push(a[0]) : (r.push(i), a.length === 2 && r.push(a[0])), r;
}
const Xx = "|";
var dc, Dg;
function Qx() {
  if (Dg) return dc;
  Dg = 1;
  var n = Object.prototype.hasOwnProperty, r = Object.prototype.toString, i = Object.defineProperty, a = Object.getOwnPropertyDescriptor, u = function(g) {
    return typeof Array.isArray == "function" ? Array.isArray(g) : r.call(g) === "[object Array]";
  }, c = function(g) {
    if (!g || r.call(g) !== "[object Object]")
      return !1;
    var v = n.call(g, "constructor"), m = g.constructor && g.constructor.prototype && n.call(g.constructor.prototype, "isPrototypeOf");
    if (g.constructor && !v && !m)
      return !1;
    var w;
    for (w in g)
      ;
    return typeof w > "u" || n.call(g, w);
  }, f = function(g, v) {
    i && v.name === "__proto__" ? i(g, v.name, {
      enumerable: !0,
      configurable: !0,
      value: v.newValue,
      writable: !0
    }) : g[v.name] = v.newValue;
  }, p = function(g, v) {
    if (v === "__proto__")
      if (n.call(g, v)) {
        if (a)
          return a(g, v).value;
      } else return;
    return g[v];
  };
  return dc = function h() {
    var g, v, m, w, P, I, M = arguments[0], W = 1, A = arguments.length, R = !1;
    for (typeof M == "boolean" && (R = M, M = arguments[1] || {}, W = 2), (M == null || typeof M != "object" && typeof M != "function") && (M = {}); W < A; ++W)
      if (g = arguments[W], g != null)
        for (v in g)
          m = p(M, v), w = p(g, v), M !== w && (R && w && (c(w) || (P = u(w))) ? (P ? (P = !1, I = m && u(m) ? m : []) : I = m && c(m) ? m : {}, f(M, { name: v, newValue: h(R, I, w) })) : typeof w < "u" && f(M, { name: v, newValue: w }));
    return M;
  }, dc;
}
var gc = {}, yc = {}, mc, Ng;
function ym() {
  return Ng || (Ng = 1, mc = function() {
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
  }), mc;
}
var vc, Fg;
function Mu() {
  if (Fg) return vc;
  Fg = 1;
  var n = ym();
  return vc = function() {
    return n() && !!Symbol.toStringTag;
  }, vc;
}
var _c, Lg;
function mm() {
  return Lg || (Lg = 1, _c = Object), _c;
}
var wc, Bg;
function eM() {
  return Bg || (Bg = 1, wc = Error), wc;
}
var bc, qg;
function nM() {
  return qg || (qg = 1, bc = EvalError), bc;
}
var Ec, kg;
function tM() {
  return kg || (kg = 1, Ec = RangeError), Ec;
}
var Ac, Ug;
function rM() {
  return Ug || (Ug = 1, Ac = ReferenceError), Ac;
}
var Sc, jg;
function vm() {
  return jg || (jg = 1, Sc = SyntaxError), Sc;
}
var Ic, $g;
function ko() {
  return $g || ($g = 1, Ic = TypeError), Ic;
}
var Tc, Wg;
function iM() {
  return Wg || (Wg = 1, Tc = URIError), Tc;
}
var Oc, Yg;
function oM() {
  return Yg || (Yg = 1, Oc = Math.abs), Oc;
}
var Rc, zg;
function aM() {
  return zg || (zg = 1, Rc = Math.floor), Rc;
}
var xc, Gg;
function uM() {
  return Gg || (Gg = 1, xc = Math.max), xc;
}
var Mc, Zg;
function sM() {
  return Zg || (Zg = 1, Mc = Math.min), Mc;
}
var Pc, Hg;
function cM() {
  return Hg || (Hg = 1, Pc = Math.pow), Pc;
}
var Cc, Kg;
function fM() {
  return Kg || (Kg = 1, Cc = Math.round), Cc;
}
var Dc, Jg;
function lM() {
  return Jg || (Jg = 1, Dc = Number.isNaN || function(r) {
    return r !== r;
  }), Dc;
}
var Nc, Vg;
function pM() {
  if (Vg) return Nc;
  Vg = 1;
  var n = /* @__PURE__ */ lM();
  return Nc = function(i) {
    return n(i) || i === 0 ? i : i < 0 ? -1 : 1;
  }, Nc;
}
var Fc, Xg;
function hM() {
  return Xg || (Xg = 1, Fc = Object.getOwnPropertyDescriptor), Fc;
}
var Lc, Qg;
function qi() {
  if (Qg) return Lc;
  Qg = 1;
  var n = /* @__PURE__ */ hM();
  if (n)
    try {
      n([], "length");
    } catch {
      n = null;
    }
  return Lc = n, Lc;
}
var Bc, e1;
function Pu() {
  if (e1) return Bc;
  e1 = 1;
  var n = Object.defineProperty || !1;
  if (n)
    try {
      n({}, "a", { value: 1 });
    } catch {
      n = !1;
    }
  return Bc = n, Bc;
}
var qc, n1;
function dM() {
  if (n1) return qc;
  n1 = 1;
  var n = typeof Symbol < "u" && Symbol, r = ym();
  return qc = function() {
    return typeof n != "function" || typeof Symbol != "function" || typeof n("foo") != "symbol" || typeof /* @__PURE__ */ Symbol("bar") != "symbol" ? !1 : r();
  }, qc;
}
var kc, t1;
function _m() {
  return t1 || (t1 = 1, kc = typeof Reflect < "u" && Reflect.getPrototypeOf || null), kc;
}
var Uc, r1;
function wm() {
  if (r1) return Uc;
  r1 = 1;
  var n = /* @__PURE__ */ mm();
  return Uc = n.getPrototypeOf || null, Uc;
}
var jc, i1;
function gM() {
  if (i1) return jc;
  i1 = 1;
  var n = "Function.prototype.bind called on incompatible ", r = Object.prototype.toString, i = Math.max, a = "[object Function]", u = function(h, g) {
    for (var v = [], m = 0; m < h.length; m += 1)
      v[m] = h[m];
    for (var w = 0; w < g.length; w += 1)
      v[w + h.length] = g[w];
    return v;
  }, c = function(h, g) {
    for (var v = [], m = g, w = 0; m < h.length; m += 1, w += 1)
      v[w] = h[m];
    return v;
  }, f = function(p, h) {
    for (var g = "", v = 0; v < p.length; v += 1)
      g += p[v], v + 1 < p.length && (g += h);
    return g;
  };
  return jc = function(h) {
    var g = this;
    if (typeof g != "function" || r.apply(g) !== a)
      throw new TypeError(n + g);
    for (var v = c(arguments, 1), m, w = function() {
      if (this instanceof m) {
        var A = g.apply(
          this,
          u(v, arguments)
        );
        return Object(A) === A ? A : this;
      }
      return g.apply(
        h,
        u(v, arguments)
      );
    }, P = i(0, g.length - v.length), I = [], M = 0; M < P; M++)
      I[M] = "$" + M;
    if (m = Function("binder", "return function (" + f(I, ",") + "){ return binder.apply(this,arguments); }")(w), g.prototype) {
      var W = function() {
      };
      W.prototype = g.prototype, m.prototype = new W(), W.prototype = null;
    }
    return m;
  }, jc;
}
var $c, o1;
function Uo() {
  if (o1) return $c;
  o1 = 1;
  var n = gM();
  return $c = Function.prototype.bind || n, $c;
}
var Wc, a1;
function mp() {
  return a1 || (a1 = 1, Wc = Function.prototype.call), Wc;
}
var Yc, u1;
function vp() {
  return u1 || (u1 = 1, Yc = Function.prototype.apply), Yc;
}
var zc, s1;
function yM() {
  return s1 || (s1 = 1, zc = typeof Reflect < "u" && Reflect && Reflect.apply), zc;
}
var Gc, c1;
function bm() {
  if (c1) return Gc;
  c1 = 1;
  var n = Uo(), r = vp(), i = mp(), a = yM();
  return Gc = a || n.call(i, r), Gc;
}
var Zc, f1;
function _p() {
  if (f1) return Zc;
  f1 = 1;
  var n = Uo(), r = /* @__PURE__ */ ko(), i = mp(), a = bm();
  return Zc = function(c) {
    if (c.length < 1 || typeof c[0] != "function")
      throw new r("a function is required");
    return a(n, i, c);
  }, Zc;
}
var Hc, l1;
function mM() {
  if (l1) return Hc;
  l1 = 1;
  var n = _p(), r = /* @__PURE__ */ qi(), i;
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
  return Hc = a && typeof a.get == "function" ? n([a.get]) : typeof c == "function" ? (
    /** @type {import('./get')} */
    function(p) {
      return c(p == null ? p : u(p));
    }
  ) : !1, Hc;
}
var Kc, p1;
function wp() {
  if (p1) return Kc;
  p1 = 1;
  var n = _m(), r = wm(), i = /* @__PURE__ */ mM();
  return Kc = n ? function(u) {
    return n(u);
  } : r ? function(u) {
    if (!u || typeof u != "object" && typeof u != "function")
      throw new TypeError("getProto: not an object");
    return r(u);
  } : i ? function(u) {
    return i(u);
  } : null, Kc;
}
var Jc, h1;
function Em() {
  if (h1) return Jc;
  h1 = 1;
  var n = Function.prototype.call, r = Object.prototype.hasOwnProperty, i = Uo();
  return Jc = i.call(n, r), Jc;
}
var Vc, d1;
function Am() {
  if (d1) return Vc;
  d1 = 1;
  var n, r = /* @__PURE__ */ mm(), i = /* @__PURE__ */ eM(), a = /* @__PURE__ */ nM(), u = /* @__PURE__ */ tM(), c = /* @__PURE__ */ rM(), f = /* @__PURE__ */ vm(), p = /* @__PURE__ */ ko(), h = /* @__PURE__ */ iM(), g = /* @__PURE__ */ oM(), v = /* @__PURE__ */ aM(), m = /* @__PURE__ */ uM(), w = /* @__PURE__ */ sM(), P = /* @__PURE__ */ cM(), I = /* @__PURE__ */ fM(), M = /* @__PURE__ */ pM(), W = Function, A = function(ee) {
    try {
      return W('"use strict"; return (' + ee + ").constructor;")();
    } catch {
    }
  }, R = /* @__PURE__ */ qi(), L = /* @__PURE__ */ Pu(), S = function() {
    throw new p();
  }, x = R ? (function() {
    try {
      return arguments.callee, S;
    } catch {
      try {
        return R(arguments, "callee").get;
      } catch {
        return S;
      }
    }
  })() : S, N = dM()(), k = wp(), G = wm(), H = _m(), V = vp(), le = mp(), we = {}, Fe = typeof Uint8Array > "u" || !k ? n : k(Uint8Array), je = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? n : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? n : ArrayBuffer,
    "%ArrayIteratorPrototype%": N && k ? k([][Symbol.iterator]()) : n,
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
    "%Function%": W,
    "%GeneratorFunction%": we,
    "%Int8Array%": typeof Int8Array > "u" ? n : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? n : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? n : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": N && k ? k(k([][Symbol.iterator]())) : n,
    "%JSON%": typeof JSON == "object" ? JSON : n,
    "%Map%": typeof Map > "u" ? n : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !N || !k ? n : k((/* @__PURE__ */ new Map())[Symbol.iterator]()),
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
    "%SetIteratorPrototype%": typeof Set > "u" || !N || !k ? n : k((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? n : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": N && k ? k(""[Symbol.iterator]()) : n,
    "%Symbol%": N ? Symbol : n,
    "%SyntaxError%": f,
    "%ThrowTypeError%": x,
    "%TypedArray%": Fe,
    "%TypeError%": p,
    "%Uint8Array%": typeof Uint8Array > "u" ? n : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? n : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? n : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? n : Uint32Array,
    "%URIError%": h,
    "%WeakMap%": typeof WeakMap > "u" ? n : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? n : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? n : WeakSet,
    "%Function.prototype.call%": le,
    "%Function.prototype.apply%": V,
    "%Object.defineProperty%": L,
    "%Object.getPrototypeOf%": G,
    "%Math.abs%": g,
    "%Math.floor%": v,
    "%Math.max%": m,
    "%Math.min%": w,
    "%Math.pow%": P,
    "%Math.round%": I,
    "%Math.sign%": M,
    "%Reflect.getPrototypeOf%": H
  };
  if (k)
    try {
      null.error;
    } catch (ee) {
      var hn = k(k(ee));
      je["%Error.prototype%"] = hn;
    }
  var Sn = function ee(X) {
    var ve;
    if (X === "%AsyncFunction%")
      ve = A("async function () {}");
    else if (X === "%GeneratorFunction%")
      ve = A("function* () {}");
    else if (X === "%AsyncGeneratorFunction%")
      ve = A("async function* () {}");
    else if (X === "%AsyncGenerator%") {
      var _e = ee("%AsyncGeneratorFunction%");
      _e && (ve = _e.prototype);
    } else if (X === "%AsyncIteratorPrototype%") {
      var Me = ee("%AsyncGenerator%");
      Me && k && (ve = k(Me.prototype));
    }
    return je[X] = ve, ve;
  }, Xn = {
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
  }, Le = Uo(), Oe = /* @__PURE__ */ Em(), In = Le.call(le, Array.prototype.concat), U = Le.call(V, Array.prototype.splice), E = Le.call(le, String.prototype.replace), D = Le.call(le, String.prototype.slice), j = Le.call(le, RegExp.prototype.exec), re = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, ue = /\\(\\)?/g, Q = function(X) {
    var ve = D(X, 0, 1), _e = D(X, -1);
    if (ve === "%" && _e !== "%")
      throw new f("invalid intrinsic syntax, expected closing `%`");
    if (_e === "%" && ve !== "%")
      throw new f("invalid intrinsic syntax, expected opening `%`");
    var Me = [];
    return E(X, re, function(ze, Be, qe, Ht) {
      Me[Me.length] = qe ? E(Ht, ue, "$1") : Be || ze;
    }), Me;
  }, oe = function(X, ve) {
    var _e = X, Me;
    if (Oe(Xn, _e) && (Me = Xn[_e], _e = "%" + Me[0] + "%"), Oe(je, _e)) {
      var ze = je[_e];
      if (ze === we && (ze = Sn(_e)), typeof ze > "u" && !ve)
        throw new p("intrinsic " + X + " exists, but is not available. Please file an issue!");
      return {
        alias: Me,
        name: _e,
        value: ze
      };
    }
    throw new f("intrinsic " + X + " does not exist!");
  };
  return Vc = function(X, ve) {
    if (typeof X != "string" || X.length === 0)
      throw new p("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof ve != "boolean")
      throw new p('"allowMissing" argument must be a boolean');
    if (j(/^%?[^%]*%?$/, X) === null)
      throw new f("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var _e = Q(X), Me = _e.length > 0 ? _e[0] : "", ze = oe("%" + Me + "%", ve), Be = ze.name, qe = ze.value, Ht = !1, sn = ze.alias;
    sn && (Me = sn[0], U(_e, In([0, 1], sn)));
    for (var $ = 1, Tt = !0; $ < _e.length; $ += 1) {
      var en = _e[$], nn = D(en, 0, 1), pt = D(en, -1);
      if ((nn === '"' || nn === "'" || nn === "`" || pt === '"' || pt === "'" || pt === "`") && nn !== pt)
        throw new f("property names with quotes must have matching quotes");
      if ((en === "constructor" || !Tt) && (Ht = !0), Me += "." + en, Be = "%" + Me + "%", Oe(je, Be))
        qe = je[Be];
      else if (qe != null) {
        if (!(en in qe)) {
          if (!ve)
            throw new p("base intrinsic for " + X + " exists, but the property is not available.");
          return;
        }
        if (R && $ + 1 >= _e.length) {
          var Ot = R(qe, en);
          Tt = !!Ot, Tt && "get" in Ot && !("originalValue" in Ot.get) ? qe = Ot.get : qe = qe[en];
        } else
          Tt = Oe(qe, en), qe = qe[en];
        Tt && !Ht && (je[Be] = qe);
      }
    }
    return qe;
  }, Vc;
}
var Xc, g1;
function jo() {
  if (g1) return Xc;
  g1 = 1;
  var n = /* @__PURE__ */ Am(), r = _p(), i = r([n("%String.prototype.indexOf%")]);
  return Xc = function(u, c) {
    var f = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      n(u, !!c)
    );
    return typeof f == "function" && i(u, ".prototype.") > -1 ? r(
      /** @type {const} */
      [f]
    ) : f;
  }, Xc;
}
var Qc, y1;
function vM() {
  if (y1) return Qc;
  y1 = 1;
  var n = Mu()(), r = /* @__PURE__ */ jo(), i = r("Object.prototype.toString"), a = function(p) {
    return n && p && typeof p == "object" && Symbol.toStringTag in p ? !1 : i(p) === "[object Arguments]";
  }, u = function(p) {
    return a(p) ? !0 : p !== null && typeof p == "object" && "length" in p && typeof p.length == "number" && p.length >= 0 && i(p) !== "[object Array]" && "callee" in p && i(p.callee) === "[object Function]";
  }, c = (function() {
    return a(arguments);
  })();
  return a.isLegacyArguments = u, Qc = c ? a : u, Qc;
}
var ef, m1;
function _M() {
  if (m1) return ef;
  m1 = 1;
  var n = /* @__PURE__ */ jo(), r = Mu()(), i = /* @__PURE__ */ Em(), a = /* @__PURE__ */ qi(), u;
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
      ), I = P && i(P, "value");
      if (!I)
        return !1;
      try {
        c(
          w,
          /** @type {string} */
          /** @type {unknown} */
          h
        );
      } catch (M) {
        return M === f;
      }
    };
  } else {
    var g = n("Object.prototype.toString"), v = "[object RegExp]";
    u = function(w) {
      return !w || typeof w != "object" && typeof w != "function" ? !1 : g(w) === v;
    };
  }
  return ef = u, ef;
}
var nf, v1;
function wM() {
  if (v1) return nf;
  v1 = 1;
  var n = /* @__PURE__ */ jo(), r = _M(), i = n("RegExp.prototype.exec"), a = /* @__PURE__ */ ko();
  return nf = function(c) {
    if (!r(c))
      throw new a("`regex` must be a RegExp");
    return function(p) {
      return i(c, p) !== null;
    };
  }, nf;
}
var tf, _1;
function bM() {
  if (_1) return tf;
  _1 = 1;
  const n = (
    /** @type {GeneratorFunctionConstructor} */
    (function* () {
    }).constructor
  );
  return tf = () => n, tf;
}
var rf, w1;
function EM() {
  if (w1) return rf;
  w1 = 1;
  var n = /* @__PURE__ */ jo(), r = /* @__PURE__ */ wM(), i = r(/^\s*(?:function)?\*/), a = Mu()(), u = wp(), c = n("Object.prototype.toString"), f = n("Function.prototype.toString"), p = /* @__PURE__ */ bM();
  return rf = function(g) {
    if (typeof g != "function")
      return !1;
    if (i(f(g)))
      return !0;
    if (!a) {
      var v = c(g);
      return v === "[object GeneratorFunction]";
    }
    if (!u)
      return !1;
    var m = p();
    return m && u(g) === m.prototype;
  }, rf;
}
var of, b1;
function AM() {
  if (b1) return of;
  b1 = 1;
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
  var u = /^\s*class\b/, c = function(L) {
    try {
      var S = n.call(L);
      return u.test(S);
    } catch {
      return !1;
    }
  }, f = function(L) {
    try {
      return c(L) ? !1 : (n.call(L), !0);
    } catch {
      return !1;
    }
  }, p = Object.prototype.toString, h = "[object Object]", g = "[object Function]", v = "[object GeneratorFunction]", m = "[object HTMLAllCollection]", w = "[object HTML document.all class]", P = "[object HTMLCollection]", I = typeof Symbol == "function" && !!Symbol.toStringTag, M = !(0 in [,]), W = function() {
    return !1;
  };
  if (typeof document == "object") {
    var A = document.all;
    p.call(A) === p.call(document.all) && (W = function(L) {
      if ((M || !L) && (typeof L > "u" || typeof L == "object"))
        try {
          var S = p.call(L);
          return (S === m || S === w || S === P || S === h) && L("") == null;
        } catch {
        }
      return !1;
    });
  }
  return of = r ? function(L) {
    if (W(L))
      return !0;
    if (!L || typeof L != "function" && typeof L != "object")
      return !1;
    try {
      r(L, null, i);
    } catch (S) {
      if (S !== a)
        return !1;
    }
    return !c(L) && f(L);
  } : function(L) {
    if (W(L))
      return !0;
    if (!L || typeof L != "function" && typeof L != "object")
      return !1;
    if (I)
      return f(L);
    if (c(L))
      return !1;
    var S = p.call(L);
    return S !== g && S !== v && !/^\[object HTML/.test(S) ? !1 : f(L);
  }, of;
}
var af, E1;
function SM() {
  if (E1) return af;
  E1 = 1;
  var n = AM(), r = Object.prototype.toString, i = Object.prototype.hasOwnProperty, a = function(h, g, v) {
    for (var m = 0, w = h.length; m < w; m++)
      i.call(h, m) && (v == null ? g(h[m], m, h) : g.call(v, h[m], m, h));
  }, u = function(h, g, v) {
    for (var m = 0, w = h.length; m < w; m++)
      v == null ? g(h.charAt(m), m, h) : g.call(v, h.charAt(m), m, h);
  }, c = function(h, g, v) {
    for (var m in h)
      i.call(h, m) && (v == null ? g(h[m], m, h) : g.call(v, h[m], m, h));
  };
  function f(p) {
    return r.call(p) === "[object Array]";
  }
  return af = function(h, g, v) {
    if (!n(g))
      throw new TypeError("iterator must be a function");
    var m;
    arguments.length >= 3 && (m = v), f(h) ? a(h, g, m) : typeof h == "string" ? u(h, g, m) : c(h, g, m);
  }, af;
}
var uf, A1;
function IM() {
  return A1 || (A1 = 1, uf = [
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
  ]), uf;
}
var sf, S1;
function TM() {
  if (S1) return sf;
  S1 = 1;
  var n = /* @__PURE__ */ IM(), r = typeof globalThis > "u" ? mi : globalThis;
  return sf = function() {
    for (var a = [], u = 0; u < n.length; u++)
      typeof r[n[u]] == "function" && (a[a.length] = n[u]);
    return a;
  }, sf;
}
var cf = { exports: {} }, ff, I1;
function OM() {
  if (I1) return ff;
  I1 = 1;
  var n = /* @__PURE__ */ Pu(), r = /* @__PURE__ */ vm(), i = /* @__PURE__ */ ko(), a = /* @__PURE__ */ qi();
  return ff = function(c, f, p) {
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
    var h = arguments.length > 3 ? arguments[3] : null, g = arguments.length > 4 ? arguments[4] : null, v = arguments.length > 5 ? arguments[5] : null, m = arguments.length > 6 ? arguments[6] : !1, w = !!a && a(c, f);
    if (n)
      n(c, f, {
        configurable: v === null && w ? w.configurable : !v,
        enumerable: h === null && w ? w.enumerable : !h,
        value: p,
        writable: g === null && w ? w.writable : !g
      });
    else if (m || !h && !g && !v)
      c[f] = p;
    else
      throw new r("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
  }, ff;
}
var lf, T1;
function RM() {
  if (T1) return lf;
  T1 = 1;
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
  }, lf = r, lf;
}
var pf, O1;
function xM() {
  if (O1) return pf;
  O1 = 1;
  var n = /* @__PURE__ */ Am(), r = /* @__PURE__ */ OM(), i = /* @__PURE__ */ RM()(), a = /* @__PURE__ */ qi(), u = /* @__PURE__ */ ko(), c = n("%Math.floor%");
  return pf = function(p, h) {
    if (typeof p != "function")
      throw new u("`fn` is not a function");
    if (typeof h != "number" || h < 0 || h > 4294967295 || c(h) !== h)
      throw new u("`length` must be a positive 32-bit integer");
    var g = arguments.length > 2 && !!arguments[2], v = !0, m = !0;
    if ("length" in p && a) {
      var w = a(p, "length");
      w && !w.configurable && (v = !1), w && !w.writable && (m = !1);
    }
    return (v || m || !g) && (i ? r(
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
  }, pf;
}
var hf, R1;
function MM() {
  if (R1) return hf;
  R1 = 1;
  var n = Uo(), r = vp(), i = bm();
  return hf = function() {
    return i(n, r, arguments);
  }, hf;
}
var x1;
function PM() {
  return x1 || (x1 = 1, (function(n) {
    var r = /* @__PURE__ */ xM(), i = /* @__PURE__ */ Pu(), a = _p(), u = MM();
    n.exports = function(f) {
      var p = a(arguments), h = 1 + f.length - (arguments.length - 1);
      return r(
        p,
        h > 0 ? h : 0,
        !0
      );
    }, i ? i(n.exports, "apply", { value: u }) : n.exports.apply = u;
  })(cf)), cf.exports;
}
var df, M1;
function Sm() {
  if (M1) return df;
  M1 = 1;
  var n = SM(), r = /* @__PURE__ */ TM(), i = PM(), a = /* @__PURE__ */ jo(), u = /* @__PURE__ */ qi(), c = wp(), f = a("Object.prototype.toString"), p = Mu()(), h = typeof globalThis > "u" ? mi : globalThis, g = r(), v = a("String.prototype.slice"), m = a("Array.prototype.indexOf", !0) || function(W, A) {
    for (var R = 0; R < W.length; R += 1)
      if (W[R] === A)
        return R;
    return -1;
  }, w = { __proto__: null };
  p && u && c ? n(g, function(M) {
    var W = new h[M]();
    if (Symbol.toStringTag in W && c) {
      var A = c(W), R = u(A, Symbol.toStringTag);
      if (!R && A) {
        var L = c(A);
        R = u(L, Symbol.toStringTag);
      }
      if (R && R.get) {
        var S = i(R.get);
        w[
          /** @type {`$${import('.').TypedArrayName}`} */
          "$" + M
        ] = S;
      }
    }
  }) : n(g, function(M) {
    var W = new h[M](), A = W.slice || W.set;
    if (A) {
      var R = (
        /** @type {import('./types').BoundSlice | import('./types').BoundSet} */
        // @ts-expect-error TODO FIXME
        i(A)
      );
      w[
        /** @type {`$${import('.').TypedArrayName}`} */
        "$" + M
      ] = R;
    }
  });
  var P = function(W) {
    var A = !1;
    return n(
      /** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */
      w,
      /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
      function(R, L) {
        if (!A)
          try {
            "$" + R(W) === L && (A = /** @type {import('.').TypedArrayName} */
            v(L, 1));
          } catch {
          }
      }
    ), A;
  }, I = function(W) {
    var A = !1;
    return n(
      /** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */
      w,
      /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
      function(R, L) {
        if (!A)
          try {
            R(W), A = /** @type {import('.').TypedArrayName} */
            v(L, 1);
          } catch {
          }
      }
    ), A;
  };
  return df = function(W) {
    if (!W || typeof W != "object")
      return !1;
    if (!p) {
      var A = v(f(W), 8, -1);
      return m(g, A) > -1 ? A : A !== "Object" ? !1 : I(W);
    }
    return u ? P(W) : null;
  }, df;
}
var gf, P1;
function CM() {
  if (P1) return gf;
  P1 = 1;
  var n = /* @__PURE__ */ Sm();
  return gf = function(i) {
    return !!n(i);
  }, gf;
}
var C1;
function DM() {
  return C1 || (C1 = 1, (function(n) {
    var r = /* @__PURE__ */ vM(), i = EM(), a = /* @__PURE__ */ Sm(), u = /* @__PURE__ */ CM();
    function c($) {
      return $.call.bind($);
    }
    var f = typeof BigInt < "u", p = typeof Symbol < "u", h = c(Object.prototype.toString), g = c(Number.prototype.valueOf), v = c(String.prototype.valueOf), m = c(Boolean.prototype.valueOf);
    if (f)
      var w = c(BigInt.prototype.valueOf);
    if (p)
      var P = c(Symbol.prototype.valueOf);
    function I($, Tt) {
      if (typeof $ != "object")
        return !1;
      try {
        return Tt($), !0;
      } catch {
        return !1;
      }
    }
    n.isArgumentsObject = r, n.isGeneratorFunction = i, n.isTypedArray = u;
    function M($) {
      return typeof Promise < "u" && $ instanceof Promise || $ !== null && typeof $ == "object" && typeof $.then == "function" && typeof $.catch == "function";
    }
    n.isPromise = M;
    function W($) {
      return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView($) : u($) || D($);
    }
    n.isArrayBufferView = W;
    function A($) {
      return a($) === "Uint8Array";
    }
    n.isUint8Array = A;
    function R($) {
      return a($) === "Uint8ClampedArray";
    }
    n.isUint8ClampedArray = R;
    function L($) {
      return a($) === "Uint16Array";
    }
    n.isUint16Array = L;
    function S($) {
      return a($) === "Uint32Array";
    }
    n.isUint32Array = S;
    function x($) {
      return a($) === "Int8Array";
    }
    n.isInt8Array = x;
    function N($) {
      return a($) === "Int16Array";
    }
    n.isInt16Array = N;
    function k($) {
      return a($) === "Int32Array";
    }
    n.isInt32Array = k;
    function G($) {
      return a($) === "Float32Array";
    }
    n.isFloat32Array = G;
    function H($) {
      return a($) === "Float64Array";
    }
    n.isFloat64Array = H;
    function V($) {
      return a($) === "BigInt64Array";
    }
    n.isBigInt64Array = V;
    function le($) {
      return a($) === "BigUint64Array";
    }
    n.isBigUint64Array = le;
    function we($) {
      return h($) === "[object Map]";
    }
    we.working = typeof Map < "u" && we(/* @__PURE__ */ new Map());
    function Fe($) {
      return typeof Map > "u" ? !1 : we.working ? we($) : $ instanceof Map;
    }
    n.isMap = Fe;
    function je($) {
      return h($) === "[object Set]";
    }
    je.working = typeof Set < "u" && je(/* @__PURE__ */ new Set());
    function hn($) {
      return typeof Set > "u" ? !1 : je.working ? je($) : $ instanceof Set;
    }
    n.isSet = hn;
    function Sn($) {
      return h($) === "[object WeakMap]";
    }
    Sn.working = typeof WeakMap < "u" && Sn(/* @__PURE__ */ new WeakMap());
    function Xn($) {
      return typeof WeakMap > "u" ? !1 : Sn.working ? Sn($) : $ instanceof WeakMap;
    }
    n.isWeakMap = Xn;
    function Le($) {
      return h($) === "[object WeakSet]";
    }
    Le.working = typeof WeakSet < "u" && Le(/* @__PURE__ */ new WeakSet());
    function Oe($) {
      return Le($);
    }
    n.isWeakSet = Oe;
    function In($) {
      return h($) === "[object ArrayBuffer]";
    }
    In.working = typeof ArrayBuffer < "u" && In(new ArrayBuffer());
    function U($) {
      return typeof ArrayBuffer > "u" ? !1 : In.working ? In($) : $ instanceof ArrayBuffer;
    }
    n.isArrayBuffer = U;
    function E($) {
      return h($) === "[object DataView]";
    }
    E.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && E(new DataView(new ArrayBuffer(1), 0, 1));
    function D($) {
      return typeof DataView > "u" ? !1 : E.working ? E($) : $ instanceof DataView;
    }
    n.isDataView = D;
    var j = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
    function re($) {
      return h($) === "[object SharedArrayBuffer]";
    }
    function ue($) {
      return typeof j > "u" ? !1 : (typeof re.working > "u" && (re.working = re(new j())), re.working ? re($) : $ instanceof j);
    }
    n.isSharedArrayBuffer = ue;
    function Q($) {
      return h($) === "[object AsyncFunction]";
    }
    n.isAsyncFunction = Q;
    function oe($) {
      return h($) === "[object Map Iterator]";
    }
    n.isMapIterator = oe;
    function ee($) {
      return h($) === "[object Set Iterator]";
    }
    n.isSetIterator = ee;
    function X($) {
      return h($) === "[object Generator]";
    }
    n.isGeneratorObject = X;
    function ve($) {
      return h($) === "[object WebAssembly.Module]";
    }
    n.isWebAssemblyCompiledModule = ve;
    function _e($) {
      return I($, g);
    }
    n.isNumberObject = _e;
    function Me($) {
      return I($, v);
    }
    n.isStringObject = Me;
    function ze($) {
      return I($, m);
    }
    n.isBooleanObject = ze;
    function Be($) {
      return f && I($, w);
    }
    n.isBigIntObject = Be;
    function qe($) {
      return p && I($, P);
    }
    n.isSymbolObject = qe;
    function Ht($) {
      return _e($) || Me($) || ze($) || Be($) || qe($);
    }
    n.isBoxedPrimitive = Ht;
    function sn($) {
      return typeof Uint8Array < "u" && (U($) || ue($));
    }
    n.isAnyArrayBuffer = sn, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function($) {
      Object.defineProperty(n, $, {
        enumerable: !1,
        value: function() {
          throw new Error($ + " is not supported in userland");
        }
      });
    });
  })(yc)), yc;
}
var yf, D1;
function NM() {
  return D1 || (D1 = 1, yf = function(r) {
    return r && typeof r == "object" && typeof r.copy == "function" && typeof r.fill == "function" && typeof r.readUInt8 == "function";
  }), yf;
}
var Da = { exports: {} }, N1;
function FM() {
  return N1 || (N1 = 1, typeof Object.create == "function" ? Da.exports = function(r, i) {
    i && (r.super_ = i, r.prototype = Object.create(i.prototype, {
      constructor: {
        value: r,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }));
  } : Da.exports = function(r, i) {
    if (i) {
      r.super_ = i;
      var a = function() {
      };
      a.prototype = i.prototype, r.prototype = new a(), r.prototype.constructor = r;
    }
  }), Da.exports;
}
var F1;
function L1() {
  return F1 || (F1 = 1, (function(n) {
    var r = Object.getOwnPropertyDescriptors || function(D) {
      for (var j = Object.keys(D), re = {}, ue = 0; ue < j.length; ue++)
        re[j[ue]] = Object.getOwnPropertyDescriptor(D, j[ue]);
      return re;
    }, i = /%[sdj%]/g;
    n.format = function(E) {
      if (!x(E)) {
        for (var D = [], j = 0; j < arguments.length; j++)
          D.push(f(arguments[j]));
        return D.join(" ");
      }
      for (var j = 1, re = arguments, ue = re.length, Q = String(E).replace(i, function(ee) {
        if (ee === "%%") return "%";
        if (j >= ue) return ee;
        switch (ee) {
          case "%s":
            return String(re[j++]);
          case "%d":
            return Number(re[j++]);
          case "%j":
            try {
              return JSON.stringify(re[j++]);
            } catch {
              return "[Circular]";
            }
          default:
            return ee;
        }
      }), oe = re[j]; j < ue; oe = re[++j])
        R(oe) || !H(oe) ? Q += " " + oe : Q += " " + f(oe);
      return Q;
    }, n.deprecate = function(E, D) {
      if (typeof process < "u" && process.noDeprecation === !0)
        return E;
      if (typeof process > "u")
        return function() {
          return n.deprecate(E, D).apply(this, arguments);
        };
      var j = !1;
      function re() {
        if (!j) {
          if (process.throwDeprecation)
            throw new Error(D);
          process.traceDeprecation ? console.trace(D) : console.error(D), j = !0;
        }
        return E.apply(this, arguments);
      }
      return re;
    };
    var a = {}, u = /^$/;
    if (process.env.NODE_DEBUG) {
      var c = process.env.NODE_DEBUG;
      c = c.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), u = new RegExp("^" + c + "$", "i");
    }
    n.debuglog = function(E) {
      if (E = E.toUpperCase(), !a[E])
        if (u.test(E)) {
          var D = process.pid;
          a[E] = function() {
            var j = n.format.apply(n, arguments);
            console.error("%s %d: %s", E, D, j);
          };
        } else
          a[E] = function() {
          };
      return a[E];
    };
    function f(E, D) {
      var j = {
        seen: [],
        stylize: h
      };
      return arguments.length >= 3 && (j.depth = arguments[2]), arguments.length >= 4 && (j.colors = arguments[3]), A(D) ? j.showHidden = D : D && n._extend(j, D), k(j.showHidden) && (j.showHidden = !1), k(j.depth) && (j.depth = 2), k(j.colors) && (j.colors = !1), k(j.customInspect) && (j.customInspect = !0), j.colors && (j.stylize = p), v(j, E, j.depth);
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
    function p(E, D) {
      var j = f.styles[D];
      return j ? "\x1B[" + f.colors[j][0] + "m" + E + "\x1B[" + f.colors[j][1] + "m" : E;
    }
    function h(E, D) {
      return E;
    }
    function g(E) {
      var D = {};
      return E.forEach(function(j, re) {
        D[j] = !0;
      }), D;
    }
    function v(E, D, j) {
      if (E.customInspect && D && we(D.inspect) && // Filter out the util module, it's inspect function is special
      D.inspect !== n.inspect && // Also filter out any prototype objects using the circular check.
      !(D.constructor && D.constructor.prototype === D)) {
        var re = D.inspect(j, E);
        return x(re) || (re = v(E, re, j)), re;
      }
      var ue = m(E, D);
      if (ue)
        return ue;
      var Q = Object.keys(D), oe = g(Q);
      if (E.showHidden && (Q = Object.getOwnPropertyNames(D)), le(D) && (Q.indexOf("message") >= 0 || Q.indexOf("description") >= 0))
        return w(D);
      if (Q.length === 0) {
        if (we(D)) {
          var ee = D.name ? ": " + D.name : "";
          return E.stylize("[Function" + ee + "]", "special");
        }
        if (G(D))
          return E.stylize(RegExp.prototype.toString.call(D), "regexp");
        if (V(D))
          return E.stylize(Date.prototype.toString.call(D), "date");
        if (le(D))
          return w(D);
      }
      var X = "", ve = !1, _e = ["{", "}"];
      if (W(D) && (ve = !0, _e = ["[", "]"]), we(D)) {
        var Me = D.name ? ": " + D.name : "";
        X = " [Function" + Me + "]";
      }
      if (G(D) && (X = " " + RegExp.prototype.toString.call(D)), V(D) && (X = " " + Date.prototype.toUTCString.call(D)), le(D) && (X = " " + w(D)), Q.length === 0 && (!ve || D.length == 0))
        return _e[0] + X + _e[1];
      if (j < 0)
        return G(D) ? E.stylize(RegExp.prototype.toString.call(D), "regexp") : E.stylize("[Object]", "special");
      E.seen.push(D);
      var ze;
      return ve ? ze = P(E, D, j, oe, Q) : ze = Q.map(function(Be) {
        return I(E, D, j, oe, Be, ve);
      }), E.seen.pop(), M(ze, X, _e);
    }
    function m(E, D) {
      if (k(D))
        return E.stylize("undefined", "undefined");
      if (x(D)) {
        var j = "'" + JSON.stringify(D).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return E.stylize(j, "string");
      }
      if (S(D))
        return E.stylize("" + D, "number");
      if (A(D))
        return E.stylize("" + D, "boolean");
      if (R(D))
        return E.stylize("null", "null");
    }
    function w(E) {
      return "[" + Error.prototype.toString.call(E) + "]";
    }
    function P(E, D, j, re, ue) {
      for (var Q = [], oe = 0, ee = D.length; oe < ee; ++oe)
        Le(D, String(oe)) ? Q.push(I(
          E,
          D,
          j,
          re,
          String(oe),
          !0
        )) : Q.push("");
      return ue.forEach(function(X) {
        X.match(/^\d+$/) || Q.push(I(
          E,
          D,
          j,
          re,
          X,
          !0
        ));
      }), Q;
    }
    function I(E, D, j, re, ue, Q) {
      var oe, ee, X;
      if (X = Object.getOwnPropertyDescriptor(D, ue) || { value: D[ue] }, X.get ? X.set ? ee = E.stylize("[Getter/Setter]", "special") : ee = E.stylize("[Getter]", "special") : X.set && (ee = E.stylize("[Setter]", "special")), Le(re, ue) || (oe = "[" + ue + "]"), ee || (E.seen.indexOf(X.value) < 0 ? (R(j) ? ee = v(E, X.value, null) : ee = v(E, X.value, j - 1), ee.indexOf(`
`) > -1 && (Q ? ee = ee.split(`
`).map(function(ve) {
        return "  " + ve;
      }).join(`
`).slice(2) : ee = `
` + ee.split(`
`).map(function(ve) {
        return "   " + ve;
      }).join(`
`))) : ee = E.stylize("[Circular]", "special")), k(oe)) {
        if (Q && ue.match(/^\d+$/))
          return ee;
        oe = JSON.stringify("" + ue), oe.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (oe = oe.slice(1, -1), oe = E.stylize(oe, "name")) : (oe = oe.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), oe = E.stylize(oe, "string"));
      }
      return oe + ": " + ee;
    }
    function M(E, D, j) {
      var re = E.reduce(function(ue, Q) {
        return Q.indexOf(`
`) >= 0, ue + Q.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }, 0);
      return re > 60 ? j[0] + (D === "" ? "" : D + `
 `) + " " + E.join(`,
  `) + " " + j[1] : j[0] + D + " " + E.join(", ") + " " + j[1];
    }
    n.types = DM();
    function W(E) {
      return Array.isArray(E);
    }
    n.isArray = W;
    function A(E) {
      return typeof E == "boolean";
    }
    n.isBoolean = A;
    function R(E) {
      return E === null;
    }
    n.isNull = R;
    function L(E) {
      return E == null;
    }
    n.isNullOrUndefined = L;
    function S(E) {
      return typeof E == "number";
    }
    n.isNumber = S;
    function x(E) {
      return typeof E == "string";
    }
    n.isString = x;
    function N(E) {
      return typeof E == "symbol";
    }
    n.isSymbol = N;
    function k(E) {
      return E === void 0;
    }
    n.isUndefined = k;
    function G(E) {
      return H(E) && je(E) === "[object RegExp]";
    }
    n.isRegExp = G, n.types.isRegExp = G;
    function H(E) {
      return typeof E == "object" && E !== null;
    }
    n.isObject = H;
    function V(E) {
      return H(E) && je(E) === "[object Date]";
    }
    n.isDate = V, n.types.isDate = V;
    function le(E) {
      return H(E) && (je(E) === "[object Error]" || E instanceof Error);
    }
    n.isError = le, n.types.isNativeError = le;
    function we(E) {
      return typeof E == "function";
    }
    n.isFunction = we;
    function Fe(E) {
      return E === null || typeof E == "boolean" || typeof E == "number" || typeof E == "string" || typeof E == "symbol" || // ES6 symbol
      typeof E > "u";
    }
    n.isPrimitive = Fe, n.isBuffer = NM();
    function je(E) {
      return Object.prototype.toString.call(E);
    }
    function hn(E) {
      return E < 10 ? "0" + E.toString(10) : E.toString(10);
    }
    var Sn = [
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
    function Xn() {
      var E = /* @__PURE__ */ new Date(), D = [
        hn(E.getHours()),
        hn(E.getMinutes()),
        hn(E.getSeconds())
      ].join(":");
      return [E.getDate(), Sn[E.getMonth()], D].join(" ");
    }
    n.log = function() {
      console.log("%s - %s", Xn(), n.format.apply(n, arguments));
    }, n.inherits = FM(), n._extend = function(E, D) {
      if (!D || !H(D)) return E;
      for (var j = Object.keys(D), re = j.length; re--; )
        E[j[re]] = D[j[re]];
      return E;
    };
    function Le(E, D) {
      return Object.prototype.hasOwnProperty.call(E, D);
    }
    var Oe = typeof Symbol < "u" ? /* @__PURE__ */ Symbol("util.promisify.custom") : void 0;
    n.promisify = function(D) {
      if (typeof D != "function")
        throw new TypeError('The "original" argument must be of type Function');
      if (Oe && D[Oe]) {
        var j = D[Oe];
        if (typeof j != "function")
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        return Object.defineProperty(j, Oe, {
          value: j,
          enumerable: !1,
          writable: !1,
          configurable: !0
        }), j;
      }
      function j() {
        for (var re, ue, Q = new Promise(function(X, ve) {
          re = X, ue = ve;
        }), oe = [], ee = 0; ee < arguments.length; ee++)
          oe.push(arguments[ee]);
        oe.push(function(X, ve) {
          X ? ue(X) : re(ve);
        });
        try {
          D.apply(this, oe);
        } catch (X) {
          ue(X);
        }
        return Q;
      }
      return Object.setPrototypeOf(j, Object.getPrototypeOf(D)), Oe && Object.defineProperty(j, Oe, {
        value: j,
        enumerable: !1,
        writable: !1,
        configurable: !0
      }), Object.defineProperties(
        j,
        r(D)
      );
    }, n.promisify.custom = Oe;
    function In(E, D) {
      if (!E) {
        var j = new Error("Promise was rejected with a falsy value");
        j.reason = E, E = j;
      }
      return D(E);
    }
    function U(E) {
      if (typeof E != "function")
        throw new TypeError('The "original" argument must be of type Function');
      function D() {
        for (var j = [], re = 0; re < arguments.length; re++)
          j.push(arguments[re]);
        var ue = j.pop();
        if (typeof ue != "function")
          throw new TypeError("The last argument must be of type Function");
        var Q = this, oe = function() {
          return ue.apply(Q, arguments);
        };
        E.apply(this, j).then(
          function(ee) {
            process.nextTick(oe.bind(null, null, ee));
          },
          function(ee) {
            process.nextTick(In.bind(null, ee, oe));
          }
        );
      }
      return Object.setPrototypeOf(D, Object.getPrototypeOf(E)), Object.defineProperties(
        D,
        r(E)
      ), D;
    }
    n.callbackify = U;
  })(gc)), gc;
}
var mf = {}, B1;
function LM() {
  return B1 || (B1 = 1, (function(n) {
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
        var g = 1, v = p.length, m, w = "", P, I, M, W, A, R, L, S;
        for (P = 0; P < v; P++)
          if (typeof p[P] == "string")
            w += p[P];
          else if (typeof p[P] == "object") {
            if (M = p[P], M.keys)
              for (m = h[g], I = 0; I < M.keys.length; I++) {
                if (m == null)
                  throw new Error(i('[sprintf] Cannot access property "%s" of undefined value "%s"', M.keys[I], M.keys[I - 1]));
                m = m[M.keys[I]];
              }
            else M.param_no ? m = h[M.param_no] : m = h[g++];
            if (r.not_type.test(M.type) && r.not_primitive.test(M.type) && m instanceof Function && (m = m()), r.numeric_arg.test(M.type) && typeof m != "number" && isNaN(m))
              throw new TypeError(i("[sprintf] expecting number but found %T", m));
            switch (r.number.test(M.type) && (L = m >= 0), M.type) {
              case "b":
                m = parseInt(m, 10).toString(2);
                break;
              case "c":
                m = String.fromCharCode(parseInt(m, 10));
                break;
              case "d":
              case "i":
                m = parseInt(m, 10);
                break;
              case "j":
                m = JSON.stringify(m, null, M.width ? parseInt(M.width) : 0);
                break;
              case "e":
                m = M.precision ? parseFloat(m).toExponential(M.precision) : parseFloat(m).toExponential();
                break;
              case "f":
                m = M.precision ? parseFloat(m).toFixed(M.precision) : parseFloat(m);
                break;
              case "g":
                m = M.precision ? String(Number(m.toPrecision(M.precision))) : parseFloat(m);
                break;
              case "o":
                m = (parseInt(m, 10) >>> 0).toString(8);
                break;
              case "s":
                m = String(m), m = M.precision ? m.substring(0, M.precision) : m;
                break;
              case "t":
                m = String(!!m), m = M.precision ? m.substring(0, M.precision) : m;
                break;
              case "T":
                m = Object.prototype.toString.call(m).slice(8, -1).toLowerCase(), m = M.precision ? m.substring(0, M.precision) : m;
                break;
              case "u":
                m = parseInt(m, 10) >>> 0;
                break;
              case "v":
                m = m.valueOf(), m = M.precision ? m.substring(0, M.precision) : m;
                break;
              case "x":
                m = (parseInt(m, 10) >>> 0).toString(16);
                break;
              case "X":
                m = (parseInt(m, 10) >>> 0).toString(16).toUpperCase();
                break;
            }
            r.json.test(M.type) ? w += m : (r.number.test(M.type) && (!L || M.sign) ? (S = L ? "+" : "-", m = m.toString().replace(r.sign, "")) : S = "", A = M.pad_char ? M.pad_char === "0" ? "0" : M.pad_char.charAt(1) : " ", R = M.width - (S + m).length, W = M.width && R > 0 ? A.repeat(R) : "", w += M.align ? S + m + W : A === "0" ? S + W + m : W + S + m);
          }
        return w;
      }
      var c = /* @__PURE__ */ Object.create(null);
      function f(p) {
        if (c[p])
          return c[p];
        for (var h = p, g, v = [], m = 0; h; ) {
          if ((g = r.text.exec(h)) !== null)
            v.push(g[0]);
          else if ((g = r.modulo.exec(h)) !== null)
            v.push("%");
          else if ((g = r.placeholder.exec(h)) !== null) {
            if (g[2]) {
              m |= 1;
              var w = [], P = g[2], I = [];
              if ((I = r.key.exec(P)) !== null)
                for (w.push(I[1]); (P = P.substring(I[0].length)) !== ""; )
                  if ((I = r.key_access.exec(P)) !== null)
                    w.push(I[1]);
                  else if ((I = r.index_access.exec(P)) !== null)
                    w.push(I[1]);
                  else
                    throw new SyntaxError("[sprintf] failed to parse named argument key");
              else
                throw new SyntaxError("[sprintf] failed to parse named argument key");
              g[2] = w;
            } else
              m |= 2;
            if (m === 3)
              throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
            v.push(
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
        return c[p] = v;
      }
      n.sprintf = i, n.vsprintf = a, typeof window < "u" && (window.sprintf = i, window.vsprintf = a);
    })();
  })(mf)), mf;
}
var Na = { exports: {} }, q1;
function BM() {
  if (q1) return Na.exports;
  q1 = 1;
  var n = typeof Reflect == "object" ? Reflect : null, r = n && typeof n.apply == "function" ? n.apply : function(x, N, k) {
    return Function.prototype.apply.call(x, N, k);
  }, i;
  n && typeof n.ownKeys == "function" ? i = n.ownKeys : Object.getOwnPropertySymbols ? i = function(x) {
    return Object.getOwnPropertyNames(x).concat(Object.getOwnPropertySymbols(x));
  } : i = function(x) {
    return Object.getOwnPropertyNames(x);
  };
  function a(S) {
    console && console.warn && console.warn(S);
  }
  var u = Number.isNaN || function(x) {
    return x !== x;
  };
  function c() {
    c.init.call(this);
  }
  Na.exports = c, Na.exports.once = A, c.EventEmitter = c, c.prototype._events = void 0, c.prototype._eventsCount = 0, c.prototype._maxListeners = void 0;
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
  }, c.prototype.setMaxListeners = function(x) {
    if (typeof x != "number" || x < 0 || u(x))
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + x + ".");
    return this._maxListeners = x, this;
  };
  function h(S) {
    return S._maxListeners === void 0 ? c.defaultMaxListeners : S._maxListeners;
  }
  c.prototype.getMaxListeners = function() {
    return h(this);
  }, c.prototype.emit = function(x) {
    for (var N = [], k = 1; k < arguments.length; k++) N.push(arguments[k]);
    var G = x === "error", H = this._events;
    if (H !== void 0)
      G = G && H.error === void 0;
    else if (!G)
      return !1;
    if (G) {
      var V;
      if (N.length > 0 && (V = N[0]), V instanceof Error)
        throw V;
      var le = new Error("Unhandled error." + (V ? " (" + V.message + ")" : ""));
      throw le.context = V, le;
    }
    var we = H[x];
    if (we === void 0)
      return !1;
    if (typeof we == "function")
      r(we, this, N);
    else
      for (var Fe = we.length, je = I(we, Fe), k = 0; k < Fe; ++k)
        r(je[k], this, N);
    return !0;
  };
  function g(S, x, N, k) {
    var G, H, V;
    if (p(N), H = S._events, H === void 0 ? (H = S._events = /* @__PURE__ */ Object.create(null), S._eventsCount = 0) : (H.newListener !== void 0 && (S.emit(
      "newListener",
      x,
      N.listener ? N.listener : N
    ), H = S._events), V = H[x]), V === void 0)
      V = H[x] = N, ++S._eventsCount;
    else if (typeof V == "function" ? V = H[x] = k ? [N, V] : [V, N] : k ? V.unshift(N) : V.push(N), G = h(S), G > 0 && V.length > G && !V.warned) {
      V.warned = !0;
      var le = new Error("Possible EventEmitter memory leak detected. " + V.length + " " + String(x) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      le.name = "MaxListenersExceededWarning", le.emitter = S, le.type = x, le.count = V.length, a(le);
    }
    return S;
  }
  c.prototype.addListener = function(x, N) {
    return g(this, x, N, !1);
  }, c.prototype.on = c.prototype.addListener, c.prototype.prependListener = function(x, N) {
    return g(this, x, N, !0);
  };
  function v() {
    if (!this.fired)
      return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  function m(S, x, N) {
    var k = { fired: !1, wrapFn: void 0, target: S, type: x, listener: N }, G = v.bind(k);
    return G.listener = N, k.wrapFn = G, G;
  }
  c.prototype.once = function(x, N) {
    return p(N), this.on(x, m(this, x, N)), this;
  }, c.prototype.prependOnceListener = function(x, N) {
    return p(N), this.prependListener(x, m(this, x, N)), this;
  }, c.prototype.removeListener = function(x, N) {
    var k, G, H, V, le;
    if (p(N), G = this._events, G === void 0)
      return this;
    if (k = G[x], k === void 0)
      return this;
    if (k === N || k.listener === N)
      --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete G[x], G.removeListener && this.emit("removeListener", x, k.listener || N));
    else if (typeof k != "function") {
      for (H = -1, V = k.length - 1; V >= 0; V--)
        if (k[V] === N || k[V].listener === N) {
          le = k[V].listener, H = V;
          break;
        }
      if (H < 0)
        return this;
      H === 0 ? k.shift() : M(k, H), k.length === 1 && (G[x] = k[0]), G.removeListener !== void 0 && this.emit("removeListener", x, le || N);
    }
    return this;
  }, c.prototype.off = c.prototype.removeListener, c.prototype.removeAllListeners = function(x) {
    var N, k, G;
    if (k = this._events, k === void 0)
      return this;
    if (k.removeListener === void 0)
      return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : k[x] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete k[x]), this;
    if (arguments.length === 0) {
      var H = Object.keys(k), V;
      for (G = 0; G < H.length; ++G)
        V = H[G], V !== "removeListener" && this.removeAllListeners(V);
      return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
    }
    if (N = k[x], typeof N == "function")
      this.removeListener(x, N);
    else if (N !== void 0)
      for (G = N.length - 1; G >= 0; G--)
        this.removeListener(x, N[G]);
    return this;
  };
  function w(S, x, N) {
    var k = S._events;
    if (k === void 0)
      return [];
    var G = k[x];
    return G === void 0 ? [] : typeof G == "function" ? N ? [G.listener || G] : [G] : N ? W(G) : I(G, G.length);
  }
  c.prototype.listeners = function(x) {
    return w(this, x, !0);
  }, c.prototype.rawListeners = function(x) {
    return w(this, x, !1);
  }, c.listenerCount = function(S, x) {
    return typeof S.listenerCount == "function" ? S.listenerCount(x) : P.call(S, x);
  }, c.prototype.listenerCount = P;
  function P(S) {
    var x = this._events;
    if (x !== void 0) {
      var N = x[S];
      if (typeof N == "function")
        return 1;
      if (N !== void 0)
        return N.length;
    }
    return 0;
  }
  c.prototype.eventNames = function() {
    return this._eventsCount > 0 ? i(this._events) : [];
  };
  function I(S, x) {
    for (var N = new Array(x), k = 0; k < x; ++k)
      N[k] = S[k];
    return N;
  }
  function M(S, x) {
    for (; x + 1 < S.length; x++)
      S[x] = S[x + 1];
    S.pop();
  }
  function W(S) {
    for (var x = new Array(S.length), N = 0; N < x.length; ++N)
      x[N] = S[N].listener || S[N];
    return x;
  }
  function A(S, x) {
    return new Promise(function(N, k) {
      function G(V) {
        S.removeListener(x, H), k(V);
      }
      function H() {
        typeof S.removeListener == "function" && S.removeListener("error", G), N([].slice.call(arguments));
      }
      L(S, x, H, { once: !0 }), x !== "error" && R(S, G, { once: !0 });
    });
  }
  function R(S, x, N) {
    typeof S.on == "function" && L(S, "error", x, N);
  }
  function L(S, x, N, k) {
    if (typeof S.on == "function")
      k.once ? S.once(x, N) : S.on(x, N);
    else if (typeof S.addEventListener == "function")
      S.addEventListener(x, function G(H) {
        k.once && S.removeEventListener(x, G), N(H);
      });
    else
      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof S);
  }
  return Na.exports;
}
var vf, k1;
function qM() {
  if (k1) return vf;
  k1 = 1;
  var n = [].indexOf;
  return vf = function(r, i) {
    if (n) return r.indexOf(i);
    for (var a = 0; a < r.length; ++a)
      if (r[a] === i) return a;
    return -1;
  }, vf;
}
var _f, U1;
function kM() {
  if (U1) return _f;
  U1 = 1;
  var n = Array.prototype, r = n.concat, i = n.slice, a = qM();
  function u(c) {
    var f = {}, p = r.apply(n, i.call(arguments, 1));
    for (var h in c)
      a(p, h) === -1 && (f[h] = c[h]);
    return f;
  }
  return _f = u, _f;
}
var wf, j1;
function Im() {
  return j1 || (j1 = 1, wf = {
    __locale: "en",
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    abbreviated_days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    abbreviated_months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    am: "AM",
    pm: "PM"
  }), wf;
}
var bf, $1;
function UM() {
  return $1 || ($1 = 1, bf = Im()), bf;
}
var Ef, W1;
function jM() {
  if (W1) return Ef;
  W1 = 1;
  var n = UM();
  function r(f, p, h) {
    var g = f.getTime();
    return h = h || n, p.replace(/%([-_0]?.)/g, function(v, m) {
      var w = null;
      if (m.length == 2) {
        switch (m[0]) {
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
            return v;
        }
        m = m[1];
      }
      switch (m) {
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
          var I = f.toString().match(/\((\w+)\)/);
          return I && I[1] || "";
        case "z":
          var M = f.getTimezoneOffset();
          return (M > 0 ? "-" : "+") + i(Math.round(Math.abs(M / 60)), 2) + ":" + i(M % 60, 2);
        default:
          return m;
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
    var g = new Date(f.getFullYear(), 0, 1), v = (f - g) / 864e5, m = (v + 7 - h) / 7;
    return Math.floor(m);
  }
  return Ef = r, Ef;
}
var Af, Y1;
function $M() {
  return Y1 || (Y1 = 1, Af = function(n, r) {
    var i;
    return r === 0 && "zero" in n && (i = "zero"), i = i || (r === 1 ? "one" : "other"), n[i];
  }), Af;
}
var Sf, z1;
function WM() {
  return z1 || (z1 = 1, Sf = {
    counterpart: {
      names: Im(),
      pluralize: $M(),
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
  }), Sf;
}
var If, G1;
function YM() {
  if (G1) return If;
  G1 = 1;
  var n = Qx(), r = L1().isArray, i = L1().isDate, a = LM().sprintf, u = BM(), c = kM(), f = jM(), p = "counterpart";
  function h(A) {
    return typeof A == "string" || Object.prototype.toString.call(A) === "[object String]";
  }
  function g(A) {
    return typeof A == "function" || Object.prototype.toString.call(A) === "[object Function]";
  }
  function v(A) {
    return A === null ? !1 : Object.prototype.toString.call(A) === "[object Object]";
  }
  function m(A) {
    return h(A) && A[0] === ":";
  }
  function w(A, R) {
    return Object.prototype.hasOwnProperty.call(A, R);
  }
  function P(A, R) {
    return R.reduce(function(L, S) {
      return v(L) && w(L, S) ? L[S] : null;
    }, A);
  }
  function I() {
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
    }, this.registerTranslations("en", WM()), this.setMaxListeners(0);
  }
  I.prototype = u.EventEmitter.prototype, I.prototype.constructor = u.EventEmitter, I.prototype.getLocale = function() {
    return this._registry.locale;
  }, I.prototype.setLocale = function(A) {
    var R = this._registry.locale;
    return R != A && (this._registry.locale = A, this.emit("localechange", A, R)), R;
  }, I.prototype.getFallbackLocale = function() {
    return this._registry.fallbackLocales;
  }, I.prototype.setFallbackLocale = function(A) {
    var R = this._registry.fallbackLocales;
    return this._registry.fallbackLocales = [].concat(A || []), R;
  }, I.prototype.getAvailableLocales = function() {
    return this._registry.availableLocales || Object.keys(this._registry.translations);
  }, I.prototype.setAvailableLocales = function(A) {
    var R = this.getAvailableLocales();
    return this._registry.availableLocales = A, R;
  }, I.prototype.getSeparator = function() {
    return this._registry.separator;
  }, I.prototype.setSeparator = function(A) {
    var R = this._registry.separator;
    return this._registry.separator = A, R;
  }, I.prototype.setInterpolate = function(A) {
    var R = this._registry.interpolate;
    return this._registry.interpolate = A, R;
  }, I.prototype.getInterpolate = function() {
    return this._registry.interpolate;
  }, I.prototype.setKeyTransformer = function(A) {
    var R = this._registry.keyTransformer;
    return this._registry.keyTransformer = A, R;
  }, I.prototype.getKeyTransformer = function() {
    return this._registry.keyTransformer;
  }, I.prototype.setMissingEntryGenerator = function(A) {
    var R = this._registry.generateMissingEntry;
    return this._registry.generateMissingEntry = A, R;
  }, I.prototype.getMissingEntryGenerator = function() {
    return this._registry.generateMissingEntry;
  }, I.prototype.registerTranslations = function(A, R) {
    var L = {};
    return L[A] = R, n(!0, this._registry.translations, L), L;
  }, I.prototype.registerInterpolations = function(A) {
    return n(!0, this._registry.interpolations, A);
  }, I.prototype.onLocaleChange = I.prototype.addLocaleChangeListener = function(A) {
    this.addListener("localechange", A);
  }, I.prototype.offLocaleChange = I.prototype.removeLocaleChangeListener = function(A) {
    this.removeListener("localechange", A);
  }, I.prototype.onTranslationNotFound = I.prototype.addTranslationNotFoundListener = function(A) {
    this.addListener("translationnotfound", A);
  }, I.prototype.offTranslationNotFound = I.prototype.removeTranslationNotFoundListener = function(A) {
    this.removeListener("translationnotfound", A);
  }, I.prototype.onError = I.prototype.addErrorListener = function(A) {
    this.addListener("error", A);
  }, I.prototype.offError = I.prototype.removeErrorListener = function(A) {
    this.removeListener("error", A);
  }, I.prototype.translate = function(A, R) {
    if (!r(A) && !h(A) || !A.length)
      throw new Error("invalid argument: key");
    m(A) && (A = A.substr(1)), A = this._registry.keyTransformer(A, R), R = n(!0, {}, R);
    var L = R.locale || this._registry.locale;
    delete R.locale;
    var S = R.scope || this._registry.scope;
    delete R.scope;
    var x = R.separator || this._registry.separator;
    delete R.separator;
    var N = [].concat(R.fallbackLocale || this._registry.fallbackLocales);
    delete R.fallbackLocale;
    var k = this._normalizeKeys(L, S, A, x), G = P(this._registry.translations, k);
    if (G === null && (this.emit("translationnotfound", L, A, R.fallback, S), R.fallback && (G = this._fallback(L, S, A, R.fallback, R))), G === null && N.length > 0 && N.indexOf(L) === -1)
      for (var H = 0, V = N.length; H < V; H++) {
        var le = N[H], we = this._normalizeKeys(le, S, A, x);
        if (G = P(this._registry.translations, we), G) {
          L = le;
          break;
        }
      }
    return G === null && (G = this._registry.generateMissingEntry(k.join(x))), G = this._pluralize(L, G, R.count), this._registry.interpolate !== !1 && R.interpolate !== !1 && (G = this._interpolate(G, R)), G;
  }, I.prototype.localize = function(A, R) {
    if (!i(A))
      throw new Error("invalid argument: object must be a date");
    R = n(!0, {}, R);
    var L = R.locale || this._registry.locale, S = R.scope || p, x = R.type || "datetime", N = R.format || "default";
    return R = { locale: L, scope: S, interpolate: !1 }, N = this.translate(["formats", x, N], n(!0, {}, R)), f(A, N, this.translate("names", R));
  }, I.prototype._pluralize = function(A, R, L) {
    if (typeof R != "object" || R === null || typeof L != "number")
      return R;
    var S = this.translate("pluralize", { locale: A, scope: p });
    return Object.prototype.toString.call(S) !== "[object Function]" ? S : S(R, L);
  }, I.prototype.withLocale = function(A, R, L) {
    var S = this._registry.locale;
    this._registry.locale = A;
    var x = R.call(L);
    return this._registry.locale = S, x;
  }, I.prototype.withScope = function(A, R, L) {
    var S = this._registry.scope;
    this._registry.scope = A;
    var x = R.call(L);
    return this._registry.scope = S, x;
  }, I.prototype.withSeparator = function(A, R, L) {
    var S = this.setSeparator(A), x = R.call(L);
    return this.setSeparator(S), x;
  }, I.prototype._normalizeKeys = function(A, R, L, S) {
    var x = [];
    return x = x.concat(this._normalizeKey(A, S)), x = x.concat(this._normalizeKey(R, S)), x = x.concat(this._normalizeKey(L, S)), x;
  }, I.prototype._normalizeKey = function(A, R) {
    return this._registry.normalizedKeys[R] = this._registry.normalizedKeys[R] || {}, this._registry.normalizedKeys[R][A] = this._registry.normalizedKeys[R][A] || (function(L) {
      if (r(L)) {
        var S = L.map((function(k) {
          return this._normalizeKey(k, R);
        }).bind(this));
        return [].concat.apply([], S);
      } else {
        if (typeof L > "u" || L === null)
          return [];
        for (var x = L.split(R), N = x.length - 1; N >= 0; N--)
          x[N] === "" && (x.splice(N, 1), this._registry.keepTrailingDot === !0 && N == x.length && (x[x.length - 1] += "" + R));
        return x;
      }
    }).bind(this)(A), this._registry.normalizedKeys[R][A];
  }, I.prototype._interpolate = function(A, R) {
    if (typeof A != "string")
      return A;
    try {
      return a(A, n({}, this._registry.interpolations, R));
    } catch (L) {
      if (this.listenerCount("error") > 0)
        this.emit("error", L, A, R);
      else
        throw L;
      return null;
    }
  }, I.prototype._resolve = function(A, R, L, S, x) {
    if (x = x || {}, x.resolve === !1)
      return S;
    var N;
    if (m(S))
      N = this.translate(S, n({}, x, { locale: A, scope: R }));
    else if (g(S)) {
      var k;
      x.object ? (k = x.object, delete x.object) : k = L, N = this._resolve(A, R, L, S(k, x));
    } else
      N = S;
    return /^missing translation:/.test(N) ? null : N;
  }, I.prototype._fallback = function(A, R, L, S, x) {
    if (x = c(x, "fallback"), r(S)) {
      for (var N = 0, k = S.length; N < k; N++) {
        var G = this._resolve(A, R, L, S[N], x);
        if (G)
          return G;
      }
      return null;
    } else
      return this._resolve(A, R, L, S, x);
  };
  var M = new I();
  function W() {
    return M.translate.apply(M, arguments);
  }
  return n(W, M, {
    Instance: I,
    Translator: I
  }), If = W, If;
}
var zM = YM();
const ot = /* @__PURE__ */ uy(zM), Tm = "i18n/";
ot.setSeparator(Xx);
const Om = "en";
ot.setFallbackLocale(Om);
function GM(n, r) {
  ot.registerTranslations(n, r);
}
function j7(n) {
  ot.setMissingEntryGenerator(n);
}
function ZM() {
  return ot.getLocale();
}
function $7(n) {
  return ot.setLocale(n);
}
function W7(n) {
  return n;
}
function Z1(n) {
  return typeof n == "string" && !n.startsWith("missing translation:");
}
const HM = (n, r) => {
  const i = ot.translate(n, { ...r, fallbackLocale: ot.getLocale() });
  if (Z1(i))
    return { translated: i };
  const a = ot.translate(n, { ...r, locale: Om });
  return Z1(a) ? { translated: a, isFallback: !0 } : { translated: n, isFallback: !0 };
};
function bp(n, r) {
  const i = { ...r, interpolate: !1 };
  return i && typeof i == "object" && Object.keys(i).forEach((a) => {
    i[a] === void 0 && (console.warn("safeCounterpartTranslate called with undefined interpolation name: " + a), i[a] = "undefined"), i[a] === null && (console.warn("safeCounterpartTranslate called with null interpolation name: " + a), i[a] = "null");
  }), HM(n, i);
}
const Rm = (n, r) => n;
function Ei(n, r, i) {
  const { translated: a } = bp(n, r), u = xm(a, r, i);
  return Rm(u);
}
function Y7(n) {
  return bp(n, {}).translated;
}
function z7(n, r, i) {
  const { translated: a, isFallback: u } = bp(n, r), c = xm(a, r, i);
  return Rm(u ? /* @__PURE__ */ z.createElement("span", { lang: "en" }, c) : c);
}
function G7(n) {
  return n.replace(/%\(([^)]*)\)/g, "% ($1)");
}
function xm(n, r, i) {
  let a = n;
  if (r !== void 0) {
    const u = {};
    for (const c in r)
      u[`%\\(${c}\\)s`] = r[c];
    a = H1(a, u);
  }
  if (i !== void 0) {
    const u = {};
    for (const c in i)
      u[`(<${c}>(.*?)<\\/${c}>|<${c}>|<${c}\\s*\\/>)`] = i[c];
    a = H1(a, u);
  }
  return a;
}
function H1(n, r) {
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
      const v = h.slice(0, g.index), m = [];
      let w;
      for (; g; ) {
        w = g;
        const P = g.slice(2);
        let I;
        r[u] instanceof Function ? I = r[u](...P) : I = r[u], typeof I == "object" && (a = !0), (typeof I != "string" || I !== "") && m.push(I), g = c.exec(h);
        let M;
        if (g) {
          const W = w.index + w[0].length;
          M = h.slice(W, g.index);
        } else
          M = h.slice(w.index + w[0].length);
        M && m.push(M);
      }
      i.splice(p, 1, ...m), v !== "" && i.splice(p, 0, v);
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
  return a ? z.createElement("span", null, ...i) : i.join("");
}
async function Z7(n) {
  const r = await JM(), i = n in r ? n : "en", a = await KM(Tm + r[i]);
  ot.registerTranslations(i, a), ot.setLocale(i);
}
async function KM(n) {
  console.log("Loading language from", n);
  const r = await fetch(n, { method: "GET" });
  if (!r.ok)
    throw new Error(`Failed to load ${n}, got ${r.status}`);
  return r.json();
}
async function JM() {
  const n = Tm + "languages.json", r = await fetch(n, { method: "GET" });
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
  const p = at(Ca.banner, a), h = Ai(() => {
    switch (n) {
      case "critical":
        return /* @__PURE__ */ z.createElement(Gx, { fontSize: 24 });
      case "info":
        return /* @__PURE__ */ z.createElement(Cg, { fontSize: 24 });
      case "success":
        return /* @__PURE__ */ z.createElement(zx, { fontSize: 24 });
      default:
        return /* @__PURE__ */ z.createElement(Cg, { fontSize: 24 });
    }
  }, [n]);
  return /* @__PURE__ */ z.createElement("div", { ...f, className: p, "data-type": n }, /* @__PURE__ */ z.createElement("div", { className: Ca.icon }, i ?? h), /* @__PURE__ */ z.createElement("div", { className: Ca.content }, r), /* @__PURE__ */ z.createElement("div", { className: Ca.actions }, u, c && /* @__PURE__ */ z.createElement(Lt, { kind: "secondary", size: "sm", onClick: c }, Ei("action|dismiss"))));
}
function H7({ vm: n }) {
  const { visible: r } = bo(n), i = Ei(
    "room|status_bar|history_visible",
    {},
    {
      a: VM
    }
  );
  return /* @__PURE__ */ z.createElement(z.Fragment, null, r && /* @__PURE__ */ z.createElement(di, { type: "info", onClose: () => n.onClose() }, i));
}
function VM(n) {
  return /* @__PURE__ */ z.createElement(ES, { href: "https://element.io/en/help#e2ee-history-sharing", target: "_blank" }, n);
}
function K7({ vm: n }) {
  const r = bo(n);
  return /* @__PURE__ */ z.createElement("div", { className: "mx_TextualEvent" }, r.content);
}
function Mm(n, r) {
  return /* @__PURE__ */ Ce.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: r,
    ...n,
    children: /* @__PURE__ */ Ce.jsx("path", {
      d: "M6.293 6.293a1 1 0 0 1 1.414 0L12 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414L13.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.586 12 6.293 7.707a1 1 0 0 1 0-1.414"
    })
  });
}
Mm.displayName = "CloseIcon";
const XM = Vn(Mm), QM = "_pill_1i8jm_8", e7 = "_label_1i8jm_14", K1 = {
  pill: QM,
  label: e7
};
function J7({ className: n, children: r, label: i, onClick: a, ...u }) {
  const c = qf(), { translate: f } = Ur();
  return /* @__PURE__ */ z.createElement(
    Nn,
    {
      display: "inline-flex",
      gap: "var(--cpd-space-1-5x)",
      align: "center",
      className: at(K1.pill, n),
      ...u
    },
    r,
    /* @__PURE__ */ z.createElement("span", { id: c, className: K1.label }, i),
    a && /* @__PURE__ */ z.createElement(
      ay,
      {
        "aria-describedby": c,
        size: "16px",
        onClick: a,
        "aria-label": f("action|delete"),
        className: "mx_Dialog_nonDialogButton"
      },
      /* @__PURE__ */ z.createElement(XM, null)
    )
  );
}
function n7(n) {
  return (r) => {
    for (const i of n) Bf(i, r);
  };
}
function t7(n) {
  return (r) => {
    const i = [];
    for (const a of n) {
      const u = Bf(a, r), c = typeof u == "function";
      i.push(c ? u : () => Bf(a, null));
    }
    return () => {
      for (const a of i) a();
    };
  };
}
function Bf(n, r) {
  if (typeof n == "function")
    return n(r);
  n && (n.current = r);
}
var r7 = parseInt(_S.split(".")[0], 10) >= 19 ? t7 : n7;
function i7(n) {
  return Ai(() => r7(n), n);
}
const o7 = "_pillInput_1yam9_8", a7 = "_input_1yam9_16", u7 = "_largerInput_1yam9_32", Tf = {
  pillInput: o7,
  input: a7,
  largerInput: u7
};
function V7({
  className: n,
  children: r,
  onRemoveChildren: i,
  inputProps: a,
  ...u
}) {
  const c = oy(null), f = pm.omit(a, ["onKeyDown", "ref"]), p = i7([c, a?.ref]), h = wS.toArray(r).length > 0;
  return /* @__PURE__ */ z.createElement(
    Nn,
    {
      ...u,
      gap: "var(--cpd-space-1x)",
      direction: "column",
      className: at(Tf.pillInput, n),
      onClick: (g) => {
        g.preventDefault(), g.stopPropagation(), c.current?.focus();
      }
    },
    h && /* @__PURE__ */ z.createElement(Nn, { gap: "var(--cpd-space-1x)", wrap: "wrap", align: "center" }, r),
    /* @__PURE__ */ z.createElement(
      "input",
      {
        ref: p,
        autoComplete: "off",
        className: at(Tf.input, { [Tf.largerInput]: h }),
        onKeyDown: (g) => {
          const v = g.currentTarget.value.trim();
          if (g.key === "Backspace" && !v) {
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
function Pm(n, r) {
  return /* @__PURE__ */ Ce.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: r,
    ...n,
    children: /* @__PURE__ */ Ce.jsx("path", {
      d: "M9.55 17.575q-.2 0-.375-.062a.9.9 0 0 1-.325-.213L4.55 13q-.274-.274-.262-.713.012-.437.287-.712a.95.95 0 0 1 .7-.275q.425 0 .7.275L9.55 15.15l8.475-8.475q.274-.275.713-.275.437 0 .712.275.275.274.275.713 0 .437-.275.712l-9.2 9.2q-.15.15-.325.212a1.1 1.1 0 0 1-.375.063"
    })
  });
}
Pm.displayName = "CheckIcon";
const s7 = Vn(Pm);
function Cm(n, r) {
  return /* @__PURE__ */ Ce.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: r,
    ...n,
    children: /* @__PURE__ */ Ce.jsx("path", {
      d: "M7 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 5 19V6a.97.97 0 0 1-.713-.287A.97.97 0 0 1 4 5q0-.424.287-.713A.97.97 0 0 1 5 4h4q0-.424.287-.712A.97.97 0 0 1 10 3h4q.424 0 .713.288Q15 3.575 15 4h4q.424 0 .712.287Q20 4.576 20 5t-.288.713A.97.97 0 0 1 19 6v13q0 .824-.587 1.413A1.93 1.93 0 0 1 17 21zM7 6v13h10V6zm2 10q0 .424.287.712Q9.576 17 10 17t.713-.288A.97.97 0 0 0 11 16V9a.97.97 0 0 0-.287-.713A.97.97 0 0 0 10 8a.97.97 0 0 0-.713.287A.97.97 0 0 0 9 9zm4 0q0 .424.287.712.288.288.713.288.424 0 .713-.288A.97.97 0 0 0 15 16V9a.97.97 0 0 0-.287-.713A.97.97 0 0 0 14 8a.97.97 0 0 0-.713.287A.97.97 0 0 0 13 9z"
    })
  });
}
Cm.displayName = "DeleteIcon";
const c7 = Vn(Cm);
function Dm(n, r) {
  return /* @__PURE__ */ Ce.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: r,
    ...n,
    children: /* @__PURE__ */ Ce.jsx("path", {
      d: "M12 18.6c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8M6.6 2.4c-.99 0-1.8.81-1.8 1.8S5.61 6 6.6 6s1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0 5.4c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0 5.4c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8M17.4 6c.99 0 1.8-.81 1.8-1.8s-.81-1.8-1.8-1.8-1.8.81-1.8 1.8.81 1.8 1.8 1.8M12 13.2c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m5.4 0c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0-5.4c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m-5.4 0c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0-5.4c-.99 0-1.8.81-1.8 1.8S11.01 6 12 6s1.8-.81 1.8-1.8-.81-1.8-1.8-1.8"
    })
  });
}
Dm.displayName = "DialPadIcon";
const f7 = Vn(Dm);
function Nm(n, r) {
  return /* @__PURE__ */ Ce.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: r,
    ...n,
    children: /* @__PURE__ */ Ce.jsx("path", {
      d: "M12 13a.97.97 0 0 1-.713-.287A.97.97 0 0 1 11 12q0-.424.287-.713A.97.97 0 0 1 12 11q.424 0 .713.287.287.288.287.713 0 .424-.287.713A.97.97 0 0 1 12 13m0 9a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20m0 0q-3.35 0-5.675-2.325T4 12t2.325-5.675T12 4t5.675 2.325T20 12t-2.325 5.675T12 20m1.675-5.85q.15-.075.275-.2t.2-.275l2.925-6.25q.125-.25-.062-.437-.188-.188-.438-.063l-6.25 2.925q-.15.075-.275.2t-.2.275l-2.925 6.25q-.125.25.063.438.186.186.437.062z"
    })
  });
}
Nm.displayName = "ExploreIcon";
const l7 = Vn(Nm);
function Fm(n, r) {
  return /* @__PURE__ */ Ce.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: r,
    ...n,
    children: /* @__PURE__ */ Ce.jsx("path", {
      d: "M18.93 8A8 8 0 1 1 4 12a1 1 0 1 0-2 0c0 5.523 4.477 10 10 10s10-4.477 10-10a10 10 0 0 0-.832-4A10 10 0 0 0 12 2a9.99 9.99 0 0 0-8 3.999V4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2H5.755A7.99 7.99 0 0 1 12 4a8 8 0 0 1 6.93 4"
    })
  });
}
Fm.displayName = "RestartIcon";
const J1 = Vn(Fm);
function Lm(n, r) {
  return /* @__PURE__ */ Ce.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: r,
    ...n,
    children: /* @__PURE__ */ Ce.jsx("path", {
      d: "M15.05 16.463a7.5 7.5 0 1 1 1.414-1.414l3.243 3.244a1 1 0 0 1-1.414 1.414zM16 10.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0"
    })
  });
}
Lm.displayName = "SearchIcon";
const p7 = Vn(Lm), h7 = "_container_mqidv_1", d7 = "_description_mqidv_9", yt = {
  container: h7,
  description: d7
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
function X7({ vm: n }) {
  const { translate: r } = Ur(), i = bo(n), a = qf(), u = yi(
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
        /* @__PURE__ */ z.createElement(di, { type: "info", role: "status", "aria-labelledby": a }, /* @__PURE__ */ z.createElement("div", { className: yt.container }, /* @__PURE__ */ z.createElement(ir, { id: a, weight: "semibold" }, Ei("tchap|server_connectivity_lost_title", {}, {
          a: (h) => /* @__PURE__ */ z.createElement(
            "a",
            {
              target: "_blank",
              rel: "noreferrer noopener",
              href: "https://status.tchap.numerique.gouv.fr"
            },
            h
          )
        })), /* @__PURE__ */ z.createElement(ir, { className: yt.description, size: "sm" }, r("room|status_bar|server_connectivity_lost_description"))))
      );
    case uo.NeedsConsent:
      return /* @__PURE__ */ z.createElement(
        di,
        {
          type: "info",
          role: "status",
          "aria-labelledby": a,
          actions: /* @__PURE__ */ z.createElement(
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
        /* @__PURE__ */ z.createElement("div", { className: yt.container }, /* @__PURE__ */ z.createElement(ir, { id: a, weight: "semibold" }, r("room|status_bar|requires_consent_agreement_title")))
      );
    case uo.ResourceLimited:
      return /* @__PURE__ */ z.createElement(
        di,
        {
          type: "info",
          role: "status",
          "aria-labelledby": a,
          actions: i.adminContactHref && /* @__PURE__ */ z.createElement(
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
        /* @__PURE__ */ z.createElement("div", { className: yt.container }, /* @__PURE__ */ z.createElement(ir, { id: a, weight: "semibold" }, {
          monthly_active_user: r("room|status_bar|monthly_user_limit_reached_title"),
          hs_disabled: r("room|status_bar|homeserver_blocked_title")
        }[i.resourceLimit] || r("room|status_bar|exceeded_resource_limit_title")), /* @__PURE__ */ z.createElement(ir, { className: yt.description, size: "sm" }, r("room|status_bar|exceeded_resource_limit_description")))
      );
    case uo.LocalRoomFailed:
      return /* @__PURE__ */ z.createElement(
        di,
        {
          role: "status",
          type: "info",
          "aria-labelledby": a,
          actions: /* @__PURE__ */ z.createElement(
            Lt,
            {
              size: "sm",
              kind: "secondary",
              className: yt.container,
              Icon: J1,
              onClick: f
            },
            r("action|retry")
          )
        },
        /* @__PURE__ */ z.createElement(ir, { id: a, weight: "semibold", className: yt.container }, r("room|status_bar|failed_to_create_room_title"))
      );
    case uo.UnsentMessages:
      return /* @__PURE__ */ z.createElement(
        di,
        {
          role: "status",
          type: "info",
          actions: i.isResending ? /* @__PURE__ */ z.createElement(AS, null) : /* @__PURE__ */ z.createElement(z.Fragment, null, n.onDeleteAllClick && /* @__PURE__ */ z.createElement(
            Lt,
            {
              size: "sm",
              kind: "destructive",
              Icon: c7,
              disabled: i.isResending,
              onClick: u
            },
            r("room|status_bar|delete_all")
          ), n.onResendAllClick && /* @__PURE__ */ z.createElement(
            Lt,
            {
              size: "sm",
              kind: "secondary",
              Icon: J1,
              disabled: i.isResending,
              onClick: c,
              className: yt.container
            },
            r("room|status_bar|retry_all")
          )),
          "aria-labelledby": a
        },
        /* @__PURE__ */ z.createElement("div", { className: yt.container }, /* @__PURE__ */ z.createElement(ir, { id: a, weight: "semibold" }, Ei("tchap|server_connectivity_lost_title", {
          a: (h) => /* @__PURE__ */ z.createElement(
            "a",
            {
              target: "_blank",
              rel: "noreferrer noopener",
              href: "https://status.tchap.numerique.gouv.fr"
            },
            h
          )
        })), /* @__PURE__ */ z.createElement(ir, { className: yt.description, size: "sm" }, r("room|status_bar|select_messages_to_retry")))
      );
    default:
      return null;
  }
}
const g7 = "_richItem_1c0uo_8", y7 = "_avatar_1c0uo_36", m7 = "_title_1c0uo_41", v7 = "_description_1c0uo_47", _7 = "_timestamp_1c0uo_51", w7 = "_checkmark_1c0uo_69", gi = {
  richItem: g7,
  avatar: y7,
  title: m7,
  description: v7,
  timestamp: _7,
  checkmark: w7
}, Q7 = bS(function({
  avatar: r,
  title: i,
  description: a,
  timestamp: u,
  selected: c,
  ...f
}) {
  const p = Ur();
  return /* @__PURE__ */ z.createElement(
    "li",
    {
      className: gi.richItem,
      role: "option",
      tabIndex: -1,
      "aria-selected": c,
      "aria-label": i,
      ...f
    },
    c ? /* @__PURE__ */ z.createElement(b7, null) : /* @__PURE__ */ z.createElement(Nn, { className: gi.avatar }, r),
    /* @__PURE__ */ z.createElement("span", { className: gi.title }, i),
    /* @__PURE__ */ z.createElement("span", { className: gi.description }, a),
    u && /* @__PURE__ */ z.createElement("span", { role: "timer", className: gi.timestamp }, p.humanizeTime(u))
  );
});
function b7() {
  return /* @__PURE__ */ z.createElement(Nn, { align: "center", justify: "center", "aria-hidden": "true", className: gi.checkmark }, /* @__PURE__ */ z.createElement(s7, { width: "24px", height: "24px", color: "var(--cpd-color-icon-on-solid-primary)" }));
}
const E7 = "_richList_1mcas_8", A7 = "_title_1mcas_12", S7 = "_content_1mcas_18", I7 = "_empty_1mcas_26", Fa = {
  richList: E7,
  title: A7,
  content: S7,
  empty: I7
};
function T7() {
  const n = oy(null), r = yi((a) => {
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
function eP({
  children: n,
  title: r,
  className: i,
  titleAttributes: a,
  isEmpty: u = !1,
  ...c
}) {
  const f = qf(), { listRef: p, onKeyDown: h, onFocus: g } = T7();
  return /* @__PURE__ */ z.createElement(Nn, { className: at(Fa.richList, i), direction: "column", ...c }, /* @__PURE__ */ z.createElement("span", { id: f, className: Fa.title, ...a }, r), u ? /* @__PURE__ */ z.createElement("span", { className: Fa.empty }, n) : /* @__PURE__ */ z.createElement(
    "ul",
    {
      ref: p,
      role: "listbox",
      className: Fa.content,
      "aria-labelledby": f,
      tabIndex: 0,
      onKeyDown: h,
      onFocus: g
    },
    n
  ));
}
const O7 = "_view_z7ks9_8", R7 = "_search_z7ks9_16", x7 = "_search_container_z7ks9_29", M7 = "_search_text_z7ks9_41", La = {
  view: O7,
  search: R7,
  search_container: x7,
  search_text: M7
};
function nP({ vm: n }) {
  const { translate: r } = Ur(), { displayExploreButton: i, displayDialButton: a, searchShortcut: u } = bo(n);
  return /* @__PURE__ */ z.createElement(
    Nn,
    {
      "data-testid": "room-list-search",
      className: La.view,
      role: "search",
      gap: "var(--cpd-space-2x)",
      align: "center"
    },
    /* @__PURE__ */ z.createElement(
      Lt,
      {
        id: "room-list-search-button",
        className: La.search,
        kind: "secondary",
        size: "sm",
        Icon: p7,
        onClick: n.onSearchClick
      },
      /* @__PURE__ */ z.createElement(Nn, { className: La.search_container, as: "span", justify: "space-between" }, /* @__PURE__ */ z.createElement("span", { className: La.search_text }, r("action|search")), /* @__PURE__ */ z.createElement("kbd", null, u))
    ),
    a && /* @__PURE__ */ z.createElement(
      Lt,
      {
        kind: "secondary",
        size: "sm",
        Icon: f7,
        iconOnly: !0,
        "aria-label": r("left_panel|open_dial_pad"),
        onClick: n.onDialPadClick
      }
    ),
    i && /* @__PURE__ */ z.createElement(
      Lt,
      {
        kind: "secondary",
        size: "sm",
        Icon: l7,
        iconOnly: !0,
        "aria-label": r("action|explore_rooms"),
        onClick: n.onExploreClick
      }
    )
  );
}
const Of = {
  "box-flex": "_box-flex_1odfs_9",
  "box-shrink": "_box-shrink_1odfs_13",
  "box-grow": "_box-grow_1odfs_17"
};
function tP({
  as: n = "div",
  flex: r = null,
  shrink: i = null,
  grow: a = null,
  className: u,
  children: c,
  ...f
}) {
  const p = Ai(() => {
    const h = {};
    return r && (h["--mx-box-flex"] = r), i && (h["--mx-box-shrink"] = i), a && (h["--mx-box-grow"] = a), h;
  }, [r, a, i]);
  return z.createElement(
    n,
    {
      ...f,
      className: at(u, {
        [Of["box-flex"]]: !!r,
        [Of["box-shrink"]]: !!i,
        [Of["box-grow"]]: !!a
      }),
      style: p
    },
    c
  );
}
const V1 = 15e3, X1 = 75e3, Q1 = 45, ey = 75, ny = 23, ty = 26;
function P7(n, r) {
  let a = Date.now() - n;
  const u = Math.abs(Math.ceil(a / 6e4)), c = Math.ceil(u / 60), f = Math.ceil(c / 24), p = r?.translate ?? Ei;
  return a >= 0 ? a <= V1 ? p("time|few_seconds_ago") : a <= X1 ? p("time|about_minute_ago") : u <= Q1 ? p("time|n_minutes_ago", { num: u }) : u <= ey ? p("time|about_hour_ago") : c <= ny ? p("time|n_hours_ago", { num: c }) : c <= ty ? p("time|about_day_ago") : p("time|n_days_ago", { num: f }) : (a = Math.abs(a), a <= V1 ? p("time|in_few_seconds") : a <= X1 ? p("time|in_about_minute") : u <= Q1 ? p("time|in_n_minutes", { num: u }) : u <= ey ? p("time|in_about_hour") : c <= ny ? p("time|in_n_hours", { num: c }) : c <= ty ? p("time|in_about_day") : p("time|in_n_days", { num: f }));
}
function rP(n, r) {
  return Number.isFinite(n) ? Number(n) : r;
}
function iP(n, r, i) {
  return Math.min(Math.max(n, r), i);
}
function oP(...n) {
  return [...n].reduce((r, i) => i + r, 0);
}
function aP(n, r, i) {
  return n * (i - r) + r;
}
function uP(n, r, i) {
  const a = (n - r) / (i - r);
  return Number.isNaN(a) ? 0 : a;
}
class sP {
  /**
   * Read the current language of the user in IETF Language Tag format
   */
  get language() {
    return ZM();
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
      GM(a, i[a]);
  }
  /**
   * Perform a translation, with optional variables
   * @param key - The key to translate
   * @param variables - Optional variables to interpolate into the translation
   */
  translate(r, i) {
    return Ei(r, i);
  }
  humanizeTime(r) {
    return P7(r, this);
  }
}
class C7 {
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
class D7 {
  constructor(r, i) {
    this.snapshot = r, this.emit = i;
  }
  snapshot;
  emit;
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
class N7 {
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
class cP {
  subs;
  snapshot;
  props;
  disposables = new C7();
  constructor(r, i) {
    this.props = r, this.subs = new N7(), this.snapshot = new D7(i, () => {
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
class F7 {
  constructor(r) {
    this.snapshot = r;
  }
  snapshot;
  getSnapshot = () => this.snapshot;
  subscribe(r) {
    return () => {
    };
  }
}
function fP(n) {
  const [r, i] = ry(n);
  return iy(() => {
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
function lP(n, r) {
  return Ai(() => {
    const i = new F7(n);
    return Object.assign(i, r), i;
  }, [n, r]);
}
export {
  q7 as AudioPlayerView,
  k7 as AvatarWithDetails,
  di as Banner,
  cP as BaseViewModel,
  tP as Box,
  Mg as Clock,
  C7 as Disposables,
  Nn as Flex,
  H7 as HistoryVisibleBannerView,
  sP as I18nApi,
  fy as I18nContext,
  Xx as KEY_SEPARATOR,
  RS as MediaBody,
  F7 as MockViewModel,
  J7 as Pill,
  V7 as PillInput,
  YS as PlayPauseButton,
  Q7 as RichItem,
  eP as RichList,
  nP as RoomListSearchView,
  uo as RoomStatusBarState,
  X7 as RoomStatusBarView,
  jx as SeekBar,
  D7 as Snapshot,
  K7 as TextualEventView,
  N7 as ViewModelSubscriptions,
  Ei as _t,
  z7 as _tDom,
  W7 as _td,
  iP as clamp,
  rP as defaultNumber,
  zS as formatBytes,
  Lx as formatSeconds,
  JM as getLangsJson,
  ZM as getLocale,
  U7 as getNormalizedLanguageKeys,
  P7 as humanizeTime,
  Y7 as lookupString,
  Vx as normalizeLanguageKey,
  uP as percentageOf,
  aP as percentageWithin,
  GM as registerTranslations,
  H1 as replaceByRegexes,
  G7 as sanitizeForTranslation,
  Z7 as setLanguage,
  $7 as setLocale,
  j7 as setMissingEntryGenerator,
  xm as substitute,
  oP as sum,
  fP as useCreateAutoDisposedViewModel,
  Ur as useI18n,
  lP as useMockedViewModel,
  bo as useViewModel
};
