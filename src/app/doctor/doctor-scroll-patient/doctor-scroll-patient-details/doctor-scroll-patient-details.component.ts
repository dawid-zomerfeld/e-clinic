import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {UsersService} from '../../../shared-module/services/users.service';
import {PatientMyVisitsCurrnetEndedComponent} from '../../../patient/patient-my-visits/patient-my-visits-ended/patient-my-visits-currnet-ended/patient-my-visits-currnet-ended.component';
import {DoctorService} from '../../../shared-module/services/doctor.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-doctor-scroll-patient-details',
  templateUrl: './doctor-scroll-patient-details.component.html',
  styleUrls: ['./doctor-scroll-patient-details.component.scss']
})
export class DoctorScrollPatientDetailsComponent implements OnInit {

  displayedColumns: string[] = ['date', 'time', 'patient', 'status', 'details'];
  dataSourceVisit;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private dialog: MatDialog,
              private doctorService: DoctorService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadVisits();
  }

  loadVisits() {
    const id = this.route.snapshot.params.key;
    this.doctorService.getVisitsByDoctorAndPatient(id).subscribe(visits => {
      const newVisits = visits.filter( v => v.status === 'ZAKOŃCZONA');
      this.dataSourceVisit = new MatTableDataSource(newVisits);
      this.dataSourceVisit.paginator = this.paginator;
    });
  }
  visitDetails(element) {
    this.dialog.open(PatientMyVisitsCurrnetEndedComponent, {data: element});
  }

}
