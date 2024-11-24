/// <reference types="cypress" />

describe('Casos de teste Serverest Cadastro', () => {
    beforeEach(() => {
        cy.VisitaPaginaServerest()
        cy.LoginComSucesso()
    })
    it('Cadastrar usuario existente',() => {
        cy.CadastrarUsuarioExistente()
    })


    it('Cadastrar usuario novo',() => {
        cy.CadastrarUsuarioNovo()
    })
  

})  