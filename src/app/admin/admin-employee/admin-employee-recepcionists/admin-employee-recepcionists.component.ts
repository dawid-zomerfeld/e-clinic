import { Component, OnInit } from '@angular/core';
import {Recepcionist} from '../../../shared-module/models/recepcionist.model';
import {AdminService} from '../../../shared-module/services/admin.service';


@Component({
  selector: 'app-admin-employee-recepcionists',
  templateUrl: './admin-employee-recepcionists.component.html',
  styleUrls: ['./admin-employee-recepcionists.component.scss']
})
export class AdminEmployeeRecepcionistsComponent implements OnInit {

  displayedColumnsRecepcionist: string[] = ['id', 'firstName', 'lastName', 'email'];
  dataSourceRecepcionist: Recepcionist[];


  constructor(private adminSerive: AdminService) { }

  ngOnInit() {
    this.loadRecepcionists();
  }

  loadRecepcionists(): void {
    this.adminSerive.getRecepcionists().subscribe((recepcionists) => {
      this.dataSourceRecepcionist = recepcionists;
    });
  }
}
