import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRouter } from './auth.router';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthComponent } from './auth/auth.component';

import { AuthGuardService }            from './shared/auth-guard.service';
import { AuthService }          from './shared/auth.service';

@NgModule({
  imports: [
    CommonModule,
    AuthRouter
  ],
  declarations: [
    LoginComponent,
    LogoutComponent,
    AuthComponent
  ],
  providers: [
    AuthGuardService,
    AuthService
  ]
})

export class AuthModule { }
