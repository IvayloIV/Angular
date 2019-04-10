import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReviewDetails } from 'src/app/core/contracts/review/Review-details';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.store';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  reviews$: Observable<ReviewDetails[]>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.reviews$ = this.store.select(state => state.review.reviewList);
  }

}
