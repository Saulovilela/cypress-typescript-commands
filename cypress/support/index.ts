// cypress/support/index.d.ts

/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        VisitaPaginaServerest(): Chainable<Element>;
        PreencherCredenciais(): Chainable<Element>;
        LoginComSucesso(): Chainable<Element>;
        LoginIncorreto(): Chainable<Element>;
        LoginEmBranco(): Chainable<Element>;
        LogoutComSucesso(): Chainable<Element>;
        CadastrandoProdutoComSucesso(): Chainable<Element>;
        ListagemProdutoComSucesso(): Chainable<Element>;
        ListagemUsuarioPorEmailComSucesso(): Chainable<Element>;
        ListagemUsuarioPorNomeComSucesso(): Chainable<Element>;
        OptionRelatorios(): Chainable<Element>;
        CadastrarUsuarioExistente():Chainable<Element>;
        CadastrarUsuarioNovo():Chainable<Element>;
    }
}
