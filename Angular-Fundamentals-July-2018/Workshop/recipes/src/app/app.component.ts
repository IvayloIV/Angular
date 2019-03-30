import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyAqvyG5njgmrSqKxbWJHCPDT9kP0WjG9RU",
      authDomain: "recipes-c7f10.firebaseapp.com"
    });
  }
}
