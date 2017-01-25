/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpGatewaysService } from './http-gateways.service';

describe('HttpGatewaysService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpGatewaysService]
    });
  });

  it('should ...', inject([HttpGatewaysService], (service: HttpGatewaysService) => {
    expect(service).toBeTruthy();
  }));
});
