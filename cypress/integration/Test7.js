/// <reference types="Cypress" />

describe('My Second Test Suite', () => {
    it('My Second Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#opentab').then(element => {
            const url = element.prop('href')
            cy.visit(url)
        })

    });
});
