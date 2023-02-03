describe('Keyboard press simulation', () => {
	it('should login to application using custom commands', () => {
		cy.visit('http://zero.webappsecurity.com/login.html')

		cy.fixture('loginData').then(user => {
			const username = user.username
			const password = user.password
			cy.login(username, password)
		})
	})
})
