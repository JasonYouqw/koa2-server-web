const actions = {
  // 重置state状态
  resetClaimDetailStore({ commit }, data) {
    commit('RESET_CLAIM_DETAIL_STORE', data);
  },
  updateFullLoading({ commit }, data) {
    commit('UPDATE_FULL_LOADING', data);
  },
  updateClaimStatus({ commit }, data) {
    commit('UPDATE_CLAIM_STATUS', data);
  },
  updatePolicyId({ commit }, data) {
    commit('UPDATE_POLCIY_ID', data);
  },
  updateInsuranceCode({ commit }, data) {
    commit('UPDATE_INSURANCE_CODE', data);
  },
  updateReportNo({ commit }, data) {
    commit('UPDATE_REPORT_NO', data);
  },
  updatePolicyNo({ commit }, data) {
    commit('UPDATE_POLICY_NO', data);
  },
  saveNonClaimInfo({ commit }, data) {
    commit('SAVE_NON_CLAIM_INFO', data);
  },
  saveClaimInfo({ commit }, data) {
    commit('SAVE_CLAIM_INFO', data);
  },
  savePolicyInfo({ commit }, data) {
    commit('SAVE_POLICY_INFO', data);
  },
  saveBillList({ commit }, data) {
    commit('SAVE_BILL_LIST', data);
  },
  saveConfirmBtn({ commit }, data) {
    commit('SAVE_CONFIRM_BTN', data);
  },
  saveClaimBankInfo({ commit }, data) {
    commit('SAVE_CLAIM_BANK_INFO', data);
  },
  saveDidiClaimBankInfo({ commit }, data) {
    commit('SAVE_DIDI_CLAIM_BANK_INFO', data);
  },
  // 保存枚举类
  saveEnumStateByFeild({ commit }, data) {
    commit('SAVE_ENUM_STATE_BY_FEILD', data);
  },
  saveEnumsConfigList({ commit }, data) {
    commit('SAVE_ENUMS_CFG_LIST', data);
  },

  savePayeerBankInfoList({ commit }, data) {
    commit('SAVE_PAYEER_BANK_INFO_LIST', data);
  },
  saveInsureCertiNo({ commit }, data) {
    commit('SAVE_INSURE_CERTINO', data);
  },
  savePolicyHolderCertiNo({ commit }, data) {
    commit('SAVE_POLICYHOLDER_CERTI_NO', data);
  },
  savePolicyHolder({ commit }, data) {
    commit('SAVE_POLICYHOLDER', data);
  },
  saveInsureHolder({ commit }, data) {
    commit('SAVE_INSUREHOLDER', data);
  },
  // 更新省市区枚举
  updateAddressData({ commit }, data) {
    commit('UPDATE_ADDRESS_DATA', data);
  },
  updateTuhuRpAmount({ commit }, data) {
    commit('UPDATE_TUHU_RP_AMOUNT', data);
  },
  updateClaimSettlementList({ commit }, data) {
    commit('UPDATE_CLAIM_SETTLEMENT_LIST', data);
  },
  updateCanReserve({ commit }, data) {
    commit('CAN_EDIT_RESERVE', data);
  },
  updateCheckIsSendMaterial({ commit }, data) {
    commit('UPDATE_CHECK_IS_SEND_MATERIAL', data);
  },
  saveComplaintInfo({ commit }, data) {
    commit('SAVE_COMPLAINT_INFO', data);
  },
  saveIsConfirm({ commit }, data) {
    commit('SAVE_IS_CONFIRM', data);
  },
  updateRedirectFlag({ commit }, data) {
    commit('UPDATE_REDIRECT_FLAG', data);
  },
  setIsHiistoryDlgFlag({ commit }, data) {
    commit('IS_HISTORY_DLG_FLAG', data);
  },
  saveOperationHistoryList({ commit }, data) {
    commit('SAVE_OPERATION_HIS_LIST', data);
  },
  saveIsFinishedTaskSync({ commit }, data) {
    commit('SAVE_IS_FINISHED_TASK_SYNC', data);
  },
  setClaimBillId({ commit }, data) {
    commit('SET_BILL_ID', data);
  },
  setClaimBillNo({ commit }, data) {
    commit('SET_BILL_NO', data);
  },
  setIsShowReturnVisit({ commit }, data) {
    commit('SET_IS_SHOW_REETURN_VISIT', data);
  },
  setLicencePlateNo({ commit }, data) {
    commit('SET_LICENCE_PLATE_NO', data);
  },
  setPassengerCap({ commit }, data) {
    commit('SET_PASSENGER_CAP', data);
  },
  saveScoreObj({ commit }, data) {
    commit('SAVE_SCORE_OBJ', data);
  },
  setIsShowRiskVisit({ commit }, data) {
    commit('SET_IS_SHOW_RISK_VISIT', data);
  },
  updateRelPolicyNoList({ commit }, data) {
    commit('UPDATE_REL_POLICYNO_LIST', data);
  },
  saveAccidentDateForEmail({ commit }, data) {
    commit('SAVE_ACCIDENT_DATE_FOR_EMAIL', data);
  },
  setIsShowInsurerInfo({ commit }, data) {
    commit('SET_IS_SHOW_INSURER_INFO', data);
  },
  saveInsurerInfoList({ commit }, data) {
    commit('SAVE_INSURER_INFO_LIST', data);
  },
};

export default actions;
