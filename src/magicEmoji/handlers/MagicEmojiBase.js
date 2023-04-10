var e = require('../../@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
    value: !0
}),
    (exports.default = void 0);
var r = e(require('../../@babel/runtime/helpers/classCallCheck')),
    i = e(require('../../@babel/runtime/helpers/createClass')),
    t = (function () {
        function e() {
            (0, r.default)(this, e);
        }
        return (
            (0, i.default)(e, [
                {
                    key: 'handle',
                    value: function (e, r) {}
                },
                {
                    key: 'magicEmojiHandler',
                    value: function (e, r, i, t, a) {
                        window.__evfx__private__.magicEmojiHandler(e, r, i, JSON.stringify(t), JSON.stringify(a));
                    }
                }
            ]),
            e
        );
    })();
exports.default = t;
