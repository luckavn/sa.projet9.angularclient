import { Component, OnInit } from '@angular/core';
import { Note } from '../model/note';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../service/notes-service.service';

@Component({
  selector: 'app-note-delete',
  templateUrl: './note-delete.component.html',
  styleUrls: ['./note-delete.component.css']
})
export class NoteDeleteComponent implements OnInit {
  note: Note;
  noteId: string;

  constructor(private repository: NoteService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.noteId)
  }

  deleteNote() {
    this.noteId = this.route.snapshot.paramMap.get("id")
    console.log(this.noteId)
    this.repository.delete(this.noteId)
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

