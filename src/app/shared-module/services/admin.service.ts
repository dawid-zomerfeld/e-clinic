import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  apiUrl = 'http://localhost:8080';


  constructor(private http: HttpClient) {
  }

  addRecepcionist(formValue: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/admin/add/recepcionist', formValue, {observe: 'response'});
  }

  addDoctor(formValue: any): Observable<any> {
    console.log(formValue);
    return this.http.post<any>(this.apiUrl + '/admin/add/doctor', formValue, {observe: 'response'});
  }

  getRecepcionists(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/admin/employee/recepcionists');
  }

  getDoctors(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/admin/employee/doctors');
  }

  updateRecepcionistBanned(id: number, formValue: any): Observable<any> {
    console.log(id);
    console.log(formValue);
    return this.http.patch<any>('http://localhost:8080/admin/banned/recepcionist' + `/${id}` , formValue, {observe: 'response'});
  }

  updateDoctorBanned(id: number, formValue: any): Observable<any> {
    console.log(id);
    console.log(formValue);
    return this.http.patch<any>('http://localhost:8080/admin/banned/doctor' + `/${id}` , formValue, {observe: 'response'});
  }
}
