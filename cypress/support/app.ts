declare namespace Cypress {
	interface Chainable {
		/**
		 * Comando customizável para realizar login na página, passando o usuário e a senha
		 * @param {string} username - username ou id
		 * @param {string} password - senha
		 */
		login(username: string, password: string): Chainable<Element>

		/**
		 * Comando customizável para acessar a homepage do site
		 */
		visitHomePage(): Chainable<Element>

		/**
		 * Comando customizável para acessar a página de login
		 */
		visitLoginPage(): Chainable<Element>

		/**
		 * Comando customizável para acessar a página de feedback
		 */
		visitFeedbackPage(): Chainable<Element>

		/**
		 * @param seconds - how many seconds should the execution wait
		 */
		waitForSeconds(seconds: number): Chainable<Element>
	}
}

Cypress.Commands.add('login', (username, password) => {
	cy.get('#user_login').type(username)
	cy.get('#user_password').type(password)
	cy.get('#user_remember_me').click()
	cy.contains('Sign in').click()
})

Cypress.Commands.add('visitHomePage', () => {
	cy.visit('http://zero.webappsecurity.com')
})

Cypress.Commands.add('visitLoginPage', () => {
	cy.visit('http://zero.webappsecurity.com/login.html')
})

Cypress.Commands.add('visitFeedbackPage', () => {
	cy.visit('http://zero.webappsecurity.com/feedback.html')
})

Cypress.Commands.add('waitForSeconds', seconds => {
	cy.wait(seconds * 1000)
})
