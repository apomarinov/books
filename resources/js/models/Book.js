export default {
    apiUrl: 'https://www.googleapis.com/books/v1/volumes',

    find(params) {
        return new Promise((resolve, reject) => {
            axios.get(this.apiUrl, {params: params})
                .then(response => {
                    resolve(response.data.items);
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
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
}
