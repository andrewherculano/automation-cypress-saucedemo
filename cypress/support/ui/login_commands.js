Cypress.Commands.add('ui_login', (username, password) => {
    cy.visit('https://www.saucedemo.com/')
    cy.contains('Swag Labs')

    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password, { log: false })
    cy.get('[data-test="login-button"]').click()
})