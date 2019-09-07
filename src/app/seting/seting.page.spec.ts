import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetingPage } from './seting.page';

describe('SetingPage', () => {
  let component: SetingPage;
  let fixture: ComponentFixture<SetingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
