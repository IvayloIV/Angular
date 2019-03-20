export abstract class Melon {
    constructor(
        public weight: number,
        public melonSort: string
    ) {}

    get elementIndex() {
        return this.weight * this.melonSort.length;
    }

    protected get getName() {
        let name = this.constructor.name;
        return name.substring(0, name.indexOf('melon'));
    }

    toString() {
        return `Element: ${this.getName}\n` +
            `Sort: ${this.melonSort}\n` +
            `Element Index: ${this.elementIndex}`;
    }
}
