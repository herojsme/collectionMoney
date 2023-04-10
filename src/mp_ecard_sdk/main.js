var e = t(require('./utils/validate')),
    o = t(require('./constants/log'));
function t(e) {
    return e && e.__esModule
        ? e
        : {
              default: e
          };
}
module.exports = {
    initEid: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'https://eid.faceid.qq.com';
        (uni.eidBaseUrl = e),
            uni.onAppShow(function (e) {
                if ((console.log('!!!!!!监听onshow事件', e), 1038 === e.scene)) {
                    var t = e.referrerInfo,
                        n = t.appId,
                        r = t.extraData;
                    if ('wx0e2cb0b052a91c92' === n && r) {
                        var a = r.verifyDone,
                            i = r.token;
                        a && uni.handleEidVerifyDone
                            ? uni.eidTokenToCallback &&
                              uni.eidTokenToCallback === i &&
                              ((uni.eidTokenToCallback = ''),
                              uni.reportLogToEid({
                                  token: i,
                                  event: o.default.navigateBackFromEid,
                                  errMsg: '从EID核身完成返回，token:'.concat(i, ',verifyDone:').concat(a)
                              }),
                              console.log('!!!!!!执行回调'),
                              uni.handleEidVerifyDone(r))
                            : uni.reportLogToEid({
                                  token: i,
                                  event: o.default.navigateBackFromEidFail,
                                  errMsg: '核验未完成或者没有处理核验完成的函数，token:'.concat(i, ',verifyDone:').concat(a)
                              });
                    }
                }
            });
        var t = uni.getSystemInfoSync(),
            n = t.version;
        uni.reportLogToEid = function (e) {
            var o = e.token,
                t = void 0 === o ? '' : o,
                r = e.event,
                a = void 0 === r ? '' : r,
                i = e.errCode,
                d = void 0 === i ? '' : i,
                c = e.errMsg,
                l = void 0 === c ? '' : c,
                s = e.data,
                v = void 0 === s ? '' : s,
                f = new Date(),
                u = {
                    Token: t,
                    SourceType: 'mp_sdk',
                    SourceVersion: '1.0.4',
                    EnvVersion: n,
                    Timestamp: f.getTime(),
                    Event: a,
                    ErrorCode: 'number' == typeof d ? d.toString() : d,
                    ErrorMsg: l,
                    Data: v
                };
            console.log('开始上报日志：', u),
                uni.request({
                    url: ''.concat(uni.eidBaseUrl, '/api/common/ReportEvent'),
                    method: 'POST',
                    data: u,
                    success: function (e) {
                        console.log('上报日志完成：', 'payload:', u, 'res:', e);
                    }
                });
        };
    },
    startEid: function (t) {
        var n = t.data,
            r = t.verifyDoneCallback;
        if (!n || !r)
            return (
                uni.reportLogToEid({
                    token: a,
                    event: o.default.startEidFail,
                    errMsg: '传入的参数有误'
                }),
                void uni.showModal({
                    title: '提示',
                    content: '传入的参数有误',
                    showCancel: !1
                })
            );
        var a = n.token;
        if (!(0, e.default)(a, 'token'))
            return (
                uni.reportLogToEid({
                    token: a,
                    event: o.default.startEidFail,
                    errMsg: '传入的token有误，token:'.concat(a)
                }),
                void uni.showModal({
                    title: '提示',
                    content: '传入的token有误',
                    showCancel: !1
                })
            );
        (uni.handleEidVerifyDone = function (e) {
            var t = e.token;
            uni.navigateBack({
                success: function () {
                    uni.reportLogToEid({
                        token: t,
                        event: o.default.EidVerifyDone,
                        errMsg: '验证完成，token：'.concat(t)
                    }),
                        r({
                            token: t,
                            verifyDone: !0
                        });
                }
            });
        }),
            uni.navigateTo({
                url: '/mp_ecard_sdk/index/index?token='.concat(a)
            });
    }
};
