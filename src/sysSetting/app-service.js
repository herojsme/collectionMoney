/*v0.5vv_20200413_syb_scopedata*/ global.__wcc_version__ = 'v0.5vv_20200413_syb_scopedata';
global.__wcc_version_info__ = {
    customComponents: true,
    fixZeroRpx: true,
    propValueDeepCopy: false
};
var $gwxc;
var $gaic = {};
$gwx4 = function (path, global) {
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
        console.warn('WXMLRT_$gwx4:' + m);
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
    var z = __WXML_GLOBAL__.ops_set.$gwx4 || [];
    function gz$gwx4_1() {
        if (__WXML_GLOBAL__.ops_cached.$gwx4_1) return __WXML_GLOBAL__.ops_cached.$gwx4_1;
        __WXML_GLOBAL__.ops_cached.$gwx4_1 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'about_us_container']);
            Z([1, false]);
            Z([3, 'margin-top: 87rpx;']);
            Z([3, 'callPhone']);
            Z([3, '客服热线']);
            Z([[7], [3, 'customeHotline']]);
            Z([3, '微信公众号']);
            Z([[7], [3, 'wxOfficialAccount']]);
            Z([3, '当前版本']);
            Z([[7], [3, 'miniVersion']]);
            Z([3, 'navigateTo']);
            Z([3, '政策协议']);
            Z([3, '/sysSetting/userAgreement/userAgreement']);
            Z([3, 'onClose']);
            Z([3, 'onConfirm']);
            Z([3, '#45464E']);
            Z([3, '取消']);
            Z([3, '#EF4034']);
            Z([3, '关注']);
            Z([[7], [3, 'showFollowDialog']]);
            Z([3, '关注公众号']);
        })(__WXML_GLOBAL__.ops_cached.$gwx4_1);
        return __WXML_GLOBAL__.ops_cached.$gwx4_1;
    }
    function gz$gwx4_2() {
        if (__WXML_GLOBAL__.ops_cached.$gwx4_2) return __WXML_GLOBAL__.ops_cached.$gwx4_2;
        __WXML_GLOBAL__.ops_cached.$gwx4_2 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'account_box']);
            Z([[7], [3, 'accontArr']]);
            Z([3, 'item.customerNo']);
            Z([3, 'clickAccont']);
            Z([
                a,
                [3, 'account_item_box '],
                [
                    [2, '?:'],
                    [
                        [2, '=='],
                        [[7], [3, 'selectIndex']],
                        [[7], [3, 'index']]
                    ],
                    [1, 'account_select'],
                    [1, '']
                ]
            ]);
            Z([[7], [3, 'index']]);
            Z([[7], [3, 'item']]);
            Z([3, 'account_data_box']);
            Z([
                [2, '&&'],
                [[6], [[7], [3, 'item']], [3, 'customerName']],
                [
                    [2, '=='],
                    [[6], [[7], [3, 'item']], [3, 'status']],
                    [1, 'TRUE']
                ]
            ]);
            Z([[6], [[7], [3, 'item']], [3, 'customerNo']]);
            Z([3, 'eventChangeAccount']);
            Z([3, 'confirm_button']);
            Z([3, 'info']);
        })(__WXML_GLOBAL__.ops_cached.$gwx4_2);
        return __WXML_GLOBAL__.ops_cached.$gwx4_2;
    }
    function gz$gwx4_3() {
        if (__WXML_GLOBAL__.ops_cached.$gwx4_3) return __WXML_GLOBAL__.ops_cached.$gwx4_3;
        __WXML_GLOBAL__.ops_cached.$gwx4_3 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([[7], [3, 'accountTypeList']]);
            Z([3, 'index']);
            Z([3, 'changeAccount']);
            Z([3, 'setting_cell']);
            Z([[7], [3, 'index']]);
            Z([3, 'rb']);
            Z([
                [2, '=='],
                [[6], [[7], [3, 'item']], [3, 'status']],
                [1, true]
            ]);
            Z([3, 'checked']);
            Z([3, '35rpx']);
            Z([3, 'circle']);
            Z(z[8]);
            Z([3, 'confirm']);
            Z([3, 'confirm_button']);
            Z([3, 'info']);
        })(__WXML_GLOBAL__.ops_cached.$gwx4_3);
        return __WXML_GLOBAL__.ops_cached.$gwx4_3;
    }
    function gz$gwx4_4() {
        if (__WXML_GLOBAL__.ops_cached.$gwx4_4) return __WXML_GLOBAL__.ops_cached.$gwx4_4;
        __WXML_GLOBAL__.ops_cached.$gwx4_4 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'modifyLoginPassword']);
            Z([1, 'confirm_button']);
            Z([
                [2, '||'],
                [
                    [2, '||'],
                    [
                        [2, '<'],
                        [[6], [[7], [3, 'oldPwd']], [3, 'length']],
                        [1, 8]
                    ],
                    [
                        [2, '<'],
                        [[6], [[7], [3, 'newPwd']], [3, 'length']],
                        [1, 8]
                    ]
                ],
                [
                    [2, '<'],
                    [[6], [[7], [3, 'newPwdAgain']], [3, 'length']],
                    [1, 8]
                ]
            ]);
            Z([3, 'info']);
        })(__WXML_GLOBAL__.ops_cached.$gwx4_4);
        return __WXML_GLOBAL__.ops_cached.$gwx4_4;
    }
    function gz$gwx4_5() {
        if (__WXML_GLOBAL__.ops_cached.$gwx4_5) return __WXML_GLOBAL__.ops_cached.$gwx4_5;
        __WXML_GLOBAL__.ops_cached.$gwx4_5 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'toSetPhone']);
            Z([1, 'confirm_button']);
            Z([3, 'info']);
            Z([3, 'onClose']);
            Z([3, 'onConfirm']);
            Z([3, '#EF4034']);
            Z([[7], [3, 'show']]);
            Z([3, '标题']);
        })(__WXML_GLOBAL__.ops_cached.$gwx4_5);
        return __WXML_GLOBAL__.ops_cached.$gwx4_5;
    }
    function gz$gwx4_6() {
        if (__WXML_GLOBAL__.ops_cached.$gwx4_6) return __WXML_GLOBAL__.ops_cached.$gwx4_6;
        __WXML_GLOBAL__.ops_cached.$gwx4_6 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'checkLoginPwd']);
            Z([3, 'confirm_button']);
            Z([
                [2, '=='],
                [[7], [3, 'loginPwd']],
                [1, '']
            ]);
            Z([3, 'info']);
        })(__WXML_GLOBAL__.ops_cached.$gwx4_6);
        return __WXML_GLOBAL__.ops_cached.$gwx4_6;
    }
    function gz$gwx4_7() {
        if (__WXML_GLOBAL__.ops_cached.$gwx4_7) return __WXML_GLOBAL__.ops_cached.$gwx4_7;
        __WXML_GLOBAL__.ops_cached.$gwx4_7 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'confirm_button']);
            Z([3, 'info']);
        })(__WXML_GLOBAL__.ops_cached.$gwx4_7);
        return __WXML_GLOBAL__.ops_cached.$gwx4_7;
    }
    function gz$gwx4_8() {
        if (__WXML_GLOBAL__.ops_cached.$gwx4_8) return __WXML_GLOBAL__.ops_cached.$gwx4_8;
        __WXML_GLOBAL__.ops_cached.$gwx4_8 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'imgDataChange']);
            Z([3, 'https://www.krppay.com/skb_assets/scan_icon.png']);
            Z([3, '36rpx']);
            Z([3, 'confirm']);
            Z([3, 'confirm_button']);
            Z([3, 'info']);
        })(__WXML_GLOBAL__.ops_cached.$gwx4_8);
        return __WXML_GLOBAL__.ops_cached.$gwx4_8;
    }
    function gz$gwx4_9() {
        if (__WXML_GLOBAL__.ops_cached.$gwx4_9) return __WXML_GLOBAL__.ops_cached.$gwx4_9;
        __WXML_GLOBAL__.ops_cached.$gwx4_9 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'setting_list']);
            Z([3, 'fixPassword']);
            Z([3, 'setting_cell']);
            Z([3, '#C1C1C1']);
            Z([3, 'arrow']);
            Z([3, 'clickForgetPassword']);
            Z(z[2]);
            Z(z[3]);
            Z(z[4]);
            Z([3, 'unbindWechat']);
            Z(z[2]);
            Z(z[3]);
            Z(z[4]);
            Z([3, 'fixPhoneNum']);
            Z(z[2]);
            Z(z[3]);
            Z(z[4]);
            Z([3, 'clickAccontChange']);
            Z(z[2]);
            Z(z[3]);
            Z(z[4]);
            Z([[7], [3, 'islogin']]);
        })(__WXML_GLOBAL__.ops_cached.$gwx4_9);
        return __WXML_GLOBAL__.ops_cached.$gwx4_9;
    }
    function gz$gwx4_10() {
        if (__WXML_GLOBAL__.ops_cached.$gwx4_10) return __WXML_GLOBAL__.ops_cached.$gwx4_10;
        __WXML_GLOBAL__.ops_cached.$gwx4_10 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'inner_box']);
            Z([3, 'onChange']);
            Z([3, '#EF4034']);
            Z([[7], [3, 'checked']]);
            Z([3, 'confirm']);
            Z([
                [2, '?:'],
                [
                    [2, '=='],
                    [[7], [3, 'checked']],
                    [1, true]
                ],
                [1, 'confirm_button button_margin'],
                [1, 'cancle_button button_margin']
            ]);
            Z([
                [2, '=='],
                [[7], [3, 'checked']],
                [1, false]
            ]);
            Z([3, 'info']);
        })(__WXML_GLOBAL__.ops_cached.$gwx4_10);
        return __WXML_GLOBAL__.ops_cached.$gwx4_10;
    }
    function gz$gwx4_11() {
        if (__WXML_GLOBAL__.ops_cached.$gwx4_11) return __WXML_GLOBAL__.ops_cached.$gwx4_11;
        __WXML_GLOBAL__.ops_cached.$gwx4_11 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'i']);
            Z([1, 6]);
            Z([3, 'item']);
            Z([
                [2, '>'],
                [[6], [[7], [3, 'pwdVal']], [3, 'length']],
                [[7], [3, 'i']]
            ]);
        })(__WXML_GLOBAL__.ops_cached.$gwx4_11);
        return __WXML_GLOBAL__.ops_cached.$gwx4_11;
    }
    function gz$gwx4_12() {
        if (__WXML_GLOBAL__.ops_cached.$gwx4_12) return __WXML_GLOBAL__.ops_cached.$gwx4_12;
        __WXML_GLOBAL__.ops_cached.$gwx4_12 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'i']);
            Z([1, 6]);
            Z([3, 'item']);
            Z([
                [2, '>'],
                [[6], [[7], [3, 'pwdVal']], [3, 'length']],
                [[7], [3, 'i']]
            ]);
        })(__WXML_GLOBAL__.ops_cached.$gwx4_12);
        return __WXML_GLOBAL__.ops_cached.$gwx4_12;
    }
    function gz$gwx4_13() {
        if (__WXML_GLOBAL__.ops_cached.$gwx4_13) return __WXML_GLOBAL__.ops_cached.$gwx4_13;
        __WXML_GLOBAL__.ops_cached.$gwx4_13 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'main']);
            Z([3, 'arrow']);
            Z([3, '30rpx']);
            Z(z[1]);
            Z(z[2]);
        })(__WXML_GLOBAL__.ops_cached.$gwx4_13);
        return __WXML_GLOBAL__.ops_cached.$gwx4_13;
    }
    function gz$gwx4_14() {
        if (__WXML_GLOBAL__.ops_cached.$gwx4_14) return __WXML_GLOBAL__.ops_cached.$gwx4_14;
        __WXML_GLOBAL__.ops_cached.$gwx4_14 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'container']);
            Z([3, '#EF4034']);
            Z([3, 'onChangeMer']);
            Z([[7], [3, 'merManageSwitch']]);
            Z([3, '#E7E7E7']);
            Z([3, '40rpx']);
            Z(z[1]);
            Z([3, 'onChangeNight']);
            Z([[7], [3, 'nightSercviceSwitch']]);
            Z(z[4]);
            Z(z[5]);
        })(__WXML_GLOBAL__.ops_cached.$gwx4_14);
        return __WXML_GLOBAL__.ops_cached.$gwx4_14;
    }
    function gz$gwx4_15() {
        if (__WXML_GLOBAL__.ops_cached.$gwx4_15) return __WXML_GLOBAL__.ops_cached.$gwx4_15;
        __WXML_GLOBAL__.ops_cached.$gwx4_15 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'main']);
            Z([3, 'arrow']);
            Z([3, '30rpx']);
            Z(z[1]);
            Z(z[2]);
            Z(z[1]);
            Z(z[2]);
        })(__WXML_GLOBAL__.ops_cached.$gwx4_15);
        return __WXML_GLOBAL__.ops_cached.$gwx4_15;
    }
    function gz$gwx4_16() {
        if (__WXML_GLOBAL__.ops_cached.$gwx4_16) return __WXML_GLOBAL__.ops_cached.$gwx4_16;
        __WXML_GLOBAL__.ops_cached.$gwx4_16 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'container']);
            Z([3, 'eventItem']);
            Z([3, 'title_icon']);
            Z([[7], [3, 'serviceAgreementUrl']]);
            Z([3, 'arrow']);
            Z(z[1]);
            Z(z[2]);
            Z([[7], [3, 'polictyAgreementUrl']]);
            Z(z[4]);
        })(__WXML_GLOBAL__.ops_cached.$gwx4_16);
        return __WXML_GLOBAL__.ops_cached.$gwx4_16;
    }
    __WXML_GLOBAL__.ops_set.$gwx4 = z;
    __WXML_GLOBAL__.ops_init.$gwx4 = true;
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
        './sysSetting/aboutus/aboutus.wxml',
        './sysSetting/changeAccount/changeAccount.wxml',
        './sysSetting/changeAccountType/changeAccountType.wxml',
        './sysSetting/changeLoginPwd/changeLoginPwd.wxml',
        './sysSetting/changetTelephone/changetTelephone.wxml',
        './sysSetting/checkLoginPwd/checkLoginPwd.wxml',
        './sysSetting/confirmCancle/confirmCancle.wxml',
        './sysSetting/increaseLimit/increaseLimit.wxml',
        './sysSetting/index/index.wxml',
        './sysSetting/logout/logout.wxml',
        './sysSetting/setPayPwd/setPayPwd.wxml',
        './sysSetting/setPayPwdAgain/setPayPwdAgain.wxml',
        './sysSetting/somethingNeedDo/somethingNeedDo.wxml',
        './sysSetting/specialPricing/specialPricing.wxml',
        './sysSetting/toUnbind/toUnbind.wxml',
        './sysSetting/userAgreement/userAgreement.wxml'
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
        var z = gz$gwx4_1();
        var oB = _n('view');
        _rz(z, oB, 'class', 0, e, s, gg);
        var xC = _mz(z, 'van-cell-group', ['border', 1, 'style', 1], [], e, s, gg);
        var oD = _mz(z, 'van-cell', ['bindtap', 3, 'title', 1, 'value', 2], [], e, s, gg);
        _(xC, oD);
        var fE = _mz(z, 'van-cell', ['title', 6, 'value', 1], [], e, s, gg);
        _(xC, fE);
        var cF = _mz(z, 'van-cell', ['title', 8, 'value', 1], [], e, s, gg);
        _(xC, cF);
        var hG = _mz(z, 'van-cell', ['isLink', -1, 'linkType', 10, 'title', 1, 'url', 2], [], e, s, gg);
        _(xC, hG);
        _(oB, xC);
        var oH = _mz(
            z,
            'van-dialog',
            [
                'closeOnClickOverlay',
                -1,
                'showCancelButton',
                -1,
                'useSlot',
                -1,
                'bind:close',
                13,
                'bind:confirm',
                1,
                'cancelButtonColor',
                2,
                'cancelButtonText',
                3,
                'confirmButtonColor',
                4,
                'confirmButtonText',
                5,
                'show',
                6,
                'title',
                7
            ],
            [],
            e,
            s,
            gg
        );
        _(oB, oH);
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
        var z = gz$gwx4_2();
        var oJ = _n('view');
        _rz(z, oJ, 'class', 0, e, s, gg);
        var lK = _v();
        _(oJ, lK);
        var aL = function (eN, tM, bO, gg) {
            var xQ = _mz(z, 'view', ['bindtap', 3, 'class', 1, 'data-index', 2, 'data-item', 3], [], eN, tM, gg);
            var oR = _n('view');
            _rz(z, oR, 'class', 7, eN, tM, gg);
            var fS = _v();
            _(oR, fS);
            if (_oz(z, 8, eN, tM, gg)) {
                fS.wxVkey = 1;
            }
            var cT = _v();
            _(oR, cT);
            if (_oz(z, 9, eN, tM, gg)) {
                cT.wxVkey = 1;
            }
            fS.wxXCkey = 1;
            cT.wxXCkey = 1;
            _(xQ, oR);
            _(bO, xQ);
            return bO;
        };
        lK.wxXCkey = 2;
        _2z(z, 1, aL, e, s, gg, lK, 'item', 'index', 'item.customerNo');
        var hU = _mz(z, 'van-button', ['round', -1, 'bindtap', 10, 'customClass', 1, 'type', 2], [], e, s, gg);
        _(oJ, hU);
        _(r, oJ);
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
        var z = gz$gwx4_3();
        var cW = _v();
        _(r, cW);
        var oX = function (aZ, lY, t1, gg) {
            var b3 = _mz(z, 'view', ['bind:tap', 2, 'class', 1, 'data-index', 2], [], aZ, lY, gg);
            var o4 = _n('view');
            _rz(z, o4, 'class', 5, aZ, lY, gg);
            var x5 = _v();
            _(o4, x5);
            if (_oz(z, 6, aZ, lY, gg)) {
                x5.wxVkey = 1;
                var o6 = _mz(z, 'van-icon', ['name', 7, 'size', 1], [], aZ, lY, gg);
                _(x5, o6);
            } else {
                x5.wxVkey = 2;
                var f7 = _mz(z, 'van-icon', ['name', 9, 'size', 1], [], aZ, lY, gg);
                _(x5, f7);
            }
            x5.wxXCkey = 1;
            x5.wxXCkey = 3;
            x5.wxXCkey = 3;
            _(b3, o4);
            _(t1, b3);
            return t1;
        };
        cW.wxXCkey = 4;
        _2z(z, 0, oX, e, s, gg, cW, 'item', 'index', 'index');
        var c8 = _mz(z, 'van-button', ['round', -1, 'bind:click', 11, 'customClass', 1, 'type', 2], [], e, s, gg);
        _(r, c8);
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
        var z = gz$gwx4_4();
        var o0 = _mz(z, 'van-button', ['round', -1, 'bind:click', 0, 'customClass', 1, 'disabled', 1, 'type', 2], [], e, s, gg);
        _(r, o0);
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
        var z = gz$gwx4_5();
        var oBB = _mz(z, 'van-button', ['round', -1, 'bind:click', 0, 'customClass', 1, 'type', 1], [], e, s, gg);
        _(r, oBB);
        var lCB = _mz(z, 'van-dialog', ['showCancelButton', -1, 'useSlot', -1, 'bind:close', 3, 'bind:confirm', 1, 'confirmButtonColor', 2, 'show', 3, 'title', 4], [], e, s, gg);
        _(r, lCB);
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
        var z = gz$gwx4_6();
        var tEB = _mz(z, 'van-button', ['round', -1, 'bind:click', 0, 'customClass', 1, 'disabled', 1, 'type', 2], [], e, s, gg);
        _(r, tEB);
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
        var z = gz$gwx4_7();
        var bGB = _mz(z, 'van-button', ['round', -1, 'customClass', 0, 'type', 1], [], e, s, gg);
        _(r, bGB);
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
        var z = gz$gwx4_8();
        var xIB = _mz(z, 'van-icon', ['bindtap', 0, 'name', 1, 'size', 1], [], e, s, gg);
        _(r, xIB);
        var oJB = _mz(z, 'van-button', ['round', -1, 'bind:click', 3, 'customClass', 1, 'type', 2], [], e, s, gg);
        _(r, oJB);
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
        var z = gz$gwx4_9();
        var hMB = _n('view');
        _rz(z, hMB, 'class', 0, e, s, gg);
        var oNB = _mz(z, 'view', ['bindtap', 1, 'class', 1], [], e, s, gg);
        var cOB = _mz(z, 'van-icon', ['color', 3, 'name', 1], [], e, s, gg);
        _(oNB, cOB);
        _(hMB, oNB);
        var oPB = _mz(z, 'view', ['bindtap', 5, 'class', 1], [], e, s, gg);
        var lQB = _mz(z, 'van-icon', ['color', 7, 'name', 1], [], e, s, gg);
        _(oPB, lQB);
        _(hMB, oPB);
        var aRB = _mz(z, 'view', ['bindtap', 9, 'class', 1], [], e, s, gg);
        var tSB = _mz(z, 'van-icon', ['color', 11, 'name', 1], [], e, s, gg);
        _(aRB, tSB);
        _(hMB, aRB);
        var eTB = _mz(z, 'view', ['bindtap', 13, 'class', 1], [], e, s, gg);
        var bUB = _mz(z, 'van-icon', ['color', 15, 'name', 1], [], e, s, gg);
        _(eTB, bUB);
        _(hMB, eTB);
        var oVB = _mz(z, 'view', ['bindtap', 17, 'class', 1], [], e, s, gg);
        var xWB = _mz(z, 'van-icon', ['color', 19, 'name', 1], [], e, s, gg);
        _(oVB, xWB);
        _(hMB, oVB);
        _(r, hMB);
        var cLB = _v();
        _(r, cLB);
        if (_oz(z, 21, e, s, gg)) {
            cLB.wxVkey = 1;
        }
        cLB.wxXCkey = 1;
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
        var z = gz$gwx4_10();
        var fYB = _n('view');
        _rz(z, fYB, 'class', 0, e, s, gg);
        var cZB = _mz(z, 'van-checkbox', ['bind:change', 1, 'checkedColor', 1, 'value', 2], [], e, s, gg);
        _(fYB, cZB);
        var h1B = _mz(z, 'van-button', ['round', -1, 'bind:click', 4, 'customClass', 1, 'disabled', 2, 'type', 3], [], e, s, gg);
        _(fYB, h1B);
        _(r, fYB);
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
        var z = gz$gwx4_11();
        var c3B = _v();
        _(r, c3B);
        var o4B = function (a6B, l5B, t7B, gg) {
            var b9B = _v();
            _(t7B, b9B);
            if (_oz(z, 3, a6B, l5B, gg)) {
                b9B.wxVkey = 1;
            }
            b9B.wxXCkey = 1;
            return t7B;
        };
        c3B.wxXCkey = 2;
        _2z(z, 1, o4B, e, s, gg, c3B, 'item', 'i', 'item');
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
        var z = gz$gwx4_12();
        var xAC = _v();
        _(r, xAC);
        var oBC = function (cDC, fCC, hEC, gg) {
            var cGC = _v();
            _(hEC, cGC);
            if (_oz(z, 3, cDC, fCC, gg)) {
                cGC.wxVkey = 1;
            }
            cGC.wxXCkey = 1;
            return hEC;
        };
        xAC.wxXCkey = 2;
        _2z(z, 1, oBC, e, s, gg, xAC, 'item', 'i', 'item');
        return r;
    };
    e_[x[11]] = {
        f: m11,
        j: [],
        i: [],
        ti: [],
        ic: []
    };
    d_[x[12]] = {};
    var m12 = function (e, s, r, gg) {
        var z = gz$gwx4_13();
        var lIC = _n('view');
        _rz(z, lIC, 'class', 0, e, s, gg);
        var aJC = _mz(z, 'van-icon', ['name', 1, 'size', 1], [], e, s, gg);
        _(lIC, aJC);
        var tKC = _mz(z, 'van-icon', ['name', 3, 'size', 1], [], e, s, gg);
        _(lIC, tKC);
        _(r, lIC);
        return r;
    };
    e_[x[12]] = {
        f: m12,
        j: [],
        i: [],
        ti: [],
        ic: []
    };
    d_[x[13]] = {};
    var m13 = function (e, s, r, gg) {
        var z = gz$gwx4_14();
        var bMC = _n('view');
        _rz(z, bMC, 'class', 0, e, s, gg);
        var oNC = _mz(z, 'van-switch', ['activeColor', 1, 'bind:change', 1, 'checked', 2, 'inactiveColor', 3, 'size', 4], [], e, s, gg);
        _(bMC, oNC);
        var xOC = _mz(z, 'van-switch', ['activeColor', 6, 'bind:change', 1, 'checked', 2, 'inactiveColor', 3, 'size', 4], [], e, s, gg);
        _(bMC, xOC);
        _(r, bMC);
        return r;
    };
    e_[x[13]] = {
        f: m13,
        j: [],
        i: [],
        ti: [],
        ic: []
    };
    d_[x[14]] = {};
    var m14 = function (e, s, r, gg) {
        var z = gz$gwx4_15();
        var fQC = _n('view');
        _rz(z, fQC, 'class', 0, e, s, gg);
        var cRC = _mz(z, 'van-icon', ['name', 1, 'size', 1], [], e, s, gg);
        _(fQC, cRC);
        var hSC = _mz(z, 'van-icon', ['name', 3, 'size', 1], [], e, s, gg);
        _(fQC, hSC);
        var oTC = _mz(z, 'van-icon', ['name', 5, 'size', 1], [], e, s, gg);
        _(fQC, oTC);
        _(r, fQC);
        return r;
    };
    e_[x[14]] = {
        f: m14,
        j: [],
        i: [],
        ti: [],
        ic: []
    };
    d_[x[15]] = {};
    var m15 = function (e, s, r, gg) {
        var z = gz$gwx4_16();
        var oVC = _n('view');
        _rz(z, oVC, 'class', 0, e, s, gg);
        var lWC = _mz(z, 'view', ['bindtap', 1, 'class', 1, 'data-pathurl', 2], [], e, s, gg);
        var aXC = _n('van-icon');
        _rz(z, aXC, 'name', 4, e, s, gg);
        _(lWC, aXC);
        _(oVC, lWC);
        var tYC = _mz(z, 'view', ['bindtap', 5, 'class', 1, 'data-pathurl', 2], [], e, s, gg);
        var eZC = _n('van-icon');
        _rz(z, eZC, 'name', 8, e, s, gg);
        _(tYC, eZC);
        _(oVC, tYC);
        _(r, oVC);
        return r;
    };
    e_[x[15]] = {
        f: m15,
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
__wxAppCode__['sysSetting/aboutus/aboutus.json'] = {
    usingComponents: {
        'van-cell': '../../miniprogram_npm/@vant/weapp/cell/index',
        'van-cell-group': '../../miniprogram_npm/@vant/weapp/cell-group/index',
        'van-dialog': '../../miniprogram_npm/@vant/weapp/dialog/index'
    },
    navigationBarTitleText: '关于我们'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['sysSetting/aboutus/aboutus.wxml'] = [$gwx4, './sysSetting/aboutus/aboutus.wxml'];
else __wxAppCode__['sysSetting/aboutus/aboutus.wxml'] = $gwx4('./sysSetting/aboutus/aboutus.wxml');
__wxAppCode__['sysSetting/changeAccount/changeAccount.json'] = {
    usingComponents: {
        'van-button': '../../miniprogram_npm/@vant/weapp/button/index',
        'van-checkbox': '../../miniprogram_npm/@vant/weapp/checkbox/index',
        'van-checkbox-group': '../../miniprogram_npm/@vant/weapp/checkbox-group/index'
    },
    navigationBarTitleText: '切换账号'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['sysSetting/changeAccount/changeAccount.wxml'] = [$gwx4, './sysSetting/changeAccount/changeAccount.wxml'];
else __wxAppCode__['sysSetting/changeAccount/changeAccount.wxml'] = $gwx4('./sysSetting/changeAccount/changeAccount.wxml');
__wxAppCode__['sysSetting/changeAccountType/changeAccountType.json'] = {
    usingComponents: {
        'van-icon': '../../miniprogram_npm/@vant/weapp/icon/index',
        'van-button': '../../miniprogram_npm/@vant/weapp/button/index'
    },
    navigationBarTitleText: '修改到账方式'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['sysSetting/changeAccountType/changeAccountType.wxml'] = [$gwx4, './sysSetting/changeAccountType/changeAccountType.wxml'];
else __wxAppCode__['sysSetting/changeAccountType/changeAccountType.wxml'] = $gwx4('./sysSetting/changeAccountType/changeAccountType.wxml');
__wxAppCode__['sysSetting/changeLoginPwd/changeLoginPwd.json'] = {
    usingComponents: {
        'van-button': '../../miniprogram_npm/@vant/weapp/button/index'
    },
    navigationBarTitleText: '修改登录密码'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['sysSetting/changeLoginPwd/changeLoginPwd.wxml'] = [$gwx4, './sysSetting/changeLoginPwd/changeLoginPwd.wxml'];
else __wxAppCode__['sysSetting/changeLoginPwd/changeLoginPwd.wxml'] = $gwx4('./sysSetting/changeLoginPwd/changeLoginPwd.wxml');
__wxAppCode__['sysSetting/changetTelephone/changetTelephone.json'] = {
    usingComponents: {
        'van-button': '../../miniprogram_npm/@vant/weapp/button/index',
        'van-dialog': '../../miniprogram_npm/@vant/weapp/dialog/index'
    },
    navigationBarTitleText: '修改手机号'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['sysSetting/changetTelephone/changetTelephone.wxml'] = [$gwx4, './sysSetting/changetTelephone/changetTelephone.wxml'];
else __wxAppCode__['sysSetting/changetTelephone/changetTelephone.wxml'] = $gwx4('./sysSetting/changetTelephone/changetTelephone.wxml');
__wxAppCode__['sysSetting/checkLoginPwd/checkLoginPwd.json'] = {
    usingComponents: {
        'van-button': '../../miniprogram_npm/@vant/weapp/button/index'
    },
    navigationBarTitleText: '忘记支付密码'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['sysSetting/checkLoginPwd/checkLoginPwd.wxml'] = [$gwx4, './sysSetting/checkLoginPwd/checkLoginPwd.wxml'];
else __wxAppCode__['sysSetting/checkLoginPwd/checkLoginPwd.wxml'] = $gwx4('./sysSetting/checkLoginPwd/checkLoginPwd.wxml');
__wxAppCode__['sysSetting/confirmCancle/confirmCancle.json'] = {
    usingComponents: {
        'van-icon': '../../miniprogram_npm/@vant/weapp/icon/index',
        'van-button': '../../miniprogram_npm/@vant/weapp/button/index'
    }
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['sysSetting/confirmCancle/confirmCancle.wxml'] = [$gwx4, './sysSetting/confirmCancle/confirmCancle.wxml'];
else __wxAppCode__['sysSetting/confirmCancle/confirmCancle.wxml'] = $gwx4('./sysSetting/confirmCancle/confirmCancle.wxml');
__wxAppCode__['sysSetting/increaseLimit/increaseLimit.json'] = {
    usingComponents: {
        'van-icon': '../../miniprogram_npm/@vant/weapp/icon/index',
        'van-button': '../../miniprogram_npm/@vant/weapp/button/index'
    },
    navigationBarTitleText: '提额认证'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['sysSetting/increaseLimit/increaseLimit.wxml'] = [$gwx4, './sysSetting/increaseLimit/increaseLimit.wxml'];
else __wxAppCode__['sysSetting/increaseLimit/increaseLimit.wxml'] = $gwx4('./sysSetting/increaseLimit/increaseLimit.wxml');
__wxAppCode__['sysSetting/index/index.json'] = {
    usingComponents: {
        'van-icon': '../../miniprogram_npm/@vant/weapp/icon/index',
        'van-button': '../../miniprogram_npm/@vant/weapp/button/index'
    },
    navigationBarTitleText: '设置'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['sysSetting/index/index.wxml'] = [$gwx4, './sysSetting/index/index.wxml'];
else __wxAppCode__['sysSetting/index/index.wxml'] = $gwx4('./sysSetting/index/index.wxml');
__wxAppCode__['sysSetting/logout/logout.json'] = {
    usingComponents: {
        'van-checkbox': '../../miniprogram_npm/@vant/weapp/checkbox/index',
        'van-checkbox-group': '../../miniprogram_npm/@vant/weapp/checkbox-group/index',
        'van-button': '../../miniprogram_npm/@vant/weapp/button/index'
    }
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['sysSetting/logout/logout.wxml'] = [$gwx4, './sysSetting/logout/logout.wxml'];
else __wxAppCode__['sysSetting/logout/logout.wxml'] = $gwx4('./sysSetting/logout/logout.wxml');
__wxAppCode__['sysSetting/setPayPwd/setPayPwd.json'] = {
    usingComponents: {
        'van-popup': '../../miniprogram_npm/@vant/weapp/popup/index'
    },
    navigationBarTitleText: '设置支付密码'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['sysSetting/setPayPwd/setPayPwd.wxml'] = [$gwx4, './sysSetting/setPayPwd/setPayPwd.wxml'];
else __wxAppCode__['sysSetting/setPayPwd/setPayPwd.wxml'] = $gwx4('./sysSetting/setPayPwd/setPayPwd.wxml');
__wxAppCode__['sysSetting/setPayPwdAgain/setPayPwdAgain.json'] = {
    usingComponents: {
        'van-popup': '../../miniprogram_npm/@vant/weapp/popup/index'
    },
    navigationBarTitleText: '设置支付密码'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['sysSetting/setPayPwdAgain/setPayPwdAgain.wxml'] = [$gwx4, './sysSetting/setPayPwdAgain/setPayPwdAgain.wxml'];
else __wxAppCode__['sysSetting/setPayPwdAgain/setPayPwdAgain.wxml'] = $gwx4('./sysSetting/setPayPwdAgain/setPayPwdAgain.wxml');
__wxAppCode__['sysSetting/somethingNeedDo/somethingNeedDo.json'] = {
    usingComponents: {
        'van-icon': '../../miniprogram_npm/@vant/weapp/icon/index'
    }
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['sysSetting/somethingNeedDo/somethingNeedDo.wxml'] = [$gwx4, './sysSetting/somethingNeedDo/somethingNeedDo.wxml'];
else __wxAppCode__['sysSetting/somethingNeedDo/somethingNeedDo.wxml'] = $gwx4('./sysSetting/somethingNeedDo/somethingNeedDo.wxml');
__wxAppCode__['sysSetting/specialPricing/specialPricing.json'] = {
    usingComponents: {
        'van-switch': '../../miniprogram_npm/@vant/weapp/switch/index'
    },
    navigationBarTitleText: '特殊计费'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['sysSetting/specialPricing/specialPricing.wxml'] = [$gwx4, './sysSetting/specialPricing/specialPricing.wxml'];
else __wxAppCode__['sysSetting/specialPricing/specialPricing.wxml'] = $gwx4('./sysSetting/specialPricing/specialPricing.wxml');
__wxAppCode__['sysSetting/toUnbind/toUnbind.json'] = {
    usingComponents: {
        'van-icon': '../../miniprogram_npm/@vant/weapp/icon/index'
    }
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['sysSetting/toUnbind/toUnbind.wxml'] = [$gwx4, './sysSetting/toUnbind/toUnbind.wxml'];
else __wxAppCode__['sysSetting/toUnbind/toUnbind.wxml'] = $gwx4('./sysSetting/toUnbind/toUnbind.wxml');
__wxAppCode__['sysSetting/userAgreement/userAgreement.json'] = {
    usingComponents: {
        'van-icon': '../../miniprogram_npm/@vant/weapp/icon/index'
    },
    navigationBarTitleText: '政策协议'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['sysSetting/userAgreement/userAgreement.wxml'] = [$gwx4, './sysSetting/userAgreement/userAgreement.wxml'];
else __wxAppCode__['sysSetting/userAgreement/userAgreement.wxml'] = $gwx4('./sysSetting/userAgreement/userAgreement.wxml');
__wxRoute = 'sysSetting/index/index';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'sysSetting/index/index.js';
define(
    'sysSetting/index/index.js',
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

        var n = require('../../api/api').API,
            o = require('../../api/center').centerAPI;
        export default {
            data() {
                return {
                    custInfo: [],
                    islogin: !1,
                    loginPwd: '',
                    pwdVal: '',
                    firstPwdVal: '',
                    miniVersion: '',
                    polictyAgreementUrl: '',
                    isLoginStatus: '',
                    serviceAgreementUrl: '',
                    cardNo: '',
                    oldPwd: '',
                    newPwd: '',
                    newPwdAgain: '',
                    picBase64Str: '',
                    securityCode: '',
                    codeText: '',
                    show: '',
                    phone: '',
                    code: '',
                    accountTypeList: '',
                    checked: '',
                    customeHotline: '',
                    wxOfficialAccount: '',
                    showFollowDialog: '',
                    merManageSwitch: '',
                    nightSercviceSwitch: '',
                    accontArr: '',
                    seucrCode: '',
                    selectIndex: '',
                    selectUsername: '',
                    selectAccountName: '',
                    selectAccountNo: '',
                    curCustomerNo: ''
                };
            },
            onLoad: function (n) {
                console.log('options =', n),
                    this.setData({
                        islogin: JSON.parse(n.isLoginStatus)
                    });
            },
            onShow: function () {
                console.log('onShow'), 1 == this.islogin && this.custIncrInfoQuery();
            },
            methods: {}
        };
    }
);
require('./sysSetting/index/index.js');
__wxRoute = 'sysSetting/increaseLimit/increaseLimit';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'sysSetting/increaseLimit/increaseLimit.js';
define(
    'sysSetting/increaseLimit/increaseLimit.js',
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

        var t = require('../../api/center').centerAPI,
            e = require('../../api/api').API;
        export default {
            data() {
                return {
                    custInfo: {},
                    cardNo: ''
                };
            },
            onLoad: function (t) {},
            onReady: function () {},
            onShow: function () {
                this.custIncrInfoQuery();
            },
            onHide: function () {},
            onUnload: function () {},
            onPullDownRefresh: function () {},
            onReachBottom: function () {},
            methods: {}
        };
    }
);
require('./sysSetting/increaseLimit/increaseLimit.js');
__wxRoute = 'sysSetting/changeLoginPwd/changeLoginPwd';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'sysSetting/changeLoginPwd/changeLoginPwd.js';
define(
    'sysSetting/changeLoginPwd/changeLoginPwd.js',
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

        var n = require('../../api/api').API,
            t = require('../../utils/md5');
        export default {
            data() {
                return {
                    oldPwd: '',
                    newPwd: '',
                    newPwdAgain: ''
                };
            },
            onLoad: function (n) {},
            onReady: function () {},
            onShow: function () {},
            onHide: function () {},
            onUnload: function () {},
            onPullDownRefresh: function () {},
            onReachBottom: function () {},
            methods: {}
        };
    }
);
require('./sysSetting/changeLoginPwd/changeLoginPwd.js');
__wxRoute = 'sysSetting/checkLoginPwd/checkLoginPwd';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'sysSetting/checkLoginPwd/checkLoginPwd.js';
define(
    'sysSetting/checkLoginPwd/checkLoginPwd.js',
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

        var n = require('../../api/api').API,
            o = require('../../utils/md5');
        export default {
            data() {
                return {
                    loginPwd: ''
                };
            },
            onLoad: function (n) {},
            onReady: function () {},
            onShow: function () {},
            onHide: function () {},
            onUnload: function () {},
            onPullDownRefresh: function () {},
            onReachBottom: function () {},
            methods: {}
        };
    }
);
require('./sysSetting/checkLoginPwd/checkLoginPwd.js');
__wxRoute = 'sysSetting/setPayPwd/setPayPwd';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'sysSetting/setPayPwd/setPayPwd.js';
define(
    'sysSetting/setPayPwd/setPayPwd.js',
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

        export default {
            data() {
                return {
                    showPop: !0,
                    showConfirm: !1,
                    pwdVal: '',
                    loginPwd: ''
                };
            },
            onLoad: function (t) {
                getApp().globalData.setWatcher(this),
                    console.log(t),
                    this.setData({
                        loginPwd: t.loginPwd
                    });
            },
            onReady: function () {},
            onShow: function () {
                this.setData({
                    pwdVal: ''
                });
            },
            onHide: function () {},
            onUnload: function () {},
            onPullDownRefresh: function () {},
            onReachBottom: function () {},
            methods: {}
        };
    }
);
require('./sysSetting/setPayPwd/setPayPwd.js');
__wxRoute = 'sysSetting/setPayPwdAgain/setPayPwdAgain';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'sysSetting/setPayPwdAgain/setPayPwdAgain.js';
define(
    'sysSetting/setPayPwdAgain/setPayPwdAgain.js',
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

        var t = require('../../api/api').API,
            a = require('../../utils/md5');
        export default {
            data() {
                return {
                    showPop: !0,
                    showConfirm: !1,
                    pwdVal: '',
                    loginPwd: ''
                };
            },
            onLoad: function (t) {
                console.log(t),
                    this.setData({
                        firstPwdVal: t.pwdval,
                        loginPwd: t.loginPwd
                    }),
                    getApp().globalData.setWatcher(this);
            },
            onReady: function () {},
            onShow: function () {
                this.setData({
                    pwdVal: ''
                });
            },
            onHide: function () {},
            onUnload: function () {},
            onPullDownRefresh: function () {},
            onReachBottom: function () {},
            methods: {}
        };
    }
);
require('./sysSetting/setPayPwdAgain/setPayPwdAgain.js');
__wxRoute = 'sysSetting/changetTelephone/changetTelephone';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'sysSetting/changetTelephone/changetTelephone.js';
define(
    'sysSetting/changetTelephone/changetTelephone.js',
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

        var e = require('../../api/center').centerAPI,
            t = uni.getAccountInfoSync().miniProgram.envVersion;
        export default {
            data() {
                return {
                    phone: '',
                    code: '',
                    securityCode: '',
                    codeText: '发送验证码',
                    show: !1,
                    picBase64Str: ''
                };
            },
            onLoad: function (e) {},
            onReady: function () {},
            onShow: function () {},
            onHide: function () {},
            onUnload: function () {},
            onPullDownRefresh: function () {},
            onReachBottom: function () {},
            methods: {}
        };
    }
);
require('./sysSetting/changetTelephone/changetTelephone.js');
__wxRoute = 'sysSetting/changeAccountType/changeAccountType';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'sysSetting/changeAccountType/changeAccountType.js';
define(
    'sysSetting/changeAccountType/changeAccountType.js',
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

        export default {
            data() {
                return {
                    accountTypeList: [
                        {
                            name: '自动到账',
                            status: !0
                        },
                        {
                            name: '合并到账',
                            status: !1
                        }
                    ]
                };
            },
            onLoad: function (n) {},
            onReady: function () {},
            onShow: function () {},
            onHide: function () {},
            onUnload: function () {},
            onPullDownRefresh: function () {},
            onReachBottom: function () {},
            methods: {}
        };
    }
);
require('./sysSetting/changeAccountType/changeAccountType.js');
__wxRoute = 'sysSetting/logout/logout';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'sysSetting/logout/logout.js';
define(
    'sysSetting/logout/logout.js',
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

        export default {
            data() {
                return {
                    checked: !0
                };
            },
            onLoad: function (n) {},
            onReady: function () {},
            onShow: function () {},
            onHide: function () {},
            onUnload: function () {},
            onPullDownRefresh: function () {},
            onReachBottom: function () {},
            methods: {}
        };
    }
);
require('./sysSetting/logout/logout.js');
__wxRoute = 'sysSetting/somethingNeedDo/somethingNeedDo';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'sysSetting/somethingNeedDo/somethingNeedDo.js';
define(
    'sysSetting/somethingNeedDo/somethingNeedDo.js',
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

        export default {
            data() {
                return {};
            },
            onLoad: function (n) {},
            onReady: function () {},
            onShow: function () {},
            onHide: function () {},
            onUnload: function () {},
            onPullDownRefresh: function () {},
            onReachBottom: function () {},
            methods: {}
        };
    }
);
require('./sysSetting/somethingNeedDo/somethingNeedDo.js');
__wxRoute = 'sysSetting/toUnbind/toUnbind';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'sysSetting/toUnbind/toUnbind.js';
define(
    'sysSetting/toUnbind/toUnbind.js',
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

        Page({
            data() {
                return {};
            },
            onLoad: function (n) {},
            onReady: function () {},
            onShow: function () {},
            onHide: function () {},
            onUnload: function () {},
            onPullDownRefresh: function () {},
            onReachBottom: function () {},
            methods: {}
        });
    }
);
require('./sysSetting/toUnbind/toUnbind.js');
__wxRoute = 'sysSetting/confirmCancle/confirmCancle';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'sysSetting/confirmCancle/confirmCancle.js';
define(
    'sysSetting/confirmCancle/confirmCancle.js',
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

        Page({
            data() {
                return {};
            },
            onLoad: function (n) {},
            onReady: function () {},
            onShow: function () {},
            onHide: function () {},
            onUnload: function () {},
            onPullDownRefresh: function () {},
            onReachBottom: function () {},
            methods: {}
        });
    }
);
require('./sysSetting/confirmCancle/confirmCancle.js');
__wxRoute = 'sysSetting/aboutus/aboutus';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'sysSetting/aboutus/aboutus.js';
define(
    'sysSetting/aboutus/aboutus.js',
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

        var o = require('../../api/center').centerAPI;
        export default {
            data() {
                return {
                    customeHotline: '',
                    wxOfficialAccount: '',
                    miniVersion: '',
                    showFollowDialog: !1
                };
            },
            onLoad: function (o) {},
            onReady: function () {
                this.setData({
                    miniVersion: this.getWxVersion()
                });
            },
            onShow: function () {
                this.getData();
            },
            onHide: function () {},
            onUnload: function () {},
            onPullDownRefresh: function () {},
            onReachBottom: function () {},
            methods: {}
        };
    }
);
require('./sysSetting/aboutus/aboutus.js');
__wxRoute = 'sysSetting/userAgreement/userAgreement';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'sysSetting/userAgreement/userAgreement.js';
define(
    'sysSetting/userAgreement/userAgreement.js',
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

        var e = require('../../api/request').WEB_BASE_URL,
            t = require('../../api/center').centerAPI;
        export default {
            data() {
                return {
                    serviceAgreementUrl: '',
                    polictyAgreementUrl: '',
                    isLoginStatus: !1
                };
            },
            onLoad: function (e) {},
            onReady: function () {
                this.setData({
                    polictyAgreementUrl: ''.concat(e, 'Policy')
                });
            },
            onShow: function () {
                var n = this;
                t.custIncrInfoQuery().then(function (t) {
                    n.setData({
                        isLoginStatus: t.isLoginStatus
                    }),
                        t.isLoginStatus
                            ? uni.getBackgroundFetchToken({
                                  complete: function (t) {
                                      n.setData({
                                          serviceAgreementUrl: ''.concat(e, 'AgreementSwitch?token=').concat(t.token, '&source=WLP')
                                      });
                                  }
                              })
                            : n.setData({
                                  serviceAgreementUrl: ''.concat(e, 'Agreement?source=WLP')
                              });
                });
            },
            onHide: function () {},
            onUnload: function () {},
            onPullDownRefresh: function () {},
            onReachBottom: function () {},
            methods: {}
        };
    }
);
require('./sysSetting/userAgreement/userAgreement.js');
__wxRoute = 'sysSetting/specialPricing/specialPricing';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'sysSetting/specialPricing/specialPricing.js';
define(
    'sysSetting/specialPricing/specialPricing.js',
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

        export default {
            data() {
                return {
                    confirmShowStatus: !1,
                    merManageSwitch: !1,
                    nightSercviceSwitch: !1
                };
            },
            onLoad: function (n) {},
            onReady: function () {},
            onShow: function () {},
            onHide: function () {},
            onUnload: function () {},
            onPullDownRefresh: function () {},
            onReachBottom: function () {},
            methods: {}
        };
    }
);
require('./sysSetting/specialPricing/specialPricing.js');
__wxRoute = 'sysSetting/changeAccount/changeAccount';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'sysSetting/changeAccount/changeAccount.js';
define(
    'sysSetting/changeAccount/changeAccount.js',
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
                    selectIndex: -1,
                    selectUsername: '',
                    selectAccountNo: '',
                    selectAccountName: '',
                    seucrCode: '',
                    accontArr: [],
                    curCustomerNo: '',

                    watch: {
                        pwdVal: function (t) {
                            console.log(t);
                        }
                    },

                    watch: {
                        pwdVal: function (t) {
                            console.log(t);
                        }
                    }
                };
            },
            onLoad: function (e) {
                var o = this;
                this.queryCustAllInfo(),
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
            methods: {
                unbindWechat: function () {
                    0 != this.islogin
                        ? uni.showModal({
                              title: '确定解除微信绑定?',
                              content: '确定解除微信绑定后,将跳转收款呗登录页面',
                              cancelColor: '#EF4034',
                              confirmColor: '#45464E',
                              confirmText: '取消',
                              cancelText: '解除绑定',
                              success: function (o) {
                                  o.confirm
                                      ? console.log('用户点击确定')
                                      : o.cancel &&
                                        n.unbindWx().then(function (n) {
                                            console.log(n),
                                                200 === n.code
                                                    ? uni.reLaunch({
                                                          url: '/pages/myself/myself'
                                                      })
                                                    : uni.showToast({
                                                          title: n.message,
                                                          icon: 'none'
                                                      });
                                        });
                              }
                          })
                        : uni.navigateTo({
                              url: '/login/index/index'
                          });
                },

                aboutUs: function () {
                    uni.navigateTo({
                        url: '/sysSetting/aboutus/aboutus'
                    });
                },

                custIncrInfoQuery: function () {
                    var n = this;
                    o.custIncrInfoQuery().then(function (o) {
                        console.log(o),
                            200 == o.code
                                ? n.setData({
                                      custInfo: o.object
                                  })
                                : uni.showToast({
                                      title: o.message,
                                      icon: 'none'
                                  });
                    });
                },

                judgeLogin: function () {
                    return (
                        0 != this.islogin ||
                        (uni.navigateTo({
                            url: '/login/index/index'
                        }),
                        !1)
                    );
                },

                fixPassword: function () {
                    this.judgeLogin() &&
                        uni.navigateTo({
                            url: '/sysSetting/changeLoginPwd/changeLoginPwd'
                        });
                },

                clickForgetPassword: function () {
                    this.judgeLogin() &&
                        uni.navigateTo({
                            url: '/sysSetting/checkLoginPwd/checkLoginPwd'
                        });
                },

                fixPhoneNum: function () {
                    this.judgeLogin() &&
                        uni.navigateTo({
                            url: '/sysSetting/changetTelephone/changetTelephone'
                        });
                },

                clickAccontChange: function () {
                    this.judgeLogin() &&
                        uni.navigateTo({
                            url: '/sysSetting/changeAccount/changeAccount'
                        });
                },

                logout: function () {
                    uni.showModal({
                        title: '温馨提示',
                        content: '是否确认退出',
                        cancelColor: '#999999',
                        confirmColor: '#EF4034',
                        showCancel: !0
                    }).then(function (o) {
                        o.confirm
                            ? (console.log('用户点击确定'),
                              n.logout().then(function (n) {
                                  200 == n.code &&
                                      uni.reLaunch({
                                          url: '/pages/myself/myself'
                                      });
                              }))
                            : o.cancel && console.log('用户点击取消');
                    });
                },

                custIncrInfoQuery: function () {
                    var e = this;
                    t.custIncrInfoQuery().then(function (t) {
                        console.log(t),
                            200 == t.code
                                ? e.setData({
                                      custInfo: t.object
                                  })
                                : uni.showToast({
                                      title: t.message,
                                      icon: 'none'
                                  });
                    });
                },

                inuputCardNo: function (t) {
                    console.log(t.detail.value),
                        this.setData({
                            cardNo: t.detail.value
                        });
                },

                imgDataChange: function (t) {
                    var o = this;
                    uni.chooseMedia({
                        count: 9,
                        mediaType: ['image'],
                        sourceType: ['album', 'camera'],
                        camera: 'back'
                    }).then(function (t) {
                        console.log(t);
                        var a = {
                            imgFormat: 'jpg',
                            base64pic: uni.getFileSystemManager().readFileSync(t.tempFiles[0].tempFilePath, 'base64'),
                            picImage: t.tempFiles[0].tempFilePath
                        };
                        uni.showLoading({
                            title: '请等待'
                        }),
                            uni.uploadFile({
                                url: e.POSTBaseUrl() + 'pub/img/uploadImg',
                                filePath: a.picImage,
                                name: 'pic',
                                formData: {
                                    imgType: '3',
                                    imgFormat: 'JPG'
                                },
                                header: {
                                    'content-type': 'multipart/form-data',
                                    brandType: 'WLP',
                                    appCode: 'CUST_MINI'
                                },
                                success: function (t) {
                                    console.log('提额认证，bank回调结果res =', t);
                                    var e = JSON.parse(t.data);
                                    console.log('提额认证，bank回调结果result =', e),
                                        200 == e.code
                                            ? o.setData({
                                                  cardNo: JSON.parse(t.data).object.bankCard
                                              })
                                            : uni.showToast({
                                                  title: e.message,
                                                  icon: 'none'
                                              });
                                },
                                complete: function () {}
                            });
                    });
                },

                saveCustPromoteQuota: function () {
                    t.saveCustPromoteQuota({
                        cardNo: this.cardNo,
                        customerName: this.custInfo.customerName,
                        customerNo: this.custInfo.customerNo,
                        identityNo: this.custInfo.identityNo,
                        phoneNo: this.custInfo.phoneNo
                    }).then(function (t) {
                        200 == t.code
                            ? (uni.showToast({
                                  title: '提额认证成功',
                                  icon: 'success',
                                  duration: 1e3
                              }),
                              setTimeout(function () {
                                  uni.navigateBack({
                                      delta: 1
                                  });
                              }, 1e3))
                            : uni.showToast({
                                  title: t.message,
                                  icon: 'none'
                              });
                    });
                },

                confirm: function () {
                    this.saveCustPromoteQuota();
                },

                oldPwdInput: function (n) {
                    this.setData({
                        oldPwd: n.detail.value.replace(
                            new RegExp(
                                '[\\+,\\/,\\\\,\\?,\\？,\\%,\\#,\\&,\\=,\\(,\\),\\（,\\）,\\{,\\},\\\',\\",\\<,\\>,\\@,\\!,\\！,\\$,\\.,\\，,\\、,\\:,\\：,\\;,\\；,\\￥,\\*,\\~,\\`,\\-,\\——,\\_,\\^,\\“,\\”,\\‘,\\’,\\……,\\【,\\】,\\[,\\],\\,]',
                                'gm'
                            ),
                            ''
                        )
                    });
                },

                newPwdInput: function (n) {
                    this.setData({
                        newPwd: n.detail.value.replace(
                            new RegExp(
                                '[\\+,\\/,\\\\,\\?,\\？,\\%,\\#,\\&,\\=,\\(,\\),\\（,\\）,\\{,\\},\\\',\\",\\<,\\>,\\@,\\!,\\！,\\$,\\.,\\，,\\、,\\:,\\：,\\;,\\；,\\￥,\\*,\\~,\\`,\\-,\\——,\\_,\\^,\\“,\\”,\\‘,\\’,\\……,\\【,\\】,\\[,\\],\\,]',
                                'gm'
                            ),
                            ''
                        )
                    });
                },

                newPwdAgainInput: function (n) {
                    this.setData({
                        newPwdAgain: n.detail.value.replace(
                            new RegExp(
                                '[\\+,\\/,\\\\,\\?,\\？,\\%,\\#,\\&,\\=,\\(,\\),\\（,\\）,\\{,\\},\\\',\\",\\<,\\>,\\@,\\!,\\！,\\$,\\.,\\，,\\、,\\:,\\：,\\;,\\；,\\￥,\\*,\\~,\\`,\\-,\\——,\\_,\\^,\\“,\\”,\\‘,\\’,\\……,\\【,\\】,\\[,\\],\\,]',
                                'gm'
                            ),
                            ''
                        )
                    });
                },

                modifyLoginPassword: function () {
                    if ((console.log(this.oldPwd), 0 != this.oldPwd.length)) {
                        var e = new RegExp('^(?=.*[0-9].*)(?=.*[A-Z].*)(?=.*[a-z].*)');
                        console.log(e.test(this.oldPwd)),
                            0 != e.test(this.oldPwd)
                                ? 0 != e.test(this.newPwd)
                                    ? this.newPwd != this.oldPwd
                                        ? this.newPwd === this.newPwdAgain
                                            ? n
                                                  .modifyLoginPassword({
                                                      newPassword: t.hexMD5(this.newPwd),
                                                      oldPassword: t.hexMD5(this.oldPwd)
                                                  })
                                                  .then(function (n) {
                                                      200 == n.code
                                                          ? uni.showModal({
                                                                title: '温馨提示',
                                                                content: '新密码设置成功,请您重新登录',
                                                                showCancel: !1,
                                                                success: function (n) {
                                                                    (n.confirm || n.cancel) &&
                                                                        uni.navigateTo({
                                                                            url: '/pages/myself/myself'
                                                                        });
                                                                }
                                                            })
                                                          : uni.showToast({
                                                                title: n.message,
                                                                icon: 'none'
                                                            });
                                                  })
                                            : uni.showToast({
                                                  title: '两次输入密码不一致',
                                                  icon: 'none'
                                              })
                                        : uni.showToast({
                                              title: '新密码不能与旧密码相同',
                                              icon: 'none'
                                          })
                                    : uni.showToast({
                                          title: '新密码必须包含大小写字母和数字',
                                          icon: 'none'
                                      })
                                : uni.showToast({
                                      title: '旧密码必须包含大小写字母和数字',
                                      icon: 'none'
                                  });
                    } else
                        uni.showToast({
                            title: '请输入原密码',
                            icon: 'none'
                        });
                },

                inputLoginPwd: function (n) {
                    this.setData({
                        loginPwd: n.detail.value
                    });
                },

                checkLoginPwd: function () {
                    var t = this;
                    n.checkPassword({
                        password: o.hexMD5(this.loginPwd)
                    }).then(function (n) {
                        console.log(n),
                            200 == n.code
                                ? uni.navigateTo({
                                      url: '/sysSetting/setPayPwd/setPayPwd?loginPwd='.concat(t.loginPwd)
                                  })
                                : uni.showToast({
                                      title: '请输入正确的登录密码',
                                      icon: 'none'
                                  });
                    });
                },

                inputPwd: function (t) {
                    if (!(this.pwdVal.length >= 6))
                        return (
                            this.setData({
                                pwdVal: this.pwdVal + t.currentTarget.dataset.number
                            }),
                            this.pwdVal.length >= 6
                                ? (console.log('输入的支付密码', this.pwdVal),
                                  void uni.navigateTo({
                                      url: '/sysSetting/setPayPwdAgain/setPayPwdAgain?pwdval='.concat(this.pwdVal, '&loginPwd=').concat(this.loginPwd)
                                  }))
                                : void 0
                        );
                },

                deletePwdnum: function () {
                    if ((console.log('this.data.pwdVal ', this.pwdVal), this.pwdVal.length > 1)) {
                        var t = this.pwdVal.substring(0, this.pwdVal.length - 1);
                        this.setData({
                            pwdVal: t
                        }),
                            console.log('subPwd = ', t);
                    } else
                        this.setData({
                            pwdVal: ''
                        });
                },

                inputPwd: function (o) {
                    var n = this;
                    if (!(this.pwdVal.length >= 6))
                        return (
                            this.setData({
                                pwdVal: this.pwdVal + o.currentTarget.dataset.number
                            }),
                            this.pwdVal.length >= 6
                                ? (console.log('输入的支付密码', this.pwdVal),
                                  void (this.pwdVal !== this.firstPwdVal
                                      ? (console.log('两次输入结果不一致'),
                                        uni.showModal({
                                            title: '提示',
                                            content: '两次密码不一致，请重新设置',
                                            showCancel: !1,
                                            success: function (t) {
                                                t.confirm &&
                                                    uni.redirectTo({
                                                        url: '/sysSetting/setPayPwd/setPayPwd?loginPwd='.concat(n.loginPwd)
                                                    });
                                            }
                                        }))
                                      : this.pwdVal == this.firstPwdVal &&
                                        t
                                            .settPayPwdByLoginPassword({
                                                payPw: a.hexMD5(this.pwdVal),
                                                password: a.hexMD5(this.loginPwd)
                                            })
                                            .then(function (t) {
                                                200 == t.code
                                                    ? uni
                                                          .showToast({
                                                              title: '修改支付密码成功',
                                                              icon: 'none',
                                                              duration: 3e3
                                                          })
                                                          .then(function (t) {
                                                              setTimeout(function () {
                                                                  uni.switchTab({
                                                                      url: '/pages/myself/myself'
                                                                  });
                                                              }, 3e3);
                                                          })
                                                    : uni.showToast({
                                                          title: t.message,
                                                          icon: 'none'
                                                      });
                                            })))
                                : void 0
                        );
                },

                deletePwdnum: function () {
                    if ((console.log('this.data.pwdVal ', this.pwdVal), this.pwdVal.length > 1)) {
                        var t = this.pwdVal.substring(0, this.pwdVal.length - 1);
                        this.setData({
                            pwdVal: t
                        }),
                            console.log('subPwd = ', t);
                    } else
                        this.setData({
                            pwdVal: '',
                            firstPwdVal: ''
                        });
                },

                onClose: function () {
                    this.setData({
                        picBase64Str: '',
                        securityCode: ''
                    });
                },

                securityCodeInput: function (e) {
                    this.setData({
                        securityCode: e.detail.value
                    });
                },

                timeout: function () {
                    var e = this,
                        o = null,
                        n = null;
                    'develop' === t || 'trial' === t ? (n = 30) : 'release' === t && (n = 60),
                        (o = setInterval(function () {
                            n--,
                                e.setData({
                                    codeText: n + 's'
                                }),
                                0 == n &&
                                    (e.setData({
                                        codeText: '发送验证码'
                                    }),
                                    clearInterval(o));
                        }, 1e3));
                },

                onConfirm: function () {
                    var t = this;
                    e.changePhoneSecurityCode({
                        captchaCode: this.securityCode,
                        phone: this.phone
                    }).then(function (e) {
                        200 == e.code
                            ? (uni.showToast({
                                  title: e.object,
                                  icon: 'none'
                              }),
                              t.timeout())
                            : uni.showToast({
                                  title: e.message,
                                  icon: 'none'
                              });
                    });
                },

                changePhoneSecurityCode: function () {
                    '' != this.phone
                        ? this.getSecurityCode()
                        : uni.showToast({
                              title: '请输入手机号',
                              icon: 'none'
                          });
                },

                getSecurityCode: function () {
                    var t = this;
                    e.getCaptcha({
                        username: this.phone,
                        moduleType: 3
                    }).then(function (e) {
                        console.log(e),
                            200 == e.code &&
                                (t.setData({
                                    picBase64Str: 'data:image/jpeg;base64,' + e.object.picBase64Str
                                }),
                                t.setData({
                                    show: !0
                                }));
                    });
                },

                phoneInput: function (e) {
                    this.setData({
                        phone: e.detail.value
                    });
                },

                codeInput: function (e) {
                    this.setData({
                        code: e.detail.value
                    });
                },

                toSetPhone: function () {
                    var t = new RegExp('^(1)\\d{10}$');
                    console.log(t.test(this.phone)),
                        0 != t.test(this.phone)
                            ? e
                                  .changeCustPhone({
                                      phone: this.phone,
                                      securityCode: this.code
                                  })
                                  .then(function (e) {
                                      200 == e.code
                                          ? uni.showModal({
                                                title: '提示',
                                                content: e.object,
                                                showCancel: !1,
                                                confirmColor: '#1F1B27',
                                                success: function (e) {
                                                    e.confirm
                                                        ? uni.reLaunch({
                                                              url: '/pages/myself/myself'
                                                          })
                                                        : e.cancel && console.log('用户点击取消');
                                                }
                                            })
                                          : uni.showToast({
                                                title: e.message,
                                                icon: 'none'
                                            });
                                  })
                            : uni.showToast({
                                  title: '手机号错误',
                                  icon: 'none'
                              });
                },

                changeAccount: function (n) {
                    var t = n.currentTarget.dataset.index,
                        o = this.accountTypeList;
                    o.forEach(function (n, o) {
                        n.status = o == t;
                    }),
                        this.setData({
                            accountTypeList: o
                        });
                },

                confirm: function () {
                    uni.showModal({
                        title: '温馨提示',
                        content: '注意:选择合并到账后,您的交易不会再进行自动到账打款,待您选择进行结算时,可进行一笔结算打款',
                        cancelColor: 'cancelColor',
                        confirmColor: '#EF4034'
                    });
                },

                onChange: function (n) {
                    this.setData({
                        checked: n.detail
                    });
                },

                getWxVersion: function () {
                    return uni.getAccountInfoSync().miniProgram.version;
                },

                getData: function () {
                    var n = this;
                    o.aboutUsGetInfo({}).then(function (o) {
                        console.log(o),
                            200 == o.code
                                ? n.setData({
                                      customeHotline: o.object.linePhone,
                                      wxOfficialAccount: o.object.wechatName
                                  })
                                : uni.showToast({
                                      title: o.message,
                                      icon: 'none'
                                  });
                    });
                },

                callPhone: function () {
                    uni.makePhoneCall({
                        phoneNumber: this.customeHotline
                    });
                },

                followWxAccount: function () {
                    this.setData({
                        showFollowDialog: !0
                    });
                },

                onClose: function () {
                    this.setData({
                        showFollowDialog: !1
                    });
                },

                onConfirm: function () {},

                queryVersionInfo: function () {
                    var o = this;
                    $apiAboutUs.queryAboutUs().then(function (n) {
                        200 == n.code &&
                            (o.setData({
                                customeHotline: n.object.linePhone,
                                wxOfficialAccount: n.object.wechatName
                            }),
                            (app.globalData.hotlinePhone = n.object.linePhone));
                    });
                },

                eventItem: function (e) {
                    console.log(e);
                    var t = e.currentTarget.dataset.pathurl;
                    uni.navigateTo({
                        url: '/toolsBox/webview/webview?url='.concat(encodeURIComponent(t))
                    });
                },

                onChangeMer: function (n) {
                    var t = this,
                        c = n.detail;
                    c
                        ? this.setData({
                              merManageSwitch: c
                          })
                        : uni.showModal({
                              title: '温馨提示',
                              content: '关闭开关将影响您的交易到账时间，请您谨慎操作',
                              cancelText: '确认关闭',
                              cancelColor: '#45464E',
                              confirmText: '我在想想',
                              confirmColor: '#EF4034',
                              success: function (n) {
                                  n.cancel &&
                                      t.setData({
                                          merManageSwitch: c
                                      });
                              }
                          });
                },

                onChangeNight: function (n) {
                    var t = this,
                        c = n.detail;
                    c
                        ? this.setData({
                              nightSercviceSwitch: c
                          })
                        : uni.showModal({
                              title: '温馨提示',
                              content: '关闭开关将影响您的交易到账时间，请您谨慎操作',
                              cancelText: '确认关闭',
                              cancelColor: '#45464E',
                              confirmText: '我在想想',
                              confirmColor: '#EF4034',
                              success: function (n) {
                                  n.cancel &&
                                      t.setData({
                                          nightSercviceSwitch: c
                                      });
                              }
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
                    console.log('e = =====', e);
                    var o = e.currentTarget.dataset.item;
                    this.curCustomerNo != o.customerNo &&
                        ('TRUE' == o.status
                            ? this.setData({
                                  selectIndex: e.currentTarget.dataset.index,
                                  selectUsername: o.username,
                                  selectAccountName: o.customerName,
                                  selectAccountNo: o.customerNo
                              })
                            : uni.showToast({
                                  title: '账号非正常状态，不能切换登录',
                                  icon: 'none'
                              }));
                },

                eventChangeAccount: function () {
                    if (-1 != this.selectIndex) {
                        if (this.selectUsername) {
                            var e = this;
                            uni.showModal({
                                title: '温馨提示',
                                content: '确认切换为：'.concat(e.selectAccountName || '', '(').concat(e.selectAccountNo, ')？'),
                                cancelText: '取消',
                                showCancel: !0,
                                cancelColor: '#45464E',
                                confirmText: '确认切换',
                                confirmColor: '#EF4034',
                                success: function (o) {
                                    o.confirm && e.singleAccontLogin();
                                }
                            });
                        } else
                            uni.showToast({
                                title: '当前选择账号不存在，请选择其它账号',
                                icon: 'none'
                            });
                    } else
                        uni.showToast({
                            title: '请选择账号',
                            icon: 'none'
                        });
                },

                singleAccontLogin: function () {
                    e.queryCodeLogin({
                        loginSecurityCode: this.seucrCode,
                        username: this.selectUsername,
                        noPswSource: 'USERNAME'
                    }).then(function (e) {
                        if ((console.log('code登录res = ', e), 200 == e.code)) {
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
                            uni.showToast({
                                title: e.message,
                                icon: 'none'
                            });
                    });
                },

                eventLoginOtherAccount: function () {
                    uni.showModal({
                        title: '温馨提示',
                        content: '是否确认退出',
                        cancelColor: '#45464E',
                        confirmColor: '#EF4034',
                        showCancel: !0
                    }).then(function (o) {
                        o.confirm &&
                            e.logout().then(function (e) {
                                console.log('退出登录结果=>' + e),
                                    uni.reLaunch({
                                        url: '/pages/myself/myself'
                                    });
                            });
                    });
                },

                queryCustAllInfo: function () {
                    var o = this;
                    e.queryCustAllInfo().then(function (e) {
                        console.log('res = ', e),
                            200 == e.code &&
                                (console.log('商户信息=>' + e),
                                (getApp().globalData.custInfo = e.object),
                                o.setData({
                                    curCustomerNo: e.object.customerNo
                                }));
                    });
                }
            }
        };
    }
);
require('./sysSetting/changeAccount/changeAccount.js');
