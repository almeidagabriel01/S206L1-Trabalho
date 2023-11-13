describe('Teste de Acesso à Página de Login na Wikipedia', () => {
  it('deve acessar a página de login e verificar a presença dos campos', () => {
    cy.visit('https://en.wikipedia.org/wiki/Main_Page');
    cy.get('#pt-login-2 > a > span').click();
    cy.url().should('include', 'title=Special:UserLogin');
    cy.get('#wpName1').should('be.visible'); // Verifica se o campo de usuário está visível
    cy.get('#wpPassword1').should('be.visible'); // Verifica se o campo de senha está visível
  });
});
