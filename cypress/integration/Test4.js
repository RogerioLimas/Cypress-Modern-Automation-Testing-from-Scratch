/// <reference types="Cypress" />

describe('My Second Test Suite', () => {
    it('My Second Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // Popups
        // cy.get('#alertbtn').click({scrollBehavior: false})
        // cy.get('#confirmbtn').click({scrollBehavior: false})

        // // window:alert
        // cy.on('window:alert', (message) => {
        //     expect(message).to.equal('Hello , share this practice page and share your knowledge')
        // })

        // // window:confirm
        // cy.on('window:confirm', (message) => {
        //     expect(message).to.equal('Hello , Are you sure you want to confirm?')
        // })

        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'rahulshettyacademy');
        cy.go('back')
        
        // .then(element => {
        //     if (element.attr('target')) {
        //         element.removeAttr('target');
        //     }
        //     cy.wrap(element).click()
        // })
    });
});
