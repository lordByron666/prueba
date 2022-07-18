import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/event';
  }

  createEvent(event: object) {
    return this.http.post(`${this.url}`, event);
  }
}
