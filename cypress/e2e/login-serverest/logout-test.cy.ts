describe('Casos de teste Serverest Login', () => {
    beforeEach(() => {
        cy.VisitaPaginaServerest()
        cy.LoginComSucesso()
    })

    it('Faz Logout com sucesso',()=>{
        cy.LogoutComSucesso()
    })
})  