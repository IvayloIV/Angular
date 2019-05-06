import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private toastr: ToastrService,
        private router: Router
    ) {}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        if (this.authService.isAdmin()) {
            return true;
        }

        this.toastr.error('You are not admin.');
        this.router.navigate(['/burger/home']);
        return false;
    }
}
