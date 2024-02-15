describe('API CRUD - Usuários', () => {

    // O username não pode existir na tabela previamente.
    it('POST', () => {
        const usuario = {
            username: "teste",
            email: "teste@teste.com",
            password: "teste",
        };

        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/api/v1/usuarios',
            body: usuario,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.message).to.equal('Usuário cadastrado com sucesso!');
        });
    });

    it('GET', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/api/v1/usuarios'
        })
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.be.an('array');
                response.body.forEach((usuario) => {
                    expect(usuario).to.have.property('username');
                    expect(usuario).to.have.property('email');
                    expect(usuario).to.have.property('password');
                })
            })
    })

})