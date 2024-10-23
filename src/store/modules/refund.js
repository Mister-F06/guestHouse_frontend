import axios from "../../service/fetch"

export default {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {

    },
    actions: {
        async makeRefund({ dispatch }, data) {
            dispatch
            let response = await axios.post('/refunds/admin/', data);
            return response
        },
        async inventoryAdmin() {
            let response = await axios.get('/refunds/admin/inventory');
            return response
        },
        async inventoryManager() {
            let response = await axios.get('/refunds/managers/inventory');
            return response
        },

    }
}