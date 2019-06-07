import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class LoggedGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private toastr: ToastrService,
        private router: Router
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.authService.isAuthenticated()) {
            return true;
        }

        this.router.navigate(['/meme/all']);
        return false;
    }
}
