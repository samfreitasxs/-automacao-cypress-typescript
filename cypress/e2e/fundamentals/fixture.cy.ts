describe('Login with fixture Data', () => {
	it('should try to login', () => {
		cy.visit('http://zero.webappsecurity.com/login.html')

		cy.fixture('loginData').then(user => {
			const username = user.username
			const password = user.password

			cy.get('#user_login').as('username')
			cy.get('@username').type(username)
			cy.get('#user_password').as('password')
			cy.get('@password').type(password)
			cy.contains('Sign in').click()
		})
	})
})
