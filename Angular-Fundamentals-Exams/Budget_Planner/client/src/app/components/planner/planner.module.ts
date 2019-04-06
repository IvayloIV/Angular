import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BalanceListComponent } from './balance-list/balance-list.component';
import { PlannerRoutingModule } from './planner-routing.module';
import { MonthlyBalanceComponent } from './monthly-balance/monthly-balance.component';
import { ExpensesCreateComponent } from './expenses-create/expenses-create.component';
import { BalanceFormComponent } from './balance-form/balance-form.component';
import { MonthNamePipe } from 'src/app/core/pipes/month-name.pipe';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';

@NgModule({
  declarations: [
    BalanceListComponent, 
    MonthlyBalanceComponent, 
    ExpensesCreateComponent, 
    BalanceFormComponent,
    ExpensesListComponent,
    MonthNamePipe
  ],
  imports: [
    CommonModule,
    PlannerRoutingModule,
    ReactiveFormsModule,
  ]
})
export class PlannerModule { }
