import axios from "../../service/fetch"

export default {
    namespaced: true,
    state: {
        connected: false,
        user: null,
        token: null,
    },
    getters: {
        connected: state => state.connected
    },
    mutations: {
        SET_USER(state, data) {
            state.user = data
        },
        SET_CONNECTED(state, data) {
            state.connected = data
        },
        SET_TOKEN(state, data) {
            state.token = data
        },
    },
    actions: {
        async login({ dispatch }, credentials) {
            dispatch
            let response = await axios.post('/auth/login', credentials);
            return dispatch('attempt', response.data.message.token)
        },
        async findAll() {
            let response = await axios.get('/evaluates');
            return response
        },

        logout({ commit }) {
            return axios.get('/auth/logout').then(() => {
                commit('SET_TOKEN', null)

                commit('SET_USER', null)

                commit('SET_CONNECTED', false)
                localStorage.clear();
            })
        },

        async register({ dispatch }, data) {
            dispatch
            let response = await axios.post('/auth/register', data);
            return response;
        },

        async attempt({ commit, state }, data) {
            if (data) {
                localStorage.setItem('token', data);
                commit('SET_CONNECTED', true)
                commit('SET_TOKEN', data)
            }
            if (localStorage.getItem('token') == null) {
                return
            }
            try {
                let response = await axios.get('/users/me')
                commit('SET_USER', response.data.user)

            } catch (error) {

                commit('SET_TOKEN', null)

                commit('SET_USER', null)

                commit('SET_CONNECTED', false)
            }
        },

        async getNewLink({ dispatch }, credentials) {
            dispatch
            let response = await axios.put('/auth/resent/verify/link', credentials);
            return response
        },
        async verifyEmail({ dispatch }, emailData) {
            try {
                // Construire l'URL avec les paramètres
                const url = `/auth/verify/email?expires=${emailData.expires}&token=${emailData.token}&signature=${emailData.signature}`;

                // Effectuer la requête POST avec l'URL construite et les données
                const response = await axios.post(url, {});

                return response;
            } catch (error) {
                // Gérer les erreurs ici
                throw error;
            }
        },

    }
}