/// <reference types="Cypress" />

describe('My Second Test Suite', () => {
    it('My Second Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force: true})
        // cy.url().should('include', '#top')

    });
});
