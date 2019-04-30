import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http'

const APP_KEY = 'kid_Hk_8_pVjN';
const APP_SECRET = 'abd8f139d7c84a02b67d928a3e6af824';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = sessionStorage.getItem('authToken');
        const header = {
            'Content-Type':'application/json'
        };

        if (token) {
            header['Authorization'] = `Kinvey ${token}`;
        } else {
            header['Authorization'] = `Basic ${btoa(APP_KEY + ':' + APP_SECRET)}`;
        }

        req = req.clone({ setHeaders: header });

        return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse && (req.url.endsWith('login') || req.url.endsWith(`user/${APP_KEY}`)) && event.body._kmd.authtoken) {
                this.saveTokens(event.body);
            }
        }));
    }

    saveTokens(body) {
        sessionStorage.setItem('authToken', body._kmd.authtoken);
        sessionStorage.setItem('username', body.username);
        sessionStorage.setItem('userId', body._id);
    }
}