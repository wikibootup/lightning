import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRouter } from './pages.router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRouter
  ],
  declarations: [DashboardComponent, HomeComponent]
})
export class PagesModule { }
