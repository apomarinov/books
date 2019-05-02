import Vue from "vue";
import Vuex from "vuex";

import plugins from './plugins'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import Storage from "../classes/Storage";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        books: [],
        favorites: {
            _favorites: [],
            all() {
                if(!this._favorites.length) {
                    this._favorites = Storage.get('favorites') || [];
                }

                return this._favorites;
            },
            add(id) {
                if(this._favorites.indexOf(id) == -1) {
                    this._favorites.push(id);
                }
            },
            remove(id) {
                let bookIndex = this._favorites.indexOf(id);
                if(bookIndex >= 0) {
                    this._favorites.splice(bookIndex, 1);
                }
            }
        }
    },
    getters,
    actions,
    mutations,
    plugins
})
