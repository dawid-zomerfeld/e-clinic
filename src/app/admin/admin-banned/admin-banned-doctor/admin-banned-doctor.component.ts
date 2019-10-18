import { Component, OnInit } from '@angular/core';
import {Doctor} from '../../../shared-module/models/doctor.model';
import {AdminService} from '../../../shared-module/services/admin.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';



@Component({
  selector: 'app-admin-banned-doctor',
  templateUrl: './admin-banned-doctor.component.html',
  styleUrls: ['./admin-banned-doctor.component.scss']
})
export class AdminBannedDoctorComponent implements OnInit {

  displayedColumnsDoctor: string[] = ['id', 'firstName', 'lastName', 'email', 'banned'];
  dataSourceDoctor: Doctor[];
  bannedForm: FormGroup;

  constructor(private adminService: AdminService,
              private snackBar: MatSnackBar,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loadDoctors();
    this.bannedForm = this.buildBannedForm();
  }

  loadDoctors(): void {
    this.adminService.getDoctors().subscribe((doctors) => {
      this.dataSourceDoctor = doctors;
    });
  }
  buildBannedForm() {
    return this.formBuilder.group({
      banned: [],
    });
  }

  bannedDoctor(element) {
    console.log(element);
    this.adminService.updateDoctorBanned(element.id, this.bannedForm.value).subscribe(result => {
      if (result.status === 202) {
        this.snackBar.open('Zapisano!');
      } else {
        console.log('BAD');
        this.snackBar.open('Wystąpił błąd!');
      }
      this.loadDoctors();
    });
  }
}
