import { Melon } from './Melon';

export class Melolemonmelon extends Melon {
    currentElement: string = 'Water';
    elements: Array<string> = ['Fire', 'Earth', 'Air', 'Water'];

    morph() {
        const next = this.elements.shift();
        this.elements.push(next);
        this.currentElement = next;
    }

    protected get getName() {
        return this.currentElement;
    }
}
