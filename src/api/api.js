import { request, POSTBaseUrl, POSTImageUrl, requestTokenTimeExpires } from "./request"

export const API = {
    POSTBaseUrl: function () {
        return POSTBaseUrl();
    },
    POSTImageUrl: function () {
        return POSTImageUrl();
    },
    POSTEdiToken: function (data) {
        return request('POST', 'cust/faceRecognition/getEToken', data);
    },
    queryWxLogin: function (data) {
        return request('POST', 'cust/wxLogin', data);
    },
    queryCodeLogin: function (data) {
        return request('POST', 'cust/loginByCode', data);
    },
    queryBindAccontLogin: function (data) {
        return request('POST', 'cust/accountListByWx', data);
    },
    POSTCouponTranList: function (data) {
        return request('POST', 'cust/customer/POSTCouponTranList', data);
    },
    checkPassword: function (data) {
        return request('POST', 'cust/operator/v1/checkLoginPassword', data);
    },
    checkShowIdCardAndRegister: function (data) {
        return request('POST', 'cust/config', data);
    },
    queryCustLogin: function (data) {
        return request('POST', 'cust/login', data);
    },
    uploadImg: function (data) {
        return request('POST', 'pub/img/uploadImgWithoutAuth', data);
    },
    POSTAllTopBank: function (data) {
        return request('POST', 'sys/bankInfoHead/v1/likeByBankName', data);
    },
    POSTBankAddress: function (data) {
        return request('POST', 'areaInfo/findByBusinessType', data);
    },
    queryCustEditMccInfo: function (data) {
        return request('POST', 'cust/businessChange/queryCustMccTip', data);
    },
    queryFixMccInfo: function (data) {
        return request('POST', 'cust/custFee/updateAddress', data);
    },
    accountBal: function (data) {
        return request('POST', 'account/v1/accountTypeBalFromMini', data);
    },
    queryCustomerCount: function (data) {
        return request('POST', 'cust/customerBase/custCheckIdentity', data);
    },
    prepareCustWithdrawInfo: function (data) {
        return request('POST', 'withdraw/v1/prepareCustWithdrawInfo', data);
    },
    saveCustPromoteQuota: function (data) {
        return request('POST', 'cust/custPromoteQuota/saveCustPromoteQuota', data);
    },
    posBind: function (data) {
        return request('POST', 'cust/pos/bind', data);
    },
    findByCustNoAll: function (data) {
        return request('POST', 'cust/pos/findByCustNoAll', data);
    },
    posUnbind: function (data) {
        return request('POST', 'cust/pos/unbind', data);
    },
    findAgentByCust: function (data) {
        return request('POST', 'agent/v1/myExpandAgent', data);
    },
    queryCustQuestion: function (data) {
        return request('POST', 'sys/question/v1/page', data);
    },
    queryCustSysNotice: function (data) {
        return request('POST', 'sys/noticeInfo/v1/page', data);
    },
    queryCustPerNotice: function (data) {
        return request('POST', 'sys/sms/v1/page', data);
    },
    readAppNotice: function (data) {
        return request('POST', 'sys/noticeInfo/v1/read', data);
    },
    readPerNotice: function (data) {
        return request('POST', 'sys/sms/v1/read', data);
    },
    querymergeList: function (data) {
        return request('POST', 'cust/merge/unApply', data);
    },
    querymergePayList: function (data) {
        return request('POST', 'cust/merge/apply', data);
    },
    queryMergeHistoryList: function (data) {
        return request('POST', 'cust/merge/historySettleList', data);
    },
    queryMergeHistoryDetial: function (data) {
        return request('POST', 'cust/merge/historyDetail', data);
    },
    querySetAcountInfo: function (data) {
        return request('POST', 'cust/settle/findByCustomerNo', data);
    },
    POSTbranchBankList: function (data) {
        return request('POST', 'sys/bankInfoBranch/v1/listBankPoint', data);
    },
    queryRegisterCust: function (data) {
        return request('POST', 'cust/mini/selfIncr', data);
    },
    POSTAllareaInfo: function (data) {
        return request('POST', 'sys/areaInfo/v1/cascadeAll', data);
    },
    getWxOpenId: function (data) {
        return request('POST', 'cust/mini/getOpenId', data);
    },
    findAllProvince: function (data) {
        return request('POST', '/areaInfo/findAllProvince', data);
    },
    POSTCityDiqu: function (data) {
        return request('POST', 'areaInfo/findChildrenByParentCode', data);
    },
    POSTCustMcctype: function (data) {
        return request('POST', 'pub/transMcc/listMcc', data);
    },
    querySettleChange: function (data) {
        return request('POST', 'cust/businessChange/settleChange', data);
    },
    queryUpdateCustInfo: function (data) {
        return request('POST', 'cust/customerIncr/notifyAuthInfo', data);
    },
    queryFaceResult: function (data) {
        return request('POST', 'cust/customer/queryETokenResult', data);
    },
    queryFixCustDetailAddress: function (data) {
        return request('POST', 'cust/businessChange/updateCustAddr', data);
    },
    queryCustEditAreaInfo: function (data) {
        return request('POST', 'cust/businessChange/queryCustAddrTip', data);
    },
    queryChangeList: function (data) {
        return request('POST', 'cust/businessChange/findByPageAll', data);
    },
    queryAreaIsContainMcc: function (data) {
        return request('POST', 'cust/businessChange/updateCustAddrCheck', data);
    },
    queryCustAllInfo: function (request) {
        return requestTokenTimeExpires('POST', 'cust/customerBase/custIncrInfoQuery', request);
    },
    queryCustHomeFunc: function (data) {
        return request('POST', 'pub/appFunctionControl/controlFunction', data);
    },
    queryCustHomeBanner: function (data) {
        return request('POST', 'pub/appBanner/homeActiveAppBannerList', data);
    },
    queryCustHomeNotice: function (data) {
        return request('POST', 'sys/noticeInfo/v1/page', data);
    },
    queryCustShowYhq: function (data) {
        return request('POST', 'cust/custFee/fixedEstreat', data);
    },
    queryCusPosFirstTxConfig: function () {
        return request('GET', 'cust/customer/posFirstTxConf');
    },
    queryCusVipInfo: function () {
        return request('POST', 'cust/vip/v1/vipInfo');
    },
    createFrozenPayment: function (data) {
        return request('POST', 'cust/vip/v1/createEleSignFrozen', data);
    },
    cancelFrozenPayment: function (data) {
        return request('POST', 'cust/vip/v1/cancelEleSignFrozen', data);
    },
    queryTransSettleDateInterval: function () {
        return request('POST', 'trans/v1/getTransTimeInterval');
    },
    queryTransOrderListNew: function (data) {
        return request('POST', 'trans/v1/page4Mini', data);
    },
    totalTransAmount: function (data) {
        return request('POST', 'trans/v1/total4Mini', data);
    },
    queryOrderDetail: function (data) {
        return request('POST', 'trans/detail', data);
    },
    queryTransTicket: function (data) {
        return request('POST', 'trans/sales/slip', data);
    },
    totalSettleAmount: function (data) {
        return request('POST', 'trans/settle/v1/total', data);
    },
    querySettleListNew: function (data) {
        return request('POST', 'trans/settle/v1/page', data);
    },
    querySettleDetails: function (data) {
        return request('POST', 'trans/settle/v1/detail', data);
    },
    modifyLoginPassword: function (data) {
        return request('POST', 'cust/operator/v1/modifyLoginPassword', data);
    },
    payPwdExist: function (data) {
        return request('POST', 'cust/account/payPwdExist', data);
    },
    preCalcFee: function (data) {
        return request('POST', 'cust/account/preCalcFee', data);
    },
    settPayPwdByLoginPassword: function (data) {
        return request('POST', 'account/v1/setPayPassword', data);
    },
    queryAccHis: function (data) {
        return request('POST', 'cust/account/queryAccHis', data);
    },
    queryAboutUs: function () {
        return request('POST', 'pub/aboutUs/POSTInfo');
    },
    queryHotline: function () {
        return request('POST', 'pub/aboutUs/hotline');
    },
    queryFeedbackOptions: function () {
        return request('POST', 'sys/suggestion/v1/suggestionType');
    },
    commitFeedbackData: function (data) {
        return request('POST', 'sys/suggestion/v1/save', data);
    },
    myFeedbackData: function (data) {
        return request('POST', 'sys/suggestion/v1/page', data);
    },
    queryCustLimitRate: function () {
        return request('POST', 'cust/custFee/queryCustomerFee');
    },
    queryLimitDetail: function (data) {
        return request('POST', 'cust/custFee/queryCustomerQuota', data);
    },
    withDraw: function (data) {
        return request('POST', 'cust/account/withDraw', data);
    },
    changeUsername: function (data) {
        return request('POST', 'cust/operator/changeUsername', data);
    },
    withdrawDetail: function (data) {
        return request('POST', 'cust/account/withdrawDetail', data);
    },
    updateArrivalMethodConfig: function (data) {
        return request('POST', 'cust/businessChange/arrivalMethod', data);
    },
    queryFixSettleTime: function (data) {
        return request('POST', 'cust/businessChange/settleTimeStatus', data);
    },
    POSTArrivalMethodNum: function () {
        return request('POST', 'cust/customerConfig/POSTArrivalMethodNum');
    },
    POSTWechatInfo: function (data) {
        return request('POST', 'cust/customerWechatIncr/POSTInfo', data);
    },
    updateCustAbbrName: function (data) {
        return request('POST', 'cust/customerIncr/updateCustAbbrName', data);
    },
    logout: function (data) {
        return request('POST', 'cust/logout', data);
    },
    checkCancleCustomer: function (data) {
        return request('POST', 'cust/customer/checkCancleCustomer', data);
    },
    cancelOperatorFromCust: function (data) {
        return request('POST', 'cust/customer/cancelOperatorFromCust', data);
    },
    POSTCustMgtConfig: function () {
        return request('POST', 'cust/customerConfig/POSTCustMgtConfig');
    },
    updateCustMgtSwitch: function (data) {
        return request('POST', 'cust/customerConfig/updateCustMgtSwitch', data);
    },
    POSTCustServiceChargeConfig: function () {
        return request('POST', 'cust/customerConfig/POSTCustServiceChargeConfig');
    },
    updateCustServiceChargeConfig: function (data) {
        return request('POST', 'cust/customerConfig/updateCustServiceChargeConfig', data);
    },
    getYhqEffect: function (data) {
        return request('POST', 'miniCustomerCoupon/v1/findCouponByYesEffectPage', data);
    },
    getYhqUseRecord: function (data) {
        return request('POST', 'miniCustomerCoupon/v1/findTransOrderCouponUsePage', data);
    },
    getHistoryYhq: function (data) {
        return request('POST', 'miniCustomerCoupon/v1/findCouponByLostEffectPage', data);
    },
    POSTCouponList: function (data) {
        return request('POST', 'cust/customer/POSTCouponList', data);
    },
    queryCustAccountList: function () {
        return request('POST', 'cust/custAccountList');
    },
    queryAccountListByWx: function (data) {
        return request('POST', 'cust/accountListByWx', data);
    },
    changeCustAccount: function (data) {
        return request('POST', 'cust/loginByCode', data);
    },
    unbindWx: function (data) {
        return request('POST', 'cust/unbindWx', data);
    },
    checkFaceHeadAuthentication: function (data) {
        return request('POST', 'cust/existsAccountsByIdNo', data);
    },
    checkFaceAfterAuthentication: function (data) {
        return request('POST', 'cust/custAccountListByFace', data);
    },
    checkwxrAccountExist: function (data) {
        return request('POST', 'cust/loginAndBind4wxNoPsw', data);
    },
    queryExpanderStatus: function () {
        return request('POST', 'cust/customerBase/POSTExpanderStatus');
    },
    loginToIndex: function (data) {
        return request('POST', 'cust/login', data);
    },
    loginAndBind4wx: function (data) {
        return request('POST', 'cust/loginAndBind4wx', data);
    },
    cancelfaceErrorCount: function (data) {
        return request('POST', 'cust/customer/POSTCancelfaceErrorCount', data);
    },
    checkDoubleRecord: function () {
        return request('POST', 'cust/customerBase/custCheckDoubleRecord');
    },
    getSignAgreementData: function (data) {
        return request('POST', 'cloud/doubleRecord/v1/authCheckLegality', data);
    },
    saveCheckSign: function (data) {
        return request('POST', 'cloud/doubleRecord/v1/saveAuthSignPromise', data);
    },
    getETokenParams: function (data) {
        return request('POST', 'cloud/doubleRecord/v1/getAuthDoubleRecordToken', data);
    },
    saveCheckFace: function (data) {
        return request('POST', 'cloud/doubleRecord/v1/getAuthDoubleRecordAndSave', data);
    },
    getTerSignAgreementData: function (data) {
        return request('POST', 'cloud/doubleRecord/v1/scanCheckLegality', data);
    },
    saveTerCheckSign: function (data) {
        return request('POST', 'cloud/doubleRecord/v1/saveScanSignPromise', data);
    },
    getTerETokenParams: function (data) {
        return request('POST', 'cloud/doubleRecord/v1/getScanDoubleRecordToken', data);
    },
    saveTerCheckFace: function (data) {
        return request('POST', 'cloud/doubleRecord/v1/getScanDoubleRecordAndSave', data);
    },
    queryMiniPremissions: function () {
        return request('POST', 'cust/custPremissions/queryMiniPremissions');
    },
    queryEntrance: function () {
        return request('POST', 'cust/custPremissions/entrance');
    }
};

