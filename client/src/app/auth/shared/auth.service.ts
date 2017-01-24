import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IUser } from '../../users/shared/user'; 

@Injectable()
export class AuthService {

  isLoggedIn: boolean = false;

  constructor(private _http: Http) { }
  
  getAuth(): Observable<IUser> {
    return this._http.get('/api/auth')
      .map(this.extractData);
  }

  private extractData(res: Response): IUser {
    let data = (res.text().replace(' ', '') !== '')? res.json() : {};
    return data;
  }

}
