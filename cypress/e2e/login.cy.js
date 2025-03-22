describe('login specs', () => {
  it('login is valid', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.contains('Swag Labs')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce', { log: false })
    cy.get('[data-test="login-button"]').click()

    cy.url().should('include', '/inventory.html')
    cy.get('[data-test="title"]').should('contain', 'Products')
  })

  it('login is invalid', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.contains('Swag Labs')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('123', { log: false })
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
  })

  it('do not fill login fields', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.contains('Swag Labs')

    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username is required')
  })
})