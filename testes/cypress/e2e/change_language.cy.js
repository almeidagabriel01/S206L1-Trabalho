describe('Teste de Mudança de Idioma na Wikipedia', () => {
  it('deve mudar o idioma do artigo para espanhol', () => {
    cy.visit('https://en.wikipedia.org/wiki/Albert_Einstein');
    cy.get('#p-lang-btn-checkbox').click(); // Abrir o menu de idiomas
    cy.get('.uls-lcd-quicklist > .row > .three > .interwiki-es > .autonym').click(); // Selecionar Espanhol
    cy.url().should('include', 'es.wikipedia');
    cy.get('#firstHeading').should('contain', 'Albert Einstein'); // Confirma se o título ainda é o mesmo
  });
});
