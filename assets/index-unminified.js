this.wp = this.wp || {}, this.wp.editor = function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    return n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 326)
}([function(e, t) {
    ! function() {
        e.exports = this.wp.element
    }()
}, function(e, t) {
    ! function() {
        e.exports = this.lodash
    }()
}, function(e, t) {
    ! function() {
        e.exports = this.wp.i18n
    }()
}, function(e, t) {
    ! function() {
        e.exports = this.wp.components
    }()
}, function(e, t) {
    ! function() {
        e.exports = this.wp.data
    }()
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r, o = n(74),
        i = (r = o) && r.__esModule ? r : {
            default: r
        };
    t.default = i.default || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r, o = n(87),
        i = (r = o) && r.__esModule ? r : {
            default: r
        };
    t.default = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, i.default)(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }()
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = s(n(130)),
        o = s(n(111)),
        i = s(n(73));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.default = function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, i.default)(t)));
        e.prototype = (0, o.default)(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (r.default ? (0, r.default)(e, t) : e.__proto__ = t)
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r, o = n(73),
        i = (r = o) && r.__esModule ? r : {
            default: r
        };
    t.default = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== (void 0 === t ? "undefined" : (0, i.default)(t)) && "function" != typeof t ? e : t
    }
}, function(e, t, n) {
    e.exports = {
        default: n(132),
        __esModule: !0
    }
}, , , function(e, t) {
    ! function() {
        e.exports = this.wp.blocks
    }()
}, function(e, t) {
    var n = e.exports = {
        version: "2.5.3"
    };
    "number" == typeof __e && (__e = n)
}, function(e, t) {
    ! function() {
        e.exports = this.React
    }()
}, function(e, t, n) {
    var r;
    /*!
      Copyright (c) 2016 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
    /*!
      Copyright (c) 2016 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
    ! function() {
        "use strict";
        var n = {}.hasOwnProperty;

        function o() {
            for (var e = [], t = 0; t < arguments.length; t++) {
                var r = arguments[t];
                if (r) {
                    var i = typeof r;
                    if ("string" === i || "number" === i) e.push(r);
                    else if (Array.isArray(r)) e.push(o.apply(null, r));
                    else if ("object" === i)
                        for (var s in r) n.call(r, s) && r[s] && e.push(s)
                }
            }
            return e.join(" ")
        }
        void 0 !== e && e.exports ? e.exports = o : void 0 === (r = function() {
            return o
        }.apply(t, [])) || (e.exports = r)
    }()
}, function(e, t, n) {
    var r = n(47)("wks"),
        o = n(39),
        i = n(18).Symbol,
        s = "function" == typeof i;
    (e.exports = function(e) {
        return r[e] || (r[e] = s && i[e] || (s ? i : o)("Symbol." + e))
    }).store = r
}, function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r, o = n(63),
        i = (r = o) && r.__esModule ? r : {
            default: r
        };
    t.default = function(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return (0, i.default)(e)
    }
}, function(e, t, n) {
    var r = n(18),
        o = n(14),
        i = n(34),
        s = n(28),
        c = function(e, t, n) {
            var a, l, u, d = e & c.F,
                p = e & c.G,
                f = e & c.S,
                h = e & c.P,
                b = e & c.B,
                m = e & c.W,
                v = p ? o : o[t] || (o[t] = {}),
                g = v.prototype,
                O = p ? r : f ? r[t] : (r[t] || {}).prototype;
            for (a in p && (n = t), n)(l = !d && O && void 0 !== O[a]) && a in v || (u = l ? O[a] : n[a], v[a] = p && "function" != typeof O[a] ? n[a] : b && l ? i(u, r) : m && O[a] == u ? function(e) {
                var t = function(t, n, r) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t, n)
                        }
                        return new e(t, n, r)
                    }
                    return e.apply(this, arguments)
                };
                return t.prototype = e.prototype, t
            }(u) : h && "function" == typeof u ? i(Function.call, u) : u, h && ((v.virtual || (v.virtual = {}))[a] = u, e & c.R && g && !g[a] && s(g, a, u)))
        };
    c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e.exports = c
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r, o = n(87),
        i = (r = o) && r.__esModule ? r : {
            default: r
        };
    t.default = function(e, t, n) {
        return t in e ? (0, i.default)(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
}, function(e, t) {
    ! function() {
        e.exports = this.wp.keycodes
    }()
}, function(e, t, n) {
    e.exports = !n(31)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t, n) {
    var r = n(25),
        o = n(60),
        i = n(50),
        s = Object.defineProperty;
    t.f = n(23) ? Object.defineProperty : function(e, t, n) {
        if (r(e), t = i(t, !0), r(n), o) try {
            return s(e, t, n)
        } catch (e) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e
    }
}, function(e, t, n) {
    var r = n(26);
    e.exports = function(e) {
        if (!r(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return n.call(e, t)
    }
}, function(e, t, n) {
    var r = n(24),
        o = n(33);
    e.exports = n(23) ? function(e, t, n) {
        return r.f(e, t, o(1, n))
    } : function(e, t, n) {
        return e[t] = n, e
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }
}, function(e, t, n) {
    var r = n(56),
        o = n(42);
    e.exports = function(e) {
        return r(o(e))
    }
}, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function(e, t) {
    e.exports = {}
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}, function(e, t, n) {
    var r = n(53);
    e.exports = function(e, t, n) {
        if (r(e), void 0 === t) return e;
        switch (n) {
            case 1:
                return function(n) {
                    return e.call(t, n)
                };
            case 2:
                return function(n, r) {
                    return e.call(t, n, r)
                };
            case 3:
                return function(n, r, o) {
                    return e.call(t, n, r, o)
                }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}, function(e, t) {
    ! function() {
        e.exports = this.wp.dom
    }()
}, function(e, t) {
    ! function() {
        e.exports = this.wp.hooks
    }()
}, function(e, t, n) {
    var r = n(59),
        o = n(44);
    e.exports = Object.keys || function(e) {
        return r(e, o)
    }
}, function(e, t, n) {
    var r = n(42);
    e.exports = function(e) {
        return Object(r(e))
    }
}, function(e, t) {
    var n = 0,
        r = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
    }
}, function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
        return n.call(e).slice(8, -1)
    }
}, function(e, t) {
    var n = Math.ceil,
        r = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
    }
}, function(e, t) {
    e.exports = function(e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function(e, t, n) {
    var r = n(47)("keys"),
        o = n(39);
    e.exports = function(e) {
        return r[e] || (r[e] = o(e))
    }
}, function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(e, t, n) {
    "use strict";
    var r = n(89)(!0);
    n(67)(String, "String", function(e) {
        this._t = String(e), this._i = 0
    }, function() {
        var e, t = this._t,
            n = this._i;
        return n >= t.length ? {
            value: void 0,
            done: !0
        } : (e = r(t, n), this._i += e.length, {
            value: e,
            done: !1
        })
    })
}, function(e, t) {
    t.f = {}.propertyIsEnumerable
}, function(e, t, n) {
    var r = n(18),
        o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    e.exports = function(e) {
        return o[e] || (o[e] = {})
    }
}, function(e, t, n) {
    var r = n(24).f,
        o = n(27),
        i = n(17)("toStringTag");
    e.exports = function(e, t, n) {
        e && !o(e = n ? e : e.prototype, i) && r(e, i, {
            configurable: !0,
            value: t
        })
    }
}, function(e, t, n) {
    var r = n(41),
        o = Math.min;
    e.exports = function(e) {
        return e > 0 ? o(r(e), 9007199254740991) : 0
    }
}, function(e, t, n) {
    var r = n(26);
    e.exports = function(e, t) {
        if (!r(e)) return e;
        var n, o;
        if (t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o;
        if ("function" == typeof(n = e.valueOf) && !r(o = n.call(e))) return o;
        if (!t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(e, t, n) {
    var r = n(26),
        o = n(18).document,
        i = r(o) && r(o.createElement);
    e.exports = function(e) {
        return i ? o.createElement(e) : {}
    }
}, function(e, t) {
    e.exports = !0
}, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = i(n(138)),
        o = i(n(96));

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.default = function() {
        return function(e, t) {
            if (Array.isArray(e)) return e;
            if ((0, r.default)(Object(e))) return function(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    s = void 0;
                try {
                    for (var c, a = (0, o.default)(e); !(r = (c = a.next()).done) && (n.push(c.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, s = e
                } finally {
                    try {
                        !r && a.return && a.return()
                    } finally {
                        if (i) throw s
                    }
                }
                return n
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
}, function(e, t, n) {
    var r = n(25),
        o = n(82),
        i = n(44),
        s = n(43)("IE_PROTO"),
        c = function() {},
        a = function() {
            var e, t = n(51)("iframe"),
                r = i.length;
            for (t.style.display = "none", n(77).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), a = e.F; r--;) delete a.prototype[i[r]];
            return a()
        };
    e.exports = Object.create || function(e, t) {
        var n;
        return null !== e ? (c.prototype = r(e), n = new c, c.prototype = null, n[s] = e) : n = a(), void 0 === t ? n : o(n, t)
    }
}, function(e, t, n) {
    var r = n(40);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == r(e) ? e.split("") : Object(e)
    }
}, , function(e, t) {
    t.f = Object.getOwnPropertySymbols
}, function(e, t, n) {
    var r = n(27),
        o = n(30),
        i = n(76)(!1),
        s = n(43)("IE_PROTO");
    e.exports = function(e, t) {
        var n, c = o(e),
            a = 0,
            l = [];
        for (n in c) n != s && r(c, n) && l.push(n);
        for (; t.length > a;) r(c, n = t[a++]) && (~i(l, n) || l.push(n));
        return l
    }
}, function(e, t, n) {
    e.exports = !n(23) && !n(31)(function() {
        return 7 != Object.defineProperty(n(51)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, , function(e, t, n) {
    n(110);
    for (var r = n(18), o = n(28), i = n(32), s = n(17)("toStringTag"), c = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), a = 0; a < c.length; a++) {
        var l = c[a],
            u = r[l],
            d = u && u.prototype;
        d && !d[s] && o(d, s, l), i[l] = i.Array
    }
}, function(e, t, n) {
    e.exports = {
        default: n(100),
        __esModule: !0
    }
}, function(e, t) {
    ! function() {
        e.exports = this.wp.apiRequest
    }()
}, , function(e, t, n) {
    var r = n(40),
        o = n(17)("toStringTag"),
        i = "Arguments" == r(function() {
            return arguments
        }());
    e.exports = function(e) {
        var t, n, s;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
            try {
                return e[t]
            } catch (e) {}
        }(t = Object(e), o)) ? n : i ? r(t) : "Object" == (s = r(t)) && "function" == typeof t.callee ? "Arguments" : s
    }
}, function(e, t, n) {
    "use strict";
    var r = n(52),
        o = n(20),
        i = n(71),
        s = n(28),
        c = n(27),
        a = n(32),
        l = n(88),
        u = n(48),
        d = n(72),
        p = n(17)("iterator"),
        f = !([].keys && "next" in [].keys()),
        h = function() {
            return this
        };
    e.exports = function(e, t, n, b, m, v, g) {
        l(n, t, b);
        var O, y, _, k = function(e) {
                if (!f && e in w) return w[e];
                switch (e) {
                    case "keys":
                    case "values":
                        return function() {
                            return new n(this, e)
                        }
                }
                return function() {
                    return new n(this, e)
                }
            },
            j = t + " Iterator",
            S = "values" == m,
            E = !1,
            w = e.prototype,
            T = w[p] || w["@@iterator"] || m && w[m],
            C = !f && T || k(m),
            P = m ? S ? k("entries") : C : void 0,
            B = "Array" == t && w.entries || T;
        if (B && (_ = d(B.call(new e))) !== Object.prototype && _.next && (u(_, j, !0), r || c(_, p) || s(_, p, h)), S && T && "values" !== T.name && (E = !0, C = function() {
                return T.call(this)
            }), r && !g || !f && !E && w[p] || s(w, p, C), a[t] = C, a[j] = h, m)
            if (O = {
                    values: S ? C : k("values"),
                    keys: v ? C : k("keys"),
                    entries: P
                }, g)
                for (y in O) y in w || i(w, y, O[y]);
            else o(o.P + o.F * (f || E), t, O);
        return O
    }
}, function(e, t, n) {
    var r = n(18),
        o = n(14),
        i = n(52),
        s = n(69),
        c = n(24).f;
    e.exports = function(e) {
        var t = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
        "_" == e.charAt(0) || e in t || c(t, e, {
            value: s.f(e)
        })
    }
}, function(e, t, n) {
    t.f = n(17)
}, function(e, t, n) {
    var r = n(66),
        o = n(17)("iterator"),
        i = n(32);
    e.exports = n(14).getIteratorMethod = function(e) {
        if (void 0 != e) return e[o] || e["@@iterator"] || i[r(e)]
    }
}, function(e, t, n) {
    e.exports = n(28)
}, function(e, t, n) {
    var r = n(27),
        o = n(38),
        i = n(43)("IE_PROTO"),
        s = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
        return e = o(e), r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = s(n(101)),
        o = s(n(93)),
        i = "function" == typeof o.default && "symbol" == typeof r.default ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof o.default && e.constructor === o.default && e !== o.default.prototype ? "symbol" : typeof e
        };

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.default = "function" == typeof o.default && "symbol" === i(r.default) ? function(e) {
        return void 0 === e ? "undefined" : i(e)
    } : function(e) {
        return e && "function" == typeof o.default && e.constructor === o.default && e !== o.default.prototype ? "symbol" : void 0 === e ? "undefined" : i(e)
    }
}, function(e, t, n) {
    e.exports = {
        default: n(92),
        __esModule: !0
    }
}, function(e, t, n) {
    var r = n(41),
        o = Math.max,
        i = Math.min;
    e.exports = function(e, t) {
        return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t)
    }
}, function(e, t, n) {
    var r = n(30),
        o = n(49),
        i = n(75);
    e.exports = function(e) {
        return function(t, n, s) {
            var c, a = r(t),
                l = o(a.length),
                u = i(s, l);
            if (e && n != n) {
                for (; l > u;)
                    if ((c = a[u++]) != c) return !0
            } else
                for (; l > u; u++)
                    if ((e || u in a) && a[u] === n) return e || u || 0; return !e && -1
        }
    }
}, function(e, t, n) {
    var r = n(18).document;
    e.exports = r && r.documentElement
}, function(e, t, n) {
    var r = n(32),
        o = n(17)("iterator"),
        i = Array.prototype;
    e.exports = function(e) {
        return void 0 !== e && (r.Array === e || i[o] === e)
    }
}, function(e, t, n) {
    var r = n(25);
    e.exports = function(e, t, n, o) {
        try {
            return o ? t(r(n)[0], n[1]) : t(n)
        } catch (t) {
            var i = e.return;
            throw void 0 !== i && r(i.call(e)), t
        }
    }
}, function(e, t, n) {
    "use strict";
    var r, o;

    function i(e) {
        return [e]
    }

    function s() {
        var e = {
            clear: function() {
                e.head = null
            }
        };
        return e
    }

    function c(e, t, n) {
        var r;
        if (e.length !== t.length) return !1;
        for (r = n; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
        return !0
    }
    r = {}, o = "undefined" != typeof WeakMap, t.a = function(e, t) {
        var n, a;

        function l() {
            n = o ? new WeakMap : s()
        }

        function u() {
            var n, r, o, i, s, l = arguments.length;
            for (i = new Array(l), o = 0; o < l; o++) i[o] = arguments[o];
            for (s = t.apply(null, i), (n = a(s)).isUniqueByDependants || (n.lastDependants && !c(s, n.lastDependants, 0) && n.clear(), n.lastDependants = s), r = n.head; r;) {
                if (c(r.args, i, 1)) return r !== n.head && (r.prev.next = r.next, r.next && (r.next.prev = r.prev), r.next = n.head, r.prev = null, n.head.prev = r, n.head = r), r.val;
                r = r.next
            }
            return r = {
                val: e.apply(null, i)
            }, i[0] = null, r.args = i, n.head && (n.head.prev = r, r.next = n.head), n.head = r, r.val
        }
        return t || (t = i), a = o ? function(e) {
            var t, o, i, c, a, l = n,
                u = !0;
            for (t = 0; t < e.length; t++) {
                if (o = e[t], !(a = o) || "object" != typeof a) {
                    u = !1;
                    break
                }
                l.has(o) ? l = l.get(o) : (i = new WeakMap, l.set(o, i), l = i)
            }
            return l.has(r) || ((c = s()).isUniqueByDependants = u, l.set(r, c)), l.get(r)
        } : function() {
            return n
        }, u.getDependants = t, u.clear = l, l(), u
    }
}, function(e, t, n) {
    var r = n(59),
        o = n(44).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function(e) {
        return r(e, o)
    }
}, function(e, t, n) {
    var r = n(24),
        o = n(25),
        i = n(37);
    e.exports = n(23) ? Object.defineProperties : function(e, t) {
        o(e);
        for (var n, s = i(t), c = s.length, a = 0; c > a;) r.f(e, n = s[a++], t[n]);
        return e
    }
}, function(e, t, n) {
    e.exports = {
        default: n(168),
        __esModule: !0
    }
}, function(e, t, n) {
    var r = n(46),
        o = n(33),
        i = n(30),
        s = n(50),
        c = n(27),
        a = n(60),
        l = Object.getOwnPropertyDescriptor;
    t.f = n(23) ? l : function(e, t) {
        if (e = i(e), t = s(t, !0), a) try {
            return l(e, t)
        } catch (e) {}
        if (c(e, t)) return o(!r.f.call(e, t), e[t])
    }
}, function(e, t, n) {
    var r = n(17)("iterator"),
        o = !1;
    try {
        var i = [7][r]();
        i.return = function() {
            o = !0
        }, Array.from(i, function() {
            throw 2
        })
    } catch (e) {}
    e.exports = function(e, t) {
        if (!t && !o) return !1;
        var n = !1;
        try {
            var i = [7],
                s = i[r]();
            s.next = function() {
                return {
                    done: n = !0
                }
            }, i[r] = function() {
                return s
            }, e(i)
        } catch (e) {}
        return n
    }
}, function(e, t) {}, function(e, t, n) {
    e.exports = {
        default: n(108),
        __esModule: !0
    }
}, function(e, t, n) {
    "use strict";
    var r = n(55),
        o = n(33),
        i = n(48),
        s = {};
    n(28)(s, n(17)("iterator"), function() {
        return this
    }), e.exports = function(e, t, n) {
        e.prototype = r(s, {
            next: o(1, n)
        }), i(e, t + " Iterator")
    }
}, function(e, t, n) {
    var r = n(41),
        o = n(42);
    e.exports = function(e) {
        return function(t, n) {
            var i, s, c = String(o(t)),
                a = r(n),
                l = c.length;
            return a < 0 || a >= l ? e ? "" : void 0 : (i = c.charCodeAt(a)) < 55296 || i > 56319 || a + 1 === l || (s = c.charCodeAt(a + 1)) < 56320 || s > 57343 ? e ? c.charAt(a) : i : e ? c.slice(a, a + 2) : s - 56320 + (i - 55296 << 10) + 65536
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(37),
        o = n(58),
        i = n(46),
        s = n(38),
        c = n(56),
        a = Object.assign;
    e.exports = !a || n(31)(function() {
        var e = {},
            t = {},
            n = Symbol(),
            r = "abcdefghijklmnopqrst";
        return e[n] = 7, r.split("").forEach(function(e) {
            t[e] = e
        }), 7 != a({}, e)[n] || Object.keys(a({}, t)).join("") != r
    }) ? function(e, t) {
        for (var n = s(e), a = arguments.length, l = 1, u = o.f, d = i.f; a > l;)
            for (var p, f = c(arguments[l++]), h = u ? r(f).concat(u(f)) : r(f), b = h.length, m = 0; b > m;) d.call(f, p = h[m++]) && (n[p] = f[p]);
        return n
    } : a
}, function(e, t, n) {
    var r = n(20);
    r(r.S + r.F, "Object", {
        assign: n(90)
    })
}, function(e, t, n) {
    n(91), e.exports = n(14).Object.assign
}, function(e, t, n) {
    e.exports = {
        default: n(123),
        __esModule: !0
    }
}, , function(e, t, n) {
    var r = n(39)("meta"),
        o = n(26),
        i = n(27),
        s = n(24).f,
        c = 0,
        a = Object.isExtensible || function() {
            return !0
        },
        l = !n(31)(function() {
            return a(Object.preventExtensions({}))
        }),
        u = function(e) {
            s(e, r, {
                value: {
                    i: "O" + ++c,
                    w: {}
                }
            })
        },
        d = e.exports = {
            KEY: r,
            NEED: !1,
            fastKey: function(e, t) {
                if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!i(e, r)) {
                    if (!a(e)) return "F";
                    if (!t) return "E";
                    u(e)
                }
                return e[r].i
            },
            getWeak: function(e, t) {
                if (!i(e, r)) {
                    if (!a(e)) return !0;
                    if (!t) return !1;
                    u(e)
                }
                return e[r].w
            },
            onFreeze: function(e) {
                return l && d.NEED && a(e) && !i(e, r) && u(e), e
            }
        }
}, function(e, t, n) {
    e.exports = {
        default: n(134),
        __esModule: !0
    }
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            value: t,
            done: !!e
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(24),
        o = n(33);
    e.exports = function(e, t, n) {
        t in e ? r.f(e, t, o(0, n)) : e[t] = n
    }
}, function(e, t, n) {
    "use strict";
    var r = n(34),
        o = n(20),
        i = n(38),
        s = n(79),
        c = n(78),
        a = n(49),
        l = n(98),
        u = n(70);
    o(o.S + o.F * !n(85)(function(e) {
        Array.from(e)
    }), "Array", {
        from: function(e) {
            var t, n, o, d, p = i(e),
                f = "function" == typeof this ? this : Array,
                h = arguments.length,
                b = h > 1 ? arguments[1] : void 0,
                m = void 0 !== b,
                v = 0,
                g = u(p);
            if (m && (b = r(b, h > 2 ? arguments[2] : void 0, 2)), void 0 == g || f == Array && c(g))
                for (n = new f(t = a(p.length)); t > v; v++) l(n, v, m ? b(p[v], v) : p[v]);
            else
                for (d = g.call(p), n = new f; !(o = d.next()).done; v++) l(n, v, m ? s(d, b, [o.value, v], !0) : o.value);
            return n.length = v, n
        }
    })
}, function(e, t, n) {
    n(45), n(99), e.exports = n(14).Array.from
}, function(e, t, n) {
    e.exports = {
        default: n(124),
        __esModule: !0
    }
}, function(e, t) {
    ! function() {
        e.exports = this.wp.utils
    }()
}, function(e, t, n) {
    var r = n(20),
        o = n(14),
        i = n(31);
    e.exports = function(e, t) {
        var n = (o.Object || {})[e] || Object[e],
            s = {};
        s[e] = t(n), r(r.S + r.F * i(function() {
            n(1)
        }), "Object", s)
    }
}, , , function(e, t, n) {
    var r = n(40);
    e.exports = Array.isArray || function(e) {
        return "Array" == r(e)
    }
}, function(e, t, n) {
    var r = n(20);
    r(r.S + r.F * !n(23), "Object", {
        defineProperty: n(24).f
    })
}, function(e, t, n) {
    n(107);
    var r = n(14).Object;
    e.exports = function(e, t, n) {
        return r.defineProperty(e, t, n)
    }
}, function(e, t) {
    e.exports = function() {}
}, function(e, t, n) {
    "use strict";
    var r = n(109),
        o = n(97),
        i = n(32),
        s = n(30);
    e.exports = n(67)(Array, "Array", function(e, t) {
        this._t = s(e), this._i = 0, this._k = t
    }, function() {
        var e = this._t,
            t = this._k,
            n = this._i++;
        return !e || n >= e.length ? (this._t = void 0, o(1)) : o(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
    }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
}, function(e, t, n) {
    e.exports = {
        default: n(117),
        __esModule: !0
    }
}, function(e, t, n) {
    e.exports = function(e, t) {
        var n, r, o, i = 0;

        function s() {
            var t, s, c = r,
                a = arguments.length;
            e: for (; c;) {
                if (c.args.length === arguments.length) {
                    for (s = 0; s < a; s++)
                        if (c.args[s] !== arguments[s]) {
                            c = c.next;
                            continue e
                        }
                    return c !== r && (c === o && (o = c.prev), c.prev.next = c.next, c.next && (c.next.prev = c.prev), c.next = r, c.prev = null, r.prev = c, r = c), c.val
                }
                c = c.next
            }
            for (t = new Array(a), s = 0; s < a; s++) t[s] = arguments[s];
            return c = {
                args: t,
                val: e.apply(null, t)
            }, r ? (r.prev = c, c.next = r) : o = c, i === n ? (o = o.prev).next = null : i++, r = c, c.val
        }
        return t && t.maxSize && (n = t.maxSize), s.clear = function() {
            r = null, o = null, i = 0
        }, s
    }
}, function(e, t) {
    ! function() {
        e.exports = this.wp.deprecated
    }()
}, function(e, t) {
    ! function() {
        e.exports = this.wp.isShallowEqual
    }()
}, function(e, t, n) {
    "use strict";
    var r = n(53);
    e.exports.f = function(e) {
        return new function(e) {
            var t, n;
            this.promise = new e(function(e, r) {
                if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                t = e, n = r
            }), this.resolve = r(t), this.reject = r(n)
        }(e)
    }
}, function(e, t, n) {
    var r = n(20);
    r(r.S, "Object", {
        create: n(55)
    })
}, function(e, t, n) {
    n(116);
    var r = n(14).Object;
    e.exports = function(e, t) {
        return r.create(e, t)
    }
}, function(e, t, n) {
    n(68)("observable")
}, function(e, t, n) {
    n(68)("asyncIterator")
}, function(e, t, n) {
    var r = n(30),
        o = n(81).f,
        i = {}.toString,
        s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    e.exports.f = function(e) {
        return s && "[object Window]" == i.call(e) ? function(e) {
            try {
                return o(e)
            } catch (e) {
                return s.slice()
            }
        }(e) : o(r(e))
    }
}, function(e, t, n) {
    var r = n(37),
        o = n(58),
        i = n(46);
    e.exports = function(e) {
        var t = r(e),
            n = o.f;
        if (n)
            for (var s, c = n(e), a = i.f, l = 0; c.length > l;) a.call(e, s = c[l++]) && t.push(s);
        return t
    }
}, function(e, t, n) {
    "use strict";
    var r = n(18),
        o = n(27),
        i = n(23),
        s = n(20),
        c = n(71),
        a = n(95).KEY,
        l = n(31),
        u = n(47),
        d = n(48),
        p = n(39),
        f = n(17),
        h = n(69),
        b = n(68),
        m = n(121),
        v = n(106),
        g = n(25),
        O = n(26),
        y = n(30),
        _ = n(50),
        k = n(33),
        j = n(55),
        S = n(120),
        E = n(84),
        w = n(24),
        T = n(37),
        C = E.f,
        P = w.f,
        B = S.f,
        x = r.Symbol,
        I = r.JSON,
        D = I && I.stringify,
        A = f("_hidden"),
        N = f("toPrimitive"),
        R = {}.propertyIsEnumerable,
        L = u("symbol-registry"),
        U = u("symbols"),
        M = u("op-symbols"),
        F = Object.prototype,
        H = "function" == typeof x,
        V = r.QObject,
        K = !V || !V.prototype || !V.prototype.findChild,
        z = i && l(function() {
            return 7 != j(P({}, "a", {
                get: function() {
                    return P(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function(e, t, n) {
            var r = C(F, t);
            r && delete F[t], P(e, t, n), r && e !== F && P(F, t, r)
        } : P,
        W = function(e) {
            var t = U[e] = j(x.prototype);
            return t._k = e, t
        },
        q = H && "symbol" == typeof x.iterator ? function(e) {
            return "symbol" == typeof e
        } : function(e) {
            return e instanceof x
        },
        G = function(e, t, n) {
            return e === F && G(M, t, n), g(e), t = _(t, !0), g(n), o(U, t) ? (n.enumerable ? (o(e, A) && e[A][t] && (e[A][t] = !1), n = j(n, {
                enumerable: k(0, !1)
            })) : (o(e, A) || P(e, A, k(1, {})), e[A][t] = !0), z(e, t, n)) : P(e, t, n)
        },
        Y = function(e, t) {
            g(e);
            for (var n, r = m(t = y(t)), o = 0, i = r.length; i > o;) G(e, n = r[o++], t[n]);
            return e
        },
        X = function(e) {
            var t = R.call(this, e = _(e, !0));
            return !(this === F && o(U, e) && !o(M, e)) && (!(t || !o(this, e) || !o(U, e) || o(this, A) && this[A][e]) || t)
        },
        $ = function(e, t) {
            if (e = y(e), t = _(t, !0), e !== F || !o(U, t) || o(M, t)) {
                var n = C(e, t);
                return !n || !o(U, t) || o(e, A) && e[A][t] || (n.enumerable = !0), n
            }
        },
        J = function(e) {
            for (var t, n = B(y(e)), r = [], i = 0; n.length > i;) o(U, t = n[i++]) || t == A || t == a || r.push(t);
            return r
        },
        Q = function(e) {
            for (var t, n = e === F, r = B(n ? M : y(e)), i = [], s = 0; r.length > s;) !o(U, t = r[s++]) || n && !o(F, t) || i.push(U[t]);
            return i
        };
    H || (c((x = function() {
        if (this instanceof x) throw TypeError("Symbol is not a constructor!");
        var e = p(arguments.length > 0 ? arguments[0] : void 0),
            t = function(n) {
                this === F && t.call(M, n), o(this, A) && o(this[A], e) && (this[A][e] = !1), z(this, e, k(1, n))
            };
        return i && K && z(F, e, {
            configurable: !0,
            set: t
        }), W(e)
    }).prototype, "toString", function() {
        return this._k
    }), E.f = $, w.f = G, n(81).f = S.f = J, n(46).f = X, n(58).f = Q, i && !n(52) && c(F, "propertyIsEnumerable", X, !0), h.f = function(e) {
        return W(f(e))
    }), s(s.G + s.W + s.F * !H, {
        Symbol: x
    });
    for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ee = 0; Z.length > ee;) f(Z[ee++]);
    for (var te = T(f.store), ne = 0; te.length > ne;) b(te[ne++]);
    s(s.S + s.F * !H, "Symbol", {
        for: function(e) {
            return o(L, e += "") ? L[e] : L[e] = x(e)
        },
        keyFor: function(e) {
            if (!q(e)) throw TypeError(e + " is not a symbol!");
            for (var t in L)
                if (L[t] === e) return t
        },
        useSetter: function() {
            K = !0
        },
        useSimple: function() {
            K = !1
        }
    }), s(s.S + s.F * !H, "Object", {
        create: function(e, t) {
            return void 0 === t ? j(e) : Y(j(e), t)
        },
        defineProperty: G,
        defineProperties: Y,
        getOwnPropertyDescriptor: $,
        getOwnPropertyNames: J,
        getOwnPropertySymbols: Q
    }), I && s(s.S + s.F * (!H || l(function() {
        var e = x();
        return "[null]" != D([e]) || "{}" != D({
            a: e
        }) || "{}" != D(Object(e))
    })), "JSON", {
        stringify: function(e) {
            for (var t, n, r = [e], o = 1; arguments.length > o;) r.push(arguments[o++]);
            if (n = t = r[1], (O(t) || void 0 !== e) && !q(e)) return v(t) || (t = function(e, t) {
                if ("function" == typeof n && (t = n.call(this, e, t)), !q(t)) return t
            }), r[1] = t, D.apply(I, r)
        }
    }), x.prototype[N] || n(28)(x.prototype, N, x.prototype.valueOf), d(x, "Symbol"), d(Math, "Math", !0), d(r.JSON, "JSON", !0)
}, function(e, t, n) {
    n(122), n(86), n(119), n(118), e.exports = n(14).Symbol
}, function(e, t, n) {
    n(45), n(62), e.exports = n(69).f("iterator")
}, function(e, t, n) {
    var r = n(34),
        o = n(79),
        i = n(78),
        s = n(25),
        c = n(49),
        a = n(70),
        l = {},
        u = {};
    (t = e.exports = function(e, t, n, d, p) {
        var f, h, b, m, v = p ? function() {
                return e
            } : a(e),
            g = r(n, d, t ? 2 : 1),
            O = 0;
        if ("function" != typeof v) throw TypeError(e + " is not iterable!");
        if (i(v)) {
            for (f = c(e.length); f > O; O++)
                if ((m = t ? g(s(h = e[O])[0], h[1]) : g(e[O])) === l || m === u) return m
        } else
            for (b = v.call(e); !(h = b.next()).done;)
                if ((m = o(b, g, h.value, t)) === l || m === u) return m
    }).BREAK = l, t.RETURN = u
}, function(e, t) {
    ! function() {
        e.exports = this.wp.blob
    }()
}, function(e, t, n) {
    var r = n(26),
        o = n(25),
        i = function(e, t) {
            if (o(e), !r(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
        };
    e.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, r) {
            try {
                (r = n(34)(Function.call, n(84).f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
            } catch (e) {
                t = !0
            }
            return function(e, n) {
                return i(e, n), t ? e.__proto__ = n : r(e, n), e
            }
        }({}, !1) : void 0),
        check: i
    }
}, function(e, t, n) {
    var r = n(20);
    r(r.S, "Object", {
        setPrototypeOf: n(127).set
    })
}, function(e, t, n) {
    n(128), e.exports = n(14).Object.setPrototypeOf
}, function(e, t, n) {
    e.exports = {
        default: n(129),
        __esModule: !0
    }
}, function(e, t, n) {
    var r = n(38),
        o = n(72);
    n(103)("getPrototypeOf", function() {
        return function(e) {
            return o(r(e))
        }
    })
}, function(e, t, n) {
    n(131), e.exports = n(14).Object.getPrototypeOf
}, function(e, t, n) {
    var r = n(25),
        o = n(70);
    e.exports = n(14).getIterator = function(e) {
        var t = o(e);
        if ("function" != typeof t) throw TypeError(e + " is not iterable!");
        return r(t.call(e))
    }
}, function(e, t, n) {
    n(62), n(45), e.exports = n(133)
}, function(e, t) {
    ! function() {
        e.exports = this.wp.viewport
    }()
}, function(e, t, n) {
    var r = n(66),
        o = n(17)("iterator"),
        i = n(32);
    e.exports = n(14).isIterable = function(e) {
        var t = Object(e);
        return void 0 !== t[o] || "@@iterator" in t || i.hasOwnProperty(r(t))
    }
}, function(e, t, n) {
    n(62), n(45), e.exports = n(136)
}, function(e, t, n) {
    e.exports = {
        default: n(137),
        __esModule: !0
    }
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    t.decode = t.parse = n(192), t.encode = t.stringify = n(191)
}, function(e, t, n) {
    e.exports = {
        default: n(185),
        __esModule: !0
    }
}, function(e, t, n) {
    var r = n(28);
    e.exports = function(e, t, n) {
        for (var o in t) n && e[o] ? e[o] = t[o] : r(e, o, t[o]);
        return e
    }
}, function(e, t, n) {
    var r = n(25),
        o = n(26),
        i = n(115);
    e.exports = function(e, t) {
        if (r(e), o(t) && t.constructor === e) return t;
        var n = i.f(e);
        return (0, n.resolve)(t), n.promise
    }
}, function(e, t) {
    e.exports = function(e) {
        try {
            return {
                e: !1,
                v: e()
            }
        } catch (e) {
            return {
                e: !0,
                v: e
            }
        }
    }
}, function(e, t, n) {
    var r, o, i, s = n(34),
        c = n(166),
        a = n(77),
        l = n(51),
        u = n(18),
        d = u.process,
        p = u.setImmediate,
        f = u.clearImmediate,
        h = u.MessageChannel,
        b = u.Dispatch,
        m = 0,
        v = {},
        g = function() {
            var e = +this;
            if (v.hasOwnProperty(e)) {
                var t = v[e];
                delete v[e], t()
            }
        },
        O = function(e) {
            g.call(e.data)
        };
    p && f || (p = function(e) {
        for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
        return v[++m] = function() {
            c("function" == typeof e ? e : Function(e), t)
        }, r(m), m
    }, f = function(e) {
        delete v[e]
    }, "process" == n(40)(d) ? r = function(e) {
        d.nextTick(s(g, e, 1))
    } : b && b.now ? r = function(e) {
        b.now(s(g, e, 1))
    } : h ? (i = (o = new h).port2, o.port1.onmessage = O, r = s(i.postMessage, i, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (r = function(e) {
        u.postMessage(e + "", "*")
    }, u.addEventListener("message", O, !1)) : r = "onreadystatechange" in l("script") ? function(e) {
        a.appendChild(l("script")).onreadystatechange = function() {
            a.removeChild(this), g.call(e)
        }
    } : function(e) {
        setTimeout(s(g, e, 1), 0)
    }), e.exports = {
        set: p,
        clear: f
    }
}, function(e, t, n) {
    var r = n(25),
        o = n(53),
        i = n(17)("species");
    e.exports = function(e, t) {
        var n, s = r(e).constructor;
        return void 0 === s || void 0 == (n = r(s)[i]) ? t : o(n)
    }
}, function(e, t) {
    e.exports = function(e, t, n, r) {
        if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
        return e
    }
}, , , function(e, t, n) {
    "use strict";
    var r = n(18),
        o = n(14),
        i = n(24),
        s = n(23),
        c = n(17)("species");
    e.exports = function(e) {
        var t = "function" == typeof o[e] ? o[e] : r[e];
        s && t && !t[c] && i.f(t, c, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(e, t, n) {
    e.exports = {
        default: n(202),
        __esModule: !0
    }
}, , , function(e, t, n) {
    var r;
    ! function(o) {
        var i = /^\s+/,
            s = /\s+$/,
            c = 0,
            a = o.round,
            l = o.min,
            u = o.max,
            d = o.random;

        function p(e, t) {
            if (e = e || "", t = t || {}, e instanceof p) return e;
            if (!(this instanceof p)) return new p(e, t);
            var n = function(e) {
                var t = {
                        r: 0,
                        g: 0,
                        b: 0
                    },
                    n = 1,
                    r = null,
                    c = null,
                    a = null,
                    d = !1,
                    p = !1;
                "string" == typeof e && (e = function(e) {
                    e = e.replace(i, "").replace(s, "").toLowerCase();
                    var t, n = !1;
                    if (B[e]) e = B[e], n = !0;
                    else if ("transparent" == e) return {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0,
                        format: "name"
                    };
                    if (t = K.rgb.exec(e)) return {
                        r: t[1],
                        g: t[2],
                        b: t[3]
                    };
                    if (t = K.rgba.exec(e)) return {
                        r: t[1],
                        g: t[2],
                        b: t[3],
                        a: t[4]
                    };
                    if (t = K.hsl.exec(e)) return {
                        h: t[1],
                        s: t[2],
                        l: t[3]
                    };
                    if (t = K.hsla.exec(e)) return {
                        h: t[1],
                        s: t[2],
                        l: t[3],
                        a: t[4]
                    };
                    if (t = K.hsv.exec(e)) return {
                        h: t[1],
                        s: t[2],
                        v: t[3]
                    };
                    if (t = K.hsva.exec(e)) return {
                        h: t[1],
                        s: t[2],
                        v: t[3],
                        a: t[4]
                    };
                    if (t = K.hex8.exec(e)) return {
                        r: N(t[1]),
                        g: N(t[2]),
                        b: N(t[3]),
                        a: M(t[4]),
                        format: n ? "name" : "hex8"
                    };
                    if (t = K.hex6.exec(e)) return {
                        r: N(t[1]),
                        g: N(t[2]),
                        b: N(t[3]),
                        format: n ? "name" : "hex"
                    };
                    if (t = K.hex4.exec(e)) return {
                        r: N(t[1] + "" + t[1]),
                        g: N(t[2] + "" + t[2]),
                        b: N(t[3] + "" + t[3]),
                        a: M(t[4] + "" + t[4]),
                        format: n ? "name" : "hex8"
                    };
                    if (t = K.hex3.exec(e)) return {
                        r: N(t[1] + "" + t[1]),
                        g: N(t[2] + "" + t[2]),
                        b: N(t[3] + "" + t[3]),
                        format: n ? "name" : "hex"
                    };
                    return !1
                }(e));
                "object" == typeof e && (z(e.r) && z(e.g) && z(e.b) ? (f = e.r, h = e.g, b = e.b, t = {
                    r: 255 * D(f, 255),
                    g: 255 * D(h, 255),
                    b: 255 * D(b, 255)
                }, d = !0, p = "%" === String(e.r).substr(-1) ? "prgb" : "rgb") : z(e.h) && z(e.s) && z(e.v) ? (r = L(e.s), c = L(e.v), t = function(e, t, n) {
                    e = 6 * D(e, 360), t = D(t, 100), n = D(n, 100);
                    var r = o.floor(e),
                        i = e - r,
                        s = n * (1 - t),
                        c = n * (1 - i * t),
                        a = n * (1 - (1 - i) * t),
                        l = r % 6;
                    return {
                        r: 255 * [n, c, s, s, a, n][l],
                        g: 255 * [a, n, n, c, s, s][l],
                        b: 255 * [s, s, a, n, n, c][l]
                    }
                }(e.h, r, c), d = !0, p = "hsv") : z(e.h) && z(e.s) && z(e.l) && (r = L(e.s), a = L(e.l), t = function(e, t, n) {
                    var r, o, i;

                    function s(e, t, n) {
                        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
                    }
                    if (e = D(e, 360), t = D(t, 100), n = D(n, 100), 0 === t) r = o = i = n;
                    else {
                        var c = n < .5 ? n * (1 + t) : n + t - n * t,
                            a = 2 * n - c;
                        r = s(a, c, e + 1 / 3), o = s(a, c, e), i = s(a, c, e - 1 / 3)
                    }
                    return {
                        r: 255 * r,
                        g: 255 * o,
                        b: 255 * i
                    }
                }(e.h, r, a), d = !0, p = "hsl"), e.hasOwnProperty("a") && (n = e.a));
                var f, h, b;
                return n = I(n), {
                    ok: d,
                    format: e.format || p,
                    r: l(255, u(t.r, 0)),
                    g: l(255, u(t.g, 0)),
                    b: l(255, u(t.b, 0)),
                    a: n
                }
            }(e);
            this._originalInput = e, this._r = n.r, this._g = n.g, this._b = n.b, this._a = n.a, this._roundA = a(100 * this._a) / 100, this._format = t.format || n.format, this._gradientType = t.gradientType, this._r < 1 && (this._r = a(this._r)), this._g < 1 && (this._g = a(this._g)), this._b < 1 && (this._b = a(this._b)), this._ok = n.ok, this._tc_id = c++
        }

        function f(e, t, n) {
            e = D(e, 255), t = D(t, 255), n = D(n, 255);
            var r, o, i = u(e, t, n),
                s = l(e, t, n),
                c = (i + s) / 2;
            if (i == s) r = o = 0;
            else {
                var a = i - s;
                switch (o = c > .5 ? a / (2 - i - s) : a / (i + s), i) {
                    case e:
                        r = (t - n) / a + (t < n ? 6 : 0);
                        break;
                    case t:
                        r = (n - e) / a + 2;
                        break;
                    case n:
                        r = (e - t) / a + 4
                }
                r /= 6
            }
            return {
                h: r,
                s: o,
                l: c
            }
        }

        function h(e, t, n) {
            e = D(e, 255), t = D(t, 255), n = D(n, 255);
            var r, o, i = u(e, t, n),
                s = l(e, t, n),
                c = i,
                a = i - s;
            if (o = 0 === i ? 0 : a / i, i == s) r = 0;
            else {
                switch (i) {
                    case e:
                        r = (t - n) / a + (t < n ? 6 : 0);
                        break;
                    case t:
                        r = (n - e) / a + 2;
                        break;
                    case n:
                        r = (e - t) / a + 4
                }
                r /= 6
            }
            return {
                h: r,
                s: o,
                v: c
            }
        }

        function b(e, t, n, r) {
            var o = [R(a(e).toString(16)), R(a(t).toString(16)), R(a(n).toString(16))];
            return r && o[0].charAt(0) == o[0].charAt(1) && o[1].charAt(0) == o[1].charAt(1) && o[2].charAt(0) == o[2].charAt(1) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("")
        }

        function m(e, t, n, r) {
            return [R(U(r)), R(a(e).toString(16)), R(a(t).toString(16)), R(a(n).toString(16))].join("")
        }

        function v(e, t) {
            t = 0 === t ? 0 : t || 10;
            var n = p(e).toHsl();
            return n.s -= t / 100, n.s = A(n.s), p(n)
        }

        function g(e, t) {
            t = 0 === t ? 0 : t || 10;
            var n = p(e).toHsl();
            return n.s += t / 100, n.s = A(n.s), p(n)
        }

        function O(e) {
            return p(e).desaturate(100)
        }

        function y(e, t) {
            t = 0 === t ? 0 : t || 10;
            var n = p(e).toHsl();
            return n.l += t / 100, n.l = A(n.l), p(n)
        }

        function _(e, t) {
            t = 0 === t ? 0 : t || 10;
            var n = p(e).toRgb();
            return n.r = u(0, l(255, n.r - a(-t / 100 * 255))), n.g = u(0, l(255, n.g - a(-t / 100 * 255))), n.b = u(0, l(255, n.b - a(-t / 100 * 255))), p(n)
        }

        function k(e, t) {
            t = 0 === t ? 0 : t || 10;
            var n = p(e).toHsl();
            return n.l -= t / 100, n.l = A(n.l), p(n)
        }

        function j(e, t) {
            var n = p(e).toHsl(),
                r = (n.h + t) % 360;
            return n.h = r < 0 ? 360 + r : r, p(n)
        }

        function S(e) {
            var t = p(e).toHsl();
            return t.h = (t.h + 180) % 360, p(t)
        }

        function E(e) {
            var t = p(e).toHsl(),
                n = t.h;
            return [p(e), p({
                h: (n + 120) % 360,
                s: t.s,
                l: t.l
            }), p({
                h: (n + 240) % 360,
                s: t.s,
                l: t.l
            })]
        }

        function w(e) {
            var t = p(e).toHsl(),
                n = t.h;
            return [p(e), p({
                h: (n + 90) % 360,
                s: t.s,
                l: t.l
            }), p({
                h: (n + 180) % 360,
                s: t.s,
                l: t.l
            }), p({
                h: (n + 270) % 360,
                s: t.s,
                l: t.l
            })]
        }

        function T(e) {
            var t = p(e).toHsl(),
                n = t.h;
            return [p(e), p({
                h: (n + 72) % 360,
                s: t.s,
                l: t.l
            }), p({
                h: (n + 216) % 360,
                s: t.s,
                l: t.l
            })]
        }

        function C(e, t, n) {
            t = t || 6, n = n || 30;
            var r = p(e).toHsl(),
                o = 360 / n,
                i = [p(e)];
            for (r.h = (r.h - (o * t >> 1) + 720) % 360; --t;) r.h = (r.h + o) % 360, i.push(p(r));
            return i
        }

        function P(e, t) {
            t = t || 6;
            for (var n = p(e).toHsv(), r = n.h, o = n.s, i = n.v, s = [], c = 1 / t; t--;) s.push(p({
                h: r,
                s: o,
                v: i
            })), i = (i + c) % 1;
            return s
        }
        p.prototype = {
            isDark: function() {
                return this.getBrightness() < 128
            },
            isLight: function() {
                return !this.isDark()
            },
            isValid: function() {
                return this._ok
            },
            getOriginalInput: function() {
                return this._originalInput
            },
            getFormat: function() {
                return this._format
            },
            getAlpha: function() {
                return this._a
            },
            getBrightness: function() {
                var e = this.toRgb();
                return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3
            },
            getLuminance: function() {
                var e, t, n, r = this.toRgb();
                return e = r.r / 255, t = r.g / 255, n = r.b / 255, .2126 * (e <= .03928 ? e / 12.92 : o.pow((e + .055) / 1.055, 2.4)) + .7152 * (t <= .03928 ? t / 12.92 : o.pow((t + .055) / 1.055, 2.4)) + .0722 * (n <= .03928 ? n / 12.92 : o.pow((n + .055) / 1.055, 2.4))
            },
            setAlpha: function(e) {
                return this._a = I(e), this._roundA = a(100 * this._a) / 100, this
            },
            toHsv: function() {
                var e = h(this._r, this._g, this._b);
                return {
                    h: 360 * e.h,
                    s: e.s,
                    v: e.v,
                    a: this._a
                }
            },
            toHsvString: function() {
                var e = h(this._r, this._g, this._b),
                    t = a(360 * e.h),
                    n = a(100 * e.s),
                    r = a(100 * e.v);
                return 1 == this._a ? "hsv(" + t + ", " + n + "%, " + r + "%)" : "hsva(" + t + ", " + n + "%, " + r + "%, " + this._roundA + ")"
            },
            toHsl: function() {
                var e = f(this._r, this._g, this._b);
                return {
                    h: 360 * e.h,
                    s: e.s,
                    l: e.l,
                    a: this._a
                }
            },
            toHslString: function() {
                var e = f(this._r, this._g, this._b),
                    t = a(360 * e.h),
                    n = a(100 * e.s),
                    r = a(100 * e.l);
                return 1 == this._a ? "hsl(" + t + ", " + n + "%, " + r + "%)" : "hsla(" + t + ", " + n + "%, " + r + "%, " + this._roundA + ")"
            },
            toHex: function(e) {
                return b(this._r, this._g, this._b, e)
            },
            toHexString: function(e) {
                return "#" + this.toHex(e)
            },
            toHex8: function(e) {
                return function(e, t, n, r, o) {
                    var i = [R(a(e).toString(16)), R(a(t).toString(16)), R(a(n).toString(16)), R(U(r))];
                    if (o && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) && i[3].charAt(0) == i[3].charAt(1)) return i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0);
                    return i.join("")
                }(this._r, this._g, this._b, this._a, e)
            },
            toHex8String: function(e) {
                return "#" + this.toHex8(e)
            },
            toRgb: function() {
                return {
                    r: a(this._r),
                    g: a(this._g),
                    b: a(this._b),
                    a: this._a
                }
            },
            toRgbString: function() {
                return 1 == this._a ? "rgb(" + a(this._r) + ", " + a(this._g) + ", " + a(this._b) + ")" : "rgba(" + a(this._r) + ", " + a(this._g) + ", " + a(this._b) + ", " + this._roundA + ")"
            },
            toPercentageRgb: function() {
                return {
                    r: a(100 * D(this._r, 255)) + "%",
                    g: a(100 * D(this._g, 255)) + "%",
                    b: a(100 * D(this._b, 255)) + "%",
                    a: this._a
                }
            },
            toPercentageRgbString: function() {
                return 1 == this._a ? "rgb(" + a(100 * D(this._r, 255)) + "%, " + a(100 * D(this._g, 255)) + "%, " + a(100 * D(this._b, 255)) + "%)" : "rgba(" + a(100 * D(this._r, 255)) + "%, " + a(100 * D(this._g, 255)) + "%, " + a(100 * D(this._b, 255)) + "%, " + this._roundA + ")"
            },
            toName: function() {
                return 0 === this._a ? "transparent" : !(this._a < 1) && (x[b(this._r, this._g, this._b, !0)] || !1)
            },
            toFilter: function(e) {
                var t = "#" + m(this._r, this._g, this._b, this._a),
                    n = t,
                    r = this._gradientType ? "GradientType = 1, " : "";
                if (e) {
                    var o = p(e);
                    n = "#" + m(o._r, o._g, o._b, o._a)
                }
                return "progid:DXImageTransform.Microsoft.gradient(" + r + "startColorstr=" + t + ",endColorstr=" + n + ")"
            },
            toString: function(e) {
                var t = !!e;
                e = e || this._format;
                var n = !1,
                    r = this._a < 1 && this._a >= 0;
                return t || !r || "hex" !== e && "hex6" !== e && "hex3" !== e && "hex4" !== e && "hex8" !== e && "name" !== e ? ("rgb" === e && (n = this.toRgbString()), "prgb" === e && (n = this.toPercentageRgbString()), "hex" !== e && "hex6" !== e || (n = this.toHexString()), "hex3" === e && (n = this.toHexString(!0)), "hex4" === e && (n = this.toHex8String(!0)), "hex8" === e && (n = this.toHex8String()), "name" === e && (n = this.toName()), "hsl" === e && (n = this.toHslString()), "hsv" === e && (n = this.toHsvString()), n || this.toHexString()) : "name" === e && 0 === this._a ? this.toName() : this.toRgbString()
            },
            clone: function() {
                return p(this.toString())
            },
            _applyModification: function(e, t) {
                var n = e.apply(null, [this].concat([].slice.call(t)));
                return this._r = n._r, this._g = n._g, this._b = n._b, this.setAlpha(n._a), this
            },
            lighten: function() {
                return this._applyModification(y, arguments)
            },
            brighten: function() {
                return this._applyModification(_, arguments)
            },
            darken: function() {
                return this._applyModification(k, arguments)
            },
            desaturate: function() {
                return this._applyModification(v, arguments)
            },
            saturate: function() {
                return this._applyModification(g, arguments)
            },
            greyscale: function() {
                return this._applyModification(O, arguments)
            },
            spin: function() {
                return this._applyModification(j, arguments)
            },
            _applyCombination: function(e, t) {
                return e.apply(null, [this].concat([].slice.call(t)))
            },
            analogous: function() {
                return this._applyCombination(C, arguments)
            },
            complement: function() {
                return this._applyCombination(S, arguments)
            },
            monochromatic: function() {
                return this._applyCombination(P, arguments)
            },
            splitcomplement: function() {
                return this._applyCombination(T, arguments)
            },
            triad: function() {
                return this._applyCombination(E, arguments)
            },
            tetrad: function() {
                return this._applyCombination(w, arguments)
            }
        }, p.fromRatio = function(e, t) {
            if ("object" == typeof e) {
                var n = {};
                for (var r in e) e.hasOwnProperty(r) && (n[r] = "a" === r ? e[r] : L(e[r]));
                e = n
            }
            return p(e, t)
        }, p.equals = function(e, t) {
            return !(!e || !t) && p(e).toRgbString() == p(t).toRgbString()
        }, p.random = function() {
            return p.fromRatio({
                r: d(),
                g: d(),
                b: d()
            })
        }, p.mix = function(e, t, n) {
            n = 0 === n ? 0 : n || 50;
            var r = p(e).toRgb(),
                o = p(t).toRgb(),
                i = n / 100;
            return p({
                r: (o.r - r.r) * i + r.r,
                g: (o.g - r.g) * i + r.g,
                b: (o.b - r.b) * i + r.b,
                a: (o.a - r.a) * i + r.a
            })
        }, p.readability = function(e, t) {
            var n = p(e),
                r = p(t);
            return (o.max(n.getLuminance(), r.getLuminance()) + .05) / (o.min(n.getLuminance(), r.getLuminance()) + .05)
        }, p.isReadable = function(e, t, n) {
            var r, o, i = p.readability(e, t);
            switch (o = !1, (r = function(e) {
                var t, n;
                t = ((e = e || {
                    level: "AA",
                    size: "small"
                }).level || "AA").toUpperCase(), n = (e.size || "small").toLowerCase(), "AA" !== t && "AAA" !== t && (t = "AA");
                "small" !== n && "large" !== n && (n = "small");
                return {
                    level: t,
                    size: n
                }
            }(n)).level + r.size) {
                case "AAsmall":
                case "AAAlarge":
                    o = i >= 4.5;
                    break;
                case "AAlarge":
                    o = i >= 3;
                    break;
                case "AAAsmall":
                    o = i >= 7
            }
            return o
        }, p.mostReadable = function(e, t, n) {
            var r, o, i, s, c = null,
                a = 0;
            o = (n = n || {}).includeFallbackColors, i = n.level, s = n.size;
            for (var l = 0; l < t.length; l++)(r = p.readability(e, t[l])) > a && (a = r, c = p(t[l]));
            return p.isReadable(e, c, {
                level: i,
                size: s
            }) || !o ? c : (n.includeFallbackColors = !1, p.mostReadable(e, ["#fff", "#000"], n))
        };
        var B = p.names = {
                aliceblue: "f0f8ff",
                antiquewhite: "faebd7",
                aqua: "0ff",
                aquamarine: "7fffd4",
                azure: "f0ffff",
                beige: "f5f5dc",
                bisque: "ffe4c4",
                black: "000",
                blanchedalmond: "ffebcd",
                blue: "00f",
                blueviolet: "8a2be2",
                brown: "a52a2a",
                burlywood: "deb887",
                burntsienna: "ea7e5d",
                cadetblue: "5f9ea0",
                chartreuse: "7fff00",
                chocolate: "d2691e",
                coral: "ff7f50",
                cornflowerblue: "6495ed",
                cornsilk: "fff8dc",
                crimson: "dc143c",
                cyan: "0ff",
                darkblue: "00008b",
                darkcyan: "008b8b",
                darkgoldenrod: "b8860b",
                darkgray: "a9a9a9",
                darkgreen: "006400",
                darkgrey: "a9a9a9",
                darkkhaki: "bdb76b",
                darkmagenta: "8b008b",
                darkolivegreen: "556b2f",
                darkorange: "ff8c00",
                darkorchid: "9932cc",
                darkred: "8b0000",
                darksalmon: "e9967a",
                darkseagreen: "8fbc8f",
                darkslateblue: "483d8b",
                darkslategray: "2f4f4f",
                darkslategrey: "2f4f4f",
                darkturquoise: "00ced1",
                darkviolet: "9400d3",
                deeppink: "ff1493",
                deepskyblue: "00bfff",
                dimgray: "696969",
                dimgrey: "696969",
                dodgerblue: "1e90ff",
                firebrick: "b22222",
                floralwhite: "fffaf0",
                forestgreen: "228b22",
                fuchsia: "f0f",
                gainsboro: "dcdcdc",
                ghostwhite: "f8f8ff",
                gold: "ffd700",
                goldenrod: "daa520",
                gray: "808080",
                green: "008000",
                greenyellow: "adff2f",
                grey: "808080",
                honeydew: "f0fff0",
                hotpink: "ff69b4",
                indianred: "cd5c5c",
                indigo: "4b0082",
                ivory: "fffff0",
                khaki: "f0e68c",
                lavender: "e6e6fa",
                lavenderblush: "fff0f5",
                lawngreen: "7cfc00",
                lemonchiffon: "fffacd",
                lightblue: "add8e6",
                lightcoral: "f08080",
                lightcyan: "e0ffff",
                lightgoldenrodyellow: "fafad2",
                lightgray: "d3d3d3",
                lightgreen: "90ee90",
                lightgrey: "d3d3d3",
                lightpink: "ffb6c1",
                lightsalmon: "ffa07a",
                lightseagreen: "20b2aa",
                lightskyblue: "87cefa",
                lightslategray: "789",
                lightslategrey: "789",
                lightsteelblue: "b0c4de",
                lightyellow: "ffffe0",
                lime: "0f0",
                limegreen: "32cd32",
                linen: "faf0e6",
                magenta: "f0f",
                maroon: "800000",
                mediumaquamarine: "66cdaa",
                mediumblue: "0000cd",
                mediumorchid: "ba55d3",
                mediumpurple: "9370db",
                mediumseagreen: "3cb371",
                mediumslateblue: "7b68ee",
                mediumspringgreen: "00fa9a",
                mediumturquoise: "48d1cc",
                mediumvioletred: "c71585",
                midnightblue: "191970",
                mintcream: "f5fffa",
                mistyrose: "ffe4e1",
                moccasin: "ffe4b5",
                navajowhite: "ffdead",
                navy: "000080",
                oldlace: "fdf5e6",
                olive: "808000",
                olivedrab: "6b8e23",
                orange: "ffa500",
                orangered: "ff4500",
                orchid: "da70d6",
                palegoldenrod: "eee8aa",
                palegreen: "98fb98",
                paleturquoise: "afeeee",
                palevioletred: "db7093",
                papayawhip: "ffefd5",
                peachpuff: "ffdab9",
                peru: "cd853f",
                pink: "ffc0cb",
                plum: "dda0dd",
                powderblue: "b0e0e6",
                purple: "800080",
                rebeccapurple: "663399",
                red: "f00",
                rosybrown: "bc8f8f",
                royalblue: "4169e1",
                saddlebrown: "8b4513",
                salmon: "fa8072",
                sandybrown: "f4a460",
                seagreen: "2e8b57",
                seashell: "fff5ee",
                sienna: "a0522d",
                silver: "c0c0c0",
                skyblue: "87ceeb",
                slateblue: "6a5acd",
                slategray: "708090",
                slategrey: "708090",
                snow: "fffafa",
                springgreen: "00ff7f",
                steelblue: "4682b4",
                tan: "d2b48c",
                teal: "008080",
                thistle: "d8bfd8",
                tomato: "ff6347",
                turquoise: "40e0d0",
                violet: "ee82ee",
                wheat: "f5deb3",
                white: "fff",
                whitesmoke: "f5f5f5",
                yellow: "ff0",
                yellowgreen: "9acd32"
            },
            x = p.hexNames = function(e) {
                var t = {};
                for (var n in e) e.hasOwnProperty(n) && (t[e[n]] = n);
                return t
            }(B);

        function I(e) {
            return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
        }

        function D(e, t) {
            (function(e) {
                return "string" == typeof e && -1 != e.indexOf(".") && 1 === parseFloat(e)
            })(e) && (e = "100%");
            var n = function(e) {
                return "string" == typeof e && -1 != e.indexOf("%")
            }(e);
            return e = l(t, u(0, parseFloat(e))), n && (e = parseInt(e * t, 10) / 100), o.abs(e - t) < 1e-6 ? 1 : e % t / parseFloat(t)
        }

        function A(e) {
            return l(1, u(0, e))
        }

        function N(e) {
            return parseInt(e, 16)
        }

        function R(e) {
            return 1 == e.length ? "0" + e : "" + e
        }

        function L(e) {
            return e <= 1 && (e = 100 * e + "%"), e
        }

        function U(e) {
            return o.round(255 * parseFloat(e)).toString(16)
        }

        function M(e) {
            return N(e) / 255
        }
        var F, H, V, K = (H = "[\\s|\\(]+(" + (F = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + F + ")[,|\\s]+(" + F + ")\\s*\\)?", V = "[\\s|\\(]+(" + F + ")[,|\\s]+(" + F + ")[,|\\s]+(" + F + ")[,|\\s]+(" + F + ")\\s*\\)?", {
            CSS_UNIT: new RegExp(F),
            rgb: new RegExp("rgb" + H),
            rgba: new RegExp("rgba" + V),
            hsl: new RegExp("hsl" + H),
            hsla: new RegExp("hsla" + V),
            hsv: new RegExp("hsv" + H),
            hsva: new RegExp("hsva" + V),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        });

        function z(e) {
            return !!K.CSS_UNIT.exec(e)
        }
        void 0 !== e && e.exports ? e.exports = p : void 0 === (r = function() {
            return p
        }.call(t, n, t, e)) || (e.exports = r)
    }(Math)
}, , function(e, t, n) {
    "use strict";
    var r = n(194),
        o = n(193);

    function i() {
        this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
    }
    t.parse = O, t.resolve = function(e, t) {
        return O(e, !1, !0).resolve(t)
    }, t.resolveObject = function(e, t) {
        return e ? O(e, !1, !0).resolveObject(t) : t
    }, t.format = function(e) {
        o.isString(e) && (e = O(e));
        return e instanceof i ? e.format() : i.prototype.format.call(e)
    }, t.Url = i;
    var s = /^([a-z0-9.+-]+:)/i,
        c = /:[0-9]*$/,
        a = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        l = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
        u = ["'"].concat(l),
        d = ["%", "/", "?", ";", "#"].concat(u),
        p = ["/", "?", "#"],
        f = /^[+a-z0-9A-Z_-]{0,63}$/,
        h = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        b = {
            javascript: !0,
            "javascript:": !0
        },
        m = {
            javascript: !0,
            "javascript:": !0
        },
        v = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        },
        g = n(140);

    function O(e, t, n) {
        if (e && o.isObject(e) && e instanceof i) return e;
        var r = new i;
        return r.parse(e, t, n), r
    }
    i.prototype.parse = function(e, t, n) {
        if (!o.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
        var i = e.indexOf("?"),
            c = -1 !== i && i < e.indexOf("#") ? "?" : "#",
            l = e.split(c);
        l[0] = l[0].replace(/\\/g, "/");
        var O = e = l.join(c);
        if (O = O.trim(), !n && 1 === e.split("#").length) {
            var y = a.exec(O);
            if (y) return this.path = O, this.href = O, this.pathname = y[1], y[2] ? (this.search = y[2], this.query = t ? g.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
        }
        var _ = s.exec(O);
        if (_) {
            var k = (_ = _[0]).toLowerCase();
            this.protocol = k, O = O.substr(_.length)
        }
        if (n || _ || O.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var j = "//" === O.substr(0, 2);
            !j || _ && m[_] || (O = O.substr(2), this.slashes = !0)
        }
        if (!m[_] && (j || _ && !v[_])) {
            for (var S, E, w = -1, T = 0; T < p.length; T++) {
                -1 !== (C = O.indexOf(p[T])) && (-1 === w || C < w) && (w = C)
            } - 1 !== (E = -1 === w ? O.lastIndexOf("@") : O.lastIndexOf("@", w)) && (S = O.slice(0, E), O = O.slice(E + 1), this.auth = decodeURIComponent(S)), w = -1;
            for (T = 0; T < d.length; T++) {
                var C; - 1 !== (C = O.indexOf(d[T])) && (-1 === w || C < w) && (w = C)
            } - 1 === w && (w = O.length), this.host = O.slice(0, w), O = O.slice(w), this.parseHost(), this.hostname = this.hostname || "";
            var P = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!P)
                for (var B = this.hostname.split(/\./), x = (T = 0, B.length); T < x; T++) {
                    var I = B[T];
                    if (I && !I.match(f)) {
                        for (var D = "", A = 0, N = I.length; A < N; A++) I.charCodeAt(A) > 127 ? D += "x" : D += I[A];
                        if (!D.match(f)) {
                            var R = B.slice(0, T),
                                L = B.slice(T + 1),
                                U = I.match(h);
                            U && (R.push(U[1]), L.unshift(U[2])), L.length && (O = "/" + L.join(".") + O), this.hostname = R.join(".");
                            break
                        }
                    }
                }
            this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), P || (this.hostname = r.toASCII(this.hostname));
            var M = this.port ? ":" + this.port : "",
                F = this.hostname || "";
            this.host = F + M, this.href += this.host, P && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== O[0] && (O = "/" + O))
        }
        if (!b[k])
            for (T = 0, x = u.length; T < x; T++) {
                var H = u[T];
                if (-1 !== O.indexOf(H)) {
                    var V = encodeURIComponent(H);
                    V === H && (V = escape(H)), O = O.split(H).join(V)
                }
            }
        var K = O.indexOf("#"); - 1 !== K && (this.hash = O.substr(K), O = O.slice(0, K));
        var z = O.indexOf("?");
        if (-1 !== z ? (this.search = O.substr(z), this.query = O.substr(z + 1), t && (this.query = g.parse(this.query)), O = O.slice(0, z)) : t && (this.search = "", this.query = {}), O && (this.pathname = O), v[k] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
            M = this.pathname || "";
            var W = this.search || "";
            this.path = M + W
        }
        return this.href = this.format(), this
    }, i.prototype.format = function() {
        var e = this.auth || "";
        e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
        var t = this.protocol || "",
            n = this.pathname || "",
            r = this.hash || "",
            i = !1,
            s = "";
        this.host ? i = e + this.host : this.hostname && (i = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && o.isObject(this.query) && Object.keys(this.query).length && (s = g.stringify(this.query));
        var c = this.search || s && "?" + s || "";
        return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || v[t]) && !1 !== i ? (i = "//" + (i || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : i || (i = ""), r && "#" !== r.charAt(0) && (r = "#" + r), c && "?" !== c.charAt(0) && (c = "?" + c), t + i + (n = n.replace(/[?#]/g, function(e) {
            return encodeURIComponent(e)
        })) + (c = c.replace("#", "%23")) + r
    }, i.prototype.resolve = function(e) {
        return this.resolveObject(O(e, !1, !0)).format()
    }, i.prototype.resolveObject = function(e) {
        if (o.isString(e)) {
            var t = new i;
            t.parse(e, !1, !0), e = t
        }
        for (var n = new i, r = Object.keys(this), s = 0; s < r.length; s++) {
            var c = r[s];
            n[c] = this[c]
        }
        if (n.hash = e.hash, "" === e.href) return n.href = n.format(), n;
        if (e.slashes && !e.protocol) {
            for (var a = Object.keys(e), l = 0; l < a.length; l++) {
                var u = a[l];
                "protocol" !== u && (n[u] = e[u])
            }
            return v[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n
        }
        if (e.protocol && e.protocol !== n.protocol) {
            if (!v[e.protocol]) {
                for (var d = Object.keys(e), p = 0; p < d.length; p++) {
                    var f = d[p];
                    n[f] = e[f]
                }
                return n.href = n.format(), n
            }
            if (n.protocol = e.protocol, e.host || m[e.protocol]) n.pathname = e.pathname;
            else {
                for (var h = (e.pathname || "").split("/"); h.length && !(e.host = h.shift()););
                e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== h[0] && h.unshift(""), h.length < 2 && h.unshift(""), n.pathname = h.join("/")
            }
            if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
                var b = n.pathname || "",
                    g = n.search || "";
                n.path = b + g
            }
            return n.slashes = n.slashes || e.slashes, n.href = n.format(), n
        }
        var O = n.pathname && "/" === n.pathname.charAt(0),
            y = e.host || e.pathname && "/" === e.pathname.charAt(0),
            _ = y || O || n.host && e.pathname,
            k = _,
            j = n.pathname && n.pathname.split("/") || [],
            S = (h = e.pathname && e.pathname.split("/") || [], n.protocol && !v[n.protocol]);
        if (S && (n.hostname = "", n.port = null, n.host && ("" === j[0] ? j[0] = n.host : j.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === h[0] ? h[0] = e.host : h.unshift(e.host)), e.host = null), _ = _ && ("" === h[0] || "" === j[0])), y) n.host = e.host || "" === e.host ? e.host : n.host, n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, j = h;
        else if (h.length) j || (j = []), j.pop(), j = j.concat(h), n.search = e.search, n.query = e.query;
        else if (!o.isNullOrUndefined(e.search)) {
            if (S) n.hostname = n.host = j.shift(), (P = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = P.shift(), n.host = n.hostname = P.shift());
            return n.search = e.search, n.query = e.query, o.isNull(n.pathname) && o.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n
        }
        if (!j.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
        for (var E = j.slice(-1)[0], w = (n.host || e.host || j.length > 1) && ("." === E || ".." === E) || "" === E, T = 0, C = j.length; C >= 0; C--) "." === (E = j[C]) ? j.splice(C, 1) : ".." === E ? (j.splice(C, 1), T++) : T && (j.splice(C, 1), T--);
        if (!_ && !k)
            for (; T--; T) j.unshift("..");
        !_ || "" === j[0] || j[0] && "/" === j[0].charAt(0) || j.unshift(""), w && "/" !== j.join("/").substr(-1) && j.push("");
        var P, B = "" === j[0] || j[0] && "/" === j[0].charAt(0);
        S && (n.hostname = n.host = B ? "" : j.length ? j.shift() : "", (P = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = P.shift(), n.host = n.hostname = P.shift()));
        return (_ = _ || n.host && j.length) && !B && j.unshift(""), j.length ? n.pathname = j.join("/") : (n.pathname = null, n.path = null), o.isNull(n.pathname) && o.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n
    }, i.prototype.parseHost = function() {
        var e = this.host,
            t = c.exec(e);
        t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
    }
}, function(e, t) {
    ! function() {
        e.exports = this.wp.date
    }()
}, function(e, t, n) {
    e.exports = n(348)
}, , , function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, , function(e, t, n) {
    "use strict";
    var r = n(20),
        o = n(115),
        i = n(144);
    r(r.S, "Promise", {
        try: function(e) {
            var t = o.f(this),
                n = i(e);
            return (n.e ? t.reject : t.resolve)(n.v), t.promise
        }
    })
}, function(e, t, n) {
    "use strict";
    var r = n(20),
        o = n(14),
        i = n(18),
        s = n(146),
        c = n(143);
    r(r.P + r.R, "Promise", {
        finally: function(e) {
            var t = s(this, o.Promise || i.Promise),
                n = "function" == typeof e;
            return this.then(n ? function(n) {
                return c(t, e()).then(function() {
                    return n
                })
            } : e, n ? function(n) {
                return c(t, e()).then(function() {
                    throw n
                })
            } : e)
        }
    })
}, function(e, t, n) {
    var r = n(18),
        o = n(145).set,
        i = r.MutationObserver || r.WebKitMutationObserver,
        s = r.process,
        c = r.Promise,
        a = "process" == n(40)(s);
    e.exports = function() {
        var e, t, n, l = function() {
            var r, o;
            for (a && (r = s.domain) && r.exit(); e;) {
                o = e.fn, e = e.next;
                try {
                    o()
                } catch (r) {
                    throw e ? n() : t = void 0, r
                }
            }
            t = void 0, r && r.enter()
        };
        if (a) n = function() {
            s.nextTick(l)
        };
        else if (!i || r.navigator && r.navigator.standalone)
            if (c && c.resolve) {
                var u = c.resolve();
                n = function() {
                    u.then(l)
                }
            } else n = function() {
                o.call(r, l)
            };
        else {
            var d = !0,
                p = document.createTextNode("");
            new i(l).observe(p, {
                characterData: !0
            }), n = function() {
                p.data = d = !d
            }
        }
        return function(r) {
            var o = {
                fn: r,
                next: void 0
            };
            t && (t.next = o), e || (e = o, n()), t = o
        }
    }
}, function(e, t) {
    e.exports = function(e, t, n) {
        var r = void 0 === n;
        switch (t.length) {
            case 0:
                return r ? e() : e.call(n);
            case 1:
                return r ? e(t[0]) : e.call(n, t[0]);
            case 2:
                return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
            case 3:
                return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
            case 4:
                return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
        }
        return e.apply(n, t)
    }
}, function(e, t, n) {
    "use strict";
    var r, o, i, s, c = n(52),
        a = n(18),
        l = n(34),
        u = n(66),
        d = n(20),
        p = n(26),
        f = n(53),
        h = n(147),
        b = n(125),
        m = n(146),
        v = n(145).set,
        g = n(165)(),
        O = n(115),
        y = n(144),
        _ = n(143),
        k = a.TypeError,
        j = a.process,
        S = a.Promise,
        E = "process" == u(j),
        w = function() {},
        T = o = O.f,
        C = !! function() {
            try {
                var e = S.resolve(1),
                    t = (e.constructor = {})[n(17)("species")] = function(e) {
                        e(w, w)
                    };
                return (E || "function" == typeof PromiseRejectionEvent) && e.then(w) instanceof t
            } catch (e) {}
        }(),
        P = function(e) {
            var t;
            return !(!p(e) || "function" != typeof(t = e.then)) && t
        },
        B = function(e, t) {
            if (!e._n) {
                e._n = !0;
                var n = e._c;
                g(function() {
                    for (var r = e._v, o = 1 == e._s, i = 0, s = function(t) {
                            var n, i, s = o ? t.ok : t.fail,
                                c = t.resolve,
                                a = t.reject,
                                l = t.domain;
                            try {
                                s ? (o || (2 == e._h && D(e), e._h = 1), !0 === s ? n = r : (l && l.enter(), n = s(r), l && l.exit()), n === t.promise ? a(k("Promise-chain cycle")) : (i = P(n)) ? i.call(n, c, a) : c(n)) : a(r)
                            } catch (e) {
                                a(e)
                            }
                        }; n.length > i;) s(n[i++]);
                    e._c = [], e._n = !1, t && !e._h && x(e)
                })
            }
        },
        x = function(e) {
            v.call(a, function() {
                var t, n, r, o = e._v,
                    i = I(e);
                if (i && (t = y(function() {
                        E ? j.emit("unhandledRejection", o, e) : (n = a.onunhandledrejection) ? n({
                            promise: e,
                            reason: o
                        }) : (r = a.console) && r.error && r.error("Unhandled promise rejection", o)
                    }), e._h = E || I(e) ? 2 : 1), e._a = void 0, i && t.e) throw t.v
            })
        },
        I = function(e) {
            return 1 !== e._h && 0 === (e._a || e._c).length
        },
        D = function(e) {
            v.call(a, function() {
                var t;
                E ? j.emit("rejectionHandled", e) : (t = a.onrejectionhandled) && t({
                    promise: e,
                    reason: e._v
                })
            })
        },
        A = function(e) {
            var t = this;
            t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), B(t, !0))
        },
        N = function(e) {
            var t, n = this;
            if (!n._d) {
                n._d = !0, n = n._w || n;
                try {
                    if (n === e) throw k("Promise can't be resolved itself");
                    (t = P(e)) ? g(function() {
                        var r = {
                            _w: n,
                            _d: !1
                        };
                        try {
                            t.call(e, l(N, r, 1), l(A, r, 1))
                        } catch (e) {
                            A.call(r, e)
                        }
                    }): (n._v = e, n._s = 1, B(n, !1))
                } catch (e) {
                    A.call({
                        _w: n,
                        _d: !1
                    }, e)
                }
            }
        };
    C || (S = function(e) {
        h(this, S, "Promise", "_h"), f(e), r.call(this);
        try {
            e(l(N, this, 1), l(A, this, 1))
        } catch (e) {
            A.call(this, e)
        }
    }, (r = function(e) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }).prototype = n(142)(S.prototype, {
        then: function(e, t) {
            var n = T(m(this, S));
            return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = E ? j.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && B(this, !1), n.promise
        },
        catch: function(e) {
            return this.then(void 0, e)
        }
    }), i = function() {
        var e = new r;
        this.promise = e, this.resolve = l(N, e, 1), this.reject = l(A, e, 1)
    }, O.f = T = function(e) {
        return e === S || e === s ? new i(e) : o(e)
    }), d(d.G + d.W + d.F * !C, {
        Promise: S
    }), n(48)(S, "Promise"), n(150)("Promise"), s = n(14).Promise, d(d.S + d.F * !C, "Promise", {
        reject: function(e) {
            var t = T(this);
            return (0, t.reject)(e), t.promise
        }
    }), d(d.S + d.F * (c || !C), "Promise", {
        resolve: function(e) {
            return _(c && this === s ? S : this, e)
        }
    }), d(d.S + d.F * !(C && n(85)(function(e) {
        S.all(e).catch(w)
    })), "Promise", {
        all: function(e) {
            var t = this,
                n = T(t),
                r = n.resolve,
                o = n.reject,
                i = y(function() {
                    var n = [],
                        i = 0,
                        s = 1;
                    b(e, !1, function(e) {
                        var c = i++,
                            a = !1;
                        n.push(void 0), s++, t.resolve(e).then(function(e) {
                            a || (a = !0, n[c] = e, --s || r(n))
                        }, o)
                    }), --s || r(n)
                });
            return i.e && o(i.v), n.promise
        },
        race: function(e) {
            var t = this,
                n = T(t),
                r = n.reject,
                o = y(function() {
                    b(e, !1, function(e) {
                        t.resolve(e).then(n.resolve, r)
                    })
                });
            return o.e && r(o.v), n.promise
        }
    })
}, function(e, t, n) {
    n(86), n(45), n(62), n(167), n(164), n(163), e.exports = n(14).Promise
}, function(e, t) {
    var n;
    "function" != typeof(n = window.Element.prototype).matches && (n.matches = n.msMatchesSelector || n.mozMatchesSelector || n.webkitMatchesSelector || function(e) {
        for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = 0; t[n] && t[n] !== this;) ++n;
        return Boolean(t[n])
    }), "function" != typeof n.closest && (n.closest = function(e) {
        for (var t = this; t && 1 === t.nodeType;) {
            if (t.matches(e)) return t;
            t = t.parentNode
        }
        return null
    })
}, function(e, t) {
    ! function() {
        e.exports = this.wp.nux
    }()
}, function(e, t) {
    ! function() {
        e.exports = this.tinymce
    }()
}, function(e, t, n) {
    "use strict";
    e.exports = n(238)
}, function(e, t, n) {
    var r = n(204),
        o = n(203);
    e.exports = function(e, t, n) {
        var i = t && n || 0;
        "string" == typeof e && (t = "binary" == e ? new Array(16) : null, e = null);
        var s = (e = e || {}).random || (e.rng || r)();
        if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, t)
            for (var c = 0; c < 16; ++c) t[i + c] = s[c];
        return t || o(s)
    }
}, , , , function(e, t, n) {
    var r = n(37),
        o = n(30),
        i = n(46).f;
    e.exports = function(e) {
        return function(t) {
            for (var n, s = o(t), c = r(s), a = c.length, l = 0, u = []; a > l;) i.call(s, n = c[l++]) && u.push(e ? [n, s[n]] : s[n]);
            return u
        }
    }
}, function(e, t) {
    ! function() {
        e.exports = this.wp.a11y
    }()
}, function(e, t, n) {
    "use strict";
    var r = Object.prototype.hasOwnProperty;

    function o(e) {
        return decodeURIComponent(e.replace(/\+/g, " "))
    }
    t.stringify = function(e, t) {
        t = t || "";
        var n = [];
        for (var o in "string" != typeof t && (t = "?"), e) r.call(e, o) && n.push(encodeURIComponent(o) + "=" + encodeURIComponent(e[o]));
        return n.length ? t + n.join("&") : ""
    }, t.parse = function(e) {
        for (var t, n = /([^=?&]+)=?([^&]*)/g, r = {}; t = n.exec(e); r[o(t[1])] = o(t[2]));
        return r
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return a
    }), n.d(t, "b", function() {
        return l
    });
    var r = n(5),
        o = n.n(r),
        i = n(156),
        s = (n(140), /^(mailto:)?[a-z0-9._%+-]+@[a-z0-9][a-z0-9.-]*\.[a-z]{2,63}$/i),
        c = /^(?:[a-z]+:|#|\?|\.|\/)/i;

    function a(e, t) {
        var n = Object(i.parse)(e, !0),
            r = o()({}, n.query, t);
        return delete n.search, Object(i.format)(o()({}, n, {
            query: r
        }))
    }

    function l(e) {
        return c.test(e) || s.test(e) ? e : "http://" + e
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(347);
    t.default = r.default
}, , , function(e, t, n) {
    var r = n(20),
        o = n(177)(!1);
    r(r.S, "Object", {
        values: function(e) {
            return o(e)
        }
    })
}, function(e, t, n) {
    n(184), e.exports = n(14).Object.values
}, , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, o = n(19),
        i = (r = o) && r.__esModule ? r : {
            default: r
        };
    t.attributeListToReact = c, t.nodeListToReact = l, t.nodeToReact = u;
    var s = [].concat(["accept", "acceptCharset", "accessKey", "action", "allowFullScreen", "allowTransparency", "alt", "async", "autoComplete", "autoFocus", "autoPlay", "capture", "cellPadding", "cellSpacing", "challenge", "charSet", "checked", "cite", "classID", "className", "colSpan", "cols", "content", "contentEditable", "contextMenu", "controls", "coords", "crossOrigin", "data", "dateTime", "default", "defer", "dir", "disabled", "download", "draggable", "encType", "form", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "headers", "height", "hidden", "high", "href", "hrefLang", "htmlFor", "httpEquiv", "icon", "id", "inputMode", "integrity", "is", "keyParams", "keyType", "kind", "label", "lang", "list", "loop", "low", "manifest", "marginHeight", "marginWidth", "max", "maxLength", "media", "mediaGroup", "method", "min", "minLength", "multiple", "muted", "name", "noValidate", "nonce", "open", "optimum", "pattern", "placeholder", "poster", "preload", "profile", "radioGroup", "readOnly", "rel", "required", "reversed", "role", "rowSpan", "rows", "sandbox", "scope", "scoped", "scrolling", "seamless", "selected", "shape", "size", "sizes", "span", "spellCheck", "src", "srcDoc", "srcLang", "srcSet", "start", "step", "style", "summary", "tabIndex", "target", "title", "type", "useMap", "value", "width", "wmode", "wrap"], ["autoCapitalize", "autoCorrect", "color", "itemProp", "itemScope", "itemType", "itemRef", "itemID", "security", "unselectable", "results", "autoSave"], ["accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baseProfile", "baselineShift", "bbox", "begin", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "ideographic", "imageRendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "points", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "scale", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "vHanging", "vIdeographic", "vMathematical", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "viewBox", "viewTarget", "visibility", "widths", "wordSpacing", "writingMode", "x", "x1", "x2", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlSpace", "y", "y1", "y2", "yChannelSelector", "z", "zoomAndPan"]).reduce(function(e, t) {
        var n = t.toLowerCase();
        return t !== n && (e[n] = t), e
    }, {});

    function c(e) {
        return [].concat((0, i.default)(e)).reduce(function(e, t) {
            var n = t.name,
                r = t.value,
                o = s[n.replace(/[-:]/, "")] || n;
            return "style" === o && (r = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").split(";").reduce(function(e, t) {
                    var n, r = t.split(":"),
                        o = (n = r[0] || "", n.toLowerCase().replace(/-([a-z])/g, function(e, t) {
                            return t.toUpperCase()
                        })).trim(),
                        i = (r[1] || "").trim();
                    return o && i && (e[o] = i), e
                }, {})
            }(r)), e[o] = r, e
        }, {})
    }
    s.class = "className";
    var a = 0;

    function l(e, t) {
        return [].concat((0, i.default)(e)).reduce(function(e, n) {
            n._domReactKey || (n._domReactKey = "_domReact" + String(a++));
            var r = u(n, t);
            return Array.isArray(r) ? e.push.apply(e, (0, i.default)(r)) : e.push(r), e
        }, [])
    }

    function u(e, t) {
        if (!e) return null;
        if (3 === e.nodeType) return e.nodeValue;
        if (1 !== e.nodeType) return null;
        var n = e.nodeName.toLowerCase(),
            r = {},
            o = [];
        return e.hasAttributes() && (r = c(e.attributes)), e._domReactKey && (r.key = e._domReactKey), e.hasChildNodes() && (o = l(e.childNodes, t)), t.apply(void 0, [n, r].concat((0, i.default)(o)))
    }
}, function(e, t, n) {
    "use strict";
    var r = function(e) {
        switch (typeof e) {
            case "string":
                return e;
            case "boolean":
                return e ? "true" : "false";
            case "number":
                return isFinite(e) ? e : "";
            default:
                return ""
        }
    };
    e.exports = function(e, t, n, c) {
        return t = t || "&", n = n || "=", null === e && (e = void 0), "object" == typeof e ? i(s(e), function(s) {
            var c = encodeURIComponent(r(s)) + n;
            return o(e[s]) ? i(e[s], function(e) {
                return c + encodeURIComponent(r(e))
            }).join(t) : c + encodeURIComponent(r(e[s]))
        }).join(t) : c ? encodeURIComponent(r(c)) + n + encodeURIComponent(r(e)) : ""
    };
    var o = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    };

    function i(e, t) {
        if (e.map) return e.map(t);
        for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
        return n
    }
    var s = Object.keys || function(e) {
        var t = [];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
        return t
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    e.exports = function(e, t, n, i) {
        t = t || "&", n = n || "=";
        var s = {};
        if ("string" != typeof e || 0 === e.length) return s;
        var c = /\+/g;
        e = e.split(t);
        var a = 1e3;
        i && "number" == typeof i.maxKeys && (a = i.maxKeys);
        var l = e.length;
        a > 0 && l > a && (l = a);
        for (var u = 0; u < l; ++u) {
            var d, p, f, h, b = e[u].replace(c, "%20"),
                m = b.indexOf(n);
            m >= 0 ? (d = b.substr(0, m), p = b.substr(m + 1)) : (d = b, p = ""), f = decodeURIComponent(d), h = decodeURIComponent(p), r(s, f) ? o(s[f]) ? s[f].push(h) : s[f] = [s[f], h] : s[f] = h
        }
        return s
    };
    var o = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
}, function(e, t, n) {
    "use strict";
    e.exports = {
        isString: function(e) {
            return "string" == typeof e
        },
        isObject: function(e) {
            return "object" == typeof e && null !== e
        },
        isNull: function(e) {
            return null === e
        },
        isNullOrUndefined: function(e) {
            return null == e
        }
    }
}, function(e, t, n) {
    (function(e, r) {
        var o; /*! https://mths.be/punycode v1.4.1 by @mathias */
        ! function(i) {
            "object" == typeof t && t && t.nodeType, "object" == typeof e && e && e.nodeType;
            var s = "object" == typeof r && r;
            s.global !== s && s.window !== s && s.self;
            var c, a = 2147483647,
                l = 36,
                u = 1,
                d = 26,
                p = 38,
                f = 700,
                h = 72,
                b = 128,
                m = "-",
                v = /^xn--/,
                g = /[^\x20-\x7E]/,
                O = /[\x2E\u3002\uFF0E\uFF61]/g,
                y = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                },
                _ = l - u,
                k = Math.floor,
                j = String.fromCharCode;

            function S(e) {
                throw new RangeError(y[e])
            }

            function E(e, t) {
                for (var n = e.length, r = []; n--;) r[n] = t(e[n]);
                return r
            }

            function w(e, t) {
                var n = e.split("@"),
                    r = "";
                return n.length > 1 && (r = n[0] + "@", e = n[1]), r + E((e = e.replace(O, ".")).split("."), t).join(".")
            }

            function T(e) {
                for (var t, n, r = [], o = 0, i = e.length; o < i;)(t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < i ? 56320 == (64512 & (n = e.charCodeAt(o++))) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), o--) : r.push(t);
                return r
            }

            function C(e) {
                return E(e, function(e) {
                    var t = "";
                    return e > 65535 && (t += j((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += j(e)
                }).join("")
            }

            function P(e, t) {
                return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
            }

            function B(e, t, n) {
                var r = 0;
                for (e = n ? k(e / f) : e >> 1, e += k(e / t); e > _ * d >> 1; r += l) e = k(e / _);
                return k(r + (_ + 1) * e / (e + p))
            }

            function x(e) {
                var t, n, r, o, i, s, c, p, f, v, g, O = [],
                    y = e.length,
                    _ = 0,
                    j = b,
                    E = h;
                for ((n = e.lastIndexOf(m)) < 0 && (n = 0), r = 0; r < n; ++r) e.charCodeAt(r) >= 128 && S("not-basic"), O.push(e.charCodeAt(r));
                for (o = n > 0 ? n + 1 : 0; o < y;) {
                    for (i = _, s = 1, c = l; o >= y && S("invalid-input"), ((p = (g = e.charCodeAt(o++)) - 48 < 10 ? g - 22 : g - 65 < 26 ? g - 65 : g - 97 < 26 ? g - 97 : l) >= l || p > k((a - _) / s)) && S("overflow"), _ += p * s, !(p < (f = c <= E ? u : c >= E + d ? d : c - E)); c += l) s > k(a / (v = l - f)) && S("overflow"), s *= v;
                    E = B(_ - i, t = O.length + 1, 0 == i), k(_ / t) > a - j && S("overflow"), j += k(_ / t), _ %= t, O.splice(_++, 0, j)
                }
                return C(O)
            }

            function I(e) {
                var t, n, r, o, i, s, c, p, f, v, g, O, y, _, E, w = [];
                for (O = (e = T(e)).length, t = b, n = 0, i = h, s = 0; s < O; ++s)(g = e[s]) < 128 && w.push(j(g));
                for (r = o = w.length, o && w.push(m); r < O;) {
                    for (c = a, s = 0; s < O; ++s)(g = e[s]) >= t && g < c && (c = g);
                    for (c - t > k((a - n) / (y = r + 1)) && S("overflow"), n += (c - t) * y, t = c, s = 0; s < O; ++s)
                        if ((g = e[s]) < t && ++n > a && S("overflow"), g == t) {
                            for (p = n, f = l; !(p < (v = f <= i ? u : f >= i + d ? d : f - i)); f += l) E = p - v, _ = l - v, w.push(j(P(v + E % _, 0))), p = k(E / _);
                            w.push(j(P(p, 0))), i = B(n, y, r == o), n = 0, ++r
                        }++n, ++t
                }
                return w.join("")
            }
            c = {
                version: "1.4.1",
                ucs2: {
                    decode: T,
                    encode: C
                },
                decode: x,
                encode: I,
                toASCII: function(e) {
                    return w(e, function(e) {
                        return g.test(e) ? "xn--" + I(e) : e
                    })
                },
                toUnicode: function(e) {
                    return w(e, function(e) {
                        return v.test(e) ? x(e.slice(4).toLowerCase()) : e
                    })
                }
            }, void 0 === (o = function() {
                return c
            }.call(t, n, t, e)) || (e.exports = o)
        }()
    }).call(this, n(161)(e), n(139))
}, , function(e, t, n) {
    "use strict";
    var r = function(e) {};
    e.exports = function(e, t, n, o, i, s, c, a) {
        if (r(t), !e) {
            var l;
            if (void 0 === t) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var u = [n, o, i, s, c, a],
                    d = 0;
                (l = new Error(t.replace(/%s/g, function() {
                    return u[d++]
                }))).name = "Invariant Violation"
            }
            throw l.framesToPop = 1, l
        }
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return function() {
            return e
        }
    }
    var o = function() {};
    o.thatReturns = r, o.thatReturnsFalse = r(!1), o.thatReturnsTrue = r(!0), o.thatReturnsNull = r(null), o.thatReturnsThis = function() {
        return this
    }, o.thatReturnsArgument = function(e) {
        return e
    }, e.exports = o
}, function(e, t, n) {
    e.exports = n(240)()
}, , , function(e, t, n) {
    var r = n(38),
        o = n(37);
    n(103)("keys", function() {
        return function(e) {
            return o(r(e))
        }
    })
}, function(e, t, n) {
    n(201), e.exports = n(14).Object.keys
}, function(e, t) {
    for (var n = [], r = 0; r < 256; ++r) n[r] = (r + 256).toString(16).substr(1);
    e.exports = function(e, t) {
        var r = t || 0,
            o = n;
        return o[e[r++]] + o[e[r++]] + o[e[r++]] + o[e[r++]] + "-" + o[e[r++]] + o[e[r++]] + "-" + o[e[r++]] + o[e[r++]] + "-" + o[e[r++]] + o[e[r++]] + "-" + o[e[r++]] + o[e[r++]] + o[e[r++]] + o[e[r++]] + o[e[r++]] + o[e[r++]]
    }
}, function(e, t, n) {
    (function(t) {
        var n, r = t.crypto || t.msCrypto;
        if (r && r.getRandomValues) {
            var o = new Uint8Array(16);
            n = function() {
                return r.getRandomValues(o), o
            }
        }
        if (!n) {
            var i = new Array(16);
            n = function() {
                for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), i[t] = e >>> ((3 & t) << 3) & 255;
                return i
            }
        }
        e.exports = n
    }).call(this, n(139))
}, , function(e, t, n) {
    e.exports = function() {
        "use strict";
        return function(e) {
            var t = {};
            return function e(t, n) {
                    var r;
                    if (Array.isArray(n))
                        for (r = 0; r < n.length; r++) e(t, n[r]);
                    else
                        for (r in n) t[r] = (t[r] || []).concat(n[r])
                }(t, e),
                function(e) {
                    return function(n) {
                        return function(r) {
                            var o, i, s = t[r.type],
                                c = n(r);
                            if (s)
                                for (o = 0; o < s.length; o++)(i = s[o](r, e)) && e.dispatch(i);
                            return c
                        }
                    }
                }
        }
    }()
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
        };

    function i(e, t) {
        var n = e["page" + (t ? "Y" : "X") + "Offset"],
            r = "scroll" + (t ? "Top" : "Left");
        if ("number" != typeof n) {
            var o = e.document;
            "number" != typeof(n = o.documentElement[r]) && (n = o.body[r])
        }
        return n
    }

    function s(e) {
        return i(e)
    }

    function c(e) {
        return i(e, !0)
    }

    function a(e) {
        var t = function(e) {
                var t, n = void 0,
                    r = void 0,
                    o = e.ownerDocument,
                    i = o.body,
                    s = o && o.documentElement;
                return n = (t = e.getBoundingClientRect()).left, r = t.top, {
                    left: n -= s.clientLeft || i.clientLeft || 0,
                    top: r -= s.clientTop || i.clientTop || 0
                }
            }(e),
            n = e.ownerDocument,
            r = n.defaultView || n.parentWindow;
        return t.left += s(r), t.top += c(r), t
    }
    var l = new RegExp("^(" + /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source + ")(?!px)[a-z%]+$", "i"),
        u = /^(top|right|bottom|left)$/,
        d = "currentStyle",
        p = "runtimeStyle",
        f = "left",
        h = "px";
    var b = void 0;

    function m(e, t) {
        for (var n = 0; n < e.length; n++) t(e[n])
    }

    function v(e) {
        return "border-box" === b(e, "boxSizing")
    }
    "undefined" != typeof window && (b = window.getComputedStyle ? function(e, t, n) {
        var r = "",
            o = e.ownerDocument,
            i = n || o.defaultView.getComputedStyle(e, null);
        return i && (r = i.getPropertyValue(t) || i[t]), r
    } : function(e, t) {
        var n = e[d] && e[d][t];
        if (l.test(n) && !u.test(t)) {
            var r = e.style,
                o = r[f],
                i = e[p][f];
            e[p][f] = e[d][f], r[f] = "fontSize" === t ? "1em" : n || 0, n = r.pixelLeft + h, r[f] = o, e[p][f] = i
        }
        return "" === n ? "auto" : n
    });
    var g = ["margin", "border", "padding"],
        O = -1,
        y = 2,
        _ = 1;

    function k(e, t, n) {
        var r = 0,
            o = void 0,
            i = void 0,
            s = void 0;
        for (i = 0; i < t.length; i++)
            if (o = t[i])
                for (s = 0; s < n.length; s++) {
                    var c = void 0;
                    c = "border" === o ? o + n[s] + "Width" : o + n[s], r += parseFloat(b(e, c)) || 0
                }
            return r
    }

    function j(e) {
        return null != e && e == e.window
    }
    var S = {};

    function E(e, t, n) {
        if (j(e)) return "width" === t ? S.viewportWidth(e) : S.viewportHeight(e);
        if (9 === e.nodeType) return "width" === t ? S.docWidth(e) : S.docHeight(e);
        var r = "width" === t ? ["Left", "Right"] : ["Top", "Bottom"],
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            i = (b(e), v(e)),
            s = 0;
        (null == o || o <= 0) && (o = void 0, (null == (s = b(e, t)) || Number(s) < 0) && (s = e.style[t] || 0), s = parseFloat(s) || 0), void 0 === n && (n = i ? _ : O);
        var c = void 0 !== o || i,
            a = o || s;
        if (n === O) return c ? a - k(e, ["border", "padding"], r) : s;
        if (c) {
            var l = n === y ? -k(e, ["border"], r) : k(e, ["margin"], r);
            return a + (n === _ ? 0 : l)
        }
        return s + k(e, g.slice(n), r)
    }
    m(["Width", "Height"], function(e) {
        S["doc" + e] = function(t) {
            var n = t.document;
            return Math.max(n.documentElement["scroll" + e], n.body["scroll" + e], S["viewport" + e](n))
        }, S["viewport" + e] = function(t) {
            var n = "client" + e,
                r = t.document,
                o = r.body,
                i = r.documentElement[n];
            return "CSS1Compat" === r.compatMode && i || o && o[n] || i
        }
    });
    var w = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    };

    function T(e) {
        var t = void 0,
            n = arguments;
        return 0 !== e.offsetWidth ? t = E.apply(void 0, n) : function(e, t, n) {
            var r = {},
                o = e.style,
                i = void 0;
            for (i in t) t.hasOwnProperty(i) && (r[i] = o[i], o[i] = t[i]);
            for (i in n.call(e), t) t.hasOwnProperty(i) && (o[i] = r[i])
        }(e, w, function() {
            t = E.apply(void 0, n)
        }), t
    }

    function C(e, t, n) {
        var r = n;
        if ("object" !== (void 0 === t ? "undefined" : o(t))) return void 0 !== r ? ("number" == typeof r && (r += "px"), void(e.style[t] = r)) : b(e, t);
        for (var i in t) t.hasOwnProperty(i) && C(e, i, t[i])
    }
    m(["width", "height"], function(e) {
        var t = e.charAt(0).toUpperCase() + e.slice(1);
        S["outer" + t] = function(t, n) {
            return t && T(t, e, n ? 0 : _)
        };
        var n = "width" === e ? ["Left", "Right"] : ["Top", "Bottom"];
        S[e] = function(t, r) {
            if (void 0 === r) return t && T(t, e, O);
            if (t) {
                b(t);
                return v(t) && (r += k(t, ["padding", "border"], n)), C(t, e, r)
            }
        }
    }), e.exports = r({
        getWindow: function(e) {
            var t = e.ownerDocument || e;
            return t.defaultView || t.parentWindow
        },
        offset: function(e, t) {
            if (void 0 === t) return a(e);
            ! function(e, t) {
                "static" === C(e, "position") && (e.style.position = "relative");
                var n = a(e),
                    r = {},
                    o = void 0,
                    i = void 0;
                for (i in t) t.hasOwnProperty(i) && (o = parseFloat(C(e, i)) || 0, r[i] = o + t[i] - n[i]);
                C(e, r)
            }(e, t)
        },
        isWindow: j,
        each: m,
        css: C,
        clone: function(e) {
            var t = {};
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            if (e.overflow)
                for (var n in e) e.hasOwnProperty(n) && (t.overflow[n] = e.overflow[n]);
            return t
        },
        scrollLeft: function(e, t) {
            if (j(e)) {
                if (void 0 === t) return s(e);
                window.scrollTo(t, c(e))
            } else {
                if (void 0 === t) return e.scrollLeft;
                e.scrollLeft = t
            }
        },
        scrollTop: function(e, t) {
            if (j(e)) {
                if (void 0 === t) return c(e);
                window.scrollTo(s(e), t)
            } else {
                if (void 0 === t) return e.scrollTop;
                e.scrollTop = t
            }
        },
        viewportWidth: 0,
        viewportHeight: 0
    }, S)
}, function(e, t, n) {
    "use strict";
    var r = n(237);
    e.exports = function(e, t, n) {
        n = n || {}, 9 === t.nodeType && (t = r.getWindow(t));
        var o = n.allowHorizontalScroll,
            i = n.onlyScrollIfNeeded,
            s = n.alignWithTop,
            c = n.alignWithLeft,
            a = n.offsetTop || 0,
            l = n.offsetLeft || 0,
            u = n.offsetBottom || 0,
            d = n.offsetRight || 0;
        o = void 0 === o || o;
        var p = r.isWindow(t),
            f = r.offset(e),
            h = r.outerHeight(e),
            b = r.outerWidth(e),
            m = void 0,
            v = void 0,
            g = void 0,
            O = void 0,
            y = void 0,
            _ = void 0,
            k = void 0,
            j = void 0,
            S = void 0,
            E = void 0;
        p ? (k = t, E = r.height(k), S = r.width(k), j = {
            left: r.scrollLeft(k),
            top: r.scrollTop(k)
        }, y = {
            left: f.left - j.left - l,
            top: f.top - j.top - a
        }, _ = {
            left: f.left + b - (j.left + S) + d,
            top: f.top + h - (j.top + E) + u
        }, O = j) : (m = r.offset(t), v = t.clientHeight, g = t.clientWidth, O = {
            left: t.scrollLeft,
            top: t.scrollTop
        }, y = {
            left: f.left - (m.left + (parseFloat(r.css(t, "borderLeftWidth")) || 0)) - l,
            top: f.top - (m.top + (parseFloat(r.css(t, "borderTopWidth")) || 0)) - a
        }, _ = {
            left: f.left + b - (m.left + g + (parseFloat(r.css(t, "borderRightWidth")) || 0)) + d,
            top: f.top + h - (m.top + v + (parseFloat(r.css(t, "borderBottomWidth")) || 0)) + u
        }), y.top < 0 || _.top > 0 ? !0 === s ? r.scrollTop(t, O.top + y.top) : !1 === s ? r.scrollTop(t, O.top + _.top) : y.top < 0 ? r.scrollTop(t, O.top + y.top) : r.scrollTop(t, O.top + _.top) : i || ((s = void 0 === s || !!s) ? r.scrollTop(t, O.top + y.top) : r.scrollTop(t, O.top + _.top)), o && (y.left < 0 || _.left > 0 ? !0 === c ? r.scrollLeft(t, O.left + y.left) : !1 === c ? r.scrollLeft(t, O.left + _.left) : y.left < 0 ? r.scrollLeft(t, O.left + y.left) : r.scrollLeft(t, O.left + _.left) : i || ((c = void 0 === c || !!c) ? r.scrollLeft(t, O.left + y.left) : r.scrollLeft(t, O.left + _.left)))
    }
}, function(e, t, n) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}, function(e, t, n) {
    "use strict";
    var r = n(197),
        o = n(196),
        i = n(239);
    e.exports = function() {
        function e(e, t, n, r, s, c) {
            c !== i && o(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
        }

        function t() {
            return e
        }
        e.isRequired = e;
        var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t
        };
        return n.checkPropTypes = r, n.PropTypes = n, n
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        var t = e.dispatch;
        return function(e) {
            return function(n) {
                return Array.isArray(n) ? n.filter(Boolean).map(t) : e(n)
            }
        }
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.r(t);
    var r = {};
    n.d(r, "setupEditor", function() {
        return te
    }), n.d(r, "resetPost", function() {
        return ne
    }), n.d(r, "resetAutosave", function() {
        return re
    }), n.d(r, "updatePost", function() {
        return oe
    }), n.d(r, "setupEditorState", function() {
        return ie
    }), n.d(r, "resetBlocks", function() {
        return se
    }), n.d(r, "receiveBlocks", function() {
        return ce
    }), n.d(r, "updateBlockAttributes", function() {
        return ae
    }), n.d(r, "updateBlock", function() {
        return le
    }), n.d(r, "selectBlock", function() {
        return ue
    }), n.d(r, "startMultiSelect", function() {
        return de
    }), n.d(r, "stopMultiSelect", function() {
        return pe
    }), n.d(r, "multiSelect", function() {
        return fe
    }), n.d(r, "clearSelectedBlock", function() {
        return he
    }), n.d(r, "toggleSelection", function() {
        return be
    }), n.d(r, "replaceBlocks", function() {
        return me
    }), n.d(r, "replaceBlock", function() {
        return ve
    }), n.d(r, "moveBlocksDown", function() {
        return Oe
    }), n.d(r, "moveBlocksUp", function() {
        return ye
    }), n.d(r, "moveBlockToPosition", function() {
        return _e
    }), n.d(r, "insertBlock", function() {
        return ke
    }), n.d(r, "insertBlocks", function() {
        return je
    }), n.d(r, "showInsertionPoint", function() {
        return Se
    }), n.d(r, "hideInsertionPoint", function() {
        return Ee
    }), n.d(r, "setTemplateValidity", function() {
        return we
    }), n.d(r, "checkTemplateValidity", function() {
        return Te
    }), n.d(r, "synchronizeTemplate", function() {
        return Ce
    }), n.d(r, "editPost", function() {
        return Pe
    }), n.d(r, "savePost", function() {
        return Be
    }), n.d(r, "refreshPost", function() {
        return xe
    }), n.d(r, "trashPost", function() {
        return Ie
    }), n.d(r, "mergeBlocks", function() {
        return De
    }), n.d(r, "autosave", function() {
        return Ae
    }), n.d(r, "redo", function() {
        return Ne
    }), n.d(r, "undo", function() {
        return Re
    }), n.d(r, "createUndoLevel", function() {
        return Le
    }), n.d(r, "removeBlocks", function() {
        return Ue
    }), n.d(r, "removeBlock", function() {
        return Me
    }), n.d(r, "toggleBlockMode", function() {
        return Fe
    }), n.d(r, "startTyping", function() {
        return He
    }), n.d(r, "stopTyping", function() {
        return Ve
    }), n.d(r, "createNotice", function() {
        return Ke
    }), n.d(r, "removeNotice", function() {
        return ze
    }), n.d(r, "createSuccessNotice", function() {
        return We
    }), n.d(r, "createInfoNotice", function() {
        return qe
    }), n.d(r, "createErrorNotice", function() {
        return Ge
    }), n.d(r, "createWarningNotice", function() {
        return Ye
    }), n.d(r, "fetchSharedBlocks", function() {
        return Xe
    }), n.d(r, "receiveSharedBlocks", function() {
        return $e
    }), n.d(r, "saveSharedBlock", function() {
        return Je
    }), n.d(r, "deleteSharedBlock", function() {
        return Qe
    }), n.d(r, "updateSharedBlockTitle", function() {
        return Ze
    }), n.d(r, "convertBlockToStatic", function() {
        return et
    }), n.d(r, "convertBlockToShared", function() {
        return tt
    }), n.d(r, "insertDefaultBlock", function() {
        return nt
    }), n.d(r, "updateBlockListSettings", function() {
        return rt
    }), n.d(r, "updateEditorSettings", function() {
        return ot
    }), n.d(r, "registerToken", function() {
        return it
    }), n.d(r, "unregisterToken", function() {
        return st
    });
    var o = {};
    n.d(o, "POST_UPDATE_TRANSACTION_ID", function() {
        return lt
    }), n.d(o, "INSERTER_UTILITY_HIGH", function() {
        return dt
    }), n.d(o, "INSERTER_UTILITY_MEDIUM", function() {
        return pt
    }), n.d(o, "INSERTER_UTILITY_LOW", function() {
        return ft
    }), n.d(o, "INSERTER_UTILITY_NONE", function() {
        return ht
    }), n.d(o, "hasEditorUndo", function() {
        return mt
    }), n.d(o, "hasEditorRedo", function() {
        return vt
    }), n.d(o, "isEditedPostNew", function() {
        return gt
    }), n.d(o, "isEditedPostDirty", function() {
        return Ot
    }), n.d(o, "isCleanNewPost", function() {
        return yt
    }), n.d(o, "getCurrentPost", function() {
        return _t
    }), n.d(o, "getCurrentPostType", function() {
        return kt
    }), n.d(o, "getCurrentPostId", function() {
        return jt
    }), n.d(o, "getCurrentPostRevisionsCount", function() {
        return St
    }), n.d(o, "getCurrentPostLastRevisionId", function() {
        return Et
    }), n.d(o, "getPostEdits", function() {
        return wt
    }), n.d(o, "getCurrentPostAttribute", function() {
        return Tt
    }), n.d(o, "getEditedPostAttribute", function() {
        return Ct
    }), n.d(o, "getAutosaveAttribute", function() {
        return Pt
    }), n.d(o, "getEditedPostVisibility", function() {
        return Bt
    }), n.d(o, "isCurrentPostPending", function() {
        return xt
    }), n.d(o, "isCurrentPostPublished", function() {
        return It
    }), n.d(o, "isCurrentPostScheduled", function() {
        return Dt
    }), n.d(o, "isEditedPostPublishable", function() {
        return At
    }), n.d(o, "isEditedPostSaveable", function() {
        return Nt
    }), n.d(o, "isEditedPostEmpty", function() {
        return Rt
    }), n.d(o, "isEditedPostAutosaveable", function() {
        return Lt
    }), n.d(o, "getAutosave", function() {
        return Ut
    }), n.d(o, "hasAutosave", function() {
        return Mt
    }), n.d(o, "isEditedPostBeingScheduled", function() {
        return Ft
    }), n.d(o, "getDocumentTitle", function() {
        return Ht
    }), n.d(o, "getBlockDependantsCacheBust", function() {
        return Vt
    }), n.d(o, "getBlockName", function() {
        return Kt
    }), n.d(o, "getBlock", function() {
        return zt
    }), n.d(o, "getBlocks", function() {
        return Wt
    }), n.d(o, "getGlobalBlockCount", function() {
        return qt
    }), n.d(o, "getBlocksByUID", function() {
        return Gt
    }), n.d(o, "getBlockCount", function() {
        return Yt
    }), n.d(o, "getBlockSelectionStart", function() {
        return Xt
    }), n.d(o, "getBlockSelectionEnd", function() {
        return $t
    }), n.d(o, "getSelectedBlockCount", function() {
        return Jt
    }), n.d(o, "hasSelectedBlock", function() {
        return Qt
    }), n.d(o, "getSelectedBlockUID", function() {
        return Zt
    }), n.d(o, "getSelectedBlock", function() {
        return en
    }), n.d(o, "getBlockRootUID", function() {
        return tn
    }), n.d(o, "getAdjacentBlockUid", function() {
        return nn
    }), n.d(o, "getPreviousBlockUid", function() {
        return rn
    }), n.d(o, "getNextBlockUid", function() {
        return on
    }), n.d(o, "getSelectedBlocksInitialCaretPosition", function() {
        return sn
    }), n.d(o, "getMultiSelectedBlockUids", function() {
        return cn
    }), n.d(o, "getMultiSelectedBlocks", function() {
        return an
    }), n.d(o, "getFirstMultiSelectedBlockUid", function() {
        return ln
    }), n.d(o, "getLastMultiSelectedBlockUid", function() {
        return un
    }), n.d(o, "isFirstMultiSelectedBlock", function() {
        return dn
    }), n.d(o, "isBlockMultiSelected", function() {
        return pn
    }), n.d(o, "isAncestorMultiSelected", function() {
        return fn
    }), n.d(o, "getMultiSelectedBlocksStartUid", function() {
        return hn
    }), n.d(o, "getMultiSelectedBlocksEndUid", function() {
        return bn
    }), n.d(o, "getBlockOrder", function() {
        return mn
    }), n.d(o, "getBlockIndex", function() {
        return vn
    }), n.d(o, "isBlockSelected", function() {
        return gn
    }), n.d(o, "hasSelectedInnerBlock", function() {
        return On
    }), n.d(o, "isBlockWithinSelection", function() {
        return yn
    }), n.d(o, "hasMultiSelection", function() {
        return _n
    }), n.d(o, "isMultiSelecting", function() {
        return kn
    }), n.d(o, "isSelectionEnabled", function() {
        return jn
    }), n.d(o, "getBlockMode", function() {
        return Sn
    }), n.d(o, "isTyping", function() {
        return En
    }), n.d(o, "getBlockInsertionPoint", function() {
        return wn
    }), n.d(o, "isBlockInsertionPointVisible", function() {
        return Tn
    }), n.d(o, "isValidTemplate", function() {
        return Cn
    }), n.d(o, "getTemplate", function() {
        return Pn
    }), n.d(o, "getTemplateLock", function() {
        return Bn
    }), n.d(o, "isSavingPost", function() {
        return xn
    }), n.d(o, "didPostSaveRequestSucceed", function() {
        return In
    }), n.d(o, "didPostSaveRequestFail", function() {
        return Dn
    }), n.d(o, "isAutosavingPost", function() {
        return An
    }), n.d(o, "getSuggestedPostFormat", function() {
        return Nn
    }), n.d(o, "getEditedPostContent", function() {
        return Rn
    }), n.d(o, "getNotices", function() {
        return Ln
    }), n.d(o, "canInsertBlockType", function() {
        return Un
    }), n.d(o, "getInserterItems", function() {
        return Fn
    }), n.d(o, "getSharedBlock", function() {
        return Hn
    }), n.d(o, "isSavingSharedBlock", function() {
        return Vn
    }), n.d(o, "isFetchingSharedBlock", function() {
        return Kn
    }), n.d(o, "getSharedBlocks", function() {
        return zn
    }), n.d(o, "getStateBeforeOptimisticTransaction", function() {
        return Wn
    }), n.d(o, "isPublishingPost", function() {
        return qn
    }), n.d(o, "getProvisionalBlockUID", function() {
        return Gn
    }), n.d(o, "isPermalinkEditable", function() {
        return Yn
    }), n.d(o, "getPermalink", function() {
        return Xn
    }), n.d(o, "getPermalinkParts", function() {
        return $n
    }), n.d(o, "inSomeHistory", function() {
        return Jn
    }), n.d(o, "getBlockListSettings", function() {
        return Qn
    }), n.d(o, "getEditorSettings", function() {
        return Zn
    }), n.d(o, "getTokenSettings", function() {
        return er
    });
    var i = {};
    n.d(i, "name", function() {
        return sr
    }), n.d(i, "settings", function() {
        return cr
    });
    var s = {};
    n.d(s, "image", function() {
        return i
    });
    var c = n(1),
        a = n(4),
        l = n(54),
        u = n.n(l),
        d = n(5),
        p = n.n(d),
        f = n(29),
        h = n.n(f),
        b = n(19),
        m = n.n(b),
        v = n(74),
        g = n.n(v),
        O = n(21),
        y = n.n(O),
        _ = n(73),
        k = n.n(_),
        j = n(158),
        S = n.n(j),
        E = n(13),
        w = {
            resetTypes: [],
            ignoreTypes: [],
            shouldOverwriteState: function() {
                return !1
            }
        },
        T = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return function(t) {
                (e = p()({}, w, e)).shouldOverwriteState = Object(c.overSome)([e.shouldOverwriteState, function(t) {
                    return Object(c.includes)(e.ignoreTypes, t.type)
                }]);
                var n = {
                        past: [],
                        present: t(void 0, {}),
                        future: []
                    },
                    r = void 0,
                    o = !1,
                    i = e,
                    s = i.resetTypes,
                    a = void 0 === s ? [] : s,
                    l = i.shouldOverwriteState,
                    u = void 0 === l ? function() {
                        return !1
                    } : l;
                return function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n,
                        i = arguments[1],
                        s = e.past,
                        l = e.present,
                        d = e.future,
                        p = r;
                    switch (r = i, i.type) {
                        case "UNDO":
                            return s.length ? {
                                past: Object(c.dropRight)(s),
                                present: Object(c.last)(s),
                                future: [l].concat(m()(d))
                            } : e;
                        case "REDO":
                            return d.length ? {
                                past: [].concat(m()(s), [l]),
                                present: Object(c.first)(d),
                                future: Object(c.drop)(d)
                            } : e;
                        case "CREATE_UNDO_LEVEL":
                            return o = !0, e
                    }
                    var f = t(l, i);
                    if (Object(c.includes)(a, i.type)) return {
                        past: [],
                        present: f,
                        future: []
                    };
                    if (l === f) return e;
                    var h = s;
                    return !(o = !s.length || o) && u(i, p) || (h = [].concat(m()(s), [l])), o = !1, {
                        past: h,
                        present: f,
                        future: []
                    }
                }
            }
        },
        C = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return function(t) {
                return function(n, r) {
                    var o = t(n, r),
                        i = void 0 === n || Object(c.includes)(e.resetTypes, r.type),
                        s = n !== o;
                    if (!s && !i) return n;
                    s && void 0 !== n || (o = p()({}, o));
                    var a = Object(c.includes)(e.ignoreTypes, r.type);
                    return o.isDirty = a ? n.isDirty : !i && s, o
                }
            }
        },
        P = n(2),
        B = {
            insertUsage: {}
        },
        x = {
            alignWide: !1,
            colors: [{
                name: Object(P.__)("pale pink"),
                slug: "pale-pink",
                color: "#f78da7"
            }, {
                name: Object(P.__)("vivid red"),
                slug: "vivid-red",
                color: "#cf2e2e"
            }, {
                name: Object(P.__)("luminous vivid orange"),
                slug: "luminous-vivid-orange",
                color: "#ff6900"
            }, {
                name: Object(P.__)("luminous vivid amber"),
                slug: "luminous-vivid-amber",
                color: "#fcb900"
            }, {
                name: Object(P.__)("light green cyan"),
                slug: "light-green-cyan",
                color: "#7bdcb5"
            }, {
                name: Object(P.__)("vivid green cyan"),
                slug: "vivid-green-cyan",
                color: "#00d084"
            }, {
                name: Object(P.__)("pale cyan blue"),
                slug: "pale-cyan-blue",
                color: "#8ed1fc"
            }, {
                name: Object(P.__)("vivid cyan blue"),
                slug: "vivid-cyan-blue",
                color: "#0693e3"
            }, {
                name: Object(P.__)("very light gray"),
                slug: "very-light-gray",
                color: "#eeeeee"
            }, {
                name: Object(P.__)("cyan bluish gray"),
                slug: "cyan-bluish-gray",
                color: "#abb8c3"
            }, {
                name: Object(P.__)("very dark gray"),
                slug: "very-dark-gray",
                color: "#313131"
            }],
            maxWidth: 580,
            allowedBlockTypes: !0
        };

    function I(e, t, n) {
        return [].concat(m()(e.slice(0, n)), m()(Object(c.castArray)(t)), m()(e.slice(n)))
    }

    function D(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
            o = [].concat(m()(e));
        return o.splice(t, r), I(o, e.slice(t, t + r), n)
    }

    function A(e) {
        return e && "object" === (void 0 === e ? "undefined" : k()(e)) && "raw" in e ? e.raw : e
    }

    function N(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = y()({}, t, []);
        return e.forEach(function(e) {
            var r = e.uid,
                o = e.innerBlocks;
            n[t].push(r), g()(n, N(o, r))
        }), n
    }

    function R(e) {
        for (var t = {}, n = [].concat(m()(e)); n.length;) {
            var r = n.shift(),
                o = r.innerBlocks,
                i = h()(r, ["innerBlocks"]);
            n.push.apply(n, m()(o)), t[i.uid] = i
        }
        return t
    }

    function L(e, t) {
        return Object(c.isEqual)(Object(c.keys)(e), Object(c.keys)(t))
    }

    function U(e, t) {
        return "UPDATE_BLOCK_ATTRIBUTES" === e.type && e.uid === t.uid && L(e.attributes, t.attributes)
    }

    function M(e, t) {
        return "EDIT_POST" === e.type && L(e.edits, t.edits)
    }
    var F = Object(c.flow)([a.combineReducers, function(e) {
        return function(t, n) {
            if (t && "REMOVE_BLOCKS" === n.type) {
                for (var r = [].concat(m()(n.uids)), o = 0; o < r.length; o++) r.push.apply(r, m()(t.blockOrder[r[o]]));
                n = p()({}, n, {
                    uids: r
                })
            }
            return e(t, n)
        }
    }, T({
        resetTypes: ["SETUP_EDITOR_STATE"],
        ignoreTypes: ["RECEIVE_BLOCKS", "RESET_POST", "UPDATE_POST"],
        shouldOverwriteState: function(e, t) {
            return !(!t || e.type !== t.type) && Object(c.overSome)([U, M])(e, t)
        }
    }), C({
        resetTypes: ["SETUP_EDITOR_STATE", "REQUEST_POST_UPDATE_START"],
        ignoreTypes: ["RECEIVE_BLOCKS", "RESET_POST", "UPDATE_POST"]
    })])({
        edits: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments[1];
            switch (t.type) {
                case "EDIT_POST":
                case "SETUP_EDITOR_STATE":
                    return Object(c.reduce)(t.edits, function(t, n, r) {
                        return n !== e[r] && (t === e && (t = p()({}, e)), t[r] = n), t
                    }, e);
                case "RESET_BLOCKS":
                    return "content" in e ? Object(c.omit)(e, "content") : e;
                case "DIRTY_ARTIFICIALLY":
                    return p()({}, e);
                case "UPDATE_POST":
                case "RESET_POST":
                    var n = "UPDATE_POST" === t.type ? function(e) {
                        return t.edits[e]
                    } : function(e) {
                        return A(t.post[e])
                    };
                    return Object(c.reduce)(e, function(t, r, o) {
                        return r !== n(o) ? t : (e === t && (t = p()({}, e)), delete t[o], t)
                    }, e)
            }
            return e
        },
        blocksByUID: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments[1];
            switch (t.type) {
                case "RESET_BLOCKS":
                case "SETUP_EDITOR_STATE":
                    return R(t.blocks);
                case "RECEIVE_BLOCKS":
                    return p()({}, e, R(t.blocks));
                case "UPDATE_BLOCK_ATTRIBUTES":
                    if (!e[t.uid]) return e;
                    var n = Object(c.reduce)(t.attributes, function(n, r, o) {
                        return r !== n[o] && (n === e[t.uid].attributes && (n = p()({}, n)), n[o] = r), n
                    }, e[t.uid].attributes);
                    return n === e[t.uid].attributes ? e : p()({}, e, y()({}, t.uid, p()({}, e[t.uid], {
                        attributes: n
                    })));
                case "MOVE_BLOCK_TO_POSITION":
                    return e[t.uid].attributes.layout === t.layout ? e : p()({}, e, y()({}, t.uid, p()({}, e[t.uid], {
                        attributes: p()({}, e[t.uid].attributes, {
                            layout: t.layout
                        })
                    })));
                case "UPDATE_BLOCK":
                    return e[t.uid] ? p()({}, e, y()({}, t.uid, p()({}, e[t.uid], t.updates))) : e;
                case "INSERT_BLOCKS":
                    return p()({}, e, R(t.blocks));
                case "REPLACE_BLOCKS":
                    return t.blocks ? p()({}, Object(c.omit)(e, t.uids), R(t.blocks)) : e;
                case "REMOVE_BLOCKS":
                    return Object(c.omit)(e, t.uids);
                case "SAVE_SHARED_BLOCK_SUCCESS":
                    var r = t.id,
                        o = t.updatedId;
                    return r === o ? e : Object(c.mapValues)(e, function(e) {
                        return "core/block" === e.name && e.attributes.ref === r ? p()({}, e, {
                            attributes: p()({}, e.attributes, {
                                ref: o
                            })
                        }) : e
                    })
            }
            return e
        },
        blockOrder: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments[1];
            switch (t.type) {
                case "RESET_BLOCKS":
                case "SETUP_EDITOR_STATE":
                    return N(t.blocks);
                case "RECEIVE_BLOCKS":
                    return p()({}, e, Object(c.omit)(N(t.blocks), ""));
                case "INSERT_BLOCKS":
                    var n = t.rootUID,
                        r = void 0 === n ? "" : n,
                        o = t.blocks,
                        i = e[r] || [],
                        s = N(o, r),
                        a = t.index,
                        l = void 0 === a ? i.length : a;
                    return p()({}, e, s, y()({}, r, I(i, s[r], l)));
                case "MOVE_BLOCK_TO_POSITION":
                    var u, d = t.fromRootUID,
                        f = void 0 === d ? "" : d,
                        h = t.toRootUID,
                        b = void 0 === h ? "" : h,
                        v = t.uid,
                        g = t.index,
                        O = void 0 === g ? e[b].length : g;
                    if (f === b) {
                        var _ = e[b].indexOf(v);
                        return p()({}, e, y()({}, b, D(e[b], _, O)))
                    }
                    return p()({}, e, (u = {}, y()(u, f, Object(c.without)(e[f], v)), y()(u, b, I(e[b], v, O)), u));
                case "MOVE_BLOCKS_UP":
                    var k = t.uids,
                        j = t.rootUID,
                        S = void 0 === j ? "" : j,
                        E = Object(c.first)(k),
                        w = e[S];
                    if (!w.length || E === Object(c.first)(w)) return e;
                    var T = w.indexOf(E);
                    return p()({}, e, y()({}, S, D(w, T, T - 1, k.length)));
                case "MOVE_BLOCKS_DOWN":
                    var C = t.uids,
                        P = t.rootUID,
                        B = void 0 === P ? "" : P,
                        x = Object(c.first)(C),
                        A = Object(c.last)(C),
                        R = e[B];
                    if (!R.length || A === Object(c.last)(R)) return e;
                    var L = R.indexOf(x);
                    return p()({}, e, y()({}, B, D(R, L, L + 1, C.length)));
                case "REPLACE_BLOCKS":
                    var U = t.blocks,
                        M = t.uids;
                    if (!U) return e;
                    var F = N(U);
                    return Object(c.flow)([function(e) {
                        return Object(c.omit)(e, M)
                    }, function(e) {
                        return p()({}, e, Object(c.omit)(F, ""))
                    }, function(e) {
                        return Object(c.mapValues)(e, function(e) {
                            return Object(c.reduce)(e, function(e, t) {
                                return t === M[0] ? [].concat(m()(e), m()(F[""])) : (-1 === M.indexOf(t) && e.push(t), e)
                            }, [])
                        })
                    }])(e);
                case "REMOVE_BLOCKS":
                    return Object(c.flow)([function(e) {
                        return Object(c.omit)(e, t.uids)
                    }, function(e) {
                        return Object(c.mapValues)(e, function(e) {
                            return c.without.apply(void 0, [e].concat(m()(t.uids)))
                        })
                    }])(e)
            }
            return e
        }
    });
    var H = Object(a.combineReducers)({
        data: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments[1];
            switch (t.type) {
                case "RECEIVE_SHARED_BLOCKS":
                    return Object(c.reduce)(t.results, function(t, n) {
                        var r = n.sharedBlock,
                            o = r.id,
                            i = r.title,
                            s = {
                                uid: n.parsedBlock.uid,
                                title: i
                            };
                        return Object(c.isEqual)(t[o], s) || (t === e && (t = p()({}, t)), t[o] = s), t
                    }, e);
                case "UPDATE_SHARED_BLOCK_TITLE":
                    var n = t.id,
                        r = t.title;
                    return e[n] && e[n].title !== r ? p()({}, e, y()({}, n, p()({}, e[n], {
                        title: r
                    }))) : e;
                case "SAVE_SHARED_BLOCK_SUCCESS":
                    var o = t.id,
                        i = t.updatedId;
                    if (o === i) return e;
                    var s = e[o];
                    return p()({}, Object(c.omit)(e, o), y()({}, i, s));
                case "REMOVE_SHARED_BLOCK":
                    var a = t.id;
                    return Object(c.omit)(e, a)
            }
            return e
        },
        isFetching: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments[1];
            switch (t.type) {
                case "FETCH_SHARED_BLOCKS":
                    var n = t.id;
                    return n ? p()({}, e, y()({}, n, !0)) : e;
                case "FETCH_SHARED_BLOCKS_SUCCESS":
                case "FETCH_SHARED_BLOCKS_FAILURE":
                    var r = t.id;
                    return Object(c.omit)(e, r)
            }
            return e
        },
        isSaving: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments[1];
            switch (t.type) {
                case "SAVE_SHARED_BLOCK":
                    return p()({}, e, y()({}, t.id, !0));
                case "SAVE_SHARED_BLOCK_SUCCESS":
                case "SAVE_SHARED_BLOCK_FAILURE":
                    var n = t.id;
                    return Object(c.omit)(e, n)
            }
            return e
        }
    });
    var V = S()(Object(a.combineReducers)({
            editor: F,
            currentPost: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments[1];
                switch (t.type) {
                    case "SETUP_EDITOR_STATE":
                    case "RESET_POST":
                    case "UPDATE_POST":
                        var n = void 0;
                        if (t.post) n = t.post;
                        else {
                            if (!t.edits) return e;
                            n = p()({}, e, t.edits)
                        }
                        return Object(c.mapValues)(n, A)
                }
                return e
            },
            isTyping: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                switch (arguments[1].type) {
                    case "START_TYPING":
                        return !0;
                    case "STOP_TYPING":
                        return !1
                }
                return e
            },
            blockSelection: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        start: null,
                        end: null,
                        isMultiSelecting: !1,
                        isEnabled: !0,
                        initialPosition: null
                    },
                    t = arguments[1];
                switch (t.type) {
                    case "CLEAR_SELECTED_BLOCK":
                        return null !== e.start || null !== e.end || e.isMultiSelecting ? p()({}, e, {
                            start: null,
                            end: null,
                            isMultiSelecting: !1,
                            initialPosition: null
                        }) : e;
                    case "START_MULTI_SELECT":
                        return e.isMultiSelecting ? e : p()({}, e, {
                            isMultiSelecting: !0,
                            initialPosition: null
                        });
                    case "STOP_MULTI_SELECT":
                        return e.isMultiSelecting ? p()({}, e, {
                            isMultiSelecting: !1,
                            initialPosition: null
                        }) : e;
                    case "MULTI_SELECT":
                        return p()({}, e, {
                            start: t.start,
                            end: t.end,
                            initialPosition: null
                        });
                    case "SELECT_BLOCK":
                        return t.uid === e.start && t.uid === e.end ? e : p()({}, e, {
                            start: t.uid,
                            end: t.uid,
                            initialPosition: t.initialPosition
                        });
                    case "INSERT_BLOCKS":
                        return p()({}, e, {
                            start: t.blocks[0].uid,
                            end: t.blocks[0].uid,
                            initialPosition: null,
                            isMultiSelecting: !1
                        });
                    case "REMOVE_BLOCKS":
                        return t.uids && t.uids.length && -1 !== t.uids.indexOf(e.start) ? p()({}, e, {
                            start: null,
                            end: null,
                            initialPosition: null,
                            isMultiSelecting: !1
                        }) : e;
                    case "REPLACE_BLOCKS":
                        if (-1 === t.uids.indexOf(e.start)) return e;
                        var n = Object(c.get)(t.blocks, [0, "uid"], null);
                        return p()({}, e, {
                            start: n,
                            end: n,
                            initialPosition: null,
                            isMultiSelecting: !1
                        });
                    case "TOGGLE_SELECTION":
                        return p()({}, e, {
                            isEnabled: t.isSelectionEnabled
                        })
                }
                return e
            },
            provisionalBlockUID: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments[1];
                switch (t.type) {
                    case "INSERT_BLOCKS":
                        if (t.isProvisional) return Object(c.first)(t.blocks).uid;
                        break;
                    case "RESET_BLOCKS":
                        return null;
                    case "UPDATE_BLOCK_ATTRIBUTES":
                    case "UPDATE_BLOCK":
                    case "CONVERT_BLOCK_TO_SHARED":
                        if (t.uid === e) return null;
                        break;
                    case "REPLACE_BLOCKS":
                    case "REMOVE_BLOCKS":
                        var n = t.uids;
                        if (Object(c.includes)(n, e)) return null
                }
                return e
            },
            blocksMode: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments[1];
                if ("TOGGLE_BLOCK_MODE" === t.type) {
                    var n = t.uid;
                    return p()({}, e, y()({}, n, e[n] && "html" === e[n] ? "visual" : "html"))
                }
                return e
            },
            blockListSettings: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments[1];
                switch (t.type) {
                    case "REPLACE_BLOCKS":
                    case "REMOVE_BLOCKS":
                        return Object(c.omit)(e, t.uids);
                    case "UPDATE_BLOCK_LIST_SETTINGS":
                        var n = t.id;
                        return t.settings ? Object(c.isEqual)(e[n], t.settings) ? e : p()({}, e, y()({}, n, t.settings)) : e.hasOwnProperty(n) ? Object(c.omit)(e, n) : e
                }
                return e
            },
            isInsertionPointVisible: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                switch (arguments[1].type) {
                    case "SHOW_INSERTION_POINT":
                        return !0;
                    case "HIDE_INSERTION_POINT":
                        return !1
                }
                return e
            },
            preferences: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : B,
                    t = arguments[1];
                switch (t.type) {
                    case "INSERT_BLOCKS":
                    case "REPLACE_BLOCKS":
                        return t.blocks.reduce(function(e, n) {
                            var r = n.name,
                                o = {
                                    name: n.name
                                };
                            return Object(E.isSharedBlock)(n) && (o.ref = n.attributes.ref, r += "/" + n.attributes.ref), p()({}, e, {
                                insertUsage: p()({}, e.insertUsage, y()({}, r, {
                                    time: t.time,
                                    count: e.insertUsage[r] ? e.insertUsage[r].count + 1 : 1,
                                    insert: o
                                }))
                            })
                        }, e);
                    case "REMOVE_SHARED_BLOCK":
                        return p()({}, e, {
                            insertUsage: Object(c.omitBy)(e.insertUsage, function(e) {
                                return e.insert.ref === t.id
                            })
                        })
                }
                return e
            },
            saving: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments[1];
                switch (t.type) {
                    case "REQUEST_POST_UPDATE_START":
                        return {
                            requesting: !0,
                            successful: !1,
                            error: null,
                            isAutosave: t.isAutosave
                        };
                    case "REQUEST_POST_UPDATE_SUCCESS":
                        return {
                            requesting: !1,
                            successful: !0,
                            error: null
                        };
                    case "REQUEST_POST_UPDATE_FAILURE":
                        return {
                            requesting: !1,
                            successful: !1,
                            error: t.error
                        }
                }
                return e
            },
            notices: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = arguments[1];
                switch (t.type) {
                    case "CREATE_NOTICE":
                        return [].concat(m()(Object(c.reject)(e, {
                            id: t.notice.id
                        })), [t.notice]);
                    case "REMOVE_NOTICE":
                        var n = t.noticeId,
                            r = Object(c.findIndex)(e, {
                                id: n
                            });
                        return -1 === r ? e : [].concat(m()(e.slice(0, r)), m()(e.slice(r + 1)))
                }
                return e
            },
            sharedBlocks: H,
            template: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        isValid: !0
                    },
                    t = arguments[1];
                switch (t.type) {
                    case "SET_TEMPLATE_VALIDITY":
                        return p()({}, e, {
                            isValid: t.isValid
                        })
                }
                return e
            },
            autosave: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments[1];
                switch (t.type) {
                    case "RESET_AUTOSAVE":
                        var n = t.post,
                            r = ["title", "excerpt", "content"].map(function(e) {
                                return A(n[e])
                            }),
                            o = u()(r, 3);
                        return {
                            title: o[0],
                            excerpt: o[1],
                            content: o[2],
                            preview_link: n.preview_link
                        };
                    case "REQUEST_POST_UPDATE":
                        if (e && t.options.autosave) return Object(c.omit)(e, "preview_link")
                }
                return e
            },
            settings: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x,
                    t = arguments[1];
                switch (t.type) {
                    case "UPDATE_EDITOR_SETTINGS":
                        return p()({}, e, t.settings)
                }
                return e
            },
            tokens: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments[1];
                switch (t.type) {
                    case "REGISTER_TOKEN":
                        return p()({}, e, y()({}, t.name, t.settings));
                    case "UNREGISTER_TOKEN":
                        return Object(c.omit)(e, t.name)
                }
                return e
            }
        })),
        K = n(206),
        z = n.n(K),
        W = n(301),
        q = n.n(W),
        G = n(151),
        Y = n.n(G),
        X = n(0),
        $ = n(178),
        J = n(64),
        Q = n.n(J),
        Z = n(173),
        ee = n.n(Z);

    function te(e, t) {
        return {
            type: "SETUP_EDITOR",
            autosave: t,
            post: e
        }
    }

    function ne(e) {
        return {
            type: "RESET_POST",
            post: e
        }
    }

    function re(e) {
        return {
            type: "RESET_AUTOSAVE",
            post: e
        }
    }

    function oe(e) {
        return {
            type: "UPDATE_POST",
            edits: e
        }
    }

    function ie(e, t, n) {
        return {
            type: "SETUP_EDITOR_STATE",
            post: e,
            blocks: t,
            edits: n
        }
    }

    function se(e) {
        return {
            type: "RESET_BLOCKS",
            blocks: e
        }
    }

    function ce(e) {
        return {
            type: "RECEIVE_BLOCKS",
            blocks: e
        }
    }

    function ae(e, t) {
        return {
            type: "UPDATE_BLOCK_ATTRIBUTES",
            uid: e,
            attributes: t
        }
    }

    function le(e, t) {
        return {
            type: "UPDATE_BLOCK",
            uid: e,
            updates: t
        }
    }

    function ue(e) {
        return {
            type: "SELECT_BLOCK",
            initialPosition: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            uid: e
        }
    }

    function de() {
        return {
            type: "START_MULTI_SELECT"
        }
    }

    function pe() {
        return {
            type: "STOP_MULTI_SELECT"
        }
    }

    function fe(e, t) {
        return {
            type: "MULTI_SELECT",
            start: e,
            end: t
        }
    }

    function he() {
        return {
            type: "CLEAR_SELECTED_BLOCK"
        }
    }

    function be() {
        return {
            type: "TOGGLE_SELECTION",
            isSelectionEnabled: !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
        }
    }

    function me(e, t) {
        return {
            type: "REPLACE_BLOCKS",
            uids: Object(c.castArray)(e),
            blocks: Object(c.castArray)(t),
            time: Date.now()
        }
    }

    function ve(e, t) {
        return me(e, t)
    }

    function ge(e) {
        return function(t, n) {
            return {
                uids: Object(c.castArray)(t),
                type: e,
                rootUID: n
            }
        }
    }
    var Oe = ge("MOVE_BLOCKS_DOWN"),
        ye = ge("MOVE_BLOCKS_UP");

    function _e(e, t, n, r, o) {
        return {
            type: "MOVE_BLOCK_TO_POSITION",
            fromRootUID: t,
            toRootUID: n,
            uid: e,
            index: o,
            layout: r
        }
    }

    function ke(e, t, n) {
        return je([e], t, n)
    }

    function je(e, t, n) {
        return {
            type: "INSERT_BLOCKS",
            blocks: Object(c.castArray)(e),
            index: t,
            rootUID: n,
            time: Date.now()
        }
    }

    function Se() {
        return {
            type: "SHOW_INSERTION_POINT"
        }
    }

    function Ee() {
        return {
            type: "HIDE_INSERTION_POINT"
        }
    }

    function we(e) {
        return {
            type: "SET_TEMPLATE_VALIDITY",
            isValid: e
        }
    }

    function Te() {
        return {
            type: "CHECK_TEMPLATE_VALIDITY"
        }
    }

    function Ce() {
        return {
            type: "SYNCHRONIZE_TEMPLATE"
        }
    }

    function Pe(e) {
        return {
            type: "EDIT_POST",
            edits: e
        }
    }

    function Be() {
        return {
            type: "REQUEST_POST_UPDATE",
            options: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        }
    }

    function xe() {
        return {
            type: "REFRESH_POST"
        }
    }

    function Ie(e, t) {
        return {
            type: "TRASH_POST",
            postId: e,
            postType: t
        }
    }

    function De(e, t) {
        return {
            type: "MERGE_BLOCKS",
            blocks: [e, t]
        }
    }

    function Ae() {
        return Be({
            autosave: !0
        })
    }

    function Ne() {
        return {
            type: "REDO"
        }
    }

    function Re() {
        return {
            type: "UNDO"
        }
    }

    function Le() {
        return {
            type: "CREATE_UNDO_LEVEL"
        }
    }

    function Ue(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return {
            type: "REMOVE_BLOCKS",
            uids: Object(c.castArray)(e),
            selectPrevious: t
        }
    }

    function Me(e) {
        return Ue([e], !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1])
    }

    function Fe(e) {
        return {
            type: "TOGGLE_BLOCK_MODE",
            uid: e
        }
    }

    function He() {
        return {
            type: "START_TYPING"
        }
    }

    function Ve() {
        return {
            type: "STOP_TYPING"
        }
    }

    function Ke(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = n.id,
            o = void 0 === r ? ee()() : r,
            i = n.isDismissible;
        return {
            type: "CREATE_NOTICE",
            notice: {
                id: o,
                status: e,
                content: t,
                isDismissible: void 0 === i || i,
                spokenMessage: n.spokenMessage
            }
        }
    }

    function ze(e) {
        return {
            type: "REMOVE_NOTICE",
            noticeId: e
        }
    }
    var We = Object(c.partial)(Ke, "success"),
        qe = Object(c.partial)(Ke, "info"),
        Ge = Object(c.partial)(Ke, "error"),
        Ye = Object(c.partial)(Ke, "warning");

    function Xe(e) {
        return {
            type: "FETCH_SHARED_BLOCKS",
            id: e
        }
    }

    function $e(e) {
        return {
            type: "RECEIVE_SHARED_BLOCKS",
            results: e
        }
    }

    function Je(e) {
        return {
            type: "SAVE_SHARED_BLOCK",
            id: e
        }
    }

    function Qe(e) {
        return {
            type: "DELETE_SHARED_BLOCK",
            id: e
        }
    }

    function Ze(e, t) {
        return {
            type: "UPDATE_SHARED_BLOCK_TITLE",
            id: e,
            title: t
        }
    }

    function et(e) {
        return {
            type: "CONVERT_BLOCK_TO_STATIC",
            uid: e
        }
    }

    function tt(e) {
        return {
            type: "CONVERT_BLOCK_TO_SHARED",
            uid: e
        }
    }

    function nt(e, t, n) {
        var r = Object(E.createBlock)(Object(E.getDefaultBlockName)(), e);
        return p()({}, ke(r, n, t), {
            isProvisional: !0
        })
    }

    function rt(e, t) {
        return {
            type: "UPDATE_BLOCK_LIST_SETTINGS",
            id: e,
            settings: t
        }
    }

    function ot(e) {
        return {
            type: "UPDATE_EDITOR_SETTINGS",
            settings: e
        }
    }

    function it(e, t) {
        return {
            type: "REGISTER_TOKEN",
            name: e,
            settings: t
        }
    }

    function st(e) {
        return {
            type: "UNREGISTER_TOKEN",
            name: e
        }
    }
    var ct = n(80),
        at = n(157),
        lt = "post-update",
        ut = /%(?:postname|pagename)%/,
        dt = 3,
        pt = 2,
        ft = 1,
        ht = 0,
        bt = [];

    function mt(e) {
        return e.editor.past.length > 0
    }

    function vt(e) {
        return e.editor.future.length > 0
    }

    function gt(e) {
        return "auto-draft" === _t(e).status
    }

    function Ot(e) {
        return e.editor.isDirty || Jn(e, Ot)
    }

    function yt(e) {
        return !Ot(e) && gt(e)
    }

    function _t(e) {
        return e.currentPost
    }

    function kt(e) {
        return e.currentPost.type
    }

    function jt(e) {
        return _t(e).id || null
    }

    function St(e) {
        return Object(c.get)(_t(e), ["_links", "version-history", 0, "count"], 0)
    }

    function Et(e) {
        return Object(c.get)(_t(e), ["_links", "predecessor-version", 0, "id"], null)
    }

    function wt(e) {
        return e.editor.present.edits
    }

    function Tt(e, t) {
        var n = _t(e);
        if (n.hasOwnProperty(t)) return n[t]
    }

    function Ct(e, t) {
        var n = wt(e);
        switch (t) {
            case "content":
                return Rn(e)
        }
        return n.hasOwnProperty(t) ? n[t] : Tt(e, t)
    }

    function Pt(e, t) {
        if (!Mt(e)) return null;
        var n = Ut(e);
        return n.hasOwnProperty(t) ? n[t] : void 0
    }

    function Bt(e) {
        var t = Ct(e, "status"),
            n = Ct(e, "password");
        return "private" === t ? "private" : n ? "password" : "public"
    }

    function xt(e) {
        return "pending" === _t(e).status
    }

    function It(e) {
        var t = _t(e);
        return -1 !== ["publish", "private"].indexOf(t.status) || "future" === t.status && Object(at.moment)(t.date).isBefore(Object(at.moment)())
    }

    function Dt(e) {
        return "future" === _t(e).status && !It(e)
    }

    function At(e) {
        var t = _t(e);
        return Ot(e) || -1 === ["publish", "private", "future"].indexOf(t.status)
    }

    function Nt(e) {
        return !xn(e) && (!!Ct(e, "title") || !!Ct(e, "excerpt") || !Rt(e))
    }

    function Rt(e) {
        return !Yt(e) && !Ct(e, "content")
    }

    function Lt(e) {
        if (!Nt(e)) return !1;
        if (!Mt(e)) return !0;
        var t = Ut(e);
        return ["title", "excerpt", "content"].some(function(n) {
            return t[n] !== Ct(e, n)
        })
    }

    function Ut(e) {
        return e.autosave
    }

    function Mt(e) {
        return !!Ut(e)
    }

    function Ft(e) {
        var t = Object(at.moment)(Ct(e, "date")),
            n = Object(at.moment)().add(1, "minute");
        return t.isAfter(n)
    }

    function Ht(e) {
        var t = Ct(e, "title");
        return t && t.trim() || (t = yt(e) ? Object(P.__)("New post") : Object(P.__)("(Untitled)")), t
    }
    var Vt = Object(ct.a)(function() {
        return []
    }, function(e, t) {
        return Object(c.map)(mn(e, t), function(t) {
            return zt(e, t)
        })
    });

    function Kt(e, t) {
        var n = e.editor.present.blocksByUID[t];
        return n ? n.name : null
    }
    var zt = Object(ct.a)(function(e, t) {
        var n = e.editor.present.blocksByUID[t];
        if (!n) return null;
        var r = n.attributes,
            o = Object(E.getBlockType)(n.name);
        return o && (r = Object(c.reduce)(o.attributes, function(t, n, o) {
            return "meta" === n.source && (t === r && (t = p()({}, t)), t[o] = function(e, t) {
                return Object(c.has)(e, ["editor", "present", "edits", "meta", t]) ? Object(c.get)(e, ["editor", "present", "edits", "meta", t]) : Object(c.get)(e, ["currentPost", "meta", t])
            }(e, n.meta)), t
        }, r)), p()({}, n, {
            attributes: r,
            innerBlocks: Wt(e, t)
        })
    }, function(e, t) {
        return [e.editor.present.blocksByUID[t], Vt(e, t), e.editor.present.edits.meta, e.currentPost.meta]
    });
    var Wt = Object(ct.a)(function(e, t) {
            return Object(c.map)(mn(e, t), function(t) {
                return zt(e, t)
            })
        }, function(e) {
            return [e.editor.present.blockOrder, e.editor.present.blocksByUID]
        }),
        qt = Object(ct.a)(function(e, t) {
            return t ? Object(c.reduce)(e.editor.present.blocksByUID, function(e, n) {
                return n.name === t ? e + 1 : e
            }, 0) : Object(c.size)(e.editor.present.blocksByUID)
        }, function(e) {
            return [e.editor.present.blocksByUID]
        }),
        Gt = Object(ct.a)(function(e, t) {
            return Object(c.map)(Object(c.castArray)(t), function(t) {
                return zt(e, t)
            })
        }, function(e) {
            return [e.editor.present.blocksByUID, e.editor.present.blockOrder, e.editor.present.edits.meta, e.currentPost.meta, e.editor.present.blocksByUID]
        });

    function Yt(e, t) {
        return mn(e, t).length
    }

    function Xt(e) {
        return e.blockSelection.start
    }

    function $t(e) {
        return e.blockSelection.end
    }

    function Jt(e) {
        var t = cn(e).length;
        return t || (e.blockSelection.start ? 1 : 0)
    }

    function Qt(e) {
        var t = e.blockSelection,
            n = t.start,
            r = t.end;
        return !!n && n === r
    }

    function Zt(e) {
        var t = e.blockSelection,
            n = t.start;
        return n === t.end && n ? n : null
    }

    function en(e) {
        var t = Zt(e);
        return t ? zt(e, t) : null
    }

    function tn(e, t) {
        var n = e.editor.present.blockOrder;
        for (var r in n)
            if (Object(c.includes)(n[r], t)) return r;
        return null
    }

    function nn(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        if (void 0 === t && (t = Object(c.get)(en(e), ["uid"])), void 0 === t && (t = n < 0 ? ln(e) : un(e)), !t) return null;
        var r = tn(e, t);
        if (null === r) return null;
        var o = e.editor.present.blockOrder[r],
            i = o.indexOf(t) + 1 * n;
        return i < 0 ? null : i === o.length ? null : o[i]
    }

    function rn(e, t) {
        return nn(e, t, -1)
    }

    function on(e, t) {
        return nn(e, t, 1)
    }

    function sn(e) {
        var t = e.blockSelection,
            n = t.start;
        return n === t.end && n ? e.blockSelection.initialPosition : null
    }
    var cn = Object(ct.a)(function(e) {
            var t = e.blockSelection,
                n = t.start,
                r = t.end;
            if (n === r) return [];
            var o = tn(e, n);
            if (null === o) return [];
            var i = mn(e, o),
                s = i.indexOf(n),
                c = i.indexOf(r);
            return s > c ? i.slice(c, s + 1) : i.slice(s, c + 1)
        }, function(e) {
            return [e.editor.present.blockOrder, e.blockSelection.start, e.blockSelection.end]
        }),
        an = Object(ct.a)(function(e) {
            var t = cn(e);
            return t.length ? t.map(function(t) {
                return zt(e, t)
            }) : bt
        }, function(e) {
            return [e.editor.present.blockOrder, e.blockSelection.start, e.blockSelection.end, e.editor.present.blocksByUID, e.editor.present.edits.meta, e.currentPost.meta]
        });

    function ln(e) {
        return Object(c.first)(cn(e)) || null
    }

    function un(e) {
        return Object(c.last)(cn(e)) || null
    }

    function dn(e, t) {
        return ln(e) === t
    }

    function pn(e, t) {
        return -1 !== cn(e).indexOf(t)
    }
    var fn = Object(ct.a)(function(e, t) {
        for (var n = t, r = !1; n && !r;) r = pn(e, n = tn(e, n));
        return r
    }, function(e) {
        return [e.editor.present.blockOrder, e.blockSelection.start, e.blockSelection.end]
    });

    function hn(e) {
        var t = e.blockSelection,
            n = t.start;
        return n === t.end ? null : n || null
    }

    function bn(e) {
        var t = e.blockSelection,
            n = t.start,
            r = t.end;
        return n === r ? null : r || null
    }

    function mn(e, t) {
        return e.editor.present.blockOrder[t || ""] || bt
    }

    function vn(e, t, n) {
        return mn(e, n).indexOf(t)
    }

    function gn(e, t) {
        var n = e.blockSelection,
            r = n.start;
        return r === n.end && r === t
    }

    function On(e, t) {
        return Object(c.some)(mn(e, t), function(t) {
            return gn(e, t)
        })
    }

    function yn(e, t) {
        if (!t) return !1;
        var n = cn(e),
            r = n.indexOf(t);
        return r > -1 && r < n.length - 1
    }

    function _n(e) {
        var t = e.blockSelection;
        return t.start !== t.end
    }

    function kn(e) {
        return e.blockSelection.isMultiSelecting
    }

    function jn(e) {
        return e.blockSelection.isEnabled
    }

    function Sn(e, t) {
        return e.blocksMode[t] || "visual"
    }

    function En(e) {
        return e.isTyping
    }

    function wn(e) {
        var t = void 0,
            n = void 0,
            r = void 0,
            o = e.blockSelection.end;
        return o ? (t = tn(e, o) || void 0, n = Object(c.get)(zt(e, o), ["attributes", "layout"]), r = vn(e, o, t) + 1) : r = mn(e).length, {
            rootUID: t,
            layout: n,
            index: r
        }
    }

    function Tn(e) {
        return e.isInsertionPointVisible
    }

    function Cn(e) {
        return e.template.isValid
    }

    function Pn(e) {
        return e.settings.template
    }

    function Bn(e, t) {
        if (!t) return e.settings.templateLock;
        var n = Qn(e, t);
        return n ? n.templateLock : null
    }

    function xn(e) {
        return e.saving.requesting
    }

    function In(e) {
        return e.saving.successful
    }

    function Dn(e) {
        return !!e.saving.error
    }

    function An(e) {
        return xn(e) && e.saving.isAutosave
    }

    function Nn(e) {
        var t = mn(e),
            n = void 0;
        switch (1 === t.length && (n = zt(e, t[0]).name), 2 === t.length && "core/paragraph" === zt(e, t[1]).name && (n = zt(e, t[0]).name), n) {
            case "core/image":
                return "image";
            case "core/quote":
            case "core/pullquote":
                return "quote";
            case "core/gallery":
                return "gallery";
            case "core/video":
            case "core-embed/youtube":
            case "core-embed/vimeo":
                return "video";
            case "core/audio":
            case "core-embed/spotify":
            case "core-embed/soundcloud":
                return "audio"
        }
        return null
    }
    var Rn = Object(ct.a)(function(e) {
        var t = wt(e);
        return "content" in t ? t.content : Object(E.serialize)(Wt(e))
    }, function(e) {
        return [e.editor.present.edits.content, e.editor.present.blocksByUID, e.editor.present.blockOrder]
    });

    function Ln(e) {
        return e.notices
    }
    var Un = Object(ct.a)(function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            r = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                return Object(c.isBoolean)(e) ? e : Object(c.isArray)(e) ? Object(c.includes)(e, t) : n
            },
            o = Object(E.getBlockType)(t);
        if (!o) return !1;
        if (!r(Zn(e).allowedBlockTypes, t, !0)) return !1;
        if (!!Bn(e, n)) return !1;
        var i = Qn(e, n),
            s = r(Object(c.get)(i, ["allowedBlocks"]), t),
            a = r(o.parent, Kt(e, n));
        return null !== s && null !== a ? s || a : null !== s ? s : null === a || a
    }, function(e, t, n) {
        return [e.blockListSettings[n], e.editor.present.blocksByUID[n], e.settings.allowedBlockTypes, e.settings.templateLock]
    });

    function Mn(e, t) {
        return e.preferences.insertUsage[t] || null
    }
    var Fn = Object(ct.a)(function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = function(e, t, n) {
                    return n ? dt : t > 0 ? pt : "common" === e ? ft : ht
                },
                r = function(e, t) {
                    if (!e) return t;
                    var n = Date.now() - e;
                    switch (!0) {
                        case n < 36e5:
                            return 4 * t;
                        case n < 864e5:
                            return 2 * t;
                        case n < 6048e5:
                            return t / 2;
                        default:
                            return t / 4
                    }
                },
                o = Object(E.getBlockTypes)().filter(function(n) {
                    return !!Object(E.hasBlockSupport)(n, "inserter", !0) && Un(e, n.name, t)
                }).map(function(t) {
                    var o = t.name,
                        i = !1;
                    Object(E.hasBlockSupport)(t.name, "multiple", !0) || (i = Object(c.some)(Wt(e), {
                        name: t.name
                    }));
                    var s = Object(c.isArray)(t.parent),
                        a = Mn(e, o) || {},
                        l = a.time,
                        u = a.count,
                        d = void 0 === u ? 0 : u;
                    return {
                        id: o,
                        name: t.name,
                        initialAttributes: {},
                        title: t.title,
                        icon: t.icon,
                        category: t.category,
                        keywords: t.keywords,
                        isDisabled: i,
                        utility: n(t.category, d, s),
                        frecency: r(l, d),
                        hasChildBlocks: Object(E.hasChildBlocks)(t.name)
                    }
                }),
                i = zn(e).filter(function(n) {
                    if (!Un(e, "core/block", t)) return !1;
                    var r = zt(e, n.uid);
                    if (!r) return !1;
                    var o = Object(E.getBlockType)(r.name);
                    return !!o && !!Un(e, o.name, t)
                }).map(function(t) {
                    var o = "core/block/" + t.id,
                        i = zt(e, t.uid),
                        s = Object(E.getBlockType)(i.name),
                        c = Mn(e, o) || {},
                        a = c.time,
                        l = c.count,
                        u = void 0 === l ? 0 : l,
                        d = n("shared", u, !1),
                        p = r(a, u);
                    return {
                        id: o,
                        name: "core/block",
                        initialAttributes: {
                            ref: t.id
                        },
                        title: t.title,
                        icon: s.icon,
                        category: "shared",
                        keywords: [],
                        isDisabled: !1,
                        utility: d,
                        frecency: p
                    }
                });
            return Object(c.orderBy)([].concat(m()(o), m()(i)), ["utility", "frecency"], ["desc", "desc"])
        }, function(e, t, n) {
            return [e.blockListSettings[n], e.editor.present.blockOrder, e.editor.present.blocksByUID, e.preferences.insertUsage, e.settings.allowedBlockTypes, e.settings.templateLock, e.sharedBlocks.data, Object(E.getBlockTypes)()]
        }),
        Hn = Object(ct.a)(function(e, t) {
            var n = e.sharedBlocks.data[t];
            if (!n) return null;
            var r = isNaN(parseInt(t));
            return p()({}, n, {
                id: r ? t : +t,
                isTemporary: r
            })
        }, function(e, t) {
            return [e.sharedBlocks.data[t]]
        });

    function Vn(e, t) {
        return e.sharedBlocks.isSaving[t] || !1
    }

    function Kn(e, t) {
        return !!e.sharedBlocks.isFetching[t]
    }

    function zn(e) {
        return Object(c.map)(e.sharedBlocks.data, function(t, n) {
            return Hn(e, n)
        })
    }

    function Wn(e, t) {
        var n = Object(c.find)(e.optimist, function(e) {
            return e.beforeState && Object(c.get)(e.action, ["optimist", "id"]) === t
        });
        return n ? n.beforeState : null
    }

    function qn(e) {
        if (!xn(e)) return !1;
        if (!It(e)) return !1;
        var t = Wn(e, lt);
        return !!t && !It(t)
    }

    function Gn(e) {
        return e.provisionalBlockUID
    }

    function Yn(e) {
        var t = Ct(e, "permalink_template");
        return ut.test(t)
    }

    function Xn(e) {
        var t = $n(e),
            n = t.prefix,
            r = t.postName,
            o = t.suffix;
        return Yn(e) ? n + r + o : n
    }

    function $n(e) {
        var t = Ct(e, "permalink_template"),
            n = Ct(e, "slug") || Ct(e, "generated_slug"),
            r = t.split(ut),
            o = u()(r, 2);
        return {
            prefix: o[0],
            postName: n,
            suffix: o[1]
        }
    }

    function Jn(e, t) {
        var n = e.optimist;
        return !!n && n.some(function(e) {
            var n = e.beforeState;
            return n && t(n)
        })
    }

    function Qn(e, t) {
        return e.blockListSettings[t]
    }

    function Zn(e) {
        return e.settings
    }

    function er(e, t) {
        return t ? e.tokens[t] : e.tokens
    }

    function tr(e, t) {
        var n = t.getState(),
            r = Gn(n);
        if (r && !gn(n, r)) return Me(r, !1)
    }
    var nr = {
        REQUEST_POST_UPDATE: function(e, t) {
            var n = t.dispatch,
                r = (0, t.getState)(),
                o = _t(r),
                i = !!e.options.autosave;
            if ((i ? Lt : Nt)(r)) {
                var s = wt(r);
                i && (s = Object(c.pick)(s, ["title", "content", "excerpt"])), gt(r) && (s = p()({
                    status: "draft"
                }, s));
                var a = p()({}, s, {
                        content: Rn(r),
                        id: o.id
                    }),
                    l = wp.api.getPostTypeRoute(kt(r));
                n({
                    type: "REQUEST_POST_UPDATE_START",
                    optimist: {
                        type: j.BEGIN,
                        id: lt
                    },
                    isAutosave: i
                }), n(p()({}, oe(a), {
                    optimist: {
                        id: lt
                    }
                }));
                var u = void 0;
                i ? (a = p()({}, Object(c.pick)(o, ["title", "content", "excerpt"]), Ut(r), a, {
                    parent: o.id
                }), u = Q()({
                    path: "/wp/v2/" + l + "/" + o.id + "/autosaves",
                    method: "POST",
                    data: a
                })) : (n(ze("SAVE_POST_NOTICE_ID")), n(ze("AUTOSAVE_POST_NOTICE_ID")), u = Q()({
                    path: "/wp/v2/" + l + "/" + o.id,
                    method: "PUT",
                    data: a
                })), u.then(function(e) {
                    n((i ? re : ne)(e));
                    var t = e.id !== o.id;
                    n({
                        type: "REQUEST_POST_UPDATE_SUCCESS",
                        previousPost: o,
                        post: e,
                        optimist: {
                            type: t ? j.REVERT : j.COMMIT,
                            id: lt
                        },
                        isAutosave: i
                    })
                }, function(e) {
                    e = Object(c.get)(e, ["responseJSON"], {
                        code: "unknown_error",
                        message: Object(P.__)("An unknown error occurred.")
                    }), n({
                        type: "REQUEST_POST_UPDATE_FAILURE",
                        optimist: {
                            type: j.REVERT,
                            id: lt
                        },
                        post: o,
                        edits: s,
                        error: e
                    })
                })
            }
        },
        REQUEST_POST_UPDATE_SUCCESS: function(e, t) {
            var n = e.previousPost,
                r = e.post,
                o = e.isAutosave,
                i = t.dispatch,
                s = t.getState;
            if (Y()(wt(s())).length && i({
                    type: "DIRTY_ARTIFICIALLY"
                }), !o) {
                var a = ["publish", "private", "future"],
                    l = Object(c.includes)(a, n.status),
                    u = Object(c.includes)(a, r.status),
                    d = void 0,
                    p = !0;
                l || u ? l && !u ? (d = Object(P.__)("Post reverted to draft."), p = !1) : d = !l && u ? {
                    publish: Object(P.__)("Post published!"),
                    private: Object(P.__)("Post published privately!"),
                    future: Object(P.__)("Post scheduled!")
                }[r.status] : Object(P.__)("Post updated!") : d = null, d && i(We(Object(X.createElement)("p", null, d, " ", p && Object(X.createElement)("a", {
                    href: r.link
                }, Object(P.__)("View post"))), {
                    id: "SAVE_POST_NOTICE_ID",
                    spokenMessage: d
                }))
            }
        },
        REQUEST_POST_UPDATE_FAILURE: function(e, t) {
            var n = e.post,
                r = e.edits,
                o = e.error;
            if (!o || "rest_autosave_no_changes" !== o.code) {
                var i = t.dispatch,
                    s = ["publish", "private", "future"],
                    c = -1 !== s.indexOf(n.status),
                    a = {
                        publish: Object(P.__)("Publishing failed"),
                        private: Object(P.__)("Publishing failed"),
                        future: Object(P.__)("Scheduling failed")
                    },
                    l = c || -1 === s.indexOf(r.status) ? Object(P.__)("Updating failed") : a[r.status];
                i(Ge(l, {
                    id: "SAVE_POST_NOTICE_ID"
                }))
            }
        },
        TRASH_POST: function(e, t) {
            var n = t.dispatch,
                r = t.getState,
                o = e.postId,
                i = wp.api.getPostTypeRoute(kt(r()));
            n(ze("TRASH_POST_NOTICE_ID")), Q()({
                path: "/wp/v2/" + i + "/" + o,
                method: "DELETE"
            }).then(function() {
                var e = _t(r());
                n(ne(p()({}, e, {
                    status: "trash"
                })))
            }, function(t) {
                n(p()({}, e, {
                    type: "TRASH_POST_FAILURE",
                    error: Object(c.get)(t, ["responseJSON"], {
                        code: "unknown_error",
                        message: Object(P.__)("An unknown error occurred.")
                    })
                }))
            })
        },
        TRASH_POST_FAILURE: function(e, t) {
            var n = e.error.message && "unknown_error" !== e.error.code ? e.error.message : Object(P.__)("Trashing failed");
            t.dispatch(Ge(n, {
                id: "TRASH_POST_NOTICE_ID"
            }))
        },
        REFRESH_POST: function(e, t) {
            var n = t.dispatch,
                r = (0, t.getState)(),
                o = _t(r),
                i = wp.api.getPostTypeRoute(kt(r));
            Q()({
                path: "/wp/v2/" + i + "/" + o.id,
                data: {
                    context: "edit"
                }
            }).then(function(e) {
                n(ne(e))
            })
        },
        MERGE_BLOCKS: function(e, t) {
            var n = t.dispatch,
                r = t.getState(),
                o = u()(e.blocks, 2),
                i = o[0],
                s = o[1],
                c = zt(r, i),
                a = zt(r, s),
                l = Object(E.getBlockType)(c.name);
            if (l.merge) {
                var d = c.name === a.name ? [a] : Object(E.switchToBlockType)(a, c.name);
                if (d && d.length) {
                    var f = l.merge(c.attributes, d[0].attributes);
                    n(ue(c.uid, -1)), n(me([c.uid, a.uid], [p()({}, c, {
                        attributes: p()({}, c.attributes, f)
                    })].concat(m()(d.slice(1)))))
                }
            } else n(ue(c.uid))
        },
        SETUP_EDITOR: function(e, t) {
            var n = t.getState,
                r = e.post,
                o = e.autosave,
                i = n(),
                s = Pn(i),
                c = Bn(i),
                a = void 0,
                l = !0;
            r.content.raw ? (a = Object(E.parse)(r.content.raw), l = !s || "all" !== c || Object(E.doBlocksMatchTemplate)(a, s)) : a = s ? Object(E.synchronizeBlocksWithTemplate)([], s) : Object(E.getDefaultBlockForPostFormat)(r.format) ? [Object(E.createBlock)(Object(E.getDefaultBlockForPostFormat)(r.format))] : [];
            var u = {};
            "auto-draft" === r.status && (u.title = r.title.raw);
            var d = void 0;
            if (o) {
                var p = Object(P.__)("There is an autosave of this post that is more recent than the version below.");
                d = Ye(Object(X.createElement)("p", null, p, " ", Object(X.createElement)("a", {
                    href: o.editLink
                }, Object(P.__)("View the autosave"))), {
                    id: "AUTOSAVE_POST_NOTICE_ID",
                    spokenMessage: p
                })
            }
            return [we(l), ie(r, a, u)].concat(m()(d ? [d] : []))
        },
        SYNCHRONIZE_TEMPLATE: function(e, t) {
            var n = (0, t.getState)(),
                r = Wt(n),
                o = Pn(n);
            return [se(Object(E.synchronizeBlocksWithTemplate)(r, o)), we(!0)]
        },
        CHECK_TEMPLATE_VALIDITY: function(e, t) {
            var n = (0, t.getState)(),
                r = Wt(n),
                o = Pn(n),
                i = Bn(n);
            return we(!o || "all" !== i || Object(E.doBlocksMatchTemplate)(r, o))
        },
        FETCH_SHARED_BLOCKS: function(e, t) {
            var n = wp.api.getPostTypeRoute("wp_block");
            if (n) {
                var r = e.id,
                    o = t.dispatch;
                (r ? Q()({
                    path: "/wp/v2/" + n + "/" + r
                }) : Q()({
                    path: "/wp/v2/" + n + "?per_page=-1"
                })).then(function(e) {
                    o($e(Object(c.map)(Object(c.castArray)(e), function(e) {
                        return {
                            sharedBlock: e,
                            parsedBlock: Object(E.parse)(e.content)[0]
                        }
                    }))), o({
                        type: "FETCH_SHARED_BLOCKS_SUCCESS",
                        id: r
                    })
                }, function(e) {
                    o({
                        type: "FETCH_SHARED_BLOCKS_FAILURE",
                        id: r,
                        error: e.responseJSON || {
                            code: "unknown_error",
                            message: Object(P.__)("An unknown error occurred.")
                        }
                    })
                })
            }
        },
        RECEIVE_SHARED_BLOCKS: function(e) {
            return ce(Object(c.map)(e.results, "parsedBlock"))
        },
        SAVE_SHARED_BLOCK: function(e, t) {
            var n = wp.api.getPostTypeRoute("wp_block");
            if (n) {
                var r = e.id,
                    o = t.dispatch,
                    i = t.getState(),
                    s = Hn(i, r),
                    a = s.uid,
                    l = s.title,
                    u = s.isTemporary,
                    d = zt(i, a),
                    p = d.name,
                    f = d.attributes,
                    h = d.innerBlocks,
                    b = Object(E.serialize)(Object(E.createBlock)(p, f, h)),
                    m = u ? {
                        title: l,
                        content: b
                    } : {
                        id: r,
                        title: l,
                        content: b
                    },
                    v = u ? "/wp/v2/" + n : "/wp/v2/" + n + "/" + r,
                    g = u ? "POST" : "PUT";
                Q()({
                    path: v,
                    data: m,
                    method: g
                }).then(function(e) {
                    o({
                        type: "SAVE_SHARED_BLOCK_SUCCESS",
                        updatedId: e.id,
                        id: r
                    });
                    var t = u ? Object(P.__)("Block created.") : Object(P.__)("Block updated.");
                    o(We(t, {
                        id: "SHARED_BLOCK_NOTICE_ID"
                    }))
                }, function(e) {
                    o({
                        type: "SAVE_SHARED_BLOCK_FAILURE",
                        id: r
                    });
                    var t = Object(P.__)("An unknown error occurred.");
                    o(Ge(Object(c.get)(e.responseJSON, ["message"], t), {
                        id: "SHARED_BLOCK_NOTICE_ID",
                        spokenMessage: t
                    }))
                })
            }
        },
        DELETE_SHARED_BLOCK: function(e, t) {
            var n = wp.api.getPostTypeRoute("wp_block");
            if (n) {
                var r = e.id,
                    o = t.getState,
                    i = t.dispatch,
                    s = Hn(o(), r);
                if (s && !s.isTemporary) {
                    var a = Wt(o()).filter(function(e) {
                            return Object(E.isSharedBlock)(e) && e.attributes.ref === r
                        }).map(function(e) {
                            return e.uid
                        }),
                        l = Object(c.uniqueId)();
                    i({
                        type: "REMOVE_SHARED_BLOCK",
                        id: r,
                        optimist: {
                            type: j.BEGIN,
                            id: l
                        }
                    }), i(Ue([].concat(m()(a), [s.uid]))), Q()({
                        path: "/wp/v2/" + n + "/" + r,
                        method: "DELETE"
                    }).then(function() {
                        i({
                            type: "DELETE_SHARED_BLOCK_SUCCESS",
                            id: r,
                            optimist: {
                                type: j.COMMIT,
                                id: l
                            }
                        });
                        var e = Object(P.__)("Block deleted.");
                        i(We(e, {
                            id: "SHARED_BLOCK_NOTICE_ID"
                        }))
                    }, function(e) {
                        i({
                            type: "DELETE_SHARED_BLOCK_FAILURE",
                            id: r,
                            optimist: {
                                type: j.REVERT,
                                id: l
                            }
                        });
                        var t = Object(P.__)("An unknown error occurred.");
                        i(Ge(Object(c.get)(e.responseJSON, ["message"], t), {
                            id: "SHARED_BLOCK_NOTICE_ID",
                            spokenMessage: t
                        }))
                    })
                }
            }
        },
        CONVERT_BLOCK_TO_STATIC: function(e, t) {
            var n = t.getState(),
                r = zt(n, e.uid),
                o = Hn(n, r.attributes.ref),
                i = zt(n, o.uid),
                s = Object(E.createBlock)(i.name, i.attributes);
            t.dispatch(ve(r.uid, s))
        },
        CONVERT_BLOCK_TO_SHARED: function(e, t) {
            var n = t.getState,
                r = t.dispatch,
                o = zt(n(), e.uid),
                i = {
                    id: Object(c.uniqueId)("shared"),
                    uid: o.uid,
                    title: Object(P.__)("Untitled shared block")
                };
            r($e([{
                sharedBlock: i,
                parsedBlock: o
            }])), r(Je(i.id)), r(ve(o.uid, Object(E.createBlock)("core/block", {
                ref: i.id,
                layout: o.attributes.layout
            }))), r(ce([o]))
        },
        CREATE_NOTICE: function(e) {
            var t = e.notice,
                n = t.content,
                r = t.spokenMessage || n;
            Object($.speak)(r, "assertive")
        },
        EDIT_POST: function(e, t) {
            var n = t.getState,
                r = Object(c.get)(e, ["edits", "format"]);
            if (r) {
                var o = Object(E.getDefaultBlockForPostFormat)(r);
                return o && 0 === Yt(n()) ? ke(Object(E.createBlock)(o)) : void 0
            }
        },
        CLEAR_SELECTED_BLOCK: tr,
        SELECT_BLOCK: tr,
        MULTI_SELECT: tr,
        REMOVE_BLOCKS: function(e, t) {
            var n = t.getState,
                r = t.dispatch;
            if (e.selectPrevious) {
                var o = e.uids[0],
                    i = n(),
                    s = en(i),
                    a = p()({}, i, {
                        editor: {
                            present: Object(c.last)(i.editor.past)
                        }
                    }),
                    l = tn(a, o),
                    u = rn(a, o) || l;
                u !== s && r(ue(u))
            }
        }
    };
    var rr = function(e) {
            var t, n = [z()(nr), q.a],
                r = function() {
                    throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")
                },
                o = {
                    getState: e.getState,
                    dispatch: function() {
                        return r.apply(void 0, arguments)
                    }
                };
            return t = n.map(function(e) {
                return e(o)
            }), r = c.flowRight.apply(void 0, m()(t))(e.dispatch), e.dispatch = r, e
        },
        or = (n(636), n(3)),
        ir = Object(or.withFilters)("editor.MediaUpload")(function() {
            return null
        }),
        sr = "core/image",
        cr = {
            id: "image",
            title: Object(P.__)("Inline Image"),
            type: "image",
            icon: "format-image",
            edit: function(e) {
                var t = e.onSave;
                return Object(X.createElement)(ir, {
                    type: "image",
                    onSelect: function(e) {
                        return t(e)
                    },
                    onClose: function() {
                        return t(null)
                    },
                    render: function(e) {
                        return (0, e.open)(), null
                    }
                })
            },
            save: function(e) {
                var t = e.id,
                    n = e.url,
                    r = e.alt,
                    o = e.width;
                return Object(X.createElement)("img", {
                    className: "wp-image-" + t,
                    style: {
                        width: Math.min(o, 150) + "px"
                    },
                    src: n,
                    alt: r
                })
            }
        },
        ar = n(36),
        lr = window.console.error;
    var ur = "GUTENBERG_PREFERENCES_" + window.userSettings.uid,
        dr = rr(Object(a.registerReducer)("core/editor", Object(a.withRehydration)(V, "preferences", ur)));
    Object(a.loadAndPersist)(dr, V, "preferences", ur), Object(a.registerSelectors)("core/editor", o), Object(a.registerActions)("core/editor", r), Object(c.forOwn)(s, function(e) {
        var t = e.name,
            n = e.settings;
        (n = function(e, t, n) {
            if ("string" == typeof e)
                if (/^[a-z][a-z0-9-]*\/[a-z][a-z0-9-]*$/.test(e))
                    if (Object(c.has)(n, [e])) lr('Token "' + e + '" is already registered.');
                    else if ((t = Object(ar.applyFilters)("editor.registerToken", t, e)) && Object(c.isFunction)(t.save))
                if (!Object(c.has)(t, ["edit"]) || Object(c.isFunction)(t.edit))
                    if (Object(c.has)(t, ["keywords"]) && t.keywords.length > 3) lr('The token "' + e + '" can have a maximum of 3 keywords.');
                    else if (Object(c.has)(t, ["title"]) && "" !== t.title)
                if ("string" == typeof t.title) {
                    if (t.icon = Object(E.normalizeIconObject)(t.icon), Object(E.isValidIcon)(t.icon.src)) return t;
                    lr("The icon passed is invalid. The icon should be a string, an element, a function, or an object following the specifications documented in https://wordpress.org/gutenberg/handbook/block-api/#icon-optional")
                } else lr("Token titles must be strings.");
            else lr('The token "' + e + '" must have a title.');
            else lr('The "edit" property must be a valid function.');
            else lr('The "save" property must be specified and must be a valid function.');
            else lr("Token names must contain a namespace prefix, include only lowercase alphanumeric characters or dashes, and start with a letter. Example: my-plugin/my-custom-token");
            else lr("Token names must be strings.")
        }(t, n, dr.getState())) && dr.dispatch(it(t, n))
    });
    var pr = n(16),
        fr = n.n(pr),
        hr = n(10),
        br = n.n(hr),
        mr = n(7),
        vr = n.n(mr),
        gr = n(6),
        Or = n.n(gr),
        yr = n(9),
        _r = n.n(yr),
        kr = n(8),
        jr = n.n(kr),
        Sr = Object(X.createContext)({
            name: "",
            isSelected: !1,
            focusedElement: null,
            setFocusedElement: c.noop,
            uid: null
        }),
        Er = Sr.Consumer,
        wr = Sr.Provider,
        Tr = function(e) {
            return Object(X.createHigherOrderComponent)(function(t) {
                return function(n) {
                    return Object(X.createElement)(Er, null, function(r) {
                        return Object(X.createElement)(t, p()({}, n, e(r, n)))
                    })
                }
            }, "withBlockEditContext")
        },
        Cr = Object(X.createHigherOrderComponent)(function(e) {
            return function(t) {
                return Object(X.createElement)(Er, null, function(n) {
                    return n.isSelected && Object(X.createElement)(e, t)
                })
            }
        }, "ifBlockEditSelected"),
        Pr = [];
    var Br = Object(X.compose)([Tr(function(e) {
        return {
            blockName: e.name
        }
    }), function(e) {
        return function(t) {
            function n() {
                vr()(this, n);
                var e = _r()(this, (n.__proto__ || br()(n)).call(this));
                return e.state = {
                    completers: Pr
                }, e.saveParentRef = e.saveParentRef.bind(e), e.onFocus = e.onFocus.bind(e), e
            }
            return jr()(n, t), Or()(n, [{
                key: "componentDidUpdate",
                value: function() {
                    this.parentNode.contains(document.activeElement) && this.hasStaleCompleters() && this.updateCompletersState()
                }
            }, {
                key: "onFocus",
                value: function() {
                    this.hasStaleCompleters() && this.updateCompletersState()
                }
            }, {
                key: "hasStaleCompleters",
                value: function() {
                    return !("lastFilteredCompletersProp" in this.state) || this.state.lastFilteredCompletersProp !== this.props.completers
                }
            }, {
                key: "updateCompletersState",
                value: function() {
                    var e = this.props,
                        t = e.blockName,
                        n = e.completers,
                        r = n;
                    Object(ar.hasFilter)("editor.Autocomplete.completers") && (n = Object(ar.applyFilters)("editor.Autocomplete.completers", n && n.map(c.clone), t)), this.setState({
                        lastFilteredCompletersProp: r,
                        completers: n || Pr
                    })
                }
            }, {
                key: "saveParentRef",
                value: function(e) {
                    this.parentNode = e
                }
            }, {
                key: "render",
                value: function() {
                    var t = this.state.completers,
                        n = p()({}, this.props, {
                            completers: t
                        });
                    return Object(X.createElement)("div", {
                        onFocus: this.onFocus,
                        ref: this.saveParentRef
                    }, Object(X.createElement)(e, p()({
                        onFocus: this.onFocus
                    }, n)))
                }
            }]), n
        }(X.Component)
    }])(or.Autocomplete);
    n(635), n(634);

    function xr(e) {
        var t = e.icon,
            n = e.showColors,
            r = void 0 !== n && n,
            o = e.className,
            i = function(e) {
                return "string" == typeof e ? Object(X.createElement)(or.Dashicon, {
                    icon: e
                }) : "function" == typeof e ? e.prototype instanceof X.Component ? Object(X.createElement)(e) : e() : e || null
            }(t && t.src ? t.src : t);
        return r ? Object(X.createElement)("div", {
            style: {
                backgroundColor: t && t.background,
                color: t && t.foreground
            },
            className: fr()("editor-block-icon__colors", o)
        }, i) : i
    }

    function Ir() {
        return Object(a.select)("core/editor").getBlockInsertionPoint().rootUID
    }

    function Dr(e) {
        return Object(a.select)("core/editor").getInserterItems(e)
    }

    function Ar() {
        var e = Object(a.select)("core/editor").getSelectedBlock();
        return e ? e.name : null
    }
    var Nr = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.getBlockInsertionParentUID,
                n = void 0 === t ? Ir : t,
                r = e.getInserterItems,
                o = void 0 === r ? Dr : r,
                i = e.getSelectedBlockName,
                s = void 0 === i ? Ar : i;
            return {
                name: "blocks",
                className: "editor-autocompleters__block",
                triggerPrefix: "/",
                options: function() {
                    var e = s();
                    return o(n()).filter(function(t) {
                        return e !== t.name
                    })
                },
                getOptionKeywords: function(e) {
                    var t = e.title,
                        n = e.keywords,
                        r = void 0 === n ? [] : n;
                    return [].concat(m()(r), [t])
                },
                getOptionLabel: function(e) {
                    var t = e.icon,
                        n = e.title;
                    return [Object(X.createElement)(xr, {
                        key: "icon",
                        icon: t && t.src
                    }), n]
                },
                allowContext: function(e, t) {
                    return !(/\S/.test(e.toString()) || /\S/.test(t.toString()))
                },
                getOptionCompletion: function(e) {
                    var t = e.name,
                        n = e.initialAttributes;
                    return {
                        action: "replace",
                        value: Object(E.createBlock)(t, n)
                    }
                },
                isOptionDisabled: function(e) {
                    return e.isDisabled
                }
            }
        }(),
        Rr = {
            name: "users",
            className: "editor-autocompleters__user",
            triggerPrefix: "@",
            options: function(e) {
                var t = "";
                return e && (t = "?search=" + encodeURIComponent(e)), Q()({
                    path: "/wp/v2/users" + t
                })
            },
            isDebounced: !0,
            getOptionKeywords: function(e) {
                return [e.slug, e.name]
            },
            getOptionLabel: function(e) {
                return [Object(X.createElement)("img", {
                    key: "avatar",
                    className: "editor-autocompleters__user-avatar",
                    alt: "",
                    src: e.avatar_urls[24]
                }), Object(X.createElement)("span", {
                    key: "name",
                    className: "editor-autocompleters__user-name"
                }, e.name), Object(X.createElement)("span", {
                    key: "slug",
                    className: "editor-autocompleters__user-slug"
                }, e.slug)]
            },
            allowNode: function() {
                return !0
            },
            getOptionCompletion: function(e) {
                return "@" + e.slug
            }
        },
        Lr = [{
            icon: "editor-alignleft",
            title: Object(P.__)("Align left"),
            align: "left"
        }, {
            icon: "editor-aligncenter",
            title: Object(P.__)("Align center"),
            align: "center"
        }, {
            icon: "editor-alignright",
            title: Object(P.__)("Align right"),
            align: "right"
        }];

    function Ur(e) {
        var t = e.value,
            n = e.onChange;
        return Object(X.createElement)(or.Toolbar, {
            controls: Lr.map(function(e) {
                var r = e.align,
                    o = t === r;
                return p()({}, e, {
                    isActive: o,
                    onClick: function(e) {
                        return function() {
                            return n(t === e ? void 0 : e)
                        }
                    }(r)
                })
            })
        })
    }
    var Mr = {
            left: {
                icon: "align-left",
                title: Object(P.__)("Align left")
            },
            center: {
                icon: "align-center",
                title: Object(P.__)("Align center")
            },
            right: {
                icon: "align-right",
                title: Object(P.__)("Align right")
            },
            wide: {
                icon: "align-wide",
                title: Object(P.__)("Wide width")
            },
            full: {
                icon: "align-full-width",
                title: Object(P.__)("Full width")
            }
        },
        Fr = ["left", "center", "right", "wide", "full"],
        Hr = ["wide", "full"];
    var Vr = Object(a.withSelect)(function(e) {
            return {
                wideControlsEnabled: e("core/editor").getEditorSettings().alignWide
            }
        })(function(e) {
            var t = e.value,
                n = e.onChange,
                r = e.controls,
                o = void 0 === r ? Fr : r,
                i = e.wideControlsEnabled,
                s = void 0 !== i && i ? o : o.filter(function(e) {
                    return -1 === Hr.indexOf(e)
                });
            return Object(X.createElement)(or.Toolbar, {
                controls: s.map(function(e) {
                    return p()({}, Mr[e], {
                        isActive: t === e,
                        onClick: (r = e, function() {
                            return n(t === r ? void 0 : r)
                        })
                    });
                    var r
                })
            })
        }),
        Kr = Object(or.createSlotFill)("BlockControls"),
        zr = Kr.Fill,
        Wr = Kr.Slot,
        qr = Cr(function(e) {
            var t = e.controls,
                n = e.children;
            return Object(X.createElement)(zr, null, Object(X.createElement)(or.Toolbar, {
                controls: t
            }), n)
        });
    qr.Slot = Wr;
    var Gr = qr,
        Yr = Object(or.withFilters)("editor.BlockEdit")(function(e) {
            var t = e.attributes,
                n = void 0 === t ? {} : t,
                r = e.name,
                o = Object(E.getBlockType)(r);
            if (!o) return null;
            var i = Object(E.hasBlockSupport)(o, "className", !0) ? Object(E.getBlockDefaultClassName)(r) : null,
                s = fr()(i, n.className),
                c = o.edit || o.save;
            return Object(X.createElement)(c, p()({}, e, {
                className: s
            }))
        }),
        Xr = function(e) {
            function t(e) {
                vr()(this, t);
                var n = _r()(this, (t.__proto__ || br()(t)).call(this, e));
                return n.setFocusedElement = n.setFocusedElement.bind(n), n.state = {
                    focusedElement: null,
                    setFocusedElement: n.setFocusedElement
                }, n
            }
            return jr()(t, e), Or()(t, [{
                key: "getChildContext",
                value: function() {
                    var e = this.props.user;
                    return {
                        canUserUseUnfilteredHTML: Object(c.get)(e.data, ["capabilities", "unfiltered_html"], !1)
                    }
                }
            }, {
                key: "setFocusedElement",
                value: function(e) {
                    this.setState(function(t) {
                        return t.focusedElement === e ? null : {
                            focusedElement: e
                        }
                    })
                }
            }, {
                key: "render",
                value: function() {
                    return Object(X.createElement)(wr, {
                        value: this.state
                    }, Object(X.createElement)(Yr, this.props))
                }
            }], [{
                key: "getDerivedStateFromProps",
                value: function(e) {
                    var t = e.id;
                    return {
                        name: e.name,
                        isSelected: e.isSelected,
                        uid: t
                    }
                }
            }]), t
        }(X.Component);
    Xr.childContextTypes = {
        canUserUseUnfilteredHTML: c.noop
    };
    var $r = Object(X.compose)([Object(a.withSelect)(function(e) {
            return {
                postType: e("core/editor").getEditedPostAttribute("type")
            }
        }), Object(or.withAPIData)(function(e) {
            return {
                user: "/wp/v2/users/me?post_type=" + e.postType + "&context=edit"
            }
        })])(Xr),
        Jr = Object(or.createSlotFill)("BlockFormatControls"),
        Qr = Jr.Fill,
        Zr = Jr.Slot,
        eo = Cr(Qr);
    eo.Slot = Zr;
    var to = eo,
        no = Object(X.createHigherOrderComponent)(Object(a.withSelect)(function(e) {
            var t = e("core/editor").getEditorSettings(),
                n = t.colors,
                r = t.disableCustomColors;
            return {
                colors: n,
                disableCustomColors: r,
                hasColorsToChoose: !Object(c.isEmpty)(n) || !r
            }
        }), "withColorContext"),
        ro = no(or.ColorPalette),
        oo = n(113),
        io = n.n(oo),
        so = function(e, t, n) {
            if (t) {
                var r = Object(c.find)(e, {
                    slug: t
                });
                return void 0 === r && void 0 !== (r = Object(c.find)(e, {
                    name: t
                })) && io()("Using color objects without slugs", {
                    version: "3.4",
                    hint: "You might want to re-select the color if you have saved in previous versions. The frontend is unaffected by this deprecation."
                }), r && r.color
            }
            if (n) return n
        },
        co = function(e, t) {
            var n = Object(c.find)(e, {
                color: t
            });
            return n ? n.name : void 0
        };

    function ao(e, t) {
        if (e && t) return "has-" + Object(c.kebabCase)(t) + "-" + e
    }
    var lo = n(112),
        uo = n.n(lo),
        po = [],
        fo = function(e) {
            return Object(X.createHigherOrderComponent)(Object(X.compose)([Object(a.withSelect)(function(e) {
                var t = e("core/editor").getEditorSettings();
                return {
                    colors: Object(c.get)(t, ["colors"], po)
                }
            }), function(t) {
                return function(n) {
                    function r() {
                        vr()(this, r);
                        var e = _r()(this, (r.__proto__ || br()(r)).apply(this, arguments));
                        return e.memoizedGetColor = uo()(e.memoizedGetColor, {
                            maxSize: 1
                        }), e.memoizedSetColor = uo()(e.memoizedSetColor, {
                            maxSize: 1
                        }), e
                    }
                    return jr()(r, n), Or()(r, [{
                        key: "memoizedGetColor",
                        value: function(e) {
                            return uo()(function(t, n, r) {
                                return {
                                    name: t,
                                    class: ao(r, t),
                                    value: so(e, t, n)
                                }
                            })
                        }
                    }, {
                        key: "memoizedSetColor",
                        value: function(e, t) {
                            return uo()(function(n, r) {
                                return function(e, t, n, r) {
                                    return function(o) {
                                        var i, s = Object(c.find)(e, {
                                            color: o
                                        });
                                        r((i = {}, y()(i, t, s && s.slug ? s.slug : void 0), y()(i, n, s && s.slug ? void 0 : o), i))
                                    }
                                }(t, n, r, e)
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return Object(X.createElement)(t, p()({}, this.props, {
                                colors: void 0
                            }, e(this.memoizedGetColor(this.props.colors), this.memoizedSetColor(this.props.setAttributes, this.props.colors), this.props)))
                        }
                    }]), r
                }(X.Component)
            }]), "withColors")
        },
        ho = [],
        bo = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            if (Object(c.isFunction)(t[0])) return io()("Using withColors( mapGetSetColorToProps ) ", {
                version: "3.3",
                alternative: "withColors( colorAttributeName, { secondColorAttributeName: 'color-context' }, ... )"
            }), fo(t[0]);
            var r = Object(c.reduce)(t, function(e, t) {
                return p()({}, e, Object(c.isString)(t) ? y()({}, t, Object(c.kebabCase)(t)) : t)
            }, {});
            return Object(X.createHigherOrderComponent)(Object(X.compose)([Object(a.withSelect)(function(e) {
                var t = e("core/editor").getEditorSettings();
                return {
                    colors: Object(c.get)(t, ["colors"], ho)
                }
            }), function(e) {
                return function(t) {
                    function n(e) {
                        vr()(this, n);
                        var t = _r()(this, (n.__proto__ || br()(n)).call(this, e));
                        return t.setters = t.createSetters(), t.state = {}, t
                    }
                    return jr()(n, t), Or()(n, [{
                        key: "createSetters",
                        value: function() {
                            var e = this;
                            return Object(c.reduce)(r, function(t, n, r) {
                                var o = Object(c.upperFirst)(r),
                                    i = "custom" + o;
                                return t["set" + o] = e.createSetColor(r, i), t
                            }, {})
                        }
                    }, {
                        key: "createSetColor",
                        value: function(e, t) {
                            var n = this;
                            return function(r) {
                                var o, i = Object(c.find)(n.props.colors, {
                                    color: r
                                });
                                n.props.setAttributes((o = {}, y()(o, e, i && i.slug ? i.slug : void 0), y()(o, t, i && i.slug ? void 0 : r), o))
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return Object(X.createElement)(e, p()({}, this.props, {
                                colors: void 0
                            }, this.state, this.setters))
                        }
                    }], [{
                        key: "getDerivedStateFromProps",
                        value: function(e, t) {
                            var n = e.attributes,
                                o = e.colors;
                            return Object(c.reduce)(r, function(e, r, i) {
                                var s = n[i],
                                    a = so(o, s, n["custom" + Object(c.upperFirst)(i)]),
                                    l = t[i],
                                    u = Object(c.get)(l, ["value"]);
                                return e[i] = u === a && l ? l : {
                                    name: s,
                                    class: ao(r, s),
                                    value: a
                                }, e
                            }, {})
                        }
                    }]), n
                }(X.Component)
            }]), "withColors")
        },
        mo = n(154),
        vo = n.n(mo);
    n(633);
    var go = function(e) {
            var t = e.backgroundColor,
                n = e.textColor,
                r = e.isLargeText,
                o = e.fallbackBackgroundColor,
                i = e.fallbackTextColor;
            if (!t && !o || !n && !i) return null;
            var s = vo()(t || o),
                c = vo()(n || i);
            if (1 !== s.getAlpha() || 1 !== c.getAlpha() || vo.a.isReadable(s, c, {
                    level: "AA",
                    size: r ? "large" : "small"
                })) return null;
            var a = s.getBrightness() < c.getBrightness() ? Object(P.__)("This color combination may be hard for people to read. Try using a darker background color and/or a brighter text color.") : Object(P.__)("This color combination may be hard for people to read. Try using a brighter background color and/or a darker text color.");
            return Object(X.createElement)("div", {
                className: "editor-contrast-checker"
            }, Object(X.createElement)(or.Notice, {
                status: "warning",
                isDismissible: !1
            }, a))
        },
        Oo = n(135),
        yo = n(114),
        _o = n.n(yo),
        ko = (n(632), n(631), n(141)),
        jo = n.n(ko),
        So = (n(169), n(171)),
        Eo = n.n(So),
        wo = n(35),
        To = n(22);
    n(630);

    function Co(e, t, n, r, o, i) {
        var s = n + 1;
        return e > 1 ? function(e, t, n, r, o) {
            var i = t + 1;
            if (o < 0 && n) return Object(P.__)("Blocks cannot be moved up as they are already at the top");
            if (o > 0 && r) return Object(P.__)("Blocks cannot be moved down as they are already at the bottom");
            if (o < 0 && !n) return Object(P.sprintf)(Object(P.__)("Move %(selectedCount)d blocks from position %(position)d up by one place"), {
                selectedCount: e,
                position: i
            });
            if (o > 0 && !r) return Object(P.sprintf)(Object(P.__)("Move %(selectedCount)d blocks from position %(position)s down by one place"), {
                selectedCount: e,
                position: i
            })
        }(e, n, r, o, i) : r && o ? Object(P.sprintf)(Object(P.__)("Block %s is the only block, and cannot be moved"), t) : i > 0 && !o ? Object(P.sprintf)(Object(P.__)("Move %(type)s block from position %(position)d down to position %(newPosition)d"), {
            type: t,
            position: s,
            newPosition: s + 1
        }) : i > 0 && o ? Object(P.sprintf)(Object(P.__)("Block %s is at the end of the content and can’t be moved down"), t) : i < 0 && !r ? Object(P.sprintf)(Object(P.__)("Move %(type)s block from position %(position)d up to position %(newPosition)d"), {
            type: t,
            position: s,
            newPosition: s - 1
        }) : i < 0 && r ? Object(P.sprintf)(Object(P.__)("Block %s is at the beginning of the content and can’t be moved up"), t) : void 0
    }
    var Po = Object(X.createElement)("svg", {
            width: "18",
            height: "18",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 18 18",
            "aria-hidden": !0,
            role: "img",
            focusable: "false"
        }, Object(X.createElement)("polygon", {
            points: "9,4.5 3.3,10.1 4.8,11.5 9,7.3 13.2,11.5 14.7,10.1 "
        })),
        Bo = Object(X.createElement)("svg", {
            width: "18",
            height: "18",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 18 18",
            "aria-hidden": !0,
            role: "img",
            focusable: "false"
        }, Object(X.createElement)("polygon", {
            points: "9,13.5 14.7,7.9 13.2,6.5 9,10.7 4.8,6.5 3.3,7.9 "
        })),
        xo = function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.state = {
                    isFocused: !1
                }, e.onFocus = e.onFocus.bind(e), e.onBlur = e.onBlur.bind(e), e
            }
            return jr()(t, e), Or()(t, [{
                key: "onFocus",
                value: function() {
                    this.setState({
                        isFocused: !0
                    })
                }
            }, {
                key: "onBlur",
                value: function() {
                    this.setState({
                        isFocused: !1
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.onMoveUp,
                        n = e.onMoveDown,
                        r = e.isFirst,
                        o = e.isLast,
                        i = e.uids,
                        s = e.blockType,
                        a = e.firstIndex,
                        l = e.isLocked,
                        u = e.instanceId,
                        d = e.isHidden,
                        p = this.state.isFocused,
                        f = Object(c.castArray)(i).length;
                    return l ? null : Object(X.createElement)("div", {
                        className: fr()("editor-block-mover", {
                            "is-visible": p || !d
                        })
                    }, Object(X.createElement)(or.IconButton, {
                        className: "editor-block-mover__control",
                        onClick: r ? null : t,
                        icon: Po,
                        label: Object(P.__)("Move up"),
                        "aria-describedby": "editor-block-mover__up-description-" + u,
                        "aria-disabled": r,
                        onFocus: this.onFocus,
                        onBlur: this.onBlur
                    }), Object(X.createElement)(or.IconButton, {
                        className: "editor-block-mover__control",
                        onClick: o ? null : n,
                        icon: Bo,
                        label: Object(P.__)("Move down"),
                        "aria-describedby": "editor-block-mover__down-description-" + u,
                        "aria-disabled": o,
                        onFocus: this.onFocus,
                        onBlur: this.onBlur
                    }), Object(X.createElement)("span", {
                        id: "editor-block-mover__up-description-" + u,
                        className: "editor-block-mover__description"
                    }, Co(f, s && s.title, a, r, o, -1)), Object(X.createElement)("span", {
                        id: "editor-block-mover__down-description-" + u,
                        className: "editor-block-mover__description"
                    }, Co(f, s && s.title, a, r, o, 1)))
                }
            }]), t
        }(X.Component),
        Io = Object(X.compose)(Object(a.withSelect)(function(e, t) {
            var n = t.uids,
                r = t.rootUID,
                o = e("core/editor"),
                i = o.getBlock,
                s = o.getBlockIndex,
                a = o.getTemplateLock,
                l = Object(c.first)(Object(c.castArray)(n)),
                u = i(l);
            return {
                firstIndex: s(l, r),
                blockType: u ? Object(E.getBlockType)(u.name) : null,
                isLocked: "all" === a(r)
            }
        }), Object(a.withDispatch)(function(e, t) {
            var n = t.uids,
                r = t.rootUID,
                o = e("core/editor"),
                i = o.moveBlocksDown,
                s = o.moveBlocksUp;
            return {
                onMoveDown: Object(c.partial)(i, n, r),
                onMoveUp: Object(c.partial)(s, n, r)
            }
        }), or.withInstanceId)(xo),
        Do = (n(629), function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.onFilesDrop = e.onFilesDrop.bind(e), e.onHTMLDrop = e.onHTMLDrop.bind(e), e.onDrop = e.onDrop.bind(e), e
            }
            return jr()(t, e), Or()(t, [{
                key: "getInsertIndex",
                value: function(e) {
                    var t = this.props.index;
                    if (void 0 !== t) return "top" === e.y ? t : t + 1
                }
            }, {
                key: "onFilesDrop",
                value: function(e, t) {
                    var n = Object(E.findTransform)(Object(E.getBlockTransforms)("from"), function(t) {
                        return "files" === t.type && t.isMatch(e)
                    });
                    if (n) {
                        var r = this.getInsertIndex(t),
                            o = n.transform(e, this.props.updateBlockAttributes);
                        this.props.insertBlocks(o, r)
                    }
                }
            }, {
                key: "onHTMLDrop",
                value: function(e, t) {
                    var n = Object(E.rawHandler)({
                        HTML: e,
                        mode: "BLOCKS"
                    });
                    n.length && this.props.insertBlocks(n, this.getInsertIndex(t))
                }
            }, {
                key: "onDrop",
                value: function(e, t) {
                    if (e.dataTransfer) {
                        var n = void 0,
                            r = void 0,
                            o = void 0,
                            i = void 0;
                        try {
                            var s = JSON.parse(e.dataTransfer.getData("text"));
                            n = s.uid, r = s.type, o = s.rootUID, i = s.fromIndex
                        } catch (e) {
                            return
                        }
                        if ("block" === r) {
                            var c = this.props.index,
                                a = this.getInsertIndex(t),
                                l = c && i < c && o === this.props.rootUID ? a - 1 : a;
                            this.props.moveBlockToPosition(n, o, l)
                        }
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.isLocked,
                        n = e.index;
                    if (t) return null;
                    var r = void 0 === n;
                    return Object(X.createElement)(or.DropZone, {
                        className: fr()("editor-block-drop-zone", {
                            "is-appender": r
                        }),
                        onFilesDrop: this.onFilesDrop,
                        onHTMLDrop: this.onHTMLDrop,
                        onDrop: this.onDrop
                    })
                }
            }]), t
        }(X.Component)),
        Ao = Object(X.compose)(Object(a.withDispatch)(function(e, t) {
            var n = e("core/editor"),
                r = n.insertBlocks,
                o = n.updateBlockAttributes,
                i = n.moveBlockToPosition;
            return {
                insertBlocks: function(e, n) {
                    var o = t.rootUID,
                        i = t.layout;
                    i && (e = Object(c.castArray)(e).map(function(e) {
                        return Object(E.cloneBlock)(e, {
                            layout: i
                        })
                    })), r(e, n, o)
                },
                updateBlockAttributes: function() {
                    o.apply(void 0, arguments)
                },
                moveBlockToPosition: function(e, n, r) {
                    var o = t.rootUID,
                        s = t.layout;
                    i(e, n, o, s, r)
                }
            }
        }), Object(a.withSelect)(function(e, t) {
            var n = t.rootUID;
            return {
                isLocked: !!(0, e("core/editor").getTemplateLock)(n)
            }
        }))(Do);
    n(628);
    var No = Object(X.compose)([Object(a.withSelect)(function(e, t) {
        var n = t.uid,
            r = e("core/editor"),
            o = r.getBlock,
            i = r.getBlockMode,
            s = o(n);
        return {
            mode: i(n),
            blockType: s ? Object(E.getBlockType)(s.name) : null
        }
    }), Object(a.withDispatch)(function(e, t) {
        var n = t.onToggle,
            r = void 0 === n ? c.noop : n,
            o = t.uid;
        return {
            onToggleMode: function() {
                e("core/editor").toggleBlockMode(o), r()
            }
        }
    })])(function(e) {
        var t = e.blockType,
            n = e.mode,
            r = e.onToggleMode,
            o = e.small,
            i = void 0 !== o && o,
            s = e.role;
        if (!Object(E.hasBlockSupport)(t, "html", !0)) return null;
        var c = "visual" === n ? Object(P.__)("Edit as HTML") : Object(P.__)("Edit visually");
        return Object(X.createElement)(or.IconButton, {
            className: "editor-block-settings-menu__control",
            onClick: r,
            icon: "html",
            label: i ? c : void 0,
            role: s
        }, !i && c)
    });
    var Ro = Object(X.compose)(Object(a.withSelect)(function(e, t) {
        var n = t.uids,
            r = t.rootUID,
            o = e("core/editor"),
            i = o.getBlocksByUID,
            s = o.getBlockIndex,
            a = o.getTemplateLock;
        return {
            blocks: i(n),
            index: s(Object(c.last)(Object(c.castArray)(n)), r),
            isLocked: !!a(r)
        }
    }), Object(a.withDispatch)(function(e, t) {
        var n = t.blocks,
            r = t.index,
            o = t.rootUID;
        return {
            onDuplicate: function() {
                var t = n.map(function(e) {
                    return Object(E.cloneBlock)(e)
                });
                e("core/editor").insertBlocks(t, r + 1, o), t.length > 1 && e("core/editor").multiSelect(Object(c.first)(t).uid, Object(c.last)(t).uid)
            }
        }
    }))(function(e) {
        var t = e.blocks,
            n = e.onDuplicate,
            r = e.onClick,
            o = void 0 === r ? c.noop : r,
            i = e.isLocked,
            s = e.small,
            a = void 0 !== s && s,
            l = e.role,
            u = Object(c.every)(t, function(e) {
                return Object(E.hasBlockSupport)(e.name, "multiple", !0)
            });
        if (i || !u) return null;
        var d = Object(P.__)("Duplicate");
        return Object(X.createElement)(or.IconButton, {
            className: "editor-block-settings-menu__control",
            onClick: Object(c.flow)(n, o),
            icon: "admin-page",
            label: a ? d : void 0,
            role: l
        }, !a && d)
    });
    var Lo = Object(X.compose)(Object(a.withDispatch)(function(e, t) {
        var n = t.uids;
        return {
            onRemove: function() {
                e("core/editor").removeBlocks(n)
            }
        }
    }), Object(a.withSelect)(function(e, t) {
        var n = t.uids,
            r = e("core/editor"),
            o = r.getBlockRootUID,
            i = r.getTemplateLock;
        return {
            isLocked: Object(c.some)(Object(c.castArray)(n), function(e) {
                var t = o(e);
                return "all" === i(t)
            })
        }
    }))(function(e) {
        var t = e.onRemove,
            n = e.onClick,
            r = void 0 === n ? c.noop : n,
            o = e.isLocked,
            i = e.role,
            s = h()(e, ["onRemove", "onClick", "isLocked", "role"]);
        if (o) return null;
        var a = Object(P.__)("Remove Block");
        return Object(X.createElement)(or.IconButton, p()({
            className: "editor-block-settings-menu__control",
            onClick: Object(c.flow)(t, r),
            icon: "trash",
            label: a,
            role: i
        }, s), a)
    });
    var Uo = Object(X.compose)([Object(a.withSelect)(function(e, t) {
        var n = t.uid,
            r = e("core/editor"),
            o = r.getBlock,
            i = r.getSharedBlock,
            s = o(n);
        return {
            sharedBlock: s && Object(E.isSharedBlock)(s) ? i(s.attributes.ref) : null
        }
    }), Object(a.withDispatch)(function(e, t) {
        var n = t.uid,
            r = t.onToggle,
            o = void 0 === r ? c.noop : r,
            i = e("core/editor"),
            s = i.convertBlockToShared,
            a = i.convertBlockToStatic;
        return {
            onConvertToStatic: function() {
                a(n), o()
            },
            onConvertToShared: function() {
                s(n), o()
            }
        }
    })])(function(e) {
        var t = e.sharedBlock,
            n = e.onConvertToStatic,
            r = e.onConvertToShared,
            o = e.itemsRole;
        return Object(X.createElement)(X.Fragment, null, !t && Object(X.createElement)(or.IconButton, {
            className: "editor-block-settings-menu__control",
            icon: "controls-repeat",
            onClick: r,
            role: o
        }, Object(P.__)("Convert to Shared Block")), t && Object(X.createElement)(or.IconButton, {
            className: "editor-block-settings-menu__control",
            icon: "controls-repeat",
            onClick: n,
            role: o
        }, Object(P.__)("Convert to Regular Block")))
    });
    var Mo = Object(X.compose)([Object(a.withSelect)(function(e, t) {
        var n = t.uid,
            r = e("core/editor"),
            o = r.getBlock,
            i = r.getSharedBlock,
            s = o(n);
        return {
            sharedBlock: s && Object(E.isSharedBlock)(s) ? i(s.attributes.ref) : null
        }
    }), Object(a.withDispatch)(function(e, t) {
        var n = t.onToggle,
            r = void 0 === n ? c.noop : n,
            o = e("core/editor").deleteSharedBlock;
        return {
            onDelete: function(e) {
                window.confirm(Object(P.__)("Are you sure you want to delete this Shared Block?\n\nIt will be permanently removed from all posts and pages that use it.")) && (o(e), r())
            }
        }
    })])(function(e) {
        var t = e.sharedBlock,
            n = e.onDelete,
            r = e.itemsRole;
        return t ? Object(X.createElement)(or.IconButton, {
            className: "editor-block-settings-menu__control",
            icon: "no",
            disabled: t.isTemporary,
            onClick: function() {
                return n(t.id)
            },
            role: r
        }, Object(P.__)("Delete Shared Block")) : null
    });
    var Fo = Object(X.compose)(Object(a.withSelect)(function(e, t) {
            var n = t.uid,
                r = e("core/editor"),
                o = r.getBlock,
                i = r.getCurrentPostType;
            return {
                block: o(n),
                postType: i()
            }
        }), Object(a.withDispatch)(function(e) {
            return {
                onReplace: e("core/editor").replaceBlocks
            }
        }), Object(or.withAPIData)(function(e) {
            return {
                user: "/wp/v2/users/me?post_type=" + e.postType + "&context=edit"
            }
        }))(function(e) {
            var t = e.block,
                n = e.onReplace,
                r = e.small,
                o = e.user,
                i = e.role;
            if (!t || Object(E.getUnknownTypeHandlerName)() !== t.name) return null;
            var s = Object(P.__)("Convert to blocks");
            return Object(X.createElement)(or.IconButton, {
                className: "editor-block-settings-menu__control",
                onClick: function() {
                    n(t.uid, Object(E.rawHandler)({
                        HTML: Object(E.serialize)(t),
                        mode: "BLOCKS",
                        canUserUseUnfilteredHTML: Object(c.get)(o, ["data", "capabilities", "unfiltered_html"], !1)
                    }))
                },
                icon: "screenoptions",
                label: r ? s : void 0,
                role: i
            }, !r && s)
        }),
        Ho = Object(or.createSlotFill)("_BlockSettingsMenuFirstItem"),
        Vo = Ho.Fill,
        Ko = Ho.Slot;
    Vo.Slot = Ko;
    var zo = Vo,
        Wo = function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.state = {
                    isFocused: !1
                }, e.onFocus = e.onFocus.bind(e), e.onBlur = e.onBlur.bind(e), e
            }
            return jr()(t, e), Or()(t, [{
                key: "onFocus",
                value: function() {
                    this.setState({
                        isFocused: !0
                    })
                }
            }, {
                key: "onBlur",
                value: function() {
                    this.setState({
                        isFocused: !1
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = this.props,
                        n = t.uids,
                        r = t.onSelect,
                        o = t.focus,
                        i = t.rootUID,
                        s = t.isHidden,
                        a = this.state.isFocused,
                        l = Object(c.castArray)(n),
                        u = l.length,
                        d = l[0];
                    return Object(X.createElement)("div", {
                        className: "editor-block-settings-menu"
                    }, Object(X.createElement)(or.Dropdown, {
                        contentClassName: "editor-block-settings-menu__popover",
                        position: "bottom left",
                        renderToggle: function(t) {
                            var n = t.onToggle,
                                i = t.isOpen,
                                c = fr()("editor-block-settings-menu__toggle", {
                                    "is-opened": i,
                                    "is-visible": a || i || !s
                                }),
                                l = i ? Object(P.__)("Hide Options") : Object(P.__)("More Options");
                            return Object(X.createElement)(or.IconButton, {
                                className: c,
                                onClick: function() {
                                    1 === u && r(d), n()
                                },
                                icon: "ellipsis",
                                label: l,
                                "aria-expanded": i,
                                focus: o,
                                onFocus: e.onFocus,
                                onBlur: e.onBlur
                            })
                        },
                        renderContent: function(e) {
                            var t = e.onClose;
                            return Object(X.createElement)(or.NavigableMenu, {
                                className: "editor-block-settings-menu__content"
                            }, Object(X.createElement)(zo.Slot, {
                                fillProps: {
                                    onClose: t
                                }
                            }), 1 === u && Object(X.createElement)(No, {
                                uid: d,
                                onToggle: t,
                                role: "menuitem"
                            }), 1 === u && Object(X.createElement)(Fo, {
                                uid: d,
                                role: "menuitem"
                            }), Object(X.createElement)(Ro, {
                                uids: n,
                                rootUID: i,
                                role: "menuitem"
                            }), 1 === u && Object(X.createElement)(Uo, {
                                uid: d,
                                onToggle: t,
                                itemsRole: "menuitem"
                            }), Object(X.createElement)("div", {
                                className: "editor-block-settings-menu__separator"
                            }), 1 === u && Object(X.createElement)(Mo, {
                                uid: d,
                                onToggle: t,
                                itemsRole: "menuitem"
                            }), Object(X.createElement)(Lo, {
                                uids: n,
                                role: "menuitem"
                            }))
                        }
                    }))
                }
            }]), t
        }(X.Component),
        qo = Object(a.withDispatch)(function(e) {
            return {
                onSelect: function(t) {
                    e("core/editor").selectBlock(t)
                }
            }
        })(Wo);
    n(627);
    var Go = function(e) {
        var t = e.actions,
            n = e.children;
        return Object(X.createElement)("div", {
            className: "editor-warning"
        }, n, X.Children.count(t) > 0 && Object(X.createElement)("div", {
            className: "editor-warning__actions"
        }, X.Children.map(t, function(e, t) {
            return Object(X.createElement)("span", {
                key: t,
                className: "editor-warning__action"
            }, e)
        })))
    };
    var Yo = Object(a.withDispatch)(function(e, t) {
            var n = t.block,
                r = e("core/editor").replaceBlock;
            return {
                convertToHTML: function() {
                    r(n.uid, Object(E.createBlock)("core/html", {
                        content: n.originalContent
                    }))
                },
                convertToBlocks: function() {
                    r(n.uid, Object(E.rawHandler)({
                        HTML: n.originalContent,
                        mode: "BLOCKS"
                    }))
                }
            }
        })(function(e) {
            var t = e.convertToHTML,
                n = e.convertToBlocks,
                r = !!Object(E.getBlockType)("core/html");
            return Object(X.createElement)(Go, {
                actions: [Object(X.createElement)(or.Button, {
                    key: "convert",
                    onClick: n,
                    isLarge: !0,
                    isPrimary: !r
                }, Object(P.__)("Convert to Blocks")), r && Object(X.createElement)(or.Button, {
                    key: "edit",
                    onClick: t,
                    isLarge: !0,
                    isPrimary: !0
                }, Object(P.__)("Edit as HTML"))]
            }, Object(P.__)("This block appears to have been modified externally."))
        }),
        Xo = Object(X.createElement)(Go, null, Object(P.__)("This block has encountered an error and cannot be previewed.")),
        $o = function() {
            return Xo
        },
        Jo = function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.state = {
                    hasError: !1
                }, e
            }
            return jr()(t, e), Or()(t, [{
                key: "componentDidCatch",
                value: function(e) {
                    this.props.onError(e), this.setState({
                        hasError: !0
                    })
                }
            }, {
                key: "render",
                value: function() {
                    return this.state.hasError ? null : this.props.children
                }
            }]), t
        }(X.Component),
        Qo = n(181),
        Zo = n.n(Qo),
        ei = function(e) {
            function t(e) {
                vr()(this, t);
                var n = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return n.onChange = n.onChange.bind(n), n.onBlur = n.onBlur.bind(n), n.state = {
                    html: e.block.isValid ? Object(E.getBlockContent)(e.block) : e.block.originalContent
                }, n
            }
            return jr()(t, e), Or()(t, [{
                key: "componentDidUpdate",
                value: function(e) {
                    Object(c.isEqual)(this.props.block.attributes, e.block.attributes) || this.setState({
                        html: Object(E.getBlockContent)(this.props.block)
                    })
                }
            }, {
                key: "onBlur",
                value: function() {
                    var e = Object(E.getBlockType)(this.props.block.name),
                        t = Object(E.getBlockAttributes)(e, this.state.html, this.props.block.attributes),
                        n = Object(E.isValidBlock)(this.state.html, e, t);
                    this.props.onChange(this.props.uid, t, this.state.html, n)
                }
            }, {
                key: "onChange",
                value: function(e) {
                    this.setState({
                        html: e.target.value
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.state.html;
                    return Object(X.createElement)(Zo.a, {
                        className: "editor-block-list__block-html-textarea",
                        value: e,
                        onBlur: this.onBlur,
                        onChange: this.onChange
                    })
                }
            }]), t
        }(X.Component),
        ti = Object(X.compose)([Object(a.withSelect)(function(e, t) {
            return {
                block: e("core/editor").getBlock(t.uid)
            }
        }), Object(a.withDispatch)(function(e) {
            return {
                onChange: function(t, n, r, o) {
                    e("core/editor").updateBlock(t, {
                        attributes: n,
                        originalContent: r,
                        isValid: o
                    })
                }
            }
        })])(ei);
    var ni = Object(a.withSelect)(function(e, t) {
            return {
                name: (0, e("core/editor").getBlockName)(t.uid)
            }
        })(function(e) {
            var t = e.name;
            if (!t) return null;
            var n = Object(E.getBlockType)(t);
            return n ? n.title : null
        }),
        ri = function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.state = {
                    isFocused: !1
                }, e.onFocus = e.onFocus.bind(e), e.onBlur = e.onBlur.bind(e), e
            }
            return jr()(t, e), Or()(t, [{
                key: "onFocus",
                value: function(e) {
                    this.setState({
                        isFocused: !0
                    }), e.stopPropagation()
                }
            }, {
                key: "onBlur",
                value: function() {
                    this.setState({
                        isFocused: !1
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.uid,
                        n = e.rootUID;
                    return Object(X.createElement)("div", {
                        className: "editor-block-list__breadcrumb"
                    }, Object(X.createElement)(or.Toolbar, null, n && Object(X.createElement)(X.Fragment, null, Object(X.createElement)(ni, {
                        uid: n
                    }), Object(X.createElement)("span", {
                        className: "editor-block-list__descendant-arrow"
                    })), Object(X.createElement)(ni, {
                        uid: t
                    })))
                }
            }]), t
        }(X.Component),
        oi = Object(X.compose)([Object(a.withSelect)(function(e, t) {
            return {
                rootUID: (0, e("core/editor").getBlockRootUID)(t.uid)
            }
        })])(ri),
        ii = window,
        si = ii.Node,
        ci = ii.getSelection,
        ai = function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.bindNode = e.bindNode.bind(e), e.focusToolbar = e.focusToolbar.bind(e), e.focusSelection = e.focusSelection.bind(e), e.switchOnKeyDown = Object(c.cond)([
                    [Object(c.matchesProperty)(["keyCode"], To.ESCAPE), e.focusSelection]
                ]), e
            }
            return jr()(t, e), Or()(t, [{
                key: "bindNode",
                value: function(e) {
                    this.toolbar = Object(X.findDOMNode)(e)
                }
            }, {
                key: "focusToolbar",
                value: function() {
                    var e = wo.focus.tabbable.find(this.toolbar);
                    e.length && e[0].focus()
                }
            }, {
                key: "focusSelection",
                value: function() {
                    var e = ci();
                    if (e) {
                        var t = e.focusNode;
                        t.nodeType !== si.ELEMENT_NODE && (t = t.parentElement), t && t.focus()
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.children,
                        n = h()(e, ["children"]);
                    return Object(X.createElement)(or.NavigableMenu, p()({
                        orientation: "horizontal",
                        role: "toolbar",
                        ref: this.bindNode,
                        onKeyDown: this.switchOnKeyDown
                    }, n), Object(X.createElement)(or.KeyboardShortcuts, {
                        bindGlobal: !0,
                        eventName: "keydown",
                        shortcuts: {
                            "alt+f10": this.focusToolbar
                        }
                    }), t)
                }
            }]), t
        }(X.Component);
    var li = function() {
        return Object(X.createElement)(ai, {
            className: "editor-block-contextual-toolbar",
            "aria-label": Object(P.__)("Block Toolbar")
        }, Object(X.createElement)(nl, null))
    };
    var ui = Object(a.withSelect)(function(e, t) {
            var n = t.rootUID,
                r = e("core/editor"),
                o = r.getMultiSelectedBlockUids,
                i = r.isMultiSelecting,
                s = r.getBlockIndex,
                a = r.getBlockCount,
                l = o(),
                u = s(Object(c.first)(l), n),
                d = s(Object(c.last)(l), n);
            return {
                multiSelectedBlockUids: l,
                isSelecting: i(),
                isFirst: 0 === u,
                isLast: d + 1 === a()
            }
        })(function(e) {
            var t = e.multiSelectedBlockUids,
                n = e.rootUID,
                r = e.isSelecting,
                o = e.isFirst,
                i = e.isLast;
            return r ? null : [Object(X.createElement)(Io, {
                key: "mover",
                rootUID: n,
                uids: t,
                isFirst: o,
                isLast: i
            }), Object(X.createElement)(qo, {
                key: "menu",
                rootUID: n,
                uids: t,
                focus: !0
            })]
        }),
        di = n(172),
        pi = n.n(di);
    n(626), n(625);

    function fi(e) {
        var t = e.name,
            n = e.attributes,
            r = Object(E.createBlock)(t, n);
        return Object(X.createElement)(or.Disabled, {
            className: "editor-block-preview__content",
            "aria-hidden": !0
        }, Object(X.createElement)($r, {
            name: t,
            focus: !1,
            attributes: r.attributes,
            setAttributes: c.noop
        }))
    }
    var hi = function(e) {
            return Object(X.createElement)("div", {
                className: "editor-block-preview"
            }, Object(X.createElement)("div", {
                className: "editor-block-preview__title"
            }, Object(P.__)("Preview")), Object(X.createElement)(fi, e))
        },
        bi = (n(624), function(e) {
            function t() {
                return vr()(this, t), _r()(this, (t.__proto__ || br()(t)).apply(this, arguments))
            }
            return jr()(t, e), Or()(t, [{
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.items,
                        n = e.onSelect,
                        r = e.onHover,
                        o = void 0 === r ? c.noop : r;
                    return Object(X.createElement)("ul", {
                        role: "list",
                        className: "editor-block-types-list"
                    }, t.map(function(e) {
                        var t = e.icon ? {
                                backgroundColor: e.icon.background,
                                color: e.icon.foreground
                            } : {},
                            r = e.icon && e.icon.shadowColor ? {
                                backgroundColor: e.icon.shadowColor
                            } : {};
                        return Object(X.createElement)("li", {
                            className: "editor-block-types-list__list-item",
                            key: e.id
                        }, Object(X.createElement)("button", {
                            className: fr()("editor-block-types-list__item", Object(E.getBlockMenuDefaultClassName)(e.id), {
                                "editor-block-types-list__item-has-children": e.hasChildBlocks
                            }),
                            onClick: function() {
                                n(e), o(null)
                            },
                            disabled: e.isDisabled,
                            onMouseEnter: function() {
                                return o(e)
                            },
                            onMouseLeave: function() {
                                return o(null)
                            },
                            onFocus: function() {
                                return o(e)
                            },
                            onBlur: function() {
                                return o(null)
                            },
                            "aria-label": e.title
                        }, Object(X.createElement)("span", {
                            className: "editor-block-types-list__item-icon",
                            style: t
                        }, Object(X.createElement)(xr, {
                            icon: e.icon && e.icon.src
                        }), e.hasChildBlocks && Object(X.createElement)("span", {
                            className: "editor-block-types-list__item-icon-stack",
                            style: r
                        })), Object(X.createElement)("span", {
                            className: "editor-block-types-list__item-title"
                        }, e.title)))
                    }))
                }
            }]), t
        }(X.Component));
    var mi = Object(X.compose)(Object(or.ifCondition)(function(e) {
            var t = e.items;
            return t && t.length > 0
        }), Object(a.withSelect)(function(e, t) {
            var n = t.rootUID,
                r = (0, e("core/blocks").getBlockType)((0, e("core/editor").getBlockName)(n));
            return {
                rootBlockTitle: r && r.title,
                rootBlockIcon: r && r.icon
            }
        }))(function(e) {
            var t = e.rootBlockIcon,
                n = e.rootBlockTitle,
                r = e.items,
                o = h()(e, ["rootBlockIcon", "rootBlockTitle", "items"]);
            return Object(X.createElement)("div", {
                className: "editor-inserter__child-blocks"
            }, (t || n) && Object(X.createElement)("div", {
                className: "editor-inserter__parent-block-header"
            }, Object(X.createElement)(xr, {
                icon: t,
                showColors: !0
            }), n && Object(X.createElement)("h2", null, n)), Object(X.createElement)(bi, p()({
                items: r
            }, o)))
        }),
        vi = Object(or.createSlotFill)("InserterResultsPortal"),
        gi = vi.Fill,
        Oi = vi.Slot,
        yi = function(e) {
            var t = e.items,
                n = e.title,
                r = e.onSelect,
                o = e.onHover;
            return Object(X.createElement)(gi, null, function(e) {
                var i = e.filterValue,
                    s = ki(t, i);
                return s.length ? Object(X.createElement)(or.PanelBody, {
                    title: n
                }, Object(X.createElement)(bi, {
                    items: s,
                    onSelect: r,
                    onHover: o
                })) : null
            })
        };
    yi.Slot = Oi;
    var _i = yi,
        ki = function(e, t) {
            var n = t.toLowerCase().trim(),
                r = function(e) {
                    return -1 !== e.toLowerCase().indexOf(n)
                };
            return e.filter(function(e) {
                return r(e.title) || Object(c.some)(e.keywords, r)
            })
        },
        ji = function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.state = {
                    childItems: [],
                    filterValue: "",
                    hoveredItem: null,
                    suggestedItems: [],
                    sharedItems: [],
                    itemsPerCategory: {},
                    openPanels: ["suggested"]
                }, e.onChangeSearchInput = e.onChangeSearchInput.bind(e), e.onHover = e.onHover.bind(e), e.panels = {}, e.inserterResults = Object(X.createRef)(), e
            }
            return jr()(t, e), Or()(t, [{
                key: "componentDidMount",
                value: function() {
                    this.props.fetchSharedBlocks(), this.filter()
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    e.items !== this.props.items && this.filter(this.state.filterValue)
                }
            }, {
                key: "onChangeSearchInput",
                value: function(e) {
                    this.filter(e.target.value)
                }
            }, {
                key: "onHover",
                value: function(e) {
                    this.setState({
                        hoveredItem: e
                    }), e ? this.props.showInsertionPoint() : this.props.hideInsertionPoint()
                }
            }, {
                key: "bindPanel",
                value: function(e) {
                    var t = this;
                    return function(n) {
                        t.panels[e] = n
                    }
                }
            }, {
                key: "onTogglePanel",
                value: function(e) {
                    var t = this;
                    return function() {
                        -1 !== t.state.openPanels.indexOf(e) ? t.setState({
                            openPanels: Object(c.without)(t.state.openPanels, e)
                        }) : (t.setState({
                            openPanels: [].concat(m()(t.state.openPanels), [e])
                        }), t.props.setTimeout(function() {
                            pi()(Object(X.findDOMNode)(t.panels[e]), t.inserterResults.current, {
                                alignWithTop: !0
                            })
                        }))
                    }
                }
            }, {
                key: "filter",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = this.props,
                        n = t.items,
                        r = t.rootChildBlocks,
                        o = ki(n, e),
                        i = Object(c.filter)(o, function(e) {
                            var t = e.name;
                            return Object(c.includes)(r, t)
                        }),
                        s = [];
                    if (!e) {
                        var a = this.props.maxSuggestedItems || 9;
                        s = Object(c.filter)(n, function(e) {
                            return e.utility > 0
                        }).slice(0, a)
                    }
                    var l = Object(c.filter)(o, {
                            category: "shared"
                        }),
                        u = function(e) {
                            return Object(c.findIndex)(Object(E.getCategories)(), function(t) {
                                return t.slug === e.category
                            })
                        },
                        d = Object(c.flow)(function(e) {
                            return Object(c.filter)(e, function(e) {
                                return "shared" !== e.category
                            })
                        }, function(e) {
                            return Object(c.sortBy)(e, u)
                        }, function(e) {
                            return Object(c.groupBy)(e, "category")
                        })(o),
                        p = this.state.openPanels;
                    if (e !== this.state.filterValue)
                        if (e) {
                            if (l.length) p = ["shared"];
                            else if (o.length) {
                                p = [Object(c.find)(Object(E.getCategories)(), function(e) {
                                    var t = e.slug;
                                    return d[t] && d[t].length
                                }).slug]
                            }
                        } else p = ["suggested"];
                    this.setState({
                        hoveredItem: null,
                        childItems: i,
                        filterValue: e,
                        suggestedItems: s,
                        sharedItems: l,
                        itemsPerCategory: d,
                        openPanels: p
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = this.props,
                        n = t.instanceId,
                        r = t.onSelect,
                        o = t.rootUID,
                        i = this.state,
                        s = i.childItems,
                        a = i.filterValue,
                        l = i.hoveredItem,
                        u = i.suggestedItems,
                        d = i.sharedItems,
                        p = i.itemsPerCategory,
                        f = i.openPanels,
                        h = function(e) {
                            return -1 !== f.indexOf(e)
                        },
                        b = !!a;
                    return Object(X.createElement)("div", {
                        className: "editor-inserter__menu"
                    }, Object(X.createElement)("label", {
                        htmlFor: "editor-inserter__search-" + n,
                        className: "screen-reader-text"
                    }, Object(P.__)("Search for a block")), Object(X.createElement)("input", {
                        id: "editor-inserter__search-" + n,
                        type: "search",
                        placeholder: Object(P.__)("Search for a block"),
                        className: "editor-inserter__search",
                        autoFocus: !0,
                        onChange: this.onChangeSearchInput
                    }), Object(X.createElement)("div", {
                        className: "editor-inserter__results",
                        ref: this.inserterResults,
                        tabIndex: "0",
                        role: "region",
                        "aria-label": Object(P.__)("Available block types")
                    }, Object(X.createElement)(_i.Slot, {
                        fillProps: {
                            filterValue: a
                        }
                    }), Object(X.createElement)(mi, {
                        rootUID: o,
                        items: s,
                        onSelect: r,
                        onHover: this.onHover
                    }), !!u.length && Object(X.createElement)(or.PanelBody, {
                        title: Object(P.__)("Most Used"),
                        opened: h("suggested"),
                        onToggle: this.onTogglePanel("suggested"),
                        ref: this.bindPanel("suggested")
                    }, Object(X.createElement)(bi, {
                        items: u,
                        onSelect: r,
                        onHover: this.onHover
                    })), Object(c.map)(Object(E.getCategories)(), function(t) {
                        var n = p[t.slug];
                        return n && n.length ? Object(X.createElement)(or.PanelBody, {
                            key: t.slug,
                            title: t.title,
                            opened: b || h(t.slug),
                            onToggle: e.onTogglePanel(t.slug),
                            ref: e.bindPanel(t.slug)
                        }, Object(X.createElement)(bi, {
                            items: n,
                            onSelect: r,
                            onHover: e.onHover
                        })) : null
                    }), !!d.length && Object(X.createElement)(or.PanelBody, {
                        title: Object(P.__)("Shared"),
                        opened: h("shared"),
                        onToggle: this.onTogglePanel("shared"),
                        icon: "controls-repeat",
                        ref: this.bindPanel("shared")
                    }, Object(X.createElement)(bi, {
                        items: d,
                        onSelect: r,
                        onHover: this.onHover
                    })), Object(c.isEmpty)(u) && Object(c.isEmpty)(d) && Object(c.isEmpty)(p) && Object(X.createElement)("p", {
                        className: "editor-inserter__no-results"
                    }, Object(P.__)("No blocks found."))), l && Object(E.isSharedBlock)(l) && Object(X.createElement)(hi, {
                        name: l.name,
                        attributes: l.initialAttributes
                    }))
                }
            }]), t
        }(X.Component),
        Si = Object(X.compose)(Object(a.withSelect)(function(e, t) {
            var n = t.rootUID;
            return {
                rootChildBlocks: (0, e("core/blocks").getChildBlockNames)((0, e("core/editor").getBlockName)(n))
            }
        }), Object(a.withDispatch)(function(e) {
            return {
                fetchSharedBlocks: e("core/editor").fetchSharedBlocks,
                showInsertionPoint: e("core/editor").showInsertionPoint,
                hideInsertionPoint: e("core/editor").hideInsertionPoint
            }
        }), or.withSpokenMessages, or.withInstanceId, or.withSafeTimeout)(ji),
        Ei = function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.onToggle = e.onToggle.bind(e), e
            }
            return jr()(t, e), Or()(t, [{
                key: "onToggle",
                value: function(e) {
                    var t = this.props.onToggle;
                    t && t(e)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.items,
                        n = e.position,
                        r = e.title,
                        o = e.children,
                        i = e.onInsertBlock,
                        s = e.rootUID;
                    return 0 === t.length ? null : Object(X.createElement)(or.Dropdown, {
                        className: "editor-inserter",
                        contentClassName: "editor-inserter__popover",
                        position: n,
                        onToggle: this.onToggle,
                        expandOnMobile: !0,
                        headerTitle: r,
                        renderToggle: function(e) {
                            var t = e.onToggle,
                                n = e.isOpen;
                            return Object(X.createElement)(or.IconButton, {
                                icon: "insert",
                                label: Object(P.__)("Add block"),
                                onClick: t,
                                className: "editor-inserter__toggle",
                                "aria-haspopup": "true",
                                "aria-expanded": n
                            }, o)
                        },
                        renderContent: function(e) {
                            var n = e.onClose;
                            return Object(X.createElement)(Si, {
                                items: t,
                                onSelect: function(e) {
                                    i(e), n()
                                },
                                rootUID: s
                            })
                        }
                    })
                }
            }]), t
        }(X.Component),
        wi = Object(X.compose)([Object(a.withSelect)(function(e) {
            var t = e("core/editor"),
                n = t.getEditedPostAttribute,
                r = t.getBlockInsertionPoint,
                o = t.getSelectedBlock,
                i = t.getInserterItems,
                s = r(),
                c = s.rootUID;
            return {
                title: n("title"),
                insertionPoint: s,
                selectedBlock: o(),
                items: i(c),
                rootUID: c
            }
        }), Object(a.withDispatch)(function(e, t) {
            return {
                onInsertBlock: function(n) {
                    var r = t.insertionPoint,
                        o = t.selectedBlock,
                        i = r.index,
                        s = r.rootUID,
                        c = r.layout,
                        a = n.name,
                        l = n.initialAttributes,
                        u = Object(E.createBlock)(a, p()({}, l, {
                            layout: c
                        }));
                    return o && Object(E.isUnmodifiedDefaultBlock)(o) ? e("core/editor").replaceBlocks(o.uid, u) : e("core/editor").insertBlock(u, i, s)
                }
            }
        })])(Ei);
    var Ti = Object(Oo.ifViewportMatches)("< small")(function(e) {
            var t = e.rootUID,
                n = e.uid;
            return Object(X.createElement)("div", {
                className: "editor-block-list__block-mobile-toolbar"
            }, Object(X.createElement)(wi, null), Object(X.createElement)(Io, {
                uids: [n]
            }), Object(X.createElement)(qo, {
                rootUID: t,
                uids: [n]
            }))
        }),
        Ci = function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.state = {
                    isInserterFocused: !1
                }, e.onBlurInserter = e.onBlurInserter.bind(e), e.onFocusInserter = e.onFocusInserter.bind(e), e.onClick = e.onClick.bind(e), e
            }
            return jr()(t, e), Or()(t, [{
                key: "onFocusInserter",
                value: function(e) {
                    e.stopPropagation(), this.setState({
                        isInserterFocused: !0
                    })
                }
            }, {
                key: "onBlurInserter",
                value: function() {
                    this.setState({
                        isInserterFocused: !1
                    })
                }
            }, {
                key: "onClick",
                value: function() {
                    var e = this.props,
                        t = e.layout,
                        n = e.rootUID,
                        r = e.index,
                        o = h()(e, ["layout", "rootUID", "index"]);
                    o.insertDefaultBlock({
                        layout: t
                    }, n, r), o.startTyping(), this.onBlurInserter(), o.onInsert && this.props.onInsert()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.state.isInserterFocused,
                        t = this.props,
                        n = t.showInsertionPoint,
                        r = t.showInserter;
                    return Object(X.createElement)("div", {
                        className: "editor-block-list__insertion-point"
                    }, n && Object(X.createElement)("div", {
                        className: "editor-block-list__insertion-point-indicator"
                    }), r && Object(X.createElement)("div", {
                        className: fr()("editor-block-list__insertion-point-inserter", {
                            "is-visible": e
                        })
                    }, Object(X.createElement)(or.IconButton, {
                        icon: "insert",
                        className: "editor-block-list__insertion-point-button",
                        onClick: this.onClick,
                        label: Object(P.__)("Insert block"),
                        onFocus: this.onFocusInserter,
                        onBlur: this.onBlurInserter
                    })))
                }
            }]), t
        }(X.Component),
        Pi = Object(X.compose)(Object(a.withSelect)(function(e, t) {
            var n = t.uid,
                r = t.rootUID,
                o = t.canShowInserter,
                i = e("core/editor"),
                s = i.getBlockIndex,
                c = i.getBlockInsertionPoint,
                a = i.getBlock,
                l = i.isBlockInsertionPointVisible,
                u = i.isTyping,
                d = i.getTemplateLock,
                p = n ? s(n, r) : -1,
                f = c(),
                h = n ? a(n) : null,
                b = l() && f.index === p && f.rootUID === r && (!h || !Object(E.isUnmodifiedDefaultBlock)(h));
            return {
                isLocked: !!d(f.rootUID),
                showInserter: !u() && o,
                index: p,
                showInsertionPoint: b
            }
        }), Object(or.ifCondition)(function(e) {
            return !e.isLocked
        }), Object(a.withDispatch)(function(e) {
            var t = e("core/editor");
            return {
                insertDefaultBlock: t.insertDefaultBlock,
                startTyping: t.startTyping
            }
        }))(Ci);
    var Bi = function(e) {
            var t = e.rootUID,
                n = e.index,
                r = e.uid,
                o = e.layout,
                i = e.isDragging,
                s = h()(e, ["rootUID", "index", "uid", "layout", "isDragging"]),
                c = fr()("editor-block-list__block-draggable", {
                    "is-visible": i
                }),
                a = {
                    type: "block",
                    fromIndex: n,
                    rootUID: t,
                    uid: r,
                    layout: o
                };
            return Object(X.createElement)(or.Draggable, p()({
                className: c,
                transferData: a
            }, s), Object(X.createElement)("div", {
                className: "editor-block-list__block-draggable-inner"
            }))
        },
        xi = function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.proxyEvent = e.proxyEvent.bind(e), e.eventMap = {}, e
            }
            return jr()(t, e), Or()(t, [{
                key: "proxyEvent",
                value: function(e) {
                    var t = !!e.nativeEvent._blockHandled;
                    e.nativeEvent._blockHandled = !0;
                    var n = this.eventMap[e.type];
                    t && (n += "Handled"), this.props[n] && this.props[n](e)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = this.props,
                        n = t.childHandledEvents,
                        r = void 0 === n ? [] : n,
                        o = h()(t, ["childHandledEvents"]),
                        i = Object(c.reduce)([].concat(m()(r), m()(Y()(o))), function(t, n) {
                            var r = n.match(/^on([A-Z][a-zA-Z]+?)(Handled)?$/);
                            if (r) {
                                !!r[2] && delete o[n];
                                var i = "on" + r[1];
                                t[i] = e.proxyEvent, e.eventMap[r[1].toLowerCase()] = i
                            }
                            return t
                        }, {});
                    return Object(X.createElement)("div", p()({}, o, i))
                }
            }]), t
        }(X.Component);
    n(623);
    var Ii = Object(X.compose)(Object(a.withSelect)(function(e, t) {
            var n = t.rootUID,
                r = e("core/editor"),
                o = r.getInserterItems,
                i = r.getTemplateLock;
            return {
                items: o(n),
                isLocked: !!i(n)
            }
        }), Object(a.withDispatch)(function(e, t) {
            var n = t.uid,
                r = t.rootUID,
                o = t.layout;
            return {
                onInsert: function(t) {
                    var i = t.name,
                        s = t.initialAttributes,
                        c = Object(E.createBlock)(i, p()({}, s, {
                            layout: o
                        }));
                    n ? e("core/editor").replaceBlocks(n, c) : e("core/editor").insertBlock(c, void 0, r)
                }
            }
        }))(function(e) {
            var t = e.items,
                n = e.isLocked,
                r = e.onInsert;
            if (n) return null;
            var o = Object(c.filter)(t, function(e) {
                return !(e.isDisabled || e.name === Object(E.getDefaultBlockName)() && Object(c.isEmpty)(e.initialAttributes))
            }).slice(0, 3);
            return Object(X.createElement)("div", {
                className: "editor-inserter-with-shortcuts"
            }, o.map(function(e) {
                return Object(X.createElement)(or.IconButton, {
                    key: e.id,
                    className: "editor-inserter-with-shortcuts__block",
                    onClick: function() {
                        return r(e)
                    },
                    label: Object(P.sprintf)(Object(P.__)("Add %s"), e.title),
                    icon: Object(X.createElement)(xr, {
                        icon: e.icon && e.icon.src
                    })
                })
            }))
        }),
        Di = Object(X.createHigherOrderComponent)(function(e) {
            var t = function(t) {
                function n() {
                    vr()(this, n);
                    var e = _r()(this, (n.__proto__ || br()(n)).apply(this, arguments));
                    return e.state = {
                        hoverArea: null
                    }, e.onMouseLeave = e.onMouseLeave.bind(e), e.onMouseMove = e.onMouseMove.bind(e), e
                }
                return jr()(n, t), Or()(n, [{
                    key: "componentDidMount",
                    value: function() {
                        this.container = Object(X.findDOMNode)(this), this.container.addEventListener("mousemove", this.onMouseMove), this.container.addEventListener("mouseleave", this.onMouseLeave)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.container.removeEventListener("mousemove", this.onMouseMove), this.container.removeEventListener("mouseleave", this.onMouseLeave)
                    }
                }, {
                    key: "onMouseLeave",
                    value: function() {
                        this.state.hoverArea && this.setState({
                            hoverArea: null
                        })
                    }
                }, {
                    key: "onMouseMove",
                    value: function(e) {
                        var t = this.props.isRTL,
                            n = this.container.getBoundingClientRect(),
                            r = n.width,
                            o = n.left,
                            i = n.right,
                            s = null;
                        e.clientX - o < r / 3 ? s = t ? "right" : "left" : i - e.clientX < r / 3 && (s = t ? "left" : "right"), s !== this.state.hoverArea && this.setState({
                            hoverArea: s
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.state.hoverArea;
                        return Object(X.createElement)(e, p()({}, this.props, {
                            hoverArea: t
                        }))
                    }
                }]), n
            }(X.Component);
            return Object(a.withSelect)(function(e) {
                return {
                    isRTL: e("core/editor").getEditorSettings().isRTL
                }
            })(t)
        }),
        Ai = function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.setBlockListRef = e.setBlockListRef.bind(e), e.bindBlockNode = e.bindBlockNode.bind(e), e.setAttributes = e.setAttributes.bind(e), e.maybeHover = e.maybeHover.bind(e), e.hideHoverEffects = e.hideHoverEffects.bind(e), e.mergeBlocks = e.mergeBlocks.bind(e), e.insertBlocksAfter = e.insertBlocksAfter.bind(e), e.onFocus = e.onFocus.bind(e), e.preventDrag = e.preventDrag.bind(e), e.onPointerDown = e.onPointerDown.bind(e), e.deleteOrInsertAfterWrapper = e.deleteOrInsertAfterWrapper.bind(e), e.onBlockError = e.onBlockError.bind(e), e.onTouchStart = e.onTouchStart.bind(e), e.onClick = e.onClick.bind(e), e.onDragStart = e.onDragStart.bind(e), e.onDragEnd = e.onDragEnd.bind(e), e.selectOnOpen = e.selectOnOpen.bind(e), e.hadTouchStart = !1, e.state = {
                    error: null,
                    dragging: !1,
                    isHovered: !1
                }, e
            }
            return jr()(t, e), Or()(t, [{
                key: "componentDidMount",
                value: function() {
                    this.props.isSelected && this.focusTabbable()
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    (this.props.isTypingWithinBlock || this.props.isSelected) && this.hideHoverEffects(), this.props.isSelected && !e.isSelected && this.focusTabbable()
                }
            }, {
                key: "setBlockListRef",
                value: function(e) {
                    e = Object(X.findDOMNode)(e), this.wrapperNode = e, this.props.blockRef(e, this.props.uid)
                }
            }, {
                key: "bindBlockNode",
                value: function(e) {
                    this.node = Object(X.findDOMNode)(e)
                }
            }, {
                key: "focusTabbable",
                value: function() {
                    var e = this.props.initialPosition;
                    if (!this.wrapperNode.contains(document.activeElement)) {
                        var t = wo.focus.tabbable.find(this.node).filter(wo.isTextField),
                            n = -1 === e,
                            r = (n ? c.last : c.first)(t);
                        if (r) {
                            if (r.focus(), n) {
                                var o = Eo.a.get(r.getAttribute("id"));
                                o ? (o.selection.select(o.getBody(), !0), o.selection.collapse(!1)) : (Object(wo.placeCaretAtHorizontalEdge)(r, !0), Object(wo.placeCaretAtVerticalEdge)(r, !0))
                            }
                        } else this.wrapperNode.focus()
                    }
                }
            }, {
                key: "setAttributes",
                value: function(e) {
                    var t = this.props,
                        n = t.block,
                        r = t.onChange,
                        o = Object(E.getBlockType)(n.name);
                    r(n.uid, e);
                    var i = Object(c.reduce)(e, function(e, t, n) {
                        return "meta" === Object(c.get)(o, ["attributes", n, "source"]) && (e[o.attributes[n].meta] = t), e
                    }, {});
                    Object(c.size)(i) && this.props.onMetaChange(p()({}, this.props.meta, i))
                }
            }, {
                key: "onTouchStart",
                value: function() {
                    this.hadTouchStart = !0
                }
            }, {
                key: "onClick",
                value: function() {
                    this.hadTouchStart = !1
                }
            }, {
                key: "maybeHover",
                value: function() {
                    var e = this.props,
                        t = e.isPartOfMultiSelection,
                        n = e.isSelected;
                    this.state.isHovered || t || n || this.props.isMultiSelecting || this.hadTouchStart || this.setState({
                        isHovered: !0
                    })
                }
            }, {
                key: "hideHoverEffects",
                value: function() {
                    this.state.isHovered && this.setState({
                        isHovered: !1
                    })
                }
            }, {
                key: "mergeBlocks",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = this.props,
                        n = t.block,
                        r = t.previousBlockUid,
                        o = t.nextBlockUid,
                        i = t.onMerge;
                    !e && !r || e && !o || (e ? i(n.uid, o) : i(r, n.uid))
                }
            }, {
                key: "insertBlocksAfter",
                value: function(e) {
                    this.props.onInsertBlocks(e, this.props.order + 1)
                }
            }, {
                key: "onFocus",
                value: function() {
                    this.props.isSelected || this.props.isPartOfMultiSelection || this.props.onSelect()
                }
            }, {
                key: "preventDrag",
                value: function(e) {
                    e.preventDefault()
                }
            }, {
                key: "onPointerDown",
                value: function(e) {
                    0 === e.button && (e.shiftKey ? this.props.isSelected || (this.props.onShiftSelection(this.props.uid), e.preventDefault()) : (this.props.onSelectionStart(this.props.uid), this.props.isPartOfMultiSelection && this.props.onSelect()))
                }
            }, {
                key: "deleteOrInsertAfterWrapper",
                value: function(e) {
                    var t = e.keyCode;
                    if (e.target === this.wrapperNode && !this.props.isLocked) switch (t) {
                        case To.ENTER:
                            this.props.onInsertBlocks([Object(E.createBlock)("core/paragraph")], this.props.order + 1), e.preventDefault();
                            break;
                        case To.BACKSPACE:
                        case To.DELETE:
                            var n = this.props,
                                r = n.uid,
                                o = n.onRemove,
                                i = n.previousBlockUid,
                                s = n.onSelect;
                            o(r), i && s(i, -1), e.preventDefault()
                    }
                }
            }, {
                key: "onBlockError",
                value: function(e) {
                    this.setState({
                        error: e
                    })
                }
            }, {
                key: "onDragStart",
                value: function() {
                    this.setState({
                        dragging: !0
                    })
                }
            }, {
                key: "onDragEnd",
                value: function() {
                    this.setState({
                        dragging: !1
                    })
                }
            }, {
                key: "selectOnOpen",
                value: function(e) {
                    e && !this.props.isSelected && this.props.onSelect()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.block,
                        n = e.order,
                        r = e.mode,
                        o = e.hasFixedToolbar,
                        i = e.isLocked,
                        s = e.isFirst,
                        c = e.isLast,
                        a = e.uid,
                        l = e.rootUID,
                        u = e.layout,
                        d = e.isSelected,
                        f = e.isPartOfMultiSelection,
                        h = e.isFirstMultiSelected,
                        b = e.isTypingWithinBlock,
                        m = e.isMultiSelecting,
                        v = e.hoverArea,
                        g = e.isLargeViewport,
                        O = e.isEmptyDefaultBlock,
                        y = e.isMovable,
                        _ = e.isPreviousBlockADefaultEmptyBlock,
                        k = e.hasSelectedInnerBlock,
                        j = this.state.isHovered && !m,
                        S = t.name,
                        w = t.isValid,
                        T = Object(E.getBlockType)(S),
                        C = Object(P.sprintf)(Object(P.__)("Block: %s"), T.title),
                        B = (d || j) && O,
                        x = (d || j) && O,
                        I = !x && d && !b,
                        D = !x && k && !b,
                        A = (d || "left" === v) && !B && !m && !f && !b,
                        N = (d || "right" === v) && !m && !f && !b,
                        R = j && !O,
                        L = !x && d && !b && w && (!o || !g),
                        U = I,
                        M = this.state,
                        F = M.error,
                        H = M.dragging,
                        V = f && s || !f,
                        K = !O && !_,
                        z = fr()("editor-block-list__block", {
                            "has-warning": !w || !!F,
                            "is-selected": I,
                            "is-multi-selected": f,
                            "is-selected-parent": D,
                            "is-hovered": j && !O,
                            "is-shared": Object(E.isSharedBlock)(T),
                            "is-hidden": H,
                            "is-typing": b
                        }),
                        W = this.props.onReplace,
                        q = this.props.wrapperProps;
                    T.getEditWrapperProps && (q = p()({}, q, T.getEditWrapperProps(t.attributes)));
                    var G = "block-" + a;
                    return Object(X.createElement)(xi, p()({
                        id: G,
                        ref: this.setBlockListRef,
                        onMouseOver: this.maybeHover,
                        onMouseOverHandled: this.hideHoverEffects,
                        onMouseLeave: this.hideHoverEffects,
                        className: z,
                        "data-type": t.name,
                        onTouchStart: this.onTouchStart,
                        onFocus: this.onFocus,
                        onClick: this.onClick,
                        onKeyDown: this.deleteOrInsertAfterWrapper,
                        tabIndex: "0",
                        "aria-label": C,
                        childHandledEvents: ["onDragStart", "onMouseDown"]
                    }, q), !f && y && Object(X.createElement)(Bi, {
                        rootUID: l,
                        index: n,
                        uid: a,
                        layout: u,
                        onDragStart: this.onDragStart,
                        onDragEnd: this.onDragEnd,
                        isDragging: H,
                        elementId: G
                    }), V && Object(X.createElement)(Pi, {
                        uid: a,
                        rootUID: l,
                        layout: u,
                        canShowInserter: K,
                        onInsert: this.hideHoverEffects
                    }), Object(X.createElement)(Ao, {
                        index: n,
                        rootUID: l,
                        layout: u
                    }), A && Object(X.createElement)(Io, {
                        uids: a,
                        rootUID: l,
                        layout: u,
                        isFirst: s,
                        isLast: c,
                        isHidden: !(j || d) || "left" !== v
                    }), N && Object(X.createElement)(qo, {
                        uids: a,
                        rootUID: l,
                        isHidden: !(j || d) || "right" !== v
                    }), R && Object(X.createElement)(oi, {
                        uid: a,
                        isHidden: !(j || d) || "left" !== v
                    }), L && Object(X.createElement)(li, null), h && Object(X.createElement)(ui, {
                        rootUID: l
                    }), Object(X.createElement)(xi, {
                        ref: this.bindBlockNode,
                        onDragStart: this.preventDrag,
                        onMouseDown: this.onPointerDown,
                        className: "editor-block-list__block-edit",
                        "data-block": a
                    }, Object(X.createElement)(Jo, {
                        onError: this.onBlockError
                    }, w && "visual" === r && Object(X.createElement)($r, {
                        name: S,
                        isSelected: d,
                        attributes: t.attributes,
                        setAttributes: this.setAttributes,
                        insertBlocksAfter: i ? void 0 : this.insertBlocksAfter,
                        onReplace: i ? void 0 : W,
                        mergeBlocks: i ? void 0 : this.mergeBlocks,
                        id: a,
                        isSelectionEnabled: this.props.isSelectionEnabled,
                        toggleSelection: this.props.toggleSelection
                    }), w && "html" === r && Object(X.createElement)(ti, {
                        uid: a
                    }), !w && [Object(X.createElement)("div", {
                        key: "invalid-preview"
                    }, Object(E.getSaveElement)(T, t.attributes)), Object(X.createElement)(Yo, {
                        key: "invalid-warning",
                        block: t
                    })]), U && Object(X.createElement)(Ti, {
                        rootUID: l,
                        uid: a
                    })), !!F && Object(X.createElement)($o, null), B && Object(X.createElement)(X.Fragment, null, Object(X.createElement)("div", {
                        className: "editor-block-list__side-inserter"
                    }, Object(X.createElement)(Ii, {
                        uid: a,
                        rootUID: l,
                        layout: u,
                        onToggle: this.selectOnOpen
                    })), Object(X.createElement)("div", {
                        className: "editor-block-list__empty-block-inserter"
                    }, Object(X.createElement)(wi, {
                        position: "top right",
                        onToggle: this.selectOnOpen
                    }))))
                }
            }]), t
        }(X.Component),
        Ni = Object(a.withSelect)(function(e, t) {
            var n = t.uid,
                r = t.rootUID,
                o = e("core/editor"),
                i = o.isBlockSelected,
                s = o.getPreviousBlockUid,
                c = o.getNextBlockUid,
                a = o.getBlock,
                l = o.isAncestorMultiSelected,
                u = o.isBlockMultiSelected,
                d = o.isFirstMultiSelectedBlock,
                p = o.isMultiSelecting,
                f = o.isTyping,
                h = o.getBlockIndex,
                b = o.getEditedPostAttribute,
                m = o.getBlockMode,
                v = o.isSelectionEnabled,
                g = o.getSelectedBlocksInitialCaretPosition,
                O = o.getEditorSettings,
                y = o.hasSelectedInnerBlock,
                _ = o.getTemplateLock,
                k = i(n),
                j = y(n),
                S = O().hasFixedToolbar,
                w = a(n),
                T = s(n),
                C = a(T),
                P = _(r);
            return {
                nextBlockUid: c(n),
                isPartOfMultiSelection: u(n) || l(n),
                isFirstMultiSelected: d(n),
                isMultiSelecting: p(),
                hasSelectedInnerBlock: j,
                isTypingWithinBlock: (k || j) && f(),
                order: h(n, r),
                meta: b("meta"),
                mode: m(n),
                isSelectionEnabled: v(),
                initialPosition: g(),
                isEmptyDefaultBlock: w && Object(E.isUnmodifiedDefaultBlock)(w),
                isPreviousBlockADefaultEmptyBlock: C && Object(E.isUnmodifiedDefaultBlock)(C),
                isMovable: "all" !== P,
                isLocked: !!P,
                previousBlockUid: T,
                block: w,
                isSelected: k,
                hasFixedToolbar: S
            }
        }),
        Ri = Object(a.withDispatch)(function(e, t) {
            var n = e("core/editor"),
                r = n.updateBlockAttributes,
                o = n.selectBlock,
                i = n.insertBlocks,
                s = n.removeBlock,
                a = n.mergeBlocks,
                l = n.replaceBlocks,
                u = n.editPost,
                d = n.toggleSelection;
            return {
                onChange: function(e, t) {
                    r(e, t)
                },
                onSelect: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.uid,
                        n = arguments[1];
                    o(e, n)
                },
                onInsertBlocks: function(e, n) {
                    var r = t.rootUID,
                        o = t.layout;
                    e = e.map(function(e) {
                        return Object(E.cloneBlock)(e, {
                            layout: o
                        })
                    }), i(e, n, r)
                },
                onRemove: function(e) {
                    s(e)
                },
                onMerge: function() {
                    a.apply(void 0, arguments)
                },
                onReplace: function(e) {
                    var n = t.layout;
                    e = Object(c.castArray)(e).map(function(e) {
                        return Object(E.cloneBlock)(e, {
                            layout: n
                        })
                    }), l([t.uid], e)
                },
                onMetaChange: function(e) {
                    u({
                        meta: e
                    })
                },
                toggleSelection: function(e) {
                    d(e)
                }
            }
        }),
        Li = Object(X.compose)(Ni, Ri, Object(Oo.withViewportMatch)({
            isLargeViewport: "medium"
        }), Object(or.withFilters)("editor.BlockListBlock"), Di)(Ai),
        Ui = n(102),
        Mi = n(170);
    n(622);
    var Fi = Object(X.compose)(Object(a.withSelect)(function(e, t) {
            var n = e("core/editor"),
                r = n.getBlockCount,
                o = n.getBlock,
                i = n.getEditorSettings,
                s = n.getTemplateLock,
                a = e("core/nux").isTipVisible,
                l = !r(t.rootUID),
                u = o(t.lastBlockUID),
                d = Object(c.get)(u, ["name"]) === Object(E.getDefaultBlockName)(),
                p = i().bodyPlaceholder;
            return {
                isVisible: l || !d,
                showPrompt: l,
                isLocked: !!s(t.rootUID),
                placeholder: p,
                hasTip: a("core/editor.inserter")
            }
        }), Object(a.withDispatch)(function(e, t) {
            var n = e("core/editor"),
                r = n.insertDefaultBlock,
                o = n.startTyping,
                i = e("core/nux").dismissTip;
            return {
                onAppend: function() {
                    var e = t.layout,
                        n = t.rootUID,
                        s = t.hasTip,
                        c = void 0;
                    e && (c = {
                        layout: e
                    }), r(c, n), o(), s && i("core/editor.inserter")
                }
            }
        }))(function(e) {
            var t = e.isLocked,
                n = e.isVisible,
                r = e.onAppend,
                o = e.showPrompt,
                i = e.placeholder,
                s = e.layout,
                c = e.rootUID,
                a = e.hasTip;
            if (t || !n) return null;
            var l = Object(Ui.decodeEntities)(i) || Object(P.__)("Write your story");
            return Object(X.createElement)("div", {
                "data-root-uid": c || "",
                className: fr()("editor-default-block-appender", {
                    "has-tip": a
                })
            }, Object(X.createElement)(Ao, {
                rootUID: c,
                layout: s
            }), Object(X.createElement)("input", {
                role: "button",
                "aria-label": Object(P.__)("Add block"),
                className: "editor-default-block-appender__content",
                type: "text",
                readOnly: !0,
                onFocus: r,
                onClick: r,
                onKeyDown: r,
                value: o ? l : ""
            }), Object(X.createElement)(Ii, {
                rootUID: c,
                layout: s
            }), Object(X.createElement)(wi, {
                position: "top right"
            }, Object(X.createElement)(Mi.DotTip, {
                id: "core/editor.inserter"
            }, Object(P.__)("Welcome to the wonderful world of blocks! Click the “+” (“Add block”) button to add a new block. There are blocks available for all kind of content: you can insert text, headings, images, lists, and lots more!"))))
        }),
        Hi = function(e) {
            function t(e) {
                vr()(this, t);
                var n = _r()(this, (t.__proto__ || br()(t)).call(this, e));
                return n.onSelectionStart = n.onSelectionStart.bind(n), n.onSelectionEnd = n.onSelectionEnd.bind(n), n.onShiftSelection = n.onShiftSelection.bind(n), n.setBlockRef = n.setBlockRef.bind(n), n.setLastClientY = n.setLastClientY.bind(n), n.onPointerMove = Object(c.throttle)(n.onPointerMove.bind(n), 100), n.onScroll = function() {
                    return n.onPointerMove({
                        clientY: n.lastClientY
                    })
                }, n.lastClientY = 0, n.nodes = {}, n
            }
            return jr()(t, e), Or()(t, [{
                key: "componentDidMount",
                value: function() {
                    window.addEventListener("mousemove", this.setLastClientY)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    window.removeEventListener("mousemove", this.setLastClientY)
                }
            }, {
                key: "setLastClientY",
                value: function(e) {
                    var t = e.clientY;
                    this.lastClientY = t
                }
            }, {
                key: "setBlockRef",
                value: function(e, t) {
                    null === e ? delete this.nodes[t] : this.nodes = p()({}, this.nodes, y()({}, t, e))
                }
            }, {
                key: "onPointerMove",
                value: function(e) {
                    var t = e.clientY;
                    this.props.isMultiSelecting || this.props.onStartMultiSelect();
                    var n = t - this.nodes[this.selectionAtStart].getBoundingClientRect().top,
                        r = Object(c.findLast)(this.coordMapKeys, function(e) {
                            return e < n
                        });
                    this.onSelectionChange(this.coordMap[r])
                }
            }, {
                key: "onSelectionStart",
                value: function(e) {
                    if (this.props.isSelectionEnabled) {
                        var t = this.nodes[e].getBoundingClientRect(),
                            n = Object(c.mapValues)(this.nodes, function(e) {
                                return e.getBoundingClientRect().top - t.top
                            });
                        this.coordMap = Object(c.invert)(n), this.coordMapKeys = Object(c.sortBy)(jo()(n)), this.selectionAtStart = e, window.addEventListener("mousemove", this.onPointerMove), window.addEventListener("scroll", this.onScroll, !0), window.addEventListener("mouseup", this.onSelectionEnd)
                    }
                }
            }, {
                key: "onSelectionChange",
                value: function(e) {
                    var t = this.props,
                        n = t.onMultiSelect,
                        r = t.selectionStart,
                        o = t.selectionEnd,
                        i = this.selectionAtStart,
                        s = i === e;
                    i && this.props.isSelectionEnabled && (s && r && n(null, null), s || o === e || n(i, e))
                }
            }, {
                key: "onSelectionEnd",
                value: function() {
                    this.onPointerMove.cancel(), delete this.coordMap, delete this.coordMapKeys, delete this.selectionAtStart, window.removeEventListener("mousemove", this.onPointerMove), window.removeEventListener("scroll", this.onScroll, !0), window.removeEventListener("mouseup", this.onSelectionEnd), this.props.isMultiSelecting && this.props.onStopMultiSelect()
                }
            }, {
                key: "onShiftSelection",
                value: function(e) {
                    if (this.props.isSelectionEnabled) {
                        var t = this.props,
                            n = t.selectionStartUID,
                            r = t.onMultiSelect,
                            o = t.onSelect;
                        n ? r(n, e) : o(e)
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = this.props,
                        n = t.blockUIDs,
                        r = t.layout,
                        o = t.isGroupedByLayout,
                        i = t.rootUID,
                        s = t.canInsertDefaultBlock,
                        a = void 0;
                    o && (a = r);
                    var l = fr()("editor-block-list__layout", y()({}, "layout-" + r, r));
                    return Object(X.createElement)("div", {
                        className: l
                    }, Object(c.map)(n, function(t, r) {
                        return Object(X.createElement)(Li, {
                            key: "block-" + t,
                            index: r,
                            uid: t,
                            blockRef: e.setBlockRef,
                            onSelectionStart: e.onSelectionStart,
                            onShiftSelection: e.onShiftSelection,
                            rootUID: i,
                            layout: a,
                            isFirst: 0 === r,
                            isLast: r === n.length - 1
                        })
                    }), s && Object(X.createElement)(xi, {
                        childHandledEvents: ["onFocus", "onClick", "onKeyDown"]
                    }, Object(X.createElement)(Fi, {
                        rootUID: i,
                        lastBlockUID: Object(c.last)(n),
                        layout: a
                    })))
                }
            }]), t
        }(X.Component),
        Vi = Object(X.compose)([Object(a.withSelect)(function(e, t) {
            var n = e("core/editor"),
                r = n.isSelectionEnabled,
                o = n.isMultiSelecting,
                i = n.getMultiSelectedBlocksStartUid,
                s = n.getMultiSelectedBlocksEndUid,
                c = n.getBlockSelectionStart,
                a = n.canInsertBlockType,
                l = t.rootUID;
            return {
                selectionStart: i(),
                selectionEnd: s(),
                selectionStartUID: c(),
                isSelectionEnabled: r(),
                isMultiSelecting: o(),
                canInsertDefaultBlock: a(Object(E.getDefaultBlockName)(), l)
            }
        }), Object(a.withDispatch)(function(e) {
            var t = e("core/editor");
            return {
                onStartMultiSelect: t.startMultiSelect,
                onStopMultiSelect: t.stopMultiSelect,
                onMultiSelect: t.multiSelect,
                onSelect: t.selectBlock
            }
        })])(Hi),
        Ki = Object(a.withSelect)(function(e, t) {
            return {
                blockUIDs: e("core/editor").getBlockOrder(t.rootUID)
            }
        })(Vi),
        zi = Object(a.withSelect)(function(e, t) {
            return {
                blocks: e("core/editor").getBlocks(t.rootUID)
            }
        })(function(e) {
            var t = e.blocks,
                n = e.layouts,
                r = h()(e, ["blocks", "layouts"]);
            return Object(c.map)(n, function(e) {
                var n = Object(c.reduce)(t, function(t, n) {
                    return Object(c.get)(n, ["attributes", "layout"]) === e.name && t.push(n.uid), t
                }, []);
                return Object(X.createElement)(Vi, p()({
                    key: e.name,
                    layout: e.name,
                    isGroupedByLayout: !0,
                    blockUIDs: n
                }, r))
            })
        }),
        Wi = function(e) {
            return Object(X.createElement)(Array.isArray(e.layouts) ? zi : Ki, e)
        },
        qi = function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.updateNestedSettings(), e
            }
            return jr()(t, e), Or()(t, [{
                key: "componentDidMount",
                value: function() {
                    this.synchronizeBlocksWithTemplate()
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this.props.template;
                    this.updateNestedSettings(), !Object(c.isEqual)(t, e.template) && this.synchronizeBlocksWithTemplate()
                }
            }, {
                key: "synchronizeBlocksWithTemplate",
                value: function() {
                    var e = this.props,
                        t = e.template,
                        n = e.block,
                        r = e.replaceInnerBlocks,
                        o = n.innerBlocks,
                        i = Object(E.synchronizeBlocksWithTemplate)(o, t);
                    Object(c.isEqual)(i, o) || r(i)
                }
            }, {
                key: "updateNestedSettings",
                value: function() {
                    var e = this.props,
                        t = e.blockListSettings,
                        n = e.allowedBlocks,
                        r = e.templateLock,
                        o = e.parentLock,
                        i = e.updateNestedSettings,
                        s = {
                            allowedBlocks: n,
                            templateLock: void 0 === r ? o : r
                        };
                    _o()(t, s) || i(s)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.uid,
                        n = e.layouts,
                        r = e.allowedBlocks,
                        o = e.templateLock,
                        i = e.template,
                        s = e.isSmallScreen,
                        c = e.isSelectedBlockInRoot,
                        a = fr()("editor-inner-blocks", {
                            "has-overlay": s && !c
                        });
                    return Object(X.createElement)("div", {
                        className: a
                    }, Object(X.createElement)(Wi, p()({
                        rootUID: t
                    }, {
                        layouts: n,
                        allowedBlocks: r,
                        templateLock: o,
                        template: i
                    })))
                }
            }]), t
        }(X.Component);
    (qi = Object(X.compose)([Tr(function(e) {
        return Object(c.pick)(e, ["uid"])
    }), Object(Oo.withViewportMatch)({
        isSmallScreen: "< medium"
    }), Object(a.withSelect)(function(e, t) {
        var n = e("core/editor"),
            r = n.isBlockSelected,
            o = n.hasSelectedInnerBlock,
            i = n.getBlock,
            s = n.getBlockListSettings,
            c = n.getBlockRootUID,
            a = n.getTemplateLock,
            l = t.uid,
            u = c(l);
        return {
            isSelectedBlockInRoot: r(l) || o(l),
            block: i(l),
            blockListSettings: s(l),
            parentLock: a(u)
        }
    }), Object(a.withDispatch)(function(e, t) {
        var n = e("core/editor"),
            r = n.replaceBlocks,
            o = n.insertBlocks,
            i = n.updateBlockListSettings,
            s = t.block,
            a = t.uid;
        return {
            replaceInnerBlocks: function(e) {
                var t = Object(c.map)(s.innerBlocks, "uid");
                t.length ? r(t, e) : o(e, void 0, a)
            },
            updateNestedSettings: function(t) {
                e(i(a, t))
            }
        }
    })])(qi)).Content = function(e) {
        var t = e.BlockContent;
        return Object(X.createElement)(t, null)
    }, qi.Content = Object(or.withContext)("BlockContent")()(qi.Content);
    var Gi = qi,
        Yi = Object(or.createSlotFill)("InspectorAdvancedControls"),
        Xi = Yi.Fill,
        $i = Yi.Slot,
        Ji = Cr(Xi);
    Ji.Slot = $i;
    var Qi = Ji,
        Zi = Object(or.createSlotFill)("InspectorControls"),
        es = Zi.Fill,
        ts = Zi.Slot,
        ns = Cr(es);
    ns.Slot = ts;
    var rs = ns;
    var os = Object(X.compose)([no, Object(or.ifCondition)(function(e) {
        return e.hasColorsToChoose
    })])(function(e) {
        var t = e.colors,
            n = e.title,
            r = e.colorValue,
            o = e.initialOpen,
            i = h()(e, ["colors", "title", "colorValue", "initialOpen"]),
            s = co(t, r);
        return Object(X.createElement)(or.PanelColor, {
            title: n,
            colorName: s,
            colorValue: r,
            initialOpen: o
        }, Object(X.createElement)(ro, p()({
            value: r
        }, Object(c.omit)(i, ["disableCustomColors"]))))
    });
    n(621);
    var is = function(e) {
            var t = e.onChange,
                n = e.className,
                r = h()(e, ["onChange", "className"]);
            return Object(X.createElement)(Zo.a, p()({
                className: fr()("editor-plain-text", n),
                onChange: function(e) {
                    return t(e.target.value)
                }
            }, r))
        },
        ss = n(63),
        cs = n.n(ss),
        as = n(126),
        ls = (n(620), n(180));
    n(619);
    var us = function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.state = {
                    style: function() {
                        var e = window.getSelection();
                        if (0 === e.rangeCount) return {};
                        var t = Object(wo.getRectangleFromRange)(e.getRangeAt(0)),
                            n = t.top + t.height,
                            r = t.left + t.width / 2,
                            o = Object(wo.getOffsetParent)(e.anchorNode);
                        if (o) {
                            var i = o.getBoundingClientRect();
                            n -= i.top, r -= i.left
                        }
                        return {
                            top: n,
                            left: r
                        }
                    }()
                }, e
            }
            return jr()(t, e), Or()(t, [{
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.className,
                        n = e.children,
                        r = this.state.style;
                    return Object(X.createElement)("div", {
                        className: t,
                        style: r
                    }, n)
                }
            }]), t
        }(X.Component),
        ds = n(179),
        ps = function(e) {
            return e.stopPropagation()
        },
        fs = function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.onChange = e.onChange.bind(e), e.onKeyDown = e.onKeyDown.bind(e), e.bindListNode = e.bindListNode.bind(e), e.updateSuggestions = Object(c.throttle)(e.updateSuggestions.bind(e), 200), e.suggestionNodes = [], e.state = {
                    posts: [],
                    showSuggestions: !1,
                    selectedSuggestion: null
                }, e
            }
            return jr()(t, e), Or()(t, [{
                key: "bindListNode",
                value: function(e) {
                    this.listNode = e
                }
            }, {
                key: "bindSuggestionNode",
                value: function(e) {
                    var t = this;
                    return function(n) {
                        t.suggestionNodes[e] = n
                    }
                }
            }, {
                key: "updateSuggestions",
                value: function(e) {
                    var t = this;
                    this.suggestionsRequest && this.suggestionsRequest.abort(), e.length < 2 || /^https?:/.test(e) ? this.setState({
                        showSuggestions: !1,
                        selectedSuggestion: null,
                        loading: !1
                    }) : (this.setState({
                        showSuggestions: !0,
                        selectedSuggestion: null,
                        loading: !0
                    }), this.suggestionsRequest = Q()({
                        path: "/wp/v2/posts?" + Object(ds.stringify)({
                            search: e,
                            per_page: 20,
                            orderby: "relevance"
                        })
                    }), this.suggestionsRequest.then(function(e) {
                        t.setState({
                            posts: e,
                            loading: !1
                        }), e.length ? t.props.debouncedSpeak(Object(P.sprintf)(Object(P._n)("%d result found, use up and down arrow keys to navigate.", "%d results found, use up and down arrow keys to navigate.", e.length), e.length), "assertive") : t.props.debouncedSpeak(Object(P.__)("No results."), "assertive")
                    }, function(e) {
                        "abort" !== e.statusText && t.setState({
                            loading: !1
                        })
                    }))
                }
            }, {
                key: "onChange",
                value: function(e) {
                    var t = e.target.value;
                    this.props.onChange(t), this.updateSuggestions(t)
                }
            }, {
                key: "onKeyDown",
                value: function(e) {
                    var t = this.state,
                        n = t.showSuggestions,
                        r = t.selectedSuggestion,
                        o = t.posts,
                        i = t.loading;
                    if (n && o.length && !i) switch (e.keyCode) {
                        case To.UP:
                            e.stopPropagation(), e.preventDefault();
                            var s = r ? r - 1 : o.length - 1;
                            this.setState({
                                selectedSuggestion: s
                            });
                            break;
                        case To.DOWN:
                            e.stopPropagation(), e.preventDefault();
                            var c = null === r || r === o.length - 1 ? 0 : r + 1;
                            this.setState({
                                selectedSuggestion: c
                            });
                            break;
                        case To.ENTER:
                            if (this.state.selectedSuggestion) {
                                e.stopPropagation();
                                var a = this.state.posts[this.state.selectedSuggestion];
                                this.selectLink(a.link)
                            }
                    }
                }
            }, {
                key: "selectLink",
                value: function(e) {
                    this.props.onChange(e), this.setState({
                        selectedSuggestion: null,
                        showSuggestions: !1
                    })
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.suggestionsRequest && this.suggestionsRequest.abort()
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    var e = this,
                        t = this.state,
                        n = t.showSuggestions,
                        r = t.selectedSuggestion;
                    n && null !== r && !this.scrollingIntoView && (this.scrollingIntoView = !0, pi()(this.suggestionNodes[r], this.listNode, {
                        onlyScrollIfNeeded: !0
                    }), setTimeout(function() {
                        e.scrollingIntoView = !1
                    }, 100))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = this.props,
                        n = t.value,
                        r = void 0 === n ? "" : n,
                        o = t.autoFocus,
                        i = void 0 === o || o,
                        s = t.instanceId,
                        c = this.state,
                        a = c.showSuggestions,
                        l = c.posts,
                        u = c.selectedSuggestion,
                        d = c.loading;
                    return Object(X.createElement)(X.Fragment, null, Object(X.createElement)("div", {
                        className: "editor-url-input"
                    }, Object(X.createElement)("input", {
                        autoFocus: i,
                        type: "text",
                        "aria-label": Object(P.__)("URL"),
                        required: !0,
                        value: r,
                        onChange: this.onChange,
                        onInput: ps,
                        placeholder: Object(P.__)("Paste URL or type"),
                        onKeyDown: this.onKeyDown,
                        role: "combobox",
                        "aria-expanded": a,
                        "aria-autocomplete": "list",
                        "aria-owns": "editor-url-input-suggestions-" + s,
                        "aria-activedescendant": null !== u ? "editor-url-input-suggestion-" + s + "-" + u : void 0
                    }), d && Object(X.createElement)(or.Spinner, null)), a && !!l.length && Object(X.createElement)(or.Popover, {
                        position: "bottom",
                        noArrow: !0,
                        focusOnMount: !1
                    }, Object(X.createElement)("div", {
                        className: "editor-url-input__suggestions",
                        id: "editor-url-input-suggestions-" + s,
                        ref: this.bindListNode,
                        role: "listbox"
                    }, l.map(function(t, n) {
                        return Object(X.createElement)("button", {
                            key: t.id,
                            role: "option",
                            tabIndex: "-1",
                            id: "editor-url-input-suggestion-" + s + "-" + n,
                            ref: e.bindSuggestionNode(n),
                            className: fr()("editor-url-input__suggestion", {
                                "is-selected": n === u
                            }),
                            onClick: function() {
                                return e.selectLink(t.link)
                            },
                            "aria-selected": n === u
                        }, Object(Ui.decodeEntities)(t.title.rendered) || Object(P.__)("(no title)"))
                    }))))
                }
            }]), t
        }(X.Component),
        hs = Object(or.withSpokenMessages)(Object(or.withInstanceId)(fs));

    function bs(e, t) {
        return Object(ls.a)(e, t)
    }
    var ms = [{
            icon: "editor-bold",
            title: Object(P.__)("Bold"),
            shortcut: To.displayShortcut.primary("b"),
            format: "bold"
        }, {
            icon: "editor-italic",
            title: Object(P.__)("Italic"),
            shortcut: To.displayShortcut.primary("i"),
            format: "italic"
        }, {
            icon: "editor-strikethrough",
            title: Object(P.__)("Strikethrough"),
            shortcut: To.displayShortcut.access("d"),
            format: "strikethrough"
        }, {
            icon: "admin-links",
            title: Object(P.__)("Link"),
            shortcut: To.displayShortcut.primary("k"),
            format: "link"
        }],
        vs = ["bold", "italic", "strikethrough", "link"],
        gs = function(e) {
            return e.stopPropagation()
        };
    var Os = function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.state = {}, e.addLink = e.addLink.bind(e), e.editLink = e.editLink.bind(e), e.dropLink = e.dropLink.bind(e), e.submitLink = e.submitLink.bind(e), e.onKeyDown = e.onKeyDown.bind(e), e.onChangeLinkValue = e.onChangeLinkValue.bind(e), e.toggleLinkSettingsVisibility = e.toggleLinkSettingsVisibility.bind(e), e.setLinkTarget = e.setLinkTarget.bind(e), e
            }
            return jr()(t, e), Or()(t, [{
                key: "onKeyDown",
                value: function(e) {
                    if (e.keyCode === To.ESCAPE) {
                        var t = this.props.formats.link;
                        t && t.isAdding && (e.stopPropagation(), t.value ? this.props.onChange({
                            link: p()({}, t, {
                                isAdding: !1
                            })
                        }) : this.dropLink())
                    }[To.LEFT, To.DOWN, To.RIGHT, To.UP, To.BACKSPACE, To.ENTER].indexOf(e.keyCode) > -1 && gs(e)
                }
            }, {
                key: "onChangeLinkValue",
                value: function(e) {
                    this.setState({
                        linkValue: e
                    })
                }
            }, {
                key: "toggleFormat",
                value: function(e) {
                    var t = this;
                    return function() {
                        t.props.onChange(y()({}, e, !t.props.formats[e]))
                    }
                }
            }, {
                key: "toggleLinkSettingsVisibility",
                value: function() {
                    this.setState(function(e) {
                        return {
                            settingsVisible: !e.settingsVisible
                        }
                    })
                }
            }, {
                key: "setLinkTarget",
                value: function(e) {
                    this.setState({
                        opensInNewWindow: e
                    }), this.props.formats.link && !this.props.formats.link.isAdding && this.props.onChange({
                        link: {
                            value: this.props.formats.link.value,
                            target: e ? "_blank" : null,
                            rel: e ? "noreferrer noopener" : null
                        }
                    })
                }
            }, {
                key: "addLink",
                value: function() {
                    this.setState({
                        linkValue: ""
                    }), this.props.onChange({
                        link: {
                            isAdding: !0
                        }
                    })
                }
            }, {
                key: "dropLink",
                value: function() {
                    this.props.onChange({
                        link: null
                    }), this.setState({
                        linkValue: ""
                    })
                }
            }, {
                key: "editLink",
                value: function(e) {
                    e.preventDefault(), this.props.onChange({
                        link: p()({}, this.props.formats.link, {
                            isAdding: !0
                        })
                    }), this.setState({
                        linkValue: this.props.formats.link.value
                    })
                }
            }, {
                key: "submitLink",
                value: function(e) {
                    e.preventDefault();
                    var t = Object(ls.b)(this.state.linkValue);
                    this.props.onChange({
                        link: {
                            isAdding: !1,
                            target: this.state.opensInNewWindow ? "_blank" : null,
                            rel: this.state.opensInNewWindow ? "noreferrer noopener" : null,
                            value: t
                        }
                    }), this.setState({
                        linkValue: t
                    }), this.props.formats.link.value || this.props.speak(Object(P.__)("Link added."), "assertive")
                }
            }, {
                key: "isFormatActive",
                value: function(e) {
                    return this.props.formats[e] && this.props.formats[e].isActive
                }
            }, {
                key: "render",
                value: function() {
                    var e, t, n = this,
                        r = this.props,
                        o = r.formats,
                        i = r.enabledControls,
                        s = void 0 === i ? vs : i,
                        c = r.customControls,
                        a = void 0 === c ? [] : c,
                        l = r.selectedNodeId,
                        u = this.state,
                        d = u.linkValue,
                        f = u.settingsVisible,
                        h = u.opensInNewWindow,
                        b = o.link && o.link.isAdding,
                        m = ms.concat(a).filter(function(e) {
                            return -1 !== s.indexOf(e.format)
                        }).map(function(e) {
                            if ("link" === e.format) {
                                var t = n.isFormatActive("link"),
                                    r = t || b;
                                return p()({}, e, {
                                    icon: t ? "editor-unlink" : "admin-links",
                                    title: t ? Object(P.__)("Unlink") : Object(P.__)("Link"),
                                    onClick: r ? n.dropLink : n.addLink,
                                    isActive: r
                                })
                            }
                            return p()({}, e, {
                                onClick: n.toggleFormat(e.format),
                                isActive: n.isFormatActive(e.format)
                            })
                        }),
                        v = f && Object(X.createElement)("div", {
                            className: "editor-format-toolbar__link-modal-line editor-format-toolbar__link-settings"
                        }, Object(X.createElement)(or.ToggleControl, {
                            label: Object(P.__)("Open in new window"),
                            checked: h,
                            onChange: this.setLinkTarget
                        }));
                    return Object(X.createElement)("div", {
                        className: "editor-format-toolbar"
                    }, Object(X.createElement)(or.Toolbar, {
                        controls: m
                    }), (b || o.link) && Object(X.createElement)(or.Fill, {
                        name: "RichText.Siblings"
                    }, Object(X.createElement)(us, {
                        className: "editor-format-toolbar__link-container"
                    }, Object(X.createElement)(or.Popover, {
                        position: "bottom center",
                        focusOnMount: !!b && "firstElement",
                        key: l
                    }, b && Object(X.createElement)("form", {
                        className: "editor-format-toolbar__link-modal",
                        onKeyPress: gs,
                        onKeyDown: this.onKeyDown,
                        onSubmit: this.submitLink
                    }, Object(X.createElement)("div", {
                        className: "editor-format-toolbar__link-modal-line"
                    }, Object(X.createElement)(hs, {
                        value: d,
                        onChange: this.onChangeLinkValue
                    }), Object(X.createElement)(or.IconButton, {
                        icon: "editor-break",
                        label: Object(P.__)("Apply"),
                        type: "submit"
                    }), Object(X.createElement)(or.IconButton, {
                        className: "editor-format-toolbar__link-settings-toggle",
                        icon: "ellipsis",
                        label: Object(P.__)("Link Settings"),
                        onClick: this.toggleLinkSettingsVisibility,
                        "aria-expanded": f
                    })), v), o.link && !b && Object(X.createElement)("div", {
                        className: "editor-format-toolbar__link-modal",
                        onKeyPress: gs
                    }, Object(X.createElement)("div", {
                        className: "editor-format-toolbar__link-modal-line"
                    }, Object(X.createElement)("a", {
                        className: "editor-format-toolbar__link-value",
                        href: o.link.value,
                        target: "_blank"
                    }, o.link.value && (e = decodeURI(o.link.value), (t = e.replace(new RegExp("^https?://(www.)?"), "")).match("^[^/]+/$") ? t.replace("/", "") : t)), Object(X.createElement)(or.IconButton, {
                        icon: "edit",
                        label: Object(P.__)("Edit"),
                        onClick: this.editLink
                    }), Object(X.createElement)(or.IconButton, {
                        className: "editor-format-toolbar__link-settings-toggle",
                        icon: "ellipsis",
                        label: Object(P.__)("Link Settings"),
                        onClick: this.toggleLinkSettingsVisibility,
                        "aria-expanded": f
                    })), v)))))
                }
            }], [{
                key: "getDerivedStateFromProps",
                value: function(e, t) {
                    return t.selectedNodeId !== e.selectedNodeId ? function(e) {
                        return {
                            selectedNodeId: e.selectedNodeId,
                            settingsVisible: !1,
                            opensInNewWindow: !!e.formats.link && !!e.formats.link.target,
                            linkValue: ""
                        }
                    }(e) : null
                }
            }]), t
        }(X.Component),
        ys = Object(or.withSpokenMessages)(Os),
        _s = function(e) {
            return Object(c.pickBy)(e, function(e, t) {
                return n = t, Object(c.startsWith)(n, "aria-") && !Object(c.isNil)(e);
                var n
            })
        },
        ks = n(190);

    function js(e, t) {
        switch (t) {
            case "string":
                return e || "";
            default:
                return function(e) {
                    return Object(X.renderToString)(e)
                }(e)
        }
    }

    function Ss(e, t) {
        if ("all" === t["data-mce-bogus"]) return null;
        for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) r[o - 2] = arguments[o];
        return t.hasOwnProperty("data-mce-bogus") ? r : X.createElement.apply(void 0, [e, Object(c.omitBy)(t, function(e, t) {
            return 0 === t.indexOf("data-mce-")
        })].concat(r))
    }

    function Es(e, t, n) {
        switch (t) {
            case "string":
                return function(e, t) {
                    var n = document.implementation.createHTMLDocument("");
                    return cs()(e).forEach(function(e) {
                        n.body.appendChild(e)
                    }), t ? t.serializer.serialize(n.body) : n.body.innerHTML
                }(e, n);
            default:
                return function(e) {
                    return Object(ks.nodeListToReact)(e || [], Ss)
                }(e)
        }
    }
    var ws = function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).call(this));
                return e.bindEditorNode = e.bindEditorNode.bind(e), e
            }
            return jr()(t, e), Or()(t, [{
                key: "componentDidMount",
                value: function() {
                    this.initialize()
                }
            }, {
                key: "shouldComponentUpdate",
                value: function() {
                    return !1
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    var t = this;
                    this.configureIsPlaceholderVisible(e.isPlaceholderVisible), Object(c.isEqual)(this.props.style, e.style) || (this.editorNode.setAttribute("style", ""), g()(this.editorNode.style, e.style)), Object(c.isEqual)(this.props.className, e.className) || (this.editorNode.className = fr()(e.className, "editor-rich-text__tinymce"));
                    var n = function(e, t) {
                            var n = Object(c.keys)(_s(e)),
                                r = Object(c.keys)(_s(t));
                            return {
                                removedKeys: Object(c.difference)(n, r),
                                updatedKeys: r.filter(function(n) {
                                    return !Object(c.isEqual)(e[n], t[n])
                                })
                            }
                        }(this.props, e),
                        r = n.removedKeys,
                        o = n.updatedKeys;
                    r.forEach(function(e) {
                        return t.editorNode.removeAttribute(e)
                    }), o.forEach(function(n) {
                        return t.editorNode.setAttribute(n, e[n])
                    })
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.editor && (this.editor.container = document.createDocumentFragment(), this.editor.destroy(), delete this.editor)
                }
            }, {
                key: "configureIsPlaceholderVisible",
                value: function(e) {
                    var t = String(!!e);
                    this.editorNode.getAttribute("data-is-placeholder-visible") !== t && this.editorNode.setAttribute("data-is-placeholder-visible", t)
                }
            }, {
                key: "initialize",
                value: function() {
                    var e = this,
                        t = this.props.getSettings({
                            theme: !1,
                            inline: !0,
                            toolbar: !1,
                            browser_spellcheck: !0,
                            entity_encoding: "raw",
                            convert_urls: !1,
                            inline_boundaries_selector: "a[href],code,b,i,strong,em,del,ins,sup,sub",
                            plugins: [],
                            formats: {
                                strikethrough: {
                                    inline: "del"
                                }
                            }
                        });
                    t.plugins.push("paste"), Eo.a.init(p()({}, t, {
                        target: this.editorNode,
                        setup: function(t) {
                            e.editor = t, e.props.onSetup(t)
                        }
                    }))
                }
            }, {
                key: "bindEditorNode",
                value: function(e) {
                    this.editorNode = e, this.removeInternetExplorerInputFix && (this.removeInternetExplorerInputFix(), this.removeInternetExplorerInputFix = null), e && function(e) {
                        return /Trident/.test(window.navigator.userAgent) && !/input/i.test(e.tagName) && !/textarea/i.test(e.tagName)
                    }(e) && (this.removeInternetExplorerInputFix = function(e) {
                        function t(e) {
                            e.stopImmediatePropagation();
                            var t = document.createEvent("Event");
                            t.initEvent("input", !0, !1), t.data = e.data, e.target.dispatchEvent(t)
                        }

                        function n(t) {
                            var n = t.target,
                                r = t.keyCode;
                            if ((To.BACKSPACE === r || To.DELETE === r) && e.contains(n)) {
                                var o = document.createEvent("Event");
                                o.initEvent("input", !0, !1), o.data = null, n.dispatchEvent(o)
                            }
                        }
                        return e.addEventListener("textinput", t), document.addEventListener("keyup", n, !0),
                            function() {
                                e.removeEventListener("textinput", t), document.removeEventListener("keyup", n, !0)
                            }
                    }(e))
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this.props,
                        n = t.tagName,
                        r = void 0 === n ? "div" : n,
                        o = t.style,
                        i = t.defaultValue,
                        s = t.className,
                        c = t.isPlaceholderVisible,
                        a = t.format,
                        l = _s(this.props);
                    return "table" !== r && (l.role = "textbox", l["aria-multiline"] = !0), Object(X.createElement)(r, p()({}, l, (e = {
                        className: fr()(s, "editor-rich-text__tinymce"),
                        contentEditable: !0
                    }, y()(e, "data-is-placeholder-visible", c), y()(e, "ref", this.bindEditorNode), y()(e, "style", o), y()(e, "suppressContentEditableWarning", !0), y()(e, "dangerouslySetInnerHTML", {
                        __html: js(i, a)
                    }), e)))
                }
            }]), t
        }(X.Component),
        Ts = function(e) {
            var t = this.getContent.bind(this),
                n = this.props,
                r = n.setTimeout,
                o = n.onReplace,
                i = Eo.a.util.VK,
                s = e.settings.wptextpattern || {},
                a = Object(c.groupBy)(Object(c.filter)(Object(E.getBlockTransforms)("from"), {
                    type: "pattern"
                }), "trigger"),
                l = a.enter,
                u = a.undefined,
                d = s.inline || [{
                    delimiter: "`",
                    format: "code"
                }],
                p = void 0;

            function f() {
                var t = e.selection.getRng(),
                    n = t.startContainer,
                    o = t.startOffset;
                if (n && 3 === n.nodeType && n.data.length && o) {
                    var i = n.data.slice(0, o),
                        s = n.data.charAt(o - 1),
                        a = d.reduce(function(e, t) {
                            if (e.result) return e;
                            if (s !== t.delimiter.slice(-1)) return e;
                            var n = Object(c.escapeRegExp)(t.delimiter),
                                r = new RegExp("(.*)" + n + ".+" + n + "$"),
                                a = i.match(r);
                            if (!a) return e;
                            var l = a[1].length,
                                u = o - t.delimiter.length,
                                d = i.charAt(l - 1),
                                p = i.charAt(l + t.delimiter.length),
                                f = t.delimiter.charAt(0);
                            if (l && /\S/.test(d) && (/\s/.test(p) || d === f)) return e;
                            var h = new RegExp("^[\\s" + Object(c.escapeRegExp)(f) + "]+$"),
                                b = i.slice(l, u);
                            return h.test(b) ? e : {
                                start: l,
                                pattern: t
                            }
                        }, {}),
                        l = a.start,
                        u = a.pattern;
                    if (u) {
                        var f = u.delimiter,
                            h = u.format,
                            b = e.formatter.get(h);
                        b && b[0].inline && (e.undoManager.add(), e.undoManager.transact(function() {
                            n.insertData(o, "\ufeff");
                            var t = n.splitText(l),
                                i = t.splitText(o - l);
                            t.deleteData(0, f.length), t.deleteData(t.data.length - f.length, f.length), e.formatter.apply(h, {}, t), e.selection.setCursorLocation(i, 1), r(function() {
                                p = "space", e.once("selectionchange", function() {
                                    if (i) {
                                        var e = i.data.indexOf("\ufeff"); - 1 !== e && i.deleteData(e, e + 1)
                                    }
                                })
                            })
                        }))
                    }
                }
            }
            e.on("selectionchange", function() {
                p = null
            }), e.on("keydown", function(n) {
                var s = n.keyCode;
                (p && s === To.ESCAPE || "space" === p && s === To.BACKSPACE) && (e.undoManager.undo(), n.preventDefault(), n.stopImmediatePropagation()), i.metaKeyPressed(n) || (s === To.ENTER ? function(n) {
                    if (!o) return;
                    e.getBody().normalize();
                    var r = t();
                    if (!r.length) return;
                    var i = Object(E.findTransform)(l, function(e) {
                        var t = e.regExp;
                        return t.test(r[0])
                    });
                    if (!i) return;
                    var s = i.transform({
                        content: r
                    });
                    o([s]), n.preventDefault(), n.stopImmediatePropagation()
                }(n) : s === To.SPACE ? r(function() {
                    return function(n) {
                        if (!o) return;
                        e.getBody().normalize();
                        var r = t();
                        if (!r.length) return;
                        var i = r[0],
                            s = Object(E.findTransform)(n, function(e) {
                                return e.regExp.test(i)
                            });
                        if (!s) return;
                        var a = i.match(s.regExp),
                            l = e.selection.getRng(),
                            u = a[0].length,
                            d = i.slice(u);
                        if (l.startOffset !== u) return;
                        var p = s.transform({
                            content: [d].concat(m()(Object(c.drop)(r))),
                            match: a
                        });
                        o([p])
                    }(u)
                }) : s > 47 && !(s >= 91 && s <= 93) && r(f))
            }, !0)
        },
        Cs = (n(618), function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.onHover = e.onHover.bind(e), e.onSelect = e.onSelect.bind(e), e.onSave = e.onSave.bind(e), e.state = {
                    selected: null,
                    hovered: null
                }, e
            }
            return jr()(t, e), Or()(t, [{
                key: "getInsertPosition",
                value: function() {
                    var e = this.props,
                        t = e.containerRef,
                        n = e.editor,
                        r = t.current.getBoundingClientRect(),
                        o = Object(wo.getRectangleFromRange)(n.selection.getRng());
                    return {
                        top: o.top - r.top,
                        left: o.right - r.left,
                        height: o.height
                    }
                }
            }, {
                key: "onSave",
                value: function(e) {
                    var t = this,
                        n = e.save;
                    return function(e) {
                        var r = t.props.editor;
                        e && r.insertContent(Object(X.renderToString)(n(e))), t.setState({
                            selected: null
                        })
                    }
                }
            }, {
                key: "onHover",
                value: function(e) {
                    this.setState({
                        hovered: !!e
                    })
                }
            }, {
                key: "onSelect",
                value: function(e) {
                    this.setState({
                        selected: e
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.state,
                        t = e.hovered,
                        n = e.selected;
                    return Object(X.createElement)(X.Fragment, null, Object(X.createElement)(_i, {
                        title: Object(P.__)("Inline Elements"),
                        items: this.props.items,
                        onSelect: this.onSelect,
                        onHover: this.onHover
                    }), t && Object(X.createElement)("div", {
                        style: p()({
                            position: "absolute"
                        }, this.getInsertPosition()),
                        className: "blocks-inline-insertion-point"
                    }), n && Object(X.createElement)(n.edit, {
                        onSave: this.onSave(n)
                    }))
                }
            }]), t
        }(X.Component)),
        Ps = Object(a.withSelect)(function(e) {
            var t = e("core/editor").getTokenSettings;
            return {
                items: jo()(t())
            }
        })(Cs),
        Bs = window.Node,
        xs = "\ufeff";

    function Is(e) {
        return "" === e.nodeValue || function(e) {
            return ("A" === e.nodeName ? e.innerText : e.textContent) === xs
        }(e)
    }

    function Ds(e) {
        return Object(c.reject)(e, Is)
    }
    var As = function(e) {
        function t() {
            vr()(this, t);
            var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
            return e.onInit = e.onInit.bind(e), e.getSettings = e.getSettings.bind(e), e.onSetup = e.onSetup.bind(e), e.onFocus = e.onFocus.bind(e), e.onChange = e.onChange.bind(e), e.onNewBlock = e.onNewBlock.bind(e), e.onNodeChange = e.onNodeChange.bind(e), e.onHorizontalNavigationKeyDown = e.onHorizontalNavigationKeyDown.bind(e), e.onKeyDown = e.onKeyDown.bind(e), e.onKeyUp = e.onKeyUp.bind(e), e.changeFormats = e.changeFormats.bind(e), e.onPropagateUndo = e.onPropagateUndo.bind(e), e.onPastePreProcess = e.onPastePreProcess.bind(e), e.onPaste = e.onPaste.bind(e), e.onCreateUndoLevel = e.onCreateUndoLevel.bind(e), e.setFocusedElement = e.setFocusedElement.bind(e), e.state = {
                formats: {},
                selectedNodeId: 0
            }, e.containerRef = Object(X.createRef)(), e
        }
        return jr()(t, e), Or()(t, [{
            key: "getSettings",
            value: function(e) {
                return (this.props.getSettings || c.identity)(p()({}, e, {
                    forced_root_block: this.props.multiline || !1,
                    custom_undo_redo_levels: 1
                }))
            }
        }, {
            key: "onSetup",
            value: function(e) {
                this.editor = e, e.on("init", this.onInit), e.on("NewBlock", this.onNewBlock), e.on("nodechange", this.onNodeChange), e.on("keydown", this.onKeyDown), e.on("keyup", this.onKeyUp), e.on("BeforeExecCommand", this.onPropagateUndo), e.on("PastePreProcess", this.onPastePreProcess, !0), e.on("paste", this.onPaste, !0), e.on("focus", this.onFocus), e.on("input", this.onChange), e.on("change", this.onCreateUndoLevel), Ts.apply(this, [e]), this.props.onSetup && this.props.onSetup(e)
            }
        }, {
            key: "setFocusedElement",
            value: function() {
                this.props.setFocusedElement && this.props.setFocusedElement(this.props.instanceId)
            }
        }, {
            key: "onInit",
            value: function() {
                var e = this;
                this.registerCustomFormatters(), this.editor.shortcuts.add(To.rawShortcut.primary("k"), "", function() {
                    return e.changeFormats({
                        link: {
                            isAdding: !0
                        }
                    })
                }), this.editor.shortcuts.add(To.rawShortcut.access("a"), "", function() {
                    return e.changeFormats({
                        link: {
                            isAdding: !0
                        }
                    })
                }), this.editor.shortcuts.add(To.rawShortcut.access("s"), "", function() {
                    return e.changeFormats({
                        link: void 0
                    })
                }), this.editor.shortcuts.add(To.rawShortcut.access("d"), "", function() {
                    return e.changeFormats({
                        strikethrough: !e.state.formats.strikethrough
                    })
                }), this.editor.shortcuts.add(To.rawShortcut.access("x"), "", function() {
                    return e.changeFormats({
                        code: !e.state.formats.code
                    })
                }), this.editor.shortcuts.add(To.rawShortcut.primary("z"), "", "Undo"), this.editor.shortcuts.add(To.rawShortcut.primaryShift("z"), "", "Redo"), this.editor.shortcuts.remove("meta+y", "", "Redo")
            }
        }, {
            key: "adaptFormatter",
            value: function(e) {
                switch (e.type) {
                    case "inline-style":
                        return {
                            inline: "span",
                            styles: p()({}, e.style)
                        }
                }
            }
        }, {
            key: "registerCustomFormatters",
            value: function() {
                var e = this;
                Object(c.forEach)(this.props.formatters, function(t) {
                    e.editor.formatter.register(t.format, e.adaptFormatter(t))
                })
            }
        }, {
            key: "onPropagateUndo",
            value: function(e) {
                var t = this.context,
                    n = t.onUndo,
                    r = t.onRedo,
                    o = e.command;
                "Undo" === o && n && (Object(c.defer)(n), e.preventDefault()), "Redo" === o && r && (Object(c.defer)(r), e.preventDefault())
            }
        }, {
            key: "onPaste",
            value: function(e) {
                var t = this,
                    n = e.clipboardData || e.dataTransfer || this.editor.getDoc().dataTransfer || {
                        getData: function() {
                            return ""
                        }
                    },
                    r = n.items,
                    o = void 0 === r ? [] : r,
                    i = n.files,
                    s = void 0 === i ? [] : i,
                    a = n.types,
                    l = void 0 === a ? [] : a,
                    u = Object(c.find)([].concat(m()(o), m()(s)), function(e) {
                        var t = e.type;
                        return /^image\/(?:jpe?g|png|gif)$/.test(t)
                    }),
                    d = n.getData("text/plain"),
                    p = n.getData("text/html");
                if (u && !p) {
                    var f = u.getAsFile ? u.getAsFile() : u,
                        h = Object(E.rawHandler)({
                            HTML: '<img src="' + Object(as.createBlobURL)(f) + '">',
                            mode: "BLOCKS",
                            tagName: this.props.tagName
                        }),
                        b = this.props.onReplace && this.isEmpty();
                    window.console.log("Received item:\n\n", f), b ? this.props.setTimeout(function() {
                        return t.props.onReplace(h)
                    }) : this.props.onSplit && this.props.setTimeout(function() {
                        return t.splitContent(h)
                    }), e.preventDefault()
                }
                this.pastedPlainText = d, this.isPlainTextPaste = 1 === l.length && "text/plain" === l[0]
            }
        }, {
            key: "onPastePreProcess",
            value: function(e) {
                var t = this.isPlainTextPaste ? "" : e.content;
                if (e.preventDefault(), window.console.log("Received HTML:\n\n", t), window.console.log("Received plain text:\n\n", this.pastedPlainText), !this.editor.selection.isCollapsed()) {
                    var n = /^(?:https?:)?\/\/\S+$/i,
                        r = e.content.replace(/<[^>]+>/g, "").trim(),
                        o = this.editor.selection.getContent().replace(/<[^>]+>/g, "").trim();
                    if (n.test(r) && !n.test(o)) return this.editor.execCommand("mceInsertLink", !1, {
                        href: this.editor.dom.decode(r)
                    }), void window.console.log("Created link:\n\n", r)
                }
                var i = this.props.onReplace && this.isEmpty(),
                    s = "INLINE";
                i ? s = "BLOCKS" : this.props.onSplit && (s = "AUTO");
                var c = Object(E.rawHandler)({
                    HTML: t,
                    plainText: this.pastedPlainText,
                    mode: s,
                    tagName: this.props.tagName,
                    canUserUseUnfilteredHTML: this.context.canUserUseUnfilteredHTML
                });
                if ("string" == typeof c) this.editor.insertContent(c);
                else if (this.props.onSplit) {
                    if (!c.length) return;
                    i ? this.props.onReplace(c) : this.splitContent(c, {
                        paste: !0
                    })
                }
            }
        }, {
            key: "onFocus",
            value: function() {
                var e = this.props.unstableOnFocus;
                e && e()
            }
        }, {
            key: "onChange",
            value: function() {
                this.savedContent = this.getContent(), this.props.onChange(this.savedContent)
            }
        }, {
            key: "onCreateUndoLevel",
            value: function(e) {
                e && null === e.lastLevel || (e && e.originalEvent && "blur" === e.originalEvent.type || this.onChange(), this.context.onCreateUndoLevel())
            }
        }, {
            key: "onHorizontalNavigationKeyDown",
            value: function(e) {
                var t = window.getSelection().focusNode,
                    n = t.nodeType,
                    r = t.nodeValue;
                n === Bs.TEXT_NODE && (1 === r.length && r[0] === xs && (t[e.keyCode === To.LEFT ? "previousSibling" : "nextSibling"] || (e.preventDefault = c.noop)))
            }
        }, {
            key: "onKeyDown",
            value: function(e) {
                var t = this.editor.dom,
                    n = this.editor.getBody(),
                    r = e.keyCode;
                if (r === To.BACKSPACE && Object(wo.isHorizontalEdge)(n, !0) || r === To.DELETE && Object(wo.isHorizontalEdge)(n, !1)) {
                    if (!this.props.onMerge && !this.props.onRemove) return;
                    var o = r === To.DELETE;
                    this.props.onMerge && this.props.onMerge(o), this.props.onRemove && this.isEmpty() && this.props.onRemove(o), e.preventDefault(), e.stopImmediatePropagation()
                }
                if ((r === To.LEFT || r === To.RIGHT) && this.onHorizontalNavigationKeyDown(e), r === To.ENTER)
                    if (this.props.multiline) {
                        if (!this.props.onSplit) return;
                        var i = this.editor.selection.getNode();
                        if (i.parentNode !== n) return;
                        if (!t.isEmpty(i)) return;
                        e.preventDefault();
                        var s = cs()(n.childNodes),
                            c = t.nodeIndex(i),
                            a = s.slice(0, c),
                            l = s.slice(c + 1),
                            u = this.props.format,
                            d = Es(a, u, this.editor),
                            p = Es(l, u, this.editor);
                        this.restoreContentAndSplit(d, p)
                    } else e.preventDefault(), e.shiftKey || !this.props.onSplit ? this.editor.execCommand("InsertLineBreak", !1, e) : this.splitContent()
            }
        }, {
            key: "onKeyUp",
            value: function(e) {
                var t = e.keyCode;
                t === To.BACKSPACE && this.onChange(), this.props.isViewportSmall && t !== To.BACKSPACE && t !== To.ENTER && this.scrollToRect(Object(wo.getRectangleFromRange)(this.editor.selection.getRng()))
            }
        }, {
            key: "scrollToRect",
            value: function(e) {
                var t = e.top,
                    n = Object(wo.getScrollContainer)(this.editor.getBody());
                if (n) {
                    var r = t - 100;
                    Math.abs(r) > 10 && n.scrollTo(n.scrollLeft, n.scrollTop + r)
                }
            }
        }, {
            key: "splitContent",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (this.props.onSplit) {
                    var n = this.editor.getBody(),
                        r = void 0,
                        o = void 0;
                    if (n.childNodes.length) {
                        var i = this.editor.dom,
                            s = i.createRng(),
                            c = i.createRng(),
                            a = this.editor.selection.getRng();
                        s.setStart(n, 0), s.setEnd(a.startContainer, a.startOffset), c.setStart(a.endContainer, a.endOffset), c.setEnd(n, i.nodeIndex(n.lastChild) + 1);
                        var l = s.extractContents(),
                            u = c.extractContents(),
                            d = this.props.format;
                        r = Es(Ds(l.childNodes), d, this.editor), o = Es(Ds(u.childNodes), d, this.editor)
                    } else r = [], o = [];
                    this.isEmpty(o) ? r = this.props.value : this.isEmpty(r) && (o = this.props.value), t.paste && (r = this.isEmpty(r) ? null : r, o = this.isEmpty(o) ? null : o), this.restoreContentAndSplit(r, o, e)
                }
            }
        }, {
            key: "onNewBlock",
            value: function() {
                if ("p" === this.props.multiline && this.props.onSplit) {
                    for (var e = cs()(this.editor.getBody().childNodes), t = this.editor.selection.getStart(); - 1 === e.indexOf(t) && t.parentNode;) t = t.parentNode;
                    var n = e.indexOf(t);
                    if (-1 !== n) {
                        var r = e.slice(0, n),
                            o = Object(c.last)(r);
                        if (!(!o || r.length < 2 || o.textContent)) {
                            var i = r.slice(0, r.length - 1),
                                s = e.slice(n).reduce(function(e, t) {
                                    return e.length || t.textContent ? (e.push(t), e) : e
                                }, []);
                            this.setContent(this.props.value);
                            var a = this.props.format;
                            this.restoreContentAndSplit(Es(i, a, this.editor), Es(s, a, this.editor))
                        }
                    }
                }
            }
        }, {
            key: "onNodeChange",
            value: function(e) {
                var t = e.parents;
                if (document.activeElement === this.editor.getBody()) {
                    var n = this.props.formattingControls,
                        r = this.editor.formatter.matchAll(n).reduce(function(e, n) {
                            return e[n] = p()({
                                isActive: !0
                            }, function(e, t) {
                                switch (e) {
                                    case "link":
                                        var n = Object(c.find)(t, function(e) {
                                            return "a" === e.nodeName.toLowerCase()
                                        });
                                        return n ? {
                                            value: n.getAttribute("href") || "",
                                            target: n.getAttribute("target") || "",
                                            node: n
                                        } : {};
                                    default:
                                        return {}
                                }
                            }(n, t)), e
                        }, {});
                    if (this.setState({
                            formats: r,
                            selectedNodeId: this.state.selectedNodeId + 1
                        }), this.props.isViewportSmall) {
                        var o = void 0,
                            i = Object(c.find)(t, function(e) {
                                return "A" === e.tagName
                            });
                        o = i ? i.getBoundingClientRect() : Object(wo.getRectangleFromRange)(this.editor.selection.getRng()), this.scrollToRect(o)
                    }
                }
            }
        }, {
            key: "setContent",
            value: function(e) {
                var t = this.props.format,
                    n = void 0;
                this.editor.hasFocus() && (n = this.editor.selection.getBookmark(2, !0)), this.savedContent = e, this.editor.setContent(js(e, t)), n && this.editor.selection.moveToBookmark(n)
            }
        }, {
            key: "getContent",
            value: function() {
                switch (this.props.format) {
                    case "string":
                        return this.editor.getContent();
                    default:
                        return Es(this.editor.getBody().childNodes || [], "element", this.editor)
                }
            }
        }, {
            key: "componentDidUpdate",
            value: function(e) {
                !this.editor || this.props.tagName !== e.tagName || this.props.value === e.value || this.props.value === this.savedContent || Object(c.isEqual)(this.props.value, e.value) || Object(c.isEqual)(this.props.value, this.savedContent) || this.setContent(this.props.value)
            }
        }, {
            key: "isEmpty",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props.value;
                return !e || !e.length
            }
        }, {
            key: "isFormatActive",
            value: function(e) {
                return this.state.formats[e] && this.state.formats[e].isActive
            }
        }, {
            key: "removeFormat",
            value: function(e) {
                this.editor.focus(), this.editor.formatter.remove(e), this.onCreateUndoLevel()
            }
        }, {
            key: "applyFormat",
            value: function(e, t, n) {
                this.editor.focus(), this.editor.formatter.apply(e, t, n), this.onCreateUndoLevel()
            }
        }, {
            key: "changeFormats",
            value: function(e) {
                var t = this;
                Object(c.forEach)(e, function(e, n) {
                    if ("link" === n)
                        if (e) {
                            if (e.isAdding) return;
                            var r = e.value,
                                o = e.target;
                            if (!t.isFormatActive("link") && t.editor.selection.isCollapsed()) {
                                var i = t.editor.dom.createHTML("a", {
                                    href: r,
                                    target: o
                                }, t.editor.dom.encode(r));
                                t.editor.insertContent(i)
                            } else t.editor.execCommand("mceInsertLink", !1, {
                                href: r,
                                target: o
                            })
                        } else t.editor.execCommand("Unlink");
                    else {
                        var s = t.isFormatActive(n);
                        s && !e ? t.removeFormat(n) : !s && e && t.applyFormat(n)
                    }
                }), this.setState(function(t) {
                    return {
                        formats: Object(c.merge)({}, t.formats, e)
                    }
                })
            }
        }, {
            key: "restoreContentAndSplit",
            value: function(e, t) {
                var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                this.setContent(this.props.value), (n = this.props).onSplit.apply(n, [e, t].concat(m()(r)))
            }
        }, {
            key: "render",
            value: function() {
                var e = this,
                    t = this.props,
                    n = t.tagName,
                    r = void 0 === n ? "div" : n,
                    o = t.style,
                    i = t.value,
                    s = t.wrapperClassName,
                    c = t.className,
                    a = t.inlineToolbar,
                    l = void 0 !== a && a,
                    u = t.formattingControls,
                    d = t.placeholder,
                    f = t.multiline,
                    h = t.keepPlaceholderOnFocus,
                    b = void 0 !== h && h,
                    m = t.isSelected,
                    v = t.formatters,
                    g = t.autocompleters,
                    O = t.format,
                    y = _s(this.props),
                    _ = ["editor", r].join(),
                    k = d && (!m || b) && this.isEmpty(),
                    j = fr()(s, "editor-rich-text"),
                    S = Object(X.createElement)(ys, {
                        selectedNodeId: this.state.selectedNodeId,
                        formats: this.state.formats,
                        onChange: this.changeFormats,
                        enabledControls: u,
                        customControls: v
                    });
                return Object(X.createElement)("div", {
                    className: j,
                    ref: this.containerRef,
                    onFocus: this.setFocusedElement
                }, m && !l && Object(X.createElement)(to, null, S), m && l && Object(X.createElement)("div", {
                    className: "editor-rich-text__inline-toolbar"
                }, S), m && Object(X.createElement)(Ps, {
                    editor: this.editor,
                    containerRef: this.containerRef
                }), Object(X.createElement)(Br, {
                    onReplace: this.props.onReplace,
                    completers: g
                }, function(t) {
                    var n = t.isExpanded,
                        s = t.listBoxId,
                        a = t.activeId;
                    return Object(X.createElement)(X.Fragment, null, Object(X.createElement)(ws, p()({
                        tagName: r,
                        getSettings: e.getSettings,
                        onSetup: e.onSetup,
                        style: o,
                        defaultValue: i,
                        format: O,
                        isPlaceholderVisible: k,
                        "aria-label": d,
                        "aria-autocomplete": "list",
                        "aria-expanded": n,
                        "aria-owns": s,
                        "aria-activedescendant": a
                    }, y, {
                        className: c,
                        key: _
                    })), k && Object(X.createElement)(r, {
                        className: fr()("editor-rich-text__tinymce", c),
                        style: o
                    }, f ? Object(X.createElement)(f, null, d) : d), m && Object(X.createElement)(or.Slot, {
                        name: "RichText.Siblings"
                    }))
                }))
            }
        }]), t
    }(X.Component);
    As.contextTypes = {
        onUndo: c.noop,
        onRedo: c.noop,
        canUserUseUnfilteredHTML: c.noop,
        onCreateUndoLevel: c.noop
    }, As.defaultProps = {
        formattingControls: ["bold", "italic", "strikethrough", "link", "code"],
        formatters: [],
        format: "element"
    };
    var Ns = Object(X.compose)([or.withInstanceId, Tr(function(e, t) {
        return !1 === t.isSelected ? {} : !0 === t.isSelected ? {
            isSelected: e.isSelected
        } : {
            isSelected: e.isSelected && e.focusedElement === t.instanceId,
            setFocusedElement: e.setFocusedElement
        }
    }), Object(a.withSelect)(function(e) {
        var t = (e("core/viewport") || {}).isViewportMatch;
        return {
            isViewportSmall: (void 0 === t ? c.identity : t)("< small")
        }
    }), or.withSafeTimeout])(As);
    Ns.Content = function(e) {
        var t = e.value,
            n = e.format,
            r = void 0 === n ? "element" : n,
            o = e.tagName,
            i = h()(e, ["value", "format", "tagName"]),
            s = void 0;
        switch (r) {
            case "string":
                s = Object(X.createElement)(X.RawHTML, null, t);
                break;
            default:
                s = t
        }
        return o ? Object(X.createElement)(o, i, s) : s
    };
    var Rs = Ns,
        Ls = function(e) {
            function t() {
                return vr()(this, t), _r()(this, (t.__proto__ || br()(t)).apply(this, arguments))
            }
            return jr()(t, e), Or()(t, [{
                key: "getChildContext",
                value: function() {
                    return Object(c.pick)(this.props, Y()(this.constructor.childContextTypes))
                }
            }, {
                key: "render",
                value: function() {
                    return this.props.children
                }
            }]), t
        }(X.Component);
    Ls.childContextTypes = {
        onUndo: c.noop,
        onRedo: c.noop,
        onCreateUndoLevel: c.noop
    };
    var Us = Ls;
    n(617);

    function Ms(e) {
        var t = e.allowedType,
            n = e.filesList,
            r = e.maxUploadFileSize,
            o = e.onError,
            i = void 0 === o ? c.noop : o,
            s = e.onFileChange,
            l = Object(a.select)("core/editor").getCurrentPostId();
        Object(Ui.mediaUpload)({
            allowedType: t,
            filesList: n,
            onFileChange: s,
            additionalData: {
                post: l
            },
            maxUploadFileSize: r,
            onError: function(e) {
                var t = e.message;
                return i(t)
            }
        })
    }
    var Fs = function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.state = {
                    src: ""
                }, e.onChangeSrc = e.onChangeSrc.bind(e), e.onSubmitSrc = e.onSubmitSrc.bind(e), e.onUpload = e.onUpload.bind(e), e.onFilesUpload = e.onFilesUpload.bind(e), e
            }
            return jr()(t, e), Or()(t, [{
                key: "componentDidMount",
                value: function() {
                    this.setState({
                        src: Object(c.get)(this.props.value, ["src"], "")
                    })
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    Object(c.get)(e.value, ["src"], "") !== Object(c.get)(this.props.value, ["src"], "") && this.setState({
                        src: Object(c.get)(this.props.value, ["src"], "")
                    })
                }
            }, {
                key: "onChangeSrc",
                value: function(e) {
                    this.setState({
                        src: e.target.value
                    })
                }
            }, {
                key: "onSubmitSrc",
                value: function(e) {
                    e.preventDefault(), this.state.src && this.props.onSelectUrl(this.state.src)
                }
            }, {
                key: "onUpload",
                value: function(e) {
                    this.onFilesUpload(e.target.files)
                }
            }, {
                key: "onFilesUpload",
                value: function(e) {
                    var t = this.props,
                        n = t.onSelect,
                        r = t.type,
                        o = t.multiple,
                        i = t.onError;
                    Ms({
                        allowedType: r,
                        filesList: e,
                        onFileChange: o ? n : function(e) {
                            var t = u()(e, 1)[0];
                            return n(t)
                        },
                        onError: i
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.type,
                        n = e.accept,
                        r = e.icon,
                        o = e.className,
                        i = e.labels,
                        s = e.onSelect,
                        a = e.value,
                        l = void 0 === a ? {} : a,
                        u = e.onSelectUrl,
                        d = e.onHTMLDrop,
                        p = void 0 === d ? c.noop : d,
                        f = e.multiple,
                        h = void 0 !== f && f,
                        b = e.notices;
                    return Object(X.createElement)(or.Placeholder, {
                        icon: r,
                        label: i.title,
                        instructions: Object(P.sprintf)(Object(P.__)("Drag %s, upload a new one or select a file from your library."), i.name),
                        className: fr()("editor-media-placeholder", o),
                        notices: b
                    }, Object(X.createElement)(or.DropZone, {
                        onFilesDrop: this.onFilesUpload,
                        onHTMLDrop: p
                    }), u && Object(X.createElement)("form", {
                        onSubmit: this.onSubmitSrc
                    }, Object(X.createElement)("input", {
                        type: "url",
                        className: "components-placeholder__input",
                        placeholder: Object(P.__)("Enter URL here…"),
                        onChange: this.onChangeSrc,
                        value: this.state.src
                    }), Object(X.createElement)(or.Button, {
                        isLarge: !0,
                        type: "submit"
                    }, Object(P.__)("Use URL"))), Object(X.createElement)(or.FormFileUpload, {
                        isLarge: !0,
                        className: "editor-media-placeholder__upload-button",
                        onChange: this.onUpload,
                        accept: n,
                        multiple: h
                    }, Object(P.__)("Upload")), Object(X.createElement)(ir, {
                        gallery: h,
                        multiple: h,
                        onSelect: s,
                        type: t,
                        value: l.id,
                        render: function(e) {
                            var t = e.open;
                            return Object(X.createElement)(or.Button, {
                                isLarge: !0,
                                onClick: t
                            }, Object(P.__)("Media Library"))
                        }
                    }))
                }
            }]), t
        }(X.Component),
        Hs = (n(616), function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.toggle = e.toggle.bind(e), e.submitLink = e.submitLink.bind(e), e.state = {
                    expanded: !1
                }, e
            }
            return jr()(t, e), Or()(t, [{
                key: "toggle",
                value: function() {
                    this.setState({
                        expanded: !this.state.expanded
                    })
                }
            }, {
                key: "submitLink",
                value: function(e) {
                    e.preventDefault(), this.toggle()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.url,
                        n = e.onChange,
                        r = this.state.expanded,
                        o = t ? Object(P.__)("Edit Link") : Object(P.__)("Insert Link");
                    return Object(X.createElement)("div", {
                        className: "editor-url-input__button"
                    }, Object(X.createElement)(or.IconButton, {
                        icon: "admin-links",
                        label: o,
                        onClick: this.toggle,
                        className: fr()("components-toolbar__control", {
                            "is-active": t
                        })
                    }), r && Object(X.createElement)("form", {
                        className: "editor-url-input__button-modal",
                        onSubmit: this.submitLink
                    }, Object(X.createElement)("div", {
                        className: "editor-url-input__button-modal-line"
                    }, Object(X.createElement)(or.IconButton, {
                        className: "editor-url-input__back",
                        icon: "arrow-left-alt",
                        label: Object(P.__)("Close"),
                        onClick: this.toggle
                    }), Object(X.createElement)(hs, {
                        value: t || "",
                        onChange: n,
                        "data-test": "UrlInput"
                    }), Object(X.createElement)(or.IconButton, {
                        icon: "editor-break",
                        label: Object(P.__)("Submit"),
                        type: "submit"
                    }))))
                }
            }]), t
        }(X.Component)),
        Vs = function(e) {
            function t() {
                return vr()(this, t), _r()(this, (t.__proto__ || br()(t)).apply(this, arguments))
            }
            return jr()(t, e), Or()(t, [{
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this.props,
                        n = t.isDirty,
                        r = t.isAutosaveable;
                    e.isDirty === n && e.isAutosaveable === r || this.toggleTimer(n && r)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.toggleTimer(!1)
                }
            }, {
                key: "toggleTimer",
                value: function(e) {
                    var t = this;
                    clearTimeout(this.pendingSave);
                    var n = this.props.autosaveInterval;
                    e && (this.pendingSave = setTimeout(function() {
                        return t.props.autosave()
                    }, 1e3 * n))
                }
            }, {
                key: "render",
                value: function() {
                    return null
                }
            }]), t
        }(X.Component),
        Ks = Object(X.compose)([Object(a.withSelect)(function(e) {
            var t = e("core/editor"),
                n = t.isEditedPostDirty,
                r = t.isEditedPostAutosaveable,
                o = (0, t.getEditorSettings)().autosaveInterval;
            return {
                isDirty: n(),
                isAutosaveable: r(),
                autosaveInterval: o
            }
        }), Object(a.withDispatch)(function(e) {
            return {
                autosave: e("core/editor").autosave
            }
        })])(Vs),
        zs = (n(615), function(e) {
            var t = e.children,
                n = e.isValid,
                r = e.level,
                o = e.onClick,
                i = e.path,
                s = void 0 === i ? [] : i;
            return Object(X.createElement)("li", {
                className: fr()("document-outline__item", "is-" + r.toLowerCase(), {
                    "is-invalid": !n
                })
            }, Object(X.createElement)("button", {
                className: "document-outline__button",
                onClick: o
            }, Object(X.createElement)("span", {
                className: "document-outline__emdash",
                "aria-hidden": "true"
            }), s.map(function(e, t) {
                var n = e.uid;
                return Object(X.createElement)("strong", {
                    key: t,
                    className: "document-outline__level"
                }, Object(X.createElement)(ni, {
                    uid: n
                }))
            }), Object(X.createElement)("strong", {
                className: "document-outline__level"
            }, r), Object(X.createElement)("span", {
                className: "document-outline__item-content"
            }, t), Object(X.createElement)("span", {
                className: "screen-reader-text"
            }, Object(P.__)("(Click to focus this heading)"))))
        }),
        Ws = Object(X.createElement)("em", null, Object(P.__)("(Empty heading)")),
        qs = [Object(X.createElement)("br", {
            key: "incorrect-break"
        }), Object(X.createElement)("em", {
            key: "incorrect-message"
        }, Object(P.__)("(Incorrect heading level)"))],
        Gs = [Object(X.createElement)("br", {
            key: "incorrect-break-h1"
        }), Object(X.createElement)("em", {
            key: "incorrect-message-h1"
        }, Object(P.__)("(Your theme may already use a H1 for the post title)"))],
        Ys = [Object(X.createElement)("br", {
            key: "incorrect-break-multiple-h1"
        }), Object(X.createElement)("em", {
            key: "incorrect-message-multiple-h1"
        }, Object(P.__)("(Multiple H1 headings are not recommended)"))],
        Xs = function(e) {
            return !e.attributes.content || 0 === e.attributes.content.length
        },
        $s = Object(X.compose)(Object(a.withSelect)(function(e) {
            var t = e("core/editor"),
                n = t.getEditedPostAttribute,
                r = t.getBlocks,
                o = (0, e("core").getPostType)(n("type"));
            return {
                title: n("title"),
                blocks: r(),
                isTitleSupported: Object(c.get)(o, ["supports", "title"], !1)
            }
        }), Object(a.withDispatch)(function(e) {
            return {
                onSelect: e("core/editor").selectBlock
            }
        }))(function(e) {
            var t = e.blocks,
                n = void 0 === t ? [] : t,
                r = e.title,
                o = e.onSelect,
                i = e.isTitleSupported,
                s = function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    return Object(c.flatMap)(t, function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return "core/heading" === t.name ? p()({}, t, {
                            path: n,
                            level: t.attributes.level,
                            isEmpty: Xs(t)
                        }) : e(t.innerBlocks, [].concat(m()(n), [t]))
                    })
                }(n);
            if (s.length < 1) return null;
            var a = 1,
                l = i && r,
                u = Object(c.countBy)(s, "level")[1] > 1;
            return Object(X.createElement)("div", {
                className: "document-outline"
            }, Object(X.createElement)("ul", null, l && Object(X.createElement)(zs, {
                level: "Title",
                isValid: !0,
                onClick: function() {
                    var e = document.querySelector(".editor-post-title__input");
                    e && e.focus()
                }
            }, r), s.map(function(e, t) {
                var n = e.level > a + 1,
                    r = !(e.isEmpty || n || !e.level || 1 === e.level && (u || l));
                return a = e.level, Object(X.createElement)(zs, {
                    key: t,
                    level: "H" + e.level,
                    isValid: r,
                    onClick: function() {
                        return t = e.uid, o(t);
                        var t
                    },
                    path: e.path
                }, e.isEmpty ? Ws : e.attributes.content, n && qs, 1 === e.level && u && Ys, l && 1 === e.level && !u && Gs)
            })))
        });
    var Js = Object(a.withSelect)(function(e) {
            return {
                blocks: e("core/editor").getBlocks()
            }
        })(function(e) {
            var t = e.blocks,
                n = e.children;
            return Object(c.filter)(t, function(e) {
                return "core/heading" === e.name
            }).length < 1 ? null : n
        }),
        Qs = function(e) {
            function t(e) {
                vr()(this, t);
                var n = _r()(this, (t.__proto__ || br()(t)).call(this, e));
                return n.originalDocumentTitle = document.title, n
            }
            return jr()(t, e), Or()(t, [{
                key: "componentDidMount",
                value: function() {
                    this.setDocumentTitle(this.props.title)
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    e.title !== this.props.title && this.setDocumentTitle(this.props.title)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    document.title = this.originalDocumentTitle
                }
            }, {
                key: "setDocumentTitle",
                value: function(e) {
                    document.title = e + " | " + this.originalDocumentTitle
                }
            }, {
                key: "render",
                value: function() {
                    return null
                }
            }]), t
        }(n(15).Component),
        Zs = Object(a.withSelect)(function(e) {
            return {
                title: e("core/editor").getDocumentTitle()
            }
        })(Qs),
        ec = function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.selectAll = e.selectAll.bind(e), e.undoOrRedo = e.undoOrRedo.bind(e), e.save = e.save.bind(e), e.deleteSelectedBlocks = e.deleteSelectedBlocks.bind(e), e.clearMultiSelection = e.clearMultiSelection.bind(e), e
            }
            return jr()(t, e), Or()(t, [{
                key: "selectAll",
                value: function(e) {
                    var t = this.props,
                        n = t.uids,
                        r = t.onMultiSelect;
                    e.preventDefault(), r(Object(c.first)(n), Object(c.last)(n))
                }
            }, {
                key: "undoOrRedo",
                value: function(e) {
                    var t = this.props,
                        n = t.onRedo,
                        r = t.onUndo;
                    e.shiftKey ? n() : r(), e.preventDefault()
                }
            }, {
                key: "save",
                value: function(e) {
                    e.preventDefault(), this.props.onSave()
                }
            }, {
                key: "deleteSelectedBlocks",
                value: function(e) {
                    var t = this.props,
                        n = t.multiSelectedBlockUids,
                        r = t.onRemove,
                        o = t.isLocked;
                    n.length && (e.preventDefault(), o || r(n))
                }
            }, {
                key: "clearMultiSelection",
                value: function() {
                    var e = this.props,
                        t = e.hasMultiSelection,
                        n = e.clearSelectedBlock;
                    t && (n(), window.getSelection().removeAllRanges())
                }
            }, {
                key: "render",
                value: function() {
                    var e;
                    return Object(X.createElement)(X.Fragment, null, Object(X.createElement)(or.KeyboardShortcuts, {
                        shortcuts: (e = {}, y()(e, To.rawShortcut.primary("a"), this.selectAll), y()(e, To.rawShortcut.primary("z"), this.undoOrRedo), y()(e, To.rawShortcut.primaryShift("z"), this.undoOrRedo), y()(e, "backspace", this.deleteSelectedBlocks), y()(e, "del", this.deleteSelectedBlocks), y()(e, "escape", this.clearMultiSelection), e)
                    }), Object(X.createElement)(or.KeyboardShortcuts, {
                        bindGlobal: !0,
                        shortcuts: y()({}, To.rawShortcut.primary("s"), this.save)
                    }))
                }
            }]), t
        }(X.Component),
        tc = Object(X.compose)([Object(a.withSelect)(function(e) {
            var t = e("core/editor"),
                n = t.getBlockOrder,
                r = t.getMultiSelectedBlockUids,
                o = t.hasMultiSelection,
                i = t.isEditedPostDirty,
                s = t.getBlockRootUID,
                a = t.getTemplateLock,
                l = r();
            return {
                uids: n(),
                multiSelectedBlockUids: l,
                hasMultiSelection: o(),
                isLocked: Object(c.some)(l, function(e) {
                    return !!a(s(e))
                }),
                isDirty: i()
            }
        }), Object(a.withDispatch)(function(e, t) {
            var n = e("core/editor"),
                r = n.clearSelectedBlock,
                o = n.multiSelect,
                i = n.redo,
                s = n.undo,
                c = n.removeBlocks,
                a = n.savePost;
            return {
                onSave: function() {
                    t.isDirty && a()
                },
                clearSelectedBlock: r,
                onMultiSelect: o,
                onRedo: i,
                onUndo: s,
                onRemove: c
            }
        })])(ec);
    var nc = Object(X.compose)([Object(a.withSelect)(function(e) {
        return {
            hasRedo: e("core/editor").hasEditorRedo()
        }
    }), Object(a.withDispatch)(function(e) {
        return {
            redo: function() {
                return e("core/editor").redo()
            }
        }
    })])(function(e) {
        var t = e.hasRedo,
            n = e.redo;
        return Object(X.createElement)(or.IconButton, {
            icon: "redo",
            label: Object(P.__)("Redo"),
            shortcut: To.displayShortcut.primaryShift("z"),
            disabled: !t,
            onClick: n,
            className: "editor-history__redo"
        })
    });
    var rc = Object(X.compose)([Object(a.withSelect)(function(e) {
        return {
            hasUndo: e("core/editor").hasEditorUndo()
        }
    }), Object(a.withDispatch)(function(e) {
        return {
            undo: function() {
                return e("core/editor").undo()
            }
        }
    })])(function(e) {
        var t = e.hasUndo,
            n = e.undo;
        return Object(X.createElement)(or.IconButton, {
            icon: "undo",
            label: Object(P.__)("Undo"),
            shortcut: To.displayShortcut.primary("z"),
            disabled: !t,
            onClick: n,
            className: "editor-history__undo"
        })
    });
    n(614);
    var oc = Object(X.compose)([Object(a.withSelect)(function(e) {
        return {
            isValid: e("core/editor").isValidTemplate()
        }
    }), Object(a.withDispatch)(function(e) {
        var t = e("core/editor"),
            n = t.setTemplateValidity;
        return {
            resetTemplateValidity: function() {
                return n(!0)
            },
            synchronizeTemplate: t.synchronizeTemplate
        }
    })])(function(e) {
        var t = e.isValid,
            n = h()(e, ["isValid"]);
        return t ? null : Object(X.createElement)(or.Notice, {
            className: "editor-template-validation-notice",
            isDismissible: !1,
            status: "warning"
        }, Object(X.createElement)("p", null, Object(P.__)("The content of your post doesn't match the template assigned to your post type.")), Object(X.createElement)("div", null, Object(X.createElement)(or.Button, {
            isDefault: !0,
            onClick: n.resetTemplateValidity
        }, Object(P.__)("Keep it as is")), Object(X.createElement)(or.Button, {
            onClick: function() {
                window.confirm(Object(P.__)("Resetting the template may result in loss of content, do you want to continue?")) && n.synchronizeTemplate()
            },
            isPrimary: !0
        }, Object(P.__)("Reset the template"))))
    });
    var ic = Object(X.compose)([Object(a.withSelect)(function(e) {
        return {
            notices: e("core/editor").getNotices()
        }
    }), Object(a.withDispatch)(function(e) {
        return {
            onRemove: e("core/editor").removeNotice
        }
    })])(function(e) {
        return Object(X.createElement)(or.NoticeList, e, Object(X.createElement)(oc, null))
    });
    var sc = Object(a.withSelect)(function(e) {
        var t = e("core/editor"),
            n = t.getEditedPostAttribute,
            r = t.getEditorSettings,
            o = e("core").getPostType,
            i = r().availableTemplates;
        return {
            postType: o(n("type")),
            availableTemplates: i
        }
    })(function(e) {
        var t = e.availableTemplates,
            n = e.postType,
            r = e.children;
        return !Object(c.get)(n, ["supports", "page-attributes"], !1) && Object(c.isEmpty)(t) ? null : r
    });
    var cc = Object(a.withSelect)(function(e) {
        var t = e("core/editor").getEditedPostAttribute;
        return {
            postType: (0, e("core").getPostType)(t("type"))
        }
    })(function(e) {
        var t = e.postType,
            n = e.children,
            r = e.supportKeys;
        return Object(c.some)(Object(c.castArray)(r), function(e) {
            return Object(c.get)(t, ["supports", e], !1)
        }) ? n : null
    });

    function ac(e) {
        var t = e.onUpdateOrder,
            n = e.instanceId,
            r = e.order,
            o = "editor-page-attributes__order-" + n;
        return Object(X.createElement)(X.Fragment, null, Object(X.createElement)("label", {
            htmlFor: o
        }, Object(P.__)("Order")), Object(X.createElement)("input", {
            type: "text",
            value: r || 0,
            onChange: function(e) {
                var n = Number(e.target.value);
                n >= 0 && t(n)
            },
            id: o,
            size: 6
        }))
    }
    var lc = Object(X.compose)([Object(a.withSelect)(function(e) {
        return {
            order: e("core/editor").getEditedPostAttribute("menu_order")
        }
    }), Object(a.withDispatch)(function(e) {
        return {
            onUpdateOrder: function(t) {
                e("core/editor").editPost({
                    menu_order: t
                })
            }
        }
    }), or.withInstanceId])(function(e) {
        return Object(X.createElement)(cc, {
            supportKeys: "page-attributes"
        }, Object(X.createElement)(ac, e))
    });
    var uc = Object(a.withSelect)(function(e) {
            var t = e("core").getPostType,
                n = e("core/editor"),
                r = n.getCurrentPostId,
                o = n.getEditedPostAttribute,
                i = o("type");
            return {
                postId: r(),
                parent: o("parent"),
                postType: t(i),
                postTypeSlug: i
            }
        }),
        dc = Object(a.withDispatch)(function(e) {
            var t = e("core/editor").editPost;
            return {
                onUpdateParent: function(e) {
                    t({
                        parent: e || 0
                    })
                }
            }
        }),
        pc = Object(or.withAPIData)(function(e, t) {
            var n = t.type,
                r = e.postTypeSlug,
                o = e.postId,
                i = Object(c.get)(e, ["postType", "hierarchical"], !1),
                s = Object(ds.stringify)({
                    context: "edit",
                    per_page: -1,
                    exclude: o,
                    parent_exclude: o,
                    _fields: ["id", "parent", "title"],
                    orderby: "menu_order",
                    order: "asc"
                });
            return i ? {
                items: "/wp/v2/" + n(r) + "?" + s
            } : {}
        }),
        fc = Object(X.compose)([uc, dc, pc])(function(e) {
            var t = e.parent,
                n = e.postType,
                r = e.items,
                o = e.onUpdateParent,
                i = Object(c.get)(n, ["hierarchical"], !1),
                s = Object(c.get)(n, ["labels", "parent_item_colon"]),
                a = Object(c.get)(r, ["data"], []);
            if (!i || !s || !a.length) return null;
            var l = Object(Ui.buildTermsTree)(a.map(function(e) {
                return {
                    id: e.id,
                    parent: e.parent,
                    name: e.title.raw ? e.title.raw : "#" + e.id + " (" + Object(P.__)("no title") + ")"
                }
            }));
            return Object(X.createElement)(or.TreeSelect, {
                label: s,
                noOptionLabel: "(" + Object(P.__)("no parent") + ")",
                tree: l,
                selectedId: t,
                onChange: o
            })
        });
    n(613);
    var hc = Object(X.compose)(Object(a.withSelect)(function(e) {
        var t = e("core/editor"),
            n = t.getEditedPostAttribute,
            r = (0, t.getEditorSettings)().availableTemplates;
        return {
            selectedTemplate: n("template"),
            availableTemplates: r
        }
    }), Object(a.withDispatch)(function(e) {
        return {
            onUpdate: function(t) {
                e("core/editor").editPost({
                    template: t || ""
                })
            }
        }
    }), or.withInstanceId)(function(e) {
        var t = e.availableTemplates,
            n = e.selectedTemplate,
            r = e.instanceId,
            o = e.onUpdate;
        if (Object(c.isEmpty)(t)) return null;
        var i = "template-selector-" + r,
            s = function(e) {
                return o(e.target.value)
            };
        return Object(X.createElement)("div", {
            className: "editor-page-attributes__template"
        }, Object(X.createElement)("label", {
            htmlFor: i
        }, Object(P.__)("Template:")), Object(X.createElement)("select", {
            id: i,
            value: n,
            onBlur: s,
            onChange: s
        }, Object(c.map)(t, function(e, t) {
            return Object(X.createElement)("option", {
                key: t,
                value: t
            }, e)
        })))
    });
    var bc = Object(X.compose)([Object(a.withSelect)(function(e) {
            var t = e("core/editor").getCurrentPost();
            return {
                hasAssignAuthorAction: Object(c.get)(t, ["_links", "wp:action-assign-author"], !1),
                postType: e("core/editor").getCurrentPostType(),
                authors: e("core").getAuthors()
            }
        }), or.withInstanceId])(function(e) {
            var t = e.hasAssignAuthorAction,
                n = e.authors,
                r = e.children;
            return !t || n.length < 2 ? null : Object(X.createElement)(cc, {
                supportKeys: "author"
            }, r)
        }),
        mc = function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.setAuthorId = e.setAuthorId.bind(e), e
            }
            return jr()(t, e), Or()(t, [{
                key: "setAuthorId",
                value: function(e) {
                    var t = this.props.onUpdateAuthor,
                        n = e.target.value;
                    t(Number(n))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.postAuthor,
                        n = e.instanceId,
                        r = e.authors,
                        o = "post-author-selector-" + n;
                    return Object(X.createElement)(bc, null, Object(X.createElement)("label", {
                        htmlFor: o
                    }, Object(P.__)("Author")), Object(X.createElement)("select", {
                        id: o,
                        value: t,
                        onChange: this.setAuthorId,
                        className: "editor-post-author__select"
                    }, r.map(function(e) {
                        return Object(X.createElement)("option", {
                            key: e.id,
                            value: e.id
                        }, e.name)
                    })))
                }
            }]), t
        }(X.Component),
        vc = Object(X.compose)([Object(a.withSelect)(function(e) {
            return {
                postAuthor: e("core/editor").getEditedPostAttribute("author"),
                authors: e("core").getAuthors()
            }
        }), Object(a.withDispatch)(function(e) {
            return {
                onUpdateAuthor: function(t) {
                    e("core/editor").editPost({
                        author: t
                    })
                }
            }
        }), or.withInstanceId])(mc);
    var gc = Object(X.compose)([Object(a.withSelect)(function(e) {
        return {
            commentStatus: e("core/editor").getEditedPostAttribute("comment_status")
        }
    }), Object(a.withDispatch)(function(e) {
        return {
            editPost: e("core/editor").editPost
        }
    }), or.withInstanceId])(function(e) {
        var t = e.commentStatus,
            n = void 0 === t ? "open" : t,
            r = e.instanceId,
            o = h()(e, ["commentStatus", "instanceId"]),
            i = "allow-comments-toggle-" + r;
        return [Object(X.createElement)("label", {
            key: "label",
            htmlFor: i
        }, Object(P.__)("Allow Comments")), Object(X.createElement)(or.FormToggle, {
            key: "toggle",
            checked: "open" === n,
            onChange: function() {
                return o.editPost({
                    comment_status: "open" === n ? "closed" : "open"
                })
            },
            id: i
        })]
    });
    n(612);
    var Oc = Object(X.compose)([Object(a.withSelect)(function(e) {
        return {
            excerpt: e("core/editor").getEditedPostAttribute("excerpt")
        }
    }), Object(a.withDispatch)(function(e) {
        return {
            onUpdateExcerpt: function(t) {
                e("core/editor").editPost({
                    excerpt: t
                })
            }
        }
    })])(function(e) {
        var t = e.excerpt,
            n = e.onUpdateExcerpt;
        return Object(X.createElement)("div", {
            className: "editor-post-excerpt"
        }, Object(X.createElement)(or.TextareaControl, {
            label: Object(P.__)("Write an excerpt (optional)"),
            className: "editor-post-excerpt__textarea",
            onChange: function(e) {
                return n(e)
            },
            value: t
        }), Object(X.createElement)(or.ExternalLink, {
            href: "https://codex.wordpress.org/Excerpt"
        }, Object(P.__)("Learn more about manual excerpts")))
    });
    var yc = function(e) {
        return Object(X.createElement)(cc, p()({}, e, {
            supportKeys: "excerpt"
        }))
    };
    n(611);
    var _c = Object(a.withSelect)(function(e) {
        var t = e("core").getThemeSupports;
        return {
            postType: (0, e("core/editor").getEditedPostAttribute)("type"),
            themeSupports: t()
        }
    })(function(e) {
        var t = e.themeSupports,
            n = e.children,
            r = e.postType,
            o = e.supportKeys;
        return Object(c.some)(Object(c.castArray)(o), function(e) {
            var n = Object(c.get)(t, [e], !1);
            return "post-thumbnails" === e && Object(c.isArray)(n) ? Object(c.includes)(n, r) : n
        }) ? n : null
    });
    var kc = function(e) {
            return Object(X.createElement)(_c, {
                supportKeys: "post-thumbnails"
            }, Object(X.createElement)(cc, p()({}, e, {
                supportKeys: "thumbnail"
            })))
        },
        jc = Object(P.__)("Set featured image"),
        Sc = Object(P.__)("Remove image");
    var Ec = Object(a.withSelect)(function(e) {
            var t = e("core"),
                n = t.getMedia,
                r = t.getPostType,
                o = e("core/editor").getEditedPostAttribute,
                i = o("featured_media");
            return {
                media: i ? n(i) : null,
                postType: r(o("type")),
                featuredImageId: i
            }
        }),
        wc = Object(a.withDispatch)(function(e) {
            var t = e("core/editor").editPost;
            return {
                onUpdateImage: function(e) {
                    t({
                        featured_media: e.id
                    })
                },
                onRemoveImage: function() {
                    t({
                        featured_media: 0
                    })
                }
            }
        }),
        Tc = Object(X.compose)(Ec, wc)(function(e) {
            var t = e.featuredImageId,
                n = e.onUpdateImage,
                r = e.onRemoveImage,
                o = e.media,
                i = e.postType,
                s = Object(c.get)(i, ["labels"], {});
            return Object(X.createElement)(kc, null, Object(X.createElement)("div", {
                className: "editor-post-featured-image"
            }, !!t && Object(X.createElement)(ir, {
                title: Object(P.__)("Set featured image"),
                onSelect: n,
                type: "image",
                modalClass: "editor-post-featured-image__media-modal",
                render: function(e) {
                    var t = e.open;
                    return Object(X.createElement)(or.Button, {
                        className: "editor-post-featured-image__preview",
                        onClick: t
                    }, o && Object(X.createElement)(or.ResponsiveWrapper, {
                        naturalWidth: o.media_details.width,
                        naturalHeight: o.media_details.height
                    }, Object(X.createElement)("img", {
                        src: o.source_url,
                        alt: Object(P.__)("Featured image")
                    })), !o && Object(X.createElement)(or.Spinner, null))
                }
            }), !!t && o && !o.isLoading && Object(X.createElement)(ir, {
                title: s.set_featured_image || jc,
                onSelect: n,
                type: "image",
                modalClass: "editor-post-featured-image__media-modal",
                render: function(e) {
                    var t = e.open;
                    return Object(X.createElement)(or.Button, {
                        onClick: t,
                        isDefault: !0,
                        isLarge: !0
                    }, Object(P.__)("Replace image"))
                }
            }), !t && Object(X.createElement)("div", null, Object(X.createElement)(ir, {
                title: s.set_featured_image || jc,
                onSelect: n,
                type: "image",
                modalClass: "editor-post-featured-image__media-modal",
                render: function(e) {
                    var t = e.open;
                    return Object(X.createElement)(or.Button, {
                        className: "editor-post-featured-image__toggle",
                        onClick: t
                    }, Object(P.__)("Set featured image"))
                }
            })), !!t && Object(X.createElement)(or.Button, {
                onClick: r,
                isLink: !0,
                isDestructive: !0
            }, s.remove_featured_image || Sc)))
        });
    n(610);
    var Cc = Object(a.withSelect)(function(e) {
            return {
                disablePostFormats: e("core/editor").getEditorSettings().disablePostFormats
            }
        })(function(e) {
            var t = e.disablePostFormats,
                n = h()(e, ["disablePostFormats"]);
            return !t && Object(X.createElement)(cc, p()({}, n, {
                supportKeys: "post-formats"
            }))
        }),
        Pc = [{
            id: "aside",
            caption: Object(P.__)("Aside")
        }, {
            id: "gallery",
            caption: Object(P.__)("Gallery")
        }, {
            id: "link",
            caption: Object(P.__)("Link")
        }, {
            id: "image",
            caption: Object(P.__)("Image")
        }, {
            id: "quote",
            caption: Object(P.__)("Quote")
        }, {
            id: "standard",
            caption: Object(P.__)("Standard")
        }, {
            id: "status",
            caption: Object(P.__)("Status")
        }, {
            id: "video",
            caption: Object(P.__)("Video")
        }, {
            id: "audio",
            caption: Object(P.__)("Audio")
        }, {
            id: "chat",
            caption: Object(P.__)("Chat")
        }];
    var Bc = Object(X.compose)([Object(a.withSelect)(function(e) {
        var t = e("core/editor"),
            n = t.getEditedPostAttribute,
            r = t.getSuggestedPostFormat,
            o = n("format"),
            i = e("core").getThemeSupports();
        return {
            postFormat: o,
            supportedFormats: Object(c.union)([o], Object(c.get)(i, ["formats"], [])),
            suggestedFormat: r()
        }
    }), Object(a.withDispatch)(function(e) {
        return {
            onUpdatePostFormat: function(t) {
                e("core/editor").editPost({
                    format: t
                })
            }
        }
    }), or.withInstanceId])(function(e) {
        var t = e.onUpdatePostFormat,
            n = e.postFormat,
            r = void 0 === n ? "standard" : n,
            o = e.supportedFormats,
            i = e.suggestedFormat,
            s = "post-format-selector-" + e.instanceId,
            a = Pc.filter(function(e) {
                return Object(c.includes)(o, e.id)
            }),
            l = Object(c.find)(a, function(e) {
                return e.id === i
            });
        return Object(X.createElement)(Cc, null, Object(X.createElement)("div", {
            className: "editor-post-format"
        }, Object(X.createElement)("div", {
            className: "editor-post-format__content"
        }, Object(X.createElement)("label", {
            htmlFor: s
        }, Object(P.__)("Post Format")), Object(X.createElement)("select", {
            value: r,
            onChange: function(e) {
                return t(e.target.value)
            },
            id: s
        }, a.map(function(e) {
            return Object(X.createElement)("option", {
                key: e.id,
                value: e.id
            }, e.caption)
        }))), l && l.id !== r && Object(X.createElement)("div", {
            className: "editor-post-format__suggestion"
        }, Object(P.__)("Suggestion:"), " ", Object(X.createElement)(or.Button, {
            isLink: !0,
            onClick: function() {
                return t(l.id)
            }
        }, l.caption))))
    });
    n(609);
    var xc = Object(a.withSelect)(function(e) {
        var t = e("core/editor"),
            n = t.getCurrentPostLastRevisionId,
            r = t.getCurrentPostRevisionsCount;
        return {
            lastRevisionId: n(),
            revisionsCount: r()
        }
    })(function(e) {
        var t = e.lastRevisionId,
            n = e.revisionsCount,
            r = e.children;
        return !t || n < 2 ? null : Object(X.createElement)(cc, {
            supportKeys: "revisions"
        }, r)
    });
    var Ic = Object(a.withSelect)(function(e) {
        var t = e("core/editor"),
            n = t.getCurrentPostLastRevisionId,
            r = t.getCurrentPostRevisionsCount;
        return {
            lastRevisionId: n(),
            revisionsCount: r()
        }
    })(function(e) {
        var t = e.lastRevisionId,
            n = e.revisionsCount;
        return Object(X.createElement)(xc, null, Object(X.createElement)(or.IconButton, {
            href: bs("revision.php", {
                revision: t,
                gutenberg: !0
            }),
            className: "editor-post-last-revision__title",
            icon: "backup"
        }, Object(P.sprintf)(Object(P._n)("%d Revision", "%d Revisions", n), n)))
    });
    var Dc = Object(X.compose)(Object(a.withSelect)(function(e) {
        var t = e("core/editor"),
            n = t.isCurrentPostPublished,
            r = t.getCurrentPostType,
            o = t.getCurrentPost;
        return {
            hasPublishAction: Object(c.get)(o(), ["_links", "wp:action-publish"], !1),
            isPublished: n(),
            postType: r()
        }
    }))(function(e) {
        var t = e.hasPublishAction,
            n = e.isPublished,
            r = e.children;
        return n || !t ? null : r
    });
    var Ac = Object(X.compose)(Object(a.withSelect)(function(e) {
        return {
            status: e("core/editor").getEditedPostAttribute("status")
        }
    }), Object(a.withDispatch)(function(e) {
        return {
            onUpdateStatus: function(t) {
                e("core/editor").editPost({
                    status: t
                })
            }
        }
    }), or.withInstanceId)(function(e) {
        var t = e.instanceId,
            n = e.status,
            r = e.onUpdateStatus,
            o = "pending-toggle-" + t;
        return Object(X.createElement)(Dc, null, Object(X.createElement)("label", {
            htmlFor: o
        }, Object(P.__)("Pending Review")), Object(X.createElement)(or.FormToggle, {
            id: o,
            checked: "pending" === n,
            onChange: function() {
                r("pending" === n ? "draft" : "pending")
            }
        }))
    });
    var Nc = Object(X.compose)([Object(a.withSelect)(function(e) {
            return {
                pingStatus: e("core/editor").getEditedPostAttribute("ping_status")
            }
        }), Object(a.withDispatch)(function(e) {
            return {
                editPost: e("core/editor").editPost
            }
        }), or.withInstanceId])(function(e) {
            var t = e.pingStatus,
                n = void 0 === t ? "open" : t,
                r = e.instanceId,
                o = h()(e, ["pingStatus", "instanceId"]),
                i = "allow-pingbacks-toggle-" + r;
            return [Object(X.createElement)("label", {
                key: "label",
                htmlFor: i
            }, Object(P.__)("Allow Pingbacks & Trackbacks")), Object(X.createElement)(or.FormToggle, {
                key: "toggle",
                checked: "open" === n,
                onChange: function() {
                    return o.editPost({
                        ping_status: "open" === n ? "closed" : "open"
                    })
                },
                id: i
            })]
        }),
        Rc = function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.openPreviewWindow = e.openPreviewWindow.bind(e), e
            }
            return jr()(t, e), Or()(t, [{
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this.props.previewLink;
                    t && !e.previewLink && this.setPreviewWindowLink(t)
                }
            }, {
                key: "setPreviewWindowLink",
                value: function(e) {
                    var t = this.previewWindow;
                    delete this.previewWindow, t && !t.closed && (t.location = e)
                }
            }, {
                key: "getWindowTarget",
                value: function() {
                    return "wp-preview-" + this.props.postId
                }
            }, {
                key: "openPreviewWindow",
                value: function(e) {
                    var t = this.props,
                        n = t.isAutosaveable,
                        r = t.previewLink;
                    if ((n || r) && (e.preventDefault(), this.previewWindow = window.open(n ? "about:blank" : r, this.getWindowTarget()), n)) {
                        this.props.autosave();
                        this.previewWindow.document.write('\n\t\t\t<div class="editor-post-preview-button__interstitial-message">\n\t\t\t\t<p>Please wait&hellip;</p>\n\t\t\t\t<p>Generating preview.</p>\n\t\t\t</div>\n\t\t\t<style>\n\t\t\t\tbody {\n\t\t\t\t\tmargin: 0;\n\t\t\t\t}\n\t\t\t\t.editor-post-preview-button__interstitial-message {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t\theight: 100vh;\n\t\t\t\t\twidth: 100vw;\n\t\t\t\t}\n\t\t\t\tp {\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\tfont-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;\n\t\t\t\t}\n\t\t\t</style>'), this.previewWindow.document.close()
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.currentPostLink,
                        n = e.isSaveable;
                    return Object(X.createElement)(or.Button, {
                        className: "editor-post-preview",
                        isLarge: !0,
                        href: t,
                        onClick: this.openPreviewWindow,
                        target: this.getWindowTarget(),
                        disabled: !n
                    }, Object(P._x)("Preview", "imperative verb"), Object(X.createElement)(Mi.DotTip, {
                        id: "core/editor.preview"
                    }, Object(P.__)("Click ‘Preview’ to load a preview of this page, so you can make sure you’re happy with your blocks.")))
                }
            }]), t
        }(X.Component),
        Lc = Object(X.compose)([Object(a.withSelect)(function(e) {
            var t = e("core/editor"),
                n = t.getCurrentPostId,
                r = t.getCurrentPostAttribute,
                o = t.getAutosaveAttribute,
                i = t.getEditedPostAttribute,
                s = t.isEditedPostDirty,
                a = t.isEditedPostNew,
                l = t.isEditedPostSaveable,
                u = t.isEditedPostAutosaveable,
                d = (0, e("core").getPostType)(i("type"));
            return {
                postId: n(),
                currentPostLink: r("link"),
                previewLink: o("preview_link"),
                isDirty: s(),
                isNew: a(),
                isSaveable: l(),
                isAutosaveable: u(),
                isViewable: Object(c.get)(d, ["viewable"], !1)
            }
        }), Object(a.withDispatch)(function(e) {
            return {
                autosave: e("core/editor").autosave
            }
        }), Object(or.ifCondition)(function(e) {
            return e.isViewable
        })])(Rc);
    var Uc = Object(X.compose)([Object(a.withSelect)(function(e, t) {
            var n = t.forceIsSaving,
                r = e("core/editor"),
                o = r.isCurrentPostPublished,
                i = r.isEditedPostBeingScheduled,
                s = r.isSavingPost,
                a = r.isPublishingPost,
                l = r.getCurrentPost,
                u = r.getCurrentPostType;
            return {
                isPublished: o(),
                isBeingScheduled: i(),
                isSaving: n || s(),
                isPublishing: a(),
                hasPublishAction: Object(c.get)(l(), ["_links", "wp:action-publish"], !1),
                postType: u()
            }
        })])(function(e) {
            var t = e.isPublished,
                n = e.isBeingScheduled,
                r = e.isSaving,
                o = e.isPublishing,
                i = e.hasPublishAction;
            return o ? Object(P.__)("Publishing…") : t && r ? Object(P.__)("Updating…") : n && r ? Object(P.__)("Scheduling…") : i ? t ? Object(P.__)("Update") : n ? Object(P.__)("Schedule") : Object(P.__)("Publish") : Object(P.__)("Submit for Review")
        }),
        Mc = function(e) {
            function t(e) {
                vr()(this, t);
                var n = _r()(this, (t.__proto__ || br()(t)).call(this, e));
                return n.buttonNode = Object(X.createRef)(), n
            }
            return jr()(t, e), Or()(t, [{
                key: "componentDidMount",
                value: function() {
                    this.props.focusOnMount && this.buttonNode.current.focus()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.isSaving,
                        n = e.onStatusChange,
                        r = e.onSave,
                        o = e.isBeingScheduled,
                        i = e.visibility,
                        s = e.isPublishable,
                        a = e.isSaveable,
                        l = e.hasPublishAction,
                        u = e.onSubmit,
                        d = void 0 === u ? c.noop : u,
                        p = e.forceIsSaving,
                        f = s && a,
                        h = void 0;
                    h = l ? o ? "future" : "private" === i ? "private" : "publish" : "pending";
                    return Object(X.createElement)(or.Button, {
                        ref: this.buttonNode,
                        className: "editor-post-publish-button",
                        isPrimary: !0,
                        isLarge: !0,
                        onClick: function() {
                            d(), n(h), r()
                        },
                        disabled: !f,
                        isBusy: t
                    }, Object(X.createElement)(Uc, {
                        forceIsSaving: p
                    }))
                }
            }]), t
        }(X.Component),
        Fc = Object(X.compose)([Object(a.withSelect)(function(e, t) {
            var n = t.forceIsSaving,
                r = t.forceIsDirty,
                o = e("core/editor"),
                i = o.isSavingPost,
                s = o.isEditedPostBeingScheduled,
                a = o.getEditedPostVisibility,
                l = o.isEditedPostSaveable,
                u = o.isEditedPostPublishable,
                d = o.getCurrentPost,
                p = o.getCurrentPostType;
            return {
                isSaving: n || i(),
                isBeingScheduled: s(),
                visibility: a(),
                isSaveable: l(),
                isPublishable: r || u(),
                hasPublishAction: Object(c.get)(d(), ["_links", "wp:action-publish"], !1),
                postType: p()
            }
        }), Object(a.withDispatch)(function(e) {
            var t = e("core/editor"),
                n = t.editPost;
            return {
                onStatusChange: function(e) {
                    return n({
                        status: e
                    })
                },
                onSave: t.savePost
            }
        })])(Mc),
        Hc = (n(608), [{
            value: "public",
            label: Object(P.__)("Public"),
            info: Object(P.__)("Visible to everyone.")
        }, {
            value: "private",
            label: Object(P.__)("Private"),
            info: Object(P.__)("Only visible to site admins and editors.")
        }, {
            value: "password",
            label: Object(P.__)("Password Protected"),
            info: Object(P.__)("Protected with a password you choose. Only those with the password can view this post.")
        }]),
        Vc = function(e) {
            function t(e) {
                vr()(this, t);
                var n = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return n.setPublic = n.setPublic.bind(n), n.setPrivate = n.setPrivate.bind(n), n.setPasswordProtected = n.setPasswordProtected.bind(n), n.updatePassword = n.updatePassword.bind(n), n.state = {
                    hasPassword: !!e.password
                }, n
            }
            return jr()(t, e), Or()(t, [{
                key: "setPublic",
                value: function() {
                    var e = this.props,
                        t = e.visibility,
                        n = e.onUpdateVisibility,
                        r = e.status;
                    n("private" === t ? "draft" : r), this.setState({
                        hasPassword: !1
                    })
                }
            }, {
                key: "setPrivate",
                value: function() {
                    if (window.confirm(Object(P.__)("Would you like to privately publish this post now?"))) {
                        var e = this.props,
                            t = e.onUpdateVisibility,
                            n = e.onSave;
                        t("private"), this.setState({
                            hasPassword: !1
                        }), n()
                    }
                }
            }, {
                key: "setPasswordProtected",
                value: function() {
                    var e = this.props,
                        t = e.visibility,
                        n = e.onUpdateVisibility,
                        r = e.status,
                        o = e.password;
                    n("private" === t ? "draft" : r, o || ""), this.setState({
                        hasPassword: !0
                    })
                }
            }, {
                key: "updatePassword",
                value: function(e) {
                    var t = this.props,
                        n = t.status;
                    (0, t.onUpdateVisibility)(n, e.target.value)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.visibility,
                        n = e.password,
                        r = e.instanceId,
                        o = {
                            public: {
                                onSelect: this.setPublic,
                                checked: "public" === t && !this.state.hasPassword
                            },
                            private: {
                                onSelect: this.setPrivate,
                                checked: "private" === t
                            },
                            password: {
                                onSelect: this.setPasswordProtected,
                                checked: this.state.hasPassword
                            }
                        };
                    return [Object(X.createElement)("fieldset", {
                        key: "visibility-selector"
                    }, Object(X.createElement)("legend", {
                        className: "editor-post-visibility__dialog-legend"
                    }, Object(P.__)("Post Visibility")), Hc.map(function(e) {
                        var t = e.value,
                            n = e.label,
                            i = e.info;
                        return Object(X.createElement)("div", {
                            key: t,
                            className: "editor-post-visibility__choice"
                        }, Object(X.createElement)("input", {
                            type: "radio",
                            name: "editor-post-visibility__setting-" + r,
                            value: t,
                            onChange: o[t].onSelect,
                            checked: o[t].checked,
                            id: "editor-post-" + t + "-" + r,
                            "aria-describedby": "editor-post-" + t + "-" + r + "-description",
                            className: "editor-post-visibility__dialog-radio"
                        }), Object(X.createElement)("label", {
                            htmlFor: "editor-post-" + t + "-" + r,
                            className: "editor-post-visibility__dialog-label"
                        }, n), Object(X.createElement)("p", {
                            id: "editor-post-" + t + "-" + r + "-description",
                            className: "editor-post-visibility__dialog-info"
                        }, i))
                    })), this.state.hasPassword && Object(X.createElement)("div", {
                        className: "editor-post-visibility__dialog-password",
                        key: "password-selector"
                    }, Object(X.createElement)("label", {
                        htmlFor: "editor-post-visibility__dialog-password-input-" + r,
                        className: "screen-reader-text"
                    }, Object(P.__)("Create password")), Object(X.createElement)("input", {
                        className: "editor-post-visibility__dialog-password-input",
                        id: "editor-post-visibility__dialog-password-input-" + r,
                        type: "text",
                        onChange: this.updatePassword,
                        value: n,
                        placeholder: Object(P.__)("Use a secure password")
                    }))]
                }
            }]), t
        }(X.Component),
        Kc = Object(X.compose)([Object(a.withSelect)(function(e) {
            var t = e("core/editor"),
                n = t.getEditedPostAttribute,
                r = t.getEditedPostVisibility;
            return {
                status: n("status"),
                visibility: r(),
                password: n("password")
            }
        }), Object(a.withDispatch)(function(e) {
            var t = e("core/editor"),
                n = t.savePost,
                r = t.editPost;
            return {
                onSave: n,
                onUpdateVisibility: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    r({
                        status: e,
                        password: t
                    })
                }
            }
        }), or.withInstanceId])(Vc);
    var zc = Object(a.withSelect)(function(e) {
        return {
            visibility: e("core/editor").getEditedPostVisibility()
        }
    })(function(e) {
        var t = e.visibility;
        return Object(c.find)(Hc, {
            value: t
        }).label
    });
    var Wc = Object(X.compose)([Object(a.withSelect)(function(e) {
        return {
            date: e("core/editor").getEditedPostAttribute("date")
        }
    }), Object(a.withDispatch)(function(e) {
        return {
            onUpdateDate: function(t) {
                e("core/editor").editPost({
                    date: t
                })
            }
        }
    })])(function(e) {
        var t = e.date,
            n = e.onUpdateDate,
            r = Object(at.getSettings)(),
            o = /a(?!\\)/i.test(r.formats.time.toLowerCase().replace(/\\\\/g, "").split("").reverse().join(""));
        return Object(X.createElement)(or.DateTimePicker, {
            key: "date-time-picker",
            currentDate: t,
            onChange: n,
            locale: r.l10n.locale,
            is12Hour: o
        })
    });
    var qc = Object(a.withSelect)(function(e) {
        return {
            date: e("core/editor").getEditedPostAttribute("date")
        }
    })(function(e) {
        var t = e.date,
            n = Object(at.getSettings)();
        return t ? Object(at.dateI18n)(n.formats.datetime, t) : Object(P.__)("Immediately")
    });
    var Gc = Object(a.withSelect)(function(e) {
            var t = e("core/editor").getCurrentPost;
            return {
                hasPublishAction: Object(c.get)(t(), ["_links", "wp:action-publish"], !1)
            }
        })(function(e) {
            var t = e.hasPublishAction,
                n = e.children;
            return Object(X.createElement)("div", {
                className: "editor-post-publish-panel__prepublish"
            }, Object(X.createElement)("div", null, Object(X.createElement)("strong", null, t ? Object(P.__)("Are you ready to publish?") : Object(P.__)("Are you ready to submit for review?"))), Object(X.createElement)("p", null, t ? Object(P.__)("Here, you can do a last-minute check up of your settings below, before you publish.") : Object(P.__)("When you're ready, submit your work for review, and an Editor will be able to approve it for you.")), t && Object(X.createElement)(X.Fragment, null, Object(X.createElement)(or.PanelBody, {
                initialOpen: !1,
                title: [Object(P.__)("Visibility: "), Object(X.createElement)("span", {
                    className: "editor-post-publish-panel__link",
                    key: "label"
                }, Object(X.createElement)(zc, null))]
            }, Object(X.createElement)(Kc, null)), Object(X.createElement)(or.PanelBody, {
                initialOpen: !1,
                title: [Object(P.__)("Publish: "), Object(X.createElement)("span", {
                    className: "editor-post-publish-panel__link",
                    key: "label"
                }, Object(X.createElement)(qc, null))]
            }, Object(X.createElement)(Wc, null)), n))
        }),
        Yc = function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.state = {
                    showCopyConfirmation: !1
                }, e.onCopy = e.onCopy.bind(e), e.onSelectInput = e.onSelectInput.bind(e), e
            }
            return jr()(t, e), Or()(t, [{
                key: "componentWillUnmount",
                value: function() {
                    clearTimeout(this.dismissCopyConfirmation)
                }
            }, {
                key: "onCopy",
                value: function() {
                    var e = this;
                    this.setState({
                        showCopyConfirmation: !0
                    }), clearTimeout(this.dismissCopyConfirmation), this.dismissCopyConfirmation = setTimeout(function() {
                        e.setState({
                            showCopyConfirmation: !1
                        })
                    }, 4e3)
                }
            }, {
                key: "onSelectInput",
                value: function(e) {
                    e.target.select()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.children,
                        n = e.isScheduled,
                        r = e.post,
                        o = e.postType,
                        i = Object(c.get)(o, ["labels", "view_item"]),
                        s = n ? Object(X.createElement)(X.Fragment, null, Object(P.__)("is now scheduled. It will go live on"), " ", Object(X.createElement)(qc, null), ".") : Object(P.__)("is now live."),
                        a = n ? Object(P.__)("The post address will be:") : Object(P.__)("What's next?");
                    return Object(X.createElement)("div", {
                        className: "post-publish-panel__postpublish"
                    }, Object(X.createElement)(or.PanelBody, {
                        className: "post-publish-panel__postpublish-header"
                    }, Object(X.createElement)("a", {
                        href: r.link
                    }, r.title || Object(P.__)("(no title)")), " ", s), Object(X.createElement)(or.PanelBody, null, Object(X.createElement)("div", null, Object(X.createElement)("strong", null, a)), Object(X.createElement)("input", {
                        className: "post-publish-panel__postpublish-link-input",
                        readOnly: !0,
                        value: r.link,
                        onFocus: this.onSelectInput,
                        type: "text"
                    }), Object(X.createElement)("div", {
                        className: "post-publish-panel__postpublish-buttons"
                    }, !n && Object(X.createElement)(or.Button, {
                        isDefault: !0,
                        href: r.link
                    }, i), Object(X.createElement)(or.ClipboardButton, {
                        isDefault: !0,
                        text: r.link,
                        onCopy: this.onCopy
                    }, this.state.showCopyConfirmation ? Object(P.__)("Copied!") : Object(P.__)("Copy Link")))), t)
                }
            }]), t
        }(X.Component),
        Xc = Object(a.withSelect)(function(e) {
            var t = e("core/editor"),
                n = t.getEditedPostAttribute,
                r = t.getCurrentPost,
                o = t.isCurrentPostScheduled,
                i = e("core").getPostType;
            return {
                post: r(),
                postType: i(n("type")),
                isScheduled: o()
            }
        })(Yc),
        $c = function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.onSubmit = e.onSubmit.bind(e), e.state = {
                    loading: !1,
                    submitted: !1
                }, e
            }
            return jr()(t, e), Or()(t, [{
                key: "componentDidUpdate",
                value: function(e) {
                    e.isPublished && !this.props.isSaving && this.props.isDirty && this.props.onClose()
                }
            }, {
                key: "onSubmit",
                value: function() {
                    var e = this.props,
                        t = e.onClose;
                    e.hasPublishAction ? this.setState({
                        loading: !0
                    }) : t()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.isScheduled,
                        n = e.onClose,
                        r = e.forceIsDirty,
                        o = e.forceIsSaving,
                        i = e.PrePublishExtension,
                        s = e.PostPublishExtension,
                        c = h()(e, ["isScheduled", "onClose", "forceIsDirty", "forceIsSaving", "PrePublishExtension", "PostPublishExtension"]),
                        a = this.state,
                        l = a.loading,
                        u = a.submitted;
                    return Object(X.createElement)("div", p()({
                        className: "editor-post-publish-panel"
                    }, c), Object(X.createElement)("div", {
                        className: "editor-post-publish-panel__header"
                    }, !u && Object(X.createElement)("div", {
                        className: "editor-post-publish-panel__header-publish-button"
                    }, Object(X.createElement)(Fc, {
                        focusOnMount: !0,
                        onSubmit: this.onSubmit,
                        forceIsDirty: r,
                        forceIsSaving: o
                    })), u && Object(X.createElement)("div", {
                        className: "editor-post-publish-panel__header-published"
                    }, t ? Object(P.__)("Scheduled") : Object(P.__)("Published")), Object(X.createElement)(or.IconButton, {
                        "aria-expanded": !0,
                        onClick: n,
                        icon: "no-alt",
                        label: Object(P.__)("Close Publish Panel")
                    })), Object(X.createElement)("div", {
                        className: "editor-post-publish-panel__content"
                    }, !l && !u && Object(X.createElement)(Gc, null, i && Object(X.createElement)(i, null)), l && !u && Object(X.createElement)(or.Spinner, null), u && Object(X.createElement)(Xc, null, s && Object(X.createElement)(s, null))))
                }
            }], [{
                key: "getDerivedStateFromProps",
                value: function(e, t) {
                    return t.submitted || e.isSaving || !e.isPublished && !e.isScheduled ? null : {
                        submitted: !0,
                        loading: !1
                    }
                }
            }]), t
        }(X.Component),
        Jc = Object(X.compose)([Object(a.withSelect)(function(e) {
            var t = e("core/editor"),
                n = t.getCurrentPost,
                r = t.getCurrentPostType,
                o = t.isCurrentPostPublished,
                i = t.isCurrentPostScheduled,
                s = t.isSavingPost,
                a = t.isEditedPostDirty;
            return {
                postType: r(),
                hasPublishAction: Object(c.get)(n(), ["_links", "wp:action-publish"], !1),
                isPublished: o(),
                isScheduled: i(),
                isSaving: s(),
                isDirty: a()
            }
        })])($c);
    var Qc = Object(X.compose)([Object(a.withSelect)(function(e) {
        var t = e("core/editor"),
            n = t.isSavingPost,
            r = t.isEditedPostSaveable,
            o = t.isEditedPostPublishable,
            i = t.isCurrentPostPending,
            s = t.isCurrentPostPublished,
            a = t.isEditedPostBeingScheduled,
            l = t.isCurrentPostScheduled,
            u = t.getCurrentPost,
            d = t.getCurrentPostType;
        return {
            hasPublishAction: Object(c.get)(u(), ["_links", "wp:action-publish"], !1),
            isSaving: n(),
            isSaveable: r(),
            isPublishable: o(),
            isPending: i(),
            isPublished: s(),
            isScheduled: l(),
            isBeingScheduled: a(),
            postType: d()
        }
    })])(function(e) {
        var t = e.hasPublishAction,
            n = e.isSaving,
            r = e.isPublishable,
            o = e.isSaveable,
            i = e.isPublished,
            s = e.isBeingScheduled,
            c = e.isPending,
            a = e.isScheduled,
            l = e.onToggle,
            u = e.isOpen,
            d = e.forceIsDirty,
            p = e.forceIsSaving,
            f = !n && !p && r && o || i;
        return i || a && s || c && !t ? Object(X.createElement)(Fc, {
            forceIsDirty: d,
            forceIsSaving: p
        }) : Object(X.createElement)(or.Button, {
            className: "editor-post-publish-panel__toggle",
            isPrimary: !0,
            onClick: l,
            "aria-expanded": u,
            disabled: !f,
            isBusy: n && i
        }, s ? Object(P.__)("Schedule…") : Object(P.__)("Publish…"), Object(X.createElement)(Mi.DotTip, {
            id: "core/editor.publish"
        }, Object(P.__)("Finished writing? That’s great, let’s get this published right now. Just click ‘Publish’ and you’re good to go.")))
    });
    n(607);
    var Zc = Object(X.compose)([Object(a.withSelect)(function(e) {
            var t = e("core/editor"),
                n = t.isSavingPost,
                r = t.isCurrentPostPublished;
            return {
                isSaving: n(),
                isPublished: r()
            }
        }), Object(a.withDispatch)(function(e) {
            var t = e("core/editor"),
                n = t.editPost,
                r = t.savePost;
            return {
                onClick: function() {
                    n({
                        status: "draft"
                    }), r()
                }
            }
        })])(function(e) {
            var t = e.isSaving,
                n = e.isPublished,
                r = e.onClick;
            return n ? Object(X.createElement)(or.Button, {
                className: "editor-post-switch-to-draft",
                isLarge: !0,
                onClick: function() {
                    window.confirm(Object(P.__)("Are you sure you want to unpublish this post?")) && r()
                },
                disabled: t
            }, Object(P.__)("Switch to Draft")) : null
        }),
        ea = function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.state = {
                    forceSavedMessage: !1
                }, e
            }
            return jr()(t, e), Or()(t, [{
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this;
                    e.isSaving && !this.props.isSaving && (this.setState({
                        forceSavedMessage: !0
                    }), this.props.setTimeout(function() {
                        t.setState({
                            forceSavedMessage: !1
                        })
                    }, 1e3))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.isNew,
                        n = e.isPublished,
                        r = e.isDirty,
                        o = e.isSaving,
                        i = e.isSaveable,
                        s = e.onSave,
                        c = e.isAutosaving,
                        a = this.state.forceSavedMessage;
                    if (o) {
                        var l = fr()("editor-post-saved-state", "is-saving", {
                            "is-autosaving": c
                        });
                        return Object(X.createElement)("span", {
                            className: l
                        }, Object(X.createElement)(or.Dashicon, {
                            icon: "cloud"
                        }), c ? Object(P.__)("Autosaving") : Object(P.__)("Saving"))
                    }
                    return n ? Object(X.createElement)(Zc, null) : i ? a || !t && !r ? Object(X.createElement)("span", {
                        className: "editor-post-saved-state is-saved"
                    }, Object(X.createElement)(or.Dashicon, {
                        icon: "saved"
                    }), Object(P.__)("Saved")) : Object(X.createElement)(or.IconButton, {
                        className: "editor-post-save-draft",
                        onClick: s,
                        icon: "cloud-upload",
                        shortcut: To.displayShortcut.primary("s")
                    }, Object(P.__)("Save Draft")) : null
                }
            }]), t
        }(X.Component),
        ta = Object(X.compose)([Object(a.withSelect)(function(e, t) {
            var n = t.forceIsDirty,
                r = t.forceIsSaving,
                o = e("core/editor"),
                i = o.isEditedPostNew,
                s = o.isCurrentPostPublished,
                c = o.isEditedPostDirty,
                a = o.isSavingPost,
                l = o.isEditedPostSaveable,
                u = o.getCurrentPost,
                d = o.isAutosavingPost;
            return {
                post: u(),
                isNew: i(),
                isPublished: s(),
                isDirty: n || c(),
                isSaving: r || a(),
                isSaveable: l(),
                isAutosaving: d()
            }
        }), Object(a.withDispatch)(function(e) {
            return {
                onSave: e("core/editor").savePost
            }
        }), or.withSafeTimeout])(ea);
    var na = Object(X.compose)([Object(a.withSelect)(function(e) {
        var t = e("core/editor"),
            n = t.getCurrentPost,
            r = t.getCurrentPostType;
        return {
            hasPublishAction: Object(c.get)(n(), ["_links", "wp:action-publish"], !1),
            postType: r()
        }
    })])(function(e) {
        var t = e.hasPublishAction,
            n = e.children;
        return t ? n : null
    });
    var ra = Object(X.compose)([Object(a.withSelect)(function(e) {
        var t = e("core/editor").getCurrentPost();
        return {
            hasStickyAction: Object(c.get)(t, ["_links", "wp:action-sticky"], !1),
            postType: e("core/editor").getCurrentPostType()
        }
    })])(function(e) {
        var t = e.hasStickyAction,
            n = e.postType,
            r = e.children;
        return "post" === n && t ? r : null
    });
    var oa = Object(X.compose)([Object(a.withSelect)(function(e) {
            return {
                postSticky: e("core/editor").getEditedPostAttribute("sticky")
            }
        }), Object(a.withDispatch)(function(e) {
            return {
                onUpdateSticky: function(t) {
                    e("core/editor").editPost({
                        sticky: t
                    })
                }
            }
        }), or.withInstanceId])(function(e) {
            var t = e.onUpdateSticky,
                n = e.postSticky,
                r = void 0 !== n && n,
                o = "post-sticky-toggle-" + e.instanceId;
            return Object(X.createElement)(ra, null, Object(X.createElement)("label", {
                htmlFor: o
            }, Object(P.__)("Stick to the Front Page")), Object(X.createElement)(or.FormToggle, {
                key: "toggle",
                checked: r,
                onChange: function() {
                    return t(!r)
                },
                id: o
            }))
        }),
        ia = (n(606), n(83)),
        sa = n.n(ia),
        ca = n(140),
        aa = {
            per_page: -1,
            orderby: "count",
            order: "desc",
            _fields: "id,name,parent"
        },
        la = function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.findTerm = e.findTerm.bind(e), e.onChange = e.onChange.bind(e), e.onChangeFormName = e.onChangeFormName.bind(e), e.onChangeFormParent = e.onChangeFormParent.bind(e), e.onAddTerm = e.onAddTerm.bind(e), e.onToggleForm = e.onToggleForm.bind(e), e.state = {
                    loading: !0,
                    availableTermsTree: [],
                    availableTerms: [],
                    adding: !1,
                    formName: "",
                    formParent: "",
                    showForm: !1
                }, e
            }
            return jr()(t, e), Or()(t, [{
                key: "onChange",
                value: function(e) {
                    var t = this.props,
                        n = t.onUpdateTerms,
                        r = t.terms,
                        o = void 0 === r ? [] : r,
                        i = t.restBase,
                        s = parseInt(e.target.value, 10);
                    n(-1 !== o.indexOf(s) ? Object(c.without)(o, s) : [].concat(m()(o), [s]), i)
                }
            }, {
                key: "onChangeFormName",
                value: function(e) {
                    var t = "" === e.target.value.trim() ? "" : e.target.value;
                    this.setState({
                        formName: t
                    })
                }
            }, {
                key: "onChangeFormParent",
                value: function(e) {
                    this.setState({
                        formParent: e
                    })
                }
            }, {
                key: "onToggleForm",
                value: function() {
                    this.setState(function(e) {
                        return {
                            showForm: !e.showForm
                        }
                    })
                }
            }, {
                key: "findTerm",
                value: function(e, t, n) {
                    return Object(c.find)(e, function(e) {
                        return (!e.parent && !t || parseInt(e.parent) === parseInt(t)) && e.name.toLowerCase() === n.toLowerCase()
                    })
                }
            }, {
                key: "onAddTerm",
                value: function(e) {
                    var t = this;
                    e.preventDefault();
                    var n = this.props,
                        r = n.onUpdateTerms,
                        o = n.restBase,
                        i = n.terms,
                        s = n.slug,
                        a = this.state,
                        l = a.formName,
                        u = a.formParent,
                        d = a.adding,
                        f = a.availableTerms;
                    if ("" !== l && !d) {
                        var h = this.findTerm(f, u, l);
                        if (h) return Object(c.some)(i, function(e) {
                            return e === h.id
                        }) || r([].concat(m()(i), [h.id]), o), void this.setState({
                            formName: "",
                            formParent: ""
                        });
                        new sa.a(function(e, n) {
                            t.setState({
                                adding: !0
                            });
                            var r = wp.api.getTaxonomyRoute(t.props.slug);
                            t.addRequest = Q()({
                                path: "/wp/v2/" + r,
                                method: "POST",
                                data: {
                                    name: l,
                                    parent: u || void 0
                                }
                            }), t.addRequest.then(e, function(o) {
                                if ("term_exists" === (o.responseJSON && o.responseJSON.code)) return t.addRequest = Q()({
                                    path: "/wp/v2/" + r + "?" + Object(ca.stringify)(p()({}, aa, {
                                        parent: u || 0,
                                        search: l
                                    }))
                                }), t.addRequest.then(function(n) {
                                    e(t.findTerm(n, u, l))
                                }, n);
                                n(o)
                            })
                        }).then(function(e) {
                            var n = !!Object(c.find)(t.state.availableTerms, function(t) {
                                    return t.id === e.id
                                }) ? t.state.availableTerms : [e].concat(m()(t.state.availableTerms)),
                                a = Object(P.sprintf)(Object(P._x)("%s added", "term"), Object(c.get)(t.props.taxonomy, ["data", "labels", "singular_name"], "category" === s ? Object(P.__)("Category") : Object(P.__)("Term")));
                            t.props.speak(a, "assertive"), t.addRequest = null, t.setState({
                                adding: !1,
                                formName: "",
                                formParent: "",
                                availableTerms: n,
                                availableTermsTree: Object(Ui.buildTermsTree)(n)
                            }), r([].concat(m()(i), [e.id]), o)
                        }, function(e) {
                            "abort" !== e.statusText && (t.addRequest = null, t.setState({
                                adding: !1
                            }))
                        })
                    }
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    var e = this,
                        t = wp.api.getTaxonomyRoute(this.props.slug);
                    this.fetchRequest = Q()({
                        path: "/wp/v2/" + t + "?" + Object(ca.stringify)(aa)
                    }), this.fetchRequest.then(function(t) {
                        var n = Object(Ui.buildTermsTree)(t);
                        e.fetchRequest = null, e.setState({
                            loading: !1,
                            availableTermsTree: n,
                            availableTerms: t
                        })
                    }, function(t) {
                        "abort" !== t.statusText && (e.fetchRequest = null, e.setState({
                            loading: !1
                        }))
                    })
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    Object(c.invoke)(this.fetchRequest, ["abort"]), Object(c.invoke)(this.addRequest, ["abort"])
                }
            }, {
                key: "renderTerms",
                value: function(e) {
                    var t = this,
                        n = this.props.terms,
                        r = void 0 === n ? [] : n;
                    return e.map(function(e) {
                        var n = "editor-post-taxonomies-hierarchical-term-" + e.id;
                        return Object(X.createElement)("div", {
                            key: e.id,
                            className: "editor-post-taxonomies__hierarchical-terms-choice"
                        }, Object(X.createElement)("input", {
                            id: n,
                            className: "editor-post-taxonomies__hierarchical-terms-input",
                            type: "checkbox",
                            checked: -1 !== r.indexOf(e.id),
                            value: e.id,
                            onChange: t.onChange
                        }), Object(X.createElement)("label", {
                            htmlFor: n
                        }, Object(c.unescape)(e.name)), !!e.children.length && Object(X.createElement)("div", {
                            className: "editor-post-taxonomies__hierarchical-terms-subchoices"
                        }, t.renderTerms(e.children)))
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.slug,
                        n = e.taxonomy,
                        r = e.instanceId,
                        o = e.hasCreateAction;
                    if (!e.hasAssignAction) return null;
                    var i = this.state,
                        s = i.availableTermsTree,
                        a = i.availableTerms,
                        l = i.formName,
                        u = i.formParent,
                        d = i.loading,
                        p = i.showForm,
                        f = function(e, r, o) {
                            return Object(c.get)(n, ["data", "labels", e], "category" === t ? r : o)
                        },
                        h = f("add_new_item", Object(P.__)("Add new category"), Object(P.__)("Add new term")),
                        b = f("new_item_name", Object(P.__)("Add new category"), Object(P.__)("Add new term")),
                        v = f("parent_item", Object(P.__)("Parent Category"), Object(P.__)("Parent Term")),
                        g = "— " + v + " —",
                        O = h,
                        y = "editor-post-taxonomies__hierarchical-terms-input-" + r;
                    return [].concat(m()(this.renderTerms(s)), [!d && o && Object(X.createElement)(or.Button, {
                        key: "term-add-button",
                        onClick: this.onToggleForm,
                        className: "editor-post-taxonomies__hierarchical-terms-add",
                        "aria-expanded": p,
                        isLink: !0
                    }, h), p && Object(X.createElement)("form", {
                        onSubmit: this.onAddTerm,
                        key: "hierarchical-terms-form"
                    }, Object(X.createElement)("label", {
                        htmlFor: y,
                        className: "editor-post-taxonomies__hierarchical-terms-label"
                    }, b), Object(X.createElement)("input", {
                        type: "text",
                        id: y,
                        className: "editor-post-taxonomies__hierarchical-terms-input",
                        value: l,
                        onChange: this.onChangeFormName,
                        required: !0
                    }), !!a.length && Object(X.createElement)(or.TreeSelect, {
                        label: v,
                        noOptionLabel: g,
                        onChange: this.onChangeFormParent,
                        selectedId: u,
                        tree: s
                    }), Object(X.createElement)(or.Button, {
                        isDefault: !0,
                        type: "submit",
                        className: "editor-post-taxonomies__hierarchical-terms-submit"
                    }, O))])
                }
            }]), t
        }(X.Component),
        ua = Object(X.compose)([Object(or.withAPIData)(function(e) {
            return {
                taxonomy: "/wp/v2/taxonomies/" + e.slug + "?context=edit"
            }
        }), Object(a.withSelect)(function(e, t) {
            var n = e("core/editor").getCurrentPost;
            return {
                hasCreateAction: Object(c.get)(n(), ["_links", "wp:action-create-" + t.restBase], !1),
                hasAssignAction: Object(c.get)(n(), ["_links", "wp:action-assign-" + t.restBase], !1),
                terms: e("core/editor").getEditedPostAttribute(t.restBase)
            }
        }), Object(a.withDispatch)(function(e) {
            return {
                onUpdateTerms: function(t, n) {
                    e("core/editor").editPost(y()({}, n, t))
                }
            }
        }), or.withSpokenMessages, or.withInstanceId])(la),
        da = {
            per_page: -1,
            orderby: "count",
            order: "desc",
            _fields: "id,name"
        },
        pa = function(e, t) {
            return e.toLowerCase() === t.toLowerCase()
        },
        fa = function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.onChange = e.onChange.bind(e), e.searchTerms = Object(c.throttle)(e.searchTerms.bind(e), 500), e.findOrCreateTerm = e.findOrCreateTerm.bind(e), e.state = {
                    loading: !1,
                    availableTerms: [],
                    selectedTerms: []
                }, e
            }
            return jr()(t, e), Or()(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    Object(c.isEmpty)(this.props.terms) || (this.setState({
                        loading: !1
                    }), this.initRequest = this.fetchTerms({
                        include: this.props.terms.join(","),
                        per_page: 100
                    }), this.initRequest.then(function() {
                        e.setState({
                            loading: !1
                        })
                    }, function(t) {
                        "abort" !== t.statusText && e.setState({
                            loading: !1
                        })
                    })), this.searchTerms()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    Object(c.invoke)(this.initRequest, ["abort"]), Object(c.invoke)(this.searchRequest, ["abort"])
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    e.terms !== this.props.terms && this.updateSelectedTerms(this.props.terms)
                }
            }, {
                key: "fetchTerms",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = p()({}, da, t),
                        r = wp.api.getTaxonomyRoute(this.props.slug),
                        o = Q()({
                            path: "/wp/v2/" + r + "?" + Object(ca.stringify)(n)
                        });
                    return o.then(function(t) {
                        e.setState(function(e) {
                            return {
                                availableTerms: e.availableTerms.concat(t.filter(function(t) {
                                    return !Object(c.find)(e.availableTerms, function(e) {
                                        return e.id === t.id
                                    })
                                }))
                            }
                        }), e.updateSelectedTerms(e.props.terms)
                    }), o
                }
            }, {
                key: "updateSelectedTerms",
                value: function() {
                    var e = this,
                        t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce(function(t, n) {
                            var r = Object(c.find)(e.state.availableTerms, function(e) {
                                return e.id === n
                            });
                            return r && t.push(r.name), t
                        }, []);
                    this.setState({
                        selectedTerms: t
                    })
                }
            }, {
                key: "findOrCreateTerm",
                value: function(e) {
                    var t = this;
                    return new sa.a(function(n, r) {
                        var o = wp.api.getTaxonomyRoute(t.props.slug);
                        Q()({
                            path: "/wp/v2/" + o,
                            method: "POST",
                            data: {
                                name: e
                            }
                        }).then(n, function(i) {
                            if ("term_exists" === (i.responseJSON && i.responseJSON.code)) return t.addRequest = Q()({
                                path: "/wp/v2/" + o + "?" + Object(ca.stringify)(p()({}, da, {
                                    search: e
                                }))
                            }), t.addRequest.then(function(t) {
                                n(Object(c.find)(t, function(t) {
                                    return pa(t.name, e)
                                }))
                            }, r);
                            r(i)
                        })
                    })
                }
            }, {
                key: "onChange",
                value: function(e) {
                    var t = this,
                        n = Object(c.uniqBy)(e, function(e) {
                            return e.toLowerCase()
                        });
                    this.setState({
                        selectedTerms: n
                    });
                    var r = n.filter(function(e) {
                            return !Object(c.find)(t.state.availableTerms, function(t) {
                                return pa(t.name, e)
                            })
                        }),
                        o = function(e, t) {
                            return e.map(function(e) {
                                return Object(c.find)(t, function(t) {
                                    return pa(t.name, e)
                                }).id
                            })
                        };
                    if (0 === r.length) return this.props.onUpdateTerms(o(n, this.state.availableTerms), this.props.restBase);
                    sa.a.all(r.map(this.findOrCreateTerm)).then(function(e) {
                        var r = t.state.availableTerms.concat(e);
                        return t.setState({
                            availableTerms: r
                        }), t.props.onUpdateTerms(o(n, r), t.props.restBase)
                    })
                }
            }, {
                key: "searchTerms",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    Object(c.invoke)(this.searchRequest, ["abort"]), this.searchRequest = this.fetchTerms({
                        search: e
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.slug,
                        n = e.taxonomy;
                    if (!e.hasAssignAction) return null;
                    var r = this.state,
                        o = r.loading,
                        i = r.availableTerms,
                        s = r.selectedTerms,
                        a = i.map(function(e) {
                            return e.name
                        }),
                        l = Object(c.get)(n, ["data", "labels", "add_new_item"], "post_tag" === t ? Object(P.__)("Add New Tag") : Object(P.__)("Add New Term")),
                        u = Object(c.get)(n, ["data", "labels", "singular_name"], "post_tag" === t ? Object(P.__)("Tag") : Object(P.__)("Term")),
                        d = Object(P.sprintf)(Object(P._x)("%s added", "term"), u),
                        p = Object(P.sprintf)(Object(P._x)("%s removed", "term"), u),
                        f = Object(P.sprintf)(Object(P._x)("Remove %s", "term"), u);
                    return Object(X.createElement)(or.FormTokenField, {
                        value: s,
                        displayTransform: c.unescape,
                        suggestions: a,
                        onChange: this.onChange,
                        onInputChange: this.searchTerms,
                        maxSuggestions: 20,
                        disabled: o,
                        placeholder: l,
                        messages: {
                            added: d,
                            removed: p,
                            remove: f
                        }
                    })
                }
            }]), t
        }(X.Component),
        ha = Object(X.compose)(Object(or.withAPIData)(function(e) {
            return {
                taxonomy: "/wp/v2/taxonomies/" + e.slug + "?context=edit"
            }
        }), Object(a.withSelect)(function(e, t) {
            var n = e("core/editor").getCurrentPost;
            return {
                hasCreateAction: Object(c.get)(n(), ["_links", "wp:action-create-" + t.restBase], !1),
                hasAssignAction: Object(c.get)(n(), ["_links", "wp:action-assign-" + t.restBase], !1),
                terms: e("core/editor").getEditedPostAttribute(t.restBase)
            }
        }), Object(a.withDispatch)(function(e) {
            return {
                onUpdateTerms: function(t, n) {
                    e("core/editor").editPost(y()({}, n, t))
                }
            }
        }))(fa);
    var ba = Object(X.compose)([Object(a.withSelect)(function(e) {
        return {
            postType: e("core/editor").getCurrentPostType(),
            taxonomies: e("core").getTaxonomies()
        }
    })])(function(e) {
        var t = e.postType,
            n = e.taxonomies,
            r = e.taxonomyWrapper,
            o = void 0 === r ? c.identity : r,
            i = Object(c.filter)(n, function(e) {
                return Object(c.includes)(e.types, t)
            });
        return Object(c.filter)(i, function(e) {
            return e.visibility.show_ui
        }).map(function(e) {
            var t = e.hierarchical ? ua : ha;
            return Object(X.createElement)(X.Fragment, {
                key: "taxonomy-" + e.slug
            }, o(Object(X.createElement)(t, {
                restBase: e.rest_base,
                slug: e.slug
            }), e))
        })
    });
    var ma = Object(X.compose)([Object(a.withSelect)(function(e) {
        return {
            postType: e("core/editor").getCurrentPostType(),
            taxonomies: e("core").getTaxonomies()
        }
    })])(function(e) {
        var t = e.postType,
            n = e.taxonomies,
            r = e.children;
        return Object(c.some)(n, function(e) {
            return Object(c.includes)(e.types, t)
        }) ? r : null
    });
    n(605);
    var va = function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.startEditing = e.startEditing.bind(e), e.edit = e.edit.bind(e), e.stopEditing = e.stopEditing.bind(e), e.state = {
                    value: null,
                    isDirty: !1
                }, e
            }
            return jr()(t, e), Or()(t, [{
                key: "startEditing",
                value: function() {
                    this.setState({
                        value: this.props.value
                    })
                }
            }, {
                key: "edit",
                value: function(e) {
                    var t = e.target.value;
                    this.props.onChange(t), this.setState({
                        value: t,
                        isDirty: !0
                    })
                }
            }, {
                key: "stopEditing",
                value: function() {
                    this.state.isDirty && this.props.onPersist(this.state.value), this.setState({
                        value: null,
                        isDirty: !1
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.value,
                        n = e.placeholder,
                        r = e.instanceId,
                        o = Object(Ui.decodeEntities)(n);
                    return Object(X.createElement)(X.Fragment, null, Object(X.createElement)("label", {
                        htmlFor: "post-content-" + r,
                        className: "screen-reader-text"
                    }, o || Object(P.__)("Write your story")), Object(X.createElement)(Zo.a, {
                        autoComplete: "off",
                        value: this.state.value || t,
                        onFocus: this.startEditing,
                        onChange: this.edit,
                        onBlur: this.stopEditing,
                        className: "editor-post-text-editor",
                        id: "post-content-" + r,
                        placeholder: o || Object(P.__)("Write your story")
                    }))
                }
            }], [{
                key: "getDerivedPropsFromState",
                value: function(e, t) {
                    return t.persistedValue === e.value || t.isDirty ? null : function(e) {
                        return {
                            persistedValue: e.value,
                            value: e.value,
                            isDirty: !1
                        }
                    }(e)
                }
            }]), t
        }(X.Component),
        ga = Object(X.compose)([Object(a.withSelect)(function(e) {
            var t = e("core/editor"),
                n = t.getEditedPostContent,
                r = (0, t.getEditorSettings)().bodyPlaceholder;
            return {
                value: n(),
                placeholder: r
            }
        }), Object(a.withDispatch)(function(e) {
            var t = e("core/editor"),
                n = t.editPost,
                r = t.resetBlocks,
                o = t.checkTemplateValidity;
            return {
                onChange: function(e) {
                    n({
                        content: e
                    })
                },
                onPersist: function(e) {
                    r(Object(E.parse)(e)), o()
                }
            }
        }), or.withInstanceId])(va),
        Oa = (n(604), n(603), function(e) {
            function t(e) {
                var n = e.permalinkParts;
                vr()(this, t);
                var r = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return r.state = {
                    editedPostName: n.postName
                }, r.onSavePermalink = r.onSavePermalink.bind(r), r
            }
            return jr()(t, e), Or()(t, [{
                key: "onSavePermalink",
                value: function(e) {
                    var t = this.state.editedPostName.replace(/\s+/g, "-");
                    e.preventDefault(), this.props.onSave(), t !== this.props.postName && (this.props.editPost({
                        slug: t
                    }), this.setState({
                        editedPostName: t
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = this.props.permalinkParts,
                        n = t.prefix,
                        r = t.suffix,
                        o = this.state.editedPostName;
                    return Object(X.createElement)("form", {
                        className: "editor-post-permalink-editor",
                        onSubmit: this.onSavePermalink
                    }, Object(X.createElement)("span", null, Object(X.createElement)("span", {
                        className: "editor-post-permalink-editor__prefix"
                    }, n), Object(X.createElement)("input", {
                        className: "editor-post-permalink-editor__edit",
                        "aria-label": Object(P.__)("Edit post permalink"),
                        value: o,
                        onChange: function(t) {
                            return e.setState({
                                editedPostName: t.target.value
                            })
                        },
                        type: "text",
                        autoFocus: !0
                    }), Object(X.createElement)("span", {
                        className: "editor-post-permalink-editor__suffix"
                    }, r), "‎"), Object(X.createElement)(or.Button, {
                        className: "editor-post-permalink-editor__save",
                        isLarge: !0,
                        onClick: this.onSavePermalink
                    }, Object(P.__)("OK")))
                }
            }]), t
        }(X.Component)),
        ya = Object(X.compose)([Object(a.withSelect)(function(e) {
            return {
                permalinkParts: (0, e("core/editor").getPermalinkParts)()
            }
        }), Object(a.withDispatch)(function(e) {
            return {
                editPost: e("core/editor").editPost
            }
        })])(Oa),
        _a = function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.addVisibilityCheck = e.addVisibilityCheck.bind(e), e.onVisibilityChange = e.onVisibilityChange.bind(e), e.state = {
                    isCopied: !1,
                    isEditingPermalink: !1
                }, e
            }
            return jr()(t, e), Or()(t, [{
                key: "addVisibilityCheck",
                value: function() {
                    window.addEventListener("visibilitychange", this.onVisibilityChange)
                }
            }, {
                key: "onVisibilityChange",
                value: function() {
                    var e = this.props,
                        t = e.isEditable,
                        n = e.refreshPost;
                    t || "visible" !== document.visibilityState || n()
                }
            }, {
                key: "componentDidUpdate",
                value: function(e, t) {
                    t.isEditingPermalink && !this.state.isEditingPermalink && this.permalinkButton.focus()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    window.removeEventListener("visibilitychange", this.addVisibilityCheck)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = this.props,
                        n = t.isNew,
                        r = t.postLink,
                        o = t.isEditable,
                        i = t.samplePermalink,
                        s = t.isPublished,
                        c = this.state,
                        a = c.isCopied,
                        l = c.isEditingPermalink,
                        u = a ? Object(P.__)("Permalink copied") : Object(P.__)("Copy the permalink");
                    return n || !r ? null : Object(X.createElement)("div", {
                        className: "editor-post-permalink"
                    }, Object(X.createElement)(or.ClipboardButton, {
                        className: fr()("editor-post-permalink__copy", {
                            "is-copied": a
                        }),
                        text: i,
                        label: u,
                        onCopy: function() {
                            return e.setState({
                                isCopied: !0
                            })
                        },
                        "aria-disabled": a,
                        icon: "admin-links"
                    }), Object(X.createElement)("span", {
                        className: "editor-post-permalink__label"
                    }, Object(P.__)("Permalink:")), !l && Object(X.createElement)(or.Button, {
                        className: "editor-post-permalink__link",
                        href: s ? i : r,
                        target: "_blank",
                        ref: function(t) {
                            return e.permalinkButton = t
                        }
                    }, decodeURI(i), "‎"), l && Object(X.createElement)(ya, {
                        onSave: function() {
                            return e.setState({
                                isEditingPermalink: !1
                            })
                        }
                    }), o && !l && Object(X.createElement)(or.Button, {
                        className: "editor-post-permalink__edit",
                        isLarge: !0,
                        onClick: function() {
                            return e.setState({
                                isEditingPermalink: !0
                            })
                        }
                    }, Object(P.__)("Edit")), !o && Object(X.createElement)(or.Button, {
                        className: "editor-post-permalink__change",
                        isLarge: !0,
                        href: bs("options-permalink.php"),
                        onClick: this.addVisibilityCheck,
                        target: "_blank"
                    }, Object(P.__)("Change Permalinks")))
                }
            }]), t
        }(X.Component),
        ka = Object(X.compose)([Object(a.withSelect)(function(e) {
            var t = e("core/editor"),
                n = t.isEditedPostNew,
                r = t.isPermalinkEditable,
                o = t.getCurrentPost,
                i = t.getPermalink,
                s = t.isCurrentPostPublished,
                c = o().link;
            return {
                isNew: n(),
                postLink: c,
                isEditable: r(),
                samplePermalink: i(),
                isPublished: s()
            }
        }), Object(a.withDispatch)(function(e) {
            return {
                refreshPost: e("core/editor").refreshPost
            }
        })])(_a),
        ja = /[\r\n]+/g,
        Sa = function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.onChange = e.onChange.bind(e), e.onSelect = e.onSelect.bind(e), e.onUnselect = e.onUnselect.bind(e), e.onKeyDown = e.onKeyDown.bind(e), e.redirectHistory = e.redirectHistory.bind(e), e.state = {
                    isSelected: !1
                }, e
            }
            return jr()(t, e), Or()(t, [{
                key: "handleFocusOutside",
                value: function() {
                    this.onUnselect()
                }
            }, {
                key: "onSelect",
                value: function() {
                    this.setState({
                        isSelected: !0
                    }), this.props.clearSelectedBlock()
                }
            }, {
                key: "onUnselect",
                value: function() {
                    this.setState({
                        isSelected: !1
                    })
                }
            }, {
                key: "onChange",
                value: function(e) {
                    var t = e.target.value.replace(ja, " ");
                    this.props.onUpdate(t)
                }
            }, {
                key: "onKeyDown",
                value: function(e) {
                    e.keyCode === To.ENTER && (e.preventDefault(), this.props.onEnterPress())
                }
            }, {
                key: "redirectHistory",
                value: function(e) {
                    e.shiftKey ? this.props.onRedo() : this.props.onUndo(), e.preventDefault()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.title,
                        n = e.placeholder,
                        r = e.instanceId,
                        o = e.isPostTypeViewable,
                        i = this.state.isSelected,
                        s = fr()("editor-post-title__block", {
                            "is-selected": i
                        }),
                        c = Object(Ui.decodeEntities)(n);
                    return Object(X.createElement)(cc, {
                        supportKeys: "title"
                    }, Object(X.createElement)("div", {
                        className: "editor-post-title"
                    }, Object(X.createElement)("div", {
                        className: s
                    }, Object(X.createElement)(or.KeyboardShortcuts, {
                        shortcuts: {
                            "mod+z": this.redirectHistory,
                            "mod+shift+z": this.redirectHistory
                        }
                    }, Object(X.createElement)("label", {
                        htmlFor: "post-title-" + r,
                        className: "screen-reader-text"
                    }, c || Object(P.__)("Add title")), Object(X.createElement)(Zo.a, {
                        id: "post-title-" + r,
                        className: "editor-post-title__input",
                        value: t,
                        onChange: this.onChange,
                        placeholder: c || Object(P.__)("Add title"),
                        onFocus: this.onSelect,
                        onKeyDown: this.onKeyDown,
                        onKeyPress: this.onUnselect
                    })), i && o && Object(X.createElement)(ka, null))))
                }
            }]), t
        }(X.Component),
        Ea = Object(a.withSelect)(function(e) {
            var t = e("core/editor"),
                n = t.getEditedPostAttribute,
                r = t.getEditorSettings,
                o = (0, e("core").getPostType)(n("type")),
                i = r().titlePlaceholder;
            return {
                title: n("title"),
                isPostTypeViewable: Object(c.get)(o, ["viewable"], !1),
                placeholder: i
            }
        }),
        wa = Object(a.withDispatch)(function(e) {
            var t = e("core/editor"),
                n = t.insertDefaultBlock,
                r = t.editPost,
                o = t.clearSelectedBlock;
            return {
                onEnterPress: function() {
                    n(void 0, void 0, 0)
                },
                onUpdate: function(e) {
                    r({
                        title: e
                    })
                },
                onUndo: t.undo,
                onRedo: t.redo,
                clearSelectedBlock: o
            }
        }),
        Ta = Object(X.compose)(Ea, wa, or.withInstanceId, or.withFocusOutside)(Sa);
    n(602);
    var Ca = Object(X.compose)([Object(a.withSelect)(function(e) {
        var t = e("core/editor"),
            n = t.isEditedPostNew,
            r = t.getCurrentPostId,
            o = t.getCurrentPostType;
        return {
            isNew: n(),
            postId: r(),
            postType: o()
        }
    }), Object(a.withDispatch)(function(e) {
        return {
            trashPost: e("core/editor").trashPost
        }
    })])(function(e) {
        var t = e.isNew,
            n = e.postId,
            r = e.postType,
            o = h()(e, ["isNew", "postId", "postType"]);
        return t || !n ? null : Object(X.createElement)(or.Button, {
            isLink: !0,
            className: "editor-post-trash button-link-delete",
            onClick: function() {
                return o.trashPost(n, r)
            }
        }, Object(P.__)("Move to trash"), Object(X.createElement)(or.Dashicon, {
            icon: "trash"
        }))
    });
    var Pa = Object(a.withSelect)(function(e) {
        var t = e("core/editor"),
            n = t.isEditedPostNew,
            r = t.getCurrentPostId;
        return {
            isNew: n(),
            postId: r()
        }
    })(function(e) {
        var t = e.isNew,
            n = e.postId,
            r = e.children;
        return t || !n ? null : r
    });
    var Ba = Object(X.compose)([Object(a.withSelect)(function(e) {
            var t = e("core/editor"),
                n = t.getCurrentPost,
                r = t.getCurrentPostType;
            return {
                hasPublishAction: Object(c.get)(n(), ["_links", "wp:action-publish"], !1),
                postType: r()
            }
        })])(function(e) {
            var t = e.hasPublishAction;
            return (0, e.render)({
                canEdit: t
            })
        }),
        xa = (n(601), {
            HTMLRegExp: /<\/?[a-z][^>]*?>/gi,
            HTMLcommentRegExp: /<!--[\s\S]*?-->/g,
            spaceRegExp: /&nbsp;|&#160;/gi,
            HTMLEntityRegExp: /&\S+?;/g,
            connectorRegExp: /--|\u2014/g,
            removeRegExp: new RegExp(["[", "!-@[-`{-~", "-¿×÷", " -⯿", "⸀-⹿", "]"].join(""), "g"),
            astralRegExp: /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            wordsRegExp: /\S\s+/g,
            characters_excluding_spacesRegExp: /\S/g,
            characters_including_spacesRegExp: /[^\f\n\r\t\v\u00AD\u2028\u2029]/g,
            l10n: {
                type: "words"
            }
        }),
        Ia = function(e, t) {
            if (e.HTMLRegExp) return t.replace(e.HTMLRegExp, "\n")
        },
        Da = function(e, t) {
            return e.astralRegExp ? t.replace(e.astralRegExp, "a") : t
        },
        Aa = function(e, t) {
            return e.HTMLEntityRegExp ? t.replace(e.HTMLEntityRegExp, "") : t
        },
        Na = function(e, t) {
            return e.connectorRegExp ? t.replace(e.connectorRegExp, " ") : t
        },
        Ra = function(e, t) {
            return e.removeRegExp ? t.replace(e.removeRegExp, "") : t
        },
        La = function(e, t) {
            return e.HTMLcommentRegExp ? t.replace(e.HTMLcommentRegExp, "") : t
        },
        Ua = function(e, t) {
            return e.shortcodesRegExp ? t.replace(e.shortcodesRegExp, "\n") : t
        },
        Ma = function(e, t) {
            if (e.spaceRegExp) return t.replace(e.spaceRegExp, " ")
        },
        Fa = function(e, t) {
            return e.HTMLEntityRegExp ? t.replace(e.HTMLEntityRegExp, "a") : t
        };

    function Ha(e, t, n) {
        var r = function(e, t) {
            var n = Object(c.extend)(xa, t);
            return n.shortcodes = n.l10n.shortcodes || {}, n.shortcodes && n.shortcodes.length && (n.shortcodesRegExp = new RegExp("\\[\\/?(?:" + n.shortcodes.join("|") + ")[^\\]]*?\\]", "g")), n.type = e || n.l10n.type, "characters_excluding_spaces" !== n.type && "characters_including_spaces" !== n.type && (n.type = "words"), n
        }(t, n);
        if (e) {
            var o = r[t + "RegExp"],
                i = "words" === r.type ? function(e, t, n) {
                    return e = Object(c.flow)(Ia.bind(this, n), La.bind(this, n), Ua.bind(this, n), Ma.bind(this, n), Aa.bind(this, n), Na.bind(this, n), Ra.bind(this, n))(e), (e += "\n").match(t)
                }(e, o, r) : function(e, t, n) {
                    return e = Object(c.flow)(Ia.bind(this, n), La.bind(this, n), Ua.bind(this, n), Ma.bind(this, n), Da.bind(this, n), Fa.bind(this, n))(e), (e += "\n").match(t)
                }(e, o, r);
            return i ? i.length : 0
        }
    }
    var Va = Object(a.withSelect)(function(e) {
        return {
            content: e("core/editor").getEditedPostAttribute("content")
        }
    })(function(e) {
        var t = e.content;
        return Object(X.createElement)("span", {
            className: "word-count"
        }, Ha(t, "words"))
    });
    var Ka = Object(a.withSelect)(function(e) {
        var t = e("core/editor").getGlobalBlockCount;
        return {
            headingCount: t("core/heading"),
            paragraphCount: t("core/paragraph"),
            numberOfBlocks: t()
        }
    })(function(e) {
        var t = e.headingCount,
            n = e.paragraphCount,
            r = e.numberOfBlocks;
        return Object(X.createElement)(X.Fragment, null, Object(X.createElement)("div", {
            className: "table-of-contents__counts",
            role: "note",
            "aria-label": Object(P.__)("Document Statistics"),
            tabIndex: "0"
        }, Object(X.createElement)("div", {
            className: "table-of-contents__count"
        }, Object(P.__)("Words"), Object(X.createElement)(Va, null)), Object(X.createElement)("div", {
            className: "table-of-contents__count"
        }, Object(P.__)("Headings"), Object(X.createElement)("span", {
            className: "table-of-contents__number"
        }, t)), Object(X.createElement)("div", {
            className: "table-of-contents__count"
        }, Object(P.__)("Paragraphs"), Object(X.createElement)("span", {
            className: "table-of-contents__number"
        }, n)), Object(X.createElement)("div", {
            className: "table-of-contents__count"
        }, Object(P.__)("Blocks"), Object(X.createElement)("span", {
            className: "table-of-contents__number"
        }, r))), t > 0 && Object(X.createElement)(X.Fragment, null, Object(X.createElement)("hr", null), Object(X.createElement)("span", {
            className: "table-of-contents__title"
        }, Object(P.__)("Document Outline")), Object(X.createElement)($s, null)))
    });
    var za = Object(a.withSelect)(function(e) {
            return {
                hasBlocks: !!e("core/editor").getBlockCount()
            }
        })(function(e) {
            var t = e.hasBlocks;
            return Object(X.createElement)(or.Dropdown, {
                position: "bottom",
                className: "table-of-contents",
                contentClassName: "table-of-contents__popover",
                renderToggle: function(e) {
                    var n = e.isOpen,
                        r = e.onToggle;
                    return Object(X.createElement)(or.IconButton, {
                        onClick: r,
                        icon: "info-outline",
                        "aria-expanded": n,
                        label: Object(P.__)("Content Structure"),
                        disabled: !t
                    })
                },
                renderContent: function() {
                    return Object(X.createElement)(Ka, null)
                }
            })
        }),
        Wa = function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.warnIfUnsavedChanges = e.warnIfUnsavedChanges.bind(e), e
            }
            return jr()(t, e), Or()(t, [{
                key: "componentDidMount",
                value: function() {
                    window.addEventListener("beforeunload", this.warnIfUnsavedChanges)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    window.removeEventListener("beforeunload", this.warnIfUnsavedChanges)
                }
            }, {
                key: "warnIfUnsavedChanges",
                value: function(e) {
                    var t = this.props,
                        n = t.isDirty,
                        r = t.forceIsDirty;
                    if (n || (void 0 === r ? function() {
                            return !1
                        } : r)()) return e.returnValue = Object(P.__)("You have unsaved changes. If you proceed, they will be lost."), e.returnValue
                }
            }, {
                key: "render",
                value: function() {
                    return null
                }
            }]), t
        }(X.Component),
        qa = Object(a.withSelect)(function(e) {
            return {
                isDirty: e("core/editor").isEditedPostDirty()
            }
        })(Wa);
    n(600), n(599);

    function Ga(e) {
        return document.querySelector('[data-block="' + e + '"]')
    }
    var Ya = Object(a.withSelect)(function(e) {
            return {
                selectedBlockUID: e("core/editor").getBlockSelectionStart()
            }
        })(function(e) {
            var t = e.selectedBlockUID;
            return t && Object(X.createElement)(or.Button, {
                isDefault: !0,
                type: "button",
                className: "editor-skip-to-selected-block",
                onClick: function() {
                    Ga(t).closest(".editor-block-list__block").focus()
                }
            }, Object(P.__)("Skip to the selected block"))
        }),
        Xa = Object(a.withSelect)(function(e) {
            var t = e("core/editor"),
                n = t.getSelectedBlock,
                r = t.getSelectedBlockCount,
                o = n();
            return {
                selectedBlock: o,
                blockType: o && Object(E.getBlockType)(o.name),
                count: r()
            }
        })(function(e) {
            var t = e.selectedBlock,
                n = e.blockType;
            return e.count > 1 ? Object(X.createElement)("span", {
                className: "editor-block-inspector__multi-blocks"
            }, Object(P.__)("Coming Soon")) : t ? [Object(X.createElement)("div", {
                className: "editor-block-inspector__card",
                key: "card"
            }, Object(X.createElement)(xr, {
                icon: n.icon,
                showColors: !0
            }), Object(X.createElement)("div", {
                className: "editor-block-inspector__card-content"
            }, Object(X.createElement)("div", {
                className: "editor-block-inspector__card-title"
            }, n.title), Object(X.createElement)("div", {
                className: "editor-block-inspector__card-description"
            }, n.description))), Object(X.createElement)(rs.Slot, {
                key: "inspector-controls"
            }), Object(X.createElement)(Qi.Slot, {
                key: "inspector-advanced-controls"
            }, function(e) {
                return !Object(c.isEmpty)(e) && Object(X.createElement)(or.PanelBody, {
                    className: "editor-block-inspector__advanced",
                    title: Object(P.__)("Advanced"),
                    initialOpen: !1
                }, e)
            }), Object(X.createElement)(Ya, {
                key: "back"
            })] : Object(X.createElement)("span", {
                className: "editor-block-inspector__no-blocks"
            }, Object(P.__)("No block selected."))
        }),
        $a = function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.bindContainer = e.bindContainer.bind(e), e.clearSelectionIfFocusTarget = e.clearSelectionIfFocusTarget.bind(e), e
            }
            return jr()(t, e), Or()(t, [{
                key: "bindContainer",
                value: function(e) {
                    this.container = e
                }
            }, {
                key: "clearSelectionIfFocusTarget",
                value: function(e) {
                    var t = this.props,
                        n = t.hasSelectedBlock,
                        r = t.hasMultiSelection,
                        o = t.clearSelectedBlock,
                        i = n || r;
                    e.target === this.container && i && o()
                }
            }, {
                key: "render",
                value: function() {
                    return Object(X.createElement)("div", p()({
                        tabIndex: -1,
                        onFocus: this.clearSelectionIfFocusTarget,
                        ref: this.bindContainer
                    }, Object(c.omit)(this.props, ["clearSelectedBlock", "hasSelectedBlock", "hasMultiSelection"])))
                }
            }]), t
        }(X.Component),
        Ja = Object(X.compose)([Object(a.withSelect)(function(e) {
            var t = e("core/editor"),
                n = t.hasSelectedBlock,
                r = t.hasMultiSelection;
            return {
                hasSelectedBlock: n(),
                hasMultiSelection: r()
            }
        }), Object(a.withDispatch)(function(e) {
            return {
                clearSelectedBlock: e("core/editor").clearSelectedBlock
            }
        })])($a);
    n(598), n(597), n(596);

    function Qa(e, t, n) {
        var r = !1,
            o = Object(c.compact)(e.split(" ").map(function(e) {
                var o = e.trim();
                return t && o === "is-style-" + t.name ? (r = !0, n.isDefault ? null : "is-style-" + n.name) : o
            })).join(" ");
        return r || n.isDefault || (o = o + " is-style-" + n.name), o
    }
    var Za = Object(X.compose)([Object(a.withSelect)(function(e, t) {
            var n = t.uid,
                r = e("core/editor").getBlock(n);
            return {
                name: r.name,
                attributes: r.attributes,
                className: r.attributes.className || "",
                styles: Object(c.get)(Object(E.getBlockType)(r.name), ["styles"])
            }
        }), Object(a.withDispatch)(function(e, t) {
            var n = t.uid;
            return {
                onChangeClassName: function(t) {
                    e("core/editor").updateBlockAttributes(n, {
                        className: t
                    })
                }
            }
        })])(function(e) {
            var t = e.styles,
                n = e.className,
                r = e.onChangeClassName,
                o = e.name,
                i = e.attributes,
                s = e.onSwitch,
                a = e.onHoverClassName;
            if (!t) return null;
            var l = function(e, t) {
                var n = void 0;
                return t.split(" ").map(function(e) {
                    return e.trim()
                }).filter(function(e) {
                    return 0 === e.indexOf("is-style-")
                }).forEach(function(t) {
                    if (!n) {
                        var r = t.substring(9);
                        n = Object(c.find)(e, function(e) {
                            return e.name === r
                        })
                    }
                }), n || (n = Object(c.find)(e, function(e) {
                    return e.isDefault
                })), n
            }(t, n);
            return Object(X.createElement)("div", {
                className: "editor-block-styles"
            }, t.map(function(e) {
                var t = Qa(n, l, e);
                return Object(X.createElement)("div", {
                    key: e.name,
                    className: fr()("editor-block-styles__item", {
                        "is-active": l === e
                    }),
                    onClick: function() {
                        return function(e) {
                            var t = Qa(n, l, e);
                            r(t), s()
                        }(e)
                    },
                    onMouseEnter: function() {
                        return a(t)
                    },
                    onMouseLeave: function() {
                        return a(null)
                    },
                    role: "button",
                    tabIndex: "0",
                    "aria-label": Object(P.sprintf)(Object(P.__)('Apply style variation "%s"'), e.label || e.name)
                }, Object(X.createElement)("div", {
                    className: "editor-block-styles__item-preview"
                }, Object(X.createElement)(fi, {
                    name: o,
                    attributes: p()({}, i, {
                        className: t
                    })
                })), Object(X.createElement)("div", {
                    className: "editor-block-styles__item-label"
                }, e.label || e.name))
            }))
        }),
        el = function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.state = {
                    hoveredClassName: null
                }, e.onHoverClassName = e.onHoverClassName.bind(e), e
            }
            return jr()(t, e), Or()(t, [{
                key: "onHoverClassName",
                value: function(e) {
                    this.setState({
                        hoveredClassName: e
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = this.props,
                        n = t.blocks,
                        r = t.onTransform,
                        o = t.isLocked,
                        i = this.state.hoveredClassName;
                    if (!n || !n.length) return null;
                    var s = Object(E.getPossibleBlockTransformations)(n),
                        a = n[0].name,
                        l = Object(E.getBlockType)(a),
                        u = 1 === n.length && 0 !== Object(c.get)(l, ["styles"], []).length;
                    return u || s.length && !o ? Object(X.createElement)(or.Dropdown, {
                        position: "bottom right",
                        className: "editor-block-switcher",
                        contentClassName: "editor-block-switcher__popover",
                        renderToggle: function(e) {
                            var t = e.onToggle,
                                n = e.isOpen,
                                r = Object(P.__)("Change block type");
                            return Object(X.createElement)(or.Toolbar, null, Object(X.createElement)(or.IconButton, {
                                className: "editor-block-switcher__toggle",
                                onClick: t,
                                "aria-haspopup": "true",
                                "aria-expanded": n,
                                label: r,
                                tooltip: r,
                                onKeyDown: function(e) {
                                    n || e.keyCode !== To.DOWN || (e.preventDefault(), e.stopPropagation(), t())
                                }
                            }, Object(X.createElement)(xr, {
                                icon: l.icon && l.icon.src,
                                showColors: !0
                            })))
                        },
                        renderContent: function(t) {
                            var c = t.onClose;
                            return Object(X.createElement)(X.Fragment, null, u && Object(X.createElement)(or.PanelBody, {
                                title: Object(P.__)("Block Styles"),
                                initialOpen: !0
                            }, Object(X.createElement)(Za, {
                                uid: n[0].uid,
                                onSwitch: c,
                                onHoverClassName: e.onHoverClassName
                            })), 0 !== s.length && !o && Object(X.createElement)(or.PanelBody, {
                                title: Object(P.__)("Transform To:"),
                                initialOpen: !0
                            }, Object(X.createElement)(bi, {
                                items: s.map(function(e) {
                                    return {
                                        id: e.name,
                                        icon: e.icon,
                                        title: e.title,
                                        hasChildBlocks: Object(E.hasChildBlocks)(e.name)
                                    }
                                }),
                                onSelect: function(e) {
                                    r(n, e.id), c()
                                }
                            })), null !== i && Object(X.createElement)(hi, {
                                name: n[0].name,
                                attributes: p()({}, n[0].attributes, {
                                    className: i
                                })
                            }))
                        }
                    }) : null
                }
            }]), t
        }(X.Component),
        tl = Object(X.compose)(Object(a.withSelect)(function(e, t) {
            var n = e("core/editor"),
                r = n.getBlock,
                o = n.getBlockRootUID,
                i = n.getTemplateLock;
            return {
                blocks: t.uids.map(r),
                isLocked: Object(c.some)(Object(c.castArray)(t.uids), function(e) {
                    return !!i(o(e))
                })
            }
        }), Object(a.withDispatch)(function(e, t) {
            return {
                onTransform: function(n, r) {
                    e("core/editor").replaceBlocks(t.uids, Object(E.switchToBlockType)(n, r))
                }
            }
        }))(el);
    var nl = Object(a.withSelect)(function(e) {
            var t = e("core/editor"),
                n = t.getSelectedBlock,
                r = t.getBlockMode,
                o = n();
            return {
                block: o,
                mode: o ? r(o.uid) : null
            }
        })(function(e) {
            var t = e.block,
                n = e.mode;
            return t && t.isValid && "visual" === n ? Object(X.createElement)("div", {
                className: "editor-block-toolbar"
            }, Object(X.createElement)(tl, {
                uids: [t.uid]
            }), Object(X.createElement)(Gr.Slot, null), Object(X.createElement)(to.Slot, null)) : null
        }),
        rl = function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.onCopy = e.onCopy.bind(e), e.onCut = e.onCut.bind(e), e
            }
            return jr()(t, e), Or()(t, [{
                key: "componentDidMount",
                value: function() {
                    document.addEventListener("copy", this.onCopy), document.addEventListener("cut", this.onCut)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    document.removeEventListener("copy", this.onCopy), document.removeEventListener("cut", this.onCut)
                }
            }, {
                key: "onCopy",
                value: function(e) {
                    var t = this.props,
                        n = t.multiSelectedBlocks,
                        r = t.selectedBlock;
                    if ((n.length || r) && (!r || !Object(wo.documentHasSelection)())) {
                        var o = Object(E.serialize)(r || n);
                        e.clipboardData.setData("text/plain", o), e.clipboardData.setData("text/html", o), e.preventDefault()
                    }
                }
            }, {
                key: "onCut",
                value: function(e) {
                    var t = this.props.multiSelectedBlockUids;
                    this.onCopy(e), t.length && this.props.onRemove(t)
                }
            }, {
                key: "render",
                value: function() {
                    return null
                }
            }]), t
        }(X.Component),
        ol = Object(X.compose)([Object(a.withSelect)(function(e) {
            var t = e("core/editor"),
                n = t.getMultiSelectedBlocks,
                r = t.getMultiSelectedBlockUids,
                o = t.getSelectedBlock;
            return {
                multiSelectedBlocks: n(),
                multiSelectedBlockUids: r(),
                selectedBlock: o()
            }
        }), Object(a.withDispatch)(function(e) {
            return {
                onRemove: e("core/editor").removeBlocks
            }
        })])(rl),
        il = function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.reboot = e.reboot.bind(e), e.getContent = e.getContent.bind(e), e.state = {
                    error: null
                }, e
            }
            return jr()(t, e), Or()(t, [{
                key: "componentDidCatch",
                value: function(e) {
                    this.setState({
                        error: e
                    })
                }
            }, {
                key: "reboot",
                value: function() {
                    this.props.onError()
                }
            }, {
                key: "getContent",
                value: function() {
                    try {
                        return Rn(this.context.store.getState())
                    } catch (e) {}
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.state.error;
                    return e ? Object(X.createElement)(Go, {
                        actions: [Object(X.createElement)(or.Button, {
                            key: "recovery",
                            onClick: this.reboot,
                            isLarge: !0
                        }, Object(P.__)("Attempt Recovery")), Object(X.createElement)(or.ClipboardButton, {
                            key: "copy-post",
                            text: this.getContent,
                            isLarge: !0
                        }, Object(P.__)("Copy Post Text")), Object(X.createElement)(or.ClipboardButton, {
                            key: "copy-error",
                            text: e.stack,
                            isLarge: !0
                        }, Object(P.__)("Copy Error"))]
                    }, Object(P.__)("The editor has encountered an unexpected error.")) : this.props.children
                }
            }]), t
        }(X.Component);
    il.contextTypes = {
        store: c.noop
    };
    var sl = il;
    var cl = Object(a.withSelect)(function(e) {
            var t = e("core/editor").getMultiSelectedBlockUids();
            return {
                isMultiBlockSelection: t.length > 1,
                selectedBlockUids: t
            }
        })(function(e) {
            var t = e.isMultiBlockSelection,
                n = e.selectedBlockUids;
            return t ? Object(X.createElement)(tl, {
                key: "switcher",
                uids: n
            }) : null
        }),
        al = function(e) {
            function t() {
                return vr()(this, t), _r()(this, (t.__proto__ || br()(t)).apply(this, arguments))
            }
            return jr()(t, e), Or()(t, [{
                key: "componentDidUpdate",
                value: function() {
                    this.scrollIntoView()
                }
            }, {
                key: "scrollIntoView",
                value: function() {
                    var e = this.props.extentUID;
                    if (e) {
                        var t = Ga(e);
                        if (t) {
                            var n = Object(wo.getScrollContainer)(t);
                            n && pi()(t, n, {
                                onlyScrollIfNeeded: !0
                            })
                        }
                    }
                }
            }, {
                key: "render",
                value: function() {
                    return null
                }
            }]), t
        }(X.Component),
        ll = Object(a.withSelect)(function(e) {
            return {
                extentUID: e("core/editor").getLastMultiSelectedBlockUid()
            }
        })(al),
        ul = [To.UP, To.RIGHT, To.DOWN, To.LEFT, To.ENTER, To.BACKSPACE];
    var dl = function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.stopTypingOnSelectionUncollapse = e.stopTypingOnSelectionUncollapse.bind(e), e.stopTypingOnMouseMove = e.stopTypingOnMouseMove.bind(e), e.startTypingInTextField = e.startTypingInTextField.bind(e), e.stopTypingOnNonTextField = e.stopTypingOnNonTextField.bind(e), e.lastMouseMove = null, e
            }
            return jr()(t, e), Or()(t, [{
                key: "componentDidMount",
                value: function() {
                    this.toggleEventBindings(this.props.isTyping)
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    this.props.isTyping !== e.isTyping && this.toggleEventBindings(this.props.isTyping)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.toggleEventBindings(!1)
                }
            }, {
                key: "toggleEventBindings",
                value: function(e) {
                    var t = e ? "addEventListener" : "removeEventListener";
                    document[t]("selectionchange", this.stopTypingOnSelectionUncollapse), document[t]("mousemove", this.stopTypingOnMouseMove)
                }
            }, {
                key: "stopTypingOnMouseMove",
                value: function(e) {
                    var t = e.clientX,
                        n = e.clientY;
                    if (this.lastMouseMove) {
                        var r = this.lastMouseMove,
                            o = r.clientX,
                            i = r.clientY;
                        o === t && i === n || this.props.onStopTyping()
                    }
                    this.lastMouseMove = {
                        clientX: t,
                        clientY: n
                    }
                }
            }, {
                key: "stopTypingOnSelectionUncollapse",
                value: function() {
                    var e = window.getSelection();
                    e.rangeCount > 0 && e.getRangeAt(0).collapsed || this.props.onStopTyping()
                }
            }, {
                key: "startTypingInTextField",
                value: function(e) {
                    var t = this.props,
                        n = t.isTyping,
                        r = t.onStartTyping,
                        o = e.type,
                        i = e.target;
                    n || !Object(wo.isTextField)(i) || i.closest(".editor-block-toolbar") || ("keydown" !== o || function(e) {
                        var t = e.keyCode;
                        return !e.shiftKey && Object(c.includes)(ul, t)
                    }(e)) && r()
                }
            }, {
                key: "stopTypingOnNonTextField",
                value: function(e) {
                    var t = this;
                    e.persist(), this.props.setTimeout(function() {
                        var n = t.props,
                            r = n.isTyping,
                            o = n.onStopTyping,
                            i = e.target;
                        r && !Object(wo.isTextField)(i) && o()
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.children;
                    return Object(X.createElement)("div", {
                        onFocus: this.stopTypingOnNonTextField,
                        onKeyPress: this.startTypingInTextField,
                        onKeyDown: this.startTypingInTextField
                    }, e)
                }
            }]), t
        }(X.Component),
        pl = Object(X.compose)([Object(a.withSelect)(function(e) {
            return {
                isTyping: (0, e("core/editor").isTyping)()
            }
        }), Object(a.withDispatch)(function(e) {
            var t = e("core/editor");
            return {
                onStartTyping: t.startTyping,
                onStopTyping: t.stopTyping
            }
        }), or.withSafeTimeout])(dl),
        fl = function(e) {
            function t() {
                return vr()(this, t), _r()(this, (t.__proto__ || br()(t)).apply(this, arguments))
            }
            return jr()(t, e), Or()(t, [{
                key: "getSnapshotBeforeUpdate",
                value: function(e) {
                    var t = this.props,
                        n = t.blockOrder,
                        r = t.selectionStart;
                    return n !== e.blockOrder && r ? this.getOffset(r) : null
                }
            }, {
                key: "componentDidUpdate",
                value: function(e, t, n) {
                    n && this.restorePreviousOffset(n)
                }
            }, {
                key: "getOffset",
                value: function(e) {
                    var t = Ga(e);
                    return t ? t.getBoundingClientRect().top : null
                }
            }, {
                key: "restorePreviousOffset",
                value: function(e) {
                    var t = Ga(this.props.selectionStart);
                    if (t) {
                        var n = Object(wo.getScrollContainer)(t);
                        n && (n.scrollTop = n.scrollTop + t.getBoundingClientRect().top - e)
                    }
                }
            }, {
                key: "render",
                value: function() {
                    return null
                }
            }]), t
        }(X.Component),
        hl = Object(a.withSelect)(function(e) {
            return {
                blockOrder: e("core/editor").getBlockOrder(),
                selectionStart: e("core/editor").getBlockSelectionStart()
            }
        })(fl),
        bl = (n(595), Object(c.overEvery)([wo.isTextField, wo.focus.tabbable.isTabbableIndex])),
        ml = function(e) {
            function t() {
                vr()(this, t);
                var e = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.onKeyDown = e.onKeyDown.bind(e), e.bindContainer = e.bindContainer.bind(e), e.clearVerticalRect = e.clearVerticalRect.bind(e), e.focusLastTextField = e.focusLastTextField.bind(e), e.verticalRect = null, e
            }
            return jr()(t, e), Or()(t, [{
                key: "bindContainer",
                value: function(e) {
                    this.container = e
                }
            }, {
                key: "clearVerticalRect",
                value: function() {
                    this.verticalRect = null
                }
            }, {
                key: "getClosestTabbable",
                value: function(e, t) {
                    var n = wo.focus.focusable.find(this.container);
                    return t && (n = Object(c.reverse)(n)), n = n.slice(n.indexOf(e) + 1), Object(c.find)(n, function t(n, r, o) {
                        if (!wo.focus.tabbable.isTabbableIndex(n)) return !1;
                        if (Object(wo.isTextField)(n)) return !0;
                        if (!n.classList.contains("editor-block-list__block")) return !1;
                        if (function(e) {
                                return !!e.querySelector(".editor-block-list__layout")
                            }(n)) return !0;
                        if (n.contains(e)) return !1;
                        for (var i, s = 1;
                            (i = o[r + s]) && n.contains(i); s++)
                            if (t(i, r + s, o)) return !1;
                        return !0
                    })
                }
            }, {
                key: "expandSelection",
                value: function(e) {
                    var t = this.props,
                        n = t.selectedBlockUID,
                        r = t.selectionStartUID,
                        o = t.selectionBeforeEndUID,
                        i = t.selectionAfterEndUID,
                        s = e ? o : i;
                    s && this.props.onMultiSelect(r || n, s)
                }
            }, {
                key: "moveSelection",
                value: function(e) {
                    var t = this.props,
                        n = t.selectedFirstUid,
                        r = t.selectedLastUid,
                        o = e ? n : r;
                    o && this.props.onSelectBlock(o)
                }
            }, {
                key: "isTabbableEdge",
                value: function(e, t) {
                    var n, r, o = this.getClosestTabbable(e, t);
                    return !(o && (n = e, r = o, n.closest("[data-block]") === r.closest("[data-block]")))
                }
            }, {
                key: "onKeyDown",
                value: function(e) {
                    var t = this.props,
                        n = t.hasMultiSelection,
                        r = t.onMultiSelect,
                        o = t.blocks,
                        i = e.keyCode,
                        s = e.target,
                        a = i === To.UP,
                        l = i === To.DOWN,
                        u = i === To.LEFT,
                        d = i === To.RIGHT,
                        p = a || u,
                        f = u || d,
                        h = a || l,
                        b = f || h,
                        m = e.shiftKey,
                        v = h ? wo.isVerticalEdge : wo.isHorizontalEdge;
                    if (!b) return To.isKeyboardEvent.primary(e) && (this.isEntirelySelected = Object(wo.isEntirelySelected)(s)), void(To.isKeyboardEvent.primary(e, "a") && ((s.isContentEditable ? this.isEntirelySelected : Object(wo.isEntirelySelected)(s)) && (r(Object(c.first)(o), Object(c.last)(o)), e.preventDefault()), this.isEntirelySelected = Object(wo.isEntirelySelected)(s)));
                    if (!e.nativeEvent.defaultPrevented)
                        if (h ? this.verticalRect || (this.verticalRect = Object(wo.computeCaretRect)(s)) : this.verticalRect = null, m && (n || this.isTabbableEdge(s, p) && v(s, p, !0))) this.expandSelection(p), e.preventDefault();
                        else if (n) this.moveSelection(p), e.preventDefault();
                    else if (h && Object(wo.isVerticalEdge)(s, p, m)) {
                        var g = this.getClosestTabbable(s, p);
                        g && (Object(wo.placeCaretAtVerticalEdge)(g, p, this.verticalRect), e.preventDefault())
                    } else if (f && Object(wo.isHorizontalEdge)(s, p, m)) {
                        var O = this.getClosestTabbable(s, p);
                        Object(wo.placeCaretAtHorizontalEdge)(O, p), e.preventDefault()
                    }
                }
            }, {
                key: "focusLastTextField",
                value: function() {
                    var e = wo.focus.focusable.find(this.container),
                        t = Object(c.findLast)(e, bl);
                    t && Object(wo.placeCaretAtHorizontalEdge)(t, !0)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.children;
                    return Object(X.createElement)("div", {
                        className: "editor-writing-flow"
                    }, Object(X.createElement)("div", {
                        ref: this.bindContainer,
                        onKeyDown: this.onKeyDown,
                        onMouseDown: this.clearVerticalRect
                    }, e), Object(X.createElement)("div", {
                        "aria-hidden": !0,
                        tabIndex: -1,
                        onClick: this.focusLastTextField,
                        className: "editor-writing-flow__click-redirect"
                    }))
                }
            }]), t
        }(X.Component),
        vl = Object(X.compose)([Object(a.withSelect)(function(e) {
            var t = e("core/editor"),
                n = t.getSelectedBlockUID,
                r = t.getMultiSelectedBlocksStartUid,
                o = t.getMultiSelectedBlocksEndUid,
                i = t.getPreviousBlockUid,
                s = t.getNextBlockUid,
                c = t.getFirstMultiSelectedBlockUid,
                a = t.getLastMultiSelectedBlockUid,
                l = t.hasMultiSelection,
                u = t.getBlockOrder,
                d = n(),
                p = r(),
                f = o();
            return {
                selectedBlockUID: d,
                selectionStartUID: p,
                selectionBeforeEndUID: i(f || d),
                selectionAfterEndUID: s(f || d),
                selectedFirstUid: c(),
                selectedLastUid: a(),
                hasMultiSelection: l(),
                blocks: u()
            }
        }), Object(a.withDispatch)(function(e) {
            var t = e("core/editor");
            return {
                onMultiSelect: t.multiSelect,
                onSelectBlock: t.selectBlock
            }
        })])(ml),
        gl = function(e) {
            function t(e) {
                vr()(this, t);
                var n = _r()(this, (t.__proto__ || br()(t)).apply(this, arguments));
                return e.recovery || (n.props.updateEditorSettings(e.settings), n.props.setupEditor(e.post, e.settings.autosave)), n
            }
            return jr()(t, e), Or()(t, [{
                key: "componentDidUpdate",
                value: function(e) {
                    this.props.settings !== e.settings && this.props.updateEditorSettings(this.props.settings)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.children,
                        n = e.undo,
                        r = e.redo,
                        o = e.createUndoLevel,
                        i = [
                            [Us, {
                                onUndo: n,
                                onRedo: r,
                                onCreateUndoLevel: o
                            }],
                            [or.SlotFillProvider],
                            [or.APIProvider, p()({}, wpApiSettings, Object(c.pick)(wp.api, ["postTypeRestBaseMapping", "taxonomyRestBaseMapping"]))],
                            [or.DropZoneProvider]
                        ];
                    return Object(c.flow)(i.map(function(e) {
                        var t = u()(e, 2),
                            n = t[0],
                            r = t[1];
                        return function(e) {
                            return Object(X.createElement)(n, r, e)
                        }
                    }))(t)
                }
            }]), t
        }(X.Component),
        Ol = Object(a.withDispatch)(function(e) {
            var t = e("core/editor"),
                n = t.setupEditor,
                r = t.updateEditorSettings;
            return {
                setupEditor: n,
                undo: t.undo,
                redo: t.redo,
                createUndoLevel: t.createUndoLevel,
                updateEditorSettings: r
            }
        })(gl);

    function yl(e) {
        var t = Object(E.getBlockSupport)(e, "align");
        if (Array.isArray(t)) return t;
        var n = [];
        return !0 === t && (n.push("left", "center", "right"), Object(E.hasBlockSupport)(e, "wideAlign", !0) && n.push("wide", "full")), n
    }
    var _l = Object(X.createHigherOrderComponent)(function(e) {
            return function(t) {
                var n = yl(t.name);
                return [n.length > 0 && t.isSelected && Object(X.createElement)(Gr, {
                    key: "align-controls"
                }, Object(X.createElement)(Vr, {
                    value: t.attributes.align,
                    onChange: function(e) {
                        return t.setAttributes({
                            align: e
                        })
                    },
                    controls: n
                })), Object(X.createElement)(e, p()({
                    key: "edit"
                }, t))]
            }
        }, "withToolbarControls"),
        kl = Object(X.createHigherOrderComponent)(function(e) {
            return function(t) {
                var n = t.block.attributes.align,
                    r = yl(t.block.name),
                    o = t.wrapperProps;
                return Object(c.includes)(r, n) && (o = p()({}, o, {
                    "data-align": n
                })), Object(X.createElement)(e, p()({}, t, {
                    wrapperProps: o
                }))
            }
        }, "withDataAlign");
    Object(ar.addFilter)("blocks.registerBlockType", "core/align/addAttribute", function(e) {
        return Object(E.hasBlockSupport)(e, "align") && (e.attributes = Object(c.assign)(e.attributes, {
            align: {
                type: "string"
            }
        })), e
    }), Object(ar.addFilter)("editor.BlockListBlock", "core/editor/align/with-data-align", kl), Object(ar.addFilter)("editor.BlockEdit", "core/editor/align/with-toolbar-controls", _l), Object(ar.addFilter)("blocks.getSaveContent.extraProps", "core/align/addAssignedAlign", function(e, t, n) {
        var r = n.align;
        return Object(c.includes)(yl(t), r) && (e.className = fr()("align" + r, e.className)), e
    });
    var jl = /[\s#]/g;
    var Sl = Object(X.createHigherOrderComponent)(function(e) {
        return function(t) {
            return Object(E.hasBlockSupport)(t.name, "anchor") && t.isSelected ? Object(X.createElement)(X.Fragment, null, Object(X.createElement)(e, t), Object(X.createElement)(Qi, null, Object(X.createElement)(or.TextControl, {
                label: Object(P.__)("HTML Anchor"),
                help: Object(P.__)("Anchors lets you link directly to a section on a page."),
                value: t.attributes.anchor || "",
                onChange: function(e) {
                    e = e.replace(jl, "-"), t.setAttributes({
                        anchor: e
                    })
                }
            }))) : Object(X.createElement)(e, t)
        }
    }, "withInspectorControl");
    Object(ar.addFilter)("blocks.registerBlockType", "core/anchor/attribute", function(e) {
        return Object(E.hasBlockSupport)(e, "anchor") && (e.attributes = Object(c.assign)(e.attributes, {
            anchor: {
                type: "string",
                source: "attribute",
                attribute: "id",
                selector: "*"
            }
        })), e
    }), Object(ar.addFilter)("editor.BlockEdit", "core/editor/anchor/with-inspector-control", Sl), Object(ar.addFilter)("blocks.getSaveContent.extraProps", "core/anchor/save-props", function(e, t, n) {
        return Object(E.hasBlockSupport)(t, "anchor") && (e.id = n.anchor), e
    });
    var El = Object(X.createHigherOrderComponent)(function(e) {
        return function(t) {
            return Object(E.hasBlockSupport)(t.name, "customClassName", !0) && t.isSelected ? Object(X.createElement)(X.Fragment, null, Object(X.createElement)(e, t), Object(X.createElement)(Qi, null, Object(X.createElement)(or.TextControl, {
                label: Object(P.__)("Additional CSS Class"),
                value: t.attributes.className || "",
                onChange: function(e) {
                    t.setAttributes({
                        className: e
                    })
                }
            }))) : Object(X.createElement)(e, t)
        }
    }, "withInspectorControl");

    function wl(e) {
        e = "<div data-custom-class-name>" + e + "</div>";
        var t = Object(E.parseWithAttributeSchema)(e, {
            type: "string",
            source: "attribute",
            selector: "[data-custom-class-name] > *",
            attribute: "class"
        });
        return t ? t.trim().split(/\s+/) : []
    }
    Object(ar.addFilter)("blocks.registerBlockType", "core/custom-class-name/attribute", function(e) {
        return Object(E.hasBlockSupport)(e, "customClassName", !0) && (e.attributes = Object(c.assign)(e.attributes, {
            className: {
                type: "string"
            }
        })), e
    }), Object(ar.addFilter)("editor.BlockEdit", "core/editor/custom-class-name/with-inspector-control", El), Object(ar.addFilter)("blocks.getSaveContent.extraProps", "core/custom-class-name/save-props", function(e, t, n) {
        return Object(E.hasBlockSupport)(t, "customClassName", !0) && n.className && (e.className = fr()(e.className, n.className)), e
    }), Object(ar.addFilter)("blocks.getBlockAttributes", "core/custom-class-name/addParsedDifference", function(e, t, n) {
        if (Object(E.hasBlockSupport)(t, "customClassName", !0)) {
            var r = wl(Object(E.getSaveContent)(t, e)),
                o = wl(n),
                i = Object(c.difference)(o, r),
                s = Object(c.compact)([e.className].concat(m()(i))).join(" ");
            s ? e.className = s : delete e.className
        }
        return e
    });
    var Tl = [Rr],
        Cl = Object(c.once)(function() {
            return Object(a.dispatch)("core/editor").fetchSharedBlocks()
        });
    Object(ar.addFilter)("editor.Autocomplete.completers", "editor/autocompleters/set-default-completers", function(e, t) {
        return e || (e = Tl.map(c.clone), t === Object(E.getDefaultBlockName)() && (e.push(Object(c.clone)(Nr)), Cl())), e
    }), Object(ar.addFilter)("blocks.getSaveContent.extraProps", "core/generated-class-name/save-props", function(e, t) {
        return Object(E.hasBlockSupport)(t, "className", !0) && ("string" == typeof e.className ? e.className = Object(c.uniq)([Object(E.getBlockDefaultClassName)(t.name)].concat(m()(e.className.split(" ")))).join(" ").trim() : e.className = Object(E.getBlockDefaultClassName)(t.name)), e
    }), Object(ar.addFilter)("blocks.registerBlockType", "core/layout/attribute", function(e) {
        return e.attributes = Object(c.assign)(e.attributes, {
            layout: {
                type: "string"
            }
        }), e
    }), Object(ar.addFilter)("blocks.getSaveContent.extraProps", "core/layout/save-props", function(e, t, n) {
        var r = n.layout;
        return r && (e.className = Object(c.compact)([e.className, "layout-" + r]).join(" ")), e
    }), Object(ar.addFilter)("blocks.switchToBlockType.transformedBlock", "core/layout/preserve-layout", function(e, t) {
        var n = Object(c.get)(t, [0, "attributes", "layout"]);
        return e.attributes.layout = n, e
    }), Object(ar.addFilter)("blocks.isUnmodifiedDefaultBlock.attributes", "core/layout/exclude-layout-attribute-check", function(e) {
        return Object(c.without)(e, "layout")
    }), n.d(t, "Autocomplete", function() {
        return Br
    }), n.d(t, "AlignmentToolbar", function() {
        return Ur
    }), n.d(t, "BlockAlignmentToolbar", function() {
        return Vr
    }), n.d(t, "BlockControls", function() {
        return Gr
    }), n.d(t, "BlockEdit", function() {
        return $r
    }), n.d(t, "BlockFormatControls", function() {
        return to
    }), n.d(t, "BlockIcon", function() {
        return xr
    }), n.d(t, "ColorPalette", function() {
        return ro
    }), n.d(t, "withColorContext", function() {
        return no
    }), n.d(t, "ContrastChecker", function() {
        return go
    }), n.d(t, "InnerBlocks", function() {
        return Gi
    }), n.d(t, "InspectorAdvancedControls", function() {
        return Qi
    }), n.d(t, "InspectorControls", function() {
        return rs
    }), n.d(t, "PanelColor", function() {
        return os
    }), n.d(t, "PlainText", function() {
        return is
    }), n.d(t, "RichText", function() {
        return Rs
    }), n.d(t, "RichTextProvider", function() {
        return Us
    }), n.d(t, "MediaPlaceholder", function() {
        return Fs
    }), n.d(t, "MediaUpload", function() {
        return ir
    }), n.d(t, "UrlInput", function() {
        return hs
    }), n.d(t, "UrlInputButton", function() {
        return Hs
    }), n.d(t, "AutosaveMonitor", function() {
        return Ks
    }), n.d(t, "DocumentOutline", function() {
        return $s
    }), n.d(t, "DocumentOutlineCheck", function() {
        return Js
    }), n.d(t, "DocumentTitle", function() {
        return Zs
    }), n.d(t, "EditorGlobalKeyboardShortcuts", function() {
        return tc
    }), n.d(t, "EditorHistoryRedo", function() {
        return nc
    }), n.d(t, "EditorHistoryUndo", function() {
        return rc
    }), n.d(t, "EditorNotices", function() {
        return ic
    }), n.d(t, "PageAttributesCheck", function() {
        return sc
    }), n.d(t, "PageAttributesOrder", function() {
        return lc
    }), n.d(t, "PageAttributesParent", function() {
        return fc
    }), n.d(t, "PageTemplate", function() {
        return hc
    }), n.d(t, "PostAuthor", function() {
        return vc
    }), n.d(t, "PostAuthorCheck", function() {
        return bc
    }), n.d(t, "PostComments", function() {
        return gc
    }), n.d(t, "PostExcerpt", function() {
        return Oc
    }), n.d(t, "PostExcerptCheck", function() {
        return yc
    }), n.d(t, "PostFeaturedImage", function() {
        return Tc
    }), n.d(t, "PostFeaturedImageCheck", function() {
        return kc
    }), n.d(t, "PostFormat", function() {
        return Bc
    }), n.d(t, "PostFormatCheck", function() {
        return Cc
    }), n.d(t, "PostLastRevision", function() {
        return Ic
    }), n.d(t, "PostLastRevisionCheck", function() {
        return xc
    }), n.d(t, "PostPendingStatus", function() {
        return Ac
    }), n.d(t, "PostPendingStatusCheck", function() {
        return Dc
    }), n.d(t, "PostPingbacks", function() {
        return Nc
    }), n.d(t, "PostPreviewButton", function() {
        return Lc
    }), n.d(t, "PostPublishButton", function() {
        return Fc
    }), n.d(t, "PostPublishButtonLabel", function() {
        return Uc
    }), n.d(t, "PostPublishPanel", function() {
        return Jc
    }), n.d(t, "PostPublishPanelToggle", function() {
        return Qc
    }), n.d(t, "PostSavedState", function() {
        return ta
    }), n.d(t, "PostSchedule", function() {
        return Wc
    }), n.d(t, "PostScheduleCheck", function() {
        return na
    }), n.d(t, "PostScheduleLabel", function() {
        return qc
    }), n.d(t, "PostSticky", function() {
        return oa
    }), n.d(t, "PostStickyCheck", function() {
        return ra
    }), n.d(t, "PostSwitchToDraftButton", function() {
        return Zc
    }), n.d(t, "PostTaxonomies", function() {
        return ba
    }), n.d(t, "PostTaxonomiesCheck", function() {
        return ma
    }), n.d(t, "PostTextEditor", function() {
        return ga
    }), n.d(t, "PostTitle", function() {
        return Ta
    }), n.d(t, "PostTrash", function() {
        return Ca
    }), n.d(t, "PostTrashCheck", function() {
        return Pa
    }), n.d(t, "PostTypeSupportCheck", function() {
        return cc
    }), n.d(t, "PostVisibility", function() {
        return Kc
    }), n.d(t, "PostVisibilityLabel", function() {
        return zc
    }), n.d(t, "PostVisibilityCheck", function() {
        return Ba
    }), n.d(t, "TableOfContents", function() {
        return za
    }), n.d(t, "UnsavedChangesWarning", function() {
        return qa
    }), n.d(t, "WordCount", function() {
        return Va
    }), n.d(t, "BlockInspector", function() {
        return Xa
    }), n.d(t, "BlockList", function() {
        return Wi
    }), n.d(t, "BlockMover", function() {
        return Io
    }), n.d(t, "BlockSelectionClearer", function() {
        return Ja
    }), n.d(t, "BlockSettingsMenu", function() {
        return qo
    }), n.d(t, "_BlockSettingsMenuFirstItem", function() {
        return zo
    }), n.d(t, "BlockTitle", function() {
        return ni
    }), n.d(t, "BlockToolbar", function() {
        return nl
    }), n.d(t, "CopyHandler", function() {
        return ol
    }), n.d(t, "DefaultBlockAppender", function() {
        return Fi
    }), n.d(t, "ErrorBoundary", function() {
        return sl
    }), n.d(t, "Inserter", function() {
        return wi
    }), n.d(t, "MultiBlocksSwitcher", function() {
        return cl
    }), n.d(t, "MultiSelectScrollIntoView", function() {
        return ll
    }), n.d(t, "NavigableToolbar", function() {
        return ai
    }), n.d(t, "ObserveTyping", function() {
        return pl
    }), n.d(t, "PreserveScrollInReorder", function() {
        return hl
    }), n.d(t, "SkipToSelectedBlock", function() {
        return Ya
    }), n.d(t, "Warning", function() {
        return Go
    }), n.d(t, "WritingFlow", function() {
        return vl
    }), n.d(t, "EditorProvider", function() {
        return Ol
    }), n.d(t, "blockAutocompleter", function() {
        return Nr
    }), n.d(t, "userAutocompleter", function() {
        return Rr
    }), n.d(t, "getColorClass", function() {
        return ao
    }), n.d(t, "getColorName", function() {
        return co
    }), n.d(t, "withColors", function() {
        return bo
    }), n.d(t, "editorMediaUpload", function() {
        return Ms
    })
}, , , , , , , , , , , , , , , , , , function(e, t) {
    e.exports = function(e, t, n) {
        return ((n = window.getComputedStyle) ? n(e) : e.currentStyle)[t.replace(/-(\w)/gi, function(e, t) {
            return t.toUpperCase()
        })]
    }
}, function(e, t, n) {
    var r = n(344);
    e.exports = function(e) {
        var t = r(e, "line-height"),
            n = parseFloat(t, 10);
        if (t === n + "") {
            var o = e.style.lineHeight;
            e.style.lineHeight = t + "em", t = r(e, "line-height"), n = parseFloat(t, 10), o ? e.style.lineHeight = o : delete e.style.lineHeight
        }
        if (-1 !== t.indexOf("pt") ? (n *= 4, n /= 3) : -1 !== t.indexOf("mm") ? (n *= 96, n /= 25.4) : -1 !== t.indexOf("cm") ? (n *= 96, n /= 2.54) : -1 !== t.indexOf("in") ? n *= 96 : -1 !== t.indexOf("pc") && (n *= 16), n = Math.round(n), "normal" === t) {
            var i = e.nodeName,
                s = document.createElement(i);
            s.innerHTML = "&nbsp;", "TEXTAREA" === i.toUpperCase() && s.setAttribute("rows", "1");
            var c = r(e, "font-size");
            s.style.fontSize = c, s.style.padding = "0px", s.style.border = "0px";
            var a = document.body;
            a.appendChild(s), n = s.offsetHeight, a.removeChild(s)
        }
        return n
    }
}, function(e, t, n) {
    var r, o, i;
    /*!
    	autosize 4.0.2
    	license: MIT
    	http://www.jacklmoore.com/autosize
    */
    o = [e, t], void 0 === (i = "function" == typeof(r = function(e, t) {
        "use strict";
        var n, r, o = "function" == typeof Map ? new Map : (n = [], r = [], {
                has: function(e) {
                    return n.indexOf(e) > -1
                },
                get: function(e) {
                    return r[n.indexOf(e)]
                },
                set: function(e, t) {
                    -1 === n.indexOf(e) && (n.push(e), r.push(t))
                },
                delete: function(e) {
                    var t = n.indexOf(e);
                    t > -1 && (n.splice(t, 1), r.splice(t, 1))
                }
            }),
            i = function(e) {
                return new Event(e, {
                    bubbles: !0
                })
            };
        try {
            new Event("test")
        } catch (e) {
            i = function(e) {
                var t = document.createEvent("Event");
                return t.initEvent(e, !0, !1), t
            }
        }

        function s(e) {
            if (e && e.nodeName && "TEXTAREA" === e.nodeName && !o.has(e)) {
                var t = null,
                    n = null,
                    r = null,
                    s = function() {
                        e.clientWidth !== n && d()
                    },
                    c = function(t) {
                        window.removeEventListener("resize", s, !1), e.removeEventListener("input", d, !1), e.removeEventListener("keyup", d, !1), e.removeEventListener("autosize:destroy", c, !1), e.removeEventListener("autosize:update", d, !1), Object.keys(t).forEach(function(n) {
                            e.style[n] = t[n]
                        }), o.delete(e)
                    }.bind(e, {
                        height: e.style.height,
                        resize: e.style.resize,
                        overflowY: e.style.overflowY,
                        overflowX: e.style.overflowX,
                        wordWrap: e.style.wordWrap
                    });
                e.addEventListener("autosize:destroy", c, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", d, !1), window.addEventListener("resize", s, !1), e.addEventListener("input", d, !1), e.addEventListener("autosize:update", d, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", o.set(e, {
                    destroy: c,
                    update: d
                }), "vertical" === (a = window.getComputedStyle(e, null)).resize ? e.style.resize = "none" : "both" === a.resize && (e.style.resize = "horizontal"), t = "content-box" === a.boxSizing ? -(parseFloat(a.paddingTop) + parseFloat(a.paddingBottom)) : parseFloat(a.borderTopWidth) + parseFloat(a.borderBottomWidth), isNaN(t) && (t = 0), d()
            }
            var a;

            function l(t) {
                var n = e.style.width;
                e.style.width = "0px", e.offsetWidth, e.style.width = n, e.style.overflowY = t
            }

            function u() {
                if (0 !== e.scrollHeight) {
                    var r = function(e) {
                            for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push({
                                node: e.parentNode,
                                scrollTop: e.parentNode.scrollTop
                            }), e = e.parentNode;
                            return t
                        }(e),
                        o = document.documentElement && document.documentElement.scrollTop;
                    e.style.height = "", e.style.height = e.scrollHeight + t + "px", n = e.clientWidth, r.forEach(function(e) {
                        e.node.scrollTop = e.scrollTop
                    }), o && (document.documentElement.scrollTop = o)
                }
            }

            function d() {
                u();
                var t = Math.round(parseFloat(e.style.height)),
                    n = window.getComputedStyle(e, null),
                    o = "content-box" === n.boxSizing ? Math.round(parseFloat(n.height)) : e.offsetHeight;
                if (o < t ? "hidden" === n.overflowY && (l("scroll"), u(), o = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== n.overflowY && (l("hidden"), u(), o = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), r !== o) {
                    r = o;
                    var s = i("autosize:resized");
                    try {
                        e.dispatchEvent(s)
                    } catch (e) {}
                }
            }
        }

        function c(e) {
            var t = o.get(e);
            t && t.destroy()
        }

        function a(e) {
            var t = o.get(e);
            t && t.update()
        }
        var l = null;
        "undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((l = function(e) {
            return e
        }).destroy = function(e) {
            return e
        }, l.update = function(e) {
            return e
        }) : ((l = function(e, t) {
            return e && Array.prototype.forEach.call(e.length ? e : [e], function(e) {
                return s(e)
            }), e
        }).destroy = function(e) {
            return e && Array.prototype.forEach.call(e.length ? e : [e], c), e
        }, l.update = function(e) {
            return e && Array.prototype.forEach.call(e.length ? e : [e], a), e
        }), t.default = l, e.exports = t.default
    }) ? r.apply(t, o) : r) || (e.exports = i)
}, function(e, t, n) {
    "use strict";
    var r, o = this && this.__extends || (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            },
            function(e, t) {
                function n() {
                    this.constructor = e
                }
                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
        i = this && this.__assign || Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        },
        s = this && this.__rest || function(e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && (n[r[o]] = e[r[o]])
            }
            return n
        };
    t.__esModule = !0;
    var c = n(15),
        a = n(198),
        l = n(346),
        u = n(345),
        d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    lineHeight: null
                }, t.dispatchEvent = function(e) {
                    var n = document.createEvent("Event");
                    n.initEvent(e, !0, !1), t.textarea.dispatchEvent(n)
                }, t.updateLineHeight = function() {
                    t.setState({
                        lineHeight: u(t.textarea)
                    })
                }, t.onChange = function(e) {
                    var n = t.props.onChange;
                    t.currentValue = e.currentTarget.value, n && n(e)
                }, t.saveDOMNodeRef = function(e) {
                    var n = t.props.innerRef;
                    n && n(e), t.textarea = e
                }, t.getLocals = function() {
                    var e = t,
                        n = e.props,
                        r = (n.onResize, n.maxRows),
                        o = (n.onChange, n.style),
                        c = (n.innerRef, s(n, ["onResize", "maxRows", "onChange", "style", "innerRef"])),
                        a = e.state.lineHeight,
                        l = e.saveDOMNodeRef,
                        u = r && a ? a * r : null;
                    return i({}, c, {
                        saveDOMNodeRef: l,
                        style: u ? i({}, o, {
                            maxHeight: u
                        }) : o,
                        onChange: t.onChange
                    })
                }, t
            }
            return o(t, e), t.prototype.componentDidMount = function() {
                var e = this,
                    t = this.props,
                    n = t.onResize;
                "number" == typeof t.maxRows && this.updateLineHeight(), setTimeout(function() {
                    return l(e.textarea)
                }), n && this.textarea.addEventListener("autosize:resized", n)
            }, t.prototype.componentWillUnmount = function() {
                var e = this.props.onResize;
                e && this.textarea.removeEventListener("autosize:resized", e), this.dispatchEvent("autosize:destroy")
            }, t.prototype.render = function() {
                var e = this.getLocals(),
                    t = e.children,
                    n = e.saveDOMNodeRef,
                    r = s(e, ["children", "saveDOMNodeRef"]);
                return c.createElement("textarea", i({}, r, {
                    ref: n
                }), t)
            }, t.prototype.componentDidUpdate = function() {
                this.props.value !== this.currentValue && this.dispatchEvent("autosize:update")
            }, t.defaultProps = {
                rows: 1
            }, t.propTypes = {
                rows: a.number,
                maxRows: a.number,
                onResize: a.func,
                innerRef: a.func
            }, t
        }(c.Component);
    t.default = d
}, function(e, t, n) {
    "use strict";
    var r = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    };
    var o = "BEGIN",
        i = "COMMIT",
        s = "REVERT",
        c = [];

    function a(e, t) {
        return e.optimist && e.optimist.id === t
    }

    function l(e, t) {
        if (!e || "object" != typeof e || Array.isArray(e)) throw new TypeError('Error while handling "' + t.type + '": Optimist requires that state is always a plain object.')
    }

    function u(e) {
        if (e) {
            var t = e.optimist;
            return {
                optimist: void 0 === t ? c : t,
                innerState: function(e, t) {
                    var n = {};
                    for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                    return n
                }(e, ["optimist"])
            }
        }
        return {
            optimist: c,
            innerState: e
        }
    }
    e.exports = function(e) {
        function t(t, n, o) {
            return t.length && (t = t.concat([{
                action: o
            }])), l(n = e(n, o), o), r({
                optimist: t
            }, n)
        }
        return function(n, c) {
            if (c.optimist) switch (c.optimist.type) {
                case o:
                    return function(t, n) {
                        var o = u(t),
                            i = o.optimist,
                            s = o.innerState;
                        return i = i.concat([{
                            beforeState: s,
                            action: n
                        }]), l(s = e(s, n), n), r({
                            optimist: i
                        }, s)
                    }(n, c);
                case i:
                    return function(e, n) {
                        var r = u(e),
                            o = r.optimist,
                            i = r.innerState,
                            s = [],
                            c = !1,
                            l = !1;
                        o.forEach(function(e) {
                            c ? e.beforeState && a(e.action, n.optimist.id) ? (l = !0, s.push({
                                action: e.action
                            })) : s.push(e) : e.beforeState && !a(e.action, n.optimist.id) ? (c = !0, s.push(e)) : e.beforeState && a(e.action, n.optimist.id) && (l = !0)
                        }), l || console.error('Cannot commit transaction with id "' + n.optimist.id + '" because it does not exist');
                        return t(o = s, i, n)
                    }(n, c);
                case s:
                    return function(n, r) {
                        var o = u(n),
                            i = o.optimist,
                            s = o.innerState,
                            c = [],
                            d = !1,
                            p = !1,
                            f = s;
                        i.forEach(function(t) {
                            t.beforeState && a(t.action, r.optimist.id) && (f = t.beforeState, p = !0), a(t.action, r.optimist.id) || (t.beforeState && (d = !0), d && (p && t.beforeState ? c.push({
                                beforeState: f,
                                action: t.action
                            }) : c.push(t)), p && (f = e(f, t.action), l(s, r)))
                        }), p || console.error('Cannot revert transaction with id "' + r.optimist.id + '" because it does not exist');
                        return t(i = c, f, r)
                    }(n, c)
            }
            var d = u(n),
                p = d.optimist,
                f = d.innerState;
            if (n && !p.length) {
                var h = e(f, c);
                return h === f ? n : (l(h, c), r({
                    optimist: p
                }, h))
            }
            return t(p, f, c)
        }
    }, e.exports.BEGIN = o, e.exports.COMMIT = i, e.exports.REVERT = s
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}]);