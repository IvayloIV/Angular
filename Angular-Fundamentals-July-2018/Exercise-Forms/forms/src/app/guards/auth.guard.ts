import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private route: Router) {}

    canActivate() : boolean {
        if (this.checkIfLogged()) {
            this.route.navigate(['/login']);
            return false;
        }
        return true;
    }

    checkIfLogged() {
        return localStorage.getItem('authtoken') === null;
    }
}
