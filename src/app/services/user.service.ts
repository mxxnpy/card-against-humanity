import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface UserProfile {
  userId: string;
  name: string;
  email: string;
  imageUrl?: string;
  createdAt?: Date;
}

export interface UserPoints {
  userId: string;
  totalPoints: number;
  ranking?: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl || 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  // GET /userProfile/:userId - Retorna informações do usuário
  getUserProfile(userId: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.apiUrl}/userProfile/${userId}`);
  }

  // GET /userPoints/:userId - Retorna total de pontos do usuário
  getUserPoints(userId: string): Observable<UserPoints> {
    return this.http.get<UserPoints>(`${this.apiUrl}/userPoints/${userId}`);
  }
}
