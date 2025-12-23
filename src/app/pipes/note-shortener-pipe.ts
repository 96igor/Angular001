import { Pipe, PipeTransform } from '@angular/core';
import { maxLength } from '@angular/forms/signals';

@Pipe({
  name: 'noteShortener',
})
export class NoteShortenerPipe implements PipeTransform {

  transform(value: string, maxlength: number = 50): string {
    if(!value) return '';
    return value.length > maxlength ? value.slice(0, maxlength) + '...' : value;
  }

}
