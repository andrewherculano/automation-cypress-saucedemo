Cypress.Commands.add('ui_addProductToCard', (product, quantidade) => {
    cy.get(product).click()
    cy.get('[data-test="shopping-cart-badge"]').should('contain', quantidade)
})

Cypress.Commands.add('ui_removeProductToCard', (product) => {
    cy.get(product).click()
    cy.get('[data-test="shopping-cart-badge"]').should('not.exist')
})

Cypress.Commands.add('ui_validadeProductInCart', (productName) => {
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="item-quantity"]').should('contain', '1')
    cy.get('[data-test="inventory-item-name"]').should('contain', productName)
})