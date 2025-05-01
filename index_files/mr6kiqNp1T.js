/*tvn-2.com - mr6kiqNp1T - 2025-04-28 11:49:44 DESDE GL */

window.delayStartup = false;
window._mow_adsData__11_ = [];

window.blockedPages = '';
window.blockedPages = window.blockedPages.split(',');
if (window.blockedPages.includes(window.location.href)) {
    window._mow_adsData__11_ = [];
}

window.blockedPagesContains = '';
window.blockedPagesContains = window.blockedPagesContains.split(',');
window.blockedPagesContains.forEach((blockedPagesContain)=>{
    if (blockedPagesContain !== '' && window.location.href.includes(blockedPagesContain)) {
        window._mow_adsData__11_ = [];
    }
}
);

window.smart = true;
window.smart_loaded = false;
var sas = sas || {};
sas.cmd = sas.cmd || [];

window.receptivity = false;
window.receptivity_events = [];
window.load_ads_via_ajax = false;
window.MowNicoPreAR = [];

window.mowEnableDebug = ()=>{
    window.localStorage.setItem("enabledDebug", true);
}

window.mowDisableDebug = ()=>{
    window.localStorage.setItem("enabledDebug", false);
}

window.mowStatusDebug = ()=>{
    return window.localStorage.getItem("enabledDebug");
}

!function() {
    "use strict";
    function _typeof(t) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function _classCallCheck(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function _defineProperties(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    function _createClass(t, e, i) {
        return e && _defineProperties(t.prototype, e),
        i && _defineProperties(t, i),
        t
    }
    function _inherits(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }),
        e && _setPrototypeOf(t, e)
    }
    function _getPrototypeOf(t) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        )(t)
    }
    function _setPrototypeOf(t, e) {
        return (_setPrototypeOf = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function _isNativeReflectConstruct() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ("function" == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
            !0
        } catch (t) {
            return !1
        }
    }
    function _assertThisInitialized(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function _possibleConstructorReturn(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? _assertThisInitialized(t) : e
    }
    function _createSuper(t) {
        var e = _isNativeReflectConstruct();
        return function() {
            var i, n = _getPrototypeOf(t);
            if (e) {
                var o = _getPrototypeOf(this).constructor;
                i = Reflect.construct(n, arguments, o)
            } else
                i = n.apply(this, arguments);
            return _possibleConstructorReturn(this, i)
        }
    }
    function _superPropBase(t, e) {
        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = _getPrototypeOf(t)); )
            ;
        return t
    }
    function _get(t, e, i) {
        return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
            var n = _superPropBase(t, e);
            if (n) {
                var o = Object.getOwnPropertyDescriptor(n, e);
                return o.get ? o.get.call(i) : o.value
            }
        }
        )(t, e, i || t)
    }
    function _slicedToArray(t, e) {
        return _arrayWithHoles(t) || _iterableToArrayLimit(t, e) || _unsupportedIterableToArray(t, e) || _nonIterableRest()
    }
    function _arrayWithHoles(t) {
        if (Array.isArray(t))
            return t
    }
    function _iterableToArrayLimit(t, e) {
        var i = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (null != i) {
            var n, o, r = [], s = !0, a = !1;
            try {
                for (i = i.call(t); !(s = (n = i.next()).done) && (r.push(n.value),
                !e || r.length !== e); s = !0)
                    ;
            } catch (t) {
                a = !0,
                o = t
            } finally {
                try {
                    s || null == i.return || i.return()
                } finally {
                    if (a)
                        throw o
                }
            }
            return r
        }
    }
    function _unsupportedIterableToArray(t, e) {
        if (t) {
            if ("string" == typeof t)
                return _arrayLikeToArray(t, e);
            var i = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === i && t.constructor && (i = t.constructor.name),
            "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? _arrayLikeToArray(t, e) : void 0
        }
    }
    function _arrayLikeToArray(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++)
            n[i] = t[i];
        return n
    }
    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    function _createForOfIteratorHelper(t, e) {
        var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!i) {
            if (Array.isArray(t) || (i = _unsupportedIterableToArray(t)) || e && t && "number" == typeof t.length) {
                i && (t = i);
                var n = 0
                  , o = function() {};
                return {
                    s: o,
                    n: function() {
                        return n >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[n++]
                        }
                    },
                    e: function(t) {
                        throw t
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var r, s = !0, a = !1;
        return {
            s: function() {
                i = i.call(t)
            },
            n: function() {
                var t = i.next();
                return s = t.done,
                t
            },
            e: function(t) {
                a = !0,
                r = t
            },
            f: function() {
                try {
                    s || null == i.return || i.return()
                } finally {
                    if (a)
                        throw r
                }
            }
        }
    }
    var commonjsGlobal = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function createCommonjsModule(t, e) {
        return t(e = {
            exports: {}
        }, e.exports),
        e.exports
    }
    var check = function(t) {
        return t && t.Math == Math && t
    }, global_1 = check("object" == ("undefined" == typeof globalThis ? "undefined" : _typeof(globalThis)) && globalThis) || check("object" == ("undefined" == typeof window ? "undefined" : _typeof(window)) && window) || check("object" == ("undefined" == typeof self ? "undefined" : _typeof(self)) && self) || check("object" == _typeof(commonjsGlobal) && commonjsGlobal) || function() {
        return this
    }() || Function("return this")(), isPure = !1, fails = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }, descriptors = !fails(function() {
        return 7 != Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1]
    }), isObject = function(t) {
        return "object" === _typeof(t) ? null !== t : "function" == typeof t
    }, document$1 = global_1.document, EXISTS = isObject(document$1) && isObject(document$1.createElement), documentCreateElement = function(t) {
        return EXISTS ? document$1.createElement(t) : {}
    }, ie8DomDefine = !descriptors && !fails(function() {
        return 7 != Object.defineProperty(documentCreateElement("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }), anObject = function(t) {
        if (!isObject(t))
            throw TypeError(String(t) + " is not an object");
        return t
    }, toPrimitive = function(t, e) {
        if (!isObject(t))
            return t;
        var i, n;
        if (e && "function" == typeof (i = t.toString) && !isObject(n = i.call(t)))
            return n;
        if ("function" == typeof (i = t.valueOf) && !isObject(n = i.call(t)))
            return n;
        if (!e && "function" == typeof (i = t.toString) && !isObject(n = i.call(t)))
            return n;
        throw TypeError("Can't convert object to primitive value")
    }, $defineProperty = Object.defineProperty, f = descriptors ? $defineProperty : function(t, e, i) {
        if (anObject(t),
        e = toPrimitive(e, !0),
        anObject(i),
        ie8DomDefine)
            try {
                return $defineProperty(t, e, i)
            } catch (t) {}
        if ("get"in i || "set"in i)
            throw TypeError("Accessors not supported");
        return "value"in i && (t[e] = i.value),
        t
    }
    , objectDefineProperty = {
        f: f
    }, createPropertyDescriptor = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }, createNonEnumerableProperty = descriptors ? function(t, e, i) {
        return objectDefineProperty.f(t, e, createPropertyDescriptor(1, i))
    }
    : function(t, e, i) {
        return t[e] = i,
        t
    }
    , setGlobal = function(t, e) {
        try {
            createNonEnumerableProperty(global_1, t, e)
        } catch (i) {
            global_1[t] = e
        }
        return e
    }, SHARED = "__core-js_shared__", store = global_1[SHARED] || setGlobal(SHARED, {}), sharedStore = store, shared = createCommonjsModule(function(t) {
        (t.exports = function(t, e) {
            return sharedStore[t] || (sharedStore[t] = void 0 !== e ? e : {})
        }
        )("versions", []).push({
            version: "3.15.2",
            mode: "global",
            copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
        })
    }), requireObjectCoercible = function(t) {
        if (null == t)
            throw TypeError("Can't call method on " + t);
        return t
    }, toObject = function(t) {
        return Object(requireObjectCoercible(t))
    }, hasOwnProperty = {}.hasOwnProperty, has = Object.hasOwn || function(t, e) {
        return hasOwnProperty.call(toObject(t), e)
    }
    , id$1 = 0, postfix = Math.random(), uid = function(t) {
        return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++id$1 + postfix).toString(36)
    }, path = global_1, aFunction = function(t) {
        return "function" == typeof t ? t : void 0
    }, getBuiltIn = function(t, e) {
        return arguments.length < 2 ? aFunction(path[t]) || aFunction(global_1[t]) : path[t] && path[t][e] || global_1[t] && global_1[t][e]
    }, engineUserAgent = getBuiltIn("navigator", "userAgent") || "", process = global_1.process, versions = process && process.versions, v8 = versions && versions.v8, match, version;
    v8 ? (match = v8.split("."),
    version = match[0] < 4 ? 1 : match[0] + match[1]) : engineUserAgent && (match = engineUserAgent.match(/Edge\/(\d+)/),
    (!match || match[1] >= 74) && (match = engineUserAgent.match(/Chrome\/(\d+)/),
    match && (version = match[1])));
    var engineV8Version = version && +version
      , nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function() {
        var t = Symbol();
        return !String(t) || !(Object(t)instanceof Symbol) || !Symbol.sham && engineV8Version && engineV8Version < 41
    })
      , useSymbolAsUid = nativeSymbol && !Symbol.sham && "symbol" == _typeof(Symbol.iterator)
      , WellKnownSymbolsStore = shared("wks")
      , _Symbol = global_1.Symbol
      , createWellKnownSymbol = useSymbolAsUid ? _Symbol : _Symbol && _Symbol.withoutSetter || uid
      , wellKnownSymbol = function(t) {
        return has(WellKnownSymbolsStore, t) && (nativeSymbol || "string" == typeof WellKnownSymbolsStore[t]) || (nativeSymbol && has(_Symbol, t) ? WellKnownSymbolsStore[t] = _Symbol[t] : WellKnownSymbolsStore[t] = createWellKnownSymbol("Symbol." + t)),
        WellKnownSymbolsStore[t]
    }
      , TO_STRING_TAG = wellKnownSymbol("toStringTag")
      , test = {};
    test[TO_STRING_TAG] = "z";
    var toStringTagSupport = "[object z]" === String(test)
      , functionToString = Function.toString;
    "function" != typeof sharedStore.inspectSource && (sharedStore.inspectSource = function(t) {
        return functionToString.call(t)
    }
    );
    var inspectSource = sharedStore.inspectSource, WeakMap$1 = global_1.WeakMap, nativeWeakMap = "function" == typeof WeakMap$1 && /native code/.test(inspectSource(WeakMap$1)), keys = shared("keys"), sharedKey = function(t) {
        return keys[t] || (keys[t] = uid(t))
    }, hiddenKeys = {}, OBJECT_ALREADY_INITIALIZED = "Object already initialized", WeakMap$2 = global_1.WeakMap, set$1, get, has$1, enforce = function(t) {
        return has$1(t) ? get(t) : set$1(t, {})
    }, getterFor = function(t) {
        return function(e) {
            var i;
            if (!isObject(e) || (i = get(e)).type !== t)
                throw TypeError("Incompatible receiver, " + t + " required");
            return i
        }
    };
    if (nativeWeakMap || sharedStore.state) {
        var store$1 = sharedStore.state || (sharedStore.state = new WeakMap$2)
          , wmget = store$1.get
          , wmhas = store$1.has
          , wmset = store$1.set;
        set$1 = function(t, e) {
            if (wmhas.call(store$1, t))
                throw new TypeError(OBJECT_ALREADY_INITIALIZED);
            return e.facade = t,
            wmset.call(store$1, t, e),
            e
        }
        ,
        get = function(t) {
            return wmget.call(store$1, t) || {}
        }
        ,
        has$1 = function(t) {
            return wmhas.call(store$1, t)
        }
    } else {
        var STATE = sharedKey("state");
        hiddenKeys[STATE] = !0,
        set$1 = function(t, e) {
            if (has(t, STATE))
                throw new TypeError(OBJECT_ALREADY_INITIALIZED);
            return e.facade = t,
            createNonEnumerableProperty(t, STATE, e),
            e
        }
        ,
        get = function(t) {
            return has(t, STATE) ? t[STATE] : {}
        }
        ,
        has$1 = function(t) {
            return has(t, STATE)
        }
    }
    var internalState = {
        set: set$1,
        get: get,
        has: has$1,
        enforce: enforce,
        getterFor: getterFor
    }
      , redefine = createCommonjsModule(function(t) {
        var e = internalState.get
          , i = internalState.enforce
          , n = String(String).split("String");
        (t.exports = function(t, e, o, r) {
            var s, a = !!r && !!r.unsafe, l = !!r && !!r.enumerable, c = !!r && !!r.noTargetGet;
            "function" == typeof o && ("string" != typeof e || has(o, "name") || createNonEnumerableProperty(o, "name", e),
            (s = i(o)).source || (s.source = n.join("string" == typeof e ? e : ""))),
            t !== global_1 ? (a ? !c && t[e] && (l = !0) : delete t[e],
            l ? t[e] = o : createNonEnumerableProperty(t, e, o)) : l ? t[e] = o : setGlobal(e, o)
        }
        )(Function.prototype, "toString", function() {
            return "function" == typeof this && e(this).source || inspectSource(this)
        })
    })
      , toString = {}.toString
      , classofRaw = function(t) {
        return toString.call(t).slice(8, -1)
    }
      , TO_STRING_TAG$1 = wellKnownSymbol("toStringTag")
      , CORRECT_ARGUMENTS = "Arguments" == classofRaw(function() {
        return arguments
    }())
      , tryGet = function(t, e) {
        try {
            return t[e]
        } catch (t) {}
    }
      , classof = toStringTagSupport ? classofRaw : function(t) {
        var e, i, n;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (i = tryGet(e = Object(t), TO_STRING_TAG$1)) ? i : CORRECT_ARGUMENTS ? classofRaw(e) : "Object" == (n = classofRaw(e)) && "function" == typeof e.callee ? "Arguments" : n
    }
      , objectToString = toStringTagSupport ? {}.toString : function() {
        return "[object " + classof(this) + "]"
    }
    ;
    toStringTagSupport || redefine(Object.prototype, "toString", objectToString, {
        unsafe: !0
    });
    var $propertyIsEnumerable = {}.propertyIsEnumerable, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
        1: 2
    }, 1), f$1 = NASHORN_BUG ? function(t) {
        var e = getOwnPropertyDescriptor(this, t);
        return !!e && e.enumerable
    }
    : $propertyIsEnumerable, objectPropertyIsEnumerable = {
        f: f$1
    }, split = "".split, indexedObject = fails(function() {
        return !Object("z").propertyIsEnumerable(0)
    }) ? function(t) {
        return "String" == classofRaw(t) ? split.call(t, "") : Object(t)
    }
    : Object, toIndexedObject = function(t) {
        return indexedObject(requireObjectCoercible(t))
    }, $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, f$2 = descriptors ? $getOwnPropertyDescriptor : function(t, e) {
        if (t = toIndexedObject(t),
        e = toPrimitive(e, !0),
        ie8DomDefine)
            try {
                return $getOwnPropertyDescriptor(t, e)
            } catch (t) {}
        if (has(t, e))
            return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(t, e), t[e])
    }
    , objectGetOwnPropertyDescriptor = {
        f: f$2
    }, ceil = Math.ceil, floor = Math.floor, toInteger = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? floor : ceil)(t)
    }, min = Math.min, toLength = function(t) {
        return t > 0 ? min(toInteger(t), 9007199254740991) : 0
    }, max = Math.max, min$1 = Math.min, toAbsoluteIndex = function(t, e) {
        var i = toInteger(t);
        return i < 0 ? max(i + e, 0) : min$1(i, e)
    }, createMethod = function(t) {
        return function(e, i, n) {
            var o, r = toIndexedObject(e), s = toLength(r.length), a = toAbsoluteIndex(n, s);
            if (t && i != i) {
                for (; s > a; )
                    if ((o = r[a++]) != o)
                        return !0
            } else
                for (; s > a; a++)
                    if ((t || a in r) && r[a] === i)
                        return t || a || 0;
            return !t && -1
        }
    }, arrayIncludes = {
        includes: createMethod(!0),
        indexOf: createMethod(!1)
    }, indexOf = arrayIncludes.indexOf, objectKeysInternal = function(t, e) {
        var i, n = toIndexedObject(t), o = 0, r = [];
        for (i in n)
            !has(hiddenKeys, i) && has(n, i) && r.push(i);
        for (; e.length > o; )
            has(n, i = e[o++]) && (~indexOf(r, i) || r.push(i));
        return r
    }, enumBugKeys = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], hiddenKeys$1 = enumBugKeys.concat("length", "prototype"), f$3 = Object.getOwnPropertyNames || function(t) {
        return objectKeysInternal(t, hiddenKeys$1)
    }
    , objectGetOwnPropertyNames = {
        f: f$3
    }, f$4 = Object.getOwnPropertySymbols, objectGetOwnPropertySymbols = {
        f: f$4
    }, ownKeys$1 = getBuiltIn("Reflect", "ownKeys") || function(t) {
        var e = objectGetOwnPropertyNames.f(anObject(t))
          , i = objectGetOwnPropertySymbols.f;
        return i ? e.concat(i(t)) : e
    }
    , copyConstructorProperties = function(t, e) {
        for (var i = ownKeys$1(e), n = objectDefineProperty.f, o = objectGetOwnPropertyDescriptor.f, r = 0; r < i.length; r++) {
            var s = i[r];
            has(t, s) || n(t, s, o(e, s))
        }
    }, replacement = /#|\.prototype\./, isForced = function(t, e) {
        var i = data[normalize(t)];
        return i == POLYFILL || i != NATIVE && ("function" == typeof e ? fails(e) : !!e)
    }, normalize = isForced.normalize = function(t) {
        return String(t).replace(replacement, ".").toLowerCase()
    }
    , data = isForced.data = {}, NATIVE = isForced.NATIVE = "N", POLYFILL = isForced.POLYFILL = "P", isForced_1 = isForced, getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f, _export = function(t, e) {
        var i, n, o, r, s, a = t.target, l = t.global, c = t.stat;
        if (i = l ? global_1 : c ? global_1[a] || setGlobal(a, {}) : (global_1[a] || {}).prototype)
            for (n in e) {
                if (r = e[n],
                o = t.noTargetGet ? (s = getOwnPropertyDescriptor$1(i, n)) && s.value : i[n],
                !isForced_1(l ? n : a + (c ? "." : "#") + n, t.forced) && void 0 !== o) {
                    if (_typeof(r) === _typeof(o))
                        continue;
                    copyConstructorProperties(r, o)
                }
                (t.sham || o && o.sham) && createNonEnumerableProperty(r, "sham", !0),
                redefine(i, n, r, t)
            }
    }, nativePromiseConstructor = global_1.Promise, redefineAll = function(t, e, i) {
        for (var n in e)
            redefine(t, n, e[n], i);
        return t
    }, aPossiblePrototype = function(t) {
        if (!isObject(t) && null !== t)
            throw TypeError("Can't set " + String(t) + " as a prototype");
        return t
    }, objectSetPrototypeOf = Object.setPrototypeOf || ("__proto__"in {} ? function() {
        var t, e = !1, i = {};
        try {
            (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(i, []),
            e = i instanceof Array
        } catch (t) {}
        return function(i, n) {
            return anObject(i),
            aPossiblePrototype(n),
            e ? t.call(i, n) : i.__proto__ = n,
            i
        }
    }() : void 0), defineProperty = objectDefineProperty.f, TO_STRING_TAG$2 = wellKnownSymbol("toStringTag"), setToStringTag = function(t, e, i) {
        t && !has(t = i ? t : t.prototype, TO_STRING_TAG$2) && defineProperty(t, TO_STRING_TAG$2, {
            configurable: !0,
            value: e
        })
    }, SPECIES = wellKnownSymbol("species"), setSpecies = function(t) {
        var e = getBuiltIn(t)
          , i = objectDefineProperty.f;
        descriptors && e && !e[SPECIES] && i(e, SPECIES, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }, aFunction$1 = function(t) {
        if ("function" != typeof t)
            throw TypeError(String(t) + " is not a function");
        return t
    }, anInstance = function(t, e, i) {
        if (!(t instanceof e))
            throw TypeError("Incorrect " + (i ? i + " " : "") + "invocation");
        return t
    }, iterators = {}, ITERATOR = wellKnownSymbol("iterator"), ArrayPrototype = Array.prototype, isArrayIteratorMethod = function(t) {
        return void 0 !== t && (iterators.Array === t || ArrayPrototype[ITERATOR] === t)
    }, functionBindContext = function(t, e, i) {
        if (aFunction$1(t),
        void 0 === e)
            return t;
        switch (i) {
        case 0:
            return function() {
                return t.call(e)
            }
            ;
        case 1:
            return function(i) {
                return t.call(e, i)
            }
            ;
        case 2:
            return function(i, n) {
                return t.call(e, i, n)
            }
            ;
        case 3:
            return function(i, n, o) {
                return t.call(e, i, n, o)
            }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }, ITERATOR$1 = wellKnownSymbol("iterator"), getIteratorMethod = function(t) {
        if (null != t)
            return t[ITERATOR$1] || t["@@iterator"] || iterators[classof(t)]
    }, iteratorClose = function(t) {
        var e = t.return;
        if (void 0 !== e)
            return anObject(e.call(t)).value
    }, Result = function(t, e) {
        this.stopped = t,
        this.result = e
    }, iterate = function(t, e, i) {
        var n, o, r, s, a, l, c, u = i && i.that, h = !(!i || !i.AS_ENTRIES), d = !(!i || !i.IS_ITERATOR), p = !(!i || !i.INTERRUPTED), m = functionBindContext(e, u, 1 + h + p), f = function(t) {
            return n && iteratorClose(n),
            new Result(!0,t)
        }, g = function(t) {
            return h ? (anObject(t),
            p ? m(t[0], t[1], f) : m(t[0], t[1])) : p ? m(t, f) : m(t)
        };
        if (d)
            n = t;
        else {
            if ("function" != typeof (o = getIteratorMethod(t)))
                throw TypeError("Target is not iterable");
            if (isArrayIteratorMethod(o)) {
                for (r = 0,
                s = toLength(t.length); s > r; r++)
                    if ((a = g(t[r])) && a instanceof Result)
                        return a;
                return new Result(!1)
            }
            n = o.call(t)
        }
        for (l = n.next; !(c = l.call(n)).done; ) {
            try {
                a = g(c.value)
            } catch (t) {
                throw iteratorClose(n),
                t
            }
            if ("object" == _typeof(a) && a && a instanceof Result)
                return a
        }
        return new Result(!1)
    }, ITERATOR$2 = wellKnownSymbol("iterator"), SAFE_CLOSING = !1, checkCorrectnessOfIteration = function(t, e) {
        if (!e && !SAFE_CLOSING)
            return !1;
        var i = !1;
        try {
            var n = {};
            n[ITERATOR$2] = function() {
                return {
                    next: function() {
                        return {
                            done: i = !0
                        }
                    }
                }
            }
            ,
            t(n)
        } catch (t) {}
        return i
    }, SPECIES$1 = wellKnownSymbol("species"), speciesConstructor = function(t, e) {
        var i, n = anObject(t).constructor;
        return void 0 === n || null == (i = anObject(n)[SPECIES$1]) ? e : aFunction$1(i)
    }, html = getBuiltIn("document", "documentElement"), engineIsIos = /(?:iphone|ipod|ipad).*applewebkit/i.test(engineUserAgent), engineIsNode = "process" == classofRaw(global_1.process), location = global_1.location, set$2 = global_1.setImmediate, clear = global_1.clearImmediate, process$1 = global_1.process, MessageChannel = global_1.MessageChannel, Dispatch = global_1.Dispatch, counter = 0, queue = {}, ONREADYSTATECHANGE = "onreadystatechange", defer, channel, port, run = function(t) {
        if (queue.hasOwnProperty(t)) {
            var e = queue[t];
            delete queue[t],
            e()
        }
    }, runner = function(t) {
        return function() {
            run(t)
        }
    }, listener = function(t) {
        run(t.data)
    }, post = function(t) {
        global_1.postMessage(t + "", location.protocol + "//" + location.host)
    };
    set$2 && clear || (set$2 = function(t) {
        for (var e = [], i = 1; arguments.length > i; )
            e.push(arguments[i++]);
        return queue[++counter] = function() {
            ("function" == typeof t ? t : Function(t)).apply(void 0, e)
        }
        ,
        defer(counter),
        counter
    }
    ,
    clear = function(t) {
        delete queue[t]
    }
    ,
    engineIsNode ? defer = function(t) {
        process$1.nextTick(runner(t))
    }
    : Dispatch && Dispatch.now ? defer = function(t) {
        Dispatch.now(runner(t))
    }
    : MessageChannel && !engineIsIos ? (channel = new MessageChannel,
    port = channel.port2,
    channel.port1.onmessage = listener,
    defer = functionBindContext(port.postMessage, port, 1)) : global_1.addEventListener && "function" == typeof postMessage && !global_1.importScripts && location && "file:" !== location.protocol && !fails(post) ? (defer = post,
    global_1.addEventListener("message", listener, !1)) : defer = ONREADYSTATECHANGE in documentCreateElement("script") ? function(t) {
        html.appendChild(documentCreateElement("script"))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this),
            run(t)
        }
    }
    : function(t) {
        setTimeout(runner(t), 0)
    }
    );
    var task = {
        set: set$2,
        clear: clear
    }, engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(engineUserAgent), getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f, macrotask = task.set, MutationObserver = global_1.MutationObserver || global_1.WebKitMutationObserver, document$2 = global_1.document, process$2 = global_1.process, Promise$1 = global_1.Promise, queueMicrotaskDescriptor = getOwnPropertyDescriptor$2(global_1, "queueMicrotask"), queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value, flush, head, last, notify, toggle, node, promise, then;
    queueMicrotask || (flush = function() {
        var t, e;
        for (engineIsNode && (t = process$2.domain) && t.exit(); head; ) {
            e = head.fn,
            head = head.next;
            try {
                e()
            } catch (t) {
                throw head ? notify() : last = void 0,
                t
            }
        }
        last = void 0,
        t && t.enter()
    }
    ,
    engineIsIos || engineIsNode || engineIsWebosWebkit || !MutationObserver || !document$2 ? Promise$1 && Promise$1.resolve ? (promise = Promise$1.resolve(void 0),
    promise.constructor = Promise$1,
    then = promise.then,
    notify = function() {
        then.call(promise, flush)
    }
    ) : notify = engineIsNode ? function() {
        process$2.nextTick(flush)
    }
    : function() {
        macrotask.call(global_1, flush)
    }
    : (toggle = !0,
    node = document$2.createTextNode(""),
    new MutationObserver(flush).observe(node, {
        characterData: !0
    }),
    notify = function() {
        node.data = toggle = !toggle
    }
    ));
    var microtask = queueMicrotask || function(t) {
        var e = {
            fn: t,
            next: void 0
        };
        last && (last.next = e),
        head || (head = e,
        notify()),
        last = e
    }
    , PromiseCapability = function(t) {
        var e, i;
        this.promise = new t(function(t, n) {
            if (void 0 !== e || void 0 !== i)
                throw TypeError("Bad Promise constructor");
            e = t,
            i = n
        }
        ),
        this.resolve = aFunction$1(e),
        this.reject = aFunction$1(i)
    }, f$5 = function(t) {
        return new PromiseCapability(t)
    }, newPromiseCapability = {
        f: f$5
    }, promiseResolve = function(t, e) {
        if (anObject(t),
        isObject(e) && e.constructor === t)
            return e;
        var i = newPromiseCapability.f(t);
        return (0,
        i.resolve)(e),
        i.promise
    }, hostReportErrors = function(t, e) {
        var i = global_1.console;
        i && i.error && (1 === arguments.length ? i.error(t) : i.error(t, e))
    }, perform = function(t) {
        try {
            return {
                error: !1,
                value: t()
            }
        } catch (t) {
            return {
                error: !0,
                value: t
            }
        }
    }, engineIsBrowser = "object" == ("undefined" == typeof window ? "undefined" : _typeof(window)), task$1 = task.set, SPECIES$2 = wellKnownSymbol("species"), PROMISE = "Promise", getInternalState = internalState.get, setInternalState = internalState.set, getInternalPromiseState = internalState.getterFor(PROMISE), NativePromisePrototype = nativePromiseConstructor && nativePromiseConstructor.prototype, PromiseConstructor = nativePromiseConstructor, PromiseConstructorPrototype = NativePromisePrototype, TypeError$1 = global_1.TypeError, document$3 = global_1.document, process$3 = global_1.process, newPromiseCapability$1 = newPromiseCapability.f, newGenericPromiseCapability = newPromiseCapability$1, DISPATCH_EVENT = !!(document$3 && document$3.createEvent && global_1.dispatchEvent), NATIVE_REJECTION_EVENT = "function" == typeof PromiseRejectionEvent, UNHANDLED_REJECTION = "unhandledrejection", REJECTION_HANDLED = "rejectionhandled", PENDING = 0, FULFILLED = 1, REJECTED = 2, HANDLED = 1, UNHANDLED = 2, SUBCLASSING = !1, Internal, OwnPromiseCapability, PromiseWrapper, nativeThen, FORCED = isForced_1(PROMISE, function() {
        var t = inspectSource(PromiseConstructor)
          , e = t !== String(PromiseConstructor);
        if (!e && 66 === engineV8Version)
            return !0;
        if (isPure && !PromiseConstructorPrototype.finally)
            return !0;
        if (engineV8Version >= 51 && /native code/.test(t))
            return !1;
        var i = new PromiseConstructor(function(t) {
            t(1)
        }
        )
          , n = function(t) {
            t(function() {}, function() {})
        };
        return (i.constructor = {})[SPECIES$2] = n,
        !(SUBCLASSING = i.then(function() {})instanceof n) || !e && engineIsBrowser && !NATIVE_REJECTION_EVENT
    }), INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function(t) {
        PromiseConstructor.all(t).catch(function() {})
    }), isThenable = function(t) {
        var e;
        return !(!isObject(t) || "function" != typeof (e = t.then)) && e
    }, notify$1 = function(t, e) {
        if (!t.notified) {
            t.notified = !0;
            var i = t.reactions;
            microtask(function() {
                for (var n = t.value, o = t.state == FULFILLED, r = 0; i.length > r; ) {
                    var s, a, l, c = i[r++], u = o ? c.ok : c.fail, h = c.resolve, d = c.reject, p = c.domain;
                    try {
                        u ? (o || (t.rejection === UNHANDLED && onHandleUnhandled(t),
                        t.rejection = HANDLED),
                        !0 === u ? s = n : (p && p.enter(),
                        s = u(n),
                        p && (p.exit(),
                        l = !0)),
                        s === c.promise ? d(TypeError$1("Promise-chain cycle")) : (a = isThenable(s)) ? a.call(s, h, d) : h(s)) : d(n)
                    } catch (t) {
                        p && !l && p.exit(),
                        d(t)
                    }
                }
                t.reactions = [],
                t.notified = !1,
                e && !t.rejection && onUnhandled(t)
            })
        }
    }, dispatchEvent = function(t, e, i) {
        var n, o;
        DISPATCH_EVENT ? ((n = document$3.createEvent("Event")).promise = e,
        n.reason = i,
        n.initEvent(t, !1, !0),
        global_1.dispatchEvent(n)) : n = {
            promise: e,
            reason: i
        },
        !NATIVE_REJECTION_EVENT && (o = global_1["on" + t]) ? o(n) : t === UNHANDLED_REJECTION && hostReportErrors("Unhandled promise rejection", i)
    }, onUnhandled = function(t) {
        task$1.call(global_1, function() {
            var e, i = t.facade, n = t.value;
            if (isUnhandled(t) && (e = perform(function() {
                engineIsNode ? process$3.emit("unhandledRejection", n, i) : dispatchEvent(UNHANDLED_REJECTION, i, n)
            }),
            t.rejection = engineIsNode || isUnhandled(t) ? UNHANDLED : HANDLED,
            e.error))
                throw e.value
        })
    }, isUnhandled = function(t) {
        return t.rejection !== HANDLED && !t.parent
    }, onHandleUnhandled = function(t) {
        task$1.call(global_1, function() {
            var e = t.facade;
            engineIsNode ? process$3.emit("rejectionHandled", e) : dispatchEvent(REJECTION_HANDLED, e, t.value)
        })
    }, bind = function(t, e, i) {
        return function(n) {
            t(e, n, i)
        }
    }, internalReject = function(t, e, i) {
        t.done || (t.done = !0,
        i && (t = i),
        t.value = e,
        t.state = REJECTED,
        notify$1(t, !0))
    }, internalResolve = function t(e, i, n) {
        if (!e.done) {
            e.done = !0,
            n && (e = n);
            try {
                if (e.facade === i)
                    throw TypeError$1("Promise can't be resolved itself");
                var o = isThenable(i);
                o ? microtask(function() {
                    var n = {
                        done: !1
                    };
                    try {
                        o.call(i, bind(t, n, e), bind(internalReject, n, e))
                    } catch (t) {
                        internalReject(n, t, e)
                    }
                }) : (e.value = i,
                e.state = FULFILLED,
                notify$1(e, !1))
            } catch (t) {
                internalReject({
                    done: !1
                }, t, e)
            }
        }
    };
    if (FORCED && (PromiseConstructor = function(t) {
        anInstance(this, PromiseConstructor, PROMISE),
        aFunction$1(t),
        Internal.call(this);
        var e = getInternalState(this);
        try {
            t(bind(internalResolve, e), bind(internalReject, e))
        } catch (t) {
            internalReject(e, t)
        }
    }
    ,
    PromiseConstructorPrototype = PromiseConstructor.prototype,
    Internal = function(t) {
        setInternalState(this, {
            type: PROMISE,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: PENDING,
            value: void 0
        })
    }
    ,
    Internal.prototype = redefineAll(PromiseConstructorPrototype, {
        then: function(t, e) {
            var i = getInternalPromiseState(this)
              , n = newPromiseCapability$1(speciesConstructor(this, PromiseConstructor));
            return n.ok = "function" != typeof t || t,
            n.fail = "function" == typeof e && e,
            n.domain = engineIsNode ? process$3.domain : void 0,
            i.parent = !0,
            i.reactions.push(n),
            i.state != PENDING && notify$1(i, !1),
            n.promise
        },
        catch: function(t) {
            return this.then(void 0, t)
        }
    }),
    OwnPromiseCapability = function() {
        var t = new Internal
          , e = getInternalState(t);
        this.promise = t,
        this.resolve = bind(internalResolve, e),
        this.reject = bind(internalReject, e)
    }
    ,
    newPromiseCapability.f = newPromiseCapability$1 = function(t) {
        return t === PromiseConstructor || t === PromiseWrapper ? new OwnPromiseCapability(t) : newGenericPromiseCapability(t)
    }
    ,
    !isPure && "function" == typeof nativePromiseConstructor && NativePromisePrototype !== Object.prototype)) {
        nativeThen = NativePromisePrototype.then,
        SUBCLASSING || (redefine(NativePromisePrototype, "then", function(t, e) {
            var i = this;
            return new PromiseConstructor(function(t, e) {
                nativeThen.call(i, t, e)
            }
            ).then(t, e)
        }, {
            unsafe: !0
        }),
        redefine(NativePromisePrototype, "catch", PromiseConstructorPrototype.catch, {
            unsafe: !0
        }));
        try {
            delete NativePromisePrototype.constructor
        } catch (t) {}
        objectSetPrototypeOf && objectSetPrototypeOf(NativePromisePrototype, PromiseConstructorPrototype)
    }
    _export({
        global: !0,
        wrap: !0,
        forced: FORCED
    }, {
        Promise: PromiseConstructor
    }),
    setToStringTag(PromiseConstructor, PROMISE, !1, !0),
    setSpecies(PROMISE),
    PromiseWrapper = getBuiltIn(PROMISE),
    _export({
        target: PROMISE,
        stat: !0,
        forced: FORCED
    }, {
        reject: function(t) {
            var e = newPromiseCapability$1(this);
            return e.reject.call(void 0, t),
            e.promise
        }
    }),
    _export({
        target: PROMISE,
        stat: !0,
        forced: isPure || FORCED
    }, {
        resolve: function(t) {
            return promiseResolve(isPure && this === PromiseWrapper ? PromiseConstructor : this, t)
        }
    }),
    _export({
        target: PROMISE,
        stat: !0,
        forced: INCORRECT_ITERATION
    }, {
        all: function(t) {
            var e = this
              , i = newPromiseCapability$1(e)
              , n = i.resolve
              , o = i.reject
              , r = perform(function() {
                var i = aFunction$1(e.resolve)
                  , r = []
                  , s = 0
                  , a = 1;
                iterate(t, function(t) {
                    var l = s++
                      , c = !1;
                    r.push(void 0),
                    a++,
                    i.call(e, t).then(function(t) {
                        c || (c = !0,
                        r[l] = t,
                        --a || n(r))
                    }, o)
                }),
                --a || n(r)
            });
            return r.error && o(r.value),
            i.promise
        },
        race: function(t) {
            var e = this
              , i = newPromiseCapability$1(e)
              , n = i.reject
              , o = perform(function() {
                var o = aFunction$1(e.resolve);
                iterate(t, function(t) {
                    o.call(e, t).then(i.resolve, n)
                })
            });
            return o.error && n(o.value),
            i.promise
        }
    });
    var NON_GENERIC = !!nativePromiseConstructor && fails(function() {
        nativePromiseConstructor.prototype.finally.call({
            then: function() {}
        }, function() {})
    });
    if (_export({
        target: "Promise",
        proto: !0,
        real: !0,
        forced: NON_GENERIC
    }, {
        finally: function(t) {
            var e = speciesConstructor(this, getBuiltIn("Promise"))
              , i = "function" == typeof t;
            return this.then(i ? function(i) {
                return promiseResolve(e, t()).then(function() {
                    return i
                })
            }
            : t, i ? function(i) {
                return promiseResolve(e, t()).then(function() {
                    throw i
                })
            }
            : t)
        }
    }),
    "function" == typeof nativePromiseConstructor) {
        var method = getBuiltIn("Promise").prototype.finally;
        nativePromiseConstructor.prototype.finally !== method && redefine(nativePromiseConstructor.prototype, "finally", method, {
            unsafe: !0
        })
    }
    var createMethod$1 = function(t) {
        return function(e, i) {
            var n, o, r = String(requireObjectCoercible(e)), s = toInteger(i), a = r.length;
            return s < 0 || s >= a ? t ? "" : void 0 : (n = r.charCodeAt(s)) < 55296 || n > 56319 || s + 1 === a || (o = r.charCodeAt(s + 1)) < 56320 || o > 57343 ? t ? r.charAt(s) : n : t ? r.slice(s, s + 2) : o - 56320 + (n - 55296 << 10) + 65536
        }
    }, stringMultibyte = {
        codeAt: createMethod$1(!1),
        charAt: createMethod$1(!0)
    }, correctPrototypeGetter = !fails(function() {
        function t() {}
        return t.prototype.constructor = null,
        Object.getPrototypeOf(new t) !== t.prototype
    }), IE_PROTO = sharedKey("IE_PROTO"), ObjectPrototype = Object.prototype, objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function(t) {
        return t = toObject(t),
        has(t, IE_PROTO) ? t[IE_PROTO] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? ObjectPrototype : null
    }
    , ITERATOR$3 = wellKnownSymbol("iterator"), BUGGY_SAFARI_ITERATORS = !1, returnThis = function() {
        return this
    }, IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
    [].keys && (arrayIterator = [].keys(),
    "next"in arrayIterator ? (PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator)),
    PrototypeOfArrayIteratorPrototype !== Object.prototype && (IteratorPrototype = PrototypeOfArrayIteratorPrototype)) : BUGGY_SAFARI_ITERATORS = !0);
    var NEW_ITERATOR_PROTOTYPE = null == IteratorPrototype || fails(function() {
        var t = {};
        return IteratorPrototype[ITERATOR$3].call(t) !== t
    });
    NEW_ITERATOR_PROTOTYPE && (IteratorPrototype = {}),
    has(IteratorPrototype, ITERATOR$3) || createNonEnumerableProperty(IteratorPrototype, ITERATOR$3, returnThis);
    var iteratorsCore = {
        IteratorPrototype: IteratorPrototype,
        BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
    }, objectKeys = Object.keys || function(t) {
        return objectKeysInternal(t, enumBugKeys)
    }
    , objectDefineProperties = descriptors ? Object.defineProperties : function(t, e) {
        anObject(t);
        for (var i, n = objectKeys(e), o = n.length, r = 0; o > r; )
            objectDefineProperty.f(t, i = n[r++], e[i]);
        return t
    }
    , GT = ">", LT = "<", PROTOTYPE = "prototype", SCRIPT = "script", IE_PROTO$1 = sharedKey("IE_PROTO"), EmptyConstructor = function() {}, scriptTag = function(t) {
        return LT + SCRIPT + GT + t + LT + "/" + SCRIPT + GT
    }, NullProtoObjectViaActiveX = function(t) {
        t.write(scriptTag("")),
        t.close();
        var e = t.parentWindow.Object;
        return t = null,
        e
    }, NullProtoObjectViaIFrame = function() {
        var t, e = documentCreateElement("iframe"), i = "java" + SCRIPT + ":";
        return e.style.display = "none",
        html.appendChild(e),
        e.src = String(i),
        (t = e.contentWindow.document).open(),
        t.write(scriptTag("document.F=Object")),
        t.close(),
        t.F
    }, activeXDocument, _NullProtoObject = function() {
        try {
            activeXDocument = document.domain && new ActiveXObject("htmlfile")
        } catch (t) {}
        _NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
        for (var t = enumBugKeys.length; t--; )
            delete _NullProtoObject[PROTOTYPE][enumBugKeys[t]];
        return _NullProtoObject()
    };
    hiddenKeys[IE_PROTO$1] = !0;
    var objectCreate = Object.create || function(t, e) {
        var i;
        return null !== t ? (EmptyConstructor[PROTOTYPE] = anObject(t),
        i = new EmptyConstructor,
        EmptyConstructor[PROTOTYPE] = null,
        i[IE_PROTO$1] = t) : i = _NullProtoObject(),
        void 0 === e ? i : objectDefineProperties(i, e)
    }
      , IteratorPrototype$1 = iteratorsCore.IteratorPrototype
      , returnThis$1 = function() {
        return this
    }
      , createIteratorConstructor = function(t, e, i) {
        var n = e + " Iterator";
        return t.prototype = objectCreate(IteratorPrototype$1, {
            next: createPropertyDescriptor(1, i)
        }),
        setToStringTag(t, n, !1, !0),
        iterators[n] = returnThis$1,
        t
    }
      , IteratorPrototype$2 = iteratorsCore.IteratorPrototype
      , BUGGY_SAFARI_ITERATORS$1 = iteratorsCore.BUGGY_SAFARI_ITERATORS
      , ITERATOR$4 = wellKnownSymbol("iterator")
      , KEYS = "keys"
      , VALUES = "values"
      , ENTRIES = "entries"
      , returnThis$2 = function() {
        return this
    }
      , defineIterator = function(t, e, i, n, o, r, s) {
        createIteratorConstructor(i, e, n);
        var a, l, c, u = function(t) {
            if (t === o && f)
                return f;
            if (!BUGGY_SAFARI_ITERATORS$1 && t in p)
                return p[t];
            switch (t) {
            case KEYS:
            case VALUES:
            case ENTRIES:
                return function() {
                    return new i(this,t)
                }
            }
            return function() {
                return new i(this)
            }
        }, h = e + " Iterator", d = !1, p = t.prototype, m = p[ITERATOR$4] || p["@@iterator"] || o && p[o], f = !BUGGY_SAFARI_ITERATORS$1 && m || u(o), g = "Array" == e && p.entries || m;
        if (g && (a = objectGetPrototypeOf(g.call(new t)),
        IteratorPrototype$2 !== Object.prototype && a.next && (objectGetPrototypeOf(a) !== IteratorPrototype$2 && (objectSetPrototypeOf ? objectSetPrototypeOf(a, IteratorPrototype$2) : "function" != typeof a[ITERATOR$4] && createNonEnumerableProperty(a, ITERATOR$4, returnThis$2)),
        setToStringTag(a, h, !0, !0))),
        o == VALUES && m && m.name !== VALUES && (d = !0,
        f = function() {
            return m.call(this)
        }
        ),
        p[ITERATOR$4] !== f && createNonEnumerableProperty(p, ITERATOR$4, f),
        iterators[e] = f,
        o)
            if (l = {
                values: u(VALUES),
                keys: r ? f : u(KEYS),
                entries: u(ENTRIES)
            },
            s)
                for (c in l)
                    !BUGGY_SAFARI_ITERATORS$1 && !d && c in p || redefine(p, c, l[c]);
            else
                _export({
                    target: e,
                    proto: !0,
                    forced: BUGGY_SAFARI_ITERATORS$1 || d
                }, l);
        return l
    }
      , charAt = stringMultibyte.charAt
      , STRING_ITERATOR = "String Iterator"
      , setInternalState$1 = internalState.set
      , getInternalState$1 = internalState.getterFor(STRING_ITERATOR);
    defineIterator(String, "String", function(t) {
        setInternalState$1(this, {
            type: STRING_ITERATOR,
            string: String(t),
            index: 0
        })
    }, function() {
        var t, e = getInternalState$1(this), i = e.string, n = e.index;
        return n >= i.length ? {
            value: void 0,
            done: !0
        } : (t = charAt(i, n),
        e.index += t.length,
        {
            value: t,
            done: !1
        })
    });
    var $AggregateError = function(t, e) {
        var i = this;
        if (!(i instanceof $AggregateError))
            return new $AggregateError(t,e);
        objectSetPrototypeOf && (i = objectSetPrototypeOf(new Error(void 0), objectGetPrototypeOf(i))),
        void 0 !== e && createNonEnumerableProperty(i, "message", String(e));
        var n = [];
        return iterate(t, n.push, {
            that: n
        }),
        createNonEnumerableProperty(i, "errors", n),
        i
    };
    $AggregateError.prototype = objectCreate(Error.prototype, {
        constructor: createPropertyDescriptor(5, $AggregateError),
        message: createPropertyDescriptor(5, ""),
        name: createPropertyDescriptor(5, "AggregateError")
    }),
    _export({
        global: !0
    }, {
        AggregateError: $AggregateError
    }),
    _export({
        target: "Promise",
        stat: !0
    }, {
        allSettled: function(t) {
            var e = this
              , i = newPromiseCapability.f(e)
              , n = i.resolve
              , o = i.reject
              , r = perform(function() {
                var i = aFunction$1(e.resolve)
                  , o = []
                  , r = 0
                  , s = 1;
                iterate(t, function(t) {
                    var a = r++
                      , l = !1;
                    o.push(void 0),
                    s++,
                    i.call(e, t).then(function(t) {
                        l || (l = !0,
                        o[a] = {
                            status: "fulfilled",
                            value: t
                        },
                        --s || n(o))
                    }, function(t) {
                        l || (l = !0,
                        o[a] = {
                            status: "rejected",
                            reason: t
                        },
                        --s || n(o))
                    })
                }),
                --s || n(o)
            });
            return r.error && o(r.value),
            i.promise
        }
    });
    var PROMISE_ANY_ERROR = "No one promise resolved";
    _export({
        target: "Promise",
        stat: !0
    }, {
        any: function(t) {
            var e = this
              , i = newPromiseCapability.f(e)
              , n = i.resolve
              , o = i.reject
              , r = perform(function() {
                var i = aFunction$1(e.resolve)
                  , r = []
                  , s = 0
                  , a = 1
                  , l = !1;
                iterate(t, function(t) {
                    var c = s++
                      , u = !1;
                    r.push(void 0),
                    a++,
                    i.call(e, t).then(function(t) {
                        u || l || (l = !0,
                        n(t))
                    }, function(t) {
                        u || l || (u = !0,
                        r[c] = t,
                        --a || o(new (getBuiltIn("AggregateError"))(r,PROMISE_ANY_ERROR)))
                    })
                }),
                --a || o(new (getBuiltIn("AggregateError"))(r,PROMISE_ANY_ERROR))
            });
            return r.error && o(r.value),
            i.promise
        }
    }),
    _export({
        target: "Promise",
        stat: !0
    }, {
        try: function(t) {
            var e = newPromiseCapability.f(this)
              , i = perform(t);
            return (i.error ? e.reject : e.resolve)(i.value),
            e.promise
        }
    });
    var domIterables = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    }
      , UNSCOPABLES = wellKnownSymbol("unscopables")
      , ArrayPrototype$1 = Array.prototype;
    null == ArrayPrototype$1[UNSCOPABLES] && objectDefineProperty.f(ArrayPrototype$1, UNSCOPABLES, {
        configurable: !0,
        value: objectCreate(null)
    });
    var addToUnscopables = function(t) {
        ArrayPrototype$1[UNSCOPABLES][t] = !0
    }
      , ARRAY_ITERATOR = "Array Iterator"
      , setInternalState$2 = internalState.set
      , getInternalState$2 = internalState.getterFor(ARRAY_ITERATOR)
      , es_array_iterator = defineIterator(Array, "Array", function(t, e) {
        setInternalState$2(this, {
            type: ARRAY_ITERATOR,
            target: toIndexedObject(t),
            index: 0,
            kind: e
        })
    }, function() {
        var t = getInternalState$2(this)
          , e = t.target
          , i = t.kind
          , n = t.index++;
        return !e || n >= e.length ? (t.target = void 0,
        {
            value: void 0,
            done: !0
        }) : "keys" == i ? {
            value: n,
            done: !1
        } : "values" == i ? {
            value: e[n],
            done: !1
        } : {
            value: [n, e[n]],
            done: !1
        }
    }, "values");
    iterators.Arguments = iterators.Array,
    addToUnscopables("keys"),
    addToUnscopables("values"),
    addToUnscopables("entries");
    var ITERATOR$5 = wellKnownSymbol("iterator")
      , TO_STRING_TAG$3 = wellKnownSymbol("toStringTag")
      , ArrayValues = es_array_iterator.values;
    for (var COLLECTION_NAME in domIterables) {
        var Collection = global_1[COLLECTION_NAME]
          , CollectionPrototype = Collection && Collection.prototype;
        if (CollectionPrototype) {
            if (CollectionPrototype[ITERATOR$5] !== ArrayValues)
                try {
                    createNonEnumerableProperty(CollectionPrototype, ITERATOR$5, ArrayValues)
                } catch (t) {
                    CollectionPrototype[ITERATOR$5] = ArrayValues
                }
            if (CollectionPrototype[TO_STRING_TAG$3] || createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG$3, COLLECTION_NAME),
            domIterables[COLLECTION_NAME])
                for (var METHOD_NAME in es_array_iterator)
                    if (CollectionPrototype[METHOD_NAME] !== es_array_iterator[METHOD_NAME])
                        try {
                            createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, es_array_iterator[METHOD_NAME])
                        } catch (t) {
                            CollectionPrototype[METHOD_NAME] = es_array_iterator[METHOD_NAME]
                        }
        }
    }
    var propertyIsEnumerable = objectPropertyIsEnumerable.f
      , createMethod$2 = function(t) {
        return function(e) {
            for (var i, n = toIndexedObject(e), o = objectKeys(n), r = o.length, s = 0, a = []; r > s; )
                i = o[s++],
                descriptors && !propertyIsEnumerable.call(n, i) || a.push(t ? [i, n[i]] : n[i]);
            return a
        }
    }
      , objectToArray = {
        entries: createMethod$2(!0),
        values: createMethod$2(!1)
    }
      , $entries = objectToArray.entries;
    _export({
        target: "Object",
        stat: !0
    }, {
        entries: function(t) {
            return $entries(t)
        }
    });
    var $assign = Object.assign
      , defineProperty$1 = Object.defineProperty
      , objectAssign = !$assign || fails(function() {
        if (descriptors && 1 !== $assign({
            b: 1
        }, $assign(defineProperty$1({}, "a", {
            enumerable: !0,
            get: function() {
                defineProperty$1(this, "b", {
                    value: 3,
                    enumerable: !1
                })
            }
        }), {
            b: 2
        })).b)
            return !0;
        var t = {}
          , e = {}
          , i = Symbol();
        return t[i] = 7,
        "abcdefghijklmnopqrst".split("").forEach(function(t) {
            e[t] = t
        }),
        7 != $assign({}, t)[i] || "abcdefghijklmnopqrst" != objectKeys($assign({}, e)).join("")
    }) ? function(t, e) {
        for (var i = toObject(t), n = arguments.length, o = 1, r = objectGetOwnPropertySymbols.f, s = objectPropertyIsEnumerable.f; n > o; )
            for (var a, l = indexedObject(arguments[o++]), c = r ? objectKeys(l).concat(r(l)) : objectKeys(l), u = c.length, h = 0; u > h; )
                a = c[h++],
                descriptors && !s.call(l, a) || (i[a] = l[a]);
        return i
    }
    : $assign;
    _export({
        target: "Object",
        stat: !0,
        forced: Object.assign !== objectAssign
    }, {
        assign: objectAssign
    });
    var FAILS_ON_PRIMITIVES = fails(function() {
        objectKeys(1)
    });
    _export({
        target: "Object",
        stat: !0,
        forced: FAILS_ON_PRIMITIVES
    }, {
        keys: function(t) {
            return objectKeys(toObject(t))
        }
    });
    var callWithSafeIterationClosing = function(t, e, i, n) {
        try {
            return n ? e(anObject(i)[0], i[1]) : e(i)
        } catch (e) {
            throw iteratorClose(t),
            e
        }
    }
      , createProperty = function(t, e, i) {
        var n = toPrimitive(e);
        n in t ? objectDefineProperty.f(t, n, createPropertyDescriptor(0, i)) : t[n] = i
    }
      , arrayFrom = function(t) {
        var e, i, n, o, r, s, a = toObject(t), l = "function" == typeof this ? this : Array, c = arguments.length, u = c > 1 ? arguments[1] : void 0, h = void 0 !== u, d = getIteratorMethod(a), p = 0;
        if (h && (u = functionBindContext(u, c > 2 ? arguments[2] : void 0, 2)),
        null == d || l == Array && isArrayIteratorMethod(d))
            for (i = new l(e = toLength(a.length)); e > p; p++)
                s = h ? u(a[p], p) : a[p],
                createProperty(i, p, s);
        else
            for (r = (o = d.call(a)).next,
            i = new l; !(n = r.call(o)).done; p++)
                s = h ? callWithSafeIterationClosing(o, u, [n.value, p], !0) : n.value,
                createProperty(i, p, s);
        return i.length = p,
        i
    }
      , INCORRECT_ITERATION$1 = !checkCorrectnessOfIteration(function(t) {});
    function xhr(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "GET"
          , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
          , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "text"
          , o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        return new Promise(function(r, s) {
            try {
                var a = new XMLHttpRequest;
                if (!("withCredentials"in a))
                    return;
                a.addEventListener("load", function() {
                    if ("text" === n || "string" == typeof a.response)
                        try {
                            r(JSON.parse(a.responseText))
                        } catch (t) {
                            r(a.responseText)
                        }
                    else
                        r(a.response)
                }),
                a.addEventListener("error", function() {
                    s(a.status)
                }),
                a.open(e, t, !0),
                Object.entries(o).forEach(function(t) {
                    var e = _slicedToArray(t, 2)
                      , i = e[0]
                      , n = e[1];
                    a.setRequestHeader(i, n)
                }),
                a.responseType = n,
                a.send(i)
            } catch (t) {
                s(t)
            }
        }
        )
    }
    function loadJs(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return window.mowPromiseCache = window.mowPromiseCache || {},
        t in window.mowPromiseCache || (window.mowPromiseCache[t] = new Promise(function(i, n) {
            if (e && document.querySelector('head script[src*="' + t.replace(/^https?:\/\//, "") + '"]'))
                var o = 0
                  , r = setInterval(function() {
                    if ("ima" === e && "object" === _typeof(window.google) && "object" === _typeof(window.google.ima) && (i(!0),
                    clearInterval(r)),
                    (o += 5) > 1e3) {
                        var s = document.createElement("script");
                        s.type = "text/javascript",
                        s.onload = i,
                        s.onerror = n,
                        s.async = !0,
                        s.src = t,
                        s.setAttribute("data-mowloaded", !0),
                        document.head.appendChild(s),
                        clearInterval(r)
                    }
                }, 5);
            else {
                var s = document.createElement("script");
                s.type = "text/javascript",
                s.onload = i,
                s.onerror = n,
                s.async = !0,
                s.src = t,
                s.setAttribute("data-mowloaded", !0),
                document.head.appendChild(s)
            }
        }
        )),
        window.mowPromiseCache[t]
    }
    function isIframe() {
        try {
            return globals$1.t.self !== globals$1.t.top
        } catch (t) {
            return !0
        }
    }
    function refererUrl() {
        var t = function() {
            var t = window;
            try {
                for (; t.parent.document !== t.document && t.parent.document; )
                    t = t.parent
            } catch (t) {}
            return t
        }()
          , e = window.location.href;
        return isIframe() && document.referrer && ((e = t.document.referrer) || (e = t.document.location.href)),
        e
    }
    _export({
        target: "Array",
        stat: !0,
        forced: INCORRECT_ITERATION$1
    }, {
        from: arrayFrom
    }),
    function() {
        if ("undefined" != typeof window)
            try {
                var t = new window.CustomEvent("test",{
                    cancelable: !0
                });
                if (t.preventDefault(),
                !0 !== t.defaultPrevented)
                    throw new Error("Could not prevent default")
            } catch (t) {
                var e = function(t, e) {
                    var i, n;
                    return (e = e || {}).bubbles = !!e.bubbles,
                    e.cancelable = !!e.cancelable,
                    (i = document.createEvent("CustomEvent")).initCustomEvent(t, e.bubbles, e.cancelable, e.detail),
                    n = i.preventDefault,
                    i.preventDefault = function() {
                        n.call(this);
                        try {
                            Object.defineProperty(this, "defaultPrevented", {
                                get: function() {
                                    return !0
                                }
                            })
                        } catch (t) {
                            this.defaultPrevented = !0
                        }
                    }
                    ,
                    i
                };
                e.prototype = window.Event.prototype,
                window.CustomEvent = e
            }
    }();
    var globals$1 = {
        t: window,
        i: document,
        o: navigator
    }
      , defaults = {
        t: getWindowElement(),
        i: getDocumentElement(),
        o: getNavigatorElement()
    };
    function getWindowElement() {
        return isIframe() ? window.parent.window : window
    }
    function getDocumentElement() {
        return isIframe() ? window.parent.document : document
    }
    function getNavigatorElement() {
        return isIframe() ? window.parent.navigator : navigator
    }
    function isDebubMode() {
        var t = new URLSearchParams(window.location.search).has("mowdev")
          , e = !1;
        (function() {
            try {
                return window.localStorage.setItem("mowdi", null),
                window.localStorage.removeItem("mowdi"),
                !0
            } catch (t) {
                return !1
            }
        }
        )() && ("true" === window.localStorage.getItem("enabledDebug") && (e = !0));
        return t || e
    }
    var isBlockedPageForAds = function(t) {
        if (void 0 === t || "" === t || null === t)
            return !1;
        var e = window.location.href;
        return !!JSON.parse(t).filter(function(t) {
            return t.value == e
        }).length
    }
      , isAllowedPageForAds = function(t) {
        if (void 0 === t || "" === t || null === t || "[]" == t)
            return !0;
        var e = window.location.href;
        return !!JSON.parse(t).filter(function(t) {
            return e.includes(t.value)
        }).length
    }
      , getConstructor = function(t) {
        return null != t ? t.constructor : null
    }
      , instanceOf = function(t, e) {
        return Boolean(t && e && t instanceof e)
    }
      , isNullOrUndefined = function(t) {
        return null == t
    }
      , isObject$1 = function(t) {
        return getConstructor(t) === Object
    }
      , isNumber = function(t) {
        return getConstructor(t) === Number && !Number.isNaN(t)
    }
      , isString = function(t) {
        return getConstructor(t) === String
    }
      , isBool = function(t) {
        return getConstructor(t) === Boolean
    }
      , isFunction = function(t) {
        return getConstructor(t) === Function
    }
      , isArray = function(t) {
        return Array.isArray(t)
    }
      , isNodeList = function(t) {
        return instanceOf(t, NodeList)
    }
      , isElement = function(t) {
        return instanceOf(t, Element)
    }
      , isKeyEvent = function(t) {
        return instanceOf(t, KeyboardEvent)
    }
      , isEmpty = function(t) {
        return isNullOrUndefined(t) || (isString(t) || isArray(t) || isNodeList(t)) && !t.length || isObject$1(t) && !Object.keys(t).length
    }
      , isUrl = function(t) {
        if (instanceOf(t, globals$1.t.URL))
            return !0;
        if (isEmpty(t) || !isString(t))
            return !1;
        t.match(/^https?:\/\/.*/) || (t = "http://".concat(t));
        try {
            return !isEmpty(new URL(t).hostname)
        } catch (t) {
            return !1
        }
    }
      , assert = {
        l: isNullOrUndefined,
        u: isObject$1,
        h: isNumber,
        p: isString,
        m: isBool,
        g: isFunction,
        _: isArray,
        A: isNodeList,
        I: isElement,
        k: isKeyEvent,
        C: isUrl,
        S: isEmpty
    }
      , supportsPassiveListeners = function() {
        var t = !1;
        try {
            var e = Object.defineProperty({}, "passive", {
                get: function() {
                    return t = !0,
                    null
                }
            });
            globals$1.t.addEventListener("test", null, e),
            globals$1.t.removeEventListener("test", null, e)
        } catch (t) {}
        return t
    }()
      , logger = {
        label: "%cMOW",
        labelStyle: "color:#fafafa;background:#FF365D;border-radius:2px;padding: 1px 2px;",
        debug: function(t) {
            for (var e, i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++)
                n[o - 1] = arguments[o];
            isDebubMode() && (e = console).log.apply(e, [logger.label, logger.labelStyle, t].concat(n))
        },
        info: function(t) {
            for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
                i[n - 1] = arguments[n];
            logger.debug.apply(logger, ["INFO - ".concat(t)].concat(i))
        },
        error: function(t) {
            for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
                i[n - 1] = arguments[n];
            logger.debug.apply(logger, ["ERROR - ".concat(t)].concat(i))
        },
        trace: function() {
            isDebubMode() && console.trace()
        }
    };
    function domSearch(t) {
        return t.includes(":contains") ? domSearchContains(t) : document.querySelector(t)
    }
    function domSearchContains(t) {
        for (var e = t.indexOf(":contains("), i = t.substring(e + 11, t.length - 2), n = document.querySelectorAll(t.substring(0, e)), o = 0, r = null; null === r && o < n.length; ) {
            var s = n[o].textContent || n[o].innerText || "";
            if (i.trim() === s.trim())
                r = n[o];
            else
                try {
                    var a = (new DOMParser).parseFromString(n[o].innerHTML, "text/html")
                      , l = a.body.firstChild ? a.body.firstChild.textContent : "";
                    i.trim() === l.trim() && (r = n[o])
                } catch (t) {}
            o++
        }
        return r
    }
    var browser = {
        P: !!globals$1.i.documentMode,
        T: "WebkitAppearance"in globals$1.i.documentElement.style && !/Edge/.test(globals$1.o.userAgent),
        B: /(iPhone|iPod)/gi.test(globals$1.o.userAgent),
        R: /(iPhone|iPad|iPod)/gi.test(globals$1.o.userAgent),
        O: /(Mac)/gi.test(globals$1.o.userAgent),
        D: /^((?!chrome|android).)*safari/i.test(globals$1.o.userAgent),
        M: /(Android)/gi.test(globals$1.o.userAgent),
        N: /(iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone)/gi.test(globals$1.o.userAgent),
        j: "ontouchstart"in window || navigator.msMaxTouchPoints
    };
    function generateId(t) {
        return t ? "".concat(t, "-").concat(randomId()) : "".concat(randomId())
    }
    function randomId() {
        return Math.floor(1e14 + Math.random() * (9e14 - 1))
    }
    function getAudioReaderText(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          , i = []
          , n = ["iframe", "style", "input", "button", "textarea", "form", "table", "select", "script"]
          , o = {
            "li, li *": 4,
            "h1, h1 *, h2, h2 *, h3, h3 *, h4, h4 *, h5, h5 *, h6, h6 *": 1,
            "p, p *, article, article *, header, header *": 1,
            "nav *, .mow-reader-skip, .mow-reader-skip *": 1 / 0
        };

        var s = function t(e) {
            Array.from(e.childNodes).forEach(function(r) {
                var s = [];
                r instanceof Text ? s.push(r.wholeText) : r instanceof HTMLElement && -1 === n.indexOf(r.tagName) && null !== r.offsetParent && r.offsetHeight > 0 && r.offsetWidth > 0 && t(r);
                var a = s.join(" ")
                  , l = 10;
                Object.entries(o).forEach(function(t) {
                    var i = _slicedToArray(t, 2)
                      , n = i[0]
                      , o = i[1];
                    e.matches(n) && (l = o)
                }),
                a.trim().split(/\s+/).length >= l && i.push(a)
            })
        };
        if (!1 === t)
            s(document.body);
        else {
            var a = document.querySelectorAll(t);
            Array.from(a).forEach(function(t) {
                return s(t)
            })
        }
        return i.join(" ").replace(/\s+/g, " ").trim()
    }
    var MowIframeAPI = function() {
        function t(e) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (_classCallCheck(this, t),
            assert.I(e) && e.contentWindow && !e.mowAPI) {
                var n = document.createElement("div")
                  , o = document.createElement("div");
                o.id = generateId("m"),
                n.id = generateId("m"),
                o.appendChild(n),
                e.insertAdjacentElement("afterend", o),
                n.appendChild(e),
                this.G = e,
                this.V = n,
                this.$ = o,
                this.$.style.cssText = "position:relative;",
                this.V.style.cssText = "width:100%;position:relative; padding: 56.25% 0 0 0;",
                this.G.style.cssText = "overflow:hidden; position:absolute; top:0; left:0; width:100%; height:100%;",
                this.L = i,
                this.q = !1,
                this.U = {},
                e.mowAPI = this,
                this.bind(),
                this.H = !0,
                this.W = null,
                this.K = !1,
                this.originalAspectRatio = null,
                this.mow_contectfull_things = "",
                window.mowStickyEnabled = !1
            }
        }
        return _createClass(t, [{
            key: "onContxtfulEvent",
            value: function(t) {
                "undefined" != typeof Contxtful && "function" == typeof Contxtful.Api.TriggerEvent && Contxtful.Api.TriggerEvent(t)
            }
        }, {
            key: "onCalculateReceptivity",
            value: function(t) {
                "undefined" != typeof Contxtful && "function" == typeof Contxtful.Api.SetReceptivity && Contxtful.Api.SetReceptivity()
            }
        }, {
            key: "onApplyAudioReaderStyles",
            value: function(t) {
                var e = this
                  , i = function() {
                    var i, n = document.querySelector(t.selector);
                    if (n) {
                        var o = n.getBoundingClientRect()
                          , r = window.getComputedStyle(n)
                          , s = !0
                          , a = {
                            x: parseInt(r.getPropertyValue("padding-left")),
                            y: parseInt(r.getPropertyValue("padding-top"))
                        }
                          , l = o.left + window.pageXOffset
                          , c = o.top + window.pageYOffset;
                        isNaN(a.x) && (a.x = 0),
                        isNaN(a.y) && (a.y = 0),
                        i = {
                            left: l + a.x - 90 + "px",
                            top: c + a.y - 20 + "px",
                            position: "absolute",
                            width: "80px",
                            height: "70px",
                            padding: "0"
                        },
                        l + a.x < 90 && (s = !1,
                        i = {
                            left: "auto",
                            top: "auto",
                            bottom: "15px",
                            right: "15px",
                            position: "fixed",
                            width: "70px",
                            height: "70px",
                            padding: "0"
                        }),
                        e.trigger("toggle_class", {
                            class: "mow__audio_reader_right_arrow",
                            toggle: s
                        })
                    } else
                        i = {
                            left: "50px",
                            top: "50px",
                            position: "fixed",
                            width: "70px",
                            height: "70px",
                            padding: "0"
                        };
                    Object.assign(e.V.style, i)
                };
                this.q = !0,
                window.addEventListener("resize", i),
                i()
            }
        }, {
            key: "onGetTtsText",
            value: function(t) {
                this.trigger("set_tts_text", {
                    selector: t.selector,
                    text: getAudioReaderText(t.selector, t.skip)
                })
            }
        }, {
            key: "onResize",
            value: function(t) {
                if (!this.q) {
                    var e = t.type
                      , i = t.state.config
                      , n = i.width
                      , o = i.height
                      , r = i.ratio;
                    if (i.responsive) {
                        var s = 16
                          , a = 9;
                        if (r) {
                            var l = _slicedToArray(r.split(":").map(function(t) {
                                return parseFloat(t)
                            }), 2);
                            s = l[0],
                            a = l[1]
                        }
                        var c = t.state.dimensions.width / t.state.dimensions.height;
                        "simple" !== e && "position" !== e || (c = s > 0 && a > 0 ? s / a : null),
                        window.mowStickyEnabled || (this.V.style.paddingTop = 100 / c + 1 + "%")
                    } else
                        this.V.style.cssText = "position:absolute; top:0; left:0; width:100%; height:100%;";
                    n && (this.$.style.width = n + "px"),
                    n && o && (this.$.style.height = o + "px")
                }
            }
        }, {
            key: "onAdsimpression",
            value: function() {
                this.H = !1
            }
        }, {
            key: "onPlay",
            value: function() {
                this.H = !1
            }
        }, {
            key: "onSetPlayerSettings",
            value: function(t) {}
        }, {
            key: "onPause",
            value: function() {
                this.H = !0
            }
        }, {
            key: "onVisibilityObserver",
            value: function(t) {
                var e = this
                  , i = null
                  , n = function() {
                    var n = e.V.getBoundingClientRect()
                      , o = n.height * parseFloat(t.breakpoint)
                      , r = n.top > 0 && n.top + o < window.innerHeight || n.top < 0 && n.top + o > 0;
                    i !== r && (e.trigger("visibility_observer_visibility", {
                        visible: r
                    }),
                    i = r)
                };
                window.addEventListener("scroll", n),
                window.addEventListener("resize", n),
                n()
            }
        }, {
            key: "onStickyDisable",
            value: function() {
                assert.g(this.W) && this.W.call()
            }
        }, {
            key: "onStickPlayer",
            value: function(t) {
                var e, i = this, n = !0, o = t.breakpoint, r = t.position, s = t.margin, a = "".concat(s, "px"), l = document.createElement("div"), c = document.createElement("div");
                l.appendChild(c),
                this.$.insertAdjacentElement("afterend", l),
                l.style.cssText = "position:relative; display: none;";
                var u = function(t) {
                    window.mowStickyEnabled = t;
                    var n = {
                        position: "fixed",
                        zIndex: 1e6,
                        width: "100%",
                        maxWidth: "500px"
                    };
                    if (t ? (i.originalAspectRatio || (i.originalAspectRatio = i.V.style.paddingTop),
                    i.V.style.paddingTop = "56.25%") : i.V.style.paddingTop = i.originalAspectRatio,
                    browser.N && window.screen.availWidth <= 500)
                        switch (n.right = 0,
                        n.left = 0,
                        r) {
                        case "left_bottom":
                        case "bottom_right":
                            n.bottom = 0;
                            break;
                        case "left_top":
                        case "top_right":
                        default:
                            n.top = 0
                        }
                    else
                        switch (r) {
                        case "left_top":
                            n.top = a,
                            n.left = a;
                            break;
                        case "left_bottom":
                            n.bottom = a,
                            n.left = a;
                            break;
                        case "bottom_right":
                            n.bottom = a,
                            n.right = a;
                            break;
                        case "top_right":
                        default:
                            n.top = a,
                            n.right = a
                        }
                    c.style.cssText = i.V.style.cssText,
                    i.originalAspectRatio && (c.style.paddingTop = i.originalAspectRatio),
                    c.style.background = "#000",
                    l.style.display = t ? "block" : "none",
                    t ? (e = i.$.style.cssText,
                    i.$.style.cssText = "",
                    Object.assign(i.$.style, n)) : i.$.style.cssText = e,
                    i.trigger("sticky_state_update", {
                        enabled: t
                    })
                }
                  , h = !1
                  , d = function() {
                    if ((!i.H || h || !i.J.isVideo) && i.J.isVideo && i.J.isReader) {
                        var t = (h ? c : i.$).getBoundingClientRect()
                          , e = t.height * parseFloat(o)
                          , r = t.top > 0 && t.top + e < window.innerHeight || t.top < 0 && t.top + e > 0;
                        window.mowStickyEnabled && !r || n !== r && (u(h = !r),
                        n = r)
                    }
                };
                window.addEventListener("scroll", d),
                window.addEventListener("resize", d),
                this.W = function() {
                    u(!1),
                    h = !1
                }
            }
        }, {
            key: "onReady",
            value: function(t) {
                var e = this;
                if (browser.N && t.state.config.mobile_full_width && !this.K) {
                    this.K = !0;
                    var i = function() {
                        var t = e.$.getBoundingClientRect();
                        if (t.width < window.screen.availWidth) {
                            var i = t.left
                              , n = window.screen.availWidth - t.right;
                            e.$.style.marginLeft = "-" + i + "px",
                            e.$.style.marginRight = "-" + n + "px"
                        }
                    };
                    i(),
                    window.addEventListener("resize", i)
                }
            }
        }, {
            key: "doPlayerRepaint",
            value: function() {
                this.trigger("repaint")
            }
        }, {
            key: "trigger",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.G.contentWindow.postMessage({
                    mowplayer: {
                        type: t,
                        data: e
                    }
                }, "*")
            }
        }, {
            key: "on",
            value: function(t, e) {
                this.U.hasOwnProperty(t) || (this.U[t] = []),
                this.U[t].push(e)
            }
        }, {
            key: "onGaTrackEvent",
            value: function(t) {
                "function" == typeof gtag && gtag("event", t.eventName, t.gaData)
            }
        }, {
            key: "bind",
            value: function() {
                var t = this;
                window.hasOwnProperty("mowIframeRegistry") || (window.mowIframeRegistry = {}),
                window.addEventListener("message", function(e) {
                    if (assert.u(e.data) && assert.u(e.data.mowplayer)) {
                        var i = Object.assign({
                            id: null,
                            type: "",
                            data: {}
                        }, e.data.mowplayer)
                          , n = ("on_" + i.type).replace(/(_\w)/g, function(t) {
                            return t[1].toUpperCase()
                        });
                        if ("onContxtfulEvent" === n || "onCalculateReceptivity" === n || "onGaTrackEvent" === n)
                            return void t[n].call(t, i.data);
                        t.L !== i.id || "onHandshake" !== n || window.mowIframeRegistry.hasOwnProperty(i.id) ? i.id === t.L && assert.g(t[n]) && (t[n].call(t, i.data),
                        t.U.hasOwnProperty(i.type) && t.U[i.type].forEach(function(t) {
                            return t(i.data)
                        })) : (window.mowIframeRegistry[i.id] = !0,
                        t.L = i.id,
                        t.trigger("handshake_done", {}))
                    }
                }, !1);
                var e = new CustomEvent("mowapiready",{
                    bubbles: !0,
                    detail: {
                        api: this
                    }
                });
                document.dispatchEvent(e)
            }
        }, {
            key: "setReceptivity",
            value: function(t) {
                this.trigger("ReceptivityRange", {
                    value: t
                })
            }
        }, {
            key: "forcePause",
            value: function(t) {
                this.trigger("ForcePause", {
                    value: t
                })
            }
        }]),
        t
    }()
      , VideoSlider = function() {
        function VideoSlider() {
            var t = this
              , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            _classCallCheck(this, VideoSlider),
            this.Y = !1,
            this.width = window.innerWidth,
            this.internalId = null,
            this.hideLogo = !1,
            this.position = "bottom_right",
            this.replaceCodeId = !0,
            this.adSlot = null,
            this.currentAd = null,
            this.mainAd = null,
            this.fallbackAd = null,
            this.X = this.filterAdsForDevice(e),
            this.Z = 0;
            var i = this.getFirstAd()
              , n = null === i ? null : i.allowed_pages;
            if (!1 !== isAllowedPageForAds(n)) {
                var o = null === i ? null : i.blocked_pages;
                if (!isBlockedPageForAds(o)) {
                    var r = null !== i && null !== i.delay_to_start && void 0 !== i.delay_to_start ? 1e3 * parseInt(i.delay_to_start) : 0;
                    r > 0 ? setTimeout(function() {
                        t.start()
                    }, r) : this.start()
                }
            }
        }
        return _createClass(VideoSlider, [{
            key: "loop",
            value: function() {
                var t = this
                  , e = parseInt(this.currentAd.delay_to_loop);
                if (!(e <= 0)) {
                    var i = this;
                    setTimeout(function() {
                        i.Y = !1,
                        t.start()
                    }, 1e3 * e)
                }
            }
        }, {
            key: "start",
            value: function() {
                this.Y || (this.Y = !0,
                this.playAd(this.X[this.Z]))
            }
        }, {
            key: "codeHasHtml",
            value: function(t) {
                return this.codeIsImg(t) || this.codeIsScript(t) || this.codeIsIFrame(t)
            }
        }, {
            key: "codeIsIFrame",
            value: function(t) {
                return t.includes("<iframe")
            }
        }, {
            key: "codeIsScript",
            value: function(t) {
                return t.includes("<script") || t.includes("<div")
            }
        }, {
            key: "codeIsImg",
            value: function(t) {
                return t.includes("<img")
            }
        }, {
            key: "showPartnerSlider",
            value: function showPartnerSlider() {
                this.adDisplayContainer = null;
                var mowContainer = document.createElement("div");
                mowContainer.id = generateId("mow-slider") + "-" + this.currentAd.id,
                mowContainer.innerHTML = this.currentAd.code,
                document.getElementsByTagName("body")[0].appendChild(mowContainer);
                try {
                    var adScripts = mowContainer.querySelectorAll("script");
                    adScripts.forEach(function(adScript, index) {
                        var src = adScript.getAttribute("src");
                        if (src) {
                            if (src) {
                                var script = document.createElement("script");
                                if (adScript.hasAttributes()) {
                                    var _iterator = _createForOfIteratorHelper(adScript.attributes), _step;
                                    try {
                                        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                                            var attr = _step.value;
                                            script.setAttribute(attr.name, attr.value)
                                        }
                                    } catch (t) {
                                        _iterator.e(t)
                                    } finally {
                                        _iterator.f()
                                    }
                                }
                                adScript.before(script),
                                adScript.remove()
                            }
                        } else
                            eval(adScript.innerHTML)
                    })
                } catch (t) {}
            }
        }, {
            key: "playAd",
            value: function(t) {
                var e = this;
                if (this.currentAd = t,
                this.codeHasHtml(t.code))
                    this.showPartnerSlider();
                else if (this.adsManager = null,
                this.adDisplayContainer = null,
                this.adsLoader = null,
                this.rootID = generateId("mow-video-container"),
                this.mowVideoElementID = generateId("mow-video-element"),
                this.mowAdContainerID = generateId("mow-ad-container"),
                this.updateAdLayer(),
                this.hideLogo = t.hide_logo,
                document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", this.getHtml()),
                this.videoElement = document.getElementById(this.mowVideoElementID),
                this.mutedAdsButtton = document.querySelector("#" + this.rootID + " #outstream-muted-button"),
                this.volumeAdsButton = document.querySelector("#" + this.rootID + " #outstream-volume-button"),
                this.closeAdsButton = document.querySelector("#" + this.rootID + " #outstream-close-button"),
                this.adContainer = document.getElementById(this.mowAdContainerID),
                this.mutedAdsButtton.addEventListener("click", this.unmuteAd.bind(this), !1),
                this.volumeAdsButton.addEventListener("click", this.muteAd.bind(this), !1),
                this.closeAdsButton.addEventListener("click", this.closeAd.bind(this), !1),
                this.currentAd.code)
                    if (browser.N && window.receptivity) {
                        var i = null
                          , n = 0;
                        i = setInterval(function() {
                            window.ReceptivityValue && (e.initializeIMA(),
                            clearInterval(i)),
                            n > 500 && (e.initializeIMA(),
                            clearInterval(i)),
                            n++
                        }, 10)
                    } else
                        this.initializeIMA()
            }
        }, {
            key: "onAdLoaded",
            value: function() {}
        }, {
            key: "muteAd",
            value: function() {
                this.volumeAdsButton.style.display = "none",
                this.mutedAdsButtton.style.display = "grid",
                this.adsManager.setVolume(0)
            }
        }, {
            key: "unmuteAd",
            value: function() {
                this.volumeAdsButton.style.display = "grid",
                this.mutedAdsButtton.style.display = "none",
                this.adsManager.setVolume(1)
            }
        }, {
            key: "closeAd",
            value: function() {
                var t = this.getFirstAd();
                void 0 !== t.close_all_slider && t.close_all_slider ? this.onAllCloseButton() : this.onCloseButton()
            }
        }, {
            key: "onAllCloseButton",
            value: function() {
                var t = new Event("closeSlider");
                document.dispatchEvent(t)
            }
        }, {
            key: "onCloseButton",
            value: function() {
                !0 === this.Y && (document.getElementById(this.rootID).classList.remove("loading"),
                this.adsManager && this.adsManager.destroy(),
                this.onAdEnd())
            }
        }, {
            key: "onResize",
            value: function(t) {}
        }, {
            key: "onAdEnd",
            value: function(t) {
                this.loop(),
                document.getElementById(this.rootID).classList.remove("loading"),
                this.resetAdManager(),
                Mow.receptivityRange && this.triggerReceptivity({
                    Event: "Video_Q4",
                    CreativeId: this.currentAd.internal_id
                })
            }
        }, {
            key: "onAdSkippable",
            value: function(t) {
                document.getElementById(this.rootID).classList.remove("loading"),
                this.resetAdManager(),
                Mow.receptivityRange && this.triggerReceptivity({
                    Event: "Video_Skip",
                    CreativeId: this.currentAd.internal_id
                })
            }
        }, {
            key: "onAdImpression",
            value: function(t) {
                document.getElementById(this.rootID).classList.add("loading"),
                setTimeout(this.updateAdLayer, 1),
                Mow.receptivityRange && this.triggerReceptivity({
                    Event: "Video_Impression",
                    CreativeId: this.currentAd.internal_id
                })
            }
        }, {
            key: "onAdsLoaded",
            value: function(t) {
                Mow.receptivityRange && this.triggerReceptivity({
                    Event: "Video_Load",
                    CreativeId: this.currentAd.internal_id
                })
            }
        }, {
            key: "countdown",
            value: function(t) {
                if (this.currentAd.dg_show_close_button) {
                    var e = 1e3 * this.currentAd.dg_show_close_button_delay
                      , i = this;
                    setTimeout(function() {
                        var t = document.querySelector("#" + i.rootID + " #outstream-close-button")
                          , e = document.querySelector("#" + i.rootID + " #outstream-close-times");
                        t.style.display = "block",
                        e.style.display = "none"
                    }, e)
                }
            }
        }, {
            key: "onAdsStarted",
            value: function(t) {
                this.countdown(5),
                Mow.receptivityRange && this.triggerReceptivity({
                    Event: "Video_Start",
                    CreativeId: this.currentAd.internal_id
                })
            }
        }, {
            key: "onAdError",
            value: function(t) {
                this.resetAdManager(),
                this.Z++,
                void 0 !== this.X[this.Z] && this.playAd(this.X[this.Z])
            }
        }, {
            key: "resetAdManager",
            value: function() {
                this.adsLoader && (this.adsLoader.destroy(),
                this.adsLoader.contentComplete()),
                this.adsManager && this.adsManager.destroy()
            }
        }, {
            key: "onAdsManagerLoaded",
            value: function(t) {
                var e = this
                  , i = new google.ima.AdsRenderingSettings;
                i.restoreCustomPlaybackStateOnAdBreakComplete = !0,
                i.enablePreloading = !0,
                i.autoAlign = !0,
                i.useStyledNonLinearAds = !0,
                i.AUTO_SCALE = !0,
                i.useStyledLinearAds = !0,
                this.adsManager = t.getAdsManager(this.videoElement, i);
                try {
                    this.videoElement.load(),
                    this.adDisplayContainer.initialize(),
                    this.adsManager.setVolume(0),
                    this.adsManager.init(this.videoElement.clientWidth, this.videoElement.clientHeight, google.ima.ViewMode.NORMAL),
                    this.adsManager.start()
                } catch (t) {}
                this.adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, this.onAdEnd.bind(this), !1),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.IMPRESSION, this.onAdImpression.bind(this), !1),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPED, this.onAdSkippable.bind(this), !1),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, this.onAdsLoaded.bind(this), !1),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, this.onAdsStarted.bind(this), !1),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, this.onContentPauseRequested.bind(this)),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, this.onContentResumeRequested.bind(this)),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.PAUSED, function() {
                    Mow.receptivityRange && e.triggerReceptivity({
                        Event: "Video_Pause",
                        CreativeId: e.currentAd.internal_id
                    })
                }),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.RESUMED, function() {
                    Mow.receptivityRange && e.triggerReceptivity({
                        Event: "Video_Resume",
                        CreativeId: e.currentAd.internal_id
                    })
                }),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.FIRST_QUARTILE, function(t) {
                    Mow.receptivityRange && e.triggerReceptivity({
                        Event: "Video_Q1",
                        CreativeId: e.currentAd.internal_id
                    })
                }),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.MIDPOINT, function(t) {
                    Mow.receptivityRange && e.triggerReceptivity({
                        Event: "Video_Q2",
                        CreativeId: e.currentAd.internal_id
                    })
                }),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.THIRD_QUARTILE, function(t) {
                    Mow.receptivityRange && e.triggerReceptivity({
                        Event: "Video_Q3",
                        CreativeId: e.currentAd.internal_id
                    })
                }),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, function(t) {
                    Mow.receptivityRange && e.triggerReceptivity({
                        Event: "Video_Stop",
                        CreativeId: e.currentAd.internal_id
                    })
                }),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.CLICK, function(t) {
                    Mow.receptivityRange && e.triggerReceptivity({
                        Event: "Video_Clicked",
                        CreativeId: e.currentAd.internal_id
                    })
                });
                var n = 0;
                this.adsManager.addEventListener(google.ima.AdEvent.Type.AD_PROGRESS, function(t) {
                    var i = t.getAdData();
                    n < parseInt(i.currentTime) && (n = parseInt(i.currentTime),
                    e.calculateReceptivity())
                }),
                window.addEventListener("resize", this.updateAdLayer.bind(this), !1)
            }
        }, {
            key: "onContentPauseRequested",
            value: function() {}
        }, {
            key: "onContentResumeRequested",
            value: function() {}
        }, {
            key: "initializeIMA",
            value: function() {
                this.volumeAdsButton.style.display = "none",
                google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED),
                google.ima.settings.setDisableCustomPlaybackForIOS10Plus(!0),
                this.adDisplayContainer = new google.ima.AdDisplayContainer(this.adContainer,this.videoElement),
                new google.ima.AdsLoader(this.adDisplayContainer).destroy(),
                this.adsLoader = new google.ima.AdsLoader(this.adDisplayContainer),
                this.adsLoader.getSettings().setPlayerType("mowplayer"),
                this.adsLoader.getSettings().setPlayerVersion("1.1.0"),
                this.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.onAdsManagerLoaded.bind(this), !1),
                this.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError.bind(this), !1),
                window.ReceptivityValue && (this.currentAd.code = this.currentAd.code.replace("receptivity_value", window.ReceptivityValue).replace("ReceptivityState", "ReceptivityLookalike")),
                browser.N || (this.currentAd.code = this.currentAd.code.replace("receptivity_value", "Yes").replace("ReceptivityState", "ReceptivityLookalike"));
                var t = new google.ima.AdsRequest
                  , e = this.currentAd.code
                  , i = (e = e.replace("description_url=[placeholder]", "description_url=" + encodeURIComponent(refererUrl()))).slice(e.indexOf("?") + 1).split("&")
                  , n = {};
                i.map(function(t) {
                    var e = _slicedToArray(t.split("="), 2)
                      , i = e[0]
                      , o = e[1];
                    n[i] = decodeURIComponent(o)
                }),
                void 0 === n.ad_type ? (n.ad_type = "audio_video",
                e += "&ad_type=audio_video") : "audio_video" !== n.ad_type && "video_audio" !== n.ad_type || (n.ad_type = "audio_video",
                e = e.replace("ad_type=video_audio", "ad_type=audio_video")),
                void 0 !== n.ad_type && "audio" === n.ad_type ? e += "&vpmute=0" : e += "&vpmute=1",
                e += "&plcmt=2",
                t.adTagUrl = e,
                t.linearAdSlotWidth = this.videoElement.clientWidth,
                t.linearAdSlotHeight = this.videoElement.clientHeight,
                t.nonLinearAdSlotWidth = this.videoElement.clientWidth,
                t.nonLinearAdSlotHeight = this.videoElement.clientHeight / 3,
                t.setContinuousPlayback(!0),
                t.setAdWillPlayMuted(1),
                this.adsLoader.requestAds(t)
            }
        }, {
            key: "updateAdLayer",
            value: function() {
                if (this.width = window.innerWidth,
                this.currentAd) {
                    var t = [];
                    this.currentAd.isMobile ? (this.currentAd.width_height_mobile && (t = this.currentAd.width_height_mobile.split("|")),
                    this.slider_width = void 0 === t[0] || "" === t[0] ? 180 : parseInt(t[0]),
                    this.slider_height = void 0 === t[1] || "" === t[1] ? 102 : parseInt(t[1])) : (this.currentAd.width_height_desktop && (t = this.currentAd.width_height_desktop.split("|")),
                    this.slider_width = void 0 === t[0] || "" === t[0] ? 320 : parseInt(t[0]),
                    this.slider_height = void 0 === t[1] || "" === t[1] ? 180 : parseInt(t[1]))
                }
                this.adsManager && this.adsManager.resize(this.videoElement.clientWidth, this.videoElement.clientHeight, google.ima.ViewMode.NORMAL)
            }
        }, {
            key: "triggerReceptivity",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                window.receptivity && (0 == window.receptivity_events.length || window.receptivity_events.includes(t.Event)) && "undefined" != typeof Contxtful && "function" == typeof Contxtful.Api.TriggerEvent && Contxtful.Api.TriggerEvent(t)
            }
        }, {
            key: "calculateReceptivity",
            value: function() {
                "undefined" != typeof Contxtful && "function" == typeof Contxtful.Api.SetReceptivity && Contxtful.Api.SetReceptivity()
            }
        }, {
            key: "getHtml",
            value: function() {
                var t = "right: 10px !important;"
                  , e = "right: -600px; bottom: 10px !important;"
                  , i = (this.currentAd.isMobile,
                120)
                  , n = this.currentAd.isMobile && null !== this.currentAd.position_mobile ? this.currentAd.position_mobile : this.currentAd.position;
                "top_right" === n ? (t = "right: 10px !important;",
                e = "top:10px; right: -600px;") : "top_left" == n ? (t = "top:10px;left: 10px !important;",
                e = "left: -600px;") : "top_center" == n ? (t = "left: calc(50% - " + this.slider_width / 2 + "px); top:10px !important;",
                e = "top: -600px;") : "bottom_left" == n ? (t = "left: 10px !important; bottom:" + parseInt(i + 10) + "px !important;",
                e = "left: -600px;") : "bottom_center" == n ? (t = "left: calc(50% - " + this.slider_width / 2 + "px); bottom: " + i + "px !important;",
                e = "bottom: -600px;") : "bottom_right" == n && (t = "right: 10px !important; bottom:" + i + "px !important;",
                e = "right: -600px;");
                var o = "top: -26px; border-radius: 5px 5px 0 0;"
                  , r = "top: -26px;right: 0px;"
                  , s = "color: black;top: -26px; right: 0px;";
                "top_right" !== n && "top_center" !== n && "top_left" !== n || (o = "bottom: -32px; border-radius: 0 0 5px 5px;",
                r = "border-radius: 50%;background-color: #fff;top: 10px;right: 10px;",
                s = "color: whitesmoke; top: 10px; right: 10px;");
                return '<div class="close-display-general outstream-close-button" id="outstream-close-button" style="display:none;"><button style="display: block;"><svg enable-background="new 0 0 20 20" height="18" viewBox="0 0 20 20" width="8" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><clipPath id="a"><path d="m0 0h20v20h-20z"></path></clipPath><path clip-path="url(#a)" d="m19 20c-.3 0-.5-.1-.7-.3l-8.3-8.3-8.3 8.3c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l8.3-8.3-8.3-8.3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l8.3 8.3 8.3-8.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-8.3 8.3 8.3 8.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z"></path></svg></button></div>',
                "<style>#" + this.rootID + " .outstream-close-button{cursor: pointer;position: absolute;" + r + "z-index: 1000000;width: 28px;height: 28px;text-align: center;vertical-align: center;line-height: 30px;}#" + this.rootID + " .outstream-close-times{cursor: pointer;position: absolute; height: 28px; text-align: center; line-height: 30px;z-index: 1000000;" + s + "}#" + this.rootID + ".loading {" + t + '}</style><div id="' + this.rootID + '" class="mow-ad" style="background:#ffffff;width:' + this.slider_width + "px;height:" + this.slider_height + "px;position: fixed;" + e + ' z-index:9999999999;padding:0">\n       <div class="logo_bar" style="' + (this.hideLogo ? "display:none;" : "") + " position: absolute;z-index: -1;left: 0;padding: 4px 20px 4px 20px; height: 26px; background: #FFFFFF;" + o + 'width: 63px;box-sizing: unset !important;"><a href="https://mowplayer.com" target="_blank"><svg version="1.1" id="Capa_1234" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 239.7 58.8" style="enable-background:new 0 0 239.7 58.8;" xml:space="preserve">\n<style type="text/css">\n\t.st0{clip-path:url(#SVGID_2_);fill:url(#SVGID_3_);}\n\t.st1{clip-path:url(#SVGID_5_);fill:url(#SVGID_6_);}\n\t.st2{clip-path:url(#SVGID_8_);fill:url(#SVGID_9_);}\n\t.st3{clip-path:url(#SVGID_11_);fill:url(#SVGID_12_);}\n</style>\n<g>\n\t<g>\n\t\t<defs>\n\t\t\t<path id="SVGID_1_" d="M75,5.9c-2.1-1.9-4.6-3.4-7.5-4.4S61.6,0,58.4,0C55,0,51.9,0.8,49,2.4s-5.1,3.7-6.8,6.3\n\t\t\t\tc-2-2.7-4.4-4.8-7.3-6.4C32,0.8,28.8,0,25.1,0C20.9,0,17.2,0.6,14,1.8C10.9,3,8.3,4.7,6.2,7c-2.1,2.3-3.6,5-4.7,8.2\n\t\t\t\tC0.5,18.3,0,21.8,0,25.6v21.8c0,3.3,1,5.9,2.7,7.7c1.9,1.8,4.4,2.7,7.3,2.7h3.8V24.6c0-4,0.9-6.9,2.7-9c1.8-2.1,4.1-3.1,6.8-3.1\n\t\t\t\tc3.1,0,5.7,1,7.6,3.1c1.9,2.1,2.9,5.4,2.9,10.1v21.7c0,3.4,1,6,2.8,7.7c1.9,1.7,4.4,2.6,7.5,2.6h3.8V24.2c0-3.9,0.8-6.8,2.6-8.8\n\t\t\t\tc1.7-1.9,4-2.9,6.9-2.9c3.1,0,5.6,1,7.5,3.1c1.9,2.1,2.8,5.4,2.8,10.1v21.7c0,3.4,0.8,6,2.5,7.7s4.4,2.6,8.2,2.6h3.4V23.8\n\t\t\t\tc0-3.9-0.6-7.4-1.8-10.4S77.1,7.9,75,5.9z"/>\n\t\t</defs>\n\t\t<clipPath id="SVGID_2_">\n\t\t\t<use xlink:href="#SVGID_1_"  style="overflow:visible;"/>\n\t\t</clipPath>\n\t\t<linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="0" y1="29.5" x2="239.7" y2="29.5">\n\t\t\t<stop  offset="0" style="stop-color:#FF325E"/>\n\t\t\t<stop  offset="1" style="stop-color:#971F9C"/>\n\t\t</linearGradient>\n\t\t<rect y="0.2" class="st0" width="239.7" height="58.6"/>\n\t</g>\n\t<g>\n\t\t<defs>\n\t\t\t<path id="SVGID_4_" d="M236.6,0c-3.8,0-6.5,0.9-8.2,2.6c-1.7,1.8-2.5,4.3-2.5,7.7V32c0,4.6-0.9,8-2.8,10.1\n\t\t\t\tc-1.9,2.1-4.4,3.1-7.5,3.1c-2.8,0-5.1-0.9-6.9-2.9c-1.7-2-2.6-4.9-2.6-8.8V0h-3.8c-3.2,0-5.7,0.9-7.5,2.6\n\t\t\t\tc-1.9,1.8-2.8,4.3-2.8,7.7v21.8c0,4.6-1,8-2.9,10.1c-1.9,2.1-4.5,3.1-7.6,3.1c-2.7,0-5-1-6.8-3.1c-1.8-2.1-2.7-5.1-2.7-9V0h-3.8\n\t\t\t\tc-3,0-5.4,0.9-7.3,2.7C159,4.5,158,7,158,10.3v21.8c0,3.8,0.5,7.3,1.5,10.4c1,3.1,2.5,5.8,4.6,8.1c2,2.3,4.7,4,7.8,5.2\n\t\t\t\tc3.1,1.2,6.8,1.8,11.1,1.8c3.7,0,6.9-0.7,9.8-2.3c2.9-1.5,5.4-3.7,7.4-6.4c1.6,2.7,3.8,4.8,6.7,6.4c2.8,1.6,6,2.4,9.4,2.4\n\t\t\t\tc3.2,0,6.2-0.5,9.1-1.5c2.9-0.9,5.4-2.4,7.5-4.4c2.1-2,3.8-4.5,5-7.5c1.2-3,1.8-6.5,1.8-10.4V0H236.6z"/>\n\t\t</defs>\n\t\t<clipPath id="SVGID_5_">\n\t\t\t<use xlink:href="#SVGID_4_"  style="overflow:visible;"/>\n\t\t</clipPath>\n\t\t<linearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" x1="0" y1="29.5" x2="239.7" y2="29.5">\n\t\t\t<stop  offset="0" style="stop-color:#FF325E"/>\n\t\t\t<stop  offset="1" style="stop-color:#971F9C"/>\n\t\t</linearGradient>\n\t\t<rect y="0.2" class="st1" width="239.7" height="58.6"/>\n\t</g>\n\t<g>\n\t\t<defs>\n\t\t\t<path id="SVGID_7_" d="M119.8,0.2c-16.2,0-29.3,13.1-29.3,29.3c0,16.2,13.1,29.3,29.3,29.3s29.3-13.1,29.3-29.3\n\t\t\t\tC149.1,13.3,136,0.2,119.8,0.2z M119.8,46.2c-9.2,0-16.7-7.5-16.7-16.7c0-9.2,7.5-16.7,16.7-16.7s16.7,7.5,16.7,16.7\n\t\t\t\tC136.5,38.7,129,46.2,119.8,46.2z"/>\n\t\t</defs>\n\t\t<clipPath id="SVGID_8_">\n\t\t\t<use xlink:href="#SVGID_7_"  style="overflow:visible;"/>\n\t\t</clipPath>\n\t\t<linearGradient id="SVGID_9_" gradientUnits="userSpaceOnUse" x1="0" y1="29.5" x2="239.7" y2="29.5">\n\t\t\t<stop  offset="0" style="stop-color:#FF325E"/>\n\t\t\t<stop  offset="1" style="stop-color:#971F9C"/>\n\t\t</linearGradient>\n\t\t<rect y="0.2" class="st2" width="239.7" height="58.6"/>\n\t</g>\n\t<g>\n\t\t<defs>\n\t\t\t<path id="SVGID_10_" d="M119,22.8c-0.9-0.7-2.3-0.1-2.3,1.1v9.9c0,1.2,1.3,1.8,2.3,1.1l6.2-4.9c0.7-0.6,0.7-1.7,0-2.3L119,22.8z"\n\t\t\t\t/>\n\t\t</defs>\n\t\t<clipPath id="SVGID_11_">\n\t\t\t<use xlink:href="#SVGID_10_"  style="overflow:visible;"/>\n\t\t</clipPath>\n\t\t<linearGradient id="SVGID_12_" gradientUnits="userSpaceOnUse" x1="0" y1="29.5" x2="239.7" y2="29.5">\n\t\t\t<stop  offset="0" style="stop-color:#FF325E"/>\n\t\t\t<stop  offset="1" style="stop-color:#971F9C"/>\n\t\t</linearGradient>\n\t\t<rect y="0.2" class="st3" width="239.7" height="58.6"/>\n\t</g>\n</g>\n</svg></a></div><div class="close-display-general outstream-close-button" id="outstream-close-button" style="display:none;"><button style="display: block;"><svg enable-background="new 0 0 20 20" height="18" viewBox="0 0 20 20" width="8" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><clipPath id="a"><path d="m0 0h20v20h-20z"></path></clipPath><path clip-path="url(#a)" d="m19 20c-.3 0-.5-.1-.7-.3l-8.3-8.3-8.3 8.3c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l8.3-8.3-8.3-8.3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l8.3 8.3 8.3-8.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-8.3 8.3 8.3 8.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z"></path></svg></button></div>        <video id="' + this.mowVideoElementID + '" playsinline style="width:100%;height:100%;"></video>\n        <div id="' + this.mowAdContainerID + '" style="position: absolute;top:0px; left:0px;bottom: 0px;right: 0px;width: 100%;height: 100%;z-index: 99999;"></div>\n        <div id="outstream-close-times" class="outstream-close-times"></div>        <div class="outstream-custom-button" style="margin: 0;left: 10px;z-index: 100010;position: absolute;bottom: 10px;">\n            <div id="outstream-volume-button" class="float-child" style="cursor: pointer;display: grid !important;margin-left: 22% !important;margin-top: 19% !important;display: none;">\n                <svg style="vertical-align: initial !important;" width="18" height="18" enable-background="new 0 0 35.9 26" viewBox="0 0 35.9 26"\n                     xmlns="http://www.w3.org/2000/svg">\n                    <path d="m16.3 25.9c-.2 0-.4-.1-.6-.2l-8.2-6.6h-6.5c-.6 0-1-.4-1-1v-10.2c0-.6.4-1 1-1h6.4l8.2-6.6c.4-.2.8-.3 1.1-.1s.6.5.6.9v23.8c0 .4-.2.7-.6.9-.1.1-.3.1-.4.1zm-14.3-8.8h5.8c.2 0 .4.1.6.2l6.9 5.5v-19.6l-6.9 5.5c-.2.1-.4.2-.6.2h-5.8z"/>\n                    <path d="m30 26c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4 6.2-6.2 6.2-16.4 0-22.6-.4-.4-.4-1 0-1.4s1-.4 1.4 0c7 7 7 18.4 0 25.4-.2.2-.4.3-.7.3zm-6-6c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4 2.9-2.9 2.9-7.7 0-10.6-.4-.4-.4-1 0-1.4s1-.4 1.4 0c3.7 3.7 3.7 9.7 0 13.4-.2.2-.4.3-.7.3z"/>\n                </svg>\n            </div>\n            <div id="outstream-muted-button" class="float-child" style="cursor: pointer;display: grid !important;margin-left: 22% !important;margin-top: 19% !important;">\n                <svg style="vertical-align: initial !important;" width="18" height="18" enable-background="new 0 0 25.9 17.9" viewBox="0 0 25.9 17.9"\n                     xmlns="http://www.w3.org/2000/svg">\n                    <path d="m11.2 17.9c-.2 0-.4-.1-.6-.2l-5.5-4.4h-4.2c-.5 0-.9-.4-.9-.9v-6.9c0-.5.4-.9.9-.9h4.2l5.5-4.4c.3-.2.7-.3 1-.1s.5.5.5.8v16c0 .4-.2.7-.5.8-.1.2-.2.2-.4.2zm-9.3-6.5h3.6c.2 0 .4.1.6.2l4.2 3.3v-12l-4.2 3.3c-.2.2-.4.3-.6.3h-3.6z"/>\n                    <path d="m18.1 13.3c-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.3l6.9-6.9c.4-.4 1-.4 1.3 0 .4.4.4 1 0 1.3l-6.9 6.9c-.1.2-.4.3-.6.3z"/>\n                    <path d="m24.9 13.3c-.2 0-.5-.1-.7-.3l-6.9-6.9c-.4-.4-.4-1 0-1.3.4-.4 1-.4 1.3 0l6.9 6.9c.4.4.4 1 0 1.3-.1.2-.3.3-.6.3z"/>\n                </svg>\n            </div>\n        </div>\n    </div>'
            }
        }, {
            key: "getFirstAd",
            value: function() {
                return void 0 === this.X || void 0 === this.X[0] ? null : this.X[0]
            }
        }, {
            key: "filterAdsForDevice",
            value: function(t) {
                var e = []
                  , i = window.innerWidth;
                return t.forEach(function(t) {
                    i <= 768 && "mobile" === t.device ? (t.isMobile = !0,
                    e.push(t)) : i > 768 && "desktop" === t.device && (t.isMobile = !1,
                    e.push(t))
                }),
                e
            }
        }]),
        VideoSlider
    }()
      , VideoInText = function() {
        function t() {
            var e = this
              , i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            _classCallCheck(this, t),
            this.width = window.innerWidth,
            this.adSlot = null,
            this.currentAd = null,
            this.mainAd = null,
            this.fallbackAd = null,
            i.forEach(function(t) {
                t.fallback ? e.fallbackAd || (e.fallbackAd = t) : e.mainAd || (e.mainAd = t)
            }),
            i.forEach(function(t) {
                t.fallback ? e.fallbackAd || (e.fallbackAd = t) : e.mainAd || (e.mainAd = t)
            });
            var n = null === this.mainAd || void 0 === this.mainAd ? null : this.mainAd.blocked_pages;
            isBlockedPageForAds(n) || this.mainAd && this.playAd(this.mainAd)
        }
        return _createClass(t, [{
            key: "playAd",
            value: function(t) {
                var e = this;
                this.currentAd = t,
                this.adsManager = null,
                this.adDisplayContainer = null,
                this.adsLoader = null,
                this.rootID = generateId("mow-video-container"),
                this.mowVideoElementID = generateId("mow-video-element"),
                this.mowAdContainerID = generateId("mow-ad-container"),
                this.updateAdLayer();
                var i = 0
                  , n = setInterval(function() {
                    e.element = null;
                    for (var t = e.currentAd.css_selector.split(","); null === e.element && 0 < t.length; ) {
                        var o = domSearch(t[0]);
                        o && (e.element = o)
                    }
                    if (e.element) {
                        if ("inner_last" === e.currentAd.inject_at ? e.element.insertAdjacentHTML("afterbegin", e.getHtml()) : "inner_first" === e.currentAd.inject_at ? e.element.insertAdjacentHTML("afterbegin", e.getHtml()) : "before" === e.currentAd.inject_at ? e.element.insertAdjacentHTML("beforebegin", e.getHtml()) : e.element.insertAdjacentHTML("afterend", e.getHtml()),
                        e.videoElement = document.getElementById(e.mowVideoElementID),
                        e.mutedAdsButtton = document.querySelector("#" + e.rootID + " #outstream-muted-button"),
                        e.volumeAdsButton = document.querySelector("#" + e.rootID + " #outstream-volume-button"),
                        e.closeAdsButton = document.querySelector("#" + e.rootID + " #outstream-close-button"),
                        e.adContainer = document.getElementById(e.mowAdContainerID),
                        e.clientWidth = null,
                        e.clientHeight = null,
                        e.calculateVideoClientDimention(),
                        e.mutedAdsButtton.addEventListener("click", e.unmuteAd.bind(e), !1),
                        e.volumeAdsButton.addEventListener("click", e.muteAd.bind(e), !1),
                        e.closeAdsButton.addEventListener("click", e.closeAd.bind(e), !1),
                        e.adInjected = !1,
                        e.visiblityChange = !1,
                        1 == e.currentAd.in_view_autoplay) {
                            var r = function() {
                                var t = document.querySelector("#" + e.rootID).getBoundingClientRect()
                                  , i = t.height * parseFloat(.5)
                                  , n = t.top > 0 && t.top + i < window.innerHeight || t.top < 0 && t.top + i > 0;
                                if (e.visiblityChange !== n) {
                                    if (e.visiblityChange = n,
                                    n && !e.adInjected)
                                        if (e.adInjected = !0,
                                        browser.N && window.receptivity) {
                                            var o = null
                                              , r = 0;
                                            o = setInterval(function() {
                                                window.ReceptivityValue && (e.initializeIMA(),
                                                clearInterval(o)),
                                                r > 500 && (e.initializeIMA(),
                                                clearInterval(o)),
                                                r++
                                            }, 10)
                                        } else
                                            e.initializeIMA();
                                    e.adsManager && (n ? e.adsManager.resume() : e.adsManager.pause())
                                }
                            };
                            r(),
                            window.addEventListener("scroll", r),
                            window.addEventListener("resize", r)
                        } else if (browser.N && window.receptivity) {
                            var s = null
                              , a = 0;
                            s = setInterval(function() {
                                window.ReceptivityValue && (e.initializeIMA(),
                                clearInterval(s)),
                                a > 500 && (e.initializeIMA(),
                                clearInterval(s)),
                                a++
                            }, 10)
                        } else
                            e.initializeIMA();
                        return clearInterval(n),
                        !0
                    }
                    (i += 25) > 25e3 && clearInterval(n)
                }, 25);
                this.currentVastIndex++
            }
        }, {
            key: "calculateVideoClientDimention",
            value: function() {
                this.clientWidth = this.videoElement.clientWidth,
                this.clientHeight = parseInt(9 * this.videoElement.clientWidth / 16)
            }
        }, {
            key: "muteAd",
            value: function() {
                this.volumeAdsButton.style.display = "none",
                this.mutedAdsButtton.style.display = "grid",
                this.adsManager.setVolume(0),
                Mow.receptivityRange && this.triggerReceptivity({
                    Event: "Video_mute",
                    CreativeId: this.internalId
                })
            }
        }, {
            key: "unmuteAd",
            value: function() {
                this.volumeAdsButton.style.display = "grid",
                this.mutedAdsButtton.style.display = "none",
                this.adsManager.setVolume(1),
                Mow.receptivityRange && this.triggerReceptivity({
                    Event: "Video_unmute",
                    CreativeId: this.currentAd.internal_id
                })
            }
        }, {
            key: "closeAd",
            value: function() {
                document.getElementById(this.rootID).classList.remove("loading"),
                this.adsManager.destroy(),
                this.onAdEnd()
            }
        }, {
            key: "onResize",
            value: function(t) {}
        }, {
            key: "onAdEnd",
            value: function(t) {
                document.getElementById(this.rootID).classList.remove("loading"),
                document.getElementById(this.rootID).classList.add("finished"),
                this.resetAdManager(),
                Mow.receptivityRange && this.triggerReceptivity({
                    Event: "Video_Q4",
                    CreativeId: this.currentAd.internal_id
                })
            }
        }, {
            key: "onAdSkippable",
            value: function(t) {
                document.getElementById(this.rootID).classList.remove("loading"),
                this.resetAdManager(),
                Mow.receptivityRange && this.triggerReceptivity({
                    Event: "Video_Skip",
                    CreativeId: this.currentAd.internal_id
                })
            }
        }, {
            key: "onAdImpression",
            value: function(t) {
                document.getElementById(this.rootID).classList.add("loading"),
                setTimeout(this.updateAdLayer, 1),
                Mow.receptivityRange && this.triggerReceptivity({
                    Event: "Video_Impression",
                    CreativeId: this.currentAd.internal_id
                })
            }
        }, {
            key: "onAdsLoaded",
            value: function(t) {
                Mow.receptivityRange && this.triggerReceptivity({
                    Event: "Video_Load",
                    CreativeId: this.currentAd.internal_id
                })
            }
        }, {
            key: "countdown",
            value: function(t) {
                var e = document.querySelector("#" + this.rootID + " #outstream-close-times")
                  , i = this;
                t >= 1 ? (e.innerHTML = "Close AD " + t,
                setTimeout(function() {
                    i.countdown(t - 1)
                }, 1e3)) : (document.querySelector("#" + this.rootID + " #outstream-close-button").style.display = "block",
                e.style.display = "none")
            }
        }, {
            key: "onAdsStarted",
            value: function(t) {
                this.countdown(5),
                Mow.receptivityRange && this.triggerReceptivity({
                    Event: "Video_Start",
                    CreativeId: this.currentAd.internal_id
                })
            }
        }, {
            key: "onAdError",
            value: function(t) {
                this.resetAdManager(),
                !this.currentAd.fallback && this.fallbackAd && this.playAd(this.fallbackAd)
            }
        }, {
            key: "resetAdManager",
            value: function() {
                this.adsLoader && (this.adsLoader.destroy(),
                this.adsLoader.contentComplete()),
                this.adsManager && this.adsManager.destroy()
            }
        }, {
            key: "onAdsManagerLoaded",
            value: function(t) {
                var e = this
                  , i = new google.ima.AdsRenderingSettings;
                i.restoreCustomPlaybackStateOnAdBreakComplete = !0,
                i.enablePreloading = !0,
                i.autoAlign = !0,
                i.useStyledNonLinearAds = !0,
                i.AUTO_SCALE = !0,
                i.useStyledLinearAds = !0,
                this.adsManager = t.getAdsManager(this.videoElement, i);
                try {
                    this.videoElement.load(),
                    this.adDisplayContainer.initialize(),
                    this.adsManager.setVolume(0),
                    this.adsManager.init(this.clientWidth, this.clientHeight, google.ima.ViewMode.NORMAL),
                    this.adsManager.start()
                } catch (t) {}
                this.adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, this.onAdEnd.bind(this), !1),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.IMPRESSION, this.onAdImpression.bind(this), !1),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPED, this.onAdSkippable.bind(this), !1),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, this.onAdsLoaded.bind(this), !1),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, this.onAdsStarted.bind(this), !1),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, this.onContentPauseRequested.bind(this)),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, this.onContentResumeRequested.bind(this)),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.PAUSED, function() {
                    Mow.receptivityRange && e.triggerReceptivity({
                        Event: "Video_Pause",
                        CreativeId: e.currentAd.internal_id
                    })
                }),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.RESUMED, function() {
                    Mow.receptivityRange && e.triggerReceptivity({
                        Event: "Video_Resume",
                        CreativeId: e.currentAd.internal_id
                    })
                }),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.FIRST_QUARTILE, function(t) {
                    Mow.receptivityRange && e.triggerReceptivity({
                        Event: "Video_Q1",
                        CreativeId: e.currentAd.internal_id
                    })
                }),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.MIDPOINT, function(t) {
                    Mow.receptivityRange && e.triggerReceptivity({
                        Event: "Video_Q2",
                        CreativeId: e.currentAd.internal_id
                    })
                }),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.THIRD_QUARTILE, function(t) {
                    Mow.receptivityRange && e.triggerReceptivity({
                        Event: "Video_Q3",
                        CreativeId: e.currentAd.internal_id
                    })
                }),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, function(t) {
                    Mow.receptivityRange && e.triggerReceptivity({
                        Event: "Video_Stop",
                        CreativeId: e.currentAd.internal_id
                    })
                }),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.CLICK, function(t) {
                    Mow.receptivityRange && e.triggerReceptivity({
                        Event: "Video_Clicked",
                        CreativeId: e.currentAd.internal_id
                    })
                });
                var n = 0;
                this.adsManager.addEventListener(google.ima.AdEvent.Type.AD_PROGRESS, function(t) {
                    var i = t.getAdData();
                    n < parseInt(i.currentTime) && (n = parseInt(i.currentTime),
                    e.calculateReceptivity())
                }),
                window.addEventListener("resize", this.updateAdLayer.bind(this), !1)
            }
        }, {
            key: "onContentPauseRequested",
            value: function() {}
        }, {
            key: "onContentResumeRequested",
            value: function() {}
        }, {
            key: "initializeIMA",
            value: function() {
                this.volumeAdsButton.style.display = "none",
                google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED),
                google.ima.settings.setDisableCustomPlaybackForIOS10Plus(!0),
                this.adDisplayContainer = new google.ima.AdDisplayContainer(this.adContainer,this.videoElement),
                new google.ima.AdsLoader(this.adDisplayContainer).destroy(),
                this.adsLoader = new google.ima.AdsLoader(this.adDisplayContainer),
                this.adsLoader.getSettings().setPlayerType("mowplayer"),
                this.adsLoader.getSettings().setPlayerVersion("1.1.0"),
                this.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.onAdsManagerLoaded.bind(this), !1),
                this.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError.bind(this), !1);
                var t = new google.ima.AdsRequest;
                window.ReceptivityValue && (this.currentAd.code = this.currentAd.code.replace("receptivity_value", window.ReceptivityValue)),
                browser.N || (this.currentAd.code = this.currentAd.code.replace("receptivity_value", "receptive"));
                var e = this.currentAd.code
                  , i = (e = (e += "&plcmt=2").replace("description_url=[placeholder]", "description_url=" + encodeURIComponent(refererUrl()))).slice(e.indexOf("?") + 1).split("&")
                  , n = {};
                i.map(function(t) {
                    var e = _slicedToArray(t.split("="), 2)
                      , i = e[0]
                      , o = e[1];
                    n[i] = decodeURIComponent(o)
                }),
                void 0 === n.ad_type ? (n.ad_type = "video",
                e += "&ad_type=video") : "audio_video" !== n.ad_type && "video_audio" !== n.ad_type || (n.ad_type = "video",
                e = (e = e.replace("ad_type=audio_video", "ad_type=video")).replace("ad_type=video_audio", "ad_type=video")),
                void 0 === n.ad_type || "audio" !== n.ad_type && "audio_video" !== n.ad_type && "video_audio" !== n.ad_type ? e += "&vpmute=1" : e += "&vpmute=0",
                t.adTagUrl = e,
                t.linearAdSlotWidth = this.clientWidth,
                t.linearAdSlotHeight = this.clientHeight,
                t.nonLinearAdSlotWidth = this.videoElement.clientWidth,
                t.nonLinearAdSlotHeight = this.videoElement.clientHeight / 3,
                t.setContinuousPlayback(!0),
                t.setAdWillPlayMuted(1),
                this.adsLoader.requestAds(t)
            }
        }, {
            key: "updateAdLayer",
            value: function() {
                this.width = window.innerWidth,
                this.adsManager && this.adsManager.resize(this.clientWidth, this.clientHeight, google.ima.ViewMode.NORMAL)
            }
        }, {
            key: "triggerReceptivity",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                "undefined" != typeof Contxtful && "function" == typeof Contxtful.Api.TriggerEvent && Contxtful.Api.TriggerEvent(t)
            }
        }, {
            key: "calculateReceptivity",
            value: function() {
                "undefined" != typeof Contxtful && "function" == typeof Contxtful.Api.SetReceptivity && Contxtful.Api.SetReceptivity()
            }
        }, {
            key: "getHtml",
            value: function() {
                return "<style>#" + this.rootID + "{}.outstream-custom-button{margin: 0;left: 10px;z-index: 100010;position: absolute;bottom: 10px;width: 30px;height: 30px;text-align: center;line-height: 38px;background-color: #ffffff;box-shadow: 0 0 5px 0 #333;border-radius: 50%;}#" + this.rootID + " .outstream-close-button{cursor: pointer;position: absolute;top: 10px;right: 10px;z-index: 1000000;background-color: #fff;width: 28px;height: 28px;text-align: center;vertical-align: center;line-height: 30px;border-radius: 50%;box-shadow: 0 0 5px #333;}#" + this.rootID + " .outstream-close-times{position: absolute; top: 10px; right: 10px; z-index: 1000000; height: 28px; text-align: center; line-height: 30px; color: whitesmoke; text-shadow: 2px 2px 5px black;}#" + this.rootID + ".loading {padding-top:56.25% !important;height: auto !important; } #" + this.rootID + ".loading > video, #" + this.rootID + ".finished video{display:none}#" + this.rootID + ":not(.loading) #" + this.mowAdContainerID + '{display:none:height:0 !important;}</style><div id="' + this.rootID + '" class="mow-ad" style="background:#ffffff;height:0;width:100%;box-shadow: 0 0 5px 0 #d4d4d4;z-index:9999999999;transition: all 0.3s;position: relative;overflow: hidden;margin:10px 0;padding-top: 0">\n      <video id="' + this.mowVideoElementID + '" playsinline style="width:100%"></video>\n        <div id="' + this.mowAdContainerID + '" style="position: absolute;left:0;right:0;bottom:0;top:0;z-index: 99999;"></div>\n        <div id="outstream-close-times" class="outstream-close-times">Close AD 5</div>\n        <div class="outstream-close-button" id="outstream-close-button" style="display:none;">\n            <svg style="position: relative; top: -3px;" width="12" height="12" enable-background="new 0 0 20 20" viewBox="0 0 20 20" \n                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                <clipPath id="a">\n                    <path d="m0 0h20v20h-20z"/>\n                </clipPath>\n                <path clip-path="url(#a)"\n                      d="m19 20c-.3 0-.5-.1-.7-.3l-8.3-8.3-8.3 8.3c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l8.3-8.3-8.3-8.3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l8.3 8.3 8.3-8.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-8.3 8.3 8.3 8.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z"/>\n            </svg>\n        </div>\n        <div class="outstream-custom-button" style="margin: 0;left: 10px;z-index: 100010;position: absolute;bottom: 10px;">\n            <div id="outstream-volume-button" class="float-child" style="cursor: pointer;display: grid !important;margin-left: 22% !important;margin-top: 19% !important;display: none">\n                <svg style="vertical-align: initial !important;" width="18" height="18" enable-background="new 0 0 35.9 26" viewBox="0 0 35.9 26"\n                     xmlns="http://www.w3.org/2000/svg">\n                    <path d="m16.3 25.9c-.2 0-.4-.1-.6-.2l-8.2-6.6h-6.5c-.6 0-1-.4-1-1v-10.2c0-.6.4-1 1-1h6.4l8.2-6.6c.4-.2.8-.3 1.1-.1s.6.5.6.9v23.8c0 .4-.2.7-.6.9-.1.1-.3.1-.4.1zm-14.3-8.8h5.8c.2 0 .4.1.6.2l6.9 5.5v-19.6l-6.9 5.5c-.2.1-.4.2-.6.2h-5.8z"/>\n                    <path d="m30 26c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4 6.2-6.2 6.2-16.4 0-22.6-.4-.4-.4-1 0-1.4s1-.4 1.4 0c7 7 7 18.4 0 25.4-.2.2-.4.3-.7.3zm-6-6c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4 2.9-2.9 2.9-7.7 0-10.6-.4-.4-.4-1 0-1.4s1-.4 1.4 0c3.7 3.7 3.7 9.7 0 13.4-.2.2-.4.3-.7.3z"/>\n                </svg>\n            </div>\n            <div id="outstream-muted-button" class="float-child" style="cursor: pointer;display: grid !important;margin-left: 22% !important;margin-top: 19% !important;">\n                <svg style="vertical-align: initial !important;" width="18" height="18" enable-background="new 0 0 25.9 17.9" viewBox="0 0 25.9 17.9"\n                     xmlns="http://www.w3.org/2000/svg">\n                    <path d="m11.2 17.9c-.2 0-.4-.1-.6-.2l-5.5-4.4h-4.2c-.5 0-.9-.4-.9-.9v-6.9c0-.5.4-.9.9-.9h4.2l5.5-4.4c.3-.2.7-.3 1-.1s.5.5.5.8v16c0 .4-.2.7-.5.8-.1.2-.2.2-.4.2zm-9.3-6.5h3.6c.2 0 .4.1.6.2l4.2 3.3v-12l-4.2 3.3c-.2.2-.4.3-.6.3h-3.6z"/>\n                    <path d="m18.1 13.3c-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.3l6.9-6.9c.4-.4 1-.4 1.3 0 .4.4.4 1 0 1.3l-6.9 6.9c-.1.2-.4.3-.6.3z"/>\n                    <path d="m24.9 13.3c-.2 0-.5-.1-.7-.3l-6.9-6.9c-.4-.4-.4-1 0-1.3.4-.4 1-.4 1.3 0l6.9 6.9c.4.4.4 1 0 1.3-.1.2-.3.3-.6.3z"/>\n                </svg>\n            </div>\n        </div>\n    </div>'
            }
        }]),
        t
    }()
      , VideoInterstitial = function() {
        function t() {
            var e = this
              , i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            _classCallCheck(this, t),
            this.width = window.innerWidth,
            this.clickedLink = null,
            this.internalId = null,
            this.hideLogo = !1,
            this.replaceCodeId = !0,
            this.adSlot = null,
            this.currentAd = null,
            this.mainAd = null,
            this.fallbackAd = null,
            i.forEach(function(t) {
                t.fallback ? e.fallbackAd || (e.fallbackAd = t) : e.mainAd || (e.mainAd = t)
            }),
            this.mainAd && this.playAd(this.mainAd)
        }
        return _createClass(t, [{
            key: "playAd",
            value: function(t) {
                var e = this;
                if (this.currentAd = t,
                this.adsManager = null,
                this.adDisplayContainer = null,
                this.adsLoader = null,
                this.rootID = generateId("mow-video-container"),
                this.mowVideoElementID = generateId("mow-video-element"),
                this.mowAdContainerID = generateId("mow-ad-container"),
                this.updateAdLayer(),
                document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", this.getHtml()),
                this.videoElement = document.getElementById(this.mowVideoElementID),
                this.mutedAdsButtton = document.querySelector("#" + this.rootID + " #outstream-muted-button"),
                this.volumeAdsButton = document.querySelector("#" + this.rootID + " #outstream-volume-button"),
                this.closeAdsButton = document.querySelector("#" + this.rootID + " #outstream-close-button"),
                this.adContainer = document.getElementById(this.mowAdContainerID),
                this.mutedAdsButtton.addEventListener("click", this.unmuteAd.bind(this), !1),
                this.volumeAdsButton.addEventListener("click", this.muteAd.bind(this), !1),
                this.closeAdsButton.addEventListener("click", this.closeAd.bind(this), !1),
                this.currentAd.code)
                    if (browser.N && window.receptivity) {
                        var i = null
                          , n = 0;
                        i = setInterval(function() {
                            window.ReceptivityValue && (e.initializeIMA(),
                            clearInterval(i)),
                            n > 500 && (e.initializeIMA(),
                            clearInterval(i)),
                            n++
                        }, 10)
                    } else
                        this.initializeIMA()
            }
        }, {
            key: "onAdLoaded",
            value: function() {}
        }, {
            key: "muteAd",
            value: function() {
                this.volumeAdsButton.style.display = "none",
                this.mutedAdsButtton.style.display = "grid",
                this.adsManager.setVolume(0)
            }
        }, {
            key: "unmuteAd",
            value: function() {
                this.volumeAdsButton.style.display = "grid",
                this.mutedAdsButtton.style.display = "none",
                this.adsManager.setVolume(1)
            }
        }, {
            key: "closeAd",
            value: function() {
                document.getElementById(this.rootID).classList.remove("loading"),
                this.adsManager.destroy(),
                this.onAdEnd()
            }
        }, {
            key: "onResize",
            value: function(t) {}
        }, {
            key: "onAdEnd",
            value: function(t) {
                document.getElementById(this.rootID).classList.remove("loading"),
                this.resetAdManager(),
                Mow.receptivityRange && this.triggerReceptivity({
                    Event: "Video_Q4",
                    CreativeId: this.currentAd.internal_id
                }),
                this.clickedLink && (window.location.href = this.clickedLink)
            }
        }, {
            key: "onAdSkippable",
            value: function(t) {
                document.getElementById(this.rootID).classList.remove("loading"),
                this.resetAdManager(),
                Mow.receptivityRange && this.triggerReceptivity({
                    Event: "Video_Skip",
                    CreativeId: this.currentAd.internal_id
                }),
                this.clickedLink && (window.location.href = this.clickedLink)
            }
        }, {
            key: "onAdImpression",
            value: function(t) {
                document.getElementById(this.rootID).classList.add("loading"),
                setTimeout(this.updateAdLayer, 1),
                Mow.receptivityRange && this.triggerReceptivity({
                    Event: "Video_Impression",
                    CreativeId: this.currentAd.internal_id
                })
            }
        }, {
            key: "onAdsLoaded",
            value: function(t) {
                Mow.receptivityRange && this.triggerReceptivity({
                    Event: "Video_Load",
                    CreativeId: this.currentAd.internal_id
                })
            }
        }, {
            key: "countdown",
            value: function(t) {
                var e = document.querySelector("#" + this.rootID + " #outstream-close-times")
                  , i = this;
                t >= 1 ? (e.innerHTML = "Close AD " + t,
                setTimeout(function() {
                    i.countdown(t - 1)
                }, 1e3)) : (document.querySelector("#" + this.rootID + " #outstream-close-button").style.display = "block",
                e.style.display = "none")
            }
        }, {
            key: "onAdsStarted",
            value: function(t) {
                this.countdown(5),
                Mow.receptivityRange && this.triggerReceptivity({
                    Event: "Video_Start",
                    CreativeId: this.currentAd.internal_id
                })
            }
        }, {
            key: "onAdError",
            value: function(t) {
                this.resetAdManager(),
                !this.currentAd.fallback && this.fallbackAd ? this.playAd(this.fallbackAd) : this.clickedLink && (window.location.href = this.clickedLink)
            }
        }, {
            key: "resetAdManager",
            value: function() {
                this.adsLoader && (this.adsLoader.destroy(),
                this.adsLoader.contentComplete()),
                this.adsManager && this.adsManager.destroy()
            }
        }, {
            key: "onAdsManagerLoaded",
            value: function(t) {
                var e = this
                  , i = new google.ima.AdsRenderingSettings;
                i.restoreCustomPlaybackStateOnAdBreakComplete = !0,
                i.enablePreloading = !0,
                i.autoAlign = !0,
                i.useStyledNonLinearAds = !0,
                i.AUTO_SCALE = !0,
                i.useStyledLinearAds = !0,
                this.adsManager = t.getAdsManager(this.videoElement, i);
                try {
                    this.videoElement.load(),
                    this.adDisplayContainer.initialize(),
                    this.adsManager.setVolume(0),
                    this.adsManager.init(this.videoElement.clientWidth, this.videoElement.clientHeight, google.ima.ViewMode.NORMAL),
                    this.adsManager.start()
                } catch (t) {}
                this.adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, this.onAdEnd.bind(this), !1),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.IMPRESSION, this.onAdImpression.bind(this), !1),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPED, this.onAdSkippable.bind(this), !1),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, this.onAdsLoaded.bind(this), !1),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, this.onAdsStarted.bind(this), !1),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, this.onContentPauseRequested.bind(this)),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, this.onContentResumeRequested.bind(this)),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.PAUSED, function() {
                    Mow.receptivityRange && e.triggerReceptivity({
                        Event: "Video_Pause",
                        CreativeId: e.currentAd.internal_id
                    })
                }),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.RESUMED, function() {
                    Mow.receptivityRange && e.triggerReceptivity({
                        Event: "Video_Resume",
                        CreativeId: e.currentAd.internal_id
                    })
                }),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.FIRST_QUARTILE, function(t) {
                    Mow.receptivityRange && e.triggerReceptivity({
                        Event: "Video_Q1",
                        CreativeId: e.currentAd.internal_id
                    })
                }),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.MIDPOINT, function(t) {
                    Mow.receptivityRange && e.triggerReceptivity({
                        Event: "Video_Q2",
                        CreativeId: e.currentAd.internal_id
                    })
                }),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.THIRD_QUARTILE, function(t) {
                    Mow.receptivityRange && e.triggerReceptivity({
                        Event: "Video_Q3",
                        CreativeId: e.currentAd.internal_id
                    })
                }),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, function(t) {
                    Mow.receptivityRange && e.triggerReceptivity({
                        Event: "Video_Stop",
                        CreativeId: e.currentAd.internal_id
                    })
                }),
                this.adsManager.addEventListener(google.ima.AdEvent.Type.CLICK, function(t) {
                    Mow.receptivityRange && e.triggerReceptivity({
                        Event: "Video_Clicked",
                        CreativeId: e.currentAd.internal_id
                    })
                });
                var n = 0;
                this.adsManager.addEventListener(google.ima.AdEvent.Type.AD_PROGRESS, function(t) {
                    var i = t.getAdData();
                    n < parseInt(i.currentTime) && (n = parseInt(i.currentTime),
                    e.calculateReceptivity())
                }),
                window.addEventListener("resize", this.updateAdLayer.bind(this), !1)
            }
        }, {
            key: "onContentPauseRequested",
            value: function() {}
        }, {
            key: "onContentResumeRequested",
            value: function() {}
        }, {
            key: "initializeIMA",
            value: function() {
                var t = this;
                this.volumeAdsButton.style.display = "none",
                google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED),
                google.ima.settings.setDisableCustomPlaybackForIOS10Plus(!0),
                this.adDisplayContainer = new google.ima.AdDisplayContainer(this.adContainer,this.videoElement),
                new google.ima.AdsLoader(this.adDisplayContainer).destroy(),
                this.adsLoader = new google.ima.AdsLoader(this.adDisplayContainer),
                this.adsLoader.getSettings().setPlayerType("mowplayer"),
                this.adsLoader.getSettings().setPlayerVersion("1.1.0"),
                this.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.onAdsManagerLoaded.bind(this), !1),
                this.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError.bind(this), !1),
                window.ReceptivityValue && (this.currentAd.code = this.currentAd.code.replace("receptivity_value", window.ReceptivityValue).replace("ReceptivityState", "ReceptivityLookalike")),
                browser.N || (this.currentAd.code = this.currentAd.code.replace("receptivity_value", "Yes").replace("ReceptivityState", "ReceptivityLookalike"));
                var e = new google.ima.AdsRequest
                  , i = this.currentAd.code;
                i += "&plcmt=2",
                e.adTagUrl = i,
                e.linearAdSlotWidth = this.videoElement.clientWidth,
                e.linearAdSlotHeight = this.videoElement.clientHeight,
                e.nonLinearAdSlotWidth = this.videoElement.clientWidth,
                e.nonLinearAdSlotHeight = this.videoElement.clientHeight / 3,
                e.setContinuousPlayback(!0),
                document.addEventListener("click", function(i) {
                    return i.preventDefault(),
                    i.target.getAttribute("href") && "A" === i.target.nodeName && (t.clickedLink = i.target.getAttribute("href"),
                    t.adsLoader.requestAds(e)),
                    !1
                }, !1)
            }
        }, {
            key: "updateAdLayer",
            value: function() {
                this.width = window.innerWidth,
                this.slider_width = 500,
                this.slider_height = 281,
                this.width <= 768 && (this.slider_width = 320,
                this.slider_height = 180),
                this.adsManager && this.adsManager.resize(this.videoElement.clientWidth, this.videoElement.clientHeight, google.ima.ViewMode.NORMAL)
            }
        }, {
            key: "triggerReceptivity",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                window.receptivity && (0 == window.receptivity_events.length || window.receptivity_events.includes(t.Event)) && "undefined" != typeof Contxtful && "function" == typeof Contxtful.Api.TriggerEvent && Contxtful.Api.TriggerEvent(t)
            }
        }, {
            key: "calculateReceptivity",
            value: function() {
                "undefined" != typeof Contxtful && "function" == typeof Contxtful.Api.SetReceptivity && Contxtful.Api.SetReceptivity()
            }
        }, {
            key: "getHtml",
            value: function() {
                var t = "top: -26px; border-radius: 5px 5px 0 0;box-shadow: -1px -3px 5px 0 #d4d4d4;";
                return "top_right" !== this.currentAd.position && "top_center" !== this.currentAd.position && "top_left" !== this.currentAd.position || (t = "bottom: -26px; border-radius: 0 0 5px 5px;box-shadow: -1px 3px 5px 0 #d4d4d4;"),
                "<style>#" + this.rootID + " .outstream-close-button{cursor: pointer;position: absolute;top: 10px;right: 10px;z-index: 1000000;background-color: #fff;width: 28px;height: 28px;text-align: center;vertical-align: center;line-height: 30px;border-radius: 50%;box-shadow: 0 0 5px #333;}#" + this.rootID + " .outstream-close-times{position: absolute; top: 10px; right: 10px; z-index: 1000000; height: 28px; text-align: center; line-height: 30px; color: whitesmoke; text-shadow: 2px 2px 5px black;}##" + this.rootID + '.loading {right:0 !important}</style><div id="' + this.rootID + '" class="" style="background:#0000008a;position: absolute;left:auto;right:-5000px;bottom:0;top:0;width:' + this.width + 'px;box-shadow: 0 0 5px 0 #d4d4d4;z-index:9999999999;padding:0">\n       <div class="logo_bar" style="' + (this.hideLogo ? "display:none" : "") + " position: absolute;z-index: 99999999999;left: 0; padding: 0px 20px 4px 20px; height: 16px; background: #FFFFFF;" + t + 'width: 63px;box-sizing: unset !important;"><a href="https://mowplayer.com" target="_blank"><svg version="1.1" id="Capa_1234" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 239.7 58.8" style="enable-background:new 0 0 239.7 58.8;" xml:space="preserve">\n<style type="text/css">\n\t.st0{clip-path:url(#SVGID_2_);fill:url(#SVGID_3_);}\n\t.st1{clip-path:url(#SVGID_5_);fill:url(#SVGID_6_);}\n\t.st2{clip-path:url(#SVGID_8_);fill:url(#SVGID_9_);}\n\t.st3{clip-path:url(#SVGID_11_);fill:url(#SVGID_12_);}\n</style>\n<g>\n\t<g>\n\t\t<defs>\n\t\t\t<path id="SVGID_1_" d="M75,5.9c-2.1-1.9-4.6-3.4-7.5-4.4S61.6,0,58.4,0C55,0,51.9,0.8,49,2.4s-5.1,3.7-6.8,6.3\n\t\t\t\tc-2-2.7-4.4-4.8-7.3-6.4C32,0.8,28.8,0,25.1,0C20.9,0,17.2,0.6,14,1.8C10.9,3,8.3,4.7,6.2,7c-2.1,2.3-3.6,5-4.7,8.2\n\t\t\t\tC0.5,18.3,0,21.8,0,25.6v21.8c0,3.3,1,5.9,2.7,7.7c1.9,1.8,4.4,2.7,7.3,2.7h3.8V24.6c0-4,0.9-6.9,2.7-9c1.8-2.1,4.1-3.1,6.8-3.1\n\t\t\t\tc3.1,0,5.7,1,7.6,3.1c1.9,2.1,2.9,5.4,2.9,10.1v21.7c0,3.4,1,6,2.8,7.7c1.9,1.7,4.4,2.6,7.5,2.6h3.8V24.2c0-3.9,0.8-6.8,2.6-8.8\n\t\t\t\tc1.7-1.9,4-2.9,6.9-2.9c3.1,0,5.6,1,7.5,3.1c1.9,2.1,2.8,5.4,2.8,10.1v21.7c0,3.4,0.8,6,2.5,7.7s4.4,2.6,8.2,2.6h3.4V23.8\n\t\t\t\tc0-3.9-0.6-7.4-1.8-10.4S77.1,7.9,75,5.9z"/>\n\t\t</defs>\n\t\t<clipPath id="SVGID_2_">\n\t\t\t<use xlink:href="#SVGID_1_"  style="overflow:visible;"/>\n\t\t</clipPath>\n\t\t<linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="0" y1="29.5" x2="239.7" y2="29.5">\n\t\t\t<stop  offset="0" style="stop-color:#FF325E"/>\n\t\t\t<stop  offset="1" style="stop-color:#971F9C"/>\n\t\t</linearGradient>\n\t\t<rect y="0.2" class="st0" width="239.7" height="58.6"/>\n\t</g>\n\t<g>\n\t\t<defs>\n\t\t\t<path id="SVGID_4_" d="M236.6,0c-3.8,0-6.5,0.9-8.2,2.6c-1.7,1.8-2.5,4.3-2.5,7.7V32c0,4.6-0.9,8-2.8,10.1\n\t\t\t\tc-1.9,2.1-4.4,3.1-7.5,3.1c-2.8,0-5.1-0.9-6.9-2.9c-1.7-2-2.6-4.9-2.6-8.8V0h-3.8c-3.2,0-5.7,0.9-7.5,2.6\n\t\t\t\tc-1.9,1.8-2.8,4.3-2.8,7.7v21.8c0,4.6-1,8-2.9,10.1c-1.9,2.1-4.5,3.1-7.6,3.1c-2.7,0-5-1-6.8-3.1c-1.8-2.1-2.7-5.1-2.7-9V0h-3.8\n\t\t\t\tc-3,0-5.4,0.9-7.3,2.7C159,4.5,158,7,158,10.3v21.8c0,3.8,0.5,7.3,1.5,10.4c1,3.1,2.5,5.8,4.6,8.1c2,2.3,4.7,4,7.8,5.2\n\t\t\t\tc3.1,1.2,6.8,1.8,11.1,1.8c3.7,0,6.9-0.7,9.8-2.3c2.9-1.5,5.4-3.7,7.4-6.4c1.6,2.7,3.8,4.8,6.7,6.4c2.8,1.6,6,2.4,9.4,2.4\n\t\t\t\tc3.2,0,6.2-0.5,9.1-1.5c2.9-0.9,5.4-2.4,7.5-4.4c2.1-2,3.8-4.5,5-7.5c1.2-3,1.8-6.5,1.8-10.4V0H236.6z"/>\n\t\t</defs>\n\t\t<clipPath id="SVGID_5_">\n\t\t\t<use xlink:href="#SVGID_4_"  style="overflow:visible;"/>\n\t\t</clipPath>\n\t\t<linearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" x1="0" y1="29.5" x2="239.7" y2="29.5">\n\t\t\t<stop  offset="0" style="stop-color:#FF325E"/>\n\t\t\t<stop  offset="1" style="stop-color:#971F9C"/>\n\t\t</linearGradient>\n\t\t<rect y="0.2" class="st1" width="239.7" height="58.6"/>\n\t</g>\n\t<g>\n\t\t<defs>\n\t\t\t<path id="SVGID_7_" d="M119.8,0.2c-16.2,0-29.3,13.1-29.3,29.3c0,16.2,13.1,29.3,29.3,29.3s29.3-13.1,29.3-29.3\n\t\t\t\tC149.1,13.3,136,0.2,119.8,0.2z M119.8,46.2c-9.2,0-16.7-7.5-16.7-16.7c0-9.2,7.5-16.7,16.7-16.7s16.7,7.5,16.7,16.7\n\t\t\t\tC136.5,38.7,129,46.2,119.8,46.2z"/>\n\t\t</defs>\n\t\t<clipPath id="SVGID_8_">\n\t\t\t<use xlink:href="#SVGID_7_"  style="overflow:visible;"/>\n\t\t</clipPath>\n\t\t<linearGradient id="SVGID_9_" gradientUnits="userSpaceOnUse" x1="0" y1="29.5" x2="239.7" y2="29.5">\n\t\t\t<stop  offset="0" style="stop-color:#FF325E"/>\n\t\t\t<stop  offset="1" style="stop-color:#971F9C"/>\n\t\t</linearGradient>\n\t\t<rect y="0.2" class="st2" width="239.7" height="58.6"/>\n\t</g>\n\t<g>\n\t\t<defs>\n\t\t\t<path id="SVGID_10_" d="M119,22.8c-0.9-0.7-2.3-0.1-2.3,1.1v9.9c0,1.2,1.3,1.8,2.3,1.1l6.2-4.9c0.7-0.6,0.7-1.7,0-2.3L119,22.8z"\n\t\t\t\t/>\n\t\t</defs>\n\t\t<clipPath id="SVGID_11_">\n\t\t\t<use xlink:href="#SVGID_10_"  style="overflow:visible;"/>\n\t\t</clipPath>\n\t\t<linearGradient id="SVGID_12_" gradientUnits="userSpaceOnUse" x1="0" y1="29.5" x2="239.7" y2="29.5">\n\t\t\t<stop  offset="0" style="stop-color:#FF325E"/>\n\t\t\t<stop  offset="1" style="stop-color:#971F9C"/>\n\t\t</linearGradient>\n\t\t<rect y="0.2" class="st3" width="239.7" height="58.6"/>\n\t</g>\n</g>\n</svg></a></div>        <video id="' + this.mowVideoElementID + '" playsinline style="width:' + this.slider_width + "px ;height: " + this.slider_height + 'px;"></video>\n        <div id="' + this.mowAdContainerID + '" style="position: relative;top:0;margin-left:-' + parseInt(this.slider_width / 2) + "px; left:50%;bottom: 0px;right: 0px;width:" + this.slider_width + "px ;height: " + this.slider_height + 'px;z-index: 99999;background-color: #fff;border: 1px solid #cccccc91;border-radius: 10px;padding:20px"></div>\n        <div id="outstream-close-times" class="outstream-close-times">Close AD 5</div><div class="outstream-close-button" id="outstream-close-button" style="display:none;">\n            <svg style="position: relative; top: -3px;" width="12" height="12" enable-background="new 0 0 20 20" viewBox="0 0 20 20" \n                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                <clipPath id="a">\n                    <path d="m0 0h20v20h-20z"/>\n                </clipPath>\n                <path clip-path="url(#a)"\n                      d="m19 20c-.3 0-.5-.1-.7-.3l-8.3-8.3-8.3 8.3c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l8.3-8.3-8.3-8.3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l8.3 8.3 8.3-8.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-8.3 8.3 8.3 8.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z"/>\n            </svg>\n        </div>\n        <div class="outstream-custom-button" style="margin: 0;left: 10px;z-index: 100010;position: absolute;bottom: 10px;">\n            <div id="outstream-volume-button" class="float-child" style="cursor: pointer;margin-left: 22% !important;margin-top: 19% !important;display: none">\n                <svg style="vertical-align: initial !important;" width="18" height="18" enable-background="new 0 0 35.9 26" viewBox="0 0 35.9 26"\n                     xmlns="http://www.w3.org/2000/svg">\n                    <path d="m16.3 25.9c-.2 0-.4-.1-.6-.2l-8.2-6.6h-6.5c-.6 0-1-.4-1-1v-10.2c0-.6.4-1 1-1h6.4l8.2-6.6c.4-.2.8-.3 1.1-.1s.6.5.6.9v23.8c0 .4-.2.7-.6.9-.1.1-.3.1-.4.1zm-14.3-8.8h5.8c.2 0 .4.1.6.2l6.9 5.5v-19.6l-6.9 5.5c-.2.1-.4.2-.6.2h-5.8z"/>\n                    <path d="m30 26c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4 6.2-6.2 6.2-16.4 0-22.6-.4-.4-.4-1 0-1.4s1-.4 1.4 0c7 7 7 18.4 0 25.4-.2.2-.4.3-.7.3zm-6-6c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4 2.9-2.9 2.9-7.7 0-10.6-.4-.4-.4-1 0-1.4s1-.4 1.4 0c3.7 3.7 3.7 9.7 0 13.4-.2.2-.4.3-.7.3z"/>\n                </svg>\n            </div>\n            <div id="outstream-muted-button" class="float-child" style="cursor: pointer;display: grid !important;margin-left: 22% !important;margin-top: 19% !important">\n                <svg style="vertical-align: initial !important;" width="18" height="18" enable-background="new 0 0 25.9 17.9" viewBox="0 0 25.9 17.9"\n                     xmlns="http://www.w3.org/2000/svg">\n                    <path d="m11.2 17.9c-.2 0-.4-.1-.6-.2l-5.5-4.4h-4.2c-.5 0-.9-.4-.9-.9v-6.9c0-.5.4-.9.9-.9h4.2l5.5-4.4c.3-.2.7-.3 1-.1s.5.5.5.8v16c0 .4-.2.7-.5.8-.1.2-.2.2-.4.2zm-9.3-6.5h3.6c.2 0 .4.1.6.2l4.2 3.3v-12l-4.2 3.3c-.2.2-.4.3-.6.3h-3.6z"/>\n                    <path d="m18.1 13.3c-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.3l6.9-6.9c.4-.4 1-.4 1.3 0 .4.4.4 1 0 1.3l-6.9 6.9c-.1.2-.4.3-.6.3z"/>\n                    <path d="m24.9 13.3c-.2 0-.5-.1-.7-.3l-6.9-6.9c-.4-.4-.4-1 0-1.3.4-.4 1-.4 1.3 0l6.9 6.9c.4.4.4 1 0 1.3-.1.2-.3.3-.6.3z"/>\n                </svg>\n            </div>\n        </div>\n    </div>'
            }
        }]),
        t
    }()
      , DisplaySlider = function() {
        function t(e) {
            var i = this;
            _classCallCheck(this, t),
            this.width = window.innerWidth,
            this.id = generateId("mow-display-slider"),
            this.adHolderId = generateId("mow-dsb"),
            this.adSlot = null,
            this.currentAd = null,
            this.refreshIntercal = null,
            this.mainAd = null,
            this.fallbackAd = null,
            e.forEach(function(t) {
                t.fallback ? (i.width <= 768 && "mobile" === t.device || i.width > 768 && "desktop" === t.device) && (i.fallbackAd = t) : (i.width <= 768 && "mobile" === t.device || i.width > 768 && "desktop" === t.device) && (i.mainAd = t)
            }),
            e.forEach(function(t) {
                t.fallback ? i.fallbackAd || (i.fallbackAd = t) : i.mainAd || (i.mainAd = t)
            });
            var n = setInterval(function() {
                window.googletag && googletag.apiReady && (googletag.pubads().addEventListener("slotRenderEnded", function(t) {
                    if (i.currentAd && t.slot.getAdUnitPath() === i.currentAd.code) {
                        if (t.isEmpty && i.fallbackAd && !i.currentAd.fallback)
                            return void i.playAd(i.fallbackAd);
                        t.isEmpty || (i.currentAd && t.slot.getAdUnitPath() === i.currentAd.code && (document.querySelector("#" + i.currentAd.elementID).classList.add("ad_loaded"),
                        "number" == typeof t.size[0] && (document.querySelector("#" + i.currentAd.elementID).style.setProperty("width", t.size[0] + "px", "important"),
                        document.querySelector("#" + i.currentAd.elementID).style.setProperty("height", t.size[1] + "px", "important")),
                        "bottom_left" === i.currentAd.position || "top_left" === i.currentAd.position ? (document.querySelector("#" + i.currentAd.elementID).style.left = "0px",
                        document.querySelector("#" + i.currentAd.elementID).style.right = "auto") : "top_right" === i.currentAd.position || "bottom_right" === i.currentAd.position ? (document.querySelector("#" + i.currentAd.elementID).style.left = "auto",
                        document.querySelector("#" + i.currentAd.elementID).style.right = "0px") : "top_center" === i.currentAd.position ? (document.querySelector("#" + i.currentAd.elementID).style.top = "0px",
                        document.querySelector("#" + i.currentAd.elementID).style.marginLeft = "-" + document.querySelector("#" + i.currentAd.elementID).offsetWidth / 2 + "px") : "bottom_center" === i.currentAd.position && (document.querySelector("#" + i.currentAd.elementID).style.bottom = "0px",
                        document.querySelector("#" + i.currentAd.elementID).style.marginLeft = "-" + document.querySelector("#" + i.currentAd.elementID).offsetWidth / 2 + "px")),
                        !i.refreshIntercal && i.currentAd.refresh_seconds > 0 && (i.refreshIntercal = setInterval(function() {
                            googletag.pubads().refresh([i.adSlot])
                        }, 1e3 * i.currentAd.refresh_seconds)))
                    }
                }),
                i.playAd(i.mainAd),
                clearInterval(n))
            }, 5)
        }
        return _createClass(t, [{
            key: "playAd",
            value: function(t) {
                var e = this;
                this.currentAd && (this.refreshIntercal && (clearInterval(this.refreshIntercal),
                this.refreshIntercal = null),
                this.adSlot && (googletag.destroySlots([this.adSlot]),
                this.adSlot = null)),
                this.currentAd = t,
                t.elementID = this.id;
                var i = document.getElementsByTagName("body")[0]
                  , n = document.createElement("div");
                n.id = this.id;
                var o = "bottom"
                  , r = "top"
                  , s = "right"
                  , a = "bottom:0";
                "bottom_left" === this.currentAd.position ? (s = "left",
                a = "bottom:0") : "top_left" === this.currentAd.position ? (s = "left",
                a = "top:0") : "bottom_center" === this.currentAd.position ? (s = "bottom",
                a = "left:50%;") : "top_right" === this.currentAd.position ? a = "top:0" : "top_center" === this.currentAd.position && (s = "top",
                a = "left:50%"),
                "top_left" !== this.currentAd.position && "top_right" !== this.currentAd.position && "top_center" !== this.currentAd.position || (o = "top",
                r = "bottom");
                var l = "position:fixed;" + s + ":-1000px;transition:" + s + " 0.2s;display:block;z-index:2147483646;padding:5px;box-shadow: 0 0 5px 0 #ccc;background-color:#fff;" + a;
                n.style = l;
                var c = "box-shadow: 0 -4px 5px 1px #cccccc8a;border-top-left-radius: 5px;border-top-right-radius: 5px;border-bottom-left-radius: 0;border-bottom-right-radius: 0;";
                "top" === o && (c = "box-shadow: 0 4px 5px 1px #cccccc8a;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;border-top-left-radius: 0;border-top-right-radius: 0;");
                var u = "bottom" === o ? "bottom_close_position" : "top_close_position"
                  , h = '<div id="' + this.adHolderId + '" class="mow-ad"></div><style>  #' + this.id + '{width:100% !important} .top_sticky.top_close_position svg, .bottom_sticky:not(.bottom_close_position) svg {transform: rotate(180deg)}</style><span class="mow-passback-close  ' + o + "_close_position " + o + '_sticky " data-position="' + o + '" style="position: absolute;left: 0;' + r + ": -23px;width: 60px;justify-content: center;z-index: 2147483646;background-color: #fff;display: flex;cursor: pointer;" + c + '"><svg version="1.1" class="action_11_mow_to_bottom" id="Capa_11" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 455.8 192.7"  style="padding:0 !important;height:23px !important;z-index: 2147483646;width:100% !important;enable-background:new 0 0 455.8 192.7;" xml:space="preserve">\n<style type="text/css">\n\t.st0123{fill:#FFFFFF;}\n\t.st3451{fill:url(#SVGID_345_);}\n</style>\n<path class="st0123" d="M455.8,192.7H0V61C0,27.3,27.3,0,61,0h333.8c33.7,0,61,27.3,61,61V192.7z"/>\n<g>\n<linearGradient id="SVGID_345_" gradientUnits="userSpaceOnUse" x1="165.9" y1="98.35" x2="289.7" y2="98.35">\n\t<stop  offset="0" style="stop-color:#FF325E"/>\n\t<stop  offset="1" style="stop-color:#971F9C"/>\n</linearGradient>\n<path class="st3451" d="M288.5,68.4l-4.5-3.6c-0.8-0.8-1.8-1.3-2.9-1.3s-2,0.4-2.9,1.3l-50.4,50l-50.4-50c-0.8-0.8-1.8-1.3-2.9-1.3\n\tc-1.1,0-2,0.4-2.9,1.3l-4.4,3.6c-0.9,0.8-1.3,1.8-1.3,2.9s0.4,2,1.3,2.9l57.7,57.7c0.8,0.8,1.8,1.3,2.9,1.3c1.1,0,2-0.4,2.9-1.3\n\tl57.8-57.7c0.8-0.8,1.2-1.8,1.2-2.9C289.7,70.2,289.3,69.2,288.5,68.4z"/>\n</g>\n</svg></span>';
                n.innerHTML = h,
                document.querySelector("#" + this.id) || i.appendChild(n),
                window.googletag = window.googletag || {
                    cmd: []
                };
                var d = [[970, 90], [728, 90], [468, 60], [320, 50], [300, 600], [320, 480], [160, 600], [120, 600], [300, 250], [320, 480][100], [300, 50]];
                googletag.cmd.push(function() {
                    if (t.ad_size && 0 !== t.ad_size.length || (t.ad_size = d),
                    "string" == typeof t.ad_size[0] && "fluid" === t.ad_size[0])
                        e.adSlot = googletag.defineSlot(t.code, t.ad_size, e.adHolderId).addService(googletag.pubads());
                    else {
                        e.adSlot = googletag.defineSlot(t.code, d, e.adHolderId).addService(googletag.pubads());
                        var i = googletag.sizeMapping();
                        "object" !== _typeof(t.ad_size[0][1][0]) ? t.ad_size.forEach(function(t) {
                            i.addSize([t[0], t[1]], [[t[0], t[1]]])
                        }) : t.ad_size.forEach(function(t) {
                            i.addSize(t[0], t[1])
                        }),
                        i = i.addSize([0, 0], []).build(),
                        e.adSlot.defineSizeMapping(i)
                    }
                    googletag.pubads().disableInitialLoad([e.adSlot]),
                    googletag.enableServices()
                }),
                googletag.cmd.push(function() {
                    googletag.display(e.adHolderId)
                }),
                googletag.pubads().refresh([this.adSlot]),
                void 0 === window.CloseEventBindedMowDSB && (window.CloseEventBindedMowDSB = !0,
                document.addEventListener("click", function(t) {
                    var e = !1;
                    (t.path || t.composedPath && t.composedPath()).forEach(function(t) {
                        void 0 !== t.classList && t.classList.contains("mow-passback-close") && (e = t)
                    }),
                    e && (e.classList.contains(u) ? (e.classList.remove(u),
                    e.parentNode.style.top = "top" === e.dataset.position ? "-" + e.parentNode.offsetHeight + "px" : "auto",
                    e.parentNode.style.bottom = "top" === e.dataset.position ? "auto" : "-" + e.parentNode.offsetHeight + "px") : (e.classList.add(u),
                    e.parentNode.style.top = "top" === e.dataset.position ? 0 : "auto",
                    e.parentNode.style.bottom = "top" === e.dataset.position ? "auto" : 0))
                }, !1))
            }
        }]),
        t
    }()
      , DisplayStickyTop = function() {
        function t(e) {
            var i = this;
            _classCallCheck(this, t),
            this.width = window.innerWidth;
            var n = void 0 !== e[0] ? e[0] : null
              , o = null !== n ? n.ad_id : "";
            this.id = generateId("mow-mobile-top-sticky") + "-" + o,
            this.adHolderId = generateId("mow-dsb"),
            this.adSlot = null,
            this.currentAd = null,
            this.refreshIntercal = null,
            this.initialiseRefresh = !1,
            this.mainAd = null,
            this.fallbackAd = null;
            var r = null === n ? null : n.allowed_pages;
            if (!1 !== isAllowedPageForAds(r) && !(null !== n && isBlockedPageForAds(n.blocked_pages))) {
                var s = null !== n && null !== n.delay_to_start && void 0 !== n.delay_to_start ? 1e3 * parseInt(n.delay_to_start) : 0;
                s > 0 ? setTimeout(function() {
                    i.init(e)
                }, s) : this.init(e)
            }
        }
        return _createClass(t, [{
            key: "init",
            value: function(t) {
                var e = this;
                t.forEach(function(t) {
                    t.fallback ? (e.width <= 768 && "mobile" === t.device || e.width > 768 && "desktop" === t.device) && (e.fallbackAd = t) : (e.width <= 768 && "mobile" === t.device || e.width > 768 && "desktop" === t.device) && (e.mainAd = t)
                }),
                t.forEach(function(t) {
                    t.fallback && (e.fallbackAd || (e.fallbackAd = t))
                });
                var i = setInterval(function() {
                    window.googletag && googletag.apiReady && (e.initialiseRefresh = !0,
                    googletag.pubads().addEventListener("slotRenderEnded", function(t) {
                        if (e.currentAd && t.slot.getAdUnitPath() === e.currentAd.code) {
                            if (t.isEmpty && e.fallbackAd && !e.currentAd.fallback)
                                return void e.playAd(e.fallbackAd);
                            if (!t.isEmpty) {
                                if (e.currentAd && t.slot.getAdUnitPath() === e.currentAd.code) {
                                    if (document.querySelector("#" + e.currentAd.elementID).classList.add("ad_loaded"),
                                    document.querySelector("#" + e.currentAd.elementID).style.display = "block",
                                    "number" == typeof t.size[0]) {
                                        var i = parseInt(t.size[0]) + 10
                                          , n = parseInt(t.size[1]) + 10;
                                        document.querySelector("#" + e.currentAd.elementID).style.setProperty("width", i + "px", "important"),
                                        document.querySelector("#" + e.currentAd.elementID).style.setProperty("height", n + "px", "important")
                                    }
                                    "left" === e.currentAd.position ? (document.querySelector("#" + e.currentAd.elementID).style.left = "0px",
                                    document.querySelector("#" + e.currentAd.elementID).style.right = "auto") : "right" === e.currentAd.position ? (document.querySelector("#" + e.currentAd.elementID).style.left = "auto",
                                    document.querySelector("#" + e.currentAd.elementID).style.right = "0px") : (document.querySelector("#" + e.currentAd.elementID).style.left = "50%",
                                    document.querySelector("#" + e.currentAd.elementID).style.marginLeft = "-" + document.querySelector("#" + e.currentAd.elementID).offsetWidth / 2 + "px",
                                    document.querySelector("#" + e.adHolderId).style.removeProperty("margin-left"))
                                }
                                !e.refreshIntercal && e.currentAd.refresh_seconds > 0 && e.initialiseRefresh && (e.initialiseRefresh = !1,
                                e.refreshIntercal = setInterval(function() {
                                    googletag.pubads().refresh([e.adSlot])
                                }, 1e3 * e.currentAd.refresh_seconds))
                            }
                        }
                    }),
                    e.playAd(e.mainAd),
                    clearInterval(i))
                }, 5)
            }
        }, {
            key: "playAd",
            value: function(t) {
                var e = this;
                if (!t)
                    return !0;
                this.currentAd && (this.refreshIntercal && (clearInterval(this.refreshIntercal),
                this.refreshIntercal = null),
                this.adSlot && (googletag.destroySlots([this.adSlot]),
                this.adSlot = null)),
                this.currentAd = t,
                t.elementID = this.id;
                var i = document.getElementsByTagName("body")[0]
                  , n = document.createElement("div");
                n.id = this.id,
                n.style = "position:fixed; top:0;transition:top 0.2s;display:none;left:0;z-index:2147483646;padding:5px;box-shadow: 0 0 5px 0 #ccc;background-color:#fff !important";
                var o = '<div id="' + this.adHolderId + '"></div><style> #' + this.adHolderId + "{margin-left:0 !important} #" + this.id + "{width:100% !important}  #" + this.id + '.ad_loaded{ width:auto !important}  .top_sticky.top_close_position svg, .bottom_sticky:not(.top_close_position) svg {transform: rotate(180deg)}</style><span class="mow-passback-close  top_close_position top_sticky " data-position="top" style="position: absolute;left: 0;bottom: -23px;width: 60px;justify-content: center;z-index: 9999999999999999999;background-color: #fff !important;display: flex;cursor: pointer;box-shadow: 0 4px 5px 1px #cccccc8a;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;box-shadow: 0 4px 5px 1px #cccccc8a;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;border-top-left-radius: 0;border-top-right-radius: 0;"><svg version="1.1" class="action_11_mow_to_bottom" id="Capa_11" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 455.8 192.7"  style="padding:0 !important;height:23px !important;z-index: 9999999999;width:100% !important;enable-background:new 0 0 455.8 192.7;background-color: transparent !important;" xml:space="preserve">\n<style type="text/css">\n\t.st0123{fill:#FFFFFF;}\n\t.st3451{fill:url(#SVGID_345_);}\n</style>\n<path class="st0123" d="M455.8,192.7H0V61C0,27.3,27.3,0,61,0h333.8c33.7,0,61,27.3,61,61V192.7z"/>\n<g>\n<linearGradient id="SVGID_345_" gradientUnits="userSpaceOnUse" x1="165.9" y1="98.35" x2="289.7" y2="98.35">\n\t<stop  offset="0" style="stop-color:#FF325E"/>\n\t<stop  offset="1" style="stop-color:#971F9C"/>\n</linearGradient>\n<path class="st3451" d="M288.5,68.4l-4.5-3.6c-0.8-0.8-1.8-1.3-2.9-1.3s-2,0.4-2.9,1.3l-50.4,50l-50.4-50c-0.8-0.8-1.8-1.3-2.9-1.3\n\tc-1.1,0-2,0.4-2.9,1.3l-4.4,3.6c-0.9,0.8-1.3,1.8-1.3,2.9s0.4,2,1.3,2.9l57.7,57.7c0.8,0.8,1.8,1.3,2.9,1.3c1.1,0,2-0.4,2.9-1.3\n\tl57.8-57.7c0.8-0.8,1.2-1.8,1.2-2.9C289.7,70.2,289.3,69.2,288.5,68.4z"/>\n</g>\n</svg></span>';
                n.innerHTML = o,
                document.querySelector("#" + this.id) || i.appendChild(n),
                window.googletag = window.googletag || {
                    cmd: []
                };
                var r = [[970, 90], [728, 90], [468, 60], [320, 50], [300, 600], [320, 480], [160, 600], [120, 600], [300, 250], [320, 480][100], [300, 50]];
                googletag.cmd.push(function() {
                    if (t.ad_size && 0 !== t.ad_size.length || (t.ad_size = [[[990, 768], [[970, 90], [728, 90]]], [[768, 576], [[728, 90], [468, 60]]], [[480, 300], [[468, 60], [320, 50], [320, 100], [300, 75], [300, 100]]], [[320, 200], [[300, 50], [300, 75], [300, 100]]]]),
                    "string" == typeof t.ad_size[0] && "fluid" === t.ad_size[0])
                        e.adSlot = googletag.defineSlot(t.code, t.ad_size, e.adHolderId).addService(googletag.pubads());
                    else {
                        e.adSlot = googletag.defineSlot(t.code, r, e.adHolderId).addService(googletag.pubads());
                        var i = googletag.sizeMapping();
                        "object" !== _typeof(t.ad_size[0][1][0]) ? t.ad_size.forEach(function(t) {
                            i.addSize(t, t)
                        }) : t.ad_size.forEach(function(t) {
                            i.addSize(t[0], t[1])
                        }),
                        i = i.addSize([0, 0], []).build(),
                        e.adSlot.defineSizeMapping(i)
                    }
                    googletag.pubads().disableInitialLoad([e.adSlot]),
                    googletag.enableServices()
                }),
                googletag.cmd.push(function() {
                    googletag.display(e.adHolderId)
                }),
                googletag.pubads().refresh([this.adSlot]),
                void 0 === window.CloseEventBindedMowDSB && (window.CloseEventBindedMowDSB = !0,
                document.addEventListener("click", function(t) {
                    var e = !1;
                    (t.path || t.composedPath && t.composedPath()).forEach(function(t) {
                        void 0 !== t.classList && t.classList.contains("mow-passback-close") && (e = t)
                    }),
                    e && (e.classList.contains("top_close_position") ? (e.classList.remove("top_close_position"),
                    e.parentNode.style.top = "top" === e.dataset.position ? "-" + e.parentNode.offsetHeight + "px" : "auto",
                    e.parentNode.style.bottom = "top" === e.dataset.position ? "auto" : "-" + e.parentNode.offsetHeight + "px") : (e.classList.add("top_close_position"),
                    e.parentNode.style.top = "top" === e.dataset.position ? 0 : "auto",
                    e.parentNode.style.bottom = "top" === e.dataset.position ? "auto" : 0))
                }, !1))
            }
        }, {
            key: "getCurrentAd",
            value: function() {
                return void 0 === this.X || void 0 === this.X[this.tt] ? null : this.X[this.tt]
            }
        }]),
        t
    }()
      , DisplayStickyBottom = function() {
        function t(e) {
            _classCallCheck(this, t),
            this.X = this.filterAds(e),
            this.et = this.getRefreshAd(),
            this.tt = 0,
            this.it = !1,
            this.nt = !1,
            this.ot = null,
            this.rt = null,
            this.st = null,
            this.at = null,
            this.lt = null,
            this.ct = null,
            this.ut = null,
            this.call()
        }
        return _createClass(t, [{
            key: "call",
            value: function() {
                var t = this.getFirstAd();
                if (null !== t && !isBlockedPageForAds(t.blocked_pages)) {
                    var e = null === t ? null : t.allowed_pages;
                    if (!1 !== isAllowedPageForAds(e)) {
                        var i = this
                          , n = null !== t.delay_to_start && void 0 !== t.delay_to_start ? 1e3 * parseInt(t.delay_to_start) : 0;
                        setTimeout(function() {
                            return i.init()
                        }, n)
                    }
                }
            }
        }, {
            key: "init",
            value: function() {
                var t = this;
                window.googletag = window.googletag || {
                    cmd: []
                };
                var e = setInterval(function() {
                    window.googletag && googletag.apiReady && (clearInterval(e),
                    t.autoclose(),
                    t.start())
                }, 5)
            }
        }, {
            key: "autoclose",
            value: function() {
                var t = this.getFirstAd();
                if (void 0 !== t.delay_to_autoclose && 0 != t.delay_to_autoclose) {
                    var e = 1e3 * t.delay_to_autoclose
                      , i = this;
                    setTimeout(function() {
                        return i.close()
                    }, e)
                }
            }
        }, {
            key: "start",
            value: function() {
                this.createSlot(),
                this.createCloseButton(),
                this.appendOnRenderedEvent(),
                this.appendAd(this.getCurrentAd())
            }
        }, {
            key: "appendAd",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this.ct = null !== this.rt ? this.rt : this.ct,
                this.ut = null !== this.lt ? this.lt : this.ut,
                this.crateAdContainer(),
                this.appendDfpAd(t, e)
            }
        }, {
            key: "appendDfpAd",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , i = this;
                googletag.cmd.push(function() {
                    t.ad_size && 0 !== t.ad_size.length || (t.ad_size = [[[990, 768], [[970, 90], [728, 90]]], [[768, 576], [[728, 90], [468, 60]]], [[480, 300], [[468, 60], [320, 50], [320, 100], [300, 75], [300, 100]]], [[320, 200], [[300, 50], [300, 75], [300, 100]]]]);
                    var n = e ? t.code_refresh : t.code;
                    i.lt = googletag.defineSlot(n, t.ad_size, i.rt.id),
                    null !== i.lt && (i.lt.setTargeting("mow_stb_ad_id", i.rt.id).addService(googletag.pubads()),
                    googletag.pubads().disableInitialLoad([i.lt]),
                    googletag.enableServices(),
                    googletag.display(i.rt.id),
                    googletag.pubads().refresh([i.lt]))
                })
            }
        }, {
            key: "appendOnRenderedEvent",
            value: function() {
                var t = this;
                googletag.cmd.push(function() {
                    googletag.pubads().addEventListener("slotRenderEnded", function(e) {
                        t.onRendered(e)
                    })
                })
            }
        }, {
            key: "callNext",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.hasNext() ? this.processNext(t) : this.hasRefresh() && this.processRefresh(t)
            }
        }, {
            key: "processNext",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.tt++;
                var e = this
                  , i = this.getCurrentAd()
                  , n = t ? 0 : 1e3 * (void 0 !== i.delay_inter_ad ? i.delay_inter_ad : 10);
                setTimeout(function() {
                    return e.appendAd(i)
                }, n)
            }
        }, {
            key: "processRefresh",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                !0 !== this.it ? (this.it = !0,
                null === this.et.code_refresh ? this.refreshCurrentAd(t) : this.refreshNewAd(t)) : this.refreshCurrentAd()
            }
        }, {
            key: "processEmpty",
            value: function() {
                !1 === this.nt && (this.removeCurrent(),
                this.lt = this.ut,
                this.ut = null,
                this.rt = this.ct,
                this.ct = null),
                this.callNext(!0)
            }
        }, {
            key: "refreshNewAd",
            value: function() {
                var t = this
                  , e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 0 : 1e3 * this.et.refresh_seconds
                  , i = this;
                setTimeout(function() {
                    return i.appendAd(t.et, !0)
                }, e)
            }
        }, {
            key: "refreshCurrentAd",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.nt = !0;
                var e = t ? 0 : 1e3 * this.et.refresh_seconds
                  , i = this;
                setTimeout(function() {
                    googletag.pubads().refresh([i.lt])
                }, e)
            }
        }, {
            key: "onRendered",
            value: function(t) {
                var e = null !== t && null !== t.slot ? t.slot.getTargeting("mow_stb_ad_id") : null;
                0 !== e.length && e[0] === this.rt.id && (logger.debug("Slot Rendered: ", {
                    adUnit: t.slot.getAdUnitPath(),
                    empty: t.isEmpty
                }),
                t.isEmpty ? this.processEmpty() : (this.resize(t.size),
                this.reposition(t.size),
                this.showAd(),
                this.showCloseButton(),
                this.removePrevious(),
                this.callNext()))
            }
        }, {
            key: "showAd",
            value: function() {
                this.rt.style.display = "block"
            }
        }, {
            key: "removeCurrent",
            value: function() {
                null !== this.lt && (googletag.destroySlots([this.lt]),
                this.lt = null),
                null !== this.rt && (this.rt.remove(),
                this.rt = null)
            }
        }, {
            key: "removePrevious",
            value: function() {
                null !== this.ut && (googletag.destroySlots([this.ut]),
                this.ut = null),
                null !== this.ct && (this.ct.remove(),
                this.ct = null)
            }
        }, {
            key: "onCloseButton",
            value: function() {
                this.close()
            }
        }, {
            key: "close",
            value: function() {
                this.removePrevious(),
                this.removeCurrent(),
                this.ot.remove()
            }
        }, {
            key: "showCloseButton",
            value: function() {
                this.at.style.display = "block"
            }
        }, {
            key: "crateAdContainer",
            value: function() {
                var t = this.getCurrentAd();
                this.rt = document.createElement("div"),
                this.rt.className = "mow-stb-ad",
                this.rt.id = generateId("mow-stb-ad") + "-" + t.ad_id,
                this.ot.prepend(this.rt)
            }
        }, {
            key: "createCloseButton",
            value: function() {
                this.st = document.createElement("div"),
                this.st.classList.add("close-display-general"),
                this.at = document.createElement("button"),
                this.at.innerHTML = '<svg enable-background="new 0 0 20 20" height="18" viewBox="0 0 20 20" width="8" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><clipPath id="a"><path d="m0 0h20v20h-20z"/></clipPath><path clip-path="url(#a)" d="m19 20c-.3 0-.5-.1-.7-.3l-8.3-8.3-8.3 8.3c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l8.3-8.3-8.3-8.3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l8.3 8.3 8.3-8.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-8.3 8.3 8.3 8.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z"/></svg>',
                this.at.addEventListener("click", this.onCloseButton.bind(this)),
                this.st.prepend(this.at),
                this.ot.prepend(this.st)
            }
        }, {
            key: "createSlot",
            value: function() {
                var t = this.getFirstAd();
                this.ot = document.createElement("div"),
                this.ot.className = "mow-stb",
                this.ot.id = "mow-stb-" + t.ad_id;
                var e = domSearch("body");
                e.insertBefore(this.ot, e.firstChild)
            }
        }, {
            key: "reposition",
            value: function(t) {
                if (void 0 !== t && "number" == typeof t[0]) {
                    var e = parseInt(t[0])
                      , i = parseInt(t[1])
                      , n = e / 2 * -1;
                    this.ot.style.setProperty("width", e + "px", "important"),
                    this.ot.style.setProperty("height", "".concat(i, "px"), "important"),
                    this.ot.style.setProperty("left", "50%", "important"),
                    this.ot.style.setProperty("margin-left", "".concat(n, "px"), "important")
                }
            }
        }, {
            key: "resize",
            value: function(t) {
                if (void 0 !== t && "number" == typeof t[0]) {
                    var e = parseInt(t[0])
                      , i = parseInt(t[1]);
                    this.ot.style.setProperty("width", e + "px", "important"),
                    this.ot.style.setProperty("height", i + "px", "important")
                }
            }
        }, {
            key: "getRefreshAd",
            value: function() {
                var t = null;
                return this.X.forEach(function(e) {
                    null !== e.refresh_seconds && 0 != e.refresh_seconds && (t = e)
                }),
                t
            }
        }, {
            key: "filterAds",
            value: function(t) {
                var e = window.innerWidth <= 768
                  , i = [];
                return t.forEach(function(t) {
                    e && "mobile" === t.device ? i.push(t) : e || "desktop" !== t.device || i.push(t)
                }),
                i
            }
        }, {
            key: "hasRefresh",
            value: function() {
                return null !== this.et
            }
        }, {
            key: "hasNext",
            value: function() {
                var t = this.tt + 1;
                return void 0 !== this.X && void 0 !== this.X[t]
            }
        }, {
            key: "getCurrentAd",
            value: function() {
                return void 0 === this.X || void 0 === this.X[this.tt] ? null : this.X[this.tt]
            }
        }, {
            key: "getFirstAd",
            value: function() {
                return void 0 === this.X || void 0 === this.X[0] ? null : this.X[0]
            }
        }]),
        t
    }()
      , DisplayInterstitial = function() {
        function t(e) {
            var i = this;
            _classCallCheck(this, t),
            this.width = window.innerWidth,
            this.id = generateId("mow-mobile-bottom-sticky"),
            this.adHolderId = generateId("mow-dsb"),
            this.adSlot = null,
            this.currentAd = null,
            this.refreshIntercal = null,
            this.initialiseRefresh = !1,
            this.mainAd = null,
            this.fallbackAd = null,
            e.forEach(function(t) {
                t.fallback ? (i.width <= 768 && "mobile" === t.device || i.width > 768 && "desktop" === t.device) && (i.fallbackAd = t) : (i.width <= 768 && "mobile" === t.device || i.width > 768 && "desktop" === t.device) && (i.mainAd = t)
            }),
            e.forEach(function(t) {
                t.fallback ? i.fallbackAd || (i.fallbackAd = t) : i.mainAd || (i.mainAd = t)
            });
            var n = setInterval(function() {
                window.googletag && googletag.apiReady && (i.initialiseRefresh = !0,
                googletag.pubads().addEventListener("slotRenderEnded", function(t) {
                    if (i.currentAd && t.slot.getAdUnitPath() === i.currentAd.code) {
                        if (t.isEmpty && i.fallbackAd && !i.currentAd.fallback)
                            return void i.playAd(i.fallbackAd);
                        t.isEmpty || !i.refreshIntercal && i.currentAd.refresh_seconds > 0 && i.initialiseRefresh && (i.initialiseRefresh = !1,
                        i.refreshIntercal = setInterval(function() {
                            googletag.pubads().refresh([i.adSlot])
                        }, 1e3 * i.currentAd.refresh_seconds))
                    }
                }),
                i.playAd(i.mainAd),
                clearInterval(n))
            }, 5)
        }
        return _createClass(t, [{
            key: "canUseStorage",
            value: function() {
                try {
                    return window.localStorage.setItem("mowdi", null),
                    window.localStorage.removeItem("mowdi"),
                    !0
                } catch (t) {
                    return !1
                }
            }
        }, {
            key: "playAd",
            value: function(t) {
                this.canUseStorage() && !1 === t.interstitial_freq && window.localStorage.removeItem("__lsv__"),
                this.currentAd && (this.refreshIntercal && (clearInterval(this.refreshIntercal),
                this.refreshIntercal = null),
                this.adSlot && (googletag.destroySlots([this.adSlot]),
                this.adSlot = null)),
                this.currentAd = t,
                t.elementID = this.id;
                var e = document.getElementsByTagName("body")[0]
                  , i = document.createElement("div");
                i.id = this.id,
                i.style = "display:none";
                var n = '<div id="' + this.adHolderId + '"></div>';
                i.innerHTML = n,
                document.querySelector("#" + this.id) || e.appendChild(i);
                var o = googletag.defineOutOfPageSlot(t.code, googletag.enums.OutOfPageFormat.INTERSTITIAL);
                o && o.addService(googletag.pubads()),
                googletag.enableServices(),
                googletag.display(o)
            }
        }]),
        t
    }();
    function loadCss(t) {
        return window.mowPromiseCache = window.mowPromiseCache || {},
        t in window.mowPromiseCache || (window.mowPromiseCache[t] = new Promise(function(e, i) {
            var n = document.createElement("link");
            n.onload = e,
            n.onerror = i,
            n.type = "text/css",
            n.rel = "stylesheet",
            n.href = t,
            n.setAttribute("data-mowloaded", !0),
            document.head.appendChild(n)
        }
        )),
        window.mowPromiseCache[t]
    }
    var DisplayBase = function() {
        function DisplayBase(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            _classCallCheck(this, DisplayBase),
            this.X = this.filterAdsForDevice(t),
            this.ht = e,
            this.dt = !1,
            this.tt = 0,
            this.pt = null,
            this.ft = null,
            this.gt = null,
            this.vt = null,
            this.yt = null,
            this.wt = null,
            this._t = null,
            this.bt = !1,
            this.At = null,
            this.It = null,
            this.kt = null,
            this.Et = null,
            this.callNextTimeOut = null,
            this.Ct = this.X.length > 0 && void 0 !== this.X[0].delay_inter_ad && null !== this.X[0].delay_inter_ad && 0 !== this.X[0].delay_inter_ad ? 1e3 * this.X[0].delay_inter_ad : 1e4
        }
        return _createClass(DisplayBase, [{
            key: "start",
            value: function() {
                throw Error("The 'start' method must be implemented")
            }
        }, {
            key: "appendAd",
            value: function() {
                throw Error("The 'appendAd' method must be implemented")
            }
        }, {
            key: "preProcessAppendAd",
            value: function(t, e) {
                var i = this;
                googletag.cmd.push(function() {
                    googletag.pubads().addEventListener("slotRenderEnded", function(t) {
                        i.onRendered(t)
                    })
                }),
                this.processAppendAd(t, e)
            }
        }, {
            key: "processAppendAd",
            value: function(t, e) {
                throw Error("The 'processAppendAd' method must be implemented")
            }
        }, {
            key: "appendNextAd",
            value: function() {
                this.tt++,
                this.appendAd()
            }
        }, {
            key: "callNextAd",
            value: function() {
                var t = this;
                this.callNextTimeOut = setTimeout(function() {
                    clearTimeout(t.callNextTimeOut),
                    t.appendNextAd()
                }, this.Ct)
            }
        }, {
            key: "printDFPAd",
            value: function(t, e) {
                var i = this;
                this.addCloseButton(t),
                window.googletag = window.googletag || {
                    cmd: []
                },
                googletag.cmd.push(function() {
                    t.ad_size && 0 !== t.ad_size.length || (t.ad_size = [[[768, 576], [[728, 90], [468, 60], [300, 250]]], [[480, 300], [[468, 60], [320, 50], [320, 100], [300, 75], [300, 100]]], [[320, 200], [[300, 50], [300, 75], [300, 100]]]]);
                    var n = i.bt ? t.code_refresh : t.code;
                    i.wt = googletag.defineSlot(n, t.ad_size, e).addService(googletag.pubads()),
                    googletag.pubads().disableInitialLoad([i.wt]),
                    googletag.enableServices(),
                    googletag.display(e),
                    googletag.pubads().refresh([i.wt])
                })
            }
        }, {
            key: "printScriptAd",
            value: function printScriptAd(currentAd) {
                try {
                    var adScripts = this.vt.querySelectorAll("script");
                    switch (adScripts.forEach(function(adScript, index) {
                        adScript.getAttribute("src") || eval(adScript.innerHTML)
                    }),
                    currentAd.integration) {
                    case "head":
                        this.printScriptAdIntoHead(adScripts);
                        break;
                    case "body_start":
                        this.printScriptAdBodyStart(adScripts);
                        break;
                    case "selector":
                        this.printScriptAdSelector(adScripts)
                    }
                } catch (t) {}
            }
        }, {
            key: "printScriptAdBodyStart",
            value: function(t) {
                var e = document.getElementsByTagName("body");
                t.forEach(function(t, i) {
                    if (t.getAttribute("src")) {
                        var n = document.createElement("script");
                        n.src = t.getAttribute("src"),
                        t.hasAttribute("id") && (n.id = t.getAttribute("id")),
                        t.hasAttribute("async") && n.setAttribute("async", ""),
                        t.remove(),
                        e[0].prepend(n)
                    }
                })
            }
        }, {
            key: "printScriptAdSelector",
            value: function(t) {
                t.forEach(function(t, e) {
                    if (t.getAttribute("src")) {
                        var i = t.parentNode
                          , n = document.createElement("script");
                        n.src = t.getAttribute("src"),
                        t.hasAttribute("id") && (n.id = t.getAttribute("id")),
                        t.hasAttribute("async") && n.setAttribute("async", ""),
                        i.insertBefore(n, t),
                        t.remove()
                    }
                })
            }
        }, {
            key: "printScriptAdIntoHead",
            value: function(t) {
                t.forEach(function(t, e) {
                    if (t.getAttribute("src")) {
                        var i = document.createElement("script");
                        i.src = t.getAttribute("src"),
                        t.hasAttribute("id") && (i.id = t.getAttribute("id")),
                        t.hasAttribute("async") && i.setAttribute("async", ""),
                        document.getElementsByTagName("script")[0].before(i),
                        t.remove()
                    }
                })
            }
        }, {
            key: "onCloseButton",
            value: function(t) {
                throw Error("The 'onCloseButton' method must be implemented")
            }
        }, {
            key: "onCloseOnLoop",
            value: function(t) {
                throw Error("The 'onCloseOnLoop' method must be implemented")
            }
        }, {
            key: "addCloseButton",
            value: function(t) {
                if (t.dg_show_close_button) {
                    var e = this.getFirstAd();
                    this.At = document.createElement("div"),
                    this.At.classList.add("close-display-general"),
                    this.At.dataset.cid = this.vt.id,
                    this.It = document.createElement("button"),
                    this.It.id = "close-display-general-".concat(this.vt.id),
                    this.It.dataset.id = this.vt.id,
                    this.It.innerHTML = '<svg enable-background="new 0 0 20 20" height="18" viewBox="0 0 20 20" width="8" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><clipPath id="a"><path d="m0 0h20v20h-20z"/></clipPath><path clip-path="url(#a)" d="m19 20c-.3 0-.5-.1-.7-.3l-8.3-8.3-8.3 8.3c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l8.3-8.3-8.3-8.3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l8.3 8.3 8.3-8.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-8.3 8.3 8.3 8.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z"/></svg>',
                    this.It.addEventListener("click", this.onCloseButton.bind(this)),
                    this.At.prepend(this.It),
                    "after" === ("mobile" === e.device ? e.dg_close_button_mobile_position : e.dg_close_button_desktop_position) ? this.ft.append(this.At) : this.ft.prepend(this.At)
                }
            }
        }, {
            key: "showCloseButton",
            value: function(t) {
                var e = this
                  , i = setTimeout(function() {
                    clearTimeout(i),
                    null !== e.It && (e.It.style.display = "block")
                }, parseInt(1e3 * t.dg_show_close_button_delay))
            }
        }, {
            key: "onRendered",
            value: function(t) {
                var e = this.getCurrentAd();
                if (null !== e && null !== this.vt && null !== this.wt && t.slot.getSlotElementId() === this.vt.id) {
                    if (logger.debug("Slot Rendered: ", {
                        adUnit: t.slot.getAdUnitPath(),
                        empty: t.isEmpty
                    }),
                    this.bt)
                        return this.rendererWhenIsRefresh(t.isEmpty, t.size, t.slot);
                    t.isEmpty ? this.fallback() : this.renderedShow(t, e)
                }
            }
        }, {
            key: "renderedShow",
            value: function(t, e) {
                this.removePrevious(),
                this.resize(t.size),
                this.showCloseButton(e),
                this.onRenderedShowDebug(t.slot, t.isEmpty),
                this.hasNextAd() ? this.callNextAd() : this.refreshAd()
            }
        }, {
            key: "rendererWhenIsRefresh",
            value: function(t, e, i) {
                t ? this.removeCurrent() : (this.removePrevious(),
                this.resize(e),
                this.showCloseButton(this.getCurrentAd()),
                this.onRenderedShowDebug(i, t))
            }
        }, {
            key: "resize",
            value: function(t) {
                if ("number" == typeof t[0]) {
                    var e = parseInt(t[1]) + (null !== this.At ? 30 : 0);
                    this.ft.style.setProperty("width", t[0] + "px", "important"),
                    this.ft.style.setProperty("height", e + "px", "important"),
                    this.ft.style.setProperty("margin", "0 auto", "important"),
                    this.ft.style.setProperty("padding", "0", "important")
                }
            }
        }, {
            key: "createMowAdContainer",
            value: function(t, e) {
                var i = document.createElement("div");
                return i.id = generateId("mow-dsb"),
                i.innerHTML = this.codeHasHtml(e.code) || e.code.includes("data-mow_video") ? e.code : "",
                t.appendChild(i),
                i
            }
        }, {
            key: "createMowContainer",
            value: function() {
                var t = this.bt ? this.getFirstAd() : this.getCurrentAd()
                  , e = null !== t ? t.ad_id : ""
                  , i = document.createElement("div");
                if (i.id = generateId("mow-display-general") + "-" + e,
                i.className = "mow-display-general mow-ad",
                isDebubMode()) {
                    i.className += " mow-debug";
                    var n = document.createElement("div");
                    n.className = "mow-debug-details",
                    i.appendChild(n)
                }
                return i
            }
        }, {
            key: "removePrevious",
            value: function() {
                null !== this._t && (googletag.destroySlots([this._t]),
                this._t = null),
                null !== this.gt && (this.gt.remove(),
                this.gt = null),
                null !== this.yt && (this.yt = null)
            }
        }, {
            key: "removeCurrent",
            value: function() {
                null !== this.wt && (googletag.destroySlots([this.wt]),
                this.wt = null),
                null !== this.ft && (this.ft.remove(),
                this.ft = null),
                null !== this.vt && (this.vt = null)
            }
        }, {
            key: "refreshAd",
            value: function() {
                var t = this
                  , e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.bt = !0;
                var i = this.getFirstAd();
                if (!(i.refresh_seconds <= 0)) {
                    var n = 1e3 * i.refresh_seconds;
                    i.code_refresh ? this.kt = setTimeout(function() {
                        clearTimeout(t.kt),
                        t.processAppendAd(i, i),
                        t.loop(i),
                        t.Et = setInterval(function() {
                            t.refresh()
                        }, n)
                    }, e ? 0 : n) : (this.loop(i),
                    this.Et = setInterval(function() {
                        t.refresh()
                    }, n))
                }
            }
        }, {
            key: "loop",
            value: function(t) {
                var e = this;
                if ((void 0 !== t.delay_to_loop && null !== t.delay_to_loop ? parseInt(t.delay_to_loop) : 0) > 0) {
                    var i = 1e3 * t.delay_to_loop;
                    setTimeout(function() {
                        e.onCloseOnLoop(),
                        e.tt = 0,
                        e.appendAd()
                    }, i)
                }
            }
        }, {
            key: "refresh",
            value: function() {
                null !== this.wt && googletag.pubads().refresh([this.wt])
            }
        }, {
            key: "fallback",
            value: function() {
                this.removeCurrent(),
                this.ft = this.gt,
                this.vt = this.yt,
                this.wt = this._t,
                this.hasNextAd() ? this.appendNextAd() : this.refreshAd(!0)
            }
        }, {
            key: "codeHasHtml",
            value: function(t) {
                return this.codeIsImg(t) || this.codeIsScript(t) || this.codeIsIFrame(t)
            }
        }, {
            key: "codeIsIFrame",
            value: function(t) {
                return t.includes("<iframe")
            }
        }, {
            key: "codeIsScript",
            value: function(t) {
                return t.includes("<script") || t.includes("<div")
            }
        }, {
            key: "codeIsImg",
            value: function(t) {
                return t.includes("<img")
            }
        }, {
            key: "getCurrentAd",
            value: function() {
                return void 0 === this.X || void 0 === this.X[this.tt] ? null : this.X[this.tt]
            }
        }, {
            key: "getFirstAd",
            value: function() {
                return void 0 === this.X || void 0 === this.X[0] ? null : this.X[0]
            }
        }, {
            key: "filterAdsForDevice",
            value: function(t) {
                var e = this
                  , i = []
                  , n = defaults.t.innerWidth;
                return t.forEach(function(t) {
                    n <= 768 && "mobile" === t.device && (t.isMobile = !0,
                    t.skipDevice = !1,
                    i.push(t)),
                    n > 768 && "desktop" === t.device && (t.isMobile = !1,
                    t.skipDevice = !1,
                    i.push(t)),
                    e.ht && (t.isMobile = null,
                    t.skipDevice = !0,
                    i.push(t))
                }),
                i
            }
        }, {
            key: "onRenderedShowDebug",
            value: function(t, e) {
                if (isDebubMode()) {
                    var i = this.ft.querySelector(".mow-debug-details");
                    if (i) {
                        var n = this.getCurrentAd();
                        i.style.display = "block",
                        i.innerHTML = "<strong>EMPTY:</strong> ".concat(e ? "true" : "false", " <br/>"),
                        i.innerHTML += "<strong>ADUNIT:</strong> <a target='_blank' title='Ver en admin' href='https://admin.mowplayer.com/admin/ads/edit/" + n.ad_id + "'>" + t.getAdUnitPath()
                    }
                }
            }
        }, {
            key: "hasNextAd",
            value: function() {
                var t = this.tt + 1;
                return void 0 !== this.X && void 0 !== this.X[t]
            }
        }]),
        DisplayBase
    }()
      , DisplayInContent = function(t) {
        _inherits(i, DisplayBase);
        var e = _createSuper(i);
        function i(t) {
            var n, o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return _classCallCheck(this, i),
            (n = e.call(this, t, o)).xt = !1,
            n.start(),
            n
        }
        return _createClass(i, [{
            key: "start",
            value: function() {
                var t = this;
                if (!this.dt) {
                    this.dt = !0;
                    var e = function() {
                        var e = setInterval(function() {
                            window.googletag && googletag.apiReady && (clearInterval(e),
                            t.autoclose(),
                            t.appendAd())
                        }, 20)
                    }
                      , i = this.getFirstAd()
                      , n = null === i ? null : i.blocked_pages;
                    if (!isBlockedPageForAds(n)) {
                        var o = null === i ? null : i.allowed_pages;
                        if (!1 !== isAllowedPageForAds(o)) {
                            var r = null !== i && null !== i.delay_to_start && void 0 !== i.delay_to_start ? 1e3 * parseInt(i.delay_to_start) : 0;
                            r > 0 ? setTimeout(function() {
                                e()
                            }, r) : e()
                        }
                    }
                }
            }
        }, {
            key: "autoclose",
            value: function() {
                var t = this
                  , e = this.getFirstAd()
                  , i = null === e || void 0 === e.delay_to_autoclose || null === e.delay_to_autoclose ? 0 : parseInt(e.delay_to_autoclose);
                0 !== i && (this.xt = setTimeout(function() {
                    clearTimeout(t.xt),
                    t.onCloseButton()
                }, 1e3 * i))
            }
        }, {
            key: "appendAd",
            value: function() {
                var t = this.getFirstAd()
                  , e = this.getCurrentAd();
                null !== e && null !== t && (null === this.pt ? this.appendAdForCssSelector(t, e) : this.processAppendAd(e, t))
            }
        }, {
            key: "appendAdForCssSelector",
            value: function(t, e) {
                var i = this
                  , n = 0
                  , o = setInterval(function() {
                    for (var r = t.css_selector.split(","), s = 0; null === i.pt && s < r.length; ) {
                        var a = domSearch(r[s]);
                        a && (i.pt = a,
                        1 == t.in_view_autoplay ? i.preProcessAppendAdInViewAutoplay(e, t) : i.preProcessAppendAd(e, t)),
                        s++
                    }
                    n += 25,
                    (null !== i.pt || n > 25e3) && clearInterval(o)
                }, 25)
            }
        }, {
            key: "preProcessAppendAdInViewAutoplay",
            value: function(t, e) {
                var i = this
                  , n = function n() {
                    if (null === i.pt)
                        return window.removeEventListener("scroll", n, !1),
                        window.removeEventListener("resize", n, !1),
                        !1;
                    var o = i.pt.getBoundingClientRect()
                      , r = o.height * parseFloat("before" === e.inject_at ? .1 : 1.2);
                    return o.top > 0 && o.top + r < window.innerHeight || o.top < 0 && o.top + r > 0 ? (window.removeEventListener("scroll", n, !1),
                    window.removeEventListener("resize", n, !1),
                    i.preProcessAppendAd(t, e),
                    !1) : void 0
                };
                "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", function() {
                    window.addEventListener("scroll", n),
                    window.addEventListener("resize", n),
                    n()
                }) : (window.addEventListener("scroll", n),
                window.addEventListener("resize", n),
                n())
            }
        }, {
            key: "processAppendAd",
            value: function(t, e) {
                if (!t.code)
                    return !0;
                this.gt = this.ft,
                this.yt = this.vt,
                this._t = this.wt,
                this.ft = this.createMowContainer(),
                this.vt = this.createMowAdContainer(this.ft, t),
                "after" === e.inject_at ? this.pt.parentNode.insertBefore(this.ft, this.pt.nextSibling) : "inner_last" === e.inject_at ? this.pt.appendChild(this.ft) : "inner_first" === e.inject_at ? this.pt.appendChild(this.ft) : "over_pic" === e.inject_at ? (this.ft.className = this.ft.className + " mow-container-over-pic",
                this.pt.parentNode.style.position = "relative",
                this.pt.parentNode.insertBefore(this.ft, this.pt.nextSibling)) : this.pt.parentNode.insertBefore(this.ft, this.pt),
                this.codeHasHtml(t.code) ? this.printScriptAd(t) : this.printDFPAd(t, this.vt.id)
            }
        }, {
            key: "resize",
            value: function(t) {
                if (_get(_getPrototypeOf(i.prototype), "resize", this).call(this, t),
                "number" == typeof t[0]) {
                    var e = this.getFirstAd()
                      , n = e.frame ? 20 : 0
                      , o = e.frame ? 20 : 0;
                    e.dg_show_close_button && (o += 22);
                    var r = parseInt(t[0]) + n
                      , s = parseInt(t[1]) + o;
                    this.ft.style.setProperty("width", r + "px", "important"),
                    this.ft.style.setProperty("height", s + "px", "important"),
                    "over_pic" === e.inject_at && (r >= s ? null === this.At && this.ft.style.setProperty("bottom", "8px", "important") : this.ft.style.setProperty("top", "0px", "important"))
                }
            }
        }, {
            key: "onCloseButton",
            value: function(t) {
                t && t.stopPropagation(),
                clearTimeout(this.kt),
                clearTimeout(this.callNextTimeOut),
                clearInterval(this.Et),
                clearTimeout(this.xt),
                this.removePrevious(),
                this.removeCurrent()
            }
        }, {
            key: "onCloseOnLoop",
            value: function(t) {
                t && t.stopPropagation(),
                clearTimeout(this.kt),
                clearTimeout(this.callNextTimeOut),
                clearInterval(this.Et),
                clearTimeout(this.xt),
                this.bt = !1,
                this.removePrevious()
            }
        }, {
            key: "createMowAdContainer",
            value: function(t, e) {
                var n = _get(_getPrototypeOf(i.prototype), "createMowAdContainer", this).call(this, t, e);
                return this.getFirstAd().frame && (n.className = "mow-fixed-frame"),
                n
            }
        }]),
        i
    }()
      , DisplayInContentOld = function() {
        function DisplayInContentOld(t) {
            var e = this
              , i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            _classCallCheck(this, DisplayInContentOld),
            this.ads = t,
            this.skipDevice = i,
            this.width = window.innerWidth,
            this.visiblityAdFired = !1,
            this.outstreamInjected = !1,
            this.St = null,
            this.Pt = null;
            var n = void 0 !== this.ads[0] ? this.ads[0] : null
              , o = null === n ? null : n.blocked_pages;
            if (!!(null === n || !isBlockedPageForAds(o)))
                var r = setInterval(function() {
                    window.googletag && googletag.apiReady && (e.visiblityAdFired || (e.visiblityAdFired = !0,
                    e.outstreamInjected = !0,
                    t.forEach(function(t) {
                        t.fallback || (e.width <= 768 && "mobile" === t.device || e.width > 768 && "desktop" === t.device || e.skipDevice) && e.pushAd(t)
                    })),
                    clearInterval(r))
                }, 20)
        }
        return _createClass(DisplayInContentOld, [{
            key: "pushAd",
            value: function(t) {
                var e = this;
                if (0 === t.css_selector.length)
                    return !0;
                var i = 0
                  , n = !1
                  , o = !1
                  , r = setInterval(function() {
                    for (var s = t.css_selector.split(","), a = !1, l = 0, c = function() {
                        var i = null;
                        if (s[l].includes(":contains"))
                            for (var c = s[l].indexOf(":contains("), u = s[l].substring(0, c), h = s[l].substring(c + 11, s[l].length - 2), d = document.querySelectorAll(u), p = 0; p < d.length; )
                                d[p] && d[p].innerHTML.trim() === h.trim() && (i = d[p],
                                a = !0),
                                p++;
                        else
                            i = document.querySelector(s[l]);
                        if (l++,
                        i) {
                            if (a = !0,
                            1 == t.in_view_autoplay) {
                                var m = function r() {
                                    if (!i)
                                        return window.removeEventListener("scroll", r, !1),
                                        window.removeEventListener("resize", r, !1),
                                        !1;
                                    var s = i.getBoundingClientRect()
                                      , a = s.height * parseFloat("before" === t.inject_at ? .1 : 1.2)
                                      , l = s.top > 0 && s.top + a < window.innerHeight || s.top < 0 && s.top + a > 0;
                                    n !== l && (n = l,
                                    l && !o && (o = !0,
                                    e.playAd(t, i)))
                                };
                                m(),
                                window.addEventListener("scroll", m),
                                window.addEventListener("resize", m)
                            } else
                                e.playAd(t, i);
                            return clearInterval(r),
                            {
                                v: !0
                            }
                        }
                    }; 0 == a && l < s.length; ) {
                        var u = c();
                        if ("object" === _typeof(u))
                            return u.v
                    }
                    (i += 25) > 25e3 && clearInterval(r)
                }, 25)
            }
        }, {
            key: "onRenderedShowDebug",
            value: function(t, e, i) {
                if (isDebubMode()) {
                    var n = document.querySelector("#" + t.elementID + " .mow-debug-details");
                    n && (n.style.display = "block",
                    n.innerHTML = "<strong>EMPTY:</strong> ".concat(i ? "true" : "false", " <br/>"),
                    n.innerHTML += "<strong>ADUNIT:</strong> <a target='_blank' title='Ver en admin' href='https://admin.mowplayer.com/admin/ads/edit/" + t.ad_id + "'>" + e.getAdUnitPath())
                }
            }
        }, {
            key: "gmt_event_initialise",
            value: function(t, e, i, n, o) {
                var r = this
                  , s = setInterval(function() {
                    if (window.googletag && googletag.apiReady) {
                        var e = !0
                          , a = r.generateFallbacks(t)
                          , l = !1;
                        googletag.pubads().addEventListener("slotRenderEnded", function(s) {
                            var c = s.slot.getAdUnitPath() === t.code || s.slot.getAdUnitPath() === t.code_refresh
                              , u = s.slot.getAdUnitPath() === t.code && !0 === e || s.slot.getAdUnitPath() === t.code && !t.code_refresh
                              , h = s.slot.getAdUnitPath() === t.code_refresh && !1 === e;
                            if (c && logger.debug("Slot Rendered: ", {
                                adUnit: s.slot.getAdUnitPath(),
                                empty: s.isEmpty,
                                size_availables: t.ad_size,
                                size_rendered: s.size,
                                css: t.css_selector,
                                id: t.id,
                                ad_id: t.ad_id
                            }),
                            t && c && !(!1 === u && !1 === h || s.isEmpty && 0 === a.length))
                                if (s.isEmpty)
                                    a.forEach(function(e, i) {
                                        if (!e.called)
                                            return a[i].called = !0,
                                            document.querySelector("#" + t.elementID).parentNode.removeChild(document.querySelector("#" + t.elementID)),
                                            void r.pushAd(e)
                                    });
                                else {
                                    if (t.dg_show_close_button) {
                                        var d = document.getElementById("close-display-general-".concat(t.elementID));
                                        d && setTimeout(function() {
                                            d.style.display = "block"
                                        }, t.dg_show_close_button_delay)
                                    }
                                    if ("number" == typeof s.size[0] && (document.querySelector("#" + t.elementID).style.setProperty("width", s.size[0] + "px", "important"),
                                    document.querySelector("#" + t.elementID).style.setProperty("height", s.size[1] + 20 + 22 + "px", "important"),
                                    document.querySelector("#" + t.elementID).style.setProperty("margin", "0 auto", "important"),
                                    document.querySelector("#" + t.elementID).style.setProperty("padding", "0", "important")),
                                    r.onRenderedShowDebug(t, s.slot, s.isEmpty),
                                    !(t.refresh_seconds <= 0))
                                        if (t.code_refresh)
                                            if (e && s.slot.getAdUnitPath() === t.code) {
                                                e = !1;
                                                var p = r;
                                                r.Pt = setTimeout(function() {
                                                    googletag.destroySlots([i]),
                                                    o.remove(),
                                                    i = r.playAd(t, n, !0),
                                                    clearInterval(p.Pt)
                                                }, 1e3 * t.refresh_seconds)
                                            } else
                                                !1 === l && (r.St = setInterval(function() {
                                                    googletag.pubads().refresh([i])
                                                }, 1e3 * t.refresh_seconds)),
                                                l = !0;
                                        else
                                            e && (e = !1,
                                            setInterval(function() {
                                                googletag.pubads().refresh([i])
                                            }, 1e3 * t.refresh_seconds))
                                }
                        }),
                        clearInterval(s)
                    }
                }, 5)
            }
        }, {
            key: "generateFallbacks",
            value: function(t) {
                var e = this
                  , i = [];
                return t.fallback || this.ads.forEach(function(n) {
                    t.ad_id === n.ad_id && n.fallback && (e.width <= 768 && "mobile" === n.device || e.width > 768 && "desktop" === n.device || e.skipDevice) && i.push(n)
                }),
                i
            }
        }, {
            key: "printScriptAd",
            value: function printScriptAd(s1, id) {
                var existingContent = s1.textContent
                  , intervalCheckTime = 0
                  , checkAdInternal = setInterval(function() {
                    intervalCheckTime += 5,
                    document.querySelector("#" + id) && (document.querySelector("#" + id).textContent != existingContent ? clearInterval(checkAdInternal) : intervalCheckTime > 2e4 && clearInterval(checkAdInternal))
                }, 5);
                try {
                    var adScripts = document.querySelectorAll("#" + id + " script");
                    adScripts.forEach(function(adScript, index) {
                        adScript.getAttribute("src") || eval(adScript.innerHTML)
                    }),
                    adScripts.forEach(function(t, e) {
                        if (t.getAttribute("src")) {
                            var i = document.createElement("script");
                            i.src = t.getAttribute("src"),
                            t.hasAttribute("id") && (i.id = t.getAttribute("id")),
                            t.hasAttribute("async") && i.setAttribute("async", ""),
                            document.getElementsByTagName("script")[0].before(i),
                            i.src.includes("cdn1.pediaglobal.com") && t.remove()
                        }
                    })
                } catch (t) {}
            }
        }, {
            key: "printDFPAd",
            value: function(t, e, i, n) {
                var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                if (t.dg_show_close_button) {
                    var r = document.createElement("div");
                    r.classList.add("close-display-general"),
                    r.dataset.cid = n.id,
                    r.innerHTML = '<button id="close-display-general-'.concat(n.id, '" data-id="').concat(n.id, '" style="display:none;">\n                <svg enable-background="new 0 0 20 20" height="18" viewBox="0 0 20 20" width="8" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><clipPath id="a"><path d="m0 0h20v20h-20z"/></clipPath><path clip-path="url(#a)" d="m19 20c-.3 0-.5-.1-.7-.3l-8.3-8.3-8.3 8.3c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l8.3-8.3-8.3-8.3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l8.3 8.3 8.3-8.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-8.3 8.3 8.3 8.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z"/></svg>\n            </button>'),
                    n.insertBefore(r, n.firstChild),
                    document.getElementById("close-display-general-".concat(n.id)).addEventListener("click", this.destroy.bind(this))
                }
                var s = null
                  , a = o && "" !== t.code_refresh ? t.code_refresh : t.code;
                return window.googletag = window.googletag || {
                    cmd: []
                },
                googletag.cmd.push(function() {
                    t.ad_size && 0 !== t.ad_size.length || (t.ad_size = [[[768, 576], [[728, 90], [468, 60], [300, 250]]], [[480, 300], [[468, 60], [320, 50], [320, 100], [300, 75], [300, 100]]], [[320, 200], [[300, 50], [300, 75], [300, 100]]]]),
                    s = ("string" == typeof t.ad_size[0] && t.ad_size[0],
                    googletag.defineSlot(a, t.ad_size, e).addService(googletag.pubads())),
                    googletag.pubads().disableInitialLoad([s]),
                    googletag.enableServices()
                }),
                this.gmt_event_initialise(t, e, s, i, n),
                googletag.cmd.push(function() {
                    googletag.display(e)
                }),
                googletag.pubads().refresh([s]),
                s
            }
        }, {
            key: "destroy",
            value: function(t) {
                t.stopPropagation();
                var e = null;
                "button" === t.target.nodeName.toLowerCase() ? e = t.target.parentNode : "svg" === t.target.nodeName.toLowerCase() ? e = t.target.parentNode.parentNode : "path" === t.target.nodeName.toLowerCase() && (e = t.target.parentNode.parentNode.parentNode),
                null !== e && (e.parentNode.remove(),
                this.St && clearInterval(this.St),
                this.Pt && clearTimeout(this.Pt))
            }
        }, {
            key: "playAd",
            value: function(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!t.code)
                    return !0;
                var n = generateId("mow-display-general")
                  , o = generateId("mow-dsb")
                  , r = null;
                t.elementID = n;
                var s = ""
                  , a = document.createElement("div");
                return a.id = n,
                a.className = "mow-ad",
                isDebubMode() && (a.className += " mow-debug",
                s = '<div class="mow-debug-details"></div>'),
                s += '<div id="' + o + '" class="mow-ad">' + (t.code.includes("script") || t.code.includes("data-mow_video") ? t.code : "") + "</div>",
                a.innerHTML = s,
                "inner" === t.inject_at ? e.appendChild(a) : "before" === t.inject_at ? e.parentNode.insertBefore(a, e) : e.parentNode.insertBefore(a, e.nextSibling),
                t.code.includes("script") || t.code.includes("<div") ? this.printScriptAd(a, n) : r = this.printDFPAd(t, o, e, a, i),
                void 0 === window.CloseEventBindedMowDSB && (window.CloseEventBindedMowDSB = !0,
                document.addEventListener("click", function(t) {
                    var e = !1;
                    (t.path || t.composedPath && t.composedPath()).forEach(function(t) {
                        void 0 !== t.classList && t.classList.contains("mow-passback-close") && (e = t)
                    }),
                    e && (e.classList.contains(initialCloseButtonClass) ? (e.classList.remove(initialCloseButtonClass),
                    e.parentNode.style.top = "top" === e.dataset.position ? "-" + e.parentNode.offsetHeight + "px" : "auto",
                    e.parentNode.style.bottom = "top" === e.dataset.position ? "auto" : "-" + e.parentNode.offsetHeight + "px") : (e.classList.add(initialCloseButtonClass),
                    e.parentNode.style.top = "top" === e.dataset.position ? 0 : "auto",
                    e.parentNode.style.bottom = "top" === e.dataset.position ? "auto" : 0))
                }, !1)),
                r
            }
        }]),
        DisplayInContentOld
    }()
      , DisplayGoogleAnchorBase = function() {
        function t(e) {
            _classCallCheck(this, t),
            this.X = e,
            this.dt = !1,
            this.tt = 0,
            this.wt = null,
            this._t = null,
            this.bt = !1,
            this.Ct = this.X.length > 0 && void 0 !== this.X[0].delay_inter_ad && null !== this.X[0].delay_inter_ad && 0 !== this.X[0].delay_inter_ad ? 1e3 * this.X[0].delay_inter_ad : 1e4,
            this.start()
        }
        return _createClass(t, [{
            key: "start",
            value: function() {
                var t = this;
                if (!this.dt) {
                    this.dt = !0;
                    var e = this.getFirstAd()
                      , i = null === e ? null : e.blocked_pages;
                    if (!isBlockedPageForAds(i)) {
                        var n = null === e ? null : e.allowed_pages;
                        if (!1 !== isAllowedPageForAds(n))
                            var o = setInterval(function() {
                                window.googletag && googletag.apiReady && (clearInterval(o),
                                t.appendAd())
                            }, 20)
                    }
                }
            }
        }, {
            key: "callNextAd",
            value: function() {
                var t = this;
                this.callNextTimeOut = setTimeout(function() {
                    clearTimeout(t.callNextTimeOut),
                    t.appendNextAd()
                }, this.Ct)
            }
        }, {
            key: "appendNextAd",
            value: function() {
                this.removeCurrent(),
                this.tt++,
                this.appendAd()
            }
        }, {
            key: "appendAd",
            value: function(t) {}
        }, {
            key: "onRendered",
            value: function(t) {
                this.wt === t.slot && (logger.debug("Slot Rendered: ", {
                    adUnit: t.slot.getAdUnitPath(),
                    empty: t.isEmpty
                }),
                this.bt || t.isEmpty || (this.hasNextAd() ? this.callNextAd() : this.refreshAd()))
            }
        }, {
            key: "fallback",
            value: function() {
                this.hasNextAd() ? this.appendNextAd() : this.refreshAd(!0)
            }
        }, {
            key: "refreshAd",
            value: function() {
                var t = this
                  , e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.bt = !0;
                var i = this.getFirstAd();
                if (!(i.refresh_seconds <= 0)) {
                    var n = 1e3 * i.refresh_seconds;
                    i.code_refresh ? this.kt = setTimeout(function() {
                        clearTimeout(t.kt),
                        t.removeCurrent(),
                        t.appendAd(i),
                        t.Et = setInterval(function() {
                            t.refresh()
                        }, n)
                    }, e ? 0 : this.Ct) : this.Et = setInterval(function() {
                        t.refresh()
                    }, n)
                }
            }
        }, {
            key: "refresh",
            value: function() {
                null !== this.wt && googletag.pubads().refresh([this.wt])
            }
        }, {
            key: "removePrevious",
            value: function() {
                null !== this._t && (googletag.destroySlots([this._t]),
                this._t = null)
            }
        }, {
            key: "removeCurrent",
            value: function() {
                null !== this.wt && (googletag.destroySlots([this.wt]),
                this.wt = null)
            }
        }, {
            key: "getCurrentAd",
            value: function() {
                return void 0 === this.X || void 0 === this.X[this.tt] ? null : this.X[this.tt]
            }
        }, {
            key: "getFirstAd",
            value: function() {
                return void 0 === this.X || void 0 === this.X[0] ? null : this.X[0]
            }
        }, {
            key: "hasNextAd",
            value: function() {
                var t = this.tt + 1;
                return void 0 !== this.X && void 0 !== this.X[t]
            }
        }]),
        t
    }()
      , DisplayAnchorStb = function(t) {
        _inherits(i, DisplayGoogleAnchorBase);
        var e = _createSuper(i);
        function i() {
            return _classCallCheck(this, i),
            e.apply(this, arguments)
        }
        return _createClass(i, [{
            key: "appendAd",
            value: function(t) {
                var e = this
                  , i = this.getFirstAd()
                  , n = t || this.getCurrentAd();
                if (this._t = this.wt,
                null !== n && null !== i && n.code) {
                    googletag.cmd.push(function() {
                        googletag.pubads().addEventListener("slotRenderEnded", function(t) {
                            e.onRendered(t)
                        })
                    });
                    var o = this.bt ? n.code_refresh : n.code;
                    googletag.cmd.push(function() {
                        e.wt = googletag.defineOutOfPageSlot(o, googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR),
                        e.wt ? (e.wt.setTargeting("test", "anchor").addService(googletag.pubads()),
                        googletag.enableServices(),
                        googletag.display(e.wt),
                        googletag.pubads().refresh([e.wt])) : logger.error("Anchor STB not available")
                    })
                }
            }
        }]),
        i
    }()
      , DisplayAnchorStt = function(t) {
        _inherits(i, DisplayGoogleAnchorBase);
        var e = _createSuper(i);
        function i() {
            return _classCallCheck(this, i),
            e.apply(this, arguments)
        }
        return _createClass(i, [{
            key: "appendAd",
            value: function(t) {
                var e = this
                  , i = this.getFirstAd()
                  , n = t || this.getCurrentAd();
                if (this._t = this.wt,
                null !== n && null !== i && n.code) {
                    googletag.cmd.push(function() {
                        googletag.pubads().addEventListener("slotRenderEnded", function(t) {
                            e.onRendered(t)
                        })
                    });
                    var o = this.bt ? n.code_refresh : n.code;
                    googletag.cmd.push(function() {
                        e.wt = googletag.defineOutOfPageSlot(o, googletag.enums.OutOfPageFormat.TOP_ANCHOR),
                        e.wt ? (e.wt.setTargeting("test", "anchor").addService(googletag.pubads()),
                        googletag.enableServices(),
                        googletag.display(e.wt),
                        googletag.pubads().refresh([e.wt])) : logger.error("Anchor STT not available")
                    })
                }
            }
        }]),
        i
    }()
      , DisplayGoogleLeftSideRail = function(t) {
        _inherits(i, DisplayGoogleAnchorBase);
        var e = _createSuper(i);
        function i() {
            return _classCallCheck(this, i),
            e.apply(this, arguments)
        }
        return _createClass(i, [{
            key: "appendAd",
            value: function(t) {
                var e = this
                  , i = this.getFirstAd()
                  , n = t || this.getCurrentAd();
                if (this._t = this.wt,
                null !== n && null !== i && n.code) {
                    googletag.cmd.push(function() {
                        googletag.pubads().addEventListener("slotRenderEnded", function(t) {
                            e.onRendered(t)
                        })
                    });
                    var o = this.bt ? n.code_refresh : n.code;
                    googletag.cmd.push(function() {
                        e.wt = googletag.defineOutOfPageSlot(o, googletag.enums.OutOfPageFormat.LEFT_SIDE_RAIL),
                        e.wt ? (e.wt.setTargeting("test", "anchor").addService(googletag.pubads()),
                        googletag.enableServices(),
                        googletag.display(e.wt),
                        googletag.pubads().refresh([e.wt])) : logger.error("Google Left Side Rail not available")
                    })
                }
            }
        }]),
        i
    }()
      , DisplayGoogleRightSideRail = function(t) {
        _inherits(i, DisplayGoogleAnchorBase);
        var e = _createSuper(i);
        function i(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return _classCallCheck(this, i),
            e.call(this, t, n)
        }
        return _createClass(i, [{
            key: "appendAd",
            value: function(t) {
                var e = this
                  , i = this.getFirstAd()
                  , n = t || this.getCurrentAd();
                if (this._t = this.wt,
                null !== n && null !== i && n.code) {
                    googletag.cmd.push(function() {
                        googletag.pubads().addEventListener("slotRenderEnded", function(t) {
                            e.onRendered(t)
                        })
                    });
                    var o = this.bt ? n.code_refresh : n.code;
                    googletag.cmd.push(function() {
                        e.wt = googletag.defineOutOfPageSlot(o, googletag.enums.OutOfPageFormat.RIGHT_SIDE_RAIL),
                        e.wt ? (e.wt.setTargeting("test", "anchor").addService(googletag.pubads()),
                        googletag.enableServices(),
                        googletag.display(e.wt),
                        googletag.pubads().refresh([e.wt])) : logger.error("Google Left Side Rail not available")
                    })
                }
            }
        }]),
        i
    }()
      , DisplayPopup = function(t) {
        _inherits(i, DisplayBase);
        var e = _createSuper(i);
        function i(t) {
            var n, o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return _classCallCheck(this, i),
            (n = e.call(this, t, o)).xt = !1,
            n.start(),
            n
        }
        return _createClass(i, [{
            key: "start",
            value: function() {
                var t = this;
                if (!this.dt) {
                    this.dt = !0;
                    var e = this.getFirstAd()
                      , i = null === e ? null : e.blocked_pages;
                    if (!isBlockedPageForAds(i)) {
                        var n = null === e ? null : e.allowed_pages;
                        if (!1 !== isAllowedPageForAds(n)) {
                            var o = function() {
                                var e = t.getFirstAd()
                                  , i = null !== e && null !== e.delay_to_start && void 0 !== e.delay_to_start ? 1e3 * parseInt(e.delay_to_start) : 2e3;
                                setTimeout(function() {
                                    t.autoclose(),
                                    t.appendAd()
                                }, i)
                            };
                            "complete" === document.readyState || "interactive" === document.readyState ? o() : window.addEventListener("DOMContentLoaded", function() {
                                o()
                            })
                        }
                    }
                }
            }
        }, {
            key: "printScriptAd",
            value: function(t) {
                t.dg_show_close_button = !0,
                this.addCloseButton(t),
                _get(_getPrototypeOf(i.prototype), "printScriptAd", this).call(this, t)
            }
        }, {
            key: "autoclose",
            value: function() {
                var t = this
                  , e = this.getFirstAd()
                  , i = null === e || void 0 === e.delay_to_autoclose || null === e.delay_to_autoclose ? 0 : 1e3 * parseInt(e.delay_to_autoclose);
                0 !== i && (this.xt = setTimeout(function() {
                    clearTimeout(t.xt),
                    t.onCloseButton()
                }, i))
            }
        }, {
            key: "appendAd",
            value: function() {
                var t = this.getFirstAd()
                  , e = this.getCurrentAd();
                if (null !== e && null !== t)
                    if (null === this.pt) {
                        var i = domSearch("body");
                        this.pt = this.createPopupBackground(),
                        i.append(this.pt),
                        this.preProcessAppendAd(e, t)
                    } else
                        this.processAppendAd(e, t)
            }
        }, {
            key: "processAppendAd",
            value: function(t, e) {
                if (!t.code)
                    return !0;
                if (this.gt = this.ft,
                this.yt = this.vt,
                this._t = this.wt,
                this.ft = this.createMowContainer(),
                this.vt = this.createMowAdContainer(this.ft, t),
                this.pt.appendChild(this.ft),
                this.codeHasHtml(t.code)) {
                    this.printScriptAd(t);
                    var i = 320
                      , n = 480;
                    if (this.codeIsImg(t.code)) {
                        var o = document.querySelector(".mow-popup-ad img");
                        null !== o && (i = 0 === o.width ? i : o.width,
                        n = 0 === o.height ? n : o.height)
                    }
                    this.resize([i, n]),
                    this.showCloseButton(t),
                    this.pt.style.display = "block"
                } else
                    this.printDFPAd(t, this.vt.id)
            }
        }, {
            key: "resize",
            value: function(t) {
                if (_get(_getPrototypeOf(i.prototype), "resize", this).call(this, t),
                "number" == typeof t[0]) {
                    var e = parseInt(t[1]) + (null !== this.At ? 30 : 0);
                    this.ft.style.setProperty("width", parseInt(t[0]) + 20 + "px", "important"),
                    this.ft.style.setProperty("height", e + "px", "important"),
                    this.ft.style.setProperty("margin", "0 auto", "important"),
                    this.ft.style.setProperty("padding", "0", "important"),
                    this.vt.style.setProperty("width", parseInt(t[0]) + 20 + "px", "important"),
                    this.vt.style.setProperty("height", e + "px", "important");
                    var n = (window.innerHeight - e) / 2;
                    this.ft.style.setProperty("margin-top", "".concat(n, "px"))
                }
            }
        }, {
            key: "createPopupBackground",
            value: function() {
                var t = document.createElement("div");
                return t.className = "mow-popup",
                t.style.display = "none",
                t
            }
        }, {
            key: "createMowAdContainer",
            value: function(t, e) {
                var n = _get(_getPrototypeOf(i.prototype), "createMowAdContainer", this).call(this, t, e);
                return n.className = "mow-popup-ad",
                n
            }
        }, {
            key: "onCloseButton",
            value: function(t) {
                t && t.stopPropagation(),
                clearTimeout(this.kt),
                clearTimeout(this.callNextTimeOut),
                clearInterval(this.Et),
                clearTimeout(this.xt),
                this.removePrevious(),
                this.removeCurrent(),
                this.removePopupBackground()
            }
        }, {
            key: "onCloseOnLoop",
            value: function(t) {
                t && t.stopPropagation(),
                clearTimeout(this.kt),
                clearTimeout(this.callNextTimeOut),
                clearInterval(this.Et),
                clearTimeout(this.xt),
                this.removePrevious()
            }
        }, {
            key: "removePopupBackground",
            value: function() {
                null !== this.pt && (this.pt.remove(),
                this.pt = null)
            }
        }, {
            key: "renderedShow",
            value: function(t) {
                this.pt.style.display = "block",
                _get(_getPrototypeOf(i.prototype), "renderedShow", this).call(this, t, this.getCurrentAd())
            }
        }]),
        i
    }()
      , DisplaySlidein = function(t) {
        _inherits(i, DisplayInContent);
        var e = _createSuper(i);
        function i(t) {
            var n, o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return _classCallCheck(this, i),
            (n = e.call(this, t, o)).xt = !1,
            n.start(),
            n
        }
        return _createClass(i, [{
            key: "appendAd",
            value: function() {
                var t = this.getFirstAd()
                  , e = this.getCurrentAd();
                null !== e && null !== t && (null === this.pt ? this.appendAdForFixed(t, e) : this.processAppendAd(e, t))
            }
        }, {
            key: "appendAdForFixed",
            value: function(t, e) {
                var i = domSearch("body");
                this.pt = this.createFixedContainer(),
                i.insertBefore(this.pt, i.firstChild),
                this.preProcessAppendAd(e, t)
            }
        }, {
            key: "processAppendAd",
            value: function(t, e) {
                if (!t.code)
                    return !0;
                this.gt = this.ft,
                this.yt = this.vt,
                this._t = this.wt,
                this.ft = this.createMowContainer(),
                this.vt = this.createMowAdContainer(this.ft, t),
                this.pt.appendChild(this.ft),
                this.codeHasHtml(t.code) ? this.printScriptAd(t) : this.printDFPAd(t, this.vt.id)
            }
        }, {
            key: "printScriptAd",
            value: function(t) {
                if (new RegExp('div data-mow_video="c-[a-zA-Z0-9]+_m[a-zA-Z0-9]*').test(t.code)) {
                    var e = this.getFirstAd();
                    if (t.isMobile ? (this.pt.style.setProperty("width", "180px"),
                    this.pt.style.setProperty("height", "102px")) : (this.pt.style.setProperty("width", "320px"),
                    this.pt.style.setProperty("height", "180px")),
                    "right" !== e.position && "top_right" !== e.position && "bottom_right" !== e.position || this.pt.style.setProperty("right", "5px"),
                    "left" !== e.position && "top_left" !== e.position && "bottom_left" !== e.position || this.pt.style.setProperty("left", "5px"),
                    "bottom_left" === e.position || "bottom_right" === e.position) {
                        var n = t.isMobile ? 100 : 120;
                        this.pt.style.setProperty("bottom", "".concat(n, "px"))
                    }
                }
                _get(_getPrototypeOf(i.prototype), "printScriptAd", this).call(this, t)
            }
        }, {
            key: "resize",
            value: function(t) {
                if (_get(_getPrototypeOf(i.prototype), "resize", this).call(this, t),
                "number" == typeof t[0]) {
                    var e = this.getFirstAd()
                      , n = this.getCurrentAd()
                      , o = e.frame ? 20 : 0
                      , r = e.frame ? 20 : 0;
                    this.ft.style.setProperty("width", parseInt(t[0]) + o + "px", "important");
                    var s = parseInt(t[1]) + (null !== this.At ? 30 : 0);
                    if (this.pt.style.setProperty("width", t[0] + "px", "important"),
                    this.pt.style.setProperty("height", "".concat(s, "px")),
                    "bottom_left" === e.position || "bottom_right" === e.position) {
                        var a = n.isMobile ? 100 : 120;
                        this.pt.style.setProperty("bottom", "".concat(a, "px"))
                    }
                    if ("bottom_right" !== e.position && "top_right" !== e.position && "right" !== e.position || this.pt.style.setProperty("right", "".concat(r, "px")),
                    "left" === e.position || "right" === e.position) {
                        var l = (window.innerHeight - s) / 2;
                        this.pt.style.setProperty("top", "".concat(l, "px"))
                    }
                }
            }
        }, {
            key: "addCloseButton",
            value: function(t) {
                if (t.dg_show_close_button) {
                    var e = this.getFirstAd();
                    this.At = document.createElement("div"),
                    this.At.classList.add("close-display-general"),
                    this.At.dataset.cid = this.vt.id,
                    this.It = document.createElement("button"),
                    this.It.id = "close-display-general-".concat(this.vt.id),
                    this.It.dataset.id = this.vt.id,
                    this.It.innerHTML = '<svg enable-background="new 0 0 20 20" height="18" viewBox="0 0 20 20" width="8" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><clipPath id="a"><path d="m0 0h20v20h-20z"/></clipPath><path clip-path="url(#a)" d="m19 20c-.3 0-.5-.1-.7-.3l-8.3-8.3-8.3 8.3c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l8.3-8.3-8.3-8.3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l8.3 8.3 8.3-8.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-8.3 8.3 8.3 8.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z"/></svg>',
                    this.At.prepend(this.It),
                    this.ft.prepend(this.At),
                    "after" === ("mobile" === e.device ? e.dg_close_button_mobile_position : e.dg_close_button_desktop_position) ? this.ft.append(this.At) : this.ft.prepend(this.At),
                    void 0 !== e.close_all_slidein && e.close_all_slidein ? this.It.addEventListener("click", this.onAllCloseButton.bind(this)) : this.It.addEventListener("click", this.onCloseButton.bind(this))
                }
            }
        }, {
            key: "onAllCloseButton",
            value: function() {
                var t = new Event("closeSlidein");
                document.dispatchEvent(t)
            }
        }, {
            key: "onCloseButton",
            value: function(t) {
                t && t.stopPropagation(),
                !0 === this.dt && (clearTimeout(this.kt),
                clearTimeout(this.callNextTimeOut),
                clearInterval(this.Et),
                clearTimeout(this.xt),
                this.removePrevious(),
                this.removeCurrent(),
                this.removeFixedContainer())
            }
        }, {
            key: "removeFixedContainer",
            value: function() {
                null !== this.pt && (this.pt.remove(),
                this.pt = null)
            }
        }, {
            key: "createFixedContainer",
            value: function() {
                var t = this.getFirstAd()
                  , e = document.createElement("div");
                return e.className = "mow-fixed mow-fixed-" + t.position,
                e
            }
        }]),
        i
    }()
      , DisplaySlideinManager = function() {
        function t() {
            _classCallCheck(this, t),
            this.Tt = []
        }
        return _createClass(t, [{
            key: "append",
            value: function(t) {
                this.Tt.push(t)
            }
        }, {
            key: "onClose",
            value: function() {
                this.Tt.forEach(function(t) {
                    t.onCloseButton()
                })
            }
        }, {
            key: "start",
            value: function() {
                document.addEventListener("closeSlidein", this.onClose.bind(this))
            }
        }]),
        t
    }()
      , VideoSliderManager = function() {
        function t() {
            _classCallCheck(this, t),
            this.Tt = []
        }
        return _createClass(t, [{
            key: "append",
            value: function(t) {
                this.Tt.push(t)
            }
        }, {
            key: "onClose",
            value: function() {
                this.Tt.forEach(function(t) {
                    t.onCloseButton()
                })
            }
        }, {
            key: "start",
            value: function() {
                document.addEventListener("closeSlider", this.onClose.bind(this))
            }
        }]),
        t
    }()
      , isBlockedPageForAds$1 = function(t) {
        if (void 0 === t || "" === t || null === t)
            return !1;
        var e = window.location.href;
        return !!JSON.parse(t).filter(function(t) {
            return t.value == e
        }).length
    };
    function totalWordCount(t) {
        var e = t.replace(/^\s+/, "").replace(/\s+$/, "")
          , i = new RegExp("\\w+","g");
        return (e.match(i) || []).length
    }
    function calculateTimeToRead(t) {
        var e = totalWordCount(t) / 265;
        return Math.round(100 * e) / 100
    }
    function calculatePorcTimeToRead(t, e) {
        var i = e * calculateTimeToRead(t) / 100;
        return Math.round(100 * i) / 100
    }
    function decToSec(t) {
        var e = Math.trunc(t)
          , i = .6 * (t - e);
        return 60 * e + (i = Math.round(100 * i))
    }
    function humanizeFromDec(t) {
        var e = Math.trunc(t)
          , i = .6 * (t - e);
        return i = Math.round(100 * i),
        (e > 0 ? "".concat(e, " min ") : "") + "".concat(i, " seg")
    }
    function secToTimer(t) {
        var e = Math.floor(t / 60)
          , i = e < 10 ? "0".concat(e) : "".concat(e)
          , n = Math.floor(t % 60)
          , o = n < 10 ? "0".concat(n) : "".concat(n);
        return "".concat(i, ":").concat(o)
    }
    function generateId$1(t) {
        return t ? "".concat(t, "-").concat(randomId$1()) : "".concat(randomId$1())
    }
    function randomId$1() {
        return Math.floor(1e14 + Math.random() * (9e14 - 1))
    }
    function deepMerge(t, e) {
        for (var i in e)
            e.hasOwnProperty(i) && (e[i]instanceof Object && t[i]instanceof Object ? t[i] = deepMerge(t[i], e[i]) : t[i] = e[i]);
        return t
    }
    var globals$2 = {
        t: window,
        i: document,
        o: navigator
    };
    function searchElement(t) {
        if (!t)
            return null;
        for (var e = t.split(","), i = !1, n = 0, o = null; !1 === i && n < e.length; )
            (o = searchWithContains(e[n])) && (i = !0),
            n++;
        return o
    }
    function searchWithContains(t) {
        if (!t.includes(":contains"))
            return globals$2.i.querySelector(t);
        for (var e = t.indexOf(":contains("), i = t.substring(e + 11, t.length - 2), n = document.querySelectorAll(t.substring(0, e)), o = 0, r = null; null === r && o < n.length; )
            i.trim() === n[o].textContent.trim() && (r = n[o]),
            o++;
        return r
    }
    function appendElement(t, e, i) {
        "after" === t ? appendElementAfter(e, i) : "inner_first" === t ? appendElementInsideFirst(e, i) : "inner_last" === t ? appendElementInsideLast(e, i) : appendElementBefore(e, i)
    }
    function appendElementBefore(t, e) {
        if (t) {
            var i = t.parentNode;
            i && e && i.insertBefore(e, t)
        }
    }
    function appendElementAfter(t, e) {
        if (t) {
            var i = t.parentNode;
            i && e && i.insertBefore(e, t.nextSibling)
        }
    }
    function appendElementInsideFirst(t, e) {
        t && e && t.prepend(e)
    }
    function appendElementInsideLast(t, e) {
        t && e && t.append(e)
    }
    function filterAdsForDevice(t) {
        var e = []
          , i = globals$2.t.innerWidth;
        return t.forEach(function(t) {
            i <= 768 && "mobile" === t.device && (t.isMobile = !0,
            e.push(t)),
            i > 768 && "desktop" === t.device && (t.isMobile = !1,
            e.push(t))
        }),
        e.length > 0 ? e : null
    }
    var eventMixin = {
        on: function(t, e) {
            this.Bt || (this.Bt = {}),
            this.Bt[t] || (this.Bt[t] = []),
            this.Bt[t].push(e)
        },
        off: function(t, e) {
            var i = null;
            if (void 0 !== this.Bt[t] && (i = this.Bt[t]),
            i)
                for (var n = 0; n < i.length; n++)
                    i[n] === e && i.splice(n--, 1)
        },
        trigger: function(t) {
            for (var e = this, i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++)
                n[o - 1] = arguments[o];
            void 0 !== this.Bt[t] && this.Bt[t].forEach(function(t) {
                return t.apply(e, n)
            })
        }
    }
      , BaseComponent = function() {
        function t(e) {
            _classCallCheck(this, t),
            this.Rt = filterAdsForDevice(e),
            this.Ot = 0,
            this.Ft = null,
            this.Dt = !1,
            this.pt = null,
            this.dt = !1
        }
        return _createClass(t, [{
            key: "run",
            value: function() {
                var t = this;
                if (!this.dt && null !== this.Rt)
                    for (this.dt = !0,
                    this.Ft = this.getComponent(); null === this.pt && null !== this.Ft && !1 === this.Dt; )
                        this.pt = searchElement(this.Ft.css_selector),
                        null !== this.pt ? (this.Dt = !0,
                        setTimeout(function() {
                            t.start()
                        }, this.calculateDelayToStart())) : this.Ft = this.getNextComponent()
            }
        }, {
            key: "start",
            value: function() {
                throw new Error("Method createComponent is not implemented")
            }
        }, {
            key: "calculateDelayToStart",
            value: function() {
                return null !== this.Ft.delay_to_start && void 0 !== this.Ft.delay_to_start ? 1e3 * parseInt(this.Ft.delay_to_start) : 0
            }
        }, {
            key: "getComponent",
            value: function() {
                return void 0 !== this.Rt[this.Ot] ? this.Rt[this.Ot] : null
            }
        }, {
            key: "getNextComponent",
            value: function() {
                return this.Ot++,
                this.getComponent()
            }
        }]),
        t
    }();
    Object.assign(BaseComponent.prototype, eventMixin);
    var wasmOriginCode = "AGFzbQEAAAABEgRgAAF/YAAAYAF/AGACf38BfwMIBwABAgMBAAIEBQFwAQEBBQQBAQICBg4CfwFBoIoFC38AQYAICwdwCAZtZW1vcnkCAA5IYXNoX0dldEJ1ZmZlcgAACUhhc2hfSW5pdAABC0hhc2hfVXBkYXRlAAIKSGFzaF9GaW5hbAAEDUhhc2hfR2V0U3RhdGUABQ5IYXNoX0NhbGN1bGF0ZQAGClNUQVRFX1NJWkUDAQqzFgcFAEGACQstAEEAQv6568XpjpWZEDcCkIkBQQBCgcaUupbx6uZvNwKIiQFBAEIANwKAiQEL6AIBA39BAEEAKAKAiQEiASAAakH/////AXEiAjYCgIkBQQAoAoSJASEDAkAgAiABTw0AQQAgA0EBaiIDNgKEiQELQQAgAyAAQR12ajYChIkBAkACQAJAAkACQAJAIAFBP3EiAw0AQYAJIQIMAQtBwAAgA2siAiAASw0BIANBGGohA0EAIQEDQCADIAFqQYCJAWogAUGACWotAAA6AAAgAyABQQFqIgFqQdgARw0AC0GYiQFBwAAQAxogACACayEAIAJBgAlqIQILIABBwABPDQEgACEDDAILIABFDQJBACEBIANBmIkBakEALQCACToAACAAQQFGDQIgA0GZiQFqIQMgAEF/aiECA0AgAyABaiABQYEJai0AADoAACACIAFBAWoiAUcNAAwDCwsgAEE/cSEDIAIgAEFAcRADIQILIANFDQBBACEBA0AgAUGYiQFqIAIgAWotAAA6AAAgAyABQQFqIgFHDQALCwu0EAEZf0EAKAKUiQEhAkEAKAKQiQEhA0EAKAKMiQEhBEEAKAKIiQEhBQNAIABBCGooAgAiBiAAQRhqKAIAIgcgAEEoaigCACIIIABBOGooAgAiCSAAQTxqKAIAIgogAEEMaigCACILIABBHGooAgAiDCAAQSxqKAIAIg0gDCALIAogDSAJIAggByADIAZqIAIgAEEEaigCACIOaiAFIAQgAiADc3EgAnNqIAAoAgAiD2pB+Miqu31qQQd3IARqIhAgBCADc3EgA3NqQdbunsZ+akEMdyAQaiIRIBAgBHNxIARzakHb4YGhAmpBEXcgEWoiEmogAEEUaigCACITIBFqIABBEGooAgAiFCAQaiAEIAtqIBIgESAQc3EgEHNqQe6d9418akEWdyASaiIQIBIgEXNxIBFzakGvn/Crf2pBB3cgEGoiESAQIBJzcSASc2pBqoyfvARqQQx3IBFqIhIgESAQc3EgEHNqQZOMwcF6akERdyASaiIVaiAAQSRqKAIAIhYgEmogAEEgaigCACIXIBFqIAwgEGogFSASIBFzcSARc2pBgaqaampBFncgFWoiECAVIBJzcSASc2pB2LGCzAZqQQd3IBBqIhEgECAVc3EgFXNqQa/vk9p4akEMdyARaiISIBEgEHNxIBBzakGxt31qQRF3IBJqIhVqIABBNGooAgAiGCASaiAAQTBqKAIAIhkgEWogDSAQaiAVIBIgEXNxIBFzakG+r/PKeGpBFncgFWoiECAVIBJzcSASc2pBoqLA3AZqQQd3IBBqIhEgECAVc3EgFXNqQZPj4WxqQQx3IBFqIhUgESAQc3EgEHNqQY6H5bN6akERdyAVaiISaiAHIBVqIA4gEWogCiAQaiASIBUgEXNxIBFzakGhkNDNBGpBFncgEmoiECAScyAVcSASc2pB4sr4sH9qQQV3IBBqIhEgEHMgEnEgEHNqQcDmgoJ8akEJdyARaiISIBFzIBBxIBFzakHRtPmyAmpBDncgEmoiFWogCCASaiATIBFqIA8gEGogFSAScyARcSASc2pBqo/bzX5qQRR3IBVqIhAgFXMgEnEgFXNqQd2gvLF9akEFdyAQaiIRIBBzIBVxIBBzakHTqJASakEJdyARaiISIBFzIBBxIBFzakGBzYfFfWpBDncgEmoiFWogCSASaiAWIBFqIBQgEGogFSAScyARcSASc2pByPfPvn5qQRR3IBVqIhAgFXMgEnEgFXNqQeabh48CakEFdyAQaiIRIBBzIBVxIBBzakHWj9yZfGpBCXcgEWoiEiARcyAQcSARc2pBh5vUpn9qQQ53IBJqIhVqIAYgEmogGCARaiAXIBBqIBUgEnMgEXEgEnNqQe2p6KoEakEUdyAVaiIQIBVzIBJxIBVzakGF0o/PempBBXcgEGoiESAQcyAVcSAQc2pB+Me+Z2pBCXcgEWoiEiARcyAQcSARc2pB2YW8uwZqQQ53IBJqIhVqIBcgEmogEyARaiAZIBBqIBUgEnMgEXEgEnNqQYqZqel4akEUdyAVaiIQIBVzIhUgEnNqQcLyaGpBBHcgEGoiESAVc2pBge3Hu3hqQQt3IBFqIhIgEXMiGiAQc2pBosL17AZqQRB3IBJqIhVqIBQgEmogDiARaiAJIBBqIBUgGnNqQYzwlG9qQRd3IBVqIhAgFXMiFSASc2pBxNT7pXpqQQR3IBBqIhEgFXNqQamf+94EakELdyARaiISIBFzIgkgEHNqQeCW7bV/akEQdyASaiIVaiAPIBJqIBggEWogCCAQaiAVIAlzakHw+P71e2pBF3cgFWoiECAVcyIVIBJzakHG/e3EAmpBBHcgEGoiESAVc2pB+s+E1X5qQQt3IBFqIhIgEXMiCCAQc2pBheG8p31qQRB3IBJqIhVqIBkgEmogFiARaiAHIBBqIBUgCHNqQYW6oCRqQRd3IBVqIhEgFXMiECASc2pBuaDTzn1qQQR3IBFqIhIgEHNqQeWz7rZ+akELdyASaiIVIBJzIgcgEXNqQfj5if0BakEQdyAVaiIQaiAMIBVqIA8gEmogBiARaiAQIAdzakHlrLGlfGpBF3cgEGoiESAVQX9zciAQc2pBxMSkoX9qQQZ3IBFqIhIgEEF/c3IgEXNqQZf/q5kEakEKdyASaiIQIBFBf3NyIBJzakGnx9DcempBD3cgEGoiFWogCyAQaiAZIBJqIBMgEWogFSASQX9zciAQc2pBucDOZGpBFXcgFWoiESAQQX9zciAVc2pBw7PtqgZqQQZ3IBFqIhAgFUF/c3IgEXNqQZKZs/h4akEKdyAQaiISIBFBf3NyIBBzakH96L9/akEPdyASaiIVaiAKIBJqIBcgEGogDiARaiAVIBBBf3NyIBJzakHRu5GseGpBFXcgFWoiECASQX9zciAVc2pBz/yh/QZqQQZ3IBBqIhEgFUF/c3IgEHNqQeDNs3FqQQp3IBFqIhIgEEF/c3IgEXNqQZSGhZh6akEPdyASaiIVaiANIBJqIBQgEWogGCAQaiAVIBFBf3NyIBJzakGho6DwBGpBFXcgFWoiECASQX9zciAVc2pBgv3Nun9qQQZ3IBBqIhEgFUF/c3IgEHNqQbXk6+l7akEKdyARaiISIBBBf3NyIBFzakG7pd/WAmpBD3cgEmoiFSAEaiAWIBBqIBUgEUF/c3IgEnNqQZGnm9x+akEVd2ohBCAVIANqIQMgEiACaiECIBEgBWohBSAAQcAAaiEAIAFBQGoiAQ0AC0EAIAI2ApSJAUEAIAM2ApCJAUEAIAQ2AoyJAUEAIAU2AoiJASAAC6ECAQN/QQAoAoCJASIAQT9xIgFBmIkBakGAAToAAAJAAkACQCABQT9zIgJBB0sNAAJAIAJFDQAgAUGZiQFqIQADQCAAQQA6AAAgAEEBaiEAIAJBf2oiAg0ACwtBwAAhAkGYiQFBwAAQAxpBACEADAELIAJBCEYNASABQQFqIQALIABBj4kBaiEBA0AgASACakEAOgAAIAJBd2ohACACQX9qIQIgAEEASg0AC0EAKAKAiQEhAAtBACAAQRV2OgDTiQFBACAAQQ12OgDSiQFBACAAQQV2OgDRiQFBACAAQQN0IgI6ANCJAUEAIAI2AoCJAUEAQQAoAoSJATYC1IkBQZiJAUHAABADGkEAQQApAoiJATcDgAlBAEEAKQKQiQE3A4gJCwYAQYCJAQszAEEAQv6568XpjpWZEDcCkIkBQQBCgcaUupbx6uZvNwKIiQFBAEIANwKAiQEgABACEAQLCwsBAEGACAsEmAAAAA==", memoryView, textEncoder, wasmInstance = null, initialized = !1, hashLength = 16, MAX_HEAP = 16384, digit = "0".charCodeAt(0), alpha = "a".charCodeAt(0) - 10, digestChars = new Uint8Array(2 * hashLength), supportWasm = "object" === ("undefined" == typeof WebAssembly ? "undefined" : _typeof(WebAssembly)), base64Lookup = new Uint8Array(256), base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    function initEnv() {
        if (!wasmInstance && supportWasm) {
            for (var t = 0; t < base64Chars.length; t++)
                base64Lookup[base64Chars.charCodeAt(t)] = t;
            var e = new WebAssembly.Module(decodeBase64(wasmOriginCode))
              , i = (wasmInstance = new WebAssembly.Instance(e)).exports.Hash_GetBuffer()
              , n = wasmInstance.exports.memory.buffer;
            memoryView = new Uint8Array(n,i,MAX_HEAP),
            textEncoder = new TextEncoder
        }
    }
    function getDecodeBase64Length(t) {
        var e = Math.floor(.75 * t.length)
          , i = t.length;
        return "=" === t[i - 1] && (e -= 1,
        "=" === t[i - 2] && (e -= 1)),
        e
    }
    function decodeBase64(t) {
        for (var e = 0, i = t.length, n = getDecodeBase64Length(t), o = new Uint8Array(n), r = 0; r < i; r += 4) {
            var s = base64Lookup[t.charCodeAt(r)]
              , a = base64Lookup[t.charCodeAt(r + 1)]
              , l = base64Lookup[t.charCodeAt(r + 2)]
              , c = base64Lookup[t.charCodeAt(r + 3)];
            o[e] = s << 2 | a >> 4,
            o[e += 1] = (15 & a) << 4 | l >> 2,
            o[e += 1] = (3 & l) << 6 | 63 & c,
            e += 1
        }
        return o
    }
    function updateUInt8Array(t) {
        for (var e = 0; e < t.length; ) {
            var i = t.subarray(e, e + MAX_HEAP);
            e += i.length,
            memoryView.set(i),
            wasmInstance.exports.Hash_Update(i.length)
        }
    }
    function getUInt8Buffer(t) {
        if ("string" == typeof t)
            return textEncoder.encode(t);
        if (ArrayBuffer.isView(t))
            return new Uint8Array(t.buffer,t.byteOffset,t.byteLength);
        throw new Error("Invalid data type!")
    }
    function getDigestHex(t, e, i) {
        for (var n = 0, o = 0; o < i; o++) {
            var r = e[o] >>> 4;
            t[n++] = r > 9 ? r + alpha : r + digit,
            r = 15 & e[o],
            t[n++] = r > 9 ? r + alpha : r + digit
        }
        return String.fromCharCode.apply(null, t)
    }
    function canSimplify(t) {
        return "string" == typeof t ? t.length < MAX_HEAP / 4 : t.byteLength < MAX_HEAP
    }
    function init() {
        initialized = !0,
        wasmInstance.exports.Hash_Init(null)
    }
    function update(t) {
        if (!initialized)
            throw new Error("update() called before init()");
        updateUInt8Array(getUInt8Buffer(t))
    }
    function digest() {
        if (!initialized)
            throw new Error("digest() called before init()");
        return initialized = !1,
        wasmInstance.exports.Hash_Final(null),
        getDigestHex(digestChars, memoryView, hashLength)
    }
    function calculate(t) {
        if (!canSimplify(t))
            return init(),
            update(t),
            digest();
        var e = getUInt8Buffer(t);
        return memoryView.set(e),
        wasmInstance.exports.Hash_Calculate(e.length, null, null),
        getDigestHex(digestChars, memoryView, hashLength)
    }
    function md5a(t) {
        if (!supportWasm)
            throw new Error("WebAssembly is not supported in this environment");
        return initEnv(),
        calculate(t)
    }
    function xhr$1(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "GET"
          , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
          , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "text"
          , o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        return new Promise(function(r, s) {
            try {
                var a = new XMLHttpRequest;
                if (!("withCredentials"in a))
                    return;
                a.addEventListener("load", function() {
                    if ("text" === n || "string" == typeof a.response)
                        try {
                            r(JSON.parse(a.responseText))
                        } catch (t) {
                            r(a.responseText)
                        }
                    else
                        r(a.response)
                }),
                a.addEventListener("error", function() {
                    s(a.status)
                }),
                a.open(e, t, !0),
                Object.entries(o).forEach(function(t) {
                    var e = _slicedToArray(t, 2)
                      , i = e[0]
                      , n = e[1];
                    a.setRequestHeader(i, n)
                }),
                a.responseType = n,
                a.send(i)
            } catch (t) {
                s(t)
            }
        }
        )
    }
    "function" == typeof requestIdleCallback && requestIdleCallback(initEnv);
    var IASummarySdk = function() {
        function t(e) {
            _classCallCheck(this, t),
            this.Mt = e,
            this.Nt = "https://iasummary.mowplayer.com/summary/".concat(e),
            this.jt = null,
            this.Gt = null,
            this.Vt = null
        }
        return _createClass(t, [{
            key: "setCreateSummaryUrl",
            value: function(t) {
                this.jt = t
            }
        }, {
            key: "setCreateAudioUrl",
            value: function(t) {
                this.Gt = t
            }
        }, {
            key: "setRequestStaticsUrl",
            value: function(t) {
                this.Vt = t
            }
        }, {
            key: "getSummary",
            value: function(t, e) {
                var i = md5a(t);
                xhr$1("".concat(this.Nt, "/").concat(i), "GET").then(function(t) {
                    e(t)
                })
            }
        }, {
            key: "createSummary",
            value: function(t, e, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null
                  , o = {
                    text: t,
                    title: e,
                    hash: md5a(t)
                };
                xhr$1(this.jt, "POST", JSON.stringify(o), "json", {
                    "Content-Type": "application/json;charset=UTF-8"
                }).then(function(t) {
                    void 0 === t.status || "error" !== t.status ? i(t.data) : n && n()
                }).catch(function(t) {
                    n && n()
                })
            }
        }, {
            key: "createAudio",
            value: function(t, e, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null
                  , o = {
                    text: t,
                    title: e,
                    hash: md5a(t)
                };
                xhr$1(this.Gt, "POST", JSON.stringify(o), "json", {
                    "Content-Type": "application/json;charset=UTF-8"
                }).then(function(t) {
                    void 0 === t.status || "error" !== t.status ? i(t.data) : n && n()
                }).catch(function(t) {
                    n && n(),
                    console.log("Error - create audio", t)
                })
            }
        }, {
            key: "statics",
            value: function() {
                if (null !== this.Vt) {
                    xhr$1(this.Vt, "POST", JSON.stringify({}), "json", {
                        "Content-Type": "application/json;charset=UTF-8"
                    }).then(function(t) {}).catch(function(t) {})
                }
            }
        }]),
        t
    }()
      , IASummaryAds = function() {
        function t() {
            _classCallCheck(this, t)
        }
        return _createClass(t, [{
            key: "appendBefore",
            value: function(t, e) {
                var i = document.createElement("div");
                i.id = "mow-ia-summary-before-ad",
                i.className = "mow-ia-summary-before-ad";
                var n = document.createElement("div");
                n.dataset.mow = "ad",
                n.dataset.uid = t;
                var o = document.createElement("script");
                o.src = "https://ejs.mowplayer.com/js/ad/" + t + ".js",
                o.async = !0,
                appendElement("inner_first", i, n),
                appendElement("inner_first", i, o),
                appendElement("inner_first", e, i)
            }
        }, {
            key: "appendAfter",
            value: function(t, e) {
                var i = document.createElement("div");
                i.id = "mow-ia-summary-after-ad",
                i.className = "mow-ia-summary-after-ad";
                var n = document.createElement("div");
                n.dataset.mow = "ad",
                n.dataset.uid = t;
                var o = document.createElement("script");
                o.src = "https://ejs.mowplayer.com/js/ad/" + t + ".js",
                o.async = !0,
                appendElement("inner_first", i, n),
                appendElement("inner_first", i, o),
                appendElement("after", e, i)
            }
        }, {
            key: "appendInner",
            value: function(t, e) {
                var i = document.createElement("div");
                i.dataset.mow = "ad",
                i.dataset.uid = t;
                var n = document.createElement("script");
                n.src = "https://ejs.mowplayer.com/js/ad/" + t + ".js",
                n.async = !0,
                appendElement("inner_first", e, i),
                appendElement("inner_first", e, n)
            }
        }, {
            key: "removeAd",
            value: function(t) {
                for (var e; e = t.lastChild; )
                    t.removeChild(e)
            }
        }]),
        t
    }()
      , defaults$1 = {
        code: null,
        autoplay: !1,
        site_logo: null,
        site_link: null,
        media: [],
        plugins: [],
        debug: !1,
        mute_live_on_pause: !1,
        mobile_full_width: !1,
        seekTime: 5,
        volume: 1,
        mute: !1,
        duration: null,
        responsive: !0,
        width: null,
        height: null,
        ga: {
            enabled: !1
        },
        ratio: !1,
        hideControls: !0,
        origin_url: null,
        preload: "auto",
        is_amp: !1,
        receptivityRange: null,
        ad_priority: "marketplace",
        provider: "html5",
        layout: "default",
        allowed_domains: !1,
        seed: "||_PUT_ENCRYPTION_KEY_||",
        language: {
            current: null,
            fallback: "en",
            available: {
                default: "default",
                en: "English",
                es: "Español",
                uk: "Українська",
                ru: "Русский"
            }
        },
        triton: {
            sync_banners: [],
            station_id: null,
            gdpr_cookie_name: "pbsconsent"
        },
        theme: {
            primary_color: "#941AA1",
            secondary_color: "#FF365D",
            thumb_color: "#b14f90"
        },
        font: !1,
        logo: {
            img: "https://cdn.mowplayer.com/assets/images/logo-white.png",
            red_img: "https://cdn.mowplayer.com/assets/cdn2023/mow-logo.png",
            url: "https://mowplayer.com",
            mowplay: !1
        },
        menu: {
            logo: "https://cdn.mowplayer.com/assets/cdn2023/mow-logo.png",
            url: "https://mowplayer.com"
        },
        ads: {
            gap: 5,
            priorityTime: 5,
            pre_roll_check_priority: !1,
            language: "auto",
            checkPriority: !1,
            fallback: !0,
            strict_waterfall: !1,
            forceSkipable: !1,
            forceSkipTime: 5,
            forceARSkip: 0,
            currentAdRequiredForceSkip: !1,
            out_stream: {
                mobile: {},
                desktop: {}
            }
        },
        about: {
            label: "mowplayer",
            link: "https://mowplayer.com"
        },
        visibility: {
            breakpoint: .5,
            pause: !0,
            autoplay: !1
        },
        sticky: {
            enabled: !1,
            pause: !1,
            breakpoint: .5,
            position: "bottom_right",
            margin: 15
        },
        autoplay_related: {
            enabled: !0,
            related_timeout: 4,
            timeout: 6
        },
        related: !1,
        sharing: !1,
        tracking: {
            throttle: 3e3,
            readyDelay: 2e3,
            beacon_enabled: !0,
            url: null,
            events: null,
            ignoreEvents: []
        },
        shortcuts: {
            enabled: !0,
            global: !1
        },
        fullscreen: {
            enabled: !0,
            fallback: !0,
            iosNative: !0
        },
        i18n: {
            en: {
                play: "Play",
                replay: "Replay",
                pause: "Pause",
                seekLabel: "{currentTime} of {duration}",
                buffered: "Buffered",
                mute: "Mute",
                unmute: "Unmute",
                enterFullscreen: "Fullscreen",
                exitFullscreen: "Exit fullscreen",
                next: "Next",
                previous: "Previous",
                copy_video_url: "Copy video url",
                toggle_play: "Play / Pause",
                toggle_mute: "Mute / Unmute",
                report_a_problem: "Report a problem",
                mowplayer: "Mow Player",
                share_screen_title: "Share this video",
                share_screen_title_audio: "Share this audio",
                open_url: "Open link",
                copy: "Copy",
                copied: "Copied",
                language: "Language",
                default: "Default",
                back: "Back",
                live: "Live",
                seekBackward: "Rewind 10s",
                seekForward: "Forward 10s",
                shuffle: "Shuffle",
                shuffle_off: "Turn off shuffle",
                maximize: "Maximize",
                collapse: "Minimize",
                playlist: "Playlist",
                settings: "Settings",
                close: "Close",
                overlay: "The minimum size for appropriate reproduction is 305px",
                program: "Program",
                share: "Share",
                advertisement: "Advertisement",
                media_error: "Error loading media",
                stop: "Stop",
                full_video_link: "Full Video",
                video_article_label: "Related Videos",
                no_media_error: "No audio/video configured in the player.",
                audio_reader_text: "Listen Article"
            },
            es: {
                play: "Reproducir",
                replay: "Repetición",
                pause: "Pausar",
                seekLabel: "{currentTime} de {duration}",
                buffered: "Buffered",
                mute: "Silenciar",
                unmute: "Activar sonido",
                enterFullscreen: "Pantalla completa",
                exitFullscreen: "Salir de pantalla completa",
                next: "Siguiente",
                previous: "Anterior",
                copy_video_url: "Copiar la url del video",
                toggle_play: "Reproducir / Pausar",
                toggle_mute: "Silenciar / Activar sonido",
                report_a_problem: "Reportar un problema",
                mowplayer: "Mow Player",
                share_screen_title: "Comparte este video",
                share_screen_title_audio: "Comparte este audio",
                open_url: "Abrir enlace",
                copy: "Copiar",
                copied: "Copiado",
                language: "Idioma",
                default: "Default",
                back: "Atras",
                live: "Vivo",
                seekBackward: "Atrasar 10s",
                seekForward: "Adelantar 10s",
                shuffle: "Aleatorio",
                shuffle_off: "Apagar Aleatorio",
                maximize: "Maximizar",
                collapse: "Minimizar",
                playlist: "Playlist",
                settings: "Opciones",
                close: "Close",
                overlay: "El tamaño mínimo para una reproducción apropiada es de 305px.",
                program: "Programación",
                share: "Compartir",
                advertisement: "Anuncio",
                media_error: "Error al cargar el medio",
                stop: "Detener",
                full_video_link: "Full Video",
                video_article_label: "Video Relacionados",
                no_media_error: "No audio/video configured in the player.",
                audio_reader_text: "Escuchar Articulo"
            },
            ru: {
                play: "Проиграть",
                replay: "Сначала",
                pause: "Остановить",
                seekLabel: "{currentTime} из {duration}",
                buffered: "Буффер",
                mute: "Выключить звук",
                unmute: "Включить звук",
                enterFullscreen: "Во весь экран",
                exitFullscreen: "Выйти с полноэкранного режима",
                next: "Следующий",
                previous: "Предыдущий",
                copy_video_url: "Копировать видео ссылку",
                toggle_play: "Проиграть / Остановить",
                toggle_mute: "Выключить / Включить звук",
                report_a_problem: "Сообщить о проблеме",
                mowplayer: "Mow плеер",
                share_screen_title: "Поделиться этим видео",
                share_screen_title_audio: "Поделиться этим аудио",
                open_url: "Открыть ссылку",
                copy: "Копировать",
                copied: "Скопировано",
                language: "Язык",
                default: "По умолчанию",
                back: "Назад",
                live: "В Эфире",
                seekBackward: "Назад на 10с",
                seekForward: "Вперед на 10с",
                shuffle: "Случайный порядок",
                shuffle_off: "По порядку",
                maximize: "Развернуть",
                collapse: "Свернуть",
                playlist: "Плейлист",
                settings: "Настройки",
                close: "Закрыть",
                overlay: "Минимальный размер для корректного воспроизведения составляет 305 пикселей",
                program: "Програма",
                share: "Поделиться",
                advertisement: "Реклама",
                media_error: "Ошибка загрузки медиа",
                stop: "Остановить",
                full_video_link: "Full Video",
                video_article_label: "Related Videos",
                no_media_error: "No audio/video configured in the player.",
                audio_reader_text: "Listen Article"
            },
            uk: {
                play: "Відтворити",
                replay: "Спочатку",
                pause: "Зупинити",
                seekLabel: "{currentTime} з {duration}",
                buffered: "Буферизація",
                mute: "Вимкнути звук",
                unmute: "Увімкнути звук",
                enterFullscreen: "Повноекранний режим",
                exitFullscreen: "Вийти з повноекранного режиму",
                next: "Наступний",
                previous: "Попередній",
                copy_video_url: "Копіювати відео посилання",
                toggle_play: "Відтворити / Зупинити",
                toggle_mute: "Вимкнути / Увімкнути звук",
                report_a_problem: "Повідомити про помилку",
                mowplayer: "Mow плеєр",
                share_screen_title: "Поділитися цим відео",
                share_screen_title_audio: "Поділитися цим аудіо",
                open_url: "Відкрити посилання",
                copy: "Копіювати",
                copied: "Скопійовано",
                language: "Мова",
                default: "За замовчуванням",
                back: "Назад",
                live: "Пряма трансляція",
                seekBackward: "Назад на 10с",
                seekForward: "Вперед на 10с",
                shuffle: "Випадковий порядок",
                shuffle_off: "По порядку",
                maximize: "Розгорнути",
                collapse: "Згорнути",
                playlist: "Плейліст",
                settings: "Налаштування",
                close: "Закрити",
                overlay: "Мінімальний розмір для успішного відтворення - 305 пікселів",
                program: "Програма",
                share: "Поділитися",
                advertisement: "Реклама",
                media_error: "Помилка завантаження медіа",
                stop: "Зупинити",
                full_video_link: "Full Video",
                video_article_label: "Related Videos",
                no_media_error: "No audio/video configured in the player.",
                audio_reader_text: "Listen Article"
            }
        },
        urls: {
            hls: "https://cdn.jsdelivr.net/hls.js/latest/hls.js",
            triton: "https://sdk.listenlive.co/web/2.9/td-sdk.min.js",
            ad_priority: "https://api.mowplayer.com/media/marketplace",
            tts: "https://tts.mowplayer.com/tts/media/text-to-speech"
        },
        events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "durationchange", "webkitfullscreenchange", "enterfullscreen", "exitfullscreen", "controlshidden", "controlsshown", "play_requested", "track_changed", "seek_updated", "layout_change", "layout_changed", "ui_updated", "track_info", "ready", "resize", "iframe_module_ready", "sticky_state_update", "sticky_disable", "adserror", "adsprogress", "adsrequested", "adsloaded", "adsimpression", "adsplay", "adspause", "adsresume", "adscomplete", "adspauserequested", "postroll_ended"],
        classNames: {
            root: "mow",
            container: "mow-player-container",
            type: "mow-type_{0}",
            provider: "mow-provider_{0}",
            video: "mow__video-wrapper",
            embed: "mow__video-embed",
            overlay: "mow__overlay-error",
            loader: "mow__loader",
            embedContainer: "mow__video-embed__container",
            poster: "mow__poster",
            posterEnabled: "mow__poster-enabled",
            layoutWrapper: "mow__layout",
            responsiveWrapper: "mow__responsive-wrapper",
            holder: "mow__holder",
            control: "mow__control",
            logo: "mow__logo",
            liveBadge: "mow__live-badge",
            logoPlaceholder: "mow__logo-placeholder",
            mediaWrapper: "mow__media-wrapper",
            title: "mow__title",
            title_hidden: "mow__title-hidden",
            spacer: "mow__spacer",
            controlPressed: "mow__control-pressed",
            playing: "mow-playing",
            paused: "mow-paused",
            stopped: "mow-stopped",
            loading: "mow-loading",
            hover: "mow-hover",
            tooltip: "mow__tooltip",
            isLive: "mow-is_live",
            hidden: "mow__sr-only",
            hideControls: "mow-hide-controls",
            isIos: "mow-is_ios",
            isAndroid: "mow-is_android",
            isMobile: "mow-is_mobile",
            isIE: "mow-is_ie",
            waitPlay: "mow-wait_play",
            requestPlay: "mow-request_play",
            showPlayPause: "mow-show-play-pause-button",
            sticky: "mow-sticky_enabled",
            stickyPlaceholder: "mow__sticky-placeholder",
            uiSupported: "mow-ui_enabled",
            audioSticky: "mow-type_audio-sticky",
            noTransition: "mow-no_transition",
            theme: "mow__theme_{0}",
            unstick_enabled: "mow-unstick-enabled",
            helper: {
                hidden: "mow-display_none"
            },
            ads: {
                layer: "mow__ad-{0}",
                loading: "mow-ads_loading",
                playing: "mow-ads_playing",
                visible: "mow-ads_visible",
                linear: "mow-ads_linear",
                active: "mow-ads_active",
                full_slot: "mow__ad-fullslot"
            },
            related: {
                state: "mow__related-videos-shown",
                autoplay: "mow__related-videos-autoplay-related",
                autoplay_container: "mow__related-videos-autoplay_container",
                autoplay_button_wrapper: "mow__related-videos-autoplay__button-wrapper",
                autoplay_button_inner_wrapper: "mow__related-videos-autoplay__button-inner-wrapper",
                autoplay_wrapper_up: "mow__related-videos-autoplay__wrapper-up",
                autoplay_wrapper_down: "mow__related-videos-autoplay__wrapper-down",
                autoplay_next_title: "mow__related-videos-autoplay__next-title",
                autoplay_media_title: "mow__related-videos-autoplay__media-title",
                autoplay_cancel_title: "mow__related-videos-autoplay__cancel-title",
                container: "mow__related-videos",
                items_wrapper: "mow__related-items-wrapper",
                item: "mow__related-item",
                image_wrapper: "mow__related-item-image_wrapper"
            },
            playlist: {
                container: "mow__playlist",
                title_wrapper: "mow__playlist-title-wrapper",
                title: "mow__playlist-title",
                badge: "mow__playlist-badge",
                item: "mow__playlist-item",
                item_number: "mow__playlist-item-number",
                item_active: "mow__playlist-item_active",
                item_thumbnail: "mow__playlist-item-thumbnail",
                item_image_wrapper: "mow__playlist-item-thumbnail-image-wrapper",
                item_duration_wrapper: "mow__playlist-item-duration-wrapper",
                item_duration: "mow__playlist-item-duration",
                item_title: "mow__playlist-item-title",
                item_description: "mow__playlist-item-description",
                item_text: "mow__playlist-item-text",
                item_wrapper: "mow__playlist-item-wrapper",
                wrapper: "mow__playlist-wrapper",
                position: "mow__playlist_position_{0}",
                layout: "mow__playlist_layout_{0}",
                theme: "mow__playlist_theme_{0}",
                type: "mow__playlist_type_{0}",
                video_article_controls: "mow__playlist-video_article_controls"
            },
            controls: {
                wrapper: "mow__controls",
                progress_wrapper: "mow__progress",
                volume_wrapper: "mow__volume",
                mute: "mow__mute",
                share: "mow__share",
                share_hidden: "mow__share-hidden",
                fullscreen: "mow__fullscreen",
                play: "mow__play",
                next: "mow__next-track",
                prev: "mow__prev-track",
                native_url: "mow__native-url",
                replay: "mow__replay",
                unstick: "mow__unstick"
            },
            share_screen: {
                container: "mow__share-screen",
                share_wrapper: "mow__share-screen-wrapper",
                buttons_wrapper: "mow__share-screen-buttons",
                buttons_wrapper_inner: "mow__share-screen-buttons-inner",
                copy_wrapper: "mow__share-screen-copy-wrapper",
                middle_wrapper: "mow__share-screen-middle-wrapper",
                copy_text: "mow__share-screen-copy-text",
                title: "mow__share-screen-title",
                icon: "mow__share-screen-icon-{0}",
                active: "mow__share-screen_active"
            },
            display: {
                time: "mow__time",
                buffer: "mow__progress__buffer"
            },
            fullscreen: {
                fallback: "mow-fullscreen_fallback",
                active: "mow-fullscreen_active"
            },
            menu: {
                container: "mow__contextmenu",
                active: "mow__contextmenu_active",
                logo: "mow__contextmenu-logo",
                item: "mow__contextmenu-item",
                language: "mow__contextmenu-item-language",
                share: "mow__contextmenu-item-share",
                language_close: "mow__contextmenu-item-close-language",
                share_select: "mow__contextmenu-select-share",
                share_close: "mow__contextmenu-item-close-share",
                language_select: "mow__contextmenu-select-language",
                language_current: "mow__contextmenu-current-language"
            },
            tabFocus: "mow__tab-focus"
        },
        css: !1
    }
      , MediaPlayer = function() {
        function t(e) {
            _classCallCheck(this, t),
            this.$t = e,
            this.on("error", function(t) {
                console.log("Error - media player", t)
            })
        }
        return _createClass(t, [{
            key: "setSrc",
            value: function(t) {
                this.$t.src = t,
                this.load()
            }
        }, {
            key: "load",
            value: function() {
                this.$t.load()
            }
        }, {
            key: "playWhenIsReady",
            value: function() {
                var t = this
                  , e = 0;
                !function i() {
                    setTimeout(function() {
                        if (t.$t.readyState !== HTMLMediaElement.HAVE_ENOUGH_DATA)
                            return e < 5e3 ? (e += 1,
                            i()) : void t.fire("errorloadsrc");
                        t.play()
                    }, 10)
                }()
            }
        }, {
            key: "play",
            value: function() {
                this.$t.readyState === HTMLMediaElement.HAVE_ENOUGH_DATA ? this.$t.play() : this.fire("errorloadsrc")
            }
        }, {
            key: "pause",
            value: function() {
                this.$t.pause()
            }
        }, {
            key: "volumeUp",
            value: function() {
                Math.round(100 * (this.$t.volume + Number.EPSILON)) / 100 < 1 && (this.$t.volume += .1)
            }
        }, {
            key: "volumeDown",
            value: function() {
                Math.round(100 * (this.$t.volume + Number.EPSILON)) / 100 > 0 && (this.$t.volume -= .1)
            }
        }, {
            key: "setVolume",
            value: function(t) {
                t < 0 || t > 1 || (this.$t.volume = t)
            }
        }, {
            key: "getVolume",
            value: function() {
                return this.$t.volume
            }
        }, {
            key: "size",
            value: function() {
                return {
                    width: this.$t.clientWidth,
                    height: this.$t.clientHeight
                }
            }
        }, {
            key: "duration",
            value: function() {
                return this.$t.duration
            }
        }, {
            key: "currentTime",
            value: function() {
                return this.$t.currentTime
            }
        }, {
            key: "on",
            value: function(t, e) {
                this.$t.addEventListener(t, e)
            }
        }, {
            key: "fire",
            value: function(t) {
                var e = new Event(t);
                this.$t.dispatchEvent(e)
            }
        }]),
        t
    }()
      , IASummaryIMA = function() {
        function t(e, i, n, o) {
            var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            _classCallCheck(this, t),
            this.Qt = e,
            this.rt = i,
            this.Lt = n,
            this.X = o,
            this.zt = null,
            this.qt = null,
            this.Ut = null,
            this.Ht,
            this.Wt,
            this.Kt = null,
            this.Jt = 1,
            this.Yt = "",
            this.Xt = 0,
            this.Zt = 0;
            this.te = deepMerge({
                start: null,
                complete: null,
                allComplete: null,
                loaded: null,
                progress: null,
                pauseRequested: null,
                resumeRequested: null,
                noPreAd: null,
                noPostAd: null
            }, r)
        }
        return _createClass(t, [{
            key: "start",
            value: function() {
                google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED),
                this.createAdDisplayContainer(),
                this.createLoader(),
                this.appendEndedListener()
            }
        }, {
            key: "appendEndedListener",
            value: function() {
                var t = this
                  , e = this;
                this.Lt.on("ended", function() {
                    if (!e.Ht) {
                        e.Wt = !0,
                        e.Ut.contentComplete(),
                        t.Lt.load(),
                        t.zt.initialize();
                        var i = t.getCurrentPostAd();
                        null === i ? t.trigger("noPostAd") : t.createRequest(i)
                    }
                })
            }
        }, {
            key: "createLoader",
            value: function() {
                this.Ut = new google.ima.AdsLoader(this.zt),
                this.Ut.getSettings().setPlayerType("mowplayer"),
                this.Ut.getSettings().setPlayerVersion("1.0.0"),
                this.Ut.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.onAdsManagerLoaded.bind(this), !1),
                this.Ut.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError.bind(this), !1)
            }
        }, {
            key: "createAdDisplayContainer",
            value: function() {
                this.zt = new google.ima.AdDisplayContainer(this.rt,this.Qt)
            }
        }, {
            key: "callAd",
            value: function() {
                try {
                    var t = this.Lt.size();
                    this.qt.init(t.width, t.height, google.ima.ViewMode.NORMAL),
                    this.qt.start()
                } catch (t) {
                    console.log("Error - callAd", t),
                    this.Lt.playWhenIsReady()
                }
            }
        }, {
            key: "playAds",
            value: function() {
                if (!this.Ht) {
                    this.Lt.load();
                    var t = this.getCurrentPreAd();
                    if (null === t)
                        return this.trigger("noPreAd"),
                        void this.Lt.playWhenIsReady();
                    this.createRequest(t),
                    this.zt.initialize()
                }
            }
        }, {
            key: "skip",
            value: function() {
                this.qt.stop()
            }
        }, {
            key: "setVolume",
            value: function(t) {
                t < 0 || t > 1 || (this.Jt = t,
                null !== this.qt && this.qt.setVolume(this.Jt))
            }
        }, {
            key: "createRequest",
            value: function(t) {
                if (null !== t) {
                    var e = this.Lt.duration()
                      , i = this.Lt.size();
                    this.Kt = new google.ima.AdsRequest;
                    var n = t.url;
                    n = n.replace("description_url=[placeholder]", "description_url=" + +encodeURIComponent(this.refererUrl())),
                    n += "&cmsid=2617740",
                    n += "&vid=".concat(this.getRandomIntInclusive(0, Number.MAX_SAFE_INTEGER)),
                    n += "&plcmt=1",
                    this.Kt.adTagUrl = n,
                    this.Kt.linearAdSlotWidth = i.width,
                    this.Kt.linearAdSlotHeight = i.height,
                    this.Kt.nonLinearAdSlotWidth = 640,
                    this.Kt.nonLinearAdSlotHeight = 150,
                    this.Kt.setAdWillPlayMuted(0),
                    this.Kt.setContinuousPlayback(0),
                    this.Kt.setAdWillAutoPlay(0),
                    null !== e && (this.Kt.contentDuration = parseInt(e)),
                    this.Ut.requestAds(this.Kt)
                }
            }
        }, {
            key: "onAdEvent",
            value: function(t) {
                var e = t.getAd();
                switch (t.type) {
                case google.ima.AdEvent.Type.LOADED:
                    this.trigger("loaded"),
                    e.isLinear() || this.Lt.playWhenIsReady();
                    break;
                case google.ima.AdEvent.Type.STARTED:
                    this.trigger("start", e),
                    e.isLinear();
                    break;
                case google.ima.AdEvent.Type.COMPLETE:
                    e.isLinear() && this.trigger("complete", {
                        currentAd: this.Yt
                    });
                    break;
                case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                    this.trigger("allComplete", {
                        currentAd: this.Yt
                    });
                    break;
                default:
                    console.log("ERROR: adEvent.type", t.type)
                }
            }
        }, {
            key: "onContentResumeRequested",
            value: function(t) {
                this.Ht = !1,
                this.Wt || this.Lt.playWhenIsReady(),
                this.trigger("resumeRequested", {
                    currentAd: this.Yt
                })
            }
        }, {
            key: "onContentPauseRequested",
            value: function(t) {
                this.Ht = !0,
                this.Lt.pause(),
                this.trigger("pauseRequested", t.getAd())
            }
        }, {
            key: "onAdsManagerLoaded",
            value: function(t) {
                var e = this
                  , i = new google.ima.AdsRenderingSettings;
                i.restoreCustomPlaybackStateOnAdBreakComplete = !0,
                i.enablePreloading = !0,
                i.autoAlign = !0,
                i.useStyledNonLinearAds = !0,
                i.AUTO_SCALE = !0,
                i.useStyledLinearAds = !0,
                this.qt = t.getAdsManager(this.Qt, i),
                this.setVolume(this.Jt),
                this.qt.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError.bind(this)),
                this.qt.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, this.onContentPauseRequested.bind(this)),
                this.qt.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, this.onContentResumeRequested.bind(this)),
                this.qt.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, this.onAdEvent.bind(this)),
                this.qt.addEventListener(google.ima.AdEvent.Type.LOADED, this.onAdEvent.bind(this)),
                this.qt.addEventListener(google.ima.AdEvent.Type.STARTED, this.onAdEvent.bind(this)),
                this.qt.addEventListener(google.ima.AdEvent.Type.COMPLETE, this.onAdEvent.bind(this)),
                this.qt.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, function() {}),
                this.qt.addEventListener(google.ima.AdEvent.Type.IMPRESSION, function() {}),
                this.qt.addEventListener(google.ima.AdEvent.Type.PAUSED, function() {}),
                this.qt.addEventListener(google.ima.AdEvent.Type.RESUMED, function() {}),
                this.qt.addEventListener(google.ima.AdEvent.Type.CLICK, function() {}),
                this.qt.addEventListener(google.ima.AdEvent.Type.AD_PROGRESS, function() {
                    e.trigger("progress", e.qt.getRemainingTime())
                }),
                this.qt.addEventListener(google.ima.AdEvent.Type.SKIPPED, function() {}),
                this.callAd()
            }
        }, {
            key: "onAdError",
            value: function(t) {
                var e = this.isPre() ? this.getNextPreAd() : this.getNextPostAd();
                if (e)
                    this.createRequest(e);
                else {
                    if (this.isPre())
                        return this.trigger("noPreAd"),
                        void this.Lt.playWhenIsReady();
                    this.trigger("noPostAd"),
                    null !== this.qt && this.qt.destroy()
                }
            }
        }, {
            key: "trigger",
            value: function(t, e) {
                void 0 !== this.te[t] && null !== this.te[t] && this.te[t](e)
            }
        }, {
            key: "isPre",
            value: function() {
                return "pre" === this.Yt
            }
        }, {
            key: "isPost",
            value: function() {
                return "post" === this.Yt
            }
        }, {
            key: "getCurrentPreAd",
            value: function() {
                return this.Yt = "pre",
                this.X.pre && void 0 !== this.X.pre[this.Xt] ? this.X.pre[this.Xt] : null
            }
        }, {
            key: "getNextPreAd",
            value: function() {
                return this.Xt++,
                this.getCurrentPreAd()
            }
        }, {
            key: "getCurrentPostAd",
            value: function() {
                return this.Yt = "post",
                this.X.post && void 0 !== this.X.post[this.Zt] ? this.X.post[this.Zt] : null
            }
        }, {
            key: "getNextPostAd",
            value: function() {
                return this.Zt++,
                this.getCurrentPostAd()
            }
        }, {
            key: "refererUrl",
            value: function() {
                var t = function() {
                    var t = window;
                    try {
                        for (; t.parent.document !== t.document && t.parent.document; )
                            t = t.parent
                    } catch (t) {}
                    return t
                }()
                  , e = window.location.href;
                return this.isIframe() && document.referrer && ((e = t.document.referrer) || (e = t.document.location.href)),
                e
            }
        }, {
            key: "isIframe",
            value: function() {
                try {
                    return globals.t.self !== globals.t.top
                } catch (t) {
                    return !0
                }
            }
        }, {
            key: "getRandomIntInclusive",
            value: function(t, e) {
                var i = Math.ceil(t)
                  , n = Math.floor(e);
                return Math.floor(Math.random() * (n - i + 1) + i)
            }
        }, {
            key: "deepMerge",
            value: function(t, e) {
                for (var i in e)
                    e.hasOwnProperty(i) && (e[i]instanceof Object && t[i]instanceof Object ? t[i] = this.deepMerge(t[i], e[i]) : t[i] = e[i]);
                return t
            }
        }]),
        t
    }()
      , IASummaryAudio = function() {
        function t(e, i, n, o) {
            _classCallCheck(this, t);
            this.ee = deepMerge({
                mediaElementId: "",
                adContainerId: "",
                buttons: {
                    play: "",
                    pause: "",
                    volumeUp: "",
                    volumeDown: "",
                    skipAd: "",
                    ad: ""
                },
                labels: {
                    duration: "",
                    currentTime: "",
                    adTimeRemaining: ""
                },
                ads: {
                    pre: null,
                    post: null
                },
                skip: {
                    enabled: !0,
                    delay: 5e3,
                    force: !0
                },
                enabled: !0,
                openSummaryOnPlay: !1,
                updateCache: null
            }, o),
            this.ie = e,
            this.ne = i,
            this.oe = n,
            this.Lt = null,
            this.re = null,
            this.se = !1,
            this.ae = null,
            this.Qt = null,
            this.rt = null,
            this.le = !1
        }
        return _createClass(t, [{
            key: "start",
            value: function() {
                !0 === this.ee.enabled && (this.Qt = document.getElementById(this.ee.mediaElementId),
                this.rt = document.getElementById(this.ee.adContainerId),
                null !== this.Qt && null !== this.rt ? loadJs(defaults$1.urls.ima, "ima").then(this.run.bind(this)) : console.log("Error - mediaElement or adContainerElement is null"))
            }
        }, {
            key: "run",
            value: function() {
                var t = this;
                this.Lt = new MediaPlayer(this.Qt),
                this.Lt.on("errorloadsrc", function() {
                    t.le = !1,
                    t.ie.hideAudioHeader(),
                    t.ie.showAudioHeaderError()
                }),
                this.ae && this.ae.summary.audio.link && (this.Lt.setSrc(this.ae.summary.audio.link),
                this.Lt.load(),
                this.Lt.on("loadedmetadata", function() {
                    t.ie.changeAudioDuration(t.Lt.duration())
                })),
                this.re = new IASummaryIMA(this.Qt,this.rt,this.Lt,this.ee.ads,{
                    loaded: function() {},
                    start: function() {},
                    complete: function() {},
                    allComplete: function() {},
                    progress: this.onProgress.bind(this),
                    pauseRequested: this.onPauseRequested.bind(this),
                    resumeRequested: this.onResumeRequested.bind(this),
                    noPreAd: this.onNoPreAd.bind(this),
                    noPostAd: this.onNoPostAd.bind(this)
                }),
                this.re.start(),
                this.appendButtonActions()
            }
        }, {
            key: "setCache",
            value: function(t) {
                this.ae = t
            }
        }, {
            key: "showCurrentTime",
            value: function() {
                var t = this;
                this.Lt.on("timeupdate", function() {
                    var e = t.Lt.duration() - t.Lt.currentTime();
                    t.ie.changeAudioDuration(e)
                })
            }
        }, {
            key: "showDuration",
            value: function() {
                this.ie.changeAudioDuration(this.Lt.duration())
            }
        }, {
            key: "onResumeRequested",
            value: function(t) {
                this.ie.hideSkipAdButton(),
                this.ie.hideAdLabel(),
                "pre" === t.currentAd ? this.ie.showPauseButton() : "post" === t.currentAd && (this.le = !1,
                this.ie.showPlayButton())
            }
        }, {
            key: "onPauseRequested",
            value: function(t) {
                this.ie.hideAudioLoader(),
                this.ie.hidePlayButton(),
                this.ie.hidePauseButton(),
                this.ie.showAdLabel(),
                this.showSkip(t)
            }
        }, {
            key: "onProgress",
            value: function(t) {
                this.showCountdownAd(t)
            }
        }, {
            key: "onNoPreAd",
            value: function() {
                this.ie.hideAudioLoader(),
                this.ie.hidePlayButton(),
                this.ie.showPauseButton()
            }
        }, {
            key: "onNoPostAd",
            value: function() {
                this.le = !1,
                this.ie.hidePauseButton(),
                this.ie.showPlayButton()
            }
        }, {
            key: "appendButtonActions",
            value: function() {
                this.addPlayListener(),
                this.addPauseListener(),
                this.addSkipAdListener()
            }
        }, {
            key: "addSkipAdListener",
            value: function() {
                var t = this
                  , e = document.getElementById(this.ee.buttons.skipAd);
                null !== e ? e.addEventListener("click", function(e) {
                    e.stopPropagation(),
                    t.skip()
                }) : console.log("Error - skip button not found")
            }
        }, {
            key: "addPauseListener",
            value: function() {
                var t = this
                  , e = document.getElementById(this.ee.buttons.pause);
                null !== e ? e.addEventListener("click", function(e) {
                    e.stopPropagation(),
                    t.pause()
                }) : console.log("Error - pause button not found")
            }
        }, {
            key: "addPlayListener",
            value: function() {
                var t = this;
                this.ee.buttons.play.split(",").forEach(function(e) {
                    var i = document.getElementById(e);
                    null !== i ? i.addEventListener("click", function(e) {
                        e.stopPropagation(),
                        t.play()
                    }) : console.log("Error - play button not found")
                })
            }
        }, {
            key: "showSkip",
            value: function(t) {
                var e = this;
                if (!1 !== this.ee.skip.enabled && (!1 !== this.ee.skip.force || !(!1 === t.isSkippable() || t.getSkipTimeOffset() < 0))) {
                    var i = this.ee.skip.force ? 0 : 1e3 * t.getSkipTimeOffset()
                      , n = i > this.ee.skip.delay ? i : this.ee.skip.delay;
                    setTimeout(function() {
                        e.ie.hideAdLabel(),
                        e.ie.showSkipAdButton()
                    }, n)
                }
            }
        }, {
            key: "showCountdownAd",
            value: function(t) {
                var e = document.getElementById(this.ee.labels.adTimeRemaining);
                if (null === e)
                    return null;
                this.ie.hideAudioTime(),
                this.ie.showAdRemaining(),
                e.textContent = "AD: ".concat(parseInt(t)),
                parseInt(t) <= 0 && (this.ie.hideAdRemaining(),
                this.ie.showAudioTime())
            }
        }, {
            key: "skip",
            value: function() {
                this.re.skip(),
                this.ie.hideAdLabel(),
                this.ie.hideAdRemaining(),
                this.ie.showAudioTime(),
                this.re.isPost() ? this.ie.showPlayButton() : this.re.isPre() && this.ie.showPauseButton()
            }
        }, {
            key: "pause",
            value: function() {
                this.le = !1,
                this.Lt.pause(),
                this.ie.hidePauseButton(),
                this.ie.showPlayButton()
            }
        }, {
            key: "play",
            value: function() {
                this.se ? this.playDirect() : this.playWithAd()
            }
        }, {
            key: "playDirect",
            value: function() {
                this.le || (this.le = !0,
                this.Lt.playWhenIsReady(),
                this.ie.hidePlayButton(),
                this.ie.showPauseButton())
            }
        }, {
            key: "playWithAd",
            value: function() {
                var t = this;
                if (!this.le) {
                    this.le = !0,
                    this.se = !0,
                    this.ie.disableAllButtons(),
                    this.ie.hidePlayButton(),
                    this.ie.showAudioLoader();
                    var e = function(e) {
                        t.ae = e,
                        t.ee.updateCache && t.ee.updateCache(e),
                        t.ee.openSummaryOnPlay && t.ee.openSummaryOnPlay(),
                        t.ie.enableAllButtons(),
                        t.Lt.setSrc(t.ae.summary.audio.link),
                        t.Lt.load(),
                        t.re.playAds(),
                        t.Lt.on("error", function(t) {
                            console.log("Error - media player", t)
                        });
                        t.Lt.on("loadedmetadata", function() {
                            t.showDuration(),
                            t.showCurrentTime()
                        }
                        .bind(t))
                    };
                    this.ae && this.ae.summary.audio.link ? (this.ne.statics(),
                    e(this.ae)) : this.ne.createAudio(this.oe.getBody(), this.oe.getTitle(), e)
                }
            }
        }]),
        t
    }()
      , IASummaryContent = function() {
        function t(e, i, n) {
            _classCallCheck(this, t),
            this.ce = e,
            this.ue = i,
            this.he = n,
            this.de = null,
            this.pe = null
        }
        return _createClass(t, [{
            key: "getBody",
            value: function() {
               
            }
        }, {
            key: "getTitle",
            value: function() {
                return this.pe ? this.pe : (this.pe = this.getContent(this.ce),
                this.pe)
            }
        }, {
            key: "getContent",
            value: function(t, e) {
                var i = searchElement(t);
                if (null === i)
                    return "";
                var n, o = new DOMParser, r = i.innerHTML.replace(/<([A-z]+)([^>^/]*)>\s*<\/\1>/gim, "").replace(/<figure[\s\S]*?>[\s\S]*?<\/figure>/gi, "").replace(/<img[\s\S]*?\/?>/gi, "").replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, "").replaceAll(/([\t-\r \)0-9A-Za-z\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])<\/p>/gi, "$1.</p>").replace(/<br[\s\S]*?\/?>/gi, ""), s = o.parseFromString(r, "text/html"), a = _createForOfIteratorHelper(s.querySelectorAll(e));
                try {
                    for (a.s(); !(n = a.n()).done; ) {
                        n.value.remove()
                    }
                } catch (t) {
                    a.e(t)
                } finally {
                    a.f()
                }
                return s.body.textContent.replaceAll("\n", " ").replaceAll(/\s+/g, " ").trim()
            }
        }]),
        t
    }()
      , IASummarySummary = function() {
        function t(e, i, n, o) {
            _classCallCheck(this, t),
            this.ie = e,
            this.ne = i,
            this.oe = n;
            this.ee = deepMerge({
                buttons: {
                    open: "",
                    close: ""
                },
                enabled: !0,
                showTitle: !0,
                openOnLoad: !1
            }, o),
            this.me = !1,
            this.fe = !1,
            this.ae = null
        }
        return _createClass(t, [{
            key: "start",
            value: function() {
                !0 === this.ee.enabled && (this.addOpenListener(),
                this.addCloseListener(),
                this.ee.openOnLoad && this.open())
            }
        }, {
            key: "getWasOpened",
            value: function() {
                return this.fe
            }
        }, {
            key: "setCache",
            value: function(t) {
                this.ae = t
            }
        }, {
            key: "addOpenListener",
            value: function() {
                var t = this;
                this.ee.buttons.open.split(",").forEach(function(e) {
                    var i = document.getElementById(e);
                    i && i.addEventListener("click", function(e) {
                        e.stopPropagation(),
                        t.open()
                    })
                })
            }
        }, {
            key: "addCloseListener",
            value: function() {
                var t = this
                  , e = document.getElementById(this.ee.buttons.close);
                e && e.addEventListener("click", function(e) {
                    e.stopPropagation(),
                    t.close()
                })
            }
        }, {
            key: "close",
            value: function() {
                this.trigger("close"),
                this.me = !1,
                this.ie.hideBody(),
                this.ie.hideFooter(),
                this.ie.hideCloseButton(),
                this.ie.showOpenButton()
            }
        }, {
            key: "open",
            value: function() {
                var t = this;
                if (!this.me && (this.me = !0,
                this.ie.showBody(),
                this.ie.showFooter(),
                this.ie.hideOpenButton(),
                this.ie.showCloseButton(),
                this.trigger("open"),
                !this.fe)) {
                    this.fe = !0,
                    this.ie.showLoader();
                    var e = function(e) {
                        t.ae = e,
                        t.ie.enableAllButtons(),
                        t.ie.hideLoader(),
                        t.ie.changeReadingTime(e.summary.text.readingTime, calculateTimeToRead(t.oe.getBody())),
                        t.ie.changeSummaryPreviewTime(e.summary.text.readingTime),
                        !0 === t.ee.showTitle && (t.ie.changeTitle(e.summary.text.title),
                        t.ie.showTitle()),
                        t.ie.changeSummary(""),
                        t.ie.typewriterEfect(e.summary.text.text),
                        t.ie.renderImage()
                    };
                    this.ie.disableAllButtons(),
                    this.ae ? (this.ne.statics(),
                    e(this.ae)) : this.ne.createSummary(this.oe.getBody(), this.oe.getTitle(), e)
                }
            }
        }]),
        t
    }();
    function typewriterEfect(t, e) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
          , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 5;
        setTimeout(function() {
            t.textContent += e[i],
            ++i < e.length && typewriterEfect(t, e, i)
        }, n)
    }
    Object.assign(IASummarySummary.prototype, eventMixin);
    var IASummaryUI = function() {
        function t(e, i) {
            _classCallCheck(this, t),
            this.ge = e,
            this.ve = i,
            this.ye = {
                summaryPreviewTime: "mow-ia-summary-header-summary-preview-time",
                audioDuration: "mow-ia-summary-header-audio-duration",
                loader: "mow-ia-summary-body-loader",
                body: "mow-ia-summary-body",
                footer: "mow-ia-summary-footer",
                openButton: "mow-ia-summary-open-button",
                closeButton: "mow-ia-summary-close-button",
                playButton: "mow-ia-summary-audio-play",
                pauseButton: "mow-ia-summary-audio-pause",
                adButton: "mow-ia-summary-audio-ad",
                skipAdButton: "mow-ia-summary-audio-skip-ad",
                readingTime: "mow-ia-summary-body-read-time",
                readingTimeSummary: "mow-ia-summary-body-read-time-summary",
                readingTimeFull: "mow-ia-summary-body-read-time-full",
                title: "mow-ia-summary-body-title",
                text: "mow-ia-summary-body-text",
                textP: "mow-ia-summary-body-text-p",
                image: "mow-ia-summary-body-image",
                media: "mow-ia-summary-media",
                header: "mow-ia-summary-header",
                adRemaining: "mow-ia-summary-ad-remaining",
                audioTime: "mow-ia-summary-header-audio-time",
                audioHeader: "mow-ia-summary-header-audio",
                audioHeaderError: "mow-ia-summary-header-audio-error",
                innerFirstAd: "mow-ia-summary-body-inner-ad",
                innerMiddleAd: "mow-ia-summary-body-inner-middle-ad",
                innerLastAd: "mow-ia-summary-body-inner-last-ad",
                audioLoader: "mow-ia-summary-audio-loader"
            },
            this.ft = null,
            this.we = null,
            this.customStyles = {
                "mow-ia-summary-light": {
                    header_font_color: "#562B67",
                    body_font_color: "#1B1B1B"
                },
                "mow-ia-summary-dark": {
                    header_font_color: "#fff",
                    body_font_color: "#fff"
                },
                "mow-ia-summary-hybrid": {
                    header_font_color: "#fff",
                    body_font_color: "#1B1B1B"
                }
            }
        }
        return _createClass(t, [{
            key: "getIASummaryContainer",
            value: function() {
                return this.we
            }
        }, {
            key: "getInnerFirstAdContainer",
            value: function() {
                return document.getElementById(this.ye.innerFirstAd)
            }
        }, {
            key: "getInnerMiddleAdContainer",
            value: function() {
                return document.getElementById(this.ye.innerMiddleAd)
            }
        }, {
            key: "getInnerLastAdContainer",
            value: function() {
                return document.getElementById(this.ye.innerLastAd)
            }
        }, {
            key: "getFooterContainer",
            value: function() {
                return document.getElementById(this.ye.footer)
            }
        }, {
            key: "appendComponent",
            value: function(t, e) {
                appendElement(e, t, this.ft)
            }
        }, {
            key: "typewriterEfect",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                typewriterEfect(document.getElementById(this.ye.textP), t, e)
            }
        }, {
            key: "renderImage",
            value: function() {
                if (void 0 !== this.ge.show_main_image && !0 === this.ge.show_main_image) {
                    var t = document.querySelector('meta[name="twitter:image"]')
                      , e = document.querySelector('meta[property="og:image"]')
                      , i = null;
                    null !== t ? i = t.content : null !== e && (i = e.content),
                    i && (document.getElementById(this.ye.image).innerHTML = '<img src="'.concat(i, '" />'),
                    this.showImage())
                }
            }
        }, {
            key: "changeSummary",
            value: function(t) {
                var e = "font-size: ".concat(this.ge.summary_font_size, "px !important;line-height: ").concat(1.5 * this.ge.summary_font_size, "px !important;");
                document.getElementById(this.ye.text).innerHTML = '<p style="'.concat(e, '" id="').concat(this.ye.textP, '">').concat(t, "</p>"),
                this.showSummary()
            }
        }, {
            key: "changeSummaryPreviewTime",
            value: function(t) {
                var e = document.getElementById(this.ye.summaryPreviewTime);
                e && (e.textContent = humanizeFromDec(t))
            }
        }, {
            key: "changeAudioDuration",
            value: function(t) {
                var e = document.getElementById(this.ye.audioDuration);
                e && (e.textContent = secToTimer(t))
            }
        }, {
            key: "changeReadingTime",
            value: function(t, e) {
                document.getElementById(this.ye.readingTimeSummary).textContent = humanizeFromDec(t),
                document.getElementById(this.ye.readingTimeFull).textContent = humanizeFromDec(e),
                this.showReadingTime()
            }
        }, {
            key: "changeTitle",
            value: function(t) {
                var e = document.getElementById(this.ye.title);
                e && (e.innerHTML = t)
            }
        }, {
            key: "showLoader",
            value: function() {
                this.show(this.ye.loader)
            }
        }, {
            key: "hideLoader",
            value: function() {
                this.hide(this.ye.loader)
            }
        }, {
            key: "showBody",
            value: function() {
                this.show(this.ye.body)
            }
        }, {
            key: "hideBody",
            value: function() {
                this.hide(this.ye.body)
            }
        }, {
            key: "showFooter",
            value: function() {
                this.show(this.ye.footer)
            }
        }, {
            key: "hideFooter",
            value: function() {
                this.hide(this.ye.footer)
            }
        }, {
            key: "showOpenButton",
            value: function() {
                this.show(this.ye.openButton)
            }
        }, {
            key: "hideOpenButton",
            value: function() {
                this.hide(this.ye.openButton)
            }
        }, {
            key: "showCloseButton",
            value: function() {
                this.show(this.ye.closeButton)
            }
        }, {
            key: "hideCloseButton",
            value: function() {
                this.hide(this.ye.closeButton)
            }
        }, {
            key: "showReadingTime",
            value: function() {
                this.show(this.ye.readingTime)
            }
        }, {
            key: "hideReadingTime",
            value: function() {
                this.hide(this.ye.readingTime)
            }
        }, {
            key: "showTitle",
            value: function() {
                this.show(this.ye.title)
            }
        }, {
            key: "hideTitle",
            value: function() {
                this.hide(this.ye.title)
            }
        }, {
            key: "showSummary",
            value: function() {
                this.show(this.ye.text)
            }
        }, {
            key: "hideSummary",
            value: function() {
                this.hide(this.ye.text)
            }
        }, {
            key: "showImage",
            value: function() {
                this.show(this.ye.image)
            }
        }, {
            key: "hideImage",
            value: function() {
                this.hide(this.ye.image)
            }
        }, {
            key: "showPlayButton",
            value: function() {
                this.show(this.ye.playButton)
            }
        }, {
            key: "hidePlayButton",
            value: function() {
                this.hide(this.ye.playButton)
            }
        }, {
            key: "showPauseButton",
            value: function() {
                this.show(this.ye.pauseButton)
            }
        }, {
            key: "hidePauseButton",
            value: function() {
                this.hide(this.ye.pauseButton)
            }
        }, {
            key: "showAdRemaining",
            value: function() {
                this.show(this.ye.adRemaining)
            }
        }, {
            key: "hideAdRemaining",
            value: function() {
                this.hide(this.ye.adRemaining)
            }
        }, {
            key: "showAudioTime",
            value: function() {
                this.show(this.ye.audioTime)
            }
        }, {
            key: "hideAudioTime",
            value: function() {
                this.hide(this.ye.audioTime)
            }
        }, {
            key: "showSkipAdButton",
            value: function() {
                this.show(this.ye.skipAdButton)
            }
        }, {
            key: "hideSkipAdButton",
            value: function() {
                this.hide(this.ye.skipAdButton)
            }
        }, {
            key: "showAdLabel",
            value: function() {
                this.show(this.ye.adButton)
            }
        }, {
            key: "hideAdLabel",
            value: function() {
                this.hide(this.ye.adButton)
            }
        }, {
            key: "showAudioHeader",
            value: function() {
                this.show(this.ye.audioHeader)
            }
        }, {
            key: "hideAudioHeader",
            value: function() {
                this.hide(this.ye.audioHeader)
            }
        }, {
            key: "showAudioHeaderError",
            value: function() {
                this.show(this.ye.audioHeaderError)
            }
        }, {
            key: "hideAudioHeaderError",
            value: function() {
                this.hide(this.ye.audioHeaderError)
            }
        }, {
            key: "showInnerFirstAdContainer",
            value: function() {
                this.show(this.ye.innerFirstAd)
            }
        }, {
            key: "hideInnerFirstAdContainer",
            value: function() {
                this.hide(this.ye.innerFirstAd)
            }
        }, {
            key: "showInnerMiddleAdContainer",
            value: function() {
                this.show(this.ye.innerMiddleAd)
            }
        }, {
            key: "hideInnerMiddleAdContainer",
            value: function() {
                this.hide(this.ye.innerMiddleAd)
            }
        }, {
            key: "showInnerLastAdContainer",
            value: function() {
                this.show(this.ye.innerLastAd)
            }
        }, {
            key: "hideInnerLastAdContainer",
            value: function() {
                this.hide(this.ye.innerLastAd)
            }
        }, {
            key: "showAudioLoader",
            value: function() {
                this.show(this.ye.audioLoader)
            }
        }, {
            key: "hideAudioLoader",
            value: function() {
                this.hide(this.ye.audioLoader)
            }
        }, {
            key: "show",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "block"
                  , i = document.getElementById(t);
                i && (i.style.display = e)
            }
        }, {
            key: "hide",
            value: function(t) {
                var e = document.getElementById(t);
                e && (e.style.display = "none")
            }
        }, {
            key: "disableAllButtons",
            value: function() {
                var t = ".".concat(this.ye.header, " button");
                document.querySelectorAll(t).forEach(function(t) {
                    t.disabled = !0,
                    t.classList.add("mow-ia-summary-header-disabled")
                })
            }
        }, {
            key: "enableAllButtons",
            value: function() {
                var t = ".".concat(this.ye.header, " button");
                document.querySelectorAll(t).forEach(function(t) {
                    t.disabled = !1,
                    t.classList.remove("mow-ia-summary-header-disabled")
                })
            }
        }, {
            key: "createComponent",
            value: function(t) {
                this.ft = this.createMowContainer(t),
                this.we = this.createSummaryContainer(t),
                this.ft.appendChild(this.we)
            }
        }, {
            key: "createMowContainer",
            value: function(t) {
                var e = document.createElement("div");
                return e.id = generateId$1("mow-ia") + "-" + t,
                e.className = "mow-ia mow-ad",
                e
            }
        }, {
            key: "createSummaryContainer",
            value: function(t) {
                var e = document.createElement("div");
                return e.id = generateId$1("mow-ia-summary") + "-" + t,
                e.className = "mow-ia-summary ".concat(this.ge.theme),
                "" != this.ge.background_color && (e.style.cssText = "background-color: ".concat(this.ge.background_color, " !important;")),
                e.innerHTML = "\n            ".concat(this.createHeader(), "\n            ").concat(this.createBody(), "\n            ").concat(this.createFooter(), "\n        "),
                e
            }
        }, {
            key: "createHeader",
            value: function() {
                var t = this.ge.enable_audioreader && this.ge.enable_summary ? "mow-ia-summary-header-col" : "mow-ia-summary-header-col-full"
                  , e = this.ge.enable_audioreader && this.ge.enable_summary ? '<div class="mow-ia-summary-header-sep"><hr /></div>' : ""
                  , i = this.customStyles[this.ge.theme] ? "color: ".concat(this.customStyles[this.ge.theme].header_font_color, " !important;") : ""
                  , n = "font-size: ".concat(this.ge.header_font_size, "px !important;line-height: ").concat(this.ge.header_font_size + 2, "px !important;").concat(i)
                  , o = "font-size: ".concat(this.ge.header_font_size - 2, "px !important;").concat(i)
                  , r = ""
                  , s = "";
                if (this.ge.enable_summary) {
                    var a = this.createOpenButton()
                      , l = this.createCloseButton();
                    r = '\n                <div class="'.concat(t, '">\n                    <table>\n                        <tr class="mow-ia-summary-header-open-summary" id="mow-ia-summary-header-open-summary">\n                            <td style="').concat(n, '">\n                                ').concat(this.ge.title_summary, '\n                                <div class="mow-ia-summary-header-preview-time" style="').concat(o, '">\n                                    ').concat(this.ge.title_time_to_read, ': <span id="').concat(this.ye.summaryPreviewTime, '" style="').concat(o, '">\n                                </span></div>\n                            </td>\n                            <td class="mow-ia-summary-header-cta">\n                                ').concat(a, "\n                                ").concat(l, "\n                            </td>\n                        </tr>\n                    </table>\n                </div>\n            ")
                }
                if (this.ge.enable_audioreader) {
                    var c = this.createPlayButton()
                      , u = this.createPauseButton()
                      , h = this.createAdLabel()
                      , d = this.createSkipAdButton()
                      , p = this.createErrorIco()
                      , m = this.createAudioLoader();
                    s = '\n                <div class="'.concat(t, '">\n                    <audio id="mow-ia-summary-media" preload="metadata" playsinline></audio>\n                    <div id="mow-ia-summary-media-ad-container" style="display:none;"></div>\n                    <table>\n                        <tr class="mow-ia-summary-header-audio" id="').concat(this.ye.audioHeader, '">\n                            <td style="').concat(n, '">\n                                ').concat(this.ge.title_audio, '\n                                <div class="mow-ia-summary-header-preview-time" id="').concat(this.ye.audioTime, '" style="').concat(o, '">\n                                    ').concat(this.ge.title_time_to_listen, ':\n                                    <span id="').concat(this.ye.audioDuration, '" style="').concat(o, '">00:00</span>\n                                </div>\n                                <div class="mow-ia-summary-header-preview-time" id="').concat(this.ye.adRemaining, '" style="').concat(o, ';display:none"></div>\n                            </td>\n                            <td class="mow-ia-summary-header-cta">\n                                ').concat(c, "\n                                ").concat(u, "\n                                ").concat(h, "\n                                ").concat(d, "\n                                ").concat(m, '\n                            </td>\n                        </tr>\n                        <tr class="mow-ia-summary-header-audio" id="').concat(this.ye.audioHeaderError, '" style="display:none;">\n                            <td style="').concat(n, '">Error al reproducir el audio</td>\n                            <td class="mow-ia-summary-header-cta">').concat(p, "</td>\n                        </tr>\n                    </table>\n                </div>\n            ")
                }
                var f = this.ge.show_logo ? '\n                <div class="mow-ia-summary-header-logo">\n                    <a href="https://mowplayer.com" title="Mowplayer" target="_blank">\n                        <img src="https://cdn.mowplayer.com/assets/cdn2023/mow-logo.png"/>\n                    </a>\n                </div>\n            ' : "";
                return '\n            <div class="'.concat(this.ye.header, '">\n                ').concat(f, "\n                ").concat(r, "\n                ").concat(e, "\n                ").concat(s, "\n            </div>\n        ")
            }
        }, {
            key: "createBody",
            value: function() {
                var t = this.customStyles[this.ge.theme] ? "color: ".concat(this.customStyles[this.ge.theme].body_font_color, " !important;") : ""
                  , e = "font-size: ".concat(this.ge.title_font_size, "px !important;line-height: ").concat(this.ge.title_font_size + 2, "px !important;display:none;").concat(t)
                  , i = "".concat(t)
                  , n = "";
                return "" != this.ge.border_color && (n = this.ge.border_color.includes("linear-gradient") ? "background-image: ".concat(this.ge.border_color, " !important;") : "background-image: none !important; background-color: ".concat(this.ge.border_color, " !important;")),
                '\n            <div class="mow-ia-summary-body" id="'.concat(this.ye.body, '" style="display:none">\n                <div class="mow-ia-summary-body-border" id="mow-ia-summary-body-border" style="').concat(n, '"></div>\n                <div class="mow-ia-summary-body-loader" id="').concat(this.ye.loader, '" style="display:none">\n                    <div class="mow-ia-summary-body-loader-ico"></div>\n                </div>\n                <div class="mow-ia-summary-body-inner-ad" id="').concat(this.ye.innerFirstAd, '" style="display:none"></div>\n                <div class="mow-ia-summary-body-title" id="').concat(this.ye.title, '" style="').concat(e, '"></div>\n                <div class="mow-ia-summary-body-read-time" id="').concat(this.ye.readingTime, '">\n                    <strong>').concat(this.ge.title_time_to_read, '</strong> <span id="').concat(this.ye.readingTimeSummary, '"></span> (').concat(this.ge.title_full_reading_time, ' <span id="').concat(this.ye.readingTimeFull, '"></span>)\n                </div>\n                <div class="mow-ia-summary-body-text" id="').concat(this.ye.text, '" style="').concat(i, '"></div>\n                <div class="mow-ia-summary-body-inner-ad mow-ia-summary-body-inner-middle-ad" id="').concat(this.ye.innerMiddleAd, '" style="display:none"></div>\n                <div class="mow-ia-summary-body-image" id="').concat(this.ye.image, '" style="display:none"></div>\n                <div class="mow-ia-summary-body-inner-ad mow-ia-summary-body-inner-last-ad" id="').concat(this.ye.innerLastAd, '" style="display:none"></div>\n            </div>\n        ')
            }
        }, {
            key: "createFooter",
            value: function() {
                return '\n            <div class="mow-ia-summary-footer" id="'.concat(this.ye.footer, '">\n                <div class="mow-ia-summary-footer-logos">\n                    <div class="mow-ia-summary-footer-logo-mow">\n                        <a href="https://mowplayer.com" title="Mowplayer" target="_blank">\n                            <img class="mow-ia-summary-footer-logo-mow-img" src="https://cdn.mowplayer.com/assets/cdn2023/mow-logo.png" />\n                        </a>\n                    </div>\n                    <div class="mow-ia-summary-footer-logo-bp">\n                        <a href="https://www.beyondprompting.com/about-us?utm_source=summarizer&utm_medium=signature&utm_campaign=mowplayer" title="Beyond Prompting" target="_blank">\n                            <img class="mow-ia-summary-footer-logo-bp-img" style="width: 80px !important;"\n                                src="https://cdn.mowplayer.com/assets/cdn2023/bp-logo').concat("mow-ia-summary-light" === this.ge.theme ? ".png" : "-transparent.png", '"\n                            />\n                        </a>\n                    </div>\n                </div>\n\n                <div>@ Mow Player ').concat((new Date).getFullYear(), ' | <a href="https://mowplayer.com" title="Mowplayer" target="_blank">Contáctanos</a></div>\n            </div>\n        ')
            }
        }, {
            key: "createOpenButton",
            value: function() {
                return '\n            <button type="button" id="'.concat(this.ye.openButton, '">\n                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n                    viewBox="0 0 500 500" xml:space="preserve">\n                    <g>\n                        <circle class="mow-ia-summary-btn-circle" cx="249.74" cy="249.89" r="249.89"/>\n                        <path class="mow-ia-summary-btn-ico" d="M346.76,241.85l-0.5-0.5c-6.28-6.28-16.46-6.28-22.74,0l-55.97,55.97V162.43c0-8.88-7.2-16.08-16.08-16.08\n                            h-0.71c-8.88,0-16.08,7.2-16.08,16.08v134.89l-55.97-55.97c-6.28-6.28-16.46-6.28-22.74,0l-0.5,0.5c-6.28,6.28-6.28,16.46,0,22.74\n                            l82.95,82.95c1.7,2.06,3.86,3.71,6.38,4.72c0.09,0.04,0.18,0.1,0.27,0.14c3.97,1.61,8.43,1.54,12.37-0.14\n                            c2.52-1.01,4.68-2.66,6.38-4.72l82.95-82.95C353.04,258.32,353.04,248.13,346.76,241.85z"/>\n                    </g>\n                </svg>\n            </button>\n        ')
            }
        }, {
            key: "createCloseButton",
            value: function() {
                return '\n            <button type="button" id="'.concat(this.ye.closeButton, '" style="display:none;">\n                <?xml version="1.0" encoding="utf-8"?>\n                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n                    viewBox="0 0 500 500" xml:space="preserve">\n                    <g>\n                        <circle class="mow-ia-summary-close-btn-circle" cx="250.02" cy="250" r="250"/>\n                        <path class="mow-ia-summary-close-btn-ico" d="M345.71,235.29l-82.98-82.98c-1.7-2.06-3.86-3.71-6.38-4.72c-4.04-1.73-8.61-1.73-12.65,0\n                            c-2.52,1.01-4.68,2.66-6.38,4.72l-82.98,82.98c-6.28,6.28-6.28,16.47,0,22.76l0.5,0.5c6.28,6.28,16.47,6.28,22.76,0l55.99-55.99\n                            V337.5c0,8.89,7.2,16.09,16.09,16.09h0.71c8.89,0,16.09-7.2,16.09-16.09V202.55l55.99,55.99c6.28,6.28,16.47,6.28,22.75,0l0.5-0.5\n                            C352,251.76,352,241.57,345.71,235.29z"/>\n                    </g>\n                </svg>\n            </button>\n        ')
            }
        }, {
            key: "createAudioLoader",
            value: function() {
                return '\n            <div class="mow-ia-summary-audio-loader" id="'.concat(this.ye.audioLoader, '" style="display:none;">\n                <div class="mow-ia-summary-audio-loader-ico"></div>\n            </div>\n        ')
            }
        }, {
            key: "createPlayButton",
            value: function() {
                return '\n            <button type="button" id="'.concat(this.ye.playButton, '">\n                <?xml version="1.0" encoding="utf-8"?>\n                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n                    viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\n                    <g>\n                        <circle class="mow-ia-summary-btn-circle" cx="250.01" cy="250.01" r="249.99"/>\n                        <path class="mow-ia-summary-btn-ico" d="M174.38,334.73V164.62c0-13.97,15.12-22.7,27.21-15.71l147.32,85.05c12.1,6.98,12.1,24.44,0,31.42\n                    l-147.32,85.05C189.5,357.42,174.38,348.69,174.38,334.73z"/>\n                    </g>\n                </svg>\n            </button>\n        ')
            }
        }, {
            key: "createPauseButton",
            value: function() {
                return '\n            <button type="button" id="'.concat(this.ye.pauseButton, '" style="display:none;">\n                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n                    viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\n                    <g>\n                        <circle class="mow-ia-summary-btn-circle" cx="250.01" cy="250.01" r="249.99"/>\n                        <g>\n                            <g>\n                                <g>\n                                    <path class="mow-ia-summary-btn-ico" d="M177.43,356.21c-13.19,0-23.88-10.69-23.88-23.89V167.67c0-13.19,10.69-23.88,23.88-23.88\n                                        c13.19,0,23.88,10.69,23.88,23.88v164.66C201.31,345.52,190.62,356.21,177.43,356.21z"/>\n                                </g>\n                            </g>\n                            <g>\n                                <g>\n                                    <path class="mow-ia-summary-btn-ico" d="M319.51,356.21c-13.19,0-23.88-10.69-23.88-23.89V167.67c0-13.19,10.69-23.88,23.88-23.88\n                                        c13.19,0,23.88,10.69,23.88,23.88v164.66C343.38,345.52,332.69,356.21,319.51,356.21z"/>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </svg>\n            </button>\n        ')
            }
        }, {
            key: "createAdLabel",
            value: function() {
                return '\n            <button type="button" id="'.concat(this.ye.adButton, '" style="display:none;">\n                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n                    viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\n                    <g>\n                        <g>\n                            <circle class="mow-ia-summary-btn-circle-ad" cx="250" cy="250" r="250"/>\n                        </g>\n                        <g>\n                            <path class="mow-ia-summary-btn-ico-ad" d="M243,309.17l-55.41-120.95c-2.26-5.48-6.55-8.49-12.1-8.49h-0.78c-5.6,0-9.73,2.84-12.27,8.44l-55.39,121.11\n                                c-0.85,1.7-1.27,3.45-1.27,5.33c0,5.4,4.39,9.79,9.79,9.79c4.51,0,8.15-2.54,9.94-6.9l13.51-30.18h71.37l13.5,29.77\n                                c2.04,4.65,5.73,7.31,10.14,7.31c5.61,0,10.18-4.57,10.18-10.18C244.23,312.77,243.82,311.09,243,309.17z M201.87,267.75h-54.3\n                                l27.15-60.37L201.87,267.75z"/>\n                            <path class="mow-ia-summary-btn-ico-ad" d="M318.36,181.29h-39.82c-5.62,0-10.37,4.84-10.37,10.57v121c0,5.73,4.75,10.57,10.37,10.57h39.82\n                                c43.67,0,75.36-29.89,75.36-71.07v-0.39C393.72,211.02,362.03,181.29,318.36,181.29z M318.36,303.66h-29.25V201.06h29.25\n                                c31.7,0,53.83,21.09,53.83,51.3v0.39C372.2,282.72,350.06,303.66,318.36,303.66z"/>\n                        </g>\n                    </g>\n                </svg>\n            </button>\n        ')
            }
        }, {
            key: "createErrorIco",
            value: function() {
                return '\n            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n                viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\n                <style type="text/css">\n                    .st0{fill:#FFFFFF;}\n                    .st1{fill:#562B67;}\n                </style>\n                <g>\n                    <circle class="st0 mow-ia-summary-audio-circle-error" cx="250" cy="250" r="250"/>\n                    <path class="st1 mow-ia-summary-audio-ico-error" d="M165,335.7L165,335.7c-6.5-6.5-6.5-16.9,0-23.4l146.8-146.8c6.5-6.5,16.9-6.5,23.4,0l0,0\n                        c6.5,6.5,6.5,16.9,0,23.4L188.4,335.7C181.9,342.1,171.5,342.1,165,335.7z"/>\n                    <path class="st1 mow-ia-summary-audio-ico-error" d="M165,165.5L165,165.5c6.5-6.5,16.9-6.5,23.4,0l146.8,146.8c6.5,6.5,6.5,16.9,0,23.4l0,0\n                        c-6.5,6.5-16.9,6.5-23.4,0L165,188.9C158.6,182.4,158.6,172,165,165.5z"/>\n                </g>\n            </svg>\n        '
            }
        }, {
            key: "createSkipAdButton",
            value: function() {
                return "mobile" !== this.ve ? '\n                <button type="button" id="'.concat(this.ye.skipAdButton, '" style="display:none;" class="mow-ia-button-skip">\n                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n                        viewBox="0 0 1318.9 500" style="enable-background:new 0 0 1318.9 500;" xml:space="preserve">\n                        <path class="mow-ia-summary-btn-skip" d="M1227,500H91.9C41.1,500,0,458.9,0,408.1V91.9C0,41.1,41.1,0,91.9,0H1227c50.7,0,91.9,41.1,91.9,91.9v316.2\n                            C1318.9,458.9,1277.7,500,1227,500z"/>\n                        <g>\n                            <path class="mow-ia-summary-btn-skip-letter" d="M178.4,332.5c-8.3-2.8-15.5-6.1-21.3-10c-4.4-2.9-5.8-8.6-3.6-13.3l0,0c2.7-5.6,9.7-7.9,15-4.6\n                                c4.7,2.8,10,5.3,15.9,7.5c10.3,3.7,20.9,5.6,31.8,5.6c14.3,0,25.1-2.4,32.2-7.3c7.1-4.9,10.6-11.3,10.6-19.4\n                                c0-5.9-1.9-10.8-5.8-14.5c-3.9-3.7-8.7-6.6-14.3-8.5c-5.7-2-13.7-4.2-24.1-6.7c-13-3.1-23.5-6.3-31.5-9.4c-8-3.1-14.8-8-20.5-14.5\n                                c-5.7-6.5-8.5-15.3-8.5-26.3c0-9.2,2.4-17.6,7.3-25c4.9-7.4,12.2-13.4,22.1-17.8c9.9-4.5,22.2-6.7,36.9-6.7c10.2,0,20.3,1.3,30.2,4\n                                c6.1,1.6,11.7,3.7,16.8,6.2c5.1,2.5,7.3,8.6,5.1,13.8v0c-2.4,5.7-9,8.3-14.6,5.7c-4.3-2-8.7-3.7-13.3-5c-8.2-2.4-16.3-3.6-24.2-3.6\n                                c-14,0-24.5,2.6-31.5,7.7c-7,5.1-10.5,11.7-10.5,19.8c0,5.9,2,10.8,5.9,14.5c4,3.7,8.9,6.6,14.7,8.7c5.9,2.1,13.8,4.2,23.9,6.6\n                                c13,3.1,23.5,6.3,31.4,9.4c7.9,3.1,14.7,7.9,20.4,14.3c5.7,6.4,8.5,15.1,8.5,26c0,9.1-2.5,17.4-7.4,24.9\n                                c-4.9,7.5-12.5,13.4-22.5,17.8c-10.1,4.4-22.4,6.6-37.1,6.6C203.1,338.6,190.5,336.5,178.4,332.5z"/>\n                            <path class="mow-ia-summary-btn-skip-letter" d="M375.7,259.6L344,291.8v32.4c0,6.8-5.5,12.4-12.4,12.4h0c-6.8,0-12.4-5.5-12.4-12.4V175.8\n                                c0-6.8,5.5-12.4,12.4-12.4h0c6.8,0,12.4,5.5,12.4,12.4v84.3l91-93.6c1.9-2,4.6-3.1,7.4-3.1h0c9,0,13.6,10.8,7.4,17.3l-57.5,60.6\n                                l64.8,78.5c5.5,6.7,0.8,16.8-7.9,16.8h-2.5c-3,0-5.8-1.3-7.8-3.6L375.7,259.6z"/>\n                            <path class="mow-ia-summary-btn-skip-letter" d="M509.5,163.4L509.5,163.4c6.8,0,12.4,5.5,12.4,12.4v148.4c0,6.8-5.5,12.4-12.4,12.4h0\n                                c-6.8,0-12.4-5.5-12.4-12.4V175.8C497.1,169,502.7,163.4,509.5,163.4z"/>\n                            <path class="mow-ia-summary-btn-skip-letter" d="M694.3,179.5c12.9,10.7,19.3,25.5,19.3,44.3s-6.4,33.6-19.3,44.3c-12.9,10.7-30.5,16.1-52.9,16.1h-42.8v40.1\n                                c0,6.8-5.5,12.4-12.4,12.4h0c-6.8,0-12.4-5.5-12.4-12.4V175.8c0-6.8,5.5-12.4,12.4-12.4h55.2C663.7,163.4,681.4,168.8,694.3,179.5z\n                                M676.4,252.6c8.2-6.7,12.4-16.3,12.4-28.8c0-12.5-4.1-22.1-12.4-28.8c-8.2-6.7-20.2-10-35.9-10h-42v77.7h42\n                                C656.2,262.6,668.2,259.3,676.4,252.6z"/>\n                            <path class="mow-ia-summary-btn-skip-letter" d="M929.2,293.3h-92l-16.4,37.2c-1.6,3.7-5.3,6.1-9.4,6.1h-2.9c-7.4,0-12.4-7.7-9.3-14.5l66.8-147.5\n                                c3.1-6.8,9.8-11.2,17.3-11.2h0c7.5,0,14.2,4.4,17.3,11.1l67,147.5c3.1,6.8-1.9,14.5-9.3,14.5H955c-4.1,0-7.7-2.4-9.4-6.1\n                                L929.2,293.3z M920.6,273.5l-37.4-84.8l-37.4,84.8H920.6z"/>\n                            <path class="mow-ia-summary-btn-skip-letter" d="M1000,175.8c0-6.8,5.5-12.4,12.4-12.4h60.6c18.3,0,34.5,3.6,48.7,10.9c14.2,7.3,25.2,17.4,33,30.5\n                                c7.8,13.1,11.7,28.2,11.7,45.1c0,17-3.9,32-11.7,45.1c-7.8,13.1-18.8,23.3-33,30.5c-14.2,7.3-30.4,10.9-48.7,10.9h-60.6\n                                c-6.8,0-12.4-5.5-12.4-12.4V175.8z M1071.5,315.1c14,0,26.3-2.7,37-8.2c10.6-5.4,18.8-13.1,24.6-22.9c5.8-9.8,8.7-21.1,8.7-34\n                                c0-12.9-2.9-24.2-8.7-34c-5.8-9.8-14-17.4-24.6-22.9c-10.6-5.4-23-8.2-37-8.2h-46.7v130.1H1071.5z"/>\n                        </g>\n                    </svg>\n                </button>\n            ') : '\n                <button type="button" id="'.concat(this.ye.skipAdButton, '" style="display:none;" class="mow-ia-button-skip mow-ia-button-skip-mobile">\n                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n                    viewBox="0 0 900 500" style="enable-background:new 0 0 800 500;" xml:space="preserve">\n\n                    <path class="mow-ia-summary-btn-skip" d="M800,500H91.9C41.1,500,0,458.9,0,408.1V91.9C0,41.1,41.1,0,91.9,0H800c50.7,0,91.9,41.1,91.9,91.9v316.2C900,458.9,860.7,500,790,500z"/>\n                    <g>\n                        <path class="mow-ia-summary-btn-skip-letter" d="M178.4,332.5c-8.3-2.8-15.5-6.1-21.3-10c-4.4-2.9-5.8-8.6-3.6-13.3l0,0c2.7-5.6,9.7-7.9,15-4.6\n                            c4.7,2.8,10,5.3,15.9,7.5c10.3,3.7,20.9,5.6,31.8,5.6c14.3,0,25.1-2.4,32.2-7.3c7.1-4.9,10.6-11.3,10.6-19.4\n                            c0-5.9-1.9-10.8-5.8-14.5c-3.9-3.7-8.7-6.6-14.3-8.5c-5.7-2-13.7-4.2-24.1-6.7c-13-3.1-23.5-6.3-31.5-9.4c-8-3.1-14.8-8-20.5-14.5\n                            c-5.7-6.5-8.5-15.3-8.5-26.3c0-9.2,2.4-17.6,7.3-25c4.9-7.4,12.2-13.4,22.1-17.8c9.9-4.5,22.2-6.7,36.9-6.7c10.2,0,20.3,1.3,30.2,4\n                            c6.1,1.6,11.7,3.7,16.8,6.2c5.1,2.5,7.3,8.6,5.1,13.8v0c-2.4,5.7-9,8.3-14.6,5.7c-4.3-2-8.7-3.7-13.3-5c-8.2-2.4-16.3-3.6-24.2-3.6\n                            c-14,0-24.5,2.6-31.5,7.7c-7,5.1-10.5,11.7-10.5,19.8c0,5.9,2,10.8,5.9,14.5c4,3.7,8.9,6.6,14.7,8.7c5.9,2.1,13.8,4.2,23.9,6.6\n                            c13,3.1,23.5,6.3,31.4,9.4c7.9,3.1,14.7,7.9,20.4,14.3c5.7,6.4,8.5,15.1,8.5,26c0,9.1-2.5,17.4-7.4,24.9\n                            c-4.9,7.5-12.5,13.4-22.5,17.8c-10.1,4.4-22.4,6.6-37.1,6.6C203.1,338.6,190.5,336.5,178.4,332.5z"/>\n                        <path class="mow-ia-summary-btn-skip-letter" d="M375.7,259.6L344,291.8v32.4c0,6.8-5.5,12.4-12.4,12.4h0c-6.8,0-12.4-5.5-12.4-12.4V175.8\n                            c0-6.8,5.5-12.4,12.4-12.4h0c6.8,0,12.4,5.5,12.4,12.4v84.3l91-93.6c1.9-2,4.6-3.1,7.4-3.1h0c9,0,13.6,10.8,7.4,17.3l-57.5,60.6\n                            l64.8,78.5c5.5,6.7,0.8,16.8-7.9,16.8h-2.5c-3,0-5.8-1.3-7.8-3.6L375.7,259.6z"/>\n                        <path class="mow-ia-summary-btn-skip-letter" d="M509.5,163.4L509.5,163.4c6.8,0,12.4,5.5,12.4,12.4v148.4c0,6.8-5.5,12.4-12.4,12.4h0\n                            c-6.8,0-12.4-5.5-12.4-12.4V175.8C497.1,169,502.7,163.4,509.5,163.4z"/>\n                        <path class="mow-ia-summary-btn-skip-letter" d="M694.3,179.5c12.9,10.7,19.3,25.5,19.3,44.3s-6.4,33.6-19.3,44.3c-12.9,10.7-30.5,16.1-52.9,16.1h-42.8v40.1\n                            c0,6.8-5.5,12.4-12.4,12.4h0c-6.8,0-12.4-5.5-12.4-12.4V175.8c0-6.8,5.5-12.4,12.4-12.4h55.2C663.7,163.4,681.4,168.8,694.3,179.5z\n                            M676.4,252.6c8.2-6.7,12.4-16.3,12.4-28.8c0-12.5-4.1-22.1-12.4-28.8c-8.2-6.7-20.2-10-35.9-10h-42v77.7h42\n                            C656.2,262.6,668.2,259.3,676.4,252.6z"/>\n                    </g>\n                </svg>\n                </button>\n            ')
            }
        }]),
        t
    }()
      , IASummaryComponent = function(t) {
        _inherits(i, BaseComponent);
        var e = _createSuper(i);
        function i(t) {
            var n;
            return _classCallCheck(this, i),
            (n = e.call(this, t)).ne = null,
            n.oe = null,
            n.ie = null,
            n.X = null,
            n._e = null,
            n.be = null,
            n.ae = null,
            n.Ae = {
                audio_skip_delay: 5,
                background_color: "",
                border_color: "",
                css_selector_body: "",
                css_selector_title: "",
                enable_audio_skip: !0,
                enable_audioreader: !1,
                enable_open_component_on_play: !1,
                enable_summary: !0,
                header_font_size: 16,
                max_width: 20,
                open_automatically: !1,
                show_component_min_length: !1,
                show_component_min_length_words: 0,
                show_logo: !0,
                show_main_image: !1,
                show_title_note: !0,
                summary_font_size: 16,
                theme: "mow-ia-summary-hybrid",
                title_audio: "Escuchar resúmen",
                title_font_size: 20,
                title_full_reading_time: "Lectura completa",
                title_summary: "Leer resúmen",
                title_time_to_listen: "Tiempo",
                title_time_to_read: "Lectura"
            },
            n.run(),
            n
        }
        return _createClass(i, [{
            key: "start",
            value: function() {
                this.Ft.config = deepMerge(this.Ae, this.Ft.config),
                !1 === this.cantStartComponent() || isBlockedPageForAds$1(this.Ft.blocked_pages) || (this.loadDependencies(),
                this.ie.createComponent(this.Ft.id, this.Ft.config),
                this.ie.appendComponent(this.pt, this.Ft.inject_at),
                this.getComponentData(),
                this.appendBeforeAd(),
                this.appendAfterAd())
            }
        }, {
            key: "loadDependencies",
            value: function() {
                var t = this;
                this.ne = new IASummarySdk(this.Ft.ad_code),
                this.oe = new IASummaryContent(this.Ft.config.css_selector_title,this.Ft.config.css_selector_body),
                this.ie = new IASummaryUI(this.Ft.config,this.Ft.device),
                this.X = new IASummaryAds,
                this._e = new IASummarySummary(this.ie,this.ne,this.oe,{
                    buttons: {
                        open: "mow-ia-summary-open-button,mow-ia-summary-header-open-summary",
                        close: "mow-ia-summary-close-button"
                    },
                    enabled: this.Ft.config.enable_summary,
                    showTitle: this.Ft.config.show_title_note,
                    openOnLoad: this.Ft.config.open_automatically
                }),
                this._e.on("open", function() {
                    t.appendInnerAds()
                }),
                this._e.on("close", function() {
                    t.removeInnerAds()
                }),
                this.be = new IASummaryAudio(this.ie,this.ne,this.oe,{
                    mediaElementId: "mow-ia-summary-media",
                    adContainerId: "mow-ia-summary-media-ad-container",
                    buttons: {
                        play: "mow-ia-summary-audio-play,mow-ia-summary-header-audio",
                        pause: "mow-ia-summary-audio-pause",
                        skipAd: "mow-ia-summary-audio-skip-ad",
                        ad: "mow-ia-summary-audio-ad"
                    },
                    labels: {
                        duration: "mow-ia-summary-header-audio-duration",
                        currentTime: "mow-ia-summary-header-audio-current-time",
                        adTimeRemaining: "mow-ia-summary-ad-remaining"
                    },
                    ads: this.Ft.ads_audio,
                    skip: {
                        enabled: this.Ft.config.enable_audio_skip,
                        delay: 1e3 * parseInt(this.Ft.config.audio_skip_delay),
                        force: !0
                    },
                    enabled: this.Ft.config.enable_audioreader,
                    openSummaryOnPlay: function() {
                        t.Ft.config.enable_open_component_on_play && t._e.open()
                    },
                    updateCache: function(e) {
                        t.ae = e,
                        t._e.setCache(e)
                    }
                })
            }
        }, {
            key: "getComponentData",
            value: function() {
                var t = this
                  , e = this.oe.getBody();
                this.ne.getSummary(e, function(i) {
                    t.ae = i.data,
                    t._e.setCache(t.ae),
                    t.be.setCache(t.ae),
                    t.ne.setCreateSummaryUrl(i.links.text),
                    t.ne.setCreateAudioUrl(i.links.audio),
                    t.ne.setRequestStaticsUrl(i.links.requests),
                    t._e.start(),
                    t.be.start();
                    var n = t.ae && t.ae.summary.text.readingTime ? t.ae.summary.text.readingTime : calculatePorcTimeToRead(e, 30);
                    t.ie.changeSummaryPreviewTime(n),
                    t.ie.changeAudioDuration(decToSec(n))
                }
                .bind(this))
            }
        }, {
            key: "removeInnerAds",
            value: function() {
                var t = this
                  , e = document.getElementById("mow-ia-summary-body").querySelectorAll(".close-display-general button");
                e && e.forEach(function(t) {
                    t.click()
                }),
                setTimeout(function() {
                    t.X.removeAd(t.ie.getInnerFirstAdContainer()),
                    t.X.removeAd(t.ie.getInnerMiddleAdContainer()),
                    t.X.removeAd(t.ie.getInnerLastAdContainer())
                }, 100)
            }
        }, {
            key: "appendInnerAds",
            value: function() {
                this.appendInnerFirstAd(),
                this.appendInnerMiddleAd(),
                this.appendInnerLastAd()
            }
        }, {
            key: "appendBeforeAd",
            value: function() {
                void 0 !== this.Ft.ads.before && this.X.appendBefore(this.Ft.ads.before.code, this.ie.getIASummaryContainer())
            }
        }, {
            key: "appendAfterAd",
            value: function() {
                void 0 !== this.Ft.ads.after && this.X.appendAfter(this.Ft.ads.after.code, this.ie.getFooterContainer())
            }
        }, {
            key: "appendInnerFirstAd",
            value: function() {
                void 0 !== this.Ft.ads.inner && (this.ie.showInnerFirstAdContainer(),
                this.X.appendInner(this.Ft.ads.inner.code, this.ie.getInnerFirstAdContainer()))
            }
        }, {
            key: "appendInnerMiddleAd",
            value: function() {
                void 0 !== this.Ft.ads.inner_middle && (this.ie.showInnerMiddleAdContainer(),
                this.X.appendInner(this.Ft.ads.inner_middle.code, this.ie.getInnerMiddleAdContainer()))
            }
        }, {
            key: "appendInnerLastAd",
            value: function() {
                void 0 !== this.Ft.ads.inner_last && (this.ie.showInnerLastAdContainer(),
                this.X.appendInner(this.Ft.ads.inner_last.code, this.ie.getInnerLastAdContainer()))
            }
        }, {
            key: "cantStartComponent",
            value: function() {
                var t = parseInt(this.Ft.config.show_component_min_length_words);
                return !1 === this.Ft.config.show_component_min_length || (!0 === this.Ft.config.show_component_min_length && t <= 0 || totalWordCount(this.oe.getBody()) >= t)
            }
        }]),
        i
    }()
      , Player = function() {
        function t(e) {
            _classCallCheck(this, t);
            var i = !!Number.isInteger(e) && e
              , n = this;
            i ? setTimeout(function() {
                n.start()
            }, i) : this.start()
        }
        return _createClass(t, [{
            key: "start",
            value: function() {
                var t = this;
                if ((this.mowInstances = [],
                "undefined" == typeof googletag || void 0 === googletag.cmd) && (null === document.getElementById("mow-gpt-loaded") && !1 === this.isLoaded("https://securepubads.g.doubleclick.net/tag/js/gpt.js"))) {
                    var e = document.createElement("script");
                    e.type = "text/javascript",
                    e.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js",
                    e.id = "mow-gpt-loaded",
                    document.getElementsByTagName("head")[0].appendChild(e)
                }
                
                if (!browser.N) {
                    this.initializeReceptivity({
                        value: {
                            ReceptivityLookalike: "Yes"
                        }
                    });
                    var n = null;
                    n = setInterval(function() {
                        "undefined" != typeof googletag && void 0 !== googletag.pubads && (googletag.pubads().setTargeting("ReceptivityLookalike", void 0 === window.ReceptivityValue ? "Yes" : window.ReceptivityValue),
                        clearInterval(n))
                    }, 1)
                }
                if (void 0 === window.MowIsPlaying && (window.MowIsPlaying = !1),
                this.Ie = document.currentScript || document.scripts[document.scripts.length - 1],
                document.currentScript)
                    this.Ie = document.currentScript;
                else
                    for (var o = document.scripts, r = 0; r < o.length; r++)
                        o[r].hasAttribute("src") && o[r].getAttribute("src").indexOf("mowplayer") > 0 && (this.Ie = o[r],
                        r = o.length);
                this.registeredEvent = [],
                this.C = {
                    
                },
                this.ke = {
                    code: !1
                };
                var s = this.Ie.src.match(/\?(.+)$/i);
                if (s && s[1].split("&").forEach(function(e) {
                    var i = _slicedToArray(e.split("="), 2)
                      , n = i[0]
                      , o = i[1];
                    t.ke[decodeURIComponent(n)] = decodeURIComponent(o)
                }),
                !this.ke.code && !this.Ie.getAttribute("src").includes("js/player/")) {
                    var a = this.Ie.getAttribute("src").split("?")[0].replace(/^.*[\\\/]/, "");
                    "player.js" !== a && (this.ke[decodeURIComponent("code")] = a.replace(".js", ""))
                }
                window.mowCssInjected || (window.mowCssInjected = !0,
                loadCss("https://cdn.mowplayer.com/dist/ui/css/mowplayer.css?v=v2.3.3_1745851712")),
                this.ke.code && this.inject(this.ke.code, null, !1, this.ke);
                var l = function() {
                    
                }
                  , c = function() {
                    var e = document.querySelectorAll("div[data-mow_video]:not([data-mow_init]),#mow-token[data-token]:not([data-mow_init])");
                    Array.from(e).forEach(function(e) {
                        var i = e.dataset.mow_video;
                        i && (e.setAttribute("data-mow_init", !0),
                        t.inject(i, e, !0))
                    })
                };
                l(),
                c();
                var u = 0
                  , h = setInterval(function() {
                    
                }, 50)
                  , d = 0
                  , p = setInterval(function() {
                    
                }, 50);
                if (!window.initializedMowOutstream) {
                    if (window.initializedMowOutstream = !0,
                    "undefined" == typeof google || "object" !== _typeof(google.ima) || void 0 === google.ima.VERSION) {

                    }
                    var f = setInterval(function() {
                        if ("undefined" != typeof google && "object" === _typeof(google.ima)) {
                            clearInterval(f);
                            var t = setInterval(function() {
                                if (document.getElementsByTagName("body").length > 0) {
                                    if (window.load_ads_via_ajax)
                                        xhr(window.load_ads_via_ajax + "?load_ads_via_ajax=true", "GET", null, "text", {
                                            "mow-referer": refererUrl()
                                        }).then(function(t) {
                                            window._mow_adsData__11_ = t;
                                            var e = null;
                                            e = setInterval(function() {
                                                "undefined" != typeof googletag && void 0 !== googletag.cmd && (clearInterval(e),
                                                g())
                                            }, 1)
                                        });
                                    else {
                                        var e = null;
                                        e = setInterval(function() {
                                            "undefined" != typeof googletag && void 0 !== googletag.cmd && (clearInterval(e),
                                            g())
                                        }, 1)
                                    }
                                    clearInterval(t)
                                }
                            }, 5)
                        }
                    }, 5)
                }
                var g = function() {
                    var t, e, i, n, o, r = (t = [],
                    e = [],
                    i = [],
                    n = [],
                    o = null,
                    window._mow_adsData__11_.forEach(function(r, s) {
                        var a = r[0].type;
                        switch (a) {
                        case "slidein":
                            o = r.map(function(t) {
                                return t.code = t.code ? t.code.replace("receptivity_value", "Yes").replace("ReceptivityState", "ReceptivityLookalike") : t.code,
                                t
                            }),
                            e.push(o);
                            break;
                        case "display-in-content":
                            o = r.map(function(t) {
                                return t.code = t.code ? t.code.replace("receptivity_value", "Yes").replace("ReceptivityState", "ReceptivityLookalike") : t.code,
                                t
                            }),
                            i.push(o);
                            break;
                        case "video-slider":
                            o = r.map(function(t) {
                                return t.code = t.code ? t.code.replace("receptivity_value", "Yes").replace("ReceptivityState", "ReceptivityLookalike") : t.code,
                                t
                            }),
                            n.push(o);
                            break;
                        default:
                            r.forEach(function(e, i) {
                                e.code = e.code ? e.code.replace("receptivity_value", "Yes").replace("ReceptivityState", "ReceptivityLookalike") : e.code,
                                void 0 === t[a] && (t[a] = []),
                                t[a].push(e)
                            })
                        }
                    }),
                    {
                        finalAds: t,
                        adsDisplayInContent: i,
                        adsSlider: n,
                        adsSlidein: e
                    });
                    googletag.cmd.push(function() {
                        googletag.pubads().set("page_url", window.location.href),
                        googletag.pubads().addEventListener("slotRequested", function(t) {
                            t.slot.getAdUnitPath().includes("mow_") && logger.debug("Slot requested:", {
                                adUnit: t.slot.getAdUnitPath()
                            })
                        }),
                        googletag.pubads().addEventListener("slotOnload", function(t) {
                            t.slot.getAdUnitPath().includes("mow_")
                        }),
                        googletag.pubads().addEventListener("slotResponseReceived", function(t) {
                            t.slot.getAdUnitPath().includes("mow_")
                        })
                    });
                    for (var s = 0, a = Object.entries(r.finalAds); s < a.length; s++) {
                        var l = _slicedToArray(a[s], 2)
                          , c = l[0]
                          , u = l[1];
                        "display-interstitial" === c && new DisplayInterstitial(u)
                    }
                    r.adsDisplayInContent.forEach(function(t) {
                        new DisplayInContent(t)
                    });
                    var h = new VideoSliderManager;
                    r.adsSlider.forEach(function(t) {
                        h.append(new VideoSlider(t))
                    }),
                    h.start();
                    var d = new DisplaySlideinManager;
                    r.adsSlidein.forEach(function(t) {
                        d.append(new DisplaySlidein(t))
                    }),
                    d.start();
                    for (var p = 0, m = Object.entries(r.finalAds); p < m.length; p++) {
                        var f = _slicedToArray(m[p], 2)
                          , g = f[0]
                          , v = f[1];
                        "ia-summary" === g ? new IASummaryComponent(v) : "popup" === g ? new DisplayPopup(v) : "google-right-side-rail" === g ? new DisplayGoogleRightSideRail(v) : "google-left-side-rail" === g ? new DisplayGoogleLeftSideRail(v) : "google-anchor-stb" === g ? new DisplayAnchorStb(v) : "google-anchor-stt" === g ? new DisplayAnchorStt(v) : "video-in-text" === g ? new VideoInText(v) : "display-sticky-bottom" === g ? new DisplayStickyBottom(v) : "display-sticky-top" === g ? new DisplayStickyTop(v) : "display-slider" === g ? new DisplaySlider(v) : "widget-video-article" === g || "widget-audio-reader" === g ? new DisplayInContentOld(v) : "display-in-content" === g ? new DisplayInContentOld(v) : "video-interstitial" === g && new VideoInterstitial(v)
                    }
                }
            }
        }, {
            key: "isLoaded",
            value: function(t) {
                var e, i = !1, n = _createForOfIteratorHelper(document.getElementsByTagName("script"));
                try {
                    for (n.s(); !(e = n.n()).done; ) {
                        e.value.src === t && (i = !0)
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
                return i
            }
        }, {
            key: "inject",
            value: function(t) {
                var e = this
                  , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                  , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                  , o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null
                  , r = generateId("m".concat(t))
                  , s = []
                  , a = o || [];
                i ? n ? (i.insertAdjacentHTML("afterbegin", '<div id="'.concat(r, '"></div>')),
                a = i.dataset) : i.insertAdjacentHTML("afterend", '<div id="'.concat(r, '"></div>')) : this.Ie.insertAdjacentHTML("afterend", '<div id="'.concat(r, '"></div>'));
                var l = xhr(this.C.config.replace("{%code%}", t) + "?cacher=" + generateId("c"), "GET", null, "text", {
                    "Content-type": "application/x-www-form-urlencoded",
                    "mow-referer": refererUrl()
                });
                s.push(l),
                "function" != typeof Mowplayer && s.push(loadJs(this.C.lib)),
                Promise.all(s).then(function(n) {
                    var o = n[0];
                    if ("string" != typeof n[0]) {
                        (a = JSON.parse(JSON.stringify(a))).autoplay && (o.visibility = {
                            autoplay: "true" === a.autoplay || "1" === a.autoplay
                        }),
                        a.mute && (o.mute = "true" === a.mute || "1" === a.mute),
                        a.autoplay && (o.mute = !0),
                        a.sticky && (o.sticky = {
                            enabled: "true" === a.sticky || "1" === a.sticky
                        }),
                        a.debug && (o.debug = "true" === a.debug),
                        a.ga && (o.ga = "true" === a.ga || "1" === a.ga),
                        a.volume && (o.volume = parseFloat(a.volume)),
                        a.width && (i.style.width = parseInt(a.width) + "px",
                        o.width = parseInt(a.width)),
                        a.height && (i.style.height = parseInt(a.height) + "px",
                        o.height = parseInt(a.height)),
                        a.ratio && (o.ratio = a.ratio),
                        a.responsive && (o.responsive = "true" === a.responsive || "1" === a.responsive);
                        var s = new Mowplayer(document.getElementById(r),o,t)
                          , l = e.mowInstances.length;
                        e.mowInstances[l] = s;
                        var c = 0
                          , u = setInterval(function() {
                            e.registeredEvent.length > 0 && (e.registeredEvent.forEach(function(t, i) {
                                e.mowInstances[l].on(t.event, t.callback)
                            }),
                            clearInterval(u)),
                            ++c > 500 && clearInterval(u)
                        }, 50)
                    }
                })
            }
        }, {
            key: "serialize",
            value: function(t) {
                var e = [];
                for (var i in t)
                    t.hasOwnProperty(i) && "code" !== i && e.push(encodeURIComponent(i) + "=" + encodeURIComponent(t[i]));
                return e.join("&")
            }
        }, {
            key: "initializeReceptivity",
            value: function(t) {
                var e = t.ReceptivityLookalike;
                return this.mowInstances && this.mowInstances.forEach(function(t, i) {
                    t.setReceptivity(e)
                }),
                window.ReceptivityValue = e,
                [t.ReceptivityLookalike]
            }
        }, {
            key: "pauseOtherPlayers",
            value: function(t) {}
        }, {
            key: "on",
            value: function(t, e) {
                this.registeredEvent.push({
                    event: t,
                    callback: e
                })
            }
        }]),
        t
    }();
    window.Mow = new Player(window.delayStartup || !1)
}();
var contxtful_config = {
    'tag_id': "1Pw020A3ITJIzgfunLbgN4HVD",
    'callback': 'Mow.initializeReceptivity'
};
