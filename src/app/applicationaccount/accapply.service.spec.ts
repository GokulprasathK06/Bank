/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccapplyService } from './accapply.service';

describe('Service: Accapply', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccapplyService]
    });
  });

  it('should ...', inject([AccapplyService], (service: AccapplyService) => {
    expect(service).toBeTruthy();
  }));
});
