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
            let response = await axios.post('/guest_houses/managers/', formdata);
            return response
        },
        async updateguesthouse({ dispatch }, formData) {
            dispatch
            const id = formData.get('id')
            let response = await axios.post(`/guest_houses/managers/update/${id}`, formData);
            return response
        },
        async updateVisibility({ dispatch }, formV) {
            dispatch
            let response = await axios.put(`/guest_houses/managers/${formV.id}/update/visibility`, formV);
            return response
        },
        async updateStatus({ dispatch }, formS) {
            dispatch
            let response = await axios.put(`/guest_houses/admins/${formS.id}/update/status`, formS);
            return response
        },
        async deleteguesthouse({ dispatch }, id) {
            dispatch
            let response = await axios.delete(`/guest_houses/managers/delete/${id}`);
            return response
        },
        async detailguesthousebyslug({ dispatch }, slug) {
            dispatch
            let response = await axios.get(`/guest_houses/${slug}`);
            return response
        },
        async verifyReservation({ dispatch }, uid) {
            try {
                // Assuming baseURL is already configured in axios
                const response = await axios.get(`/reservations/${uid}`, {
                    responseType: 'blob', // To handle binary data like images
                });
                return response;
            } catch (error) {
                console.error('Error verifying reservation:', error);
                throw error;
            }
        },

        async listguesthouse() {
            let response = await axios.get('/guest_houses');
            return response
        },
        async listguesthouseManagers() {
            let response = await axios.get('/guest_houses/managers');
            return response
        },
        async listguesthouseAdmin() {
            let response = await axios.get('/guest_houses/admins/list');
            return response
        },
        async createReservation({ dispatch }, data) {
            dispatch
            let response = await axios.post('/reservations/', data);
            return response
        },
        async me() {
            let response = await axios.get('/users/me');
            return response
        },
        async guesthouseSearch({ dispatch }, data) {
            dispatch
            let response = await axios.post('/guest_houses/search', data);
            return response
        },
        async statsManagers() {
            let response = await axios.get('/dashboard/managers');
            return response
        },
    }
}