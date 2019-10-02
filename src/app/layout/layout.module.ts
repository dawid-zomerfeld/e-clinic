import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from './layout.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MenuComponent } from './menu/menu.component';
import {MaterialModule} from '../shared-module/material/material.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [LayoutComponent, ToolbarComponent, MenuComponent],
  exports: [LayoutComponent, ToolbarComponent, MenuComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class LayoutModule { }
