import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DoctorComponent} from '../doctor/doctor.component';
import {ManagerComponent} from './manager.component';
import {RouterModule} from '@angular/router';
import {PatientAuthGuard} from '../shared-module/guards/patient-auth-guard.service';
import {ManagerAuthGuard} from '../shared-module/guards/manager-auth-guard.service';
import {AuthGuard} from '../shared-module/guards/auth-guard.service';

const routes = [
  {
    path: 'manager',
    component: ManagerComponent,
    canActivate: [ManagerAuthGuard, AuthGuard]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ManagerRoutingModule { }
