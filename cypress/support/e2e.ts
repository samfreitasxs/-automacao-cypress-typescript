// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
//import './commands'
import './app'
import './userActions'
// Alternatively you can use CommonJS syntax:
// require('./commands')
import addContext from 'mochawesome/addContext'

require('cypress-xpath')

afterEach(function () {
	cy.screenshot({ capture: 'runner' })
})

Cypress.on('test:after:run', test => {
	let filename = ''
	if (test.state === 'passed' || test.state === 'failed') {
		filename = `${test.title} -- after each hook.png`
		addMochaContext(test, filename)
	}
})

function addMochaContext(test: Cypress.ObjectLike, filename: string) {
	const screenshotsFolder = Cypress.config('screenshotsFolder')
	addContext(
		{ test },
		{
			title: 'Screenshot',
			value: `../screenshots/${Cypress.spec.name}/${filename}`,
		}
	)
}
