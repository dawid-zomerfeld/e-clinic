import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {getIdFromToken} from '../helpers/token.helper';
import {NewVisit} from '../models/new-visit';
import {Visit} from '../models/visit';

@Injectable({
  providedIn: 'root'
})

export class RecepcionistService {
  apiUrl = 'http://localhost:8080';


  constructor(private http: HttpClient) {
  }

  addVisits(id: number, newVisit: NewVisit): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/recepcionist/add/doctors' + `/${id}` + '/visits' , newVisit, {observe: 'response'});
  }

  getVisits(id, day, month, year): Observable<Visit[]> {
    return this.http.get<Visit[]>(this.apiUrl + '/recepcionist/add/doctors' + `/${id}` + '/visits' + `/${day}` + `/${month}` + `/${year}`);
  }

  getAllVisitsByDate(day, month, year): Observable<Visit[]> {
    return this.http.get<Visit[]>(this.apiUrl + '/recepcionist/search/visits' + `/${day}` + `/${month}` + `/${year}`);
  }

  deleteVisits(idDocotr, idVisit): Observable<any> {
    return this.http.delete<any>(this.apiUrl + '/recepcionist/add/doctors' + `/${idDocotr}` + '/visits' + `/${idVisit}`, {observe: 'response'});
  }

  getDoctors() {
    return this.http.get<any>(this.apiUrl + '/recepcionist/add/doctors');
  }

  getDoctor(id: number) {
    return this.http.get<any>(this.apiUrl + '/recepcionist/add/doctors' + `/${id}`);
  }

  paidVisits(id: number): Observable<any> {
    return this.http.patch<any>(this.apiUrl + '/recepcionist/search/visits'  + `/${id}` , {observe: 'response'});
  }
}
