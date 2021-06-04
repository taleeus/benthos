import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Epk from '../views/Epk.vue'
import Login from '../views/Login.vue'
import store from '../store/index'

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
    component: Epk,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  // Redirect to homepage, if no match found
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isLoggedIn) {
      next('/login')
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
