import Vue from 'vue';
import Vuex from 'vuex';
import MiddleWaves from './middle-wares';
import ClaimDetails from './claimDetail';
import Login from './login';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    claimDetail: ClaimDetails,
    login: Login,
  },
  // plugins: MiddleWaves,
});
