/// <reference types="Cypress" />

describe('Customized functions', () => {
    let data

    before(() => {
        cy.fixture('example').then((jsonData) => data = jsonData)
    })

    it('Add to cart', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop');

        data.productName.forEach((product) => cy.selectProduct(product));
    });
});
