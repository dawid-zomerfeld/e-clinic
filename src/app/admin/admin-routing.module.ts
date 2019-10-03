import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {AdminAddComponent} from './admin-add/admin-add.component';
import {AdminDeleteComponent} from './admin-delete/admin-delete.component';
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
    path: 'delete',
    component: AdminDeleteComponent
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
