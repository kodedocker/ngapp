import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ajaxpage1Component } from './ajaxpage1.component';

describe('Ajaxpage1Component', () => {
  let component: Ajaxpage1Component;
  let fixture: ComponentFixture<Ajaxpage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ajaxpage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ajaxpage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
