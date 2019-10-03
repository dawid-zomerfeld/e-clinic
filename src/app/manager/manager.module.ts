import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ManagerComponent} from './manager.component';
import {ManagerRoutingModule} from './manager-routing.module';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../shared-module/material/material.module';

@NgModule({
  declarations: [ManagerComponent],
  exports: [ManagerComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    RouterModule,
    MaterialModule
  ]
})
export class ManagerModule { }
