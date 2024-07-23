import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  username: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const storedUsername = localStorage.getItem('username');
    this.username = storedUsername ? storedUsername.toUpperCase() : 'USER';
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
