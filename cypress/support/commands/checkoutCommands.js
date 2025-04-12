Cypress.Commands.add('ui_fillCheckoutInfo', (firstName, lastName, postalCode) => {
    cy.get('[data-test="firstName"]').type(firstName)
    cy.get('[data-test="lastName"]').type(lastName)
    cy.get('[data-test="postalCode"]').type(postalCode)
    cy.get('[data-test="continue"]').click()
})

Cypress.Commands.add('ui_completeCheckout', () => {
    cy.get('[data-test="finish"]').click()
    cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!')
}) 