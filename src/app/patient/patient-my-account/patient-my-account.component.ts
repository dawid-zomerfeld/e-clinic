import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../shared-module/services/users.service';
import {Patient} from '../../shared-module/models/patient.model';
import {MatSnackBar} from '@angular/material';



@Component({
  selector: 'app-patient-my-account',
  templateUrl: './patient-my-account.component.html',
  styleUrls: ['./patient-my-account.component.scss']
})
export class PatientMyAccountComponent implements OnInit {

  patient: Patient;
  editForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private userSerivce: UsersService,
  ) { }

  ngOnInit() {
    this.editForm = this.buildRegisterForm();
    this.loadPatient();
  }

  buildRegisterForm() {
    return this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      pesel: ['', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11)])],
      address: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      postcode: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(6)])],
      town: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      telephone: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12)])]
    });
  }

  loadPatient() {
      this.userSerivce.getPatient().subscribe((patient) => {
        this.editForm.controls.firstName.setValue(patient.firstName);
        this.editForm.controls.lastName.setValue(patient.lastName);
        this.editForm.controls.pesel.setValue(patient.pesel);
        this.editForm.controls.address.setValue(patient.address);
        this.editForm.controls.postcode.setValue(patient.postcode);
        this.editForm.controls.town.setValue(patient.town);
        this.editForm.controls.telephone.setValue(patient.telephone);
      });
  }

  editPatient() {
    this.userSerivce.updatePatient(this.editForm.value).subscribe(result => {
      if (result.status === 202) {
        this.snackBar.open('Zapisano!');
      } else {
        console.log('BAD');
        this.snackBar.open('Wystąpił błąd!');
      }
    });
  }
}
