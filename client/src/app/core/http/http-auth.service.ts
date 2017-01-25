import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService } from './http.service';
import { IUser } from '../../objects/shared/user.model'; 

@Injectable()
export class HttpAuthService {

  isLoggedIn: boolean = false;
  private auth_Url: string = '/api/auth';

  constructor(private _httpService: HttpService) { }
  
  getAuth(): Observable<IUser> {
    return this._httpService.getHttp(this.auth_Url);
  }

}

