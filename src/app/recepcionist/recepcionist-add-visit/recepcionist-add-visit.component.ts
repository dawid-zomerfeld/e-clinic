import { Component, OnInit } from '@angular/core';
import {Doctor} from '../../shared-module/models/doctor.model';
import {RecepcionistService} from '../../shared-module/services/recepcionist.service';

@Component({
  selector: 'app-recepcionist-add-visit',
  templateUrl: './recepcionist-add-visit.component.html',
  styleUrls: ['./recepcionist-add-visit.component.scss']
})
export class RecepcionistAddVisitComponent implements OnInit {

  displayedColumnsDoctor: string[] = ['id', 'firstName', 'lastName', 'specialization'];
  dataSourceDoctor: Doctor[];

  constructor(private recepcionistService: RecepcionistService) { }

  ngOnInit() {
    this.loadDoctors();
  }

  loadDoctors(): void {
    this.recepcionistService.getDoctors().subscribe((doctors) => {
      this.dataSourceDoctor = doctors;
    });
  }
}
