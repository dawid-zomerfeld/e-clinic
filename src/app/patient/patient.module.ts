import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PatientComponent} from './patient.component';
import {PatientModuleRouting} from './patient-module.routing';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [PatientComponent],
  exports: [PatientComponent],
  imports: [
    CommonModule,
    PatientModuleRouting,
    RouterModule
  ]
})
export class PatientModule { }
