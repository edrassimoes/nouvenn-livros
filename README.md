![Estante](client/src/assets/teste4.png "Estante")

# Executando a Aplicação

## ⚙️ Pré-requisitos

- Node.js e npm devem estar instalados na sua máquina.

- Você precisa ter o PostgreSQL instalado na sua máquina para o funcionamento correto da aplicação.


## 🐘 Configurando o PostgresSQL

‼️ **Por favor, certifique-se de configurar o PostgreSQL com as seguintes credenciais:**
  - Usuário: "postgres"
  - Host: "localhost"
  - Senha: "postgres"
  - Porta: 5432

Crie as seguintes tabelas dentro de seu banco:

```bash
CREATE DATABASE postgres;

create table if not exists users (
    username text primary key,
    password text not null,
    email    text not null
);

create table if not exists books (
    id         serial primary key,
    titulo     text not null,
    autor      text not null,
    idioma     text not null,
    paginas    text not null,
    editora    text not null,
    dono       text not null references users (username) on delete cascade,
    icone      text not null,
    emprestado bool not null
);

create table if not exists emprestimos (
    owner_username    text not null references users (username) on delete cascade,
    borrower_username text not null references users (username) on delete cascade,
    book_id           integer primary key references books (id) on delete cascade
);
```

## 📌 Instalação

1. Clone este repositório para sua máquina local.

```bash
git clone https://github.com/edrassimoes/nouvenn-livros.git
```

2. Dentro da pasta nouvenn-livros, instale as dependências usando npm.
```bash
npm install
```

4. Executando a Aplicação.
Após instalar as dependências, você pode executar a aplicação usando o comando npm start, que utilizará o pacote concurrently para iniciar os processos do cliente e do servidor simultaneamente.
```bash
npm start
```
5. Acesso:
- 👤 Cliente: http://localhost:5173
- 📡 Servidor: http://localhost:3000

## Estrutura do Projeto
- 📂 client/: Contém o código do cliente.
- 📂 server/: Contém o código do servidor.
- 📂 test/: Contém os arquivos de teste.
- 📂 docker/: Contém o Dockerfile.

---

<div display="flex" align="center">
  <p font-size="12px"><i>Repositório destinado a segunda etapa do processo seletivo para a vaga de Estágio em Desenvolvimento de Software na Nouvenn.</i></p>
  <img src="client/src/assets/nouvenn_logo.jpg" alt="Nouvenn logo" width="80" height="80">
</div>
