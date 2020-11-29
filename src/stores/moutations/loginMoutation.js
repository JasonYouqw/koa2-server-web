const loginMoutation = {
  CHANGE_FLAG: (state, flag) => {
    state.flag = flag;
    // window.localStorage.setItem('ec-flag', flag);
  },
  UPDATE_UNIT(state, payload) {
    state.unit = { ...state.unit, ...payload };
    // window.localStorage.setItem('ec-unit', payload);
  },
};

export default loginMoutation;
