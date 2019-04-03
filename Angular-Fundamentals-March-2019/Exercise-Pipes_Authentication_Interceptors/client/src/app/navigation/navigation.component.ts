import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentication/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.toastr.success('Logout success.');
    this.router.navigate([ '/signin' ]);
  }
}
