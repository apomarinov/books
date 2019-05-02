import Vue from 'vue';
import VueRouter from "vue-router";
import routes from "./routes";
import Vuex from 'vuex';
import axios from 'axios';
import books from './store/books';

window.axios = axios;

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);

let app = new Vue({
    el: "#app",
    router: new VueRouter(routes),
    store: new Vuex.Store({
        modules: {
            books
        }
    })
});

