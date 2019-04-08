import { Component, Input } from '@angular/core';
import { CartInfo } from 'src/app/core/contracts/cart/cart-info';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent {
  @Input() ticket: CartInfo;

  constructor(
    private cartService: CartService,
    private toastr: ToastrService
  ) { }

  removeTicket() {
    const id = this.ticket._id;
    this.cartService.removeTicket(id)
      .subscribe(() => {
        this.toastr.success('Removed success.');
      });
  }

}
