import Cache from '../classes/Cache';
import Storage from '../classes/Storage';

const cachePlugin = store => {
    store.subscribe((mutation, state) => {
        let cacheData = undefined;
        if(mutation.payload.query) {
            switch (mutation.type) {
                case 'setBooks':
                    cacheData = state.books;
                    break;
                case 'setBook':
                    cacheData = state.book;
                    break;
            }
            if(cacheData) {
                console.log('Cache ' + mutation.type, mutation.payload, state);
                Cache.daily().set(mutation.payload.query, cacheData);
            }
        }
    })
}

const storagePlugin = store => {
    store.subscribe((mutation, state) => {
        if(mutation.type == 'addFavoriteBook' || mutation.type == 'removeFavoriteBook') {
            console.log(mutation.type, state.favorites);
            Storage.set('update favorites', state.favorites);
        }
    })
}

export default [
    cachePlugin,
    storagePlugin
]
