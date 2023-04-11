var e = require('../@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
    value: !0
}),
    (exports.default = void 0);
var i = e(require('../@babel/runtime/helpers/classCallCheck')),
    r = e(require('../@babel/runtime/helpers/createClass')),
    t = (function () {
        function e() {
            (0, i.default)(this, e);
        }
        return (
            (0, r.default)(e, null, [
                {
                    key: 'invoke',
                    value: function (e, i) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                            l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                        if (window.__walite__) return (r.__ios__ = {}), (r.__ios__.scene = e), (r.__ios__.isAsync = l), window.__walite__.JSBridge.invoke(i, r, t);
                    }
                }
            ]),
            e
        );
    })();
(exports.default = t), (t.SCENE = 'walite');
