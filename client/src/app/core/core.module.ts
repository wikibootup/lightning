import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuardService } from './auth/auth-guard.service';
import { HttpAuthService } from './http/http-auth.service';
import { HttpService } from './http/http.service';
import { HttpGatewaysService } from './http/http-gateways.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ ],
  providers: [
    AuthGuardService,
    HttpService,
    HttpAuthService,
    HttpGatewaysService
  ]
})

export class CoreModule { }
