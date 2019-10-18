import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared-module/services/auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {error} from 'selenium-webdriver';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  isViewVisible = true;
  isSpinnerVisible = false;

  constructor(
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.registerForm = this.buildRegisterForm();
  }

  buildRegisterForm() {
    return this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])],
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      pesel: ['', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11)])],
      address: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      postcode: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(6)])],
      town: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      telephone: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12)])]
    });
  }

  register() {
    this.authService.register(this.registerForm.value).subscribe(result => {
      if (result.status === 201) {
        this.snackBar.open('Rejstracja przebiegła pomyślnie!');
        this.isViewVisible = false;
        this.isSpinnerVisible = true;
        setTimeout(() =>  this.router.navigate(['login']), 3000);
      } else {
        this.snackBar.open('Błąd podczas rejestracji');
        console.log('error');
      }
    }
    );
  }
}


