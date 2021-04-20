import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { PatientService } from './service/patient-service.service';
import { NoteService } from './service/notes-service.service';
import { RiskService } from './service/risk-service.service';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientModifyFormComponent } from './patient-modify-form/patient-modify-form.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { NoteDeleteComponent } from './note-delete/note-delete.component';
import { PatientDeleteComponent } from './patient-delete/patient-delete.component';
import { NoteModifyFormComponent } from './note-modify-form/note-modify-form.component';
import { CalculateRiskComponent } from './calculate-risk/calculate-risk.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    PatientFormComponent,
    PatientDetailsComponent,
    PatientModifyFormComponent,
    NoteFormComponent,
    NoteDeleteComponent,
    PatientDeleteComponent,
    NoteModifyFormComponent,
    CalculateRiskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PatientService, NoteService, RiskService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
