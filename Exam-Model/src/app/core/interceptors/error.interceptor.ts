import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http'

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private toastr: ToastrService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError((err: HttpErrorResponse) => {
            switch (err.status) {
                case 400:
                case 401:
                case 404:
                case 422:
                    this.toastr.error(err.error.message);
                    break;
                case 424:
                    for (let key of Object.keys(err.error.errors)) {
                        this.toastr.error(err.error.errors[key]);
                    }
                    break;
            }

            return throwError(err.error);
        }));
    }
}
