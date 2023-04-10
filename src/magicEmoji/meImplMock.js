var e = require('../@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
    value: !0
}),
    (exports.default = void 0);
var t = e(require('../@babel/runtime/helpers/classCallCheck')),
    r = e(require('../@babel/runtime/helpers/createClass')),
    u = e(require('../@babel/runtime/helpers/inherits')),
    n = e(require('../@babel/runtime/helpers/possibleConstructorReturn')),
    i = e(require('../@babel/runtime/helpers/getPrototypeOf')),
    l = e(require('./meImpl')),
    a = e(require('../framework/mockHelper'));
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
            u = (0, i.default)(e);
        if (t) {
            var l = (0, i.default)(this).constructor;
            r = Reflect.construct(u, arguments, l);
        } else r = u.apply(this, arguments);
        return (0, n.default)(this, r);
    };
}
var c = (function (e) {
    (0, u.default)(i, e);
    var n = o(i);
    function i() {
        var e;
        return (0, t.default)(this, i), (e = n.call(this)), console.log('mock env!!!'), e;
    }
    return (
        (0, r.default)(i, [
            {
                key: 'trigger',
                value: function (e) {
                    a.default.mockLog('trigger: '.concat(e));
                }
            },
            {
                key: 'fetchMessage',
                value: function (e) {
                    if ((a.default.mockLog('fetchMessage: '.concat(e)), 'fetchViewPosition' === JSON.parse(e).message))
                        return JSON.stringify({
                            x: 100,
                            y: 100,
                            w: 50,
                            h: 50
                        });
                }
            }
        ]),
        i
    );
})(l.default);
exports.default = c;
