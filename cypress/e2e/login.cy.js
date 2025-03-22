const errorsMessage = {
  invalidCredentials: 'Epic sadface: Username and password do not match any user in this service',
  notFillFields: 'Epic sadface: Username is required'
}

describe('login specs', () => {
  const { invalidCredentials, notFillFields } = errorsMessage

  it('login is valid', () => {
    cy.ui_login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory.html')
    cy.get('[data-test="title"]').should('contain', 'Products')
  })

  it('login is invalid', () => {
    cy.ui_login('standard_user', '123')
    cy.get('[data-test="error"]').should('contain', invalidCredentials)
  })

  it('do not fill login fields', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.contains('Swag Labs')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', notFillFields)
  })
})