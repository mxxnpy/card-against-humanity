# Google OAuth Setup

## Configuração Simples (sem Firebase)

1. **Criar projeto no Google Cloud Console:**
   - Acesse https://console.cloud.google.com
   - Crie um novo projeto
   - Nome: "Cards Against Humanity"

2. **Ativar Google+ API:**
   - No menu lateral: APIs & Services > Library
   - Procure por "Google+ API" e ative

3. **Criar credenciais OAuth 2.0:**
   - APIs & Services > Credentials
   - Clique em "Create Credentials" > "OAuth client ID"
   - Tipo: Web application
   - Nome: Cards Against Humanity Web
   - Authorized JavaScript origins: `http://localhost:4200`
   - Authorized redirect URIs: `http://localhost:4200`

4. **Copiar o Client ID:**
   - Copie o Client ID que foi gerado
   - Cole em `src/app/services/auth.service.ts` na linha:
     ```typescript
     client_id: 'SEU_CLIENT_ID_AQUI.apps.googleusercontent.com'
     ```

5. **Executar:**
   ```bash
   npm start
   ```

Pronto! Autenticação Google funcionando sem Firebase.
