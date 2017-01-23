import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { AuthService }      from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, 
                  state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkAuth(url);
  }

  checkAuth(url: string): boolean {
    if (this._authService.isLoggedIn) { return true; }

    this._router.navigate(['/login']);
    return false;
  }

  canActivateChild(route: ActivatedRouteSnapshot, 
                   state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

}
