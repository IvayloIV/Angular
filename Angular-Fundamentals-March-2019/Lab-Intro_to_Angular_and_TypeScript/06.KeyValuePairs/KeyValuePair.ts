export class KeyValuePair<T, U> {
    key: T;
    value: U;

    setKeyValue(key: T, value: U) {
        this.key = key;
        this.value = value;
    }

    display(): void {
        console.log(`key = ${this.key}, value = ${this.value}`);
    }
}
