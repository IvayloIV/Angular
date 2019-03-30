import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dropdownLi: string = 'nav-item dropdown';
  dropdownMenu: string = 'dropdown-menu';

  constructor(
    public authService: AuthService,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit() {}

  expand() {
    this.dropdownLi.endsWith('show')
      ? (this.dropdownLi = 'nav-item dropdown')
      : (this.dropdownLi = 'nav-item dropdown show');

    this.dropdownMenu.endsWith('show')
      ? (this.dropdownMenu = 'dropdown-menu')
      : (this.dropdownMenu = 'dropdown-menu show');
  }

  logout() {
    this.authService.logout()
      .then(() => {
        localStorage.clear();
        this.toastr.success('Logout success.');
        this.route.navigate(['/auth/signin']);
      });
  }
}