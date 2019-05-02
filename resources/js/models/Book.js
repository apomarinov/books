import Storage from '../classes/Storage';

export default {
    apiUrl: 'https://www.googleapis.com/books/v1/volumes',

    find(params) {
        return new Promise((resolve, reject) => {
            axios.get(this.apiUrl, {params: params})
                .then(response => {
                    let books = [];
                    response.data.items.forEach(book => {
                        books.push(this.prepareBook(book));
                    });
                    resolve(books);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    get(id) {
        return new Promise((resolve, reject) => {
            axios.get(this.apiUrl + '/' + id)
                .then(response => {
                    resolve(this.prepareBook(response.data));
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    prepareBook(data) {

        let book = {
            id: data.id,
            title: data.volumeInfo.title,
            image: data.volumeInfo.imageLinks.small || data.volumeInfo.imageLinks.thumbnail,
            imageMedium: data.volumeInfo.imageLinks.medium || data.volumeInfo.imageLinks.thumbnail,
            authors: data.volumeInfo.authors || [],
            rating: data.volumeInfo.averageRating,
            publishedDate: data.volumeInfo.publishedDate,
            description: data.volumeInfo.description,
            pageCount: data.volumeInfo.printedPageCount,
            identifiers: data.volumeInfo.industryIdentifiers,
            isFavorite: Storage.get('favorites').indexOf(data.id) >= 0
        };

        if(data.saleInfo.listPrice) {
            book.price = data.saleInfo.listPrice.currencyCode + ' ' + data.saleInfo.listPrice.amount;
        }

        return book;
    }
}
