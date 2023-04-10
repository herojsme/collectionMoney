getApp();
var t = uni.getAccountInfoSync().miniProgram;
console.log(t);
var e = '',
    o = t.envVersion;
console.log(o), console.log('envVersion =', o);
var n = '',
    a = '';
'develop' === o
    ? ((e = 'https://t-wlpapi.lepass.cn/wlp-mini-web/'), (n = 'https://pic.bcasmw.cn/'), (a = 'https://t-wlph5.lepass.cn/cust-app/'))
    : ((e = 'https://wlpapi.leshuazf.com/wlp-mini-web/'), (n = 'https://pic.bcasmw.cn/'), (a = 'https://wlph5.leshuazf.com/cust-app/')),
    (module.exports = {
        request: function (t, o, n) {
            return (
                uni.showLoading({
                    title: '加载中',
                    mask: !0
                }),
                new Promise(function (a, i) {
                    uni.getBackgroundFetchToken({
                        complete: function (s) {
                            console.log('登录的账号 = ', s.token);
                            var c = {
                                token: s.token,
                                appCode: 'CUST_MINI',
                                appversion: 1,
                                brandType: 'WLP'
                            };
                            uni.request({
                                url: e + o,
                                data: 'POST' === t ? JSON.stringify(n) : n,
                                header: c,
                                method: t,
                                timeout: 0,
                                success: function (t) {
                                    200 == t.data.code
                                        ? a(t.data)
                                        : 98 == t.data.code && '1001' == t.data.failCode
                                        ? (console.log(t),
                                          uni.showToast({
                                              title: '未登录或登录超时',
                                              icon: 'none',
                                              complete: function () {
                                                  uni.navigateTo({
                                                      url: '/pages/myself/myself'
                                                  });
                                              }
                                          }))
                                        : a(t.data);
                                },
                                fail: function (t) {
                                    uni.showToast({
                                        title: '网络超时,请稍后再试',
                                        icon: 'none',
                                        duration: 3e3
                                    }),
                                        i(t);
                                },
                                complete: function () {
                                    uni.hideLoading();
                                }
                            });
                        }
                    });
                })
            );
        },
        requestTokenTimeExpires: function (t, o, n) {
            return (
                uni.showLoading({
                    title: '加载中',
                    mask: !0
                }),
                new Promise(function (a, i) {
                    uni.getBackgroundFetchToken({
                        complete: function (i) {
                            console.log('登录的账号 = ', i.token);
                            var s = {
                                token: i.token,
                                appCode: 'CUST_MINI',
                                appversion: 1,
                                brandType: 'WLP'
                            };
                            uni.request({
                                url: e + o,
                                data: 'POST' === t ? JSON.stringify(n) : n,
                                header: s,
                                method: t,
                                timeout: 0,
                                success: function (t) {
                                    (t.data.isLoginStatus = !1), 200 == t.data.code ? ((t.data.isLoginStatus = !0), a(t.data)) : a(t.data);
                                },
                                fail: function (t) {
                                    uni.showToast({
                                        title: '网络超时,请稍后再试',
                                        icon: 'none',
                                        duration: 3e3
                                    }),
                                        (t.data.isLoginStatus = !1),
                                        a(i.data);
                                },
                                complete: function () {
                                    uni.hideLoading();
                                }
                            });
                        }
                    });
                })
            );
        },
        POSTBaseUrl: function () {
            return e;
        },
        POSTImageUrl: function () {
            return n;
        },
        WEB_BASE_URL: a
    });
