import { Component, OnInit } from '@angular/core';
import { HttpGatewaysService } from '../../core/http/http-gateways.service';
import { HttpBuildingsService } from '../../core/http/http-buildings.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private gateways: string;

  constructor(private _httpGatewaysService: HttpGatewaysService,
              private _httpBuildingsService: HttpBuildingsService) { }

  ngOnInit() {
    this._httpGatewaysService.getGateways()
      .subscribe(
        data => { this.gateways = data; }
      )
  }

  getBuildings(): void {
    this._httpBuildingsService.getBuildings()
      .subscribe(
        data => { console.log(data, 'clicked getBuildings'); }
      )
  }
  
  newBuilding(): void {
    this._httpBuildingsService.newBuilding()
      .subscribe(
        data => { console.log(data, 'clicked new Building'); }
      )
  }

}
