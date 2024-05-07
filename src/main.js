import Vue from 'vue';
import DashboardPlugin from './plugins/dashboard-plugin';
import App from './App.vue';
import store from './store';
import Notifications from 'vue-notification';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

// router setup
import router from './routes/router';
// plugin setup
Vue.use(DashboardPlugin);
Vue.use(Notifications); 
Vue.use(Toast);
/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
