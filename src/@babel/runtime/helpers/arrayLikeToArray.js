module.exports = function (n, r) {
    (null == r || r > n.length) && (r = n.length);
    for (var e = 0, l = new Array(r); e < r; e++) l[e] = n[e];
    return l;
};
