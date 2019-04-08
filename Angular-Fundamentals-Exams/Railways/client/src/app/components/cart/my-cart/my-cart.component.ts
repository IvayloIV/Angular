import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.store';
import { Observable } from 'rxjs';
import { CartInfo } from 'src/app/core/contracts/cart/cart-info';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  tickets$: Observable<CartInfo[]>;

  constructor(
    private cartService: CartService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.cartService.getMyCart()
      .subscribe(() => this.tickets$ = this.store.select(state => state.cart.cartList));
  }

  checkout() {
    this.cartService.checkout().subscribe();
  }
}
