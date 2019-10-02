import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DoctorComponent} from '../doctor/doctor.component';
import {RecepcionistComponent} from './recepcionist.component';
import {RouterModule} from '@angular/router';
import {PatientAuthGuard} from '../shared-module/guards/patient-auth-guard.service';
import {RecepcionistAuthGuard} from '../shared-module/guards/recepcionist-auth-guard.service';
import {AuthGuard} from '../shared-module/guards/auth-guard.service';

const routes = [
  {
    path: 'recepcionist',
    component: RecepcionistComponent,
    canActivate: [RecepcionistAuthGuard, AuthGuard]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class RecepcionistRoutingModule { }
