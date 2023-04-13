/*v0.5vv_20200413_syb_scopedata*/ global.__wcc_version__ = 'v0.5vv_20200413_syb_scopedata';
global.__wcc_version_info__ = {
    customComponents: true,
    fixZeroRpx: true,
    propValueDeepCopy: false
};
var $gwxc;
var $gaic = {};
$gwx2 = function (path, global) {
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
        console.warn('WXMLRT_$gwx2:' + m);
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
    var z = __WXML_GLOBAL__.ops_set.$gwx2 || [];
    function gz$gwx2_1() {
        if (__WXML_GLOBAL__.ops_cached.$gwx2_1) return __WXML_GLOBAL__.ops_cached.$gwx2_1;
        __WXML_GLOBAL__.ops_cached.$gwx2_1 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'info_container']);
            Z([3, 'class_contentBox']);
            Z([3, 'onClickAreaRow']);
            Z([3, 'class_row']);
            Z([3, '所在地区']);
            Z([3, 'cell__title']);
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
            Z([3, 'onChange']);
            Z([1, false]);
            Z([3, 'right']);
            Z([3, 'class_customInput']);
            Z([3, '详细地址']);
            Z(z[5]);
            Z([[7], [3, 'address']]);
            Z([3, '请输入详细地址']);
            Z([3, 'addressDataChange']);
            Z([[7], [3, 'currentProvinceCode']]);
            Z([[7], [3, 'showArea']]);
            Z([1, true]);
            Z([3, 'clickConfirmFix']);
            Z([3, 'confirm_button']);
            Z([3, 'info']);
        })(__WXML_GLOBAL__.ops_cached.$gwx2_1);
        return __WXML_GLOBAL__.ops_cached.$gwx2_1;
    }
    function gz$gwx2_2() {
        if (__WXML_GLOBAL__.ops_cached.$gwx2_2) return __WXML_GLOBAL__.ops_cached.$gwx2_2;
        __WXML_GLOBAL__.ops_cached.$gwx2_2 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([
                [2, '=='],
                [[6], [[7], [3, 'keyList']], [3, 'length']],
                [1, 0]
            ]);
            Z([3, 'custom-image']);
            Z([3, '您还没有相关记录哦']);
            Z([3, 'https://www.krppay.com/skb_assets/bg_empty_record.png']);
            Z([3, 'widthFix']);
        })(__WXML_GLOBAL__.ops_cached.$gwx2_2);
        return __WXML_GLOBAL__.ops_cached.$gwx2_2;
    }
    function gz$gwx2_3() {
        if (__WXML_GLOBAL__.ops_cached.$gwx2_3) return __WXML_GLOBAL__.ops_cached.$gwx2_3;
        __WXML_GLOBAL__.ops_cached.$gwx2_3 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'merge_container']);
            Z([3, 'refresh']);
            Z([3, 'scrollToLower']);
            Z([3, 'true']);
            Z([[7], [3, 'loading']]);
            Z(z[3]);
            Z([a, [3, 'height: '], [[7], [3, 'scrollHeight']], [3, 'px;']]);
            Z([[7], [3, 'keyList']]);
            Z([3, 'clickRow']);
            Z([3, 'class_rowBox']);
            Z([[7], [3, 'item']]);
            Z([3, 'arrow']);
            Z([
                [2, '=='],
                [[6], [[7], [3, 'keyList']], [3, 'length']],
                [1, 0]
            ]);
            Z([3, 'custom-image']);
            Z([3, '']);
            Z([3, 'https://www.krppay.com/skb_assets/bg_nodata_empty.png']);
            Z([3, 'widthFix']);
            Z([3, 'dismissPop']);
            Z([3, 'timeDataChange']);
            Z([[7], [3, 'show']]);
            Z([1, false]);
        })(__WXML_GLOBAL__.ops_cached.$gwx2_3);
        return __WXML_GLOBAL__.ops_cached.$gwx2_3;
    }
    function gz$gwx2_4() {
        if (__WXML_GLOBAL__.ops_cached.$gwx2_4) return __WXML_GLOBAL__.ops_cached.$gwx2_4;
        __WXML_GLOBAL__.ops_cached.$gwx2_4 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'login_container']);
            Z([3, '167rpx']);
            Z([[7], [3, 'defaultImage']]);
            Z([3, 'margin-left: 30rpx;']);
            Z([3, '250rpx']);
            Z([3, 'clickConfirmGohome']);
            Z([3, 'yellow_button']);
            Z([3, 'info']);
        })(__WXML_GLOBAL__.ops_cached.$gwx2_4);
        return __WXML_GLOBAL__.ops_cached.$gwx2_4;
    }
    function gz$gwx2_5() {
        if (__WXML_GLOBAL__.ops_cached.$gwx2_5) return __WXML_GLOBAL__.ops_cached.$gwx2_5;
        __WXML_GLOBAL__.ops_cached.$gwx2_5 = [];
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
        })(__WXML_GLOBAL__.ops_cached.$gwx2_5);
        return __WXML_GLOBAL__.ops_cached.$gwx2_5;
    }
    function gz$gwx2_6() {
        if (__WXML_GLOBAL__.ops_cached.$gwx2_6) return __WXML_GLOBAL__.ops_cached.$gwx2_6;
        __WXML_GLOBAL__.ops_cached.$gwx2_6 = [];
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
        })(__WXML_GLOBAL__.ops_cached.$gwx2_6);
        return __WXML_GLOBAL__.ops_cached.$gwx2_6;
    }
    function gz$gwx2_7() {
        if (__WXML_GLOBAL__.ops_cached.$gwx2_7) return __WXML_GLOBAL__.ops_cached.$gwx2_7;
        __WXML_GLOBAL__.ops_cached.$gwx2_7 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'container']);
            Z([3, 'class_topbox']);
            Z([
                [2, '=='],
                [[7], [3, 'couponNo']],
                [1, '']
            ]);
            Z([
                [2, '!='],
                [[7], [3, 'couponNo']],
                [1, '']
            ]);
            Z([3, 'refresh']);
            Z([3, 'scrollToLower']);
            Z([3, 'true']);
            Z([[7], [3, 'loading']]);
            Z(z[6]);
            Z([a, [3, 'height: '], [[7], [3, 'scrollheight']], [3, 'px;']]);
            Z([[7], [3, 'active']]);
            Z([3, 'onTabChange']);
            Z([3, '#1F1B27']);
            Z([3, '#9292A0']);
            Z([3, 'use']);
            Z([3, '使用记录']);
            Z([3, 'font-size:30rpx']);
            Z([
                [2, '=='],
                [[6], [[7], [3, 'useList']], [3, 'length']],
                [1, 0]
            ]);
            Z([3, 'custom-image']);
            Z([3, '']);
            Z([3, 'https://www.krppay.com/skb_assets/bg_nodata_empty.png']);
            Z([3, 'widthFix']);
            Z([3, 'history']);
            Z([3, '历史优惠券']);
            Z(z[16]);
            Z([
                [2, '=='],
                [[6], [[7], [3, 'historyList']], [3, 'length']],
                [1, 0]
            ]);
            Z(z[18]);
            Z(z[19]);
            Z(z[20]);
            Z(z[21]);
            Z(z[19]);
            Z(z[19]);
        })(__WXML_GLOBAL__.ops_cached.$gwx2_7);
        return __WXML_GLOBAL__.ops_cached.$gwx2_7;
    }
    function gz$gwx2_8() {
        if (__WXML_GLOBAL__.ops_cached.$gwx2_8) return __WXML_GLOBAL__.ops_cached.$gwx2_8;
        __WXML_GLOBAL__.ops_cached.$gwx2_8 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
        })(__WXML_GLOBAL__.ops_cached.$gwx2_8);
        return __WXML_GLOBAL__.ops_cached.$gwx2_8;
    }
    function gz$gwx2_9() {
        if (__WXML_GLOBAL__.ops_cached.$gwx2_9) return __WXML_GLOBAL__.ops_cached.$gwx2_9;
        __WXML_GLOBAL__.ops_cached.$gwx2_9 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'com_letter_container']);
            Z([
                [2, '&&'],
                [
                    [2, '!'],
                    [[7], [3, 'signaturePath']]
                ],
                [
                    [2, '!'],
                    [[7], [3, 'signatureUrl']]
                ]
            ]);
            Z([3, 'eventConfirmNextStep']);
            Z([3, 'confirm_button']);
            Z([3, 'info']);
            Z([
                [2, '||'],
                [[7], [3, 'signaturePath']],
                [[7], [3, 'signatureUrl']]
            ]);
            Z([3, 'auth_container']);
            Z([
                [2, '&&'],
                [[7], [3, 'doubleRecordBol']],
                [[7], [3, 'content']]
            ]);
            Z([
                [2, '&&'],
                [[7], [3, 'doubleRecordBol']],
                [
                    [2, '||'],
                    [[7], [3, 'signaturePath']],
                    [[7], [3, 'signatureUrl']]
                ]
            ]);
            Z(z[2]);
            Z(z[3]);
            Z(z[4]);
            Z(z[8]);
        })(__WXML_GLOBAL__.ops_cached.$gwx2_9);
        return __WXML_GLOBAL__.ops_cached.$gwx2_9;
    }
    function gz$gwx2_10() {
        if (__WXML_GLOBAL__.ops_cached.$gwx2_10) return __WXML_GLOBAL__.ops_cached.$gwx2_10;
        __WXML_GLOBAL__.ops_cached.$gwx2_10 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'login_container']);
            Z([3, 'https://www.krppay.com/skb_assets/face_scan_icon.png']);
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
        })(__WXML_GLOBAL__.ops_cached.$gwx2_10);
        return __WXML_GLOBAL__.ops_cached.$gwx2_10;
    }
    function gz$gwx2_11() {
        if (__WXML_GLOBAL__.ops_cached.$gwx2_11) return __WXML_GLOBAL__.ops_cached.$gwx2_11;
        __WXML_GLOBAL__.ops_cached.$gwx2_11 = [];
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
        })(__WXML_GLOBAL__.ops_cached.$gwx2_11);
        return __WXML_GLOBAL__.ops_cached.$gwx2_11;
    }
    function gz$gwx2_12() {
        if (__WXML_GLOBAL__.ops_cached.$gwx2_12) return __WXML_GLOBAL__.ops_cached.$gwx2_12;
        __WXML_GLOBAL__.ops_cached.$gwx2_12 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'info_container']);
            Z([3, 'onClickHyYtypeRow']);
            Z([3, 'class_hyrowBox']);
            Z([3, 'clearSelect']);
            Z([
                [2, '?:'],
                [
                    [2, '=='],
                    [[7], [3, 'hyTypeNmae']],
                    [1, '若不输入则执行智能账单']
                ],
                [1, 'arrow'],
                [1, 'close']
            ]);
            Z([3, 'width: 40rpx; color: #666666; margin-left: 5rpx;']);
            Z([3, 'clickConfirmFix']);
            Z([3, 'confirm_button']);
            Z([3, 'info']);
            Z([3, 'clickPopConfirm']);
            Z([3, '#EF4034']);
            Z([3, '好的']);
            Z([[7], [3, 'showageinPop']]);
            Z([1, true]);
            Z([3, '确认修改']);
            Z([3, 'clickPopTipConfirm']);
            Z(z[10]);
            Z([3, '确认']);
            Z([[7], [3, 'showTip']]);
            Z(z[13]);
            Z([3, '温馨提示']);
        })(__WXML_GLOBAL__.ops_cached.$gwx2_12);
        return __WXML_GLOBAL__.ops_cached.$gwx2_12;
    }
    function gz$gwx2_13() {
        if (__WXML_GLOBAL__.ops_cached.$gwx2_13) return __WXML_GLOBAL__.ops_cached.$gwx2_13;
        __WXML_GLOBAL__.ops_cached.$gwx2_13 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'merge_container']);
            Z([
                [2, '=='],
                [[6], [[7], [3, 'keyList']], [3, 'length']],
                [1, 0]
            ]);
            Z([3, 'custom-image']);
            Z([3, '']);
            Z([3, 'https://www.krppay.com/skb_assets/bg_nodata_empty.png']);
            Z([3, 'widthFix']);
            Z([3, 'dismissPop']);
            Z([3, 'timeDataChange']);
            Z([[7], [3, 'show']]);
            Z([1, false]);
        })(__WXML_GLOBAL__.ops_cached.$gwx2_13);
        return __WXML_GLOBAL__.ops_cached.$gwx2_13;
    }
    function gz$gwx2_14() {
        if (__WXML_GLOBAL__.ops_cached.$gwx2_14) return __WXML_GLOBAL__.ops_cached.$gwx2_14;
        __WXML_GLOBAL__.ops_cached.$gwx2_14 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'info_container']);
            Z([[7], [3, 'bankIcon']]);
            Z([3, 'class_contentBox']);
            Z([3, 'classRow']);
            Z([3, 'large']);
            Z([3, '姓名']);
            Z([3, 'cell__title']);
            Z([[7], [3, 'userName']]);
            Z([3, 'rowValue']);
            Z(z[3]);
            Z(z[4]);
            Z([3, '身份证号']);
            Z(z[6]);
            Z([[7], [3, 'idCardnumber']]);
            Z(z[8]);
        })(__WXML_GLOBAL__.ops_cached.$gwx2_14);
        return __WXML_GLOBAL__.ops_cached.$gwx2_14;
    }
    function gz$gwx2_15() {
        if (__WXML_GLOBAL__.ops_cached.$gwx2_15) return __WXML_GLOBAL__.ops_cached.$gwx2_15;
        __WXML_GLOBAL__.ops_cached.$gwx2_15 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'info_container']);
            Z([3, 'class_topBox']);
            Z([3, 'topCellClass']);
            Z([3, 'large']);
            Z([3, '姓名']);
            Z([3, 'cell__title']);
            Z([[7], [3, 'userName']]);
            Z([3, 'class_cell_value_select']);
            Z(z[2]);
            Z(z[3]);
            Z([3, '身份证号']);
            Z(z[5]);
            Z([[7], [3, 'idCardnumber']]);
            Z(z[7]);
            Z([1, true]);
            Z([3, 'right']);
            Z([3, 'inputClass']);
            Z([3, '卡片上传']);
            Z([3, 'titleInputClass']);
            Z([[7], [3, 'bankNumber']]);
            Z([3, '请输入银行卡卡号']);
            Z([3, 'clickCamera']);
            Z([3, 'copy_custom']);
            Z([3, '/static/assets/image/login/icon_qrcode_btn.png']);
            Z([3, '30rpx']);
            Z([3, 'right-icon']);
            Z([3, 'class_contentBox']);
            Z([3, 'clickRow']);
            Z(z[2]);
            Z([3, '开户银行']);
            Z(z[3]);
            Z(z[29]);
            Z(z[5]);
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
            Z(z[27]);
            Z(z[2]);
            Z([3, '开户所在地']);
            Z(z[3]);
            Z(z[37]);
            Z(z[5]);
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
            Z(z[27]);
            Z(z[2]);
            Z([3, '开户支行']);
            Z(z[3]);
            Z(z[45]);
            Z(z[5]);
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
            Z([3, 'van-toast']);
            Z([3, 'clickConfirmFix']);
            Z([3, 'confirm_button']);
            Z([3, 'info']);
            Z([3, 'clickPopConfirm']);
            Z([3, '重新输入']);
            Z([3, '#EF4034']);
            Z([3, '好的']);
            Z([[7], [3, 'showageinPop']]);
            Z(z[14]);
            Z(z[14]);
            Z([3, '确认修改']);
            Z([3, 'addressDataChange']);
            Z([[7], [3, 'showArea']]);
            Z([1, false]);
        })(__WXML_GLOBAL__.ops_cached.$gwx2_15);
        return __WXML_GLOBAL__.ops_cached.$gwx2_15;
    }
    function gz$gwx2_16() {
        if (__WXML_GLOBAL__.ops_cached.$gwx2_16) return __WXML_GLOBAL__.ops_cached.$gwx2_16;
        __WXML_GLOBAL__.ops_cached.$gwx2_16 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'merge_container']);
            Z([3, 'clickConfirmFix']);
            Z([3, 'confirm_button']);
            Z([3, 'info']);
            Z([3, 'clickPopConfirm']);
            Z([3, '取消']);
            Z([3, '#EF4034']);
            Z([3, '确认']);
            Z([[7], [3, 'isShowMarkPop']]);
            Z([1, true]);
            Z(z[9]);
            Z([3, '温馨提示']);
        })(__WXML_GLOBAL__.ops_cached.$gwx2_16);
        return __WXML_GLOBAL__.ops_cached.$gwx2_16;
    }
    function gz$gwx2_17() {
        if (__WXML_GLOBAL__.ops_cached.$gwx2_17) return __WXML_GLOBAL__.ops_cached.$gwx2_17;
        __WXML_GLOBAL__.ops_cached.$gwx2_17 = [];
        (function (z) {
            var a = 11;
            function Z(ops) {
                z.push(ops);
            }
            Z([3, 'container']);
            Z([3, 'https://www.krppay.com/skb_assets/fenshi_jiesuan_icon.png']);
            Z([
                [2, '!'],
                [[7], [3, 'isOpen']]
            ]);
            Z([3, 'clickConfirmFix']);
            Z([3, 'confirm_button']);
            Z([3, 'info']);
            Z([[7], [3, 'isOpen']]);
            Z(z[3]);
            Z([3, 'close_btn']);
            Z(z[5]);
            Z([3, 'van-toast']);
        })(__WXML_GLOBAL__.ops_cached.$gwx2_17);
        return __WXML_GLOBAL__.ops_cached.$gwx2_17;
    }
    function gz$gwx2_18() {
        if (__WXML_GLOBAL__.ops_cached.$gwx2_18) return __WXML_GLOBAL__.ops_cached.$gwx2_18;
        __WXML_GLOBAL__.ops_cached.$gwx2_18 = [];
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
            Z([a, [3, 'height: '], [[7], [3, 'scrollHeight']], [3, 'px;']]);
            Z([3, 'dataChange']);
            Z([3, 'idCardZm']);
            Z([3, '正确示例：文字清晰可见']);
            Z([[7], [3, 'idCardImageV']]);
            Z([[7], [3, 'popidzmUrl']]);
            Z([3, '点击上传身份证正面照片']);
            Z([[7], [3, 'cameraImageV']]);
            Z(z[8]);
            Z(z[9]);
            Z(z[10]);
            Z([[7], [3, 'idCardFanMianV']]);
            Z([[7], [3, 'popidFmUrl']]);
            Z([3, '点击上传身份证反面照片']);
            Z(z[14]);
            Z([1, false]);
            Z([3, 'right']);
            Z([3, '姓名']);
            Z([[7], [3, 'value']]);
            Z([3, '请输入真实姓名']);
            Z(z[22]);
            Z(z[23]);
            Z([3, '身份证号']);
            Z(z[25]);
            Z([3, '请输入身份证号']);
            Z(z[22]);
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
            Z([3, 'class_stattTime']);
            Z([3, 'arrow-down']);
            Z([3, 'showidCardDateEndSelect']);
            Z([3, 'class_endTime']);
            Z(z[46]);
            Z([3, 'onClose']);
            Z(z[6]);
            Z([3, 'bottom']);
            Z([[7], [3, 'showStartTime']]);
            Z([3, 'cancelStartTime']);
            Z([3, 'confirmStartTime']);
            Z([[7], [3, 'formatter']]);
            Z([[7], [3, 'minDate']]);
            Z([3, 'date']);
            Z([[7], [3, 'personStartTime']]);
            Z(z[50]);
            Z(z[6]);
            Z(z[52]);
            Z([[7], [3, 'showEndTime']]);
            Z([3, 'cancelEndTime']);
            Z([3, 'confirmEndTime']);
            Z(z[56]);
            Z(z[57]);
            Z(z[58]);
            Z([[7], [3, 'personEndTime']]);
            Z([3, '取消']);
            Z([3, '#EF4034']);
            Z([3, '继续认证']);
            Z([[7], [3, 'idCardRenzhengShow']]);
            Z([1, true]);
            Z(z[74]);
            Z([3, '温馨提示']);
            Z([3, 'clickCommit']);
            Z([3, 'confirm_button']);
            Z([3, 'info']);
        })(__WXML_GLOBAL__.ops_cached.$gwx2_18);
        return __WXML_GLOBAL__.ops_cached.$gwx2_18;
    }
    function gz$gwx2_19() {
        if (__WXML_GLOBAL__.ops_cached.$gwx2_19) return __WXML_GLOBAL__.ops_cached.$gwx2_19;
        __WXML_GLOBAL__.ops_cached.$gwx2_19 = [];
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
        })(__WXML_GLOBAL__.ops_cached.$gwx2_19);
        return __WXML_GLOBAL__.ops_cached.$gwx2_19;
    }
    __WXML_GLOBAL__.ops_set.$gwx2 = z;
    __WXML_GLOBAL__.ops_init.$gwx2 = true;
    var nv_require = (function () {
        var nnm = {
            'p_./infoChange/custYhq/custYhq.wxs': np_0
        };
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
    f_['./infoChange/custYhq/custYhq.wxml'] = {};
    f_['./infoChange/custYhq/custYhq.wxml']['filter'] = f_['./infoChange/custYhq/custYhq.wxs'] || nv_require('p_./infoChange/custYhq/custYhq.wxs');
    f_['./infoChange/custYhq/custYhq.wxml']['filter']();
    f_['./infoChange/custYhq/custYhq.wxs'] = nv_require('p_./infoChange/custYhq/custYhq.wxs');
    function np_0() {
        var nv_module = {
            nv_exports: {}
        };
        var nv_filterYhqType = function (nv_couponStatus) {
            var nv_text = '';
            if (nv_couponStatus == '0') {
                nv_text = '未生效';
            } else if (nv_couponStatus == '1') {
                nv_text = '生效中';
            } else if (nv_couponStatus == '2') {
                nv_text = '已失效';
            }
            return '生效中';
        };
        nv_module.nv_exports = {
            nv_filterYhqType: nv_filterYhqType
        };
        return nv_module.nv_exports;
    }
    var x = [
        './infoChange/addressFix/address/address.wxml',
        './infoChange/addressFix/addressFixDetail/addressFixDetail.wxml',
        './infoChange/addressFix/addressFixList/addressFixList.wxml',
        './infoChange/addressFix/addressFixSuccess/addressFixSuccess.wxml',
        './infoChange/alliedBank/alliedBank.wxml',
        './infoChange/bank/bank.wxml',
        './infoChange/custYhq/custYhq.wxml',
        './infoChange/debitCard/canvas/canvas.wxml',
        './infoChange/debitCard/commit/commit.wxml',
        './infoChange/debitCard/faceCheck/faceCheck.wxml',
        './infoChange/industryType/hyTypeChangeList/hyTypeChangeList.wxml',
        './infoChange/industryType/index/index.wxml',
        './infoChange/industryType/industrylist/industrylist.wxml',
        './infoChange/jieSuanChange/jieSuanChange.wxml',
        './infoChange/jieSuanFixList/jieSuanFixList.wxml',
        './infoChange/mergeAccont/mergeAccontFix/mergeAccontFix.wxml',
        './infoChange/timeSettlement/timeSettlement.wxml',
        './infoChange/userInfoChange/index/index.wxml',
        './infoChange/userInfoChange/userLiving/userLiving.wxml'
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
        var z = gz$gwx2_1();
        var oB = _n('view');
        _rz(z, oB, 'class', 0, e, s, gg);
        var xC = _n('view');
        _rz(z, xC, 'class', 1, e, s, gg);
        var oD = _mz(z, 'van-cell', ['isLink', -1, 'bindtap', 2, 'customClass', 1, 'title', 2, 'titleClass', 3, 'value', 4, 'valueClass', 5], [], e, s, gg);
        _(xC, oD);
        var fE = _mz(z, 'van-field', ['bind:change', 8, 'border', 1, 'inputAlign', 2, 'inputClass', 3, 'label', 4, 'labelClass', 5, 'value', 6, 'placeholder', 7], [], e, s, gg);
        fE.rawAttr = {
            'model:value': '{{ address }}'
        };
        _(xC, fE);
        _(oB, xC);
        var cF = _mz(z, 'address_pick', ['bindaddressDataChange', 16, 'currentProvinceCode', 1, 'show', 2, 'showAreaCode', 3], [], e, s, gg);
        _(oB, cF);
        var hG = _mz(z, 'van-button', ['round', -1, 'bind:click', 20, 'customClass', 1, 'type', 2], [], e, s, gg);
        _(oB, hG);
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
        var z = gz$gwx2_2();
        var cI = _v();
        _(r, cI);
        if (_oz(z, 0, e, s, gg)) {
            cI.wxVkey = 1;
            var oJ = _mz(z, 'van-empty', ['class', 1, 'description', 1, 'image', 2, 'mode', 3], [], e, s, gg);
            _(cI, oJ);
        }
        cI.wxXCkey = 1;
        cI.wxXCkey = 3;
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
        var z = gz$gwx2_3();
        var aL = _n('view');
        _rz(z, aL, 'class', 0, e, s, gg);
        var tM = _mz(
            z,
            'scroll-view',
            ['enableFlex', -1, 'bindrefresherrefresh', 1, 'bindscrolltolower', 1, 'refresherEnabled', 2, 'refresherTriggered', 3, 'scrollY', 4, 'style', 5],
            [],
            e,
            s,
            gg
        );
        var bO = _v();
        _(tM, bO);
        var oP = function (oR, xQ, fS, gg) {
            var hU = _mz(z, 'view', ['bindtap', 8, 'class', 1, 'data-item', 2], [], oR, xQ, gg);
            var oV = _n('van-icon');
            _rz(z, oV, 'name', 11, oR, xQ, gg);
            _(hU, oV);
            _(fS, hU);
            return fS;
        };
        bO.wxXCkey = 4;
        _2z(z, 7, oP, e, s, gg, bO, 'item', 'index', '');
        var eN = _v();
        _(tM, eN);
        if (_oz(z, 12, e, s, gg)) {
            eN.wxVkey = 1;
            var cW = _mz(z, 'van-empty', ['class', 13, 'description', 1, 'image', 2, 'mode', 3], [], e, s, gg);
            _(eN, cW);
        }
        eN.wxXCkey = 1;
        eN.wxXCkey = 3;
        _(aL, tM);
        var oX = _mz(z, 'native_pick_time', ['binddismissPop', 17, 'bindtimeDataChange', 1, 'show', 2, 'showDay', 3], [], e, s, gg);
        _(aL, oX);
        _(r, aL);
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
        var z = gz$gwx2_4();
        var aZ = _n('view');
        _rz(z, aZ, 'class', 0, e, s, gg);
        var t1 = _mz(z, 'van-image', ['height', 1, 'src', 1, 'style', 2, 'width', 3], [], e, s, gg);
        _(aZ, t1);
        var e2 = _mz(z, 'van-button', ['round', -1, 'bind:click', 5, 'customClass', 1, 'type', 2], [], e, s, gg);
        _(aZ, e2);
        _(r, aZ);
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
        var z = gz$gwx2_5();
        var o4 = _mz(z, 'van-search', ['useActionSlot', -1, 'bind:cancel', 0, 'bind:change', 1, 'bind:search', 1, 'customClass', 2, 'value', 3, 'placeholder', 4], [], e, s, gg);
        o4.rawAttr = {
            'model:value': '{{ value }}'
        };
        _(r, o4);
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
        var z = gz$gwx2_6();
        var o6 = _mz(z, 'van-search', ['useActionSlot', -1, 'bind:cancel', 0, 'bind:change', 1, 'bind:search', 1, 'customClass', 2, 'value', 3, 'placeholder', 4], [], e, s, gg);
        o6.rawAttr = {
            'model:value': '{{ value }}'
        };
        _(r, o6);
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
        var z = gz$gwx2_7();
        var c8 = _n('view');
        _rz(z, c8, 'class', 0, e, s, gg);
        var h9 = _n('view');
        _rz(z, h9, 'class', 1, e, s, gg);
        var o0 = _v();
        _(h9, o0);
        if (_oz(z, 2, e, s, gg)) {
            o0.wxVkey = 1;
        }
        var cAB = _v();
        _(h9, cAB);
        if (_oz(z, 3, e, s, gg)) {
            cAB.wxVkey = 1;
        }
        o0.wxXCkey = 1;
        cAB.wxXCkey = 1;
        _(c8, h9);
        var oBB = _mz(
            z,
            'scroll-view',
            ['enableFlex', -1, 'bindrefresherrefresh', 4, 'bindscrolltolower', 1, 'refresherEnabled', 2, 'refresherTriggered', 3, 'scrollY', 4, 'style', 5],
            [],
            e,
            s,
            gg
        );
        var lCB = _mz(z, 'van-tabs', ['active', 10, 'bind:change', 1, 'titleActiveColor', 2, 'titleInactiveColor', 3], [], e, s, gg);
        var aDB = _mz(z, 'van-tab', ['name', 14, 'title', 1, 'titleStyle', 2], [], e, s, gg);
        var tEB = _v();
        _(aDB, tEB);
        if (_oz(z, 17, e, s, gg)) {
            tEB.wxVkey = 1;
            var eFB = _mz(z, 'van-empty', ['class', 18, 'description', 1, 'image', 2, 'mode', 3], [], e, s, gg);
            _(tEB, eFB);
        } else {
            tEB.wxVkey = 2;
        }
        tEB.wxXCkey = 1;
        tEB.wxXCkey = 3;
        _(lCB, aDB);
        var bGB = _mz(z, 'van-tab', ['name', 22, 'title', 1, 'titleStyle', 2], [], e, s, gg);
        var oHB = _v();
        _(bGB, oHB);
        if (_oz(z, 25, e, s, gg)) {
            oHB.wxVkey = 1;
            var xIB = _mz(z, 'van-empty', ['class', 26, 'description', 1, 'image', 2, 'mode', 3], [], e, s, gg);
            _(oHB, xIB);
        } else {
            oHB.wxVkey = 2;
        }
        oHB.wxXCkey = 1;
        oHB.wxXCkey = 3;
        _(lCB, bGB);
        var oJB = _mz(z, 'van-tab', ['disabled', -1, 'title', 30], [], e, s, gg);
        _(lCB, oJB);
        var fKB = _mz(z, 'van-tab', ['disabled', -1, 'title', 31], [], e, s, gg);
        _(lCB, fKB);
        _(oBB, lCB);
        _(c8, oBB);
        _(r, c8);
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
        var z = gz$gwx2_8();
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
        var z = gz$gwx2_9();
        var oNB = _n('view');
        _rz(z, oNB, 'class', 0, e, s, gg);
        var cOB = _v();
        _(oNB, cOB);
        if (_oz(z, 1, e, s, gg)) {
            cOB.wxVkey = 1;
            var lQB = _mz(z, 'van-button', ['round', -1, 'bind:click', 2, 'customClass', 1, 'type', 2], [], e, s, gg);
            _(cOB, lQB);
        }
        var oPB = _v();
        _(oNB, oPB);
        if (_oz(z, 5, e, s, gg)) {
            oPB.wxVkey = 1;
            var aRB = _n('view');
            _rz(z, aRB, 'class', 6, e, s, gg);
            var tSB = _v();
            _(aRB, tSB);
            if (_oz(z, 7, e, s, gg)) {
                tSB.wxVkey = 1;
                var eTB = _v();
                _(tSB, eTB);
                if (_oz(z, 8, e, s, gg)) {
                    eTB.wxVkey = 1;
                }
                var oVB = _mz(z, 'van-button', ['round', -1, 'bind:click', 9, 'customClass', 1, 'type', 2], [], e, s, gg);
                _(tSB, oVB);
                var bUB = _v();
                _(tSB, bUB);
                if (_oz(z, 12, e, s, gg)) {
                    bUB.wxVkey = 1;
                }
                eTB.wxXCkey = 1;
                bUB.wxXCkey = 1;
            } else {
                tSB.wxVkey = 2;
            }
            tSB.wxXCkey = 1;
            tSB.wxXCkey = 3;
            _(oPB, aRB);
        }
        cOB.wxXCkey = 1;
        cOB.wxXCkey = 3;
        oPB.wxXCkey = 1;
        oPB.wxXCkey = 3;
        _(r, oNB);
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
        var z = gz$gwx2_10();
        var oXB = _n('view');
        _rz(z, oXB, 'class', 0, e, s, gg);
        var fYB = _n('van-image');
        _rz(z, fYB, 'src', 1, e, s, gg);
        _(oXB, fYB);
        var cZB = _mz(z, 'van-button', ['round', -1, 'bind:click', 2, 'customClass', 1, 'type', 2], [], e, s, gg);
        _(oXB, cZB);
        _(r, oXB);
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
        var z = gz$gwx2_11();
        var o2B = _mz(z, 'van-search', ['useActionSlot', -1, 'bind:cancel', 0, 'bind:change', 1, 'bind:search', 1, 'customClass', 2, 'value', 3, 'placeholder', 4], [], e, s, gg);
        o2B.rawAttr = {
            'model:value': '{{ value }}'
        };
        _(r, o2B);
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
        var z = gz$gwx2_12();
        var o4B = _n('view');
        _rz(z, o4B, 'class', 0, e, s, gg);
        var l5B = _mz(z, 'view', ['catchtap', 1, 'class', 1], [], e, s, gg);
        var a6B = _mz(z, 'van-icon', ['catchtap', 3, 'name', 1, 'style', 2], [], e, s, gg);
        _(l5B, a6B);
        _(o4B, l5B);
        var t7B = _mz(z, 'van-button', ['round', -1, 'bind:click', 6, 'customClass', 1, 'type', 2], [], e, s, gg);
        _(o4B, t7B);
        var e8B = _mz(
            z,
            'van-dialog',
            ['showCancelButton', -1, 'useSlot', -1, 'bind:confirm', 9, 'confirmButtonColor', 1, 'confirmButtonText', 2, 'show', 3, 'showConfirmButton', 4, 'title', 5],
            [],
            e,
            s,
            gg
        );
        _(o4B, e8B);
        var b9B = _mz(
            z,
            'van-dialog',
            ['useSlot', -1, 'bind:confirm', 15, 'confirmButtonColor', 1, 'confirmButtonText', 2, 'show', 3, 'showConfirmButton', 4, 'title', 5],
            [],
            e,
            s,
            gg
        );
        _(o4B, b9B);
        _(r, o4B);
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
        var z = gz$gwx2_13();
        var xAC = _n('view');
        _rz(z, xAC, 'class', 0, e, s, gg);
        var oBC = _v();
        _(xAC, oBC);
        if (_oz(z, 1, e, s, gg)) {
            oBC.wxVkey = 1;
            var fCC = _mz(z, 'van-empty', ['class', 2, 'description', 1, 'image', 2, 'mode', 3], [], e, s, gg);
            _(oBC, fCC);
        }
        var cDC = _mz(z, 'native_pick_time', ['binddismissPop', 6, 'bindtimeDataChange', 1, 'show', 2, 'showDay', 3], [], e, s, gg);
        _(xAC, cDC);
        oBC.wxXCkey = 1;
        oBC.wxXCkey = 3;
        _(r, xAC);
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
        var z = gz$gwx2_14();
        var oFC = _n('view');
        _rz(z, oFC, 'class', 0, e, s, gg);
        var cGC = _n('van-image');
        _rz(z, cGC, 'src', 1, e, s, gg);
        _(oFC, cGC);
        var oHC = _n('view');
        _rz(z, oHC, 'class', 2, e, s, gg);
        var lIC = _mz(z, 'van-cell', ['customClass', 3, 'size', 1, 'title', 2, 'titleClass', 3, 'value', 4, 'valueClass', 5], [], e, s, gg);
        _(oHC, lIC);
        var aJC = _mz(z, 'van-cell', ['customClass', 9, 'size', 1, 'title', 2, 'titleClass', 3, 'value', 4, 'valueClass', 5], [], e, s, gg);
        _(oHC, aJC);
        _(oFC, oHC);
        _(r, oFC);
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
        var z = gz$gwx2_15();
        var eLC = _n('view');
        _rz(z, eLC, 'class', 0, e, s, gg);
        var bMC = _n('view');
        _rz(z, bMC, 'class', 1, e, s, gg);
        var oNC = _mz(z, 'van-cell', ['customClass', 2, 'size', 1, 'title', 2, 'titleClass', 3, 'value', 4, 'valueClass', 5], [], e, s, gg);
        _(bMC, oNC);
        var xOC = _mz(z, 'van-cell', ['customClass', 8, 'size', 1, 'title', 2, 'titleClass', 3, 'value', 4, 'valueClass', 5], [], e, s, gg);
        _(bMC, xOC);
        _(eLC, bMC);
        var oPC = _mz(
            z,
            'van-field',
            ['center', -1, 'clearable', -1, 'border', 14, 'inputAlign', 1, 'inputClass', 2, 'label', 3, 'labelClass', 4, 'value', 5, 'placeholder', 6],
            [],
            e,
            s,
            gg
        );
        oPC.rawAttr = {
            'model:value': '{{ bankNumber }}'
        };
        var fQC = _mz(z, 'van-icon', ['bind:click', 21, 'customClass', 1, 'name', 2, 'size', 3, 'slot', 4], [], e, s, gg);
        _(oPC, fQC);
        _(eLC, oPC);
        var cRC = _n('view');
        _rz(z, cRC, 'class', 26, e, s, gg);
        var hSC = _mz(
            z,
            'van-cell',
            ['isLink', -1, 'bindtap', 27, 'customClass', 1, 'data-title', 2, 'size', 3, 'title', 4, 'titleClass', 5, 'value', 6, 'valueClass', 7],
            [],
            e,
            s,
            gg
        );
        _(cRC, hSC);
        var oTC = _mz(
            z,
            'van-cell',
            ['isLink', -1, 'bindtap', 35, 'customClass', 1, 'data-title', 2, 'size', 3, 'title', 4, 'titleClass', 5, 'value', 6, 'valueClass', 7],
            [],
            e,
            s,
            gg
        );
        _(cRC, oTC);
        var cUC = _mz(
            z,
            'van-cell',
            ['isLink', -1, 'bindtap', 43, 'customClass', 1, 'data-title', 2, 'size', 3, 'title', 4, 'titleClass', 5, 'value', 6, 'valueClass', 7],
            [],
            e,
            s,
            gg
        );
        _(cRC, cUC);
        _(eLC, cRC);
        var oVC = _n('van-toast');
        _rz(z, oVC, 'id', 51, e, s, gg);
        _(eLC, oVC);
        var lWC = _mz(z, 'van-button', ['round', -1, 'bind:click', 52, 'customClass', 1, 'type', 2], [], e, s, gg);
        _(eLC, lWC);
        var aXC = _mz(
            z,
            'van-dialog',
            [
                'useSlot',
                -1,
                'bind:confirm',
                55,
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
        _(eLC, aXC);
        var tYC = _mz(z, 'address_pick', ['bindaddressDataChange', 63, 'show', 1, 'showAreaCode', 2], [], e, s, gg);
        _(eLC, tYC);
        _(r, eLC);
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
        var z = gz$gwx2_16();
        var b1C = _n('view');
        _rz(z, b1C, 'class', 0, e, s, gg);
        var o2C = _mz(z, 'van-button', ['round', -1, 'bind:click', 1, 'customClass', 1, 'type', 2], [], e, s, gg);
        _(b1C, o2C);
        var x3C = _mz(
            z,
            'van-dialog',
            [
                'useSlot',
                -1,
                'bind:confirm',
                4,
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
        _(b1C, x3C);
        _(r, b1C);
        return r;
    };
    e_[x[15]] = {
        f: m15,
        j: [],
        i: [],
        ti: [],
        ic: []
    };
    d_[x[16]] = {};
    var m16 = function (e, s, r, gg) {
        var z = gz$gwx2_17();
        var f5C = _n('view');
        _rz(z, f5C, 'class', 0, e, s, gg);
        var o8C = _n('van-image');
        _rz(z, o8C, 'src', 1, e, s, gg);
        _(f5C, o8C);
        var c6C = _v();
        _(f5C, c6C);
        if (_oz(z, 2, e, s, gg)) {
            c6C.wxVkey = 1;
            var c9C = _mz(z, 'van-button', ['round', -1, 'bind:click', 3, 'customClass', 1, 'type', 2], [], e, s, gg);
            _(c6C, c9C);
        }
        var h7C = _v();
        _(f5C, h7C);
        if (_oz(z, 6, e, s, gg)) {
            h7C.wxVkey = 1;
            var o0C = _mz(z, 'van-button', ['round', -1, 'bind:click', 7, 'customClass', 1, 'type', 2], [], e, s, gg);
            _(h7C, o0C);
        }
        var lAD = _n('van-toast');
        _rz(z, lAD, 'id', 10, e, s, gg);
        _(f5C, lAD);
        c6C.wxXCkey = 1;
        c6C.wxXCkey = 3;
        h7C.wxXCkey = 1;
        h7C.wxXCkey = 3;
        _(r, f5C);
        return r;
    };
    e_[x[16]] = {
        f: m16,
        j: [],
        i: [],
        ti: [],
        ic: []
    };
    d_[x[17]] = {};
    var m17 = function (e, s, r, gg) {
        var z = gz$gwx2_18();
        var tCD = _n('view');
        _rz(z, tCD, 'class', 0, e, s, gg);
        var eDD = _mz(
            z,
            'scroll-view',
            ['bindscroll', 1, 'bindscrolltolower', 1, 'bindscrolltoupper', 2, 'scrollIntoView', 3, 'scrollTop', 4, 'scrollY', 5, 'style', 6],
            [],
            e,
            s,
            gg
        );
        var bED = _n('view');
        var oFD = _mz(
            z,
            'optionComponent',
            ['binddataChange', 8, 'id', 1, 'leftDescTitle', 2, 'leftbgImageV', 3, 'popimageUrl', 4, 'rightDescTitle', 5, 'rightbgImageV', 6],
            [],
            e,
            s,
            gg
        );
        _(bED, oFD);
        var xGD = _mz(
            z,
            'optionComponent',
            ['binddataChange', 15, 'id', 1, 'leftDescTitle', 2, 'leftbgImageV', 3, 'popimageUrl', 4, 'rightDescTitle', 5, 'rightbgImageV', 6],
            [],
            e,
            s,
            gg
        );
        _(bED, xGD);
        _(eDD, bED);
        var oHD = _n('van-cell-group');
        var fID = _mz(z, 'van-field', ['border', 22, 'inputAlign', 1, 'label', 2, 'value', 3, 'placeholder', 4], [], e, s, gg);
        fID.rawAttr = {
            'model:value': '{{ value }}'
        };
        _(oHD, fID);
        var cJD = _mz(z, 'van-field', ['border', 27, 'inputAlign', 1, 'label', 2, 'value', 3, 'placeholder', 4], [], e, s, gg);
        cJD.rawAttr = {
            'model:value': '{{ value }}'
        };
        _(oHD, cJD);
        var hKD = _mz(z, 'van-cell', ['border', 32, 'title', 1], [], e, s, gg);
        var oLD = _mz(z, 'van-radio-group', ['bind:change', 34, 'slot', 1, 'value', 2], [], e, s, gg);
        var cMD = _n('view');
        _rz(z, cMD, 'class', 37, e, s, gg);
        var oND = _mz(z, 'van-radio', ['useIconSlot', -1, 'customClass', 38, 'name', 1], [], e, s, gg);
        _(cMD, oND);
        var lOD = _mz(z, 'van-radio', ['useIconSlot', -1, 'customClass', 40, 'name', 1], [], e, s, gg);
        _(cMD, lOD);
        _(oLD, cMD);
        _(hKD, oLD);
        _(oHD, hKD);
        var aPD = _n('van-cell');
        _rz(z, aPD, 'title', 42, e, s, gg);
        var tQD = _n('view');
        _rz(z, tQD, 'class', 43, e, s, gg);
        var eRD = _mz(z, 'view', ['bindtap', 44, 'class', 1], [], e, s, gg);
        var bSD = _n('van-icon');
        _rz(z, bSD, 'name', 46, e, s, gg);
        _(eRD, bSD);
        _(tQD, eRD);
        var oTD = _mz(z, 'view', ['bindtap', 47, 'class', 1], [], e, s, gg);
        var xUD = _n('van-icon');
        _rz(z, xUD, 'name', 49, e, s, gg);
        _(oTD, xUD);
        _(tQD, oTD);
        _(aPD, tQD);
        _(oHD, aPD);
        _(eDD, oHD);
        _(tCD, eDD);
        var oVD = _mz(z, 'van-popup', ['bind:close', 50, 'closeOnClickOverlay', 1, 'position', 2, 'show', 3], [], e, s, gg);
        var fWD = _mz(z, 'van-datetime-picker', ['bind:cancel', 54, 'bind:confirm', 1, 'formatter', 2, 'minDate', 3, 'type', 4, 'value', 5], [], e, s, gg);
        _(oVD, fWD);
        _(tCD, oVD);
        var cXD = _mz(z, 'van-popup', ['bind:close', 60, 'closeOnClickOverlay', 1, 'position', 2, 'show', 3], [], e, s, gg);
        var hYD = _mz(z, 'van-datetime-picker', ['bind:cancel', 64, 'bind:confirm', 1, 'formatter', 2, 'minDate', 3, 'type', 4, 'value', 5], [], e, s, gg);
        _(cXD, hYD);
        _(tCD, cXD);
        var oZD = _mz(
            z,
            'van-dialog',
            ['useSlot', -1, 'cancelButtonText', 70, 'confirmButtonColor', 1, 'confirmButtonText', 2, 'show', 3, 'showCancelButton', 4, 'showConfirmButton', 5, 'title', 6],
            [],
            e,
            s,
            gg
        );
        _(tCD, oZD);
        var c1D = _mz(z, 'van-button', ['round', -1, 'bindtap', 77, 'customClass', 1, 'type', 2], [], e, s, gg);
        _(tCD, c1D);
        _(r, tCD);
        return r;
    };
    e_[x[17]] = {
        f: m17,
        j: [],
        i: [],
        ti: [],
        ic: []
    };
    d_[x[18]] = {};
    var m18 = function (e, s, r, gg) {
        var z = gz$gwx2_19();
        var l3D = _n('view');
        _rz(z, l3D, 'class', 0, e, s, gg);
        var a4D = _n('van-image');
        _rz(z, a4D, 'src', 1, e, s, gg);
        _(l3D, a4D);
        var t5D = _mz(z, 'van-button', ['round', -1, 'bind:click', 2, 'customClass', 1, 'type', 2], [], e, s, gg);
        _(l3D, t5D);
        _(r, l3D);
        return r;
    };
    e_[x[18]] = {
        f: m18,
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
__wxAppCode__['infoChange/addressFix/address/address.json'] = {
    usingComponents: {
        'van-cell': '../@wc/vantWeapp/cell/index',
        'van-cell-group': '../@wc/vantWeapp/cell-group/index',
        'van-field': '../@wc/vantWeapp/field/index',
        'van-button': '../@wc/vantWeapp/button/index',
        'van-popup': '../@wc/vantWeapp/popup/index',
        address_pick: '/Components/address_pick/address_pick',
        'van-area': '../@wc/vantWeapp/area/index'
    },
    navigationBarTitleText: '地址变更'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['infoChange/addressFix/address/address.wxml'] = [$gwx2, './infoChange/addressFix/address/address.wxml'];
else __wxAppCode__['infoChange/addressFix/address/address.wxml'] = $gwx2('./infoChange/addressFix/address/address.wxml');
__wxAppCode__['infoChange/addressFix/addressFixDetail/addressFixDetail.json'] = {
    usingComponents: {
        'van-cell': '../@wc/vantWeapp/cell/index',
        'van-cell-group': '../@wc/vantWeapp/cell-group/index'
    },
    navigationBarTitleText: '地址变更详情'
};
if (__vd_version_info__.delayedGwx)
    __wxAppCode__['infoChange/addressFix/addressFixDetail/addressFixDetail.wxml'] = [$gwx2, './infoChange/addressFix/addressFixDetail/addressFixDetail.wxml'];
else __wxAppCode__['infoChange/addressFix/addressFixDetail/addressFixDetail.wxml'] = $gwx2('./infoChange/addressFix/addressFixDetail/addressFixDetail.wxml');
__wxAppCode__['infoChange/addressFix/addressFixList/addressFixList.json'] = {
    usingComponents: {
        'van-icon': '../@wc/vantWeapp/icon/index',
        'van-dropdown-menu': '../@wc/vantWeapp/dropdown-menu/index',
        'van-dropdown-item': '../@wc/vantWeapp/dropdown-item/index',
        'van-button': '../@wc/vantWeapp/button/index',
        'van-calendar': '../@wc/vantWeapp/calendar/index',
        'van-empty': '../@wc/vantWeapp/empty/index',
        'van-image': '../@wc/vantWeapp/image/index',
        native_pick_time: '/Components/native_pick/native_pick_time'
    },
    navigationBarTitleText: '地址变更记录'
};
if (__vd_version_info__.delayedGwx)
    __wxAppCode__['infoChange/addressFix/addressFixList/addressFixList.wxml'] = [$gwx2, './infoChange/addressFix/addressFixList/addressFixList.wxml'];
else __wxAppCode__['infoChange/addressFix/addressFixList/addressFixList.wxml'] = $gwx2('./infoChange/addressFix/addressFixList/addressFixList.wxml');
__wxAppCode__['infoChange/addressFix/addressFixSuccess/addressFixSuccess.json'] = {
    usingComponents: {
        'van-button': '../@wc/vantWeapp/button/index',
        'van-image': '../@wc/vantWeapp/image/index'
    },
    navigationBarTitleText: '修改成功'
};
if (__vd_version_info__.delayedGwx)
    __wxAppCode__['infoChange/addressFix/addressFixSuccess/addressFixSuccess.wxml'] = [$gwx2, './infoChange/addressFix/addressFixSuccess/addressFixSuccess.wxml'];
else __wxAppCode__['infoChange/addressFix/addressFixSuccess/addressFixSuccess.wxml'] = $gwx2('./infoChange/addressFix/addressFixSuccess/addressFixSuccess.wxml');
__wxAppCode__['infoChange/alliedBank/alliedBank.json'] = {
    usingComponents: {
        'van-search': '@wc/vantWeapp/search/index'
    },
    navigationBarTitleText: '支行列表'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['infoChange/alliedBank/alliedBank.wxml'] = [$gwx2, './infoChange/alliedBank/alliedBank.wxml'];
else __wxAppCode__['infoChange/alliedBank/alliedBank.wxml'] = $gwx2('./infoChange/alliedBank/alliedBank.wxml');
__wxAppCode__['infoChange/bank/bank.json'] = {
    usingComponents: {
        'van-search': '@wc/vantWeapp/search/index'
    },
    navigationBarTitleText: '银行列表'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['infoChange/bank/bank.wxml'] = [$gwx2, './infoChange/bank/bank.wxml'];
else __wxAppCode__['infoChange/bank/bank.wxml'] = $gwx2('./infoChange/bank/bank.wxml');
__wxAppCode__['infoChange/custYhq/custYhq.json'] = {
    usingComponents: {
        'van-tab': '@wc/vantWeapp/tab/index',
        'van-tabs': '@wc/vantWeapp/tabs/index',
        'van-empty': '@wc/vantWeapp/empty/index',
        'van-icon': '@wc/vantWeapp/icon/index'
    },
    navigationBarTitleText: '优惠券'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['infoChange/custYhq/custYhq.wxml'] = [$gwx2, './infoChange/custYhq/custYhq.wxml'];
else __wxAppCode__['infoChange/custYhq/custYhq.wxml'] = $gwx2('./infoChange/custYhq/custYhq.wxml');
__wxAppCode__['infoChange/debitCard/canvas/canvas.json'] = {
    usingComponents: {},
    pageOrientation: 'landscape',
    navigationBarTitleText: '承诺函'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['infoChange/debitCard/canvas/canvas.wxml'] = [$gwx2, './infoChange/debitCard/canvas/canvas.wxml'];
else __wxAppCode__['infoChange/debitCard/canvas/canvas.wxml'] = $gwx2('./infoChange/debitCard/canvas/canvas.wxml');
__wxAppCode__['infoChange/debitCard/commit/commit.json'] = {
    usingComponents: {
        'van-button': '../@wc/vantWeapp/button/index'
    },
    navigationBarTitleText: '承诺函预览'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['infoChange/debitCard/commit/commit.wxml'] = [$gwx2, './infoChange/debitCard/commit/commit.wxml'];
else __wxAppCode__['infoChange/debitCard/commit/commit.wxml'] = $gwx2('./infoChange/debitCard/commit/commit.wxml');
__wxAppCode__['infoChange/debitCard/faceCheck/faceCheck.json'] = {
    usingComponents: {
        'van-image': '../@wc/vantWeapp/image/index',
        'van-button': '../@wc/vantWeapp/button/index',
        'van-field': '../@wc/vantWeapp/field/index'
    },
    navigationBarTitleText: 'E证通认证'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['infoChange/debitCard/faceCheck/faceCheck.wxml'] = [$gwx2, './infoChange/debitCard/faceCheck/faceCheck.wxml'];
else __wxAppCode__['infoChange/debitCard/faceCheck/faceCheck.wxml'] = $gwx2('./infoChange/debitCard/faceCheck/faceCheck.wxml');
__wxAppCode__['infoChange/industryType/hyTypeChangeList/hyTypeChangeList.json'] = {
    usingComponents: {
        'van-search': '../@wc/vantWeapp/search/index'
    },
    navigationBarTitleText: '行业选择'
};
if (__vd_version_info__.delayedGwx)
    __wxAppCode__['infoChange/industryType/hyTypeChangeList/hyTypeChangeList.wxml'] = [$gwx2, './infoChange/industryType/hyTypeChangeList/hyTypeChangeList.wxml'];
else __wxAppCode__['infoChange/industryType/hyTypeChangeList/hyTypeChangeList.wxml'] = $gwx2('./infoChange/industryType/hyTypeChangeList/hyTypeChangeList.wxml');
__wxAppCode__['infoChange/industryType/index/index.json'] = {
    usingComponents: {
        'van-cell': '../@wc/vantWeapp/cell/index',
        'van-cell-group': '../@wc/vantWeapp/cell-group/index',
        'van-field': '../@wc/vantWeapp/field/index',
        'van-button': '../@wc/vantWeapp/button/index',
        'van-popup': '../@wc/vantWeapp/popup/index',
        'van-dialog': '../@wc/vantWeapp/dialog/index',
        'van-icon': '../@wc/vantWeapp/icon/index',
        'van-area': '../@wc/vantWeapp/area/index'
    },
    navigationBarTitleText: '行业类型变更'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['infoChange/industryType/index/index.wxml'] = [$gwx2, './infoChange/industryType/index/index.wxml'];
else __wxAppCode__['infoChange/industryType/index/index.wxml'] = $gwx2('./infoChange/industryType/index/index.wxml');
__wxAppCode__['infoChange/industryType/industrylist/industrylist.json'] = {
    usingComponents: {
        'van-icon': '../@wc/vantWeapp/icon/index',
        'van-dropdown-menu': '../@wc/vantWeapp/dropdown-menu/index',
        'van-dropdown-item': '../@wc/vantWeapp/dropdown-item/index',
        'van-button': '../@wc/vantWeapp/button/index',
        'van-calendar': '../@wc/vantWeapp/calendar/index',
        'van-empty': '../@wc/vantWeapp/empty/index',
        native_pick_time: '/Components/native_pick/native_pick_time'
    },
    navigationBarTitleText: '行业变更记录'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['infoChange/industryType/industrylist/industrylist.wxml'] = [$gwx2, './infoChange/industryType/industrylist/industrylist.wxml'];
else __wxAppCode__['infoChange/industryType/industrylist/industrylist.wxml'] = $gwx2('./infoChange/industryType/industrylist/industrylist.wxml');
__wxAppCode__['infoChange/jieSuanChange/jieSuanChange.json'] = {
    usingComponents: {
        'van-image': '@wc/vantWeapp/image/index',
        'van-cell': '@wc/vantWeapp/cell/index',
        'van-cell-group': '@wc/vantWeapp/cell-group/index',
        'van-icon': '@wc/vantWeapp/icon/index'
    },
    navigationBarTitleText: '结算信息变更'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['infoChange/jieSuanChange/jieSuanChange.wxml'] = [$gwx2, './infoChange/jieSuanChange/jieSuanChange.wxml'];
else __wxAppCode__['infoChange/jieSuanChange/jieSuanChange.wxml'] = $gwx2('./infoChange/jieSuanChange/jieSuanChange.wxml');
__wxAppCode__['infoChange/jieSuanFixList/jieSuanFixList.json'] = {
    usingComponents: {
        'van-image': '@wc/vantWeapp/image/index',
        'van-cell': '@wc/vantWeapp/cell/index',
        'van-cell-group': '@wc/vantWeapp/cell-group/index',
        'van-icon': '@wc/vantWeapp/icon/index',
        'van-button': '@wc/vantWeapp/button/index',
        'van-dialog': '@wc/vantWeapp/dialog/index',
        'van-popup': '@wc/vantWeapp/popup/index',
        'van-area': '@wc/vantWeapp/area/index',
        'van-toast': '@wc/vantWeapp/toast/index',
        'van-field': '@wc/vantWeapp/field/index',
        address_pick: '/Components/address_pick/address_pick'
    },
    navigationBarTitleText: '结算信息变更'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['infoChange/jieSuanFixList/jieSuanFixList.wxml'] = [$gwx2, './infoChange/jieSuanFixList/jieSuanFixList.wxml'];
else __wxAppCode__['infoChange/jieSuanFixList/jieSuanFixList.wxml'] = $gwx2('./infoChange/jieSuanFixList/jieSuanFixList.wxml');
__wxAppCode__['infoChange/mergeAccont/mergeAccontFix/mergeAccontFix.json'] = {
    usingComponents: {
        'van-radio': '../@wc/vantWeapp/radio/index',
        'van-radio-group': '../@wc/vantWeapp/radio-group/index',
        'van-cell': '../@wc/vantWeapp/cell/index',
        'van-button': '../@wc/vantWeapp/button/index',
        'van-dialog': '../@wc/vantWeapp/dialog/index',
        'van-cell-group': '../@wc/vantWeapp/cell-group/index'
    },
    navigationBarTitleText: '到账方式变更'
};
if (__vd_version_info__.delayedGwx)
    __wxAppCode__['infoChange/mergeAccont/mergeAccontFix/mergeAccontFix.wxml'] = [$gwx2, './infoChange/mergeAccont/mergeAccontFix/mergeAccontFix.wxml'];
else __wxAppCode__['infoChange/mergeAccont/mergeAccontFix/mergeAccontFix.wxml'] = $gwx2('./infoChange/mergeAccont/mergeAccontFix/mergeAccontFix.wxml');
__wxAppCode__['infoChange/timeSettlement/timeSettlement.json'] = {
    usingComponents: {
        'van-image': '@wc/vantWeapp/image/index',
        'van-cell': '@wc/vantWeapp/cell/index',
        'van-cell-group': '@wc/vantWeapp/cell-group/index',
        'van-icon': '@wc/vantWeapp/icon/index',
        'van-button': '@wc/vantWeapp/button/index',
        'van-dialog': '@wc/vantWeapp/dialog/index',
        'van-popup': '@wc/vantWeapp/popup/index',
        'van-toast': '@wc/vantWeapp/toast/index',
        'van-area': '@wc/vantWeapp/area/index',
        'van-field': '@wc/vantWeapp/field/index'
    },
    navigationBarTitleText: '分时结算'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['infoChange/timeSettlement/timeSettlement.wxml'] = [$gwx2, './infoChange/timeSettlement/timeSettlement.wxml'];
else __wxAppCode__['infoChange/timeSettlement/timeSettlement.wxml'] = $gwx2('./infoChange/timeSettlement/timeSettlement.wxml');
__wxAppCode__['infoChange/userInfoChange/index/index.json'] = {
    usingComponents: {
        'van-cell': '../@wc/vantWeapp/cell/index',
        'van-cell-group': '../@wc/vantWeapp/cell-group/index',
        'van-field': '../@wc/vantWeapp/field/index',
        'van-radio': '../@wc/vantWeapp/radio/index',
        'van-radio-group': '../@wc/vantWeapp/radio-group/index',
        'van-datetime-picker': '../@wc/vantWeapp/datetime-picker/index',
        'van-popup': '../@wc/vantWeapp/popup/index',
        'van-button': '../@wc/vantWeapp/button/index',
        'van-action-sheet': '../@wc/vantWeapp/action-sheet/index',
        'van-area': '../@wc/vantWeapp/area/index',
        'van-picker': '../@wc/vantWeapp/picker/index',
        'van-icon': '../@wc/vantWeapp/icon/index',
        'van-dialog': '../@wc/vantWeapp/dialog/index',
        optionComponent: '/Components/optionComponent/optionComponent'
    },
    navigationBarTitleText: '注册商户'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['infoChange/userInfoChange/index/index.wxml'] = [$gwx2, './infoChange/userInfoChange/index/index.wxml'];
else __wxAppCode__['infoChange/userInfoChange/index/index.wxml'] = $gwx2('./infoChange/userInfoChange/index/index.wxml');
__wxAppCode__['infoChange/userInfoChange/userLiving/userLiving.json'] = {
    usingComponents: {
        'van-image': '../@wc/vantWeapp/image/index',
        'van-button': '../@wc/vantWeapp/button/index',
        'van-field': '../@wc/vantWeapp/field/index'
    },
    navigationBarTitleText: 'E证通认证'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['infoChange/userInfoChange/userLiving/userLiving.wxml'] = [$gwx2, './infoChange/userInfoChange/userLiving/userLiving.wxml'];
else __wxAppCode__['infoChange/userInfoChange/userLiving/userLiving.wxml'] = $gwx2('./infoChange/userInfoChange/userLiving/userLiving.wxml');
__wxRoute = 'infoChange/custYhq/custYhq';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'infoChange/custYhq/custYhq.js';
define(
    'infoChange/custYhq/custYhq.js',
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

        var t = require('@api/api').API,
            e = getApp();
        export default {
            data() {
                return {
                    active: 0,
                    couponNo: '',
                    couponInfo: {},
                    loading: !1,
                    scrollheight: e.globalData.windowHeight - e.globalData.navhegiht - 200,
                    type: 'use',
                    useList: [],
                    historyList: [],
                    totalCount: 0,
                    usePageNum: 1,
                    historyPageNum: 1,
                    bankName: '',
                    userName: '',
                    bankNumber: '',
                    idCardnumber: '',
                    bankIcon: '',
                    areaCode: '',
                    bankCode: '',
                    currentProvinceCode: '',
                    areaNmae: '',
                    diquCode: '',
                    address: '',
                    message: '',
                    gobackBtnTitle: '',
                    defaultImage: '',
                    isAuto: '',
                    hyTypeNmae: '',
                    hyTypeCode: '',
                    customerNo: '',
                    jyAreaCode: '',
                    keyWord: '',
                    isOpen: '',
                    customerName: '',
                    signaturePath: '',
                    latitude: '',
                    longitude: '',
                    showArea: '',
                    provinceCode: '',
                    alliedBankCode: '',
                    alliedBankName: '',
                    showageinPop: '',
                    bankImgUrl: '',
                    value: '',
                    bankList: '',
                    configCount: '',
                    cacheCount: '',
                    tip: '',
                    flag: '',
                    fixNumber: '',
                    keyList: '',
                    show: '',
                    selectTime: '',
                    isShowMarkPop: '',
                    showTip: '',
                    typeList: '',
                    radio: '',
                    showStartTime: '',
                    showEndTime: '',
                    personStartTimeValue: '',
                    personEndTimeValue: '',
                    idCardRenzhengShow: '',
                    first: '',
                    total: '',
                    ctx: '',
                    canvas: '',
                    pr: '',
                    width: '',
                    height: '',
                    content: '',
                    timeStr: '',
                    doubleRecordBol: '',
                    signBol: '',
                    signatureUrl: '',
                    userCode: '',
                    isLoadingFaceResult: ''
                };
            },
            onLoad: function (t) {
                this.requestYhq();
            },
            onReady: function () {},
            onShow: function () {},
            methods: {}
        };
    }
);
require('./infoChange/custYhq/custYhq.js');
__wxRoute = 'infoChange/jieSuanChange/jieSuanChange';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'infoChange/jieSuanChange/jieSuanChange.js';
define(
    'infoChange/jieSuanChange/jieSuanChange.js',
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

        require('@api/api').API;
        export default {
            data() {
                return {
                    userName: '',
                    idCardnumber: '',
                    bankName: '',
                    bankNumber: '',
                    bankIcon: ''
                };
            },
            onLoad: function (n) {
                var a = getApp().globalData.custInfo;
                this.setData({
                    bankName: a.bankName,
                    userName: this.hideCode(a.legalPerson, 1, 1),
                    bankNumber: '**** **** **** ' + a.bankAccountNo.substring(a.bankAccountNo.length, a.bankAccountNo.length - 4),
                    idCardnumber: this.hideCode(a.identityNo, 6, 4),
                    bankIcon: a.bankIconUrl
                });
            },
            onReady: function () {},
            onShow: function () {},
            methods: {}
        };
    }
);
require('./infoChange/jieSuanChange/jieSuanChange.js');
__wxRoute = 'infoChange/jieSuanFixList/jieSuanFixList';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'infoChange/jieSuanFixList/jieSuanFixList.js';
define(
    'infoChange/jieSuanFixList/jieSuanFixList.js',
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
            a =
                (e = require('@wc/vantWeapp/toast/toast')) && e.__esModule
                    ? e
                    : {
                          default: e
                      };
        var o = require('@api/api').API;
        export default {
            data() {
                return {
                    showageinPop: !1,
                    cityCode: '',
                    provinceCode: '',
                    alliedBankCode: '',
                    alliedBankName: '请选择',
                    bankCode: '',
                    bankName: '请选择',
                    bankNumber: '',
                    bankImgUrl: '',
                    areaCode: '',
                    areaNmae: '请选择',
                    idCardnumber: '',
                    userName: '',
                    showArea: !1,
                    areaList: {
                        province_list: {},
                        city_list: {}
                    }
                };
            },
            onLoad: function (e) {
                console.log('options = ', e), this.requestSetAccontInfo(), this.addCallBackMessgeTip();
            },
            onUnload: function () {
                uni.disableAlertBeforeUnload();
            },
            methods: {}
        };
    }
);
require('./infoChange/jieSuanFixList/jieSuanFixList.js');
__wxRoute = 'infoChange/bank/bank';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'infoChange/bank/bank.js';
define(
    'infoChange/bank/bank.js',
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

        var a = require('@api/api').API;
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
require('./infoChange/bank/bank.js');
__wxRoute = 'infoChange/alliedBank/alliedBank';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'infoChange/alliedBank/alliedBank.js';
define(
    'infoChange/alliedBank/alliedBank.js',
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

        var a = require('@api/api').API;
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
require('./infoChange/alliedBank/alliedBank.js');
__wxRoute = 'infoChange/addressFix/address/address';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'infoChange/addressFix/address/address.js';
define(
    'infoChange/addressFix/address/address.js',
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

        var e = require('@api/api').API;
        export default {
            data() {
                return {
                    showArea: !1,
                    areaCode: '',
                    provinceCode: '',
                    diquCode: '',
                    areaNmae: '请选择',
                    address: '',
                    areaList: {},
                    configCount: '',
                    cacheCount: '',
                    flag: !1,
                    tip: '',
                    fixNumber: 0,
                    currentProvinceCode: ''
                };
            },
            onLoad: function (e) {
                var o = getApp().globalData.custInfo,
                    t = o.provinceCode;
                console.log('custInfo = ', o),
                    this.setData({
                        currentProvinceCode: t,
                        areaNmae: o.organCodeName,
                        diquCode: o.organCode,
                        address: o.address
                    });
            },
            onShow: function () {
                this.requestFixNumber();
            },
            methods: {}
        };
    }
);
require('./infoChange/addressFix/address/address.js');
__wxRoute = 'infoChange/addressFix/addressFixList/addressFixList';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'infoChange/addressFix/addressFixList/addressFixList.js';
define(
    'infoChange/addressFix/addressFixList/addressFixList.js',
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

        var e = require('@api/api').API;
        getApp();
        export default {
            data() {
                return {
                    keyList: [],
                    selectTime: ''
                };
            },
            onLoad: function (e) {
                this.requestAddressChangeList();
            },
            methods: {}
        };
    }
);
require('./infoChange/addressFix/addressFixList/addressFixList.js');
__wxRoute = 'infoChange/addressFix/addressFixDetail/addressFixDetail';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'infoChange/addressFix/addressFixDetail/addressFixDetail.js';
define(
    'infoChange/addressFix/addressFixDetail/addressFixDetail.js',
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
                    item: {}
                };
            },
            onLoad: function (t) {
                var n = uni.getStorageSync('addressDetail') || {};
                console.log('detail =', n),
                    this.setData({
                        item: n.currentTarget.dataset.item
                    }),
                    console.log('item = ', this.item);
            },
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
require('./infoChange/addressFix/addressFixDetail/addressFixDetail.js');
__wxRoute = 'infoChange/addressFix/addressFixSuccess/addressFixSuccess';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'infoChange/addressFix/addressFixSuccess/addressFixSuccess.js';
define(
    'infoChange/addressFix/addressFixSuccess/addressFixSuccess.js',
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
                    message: '成功',
                    navigationTitle: '修改成功',
                    gobackBtnTitle: '返回首页',
                    defaultImage: 'https://www.krppay.com/skb_assets/bg_success_icon.png'
                };
            },
            onLoad: function (t) {
                console.log(t);
                var o = t.message,
                    e = t.navigationTitle,
                    n = t.gobackBtnTitle,
                    a = t.defaultImage;
                console.log('temp_message =', o),
                    '' != o &&
                        this.setData({
                            message: o
                        }),
                    '' != e &&
                        uni.setNavigationBarTitle({
                            title: e
                        }),
                    '' != n &&
                        this.setData({
                            gobackBtnTitle: n
                        }),
                    '' != a &&
                        this.setData({
                            defaultImage: a
                        });
            },
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
require('./infoChange/addressFix/addressFixSuccess/addressFixSuccess.js');
__wxRoute = 'infoChange/mergeAccont/mergeAccontFix/mergeAccontFix';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'infoChange/mergeAccont/mergeAccontFix/mergeAccontFix.js';
define(
    'infoChange/mergeAccont/mergeAccontFix/mergeAccontFix.js',
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

        var o = require('@api/api').API;
        getApp();
        export default {
            data() {
                return {
                    isAuto: !0,
                    isShowMarkPop: !1,
                    autoMarkTitie: '注意：选择自动到账后，会根据您的每笔交易类型进行正常的自动到账请您确认是否选择自动到账',
                    mergeMarkTitle: '注意：选择合并到账后，您的交易不再会进行自动到账打款，待您选择进行结算时，可进行一笔结算打款'
                };
            },
            onLoad: function (o) {
                var t = getApp().globalData.custInfo,
                    e = 'AUTO' == t.arrivalMethod;
                console.log('custInfo = ', t),
                    this.setData({
                        isAuto: e
                    }),
                    this.queryCustAllInfo();
            },
            methods: {}
        };
    }
);
require('./infoChange/mergeAccont/mergeAccontFix/mergeAccontFix.js');
__wxRoute = 'infoChange/industryType/index/index';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'infoChange/industryType/index/index.js';
define(
    'infoChange/industryType/index/index.js',
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

        var e = require('@api/api').API;
        export default {
            data() {
                return {
                    hyTypeNmae: '若不输入则执行智能账单',
                    hyTypeCode: '',
                    showageinPop: !1,
                    showTip: !1,
                    jyAreaCode: '',
                    customerNo: '',
                    configCount: 0,
                    cacheCount: 0,
                    fixNumber: 0,
                    flag: !0,
                    tip: ''
                };
            },
            onLoad: function (e) {
                var t = getApp().globalData.custInfo;
                console.log('custInfo = ', t),
                    this.setData({
                        hyTypeNmae: null == t.businessTypeName ? '若不输入则执行智能账单' : t.businessTypeName,
                        hyTypeCode: t.businessType,
                        customerNo: t.customerNo,
                        jyAreaCode: t.organCode
                    });
            },
            onShow: function () {
                this.queryEditMccNum();
            },
            methods: {}
        };
    }
);
require('./infoChange/industryType/index/index.js');
__wxRoute = 'infoChange/industryType/industrylist/industrylist';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'infoChange/industryType/industrylist/industrylist.js';
define(
    'infoChange/industryType/industrylist/industrylist.js',
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

        var e = require('@api/api').API;
        getApp();
        Page({
            data() {
                return {
                    keyList: [],
                    selectTime: ''
                };
            },
            onLoad: function (e) {
                this.requestAddressChangeList();
            },
            methods: {}
        });
    }
);
require('./infoChange/industryType/industrylist/industrylist.js');
__wxRoute = 'infoChange/industryType/hyTypeChangeList/hyTypeChangeList';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'infoChange/industryType/hyTypeChangeList/hyTypeChangeList.js';
define(
    'infoChange/industryType/hyTypeChangeList/hyTypeChangeList.js',
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

        var a = require('@api/api').API;
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
                        areaCode: e.areaCode,
                        keyWord: this.value
                    }),
                    this.findByNewLikeHeadBankName();
            },
            methods: {}
        };
    }
);
require('./infoChange/industryType/hyTypeChangeList/hyTypeChangeList.js');
__wxRoute = 'infoChange/userInfoChange/index/index';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'infoChange/userInfoChange/index/index.js';
define(
    'infoChange/userInfoChange/index/index.js',
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

        var e;
        (e = require('../@wc/vantWeapp/dialog/dialog')) && e.__esModule;
        var t = getApp();
        export default {
            data() {
                return {
                    idCardImageV: 'https://www.krppay.com/login_module_idCard.png',
                    idCardFanMianV: 'https://www.krppay.com/login_module_idCardFanMian.png',
                    cameraImageV: 'https://www.krppay.com/login_module_camera.png',
                    bankCardImageV: 'https://www.krppay.com/login_module_bgbank.png',
                    selectIcon: '/static/assets/image/login/select.png',
                    unselectIcon: '/static/assets/image/login/unselect.png',
                    popidFmUrl: 'https://www.krppay.com/login_module_popidfm.png',
                    popidzmUrl: 'https://www.krppay.com/login_module_popidzm.png',
                    radio: '1',
                    personStartTimeValue: '开始时间',
                    personEndTimeValue: '结束时间',
                    personStartTime: new Date(1970, 0, 1).getTime(),
                    personEndTime: new Date(1770, 0, 1).getTime(),
                    minDate: new Date(1970, 0, 1).getTime(),
                    formatter: function (e, t) {
                        return 'year' === e ? ''.concat(t, '年') : 'month' === e ? ''.concat(t, '月') : t;
                    },
                    showStartTime: !1,
                    showEndTime: !1,
                    bankCardnumber: 'xx',
                    scrollHeight: t.globalData.windowHeight - t.globalData.navhegiht - 100,
                    idCardRenzhengShow: !1
                };
            },
            onLoad: function (e) {},
            onReady: function () {},
            onShow: function () {
                console.log(' app.globalData.customheight = ', t.globalData.windowHeight), console.log(' app.globalData.navhegiht = ', t.globalData.navhegiht);
            },
            onHide: function () {},
            onUnload: function () {},
            onPullDownRefresh: function () {},
            onReachBottom: function () {},
            methods: {}
        };
    }
);
require('./infoChange/userInfoChange/index/index.js');
__wxRoute = 'infoChange/userInfoChange/userLiving/userLiving';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'infoChange/userInfoChange/userLiving/userLiving.js';
define(
    'infoChange/userInfoChange/userLiving/userLiving.js',
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
require('./infoChange/userInfoChange/userLiving/userLiving.js');
__wxRoute = 'infoChange/timeSettlement/timeSettlement';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'infoChange/timeSettlement/timeSettlement.js';
define(
    'infoChange/timeSettlement/timeSettlement.js',
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

        var t,
            e =
                (t = require('@wc/vantWeapp/toast/toast')) && t.__esModule
                    ? t
                    : {
                          default: t
                      };
        var a = require('@api/api').API;
        export default {
            data() {
                return {
                    isOpen: !1
                };
            },
            onLoad: function (t) {
                var e = getApp().globalData.custInfo;
                console.log('res.object.settleTimeStatus = ', e.settleTimeStatus);
                var a = 'FALSE' != e.settleTimeStatus;
                console.log('settleTimeStatus = ', a),
                    this.setData({
                        isOpen: a
                    });
            },
            methods: {}
        };
    }
);
require('./infoChange/timeSettlement/timeSettlement.js');
__wxRoute = 'infoChange/debitCard/canvas/canvas';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'infoChange/debitCard/canvas/canvas.js';
define(
    'infoChange/debitCard/canvas/canvas.js',
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

        getApp();
        export default {
            data() {
                return {
                    canvas: '',
                    ctx: '',
                    pr: 0,
                    width: 0,
                    height: 0,
                    first: !0,
                    total: 0,
                    customerName: ''
                };
            },
            onLoad: function (t) {
                this.getSystemInfo(),
                    this.createCanvas(),
                    this.setData({
                        customerName: t.customerName
                    });
            },
            methods: {}
        };
    }
);
require('./infoChange/debitCard/canvas/canvas.js');
__wxRoute = 'infoChange/debitCard/commit/commit';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'infoChange/debitCard/commit/commit.js';
define(
    'infoChange/debitCard/commit/commit.js',
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

        var t = require('@api/api').API;
        getApp();
        export default {
            data() {
                return {
                    content: '',
                    timeStr: '',
                    signaturePath: '',
                    signatureUrl: '',
                    customerName: '',
                    doubleRecordBol: !1,
                    signBol: !1
                };
            },
            onLoad: function (t) {
                t.base64Path &&
                    this.setData({
                        signaturePath: decodeURIComponent(t.base64Path)
                    });
            },
            onReady: function () {},
            onShow: function () {
                this.queryAgreementSign();
            },
            onHide: function () {},
            onUnload: function () {},
            onPullDownRefresh: function () {},
            onReachBottom: function () {},
            methods: {}
        };
    }
);
require('./infoChange/debitCard/commit/commit.js');
__wxRoute = 'infoChange/debitCard/faceCheck/faceCheck';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'infoChange/debitCard/faceCheck/faceCheck.js';
define(
    'infoChange/debitCard/faceCheck/faceCheck.js',
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

        var e = require('../../../mp_ecard_sdk/main'),
            o = require('@api/api').API;
        export default {
            data() {
                return {
                    isLoadingFaceResult: !1,
                    latitude: '',
                    longitude: '',
                    loading: !1,
                    show: !1,
                    loading: !1,
                    show: !1
                };
            },
            onLoad: function (e) {
                e.latitude &&
                    e.longitude &&
                    (console.log('onLoad----\x3elongitude='.concat(e.longitude, ',latitude=').concat(e.latitude)),
                    this.setData({
                        latitude: e.latitude,
                        longitude: e.longitude
                    }));
            },
            onReady: function () {},
            onShow: function () {},
            onHide: function () {},
            onUnload: function () {},
            methods: {
                onTabChange: function (t) {
                    var e = t.detail.name;
                    'use' == e
                        ? (this.setData({
                              type: 'use',
                              usePageNum: 1
                          }),
                          this.requestUseRecord(this.couponNo))
                        : 'history' == e &&
                          (this.setData({
                              type: 'history',
                              historyPageNum: 1
                          }),
                          this.requestHistoryRecord());
                },

                requestYhq: function () {
                    var e = this,
                        o = this;
                    t.getYhqEffect({}).then(function (t) {
                        if ((console.log('res =', t), null == t.object.list)) o.couponNo = '';
                        else {
                            var s = t.object.list[0];
                            o.setData({
                                couponInfo: s,
                                couponNo: s.couponNo
                            }),
                                o.requestUseRecord(e.couponNo);
                        }
                    });
                },

                requestUseRecord: function (e) {
                    var o = this,
                        s = this;
                    t.getYhqUseRecord({
                        couponNo: e,
                        pageSize: 10,
                        pageNo: this.usePageNum
                    }).then(function (t) {
                        console.log('res =', t),
                            200 == t.code
                                ? null == t.object.list
                                    ? s.setData({
                                          loading: !1
                                      })
                                    : (1 == o.usePageNum &&
                                          s.setData({
                                              loading: !1,
                                              useList: []
                                          }),
                                      s.setData({
                                          loading: !1,
                                          useList: s.useList.concat(t.object.list)
                                      }))
                                : s.setData({
                                      loading: !1
                                  });
                    });
                },

                requestHistoryRecord: function () {
                    var e = this,
                        o = this;
                    t.getHistoryYhq({
                        pageSize: 10,
                        pageNo: this.historyPageNum
                    }).then(function (t) {
                        console.log('res =', t),
                            200 == t.code
                                ? null == t.object.list
                                    ? o.setData({
                                          loading: !1
                                      })
                                    : (1 == e.historyPageNum &&
                                          o.setData({
                                              loading: !1,
                                              historyList: []
                                          }),
                                      o.setData({
                                          loading: !1,
                                          historyList: o.historyList.concat(t.object.list),
                                          totalCount: t.object.totalCount
                                      }))
                                : o.setData({
                                      loading: !1
                                  });
                    });
                },

                refresh: function () {
                    console.log('下拉刷新 active =', this.active),
                        'use' == this.type
                            ? (this.setData({
                                  usePageNum: 1
                              }),
                              this.requestUseRecord(this.couponNo))
                            : 'history' == this.type &&
                              (this.setData({
                                  historyPageNum: 1
                              }),
                              this.requestHistoryRecord());
                },

                scrollToLower: function () {
                    console.log('上拉加载active =', this.active),
                        'use' == this.type
                            ? (this.setData({
                                  usePageNum: this.usePageNum + 1
                              }),
                              this.requestYhq())
                            : 'history' == this.type &&
                              (this.setData({
                                  historyPageNum: this.historyPageNum + 1
                              }),
                              this.requestHistoryRecord());
                },

                clickFix: function () {
                    console.log('修改'),
                        uni.navigateTo({
                            url: 'pages/infoChange/jieSuanFixList/jieSuanFixList?bankInfo'
                        });
                },

                hideCode: function (n, a, e) {
                    for (var t = n.length - a - e, i = '', o = 0; o < t; o++) i += '*';
                    return 2 == n.length ? n.substring(0, 1) + '*' : n.substring(0, a) + i + n.substring(n.length - e);
                },

                addCallBackMessgeTip: function () {
                    uni.enableAlertBeforeUnload({
                        title: '温馨提示',
                        message: '退出后，您的修改将不会被保存，请您慎重选择',
                        success: function (e) {
                            console.log('成功：', e);
                        },
                        fail: function (e) {
                            console.log('失败：', e);
                        }
                    });
                },

                onCloseArea: function () {
                    this.setData({
                        showArea: !1
                    });
                },

                onConfirmArea: function (e) {
                    console.log('event', e);
                    this.setData({
                        areaCode: e.detail.values[1].code,
                        provinceCode: e.detail.values[0].code,
                        showArea: !1,
                        areaNmae: e.detail.values[0].name + '/' + e.detail.values[1].name,
                        alliedBankCode: '',
                        alliedBankName: '请选择'
                    });
                },

                addressDataChange: function (e) {
                    console.log('event = ', e);
                    this.setData({
                        areaCode: e.detail.cityCode,
                        provinceCode: e.detail.provinceCode,
                        showArea: !1,
                        areaNmae: e.detail.addressString,
                        alliedBankCode: '',
                        alliedBankName: '请选择'
                    });
                },

                hideCode: function (e, a, o) {
                    for (var n = e.length - a - o, t = '', i = 0; i < n; i++) t += '*';
                    return 2 == e.length ? e.substring(0, 1) + '*' : e.substring(0, a) + t + e.substring(e.length - o);
                },

                clickConfirmFix: function () {
                    console.log('点击确认修改,弹窗提示'),
                        this.setData({
                            showageinPop: !0
                        });
                },

                clickPopConfirm: function () {
                    console.log('点击了弹窗的确认按钮'), this.requestFixSet();
                },

                clickCamera: function () {
                    this.wxSelectImage();
                },

                clickRow: function (e) {
                    var a = e.currentTarget.dataset.title;
                    console.log(a),
                        '开户银行' == a
                            ? uni.navigateTo({
                                  url: 'pages/infoChange/bank/bank'
                              })
                            : '开户所在地' == a
                            ? this.setData({
                                  showArea: !0
                              })
                            : '开户支行' == a &&
                              uni.navigateTo({
                                  url: 'pages/infoChange/alliedBank/alliedBank?areaCode='.concat(this.areaCode, '&bankCode=').concat(this.bankCode)
                              });
                },

                requestFixSet: function () {
                    var e = RegExp(/\*/);
                    if (this.bankNumber.match(e))
                        uni.showToast({
                            title: '请输入完整的银行卡号',
                            icon: 'none'
                        });
                    else {
                        var n = {
                            bankAccountNo: this.bankNumber,
                            bankCode: this.bankCode,
                            areaCode: this.areaCode,
                            alliedBankCode: this.alliedBankCode,
                            bankCardImgUrl: this.bankImgUrl
                        };
                        console.log('params =', n),
                            o.querySettleChange(n).then(function (e) {
                                if ((console.log('res = ', e), 200 == e.code))
                                    uni.disableAlertBeforeUnload(),
                                        uni.showToast({
                                            title: '修改结算卡成功',
                                            icon: 'none',
                                            duration: 2e3,
                                            success: function (e) {
                                                setTimeout(function () {
                                                    uni.navigateBack({
                                                        delta: 2
                                                    });
                                                }, 2e3);
                                            }
                                        });
                                else {
                                    var o = e.message;
                                    (0, a.default)(o);
                                }
                            });
                    }
                },

                requestSetAccontInfo: function () {
                    var e = getApp().globalData.custInfo;
                    console.log('custInfo = ', e),
                        this.setData({
                            bankName: e.bankName,
                            userName: this.hideCode(e.legalPerson, 1, 1),
                            bankNumber: this.hideCode(e.bankAccountNo, 6, 4),
                            idCardnumber: this.hideCode(e.identityNo, 6, 4),
                            bankCode: e.bankCode,
                            alliedBankName: e.alliedBankName,
                            alliedBankCode: e.alliedBankCode,
                            areaNmae: e.areaName,
                            areaCode: e.areaCode
                        });
                },

                wxSelectImage: function () {
                    var e = this;
                    uni.chooseMedia({
                        count: 1,
                        sizeType: ['original', 'compressed'],
                        sourceType: ['album', 'camera'],
                        success: function (a) {
                            var n = a.tempFiles[0].tempFilePath;
                            uni.showLoading({
                                title: '加载中',
                                mask: !0
                            }),
                                uni.uploadFile({
                                    url: o.POSTBaseUrl() + '/pub/img/uploadImg',
                                    filePath: n,
                                    name: 'pic',
                                    formData: {
                                        imgType: '3',
                                        imgFormat: 'JPG'
                                    },
                                    header: {
                                        'content-type': 'multipart/form-data'
                                    },
                                    success: function (a) {
                                        var o = a.data,
                                            n = JSON.parse(o);
                                        console.log('jsonData = ', n),
                                            e.setData({
                                                bankNumber: n.object.bankCard,
                                                bankImgUrl: n.object.imgUrl,
                                                alliedBankCode: '',
                                                alliedBankName: '请选择',
                                                areaCode: '',
                                                areaNmae: '请选择',
                                                bankCode: '',
                                                bankName: '请选择'
                                            });
                                    },
                                    complete: function (e) {
                                        uni.hideLoading();
                                    }
                                });
                        }
                    });
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

                clickChageList: function () {
                    console.log('点击了变更记录'),
                        uni.navigateTo({
                            url: 'pages/infoChange/addressFix/addressFixList/addressFixList'
                        });
                },

                requestFixNumber: function () {
                    var o = this;
                    e.queryCustEditAreaInfo({
                        customerNo: this.customerNo
                    }).then(function (e) {
                        console.log('res =', e),
                            200 == e.code
                                ? o.setData({
                                      configCount: e.object.configCount,
                                      cacheCount: e.object.cacheCount,
                                      tip: e.object.tip,
                                      flag: e.object.flag,
                                      fixNumber: e.object.configCount - e.object.cacheCount
                                  })
                                : uni.showToast({
                                      title: e.message,
                                      icon: 'none'
                                  });
                    });
                },

                requestFixAddress: function () {
                    e.queryFixCustDetailAddress({
                        address: this.address,
                        organCode: this.diquCode
                    }).then(function (e) {
                        console.log('res =', e),
                            200 == e.code
                                ? uni.showToast({
                                      title: '地址变更成功',
                                      icon: 'none',
                                      duration: 2e3,
                                      success: function (e) {
                                          setTimeout(function () {
                                              uni.navigateBack({
                                                  delta: 1
                                              });
                                          }, 2e3);
                                      }
                                  })
                                : uni.showToast({
                                      title: e.message,
                                      icon: 'none'
                                  });
                    });
                },

                clickConfirmFix: function () {
                    if ((console.log('修改'), this.address.length < 6))
                        uni.showToast({
                            title: '详细地址不能小于6位',
                            icon: 'none'
                        });
                    else {
                        var e = RegExp(/\号/);
                        this.address.match(e)
                            ? this.reuqestCheckAddressMcc()
                            : uni.showToast({
                                  title: '详细地址请精确到门牌号',
                                  icon: 'none'
                              });
                    }
                },

                reuqestCheckAddressMcc: function () {
                    var o = getApp().globalData.custInfo,
                        t = this;
                    e.queryAreaIsContainMcc({
                        customerNo: o.customerNo,
                        organCode: this.diquCode
                    }).then(function (e) {
                        if ((console.log('res =', e), 200 == e.code)) {
                            var o = e.object.flag,
                                a = e.object.tip;
                            1 == o
                                ? t.checkFixNumber()
                                : uni.showModal({
                                      title: '温馨提示',
                                      content: a,
                                      showCancel: !0,
                                      cancelText: '取消',
                                      cancelColor: '#999999',
                                      confirmText: '确定',
                                      confirmColor: '#EF4034',
                                      success: function (e) {
                                          e.confirm ? (console.log('点击了确定'), t.checkFixNumber()) : e.cancel && console.log('点击了取消');
                                      }
                                  });
                        } else
                            uni.showToast({
                                title: e.message,
                                icon: 'none'
                            });
                    });
                },

                checkFixNumber: function () {
                    var e = this;
                    1 == this.flag
                        ? e.requestFixAddress()
                        : (console.log('fixNumber = ', e.fixNumber),
                          e.fixNumber <= 0
                              ? uni.showModal({
                                    title: '温馨提示',
                                    content: '当月剩余0次修改机会,您无法修改',
                                    confirmText: '确定',
                                    showCancel: !1,
                                    confirmColor: '#EF4034'
                                })
                              : e.fixNumber > 0 &&
                                uni.showModal({
                                    title: '温馨提示',
                                    content: '当月剩余' + e.fixNumber + '次修改机会,请谨慎核实信息是否无误',
                                    confirmText: '确定',
                                    showCancel: !0,
                                    confirmColor: '#EF4034',
                                    cancelColor: '#333333',
                                    success: function (o) {
                                        o.confirm && e.requestFixAddress();
                                    }
                                }));
                },

                onClickAreaRow: function () {
                    this.setData({
                        showArea: !0
                    });
                },

                onConfirmArea: function (e) {
                    console.log('event', e);
                    this.setData({
                        areaCode: e.detail.values[1].code,
                        provinceCode: e.detail.values[0].code,
                        diquCode: e.detail.values[2].code,
                        showArea: !1,
                        areaNmae: e.detail.values[0].name + '/' + e.detail.values[1].name + '/' + e.detail.values[2].name
                    });
                },

                addressDataChange: function (e) {
                    console.log('event', e);
                    this.setData({
                        areaCode: e.detail.areaCode,
                        provinceCode: e.detail.provinceCode,
                        diquCode: e.detail.areaCode,
                        showArea: !1,
                        areaNmae: e.detail.addressString
                    });
                },

                onCloseArea: function () {
                    this.setData({
                        showArea: !1
                    });
                },

                requestAddressChangeList: function () {
                    var t = this;
                    e.queryChangeList({
                        customerNo: this.customerNo,
                        pageSize: 10,
                        pageNo: 1,
                        monthStr: this.selectTime,
                        changeType: 'ADDRESS'
                    }).then(function (e) {
                        console.log('res =', e),
                            200 == e.code
                                ? (e.object.list.forEach(function (e) {
                                      (e.dataNew = JSON.parse(e.dataNewJson) || {}),
                                          (e.dataOld = JSON.parse(e.dataOldJson) || {}),
                                          (e.ymTime = e.updateTime.substring(5, e.updateTime.length));
                                  }),
                                  t.setData({
                                      keyList: e.object.list
                                  }))
                                : uni.showToast({
                                      title: e.message,
                                      icon: 'none'
                                  });
                    });
                },

                refresh: function () {
                    this.setData({
                        loading: !1
                    });
                },

                clickTimeSelect: function () {
                    this.setData({
                        show: !0
                    });
                },

                timeDataChange: function (e) {
                    console.log('选择的时间 = ', e.detail.selectlineYMDTime),
                        this.setData({
                            show: !1,
                            selectTime: e.detail.selectlineYMDTime
                        }),
                        this.requestAddressChangeList();
                },

                formatYYYYMM: function (e) {
                    e = new Date(e.replace(/-/g, '/'));
                    var t = (e = new Date(e)).getFullYear();
                    return ''.concat(t, '-').concat(e.getMonth() + 1);
                },

                dismissPop: function () {
                    this.setData({
                        show: !1
                    });
                },

                clickRow: function (e) {
                    console.log('item ', e),
                        uni.setStorageSync('addressDetail', e),
                        uni.navigateTo({
                            url: 'pages/infoChange/addressFix/addressFixDetail/addressFixDetail'
                        });
                },

                clickConfirmGohome: function () {
                    console.log('返回首页');
                },

                queryCustAllInfo: function () {
                    var t = this;
                    o.queryCustAllInfo().then(function (o) {
                        console.log('res = ', o), (getApp().globalData.custInfo = o.object);
                        var e = 'AUTO' == o.object.arrivalMethod;
                        console.log('custInfo = ', o.object),
                            t.setData({
                                isAuto: e
                            });
                    });
                },

                clickConfirmFix: function () {
                    this.setData({
                        isShowMarkPop: !0
                    });
                },

                clickPopConfirm: function () {
                    console.log('弹窗确认按钮'), this.requestChange();
                },

                onClickRowAuto: function () {
                    this.setData({
                        isAuto: !0
                    });
                },

                onClickRowMerge: function () {
                    this.setData({
                        isAuto: !1
                    });
                },

                requestChange: function () {
                    var t = this,
                        e = this.isAuto ? 'AUTO' : 'MERGE';
                    o.updateArrivalMethodConfig({
                        arrivalMethod: e
                    }).then(function (o) {
                        200 == o.code
                            ? 1 == t.isAuto
                                ? uni.showToast({
                                      title: '修改到账方式成功',
                                      icon: 'none',
                                      duration: 2e3,
                                      success: function (o) {
                                          setTimeout(function () {
                                              uni.navigateBack({
                                                  delta: 1
                                              });
                                          }, 2e3);
                                      }
                                  })
                                : uni.showModal({
                                      title: '变更成功',
                                      content: '1：您的结算订单将多笔合并入账到您的结算账户；\n 2：您可以在结算账户中自由提现；\n 3：结算账户在您的个人中心——我的钱包查看 \n',
                                      showCancel: !0,
                                      confirmText: '确定',
                                      confirmColor: '#EF4034',
                                      cancelText: '去看看',
                                      cancelColor: '#333333',
                                      success: function (o) {
                                          o.confirm
                                              ? (console.log('用户点击确定'), uni.navigateBack())
                                              : o.cancel &&
                                                (console.log('用户点击去看看,进入钱包'),
                                                uni.navigateTo({
                                                    url: '/toolsBox/wallet/wallet'
                                                }));
                                      }
                                  })
                            : uni.showToast({
                                  title: o.message,
                                  icon: 'none'
                              });
                    });
                },

                callBackSelect: function () {
                    var o = getCurrentPages();
                    console.log('arr = ', o);
                    var t = o.length >= 2 ? o[o.length - 2] : void 0;
                    console.log('lastPage = ', t),
                        t &&
                            'infoChange/changeList/changeList' == t.route &&
                            (console.log('进入了逻辑判断'), t.updataAccontType(this.isAuto ? '自动到账' : '合并到账'), uni.navigateBack());
                },

                clickConfirmFix: function () {
                    console.log('修改'),
                        this.fixNumber <= 0
                            ? this.setData({
                                  showTip: !0
                              })
                            : 1 == this.flag && this.requestUpdataMcc();
                },

                onClickHyYtypeRow: function () {
                    uni.navigateTo({
                        url: 'pages/infoChange/industryType/hyTypeChangeList/hyTypeChangeList?areaCode=' + this.jyAreaCode
                    });
                },

                clickChageList: function () {
                    uni.navigateTo({
                        url: 'pages/infoChange/industryType/industrylist/industrylist?areaCode=' + this.hyTypeCode
                    });
                },

                clearSelect: function () {
                    console.log('点击了清除选择'),
                        this.setData({
                            hyTypeCode: '',
                            hyTypeNmae: '若不输入则执行智能账单'
                        });
                },

                clickPopConfirm: function () {
                    console.log('点击了弹窗'), this.requestUpdataMcc();
                },

                clickPopTipConfirm: function () {
                    this.setData({
                        showTip: !1
                    });
                },

                requestUpdataMcc: function () {
                    var t = this;
                    return new Promise(function (o, n) {
                        e.queryFixMccInfo({
                            businessType: t.hyTypeCode,
                            changeType: 'MCC_CATEGORY'
                        }).then(function (e) {
                            200 == e.code
                                ? uni.showToast({
                                      title: '行业变更成功',
                                      icon: 'none',
                                      duration: 2e3,
                                      success: function (e) {
                                          setTimeout(function () {
                                              uni.navigateBack({
                                                  delta: 1
                                              });
                                          }, 2e3);
                                      }
                                  })
                                : uni.showToast({
                                      title: e.message,
                                      icon: 'none'
                                  });
                        });
                    });
                },

                queryEditMccNum: function () {
                    var t = this;
                    e.queryCustEditMccInfo({}).then(function (e) {
                        console.log('商户macc  =', e),
                            200 == e.code
                                ? t.setData({
                                      cacheCount: e.object.cacheCount,
                                      configCount: e.object.configCount,
                                      flag: e.object.flag,
                                      tip: e.object.tip,
                                      fixNumber: e.object.configCount - e.object.cacheCount
                                  })
                                : uni.showToast({
                                      title: e.message,
                                      icon: 'none'
                                  });
                    });
                },

                requestAddressChangeList: function () {
                    var t = this;
                    e.queryChangeList({
                        customerNo: this.customerNo,
                        pageSize: 10,
                        pageNo: 1,
                        monthStr: this.selectTime,
                        changeType: 'MCC_CATEGORY'
                    }).then(function (e) {
                        console.log('res =', e),
                            200 == e.code
                                ? (e.object.list.forEach(function (e) {
                                      (e.dataNew = JSON.parse(e.dataNewJson) || {}),
                                          (e.dataOld = JSON.parse(e.dataOldJson) || {}),
                                          (e.ymTime = e.updateTime.substring(5, e.updateTime.length)),
                                          console.log('行业变更记录 - item.mccName', e.mccName);
                                  }),
                                  t.setData({
                                      keyList: e.object.list
                                  }))
                                : uni.showToast({
                                      title: e.message,
                                      icon: 'none'
                                  });
                    });
                },

                refresh: function () {
                    this.setData({
                        loading: !1
                    });
                },

                clickTimeSelect: function () {
                    this.setData({
                        show: !0
                    });
                },

                timeDataChange: function (e) {
                    console.log('选择的时间 = ', e.detail.selectlineYMDTime),
                        this.setData({
                            show: !1,
                            selectTime: e.detail.selectlineYMDTime
                        }),
                        this.requestAddressChangeList();
                },

                dismissPop: function () {
                    this.setData({
                        show: !1
                    });
                },

                clickRow: function () {},

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
                            hyTypeCode: t,
                            hyTypeNmae: a
                        }),
                        uni.navigateBack({
                            delta: 1
                        }));
                },

                dataChange: function (e) {
                    console.log('监听xxx'), console.log('点击了相机xxxxx', e);
                },

                onChange: function (e) {
                    console.log(e),
                        this.setData({
                            radio: e.detail
                        });
                },

                clickRow: function (e) {
                    var t = e.target.dataset.rowtitle;
                    console.log(t);
                },

                showidCardDateSelect: function () {
                    this.setData({
                        showStartTime: !0,
                        showEndTime: !1
                    }),
                        console.log('弹出身份证开始时间弹窗');
                },

                showidCardDateEndSelect: function () {
                    this.setData({
                        showStartTime: !1,
                        showEndTime: !0
                    }),
                        console.log('弹出身份证到期时间弹窗');
                },

                confirmStartTime: function (e) {
                    console.log('开始时间点击了确定 =', e.detail);
                    var t = this.getDateString(e.detail);
                    console.log('开始selectTime = ', t),
                        this.setData({
                            showStartTime: !1,
                            personStartTimeValue: t
                        });
                },

                cancelStartTime: function () {
                    this.setData({
                        showStartTime: !1
                    });
                },

                confirmEndTime: function (e) {
                    console.log('截止时间点击了确定 =', e.detail);
                    var t = this.getDateString(e.detail);
                    console.log('selectTime = ', t),
                        this.setData({
                            showEndTime: !1,
                            personEndTimeValue: t
                        });
                },

                cancelEndTime: function () {
                    this.setData({
                        showEndTime: !1
                    });
                },

                clickCommit: function () {
                    this.setData({
                        idCardRenzhengShow: !0
                    }),
                        uni.navigateTo({
                            url: 'pages/infoChange/userInfoChange/userLiving/userLiving'
                        });
                },

                getDateString: function (e) {
                    if ('开始时间' == e || '结束时间' == e || '长期' == e) return e;
                    console.log('stamp', parseInt(e));
                    var t = new Date(parseInt(e)),
                        n = t.getMonth() + 1 < 10 ? '0' + (t.getMonth() + 1) : t.getMonth() + 1,
                        o = t.getDate() < 10 ? '0' + t.getDate() : t.getDate();
                    return t.getFullYear() + '-' + n + '-' + o;
                },

                clickFaceScan: function () {
                    uni.navigateTo({
                        url: 'pages/infoChange/addressFix/addressFixSuccess/addressFixSuccess?message=信息提交完成，等待运营人员审核&navigationTitle=活体验证'
                    });
                },

                clickConfirmFix: function () {
                    console.log('点击了修改'), this.queryFixSettle();
                },

                queryFixSettle: function () {
                    var t = this,
                        s = 1 == this.isOpen ? 'FALSE' : 'TRUE';
                    a.queryFixSettleTime({
                        settleTimeStatus: s
                    }).then(function (a) {
                        var s;
                        (console.log('商户macc  =', a), 200 == a.code)
                            ? ((s = t.isOpen ? '关闭申请已提交，次日生效' : '开通申请已提交，次日生效'),
                              uni.showToast({
                                  title: s,
                                  icon: 'none',
                                  duration: 2e3,
                                  success: function (t) {
                                      setTimeout(function () {
                                          uni.navigateBack({
                                              delta: 1
                                          });
                                      }, 2e3);
                                  }
                              }))
                            : (0, e.default)(a.message);
                    });
                },

                start: function (t) {
                    this.first &&
                        (this.clearClick(),
                        this.setData({
                            first: !1
                        })),
                        this.ctx.beginPath(),
                        this.ctx.moveTo(t.changedTouches[0].x, t.changedTouches[0].y);
                },

                move: function (t) {
                    this.ctx.lineTo(t.changedTouches[0].x, t.changedTouches[0].y), this.ctx.stroke();
                },

                end: function (t) {
                    this.setData({
                        total: this.total + 1
                    }),
                        console.log(this.total);
                },

                error: function (t) {
                    console.log('画布触摸错误' + t);
                },

                createCanvas: function () {
                    var t = this,
                        a = this.pr;
                    uni.createSelectorQuery()
                        .in(uni)
                        .select('#canvas')
                        .fields({
                            node: !0,
                            size: !0
                        })
                        .exec(function (e) {
                            var i = e[0].node,
                                s = i.getContext('2d');
                            (i.width = t.width * a),
                                (i.height = t.height * a),
                                s.scale(a, a),
                                (s.lineGap = 'round'),
                                (s.lineJoin = 'round'),
                                (s.lineWidth = 8),
                                (s.font = '100px Arial'),
                                (s.fillStyle = '#ecf0ef'),
                                t.setData({
                                    ctx: s,
                                    canvas: i
                                });
                        });
                },

                getSystemInfo: function () {
                    var t = this;
                    uni.getSystemInfo({
                        success: function (a) {
                            t.setData({
                                pr: a.pixelRatio,
                                width: a.windowWidth,
                                height: a.windowHeight - 68
                            });
                        }
                    });
                },

                clearClick: function () {
                    this.ctx.clearRect(0, 0, this.width, this.height),
                        this.setData({
                            total: 0
                        });
                },

                saveClick: function () {
                    0 != this.total
                        ? this.total < 2
                            ? uni.showToast({
                                  title: '签名失败，请按字迹重新书写',
                                  icon: 'none'
                              })
                            : uni.canvasToTempFilePath({
                                  x: 0,
                                  y: 0,
                                  width: this.width,
                                  height: this.height,
                                  destWidth: this.width * this.pr,
                                  destHeight: this.height * this.pr,
                                  canvasId: 'canvas',
                                  canvas: this.canvas,
                                  fileType: 'png',
                                  success: function (t) {
                                      uni.redirectTo({
                                          url: 'pages/infoChange/debitCard/commit/commit?base64Path='.concat(
                                              encodeURIComponent(uni.getFileSystemManager().readFileSync(t.tempFilePath, 'base64'))
                                          )
                                      });
                                  }
                              })
                        : uni.showToast({
                              title: '请按字迹书写签名',
                              icon: 'none'
                          });
                },

                eventConfirmNextStep: function () {
                    this.doubleRecordBol
                        ? this.signaturePath || this.signatureUrl
                            ? this.reqSaveSignData()
                            : this.jumpSignPage()
                        : uni.showToast({
                              title: '暂不需要进行双录！',
                              icon: 'none'
                          });
                },

                eventRewrite: function () {
                    this.jumpSignPage();
                },

                queryAgreementSign: function () {
                    var e = this;
                    t.getSignAgreementData({
                        doubleRecordType: 'DEBIT_CARD_T0'
                    }).then(function (t) {
                        200 == t.code
                            ? e.setData({
                                  content: t.object.promise,
                                  timeStr: t.object.signTime || '',
                                  doubleRecordBol: t.object.isDoubleRecord || !1,
                                  signBol: t.object.success || !1,
                                  signatureUrl: t.object.signBase64,
                                  customerName: t.object.customerName
                              })
                            : t.message &&
                              uni.showToast({
                                  title: t.message,
                                  icon: 'none'
                              });
                    });
                },

                jumpSignPage: function () {
                    uni.reLaunch({
                        url: 'pages/infoChange/debitCard/canvas/canvas?customerName='.concat(this.customerName)
                    });
                },

                reqSaveSignData: function () {
                    var t = this;
                    uni.getFuzzyLocation
                        ? uni.getSetting({
                              success: function (e) {
                                  null != e.authSetting['scope.userFuzzyLocation'] && 1 != e.authSetting['scope.userFuzzyLocation']
                                      ? uni.showModal({
                                            title: '',
                                            content: '为更好的服务，快速到账服务需要获取您的地理位置，请确认授权',
                                            success: function (e) {
                                                e.cancel
                                                    ? (uni.showToast({
                                                          title: '您已拒绝授权',
                                                          icon: 'none'
                                                      }),
                                                      setTimeout(function () {
                                                          uni.navigateBack();
                                                      }, 2e3))
                                                    : e.confirm &&
                                                      uni.openSetting({
                                                          success: function (e) {
                                                              1 == e.authSetting['scope.userFuzzyLocation']
                                                                  ? t.getLocation(e)
                                                                  : (uni.showToast({
                                                                        title: '授权失败',
                                                                        icon: 'none'
                                                                    }),
                                                                    setTimeout(function () {
                                                                        uni.navigateBack();
                                                                    }, 1500));
                                                          }
                                                      });
                                            }
                                        })
                                      : (null == e.authSetting['scope.userFuzzyLocation'] || e.authSetting['scope.userFuzzyLocation']) && t.getLocation(e);
                              }
                          })
                        : uni.showModal({
                              title: '提示',
                              content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
                          });
                },

                getLocation: function () {
                    var e = this;
                    uni.authorize({
                        scope: 'scope.userFuzzyLocation',
                        success: function (n) {
                            'authorize:ok' == n.errMsg &&
                                uni.getFuzzyLocation({
                                    type: 'wgs84',
                                    success: function (n) {
                                        var o = n.latitude,
                                            a = n.longitude;
                                        console.log('longitude='.concat(a, ',latitude=').concat(o));
                                        var i = {
                                            isLogin: !0,
                                            authString: e.signaturePath || '',
                                            doubleRecordType: 'DEBIT_CARD_T0'
                                        };
                                        t.saveCheckSign(i).then(function (t) {
                                            200 == t.code
                                                ? (e.setData({
                                                      signaturePath: ''
                                                  }),
                                                  uni.navigateTo({
                                                      url: 'pages/infoChange/debitCard/faceCheck/faceCheck?latitude='.concat(o, '&longitude=').concat(a)
                                                  }),
                                                  e.queryAgreementSign())
                                                : t.message &&
                                                  uni.showToast({
                                                      title: t.message,
                                                      icon: 'none'
                                                  });
                                        });
                                    }
                                });
                        }
                    });
                },

                compareVersion: function (t, e) {
                    (t = t.split('.')), (e = e.split('.'));
                    for (var n = Math.max(t.length, e.length); t.length < n; ) t.push('0');
                    for (; e.length < n; ) e.push('0');
                    for (var o = 0; o < n; o++) {
                        var a = parseInt(t[o]),
                            i = parseInt(e[o]);
                        if (a > i) return 1;
                        if (a < i) return -1;
                    }
                    return 0;
                },

                userLogin: function () {
                    var e = this;
                    uni.login({
                        success: function (o) {
                            console.log('xresult =', o),
                                'login:ok' === o.errMsg &&
                                    e.setData({
                                        userCode: o.code
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

                clickFaceScan: function () {
                    this.getEdiToken();
                },

                getEdiToken: function () {
                    var e = this;
                    o.getETokenParams({
                        doubleRecordType: 'DEBIT_CARD_T0'
                    }).then(function (o) {
                        if ((console.log('获取token接口res = ', o), 200 == o.code)) {
                            var t = o.object;
                            console.log('token = ', t), e.goSDK(t);
                        } else
                            uni.showToast({
                                title: o.message,
                                icon: 'none'
                            });
                    });
                },

                goSDK: function (o) {
                    var t = this;
                    (0, e.startEid)({
                        data: {
                            token: o
                        },
                        verifyDoneCallback: function (e) {
                            console.log(e), t.queryFaceCheckResult(e.token);
                        }
                    });
                },

                queryFaceCheckResult: function (e) {
                    var t = this;
                    this.setData({
                        isLoadingFaceResult: !0
                    });
                    var n = ''.concat(this.longitude, ',').concat(this.latitude);
                    o.saveCheckFace({
                        etoken: e,
                        doubleRecordType: 'DEBIT_CARD_T0',
                        gpsOrStation: n
                    }).then(function (e) {
                        t.setData({
                            isLoadingFaceResult: !1
                        }),
                            200 == e.code
                                ? uni.showModal({
                                      title: '温馨提示',
                                      content: '人身核验成功',
                                      showCancel: !1,
                                      confirmColor: '#FCC91A',
                                      confirmText: '返回首页',
                                      success: function (e) {
                                          e.confirm &&
                                              uni.switchTab({
                                                  url: '/pages/home/home'
                                              });
                                      }
                                  })
                                : uni.showToast({
                                      title: e.message || '人脸数据未能保存成功，请重试！',
                                      icon: 'none'
                                  });
                    });
                }
            }
        };
    }
);
require('./infoChange/debitCard/faceCheck/faceCheck.js');
