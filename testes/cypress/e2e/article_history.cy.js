describe('Teste de Visualização de Histórico na Wikipedia', () => {
  it('deve visualizar o histórico de edições do artigo', () => {
    cy.visit('https://en.wikipedia.org/wiki/Albert_Einstein');
    cy.get('#ca-history a').click();
    cy.url().should('include', '=history');
    cy.get('.mw-parser-output').should('exist');
  });
});
