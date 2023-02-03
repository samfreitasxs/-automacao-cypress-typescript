describe('Demo Test', () => {
	it('Should visit the login page', () => {
		cy.visitLoginPage()
		cy.waitForSeconds(5)
		cy.fixture('loginData').then(({ username, password }) => {
			cy.login(username, password)
		})
	})
})
