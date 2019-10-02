import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {AdminAddComponent} from './admin-add/admin-add.component';
import {AdminDeleteComponent} from './admin-delete/admin-delete.component';
import {AdminSettingsComponent} from './admin-settings/admin-settings.component';

const routes = [
  {path: 'admin', redirectTo: 'admin/dashboard', pathMatch: 'full'},
  {
    path: 'admin/dashboard',
    component: AdminDashboardComponent
  },
  {
    path: 'admin/add',
    component: AdminAddComponent
  },
  {
    path: 'admin/delete',
    component: AdminDeleteComponent
  },
  {
    path: 'admin/settings',
    component: AdminSettingsComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AdminRoutingModule { }
