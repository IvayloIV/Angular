import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PlannerService } from 'src/app/core/services/planner.service';
import { IMonthBalance } from 'src/app/core/contracts/planner/IMonthBalance';
import { AppState } from 'src/app/store/app.store';

@Component({
  selector: 'app-balance-list',
  templateUrl: './balance-list.component.html',
  styleUrls: ['./balance-list.component.css']
})
export class BalanceListComponent implements OnInit {
  year: string;
  months$: Observable<IMonthBalance[]>

  constructor(
    private plannerService: PlannerService,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.year = this.route.snapshot.params['year'];
    this.plannerService.getYearBalance(this.year)
      .subscribe(() => this.months$ = this.store.select(state => state.planner.balanceList));
  }

}
