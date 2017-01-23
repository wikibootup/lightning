import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRouter } from './users.router';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRouter
  ],
  declarations: [
    DashboardComponent,
  ],
})

export class UsersModule { }
