describe('Screenshots', () => { 

    beforeEach('Visit page', () => {
        cy.visit('https://devexpress.github.io/testcafe/example')
    })

    it('full page screenshot', () => { 
        cy.screenshot({ capture: 'fullPage'})
    });

    it('single element screenshot', () => {
        cy.get('header').screenshot()

        cy.get('#populate').screenshot()
    });
 })