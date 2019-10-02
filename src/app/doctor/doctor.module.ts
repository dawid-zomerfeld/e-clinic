import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DoctorComponent} from './doctor.component';
import {DoctorRoutingModule} from './doctor-routing.module';
import {RouterModule} from '@angular/router';




@NgModule({
  declarations: [DoctorComponent],
  exports: [DoctorComponent],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    RouterModule
  ]
})
export class DoctorModule { }
