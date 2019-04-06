import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { AppState } from 'src/app/store/app.store';
import { IDetailsBalance } from 'src/app/core/contracts/planner/IDetailsBalance';
import { PlannerService } from 'src/app/core/services/planner.service';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {
  details: IDetailsBalance;

  constructor(
    private plannerService: PlannerService,
    private toastr: ToastrService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.select(state => state.planner.detailsBalance)
      .subscribe(data => this.details = data);
  }

  remove(id: string) {
    this.plannerService.removeExpense(id)
      .subscribe(() => {
        this.toastr.success('Removed successful.');
      });
  }
}
