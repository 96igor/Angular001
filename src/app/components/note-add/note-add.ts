import { Component, signal } from '@angular/core';
import { NoteService } from '../../services/note';
import { FormsModule } from '@angular/forms';
import { Note } from '../../models/note.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-add',
  imports: [FormsModule, CommonModule],
  templateUrl: './note-add.html',
  styleUrl: './note-add.css',
})
export class NoteAdd {
  constructor(private NoteService: NoteService) {

  }

  protected newNote = signal<Partial<Note>>({
    title: '',
    content: ''
  })

  protected submitted = false;

  protected addNote(form: any) {
    this.submitted = true;

    if(form.invalid) return;

    const noteData = this.newNote();
    if(!noteData.title || !noteData.content) return;

    this.NoteService.addNote(noteData.title, noteData.content);

    this.newNote.set({
      title: '',
      content: ''
    });
    form.resetForm();
    this.submitted = false;
  }
}
