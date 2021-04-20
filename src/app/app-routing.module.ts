import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { PatientModifyFormComponent } from './patient-modify-form/patient-modify-form.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientDeleteComponent } from './patient-delete/patient-delete.component';
import { NoteDeleteComponent } from './note-delete/note-delete.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { NoteModifyFormComponent } from './note-modify-form/note-modify-form.component';
import { CalculateRiskComponent } from './calculate-risk/calculate-risk.component';

const routes: Routes = [
  { path: 'patients', component: PatientListComponent },
  { path: 'addpatient', component: PatientFormComponent },
  { path: 'modifypatient/:id', component: PatientModifyFormComponent },
  { path: 'patientdetails/:id', component: PatientDetailsComponent },
  { path: 'addnote/:id', component: NoteFormComponent },
  { path: 'deletepatient/:id', component: PatientDeleteComponent },
  { path: 'deletenote/:id', component: NoteDeleteComponent },
  { path: 'modifynote/:id', component: NoteModifyFormComponent },
  { path: 'calculaterisk/:id', component: CalculateRiskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }