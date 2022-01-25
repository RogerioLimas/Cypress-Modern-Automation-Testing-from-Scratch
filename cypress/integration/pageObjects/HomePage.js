class HomePage {
    getNameField = () => cy.get('div.form-group > input[name="name"]');

    getSecondNameField = () => cy.get('h4 input[name="name"]');

    getGenderSelect = () => cy.get('#exampleFormControlSelect1');

    getEntrepreneur = () => cy.get('#inlineRadio3')
}

export default HomePage;
