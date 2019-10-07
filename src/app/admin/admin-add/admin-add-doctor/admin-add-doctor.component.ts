import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AdminService} from '../../../shared-module/services/admin.service';

@Component({
  selector: 'app-admin-add-doctor',
  templateUrl: './admin-add-doctor.component.html',
  styleUrls: ['./admin-add-doctor.component.scss']
})
export class AdminAddDoctorComponent implements OnInit {

  doctorForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.doctorForm = this.buildDoctorForm();
  }

  buildDoctorForm() {
    return this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])],
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      specialization: ['', Validators.required]
    });
  }

  addDoctor() {
    this.adminService.addDoctor(this.doctorForm.value).subscribe(result => {
      if (result.status === 201) {
        console.log('OK');
      } else {
        console.log('BAD');
      }
    });
  }
}
