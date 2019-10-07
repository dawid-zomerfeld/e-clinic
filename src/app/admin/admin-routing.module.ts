import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {AdminAddComponent} from './admin-add/admin-add.component';
import {AdminBannedComponent} from './admin-banned/admin-banned.component';
import {AdminSettingsComponent} from './admin-settings/admin-settings.component';
import {AdminEmployeeComponent} from './admin-employee/admin-employee.component';

const routes = [
  {path: '', redirectTo: 'employee', pathMatch: 'full'},
  {
    path: 'employee',
    component: AdminEmployeeComponent
  },
  {
    path: 'add',
    component: AdminAddComponent
  },
  {
    path: 'banned',
    component: AdminBannedComponent
  },
  {
    path: 'settings',
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
