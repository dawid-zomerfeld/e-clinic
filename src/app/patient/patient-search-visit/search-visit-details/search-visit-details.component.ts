import {Component, OnInit, ViewChild} from '@angular/core';
import {Doctor} from '../../../shared-module/models/doctor.model';
import {MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {VisitService} from '../../../shared-module/services/visit.service';
import {UsersService} from '../../../shared-module/services/users.service';
import * as moment from 'moment';
import {getIdFromToken} from '../../../shared-module/helpers/token.helper';
import {visit} from '@angular/compiler-cli/src/ngtsc/util/src/visitor';

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

  reserveVisit(idVisit) {
    this.userSerive.reserveVisit(idVisit).subscribe(data => {
      console.log(data);
      this.loadVisits();
    });
  }
}
