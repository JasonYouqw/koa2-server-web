// import utils from '@/utils/utils';
import {
  defaultClaimDetailState,
} from '@/utils/models/claimDetailModel.js';

const mutations = {
  RESET_CLAIM_DETAIL_STORE(state) {
    Object.keys(defaultClaimDetailState).forEach((key) => {
      state[key] = defaultClaimDetailState[key];
    });
  },
  UPDATE_FULL_LOADING(state, payload) {
    state.fullscreenLoading = payload;
  },
  UPDATE_CLAIM_STATUS(state, payload) {
    state.claimStatus = payload;
  },
  UPDATE_POLCIY_ID(state, payload) {
    state.policyId = payload;
  },
  UPDATE_INSURANCE_CODE(state, payload) {
    state.insuranceTypeCode = payload;
  },
  UPDATE_REPORT_NO(state, payload) {
    state.reportNo = payload;
  },
  UPDATE_POLICY_NO(state, payload) {
    state.policyNo = payload;
  },
  SAVE_NON_CLAIM_INFO(state, payload) {
    state.nonClaimInfo = { ...state.nonClaimInfo, ...payload };
  },
  SAVE_CLAIM_INFO(state, payload) {
    state.claimInfo = { ...state.claimInfo, ...payload };
  },
  SAVE_NON_POLICY_INFO(state, payload) {
    state.nonPolicyInfo = { ...state.nonPolicyInfo, ...payload };
  },
  SAVE_POLICY_INFO(state, payload) {
    state.policyInfo = { ...state.policyInfo, ...payload };
  },
  SAVE_BILL_LIST(state, payload) {
    state.billList = Array.isArray(payload) ? payload.concat() : [];
  },
  SAVE_CONFIRM_BTN(state, payload) {
    state.confirmBtnsObj = { ...state.confirmBtnsObj, ...payload };
  },
  SAVE_CLAIM_BANK_INFO(state, payload) {
    state.claimBankInfo = payload ? payload.concat() : [];
  },
  SAVE_DIDI_CLAIM_BANK_INFO(state, payload) {
    state.didiClaimBankInfo = payload ? payload.concat() : [];
  },
  // 保存枚举类
  SAVE_ENUM_STATE_BY_FEILD(state, payload) {
    const { feild, value } = payload;
    state.enumsConfigList[feild] = { ...state.enumsConfigList[feild], ...value };
    state.enumsConfigList = { ...state.enumsConfigList };
  },
  SAVE_ENUMS_CFG_LIST(state, payload) {
    state.enumsConfigList = { ...state.enumsConfigList, ...payload };
  },

  SAVE_PAYEER_BANK_INFO_LIST(state, payload) {
    state.payeerBankInfoList = payload.concat();
  },
  SAVE_INSURE_CERTINO(state, payload) {
    state.insurantCertificateNo = payload;
  },
  SAVE_POLICYHOLDER_CERTI_NO(state, payload) {
    state.policyHolderCertificateNo = payload;
  },
  SAVE_POLICYHOLDER(state, payload) {
    state.policyHolder = { ...state.policyHolder, ...payload };
  },
  SAVE_INSUREHOLDER(state, payload) {
    state.insureHolder = { ...state.insureHolder, ...payload };
  },
  UPDATE_ADDRESS_DATA(state, payload) {
    state.addressData = { ...state.addressData, ...payload };
  },
  UPDATE_TUHU_RP_AMOUNT(state, payload) {
    state.currentTuhuReportAmount = payload;
  },
  UPDATE_REL_POLICYNO_LIST(state, payload) {
    state.relPolicyNoList = payload;
  },
  UPDATE_CLAIM_SETTLEMENT_LIST(state, payload) {
    state.claimHospitalLiabilitySettlementList = payload.concat();
  },
  CAN_EDIT_RESERVE(state, payload) {
    state.canEditReserve = payload;
  },
  UPDATE_CHECK_IS_SEND_MATERIAL(state, payload) {
    state.checkIsSendMaterial = payload;
  },
  SAVE_COMPLAINT_INFO(state, payload) {
    state.complaintInfo = { ...state.complaintInfo, ...payload };
  },
  UPDATE_REDIRECT_FLAG(state, payload) {
    state.redirectFlag = payload;
  },
  IS_HISTORY_DLG_FLAG(state, payload) {
    state.isHistoryDialogFlag = payload;
  },
  SAVE_OPERATION_HIS_LIST(state, payload) {
    state.operationHistoryList = payload.concat();
  },
  SAVE_IS_FINISHED_TASK_SYNC(state, payload) {
    state.isFinishedTaskSync = payload;
  },
  SAVE_IS_CONFIRM(state, payload) {
    state.isConfirm = payload;
  },
  SET_BILL_ID(state, payload) {
    state.batchClaimBillId = payload;
  },
  SET_BILL_NO(state, payload) {
    state.batchClaimBillNo = payload;
  },
  SET_IS_SHOW_REETURN_VISIT(state, payload) {
    state.isShowReturnVisit = payload;
  },
  SET_LICENCE_PLATE_NO(state, payload) {
    state.licencePlateNo = payload;
  },
  SET_PASSENGER_CAP(state, payload) {
    state.passengerCap = payload;
  },
  SAVE_SCORE_OBJ(state, payload) {
    state.scoreObj = { ...state.scoreObj, ...payload };
  },
  SAVE_ACCIDENT_DATE_FOR_EMAIL(state, payload) {
    state.accidentDateForEmail = payload;
  },
  SET_IS_SHOW_RISK_VISIT(state, payload) {
    state.isShowRiskVisit = payload;
  },
  SET_IS_SHOW_INSURER_INFO(state, payload) {
    state.isShowInsurerInfo = payload;
  },
  SAVE_INSURER_INFO_LIST(state, payload) {
    state.insurerInfoList = payload ? payload.concat() : [];
  },
};

export default mutations;
