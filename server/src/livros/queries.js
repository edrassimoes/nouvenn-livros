export const getBooks = 'select * from books';

export const createBook = 'insert into books (titulo, autor, idioma, paginas, editora, dono, icone, emprestado) values ($1, $2, $3, $4, $5, $6, $7, false)'

export const updateBook = 'update books set emprestado = not emprestado where id = $1'

export const deleteBook = 'delete from books where id = $1'
