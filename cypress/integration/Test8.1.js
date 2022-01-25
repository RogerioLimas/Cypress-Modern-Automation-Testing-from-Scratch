/// <reference types="Cypress" />

describe('Customized functions', () => {
    it('Add to cart', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop')
        
        cy.selectProduct('Samsung Note 8');
        cy.selectProduct('iphone X');
    });
});
