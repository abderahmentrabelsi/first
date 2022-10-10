import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atelier3Component } from './atelier3.component';

describe('Atelier3Component', () => {
  let component: Atelier3Component;
  let fixture: ComponentFixture<Atelier3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atelier3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Atelier3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
