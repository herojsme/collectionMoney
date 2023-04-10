var e = require('../../@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
    value: !0
}),
    (exports.default = void 0);
var t = e(require('../../@babel/runtime/helpers/classCallCheck')),
    r = e(require('../../@babel/runtime/helpers/createClass')),
    u = e(require('../../@babel/runtime/helpers/inherits')),
    i = e(require('../../@babel/runtime/helpers/possibleConstructorReturn')),
    a = e(require('../../@babel/runtime/helpers/getPrototypeOf')),
    n = e(require('./MagicEmojiBase.js'));
function l(e) {
    var t = (function () {
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
        var r,
            u = (0, a.default)(e);
        if (t) {
            var n = (0, a.default)(this).constructor;
            r = Reflect.construct(u, arguments, n);
        } else r = u.apply(this, arguments);
        return (0, i.default)(this, r);
    };
}
var o = (function (e) {
    (0, u.default)(a, e);
    var i = l(a);
    function a() {
        return (0, t.default)(this, a), i.apply(this, arguments);
    }
    return (
        (0, r.default)(a, [
            {
                key: 'handle',
                value: function (e, t) {
                    this.magicEmojiHandler('Ribben', 'ok', e, t, {});
                }
            }
        ]),
        a
    );
})(n.default);
(exports.default = o), GameGlobal.walFramework.registerMagicEmojiHandlerWithEmojiKey('[Party]', o);
