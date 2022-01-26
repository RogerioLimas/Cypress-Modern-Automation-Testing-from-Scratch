/// <reference types="Cypress" />

describe('My Fiveth Test Suite', () => {
    it('My Fiveth Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        const table = cy.get('#product');

        table.get('tr td:nth-child(2)').each((element, index) => {
            const text = element.text();
            if (text.includes('Python')) {
                const priceText = element.next().text();
                expect(priceText).to.equal('25')
                // table
                //     .get('tr td:nth-child(2)')
                //     .eq(index)
                //     .next()
                //     .then((td) => {
                //         const priceText = td.text()
                //         expect(priceText).to.equal('25')
                //     });
            }
        });
    });
});
