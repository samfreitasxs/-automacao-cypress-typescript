describe('Browser Actions', () => {
    it('should load correct URL', () => {
        cy.visit('http://books.toscrape.com/index.html', {timeout: 10000 })
        cy.url().should('include', 'index.html')
        cy.log('Before reload')
        cy.reload()
        cy.log('After reload')
    }) 

    it('should click on Travel category', () => {
        cy.get('a')
            .contains('Travel')
            .click()
        cy.get('h1')
            .contains('Travel')        
    })

    it('should display correct number of books', () => {
        cy.get('.product_pod')
            .its('length')
            .should('eq', 11)         
    })
})

describe('Challenge', () => {
    it('should click on Poetry category', () => {
        cy.visit('http://books.toscrape.com/index.html', {timeout: 10000 }) 

        cy.get('a')
            .contains('Travel')
            .click()

        cy.get('a')
            .contains('Poetry')
            .click()

            cy.get('a')
            .contains('Olio')
            .click()

            cy.get('.product_main > .price_color')
                .should('have.text', '£23.88')
    }) 
  
})
 