import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../authentication/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  dropdownLi = 'nav-item dropdown';
  dropdownMenu = 'dropdown-menu';

  constructor(
    public authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  logout(): void {
    localStorage.clear();
    this.toastr.success('Logout success');
    this.router.navigate(['/signin']);
  }

  expand(): void {
    this.dropdownLi.endsWith('show')
      ? this.dropdownLi = 'nav-item dropdown'
      : this.dropdownLi = 'nav-item dropdown show';

    this.dropdownMenu.endsWith('show')
      ? this.dropdownMenu = 'dropdown-menu'
      : this.dropdownMenu = 'dropdown-menu show';
  }
}
