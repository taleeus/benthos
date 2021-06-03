import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Epk from '../views/Epk.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/epk',
    name: 'Epk',
    component: Epk
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
