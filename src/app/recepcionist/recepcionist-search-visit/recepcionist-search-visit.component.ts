import {Component, OnInit, ViewChild} from '@angular/core';
import * as moment from 'moment';
import {MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {RecepcionistService} from '../../shared-module/services/recepcionist.service';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-recepcionist-search-visit',
  templateUrl: './recepcionist-search-visit.component.html',
  styleUrls: ['./recepcionist-search-visit.component.scss']
})
export class RecepcionistSearchVisitComponent implements OnInit {
  selectedDay?: Date = new Date();
  stringDate = Date();

  displayedColumns: string[] = ['time', 'status', 'doctor', 'patient', 'edit'];
  dataSourceVisit;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor(private recepcionistService: RecepcionistService,
              private route: ActivatedRoute,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) { }

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
    this.recepcionistService.getAllVisitsByDate(day, month, year).subscribe(visits => {
      const newVisits = visits.filter( v => v.status === 'ZAREZERWOWANA' || v.status === 'OPŁACONA');
      this.dataSourceVisit = new MatTableDataSource(newVisits);
      this.dataSourceVisit.paginator = this.paginator;
    });
  }
  paidVisits(idVisit) {
    console.log(idVisit);
    this.recepcionistService.paidVisits(idVisit).subscribe(data => {
      this.snackBar.open('Opłacono!');
      this.loadVisits();
    });
  }
}
