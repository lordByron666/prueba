import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/person';
  }

  createPerson(person: object) {
    return this.http.post(`${this.url}/v1/createdPerson`, person);
  }
}
