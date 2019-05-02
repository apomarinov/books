import Storage from './Storage';

export default {
    storageKey: 'cache',
    cache: {},
    interval: '',
    daily() {
        this.interval = new Date().toISOString().slice(0, 10);
        return this;
    },
    getKey(query) {
        return typeof query == 'object' ? JSON.stringify(query) : query;
    },
    set(query, data) {
        if(!this.interval.length) {
            console.error('Cache select an interval first');
            return;
        }
        if(!Object.keys(this.cache).length) {
            this.cache = Storage.get('cache') || this.cache;
        }

        if(!this.cache.hasOwnProperty(this.interval)) {
            this.cache[this.interval] = {};
        }

        let key = this.getKey(query);
        if(!this.cache[this.interval].hasOwnProperty(key)) {
            this.cache[this.interval][key] = data;
            Storage.set(this.storageKey, this.cache);
        } else {
            console.warn(`Cache exists for key: ${key}`);
        }

        this.interval = '';
    },
    get(query) {
        if(!this.interval.length) {
            console.error('Cache select an interval first');
            return;
        }
        if(!Object.keys(this.cache).length) {
            this.cache = Storage.get('cache') || this.cache;
        }
        if(this.cache.hasOwnProperty(this.interval)) {
            return this.cache[this.interval][this.getKey(query)];
        }
        this.interval = '';

        return undefined;
    }
}
