import {Injectable} from '@angular/core';
import {TOKEN_NAME} from './auth.const';
import {HttpClient} from '@angular/common/http';
import {getRoleFromToken} from '../helpers/token.helper';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable()
export class UsersService {
  helper = new JwtHelperService();
  accessToken: string;
  isDoctor: boolean;
  isPatient: boolean;
  isManager: boolean;
  isRecepcionist: boolean;
  user: any;



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
    this.isManager = getRoleFromToken(decodedToken) === 'manager';
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
    this.isManager = false;
    localStorage.removeItem(TOKEN_NAME);
  }


  isLogged(): boolean {
    return this.accessToken && (this.isDoctor || this.isPatient || this.isManager || this.isRecepcionist);
  }


  isDoctorUser(): boolean {
    return this.isDoctor;
  }

  isPatientUser(): boolean {
    return this.accessToken && this.isPatient;
  }

  isManagerUser(): boolean {
    return this.isManager;
  }

  isRecepcionistUser(): boolean {
    return this.isRecepcionist;
  }
}
