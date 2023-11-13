describe('Teste Negativo de Busca na Wikipedia', () => {
  it('deve mostrar que não há resultados para um artigo inexistente', () => {
    cy.visit('https://www.wikipedia.org/');
    cy.get('#searchInput').type('ArtigoXYZInexistente{enter}');
    cy.get('.mw-search-createlink > i').should('contain', 'The page "ArtigoXYZInexistente" does not exist');
  });
});