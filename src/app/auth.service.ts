
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/'; 

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post(`${this.apiUrl}/login`, body);
  }

  signup(username: string, password: string, password2: string): Observable<any> {
    const body = { username, password, password2 };
    return this.http.post(`${this.apiUrl}/signup`, body);
  }
}
