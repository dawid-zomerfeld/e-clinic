import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSnackBar, MatTableDataSource} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import * as moment from 'moment';
import {DoctorService} from '../../shared-module/services/doctor.service';
import {DoctorScrollVisitDetailsComponent} from './doctor-scroll-visit-details/doctor-scroll-visit-details.component';

@Component({
  selector: 'app-doctor-scroll-visit',
  templateUrl: './doctor-scroll-visit.component.html',
  styleUrls: ['./doctor-scroll-visit.component.scss']
})
export class DoctorScrollVisitComponent implements OnInit {
  selectedDay?: Date = new Date();
  stringDate = Date();

  displayedColumns: string[] = ['time', 'status', 'patient', 'edit', 'done'];
  dataSourceVisit;
  patients;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private route: ActivatedRoute,
              private dialog: MatDialog,
              private snackBar: MatSnackBar,
              private doctorService: DoctorService) { }

  ngOnInit() {
    this.stringDate = moment(this.selectedDay).format('DD/MM/YYYY');
    this.loadVisits();
  }

  applyFilter(filterValue) {
    this.dataSourceVisit.filter = filterValue.trim().toLowerCase();
  }

  chooseSelectDay($event: Date) {
    this.selectedDay = $event;
    this.stringDate = moment(this.selectedDay).format('DD/MM/YYYY');
    this.loadVisits();
  }
  loadVisits() {
    const day = this.stringDate.slice(0, 2);
    const month = this.stringDate.slice(3, 5);
    const year = this.stringDate.slice(6, 10);
    this.doctorService.getAllVisitsByDate(day, month, year).subscribe(visits => {
      const newVisits = visits.filter( v => v.status === 'ZAREZERWOWANA' || v.status === 'OPŁACONA');
      this.dataSourceVisit = new MatTableDataSource(newVisits);
      this.dataSourceVisit.paginator = this.paginator;
    });
  }

  visitDetails(element) {
    const dialogRef = this.dialog.open(DoctorScrollVisitDetailsComponent, {data: element});
    dialogRef.afterClosed().subscribe(visitForm => {
      this.doctorService.updateVisitDetails(element.id, visitForm.value).subscribe(result => {
        if (result.status === 202) {
          this.snackBar.open('Dodano przebieg wizyty!');
          this.loadVisits();
        } else {
          console.log('BAD');
          this.snackBar.open('Wystąpił błąd!');
        }
      });
    });
  }

  doneVisit(idVisit) {
    this.doctorService.doneVisit(idVisit).subscribe(result => {
      this.loadVisits();
      this.snackBar.open('Wizyta została zakończona!');
    });
  }

}
