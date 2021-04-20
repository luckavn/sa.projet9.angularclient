import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteModifyFormComponent } from './note-modify-form.component';

describe('NoteModifyFormComponent', () => {
  let component: NoteModifyFormComponent;
  let fixture: ComponentFixture<NoteModifyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteModifyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteModifyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
