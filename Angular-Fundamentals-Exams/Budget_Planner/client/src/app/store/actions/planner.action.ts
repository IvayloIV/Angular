import { Action } from '@ngrx/store';
import { IMonthBalance } from 'src/app/core/contracts/planner/IMonthBalance';
import { IDetailsBalance } from 'src/app/core/contracts/planner/IDetailsBalance';
import { IUpdateBalance } from 'src/app/core/contracts/planner/IUpdateBalance';

export const GET_BALANCE_LIST = '[PLANNER] Balance list';
export const GET_DETAILS_BALANCE = '[PLANNER] Balance details';
export const UPDATE_BALANCE = '[PLANNER] Balance update';
export const REMOVE_EXPENSE = '[PLANNER] Remove expense';

export class GetBalanceList implements Action {
    type: string = GET_BALANCE_LIST;
    constructor(public payload: IMonthBalance[]) {}
}

export class GetDetailsBalance implements Action {
    type: string = GET_DETAILS_BALANCE;
    constructor(public payload: IDetailsBalance) {}
}

export class UpdateBalance implements Action {
    type: string = UPDATE_BALANCE;
    constructor(public payload: IUpdateBalance) {}
}

export class RemoveExpense implements Action {
    type: string = REMOVE_EXPENSE;
    constructor(public payload: string) {}
}

export type Type = GetBalanceList | GetDetailsBalance | UpdateBalance | RemoveExpense;