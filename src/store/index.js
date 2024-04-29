import { createStore } from 'vuex'
import auth from './modules/auth'

export default createStore({
  state() {
    return {}
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
  }
})