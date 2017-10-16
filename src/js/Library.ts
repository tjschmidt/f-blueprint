export class Library<T> {
    private storage: T[];

    constructor(capacity: number, readonly keyFn: (arg: T) => number = null) {
        this.storage = new Array(capacity);
    }

    add(item: T, key: number = null): void {
        if (key === null) {
            if (this.keyFn === null)
                throw Error('Must provide a key function');
            key = this.keyFn(item);
        }
        if (key >= this.storage.length)
            this.resize(2 * this.storage.length);
        this.storage[key] = item;
    }

    get(key: number): T {
        let val = this.storage[key];
        if (val === undefined)
            return null;
        return val;
    }

    private resize(size: number): void {
        this.storage.length = size;
    }
}