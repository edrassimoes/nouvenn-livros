import {Client} from "pg";

const client = new Client({
	host: "localhost",
	port: 5432,
	database: "postgres",
	user: "postgres",
	password: "postgre",
});

const createTables = async () => {
	try {
		console.log("Iniciando a conexão...");
		await client.connect();
		console.log("Conexão bem sucedida!");
		await client.query(
			"create table if not exists users (" +
			"username text primary key, " +
			"password text not null, " +
			"email text not null)");
		await client.query(
			"create table if not exists books (" +
			"id serial primary key, " +
			"titulo text not null, " +
			"autor text not null, " +
			"idioma text not null, " +
			"paginas smallint not null, " +
			"editora text not null, " +
			"dono text not null, " +
			"icone text not null, " +
			"foreign key (dono) references users (username));");
		await client.query(
			"create table if not exists emprestimos (" +
			"owner_username text, " +
			"borrower_username text, " +
			"book_id integer," +
			"primary key (owner_username, borrower_username, book_id)," +
			"foreign key (owner_username) references users (username)," +
			"foreign key (borrower_username) references users (username)," +
			"foreign key (book_id) references books (id));");
	} catch (e) {
		console.log(e);
	} finally {
		await client.end();
		console.log("Conexão encerrada.");
	}
};

// Estante geral
const getTable = async (tabela) => {
	try {
		console.log("Iniciando a conexão...");
		await client.connect();
		console.log("Conexão bem sucedida!");
		const resultado = await client.query(`select *
                                              from ${tabela}`);
		console.table(resultado.rows);
	} catch (e) {
		console.log(e);
	} finally {
		await client.end();
		console.log("Conexão encerrada.");
	}
};

// Estante da Conta -> Meus livros
const getUserBooks = async (username) => {
	try {
		console.log("Iniciando a conexão...");
		await client.connect();
		console.log("Conexão bem sucedida!");
		const resultado = await client.query(`select *
                                              from books
                                              where books.dono = '${username}'`);
		console.log(resultado.rows);
	} catch (e) {
		console.log(e);
	} finally {
		await client.end();
		console.log("Conexão encerrada.");
	}
};

// Estante da Conta -> Emprestimos
const getEmprestimos = async (username) => {
	try {
		console.log("Iniciando a conexão...");
		await client.connect();
		console.log("Conexão bem sucedida!");
		const resultado = await client.query(`select books.titulo,
                                                     books.autor,
                                                     books.idioma,
                                                     books.paginas,
                                                     books.editora,
                                                     books.icone
                                              from books
                                                       join emprestimos on emprestimos.book_id = books.id
                                                  and emprestimos.borrower_username = '${username}'`);
		console.log(resultado.rows);
	} catch (e) {
		console.log(e);
	} finally {
		await client.end();
		console.log("Conexão encerrada.");
	}
};

// Estante da Conta -> Solicitações
const getSolicitacoes = async (username) => {
	try {
		console.log("Iniciando a conexão...");
		await client.connect();
		console.log("Conexão bem sucedida!");
		const resultado = await client.query(`select books.titulo,
                                                     books.autor,
                                                     books.idioma,
                                                     books.paginas,
                                                     books.editora,
                                                     books.icone
                                              from books
                                                       join emprestimos on emprestimos.book_id = books.id
                                                  and emprestimos.owner_username = '${username}'`);
		console.log(resultado.rows);
	} catch (e) {
		console.log(e);
	} finally {
		await client.end();
		console.log("Conexão encerrada.");
	}
};

// Signup
const createUser = async (username, password, email) => {
	try {
		console.log("Iniciando a conexão...");
		await client.connect();
		console.log("Conexão bem sucedida!");
		await client.query(`insert into users (username, password, email)
                            values ('${username}', '${password}', '${email}')`);
		console.log("Usuário criado com secesso");
	} catch (e) {
		console.log(e);
	} finally {
		await client.end();
		console.log("Conexão encerrada.");
	}
};

// CadastroPopup
const createBook = async (titulo, autor, idioma, paginas, editora, dono, icone) => {
	try {
		console.log("Iniciando a conexão...");
		await client.connect();
		console.log("Conexão bem sucedida!");
		await client.query(`insert into books (titulo, autor, idioma, paginas, editora, dono, icone)
                            values (${titulo}, ${autor}, ${idioma}, ${paginas}, ${editora}, ${dono}, ${icone})`);
		console.log("Livro cadastrado com secesso");
	} catch (e) {
		console.log(e);
	} finally {
		await client.end();
		console.log("Conexão encerrada.");
	}
};

// Login e Home, autenticação.
const getUser = async (username, password) => {
	try {
		console.log("Iniciando a conexão...");
		await client.connect();
		console.log("Conexão bem sucedida!");
		const resultado = await client.query(`select *
                                              from users
                                              where users.username = '${username}'
                                                and users.password = '${password}'`);
		console.log(resultado.rows);
	} catch (e) {
		console.log(e);
	} finally {
		await client.end();
		console.log("Conexão encerrada.");
	}
};

module.exports = {
	createTables,
	getTable,
	getUserBooks,
	getEmprestimos,
	getSolicitacoes,
	createUser,
	getUser,
	createBook
};