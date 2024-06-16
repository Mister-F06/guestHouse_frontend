import axios from "../../service/fetch"

export default {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {

    },
    actions: {
        async addguesthouse({ dispatch }, formdata) {
            dispatch
            let response = await axios.post('/guest_houses/', formdata);
            return response
        },
        async listguesthouse() {
            let response = await axios.get('/guest_houses/');
            return response
        },

    }
}