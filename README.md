# 📑 Sistema de Inscrição Institucional

Este projeto consiste em um portal de autenticação moderno e responsivo, focado na experiência do usuário (UX). Ele inclui interfaces de **Registro de Membros** e **Portal de Login**, com validações de formulário em tempo real e design minimalista utilizando Tailwind CSS.

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as melhores práticas de desenvolvimento front-end:

* **HTML5**: Estruturação semântica.
* **Tailwind CSS**: Framework CSS utilitário para estilização responsiva.
* **JavaScript (ES6+)**: Lógica de interface e manipulação de eventos.
* **JustValidate**: Biblioteca para validação de formulários do lado do cliente.
* **Font Awesome**: Ícones para melhoria da interface visual.

---

# ✅ Funcionalidades

### 🔐 Autenticação
* **Registro de Usuário**: Formulário completo com nome, e-mail e senha.
* **Login de Membros**: Acesso rápido para usuários já cadastrados.
* **Visualização de Senha**: Botão de "olho" para alternar a visibilidade das senhas, melhorando a precisão no preenchimento.

### 🛡️ Validação de Dados (JustValidate)
* Verificação de campos obrigatórios.
* Validação de formato de e-mail.
* Requisitos de segurança para senhas.
* Comparação entre "Senha" e "Confirmar Senha" no cadastro.
* Feedback visual de erro estilizado abaixo de cada input.

### 🧪 Qualidade & Testes (QA)
O projeto conta com uma suíte de testes automatizados via **Cypress**, cobrindo os cenários:
* Validação de formato de e-mail inválido.
* Verificação de requisitos mínimos de segurança para senhas.
* Sucesso na autenticação com perfis homologados (ex: Patolino).

### 📂 Estrutura das pastas

```plaintext
authentication-ui-system/
├── cypress/
    └── login.cy.js
    └── registro.cy,js
├── js/
    └── login-validation.js
    └── register.validation.js
├── login-autentication/
│   └── member-login-portal.html      # Interface de Login
├── node_modules/
├── register-autentication/
│   └── auth-member-registration.html # Interface de Cadastro
└── README.md                         # Documentação do projeto

```

# 🎨 Estilização e Design System
O projeto utiliza o Tailwind CSS para criar uma interface moderna, limpa e com foco em legibilidade. Abaixo estão os detalhes da identidade visual:

#### 🌈 Paleta de Cores
A escolha das cores foi baseada em um contraste sofisticado para transmitir confiança institucional:

- Slate (900/800/50): Utilizado para textos, botões principais e fundos neutros. O Slate traz uma sobriedade maior que o preto puro, conferindo um ar mais "premium".

- Emerald (500/600): A cor de destaque. O verde esmeralda é associado a sucesso, segurança e validação, ideal para botões de ação e indicadores de progresso.

- White (Branco): Utilizado nos cards com bordas arredondadas para criar profundidade e clareza.

#### 📐 UI & Layout
- Rounded Corners (rounded-2xl / rounded-[2rem]): O uso de bordas extremamente arredondadas suaviza a interface, tornando-a mais amigável e moderna.

- Soft Shadows: Aplicamos shadow-2xl shadow-slate-200/50 para dar um efeito de elevação (depth) aos formulários, fazendo-os flutuar sobre o fundo Slate-50.

- Interatividade: Efeitos de transition-all e active:scale-[0.97] nos botões garantem um feedback tátil ao usuário durante o clique.

# 👁️ Funcionalidade do Ícone de Senha (Show/Hide)
Para garantir uma melhor UX (User Experience), os campos de senha incluem um ícone interativo do Font Awesome:

Segurança e Precisão: O usuário pode alternar a visibilidade da senha clicando no ícone de "olho" (fa-eye). Isso reduz drasticamente erros de digitação e evita o bloqueio de contas.

Feedback Visual:

- Estilo: O ícone possui posicionamento absoluto dentro do container do input (absolute right-4).

- Hover: Muda de cor (text-slate-400 para text-slate-700) ao passar o mouse, indicando que é um elemento clicável.

- Implementação: A lógica alterna o atributo type do input entre password e text via JavaScript, garantindo que a funcionalidade seja acessível e intuitiva.

# Como usar  

```bash
  # Clone o repositório
  git clone https://github.com/thiagorefatorandogit/authentication-ui-system
  cd authentication-ui-system

  # Instale as dependências de desenvolvimento (Cypress)
   npm install
```

## Inicialização
- Execução: Como o projeto utiliza caminhos relativos e bibliotecas via CDN, basta abrir o arquivo index.html em seu navegador.
- Dica: Utilize a extensão Live Server no VS Code para visualizar as transições e animações em tempo real.

## 📜 Licença 
Este projeto está sob a licença MIT.
  
Copyright © 2026 - Thiago Alves
