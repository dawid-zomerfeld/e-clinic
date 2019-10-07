import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../shared-module/services/admin.service';
import {Doctor} from '../../../shared-module/models/doctor.model';

@Component({
  selector: 'app-admin-employee-doctors',
  templateUrl: './admin-employee-doctors.component.html',
  styleUrls: ['./admin-employee-doctors.component.scss']
})
export class AdminEmployeeDoctorsComponent implements OnInit {

  displayedColumnsDoctor: string[] = ['id', 'firstName', 'lastName', 'specialization', 'email'];
  dataSourceDoctor: Doctor[];

  constructor(private adminSerive: AdminService) { }

  ngOnInit() {
    this.loadDoctors();
  }

  loadDoctors(): void {
    this.adminSerive.getDoctors().subscribe((doctors) => {
      this.dataSourceDoctor = doctors;
    });
  }

}
