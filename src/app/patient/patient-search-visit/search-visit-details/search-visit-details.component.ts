import {Component, OnInit, ViewChild} from '@angular/core';
import {Doctor} from '../../../shared-module/models/doctor.model';
import {MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../../../shared-module/services/users.service';
import * as moment from 'moment';


@Component({
  selector: 'app-search-visit-details',
  templateUrl: './search-visit-details.component.html',
  styleUrls: ['./search-visit-details.component.scss']
})
export class SearchVisitDetailsComponent implements OnInit {

  doctor: Doctor;
  selectedDay?: Date = new Date();
  stringDate = Date();

  displayedColumns: string[] = ['time', 'duration',  'price', 'status', 'delete'];
  dataSourceVisit;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  applyFilter(filterValue: string) {
    this.dataSourceVisit.filter = filterValue.trim().toLowerCase();
  }

  constructor(private userSerive: UsersService,
              private route: ActivatedRoute,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loadDoctor();
    this.stringDate = moment(this.selectedDay).format('DD/MM/YYYY');
    this.loadVisits();
  }

  chooseSelectDay($event: Date) {
    this.selectedDay = $event;
    this.stringDate = moment(this.selectedDay).format('DD/MM/YYYY');
    this.loadVisits();
  }

  loadDoctor() {
    const id = this.route.snapshot.params.key;
    this.userSerive.getDoctor(id).subscribe(doctor => {
      this.doctor = doctor;
    });
  }


  loadVisits() {
    const id = this.route.snapshot.params.key;
    const day = this.stringDate.slice(0, 2);
    const month = this.stringDate.slice(3, 5);
    const year = this.stringDate.slice(6, 10);
    this.userSerive.getVisits(id, day, month, year).subscribe(visits => {
      const newVisits = visits.filter( v => v.status === 'NOWA');
      this.dataSourceVisit = new MatTableDataSource(newVisits);
      this.dataSourceVisit.paginator  = this.paginator;
      console.log(newVisits);
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

  reserveVisit(idVisit) {
    this.userSerive.reserveVisit(idVisit).subscribe(data => {
      this.snackBar.open('Wizyta została zarezerwowana!');
      this.loadVisits();
    });
  }
}
