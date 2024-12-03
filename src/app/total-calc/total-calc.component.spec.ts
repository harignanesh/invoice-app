import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCalcComponent } from './total-calc.component';

describe('TotalCalcComponent', () => {
  let component: TotalCalcComponent;
  let fixture: ComponentFixture<TotalCalcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalCalcComponent]
    });
    fixture = TestBed.createComponent(TotalCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
