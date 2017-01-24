import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuardService }            from './auth/auth-guard.service';
import { AuthService }          from './auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ ],
  providers: [
    AuthGuardService,
    AuthService
  ]
})

export class CoreModule { }
