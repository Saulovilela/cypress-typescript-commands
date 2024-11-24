
import { faker } from '@faker-js/faker';

Cypress.Commands.add('VisitaPaginaServerest', () => {
    cy.visit('https://front.serverest.dev/login')
});

Cypress.Commands.add('LoginComSucesso',()=>{
    cy.get('[data-testid="email"]').type('cypressteste@uorak.com')
    cy.get('[data-testid="senha"]').type('123456')
    cy.get('[data-testid="entrar"]').click()
    cy.contains('Bem Vindo Cypress Teste').should('be.visible')
})

Cypress.Commands.add('LoginIncorreto',()=>{
    cy.get('[data-testid="email"]').type('cypressteste@uorak.com')
    cy.get('[data-testid="senha"]').type('123456123')
    cy.get('[data-testid="entrar"]').click()
    cy.contains('Email e/ou senha inválidos').should('be.visible')
})

Cypress.Commands.add('LoginEmBranco',()=>{
    cy.get('[data-testid="entrar"]').click()
    cy.contains('Email é obrigatório').should('be.visible')
    cy.contains('Password é obrigatório').should('be.visible')
})

Cypress.Commands.add('LogoutComSucesso',()=>{
    cy.get('[data-testid="logout"]').click()
    cy.contains('Login').should('be.visible')
})

Cypress.Commands.add('CadastrandoProdutoComSucesso',()=>{
    cy.get('[data-testid="cadastrar-produtos"]').click()
    cy.wait(5000)
    cy.get('[data-testid="nome"]').type('Chorofonfila')
    cy.get('[data-testid="preco"]').type('10 reais')
    cy.get('[data-testid="descricao"]').type('Chorofonfila do Chaves')
    cy.get('[data-testid="quantity"]').type('12')
    cy.get('[data-testid="cadastarProdutos"]').click()
})

Cypress.Commands.add('ListagemProdutoComSucesso',()=>{
    cy.get('[data-testid="listar-produtos"]').click()
    cy.contains('Chorofonfila').should('be.visible')
})

Cypress.Commands.add('ListagemUsuarioPorEmailComSucesso',()=>{
    cy.get('[data-testid="listar-usuarios"]').click()
    cy.contains('hcole@example.org').should('be.visible')
})

Cypress.Commands.add('ListagemUsuarioPorNomeComSucesso',()=>{
    cy.get('[data-testid="listar-usuarios"]').click()
    cy.contains('Saulo Vilela Testador QA').should('be.visible')
})

Cypress.Commands.add('OptionRelatorios',()=>{
    cy.get('[data-testid="link-relatorios"]').click()
    cy.contains('Em construção aguarde').should('be.visible')
})

Cypress.Commands.add('CadastrarUsuarioExistente',()=>{
    cy.get('[data-testid="cadastrar-usuarios"]').click()
    cy.get('[data-testid="nome"]').type('Testando Cadastro Cypress')
    cy.get('[data-testid="email"]').type('testecypresscadastro@continue.com')
    cy.get('[data-testid="password"]').type('senhatestebuscandosenha')
    cy.get('[data-testid="checkbox"]').check()
    cy.get('[data-testid="cadastrarUsuario"]').click()
    cy.contains('Este email já está sendo usado').should('be.visible')
})
Cypress.Commands.add('CadastrarUsuarioNovo',()=>{
    const emailFalso = faker.internet.email();

    cy.get('[data-testid="cadastrar-usuarios"]').click()
    cy.get('[data-testid="nome"]').type('Testando Cadastro Cypress')
    cy.get('[data-testid="email"]').type(emailFalso)
    cy.get('[data-testid="password"]').type('senhatestebuscandosenha')
    cy.get('[data-testid="checkbox"]').check()
    cy.get('[data-testid="cadastrarUsuario"]').click()
    cy.contains(emailFalso).should('be.visible')
})