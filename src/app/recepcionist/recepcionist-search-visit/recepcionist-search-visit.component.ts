import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


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
  constructor() { }

  ngOnInit() {
  }

  chooseSelectDay($event: Date) {
    this.selectedDay = $event;
    this.stringDate = moment(this.selectedDay).format('DD/MM/YYYY');
  }
}
