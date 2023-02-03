describe('Feedback Test', () => {

    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.contains('Feedback').click()
    });

    it('should load feedback form', () => {
        cy.get('form').should('be.visible')
    });

    it('should fill feedback form', () => {
        cy.get('#name').type('test')
        cy.get('#email').type('email@email.com')
        cy.get('#subject').type('Feedback')
        cy.get('#comment').type('Comment')
    });

    it('should submit feedback form', () => {
        cy.get('.btn-signin').click()
    });

    it('should display feedback message', () => {
        cy.get('#feedback-title').should('have.text', 'Feedback')
    });
})