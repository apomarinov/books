import Vue from 'vue';
import VueRouter from "vue-router";
import routes from "./routes";
import axios from 'axios';
import store from './store/index';

window.axios = axios;

Vue.config.productionTip = false;

Vue.use(VueRouter);

let app = new Vue({
    el: "#app",
    router: new VueRouter(routes),
    store
});

