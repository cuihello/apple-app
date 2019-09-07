import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoremesPage } from './moremes.page';

describe('MoremesPage', () => {
  let component: MoremesPage;
  let fixture: ComponentFixture<MoremesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoremesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoremesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
