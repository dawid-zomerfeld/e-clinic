import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthModule} from './auth/auth.module';
import {WelcomeComponent} from './welcome/welcome.component';

@NgModule({
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
  imports: [
    CommonModule,
    AuthModule
  ]
})
export class HomeModule { }
