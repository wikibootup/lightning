/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpBuildingsService } from './http-buildings.service';

describe('HttpBuildingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpBuildingsService]
    });
  });

  it('should ...', inject([HttpBuildingsService], (service: HttpBuildingsService) => {
    expect(service).toBeTruthy();
  }));
});
