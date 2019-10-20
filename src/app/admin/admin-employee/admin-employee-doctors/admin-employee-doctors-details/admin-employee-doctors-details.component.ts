import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {Doctor} from '../../../../shared-module/models/doctor.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../../../../shared-module/services/admin.service';

@Component({
  selector: 'app-admin-employee-doctors-details',
  templateUrl: './admin-employee-doctors-details.component.html',
  styleUrls: ['./admin-employee-doctors-details.component.scss']
})
export class AdminEmployeeDoctorsDetailsComponent implements OnInit {

  doctor: Doctor;
  doctorForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Doctor,
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AdminEmployeeDoctorsDetailsComponent>
  ) {
    this.doctor = data;
  }

  ngOnInit() {
    this.doctorForm = this.buildDoctorForm();
  }

  buildDoctorForm() {
    return this.formBuilder.group({
      firstName: [this.doctor.firstName, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      lastName: [this.doctor.lastName, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      specialization: [this.doctor.specialization, Validators.required]
    });
  }

  updateDoctor() {
    this.dialogRef.close(this.doctorForm);
  }
}
