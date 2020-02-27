const API_URL = 'https://www.googleapis.com/books/v1/volumes';

before(() => {
  cy.fixture('volumes/q=react&startIndex=0&maxResults=12').as('reactIndex0');
  cy.server().route(
    `${API_URL}?q=react&startIndex=0&maxResults=12`,
    '@reactIndex0'
  );

  cy.fixture('volumes/q=react&startIndex=12&maxResults=12').as('reactIndex12');
  cy.server().route(
    `${API_URL}?q=react&startIndex=12&maxResults=12`,
    '@reactIndex12'
  );

  cy.fixture('volumes/q=angular&startIndex=0&maxResults=12').as(
    'angularIndex0'
  );
  cy.server().route(
    `${API_URL}?q=angular&startIndex=0&maxResults=12`,
    '@angularIndex0'
  );
});

it('should load books when submit search and click on load more', () => {
  cy.visit('/');

  cy.queryByPlaceholderText(/search/i).type('react{enter}');

  cy.findAllByTestId('book-item').should('have.length', 12);

  cy.queryByText(/more/i).click();

  cy.findAllByTestId('book-item').should('have.length', 24);

  cy.queryByPlaceholderText(/search/i)
    .clear()
    .type('angular{enter}');

  cy.findAllByTestId('book-item').should('have.length', 12);
});
