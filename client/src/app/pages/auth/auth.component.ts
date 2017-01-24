import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Router } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';
import { UserService } from '../../objects/shared/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private _authService: AuthService,
              private _userService: UserService,
              private _router: Router) { }

  ngOnInit() {
    this.updateAuth();
  }
  
  updateAuth() {
    this._authService.getAuth()
      .subscribe(data => {
        if(data !== {} && data.hasOwnProperty('id') && data.hasOwnProperty('name')) {
          this._userService.user = data;
          this._authService.isLoggedIn = true;
          this._router.navigate(['dashboard']);
        }
        else {
          this._router.navigate(['/']);
        }
      })
  }

}
