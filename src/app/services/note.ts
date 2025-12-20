import { Injectable, signal } from '@angular/core';
import { Note } from '../models/note.model';
import { ServerTestingModule } from '@angular/platform-server/testing';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
    private notes = signal<Note[]>([
    {
    id: 1,
    title: 'Первая заметка',
    content: 'Привет, это наша первая заметка',
    createdAt: new Date()
    },
    {
    id: 2,
    title: 'Вторая заметка',
    content: 'Angular - это удобно!',
    createdAt: new Date()
    }
  ])

  getNotes() {
    return this.notes;
  }

  addNote(title: string, content: string) {
    const newNote: Note = {
      id: Date.now(),
      title: title,
      content: content,
      createdAt: new Date()
    };

    this.notes.update(notes => [...notes, newNote]);
  }
}
