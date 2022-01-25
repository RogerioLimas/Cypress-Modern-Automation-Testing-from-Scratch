/// <reference types="Cypress" />

import ProductsPage from './pageObjects/ProductsPage';

describe('Customized functions', () => {
    let data;
    const {
        getCartButton,
        checkTotalCartPrice,
        getCheckoutButton,
        getCountrySelect,
    } = new ProductsPage();

    before(() => {
        cy.fixture('example').then((jsonData) => (data = jsonData));
    });

    it('Add to cart', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop');

        data.productName.forEach((product) => cy.selectProduct(product));
    });

    it('Check the cart', () => {
        
        getCartButton().click();

        getCheckoutButton().click();

        getCountrySelect().type('ind');

        cy.contains('a', 'India', { timeout: 60000 }).click().then(() => {
            cy.get('#checkbox2').check({ force: true});
        })
        
        cy.contains('input', 'Purchase').click()
    });
});
