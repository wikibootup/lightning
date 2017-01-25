import { Component, OnInit } from '@angular/core';
import { HttpGatewaysService } from '../../core/http/http-gateways.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private gateways: string;

  constructor(private _httpGatewaysService: HttpGatewaysService) { }

  ngOnInit() {
    this._httpGatewaysService.getGateways()
      .subscribe(
        data => { this.gateways = data; }
      )
  }

}
