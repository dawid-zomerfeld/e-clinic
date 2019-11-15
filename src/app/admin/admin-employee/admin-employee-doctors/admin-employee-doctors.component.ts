import {Component, OnInit, ViewChild} from '@angular/core';
import {AdminService} from '../../../shared-module/services/admin.service';
import {Doctor} from '../../../shared-module/models/doctor.model';
import {MatDialog, MatPaginator, MatSnackBar, MatTableDataSource} from '@angular/material';
import {AdminEmployeeDoctorsDetailsComponent} from './admin-employee-doctors-details/admin-employee-doctors-details.component';

export interface PeriodicElement {
  duration: string;
  time: string;
  price: string;
  status: string;
}


@Component({
  selector: 'app-admin-employee-doctors',
  templateUrl: './admin-employee-doctors.component.html',
  styleUrls: ['./admin-employee-doctors.component.scss']
})
export class AdminEmployeeDoctorsComponent implements OnInit {


  displayedColumnsDoctor: string[] = ['id', 'firstName', 'lastName', 'specialization', 'email', 'edit'];
  dataSourceDoctor;


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private adminService: AdminService,
              private snackBar: MatSnackBar,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.loadDoctors();
  }
  applyFilter(filterValue: string) {
    this.dataSourceDoctor.filter = filterValue.trim().toLowerCase();
  }

  loadDoctors(): void {
    this.adminService.getDoctors().subscribe((doctors) => {
      this.dataSourceDoctor = new MatTableDataSource(doctors);
      this.dataSourceDoctor.paginator = this.paginator;
    });
  }

  editDoctor(element) {
    const dialogRef = this.dialog.open(AdminEmployeeDoctorsDetailsComponent, {data: element});
    dialogRef.afterClosed().subscribe(doctorForm => {
      this.adminService.updateDoctor(element.id, doctorForm.value).subscribe(result => {
        if (result.status === 202) {
          this.snackBar.open('Zapisano!');
          this.loadDoctors();
        } else {
          console.log('BAD');
          this.snackBar.open('Wystąpił błąd!');
        }
      });
    });
  }


}
