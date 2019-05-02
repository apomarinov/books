import Vue from "vue";
import Vuex from "vuex";

import plugins from './plugins'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        books: [],
        favorites: [],
        book: {}
    },
    getters,
    actions,
    mutations,
    plugins
})
