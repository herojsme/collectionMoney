module.exports = function (r, t) {
    if ('undefined' != typeof Symbol && Symbol.iterator in Object(r)) {
        var e = [],
            n = !0,
            o = !1,
            l = void 0;
        try {
            for (var i, u = r[Symbol.iterator](); !(n = (i = u.next()).done) && (e.push(i.value), !t || e.length !== t); n = !0);
        } catch (r) {
            (o = !0), (l = r);
        } finally {
            try {
                n || null == u.return || u.return();
            } finally {
                if (o) throw l;
            }
        }
        return e;
    }
};
