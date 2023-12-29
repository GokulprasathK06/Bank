/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AccountopenComponent } from './Accountopen.component';

describe('AccountopenComponent', () => {
  let component: AccountopenComponent;
  let fixture: ComponentFixture<AccountopenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountopenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountopenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
