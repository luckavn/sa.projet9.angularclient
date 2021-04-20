import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientModifyFormComponent } from './patient-modify-form.component';

describe('PatientModifyFormComponent', () => {
  let component: PatientModifyFormComponent;
  let fixture: ComponentFixture<PatientModifyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientModifyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientModifyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
