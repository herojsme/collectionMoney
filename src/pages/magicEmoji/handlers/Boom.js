var e = require('../../@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
    value: !0
}),
    (exports.default = void 0);
var t = e(require('../../@babel/runtime/helpers/classCallCheck')),
    r = e(require('../../@babel/runtime/helpers/createClass')),
    i = e(require('../../@babel/runtime/helpers/inherits')),
    u = e(require('../../@babel/runtime/helpers/possibleConstructorReturn')),
    a = e(require('../../@babel/runtime/helpers/getPrototypeOf')),
    l = e(require('./MagicEmojiBase.js'));
function n(e) {
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
            i = (0, a.default)(e);
        if (t) {
            var l = (0, a.default)(this).constructor;
            r = Reflect.construct(i, arguments, l);
        } else r = i.apply(this, arguments);
        return (0, u.default)(this, r);
    };
}
var o = (function (e) {
    (0, i.default)(a, e);
    var u = n(a);
    function a() {
        return (0, t.default)(this, a), u.apply(this, arguments);
    }
    return (
        (0, r.default)(a, [
            {
                key: 'handle',
                value: function (e, t) {
                    this.magicEmojiHandler('Boom', 'ok', e, t, {}),
                        uni.magicEmoji.impact({
                            ahap: 'boom1',
                            style: 'heavy'
                        });
                }
            }
        ]),
        a
    );
})(l.default);
(exports.default = o), GameGlobal.walFramework.registerMagicEmojiHandlerWithEmojiKey('/:bome', o);
