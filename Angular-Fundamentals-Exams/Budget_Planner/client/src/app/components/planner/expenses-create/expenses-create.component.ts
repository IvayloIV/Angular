import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PlannerService } from 'src/app/core/services/planner.service';

@Component({
  selector: 'app-expenses-create',
  templateUrl: './expenses-create.component.html',
  styleUrls: ['./expenses-create.component.css']
})
export class ExpensesCreateComponent implements OnInit {
  year: number;
  month: number;
  form: FormGroup;

  constructor(
    private plannerService: PlannerService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    const { year, month } = this.route.snapshot.params;
    this.year = Number(year);
    this.month = Number(month);
    this.buildForm();
  }

  get f() {
    return this.form.controls;
  }

  buildForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      category: ['Non-essential', Validators.required],
      amount: ['', [Validators.required, Validators.min(0)]],
      date: ['', [Validators.required, Validators.min(1), Validators.max(31)]]
    });
  }

  create() {
    const body = this.form.value;
    this.plannerService.createExpense(this.year, this.month, body)
      .subscribe();
  }
}
