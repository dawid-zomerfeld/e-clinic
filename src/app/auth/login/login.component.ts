import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared-module/services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../../shared-module/services/users.service';
import {isRequestSuccess} from '../../shared-module/http/request-status';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LOGIN_SUCCESS_MSG = 'Zostałeś pomyślnie zalogowany!';
  LOGIN_ERROR_MSG = 'NIEPRAWIDŁOWY ADRES EMAIL, BĄDŹ HASŁO!';

  loginForm: FormGroup;

  isViewVisible = true;
  isSpinnerVisible = false;

  private redirectUrlDoctorSuccess = 'doctor';
  private redirectUrlPatientSuccess = 'patient';
  private redirectUrlAdminSuccess = 'admin';
  private redirectUrlRecepcionistSuccess = 'recepcionist';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private usersService: UsersService,
  ) { }

  ngOnInit() {
    this.loginForm = this.buildLoginForm();
  }

  buildLoginForm() {
    return this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])]
    });
  }

  login() {
    this.authService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value).subscribe(data => {
      console.log(data);
      const result = isRequestSuccess(data);
      console.log(result);
      const msg = result ? this.LOGIN_SUCCESS_MSG : this.LOGIN_ERROR_MSG;
      this.snackBar.open(msg);
      if (result) {
        this.usersService.login(data.body);
        this.isViewVisible = false;
        this.isSpinnerVisible = true;
        setTimeout(() => this.navigateAfterSuccess(), 3000);
      }
    });
  }

  private navigateAfterSuccess() {
    this.redirectIfLogged();
  }

  private redirectIfLogged() {
    if (this.usersService.isLogged()) {
      if (this.usersService.isDoctorUser()) {
        this.router.navigate([this.redirectUrlDoctorSuccess]);
      } else if (this.usersService.isPatientUser()) {
        this.router.navigate([this.redirectUrlPatientSuccess]);
      } else if (this.usersService.isAdminUser()) {
        this.router.navigate([this.redirectUrlAdminSuccess]);
      } else if (this.usersService.isRecepcionistUser()) {
        this.router.navigate([this.redirectUrlRecepcionistSuccess]);
      }
    }
  }
}

