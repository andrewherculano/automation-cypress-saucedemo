import { faker } from '@faker-js/faker'

describe('checkout specs', () => {
    beforeEach(() => {
        cy.ui_login('standard_user', 'secret_sauce')
        cy.ui_addProductToCard('[data-test="add-to-cart-sauce-labs-backpack"]', '1')
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.url().should('include', '/cart.html')
    })

    it('should complete checkout successfully', () => {
        cy.ui_startCheckout()
        cy.ui_fillCheckoutInfo(
            faker.person.firstName(),
            faker.person.lastName(),
            faker.location.zipCode()
        )
        cy.get('[data-test="continue"]').click()
        
        cy.get('[data-test="title"]').should('have.text', 'Checkout: Overview')
        cy.get('[data-test="total-label"]').should('contain', 'Total: $32.39')
        cy.get('[data-test="finish"]').click()

        cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!')
    })

    it('should display error when first name is empty', () => {
        cy.ui_startCheckout()
        cy.ui_fillCheckoutInfo(
            faker.person.firstName(),
            faker.person.lastName(),
            faker.location.zipCode()
        )
        cy.get('[data-test="firstName"]').clear()
        cy.get('[data-test="continue"]').click()
        cy.ui_validateCheckoutError('First Name')
    })

    it('should display error when last name is empty', () => {
        cy.ui_startCheckout()
        cy.ui_fillCheckoutInfo(
            faker.person.firstName(),
            faker.person.lastName(),
            faker.location.zipCode()
        )
        cy.get('[data-test="lastName"]').clear()
        cy.get('[data-test="continue"]').click()
        cy.ui_validateCheckoutError('Last Name')
    })

    it('should display error when postal code is empty', () => {
        cy.ui_startCheckout()
        cy.ui_fillCheckoutInfo(
            faker.person.firstName(),
            faker.person.lastName(),
            faker.location.zipCode()
        )
        cy.get('[data-test="postalCode"]').clear()
        cy.get('[data-test="continue"]').click()
        cy.ui_validateCheckoutError('Postal Code')
    })

    it('should return to cart when cancel button is clicked', () => {
        cy.ui_startCheckout()
        cy.get('[data-test="cancel"]').click()
        cy.url().should('include', '/cart.html')
    })
})