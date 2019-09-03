import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './material/material.module';



@NgModule({
  declarations: [],
  exports: [MaterialModule],
  providers: [],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
