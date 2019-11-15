import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatCalendar} from '@angular/material';
import {Moment} from 'moment';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-add-visit-calendar',
  templateUrl: './add-visit-calendar.component.html',
  styleUrls: ['./add-visit-calendar.component.scss']
})
export class AddVisitCalendarComponent implements OnInit {
  // @ts-ignore
  @ViewChild('calendar') calendar: MatCalendar<Moment>;
  selectedDate: Moment;
  @ViewChild(MatCalendar, {static: true}) datePicker: MatCalendar<Date>;
  @Output()
  emitterData = new EventEmitter<Date>();


  constructor(

  ) { }

  ngOnInit() {
    this.datePicker.selectedChange.subscribe(date => {
      this.changeDate(date);
    });

  }



  changeDate($event: Date) {
    this.emitterData.emit($event);
  }

}
