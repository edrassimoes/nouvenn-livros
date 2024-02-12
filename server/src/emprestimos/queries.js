export const getBorrowTable = 'select * from emprestimos';

export const getOwnerBooks = 'select id, titulo, autor, idioma, paginas, editora, dono, icone from books join emprestimos e on books.id = e.book_id join users u on e.owner_username = $1'

export const getBorrowerBooks = 'select id, titulo, autor, idioma, paginas, editora, dono, icone from books join emprestimos e on books.id = e.book_id join users u on e.borrower_username = $1'

export const createRelation = 'insert into emprestimos (owner_username, borrower_username, book_id) values ($1, $2, $3)'

export const deleteRelation = 'delete from emprestimos where borrower_username = $1 and book_id = $2'
