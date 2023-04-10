var n = require('./request.js').request,
    e = (require('./request.js').POSTBaseUrl, require('./request.js').POSTImageUrl, require('./request.js').requestTokenTimeExpires),
    t = 'POST',
    u = {
        obtainCustomerCouponPage: function (e) {
            return n(t, 'cust/coupon/v1/obtainCustomerCouponPage', e);
        },
        findCouponTrans: function (e) {
            return n(t, 'cust/coupon/v1/findCouponTrans', e);
        },
        bind: function (e) {
            return n(t, 'terminal/v1/bind', e);
        },
        aboutUsGetInfo: function (e) {
            return n(t, 'pub/aboutUs/getInfo', e);
        },
        findBindAuditPage: function (e) {
            return n(t, 'terminal/v1/findCustomerAuditPage', e);
        },
        unbindApply: function (e) {
            return n(t, 'terminal/v1/unbindApply', e);
        },
        findPage: function (e) {
            return n(t, 'terminal/v1/findPage', e);
        },
        getCaptcha: function (e) {
            return n(t, 'pub/captcha/getCaptcha', e);
        },
        changePhoneSecurityCode: function (e) {
            return n(t, 'cust/operator/v1/changePhoneSecurityCode', e);
        },
        changeCustPhone: function (e) {
            return n(t, 'cust/operator/changeCustPhone', e);
        },
        custIncrInfoQuery: function (n) {
            return e(t, 'cust/customerBase/custIncrInfoQuery', n);
        },
        saveCustPromoteQuota: function (e) {
            return n(t, 'cust/bankCardBindRecord/saveCustPromoteQuota', e);
        },
        findCustExpandSwitch: function (e) {
            return n(t, 'agent/v1/findCustExpandSwitch', e);
        }
    };
module.exports = {
    centerAPI: u
};
