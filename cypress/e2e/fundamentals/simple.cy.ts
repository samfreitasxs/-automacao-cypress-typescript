describe('Browser Actions', () => {
    it('should load correct URL', () => {
        cy.visit('http://example.com', {timeout: 1000 })
    })

    it('should check corret url', () => {
        cy.url().should('include', 'example.com')
    })

    it('should wait for 3 seconds', () => {
        cy.wait(3000)
    })

    it('should pause the execution', () => {
        cy.pause()
    })

    it('should check for current element on page', () => {
        cy.get('h1').should('be.visible')
    })
})

 