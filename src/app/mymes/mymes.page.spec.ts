import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymesPage } from './mymes.page';

describe('MymesPage', () => {
  let component: MymesPage;
  let fixture: ComponentFixture<MymesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
