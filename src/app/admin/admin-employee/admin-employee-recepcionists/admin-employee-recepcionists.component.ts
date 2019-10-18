import { Component, OnInit } from '@angular/core';
import {Recepcionist} from '../../../shared-module/models/recepcionist.model';
import {AdminService} from '../../../shared-module/services/admin.service';
import {MatDialog} from '@angular/material';
// tslint:disable-next-line:max-line-length
import {AdminEmployeeRecepcionistsDetailsComponent} from './admin-employee-recepcionists-details/admin-employee-recepcionists-details.component';


@Component({
  selector: 'app-admin-employee-recepcionists',
  templateUrl: './admin-employee-recepcionists.component.html',
  styleUrls: ['./admin-employee-recepcionists.component.scss']
})
export class AdminEmployeeRecepcionistsComponent implements OnInit {

  displayedColumnsRecepcionist: string[] = ['id', 'firstName', 'lastName', 'email', 'edit'];
  dataSourceRecepcionist: Recepcionist[];


  constructor(private adminSerive: AdminService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.loadRecepcionists();
  }

  loadRecepcionists(): void {
    this.adminSerive.getRecepcionists().subscribe((recepcionists) => {
      this.dataSourceRecepcionist = recepcionists;
    });
  }
  editRecepcionist(element) {
    console.log(element);
    this.dialog.open(AdminEmployeeRecepcionistsDetailsComponent, {data: element});
  }
}
