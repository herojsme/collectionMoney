var t = require('./request.js').request,
    n = require('./request.js').POSTBaseUrl,
    e = require('./request.js').POSTImageUrl,
    u = require('./request.js').requestTokenTimeExpires,
    r = 'POST',
    o = {
        POSTBaseUrl: function () {
            return n();
        },
        POSTImageUrl: function () {
            return e();
        },
        POSTEdiToken: function (n) {
            return t(r, 'cust/faceRecognition/getEToken', n);
        },
        queryWxLogin: function (n) {
            return t(r, 'cust/wxLogin', n);
        },
        queryCodeLogin: function (n) {
            return t(r, 'cust/loginByCode', n);
        },
        queryBindAccontLogin: function (n) {
            return t(r, 'cust/accountListByWx', n);
        },
        POSTCouponTranList: function (n) {
            return t(r, 'cust/customer/POSTCouponTranList', n);
        },
        checkPassword: function (n) {
            return t(r, 'cust/operator/v1/checkLoginPassword', n);
        },
        checkShowIdCardAndRegister: function (n) {
            return t(r, 'cust/config', n);
        },
        queryCustLogin: function (n) {
            return t(r, 'cust/login', n);
        },
        uploadImg: function (n) {
            return t(r, 'pub/img/uploadImgWithoutAuth', n);
        },
        POSTAllTopBank: function (n) {
            return t(r, 'sys/bankInfoHead/v1/likeByBankName', n);
        },
        POSTBankAddress: function (n) {
            return t(r, 'areaInfo/findByBusinessType', n);
        },
        queryCustEditMccInfo: function (n) {
            return t(r, 'cust/businessChange/queryCustMccTip', n);
        },
        queryFixMccInfo: function (n) {
            return t(r, 'cust/custFee/updateAddress', n);
        },
        accountBal: function (n) {
            return t(r, 'account/v1/accountTypeBalFromMini', n);
        },
        queryCustomerCount: function (n) {
            return t(r, 'cust/customerBase/custCheckIdentity', n);
        },
        prepareCustWithdrawInfo: function (n) {
            return t(r, 'withdraw/v1/prepareCustWithdrawInfo', n);
        },
        saveCustPromoteQuota: function (n) {
            return t(r, 'cust/custPromoteQuota/saveCustPromoteQuota', n);
        },
        posBind: function (n) {
            return t(r, 'cust/pos/bind', n);
        },
        findByCustNoAll: function (n) {
            return t(r, 'cust/pos/findByCustNoAll', n);
        },
        posUnbind: function (n) {
            return t(r, 'cust/pos/unbind', n);
        },
        findAgentByCust: function (n) {
            return t(r, 'agent/v1/myExpandAgent', n);
        },
        queryCustQuestion: function (n) {
            return t(r, 'sys/question/v1/page', n);
        },
        queryCustSysNotice: function (n) {
            return t(r, 'sys/noticeInfo/v1/page', n);
        },
        queryCustPerNotice: function (n) {
            return t(r, 'sys/sms/v1/page', n);
        },
        readAppNotice: function (n) {
            return t(r, 'sys/noticeInfo/v1/read', n);
        },
        readPerNotice: function (n) {
            return t(r, 'sys/sms/v1/read', n);
        },
        querymergeList: function (n) {
            return t(r, 'cust/merge/unApply', n);
        },
        querymergePayList: function (n) {
            return t(r, 'cust/merge/apply', n);
        },
        queryMergeHistoryList: function (n) {
            return t(r, 'cust/merge/historySettleList', n);
        },
        queryMergeHistoryDetial: function (n) {
            return t(r, 'cust/merge/historyDetail', n);
        },
        querySetAcountInfo: function (n) {
            return t(r, 'cust/settle/findByCustomerNo', n);
        },
        POSTbranchBankList: function (n) {
            return t(r, 'sys/bankInfoBranch/v1/listBankPoint', n);
        },
        queryRegisterCust: function (n) {
            return t(r, 'cust/mini/selfIncr', n);
        },
        POSTAllareaInfo: function (n) {
            return t(r, 'sys/areaInfo/v1/cascadeAll', n);
        },
        getWxOpenId: function (n) {
            return t(r, 'cust/mini/getOpenId', n);
        },
        findAllProvince: function (n) {
            return t(r, '/areaInfo/findAllProvince', n);
        },
        POSTCityDiqu: function (n) {
            return t(r, 'areaInfo/findChildrenByParentCode', n);
        },
        POSTCustMcctype: function (n) {
            return t(r, 'pub/transMcc/listMcc', n);
        },
        querySettleChange: function (n) {
            return t(r, 'cust/businessChange/settleChange', n);
        },
        queryUpdateCustInfo: function (n) {
            return t(r, 'cust/customerIncr/notifyAuthInfo', n);
        },
        queryFaceResult: function (n) {
            return t(r, 'cust/customer/queryETokenResult', n);
        },
        queryFixCustDetailAddress: function (n) {
            return t(r, 'cust/businessChange/updateCustAddr', n);
        },
        queryCustEditAreaInfo: function (n) {
            return t(r, 'cust/businessChange/queryCustAddrTip', n);
        },
        queryChangeList: function (n) {
            return t(r, 'cust/businessChange/findByPageAll', n);
        },
        queryAreaIsContainMcc: function (n) {
            return t(r, 'cust/businessChange/updateCustAddrCheck', n);
        },
        queryCustAllInfo: function (t) {
            return u(r, 'cust/customerBase/custIncrInfoQuery', t);
        },
        queryCustHomeFunc: function (n) {
            return t(r, 'pub/appFunctionControl/controlFunction', n);
        },
        queryCustHomeBanner: function (n) {
            return t(r, 'pub/appBanner/homeActiveAppBannerList', n);
        },
        queryCustHomeNotice: function (n) {
            return t(r, 'sys/noticeInfo/v1/page', n);
        },
        queryCustShowYhq: function (n) {
            return t(r, 'cust/custFee/fixedEstreat', n);
        },
        queryCusPosFirstTxConfig: function () {
            return t('GET', 'cust/customer/posFirstTxConf');
        },
        queryCusVipInfo: function () {
            return t(r, 'cust/vip/v1/vipInfo');
        },
        createFrozenPayment: function (n) {
            return t(r, 'cust/vip/v1/createEleSignFrozen', n);
        },
        cancelFrozenPayment: function (n) {
            return t(r, 'cust/vip/v1/cancelEleSignFrozen', n);
        },
        queryTransSettleDateInterval: function () {
            return t(r, 'trans/v1/getTransTimeInterval');
        },
        queryTransOrderListNew: function (n) {
            return t(r, 'trans/v1/page4Mini', n);
        },
        totalTransAmount: function (n) {
            return t(r, 'trans/v1/total4Mini', n);
        },
        queryOrderDetail: function (n) {
            return t(r, 'trans/detail', n);
        },
        queryTransTicket: function (n) {
            return t(r, 'trans/sales/slip', n);
        },
        totalSettleAmount: function (n) {
            return t(r, 'trans/settle/v1/total', n);
        },
        querySettleListNew: function (n) {
            return t(r, 'trans/settle/v1/page', n);
        },
        querySettleDetails: function (n) {
            return t(r, 'trans/settle/v1/detail', n);
        },
        modifyLoginPassword: function (n) {
            return t(r, 'cust/operator/v1/modifyLoginPassword', n);
        },
        payPwdExist: function (n) {
            return t(r, 'cust/account/payPwdExist', n);
        },
        preCalcFee: function (n) {
            return t(r, 'cust/account/preCalcFee', n);
        },
        settPayPwdByLoginPassword: function (n) {
            return t(r, 'account/v1/setPayPassword', n);
        },
        queryAccHis: function (n) {
            return t(r, 'cust/account/queryAccHis', n);
        },
        queryAboutUs: function () {
            return t(r, 'pub/aboutUs/POSTInfo');
        },
        queryHotline: function () {
            return t(r, 'pub/aboutUs/hotline');
        },
        queryFeedbackOptions: function () {
            return t(r, 'sys/suggestion/v1/suggestionType');
        },
        commitFeedbackData: function (n) {
            return t(r, 'sys/suggestion/v1/save', n);
        },
        myFeedbackData: function (n) {
            return t(r, 'sys/suggestion/v1/page', n);
        },
        queryCustLimitRate: function () {
            return t(r, 'cust/custFee/queryCustomerFee');
        },
        queryLimitDetail: function (n) {
            return t(r, 'cust/custFee/queryCustomerQuota', n);
        },
        withDraw: function (n) {
            return t(r, 'cust/account/withDraw', n);
        },
        changeUsername: function (n) {
            return t(r, 'cust/operator/changeUsername', n);
        },
        withdrawDetail: function (n) {
            return t(r, 'cust/account/withdrawDetail', n);
        },
        updateArrivalMethodConfig: function (n) {
            return t(r, 'cust/businessChange/arrivalMethod', n);
        },
        queryFixSettleTime: function (n) {
            return t(r, 'cust/businessChange/settleTimeStatus', n);
        },
        POSTArrivalMethodNum: function () {
            return t(r, 'cust/customerConfig/POSTArrivalMethodNum');
        },
        POSTWechatInfo: function (n) {
            return t(r, 'cust/customerWechatIncr/POSTInfo', n);
        },
        updateCustAbbrName: function (n) {
            return t(r, 'cust/customerIncr/updateCustAbbrName', n);
        },
        logout: function (n) {
            return t(r, 'cust/logout', n);
        },
        checkCancleCustomer: function (n) {
            return t(r, 'cust/customer/checkCancleCustomer', n);
        },
        cancelOperatorFromCust: function (n) {
            return t(r, 'cust/customer/cancelOperatorFromCust', n);
        },
        POSTCustMgtConfig: function () {
            return t(r, 'cust/customerConfig/POSTCustMgtConfig');
        },
        updateCustMgtSwitch: function (n) {
            return t(r, 'cust/customerConfig/updateCustMgtSwitch', n);
        },
        POSTCustServiceChargeConfig: function () {
            return t(r, 'cust/customerConfig/POSTCustServiceChargeConfig');
        },
        updateCustServiceChargeConfig: function (n) {
            return t(r, 'cust/customerConfig/updateCustServiceChargeConfig', n);
        },
        getYhqEffect: function (n) {
            return t(r, 'miniCustomerCoupon/v1/findCouponByYesEffectPage', n);
        },
        getYhqUseRecord: function (n) {
            return t(r, 'miniCustomerCoupon/v1/findTransOrderCouponUsePage', n);
        },
        getHistoryYhq: function (n) {
            return t(r, 'miniCustomerCoupon/v1/findCouponByLostEffectPage', n);
        },
        POSTCouponList: function (n) {
            return t(r, 'cust/customer/POSTCouponList', n);
        },
        queryCustAccountList: function () {
            return t(r, 'cust/custAccountList');
        },
        queryAccountListByWx: function (n) {
            return t(r, 'cust/accountListByWx', n);
        },
        changeCustAccount: function (n) {
            return t(r, 'cust/loginByCode', n);
        },
        unbindWx: function (n) {
            return t(r, 'cust/unbindWx', n);
        },
        checkFaceHeadAuthentication: function (n) {
            return t(r, 'cust/existsAccountsByIdNo', n);
        },
        checkFaceAfterAuthentication: function (n) {
            return t(r, 'cust/custAccountListByFace', n);
        },
        checkwxrAccountExist: function (n) {
            return t(r, 'cust/loginAndBind4wxNoPsw', n);
        },
        queryExpanderStatus: function () {
            return t(r, 'cust/customerBase/POSTExpanderStatus');
        },
        loginToIndex: function (n) {
            return t(r, 'cust/login', n);
        },
        loginAndBind4wx: function (n) {
            return t(r, 'cust/loginAndBind4wx', n);
        },
        cancelfaceErrorCount: function (n) {
            return t(r, 'cust/customer/POSTCancelfaceErrorCount', n);
        },
        checkDoubleRecord: function () {
            return t(r, 'cust/customerBase/custCheckDoubleRecord');
        },
        getSignAgreementData: function (n) {
            return t(r, 'cloud/doubleRecord/v1/authCheckLegality', n);
        },
        saveCheckSign: function (n) {
            return t(r, 'cloud/doubleRecord/v1/saveAuthSignPromise', n);
        },
        getETokenParams: function (n) {
            return t(r, 'cloud/doubleRecord/v1/getAuthDoubleRecordToken', n);
        },
        saveCheckFace: function (n) {
            return t(r, 'cloud/doubleRecord/v1/getAuthDoubleRecordAndSave', n);
        },
        getTerSignAgreementData: function (n) {
            return t(r, 'cloud/doubleRecord/v1/scanCheckLegality', n);
        },
        saveTerCheckSign: function (n) {
            return t(r, 'cloud/doubleRecord/v1/saveScanSignPromise', n);
        },
        getTerETokenParams: function (n) {
            return t(r, 'cloud/doubleRecord/v1/getScanDoubleRecordToken', n);
        },
        saveTerCheckFace: function (n) {
            return t(r, 'cloud/doubleRecord/v1/getScanDoubleRecordAndSave', n);
        },
        queryMiniPremissions: function () {
            return t(r, 'cust/custPremissions/queryMiniPremissions');
        },
        queryEntrance: function () {
            return t(r, 'cust/custPremissions/entrance');
        }
    };
module.exports = {
    API: o
};
