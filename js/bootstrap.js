/*!
 * Bootstrap  v5.3.2 (https://github.com/IrfanGhuori/bootstrap-extra-7.8)
 * Copyright 2011-2024 The Bootstrap Authors
 * Licensed under MIT (https://github.com/IrfanGhuori/bootstrap-extra-7.8/blob/master/LICENSE)
 */
var $videoSrc;
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = e(require("@popperjs/core")))
        : "function" == typeof define && define.amd
        ? define(["@popperjs/core"], e)
        : ((t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e(t.Popper));
})(this, function (t) {
    "use strict";
    function e(t) {
        const e = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
        if (t)
            for (const s in t)
                if ("default" !== s) {
                    const i = Object.getOwnPropertyDescriptor(t, s);
                    Object.defineProperty(e, s, i.get ? i : { enumerable: !0, get: () => t[s] });
                }
        return (e.default = t), Object.freeze(e);
    }
    const s = e(t),
        i = new Map(),
        n = {
            set(t, e, s) {
                i.has(t) || i.set(t, new Map());
                const n = i.get(t);
                n.has(e) || 0 === n.size ? n.set(e, s) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);
            },
            get: (t, e) => (i.has(t) && i.get(t).get(e)) || null,
            remove(t, e) {
                if (!i.has(t)) return;
                const s = i.get(t);
                s.delete(e), 0 === s.size && i.delete(t);
            },
        },
        o = "transitionend",
        r = (t) => (t && window.CSS && window.CSS.escape && (t = t.replace(/#([^\s"#']+)/g, (t, e) => `#${CSS.escape(e)}`)), t),
        a = (t) => {
            t.dispatchEvent(new Event(o));
        },
        l = (t) => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
        c = (t) => (l(t) ? (t.jquery ? t[0] : t) : "string" == typeof t && t.length > 0 ? document.querySelector(r(t)) : null),
        h = (t) => {
            if (!l(t) || 0 === t.getClientRects().length) return !1;
            const e = "visible" === getComputedStyle(t).getPropertyValue("visibility"),
                s = t.closest("details:not([open])");
            if (!s) return e;
            if (s !== t) {
                const e = t.closest("summary");
                if (e && e.parentNode !== s) return !1;
                if (null === e) return !1;
            }
            return e;
        },
        d = (t) => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
        u = (t) => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                const e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null;
            }
            return t instanceof ShadowRoot ? t : t.parentNode ? u(t.parentNode) : null;
        },
        g = () => {},
        f = (t) => {
            t.offsetHeight;
        },
        p = () => (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null),
        m = [],
        _ = () => "rtl" === document.documentElement.dir,
        b = (t) => {
            var e;
            (e = () => {
                const e = p();
                if (e) {
                    const s = t.NAME,
                        i = e.fn[s];
                    (e.fn[s] = t.jQueryInterface), (e.fn[s].Constructor = t), (e.fn[s].noConflict = () => ((e.fn[s] = i), t.jQueryInterface));
                }
            }),
                "loading" === document.readyState
                    ? (m.length ||
                          document.addEventListener("DOMContentLoaded", () => {
                              for (const t of m) t();
                          }),
                      m.push(e))
                    : e();
        },
        v = (t, e = [], s = t) => ("function" == typeof t ? t(...e) : s),
        y = (t, e, s = !0) => {
            if (!s) return void v(t);
            const i =
                ((t) => {
                    if (!t) return 0;
                    let { transitionDuration: e, transitionDelay: s } = window.getComputedStyle(t);
                    const i = Number.parseFloat(e),
                        n = Number.parseFloat(s);
                    return i || n ? ((e = e.split(",")[0]), (s = s.split(",")[0]), 1e3 * (Number.parseFloat(e) + Number.parseFloat(s))) : 0;
                })(e) + 5;
            let n = !1;
            const r = ({ target: s }) => {
                s === e && ((n = !0), e.removeEventListener(o, r), v(t));
            };
            e.addEventListener(o, r),
                setTimeout(() => {
                    n || a(e);
                }, i);
        },
        w = (t, e, s, i) => {
            const n = t.length;
            let o = t.indexOf(e);
            return -1 === o ? (!s && i ? t[n - 1] : t[0]) : ((o += s ? 1 : -1), i && (o = (o + n) % n), t[Math.max(0, Math.min(o, n - 1))]);
        },
        A = /[^.]*(?=\..*)\.|.*/,
        C = /\..*/,
        $ = /::\d+$/,
        E = {};
    let T = 1;
    const k = { mouseenter: "mouseover", mouseleave: "mouseout" },
        S = new Set([
            "click",
            "dblclick",
            "mouseup",
            "mousedown",
            "contextmenu",
            "mousewheel",
            "DOMMouseScroll",
            "mouseover",
            "mouseout",
            "mousemove",
            "selectstart",
            "selectend",
            "keydown",
            "keypress",
            "keyup",
            "orientationchange",
            "touchstart",
            "touchmove",
            "touchend",
            "touchcancel",
            "pointerdown",
            "pointermove",
            "pointerup",
            "pointerleave",
            "pointercancel",
            "gesturestart",
            "gesturechange",
            "gestureend",
            "focus",
            "blur",
            "change",
            "reset",
            "select",
            "submit",
            "focusin",
            "focusout",
            "load",
            "unload",
            "beforeunload",
            "resize",
            "move",
            "DOMContentLoaded",
            "readystatechange",
            "error",
            "abort",
            "scroll",
        ]);
    function I(t, e) {
        return (e && `${e}::${T++}`) || t.uidEvent || T++;
    }
    function L(t) {
        const e = I(t);
        return (t.uidEvent = e), (E[e] = E[e] || {}), E[e];
    }
    function x(t, e, s = null) {
        return Object.values(t).find((t) => t.callable === e && t.delegationSelector === s);
    }
    function O(t, e, s) {
        const i = "string" == typeof e,
            n = i ? s : e || s;
        let o = P(t);
        return S.has(o) || (o = t), [i, n, o];
    }
    function D(t, e, s, i, n) {
        if ("string" != typeof e || !t) return;
        let [o, r, a] = O(e, s, i);
        if (e in k) {
            const t = (t) =>
                function (e) {
                    if (!e.relatedTarget || (e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget))) return t.call(this, e);
                };
            r = t(r);
        }
        const l = L(t),
            c = l[a] || (l[a] = {}),
            h = x(c, r, o ? s : null);
        if (h) return void (h.oneOff = h.oneOff && n);
        const d = I(r, e.replace(A, "")),
            u = o
                ? (function (t, e, s) {
                      return function i(n) {
                          const o = t.querySelectorAll(e);
                          for (let { target: r } = n; r && r !== this; r = r.parentNode) for (const a of o) if (a === r) return F(n, { delegateTarget: r }), i.oneOff && j.off(t, n.type, e, s), s.apply(r, [n]);
                      };
                  })(t, s, r)
                : (function (t, e) {
                      return function s(i) {
                          return F(i, { delegateTarget: t }), s.oneOff && j.off(t, i.type, e), e.apply(t, [i]);
                      };
                  })(t, r);
        (u.delegationSelector = o ? s : null), (u.callable = r), (u.oneOff = n), (u.uidEvent = d), (c[d] = u), t.addEventListener(a, u, o);
    }
    function N(t, e, s, i, n) {
        const o = x(e[s], i, n);
        o && (t.removeEventListener(s, o, Boolean(n)), delete e[s][o.uidEvent]);
    }
    function M(t, e, s, i) {
        const n = e[s] || {};
        for (const [o, r] of Object.entries(n)) o.includes(i) && N(t, e, s, r.callable, r.delegationSelector);
    }
    function P(t) {
        return (t = t.replace(C, "")), k[t] || t;
    }
    const j = {
        on(t, e, s, i) {
            D(t, e, s, i, !1);
        },
        one(t, e, s, i) {
            D(t, e, s, i, !0);
        },
        off(t, e, s, i) {
            if ("string" != typeof e || !t) return;
            const [n, o, r] = O(e, s, i),
                a = r !== e,
                l = L(t),
                c = l[r] || {},
                h = e.startsWith(".");
            if (void 0 === o) {
                if (h) for (const s of Object.keys(l)) M(t, l, s, e.slice(1));
                for (const [s, i] of Object.entries(c)) {
                    const n = s.replace($, "");
                    (a && !e.includes(n)) || N(t, l, r, i.callable, i.delegationSelector);
                }
            } else {
                if (!Object.keys(c).length) return;
                N(t, l, r, o, n ? s : null);
            }
        },
        trigger(t, e, s) {
            if ("string" != typeof e || !t) return null;
            const i = p();
            let n = null,
                o = !0,
                r = !0,
                a = !1;
            e !== P(e) && i && ((n = i.Event(e, s)), i(t).trigger(n), (o = !n.isPropagationStopped()), (r = !n.isImmediatePropagationStopped()), (a = n.isDefaultPrevented()));
            const l = F(new Event(e, { bubbles: o, cancelable: !0 }), s);
            return a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && n && n.preventDefault(), l;
        },
    };
    function F(t, e = {}) {
        for (const [s, i] of Object.entries(e))
            try {
                t[s] = i;
            } catch (e) {
                Object.defineProperty(t, s, { configurable: !0, get: () => i });
            }
        return t;
    }
    function H(t) {
        if ("true" === t) return !0;
        if ("false" === t) return !1;
        if (t === Number(t).toString()) return Number(t);
        if ("" === t || "null" === t) return null;
        if ("string" != typeof t) return t;
        try {
            return JSON.parse(decodeURIComponent(t));
        } catch (e) {
            return t;
        }
    }
    function z(t) {
        return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
    }
    const B = {
        setDataAttribute(t, e, s) {
            t.setAttribute(`data-bs-${z(e)}`, s);
        },
        removeDataAttribute(t, e) {
            t.removeAttribute(`data-bs-${z(e)}`);
        },
        getDataAttributes(t) {
            if (!t) return {};
            const e = {},
                s = Object.keys(t.dataset).filter((t) => t.startsWith("bs") && !t.startsWith("bsConfig"));
            for (const i of s) {
                let s = i.replace(/^bs/, "");
                (s = s.charAt(0).toLowerCase() + s.slice(1, s.length)), (e[s] = H(t.dataset[i]));
            }
            return e;
        },
        getDataAttribute: (t, e) => H(t.getAttribute(`data-bs-${z(e)}`)),
    };
    class q {
        static get Default() {
            return {};
        }
        static get DefaultType() {
            return {};
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!');
        }
        _getConfig(t) {
            return (t = this._mergeConfigObj(t)), (t = this._configAfterMerge(t)), this._typeCheckConfig(t), t;
        }
        _configAfterMerge(t) {
            return t;
        }
        _mergeConfigObj(t, e) {
            const s = l(e) ? B.getDataAttribute(e, "config") : {};
            return { ...this.constructor.Default, ...("object" == typeof s ? s : {}), ...(l(e) ? B.getDataAttributes(e) : {}), ...("object" == typeof t ? t : {}) };
        }
        _typeCheckConfig(t, e = this.constructor.DefaultType) {
            for (const [i, n] of Object.entries(e)) {
                const e = t[i],
                    o = l(e)
                        ? "element"
                        : null == (s = e)
                        ? `${s}`
                        : Object.prototype.toString
                              .call(s)
                              .match(/\s([a-z]+)/i)[1]
                              .toLowerCase();
                if (!new RegExp(n).test(o)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${o}" but expected type "${n}".`);
            }
            var s;
        }
    }
    class R extends q {
        constructor(t, e) {
            super(), (t = c(t)) && ((this._element = t), (this._config = this._getConfig(e)), n.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
            n.remove(this._element, this.constructor.DATA_KEY), j.off(this._element, this.constructor.EVENT_KEY);
            for (const t of Object.getOwnPropertyNames(this)) this[t] = null;
        }
        _queueCallback(t, e, s = !0) {
            y(t, e, s);
        }
        _getConfig(t) {
            return (t = this._mergeConfigObj(t, this._element)), (t = this._configAfterMerge(t)), this._typeCheckConfig(t), t;
        }
        static getInstance(t) {
            return n.get(c(t), this.DATA_KEY);
        }
        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, "object" == typeof e ? e : null);
        }
        static get VERSION() {
            return "5.3.2";
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
        }
        static eventName(t) {
            return `${t}${this.EVENT_KEY}`;
        }
    }
    const W = (t) => {
            let e = t.getAttribute("data-bs-target");
            if (!e || "#" === e) {
                let s = t.getAttribute("href");
                if (!s || (!s.includes("#") && !s.startsWith("."))) return null;
                s.includes("#") && !s.startsWith("#") && (s = `#${s.split("#")[1]}`), (e = s && "#" !== s ? r(s.trim()) : null);
            }
            return e;
        },
        Q = {
            find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
            findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
            children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
            parents(t, e) {
                const s = [];
                let i = t.parentNode.closest(e);
                for (; i; ) s.push(i), (i = i.parentNode.closest(e));
                return s;
            },
            prev(t, e) {
                let s = t.previousElementSibling;
                for (; s; ) {
                    if (s.matches(e)) return [s];
                    s = s.previousElementSibling;
                }
                return [];
            },
            next(t, e) {
                let s = t.nextElementSibling;
                for (; s; ) {
                    if (s.matches(e)) return [s];
                    s = s.nextElementSibling;
                }
                return [];
            },
            focusableChildren(t) {
                const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t) => `${t}:not([tabindex^="-"])`).join(",");
                return this.find(e, t).filter((t) => !d(t) && h(t));
            },
            getSelectorFromElement(t) {
                const e = W(t);
                return e && Q.findOne(e) ? e : null;
            },
            getElementFromSelector(t) {
                const e = W(t);
                return e ? Q.findOne(e) : null;
            },
            getMultipleElementsFromSelector(t) {
                const e = W(t);
                return e ? Q.find(e) : [];
            },
        },
        K = (t, e = "hide") => {
            const s = `click.dismiss${t.EVENT_KEY}`,
                i = t.NAME;
            j.on(document, s, `[data-bs-dismiss="${i}"]`, function (s) {
                if ((["A", "AREA"].includes(this.tagName) && s.preventDefault(), d(this))) return;
                const n = Q.getElementFromSelector(this) || this.closest(`.${i}`);
                t.getOrCreateInstance(n)[e]();
            });
        },
        V = ".bs.alert",
        X = `close${V}`,
        Y = `closed${V}`;
    class U extends R {
        static get NAME() {
            return "alert";
        }
        close() {
            if (j.trigger(this._element, X).defaultPrevented) return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback(() => this._destroyElement(), this._element, t);
        }
        _destroyElement() {
            this._element.remove(), j.trigger(this._element, Y), this.dispose();
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = U.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    K(U, "close"), b(U);
    const G = '[data-bs-toggle="button"]';
    class J extends R {
        static get NAME() {
            return "button";
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = J.getOrCreateInstance(this);
                "toggle" === t && e[t]();
            });
        }
    }
    j.on(document, "click.bs.button.data-api", G, (t) => {
        t.preventDefault();
        const e = t.target.closest(G);
        J.getOrCreateInstance(e).toggle();
    }),
        b(J);
    const Z = ".bs.swipe",
        tt = `touchstart${Z}`,
        et = `touchmove${Z}`,
        st = `touchend${Z}`,
        it = `pointerdown${Z}`,
        nt = `pointerup${Z}`,
        ot = { endCallback: null, leftCallback: null, rightCallback: null },
        rt = { endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)" };
    class at extends q {
        constructor(t, e) {
            super(), (this._element = t), t && at.isSupported() && ((this._config = this._getConfig(e)), (this._deltaX = 0), (this._supportPointerEvents = Boolean(window.PointerEvent)), this._initEvents());
        }
        static get Default() {
            return ot;
        }
        static get DefaultType() {
            return rt;
        }
        static get NAME() {
            return "swipe";
        }
        dispose() {
            j.off(this._element, Z);
        }
        _start(t) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : (this._deltaX = t.touches[0].clientX);
        }
        _end(t) {
            this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), v(this._config.endCallback);
        }
        _move(t) {
            this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
        }
        _handleSwipe() {
            const t = Math.abs(this._deltaX);
            if (t <= 40) return;
            const e = t / this._deltaX;
            (this._deltaX = 0), e && v(e > 0 ? this._config.rightCallback : this._config.leftCallback);
        }
        _initEvents() {
            this._supportPointerEvents
                ? (j.on(this._element, it, (t) => this._start(t)), j.on(this._element, nt, (t) => this._end(t)), this._element.classList.add("pointer-event"))
                : (j.on(this._element, tt, (t) => this._start(t)), j.on(this._element, et, (t) => this._move(t)), j.on(this._element, st, (t) => this._end(t)));
        }
        _eventIsPointerPenTouch(t) {
            return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType);
        }
        static isSupported() {
            return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
        }
    }
    const lt = ".bs.carousel",
        ct = ".data-api",
        ht = "next",
        dt = "prev",
        ut = "left",
        gt = "right",
        ft = `slide${lt}`,
        pt = `slid${lt}`,
        mt = `keydown${lt}`,
        _t = `mouseenter${lt}`,
        bt = `mouseleave${lt}`,
        vt = `dragstart${lt}`,
        yt = `load${lt}${ct}`,
        wt = `click${lt}${ct}`,
        At = "carousel",
        Ct = "active",
        $t = ".active",
        Et = ".carousel-item",
        Tt = $t + Et,
        kt = { ArrowLeft: gt, ArrowRight: ut },
        St = { interval: 5e3, keyboard: !0, pause: "hover", ride: !1, touch: !0, wrap: !0 },
        It = { interval: "(number|boolean)", keyboard: "boolean", pause: "(string|boolean)", ride: "(boolean|string)", touch: "boolean", wrap: "boolean" };
    class Lt extends R {
        constructor(t, e) {
            super(t, e),
                (this._interval = null),
                (this._activeElement = null),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this._swipeHelper = null),
                (this._indicatorsElement = Q.findOne(".carousel-indicators", this._element)),
                this._addEventListeners(),
                this._config.ride === At && this.cycle();
        }
        static get Default() {
            return St;
        }
        static get DefaultType() {
            return It;
        }
        static get NAME() {
            return "carousel";
        }
        next() {
            this._slide(ht);
        }
        nextWhenVisible() {
            !document.hidden && h(this._element) && this.next();
        }
        prev() {
            this._slide(dt);
        }
        pause() {
            this._isSliding && a(this._element), this._clearInterval();
        }
        cycle() {
            this._clearInterval(), this._updateInterval(), (this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval));
        }
        _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? j.one(this._element, pt, () => this.cycle()) : this.cycle());
        }
        to(t) {
            const e = this._getItems();
            if (t > e.length - 1 || t < 0) return;
            if (this._isSliding) return void j.one(this._element, pt, () => this.to(t));
            const s = this._getItemIndex(this._getActive());
            if (s === t) return;
            const i = t > s ? ht : dt;
            this._slide(i, e[t]);
        }
        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
        }
        _configAfterMerge(t) {
            return (t.defaultInterval = t.interval), t;
        }
        _addEventListeners() {
            this._config.keyboard && j.on(this._element, mt, (t) => this._keydown(t)),
                "hover" === this._config.pause && (j.on(this._element, _t, () => this.pause()), j.on(this._element, bt, () => this._maybeEnableCycle())),
                this._config.touch && at.isSupported() && this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
            for (const t of Q.find(".carousel-item img", this._element)) j.on(t, vt, (t) => t.preventDefault());
            const t = {
                leftCallback: () => this._slide(this._directionToOrder(ut)),
                rightCallback: () => this._slide(this._directionToOrder(gt)),
                endCallback: () => {
                    "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), (this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval)));
                },
            };
            this._swipeHelper = new at(this._element, t);
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const e = kt[t.key];
            e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
        }
        _getItemIndex(t) {
            return this._getItems().indexOf(t);
        }
        _setActiveIndicatorElement(t) {
            if (!this._indicatorsElement) return;
            const e = Q.findOne($t, this._indicatorsElement);
            e.classList.remove(Ct), e.removeAttribute("aria-current");
            const s = Q.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
            s && (s.classList.add(Ct), s.setAttribute("aria-current", "true"));
        }
        _updateInterval() {
            const t = this._activeElement || this._getActive();
            if (!t) return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            this._config.interval = e || this._config.defaultInterval;
        }
        _slide(t, e = null) {
            if (this._isSliding) return;
            const s = this._getActive(),
                i = t === ht,
                n = e || w(this._getItems(), s, i, this._config.wrap);
            if (n === s) return;
            const o = this._getItemIndex(n),
                r = (e) => j.trigger(this._element, e, { relatedTarget: n, direction: this._orderToDirection(t), from: this._getItemIndex(s), to: o });
            if (r(ft).defaultPrevented) return;
            if (!s || !n) return;
            const a = Boolean(this._interval);
            this.pause(), (this._isSliding = !0), this._setActiveIndicatorElement(o), (this._activeElement = n);
            const l = i ? "carousel-item-start" : "carousel-item-end",
                c = i ? "carousel-item-next" : "carousel-item-prev";
            n.classList.add(c), f(n), s.classList.add(l), n.classList.add(l);
            this._queueCallback(
                () => {
                    n.classList.remove(l, c), n.classList.add(Ct), s.classList.remove(Ct, c, l), (this._isSliding = !1), r(pt);
                },
                s,
                this._isAnimated()
            ),
                a && this.cycle();
        }
        _isAnimated() {
            return this._element.classList.contains("slide");
        }
        _getActive() {
            return Q.findOne(Tt, this._element);
        }
        _getItems() {
            return Q.find(Et, this._element);
        }
        _clearInterval() {
            this._interval && (clearInterval(this._interval), (this._interval = null));
        }
        _directionToOrder(t) {
            return _() ? (t === ut ? dt : ht) : t === ut ? ht : dt;
        }
        _orderToDirection(t) {
            return _() ? (t === dt ? ut : gt) : t === dt ? gt : ut;
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Lt.getOrCreateInstance(this, t);
                if ("number" != typeof t) {
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                } else e.to(t);
            });
        }
    }
    j.on(document, wt, "[data-bs-slide], [data-bs-slide-to]", function (t) {
        const e = Q.getElementFromSelector(this);
        if (!e || !e.classList.contains(At)) return;
        t.preventDefault();
        const s = Lt.getOrCreateInstance(e),
            i = this.getAttribute("data-bs-slide-to");
        return i ? (s.to(i), void s._maybeEnableCycle()) : "next" === B.getDataAttribute(this, "slide") ? (s.next(), void s._maybeEnableCycle()) : (s.prev(), void s._maybeEnableCycle());
    }),
        j.on(window, yt, () => {
            const t = Q.find('[data-bs-ride="carousel"]');
            for (const e of t) Lt.getOrCreateInstance(e);
        }),
        b(Lt);
    const xt = ".bs.collapse",
        Ot = `show${xt}`,
        Dt = `shown${xt}`,
        Nt = `hide${xt}`,
        Mt = `hidden${xt}`,
        Pt = `click${xt}.data-api`,
        jt = "show",
        Ft = "collapse",
        Ht = "collapsing",
        zt = `:scope .${Ft} .${Ft}`,
        Bt = '[data-bs-toggle="collapse"]',
        qt = { parent: null, toggle: !0 },
        Rt = { parent: "(null|element)", toggle: "boolean" };
    class Wt extends R {
        constructor(t, e) {
            super(t, e), (this._isTransitioning = !1), (this._triggerArray = []);
            const s = Q.find(Bt);
            for (const t of s) {
                const e = Q.getSelectorFromElement(t),
                    s = Q.find(e).filter((t) => t === this._element);
                null !== e && s.length && this._triggerArray.push(t);
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
        }
        static get Default() {
            return qt;
        }
        static get DefaultType() {
            return Rt;
        }
        static get NAME() {
            return "collapse";
        }
        toggle() {
            this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let t = [];
            if (
                (this._config.parent &&
                    (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing")
                        .filter((t) => t !== this._element)
                        .map((t) => Wt.getOrCreateInstance(t, { toggle: !1 }))),
                t.length && t[0]._isTransitioning)
            )
                return;
            if (j.trigger(this._element, Ot).defaultPrevented) return;
            for (const e of t) e.hide();
            const e = this._getDimension();
            this._element.classList.remove(Ft), this._element.classList.add(Ht), (this._element.style[e] = 0), this._addAriaAndCollapsedClass(this._triggerArray, !0), (this._isTransitioning = !0);
            const s = `scroll${e[0].toUpperCase() + e.slice(1)}`;
            this._queueCallback(
                () => {
                    (this._isTransitioning = !1), this._element.classList.remove(Ht), this._element.classList.add(Ft, jt), (this._element.style[e] = ""), j.trigger(this._element, Dt);
                },
                this._element,
                !0
            ),
                (this._element.style[e] = `${this._element[s]}px`);
        }
        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if (j.trigger(this._element, Nt).defaultPrevented) return;
            const t = this._getDimension();
            (this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`), f(this._element), this._element.classList.add(Ht), this._element.classList.remove(Ft, jt);
            for (const t of this._triggerArray) {
                const e = Q.getElementFromSelector(t);
                e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1);
            }
            this._isTransitioning = !0;
            (this._element.style[t] = ""),
                this._queueCallback(
                    () => {
                        (this._isTransitioning = !1), this._element.classList.remove(Ht), this._element.classList.add(Ft), j.trigger(this._element, Mt);
                    },
                    this._element,
                    !0
                );
        }
        _isShown(t = this._element) {
            return t.classList.contains(jt);
        }
        _configAfterMerge(t) {
            return (t.toggle = Boolean(t.toggle)), (t.parent = c(t.parent)), t;
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            const t = this._getFirstLevelChildren(Bt);
            for (const e of t) {
                const t = Q.getElementFromSelector(e);
                t && this._addAriaAndCollapsedClass([e], this._isShown(t));
            }
        }
        _getFirstLevelChildren(t) {
            const e = Q.find(zt, this._config.parent);
            return Q.find(t, this._config.parent).filter((t) => !e.includes(t));
        }
        _addAriaAndCollapsedClass(t, e) {
            if (t.length) for (const s of t) s.classList.toggle("collapsed", !e), s.setAttribute("aria-expanded", e);
        }
        static jQueryInterface(t) {
            const e = {};
            return (
                "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1),
                this.each(function () {
                    const s = Wt.getOrCreateInstance(this, e);
                    if ("string" == typeof t) {
                        if (void 0 === s[t]) throw new TypeError(`No method named "${t}"`);
                        s[t]();
                    }
                })
            );
        }
    }
    j.on(document, Pt, Bt, function (t) {
        ("A" === t.target.tagName || (t.delegateTarget && "A" === t.delegateTarget.tagName)) && t.preventDefault();
        for (const t of Q.getMultipleElementsFromSelector(this)) Wt.getOrCreateInstance(t, { toggle: !1 }).toggle();
    }),
        b(Wt);
    const Qt = "dropdown",
        Kt = ".bs.dropdown",
        Vt = ".data-api",
        Xt = "ArrowUp",
        Yt = "ArrowDown",
        Ut = `hide${Kt}`,
        Gt = `hidden${Kt}`,
        Jt = `show${Kt}`,
        Zt = `shown${Kt}`,
        te = `click${Kt}${Vt}`,
        ee = `keydown${Kt}${Vt}`,
        se = `keyup${Kt}${Vt}`,
        ie = "show",
        ne = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
        oe = `${ne}.${ie}`,
        re = ".dropdown-menu",
        ae = _() ? "top-end" : "top-start",
        le = _() ? "top-start" : "top-end",
        ce = _() ? "bottom-end" : "bottom-start",
        he = _() ? "bottom-start" : "bottom-end",
        de = _() ? "left-start" : "right-start",
        ue = _() ? "right-start" : "left-start",
        ge = { autoClose: !0, boundary: "clippingParents", display: "dynamic", offset: [0, 2], popperConfig: null, reference: "toggle" },
        fe = { autoClose: "(boolean|string)", boundary: "(string|element)", display: "string", offset: "(array|string|function)", popperConfig: "(null|object|function)", reference: "(string|element|object)" };
    class pe extends R {
        constructor(t, e) {
            super(t, e), (this._popper = null), (this._parent = this._element.parentNode), (this._menu = Q.next(this._element, re)[0] || Q.prev(this._element, re)[0] || Q.findOne(re, this._parent)), (this._inNavbar = this._detectNavbar());
        }
        static get Default() {
            return ge;
        }
        static get DefaultType() {
            return fe;
        }
        static get NAME() {
            return Qt;
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (d(this._element) || this._isShown()) return;
            const t = { relatedTarget: this._element };
            if (!j.trigger(this._element, Jt, t).defaultPrevented) {
                if ((this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))) for (const t of [].concat(...document.body.children)) j.on(t, "mouseover", g);
                this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(ie), this._element.classList.add(ie), j.trigger(this._element, Zt, t);
            }
        }
        hide() {
            if (d(this._element) || !this._isShown()) return;
            const t = { relatedTarget: this._element };
            this._completeHide(t);
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
            (this._inNavbar = this._detectNavbar()), this._popper && this._popper.update();
        }
        _completeHide(t) {
            if (!j.trigger(this._element, Ut, t).defaultPrevented) {
                if ("ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children)) j.off(t, "mouseover", g);
                this._popper && this._popper.destroy(),
                    this._menu.classList.remove(ie),
                    this._element.classList.remove(ie),
                    this._element.setAttribute("aria-expanded", "false"),
                    B.removeDataAttribute(this._menu, "popper"),
                    j.trigger(this._element, Gt, t);
            }
        }
        _getConfig(t) {
            if ("object" == typeof (t = super._getConfig(t)).reference && !l(t.reference) && "function" != typeof t.reference.getBoundingClientRect)
                throw new TypeError(`${Qt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t;
        }
        _createPopper() {
            if (void 0 === s) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let t = this._element;
            "parent" === this._config.reference ? (t = this._parent) : l(this._config.reference) ? (t = c(this._config.reference)) : "object" == typeof this._config.reference && (t = this._config.reference);
            const e = this._getPopperConfig();
            this._popper = s.createPopper(t, this._menu, e);
        }
        _isShown() {
            return this._menu.classList.contains(ie);
        }
        _getPlacement() {
            const t = this._parent;
            if (t.classList.contains("dropend")) return de;
            if (t.classList.contains("dropstart")) return ue;
            if (t.classList.contains("dropup-center")) return "top";
            if (t.classList.contains("dropdown-center")) return "bottom";
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? (e ? le : ae) : e ? he : ce;
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar");
        }
        _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t ? t.split(",").map((t) => Number.parseInt(t, 10)) : "function" == typeof t ? (e) => t(e, this._element) : t;
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [
                    { name: "preventOverflow", options: { boundary: this._config.boundary } },
                    { name: "offset", options: { offset: this._getOffset() } },
                ],
            };
            return (this._inNavbar || "static" === this._config.display) && (B.setDataAttribute(this._menu, "popper", "static"), (t.modifiers = [{ name: "applyStyles", enabled: !1 }])), { ...t, ...v(this._config.popperConfig, [t]) };
        }
        _selectMenuItem({ key: t, target: e }) {
            const s = Q.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t) => h(t));
            s.length && w(s, e, t === Yt, !s.includes(e)).focus();
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = pe.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
        static clearMenus(t) {
            if (2 === t.button || ("keyup" === t.type && "Tab" !== t.key)) return;
            const e = Q.find(oe);
            for (const s of e) {
                const e = pe.getInstance(s);
                if (!e || !1 === e._config.autoClose) continue;
                const i = t.composedPath(),
                    n = i.includes(e._menu);
                if (i.includes(e._element) || ("inside" === e._config.autoClose && !n) || ("outside" === e._config.autoClose && n)) continue;
                if (e._menu.contains(t.target) && (("keyup" === t.type && "Tab" === t.key) || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                const o = { relatedTarget: e._element };
                "click" === t.type && (o.clickEvent = t), e._completeHide(o);
            }
        }
        static dataApiKeydownHandler(t) {
            const e = /input|textarea/i.test(t.target.tagName),
                s = "Escape" === t.key,
                i = [Xt, Yt].includes(t.key);
            if (!i && !s) return;
            if (e && !s) return;
            t.preventDefault();
            const n = this.matches(ne) ? this : Q.prev(this, ne)[0] || Q.next(this, ne)[0] || Q.findOne(ne, t.delegateTarget.parentNode),
                o = pe.getOrCreateInstance(n);
            if (i) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
            o._isShown() && (t.stopPropagation(), o.hide(), n.focus());
        }
    }
    j.on(document, ee, ne, pe.dataApiKeydownHandler),
        j.on(document, ee, re, pe.dataApiKeydownHandler),
        j.on(document, te, pe.clearMenus),
        j.on(document, se, pe.clearMenus),
        j.on(document, te, ne, function (t) {
            t.preventDefault(), pe.getOrCreateInstance(this).toggle();
        }),
        b(pe);
    const me = "backdrop",
        _e = "show",
        be = `mousedown.bs.${me}`,
        ve = { className: "modal-backdrop", clickCallback: null, isAnimated: !1, isVisible: !0, rootElement: "body" },
        ye = { className: "string", clickCallback: "(function|null)", isAnimated: "boolean", isVisible: "boolean", rootElement: "(element|string)" };
    class we extends q {
        constructor(t) {
            super(), (this._config = this._getConfig(t)), (this._isAppended = !1), (this._element = null);
        }
        static get Default() {
            return ve;
        }
        static get DefaultType() {
            return ye;
        }
        static get NAME() {
            return me;
        }
        show(t) {
            if (!this._config.isVisible) return void v(t);
            this._append();
            const e = this._getElement();
            this._config.isAnimated && f(e),
                e.classList.add(_e),
                this._emulateAnimation(() => {
                    v(t);
                });
        }
        hide(t) {
            this._config.isVisible
                ? (this._getElement().classList.remove(_e),
                  this._emulateAnimation(() => {
                      this.dispose(), v(t);
                  }))
                : v(t);
        }
        dispose() {
            this._isAppended && (j.off(this._element, be), this._element.remove(), (this._isAppended = !1));
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                (t.className = this._config.className), this._config.isAnimated && t.classList.add("fade"), (this._element = t);
            }
            return this._element;
        }
        _configAfterMerge(t) {
            return (t.rootElement = c(t.rootElement)), t;
        }
        _append() {
            if (this._isAppended) return;
            const t = this._getElement();
            this._config.rootElement.append(t),
                j.on(t, be, () => {
                    v(this._config.clickCallback);
                }),
                (this._isAppended = !0);
        }
        _emulateAnimation(t) {
            y(t, this._getElement(), this._config.isAnimated);
        }
    }
    const Ae = ".bs.focustrap",
        Ce = `focusin${Ae}`,
        $e = `keydown.tab${Ae}`,
        Ee = "backward",
        Te = { autofocus: !0, trapElement: null },
        ke = { autofocus: "boolean", trapElement: "element" };
    class Se extends q {
        constructor(t) {
            super(), (this._config = this._getConfig(t)), (this._isActive = !1), (this._lastTabNavDirection = null);
        }
        static get Default() {
            return Te;
        }
        static get DefaultType() {
            return ke;
        }
        static get NAME() {
            return "focustrap";
        }
        activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(), j.off(document, Ae), j.on(document, Ce, (t) => this._handleFocusin(t)), j.on(document, $e, (t) => this._handleKeydown(t)), (this._isActive = !0));
        }
        deactivate() {
            this._isActive && ((this._isActive = !1), j.off(document, Ae));
        }
        _handleFocusin(t) {
            const { trapElement: e } = this._config;
            if (t.target === document || t.target === e || e.contains(t.target)) return;
            const s = Q.focusableChildren(e);
            0 === s.length ? e.focus() : this._lastTabNavDirection === Ee ? s[s.length - 1].focus() : s[0].focus();
        }
        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? Ee : "forward");
        }
    }
    const Ie = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        Le = ".sticky-top",
        xe = "padding-right",
        Oe = "margin-right";
    class De {
        constructor() {
            this._element = document.body;
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t);
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, xe, (e) => e + t), this._setElementAttributes(Ie, xe, (e) => e + t), this._setElementAttributes(Le, Oe, (e) => e - t);
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, xe), this._resetElementAttributes(Ie, xe), this._resetElementAttributes(Le, Oe);
        }
        isOverflowing() {
            return this.getWidth() > 0;
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), (this._element.style.overflow = "hidden");
        }
        _setElementAttributes(t, e, s) {
            const i = this.getWidth();
            this._applyManipulationCallback(t, (t) => {
                if (t !== this._element && window.innerWidth > t.clientWidth + i) return;
                this._saveInitialAttribute(t, e);
                const n = window.getComputedStyle(t).getPropertyValue(e);
                t.style.setProperty(e, `${s(Number.parseFloat(n))}px`);
            });
        }
        _saveInitialAttribute(t, e) {
            const s = t.style.getPropertyValue(e);
            s && B.setDataAttribute(t, e, s);
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t) => {
                const s = B.getDataAttribute(t, e);
                null !== s ? (B.removeDataAttribute(t, e), t.style.setProperty(e, s)) : t.style.removeProperty(e);
            });
        }
        _applyManipulationCallback(t, e) {
            if (l(t)) e(t);
            else for (const s of Q.find(t, this._element)) e(s);
        }
    }
    const Ne = ".bs.modal",
        Me = `hide${Ne}`,
        Pe = `hidePrevented${Ne}`,
        je = `hidden${Ne}`,
        Fe = `show${Ne}`,
        He = `shown${Ne}`,
        ze = `resize${Ne}`,
        Be = `click.dismiss${Ne}`,
        qe = `mousedown.dismiss${Ne}`,
        Re = `keydown.dismiss${Ne}`,
        We = `click${Ne}.data-api`,
        Qe = "modal-open",
        Ke = "show",
        Ve = "modal-static",
        Xe = { backdrop: !0, focus: !0, keyboard: !0 },
        Ye = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
    class Ue extends R {
        constructor(t, e) {
            super(t, e),
                (this._dialog = Q.findOne(".modal-dialog", this._element)),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                (this._isShown = !1),
                (this._isTransitioning = !1),
                (this._scrollBar = new De()),
                this._addEventListeners();
        }
        static get Default() {
            return Xe;
        }
        static get DefaultType() {
            return Ye;
        }
        static get NAME() {
            return "modal";
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            if (this._isShown || this._isTransitioning) return;
            j.trigger(this._element, Fe, { relatedTarget: t }).defaultPrevented ||
                ((this._isShown = !0), (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(Qe), this._adjustDialog(), this._backdrop.show(() => this._showElement(t)));
        }
        hide() {
            if (!this._isShown || this._isTransitioning) return;
            j.trigger(this._element, Me).defaultPrevented ||
                ((this._isShown = !1), (this._isTransitioning = !0), this._focustrap.deactivate(), this._element.classList.remove(Ke), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
        }
        dispose() {
            j.off(window, Ne), j.off(this._dialog, Ne), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        handleUpdate() {
            this._adjustDialog();
        }
        _initializeBackDrop() {
            return new we({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });
        }
        _initializeFocusTrap() {
            return new Se({ trapElement: this._element });
        }
        _showElement(t) {
            document.body.contains(this._element) || document.body.append(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                (this._element.scrollTop = 0);
            const e = Q.findOne(".modal-body", this._dialog);
            e && (e.scrollTop = 0), f(this._element), this._element.classList.add(Ke);
            this._queueCallback(
                () => {
                    this._config.focus && this._focustrap.activate(), (this._isTransitioning = !1), j.trigger(this._element, He, { relatedTarget: t });
                },
                this._dialog,
                this._isAnimated()
            );
        }
        _addEventListeners() {
            j.on(this._element, Re, (t) => {
                "Escape" === t.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition());
            }),
                j.on(window, ze, () => {
                    this._isShown && !this._isTransitioning && this._adjustDialog();
                }),
                j.on(this._element, qe, (t) => {
                    j.one(this._element, Be, (e) => {
                        this._element === t.target && this._element === e.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
                    });
                });
        }
        _hideModal() {
            (this._element.style.display = "none"),
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._isTransitioning = !1),
                this._backdrop.hide(() => {
                    document.body.classList.remove(Qe), this._resetAdjustments(), this._scrollBar.reset(), j.trigger(this._element, je);
                });
        }
        _isAnimated() {
            return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
            if (j.trigger(this._element, Pe).defaultPrevented) return;
            const t = this._element.scrollHeight > document.documentElement.clientHeight,
                e = this._element.style.overflowY;
            "hidden" === e ||
                this._element.classList.contains(Ve) ||
                (t || (this._element.style.overflowY = "hidden"),
                this._element.classList.add(Ve),
                this._queueCallback(() => {
                    this._element.classList.remove(Ve),
                        this._queueCallback(() => {
                            this._element.style.overflowY = e;
                        }, this._dialog);
                }, this._dialog),
                this._element.focus());
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight,
                e = this._scrollBar.getWidth(),
                s = e > 0;
            if (s && !t) {
                const t = _() ? "paddingLeft" : "paddingRight";
                this._element.style[t] = `${e}px`;
            }
            if (!s && t) {
                const t = _() ? "paddingRight" : "paddingLeft";
                this._element.style[t] = `${e}px`;
            }
        }
        _resetAdjustments() {
            (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
        }
        static jQueryInterface(t, e) {
            return this.each(function () {
                const s = Ue.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === s[t]) throw new TypeError(`No method named "${t}"`);
                    s[t](e);
                }
            });
        }
    }
    j.on(document, We, '[data-bs-toggle="modal"]', function (t) {
        const e = Q.getElementFromSelector(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
            j.one(e, Fe, (t) => {
                t.defaultPrevented ||
                    j.one(e, je, () => {
                        h(this) && this.focus();
                    });
            });
        const s = Q.findOne(".modal.show");
        s && Ue.getInstance(s).hide();
        Ue.getOrCreateInstance(e).toggle(this);
    }),
        K(Ue),
        b(Ue);
    const Ge = ".bs.offcanvas",
        Je = ".data-api",
        Ze = `load${Ge}${Je}`,
        ts = "show",
        es = "showing",
        ss = "hiding",
        is = ".offcanvas.show",
        ns = `show${Ge}`,
        os = `shown${Ge}`,
        rs = `hide${Ge}`,
        as = `hidePrevented${Ge}`,
        ls = `hidden${Ge}`,
        cs = `resize${Ge}`,
        hs = `click${Ge}${Je}`,
        ds = `keydown.dismiss${Ge}`,
        us = { backdrop: !0, keyboard: !0, scroll: !1 },
        gs = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
    class fs extends R {
        constructor(t, e) {
            super(t, e), (this._isShown = !1), (this._backdrop = this._initializeBackDrop()), (this._focustrap = this._initializeFocusTrap()), this._addEventListeners();
        }
        static get Default() {
            return us;
        }
        static get DefaultType() {
            return gs;
        }
        static get NAME() {
            return "offcanvas";
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            if (this._isShown) return;
            if (j.trigger(this._element, ns, { relatedTarget: t }).defaultPrevented) return;
            (this._isShown = !0), this._backdrop.show(), this._config.scroll || new De().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(es);
            this._queueCallback(
                () => {
                    (this._config.scroll && !this._config.backdrop) || this._focustrap.activate(), this._element.classList.add(ts), this._element.classList.remove(es), j.trigger(this._element, os, { relatedTarget: t });
                },
                this._element,
                !0
            );
        }
        hide() {
            if (!this._isShown) return;
            if (j.trigger(this._element, rs).defaultPrevented) return;
            this._focustrap.deactivate(), this._element.blur(), (this._isShown = !1), this._element.classList.add(ss), this._backdrop.hide();
            this._queueCallback(
                () => {
                    this._element.classList.remove(ts, ss), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new De().reset(), j.trigger(this._element, ls);
                },
                this._element,
                !0
            );
        }
        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        _initializeBackDrop() {
            const t = Boolean(this._config.backdrop);
            return new we({
                className: "offcanvas-backdrop",
                isVisible: t,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: t
                    ? () => {
                          "static" !== this._config.backdrop ? this.hide() : j.trigger(this._element, as);
                      }
                    : null,
            });
        }
        _initializeFocusTrap() {
            return new Se({ trapElement: this._element });
        }
        _addEventListeners() {
            j.on(this._element, ds, (t) => {
                "Escape" === t.key && (this._config.keyboard ? this.hide() : j.trigger(this._element, as));
            });
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = fs.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    j.on(document, hs, '[data-bs-toggle="offcanvas"]', function (t) {
        const e = Q.getElementFromSelector(this);
        if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), d(this))) return;
        j.one(e, ls, () => {
            h(this) && this.focus();
        });
        const s = Q.findOne(is);
        s && s !== e && fs.getInstance(s).hide();
        fs.getOrCreateInstance(e).toggle(this);
    }),
        j.on(window, Ze, () => {
            for (const t of Q.find(is)) fs.getOrCreateInstance(t).show();
        }),
        j.on(window, cs, () => {
            for (const t of Q.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(t).position && fs.getOrCreateInstance(t).hide();
        }),
        K(fs),
        b(fs);
    const ps = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: [],
        },
        ms = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        _s = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
        bs = (t, e) => {
            const s = t.nodeName.toLowerCase();
            return e.includes(s) ? !ms.has(s) || Boolean(_s.test(t.nodeValue)) : e.filter((t) => t instanceof RegExp).some((t) => t.test(s));
        };
    const vs = { allowList: ps, content: {}, extraClass: "", html: !1, sanitize: !0, sanitizeFn: null, template: "<div></div>" },
        ys = { allowList: "object", content: "object", extraClass: "(string|function)", html: "boolean", sanitize: "boolean", sanitizeFn: "(null|function)", template: "string" },
        ws = { entry: "(string|element|function|null)", selector: "(string|element)" };
    class As extends q {
        constructor(t) {
            super(), (this._config = this._getConfig(t));
        }
        static get Default() {
            return vs;
        }
        static get DefaultType() {
            return ys;
        }
        static get NAME() {
            return "TemplateFactory";
        }
        getContent() {
            return Object.values(this._config.content)
                .map((t) => this._resolvePossibleFunction(t))
                .filter(Boolean);
        }
        hasContent() {
            return this.getContent().length > 0;
        }
        changeContent(t) {
            return this._checkContent(t), (this._config.content = { ...this._config.content, ...t }), this;
        }
        toHtml() {
            const t = document.createElement("div");
            t.innerHTML = this._maybeSanitize(this._config.template);
            for (const [e, s] of Object.entries(this._config.content)) this._setContent(t, s, e);
            const e = t.children[0],
                s = this._resolvePossibleFunction(this._config.extraClass);
            return s && e.classList.add(...s.split(" ")), e;
        }
        _typeCheckConfig(t) {
            super._typeCheckConfig(t), this._checkContent(t.content);
        }
        _checkContent(t) {
            for (const [e, s] of Object.entries(t)) super._typeCheckConfig({ selector: e, entry: s }, ws);
        }
        _setContent(t, e, s) {
            const i = Q.findOne(s, t);
            i && ((e = this._resolvePossibleFunction(e)) ? (l(e) ? this._putElementInTemplate(c(e), i) : this._config.html ? (i.innerHTML = this._maybeSanitize(e)) : (i.textContent = e)) : i.remove());
        }
        _maybeSanitize(t) {
            return this._config.sanitize
                ? (function (t, e, s) {
                      if (!t.length) return t;
                      if (s && "function" == typeof s) return s(t);
                      const i = new window.DOMParser().parseFromString(t, "text/html"),
                          n = [].concat(...i.body.querySelectorAll("*"));
                      for (const t of n) {
                          const s = t.nodeName.toLowerCase();
                          if (!Object.keys(e).includes(s)) {
                              t.remove();
                              continue;
                          }
                          const i = [].concat(...t.attributes),
                              n = [].concat(e["*"] || [], e[s] || []);
                          for (const e of i) bs(e, n) || t.removeAttribute(e.nodeName);
                      }
                      return i.body.innerHTML;
                  })(t, this._config.allowList, this._config.sanitizeFn)
                : t;
        }
        _resolvePossibleFunction(t) {
            return v(t, [this]);
        }
        _putElementInTemplate(t, e) {
            if (this._config.html) return (e.innerHTML = ""), void e.append(t);
            e.textContent = t.textContent;
        }
    }
    const Cs = new Set(["sanitize", "allowList", "sanitizeFn"]),
        $s = "fade",
        Es = "show",
        Ts = ".modal",
        ks = "hide.bs.modal",
        Ss = "hover",
        Is = "focus",
        Ls = { AUTO: "auto", TOP: "top", RIGHT: _() ? "left" : "right", BOTTOM: "bottom", LEFT: _() ? "right" : "left" },
        xs = {
            allowList: ps,
            animation: !0,
            boundary: "clippingParents",
            container: !1,
            customClass: "",
            delay: 0,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            html: !1,
            offset: [0, 6],
            placement: "top",
            popperConfig: null,
            sanitize: !0,
            sanitizeFn: null,
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            title: "",
            trigger: "hover focus",
        },
        Os = {
            allowList: "object",
            animation: "boolean",
            boundary: "(string|element)",
            container: "(string|element|boolean)",
            customClass: "(string|function)",
            delay: "(number|object)",
            fallbackPlacements: "array",
            html: "boolean",
            offset: "(array|string|function)",
            placement: "(string|function)",
            popperConfig: "(null|object|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            selector: "(string|boolean)",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
        };
    class Ds extends R {
        constructor(t, e) {
            if (void 0 === s) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t, e),
                (this._isEnabled = !0),
                (this._timeout = 0),
                (this._isHovered = null),
                (this._activeTrigger = {}),
                (this._popper = null),
                (this._templateFactory = null),
                (this._newContent = null),
                (this.tip = null),
                this._setListeners(),
                this._config.selector || this._fixTitle();
        }
        static get Default() {
            return xs;
        }
        static get DefaultType() {
            return Os;
        }
        static get NAME() {
            return "tooltip";
        }
        enable() {
            this._isEnabled = !0;
        }
        disable() {
            this._isEnabled = !1;
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled;
        }
        toggle() {
            this._isEnabled && ((this._activeTrigger.click = !this._activeTrigger.click), this._isShown() ? this._leave() : this._enter());
        }
        dispose() {
            clearTimeout(this._timeout),
                j.off(this._element.closest(Ts), ks, this._hideModalHandler),
                this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")),
                this._disposePopper(),
                super.dispose();
        }
        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled) return;
            const t = j.trigger(this._element, this.constructor.eventName("show")),
                e = (u(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (t.defaultPrevented || !e) return;
            this._disposePopper();
            const s = this._getTipElement();
            this._element.setAttribute("aria-describedby", s.getAttribute("id"));
            const { container: i } = this._config;
            if (
                (this._element.ownerDocument.documentElement.contains(this.tip) || (i.append(s), j.trigger(this._element, this.constructor.eventName("inserted"))),
                (this._popper = this._createPopper(s)),
                s.classList.add(Es),
                "ontouchstart" in document.documentElement)
            )
                for (const t of [].concat(...document.body.children)) j.on(t, "mouseover", g);
            this._queueCallback(
                () => {
                    j.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), (this._isHovered = !1);
                },
                this.tip,
                this._isAnimated()
            );
        }
        hide() {
            if (!this._isShown()) return;
            if (j.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) return;
            if ((this._getTipElement().classList.remove(Es), "ontouchstart" in document.documentElement)) for (const t of [].concat(...document.body.children)) j.off(t, "mouseover", g);
            (this._activeTrigger.click = !1), (this._activeTrigger[Is] = !1), (this._activeTrigger[Ss] = !1), (this._isHovered = null);
            this._queueCallback(
                () => {
                    this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), j.trigger(this._element, this.constructor.eventName("hidden")));
                },
                this.tip,
                this._isAnimated()
            );
        }
        update() {
            this._popper && this._popper.update();
        }
        _isWithContent() {
            return Boolean(this._getTitle());
        }
        _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
        }
        _createTipElement(t) {
            const e = this._getTemplateFactory(t).toHtml();
            if (!e) return null;
            e.classList.remove($s, Es), e.classList.add(`bs-${this.constructor.NAME}-auto`);
            const s = ((t) => {
                do {
                    t += Math.floor(1e6 * Math.random());
                } while (document.getElementById(t));
                return t;
            })(this.constructor.NAME).toString();
            return e.setAttribute("id", s), this._isAnimated() && e.classList.add($s), e;
        }
        setContent(t) {
            (this._newContent = t), this._isShown() && (this._disposePopper(), this.show());
        }
        _getTemplateFactory(t) {
            return (
                this._templateFactory ? this._templateFactory.changeContent(t) : (this._templateFactory = new As({ ...this._config, content: t, extraClass: this._resolvePossibleFunction(this._config.customClass) })), this._templateFactory
            );
        }
        _getContentForTemplate() {
            return { ".tooltip-inner": this._getTitle() };
        }
        _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
        }
        _initializeOnDelegatedTarget(t) {
            return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
        }
        _isAnimated() {
            return this._config.animation || (this.tip && this.tip.classList.contains($s));
        }
        _isShown() {
            return this.tip && this.tip.classList.contains(Es);
        }
        _createPopper(t) {
            const e = v(this._config.placement, [this, t, this._element]),
                i = Ls[e.toUpperCase()];
            return s.createPopper(this._element, t, this._getPopperConfig(i));
        }
        _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t ? t.split(",").map((t) => Number.parseInt(t, 10)) : "function" == typeof t ? (e) => t(e, this._element) : t;
        }
        _resolvePossibleFunction(t) {
            return v(t, [this._element]);
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [
                    { name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } },
                    { name: "offset", options: { offset: this._getOffset() } },
                    { name: "preventOverflow", options: { boundary: this._config.boundary } },
                    { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } },
                    {
                        name: "preSetPlacement",
                        enabled: !0,
                        phase: "beforeMain",
                        fn: (t) => {
                            this._getTipElement().setAttribute("data-popper-placement", t.state.placement);
                        },
                    },
                ],
            };
            return { ...e, ...v(this._config.popperConfig, [e]) };
        }
        _setListeners() {
            const t = this._config.trigger.split(" ");
            for (const e of t)
                if ("click" === e)
                    j.on(this._element, this.constructor.eventName("click"), this._config.selector, (t) => {
                        this._initializeOnDelegatedTarget(t).toggle();
                    });
                else if ("manual" !== e) {
                    const t = e === Ss ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                        s = e === Ss ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                    j.on(this._element, t, this._config.selector, (t) => {
                        const e = this._initializeOnDelegatedTarget(t);
                        (e._activeTrigger["focusin" === t.type ? Is : Ss] = !0), e._enter();
                    }),
                        j.on(this._element, s, this._config.selector, (t) => {
                            const e = this._initializeOnDelegatedTarget(t);
                            (e._activeTrigger["focusout" === t.type ? Is : Ss] = e._element.contains(t.relatedTarget)), e._leave();
                        });
                }
            (this._hideModalHandler = () => {
                this._element && this.hide();
            }),
                j.on(this._element.closest(Ts), ks, this._hideModalHandler);
        }
        _fixTitle() {
            const t = this._element.getAttribute("title");
            t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"));
        }
        _enter() {
            this._isShown() || this._isHovered
                ? (this._isHovered = !0)
                : ((this._isHovered = !0),
                  this._setTimeout(() => {
                      this._isHovered && this.show();
                  }, this._config.delay.show));
        }
        _leave() {
            this._isWithActiveTrigger() ||
                ((this._isHovered = !1),
                this._setTimeout(() => {
                    this._isHovered || this.hide();
                }, this._config.delay.hide));
        }
        _setTimeout(t, e) {
            clearTimeout(this._timeout), (this._timeout = setTimeout(t, e));
        }
        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0);
        }
        _getConfig(t) {
            const e = B.getDataAttributes(this._element);
            for (const t of Object.keys(e)) Cs.has(t) && delete e[t];
            return (t = { ...e, ...("object" == typeof t && t ? t : {}) }), (t = this._mergeConfigObj(t)), (t = this._configAfterMerge(t)), this._typeCheckConfig(t), t;
        }
        _configAfterMerge(t) {
            return (
                (t.container = !1 === t.container ? document.body : c(t.container)),
                "number" == typeof t.delay && (t.delay = { show: t.delay, hide: t.delay }),
                "number" == typeof t.title && (t.title = t.title.toString()),
                "number" == typeof t.content && (t.content = t.content.toString()),
                t
            );
        }
        _getDelegateConfig() {
            const t = {};
            for (const [e, s] of Object.entries(this._config)) this.constructor.Default[e] !== s && (t[e] = s);
            return (t.selector = !1), (t.trigger = "manual"), t;
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(), (this._popper = null)), this.tip && (this.tip.remove(), (this.tip = null));
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Ds.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    b(Ds);
    const Ns = {
            ...Ds.Default,
            content: "",
            offset: [0, 8],
            placement: "right",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
            trigger: "click",
        },
        Ms = { ...Ds.DefaultType, content: "(null|string|element|function)" };
    class Ps extends Ds {
        static get Default() {
            return Ns;
        }
        static get DefaultType() {
            return Ms;
        }
        static get NAME() {
            return "popover";
        }
        _isWithContent() {
            return this._getTitle() || this._getContent();
        }
        _getContentForTemplate() {
            return { ".popover-header": this._getTitle(), ".popover-body": this._getContent() };
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content);
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Ps.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    b(Ps);
    const js = ".bs.scrollspy",
        Fs = `activate${js}`,
        Hs = `click${js}`,
        zs = `load${js}.data-api`,
        Bs = "active",
        qs = "[href]",
        Rs = ".nav-link",
        Ws = `${Rs}, .nav-item > ${Rs}, .list-group-item`,
        Qs = { offset: null, rootMargin: "0px 0px -25%", smoothScroll: !1, target: null, threshold: [0.1, 0.5, 1] },
        Ks = { offset: "(number|null)", rootMargin: "string", smoothScroll: "boolean", target: "element", threshold: "array" };
    class Vs extends R {
        constructor(t, e) {
            super(t, e),
                (this._targetLinks = new Map()),
                (this._observableSections = new Map()),
                (this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element),
                (this._activeTarget = null),
                (this._observer = null),
                (this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
                this.refresh();
        }
        static get Default() {
            return Qs;
        }
        static get DefaultType() {
            return Ks;
        }
        static get NAME() {
            return "scrollspy";
        }
        refresh() {
            this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : (this._observer = this._getNewObserver());
            for (const t of this._observableSections.values()) this._observer.observe(t);
        }
        dispose() {
            this._observer.disconnect(), super.dispose();
        }
        _configAfterMerge(t) {
            return (t.target = c(t.target) || document.body), (t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin), "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map((t) => Number.parseFloat(t))), t;
        }
        _maybeEnableSmoothScroll() {
            this._config.smoothScroll &&
                (j.off(this._config.target, Hs),
                j.on(this._config.target, Hs, qs, (t) => {
                    const e = this._observableSections.get(t.target.hash);
                    if (e) {
                        t.preventDefault();
                        const s = this._rootElement || window,
                            i = e.offsetTop - this._element.offsetTop;
                        if (s.scrollTo) return void s.scrollTo({ top: i, behavior: "smooth" });
                        s.scrollTop = i;
                    }
                }));
        }
        _getNewObserver() {
            const t = { root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin };
            return new IntersectionObserver((t) => this._observerCallback(t), t);
        }
        _observerCallback(t) {
            const e = (t) => this._targetLinks.get(`#${t.target.id}`),
                s = (t) => {
                    (this._previousScrollData.visibleEntryTop = t.target.offsetTop), this._process(e(t));
                },
                i = (this._rootElement || document.documentElement).scrollTop,
                n = i >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = i;
            for (const o of t) {
                if (!o.isIntersecting) {
                    (this._activeTarget = null), this._clearActiveClass(e(o));
                    continue;
                }
                const t = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                if (n && t) {
                    if ((s(o), !i)) return;
                } else n || t || s(o);
            }
        }
        _initializeTargetsAndObservables() {
            (this._targetLinks = new Map()), (this._observableSections = new Map());
            const t = Q.find(qs, this._config.target);
            for (const e of t) {
                if (!e.hash || d(e)) continue;
                const t = Q.findOne(decodeURI(e.hash), this._element);
                h(t) && (this._targetLinks.set(decodeURI(e.hash), e), this._observableSections.set(e.hash, t));
            }
        }
        _process(t) {
            this._activeTarget !== t && (this._clearActiveClass(this._config.target), (this._activeTarget = t), t.classList.add(Bs), this._activateParents(t), j.trigger(this._element, Fs, { relatedTarget: t }));
        }
        _activateParents(t) {
            if (t.classList.contains("dropdown-item")) Q.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(Bs);
            else for (const e of Q.parents(t, ".nav, .list-group")) for (const t of Q.prev(e, Ws)) t.classList.add(Bs);
        }
        _clearActiveClass(t) {
            t.classList.remove(Bs);
            const e = Q.find(`${qs}.${Bs}`, t);
            for (const t of e) t.classList.remove(Bs);
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Vs.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    j.on(window, zs, () => {
        for (const t of Q.find('[data-bs-spy="scroll"]')) Vs.getOrCreateInstance(t);
    }),
        b(Vs);
    const Xs = ".bs.tab",
        Ys = `hide${Xs}`,
        Us = `hidden${Xs}`,
        Gs = `show${Xs}`,
        Js = `shown${Xs}`,
        Zs = `click${Xs}`,
        ti = `keydown${Xs}`,
        ei = `load${Xs}`,
        si = "ArrowLeft",
        ii = "ArrowRight",
        ni = "ArrowUp",
        oi = "ArrowDown",
        ri = "Home",
        ai = "End",
        li = "active",
        ci = "fade",
        hi = "show",
        di = ".dropdown-toggle",
        ui = `:not(${di})`,
        gi = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        fi = `${`.nav-link${ui}, .list-group-item${ui}, [role="tab"]${ui}`}, ${gi}`,
        pi = `.${li}[data-bs-toggle="tab"], .${li}[data-bs-toggle="pill"], .${li}[data-bs-toggle="list"]`;
    class mi extends R {
        constructor(t) {
            super(t), (this._parent = this._element.closest('.list-group, .nav, [role="tablist"]')), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), j.on(this._element, ti, (t) => this._keydown(t)));
        }
        static get NAME() {
            return "tab";
        }
        show() {
            const t = this._element;
            if (this._elemIsActive(t)) return;
            const e = this._getActiveElem(),
                s = e ? j.trigger(e, Ys, { relatedTarget: t }) : null;
            j.trigger(t, Gs, { relatedTarget: e }).defaultPrevented || (s && s.defaultPrevented) || (this._deactivate(e, t), this._activate(t, e));
        }
        _activate(t, e) {
            if (!t) return;
            t.classList.add(li), this._activate(Q.getElementFromSelector(t));
            this._queueCallback(
                () => {
                    "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), j.trigger(t, Js, { relatedTarget: e })) : t.classList.add(hi);
                },
                t,
                t.classList.contains(ci)
            );
        }
        _deactivate(t, e) {
            if (!t) return;
            t.classList.remove(li), t.blur(), this._deactivate(Q.getElementFromSelector(t));
            this._queueCallback(
                () => {
                    "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), j.trigger(t, Us, { relatedTarget: e })) : t.classList.remove(hi);
                },
                t,
                t.classList.contains(ci)
            );
        }
        _keydown(t) {
            if (![si, ii, ni, oi, ri, ai].includes(t.key)) return;
            t.stopPropagation(), t.preventDefault();
            const e = this._getChildren().filter((t) => !d(t));
            let s;
            if ([ri, ai].includes(t.key)) s = e[t.key === ri ? 0 : e.length - 1];
            else {
                const i = [ii, oi].includes(t.key);
                s = w(e, t.target, i, !0);
            }
            s && (s.focus({ preventScroll: !0 }), mi.getOrCreateInstance(s).show());
        }
        _getChildren() {
            return Q.find(fi, this._parent);
        }
        _getActiveElem() {
            return this._getChildren().find((t) => this._elemIsActive(t)) || null;
        }
        _setInitialAttributes(t, e) {
            this._setAttributeIfNotExists(t, "role", "tablist");
            for (const t of e) this._setInitialAttributesOnChild(t);
        }
        _setInitialAttributesOnChild(t) {
            t = this._getInnerElement(t);
            const e = this._elemIsActive(t),
                s = this._getOuterElement(t);
            t.setAttribute("aria-selected", e),
                s !== t && this._setAttributeIfNotExists(s, "role", "presentation"),
                e || t.setAttribute("tabindex", "-1"),
                this._setAttributeIfNotExists(t, "role", "tab"),
                this._setInitialAttributesOnTargetPanel(t);
        }
        _setInitialAttributesOnTargetPanel(t) {
            const e = Q.getElementFromSelector(t);
            e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `${t.id}`));
        }
        _toggleDropDown(t, e) {
            const s = this._getOuterElement(t);
            if (!s.classList.contains("dropdown")) return;
            const i = (t, i) => {
                const n = Q.findOne(t, s);
                n && n.classList.toggle(i, e);
            };
            i(di, li), i(".dropdown-menu", hi), s.setAttribute("aria-expanded", e);
        }
        _setAttributeIfNotExists(t, e, s) {
            t.hasAttribute(e) || t.setAttribute(e, s);
        }
        _elemIsActive(t) {
            return t.classList.contains(li);
        }
        _getInnerElement(t) {
            return t.matches(fi) ? t : Q.findOne(fi, t);
        }
        _getOuterElement(t) {
            return t.closest(".nav-item, .list-group-item") || t;
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = mi.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    j.on(document, Zs, gi, function (t) {
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), d(this) || mi.getOrCreateInstance(this).show();
    }),
        j.on(window, ei, () => {
            for (const t of Q.find(pi)) mi.getOrCreateInstance(t);
        }),
        b(mi);
    const _i = ".bs.toast",
        bi = `mouseover${_i}`,
        vi = `mouseout${_i}`,
        yi = `focusin${_i}`,
        wi = `focusout${_i}`,
        Ai = `hide${_i}`,
        Ci = `hidden${_i}`,
        $i = `show${_i}`,
        Ei = `shown${_i}`,
        Ti = "hide",
        ki = "show",
        Si = "showing",
        Ii = { animation: "boolean", autohide: "boolean", delay: "number" },
        Li = { animation: !0, autohide: !0, delay: 5e3 };
    class xi extends R {
        constructor(t, e) {
            super(t, e), (this._timeout = null), (this._hasMouseInteraction = !1), (this._hasKeyboardInteraction = !1), this._setListeners();
        }
        static get Default() {
            return Li;
        }
        static get DefaultType() {
            return Ii;
        }
        static get NAME() {
            return "toast";
        }
        show() {
            if (j.trigger(this._element, $i).defaultPrevented) return;
            this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
            this._element.classList.remove(Ti),
                f(this._element),
                this._element.classList.add(ki, Si),
                this._queueCallback(
                    () => {
                        this._element.classList.remove(Si), j.trigger(this._element, Ei), this._maybeScheduleHide();
                    },
                    this._element,
                    this._config.animation
                );
        }
        hide() {
            if (!this.isShown()) return;
            if (j.trigger(this._element, Ai).defaultPrevented) return;
            this._element.classList.add(Si),
                this._queueCallback(
                    () => {
                        this._element.classList.add(Ti), this._element.classList.remove(Si, ki), j.trigger(this._element, Ci);
                    },
                    this._element,
                    this._config.animation
                );
        }
        dispose() {
            this._clearTimeout(), this.isShown() && this._element.classList.remove(ki), super.dispose();
        }
        isShown() {
            return this._element.classList.contains(ki);
        }
        _maybeScheduleHide() {
            this._config.autohide &&
                (this._hasMouseInteraction ||
                    this._hasKeyboardInteraction ||
                    (this._timeout = setTimeout(() => {
                        this.hide();
                    }, this._config.delay)));
        }
        _onInteraction(t, e) {
            switch (t.type) {
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e;
            }
            if (e) return void this._clearTimeout();
            const s = t.relatedTarget;
            this._element === s || this._element.contains(s) || this._maybeScheduleHide();
        }
        _setListeners() {
            j.on(this._element, bi, (t) => this._onInteraction(t, !0)),
                j.on(this._element, vi, (t) => this._onInteraction(t, !1)),
                j.on(this._element, yi, (t) => this._onInteraction(t, !0)),
                j.on(this._element, wi, (t) => this._onInteraction(t, !1));
        }
        _clearTimeout() {
            clearTimeout(this._timeout), (this._timeout = null);
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = xi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    K(xi), b(xi);
    return { Alert: U, Button: J, Carousel: Lt, Collapse: Wt, Dropdown: pe, Modal: Ue, Offcanvas: fs, Popover: Ps, ScrollSpy: Vs, Tab: mi, Toast: xi, Tooltip: Ds };
}),
    (function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery);
    })(function (t) {
        function e(e, i, n) {
            var o = { content: { message: "object" == typeof i ? i.message : i, title: i.title ? i.title : "", icon: i.icon ? i.icon : "", url: i.url ? i.url : "#", target: i.target ? i.target : "-" } };
            (n = t.extend(!0, {}, o, n)),
                (this.settings = t.extend(!0, {}, s, n)),
                (this._defaults = s),
                "-" === this.settings.content.target && (this.settings.content.target = this.settings.url_target),
                (this.animations = { start: "webkitAnimationStart oanimationstart MSAnimationStart animationstart", end: "webkitAnimationEnd oanimationend MSAnimationEnd animationend" }),
                "number" == typeof this.settings.offset && (this.settings.offset = { x: this.settings.offset, y: this.settings.offset }),
                (this.settings.allow_duplicates ||
                    (!this.settings.allow_duplicates &&
                        !(function (e) {
                            var s = !1;
                            return (
                                t('[data-alret="container"]').each(function (i, n) {
                                    var o = t(n),
                                        r = o.find('[data-alret="title"]').text().trim(),
                                        a = o.find('[data-alret="message"]').html().trim(),
                                        l =
                                            r ===
                                            t("<div>" + e.settings.content.title + "</div>")
                                                .html()
                                                .trim(),
                                        c =
                                            a ===
                                            t("<div>" + e.settings.content.message + "</div>")
                                                .html()
                                                .trim(),
                                        h = o.hasClass("alert-" + e.settings.type);
                                    return l && c && h && (s = !0), !s;
                                }),
                                s
                            );
                        })(this))) &&
                    this.init();
        }
        var s = {
            element: "body",
            position: null,
            type: "info",
            allow_dismiss: !0,
            allow_duplicates: !0,
            newest_on_top: !1,
            showProgressbar: !1,
            placement: { from: "top", align: "right" },
            offset: 20,
            spacing: 10,
            z_index: 1031,
            delay: 5e3,
            timer: 1e3,
            url_target: "_blank",
            mouse_over: null,
            animate: { enter: "animated fadeInDown", exit: "animated fadeOutUp" },
            onShow: null,
            onShown: null,
            onClose: null,
            onClosed: null,
            icon_type: "class",
            template:
                '<div data-alret="container" class="col-10 col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-alret="dismiss">close</button><span data-alret="icon"></span> <span data-alret="title">{1}</span> <span data-alret="message">{2}</span><div class="progress" data-alret="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-alret="url"></a></div>',
        };
        (String.format = function () {
            for (var t = arguments[0], e = 1; e < arguments.length; e++) t = t.replace(RegExp("\\{" + (e - 1) + "\\}", "gm"), arguments[e]);
            return t;
        }),
            t.extend(e.prototype, {
                init: function () {
                    var t = this;
                    this.buildalret(),
                        this.settings.content.icon && this.setIcon(),
                        "#" != this.settings.content.url && this.styleURL(),
                        this.styleDismiss(),
                        this.placement(),
                        this.bind(),
                        (this.alret = {
                            $ele: this.$ele,
                            update: function (e, s) {
                                var i = {};
                                for (var n in ("string" == typeof e ? (i[e] = s) : (i = e), i))
                                    switch (n) {
                                        case "type":
                                            this.$ele.removeClass("alert-" + t.settings.type),
                                                this.$ele.find('[data-alret="progressbar"] > .progress-bar').removeClass("progress-bar-" + t.settings.type),
                                                (t.settings.type = i[n]),
                                                this.$ele
                                                    .addClass("alert-" + i[n])
                                                    .find('[data-alret="progressbar"] > .progress-bar')
                                                    .addClass("progress-bar-" + i[n]);
                                            break;
                                        case "icon":
                                            var o = this.$ele.find('[data-alret="icon"]');
                                            "class" === t.settings.icon_type.toLowerCase() ? o.removeClass(t.settings.content.icon).addClass(i[n]) : (o.is("img") || o.find("img"), o.attr("src", i[n]));
                                            break;
                                        case "progress":
                                            var r = t.settings.delay - t.settings.delay * (i[n] / 100);
                                            this.$ele.data("alret-delay", r),
                                                this.$ele
                                                    .find('[data-alret="progressbar"] > div')
                                                    .attr("aria-valuenow", i[n])
                                                    .css("width", i[n] + "%");
                                            break;
                                        case "url":
                                            this.$ele.find('[data-alret="url"]').attr("href", i[n]);
                                            break;
                                        case "target":
                                            this.$ele.find('[data-alret="url"]').attr("target", i[n]);
                                            break;
                                        default:
                                            this.$ele.find('[data-alret="' + n + '"]').html(i[n]);
                                    }
                                var a = this.$ele.outerHeight() + parseInt(t.settings.spacing) + parseInt(t.settings.offset.y);
                                t.reposition(a);
                            },
                            close: function () {
                                t.close();
                            },
                        });
                },
                buildalret: function () {
                    var e = this.settings.content;
                    (this.$ele = t(String.format(this.settings.template, this.settings.type, e.title, e.message, e.url, e.target))),
                        this.$ele.attr("data-alret-position", this.settings.placement.from + "-" + this.settings.placement.align),
                        this.settings.allow_dismiss || this.$ele.find('[data-alret="dismiss"]').css("display", "none"),
                        ((this.settings.delay <= 0 && !this.settings.showProgressbar) || !this.settings.showProgressbar) && this.$ele.find('[data-alret="progressbar"]').remove();
                },
                setIcon: function () {
                    "class" === this.settings.icon_type.toLowerCase()
                        ? this.$ele.find('[data-alret="icon"]').addClass(this.settings.content.icon)
                        : this.$ele.find('[data-alret="icon"]').is("img")
                        ? this.$ele.find('[data-alret="icon"]').attr("src", this.settings.content.icon)
                        : this.$ele.find('[data-alret="icon"]').append('<img src="' + this.settings.content.icon + '" alt="alret Icon" />');
                },
                styleDismiss: function () {
                    this.$ele.find('[data-alret="dismiss"]').css({ position: "absolute", right: "10px", top: "5px", zIndex: this.settings.z_index + 2 });
                },
                styleURL: function () {
                    this.$ele
                        .find('[data-alret="url"]')
                        .css({
                            backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",
                            height: "100%",
                            left: 0,
                            position: "absolute",
                            top: 0,
                            width: "100%",
                            zIndex: this.settings.z_index + 1,
                        });
                },
                placement: function () {
                    var e = this,
                        s = this.settings.offset.y,
                        i = {
                            display: "inline-block",
                            margin: "0px auto",
                            paddingLeft: "65px",
                            position: this.settings.position ? this.settings.position : "body" === this.settings.element ? "fixed" : "absolute",
                            transition: "all .5s ease-in-out",
                            zIndex: this.settings.z_index,
                        },
                        n = !1,
                        o = this.settings;
                    switch (
                        (t('[data-alret-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])').each(function () {
                            s = Math.max(s, parseInt(t(this).css(o.placement.from)) + parseInt(t(this).outerHeight()) + parseInt(o.spacing));
                        }),
                        !0 === this.settings.newest_on_top && (s = this.settings.offset.y),
                        (i[this.settings.placement.from] = s + "px"),
                        this.settings.placement.align)
                    ) {
                        case "left":
                        case "right":
                            i[this.settings.placement.align] = this.settings.offset.x + "px";
                            break;
                        case "center":
                            (i.left = 0), (i.right = 0);
                    }
                    this.$ele.css(i).addClass(this.settings.animate.enter),
                        t.each(Array("webkit-", "moz-", "o-", "ms-", ""), function (t, s) {
                            e.$ele[0].style[s + "AnimationIterationCount"] = 1;
                        }),
                        t(this.settings.element).append(this.$ele),
                        !0 === this.settings.newest_on_top && ((s = parseInt(s) + parseInt(this.settings.spacing) + this.$ele.outerHeight()), this.reposition(s)),
                        t.isFunction(e.settings.onShow) && e.settings.onShow.call(this.$ele),
                        this.$ele
                            .one(this.animations.start, function () {
                                n = !0;
                            })
                            .one(this.animations.end, function () {
                                e.$ele.removeClass(e.settings.animate.enter), t.isFunction(e.settings.onShown) && e.settings.onShown.call(this);
                            }),
                        setTimeout(function () {
                            n || (t.isFunction(e.settings.onShown) && e.settings.onShown.call(this));
                        }, 600);
                },
                bind: function () {
                    var e = this;
                    if (
                        (this.$ele.find('[data-alret="dismiss"]').on("click", function () {
                            e.close();
                        }),
                        this.$ele
                            .mouseover(function () {
                                t(this).data("data-hover", "true");
                            })
                            .mouseout(function () {
                                t(this).data("data-hover", "false");
                            }),
                        this.$ele.data("data-hover", "false"),
                        this.settings.delay > 0)
                    ) {
                        e.$ele.data("alret-delay", e.settings.delay);
                        var s = setInterval(function () {
                            var t = parseInt(e.$ele.data("alret-delay")) - e.settings.timer;
                            if (("false" === e.$ele.data("data-hover") && "pause" === e.settings.mouse_over) || "pause" != e.settings.mouse_over) {
                                var i = ((e.settings.delay - t) / e.settings.delay) * 100;
                                e.$ele.data("alret-delay", t),
                                    e.$ele
                                        .find('[data-alret="progressbar"] > div')
                                        .attr("aria-valuenow", i)
                                        .css("width", i + "%");
                            }
                            t <= -e.settings.timer && (clearInterval(s), e.close());
                        }, e.settings.timer);
                    }
                },
                close: function () {
                    var e = this,
                        s = parseInt(this.$ele.css(this.settings.placement.from)),
                        i = !1;
                    this.$ele.attr("data-closing", "true").addClass(this.settings.animate.exit),
                        e.reposition(s),
                        t.isFunction(e.settings.onClose) && e.settings.onClose.call(this.$ele),
                        this.$ele
                            .one(this.animations.start, function () {
                                i = !0;
                            })
                            .one(this.animations.end, function () {
                                t(this).remove(), t.isFunction(e.settings.onClosed) && e.settings.onClosed.call(this);
                            }),
                        setTimeout(function () {
                            i || (e.$ele.remove(), e.settings.onClosed && e.settings.onClosed(e.$ele));
                        }, 600);
                },
                reposition: function (e) {
                    var s = this,
                        i = '[data-alret-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])',
                        n = this.$ele.nextAll(i);
                    !0 === this.settings.newest_on_top && (n = this.$ele.prevAll(i)),
                        n.each(function () {
                            t(this).css(s.settings.placement.from, e), (e = parseInt(e) + parseInt(s.settings.spacing) + t(this).outerHeight());
                        });
                },
            }),
            (t.alret = function (t, s) {
                return new e(this, t, s).alret;
            }),
            (t.alretDefaults = function (e) {
                return (s = t.extend(!0, {}, s, e));
            }),
            (t.alretClose = function (e) {
                "warning" === e && (e = "danger"),
                    void 0 === e || "all" === e
                        ? t("[data-alret]").find('[data-alret="dismiss"]').trigger("click")
                        : "success" === e || "info" === e || "warning" === e || "danger" === e
                        ? t(".alert-" + e + "[data-alret]")
                              .find('[data-alret="dismiss"]')
                              .trigger("click")
                        : e
                        ? t(e + "[data-alret]")
                              .find('[data-alret="dismiss"]')
                              .trigger("click")
                        : t('[data-alret-position="' + e + '"]')
                              .find('[data-alret="dismiss"]')
                              .trigger("click");
            }),
            (t.alretCloseExcept = function (e) {
                "warning" === e && (e = "danger"),
                    "success" === e || "info" === e || "warning" === e || "danger" === e
                        ? t("[data-alret]")
                              .not(".alert-" + e)
                              .find('[data-alret="dismiss"]')
                              .trigger("click")
                        : t("[data-alret]").not(e).find('[data-alret="dismiss"]').trigger("click");
            });
    }),
    $(".video-btn").on("click", function () {
        $videoSrc = $(this).data("src");
    }),
    $(".video-btn").click(function () {
        $videoSrc = $(this).data("src");
    }),
    $("#myModal").on("shown.bs.modal", function (t) {
        $("#video").attr("src", $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    }),
    $("#myModal").on("hide.bs.modal", function (t) {
        $("#video").attr("src", $videoSrc);
    });
const el = document.querySelectorAll(".set-colors");
for (let t = 0; t < el.length; t++) {
    let e = $(el[t]).attr("data-setcolor");
    $('[data-setcolor="' + e + '"]').css({ background: e });
}
if ($(".img-cover")[0]) {
    const t = $(".img-cover").attr("src");
    $("body").css({ "background-image": "url('" + t + "')", "background-position": "center", "background-repeat": "no-repeat", "background-size": "cover", "background-attachment": "fixed" });
}
if (
    ($("a.scrollLink").on("click", function (t) {
        t.preventDefault(), $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    }),
    $(window).scroll(function () {
        $(this).scrollTop() >= 50 ? $(".goup").fadeIn(200) : $(".goup").fadeOut(200);
    }),
    $(".goup").on("click", function () {
        $("body,html").animate({ scrollTop: 0 }, 500);
    }),
    $(".navbar-toggler-icon")[0])
) {
    $(".navbar-toggler-icon").wrapInner('<div class="line-menu half start"></div><div class="line-menu"></div><div class="line-menu half end"></div>');
    var wrapperMenu = document.querySelector(".navbar-toggler-icon");
    wrapperMenu.addEventListener("click", function () {
        wrapperMenu.classList.toggle("open");
    });
}
const SetShadow = document.querySelectorAll(".shadow");
for (let t = 0; t < SetShadow.length; t++) {
    const e = SetShadow[t].dataset.shadow;
    $('[data-shadow="' + e + '"]').css({ "box-shadow": " 0 0 8px rgba(0, 0, 0, 0.18), 0 8px 16px rgba(0, 0, 0, 0." + e + ")" });
}
var showChar = 60,
    ellipsestext = "...",
    moretext = "Show more",
    lesstext = "Show less";
/*!
 * Percent-Preloader JS - v1
 * @author JDM Digital - https://jdmdigital.co
 * Copyright (c) 2022
 */
if (
    ($(".text-limit").each(function () {
        var t = $(this).html();
        if (t.length > showChar) {
            var e = t.substring(0, showChar),
                s = t.substring(showChar, t.length - showChar),
                i = e + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + s + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + "</a></span>";
            $(this).html(i);
        }
    }),
    $(".morelink").on("click", function () {
        return $(this).hasClass("less") ? ($(this).removeClass("less"), $(this).html(moretext)) : ($(this).addClass("less"), $(this).html(lesstext)), $(this).parent().prev().toggle(), $(this).prev().toggle(), !1;
    }),
    (function (t) {
        t.extend({
            playSound: function () {
                return t('<audio class="sound-player" autoplay="autoplay" style="display:none;"><source src="' + arguments[0] + '" /><embed src="' + arguments[0] + '" hidden="true" autostart="true" loop="false"/></audio>').appendTo("body");
            },
            stopSound: function () {
                t(".sound-player").remove();
            },
        });
    })(jQuery),
    $(".ripple-effect").on("click", function (e) {
        0 === $(this).find(".ink").length && $(this).prepend("<span class='ink'></span>"),
            (t = $(this).find(".ink")).removeClass("animate"),
            t.height() || t.width() || ((n = Math.max($(this).outerWidth(), $(this).outerHeight())), t.css({ height: n, width: n })),
            (i = e.pageX - $(this).offset().left - t.width() / 2),
            (s = e.pageY - $(this).offset().top - t.height() / 2),
            t.css({ top: s + "px", left: i + "px" }).addClass("animate");
    }),
    $("div").hasClass("preloader"))
)
    var counting = setInterval(function () {
        var t = document.getElementById("percentage"),
            e = parseInt(t.innerHTML),
            s = 99 - e,
            i = document.getElementById("loader-progress");
        (t.innerHTML = ++e),
            e > 89 &&
                ((t.innerHTML = 90),
                window.jQuery &&
                    ((t.innerHTML = 95),
                    "interactive" == document.readyState && (t.innerHTML = 99),
                    "complete" == document.readyState &&
                        (clearInterval(counting),
                        (t.innerHTML = 100),
                        jQuery("body").toggleClass("page-loaded"),
                        setTimeout(function () {
                            jQuery("nav").css("visibility", "visible");
                        }, 880)))),
            (i.style.transition = "0.15s"),
            (i.style.width = s + "%");
    }, 20);
