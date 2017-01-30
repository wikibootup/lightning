import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Router } from '@angular/router';

import { HttpAuthService } from '../../core/http/http-auth.service';
import { UserService } from '../../objects/shared/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private _httpAuthService: HttpAuthService,
              private _userService: UserService,
              private _router: Router) { }

  ngOnInit() {
    this.updateAuth();
  }
  
  updateAuth() {
    this._httpAuthService.getAuth()
      .subscribe(data => {
        if(data !== {} && data.hasOwnProperty('id') && data.hasOwnProperty('name')) {
          localStorage.setItem('user', JSON.stringify(data));
          localStorage.setItem('isLoggedIn', JSON.stringify('true'));

          this._router.navigate(['dashboard']);
        }
        else {
          localStorage.clear();
          this._router.navigate(['/']);
        }
      })
  }

}
