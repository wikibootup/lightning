import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const usersRoutes: Routes = [ ];

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class UsersRouter { }
