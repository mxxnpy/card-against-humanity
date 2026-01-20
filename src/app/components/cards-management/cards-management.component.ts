import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../services/cards.service';
import { Card } from '../../services/game.service';

@Component({
  selector: 'app-cards-management',
  templateUrl: './cards-management.component.html',
  styleUrl: './cards-management.component.css'
})
export class CardsManagementComponent implements OnInit {
  allCards: Card[] = [
    { cardId: '1', cardType: 1, text: 'O que você faria se _____?', userId: '1' },
    { cardId: '2', cardType: 2, text: 'Comer pizza fria', userId: '1' },
    { cardId: '3', cardType: 1, text: 'A melhor parte do meu dia é _____', userId: '1' },
    { cardId: '4', cardType: 2, text: 'Dormir até tarde', userId: '1' },
  ];
  
  filterType: 'all' | 1 | 2 = 'all';
  showModal = false;
  editingCard: Card | null = null;
  cardForm = {
    cardType: 1,
    text: ''
  };

  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
    // TODO: Carregar cartas do backend
    // this.loadCards();
  }

  get filteredCards(): Card[] {
    if (this.filterType === 'all') {
      return this.allCards;
    }
    return this.allCards.filter(card => card.cardType === this.filterType);
  }

  openCreateModal(): void {
    this.editingCard = null;
    this.cardForm = { cardType: 1, text: '' };
    this.showModal = true;
  }

  editCard(card: Card): void {
    this.editingCard = card;
    this.cardForm = { cardType: card.cardType, text: card.text };
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.editingCard = null;
  }

  saveCard(): void {
    if (!this.cardForm.text.trim()) return;

    if (this.editingCard) {
      // Update
      const index = this.allCards.findIndex(c => c.cardId === this.editingCard!.cardId);
      if (index !== -1) {
        this.allCards[index] = { ...this.allCards[index], ...this.cardForm };
      }
    } else {
      // Create
      const newCard: Card = {
        cardId: Date.now().toString(),
        ...this.cardForm,
        userId: '1'
      };
      this.allCards.push(newCard);
    }

    this.closeModal();
  }

  deleteCard(cardId: string): void {
    if (confirm('Tem certeza que deseja deletar esta carta?')) {
      this.allCards = this.allCards.filter(c => c.cardId !== cardId);
    }
  }

  private loadCards(): void {
    this.cardsService.getAllCards().subscribe(
      cards => this.allCards = cards,
      error => console.error('Error loading cards:', error)
    );
  }
}
