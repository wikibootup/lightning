import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

export const usersRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class UsersRouter { }
