import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateRiskComponent } from './calculate-risk.component';

describe('CalculateRiskComponent', () => {
  let component: CalculateRiskComponent;
  let fixture: ComponentFixture<CalculateRiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateRiskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
