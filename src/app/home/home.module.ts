import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthModule} from './auth/auth.module';
import {WelcomeComponent} from './welcome/welcome.component';
import {HomeComponent} from './home.component';

@NgModule({
  declarations: [WelcomeComponent, HomeComponent],
  exports: [WelcomeComponent, HomeComponent],
  imports: [
    CommonModule,
    AuthModule
  ]
})
export class HomeModule { }
