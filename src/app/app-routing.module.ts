import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {AuthGuard} from './shared-module/guards/auth-guard.service';
import {AdminAuthGuard} from './shared-module/guards/admin-auth-guard.service';
import {PageNotFoundComponent} from './shared-module/page-not-found/page-not-found.component';
import {DoctorComponent} from './doctor/doctor.component';
import {DoctorAuthGuard} from './shared-module/guards/doctor-auth-guard.service';
import {RecepcionistComponent} from './recepcionist/recepcionist.component';
import {RecepcionistAuthGuard} from './shared-module/guards/recepcionist-auth-guard.service';
import {PatientComponent} from './patient/patient.component';
import {PatientAuthGuard} from './shared-module/guards/patient-auth-guard.service';


const routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminAuthGuard, AuthGuard],
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: 'doctor',
    component: DoctorComponent,
    canActivate: [DoctorAuthGuard, AuthGuard],
    loadChildren: './doctor/doctor.module#DoctorModule'
  },
  {
    path: 'recepcionist',
    component: RecepcionistComponent,
    canActivate: [RecepcionistAuthGuard, AuthGuard],
    loadChildren: './recepcionist/recepcionist.module#RecepcionistModule'
  },
  {
    path: 'patient',
    component: PatientComponent,
    canActivate: [PatientAuthGuard, AuthGuard],
    loadChildren: './patient/patient.module#PatientModule'
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
