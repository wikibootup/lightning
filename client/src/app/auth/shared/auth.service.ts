import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl: string;

  constructor(private _http: Http) {
    if(this.getAuth()) {
      this.isLoggedIn = true;
    }
  }

  getAuth() {
    return this._http.get('/api/auth')
      .map((res: Response) => res.json());
  }
}
