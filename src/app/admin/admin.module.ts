import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {AdminRoutingModule} from './admin-routing.module';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../shared-module/material/material.module';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { AdminDashboardPanelComponent } from './admin-dashboard/admin-dashboard-panel/admin-dashboard-panel.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminAddPanelComponent } from './admin-add/admin-add-panel/admin-add-panel.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminDeletePanelComponent } from './admin-delete/admin-delete-panel/admin-delete-panel.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';

@NgModule({
  declarations: [AdminDashboardComponent, AdminSidenavComponent, AdminDashboardPanelComponent, AdminAddComponent, AdminAddPanelComponent, AdminDeleteComponent, AdminDeletePanelComponent, AdminSettingsComponent],
  exports: [AdminDashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    MaterialModule
  ]
})
export class AdminModule { }
