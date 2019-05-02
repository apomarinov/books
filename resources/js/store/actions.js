import Cache from "../classes/Cache";
import Book from "../models/Book";
import Storage from "../classes/Storage";

export default {
    getAllBooks (context, params) {
        let cachedBooks = Cache.daily().get(params);
        if(cachedBooks) {
            console.log('cache has books');
            context.commit('setBooks', { result: cachedBooks});
        } else {
            Book.find(params).then(books => {
                context.commit('setBooks', { query:  params, result: books});
            });
        }
    },
    getBook (context, { id, callback }) {
        let cachedBook = Cache.daily().get(id);
        if(cachedBook) {
            console.log('cache has book');
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
        if(Storage.get('favorites').indexOf(id) >= 0) {
            context.commit('removeFavoriteBook', id);
        } else {
            context.commit('addFavoriteBook', id);
        }
    },
    getFavoriteBooks(context) {
        let favoriteBookIds = Storage.get('favorites');
        if(favoriteBookIds) {
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
        }
    }
}
