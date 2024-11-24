/// <reference types="cypress" />

describe('Casos de teste Serverest Login', () => {
    beforeEach(() => {
        cy.VisitaPaginaServerest()
        cy.LoginComSucesso()
    })

    it('Cadastro de produtos',() => {
        cy.CadastrandoProdutoComSucesso()
    })
  

})  
