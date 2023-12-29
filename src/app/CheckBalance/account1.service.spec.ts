/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Account1Service } from './account1.service';

describe('Service: Account1', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Account1Service]
    });
  });

  it('should ...', inject([Account1Service], (service: Account1Service) => {
    expect(service).toBeTruthy();
  }));
});
