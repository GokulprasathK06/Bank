/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoanapplyService } from './loanapply.service';

describe('Service: Loanapply', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoanapplyService]
    });
  });

  it('should ...', inject([LoanapplyService], (service: LoanapplyService) => {
    expect(service).toBeTruthy();
  }));
});
