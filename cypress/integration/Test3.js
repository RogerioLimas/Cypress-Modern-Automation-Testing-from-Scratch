/// <reference types="Cypress" />

describe('My Second Test Suite', () => {
    it('My Second Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // // Checkboxes
        // cy.get('#checkBoxOption1')
        //     .check()
        //     .should('be.checked')
        //         .and('have.value', 'option1');

        // cy.get('#checkBoxOption1').uncheck()
        //     .should('not.be.checked');

        // cy.get('input[type=checkbox]').check(['option2', 'option3']);

        // // Static Dropdown
        // cy.get('select').select('option2').should('have.value', 'option2')

        // // Dynamic Dropdown
        // const autocomplete = cy.get('#autocomplete')

        // autocomplete
        //     .type('ind')
        //     .get('.ui-menu-item div')
        //     .each((menuItem) => {
        //         if (menuItem.text() === 'India') {
        //             menuItem.click();
        //         }
        //     })
        
        // cy.get('#autocomplete').should('have.value', 'India')

        // (In)Visible
        // cy.get('#displayed-text').should('be.visible');

        // cy.get('#hide-textbox').click({ scrollBehavior: 'center' });
        // cy.get('#displayed-text').should('not.be.visible');
        // cy.get('#show-textbox').click({ scrollBehavior: 'center' });
        // cy.get('#displayed-text').should('be.visible');

        // Radio buttons
        // cy.get('input[type=radio][value=radio3]')
        //     .check({scrollBehavior: false})
        //     .should('be.checked')
        // cy.fixture()
    });
});
