Cypress.Commands.add('ui_addProductToCard', (product, quantidade) => {
    cy.get(product).click()
    cy.get('[data-test="shopping-cart-badge"]').should('contain', quantidade)
})

Cypress.Commands.add('ui_removeProductToCard', (product) => {
    cy.get(product).click()
    cy.get('[data-test="shopping-cart-badge"]').should('not.exist')
})