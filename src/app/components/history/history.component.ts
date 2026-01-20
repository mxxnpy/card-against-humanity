import { Component, OnInit } from '@angular/core';

interface Match {
  matchId: string;
  date: Date;
  isWinner: boolean;
  pointsEarned: number;
  playerCount: number;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit {
  matches: Match[] = [
    {
      matchId: '1',
      date: new Date('2026-01-03T20:30:00'),
      isWinner: true,
      pointsEarned: 150,
      playerCount: 5
    },
    {
      matchId: '2',
      date: new Date('2026-01-02T19:15:00'),
      isWinner: false,
      pointsEarned: 50,
      playerCount: 4
    },
    {
      matchId: '3',
      date: new Date('2026-01-01T21:00:00'),
      isWinner: true,
      pointsEarned: 200,
      playerCount: 6
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // TODO: Carregar histórico do backend
  }
}
