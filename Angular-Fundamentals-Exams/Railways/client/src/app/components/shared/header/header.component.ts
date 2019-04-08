import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {
  username: string;

  constructor(
    public authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngDoCheck() {
    this.username = localStorage.getItem('username');
  }

  logout() {
    this.authService.logout();
    this.toastr.success('Logout success');
    this.router.navigate(['/auth/login']);
  }
}
