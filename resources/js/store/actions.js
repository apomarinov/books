import Cache from "../classes/Cache";
import Book from "../models/Book";

export default {
    getAllBooks (context, params) {
        let cachedBooks = Cache.daily().get(params);
        if(cachedBooks) {
            context.commit('setBooks', { result: cachedBooks});
        } else {
            Book.find(params).then(books => {
                context.commit('setBooks', { query:  params, result: books});
            });
        }
    },
    clearBooks (context) {
        context.commit('clearBooks');
    },
    getBook (context, { id, callback }) {
        let cachedBook = Cache.daily().get(id);
        if(cachedBook) {
            context.commit('setBook', { result: cachedBook});
            if(callback) {
                callback(cachedBook);
            }
        } else {
            Book.get(id).then(book => {
                if(callback) {
                    callback(book);
                }
                context.commit('setBook', { query:  id, result: book});
            });
        }
    },
    toggleFavoriteBook(context, id) {
        if(context.state.favorites.all().indexOf(id) >= 0) {
            context.commit('removeFavoriteBook', id);
        } else {
            context.commit('addFavoriteBook', id);
        }
    },
    getFavoriteBooks(context) {
        let favoriteBookIds = context.state.favorites.all();
        if(favoriteBookIds.length) {
            let books = [];
            favoriteBookIds.forEach(id => {
                context.dispatch('getBook', {
                    id: id,
                    callback: book => {
                        books.push(book);

                        if (books.length == favoriteBookIds.length) {
                            context.commit('setBooks', {result: books});
                        }
                    }
                });
            });
        } else {
            context.commit('setBooks', {result: []});
        }
    }
}
