import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css']
})
export class HamburgerMenuComponent implements OnInit {
  menuOpen = false;
  userRole: string | null = null;

  ngOnInit(): void {
    this.userRole = localStorage.getItem('role');
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
