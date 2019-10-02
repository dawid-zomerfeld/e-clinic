import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './material/material.module';
import {PatientAuthGuard} from './guards/patient-auth-guard.service';
import {AuthGuard} from './guards/auth-guard.service';
import {DoctorAuthGuard} from './guards/doctor-auth-guard.service';
import {ManagerAuthGuard} from './guards/manager-auth-guard.service';
import {RecepcionistAuthGuard} from './guards/recepcionist-auth-guard.service';



@NgModule({
  declarations: [],
  exports: [MaterialModule],
  providers: [PatientAuthGuard, AuthGuard, DoctorAuthGuard, ManagerAuthGuard, RecepcionistAuthGuard],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
