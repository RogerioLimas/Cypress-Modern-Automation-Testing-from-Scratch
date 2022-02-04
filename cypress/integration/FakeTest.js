/// <reference types="Cypress" />

describe('Fake Data Test', () => {
  it('Intercept Test', () => {
    const mockData = require('./mock.json');
    cy.intercept(
      {
        // Request to intercept
        method: 'GET',
        url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
      },
      {
        // Response to change
        statusCode: 200,
        body: mockData,
      }
    );
    cy.visit('https://rahulshettyacademy.com/angularAppdemo/');
    cy.contains('button', 'Virtual Library').click();
  });
});
