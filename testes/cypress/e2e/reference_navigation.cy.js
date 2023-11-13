describe('Teste de Navegação para Referências na Wikipedia', () => {
  it('deve navegar até a seção de referências do artigo', () => {
    cy.visit('https://en.wikipedia.org/wiki/Albert_Einstein');
    cy.contains('References').click();
    cy.url().should('include', '#References');
  });
});