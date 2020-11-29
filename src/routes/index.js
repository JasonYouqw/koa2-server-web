import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('../pages/Login.vue'),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/claim',
      name: 'Claim',
      component: () => import('../pages/Claim.vue'),
      meta: {
        keepAlive: false
      },
      children: [
        {
          path: 'claimDetail',
          name: 'ClaimDetail',
          component: () => import('../pages/ClaimDetail.vue'),
          meta: {
            keepAlive: false
          },
        }
      ]
    }
  ]
});