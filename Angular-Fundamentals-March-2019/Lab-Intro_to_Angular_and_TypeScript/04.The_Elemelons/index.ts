import { Melolemonmelon } from './Melolemonmelon';
import { Watermelon } from './Watermelon';

let melolemonmelon : Melolemonmelon = new Melolemonmelon(12.5, "Kingsize");
console.log(melolemonmelon.toString());
melolemonmelon.morph();
console.log(melolemonmelon.toString());
