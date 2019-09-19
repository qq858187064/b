import Vue from 'vue'
import Router from 'vue-router'
import aa from '@/components/aa.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'aa',
      component: aa
    },
    {
      path: '/a',
      name: 'a',
      component: aa
    },
    {
      path: '/b',
      name: 'b',
      component: aa
    }/**/
  ]
})
