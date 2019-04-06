import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { PlannerService } from 'src/app/core/services/planner.service';
import { IDetailsBalance } from 'src/app/core/contracts/planner/IDetailsBalance';
import { AppState } from 'src/app/store/app.store';

@Component({
  selector: 'app-monthly-balance',
  templateUrl: './monthly-balance.component.html',
  styleUrls: ['./monthly-balance.component.css']
})
export class MonthlyBalanceComponent implements OnInit {
  details: IDetailsBalance;
  year: number;
  month: number;

  constructor(
    private plannerService: PlannerService,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    const { year, month } = this.route.snapshot.params;
    this.year = Number(year);
    this.month = Number(month);
    this.plannerService.getMonthDetails(this.year, this.month)
      .subscribe(() => {
        this.store.select(state => state.planner.detailsBalance)
          .subscribe((data) => this.details = data);
      });
  }
}
