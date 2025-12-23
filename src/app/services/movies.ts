import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://www.omdbapi.com/';
  private apiKey = '79868bfe';

  constructor(private http: HttpClient) {}

  searchMovies(title: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?s=${title}&apiKey=${this.apiKey}`)
  }
}