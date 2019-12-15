import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DoctorComponent} from './doctor.component';
import {DoctorRoutingModule} from './doctor-routing.module';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../shared-module/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared-module/shared.module';
import { DoctorSidenavComponent } from './doctor-sidenav/doctor-sidenav.component';
import { DoctorScrollVisitComponent } from './doctor-scroll-visit/doctor-scroll-visit.component';
import {MatPaginatorModule} from '@angular/material';
import {RecepcionistModule} from '../recepcionist/recepcionist.module';
import { DoctorScrollPatientComponent } from './doctor-scroll-patient/doctor-scroll-patient.component';
import { DoctorScrollVisitDetailsComponent } from './doctor-scroll-visit/doctor-scroll-visit-details/doctor-scroll-visit-details.component';
import { DoctorScrollPatientDetailsComponent } from './doctor-scroll-patient/doctor-scroll-patient-details/doctor-scroll-patient-details.component';




@NgModule({
  declarations: [DoctorComponent, DoctorSidenavComponent, DoctorScrollVisitComponent, DoctorScrollPatientComponent, DoctorScrollVisitDetailsComponent, DoctorScrollPatientDetailsComponent],
  exports: [DoctorComponent, DoctorSidenavComponent],
  entryComponents: [DoctorScrollVisitDetailsComponent],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    MatPaginatorModule,
    RecepcionistModule
  ]
})
export class DoctorModule { }
