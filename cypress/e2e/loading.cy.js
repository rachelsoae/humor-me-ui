describe('Loading page error handling', () => {
  it('Should navigate to a loading page if no quotes are loaded', () => {
    cy.intercept('GET', 'https://stretch-api.onrender.com/api/v1/quotes', {fixture: 'noQuotes.json'}).as('getNoQuotes')
    cy.intercept('GET', 'https://stretch-api.onrender.com/api/v1/images').as('getImages')
    cy.intercept('GET', 'https://stretch-api.onrender.com/api/v1/posters').as('getPosters')
    cy.visit('http://localhost:3000')
    cy.get('.loading__message').should('have.text', '🤔  Loading...  🤔')
  })
})