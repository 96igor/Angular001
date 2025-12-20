import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Note } from './models/note.model';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Header, Footer, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  handleSubscribe() {
    console.log("all is working");
    alert("all is working");
  }

  showAlert() {
    alert("You clicked");
  }

  title = "Hello World on my website"

  protected readonly notes = signal<Note[]>([
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

  protected newNote = signal<Partial<Note>>({
    title: '',
    content: ''
  })

  protected addNote() {
    const noteData = this.newNote();
    if(!noteData.title || !noteData.content) return;

    const newNote: Note = {
      id: Date.now(),
      title: noteData.title,
      content: noteData.content,
      createdAt: new Date()
    };

    this.notes.update(notes => [...notes, newNote]);

    this.newNote.set({
      title: '',
      content: ''
    });
  }
}
