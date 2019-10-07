import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../shared-module/material/material.module';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminBannedComponent } from './admin-banned/admin-banned.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { AdminComponent } from './admin.component';
import { AdminEmployeeComponent } from './admin-employee/admin-employee.component';
import { AdminAddRecepcionistComponent } from './admin-add/admin-add-recepcionist/admin-add-recepcionist.component';
import { AdminAddDoctorComponent } from './admin-add/admin-add-doctor/admin-add-doctor.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared-module/shared.module';
import { AdminEmployeeDoctorsComponent } from './admin-employee/admin-employee-doctors/admin-employee-doctors.component';
import { AdminEmployeeRecepcionistsComponent } from './admin-employee/admin-employee-recepcionists/admin-employee-recepcionists.component';
import { AdminBannedDoctorComponent } from './admin-banned/admin-banned-doctor/admin-banned-doctor.component';
import { AdminBannedRecepcionistComponent } from './admin-banned/admin-banned-recepcionist/admin-banned-recepcionist.component';


@NgModule({
  declarations: [
    AdminSidenavComponent,
    AdminAddComponent,
    AdminBannedComponent,
    AdminSettingsComponent,
    AdminComponent,
    AdminEmployeeComponent,
    AdminAddRecepcionistComponent,
    AdminAddDoctorComponent,
    AdminEmployeeDoctorsComponent,
    AdminEmployeeRecepcionistsComponent,
    AdminBannedDoctorComponent,
    AdminBannedRecepcionistComponent
  ],
  exports: [
    AdminSidenavComponent,
    AdminAddComponent,
    AdminBannedComponent,
    AdminSettingsComponent,
    AdminComponent,
    AdminEmployeeComponent,
    AdminAddRecepcionistComponent,
    AdminAddDoctorComponent,
    AdminEmployeeDoctorsComponent,
    AdminEmployeeRecepcionistsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule

  ]
})
export class AdminModule { }
