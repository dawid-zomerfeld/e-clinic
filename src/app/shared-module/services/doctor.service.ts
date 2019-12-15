import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NewVisit} from '../models/new-visit';
import {Observable} from 'rxjs';
import {Visit} from '../models/visit';
import {getIdFromToken} from '../helpers/token.helper';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }
  getAllVisits(): Observable<Visit[]> {
    return this.http.get<Visit[]>(this.apiUrl + '/doctor' + `/${getIdFromToken()}` + '/visits');
  }

  getAllVisitsByDate(day, month, year): Observable<Visit[]> {
    return this.http.get<Visit[]>(this.apiUrl + '/doctor' + `/${getIdFromToken()}` + '/visits' + `/${day}` + `/${month}` + `/${year}`);
  }

  updateVisitDetails(id: number, formValue: any): Observable<any> {
    return this.http.patch<any>( this.apiUrl + '/doctor/visits/details' + `/${id}` , formValue, {observe: 'response'});
  }

  doneVisit(id: number): Observable<any> {
    return this.http.patch<any>(this.apiUrl + '/doctor/visits/done'  + `/${id}` , {observe: 'response'});
  }

  getVisitsByDoctorAndPatient(id: number) {
    return this.http.get<any>(this.apiUrl + '/doctor' + `/${getIdFromToken()}` + '/patients' + `/${id}` + '/visits');
  }

}

