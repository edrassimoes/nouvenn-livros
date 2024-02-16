CREATE DATABASE postgres;

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