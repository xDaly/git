import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstinterfaceComponent } from './firstinterface.component';

describe('FirstinterfaceComponent', () => {
  let component: FirstinterfaceComponent;
  let fixture: ComponentFixture<FirstinterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstinterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstinterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
