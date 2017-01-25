import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class HttpGatewaysService {

  private gatewaysUrl: string = '/api/gateways';

  constructor(private _httpService: HttpService) { }
  
  getGateways() {
    return this._httpService.getHttp(this.gatewaysUrl);
  }

}
