/// <reference types="Cypress" />

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../../support/pageObjects/HomePage';
import ProductsPage from '../../../support/pageObjects/ProductsPage';

const {
  getNameField,
  getSecondNameField,
  getGenderSelect,
  getEntrepreneur,
  getShopLink,
} = new HomePage();

const { getCheckoutButton, checkTotalCartPrice, getCountrySelect } =
  new ProductsPage();

Given('I open Ecommerce page', () => {
  cy.visit('https://rahulshettyacademy.com/angularpractice/');
});

When(
  /^I fill the form details with "([^"]*)" and "([^"]*)"$/,
  function (name, gender) {
    this.name = name;
    getNameField().clear().type(name).should('have.value', name);
    getSecondNameField().should('have.value', name);

    // Validate the required 2 characteres length minimum
    getNameField().should('have.attr', 'minlength', '2');

    getGenderSelect().select(gender).should('have.value', gender);
  }
);

Then('validate the form behavior', function () {
  getSecondNameField().should('have.value', this.name);

  // Verify if "Entrepreneur" is disabled
  getEntrepreneur().should('be.disabled');
});

And('select the shop page', () => {
  // Clicks the Shop link
  getShopLink().click();
});

When('I add items to cart', function () {
  // return
  // Validate the name entered
  getNameField().type(this.data.name).should('have.value', this.data.name);
  getSecondNameField().should('have.value', this.data.name);

  // Validate the required 2 characteres length minimum
  getNameField().should('have.attr', 'minlength', '2');

  getGenderSelect()
    .select(this.data.gender)
    .should('have.value', this.data.gender);

  // Verify if "Entrepreneur" is disabled
  getEntrepreneur().should('be.disabled');

  // Clicks the Shop link
  getShopLink().click();

  this.data.productName.forEach((product) => cy.selectProduct(product));

  getCheckoutButton().click();
});

And('Validate the total prices', () => {
  checkTotalCartPrice();
});

Then('Select the country, submit and verify final message', () => {
  getCheckoutButton().click();

  getCountrySelect().type('ind');

  cy.contains('a', 'India', { timeout: 60000 })
    .click()
    .then(() => {
      cy.get('#checkbox2').check({ force: true });
    });

  cy.contains('input', 'Purchase').click();

  cy.get('.alert.alert-success.alert-dismissible').should(
    'include.text',
    'Thank you! Your order will be delivered in next few weeks :-)'
  );
});
