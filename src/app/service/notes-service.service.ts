import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note } from '../model/note';
import { Observable } from 'rxjs';

@Injectable()
export class NoteService {

  private notesUrl: string;
  noteId: string;
  currentNote: Note;

  constructor(private http: HttpClient) {
    this.notesUrl = 'http://localhost:8080/notes';
  }

  public findById(id:string): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.notesUrl}/patientId?id=${id}`);
  }

  public findNoteById(id:string): Observable<Note> {
    return this.http.get<Note>(`${this.notesUrl}/id?id=${id}`);
  }

  public add(note: Note) {
    console.log(note)
    return this.http.post<Note>(this.notesUrl, note);
  }

  public delete(id:string) {
    return this.http.delete(`${this.notesUrl}?id=${id}`);
  }

  public modify(note: Note, id:string) {
    return this.http.put<Note>(`${this.notesUrl}?id=${id}`, note);
  }
}