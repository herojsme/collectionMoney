var __subPageFrameStartTime__ = __subPageFrameStartTime__ || Date.now();
var __webviewId__ = __webviewId__;
var __wxAppCode__ = __wxAppCode__ || {};
var __WXML_GLOBAL__ = __WXML_GLOBAL__ || {
    entrys: {},
    defines: {},
    modules: {},
    ops: [],
    wxs_nf_init: undefined,
    total_ops: 0
};
var __vd_version_info__ = __vd_version_info__ || {};
/*v0.5vv_20200413_syb_scopedata*/
window.__wcc_version__ = 'v0.5vv_20200413_syb_scopedata';
window.__wcc_version_info__ = {
    customComponents: true,
    fixZeroRpx: true,
    propValueDeepCopy: false
};
var $gwxc;
var $gaic = {};
$gwx0 = function (path, global) {
    if (typeof global === 'undefined') global = {};
    if (typeof __WXML_GLOBAL__ === 'undefined') {
        __WXML_GLOBAL__ = {};
    }
    __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
    $gwx('init', global);
    function _(a, b) {
        if (typeof b != 'undefined') a.children.push(b);
    }
    function _v(k) {
        if (typeof k != 'undefined')
            return {
                tag: 'virtual',
                wxKey: k,
                children: []
            };
        return {
            tag: 'virtual',
            children: []
        };
    }
    function _n(tag) {
        $gwxc++;
        if ($gwxc >= 16000) {
            throw "Dom limit exceeded, please check if there's any mistake you've made.";
        }
        return {
            tag: 'wx-' + tag,
            attr: {},
            children: [],
            n: [],
            raw: {},
            generics: {}
        };
    }
    function _p(a, b) {
        b && a.properities.push(b);
    }
    function _s(scope, env, key) {
        return typeof scope[key] != 'undefined' ? scope[key] : env[key];
    }
    function _wp(m) {
        console.warn('WXMLRT_$gwx0:' + m);
    }
    function _wl(tname, prefix) {
        _wp(prefix + ':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.');
    }
    $gwn = console.warn;
    $gwl = console.log;
    function $gwh() {
        function x() {}
        x.prototype = {
            hn: function (obj, all) {
                if (typeof obj == 'object') {
                    var cnt = 0;
                    var any1 = false,
                        any2 = false;
                    for (var x in obj) {
                        any1 = any1 | (x === '__value__');
                        any2 = any2 | (x === '__wxspec__');
                        cnt++;
                        if (cnt > 2) break;
                    }
                    return cnt == 2 && any1 && any2 && (all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h') ? 'h' : 'n';
                }
                return 'n';
            },
            nh: function (obj, special) {
                return {
                    __value__: obj,
                    __wxspec__: special ? special : true
                };
            },
            rv: function (obj) {
                return this.hn(obj, true) === 'n' ? obj : this.rv(obj.__value__);
            },
            hm: function (obj) {
                if (typeof obj == 'object') {
                    var cnt = 0;
                    var any1 = false,
                        any2 = false;
                    for (var x in obj) {
                        any1 = any1 | (x === '__value__');
                        any2 = any2 | (x === '__wxspec__');
                        cnt++;
                        if (cnt > 2) break;
                    }
                    return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__));
                }
                return false;
            }
        };
        return new x();
    }
    wh = $gwh();
    function $gstack(s) {
        var tmp = s.split('\n ' + ' ' + ' ' + ' ');
        for (var i = 0; i < tmp.length; ++i) {
            if (0 == i) continue;
            if (')' === tmp[i][tmp[i].length - 1]) tmp[i] = tmp[i].replace(/\s\(.*\)$/, '');
            else tmp[i] = 'at anonymous function';
        }
        return tmp.join('\n ' + ' ' + ' ' + ' ');
    }
    function $gwrt(should_pass_type_info) {
        function ArithmeticEv(ops, e, s, g, o) {
            var _f = false;
            var rop = ops[0][1];
            var _a, _b, _c, _d, _aa, _bb;
            switch (rop) {
                case '?:':
                    _a = rev(ops[1], e, s, g, o, _f);
                    _c = should_pass_type_info && wh.hn(_a) === 'h';
                    _d = wh.rv(_a) ? rev(ops[2], e, s, g, o, _f) : rev(ops[3], e, s, g, o, _f);
                    _d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
                    return _d;
                    break;
                case '&&':
                    _a = rev(ops[1], e, s, g, o, _f);
                    _c = should_pass_type_info && wh.hn(_a) === 'h';
                    _d = wh.rv(_a) ? rev(ops[2], e, s, g, o, _f) : wh.rv(_a);
                    _d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
                    return _d;
                    break;
                case '||':
                    _a = rev(ops[1], e, s, g, o, _f);
                    _c = should_pass_type_info && wh.hn(_a) === 'h';
                    _d = wh.rv(_a) ? wh.rv(_a) : rev(ops[2], e, s, g, o, _f);
                    _d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
                    return _d;
                    break;
                case '+':
                case '*':
                case '/':
                case '%':
                case '|':
                case '^':
                case '&':
                case '===':
                case '==':
                case '!=':
                case '!==':
                case '>=':
                case '<=':
                case '>':
                case '<':
                case '<<':
                case '>>':
                    _a = rev(ops[1], e, s, g, o, _f);
                    _b = rev(ops[2], e, s, g, o, _f);
                    _c = should_pass_type_info && (wh.hn(_a) === 'h' || wh.hn(_b) === 'h');
                    switch (rop) {
                        case '+':
                            _d = wh.rv(_a) + wh.rv(_b);
                            break;
                        case '*':
                            _d = wh.rv(_a) * wh.rv(_b);
                            break;
                        case '/':
                            _d = wh.rv(_a) / wh.rv(_b);
                            break;
                        case '%':
                            _d = wh.rv(_a) % wh.rv(_b);
                            break;
                        case '|':
                            _d = wh.rv(_a) | wh.rv(_b);
                            break;
                        case '^':
                            _d = wh.rv(_a) ^ wh.rv(_b);
                            break;
                        case '&':
                            _d = wh.rv(_a) & wh.rv(_b);
                            break;
                        case '===':
                            _d = wh.rv(_a) === wh.rv(_b);
                            break;
                        case '==':
                            _d = wh.rv(_a) == wh.rv(_b);
                            break;
                        case '!=':
                            _d = wh.rv(_a) != wh.rv(_b);
                            break;
                        case '!==':
                            _d = wh.rv(_a) !== wh.rv(_b);
                            break;
                        case '>=':
                            _d = wh.rv(_a) >= wh.rv(_b);
                            break;
                        case '<=':
                            _d = wh.rv(_a) <= wh.rv(_b);
                            break;
                        case '>':
                            _d = wh.rv(_a) > wh.rv(_b);
                            break;
                        case '<':
                            _d = wh.rv(_a) < wh.rv(_b);
                            break;
                        case '<<':
                            _d = wh.rv(_a) << wh.rv(_b);
                            break;
                        case '>>':
                            _d = wh.rv(_a) >> wh.rv(_b);
                            break;
                        default:
                            break;
                    }
                    return _c ? wh.nh(_d, 'c') : _d;
                    break;
                case '-':
                    _a = ops.length === 3 ? rev(ops[1], e, s, g, o, _f) : 0;
                    _b = ops.length === 3 ? rev(ops[2], e, s, g, o, _f) : rev(ops[1], e, s, g, o, _f);
                    _c = should_pass_type_info && (wh.hn(_a) === 'h' || wh.hn(_b) === 'h');
                    _d = _c ? wh.rv(_a) - wh.rv(_b) : _a - _b;
                    return _c ? wh.nh(_d, 'c') : _d;
                    break;
                case '!':
                    _a = rev(ops[1], e, s, g, o, _f);
                    _c = should_pass_type_info && wh.hn(_a) == 'h';
                    _d = !wh.rv(_a);
                    return _c ? wh.nh(_d, 'c') : _d;
                case '~':
                    _a = rev(ops[1], e, s, g, o, _f);
                    _c = should_pass_type_info && wh.hn(_a) == 'h';
                    _d = ~wh.rv(_a);
                    return _c ? wh.nh(_d, 'c') : _d;
                default:
                    $gwn('unrecognized op' + rop);
            }
        }
        function rev(ops, e, s, g, o, newap) {
            var op = ops[0];
            var _f = false;
            if (typeof newap !== 'undefined') o.ap = newap;
            if (typeof op === 'object') {
                var vop = op[0];
                var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
                switch (vop) {
                    case 2:
                        return ArithmeticEv(ops, e, s, g, o);
                        break;
                    case 4:
                        return rev(ops[1], e, s, g, o, _f);
                        break;
                    case 5:
                        switch (ops.length) {
                            case 2:
                                _a = rev(ops[1], e, s, g, o, _f);
                                return should_pass_type_info ? [_a] : [wh.rv(_a)];
                                return [_a];
                                break;
                            case 1:
                                return [];
                                break;
                            default:
                                _a = rev(ops[1], e, s, g, o, _f);
                                _b = rev(ops[2], e, s, g, o, _f);
                                _a.push(should_pass_type_info ? _b : wh.rv(_b));
                                return _a;
                                break;
                        }
                        break;
                    case 6:
                        _a = rev(ops[1], e, s, g, o);
                        var ap = o.ap;
                        _ta = wh.hn(_a) === 'h';
                        _aa = _ta ? wh.rv(_a) : _a;
                        o.is_affected |= _ta;
                        if (should_pass_type_info) {
                            if (_aa === null || typeof _aa === 'undefined') {
                                return _ta ? wh.nh(undefined, 'e') : undefined;
                            }
                            _b = rev(ops[2], e, s, g, o, _f);
                            _tb = wh.hn(_b) === 'h';
                            _bb = _tb ? wh.rv(_b) : _b;
                            o.ap = ap;
                            o.is_affected |= _tb;
                            if (_bb === null || typeof _bb === 'undefined' || _bb === '__proto__' || _bb === 'prototype' || _bb === 'caller') {
                                return _ta || _tb ? wh.nh(undefined, 'e') : undefined;
                            }
                            _d = _aa[_bb];
                            if (typeof _d === 'function' && !ap) _d = undefined;
                            _td = wh.hn(_d) === 'h';
                            o.is_affected |= _td;
                            return _ta || _tb ? (_td ? _d : wh.nh(_d, 'e')) : _d;
                        } else {
                            if (_aa === null || typeof _aa === 'undefined') {
                                return undefined;
                            }
                            _b = rev(ops[2], e, s, g, o, _f);
                            _tb = wh.hn(_b) === 'h';
                            _bb = _tb ? wh.rv(_b) : _b;
                            o.ap = ap;
                            o.is_affected |= _tb;
                            if (_bb === null || typeof _bb === 'undefined' || _bb === '__proto__' || _bb === 'prototype' || _bb === 'caller') {
                                return undefined;
                            }
                            _d = _aa[_bb];
                            if (typeof _d === 'function' && !ap) _d = undefined;
                            _td = wh.hn(_d) === 'h';
                            o.is_affected |= _td;
                            return _td ? wh.rv(_d) : _d;
                        }
                    case 7:
                        switch (ops[1][0]) {
                            case 11:
                                o.is_affected |= wh.hn(g) === 'h';
                                return g;
                            case 3:
                                _s = wh.rv(s);
                                _e = wh.rv(e);
                                _b = ops[1][1];
                                if (g && g.f && g.f.hasOwnProperty(_b)) {
                                    _a = g.f;
                                    o.ap = true;
                                } else {
                                    _a = _s && _s.hasOwnProperty(_b) ? s : _e && _e.hasOwnProperty(_b) ? e : undefined;
                                }
                                if (should_pass_type_info) {
                                    if (_a) {
                                        _ta = wh.hn(_a) === 'h';
                                        _aa = _ta ? wh.rv(_a) : _a;
                                        _d = _aa[_b];
                                        _td = wh.hn(_d) === 'h';
                                        o.is_affected |= _ta || _td;
                                        _d = _ta && !_td ? wh.nh(_d, 'e') : _d;
                                        return _d;
                                    }
                                } else {
                                    if (_a) {
                                        _ta = wh.hn(_a) === 'h';
                                        _aa = _ta ? wh.rv(_a) : _a;
                                        _d = _aa[_b];
                                        _td = wh.hn(_d) === 'h';
                                        o.is_affected |= _ta || _td;
                                        return wh.rv(_d);
                                    }
                                }
                                return undefined;
                        }
                        break;
                    case 8:
                        _a = {};
                        _a[ops[1]] = rev(ops[2], e, s, g, o, _f);
                        return _a;
                        break;
                    case 9:
                        _a = rev(ops[1], e, s, g, o, _f);
                        _b = rev(ops[2], e, s, g, o, _f);
                        function merge(_a, _b, _ow) {
                            var ka, _bbk;
                            _ta = wh.hn(_a) === 'h';
                            _tb = wh.hn(_b) === 'h';
                            _aa = wh.rv(_a);
                            _bb = wh.rv(_b);
                            for (var k in _bb) {
                                if (_ow || !_aa.hasOwnProperty(k)) {
                                    _aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k], 'e') : _bb[k]) : wh.rv(_bb[k]);
                                }
                            }
                            return _a;
                        }
                        var _c = _a;
                        var _ow = true;
                        if (typeof ops[1][0] === 'object' && ops[1][0][0] === 10) {
                            _a = _b;
                            _b = _c;
                            _ow = false;
                        }
                        if (typeof ops[1][0] === 'object' && ops[1][0][0] === 10) {
                            var _r = {};
                            return merge(merge(_r, _a, _ow), _b, _ow);
                        } else return merge(_a, _b, _ow);
                        break;
                    case 10:
                        _a = rev(ops[1], e, s, g, o, _f);
                        _a = should_pass_type_info ? _a : wh.rv(_a);
                        return _a;
                        break;
                    case 12:
                        var _r;
                        _a = rev(ops[1], e, s, g, o);
                        if (!o.ap) {
                            return should_pass_type_info && wh.hn(_a) === 'h' ? wh.nh(_r, 'f') : _r;
                        }
                        var ap = o.ap;
                        _b = rev(ops[2], e, s, g, o, _f);
                        o.ap = ap;
                        _ta = wh.hn(_a) === 'h';
                        _tb = _ca(_b);
                        _aa = wh.rv(_a);
                        _bb = wh.rv(_b);
                        snap_bb = $gdc(_bb, 'nv_');
                        try {
                            _r = typeof _aa === 'function' ? $gdc(_aa.apply(null, snap_bb)) : undefined;
                        } catch (e) {
                            e.message = e.message.replace(/nv_/g, '');
                            e.stack = e.stack.substring(0, e.stack.indexOf('\n', e.stack.lastIndexOf('at nv_')));
                            e.stack = e.stack.replace(/\snv_/g, ' ');
                            e.stack = $gstack(e.stack);
                            if (g.debugInfo) {
                                e.stack += '\n ' + ' ' + ' ' + ' at ' + g.debugInfo[0] + ':' + g.debugInfo[1] + ':' + g.debugInfo[2];
                                console.error(e);
                            }
                            _r = undefined;
                        }
                        return should_pass_type_info && (_tb || _ta) ? wh.nh(_r, 'f') : _r;
                }
            } else {
                if (op === 3 || op === 1) return ops[1];
                else if (op === 11) {
                    var _a = '';
                    for (var i = 1; i < ops.length; i++) {
                        var xp = wh.rv(rev(ops[i], e, s, g, o, _f));
                        _a += typeof xp === 'undefined' ? '' : xp;
                    }
                    return _a;
                }
            }
        }
        function wrapper(ops, e, s, g, o, newap) {
            if (ops[0] == '11182016') {
                g.debugInfo = ops[2];
                return rev(ops[1], e, s, g, o, newap);
            } else {
                g.debugInfo = null;
                return rev(ops, e, s, g, o, newap);
            }
        }
        return wrapper;
    }
    gra = $gwrt(true);
    grb = $gwrt(false);
    function TestTest(expr, ops, e, s, g, expect_a, expect_b, expect_affected) {
        {
            var o = {
                is_affected: false
            };
            var a = gra(ops, e, s, g, o);
            if (JSON.stringify(a) != JSON.stringify(expect_a) || o.is_affected != expect_affected) {
                console.warn(
                    'A. ' + expr + ' get result ' + JSON.stringify(a) + ', ' + o.is_affected + ', but ' + JSON.stringify(expect_a) + ', ' + expect_affected + ' is expected'
                );
            }
        }
        {
            var o = {
                is_affected: false
            };
            var a = grb(ops, e, s, g, o);
            if (JSON.stringify(a) != JSON.stringify(expect_b) || o.is_affected != expect_affected) {
                console.warn(
                    'B. ' + expr + ' get result ' + JSON.stringify(a) + ', ' + o.is_affected + ', but ' + JSON.stringify(expect_b) + ', ' + expect_affected + ' is expected'
                );
            }
        }
    }
    function wfor(to_iter, func, env, _s, global, father, itemname, indexname, keyname) {
        var _n = wh.hn(to_iter) === 'n';
        var scope = wh.rv(_s);
        var has_old_item = scope.hasOwnProperty(itemname);
        var has_old_index = scope.hasOwnProperty(indexname);
        var old_item = scope[itemname];
        var old_index = scope[indexname];
        var full = Object.prototype.toString.call(wh.rv(to_iter));
        var type = full[8];
        if (type === 'N' && full[10] === 'l') type = 'X';
        var _y;
        if (_n) {
            if (type === 'A') {
                var r_iter_item;
                for (var i = 0; i < to_iter.length; i++) {
                    scope[itemname] = to_iter[i];
                    scope[indexname] = _n ? i : wh.nh(i, 'h');
                    r_iter_item = wh.rv(to_iter[i]);
                    var key = keyname && r_iter_item ? (keyname === '*this' ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
                    _y = _v(key);
                    _(father, _y);
                    func(env, scope, _y, global);
                }
            } else if (type === 'O') {
                var i = 0;
                var r_iter_item;
                for (var k in to_iter) {
                    scope[itemname] = to_iter[k];
                    scope[indexname] = _n ? k : wh.nh(k, 'h');
                    r_iter_item = wh.rv(to_iter[k]);
                    var key = keyname && r_iter_item ? (keyname === '*this' ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
                    _y = _v(key);
                    _(father, _y);
                    func(env, scope, _y, global);
                    i++;
                }
            } else if (type === 'S') {
                for (var i = 0; i < to_iter.length; i++) {
                    scope[itemname] = to_iter[i];
                    scope[indexname] = _n ? i : wh.nh(i, 'h');
                    _y = _v(to_iter[i] + i);
                    _(father, _y);
                    func(env, scope, _y, global);
                }
            } else if (type === 'N') {
                for (var i = 0; i < to_iter; i++) {
                    scope[itemname] = i;
                    scope[indexname] = _n ? i : wh.nh(i, 'h');
                    _y = _v(i);
                    _(father, _y);
                    func(env, scope, _y, global);
                }
            } else {
            }
        } else {
            var r_to_iter = wh.rv(to_iter);
            var r_iter_item, iter_item;
            if (type === 'A') {
                for (var i = 0; i < r_to_iter.length; i++) {
                    iter_item = r_to_iter[i];
                    iter_item = wh.hn(iter_item) === 'n' ? wh.nh(iter_item, 'h') : iter_item;
                    r_iter_item = wh.rv(iter_item);
                    scope[itemname] = iter_item;
                    scope[indexname] = _n ? i : wh.nh(i, 'h');
                    var key = keyname && r_iter_item ? (keyname === '*this' ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
                    _y = _v(key);
                    _(father, _y);
                    func(env, scope, _y, global);
                }
            } else if (type === 'O') {
                var i = 0;
                for (var k in r_to_iter) {
                    iter_item = r_to_iter[k];
                    iter_item = wh.hn(iter_item) === 'n' ? wh.nh(iter_item, 'h') : iter_item;
                    r_iter_item = wh.rv(iter_item);
                    scope[itemname] = iter_item;
                    scope[indexname] = _n ? k : wh.nh(k, 'h');
                    var key = keyname && r_iter_item ? (keyname === '*this' ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
                    _y = _v(key);
                    _(father, _y);
                    func(env, scope, _y, global);
                    i++;
                }
            } else if (type === 'S') {
                for (var i = 0; i < r_to_iter.length; i++) {
                    iter_item = wh.nh(r_to_iter[i], 'h');
                    scope[itemname] = iter_item;
                    scope[indexname] = _n ? i : wh.nh(i, 'h');
                    _y = _v(to_iter[i] + i);
                    _(father, _y);
                    func(env, scope, _y, global);
                }
            } else if (type === 'N') {
                for (var i = 0; i < r_to_iter; i++) {
                    iter_item = wh.nh(i, 'h');
                    scope[itemname] = iter_item;
                    scope[indexname] = _n ? i : wh.nh(i, 'h');
                    _y = _v(i);
                    _(father, _y);
                    func(env, scope, _y, global);
                }
            } else {
            }
        }
        if (has_old_item) {
            scope[itemname] = old_item;
        } else {
            delete scope[itemname];
        }
        if (has_old_index) {
            scope[indexname] = old_index;
        } else {
            delete scope[indexname];
        }
    }
    function _ca(o) {
        if (wh.hn(o) == 'h') return true;
        if (typeof o !== 'object') return false;
        for (var i in o) {
            if (o.hasOwnProperty(i)) {
                if (_ca(o[i])) return true;
            }
        }
        return false;
    }
    function _da(node, attrname, opindex, raw, o) {
        var isaffected = false;
        var value = $gdc(raw, '', 2);
        if (o.ap && value && value.constructor === Function) {
            attrname = '$wxs:' + attrname;
            node.attr['$gdc'] = $gdc;
        }
        if (o.is_affected || _ca(raw)) {
            node.n.push(attrname);
            node.raw[attrname] = raw;
        }
        node.attr[attrname] = value;
    }
    function _r(node, attrname, opindex, env, scope, global) {
        global.opindex = opindex;
        var o = {},
            _env;
        var a = grb(z[opindex], env, scope, global, o);
        _da(node, attrname, opindex, a, o);
    }
    function _rz(z, node, attrname, opindex, env, scope, global) {
        global.opindex = opindex;
        var o = {},
            _env;
        var a = grb(z[opindex], env, scope, global, o);
        _da(node, attrname, opindex, a, o);
    }
    function _o(opindex, env, scope, global) {
        global.opindex = opindex;
        var nothing = {};
        var r = grb(z[opindex], env, scope, global, nothing);
        return r && r.constructor === Function ? undefined : r;
    }
    function _oz(z, opindex, env, scope, global) {
        global.opindex = opindex;
        var nothing = {};
        var r = grb(z[opindex], env, scope, global, nothing);
        return r && r.constructor === Function ? undefined : r;
    }
    function _1(opindex, env, scope, global, o) {
        var o = o || {};
        global.opindex = opindex;
        return gra(z[opindex], env, scope, global, o);
    }
    function _1z(z, opindex, env, scope, global, o) {
        var o = o || {};
        global.opindex = opindex;
        return gra(z[opindex], env, scope, global, o);
    }
    function _2(opindex, func, env, scope, global, father, itemname, indexname, keyname) {
        var o = {};
        var to_iter = _1(opindex, env, scope, global);
        wfor(to_iter, func, env, scope, global, father, itemname, indexname, keyname);
    }
    function _2z(z, opindex, func, env, scope, global, father, itemname, indexname, keyname) {
        var o = {};
        var to_iter = _1z(z, opindex, env, scope, global);
        wfor(to_iter, func, env, scope, global, father, itemname, indexname, keyname);
    }
    function _m(tag, attrs, generics, env, scope, global) {
        var tmp = _n(tag);
        var base = 0;
        for (var i = 0; i < attrs.length; i += 2) {
            if (base + attrs[i + 1] < 0) {
                tmp.attr[attrs[i]] = true;
            } else {
                _r(tmp, attrs[i], base + attrs[i + 1], env, scope, global);
                if (base === 0) base = attrs[i + 1];
            }
        }
        for (var i = 0; i < generics.length; i += 2) {
            if (base + generics[i + 1] < 0) {
                tmp.generics[generics[i]] = '';
            } else {
                var $t = grb(z[base + generics[i + 1]], env, scope, global);
                if ($t != '') $t = 'wx-' + $t;
                tmp.generics[generics[i]] = $t;
                if (base === 0) base = generics[i + 1];
            }
        }
        return tmp;
    }
    function _mz(z, tag, attrs, generics, env, scope, global) {
        var tmp = _n(tag);
        var base = 0;
        for (var i = 0; i < attrs.length; i += 2) {
            if (base + attrs[i + 1] < 0) {
                tmp.attr[attrs[i]] = true;
            } else {
                _rz(z, tmp, attrs[i], base + attrs[i + 1], env, scope, global);
                if (base === 0) base = attrs[i + 1];
            }
        }
        for (var i = 0; i < generics.length; i += 2) {
            if (base + generics[i + 1] < 0) {
                tmp.generics[generics[i]] = '';
            } else {
                var $t = grb(z[base + generics[i + 1]], env, scope, global);
                if ($t != '') $t = 'wx-' + $t;
                tmp.generics[generics[i]] = $t;
                if (base === 0) base = generics[i + 1];
            }
        }
        return tmp;
    }
    var nf_init = function () {
        if (typeof __WXML_GLOBAL__ === 'undefined' || undefined === __WXML_GLOBAL__.wxs_nf_init) {
            nf_init_Object();
            nf_init_Function();
            nf_init_Array();
            nf_init_String();
            nf_init_Boolean();
            nf_init_Number();
            nf_init_Math();
            nf_init_Date();
            nf_init_RegExp();
        }
        if (typeof __WXML_GLOBAL__ !== 'undefined') __WXML_GLOBAL__.wxs_nf_init = true;
    };
    var nf_init_Object = function () {
        Object.defineProperty(Object.prototype, 'nv_constructor', {
            writable: true,
            value: 'Object'
        });
        Object.defineProperty(Object.prototype, 'nv_toString', {
            writable: true,
            value: function () {
                return '[object Object]';
            }
        });
    };
    var nf_init_Function = function () {
        Object.defineProperty(Function.prototype, 'nv_constructor', {
            writable: true,
            value: 'Function'
        });
        Object.defineProperty(Function.prototype, 'nv_length', {
            get: function () {
                return this.length;
            },
            set: function () {}
        });
        Object.defineProperty(Function.prototype, 'nv_toString', {
            writable: true,
            value: function () {
                return '[function Function]';
            }
        });
    };
    var nf_init_Array = function () {
        Object.defineProperty(Array.prototype, 'nv_toString', {
            writable: true,
            value: function () {
                return this.nv_join();
            }
        });
        Object.defineProperty(Array.prototype, 'nv_join', {
            writable: true,
            value: function (s) {
                s = undefined == s ? ',' : s;
                var r = '';
                for (var i = 0; i < this.length; ++i) {
                    if (0 != i) r += s;
                    if (null == this[i] || undefined == this[i]) r += '';
                    else if (typeof this[i] == 'function') r += this[i].nv_toString();
                    else if (typeof this[i] == 'object' && this[i].nv_constructor === 'Array') r += this[i].nv_join();
                    else r += this[i].toString();
                }
                return r;
            }
        });
        Object.defineProperty(Array.prototype, 'nv_constructor', {
            writable: true,
            value: 'Array'
        });
        Object.defineProperty(Array.prototype, 'nv_concat', {
            writable: true,
            value: Array.prototype.concat
        });
        Object.defineProperty(Array.prototype, 'nv_pop', {
            writable: true,
            value: Array.prototype.pop
        });
        Object.defineProperty(Array.prototype, 'nv_push', {
            writable: true,
            value: Array.prototype.push
        });
        Object.defineProperty(Array.prototype, 'nv_reverse', {
            writable: true,
            value: Array.prototype.reverse
        });
        Object.defineProperty(Array.prototype, 'nv_shift', {
            writable: true,
            value: Array.prototype.shift
        });
        Object.defineProperty(Array.prototype, 'nv_slice', {
            writable: true,
            value: Array.prototype.slice
        });
        Object.defineProperty(Array.prototype, 'nv_sort', {
            writable: true,
            value: Array.prototype.sort
        });
        Object.defineProperty(Array.prototype, 'nv_splice', {
            writable: true,
            value: Array.prototype.splice
        });
        Object.defineProperty(Array.prototype, 'nv_unshift', {
            writable: true,
            value: Array.prototype.unshift
        });
        Object.defineProperty(Array.prototype, 'nv_indexOf', {
            writable: true,
            value: Array.prototype.indexOf
        });
        Object.defineProperty(Array.prototype, 'nv_lastIndexOf', {
            writable: true,
            value: Array.prototype.lastIndexOf
        });
        Object.defineProperty(Array.prototype, 'nv_every', {
            writable: true,
            value: Array.prototype.every
        });
        Object.defineProperty(Array.prototype, 'nv_some', {
            writable: true,
            value: Array.prototype.some
        });
        Object.defineProperty(Array.prototype, 'nv_forEach', {
            writable: true,
            value: Array.prototype.forEach
        });
        Object.defineProperty(Array.prototype, 'nv_map', {
            writable: true,
            value: Array.prototype.map
        });
        Object.defineProperty(Array.prototype, 'nv_filter', {
            writable: true,
            value: Array.prototype.filter
        });
        Object.defineProperty(Array.prototype, 'nv_reduce', {
            writable: true,
            value: Array.prototype.reduce
        });
        Object.defineProperty(Array.prototype, 'nv_reduceRight', {
            writable: true,
            value: Array.prototype.reduceRight
        });
        Object.defineProperty(Array.prototype, 'nv_length', {
            get: function () {
                return this.length;
            },
            set: function (value) {
                this.length = value;
            }
        });
    };
    var nf_init_String = function () {
        Object.defineProperty(String.prototype, 'nv_constructor', {
            writable: true,
            value: 'String'
        });
        Object.defineProperty(String.prototype, 'nv_toString', {
            writable: true,
            value: String.prototype.toString
        });
        Object.defineProperty(String.prototype, 'nv_valueOf', {
            writable: true,
            value: String.prototype.valueOf
        });
        Object.defineProperty(String.prototype, 'nv_charAt', {
            writable: true,
            value: String.prototype.charAt
        });
        Object.defineProperty(String.prototype, 'nv_charCodeAt', {
            writable: true,
            value: String.prototype.charCodeAt
        });
        Object.defineProperty(String.prototype, 'nv_concat', {
            writable: true,
            value: String.prototype.concat
        });
        Object.defineProperty(String.prototype, 'nv_indexOf', {
            writable: true,
            value: String.prototype.indexOf
        });
        Object.defineProperty(String.prototype, 'nv_lastIndexOf', {
            writable: true,
            value: String.prototype.lastIndexOf
        });
        Object.defineProperty(String.prototype, 'nv_localeCompare', {
            writable: true,
            value: String.prototype.localeCompare
        });
        Object.defineProperty(String.prototype, 'nv_match', {
            writable: true,
            value: String.prototype.match
        });
        Object.defineProperty(String.prototype, 'nv_replace', {
            writable: true,
            value: String.prototype.replace
        });
        Object.defineProperty(String.prototype, 'nv_search', {
            writable: true,
            value: String.prototype.search
        });
        Object.defineProperty(String.prototype, 'nv_slice', {
            writable: true,
            value: String.prototype.slice
        });
        Object.defineProperty(String.prototype, 'nv_split', {
            writable: true,
            value: String.prototype.split
        });
        Object.defineProperty(String.prototype, 'nv_substring', {
            writable: true,
            value: String.prototype.substring
        });
        Object.defineProperty(String.prototype, 'nv_toLowerCase', {
            writable: true,
            value: String.prototype.toLowerCase
        });
        Object.defineProperty(String.prototype, 'nv_toLocaleLowerCase', {
            writable: true,
            value: String.prototype.toLocaleLowerCase
        });
        Object.defineProperty(String.prototype, 'nv_toUpperCase', {
            writable: true,
            value: String.prototype.toUpperCase
        });
        Object.defineProperty(String.prototype, 'nv_toLocaleUpperCase', {
            writable: true,
            value: String.prototype.toLocaleUpperCase
        });
        Object.defineProperty(String.prototype, 'nv_trim', {
            writable: true,
            value: String.prototype.trim
        });
        Object.defineProperty(String.prototype, 'nv_length', {
            get: function () {
                return this.length;
            },
            set: function (value) {
                this.length = value;
            }
        });
    };
    var nf_init_Boolean = function () {
        Object.defineProperty(Boolean.prototype, 'nv_constructor', {
            writable: true,
            value: 'Boolean'
        });
        Object.defineProperty(Boolean.prototype, 'nv_toString', {
            writable: true,
            value: Boolean.prototype.toString
        });
        Object.defineProperty(Boolean.prototype, 'nv_valueOf', {
            writable: true,
            value: Boolean.prototype.valueOf
        });
    };
    var nf_init_Number = function () {
        Object.defineProperty(Number, 'nv_MAX_VALUE', {
            writable: false,
            value: Number.MAX_VALUE
        });
        Object.defineProperty(Number, 'nv_MIN_VALUE', {
            writable: false,
            value: Number.MIN_VALUE
        });
        Object.defineProperty(Number, 'nv_NEGATIVE_INFINITY', {
            writable: false,
            value: Number.NEGATIVE_INFINITY
        });
        Object.defineProperty(Number, 'nv_POSITIVE_INFINITY', {
            writable: false,
            value: Number.POSITIVE_INFINITY
        });
        Object.defineProperty(Number.prototype, 'nv_constructor', {
            writable: true,
            value: 'Number'
        });
        Object.defineProperty(Number.prototype, 'nv_toString', {
            writable: true,
            value: Number.prototype.toString
        });
        Object.defineProperty(Number.prototype, 'nv_toLocaleString', {
            writable: true,
            value: Number.prototype.toLocaleString
        });
        Object.defineProperty(Number.prototype, 'nv_valueOf', {
            writable: true,
            value: Number.prototype.valueOf
        });
        Object.defineProperty(Number.prototype, 'nv_toFixed', {
            writable: true,
            value: Number.prototype.toFixed
        });
        Object.defineProperty(Number.prototype, 'nv_toExponential', {
            writable: true,
            value: Number.prototype.toExponential
        });
        Object.defineProperty(Number.prototype, 'nv_toPrecision', {
            writable: true,
            value: Number.prototype.toPrecision
        });
    };
    var nf_init_Math = function () {
        Object.defineProperty(Math, 'nv_E', {
            writable: false,
            value: Math.E
        });
        Object.defineProperty(Math, 'nv_LN10', {
            writable: false,
            value: Math.LN10
        });
        Object.defineProperty(Math, 'nv_LN2', {
            writable: false,
            value: Math.LN2
        });
        Object.defineProperty(Math, 'nv_LOG2E', {
            writable: false,
            value: Math.LOG2E
        });
        Object.defineProperty(Math, 'nv_LOG10E', {
            writable: false,
            value: Math.LOG10E
        });
        Object.defineProperty(Math, 'nv_PI', {
            writable: false,
            value: Math.PI
        });
        Object.defineProperty(Math, 'nv_SQRT1_2', {
            writable: false,
            value: Math.SQRT1_2
        });
        Object.defineProperty(Math, 'nv_SQRT2', {
            writable: false,
            value: Math.SQRT2
        });
        Object.defineProperty(Math, 'nv_abs', {
            writable: false,
            value: Math.abs
        });
        Object.defineProperty(Math, 'nv_acos', {
            writable: false,
            value: Math.acos
        });
        Object.defineProperty(Math, 'nv_asin', {
            writable: false,
            value: Math.asin
        });
        Object.defineProperty(Math, 'nv_atan', {
            writable: false,
            value: Math.atan
        });
        Object.defineProperty(Math, 'nv_atan2', {
            writable: false,
            value: Math.atan2
        });
        Object.defineProperty(Math, 'nv_ceil', {
            writable: false,
            value: Math.ceil
        });
        Object.defineProperty(Math, 'nv_cos', {
            writable: false,
            value: Math.cos
        });
        Object.defineProperty(Math, 'nv_exp', {
            writable: false,
            value: Math.exp
        });
        Object.defineProperty(Math, 'nv_floor', {
            writable: false,
            value: Math.floor
        });
        Object.defineProperty(Math, 'nv_log', {
            writable: false,
            value: Math.log
        });
        Object.defineProperty(Math, 'nv_max', {
            writable: false,
            value: Math.max
        });
        Object.defineProperty(Math, 'nv_min', {
            writable: false,
            value: Math.min
        });
        Object.defineProperty(Math, 'nv_pow', {
            writable: false,
            value: Math.pow
        });
        Object.defineProperty(Math, 'nv_random', {
            writable: false,
            value: Math.random
        });
        Object.defineProperty(Math, 'nv_round', {
            writable: false,
            value: Math.round
        });
        Object.defineProperty(Math, 'nv_sin', {
            writable: false,
            value: Math.sin
        });
        Object.defineProperty(Math, 'nv_sqrt', {
            writable: false,
            value: Math.sqrt
        });
        Object.defineProperty(Math, 'nv_tan', {
            writable: false,
            value: Math.tan
        });
    };
    var nf_init_Date = function () {
        Object.defineProperty(Date.prototype, 'nv_constructor', {
            writable: true,
            value: 'Date'
        });
        Object.defineProperty(Date, 'nv_parse', {
            writable: true,
            value: Date.parse
        });
        Object.defineProperty(Date, 'nv_UTC', {
            writable: true,
            value: Date.UTC
        });
        Object.defineProperty(Date, 'nv_now', {
            writable: true,
            value: Date.now
        });
        Object.defineProperty(Date.prototype, 'nv_toString', {
            writable: true,
            value: Date.prototype.toString
        });
        Object.defineProperty(Date.prototype, 'nv_toDateString', {
            writable: true,
            value: Date.prototype.toDateString
        });
        Object.defineProperty(Date.prototype, 'nv_toTimeString', {
            writable: true,
            value: Date.prototype.toTimeString
        });
        Object.defineProperty(Date.prototype, 'nv_toLocaleString', {
            writable: true,
            value: Date.prototype.toLocaleString
        });
        Object.defineProperty(Date.prototype, 'nv_toLocaleDateString', {
            writable: true,
            value: Date.prototype.toLocaleDateString
        });
        Object.defineProperty(Date.prototype, 'nv_toLocaleTimeString', {
            writable: true,
            value: Date.prototype.toLocaleTimeString
        });
        Object.defineProperty(Date.prototype, 'nv_valueOf', {
            writable: true,
            value: Date.prototype.valueOf
        });
        Object.defineProperty(Date.prototype, 'nv_getTime', {
            writable: true,
            value: Date.prototype.getTime
        });
        Object.defineProperty(Date.prototype, 'nv_getFullYear', {
            writable: true,
            value: Date.prototype.getFullYear
        });
        Object.defineProperty(Date.prototype, 'nv_getUTCFullYear', {
            writable: true,
            value: Date.prototype.getUTCFullYear
        });
        Object.defineProperty(Date.prototype, 'nv_getMonth', {
            writable: true,
            value: Date.prototype.getMonth
        });
        Object.defineProperty(Date.prototype, 'nv_getUTCMonth', {
            writable: true,
            value: Date.prototype.getUTCMonth
        });
        Object.defineProperty(Date.prototype, 'nv_getDate', {
            writable: true,
            value: Date.prototype.getDate
        });
        Object.defineProperty(Date.prototype, 'nv_getUTCDate', {
            writable: true,
            value: Date.prototype.getUTCDate
        });
        Object.defineProperty(Date.prototype, 'nv_getDay', {
            writable: true,
            value: Date.prototype.getDay
        });
        Object.defineProperty(Date.prototype, 'nv_getUTCDay', {
            writable: true,
            value: Date.prototype.getUTCDay
        });
        Object.defineProperty(Date.prototype, 'nv_getHours', {
            writable: true,
            value: Date.prototype.getHours
        });
        Object.defineProperty(Date.prototype, 'nv_getUTCHours', {
            writable: true,
            value: Date.prototype.getUTCHours
        });
        Object.defineProperty(Date.prototype, 'nv_getMinutes', {
            writable: true,
            value: Date.prototype.getMinutes
        });
        Object.defineProperty(Date.prototype, 'nv_getUTCMinutes', {
            writable: true,
            value: Date.prototype.getUTCMinutes
        });
        Object.defineProperty(Date.prototype, 'nv_getSeconds', {
            writable: true,
            value: Date.prototype.getSeconds
        });
        Object.defineProperty(Date.prototype, 'nv_getUTCSeconds', {
            writable: true,
            value: Date.prototype.getUTCSeconds
        });
        Object.defineProperty(Date.prototype, 'nv_getMilliseconds', {
            writable: true,
            value: Date.prototype.getMilliseconds
        });
        Object.defineProperty(Date.prototype, 'nv_getUTCMilliseconds', {
            writable: true,
            value: Date.prototype.getUTCMilliseconds
        });
        Object.defineProperty(Date.prototype, 'nv_getTimezoneOffset', {
            writable: true,
            value: Date.prototype.getTimezoneOffset
        });
        Object.defineProperty(Date.prototype, 'nv_setTime', {
            writable: true,
            value: Date.prototype.setTime
        });
        Object.defineProperty(Date.prototype, 'nv_setMilliseconds', {
            writable: true,
            value: Date.prototype.setMilliseconds
        });
        Object.defineProperty(Date.prototype, 'nv_setUTCMilliseconds', {
            writable: true,
            value: Date.prototype.setUTCMilliseconds
        });
        Object.defineProperty(Date.prototype, 'nv_setSeconds', {
            writable: true,
            value: Date.prototype.setSeconds
        });
        Object.defineProperty(Date.prototype, 'nv_setUTCSeconds', {
            writable: true,
            value: Date.prototype.setUTCSeconds
        });
        Object.defineProperty(Date.prototype, 'nv_setMinutes', {
            writable: true,
            value: Date.prototype.setMinutes
        });
        Object.defineProperty(Date.prototype, 'nv_setUTCMinutes', {
            writable: true,
            value: Date.prototype.setUTCMinutes
        });
        Object.defineProperty(Date.prototype, 'nv_setHours', {
            writable: true,
            value: Date.prototype.setHours
        });
        Object.defineProperty(Date.prototype, 'nv_setUTCHours', {
            writable: true,
            value: Date.prototype.setUTCHours
        });
        Object.defineProperty(Date.prototype, 'nv_setDate', {
            writable: true,
            value: Date.prototype.setDate
        });
        Object.defineProperty(Date.prototype, 'nv_setUTCDate', {
            writable: true,
            value: Date.prototype.setUTCDate
        });
        Object.defineProperty(Date.prototype, 'nv_setMonth', {
            writable: true,
            value: Date.prototype.setMonth
        });
        Object.defineProperty(Date.prototype, 'nv_setUTCMonth', {
            writable: true,
            value: Date.prototype.setUTCMonth
        });
        Object.defineProperty(Date.prototype, 'nv_setFullYear', {
            writable: true,
            value: Date.prototype.setFullYear
        });
        Object.defineProperty(Date.prototype, 'nv_setUTCFullYear', {
            writable: true,
            value: Date.prototype.setUTCFullYear
        });
        Object.defineProperty(Date.prototype, 'nv_toUTCString', {
            writable: true,
            value: Date.prototype.toUTCString
        });
        Object.defineProperty(Date.prototype, 'nv_toISOString', {
            writable: true,
            value: Date.prototype.toISOString
        });
        Object.defineProperty(Date.prototype, 'nv_toJSON', {
            writable: true,
            value: Date.prototype.toJSON
        });
    };
    var nf_init_RegExp = function () {
        Object.defineProperty(RegExp.prototype, 'nv_constructor', {
            writable: true,
            value: 'RegExp'
        });
        Object.defineProperty(RegExp.prototype, 'nv_exec', {
            writable: true,
            value: RegExp.prototype.exec
        });
        Object.defineProperty(RegExp.prototype, 'nv_test', {
            writable: true,
            value: RegExp.prototype.test
        });
        Object.defineProperty(RegExp.prototype, 'nv_toString', {
            writable: true,
            value: RegExp.prototype.toString
        });
        Object.defineProperty(RegExp.prototype, 'nv_source', {
            get: function () {
                return this.source;
            },
            set: function () {}
        });
        Object.defineProperty(RegExp.prototype, 'nv_global', {
            get: function () {
                return this.global;
            },
            set: function () {}
        });
        Object.defineProperty(RegExp.prototype, 'nv_ignoreCase', {
            get: function () {
                return this.ignoreCase;
            },
            set: function () {}
        });
        Object.defineProperty(RegExp.prototype, 'nv_multiline', {
            get: function () {
                return this.multiline;
            },
            set: function () {}
        });
        Object.defineProperty(RegExp.prototype, 'nv_lastIndex', {
            get: function () {
                return this.lastIndex;
            },
            set: function (v) {
                this.lastIndex = v;
            }
        });
    };
    nf_init();
    var nv_getDate = function () {
        var args = Array.prototype.slice.call(arguments);
        args.unshift(Date);
        return new (Function.prototype.bind.apply(Date, args))();
    };
    var nv_getRegExp = function () {
        var args = Array.prototype.slice.call(arguments);
        args.unshift(RegExp);
        return new (Function.prototype.bind.apply(RegExp, args))();
    };
    var nv_console = {};
    nv_console.nv_log = function () {
        var res = 'WXSRT:';
        for (var i = 0; i < arguments.length; ++i) res += arguments[i] + ' ';
        console.log(res);
    };
    var nv_parseInt = parseInt,
        nv_parseFloat = parseFloat,
        nv_isNaN = isNaN,
        nv_isFinite = isFinite,
        nv_decodeURI = decodeURI,
        nv_decodeURIComponent = decodeURIComponent,
        nv_encodeURI = encodeURI,
        nv_encodeURIComponent = encodeURIComponent;
    function $gdc(o, p, r) {
        o = wh.rv(o);
        if (o === null || o === undefined) return o;
        if (typeof o === 'string' || typeof o === 'boolean' || typeof o === 'number') return o;
        if (o.constructor === Object) {
            var copy = {};
            for (var k in o)
                if (Object.prototype.hasOwnProperty.call(o, k))
                    if (undefined === p) copy[k.substring(3)] = $gdc(o[k], p, r);
                    else copy[p + k] = $gdc(o[k], p, r);
            return copy;
        }
        if (o.constructor === Array) {
            var copy = [];
            for (var i = 0; i < o.length; i++) copy.push($gdc(o[i], p, r));
            return copy;
        }
        if (o.constructor === Date) {
            var copy = new Date();
            copy.setTime(o.getTime());
            return copy;
        }
        if (o.constructor === RegExp) {
            var f = '';
            if (o.global) f += 'g';
            if (o.ignoreCase) f += 'i';
            if (o.multiline) f += 'm';
            return new RegExp(o.source, f);
        }
        if (r && typeof o === 'function') {
            if (r == 1) return $gdc(o(), undefined, 2);
            if (r == 2) return o;
        }
        return null;
    }
    var nv_JSON = {};
    nv_JSON.nv_stringify = function (o) {
        JSON.stringify(o);
        return JSON.stringify($gdc(o));
    };
    nv_JSON.nv_parse = function (o) {
        if (o === undefined) return undefined;
        var t = JSON.parse(o);
        return $gdc(t, 'nv_');
    };
    function _af(p, a, r, c) {
        p.extraAttr = {
            t_action: a,
            t_rawid: r
        };
        if (typeof c != 'undefined') p.extraAttr.t_cid = c;
    }
    function _gv() {
        if (typeof window.__webview_engine_version__ == 'undefined') return 0.0;
        return window.__webview_engine_version__;
    }
    function _ai(i, p, e, me, r, c) {
        var x = _grp(p, e, me);
        if (x) i.push(x);
        else {
            i.push('');
            _wp(me + ':import:' + r + ':' + c + ': Path `' + p + '` not found from `' + me + '`.');
        }
    }
    function _grp(p, e, me) {
        if (p[0] != '/') {
            var mepart = me.split('/');
            mepart.pop();
            var ppart = p.split('/');
            for (var i = 0; i < ppart.length; i++) {
                if (ppart[i] == '..') mepart.pop();
                else if (!ppart[i] || ppart[i] == '.') continue;
                else mepart.push(ppart[i]);
            }
            p = mepart.join('/');
        }
        if (me[0] == '.' && p[0] == '/') p = '.' + p;
        if (e[p]) return p;
        if (e[p + '.wxml']) return p + '.wxml';
    }
    function _gd(p, c, e, d) {
        if (!c) return;
        if (d[p][c]) return d[p][c];
        for (var x = e[p].i.length - 1; x >= 0; x--) {
            if (e[p].i[x] && d[e[p].i[x]][c]) return d[e[p].i[x]][c];
        }
        for (var x = e[p].ti.length - 1; x >= 0; x--) {
            var q = _grp(e[p].ti[x], e, p);
            if (q && d[q][c]) return d[q][c];
        }
        var ii = _gapi(e, p);
        for (var x = 0; x < ii.length; x++) {
            if (ii[x] && d[ii[x]][c]) return d[ii[x]][c];
        }
        for (var k = e[p].j.length - 1; k >= 0; k--)
            if (e[p].j[k]) {
                for (var q = e[e[p].j[k]].ti.length - 1; q >= 0; q--) {
                    var pp = _grp(e[e[p].j[k]].ti[q], e, p);
                    if (pp && d[pp][c]) {
                        return d[pp][c];
                    }
                }
            }
    }
    function _gapi(e, p) {
        if (!p) return [];
        if ($gaic[p]) {
            return $gaic[p];
        }
        var ret = [],
            q = [],
            h = 0,
            t = 0,
            put = {},
            visited = {};
        q.push(p);
        visited[p] = true;
        t++;
        while (h < t) {
            var a = q[h++];
            for (var i = 0; i < e[a].ic.length; i++) {
                var nd = e[a].ic[i];
                var np = _grp(nd, e, a);
                if (np && !visited[np]) {
                    visited[np] = true;
                    q.push(np);
                    t++;
                }
            }
            for (var i = 0; a != p && i < e[a].ti.length; i++) {
                var ni = e[a].ti[i];
                var nm = _grp(ni, e, a);
                if (nm && !put[nm]) {
                    put[nm] = true;
                    ret.push(nm);
                }
            }
        }
        $gaic[p] = ret;
        return ret;
    }
    var $ixc = {};
    function _ic(p, ent, me, e, s, r, gg) {
        var x = _grp(p, ent, me);
        ent[me].j.push(x);
        if (x) {
            if ($ixc[x]) {
                _wp('-1:include:-1:-1: `' + p + '` is being included in a loop, will be stop.');
                return;
            }
            $ixc[x] = true;
            try {
                ent[x].f(e, s, r, gg);
            } catch (e) {}
            $ixc[x] = false;
        } else {
            _wp(me + ':include:-1:-1: Included path `' + p + '` not found from `' + me + '`.');
        }
    }
    function _w(tn, f, line, c) {
        _wp(f + ':template:' + line + ':' + c + ': Template `' + tn + '` not found.');
    }
    function _ev(dom) {
        var changed = false;
        delete dom.properities;
        delete dom.n;
        if (dom.children) {
            do {
                changed = false;
                var newch = [];
                for (var i = 0; i < dom.children.length; i++) {
                    var ch = dom.children[i];
                    if (ch.tag == 'virtual') {
                        changed = true;
                        for (var j = 0; ch.children && j < ch.children.length; j++) {
                            newch.push(ch.children[j]);
                        }
                    } else {
                        newch.push(ch);
                    }
                }
                dom.children = newch;
            } while (changed);
            for (var i = 0; i < dom.children.length; i++) {
                _ev(dom.children[i]);
            }
        }
        return dom;
    }
    function _tsd(root) {
        if (root.tag == 'wx-wx-scope') {
            root.tag = 'virtual';
            root.wxCkey = '11';
            root['wxScopeData'] = root.attr['wx:scope-data'];
            delete root.n;
            delete root.raw;
            delete root.generics;
            delete root.attr;
        }
        for (var i = 0; root.children && i < root.children.length; i++) {
            _tsd(root.children[i]);
        }
        return root;
    }
    var e_ = {};
    if (typeof global.entrys === 'undefined') global.entrys = {};
    e_ = global.entrys;
    var d_ = {};
    if (typeof global.defines === 'undefined') global.defines = {};
    d_ = global.defines;
    var f_ = {};
    if (typeof global.modules === 'undefined') global.modules = {};
    f_ = global.modules || {};
    var p_ = {};
    __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {};
    __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
    __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
    var z = __WXML_GLOBAL__.ops_set.$gwx0 || [];
    function gz$gwx0_1() {
        if (__WXML_GLOBAL__.ops_cached.$gwx0_1) return __WXML_GLOBAL__.ops_cached.$gwx0_1;
        __WXML_GLOBAL__.ops_cached.$gwx0_1 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'error']);
            Z([3, 'end']);
            Z([3, 'move']);
            Z([3, 'start']);
            Z([3, 'true']);
            Z([3, 'canvas']);
            Z([a, [3, 'width:'], [[7], [3, 'width']], [3, 'px;height:'], [[7], [3, 'height']], [3, 'px;']]);
            Z([3, '2d']);
            Z([3, 'template']);
            Z([a, [3, 'height:'], z[6][4], [3, 'px;line-height: '], z[6][4], z[6][5]]);
            Z([a, [[7], [3, 'customerName']]]);
            Z([3, 'btn']);
            Z([3, 'box']);
            Z([3, 'tips']);
            Z([3, '请本人进行签名，按照字迹填写更容易通过哦']);
            Z([3, 'clearClick']);
            Z([3, '重签']);
            Z([3, 'saveClick']);
            Z([3, 'color: #fff;']);
            Z([3, '确认']);
        })(__WXML_GLOBAL__.ops_cached.$gwx0_1);
        return __WXML_GLOBAL__.ops_cached.$gwx0_1;
    }
    function gz$gwx0_2() {
        if (__WXML_GLOBAL__.ops_cached.$gwx0_2) return __WXML_GLOBAL__.ops_cached.$gwx0_2;
        __WXML_GLOBAL__.ops_cached.$gwx0_2 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'com_letter_container']);
            Z([
                [2, '&&'],
                [[7], [3, 'doubleRecordBol']],
                [[7], [3, 'content']]
            ]);
            Z([a, [[7], [3, 'content']]]);
            Z([3, 'margin-top: 32rpx;']);
            Z([a, [3, '日期：'], [[7], [3, 'timeStr']]]);
            Z([
                [2, '&&'],
                [[7], [3, 'doubleRecordBol']],
                [
                    [2, '||'],
                    [[7], [3, 'signaturePath']],
                    [[7], [3, 'signatureUrl']]
                ]
            ]);
            Z([3, 'margin-top: 24rpx;']);
            Z([3, '承诺人：']);
            Z([3, 'sign_image']);
            Z([3, 'widthFix']);
            Z([
                [2, '?:'],
                [[7], [3, 'signaturePath']],
                [
                    [2, '+'],
                    [1, 'data:image/png;base64,'],
                    [[7], [3, 'signaturePath']]
                ],
                [[7], [3, 'signatureUrl']]
            ]);
            Z([3, 'com_letter_hint']);
            Z([3, '本人确认填写及提交的所有内容均为本人真实合法有效的个人信息。']);
            Z([3, 'eventConfirmNextStep']);
            Z([3, 'confirm_button']);
            Z([3, 'info']);
            Z([3, '认证']);
            Z(z[5]);
            Z([3, 'eventRewrite']);
            Z([3, 'rewrite']);
            Z([3, '重新签名']);
            Z([3, 'empty_box']);
            Z([3, 'empty']);
            Z(z[9]);
            Z([3, 'https://www.krppay.com/skb_assets/bg_empty_info.png']);
            Z([3, 'width: 353rpx;height: 430rpx;']);
        })(__WXML_GLOBAL__.ops_cached.$gwx0_2);
        return __WXML_GLOBAL__.ops_cached.$gwx0_2;
    }
    function gz$gwx0_3() {
        if (__WXML_GLOBAL__.ops_cached.$gwx0_3) return __WXML_GLOBAL__.ops_cached.$gwx0_3;
        __WXML_GLOBAL__.ops_cached.$gwx0_3 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'login_container']);
            Z([3, 'top_lineviewBox']);
            Z([3, 'login_appTopBox']);
            Z([3, 'login_nhtext']);
            Z([3, 'E证通认证']);
            Z([3, 'login_desc']);
            Z([3, '为保障您的资金安全，需要通过E证通校验是否本人操作，请根据提示进行']);
            Z([3, 'login_headerBox']);
            Z([3, 'https://www.krppay.com/skb_assets/face_scan_icon.png']);
            Z([3, 'login_btnBox']);
            Z([
                [2, '?:'],
                [
                    [2, '!'],
                    [[7], [3, 'isLoadingFaceResult']]
                ],
                [1, 'clickFaceScan'],
                [1, '']
            ]);
            Z([
                [2, '?:'],
                [
                    [2, '!'],
                    [[7], [3, 'isLoadingFaceResult']]
                ],
                [1, 'confirm_button'],
                [1, 'cancle_button']
            ]);
            Z([3, 'info']);
            Z([3, '开始录入']);
        })(__WXML_GLOBAL__.ops_cached.$gwx0_3);
        return __WXML_GLOBAL__.ops_cached.$gwx0_3;
    }
    function gz$gwx0_4() {
        if (__WXML_GLOBAL__.ops_cached.$gwx0_4) return __WXML_GLOBAL__.ops_cached.$gwx0_4;
        __WXML_GLOBAL__.ops_cached.$gwx0_4 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'use_box']);
            Z([3, 'use_list']);
            Z([[7], [3, 'list']]);
            Z([3, 'index']);
            Z([3, 'use_cell']);
            Z([3, 'order_id']);
            Z([a, [3, ' 终端SN：'], [[6], [[7], [3, 'item']], [3, 'posTusn']]]);
            Z([3, 'tran_time']);
            Z([a, [3, ' '], [[6], [[7], [3, 'item']], [3, 'createTime']], [3, ' ']]);
            Z([3, 'trans_price']);
            Z([
                a,
                z[8][1],
                [
                    [2, '?:'],
                    [
                        [2, '=='],
                        [[6], [[7], [3, 'item']], [3, 'operateType']],
                        [1, 'UNBIND']
                    ],
                    [1, '解绑终端'],
                    [1, '绑定终端']
                ],
                z[8][1]
            ]);
        })(__WXML_GLOBAL__.ops_cached.$gwx0_4);
        return __WXML_GLOBAL__.ops_cached.$gwx0_4;
    }
    function gz$gwx0_5() {
        if (__WXML_GLOBAL__.ops_cached.$gwx0_5) return __WXML_GLOBAL__.ops_cached.$gwx0_5;
        __WXML_GLOBAL__.ops_cached.$gwx0_5 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'page_wrap']);
            Z([3, 'icon_wrap']);
            Z([3, 'success_icon']);
            Z([3, 'https://www.krppay.com/success.png']);
            Z([3, 'tip_txt']);
            Z([3, '绑定成功，请前往POS机进行交易；']);
            Z([3, 'btn_wrap']);
            Z([3, 'goHome']);
            Z([3, 'confirm_button']);
            Z([3, 'info']);
            Z([3, '返回首页']);
        })(__WXML_GLOBAL__.ops_cached.$gwx0_5);
        return __WXML_GLOBAL__.ops_cached.$gwx0_5;
    }
    function gz$gwx0_6() {
        if (__WXML_GLOBAL__.ops_cached.$gwx0_6) return __WXML_GLOBAL__.ops_cached.$gwx0_6;
        __WXML_GLOBAL__.ops_cached.$gwx0_6 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'posList']);
            Z([3, 'scan_box']);
            Z([3, 'input_cell']);
            Z([3, 'label']);
            Z([3, '终端SN']);
            Z([3, 'posSnInput']);
            Z([3, 'scan_num_input']);
            Z([3, '请输入终端SN号或扫终端条形码']);
            Z([3, 'placeholder_customer']);
            Z([3, 'number']);
            Z([[7], [3, 'posSn']]);
            Z([3, 'getPosSn']);
            Z([3, 'scan_icon']);
            Z([3, 'widthFix']);
            Z([3, 'https://www.krppay.com/skb_assets/pos_scan.png']);
            Z([3, 'scan_button']);
            Z([3, 'bind']);
            Z([
                [2, '?:'],
                [
                    [2, '=='],
                    [[7], [3, 'posSn']],
                    [1, '']
                ],
                [1, 'confirm_button_disable'],
                [1, 'confirm_button']
            ]);
            Z([3, 'info']);
            Z([3, '立即绑定']);
            Z([
                [2, '!='],
                [[6], [[7], [3, 'list']], [3, 'length']],
                [1, 0]
            ]);
            Z([3, 'bind_list']);
            Z([3, 'total_bind_number']);
            Z([3, 'left']);
            Z([3, ' 已绑定终端：']);
            Z([3, 'color: #1F1B27;']);
            Z([a, [[7], [3, 'total']], [3, '台']]);
            Z([3, 'toHistory']);
            Z([3, 'right']);
            Z([3, ' 终端记录 ']);
            Z([3, 'arrow']);
            Z([[7], [3, 'list']]);
            Z([3, 'index']);
            Z([3, 'bind_cell_box']);
            Z([3, 'bind_pos_cell']);
            Z([3, 'lf_cell']);
            Z([3, 'pos_icon']);
            Z([3, 'https://www.krppay.com/skb_assets/pos_little_icon.png']);
            Z([3, 'pos_sn_detail']);
            Z([3, 'pos_sn']);
            Z([a, [[6], [[7], [3, 'item']], [3, 'posTusn']]]);
            Z([
                [2, '?:'],
                [
                    [2, '=='],
                    [[6], [[7], [3, 'item']], [3, 'activateFlag']],
                    [1, 'Y']
                ],
                [1, 'active_status active'],
                [1, 'active_status']
            ]);
            Z([
                a,
                [
                    [2, '?:'],
                    [
                        [2, '=='],
                        [[6], [[7], [3, 'item']], [3, 'activateFlag']],
                        [1, 'Y']
                    ],
                    [1, '已激活'],
                    [1, '未激活']
                ]
            ]);
            Z([3, 'rt_cell']);
            Z([
                [2, '!='],
                [[6], [[7], [3, 'item']], [3, 'auditStatus']],
                [1, 'CHECKING']
            ]);
            Z([3, 'showReason']);
            Z([3, 'pos_operate']);
            Z([[6], [[7], [3, 'item']], [3, 'posTusn']]);
            Z(z[18]);
            Z([3, '解绑']);
            Z([
                [2, '=='],
                [[6], [[7], [3, 'item']], [3, 'auditStatus']],
                [1, 'CHECKING']
            ]);
            Z([3, 'doingTap']);
            Z([3, 'pending']);
            Z([3, '审核中']);
            Z([
                [2, '&&'],
                [
                    [2, '!=='],
                    [[6], [[7], [3, 'item']], [3, 'reason']],
                    [1, null]
                ],
                [
                    [2, '!=='],
                    [[6], [[7], [3, 'item']], [3, 'reason']],
                    [1, '']
                ]
            ]);
            Z([3, 'bind_audit_status']);
            Z([a, [3, ' '], [[6], [[7], [3, 'item']], [3, 'reason']], [3, ' ']]);
            Z(z[21]);
            Z([3, 'pos_list_none']);
            Z([3, 'https://www.krppay.com/skb_assets/bg_empty_record.png']);
            Z([3, 'areaCLose']);
            Z([3, 'unbind']);
            Z([3, '#EF4034']);
            Z([[7], [3, 'show']]);
            Z([3, '申请解绑']);
            Z([3, 'unBindTips']);
            Z([3, '解除绑定后，终端将无法进行交易']);
            Z([3, 'text_area_box']);
            Z([3, 'area_title']);
            Z([3, ' 请填写解绑原因（选填） ']);
            Z([3, 'reasonInput']);
            Z([3, 'area_box']);
            Z([3, '30']);
            Z(z[71]);
            Z(z[71]);
            Z([3, '10']);
            Z([[7], [3, 'reason']]);
        })(__WXML_GLOBAL__.ops_cached.$gwx0_6);
        return __WXML_GLOBAL__.ops_cached.$gwx0_6;
    }
    function gz$gwx0_7() {
        if (__WXML_GLOBAL__.ops_cached.$gwx0_7) return __WXML_GLOBAL__.ops_cached.$gwx0_7;
        __WXML_GLOBAL__.ops_cached.$gwx0_7 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'error']);
            Z([3, 'end']);
            Z([3, 'move']);
            Z([3, 'start']);
            Z([3, 'true']);
            Z([3, 'canvas']);
            Z([a, [3, 'width:'], [[7], [3, 'width']], [3, 'px;height:'], [[7], [3, 'height']], [3, 'px;']]);
            Z([3, '2d']);
            Z([3, 'template']);
            Z([a, [3, 'height:'], z[6][4], [3, 'px;line-height: '], z[6][4], z[6][5]]);
            Z([a, [[7], [3, 'customerName']]]);
            Z([3, 'btn']);
            Z([3, 'box']);
            Z([3, 'tips']);
            Z([3, '请本人进行签名，按照字迹填写更容易通过哦']);
            Z([3, 'clearClick']);
            Z([3, '重签']);
            Z([3, 'saveClick']);
            Z([3, 'color: #fff;']);
            Z([3, '确认']);
        })(__WXML_GLOBAL__.ops_cached.$gwx0_7);
        return __WXML_GLOBAL__.ops_cached.$gwx0_7;
    }
    function gz$gwx0_8() {
        if (__WXML_GLOBAL__.ops_cached.$gwx0_8) return __WXML_GLOBAL__.ops_cached.$gwx0_8;
        __WXML_GLOBAL__.ops_cached.$gwx0_8 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'com_letter_container']);
            Z([
                [2, '&&'],
                [[7], [3, 'doubleRecordBol']],
                [[7], [3, 'content']]
            ]);
            Z([a, [[7], [3, 'content']]]);
            Z([3, 'margin-top: 32rpx;']);
            Z([a, [3, '日期：'], [[7], [3, 'timeStr']]]);
            Z([
                [2, '&&'],
                [[7], [3, 'doubleRecordBol']],
                [
                    [2, '||'],
                    [[7], [3, 'signaturePath']],
                    [[7], [3, 'signatureUrl']]
                ]
            ]);
            Z([3, 'margin-top: 24rpx;']);
            Z([3, '承诺人：']);
            Z([3, 'sign_image']);
            Z([3, 'widthFix']);
            Z([
                [2, '?:'],
                [[7], [3, 'signaturePath']],
                [
                    [2, '+'],
                    [1, 'data:image/png;base64,'],
                    [[7], [3, 'signaturePath']]
                ],
                [[7], [3, 'signatureUrl']]
            ]);
            Z([3, 'com_letter_hint']);
            Z([3, '本人确认填写及提交的所有内容均为本人真实合法有效的个人信息。']);
            Z([3, 'eventConfirmNextStep']);
            Z([3, 'confirm_button']);
            Z([3, 'info']);
            Z([3, '认证']);
            Z(z[5]);
            Z([3, 'eventRewrite']);
            Z([3, 'rewrite']);
            Z([3, '重新签名']);
            Z([3, 'empty_box']);
            Z([3, 'empty']);
            Z(z[9]);
            Z([3, 'https://www.krppay.com/skb_assets/bg_empty_info.png']);
            Z([3, 'width: 353rpx;height: 430rpx;']);
        })(__WXML_GLOBAL__.ops_cached.$gwx0_8);
        return __WXML_GLOBAL__.ops_cached.$gwx0_8;
    }
    function gz$gwx0_9() {
        if (__WXML_GLOBAL__.ops_cached.$gwx0_9) return __WXML_GLOBAL__.ops_cached.$gwx0_9;
        __WXML_GLOBAL__.ops_cached.$gwx0_9 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'login_container']);
            Z([3, 'top_lineviewBox']);
            Z([3, 'login_appTopBox']);
            Z([3, 'login_nhtext']);
            Z([3, 'E证通认证']);
            Z([3, 'login_desc']);
            Z([3, '为保障您的资金安全，需要通过E证通校验是否本人操作，请根据提示进行']);
            Z([3, 'login_headerBox']);
            Z([3, 'https://www.krppay.com/skb_assets/face_scan_icon.png']);
            Z([3, 'login_btnBox']);
            Z([
                [2, '?:'],
                [
                    [2, '!'],
                    [[7], [3, 'isLoadingFaceResult']]
                ],
                [1, 'clickFaceScan'],
                [1, '']
            ]);
            Z([
                [2, '?:'],
                [
                    [2, '!'],
                    [[7], [3, 'isLoadingFaceResult']]
                ],
                [1, 'confirm_button'],
                [1, 'cancle_button']
            ]);
            Z([3, 'info']);
            Z([3, '开始录入']);
        })(__WXML_GLOBAL__.ops_cached.$gwx0_9);
        return __WXML_GLOBAL__.ops_cached.$gwx0_9;
    }
    __WXML_GLOBAL__.ops_set.$gwx0 = z;
    __WXML_GLOBAL__.ops_init.$gwx0 = true;
    var nv_require = (function () {
        var nnm = {};
        var nom = {};
        return function (n) {
            if (n[0] === 'p' && n[1] === '_' && f_[n.slice(2)]) return f_[n.slice(2)];
            return function () {
                if (!nnm[n]) return undefined;
                try {
                    if (!nom[n]) nom[n] = nnm[n]();
                    return nom[n];
                } catch (e) {
                    e.message = e.message.replace(/nv_/g, '');
                    var tmp = e.stack.substring(0, e.stack.lastIndexOf(n));
                    e.stack = tmp.substring(0, tmp.lastIndexOf('\n'));
                    e.stack = e.stack.replace(/\snv_/g, ' ');
                    e.stack = $gstack(e.stack);
                    e.stack += '\n    at ' + n.substring(2);
                    console.error(e);
                }
            };
        };
    })();
    var x = [
        './pos/canvas/canvas.wxml',
        './pos/commitmentletter/commitmentletter.wxml',
        './pos/faceCheck/faceCheck.wxml',
        './pos/historyList/historyList.wxml',
        './pos/posBindSuccess/posBindSuccess.wxml',
        './pos/posList/posList.wxml',
        './pos/terRecord/terCanvas/terCanvas.wxml',
        './pos/terRecord/terCommitmentletter/terCommitmentletter.wxml',
        './pos/terRecord/terFaceCheck/terFaceCheck.wxml'
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
        var z = gz$gwx0_1();
        var oB = _n('view');
        _(r, oB);
        var xC = _mz(z, 'canvas', ['binderror', 0, 'bindtouchend', 1, 'bindtouchmove', 1, 'bindtouchstart', 2, 'disableScroll', 3, 'id', 4, 'style', 5, 'type', 6], [], e, s, gg);
        _(r, xC);
        var oD = _mz(z, 'view', ['class', 8, 'style', 1], [], e, s, gg);
        var fE = _oz(z, 10, e, s, gg);
        _(oD, fE);
        _(r, oD);
        var cF = _n('view');
        _rz(z, cF, 'class', 11, e, s, gg);
        var hG = _n('view');
        _rz(z, hG, 'class', 12, e, s, gg);
        var oH = _n('view');
        _rz(z, oH, 'class', 13, e, s, gg);
        var cI = _oz(z, 14, e, s, gg);
        _(oH, cI);
        _(hG, oH);
        var oJ = _n('button');
        _rz(z, oJ, 'bindtap', 15, e, s, gg);
        var lK = _oz(z, 16, e, s, gg);
        _(oJ, lK);
        _(hG, oJ);
        var aL = _mz(z, 'button', ['bindtap', 17, 'style', 1], [], e, s, gg);
        var tM = _oz(z, 19, e, s, gg);
        _(aL, tM);
        _(hG, aL);
        _(cF, hG);
        _(r, cF);
        return r;
    };
    e_[x[0]] = {
        f: m0,
        j: [],
        i: [],
        ti: [],
        ic: []
    };
    d_[x[1]] = {};
    var m1 = function (e, s, r, gg) {
        var z = gz$gwx0_2();
        var bO = _n('view');
        _rz(z, bO, 'class', 0, e, s, gg);
        var oP = _v();
        _(bO, oP);
        if (_oz(z, 1, e, s, gg)) {
            oP.wxVkey = 1;
            var fS = _n('view');
            var cT = _oz(z, 2, e, s, gg);
            _(fS, cT);
            _(oP, fS);
            var hU = _n('view');
            _rz(z, hU, 'style', 3, e, s, gg);
            var oV = _oz(z, 4, e, s, gg);
            _(hU, oV);
            _(oP, hU);
            var xQ = _v();
            _(oP, xQ);
            if (_oz(z, 5, e, s, gg)) {
                xQ.wxVkey = 1;
                var cW = _n('view');
                _rz(z, cW, 'style', 6, e, s, gg);
                var oX = _oz(z, 7, e, s, gg);
                _(cW, oX);
                _(xQ, cW);
                var lY = _mz(z, 'image', ['class', 8, 'mode', 1, 'src', 2], [], e, s, gg);
                _(xQ, lY);
                var aZ = _n('view');
                _rz(z, aZ, 'class', 11, e, s, gg);
                var t1 = _oz(z, 12, e, s, gg);
                _(aZ, t1);
                _(xQ, aZ);
            }
            var e2 = _mz(z, 'van-button', ['round', -1, 'bind:click', 13, 'customClass', 1, 'type', 2], [], e, s, gg);
            var b3 = _oz(z, 16, e, s, gg);
            _(e2, b3);
            _(oP, e2);
            var oR = _v();
            _(oP, oR);
            if (_oz(z, 17, e, s, gg)) {
                oR.wxVkey = 1;
                var o4 = _mz(z, 'view', ['bindtap', 18, 'class', 1], [], e, s, gg);
                var x5 = _oz(z, 20, e, s, gg);
                _(o4, x5);
                _(oR, o4);
            }
            xQ.wxXCkey = 1;
            oR.wxXCkey = 1;
        } else {
            oP.wxVkey = 2;
            var o6 = _n('view');
            _rz(z, o6, 'class', 21, e, s, gg);
            var f7 = _mz(z, 'image', ['class', 22, 'mode', 1, 'src', 2, 'style', 3], [], e, s, gg);
            _(o6, f7);
            _(oP, o6);
        }
        oP.wxXCkey = 1;
        oP.wxXCkey = 3;
        _(r, bO);
        return r;
    };
    e_[x[1]] = {
        f: m1,
        j: [],
        i: [],
        ti: [],
        ic: []
    };
    d_[x[2]] = {};
    var m2 = function (e, s, r, gg) {
        var z = gz$gwx0_3();
        var h9 = _n('view');
        var o0 = _n('view');
        _rz(z, o0, 'class', 0, e, s, gg);
        var cAB = _n('view');
        _rz(z, cAB, 'class', 1, e, s, gg);
        _(o0, cAB);
        var oBB = _n('view');
        _rz(z, oBB, 'class', 2, e, s, gg);
        var lCB = _n('text');
        _rz(z, lCB, 'class', 3, e, s, gg);
        var aDB = _oz(z, 4, e, s, gg);
        _(lCB, aDB);
        _(oBB, lCB);
        _(o0, oBB);
        var tEB = _n('view');
        _rz(z, tEB, 'class', 5, e, s, gg);
        var eFB = _n('text');
        var bGB = _oz(z, 6, e, s, gg);
        _(eFB, bGB);
        _(tEB, eFB);
        _(o0, tEB);
        var oHB = _n('view');
        _rz(z, oHB, 'class', 7, e, s, gg);
        var xIB = _n('van-image');
        _rz(z, xIB, 'src', 8, e, s, gg);
        _(oHB, xIB);
        _(o0, oHB);
        var oJB = _n('view');
        _rz(z, oJB, 'class', 9, e, s, gg);
        var fKB = _mz(z, 'van-button', ['round', -1, 'bind:click', 10, 'customClass', 1, 'type', 2], [], e, s, gg);
        var cLB = _oz(z, 13, e, s, gg);
        _(fKB, cLB);
        _(oJB, fKB);
        _(o0, oJB);
        _(h9, o0);
        _(r, h9);
        return r;
    };
    e_[x[2]] = {
        f: m2,
        j: [],
        i: [],
        ti: [],
        ic: []
    };
    d_[x[3]] = {};
    var m3 = function (e, s, r, gg) {
        var z = gz$gwx0_4();
        var oNB = _n('view');
        _rz(z, oNB, 'class', 0, e, s, gg);
        var cOB = _n('view');
        _rz(z, cOB, 'class', 1, e, s, gg);
        var oPB = _v();
        _(cOB, oPB);
        var lQB = function (tSB, aRB, eTB, gg) {
            var oVB = _n('view');
            _rz(z, oVB, 'class', 4, tSB, aRB, gg);
            var xWB = _n('view');
            _rz(z, xWB, 'class', 5, tSB, aRB, gg);
            var oXB = _oz(z, 6, tSB, aRB, gg);
            _(xWB, oXB);
            _(oVB, xWB);
            var fYB = _n('view');
            _rz(z, fYB, 'class', 7, tSB, aRB, gg);
            var cZB = _oz(z, 8, tSB, aRB, gg);
            _(fYB, cZB);
            _(oVB, fYB);
            var h1B = _n('view');
            _rz(z, h1B, 'class', 9, tSB, aRB, gg);
            var o2B = _oz(z, 10, tSB, aRB, gg);
            _(h1B, o2B);
            _(oVB, h1B);
            _(eTB, oVB);
            return eTB;
        };
        oPB.wxXCkey = 2;
        _2z(z, 2, lQB, e, s, gg, oPB, 'item', 'index', 'index');
        _(oNB, cOB);
        _(r, oNB);
        return r;
    };
    e_[x[3]] = {
        f: m3,
        j: [],
        i: [],
        ti: [],
        ic: []
    };
    d_[x[4]] = {};
    var m4 = function (e, s, r, gg) {
        var z = gz$gwx0_5();
        var o4B = _n('view');
        _rz(z, o4B, 'class', 0, e, s, gg);
        var l5B = _n('view');
        _rz(z, l5B, 'class', 1, e, s, gg);
        var a6B = _mz(z, 'image', ['class', 2, 'src', 1], [], e, s, gg);
        _(l5B, a6B);
        _(o4B, l5B);
        var t7B = _n('view');
        _rz(z, t7B, 'class', 4, e, s, gg);
        var e8B = _oz(z, 5, e, s, gg);
        _(t7B, e8B);
        _(o4B, t7B);
        var b9B = _n('view');
        _rz(z, b9B, 'class', 6, e, s, gg);
        var o0B = _mz(z, 'van-button', ['round', -1, 'bind:click', 7, 'customClass', 1, 'type', 2], [], e, s, gg);
        var xAC = _oz(z, 10, e, s, gg);
        _(o0B, xAC);
        _(b9B, o0B);
        _(o4B, b9B);
        _(r, o4B);
        return r;
    };
    e_[x[4]] = {
        f: m4,
        j: [],
        i: [],
        ti: [],
        ic: []
    };
    d_[x[5]] = {};
    var m5 = function (e, s, r, gg) {
        var z = gz$gwx0_6();
        var fCC = _n('view');
        _rz(z, fCC, 'class', 0, e, s, gg);
        var hEC = _n('view');
        _rz(z, hEC, 'class', 1, e, s, gg);
        var oFC = _n('view');
        _rz(z, oFC, 'class', 2, e, s, gg);
        var cGC = _n('view');
        _rz(z, cGC, 'class', 3, e, s, gg);
        var oHC = _oz(z, 4, e, s, gg);
        _(cGC, oHC);
        _(oFC, cGC);
        var lIC = _mz(z, 'input', ['bindinput', 5, 'class', 1, 'placeholder', 2, 'placeholderClass', 3, 'type', 4, 'value', 5], [], e, s, gg);
        _(oFC, lIC);
        var aJC = _mz(z, 'image', ['bindtap', 11, 'class', 1, 'mode', 2, 'src', 3], [], e, s, gg);
        _(oFC, aJC);
        _(hEC, oFC);
        var tKC = _n('view');
        _rz(z, tKC, 'class', 15, e, s, gg);
        var eLC = _mz(z, 'van-button', ['round', -1, 'bind:click', 16, 'customClass', 1, 'type', 2], [], e, s, gg);
        var bMC = _oz(z, 19, e, s, gg);
        _(eLC, bMC);
        _(tKC, eLC);
        _(hEC, tKC);
        _(fCC, hEC);
        var cDC = _v();
        _(fCC, cDC);
        if (_oz(z, 20, e, s, gg)) {
            cDC.wxVkey = 1;
            var oNC = _n('view');
            _rz(z, oNC, 'class', 21, e, s, gg);
            var xOC = _n('view');
            _rz(z, xOC, 'class', 22, e, s, gg);
            var oPC = _n('view');
            _rz(z, oPC, 'class', 23, e, s, gg);
            var fQC = _oz(z, 24, e, s, gg);
            _(oPC, fQC);
            var cRC = _n('text');
            _rz(z, cRC, 'style', 25, e, s, gg);
            var hSC = _oz(z, 26, e, s, gg);
            _(cRC, hSC);
            _(oPC, cRC);
            _(xOC, oPC);
            var oTC = _mz(z, 'view', ['bindtap', 27, 'class', 1], [], e, s, gg);
            var cUC = _oz(z, 29, e, s, gg);
            _(oTC, cUC);
            var oVC = _n('van-icon');
            _rz(z, oVC, 'name', 30, e, s, gg);
            _(oTC, oVC);
            _(xOC, oTC);
            _(oNC, xOC);
            var lWC = _v();
            _(oNC, lWC);
            var aXC = function (eZC, tYC, b1C, gg) {
                var x3C = _n('view');
                _rz(z, x3C, 'class', 33, eZC, tYC, gg);
                var f5C = _n('view');
                _rz(z, f5C, 'class', 34, eZC, tYC, gg);
                var c6C = _n('view');
                _rz(z, c6C, 'class', 35, eZC, tYC, gg);
                var h7C = _mz(z, 'image', ['class', 36, 'src', 1], [], eZC, tYC, gg);
                _(c6C, h7C);
                var o8C = _n('view');
                _rz(z, o8C, 'class', 38, eZC, tYC, gg);
                var c9C = _n('view');
                _rz(z, c9C, 'class', 39, eZC, tYC, gg);
                var o0C = _oz(z, 40, eZC, tYC, gg);
                _(c9C, o0C);
                _(o8C, c9C);
                var lAD = _n('view');
                _rz(z, lAD, 'class', 41, eZC, tYC, gg);
                var aBD = _oz(z, 42, eZC, tYC, gg);
                _(lAD, aBD);
                _(o8C, lAD);
                _(c6C, o8C);
                _(f5C, c6C);
                var tCD = _n('view');
                _rz(z, tCD, 'class', 43, eZC, tYC, gg);
                var eDD = _v();
                _(tCD, eDD);
                if (_oz(z, 44, eZC, tYC, gg)) {
                    eDD.wxVkey = 1;
                    var oFD = _mz(z, 'van-button', ['round', -1, 'bind:click', 45, 'customClass', 1, 'data-sn', 2, 'type', 3], [], eZC, tYC, gg);
                    var xGD = _oz(z, 49, eZC, tYC, gg);
                    _(oFD, xGD);
                    _(eDD, oFD);
                }
                var bED = _v();
                _(tCD, bED);
                if (_oz(z, 50, eZC, tYC, gg)) {
                    bED.wxVkey = 1;
                    var oHD = _mz(z, 'view', ['bindtap', 51, 'class', 1], [], eZC, tYC, gg);
                    var fID = _oz(z, 53, eZC, tYC, gg);
                    _(oHD, fID);
                    _(bED, oHD);
                }
                eDD.wxXCkey = 1;
                eDD.wxXCkey = 3;
                bED.wxXCkey = 1;
                _(f5C, tCD);
                _(x3C, f5C);
                var o4C = _v();
                _(x3C, o4C);
                if (_oz(z, 54, eZC, tYC, gg)) {
                    o4C.wxVkey = 1;
                    var cJD = _n('view');
                    _rz(z, cJD, 'class', 55, eZC, tYC, gg);
                    var hKD = _oz(z, 56, eZC, tYC, gg);
                    _(cJD, hKD);
                    _(o4C, cJD);
                }
                o4C.wxXCkey = 1;
                _(b1C, x3C);
                return b1C;
            };
            lWC.wxXCkey = 4;
            _2z(z, 31, aXC, e, s, gg, lWC, 'item', 'index', 'index');
            _(cDC, oNC);
        } else {
            cDC.wxVkey = 2;
            var oLD = _n('view');
            _rz(z, oLD, 'class', 57, e, s, gg);
            var cMD = _mz(z, 'image', ['class', 58, 'src', 1], [], e, s, gg);
            _(oLD, cMD);
            _(cDC, oLD);
        }
        cDC.wxXCkey = 1;
        cDC.wxXCkey = 3;
        _(r, fCC);
        var oND = _mz(z, 'van-dialog', ['showCancelButton', -1, 'useSlot', -1, 'bind:close', 60, 'bind:confirm', 1, 'confirmButtonColor', 2, 'show', 3, 'title', 4], [], e, s, gg);
        var lOD = _n('view');
        _rz(z, lOD, 'class', 65, e, s, gg);
        var aPD = _oz(z, 66, e, s, gg);
        _(lOD, aPD);
        _(oND, lOD);
        var tQD = _n('view');
        _rz(z, tQD, 'class', 67, e, s, gg);
        var eRD = _n('view');
        _rz(z, eRD, 'class', 68, e, s, gg);
        var bSD = _oz(z, 69, e, s, gg);
        _(eRD, bSD);
        _(tQD, eRD);
        var oTD = _mz(z, 'textarea', ['bindinput', 70, 'class', 1, 'cols', 2, 'id', 3, 'name', 4, 'rows', 5, 'value', 6], [], e, s, gg);
        _(tQD, oTD);
        _(oND, tQD);
        _(r, oND);
        return r;
    };
    e_[x[5]] = {
        f: m5,
        j: [],
        i: [],
        ti: [],
        ic: []
    };
    d_[x[6]] = {};
    var m6 = function (e, s, r, gg) {
        var z = gz$gwx0_7();
        var oVD = _n('view');
        _(r, oVD);
        var fWD = _mz(z, 'canvas', ['binderror', 0, 'bindtouchend', 1, 'bindtouchmove', 1, 'bindtouchstart', 2, 'disableScroll', 3, 'id', 4, 'style', 5, 'type', 6], [], e, s, gg);
        _(r, fWD);
        var cXD = _mz(z, 'view', ['class', 8, 'style', 1], [], e, s, gg);
        var hYD = _oz(z, 10, e, s, gg);
        _(cXD, hYD);
        _(r, cXD);
        var oZD = _n('view');
        _rz(z, oZD, 'class', 11, e, s, gg);
        var c1D = _n('view');
        _rz(z, c1D, 'class', 12, e, s, gg);
        var o2D = _n('view');
        _rz(z, o2D, 'class', 13, e, s, gg);
        var l3D = _oz(z, 14, e, s, gg);
        _(o2D, l3D);
        _(c1D, o2D);
        var a4D = _n('button');
        _rz(z, a4D, 'bindtap', 15, e, s, gg);
        var t5D = _oz(z, 16, e, s, gg);
        _(a4D, t5D);
        _(c1D, a4D);
        var e6D = _mz(z, 'button', ['bindtap', 17, 'style', 1], [], e, s, gg);
        var b7D = _oz(z, 19, e, s, gg);
        _(e6D, b7D);
        _(c1D, e6D);
        _(oZD, c1D);
        _(r, oZD);
        return r;
    };
    e_[x[6]] = {
        f: m6,
        j: [],
        i: [],
        ti: [],
        ic: []
    };
    d_[x[7]] = {};
    var m7 = function (e, s, r, gg) {
        var z = gz$gwx0_8();
        var x9D = _n('view');
        _rz(z, x9D, 'class', 0, e, s, gg);
        var o0D = _v();
        _(x9D, o0D);
        if (_oz(z, 1, e, s, gg)) {
            o0D.wxVkey = 1;
            var hCE = _n('view');
            var oDE = _oz(z, 2, e, s, gg);
            _(hCE, oDE);
            _(o0D, hCE);
            var cEE = _n('view');
            _rz(z, cEE, 'style', 3, e, s, gg);
            var oFE = _oz(z, 4, e, s, gg);
            _(cEE, oFE);
            _(o0D, cEE);
            var fAE = _v();
            _(o0D, fAE);
            if (_oz(z, 5, e, s, gg)) {
                fAE.wxVkey = 1;
                var lGE = _n('view');
                _rz(z, lGE, 'style', 6, e, s, gg);
                var aHE = _oz(z, 7, e, s, gg);
                _(lGE, aHE);
                _(fAE, lGE);
                var tIE = _mz(z, 'image', ['class', 8, 'mode', 1, 'src', 2], [], e, s, gg);
                _(fAE, tIE);
                var eJE = _n('view');
                _rz(z, eJE, 'class', 11, e, s, gg);
                var bKE = _oz(z, 12, e, s, gg);
                _(eJE, bKE);
                _(fAE, eJE);
            }
            var oLE = _mz(z, 'van-button', ['round', -1, 'bind:click', 13, 'customClass', 1, 'type', 2], [], e, s, gg);
            var xME = _oz(z, 16, e, s, gg);
            _(oLE, xME);
            _(o0D, oLE);
            var cBE = _v();
            _(o0D, cBE);
            if (_oz(z, 17, e, s, gg)) {
                cBE.wxVkey = 1;
                var oNE = _mz(z, 'view', ['bindtap', 18, 'class', 1], [], e, s, gg);
                var fOE = _oz(z, 20, e, s, gg);
                _(oNE, fOE);
                _(cBE, oNE);
            }
            fAE.wxXCkey = 1;
            cBE.wxXCkey = 1;
        } else {
            o0D.wxVkey = 2;
            var cPE = _n('view');
            _rz(z, cPE, 'class', 21, e, s, gg);
            var hQE = _mz(z, 'image', ['class', 22, 'mode', 1, 'src', 2, 'style', 3], [], e, s, gg);
            _(cPE, hQE);
            _(o0D, cPE);
        }
        o0D.wxXCkey = 1;
        o0D.wxXCkey = 3;
        _(r, x9D);
        return r;
    };
    e_[x[7]] = {
        f: m7,
        j: [],
        i: [],
        ti: [],
        ic: []
    };
    d_[x[8]] = {};
    var m8 = function (e, s, r, gg) {
        var z = gz$gwx0_9();
        var cSE = _n('view');
        var oTE = _n('view');
        _rz(z, oTE, 'class', 0, e, s, gg);
        var lUE = _n('view');
        _rz(z, lUE, 'class', 1, e, s, gg);
        _(oTE, lUE);
        var aVE = _n('view');
        _rz(z, aVE, 'class', 2, e, s, gg);
        var tWE = _n('text');
        _rz(z, tWE, 'class', 3, e, s, gg);
        var eXE = _oz(z, 4, e, s, gg);
        _(tWE, eXE);
        _(aVE, tWE);
        _(oTE, aVE);
        var bYE = _n('view');
        _rz(z, bYE, 'class', 5, e, s, gg);
        var oZE = _n('text');
        var x1E = _oz(z, 6, e, s, gg);
        _(oZE, x1E);
        _(bYE, oZE);
        _(oTE, bYE);
        var o2E = _n('view');
        _rz(z, o2E, 'class', 7, e, s, gg);
        var f3E = _n('van-image');
        _rz(z, f3E, 'src', 8, e, s, gg);
        _(o2E, f3E);
        _(oTE, o2E);
        var c4E = _n('view');
        _rz(z, c4E, 'class', 9, e, s, gg);
        var h5E = _mz(z, 'van-button', ['round', -1, 'bind:click', 10, 'customClass', 1, 'type', 2], [], e, s, gg);
        var o6E = _oz(z, 13, e, s, gg);
        _(h5E, o6E);
        _(c4E, h5E);
        _(oTE, c4E);
        _(cSE, oTE);
        _(r, cSE);
        return r;
    };
    e_[x[8]] = {
        f: m8,
        j: [],
        i: [],
        ti: [],
        ic: []
    };
    if (path && e_[path]) {
        window.__wxml_comp_version__ = 0.02;
        return function (env, dd, global) {
            $gwxc = 0;
            var root = {
                tag: 'wx-page'
            };
            root.children = [];
            var main = e_[path].f;
            if (typeof global === 'undefined') global = {};
            global.f = $gdc(f_[path], '', 1);
            if (typeof window.__webview_engine_version__ != 'undefined' && window.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && window.__mergeData__) {
                env = window.__mergeData__(env, dd);
            }
            try {
                main(env, {}, root, global);
                _tsd(root);
                if (typeof window.__webview_engine_version__ == 'undefined' || window.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                    return _ev(root);
                }
            } catch (err) {
                console.log(err);
            }
            return root;
        };
    }
};
var BASE_DEVICE_WIDTH = 750;
var isIOS = navigator.userAgent.match('iPhone');
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth =
    window.__checkDeviceWidth__ ||
    function () {
        var newDeviceWidth = window.screen.width || 375;
        var newDeviceDPR = window.devicePixelRatio || 2;
        var newDeviceHeight = window.screen.height || 375;
        if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight;
        if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
            deviceWidth = newDeviceWidth;
            deviceDPR = newDeviceDPR;
        }
    };
checkDeviceWidth();
var eps = 1e-4;
var transformRPX =
    window.__transformRpx__ ||
    function (number, newDeviceWidth) {
        if (number === 0) return 0;
        number = (number / BASE_DEVICE_WIDTH) * (newDeviceWidth || deviceWidth);
        number = Math.floor(number + eps);
        if (number === 0) {
            if (deviceDPR === 1 || !isIOS) {
                return 1;
            } else {
                return 0.5;
            }
        }
        return number;
    };
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
var __COMMON_STYLESHEETS__ = __COMMON_STYLESHEETS__ || {};
var setCssToHead = function (file, _xcInvalid, info) {
    var Ca = {};
    var css_id;
    var info = info || {};
    var _C = __COMMON_STYLESHEETS__;
    function makeup(file, opt) {
        var _n = typeof file === 'string';
        if (_n && Ca.hasOwnProperty(file)) return '';
        if (_n) Ca[file] = 1;
        var ex = _n ? _C[file] : file;
        var res = '';
        for (var i = ex.length - 1; i >= 0; i--) {
            var content = ex[i];
            if (typeof content === 'object') {
                var op = content[0];
                if (op == 0) res = transformRPX(content[1], opt.deviceWidth) + 'px' + res;
                else if (op == 1) res = opt.suffix + res;
                else if (op == 2) res = makeup(content[1], opt) + res;
            } else res = content + res;
        }
        return res;
    }
    var styleSheetManager = window.__styleSheetManager2__;
    var rewritor = function (suffix, opt, style) {
        opt = opt || {};
        suffix = suffix || '';
        opt.suffix = suffix;
        if (opt.allowIllegalSelector != undefined && _xcInvalid != undefined) {
            if (opt.allowIllegalSelector) console.warn('For developer:' + _xcInvalid);
            else {
                console.error(_xcInvalid);
            }
        }
        Ca = {};
        css = makeup(file, opt);
        if (styleSheetManager) {
            var key = (info.path || Math.random()) + ':' + suffix;
            if (!style) {
                styleSheetManager.addItem(key, info.path);
                window.__rpxRecalculatingFuncs__.push(function (size) {
                    opt.deviceWidth = size.width;
                    rewritor(suffix, opt, true);
                });
            }
            styleSheetManager.setCss(key, css);
            return;
        }
        if (!style) {
            var head = document.head || document.getElementsByTagName('head')[0];
            style = document.createElement('style');
            style.type = 'text/css';
            style.setAttribute('wxss:path', info.path);
            head.appendChild(style);
            window.__rpxRecalculatingFuncs__.push(function (size) {
                opt.deviceWidth = size.width;
                rewritor(suffix, opt, style);
            });
        }
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            if (style.childNodes.length == 0) style.appendChild(document.createTextNode(css));
            else style.childNodes[0].nodeValue = css;
        }
    };
    return rewritor;
};
setCssToHead([
    '[is\x3d\x22miniprogram_npm/@vant/weapp/goods-action-button/index\x22]{-webkit-flex:1;flex:1}\n[is\x3d\x22miniprogram_npm/@vant/weapp/icon/index\x22]{-webkit-align-items:center;align-items:center;display:-webkit-inline-flex;display:inline-flex;-webkit-justify-content:center;justify-content:center}\n[is\x3d\x22miniprogram_npm/@vant/weapp/loading/index\x22]{font-size:0;line-height:1}\n[is\x3d\x22miniprogram_npm/@vant/weapp/tab/index\x22]{box-sizing:border-box;-webkit-flex-shrink:0;flex-shrink:0;width:100%}\n'
])();
setCssToHead([], undefined, {
    path: './pos/app.wxss'
})();
__wxAppCode__['pos/canvas/canvas.wxss'] = setCssToHead(
    [
        'body{background-color:#f4f6f8}\n.',
        [1],
        'confirm_button,.',
        [1],
        'confirm_button_disable{background:#ef4034!important;border:#1f1b27!important;border-radius:',
        [0, 49],
        '!important;color:#fff!important;font-size:',
        [0, 36],
        '!important;font-weight:',
        [0, 500],
        '!important;height:',
        [0, 98],
        '!important;margin:0 auto;width:',
        [0, 670],
        '}\n.',
        [1],
        'confirm_button_disable{opacity:.3}\n.',
        [1],
        'cancle_button{background:#f4f6f8!important;border:#f7f7f7!important;border-radius:',
        [0, 49],
        '!important;color:#45464e!important;font-size:',
        [0, 36],
        '!important;font-weight:0!important;height:',
        [0, 98],
        '!important;margin:0 auto;width:',
        [0, 670],
        '}\n.',
        [1],
        'small_confirm_button{background:#ef4034!important;border:#1f1b27!important;color:#fff!important;font-weight:',
        [0, 500],
        '!important}\n.',
        [1],
        'small_cancle_button,.',
        [1],
        'small_confirm_button{border-radius:',
        [0, 40],
        '!important;font-size:',
        [0, 36],
        '!important;height:',
        [0, 80],
        '!important;margin:0 auto;width:',
        [0, 240],
        '}\n.',
        [1],
        'small_cancle_button{background:#f4f6f8!important;border:#f7f7f7!important;color:#45464e!important;font-weight:0!important}\n.',
        [1],
        'placeholder_customer_input{color:#c1c1c1;font-family:PingFang SC;font-size:',
        [0, 32],
        '!important;font-weight:400}\nbody{background-color:#fff}\n.',
        [1],
        'template{background-color:#f4f6f8;color:#c4c4c4;font-size:',
        [0, 120],
        ';font-weight:700;letter-spacing:',
        [0, 20],
        ';text-align:center}\nwx-canvas{background:hsla(0,0%,100%,0);position:absolute;top:0}\n.',
        [1],
        'btn{bottom:0;height:68px;position:absolute}\n.',
        [1],
        'box,.',
        [1],
        'btn{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;width:100%}\n.',
        [1],
        'box{margin:0 70px}\n.',
        [1],
        'tips{color:#45464e;-webkit-flex:1;flex:1;font-family:PingFang SC;font-size:',
        [0, 14],
        ';font-weight:400;width:0}\n.',
        [1],
        'btn wx-button:last-child{background-color:#ef4034;margin-left:16px}\nwx-button{background-color:#e7e7e7;border-radius:',
        [0, 18],
        ';color:#45464e;font-size:',
        [0, 15],
        ';font-weight:500;height:',
        [0, 36],
        ';line-height:',
        [0, 36],
        ';text-align:center;width:',
        [0, 85],
        '}\nwx-button::after{border:none;padding:0}\n'
    ],
    'Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pos/canvas/canvas.wxss:1:1793)',
    {
        path: './pos/canvas/canvas.wxss'
    }
);
if (__vd_version_info__.delayedGwx) __wxAppCode__['pos/canvas/canvas.wxml'] = [$gwx0, './pos/canvas/canvas.wxml'];
else __wxAppCode__['pos/canvas/canvas.wxml'] = $gwx0('./pos/canvas/canvas.wxml');
__wxAppCode__['pos/commitmentletter/commitmentletter.wxss'] = setCssToHead(
    [
        'body{background-color:#f4f6f8}\n.',
        [1],
        'confirm_button,.',
        [1],
        'confirm_button_disable{background:#ef4034!important;border:#1f1b27!important;border-radius:',
        [0, 49],
        '!important;color:#fff!important;font-size:',
        [0, 36],
        '!important;font-weight:',
        [0, 500],
        '!important;height:',
        [0, 98],
        '!important;margin:0 auto;width:',
        [0, 670],
        '}\n.',
        [1],
        'confirm_button_disable{opacity:.3}\n.',
        [1],
        'cancle_button{background:#f4f6f8!important;border:#f7f7f7!important;border-radius:',
        [0, 49],
        '!important;color:#45464e!important;font-size:',
        [0, 36],
        '!important;font-weight:0!important;height:',
        [0, 98],
        '!important;margin:0 auto;width:',
        [0, 670],
        '}\n.',
        [1],
        'small_confirm_button{background:#ef4034!important;border:#1f1b27!important;color:#fff!important;font-weight:',
        [0, 500],
        '!important}\n.',
        [1],
        'small_cancle_button,.',
        [1],
        'small_confirm_button{border-radius:',
        [0, 40],
        '!important;font-size:',
        [0, 36],
        '!important;height:',
        [0, 80],
        '!important;margin:0 auto;width:',
        [0, 240],
        '}\n.',
        [1],
        'small_cancle_button{background:#f4f6f8!important;border:#f7f7f7!important;color:#45464e!important;font-weight:0!important}\n.',
        [1],
        'placeholder_customer_input{color:#c1c1c1;font-family:PingFang SC;font-size:',
        [0, 32],
        '!important;font-weight:400}\nbody{background-color:#fff}\n.',
        [1],
        'com_letter_container{background-color:#fff;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;padding:',
        [0, 64],
        ' ',
        [0, 40],
        '}\n.',
        [1],
        'com_letter_container wx-view{color:#45464e;font-family:PingFang SC;font-size:',
        [0, 28],
        ';font-weight:400}\n.',
        [1],
        'com_letter_container .',
        [1],
        'sign_image{background-color:#f4f6f8;border-radius:',
        [0, 12],
        ';height:',
        [0, 260],
        ';margin-bottom:',
        [0, 24],
        ';margin-top:',
        [0, 24],
        ';width:100%}\n.',
        [1],
        'com_letter_container .',
        [1],
        'com_letter_hint{color:#9292a0}\n.',
        [1],
        'com_letter_container .',
        [1],
        'confirm_button{margin-top:',
        [0, 86],
        '}\n.',
        [1],
        'com_letter_container .',
        [1],
        'van-button__text{color:#fff!important;font-size:',
        [0, 36],
        '!important;font-weight:500!important}\n.',
        [1],
        'com_letter_container .',
        [1],
        'rewrite{-webkit-align-self:center;align-self:center;color:#ef4034;font-family:PingFang SC;font-size:',
        [0, 30],
        ';font-weight:500;margin-top:',
        [0, 23],
        '}\n.',
        [1],
        'com_letter_container .',
        [1],
        'empty_box{-webkit-align-items:center;align-items:center;-webkit-align-self:center;align-self:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center;margin-top:',
        [0, 50],
        '}\n'
    ],
    'Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pos/commitmentletter/commitmentletter.wxss:1:1244)',
    {
        path: './pos/commitmentletter/commitmentletter.wxss'
    }
);
if (__vd_version_info__.delayedGwx) __wxAppCode__['pos/commitmentletter/commitmentletter.wxml'] = [$gwx0, './pos/commitmentletter/commitmentletter.wxml'];
else __wxAppCode__['pos/commitmentletter/commitmentletter.wxml'] = $gwx0('./pos/commitmentletter/commitmentletter.wxml');
__wxAppCode__['pos/faceCheck/faceCheck.wxss'] = setCssToHead(
    [
        'body{background-color:#f4f6f8}\n.',
        [1],
        'confirm_button,.',
        [1],
        'confirm_button_disable{background:#ef4034!important;border:#1f1b27!important;border-radius:',
        [0, 49],
        '!important;color:#fff!important;font-size:',
        [0, 36],
        '!important;font-weight:',
        [0, 500],
        '!important;height:',
        [0, 98],
        '!important;margin:0 auto;width:',
        [0, 670],
        '}\n.',
        [1],
        'confirm_button_disable{opacity:.3}\n.',
        [1],
        'cancle_button{background:#f4f6f8!important;border:#f7f7f7!important;border-radius:',
        [0, 49],
        '!important;color:#45464e!important;font-size:',
        [0, 36],
        '!important;font-weight:0!important;height:',
        [0, 98],
        '!important;margin:0 auto;width:',
        [0, 670],
        '}\n.',
        [1],
        'small_confirm_button{background:#ef4034!important;border:#1f1b27!important;color:#fff!important;font-weight:',
        [0, 500],
        '!important}\n.',
        [1],
        'small_cancle_button,.',
        [1],
        'small_confirm_button{border-radius:',
        [0, 40],
        '!important;font-size:',
        [0, 36],
        '!important;height:',
        [0, 80],
        '!important;margin:0 auto;width:',
        [0, 240],
        '}\n.',
        [1],
        'small_cancle_button{background:#f4f6f8!important;border:#f7f7f7!important;color:#45464e!important;font-weight:0!important}\n.',
        [1],
        'placeholder_customer_input{color:#c1c1c1;font-family:PingFang SC;font-size:',
        [0, 32],
        '!important;font-weight:400}\nbody{background-color:#fff}\n.',
        [1],
        'login_container{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:100%;width:100%}\n.',
        [1],
        'login_container .',
        [1],
        'top_lineviewBox{background-color:#ececec;height:',
        [0, 17],
        ';width:100%}\n.',
        [1],
        'login_container .',
        [1],
        'login_appTopBox{display:-webkit-flex;display:flex;height:auto;-webkit-justify-content:center;justify-content:center;margin-top:',
        [0, 99],
        ';width:100%}\n.',
        [1],
        'login_container .',
        [1],
        'login_appTopBox .',
        [1],
        'login_nhtext{color:#1f1b27;font-size:',
        [0, 70],
        ';font-weight:300;height:auto;text-align:center;width:100%}\n.',
        [1],
        'login_container .',
        [1],
        'login_desc{display:-webkit-flex;display:flex;height:auto;-webkit-justify-content:center;justify-content:center;margin-top:',
        [0, 50],
        ';width:100%}\n.',
        [1],
        'login_container .',
        [1],
        'login_desc wx-text{color:#45464e;text-align:left;width:80%}\n.',
        [1],
        'login_container .',
        [1],
        'login_headerBox{display:-webkit-flex;display:flex;height:',
        [0, 471],
        ';-webkit-justify-content:center;justify-content:center;margin-top:',
        [0, 50],
        ';width:100%}\n.',
        [1],
        'login_container .',
        [1],
        'login_headerBox wx-image{height:',
        [0, 471],
        ';width:',
        [0, 471],
        '}\n.',
        [1],
        'login_container .',
        [1],
        'login_btnBox{display:-webkit-flex;display:flex;height:auto;-webkit-justify-content:center;justify-content:center;margin-top:',
        [0, 85],
        ';width:100%}\n'
    ],
    'Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pos/faceCheck/faceCheck.wxss:1:2007)',
    {
        path: './pos/faceCheck/faceCheck.wxss'
    }
);
if (__vd_version_info__.delayedGwx) __wxAppCode__['pos/faceCheck/faceCheck.wxml'] = [$gwx0, './pos/faceCheck/faceCheck.wxml'];
else __wxAppCode__['pos/faceCheck/faceCheck.wxml'] = $gwx0('./pos/faceCheck/faceCheck.wxml');
__wxAppCode__['pos/historyList/historyList.wxss'] = setCssToHead(
    [
        'body{background-color:#f4f6f8}\n.',
        [1],
        'confirm_button,.',
        [1],
        'confirm_button_disable{background:#ef4034!important;border:#1f1b27!important;border-radius:',
        [0, 49],
        '!important;color:#fff!important;font-size:',
        [0, 36],
        '!important;font-weight:',
        [0, 500],
        '!important;height:',
        [0, 98],
        '!important;margin:0 auto;width:',
        [0, 670],
        '}\n.',
        [1],
        'confirm_button_disable{opacity:.3}\n.',
        [1],
        'cancle_button{background:#f4f6f8!important;border:#f7f7f7!important;border-radius:',
        [0, 49],
        '!important;color:#45464e!important;font-size:',
        [0, 36],
        '!important;font-weight:0!important;height:',
        [0, 98],
        '!important;margin:0 auto;width:',
        [0, 670],
        '}\n.',
        [1],
        'small_confirm_button{background:#ef4034!important;border:#1f1b27!important;color:#fff!important;font-weight:',
        [0, 500],
        '!important}\n.',
        [1],
        'small_cancle_button,.',
        [1],
        'small_confirm_button{border-radius:',
        [0, 40],
        '!important;font-size:',
        [0, 36],
        '!important;height:',
        [0, 80],
        '!important;margin:0 auto;width:',
        [0, 240],
        '}\n.',
        [1],
        'small_cancle_button{background:#f4f6f8!important;border:#f7f7f7!important;color:#45464e!important;font-weight:0!important}\n.',
        [1],
        'placeholder_customer_input{color:#c1c1c1;font-family:PingFang SC;font-size:',
        [0, 32],
        '!important;font-weight:400}\n.',
        [1],
        'use_box{background-color:#fff;margin-top:',
        [0, 24],
        '}\n.',
        [1],
        'use_box .',
        [1],
        'use_list{margin:0 ',
        [0, 40],
        '}\n.',
        [1],
        'use_box .',
        [1],
        'use_list .',
        [1],
        'use_cell{height:',
        [0, 184],
        ';position:relative}\n.',
        [1],
        'use_box .',
        [1],
        'use_list .',
        [1],
        'use_cell:not(:last-child){border-bottom:',
        [0, 2],
        ' solid #f7f7f7}\n.',
        [1],
        'use_box .',
        [1],
        'use_list .',
        [1],
        'use_cell .',
        [1],
        'order_id{color:#1f1b27;font-family:PingFang SC;font-size:',
        [0, 28],
        ';font-weight:600;position:absolute;top:',
        [0, 48],
        '}\n.',
        [1],
        'use_box .',
        [1],
        'use_list .',
        [1],
        'use_cell .',
        [1],
        'tran_time{bottom:',
        [0, 41],
        ';color:#c1c1c1;font-family:PingFang SC;font-size:',
        [0, 26],
        ';position:absolute}\n.',
        [1],
        'use_box .',
        [1],
        'use_list .',
        [1],
        'use_cell .',
        [1],
        'trans_price{color:#45464e;font-family:PingFang SC;font-size:',
        [0, 30],
        ';position:absolute;right:0;top:',
        [0, 40],
        '}\n'
    ],
    'Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pos/historyList/historyList.wxss:1:1)',
    {
        path: './pos/historyList/historyList.wxss'
    }
);
if (__vd_version_info__.delayedGwx) __wxAppCode__['pos/historyList/historyList.wxml'] = [$gwx0, './pos/historyList/historyList.wxml'];
else __wxAppCode__['pos/historyList/historyList.wxml'] = $gwx0('./pos/historyList/historyList.wxml');
__wxAppCode__['pos/posBindSuccess/posBindSuccess.wxss'] = setCssToHead(
    [
        'body{background-color:#f4f6f8}\n.',
        [1],
        'confirm_button,.',
        [1],
        'confirm_button_disable{background:#ef4034!important;border:#1f1b27!important;border-radius:',
        [0, 49],
        '!important;color:#fff!important;font-size:',
        [0, 36],
        '!important;font-weight:',
        [0, 500],
        '!important;height:',
        [0, 98],
        '!important;margin:0 auto;width:',
        [0, 670],
        '}\n.',
        [1],
        'confirm_button_disable{opacity:.3}\n.',
        [1],
        'cancle_button{background:#f4f6f8!important;border:#f7f7f7!important;border-radius:',
        [0, 49],
        '!important;color:#45464e!important;font-size:',
        [0, 36],
        '!important;font-weight:0!important;height:',
        [0, 98],
        '!important;margin:0 auto;width:',
        [0, 670],
        '}\n.',
        [1],
        'small_confirm_button{background:#ef4034!important;border:#1f1b27!important;color:#fff!important;font-weight:',
        [0, 500],
        '!important}\n.',
        [1],
        'small_cancle_button,.',
        [1],
        'small_confirm_button{border-radius:',
        [0, 40],
        '!important;font-size:',
        [0, 36],
        '!important;height:',
        [0, 80],
        '!important;margin:0 auto;width:',
        [0, 240],
        '}\n.',
        [1],
        'small_cancle_button{background:#f4f6f8!important;border:#f7f7f7!important;color:#45464e!important;font-weight:0!important}\n.',
        [1],
        'placeholder_customer_input{color:#c1c1c1;font-family:PingFang SC;font-size:',
        [0, 32],
        '!important;font-weight:400}\nbody{-webkit-flex-direction:column;flex-direction:column;height:100%}\n.',
        [1],
        'page_wrap,body{display:-webkit-flex;display:flex}\n.',
        [1],
        'page_wrap{-webkit-align-items:center;align-items:center;background-color:#fff;-webkit-flex:1;flex:1;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center;margin-top:',
        [0, 40],
        ';position:relative;width:100%}\n.',
        [1],
        'page_wrap .',
        [1],
        'icon_wrap{height:',
        [0, 172],
        ';position:absolute;top:',
        [0, 64],
        ';width:',
        [0, 190],
        '}\n.',
        [1],
        'page_wrap .',
        [1],
        'icon_wrap .',
        [1],
        'success_icon{display:block;max-height:100%;max-width:100%}\n.',
        [1],
        'page_wrap .',
        [1],
        'tip_txt{padding:',
        [0, 40],
        ' 0;position:absolute;top:',
        [0, 294],
        '}\n.',
        [1],
        'page_wrap .',
        [1],
        'btn_wrap{position:absolute;top:',
        [0, 419],
        '}\n.',
        [1],
        'page_wrap .',
        [1],
        'btn_wrap .',
        [1],
        'confirm_button{background:linear-gradient(90deg,#f4c998,#d9a169)!important;box-shadow:',
        [0, 2],
        ' ',
        [0, 10],
        ' ',
        [0, 24],
        ' #f9dcb9}\n.',
        [1],
        'page_wrap .',
        [1],
        'bg{background:#d9b372!important}\n'
    ],
    'Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pos/posBindSuccess/posBindSuccess.wxss:1:1125)',
    {
        path: './pos/posBindSuccess/posBindSuccess.wxss'
    }
);
if (__vd_version_info__.delayedGwx) __wxAppCode__['pos/posBindSuccess/posBindSuccess.wxml'] = [$gwx0, './pos/posBindSuccess/posBindSuccess.wxml'];
else __wxAppCode__['pos/posBindSuccess/posBindSuccess.wxml'] = $gwx0('./pos/posBindSuccess/posBindSuccess.wxml');
__wxAppCode__['pos/posList/posList.wxss'] = setCssToHead(
    [
        'body{background-color:#f4f6f8}\n.',
        [1],
        'confirm_button,.',
        [1],
        'confirm_button_disable{background:#ef4034!important;border:#1f1b27!important;border-radius:',
        [0, 49],
        '!important;color:#fff!important;font-size:',
        [0, 36],
        '!important;font-weight:',
        [0, 500],
        '!important;height:',
        [0, 98],
        '!important;margin:0 auto;width:',
        [0, 670],
        '}\n.',
        [1],
        'confirm_button_disable{opacity:.3}\n.',
        [1],
        'cancle_button{background:#f4f6f8!important;border:#f7f7f7!important;border-radius:',
        [0, 49],
        '!important;color:#45464e!important;font-size:',
        [0, 36],
        '!important;font-weight:0!important;height:',
        [0, 98],
        '!important;margin:0 auto;width:',
        [0, 670],
        '}\n.',
        [1],
        'small_confirm_button{background:#ef4034!important;border:#1f1b27!important;color:#fff!important;font-weight:',
        [0, 500],
        '!important}\n.',
        [1],
        'small_cancle_button,.',
        [1],
        'small_confirm_button{border-radius:',
        [0, 40],
        '!important;font-size:',
        [0, 36],
        '!important;height:',
        [0, 80],
        '!important;margin:0 auto;width:',
        [0, 240],
        '}\n.',
        [1],
        'small_cancle_button{background:#f4f6f8!important;border:#f7f7f7!important;color:#45464e!important;font-weight:0!important}\n.',
        [1],
        'placeholder_customer_input{color:#c1c1c1;font-family:PingFang SC;font-size:',
        [0, 32],
        '!important;font-weight:400}\n.',
        [1],
        'posList{-webkit-flex-direction:column;flex-direction:column;margin:0 ',
        [0, 40],
        ';min-height:100vh}\n.',
        [1],
        'posList,.',
        [1],
        'posList .',
        [1],
        'pos_list_none{display:-webkit-flex;display:flex}\n.',
        [1],
        'posList .',
        [1],
        'pos_list_none{height:',
        [0, 430],
        ';-webkit-justify-content:center;justify-content:center;margin:',
        [0, 88],
        ' auto 0;width:',
        [0, 353],
        '}\n.',
        [1],
        'posList .',
        [1],
        'scan_box{background-color:#fff;border-radius:',
        [0, 12],
        ';border-top:',
        [0, 1],
        ' solid transparent;height:',
        [0, 254],
        ';margin-top:',
        [0, 24],
        ';width:100%}\n.',
        [1],
        'posList .',
        [1],
        'scan_box .',
        [1],
        'cancle_button,.',
        [1],
        'posList .',
        [1],
        'scan_box .',
        [1],
        'confirm_button{width:',
        [0, 606],
        '}\n.',
        [1],
        'posList .',
        [1],
        'scan_box .',
        [1],
        'scan_box_title{color:#9292a0;font-size:',
        [0, 28],
        ';font-weight:700;margin-left:',
        [0, 41],
        ';margin-top:',
        [0, 50],
        '}\n.',
        [1],
        'posList .',
        [1],
        'scan_box .',
        [1],
        'input_cell{-webkit-align-items:center;align-items:center;border-bottom:',
        [0, 1],
        ' solid #f7f7f7;display:-webkit-flex;display:flex;height:',
        [0, 100],
        ';margin:0 ',
        [0, 32],
        '}\n.',
        [1],
        'posList .',
        [1],
        'scan_box .',
        [1],
        'input_cell .',
        [1],
        'label{color:#45464e;font-family:PingFang SC-Medium,PingFang SC;font-size:',
        [0, 30],
        '}\n.',
        [1],
        'posList .',
        [1],
        'scan_box .',
        [1],
        'input_cell .',
        [1],
        'scan_num_input{color:#1f1b27;-webkit-flex:1;flex:1;font-size:',
        [0, 26],
        ';line-height:',
        [0, 30],
        ';margin-left:',
        [0, 20],
        ';margin-top:',
        [0, 4],
        ';padding:0;width:0}\n.',
        [1],
        'posList .',
        [1],
        'scan_box .',
        [1],
        'input_cell .',
        [1],
        'placeholder_customer{color:#c1c1c1;font-family:PingFang SC;font-size:',
        [0, 26],
        ';font-weight:400;line-height:37px}\n.',
        [1],
        'posList .',
        [1],
        'scan_box .',
        [1],
        'input_cell .',
        [1],
        'scan_icon{height:',
        [0, 35],
        ';padding-left:',
        [0, 16],
        ';width:',
        [0, 35],
        '}\n.',
        [1],
        'posList .',
        [1],
        'scan_box .',
        [1],
        'scan_button{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;margin:',
        [0, 24],
        ' ',
        [0, 32],
        ' 0}\n.',
        [1],
        'posList .',
        [1],
        'scan_box .',
        [1],
        'scan_button wx-button{width:',
        [0, 630],
        '!important}\n.',
        [1],
        'posList .',
        [1],
        'scan_box .',
        [1],
        'scan_tips{color:#c1c1c1;font-family:PingFang SC;font-size:',
        [0, 24],
        ';font-weight:500;margin-left:',
        [0, 40],
        ';margin-top:',
        [0, 26],
        '}\n.',
        [1],
        'posList .',
        [1],
        'total_bind_number{-webkit-align-items:center;align-items:center;color:#45464e;display:-webkit-flex;display:flex;font-size:',
        [0, 28],
        ';font-weight:500;-webkit-justify-content:space-between;justify-content:space-between;margin:',
        [0, 24],
        ' 0 ',
        [0, 24],
        ' ',
        [0, 40],
        '}\n.',
        [1],
        'posList .',
        [1],
        'total_bind_number .',
        [1],
        'right{color:#c1c1c1;font-size:',
        [0, 26],
        ';height:100%;margin-right:',
        [0, 40],
        '}\n.',
        [1],
        'posList .',
        [1],
        'bind_list{background-color:#fff;border-radius:',
        [0, 12],
        ';-webkit-flex:1;flex:1;margin-top:',
        [0, 32],
        '}\n.',
        [1],
        'posList .',
        [1],
        'bind_list .',
        [1],
        'total_bind_number{color:#9292a0;font-size:',
        [0, 28],
        ';font-weight:500;margin:',
        [0, 24],
        ' 0 ',
        [0, 24],
        ' ',
        [0, 40],
        '}\n.',
        [1],
        'posList .',
        [1],
        'bind_list .',
        [1],
        'bind_cell_box .',
        [1],
        'bind_pos_cell{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;height:',
        [0, 147],
        ';-webkit-justify-content:space-between;justify-content:space-between;margin:0 ',
        [0, 40],
        '}\n.',
        [1],
        'posList .',
        [1],
        'bind_list .',
        [1],
        'bind_cell_box .',
        [1],
        'bind_pos_cell:not(:last-child){border-bottom:',
        [0, 2],
        ' solid #f7f7f7}\n.',
        [1],
        'posList .',
        [1],
        'bind_list .',
        [1],
        'bind_cell_box .',
        [1],
        'bind_pos_cell .',
        [1],
        'lf_cell{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.',
        [1],
        'posList .',
        [1],
        'bind_list .',
        [1],
        'bind_cell_box .',
        [1],
        'bind_pos_cell .',
        [1],
        'lf_cell .',
        [1],
        'pos_icon{height:',
        [0, 69],
        ';width:',
        [0, 69],
        '}\n.',
        [1],
        'posList .',
        [1],
        'bind_list .',
        [1],
        'bind_cell_box .',
        [1],
        'bind_pos_cell .',
        [1],
        'lf_cell .',
        [1],
        'pos_sn_detail{color:#1f1b27;font-size:',
        [0, 26],
        ';font-weight:500;margin-left:',
        [0, 35],
        '}\n.',
        [1],
        'posList .',
        [1],
        'bind_list .',
        [1],
        'bind_cell_box .',
        [1],
        'bind_pos_cell .',
        [1],
        'lf_cell .',
        [1],
        'pos_sn_detail .',
        [1],
        'active_status{font-family:PingFang SC;font-size:',
        [0, 26],
        ';font-weight:500;margin-top:',
        [0, 10],
        '}\n.',
        [1],
        'posList .',
        [1],
        'bind_list .',
        [1],
        'bind_cell_box .',
        [1],
        'bind_pos_cell .',
        [1],
        'lf_cell .',
        [1],
        'pos_sn_detail .',
        [1],
        'active{color:#45464e}\n.',
        [1],
        'posList .',
        [1],
        'bind_list .',
        [1],
        'bind_cell_box .',
        [1],
        'bind_pos_cell .',
        [1],
        'lf_cell .',
        [1],
        'pos_sn_detail .',
        [1],
        'unactive{color:#c1c1c1}\n.',
        [1],
        'posList .',
        [1],
        'bind_list .',
        [1],
        'bind_cell_box .',
        [1],
        'bind_pos_cell .',
        [1],
        'rt_cell .',
        [1],
        'pos_operate{-webkit-align-items:center;align-items:center;background-color:#fff;border:',
        [0, 1],
        ' solid #ef4034;border-radius:',
        [0, 27],
        ';color:#ef4034;display:-webkit-flex;display:flex;font-size:',
        [0, 24],
        ';font-weight:400;height:',
        [0, 54],
        ';-webkit-justify-content:center;justify-content:center;width:',
        [0, 160],
        '}\n.',
        [1],
        'posList .',
        [1],
        'bind_list .',
        [1],
        'bind_cell_box .',
        [1],
        'bind_pos_cell .',
        [1],
        'rt_cell .',
        [1],
        'pending{color:#ffa61d;font-size:',
        [0, 26],
        '}\n.',
        [1],
        'posList .',
        [1],
        'bind_list .',
        [1],
        'bind_cell_box .',
        [1],
        'bind_audit_status{-webkit-align-items:center;align-items:center;background:rgba(255,80,36,.1);color:#f74949;display:-webkit-flex;display:flex;font-family:PingFang SC;font-size:',
        [0, 24],
        ';font-weight:500;height:',
        [0, 60],
        ';-webkit-justify-content:center;justify-content:center;margin:0 ',
        [0, 12],
        ';word-break:break-all}\n.',
        [1],
        'posList .',
        [1],
        'bind_list .',
        [1],
        'bind_cell_box .',
        [1],
        'bind_audit_status wx-view{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;margin-left:',
        [0, 40],
        '}\n.',
        [1],
        'unBindTips{color:#9292a0;font-family:PingFang SC;font-size:',
        [0, 30],
        ';font-weight:400;margin-top:',
        [0, 32],
        ';text-align:center}\n.',
        [1],
        'text_area_box{background:#f4f6f8;border:',
        [0, 1],
        ' solid transparent;border-radius:',
        [0, 12],
        ';display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:',
        [0, 317],
        ';margin:',
        [0, 24],
        ' auto;width:',
        [0, 586],
        '}\n.',
        [1],
        'text_area_box .',
        [1],
        'area_title{color:#c1c1c1;margin:',
        [0, 32],
        '}\n.',
        [1],
        'text_area_box .',
        [1],
        'area_box,.',
        [1],
        'text_area_box .',
        [1],
        'area_title{font-family:PingFang SC;font-size:',
        [0, 28],
        ';font-weight:400}\n.',
        [1],
        'text_area_box .',
        [1],
        'area_box{color:#45464e;margin:0 auto;width:',
        [0, 532],
        '}\n'
    ],
    'Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pos/posList/posList.wxss:1:5175)',
    {
        path: './pos/posList/posList.wxss'
    }
);
if (__vd_version_info__.delayedGwx) __wxAppCode__['pos/posList/posList.wxml'] = [$gwx0, './pos/posList/posList.wxml'];
else __wxAppCode__['pos/posList/posList.wxml'] = $gwx0('./pos/posList/posList.wxml');
__wxAppCode__['pos/terRecord/terCanvas/terCanvas.wxss'] = setCssToHead(
    [
        'body{background-color:#f4f6f8}\n.',
        [1],
        'confirm_button,.',
        [1],
        'confirm_button_disable{background:#ef4034!important;border:#1f1b27!important;border-radius:',
        [0, 49],
        '!important;color:#fff!important;font-size:',
        [0, 36],
        '!important;font-weight:',
        [0, 500],
        '!important;height:',
        [0, 98],
        '!important;margin:0 auto;width:',
        [0, 670],
        '}\n.',
        [1],
        'confirm_button_disable{opacity:.3}\n.',
        [1],
        'cancle_button{background:#f4f6f8!important;border:#f7f7f7!important;border-radius:',
        [0, 49],
        '!important;color:#45464e!important;font-size:',
        [0, 36],
        '!important;font-weight:0!important;height:',
        [0, 98],
        '!important;margin:0 auto;width:',
        [0, 670],
        '}\n.',
        [1],
        'small_confirm_button{background:#ef4034!important;border:#1f1b27!important;color:#fff!important;font-weight:',
        [0, 500],
        '!important}\n.',
        [1],
        'small_cancle_button,.',
        [1],
        'small_confirm_button{border-radius:',
        [0, 40],
        '!important;font-size:',
        [0, 36],
        '!important;height:',
        [0, 80],
        '!important;margin:0 auto;width:',
        [0, 240],
        '}\n.',
        [1],
        'small_cancle_button{background:#f4f6f8!important;border:#f7f7f7!important;color:#45464e!important;font-weight:0!important}\n.',
        [1],
        'placeholder_customer_input{color:#c1c1c1;font-family:PingFang SC;font-size:',
        [0, 32],
        '!important;font-weight:400}\nbody{background-color:#fff}\n.',
        [1],
        'template{background-color:#f4f6f8;color:#c4c4c4;font-size:',
        [0, 120],
        ';font-weight:700;letter-spacing:',
        [0, 20],
        ';text-align:center}\nwx-canvas{background:hsla(0,0%,100%,0);position:absolute;top:0}\n.',
        [1],
        'btn{bottom:0;height:68px;position:absolute}\n.',
        [1],
        'box,.',
        [1],
        'btn{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;width:100%}\n.',
        [1],
        'box{margin:0 70px}\n.',
        [1],
        'tips{color:#45464e;-webkit-flex:1;flex:1;font-family:PingFang SC;font-size:',
        [0, 14],
        ';font-weight:400;width:0}\n.',
        [1],
        'btn wx-button:last-child{background-color:#ef4034;margin-left:16px}\nwx-button{background-color:#e7e7e7;border-radius:',
        [0, 18],
        ';color:#45464e;font-size:',
        [0, 15],
        ';font-weight:500;height:',
        [0, 36],
        ';line-height:',
        [0, 36],
        ';text-align:center;width:',
        [0, 85],
        '}\nwx-button::after{border:none}\n'
    ],
    'Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pos/terRecord/terCanvas/terCanvas.wxss:1:1793)',
    {
        path: './pos/terRecord/terCanvas/terCanvas.wxss'
    }
);
if (__vd_version_info__.delayedGwx) __wxAppCode__['pos/terRecord/terCanvas/terCanvas.wxml'] = [$gwx0, './pos/terRecord/terCanvas/terCanvas.wxml'];
else __wxAppCode__['pos/terRecord/terCanvas/terCanvas.wxml'] = $gwx0('./pos/terRecord/terCanvas/terCanvas.wxml');
__wxAppCode__['pos/terRecord/terCommitmentletter/terCommitmentletter.wxss'] = setCssToHead(
    [
        'body{background-color:#f4f6f8}\n.',
        [1],
        'confirm_button,.',
        [1],
        'confirm_button_disable{background:#ef4034!important;border:#1f1b27!important;border-radius:',
        [0, 49],
        '!important;color:#fff!important;font-size:',
        [0, 36],
        '!important;font-weight:',
        [0, 500],
        '!important;height:',
        [0, 98],
        '!important;margin:0 auto;width:',
        [0, 670],
        '}\n.',
        [1],
        'confirm_button_disable{opacity:.3}\n.',
        [1],
        'cancle_button{background:#f4f6f8!important;border:#f7f7f7!important;border-radius:',
        [0, 49],
        '!important;color:#45464e!important;font-size:',
        [0, 36],
        '!important;font-weight:0!important;height:',
        [0, 98],
        '!important;margin:0 auto;width:',
        [0, 670],
        '}\n.',
        [1],
        'small_confirm_button{background:#ef4034!important;border:#1f1b27!important;color:#fff!important;font-weight:',
        [0, 500],
        '!important}\n.',
        [1],
        'small_cancle_button,.',
        [1],
        'small_confirm_button{border-radius:',
        [0, 40],
        '!important;font-size:',
        [0, 36],
        '!important;height:',
        [0, 80],
        '!important;margin:0 auto;width:',
        [0, 240],
        '}\n.',
        [1],
        'small_cancle_button{background:#f4f6f8!important;border:#f7f7f7!important;color:#45464e!important;font-weight:0!important}\n.',
        [1],
        'placeholder_customer_input{color:#c1c1c1;font-family:PingFang SC;font-size:',
        [0, 32],
        '!important;font-weight:400}\nbody{background-color:#fff}\n.',
        [1],
        'com_letter_container{background-color:#fff;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;padding:',
        [0, 64],
        ' ',
        [0, 40],
        '}\n.',
        [1],
        'com_letter_container wx-view{color:#45464e;font-family:PingFang SC;font-size:',
        [0, 28],
        ';font-weight:400}\n.',
        [1],
        'com_letter_container .',
        [1],
        'sign_image{background-color:#f4f6f8;border-radius:',
        [0, 12],
        ';height:',
        [0, 260],
        ';margin-bottom:',
        [0, 24],
        ';margin-top:',
        [0, 24],
        ';width:100%}\n.',
        [1],
        'com_letter_container .',
        [1],
        'com_letter_hint{color:#9292a0}\n.',
        [1],
        'com_letter_container .',
        [1],
        'confirm_button{margin-top:',
        [0, 86],
        '}\n.',
        [1],
        'com_letter_container .',
        [1],
        'van-button__text{color:#fff!important;font-size:',
        [0, 36],
        '!important;font-weight:500!important}\n.',
        [1],
        'com_letter_container .',
        [1],
        'rewrite{-webkit-align-self:center;align-self:center;color:#ef4034;font-family:PingFang SC;font-size:',
        [0, 30],
        ';font-weight:500;margin-top:',
        [0, 23],
        '}\n.',
        [1],
        'com_letter_container .',
        [1],
        'empty_box{-webkit-align-items:center;align-items:center;-webkit-align-self:center;align-self:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center;margin-top:',
        [0, 50],
        '}\n'
    ],
    'Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pos/terRecord/terCommitmentletter/terCommitmentletter.wxss:1:1244)',
    {
        path: './pos/terRecord/terCommitmentletter/terCommitmentletter.wxss'
    }
);
if (__vd_version_info__.delayedGwx)
    __wxAppCode__['pos/terRecord/terCommitmentletter/terCommitmentletter.wxml'] = [$gwx0, './pos/terRecord/terCommitmentletter/terCommitmentletter.wxml'];
else __wxAppCode__['pos/terRecord/terCommitmentletter/terCommitmentletter.wxml'] = $gwx0('./pos/terRecord/terCommitmentletter/terCommitmentletter.wxml');
__wxAppCode__['pos/terRecord/terFaceCheck/terFaceCheck.wxss'] = setCssToHead(
    [
        'body{background-color:#f4f6f8}\n.',
        [1],
        'confirm_button,.',
        [1],
        'confirm_button_disable{background:#ef4034!important;border:#1f1b27!important;border-radius:',
        [0, 49],
        '!important;color:#fff!important;font-size:',
        [0, 36],
        '!important;font-weight:',
        [0, 500],
        '!important;height:',
        [0, 98],
        '!important;margin:0 auto;width:',
        [0, 670],
        '}\n.',
        [1],
        'confirm_button_disable{opacity:.3}\n.',
        [1],
        'cancle_button{background:#f4f6f8!important;border:#f7f7f7!important;border-radius:',
        [0, 49],
        '!important;color:#45464e!important;font-size:',
        [0, 36],
        '!important;font-weight:0!important;height:',
        [0, 98],
        '!important;margin:0 auto;width:',
        [0, 670],
        '}\n.',
        [1],
        'small_confirm_button{background:#ef4034!important;border:#1f1b27!important;color:#fff!important;font-weight:',
        [0, 500],
        '!important}\n.',
        [1],
        'small_cancle_button,.',
        [1],
        'small_confirm_button{border-radius:',
        [0, 40],
        '!important;font-size:',
        [0, 36],
        '!important;height:',
        [0, 80],
        '!important;margin:0 auto;width:',
        [0, 240],
        '}\n.',
        [1],
        'small_cancle_button{background:#f4f6f8!important;border:#f7f7f7!important;color:#45464e!important;font-weight:0!important}\n.',
        [1],
        'placeholder_customer_input{color:#c1c1c1;font-family:PingFang SC;font-size:',
        [0, 32],
        '!important;font-weight:400}\nbody{background-color:#fff}\n.',
        [1],
        'login_container{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:100%;width:100%}\n.',
        [1],
        'login_container .',
        [1],
        'top_lineviewBox{background-color:#ececec;height:',
        [0, 17],
        ';width:100%}\n.',
        [1],
        'login_container .',
        [1],
        'login_appTopBox{display:-webkit-flex;display:flex;height:auto;-webkit-justify-content:center;justify-content:center;margin-top:',
        [0, 99],
        ';width:100%}\n.',
        [1],
        'login_container .',
        [1],
        'login_appTopBox .',
        [1],
        'login_nhtext{color:#1f1b27;font-size:',
        [0, 70],
        ';font-weight:300;height:auto;text-align:center;width:100%}\n.',
        [1],
        'login_container .',
        [1],
        'login_desc{display:-webkit-flex;display:flex;height:auto;-webkit-justify-content:center;justify-content:center;margin-top:',
        [0, 50],
        ';width:100%}\n.',
        [1],
        'login_container .',
        [1],
        'login_desc wx-text{color:#45464e;text-align:left;width:80%}\n.',
        [1],
        'login_container .',
        [1],
        'login_headerBox{display:-webkit-flex;display:flex;height:',
        [0, 471],
        ';-webkit-justify-content:center;justify-content:center;margin-top:',
        [0, 50],
        ';width:100%}\n.',
        [1],
        'login_container .',
        [1],
        'login_headerBox wx-image{height:',
        [0, 471],
        ';width:',
        [0, 471],
        '}\n.',
        [1],
        'login_container .',
        [1],
        'login_btnBox{display:-webkit-flex;display:flex;height:auto;-webkit-justify-content:center;justify-content:center;margin-top:',
        [0, 85],
        ';width:100%}\n'
    ],
    'Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pos/terRecord/terFaceCheck/terFaceCheck.wxss:1:2007)',
    {
        path: './pos/terRecord/terFaceCheck/terFaceCheck.wxss'
    }
);
if (__vd_version_info__.delayedGwx) __wxAppCode__['pos/terRecord/terFaceCheck/terFaceCheck.wxml'] = [$gwx0, './pos/terRecord/terFaceCheck/terFaceCheck.wxml'];
else __wxAppCode__['pos/terRecord/terFaceCheck/terFaceCheck.wxml'] = $gwx0('./pos/terRecord/terFaceCheck/terFaceCheck.wxml');
var __subPageFrameEndTime__ = Date.now();
