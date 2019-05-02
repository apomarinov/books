import Vue from 'vue';
import VueRouter from "vue-router";
import axios from 'axios';
import buefy from 'buefy';

import routes from "./routes";
import store from './store/index';

window.axios = axios;

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(buefy);

let app = new Vue({
    el: "#app",
    router: new VueRouter(routes),
    store
});

