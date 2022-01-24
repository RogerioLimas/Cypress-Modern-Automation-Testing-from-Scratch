/// <reference types="Cypress" />

describe('My First Test Suite', () => {
    it('My First Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.products').as('productLocator');

        cy.get('.search-keyword').type('ca')
        // cy.wait(2000)

        // Selenium get hit url in browser, Cypress get acts like findElement of Selenium
        cy.get('.product').should('have.length', 5)
        cy.get('.product:visible').should('have.length', 4)

        // Parent-child chaining
        cy.get('@productLocator').find('.product').should('have.length', 4);
        cy.get(':nth-child(3) > .product-action > button').click()
 
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(() => {
            console.log('sf')
        });
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text();
            if (textVeg.includes('Cashews')) {
                $el.find('button').click();
            }
        });

        // assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART')
        
        cy.get('.brand').then(logoElement => console.log(logoElement.text()))
    })
})
