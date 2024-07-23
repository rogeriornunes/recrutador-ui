import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  role: string = 'USER';  // Valor padrão para o campo de seleção
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(): void {
    this.authService.register(this.username, this.email, this.password, this.role).subscribe(
      (response) => {
        if (response.success) {
          this.successMessage = 'Registration successful!';
          this.errorMessage = '';
          // Redirecionar para a tela de login após um breve atraso
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000);
        } else {
          this.errorMessage = response.message || 'Registration failed';
          this.successMessage = '';
        }
      },
      (error) => {
        this.errorMessage = 'An error occurred during registration';
        this.successMessage = '';
      }
    );
  }
}
