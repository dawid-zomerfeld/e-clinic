import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HomeModule} from './home/home.module';
import {MaterialModule} from './shared-module/material/material.module';
import {AuthModule} from './auth/auth.module';
import {SharedModule} from './shared-module/shared.module';
import { LayoutComponent } from './layout/layout.component';
import {LayoutModule} from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    MaterialModule,
    AuthModule,
    SharedModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
