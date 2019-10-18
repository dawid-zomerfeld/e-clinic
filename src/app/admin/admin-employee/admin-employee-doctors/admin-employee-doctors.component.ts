import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../shared-module/services/admin.service';
import {Doctor} from '../../../shared-module/models/doctor.model';
import {MatDialog} from '@angular/material';
import {AdminEmployeeDoctorsDetailsComponent} from './admin-employee-doctors-details/admin-employee-doctors-details.component';

@Component({
  selector: 'app-admin-employee-doctors',
  templateUrl: './admin-employee-doctors.component.html',
  styleUrls: ['./admin-employee-doctors.component.scss']
})
export class AdminEmployeeDoctorsComponent implements OnInit {

  displayedColumnsDoctor: string[] = ['id', 'firstName', 'lastName', 'specialization', 'email', 'edit'];
  dataSourceDoctor: Doctor[];

  constructor(private adminSerive: AdminService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.loadDoctors();
  }

  loadDoctors(): void {
    this.adminSerive.getDoctors().subscribe((doctors) => {
      this.dataSourceDoctor = doctors;
    });
  }

  editDoctor(element) {
    console.log(element);
    this.dialog.open(AdminEmployeeDoctorsDetailsComponent, {data: element});
  }
}
