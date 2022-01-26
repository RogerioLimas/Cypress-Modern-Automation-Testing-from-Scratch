class ProductsPage {
    getCardTitlesList = () => cy.get('app-card-list').find('h4.card-title');

    getAddButton = () => cy.get('.btn.btn-info');

    getCartButton = () =>
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link');

    getCheckoutButton = () => cy.contains('Checkout');

    getCountrySelect = () => cy.get('#country');

    checkTotalCartPrice = () => {
        let summedPrice = 0;
        let totalPrice = 0;

        cy.get('tr td:nth-child(4) strong')
            .each((element) => {
                summedPrice += parseInt(element.text().replace(/[^0-9]/g, ''));
            })
            .then(() => {
                cy.get('h3 > strong')
                    .then((element) => {
                        totalPrice = parseInt(
                            element.text().replace(/[^0-9]/g, '')
                        );
                    })
                    .then(() => expect(totalPrice).to.equal(summedPrice));
            });
    };
}

export default ProductsPage;
