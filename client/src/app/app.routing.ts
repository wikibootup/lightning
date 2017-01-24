import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/index';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes);
