import { Component, OnInit } from '@angular/core';
import {Doctor} from '../../../shared-module/models/doctor.model';
import {AdminService} from '../../../shared-module/services/admin.service';


@Component({
  selector: 'app-admin-banned-doctor',
  templateUrl: './admin-banned-doctor.component.html',
  styleUrls: ['./admin-banned-doctor.component.scss']
})
export class AdminBannedDoctorComponent implements OnInit {

  displayedColumnsDoctor: string[] = ['id', 'firstName', 'lastName', 'email', 'banned'];
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
