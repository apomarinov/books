import Storage from './Storage';

export default {
    storageKey: 'cache',
    cache: {},
    getInterval() {
      return new Date().toISOString().slice(0, 10);
    },
    getKey(query) {
        return typeof query == 'object' ? JSON.stringify(query) : query;
    },
    set(query, data) {
        if(!Object.keys(this.cache).length) {
            this.cache = Storage.get('cache') || this.cache;
        }

        let interval = this.getInterval();
        if(!this.cache.hasOwnProperty(interval)) {
            this.cache[interval] = {};
        }

        if(!this.cache[interval].hasOwnProperty(this.getKey(query))) {
            this.cache[interval][this.getKey(query)] = data;
            Storage.set(this.storageKey, this.cache);
        }
    },
    get(query) {
        if(!Object.keys(this.cache).length) {
            this.cache = Storage.get('cache') || this.cache;
        }
        if(this.cache.hasOwnProperty(this.getInterval())) {
            return this.cache[this.getInterval()][this.getKey(query)];
        }
        return undefined;
    }
}
