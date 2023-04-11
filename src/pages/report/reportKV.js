var e = require('../@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
    value: !0
}),
    (exports.default = void 0);
var t = e(require('../@babel/runtime/helpers/classCallCheck')),
    r = e(require('../@babel/runtime/helpers/createClass')),
    u = e(require('../@babel/runtime/helpers/inherits')),
    n = e(require('../@babel/runtime/helpers/possibleConstructorReturn')),
    l = e(require('../@babel/runtime/helpers/getPrototypeOf'));
function o(e) {
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
            u = (0, l.default)(e);
        if (t) {
            var o = (0, l.default)(this).constructor;
            r = Reflect.construct(u, arguments, o);
        } else r = u.apply(this, arguments);
        return (0, n.default)(this, r);
    };
}
var i = (function (e) {
    (0, u.default)(l, e);
    var n = o(l);
    function l(e) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, t.default)(this, l), n.call(this, e, r);
    }
    return (
        (0, r.default)(l, [
            {
                key: 'report',
                value: function () {
                    uni.kvReport({
                        logId: this.getKey(),
                        logStr: this.getFormattedValue(),
                        success: function (e) {
                            console.log(e);
                        },
                        fail: function (e) {
                            console.error(e);
                        }
                    });
                }
            }
        ]),
        l
    );
})(e(require('./reportBase')).default);
exports.default = i;
