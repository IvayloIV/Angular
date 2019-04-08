import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyCartComponent } from './my-cart/my-cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { TicketsSumPipe } from 'src/app/core/pipes/tickets-sum.pipe';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';

@NgModule({
  declarations: [
    MyCartComponent,
    TicketsSumPipe,
    TicketDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CartRoutingModule
  ]
})
export class CartModule { }
