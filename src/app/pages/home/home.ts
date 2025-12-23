import { Component, signal } from '@angular/core';
import { Note } from '../../models/note.model';
import { NoteService } from '../../services/note';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NoteAdd } from '../../components/note-add/note-add';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, RouterModule, NoteAdd],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private NoteService: NoteService) {

  }

  showAlert() {
    alert("You clicked");
  }

  ngOnInit() {
    this.NoteService.fetchNotes();
  }

  protected get notes() {
    return this.NoteService.getNotes();
  }
}
