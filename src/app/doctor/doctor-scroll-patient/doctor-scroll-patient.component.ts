import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {RecepcionistService} from '../../shared-module/services/recepcionist.service';
import {Router} from '@angular/router';
import {DoctorService} from '../../shared-module/services/doctor.service';

@Component({
  selector: 'app-doctor-scroll-patient',
  templateUrl: './doctor-scroll-patient.component.html',
  styleUrls: ['./doctor-scroll-patient.component.scss']
})
export class DoctorScrollPatientComponent implements OnInit {

  displayedColumnsPatient: string[] = ['pesel', 'firstName', 'lastName', 'visits'];
  dataSourcePatient;
  patients;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private doctorService: DoctorService,
              private router: Router) { }

  ngOnInit() {
    this.loadVisits();
  }

  applyFilter(filterValue: string) {
    this.dataSourcePatient.filter = filterValue.trim().toLowerCase();
  }


  removeDuplicates(collection, getIdentifier) {
    const identifierState = {};
    return collection.filter(value => {
      const identifier = JSON.stringify(getIdentifier(value));
      if (identifierState[identifier]) {
        return false;
      }
      identifierState[identifier] = true;
      return true;
    });
  }
  loadVisits() {
    this.doctorService.getAllVisits().subscribe(visits => {
      this.dataSourcePatient = visits.map(data => data.patient);
      this.dataSourcePatient = this.removeDuplicates(this.dataSourcePatient, value => value.id);
      this.dataSourcePatient = new MatTableDataSource(this.dataSourcePatient);
      this.dataSourcePatient.paginator = this.paginator;
    });
  }
  findVisit(element) {
    this.router.navigate(['/doctor/patients', element.id]);
  }
}
