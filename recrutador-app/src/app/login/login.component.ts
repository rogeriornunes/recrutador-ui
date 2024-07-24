import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        if (response.success) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('role', response.role);
          localStorage.setItem('username', response.username);
          if (response.role === 'ROLE_ADMIN') {
            this.router.navigate(['/admin-home']);
          } else if (response.role === 'ROLE_USER') {
            this.router.navigate(['/user-home']);
          }
        } else {
          this.errorMessage = response.message || 'Nome de usuário ou senha inválidos';
        }
      },
      (error) => {
        this.errorMessage = 'Ocorreu um erro durante o login';
      }
    );
  }
}
