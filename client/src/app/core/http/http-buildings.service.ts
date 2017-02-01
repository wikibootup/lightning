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

  getBuilding(id) {
    return this._httpService.getHttp(this.buildingsUrl + '/' + id);
  } 

  newBuilding() {
    return this._httpService.postHttp(
      this.buildingsUrl + '/new', 
      {
        id: '123456',
        name: 'smart building1',
        gateways: [
          {
            id: '1234567',
            name: 'gw1'
          },
          {
            id: '1234568',
            name: 'gw2'
          }
        ]
      }, 
      {
        headers: new Headers()
      }
    );
  }

  getGatewaysOfBuilding(id) {
    return this._httpService.getHttp(this.buildingsUrl + '/' + id  + '/gateways');
  }

  newGatewayOfBuilding() {
    return this._httpService.postHttp(
      this.buildingsUrl + '/gateways/new',
      {id: '1234567890'},
      {
        headers: new Headers()
      }
    );
  }

}
