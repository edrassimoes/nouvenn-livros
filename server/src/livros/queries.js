export const getBooks = 'select * from books';

export const createBook = 'insert into books (titulo, autor, idioma, paginas, editora, dono, icone) values ($1, $2, $3, $4, $5, $6, $7)'

export const updateBook = 'update books set (titulo, autor, idioma, paginas, editora, icone) = ($1, $2, $3, $4, $5, $6) where id = $7'

export const deleteBook = 'delete from books where id = $1'
