import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MaterialModule} from './shared-module/material/material.module';
import {AuthModule} from './auth/auth.module';
import {SharedModule} from './shared-module/shared.module';
import {LayoutModule} from './layout/layout.module';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AuthModule,
    SharedModule,
    LayoutModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
