import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {DoctorScrollVisitComponent} from './doctor-scroll-visit/doctor-scroll-visit.component';
import {DoctorScrollPatientComponent} from './doctor-scroll-patient/doctor-scroll-patient.component';
import {DoctorScrollPatientDetailsComponent} from './doctor-scroll-patient/doctor-scroll-patient-details/doctor-scroll-patient-details.component';

const routes = [
  {path: 'doctor', redirectTo: 'doctor/visits', pathMatch: 'full'},
  {
    path: 'visits',
    component: DoctorScrollVisitComponent
  },
  {
    path: 'patients/:key',
    component: DoctorScrollPatientDetailsComponent
  },
  {
    path: 'patients',
    component: DoctorScrollPatientComponent
  },
];


@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class DoctorRoutingModule { }
