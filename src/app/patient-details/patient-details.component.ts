import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../model/note';
import { Patient } from '../model/patient';
import { NoteService } from '../service/notes-service.service';
import { PatientService } from '../service/patient-service.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

 notes: Note[];
 patient: Patient;
 patientId: string;
 patientName: string;
 patientFirstname: string;
 currentNote: Note;
 noteId: string;

  constructor(private notesService: NoteService, private patientService: PatientService, private route: ActivatedRoute,
    private router: Router) { 
  }
  
  ngOnInit() {
    this.patient = new Patient;
    this.patientId = this.route.snapshot.paramMap.get("id")
    this.patientService.find(this.patientId).subscribe(patient => this.patient = patient)
    this.notesService.findById(this.patientId).subscribe(data => {
      console.log(data);
      this.notes = data;
    });
    this.patientName = this.patient.familyName
    this.patientFirstname = this.patient.givenName
  }

  calculateRisk(): void {
    this.router.navigate(['TODO']);
  }

  deleteNote(): void {
    this.noteId = this.currentNote.noteId;
    this.notesService.delete(this.currentNote.noteId)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['patientdetails/:id']);
        },
        error => {
          console.log(error);
        });
  }


}
