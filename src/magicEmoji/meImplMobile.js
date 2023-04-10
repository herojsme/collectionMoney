var e = require('../@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
    value: !0
}),
    (exports.default = void 0);
var t = e(require('../@babel/runtime/helpers/classCallCheck')),
    a = e(require('../@babel/runtime/helpers/createClass')),
    i = e(require('../@babel/runtime/helpers/assertThisInitialized')),
    n = e(require('../@babel/runtime/helpers/inherits')),
    r = e(require('../@babel/runtime/helpers/possibleConstructorReturn')),
    o = e(require('../@babel/runtime/helpers/getPrototypeOf')),
    s = e(require('./meImpl')),
    l = e(require('../framework/mobileHelper')),
    m = e(require('../report/reportKV'));
function u(e) {
    var t = (function () {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (e) {
            return !1;
        }
    })();
    return function () {
        var a,
            i = (0, o.default)(e);
        if (t) {
            var n = (0, o.default)(this).constructor;
            a = Reflect.construct(i, arguments, n);
        } else a = i.apply(this, arguments);
        return (0, r.default)(this, a);
    };
}
var c = 5e3,
    f = [],
    d = 3,
    p = 4;
function g(e, t) {
    (e.play_start_timestamp = 0), (e.play_end_timestamp = 0), (e.Is_Play_Success = 2), (e.Fail_Reason = t), (e.Valid_Period = c), _(e);
}
function _(e) {
    var t = {
        bad: 0,
        Content: e.Content,
        type: e.type,
        messageTimestamp: e.messageTimestamp,
        play_start_timestamp: e.play_start_timestamp,
        play_end_timestamp: e.play_end_timestamp,
        toChatName: e.toChatName,
        Is_Play_Success: e.Is_Play_Success,
        Fail_Reason: e.Fail_Reason,
        Valid_Period: e.Valid_Period,
        sessionID: e.sessionID
    };
    new m.default(22135, t).report();
}
function h() {
    for (var e = Date.now(), t = f.length, a = 0; a < f.length; a++)
        if (Math.abs(e - f[a].messageTimestamp) <= c) {
            t = a;
            break;
        }
    for (a = 0; a < t; a++) g(f[a], d);
    f = f.slice(t, f.length);
}
function y() {
    window.__evfx__private__
        ? f.forEach(function (e) {
              GameGlobal.walFramework.handleMagicEmoji(e.msgMeta.emojiKey, e.msgMeta.Content, e.msgId, e.msgMeta, e.messageTimestamp),
                  (function (e) {
                      (e.play_start_timestamp = new Date().getTime()), (e.play_end_timestamp = 0), (e.Is_Play_Success = 1), (e.Fail_Reason = 0), (e.Valid_Period = 0), _(e);
                  })(e);
          })
        : f.forEach(function (e) {
              g(e, p);
          }),
        (f = []);
}
var v = (function (e) {
    (0, n.default)(o, e);
    var r = u(o);
    function o() {
        var e;
        (0, t.default)(this, o), ((e = r.call(this)).darkMode = !1), e.initBloomParams(), (e.unityEnv = !1), console.log('LOG1: '.concat(Date.now()));
        var a,
            n = 'iOS' === GameGlobal.systemInfo.platform;
        try {
            if (
                (a = n
                    ? uni.getABTestConfig({
                          experimentType: 'Expt',
                          experimentId: 'clicfg_magic_emoji_ios'
                      })
                    : uni.getABTestConfig({
                          experimentType: 'Expt',
                          experimentId: 'clicfg_magic_emoji_android'
                      })) &&
                a.testConfig &&
                'string' == typeof a.testConfig
            ) {
                var s = a.testConfig;
                console.log('testConfig:' + s);
                var l = JSON.parse(s);
                if ('' != l && '' != l.delay) {
                    var m = parseInt(l.delay);
                    c = m > 0 ? m : c;
                }
            }
        } catch (e) {
            console.log('error when getABTestConfig');
        }
        return (
            console.log('LOG2: '.concat(Date.now())),
            console.log('delay:' + c),
            uni.magicEmoji.onUnityEvent(e.onUnityEvent.bind((0, i.default)(e))),
            uni.magicEmoji.onMagicEmojiSent(e.onMagicEmojiSent.bind((0, i.default)(e))),
            e
        );
    }
    return (
        (0, a.default)(o, [
            {
                key: 'initBloomParams',
                value: function () {
                    (this.lightBloomParams = {
                        enable: !0,
                        threshold: 0.695,
                        intensity: 0.19,
                        blurSize: 0.3,
                        blurIterations: 4
                    }),
                        (this.darkBloomParams = {
                            enable: !0,
                            threshold: 0.693,
                            intensity: 0.3,
                            blurSize: 0.3,
                            blurIterations: 4
                        });
                }
            },
            {
                key: 'trigger',
                value: function (e) {
                    'string' == typeof e && 'finishLoading' === e && (this.finishLoading(), (this.unityEnv = !0), h(), y()), l.default.invoke(this.scene, e);
                }
            },
            {
                key: 'finishLoading',
                value: function () {
                    var e = {
                        WasmCompileTime: GameGlobal.WASM_COMPILE_TIME_COST,
                        InitTime: GameGlobal.INIT_TIME_COST,
                        BuiltTime: GameGlobal.BUILT_TIME
                    };
                    new m.default(22156, e).report();
                }
            },
            {
                key: 'onUnityEvent',
                value: function (e) {
                    'darkModeChanged' === e.event ? this.onDarkModeChanged(e.param.isDarkMode) : 'clearAllVFX' === e.event && this.onClearAllVFX();
                }
            },
            {
                key: 'onClearAllVFX',
                value: function () {
                    console.log('clear all vfx'),
                        window.__evfx__private__.systemEventHandler(
                            '',
                            JSON.stringify({
                                event: 'ClearAllVFX'
                            })
                        );
                }
            },
            {
                key: 'onMagicEmojiSent',
                value: function (e) {
                    var t = e.msgId,
                        a = e.msgMeta,
                        i = e.reportInfo;
                    if (null != a && null != t && null != i) {
                        var n = a.isFrom ? 1 : 2,
                            r = (function (e, t, a, i, n, r, o) {
                                return {
                                    msgId: e,
                                    msgMeta: t,
                                    sessionID: a,
                                    Content: i,
                                    type: n,
                                    messageTimestamp: r,
                                    toChatName: o
                                };
                            })(t, a, i.sessionID, a.content, n, i.messageTimestamp, i.toChatName);
                        f.push(r), h(), this.unityEnv && y();
                    }
                }
            },
            {
                key: 'onDarkModeChanged',
                value: function (e) {
                    console.log('dark mode changed: '.concat(e)),
                        (this.darkMode = e),
                        window.__evfx__private__.magicEmojiHandler('bloomCamera', '', 0, JSON.stringify(e ? this.darkBloomParams : this.lightBloomParams));
                }
            },
            {
                key: 'fetchMessage',
                value: function (e) {
                    console.log('fetchMessage: '.concat(e));
                    var t = JSON.parse(e);
                    if ('fetchViewPosition' === t.message) {
                        var a = uni.magicEmoji.getMsgMeta(t.param.msgId, !0);
                        if (!a) return 'error';
                        var i = a.frame.x,
                            n = a.frame.y,
                            r = i + a.frame.w / 2,
                            o = n + a.frame.h / 2;
                        return JSON.stringify({
                            x: r,
                            y: o
                        });
                    }
                    return 'boomShake' === t.para
                        ? (uni.magicEmoji.shakeVisibleBubblesAndAvatars({
                              isFrom: t.isFrom
                          }),
                          'ok')
                        : 'error';
                }
            }
        ]),
        o
    );
})(s.default);
exports.default = v;
