import actions from './actions/loginAction';
import * as getters from './getters/loginGetter';
import mutations from './moutations/loginMoutation';
import state from './states/loginState';

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
