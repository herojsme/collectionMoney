var e = require('../../@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
    value: !0
}),
    (exports.default = void 0);
var r = e(require('../../@babel/runtime/helpers/classCallCheck')),
    t = e(require('../../@babel/runtime/helpers/createClass')),
    a = e(require('../../@babel/runtime/helpers/inherits')),
    o = e(require('../../@babel/runtime/helpers/possibleConstructorReturn')),
    i = e(require('../../@babel/runtime/helpers/getPrototypeOf')),
    l = e(require('./MagicEmojiBase.js'));
function u(e) {
    var r = (function () {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (e) {
            return !1;
        }
    })();
    return function () {
        var t,
            a = (0, i.default)(e);
        if (r) {
            var l = (0, i.default)(this).constructor;
            t = Reflect.construct(a, arguments, l);
        } else t = a.apply(this, arguments);
        return (0, o.default)(this, t);
    };
}
var n = (function (e) {
    (0, a.default)(i, e);
    var o = u(i);
    function i() {
        return (0, r.default)(this, i), o.apply(this, arguments);
    }
    return (
        (0, t.default)(i, [
            {
                key: 'handle',
                value: function (e, r) {
                    var t = this,
                        a = Math.floor(2 * Math.random()),
                        o = 0;
                    GameGlobal.walFramework.walImpl.darkMode && (o = 2);
                    var i = {
                        group: o,
                        index: Math.floor(12 * Math.random()),
                        disableBloom: !0
                    };
                    this.magicEmojiHandler('Firework', 'ok', e, r, i);
                    var l = {
                        group: o + 1,
                        index: Math.floor(12 * Math.random()),
                        disableBloom: !0
                    };
                    setTimeout(function () {
                        for (var o = 0; o < a; o++) t.magicEmojiHandler('Firework', 'ok', e, r, l);
                    }, 300);
                }
            }
        ]),
        i
    );
})(l.default);
(exports.default = n), GameGlobal.walFramework.registerMagicEmojiHandlerWithEmojiKey('[Fireworks]', n);
