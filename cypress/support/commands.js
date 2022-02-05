import ProductsPage from '../support/pageObjects/ProductsPage';

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('selectProduct', (productName) => {
    const { getCardTitlesList, getAddButton } = new ProductsPage();

    getCardTitlesList().each((column, index) => {
        if (column.text().includes(productName)) {
            getAddButton().eq(index).click();
        }
    });
});

/*
 * Returns fake data and status code from a given URI/URL
 * jsonFilePath: File path from the fixture folder. Ex: data/mockData.json
 * requestMethod: GET/POST/PUT/PATCH/DELETE
 * requestURL: /test.json
 * responseStatusCode: 200, 404, 500, etc
 * variableName - variable that will be used by the cy.wait() function
 */
Cypress.Commands.add('loadMockDataFromFile', (jsonFilePath, requestMethod, requestURL, responseStatusCode, variableName) => {
    cy.intercept({
        method: requestMethod,
        url: requestURL
    },
    {
        statusCode: responseStatusCode ?? 200,
        fixture: jsonFilePath
    }).as(variableName);
});

/*
 * Returns fake data and status code from a given URI/URL
 * jsonObject: JSON object to be retrieved. Ex: {"name": "Rogerio Limas"}
 * requestMethod: GET/POST/PUT/PATCH/DELETE
 * requestURL: /test.json
 * responseStatusCode: 200, 404, 500, etc
 * variableName - variable that will be used by the cy.wait() function
 */
Cypress.Commands.add('loadMockDataFromObject', (jsonObject, requestMethod, requestURL, responseStatusCode, variableName) => {
    cy.intercept({
        method: requestMethod,
        url: requestURL
    },
    {
        statusCode: responseStatusCode ?? 200,
        body: jsonObject
    }).as(variableName);
});
