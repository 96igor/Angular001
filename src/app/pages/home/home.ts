import { Component, signal } from '@angular/core';
import { Note } from '../../models/note.model';
import { NoteService } from '../../services/note';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private NoteService: NoteService) {

  }

  showAlert() {
    alert("You clicked");
  }  

  protected get notes() {
    return this.NoteService.getNotes();
  }

  protected newNote = signal<Partial<Note>>({
    title: '',
    content: ''
  })

  protected addNote() {
    const noteData = this.newNote();
    if(!noteData.title || !noteData.content) return;

    this.NoteService.addNote(noteData.title, noteData.content);

    this.newNote.set({
      title: '',
      content: ''
    });
  }
}
