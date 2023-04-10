Object.defineProperty(exports, '__esModule', {
    value: !0
}),
    (exports.pageScrollMixin = void 0);
var e = require('../common/utils');
function r(r) {
    var n = (0, e.getCurrentPage)().vanPageScroller;
    (void 0 === n ? [] : n).forEach(function (e) {
        'function' == typeof e && e(r);
    });
}
exports.pageScrollMixin = function (n) {
    return {
        beforeMount: function () {
            var o = (0, e.getCurrentPage)();
            (0, e.isDef)(o) &&
                (Array.isArray(o.vanPageScroller)
                    ? o.vanPageScroller.push(n.bind(this))
                    : (o.vanPageScroller = 'function' == typeof o.onPageScroll ? [o.onPageScroll.bind(o), n.bind(this)] : [n.bind(this)]),
                (o.onPageScroll = r));
        },
        destroyed: function () {
            var r,
                o = (0, e.getCurrentPage)();
            (0, e.isDef)(o) &&
                (o.vanPageScroller =
                    (null === (r = o.vanPageScroller) || void 0 === r
                        ? void 0
                        : r.filter(function (e) {
                              return e !== n;
                          })) || []);
        }
    };
};