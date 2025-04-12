Cypress.Commands.add('ui_fillCheckoutInfo', (firstName, lastName, postalCode) => {
    cy.get('[data-test="firstName"]').type(firstName)
    cy.get('[data-test="lastName"]').type(lastName)
    cy.get('[data-test="postalCode"]').type(postalCode)
})

Cypress.Commands.add('ui_completeCheckout', () => {
    cy.get('[data-test="finish"]').click()
    cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!')
})

Cypress.Commands.add('ui_startCheckout', () => {
    cy.ui_validadeProductInCart('Sauce Labs Backpack')
    cy.get('[data-test="checkout"]').should('be.visible').click()
})

Cypress.Commands.add('ui_validateCheckoutError', (message) => {
    cy.get('[data-test="error"]').should('have.text', `Error: ${message} is required`)
})