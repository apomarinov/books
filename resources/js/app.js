import Vue from 'vue';
import VueRouter from "vue-router";
import axios from 'axios';
import buefy from 'buefy';
import Vue2Filters from 'vue2-filters';
import _ from 'lodash';

import routes from "./routes";
import store from './store/index';

window._ = _;
window.axios = axios;

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(buefy);
Vue.use(Vue2Filters);

let app = new Vue({
    el: "#app",
    router: new VueRouter(routes),
    store
});

