export const getUsers = 'select * from users';

export const getUserByUsername = 'select * from users where username = $1'

export const createUser = 'insert into users (username, email, password) values ($1, $2, $3)'

export const deleteUser = 'delete from users where username = $1'

export const updateUser = 'update users set (email, password) = ($1, $2) where username = $3'
