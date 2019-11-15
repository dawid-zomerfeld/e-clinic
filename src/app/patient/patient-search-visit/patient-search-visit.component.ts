import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {UsersService} from '../../shared-module/services/users.service';

@Component({
  selector: 'app-patient-search-visit',
  templateUrl: './patient-search-visit.component.html',
  styleUrls: ['./patient-search-visit.component.scss']
})
export class PatientSearchVisitComponent implements OnInit {

  displayedColumnsDoctor: string[] = ['id', 'firstName', 'lastName', 'specialization', 'visits'];
  dataSourceDoctor;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private userSerive: UsersService,
              private router: Router) { }

  ngOnInit() {
    this.loadDoctors();
  }

  applyFilter(filterValue: string) {
    this.dataSourceDoctor.filter = filterValue.trim().toLowerCase();
  }

  loadDoctors(): void {
    this.userSerive.getDoctors().subscribe((doctors) => {
      this.dataSourceDoctor = new MatTableDataSource(doctors);
      this.dataSourceDoctor.paginator = this.paginator;
    });
  }

  findVisit(element) {
    this.router.navigate(['/patient/search', element.id]);
  }

}
