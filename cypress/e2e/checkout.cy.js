describe('checkout specs', () => {
    it('success checkout', () => {
        cy.ui_login('standard_user', 'secret_sauce')
        cy.ui_addProductToCard('[data-test="add-to-cart-sauce-labs-backpack"]', '1')
        cy.ui_validadeProductInCart('Sauce Labs Backpack')

        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="title"]').should('have.text', 'Checkout: Your Information')

        cy.get('[data-test="firstName"]').type('abcdse')
        cy.get('[data-test="lastName"]').type('abcdse')
        cy.get('[data-test="postalCode"]').type('13219190')
        cy.get('[data-test="continue"]').click()

        cy.get('[data-test="title"]').should('have.text', 'Checkout: Overview')
        cy.get('[data-test="total-label"]').should('contain', 'Total: $32.39')
        cy.get('[data-test="finish"]').click()

        cy.get('[data-test="title"]').should('have.text', 'Checkout: Complete!')
        cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!')
        cy.get('[data-test="complete-text"]').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    })
})