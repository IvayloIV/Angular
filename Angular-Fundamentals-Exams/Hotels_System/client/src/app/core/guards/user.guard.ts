import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable()
export class UserGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private toastr: ToastrService,
        private router: Router
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isAuthenticated()) {
            return true;
        }

        this.toastr.error('First login.');
        this.router.navigate(['/auth/login']);
        return false;
    }
}
