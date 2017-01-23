import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRouter } from './auth.router';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRouter
  ],
  declarations: [
    LoginComponent,
    LogoutComponent
  ]
})

export class AuthModule { }
