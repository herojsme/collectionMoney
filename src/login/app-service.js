/*v0.5vv_20200413_syb_scopedata*/ global.__wcc_version__ = 'v0.5vv_20200413_syb_scopedata';
global.__wcc_version_info__ = {
    customComponents: true,
    fixZeroRpx: true,
    propValueDeepCopy: false
};
var $gwxc;
var $gaic = {};
$gwx1 = function (path, global) {
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
        console.warn('WXMLRT_$gwx1:' + m);
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1 || [];
    function gz$gwx1_1() {
        if (__WXML_GLOBAL__.ops_cached.$gwx1_1) return __WXML_GLOBAL__.ops_cached.$gwx1_1;
        __WXML_GLOBAL__.ops_cached.$gwx1_1 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'login_container']);
            Z([3, 'scroll']);
            Z([3, 'lower']);
            Z([3, 'upper']);
            Z([[7], [3, 'toView']]);
            Z([[7], [3, 'scrollTop']]);
            Z([3, 'true']);
            Z([a, [3, 'height: '], [[7], [3, 'scrollHeight']], [3, 'rpx;']]);
            Z([3, 'idx']);
            Z([3, 'item']);
            Z([[7], [3, 'accontArr']]);
            Z([3, 'item.customerNo']);
            Z([
                [2, '=='],
                [[6], [[7], [3, 'item']], [3, 'status']],
                [1, 'TRUE']
            ]);
            Z([3, 'clickAccont']);
            Z([3, 'loginAccontBox']);
            Z([[7], [3, 'idx']]);
            Z([[7], [3, 'item']]);
            Z([3, '80rpx']);
            Z([3, '/static/assets/image/login/login_moudle_rowHeader.png']);
            Z(z[17]);
            Z(z[17]);
            Z([3, '/static/assets/image/login/login_unheader.png']);
            Z(z[17]);
            Z([3, 'clickBindLogin']);
            Z([3, 'confirm_button']);
            Z([3, 'info']);
        })(__WXML_GLOBAL__.ops_cached.$gwx1_1);
        return __WXML_GLOBAL__.ops_cached.$gwx1_1;
    }
    function gz$gwx1_2() {
        if (__WXML_GLOBAL__.ops_cached.$gwx1_2) return __WXML_GLOBAL__.ops_cached.$gwx1_2;
        __WXML_GLOBAL__.ops_cached.$gwx1_2 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'login_container']);
            Z([3, 'class_inputBox']);
            Z([1, false]);
            Z([3, 'always']);
            Z([1, true]);
            Z([
                [2, '?:'],
                [
                    [2, '>'],
                    [[6], [[7], [3, 'accont']], [3, 'length']],
                    [1, 0]
                ],
                [1, 'placeholderInputStyle'],
                [1, 'placeholderNormalStyle']
            ]);
            Z([[7], [3, 'accont']]);
            Z([3, '请输入登录账号']);
            Z(z[2]);
            Z(z[3]);
            Z(z[4]);
            Z([
                [2, '?:'],
                [
                    [2, '>'],
                    [[6], [[7], [3, 'password']], [3, 'length']],
                    [1, 0]
                ],
                [1, 'placeholderInputStyle'],
                [1, 'placeholderNormalStyle']
            ]);
            Z([[7], [3, 'password']]);
            Z([3, '请输入登录密码']);
            Z([3, 'password']);
            Z([[7], [3, 'showIdcardLogin']]);
            Z([3, 'van-toast']);
            Z([3, 'clickBindLogin']);
            Z([3, 'confirm_button']);
            Z([3, 'info']);
            Z([3, 'clickRegisterAccont']);
            Z([[7], [3, 'showRegister']]);
        })(__WXML_GLOBAL__.ops_cached.$gwx1_2);
        return __WXML_GLOBAL__.ops_cached.$gwx1_2;
    }
    function gz$gwx1_3() {
        if (__WXML_GLOBAL__.ops_cached.$gwx1_3) return __WXML_GLOBAL__.ops_cached.$gwx1_3;
        __WXML_GLOBAL__.ops_cached.$gwx1_3 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'login_container']);
            Z([3, 'optionDataChange']);
            Z([3, 'idCard']);
            Z([3, '点击上传身份证正面照']);
            Z([[7], [3, 'zmIdCardpopimageUrl']]);
            Z([1, true]);
            Z([[7], [3, 'idCardImageV']]);
            Z([3, '点击上传身份证背面照']);
            Z([[7], [3, 'fmIdCardpopidFmUrl']]);
            Z(z[5]);
            Z([[7], [3, 'idCardFanMianV']]);
            Z(z[1]);
            Z([3, 'bankCard']);
            Z([3, '银行卡正面']);
            Z([[7], [3, 'bankCardImageV']]);
            Z(z[5]);
            Z([3, 'right']);
            Z([3, '姓名']);
            Z([[7], [3, 'idcardName']]);
            Z([3, '请输入真实姓名']);
            Z(z[5]);
            Z(z[16]);
            Z([3, '身份证号']);
            Z([[7], [3, 'idCardNumber']]);
            Z([3, '请输入身份证号']);
            Z([1, false]);
            Z([3, '有效期']);
            Z([3, 'onChange']);
            Z([3, 'right-icon']);
            Z([[7], [3, 'radio']]);
            Z([3, 'changeDate_box']);
            Z([3, 'radio_custom']);
            Z([3, '1']);
            Z([3, 'rm']);
            Z([3, '2']);
            Z([3, '']);
            Z([3, 'class_timeBox']);
            Z([3, 'showidCardDateSelect']);
            Z([
                [2, '?:'],
                [
                    [2, '=='],
                    [[7], [3, 'personStartTimeValue']],
                    [1, '开始时间']
                ],
                [1, 'class_stattTime'],
                [1, 'class_selectTime']
            ]);
            Z([3, 'arrow-down']);
            Z([3, 'showidCardDateEndSelect']);
            Z([
                [2, '?:'],
                [
                    [2, '=='],
                    [[7], [3, 'personEndTimeValue']],
                    [1, '结束时间']
                ],
                [1, 'class_endTime'],
                [1, 'class_selectTime']
            ]);
            Z(z[39]);
            Z(z[25]);
            Z(z[16]);
            Z([3, '银行卡号']);
            Z([[7], [3, 'bankCardnumber']]);
            Z([3, '请输入银行卡号']);
            Z([3, 'clickRow']);
            Z([3, '开户行']);
            Z(z[49]);
            Z([[7], [3, 'bankName']]);
            Z([
                [2, '?:'],
                [
                    [2, '=='],
                    [[7], [3, 'bankName']],
                    [1, '请选择']
                ],
                [1, 'class_cell_value_default'],
                [1, 'class_cell_value_select']
            ]);
            Z(z[48]);
            Z([3, '开户行所在地']);
            Z(z[54]);
            Z([[7], [3, 'areaNmae']]);
            Z([
                [2, '?:'],
                [
                    [2, '=='],
                    [[7], [3, 'areaNmae']],
                    [1, '请选择']
                ],
                [1, 'class_cell_value_default'],
                [1, 'class_cell_value_select']
            ]);
            Z(z[48]);
            Z([3, '开户支行']);
            Z(z[59]);
            Z([[7], [3, 'alliedBankName']]);
            Z([
                [2, '?:'],
                [
                    [2, '=='],
                    [[7], [3, 'alliedBankName']],
                    [1, '请选择']
                ],
                [1, 'class_cell_value_default'],
                [1, 'class_cell_value_select']
            ]);
            Z(z[48]);
            Z([3, '经营地区']);
            Z(z[64]);
            Z([[7], [3, 'jyareaName']]);
            Z([
                [2, '?:'],
                [
                    [2, '=='],
                    [[7], [3, 'jyareaName']],
                    [1, '省/市/区']
                ],
                [1, 'class_cell_value_default'],
                [1, 'class_cell_value_select']
            ]);
            Z(z[5]);
            Z(z[16]);
            Z([3, '经营地址']);
            Z([[7], [3, 'jyAddress']]);
            Z([3, '请输入详细地址']);
            Z([3, 'onClickHyYtypeRow']);
            Z([3, 'class_hyrowBox']);
            Z([3, 'clearSelect']);
            Z([
                [2, '?:'],
                [
                    [2, '=='],
                    [[7], [3, 'hangyeName']],
                    [1, '若不输入则执行智能账单']
                ],
                [1, 'arrow'],
                [1, 'close']
            ]);
            Z([
                a,
                [3, 'width: '],
                [
                    [2, '?:'],
                    [
                        [2, '=='],
                        [[7], [3, 'hangyeName']],
                        [1, '若不输入则执行智能账单']
                    ],
                    [1, '40'],
                    [1, '80']
                ],
                [3, 'rpx; color:rgb(137, 137, 137); margin-right: 18rpx;']
            ]);
            Z([3, 'clickCommit']);
            Z([3, 'confirm_button']);
            Z([3, 'info']);
            Z([3, 'dismissPop']);
            Z([3, 'timeDataChange']);
            Z([3, 'start']);
            Z([[7], [3, 'showStartTime']]);
            Z(z[81]);
            Z(z[82]);
            Z([3, 'end']);
            Z([[7], [3, 'showEndTime']]);
            Z([3, 'bindConfirmAction']);
            Z([3, '取消']);
            Z([3, '#EF4034']);
            Z([3, '继续注册']);
            Z([[7], [3, 'idCardRenzhengShow']]);
            Z(z[5]);
            Z(z[5]);
            Z([3, '温馨提示']);
            Z([3, 'addressDataChange']);
            Z([3, 'bankaddress']);
            Z([[7], [3, 'showAreaPop']]);
            Z(z[25]);
            Z(z[97]);
            Z([3, 'jyaddress']);
            Z([[7], [3, 'showJYAreaPop']]);
            Z(z[5]);
        })(__WXML_GLOBAL__.ops_cached.$gwx1_3);
        return __WXML_GLOBAL__.ops_cached.$gwx1_3;
    }
    function gz$gwx1_4() {
        if (__WXML_GLOBAL__.ops_cached.$gwx1_4) return __WXML_GLOBAL__.ops_cached.$gwx1_4;
        __WXML_GLOBAL__.ops_cached.$gwx1_4 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'onClear']);
            Z([3, 'onChange']);
            Z([3, 'onSearch']);
            Z([3, 'searchCustom']);
            Z([[7], [3, 'value']]);
            Z([3, '请输入搜索关键词']);
        })(__WXML_GLOBAL__.ops_cached.$gwx1_4);
        return __WXML_GLOBAL__.ops_cached.$gwx1_4;
    }
    function gz$gwx1_5() {
        if (__WXML_GLOBAL__.ops_cached.$gwx1_5) return __WXML_GLOBAL__.ops_cached.$gwx1_5;
        __WXML_GLOBAL__.ops_cached.$gwx1_5 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'onClear']);
            Z([3, 'onChange']);
            Z([3, 'onSearch']);
            Z([3, 'searchCustom']);
            Z([[7], [3, 'value']]);
            Z([3, '请输入搜索关键词']);
        })(__WXML_GLOBAL__.ops_cached.$gwx1_5);
        return __WXML_GLOBAL__.ops_cached.$gwx1_5;
    }
    function gz$gwx1_6() {
        if (__WXML_GLOBAL__.ops_cached.$gwx1_6) return __WXML_GLOBAL__.ops_cached.$gwx1_6;
        __WXML_GLOBAL__.ops_cached.$gwx1_6 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'onClear']);
            Z([3, 'onChange']);
            Z([3, 'onSearch']);
            Z([3, 'searchCustom']);
            Z([[7], [3, 'value']]);
            Z([3, '请输入搜索关键词']);
        })(__WXML_GLOBAL__.ops_cached.$gwx1_6);
        return __WXML_GLOBAL__.ops_cached.$gwx1_6;
    }
    function gz$gwx1_7() {
        if (__WXML_GLOBAL__.ops_cached.$gwx1_7) return __WXML_GLOBAL__.ops_cached.$gwx1_7;
        __WXML_GLOBAL__.ops_cached.$gwx1_7 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'login_container']);
            Z([3, 'scroll']);
            Z([3, 'lower']);
            Z([3, 'upper']);
            Z([[7], [3, 'toView']]);
            Z([[7], [3, 'scrollTop']]);
            Z([3, 'true']);
            Z([a, [3, 'height: '], [[7], [3, 'scrollHeight']], [3, 'rpx;']]);
            Z([3, 'idx']);
            Z([3, 'item']);
            Z([[7], [3, 'accontArr']]);
            Z([3, 'item.customerNo']);
            Z([3, 'list_item']);
            Z([[7], [3, 'index']]);
            Z([[7], [3, 'item']]);
            Z([
                [2, '=='],
                [[6], [[7], [3, 'item']], [3, 'status']],
                [1, 'TRUE']
            ]);
            Z([3, 'clickAccont']);
            Z([
                a,
                [3, 'loginAccontBox '],
                [
                    [2, '?:'],
                    [
                        [2, '=='],
                        [[7], [3, 'selectIndex']],
                        [[7], [3, 'idx']]
                    ],
                    [1, 'loginSelectAccontBox'],
                    [1, '']
                ]
            ]);
            Z([[7], [3, 'idx']]);
            Z(z[14]);
            Z([3, '80rpx']);
            Z([3, '/static/assets/image/login/login_moudle_rowHeader.png']);
            Z(z[20]);
            Z(z[20]);
            Z([3, '/static/assets/image/login/login_unheader.png']);
            Z(z[20]);
            Z([3, 'clickBindLogin']);
            Z([3, 'confirm_button']);
            Z([3, 'info']);
        })(__WXML_GLOBAL__.ops_cached.$gwx1_7);
        return __WXML_GLOBAL__.ops_cached.$gwx1_7;
    }
    function gz$gwx1_8() {
        if (__WXML_GLOBAL__.ops_cached.$gwx1_8) return __WXML_GLOBAL__.ops_cached.$gwx1_8;
        __WXML_GLOBAL__.ops_cached.$gwx1_8 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'login_container']);
            Z([3, 'https://www.krppay.com/skb_assets/face_scan_icon.png']);
            Z([3, 'clickFaceScan']);
            Z([3, 'confirm_button']);
            Z([3, 'info']);
        })(__WXML_GLOBAL__.ops_cached.$gwx1_8);
        return __WXML_GLOBAL__.ops_cached.$gwx1_8;
    }
    function gz$gwx1_9() {
        if (__WXML_GLOBAL__.ops_cached.$gwx1_9) return __WXML_GLOBAL__.ops_cached.$gwx1_9;
        __WXML_GLOBAL__.ops_cached.$gwx1_9 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'toSetPayPwd']);
            Z([
                [2, '?:'],
                [
                    [2, '||'],
                    [
                        [2, '||'],
                        [
                            [2, '<'],
                            [[6], [[7], [3, 'oldPwd']], [3, 'length']],
                            [1, 6]
                        ],
                        [
                            [2, '<'],
                            [[6], [[7], [3, 'newPwd']], [3, 'length']],
                            [1, 6]
                        ]
                    ],
                    [
                        [2, '<'],
                        [[6], [[7], [3, 'newPwdAgain']], [3, 'length']],
                        [1, 6]
                    ]
                ],
                [1, 'cancle_button'],
                [1, 'confirm_button']
            ]);
            Z([3, 'info']);
        })(__WXML_GLOBAL__.ops_cached.$gwx1_9);
        return __WXML_GLOBAL__.ops_cached.$gwx1_9;
    }
    function gz$gwx1_10() {
        if (__WXML_GLOBAL__.ops_cached.$gwx1_10) return __WXML_GLOBAL__.ops_cached.$gwx1_10;
        __WXML_GLOBAL__.ops_cached.$gwx1_10 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'login_container']);
            Z([3, 'class_inputBox']);
            Z([3, 'onChange']);
            Z([1, false]);
            Z([3, 'always']);
            Z([1, true]);
            Z([
                [2, '?:'],
                [
                    [2, '>'],
                    [[6], [[7], [3, 'idCardName']], [3, 'length']],
                    [1, 0]
                ],
                [1, 'placeholderInputStyle'],
                [1, 'placeholderNormalStyle']
            ]);
            Z([[7], [3, 'idCardName']]);
            Z([3, '请输入姓名']);
            Z(z[2]);
            Z(z[3]);
            Z(z[4]);
            Z(z[5]);
            Z([
                [2, '?:'],
                [
                    [2, '>'],
                    [[6], [[7], [3, 'idCardnumber']], [3, 'length']],
                    [1, 0]
                ],
                [1, 'placeholderInputStyle'],
                [1, 'placeholderNormalStyle']
            ]);
            Z([[7], [3, 'idCardnumber']]);
            Z([3, '请输入身份证号']);
            Z([3, 'clickFaceScan']);
            Z([3, 'confirm_button']);
            Z([3, 'info']);
            Z([[7], [3, 'showRegister']]);
        })(__WXML_GLOBAL__.ops_cached.$gwx1_10);
        return __WXML_GLOBAL__.ops_cached.$gwx1_10;
    }
    function gz$gwx1_11() {
        if (__WXML_GLOBAL__.ops_cached.$gwx1_11) return __WXML_GLOBAL__.ops_cached.$gwx1_11;
        __WXML_GLOBAL__.ops_cached.$gwx1_11 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'login_container']);
            Z([3, 'https://www.krppay.com/skb_assets/login_login_icon.png']);
            Z([3, 'login_bottomBox']);
            Z([3, 'getPhoneNumber']);
            Z([3, 'confirm_button']);
            Z(z[3]);
            Z([3, 'info']);
            Z([3, 'clickAccontLogin']);
            Z([3, 'xcancle_button']);
            Z(z[6]);
        })(__WXML_GLOBAL__.ops_cached.$gwx1_11);
        return __WXML_GLOBAL__.ops_cached.$gwx1_11;
    }
    function gz$gwx1_12() {
        if (__WXML_GLOBAL__.ops_cached.$gwx1_12) return __WXML_GLOBAL__.ops_cached.$gwx1_12;
        __WXML_GLOBAL__.ops_cached.$gwx1_12 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'login_container']);
            Z([3, '136rpx']);
            Z([3, 'https://www.krppay.com/skb_assets/bg_success_icon.png']);
            Z([3, 'margin-left: 30rpx;']);
            Z(z[1]);
            Z([1, true]);
            Z([3, '商户名称']);
            Z([[7], [3, 'customerName']]);
            Z([3, 'copyText']);
            Z(z[5]);
            Z([3, '商户编号']);
            Z([[7], [3, 'customerNo']]);
            Z(z[8]);
            Z(z[5]);
            Z([3, '登录账号']);
            Z([[7], [3, 'username']]);
            Z(z[5]);
            Z([3, '默认密码']);
            Z([[7], [3, 'password']]);
            Z([3, 'clickBindGohome']);
            Z([3, 'confirm_button']);
            Z([3, 'info']);
        })(__WXML_GLOBAL__.ops_cached.$gwx1_12);
        return __WXML_GLOBAL__.ops_cached.$gwx1_12;
    }
    __WXML_GLOBAL__.ops_set.$gwx1 = z;
    __WXML_GLOBAL__.ops_init.$gwx1 = true;
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
        './login/accontIdCardSelect/accontIdCardSelect.wxml',
        './login/accontLogin/accontLogin.wxml',
        './login/accontRegister/accontRegister.wxml',
        './login/accontRegister/alliedBank/alliedBank.wxml',
        './login/accontRegister/bank/bank.wxml',
        './login/accontRegister/hangyetype/hangyetype.wxml',
        './login/accontSelect/accontSelect.wxml',
        './login/faceLogin/faceLogin.wxml',
        './login/forgetLogPwd/forgetLogPwd.wxml',
        './login/idCardLogin/idCardLogin.wxml',
        './login/index/index.wxml',
        './login/registerSuccess/registerSuccess.wxml'
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
        var z = gz$gwx1_1();
        var oB = _n('view');
        _rz(z, oB, 'class', 0, e, s, gg);
        var xC = _mz(
            z,
            'scroll-view',
            ['bindscroll', 1, 'bindscrolltolower', 1, 'bindscrolltoupper', 2, 'scrollIntoView', 3, 'scrollTop', 4, 'scrollY', 5, 'style', 6],
            [],
            e,
            s,
            gg
        );
        var oD = _v();
        _(xC, oD);
        var fE = function (hG, cF, oH, gg) {
            var oJ = _v();
            _(oH, oJ);
            if (_oz(z, 12, hG, cF, gg)) {
                oJ.wxVkey = 1;
                var lK = _mz(z, 'view', ['bindtap', 13, 'class', 1, 'data-index', 2, 'data-item', 3], [], hG, cF, gg);
                var aL = _mz(z, 'van-image', ['height', 17, 'src', 1, 'width', 2], [], hG, cF, gg);
                _(lK, aL);
                _(oJ, lK);
            } else {
                oJ.wxVkey = 2;
                var tM = _mz(z, 'van-image', ['height', 20, 'src', 1, 'width', 2], [], hG, cF, gg);
                _(oJ, tM);
            }
            oJ.wxXCkey = 1;
            oJ.wxXCkey = 3;
            oJ.wxXCkey = 3;
            return oH;
        };
        oD.wxXCkey = 4;
        _2z(z, 10, fE, e, s, gg, oD, 'item', 'idx', 'item.customerNo');
        _(oB, xC);
        var eN = _mz(z, 'van-button', ['round', -1, 'bindtap', 23, 'customClass', 1, 'type', 2], [], e, s, gg);
        _(oB, eN);
        _(r, oB);
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
        var z = gz$gwx1_2();
        var oP = _n('view');
        _rz(z, oP, 'class', 0, e, s, gg);
        var oR = _n('view');
        _rz(z, oR, 'class', 1, e, s, gg);
        var fS = _mz(z, 'van-field', ['border', 2, 'clearTrigger', 1, 'clearable', 2, 'inputClass', 3, 'value', 4, 'placeholder', 5], [], e, s, gg);
        fS.rawAttr = {
            'model:value': '{{ accont }}'
        };
        _(oR, fS);
        var cT = _mz(z, 'van-field', ['border', 8, 'clearTrigger', 1, 'clearable', 2, 'inputClass', 3, 'value', 4, 'placeholder', 5, 'type', 6], [], e, s, gg);
        cT.rawAttr = {
            'model:value': '{{ password }}'
        };
        _(oR, cT);
        _(oP, oR);
        var xQ = _v();
        _(oP, xQ);
        if (_oz(z, 15, e, s, gg)) {
            xQ.wxVkey = 1;
        }
        var hU = _n('van-toast');
        _rz(z, hU, 'id', 16, e, s, gg);
        _(oP, hU);
        var oV = _mz(z, 'van-button', ['round', -1, 'bindtap', 17, 'customClass', 1, 'type', 2], [], e, s, gg);
        _(oP, oV);
        var cW = _n('view');
        _rz(z, cW, 'bindtap', 20, e, s, gg);
        var oX = _v();
        _(cW, oX);
        if (_oz(z, 21, e, s, gg)) {
            oX.wxVkey = 1;
        }
        oX.wxXCkey = 1;
        _(oP, cW);
        xQ.wxXCkey = 1;
        _(r, oP);
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
        var z = gz$gwx1_3();
        var aZ = _n('view');
        _rz(z, aZ, 'class', 0, e, s, gg);
        var t1 = _n('view');
        var e2 = _mz(
            z,
            'optionComponent',
            [
                'bindoptionDataChange',
                1,
                'id',
                1,
                'leftDescTitle',
                2,
                'leftPopImageUrl',
                3,
                'leftShowPop',
                4,
                'leftbgImageV',
                5,
                'rightDescTitle',
                6,
                'rightPopimageUrl',
                7,
                'rightShowPop',
                8,
                'rightbgImageV',
                9
            ],
            [],
            e,
            s,
            gg
        );
        _(t1, e2);
        var b3 = _mz(z, 'optionComponent', ['bindoptionDataChange', 11, 'id', 1, 'leftDescTitle', 2, 'leftbgImageV', 3], [], e, s, gg);
        _(t1, b3);
        _(aZ, t1);
        var o4 = _n('van-cell-group');
        var x5 = _mz(z, 'van-field', ['border', 15, 'inputAlign', 1, 'label', 2, 'value', 3, 'placeholder', 4], [], e, s, gg);
        x5.rawAttr = {
            'model:value': '{{ idcardName }}'
        };
        _(o4, x5);
        var o6 = _mz(z, 'van-field', ['border', 20, 'inputAlign', 1, 'label', 2, 'value', 3, 'placeholder', 4], [], e, s, gg);
        o6.rawAttr = {
            'model:value': '{{ idCardNumber }}'
        };
        _(o4, o6);
        var f7 = _mz(z, 'van-cell', ['border', 25, 'title', 1], [], e, s, gg);
        var c8 = _mz(z, 'van-radio-group', ['bind:change', 27, 'slot', 1, 'value', 2], [], e, s, gg);
        var h9 = _n('view');
        _rz(z, h9, 'class', 30, e, s, gg);
        var o0 = _mz(z, 'van-radio', ['useIconSlot', -1, 'customClass', 31, 'name', 1], [], e, s, gg);
        _(h9, o0);
        var cAB = _mz(z, 'van-radio', ['useIconSlot', -1, 'customClass', 33, 'name', 1], [], e, s, gg);
        _(h9, cAB);
        _(c8, h9);
        _(f7, c8);
        _(o4, f7);
        var oBB = _n('van-cell');
        _rz(z, oBB, 'title', 35, e, s, gg);
        var lCB = _n('view');
        _rz(z, lCB, 'class', 36, e, s, gg);
        var aDB = _mz(z, 'view', ['bindtap', 37, 'class', 1], [], e, s, gg);
        var tEB = _n('van-icon');
        _rz(z, tEB, 'name', 39, e, s, gg);
        _(aDB, tEB);
        _(lCB, aDB);
        var eFB = _mz(z, 'view', ['bindtap', 40, 'class', 1], [], e, s, gg);
        var bGB = _n('van-icon');
        _rz(z, bGB, 'name', 42, e, s, gg);
        _(eFB, bGB);
        _(lCB, eFB);
        _(oBB, lCB);
        _(o4, oBB);
        _(aZ, o4);
        var oHB = _n('view');
        var xIB = _n('van-cell-group');
        var oJB = _mz(z, 'van-field', ['border', 43, 'inputAlign', 1, 'label', 2, 'value', 3, 'placeholder', 4], [], e, s, gg);
        oJB.rawAttr = {
            'model:value': '{{ bankCardnumber }}'
        };
        _(xIB, oJB);
        _(oHB, xIB);
        var fKB = _mz(z, 'van-cell', ['isLink', -1, 'bindtap', 48, 'data-rowtitle', 1, 'title', 2, 'value', 3, 'valueClass', 4], [], e, s, gg);
        _(oHB, fKB);
        var cLB = _mz(z, 'van-cell', ['isLink', -1, 'bindtap', 53, 'data-rowtitle', 1, 'title', 2, 'value', 3, 'valueClass', 4], [], e, s, gg);
        _(oHB, cLB);
        var hMB = _mz(z, 'van-cell', ['isLink', -1, 'bindtap', 58, 'data-rowtitle', 1, 'title', 2, 'value', 3, 'valueClass', 4], [], e, s, gg);
        _(oHB, hMB);
        _(aZ, oHB);
        var oNB = _n('view');
        var cOB = _n('van-cell-group');
        var oPB = _mz(z, 'van-cell', ['isLink', -1, 'bindtap', 63, 'data-rowtitle', 1, 'title', 2, 'value', 3, 'valueClass', 4], [], e, s, gg);
        _(cOB, oPB);
        _(oNB, cOB);
        var lQB = _mz(z, 'van-field', ['border', 68, 'inputAlign', 1, 'label', 2, 'value', 3, 'placeholder', 4], [], e, s, gg);
        lQB.rawAttr = {
            'model:value': '{{ jyAddress }}'
        };
        _(oNB, lQB);
        var aRB = _mz(z, 'view', ['catchtap', 73, 'class', 1], [], e, s, gg);
        var tSB = _mz(z, 'van-icon', ['catchtap', 75, 'name', 1, 'style', 2], [], e, s, gg);
        _(aRB, tSB);
        _(oNB, aRB);
        _(aZ, oNB);
        var eTB = _mz(z, 'van-button', ['round', -1, 'bind:click', 78, 'customClass', 1, 'type', 2], [], e, s, gg);
        _(aZ, eTB);
        var bUB = _mz(z, 'native_pick_time', ['binddismissPop', 81, 'bindtimeDataChange', 1, 'id', 2, 'show', 3], [], e, s, gg);
        _(aZ, bUB);
        var oVB = _mz(z, 'native_pick_time', ['binddismissPop', 85, 'bindtimeDataChange', 1, 'id', 2, 'show', 3], [], e, s, gg);
        _(aZ, oVB);
        var xWB = _mz(
            z,
            'van-dialog',
            [
                'useSlot',
                -1,
                'bind:confirm',
                89,
                'cancelButtonText',
                1,
                'confirmButtonColor',
                2,
                'confirmButtonText',
                3,
                'show',
                4,
                'showCancelButton',
                5,
                'showConfirmButton',
                6,
                'title',
                7
            ],
            [],
            e,
            s,
            gg
        );
        _(aZ, xWB);
        var oXB = _mz(z, 'address_pick', ['bindaddressDataChange', 97, 'id', 1, 'show', 2, 'showAreaCode', 3], [], e, s, gg);
        _(aZ, oXB);
        var fYB = _mz(z, 'address_pick', ['bindaddressDataChange', 101, 'id', 1, 'show', 2, 'showAreaCode', 3], [], e, s, gg);
        _(aZ, fYB);
        _(r, aZ);
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
        var z = gz$gwx1_4();
        var h1B = _mz(z, 'van-search', ['useActionSlot', -1, 'bind:cancel', 0, 'bind:change', 1, 'bind:search', 1, 'customClass', 2, 'value', 3, 'placeholder', 4], [], e, s, gg);
        h1B.rawAttr = {
            'model:value': '{{ value }}'
        };
        _(r, h1B);
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
        var z = gz$gwx1_5();
        var c3B = _mz(z, 'van-search', ['useActionSlot', -1, 'bind:cancel', 0, 'bind:change', 1, 'bind:search', 1, 'customClass', 2, 'value', 3, 'placeholder', 4], [], e, s, gg);
        c3B.rawAttr = {
            'model:value': '{{ value }}'
        };
        _(r, c3B);
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
        var z = gz$gwx1_6();
        var l5B = _mz(z, 'van-search', ['useActionSlot', -1, 'bind:cancel', 0, 'bind:change', 1, 'bind:search', 1, 'customClass', 2, 'value', 3, 'placeholder', 4], [], e, s, gg);
        l5B.rawAttr = {
            'model:value': '{{ value }}'
        };
        _(r, l5B);
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
        var z = gz$gwx1_7();
        var t7B = _n('view');
        _rz(z, t7B, 'class', 0, e, s, gg);
        var e8B = _mz(
            z,
            'scroll-view',
            ['bindscroll', 1, 'bindscrolltolower', 1, 'bindscrolltoupper', 2, 'scrollIntoView', 3, 'scrollTop', 4, 'scrollY', 5, 'style', 6],
            [],
            e,
            s,
            gg
        );
        var b9B = _v();
        _(e8B, b9B);
        var o0B = function (oBC, xAC, fCC, gg) {
            var hEC = _mz(z, 'view', ['class', 12, 'data-index', 1, 'data-item', 2], [], oBC, xAC, gg);
            var oFC = _v();
            _(hEC, oFC);
            if (_oz(z, 15, oBC, xAC, gg)) {
                oFC.wxVkey = 1;
                var cGC = _mz(z, 'view', ['bindtap', 16, 'class', 1, 'data-index', 2, 'data-item', 3], [], oBC, xAC, gg);
                var oHC = _mz(z, 'van-image', ['height', 20, 'src', 1, 'width', 2], [], oBC, xAC, gg);
                _(cGC, oHC);
                _(oFC, cGC);
            } else {
                oFC.wxVkey = 2;
                var lIC = _mz(z, 'van-image', ['height', 23, 'src', 1, 'width', 2], [], oBC, xAC, gg);
                _(oFC, lIC);
            }
            oFC.wxXCkey = 1;
            oFC.wxXCkey = 3;
            oFC.wxXCkey = 3;
            _(fCC, hEC);
            return fCC;
        };
        b9B.wxXCkey = 4;
        _2z(z, 10, o0B, e, s, gg, b9B, 'item', 'idx', 'item.customerNo');
        _(t7B, e8B);
        var aJC = _mz(z, 'van-button', ['round', -1, 'bindtap', 26, 'customClass', 1, 'type', 2], [], e, s, gg);
        _(t7B, aJC);
        _(r, t7B);
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
        var z = gz$gwx1_8();
        var eLC = _n('view');
        _rz(z, eLC, 'class', 0, e, s, gg);
        var bMC = _n('van-image');
        _rz(z, bMC, 'src', 1, e, s, gg);
        _(eLC, bMC);
        var oNC = _mz(z, 'van-button', ['round', -1, 'bindtap', 2, 'customClass', 1, 'type', 2], [], e, s, gg);
        _(eLC, oNC);
        _(r, eLC);
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
        var z = gz$gwx1_9();
        var oPC = _mz(z, 'van-button', ['round', -1, 'bind:click', 0, 'customClass', 1, 'type', 1], [], e, s, gg);
        _(r, oPC);
        return r;
    };
    e_[x[8]] = {
        f: m8,
        j: [],
        i: [],
        ti: [],
        ic: []
    };
    d_[x[9]] = {};
    var m9 = function (e, s, r, gg) {
        var z = gz$gwx1_10();
        var cRC = _n('view');
        _rz(z, cRC, 'class', 0, e, s, gg);
        var oTC = _n('view');
        _rz(z, oTC, 'class', 1, e, s, gg);
        var cUC = _mz(z, 'van-field', ['bind:change', 2, 'border', 1, 'clearTrigger', 2, 'clearable', 3, 'inputClass', 4, 'value', 5, 'placeholder', 6], [], e, s, gg);
        cUC.rawAttr = {
            'model:value': '{{ idCardName }}'
        };
        _(oTC, cUC);
        var oVC = _mz(z, 'van-field', ['bind:change', 9, 'border', 1, 'clearTrigger', 2, 'clearable', 3, 'inputClass', 4, 'value', 5, 'placeholder', 6], [], e, s, gg);
        oVC.rawAttr = {
            'model:value': '{{ idCardnumber }}'
        };
        _(oTC, oVC);
        _(cRC, oTC);
        var lWC = _mz(z, 'van-button', ['round', -1, 'bindtap', 16, 'customClass', 1, 'type', 2], [], e, s, gg);
        _(cRC, lWC);
        var hSC = _v();
        _(cRC, hSC);
        if (_oz(z, 19, e, s, gg)) {
            hSC.wxVkey = 1;
        }
        hSC.wxXCkey = 1;
        _(r, cRC);
        return r;
    };
    e_[x[9]] = {
        f: m9,
        j: [],
        i: [],
        ti: [],
        ic: []
    };
    d_[x[10]] = {};
    var m10 = function (e, s, r, gg) {
        var z = gz$gwx1_11();
        var tYC = _n('view');
        _rz(z, tYC, 'class', 0, e, s, gg);
        var eZC = _n('van-image');
        _rz(z, eZC, 'src', 1, e, s, gg);
        _(tYC, eZC);
        var b1C = _n('view');
        _rz(z, b1C, 'class', 2, e, s, gg);
        var o2C = _mz(z, 'van-button', ['round', -1, 'bindgetphonenumber', 3, 'customClass', 1, 'openType', 2, 'type', 3], [], e, s, gg);
        _(b1C, o2C);
        var x3C = _mz(z, 'van-button', ['round', -1, 'bind:click', 7, 'customClass', 1, 'type', 2], [], e, s, gg);
        _(b1C, x3C);
        _(tYC, b1C);
        _(r, tYC);
        return r;
    };
    e_[x[10]] = {
        f: m10,
        j: [],
        i: [],
        ti: [],
        ic: []
    };
    d_[x[11]] = {};
    var m11 = function (e, s, r, gg) {
        var z = gz$gwx1_12();
        var f5C = _n('view');
        _rz(z, f5C, 'class', 0, e, s, gg);
        var c6C = _mz(z, 'van-image', ['height', 1, 'src', 1, 'style', 2, 'width', 3], [], e, s, gg);
        _(f5C, c6C);
        var h7C = _n('van-cell-group');
        var o8C = _mz(z, 'van-cell', ['border', 5, 'title', 1, 'value', 2], [], e, s, gg);
        _(h7C, o8C);
        var c9C = _mz(z, 'van-cell', ['bindlongtap', 8, 'border', 1, 'title', 2, 'value', 3], [], e, s, gg);
        _(h7C, c9C);
        var o0C = _mz(z, 'van-cell', ['bindlongtap', 12, 'border', 1, 'title', 2, 'value', 3], [], e, s, gg);
        _(h7C, o0C);
        var lAD = _mz(z, 'van-cell', ['border', 16, 'title', 1, 'value', 2], [], e, s, gg);
        _(h7C, lAD);
        _(f5C, h7C);
        var aBD = _mz(z, 'van-button', ['round', -1, 'bindtap', 19, 'customClass', 1, 'type', 2], [], e, s, gg);
        _(f5C, aBD);
        _(r, f5C);
        return r;
    };
    e_[x[11]] = {
        f: m11,
        j: [],
        i: [],
        ti: [],
        ic: []
    };
    if (path && e_[path]) {
        return function (env, dd, global) {
            $gwxc = 0;
            var root = {
                tag: 'wx-page'
            };
            root.children = [];
            var main = e_[path].f;
            if (typeof global === 'undefined') global = {};
            global.f = $gdc(f_[path], '', 1);
            try {
                main(env, {}, root, global);
                _tsd(root);
            } catch (err) {
                console.log(err);
            }
            return root;
        };
    }
};
__wxAppCode__['login/accontIdCardSelect/accontIdCardSelect.json'] = {
    usingComponents: {
        'van-image': '../../miniprogram_npm/@vant/weapp/image/index',
        'van-button': '../../miniprogram_npm/@vant/weapp/button/index',
        'van-cell': '../../miniprogram_npm/@vant/weapp/cell/index',
        'van-cell-group': '../../miniprogram_npm/@vant/weapp/cell-group/index',
        'van-checkbox': '../../miniprogram_npm/@vant/weapp/checkbox/index',
        'van-checkbox-group': '../../miniprogram_npm/@vant/weapp/checkbox-group/index'
    },
    navigationBarTitleText: '商户账号选择'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['login/accontIdCardSelect/accontIdCardSelect.wxml'] = [$gwx1, './login/accontIdCardSelect/accontIdCardSelect.wxml'];
else __wxAppCode__['login/accontIdCardSelect/accontIdCardSelect.wxml'] = $gwx1('./login/accontIdCardSelect/accontIdCardSelect.wxml');
__wxAppCode__['login/accontLogin/accontLogin.json'] = {
    usingComponents: {
        'van-image': '../../miniprogram_npm/@vant/weapp/image/index',
        'van-button': '../../miniprogram_npm/@vant/weapp/button/index',
        'van-field': '../../miniprogram_npm/@vant/weapp/field/index',
        'van-checkbox': '../../miniprogram_npm/@vant/weapp/checkbox/index',
        'van-toast': '../../miniprogram_npm/@vant/weapp/toast/index',
        'van-checkbox-group': '../../miniprogram_npm/@vant/weapp/checkbox-group/index'
    },
    navigationBarTitleText: '账号登录'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['login/accontLogin/accontLogin.wxml'] = [$gwx1, './login/accontLogin/accontLogin.wxml'];
else __wxAppCode__['login/accontLogin/accontLogin.wxml'] = $gwx1('./login/accontLogin/accontLogin.wxml');
__wxAppCode__['login/accontRegister/accontRegister.json'] = {
    usingComponents: {
        'van-cell': '../../miniprogram_npm/@vant/weapp/cell/index',
        'van-cell-group': '../../miniprogram_npm/@vant/weapp/cell-group/index',
        'van-field': '../../miniprogram_npm/@vant/weapp/field/index',
        'van-radio': '../../miniprogram_npm/@vant/weapp/radio/index',
        'van-radio-group': '../../miniprogram_npm/@vant/weapp/radio-group/index',
        'van-datetime-picker': '../../miniprogram_npm/@vant/weapp/datetime-picker/index',
        'van-popup': '../../miniprogram_npm/@vant/weapp/popup/index',
        'van-button': '../../miniprogram_npm/@vant/weapp/button/index',
        'van-action-sheet': '../../miniprogram_npm/@vant/weapp/action-sheet/index',
        'van-area': '../../miniprogram_npm/@vant/weapp/area/index',
        'van-picker': '../../miniprogram_npm/@vant/weapp/picker/index',
        'van-icon': '../../miniprogram_npm/@vant/weapp/icon/index',
        'van-dialog': '../../miniprogram_npm/@vant/weapp/dialog/index',
        optionComponent: '/Components/optionComponent/optionComponent',
        native_pick_time: '/Components/native_pick/native_pick_time',
        address_pick: '/Components/address_pick/address_pick'
    },
    navigationBarTitleText: '注册商户'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['login/accontRegister/accontRegister.wxml'] = [$gwx1, './login/accontRegister/accontRegister.wxml'];
else __wxAppCode__['login/accontRegister/accontRegister.wxml'] = $gwx1('./login/accontRegister/accontRegister.wxml');
__wxAppCode__['login/accontRegister/alliedBank/alliedBank.json'] = {
    usingComponents: {
        'van-search': '../../../miniprogram_npm/@vant/weapp/search/index'
    },
    navigationBarTitleText: '支行列表'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['login/accontRegister/alliedBank/alliedBank.wxml'] = [$gwx1, './login/accontRegister/alliedBank/alliedBank.wxml'];
else __wxAppCode__['login/accontRegister/alliedBank/alliedBank.wxml'] = $gwx1('./login/accontRegister/alliedBank/alliedBank.wxml');
__wxAppCode__['login/accontRegister/bank/bank.json'] = {
    usingComponents: {
        'van-search': '../../../miniprogram_npm/@vant/weapp/search/index'
    },
    navigationBarTitleText: '银行列表'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['login/accontRegister/bank/bank.wxml'] = [$gwx1, './login/accontRegister/bank/bank.wxml'];
else __wxAppCode__['login/accontRegister/bank/bank.wxml'] = $gwx1('./login/accontRegister/bank/bank.wxml');
__wxAppCode__['login/accontRegister/hangyetype/hangyetype.json'] = {
    usingComponents: {
        'van-search': '../../../miniprogram_npm/@vant/weapp/search/index'
    },
    navigationBarTitleText: '行业选择'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['login/accontRegister/hangyetype/hangyetype.wxml'] = [$gwx1, './login/accontRegister/hangyetype/hangyetype.wxml'];
else __wxAppCode__['login/accontRegister/hangyetype/hangyetype.wxml'] = $gwx1('./login/accontRegister/hangyetype/hangyetype.wxml');
__wxAppCode__['login/accontSelect/accontSelect.json'] = {
    usingComponents: {
        'van-image': '../../miniprogram_npm/@vant/weapp/image/index',
        'van-button': '../../miniprogram_npm/@vant/weapp/button/index',
        'van-cell': '../../miniprogram_npm/@vant/weapp/cell/index',
        'van-cell-group': '../../miniprogram_npm/@vant/weapp/cell-group/index',
        'van-checkbox': '../../miniprogram_npm/@vant/weapp/checkbox/index',
        'van-checkbox-group': '../../miniprogram_npm/@vant/weapp/checkbox-group/index'
    },
    navigationBarTitleText: '商户账号选择'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['login/accontSelect/accontSelect.wxml'] = [$gwx1, './login/accontSelect/accontSelect.wxml'];
else __wxAppCode__['login/accontSelect/accontSelect.wxml'] = $gwx1('./login/accontSelect/accontSelect.wxml');
__wxAppCode__['login/faceLogin/faceLogin.json'] = {
    usingComponents: {
        'van-image': '../../miniprogram_npm/@vant/weapp/image/index',
        'van-button': '../../miniprogram_npm/@vant/weapp/button/index',
        'van-field': '../../miniprogram_npm/@vant/weapp/field/index'
    },
    navigationBarTitleText: 'E证通认证'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['login/faceLogin/faceLogin.wxml'] = [$gwx1, './login/faceLogin/faceLogin.wxml'];
else __wxAppCode__['login/faceLogin/faceLogin.wxml'] = $gwx1('./login/faceLogin/faceLogin.wxml');
__wxAppCode__['login/forgetLogPwd/forgetLogPwd.json'] = {
    usingComponents: {
        'van-button': '../../miniprogram_npm/@vant/weapp/button/index'
    }
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['login/forgetLogPwd/forgetLogPwd.wxml'] = [$gwx1, './login/forgetLogPwd/forgetLogPwd.wxml'];
else __wxAppCode__['login/forgetLogPwd/forgetLogPwd.wxml'] = $gwx1('./login/forgetLogPwd/forgetLogPwd.wxml');
__wxAppCode__['login/idCardLogin/idCardLogin.json'] = {
    usingComponents: {
        'van-image': '../../miniprogram_npm/@vant/weapp/image/index',
        'van-button': '../../miniprogram_npm/@vant/weapp/button/index',
        'van-field': '../../miniprogram_npm/@vant/weapp/field/index'
    },
    navigationBarTitleText: '身份证登录'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['login/idCardLogin/idCardLogin.wxml'] = [$gwx1, './login/idCardLogin/idCardLogin.wxml'];
else __wxAppCode__['login/idCardLogin/idCardLogin.wxml'] = $gwx1('./login/idCardLogin/idCardLogin.wxml');
__wxAppCode__['login/index/index.json'] = {
    usingComponents: {
        'van-image': '../../miniprogram_npm/@vant/weapp/image/index',
        'van-button': '../../miniprogram_npm/@vant/weapp/button/index'
    },
    navigationBarTitleText: '授权登录'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['login/index/index.wxml'] = [$gwx1, './login/index/index.wxml'];
else __wxAppCode__['login/index/index.wxml'] = $gwx1('./login/index/index.wxml');
__wxAppCode__['login/registerSuccess/registerSuccess.json'] = {
    usingComponents: {
        'van-image': '../../miniprogram_npm/@vant/weapp/image/index',
        'van-button': '../../miniprogram_npm/@vant/weapp/button/index',
        'van-cell': '../../miniprogram_npm/@vant/weapp/cell/index',
        'van-cell-group': '../../miniprogram_npm/@vant/weapp/cell-group/index',
        'van-checkbox': '../../miniprogram_npm/@vant/weapp/checkbox/index',
        'van-checkbox-group': '../../miniprogram_npm/@vant/weapp/checkbox-group/index'
    },
    navigationBarTitleText: '注册结果'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['login/registerSuccess/registerSuccess.wxml'] = [$gwx1, './login/registerSuccess/registerSuccess.wxml'];
else __wxAppCode__['login/registerSuccess/registerSuccess.wxml'] = $gwx1('./login/registerSuccess/registerSuccess.wxml');
__wxRoute = 'login/index/index';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'login/index/index.js';
define(
    'login/index/index.js',
    function (
        require,
        module,
        exports,
        window,
        document,
        frames,
        self,
        location,
        navigator,
        localStorage,
        history,
        Caches,
        screen,
        alert,
        confirm,
        prompt,
        XMLHttpRequest,
        WebSocket,
        Reporter,
        webkit,
        WeixinJSCore
    ) {
        'use strict';

        var o,
            e =
                (o = require('../../@babel/runtime/regenerator')) && o.__esModule
                    ? o
                    : {
                          default: o
                      },
            n = require('../../@babel/runtime/helpers/asyncToGenerator');
        var t = require('../../api/api').API,
            i = getApp(),
            c = require('../../api/request').WEB_BASE_URL;
        export default {
            data() {
                return {
                    isAgree: !1,
                    phoneCode: '',
                    idCardName: '',
                    idCardnumber: '',
                    showIdcardLogin: '',
                    showRegister: '',
                    accont: '',
                    fromAccont: '',
                    idCard: '',
                    idName: '',
                    accontArr: '',
                    seucrCode: '',
                    scrollHeight: '',
                    currentTimeString: '',
                    inviterCode: '',
                    source: '',
                    areaCode: '',
                    bankCode: '',
                    customerName: '',
                    customerNo: '',
                    username: '',
                    password: '',
                    idcardNumber: '',
                    idcardUserName: '',
                    checked: '',
                    num: '',
                    singleAccont: '',
                    selectIndex: '',
                    selectUsername: '',
                    isShowRightIcon: '',
                    userCode: '',
                    openId: '',
                    idcardName: '',
                    idCardNumber: '',
                    idCardZmImagurl: '',
                    personStartTimeValue: '',
                    personEndTimeValue: '',
                    idCardFmImagurl: '',
                    bankCardnumber: '',
                    bankCardImgUrl: '',
                    idCardImageV: '',
                    idCardFanMianV: '',
                    bankCardImageV: '',
                    showAreaPop: '',
                    showJYAreaPop: '',
                    provinceCode: '',
                    areaNmae: '',
                    alliedBankCode: '',
                    alliedBankName: '',
                    jyareaDiquCode: '',
                    jycityCode: '',
                    jyprovinceCode: '',
                    jyareaName: '',
                    jyAddress: '',
                    radio: '',
                    hangyeCode: '',
                    hangyeName: '',
                    showStartTime: '',
                    showEndTime: '',
                    idCardRenzhengShow: '',
                    areaList: '',
                    value: '',
                    bankList: '',
                    bankName: '',
                    typeList: ''
                };
            },
            onLoad: function (o) {
                console.log('options = ', o);
            },
            onShow: function () {
                this.checkIdAndRegister();
            },
            methods: {}
        };
    }
);
require('./login/index/index.js');
__wxRoute = 'login/idCardLogin/idCardLogin';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'login/idCardLogin/idCardLogin.js';
define(
    'login/idCardLogin/idCardLogin.js',
    function (
        require,
        module,
        exports,
        window,
        document,
        frames,
        self,
        location,
        navigator,
        localStorage,
        history,
        Caches,
        screen,
        alert,
        confirm,
        prompt,
        XMLHttpRequest,
        WebSocket,
        Reporter,
        webkit,
        WeixinJSCore
    ) {
        'use strict';

        require('../../api/api').API;
        export default {
            data() {
                return {
                    idCardnumber: '',
                    idCardName: '',
                    showIdcardLogin: !1,
                    showRegister: !1
                };
            },
            onLoad: function (a) {
                console.log('options =', a),
                    '1' != a.from
                        ? this.setData({
                              idCardName: a.idCardName,
                              idCardnumber: a.idCardnumber,
                              showIdcardLogin: getApp().globalData.showIdCardLogin,
                              showRegister: getApp().globalData.showRegister
                          })
                        : uni.navigateTo({
                              url: '/login/accontLogin/accontLogin'
                          });
            },
            onReady: function () {},
            methods: {}
        };
    }
);
require('./login/idCardLogin/idCardLogin.js');
__wxRoute = 'login/accontLogin/accontLogin';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'login/accontLogin/accontLogin.js';
define(
    'login/accontLogin/accontLogin.js',
    function (
        require,
        module,
        exports,
        window,
        document,
        frames,
        self,
        location,
        navigator,
        localStorage,
        history,
        Caches,
        screen,
        alert,
        confirm,
        prompt,
        XMLHttpRequest,
        WebSocket,
        Reporter,
        webkit,
        WeixinJSCore
    ) {
        'use strict';

        var o,
            e =
                (o = require('@vant/weapp/toast/toast')) && o.__esModule
                    ? o
                    : {
                          default: o
                      };
        var t = require('../../api/api').API,
            c = (getApp(), require('../../utils/md5'));
        export default {
            data() {
                return {
                    checked: !1,
                    selectIcon: '/static/assets/image/login/selelct_red_icon.png',
                    unselectIcon: '/static/assets/image/login/unselect.png',
                    accont: '',
                    password: '',
                    userCode: '',
                    showIdcardLogin: !1,
                    showRegister: !1,
                    fromAccont: ''
                };
            },
            onLoad: function (o) {
                console.log('accontLogin_options =', o);
                var e = uni.getStorageSync('cacheAccont');
                console.log('cacheAccont = ', e),
                    console.log('getApp().globalData.showRegister = ', getApp().globalData.showRegister),
                    this.setData({
                        accont: e,
                        showIdcardLogin: getApp().globalData.showIdCardLogin,
                        showRegister: getApp().globalData.showRegister,
                        fromAccont: o.from
                    });
            },
            methods: {}
        };
    }
);
require('./login/accontLogin/accontLogin.js');
__wxRoute = 'login/forgetLogPwd/forgetLogPwd';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'login/forgetLogPwd/forgetLogPwd.js';
define(
    'login/forgetLogPwd/forgetLogPwd.js',
    function (
        require,
        module,
        exports,
        window,
        document,
        frames,
        self,
        location,
        navigator,
        localStorage,
        history,
        Caches,
        screen,
        alert,
        confirm,
        prompt,
        XMLHttpRequest,
        WebSocket,
        Reporter,
        webkit,
        WeixinJSCore
    ) {
        'use strict';

        var t = !1;
        export default {
            data() {
                return {
                    oldPwd: '',
                    newPwd: '',
                    newPwdAgain: '',
                    showDownTime: !1,
                    num: 60
                };
            },
            onLoad: function (t) {},
            methods: {}
        };
    }
);
require('./login/forgetLogPwd/forgetLogPwd.js');
__wxRoute = 'login/faceLogin/faceLogin';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'login/faceLogin/faceLogin.js';
define(
    'login/faceLogin/faceLogin.js',
    function (
        require,
        module,
        exports,
        window,
        document,
        frames,
        self,
        location,
        navigator,
        localStorage,
        history,
        Caches,
        screen,
        alert,
        confirm,
        prompt,
        XMLHttpRequest,
        WebSocket,
        Reporter,
        webkit,
        WeixinJSCore
    ) {
        'use strict';

        var e = require('../../mp_ecard_sdk/main'),
            o = require('../../api/api').API;
        export default {
            data() {
                return {
                    idCard: '',
                    idName: '',
                    seucrCode: '',
                    singleAccont: ''
                };
            },
            onLoad: function (e) {
                this.setData({
                    idCard: e.idcard,
                    idName: e.idName
                });
            },
            onUnload: function () {},
            methods: {}
        };
    }
);
require('./login/faceLogin/faceLogin.js');
__wxRoute = 'login/accontIdCardSelect/accontIdCardSelect';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'login/accontIdCardSelect/accontIdCardSelect.js';
define(
    'login/accontIdCardSelect/accontIdCardSelect.js',
    function (
        require,
        module,
        exports,
        window,
        document,
        frames,
        self,
        location,
        navigator,
        localStorage,
        history,
        Caches,
        screen,
        alert,
        confirm,
        prompt,
        XMLHttpRequest,
        WebSocket,
        Reporter,
        webkit,
        WeixinJSCore
    ) {
        'use strict';

        var e,
            t =
                (e = require('@vant/weapp/toast/toast')) && e.__esModule
                    ? e
                    : {
                          default: e
                      };
        var o = require('../../api/api').API;
        export default {
            data() {
                return {
                    isEnable: !1,
                    accontArr: [],
                    selectIndex: -1,
                    selectUsername: '',
                    seucrCode: '',
                    userCode: '',
                    isShowRightIcon: !1,
                    scrollHeight: 520
                };
            },
            onLoad: function (e) {
                var t = uni.getStorageSync('accountList') || [],
                    o = e.userCode;
                console.log('accountList = ', t),
                    this.setData({
                        accontArr: t,
                        seucrCode: o
                    });
            },
            onShow: function () {
                var e = this;
                uni.getSystemInfo({
                    success: function (t) {
                        console.log(t.windowHeight),
                            e.setData({
                                scrollHeight: t.windowHeight + 100
                            });
                    }
                });
            },
            methods: {}
        };
    }
);
require('./login/accontIdCardSelect/accontIdCardSelect.js');
__wxRoute = 'login/accontSelect/accontSelect';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'login/accontSelect/accontSelect.js';
define(
    'login/accontSelect/accontSelect.js',
    function (
        require,
        module,
        exports,
        window,
        document,
        frames,
        self,
        location,
        navigator,
        localStorage,
        history,
        Caches,
        screen,
        alert,
        confirm,
        prompt,
        XMLHttpRequest,
        WebSocket,
        Reporter,
        webkit,
        WeixinJSCore
    ) {
        'use strict';

        var e = require('../../api/api').API;
        export default {
            data() {
                return {
                    isEnable: !0,
                    selectIndex: -1,
                    selectUsername: '',
                    seucrCode: '',
                    isShowRightIcon: !1,
                    scrollHeight: 520,
                    accontArr: []
                };
            },
            onLoad: function (e) {
                var o = this;
                uni.login({
                    success: function (e) {
                        'login:ok' == e.errMsg && o.requestBindAccont(e.code);
                    },
                    fail: function (e) {
                        console.log('fail .res =', e);
                    },
                    complete: function (e) {
                        console.log('回调 res =', e);
                    }
                });
            },
            methods: {}
        };
    }
);
require('./login/accontSelect/accontSelect.js');
__wxRoute = 'login/accontRegister/accontRegister';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'login/accontRegister/accontRegister.js';
define(
    'login/accontRegister/accontRegister.js',
    function (
        require,
        module,
        exports,
        window,
        document,
        frames,
        self,
        location,
        navigator,
        localStorage,
        history,
        Caches,
        screen,
        alert,
        confirm,
        prompt,
        XMLHttpRequest,
        WebSocket,
        Reporter,
        webkit,
        WeixinJSCore
    ) {
        'use strict';

        var e,
            a,
            t = require('../../@babel/runtime/helpers/defineProperty');
        (e = require('../../miniprogram_npm/@vant/weapp/dialog/dialog')) && e.__esModule;
        var o = getApp(),
            i = require('../../api/api').API;
        export default {
            data() {
                return (
                    (a = {
                        idCardImageV: 'https://www.krppay.com/skb_assets/login_idcard_zm.png',
                        idCardFanMianV: 'https://www.krppay.com/skb_assets/login_idcard_fm.png',
                        bankCardImageV: 'https://www.krppay.com/skb_assets/login_bankcard_zm.png',
                        selectIcon: '/static/assets/image/login/select.png',
                        unselectIcon: '/static/assets/image/login/unselect.png',
                        fmIdCardpopidFmUrl: 'https://www.krppay.com/skb_assets/skb_bg_idCard_fm.png',
                        zmIdCardpopimageUrl: 'https://www.krppay.com/skb_assets/skb_bg_idCard_zm.png',
                        personStartTimeValue: '开始时间',
                        personEndTimeValue: '结束时间',
                        currentTime: new Date().getTime(),
                        currentTimeString: '',
                        showStartTime: !1,
                        showEndTime: !1,
                        radio: '1',
                        scrollHeight: o.globalData.windowHeight - o.globalData.navhegiht - 0,
                        bankCode: '',
                        bankName: '请选择',
                        alliedBankCode: '',
                        alliedBankName: '请选择',
                        showAreaPop: !1,
                        showJYAreaPop: !1,
                        areaNmae: '请选择',
                        areaCode: '',
                        provinceCode: '',
                        bankCardImgUrl: '',
                        bankCardnumber: '',
                        jyprovinceCode: '',
                        jycityCode: '',
                        jyareaDiquCode: '',
                        jyareaName: '省/市/区',
                        jyAddress: '',
                        idName: '',
                        idCardNumber: '',
                        idCardZmImagurl: '',
                        idCardFmImagurl: ''
                    }),
                    t(a, 'idCardNumber', ''),
                    t(a, 'idcardName', ''),
                    t(a, 'hangyeCode', ''),
                    t(a, 'hangyeName', '若不输入则执行智能账单'),
                    t(a, 'idCardRenzhengShow', !1),
                    t(a, 'inviterCode', ''),
                    t(a, 'source', ''),
                    t(a, 'tip', ''),
                    t(a, 'openId', ''),
                    a
                );
            },
            onLoad: function (e) {
                if (
                    (console.log('自主注册，options->', e),
                    this.userLogin(),
                    this.getOpenid(),
                    this.setData({
                        currentTimeString: this.formatDate(this.currentTime)
                    }),
                    e.q)
                ) {
                    var a = decodeURIComponent(e.q).split('inviterCode='),
                        t = a[a.length - 1];
                    (t = t && 'undefined' != t && '' != t ? t : ''),
                        this.setData({
                            inviterCode: decodeURIComponent(t),
                            source: 'AGENT_QRCODE_INV'
                        });
                } else
                    e.inviterCode
                        ? this.setData({
                              inviterCode: e.inviterCode,
                              source: 'CUSTOMER_QRCODE_INV'
                          })
                        : this.setData({
                              source: 'CUST_MINI',
                              inviterCode: ''
                          });
                this.getAllareaInfo(), console.log('自主注册，source->'.concat(this.source, '\tinviterCode->').concat(this.inviterCode));
            },
            methods: {}
        };
    }
);
require('./login/accontRegister/accontRegister.js');
__wxRoute = 'login/accontRegister/bank/bank';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'login/accontRegister/bank/bank.js';
define(
    'login/accontRegister/bank/bank.js',
    function (
        require,
        module,
        exports,
        window,
        document,
        frames,
        self,
        location,
        navigator,
        localStorage,
        history,
        Caches,
        screen,
        alert,
        confirm,
        prompt,
        XMLHttpRequest,
        WebSocket,
        Reporter,
        webkit,
        WeixinJSCore
    ) {
        'use strict';

        var a = require('../../../api/api').API;
        export default {
            data() {
                return {
                    value: '',
                    bankList: []
                };
            },
            onLoad: function () {
                this.findByNewLikeHeadBankName();
            },
            methods: {}
        };
    }
);
require('./login/accontRegister/bank/bank.js');
__wxRoute = 'login/accontRegister/alliedBank/alliedBank';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'login/accontRegister/alliedBank/alliedBank.js';
define(
    'login/accontRegister/alliedBank/alliedBank.js',
    function (
        require,
        module,
        exports,
        window,
        document,
        frames,
        self,
        location,
        navigator,
        localStorage,
        history,
        Caches,
        screen,
        alert,
        confirm,
        prompt,
        XMLHttpRequest,
        WebSocket,
        Reporter,
        webkit,
        WeixinJSCore
    ) {
        'use strict';

        var a = require('../../../api/api').API;
        export default {
            data() {
                return {
                    value: '',
                    bankList: [],
                    areaCode: '',
                    bankCode: ''
                };
            },
            onLoad: function (a) {
                console.log('options', a),
                    this.setData({
                        areaCode: a.areaCode,
                        bankCode: a.bankCode
                    });
            },
            onShow: function () {
                this.findNewSubBank();
            },
            methods: {}
        };
    }
);
require('./login/accontRegister/alliedBank/alliedBank.js');
__wxRoute = 'login/accontRegister/hangyetype/hangyetype';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'login/accontRegister/hangyetype/hangyetype.js';
define(
    'login/accontRegister/hangyetype/hangyetype.js',
    function (
        require,
        module,
        exports,
        window,
        document,
        frames,
        self,
        location,
        navigator,
        localStorage,
        history,
        Caches,
        screen,
        alert,
        confirm,
        prompt,
        XMLHttpRequest,
        WebSocket,
        Reporter,
        webkit,
        WeixinJSCore
    ) {
        'use strict';

        var a = require('../../../api/api').API;
        export default {
            data() {
                return {
                    value: '',
                    typeList: [],
                    areaCode: ''
                };
            },
            onLoad: function (e) {
                console.log('options = ', e),
                    this.setData({
                        areaCode: e.area
                    }),
                    this.findByNewLikeHeadBankName();
            },
            methods: {}
        };
    }
);
require('./login/accontRegister/hangyetype/hangyetype.js');
__wxRoute = 'login/registerSuccess/registerSuccess';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'login/registerSuccess/registerSuccess.js';
define(
    'login/registerSuccess/registerSuccess.js',
    function (
        require,
        module,
        exports,
        window,
        document,
        frames,
        self,
        location,
        navigator,
        localStorage,
        history,
        Caches,
        screen,
        alert,
        confirm,
        prompt,
        XMLHttpRequest,
        WebSocket,
        Reporter,
        webkit,
        WeixinJSCore
    ) {
        'use strict';

        require('../../api/api').API;
        export default {
            data() {
                return {
                    customerName: '',
                    customerNo: '',
                    username: '',
                    password: '',
                    idcardUserName: '',
                    idcardNumber: ''
                };
            },
            onLoad: function (a) {
                console.log('options = ', a),
                    this.setData({
                        customerName: a.customerName,
                        customerNo: a.customerNo,
                        username: a.username,
                        password: a.password,
                        idcardNumber: a.idCardnumber,
                        idcardUserName: a.idcardName
                    });
            },
            methods: {
                clickYinSiXiyi: function () {
                    uni.navigateTo({
                        url: '/toolsBox/webview/webview?url='.concat(encodeURIComponent(c + 'Policy'))
                    });
                },

                clickUserXiyi: function () {
                    uni.navigateTo({
                        url: '/toolsBox/webview/webview?url='.concat(encodeURIComponent(c + 'Agreement'))
                    });
                },

                clickSelectImg: function () {
                    this.setData({
                        isAgree: !this.isAgree
                    });
                },

                getPhoneNumber: function (o) {
                    if ((console.log('x0x0xx-x--x-x e = ', o), this.isAgree)) {
                        var e = this;
                        if ('getPhoneNumber:ok' == o.detail.errMsg) {
                            console.log('xxxxxxe = ', o);
                            var n = o.detail.encryptedData,
                                t = o.detail.iv,
                                i = o.detail.code;
                            console.log('phoneCode = ', i),
                                e.requestWxLogin(n, t, i).then(function (o) {
                                    console.log('x-x- res = ', o),
                                        1 == o.bindAccountCount
                                            ? e.singleAccontLogin(o.loginSecurityCode, o.username)
                                            : o.bindAccountCount > 1
                                            ? uni.navigateTo({
                                                  url: '/login/accontSelect/accontSelect'
                                              })
                                            : o.bindAccountCount < 1 &&
                                              uni
                                                  .showModal({
                                                      showCancel: !1,
                                                      title: '温馨提示',
                                                      content: '您还没有绑定账号无法使用快捷登录，请通过账户登录绑定',
                                                      confirmColor: '#EF4034'
                                                  })
                                                  .then(function (o) {
                                                      1 == getApp().globalData.showIdCardLogin
                                                          ? uni.navigateTo({
                                                                url: '/login/idCardLogin/idCardLogin?code=1'
                                                            })
                                                          : uni.navigateTo({
                                                                url: '/login/accontLogin/accontLogin'
                                                            });
                                                  });
                                });
                        } else
                            console.log('getApp().globalData.showIdCardLogin =', getApp().globalData.showIdCardLogin),
                                1 == getApp().globalData.showIdCardLogin
                                    ? uni.navigateTo({
                                          url: '/login/idCardLogin/idCardLogin?code=1'
                                      })
                                    : uni.navigateTo({
                                          url: '/login/accontLogin/accontLogin'
                                      });
                    } else
                        uni.showToast({
                            title: '请先同意隐私政策和用户协议',
                            icon: 'none'
                        });
                },

                clickAccontLogin: function () {
                    this.isAgree
                        ? uni.navigateTo({
                              url: '/login/accontLogin/accontLogin?from=accontLogin'
                          })
                        : uni.showToast({
                              title: '请先同意隐私政策和用户协议',
                              icon: 'none'
                          });
                },

                requestWxLogin: function (o, e, n) {
                    return new Promise(function (i, c) {
                        uni.login({
                            success: function (c) {
                                console.log('result =', c),
                                    t
                                        .queryWxLogin({
                                            code: c.code,
                                            encryptedData: o,
                                            iv: e,
                                            phoneCode: n
                                        })
                                        .then(function (o) {
                                            console.log('res = ', o),
                                                200 == o.code
                                                    ? i(o.object)
                                                    : uni.showToast({
                                                          title: o.message
                                                      });
                                        });
                            },
                            fail: function (o) {
                                console.log('fail .res =', o);
                            },
                            complete: function (o) {
                                console.log('回调 res =', o);
                            }
                        });
                    });
                },

                singleAccontLogin: function (o, c) {
                    var a = this;
                    return n(
                        e.default.mark(function n() {
                            return e.default.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            a,
                                                uni.login({
                                                    success: function (e) {
                                                        t.queryCodeLogin({
                                                            loginSecurityCode: o,
                                                            username: c,
                                                            noPswSource: 'USERNAME',
                                                            code: e.code
                                                        }).then(function (o) {
                                                            if ((console.log('code登录res = ', o), (i.globalData.custInfo = o.object), 200 == o.code)) {
                                                                var e = o.object.token;
                                                                console.log('token = ', e),
                                                                    uni.setBackgroundFetchToken({
                                                                        token: e,
                                                                        success: function () {
                                                                            uni.switchTab({
                                                                                url: '/pages/home/home'
                                                                            });
                                                                        }
                                                                    });
                                                            } else
                                                                uni.showToast({
                                                                    title: o.message,
                                                                    icon: 'none'
                                                                });
                                                        });
                                                    },
                                                    fail: function (o) {
                                                        console.log('fail .res =', o);
                                                    },
                                                    complete: function (o) {
                                                        console.log('回调 res =', o);
                                                    }
                                                });
                                        case 2:
                                        case 'end':
                                            return e.stop();
                                    }
                            }, n);
                        })
                    )();
                },

                getPhoneNumberTest: function (o) {
                    console.log(o.detail),
                        uni.navigateTo({
                            url: '/login/idCardLogin/idCardLogin?code=1'
                        });
                },

                checkIdAndRegister: function () {
                    t.checkShowIdCardAndRegister().then(function (o) {
                        console.log('x-x-x- ', o),
                            (getApp().globalData.showIdCardLogin = JSON.parse(o.object.idCardLogin)),
                            (getApp().globalData.showRegister = JSON.parse(o.object.register));
                    });
                },

                clickFaceScan: function () {
                    console.log('刷脸登录');
                    this.idCardnumber
                        ? this.idCardnumber.trim().length < 15 || this.idCardnumber.trim().length > 18
                            ? uni.showToast({
                                  title: '请输入正确的身份证号',
                                  icon: 'none'
                              })
                            : this.idCardName
                            ? uni.navigateTo({
                                  url: '/login/faceLogin/faceLogin?idcard=' + this.idCardnumber + '&idName=' + this.idCardName
                              })
                            : uni.showToast({
                                  title: '请输入姓名',
                                  icon: 'none'
                              })
                        : uni.showToast({
                              title: '请输入身份证号',
                              icon: 'none'
                          });
                },

                clickAccontLogin: function () {
                    console.log('账号登录'),
                        uni.navigateTo({
                            url: '/login/accontLogin/accontLogin'
                        });
                },

                clickRegisterAccont: function () {
                    console.log('注册'),
                        uni.navigateTo({
                            url: '/login/accontRegister/accontRegister'
                        });
                },

                clickBindLogin: function () {
                    console.log('绑定并登录'),
                        '' != this.accont
                            ? '' != this.password
                                ? this.requesrLogin()
                                : uni.showToast({
                                      title: '请输入您的密码',
                                      icon: 'none'
                                  })
                            : uni.showToast({
                                  title: '请输入您的用户名',
                                  icon: 'none'
                              });
                },

                clickAccontLogin: function () {
                    console.log('账号登录'),
                        'accontLogin' == this.fromAccont
                            ? uni.navigateTo({
                                  url: '/login/idCardLogin/idCardLogin'
                              })
                            : uni.navigateBack();
                },

                clickRegisterAccont: function () {
                    console.log('注册'),
                        uni.navigateTo({
                            url: '/login/accontRegister/accontRegister'
                        });
                },

                onChange: function () {
                    console.log('点击了单选'),
                        this.setData({
                            checked: !this.checked
                        });
                },

                clickForget: function () {
                    console.log('忘记密码'),
                        uni.navigateTo({
                            url: '/login/forgetLogPwd/forgetLogPwd'
                        });
                },

                requesrLogin: function () {
                    var o = this;
                    uni.login({
                        success: function (n) {
                            console.log('xresult =', n),
                                'login:ok' === n.errMsg &&
                                    t
                                        .loginAndBind4wx({
                                            code: n.code,
                                            username: o.accont,
                                            password: c.hexMD5(o.password)
                                        })
                                        .then(function (t) {
                                            if (
                                                (console.log('res = ', t),
                                                1 == o.checked ? uni.setStorageSync('cacheAccont', o.accont) : uni.setStorageSync('cacheAccont', ''),
                                                (getApp().globalData.custInfo = t.object),
                                                200 == t.code)
                                            ) {
                                                var c = t.object.token;
                                                console.log('token = ', c),
                                                    uni.setStorageSync('token', c),
                                                    uni.setBackgroundFetchToken({
                                                        token: c,
                                                        success: function () {
                                                            uni.switchTab({
                                                                url: '/pages/home/home'
                                                            });
                                                        }
                                                    });
                                            } else console.log(t.message), (0, e.default)(t.message || '登录失败！');
                                        });
                        }
                    });
                },

                toSetPayPwd: function () {
                    this.start();
                },

                start: function () {
                    this.setData({
                        num: num--
                    }),
                        this.timer(),
                        console.log(num);
                },

                stop: function () {
                    (t = !0), console.log(t);
                },

                timer: function () {
                    num > 0 && 0 == t
                        ? setTimeout(this.start, 1e3)
                        : this.setData({
                              num: 0
                          });
                },

                clickFaceScan: function () {
                    this.getEdiToken();
                },

                getEdiToken: function () {
                    var e = this;
                    o.POSTEdiToken({
                        idNo: e.idCard.trim(),
                        name: this.idName.trim()
                    }).then(function (o) {
                        if ((console.log('获取token接口res = ', o), 200 == o.code)) {
                            var n = o.object;
                            console.log('token = ', n), e.goSDK(n);
                        } else
                            uni.showToast({
                                title: o.message,
                                icon: 'none'
                            });
                    });
                },

                getCheckwxrAccountExist: function () {
                    var e = this;
                    uni.login({
                        success: function (n) {
                            console.log('xresult =', n),
                                'login:ok' === n.errMsg &&
                                    o
                                        .checkwxrAccountExist({
                                            code: n.code,
                                            username: e.singleAccont,
                                            loginSecurityCode: e.seucrCode
                                        })
                                        .then(function (o) {
                                            if (200 === o.code) {
                                                getApp().globalData.custInfo = o.object;
                                                var n = o.object.token;
                                                console.log('token = ', n),
                                                    uni.setBackgroundFetchToken({
                                                        token: n,
                                                        success: function () {
                                                            uni.switchTab({
                                                                url: '/pages/home/home'
                                                            });
                                                        }
                                                    });
                                            } else
                                                1011 === o.code || 1012 === o.code
                                                    ? (e.userLogin(),
                                                      uni.showModal({
                                                          title: '温馨提示',
                                                          content: o.message,
                                                          showCancel: !1,
                                                          success: function (e) {
                                                              e.confirm;
                                                          }
                                                      }))
                                                    : (e.userLogin(),
                                                      uni.showToast({
                                                          title: o.message,
                                                          icon: 'none'
                                                      }));
                                        });
                        },
                        fail: function (e) {
                            console.log('fail .res =', e);
                        },
                        complete: function (e) {
                            console.log('回调 res =', e);
                        }
                    });
                },

                goSDK: function (n) {
                    var t = this;
                    (0, e.startEid)({
                        data: {
                            token: n
                        },
                        verifyDoneCallback: function (e) {
                            var n = e.token;
                            e.verifyDone;
                            o.checkFaceAfterAuthentication({
                                etoken: n
                            }).then(function (e) {
                                if (200 == e.code) {
                                    var o = e.object || {},
                                        n = o.loginSecurityCode,
                                        c = o.accountList;
                                    if (c.length > 1) {
                                        JSON.stringify(c);
                                        uni.setStorageSync('accountList', c),
                                            uni.navigateTo({
                                                url: '/login/accontIdCardSelect/accontIdCardSelect?userCode='.concat(n)
                                            });
                                    } else if (1 === c.length) {
                                        var i = c[0].username;
                                        console.log('username seucrCode', i, n),
                                            t.setData({
                                                seucrCode: n,
                                                singleAccont: i
                                            }),
                                            t.getCheckwxrAccountExist();
                                    } else
                                        uni.navigateTo({
                                            url: '/login/accontRegister/accontRegister'
                                        });
                                } else
                                    uni.showModal({
                                        title: '温馨提示',
                                        content: '人脸识别失败，您可以选择使用账号密码登录',
                                        confirmText: '重新刷脸',
                                        cancelText: '账号登录',
                                        cancelColor: '#26CAD3',
                                        confirmColor: '#26CAD3',
                                        success: function (e) {
                                            e.confirm ||
                                                (e.cancel &&
                                                    uni.navigateTo({
                                                        url: '/login/accontLogin/accontLogin'
                                                    }));
                                        }
                                    });
                            });
                        }
                    });
                },

                getCheckwxrAccountExist: function () {
                    var e = this;
                    uni.login({
                        success: function (c) {
                            console.log('xresult =', c),
                                'login:ok' === c.errMsg &&
                                    o
                                        .checkwxrAccountExist({
                                            code: c.code,
                                            username: e.selectUsername,
                                            loginSecurityCode: e.seucrCode
                                        })
                                        .then(function (e) {
                                            if (200 === e.code) {
                                                getApp().globalData.custInfo = e.object;
                                                var o = e.object.token;
                                                console.log('token = ', o),
                                                    uni.setBackgroundFetchToken({
                                                        token: o,
                                                        success: function () {
                                                            uni.reLaunch({
                                                                url: '/pages/home/home'
                                                            });
                                                        }
                                                    });
                                            } else
                                                1011 === e.code || 1012 === e.code
                                                    ? uni.showModal({
                                                          title: '温馨提示',
                                                          content: e.message,
                                                          showCancel: !1,
                                                          success: function (e) {
                                                              e.confirm;
                                                          }
                                                      })
                                                    : (0, t.default)(e.message);
                                        });
                        },
                        fail: function (e) {
                            console.log('fail .res =', e);
                        },
                        complete: function (e) {
                            console.log('回调 res =', e);
                        }
                    });
                },

                clickAccont: function (e) {
                    var t, o, c;
                    console.log('e = ', e);
                    var n,
                        s,
                        a,
                        i = e.currentTarget.dataset.index,
                        r =
                            null === (t = e.currentTarget) || void 0 === t || null === (o = t.dataset) || void 0 === o || null === (c = o.item) || void 0 === c
                                ? void 0
                                : c.username;
                    e.currentTarget.dataset &&
                        (n = 'TRUE' === (null === (s = e.currentTarget.dataset) || void 0 === s || null === (a = s.item) || void 0 === a ? void 0 : a.status));
                    this.setData({
                        selectIndex: i,
                        selectUsername: n ? r : '',
                        isShowRightIcon: n
                    });
                },

                clickBindLogin: function () {
                    '' !== this.selectUsername
                        ? this.getCheckwxrAccountExist()
                        : uni.showToast({
                              title: '请选择账号',
                              icon: 'none'
                          });
                },

                requestBindAccont: function (o) {
                    var t = this;
                    console.log('code = ', o),
                        e
                            .queryBindAccontLogin({
                                code: o
                            })
                            .then(function (e) {
                                console.log('xx res = ', e),
                                    200 == e.code &&
                                        t.setData({
                                            accontArr: e.object.accountList || [],
                                            seucrCode: e.object.loginSecurityCode
                                        });
                            });
                },

                clickAccont: function (e) {
                    var o, t, n;
                    console.log('e = =====', e);
                    var c,
                        s,
                        i,
                        a = e.currentTarget.dataset.index,
                        l =
                            null === (o = e.currentTarget) || void 0 === o || null === (t = o.dataset) || void 0 === t || null === (n = t.item) || void 0 === n
                                ? void 0
                                : n.username;
                    e.currentTarget.dataset &&
                        (c = 'TRUE' === (null === (s = e.currentTarget.dataset) || void 0 === s || null === (i = s.item) || void 0 === i ? void 0 : i.status));
                    this.setData({
                        selectIndex: a,
                        selectUsername: c ? l : '',
                        isShowRightIcon: c
                    });
                },

                clickBindLogin: function () {
                    '' != this.selectUsername
                        ? this.singleAccontLogin(this.seucrCode, this.selectUsername)
                        : uni.showToast({
                              title: '请选择账号',
                              icon: 'none'
                          });
                },

                singleAccontLogin: function (o, t) {
                    e.queryCodeLogin({
                        loginSecurityCode: o,
                        username: t,
                        noPswSource: 'USERNAME'
                    }).then(function (e) {
                        if ((console.log('code登录res = ', e), 200 == e.code)) {
                            getApp().globalData.custInfo = e.object;
                            var o = e.object.token;
                            console.log('token = ', o),
                                uni.setBackgroundFetchToken({
                                    token: o,
                                    success: function () {
                                        uni.switchTab({
                                            url: '/pages/home/home'
                                        });
                                    }
                                });
                        } else
                            uni.showToast({
                                title: e.message,
                                icon: 'none'
                            });
                    });
                },

                userLogin: function () {
                    var e = this;
                    uni.login({
                        success: function (a) {
                            console.log('xresult =', a),
                                'login:ok' === a.errMsg &&
                                    e.setData({
                                        userCode: a.code
                                    });
                        },
                        fail: function (e) {
                            console.log('fail .res =', e);
                        },
                        complete: function (e) {
                            console.log('回调 res =', e);
                        }
                    });
                },

                getOpenid: function () {
                    var e = this;
                    uni.login({
                        success: function (a) {
                            console.log('xresult =', a),
                                'login:ok' === a.errMsg &&
                                    i
                                        .getWxOpenId({
                                            code: a.code
                                        })
                                        .then(function (a) {
                                            if ((console.log('res = ', a), 200 == a.code)) {
                                                var t = a.object.openid;
                                                e.setData({
                                                    openId: t
                                                });
                                            }
                                        });
                        },
                        fail: function (e) {
                            console.log('fail .res =', e);
                        },
                        complete: function (e) {
                            console.log('回调 res =', e);
                        }
                    });
                },

                optionDataChange: function (e) {
                    if ('' != this.openId) {
                        console.log('event = ', e);
                        var a = e.detail.params,
                            t = (a.base64pic, a.picImage),
                            o = a.type,
                            s = e.target.id;
                        console.log('id = ', s);
                        var n = this,
                            r = {
                                imgType: '2',
                                imgFormat: 'JPG',
                                customerNo: this.openId
                            };
                        'idCard' == s && 'left' == o
                            ? (r = {
                                  imgType: '2',
                                  imgFormat: 'JPG',
                                  customerNo: this.openId
                              })
                            : 'idCard' == s && 'right' == o
                            ? (r = {
                                  imgType: '1',
                                  imgFormat: 'JPG',
                                  customerNo: this.openId
                              })
                            : 'bankCard' == s &&
                              'left' == o &&
                              (r = {
                                  imgType: '3',
                                  imgFormat: 'JPG',
                                  customerNo: this.openId
                              }),
                            console.log('上传图片入参 dicData = ', r),
                            uni.showLoading({
                                title: '加载中',
                                mask: !0
                            }),
                            uni.uploadFile({
                                url: i.POSTBaseUrl() + 'pub/img/uploadImg',
                                filePath: t,
                                name: 'pic',
                                formData: r,
                                header: {
                                    'content-type': 'multipart/form-data'
                                },
                                success: function (e) {
                                    var a = e.data,
                                        t = JSON.parse(a);
                                    console.log('jsonData = ', t),
                                        200 == t.code
                                            ? 'idCard' == s && 'left' == o
                                                ? n.setData({
                                                      idcardName: t.object.name,
                                                      idCardNumber: t.object.idcard,
                                                      idCardZmImagurl: t.object.imgUrl
                                                  })
                                                : 'idCard' == s && 'right' == o
                                                ? n.setData({
                                                      personStartTimeValue: n.changeStartTime(t.object.validDate),
                                                      personEndTimeValue: n.changeEndTime(t.object.validDate),
                                                      idCardFmImagurl: t.object.imgUrl
                                                  })
                                                : 'bankCard' == s &&
                                                  'left' == o &&
                                                  n.setData({
                                                      bankCardnumber: t.object.bankCard,
                                                      bankCardImgUrl: t.object.imgUrl
                                                  })
                                            : ('idCard' == s && 'left' == o
                                                  ? n.setData({
                                                        idCardImageV: 'https://www.krppay.com/skb_assets/login_idcard_zm.png'
                                                    })
                                                  : 'idCard' == s && 'right' == o
                                                  ? n.setData({
                                                        idCardFanMianV: 'https://www.krppay.com/skb_assets/login_idcard_fm.png'
                                                    })
                                                  : 'bankCard' == s &&
                                                    'left' == o &&
                                                    n.setData({
                                                        bankCardImageV: 'https://www.krppay.com/skb_assets/login_bankcard_zm.png'
                                                    }),
                                              setTimeout(function () {
                                                  uni.showToast({
                                                      title: t.message,
                                                      icon: 'none'
                                                  });
                                              }, 300));
                                },
                                fail: function (e) {
                                    'idCard' == s && 'left' == o
                                        ? n.setData({
                                              idCardImageV: 'https://www.krppay.com/skb_assets/login_idcard_zm.png'
                                          })
                                        : 'idCard' == s && 'right' == o
                                        ? n.setData({
                                              idCardFanMianV: 'https://www.krppay.com/skb_assets/login_idcard_fm.png'
                                          })
                                        : 'bankCard' == s &&
                                          'left' == o &&
                                          n.setData({
                                              bankCardImageV: 'https://www.krppay.com/skb_assets/login_bankcard_zm.png'
                                          });
                                },
                                complete: function (e) {
                                    uni.hideLoading();
                                }
                            });
                    } else this.getOpenid();
                },

                onCloseArea: function () {
                    console.log('地址弹窗取消'),
                        this.setData({
                            showAreaPop: !1,
                            showJYAreaPop: !1
                        });
                },

                onConfirmArea: function (e) {
                    console.log('event', e);
                    this.setData({
                        areaCode: e.detail.values[1].code,
                        provinceCode: e.detail.values[0].code,
                        areaNmae: e.detail.values[0].name + '/' + e.detail.values[1].name,
                        alliedBankCode: '',
                        showAreaPop: !1,
                        alliedBankName: '请选择'
                    });
                },

                addressDataChange: function (e) {
                    console.log('event = ', e);
                    var a = e.target.id;
                    console.log('id = ', a);
                    'bankaddress' == a
                        ? this.setData({
                              areaCode: e.detail.cityCode,
                              provinceCode: e.detail.provinceCode,
                              areaNmae: e.detail.addressString,
                              alliedBankCode: '',
                              showAreaPop: !1,
                              alliedBankName: '请选择'
                          })
                        : 'jyaddress' == a &&
                          this.setData({
                              jyareaDiquCode: e.detail.areaCode,
                              jycityCode: e.detail.cityCode,
                              jyprovinceCode: e.detail.provinceCode,
                              jyareaName: e.detail.addressString,
                              jyAddress: '',
                              showJYAreaPop: !1
                          });
                },

                onChange: function (e) {
                    console.log(e),
                        '1' != this.radio &&
                            this.setData({
                                radio: e.detail
                            });
                },

                clickRow: function (e) {
                    var a = e.target.dataset.rowtitle;
                    if ('开户行' == a)
                        uni.navigateTo({
                            url: '/login/accontRegister/bank/bank'
                        });
                    else if ('开户支行' == a) {
                        if ('' == this.bankCode.length)
                            return void uni.showToast({
                                title: '请选择总行',
                                icon: 'none'
                            });
                        if ('' == this.areaCode.length)
                            return void uni.showToast({
                                title: '请选择开户行所在地',
                                icon: 'none'
                            });
                        uni.navigateTo({
                            url: '/login/accontRegister/alliedBank/alliedBank?bankCode=' + this.bankCode + '&areaCode=' + this.areaCode
                        });
                    } else
                        '开户行所在地' == a
                            ? (console.log('开户所在地'),
                              this.setData({
                                  showAreaPop: !0
                              }))
                            : '经营地区' == a &&
                              (console.log('经营地区'),
                              this.setData({
                                  showJYAreaPop: !0
                              }));
                },

                onClickHyYtypeRow: function () {
                    '' != this.jyareaDiquCode
                        ? uni.navigateTo({
                              url: '/login/accontRegister/hangyetype/hangyetype?area=' + this.jyareaDiquCode
                          })
                        : uni.showToast({
                              title: '请先选择经营地区',
                              icon: 'none'
                          });
                },

                clearSelect: function () {
                    console.log('点击了清除选择'),
                        this.setData({
                            hangyeCode: '',
                            hangyeName: '若不输入则执行智能账单'
                        });
                },

                showidCardDateSelect: function () {
                    this.setData({
                        showStartTime: !0
                    }),
                        console.log('弹出身份证开始时间弹窗');
                },

                showidCardDateEndSelect: function () {
                    this.setData({
                        showEndTime: !0
                    }),
                        console.log('弹出身份证结束时间弹窗');
                },

                timeDataChange: function (e) {
                    var a = e.detail.selectYMDTime;
                    console.log('x-xx-x---x-x--x-x-', a),
                        console.log('点击了时间选择确定按钮 event = ', e),
                        this.dismissPop(),
                        'start' == e.target.id
                            ? this.setData({
                                  personStartTimeValue: a
                              })
                            : this.setData({
                                  personEndTimeValue: a
                              });
                },

                dismissPop: function () {
                    console.log('dismiss'),
                        this.setData({
                            showStartTime: !1,
                            showEndTime: !1
                        });
                },

                clickCommit: function () {
                    if (this.comparetime(this.personEndTimeValue, this.currentTimeString))
                        uni.showToast({
                            title: '身份证有效期截止时间不能小于当前时间',
                            icon: 'none'
                        });
                    else if ('' != this.idCardZmImagurl) {
                        if ('' != this.idCardFmImagurl) {
                            if ('' != this.bankCardImgUrl) {
                                if ('' != this.idcardName) {
                                    if ('' != this.idCardNumber) {
                                        if ('' != this.bankCode) {
                                            if ('' != this.alliedBankCode) {
                                                if ('' != this.jyareaDiquCode) {
                                                    if ('' != this.jyAddress) {
                                                        if (this.jyAddress.length < 6)
                                                            uni.showToast({
                                                                title: '经营地址不能小于6位',
                                                                icon: 'none'
                                                            });
                                                        else {
                                                            var e = RegExp(/\号/);
                                                            this.jyAddress.match(e)
                                                                ? this.comparetime(this.personStartTimeValue, this.personEndTimeValue)
                                                                    ? this.requestIdCardRegisterNumber()
                                                                    : uni.showToast({
                                                                          title: '身份证有效期开始时间不能大于结束时间',
                                                                          icon: 'none'
                                                                      })
                                                                : uni.showToast({
                                                                      title: '经营地址请精确到门牌号',
                                                                      icon: 'none'
                                                                  });
                                                        }
                                                    } else
                                                        uni.showToast({
                                                            title: '请输入经营地址',
                                                            icon: 'none'
                                                        });
                                                } else
                                                    uni.showToast({
                                                        title: '请选择经营地区',
                                                        icon: 'none'
                                                    });
                                            } else
                                                uni.showToast({
                                                    title: '请选择开户支行',
                                                    icon: 'none'
                                                });
                                        } else
                                            uni.showToast({
                                                title: '请选择开户行',
                                                icon: 'none'
                                            });
                                    } else
                                        uni.showToast({
                                            title: '请输入身份证号',
                                            icon: 'none'
                                        });
                                } else
                                    uni.showToast({
                                        title: '请输入完姓名',
                                        icon: 'none'
                                    });
                            } else
                                uni.showToast({
                                    title: '请上传银行卡照片',
                                    icon: 'none'
                                });
                        } else
                            uni.showToast({
                                title: '请上传身份证反面照片',
                                icon: 'none'
                            });
                    } else
                        uni.showToast({
                            title: '请上传身份证正面照片',
                            icon: 'none'
                        });
                },

                requestIdCardRegisterNumber: function () {
                    var e = this,
                        a = this;
                    i.queryCustomerCount({
                        identityNo: this.idCardNumber
                    }).then(function (t) {
                        200 == t.code
                            ? parseInt(t.object.count) > 0
                                ? e.setData({
                                      idCardRenzhengShow: !0
                                  })
                                : a.requestRegisterAccont()
                            : uni.showToast({
                                  title: t.message,
                                  icon: 'none'
                              });
                    });
                },

                requestRegisterAccont: function () {
                    var e = this,
                        a = this.replade(this.personStartTimeValue) + this.replade(this.personEndTimeValue),
                        t = {
                            identityNo: this.idCardNumber,
                            idCaedRsUrl: this.idCardZmImagurl,
                            idCaedWsUrl: this.idCardFmImagurl,
                            legalPerson: this.idcardName,
                            validity: a,
                            bankAccountNo: this.bankCardnumber,
                            bankCode: this.bankCode,
                            alliedBankCode: this.alliedBankCode,
                            areaCode: this.areaCode,
                            bankCardImgUrl: this.bankCardImgUrl,
                            bankAccountName: this.bankName,
                            organCode: this.jyareaDiquCode,
                            address: this.jyAddress,
                            source: this.source,
                            businessType: this.hangyeCode,
                            inviterCode: this.inviterCode,
                            code: this.userCode
                        };
                    console.log('params = ', t),
                        i.queryRegisterCust(t).then(function (a) {
                            console.log('res = ', a),
                                200 == a.code
                                    ? uni.navigateTo({
                                          url:
                                              '/login/registerSuccess/registerSuccess?customerName=' +
                                              a.object.customerName +
                                              '&customerNo=' +
                                              a.object.customerNo +
                                              '&username=' +
                                              a.object.username +
                                              '&password=' +
                                              a.object.password +
                                              '&idCardnumber=' +
                                              e.idCardNumber +
                                              '&idcardName=' +
                                              e.idcardName
                                      })
                                    : (e.userLogin(),
                                      uni
                                          .showModal({
                                              title: '温馨提示',
                                              content: a.message,
                                              confirmColor: '#EF4034',
                                              showCancel: !1
                                          })
                                          .then(function (e) {}));
                        });
                },

                bindConfirmAction: function () {
                    this.requestRegisterAccont();
                },

                getAllareaInfo: function () {
                    var e = this;
                    i.POSTAllareaInfo({
                        queryType: 3
                    }).then(function (a) {
                        var t = e;
                        if ((console.log('x-x- res = ', a), 200 == a.code)) {
                            var o = {},
                                i = {},
                                s = {};
                            a.object.forEach(function (e) {
                                var a = e.areaCode,
                                    t = e.label;
                                o[a] = t;
                                var n = e.children;
                                '' != n &&
                                    null != n &&
                                    n.forEach(function (e) {
                                        var a = e.areaCode,
                                            t = e.label;
                                        i[a] = t;
                                        var o = e.children;
                                        '' != o &&
                                            null != o &&
                                            o.forEach(function (e) {
                                                var a = e.areaCode,
                                                    t = e.label;
                                                s[a] = t;
                                            });
                                    });
                            });
                        }
                        var n = {
                            province_list: o,
                            city_list: i,
                            county_list: s
                        };
                        t.setData({
                            areaList: n
                        });
                    });
                },

                changeStartTime: function (e) {
                    return (e = (e = e.substring(0, 8)).slice(0, 4) + '年' + e.slice(4, 6) + '月' + e.slice(6) + '日');
                },

                changeEndTime: function (e) {
                    var a = RegExp(/\长期/);
                    return e.match(a)
                        ? (this.setData({
                              radio: 2
                          }),
                          '长期')
                        : (e = (e = e.substring(e.length - 8)).slice(0, 4) + '年' + e.slice(4, 6) + '月' + e.slice(6) + '日');
                },

                replade: function (e) {
                    var a = e.replace('年', '');
                    return (a = (a = a.replace('月', '')).replace('日', ''));
                },

                comparetime: function (e, a) {
                    if ('长期' == a) return !0;
                    var t = e.replace('年', '/');
                    t = (t = t.replace('月', '/')).replace('日', '');
                    var o = a.replace('年', '/');
                    (o = (o = o.replace('月', '/')).replace('日', '')), (t = t.replace(/-/g, '/')), (o = o.replace(/-/g, '/'));
                    var i = new Date(t).getTime() <= new Date(o).getTime();
                    return console.log('tempStart =', t, o), console.log('expired =', i), i;
                },

                formatDate: function (e) {
                    var a = (e = new Date(e)).getFullYear(),
                        t = parseInt(e.getMonth() + 1),
                        o = e.getDate();
                    return t < 10 && (t = '0' + t), o < 10 && (o = '0' + o), ''.concat(a, '-').concat(t, '-').concat(o);
                },

                onChange: function () {},

                onClear: function () {
                    this.setData({
                        value: ''
                    });
                },

                onSearch: function () {
                    this.findByNewLikeHeadBankName();
                },

                onClick: function () {
                    this.findByNewLikeHeadBankName();
                },

                findByNewLikeHeadBankName: function () {
                    var e = this,
                        n = {
                            bankName: this.value
                        };
                    console.log('params =', n),
                        a.POSTAllTopBank(n).then(function (a) {
                            console.log('res = ', a),
                                200 == a.code &&
                                    e.setData({
                                        bankList: a.object
                                    });
                        });
                },

                selectBank: function (a) {
                    var e = a.currentTarget.dataset.name,
                        n = a.currentTarget.dataset.code,
                        t = getCurrentPages();
                    console.log(t);
                    var i = t[t.length - 2];
                    i &&
                        (i.setData({
                            bankCode: n,
                            bankName: e,
                            alliedBankCode: '',
                            alliedBankName: '请选择'
                        }),
                        uni.navigateBack({
                            delta: 1
                        }));
                },

                onChange: function () {},

                onClear: function () {
                    this.setData({
                        value: ''
                    });
                },

                onSearch: function () {
                    this.findNewSubBank();
                },

                onClick: function () {
                    this.findNewSubBank();
                },

                findNewSubBank: function () {
                    var e = this,
                        n = {
                            areaCode: this.areaCode,
                            bankCode: this.bankCode,
                            branchName: this.value
                        };
                    console.log('params =', n),
                        a.POSTbranchBankList(n).then(function (a) {
                            console.log('res = ', a),
                                200 == a.code &&
                                    e.setData({
                                        bankList: a.object
                                    });
                        });
                },

                selectBank: function (a) {
                    var e = a.currentTarget.dataset.name,
                        n = a.currentTarget.dataset.code,
                        t = getCurrentPages(),
                        o = t[t.length - 2];
                    o &&
                        (o.setData({
                            alliedBankCode: n,
                            alliedBankName: e
                        }),
                        uni.navigateBack({
                            delta: 1
                        }));
                },

                onChange: function () {
                    this.setData({
                        value: e.detail
                    });
                },

                onClear: function () {
                    this.setData({
                        value: ''
                    });
                },

                onSearch: function () {
                    this.findByNewLikeHeadBankName();
                },

                onClick: function () {
                    this.findByNewLikeHeadBankName();
                },

                findByNewLikeHeadBankName: function () {
                    var e = this,
                        t = {
                            fbFlag: '3',
                            areaCode: this.areaCode,
                            keyWord: this.value
                        };
                    console.log('params =', t),
                        a.POSTCustMcctype(t).then(function (a) {
                            if ((console.log('res = ', a), 200 == a.code)) {
                                var t = a.object;
                                e.setData({
                                    typeList: t
                                });
                            }
                        });
                },

                selectHyType: function (e) {
                    var a = e.currentTarget.dataset.name,
                        t = e.currentTarget.dataset.code,
                        n = getCurrentPages();
                    console.log(n);
                    var o = n[n.length - 2];
                    o &&
                        (o.setData({
                            hangyeCode: t,
                            hangyeName: a
                        }),
                        uni.navigateBack({
                            delta: 1
                        }));
                },

                copyText: function (a) {
                    console.log(this.username),
                        uni.setClipboardData({
                            data: this.username,
                            success: function (a) {
                                uni.getClipboardData({
                                    success: function (a) {
                                        console.log(a.data);
                                    }
                                });
                            }
                        });
                },

                clickBindGohome: function () {
                    var a = getCurrentPages();
                    console.log('pages.lengt =', a);
                    var e = a[a.length - 3];
                    2 != a.length
                        ? e &&
                          (e.setData({
                              accont: this.username,
                              password: this.password,
                              idCardnumber: this.idcardNumber,
                              idCardName: this.idcardUserName
                          }),
                          uni.navigateBack({
                              delta: 2
                          }))
                        : uni.redirectTo({
                              url: '/login/idCardLogin/idCardLogin?idCardnumber=' + this.idcardNumber + '&idCardName=' + this.idcardUserName
                          });
                }
            }
        };
    }
);
require('./login/registerSuccess/registerSuccess.js');
