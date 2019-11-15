import {Component, OnInit, ViewChild} from '@angular/core';
import {Doctor} from '../../shared-module/models/doctor.model';
import {RecepcionistService} from '../../shared-module/services/recepcionist.service';
import {Router} from '@angular/router';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-recepcionist-add-visit',
  templateUrl: './recepcionist-add-visit.component.html',
  styleUrls: ['./recepcionist-add-visit.component.scss']
})
export class RecepcionistAddVisitComponent implements OnInit {

  displayedColumnsDoctor: string[] = ['id', 'firstName', 'lastName', 'specialization', 'visits'];
  dataSourceDoctor;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private recepcionistService: RecepcionistService,
              private router: Router) { }

  ngOnInit() {
    this.loadDoctors();
  }

  applyFilter(filterValue: string) {
    this.dataSourceDoctor.filter = filterValue.trim().toLowerCase();
  }

  loadDoctors(): void {
    this.recepcionistService.getDoctors().subscribe((doctors) => {
      this.dataSourceDoctor = new MatTableDataSource(doctors);
      this.dataSourceDoctor.paginator = this.paginator;
    });
  }

  addVisits(element) {
    this.router.navigate(['/recepcionist/add', element.id]);
  }
}
