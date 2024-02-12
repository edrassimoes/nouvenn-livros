export const getBorrowTable = 'select * from emprestimos';

export const getOwnerBooks = 'select id, titulo, autor, idioma, paginas, editora, dono, icone from books join emprestimos e on books.id = e.book_id join users u on e.owner_username = $1 and e.status = false'

export const getBorrowerBooks = 'select id, titulo, autor, idioma, paginas, editora, dono, icone from books join emprestimos e on books.id = e.book_id join users u on e.borrower_username = $1 and e.status = true'

export const createRelation = 'insert into emprestimos (owner_username, borrower_username, book_id, status) values ($1, $2, $3, $4)'

export const updateRelation = 'update emprestimos set status = $1 where book_id = $2'

export const deleteRelation = 'delete from emprestimos where book_id = $1'
