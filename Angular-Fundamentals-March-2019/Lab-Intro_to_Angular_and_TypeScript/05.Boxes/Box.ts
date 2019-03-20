export class Box<T> {
    store: Array<T>;

    constructor() {
        this.store = [];
    }

    add(element: T): void {
        this.store.push(element);
    }

    remove(): T {
        return this.store.pop();
    }

    get count(): number {
        return this.store.length;
    }
}
