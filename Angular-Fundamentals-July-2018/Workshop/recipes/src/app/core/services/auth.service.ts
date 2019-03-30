import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
    signUp(email: string, password: string) {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    signIn(email: string, password: string) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    logout() {
        return firebase.auth().signOut();
    }

    getToken() {
        return firebase.auth().currentUser.getIdToken();
    }

    isAuth() {
        return localStorage.getItem('authToken') !== null;
    }
}
