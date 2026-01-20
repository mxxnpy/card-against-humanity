# Firebase Configuration

## Setup Instructions

1. **Criar projeto no Firebase Console:**
   - Acesse https://console.firebase.google.com
   - Clique em "Adicionar projeto"
   - Siga as instruções para criar o projeto

2. **Ativar autenticação Google:**
   - No menu lateral, vá em "Authentication" (Autenticação)
   - Clique na aba "Sign-in method" (Método de login)
   - Ative o provedor "Google"
   - Configure o email de suporte do projeto

3. **Obter as credenciais:**
   - No menu lateral, clique no ícone de engrenagem > "Configurações do projeto"
   - Role até "Seus apps" e clique no ícone Web (</>)
   - Registre um novo app web
   - Copie a configuração do Firebase

4. **Configurar as variáveis de ambiente:**
   - Abra o arquivo `src/environments/environment.ts`
   - Substitua os valores `YOUR_*` pelos valores reais do Firebase:

```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: "sua-api-key-aqui",
    authDomain: "seu-projeto.firebaseapp.com",
    projectId: "seu-projeto-id",
    storageBucket: "seu-projeto.appspot.com",
    messagingSenderId: "seu-messaging-sender-id",
    appId: "seu-app-id"
  }
};
```

5. **Fazer o mesmo para o arquivo de produção:**
   - `src/environments/environment.prod.ts`

6. **Configurar domínio autorizado:**
   - No Firebase Console > Authentication > Settings > Authorized domains
   - Adicione `localhost` para desenvolvimento

## Executar o projeto

```bash
npm start
```

O app estará disponível em `http://localhost:4200`

## Importante

⚠️ **NUNCA commite as credenciais do Firebase no Git!**
- Adicione `environment.ts` e `environment.prod.ts` ao `.gitignore` se necessário
- Use variáveis de ambiente em produção
