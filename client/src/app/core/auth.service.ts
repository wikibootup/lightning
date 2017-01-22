import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private _http: Http) { }

  getAuth() {
    return this._http.get('/api/auth')
      .map((response: Response) => {
        response.json();
      });
  }
}
