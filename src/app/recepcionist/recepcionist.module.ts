import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecepcionistComponent} from './recepcionist.component';
import {RecepcionistRoutingModule} from './recepcionist-routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [RecepcionistComponent],
  exports: [RecepcionistComponent],
  imports: [
    CommonModule,
    RecepcionistRoutingModule,
    RouterModule
  ]
})
export class RecepcionistModule { }
