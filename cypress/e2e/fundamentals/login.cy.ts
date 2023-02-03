describe('Working with inputs', () => {
    it('should override the current time', () => {
        const date = new Date(2020, 3, 10).getTime() // return a timestamp 
        cy.clock(date)
        cy.log(date)
    })

	it('should load login page', () => {
		cy.visit('http://zero.webappsecurity.com/login.html')
		cy.clearCookies({ log: true })
		cy.clearLocalStorage()
        cy.title().should('include', 'Zero - Log in')
	})

	it('should fill username', () => {
		cy.get('#user_login').as('username') 
		cy.get('@username').clear()
		cy.get('@username').type('Some invalid name', { delay: 50 })
	})

	it('should fill password', () => {
		cy.get('#user_password').as('password') 
		cy.get('@password').clear()
		cy.get('@password').type('Some invalid password', { delay: 50 })
	})

	it('should mark checkbox', () => {
		cy.get('#user_remember_me').check()
		cy.wait(5000)
	})

	it('should submit login form', () => {
		cy.contains('Sign in').click()
	})

	it('should display error message', () => {
		cy.get('.alert-error')
			.should('be.visible')
			.and('contain.text', 'Login and/or password are wrong.')
	})
})
