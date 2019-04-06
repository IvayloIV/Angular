import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IDetailsBalance } from 'src/app/core/contracts/planner/IDetailsBalance';
import { AppState } from 'src/app/store/app.store';
import { PlannerService } from 'src/app/core/services/planner.service';

@Component({
  selector: 'app-balance-form',
  templateUrl: './balance-form.component.html',
  styleUrls: ['./balance-form.component.css']
})
export class BalanceFormComponent implements OnInit {
  details: IDetailsBalance;
  form: FormGroup;
  year: number;
  month: number;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private plannerService: PlannerService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    const { year, month } = this.route.snapshot.params;
    this.year = Number(year);
    this.month = Number(month);
    this.store.select(state => state.planner.detailsBalance)
      .subscribe((data) => {
        this.details = data;
        this.buildForm();
      });
  }

  buildForm() {
    this.form = this.fb.group({
      income: [this.details.income],
      budget: [this.details.budget]
    });
  }

  updateBalance() {
    const body = this.form.value;
    this.plannerService.updateBalance(this.year, this.month, body)
      .subscribe(() => {
        this.toastr.success('Saved success.');
      });
  }
}
