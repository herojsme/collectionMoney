getApp();
const AccountInfo = uni.getAccountInfoSync().miniProgram, envVersion = AccountInfo.envVersion;
console.log(AccountInfo);
console.log('envVersion =', envVersion);


let POSTBaseUrl = '',
    POSTImageUrl = '',
    WEB_BASE_URL = '';

if ('develop' === envVersion) {
    POSTBaseUrl = 'https://t-wlpapi.lepass.cn/wlp-mini-web/';
    POSTImageUrl = 'https://pic.bcasmw.cn/'
    WEB_BASE_URL = 'https://t-wlph5.lepass.cn/cust-app/'
} else {
    POSTBaseUrl = 'https://wlpapi.leshuazf.com/wlp-mini-web/'
    POSTImageUrl = 'https://pic.bcasmw.cn/'
    WEB_BASE_URL = 'https://wlph5.leshuazf.com/cust-app/'
}


const responseInterceptor = (resolve, reject, response) => {
    console.log('responseInterceptor', response)
    const res = response.data
    if (response && typeof response === 'object') {
        if (res && 98 == res.code && '1001' == res.data.failCode) {
            uni.showToast({
                title: '未登录或登录超时',
                icon: 'none',
                complete: function () {
                    uni.navigateTo({
                        url: '/pages/myself/myself'
                    });
                }
            })
        } else if (('statusCode' in response && response.statusCode < 400 && (res.status === 0 || res.access_token || res.success))) {
            if (res.access_token) {
                resolve(res)
            }
            if ('status' in res || 'success' in res) {
                resolve(res.data)
            } else {
                resolve(res)
            }
        } else if (typeof res === 'object' && !('success' in res) && (!('status' in res))) {
            // console.log('responseInterceptor')
            resolve(res)
        } else {
            // console.log('responseInterceptor')
            reject(res)
        }
    } else {
        resolve(res)
    }
}



module.exports = {
    request: function (method, url, data) {
        return (
            uni.showLoading({
                title: '加载中',
                mask: !0
            }),
            new Promise(function (resolve, reject) {
                uni.getBackgroundFetchToken({
                    complete: function (res) {
                        console.log('登录的账号 = ', res.token);
                        var header = {
                            token: res.token,
                            appCode: 'CUST_MINI',
                            appversion: 1,
                            brandType: 'WLP'
                        };
                        uni.request({
                            url: POSTBaseUrl + url,
                            data: 'POST' === method ? JSON.stringify(data) : data,
                            header: header,
                            method: method,
                            timeout: 0,

                            complete: function (response) {
                                responseInterceptor(resolve, reject, response)
                                uni.hideLoading();
                            }
                        });
                    }
                });
            })
        );
    },
    requestTokenTimeExpires: function (method, url, data) {
        return (
            uni.showLoading({
                title: '加载中',
                mask: !0
            }),
            new Promise(function (resolve, reject) {
                uni.getBackgroundFetchToken({
                    complete: function (res) {
                        console.log('登录的账号 = ', res.token);
                        var header = {
                            token: res.token,
                            appCode: 'CUST_MINI',
                            appversion: 1,
                            brandType: 'WLP'
                        };
                        uni.request({
                            url: POSTBaseUrl + url,
                            data: 'POST' === method ? JSON.stringify(data) : data,
                            header: header,
                            method: method,
                            timeout: 0,
                            complete: function (response) {
                                responseInterceptor(resolve, reject, response)
                                uni.hideLoading();
                            }
                        });
                    }
                });
            })
        );
    },
    POSTBaseUrl: function () {
        return POSTBaseUrl;
    },
    POSTImageUrl: function () {
        return POSTImageUrl;
    },
    WEB_BASE_URL
}
