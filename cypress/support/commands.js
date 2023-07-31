// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('stubRequest', (method, url, code, fixture) => {
  return cy.intercept(method, `https://stretch-api.onrender.com/api/v1${url}`, {
    statusCode: code,
    fixture: fixture
  })
})

Cypress.Commands.add('loadData', () => {
  cy.stubRequest('GET', '/quotes', 200, 'quotes').as('getQuotes')
  cy.stubRequest('GET', '/images', 200, 'images').as('getImages')
  cy.stubRequest('GET', '/posters', 200, 'posters').as('getPosters')
});