/// <reference types="cypress" />

describe('Casos de teste Serverest Login', () => {
    beforeEach(() => {
        cy.VisitaPaginaServerest()
        cy.LoginComSucesso()
    })

    it('Listar usuario por email com sucesso',() => {
        cy.ListagemUsuarioPorEmailComSucesso()
    })

    it('Listar usuario por nome com sucesso',() => {
        cy.ListagemUsuarioPorNomeComSucesso()
    })
})  