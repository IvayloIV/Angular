import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SuccessInterceptor implements HttpInterceptor {
    constructor (
        private route: Router,
        private toastr: ToastrService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                if (req.url.endsWith('login')) {
                    this.toastr.success('Login success');
                    this.route.navigate(['/trips']);
                } else if (req.url.endsWith('signup')) {
                    this.toastr.success('Register success');
                    this.route.navigate(['/auth/login']);
                } else if (req.url.endsWith('cart') && event.body.success) {
                    this.toastr.success('Tickets added to cart');
                } else if (req.url.endsWith('checkout')) {
                    this.toastr.success('Checkout success.');
                    this.route.navigate(['/trips/my']);
                }
            }
        }));
    }
}
