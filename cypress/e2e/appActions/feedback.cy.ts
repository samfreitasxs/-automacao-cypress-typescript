describe('Feedback Test', () => {
	it('Should submit feedback form', () => {
		cy.visitFeedbackPage()
		cy.fixture('feedbackData').then(({ name, email, subject, message }) => {
			cy.submitFeedback(name, email, subject, message)
		})
	})
})
