describe('inventory specs', () => {
    it('add products to card', () => {
        cy.ui_login('standard_user', 'secret_sauce')
        cy.ui_addProductToCard('[data-test="add-to-cart-sauce-labs-backpack"]', '1')
        cy.ui_addProductToCard('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]', '2')
    })

    it('remove products to card', () => {
        cy.ui_login('standard_user', 'secret_sauce')
        cy.ui_addProductToCard('[data-test="add-to-cart-sauce-labs-backpack"]', '1')
        cy.ui_removeProductToCard('[data-test="remove-sauce-labs-backpack"]')
    })
})