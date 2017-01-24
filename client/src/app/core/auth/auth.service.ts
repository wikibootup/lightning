import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IUser } from '../../objects/shared/user.model'; 

@Injectable()
export class AuthService {

  isLoggedIn: boolean = false;
  private auth_Url: string = '/api/auth';

  constructor(private _http: Http) { }
  
  getAuth(): Observable<IUser> {
    return this._http.get(this.auth_Url)
      .map(this.extractData);
  }

  private extractData(res: Response): IUser {
    let data = (res.text().replace(' ', '') !== '')? res.json() : {};
    return data;
  }

}
