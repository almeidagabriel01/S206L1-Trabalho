describe('Teste de Busca de Artigos na Wikipedia', () => {
  it('deve encontrar artigos por título', () => {
    cy.visit('https://www.wikipedia.org/');
    cy.get('#searchInput').type('Albert Einstein{enter}');
    cy.get('#firstHeading').should('contain', 'Albert Einstein');
  });
});