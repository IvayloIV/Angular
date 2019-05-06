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

const USER_LOGIN = '/user/login';
const USER_REGISTER = '/user/register';

@Injectable()
export class SuccessInterceptor implements HttpInterceptor {
    constructor (
        private route: Router,
        private toastr: ToastrService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                if (req.url.endsWith(USER_LOGIN)) {
                    this.successResponse('Login success.', '/burger/home');
                } else if (req.url.endsWith(USER_REGISTER)) {
                    this.successResponse('Register success.', '/auth/login');
                }
            }
        }));
    }

    private successResponse(message: string, url: string) {
        this.toastr.success(message);
        this.route.navigate([url]);
    }
}
