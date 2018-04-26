import Vue from 'vue';
import Router from 'vue-router';
// import mine from 'components/mine/mine';
// import discovery from 'components/discovery/discovery';
// import radioStation from 'components/radioStation/radioStation';
const mine = r => require.ensure([], () => r(require('@/components/mine/mine.vue')), 'mine')
const discovery = r => require.ensure([], () => r(require('@/components/discovery/discovery.vue')), 'discovery')
const radioStation = r => require.ensure([], () => r(require('@/components/radioStation/radioStation.vue')), 'radioStation')
Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      redirect: '/discovery'
    },
    {
      path: '/discovery',
      component: discovery
    },
    {
      path: '/radioStation',
      component: radioStation
    },
    {
      path: '/mine',
      component: mine
    }
  ]
});
