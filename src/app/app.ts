import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Note } from './models/note.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
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
}
