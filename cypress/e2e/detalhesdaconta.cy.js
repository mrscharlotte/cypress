/// <reference types="cypress"/>


describe('funcionalidade:datelhes da conta', () => {
beforeEach(() => {
   cy.visit('minha-conta/edit-account')
   cy.login('joaovictor@teste.com', 'teste@123')
    
});
it('deve completar detalhes da conta', () => {
  cy.detalhesConta('joao vitor', 'correa lima', 'ccharly')
})
    
});    
