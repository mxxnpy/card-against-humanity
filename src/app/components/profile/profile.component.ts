import { Component, OnInit } from '@angular/core';
import { UserService, UserProfile, UserPoints } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  userProfile: UserProfile | null = {
    userId: '1',
    name: 'Jogador',
    email: 'jogador@example.com',
    imageUrl: 'https://via.placeholder.com/120',
    createdAt: new Date()
  };
  
  userPoints: UserPoints | null = {
    userId: '1',
    totalPoints: 0,
    ranking: 1
  };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // TODO: Integrar com AuthService para pegar userId real
    // this.loadUserData();
  }

  private loadUserData(): void {
    const userId = 'current-user-id';
    
    this.userService.getUserProfile(userId).subscribe(
      profile => this.userProfile = profile,
      error => console.error('Error loading profile:', error)
    );

    this.userService.getUserPoints(userId).subscribe(
      points => this.userPoints = points,
      error => console.error('Error loading points:', error)
    );
  }
}
