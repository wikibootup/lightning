import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { HttpAuthService }      from '../http/http-auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  redirect_url: string = '/api/auth/thingplus';

  constructor(private _httpAuthService: HttpAuthService, 
              private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, 
                  state: RouterStateSnapshot): boolean {

    return this.checkAuth();
  }

  checkAuth(): boolean {
    if (JSON.parse(localStorage.getItem('isLoggedIn'))) { return true; }

    this._router.navigate(['login']);
    return false;
  }

  canActivateChild(route: ActivatedRouteSnapshot, 
                   state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

}
