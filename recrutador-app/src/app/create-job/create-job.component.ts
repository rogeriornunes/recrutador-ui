import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../job.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent {
  title: string = '';
  description: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private jobService: JobService, private router: Router) { }

  onSubmit(): void {
    this.jobService.createJob({ title: this.title, description: this.description }).subscribe(
      (response) => {
        this.successMessage = 'Vaga cadastrada com sucesso!';
        this.errorMessage = '';
        this.title = '';
        this.description = '';
      },
      (error) => {
        this.errorMessage = 'Ocorreu um erro ao cadastrar a vaga';
        this.successMessage = '';
      }
    );
  }
  goBack(): void {
    this.router.navigate(['/admin-home']); // Navegar de volta para a página admin-home
  }
}
