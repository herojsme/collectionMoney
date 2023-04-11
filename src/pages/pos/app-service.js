/*v0.5vv_20200413_syb_scopedata*/ global.__wcc_version__ = 'v0.5vv_20200413_syb_scopedata';
global.__wcc_version_info__ = {
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
            Z([
                [2, '&&'],
                [[7], [3, 'doubleRecordBol']],
                [
                    [2, '||'],
                    [[7], [3, 'signaturePath']],
                    [[7], [3, 'signatureUrl']]
                ]
            ]);
            Z([3, 'eventConfirmNextStep']);
            Z([3, 'confirm_button']);
            Z([3, 'info']);
            Z(z[2]);
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
            Z([3, 'goHome']);
            Z([3, 'confirm_button']);
            Z([3, 'info']);
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
            Z([
                [2, '!='],
                [[6], [[7], [3, 'list']], [3, 'length']],
                [1, 0]
            ]);
            Z([3, 'bind_list']);
            Z([3, 'toHistory']);
            Z([3, 'right']);
            Z([3, 'arrow']);
            Z([[7], [3, 'list']]);
            Z([3, 'index']);
            Z([3, 'bind_cell_box']);
            Z([3, 'rt_cell']);
            Z([
                [2, '!='],
                [[6], [[7], [3, 'item']], [3, 'auditStatus']],
                [1, 'CHECKING']
            ]);
            Z([3, 'showReason']);
            Z([3, 'pos_operate']);
            Z([[6], [[7], [3, 'item']], [3, 'posTusn']]);
            Z(z[3]);
            Z([
                [2, '=='],
                [[6], [[7], [3, 'item']], [3, 'auditStatus']],
                [1, 'CHECKING']
            ]);
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
            Z([3, 'areaCLose']);
            Z([3, 'unbind']);
            Z([3, '#EF4034']);
            Z([[7], [3, 'show']]);
            Z([3, '申请解绑']);
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
            Z([
                [2, '&&'],
                [[7], [3, 'doubleRecordBol']],
                [
                    [2, '||'],
                    [[7], [3, 'signaturePath']],
                    [[7], [3, 'signatureUrl']]
                ]
            ]);
            Z([3, 'eventConfirmNextStep']);
            Z([3, 'confirm_button']);
            Z([3, 'info']);
            Z(z[2]);
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
        var xC = _n('view');
        _rz(z, xC, 'class', 0, e, s, gg);
        var oD = _v();
        _(xC, oD);
        if (_oz(z, 1, e, s, gg)) {
            oD.wxVkey = 1;
            var fE = _v();
            _(oD, fE);
            if (_oz(z, 2, e, s, gg)) {
                fE.wxVkey = 1;
            }
            var hG = _mz(z, 'van-button', ['round', -1, 'bind:click', 3, 'customClass', 1, 'type', 2], [], e, s, gg);
            _(oD, hG);
            var cF = _v();
            _(oD, cF);
            if (_oz(z, 6, e, s, gg)) {
                cF.wxVkey = 1;
            }
            fE.wxXCkey = 1;
            cF.wxXCkey = 1;
        } else {
            oD.wxVkey = 2;
        }
        oD.wxXCkey = 1;
        oD.wxXCkey = 3;
        _(r, xC);
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
        var cI = _n('view');
        _rz(z, cI, 'class', 0, e, s, gg);
        var oJ = _n('van-image');
        _rz(z, oJ, 'src', 1, e, s, gg);
        _(cI, oJ);
        var lK = _mz(z, 'van-button', ['round', -1, 'bind:click', 2, 'customClass', 1, 'type', 2], [], e, s, gg);
        _(cI, lK);
        _(r, cI);
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
        var eN = _mz(z, 'van-button', ['round', -1, 'bind:click', 0, 'customClass', 1, 'type', 1], [], e, s, gg);
        _(r, eN);
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
        var oP = _n('view');
        _rz(z, oP, 'class', 0, e, s, gg);
        var oR = _mz(z, 'van-button', ['round', -1, 'bind:click', 1, 'customClass', 1, 'type', 2], [], e, s, gg);
        _(oP, oR);
        var xQ = _v();
        _(oP, xQ);
        if (_oz(z, 4, e, s, gg)) {
            xQ.wxVkey = 1;
            var fS = _n('view');
            _rz(z, fS, 'class', 5, e, s, gg);
            var cT = _mz(z, 'view', ['bindtap', 6, 'class', 1], [], e, s, gg);
            var hU = _n('van-icon');
            _rz(z, hU, 'name', 8, e, s, gg);
            _(cT, hU);
            _(fS, cT);
            var oV = _v();
            _(fS, oV);
            var cW = function (lY, oX, aZ, gg) {
                var e2 = _n('view');
                _rz(z, e2, 'class', 11, lY, oX, gg);
                var o4 = _n('view');
                _rz(z, o4, 'class', 12, lY, oX, gg);
                var x5 = _v();
                _(o4, x5);
                if (_oz(z, 13, lY, oX, gg)) {
                    x5.wxVkey = 1;
                    var f7 = _mz(z, 'van-button', ['round', -1, 'bind:click', 14, 'customClass', 1, 'data-sn', 2, 'type', 3], [], lY, oX, gg);
                    _(x5, f7);
                }
                var o6 = _v();
                _(o4, o6);
                if (_oz(z, 18, lY, oX, gg)) {
                    o6.wxVkey = 1;
                }
                x5.wxXCkey = 1;
                x5.wxXCkey = 3;
                o6.wxXCkey = 1;
                _(e2, o4);
                var b3 = _v();
                _(e2, b3);
                if (_oz(z, 19, lY, oX, gg)) {
                    b3.wxVkey = 1;
                }
                b3.wxXCkey = 1;
                _(aZ, e2);
                return aZ;
            };
            oV.wxXCkey = 4;
            _2z(z, 9, cW, e, s, gg, oV, 'item', 'index', 'index');
            _(xQ, fS);
        } else {
            xQ.wxVkey = 2;
        }
        xQ.wxXCkey = 1;
        xQ.wxXCkey = 3;
        _(r, oP);
        var c8 = _mz(z, 'van-dialog', ['showCancelButton', -1, 'useSlot', -1, 'bind:close', 20, 'bind:confirm', 1, 'confirmButtonColor', 2, 'show', 3, 'title', 4], [], e, s, gg);
        _(r, c8);
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
        var cAB = _n('view');
        _rz(z, cAB, 'class', 0, e, s, gg);
        var oBB = _v();
        _(cAB, oBB);
        if (_oz(z, 1, e, s, gg)) {
            oBB.wxVkey = 1;
            var lCB = _v();
            _(oBB, lCB);
            if (_oz(z, 2, e, s, gg)) {
                lCB.wxVkey = 1;
            }
            var tEB = _mz(z, 'van-button', ['round', -1, 'bind:click', 3, 'customClass', 1, 'type', 2], [], e, s, gg);
            _(oBB, tEB);
            var aDB = _v();
            _(oBB, aDB);
            if (_oz(z, 6, e, s, gg)) {
                aDB.wxVkey = 1;
            }
            lCB.wxXCkey = 1;
            aDB.wxXCkey = 1;
        } else {
            oBB.wxVkey = 2;
        }
        oBB.wxXCkey = 1;
        oBB.wxXCkey = 3;
        _(r, cAB);
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
        var bGB = _n('view');
        _rz(z, bGB, 'class', 0, e, s, gg);
        var oHB = _n('van-image');
        _rz(z, oHB, 'src', 1, e, s, gg);
        _(bGB, oHB);
        var xIB = _mz(z, 'van-button', ['round', -1, 'bind:click', 2, 'customClass', 1, 'type', 2], [], e, s, gg);
        _(bGB, xIB);
        _(r, bGB);
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
__wxAppCode__['pos/canvas/canvas.json'] = {
    usingComponents: {},
    pageOrientation: 'landscape',
    navigationBarTitleText: '签名确认'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pos/canvas/canvas.wxml'] = [$gwx0, './pos/canvas/canvas.wxml'];
else __wxAppCode__['pos/canvas/canvas.wxml'] = $gwx0('./pos/canvas/canvas.wxml');
__wxAppCode__['pos/commitmentletter/commitmentletter.json'] = {
    usingComponents: {
        'van-button': '@wc/vantWeapp/button/index'
    },
    navigationBarTitleText: '承诺函'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pos/commitmentletter/commitmentletter.wxml'] = [$gwx0, './pos/commitmentletter/commitmentletter.wxml'];
else __wxAppCode__['pos/commitmentletter/commitmentletter.wxml'] = $gwx0('./pos/commitmentletter/commitmentletter.wxml');
__wxAppCode__['pos/faceCheck/faceCheck.json'] = {
    usingComponents: {
        'van-image': '@wc/vantWeapp/image/index',
        'van-button': '@wc/vantWeapp/button/index',
        'van-field': '@wc/vantWeapp/field/index'
    },
    navigationBarTitleText: 'E证通认证'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pos/faceCheck/faceCheck.wxml'] = [$gwx0, './pos/faceCheck/faceCheck.wxml'];
else __wxAppCode__['pos/faceCheck/faceCheck.wxml'] = $gwx0('./pos/faceCheck/faceCheck.wxml');
__wxAppCode__['pos/historyList/historyList.json'] = {
    usingComponents: {},
    navigationBarTitleText: '终端记录'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pos/historyList/historyList.wxml'] = [$gwx0, './pos/historyList/historyList.wxml'];
else __wxAppCode__['pos/historyList/historyList.wxml'] = $gwx0('./pos/historyList/historyList.wxml');
__wxAppCode__['pos/posBindSuccess/posBindSuccess.json'] = {
    usingComponents: {
        'van-button': '@wc/vantWeapp/button/index'
    }
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pos/posBindSuccess/posBindSuccess.wxml'] = [$gwx0, './pos/posBindSuccess/posBindSuccess.wxml'];
else __wxAppCode__['pos/posBindSuccess/posBindSuccess.wxml'] = $gwx0('./pos/posBindSuccess/posBindSuccess.wxml');
__wxAppCode__['pos/posList/posList.json'] = {
    usingComponents: {
        'van-field': '@wc/vantWeapp/field/index',
        'van-button': '@wc/vantWeapp/button/index',
        'van-icon': '@wc/vantWeapp/icon/index',
        'van-dialog': '@wc/vantWeapp/dialog/index'
    },
    navigationBarTitleText: '终端管理'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pos/posList/posList.wxml'] = [$gwx0, './pos/posList/posList.wxml'];
else __wxAppCode__['pos/posList/posList.wxml'] = $gwx0('./pos/posList/posList.wxml');
__wxAppCode__['pos/terRecord/terCanvas/terCanvas.json'] = {
    usingComponents: {},
    pageOrientation: 'landscape',
    navigationBarTitleText: '签名确认'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pos/terRecord/terCanvas/terCanvas.wxml'] = [$gwx0, './pos/terRecord/terCanvas/terCanvas.wxml'];
else __wxAppCode__['pos/terRecord/terCanvas/terCanvas.wxml'] = $gwx0('./pos/terRecord/terCanvas/terCanvas.wxml');
__wxAppCode__['pos/terRecord/terCommitmentletter/terCommitmentletter.json'] = {
    usingComponents: {
        'van-button': '../@wc/vantWeapp/button/index'
    },
    navigationBarTitleText: '承诺函'
};
if (__vd_version_info__.delayedGwx)
    __wxAppCode__['pos/terRecord/terCommitmentletter/terCommitmentletter.wxml'] = [$gwx0, './pos/terRecord/terCommitmentletter/terCommitmentletter.wxml'];
else __wxAppCode__['pos/terRecord/terCommitmentletter/terCommitmentletter.wxml'] = $gwx0('./pos/terRecord/terCommitmentletter/terCommitmentletter.wxml');
__wxAppCode__['pos/terRecord/terFaceCheck/terFaceCheck.json'] = {
    usingComponents: {
        'van-image': '../@wc/vantWeapp/image/index',
        'van-button': '../@wc/vantWeapp/button/index',
        'van-field': '../@wc/vantWeapp/field/index'
    },
    navigationBarTitleText: 'E证通认证'
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pos/terRecord/terFaceCheck/terFaceCheck.wxml'] = [$gwx0, './pos/terRecord/terFaceCheck/terFaceCheck.wxml'];
else __wxAppCode__['pos/terRecord/terFaceCheck/terFaceCheck.wxml'] = $gwx0('./pos/terRecord/terFaceCheck/terFaceCheck.wxml');
__wxRoute = 'pos/posList/posList';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pos/posList/posList.js';
define(
    'pos/posList/posList.js',
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

        var t = require('@api/center').centerAPI;
        export default {
            data() {
                return {
                    posSn: '',
                    list: [],
                    total: 0,
                    show: !1,
                    reason: '',
                    nowSn: '',
                    pageNo: 0,
                    customerName: '',
                    signaturePath: '',
                    legalKey: '',
                    customerNo: '',
                    pageNum: '',
                    first: '',
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
            onLoad: function (t) {},
            onReady: function () {},
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
require('./pos/posList/posList.js');
__wxRoute = 'pos/historyList/historyList';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pos/historyList/historyList.js';
define(
    'pos/historyList/historyList.js',
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

        var t = require('@api/center').centerAPI;
        export default {
            data() {
                return {
                    pageNo: 1,
                    pageSize: 10,
                    list: [],
                    total: 10,
                    pageNum: 0
                };
            },
            onLoad: function (t) {},
            onReady: function () {},
            onShow: function () {
                this.getData();
            },
            onHide: function () {},
            onUnload: function () {},
            onPullDownRefresh: function () {
                console.log(1),
                    this.setData({
                        pageNo: 1
                    }),
                    this.getData();
            },
            onReachBottom: function () {
                if ((console.log(2), !(this.list.length >= this.total))) {
                    var t = this.pageNo + 1;
                    this.setData({
                        pageNo: t
                    }),
                        this.getData();
                }
            },
            methods: {}
        };
    }
);
require('./pos/historyList/historyList.js');
__wxRoute = 'pos/canvas/canvas';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pos/canvas/canvas.js';
define(
    'pos/canvas/canvas.js',
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
require('./pos/canvas/canvas.js');
__wxRoute = 'pos/commitmentletter/commitmentletter';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pos/commitmentletter/commitmentletter.js';
define(
    'pos/commitmentletter/commitmentletter.js',
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

        require('@u/util.js');
        var e = require('@api/api').API;
        require('@api/request').POSTImageUrl;
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
            onLoad: function (e) {
                e.base64Path &&
                    this.setData({
                        signaturePath: decodeURIComponent(e.base64Path)
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
require('./pos/commitmentletter/commitmentletter.js');
__wxRoute = 'pos/faceCheck/faceCheck';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pos/faceCheck/faceCheck.js';
define(
    'pos/faceCheck/faceCheck.js',
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
            o = require('@api/api').API;
        export default {
            data() {
                return {
                    isLoadingFaceResult: !1
                };
            },
            onLoad: function (e) {},
            onReady: function () {},
            onShow: function () {},
            onHide: function () {},
            onUnload: function () {},
            methods: {}
        };
    }
);
require('./pos/faceCheck/faceCheck.js');
__wxRoute = 'pos/posBindSuccess/posBindSuccess';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pos/posBindSuccess/posBindSuccess.js';
define(
    'pos/posBindSuccess/posBindSuccess.js',
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
require('./pos/posBindSuccess/posBindSuccess.js');
__wxRoute = 'pos/terRecord/terCanvas/terCanvas';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pos/terRecord/terCanvas/terCanvas.js';
define(
    'pos/terRecord/terCanvas/terCanvas.js',
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
                    customerName: '',
                    legalKey: ''
                };
            },
            onLoad: function (t) {
                this.getSystemInfo(),
                    this.createCanvas(),
                    this.setData({
                        customerName: t.customerName
                    }),
                    t.legalKey &&
                        this.setData({
                            legalKey: decodeURIComponent(t.legalKey)
                        });
            },
            methods: {}
        };
    }
);
require('./pos/terRecord/terCanvas/terCanvas.js');
__wxRoute = 'pos/terRecord/terCommitmentletter/terCommitmentletter';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pos/terRecord/terCommitmentletter/terCommitmentletter.js';
define(
    'pos/terRecord/terCommitmentletter/terCommitmentletter.js',
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

        require('@u/util.js');
        var e = require('@api/api').API,
            t = require('@api/request').POSTImageUrl;
        export default {
            data() {
                return {
                    content: '',
                    timeStr: '',
                    signaturePath: '',
                    signatureUrl: '',
                    customerName: '',
                    customerNo: '',
                    doubleRecordBol: !1,
                    signBol: !1,
                    legalKey: ''
                };
            },
            onLoad: function (e) {
                var t = this;
                if (
                    (console.log(e),
                    e.base64Path &&
                        this.setData({
                            signaturePath: decodeURIComponent(e.base64Path)
                        }),
                    e.legalKey &&
                        this.setData({
                            legalKey: decodeURIComponent(e.legalKey)
                        }),
                    e && e.q)
                ) {
                    var o = decodeURIComponent(e.q);
                    console.log(o);
                    var n = o.substring(o.indexOf('?') + 1);
                    console.log(n);
                    var a = n.split('&');
                    console.log(a),
                        a.forEach(function (e) {
                            var o = e.indexOf('='),
                                n = e.substring(0, o),
                                a = e.substring(o + 1);
                            console.log(e),
                                console.log(n + '=>' + a),
                                'legalKey' == n &&
                                    t.setData({
                                        legalKey: a
                                    });
                        });
                }
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
require('./pos/terRecord/terCommitmentletter/terCommitmentletter.js');
__wxRoute = 'pos/terRecord/terFaceCheck/terFaceCheck';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pos/terRecord/terFaceCheck/terFaceCheck.js';
define(
    'pos/terRecord/terFaceCheck/terFaceCheck.js',
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
                    customerNo: '',
                    legalKey: '',
                    isLoadingFaceResult: !1
                };
            },
            onLoad: function (e) {
                console.log(e),
                    e.customerNo &&
                        this.setData({
                            customerNo: e.customerNo
                        }),
                    e.legalKey &&
                        this.setData({
                            legalKey: decodeURIComponent(e.legalKey)
                        });
            },
            onReady: function () {},
            onShow: function () {},
            onHide: function () {},
            onUnload: function () {},
            methods: {
                areaCLose: function () {
                    this.setData({
                        show: !1
                    });
                },

                reasonInput: function (t) {
                    this.setData({
                        reason: t.detail.value
                    });
                },

                posSnInput: function (t) {
                    console.log(t),
                        console.log(this.posSn),
                        this.setData({
                            posSn: t.detail.value
                        });
                },

                getPosSn: function (t) {
                    var n = this;
                    uni.scanCode({
                        onlyFromCamera: !0,
                        success: function (t) {
                            console.log(t),
                                n.setData({
                                    posSn: t.result
                                });
                        }
                    });
                },

                getData: function () {
                    var n = this;
                    t.findBindAuditPage({}).then(function (t) {
                        console.log(t),
                            200 == t.code
                                ? n.setData({
                                      list: t.object.list,
                                      total: t.object.total
                                  })
                                : uni.showToast({
                                      title: t.message,
                                      icon: 'none'
                                  });
                    });
                },

                toHistory: function () {
                    uni.navigateTo({
                        url: '/pos/historyList/historyList'
                    });
                },

                showReason: function (t) {
                    var n = this;
                    uni.requestSubscribeMessage({
                        tmplIds: ['j7FvDKVP6ICf6TWnIg0TQTtM1ISJKev-Cr05w6iAU1c'],
                        complete: function (o) {
                            var e = t.currentTarget.dataset.sn;
                            n.setData({
                                nowSn: e,
                                show: !0,
                                reason: ''
                            });
                        }
                    });
                },

                test: function () {
                    uni.getSetting({
                        withSubscriptions: !0,
                        success: function (t) {
                            console.log(t.authSetting),
                                uni.requestSubscribeMessage({
                                    tmplIds: ['j7FvDKVP6ICf6TWnIg0TQTtM1ISJKev-Cr05w6iAU1c'],
                                    complete: function (t) {}
                                });
                        }
                    });
                },

                unbind: function () {
                    var t = this,
                        n = this.nowSn;
                    uni.showModal({
                        title: '温馨提示',
                        content: '注：提交解绑申请后，需要您的直属服务商审核，审核成功后解绑，解绑后您将无法进行交易，请慎重考虑',
                        cancelText: '确认提交',
                        cancelColor: '#EF4034',
                        confirmText: '取消',
                        confirmColor: '#45464E'
                    }).then(function (o) {
                        o.confirm
                            ? console.log('用户点击确定')
                            : o.cancel &&
                              (console.log('用户点击取消'),
                              uni.getSetting({
                                  withSubscriptions: !0,
                                  success: function (o) {
                                      console.log(o.authSetting), t.unbindRequest(n);
                                  }
                              }));
                    });
                },

                doingTap: function () {
                    uni.showToast({
                        title: '您的解绑申请正在审核中，请耐心等待',
                        icon: 'none'
                    });
                },

                unbindRequest: function (n) {
                    var o = this;
                    t.unbindApply({
                        posTusn: n,
                        reason: this.reason
                    }).then(function (t) {
                        200 == t.code
                            ? uni
                                  .showToast({
                                      title: '解绑审核提交成功',
                                      icon: 'none',
                                      duration: 3e3
                                  })
                                  .then(function (t) {
                                      setTimeout(function () {
                                          o.getData();
                                      }, 1e3);
                                  })
                            : uni.showToast({
                                  title: t.message,
                                  icon: 'none'
                              });
                    });
                },

                bind: function () {
                    var n = this;
                    console.log('this.data.posSn = ', this.posSn),
                        '' != this.posSn && null != this.posSn
                            ? t
                                  .bind({
                                      posTusn: this.posSn
                                  })
                                  .then(function (t) {
                                      200 == t.code
                                          ? uni
                                                .showToast({
                                                    title: '绑定成功',
                                                    icon: 'success',
                                                    duration: 3e3
                                                })
                                                .then(function (t) {
                                                    setTimeout(function () {
                                                        n.getData();
                                                    }, 1e3);
                                                })
                                          : uni.showToast({
                                                title: t.message,
                                                icon: 'none'
                                            });
                                  })
                            : uni.showToast({
                                  title: '请输入终端SN',
                                  icon: 'none'
                              });
                },

                getData: function () {
                    var a = this;
                    t.findPage({
                        pageNo: this.pageNo,
                        pageSize: this.pageSize
                    }).then(function (t) {
                        console.log(t),
                            a.setData({
                                list: a.list.concat(t.object.list),
                                total: t.object.total,
                                pageNum: t.object.pageNum
                            });
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
                                          url: '/pos/commitmentletter/commitmentletter?base64Path='.concat(
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
                    var t = this;
                    e.getSignAgreementData({
                        doubleRecordType: 'SERVICE_FEE'
                    }).then(function (e) {
                        200 == e.code
                            ? t.setData({
                                  content: e.object.promise,
                                  timeStr: e.object.signTime || '',
                                  doubleRecordBol: e.object.isDoubleRecord || !1,
                                  signBol: e.object.success || !1,
                                  signatureUrl: e.object.signBase64,
                                  customerName: e.object.customerName
                              })
                            : e.message &&
                              uni.showToast({
                                  title: e.message,
                                  icon: 'none'
                              });
                    });
                },

                jumpSignPage: function () {
                    uni.reLaunch({
                        url: '/pos/canvas/canvas?customerName='.concat(this.customerName)
                    });
                },

                reqSaveSignData: function () {
                    var t = this,
                        n = {
                            isLogin: !0,
                            authString: this.signaturePath || ''
                        };
                    e.saveCheckSign(n).then(function (e) {
                        200 == e.code
                            ? (t.setData({
                                  signaturePath: ''
                              }),
                              uni.navigateTo({
                                  url: '/pos/faceCheck/faceCheck'
                              }),
                              t.queryAgreementSign())
                            : e.message &&
                              uni.showToast({
                                  title: e.message,
                                  icon: 'none'
                              });
                    });
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
                        doubleRecordType: 'SERVICE_FEE'
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

                goSDK: function (o) {
                    var n = this;
                    (0, e.startEid)({
                        data: {
                            token: o
                        },
                        verifyDoneCallback: function (e) {
                            console.log(e), n.queryFaceCheckResult(e.token);
                        }
                    });
                },

                queryFaceCheckResult: function (e) {
                    var n = this;
                    this.setData({
                        isLoadingFaceResult: !0
                    }),
                        o
                            .saveCheckFace({
                                etoken: e
                            })
                            .then(function (e) {
                                n.setData({
                                    isLoadingFaceResult: !1
                                }),
                                    200 == e.code
                                        ? uni.showModal({
                                              title: '温馨提示',
                                              content: '人身核验成功',
                                              showCancel: !1,
                                              confirmColor: '#EF4034',
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
                },

                goHome: function () {
                    uni.switchTab({
                        url: '/pages/home/home'
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
                        e = this.pr;
                    uni.createSelectorQuery()
                        .in(uni)
                        .select('#canvas')
                        .fields({
                            node: !0,
                            size: !0
                        })
                        .exec(function (a) {
                            var i = a[0].node,
                                s = i.getContext('2d');
                            (i.width = t.width * e),
                                (i.height = t.height * e),
                                s.scale(e, e),
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
                        success: function (e) {
                            t.setData({
                                pr: e.pixelRatio,
                                width: e.windowWidth,
                                height: e.windowHeight - 68
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
                    var t = this;
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
                                  success: function (e) {
                                      uni.redirectTo({
                                          url: '/pos/terRecord/terCommitmentletter/terCommitmentletter?legalKey='
                                              .concat(encodeURIComponent(t.legalKey), '&base64Path=')
                                              .concat(encodeURIComponent(uni.getFileSystemManager().readFileSync(e.tempFilePath, 'base64')))
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
                    var t = this;
                    console.log(this.customerNo + '=>' + this.legalKey),
                        e
                            .getTerSignAgreementData({
                                brandType: 'WLP',
                                customerNo: this.customerNo,
                                legalKey: this.legalKey
                            })
                            .then(function (e) {
                                console.log(e),
                                    200 == e.code
                                        ? t.setData({
                                              content: e.object.promise,
                                              timeStr: e.object.signTime || '',
                                              doubleRecordBol: e.object.isDoubleRecord || !1,
                                              signBol: e.object.success || !1,
                                              signatureUrl: e.object.signBase64,
                                              customerName: e.object.customerName,
                                              customerNo: e.object.customerNo
                                          })
                                        : e.message &&
                                          uni.showToast({
                                              title: e.message,
                                              icon: 'none'
                                          });
                            });
                },

                jumpSignPage: function () {
                    uni.reLaunch({
                        url: '/pos/terRecord/terCanvas/terCanvas?legalKey='.concat(encodeURIComponent(this.legalKey), '&customerName=').concat(this.customerName)
                    });
                },

                reqSaveSignData: function () {
                    var t = this,
                        o = {
                            isLogin: !1,
                            customerNo: this.customerNo,
                            authString: this.signaturePath || ''
                        };
                    console.log(o),
                        e.saveTerCheckSign(o).then(function (e) {
                            console.log(e),
                                200 == e.code
                                    ? (t.setData({
                                          signaturePath: ''
                                      }),
                                      uni.navigateTo({
                                          url: '/pos/terRecord/terFaceCheck/terFaceCheck?legalKey='.concat(encodeURIComponent(e.object), '&customerNo=').concat(t.customerNo)
                                      }),
                                      t.queryAgreementSign())
                                    : e.message &&
                                      uni.showToast({
                                          title: e.message,
                                          icon: 'none'
                                      });
                        });
                },

                getFullImgUrl: function (e) {
                    return e ? t + e : '';
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
                    o.getTerETokenParams({
                        brandType: 'WLP',
                        customerNo: this.customerNo,
                        legalKey: this.legalKey
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
                    }),
                        o
                            .saveTerCheckFace({
                                brandType: 'WLP',
                                customerNo: this.customerNo,
                                etoken: e,
                                legalKey: this.legalKey
                            })
                            .then(function (e) {
                                t.setData({
                                    isLoadingFaceResult: !1
                                }),
                                    200 == e.code
                                        ? uni.showModal({
                                              title: '温馨提示',
                                              content: '人身核验成功',
                                              showCancel: !1,
                                              confirmColor: '#EF4034',
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
require('./pos/terRecord/terFaceCheck/terFaceCheck.js');
