import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from './layout.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MenuComponent } from './menu/menu.component';
import {MaterialModule} from '../shared-module/material/material.module';

@NgModule({
  declarations: [LayoutComponent, SidenavComponent, ToolbarComponent, MenuComponent],
  exports: [LayoutComponent, SidenavComponent, ToolbarComponent, MenuComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class LayoutModule { }
