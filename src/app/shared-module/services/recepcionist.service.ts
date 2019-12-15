import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {getIdFromToken} from '../helpers/token.helper';

@Injectable({
  providedIn: 'root'
})

export class RecepcionistService {
  apiUrl = 'http://localhost:8080';


  constructor(private http: HttpClient) {
  }

  getDoctors() {
    return this.http.get<any>(this.apiUrl + '/recepcionist/add/doctors');
  }

  getDoctor(id: number) {
    return this.http.get<any>(this.apiUrl + '/recepcionist/add/doctors' + `/${id}`);
  }

  paidVisits(id: number): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/recepcionist/search/visits'  + `/${id}` , {observe: 'response'});
  }
}
