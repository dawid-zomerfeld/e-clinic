import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DoctorComponent} from '../doctor/doctor.component';
import {PatientComponent} from './patient.component';
import {RouterModule} from '@angular/router';
import {AuthGuard} from '../shared-module/guards/auth-guard.service';
import {PatientAuthGuard} from '../shared-module/guards/patient-auth-guard.service';

const routes = [
  {
    path: 'patient',
    component: PatientComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PatientModuleRouting { }
