import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface AuthenticationResponseDTO {
  token: string;
  role: string;
  success: boolean;
  message: string;
  username: string;
}

interface RegistrationResponseDTO {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseApiUrl = 'http://localhost:8080/api/auth';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<AuthenticationResponseDTO> {
    return this.http.post<AuthenticationResponseDTO>(this.baseApiUrl + '/authenticate', { username, password }, { headers: this.headers });
  }

  register(username: string, email: string, password: string, role: string): Observable<RegistrationResponseDTO> {
    return this.http.post<RegistrationResponseDTO>(this.baseApiUrl + '/register', { username, email, password, role }, { headers: this.headers });
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('username');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
