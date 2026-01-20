import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface GameSession {
  sessionId: string;
  users: string[];
  isActive: boolean;
  points: { [userId: string]: number };
}

export interface RoundCards {
  blackCard: Card;
  whiteCards: Card[];
}

export interface Card {
  cardId: string;
  cardType: number; // 1 = pergunta (preta), 2 = resposta (branca)
  text: string;
  userId?: string;
  createdAt?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = environment.apiUrl || 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  // POST /startSession - Gera um GUID para uma sessão
  startSession(): Observable<{ sessionId: string }> {
    return this.http.post<{ sessionId: string }>(`${this.apiUrl}/startSession`, {});
  }

  // GET /getSession/:sessionId - Informação da sessão
  getSession(sessionId: string): Observable<GameSession> {
    return this.http.get<GameSession>(`${this.apiUrl}/getSession/${sessionId}`);
  }

  // GET /getCardsPerRound/:sessionId - Retorna uma carta preta e x cartas brancas por usuário
  getCardsPerRound(sessionId: string): Observable<RoundCards> {
    return this.http.get<RoundCards>(`${this.apiUrl}/getCardsPerRound/${sessionId}`);
  }
}
