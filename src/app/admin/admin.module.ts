import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../shared-module/material/material.module';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { AdminComponent } from './admin.component';
import { AdminEmployeeComponent } from './admin-employee/admin-employee.component';

@NgModule({
  declarations: [
    AdminSidenavComponent,
    AdminAddComponent,
    AdminDeleteComponent,
    AdminSettingsComponent,
    AdminComponent,
    AdminEmployeeComponent
  ],
  exports: [
    AdminSidenavComponent,
    AdminAddComponent,
    AdminDeleteComponent,
    AdminSettingsComponent,
    AdminComponent,
    AdminEmployeeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    MaterialModule
  ]
})
export class AdminModule { }
