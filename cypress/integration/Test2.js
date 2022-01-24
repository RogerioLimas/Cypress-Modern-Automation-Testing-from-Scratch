/// <reference types="Cypress" />

describe('My Second Test Suite', () => {
    it('My Second Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.products').as('productLocator');

        // Selenium get hit url in browser, Cypress get acts like findElement of Selenium

        // Parent-child chaining
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text();
            if (textVeg.includes('Cashews')) {
                $el.find('button').click();
            }
        });

        cy.get('a.cart-icon').click()
        cy.contains('button', 'PROCEED TO CHECKOUT').should('be.visible').click();
        cy.contains('button', 'Place Order').click();

        cy.get('select').select('Brazil');
        cy.get('[type=checkbox]').check()
        cy.contains('button', 'Proceed').click()

    })
})
