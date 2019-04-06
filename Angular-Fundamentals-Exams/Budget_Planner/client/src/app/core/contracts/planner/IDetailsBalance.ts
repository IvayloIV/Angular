import { IExpense } from './IExpense';

export interface IDetailsBalance {
    income: number;
    budget: number;
    expenses: IExpense[];
}
