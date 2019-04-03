import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private toastr: ToastrService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req)
            .pipe(catchError((err: HttpErrorResponse) => {
                if (err instanceof HttpErrorResponse) {
                    switch (err.status) {
                        case 401:
                            this.toastr.error(err.error.message);
                            break;
                        case 400:
                            const errors = err['error'].errors;
                            for (let key of Object.keys(errors)) {
                                this.toastr.error(errors[key]);
                            }
                            break;
                    }
                }

                return throwError(err.error);
            }));
    }
}
