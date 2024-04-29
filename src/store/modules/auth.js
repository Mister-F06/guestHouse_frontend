import axios from "../../service/fetch"

export default {
    namespaced: true,
    state:{
      connected: false,
      user: null,
      token: null,
    },
    getters: {
        connected: state => state.connected
      },
    mutations:{
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
    actions:{
      async login({dispatch}, credentials){
        let response = await axios.post('/auth/login', credentials);
        return dispatch('attempt', response.data)
      },

      async activationCompte({dispatch}, data){
        dispatch
        let response = await axios.post('/auth/activation_compte', data);
        return response;
      },
      
      async sendMail({dispatch}, data){
        dispatch
        let response = await axios.post('/auth/sendmail', data);
        return response;
      },
      async fogotPassword({dispatch}, data){
        dispatch
        let response = await axios.post('/auth/fogotPassword', data);
        return response;
      },
      async createTeacher({dispatch}, data){
        dispatch
        let response = await axios.post('/created-teacher', data);
        return response;
      },
      async evaluateTeacher({dispatch}, data){
        dispatch
        let response = await axios.post('/evaluates', data);
        return response;
      },
      async evaluatePlateform({dispatch}, data){
        dispatch
        let response = await axios.post('/evaluates_plateforms', data);
        return response;
      },
      async sendMailAppreciate(){
        let response = await axios.get('/sendMailAppreciate');
        return response
      },
      async findAll(){
        let response = await axios.get('/evaluates');
        return response
      },
      async findEvaluatePlateform(){
        let response = await axios.get('/evaluates_plateforms');
        return response
      },
      async SendCourier({dispatch}, data){
        dispatch
        let response = await axios.post('/send-courier', data);
        return response;
      },

      logout({commit}){
        return axios.get('/auth/logout').then(() => {
          commit('SET_TOKEN', null)

          commit('SET_USER', null)

          commit('SET_CONNECTED', false)
          localStorage.clear();
        })
      },

      async register({dispatch},data){
        dispatch
        let response = await axios.post('/auth/register', data);
        return response;
      },

      async attempt({ commit , state}, data){
        if (data) {
         localStorage.setItem('token',data);
          commit('SET_CONNECTED', true)
          commit('SET_TOKEN', data)
        }

        if (!state.token) {
          return
        }
        try {
          let response = await axios.post('/auth/me',data)
          commit('SET_USER', response.data.user)

        } catch (error) {
          
          commit('SET_TOKEN', null)

          commit('SET_USER', null)

          commit('SET_CONNECTED', false)
        }
      },

    }
}