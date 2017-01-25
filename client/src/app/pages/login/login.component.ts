import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpAuthService } from '../../core/http/http-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private authUri: string = '/api/auth/thingplus';

  constructor(private _router: Router,
              private _httpAuthService: HttpAuthService) { }

  ngOnInit() {
    if(this._httpAuthService.isLoggedIn) {
      this._router.navigate(['/']);
    }
    else {
      window.location.href = this.authUri;
    }
  }

}
