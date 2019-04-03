import { Injectable } from '@angular/core';
import { 
   CanActivate,
   ActivatedRouteSnapshot,
   RouterStateSnapshot, 
   Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../authentication/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(
    private authService : AuthService,
    private router : Router,
    private toastr: ToastrService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    if (!this.authService.isAuthenticated()) {
      return true;
    }  

    this.toastr.error('You are logged.');
    this.router.navigate(['/furniture/all']);
    
    return false;
  }
}
