import { Component, OnInit } from '@angular/core';
import {Recepcionist} from '../../../shared-module/models/recepcionist.model';
import {AdminService} from '../../../shared-module/services/admin.service';



@Component({
  selector: 'app-admin-banned-recepcionist',
  templateUrl: './admin-banned-recepcionist.component.html',
  styleUrls: ['./admin-banned-recepcionist.component.scss']
})
export class AdminBannedRecepcionistComponent implements OnInit {



  displayedColumnsRecepcionist: string[] = ['id', 'firstName', 'lastName', 'email', 'banned'];
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
