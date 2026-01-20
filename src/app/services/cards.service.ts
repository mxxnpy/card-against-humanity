import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Card } from './game.service';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private apiUrl = environment.apiUrl || 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  // GET /getAllCards - Retorna todas as cartas
  getAllCards(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.apiUrl}/getAllCards`);
  }

  // POST /createCards - Criar nova carta
  createCard(card: { cardType: number, text: string }): Observable<Card> {
    return this.http.post<Card>(`${this.apiUrl}/createCards`, card);
  }

  // PUT /updateCards - Atualizar carta existente
  updateCard(cardId: string, updates: { cardType?: number, text?: string }): Observable<Card> {
    return this.http.put<Card>(`${this.apiUrl}/updateCards`, {
      cardId,
      ...updates
    });
  }

  // DELETE /deleteCards/:cardId - Deletar carta (somente criador)
  deleteCard(cardId: string, userId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteCards/${cardId}`, {
      body: { userId }
    });
  }
}
