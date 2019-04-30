import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import {
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http'

const APP_KEY = 'kid_Hk_8_pVjN';

@Injectable()
export class SuccessInterceptor implements HttpInterceptor {
    constructor (
        private route: Router,
        private toastr: ToastrService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                if (req.url.endsWith(`login`)) {
                    this.successResponse('Login success.', '/event/all');
                } else if (req.url.endsWith(`user/${APP_KEY}`)) {
                    this.successResponse('Register success.', '/event/all');
                }
            }
        }));
    }

    private successResponse(message: string, url: string) {
        this.toastr.success(message);
        this.route.navigate([url]);
    }
}