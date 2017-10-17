/// <reference path="Library.ts"/>

class Factory<K, T> {
    private library: Library<() => T>;

    constructor(readonly keyFn: (key: K) => number = null) {
        this.library = new Library<() => T>(100);
    }

    add(key: K, constructor: () => T): void {
        this.library.add(constructor, this.getKey(key));
    }

    create(key: K): T {
        let constructor = this.library.get(this.getKey(key));
        if (constructor === null)
            return null;
        return constructor();
    }

    private getKey(key: K): number {
        if (typeof key === 'number')
            return key;
        return this.keyFn(key);
    }

}