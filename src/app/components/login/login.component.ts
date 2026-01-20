import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = null;
  username: string = '';
  isMenuOpen: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      this.user = user;
    });
  }

  async loginWithGoogle() {
    this.authService.loginWithGoogle();
  }

  simulateLogin() {
    if (this.username.trim()) {
      this.user = {
        name: this.username,
        email: `${this.username.toLowerCase().replace(/\s+/g, '')}@example.com`,
        imageUrl: 'https://via.placeholder.com/40'
      };
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  async logout() {
    this.user = null;
    this.username = '';
    this.authService.logout();
  }

  get isLoggedIn(): boolean {
    return !!this.user;
  }

  get userName(): string {
    return this.user?.name || 'Guest';
  }
}
