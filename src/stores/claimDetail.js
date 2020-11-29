import actions from './actions/claimDetailAction';
import * as getters from './getters/claimDetailGetter';
import mutations from './moutations/claimDetailMoutation';
import state from './states/claimDetailState';

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
