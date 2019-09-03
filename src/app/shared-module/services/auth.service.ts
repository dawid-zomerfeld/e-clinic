import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME} from './auth.const';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   apiUrl = 'http://localhost:8080';
   authApiUrl = 'http://localhost:8080/oauth/token';

  constructor(private http: HttpClient) {

  }

  login(email: string, password: string): Observable<any> {
    const body = `username=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}&grant_type=password`;
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD));
    return this.http.post<any>(this.authApiUrl, body, {headers, observe: 'response'});
  }

  register(formValue: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/users/register', formValue, {observe: 'response'});
  }
}
