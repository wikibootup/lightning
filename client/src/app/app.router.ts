import { Routes, RouterModule } from '@angular/router';

import { usersRoutes } from './users/users.router';
import { HomeComponent } from './pages/home/index';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
];

export const AppRouter = RouterModule.forRoot(appRoutes);
