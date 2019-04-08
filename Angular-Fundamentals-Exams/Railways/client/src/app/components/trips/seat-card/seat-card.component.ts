import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SeatDetails } from 'src/app/core/contracts/trip/seat-details';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TicketCreate } from 'src/app/core/contracts/trip/ticket-create';

@Component({
  selector: 'app-seat-card',
  templateUrl: './seat-card.component.html',
  styleUrls: ['./seat-card.component.css']
})
export class SeatCardComponent implements OnInit {
  @Input() seat: SeatDetails;
  @Output() addToCart = new EventEmitter<TicketCreate>();
  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      count: ['', [Validators.required, Validators.min(1)]]
    });
  }

  addTicket() {
    this.addToCart.emit({
      classType: this.seat.classType,
      count: this.form.value.count
    });
    this.form.reset();
  }

}
