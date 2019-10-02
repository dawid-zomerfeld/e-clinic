import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared-module/services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../../shared-module/services/users.service';
import {isRequestSuccess} from '../../shared-module/http/request-status';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LOGIN_SUCCESS_MSG = 'You have been logged in';
  LOGIN_ERROR_MSG = 'You have not been logged in';

  loginForm: FormGroup;

  private redirectUrlAdminSuccess = 'doctor';
  private redirectUrlUserSuccess = 'patient';
  private redirectUrlManagerSuccess = 'manager';
  private redirectUrlRecepcionistSuccess = 'recepcionist';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
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
      const msg = result ? this.LOGIN_SUCCESS_MSG : this.LOGIN_ERROR_MSG;
      if (result) {
        this.usersService.login(data.body);
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
        this.router.navigate([this.redirectUrlAdminSuccess]);
      } else if (this.usersService.isPatientUser()) {
        this.router.navigate([this.redirectUrlUserSuccess]);
      } else if (this.usersService.isManagerUser()) {
        this.router.navigate([this.redirectUrlManagerSuccess]);
      } else if (this.usersService.isRecepcionistUser()) {
        this.router.navigate([this.redirectUrlRecepcionistSuccess]);
      }
    }
  }
}

