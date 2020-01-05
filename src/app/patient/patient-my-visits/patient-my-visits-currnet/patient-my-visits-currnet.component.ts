import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSnackBar, MatTableDataSource} from '@angular/material';
import {UsersService} from '../../../shared-module/services/users.service';
import {DoctorScrollVisitDetailsComponent} from '../../../doctor/doctor-scroll-visit/doctor-scroll-visit-details/doctor-scroll-visit-details.component';

@Component({
  selector: 'app-patient-my-visits-currnet',
  templateUrl: './patient-my-visits-currnet.component.html',
  styleUrls: ['./patient-my-visits-currnet.component.scss']
})
export class PatientMyVisitsCurrnetComponent implements OnInit {

  paymentUrl = 'https://www.przelewy24.pl/demo/demo.php';
  displayedColumns: string[] = ['date', 'time', 'doctor', 'status', 'pay', 'cancel'];
  dataSourceVisit;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private userSerive: UsersService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loadVisits();
  }

  loadVisits() {
    this.userSerive.getPatientVisits().subscribe(visits => {
      const newVisits = visits.filter( v => v.status === 'ZAREZERWOWANA' || v.status === 'OPŁACONA');
      this.dataSourceVisit = new MatTableDataSource(newVisits);
      this.dataSourceVisit.paginator = this.paginator;
    });
  }

  cancelVisit(idVisit) {
    console.log(idVisit);
    this.userSerive.cancelVisit(idVisit).subscribe(data => {
      this.snackBar.open('Wizyta została odwołana!');
      this.loadVisits();
    });
  }

  ifPast(element) {
    const now = new Date();
    if (Number(element.year) > now.getFullYear()) {
      return true;
    }
    if (Number(element.year) === now.getFullYear()) {
      if (Number(element.month) > now.getMonth() + 1) {
        return true;
      }
    }
    if (Number(element.year) === now.getFullYear()) {
      if (Number(element.month) === now.getMonth() + 1) {
        if (Number(element.day) > now.getDate()) {
          return true;
        }
      }
    }
    if (Number(element.year) === now.getFullYear()) {
      if (Number(element.month) === now.getMonth() + 1) {
        if (Number(element.day) === now.getDate()) {
          if (Number(element.hour) > now.getHours()) {
            return true;
          }
        }
      }
    }
    if (Number(element.year) === now.getFullYear()) {
      if (Number(element.month) === now.getMonth() + 1) {
        if (Number(element.day) === now.getDate()) {
          if (Number(element.hour) === now.getHours()) {
            if (Number(element.minutes) > now.getMinutes()) {
              return true;
            }
          }
        }
      }
    }
  }

  payVisit(idVisit) {
    const paymentWindow = window.open(this.paymentUrl, 'Płatność za wizytę', 'width=625,height=580,left=1,top=1');
    console.log(paymentWindow);
    this.userSerive.payVisit(idVisit).subscribe(data => {
      console.log(data);
      setTimeout( () => this.loadVisits(), 3000 );
      setTimeout( () =>  this.snackBar.open('Wizyta została opłacona!'), 3000 );
    });

  }

}
