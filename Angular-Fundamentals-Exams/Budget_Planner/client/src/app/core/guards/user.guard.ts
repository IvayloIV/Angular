import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable()
export class UserGuard implements CanLoad {
    constructor(
        private authService: AuthService,
        private toastr: ToastrService,
        private router: Router
    ) {}

    canLoad(route: Route, segments: UrlSegment[]) {
        if (this.authService.isAuthenticated()) {
            return true;
        }

        this.toastr.error('First login.');
        this.router.navigate(['/auth/login']);
        return false;
    }
}
