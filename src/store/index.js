import { createStore } from 'vuex'
import auth from './modules/auth'
import guesthouse from './modules/guesthouse'

export default createStore({
    state() {
        return {}
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        auth,
        guesthouse
    }
})