export default {
    set(key, data) {
        window.localStorage.setItem(key, JSON.stringify(data))
    },
    get(key) {
        if(window.localStorage.hasOwnProperty(key)) {
            return JSON.parse(window.localStorage.getItem(key));
        }
        return undefined;
    }
}
