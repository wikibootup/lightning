import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  getHttp(url) {
    return this._http.get(url)
      .map(this.extractData);
  }

  private extractData(res: Response) {
    let data = (res.text().replace(' ', '') !== '')? res.json() : {};
    return data;
  }
}
