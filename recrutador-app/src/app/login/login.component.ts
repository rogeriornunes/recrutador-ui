import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/dashboard']); // Redireciona para o dashboard após login bem-sucedido
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
