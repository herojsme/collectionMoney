var t = require('../@babel/runtime/helpers/slicedToArray'),
    e = function (t) {
        return (t = t.toString())[1] ? t : '0'.concat(t);
    };
module.exports = {
    formatTime: function (t) {
        var n = t.getFullYear(),
            r = t.getMonth() + 1,
            a = t.getDate(),
            o = t.getHours(),
            u = t.getMinutes(),
            c = t.getSeconds();
        return ''.concat([n, r, a].map(e).join('/'), ' ').concat([o, u, c].map(e).join(':'));
    },
    formatTimeYYmmDDPoint: function (t) {
        var n = t.getFullYear(),
            r = t.getMonth() + 1,
            a = t.getDate();
        return ''.concat([n, r, a].map(e).join('.'));
    },
    toDate: function (t, e) {
        var n = new Date(t),
            r = n.getFullYear(),
            a = n.getMonth() + 1;
        a = a < 10 ? '0' + a : a;
        var o = n.getDate();
        o = o < 10 ? '0' + o : o;
        var u = n.getHours();
        u = u < 10 ? '0' + u : u;
        var c = n.getMinutes(),
            m = n.getSeconds();
        return (c = c < 10 ? '0' + c : c), (m = m < 10 ? '0' + m : m), 'year-month' == e ? r + '-' + a : r + '-' + a + '-' + o + ' ' + u + ':' + c;
    },
    formatTimeYYmmDDDash: function (t) {
        var n = t.getFullYear(),
            r = t.getMonth() + 1,
            a = t.getDate();
        return ''.concat([n, r, a].map(e).join('-'));
    },
    formatNumber: e,
    formatTimeYYmmDDFCHN: function (n) {
        var r = [n.getFullYear(), n.getMonth() + 1, n.getDate()].map(function (t) {
                return e(t);
            }),
            a = t(r, 3),
            o = a[0],
            u = a[1],
            c = a[2];
        return ''.concat(o, '年').concat(u, '月').concat(c, '日');
    }
};
