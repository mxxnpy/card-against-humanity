import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

declare const google: any;

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<UserProfile | null>(null);
  public user$: Observable<UserProfile | null> = this.userSubject.asObservable();
  private client: any;

  constructor() {
    this.initializeGoogleAuth();
  }

  private initializeGoogleAuth(): void {
    const checkGoogleLoaded = setInterval(() => {
      if (typeof google !== 'undefined') {
        clearInterval(checkGoogleLoaded);
        this.client = google.accounts.oauth2.initTokenClient({
          client_id: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com',
          scope: 'email profile openid',
          callback: (response: any) => {
            this.handleAuthResponse(response);
          }
        });
      }
    }, 100);
  }

  private async handleAuthResponse(response: any): Promise<void> {
    if (response.access_token) {
      try {
        const userInfo = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${response.access_token}`
          }
        });

        const userData = await userInfo.json();
        
        const user: UserProfile = {
          id: userData.sub,
          name: userData.name,
          email: userData.email,
          imageUrl: userData.picture
        };

        this.userSubject.next(user);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('access_token', response.access_token);
      } catch (error) {
        console.error('Erro ao obter informações do usuário:', error);
      }
    }
  }

  loginWithGoogle(): void {
    if (this.client) {
      this.client.requestAccessToken();
    } else {
      console.error('Google OAuth client não inicializado');
    }
  }

  logout(): void {
    const token = localStorage.getItem('access_token');
    if (token) {
      google.accounts.oauth2.revoke(token);
    }
    this.userSubject.next(null);
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
  }

  getCurrentUser(): UserProfile | null {
    return this.userSubject.value;
  }

  isLoggedIn(): boolean {
    return !!this.userSubject.value;
  }
}
