import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout()
      .subscribe(() => {
        localStorage.clear();
        this.router.navigate(['/login']);
      });
  }
}
