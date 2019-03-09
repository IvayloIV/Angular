interface IMelon {
    weight: number,
    melonSort: string
}

export default abstract class Melon implements IMelon {
    constructor(
        public weight: number,
        public melonSort: string 
    ) {}

    private get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    protected get getName(): string {
        const name: string = this.constructor.name;
        return name.substring(0, name.indexOf('melon'));
    }

    toString(): string {
        return `Element: ${this.getName}\n` +
            `Sort: ${this.melonSort}\n` +
            `Element Index: ${this.elementIndex}`
    }
}
