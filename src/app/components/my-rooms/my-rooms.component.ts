import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService, GameSession } from '../../services/game.service';

@Component({
  selector: 'app-my-rooms',
  templateUrl: './my-rooms.component.html',
  styleUrl: './my-rooms.component.css'
})
export class MyRoomsComponent implements OnInit {
  activeRooms: GameSession[] = [];

  constructor(
    private gameService: GameService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // TODO: Carregar salas do usuário
    this.loadMockRooms();
  }

  private loadMockRooms(): void {
    this.activeRooms = [
      {
        sessionId: 'abc123def456',
        users: ['user1', 'user2'],
        isActive: true,
        points: { 'user1': 100, 'user2': 80 }
      }
    ];
  }

  createRoom(): void {
    this.gameService.startSession().subscribe(
      response => {
        console.log('Sala criada:', response.sessionId);
        this.joinRoom(response.sessionId);
      },
      error => {
        console.error('Erro ao criar sala:', error);
        // Mock: criar sala localmente
        const mockSessionId = 'mock-' + Date.now();
        this.activeRooms.push({
          sessionId: mockSessionId,
          users: ['current-user'],
          isActive: true,
          points: {}
        });
      }
    );
  }

  joinRoom(sessionId: string): void {
    console.log('Entrando na sala:', sessionId);
    // TODO: Navegar para tela de jogo
    // this.router.navigate(['/game', sessionId]);
  }

  shareRoom(sessionId: string): void {
    const shareUrl = `${window.location.origin}/join/${sessionId}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert('Link copiado para área de transferência!');
    });
  }
}
