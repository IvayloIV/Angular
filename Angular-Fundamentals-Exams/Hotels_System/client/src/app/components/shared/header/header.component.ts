import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    public authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  logout() {
    this.authService.logout();
    this.toastr.success('Logout success');
    this.router.navigate(['/auth/login']);
  }
}
