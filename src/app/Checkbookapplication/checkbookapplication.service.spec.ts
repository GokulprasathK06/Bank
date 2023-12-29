/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CheckbookapplicationService } from './checkbookapplication.service';

describe('Service: Checkbookapplication', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckbookapplicationService]
    });
  });

  it('should ...', inject([CheckbookapplicationService], (service: CheckbookapplicationService) => {
    expect(service).toBeTruthy();
  }));
});
