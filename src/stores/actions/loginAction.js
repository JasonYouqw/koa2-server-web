import Qs from 'qs';
import store from '@/service/api';
import Utils from '../../utils/utils';

const loginActions = {
  updateUnit({ commit }, data) {
    commit('UPDATE_UNIT', data);
  },
  changeFlag({ commit }, data) {
    commit('CHANGE_FLAG', data);
  },
  // getUserId() {
  //   return JSON.parse(unescape(Utils.getCookie('user'))) ? JSON.parse(unescape(Utils.getCookie('user'))).id : '';
  // },
  // getUserName() {
  //   return JSON.parse(unescape(Utils.getCookie('user'))) ? JSON.parse(unescape(Utils.getCookie('user'))).username : '';
  // },
  // 内部登录
  toLogin({ commit }, flag) {
    const search = window.location.search.slice(1);
    const queryObj = Qs.parse(search);
    queryObj.service = 'za-burning-legion';
    commit('CHANGE_FLAG', flag);
    store.login.getSSOUserInfo(queryObj).then((response) => {
      if (response && response.id) {
        Utils.setCookie('user', JSON.stringify(response), 10);
        window.location.search = '';
      } else {
        // 登陆失败response.result = false
        Utils.delCookie('user');
        Utils.removeLocalStorage('activeModule');
        Utils.removeLocalStorage('activeMenu');
        Utils.removeLocalStorage('activeMenuIndex');
        window.location.href = `${window.location.origin}/#/login`;
      }
    }).catch((err) => {
      // this.$message.error('内部登录失败,请重新登录!');
      console.log(err); // eslint-disable-line
    });
  },
  // 登出
  logOut({ commit }, flag) {
    commit('CHANGE_FLAG', flag);
    return new Promise((resolve) => {
      store.login.logOut().then(() => {
        Utils.delCookie('user');
        Utils.removeLocalStorage('activeModule');
        Utils.removeLocalStorage('activeMenu');
        Utils.removeLocalStorage('activeMenuIndex');
      }).catch((err) => {
        console.log(err); // eslint-disable-line
      });
      resolve();
    }).catch((err) => {
      console.log(err); // eslint-disable-line
    });
  },
};

export default loginActions;
