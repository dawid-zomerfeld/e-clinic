import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../shared-module/material/material.module';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminBannedComponent } from './admin-banned/admin-banned.component';
import { AdminComponent } from './admin.component';
import { AdminEmployeeComponent } from './admin-employee/admin-employee.component';
import { AdminAddRecepcionistComponent } from './admin-add/admin-add-recepcionist/admin-add-recepcionist.component';
import { AdminAddDoctorComponent } from './admin-add/admin-add-doctor/admin-add-doctor.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared-module/shared.module';
import { AdminEmployeeDoctorsComponent } from './admin-employee/admin-employee-doctors/admin-employee-doctors.component';
import { AdminEmployeeRecepcionistsComponent } from './admin-employee/admin-employee-recepcionists/admin-employee-recepcionists.component';
import { AdminBannedDoctorComponent } from './admin-banned/admin-banned-doctor/admin-banned-doctor.component';
import { AdminBannedRecepcionistComponent } from './admin-banned/admin-banned-recepcionist/admin-banned-recepcionist.component';
// tslint:disable-next-line:max-line-length
import { AdminEmployeeDoctorsDetailsComponent } from './admin-employee/admin-employee-doctors/admin-employee-doctors-details/admin-employee-doctors-details.component';
// tslint:disable-next-line:max-line-length
import { AdminEmployeeRecepcionistsDetailsComponent } from './admin-employee/admin-employee-recepcionists/admin-employee-recepcionists-details/admin-employee-recepcionists-details.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef, MatPaginatorModule} from '@angular/material';


@NgModule({
  declarations: [
    AdminSidenavComponent,
    AdminAddComponent,
    AdminBannedComponent,
    AdminComponent,
    AdminEmployeeComponent,
    AdminAddRecepcionistComponent,
    AdminAddDoctorComponent,
    AdminEmployeeDoctorsComponent,
    AdminEmployeeRecepcionistsComponent,
    AdminBannedDoctorComponent,
    AdminBannedRecepcionistComponent,
    AdminEmployeeDoctorsDetailsComponent,
    AdminEmployeeRecepcionistsDetailsComponent
  ],
  entryComponents: [
    AdminEmployeeDoctorsDetailsComponent,
    AdminEmployeeRecepcionistsDetailsComponent
  ],
  exports: [
    AdminSidenavComponent,
    AdminAddComponent,
    AdminBannedComponent,
    AdminComponent,
    AdminEmployeeComponent,
    AdminAddRecepcionistComponent,
    AdminAddDoctorComponent,
    AdminEmployeeDoctorsComponent,
    AdminEmployeeRecepcionistsComponent,
    AdminBannedDoctorComponent,
    AdminBannedRecepcionistComponent,
  ],
  providers: [
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    MatPaginatorModule,
  ]
})
export class AdminModule { }
