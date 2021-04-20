import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../service/notes-service.service';
import { Note } from '../model/note';
import { Patient } from '../model/patient';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent {
  note: Note;
  patientId: string;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private notesService: NoteService) {
    this.note = new Note();
  }

  ngOnInit(): void {
    console.log(this.patientId)
  }

  addNote() {
    this.patientId = this.route.snapshot.paramMap.get("id")
    this.note.patientId = this.patientId;
    console.log(this.patientId)
    this.notesService.add(this.note)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/patients']);
      },
      error => {
        console.log(error);
      });
  }
}
