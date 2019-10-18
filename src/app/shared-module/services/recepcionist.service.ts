import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RecepcionistService {
  apiUrl = 'http://localhost:8080';


  constructor(private http: HttpClient) {
  }

  getDoctors(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/recepcionist/add/doctors');
  }
}
