describe('API CRUD - Empréstimos', () => {

    // É necessário preencher as informações do empréstimo corretamente para testar.
    it('POST', () => {
        const emprestimo = {
            o_username: "edras",
            b_username: "sarah",
            book_id: "1",
        };

        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/api/v1/emprestimos',
            body: emprestimo,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.message).to.equal('Empréstimo solicitado com sucesso.');
        });
    });

    it('GET', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/api/v1/emprestimos'
        })
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.be.an('array');
                response.body.forEach((emprestimo) => {
                    expect(emprestimo).to.have.property('owner_username');
                    expect(emprestimo).to.have.property('borrower_username');
                    expect(emprestimo).to.have.property('book_id');
                    expect(emprestimo).to.have.property('id');
                    expect(emprestimo).to.have.property('titulo');
                    expect(emprestimo).to.have.property('autor');
                    expect(emprestimo).to.have.property('idioma');
                    expect(emprestimo).to.have.property('paginas');
                    expect(emprestimo).to.have.property('editora');
                    expect(emprestimo).to.have.property('dono');
                    expect(emprestimo).to.have.property('icone');
                    expect(emprestimo).to.have.property('emprestado');
                })
            })
    })

    // O emprestimo precisa existir na tabela previamente, é necessário o id do livro em questão para testar.
    it('DELETE', () => {
        cy.request({
            method: 'DELETE',
            url: 'http://localhost:3000/api/v1/emprestimos/1'
        })
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.message).to.equal('Empréstimo encerrado ou negado.');
            });
    });

})