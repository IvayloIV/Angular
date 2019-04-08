import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SearchTrips } from 'src/app/core/contracts/trip/search-trips';

@Component({
  selector: 'app-search-trips',
  templateUrl: './search-trips.component.html',
  styleUrls: ['./search-trips.component.css']
})
export class SearchTripsComponent implements OnInit {
  @Output() searchTrips = new EventEmitter<SearchTrips>();
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const { origin, destination, date } = this.route.snapshot.queryParams;
    this.form = this.fb.group({
      origin: [origin || '', Validators.required],
      destination: [destination || '', Validators.required],
      date: [date || '', Validators.required]
    });
  }

  search() {
    const { origin, destination, date } = this.form.value;
    this.router.navigate(['/trips'], {queryParams: { origin, destination, date }});
    this.searchTrips.emit(this.form.value);
  }

}
