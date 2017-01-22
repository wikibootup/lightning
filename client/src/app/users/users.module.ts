import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersRouter } from './users.router';

@NgModule({
  imports: [
    CommonModule,
    UsersRouter
  ],
  declarations: [
    DashboardComponent
  ]
})

export class UsersModule { }
