import Vue from 'vue';
import DashboardPlugin from './plugins/dashboard-plugin';
import App from './App.vue';
import store from '../src/store/index'
import Notifications from 'vue-notification';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import axios from '../src/service/interceptor';
import '../src/css_mosso/css/bootstrap.min.css';
import '../src/css_mosso/css/bootstrap-icons.css';
import '../src/css_mosso/css/owl.carousel.min.css';
import '../src/css_mosso/css/tooplate-moso-interior.css';

// Import jQuery and Bootstrap
import 'bootstrap';
import 'jquery';
import '../src/css_mosso/js/jquery.min.js';
// import '../src/css_mosso/js/bootstrap.min.js';
import '../src/css_mosso/js/click-scroll.js';
import '../src/css_mosso/js/jquery.backstretch.min.js';
import '../src/css_mosso/js/owl.carousel.min.js';
import '../src/css_mosso/js/custom.js';
window.$ = window.jQuery = require('jquery');
window.bootstrap = require('bootstrap');
// router setup
import router from './routes/router';
// import middleware from './routes/middleware';
// plugin setup
Vue.use(DashboardPlugin);
Vue.use(Notifications);
Vue.use(Toast);
// Vue.use(middleware);
Vue.use(axios);

/* eslint-disable no-new */
store.dispatch("auth/attempt");
new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app');