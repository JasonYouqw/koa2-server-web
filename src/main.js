import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/icon/iconfont.css';
import './assets/less/common.less';
import './assets/less/base.less';
import router from './routes/index';
// import store from './stores/index';
import axios from './utils/axios';

import App from './App.vue';
console.log('main .js')
Vue.use(ElementUI);

Vue.prototype.$axios = axios;

router.beforeEach((to, form , next) => {
  console.log(`to.path:${to.path}`);
  next();
});

window.globalVue = new Vue({
  el: '#app',
  router,
  // store,
  template: '<App/>',
  components: { App }
})

console.log(`window.globalVue:${window.globalVue}`)
