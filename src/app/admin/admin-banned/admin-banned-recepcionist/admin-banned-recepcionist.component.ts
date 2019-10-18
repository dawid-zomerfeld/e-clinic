import { Component, OnInit } from '@angular/core';
import {Recepcionist} from '../../../shared-module/models/recepcionist.model';
import {AdminService} from '../../../shared-module/services/admin.service';
import {MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';



@Component({
  selector: 'app-admin-banned-recepcionist',
  templateUrl: './admin-banned-recepcionist.component.html',
  styleUrls: ['./admin-banned-recepcionist.component.scss']
})
export class AdminBannedRecepcionistComponent implements OnInit {

  displayedColumnsRecepcionist: string[] = ['id', 'firstName', 'lastName', 'email', 'banned'];
  dataSourceRecepcionist: Recepcionist[];
  bannedForm: FormGroup;

  constructor(private adminSerive: AdminService,
              private snackBar: MatSnackBar,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loadRecepcionists();
    this.bannedForm = this.buildBannedForm();
  }

   public loadRecepcionists(): void {
    this.adminSerive.getRecepcionists().subscribe((recepcionists) => {
      this.dataSourceRecepcionist = recepcionists;
    });
  }

  buildBannedForm() {
    return this.formBuilder.group({
      banned: [],
    });
  }

  bannedRecepcionist(element) {
    console.log(element);
    this.adminSerive.updateRecepcionistBanned(element.id, this.bannedForm.value).subscribe(result => {
      if (result.status === 202) {
        this.snackBar.open('Zapisano!');
      } else {
        console.log('BAD');
        this.snackBar.open('Wystąpił błąd!');
      }
      this.loadRecepcionists();
    });
  }

}
