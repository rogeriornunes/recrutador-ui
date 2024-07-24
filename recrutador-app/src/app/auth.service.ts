import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

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
  private apiUrl = 'http://localhost:8080/api/auth';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<AuthenticationResponseDTO> {
    return this.http.post<AuthenticationResponseDTO>(`${this.apiUrl}/authenticate`, { username, password }, { headers: this.headers }) .pipe(
      catchError(this.handleError)
    );
  }

  register(username: string, email: string, password: string, role: string): Observable<RegistrationResponseDTO> {
    return this.http.post<RegistrationResponseDTO>(`${this.apiUrl}/register`, { username, email, password, role }, { headers: this.headers });
  }

  private handleError(error: any): Observable<never> {
    return throwError(error);
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
