var t = require('./request.js').request,
    r = (require('./request.js').POSTBaseUrl, require('./request.js').POSTImageUrl, 'POST'),
    n = {
        accountBal: function (n) {
            return t(r, 'account/v1/accountTypeBalFromMini', n);
        },
        prepareCustWithdrawInfo: function (n) {
            return t(r, 'withdraw/v1/prepareCustWithdrawInfo', n);
        },
        settleAccountFundHisByMini: function (n) {
            return t(r, 'account/v1/settleAccountFundHisByMini', n);
        },
        preCalcFee: function (n) {
            return t(r, 'withdraw/v1/preCalcFee', n);
        },
        withDraw: function (n) {
            return t(r, 'withdraw/v1/withDraw', n);
        },
        settleAccountFundHisDetailByMini: function (n) {
            return t(r, 'account/v1/settleWithdrawDetailByMini', n);
        },
        rewardAccountFundHisByMini: function (n) {
            return t(r, 'account/v1/rewardAccountFundHisByMini', n);
        },
        rewardAccountFundHisDetailByMini: function (n) {
            return t(r, 'account/v1/rewardWithdrawDetailByMini', n);
        },
        checkPayPasswordIsExist: function (n) {
            return t(r, 'account/v1/checkPayPasswordIsExist', n);
        }
    };
module.exports = {
    toolsAPI: n
};
