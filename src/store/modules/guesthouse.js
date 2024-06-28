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
        async updateguesthouse({ dispatch }, formData) {
            dispatch
            const id = formData.get('id')
            let response = await axios.post(`/guest_houses/update/${id}`, formData);
            return response
        },
        async deleteguesthouse({ dispatch }, id) {
            dispatch
            let response = await axios.delete(`/guest_houses/delete/${id}`);
            return response
        },

        async listguesthouse() {
            let response = await axios.get('/guest_houses/');
            return response
        },

    }
}
