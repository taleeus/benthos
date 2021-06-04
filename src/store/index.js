import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: !!localStorage.getItem('jwt') || ""
  },
  mutations: {
    SET_TOKEN(state, jwt) {
      localStorage.setItem('jwt', `Bearer ${jwt}`)
      state.token = `Bearer ${jwt}`
      Vue.axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`
    }
  },
  actions: {
    login({ commit }, user) {
      const { username, password } = user
      let endpoint = process.env.VUE_APP_AUTH_ENDPOINT

      return Vue.axios.post(endpoint + '/login', {
        username: username,
        password: password
      }).then(res => {
        return commit('SET_TOKEN', res.data.jwt)
      })
    }
  },
  getters: {
    isLoggedIn: (state) => {
      if (!state.token || state.token == "") {
        return false
      }

      let jwt = localStorage.getItem('jwt').replace('Bearer ', '').trim()
      let exp = JSON.parse(atob(jwt.split('.')[1])).exp

      return exp > Date.now() / 1000
    }
  }
})
