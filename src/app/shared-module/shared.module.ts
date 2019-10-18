import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './material/material.module';
import {PatientAuthGuard} from './guards/patient-auth-guard.service';
import {AuthGuard} from './guards/auth-guard.service';
import {DoctorAuthGuard} from './guards/doctor-auth-guard.service';

import {RecepcionistAuthGuard} from './guards/recepcionist-auth-guard.service';
import {AdminAuthGuard} from './guards/admin-auth-guard.service';
import {LogoutGuardService} from './guards/logout-guard.service';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {UnauthorizedInterceptor} from './http/response.interceptor';
import {TokenInterceptor} from './http/token.interceptor';
import {BadRequestInterceptor} from './http/BadRequestInterceptor';



@NgModule({
  declarations: [PageNotFoundComponent],
  exports: [MaterialModule, PageNotFoundComponent],
  providers: [PatientAuthGuard, AuthGuard, DoctorAuthGuard, AdminAuthGuard, RecepcionistAuthGuard, LogoutGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BadRequestInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptor,
      multi: true
    }],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
