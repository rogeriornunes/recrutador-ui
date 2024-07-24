import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.css']
})
export class ApplyJobComponent implements OnInit {
  jobs: any[] = [];
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private jobService: JobService, private router: Router) {}

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(
      data => {
        this.jobs = data;
      },
      error => {
        this.errorMessage = 'Erro ao buscar vagas.';
      }
    );
  }

  apply(jobId: number): void {
    this.jobService.applyJob(jobId).subscribe(
      response => {
        this.successMessage = 'Candidatura realizada com sucesso!';
      },
      error => {
        this.errorMessage = 'Erro ao realizar candidatura.';
      }
    );
  }

  goBack(): void {
    const role = localStorage.getItem('role');
    if (role === 'ROLE_ADMIN') {
      this.router.navigate(['/admin-home']);
    } else if (role === 'ROLE_USER') {
      this.router.navigate(['/user-home']);
    }
  }
}
