import {Component, OnInit, ViewChild} from '@angular/core';
import {AdminService} from '../../../shared-module/services/admin.service';
import {MatDialog, MatPaginator, MatSnackBar, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';



@Component({
  selector: 'app-admin-banned-doctor',
  templateUrl: './admin-banned-doctor.component.html',
  styleUrls: ['./admin-banned-doctor.component.scss']
})
export class AdminBannedDoctorComponent implements OnInit {

  displayedColumnsDoctor: string[] = ['id', 'firstName', 'lastName', 'email', 'banned'];
  dataSourceDoctor;
  bannedForm: FormGroup;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private adminService: AdminService,
              private snackBar: MatSnackBar,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loadDoctors();
    this.bannedForm = this.buildBannedForm();
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
  buildBannedForm() {
    return this.formBuilder.group({
      banned: [],
    });
  }

  bannedDoctor(element) {
    console.log(element);
    this.adminService.updateDoctorBanned(element.id, this.bannedForm.value).subscribe(result => {
      if (result.status === 202) {
        this.snackBar.open('Zapisano!');
      } else {
        console.log('BAD');
        this.snackBar.open('Wystąpił błąd!');
      }
      this.loadDoctors();
    });
  }
}
