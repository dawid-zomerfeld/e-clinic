import {Component, OnInit, ViewChild} from '@angular/core';
import {AdminService} from '../../../shared-module/services/admin.service';
import {MatPaginator, MatSnackBar, MatTableDataSource} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';



@Component({
  selector: 'app-admin-banned-recepcionist',
  templateUrl: './admin-banned-recepcionist.component.html',
  styleUrls: ['./admin-banned-recepcionist.component.scss']
})
export class AdminBannedRecepcionistComponent implements OnInit {

  displayedColumnsRecepcionist: string[] = ['id', 'firstName', 'lastName', 'email', 'banned'];
  dataSourceRecepcionist;
  bannedForm: FormGroup;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private adminService: AdminService,
              private snackBar: MatSnackBar,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loadRecepcionists();
    this.bannedForm = this.buildBannedForm();
  }

  applyFilter(filterValue: string) {
    this.dataSourceRecepcionist.filter = filterValue.trim().toLowerCase();
  }

  loadRecepcionists() {
    this.adminService.getRecepcionists().subscribe((recepcionists) => {
      this.dataSourceRecepcionist = new MatTableDataSource(recepcionists);
      this.dataSourceRecepcionist.paginator = this.paginator;
    });
  }

  buildBannedForm() {
    return this.formBuilder.group({
      banned: [],
    });
  }

  bannedRecepcionist(element) {
    console.log(element);
    this.adminService.updateRecepcionistBanned(element.id, this.bannedForm.value).subscribe(result => {
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
