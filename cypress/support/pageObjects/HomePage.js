class HomePage {
  getNameField = () => cy.get('div.form-group > input[name="name"]');

  getSecondNameField = () => cy.get('h4 input[name="name"]');

  getGenderSelect = () => cy.get('#exampleFormControlSelect1');

  getEntrepreneur = () => cy.get('#inlineRadio3');

  getShopLink = () => cy.get('[href="/angularpractice/shop"]');

  getCheckoutButton = () => cy.contains('Checkout');
}

export default HomePage;
