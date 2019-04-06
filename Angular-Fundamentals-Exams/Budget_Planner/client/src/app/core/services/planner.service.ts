import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { IMonthBalance } from '../contracts/planner/IMonthBalance';
import { IDetailsBalance } from '../contracts/planner/IDetailsBalance';
import { ICreateExpense } from '../contracts/planner/ICreateExpense';
import { IUpdateBalance } from '../contracts/planner/IUpdateBalance';
import { AppState } from 'src/app/store/app.store';
import { GetBalanceList, GetDetailsBalance, UpdateBalance, RemoveExpense } from 'src/app/store/actions/planner.action';

const BASE_URL = 'http://localhost:5000/plan/';

@Injectable({
  providedIn: 'root'
})
export class PlannerService {
  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  getYearBalance(year: string) {
    return this.http.get(BASE_URL + year)
      .pipe(map((data) => {
        const balances: IMonthBalance[] = [];

        for (let key of Object.keys(data)) {
          const budget = data[key]['budget'];
          const balance = data[key]['balance'];
          balances.push({ id: Number(key), budget, balance });
        }

        this.store.dispatch(new GetBalanceList(balances));
      }));
  }

  getMonthDetails(year: number, month: number) {
    return this.http.get<IDetailsBalance>(BASE_URL + `${year}/${month}`)
      .pipe(map((data: IDetailsBalance) => {
        this.store.dispatch(new GetDetailsBalance(data));
      }));
  }

  createExpense(year: number, month: number, body: ICreateExpense) {
    return this.http.post(BASE_URL + `${year}/${month}/expense`, body);
  }

  removeExpense(expenseId: string) {
    return this.http.delete(BASE_URL + `expense/${expenseId}`)
      .pipe(map(() => {
        this.store.dispatch(new RemoveExpense(expenseId));
      }));
  }

  updateBalance(year: number, month: number, body: IUpdateBalance) {
    return this.http.post(BASE_URL + `${year}/${month}`, body)
      .pipe(map((data) => {
        this.store.dispatch(new UpdateBalance(data['plan']));
      }));
  }
}
