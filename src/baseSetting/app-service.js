/*v0.5vv_20200413_syb_scopedata*/ global.__wcc_version__ = 'v0.5vv_20200413_syb_scopedata';
global.__wcc_version_info__ = {
    customComponents: true,
    fixZeroRpx: true,
    propValueDeepCopy: false
};
var $gwxc;
var $gaic = {};
$gwx7 = function (path, global) {
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
        console.warn('WXMLRT_$gwx7:' + m);
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
    var z = __WXML_GLOBAL__.ops_set.$gwx7 || [];
    function gz$gwx7_1() {
        if (__WXML_GLOBAL__.ops_cached.$gwx7_1) return __WXML_GLOBAL__.ops_cached.$gwx7_1;
        __WXML_GLOBAL__.ops_cached.$gwx7_1 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'container']);
            Z([
                [2, '||'],
                [[7], [3, 'expandsName']],
                [[7], [3, 'expandPhone']]
            ]);
            Z([3, 'expands_info']);
            Z([3, '姓名']);
            Z([[7], [3, 'expandsName']]);
            Z([1, false]);
            Z([3, '联系电话']);
            Z([[7], [3, 'expandDesensitizationPhone']]);
            Z([3, 'callPhone']);
            Z([3, 'confirm_button']);
            Z([[7], [3, 'expandPhone']]);
            Z([3, 'margin-top: 60rpx;align-self: center;']);
            Z([3, 'info']);
        })(__WXML_GLOBAL__.ops_cached.$gwx7_1);
        return __WXML_GLOBAL__.ops_cached.$gwx7_1;
    }
    function gz$gwx7_2() {
        if (__WXML_GLOBAL__.ops_cached.$gwx7_2) return __WXML_GLOBAL__.ops_cached.$gwx7_2;
        __WXML_GLOBAL__.ops_cached.$gwx7_2 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'container']);
            Z([3, 'eventOptions']);
            Z([3, 'cell_box']);
            Z([3, '请选择问题类型']);
            Z([3, 'sel_ques_title']);
            Z([[7], [3, 'selQuesTypeDesc']]);
            Z([3, 'sel_ques_desc']);
            Z([1, false]);
            Z([3, '30']);
            Z([[7], [3, 'contactWay']]);
            Z([3, '手机号/邮箱/QQ（选填，方便我们联系您）']);
            Z([3, 'placeholder_style']);
            Z([3, 'textarea']);
            Z([3, 'eventCommit']);
            Z([3, 'confirm_button']);
            Z([3, 'info']);
            Z([[7], [3, 'quesOptions']]);
            Z([3, 'closePop']);
            Z([3, 'onSelect']);
            Z([[7], [3, 'showOptionsPop']]);
        })(__WXML_GLOBAL__.ops_cached.$gwx7_2);
        return __WXML_GLOBAL__.ops_cached.$gwx7_2;
    }
    function gz$gwx7_3() {
        if (__WXML_GLOBAL__.ops_cached.$gwx7_3) return __WXML_GLOBAL__.ops_cached.$gwx7_3;
        __WXML_GLOBAL__.ops_cached.$gwx7_3 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'onTabChange']);
            Z([3, '#EF4034']);
            Z([3, '8rpx']);
            Z([3, '40rpx']);
            Z([3, '#1F1B27']);
            Z([3, '#9292A0']);
            Z([3, 'processing']);
            Z([a, [3, '处理中('], [[7], [3, 'processCount']], [3, ')']]);
            Z([3, 'completed']);
            Z([a, [3, '已完成('], [[7], [3, 'completeCount']], z[7][3]]);
        })(__WXML_GLOBAL__.ops_cached.$gwx7_3);
        return __WXML_GLOBAL__.ops_cached.$gwx7_3;
    }
    function gz$gwx7_4() {
        if (__WXML_GLOBAL__.ops_cached.$gwx7_4) return __WXML_GLOBAL__.ops_cached.$gwx7_4;
        __WXML_GLOBAL__.ops_cached.$gwx7_4 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'container']);
            Z([3, 'customSearchBox']);
            Z([3, 'search']);
            Z([3, 'color: #C1C1C1;font-size: 40rpx;margin-left: 24rpx;']);
            Z([
                [2, '>'],
                [[6], [[7], [3, 'searchTitle']], [3, 'length']],
                [1, 0]
            ]);
            Z([3, 'clearContent']);
            Z([3, 'cross']);
            Z([3, 'margin-right: 0rpx; width: 80rpx; font-size: 30rpx;']);
            Z([
                [2, '>'],
                [[6], [[7], [3, 'quesData']], [3, 'length']],
                [1, 0]
            ]);
            Z([[7], [3, 'quesData']]);
            Z([3, 'index']);
            Z([3, 'onChange']);
            Z([3, 'collapse']);
            Z([[7], [3, 'activeNames']]);
            Z([[7], [3, 'index']]);
            Z([[6], [[7], [3, 'item']], [3, 'title']]);
        })(__WXML_GLOBAL__.ops_cached.$gwx7_4);
        return __WXML_GLOBAL__.ops_cached.$gwx7_4;
    }
    __WXML_GLOBAL__.ops_set.$gwx7 = z;
    __WXML_GLOBAL__.ops_init.$gwx7 = true;
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
    var x = ['./baseSetting/expands/expands.wxml', './baseSetting/feedback/feedback.wxml', './baseSetting/myFeedback/myFeedback.wxml', './baseSetting/newQues/newQues.wxml'];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
        var z = gz$gwx7_1();
        var oB = _n('view');
        _rz(z, oB, 'class', 0, e, s, gg);
        var xC = _v();
        _(oB, xC);
        if (_oz(z, 1, e, s, gg)) {
            xC.wxVkey = 1;
            var oD = _n('view');
            _rz(z, oD, 'class', 2, e, s, gg);
            var fE = _mz(z, 'van-cell', ['title', 3, 'value', 1], [], e, s, gg);
            _(oD, fE);
            var cF = _mz(z, 'van-cell', ['border', 5, 'title', 1, 'value', 2], [], e, s, gg);
            _(oD, cF);
            _(xC, oD);
            var hG = _mz(z, 'van-button', ['round', -1, 'bindtap', 8, 'customClass', 1, 'data-phonenum', 2, 'style', 3, 'type', 4], [], e, s, gg);
            _(xC, hG);
        } else {
            xC.wxVkey = 2;
        }
        xC.wxXCkey = 1;
        xC.wxXCkey = 3;
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
        var z = gz$gwx7_2();
        var cI = _n('view');
        _rz(z, cI, 'class', 0, e, s, gg);
        var oJ = _mz(z, 'van-cell', ['isLink', -1, 'bind:click', 1, 'customClass', 1, 'title', 2, 'titleClass', 3, 'value', 4, 'valueClass', 5], [], e, s, gg);
        _(cI, oJ);
        var lK = _mz(z, 'van-field', ['border', 7, 'maxlength', 1, 'value', 2, 'placeholder', 3, 'placeholderStyle', 4, 'type', 5], [], e, s, gg);
        lK.rawAttr = {
            'model:value': '{{ contactWay }}'
        };
        _(cI, lK);
        var aL = _mz(z, 'van-button', ['round', -1, 'bind:click', 13, 'customClass', 1, 'type', 2], [], e, s, gg);
        _(cI, aL);
        var tM = _mz(z, 'van-action-sheet', ['actions', 16, 'bind:click-overlay', 1, 'bind:select', 2, 'show', 3], [], e, s, gg);
        _(cI, tM);
        _(r, cI);
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
        var z = gz$gwx7_3();
        var bO = _mz(
            z,
            'van-tabs',
            ['sticky', -1, 'swipeable', -1, 'bind:change', 0, 'color', 1, 'lineHeight', 1, 'lineWidth', 2, 'titleActiveColor', 3, 'titleInactiveColor', 4],
            [],
            e,
            s,
            gg
        );
        var oP = _mz(z, 'van-tab', ['name', 6, 'title', 1], [], e, s, gg);
        _(bO, oP);
        var xQ = _mz(z, 'van-tab', ['name', 8, 'title', 1], [], e, s, gg);
        _(bO, xQ);
        _(r, bO);
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
        var z = gz$gwx7_4();
        var fS = _n('view');
        _rz(z, fS, 'class', 0, e, s, gg);
        var hU = _n('view');
        _rz(z, hU, 'class', 1, e, s, gg);
        var cW = _mz(z, 'van-icon', ['name', 2, 'style', 1], [], e, s, gg);
        _(hU, cW);
        var oV = _v();
        _(hU, oV);
        if (_oz(z, 4, e, s, gg)) {
            oV.wxVkey = 1;
            var oX = _mz(z, 'van-icon', ['bindtap', 5, 'name', 1, 'style', 2], [], e, s, gg);
            _(oV, oX);
        }
        oV.wxXCkey = 1;
        oV.wxXCkey = 3;
        _(fS, hU);
        var cT = _v();
        _(fS, cT);
        if (_oz(z, 8, e, s, gg)) {
            cT.wxVkey = 1;
            var lY = _v();
            _(cT, lY);
            var aZ = function (e2, t1, b3, gg) {
                var x5 = _mz(z, 'van-collapse', ['accordion', -1, 'bind:change', 11, 'customClass', 1, 'value', 2], [], e2, t1, gg);
                var o6 = _mz(z, 'van-collapse-item', ['name', 14, 'title', 1], [], e2, t1, gg);
                _(x5, o6);
                _(b3, x5);
                return b3;
            };
            lY.wxXCkey = 4;
            _2z(z, 9, aZ, e, s, gg, lY, 'item', 'index', 'index');
        }
        cT.wxXCkey = 1;
        cT.wxXCkey = 3;
        _(r, fS);
        return r;
    };
    e_[x[3]] = {
        f: m3,
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
__wxAppCode__['baseSetting/expands/expands.json'] = {
    usingComponents: {
        'van-cell': '../../miniprogram_npm/@vant/weapp/cell/index',
        'van-button': '../../miniprogram_npm/@vant/weapp/button/index'
    },
    navigationBarTitleText: '拓展人信息'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['baseSetting/expands/expands.wxml'] = [$gwx7, './baseSetting/expands/expands.wxml'];
else __wxAppCode__['baseSetting/expands/expands.wxml'] = $gwx7('./baseSetting/expands/expands.wxml');
__wxAppCode__['baseSetting/feedback/feedback.json'] = {
    usingComponents: {
        'van-action-sheet': '../../miniprogram_npm/@vant/weapp/action-sheet/index',
        'van-field': '../../miniprogram_npm/@vant/weapp/field/index',
        'van-cell': '../../miniprogram_npm/@vant/weapp/cell/index',
        'van-button': '../../miniprogram_npm/@vant/weapp/button/index'
    },
    navigationBarTitleText: '意见反馈'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['baseSetting/feedback/feedback.wxml'] = [$gwx7, './baseSetting/feedback/feedback.wxml'];
else __wxAppCode__['baseSetting/feedback/feedback.wxml'] = $gwx7('./baseSetting/feedback/feedback.wxml');
__wxAppCode__['baseSetting/myFeedback/myFeedback.json'] = {
    usingComponents: {
        'van-tab': '../../miniprogram_npm/@vant/weapp/tab/index',
        'van-tabs': '../../miniprogram_npm/@vant/weapp/tabs/index'
    },
    navigationBarTitleText: '我的反馈',
    enablePullDownRefresh: true
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['baseSetting/myFeedback/myFeedback.wxml'] = [$gwx7, './baseSetting/myFeedback/myFeedback.wxml'];
else __wxAppCode__['baseSetting/myFeedback/myFeedback.wxml'] = $gwx7('./baseSetting/myFeedback/myFeedback.wxml');
__wxAppCode__['baseSetting/newQues/newQues.json'] = {
    usingComponents: {
        'van-collapse': '../../miniprogram_npm/@vant/weapp/collapse/index',
        'van-collapse-item': '../../miniprogram_npm/@vant/weapp/collapse-item/index',
        'van-icon': '../../miniprogram_npm/@vant/weapp/icon/index',
        'van-search': '../../miniprogram_npm/@vant/weapp/search/index'
    },
    navigationBarTitleText: '常见问题',
    enablePullDownRefresh: true
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['baseSetting/newQues/newQues.wxml'] = [$gwx7, './baseSetting/newQues/newQues.wxml'];
else __wxAppCode__['baseSetting/newQues/newQues.wxml'] = $gwx7('./baseSetting/newQues/newQues.wxml');
__wxRoute = 'baseSetting/expands/expands';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'baseSetting/expands/expands.js';
define(
    'baseSetting/expands/expands.js',
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

        var n = require('../../api/api').API;
        export default {
            data() {
                return {
                    expandsName: '',
                    expandPhone: '',
                    expandDesensitizationPhone: '',
                    currentPage: 0,
                    quesData: [],
                    isLoginStatus: '',
                    proCurrentPage: 0,
                    compCurrentPage: 0,
                    processingList: [],
                    completedList: [],
                    searchTitle: '',
                    activeNames: '',
                    showOptionsPop: '',
                    selQuesTypeDesc: '',
                    selQuesType: '',
                    quesOptions: '',
                    inputContent: '',
                    curTabName: '',
                    processCount: '',
                    completeCount: ''
                };
            },
            onLoad: function (n) {},
            onReady: function () {
                this.findAgentByCust();
            },
            onShow: function () {},
            onHide: function () {},
            onUnload: function () {},
            onPullDownRefresh: function () {},
            onReachBottom: function () {},
            methods: {}
        };
    }
);
require('./baseSetting/expands/expands.js');
__wxRoute = 'baseSetting/newQues/newQues';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'baseSetting/newQues/newQues.js';
define(
    'baseSetting/newQues/newQues.js',
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

        var t = require('../../api/api').API;
        export default {
            data() {
                return {
                    activeNames: [],
                    searchTitle: '',
                    triggered: !0,
                    currentPage: 1,
                    pageSize: 20,
                    quesData: []
                };
            },
            onLoad: function (t) {},
            onReady: function () {},
            onShow: function () {
                uni.startPullDownRefresh();
            },
            onHide: function () {},
            onUnload: function () {},
            onPullDownRefresh: function () {
                uni.showNavigationBarLoading(),
                    this.setData({
                        currentPage: 1,
                        quesData: []
                    }),
                    this.queryNetCustQuestion();
            },
            onReachBottom: function () {
                var t = this;
                t.currentPage * t.pageSize > t.quesData.length
                    ? console.info('无更多数据')
                    : (this.setData({
                          currentPage: t.currentPage + 1
                      }),
                      this.queryNetCustQuestion());
            },
            methods: {}
        };
    }
);
require('./baseSetting/newQues/newQues.js');
__wxRoute = 'baseSetting/feedback/feedback';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'baseSetting/feedback/feedback.js';
define(
    'baseSetting/feedback/feedback.js',
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

        var t = require('../../api/api').API;
        export default {
            data() {
                return {
                    inputContent: '',
                    contactWay: '',
                    selQuesType: '',
                    selQuesTypeDesc: '',
                    quesOptions: [],
                    showOptionsPop: !1,
                    isLoginStatus: !1
                };
            },
            onLoad: function (t) {
                console.log('options =', t),
                    this.setData({
                        isLoginStatus: JSON.parse(t.isLoginStatus)
                    });
            },
            onReady: function () {
                this.queryFeedbackOptions();
            },
            onShow: function () {},
            onHide: function () {},
            onUnload: function () {},
            onPullDownRefresh: function () {},
            onReachBottom: function () {},
            methods: {}
        };
    }
);
require('./baseSetting/feedback/feedback.js');
__wxRoute = 'baseSetting/myFeedback/myFeedback';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'baseSetting/myFeedback/myFeedback.js';
define(
    'baseSetting/myFeedback/myFeedback.js',
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
                    pageSize: 20,
                    proCurrentPage: 1,
                    processCount: 0,
                    processingList: [],
                    completeCount: 0,
                    compCurrentPage: 1,
                    completedList: [],
                    curTabName: 'processing'
                };
            },
            onLoad: function (e) {},
            onReady: function () {
                this.setData({
                    proCurrentPage: 1,
                    compCurrentPage: 1,
                    processingList: [],
                    completedList: []
                }),
                    this.queryProcessFeedback(),
                    this.queryCompleteFeedback();
            },
            onShow: function () {},
            onHide: function () {},
            onUnload: function () {},
            onPullDownRefresh: function () {
                this.isProcessing()
                    ? (this.setData({
                          proCurrentPage: 1,
                          processingList: []
                      }),
                      this.queryProcessFeedback())
                    : (this.setData({
                          compCurrentPage: 1,
                          completedList: []
                      }),
                      this.queryCompleteFeedback());
            },
            onReachBottom: function () {
                this.isProcessing()
                    ? this.proCurrentPage * this.pageSize <= this.processingList.length &&
                      (this.setData({
                          proCurrentPage: this.proCurrentPage + 1
                      }),
                      this.queryProcessFeedback())
                    : this.compCurrentPage * this.pageSize <= this.completedList.length &&
                      (this.setData({
                          compCurrentPage: this.compCurrentPage + 1
                      }),
                      this.queryCompleteFeedback());
            },
            methods: {
                findAgentByCust: function () {
                    var e = this;
                    n.findAgentByCust().then(function (n) {
                        console.log(n);
                        var o = n.object.phoneNo;
                        e.setData({
                            expandsName: n.object.agentName || '',
                            expandPhone: o || ''
                        }),
                            o &&
                                e.setData({
                                    expandDesensitizationPhone: ''.concat(o.substring(0, 4), '****').concat(o.substring(o.length - 3))
                                });
                    });
                },

                callPhone: function (n) {
                    console.log(n);
                    var e = n.currentTarget.dataset.phonenum;
                    e
                        ? uni.makePhoneCall({
                              phoneNumber: e
                          })
                        : uni.showToast({
                              title: '手机号不存在',
                              icon: 'none'
                          });
                },

                inputChange: function (t) {
                    var e = t.detail.value;
                    console.log('inputContent = ', e),
                        this.setData({
                            searchTitle: e
                        });
                },

                clearContent: function () {
                    console.log('clear清空数据'),
                        this.setData({
                            searchTitle: ''
                        });
                },

                onChange: function (t) {
                    this.setData({
                        activeNames: t.detail
                    });
                },

                searchAction: function () {
                    uni.startPullDownRefresh();
                },

                queryNetCustQuestion: function () {
                    console.log('this.data,searchtitle = ', this.searchTitle);
                    var e = this,
                        a = {
                            pageNo: this.currentPage,
                            pageSize: this.pageSize,
                            title: this.searchTitle
                        };
                    t.queryCustQuestion(a).then(function (t) {
                        uni.hideLoading(),
                            uni.hideNavigationBarLoading(),
                            uni.stopPullDownRefresh(),
                            200 == t.code
                                ? e.setData({
                                      quesData: e.quesData.concat(t.object.list)
                                  })
                                : uni.showToast({
                                      title: t.message,
                                      icon: 'none'
                                  });
                    });
                },

                eventOptions: function () {
                    this.setData({
                        showOptionsPop: !0
                    });
                },

                onSelect: function (t) {
                    console.log(t),
                        this.setData({
                            selQuesTypeDesc: t.detail.name,
                            selQuesType: t.detail.type,
                            showOptionsPop: !1
                        });
                },

                eventCommit: function () {
                    if (0 != this.isLoginStatus) {
                        var e = this,
                            n = e.inputContent,
                            o = e.contactWay,
                            s = e.selQuesType;
                        n
                            ? s
                                ? uni.getSetting({
                                      withSubscriptions: !0,
                                      success: function (e) {
                                          console.log(e.authSetting),
                                              uni.requestSubscribeMessage({
                                                  tmplIds: ['0kIWeh42OMBite2Lk94VMRyGtGmF4W5aMLfg3i0PRN0'],
                                                  complete: function (e) {
                                                      var i = {
                                                          suggestionContent: n,
                                                          contactInfo: o,
                                                          suggestionType: s
                                                      };
                                                      t.commitFeedbackData(i).then(function (t) {
                                                          200 == t.code
                                                              ? (uni.showToast({
                                                                    title: t.message,
                                                                    icon: 'none'
                                                                }),
                                                                uni.redirectTo({
                                                                    url: '/baseSetting/myFeedback/myFeedback'
                                                                }))
                                                              : uni.showToast({
                                                                    title: t.message,
                                                                    icon: 'none'
                                                                });
                                                      });
                                                  }
                                              });
                                      }
                                  })
                                : uni.showToast({
                                      title: '请选择问题类型',
                                      icon: 'none'
                                  })
                            : uni.showToast({
                                  title: '请输入您遇到的问题',
                                  icon: 'none'
                              });
                    } else
                        uni.navigateTo({
                            url: '/login/index/index'
                        });
                },

                closePop: function () {
                    this.setData({
                        showOptionsPop: !1
                    });
                },

                skipMyFeedback: function () {
                    0 != this.isLoginStatus
                        ? uni.navigateTo({
                              url: '/baseSetting/myFeedback/myFeedback'
                          })
                        : uni.navigateTo({
                              url: '/login/index/index'
                          });
                },

                queryFeedbackOptions: function () {
                    var e = this,
                        n = [];
                    t.queryFeedbackOptions().then(function (t) {
                        200 == t.code &&
                            (t.object.forEach(function (t) {
                                n.push({
                                    name: t.desc,
                                    type: t.value
                                });
                            }),
                            e.setData({
                                quesOptions: n
                            }));
                    });
                },

                setInputContent: function (t) {
                    this.setData({
                        inputContent: t.detail.value
                    });
                },

                isProcessing: function () {
                    return 'processing' == this.curTabName;
                },

                onTabChange: function (e) {
                    var t = e.detail.name;
                    this.setData({
                        curTabName: t
                    });
                },

                queryProcessFeedback: function () {
                    var t = this,
                        a = this;
                    e.myFeedbackData({
                        pageNo: this.proCurrentPage,
                        pageSize: this.pageSize,
                        replyStatus: 'DOING'
                    }).then(function (e) {
                        uni.stopPullDownRefresh(),
                            200 == e.code
                                ? (1 == t.proCurrentPage &&
                                      a.setData({
                                          processingList: [],
                                          processCount: e.object.totalCount
                                      }),
                                  a.setData({
                                      processingList: a.processingList.concat(e.object.list)
                                  }))
                                : uni.showToast({
                                      title: e.message,
                                      icon: 'none'
                                  });
                    });
                },

                queryCompleteFeedback: function () {
                    var t = this,
                        a = this;
                    e.myFeedbackData({
                        pageNo: this.compCurrentPage,
                        pageSize: this.pageSize,
                        replyStatus: 'DOWN'
                    }).then(function (e) {
                        uni.stopPullDownRefresh(),
                            200 == e.code
                                ? (1 == t.compCurrentPage &&
                                      a.setData({
                                          completedList: [],
                                          completeCount: e.object.totalCount
                                      }),
                                  a.setData({
                                      completedList: a.completedList.concat(e.object.list)
                                  }))
                                : uni.showToast({
                                      title: e.message,
                                      icon: 'none'
                                  });
                    });
                }
            }
        };
    }
);
require('./baseSetting/myFeedback/myFeedback.js');
