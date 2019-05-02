export default {
    apiUrl: 'https://www.googleapis.com/books/v1/volumes',

    all(query) {
        return new Promise((resolve, reject) => {
            let randomLetter = String.fromCharCode(97 + Math.floor(Math.random() * 25));
            let params = {
                q: randomLetter,
                maxResults: 20,
                ...query
            };

            axios.get(this.apiUrl, {params: params})
                .then(response => {
                    resolve(response.data.items);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
}
