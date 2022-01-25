class ProductsPage {
    getCardTitlesList = () => cy.get('app-card-list').find('h4.card-title');

    getAddButton = () => cy.get('.btn.btn-info');

    getCartButton = () =>
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link');

    getCheckoutButton = () => cy.contains('Checkout');

    getCountrySelect = () => cy.get('#country');

    #getPrice = (row) => {
        let result = {};

        const priceObjects = row.find('td.col-sm-1.col-md-1.text-center');
        if (priceObjects.length === 2) {
            result.productPrice = priceObjects[0].textContent.replace(
                /[^0-9]/,
                ''
            );
            result.totalPrice = priceObjects[0].textContent.replace(
                /[^0-9]/,
                ''
            );
        }

        return result;
    };

    checkTotalCartPrice = () => {
        let totalPrice;

        const table = cy.get('.table.table-hover tr');

        table.each((row, index) => {
            const prices = this.#getPrice(row);
            if (prices?.productPrice) {
                totalPrice = prices;
            }
        });
        return totalPrice;
    };
}

export default ProductsPage;
