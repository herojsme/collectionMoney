var e = require('../@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
    value: !0
}),
    (exports.default = void 0),
    require('../@babel/runtime/helpers/Objectvalues');
var r = e(require('../@babel/runtime/helpers/classCallCheck')),
    t = e(require('../@babel/runtime/helpers/createClass')),
    u = (function () {
        function e(t) {
            var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            (0, r.default)(this, e), (this.reportKey = t), (this.reportParams = u);
        }
        return (
            (0, t.default)(e, [
                {
                    key: 'toString',
                    value: function () {
                        var e = '';
                        return (
                            Object.values(this.reportParams).forEach(function (r) {
                                (e += ''.concat(r)), (e += ',');
                            }),
                            e.slice(0, e.length - 1)
                        );
                    }
                },
                {
                    key: 'getKey',
                    value: function () {
                        return this.reportKey;
                    }
                },
                {
                    key: 'getValue',
                    value: function () {
                        return this.reportParams;
                    }
                },
                {
                    key: 'getFormattedValue',
                    value: function () {
                        return this.toString();
                    }
                }
            ]),
            e
        );
    })();
exports.default = u;
