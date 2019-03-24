import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string;

  ngOnInit(): void {
    const currentUser = localStorage.getItem('username');

    if (currentUser) {
      this.username = currentUser;
    }
  }

}
