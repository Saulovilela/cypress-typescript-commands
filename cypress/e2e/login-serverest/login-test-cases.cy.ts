/// <reference types="cypress" />

describe('Casos de teste Serverest Login', () => {
    beforeEach(() => {
        cy.VisitaPaginaServerest()
    })
  
    it('Login com credenciais de sucesso', () => {
        cy.LoginComSucesso()
    })  

    it('Login com credenciais incorretas',()=>{
        cy.LoginIncorreto()
    })

    it('Login com credenciais em branco', ()=>{
        cy.LoginEmBranco()
    })
})
    