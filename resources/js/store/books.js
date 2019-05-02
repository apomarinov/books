import Book from '../models/Book'
import Cache from '../classes/Cache'

// initial state
const state = {
    all: []
}

// getters
const getters = {}

// actions
const actions = {
    getAllBooks ({ commit }) {
        Cache.daily().set({a: 123, maxResults: 123}, [1, 2, 3]);
        console.log(Cache.daily().get({a: 123, maxResults: 123}));
        Book.all().then(response => {
            console.log(response);
        });
        // console.log();
        // shop.getProducts(products => {
        //     commit('setProducts', products)
        // })
    }
}

// mutations
const mutations = {
    setProducts (state, products) {
        state.all = products
    },

    decrementProductInventory (state, { id }) {
        const product = state.all.find(product => product.id === id)
        product.inventory--
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
