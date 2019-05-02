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
        state.favorites.add(id);
    },
    removeFavoriteBook(state, id) {
        state.favorites.remove(id);
    }
}
