import { faker } from '@faker-js/faker'

describe('checkout specs', () => {
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const postalCode = faker.location.zipCode()

    beforeEach(() => {
        cy.ui_login('standard_user', 'secret_sauce')
    })

    it('success checkout', () => {
        cy.ui_addProductToCard('[data-test="add-to-cart-sauce-labs-backpack"]', '1')
        cy.ui_validadeProductInCart('Sauce Labs Backpack')
        cy.get('[data-test="checkout"]').click()

        cy.get('[data-test="title"]').should('have.text', 'Checkout: Your Information')
        cy.ui_fillCheckoutInfo(firstName, lastName, postalCode)
        
        cy.get('[data-test="title"]').should('have.text', 'Checkout: Overview')
        cy.get('[data-test="total-label"]').should('contain', 'Total: $32.39')
        
        cy.ui_completeCheckout()
    })
})