import { Pipe, PipeTransform } from "@angular/core";
const monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December' ];

@Pipe({ name: 'monthName' })
export class MonthNamePipe implements PipeTransform {
    transform(value: number) {
        return monthNames[value - 1];
    }
}
