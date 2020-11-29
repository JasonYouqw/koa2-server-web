export const fullscreenLoading = (state) => {
  return state.fullscreenLoading;
};
// 理赔进度状态
export const claimStatus = (state) => {
  return state.claimStatus;
};
export const policyId = (state) => {
  return state.policyId;
};
export const packageDefId = (state) => {
  return state.policyInfo ? state.policyInfo.packageDefId : null;
};
export const campaignDefId = (state) => {
  return state.policyInfo ? state.policyInfo.campaignDefId : null;
};
export const insuranceTypeCode = (state) => {
  return state.claimInfo.insuranceTypeCode;
};
export const reportNo = (state) => {
  return state.reportNo;
};
export const policyNo = (state) => {
  return state.policyNo;
};
export const nonClaimInfo = (state) => {
  return state.nonClaimInfo;
};
export const claimReportInfo = (state) => {
  return state.nonClaimInfo.info;
};
export const claimInfo = (state) => {
  return state.claimInfo;
};
export const policyInfo = (state) => {
  return state.policyInfo;
};
export const billList = (state) => {
  return state.billList;
};
export const confirmBtnsObj = (state) => {
  return state.confirmBtnsObj;
};
export const claimBankInfo = (state) => {
  return state.claimBankInfo || [];
};
export const didiClaimBankInfo = (state) => {
  return state.didiClaimBankInfo || [];
};

// 枚举类
export const enumsConfigList = (state) => {
  return state.enumsConfigList;
};
export const certTypeCodeObj = (state) => {
  return state.enumsConfigList.certTypeCodeObj;
};
export const claimStatusList = (state) => {
  return state.enumsConfigList.claimStatusList;
};
export const claimStatusObj = (state) => {
  return state.enumsConfigList.claimStatusObj;
};
export const treatmentTypeList = (state) => {
  return state.enumsConfigList.treatmentTypeList;
};
export const treatmentTypeObj = (state) => {
  return state.enumsConfigList.treatmentTypeObj;
};
export const accidentBillTypeList = (state) => {
  return state.enumsConfigList.accidentBillTypeList;
};
export const medicalInsuranceTypeList = (state) => {
  return state.enumsConfigList.medicalInsuranceTypeList;
};
export const materialTypeList = (state) => {
  return state.enumsConfigList.materialTypeList;
};
export const settlementTypeObj = (state) => {
  return state.enumsConfigList.settlementTypeObj;
};
export const indemnityTypeObj = (state) => {
  return state.enumsConfigList.indemnityTypeObj;
};
export const payStatesObj = (state) => {
  return state.enumsConfigList.payStatesObj;
};
export const researchTypeList = (state) => {
  return state.enumsConfigList.researchTypeList;
};
export const researchTypeObj = (state) => {
  return state.enumsConfigList.researchTypeObj;
};
export const logDataBizTypeObj = (state) => {
  return state.enumsConfigList.logDataBizTypeObj;
};
export const woTypeObj = (state) => {
  return state.enumsConfigList.woTypeObj;
};
export const woStatusObj = (state) => {
  return state.enumsConfigList.woStatusObj;
};
export const coreClaimStatusObj = (state) => {
  return state.enumsConfigList.coreClaimStatusObj;
};
export const payeerBankInfoList = (state) => {
  return state.payeerBankInfoList;
};
export const insurantCertificateNo = (state) => {
  return state.insurantCertificateNo;
};
export const policyHolderCertificateNo = (state) => {
  return state.policyHolderCertificateNo;
};
export const policyHolder = (state) => {
  return state.policyHolder;
};
export const insureHolder = (state) => {
  return state.insureHolder;
};
// 省市区枚举
export const addressData = (state) => {
  return state.addressData;
};
export const claimHospitalLiabilitySettlementList = (state) => {
  return state.claimHospitalLiabilitySettlementList || [];
};
export const currentTuhuReportAmount = (state) => {
  return state.currentTuhuReportAmount;
};
export const canEditReserve = (state) => {
  return state.canEditReserve;
};
export const checkIsSendMaterial = (state) => {
  return state.checkIsSendMaterial;
};
export const complaintInfo = (state) => {
  return state.complaintInfo;
};
export const redirectFlag = (state) => {
  return state.redirectFlag;
};
export const isHistoryDialogFlag = (state) => {
  return state.isHistoryDialogFlag;
};
export const operationHistoryList = (state) => {
  return state.operationHistoryList;
};
export const batchClaimBillId = (state) => {
  return state.batchClaimBillId;
};
export const batchClaimBillNo = (state) => {
  return state.batchClaimBillNo;
};
export const isFinishedTaskSync = (state) => {
  return state.isFinishedTaskSync;
};
export const isConfirm = (state) => {
  return state.isConfirm;
};
export const isShowReturnVisit = (state) => {
  return state.isShowReturnVisit;
};
export const licencePlateNo = (state) => {
  return state.licencePlateNo;
};
export const passengerCap = (state) => {
  return state.passengerCap;
};
export const scoreObj = (state) => {
  return state.scoreObj;
};
export const isShowRiskVisit = (state) => {
  return state.isShowRiskVisit;
};
export const relPolicyNoList = (state) => {
  return state.relPolicyNoList;
};
export const accidentDateForEmail = (state) => {
  return state.accidentDateForEmail;
};
export const previewMsgType = (state) => {
  return state.claimInfo.previewMsgType;
};
export const isShowInsurerInfo = (state) => {
  return state.isShowInsurerInfo;
};
export const insurerInfoList = (state) => {
  return state.insurerInfoList;
};
