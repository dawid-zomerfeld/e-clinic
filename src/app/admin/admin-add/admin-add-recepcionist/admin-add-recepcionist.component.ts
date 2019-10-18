import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AdminService} from '../../../shared-module/services/admin.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-admin-add-recepcionist',
  templateUrl: './admin-add-recepcionist.component.html',
  styleUrls: ['./admin-add-recepcionist.component.scss']
})
export class AdminAddRecepcionistComponent implements OnInit {

  recepcionistForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.recepcionistForm = this.buildRecepcionistForm();
  }

  buildRecepcionistForm() {
    return this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])],
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
    });
  }

  addRecepcionist() {
    this.adminService.addRecepcionist(this.recepcionistForm.value).subscribe(result => {
      if (result.status === 201) {
        this.snackBar.open('Pomyślnie dodano pracownika!');
      } else {
        console.log('BAD');
      }
    });
  }
}
