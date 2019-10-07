import { NgModule } from '@angular/core';
import {PatientComponent} from './patient.component';
import {RouterModule} from '@angular/router';
import {AuthGuard} from '../shared-module/guards/auth-guard.service';
import {PatientAuthGuard} from '../shared-module/guards/patient-auth-guard.service';

const routes = [
  {
    path: 'patient',
    component: PatientComponent,
    canActivate: [PatientAuthGuard, AuthGuard]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PatientModuleRouting { }
