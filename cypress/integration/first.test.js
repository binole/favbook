it('should pass this test', () => {
  cy.visit('/');

  cy.queryByText('favbook').should('exist');
});
