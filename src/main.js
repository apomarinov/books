import Vue from 'vue';
import VueRouter from "vue-router";
import axios from 'axios';
import buefy from 'buefy';
import Vue2Filters from 'vue2-filters';
import _ from 'lodash';
import routes from "./routes";
import store from './store/index';
import 'buefy/dist/buefy.css'
import App from './App.vue'

window._ = _;
window.axios = axios;

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(buefy);
Vue.use(Vue2Filters);

new Vue({
    render: h => h(App),
    router: new VueRouter(routes),
    store
}).$mount('#app')
