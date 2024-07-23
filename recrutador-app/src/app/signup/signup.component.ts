import { Component } from '@angular/core';
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
  errorMessage: string = '';

  constructor(private router: Router) { }

  onSubmit(): void {
    // Aqui você deve adicionar a lógica para registrar o usuário, possivelmente chamando um serviço
    if (this.username && this.email && this.password) {
      // Exemplo de redirecionamento após cadastro bem-sucedido
      this.router.navigate(['/login']);
    } else {
      this.errorMessage = 'All fields are required';
    }
  }
}
