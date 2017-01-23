import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRouter } from './pages.router';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRouter
  ],
  declarations: [DashboardComponent]
})
export class PagesModule { }
