import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkmorePage } from './parkmore.page';

describe('ParkmorePage', () => {
  let component: ParkmorePage;
  let fixture: ComponentFixture<ParkmorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkmorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkmorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
