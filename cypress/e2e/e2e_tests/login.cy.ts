describe('Login Test', () => {
	before(() => {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.contains('Signin').click()
	})

	it('should try to login with invalid data', () => {
		cy.get('#login_form').should('be.visible')
		cy.get('#user_login').type('invaliduser')
		cy.get('#user_password').type('invalidpass')
		cy.get('.btn').click()
	})

	it('should display error message', () => {
		cy.get('.alert-error')
			.should('be.visible')
			.and('contain', 'Login and/or password are wrong')
	})

	it.only('should login', () => {
		cy.fixture('loginData').then(user => {
			const username = user.username
			const password = user.password

			cy.get('#user_login').type(username)
			cy.get('#user_password').type(password)
			cy.get('.btn').click()
		})
		cy.get('ul.nav-tabs').should('be.visible')
	})

	it('should logout', () => {
		cy.contains('username').click()
		cy.get('#logout_link').click()
		cy.url().should('include', 'index.html')
	})
})
