import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PatientComponent} from './patient.component';
import {PatientModuleRouting} from './patient-module.routing';
import {RouterModule} from '@angular/router';
import { PatientSidenavComponent } from './patient-sidenav/patient-sidenav.component';
import {MaterialModule} from '../shared-module/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared-module/shared.module';

@NgModule({
  declarations: [PatientComponent, PatientSidenavComponent],
  exports: [PatientComponent, PatientSidenavComponent],
  imports: [
    CommonModule,
    PatientModuleRouting,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule
  ]
})
export class PatientModule { }
