import {Injectable} from '@angular/core';
import {TOKEN_NAME} from './auth.const';
import {HttpClient} from '@angular/common/http';
import {getIdFromToken, getRoleFromToken} from '../helpers/token.helper';
import { JwtHelperService } from '@auth0/angular-jwt';
import {Observable} from 'rxjs';
import {Visit} from '../models/visit';


@Injectable()
export class UsersService {
  helper = new JwtHelperService();
  accessToken: string;
  isDoctor: boolean;
  isPatient: boolean;
  isAdmin: boolean;
  isRecepcionist: boolean;
  user: any;

  apiUrl = 'http://localhost:8080';

  constructor( private http: HttpClient) {
    const token = JSON.parse(localStorage.getItem(TOKEN_NAME));
    if (token != null) {
      this._initializeRoles(token);
    }
  }

  private _initializeRoles(token: any) {
    const decodedToken = this.helper.decodeToken(token.access_token);
    console.log(decodedToken);
    this.isDoctor = getRoleFromToken(decodedToken) === 'doctor';
    this.isPatient = getRoleFromToken(decodedToken) === 'patient';
    this.isAdmin = getRoleFromToken(decodedToken) === 'admin';
    this.isRecepcionist = getRoleFromToken(decodedToken) === 'recepcionist';
    this.accessToken = token.access_token;
    this.user = decodedToken.user;
  }

  private _saveToken(token: string) {
    localStorage.setItem(TOKEN_NAME, JSON.stringify(token));
  }

  login(token: string) {
    this._initializeRoles(token);
    this._saveToken(token);
  }

  logout() {
    this.accessToken = null;
    this.isDoctor = false;
    this.isRecepcionist = false;
    this.isAdmin = false;
    localStorage.removeItem(TOKEN_NAME);
  }


  isLogged(): boolean {
    return this.accessToken && (this.isDoctor || this.isPatient || this.isAdmin || this.isRecepcionist);
  }


  isDoctorUser(): boolean {
    return this.isDoctor;
  }

  isPatientUser(): boolean {
    return this.accessToken && this.isPatient;
  }

  isAdminUser(): boolean {
    return this.isAdmin;
  }

  isRecepcionistUser(): boolean {
    return this.isRecepcionist;
  }

  getDoctors() {
    return this.http.get<any>(this.apiUrl + '/patient/search/doctors');
  }

  getDoctor(id: number) {
    return this.http.get<any>(this.apiUrl + '/patient/search/doctors' + `/${id}`);
  }

  getVisits(id, day, month, year): Observable<Visit[]> {
    return this.http.get<Visit[]>(this.apiUrl + '/patient/search/doctors' + `/${id}` + '/visits' + `/${day}` + `/${month}` + `/${year}`);
  }

  reserveVisit(id: number): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/patient' + `/${getIdFromToken()}` + '/reserve/visits' + `/${id}` , {observe: 'response'});
  }

  getPatient() {
    return this.http.get<any>(this.apiUrl + '/patient/account' + `/${getIdFromToken()}`);
  }

  updatePatient(formValue: any): Observable<any> {
    return this.http.patch<any>( this.apiUrl + '/patient/account/update' + `/${getIdFromToken()}` , formValue, {observe: 'response'});
  }

  getPatientVisits() {
    return this.http.get<Visit[]>(this.apiUrl + '/patient/visits' + `/${getIdFromToken()}`);
  }

  cancelVisit(id: number): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/patient/visits/cancel'  + `/${id}` , {observe: 'response'});
  }
}
