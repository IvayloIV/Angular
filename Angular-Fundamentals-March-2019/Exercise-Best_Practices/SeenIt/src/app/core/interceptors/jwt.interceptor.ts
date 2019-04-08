import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http'
import { APP_KEY, APP_SECRET } from '../../kinvey.tokens';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.endsWith(`user/${APP_KEY}`) || req.url.endsWith('login')) {
            req = req.clone({
                setHeaders: {
                    'Authorization': `Basic ${btoa(`${APP_KEY}:${APP_SECRET}`)}`,
                    'Content-Type': 'application/json'
                }
            });
        } else {
            const token = localStorage.getItem('token');
            req = req.clone({
                setHeaders: {
                    'Authorization': `Kinvey ${token}`
                }
            });
        }

        return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse && req.url.endsWith('login')) {
                this.saveTokens(event.body);
            }
        }));
    }

    saveTokens(res) {
        localStorage.setItem('username', res['username']);
        localStorage.setItem('token', res['_kmd']['authtoken']);
        localStorage.setItem('userId', res['_id']);
    }
}
