var e = require('../@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
    value: !0
}),
    (exports.default = void 0);
var r = e(require('../@babel/runtime/helpers/classCallCheck')),
    l = e(require('../@babel/runtime/helpers/createClass')),
    t = (function () {
        function e() {
            (0, r.default)(this, e);
        }
        return (
            (0, l.default)(e, null, [
                {
                    key: 'mockLog',
                    value: function () {
                        for (var e = arguments.length, r = new Array(e), l = 0; l < e; l++) r[l] = arguments[l];
                        console.log('[mock walite] ', r);
                    }
                }
            ]),
            e
        );
    })();
exports.default = t;
