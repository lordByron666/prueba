import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/auth';
  }

  login(user: object) {
    return this.http.post(`${this.url}/login`, user);
  }
}
