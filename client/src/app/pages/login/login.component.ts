import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private authUri: string = '/api/auth/thingplus';

  constructor(private _router: Router,
              private _authService: AuthService) { }

  ngOnInit() {
    if(this._authService.isLoggedIn) {
      this._router.navigate(['/']);
    }
    else {
      window.location.href = this.authUri;
    }
  }

}
