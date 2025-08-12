# Projeto Fullstack: Angular 19 + NestJS

Este repositório contém uma aplicação fullstack composta por um **frontend** em [Angular 19](https://angular.dev/) e um **backend** em [NestJS](https://nestjs.com/). O sistema gerencia produtos, permitindo operações de CRUD (criar, listar, editar e excluir).

## Estrutura do Projeto

```
backend/    # API RESTful em NestJS + TypeORM + MySQL
frontend/   # SPA em Angular 19
```

---

## Funcionalidades

- **Frontend Angular**
  - Visualização, cadastro, edição e exclusão de produtos.
  - Interface responsiva e moderna.
  - Consome a API do backend via HTTP.

- **Backend NestJS**
  - API RESTful para produtos.
  - Integração com banco de dados MySQL via TypeORM.
  - Validação de dados com class-validator.
  - CORS habilitado para integração com o frontend.

---

## Requisitos

- Node.js >= 18
- MySQL >= 8
- npm >= 9

---

## Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

### 2. Backend

```bash
cd backend
npm install
```

Crie um arquivo `.env` com as variáveis de ambiente do banco de dados:

```
DB_HOST=localhost
DB_PORT=3306
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=nome_do_banco
NODE_ENV=development
```

Crie o banco de dados no MySQL conforme especificado em `DB_NAME`.

Inicie o backend:

```bash
npm run start:dev
```

A API estará disponível em `http://localhost:3000`.

### 3. Frontend

```bash
cd frontend
npm install
```

Inicie o frontend:

```bash
ng serve
```

Acesse `http://localhost:4200` no navegador.

---

## Scripts Principais

### Backend

- `npm run start:dev` — inicia o servidor NestJS em modo desenvolvimento
- `npm run test` — executa os testes unitários
- `npm run test:e2e` — executa os testes end-to-end

### Frontend

- `ng serve` — inicia o servidor de desenvolvimento Angular
- `ng build` — gera o build de produção
- `ng test` — executa os testes unitários

---

## Testes

- **Backend:** Testes unitários e e2e com Jest.
- **Frontend:** Testes unitários com Karma/Jasmine.

---

## Deploy

Para produção, gere o build do frontend e backend e configure as variáveis de ambiente do banco de dados.

---

## Tecnologias Utilizadas

- Angular 19
- NestJS 11
- TypeORM
- MySQL
- RxJS
- Express

---

## Licença

MIT

---

## Autor

- [Reynato Junior](https://github.com/reynatojunior)

---

## Referências

- [Documentação Angular](https://angular.dev/docs)
- [Documentação NestJS](https://docs.nestjs.com/)