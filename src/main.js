import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueGtag from 'vue-gtag'
import vuetify from './plugins/vuetify'
import Vuex from 'vuex'

Vue.use(Vuex)

// Configuration VueAnalytics
Vue.use(VueGtag, {
  config: {
    id: 'G-CKZ7WQGF5D',
    params: {
      'anonymize_ip': true
    }
  }
},
  router
)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
