import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/login.model';
import { RegisterModel } from '../models/register.model';

const appKey = "kid_Sk5EUQ2DV";
const appSecret = "694807038d684d2c9ac7054b96c020e4";
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;

@Injectable()
export class AuthService {
    private currentAuthtoken: string;

    constructor(
        private http: HttpClient
    ) {}

    private createAuthHeaders(type: string): HttpHeaders {
        if (type === 'Basic') {
            return new HttpHeaders({
                'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
                'Content-Type': 'application/json'
            });
        } else {
            return new HttpHeaders({
                'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
                'Content-Type': 'application/json'
            });
        }
    }

    login(loginModel: LoginModel) {
        return this.http.post(loginUrl,
            JSON.stringify(loginModel),
            {
                headers: this.createAuthHeaders('Basic')
            })
    }

    register(registerModel: RegisterModel) {
        return this.http.post(registerUrl,
            JSON.stringify(registerModel),
            {
                headers: this.createAuthHeaders('Basic')
            })
    }

    logout() {
        return this.http.post(logoutUrl,
            {},
            {
                headers: this.createAuthHeaders('Kinvey')
            })
    }

    checkIfLoggedIn() {
        return localStorage.getItem('authtoken') !== null;
    }

    get authtoken() {
        return this.currentAuthtoken;
    }

    set authtoken(value: string) {
        this.currentAuthtoken = value;
    }
}