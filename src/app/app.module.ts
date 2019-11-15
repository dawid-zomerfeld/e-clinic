import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MaterialModule} from './shared-module/material/material.module';
import {AuthModule} from './auth/auth.module';
import {SharedModule} from './shared-module/shared.module';
import {LayoutModule} from './layout/layout.module';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {PatientModule} from './patient/patient.module';
import {DoctorModule} from './doctor/doctor.module';
import {RecepcionistModule} from './recepcionist/recepcionist.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AdminModule} from './admin/admin.module';
import {MatPaginatorIntlCro} from './shared-module/paginator/paginator';
import {MatPaginatorIntl} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AuthModule,
    PatientModule,
    DoctorModule,
    RecepcionistModule,
    SharedModule,
    LayoutModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AdminModule
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: MatPaginatorIntlCro}],
  bootstrap: [AppComponent]
})
export class AppModule { }
