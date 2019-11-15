import {Component, OnInit, ViewChild} from '@angular/core';
import {AdminService} from '../../../shared-module/services/admin.service';
import {MatDialog, MatDialogRef, MatPaginator, MatSnackBar, MatTableDataSource} from '@angular/material';
// tslint:disable-next-line:max-line-length
import {AdminEmployeeRecepcionistsDetailsComponent} from './admin-employee-recepcionists-details/admin-employee-recepcionists-details.component';


@Component({
  selector: 'app-admin-employee-recepcionists',
  templateUrl: './admin-employee-recepcionists.component.html',
  styleUrls: ['./admin-employee-recepcionists.component.scss'],
})
export class AdminEmployeeRecepcionistsComponent implements OnInit {

  displayedColumnsRecepcionist: string[] = ['id', 'firstName', 'lastName', 'email', 'edit'];
  dataSourceRecepcionist;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private adminService: AdminService,
              private snackBar: MatSnackBar,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.loadRecepcionists();
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
  editRecepcionist(element) {
    const dialogRef = this.dialog.open(AdminEmployeeRecepcionistsDetailsComponent, {data: element});
    dialogRef.afterClosed().subscribe(recepcionistForm => {
      this.adminService.updateRecepcionist(element.id, recepcionistForm.value).subscribe(result => {
        if (result.status === 202) {
          this.snackBar.open('Zapisano!');
          this.loadRecepcionists();
        } else {
          console.log('BAD');
          this.snackBar.open('Wystąpił błąd!');
        }
      });
    });
  }


}
