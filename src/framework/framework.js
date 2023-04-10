var e = require('../@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
    value: !0
}),
    (exports.default = void 0);
var r = e(require('../@babel/runtime/helpers/classCallCheck')),
    t = e(require('../@babel/runtime/helpers/createClass'));
require('../@babel/runtime/helpers/Objectentries');
var i,
    a = {};
(a.register = function (e) {
    var r,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a,
        n = e.split('.');
    r = n.length;
    for (var l = 0; l < r; l++) void 0 === i[n[l]] && (i[n[l]] = t), (i = i[n[l]]);
    return (t.$$name = 'MagicEmojiHandler.' + e), i;
}),
    (a.handle = function (e, r, t, n) {
        i || (i = Object.entries(a)),
            i.forEach(function (r) {
                var i = r[0],
                    a = r[1];
                i === e && new a().handle(t, n);
            });
    });
var n = (function () {
    function e(t) {
        (0, r.default)(this, e), (this.walImpl = new t.constructor());
    }
    return (
        (0, t.default)(e, [
            {
                key: 'registerMagicEmojiHandlerWithEmojiKey',
                value: function (e, r) {
                    a.register(e, r);
                }
            },
            {
                key: 'registerMagicEmojiHandlerWithContent',
                value: function (e, r) {}
            },
            {
                key: 'handleMagicEmoji',
                value: function (e, r, t, i, n) {
                    if (Date.now() - Number.parseInt(n) >= 200) {
                        var l = uni.magicEmoji.getMsgMeta(t, !0);
                        l && l.meta && (i = l.meta);
                    }
                    a.handle(e, r, t, i);
                }
            }
        ]),
        e
    );
})();
exports.default = n;
