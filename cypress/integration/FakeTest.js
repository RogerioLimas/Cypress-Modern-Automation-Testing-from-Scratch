/// <reference types="Cypress" />

describe('Fake Data Test', () => {
  it('Intercept Test', function () {
    /* cy.loadMockDataFromFile(
      'mock.json',
      'GET',
      'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
      200,
      'retrievedBooks'
    ); */

    cy.loadMockDataFromObject(
      [
        {
          book_name: 'RestAssured with Java!!!!!!!',
          isbn: 'RSUS',
          aisle: '23010',
        },
      ],
      'GET',
      'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
      200,
      'retrievedBooks'
    );
    /* cy.intercept(
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
    ).as('retrievedBooks'); */

    cy.visit('https://rahulshettyacademy.com/angularAppdemo/');
    cy.contains('button', 'Virtual Library').click();
    cy.wait('@retrievedBooks');
    cy.get('p').should('have.text', 'Oops only 1 Book available');
  });
});
