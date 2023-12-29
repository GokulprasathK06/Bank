/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Accountinfo1Component } from './accountinfo1.component';

describe('Accountinfo1Component', () => {
  let component: Accountinfo1Component;
  let fixture: ComponentFixture<Accountinfo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Accountinfo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Accountinfo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
