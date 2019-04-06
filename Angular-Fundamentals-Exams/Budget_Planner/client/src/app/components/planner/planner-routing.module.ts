import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BalanceListComponent } from './balance-list/balance-list.component';
import { MonthlyBalanceComponent } from './monthly-balance/monthly-balance.component';
import { ExpensesCreateComponent } from './expenses-create/expenses-create.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: `/plan/${new Date().getFullYear()}` },
  { path: ':year/:month', component: MonthlyBalanceComponent },
  { path: ':year', component: BalanceListComponent },
  { path: 'expenses/add/:year/:month', component: ExpensesCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlannerRoutingModule { }
