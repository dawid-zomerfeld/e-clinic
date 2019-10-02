import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterComponent} from '../auth/register/register.component';
import {LoginComponent} from '../auth/login/login.component';
import {DoctorComponent} from './doctor.component';
import {RouterModule} from '@angular/router';
import {PatientAuthGuard} from '../shared-module/guards/patient-auth-guard.service';
import {DoctorAuthGuard} from '../shared-module/guards/doctor-auth-guard.service';
import {AuthGuard} from '../shared-module/guards/auth-guard.service';

const routes = [
  {
    path: 'doctor',
    component: DoctorComponent,
    canActivate: [DoctorAuthGuard, AuthGuard]
  }
];


@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class DoctorRoutingModule { }
