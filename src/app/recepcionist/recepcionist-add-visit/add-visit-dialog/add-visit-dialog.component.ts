import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {NewVisit} from '../../../shared-module/models/new-visit';

@Component({
  selector: 'app-add-visit-dialog',
  templateUrl: './add-visit-dialog.component.html',
  styleUrls: ['./add-visit-dialog.component.scss']
})
export class AddVisitDialogComponent implements OnInit {

  visitForm: FormGroup;
  durationMinutes = [
    15,
    30,
    45,
    60
  ];

  times = [
    '0:00',
    '0:15',
    '0:30',
    '0:45',
    '1:00',
    '1:15',
    '1:30',
    '1:45',
    '2:00',
    '2:15',
    '2:30',
    '2:45',
    '3:00',
    '4:00',
    '5:00',
    '6:00',
    '7:00',
    '8:00',
    '8:15',
    '8:30',
    '8:45',
    '9:00',
    '9:15',
    '9:30',
    '9:45',
    '10:00',
    '10:15',
    '10:30',
    '10:45',
    '11:00',
    '11:15',
    '11:30',
    '11:45',
    '12:00',
    '12:15',
    '12:30',
    '12:45',
    '13:00',
    '13:15',
    '13:30',
    '13:45',
    '14:00',
    '14:15',
    '14:30',
    '14:45',
    '15:00',
    '15:15',
    '15:30',
    '15:45',
    '16:00',
    '16:15',
    '16:30',
    '16:45',
    '17:00',
    '17:15',
    '17:30',
    '17:45',
    '18:00',
    '18:15',
    '18:30',
    '18:45',
    '19:00',
    '19:15',
    '19:30',
    '19:45',
    '20:00',
    '20:15',
    '20:30',
    '20:45',
    '21:00',
    '21:15',
    '21:30',
    '21:45',
    '22:00',
    '22:15',
    '22:30',
    '22:45',
    '23:00',
    '23:15',
    '23:30',
    '23:45',
  ];

  constructor(
    public dialogRef: MatDialogRef<AddVisitDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: NewVisit,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.visitForm = this.buildAddVisitForm();
    this.setMaxQuantityVisit();
  }
  buildAddVisitForm() {
    return this.formBuilder.group({
      quantityVisit: ['', Validators.compose([Validators.required])],
      durationVisit: ['', Validators.compose([Validators.required])],
      priceVisit: ['', Validators.compose([Validators.required, Validators.min(0), Validators.max(50000)])],
      startVisit: ['', Validators.compose([Validators.required])],
    });
  }

  setMaxQuantityVisit() {
    this.visitForm.valueChanges.subscribe(value => {
      switch (this.visitForm.get('durationVisit').value) {
        case 15:
          this.visitForm.get('quantityVisit').setValidators(Validators.compose([Validators.required, Validators.max(24 * 4)]));
          break;
        case 30:
          this.visitForm.get('quantityVisit').setValidators(Validators.compose([Validators.required, Validators.max(24 * 2)]));
          break;
        case 45:
          this.visitForm.get('quantityVisit').setValidators(Validators.compose([Validators.required, Validators.max(32)]));
          break;
        default:
          this.visitForm.get('quantityVisit').setValidators(Validators.compose([Validators.required, Validators.max(24)]));
      }
    });
  }

  ifPast() {
    const now = new Date();
    const timeArray = this.visitForm.get('startVisit').value.split(':');
    if (Number(this.data.year) > now.getFullYear()) {
      return true;
    }
    if (Number(this.data.year) === now.getFullYear()) {
      if (Number(this.data.month) > now.getMonth() + 1) {
        return true;
      }
    }
    if (Number(this.data.year) === now.getFullYear()) {
      if (Number(this.data.month) === now.getMonth() + 1) {
        if (Number(this.data.day) > now.getDate()) {
          return true;
        }
      }
    }
    if (Number(this.data.year) === now.getFullYear()) {
      if (Number(this.data.month) === now.getMonth() + 1) {
        if (Number(this.data.day) === now.getDate()) {
          if ((parseInt(timeArray[0], 10) > now.getHours())) {
             return true;
          }
        }
      }
    }
    if (Number(this.data.year) === now.getFullYear()) {
      if (Number(this.data.month) === now.getMonth() + 1) {
        if (Number(this.data.day) === now.getDate()) {
          if ((parseInt(timeArray[0], 10) === now.getHours())) {
            if (parseInt(timeArray[1], 10) > now.getMinutes()) {
               return true;
            }
          }
        }
      }
    }
  }

  addVisit() {
    this.data = {
      ...this.data,
      duration: this.visitForm.get('durationVisit').value,
      quantityVisit: parseInt(this.visitForm.get('quantityVisit').value, 10),
      price: this.visitForm.get('priceVisit').value
    };
    this.data.firstHour = parseInt(this.visitForm.controls.startVisit.value.split(':')[0], 10);
    this.data.firstMinutes = parseInt(this.visitForm.controls.startVisit.value.split(':')[1], 10);
    this.dialogRef.close(this.data);
  }
}
