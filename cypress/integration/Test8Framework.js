/// <reference types="Cypress" />

describe('My Second Test Suite', () => {
    let name, gender;

    before(() => {
        cy.fixture('example').then((data) => {
            name = data.name;
            gender = data.gender;
        });
    });
    beforeEach(() => console.log('Before Each'));
    after(() => console.log('After'));
    afterEach(() => console.log('After Each'));

    it('My First Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');

        // Validate the name entered
        cy.get('div.form-group > input[name="name"]')
            .type(name)
            .should('have.value', name);
        cy.get('h4 input[name="name"]').should('have.value', name);

        // Validate the required 2 characteres length minimum
        cy.get('div.form-group > input[name="name"]').should('have.attr', 'minlength', '2')

        cy.get('#exampleFormControlSelect1')
            .select(gender)
            .should('have.value', gender);

        // Verify if "Entrepreneur" is disabled
        cy.get('#inlineRadio3').should('be.disabled')
    });
});
