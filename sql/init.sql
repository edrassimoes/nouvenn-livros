CREATE DATABASE postgres;
CREATE USER postgres WITH ENCRYPTED PASSWORD 'postgres';
ALTER ROLE postgres SET client_encoding TO 'utf8';
ALTER ROLE postgres SET default_transaction_isolation TO 'read committed';
ALTER ROLE postgres SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE postgres TO postgres;

create table if not exists users
(
    username text primary key,
    password text not null,
    email    text not null
);

create table if not exists books
(
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

create table if not exists emprestimos
(
    owner_username    text not null references users (username) on delete cascade,
    borrower_username text not null references users (username) on delete cascade,
    book_id           integer primary key references books (id) on delete cascade
);