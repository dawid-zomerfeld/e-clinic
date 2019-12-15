import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Visit} from '../../../shared-module/models/visit';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-doctor-scroll-visit-details',
  templateUrl: './doctor-scroll-visit-details.component.html',
  styleUrls: ['./doctor-scroll-visit-details.component.scss']
})
export class DoctorScrollVisitDetailsComponent implements OnInit {

  visit: Visit;
  visitForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Visit,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DoctorScrollVisitDetailsComponent>
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
  saveDetails() {
    this.dialogRef.close(this.visitForm);
  }
}
