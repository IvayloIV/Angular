import Melon from './Melon';

export default class Melolemonmelon extends Melon {
    private types = ['Watermelon', 'Firemelon', 'Earthmelon', 'Airmelon'];

    protected get getName(): string {
        const name: string = this.types[0];
        return name.substring(0, name.indexOf('melon'));
    }

    morph() {
        const currentType: string = this.types.shift();
        this.types.push(currentType);
    }
}
