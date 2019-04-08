import { Action } from '@ngrx/store';
import { CartInfo } from 'src/app/core/contracts/cart/cart-info';

export const GET_MY_CART = '[CART] Get my';
export const REMOVE_TICKET = '[CART] Remove ticket';

export class GetMyCart implements Action {
    type: string = GET_MY_CART;
    constructor(public payload: CartInfo[]) {}
}

export class RemoveTicket implements Action {
    type: string = REMOVE_TICKET;
    constructor(public payload: string) {}
}

export type Type = GetMyCart | RemoveTicket;
