import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.store';
import { tap } from 'rxjs/operators';
import { CartInfo } from '../contracts/cart/cart-info';
import { GetMyCart, RemoveTicket } from 'src/app/store/actions/cart.action';

const BASE_URL = 'http://localhost:5000/';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  addTicket(ticket) {
    return this.http.post(BASE_URL + `cart`, ticket);
  }

  getMyCart() {
    return this.http.get(BASE_URL + `cart`)
      .pipe(tap((data: CartInfo[]) => {
        this.store.dispatch(new GetMyCart(data));
      }));
  }

  removeTicket(id: string) {
    return this.http.delete(BASE_URL + `cart/${id}`)
      .pipe(tap(() => {
        this.store.dispatch(new RemoveTicket(id));
      }));
  }

  checkout() {
    return this.http.post(BASE_URL + `cart/checkout`, {});
  }
}
