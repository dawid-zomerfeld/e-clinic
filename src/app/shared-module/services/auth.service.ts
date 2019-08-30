import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: 'http://localhost:8080';

  constructor(private http: HttpClient) {

  }



  register(formValue: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/users/register', formValue, {observe: 'response'},
      );
  }
}
