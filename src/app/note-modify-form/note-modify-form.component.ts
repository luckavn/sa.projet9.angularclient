import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../service/notes-service.service';
import { Note } from '../model/note';

@Component({
  selector: 'app-note-modify-form',
  templateUrl: './note-modify-form.component.html',
  styleUrls: ['./note-modify-form.component.css']
})

export class NoteModifyFormComponent implements OnInit {
    note: Note;

  constructor(private route: ActivatedRoute, 
    private router: Router, 
      private notesService: NoteService) { }

  ngOnInit() {
    const idNote = this.route.snapshot.paramMap.get("id")
    console.log(idNote)
    this.notesService.findNoteById(idNote).subscribe(note => this.note = note)
    console.log(this.note)
  }

  onSubmit() {
    this.notesService.modify(this.note, this.note.noteId).subscribe(result => this.gotoPatientList());
  }

  gotoPatientList() {
    this.router.navigate(['/patients']);
  }

}