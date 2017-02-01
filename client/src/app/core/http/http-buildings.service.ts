import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Headers } from '@angular/http';

@Injectable()
export class HttpBuildingsService {
  
  private buildingsUrl: string = '/api/buildings';

  constructor(private _httpService: HttpService) { }
  
  getBuildings() {
    return this._httpService.getHttp(this.buildingsUrl);
  }
  
  newBuilding() {
    return this._httpService.postHttp(
      this.buildingsUrl + '/new', 
      {name: 'smart building1'}, 
      {
        headers: new Headers()
      }
    );
  }
}
