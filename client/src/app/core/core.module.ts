import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuardService } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { HttpService } from './http/http.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ ],
  providers: [
    AuthGuardService,
    AuthService,
    HttpService
  ]
})

export class CoreModule { }
