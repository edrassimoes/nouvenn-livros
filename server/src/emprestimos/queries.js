export const getTable = 'select * from emprestimos join books b on b.id = emprestimos.book_id';

export const createRelation = 'insert into emprestimos (owner_username, borrower_username, book_id) values ($1, $2, $3)'

export const deleteRelation = 'delete from emprestimos where book_id = $1'
