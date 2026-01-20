import { Component, OnInit } from '@angular/core';

interface Player {
  userId: string;
  name: string;
  email: string;
  imageUrl: string;
  totalPoints: number;
}

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.css'
})
export class RankingComponent implements OnInit {
  topPlayers: Player[] = [
    {
      userId: '1',
      name: 'Jogador 1',
      email: 'jogador1@example.com',
      imageUrl: 'https://via.placeholder.com/100',
      totalPoints: 1500
    },
    {
      userId: '2',
      name: 'Jogador 2',
      email: 'jogador2@example.com',
      imageUrl: 'https://via.placeholder.com/100',
      totalPoints: 1200
    },
    {
      userId: '3',
      name: 'Jogador 3',
      email: 'jogador3@example.com',
      imageUrl: 'https://via.placeholder.com/100',
      totalPoints: 1000
    }
  ];

  otherPlayers: Player[] = [
    {
      userId: '4',
      name: 'Jogador 4',
      email: 'jogador4@example.com',
      imageUrl: 'https://via.placeholder.com/50',
      totalPoints: 850
    },
    {
      userId: '5',
      name: 'Jogador 5',
      email: 'jogador5@example.com',
      imageUrl: 'https://via.placeholder.com/50',
      totalPoints: 700
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // TODO: Carregar ranking do backend
  }
}
