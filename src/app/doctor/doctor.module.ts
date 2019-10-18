import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DoctorComponent} from './doctor.component';
import {DoctorRoutingModule} from './doctor-routing.module';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../shared-module/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared-module/shared.module';
import { DoctorSidenavComponent } from './doctor-sidenav/doctor-sidenav.component';




@NgModule({
  declarations: [DoctorComponent, DoctorSidenavComponent],
  exports: [DoctorComponent, DoctorSidenavComponent],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule
  ]
})
export class DoctorModule { }
