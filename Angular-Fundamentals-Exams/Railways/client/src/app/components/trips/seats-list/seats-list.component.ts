import { Component, OnInit, Input } from '@angular/core';
import { SeatDetails } from 'src/app/core/contracts/trip/seat-details';
import { TicketCreate } from 'src/app/core/contracts/trip/ticket-create';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-seats-list',
  templateUrl: './seats-list.component.html',
  styleUrls: ['./seats-list.component.css']
})
export class SeatsListComponent implements OnInit {
  @Input() tickets: Object;
  @Input() tripId: number;
  seats: Array<SeatDetails>;
  
  constructor(
    private cartService: CartService
  ) { 
    this.seats = [];
  }

  ngOnInit() {
    for (let key of Object.keys(this.tickets)) {
      this.seats.push({
        classType: key === 'firstClass' ? 'First' : 'Second',
        price: this.tickets[key]
      });
    }
  }

  addToCart(ticket: TicketCreate) {
    this.cartService.addTicket({
      tripId: this.tripId,
      date: new Date().toLocaleDateString(),
      class: ticket.classType.toLocaleLowerCase() + 'Class',
      count: ticket.count
    }).subscribe();
  }

}
