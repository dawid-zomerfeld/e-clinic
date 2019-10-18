import { NgModule } from '@angular/core';
import {DoctorComponent} from './doctor.component';
import {RouterModule} from '@angular/router';
import {DoctorAuthGuard} from '../shared-module/guards/doctor-auth-guard.service';
import {AuthGuard} from '../shared-module/guards/auth-guard.service';

const routes = [

];


@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class DoctorRoutingModule { }
