import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {UsersService} from '../../../shared-module/services/users.service';
import {DoctorScrollVisitDetailsComponent} from '../../../doctor/doctor-scroll-visit/doctor-scroll-visit-details/doctor-scroll-visit-details.component';
import {PatientMyVisitsCurrnetEndedComponent} from './patient-my-visits-currnet-ended/patient-my-visits-currnet-ended.component';

@Component({
  selector: 'app-patient-my-visits-ended',
  templateUrl: './patient-my-visits-ended.component.html',
  styleUrls: ['./patient-my-visits-ended.component.scss']
})
export class PatientMyVisitsEndedComponent implements OnInit {

  displayedColumns: string[] = ['date', 'time', 'doctor', 'status', 'details'];
  dataSourceVisit;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private dialog: MatDialog,
              private userSerive: UsersService) { }

  ngOnInit() {
    this.loadVisits();
  }

  loadVisits() {
    this.userSerive.getPatientVisits().subscribe(visits => {
      const newVisits = visits.filter( v => v.status === 'ZAKOŃCZONA');
      this.dataSourceVisit = new MatTableDataSource(newVisits);
      this.dataSourceVisit.paginator = this.paginator;
    });
  }
  visitDetails(element) {
    this.dialog.open(PatientMyVisitsCurrnetEndedComponent, {data: element});
  }
}
