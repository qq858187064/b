import Vue from 'vue'
import App from '@p/b/App.vue'
import router from '@/router.js'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#appb',
  router,
  components: { App },
  template: '<App/>'
})
