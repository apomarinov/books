import Storage from "../classes/Storage";

export default {
    setBooks (state, data) {
        state.books = data.result;
    },
    setBook (state, data) {
        state.book = data.result;
    },
    clearBooks (state) {
        state.books = [];
    },
    addFavoriteBook(state, id) {
        if(!state.favorites.length) {
            state.favorites = Storage.get('favorites');
        }
        if(state.favorites.indexOf(id) == -1) {
            state.favorites.push(id);
        }
    },
    removeFavoriteBook(state, id) {
        let bookIndex = state.favorites.indexOf(id);
        if(bookIndex >= 0) {
            state.favorites.splice(bookIndex, 1);
        }
    }
}
