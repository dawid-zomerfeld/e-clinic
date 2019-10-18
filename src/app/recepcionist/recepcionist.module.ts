import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecepcionistComponent} from './recepcionist.component';
import {RecepcionistRoutingModule} from './recepcionist-routing.module';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../shared-module/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared-module/shared.module';
import { RecepcionistSidenavComponent } from './recepcionist-sidenav/recepcionist-sidenav.component';
import { RecepcionistAddVisitComponent } from './recepcionist-add-visit/recepcionist-add-visit.component';

@NgModule({
  declarations: [RecepcionistComponent, RecepcionistSidenavComponent, RecepcionistAddVisitComponent],
  exports: [RecepcionistComponent, RecepcionistSidenavComponent],
  imports: [
    CommonModule,
    RecepcionistRoutingModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule
  ]
})
export class RecepcionistModule { }
