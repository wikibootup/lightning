import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

export const appRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent}
]

export const AppRouter = RouterModule.forRoot(appRoutes);
