import Vue from 'vue'
import App from '@p/a/App.vue'
import router from '@/router.js'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#appa',
  router,
  components: { App },
  template: '<App/>'
})
