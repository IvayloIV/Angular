import { Pipe, PipeTransform } from "@angular/core";
import { CartInfo } from '../contracts/cart/cart-info';

@Pipe({ name: 'ticketSum' })
export class TicketsSumPipe implements PipeTransform {
    transform(tickets: CartInfo[]) {
        const sum = tickets.reduce((accumulator, currentValue) => {
            return accumulator + (currentValue.price * currentValue.count);
        }, 0);

        return sum.toFixed(2);
    }
}
