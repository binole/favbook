before(() => {
  cy.fixture('volumes/q=react&startIndex=0&maxResults=12').as('volumes');
  cy.server().route(
    'https://www.googleapis.com/books/v1/volumes?q=react&startIndex=0&maxResults=12',
    '@volumes'
  );
});

it('should load 12 books when searched', () => {
  cy.visit('/');

  cy.queryByPlaceholderText(/search/i).type('react{enter}');

  cy.findAllByTestId('book-item').should('have.length', 12);
});
