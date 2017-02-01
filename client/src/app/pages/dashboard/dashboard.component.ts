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

  onGetBuildings(): void {
    this._httpBuildingsService.getBuildings()
      .subscribe(
        data => { console.log(data, 'clicked getBuildings'); }
      )
  }

  onGetBuilding(id): void {
    this._httpBuildingsService.getBuilding(id)
      .subscribe(
        data => { console.log(data, 'clicked getBuilding'); }
      )
  }

  onNewBuilding(): void {
    this._httpBuildingsService.newBuilding()
      .subscribe(
        data => { console.log(data, 'clicked new Building'); }
      )
  }

  onGetGatewaysOfBuilding(id): void {
    this._httpBuildingsService.getGatewaysOfBuilding(id)
      .subscribe(
        data => { console.log(data, 'clicked getGatewaysOfBuilding'); }
      )
  }

}
