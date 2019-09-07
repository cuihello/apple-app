import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysmesPage } from './sysmes.page';

describe('SysmesPage', () => {
  let component: SysmesPage;
  let fixture: ComponentFixture<SysmesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysmesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysmesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
