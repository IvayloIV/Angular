import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReviewService } from 'src/app/core/services/review.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.css']
})
export class ReviewCreateComponent implements OnInit {
  form: FormGroup;
  hotelId: string;

  constructor(
    private fb: FormBuilder,
    private reviewService: ReviewService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.hotelId = this.router.snapshot.params['id'];
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      comment: ['', [Validators.required, Validators.maxLength(70)]],
      rating: ['1', [Validators.required, Validators.min(1), Validators.max(5)]]
    });
  }

  get f() {
    return this.form.controls;
  }

  createReview() {
    let payload = this.form.value;
    payload.rating = Number(payload.rating);
    this.form.reset();
    this.f['rating'].setValue(1);
    this.reviewService.createReview(this.hotelId, payload)
      .subscribe()
  }

}
