import {Component, Inject, OnInit} from '@angular/core';
import {Visit} from '../../../../shared-module/models/visit';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-patient-my-visits-currnet-ended',
  templateUrl: './patient-my-visits-currnet-ended.component.html',
  styleUrls: ['./patient-my-visits-currnet-ended.component.scss']
})
export class PatientMyVisitsCurrnetEndedComponent implements OnInit {

  visit: Visit;
  visitForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Visit,
    private formBuilder: FormBuilder,
  ) {
    this.visit = data;
  }

  ngOnInit() {
    this.visitForm = this.buildDoctorForm();
  }

  buildDoctorForm() {
    return this.formBuilder.group({
      diagnosis: [this.visit.diagnosis],
      prescription: [this.visit.prescription],
      recommendations: [this.visit.recommendations]
    });
  }
}
