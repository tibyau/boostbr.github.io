# 🚀 SocialBoost - Site de Venda de Seguidores

Site completo, moderno e responsivo para venda de seguidores em redes sociais (Instagram, TikTok, Twitter/X, YouTube e Kwai), hospedado no GitHub Pages.

## 📋 Características

- ✅ Design dark mode moderno com gradientes neon/roxo/azul/rosa
- ✅ Totalmente responsivo (mobile-first)
- ✅ Carrinho de compras com localStorage
- ✅ Calculadora de preço com desconto automático
- ✅ Integração com WhatsApp
- ✅ Painel administrativo para gerenciamento de pedidos
- ✅ Gerador de QR Code Pix
- ✅ Animações suaves e partículas de fundo
- ✅ SEO básico (meta tags, Open Graph)
- ✅ Proteção básica contra inspeção

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (Tailwind CSS via CDN)
- JavaScript puro (sem frameworks)
- LocalStorage para persistência de dados
- QRCode.js para geração de QR Codes

## 📁 Estrutura de Arquivos

```
social-followers-store/
├── index.html          # Página principal
├── admin.html          # Painel administrativo
├── script.js           # Funcionalidades JavaScript
└── README.md           # Este arquivo
```

## 🚀 Como Publicar no GitHub Pages

### Passo 1: Criar Repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique no botão "+" no canto superior direito
3. Selecione "New repository"
4. Dê um nome ao repositório (ex: `social-followers-store`)
5. Marque "Public" (repositório público)
6. Clique em "Create repository"

### Passo 2: Fazer Upload dos Arquivos

#### Opção A: Via Interface Web (Mais Simples)

1. No repositório criado, clique em "uploading an existing file"
2. Arraste os arquivos `index.html`, `admin.html` e `script.js` para a área de upload
3. Clique em "Commit changes"

#### Opção B: Via Git (Recomendado)

```bash
# Navegue até a pasta do projeto
cd C:\Users\user\CascadeProjects\social-followers-store

# Inicialize o repositório Git
git init

# Adicione todos os arquivos
git add .

# Faça o primeiro commit
git commit -m "Initial commit"

# Adicione o repositório remoto (substitua SEU_USUARIO pelo seu usuário do GitHub)
git remote add origin https://github.com/SEU_USUARIO/social-followers-store.git

# Envie para o GitHub
git branch -M main
git push -u origin main
```

### Passo 3: Ativar GitHub Pages

1. No repositório do GitHub, clique em "Settings"
2. No menu lateral, clique em "Pages"
3. Em "Build and deployment", em "Source", selecione "Deploy from a branch"
4. Em "Branch", selecione "main" e pasta "/ (root)"
5. Clique em "Save"

### Passo 4: Aguardar Deploy

- Aguarde alguns minutos (geralmente 1-3 minutos)
- O GitHub irá gerar uma URL para seu site
- A URL será algo como: `https://SEU_USUARIO.github.io/social-followers-store/`

## ⚙️ Configuração das Formas de Pagamento

### 1. Configurar Chave Pix

#### Passo a Passo:

1. **Abra o app do seu banco**
   - Itaú, Bradesco, Nubank, Inter, etc.

2. **Acesse a área Pix**
   - Geralmente fica no menu principal ou em "Pagamentos"

3. **Cadastre sua chave Pix**
   - Você pode escolher entre:
     - CPF (ex: `000.000.000-00`)
     - Telefone (ex: `+55 11 99999-9999`)
     - E-mail (ex: `seu@email.com`)
     - Chave aleatória (gerada pelo banco)

4. **Anote sua chave Pix**
   - Você precisará dela para configurar no site

#### Atualizar no Site:

No arquivo `index.html`, procure pela seção de pagamento e substitua a chave Pix:

```html
<p class="text-accent font-mono text-lg mb-3">SUA_CHAVE_PIX_AQUI</p>
```

No arquivo `script.js`, atualize o número do WhatsApp:

```javascript
const phone = '55SEU_NUMERO_WHATSAPP'; // Ex: 5511999999999
```

### 2. Configurar Número do WhatsApp

1. **Obtenha seu número comercial**
   - Use um número dedicado para o negócio
   - Pode ser seu número pessoal ou um número de WhatsApp Business

2. **Formato correto**
   - Código do país (55 para Brasil)
   - DDD (ex: 11 para São Paulo)
   - Número (ex: 999999999)
   - Exemplo final: `5511999999999`

3. **Atualize no código**
   - No arquivo `script.js`, linha 177 e linha 237
   - Substitua `5511999999999` pelo seu número

### 3. Configurar Pagamento via Cartão de Crédito

#### Opções:

**Opção A: Link de Pagamento (Mais Simples)**
- Use plataformas como:
  - [Mercado Pago](https://www.mercadopago.com.br)
  - [PagSeguro](https://www.pagseguro.com.br)
  - [Stripe](https://stripe.com/br)
  - [Hotmart](https://hotmart.com/br)

**Opção B: Integração Direta**
- Requer conhecimento de backend
- Necessário servidor para processar pagamentos
- Mais complexo, mas mais profissional

#### Implementação (Link de Pagamento):

1. Crie uma conta em uma plataforma de pagamento
2. Crie um link de pagamento ou botão
3. Atualize o botão no site para redirecionar para esse link

### 4. Confirmar Pagamentos Manualmente

#### Processo:

1. **Cliente faz o Pix**
   - Cliente escaneia o QR Code ou usa a chave Pix
   - Pagamento é aprovado instantaneamente

2. **Cliente envia comprovante**
   - Via WhatsApp ou e-mail
   - Comprovante mostra: valor, data, destinatário

3. **Você verifica no banco**
   - Abra o app do seu banco
   - Verifique a área de extrato ou Pix recebidos
   - Confirme que o valor está correto

4. **Marque como pago no painel admin**
   - Acesse `admin.html`
   - Encontre o pedido
   - Clique em "Confirmar Pagamento"

5. **Entregue o serviço**
   - Solicite o usuário/perfil do cliente
   - Use seu fornecedor de seguidores
   - Entregue dentro do prazo (24-72h)
   - Marque como "Entregue" no painel admin

### 5. Dicas de Segurança

⚠️ **MUITO IMPORTANTE:**

- ✅ **NUNCA entregue antes de confirmar o pagamento**
- ✅ **Sempre verifique o comprovante no banco**
- ✅ **Guarde todos os comprovantes**
- ✅ **Use o painel admin para organizar pedidos**
- ✅ **Não compartilhe sua senha de banco**
- ✅ **Cuidado com golpes de "devolução de Pix"**
- ✅ **Bloqueie clientes que tentam golpe**

## 📊 Usando o Painel Admin

### Acessar o Painel

1. Acesse: `https://SEU_USUARIO.github.io/social-followers-store/admin.html`
2. O painel usa localStorage para salvar os dados
3. Os dados ficam salvos no navegador do administrador

### Funcionalidades

#### 1. Estatísticas
- Total de pedidos
- Pedidos pendentes
- Pedidos pagos
- Pedidos entregues

#### 2. Gerador de QR Code Pix
- Preencha os dados (chave, nome, cidade, valor)
- Clique em "Gerar QR Code"
- O QR Code será gerado automaticamente
- Cliente pode escanear para pagar

#### 3. Adicionar Pedido Manual
- Use para pedidos que vieram via WhatsApp
- Preencha os dados do cliente
- Clique em "Adicionar Pedido"
- O pedido ficará salvo no sistema

#### 4. Lista de Pedidos
- Veja todos os pedidos
- Filtre por status (Todos, Pendentes, Pagos, Entregues)
- Ações disponíveis:
  - Confirmar Pagamento
  - Marcar como Entregue
  - Excluir pedido
  - Enviar mensagem via WhatsApp

## 💡 Personalizações

### Alterar Preços

No arquivo `index.html`, procure pela seção de serviços e altere os preços:

```html
<li class="flex justify-between">
    <span>1.000 seguidores</span>
    <span class="text-accent font-bold">R$ 15,90</span>
</li>
```

No arquivo `script.js`, altere os preços base na função `calculatePrice()`:

```javascript
const basePrices = {
    'instagram': 0.0159,  // R$ 15.90 por 1000
    'tiktok': 0.0199,     // R$ 19.90 por 1000
    // ...
};
```

### Alterar Cores

No arquivo `index.html`, altere as cores no Tailwind config:

```javascript
colors: {
    primary: '#8B00FF',    // Roxo principal
    secondary: '#FF00FF',  // Rosa neon
    accent: '#00D4FF',     // Azul ciano
    dark: '#0a0a0f',       // Fundo escuro
    // ...
}
```

### Alterar Textos

Todos os textos estão em português brasileiro. Para alterar:
- Edite diretamente no arquivo `index.html`
- Os textos persuasivos estão nas seções Hero, Serviços, Depoimentos, etc.

## 🔐 Considerações de Segurança

### Limitações do GitHub Pages

- GitHub Pages é estático (sem backend)
- Dados são salvos no localStorage (navegador)
- Não há banco de dados real
- Não há processamento de pagamentos automático

### Para Produção

Se você precisa de um sistema mais robusto, considere:

1. **Backend com banco de dados**
   - Node.js, Python, PHP, etc.
   - PostgreSQL, MySQL, MongoDB
   - API para processar pagamentos

2. **SaaS de Seguidores**
   - Use plataformas existentes (SMM Panel)
   - Integração via API
   - Mais seguro e escalável

3. **Hospedagem com backend**
   - VPS, DigitalOcean, AWS
   - Permite processamento real de pagamentos
   - Dados centralizados

## 📱 Suporte

Se precisar de ajuda:
- Verifique se todos os arquivos foram enviados corretamente
- Confirme que o GitHub Pages está ativado
- Teste o site em diferentes navegadores
- Verifique o console do navegador para erros

## ⚖️ Aviso Legal

Este site é um exemplo demonstrativo. A venda de seguidores pode violar os termos de serviço das redes sociais. Use por sua conta e risco. O autor não se responsabiliza pelo uso deste código.

## 📄 Licença

Este projeto é fornecido "como está", sem garantias. Sinta-se livre para modificar e usar conforme necessário.

---

**Desenvolvido com ❤️ para ajudar você a crescer nas redes sociais!**
