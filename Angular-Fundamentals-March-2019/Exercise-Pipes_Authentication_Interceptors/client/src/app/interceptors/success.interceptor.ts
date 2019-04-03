import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class SuccessInterceptor implements HttpInterceptor {
    constructor(
        private toastr: ToastrService,
        private router: Router
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req)
            .pipe(tap(event => {
                if (event instanceof HttpResponse) {
                    if (event.url.endsWith('login')) {
                        this.toastr.success('Login successful.');
                        this.router.navigate(['/home']);
                    } else if (event.url.endsWith('register')) {
                        this.toastr.success('Register success.');
                        this.router.navigate(['/signin']);
                    } else if (event.url.endsWith('create')) {
                        this.toastr.success('Created success.');
                        this.router.navigate(['/furniture/all']);
                    } else if (event.url.indexOf('delete') !== -1) {
                        this.toastr.success('Removed successful.');
                    } else if (event.url.indexOf('edit') !== -1) {
                        this.toastr.success('Edit successful.');
                        this.router.navigate(['/furniture/all']);
                    }
                }
            }));
    }
}
