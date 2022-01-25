/// <reference types="Cypress" />

import HomePage from './pageObjects/HomePage';

describe('My Second Test Suite', () => {
    let name, gender;
    const {
        getNameField,
        getSecondNameField,
        getGenderSelect,
        getEntrepreneur,
    } = new HomePage();

    before(() => {
        cy.fixture('example').then((data) => {
            name = data.name;
            gender = data.gender;
        });
    });

    it('My First Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');

        // Validate the name entered
        getNameField().type(name).should('have.value', name);
        getSecondNameField().should('have.value', name);

        // Validate the required 2 characteres length minimum
        getNameField().should('have.attr', 'minlength', '2');

        getGenderSelect().select(gender).should('have.value', gender);

        // Verify if "Entrepreneur" is disabled
        getEntrepreneur().should('be.disabled');
    });
});
