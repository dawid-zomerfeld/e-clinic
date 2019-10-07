import { NgModule } from '@angular/core';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {RouterModule} from '@angular/router';
import {LogoutGuardService} from '../shared-module/guards/logout-guard.service';

const routes = [
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [LogoutGuardService]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LogoutGuardService]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AuthRoutingModule { }
