import { request } from "./request"

export const centerAPI = {
    obtainCustomerCouponPage: function (data) {
        return request('POST', 'cust/coupon/v1/obtainCustomerCouponPage', data);
    },
    findCouponTrans: function (data) {
        return request('POST', 'cust/coupon/v1/findCouponTrans', data);
    },
    bind: function (data) {
        return request('POST', 'terminal/v1/bind', data);
    },
    aboutUsGetInfo: function (data) {
        return request('POST', 'pub/aboutUs/getInfo', data);
    },
    findBindAuditPage: function (data) {
        return request('POST', 'terminal/v1/findCustomerAuditPage', data);
    },
    unbindApply: function (data) {
        return request('POST', 'terminal/v1/unbindApply', data);
    },
    findPage: function (data) {
        return request('POST', 'terminal/v1/findPage', data);
    },
    getCaptcha: function (data) {
        return request('POST', 'pub/captcha/getCaptcha', data);
    },
    changePhoneSecurityCode: function (data) {
        return request('POST', 'cust/operator/v1/changePhoneSecurityCode', data);
    },
    changeCustPhone: function (data) {
        return request('POST', 'cust/operator/changeCustPhone', data);
    },
    custIncrInfoQuery: function (n) {
        return request('POST', 'cust/customerBase/custIncrInfoQuery', n);
    },
    saveCustPromoteQuota: function (data) {
        return request('POST', 'cust/bankCardBindRecord/saveCustPromoteQuota', data);
    },
    findCustExpandSwitch: function (data) {
        return request('POST', 'agent/v1/findCustExpandSwitch', data);
    }
};

