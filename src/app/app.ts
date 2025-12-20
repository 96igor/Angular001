import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Note } from './models/note.model';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { FormsModule } from '@angular/forms';
import { NoteService } from './services/note';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Header, Footer, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private NoteService: NoteService) {

  }

  handleSubscribe() {
    console.log("all is working");
    alert("all is working");
  }

  showAlert() {
    alert("You clicked");
  }

  title = "Hello World on my website"

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
