describe('Casos de teste Serverest Login', () => {
    beforeEach(() => {
        cy.VisitaPaginaServerest()
        cy.LoginComSucesso()
    })
  
    it('Login com credenciais de sucesso', () => {
        cy.OptionRelatorios()
    }) 
})