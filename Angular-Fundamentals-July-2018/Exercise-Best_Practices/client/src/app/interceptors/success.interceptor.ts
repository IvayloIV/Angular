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
                    this.route.navigate(['/furniture/all']);
                } else if (req.url.endsWith('signup')) {
                    this.toastr.success('Register success');
                    this.route.navigate(['/signin']);
                } else if (req.url.endsWith('create')) {
                    this.toastr.success('Create success');
                    this.route.navigate(['/furniture/all']);
                } else if (/furniture\/delete/.test(req.url)) {
                    this.toastr.success('Removed success');
                } else if (/furniture\/edit/.test(req.url)) {
                    this.toastr.success('Edited success');
                    this.route.navigate(['/furniture/all']);
                }
            }
        }));
    }
}
