import { request, POSTBaseUrl, POSTImageUrl, requestTokenTimeExpires } from "./request"


export const toolsAPI = {
    accountBal: function (data) {
        return request('POST', 'account/v1/accountTypeBalFromMini', data);
    },
    prepareCustWithdrawInfo: function (data) {
        return request('POST', 'withdraw/v1/prepareCustWithdrawInfo', data);
    },
    settleAccountFundHisByMini: function (data) {
        return request('POST', 'account/v1/settleAccountFundHisByMini', data);
    },
    preCalcFee: function (data) {
        return request('POST', 'withdraw/v1/preCalcFee', data);
    },
    withDraw: function (data) {
        return request('POST', 'withdraw/v1/withDraw', data);
    },
    settleAccountFundHisDetailByMini: function (data) {
        return request('POST', 'account/v1/settleWithdrawDetailByMini', data);
    },
    rewardAccountFundHisByMini: function (data) {
        return request('POST', 'account/v1/rewardAccountFundHisByMini', data);
    },
    rewardAccountFundHisDetailByMini: function (data) {
        return request('POST', 'account/v1/rewardWithdrawDetailByMini', data);
    },
    checkPayPasswordIsExist: function (data) {
        return request('POST', 'account/v1/checkPayPasswordIsExist', data);
    }
};
