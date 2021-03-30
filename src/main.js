import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'

// Configuration VueAnalytics
Vue.use(VueAnalytics, { 
  id: 'G-CKZ7WQGF5D',
  debug: {
    sendHitTask: process.env.NODE_ENV === 'production'
  },
  set: [
    { field: 'anonymizeIp', value: true }
  ],
  router 
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
