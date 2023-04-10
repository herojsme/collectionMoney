module.exports = {
    getDefStartTimeMs: function (e, t) {
        var g = new Date(t.getFullYear(), t.getMonth(), 1);
        return e.getTime() > g.getTime() ? e.getTime() : g.getTime();
    }
};
