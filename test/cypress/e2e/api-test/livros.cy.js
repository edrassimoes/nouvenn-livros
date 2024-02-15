describe('API CRUD - Livros', () => {

    // O usuário precisa existir na tabela previamente, é necessário seu username (dono) para testar.
    it('POST', () => {
        const livro = {
            titulo: 'Teste POST',
            autor: 'Teste POST',
            idioma: 'Teste POST',
            paginas: 1,
            editora: 'Teste POST',
            dono: 'edras',
            icone: '📘',
        };

        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/api/v1/livros',
            body: livro,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.message).to.equal('Livro cadastrado com sucesso!');
        });
    });

    it('GET', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/api/v1/livros'
        })
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.be.an('array');
                response.body.forEach((livro) => {
                    expect(livro).to.have.property('id');
                    expect(livro).to.have.property('titulo');
                    expect(livro).to.have.property('autor');
                    expect(livro).to.have.property('idioma');
                    expect(livro).to.have.property('paginas');
                    expect(livro).to.have.property('editora');
                    expect(livro).to.have.property('dono');
                    expect(livro).to.have.property('icone');
                    expect(livro).to.have.property('emprestado');
                })
            })
    })

    // O livro precisa existir na tabela previamente, é necessário seu id para testar.
    it('PUT', () => {
        cy.request({
            method: 'PUT',
                url: 'http://localhost:3000/api/v1/livros/1'
        })
            .then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body.message).to.equal('As informações do livro foram atualizadas com sucesso.');
            });
    });

    // O livro precisa existir na tabela previamente, é necessário seu id para testar.
    it('DELETE', () => {
        cy.request({
            method: 'DELETE',
            url: 'http://localhost:3000/api/v1/livros/1'
        })
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.message).to.equal('Livro removido com sucesso.');
            });
    });

})