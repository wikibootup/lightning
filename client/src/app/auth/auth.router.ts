import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

export const authRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AuthRouter { }
