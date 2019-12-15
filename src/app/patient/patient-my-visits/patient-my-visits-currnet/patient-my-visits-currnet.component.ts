import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {UsersService} from '../../../shared-module/services/users.service';
import {DoctorScrollVisitDetailsComponent} from '../../../doctor/doctor-scroll-visit/doctor-scroll-visit-details/doctor-scroll-visit-details.component';

@Component({
  selector: 'app-patient-my-visits-currnet',
  templateUrl: './patient-my-visits-currnet.component.html',
  styleUrls: ['./patient-my-visits-currnet.component.scss']
})
export class PatientMyVisitsCurrnetComponent implements OnInit {

  displayedColumns: string[] = ['date', 'time', 'doctor', 'status', 'pay', 'cancel'];
  dataSourceVisit;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private userSerive: UsersService) { }

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
      console.log(data);
      this.loadVisits();
    });
  }

}
