export const getBooks = 'select * from books';

export const getBookById = 'select * from books where id = $1'

export const getBookByUsername = 'select * from books where dono = $1'

export const createBook = 'insert into books (titulo, autor, idioma, paginas, editora, dono, icone) values ($1, $2, $3, $4, $5, $6, $7)'

export const deleteBook = 'delete from books where id = $1'

export const updateBook = 'update books set (titulo, autor, idioma, paginas, editora, icone) = ($1, $2, $3, $4, $5, $6) where id = $7'
