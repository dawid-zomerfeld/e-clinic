import {Component, OnInit, ViewChild} from '@angular/core';
import {RecepcionistService} from '../../../shared-module/services/recepcionist.service';
import {ActivatedRoute} from '@angular/router';
import {Doctor} from '../../../shared-module/models/doctor.model';
import {MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {AddVisitDialogComponent} from '../add-visit-dialog/add-visit-dialog.component';
import * as moment from 'moment';
import {VisitService} from '../../../shared-module/services/visit.service';

@Component({
  selector: 'app-add-visit-details',
  templateUrl: './add-visit-details.component.html',
  styleUrls: ['./add-visit-details.component.scss']
})
export class AddVisitDetailsComponent implements OnInit {

  doctor: Doctor;
  selectedDay?: Date = new Date();
  stringDate = Date();

  displayedColumns: string[] = ['time', 'duration', 'status', 'price', 'delete'];
  dataSourceVisit;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  applyFilter(filterValue: string) {
    this.dataSourceVisit.filter = filterValue.trim().toLowerCase();
  }


  constructor(private recepcionistService: RecepcionistService,
              private route: ActivatedRoute,
              private dialog: MatDialog,
              private snackBar: MatSnackBar,
              private visitService: VisitService) { }

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
    this.recepcionistService.getDoctor(id).subscribe(doctor => {
      this.doctor = doctor;
    });
  }

  loadVisits() {
    const id = this.route.snapshot.params.key;
    const day = this.stringDate.slice(0, 2);
    const month = this.stringDate.slice(3, 5);
    const year = this.stringDate.slice(6, 10);
    this.visitService.getVisits(id, day, month, year).subscribe(visits => {
      const newVisits = visits.filter( v => v.status === 'NOWA');
      this.dataSourceVisit = new MatTableDataSource(newVisits);
      this.dataSourceVisit.paginator = this.paginator;
    });
  }

  deleteVisit(idVisit) {
    const idDoctor = this.route.snapshot.params.key;
    this.visitService.deleteVisits(idDoctor, idVisit).subscribe(data => {
      if (data.status === 202) {
        this.snackBar.open('Usunięto!');
      }
      this.loadVisits();
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open (AddVisitDialogComponent, {
      width: '30vw',
      data:
        {
          year: this.stringDate.slice(6, 10),
          month: this.stringDate.slice(3, 5),
          day: this.stringDate.slice(0, 2),
        }});
    dialogRef.afterClosed().subscribe(result => {
      const id = this.route.snapshot.params.key;
      this.visitService.addVisits(id, result).subscribe(data => {
        if (data.status === 400) {
          this.snackBar.open('Dana godzina jest zajęta!!');
        }
        if (data.status === 202) {
          this.snackBar.open('Pomyślnie dodano!');
        }
        this.loadVisits();
      });
    });
  }
}
