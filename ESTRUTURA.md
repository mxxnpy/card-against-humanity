# Cards Against Humanity - Estrutura do Projeto

## ✅ Componentes Criados

### 1. **LoginComponent** (`/home`)
- Tela inicial com animação "MAKE HUMANITY WORSE"
- Login simulado (username)
- Navbar com menu hambúrguer
- 3 cards animados após login:
  - Nova Partida
  - Encontrar Partidas  
  - Ver Cartas

### 2. **ProfileComponent** (`/profile`)
- Exibe perfil do usuário (avatar, nome, email)
- Estatísticas (pontos, ranking, partidas, vitórias)
- Integrado com `UserService`

### 3. **RankingComponent** (`/ranking`)
- Lista de usuários ordenados por pontos
- Integrado com `UserService`

### 4. **CardsManagementComponent** (`/cards`)
- CRUD de cartas (criar, editar, deletar)
- Separação de cartas pretas (perguntas) e brancas (respostas)
- Integrado com `CardsService`

### 5. **MyRoomsComponent** (`/my-rooms`)
- Lista de salas criadas pelo usuário
- Integrado com `GameService`

### 6. **HistoryComponent** (`/history`)
- Histórico de partidas jogadas
- Estatísticas de cada partida

---

## 🔌 Serviços e Rotas do Backend

### **GameService**
```typescript
// POST /startSession - Gera GUID para sessão
startSession(): Observable<{ sessionId: string }>

// GET /getSession/:sessionId - Informações da sessão
getSession(sessionId: string): Observable<GameSession>

// GET /getCardsPerRound/:sessionId - Cartas da rodada
getCardsPerRound(sessionId: string): Observable<RoundCards>
```

### **CardsService**
```typescript
// GET /getAllCards - Todas as cartas
getAllCards(): Observable<Card[]>

// POST /createCards - Criar carta
createCard(card: { cardType: number, text: string }): Observable<Card>

// PUT /updateCards - Atualizar carta
updateCard(cardId: string, updates: {...}): Observable<Card>

// DELETE /deleteCards/:cardId - Deletar carta (somente criador)
deleteCard(cardId: string, userId: string): Observable<void>
```

### **UserService**
```typescript
// GET /userProfile/:userId - Perfil do usuário
getUserProfile(userId: string): Observable<UserProfile>

// GET /userPoints/:userId - Pontos totais
getUserPoints(userId: string): Observable<UserPoints>
```

---

## 📁 Estrutura de Pastas

```
src/app/
├── components/
│   ├── login/
│   ├── profile/
│   ├── ranking/
│   ├── cards-management/
│   ├── my-rooms/
│   └── history/
├── services/
│   ├── auth.service.ts
│   ├── game.service.ts
│   ├── cards.service.ts
│   └── user.service.ts
└── app-routing.module.ts
```

---

## 🎨 Padrão de Estilo

Todos os componentes seguem o mesmo padrão visual:

- **Fonte**: Roboto (400, 700)
- **Cores**: Preto (#000000), Branco (#FFFFFF)
- **Botões**: Monocromáticos com efeito de brilho e box-shadow
- **Cards**: Flip 3D ao hover, bordas pretas 2px
- **Animações**: Suaves (0.3s - 0.8s transitions)
- **Layout**: Responsivo com CSS Grid

---

## 🔄 Próximos Passos

1. Implementar backend Node.js com as rotas especificadas
2. Conectar AuthService com o userId real
3. Implementar funcionalidade de salas (WebSocket)
4. Adicionar sistema de rodadas do jogo
5. Implementar histórico e estatísticas completas

---

## 📝 Notas

- API URL configurada em `environment.ts`: `http://localhost:3000/api`
- HttpClientModule já importado no `app.module.ts`
- Todos os serviços usam Observables (RxJS)
- Componentes já declarados no `app.module.ts`
