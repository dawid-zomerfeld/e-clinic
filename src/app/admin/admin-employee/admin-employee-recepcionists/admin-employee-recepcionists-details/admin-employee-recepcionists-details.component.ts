import {Component, Inject, OnInit} from '@angular/core';
import {Recepcionist} from '../../../../shared-module/models/recepcionist.model';
import {MAT_DIALOG_DATA} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin-employee-recepcionists-details',
  templateUrl: './admin-employee-recepcionists-details.component.html',
  styleUrls: ['./admin-employee-recepcionists-details.component.scss']
})
export class AdminEmployeeRecepcionistsDetailsComponent implements OnInit {

  recepcionist: Recepcionist;
  recepcionistForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Recepcionist,
    private formBuilder: FormBuilder,
  ) {
    this.recepcionist = data;
  }

  ngOnInit() {
    this.recepcionistForm = this.buildRecepcionistForm();
  }

  buildRecepcionistForm() {
    return this.formBuilder.group({
      firstName: [this.recepcionist.firstName,
        Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      lastName: [this.recepcionist.lastName,
        Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
    });
  }
}
